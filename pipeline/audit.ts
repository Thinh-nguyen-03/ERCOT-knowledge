// Mechanical audit. Finds things a program can find without judgement, and writes one "packet" per topic
// so a human or reviewing agent can judge each statement against its quote AND the text around the quote.
//   node pipeline/audit.ts     -> preview/audit/flags.json, preview/audit/SUMMARY.md, preview/audit/packets/<id>.md
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { blocks, loadSources, loadTopicList, loadTopics, markers, normalize, p } from "./lib.ts";

type Copy = { kind: "text" | "ocr" | "alt"; norm: string; lineAt: number[]; lines: string[] };
const copies = new Map<string, Copy[]>();
function load(id: string): Copy[] {
  if (!copies.has(id)) {
    const out: Copy[] = [];
    for (const [suffix, kind] of [["", "text"], [".ocr", "ocr"], [".alt", "alt"]] as const) {
      const f = p("sources/text", id + suffix + ".txt");
      if (!existsSync(f)) continue;
      const lines = readFileSync(f, "utf8").split("\n");
      let norm = ""; const lineAt: number[] = [];
      lines.forEach((l, i) => { const n = normalize(l); if (!n) return; if (norm) norm += " "; for (let k = 0; k <= n.length; k++) lineAt.push(i); norm += n; });
      out.push({ kind, norm, lineAt, lines });
    }
    copies.set(id, out);
  }
  return copies.get(id)!;
}

const PENDING = /\[(NPRR|PGRR|NOGRR|SCR|OBDRR|RMGRR|VCMRR|SMOGRR)\s?\d+[^\]]{0,400}?(upon system implementation|Replace|Insert|Delete)/i;
const isTable = (l: string) => /^\s*[|+]/.test(l);

function locate(source: string, quote: string) {
  const q = normalize(quote);
  for (const c of load(source)) {
    const i = c.norm.indexOf(q);
    if (i < 0) continue;
    const line = c.lineAt[i] ?? 0;
    // pending box: quote sits in a table whose first rows carry an "[NPRRnnnn: Replace ... upon system implementation]" note
    let pending: string | null = null;
    if (isTable(c.lines[line] ?? "")) {
      let j = line, guard = 0;
      while (j >= 0 && guard++ < 400 && (isTable(c.lines[j]) || !c.lines[j].trim())) {
        const m = c.lines[j].match(PENDING); if (m) { pending = normalize(c.lines[j]).slice(0, 160); break; }
        j--;
      }
    }
    let page: number | null = null;
    if (c.kind === "ocr") for (let j = line; j >= 0; j--) { const m = c.lines[j].match(/===== page (\d+) \(OCR\)/); if (m) { page = +m[1]; break; } }
    // nearest heading above, for orientation
    let heading = "";
    for (let j = line; j >= Math.max(0, line - 400); j--) { const t = c.lines[j].trim(); if (/^\d+(\.\d+){1,5}\s+\S/.test(t) && t.length < 140) { heading = t; break; } }
    return { copy: c.kind, line: line + 1, pending, page, heading,
      before: c.norm.slice(Math.max(0, i - 450), i), after: c.norm.slice(i + q.length, i + q.length + 450) };
  }
  return null;
}

const NUM = /\$\s?\d[\d,]*(?:\.\d+)?|\d[\d,]*(?:\.\d+)?\s?(?:%|percent|MW|GW|MWh|kV|Hz|GWh|kW)|\b(?:19|20)\d\d\b|\b\d{1,3}(?:,\d{3})+(?:\.\d+)?\b|\b\d+\.\d+\b/g;
const digits = (s: string) => (s.match(/\d[\d,]*(?:\.\d+)?/) ?? [""])[0].replace(/,/g, "").replace(/\.0+$/, "");

const list = loadTopicList();
const nameOf = new Map(list.nodes.map((n) => [n.id, n.name]));
const sources = new Map(loadSources().map((s) => [s.id, s]));
const topics = loadTopics();
const written = new Set(topics.map((t) => t.meta.id));
const dir = p("preview/audit"); rmSync(dir, { recursive: true, force: true }); mkdirSync(p("preview/audit/packets"), { recursive: true });

type Flag = { topic: string; kind: string; where: string; detail: string };
const flags: Flag[] = [];
const ocrPages = new Map<string, Set<number>>();
const tierCount: Record<string, number> = {};

