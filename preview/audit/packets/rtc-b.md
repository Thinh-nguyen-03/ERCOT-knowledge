# Audit packet: RTC+B (Real-Time Co-optimization + Batteries) (rtc-b)

kind rule · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization, introduction (p. A-2) · text copy line 9344

BEFORE: …me Co-Optimization APPENDIX 2025 State of the Market Report | A-1 / / Appendix: Real-Time Co-Optimization REAL-TIME CO-OPTIMIZATION Wholesale electricity markets rely on a set of optimization models that schedule generation to serve load at the lowest cost while respecting transmission constraints. 
QUOTE: Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market. Ancillary service awards from the day-ahead market represented physical obligations to provide reserves in real time, and the market withheld these reserves from the capacity available for real-time energy. With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services.
AFTER:  Fundamentally, real-time co-optimization produces more economically efficient awards for energy and ancillary services and satisfies the grid's reliability needs more effectively than the day-ahead market alone. The day-ahead market relies on expectations of real-time grid conditions, which are inh…

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e3 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slide 14 · text copy line 363

BEFORE: … Gen 1 plus the $10/MWh of additional Ancillary Service cost) • Ancillary Service Price: $10/MWh → $20/MWh Ancillary Service Offer = $10/MWh Ancillary Service Capacity Ancillary Service Capacity Energy Offer = $30/MWh Energy Offer = $50/MWh Gen 1 ERCOT Public Ancillary Service Offer = $20/MWh Gen 2 
QUOTE: Instead of using the ORDC, under RTC, scarcity pricing and the value of reserves is set by individual ASDCs
AFTER:  $/MWh Insufficient remaining capacity or offers $/MWh Sufficient remaining capacity and offers MW Demand Offer MW Demand Offer Value of the Ancillary Services ERCOT Public 14 Price ($/MWh) Price ($/MWh) ASDCs will be based on the shape and pricing outcomes of the current ORDC mechanism Available Re…

### e4 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slides 12-13, LMP example · text copy line 332

BEFORE: …Wh Energy Offer = $50/MWh Gen 1 ERCOT Public Gen 2 Unlike today's market, the cost of Ancillary Services is factored directly into LMPs Example: With RTC, Ancillary Services can be reallocated to access cheaper energy from Gen 1. However, this has the effect of increasing Ancillary Services cost. • 
QUOTE: This means the LMP goes to $40/MWh ($30/MWh for the energy from Gen 1 plus the $10/MWh of additional Ancillary Service cost)
AFTER:  • Ancillary Service Price: $10/MWh → $20/MWh Ancillary Service Offer = $10/MWh Ancillary Service Capacity Ancillary Service Capacity Energy Offer = $30/MWh Energy Offer = $50/MWh Gen 1 ERCOT Public Ancillary Service Offer = $20/MWh Gen 2 Instead of using the ORDC, under RTC, scarcity pricing and th…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (p. iv) · text copy line 811

BEFORE: … that ERCOT adjust the AS methodology to reflect a reasonable characterization of the operational risks these products are meant to manage. Forward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. 
QUOTE: With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves.
AFTER:  These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. Some of this low participa…

### e6 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slide 21 · text copy line 569

BEFORE: …DAM) fundamentally stays the same with the implementation of RTC Energy Offers & Bids Energy Awards Point-to-Point (PTP) Obligation Bids DAM Ancillary Service Offers* PTP Obligation Awards Ancillary Service Awards ASDCs * With RTC, "virtual" Ancillary Service Offers will be allowed. ERCOT Public 20 
QUOTE: The current Supplemental Ancillary Services Market (SASM) process will be eliminated with the implementation of RTC
AFTER:  SASM allows ERCOT to fill Ancillary Service gaps that appear after completion of the DAM 1. Failure to provide SASM Ancillary Service Awards 2. Infeasible Ancillary Service capacity 3. More Ancillary Service capacity needed 4. Insufficient Ancillary Service offers in the DAM Under RTC, a co-optimiz…

