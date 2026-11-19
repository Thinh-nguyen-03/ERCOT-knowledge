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

### e13 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 21, Telemetry with the Implementation of the RTC+B Project (2 of 2), item 5 · text copy line 522 · heading above: 34.5 kV

BEFORE: …e actual charging or discharging MW as measured at the modeled terminals of the ESR and includes all internal losses in the battery (electro-chemical) and inverter. 4. Including the losses, when there is no expected injection from the ESR, could lead to SPD charges - that may not be appropriate. 5. 
QUOTE: With the implementation of NPRR 1014, the Base Point Deviation (BPD) calculation from the past is replaced with the Set Point Deviation (SPD) calculation and the tolerances for ESRs are smaller (3% or 3 MW).
AFTER:  PUBLIC 21 NPRR 1282 AS Duration under Real-Time Co-Optimization + Batteries Introduction - ERCOT's Analysis and Conclusion • To inform appropriate duration needs for every Ancillary Service type under Real Time Co-optimization (RTC) paradigm, ERCOT has conducted analysis of the (1) duration of hist…

### e14 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 19, Single Model ESR: Energy Bid/Offer Curve (EB/OC) · text copy line 439 · heading above: 34.5 kV

BEFORE: …e" the ESR as a single device. 5. The implementation of the Single Model will eliminate extra coordination currently required with the Combo Model and reduce administration for ERCOT and QSEs. PUBLIC 18 Single Model ESR: Energy Bid/Offer Curve (EB/OC) • ESR Combo Model • $/MWh • $100/MWh ESR-GR EOC 
QUOTE: Single EB/OC curve shall be monotonically nondecreasing from maximum charging MW (negative) to maximum discharging MW.
AFTER:  The maximum price on the charging curve is less than the minimum price on the discharging curve 10 Pairs of $/MWh and MW level. ESR (Single Model) [+/- 100 MW] $/MWh Discharging MW (+ve) $100/MWh $/MWh $4/MWh ESR-CLR RTM Bid $4/MWh LSL = -100 MW Charging MW (-ve) HSL = 100MW Discharging MW (+ve) Ch…

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

### e20 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Energy Storage Resources chapter, ESR revenue and arbitrage · text copy line 3008

BEFORE: … arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high. The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. 
QUOTE: As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed.
AFTER:  ESR Net Injection of Power Figure 18 shows the growth in hourly net energy injections from ESRs from 2023 through 2025. A positive injection value indicates aggregate discharging to the grid, and a negative value indicates aggregate charging. The figure shows a dramatic year-by-year increase in ESR…

### e21 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 26, RUC with Implementation of RTC+B Project, item 2 · text copy line 674 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …Point Deviation calculation. PUBLIC 25 RUC with Implementation of RTC+B Project 1. DRUC and HRUC will be the tools to assess if enough capacity is available (and in the right locations) to ensure RTC SCED will have enough capacity (and State of Charge) to solve for energy and Ancillary Services. 2. 
QUOTE: Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed.
AFTER:  In other words, the RUC software will NOT RUC an ESR to come online. (ESRs should have a status of "ON", "ONOS" "ONTEST", "ONEMR", "ONHOLD" or "OUT." "OUT" should be used only if the resource is "broken.") 3. In evaluating the capability of the online Resources (and those shown off-line), the full …

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.1, ESR Fundamentals · text copy line 2838

BEFORE: …n affects how ESRs participate in the energy and operating reserve markets. • They are a net load to the grid - Although ESRs operate as both generation and load, they are a net load on the system. ESRs must consume energy to charge before they can discharge, and losses occur throughout that cycle. 
QUOTE: The National Renewable Energy Lab (NREL) cites a roundtrip efficiency of 85% in its 2024 Annual Technology Baseline.
AFTER: 9 • Batteries ramp quickly - Unlike thermal generators, which require time to start up and adjust output, batteries are always online and can adjust their charging and discharging rate almost instantly. This flexibility makes them well suited to provide fast-responding ancillary services such as reg…

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

## Statements to check