for (const t of topics) {
  const id = t.meta.id, ev = new Map((t.meta.evidence ?? []).map((e) => [e.id, e]));
  const loc = new Map<string, ReturnType<typeof locate>>();
  for (const e of ev.values()) {
    const l = locate(e.source, e.quote); loc.set(e.id, l);
    const s = sources.get(e.source); tierCount[s?.tier ?? "?"] = (tierCount[s?.tier ?? "?"] ?? 0) + 1;
    if (!l) { flags.push({ topic: id, kind: "not-found", where: e.id, detail: e.source }); continue; }
    if (l.pending) flags.push({ topic: id, kind: "pending-box", where: e.id, detail: `${e.source} line ${l.line}: ${l.pending}` });
    if (l.copy === "ocr") { flags.push({ topic: id, kind: "ocr", where: e.id, detail: `${e.source} page ${l.page}` }); if (l.page) { if (!ocrPages.has(e.source)) ocrPages.set(e.source, new Set()); ocrPages.get(e.source)!.add(l.page); } }
    if (s?.tier === 3) flags.push({ topic: id, kind: "tier-3", where: e.id, detail: e.source });
    if (/nprr\d+|pgrr\d+|nogrr\d+|-pfp|draft|proposal|staff-rec|workshop|comments/i.test(e.source) || /propos|draft|not yet adopted/i.test(s?.edition ?? "") || /propos|draft/i.test(s?.title ?? ""))
      flags.push({ topic: id, kind: "proposal-or-filing-source", where: e.id, detail: `${e.source}: revision-request reports contain party comments and proposals as well as adopted text` });
  }
  const P: string[] = [`# Audit packet: ${t.meta.name} (${id})`, "", `kind ${t.meta.kind} · domain ${t.meta.domain} · level ${t.meta.level}`, ""];
  const unit = (where: string, text: string) => {
    const ms = [...new Set(markers(text))]; if (!ms.length) return;
    const quoteDigits = new Set<string>();
    for (const m of ms) for (const n of (ev.get(m)?.quote ?? "").match(NUM) ?? []) quoteDigits.add(digits(n));
    const stmt = text.replace(/\[e\d+\]/g, "").replace(/^\s*(\d+\.|[-*])\s+/, "");
    const missing = [...new Set((stmt.match(NUM) ?? []).map((n) => n.trim()))].filter((n) => !quoteDigits.has(digits(n)) && ![...quoteDigits].some((q) => q && (q.startsWith(digits(n)) || digits(n).startsWith(q))));
    if (missing.length) flags.push({ topic: id, kind: "number-not-in-quote", where, detail: `${missing.join(", ")} :: ${stmt.slice(0, 140)}` });
    P.push(`- **${where}** (cites ${ms.join(", ")})${missing.length ? " FLAG number-not-in-quote: " + missing.join(", ") : ""}: ${text}`);
  };
  P.push("## Evidence (quote, where it sits in the source, and the text around it)", "");
  for (const e of ev.values()) {
    const l = loc.get(e.id), s = sources.get(e.source);
    P.push(`### ${e.id} · \`${e.source}\` · tier ${s?.tier} · ${s?.title}${s?.edition ? " (" + s.edition + ")" : ""}`,
      `locator: ${e.locator}` + (l ? ` · ${l.copy} copy line ${l.line}${l.page ? ", OCR page " + l.page : ""}${l.heading ? " · heading above: " + l.heading : ""}` : " · NOT FOUND"),
      l?.pending ? `FLAG pending-box: ${l.pending}` : "", `BEFORE: …${l?.before.slice(-300) ?? ""}`, `QUOTE: ${normalize(e.quote)}`, `AFTER: ${l?.after.slice(0, 300) ?? ""}…`, "");
  }
  P.push("## Statements to check", "");
  for (const s of t.sections) { if (s.heading === "Open items") continue; blocks(s.body).forEach((b, i) => unit(`${s.heading} #${i + 1}`, b)); }
  (t.meta.links ?? []).forEach((l) => { unit(`Link to ${l.to}`, `${l.type} ${nameOf.get(l.to) ?? l.to}: ${l.note ?? ""}`); if (!written.has(l.to)) flags.push({ topic: id, kind: "link-to-unwritten", where: l.to, detail: "" }); });
  // uncited blocks in guidance sections, listed so a reviewer can scan them for smuggled facts
  const g: string[] = [];
  for (const s of t.sections) if (["Say it like this", "Common confusion", "Questions", "Scenarios", "Example"].includes(s.heading))
    for (const b of blocks(s.body)) if (!markers(b).length && !/^#{3,}/.test(b)) g.push(`- (${s.heading}) ${b}`);
  if (g.length) P.push("## Uncited guidance text (check for new facts, numbers, dates, names)", "", ...g, "");
  writeFileSync(p("preview/audit/packets", id + ".md"), P.join("\n").replace(/\n{3,}/g, "\n\n") + "\n");
}

const by: Record<string, number> = {}; for (const f of flags) by[f.kind] = (by[f.kind] ?? 0) + 1;
writeFileSync(p("preview/audit/flags.json"), JSON.stringify({ counts: by, evidenceByTier: tierCount,
  ocrPages: Object.fromEntries([...ocrPages].map(([k, v]) => [k, [...v].sort((a, b) => a - b)])), flags }, null, 1));
const S = ["# Mechanical audit", "", `Generated ${new Date().toISOString().slice(0, 10)} over ${topics.length} topics.`, "",
  "## Counts", "", ...Object.entries(by).map(([k, v]) => `- ${k}: ${v}`), "", "## Evidence quotes by source tier", "", ...Object.entries(tierCount).map(([k, v]) => `- tier ${k}: ${v}`), ""];
for (const k of Object.keys(by)) { S.push(`## ${k}`, ""); for (const f of flags.filter((x) => x.kind === k)) S.push(`- ${f.topic} · ${f.where}${f.detail ? " · " + f.detail : ""}`); S.push(""); }
writeFileSync(p("preview/audit/SUMMARY.md"), S.join("\n"));
console.log(JSON.stringify({ topics: topics.length, flags: by, tiers: tierCount, ocrPages: [...ocrPages].map(([k, v]) => `${k}:${v.size}`) }));
