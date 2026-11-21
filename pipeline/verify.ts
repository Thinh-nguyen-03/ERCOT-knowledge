// Checks every topic against the saved sources. Nothing here asks an AI anything: a quote either appears
// in the snapshot text or it does not.   node pipeline/verify.ts [--json]
import { writeFileSync, mkdirSync } from "node:fs";
import { blocks, loadSources, loadTopicList, loadTopics, markers, normalize, p, sourceText } from "./lib.ts";

const REL = new Set(["is-a", "part-of", "composed-of", "determines", "affects", "causes", "hedges", "settles", "replaced", "regulates",
  "operates", "example-of", "contrasts-with", "used-in", "measures", "prerequisite-of", "related"]);
const HEADINGS = ["Definition", "How it works", "ERCOT context", "Key facts", "Formula", "Example", "Say it like this", "Common confusion",
  "Questions", "Scenarios", "Timeline", "Open items"];
const FACTUAL = new Set(["Definition", "How it works", "ERCOT context", "Key facts", "Formula", "Timeline"]);
const LENSES = new Set(["analyst", "trading", "portfolio", "congestion", "retail", "structuring"]);

export type Issue = { topic: string; level: "error" | "warn"; msg: string };

export function verifyAll(): { issues: Issue[]; stats: Record<string, number> } {
  const issues: Issue[] = [];
  const list = loadTopicList();
  const roster = new Map(list.nodes.map((n) => [n.id, n]));
  const sources = new Map(loadSources().map((s) => [s.id, s]));
  const topics = loadTopics();
  const stats = { topics: topics.length, evidence: 0, quotes_verified: 0, cited_blocks: 0, links: 0, open_items: 0, cross_checked: 0 };
  const seen = new Set<string>();

  for (const t of topics) {
    const id = t.meta?.id ?? t.file;
    const err = (msg: string) => issues.push({ topic: id, level: "error", msg });
    const warn = (msg: string) => issues.push({ topic: id, level: "warn", msg });
    const r = roster.get(id);
    if (!r) { err("id is not in content/topic-list.json"); continue; }
    if (t.file !== id + ".md") err(`file name should be ${id}.md`);
    if (seen.has(id)) err("duplicate topic id");
    seen.add(id);
    for (const k of ["name", "kind", "domain"] as const) if (t.meta[k] !== r[k]) err(`${k} must be "${r[k]}" to match the topic list`);
    if (![1, 2, 3].includes(t.meta.level)) err("level must be 1, 2 or 3");
    for (const l of t.meta.lenses ?? []) if (!LENSES.has(l)) err(`unknown lens "${l}"`);
    if (!t.meta.as_of) warn("missing as_of date");

    // evidence: every quote must be found, word for word, in the snapshot it names
    const ev = new Map<string, { used: number }>();
    const evSource = new Map<string, string>((t.meta.evidence ?? []).map((e) => [e.id, e.source]));
    const industry = (t.meta as any).basis === "industry-reference";
    for (const e of t.meta.evidence ?? []) {
      stats.evidence++;
      if (!/^e\d+$/.test(e.id ?? "")) { err(`evidence id "${e.id}" should look like e1`); continue; }
      if (ev.has(e.id)) err(`duplicate evidence id ${e.id}`);
      ev.set(e.id, { used: 0 });
      if (!sources.has(e.source)) { err(`${e.id}: unknown source "${e.source}"`); continue; }
      if (!e.locator) warn(`${e.id}: no locator`);
      const q = normalize(e.quote ?? "");
      if (q.length < 25) { err(`${e.id}: quote is too short to be evidence`); continue; }
      if (/\.\.\.|…/.test(e.quote) && !sourceText(e.source)?.includes(q)) { err(`${e.id}: quote uses an ellipsis; quotes must be one contiguous passage`); continue; }
      const text = sourceText(e.source);
      if (text === null) { err(`${e.id}: source "${e.source}" has no snapshot text; run fetch`); continue; }
      if (text.includes(q)) stats.quotes_verified++;
      else err(`${e.id}: QUOTE NOT FOUND in ${e.source}: "${q.slice(0, 90)}..."`);
    }

    // body: headings, and a citation on every factual paragraph and bullet
    if (!t.sections.some((s) => s.heading === "Definition" && s.body)) err("missing Definition section");
    for (const s of t.sections) {
      if (!HEADINGS.includes(s.heading)) { err(`unknown heading "${s.heading}"`); continue; }
      if (s.heading === "Open items") { stats.open_items += blocks(s.body).length; continue; }
      for (const b of blocks(s.body)) {
        const ms = markers(b);
        for (const m of ms) { if (ev.has(m)) ev.get(m)!.used++; else err(`${s.heading}: cites ${m}, which is not in evidence`); }
        if (/^#{3,}\s/.test(b)) continue;
        if (FACTUAL.has(s.heading)) {
          if (ms.length) stats.cited_blocks++; else err(`${s.heading}: uncited statement: "${b.slice(0, 80)}..."`);
          // industry-reference topics: a statement resting only on tier 3 material needs two independent publishers
          if (industry && ms.length) {
            const src = [...new Set(ms.map((m) => evSource.get(m)).filter(Boolean))].map((id) => sources.get(id!)!).filter(Boolean);
            const official = src.some((x) => x.tier <= 2), pubs = new Set(src.map((x) => x.publisher));
            if (!official && pubs.size < 2) err(`${s.heading}: industry-reference statement rests on one publisher (${[...pubs].join(", ") || "none"}); cross-check needs two: "${b.slice(0, 70)}..."`);
            if (pubs.size >= 2 || official) stats.cross_checked++;
          }
        }
        else if (!ms.length && /\$\s?\d|\d{4}|\d+(\.\d+)?\s?(MW|GW|MWh|%|percent)/.test(b) && !/^(\(Guidance\)\s*)?Suppose|illustrat/i.test(b) && s.heading !== "Example")
          warn(`${s.heading}: has a number or date but no citation: "${b.slice(0, 80)}..."`);
      }
    }
    for (const [eid, u] of ev) if (!u.used && !(t.meta.links ?? []).some((l) => markers(l.note ?? "").includes(eid))) warn(`${eid} is never cited`);

    // links
    for (const l of t.meta.links ?? []) {
      stats.links++;
      if (!roster.has(l.to)) err(`link to unknown topic "${l.to}"`);
      if (l.to === id) err("links to itself");
      if (!REL.has(l.type)) err(`link to ${l.to}: unknown type "${l.type}"`);
      if (!l.note) err(`link to ${l.to}: missing note`);
      for (const m of markers(l.note ?? "")) if (!ev.has(m)) err(`link to ${l.to}: cites ${m}, which is not in evidence`);
    }
    if ((t.meta.links ?? []).length < 3) warn("fewer than 3 links");
  }
  return { issues, stats };
}

if (process.argv[1]?.endsWith("verify.ts")) {
  const { issues, stats } = verifyAll();
  const errors = issues.filter((i) => i.level === "error");
  if (process.argv.includes("--json")) {
    mkdirSync(p("preview"), { recursive: true });
    writeFileSync(p("preview/verify.json"), JSON.stringify({ stats, issues }, null, 1));
  }
  for (const i of issues) console.log(`${i.level === "error" ? "ERROR" : "warn "} ${i.topic}: ${i.msg}`);
  console.log(`\n${stats.topics} topics, ${stats.quotes_verified}/${stats.evidence} quotes found in sources, ${stats.cited_blocks} cited statements, ` +
    `${stats.links} links, ${stats.open_items} open items, ${errors.length} errors, ${issues.length - errors.length} warnings`);
  process.exit(errors.length ? 1 : 0);
}
