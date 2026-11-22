# Audit packet: ASDC (Ancillary Service Demand Curves) (asdc)

kind rule · domain reliability · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Ancillary Service Demand Curve (ASDC) · text copy line 138 · heading above: 2.1 DEFINITIONS

BEFORE: …-----------------------------------------------+ Ancillary Service Capacity Monitor A set of processes described in Section 8.1.1.3, Ancillary Service Capacity Compliance Criteria, to determine the Real-Time capability of Resources to provide Ancillary Service. Ancillary Service Demand Curve (ASDC) 
QUOTE: A curve that reflects the value of each Ancillary Service product by price/quantity pairs for each hour of the Operating Day.
AFTER:  Ancillary Service Deployment Factors Hourly parameters for each Ancillary Service type between 0 and 1 (or 0% to 100%) that indicate an assumed Ancillary Service deployment and may be based on system conditions such as forecasts for Demand and Intermittent Renewable Resources (IRRs). These factors …

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3(1), Security Constrained Economic Dispatch · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e3 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 48) · text copy line 4567

BEFORE: …ent in new generation. Procuring excessive volumes of ancillary services will inefficiently inject additional non-price-setting energy into the real-time market and reduce prices. Ultimately, it can undermine the ability of shortage pricing to provide efficient long-term signals for new investment. 
QUOTE: With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them.
AFTER:  At the extremity of a well-designed ASDC, the shortage price should approach $0, reflecting the low marginal reliability value of additional reserves and allowing the market to go short on AS. This dynamic contrasts with the previous market design where the day-ahead market necessarily 48 | 2025 St…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(3), Determination of Ancillary Service Demand Curves · text copy line 2294 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------+ (2) The VOLL is determined as described in Section 4.4.11, Day-Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) 
QUOTE: The DAM shall use the same ASDCs as the RTM, as an initial condition.
AFTER:  Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(b)(iii)-(iv) (current text) · text copy line 2445 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form the nonlinear portion of the Reg-Up ASDC; (ii) Second, extract evenly spaced 1 MW AORDC segments extending from MCL to the minimum RRS price. These segments form the nonlinear portion of the RRS ASDC; 
QUOTE: (iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and (iv) Assign any remaining 1 MW segments of the AORDC priced above $0.01/MWh to Non-Spin.
AFTER:  The minimum prices for Reg-Up and RRS are defined as follows: ------------------------------------------------------------------------------ Parameter Unit Current Value ------------------ ------------- --------------------------------------------- Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100…

### e10 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(9) · text copy line 2503 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (8) Each ASDC will be represented by a linear approximation to the corresponding part of the AORDC. (9) 
QUOTE: All ASDCs will have a floor price, based on ERCOT's assessment of the need for a floor price on the ASDC for RUC, such that no values on the curve for any Ancillary Service fall below $15 per MW per hour for the portion of the ASDC that corresponds to the Ancillary Service Plan.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11(1)(a), Day-Ahead and Real-Time System-Wide Offer Caps · text copy line 2215 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …fer Caps (1) The DASWCAP and RTSWCAP shall be determined in accordance with the Public Utility Commission of Texas (PUCT) rules. The methodology for determining the DASWCAP and RTSWCAP is as follows: (a) The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). 
QUOTE: Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM.
AFTER:  These caps shall be maintained at these levels until either of the following criteria are met: (i) If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ER…

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, parameter table · text copy line 2242 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------- --------------------------------------------- ECAP $/MWh 2,000 
QUOTE: HCAP - DAM (DASWCAP) $/MWh 5,000 HCAP - RTM (RTSWCAP) $/MWh 2,000
AFTER:  LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000 * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise direct…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-7) · text copy line 9646

BEFORE: …dual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC). The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC. 
QUOTE: The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW. To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include the excess volume. This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4.
AFTER:  94 That is, everything except for Reg-Down 2025 State of the Market Report | A-7 / / Appendix: Real-Time Co-Optimization Figure A4: Illustration of Extended ASDC for NSRS From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average. Thus, this…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 49) · text copy line 4585

BEFORE: …t with co-optimization of energy and operating reserves. ERCOT operations, however, has signaled skepticism about this feature of RTC and indicated that it intends to use reliability unit commitment (RUC) instructions to increase operating reserves when the market does not procure the full AS Plan. 
QUOTE: To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269.
AFTER:  ERCOT argues that this price floor reduces the likelihood of real-time shortages of ancillary services that would prompt operators to commit resources through RUC. In practice, this excessively conservative operating reserve policy will increase consumer costs while suppressing the price signals ne…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendations, 2024-1a (p. 125) · text copy line 8854

BEFORE: … risks, and their reliability value varies with system conditions. Constraining all ASDCs to fit a fixed aggregate curve limits their ability to adapt to changing supply and demand conditions. This weakens incentives to procure and provide the services that most effectively reduce reliability risk. 
QUOTE: Accordingly, we recommend removing the requirement for the ASDCs to aggregate to the AORDC and constructing each ASDC individually to reflect the reliability value of the corresponding reserve product.
AFTER:  ERCOT lists "ASDC Review" as its top priority in its inventory of RTC Issues to Consider in 2026.84 2024-1b: Set Parameters for AS Methodology According to Probabilistic Risks Since 2022, ERCOT has dramatically increased the volume of ancillary services procured in the market. This over-procurement…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, G. RDPA (p. A-10) · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
AFTER:  The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. The RDPA process now produces separate price adders for energy and each AS product. The real-time market…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.1.1(6), Ancillary Service Plan · text copy line 303 · heading above: 4.2.1.1 Ancillary Service Plan

