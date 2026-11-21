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

### e4 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slides 12-13, LMP example (ERCOT education deck, July 2025, before go-live) · text copy line 332

BEFORE: …Wh Energy Offer = $50/MWh Gen 1 ERCOT Public Gen 2 Unlike today's market, the cost of Ancillary Services is factored directly into LMPs Example: With RTC, Ancillary Services can be reallocated to access cheaper energy from Gen 1. However, this has the effect of increasing Ancillary Services cost. • 
QUOTE: This means the LMP goes to $40/MWh ($30/MWh for the energy from Gen 1 plus the $10/MWh of additional Ancillary Service cost)
AFTER:  • Ancillary Service Price: $10/MWh → $20/MWh Ancillary Service Offer = $10/MWh Ancillary Service Capacity Ancillary Service Capacity Energy Offer = $30/MWh Energy Offer = $50/MWh Gen 1 ERCOT Public Ancillary Service Offer = $20/MWh Gen 2 Instead of using the ORDC, under RTC, scarcity pricing and th…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (p. iv) · text copy line 811

BEFORE: … that ERCOT adjust the AS methodology to reflect a reasonable characterization of the operational risks these products are meant to manage. Forward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. 
QUOTE: With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves.
AFTER:  These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. Some of this low participa…

### e6 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slide 21 (ERCOT education deck, July 2025, before go-live) · text copy line 569

BEFORE: …DAM) fundamentally stays the same with the implementation of RTC Energy Offers & Bids Energy Awards Point-to-Point (PTP) Obligation Bids DAM Ancillary Service Offers* PTP Obligation Awards Ancillary Service Awards ASDCs * With RTC, "virtual" Ancillary Service Offers will be allowed. ERCOT Public 20 
QUOTE: The current Supplemental Ancillary Services Market (SASM) process will be eliminated with the implementation of RTC
AFTER:  SASM allows ERCOT to fill Ancillary Service gaps that appear after completion of the DAM 1. Failure to provide SASM Ancillary Service Awards 2. Infeasible Ancillary Service capacity 3. More Ancillary Service capacity needed 4. Insufficient Ancillary Service offers in the DAM Under RTC, a co-optimiz…

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

### e14 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 20, RUC Effective Resource-Hours · text copy line 1280

BEFORE: … Congestion Jul 2026 Aug Opt-Out Congestion "Effective Resource-hours" excludes any period during a RUC-instructed hour when the committed Resource was starting up, shutting down, off-line, or otherwise not available for dispatch by SCED. * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities.
AFTER:  20 Energy Storage Capacity Offered in Real-Time Market Continues to Increase 25000 18% 16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacit…

### e15 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, key takeaway · text copy line 1349

BEFORE: …te: 1. The data is based on the 20:00 SCED interval snapshot. SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. 2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. 
QUOTE: The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B.
AFTER:  21 PUBLIC ESR contribution to Ancillary Services continues to increase ESR AS Contribution in DAM 100 90 80 70 60 % 50 40 30 20 10 0 ESR AS Contribution in RTM 100 80 % 60 40 20 0 Jun Jul Aug 2024 REGUP Jun Jul Aug 2025 REGDN RRS Jun Jul 2026 ECRS Aug 2026-Jun REGUP REGDN 2026-Jul RRS 2026-Aug ECRS…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization, G. RDPA · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
AFTER:  The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. The RDPA process now produces separate price adders for energy and each AS product. The real-time market…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1) · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …s and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards (1) 
QUOTE: Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …o power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. 
QUOTE: In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR's Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) limits.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.7.2.1, Real-Time Ancillary Service Imbalance Payment or Charge, paragraph (1)(a) · text copy line 9969 · heading above: 6.7.2.1 Real-Time Ancillary Service Imbalance Payment or Charge

