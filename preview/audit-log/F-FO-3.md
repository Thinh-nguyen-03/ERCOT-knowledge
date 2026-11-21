# Audit log F-FO-3 (deeper pass): pcm, rtc-b, sb6

pcm | quotes: 47 | context-problems: 0 | statements: 45 | wrong: 1 | flags: 1 real, 11 false-alarm | guidance-problems: 1
- B (Formula #2): the formula read "penalty = 2% x forward clearing price x quantity not delivered". e24 (PUCT Staff memo, relaying E3) says only "penalized at two percent of the forward market price, in addition to the requirement to buy back the full quantity at the actual PCM market price". The "x quantity not delivered" term is not in the source. Changed: removed the term, and added a note that the memo does not say which quantity the 2% applies to.
- B (ERCOT context #7, real flag): the 0.67 and 0.52 days/year LOLE figures were not in e43, which stops at the $75/kW-year sentence. Added e48, the memo's next sentence ("...PCM equilibrium LOLE decreasing from 0.67 days per year to 0.52 days per year..."), and cited it.
- B (How it works #1, minor, not counted wrong): CONE was described as one of "the chosen parameters". e12's context shows CONE was a separate policy parameter, not a PCM design parameter. Reworded: the design used the $1 billion gross cap, and the assessment used the CONE the Commission selected.
- C (Common confusion #1): "DRRS, which is an Ancillary Service" was a new fact with no citation in this file. Added e49 (Staff memo: "this new ancillary service"), attributed the description to Staff and cited e49.
- False alarms: years taken from dated sources and titles (2023, 2024), the section number 39.1594, and "2%" against the source's "two percent".
- D sweep: the ORDC floor appears only as history (2023-2024); the Open item already says its status after RTC+B is unsourced. No offer-cap or Batch Zero claims.

rtc-b | quotes: 58 | context-problems: 1 | statements: 35 | wrong: 3 | flags: 0 real, 11 false-alarm | guidance-problems: 0
- D/A4 (Key facts #5): said "the SWCAP was reduced from $5,000/MWh to $2,000/MWh". e15 says this is the "Real-Time System Wide Offer Cap"; the day-ahead cap stays $5,000. Changed to "Real-Time SWCAP".
- B (Formula #1, dropped branch): said that if the unit is not awarded the same quantity in real time, "the QSE buys back the difference". np-06 6.7.2.1 sets a signed imbalance quantity at the QSE level: a shortfall is charged and a larger real-time award is paid. Rewrote the sentence to cover both directions, at QSE level, at the Real-Time AS price.
- B (ERCOT context #5): said ERCOT "credits RTC with ... congestion" next to "congestion rent 10% below summer 2025". e44 says the 10% drop was "primarily due to sufficient dispatchable capacity and generation" and that "RTC played a role". Added that attribution.
- A4 (ERCOT context #5): the summer RUC figures (1,313 / 872 / 148 Resource-hours) did not give their period. The source says August data for each year runs through 8/15. Added "June through August 15 of each year".
- B (Questions #8, not counted wrong): the two reasons the IMM gives for NSRS pricing (extended ASDC; the 4-hour duration limiting ESR supply) were in the text near e32/e33 but not in the quotes. Added e62 and e63 (IMM 2025 SOM, E. NSRS relative Pricing) and cited them. Also added e61 ("This excess volume is currently assigned to the ASDC for NSRS...") to ERCOT context #3, and gave the period of the 1,400 MW figure.
- Checked and fine: np-04 4.4.12(4)-(6) are current text (the NPRR1309 box sits after (5) and is described as pending); np-06 6.5.7.3(14)(d) and 6.7.2.1 are outside pending boxes; the OCR values in Tables A1, A2 and A3 match.
- False alarms: section numbers 6.7.2.1 and 4.4.12; dates written in the source as "12/8/20", "5/15/25", "7/31/25"; "December 6" (2025) taken from the period of the surrounding text.

sb6 | quotes: 55 | context-problems: 2 | statements: 49 | wrong: 1 | flags: 1 real, 24 false-alarm | guidance-problems: 0
- A1 (How it works #4): stated the §39.169 notice requirement as applying to every generator registered stand-alone on September 1, 2025. The quote stops before §39.169(b), which excludes a generator whose registration included a co-located large load at energization, and one majority-owned as of January 1, 2025 by a parent of the load customer. Added e57 with (b) and a sentence on the exclusions.
- A5 (e30 locator): the locator said §39.169(d)-(e), but the whole quote is in (d). Corrected.
- B (links to load-shed and prc, not counted wrong): "deployments count as firm load shed / in price adjustments" cited e28 (the definition and threshold sentences) instead of e29. Re-cited to e29.
- B (link to large-load-interconnection, real flag): the $100,000 study fee was cited only to e35 ($50,000/MW). Added e36.
- A2 check (ERCOT context #1, minor): e42 says ERCOT "has previously used" the forecast that excludes curtailable load. Changed "has given" to "has previously given".
- Proposals checked: §25.521 LLDMS and Project 58000 (12CP) are labelled as proposals throughout. The $5,000/MWh LLDMS offer ceiling is the proposed rule's "must reject an offer ... greater than $5,000 per megawatt hour", not the SWCAP.
- False alarms: "75 MW" against "75 megawatts"; section numbers (37.0561, 39.169, 39.170, 25.194, 25.205, 25.370); years and dates taken from dated filings.
