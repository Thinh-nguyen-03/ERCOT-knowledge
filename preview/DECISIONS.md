# Audit report and what needs your decision

Updated 2026-11-19, after an independent audit of the whole knowledge base. Full detail: `audit-log/` (one log per
audit batch, with every change), `audit/SUMMARY.md` (mechanical flags), `REVIEW.md` (every open item by topic).

## State of the knowledge base

- 144 topics written out of 153 on the list.
- 2,095 source quotes, each found word for word in a saved official document (checked by program, 0 failures).
- About 167 source documents saved.
- Quotes by source tier: 1,157 from rules, statutes, orders and court opinions; 936 from official reports;
  2 from the one commentary-tier document (a law-firm summary, now secondary to the court opinions themselves).

## What the audit did and found

Three checks, in this order:

1. **First review (earlier).** Each sentence compared with its quote, read alone. Reviewers' approximate counts:
   about 4,300 statements, about 640 said more than the quote, about 300 were unsupported. All fixed.
2. **Mechanical audit (program, no AI judgement).** Flagged 416 statements containing a number absent from the
   quote they cite, 44 quotes drawn from proposals or filings, 7 quotes from rule text not yet in effect.
3. **Context audit (13 auditors, new).** Every quote read with the source text before and after it; every flag
   resolved. Logged counts:

| | Topics | Quotes checked in context | Quotes with a context problem | Statements checked | Wrong before the fix |
|---|---|---|---|---|---|
| Single-source topics | 98 | 1,154 | 67 | 2,015 | 161 (8.0%) |
| Multi-source topics | 45 | 859 | 50 | 1,302 | 79 (6.1%) |
| All | 143 | 2,013 | 117 | 3,317 | 240 (7.2%) |

- Of 408 number flags the auditors resolved, 3 were real and 405 were false alarms (years, section numbers).
- 61 problems were found in uncited guidance text.
- All 240 wrong statements were fixed. Typical causes: a quote that stopped just before an exception, a dropped
  condition, an opinion or a pre-go-live presentation stated as fact, a figure given without its period or basis.
- The four quotes that rely on image-read (OCR) copies were compared by eye with the PDF pages. All match.

What this means: after the first review about 1 statement in 14 was still wrong. Those are fixed. This audit was
again done by AI, so some errors will remain; one more pass would be expected to find fewer again, not zero.
The single topic not covered by an auditor is `hasl-lasl`, written after the audit began.

Model note: the account's weekly limit for Opus and Sonnet was reached mid-audit (resets 2026-11-21 10:00 UTC).
The eight single-source batches had finished on Sonnet. The five multi-source batches were rerun on Fable.

## Most serious errors the audit corrected

- **Uri repricing.** The topic ended at a 2023 summary of the Court of Appeals decision, implying the PUCT's pricing
  orders were unlawful. The Supreme Court of Texas (June 14, 2024) reversed and affirmed the orders. Rewritten from
  the two court opinions.
- **Texas Energy Fund.** A combined 10,000 MW cap on loans plus grants was superseded by SB 2268 (2025), which gives
  loans and grants separate caps. Rewritten from the current code.
- **Griddy.** The sequence was wrong. ERCOT revoked its market rights and began the mass transition on
  February 26, 2021; bankruptcy followed in March; the PUCT revoked the certificate in 2022.
- **RTC+B.** Several statements came from July 2025 presentations written before go-live and were stated as how it
  works now. Now attributed, with post-go-live sources added where they exist.
- **Summer 2026 RUC.** The 1,313 resource-hour figure covers the summer only to August 15.
- **POLR pricing.** A 120% multiplier was stated for all customers; it is the residential formula.

## Checked: what the assistant told you in chat

55 factual statements made in conversation were checked against the saved documents
(`audit-log/chat-claims-verdicts.md`): 42 confirmed, 13 partly right, 0 contradicted. The ones to unlearn:

- "The offer cap is $5,000": that is the day-ahead cap; the real-time cap is $2,000 since December 5, 2025.
- "Three pivotal supplier test": the sources never use the term; the Protocols use a different competitiveness test.
- "Real-time initial settlement about 5 business days": the Protocols say the fifth day.
- "Large Flexible Loads are data centers and crypto miners": the statute ties the term to crypto mining above 75 MW;
  data centers fall under "Large Computational Load".
- "Eight hubs including a Lower Rio Grande Valley hub": that hub's text is a pending change, not in effect.
- "Waha often goes negative": the EIA says sometimes, and positive since mid-November 2024.

## Resolved since the last version of this page

- **ECRS duration:** one hour since RTC+B (NPRR1282 and Protocols Section 8.1.1.3.4). Section 3's general
  description still reads "two consecutive hours".
- **PCM outcome:** on December 19, 2024 the PUCT "Adopted Staff's final recommendation on PCM" (staff recommended
  against it).
- **Uri repricing court outcome:** PUCT orders affirmed by the Supreme Court of Texas, June 14, 2024.
- **Batch Zero:** ERCOT paused the study by market notice on August 3, 2026; a final audit report is targeted for
  December 10, 2026.
- **SB 6 dates:** signed and effective June 20, 2025 (Legislature's bill history).
- **Hub and zone names:** HB_ and LZ_ names sourced from ERCOT's real-time display (seven hubs, eight load zones).
- **HASL/LASL:** topic written from the pre-RTC Protocols; ERCOT says the concept no longer exists with RTC+B.
- **Heat rate:** direct definition added from the EIA.

## Still needs your decision

1. **Nine topics with no usable source:** basis risk; spark spread; forward curve; heat-rate call option; tolling
   agreement; PPA and virtual PPA; shape risk; volumetric risk; asset optimization. Options: leave out; allow a
   lower-trust "industry reference" tier; or write as labelled guidance.
2. **Whether to run one more audit pass** on the highest-stakes topics once Opus is available again
   (after 2026-11-21), or accept the current state and move on to deeper passes.

## Still unresolved in the sources

- Which decision set the $2,000 real-time cap, and how it squares with PUCT rule 25.509's single $5,000 HCAP.
- How the PUCT disposed of the IMM's repricing request in March 2021 (no order or minutes found).
- Whether the 4CP replacement (Project 58000, twelve monthly peaks) was adopted; not as of the last filing on
  October 1, 2026; statutory deadline December 31, 2026.
- The final adjusted 2026 load forecast: ERCOT said on November 6, 2026 it does not yet have one.
- DRRS go-live date: only "upon system implementation" and a 20 to 30 month project estimate.
- Nodal market start: an October 2010 ERCOT Board plan gives December 1, 2010; no saved source confirms it after
  the fact.
- July 22, 2026 peak: 91,134 MW (ERCOT reviews, "unofficial") vs 91,155 MW (fact sheet).
- Non-Spin duration: four hours today; the approved cut to two hours takes effect "upon system implementation";
  the IMM's own documents ask for one hour in some places and two in others.
- Batch Zero studied load: the September Board document gives both 127.9 GW and 125.4 GW.
- 4CP: the IMM says the charge is allocated to load-serving entities; rule 25.192 charges distribution providers.
- Uri figures that differ between the federal report, UT Austin and ERCOT (listed in the topic).

## Known limits

- General level only. Each topic lists "Deeper pass" items.
- The plain-language text is AI-written. Quotes are checked by program; support and context were checked by AI
  reviewers twice, not by a person.
- Sources are snapshots dated in `sources/meta/`. Anything after November 18, 2026 is not reflected.
