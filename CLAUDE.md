# ERCOT knowledge base: project rules

A private, source-backed ERCOT market knowledge base for one analyst (and possibly one teammate).
Phase 1 (current) builds the knowledge base from real sources. The app comes after.

## Standing rules from the owner

1. **Match the sub-agent model to the task. Always.**
   - Sonnet: lookups, finding URLs, fetching, extraction, single-source topics (a definition that lives in one
     protocol section), mechanical checks, formatting.
   - Opus: multi-source synthesis, market-design reasoning, conflicting sources, final accuracy review.
   - Never spawn Opus for work Sonnet can do. If no agent is needed, do it inline with code.
2. **Nothing made up.** Every factual statement in a topic must be backed by a verbatim quote from a saved
   source snapshot. `node pipeline/verify.ts` enforces this by string match, not by AI judgement.
   Anything unsupported is removed or goes to the review list. Guidance (how to phrase an answer) is labelled
   as guidance and may not introduce new facts.
3. **Full text in the tool.** Topics carry the actual definition, explanation and the source's own wording.
   Never make the reader follow a link to understand something. Links are citations only.
4. **ERCOT market knowledge only.** No generic trading-skill content (pitching, mental math, firm guides).
   Keep trading/risk concepts only where they are ERCOT-specific.
5. **Private.** Not a public site. Long excerpts of public official documents are fine; for commercial
   publications keep quotes short.
6. **Ask before building new phases.** Plans are not approval. Wait for an explicit go-ahead.

## Layout

- `content/topic-list.json`: roster of topic ids, names, kinds, domains.
- `content/TOPIC_FORMAT.md`: the topic file format. Read it before writing a topic.
- `content/topics/<id>.md`: one file per topic.
- `sources/sources.yaml`: registry of source documents (id, title, publisher, tier, url).
- `sources/text/<id>.txt`: extracted text of each snapshot (committed; what quotes are checked against).
- `sources/meta/<id>.json`: url, retrieval date, sha256 of the raw file.
- `sources/raw/`: raw downloads (not committed).
- `pipeline/`: `fetch.ts` (download + extract), `verify.ts` (quote and citation checks), `render.ts` (reading view).
- `preview/`: generated reading view and review list.

## Commands

```
node pipeline/fetch.ts [source-id ...]   # download and extract sources (all if none given)
node pipeline/verify.ts                  # check every topic; exits non-zero on errors
node pipeline/render.ts                  # write preview/index.html and preview/REVIEW.md
```

## Source tiers

1. Rules: ERCOT Nodal Protocols, PUCT rules (16 TAC 25), Texas statutes.
2. Official reports: IMM State of the Market, ERCOT reports and Board material, EIA, FERC/NERC.
3. Commentary: leads only, never the sole support for a fact.

## Decided stack for the later app (not started)

TypeScript, Svelte 5, Vite, MiniSearch, graphology, 3d-force-graph (desktop) and force-graph (phone),
ts-fsrs, Dexie/IndexedDB, vite-plugin-pwa, Cloudflare Pages behind Cloudflare Access.
