# Audit report and what needs your decision

Updated 2026-11-22, after the deeper pass, its audit, and the strengthening of the nine industry topics. Full detail: `audit-log/` (one log per audit batch, with
every change), `audit/SUMMARY.md` (mechanical flags), `REVIEW.md` (every open item by topic).

## State of the knowledge base

- 153 topics, all written and all taken through the deeper pass. None is missing.
- 6,970 source quotes, each found word for word in a saved document (checked by program, 0 failures).
  Before the deeper pass there were 2,095.
- 328 source documents saved.
- Quotes by source tier: 3,868 from rules, statutes, orders and court opinions; 2,744 from official reports;
  358 from industry reference material (almost all in the nine industry-reference topics, see below).

## What the audit of the deeper pass did and found

Every one of the 153 topics was audited after the deeper pass. Each auditor read every new or changed quote with
the source text around it, checked every new or changed statement against its quotes, checked formulas term by
term, and fixed what was wrong. Logged counts, before the fixes:

| Group | Auditor model | Topics | Quotes checked | Statements checked | Wrong before the fix |
|---|---|---|---|---|---|
| Multi-source topics (sample + rest) | Opus | 45 | 2,091 | 1,839 | 126 (6.9%) |
| Single-source topics, sample | Sonnet | 20 | 822 | 666 | 39 (5.9%) |
| Single-source topics, must-know | Sonnet | 42 | 1,465 | 1,467 | 204 (13.9%) |
| Single-source topics, other | Sonnet | 37 | 1,524 | 1,289 | 200 (15.5%) |
| Nine industry-reference topics, first audit | Opus | 9 | (see below) | 354 | 29 (8.2%) |
| All | | 153 | | 5,615 | 598 (10.7%) |

- All 598 wrong statements were fixed, mostly by narrowing the sentence to what the quote says or by adding the
  missing quote. 290 quotes were added during the audit and residual check for statements that were true but not covered by the
  quote they cited.
- "Wrong" means a reader would have been misled: it includes mild cases (a claim cited to the wrong paragraph)
  as well as serious ones (a reversed rule). Auditors differ in how strictly they count, which is part of why the
  groups differ.
- Of about 1,030 mechanical number flags, 65 were real and the rest false alarms (years, section numbers).
- Statement counts in the single-source logs are partly approximate (taken from packet bullet counts).

### Residual check: how much is still wrong after the audit

Eight single-source topics that had already been audited and fixed (the group with the highest error counts)
were audited a second time by a stronger model (Opus): regulation, RMR, stakeholder process, black start, RTM,
virtual bids, credit/TPE and ERS.

- 293 statements checked, 8 still wrong (2.7%). Five of the eight topics had nothing wrong.
- Two of the 8 were introduced by the first auditor's own rewrite; the rest had been missed.
- What was left: the RMR incentive factor without its capital-expenditure exclusion; ERS renewal spending
  described as "within" the extra $25 million; letter-of-credit bank ratings given as "or" where the rule needs
  both; price corrections described as "only when" the listed conditions are met.

What this means: after the audit, roughly 1 statement in 35 to 40 in the deeper-pass text is still wrong on
this small sample. It is a sample of 8 topics, so treat the figure as an indication, not a measurement.

### The most common kinds of error

1. **A quote that stopped just before an exception or condition.** Examples: the RMR need test without ERCOT's
   discretion to deviate; the $1 billion reliability-cost cap without the PUCT's power to adjust it; SB 6
   co-location notice without its exemptions; the startup offer without the 200% cap.
2. **Formulas.** The highest-risk sections. Missing zero floors (ORDC 2016 method, ERCOT fee, SODG price), a
   missing 1/2 factor (TCRF), a Max read as "first 40 days, otherwise" (credit exposure), dropped terms (CRR
   balancing account, hub prices). All were corrected against the source equation.
3. **Pending rule text stated as in force.** Protocol "replace upon system implementation" boxes (NPRR1057,
   NPRR1188, NPRR1288, NPRR1030 and others) and rules with phased effective dates (16 TAC 25.194 and 25.370).
