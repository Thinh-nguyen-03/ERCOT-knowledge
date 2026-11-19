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

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(4) · text copy line 2296 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) The DAM shall use the same ASDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. (4) 
QUOTE: For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down.
AFTER:  (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services. +----------------------------------------------------------------…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(5) · text copy line 2298 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: … as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) 
QUOTE: To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(a), variable table (MCL) · text copy line 2382 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------------------------------------ Variable Unit Definition -------------- ------ ---------------------------------------------------------------------------------------------------------------------------------------------------------- MCL MW 
QUOTE: Minimum Contingency Level - the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW.
AFTER:  RUREQ MW Total capacity of Reg-Up in the Ancillary Service Plan RRSREQ MW Total capacity of RRS in the Ancillary Service Plan ECRSREQ MW Total capacity of ECRS in the Ancillary Service Plan RUPCT % Fixed percentage of Reg-Up included in the MCL RRSPCTMAX % Maximum RRS percentage included in the MCL…

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(a), pricing table for quantities up to the MCL · text copy line 2430 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …s of each Ancillary Service product procured until the MCL is satisfied are priced as follows: --------------------------------------------------------------------------------------- Parameter Unit Current Value --------------------------- ------------- --------------------------------------------- 
QUOTE: Reg-Up Max Demand Price $/MWh VOLL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 Non-Spin Max Demand Price $/MWh VOLL
AFTER:  --------------------------------------------------------------------------------------- (b) Beyond the MCL, the nonlinear segments of the AORDC are disaggregated as follows: (i) First, extract evenly spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form …

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

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-7) · text copy line 9645

BEFORE: …t, rather than going short on AS, ERCOT consistently goes long on NSRS. This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC). 
QUOTE: The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC.
AFTER:  The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW. To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include t…

### e19 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 49) · text copy line 4590

BEFORE: …s are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269. ERCOT argues that this price floor reduces the likelihood of real-time shortages of ancillary services that would prompt operators to commit resources through RUC. 
QUOTE: In practice, this excessively conservative operating reserve policy will increase consumer costs while suppressing the price signals needed to maintain resource adequacy.
AFTER:  Consumers will incur higher costs because of uplift from RUC, DAM make-whole payments, and from the $15 per MWh floor on the AORDC. At the same time, excess supply of reserves and a reluctance to endure any reserve shortage will suppress the price signal that the ASDCs are meant to produce. Ultimat…

### e20 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 49) · text copy line 4587

BEFORE: …unit commitment (RUC) instructions to increase operating reserves when the market does not procure the full AS Plan. To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269. 
QUOTE: ERCOT argues that this price floor reduces the likelihood of real-time shortages of ancillary services that would prompt operators to commit resources through RUC.
AFTER:  In practice, this excessively conservative operating reserve policy will increase consumer costs while suppressing the price signals needed to maintain resource adequacy. Consumers will incur higher costs because of uplift from RUC, DAM make-whole payments, and from the $15 per MWh floor on the AOR…

### e21 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-8) · text copy line 9676

BEFORE: …reformulate the ASDCs based on the marginal reliability value of each product. This reformulation would produce ASDCs that scale according to the AS Plan for each product and eliminate the possibility that the real-time market over-procures reserves relative to the AS Plan. E. NSRS relative Pricing 
QUOTE: Since RTC go-live, NSRS has consistently been more expensive than ECRS and RRS.
AFTER:  This trend is a continuation of the pricing outcomes from the rest of 2025, where NSRS was the most expensive AS product on average for the year. Two factors related to the implementation of RTC have reinforced this trend: 1) the extension of the ASDC for NSRS with the excess volume from the AORDC,…

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-8) · text copy line 9682

BEFORE: …this trend: 1) the extension of the ASDC for NSRS with the excess volume from the AORDC, and 2) the 4-hour duration constraint for NSRS. As discussed in the previous section, the extended ASDC for NSRS effectively increases the demand for NSRS above what is defined by the already excessing AS Plan. 
QUOTE: The duration constraint, on the other hand, limits the supply of ESR capacity that can provide NSRS and increases the opportunity cost for ESRs to provide NSRS compared to other AS products with lower duration requirements.
AFTER:  This opportunity cost impact is implicitly accounted for in the price formation produced in the realA-8 | 2025 State of the Market Report / / Appendix: Real-Time Co-Optimization time market and can be seen by comparing the distribution of clearing prices for NSRS to the clearing prices for the othe…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-8) · text copy line 9678

