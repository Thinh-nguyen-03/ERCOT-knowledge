# Verdicts on the 55 chat claims

Checked against sources/text/*.txt only. Quotes are verbatim from the saved text.

1. CONFIRMED: about 90% of Texas load.
   ercot-fact-sheet, p.1: "ensures reliable electric service for 90 percent of the state of Texas"; annual report: "about 90 percent of the state's electric load".
2. CONFIRMED: PUCT oversees ERCOT; wholesale market not FERC-regulated.
   ercot-fact-sheet, p.1: "regulated by the Public Utility Commission of Texas and the Texas Legislature"; ferc-nerc-uri, App. J fn 378 (line 11896): "ERCOT manages a wholesale energy market which is not regulated by FERC".
3. CONFIRMED: energy-only, no capacity market.
   imm-som-2025, line 1133: "In an energy-only market like ERCOT"; line 7459 lists capacity markets only as an alternative design ("Capacity markets are designed to procure enough capacity...").
4. PARTLY: $5,000 cut from $9,000 after Uri is right, but "the system-wide cap is $5,000" is outdated for real time.
   imm-som-2022, line 812: "the HCAP and VOLL were reduced from $9,000 per MWh to $5,000 per MWh" (effective Jan 1, 2022). np-04 4.4.10 table: "HCAP – DAM (DASWCAP) $/MWh 5,000 ... HCAP – RTM (RTSWCAP) $/MWh 2,000".
5. CONFIRMED: nodal market began 2010.
   imm-som-2021, line 7524: "since the nodal market began in 2010"; constraint table: "December 1, 2010".
6. PARTLY: hub list is incomplete and the "HB_" identifiers and "main traded hub" are not in sources.
   np-03 TOC 3.5.2.1-3.5.2.7: North, South, Houston, West, Panhandle, "Lower Rio Grande Valley Hub (LRGV 138/345)", "ERCOT Hub Average 345 kV Hub", "ERCOT Bus Average 345 kV Hub". Claim omits LRGV. No saved text contains "HB_NORTH" etc. ICE contract is North 345 hub, but no source says it is the "main" hub.
7. PARTLY: four zones are confirmed, the "LZ_" codes are not in sources, and NOIE load zones also exist.
   imm-som-2024/2023 (load-zone topic): "ERCOT established its current four load zones - West, North, South, and Houston - in 2003."; np-03 3.4: "There are four NOIE Load Zones ... Austin Energy, City Public Service, Rayburn..."
8. CONFIRMED: SCED about every 5 minutes; 15-minute settlement.
   np-06 6.5.7.3(1): "calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary"; np-03 3.5.2.1: "15-minute Settlement Interval".
9. PARTLY: System Lambda is "the energy component of LMP" is supported; an explicit "+ congestion" formula and "no loss component" are not stated.
   np-02 "System Lambda": "The System Lambda is the energy component of LMP at each Settlement Point in ERCOT." No source text addresses marginal losses in LMP.
10. PARTLY: Real-time load zone price = load-weighted LMP average and RT hub price = simple average of Hub Bus LMPs are right; day-ahead prices use aggregated shift factors, and Hub Average is an average of hubs.
    np-03 3.5.1/load zone: "calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs)"; np-06 6.6.1.5: "the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses"; np-03 3.5.2.1: "uses the aggregated Shift Factors ... in the Day-Ahead".
11. CONFIRMED: offers by 10:00, results by 13:30.
    np-04 4.4.9.x: "A QSE must submit any DAM Energy-Only Offer Curves by 1000"; 4.5.x(1): "no later than 1330 in the Day-Ahead, ERCOT shall notify the parties to each cleared DAM transaction".
12. CONFIRMED: DAM co-optimizes energy, AS and congestion (PTP).
    np-04 4.1(1): "The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions"; QSEs "submit ... Point-to-Point (PTP) Obligation bids".
13. CONFIRMED: RTC+B live Dec 2025; ASDCs replace ORDC; single ESR model with state of charge.
    ercot-rtc-update-2025-12: "Status of go-live for December 5, 2025"; ercot-summer-2026-review slide 21: "after RTC go-live on 12/5/2025"; ercot-rtc-overview: "Instead of using the ORDC, under RTC, scarcity pricing and the value of reserves is set by individual ASDCs"; ercot-rtcb-battery: "NPRR 1014: BESTF-4 Energy Storage Resource Single Model", "NPRR 1204: Considerations of State of Charge with Real-Time Co-Optimization".
14. CONFIRMED: five AS; ECRS added June 2023.
    imm-som-2023, line 370: "the ERCOT Contingency Reserve Service (ECRS) in June 2023"; np-04 4.4.7: "Regulation Service, Non-Spin, RRS, and ECRS" (Reg-Up/Reg-Down).
15. CONFIRMED: about 20 GW shed.
    ferc-nerc-uri, line 5282: "ERCOT shed a maximum of 20,000 MW of firm load by 7:00 p.m. on February 15".
16. CONFIRMED: PUCT-ordered prices at $9,000 for days.
    ut-uri-timeline, line 377: "The price of electricity spiked to $9,000 per MWh and stayed there by orders of the PUCT"; imm-som-2021, line 579: prices held at VOLL "through mid-morning on February 19".
17. PARTLY: bankruptcies confirmed, but the co-op's name is "Brazos Electric Power Cooperative Inc."
    ut-uri-timeline, line 2898: "Brazos Electric Power Cooperative Inc., which filed for bankruptcy on March 1, 2021"; line 2913: "Griddy Energy LLC, Entrust Energy Inc., and Power of Texas Holdings Inc. have each filed for bankruptcy."
18. CONFIRMED: HB 4492 financing/securitization after Uri.
    hb4492-87r: caption "relating to financing certain costs associated with electric markets; granting authority to issue bonds"; "SUBCHAPTER M. WINTER STORM URI DEFAULT BALANCE FINANCING"; "excluding amounts securitized under Subchapter D, Chapter 41".
19. PARTLY: DAM 2nd business day, final 55th day, true-up 180 days are right, but RTM initial is the fifth day (rolled to next Business Day), not "5 business days", and true-up is conditional on data thresholds.
    np-09 9.2.4: "the second Business Day after the Operating Day"; 9.5.4: "on the fifth day after the Operating Day, unless that fifth day is not a Business Day"; 9.5.6: "RTM True-Up Statements 180 days following the Operating Day, if ERCOT has received and validated usage data from at least 99%".
20. CONFIRMED: three-part supply offer components.
    np-02: "containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve".
21. PARTLY: ERCOT mitigates offers on non-competitive constraints, but the saved sources never use a "three pivotal supplier" test; the Protocols use the ECI/pivotal-player Constraint Competitiveness Test.
    np-03 3.19.4 and 3.19.x: "A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM; ... identified as a pivotal player for the constraint". No hit for "three pivotal" in any source.
22. CONFIRMED: PRC thresholds trigger EEA levels.
    np-06 6.5.9.4.2: "ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW"; EEA 2 at 2,000 MW; EEA 3 when PRC "cannot be maintained above 1,500 MW".
23. CONFIRMED: monthly and long-term CRR auctions; PCRRs to NOIEs.
    np-07 7.1(b): "ERCOT shall allocate CRRs (known as Pre-Assigned Congestion Revenue Rights (PCRRs)) to eligible Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs)"; "CRR Monthly Auction", "CRR Long-Term Auction Sequence".
24. CONFIRMED: PTC drives negative offers; West/Panhandle export-constrained.
    imm-som-2025, line 1958: "incentivized to produce even when prices are negative because many receive federal production tax credits"; West zone "Panhandle ... is export-constrained" with the most negative-price intervals.
25. CONFIRMED: annual-average day-ahead premium in 2022-2025.
    imm-som-2025: "average price premium in the day-ahead market was $1.17 per MWh"; imm-som-2023: "day-ahead prices and real-time prices simple averaged $58 and $51 per MWh in 2023"; imm-som-2022: "$66 and $64 per MWh in 2022".
26. CONFIRMED: 4CP drives load behavior; reform directed.
    imm-som-2025: "4CP response ... most consequential form of self-curtailment"; sb6-89r: "not later than December 31, 2026, the commission shall amend commission rules to ensure that wholesale transmission charges appropriately assign costs".
27. CONFIRMED: SB 6 (2025) large-load rules.
    sb6-89r.alt: "relating to the planning for, interconnection and operation of, and costs related to providing service for certain electrical loads"; 75 megawatts threshold.
28. CONFIRMED: pre-RTC prices carried ORDC and reliability adders.
    ercot-rtc-overview slide 9: "ORDC Price Adders ... Combined to form Settlement Point Prices"; np-06 6.5.7.3: "Real-Time Reliability Deployment Price Adder for Energy".
29. CONFIRMED: largely isolated, limited DC ties.
    ferc-nerc-uri: "ERCOT does not have any synchronous connections to the Eastern Interconnection, Western Interconnection, or Mexican grid. ERCOT's Interconnection has approximately 1,220 MW of asynchronous direct current ties".
30. CONFIRMED: retail choice, with co-ops and munis outside unless they opt in.
    pura-39 Sec. 39.102(a): "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice".
31. PARTLY: IMM puts the over-pricing at $16 billion, but IMM also says correction would change settlements by $5.1 billion; "controversy" is the assistant's label.
    imm-uri-letter-3, line 47: "over-priced energy in ERCOT's real-time market by $16 billion. Correcting this error will not reduce costs to consumers by $16 billion"; line 79: "alter the ERCOT settlements by a total of $5.1 billion".
32. PARTLY: statute defines LFL registration around virtual currency mining facilities (>75 MW, interruptible); ERCOT/EIA define it as any 75 MW+ facility; data centers named under a different term (Large Computational Load).
    pura-39 39.361(b): "virtual currency mining facility ... total load of more than 75 megawatts; and ... interruptible"; eia-tx-large-load: "any facility drawing power from the grid with an expected peak demand capacity of 75 megawatts or more"; np-02: "Large Computational Load ... such as data centers and cryptocurrency mining facilities".
33. PARTLY: sources say "sometimes turning negative" (2024: below zero on 42% of trading days), and that Waha stayed positive from mid-November 2024; no 2025 data.
    eia-gas-hubs: "Waha prices are typically lower than those at other hubs, sometimes turning negative"; eia-waha-2024: "traded below zero for 42% of trading days in 2024 ... Since mid-November the price at the Waha Hub has been more than zero."
34. CONFIRMED: gas usually marginal.
    imm-som-2024, line 733: "natural gas power plants are typically the marginal generator".
35. CONFIRMED: DRUC, HRUC, make-whole and clawback.
    np-05 5.1(2): "at least one Day-Ahead Reliability Unit Commitment (DRUC) and at least one Hourly Reliability Unit Commitment (HRUC) before each hour of the Operating Day"; 5.6.5.2: "RUC Make-Whole Payment and RUC Clawback Charge".
36. PARTLY: source says ERCOT "intends to" pause, per an order filed Aug 20, 2026; it does not say the pause happened.
    puct-59142-good-cause-order, p.1: "ERCOT intends to temporarily pause its transitional Batch Zero interconnection study ... until the verification and audit are complete"; Governor directed "a comprehensive verification and audit of all data centers".
37. CONFIRMED: April 24, 2025.
    ercot-constraints-needs-2025, line 9: "On April 24, 2025, the Public Utility Commission of Texas (PUCT) approved the three 765-kV import paths".
38. CONFIRMED: about 438 GW mid-2026.
    ercot-batch-zero-explainer, line 24: "As of mid-2026, large users totaling more than 438,000 MW of proposed demand had entered ERCOT's connection queue."
39. PARTLY: 91,134 MW on July 22, 2026 is the preliminary/unofficial figure; the October 2026 fact sheet gives 91,155 MW for the same date.
    ercot-monthly-ops-2026-07: "new unofficial all-time peak demand record of 91,134 MW* ... 7/22/2026" (* "Preliminary value"); ercot-fact-sheet: "91,155 MW ... Record peak demand (July 22, 2026)".
40. CONFIRMED: approved July 9, 2026, 20-30 months.
    ercot-nprr1309-puct-report: "Date of Decision | July 9, 2026"; "Project Duration: 20 to 30 months"; "Effective Date: Upon system implementation".
41. CONFIRMED: -$251/MWh floor.
    np-06 6.6.1: "an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy"; np-03: "RTSPP = Max [-$251, ...".
42. CONFIRMED: eight hubs including Panhandle and LRGV.
    np-03 TOC 3.5.2: North, South, Houston, West, Panhandle, "Lower Rio Grande Valley Hub (LRGV 138/345)", ERCOT Hub Average, ERCOT Bus Average (eight).
43. CONFIRMED: RT cap $2,000 after RTC+B, DA $5,000.
    ercot-summer-2026-review slide 21: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025"; np-04 table: "HCAP – DAM (DASWCAP) 5,000 ... HCAP – RTM (RTSWCAP) 2,000".
44. CONFIRMED: $16 billion over-pricing, $5.1 billion settlement effect.
    imm-uri-letter-3, lines 47 and 79 (quotes as in claim 31).
45. CONFIRMED: PRC never below 4,052 MW in Elliott.
    ercot-elliott-report, line 45: "Instantaneous Physical Responsive Capability (PRC), which indicates the amount of operating reserves, never fell below 4,052 MW during the storm."
46. CONFIRMED: 75,922 MW vs 84,500 MW forecast.
    ercot-fern-board-sysops: "maximum unofficial instantaneous peak demand during Winter Storm Fern was 75,922 MW"; "The load forecast peak for Winter Storm Fern was 84,500 MW, which assumes no demand response."
47. CONFIRMED: gas +61%, all-in power <14%.
    imm-som-2025, line 770: "the price of natural gas increased by 61%, but the all-in price of electricity increased by less than 14%".
48. CONFIRMED: all 12 CLRs are crypto mines.
    imm-som-2025, line 3292: "In 2025, all 12 registered CLRs are cryptocurrency mines."
49. CONFIRMED: sunset date Sept 1, 2029.
    hb1500-88r.alt, Sec. 12.005: "the commission is abolished ... September 1, 2029" unless continued under the Sunset Act.
50. NOT IN SOURCES: no source gives ERCOT's share of Texas land area. Searched: "land area", "geograph", "square miles", "75 percent" in fact sheet, annual report, EIA profile. The fact sheet's "75%" means "of load is competitive-choice customers", not land area.
    ercot-fact-sheet: "75% of load is competitive-choice customers".
51. CONFIRMED: REC program voluntary Sept 1, 2025.
    np-14 14.1(3): "REC Trading Program, which became effective July 1, 2001, and became a voluntary market on September 1, 2025."
52. CONFIRMED: Dec 2025 CDR, 18.3% summer 2026, negative 2028.
    ercot-cdr-2025-12, line 140: "summer and winter Planning Reserve Margins for 2026 through 2030 ... cross over to negative values in 2028"; "summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour".
53. CONFIRMED: RUC commitments fell 80%.
    imm-som-2025, line 9732: "Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live." (source says "commitments", not "activity")
54. CONFIRMED: about 1,400 MW extra NSRS from the aggregate curve.
    imm-som-2025, line 9666: "From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average"; cause: ASDCs must "conform to the Aggregate Operating Reserve Demand Curve (AORDC)".
55. CONFIRMED: 367,790 MW by 2032 (April 2026 preliminary LTLF).
    ercot-ltlf-2026-prelim, line 30: "367,790 MW by 2032" (filed April 15, 2026).

## Counts

- CONFIRMED: 41
- PARTLY: 13 (claims 4, 6, 7, 9, 10, 17, 19, 21, 31, 32, 33, 36, 39)
- CONTRADICTED: 0
- NOT IN SOURCES: 1 (claim 50)
