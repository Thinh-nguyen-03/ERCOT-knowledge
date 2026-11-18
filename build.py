#!/usr/bin/env python3
"""Validate the knowledge base and generate everything derived from it.

    python3 build.py           # validate, then write app/data.js, vault/ and exports/
    python3 build.py --check   # validate only

Standard library only. Inputs: data/registry.json, data/nodes/*.json, data/resources.json.
"""
import csv, json, pathlib, re, shutil, sys, datetime

ROOT = pathlib.Path(__file__).resolve().parent
DATA = ROOT / "data"
RELS = {"is-a", "part-of", "composed-of", "determines", "affects", "causes", "hedges", "settles", "replaced",
        "regulates", "operates", "example-of", "contrasts-with", "used-in", "measures", "related"}
KINDS = {"concept", "entity", "product", "rule", "metric", "report", "event", "scenario"}
TEXT_FIELDS = ["definition", "explanation", "ercot_context", "formula", "example", "interview_tip"]

errors, warnings = [], []


def load():
    reg = json.loads((DATA / "registry.json").read_text())
    by_id = {n["id"]: n for n in reg["nodes"]}
    nodes = {}
    for f in sorted((DATA / "nodes").glob("*.json")):
        try:
            arr = json.loads(f.read_text())
        except json.JSONDecodeError as e:
            errors.append(f"{f.name}: invalid JSON ({e})")
            continue
        for n in arr:
            nid = n.get("id")
            if nid not in by_id:
                errors.append(f"{f.name}: id '{nid}' is not in the registry")
                continue
            if nid in nodes:
                errors.append(f"{f.name}: duplicate node '{nid}'")
            r = by_id[nid]
            # the registry is authoritative for name, kind and domain
            for k in ("name", "kind", "domain"):
                if n.get(k) and n[k] != r[k]:
                    warnings.append(f"{nid}: {k} '{n[k]}' differs from registry '{r[k]}'; using registry")
                n[k] = r[k]
            nodes[nid] = n
    for nid, r in by_id.items():
        if nid not in nodes:
            warnings.append(f"{nid}: no content yet (placeholder node)")
            nodes[nid] = {**r, "level": 2, "definition": "", "placeholder": True}
    res = json.loads((DATA / "resources.json").read_text()) if (DATA / "resources.json").exists() else []
    return reg, nodes, res


def validate(nodes):
    for nid, n in nodes.items():
        if n.get("placeholder"):
            continue
        if n["kind"] not in KINDS:
            errors.append(f"{nid}: unknown kind {n['kind']}")
        if n.get("level") not in (1, 2, 3):
            warnings.append(f"{nid}: level should be 1, 2 or 3")
            n["level"] = 2
        if not n.get("definition"):
            errors.append(f"{nid}: missing definition")
        for fu in n.get("follow_ups", []):
            if not fu.get("q") or not fu.get("a"):
                errors.append(f"{nid}: follow-up missing q or a")
        for sc in n.get("scenarios", []):
            if not sc.get("prompt") or not isinstance(sc.get("answer"), list):
                errors.append(f"{nid}: scenario needs prompt and answer list")
        kept = []
        for l in n.get("links", []):
            t = l.get("to")
            if t not in nodes:
                errors.append(f"{nid}: link to unknown id '{t}'")
                continue
            if t == nid:
                continue
            if l.get("rel") not in RELS:
                warnings.append(f"{nid} -> {t}: rel '{l.get('rel')}' not in vocabulary; using 'related'")
                l["rel"] = "related"
            if not l.get("note"):
                warnings.append(f"{nid} -> {t}: link has no note")
            kept.append(l)
        n["links"] = kept
        if len(kept) < 3:
            warnings.append(f"{nid}: only {len(kept)} links")


def edges(nodes):
    """One undirected edge per pair; both directions' notes are kept."""
    pairs = {}
    for nid, n in nodes.items():
        for l in n.get("links", []):
            key = tuple(sorted((nid, l["to"])))
            e = pairs.setdefault(key, {"source": nid, "target": l["to"], "rel": l["rel"], "notes": []})
            e["notes"].append({"from": nid, "to": l["to"], "rel": l["rel"], "note": l.get("note", "")})
    return list(pairs.values())


def safe(name):
    return re.sub(r'[\\/:*?"<>|#^\[\]]', "-", name).strip()


