# Topic file format

One file per topic: `content/topics/<id>.md`. YAML frontmatter, then a Markdown body with fixed headings.
`node pipeline/verify.ts` checks every rule below.

## Example

```markdown
---
id: qse
name: QSE (Qualified Scheduling Entity)
aliases: [QSE, Qualified Scheduling Entity]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, retail]
as_of: 2026-11-18
links:
  - to: lse
    type: related
    note: An LSE must be represented by a QSE to schedule and settle with ERCOT.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Qualified Scheduling Entity (QSE)"
    quote: "A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT."
---

## Definition

A QSE is the Market Participant qualified by ERCOT to communicate with ERCOT on behalf of Resource Entities
and LSEs and to settle payments and charges with ERCOT. [e1]

## How it works

...each paragraph ends with the evidence ids that support it. [e2][e3]

## ERCOT context

...

## Key facts

- One fact per bullet, with its number or date and evidence id. [e4]

## Say it like this

(Guidance) Two sentences you could say to a client. No new facts.

## Common confusion

(Guidance) What this is often mixed up with, and the difference. Cite evidence if you state a fact. [e1]

## Questions

### Why does every generator need a QSE?

Answer in 2-5 sentences. Cite evidence for facts. [e1]

## Scenarios

### A REP's QSE defaults. What happens to the REP's customers?

- Answer point. [e5]
```

## Frontmatter

- `id`, `name`, `kind`, `domain` must match `content/topic-list.json`.
- `level`: 1 must know, 2 expected with 1-2 years, 3 deep.
- `lenses`: any of `analyst`, `trading`, `portfolio`, `congestion`, `retail`, `structuring`.
- `as_of`: date the topic was last checked against sources.
- `depth`: `general` (default) or `deep` once a deeper pass has been done.
- `basis`: omit normally. `industry-reference` marks a general commercial concept written from industry
  reference sources; every factual statement then needs quotes from two independent publishers, or one
  tier 1-2 source (see CLAUDE.md, Source tiers).
- `links`: `to` must be an id in the topic list. `type` is one of
  `is-a, part-of, composed-of, determines, affects, causes, hedges, settles, replaced, regulates, operates,
  example-of, contrasts-with, used-in, measures, prerequisite-of, related`.
  Every link needs a one-sentence `note`. If the note states a fact, end it with an evidence id like `[e2]`.
- `evidence`: each item has
  - `id`: `e1`, `e2`, ...
  - `source`: an id from `sources/sources.yaml`
  - `locator`: section number, heading or page so a person can find it
  - `quote`: copied **verbatim** from `sources/text/<source>.txt`. One contiguous passage, 1-6 sentences.
    Do not paraphrase, fix typos, or join separate passages. Do not use "..." to skip text.
    Whitespace and line breaks may differ; nothing else may.

## Body rules

- Headings allowed: `Definition`, `How it works`, `ERCOT context`, `Key facts`, `Formula`, `Example`,
  `Say it like this`, `Common confusion`, `Questions`, `Scenarios`, `Timeline`, `Open items`.
  `Definition` is required.
- **Factual sections** (`Definition`, `How it works`, `ERCOT context`, `Key facts`, `Formula`, `Timeline`):
  every paragraph and every bullet must carry at least one `[eN]` marker, and the cited quote must actually
  support what the sentence says. If you cannot find a supporting quote, do not write the sentence.
- **Guidance sections** (`Say it like this`, `Common confusion`, `Example`, `Questions`, `Scenarios`):
  may be uncited only where they restate facts already cited above or give advice. Any new number, date,
  rule or name needs a marker. Worked arithmetic in `Example` is allowed if it is clearly illustrative
  ("Suppose...").
- `Open items`: things you looked for and could not source, or sources that conflict. One bullet each.
  This feeds the owner's review list. It is better to list an open item than to guess.
- Write in plain, direct prose for someone with 1-2 years in the ERCOT market.
- Prefer the most authoritative source: protocols and rules for definitions and mechanics; IMM and ERCOT
  reports for numbers and outcomes. State the year or "as of" for any number that changes.
