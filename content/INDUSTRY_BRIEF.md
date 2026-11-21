# Brief for industry-reference topics (read fully)

Nine commercial concepts are not defined by any ERCOT, PUCT or IMM document: basis risk, spark spread, forward
curve, heat-rate call option, tolling agreement, PPA and virtual PPA, shape risk, volumetric risk, asset
optimization. The owner has approved writing them from industry reference sources, on one condition: everything
is cross-checked across multiple sources and nothing is noted down unless it is accurate.

Read first: content/TOPIC_FORMAT.md, content/WRITER_BRIEF.md (working with sources; ignore its general-level
section), content/DEEPER_BRIEF.md (the list of errors an audit found; avoid them), sources/sources.yaml.
The reference sources for these topics have ids beginning `ref-` (text in sources/text/). Official sources
(tier 1-2) elsewhere in the registry may also be used and are preferred where they speak to the point.

## Rules specific to these topics

1. Frontmatter must include `basis: industry-reference`.
2. Cross-check: every paragraph or bullet in a factual section (Definition, How it works, ERCOT context, Key
   facts, Formula, Timeline) must cite quotes from at least TWO different publishers that say the same thing,
   or one tier 1-2 source. `node pipeline/verify.ts` enforces this. Write the sentence to the common ground the
   sources share. If two sources differ (for example on what counts as "peak", or how a spark spread treats
   variable O&M), say that they differ and cite each; do not pick one silently.
3. If only one source supports a point, leave it out, or put it under Open items as "single-source, not
   cross-checked: ...". Never fill a gap from your own knowledge.
4. Anything about ERCOT itself (which hub contracts settle at, how CRRs or PTP obligations relate to basis,
   IMM figures on implied heat rates, real-time vs day-ahead settlement) must be cited to a tier 1-2 ERCOT, PUCT,
   IMM, EIA or national-lab source. The existing topics crr.md, ptp-obligation.md, implied-heat-rate.md,
   heat-rate.md, natural-gas-price.md, waha-hub.md, block-products.md, exchanges-ice-nodal.md, retail-hedging.md,
   dart-spread.md, congestion.md, hb-north.md, load-zone.md, negative-prices.md, energy-storage-resource.md and
   battery-revenue-stack.md hold verified quotes you may reuse (copy quote, source and locator exactly).
5. In `## ERCOT context`, begin with one sentence saying that the term is general industry usage and is not
   defined in the ERCOT Protocols, PUCT rules or IMM reports saved here. That sentence is a statement about the
   knowledge base, so cite nothing for it and put it under a heading the checker treats as guidance: place it
   as the first line of `## Common confusion` instead if the checker rejects it.
6. Worked arithmetic goes in `## Example`, begins with "Suppose", uses made-up round inputs and is labelled
   illustrative. A formula stated in a source goes in `## Formula` with its two-publisher citation.
7. Keep quotes from commercial publishers short (one or two sentences).

Write a full entry: Definition, How it works, ERCOT context, Key facts, Formula and Example where the concept
has them, Say it like this, Common confusion, 4-6 Questions, one Scenario where natural, 6-10 links, Open items.
Set `level: 2`, `depth: deep`, `as_of: 2026-11-21`.

After each file:
  cd /home/user/ERCOT-knowledge && node pipeline/verify.ts 2>&1 | grep -E "^(ERROR|warn ) <topic-id>:|quotes found"
Fix until there are no ERROR lines. If the saved sources cannot support a cross-checked Definition for a topic,
do not write the file; report it with exactly what is missing.

Boundaries: write only your assigned files. No web. No commits. Do not run audit.ts, fetch.ts or render.ts.

Report back in under 200 words: per topic, how many statements are cross-checked and across which publishers;
where sources disagreed; what you left out for lack of a second source.
