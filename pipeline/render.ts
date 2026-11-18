// Writes preview/index.html (a self-contained reading view: every topic in full, with the source's own
// wording shown inline under each statement) and preview/REVIEW.md (what the owner should check).
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { blocks, loadSources, loadTopicList, loadTopics, markers, p } from "./lib.ts";
import { verifyAll } from "./verify.ts";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const list = loadTopicList();
const sources = new Map(loadSources().map((s) => [s.id, s]));
const topics = loadTopics();
const byId = new Map(topics.map((t) => [t.meta.id, t]));
const nameOf = new Map(list.nodes.map((n) => [n.id, n.name]));
const { issues, stats } = verifyAll();
const meta = (id: string) => { const f = p("sources/meta", id + ".json"); return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : {}; };

function inline(s: string, tid: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])/g, "<i>$1</i>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\s*\[(e\d+)\]/g, (_m, e) => `<button class="cite" data-e="${tid}-${e}" title="Show the source wording">${e.slice(1)}</button>`);
}

function quotesFor(t: (typeof topics)[number], ids: string[]): string {
  const ev = new Map((t.meta.evidence ?? []).map((e) => [e.id, e]));
  return [...new Set(ids)].filter((i) => ev.has(i)).map((i) => {
    const e = ev.get(i)!, s = sources.get(e.source), m = meta(e.source);
    return `<blockquote class="q" data-e="${t.meta.id}-${i}" hidden><span class="qn">${i.slice(1)}</span>${esc(e.quote)}` +
      `<cite>${esc(s?.title ?? e.source)}${s?.edition ? ", " + esc(s.edition) : ""} · ${esc(e.locator ?? "")}` +
      `${m.retrieved ? " · retrieved " + m.retrieved : ""} · <a href="${esc(s?.url ?? "#")}" target="_blank" rel="noopener">source file</a></cite></blockquote>`;
  }).join("");
}