4. **Wrong scope or period.** Federal-report Uri figures covering ERCOT, SPP and MISO South read as ERCOT only;
   a non-crypto data-center haircut applied to all large loads; summer 2026 RUC figures that stop at August 15.
5. **An opinion, argument or illustration stated as fact.** IMM views, a party's argument in a court opinion, a
   law firm's hypothetical, an ERCOT "illustration" called an estimate.
6. **Retired mechanisms in the present tense.** The ORDC adder and HASL/LASL ended at RTC+B go-live.

### Most serious individual corrections

- **RTM price corrections:** the Board-review thresholds were reversed. ERCOT must seek Board review if the
  Counter-Party impact exceeds 2% and $20,000, or 20% and $2,000.
- **Regulation qualification test:** thresholds misstated (the source gives 3.5% in one interval and 5% in the
  others; 3.0% for an ESR).
- **CRR auction:** capacity offered is 70% falling to 10% across the six long-term windows and 90% monthly, not
  "70% first and more later".
- **RTC+B:** the Real-Time cap fell to $2,000; the day-ahead cap is still $5,000. A QSE's day-ahead/real-time
  ancillary service difference settles both ways.
- **Large-load forecast rule:** the signed-agreement test was described as in force since March 1, 2026; the
  rule phases in and the 2026 forecast used interim criteria.
- **Uri repricing:** court reasoning was stated as a holding, and a party's mootness argument as fact.
- **Batch Zero:** the PUCT granted exceptions from a classification deadline; it did not itself pause the study.
- **Virtual bids:** the text said the credit percentiles were not in the sources; they are, and are now quoted.
- **Retail hedging:** AML is Adjusted Metered Load, not "actual metered load".
- **Weatherization:** the summer declaration uses a maximum ambient temperature; the text gave the winter minimum.

## The nine industry-reference topics

Basis risk; spark spread; forward curve; heat-rate call option; tolling agreement; PPA and virtual PPA; shape
risk; volumetric risk; asset optimization. Written from industry reference sources under the rule you approved:
each factual statement needs two independent publishers or one official source, enforced by the program.

**Strengthened on 2026-11-22.** 34 more documents were saved to give second publishers and official
definitions, the nine topics were reworked from them, and the changes were audited.

- New official sources: CFTC glossary and swap-definition rule, EIA (dark spread, gas basis), a Lawrence
  Berkeley study of hub-to-node basis in ERCOT, SPP and MISO, Oak Ridge/DOE contracting guides, and the FERC
  Energy Primer and EPA guides already saved.
- New industry sources: Akin Gump, Stoel Rives, Troutman Pepper, Resources for the Future, LevelTen, Pexapark,
  ReSurety, Modo Energy, CRA, Penn State course text, Nodal Exchange contract specifications, PacifiCorp and
  Entergy tolling contract forms, an academic paper on spark-spread options, and the Vistra and NRG annual
  reports (classed as industry reference, since each company describes itself).
- **PPA mechanics no longer rest on one law firm.** The settlement formula, hub versus node settlement and who
  carries basis, negative-price clauses, fixed-volume shortfalls, hub buy-back and proxy generation each have
  two or more independent publishers.
- **Asset optimization** is rebuilt around the Vistra and NRG annual reports and the FERC primer, with battery
  contract structures (toll, floor plus revenue share, third-party optimizer) each supported by two publishers.
  No source defines the term; the topic describes the function and says so.
- **Spark spread, basis and forward curve** now lead with the CFTC's definitions. Where sources differ the
  topic says so (for example the heat rate assumed in a spark spread: EIA 7,000 Btu/kWh, Penn State's example
  10,000).
- Audit of the changes (logs `audit-log/J1.md` to `J3.md`): 272 new or changed statements, 27 wrong before the
  fix (9.9%), and 57 places where the two cited sources did not both carry the claim or were not independent.
  All fixed. Examples: a heat-rate call option described as never losing money in a called hour; battery tolls
  described as always operated by the offtaker; a law firm's illustration presented as a real case; an Oak
  Ridge slide adapted from LevelTen counted as a second voice.

