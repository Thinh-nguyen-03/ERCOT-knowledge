// Download each registered source, keep the raw file locally, and commit its extracted text plus a
// small record of where and when it came from.   node pipeline/fetch.ts [id ...] [--force]
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { loadSources, p } from "./lib.ts";

const args = process.argv.slice(2);
const force = args.includes("--force");
const wanted = new Set(args.filter((a) => !a.startsWith("--")));
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

for (const d of ["sources/raw", "sources/text", "sources/meta"]) mkdirSync(p(d), { recursive: true });

function extract(kind: string, raw: string): string {
  const big = { maxBuffer: 1 << 30, encoding: "utf8" as const };
  if (kind === "pdf") return execFileSync("pdftotext", ["-enc", "UTF-8", raw, "-"], big);
  if (kind === "docx") return execFileSync("pandoc", ["-f", "docx", "-t", "plain", "--wrap=none", "--track-changes=accept", raw], big);
  if (kind === "html") return execFileSync("pandoc", ["-f", "html", "-t", "plain", "--wrap=none", raw], big);
  if (kind === "txt") return readFileSync(raw, "utf8");
  if (kind === "doc") { // old Word format: convert to docx with LibreOffice, then read as docx
    const dir = p("sources/raw/_convert"); mkdirSync(dir, { recursive: true });
    execFileSync("soffice", ["--headless", "--convert-to", "docx", "--outdir", dir, raw], { stdio: "ignore", timeout: 180000 });
    const out = p("sources/raw/_convert", raw.split("/").pop()!.replace(/\.doc$/, ".docx"));
    return execFileSync("pandoc", ["-f", "docx", "-t", "plain", "--wrap=none", "--track-changes=accept", out], big);
  }
  throw new Error("unknown kind " + kind);
}

let failed = 0;
for (const s of loadSources()) {
  if (wanted.size && !wanted.has(s.id)) continue;
  const raw = p("sources/raw", `${s.id}.${s.kind}`);
  const metaFile = p("sources/meta", s.id + ".json");
  if (!force && existsSync(metaFile) && existsSync(p("sources/text", s.id + ".txt"))) { console.log("skip ", s.id); continue; }
  try {
    execFileSync("curl", ["-sS", "-L", "--fail", "-m", "180", "--retry", "3", "--retry-delay", "2", "-A", UA,
      "-H", "Accept: text/html,application/xhtml+xml,application/pdf,*/*", "-o", raw, s.url], { stdio: ["ignore", "ignore", "pipe"] });
    const bytes = readFileSync(raw);
    const text = extract(s.kind, raw).replace(/\r/g, "");
    if (text.trim().length < 500) throw new Error("extracted text is suspiciously short (" + text.trim().length + " chars)");
    writeFileSync(p("sources/text", s.id + ".txt"), text);
    writeFileSync(metaFile, JSON.stringify({ id: s.id, title: s.title, publisher: s.publisher, tier: s.tier, edition: s.edition ?? null,
      url: s.url, retrieved: new Date().toISOString().slice(0, 10), raw_bytes: statSync(raw).size,
      raw_sha256: createHash("sha256").update(bytes).digest("hex"), text_chars: text.length }, null, 1) + "\n");
    console.log("ok   ", s.id, `${(bytes.length / 1024).toFixed(0)} KB -> ${text.length} chars`);
  } catch (e: any) {
    failed++;
    console.log("FAIL ", s.id, String(e.stderr || e.message).trim().split("\n").pop());
  }
}
if (failed) { console.log(failed + " source(s) failed"); process.exit(1); }