function section(t: (typeof topics)[number], heading: string, body: string): string {
  const tid = t.meta.id;
  let html = "", inList = false;
  const close = () => { if (inList) { html += "</ul>"; inList = false; } };
  for (const b of blocks(body)) {
    const q = quotesFor(t, markers(b));
    if (/^#{3,}\s/.test(b)) { close(); html += `<h4>${inline(b.replace(/^#+\s*/, ""), tid)}</h4>`; }
    else if (/^([-*]|\d+\.)\s+/.test(b)) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${inline(b.replace(/^([-*]|\d+\.)\s+/, ""), tid)}${q}</li>`; }
    else { close(); html += `<p>${inline(b, tid)}</p>${q}`; }
  }
  close();
  const cls = heading === "Open items" ? " open" : ["Say it like this", "Common confusion", "Questions", "Scenarios", "Example"].includes(heading) ? " guide" : "";
  return `<section class="sec${cls}"><h3>${esc(heading)}</h3>${html}</section>`;
}

function topicHtml(t: (typeof topics)[number]): string {
  const m = t.meta;
  const links = (m.links ?? []).map((l) => {
    const has = byId.has(l.to);
    return `<li><span class="rel">${esc(l.type)}</span> ${has ? `<a href="#${l.to}">${esc(nameOf.get(l.to) ?? l.to)}</a>` : `<span class="pending" title="Not written yet">${esc(nameOf.get(l.to) ?? l.to)}</span>`}` +
      `<span class="note">${inline(l.note ?? "", m.id)}</span>${quotesFor(t, markers(l.note ?? ""))}</li>`;
  }).join("");
  const def = t.sections.find((s) => s.heading === "Definition");
  return `<article id="${m.id}" data-search="${esc([m.name, ...(m.aliases ?? [])].join(" ").toLowerCase())}">
<header><div class="tags"><span>${esc(m.domain)}</span><span>${esc(m.kind)}</span><span>level ${m.level}</span>${(m.lenses ?? []).map((l) => `<span>${esc(l)}</span>`).join("")}<span>checked ${esc(String(m.as_of ?? "?"))}</span></div>
<h2>${esc(m.name)}</h2>${m.aliases?.length ? `<p class="aka">Also: ${esc(m.aliases.join(" · "))}</p>` : ""}</header>
${def ? section(t, "Definition", def.body) : ""}
${t.sections.filter((s) => s.heading !== "Definition" && s.heading !== "Open items").map((s) => section(t, s.heading, s.body)).join("")}
${links ? `<section class="sec"><h3>Connections</h3><ul class="links">${links}</ul></section>` : ""}
${t.sections.filter((s) => s.heading === "Open items").map((s) => section(t, s.heading, s.body)).join("")}
</article>`;
}

const order = list.nodes.map((n) => n.id).filter((id) => byId.has(id));
const nav = list.domains.map((d) => {
  const items = order.filter((id) => byId.get(id)!.meta.domain === d.id);
  return items.length ? `<h4>${esc(d.name)}</h4>` + items.map((id) => `<a href="#${id}">${esc(nameOf.get(id)!)}</a>`).join("") : "";
}).join("");

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>ERCOT Knowledge Base: reading view</title><style>
:root{--bg:#f6f7f9;--card:#fff;--line:#dfe3ea;--text:#1a2233;--mut:#5c6880;--acc:#a8650f;--q:#f3efe6;--ok:#1d7a4c;--warn:#b3541e}
@media(prefers-color-scheme:dark){:root{--bg:#0e131c;--card:#151c29;--line:#27324a;--text:#e5eaf3;--mut:#94a1b8;--acc:#f0b458;--q:#1c2333;--ok:#6cd39a;--warn:#f08a5d}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
.layout{display:grid;grid-template-columns:270px minmax(0,1fr);max-width:1180px;margin:0 auto}
nav{position:sticky;top:0;height:100vh;overflow:auto;padding:16px;border-right:1px solid var(--line);font-size:14px}
nav input{width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--text);font:inherit;margin-bottom:8px}
nav h4{margin:14px 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--mut)}nav a{display:block;padding:2px 0;color:var(--text);text-decoration:none}nav a:hover{color:var(--acc)}
main{padding:16px 20px 120px;min-width:0}.banner{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 16px;margin-bottom:16px;font-size:14px;color:var(--mut)}
.banner b{color:var(--text)}article{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:22px 24px;margin-bottom:20px;scroll-margin-top:12px}
h2{margin:6px 0 2px;font-size:24px;line-height:1.25}.aka{margin:0;color:var(--mut);font-size:14px}.tags{display:flex;flex-wrap:wrap;gap:6px}
.tags span{font-size:11px;border:1px solid var(--line);border-radius:99px;padding:1px 8px;color:var(--mut)}
.sec{margin-top:18px}.sec h3{font-size:12px;text-transform:uppercase;letter-spacing:.07em;color:var(--mut);margin:0 0 6px}.sec p{margin:0 0 8px}.sec ul{margin:0 0 8px;padding-left:20px}.sec li{margin-bottom:6px}
.sec h4{margin:14px 0 4px;font-size:16px}.guide{border-left:3px solid var(--acc);padding-left:14px}.open{border-left:3px solid var(--warn);padding-left:14px}
.cite{font:600 11px/1 system-ui;vertical-align:super;border:1px solid var(--line);background:var(--q);color:var(--acc);border-radius:6px;padding:2px 5px;margin-left:3px;cursor:pointer}
.cite.on{background:var(--acc);color:var(--card)}
.q{margin:6px 0 12px;padding:10px 14px;background:var(--q);border-radius:8px;font-size:14.5px;position:relative;border-left:3px solid var(--acc);white-space:pre-wrap}
.q .qn{font:700 11px system-ui;color:var(--acc);margin-right:8px}.q cite{display:block;margin-top:6px;font-size:12px;color:var(--mut);font-style:normal}.q a{color:var(--mut)}
.links{list-style:none;padding:0!important}.links li{padding:4px 0}.rel{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);margin-right:6px}.links a{font-weight:600;color:var(--text)}
.pending{font-weight:600;color:var(--mut)}.note{display:block;color:var(--mut);font-size:14.5px}
.tools{display:flex;gap:8px;margin-top:8px}.tools button{font:inherit;font-size:13px;border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:8px;padding:4px 10px;cursor:pointer}
@media(max-width:800px){.layout{display:block}nav{position:static;height:auto;max-height:45vh;border-right:0;border-bottom:1px solid var(--line)}main{padding:12px 12px 80px}article{padding:16px}}
</style></head><body><div class="layout"><nav><input id="f" type="search" placeholder="Filter topics…" aria-label="Filter topics">
<div class="tools"><button id="all">Show all source text</button></div>${nav}</nav>
<main><div class="banner"><b>${stats.topics} topics</b> · <b>${stats.quotes_verified} of ${stats.evidence}</b> source quotes found word for word in the saved documents · ${stats.cited_blocks} cited statements · ${stats.open_items} open items. Tap a small number to see the source's own wording. Sections with a coloured bar are guidance or open items.</div>
${order.map((id) => topicHtml(byId.get(id)!)).join("\n")}</main></div>
<script>
document.addEventListener('click',function(e){var b=e.target.closest('.cite');if(!b)return;var k=b.dataset.e,scope=b.closest('li,section');var q=null,n=b.closest('p,li');
 if(n&&n.tagName==='P'){var s=n.nextElementSibling;while(s&&s.classList.contains('q')){if(s.dataset.e===k)q=s;s=s.nextElementSibling}}
 if(!q&&n)q=n.querySelector('.q[data-e="'+k+'"]');if(!q)q=scope.querySelector('.q[data-e="'+k+'"]');if(q){q.hidden=!q.hidden;b.classList.toggle('on',!q.hidden)}});
var shown=false;document.getElementById('all').onclick=function(){shown=!shown;document.querySelectorAll('.q').forEach(function(q){q.hidden=!shown});document.querySelectorAll('.cite').forEach(function(c){c.classList.toggle('on',shown)});this.textContent=shown?'Hide source text':'Show all source text'};
document.getElementById('f').oninput=function(){var v=this.value.toLowerCase().trim();document.querySelectorAll('article').forEach(function(a){a.hidden=!!v&&a.dataset.search.indexOf(v)<0&&a.textContent.toLowerCase().indexOf(v)<0})};
</script></body></html>`;

mkdirSync(p("preview"), { recursive: true });
writeFileSync(p("preview/index.html"), html);

// review list
const R: string[] = ["# Review list", "", `Generated ${new Date().toISOString().slice(0, 10)}. ${stats.topics} topics, ${stats.quotes_verified}/${stats.evidence} quotes found word for word in the saved sources.`, ""];
const errs = issues.filter((i) => i.level === "error"), warns = issues.filter((i) => i.level === "warn");
R.push("## Failed checks", "", ...(errs.length ? errs.map((i) => `- **${i.topic}**: ${i.msg}`) : ["None."]), "");
R.push("## Open items (could not be sourced, or sources conflict)", "");
let anyOpen = false;
for (const id of order) {
  const s = byId.get(id)!.sections.find((x) => x.heading === "Open items");
  if (s?.body) { anyOpen = true; R.push(`### ${nameOf.get(id)}`, "", s.body, ""); }
}
if (!anyOpen) R.push("None.", "");
R.push("## Warnings", "", ...(warns.length ? warns.map((i) => `- ${i.topic}: ${i.msg}`) : ["None."]), "");
const missing = list.nodes.filter((n) => !byId.has(n.id));
R.push("## Topics not written yet", "", `${missing.length} of ${list.nodes.length}.`, "");
writeFileSync(p("preview/REVIEW.md"), R.join("\n"));
console.log(`wrote preview/index.html (${(html.length / 1024).toFixed(0)} KB) and preview/REVIEW.md; ${errs.length} errors, ${warns.length} warnings`);