BEFORE: …--------------------------------------------------------------------------------------+ 6.7.2 Real-Time Ancillary Service Charges and Payments 6.7.2.1 Real-Time Ancillary Service Imbalance Payment or Charge (1) The payments or charges to each QSE for Real-Time Ancillary Services are as follows: (a) 
QUOTE: Ancillary Service Imbalance payment or charges based on Real-Time Ancillary Service prices with an imbalance quantity determined by: (i) The Real-Time Ancillary Service awarded; minus (ii) The amount of Day-Ahead Market (DAM) Ancillary Service awards cleared in the DAM; minus (iii) The amount of DAM Self Arranged Ancillary Services; plus (iv) The amount of Ancillary Service Trades where the QSE is the buyer; minus (v) The amount of Ancillary Service Trades where the QSE is the seller.
AFTER:  (b) Charges for Ancillary Service Only Offers purchased in the DAM. (c) Charges for any Ancillary Service trade overage per paragraph (7) of Section 4.4.7.1, Self-Arranged Ancillary Service Quantities. 6.7.2.2 Regulation Up Service Payments and Charges (1) Reg-Up Imbalance Payment or Charge: RTRUIM…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, Determination of Ancillary Service Demand Curves for the DAM and RTM, paragraphs (4)-(5) (current text, not the NPRR1309 boxes) · text copy line 2296 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …Day-Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) The DAM shall use the same ASDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. 
QUOTE: (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (6) · text copy line 2307 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …==================================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (6) 
QUOTE: ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through August 31, 2025 as follows:
AFTER:  (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below: (0.5*(1 - pnorm(RTOLCAP - 3000, 0.5 * μ, 0.707 *…

### e22 · `imm-quarterly-fy2026-q3` · tier 2 · IMM Quarterly Report, FY2025-26 Q3 (July 2026)
locator: IMM Quarterly Report FY2025-2026 Q3 (reported 07/28/2026), page 4, ORDC Reserve Adders · text copy line 597

BEFORE: …_________________________________________________________________________________________________________________________________________________________________________________________________________________ Daily ORDC Reserve/Reliability Adders Average Values in FY2025-2026Q3 ORDC Reserve Adders 
QUOTE: With implementation of RTC, there is no longer an explicit shortage price adder calculated or produced by the market software. The energy price natively includes any shortage value produced by the ASDC via co-optimization.
AFTER:  As such, there is no information available to produce this chart going forward. Reliability Adders Month MAR APR MAY 16 17 18 $30 $27 $24 Adder ($/MWh) $21 $18 $15 $12 $9 $6 $3 $0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 19 20 21 22 23 24 25 26 27 28 29 30 31 Day of Month ERCOT IMM | Potomac Economics, …

### e23 · `ercot-nprr1010-board-report` · tier 1 · NPRR1010 Board Report (Real-Time Co-optimization, Section 6 Adjustment Period and Real-Time Operations) (Board approved 2020-12-08)
locator: NPRR1010 Board Report (RTC – NP 6: Adjustment Period and Real-Time Operations), Board Decision · text copy line 262

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e24 · `ercot-nprr1014-board-report` · tier 1 · NPRR1014 Board Report (Energy Storage Resource Single Model) (Board approved 2020-12-08)
locator: NPRR1014 Board Report (BESTF-4 Energy Storage Resource Single Model), Revision Description · text copy line 146

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------+ | Revision Description | | 
QUOTE: This Nodal Protocol Revision Request (NPRR) enables the integration of Energy Storage Resources (ESRs) into the ERCOT core systems as a single-model Resource, replacing the existing "combination model" paradigm in which ESRs are treated as two Resources: a Generation Resource and a Controllable Load Resource.
AFTER:  This NPRR will be developed concurrently and implemented simultaneously with the NPRRs associated with Real-Time Co-optimization of energy and Ancillary Services (RTC) and with the upgrade to the ERCOT Energy Management System (EMS). | | | | | | | | | | The Key Topics and Concepts (KTCs) that form …

### e25 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: 2021 State of the Market Report, Executive Summary, market reform discussion · text copy line 1148

BEFORE: …mportant improvement to the ERCOT markets over the long term will be the implementation of changes to the real-time market to allow it to jointly optimize the scheduling of resources to provide energy and ancillary services in each dispatch interval (also termed real-time co-optimization or "RTC"). 
QUOTE: This Commission-approved project was delayed in 2021 and is now on hold until at least mid-2023 due to resource constraints caused by the market reform efforts described below.
AFTER: 20 Implementation of RTC will significantly improve the real-time coordination of ERCOT's generation and load resources, 20 ERCOT RTC Update to TAC, January 31, 2022. 2021 State of the Market Report | xv / / Executive Summary reduce overall production costs, and improve shortage pricing. These impro…

### e26 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report (RTC+B Three Parameters Policy Issues), Revision Description · text copy line 26

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | Revision Description | | 
QUOTE: This Nodal Protocol Revision Request (NPRR) determines and codifies a group of policy changes that were deferred from the original RTC-related Protocols developed in 2020.
AFTER:  | | | | | | | | | | The three policy concepts below have been developed in coordination with the Real-Time Co-optimization plus Batteries Task Force (RTCBTF): | | | | | | | | | | - Parameters for Ancillary Service proxy offers floors; | | | | | | | | | | - Scaling factor values for ramping; and | |…

### e27 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report, PUCT Decision · text copy line 90

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | PUCT Decision | | 
QUOTE: On 5/15/25, the PUCT approved NPRR1269 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report (Ancillary Service Duration under Real-Time Co-Optimization), Revision Description · text copy line 38

BEFORE: …--------------------------------------------------------+ | Revision Description | | This Nodal Protocol Revision Request (NPRR) makes changes to the duration requirements for the following Ancillary Services in preparation for Real-Time Co-optimization plus Batteries (RTC+B): | | | | | | | | | | - 
QUOTE: Updates duration requirements for Regulation Service and Responsive Reserve (RRS) to thirty minutes; and
AFTER:  | | | | | | | | | | - Updates duration requirement for ERCOT Contingency Reserve Service (ECRS) to one hour. | | | | | | | | | | This NPRR also updates the requirement for Reliability Unit Commitment (RUC) studies to use a one-hour duration for all Ancillary Service types, excluding Fast Frequency …

### e29 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, Revision Description · text copy line 40

BEFORE: …) makes changes to the duration requirements for the following Ancillary Services in preparation for Real-Time Co-optimization plus Batteries (RTC+B): | | | | | | | | | | - Updates duration requirements for Regulation Service and Responsive Reserve (RRS) to thirty minutes; and | | | | | | | | | | - 
QUOTE: Updates duration requirement for ERCOT Contingency Reserve Service (ECRS) to one hour.
AFTER:  | | | | | | | | | | This NPRR also updates the requirement for Reliability Unit Commitment (RUC) studies to use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR). | | | | | | | | | | ERCOT invites review of this NPRR from the RTC+B Task Force (RTCBTF). The…

### e30 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, PUCT Decision · text copy line 94

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | PUCT Decision | | 
QUOTE: On 7/31/25, the PUCT approved NPRR1282 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A1: Duration Requirements for Energy and AS in RTM, page 161 (OCR) · ocr copy line 6885, OCR page 161

BEFORE: …ket. One feature is that SCED now explicitly accounts for ESR SOC in its energy and AS awards. Together with the duration requirements for energy and AS shown in Table A1, this SOC accounting limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM 
QUOTE: Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours
AFTER:  These duration constraints introduce some imbalance risk for ESRs that sell reserves in the day- ahead market. At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to in…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages, Figure A4 discussion (p. A-8) · text copy line 9666

BEFORE: …s currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4. 94 That is, everything except for Reg-Down 2025 State of the Market Report | A-7 / / Appendix: Real-Time Co-Optimization Figure A4: Illustration of Extended ASDC for NSRS 
QUOTE: From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average.
AFTER:  Thus, this extension of the ASDC for NSRS effectively increases demand for NSRS in the real-time market dispatch model. As discussed in the AS Methodology section, the NSRS plan is already vastly oversized, yet the ERCOT real-time market is designed to procure even more. In our updated Recommendati…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-9) · text copy line 9697

BEFORE: …pendix: Real-Time Co-Optimization time market and can be seen by comparing the distribution of clearing prices for NSRS to the clearing prices for the other AS products, as shown in Figure A5. Figure A5: Distribution of NSRS MCPC Relative to Other Up-Reserves December 5, 2025, through February 2026 
QUOTE: Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1.
AFTER:  The average ratio of clearing prices between NSRS and Reg-Up is lower because Reg-Up offers are generally priced higher than NSRS offers, as shown in Figure A3. We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reli…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-8) · text copy line 9670

BEFORE: … the NSRS plan, on average. Thus, this extension of the ASDC for NSRS effectively increases demand for NSRS in the real-time market dispatch model. As discussed in the AS Methodology section, the NSRS plan is already vastly oversized, yet the ERCOT real-time market is designed to procure even more. 
QUOTE: In our updated Recommendation 2024-1, we recommend that ERCOT reformulate the ASDCs based on the marginal reliability value of each product. This reformulation would produce ASDCs that scale according to the AS Plan for each product and eliminate the possibility that the real-time market over-procures reserves relative to the AS Plan.
AFTER:  E. NSRS relative Pricing Since RTC go-live, NSRS has consistently been more expensive than ECRS and RRS. This trend is a continuation of the pricing outcomes from the rest of 2025, where NSRS was the most expensive AS product on average for the year. Two factors related to the implementation of RTC…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, C. AS Position Switching during sunrise/sunset (p. A-6) · text copy line 9569

BEFORE: …atest aggregate change in AS awards across resources. Figure A3 shows the distribution of those daily values. 2025 State of the Market Report | A-5 / / Appendix: Real-Time Co-Optimization Figure A3. Distribution of AS Awards Shifting During Sunrise and Sunset December 5, 2025, through February 2026 
QUOTE: These data show that more than 10% of total AS awards commonly shift across resources within a single SCED interval, particularly for faster responding reserves like RegUp and RegDn.
AFTER:  This trend indicates a substantial efficiency gain over the previous market design, in which AS positions were fixed for the hour and could shift only within a given QSE's portfolio of resources. D. AS Shortages A key feature of RTC is that the real-time market can go short on AS in favor of energy…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A3: Frequency, Magnitude, and Pricing of AS Shortages, Dec. 5, 2025 to Feb. 2026 (columns: hours, average MW, average MCPC $/MWh), page 165 (OCR) · ocr copy line 7033, OCR page 165

BEFORE: …st penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern. Table A3: Frequency, Magnitude, and Pricing of AS Shortages December 5, 2025, through February 2026 RTC Ancillary Service Shortages Ancillary # of Average Average MCPC Service Hours MW ($ per MWh) 
QUOTE: ECRS 4.0 214.6 78.0 NSRS 25.9 702.2 22.5 REGDN - - REGUP - - RRS 1.6 35.2 131.6
AFTER:  In fact, rather than going short on AS, ERCOT consistently goes /ong on NSRS. This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,°* when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (A…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A2: Convergence in Energy and AS Prices (labelled 'December 5, 2026, through February 2026' in the report; the period is December 5, 2025 to February 2026), page 163 (OCR) · ocr copy line 6943, OCR page 163

BEFORE: … the Market Report a ===== page 163 (OCR) ===== Appendix: Real-Time Co-Optimization Table A2: Convergence in Energy and AS Prices in the Day-Ahead and Real-Time Markets December 5, 2026, through February 2026 Average Average Average Day-Ahead Real-Time DART Price Price Premium $ per MWh $ per MWh % 
QUOTE: Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420
AFTER:  Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium. Excluding RegDown, elevated day- ahead market prices on Decembe…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, B. Convergence between DAM and RT (p. A-5) · text copy line 9542

BEFORE: …%;<2 D-*E. D,*+) ,7. 0#%;=3>" D,*.7 D,*,E7 !?0: D-*/. D)*., S+) Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium. 
QUOTE: Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products.
AFTER:  Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices. We expect this premium to diminish over the year and to be significantly lower in the 2026 annual average. C. AS Position Switching during sunrise/sunset One be…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, F. Impact on RUC (p. A-10) · text copy line 9726

BEFORE: … co-optimization into RUC has reduced out-of-market commitments. The following statistics indicate RTC's impact on RUC: 2025 State of the Market Report | A-9 / / Appendix: Real-Time Co-Optimization • For December 2025, approximately 54% of RUC commitments occurred in the four days before go-live. • 
QUOTE: From December 5, 2025, through February 2026, 42% of all RUC commitments occurred during Winter Storm Fern, January 21 to 27.
AFTER:  • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. The ORDC price adder, which reflec…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, G. RDPA (p. A-10) · text copy line 9739

BEFORE: … adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. 
QUOTE: The RDPA process now produces separate price adders for energy and each AS product. The real-time market is run in two instances: one based on realized operating conditions and one counterfactual, as if no reliability actions had been taken. The AS RDPA is the difference in MCPCs for each AS product between these two runs.
AFTER:  Figure A6 illustrates AS RDPA outcomes for December 5, 2025, through February 2026. Figure A6: Frequency and Magnitude of RDPA for AS December 5, 2025, through February 2026 2GPH/N2P24RS7UP9:;<= 27>P2GPH/N2P2??P9:;<= 27>P2GPH/N2P24RS7UP9:;<= DCEA! %! DCE"! A! D!E%! #! D!E#! "! D!E!! )GHG ,-HG A-10 …

