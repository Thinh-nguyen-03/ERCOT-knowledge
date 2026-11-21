# Audit log F-FS3-6 (reliability-standard, rmr, weatherization)

After edits: `node pipeline/verify.ts` shows 0 errors, 0 warnings for these three topics.

reliability-standard | quotes: 41 | context-problems: 0 | statements: 37 | wrong: 9 | flags: 0 real, 5 false-alarm | guidance-problems: 0
- B (Key facts #6, Timeline #7, Questions #10, link large-load-growth): the sentences said ERCOT asked to file the 2027 magnitude "by the second quarter of 2027", citing only e31, whose quote does not contain that. Source (motion, Section II) says it. Added e42 quote and cited it. The large-load link also said Batch Zero work "delayed" the filing; narrowed to "did not yet have a final load forecast" plus the Q2 2027 request.
- B (ERCOT context #3): "The IMM calls the standard a formal pathway" had no supporting quote (IMM text: "creates a formal pathway to consider a broad range of market design options"). Added e43 and reworded.
- B (ERCOT context #2): "ERCOT used the LTLF as the load input" overstated; the quote says ERCOT recommended it. Reworded; added e45 for "concerns with using these values".
- B (Timeline #5, Questions #12): "preliminary LTLF/values" and "improve the forecast" were not in the cited quotes. Removed "preliminary"; replaced "improve the forecast" with the proposal's own wording (e44: benefit of a more reliable forecast outweighs the added time).
- B (ERCOT context #1, flag 25.508/2025): "which is the basis of the standard in 25.508" cited e9 whose quote lacks the rule number. Reworded to say the PUCT rule setting the standard is 16 TAC 25.508 and cited e10 (which names it).
- Flags (5, all false alarms): rule numbers or years carried in locators/titles (25.508, 25.505, 2025, 2026). Timeline #6 "June 2026" is supported by the order (staff memo of 11 June 2026, order after it) and the source title.
- Checked, no change: e1-e8, e13-e23, e40 against context (no truncation changes meaning; text is the in-force 25.508 copy effective 9/29/24, not a pending box). 13,988 MW and 77,338 MW match the motion.

rmr | quotes: 58 | context-problems: 3 | statements: 48 | wrong: 13 | flags: 2 real, 7 false-alarm | guidance-problems: 0
- A1 (How it works #2, e22): "only if" more than 2% shift factor and 5% unloading impact; the next paragraph (v) lets ERCOT "in its sole discretion, deviate from the above criteria". Added the exception with new quote e59.
- A1 (How it works #3, e25): 150-day complaint trigger stated without the seasonal-mothball carve-out ("Except in cases where ... mothballed on a seasonal basis"). Added a note that seasonal mothballs have a separate timing rule.
- A1 (How it works #3 and Questions #10, e26): RUC availability duty stated with no end and no exception; source says "until no longer required ... under subsection (e)(2) of P.U.C. SUBST. R. 25.502" and "does not apply to a Generation Resource that suspended operations due to a Forced Outage". Added both (new quote e63).
- B (How it works #5 and Formula #5): availability-based incentive reduction (2% per 1%) was cited to e33, which covers only the capacity test. Added e60 (3.14.1.17(3)(a)).
- B (How it works #5): energy payment described as "contract input/output curve and FIP at initial settlement and actual fuel later"; source says estimated curve and startup fuel before true-up/actual cost data, actual energy and FIP; actual fuel costs for other settlements. Reworded to match.
- B (How it works #6, e38): dropped the Market Suspension exception that is in the quote. Added. Also "determined through a shadow price test" (NPRR826) was not in the quote; removed, kept "single price ($/MWh) ... full operating range".
- B (How it works #7): "offers are paid as offered" was not in the quote (e44 only says no clearing price mechanism). Narrowed.
- Formula check: equation RMRSBPR, RMRCRF (2x factor, floor at zero), RMRARF and RMRHREAF (4380 hours) match np-06 6.6.6.1. Problems: (1) Formula #1 called it a "monthly standby price in later settlements"; source defines an hourly price ($/hour) applying only to resettlements after true-up/actual cost data (Initial Settlement and earlier use the Initial/revised Standby Cost). Fixed, added e64. (2) Formula #4 mislabelled RMRIF as "reduced by the capacity and availability factors"; source defines RMRIF as the incentive factor and the formula multiplies it by RMRCRF and RMRARF. Reworded, added e69. (3) Formula #3 and #7 variable definitions cited to e35 (equation only); added quotes e65-e68 from the variable table.
- B (ERCOT context #2 and Timeline #1, flag 2024, real): "March 2024 NSOs for three CPS Energy Braunig gas units" was not in the cited e51 quote (it sits in the preceding sentence). Added e61.
- B (Timeline #5): NPRR1313 Board approval in April 2026 was not in e53's quote. Added e62.
- B (ERCOT context #3): said ERCOT told its Board "in January 2026"; the Board item is dated 2026-02-04 and covers the January storm. Corrected.
- Flags: 9 total. 2 real (March 2024, above). 7 false alarms: rule/section numbers (25.502, 3.14, 6.6/6.1) and years (2025, 2026) present in locators, titles or surrounding text.
- Pending boxes (NPRR826, NPRR885/995) are correctly labelled pending in the text. No D issues. Not resolved: whether PUCT rule 25.502 copy (effective 12/5/19) is the latest.

weatherization | quotes: 50 | context-problems: 2 | statements: 36 | wrong: 5 | flags: 1 real, 9 false-alarm | guidance-problems: 1
- A4 (How it works #3, e26): the declaration contents (minimum ambient temperature) apply to the winter declaration only; summer declaration requires the maximum ambient temperature. Reworded; added e52 (summer) and e53 (summer attestation). Also added "during the winter or summer season" to the mothball/outage return declaration (e27).
- A4 (Timeline #5, e37): the one-year update duty quoted is for winter measures; statement said "measures". Narrowed to winter measures.
- B (How it works #2): "beginning in 2023" for winter design level was not in e22's quote (it is in the preceding words). Added e51.
- B (Timeline #4, flag 2022, real): "effective 10/20/2022" was not in any quote and the line called the text "current". Added e54 (page footer) and reworded as the saved copy with later amendments unchecked (matches the open item).
- C (Say it like this #1): "penalties of up to $1 million a day" dropped "may" and "per violation"; reworded to match e6.
- Flags: 10 total; 1 real (2022). 9 false alarms: section numbers and years in locators or titles (3.21, 2021, 2026, 25.55, 35.0021, 38.075, October 2021 etc.).
- Checked, no change: definitions, season dates, 12-hour and 50% interruption tests, three-year repeat test, 72-hour notice, 15-day engineer submission, ten percent substations, SB 3 provisions, Fern outage figures (76 / ~156,000 MWh; 107 / ~610,000 MWh match the slide text), 450 inspections planned.
