# ERCOT knowledge base

A private, source-backed knowledge base of the ERCOT market. Phase 1 (this repo so far) is the knowledge itself;
the app comes later.

- `preview/index.html`: reading view. Every topic in full; tap a small number to see the source's own wording.
- `preview/DECISIONS.md`: the short list of things that need the owner's decision.
- `preview/REVIEW.md`: every open item, by topic.
- `content/topics/`: one file per topic. `content/TOPIC_FORMAT.md` describes the format.
- `sources/`: registry of source documents and their saved text.
- `pipeline/`: `fetch.ts` (download and extract), `ocr.sh` (image-read copies for garbled tables),
  `verify.ts` (word-for-word quote check), `render.ts` (reading view).

See `CLAUDE.md` for the project rules.
