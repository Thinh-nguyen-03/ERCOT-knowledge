# Audit packet: Scenario: Bidding a Battery After RTC+B (sc-battery-strategy)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 2 · text copy line 633 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …2) 1. EB/OCs for the ESR and the Ancillary Service offers are input data to SCED process. EB/OCs can be updated anytime. SCED uses the most recent EB/OC that is available in the database and the telemetered physical capability of the resource in determining awards (along with other information). 2. 
QUOTE: SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs.
AFTER:  3. The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is…

### e2 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 23, ESR Participation in the DAM with the RTC+B Project, item 2 · text copy line 610 · heading above: 8.1.1.2.1.3 (8)

BEFORE: ….1.1.3.3 (2) 4 hours 8.1.1.2.1.3 (8) 1 hour *Note FRRS is being eliminated with RTC. PUBLIC 22 ESR Participation in the DAM with the RTC+B Project 1. EB/OCs for the ESR is input to DAM. Resource-specific DAM energy sales and purchases that are cleared are cleared at the Resource Node of the ESR. 2. 
QUOTE: State of Charge (SOC) is not considered in the clearing for Energy and Ancillary Services in the DAM. (If not careful, a QSE representing ESRs could "oversell" its capability in DAM.
AFTER:  Financial Exposure is based on imbalance between DAM and Real-Time. [DAM Ancillary Service awards, Real-Time Ancillary Service awards, self-arrangement of Ancillary Services, and trades].) 3. The ESR will be awarded DAM Resource-specific energy sales and purchases and Resource-specific Ancillary Se…

### e3 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 161 (OCR), Appendix, Table A1: Duration Requirements for Energy and AS in RTM · ocr copy line 6885, OCR page 161

BEFORE: …ket. One feature is that SCED now explicitly accounts for ESR SOC in its energy and AS awards. Together with the duration requirements for energy and AS shown in Table A1, this SOC accounting limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM 
QUOTE: Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours
AFTER:  These duration constraints introduce some imbalance risk for ESRs that sell reserves in the day- ahead market. At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to in…

### e4 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization, after Table A1 (p. A-3) · text copy line 9440

BEFORE: … limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM !"#$%&D (%")D*#+ !"#$%C 'E)*"+ ,#%-. /0E)*"+ ,,N /0E)*"+ !2,N 3E4RS$ 7N,N UE4RS$+ These duration constraints introduce some imbalance risk for ESRs that sell reserves in the dayahead market. 
QUOTE: At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to increase to reflect the higher risk and lower benefit of selling AS there.
AFTER:  Initial observations validate that expectation, as Figure A2 shows. 2025 State of the Market Report | A-3 / / Appendix: Real-Time Co-Optimization Figure A2: Proportion of ESR AS Offers by Price in DAM December 5, through February, 2024-25 for Pre-RTC and 2025-26 for RTC Data "!! U9:;! !:.:;"!! ;"!!…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (p. iv) · text copy line 811

BEFORE: … that ERCOT adjust the AS methodology to reflect a reasonable characterization of the operational risks these products are meant to manage. Forward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. 
QUOTE: With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time.
AFTER:  Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves. These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the …

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, key insights on ESRs · text copy line 2195 · heading above: 6.2 GW of solar, 7.3 GW of ESRs, 1.2 GW of wind, and 280 MW of gas turbines. Of this

BEFORE: …eted because the net peak load hour has continued to shift into the evening. • Total energy storage capacity exceeded 17 GW, and average duration increased from 1.67 hours to 1.83 hours. The increase in average duration corresponds to ESR market participation shifting from AS to energy arbitrage. • 
QUOTE: Annual revenue per unit of ESR capacity declined by 37% in 2025 as revenues from providing AS fell by the same amount.
AFTER:  This revenue decline further explains why ESRs are shifting their business model to energy arbitrage because of strong competition in AS. • ESRs are offering more competitively. In 2025, 55% of energy offers were priced between $0-100 per MWh, up from 46% in 2024. Still, 18% of offers were submitte…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 717

BEFORE: …duced by solar resources increased from 10.4% in 2024 to 13.9% in 2025. Energy Storage Resource (ESR) capacity increased even more dramatically than solar capacity. The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024. 
QUOTE: The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services.
AFTER:  Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation. Changes in demand and supply …

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Ancillary Services Prices · text copy line 3962

BEFORE: ….com/calendar/09192024TAC-Meeting 2025 State of the Market Report | 39 / / Ancillary Services 2. Ancillary Services Prices Figure 25 presents the monthly average DAM clearing prices for the five ancillary services in 2025, and the inset table shows the annual average prices for the last five years. 
QUOTE: Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter.
AFTER:  Until RTC was implemented, the entire AS plan was procured in the day-ahead market, often producing very high prices. The high prices shown for May in Figure 25 are an example. ERCOT operators increased an already high procurement target for NSRS in that month. Exercising their discretion, they inc…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.1, ESR Fundamentals · text copy line 2853

