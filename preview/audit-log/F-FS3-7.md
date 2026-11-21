# Audit log F-FS3-7 (credit-tpe, crez, crr-auction)

credit-tpe | quotes: 71 | context-problems: 2 | statements: 53 | wrong: 12 | flags: 0 real, 6 false-alarm | guidance-problems: 0
- A2 e54: "$5,000 minimum for a terminated participant" given as plain rule; the quote sits directly above an NPRR1023 replacement box (same amount plus an exception). Added a note that a pending replacement exists.
- A4 e65 vs e64: text gave "2022 nearly 27% higher than 2020" (2022 report) as settled; the 2023 report says 26.7% relative to 2021. Added the 2023 quote (new e80) and said the saved texts differ on the base year.
- B Formula, EAL(q): said the equation "takes IEL for the first 40 days, otherwise ..." The equation is Max[IEL (first 40-day period only), sum of the other terms]. Rewrote as the larger of the two.
- B Formula, MCE/IMCE: called IMCE "an initial value" of MCE and named TOA/EAL(t) as "trade-only", unsupported by the cited quotes. IMCE is one term inside the MCE equation (the packet's pending-box flag on e18 is a false alarm: the IMCE row sits outside the NPRR1188 box). Rewrote, added quotes for EAL(q), EAL(t), EAL(a), TOA (e73-e76), FCE (e77).
- B Formula FCE: "PTP Obligation component uses the PWA" had no quote for FCEOBL; added e79.
- B Example: "could not bid further in the DAM" overstated (zero-exposure bids are still possible, DAM limit is ACLD). Narrowed to a $0 DAM credit limit.
- B ERCOT context #2 and Link crr-auction: "ACLC-based limit" misdescribed the rule (ACL locked for CRR auction is the lower of three items) and the link cited e37/e38 (PTP Option zero exposure; DAM rejection), which do not say it. Rewrote from e34/e35.
- B Link uplift: cited e18/e21 (IMCE, RTLE) for PUL. Re-sourced to e15/e16.
- B Link ptp-obligation: e36 does not mention PTP Obligation bids. Added e78 (Section 4.4.10(6)(d)).
- B Link load-ratio-share: claimed uplift allocation and LRS, not in e58. Narrowed to what the IMM says.
- B Link mass-transition: said "EAL can include ILE for POLR QSEs"; e19 says ERCOT may adjust the TPE of POLR Counter-Parties. Reworded.
- B ERCOT context #4: "collateral surged after Uri" is not in e60 (the quote is about short payments). Reworded.
- B Question on 2021 surge: "ties the surge to the storm's price extremes and defaults" is not in the quotes. Narrowed to short payments over $3 billion.
- False alarms: flags on 16.11 (section numbers), "2021" (year), Example numbers (hypothetical arithmetic, checked: 15-10=5, 5-1-4.4=-0.4, floor 0), pending-box flags on e18 and e71 (e71 is already labelled pending in the text).

crez | quotes: 17 | context-problems: 0 | statements: 22 | wrong: 2 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- B ERCOT context #2: "Panhandle GTC and nearby Lewisville and Eagle Mountain constraints" - e18 lists Panhandle GTC, Lewisville area, Lynx to Tombstone and Eagle Mountain to Morris Dido; "nearby" is unsupported (Lewisville is in the North). Named the four constraints.
- B Common confusion: "Building the lines did not remove congestion" is a causal claim the Open items and Questions say the sources do not support; "outages on the CREZ facilities" overstated e19 ("CREZ maintenance outages" tied to the 2021 Panhandle cost). Reworded to "Congestion continued after the CREZ build" and to the e19 wording.
- False alarms: flags on 2011 (twice, a year) and 25.174 (rule number).
- Checked in context: e8-e10, e14 (50% test, collateral, Docket 33672 rules) match the saved rule effective 7/5/16 including (3)(D)/(7)(B); e11 truncation does not change meaning; e15 is the IMM's 2011 expectation and is stated as such.

crr-auction | quotes: 51 | context-problems: 4 | statements: 40 | wrong: 10 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- A2 e17, e19 (and e10): quotes are current Protocol text directly followed by NPRR1288 replacement boxes ("one-month strips only"); the topic stated the multi-month and 7x24 rules without caveat. Added "in the saved Protocol text ... NPRR1288 would replace" (Open items already covered the strip language).
- A2 e25: the exception for paragraph (f) is marked for deletion upon NPRR1023 implementation. Added that note.
- A2 e28: NPRR1030 box would change the initial-distribution basis to DC Tie ratio share. Added that note.
- B How it works #3: "must be a CRR Account Holder that meets financial assurance criteria" cited e1/e12, which do not say it. Added e52 (Section 7.5.2(1)).
- B How it works #4: "PTP Option offers have zero credit exposure" cited e20 but is in the next sentence of the source; added e53. "Prevents awards that exceed the lesser of..." was not in e12 (which only says the limit is entered); reworded.
- B Formula #1: said AOBLCR/AOPTCR cover "awarded" bids. The variable table says "all PTP Obligation bids submitted" / "all PTP Option bids submitted" (and offers submitted for AOBLCRO). Corrected, added e54, e55.
- B Formula #2: OBLS and OBLP definitions not cited; added e56, e57.
- B ERCOT context #1: "initial distribution based on ... coincident peak" not in e28; added e58 (Section 7.5.7(3)).
- B ERCOT context #2 and Question 12: "shortfalls arise when" (source: "can occur") and "often after unforeseen outages" (not in quote). Softened; extended e40 with the next sentence.
- B ERCOT context #3 / Common confusion: "IMM measures profitability as the difference" not in the e39 quote. Extended e39 with the preceding sentence.
- B ERCOT context #4: Market Notice/credit window and "about one week to run the auction" not in e33; added e60, e61 (checked against the monthly handbook list; the two-week figure is the Long-Term list).
- B Timeline #1: "implementation project had not been initiated" is not in e38. Added e59.
- Not resolved: handbook v4.3 is undated in the snapshot; its timelines are described as "the handbook describes".
- False alarms: flags on 16.11/6.1 (Protocol section numbers inside the Section 16.11.6.1.4/.5 reference), 2025 (twice, years). Revenue series 2021-2025 and growth checked: 1810/1710 = +5.8%, 1098/832 = +32%; 2024/2025 funding figures match Figure 43 OCR.