### e41 · `imm-board-2026-02` · tier 2 · IMM Report to the Board (item 10.1) (2026-02-02)
locator: IMM report to ERCOT Board R&M Committee (Feb. 9-10, 2026), slide 2, Non-Spinning Reserve Pricing in RTC · text copy line 13

BEFORE: …Item 10.1: Independent Market Monitor (IMM) Report Jeff McDonald, Ph.D. VP Potomac Economics and ERCOT IMM Director Board of Directors, Reliability and Markets Committee ERCOT Public February 9-10, 2026 Non-Spinning Reserve Pricing in RTC • 
QUOTE: The RTM clears surplus NSRS yet is producing a shortage price.
AFTER:  • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well). 2 Shortage Prices in Non-Spin when System is Long 3 Notes on RA Throu…

### e42 · `imm-som-tac-2026-07` · tier 2 · IMM State of the Market presentation to TAC (2026-08-06)
locator: IMM overview of the 2025 SOM to TAC (Aug. 13, 2026), slide 3 · text copy line 36

BEFORE: …spite 61% increase in the price of natural gas (YoY) • The implied heat rate (price of electricity divided by the price of gas) decreased by 28% (YoY) • Shortage pricing from the Operating Reserve Demand Curve (ORDC) was $0.02/MWh on average for the year, the lowest since the ORDC was implemented • 
QUOTE: Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal
AFTER:  © 2025 Potomac Economics 3 The all-in price of electricity was up slightly in 2025, mostly due to the price of natural gas Energy w/o Adders Electricity Cost ($ per MWh) $180 ORDC Adder Reliability Adder $160 Ancillary Services $140 Uplift Natural Gas Price $120 $10 $9 $8 $7 $6 $100 $5 $80 $4 $60 $…

