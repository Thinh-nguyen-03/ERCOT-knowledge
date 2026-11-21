# Audit log F-FO-10 (deeper pass)

`sc-battery-strategy | quotes: 41 | context-problems: 0 | statements: 39 | wrong: 2 | flags: 0 real, 7 false-alarm | guidance-problems: 0`
- D: Key facts #8 said "the DAM HCAP in the PUCT rule remains $5,000". 16 TAC 25.509(b)(6)(B) states a $5,000 HCAP with no DAM/RT split. Changed to "PUCT rule 25.509 still states a $5,000 HCAP".
- B: Scenarios #10, a "(Reasoning)" bullet, said "Competition is tightening the arbitrage spread". No cited quote says this. e42 only says that as more ESRs enter, "they must offer more competitively". Reworded to say what the IMM says.
- B (not misleading): Scenarios #17 said the IMM recommended changing the ASDC, but quote e37 stopped before that bullet. Extended e37 to the end of the slide's "Recommend stop ASDC at the AS Plan, then reformulate ASDC" bullet and made the sentence match it.
- Flags, all false alarms: "2025" is the report year or the report's 2025 key-insights context (How it works #1, Key facts #6, link ancillary-services). "2026" is the Summer 2026 review (link net-load). 100/400/200/50 MW are openly labelled illustrative arithmetic (Scenarios #6, #16, #19).
- Checked and fine: the NPRR1282 justification really is ERCOT's (ERCOT is the sponsor). The Vistra attribution matches the TAC opposing-vote text. Clawback, DAMWP, RUC duration (5.5.2(8)) and 5.7.4.1.1 quotes are current text, not pending boxes. The NPRR1309 two-hour Non-Spin rule is labelled as pending everywhere.

`sc-ccgt-in-the-money | quotes: 31 | context-problems: 3 | statements: 35 | wrong: 4 | flags: 0 real, 4 false-alarm | guidance-problems: 0`
- A1: e26 (4.4.9.2.1(4)) stopped at "unless ERCOT has approved verifiable Resource-specific startup costs". The rest of the sentence caps the offer at 200% of those verifiable costs. How it works #5 and Key facts #7 read as if verifiable costs remove the 200% limit. Extended the quote and reworded both to "200% of generic, or 200% of approved verifiable costs".
- A4: e24, the $6,810 startup O&M row, applies "for each combustion turbine in the Combined Cycle Generation Resource". How it works #5 and Scenarios #7 said "$6,810 per start" for the CC. Added "applied for each combustion turbine". Scenarios #7 now states its one-CT assumption.
- A4: e2 and e28, the net revenue assumptions (7 MMBtu/MWh, $4 VOM, 10% outage, excludes start-up/min-energy/ramping), come from the 2024 SOM. Scenarios #21 presented them as describing the IMM's 2025 $82.96 calculation, and no 2025 equivalent is in the saved text. Re-attributed to the 2024 report and labelled "earn less" as (Reasoning). Also added "(2024 report)" to How it works #1 and Key facts #1.
- Minor (not counted as wrong): the Waha net revenue bullet now says "historically", matching e12.
- Flags, all false alarms: Scenarios #4, #7, #8 and #24 are openly labelled illustrative arithmetic on quoted figures ($25 marginal cost, 6,810/1,600, 8 x $3.00, $6 x 7 + $4).
- Formula check: the MOC formula, GIHR/IHR/FPRC/OM definitions and the min-energy cap formula all match np-04 term by term.
- Unresolved: the Verifiable Cost Manual snapshot is the edition effective 2026-12-01, which is not yet in force on 2026-11-21. Added an Open item; it was not compared with the current edition.

`sc-crr-valuation | quotes: 38 | context-problems: 2 | statements: 39 | wrong: 2 | flags: 0 real, 4 false-alarm | guidance-problems: 0`
- A2: e38 (IMM) says that under NPRR 1288 participants "now purchase CRRs only for individual months". The saved np-07 (effective 2025-12-05) still carries the one-month-strip wording as pending "[NPRR1288: Replace ... upon system implementation]" boxes, and its paragraph 7.5.1(1) still says "strips of one or more consecutive months". Key facts #2 and Scenarios #16 stated the rule as settled without attribution. Attributed both to the IMM, added a new quote e41 (the pending box text) and a sentence in How it works #2, and added an Open item.
- A4 (not counted as wrong, because no source shows the value changed): e33's $5,251/MW GTC shadow price cap is listed under "The 2025 shadow price caps were". How it works #3, Scenarios #5 and the link to gtc presented it as current. Narrowed all three to "in 2025".
- Flags, all false alarms: "2020" is the date of the ERCOT training deck in the sentence. "7.5" and "5.3" are the section number 7.5.5.3.
- Formula check: ACR = AOBLCR + AOPTCR - AOBLCRO matches. The definitions of the variables and of A_ci99/EACP match. The handbook clearing-price formula matches, including options using only non-negative shift factors.

`sc-dam-premium-flip | quotes: 35 | context-problems: 0 | statements: 32 | wrong: 1 | flags: 0 real, 11 false-alarm | guidance-problems: 0`
- B: Scenarios #10 cited ERCOT (e33) for "a real-time premium that summer would point to the evening rather than the day". That is the writer's inference. Split it out and labelled it (Reasoning).
- Flags, all false alarms: years come from the report titles or quote context (2022, 2025, 2026). "50 MW" is the training example's delivered quantity, and the sentence's 60/10 MW are quoted.
- Note: the header of IMM Table A2 (e25) reads "December 5, 2026, through February 2026", an obvious source typo. The topic's "December 2025 through February 2026" follows the surrounding text. No change.
- Checked: the two different 2021 absolute-difference figures ($52.70 in the 2021 SOM, $85 in the 2022 SOM) are both attributed to their reports. The IMM's ECRS "artificial spikes" view is attributed to the IMM.

Totals: quotes 145 | context-problems 5 | statements 145 | wrong 9 | flags 0 real, 26 false-alarm | guidance-problems 0