def write_vault(reg, nodes, edge_list):
    vault = ROOT / "vault"
    if vault.exists():
        shutil.rmtree(vault)
    dom = {d["id"]: d["name"] for d in reg["domains"]}
    fname = {nid: safe(n["name"]) for nid, n in nodes.items()}
    neigh = {nid: [] for nid in nodes}
    for e in edge_list:
        for x in e["notes"]:
            neigh[x["from"]].append(("out", x))
            neigh[x["to"]].append(("in", x))
    for nid, n in nodes.items():
        folder = vault / safe(dom[n["domain"]])
        folder.mkdir(parents=True, exist_ok=True)
        L = ["---", f"id: {nid}", f"kind: {n['kind']}", f"domain: {n['domain']}", f"level: {n.get('level', 2)}"]
        if n.get("aliases"):
            L.append("aliases: [" + ", ".join(json.dumps(a) for a in n["aliases"]) + "]")
        L += [f"tags: [ercot, {n['domain']}, {n['kind']}, level-{n.get('level', 2)}]", "---", "", f"# {n['name']}", ""]
        sections = [("Definition", "definition"), ("How it works", "explanation"), ("ERCOT context", "ercot_context"),
                    ("Formula", "formula"), ("Example", "example"), ("Interview tip", "interview_tip")]
        for title, k in sections:
            if n.get(k):
                L += [f"## {title}", "", n[k], ""]
        if neigh[nid]:
            L += ["## Connections", ""]
            for d, x in neigh[nid]:
                other = x["to"] if d == "out" else x["from"]
                arrow = f"{x['rel']} →" if d == "out" else f"← {x['rel']}"
                L.append(f"- {arrow} [[{fname[other]}]]: {x['note']}")
            L.append("")
        if n.get("follow_ups"):
            L += ["## Follow-up questions", ""]
            for fu in n["follow_ups"]:
                L += [f"> [!question]- {fu['q']}", "> " + fu["a"].replace("\n", "\n> "), ""]
        if n.get("scenarios"):
            L += ["## Scenarios", ""]
            for sc in n["scenarios"]:
                L += [f"> [!example]- {sc['prompt']}"] + [f"> - {a}" for a in sc["answer"]] + [""]
        if n.get("timeline"):
            L += ["## Timeline", ""] + [f"- **{t['date']}**: {t['event']}" for t in n["timeline"]] + [""]
        if n.get("verify"):
            L += ["## Verify before an interview", ""] + [f"- {v}" for v in n["verify"]] + [""]
        if n.get("sources"):
            L += ["## Sources", ""] + [f"- [{s.get('title', s['url'])}]({s['url']})" for s in n["sources"]] + [""]
        (folder / f"{fname[nid]}.md").write_text("\n".join(L))
    home = ["# ERCOT Knowledge Base", "", "Open the graph view to see every connection.", ""]
    for d in reg["domains"]:
        home += [f"## {d['name']}", ""]
        home += [f"- [[{fname[n['id']]}]]" for n in reg["nodes"] if n["domain"] == d["id"]]
        home.append("")
    (vault / "Home.md").write_text("\n".join(home))


def write_exports(nodes):
    out = ROOT / "exports"
    out.mkdir(exist_ok=True)
    with open(out / "anki.csv", "w", newline="") as f:
        w = csv.writer(f)
        for nid, n in nodes.items():
            if n.get("placeholder"):
                continue
            tags = f"ercot {n['domain']} level{n.get('level', 2)}"
            w.writerow([f"What is {n['name']}?", n["definition"], tags])
            for fu in n.get("follow_ups", []):
                w.writerow([fu["q"], fu["a"], tags])
            for sc in n.get("scenarios", []):
                w.writerow([sc["prompt"], "<br>".join("• " + a for a in sc["answer"]), tags + " scenario"])


def main():
    reg, nodes, res = load()
    validate(nodes)
    for w in warnings:
        print("warn:", w)
    for e in errors:
        print("ERROR:", e)
    if errors:
        sys.exit(1)
    E = edges(nodes)
    real = [n for n in nodes.values() if not n.get("placeholder")]
    stats = {"nodes": len(nodes), "written": len(real), "edges": len(E),
             "questions": sum(len(n.get("follow_ups", [])) for n in real),
             "scenarios": sum(len(n.get("scenarios", [])) for n in real)}
    print("ok:", ", ".join(f"{v} {k}" for k, v in stats.items()))
    if "--check" in sys.argv:
        return
    order = [n["id"] for n in reg["nodes"]]
    kb = {"generated": datetime.date.today().isoformat(), "stats": stats, "domains": reg["domains"],
          "nodes": [nodes[i] for i in order], "edges": E, "resources": res}
    (ROOT / "app" / "data.js").write_text("window.KB = " + json.dumps(kb, separators=(",", ":"), ensure_ascii=False) + ";\n")
    write_vault(reg, nodes, E)
    write_exports(nodes)
    print("wrote app/data.js, vault/, exports/anki.csv")


if __name__ == "__main__":
    main()