### e43 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review (Board, Sept. 14-15, 2026), market outcomes summary slide · text copy line 694 · heading above: 4.5 5

BEFORE: …mes including energy and ancillary service prices as well as peaker net margins continue to reflect increasing solar and storage resources • Summer 2026 energy and ancillary prices declined relative to prior years • Peaker net margins also declined, even with growth in both gross and net peak loads 
QUOTE: Real-time co-optimization helped to lower ancillary service costs and market congestion
AFTER:  Ancillary services were rarely short and most instances shortages occurred in early summer, before the highest demand periods Reliability Unit Commitments were up compared to prior years, shifting from congestion to capacity related procurement 13 Real-Time Hub Prices are lower this summer, contrib…

### e44 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, Congestion Rent slide (August data through 8/15) · text copy line 1219

BEFORE: …line in the Plan from 86 to 66 GWh/day. 18 Congestion Rent fell from summer 2025 to summer 2026 200 180 160 140 $ Millions PUBLIC 120 100 80 60 40 20 0 Jun Jul Aug Jun Jul 2024 Aug 2025 North West South Houston Jun Jul Aug 2026 Cross Zone * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025.
AFTER:  19 RUC Effective Resource-Hours are higher in summer 2026, primarily to ensure sufficient Ancillary Services There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effe…

### e45 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, slide 20, RUC Effective Resource-Hours (August data through 8/15) · text copy line 1227

BEFORE: …26 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025. 19 RUC Effective Resource-Hours are higher in summer 2026, primarily to ensure sufficient Ancillary Services 
QUOTE: There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effective Resource-hours in the summer of 2024.
AFTER:  In summer 2026, 17% of RUC effective Resource-hours were nominally attributed to congestion. In 2025, that number was 100%. Effective Resource-Hours PUBLIC 450 400 350 300 250 200 150 100 50 0 Jun Jul 2024 Non-Opt-Out Capacity Aug Jun Opt-Out Capacity Jul 2025 Aug Jun Non-Opt-Out Congestion Jul 202…

### e46 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, Ancillary Service Shortage Incidence slide · text copy line 1154

BEFORE: …rage Ancillary Service Procurement (incl. Non-Spin above Plan) 100 90 80 70 60 50 40 30 20 10 0 Jun-26 Jul-26 Aug-26 Reg-Up Reg-Down RRS ECRS Non-Spin Plan Non-Spin above Plan Jun 2026 Volume-weighted % of AS Plan GW/h/day PUBLIC Jul 2026 -0.01% Aug 2026 -0.11% -1.52% ECRS Non-Spin Key Takeaways: • 
QUOTE: There were no shortages of Reg-Up, Reg-Down and RRS this summer. Non-Spin and ECRS met the plan in nearly all intervals.
AFTER:  Most Non-Spin shortfalls in June occurred during peak AS Plan requirements in the late evening, with 40% of intervals in HE 22-23 affected. • In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan…

### e47 · `ercot-monthly-ops-2026-10` · tier 2 · ERCOT Monthly Operational Overview, 2026-10 (2026-10)
locator: ERCOT Monthly Operational Overview, October 2026, RUC slide · text copy line 545

BEFORE: …udes any period during a Reliability Unit Commitment hour when the RUC-committed Resource was starting up, shutting down, off-line, or otherwise not available for dispatch by SCED. 16 PUBLIC Like the preceding months, most RUC instructions (99.4%) in October were committed to address capacity needs 
QUOTE: There were 165.6 RUC total effective Resource-hours in October. 164.7 hours (99.4%) were committed to address capacity concerns and 0.9 (0.6%) were committed to alleviate congestion.
AFTER:  17 PUBLIC Thirteen Resources were committed in October, primarily to manage capacity Resource # Effective Resource-hours For Congestion For Capacity Opt-Out Non-Opt-Out Opt-Out Non-Opt-Out 1 25.0 0.0 0.0 1.0 24.0 2 23.8 0.0 0.0 0.0 23.8 3 23.8 0.0 0.0 0.0 23.8 4 15.8 0.0 0.0 0.0 15.8 5 15.7 0.0 0.0…

### e48 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, Non-Spin procurement takeaway · text copy line 1160

