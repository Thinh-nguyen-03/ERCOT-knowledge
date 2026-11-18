# Data contract

Every topic in the knowledge base is one **node**. The roster of ids lives in `data/registry.py`
(regenerate `data/registry.json` with `python3 data/registry.py`). Content lives in one file per domain,
`data/nodes/<domain>.json`, which is a JSON array of node objects. `python3 build.py` validates everything
and generates the app data and the Obsidian vault.

## Node object

```json
{
  "id": "lmp",
  "name": "LMP (Locational Marginal Price)",
  "aliases": ["LMP", "nodal price", "locational marginal price"],
  "kind": "metric",
  "domain": "pricing",
  "level": 1,
  "definition": "One or two plain sentences. What it is.",
  "explanation": "How it works, 1-3 short paragraphs. Separate paragraphs with \n\n.",
  "ercot_context": "What is ERCOT-specific about it, why it matters to an analyst/trader, what changed recently.",
  "formula": "LMP = System Lambda + Congestion Component  (optional; omit or empty string if none)",
  "example": "A worked numeric or concrete example (optional).",
  "interview_tip": "How to say it in 60 seconds, and the trap interviewers set.",
  "follow_ups": [
    {"q": "Why does ERCOT's LMP have no loss component?", "a": "Concise model answer, 2-5 sentences."}
  ],
  "scenarios": [
    {"prompt": "A case or scenario question an interviewer would ask.",
     "answer": ["Key point 1", "Key point 2", "Key point 3"]}
  ],
  "links": [
    {"to": "system-lambda", "rel": "composed-of", "note": "System lambda is the energy component of every LMP."}
  ],
  "timeline": [{"date": "2010-12", "event": "Nodal market goes live"}],
  "sources": [{"title": "ERCOT Nodal Protocols Section 6", "url": "https://www.ercot.com/mktrules/nprotocols/current"}],
  "verify": ["Facts that change often and must be re-checked before an interview"]
}
```

### Field rules

- `id`, `name`, `kind`, `domain` must match the registry exactly.
- `level`: 1 = must know for any ERCOT interview; 2 = expected with 1-2 years of experience; 3 = deep or specialist.
- `follow_ups`: 3-6 per concept; 2-4 for scenarios. Real interview questions with model answers.
- `scenarios`: 1-3 per concept where natural. Scenario-kind nodes put their main prompt in `scenarios[0]`.
- `links`: 3-10 per node. `to` must be an id in the registry (any domain). Every link needs a `note` that
  explains the connection in one sentence; the note is what the app shows when you click between nodes.
- `rel` is one of:
  `is-a`, `part-of`, `composed-of`, `determines`, `affects`, `causes`, `hedges`, `settles`, `replaced`,
  `regulates`, `operates`, `example-of`, `contrasts-with`, `used-in`, `measures`, `related`.
- `timeline`: optional, mainly for events and rules.
- `sources`: 1-4 authoritative URLs (ERCOT.com, PUCT, Potomac Economics, EIA, FERC/NERC, legislature). Prefer
  stable landing pages over deep links you are not sure of.
- `verify`: anything date-sensitive (thresholds, caps, go-live dates, legislation status). Better to flag than to
  state a stale number as fact.

## Accuracy rules

- No invented numbers, dates, docket numbers or NPRR numbers. If unsure, describe qualitatively and add to `verify`.
- Keep the voice plain and direct. Write for someone with 1-2 years in the industry preparing for interviews.
- Knowledge is as of late 2026; RTC+B went live in December 2025.
