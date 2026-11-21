# Audit log D-AS2 (deeper-pass sample audit)

state-of-market-report | quotes: 61 | context-problems: 0 | statements: 67 | wrong: 1 | flags: 1 real, 33 false-alarm | guidance-problems: 0
- B (How it works #7): "Retired in 2025: 2023-3, 2023-4, 2022-3, 2022-4, 2021-1". The 2025 table lists them under "Recommendations Being Retired", but 2022-3 and 2022-4 were already in the 2024 retired list (e44). Reworded to "listed under Recommendations Being Retired in the 2025 table" and cited e44. Counted as wrong.
- B, support gap, fact true in source (not counted wrong): How it works #21 said "RTC largely resolved the issue" but e33 does not contain it (it is the next sentence). Added quote e62.
- B, support gap (not counted wrong): How it works #5 gave 2024-1 (a)/(b) but the cited e15 quote starts at 2024-2. Added quote e63.
- B, support gap (not counted wrong): Questions #8 "administrative construct" was not in the cited e21 quote. Added e64 and used the source's wording ("outdated administrative construct instead of the actual severity and type").
- Flag real (1): ERCOT context #2 "August 2026 TAC deck" date was not in e55/e56. Added cite e61. The other 33 flags are false alarms (rule number 25.365, recommendation numbers such as 2024-1, report-year labels).
- Checked, no change: all recommendation titles and the 10 outstanding / 5 retired counts against the OCR table (pages 21-22); 2025 figures (6.1%, 3,205 MW, 4,600 MW, 17,000 MW/31,500 MWh, 61%, 13.8%, 28%, $0.02, 26%/32%, 5,129/176%/77%, 90%/35%, 138-148/209 GW); ORDC/ASDC statements are correctly dated (RTC December 2025). "Physical Responsive Capability" expansion is not in the TAC deck but appears in other saved ERCOT sources; left as is.

load-profiling | quotes: 40 | context-problems: 1 | statements: 25 | wrong: 7 | flags: 0 real, 2 false-alarm | guidance-problems: 0
- A4 / B (Formula #2, Questions #8): the sentence applied the AMS integrated meter rule "(or MOU/EC non-BUSIDRRQ IDR for PV and wind)" to quote e44, but e44 is 11.4.4.3(2), the rule for other DG, and does not mention MOU/EC IDRs. The PV/wind rule is 11.4.4.2(3). Added quote e47 (11.4.4.2(3)), split the sentence by scope, and Questions #8 now cites e47. Counted as wrong for Formula #2 and Questions #8 (PV claim sat on a DG-only quote).
- B (ERCOT context #4, Common confusion #1): "IDR ESI IDs with missing data are estimated, not profiled" and "not profiled by scaling a class shape" overstated. The NWS method falls back to the default profile, scaled in some cases, when no history exists (11.4.3.2(1)(b)). Reworded to "estimated mainly by proxy days rather than by scaling a class profile". Counted wrong twice.
- B (Questions #6): "The profile drives estimated interval load in settlement" was not supported by e4/e10. Reworded to the e8 wording and cited e8. Wrong.
- B (How it works #3): "Each day ERCOT posts forecast and backcast profiles by 1000 CPT" but source says forecasts each Business Day by 1000 and backcasts by 1000 of the second Business Day after. Fixed. Wrong.
- B (Link to market-information-system): same forecast/backcast timing overstatement. Fixed. Counted in the 7 wrong.
- Formula check: PND = (sum actual kWh / sum CP kWh) * LP, with PND, CP, LP matched to the variable table; PV 1100-1500 CPT, 16 intervals, kWh_gen/(read_days*16); wind 0800-2000, 48 intervals, 0.65 and 0.35 with DST adjust; other DG kWh_gen/read_ints. All match source. Flags "2016" and "65%, 35%" are false alarms.

retail-choice | quotes: 32 | context-problems: 0 | statements: 25 | wrong: 3 | flags: 0 real, 2 false-alarm | guidance-problems: 0
- B (How it works #2): "each MOU and EC must register whether it plans to be a NOIE or a CR". Source: must register "regardless of whether" planning to be a NOIE or CR. Reworded. Wrong.
- B (Link to lse): same misreading. Reworded. Wrong.
- B (Questions #8): "REPs have a window to claim them" is not in the cited quotes e31/e32 (the five-Business-Day period is in the source but not quoted). Narrowed to "a REP may claim them". Wrong (unsupported).
- Minor, not counted: How it works #1 tied the metering rule to "after the start date"; e5 says "on introduction of customer choice in a service area". Reworded.
- Flags "150 kW" (the quote says kWh) are false alarms.

waha-hub | quotes: 30 | context-problems: 0 | statements: 29 | wrong: 3 | flags: 0 real, 2 false-alarm | guidance-problems: 0
- B (ERCOT context #2): the MOC fuel price was described as "the greater of WAFP or FIP plus a fuel adder" without its condition. The FPRC formula e27 applies to a Resource with approved verifiable costs and also weights by percentage terms and adds an FOP term. Narrowed. Wrong.
- B (Common confusion #1): "A cheap-gas West zone does not mean low West power prices" is an inference the IMM quote (e3) does not make, and "congestion costs also rising" was undated. Reworded to what e3 says (West net revenues much higher; congestion costs increased in 2025). Wrong.
- B (Say it like this #1, guidance): "ERCOT's FIP and offer-mitigation formulas run on Katy" overstated, since WAFP is resource-specific. Changed to "ERCOT's FIP is a Katy Hub price". Wrong.
- Flags "2024:" and "765 kV" are false alarms (label text, not a figure).
- Checked, no change: EIA and FERC quotes, IMM net revenue ranges ($770-850 vs $700-800, $150-200 vs $130-180, ~10%), 42%, $2.22, $3.52, NPRR952 date.

Totals: quotes 163, context problems 1, statements 146, wrong 14, flags 1 real / 39 false-alarm, guidance problems 0. Edited only the four topic files; verify.ts shows 0 errors.