BEFORE: …cillary Service quantity requirements for an Operating Day may not be decreased. (6) ERCOT shall create an Ancillary Service Demand Curve (ASDC) for each Ancillary Service as described in Section 4.4.12, Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market. 
QUOTE: ERCOT must post the ASDCs to the ERCOT website by 0600 of the Day-Ahead. If ERCOT changes the Ancillary Service Plan per Section 6.4.9.1.2, Changes to Operating Day Ancillary Service Plan, the ASDCs reflecting the change to the Ancillary Service Plan will be posted to the ERCOT website.
AFTER:  4.2.1.2 Ancillary Service Obligation Assignment and Notice (1) ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ra…

### e42 · `imm-board-2026-02` · tier 2 · IMM Report to the Board (item 10.1) (2026-02-02)
locator: IMM Report to the Board, slide 2, Non-Spinning Reserve Pricing in RTC (February 9-10, 2026) · text copy line 13

BEFORE: …Item 10.1: Independent Market Monitor (IMM) Report Jeff McDonald, Ph.D. VP Potomac Economics and ERCOT IMM Director Board of Directors, Reliability and Markets Committee ERCOT Public February 9-10, 2026 Non-Spinning Reserve Pricing in RTC • 
QUOTE: The RTM clears surplus NSRS yet is producing a shortage price.
AFTER:  • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well). 2 Shortage Prices in Non-Spin when System is Long 3 Notes on RA Throu…

### e46 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, pending box [NPRR1309: Replace paragraph (9) above ... upon system implementation] · text copy line 2508 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market
FLAG pending-box: | [NPRR1309: Replace paragraph (9) above with the following upon system implementation:] |
BEFORE: …, with the exception of DRRS, will have a floor price, based on ERCOT's assessment of the need for a floor price on the ASDC for RUC, such that no values on the curve for any Ancillary Service fall below $15 per MW per hour for the portion of the ASDC that corresponds to the Ancillary Service Plan. 
QUOTE: The DRRS ASDC will have a floor price of $10 per MW per hour, applied in the DAM and RTM, for the portion of the DRRS ASDC that corresponds to the Ancillary Service Plan for DRRS.
AFTER:  | +========================================================================================================================================================================================================================================================================================================…

### e47 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: NPRR1309 PUCT Report, approved language for Section 4.4.12(7)(b), minimum prices table · text copy line 1341 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: … $0.01/MWh to Non-Spin. The minimum prices for Reg-Up, RRS, ECRS, Non-Spin, and DRRS are defined as follows: -------------------------------------------------------------------------------- Parameter Unit Current Value -------------------- ------------- --------------------------------------------- 
QUOTE: Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100 ECRS Min Price $/MWh 15 Non-Spin Min Price $/MWh 5 DRRS Min Price $/MWh 0.01
AFTER:  -------------------------------------------------------------------------------- (8) Any empty points on the curved portion of the AORDC are backfilled by alternatingly removing points from the end of each ASDC in the following order: Reg-Up, RRS, ECRS, Non-Spin, and DRRS, and moving them to the hi…

## Statements to check (new or changed since the last audit)

- **Link to ordc** (cites e3, e17): replaced ORDC (Operating Reserve Demand Curve): Under RTC, ASDCs replaced the ORDC price adder as the source of scarcity pricing. [e3][e17]
- **Link to rtc-b** (cites e2, e3): part-of RTC+B (Real-Time Co-optimization + Batteries): ASDCs are what lets RTC's real-time dispatch trade off energy against reserves and go short on AS. [e2][e3]
- **Link to ancillary-services** (cites e1, e4): determines Ancillary Services (AS): ASDCs set how much each AS product is worth in DAM and RTM clearing, product by product. [e1][e4]
- **Link to non-spin** (cites e9, e13): affects Non-Spinning Reserve: Leftover AORDC volume is assigned to the Non-Spin curve, so the market buys Non-Spin above plan. [e9][e13]
- **Link to ruc** (cites e10, e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): The protocol bases the $15 ASDC floor on ERCOT's assessment of the need for a floor price on the ASDC for RUC; the IMM says ERCOT added it to avoid shortages that would prompt RUC. [e10][e14]
- **Link to offer-cap** (cites e11, e12): related Offer Caps (HCAP / LCAP / SWCAP): The VOLL used to build the ASDCs is set to the day-ahead HCAP. [e11][e12]
- **Link to sced** (cites e2): used-in SCED (Security-Constrained Economic Dispatch): SCED maximizes bid-based revenues minus offer-based costs subject to the ASDCs. [e2]
- **Link to drrs** (cites e46, e47): related DRRS (Dispatchable Reliability Reserve Service): Approved-but-pending NPRR1309 text adds a DRRS ASDC with a $10 per MW per hour floor and a $0.01/MWh minimum price. [e46][e47]
- **Link to dam** (cites e4, e25): used-in Day-Ahead Market (DAM): The DAM starts from the same ASDCs as the RTM and ERCOT must post them by 0600 of the Day-Ahead. [e4][e25]
- **Link to imm** (cites e15, e42): related Independent Market Monitor (Potomac Economics): The IMM recommends cutting the ASDCs loose from the AORDC and stopping the Non-Spin curve at the AS Plan. [e15][e42]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) Since RTC+B, each reserve product has its own demand curve that tells the dispatch how much it is worth paying to hold that reserve. When reserves get scarce, the market can go short at the curve price, and that value shows up inside the energy price rather than as a separate adder. The curves are cut from one aggregate curve based on the old ORDC, which is why Non-Spin often ends up over-procured, and the PUCT has now said the design no longer has to copy the ORDC.