BEFORE: …1.52% ECRS Non-Spin Key Takeaways: • There were no shortages of Reg-Up, Reg-Down and RRS this summer. Non-Spin and ECRS met the plan in nearly all intervals. Most Non-Spin shortfalls in June occurred during peak AS Plan requirements in the late evening, with 40% of intervals in HE 22-23 affected. • 
QUOTE: In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, offsetting a decline in the Plan from 86 to 66 GWh/day.
AFTER:  18 Congestion Rent fell from summer 2025 to summer 2026 200 180 160 140 $ Millions PUBLIC 120 100 80 60 40 20 0 Jun Jul Aug Jun Jul 2024 Aug 2025 North West South Houston Jun Jul Aug 2026 Cross Zone * August data for each year goes through 8/15. Key Takeaway: Real-Time Congestion Rent in the summer…

### e49 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Slide 7, System Operations Summary (first 48-hours) · text copy line 213

BEFORE: …72 MW on 12/6/25 around 7:40 am. Further, Load Frequency Control (LFC) was able to control Frequency within NERC requirements. Hourly Average CPS1 score during this periods was 184. There were 2 unit trips during the last 48 hours, the grid was able to arrest frequency and restore under 15 minutes. 
QUOTE: On 12/6/25 at 16:43, the available headroom not carrying reserves was insufficient to meet the 30 minute ahead forecasted Net Load. 1,415 MWs of offline Non-Spin was deployed.
AFTER:  The deployment lasted for 1 hour and 31 minutes. In the 1600 hour wind and solar generations were lower than forecasted, resulting in an offline non-spin deployment. RTC+B System has been able to maintain reliable grid operations by awarding energy and procuring AS. 7 Item 10 PUBLIC Market Operatio…

### e50 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance (p. ii) · text copy line 745

BEFORE: …ad market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT. Now, ancillary service awards can be adjusted in real-time to reflect changes in system conditions. 
QUOTE: As part of the RTC project, ERCOT also implemented the single-model for ESRs
AFTER: , which improves the real-time market's coordination of energy and ii | 2025 State of the Market Report / / Executive Summary reserve awards for ESRs. Both changes should improve market performance and economic efficiency. Since ERCOT implemented RTC, the real-time market has functioned as expected …

### e51 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, F. Impact on RUC (p. A-9) · text copy line 9705

BEFORE: …wn in Figure A3. We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reliability risks it is designed to address and to produce pricing that reflects the relative reliability value of each AS product. F. Impact on RUC 
QUOTE: As part of the RTC project, ERCOT also incorporated co-optimization between energy and AS into the RUC process so it could shift AS awards among resources and produce more efficient commitment solutions.
AFTER:  Although less than three months of data make it impossible to definitively assess RTC's effect on the rate of RUC commitments, initial indications suggest that incorporating co-optimization into RUC has reduced out-of-market commitments. The following statistics indicate RTC's impact on RUC: 2025 S…

### e52 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(d) · text copy line 2266

BEFORE: … the limiting element (or identified operator-entered constraint with operator's comments describing the reason and the Resource-specific impacts for any manual overrides). ERCOT shall provide the summary to Market Participants on the MIS Secure Area and to the Independent Market Monitor (IMM). (d) 
QUOTE: Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL.
AFTER:  All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MC…

### e53 · `pura-39` · tier 1 · Texas Utilities Code (PURA) Chapter 39, Restructuring of Electric Utility Industry
locator: PURA Sec. 39.1594(a)(10) · text copy line 131

BEFORE: …de clearing price is established for the program and does not differentiate payments or credit values based on locational constraints;(9) any market changes implemented as a bridge solution for the program are removed not later than the first anniversary of the date the program was implemented;(10) 
QUOTE: the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented;
AFTER: (11) all elements of the program are initially implemented on a single starting date;(12) the terms of the program and any associated market rules do not assign costs, credit, or collateral for the program in a manner that provides a cost advantage to load-serving entities who own, or whose affiliat…

### e54 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance (p. ii) · text copy line 739

BEFORE: …uctions in which market participants can bid for the right to revenues derived from congestion rent. The real-time market is the most consequential because it coordinates real-time power flows to maintain system reliability and sets expectations for the forward markets. Real-time Market Performance 
QUOTE: The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019.
AFTER:  With RTC, the real-time market simultaneously procures energy and ancillary services. Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported …

### e55 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-9) · text copy line 9700

BEFORE: …s higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1. The average ratio of clearing prices between NSRS and Reg-Up is lower because Reg-Up offers are generally priced higher than NSRS offers, as shown in Figure A3. 
QUOTE: We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reliability risks it is designed to address and to produce pricing that reflects the relative reliability value of each AS product.
AFTER:  F. Impact on RUC As part of the RTC project, ERCOT also incorporated co-optimization between energy and AS into the RUC process so it could shift AS awards among resources and produce more efficient commitment solutions. Although less than three months of data make it impossible to definitively ass…

### e56 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(d) · text copy line 2266

BEFORE: … System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. 
QUOTE: The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL.
AFTER:  ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website. (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding project…

### e58 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, A. Real-Time AS Offers, after Table A1 (p. A-3) · text copy line 9440

BEFORE: …d AS awards. Together with the duration requirements for energy and AS shown in Table A1, this SOC accounting limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM !"#$%&D (%")D*#+ !"#$%C 'E)*"+ ,#%-. /0E)*"+ ,,N /0E)*"+ !2,N 3E4RS$ 7N,N UE4RS$+ 
QUOTE: These duration constraints introduce some imbalance risk for ESRs that sell reserves in the dayahead market.
AFTER:  At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to increase to reflect the higher risk and lower benefit of selling AS there. Initial observations validate that exp…

### e59 · `ercot-monthly-ops-2026-10` · tier 2 · ERCOT Monthly Operational Overview, 2026-10 (2026-10)
locator: ERCOT Monthly Operational Overview, October 2026, Ancillary Service prices slide, note 1 · text copy line 1021

BEFORE: …2026 Feb 2026 Mar 2026 Reg-Up Apr 2026 Reg-Down May 2026 RRS Jun 2026 ECRS Jul 2026 Aug 2026 Sep 2026 Oct 2026 Non-Spin RT Average MCPC 2) Monthly MCPCs are calculated as energy- and time-weighted average values, using the total AS awards of each interval for each AS type. 8 Average MCPC ($/MWh) 1) 
QUOTE: Starting with the introduction of the RTC+B program in December 2025, there are now MCPCs for all Ancillary Services in the Real-Time Market (RTM).
AFTER:  The table compares RTM MCPCs to DAM MCPCs. 7 6 5 4 3 2 1 0 Dec 2025 Jan 2026 Feb 2026 Mar 2026 Reg-Up Apr 2026 Reg-Down May 2026 RRS Jun 2026 ECRS Jul 2026 Aug 2026 Sep 2026 Oct 2026 Non-Spin 23 PUBLIC The percentage of real-time load transacted in the Day-Ahead Market was relatively flat since Nov…

