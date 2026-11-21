# Audit log F-FS1-8 (regulation, rrs, binding-constraint, congestion)

regulation | quotes: 37 | context-problems: 3 | statements: 27 | wrong: 6 | flags: 0 real, 5 false-alarm | guidance-problems: 0
- B: "maximum Reg-Up a Resource is qualified for is limited to 30 minutes" was cited to e29 (8.1.1.3.1(2), capability reporting). The qualification cap is 8.1.1.2.1.1(5). Added e38, cited both.
- A1/B: test thresholds. Text said 3.5% in one interval and ESR 3.0% in the remaining intervals. Source: 3.5% (GREDP/CLREDP/ESREDP) in one interval, 5% in all other intervals, and for an ESR 3.0% in the evaluated interval (iii) and in all other intervals (iv). Rewrote; added e39. Key fact and Q8 updated.
- B: Q8 "random ramp, hold, ramp-down signals" was not in the cited quote and dropped the "when market and reliability conditions allow" condition. Added e40.
- A4: Reg-Down "available below the Base Point" is the Generation Resource wording of the definition. Scoped in Definition, Common confusion and Question.
- C/B: link to prc said "ECRS is sized to restore Reg-Up and RRS", which is not in e14. Removed.
- A3: IMM's "most noteworthy development" stated as fact. Attributed to the IMM.
- A4: Figure 25 inset is "annual average prices", not specifically DAM. Fixed in 2 places. e32 offers cover 5 Dec 2025 to Feb 2026 only; stated. "2025 AS Plan" volumes reworded to 2024 to 2025 change. Q12 said duration "was raised"; the quote is ERCOT's analysis saying it "should be changed". Fixed. e27 interval wording ("clock intervals in the month during which ESREDP was calculated") restored. FRRS statement attributed to the July 2025 RTC+B overview. Staff proposal reworded to "ERCOT is not proposing".
- Flags: all 5 false alarms (year labels, "2025"/"2021" etc.).

rrs | quotes: 32 | context-problems: 1 | statements: 34 | wrong: 6 | flags: 0 real, 5 false-alarm | guidance-problems: 0
- B: "NPRR1282 effective upon RTC implementation" (key fact, timeline, rtc-b link) was cited to a Justification quote that does not say it. Added e33 (Effective Date row: "Upon system implementation of PR447, Real-Time Co-Optimization (RTC)").
- A5: e21 locator named "Revision Description and Effective Date" but the quote is in Justification of Reason for Revision. Fixed.
- B: "amount is set each year in the methodology, not in the Protocols" was misleading, since Protocol 3.16(2)(c) and (4) set a 1,150 MW floor and a 60% limit. Reworded and cited Protocol 3.16(2) (new e34).
- B: Q8 said NCLRs supply "only" the under-frequency-relay share; source says "primarily". Fixed.
- A4: "reduced UFR volumes in 2024-2025" changed to the IMM's "main driver of lower UFR volumes in 2025 than in 2024".
- B: Q12 omitted that the 95/105% failure test applies within 15 cycles or ten minutes. Added.
- Checked and left: 1,150 MW (current text, pending NPRR1128 boxes noted), NPRR1128 pending-box claim, 1,377/450/60% figures, FFR revoke rule scope (FFR only, stated). Flags: all 5 false alarms (year labels, section numbers).

binding-constraint | quotes: 29 | context-problems: 0 | statements: 32 | wrong: 6 | flags: 0 real, 4 false-alarm | guidance-problems: 0
- B: Q12 "non-competitive status is one condition for mitigation in SCED Step 2" was not in e17/e19. Added e33 (3.19.4(7)(a)); the link to market-power-mitigation said this was unsourced, so I updated it.
- B: link to shift-factor cited only e2(b); Shift Factors are in (c). Added e30.
- B: Q14 "violated rather than resolved at any price" rested on text outside the quotes. Added e31 and attributed to the IMM.
- B: crr link said congestion rent "funds CRRs"; source says rent is based on locational price differences and the right accrues to CRR holders. Narrowed.
- B: ESR link said ESRs resolve congestion "by charging or discharging"; the quote supports "act as both supply and demand". Added e32.
- A3/B: "violated" definition stated as fact; now attributed to the IMM. Competitiveness test description sharpened to 3.19.4(2)(b) wording (DME, import side, exceptions, pivotal player).
- Flags: all 4 false alarms (section number, year, "$211" present in quote as "$211M").

congestion | quotes: 29 | context-problems: 1 | statements: 28 | wrong: 6 | flags: 1 real, 4 false-alarm | guidance-problems: 0
- B (flag real): "$2,185 million CRR payments" was not in any cited quote. Added e30 (Figure 43 CRR Payments row, OCR).
- A3: "The IMM calculates day-ahead congestion values as flow times shadow price"; the source's "It" refers to the day-ahead market. Reworded to "The IMM describes ...".
- A3: "violated-constraint hours fell partly because NPRR 1230 lets SCED..." is the IMM's view; attributed.
- B: ESR sentence "or discharge where adding supply helps" is not in the quote. Narrowed to the quoted content.
- B: Q12 "a gas price drop would be expected to lower the dollar cost" was the writer's extrapolation. Removed; kept the IMM's attribution of past years.
- B: Q14 "constraint is left violated" was not in the cited quotes. Added e31, attributed to the IMM.
- A5: e16 locator said Figure 42; the source text says Figure 43. Fixed.
- Flags: 4 false alarms ($211 appears as "$211M", year, "765 kV" from a link name, duplicate link).
