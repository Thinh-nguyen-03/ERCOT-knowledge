# Audit log F-FO-1 (deeper pass): asdc, drrs, four-cp

asdc | quotes: 48 | context-problems: 0 | statements: 41 | wrong: 2 | flags: 3 real, 13 false-alarm | guidance-problems: 0
- B (Formula, wrong): Step 3 described the split up to the MCL with no case logic. np-04 §4.4.12(7)(a) has three branches, checked in order (full shares + NSMWMIN < MCL: Non-Spin takes the rest; else if Reg-Up + RRS + ECRSMWMIN + NSMWMIN > MCL: ECRS and Non-Spin at minimums and RRS cut by the excess; otherwise RRS and ECRS each cut by half the excess over MCL − NSMWMIN). Added all three branches, quoting them (e58).
- B (wrong): Common confusion called the proxy AS offer floor a price on "capacity nobody offered". In np-06 §6.5.7.3(5), proxy offers are built from all available AS capacity of qualified Resources, priced at the higher of the floor and the Resource's own offers (for Resources that are not RUC-committed). Reworded, citing new e59.
- B: How it works #6 rested its claim "the other products follow the same pattern" on the Reg-Up quote alone, and the proxy-offer framing had no quote. Now says the RRS floor is set the same way, with added quotes e59, e63 and e64 (the "not RUC-committed" condition).
- B (flag real): Formula #1, the 10,000 MW threshold was not in the cited quote. Extended e28 to include paragraph (6)(a).
- B: Formula #1 defined RTOLCAP, RTOFFCAP and σ, but the e27 quote covered μ only. Extended e27 to the whole variable table.
- B: Formula #2, the regression formula and the μ*/σ* definitions were not quoted. Added e57 and e62.
- B (flags real): ERCOT context #2 and Questions #10 gave the "December 5, 2025 through February 2026" period and the word "infrequent" with no quote. Extended e49 to the full Table A3 with its title and columns, added e61 ("Shortage conditions have been infrequent since go-live"), and added the RRS row (1.6 h, 35.2 MW, $131.6) that the topic had left out.
- B: Questions #10 said "no explicit shortage adder", which was not in e52. Extended e52 with the sentence before it.
- B: Questions #12, the claim about ERCOT's biennial report was not in e44 or e45. Added e60: ERCOT's report "will likely support the need to review and alter the ASDCs' design".
- Minor wording: Timeline "That 2020 text built the AORDC" changed to "specified a data window" (the 2020 text was prospective). Questions #6 "TCPA pushed" changed to "proposed carrying".
- False alarms: $250/$100/$15/$5 and 90%/10 MW (written as "250", "90" and similar in the tables); dates written as 12/8/20, 4/8/25 and 5/15/25; years taken from source editions; "4.4" as a section number.
- D sweep: offer caps, the ORDC adder replaced by ASDCs, and the pending NPRR1309 boxes are all stated correctly.

drrs | quotes: 56 | context-problems: 0 | statements: 49 | wrong: 0 | flags: 0 real, 14 false-alarm | guidance-problems: 0
- B: Formula #1, "fifth product cut from the AORDC" and "the other ASDCs keep the $15 floor" were not in e33 or e34. Added e58 ((7)(b)(v)) and extended e33 to the full pending paragraph (10), which includes the "with the exception of DRRS ... $15" clause.
- B: Formula #2, the DAM payment formula and the meaning of "awarded MW" were not quoted. Added the formula (e59), the PCDRR definition (e60) and the AS-Only offer payment (e61).
- B: ERCOT context #4, Questions #10 and Timeline 2026-04-29 said TAC adopted two-hour Non-Spin, but e9 does not say so. Added e62 (ERCOT Board slide: "April TAC voted to approve reducing Non-Spin duration to 2 hours").
- B: Timeline 2026-02-03 "qualified support" was not in its quotes. Added e63. Timeline 2026-03-09 "joint IMM/ERCOT curve proposal" was not in e36. Added e64.
- B: Scenarios cited only DAM evidence for "DAM or RTM DRRS MCPC" revenue. Now cites e19 (paid in DAM and RTM) plus the formula. "Plan size is not yet set" narrowed to the IMM's April 2026 statement that volumes were still unknown.
- Context checked: the NPRR1309 text is labelled approved-but-pending throughout; IMM and party positions are attributed; the Non-Spin two-hour change applies to all resources (np-08 pending box), which matches the topic.

four-cp | quotes: 45 | context-problems: 0 | statements: 38 | wrong: 1 | flags: 5 real, 4 false-alarm | guidance-problems: 0
- B/A4 (wrong): How it works #1 applied the wholesale storage load exclusion to each DSP's own 4CP demand. 25.192(b)(1) applies it to the ERCOT coincident peak demand that divides the TSP's cost of service. Also added "previous-year". Rewritten.
- B: Formula #2 rested "the DSP's 12CP value would be raised to each customer's minimum billing demand" on e34, which is the retail REP minimum-billing-demand clause in 25.193. The supporting text is the proposed 25.192 adjustment paragraph. Added e47 and restated it exactly: add the difference between the minimum billing demand and the measured 12CP load.
- B: ERCOT context #3 said "Large loads would be billed". Narrowed to "A REP serving a large load would be charged for that customer", which is what proposed 25.193(d)(1) says.
- B (flags real, 1999 x2): extended e29 to start at "In 1999, ... SB 78 amended". The topic now notes that the draft's text reads "SB 78".
- B (flags real, 2023-2024 x2): added e48 (Figure 6 covers years 2023-2024).
- B (flag real, 2021-2025): added e50 ("over the last five years") and e51 (the Figure 44 title). The IMM hybrid now says "a portion of T-COS", as the source does.
- B: Timeline 1996 and context: the 70/30 rate "billed per 4CP MW" was not in the quotes. Added e49.
- False alarms: "25.192" (the rule itself), "2026" (source edition), "2025" in the SB 6 title, and "765 kV" in a link target name.
- D sweep: the 12CP rule is labelled proposed and not adopted throughout; the Project 58484 report is labelled a draft.

Totals: quotes 149, context-problems 0, statements 128, wrong 3, flags 8 real / 31 false-alarm, guidance-problems 0.