### e60 · `ercot-nprr1014-board-report` · tier 1 · NPRR1014 Board Report (Energy Storage Resource Single Model) (Board approved 2020-12-08)
locator: NPRR1014 Board Report, Board Decision · text copy line 192

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1014 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e57 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-7) · text copy line 9642

BEFORE: …December 5, 2025, through February 2026 =>S)!"#A%%C'()*H',A#H)*;.'?CPH2 !"#A%%C'() *H',A#H -)./) M.1'2 !,H'CPH) 4R !,H'CPH)4STS) 89)WH')4R;<) !"#$ -$#$ #!0N#!04R ##$ %CD E.C/ 2 2 )CG E)%CG +DECE 2P 2P S.CE +,CD EEC. )S)CG In fact, rather than going short on AS, ERCOT consistently goes long on NSRS. 
QUOTE: This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC).
AFTER:  The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC. The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW. To satisfy the const…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e2, e18, e50): RTC+B is the ERCOT market upgrade under which the real-time dispatch co-optimizes energy and ancillary services, instead of only the day-ahead market doing so as it did before December 5, 2025. [e1] SCED now manages energy, Ancillary Services, power balance and congestion together, setting Base Points, AS awards, LMPs and Real-Time MCPCs about every five minutes. [e2] The "+B" part covers batteries: SCED accounts for each ESR's State of Charge, and the project brought in the single model for ESRs. [e18][e50]
- **How it works #1** (cites e1, e17): Before RTC, day-ahead AS awards were physical obligations, and the real-time market held that reserved capacity back from energy dispatch. Under RTC, the real-time dispatch co-optimizes energy and ancillary services, making economic trade-offs between them. [e1] AS awards follow Resource capability (including SOC and SOC limits) and the ASDCs, regardless of how much AS is being deployed. [e17]
- **How it works #2** (cites e16, e22, e52, e56, e4, e40) FLAG number-not-in-quote: 2025: Scarcity pricing moved inside the optimization. The IMM reports that the ORDC price adder was replaced by a set of ASDCs. [e16] Its quarterly report adds that there is no longer an explicit shortage adder; the energy price natively includes any shortage value from the ASDCs through co-optimization. [e22] The Protocols in force cap Electrical Bus LMPs, System Lambda and Real-Time MCPCs from SCED Step 2 at the effective VOLL. [e52][e56] ERCOT's July 2025 education deck (before go-live) illustrated how AS cost enters the LMP: reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP becomes $40/MWh, $30 of energy plus $10 of additional AS cost. [e4] The Reliability Deployment Price Adder remains, but it now produces separate adders for energy and each AS product, each the difference between a realized run and a counterfactual run without reliability actions. [e40]
- **How it works #3** (cites e5, e6, e51): The day-ahead market still clears energy and AS, but day-ahead AS awards are now financial positions, and ERCOT settles imbalances on them in real time. Virtual AS positions were added as hedges on the real-time price of reserves. [e5] ERCOT's pre-go-live overview said the Supplemental Ancillary Services Market (SASM) would be eliminated with RTC. [e6] RUC also co-optimizes energy and AS now, so it can shift AS awards among resources. [e51]
- **How it works #4** (cites e18, e24, e31): For batteries, the Protocols in force have SCED account for each ESR's SOC and SOC limits so that ESR Base Points and AS awards are feasible given the SCED duration requirements and do not breach MinSOC or MaxSOC. [e18] The single-model change (NPRR1014) replaced treating an ESR as two Resources, a Generation Resource plus a Controllable Load Resource, with one Resource. [e24] The IMM lists the real-time duration requirements as 5 minutes for energy, 30 minutes for Reg-Up and RRS, 1 hour for ECRS and 4 hours for NSRS. [e31]
- **Formula #1** (cites e19, e5) FLAG number-not-in-quote: 6.7, 2.1: Real-time AS imbalance quantity for a QSE (np-06 Section 6.7.2.1): RT AS awarded - DAM AS awards - DAM Self-Arranged AS + AS Trades bought - AS Trades sold, settled at Real-Time AS prices. [e19] In words, a day-ahead AS sale is a financial position; if the unit is not awarded the same quantity in real time, the QSE buys back the difference at the real-time MCPC. [e5][e19]
- **Formula #2** (cites e20, e21, e57) FLAG number-not-in-quote: 4.4: ASDCs (np-04 Section 4.4.12, current text): Reg-Down's ASDC is a constant equal to VOLL across its AS Plan. Reg-Up, RRS, ECRS and Non-Spin get their curves by building one Aggregate ORDC (AORDC) and disaggregating it by product. [e20] The AORDC is fitted to historical reserve pricing from June 1, 2014 through August 31, 2025. [e21] The IMM says Commission policy requires the up-reserve ASDCs, summed, to conform to the AORDC. [e57] (Pending NPRR1309 boxes in the same section would add DRRS; they are not in force.) [e20]
- **ERCOT context #1** (cites e8, e9, e49): RTC+B went live with 12/5/2025 as the first Operating Day, after the software migration on 12/4/2025. [e8] Over the first 48 hours ERCOT reported that SCED awarded energy and procured AS at or above plan in every interval, with minimum PRC of 7,272 MW on 12/6/25. [e9] That afternoon, available headroom not carrying reserves fell short of the 30-minute-ahead net load forecast and ERCOT deployed 1,415 MW of offline Non-Spin. [e49]
- **ERCOT context #2** (cites e10, e35, e36) FLAG number-not-in-quote: 2025, 2026: The IMM's review of RTC outcomes from December 5, 2025 through February 2026 found RTC "operating largely as expected", with gains in AS awards moving between resources within the hour, the market's ability to go short on AS, and fewer RUC commitments. It also flagged problems with how the ASDCs are built and with AS duration constraints, especially for Non-Spin (NSRS). [e10] More than 10% of total AS awards commonly shift across resources within a single SCED interval at sunrise and sunset. [e35] AS shortages were infrequent: NSRS was short for 25.9 hours (average 702.2 MW, average MCPC $22.50/MWh), ECRS for 4.0 hours and RRS for 1.6 hours, with no Reg-Up or Reg-Down shortages. [e36]
- **ERCOT context #3** (cites e57, e32, e33, e34, e55, e41, e42): The IMM's main complaint is Non-Spin. Because the up-reserve ASDCs must sum to the AORDC, excess volume is put on the NSRS curve, and ERCOT procured nearly 1,400 MW of NSRS above plan on average. [e57][e32] NSRS cleared about four times ECRS and eight times RRS, in line with the duration ratios. [e33] The IMM recommends reformulating the ASDCs on each product's marginal reliability value (Recommendation 2024-1) and cutting NSRS duration to one hour (Recommendation 2024-2). [e34][e55] In February 2026 it told the Board that the real-time market clears surplus NSRS yet produces a shortage price. [e41] By August 2026 it said shortage pricing via the ASDCs had been minimal since go-live. [e42] These are IMM recommendations, not adopted rules.
- **ERCOT context #4** (cites e37, e38, e11): Day-ahead AS prices ran well above real time early on: for December 5, 2025 through February 2026 the IMM reports average day-ahead/real-time prices of $3.30/$0.41 for RRS and $3.94/$1.10 for NSRS, and $50.21/$37.03 for energy. [e37] It attributes 57-75% of the premium for energy and up-reserves to December 5 and Winter Storm Fern (January 21-27, 2026), noting virtual AS offers only started December 6. [e38][e11]
- **ERCOT context #5** (cites e13, e39, e45, e14, e47, e43, e44, e46, e48): RUC changed by period. RUC commitments fell 80% against the year-earlier period, though 42% of the post-go-live winter commitments came during Winter Storm Fern. [e13][e39] Summer 2026 then had 1,313 effective RUC Resource-hours, against 872 in summer 2025 and 148 in summer 2024, mostly to secure AS quantities. [e45][e14] In October 2026, 99.4% of 165.6 RUC hours were for capacity. [e47] ERCOT's summer review credits RTC with lowering AS costs and congestion, and reports real-time congestion rent 10% below summer 2025. [e43][e44] In summer 2026 there were no Reg-Up, Reg-Down or RRS shortages, and ERCOT procured Non-Spin above plan (about 48 GWh/day in July and August) when cost-effective. [e46][e48]
- **Key facts #3** (cites e31, e28, e29, e30): - Durations in RTM (per the IMM): energy 5 min, Reg-Up and RRS 30 min, ECRS 1 hour, NSRS 4 hours; the 30-minute and 1-hour values came from NPRR1282, approved by the PUCT on 7/31/25. [e31][e28][e29][e30]
- **Key facts #4** (cites e11) FLAG number-not-in-quote: 2025: - Virtual AS offers started in the DAM on December 6, 2025. [e11]
- **Key facts #5** (cites e12, e15): - ERCOT noted that the SWCAP was reduced from $5,000/MWh to $2,000/MWh after RTC go-live on 12/5/2025. [e12][e15]
- **Key facts #6** (cites e13, e45): - RUC: down 80% in the first winter against a year earlier; 1,313 effective Resource-hours in summer 2026 (through 8/15). [e13][e45]
- **Key facts #7** (cites e32): - NSRS: nearly 1,400 MW procured above plan on average, December 2025 to February 2026 (IMM). [e32]
- **Key facts #8** (cites e52, e56): - LMP, System Lambda and Real-Time MCPCs from SCED Step 2 are capped at the effective VOLL. [e52][e56]
- **Timeline #1** (cites e54): - January 2019: per the IMM, the RTC upgrade began. [e54]
- **Timeline #2** (cites e23, e60, e24) FLAG number-not-in-quote: 2020: - December 8, 2020: ERCOT Board approves the core RTC NPRRs (for example NPRR1010) and NPRR1014, the ESR single model. [e23][e60][e24]
- **Timeline #3** (cites e25): - 2021: the project is delayed and put on hold until at least mid-2023, per the IMM. [e25]
- **Timeline #4** (cites e26, e27) FLAG number-not-in-quote: 2025: - May 15, 2025: PUCT approves NPRR1269, the policy items deferred from the 2020 RTC Protocols. [e26][e27]
- **Timeline #5** (cites e30) FLAG number-not-in-quote: 2025: - July 31, 2025: PUCT approves NPRR1282, the RTC AS durations. [e30]
- **Timeline #8** (cites e39): - January 21-27, 2026: Winter Storm Fern accounts for 42% of RUC commitments in the first post-go-live winter. [e39]
- **Timeline #9** (cites e41) FLAG number-not-in-quote: 2026: - February 9-10, 2026: IMM tells the Board that NSRS clears surplus yet produces a shortage price. [e41]
- **Timeline #10** (cites e14, e43): - Summer 2026: ERCOT reports RUC higher than the two previous summers, mostly for AS needs, and lower AS costs and congestion. [e14][e43]
- **Timeline #11** (cites e47) FLAG number-not-in-quote: 2026: - October 2026: 99.4% of RUC hours are for capacity. [e47]
- **Say it like this #1** (cites e8, e5, e19, e22, e10): (Guidance) Since RTC+B went live on December 5, 2025, ERCOT's real-time market picks who provides energy and who holds reserves every five minutes, and a day-ahead AS sale is now just a financial position that settles against real-time AS prices. Scarcity now shows up through AS demand curves inside the energy price rather than as an ORDC adder, and the IMM's main open issue is how those curves treat Non-Spin. [e8][e5][e19][e22][e10]
- **Common confusion #1** (cites e5, e19, e50, e18): (Guidance) RTC did not make the day-ahead market go away. The DAM still clears AS, but those awards are now financial and settle against real-time AS prices. [e5][e19] Also, "RTC" and "+B" are two pieces of one project: co-optimization is the pricing and dispatch change, and the battery part is the ESR single model plus SOC accounting inside SCED. [e50][e18]
- **Common confusion #2** (cites e34, e55, e20) FLAG number-not-in-quote: 4.4: (Guidance) Do not read the IMM's NSRS recommendations (reformulate ASDCs, one-hour NSRS) as adopted rules; they are recommendations. [e34][e55] And the Protocols' pending NPRR1309 DRRS language in Section 4.4.12 is not yet in effect. [e20]
- **Questions #4** (cites e22, e4): The energy price now natively includes any shortage value from the ASDCs. [e22] ERCOT's pre-go-live education deck gives an example: reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP goes to $40/MWh, $30 of energy plus $10 of AS cost. [e4]
- **Questions #6** (cites e5, e19): It is a financial position. The imbalance is RT award minus DAM award minus self-arranged AS, adjusted for trades, settled at Real-Time AS prices. [e5][e19]
- **Questions #8** (cites e32, e33, e34, e55): The IMM gives two reasons: the NSRS demand curve is extended with the AORDC's excess volume, and the 4-hour duration limits ESR supply and raises their opportunity cost. [e32][e33] Its fixes are to reformulate the ASDCs and cut NSRS duration to one hour. [e34][e55]
- **Questions #10** (cites e13, e39, e45, e14): It depends on the period. The IMM found RUC commitments fell 80% in the first winter after go-live, with 42% of them during Winter Storm Fern. [e13][e39] ERCOT's summer 2026 review found 1,313 effective RUC Resource-hours, mostly to secure AS quantities. [e45][e14]
- **Questions #12** (cites e18, e31, e19, e58): SCED will only award ESR AS that is feasible given SOC and the duration requirement, one hour for ECRS. [e18][e31] The QSE then buys back the shortfall at the real-time MCPC as an AS imbalance. [e19] The IMM says these duration constraints add imbalance risk for ESRs selling reserves day-ahead. [e58]
- **Questions #14** (cites e37, e38, e11): From December 5, 2025 through February 2026, day-ahead AS averaged far above real time, for example RRS $3.30 against $0.41. [e37] The IMM ties most of the premium to December 5 and Winter Storm Fern, before virtual AS offers were available, and expected it to fall in 2026. [e38][e11]
- **Scenarios #2** (cites e22, e16): - No. With RTC there is no explicit shortage adder; any ASDC shortage value is inside the energy price. [e22][e16]
- **Scenarios #3** (cites e59, e36): - Look at the Real-Time MCPCs and any AS shortfalls in that interval; since RTC+B there are Real-Time MCPCs for all AS. [e59][e36]
- **Scenarios #4** (cites e40): - Check whether an AS RDPA applied, since RDPA now runs separately for energy and each AS. [e40]
- **Link to asdc** (cites e16, e20, e21): composed-of ASDC (Ancillary Service Demand Curves): Under RTC, the ORDC price adder was replaced by a set of ASDCs, built by disaggregating an Aggregate ORDC fitted to 2014-2025 data. [e16][e20][e21]
- **Link to ordc** (cites e22): replaced ORDC (Operating Reserve Demand Curve): The IMM's quarterly report says that with RTC there is no longer an explicit shortage price adder; the energy price natively includes the ASDC shortage value. [e22]
- **Link to sced** (cites e2): affects SCED (Security-Constrained Economic Dispatch): SCED now awards energy and Ancillary Services together about every five minutes. [e2]
- **Link to energy-storage-resource** (cites e18, e24, e50): affects Energy Storage Resource (ESR): The Protocols in force have SCED account for each ESR's State of Charge so ESR Base Points and AS awards are feasible; RTC+B also brought the ESR single model. [e18][e24][e50]
- **Link to dam** (cites e5, e19): affects Day-Ahead Market (DAM): Day-ahead AS awards became financial positions with imbalances settled in real time, and virtual AS positions were added. [e5][e19]
- **Link to ruc** (cites e13, e45, e14): affects RUC (Reliability Unit Commitment: DRUC/HRUC): RUC volumes fell 80% in the first winter after go-live, then summer 2026 RUC was 1,313 effective Resource-hours, mostly for capacity and AS. [e13][e45][e14]
- **Link to non-spin** (cites e32, e33): affects Non-Spinning Reserve: The IMM says the real-time market procured nearly 1,400 MW of NSRS above plan on average and NSRS cleared about four times ECRS and eight times RRS. [e32][e33]
- **Link to pcm** (cites e53) FLAG number-not-in-quote: 39.1594: prerequisite-of PCM (Performance Credit Mechanism): PURA 39.1594 bars a PCM-type credit program until ERCOT begins implementing real-time co-optimization. [e53]
- **Link to offer-cap** (cites e12): affects Offer Caps (HCAP / LCAP / SWCAP): ERCOT notes the real-time SWCAP fell from $5,000/MWh to $2,000/MWh after RTC go-live. [e12]
- **Link to sc-battery-strategy** (cites e18, e31): related Scenario: Bidding a Battery After RTC+B: SCED now accounts for each ESR's State of Charge when awarding energy and AS, and AS duration rules limit ESR awards. [e18][e31]