BEFORE: …cillary services such as regulation or responsive reserves to manage fluctuations in load or renewable generation. • They are driven by opportunity cost - The charging/discharging cycle and duration limits create unique economics for ESRs. ESRs must optimize these cycles to maximize their revenues. 
QUOTE: Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value. These strategies can introduce market inefficiencies.
AFTER:  A Multi-Interval Real-Time Market (MIRTM) would allow SCED to optimize ESR charging and discharging over time and reduce the need for ESRs to do so themselves. We have recommended that ERCOT consider implementing a MIRTM since our 2022 State of the Market report as part of Recommendation 2022-1. 2.…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.4, ESR Aggregate Offers · text copy line 3066

BEFORE: …re of ESR offers priced at normal market clearing price ranges continued to increase. In 2025, 55% of energy offers were priced between $0-100 per MWh, compared to 46% in 2024 and 25% in 2023. As more ESRs enter the market, they must offer more competitively to maximize revenue from energy sales. • 
QUOTE: ESRs still submit a substantial percentage of offers priced at the System-Wide Offer Cap (SWCAP), 18% in 2025 compared to 32% in 2024. This tendency can be partially attributed to SOC management. ESRs must maintain sufficient SOC to satisfy their AS obligations, even if they use some capacity for energy arbitrage.
AFTER:  24 | 2025 State of the Market Report / / !"#$B&&'E)*+,-)$./M1 Demand and Supply in ERCOT Figure 19: Average Aggregate Offers for ESRs to Buy or Sell Energy 2021-2025 )#>>> :3;D>>> ;">>><;D>>> (#>>> ;">><;">>> ;><;">> D#>>> =>3;> C#>>> B#>>> $#>>> "#>>> > $>$" $>$$ $>$B $>$C *+,-./01+O1345560, $>$D …

### e11 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, Energy Storage Capacity Offered in Real-Time Market, Key Takeaway · text copy line 1349

BEFORE: …te: 1. The data is based on the 20:00 SCED interval snapshot. SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. 2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. 
QUOTE: The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B.
AFTER:  21 PUBLIC ESR contribution to Ancillary Services continues to increase ESR AS Contribution in DAM 100 90 80 70 60 % 50 40 30 20 10 0 ESR AS Contribution in RTM 100 80 % 60 40 20 0 Jun Jul Aug 2024 REGUP Jun Jul Aug 2025 REGDN RRS Jun Jul 2026 ECRS Aug 2026-Jun REGUP REGDN 2026-Jul RRS 2026-Aug ECRS…

### e12 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3 · text copy line 638 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs. 3. 
QUOTE: The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements. Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution.
AFTER:  4. QSE management of Ancillary Service responsibility across their portfolio no longer exists. PUBLIC 24 Real-Time Market With the Implementation of the RTC+B Project (2 of 2) 1. 6.6.5.5 ESR Set Point Deviation Charge for Over Performance The tolerance is the greater of 3% of the Average Aggregated…

### e15 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Slide 4, RTC+B Market Trial Progression, footnote · text copy line 160

BEFORE: …ED/LFC (QSE RTC offers and telemetry to support closed-loop frequency control test 2-3 tests of 2-4 hour durations) #6 Day-Ahead Market (Non-binding DAM using QSE offers for at least 2 tests) Transition to Go-Live Upon completion of testing, confirmation of ERCOT and market readiness for Go-Live. * 
QUOTE: Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration.
AFTER:  4 Item 10 PUBLIC Key activities leading up to Go-Live ERCOT successfully conducted the second/final RTC+B Production Test on Oct 30, 2025 from 10:35am-12:35pm to manage the Real-Time Market and Load Frequency Control systems: - Frequency control was improved, QSE performance improved, and no new is…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e17 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Key Takeaways slide · text copy line 24

BEFORE: …ide an Operational and Market review of Summer 2026 • For information only No action is requested of the ERCOT Board; for discussion Key Takeaways • Solar growth outpacing large load additions helped make the daytime hours this summer uneventful. A new all-time demand record was set on July 22nd. • 
QUOTE: Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer.
AFTER:  • Both Energy and Ancillary Service costs were close to or slightly lower than Summer 2025 and Summer 2024. • Overall, Operations and Market outcomes met reliability needs. Dan Woodfin Vice President, System Operations Keith Collins Vice President, Commercial Operations Board of Directors Meeting S…

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4225

BEFORE: … 4 J . /M/ J J M N O P 4 A!A% A!AC A!AD ECRS and NSRS Provision by ESRs ESRs' provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025. This increase is noteworthy because the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. 
QUOTE: The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282.
AFTER:  42 | 2025 State of the Market Report / / Ancillary Services As of this report, the NSRS duration requirement remains four hours, despite mounting evidence that this constraint distorts market outcomes. However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set …

### e19 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slides 26-27, RUC with Implementation of RTC+B Project, items 2 and 4 · text copy line 691 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …tware. In other words, with the RTC+B implementation the RUC software will not assume Ancillary Services are carried by any particular Resource and will consider all possibilities of where to carry Ancillary Services for future hours. PUBLIC 26 RUC with Implementation of RTC+B Project: Continued 4. 
QUOTE: The RUC software will use the Hour Beginning SoC (HB SoC) provided by the QSEs in their COPS for each ESR to appropriately limit the possible use/capability of each ESR.
AFTER:  5. The RUC process self-schedules ESRs to their HB SoC. The process of self-scheduling evaluates the change in the COP submitted HB SoC (change in stored energy SoC) across two consecutive hours and determines the best use of that change in energy - combination of charging or discharging the ESR as…

### e21 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 26, RUC with Implementation of RTC+B Project, item 2 · text copy line 674 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …Point Deviation calculation. PUBLIC 25 RUC with Implementation of RTC+B Project 1. DRUC and HRUC will be the tools to assess if enough capacity is available (and in the right locations) to ensure RTC SCED will have enough capacity (and State of Charge) to solve for energy and Ancillary Services. 2. 
QUOTE: Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed.
AFTER:  In other words, the RUC software will NOT RUC an ESR to come online. (ESRs should have a status of "ON", "ONOS" "ONTEST", "ONEMR", "ONHOLD" or "OUT." "OUT" should be used only if the resource is "broken.") 3. In evaluating the capability of the online Resources (and those shown off-line), the full …

### e23 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, 2. COP State of Charge Error · text copy line 6733

BEFORE: …accuracy strongly affects the efficiency of the commitments RUC recommends. The distribution of COP SOC accuracy for the second half of 2024 through all of 2025 is shown in Figure 52. 84 | 2025 State of the Market Report / / Market Operations Figure 52: Distribution of ESR SOC Accuracy H2 2022-2025 
QUOTE: Figure 52 indicates that, on average, aggregate COP SOC is overestimated by approximately 874 MWh, and the magnitude of the overestimate has increased over time. The variance of COP SOC error has also increased, corresponding to the large increase in installed ESR capacity. This COP SOC inaccuracy has been suggested as one factor leading to the large increase in commitments through RUC from 2024 to 2025.
AFTER: 50 E. Reliability Must Run and Must Run Alternatives 1. RMR Basics ERCOT's Reliability Must-Run (RMR) process addresses local reliability needs when marketbased solutions are insufficient. When a generation resource owner plans to suspend or retire a unit for more than 180 days, ERCOT must conduct a…

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 48) · text copy line 4567

