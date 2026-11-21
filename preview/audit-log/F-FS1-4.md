# Audit log F-FS1-4 (hb-north, hb-west, lmp, resource-node, rtm)

hb-north | quotes: 28 | context-problems: 1 | statements: 41 | wrong: 5 | flags: 0 real, 10 false-alarm | guidance-problems: 1
- A2: Formula presented as the Protocol formula with no mention that the saved text carries a pending NPRR1057 box replacing paragraph (4), and NPRR941 boxes adding the LRGV hub exclusion to the ERCOT Hub/Bus Average hubs. Added pending-change notes (new e35, e36).
- B: "Those are load-weighted zone prices" cited e19 (Hub LMP rule). Re-sourced to IMM text "load-weighted average prices for each zone" (new e30).
- B: Load Zone "weighted by Load" cited e8/e19, which do not say it. Re-sourced to Section 6.6.1.4 (new e29), reworded to "based on state-estimated Loads".
- B: Formula HUBDF/HB/B definitions and RTRDP name were not in the cited quote (e28 only has HBDF). Added e31-e34.
- A4: ERCOT Hub Average price stated without "in real time" (day-ahead uses aggregated Shift Factors). Added scope.
- C/B: HB_HUBAVG and HB_BUSAVG were equated with the Protocol's Hub Average / Bus Average hubs; no saved source maps the names. Reworded to say so.
- Fallback sentence for day-ahead: HBBC counts "in base case"; added.
- Flags (345 kV, 3.5, 2.1, 2026, 2021-2024, 75) are all false alarms: numbers come from table headers, section numbers or the quoted table.

hb-west | quotes: 31 | context-problems: 1 | statements: 38 | wrong: 5 | flags: 0 real, 9 false-alarm | guidance-problems: 1
- A2: Formula had no note of pending NPRR1057 box (West 3.5.2.4). Added (new e35).
- B: Formula said variables have "the same structure as the North hub" citing e3/e4, which do not show them. Replaced with West-specific HUBDF, HB and RTRDP quotes (new e32-e34).
- B: Common confusion said Load Zone price is "weighted by Load" citing e19 (Hub LMP). Re-sourced to 6.6.1.4 (new e36).
- B: "These are Load Zone prices" cited e19; now cites the IMM load-weighted sentence (new e37).
- B: West below ERCOT average "from 2022 to 2023": rows show 2021 also below. Corrected to 2021 to 2023.
- B: basis-risk link said the IMM ties the node/zone-to-hub price difference to West congestion; IMM only reports intrazonal congestion. Narrowed.
- B: "Permian gas is cheap because of limited export capability": IMM says high production and limited export capability. Corrected. Say-it-like-this "higher prices and negative prices to congestion" narrowed to what e6/e24 say.
- Flags are false alarms (345 kV, 3.5, 2.4, years from table headers, 765 kV link target name).

lmp | quotes: 24 | context-problems: 1 | statements: 40 | wrong: 6 | flags: 0 real, 5 false-alarm | guidance-problems: 0
- A1/B: Link rtc-b said RTC ended "the ORDC and RDPA adders"; the cited IMM sentence only covers the ORDC adder (Protocols still carry RTRDPA). Removed the RDPA claim.
- B: "This resolves the earlier open item ... Protocol-side statement of System Lambda plus a congestion component" is not in any quote. Deleted the sentence.
- B: "LMPs are not what settles directly for most participants": "most participants" unsupported. Reworded to "Settlement uses Settlement Point Prices".
- B: Hourly day-ahead LMPs cited e7 (System Lambda row). Added e32 (DALMP "for the hour").
- B: Formula "caps set the limit when constraints cannot be resolved" narrowed to "in cases of constraint violations" (e17 wording).
- B/A4: Link trading-hub said hub prices are averages of Hub Bus prices (day-ahead uses Shift Factors); narrowed to Hub LMP arithmetic average. Link load-zone "Load-weighted" re-sourced (e22, e29). Link negative-prices said the floor and penalty "bound" negative prices; stated the two figures instead. Shadow-price "not binding" changed to "not congested".
- Flags (2025, 3.1, 6.6) false alarms.

resource-node | quotes: 25 | context-problems: 2 | statements: 24 | wrong: 5 | flags: 0 real, 2 false-alarm | guidance-problems: 0
- A5/B: "Several Resources can share a node" and link "PTP bids can be settled at a Generation Resource Node" cited e11, whose quote says neither. Added e30 (item g) and e32 (item c).
- B: "normal procedure is capped at 20 Business Days" cited e10 (item 9, not item 8). Added e29 with the item 8 wording (clock starts at validated registration submission).
- B: Procedure steps (one-line drawing, Network Modeling Group proposes) were not in e8's quote. Added e27, e28.
- A1: First Fork Rule stated without its PUN exception (a.i). Added e31.
- B: "(Reading: design keeps node price from reflecting congestion the plant itself creates)" is speculation; removed. "ERCOT uses discretion only where" changed to the source's "assuming".
- A3/B: Hub described as aggregating nodes into an average price without attribution; now attributed to PUCT rule 25.501(g) (Protocol hubs are Hub Buses, day-ahead uses Shift Factors).
- CCP price: added RTLMP variable quote (e33). OBDRR046 pending box is correctly labelled pending; flags (2026) false alarms.

rtm | quotes: 29 | context-problems: 2 | statements: 25 | wrong: 6 | flags: 0 real, 7 false-alarm | guidance-problems: 0
- B/A1: Key fact "Board review requires 30-day notice and a Counter-Party impact above 2%/$20,000 or 20%/$2,000" reversed the logic: 6.3(7)(b) says ERCOT shall seek Board review IF the impact exceeds those thresholds; 30-day notice is a separate bar (failure precludes review). Also dropped the paragraph (4) precondition (accurate prices, significant impact, listed condition). Rewrote in Timeline-free sections, Key facts, Questions (new e34).
- A4: Link settlement-point said imbalance is calculated at Resource Node, Load Zone and Hub; e16/e24 are Resource Node only. Narrowed.
- B: Link cop said "SCED uses telemetered status rather than the COP"; not in e23. Removed.
- B: "This is why a day-ahead position is settled against real time" causal claim; Q8 "difference between remaining output and DAM and trade positions" omitted Self-Schedules. Reworded to the listed terms.
- D/A4: SWCAP "$2000 down from $5000" presented as the System-Wide Offer Cap; source is a footnote on real-time ESR offers. Scoped it and pointed to offer-cap.
- B: Timeline NPRR1010 "effective on RTC implementation" had no quote for the effective date. Added e35.
- Locator "Chapter I.C" for IMM Table 1 is uncertain (other topics say II.C); changed to "Section C, Zonal Energy Prices".
- Flags (2023, 2020, 2025) false alarms (table headers, dates in titles).
