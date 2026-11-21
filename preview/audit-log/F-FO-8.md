# Audit log F-FO-8 (deeper pass): nodal-market, offer-cap, ordc

nodal-market | quotes: 37 | context-problems: 2 | statements: 39 | wrong: 3 | flags: 0 real, 14 false-alarm | guidance-problems: 0

- B (wrong), Common confusion #2: claimed today's four load zones "are not leftovers of the zonal market's pricing". The IMM says the four current zones were set up in 2003 (during the zonal era), and the 2010 report lists four zonal commercial pricing zones with the same names (North, West, South, Houston). Rewrote: same zones, different role; added e39 (imm-som-2010 four commercial pricing zones). Also replaced "IMM reports sometimes count nodal from 2011" with what e20 says (2011 report was the first with a full nodal year).
- B (wrong), ERCOT context #2: said nodal shortage pricing did what "the zonal market did not do reliably". e28 says only that the shortage pricing mechanisms were "more reliable and efficient than existed in the zonal market". Narrowed to the source's comparison.
- B (wrong), Say it like this #2: said zonal-era socialisation left generators "with no reason to care where they were on the grid" (a siting claim). e24 is about scheduling: no incentive "to take into account the state of the transmission system when scheduling their output". Narrowed.
- A1, How it works #1: "Resources are settled at their nodal LMP, and load at its zonal price" from 25.501(e)(2), which speaks of resource and load imbalances (deemed-compliance paragraph). Narrowed to imbalances.
- A2, ERCOT context #5: "ERCOT keeps a non-binding set of guiding principles" from a 2010 TAC-approved document. Reworded to describe the document without claiming ERCOT currently maintains it.
- B, Link to nodal-protocols: "start with improving price signals and dispatch efficiency" was not in the cited Purpose quote (it is in the next paragraph). Added e40 (guiding-principles list).
- Flags: all 14 false alarms: rule number 25.501, report/edition years (2011, 2024, 2025, 2026), and the year of the 2010 go-live plan.

offer-cap | quotes: 54 | context-problems: 2 | statements: 40 | wrong: 3 | flags: 1 real, 17 false-alarm | guidance-problems: 0

- B (wrong), Questions #8: "ERCOT said any cap change should come with a credit-exposure study" cited e36, which says nothing of the kind. ERCOT's filing recommends that the Commission consider its stress-testing framework and the credit Protocols (incl. TPE) as a companion to any SWCAP change. Replaced with that, new e56.
- A4 (wrong), ERCOT context #2: "ERCOT estimated that a 96-hour scarcity event costs about $192,000 ... $480,000". The filing calls it an illustrative window whose amounts "show proportionality, not to forecast" any participant's exposure. Extended e37 to include that sentence and reworded as illustrative. Also Key facts #9 now says "example" event, and Questions #8 says it is not a forecast.
- B (wrong), Timeline #7: "Project 51871 removes the gas-index link". e30 (IMM) says the Commission "directed the elimination". Reworded.
- A3, ERCOT context #3 and Timeline #10/#12: the PUCT approving NPRR1216 on 9/26/2024 and EPP Phase 1 going in on 12/5/2025 come only from ERCOT's party filing. Now attributed ("according to ERCOT's filing", "per ERCOT's 2026 filing").
- B, Link to credit-tpe: cited e35 for the "ceiling on exposure" claim; the claim is in e36. Citation corrected.
- B, Timeline #6 / Questions #12: the March 3, 2021 reinstatement was not in e28 (which covers the Feb 16 suspension). Added e57 (order's operative sentence and signature date).
- B, Formula #1: "0.25 converts a 15-minute interval to hours" had no quote for 15 minutes. Now labelled as the knowledge base's own reading from comparing with the PUCT rule's minutes/60 term.
- Flag (real), How it works #4: "PUCT Staff's 2026 review questions": the year is not in a quote. Dropped the year and said it is the Staff question as quoted in ERCOT's filing.
- Flags, false alarms (17): section numbers (4.4, 11.1), rule number 25.509, dates in source titles or meta (2011, 2020/12-8-20, 2021, 2023/12-20-23, 2024, 2025 edition, 2026 filing date).
- Checked and correct: NPRR1008 is an RTC revision request (the Board report's related-documents list and "RTC - NP 4" title); its proposed 4.4.11 table lists DASWCAP 9,000 and RTSWCAP 2,000; the Board approved it 12/8/20; effective date is on RTC implementation; ERCOT's summer 2026 review dates the $2,000 to RTC go-live 12/5/2025. PUCT 25.509 as saved (eff. 12/20/23) states one HCAP of $5,000 and LCAP $2,000, and the topic says so. The September 2026 ERCOT filing statements (e34-e44, e53) are all attributed to ERCOT. The FERC primer says "Each RTO/ISO" (the footnote is FERC Order No. 831). The topic's "FERC-regulated" qualifier reads it correctly given the next quote, so I left it.

ordc | quotes: 41 | context-problems: 1 | statements: 44 | wrong: 1 | flags: 3 real, 7 false-alarm | guidance-problems: 0

- Formula / B (wrong), Formula #1: gave v = VOLL − System Lambda and the adder as PBMCL × (VOLL − System Lambda) only. The OBD equations use v = max(0, VOLL − SystemLambda) (floored at zero), weight each term by 0.5, and set RTORPA = v·0.5·πS(RS) + RTOFFPA. Added e42 (the equation block, quoted verbatim; the saved text copy has garbled Symbol-font glyphs, labelled as such) and wrote out the full formula. Formula #4's comparison now contrasts min(System Lambda, 250) with max(0, VOLL − System Lambda).
- B, Formula #4: "The 3,000 is the MCL" is an inference (the Protocol formula does not label it). Labelled as the knowledge base's reading.
- B, Link to ecrs: the ECRS launch date (June 10, 2023) and the on-line shift were not in e34. Added e43 (2024 ORDC report ECRS paragraph) and reworded to match it.
- B, Timeline #7: "ERCOT's first biennial ORDC report" (2022): "first" not in any source. Changed to "2022 biennial ORDC report".
- A1, Common confusion #1: "set the MCL at 2,000 MW": the source says "initially set". Added "initially".
- Flags (real): How it works #1 used the 12/5/2025 date without citing e2 (added); Timeline #5 "(2021)" was unquoted (removed); Link to ecrs dates (fixed via e43).
- Flags, false alarms (7): report years (2016, 2024, 2025), section number 4.4, "0.5" (= "one-half" in e23), "$9,000" (= "9000" in e31).
