# Audit log F-FS1-9

crr | quotes: 60 | context-problems: 3 | statements: 58 | wrong: 6 | flags: 0 real, 8 false-alarm | guidance-problems: 0
- A2/B: "monthly refund formula and NPRR1030 changes are in pending boxes in 7.6 and 7.9.3.5" was cited to e36/e37, which are the current text and show no box. Source has NPRR1030 replace boxes at 7.6(3) and 7.9.3.5(1). Added quotes e62/e63 and reworded.
- B (wrong): Questions #8 said ERCOT sells 70% in the first window "and larger shares later". The Protocol percentages fall from 70% to 10% across the six windows; 90% is the Monthly Auction. Rewrote, attributing the "raises percentage in successive auctions" to the IMM.
- B (wrong): Formula #1 omitted the Option-with-refund payment term and the Obligation-with-refund charge term of DACRRCRTOT/DACRRCHTOT, and "its share" was not in the quote. Corrected to the quoted terms.
- B (wrong): oversold-facility reduction of payments to CRRs sinking at generators (context #3, Questions #10, link binding-constraint) was not in any cited quote. Added e61 and re-cited.
- B (wrong): DAM settlement reduction for Obligations applies only to Obligations with a positive value; sentence and scenario narrowed.
- B: ACLC was described as "available credit limit"; source: Available Credit Limit for the CRR Auction. Fixed. Questions #12 charge claim re-cited to e11.
- Flags: 4.3, 2022 (handbook version/date), 3.2, 7.6 (section numbers), 2024, 2025 (years) are false alarms. Pending NPRR1288 box (e22) is already disclosed in the text.

load-ratio-share | quotes: 32 | context-problems: 3 | statements: 46 | wrong: 5 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- A2: Sections 7.5.7(2), 7.9.3.5(1) and 6.6.3.5(c), quoted as current, each have a NPRR1030 replace box; text did not say so. Added e39-e41 and a sentence.
- A2/B: Sections 6.6.2.5 to 6.6.2.8 claimed pending but only 6.6.2.6 was quoted; added e35-e37.
- B (wrong): "the total is the sum across QSEs and Settlement Points (floored at zero)": the formula floors each QSE's sum over Settlement Points, then sums across QSEs; the formula was not quoted. Added e33 and corrected. Hourly "four intervals" not in quote; added e34 and removed "four".
- B (wrong): "That concern is the stated reason for NPRR1030" and Questions #6 ("incentive is real", "NPRR1030 was proposed") overstated the IMM, who says ERCOT approved it in August 2020 to remove the incentives. Added e38 and reattributed.
- B (wrong): Questions #10 and link load-zone said zonal sharing "does not move" / "not today's Load Zones"; source allows change under 3.4.2. Reworded.
- Flags: 6.6, 2.2, 2.4, 2.5, 2.8 are section numbers (false alarms).

shadow-price | quotes: 39 | context-problems: 1 | statements: 56 | wrong: 4 | flags: 0 real, 8 false-alarm | guidance-problems: 0
- A4/B: How it works #7 listed HDL/LDL override, which sits after the end of quote e23. Added e40.
- B (wrong): Questions #8 said LMPs "can exceed the cap"; source says RTSWCAP; the -50% / $50,000 example figures were outside the quotes. Added e41 and re-attributed to ERCOT's example.
- B (wrong): Questions #14 and link system-lambda: "cost of one more MWh at the reference bus" and "its cap" cited to quotes that do not say this. Reworded to e14/e12/e10 wording.
- B: How it works #9 cited e12 for System Lambda; re-cited to e14. "SCED's second step" narrowed to the two-step methodology. Net margin sum scoped to the current calendar year (e27). Formula #2 relabelled as the knowledge base's own arithmetic.
- B: "same three dollar levels" voltage labels equivalence softened.
- Flags: years and dollar example numbers; 2025/2,000/0.5/1,000 are false alarms or labelled arithmetic. Formula #1 checked term by term against e14-e16 (sign of congestion component matches e16; note e17's formula omits the minus sign in the source itself).

evening-ramp | quotes: 24 | context-problems: 1 | statements: 47 | wrong: 3 | flags: 0 real, 9 false-alarm | guidance-problems: 1
- B (wrong): link ordc said the IMM links shortage pricing to implied heat rate, citing e2 and e8 (an ERCOT summer 2023 slide). Neither says that. Replaced with what e2 says.
- B: Questions #10 garbled the AS methodology ("which a net load forecast may not cover as exposure to loss of generation"), outside the cited quote. Trimmed to the quote.
- B: Questions #12 "The IMM says it would pre-position" had an unclear referent (the multi-interval market). Fixed. How it works #1 inferred "rest of fleet must cover a fast increase"; replaced with the IMM's statement.
- B: link wind-solar-forecasts broadened a claim about over-forecasting to all forecast errors; reworded.
- C: guidance (Say it like this, Common confusion) had uncited statements restating cited facts; added citations and the IMM hours (4 to 5 p.m. vs 7 to 9 p.m.).
- Flags: years are false alarms.