### e7 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2) · text copy line 633 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …2) 1. EB/OCs for the ESR and the Ancillary Service offers are input data to SCED process. EB/OCs can be updated anytime. SCED uses the most recent EB/OC that is available in the database and the telemetered physical capability of the resource in determining awards (along with other information). 2. 
QUOTE: SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements.
AFTER:  SCED will not violate the telemetered minimum and maximum SOC values for ESRs. 3. The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is differ…

### e8 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Slide 4, RTC+B Market Trial Progression, footnote · text copy line 160

BEFORE: …ED/LFC (QSE RTC offers and telemetry to support closed-loop frequency control test 2-3 tests of 2-4 hour durations) #6 Day-Ahead Market (Non-binding DAM using QSE offers for at least 2 tests) Transition to Go-Live Upon completion of testing, confirmation of ERCOT and market readiness for Go-Live. * 
QUOTE: Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration.
AFTER:  4 Item 10 PUBLIC Key activities leading up to Go-Live ERCOT successfully conducted the second/final RTC+B Production Test on Oct 30, 2025 from 10:35am-12:35pm to manage the Real-Time Market and Load Frequency Control systems: - Frequency control was improved, QSE performance improved, and no new is…

### e9 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Slide 7, System Operations Summary (first 48-hours) · text copy line 208

BEFORE: …idation Tools (~$1.00/MWh) and defect fixed next day Some other issues identified after go-live and planning for additional releases ahead of Dec 19, 2025 for subset of key issues Successfully coordinated cutover internally and externally. 6 Item 10 PUBLIC System Operations Summary (first 48-hours) 
QUOTE: SCED was able to award energy and procure Ancillary Services at or above plan level during all intervals over the first 48 hours post deployment. Minimum PRC Total was 7,272 MW on 12/6/25 around 7:40 am.
AFTER:  Further, Load Frequency Control (LFC) was able to control Frequency within NERC requirements. Hourly Average CPS1 score during this periods was 184. There were 2 unit trips during the last 48 hours, the grid was able to arrest frequency and restore under 15 minutes. On 12/6/25 at 16:43, the availab…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization, introduction (p. A-2) · text copy line 9366

BEFORE: …s section summarizes our initial observations of market performance since RTC was implemented. Because ERCOT implemented RTC near the end of 2025, this analysis includes data from December 5, 2025, through February 2026 to provide a richer set of information for identifying trends and observations. 
QUOTE: Our summary of RTC outcomes thus far is that it is operating largely as expected without major dysfunctions. New efficiencies are evident in the frequency of AS awards shifting among resources within an operating hour, the real-time market's ability to go short on AS during shortage conditions, and the reduction in out-of-market commitments through RUC. Despite these apparent improvements, we have observed issues that need to be resolved, particularly in the formulation of the ASDCs and duration constraints for AS, NSRS in particular.
AFTER:  A. Real-Time AS Offers For the real-time market dispatch to produce energy and ancillary service awards that respect the economics of different reserve suppliers across the grid, resources have to submit real-time offers for AS. Figure A1 shows the average AS offers in the real-time market, aggrega…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, B. Convergence between DAM and RT (p. A-5) · text copy line 9544

BEFORE: …y days of RTC. Two events account for a disproportionate share of this premium. Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products. 
QUOTE: Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices.
AFTER:  We expect this premium to diminish over the year and to be significantly lower in the 2026 annual average. C. AS Position Switching during sunrise/sunset One benefit of RTC is that the time resolution of the real-time market allows intra-hour variation in AS awards in response to changes in system …

### e12 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, Energy Storage Capacity Offered in Real-Time Market, note 1 · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, F. Impact on RUC (p. A-10) · text copy line 9731

BEFORE: …te of the Market Report | A-9 / / Appendix: Real-Time Co-Optimization • For December 2025, approximately 54% of RUC commitments occurred in the four days before go-live. • From December 5, 2025, through February 2026, 42% of all RUC commitments occurred during Winter Storm Fern, January 21 to 27. • 
QUOTE: Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live.
AFTER:  G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts f…

### e15 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, key takeaway · text copy line 1349