BEFORE: …ent in new generation. Procuring excessive volumes of ancillary services will inefficiently inject additional non-price-setting energy into the real-time market and reduce prices. Ultimately, it can undermine the ability of shortage pricing to provide efficient long-term signals for new investment. 
QUOTE: With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them.
AFTER:  At the extremity of a well-designed ASDC, the shortage price should approach $0, reflecting the low marginal reliability value of additional reserves and allowing the market to go short on AS. This dynamic contrasts with the previous market design where the day-ahead market necessarily 48 | 2025 St…

### e25 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC §25.509(b)(6)(B) · text copy line 52

BEFORE: …t a publicly accessible location on its website the updated value of the peaker net margin, in dollars per megawatt (MW). (6) System-Wide Offer Caps. (A) The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) 
QUOTE: The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers.
AFTER:  (C) The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds …

### e26 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1(7)(b)(vi)(C), Capacity Shortfall Ratio Share (QSE Ancillary Service shortfall calculation) · text copy line 1681 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …HSL minus LSL limits. For Generation Resources that have a Resource Status of OFF and the Ancillary Service type is Non-Spin, consider LSL to be zero. Likewise, for Generation Resources that have a Resource Status of OFFQS and the Ancillary Service type is Non-Spin or ECRS, consider LSL to be zero. 
QUOTE: (C) For ESRs, consider: (1) Duration requirements for each Ancillary Service type and the submitted COP values for Hour Beginning Planned State of Charge (HBSOC), Minimum SOC (MinSOC) and Maximum SOC (MaxSOC); (2) Ancillary Service deployment factors, duration requirements for different Ancillary Service types or sub-types, and the difference between the submitted COP HBSOC for the hour under consideration and the next hour; and (3) The charge or discharge MW required to satisfy the above constraints.
AFTER:  (c) The outputs of the optimization for each Resource are: (i) The Resource's MW capacity used to cover its QSE's net Ancillary Service position by Ancillary Service sub-type for a given hour. These values are ASMWCAPUSNAP for a given hour in the RUC Snapshot and ASMWCAPUADJ for the end of the Adju…

### e27 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 11, High Level Scope of "+B", item 3 · text copy line 231

BEFORE: …s Ancillary Service Demand Curves (ASDCs) Ancillary Service Prices 10 High Level Scope of "+B" 1. NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024) 3. 
QUOTE: NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024)
AFTER:  4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optimization (Approved at the ERCOT Board of Directors June 24, 2025) 6. Not part of RTC+B Project.…

### e28 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: NPRR1309 PUCT report, list of revision requests unboxed with RTC+B · text copy line 440