BEFORE: … over-procures reserves relative to the AS Plan. E. NSRS relative Pricing Since RTC go-live, NSRS has consistently been more expensive than ECRS and RRS. This trend is a continuation of the pricing outcomes from the rest of 2025, where NSRS was the most expensive AS product on average for the year. 
QUOTE: Two factors related to the implementation of RTC have reinforced this trend: 1) the extension of the ASDC for NSRS with the excess volume from the AORDC, and 2) the 4-hour duration constraint for NSRS.
AFTER:  As discussed in the previous section, the extended ASDC for NSRS effectively increases the demand for NSRS above what is defined by the already excessing AS Plan. The duration constraint, on the other hand, limits the supply of ESR capacity that can provide NSRS and increases the opportunity cost f…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11(1)(a)(i), Emergency Pricing Program trigger · text copy line 2217 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …TSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM. These caps shall be maintained at these levels until either of the following criteria are met: (i) 
QUOTE: If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change.
AFTER:  Security-Constrained Economic Dispatch (SCED)-level data, time-weight averaged to a 15-minute Settlement Interval equivalent, will be used to make this determination. The EPP will remain active until the later of the following, at which point the ECAP Effective Period will end at the beginning of t…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11(1)(a)(ii), Peaker Net Margin threshold · text copy line 2223 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while the EPP was active. If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions. (ii) 
QUOTE: If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism.
AFTER:  (b) ERCOT shall issue operations notices when the ECAP Effective Period begins and ends. Such notices shall respectively state the date and time of the initiation and cessation of the ECAP Effective Period. (c) ERCOT will post on the ERCOT website the cumulative number of hours in which the sum of …

## Statements to check