BEFORE: …te: 1. The data is based on the 20:00 SCED interval snapshot. SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. 2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. 
QUOTE: The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B.
AFTER:  21 PUBLIC ESR contribution to Ancillary Services continues to increase ESR AS Contribution in DAM 100 90 80 70 60 % 50 40 30 20 10 0 ESR AS Contribution in RTM 100 80 % 60 40 20 0 Jun Jul Aug 2024 REGUP Jun Jul Aug 2025 REGDN RRS Jun Jul 2026 ECRS Aug 2026-Jun REGUP REGDN 2026-Jul RRS 2026-Aug ECRS…

### e14 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 20, RUC Effective Resource-Hours · text copy line 1280

BEFORE: … Congestion Jul 2026 Aug Opt-Out Congestion "Effective Resource-hours" excludes any period during a RUC-instructed hour when the committed Resource was starting up, shutting down, off-line, or otherwise not available for dispatch by SCED. * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities.
AFTER:  20 Energy Storage Capacity Offered in Real-Time Market Continues to Increase 25000 18% 16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacit…

## Statements to check

- **Definition #1** (cites e1, e2): RTC+B is the ERCOT market upgrade under which the real-time dispatch co-optimizes energy and ancillary services, instead of only the day-ahead market doing so as it did before December 5, 2025. [e1] SCED now manages energy, Ancillary Services, power balance and congestion together, setting Base Points, AS awards, LMPs and Real-Time MCPCs about every five minutes. [e2]
- **How it works #1** (cites e1): Before RTC, day-ahead AS awards were physical obligations, and the real-time market held that reserved capacity back from energy dispatch. Under RTC, the real-time dispatch co-optimizes energy and ancillary services, making economic trade-offs between them. [e1]
- **How it works #2** (cites e3, e4): Scarcity pricing moved inside the optimization. Under RTC the ORDC is no longer used, and the value of reserves comes from individual Ancillary Service Demand Curves (ASDCs). [e3] ERCOT's education deck says the cost of AS is factored directly into LMPs. In its example, reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP becomes $40/MWh: $30/MWh of energy plus $10/MWh of additional AS cost. [e4]
- **How it works #3** (cites e5, e6): The day-ahead market still clears energy and AS, but day-ahead AS awards are now financial positions, and ERCOT settles imbalances on them in real time. Virtual AS positions were added as hedges on the real-time price of reserves. [e5] ERCOT's RTC overview said the Supplemental Ancillary Services Market (SASM) would be eliminated with the implementation of RTC. [e6]
- **How it works #4** (cites e7): The "+B" part changes how batteries are handled. SCED tracks each ESR's State of Charge (SOC) so that its energy and AS awards can be sustained for their duration requirements. [e7]
- **ERCOT context #1** (cites e8, e9): RTC+B went live with 12/5/2025 as the first Operating Day, after the software migration on 12/4/2025. [e8] Over the first 48 hours ERCOT reported that SCED awarded energy and procured AS at or above plan in every interval, with minimum PRC of 7,272 MW on 12/6/25. [e9]
- **ERCOT context #2** (cites e10): The IMM's review of RTC outcomes so far found RTC "operating largely as expected". It saw gains in AS awards moving between resources within the hour, the market's ability to go short on AS, and fewer RUC commitments. It also flagged problems with how the ASDCs are built and with AS duration constraints, especially for Non-Spin (NSRS). [e10]
- **ERCOT context #3** (cites e13, e14): RUC results changed sharply from one period to the next. The IMM found RUC commitments fell 80% after go-live compared with the same period a year before (December 5, 2024 through February 2025). [e13] In summer 2026, however, ERCOT reported RUC activity well above the two previous summers, mostly to make sure enough AS quantity was available. [e14]
- **Key facts #1** (cites e8): - First Operating Day: 12/5/2025; software migration on 12/4/2025. [e8]
- **Key facts #2** (cites e2): - Real-time dispatch runs about every five minutes and clears energy and AS together. [e2]
- **Key facts #3** (cites e11) FLAG number-not-in-quote: 2025: - Virtual AS offers were not introduced to the day-ahead market until December 6; the IMM says physical-resource offers drove the elevated day-ahead prices on December 5, 2025. [e11]
- **Key facts #4** (cites e12, e15): - ERCOT noted that the SWCAP was reduced from $5,000/MWh to $2,000/MWh after RTC go-live on 12/5/2025, and calls the $2,000 the lower Real-Time SWCAP introduced with RTC+B. [e12][e15]
- **Key facts #5** (cites e13): - RUC commitments fell 80% after go-live compared with the same period a year before (December 5, 2024 through February 2025 baseline). [e13]
- **Key facts #6** (cites e9): - Minimum PRC in the first 48 hours was 7,272 MW (12/6/25). [e9]
- **Timeline #1** (cites e8): - 12/4/2025: RTC+B software migration. 12/5/2025: first Operating Day. [e8]
- **Timeline #2** (cites e11) FLAG number-not-in-quote: 2025: - December 6, 2025: virtual AS offers first allowed in the day-ahead market. [e11]
- **Timeline #3** (cites e10, e13): - After go-live: IMM finds RTC operating largely as expected; RUC commitments down 80% against the year-earlier period. [e10][e13]
- **Timeline #4** (cites e14): - Summer 2026: ERCOT reports RUC activity higher than the two previous summers, mostly for AS needs. [e14]
- **Common confusion #1** (cites e5, e7): (Guidance) RTC did not make the day-ahead market go away. The DAM still clears AS, but those awards are now financial and settle against real-time AS prices. [e5] Also, "RTC" and "+B" are two pieces of one project: co-optimization is the pricing and dispatch change, and the battery part is SOC accounting for ESRs inside SCED. [e7]
- **Questions #2** (cites e1): Co-optimization means scheduling energy and reserves at the same time and trading one off against the other. Before December 5, 2025, ERCOT did this only in the day-ahead market. Since then the real-time dispatch does it too. [e1]
- **Questions #4** (cites e4): Under RTC, ERCOT's education deck says the cost of AS is factored directly into LMPs. In its example, reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP goes to $40/MWh: $30/MWh of energy plus $10/MWh of additional AS cost. [e4]
- **Questions #6** (cites e5): It is a financial position. ERCOT settles imbalances on those positions in real time. [e5]
- **Questions #8** (cites e13, e14): It depends on which period you look at. The IMM found RUC commitments fell 80% in the first winter after go-live. [e13] ERCOT's summer 2026 review found RUC activity higher than in the two previous summers, mostly to secure AS quantities. [e14]
- **Scenarios #2** (cites e3, e4): - No. Under RTC the ORDC is no longer used; instead scarcity pricing and the value of reserves are set by the ASDCs, and the cost of AS is factored into LMPs. [e3][e4]
- **Scenarios #3** (cites e2): - Look at the real-time AS prices and any AS shortfalls in that interval to see what drove the spike. [e2]
- **Link to asdc** (cites e3): composed-of ASDC (Ancillary Service Demand Curves): Under RTC, scarcity pricing and the value of reserves come from individual Ancillary Service Demand Curves inside the dispatch. [e3]
- **Link to ordc** (cites e3): replaced ORDC (Operating Reserve Demand Curve): Under RTC, scarcity pricing comes from ASDCs instead of the ORDC. [e3]
- **Link to sced** (cites e2): affects SCED (Security-Constrained Economic Dispatch): SCED now awards energy and Ancillary Services together about every five minutes. [e2]
- **Link to energy-storage-resource** (cites e7): affects Energy Storage Resource (ESR): The "+B" part made SCED track each ESR's State of Charge so that energy and AS awards are feasible. [e7]
- **Link to dam** (cites e5): affects Day-Ahead Market (DAM): Day-ahead AS awards became financial positions with imbalances settled in real time, and virtual AS positions were added. [e5]
- **Link to ruc** (cites e13, e14): affects RUC (Reliability Unit Commitment: DRUC/HRUC): RUC volumes moved sharply after go-live, down 80% in the first winter and then higher in summer 2026. [e13][e14]
- **Link to sc-battery-strategy** (cites e7): related Scenario: Bidding a Battery After RTC+B: SCED now accounts for each ESR's State of Charge when awarding energy and AS, which bears on battery offer strategy. [e7]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) Since RTC+B went live, ERCOT's real-time market picks who provides energy and who holds reserves every five minutes, rather than locking reserves in the day before. Scarcity now shows up as AS demand-curve prices inside the dispatch rather than as a separate ORDC adder on top of energy prices.