BEFORE: …4, Considerations of State of Charge with Real-Time Co-Optimization Implementation (unboxed 12/5/25) - Section 3.9.1 - Section 5.5.2 - Section 6.5.7.3 - Section 6.5.7.5 - NPRR1216, Implementation of Emergency Pricing Program (unboxed 12/5/25) - Section 4.4.12 - Section 4.6.2.3.1 - Section 6.6.9.1 - 
QUOTE: NPRR1236, RTC+B Modifications to RUC Capacity Short Calculations (unboxed 12/5/25)
AFTER:  - Section 5.7.4.1.1 - NPRR1245, Additional Clarifying Revisions to Real-Time Co-Optimization (unboxed 12/5/25) - Section 4.4.7.2 - Section 4.4.12 - Section 5.5.2 - Section 6.5.7.3.1 - Section 6.6.9.1 - Section 6.7.1 - Section 6.7.2.7 - Section 6.7.2.8 - Section 9.14.10 - NPRR1246, Energy Storage Re…

### e29 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2(8), Reliability Unit Commitment (RUC) Process · text copy line 306 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …ngine shall consider a COP Resource Status of ONL for Load Resources that are qualified for Ancillary Services, as being eligible to provide Ancillary Services constrained by the Ancillary Service capability in the COP. The RUC engine will not consider any Load Resources for dispatch of energy. (8) 
QUOTE: The RUC constraints in the RUC engine shall use 60 minutes as the duration for energy and Ancillary Services, excluding Responsive Reserve (RRS) provided using Fast Frequency Response (FFR), for which duration shall be 15 minutes. These same duration requirements will be used to enforce a constraint on each ESR's dispatch for energy and Ancillary Services using Ancillary Service deployment factors for a given hour such that the calculated SOC at the end of that hour is equal to the next hour's COP value of HBSOC.
AFTER:  (9) The RUC process can recommend Resource decommitment. ERCOT may only decommit a Resource to resolve transmission constraints that are otherwise unresolvable. Qualifying Facilities (QFs) may be decommitted only after all other types of Resources have been assessed for decommitment. In addition, t…

### e30 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2(3), RUC Clawback Charge · text copy line 1412 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …rs; and (c) Revenue Less Cost During QSE-Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals. (2) The RUC Clawback Charge for a Resource, including RMR Units, for each Operating Day is allocated evenly over the RUC-Committed Hours for that Resource. (3) 
QUOTE: ESRs are not subject to RUC Clawback Charges.
AFTER:  +----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (3) above with the following upon system implementation:] | | | | (3) ESRs and DRRS deployments are not subject to RUC Clawback Charges. | +=====================================…

### e31 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.3(7), Day-Ahead Make-Whole Settlements · text copy line 3012 · heading above: 4.6.2.3 Day-Ahead Make-Whole Settlements

BEFORE: …pensation in the Day-Ahead Make-Whole payment, then Ancillary Service revenue from the hours committed in the DAM will be included in its make-whole calculation for that Resource. (6) For purposes of this Section 4.6.2.3, the telemetered Resource Status of OFFQS shall be considered as Off-Line. (7) 
QUOTE: An Energy Storage Resource (ESR) is not eligible for Day-Ahead Make-Whole Payment.
AFTER:  4.6.2.3.1 Day-Ahead Make-Whole Payment (1) ERCOT shall pay the QSE a Day-Ahead Make-Whole Payment for an eligible Resource for each Operating Hour in a DAM-commitment period. (2) Any Resource-Specific Ancillary Service Offer cleared for the same Operating Hour, QSE, and Generation Resource as a Thr…

### e32 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.3(2), Non-Spinning Reserve Capacity Monitoring Criteria · text copy line 836 · heading above: 8.1.1.3.3 Non-Spinning Reserve Capacity Monitoring Criteria

BEFORE: …he actual generation or Load, the Ancillary Service award for Non-Spin, the HSL/Maximum Power Consumption (MPC), the LSL/LPC, ramp rates, and the Resource's qualification to provide Non-Spin. ERCOT shall also monitor Non-Spin available from and awarded to qualified Resources with an OFF status. (2) 
QUOTE: For the Non-Spin capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least four consecutive hours.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (2) abov…

### e33 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.3, pending box [NPRR1309: Replace paragraph (2) above with the following upon system implementation] · text copy line 841 · heading above: 8.1.1.3.3 Non-Spinning Reserve Capacity Monitoring Criteria
FLAG pending-box: | [NPRR1309: Replace paragraph (2) above with the following upon system implementation:] |
BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (2) above with the following upon system implementation:] | | | | (2) 
QUOTE: For the Non-Spin capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least two consecutive hours.
AFTER:  | +=================================================================================================================================================================================================================================================================+ +------------------------------------…

### e34 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT report, Justification of Reason for Revision, ECRS bullet · text copy line 64

BEFORE: … 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-Spin should be revisited upon implementation of Dispatchable Reliability Reserve Service (DRRS). | | | | | | | | | | - ECRS duration should be changed to one hour: 
QUOTE: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in solar Resources, changing from a two-hour duration requirement to a one-hour duration requirement for ECRS is sufficient.
AFTER:  However, this duration recommendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency …

### e35 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT report, Justification of Reason for Revision, Non-Spin bullet · text copy line 62

BEFORE: …-Spin should remain at not less than four hours. This duration analysis for Non-Spin should be periodically revisited to assess its sufficiency especially during extreme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. 
QUOTE: Additionally, the duration requirement for Non-Spin should be revisited upon implementation of Dispatchable Reliability Reserve Service (DRRS).
AFTER:  | | | | | | | | | | - ECRS duration should be changed to one hour: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in …

### e36 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: NPRR1309 PUCT report, Explanation of Opposing TAC Votes, Independent Generator/Vistra · text copy line 184

BEFORE: …onfounding market signal along with DRRS implementation. This will impact the ability of NPRR1309 and NOGRR283 to achieve their statutory objectives of accounting for market uncertainty, reducing RUCs, and supporting dispatchable generation to help meet the reliability standard. | | | | | | | | | | 
QUOTE: The reduction in Non-Spin duration from 4 hours to 2 hours was (1) not required to implement DRRS; (2) would be better evaluated during the 2029 Ancillary Services methodology review to align with DRRS go-live;
AFTER:  and (3) raises concerns about the degradation of durable reserve quality and the implications for reactionary out-of-market activities (such as increased RUCing of thermal generators). This increases market uncertainty and undercuts any support DRRS might have towards meeting the reliability standa…

### e37 · `imm-board-2026-02` · tier 2 · IMM Report to the Board (item 10.1) (2026-02-02)
locator: IMM report to ERCOT Board R&M Committee, February 9-10, 2026, slide 2, Non-Spinning Reserve Pricing in RTC · text copy line 13

BEFORE: …Item 10.1: Independent Market Monitor (IMM) Report Jeff McDonald, Ph.D. VP Potomac Economics and ERCOT IMM Director Board of Directors, Reliability and Markets Committee ERCOT Public February 9-10, 2026 Non-Spinning Reserve Pricing in RTC • 
QUOTE: The RTM clears surplus NSRS yet is producing a shortage price. • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well).
AFTER:  2 Shortage Prices in Non-Spin when System is Long 3 Notes on RA Through Markets • There are three fundamental designs that are intended to support resource adequacy in wholesale electric markets: • Energy Only (TX), Capacity Market, and Load Obligation. • Energy only and capacity markets are design…

### e38 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 16, Day-Ahead and real-time Ancillary Service prices are lower · text copy line 989 · heading above: 4.5 5

BEFORE: …Average MCPC ($/MWh) Average MCPC ($/MWh) PUBLIC 7 6 5 4 3 2 1 0 7 6 5 4 3 2 1 Jun Jul Aug Jun 2024 Reg-Up Jul Aug Jun 2025 Reg-Down RRS Jul Aug 0 Jun-26 Jul-26 Aug-26 2026 ECRS Non-Spin Reg-Up Reg-Down RRS ECRS Non-Spin * RT MCPCs only exist for 2026 and both DAM and RT 2026 data runs through 8/15 
QUOTE: Key Takeaway: Day-ahead ancillary service prices have been trending lower in summer 2026 compared to 2024 and 2025, except for Non-Spin. Across summer 2026, Real-time Ancillary Service prices have decreased month over month.
AFTER:  16 Ancillary Service costs have been lower in 2026 compared to previous years, consistent with price trends RT AS Cost DAM AS Cost 35 35 30 30 25 25 20 20 $ Million $ Million PUBLIC 15 15 10 10 5 5 0 Jun Jul Aug Jun 2024 Reg-Up Jul Aug Jun 2025 Reg-Down RRS Jul Aug 0 Jun-26 Jul-26 Aug-26 2026 ECRS …

### e39 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 11, State of Charge Operating Patterns Across Summer (2026 data June 1 - August 15) · text copy line 665 · heading above: 4.5 5

BEFORE: …ESRs were charging during high solar generation and discharging during the solar ramp down. Compared to last year SOC% was lower on raw percentage, however, since ESR MWh capacity is higher, this lower SOC% is not necessarily lower SOC MWh. 10 PUBLIC State of Charge Operating Patterns Across Summer 
QUOTE: Key Takeaway: SOC levels were generally highest between Hours 12 and 20. There were several hours during the late evening through sunrise where SOC was very low. The percent of hours with SOC under 20% and 10% were 15% and 0.74% respectively.
AFTER:  11 PUBLIC 2025 vs. 2026 HSL of Offline Resources Key Takeaway: June and July 2026 largely had more available generation offline than in 2025. However, less generation remains online after summer temperatures ramped up in August. 12 PUBLIC Increasing solar and storage resources continue to impact su…

### e40 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21 note · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.3, ESR Revenue Trends · text copy line 2951