Limits that remain (each is labelled in the topic):
- Still Norton Rose Fulbright only: the share of ERCOT hedges that are fixed-volume, most ERCOT hedges being
  physical, daily settlement of fixed-volume purchases, and the post-Uri capped damages calculation.
- "Capture price" and clean spark/dark spreads have no defining source and are not defined.
- Names and fee levels of ERCOT battery optimizers: one source (Modo) or none.
- The shape of the ERCOT forward curve and the liquid tenor of power forwards: unsourced or one source.
- CME's education pages and contract specifications refused the download, so nothing from CME is used.

## Resolved since the last version of this page

- **Real-time cap:** $2,000 came from NPRR1008 (Board approval December 8, 2020, effective at RTC+B go-live,
  December 5, 2025). PUCT rule 25.509 as saved still states a single $5,000 cap; the topic says both.
- **Nodal market start:** December 1, 2010, confirmed by the IMM's 2010 and 2011 reports.
- **DRRS:** implementation planned for 2028.
- **ASDC and ORDC:** per ERCOT's filing, the PUCT decided on August 20, 2026 that the ancillary service demand
  curves need not replicate the ORDC.
- **ECRS duration:** stated once, as one hour since RTC+B.
- **"Merit order":** the term does appear in saved sources (PUCT rule 25.502 and older IMM reports).

## Needs your decision

1. **A paid textbook, if you have one.** The free desk references are now in. A standard paid text (or CME
   material you can download yourself) could still close the remaining single-source points above.
2. **Whether to start the app (Phase 2).** Not started; waiting for your go-ahead.
3. **Whether you want a person's spot check.** Everything so far was written and checked by AI. Reading ten topics
   you know well against their quotes would tell you more about real accuracy than another AI pass.

## Still unresolved in the sources

- How PUCT rule 25.509's single $5,000 cap squares with the Protocols' $2,000 real-time cap.
- How the PUCT disposed of the IMM's repricing request in March 2021 (no order or minutes found).
- Whether the 4CP replacement (Project 58000, twelve monthly peaks) was adopted; statutory deadline
  December 31, 2026.
- The final adjusted 2026 load forecast: ERCOT said on November 6, 2026 it does not yet have one.
- Texas Energy Fund completion-bonus grant: for performance between 0.9 and 1, the rule's formula still reduces
  the payment while its text says no discount applies.
- RUC capacity-short charge: the prose calls a term a cap; the printed formula uses Max.
- Black start: the Protocols and the Standard Form Agreement word the hourly availability factor differently.
- Whether NPRR1288 (CRRs sold as single months) is implemented: the IMM says yes; the saved Protocols still show
  it as pending.
- The Verifiable Cost Manual copy saved is the edition effective December 1, 2026, not the one in force today.
- Whether ERCOT has been a net power importer every year since 2018 (the IMM's 2024 report conflicts).
- 2021 day-ahead/real-time premium: $52.70 in one IMM report, $85 in another.
- EEA: 2,300 MW versus 2,500 MW in the trigger and termination text.
- July 22, 2026 peak: 91,134 MW (ERCOT reviews, "unofficial") vs 91,155 MW (fact sheet).
- Non-Spin duration: four hours today; the cut to two hours takes effect "upon system implementation".
- Batch Zero studied load: the September Board document gives both 127.9 GW and 125.4 GW.
- 4CP: the IMM says the charge is allocated to load-serving entities; rule 25.192 charges distribution providers.
- Uri figures that differ between the federal report, UT Austin and ERCOT (listed in the topic).
- 840 open items in total are listed by topic in `REVIEW.md`; most are "not in the saved sources" notes.

## Known limits

- The plain-language text is AI-written. Quotes are checked by program. Whether each sentence is supported, and
  whether each quote is used in context, was checked by AI auditors, not by a person.
- An audit finds most errors, not all. The first-pass text had about 1 statement in 9 wrong; after the fixes the
  remaining rate is lower but not zero (see the residual check above).
- Some IMM tables are read from image-read (OCR) copies; a few rows could not be compared with the page image
  (noted in the topics that use them).
- Sources are snapshots dated in `sources/meta/`. Anything after November 21, 2026 is not reflected.
