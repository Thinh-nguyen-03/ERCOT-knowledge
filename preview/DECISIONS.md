# What needs your decision

Written 2026-11-18, after the general-level pass and the independent review. The full list of 560 open items is
in `REVIEW.md`; this page is the short version.

## State of the knowledge base

- 143 topics written out of 153 on the list.
- 2,002 source quotes, each found word for word in a saved official document.
- About 145 source documents saved (ERCOT Nodal Protocols, PUCT rules and filings, Texas statutes and bills,
  IMM State of the Market reports 2021-2025, ERCOT reports, federal Uri report, EIA, ICE).
- An independent review read about 4,300 cited statements against their quotes. About 590 said more than the
  quote and about 260 were not supported by it. All were narrowed, re-sourced, or removed. The reviewers'
  change logs are in `review-log/`.

## 1. Topics with no usable source (10)

Not written, because no saved official document defines them:

basis risk; spark spread; forward curve; heat-rate call option; tolling agreement; PPA and virtual PPA;
shape risk; volumetric risk; asset optimization; HASL/LASL.

Options: (a) leave them out; (b) allow a lower-trust "industry reference" tier (textbook, exchange education
material) and write them from that, labelled; (c) write them as labelled guidance with no source claim.

## 2. Conflicts between sources that the sources do not resolve

- **Offer cap.** PUCT rule 25.509 states one $5,000/MWh high cap. The Protocols and ERCOT's summer 2026 review
  show $5,000 day-ahead and $2,000 real-time since RTC+B went live. No saved source explains the basis for
  the $2,000 value or how the peaker-net-margin switch now applies.
- **ECRS duration.** Protocol text says two hours; the IMM says one hour since RTC+B (NPRR 1282).
- **Non-Spin duration.** Four hours today; pending change to two. The IMM's own documents ask for one hour in
  some places and two in others.
- **RUC clawback (NPRR 1172).** The 2024 and 2025 IMM reports describe the change differently.
- **4CP.** The IMM says the charge is allocated to load-serving entities; PUCT rule 25.192 charges distribution
  service providers.
- **Hub definitions.** Protocol definitions say a hub's buses "can never be modified"; Section 3.5.1 has ERCOT
  file a revision request to change one.
- **Peak demand record.** 91,134 MW (summer 2026 review) vs 91,155 MW (fact sheet). August 2023 peak appears as
  85.7 GW, 85,464 MW and 85,508 MW.
- **Winter Storm Uri figures.** Lowest frequency, peak generation out, people affected, economic loss and the
  time firm load shed ended all differ between the federal report, UT Austin and ERCOT. Each topic lists them.
- **Large-load queue.** Over 438 GW and about 474 GW are both given for mid-2026.
- **SB 6 dates.** The bill shows votes in May 2025 and effect on June 20, 2025; other sources say "passed in
  June" or "signed in June".

## 3. Things the saved sources do not say (worth finding)

- What the PUCT finally decided on Uri repricing in March 2021, and the later court outcome.
- What the PUCT decided on the PCM in December 2024 (only the staff recommendation and chairman's memo are saved).
- Whether the Batch Zero study pause happened, and when it ends (the saved order says ERCOT "intends to pause").
- Whether the 4CP replacement rule (12 monthly peaks) was adopted; the statutory deadline is December 31, 2026.
- The final adjusted 2026 long-term load forecast.
- A DRRS go-live date (only "20 to 30 months" of project work is stated).
- SB 2268 (2025), which a PUCT FAQ says changed Texas Energy Fund caps and deadlines.
- The nodal market start date: no saved source states it; the 2024 IMM report says "began in 2011".
- Market-convention names such as HB_NORTH and LZ_WEST are not in any saved source; they are stored as aliases.
- Griddy: nothing beyond passing mentions.

## 4. Known limits of this pass

- General level only. Each topic lists "Deeper pass" items for the next round.
- The plain-language text is AI-written from the sources. The quotes are checked by program; whether a quote
  supports a sentence was checked by a second AI reviewer, not by a person.
- Numbers taken from OCR copies of the IMM reports are labelled "(OCR)" and should be spot-checked.
- One source is a law-firm summary (tier 3), used only in the Uri repricing topic and labelled there.