BEFORE: …lmost 37% from 2024 after normalization for the larger volume of ESR capacity in the market. This decline occurred even though total net ESR revenue increased by about 8%, driven mainly by the 22 | 2025 State of the Market Report / / Demand and Supply in ERCOT substantial expansion of ESR capacity. 
QUOTE: Net energy revenue rose by 57% after accounting for charging costs. However, ancillary services revenue fell by more than 37% because the additional ESR capacity increased ancillary services supply and reduced prices.
AFTER:  *+,-./.0N. 20.34R,-./.0N. S7389:;<.=,2+-,-./.0N. !)"" !&#" !&"" !#"" !%'" !E"" !%&" !&"" !A" !%"" !#" !" !" &"&% &"&& &"&E &"&# !"#$%&'E)*+,-.+.)/)MN)+23+4)#+RST8#9 W";%&+,-.+.)/)MN)+23+<'&&'"M=9 !'"" Figure 17: Total and Normalized ESR Revenue 2021-2025 &"&) 4. ESR Participation in Energy Markets …

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.4, ESR Aggregate Offers · text copy line 3060

BEFORE: …nds: • The volume of energy offers that ESRs submitted continued to grow exponentially, more than doubling or tripling each year since 2021. It increased from roughly 3,000 MW in 2024 to 6,700 MW in 2025. • The share of ESR offers priced at normal market clearing price ranges continued to increase. 
QUOTE: In 2025, 55% of energy offers were priced between $0-100 per MWh, compared to 46% in 2024 and 25% in 2023. As more ESRs enter the market, they must offer more competitively to maximize revenue from energy sales.
AFTER:  • ESRs still submit a substantial percentage of offers priced at the System-Wide Offer Cap (SWCAP), 18% in 2025 compared to 32% in 2024. This tendency can be partially attributed to SOC management. ESRs must maintain sufficient SOC to satisfy their AS obligations, even if they use some capacity for…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, key insights on ESRs · text copy line 2189 · heading above: 6.2 GW of solar, 7.3 GW of ESRs, 1.2 GW of wind, and 280 MW of gas turbines. Of this

BEFORE: …ve an overall capacity factor of 31.6%, while solar resources have an overall capacity factor of 23.8%. However, the wind capacity factor during peak net load hours has increased, while the solar capacity factor has plummeted because the net peak load hour has continued to shift into the evening. • 
QUOTE: Total energy storage capacity exceeded 17 GW, and average duration increased from 1.67 hours to 1.83 hours. The increase in average duration corresponds to ESR market participation shifting from AS to energy arbitrage.
AFTER:  • Annual revenue per unit of ESR capacity declined by 37% in 2025 as revenues from providing AS fell by the same amount. This revenue decline further explains why ESRs are shifting their business model to energy arbitrage because of strong competition in AS. • ESRs are offering more competitively. …

### e44 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1(1), Ancillary Service Awards · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …s and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards (1) 
QUOTE: Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e45 · `imm-som-tac-2026-07` · tier 2 · IMM State of the Market presentation to TAC (2026-08-06)
locator: IMM 2025 SOM presentation to TAC (July 2026), slide 11, Trends related to RUC · text copy line 424

