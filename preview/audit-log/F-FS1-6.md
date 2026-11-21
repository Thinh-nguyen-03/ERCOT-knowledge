# Audit log F-FS1-6 (trading-hub, virtual-bids, ecrs, eea)

trading-hub | quotes: 28 | context-problems: 1 | statements: 20 | wrong: 5 | flags: 0 real, 0 false-alarm | guidance-problems: 0

- A5 (e9): locator said "paragraphs (3) and (4)" but the quote is paragraph (4) only. Locator corrected.
- B (Formula #1, Day-Ahead): the sentence "System Lambda minus the sum over constraints of aggregated Shift Factor times Shadow Price" cited e5/e21, but no quote contained the DASPP formula, DASL or DASP definitions; "number of Hub Buses" was also unscoped (the source counts only Hub Buses with an energized component for the constraint). Added e34-e38 (formula line, DASL, DASP, HB count, HBBC) and rewrote the sentence.
- B (Formula #2, Real-Time): "time-weighted (by SCED interval duration) average" and the fallback condition were not in any quote (only the first formula line was quoted). Added e39-e41 (rest of formula, TLMP definition, HB definition); fallback condition now "count of Hub Buses with an energized component is zero".
- B (ERCOT context #2): "lists a separate RTRDPA + LMP column" rested on the context around e15, not the quote. Added e42 (column heading row).
- B (links spp, dam): spp link cited e5 (North 345 only) for a general claim, now cites e1; dam link said "System Lambda and constraint Shadow Prices" citing e5, which mentions neither; now cites e34-e36. Q12 also now cites the formula quotes.
- Q10 wording narrowed (Day-Ahead fallback is on the base-case count).

virtual-bids | quotes: 38 | context-problems: 3 | statements: 26 | wrong: 9 | flags: 0 real, 1 false-alarm | guidance-problems: 1

- A1 (e22): sentence said ERCOT notifies the QSE of a rejection and the QSE may resubmit "except where" the offer breaks the synthetic-PTP rule. The source makes paragraph (4) an exception to the notice duty only. Rewritten and e4 added to the citation.
- A1 (e29): offer-exposure sentence omitted paragraph (6)(b)(iii), which lets ERCOT in its sole discretion use a percentile other than dp. Added quote e43 and the caveat.
- A4/B (ERCOT context #2, e39): "elevated prices on RTC go-live day" was not in the quote; the IMM sentence before it names 5 December 2025 and Winter Storm Fern (21-27 January 2026). Added e44, reworded; Table A2 now notes that period includes Fern.
- B (HIW #5): "percentile parameters a, d and dp are not given as numbers in the saved text" was false: np-04 Section 4.4.10(10)(a) gives defaults (d 85, ep1 95, a 50, b 45, dp 90, ep2 0, e2 0, e3 1). Added quote e46 and the values (labelled as the table's "current" defaults); open item corrected.
- B (HIW #5): "Exposure is the quantity of the bid times that bid exposure price" was cited to e27, which does not say it; added e42 (paragraph (6)(a) lead-in).
- B (HIW #1): "DAM system-wide offer cap" for DASWCAP had no quote; added e41 (acronym list). Unlike-Three-Part claim now cites a Three-Part Supply Offer definition (e47). Bid DAM-only cite e14 added.
- B (HIW #2): "paid or charged ... and again" implied a double payment. Replaced by the formula fact (DAEP enters DASPP*DAEP in the DA charge and (-1)*RTSPP*DAEP in the Hub imbalance amount; opposite signs), quote e40. Load Zone sentence narrowed to what the header supports.
- B (Questions #8): "IMM expects virtual AS to lead to greater convergence" was in text after e11, not in a quote; added e45.
- B (links ruc, three-part-supply-offer, qse, trading-hub): "no Startup Offer / RUC uses", "Only a QSE", "Hubs are one of the Settlement Point types" went beyond e1/e15/e5/e9; narrowed or re-cited.
- C (Say it like this): "earns or loses the difference between the two" was a new inference; reworded as guidance restating the cited formulas.
- Flag in ERCOT context #2 (2026, 36%, 420%): false alarm (OCR header year and table percentages are in the quote).

ecrs | quotes: 42 | context-problems: 3 | statements: 32 | wrong: 11 | flags: 0 real, 8 false-alarm | guidance-problems: 1

- Duration (per coordinator note): Definition listed "sustained for two consecutive hours" as part of the definition, and the duration was repeated as an unresolved conflict in Key facts, a Question and Open items. Now stated once: one hour since RTC (e14, e15, e16, e12); the Section 2 definition's "two consecutive hours" is mentioned once in ERCOT context as older wording (e1), not as an open conflict. Definition, Key facts, the duration Question and the Open item edited.
- A1 (e18): quote stopped before "The amount of ECRS on a Generation Resource may be further limited by requirements of the Operating Guides." Quote extended and sentence updated. Sentence also said "A Resource's ECRS" where the source says individual Generation Resources and Load Resources; Key facts #3 narrowed the same way.
- B (HIW #4, e22): "Load Resource portfolio" should be non-Controllable Load Resources. Fixed.
- B (HIW #6, e26): "maximum percentage" and "minimum MW in the MCL" were inferred from variable names (open item). Added e45 (variable table definitions); open item removed. Link asdc said ECRS quantity is "capped as a share of the Minimum Contingency Level"; the definition is a maximum percentage included in the MCL, not a share of it. Reworded.
- B ((current text; NPRR1309 would replace) claim had no quote): added e46 (pending box header).
- B (ERCOT context #2, e44): "March 2024" and "ERCOT implemented the deployment process without the floor" were in text outside the quote; added e47, e48 and attributed to the IMM. "Operators no longer manually deploy ECRS" attributed to the IMM.
- B (ERCOT context #3, e42): Table A2 period includes Winter Storm Fern, which the IMM names as a major driver of the early premium; added e49.
- B (Questions #12, e40): "IMM says NCLRs can supply no more than 50%" and "more NCLRs may shift" were not in e40; split into the Protocol 50% limit (e4) and the IMM's shift sentence (new quote e50).
- C/B (Say it like this): "SCED decides when it is used" went beyond e38; reworded to the IMM's statement; labelled guidance.
- Flags (HIW #5 2026/2027, HIW #6 4.4/40 MW, ctx #3, ctx #5, Key facts #6, Common confusion 6.5/7.6/2.4, links asdc/ordc): all false alarms (years, section numbers and values appear in the quotes).

eea | quotes: 46 | context-problems: 3 | statements: 37 | wrong: 7 | flags: 0 real, 6 false-alarm | guidance-problems: 0

- A1 (e36): "at least 25% of ERCOT System Load must be equipped for automatic UFLS" dropped "unless provisions specified in Section 4.5.3.3, EEA Levels, are required to meet ERCOT operating instructions for manual Load shed". Added.
- A1/A4 (e23): quote says "any appropriate measures"; sentence said "any Level 1 and 2 measures". Fixed.
- A4 (e30): the SCADA 30-minute / non-SCADA one-hour rule applies "During EEA Level 3" (lead-in paragraph (7)); scope added. e24 percentages scoped to Level 3 as the quote says.
- A3/B (e35): sentence said the "manual RRS/ECRS deployment process"; the quoted passage refers to manual RRS deployment under Protocol 6.5.7.6.2.2. Narrowed to RRS.
- B (ERCOT context #3, e49): "requiring PUCT approval" is not in the quote. Removed.
- B (ERCOT context #2): the Level 1/2 column assignment of the overview's MW estimates is inferred from the flat extracted text order (the existing open item said so, the body did not). Body now says it.
- B (Common confusion #1): "Levels 1 and 2 use extra supply and demand-side tools" cited only e7 (Level 3); added e4, e19, e2. Link prc cites e43 for the PRC definition; link rrs narrowed to what e2 says (RRS from Load Resources controlled by high-set relays).
- Flags (How it works #1 6.5/9.4, context #2 2026, context #3 2027/2026, links nodal-protocols, summer-2023, ancillary-services): all false alarms (section numbers and years appear in the quotes).
- Not changed: the overview and the Protocols were consistent on Level 3 (59.8 Hz path); the 2300 MW vs 2,500 MW termination/trigger difference remains an open item.
