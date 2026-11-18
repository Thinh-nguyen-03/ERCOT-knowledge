import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const p = (...parts: string[]) => join(ROOT, ...parts);

export type Source = { id: string; title: string; publisher: string; tier: number; kind: string; url: string; edition?: string; note?: string };
export type Evidence = { id: string; source: string; locator: string; quote: string };
export type Link = { to: string; type: string; note: string };
export type Topic = {
  file: string;
  meta: { id: string; name: string; aliases?: string[]; kind: string; domain: string; level: number; lenses?: string[]; as_of?: string; links?: Link[]; evidence?: Evidence[] };
  sections: { heading: string; body: string }[];
};

export function loadSources(): Source[] {
  return YAML.parse(readFileSync(p("sources/sources.yaml"), "utf8")).sources;
}

export function loadTopicList(): { domains: { id: string; name: string }[]; nodes: { id: string; name: string; kind: string; domain: string }[] } {
  return JSON.parse(readFileSync(p("content/topic-list.json"), "utf8"));
}

/** Collapse everything that legitimately differs between a document and a copied quote: whitespace,
 *  typographic quotes and dashes, soft hyphens, non-breaking spaces. Nothing else is forgiven. */
export function normalize(s: string): string {
  return s
    .normalize("NFKC")
    .replace(/[‘’‚′]/g, "'")
    .replace(/[“”„″]/g, '"')
    .replace(/[‐-―−]/g, "-")
    .replace(/­/g, "")
    .replace(/[  -​ 　]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const textCache = new Map<string, string | null>();
export function sourceText(id: string): string | null {
  if (!textCache.has(id)) {
    const f = p("sources/text", id + ".txt"), ocr = p("sources/text", id + ".ocr.txt");
    // an .ocr.txt file is a second reading of the same document (see pipeline/ocr.sh)
    textCache.set(id, existsSync(f) ? normalize(readFileSync(f, "utf8") + (existsSync(ocr) ? "\n" + readFileSync(ocr, "utf8") : "")) : null);
  }
  return textCache.get(id)!;
}

export function loadTopics(): Topic[] {
  const dir = p("content/topics");
  return readdirSync(dir).filter((f) => f.endsWith(".md")).sort().map((f) => parseTopic(join(dir, f), f));
}

export function parseTopic(path: string, file: string): Topic {
  const raw = readFileSync(path, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing YAML frontmatter`);
  const meta = YAML.parse(m[1]);
  const sections: Topic["sections"] = [];
  let cur: { heading: string; body: string } | null = null;
  for (const line of m[2].split("\n")) {
    const h = line.match(/^## (.+?)\s*$/);
    if (h) { cur = { heading: h[1], body: "" }; sections.push(cur); }
    else if (cur) cur.body += line + "\n";
  }
  for (const s of sections) s.body = s.body.trim();
  return { file, meta, sections };
}

/** Split a section body into the units that must each carry a citation: paragraphs and list items. */
export function blocks(body: string): string[] {
  const out: string[] = [];
  let buf: string[] = [];
  const flush = () => { if (buf.length) out.push(buf.join(" ").trim()); buf = []; };
  for (const line of body.split("\n")) {
    if (!line.trim()) flush();
    else if (/^\s*([-*]|\d+\.)\s+/.test(line)) { flush(); buf.push(line.trim()); }
    else if (/^#{3,}\s/.test(line)) { flush(); out.push(line.trim()); }
    else buf.push(line.trim());
  }
  flush();
  return out.filter(Boolean);
}

export const markers = (s: string): string[] => [...s.matchAll(/\[(e\d+)\]/g)].map((m) => m[1]);
