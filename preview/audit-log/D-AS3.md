# Audit log D-AS3 (sample audit of the deeper pass)

Scope: only evidence and statements listed in the packets as new or changed. "wrong" = the statement could mislead a reader before my fix. Statements whose cited quote did not itself contain the claim, but where the source text next to the quote does support it, are logged as B (support gap) and are NOT counted as wrong. The ptp-obligation packet had no uncited-guidance section; the wind-generation one had one guidance paragraph (clean). After edits, `node pipeline/verify.ts` shows 0 errors, 0 warnings for all four topics.

ptp-obligation | quotes: 48 | context-problems: 3 | statements: 41 | wrong: 2 | flags: 0 real, 10 false-alarm | guidance-problems: 0
- A5 (e6): locator said "Section 4.4.9.6.1, DAM Energy Bid Criteria, paragraph (3)"; the text is paragraph (4) of 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria. Locator corrected.
- A5 (e15): locator said "paragraphs (3) and (9)"; the quote is paragraph (3) only. Corrected.
- A2 (e19, ERCOT context #7): "validated bid meets criteria except (3), (4), (5), (6)" was stated flatly; the source shows an NPRR918 replacement (exceptions become (3), (4), (6)). Added "(current text; NPRR918 replacement shown as pending)".
- B, WRONG (Common confusion #1): "A PTP Obligation bought in the DAM is not the same as a CRR bought in an auction" cited e47, which does not say that, and the Protocol definition (e1) says a PTP Obligation is a type of CRR evaluated in each CRR Auction and DAM. Rewritten to state the e1 definition plus what e47 says (CRR owner can use proceeds to buy a PTP).
- B, WRONG (Questions, "What if ERCOT cannot run the DAM?"): added "so the day-ahead leg drops out", which no quote says (7.9.2.1(3) gives NDRTOBLAMT for CRR owners, with no DAM purchase). Narrowed to what e34 says.
- B (How it works #1): bid contents (QSE submits; first/last hour; MW; $/MW-hr Not-to-Exceed) are in 4.4.6.1(1) but the cited quote e14 is paragraph (2). Added e49-e52 quoting 4.4.6.1(1) and cited them.
- B (Formula #1): "net hourly total is the sum over pairs" and the RTOBL definition were not in cited quote e30. Added e53 (RTOBL definition) and e54 (4.6.3(2)); softened the sum sentence to what e54 says. Formula checked term by term: DARTOBLAMT = DAOBLPR * RTOBL, DAOBLPR = DASPP_k - DASPP_j (sink minus source) matches 4.6.3; no error.
- B (Formula #2): "15-minute Settlement Intervals i in the hour" not in e32; added e55. RTOBLAMT = (-1) * RTOBLPR * RTOBL and RTOBLPR = sum(RTSPP_k,i - RTSPP_j,i)/4 match 7.9.2.1 (summation sign appears as "[]" in the extract); no error.
- B (ERCOT context #5): "settled as if they were a PTP Option" cited e13, which only says positive difference is paid. Re-cited to e18 ("designated to be settled in Real-Time as a PTP Option").
- B (Questions #14 and Scenarios #3): "same path / same source, sink and hour" for expiring-CRR credit offset is in 4.4.10(6)(d)(iii)(A), not in e27. Added e56 and cited it.
- Flags: all 10 false alarms (section numbers such as 4.4/6.1/7.9, years in report names or Figure 34 range, "1 MW / 0.1 MW" written in words in e17, and the labelled illustrative Example with stated arithmetic).
- Checked and fine: Figure 34 OCR figures (2025: $1,956 charge, $2,169 revenue = 10.9%; 2024: $1,674 / $1,799 = 7.5%), 258%, three late DAM publications, all e1-e48 contexts, NPRR918 box on 4.4.6.1(5) (disclosed), NPRR1004 box on 4.5.1(5) (disclosed). The 2024-report 7.8% vs 7.5% conflict is already an Open item.

ancillary-services | quotes: 45 | context-problems: 2 | statements: 34 | wrong: 2 | flags: 0 real, 6 false-alarm | guidance-problems: 0
- A1, WRONG (How it works #2, e28): "Non-Spin is provided by Generation Resources, On-Line or Off-Line ..." but 3.17.3(1) is a list: (a) Generation Resources, (b) CLRs, (c) other qualified Load Resources, (d) ESRs. Rewritten from the e5 definition (Off-Line Generation or interruptible Load) and noted that the list covers other Resource types (new e56).
- A2 (e28): pending NPRR1309 box changes the Non-Spin duration in (a)(ii) from four to two consecutive hours; topic gave four hours with no caveat. Added a sentence and Open item citing the pending text (new e55).
- B, WRONG (Common confusion #1): "the methodology is approved annually and posted by December 20". e17 says the Ancillary Service requirements (quantities) are posted to the MIS by December 20, not the methodology. Rewritten.
- B (How it works #5): "determine at least annually" and "Board reviews and recommends approval" are in 3.16(2) and (3), but e26 only quotes the post/PUCT sentence. Added e50, e51.
- B (Questions #10): 1-in-10-year probability and Watch 3,000 MW are in the methodology text next to e21, not in the quote. Added e52.
- B (Questions #12): BAL-002 caveat was next to, not in, e30. Added e53.
- B (Questions #14): "inconsistent with expectations for a well-functioning market" was next to, not in, e39. Added e54 and reworded to the IMM's phrase.
- B (How it works #9): "in preparation for RTC+B" is not in the NPRR1282 report (it says "under Real-Time Co-optimization"). Reworded to "for Real-Time Co-optimization (RTC)".
- Flags: 6 false alarms (section numbers 3.17/8.1.1.2.1.7/3.16, years 2026/2027 in document names).
- Checked and fine: Figure 25 inset prices (Responsive/NSRS/ECRS rows) against the OCR copy; Table A1 durations; 1,377 MW (methodology) vs 1,150 MW (3.16(2)(c), in force text) and the np-03 two-hour vs np-08 one-hour ECRS conflict are already disclosed in Open items; 2027 Board proposal figures (50%/60% daytime credit, EEA1 2,500 MW vs Watch 3,000 MW) match e47/e48; ECRS 2024 price $9.56 (2025 report) vs $9.62 (2024 report) is an existing Open item. NPRR1309 pending box on 4.4.12(5) (adds DRRS) is covered by the existing DRRS Open item.

mass-transition | quotes: 36 | context-problems: 1 | statements: 35 | wrong: 1 | flags: 0 real, 1 false-alarm | guidance-problems: 0
- B, WRONG (Questions, "Why is the meter read set two days after ERCOT starts?"): "that date becomes the transition date at which responsibility passes" overstates e12, which says POLRs are responsible "no earlier than the Mass Transition Date". Reworded.
- B (same answer): "TDSP may estimate the read if an actual read cannot be obtained by that date" cited e34, whose condition is different (ESI ID cannot be read other than physically). The stated condition is Protocol 15.1.3.1(1). Added e37 and re-cited.
- A1 (e8, ERCOT context #1): the sentence on ERCOT adjusting the TPE of POLR Counter-Parties dropped its condition (a Mass Transition necessitated by the default of a Counter-Party representing a QSE associated with an LSE) and called TPE "credit exposure". Rewritten with the condition and the quote's own terms.
- B (Key facts #5): "then to LSPs" is in the sentence after the e30 quote. Added e38.
- Flag: 1 false alarm (2019 in the Appendix F2 date).
- Checked and fine: Griddy figures (10,127 ESI IDs and 1,065 MWh in the notice; 9,926 customers in the PUCT order; the topic keeps them apart), 25.43(l) and (p) locators, RMG 7.11 Calendar Day 0 / Mass Transition Date wording, the 60-day monitoring rule, the statement that the saved Appendix F2 has no timeline table (confirmed, 27-line file).

wind-generation | quotes: 31 | context-problems: 1 | statements: 26 | wrong: 1 | flags: 0 real, 10 false-alarm | guidance-problems: 0
- B, WRONG (Questions, "Why does wind matter at the evening net peak?"): "Solar's contribution falls to zero there" came from text before the e30 quote (IMM 2024 executive summary), and the 2025 Table 2 shows 1.7% at the net peak, not zero. Replaced with the 2025 figure, cited to e4.
- A4 (e9, Key facts and Link to weatherization): the FERC/NERC sentence covers "ERCOT and SPP" together; the topic presented it as outages in general for the week of Feb 7. Named both systems.
- B (Questions, "Why does wind drive forecast risk?"): "than solar" was added to e8, which says wind dominates "because of its higher volatility and lower predictability". Removed the comparator.
- Cosmetic (Key facts #5): "37 GW / 38 GW" dropped "more than" from e16/e15. Restored. Not counted as wrong.
- Flags: all 10 false alarms (years 2021/2023/2026/2027 in report names, MORA title, event dates).
- Year-by-year checks against the OCR copy: Table 2 wind net-peak 26.7% (2023), 27.8% (2024), 29.3% (2025) and overall/peak columns match; the 2024 report's 27.1% / 28.4% are real and already an Open item; installed wind 34/37/38 GW, records 23,657 MW (2021-10-21) and 27,044 MW (2022-05-29), curtailment 5% to 4.2% match their sources.

Totals: quotes 160, statements 136, wrong 6, context-problems 7, flags 0 real / 27 false-alarm, guidance-problems 0. Support gaps (B) that were not wrong: 14.