BEFORE: …ximately three hours • Since 2021 - Annual RUC commitments have consistently totaled thousands of resource-hours - The average startup time for resources committed through RUC increased to almost seven hours • In 2025, RUC was used extensively to manage congestion rather than system-wide scarcity • 
QUOTE: One legitimate and growing challenge for ERCOT in using RUC appropriately is the (in)accuracy of the forecast for battery State of Charge
AFTER:  © 2025 Potomac Economics 11 RUC Instructions Have Been Issued Further in Advance on Average Since Winter Storm Uri © 2025 Potomac Economics 12 Forecast error for battery State of Charge is a growing challenge for using RUC appropriately © 2025 Potomac Economics 13 The AS Methodology has been inflat…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e1, e12, e44, e3, e18, e34, e32) FLAG number-not-in-quote: 2025: The physical side moved into SCED. SCED now does SOC accounting and will not breach an ESR's telemetered minimum and maximum SOC. [e1] Awards are limited by qualification, telemetry, SOC, ramp rates and AS duration requirements, and one SCED run can award several AS types plus energy to the same ESR. Before RTC+B, the QSE had to hold back enough SOC itself. [e12] The Protocols say AS awards rest on Resource capability, including SOC and SOC limits, and on the ASDCs. [e44] The real-time duration requirements listed in the IMM's 2025 report are 5 minutes for energy, 30 minutes for RegUp and RRS, 1 hour for ECRS and 4 hours for NSRS. [e3] The ECRS requirement fell from two hours to one under NPRR 1282 [e18]; ERCOT justified it by the length of historical ECRS deployments and 30-minute-ahead net load forecast error. [e34] Non-Spin capability must still be sustainable for four consecutive hours. [e32]
- **How it works #2** (cites e2, e5, e4, e31): The financial side is still yours. The DAM does not consider SOC when it clears energy and AS, so a QSE can oversell an ESR day-ahead. [e2] Day-ahead energy and AS awards are financial positions, and imbalances settle at real-time prices. [e5] Because RTC lets AS providers sell straight into real time, the IMM expected ESR AS offer prices in the DAM to increase to reflect higher risk and lower benefit. [e4] There is no day-ahead safety net: an ESR is not eligible for Day-Ahead Make-Whole Payment. [e31]
- **How it works #4** (cites e21, e29, e27, e28, e26, e30): RUC treats batteries differently. ESRs are not seen as OFF, so they are not available to be RUCed. [e21] RUC uses a 60-minute duration for energy and AS (15 minutes for FFR) and constrains each ESR so that its calculated end-of-hour SOC equals the next hour's COP HBSOC. [e29] Under NPRR 1236 (approved November 2024, in force with RTC+B on 12/5/25), the QSE AS shortfall calculation for RUC capacity-short charges considers each ESR's duration requirements, COP HBSOC, MinSOC and MaxSOC, the change in HBSOC to the next hour, and the charge or discharge MW those imply. [e27][e28][e26] ESRs are not subject to RUC Clawback Charges. [e30]
- **Key facts #3** (cites e33): - Pending: NPRR1309 would cut the Non-Spin sustain requirement to two consecutive hours upon system implementation. [e33]
- **Key facts #4** (cites e6, e41): - ESR revenue per unit of capacity fell 37% in 2025 as AS revenue fell by the same amount; net energy revenue rose 57%. [e6][e41]
- **Key facts #6** (cites e43) FLAG number-not-in-quote: 2025: - Average ESR duration rose from 1.67 to 1.83 hours in 2025. [e43]
- **Key facts #7** (cites e10, e42): - 18% of ESR offers were at the SWCAP in 2025, down from 32% in 2024, partly to protect SOC; 55% were priced at $0-100/MWh. [e10][e42]
- **Key facts #8** (cites e40, e25) FLAG number-not-in-quote: 25.509: - The Real-Time SWCAP fell from $5,000 to $2,000/MWh at RTC go-live (PUCT rule 25.509 still states a $5,000 HCAP). [e40][e25]
- **Key facts #9** (cites e39): - Summer 2026: SOC was highest between Hours 12 and 20; SOC was below 20% in 15% of hours and below 10% in 0.74%. [e39]
- **Scenarios #2** (cites e8, e7, e41): - Start with where the money is. AS prices fell across all products in 2025, partly because of ESR growth, and ESR revenue has shifted toward energy arbitrage: net energy revenue rose 57% while AS revenue fell more than 37%. [e8][e7][e41]
- **Scenarios #4** (cites e17, e39): - Plan for the evening net peak. In summer 2026 ESR SOC exhaustion in the evenings was a pattern, with SOC highest in Hours 12-20 and very low in some hours from late evening to sunrise. [e17][e39]
- **Scenarios #6** (cites e3, e32) FLAG number-not-in-quote: 100 MW, 400 MW, 200 MW, 50 MW: - Match products to duration. Suppose (illustrative): at 100 MW, a 1-hour ECRS duration needs about 100 MWh, while a 4-hour Non-Spin duration would need about 400 MWh, more than the 200 MWh battery holds, so the most Non-Spin it could back is about 50 MW. [e3][e32]
- **Scenarios #7** (cites e2, e5, e31): - Be careful day-ahead. The DAM ignores SOC, so selling more than you can deliver leaves you buying back at real-time prices, and an ESR gets no Day-Ahead Make-Whole. [e2][e5][e31]
- **Scenarios #9** (cites e9, e40): - Shape the offer curve. SCED optimizes only one five-minute interval at a time, so price discharge high enough to keep energy for the peak; remember the Real-Time SWCAP is now $2,000/MWh. [e9][e40]
- **Scenarios #10** (cites e42): - (Reasoning) The IMM says that as more ESRs enter, they must offer more competitively, so a curve priced well below the cap in most intervals and high only for the last slice of SOC fits the shift the IMM describes. The IMM reports 55% of ESR energy offers at $0-100/MWh in 2025. [e42]
- **Scenarios #11** (cites e19, e23, e26): - Keep the COP SOC accurate. RUC uses it to limit what each ESR can do, and the IMM reports aggregate COP SOC overestimated by about 874 MWh on average, which has been suggested as one factor in the jump in RUC commitments from 2024 to 2025. [e19][e23] The same HBSOC values feed the RUC capacity-short calculation that can charge your QSE. [e26]
- **Scenarios #15** (cites e37, e38): - The IMM told the Board in February 2026 that the RTM clears surplus NSRS yet produces a shortage price, and that it frequently clears above other reserves. [e37] ERCOT's summer 2026 review found day-ahead AS prices trending lower except for Non-Spin. [e38]
- **Scenarios #16** (cites e32) FLAG number-not-in-quote: 200 MW, 50 MW: - But Non-Spin capability must be sustainable for four consecutive hours. [e32] Suppose (illustrative): a 200 MWh battery could back at most about 50 MW of Non-Spin, leaving 50 MW of power for energy or other products.
- **Scenarios #17** (cites e37): - (Reasoning) The answer depends on the spread between the Non-Spin price and the evening energy value forgone; the IMM recommended stopping the ASDC at the AS Plan and then reformulating it, so this premium may not last. [e37]
- **Scenarios #19** (cites e33) FLAG number-not-in-quote: 200 MW, 100 MW: - The pending box would let a Resource count Non-Spin it can sustain for two consecutive hours. [e33] Suppose (illustrative): the same 200 MWh battery could then back about 100 MW.
- **Scenarios #20** (cites e35, e36): - Timing is not settled: ERCOT had said Non-Spin duration should be revisited when DRRS is implemented [e35], and Vistra, opposing at TAC, argued the change would be better evaluated in the 2029 AS methodology review aligned with DRRS go-live. [e36]
- **Scenarios #22** (cites e26): - The shortfall calculation uses the COP values you submitted (HBSOC, MinSOC, MaxSOC and the change in HBSOC to the next hour) and AS duration requirements, not what SCED later did. [e26]
- **Scenarios #23** (cites e29, e45): - RUC itself enforces a 60-minute duration and requires end-of-hour SOC to match the next hour's COP HBSOC. [e29] The IMM calls SOC forecast inaccuracy a legitimate and growing challenge for RUC. [e45]
- **Questions #6** (cites e21, e19, e30): No. ESRs are not seen as off, so they are not available to be RUCed. [e21] RUC instead uses the hour-beginning SOC the QSE reports in its COP to limit what each ESR can do [e19], and ESRs are not subject to RUC Clawback Charges. [e30]
- **Questions #8** (cites e6, e7, e43): Revenue per unit of capacity fell 37% in 2025 as AS revenue fell, and ESRs are moving toward arbitrage. [e6][e7] Average duration rose to 1.83 hours, which the IMM ties to that shift. [e43]
- **Questions #10** (cites e34): ERCOT based the one-hour duration on historical ECRS deployments, 30-minute-ahead net load forecast error and a margin for solar growth. [e34] Suppose (illustrative): a 2-hour battery can now back its full MW of ECRS instead of half.
- **Common confusion #1** (cites e1, e9, e2, e29, e26, e33): (Guidance) RTC+B does not make SOC management disappear. SCED stops infeasible awards in each interval, but it does not plan across intervals, so saving energy for later is still the owner's job. [e1][e9] The DAM still ignores SOC. [e2] "Not RUCed" does not mean "untouched by RUC": the COP SOC still enters RUC constraints and the capacity-short calculation. [e29][e26] And the two-hour Non-Spin duration is a pending box, not the current rule. [e33]
- **Link to rtc-b** (cites e15, e12): used-in RTC+B (Real-Time Co-optimization + Batteries): RTC+B's first Operating Day was 12/5/2025, and SCED now limits ESR awards by SOC, ramp rates and duration requirements. [e15][e12]
- **Link to energy-storage-resource** (cites e1): used-in Energy Storage Resource (ESR): SCED now tracks each ESR's state of charge inside the optimization. [e1]
- **Link to battery-revenue-stack** (cites e7): related Battery Revenue Stack: ESR revenue has shifted from AS toward energy arbitrage. [e7]
- **Link to ancillary-services** (cites e16) FLAG number-not-in-quote: 2025: related Ancillary Services (AS): In 2025 ESRs provided on average 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
- **Link to asdc** (cites e24): affects ASDC (Ancillary Service Demand Curves): Under RTC, sloped ASDCs define shortage pricing in the day-ahead and real-time markets. [e24]
- **Link to dam** (cites e2): related Day-Ahead Market (DAM): The DAM does not model SOC, so an ESR can oversell its capability there. [e2]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): ERCOT says the share of ESR capacity offered within $100/MWh of the SWCAP rose slightly in summer 2026, largely due to the lower $2,000/MWh Real-Time SWCAP. [e11]
- **Link to net-load** (cites e17) FLAG number-not-in-quote: 2026: affects Net Load: Evening net peaks drained ESR state of charge throughout summer 2026. [e17]
- **Link to ruc** (cites e19, e21): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses the SOC that QSEs report in their COPs, and ESRs are not seen as OFF and so are not available to be RUCed. [e19][e21]
- **Link to non-spin** (cites e32, e33): related Non-Spinning Reserve: Non-Spin capability must be sustainable for four consecutive hours today; a pending NPRR1309 box would cut that to two hours. [e32][e33]
- **Link to drrs** (cites e35): related DRRS (Dispatchable Reliability Reserve Service): ERCOT said the Non-Spin duration should be revisited when DRRS is implemented. [e35]
- **Link to ecrs** (cites e34): related ECRS (ERCOT Contingency Reserve Service): NPRR1282 cut the ECRS duration from two hours to one, based on historical deployments and 30-minute net load forecast error. [e34]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) A COP SOC that is too low for a later hour can make the portfolio look short of AS coverage; fix the COP before the snapshot.
- (Say it like this) (Guidance) After RTC+B, ERCOT's dispatch makes sure a battery's awards fit its state of charge, so my job is the economics: decide day by day how much energy to save for the evening peak and how much capacity to sell as reserves. I avoid overselling in the day-ahead market, because it ignores state of charge and I would have to buy back any shortfall at real-time prices, and I keep my COP state of charge honest because RUC charges are computed from it.