- **Definition #1** (cites e15, e1): This scenario is about how a battery owner chooses between energy and ancillary services, and how to manage state of charge, now that RTC+B (first Operating Day 12/5/2025) has SCED track each ESR's SOC so that its energy and AS awards can actually be sustained. [e15][e1]
- **How it works #1** (cites e1, e12, e3, e18) FLAG number-not-in-quote: 2025: The physical side moved into SCED. SCED now does SOC accounting and will not breach an ESR's telemetered minimum and maximum SOC. [e1] Awards are limited by qualification, telemetry, SOC, ramp rates and AS duration requirements, and one SCED run can award several AS types plus energy to the same ESR. Before RTC+B, the QSE had to hold back enough SOC itself. [e12] The real-time duration requirements listed in the IMM's 2025 report are 5 minutes for energy, 30 minutes for RegUp and RRS, 1 hour for ECRS and 4 hours for NSRS. [e3] The ECRS requirement fell from two hours to one under NPRR 1282. [e18]
- **How it works #2** (cites e2, e5, e4): The financial side is still yours. The DAM does not consider SOC when it clears energy and AS, so a QSE can oversell an ESR day-ahead. [e2] Day-ahead energy and AS awards are financial positions, and imbalances settle at real-time prices. [e5] Because RTC lets AS providers sell straight into real time, the IMM expected ESR AS offer prices in the DAM to increase to reflect higher risk and lower benefit. [e4]
- **How it works #3** (cites e9, e14, e13): Offers still have to manage time. SCED optimizes one five-minute interval at a time, so ESR owners must offer strategically to save SOC for higher-value intervals. [e9] Each ESR submits a single bid/offer curve that must be monotonically nondecreasing from maximum charging MW to maximum discharging MW. [e14] Performance is checked more tightly: Set Point Deviation tolerances for ESRs are 3% or 3 MW. [e13]
- **Key facts #1** (cites e15): - RTC+B first Operating Day: 12/5/2025. [e15]
- **Key facts #2** (cites e3) FLAG number-not-in-quote: 2025: - Real-time duration requirements (as listed in the IMM's 2025 report): energy 5 minutes, RegUp 30 minutes, RRS 30 minutes, ECRS 1 hour, NSRS 4 hours. [e3]
- **Key facts #3** (cites e6): - ESR revenue per unit of capacity fell 37% in 2025 as AS revenue fell by the same amount. [e6]
- **Key facts #4** (cites e16) FLAG number-not-in-quote: 2025: - In 2025 ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
- **Key facts #5** (cites e10): - 18% of ESR offers were at the SWCAP in 2025, down from 32% in 2024, partly to protect SOC. [e10]
- **Key facts #6** (cites e11, e25): - The Real-Time SWCAP is $2,000/MWh after RTC+B (per ERCOT; the PUCT rule text still states a $5,000 HCAP), and ERCOT reports that the share of ESR capacity offered within $100/MWh of the cap was slightly higher in summer 2026 than in the previous two summers. [e11][e25]
- **Scenarios #2** (cites e8, e7): - Start with where the money is. AS prices fell across all products in 2025, partly because of ESR growth, and ESR revenue has shifted toward energy arbitrage. [e8][e7]
- **Scenarios #3** (cites e20): - Charge when solar pushes midday prices low or negative; discharge into the evening ramp. [e20]
- **Scenarios #4** (cites e17) FLAG number-not-in-quote: 2026: - Plan for the evening net peak. In summer 2026 ESR SOC exhaustion in the evenings was a pattern throughout the summer, so SOC is scarce in the late evening. [e17]
- **Scenarios #5** (cites e1, e12): - Let SCED handle feasibility in real time: it will only award energy and AS that your SOC can sustain for each product's duration. [e1][e12]
- **Scenarios #6** (cites e3) FLAG number-not-in-quote: 100 MW, 400 MW, 200 MW: - Match products to duration. At 100 MW, a 1-hour ECRS duration needs about 100 MWh, while a 4-hour NSRS duration would need about 400 MWh, more than the 200 MWh battery holds. [e3]
- **Scenarios #7** (cites e2, e5): - Be careful day-ahead. The DAM ignores SOC, so selling more than you can deliver leaves you buying back at real-time prices. [e2][e5]
- **Scenarios #8** (cites e4): - Consider skipping DAM AS sales. RTC lets AS providers sell AS directly into real time, and the IMM expected ESR day-ahead AS offer prices to increase to reflect the higher risk and lower benefit of selling AS there. [e4]
- **Scenarios #9** (cites e9, e11): - Shape the offer curve. SCED optimizes only one five-minute interval at a time, so price discharge high enough to keep energy for the peak; remember the Real-Time SWCAP is now $2,000/MWh. [e9][e11]
- **Scenarios #10** (cites e19, e23): - Keep the COP SOC accurate. RUC uses it to limit what each ESR can do, and the IMM reports aggregate COP SOC overestimated by about 874 MWh on average, which has been suggested as one factor in the jump in RUC commitments from 2024 to 2025. [e19][e23]
- **Scenarios #11** (cites e22) FLAG number-not-in-quote: 200 MW, $5, 170 MW, $120, $20,400, $1,000, $19,400: - Suppose (illustrative): you charge 200 MWh at $5/MWh and, using the 85% round-trip efficiency the IMM cites from NREL, discharge about 170 MWh at $120/MWh. [e22] The spread earns about $20,400 minus $1,000 of charging cost, roughly $19,400 for the day, compared with whatever AS would have paid for the same capacity.
- **Questions #2** (cites e1, e12): SCED now tracks SOC and sizes awards so they can be sustained, instead of the QSE having to hold back SOC for its AS responsibility. [e1][e12]
- **Questions #4** (cites e10, e11): To protect SOC for later intervals and AS obligations. The IMM ties SWCAP-priced offers partly to SOC management, and ERCOT links the slight rise in the share of capacity offered near the cap in summer 2026 largely to the lower $2,000/MWh cap. [e10][e11]
- **Questions #6** (cites e21, e19): No. ESRs are not seen as off, so they are not available to be RUCed. [e21] RUC instead uses the hour-beginning SOC the QSE reports in its COP to limit what each ESR can do. [e19]
- **Questions #8** (cites e6, e7): Revenue per unit of capacity fell 37% in 2025 as AS revenue fell, and ESRs are moving toward arbitrage. [e6][e7]
- **Common confusion #1** (cites e1, e9, e2): (Guidance) RTC+B does not make SOC management disappear. SCED stops infeasible awards in each interval, but it does not plan across intervals, so saving energy for later is still the owner's job. [e1][e9] Also, the DAM still ignores SOC. [e2]
- **Link to rtc-b** (cites e15, e12): used-in RTC+B (Real-Time Co-optimization + Batteries): RTC+B's first Operating Day was 12/5/2025, and SCED now limits ESR awards by SOC, ramp rates and duration requirements. [e15][e12]
- **Link to energy-storage-resource** (cites e1): used-in Energy Storage Resource (ESR): SCED now tracks each ESR's state of charge inside the optimization. [e1]
- **Link to battery-revenue-stack** (cites e7): related Battery Revenue Stack: ESR revenue has shifted from AS toward energy arbitrage. [e7]
- **Link to ancillary-services** (cites e16) FLAG number-not-in-quote: 2025: related Ancillary Services (AS): In 2025 ESRs provided on average 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
- **Link to asdc** (cites e24): affects ASDC (Ancillary Service Demand Curves): Under RTC, sloped ASDCs define shortage pricing in the day-ahead and real-time markets. [e24]
- **Link to dam** (cites e2): related Day-Ahead Market (DAM): The DAM does not model SOC, so an ESR can oversell its capability there. [e2]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): ERCOT says the share of ESR capacity offered within $100/MWh of the SWCAP rose slightly in summer 2026, largely due to the lower $2,000/MWh Real-Time SWCAP. [e11]
- **Link to net-load** (cites e17) FLAG number-not-in-quote: 2026: affects Net Load: Evening net peaks drained ESR state of charge throughout summer 2026. [e17]
- **Link to ruc** (cites e19, e21): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses the SOC that QSEs report in their COPs, and ESRs are not seen as OFF and so are not available to be RUCed. [e19][e21]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) After RTC+B, ERCOT's dispatch makes sure a battery's awards fit its state of charge, so my job is the economics: decide day by day how much energy to save for the evening peak and how much capacity to sell as reserves. I avoid overselling in the day-ahead market, because it ignores state of charge and I would have to buy back any shortfall at real-time prices.