- **Definition #1** (cites e1, e3): An Ancillary Service Demand Curve (ASDC) is a set of price/quantity pairs that gives the value of one AS product for each hour of the Operating Day. [e1] Since RTC, these sloped curves define shortage pricing in both the day-ahead and real-time markets. They set the penalty price the market pays when it goes short on a reserve product. [e3]
- **How it works #1** (cites e2, e3, e4): In real time, SCED picks energy dispatch and AS awards by maximizing bid-based revenues minus offer-based costs, subject to the ASDCs as well as power balance and network limits. [e2] The curves are meant to reflect the marginal reliability value of reserves, and they set the penalty price when the market goes short on a product. [e3] The DAM starts from the same ASDCs as the RTM. [e4]
- **How it works #2** (cites e5, e6): Reg-Down has its own simple curve: a constant price equal to VOLL across its full AS Plan quantity. [e5] For the four up-reserve products (Reg-Up, RRS, ECRS, Non-Spin), ERCOT first builds one Aggregate ORDC (AORDC) and then splits it into separate curves. [e6]
- **How it works #3** (cites e7, e8, e9): The protocols define a Minimum Contingency Level (MCL) of 3,000 MW. [e7] For quantities up to the MCL, the maximum demand prices are Reg-Up at VOLL + 4,052, RRS at VOLL + 2,051, ECRS at VOLL + 50, and Non-Spin at VOLL. [e8] In the later steps of the split, remaining 1 MW segments of the AORDC go to ECRS and Non-Spin alternately until both requirements are met, and any remaining segments priced above $0.01/MWh go to Non-Spin. [e9]
- **How it works #4** (cites e10, e11, e23, e24, e12): Every ASDC has a floor of $15 per MW per hour over the part of the curve that matches the AS Plan. The protocol says the floor is based on ERCOT's assessment of the need for a floor price on the ASDC for RUC. [e10] The VOLL used to build the curves is set to the day-ahead HCAP by default. [e11] It changes in two cases: when the Emergency Pricing Program is activated (prices at or above the day-ahead HCAP for 12 hours within a rolling 24-hour period), the VOLL is set to ECAP [e23]; and when the Peaker Net Margin exceeds its threshold during a year, the VOLL follows the schedule in Section 4.4.11.1. [e24] The protocol table lists the day-ahead HCAP at $5,000/MWh (the real-time cap is listed at $2,000; see the offer-cap topic). [e12]
- **ERCOT context #1** (cites e13) FLAG number-not-in-quote: 2025: The IMM's 2025 report describes visible effects of the aggregation rule. The AORDC runs to 10,000 MW, but for much of the year the combined AS Plan for the four up-reserves is smaller. The leftover volume is currently added to the Non-Spin (NSRS) curve, so the real-time market buys more NSRS than the plan calls for. [e13]
- **ERCOT context #2** (cites e14, e20, e19, e15): According to the IMM, ERCOT added the $15/MWh floor on AS shortages through NPRR 1269, and ERCOT argues it reduces the likelihood of real-time AS shortages that would prompt RUC commitments. [e14][e20] The IMM calls the resulting reserve policy excessively conservative and says it suppresses price signals. [e19] It recommends dropping the rule that the ASDCs must add up to the AORDC and instead building each curve from the reliability value of its own product. [e15]
- **Key facts #1** (cites e7): - Minimum Contingency Level (MCL): 3,000 MW. [e7]
- **Key facts #2** (cites e8): - Maximum demand prices (for quantities up to the MCL): Reg-Up VOLL + 4,052; RRS VOLL + 2,051; ECRS VOLL + 50; Non-Spin VOLL. [e8]
- **Key facts #3** (cites e5): - Reg-Down ASDC: flat at VOLL across its AS Plan quantity. [e5]
- **Key facts #4** (cites e10, e14): - ASDC floor: $15 per MW per hour over the AS Plan portion (NPRR 1269). [e10][e14]
- **Key facts #5** (cites e11, e12, e23, e24): - VOLL for ASDCs equals the day-ahead HCAP, listed at $5,000/MWh in the protocol table, unless the Emergency Pricing Program or the Peaker Net Margin threshold has been triggered. [e11][e12][e23][e24]
- **Key facts #6** (cites e13) FLAG number-not-in-quote: 2025: - AORDC length: 10,000 MW. Excess volume goes to Non-Spin (IMM 2025 report). [e13]
- **Common confusion #1** (cites e17, e18, e6, e8, e11): (Guidance) The AORDC is not the old ORDC adder still running: the adder was replaced by the ASDCs, and the AORDC is a fixed curve formulated from the pricing outcomes the ORDC produced before RTC. [e17][e18] ERCOT builds it and then splits it into product-specific ASDCs. [e6] The ASDC prices are not offer caps either. The highest ASDC prices for the up-reserves sit above VOLL (Non-Spin at VOLL), which itself is set to the day-ahead HCAP in normal conditions. [e8][e11]
- **Questions #2** (cites e8): The protocols price quantities up to the MCL at VOLL + 4,052 for Reg-Up, above RRS (VOLL + 2,051), ECRS (VOLL + 50) and Non-Spin (VOLL). [e8]
- **Questions #4** (cites e13, e9): The up-reserve ASDCs must add up to a 10,000 MW AORDC. When the AS Plan is smaller than that, the extra volume is assigned to the Non-Spin curve, so SCED buys NSRS above plan. [e13][e9]
- **Questions #6** (cites e10, e14, e19): No point on any ASDC can fall below $15 per MW per hour over the AS Plan quantity. [e10] According to the IMM, ERCOT introduced it through NPRR 1269 to avoid shortages that would lead operators to use RUC, and the IMM calls it part of an excessively conservative reserve policy that suppresses price signals. [e14][e19]
- **Questions #8** (cites e15): It wants to drop the requirement that the ASDCs add up to the AORDC and build each ASDC from the reliability value of its own product. [e15]
- **Scenarios #2** (cites e21): - The IMM reports NSRS has consistently been more expensive than ECRS and RRS since RTC go-live. [e21]
- **Scenarios #3** (cites e13, e16): - The Non-Spin ASDC is extended with the AORDC volume left over beyond the AS Plan, which raises demand for Non-Spin. [e13][e16]
- **Scenarios #4** (cites e16, e22): - The IMM also cites the 4-hour NSRS duration constraint, which limits the ESR capacity that can provide NSRS and raises ESRs' opportunity cost. [e16][e22]
- **Link to ordc** (cites e3, e17): replaced ORDC (Operating Reserve Demand Curve): Under RTC, ASDCs replaced the ORDC price adder as the source of scarcity pricing. [e3][e17]
- **Link to rtc-b** (cites e2, e3): part-of RTC+B (Real-Time Co-optimization + Batteries): ASDCs are what lets RTC's real-time dispatch trade off energy against reserves and go short on AS. [e2][e3]
- **Link to ancillary-services** (cites e1, e4): determines Ancillary Services (AS): ASDCs set how much each AS product is worth in DAM and RTM clearing, product by product. [e1][e4]
- **Link to non-spin** (cites e9, e13): affects Non-Spinning Reserve: Leftover AORDC volume is assigned to the Non-Spin curve, so the market buys Non-Spin above plan. [e9][e13]
- **Link to ruc** (cites e10, e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): The protocol bases the $15 ASDC floor on ERCOT's assessment of the need for a floor price on the ASDC for RUC; the IMM says ERCOT added it to avoid shortages that would prompt RUC. [e10][e14]
- **Link to offer-cap** (cites e11, e12): related Offer Caps (HCAP / LCAP / SWCAP): The VOLL used to build the ASDCs is set to the day-ahead HCAP. [e11][e12]
- **Link to sced** (cites e2): used-in SCED (Security-Constrained Economic Dispatch): SCED maximizes bid-based revenues minus offer-based costs subject to the ASDCs. [e2]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) Since RTC+B, each reserve product has its own demand curve that tells the dispatch how much it is worth paying to hold that reserve. When reserves get scarce, the market can go short at the curve price. The curves are cut from one aggregate curve based on the old ORDC, which is why Non-Spin often ends up over-procured.

