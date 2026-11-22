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

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.1.1(6), Ancillary Service Plan · text copy line 303 · heading above: 4.2.1.1 Ancillary Service Plan

BEFORE: …cillary Service quantity requirements for an Operating Day may not be decreased. (6) ERCOT shall create an Ancillary Service Demand Curve (ASDC) for each Ancillary Service as described in Section 4.4.12, Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market. 
QUOTE: ERCOT must post the ASDCs to the ERCOT website by 0600 of the Day-Ahead. If ERCOT changes the Ancillary Service Plan per Section 6.4.9.1.2, Changes to Operating Day Ancillary Service Plan, the ASDCs reflecting the change to the Ancillary Service Plan will be posted to the ERCOT website.
AFTER:  4.2.1.2 Ancillary Service Obligation Assignment and Notice (1) ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ra…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6)(a), historical reserve pricing formula · text copy line 2311 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …June 1, 2014 through August 31, 2025 as follows: (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below: 
QUOTE: (0.5*(1 - pnorm(RTOLCAP - 3000, 0.5 * μ, 0.707 * σ)) + 0.5*(1 - pnorm(RTOLCAP + RTOFFCAP - 3000, μ, σ)))*(VOLL - min(System Lambda, 250))
AFTER:  The above variables are defined as follows: -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Definition -------------- ------ -------------…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6), data period and variable table · text copy line 2318 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------------------------- Variable Unit Definition -------------- ------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
QUOTE: RTOLCAP MWh Real-Time On-Line Reserve Capacity - The Real-Time reserve capacity of On-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 RTOFFCAP MWh Real-Time Off-Line Reserve Capacity - The Real-Time reserve capacity of Off-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 μ None The mean value of the shifted LOLP distribution as published for Summer 2026 σ None The standard deviation of the shifted LOLP distribution as published for Summer 2026
AFTER:  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (b) Using the results of paragraph (a) above, use regression methods to fit the following curve to the a…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6) · text copy line 2307 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …==================================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (6) 
QUOTE: ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through August 31, 2025 as follows: (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below:
AFTER:  (0.5*(1 - pnorm(RTOLCAP - 3000, 0.5 * μ, 0.707 * σ)) + 0.5*(1 - pnorm(RTOLCAP + RTOFFCAP - 3000, μ, σ)))*(VOLL - min(System Lambda, 250)) The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6)(c) · text copy line 2341 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …escribed above. σ* None The standard deviation used for the calculation of the AORDC as determined using the regression fit method described above. --------------------------------------------------------------------------------------------------------------------------------------------------- (c) 
QUOTE: Calculate points on the regression curve in 1 MW increments for any observed reserve level >= 3,000 MW and price >$0.01/MWh. These points form the AORDC.
AFTER:  (7) ERCOT shall disaggregate the AORDC developed pursuant to paragraph (6) above into individual ASDCs for each Ancillary Service product as follows: (a) Using the required percentage of Reg-Up, the maximum percentages of RRS and ECRS, and the minimum quantities of required Non-Spin and ECRS, the q…

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(a), fixed parameters table · text copy line 2414 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …----------------------------------------------------------------------------------- Fixed parameters are defined as follows: ------------------------------------------------------------------------ Parameter Unit Current Value ------------ ------------- --------------------------------------------- 
QUOTE: RUPCT % 90 RRSPCTMAX % 90 ECRSPCTMAX % 30 ECRSMWMIN MW 40 NSMWMIN MW 10
AFTER:  ------------------------------------------------------------------------ Further, the quantities of each Ancillary Service product procured until the MCL is satisfied are priced as follows: --------------------------------------------------------------------------------------- Parameter Unit Curren…

### e31 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(b)(i)-(ii) and minimum price table · text copy line 2441 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …LL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 Non-Spin Max Demand Price $/MWh VOLL --------------------------------------------------------------------------------------- (b) Beyond the MCL, the nonlinear segments of the AORDC are disaggregated as follows: 
QUOTE: (i) First, extract evenly spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form the nonlinear portion of the Reg-Up ASDC; (ii) Second, extract evenly spaced 1 MW AORDC segments extending from MCL to the minimum RRS price. These segments form the nonlinear portion of the RRS ASDC;
AFTER:  (iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and (iv) Assign any remaining 1 MW segments of the AORDC priced above $0.01/MWh to Non-Spin. The minimum prices for Reg-Up and RRS are defined as fo…

### e32 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(b), minimum prices table (current) · text copy line 2454 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …s of the AORDC priced above $0.01/MWh to Non-Spin. The minimum prices for Reg-Up and RRS are defined as follows: ------------------------------------------------------------------------------ Parameter Unit Current Value ------------------ ------------- --------------------------------------------- 
QUOTE: Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100
AFTER:  ------------------------------------------------------------------------------ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (b) above with…

### e33 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(8) · text copy line 2501 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …===================================+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (8) 
QUOTE: Each ASDC will be represented by a linear approximation to the corresponding part of the AORDC.
AFTER:  (9) All ASDCs will have a floor price, based on ERCOT's assessment of the need for a floor price on the ASDC for RUC, such that no values on the curve for any Ancillary Service fall below $15 per MW per hour for the portion of the ASDC that corresponds to the Ancillary Service Plan. +--------------…

### e34 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2(2), Reliability Unit Commitment (RUC) Process · text copy line 281 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: ERCOT shall create an ASDC for each Ancillary Service for use in RUC. The ASDCs for each Ancillary Service for use in RUC shall be substantively the same as the ASDCs defined in Section 4.4.12, Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market. Specific to RUC, the ASDC for Non-Spinning Reserve (Non-Spin) shall not extend beyond the Ancillary Service Plan for Non-Spin for the relevant Operating Hour. ERCOT shall post the ASDCs for RUC to the ERCOT website following each execution of the RUC process.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3(5)(c)(i), Security Constrained Economic Dispatch (proxy Ancillary Service Offer price floors) · text copy line 2035 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …cillary Service Offer price floor for DRRS; or | | | | (B) The Resource's highest submitted Ancillary Service Offer price for DRRS. | +================================================================================+ +--------------------------------------------------------------------------------+ 
QUOTE: (c) The proxy Ancillary Service Offer price floors for each SCED-interval shall be derived from the effective ASDCs and Ancillary Service Plan using the following logic: (i) The proxy Ancillary Service Offer price floor for Reg-Up is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for Reg-Up that intersects with a quantity that is 95% of the Ancillary Service Plan for Reg-Up.
AFTER:  (ii) The proxy Ancillary Service Offer price floor for RRS is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for RRS that intersects with a quantity that is 95% of the Ancillary Service Plan for RRS. (iii) The proxy Anci…

### e36 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report, PUCT Decision · text copy line 90

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | PUCT Decision | | 
QUOTE: On 5/15/25, the PUCT approved NPRR1269 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e37 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report, Comments Received (TCPA 3/4/25) · text copy line 140

BEFORE: …igh relative to the cost to provide the service ERCOT 030325 Proposed revisions replacing placeholder "X" values within the Protocol language and proposing that all ASDCs for RUC have a price floor such that no value on the curve for any Ancillary Service fall bellow $15 per MW per hour TCPA 030425 
QUOTE: Proposed additional revisions to the 3/3/25 ERCOT comments to carry the proposed $15 per MW per hour floor from RUC into the DAM and RTM as well
AFTER:  TIEC 031025 Proposed additional revisions to the 3/3/25 ERCOT comments lowering the proposed Ancillary Service proxy offer floor from $2,000 per MW per hour to $15 per MW per hour IMM 031125 Responded to the 3/10/25 TCPA comments and provided supporting analysis of the impact of ASDC price floors i…

### e38 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report, Comments Received (Joint Consumers 3/25/25) · text copy line 146

BEFORE: …al revisions to the 3/3/25 ERCOT comments lowering the proposed Ancillary Service proxy offer floor from $2,000 per MW per hour to $15 per MW per hour IMM 031125 Responded to the 3/10/25 TCPA comments and provided supporting analysis of the impact of ASDC price floors in 2024 Joint Consumers 032525 
QUOTE: Expressed concern that NPRR1269 proposes a fundamental, premature and arbitrary shift in RTC design before its implementation and proposed a compromise to modify the proposed floor price from $15 to $0 for monitoring throughout 2026
AFTER:  ERCOT 033125 Provided ERCOT's perspective on the concept of an ASDC floor in the DAM and RTM and the appropriate level for the Ancillary Service proxy offer floor; summarized results of the analysis of the impact of NPRR1269 Joint Consumers 040425 Reiterated opposition to the proposed $15 floor pri…

### e39 · `ercot-nprr1269-puct-report` · tier 1 · NPRR1269 PUCT Report (RTC+B three parameters policy issues) (PUCT approved 2025-05-15)
locator: NPRR1269 PUCT Report, ERCOT Board Decision · text copy line 88

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | ERCOT Board Decision | | 
QUOTE: On 4/8/25, the ERCOT Board voted to recommend approval of NPRR1269 as recommended by TAC in the 3/26/25 TAC Report. There was one opposing vote.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e40 · `ercot-nprr1008-board-report` · tier 1 · NPRR1008 Board Report (Real-Time Co-optimization, Section 4 Day-Ahead Operations) (Board approved 2020-12-08)
locator: NPRR1008 Board Report, Section 4.4.12(5) as approved in 2020 · text copy line 1225 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: … a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (4) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate ORDC (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services. (5) 
QUOTE: ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through December 31, 2023 as follows:
AFTER:  (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate the AORDC as follows: ((())(()))(()) The above variables are defined as follows: --------------------------------------------------------------------------------…

### e41 · `ercot-nprr1008-board-report` · tier 1 · NPRR1008 Board Report (Real-Time Co-optimization, Section 4 Day-Ahead Operations) (Board approved 2020-12-08)
locator: NPRR1008 Board Report, Board Decision · text copy line 158

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1008 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e42 · `imm-board-2026-02` · tier 2 · IMM Report to the Board (item 10.1) (2026-02-02)
locator: IMM Report to the Board, slide 2, Non-Spinning Reserve Pricing in RTC (February 9-10, 2026) · text copy line 13

BEFORE: …Item 10.1: Independent Market Monitor (IMM) Report Jeff McDonald, Ph.D. VP Potomac Economics and ERCOT IMM Director Board of Directors, Reliability and Markets Committee ERCOT Public February 9-10, 2026 Non-Spinning Reserve Pricing in RTC • 
QUOTE: The RTM clears surplus NSRS yet is producing a shortage price.
AFTER:  • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well). 2 Shortage Prices in Non-Spin when System is Long 3 Notes on RA Throu…

### e43 · `imm-board-2026-02` · tier 2 · IMM Report to the Board (item 10.1) (2026-02-02)
locator: IMM Report to the Board, slide 2 (February 9-10, 2026) · text copy line 21

BEFORE: …Reliability and Markets Committee ERCOT Public February 9-10, 2026 Non-Spinning Reserve Pricing in RTC • The RTM clears surplus NSRS yet is producing a shortage price. • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • 
QUOTE: Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well).
AFTER:  2 Shortage Prices in Non-Spin when System is Long 3 Notes on RA Through Markets • There are three fundamental designs that are intended to support resource adequacy in wholesale electric markets: • Energy Only (TX), Capacity Market, and Load Obligation. • Energy only and capacity markets are design…

### e44 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17) · text copy line 340

BEFORE: …ration of sustained scarcity 2 days (48 hours) $96,000 4 days (96 hours) $192,000 6 days (144 hours) $288,000 7 days (168 hours - WS Uri-scale) $336,000 6ofll E. Ouestion 3: How should the Ancillary Service Demand Curves (ASDC) be modified to better rellect scarcity and improve economic efficiency? 
QUOTE: The ASDCs were implemented as part of the launch of RTC+B beginning December 5, 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed to replicate the pricing outcomes of the ORDC.11
AFTER:  At the August 20,2026 Open Meeting during discussion of Project No. 34677, the Commission agreed with Commission Staff' s recommendation that the underlying design of ASDCs is no longer required to adhere to the prior directive. 12 Accordingly, ERCOT understands that alterations to the ASDCs may be…

### e45 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17) · text copy line 343 · heading above: 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed

BEFORE: …s (ASDC) be modified to better rellect scarcity and improve economic efficiency? The ASDCs were implemented as part of the launch of RTC+B beginning December 5, 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed to replicate the pricing outcomes of the ORDC.11 
QUOTE: At the August 20,2026 Open Meeting during discussion of Project No. 34677, the Commission agreed with Commission Staff' s recommendation that the underlying design of ASDCs is no longer required to adhere to the prior directive.
AFTER:  12 Accordingly, ERCOT understands that alterations to the ASDCs may be considered. ERCOT's forthcoming biennial report on the ORDC performed pursuant to 16 TAC § 25.505(e) will also analyze the efficacy, utilization, related costs, and contribution ofthe ASDCs so far to grid reliability in the ERCO…

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

### e56 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(a) · text copy line 2345 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …e points on the regression curve in 1 MW increments for any observed reserve level >= 3,000 MW and price >$0.01/MWh. These points form the AORDC. (7) ERCOT shall disaggregate the AORDC developed pursuant to paragraph (6) above into individual ASDCs for each Ancillary Service product as follows: (a) 
QUOTE: Using the required percentage of Reg-Up, the maximum percentages of RRS and ECRS, and the minimum quantities of required Non-Spin and ECRS, the quantities of each Ancillary Service product procured until the Minimum Contingency Level (MCL) is satisfied are calculated as follows:
AFTER:  If, RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ + NSMWMIN < MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRSPCTMAX * ECRSREQ RRSMW = RRSPCTMAX * RRSREQ NSMW = MCL - RUMW - RRSMW - ECRSMW Else, if RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSMWMIN + NSMWMIN > MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRS…

### e48 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages, page 165 (OCR), p. A-7, Table A3 · text copy line 9602

BEFORE: …t design. Table A3 shows the frequency, magnitude, and pricing of AS shortages in ERCOT since RTC go-live. Shortage conditions have been infrequent since go-live. This infrequency is consistent with the high levels of operating reserves in the last several years, as discussed throughout the report. 
QUOTE: NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern.
AFTER:  Table A3: Frequency, Magnitude, and Pricing of AS Shortages December 5, 2025, through February 2026 =>S)!"#A%%C'()*H',A#H)*;.'?CPH2 !"#A%%C'() *H',A#H -)./) M.1'2 !,H'CPH) 4R !,H'CPH)4STS) 89)WH')4R;<) !"#$ -$#$ #!0N#!04R ##$ %CD E.C/ 2 2 )CG E)%CG +DECE 2P 2P S.CE +,CD EEC. )S)CG In fact, rather t…

### e49 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages, page 165 (OCR), p. A-7, Table A3 (December 5, 2025, through February 2026) · ocr copy line 7025, OCR page 165

BEFORE: …e go-live. This infrequency is consistent with the high levels of operating reserves in the last several years, as discussed throughout the report. NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern. 
QUOTE: Table A3: Frequency, Magnitude, and Pricing of AS Shortages December 5, 2025, through February 2026 RTC Ancillary Service Shortages Ancillary # of Average Average MCPC Service Hours MW ($ per MWh) ECRS 4.0 214.6 78.0 NSRS 25.9 702.2 22.5 REGDN - - REGUP - - RRS 1.6 35.2 131.6
AFTER:  In fact, rather than going short on AS, ERCOT consistently goes /ong on NSRS. This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,°* when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (A…

### e50 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-8), after Figure A4 · text copy line 9666

BEFORE: …s currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4. 94 That is, everything except for Reg-Down 2025 State of the Market Report | A-7 / / Appendix: Real-Time Co-Optimization Figure A4: Illustration of Extended ASDC for NSRS 
QUOTE: From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average.
AFTER:  Thus, this extension of the ASDC for NSRS effectively increases demand for NSRS in the real-time market dispatch model. As discussed in the AS Methodology section, the NSRS plan is already vastly oversized, yet the ERCOT real-time market is designed to procure even more. In our updated Recommendati…

### e51 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, resource adequacy discussion (p. xi) · text copy line 1125

BEFORE: …nimum load from committed resources. Three changes are needed to address this misalignment: (i) eliminate the required linkage between the ASDCs and the aggregate ORDC, (ii) require that the ASDCs be aligned with the AS methodology instead, and (iii) require ERCOT to re-evaluate its AS methodology. 
QUOTE: Additionally, the VOLL underlying the ASDCs is substantially less than the VOLL implied by a 1-in-10 reliability standard. Even if deep shortages are capped at $5000, the lower segments of the ASDCs that price shallow shortages (which are by far the most frequent) could be based on a much higher VOLL. We recommend $35 to $40K per MWh based on recent studies.
AFTER:  Recommendations The performance of the ERCOT markets is critical because they facilitate efficient market operations to maintain reliability in the short term and produce the economic signals that govern long-term investment and retirement decisions. In an energy-only market like ERCOT, these signa…

### e52 · `imm-quarterly-fy2026-q3` · tier 2 · IMM Quarterly Report, FY2025-26 Q3 (July 2026)
locator: IMM Quarterly Report FY2025-26 Q3, Daily ORDC Reserve/Reliability Adders, ORDC Reserve Adders · text copy line 597

BEFORE: …_________________________________________________________________________________________________________________________________________________________________________________________________________________ Daily ORDC Reserve/Reliability Adders Average Values in FY2025-2026Q3 ORDC Reserve Adders 
QUOTE: With implementation of RTC, there is no longer an explicit shortage price adder calculated or produced by the market software. The energy price natively includes any shortage value produced by the ASDC via co-optimization.
AFTER:  As such, there is no information available to produce this chart going forward. Reliability Adders Month MAR APR MAY 16 17 18 $30 $27 $24 Adder ($/MWh) $21 $18 $15 $12 $9 $6 $3 $0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 19 20 21 22 23 24 25 26 27 28 29 30 31 Day of Month ERCOT IMM | Potomac Economics, …

### e53 · `imm-som-tac-2026-07` · tier 2 · IMM State of the Market presentation to TAC (2026-08-06)
locator: IMM presentation to TAC (August 13, 2026), slide 3, Summary of market pricing trends · text copy line 36

BEFORE: …spite 61% increase in the price of natural gas (YoY) • The implied heat rate (price of electricity divided by the price of gas) decreased by 28% (YoY) • Shortage pricing from the Operating Reserve Demand Curve (ORDC) was $0.02/MWh on average for the year, the lowest since the ORDC was implemented • 
QUOTE: Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal
AFTER:  © 2025 Potomac Economics 3 The all-in price of electricity was up slightly in 2025, mostly due to the price of natural gas Energy w/o Adders Electricity Cost ($ per MWh) $180 ORDC Adder Reliability Adder $160 Ancillary Services $140 Uplift Natural Gas Price $120 $10 $9 $8 $7 $6 $100 $5 $80 $4 $60 $…

### e54 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board item 18 (September 14-15, 2026), RUC look-ahead slide · text copy line 266

BEFORE: …ugh on its own. • Relying on short-start Resources - which typically do not dispatch until system-wide stored energy is already low - in place of longerlead Resources increases the risk of a deeper event. • RUC volume is high right now largely because of an exceptionally hot summer and record load. 
QUOTE: Some RUCs are avoidable with better inputs, especially how battery state of charge is represented, and through stronger AS Demand Curves (ASDCs) that encourage resources to self-commit - but not all.
AFTER:  • What would let ERCOT plan closer to real time: Stronger self-commitment through improvements of the ASDCs, the transition to Dynamic AS, and a better way to account for battery state of charge in commitment and dispatch. Key Takeaway: Shortening the look-ahead now is premature - until the market …

### e55 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendations, 2024-1a (p. 125) · text copy line 8856

BEFORE: …ens incentives to procure and provide the services that most effectively reduce reliability risk. Accordingly, we recommend removing the requirement for the ASDCs to aggregate to the AORDC and constructing each ASDC individually to reflect the reliability value of the corresponding reserve product. 
QUOTE: ERCOT lists "ASDC Review" as its top priority in its inventory of RTC Issues to Consider in 2026.
AFTER: 84 2024-1b: Set Parameters for AS Methodology According to Probabilistic Risks Since 2022, ERCOT has dramatically increased the volume of ancillary services procured in the market. This over-procurement stems from an AS Methodology that fails to reflect the probabilistic risks that operating reserve…

### e57 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6)(b), AORDC regression curve · text copy line 2327 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …mer 2026 σ None The standard deviation of the shifted LOLP distribution as published for Summer 2026 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (b) 
QUOTE: Using the results of paragraph (a) above, use regression methods to fit the following curve to the average reserve pricing outcomes for the various MW reserve levels: AORDC = (1 - pnorm(reserve level - 3000, μ*, σ*)) ∗ VOLL
AFTER:  The above variables are defined as follows: --------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Definition -------------- ------ ------------------------------------------------------------…

### e62 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(6)(b), variable table (μ*, σ*) · text copy line 2336 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------------------------------------------------------------------------ Variable Unit Definition -------------- ------ ----------------------------------------------------------------------------------------------------------------------------- 
QUOTE: μ* None The mean value used for the calculation of the AORDC as determined using the regression fit method described above. σ* None The standard deviation used for the calculation of the AORDC as determined using the regression fit method described above.
AFTER:  --------------------------------------------------------------------------------------------------------------------------------------------------- (c) Calculate points on the regression curve in 1 MW increments for any observed reserve level >= 3,000 MW and price >$0.01/MWh. These points form the …

### e58 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12(7)(a), MCL allocation cases · text copy line 2347 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …uct as follows: (a) Using the required percentage of Reg-Up, the maximum percentages of RRS and ECRS, and the minimum quantities of required Non-Spin and ECRS, the quantities of each Ancillary Service product procured until the Minimum Contingency Level (MCL) is satisfied are calculated as follows: 
QUOTE: If, RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ + NSMWMIN < MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRSPCTMAX * ECRSREQ RRSMW = RRSPCTMAX * RRSREQ NSMW = MCL - RUMW - RRSMW - ECRSMW Else, if RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSMWMIN + NSMWMIN > MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRSMWMIN RRSMW = RRSPCTMAX * RRSREQ - (RRSPCTMAX * RRSREQ + RUPCT * RUREQ - (MCL - ECRSMWMIN - NSMWMIN)) NSMW = NSMWMIN Otherwise, if RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ + NSMWMIN > MCL: RUMW = RUPCT * RUREQ RRSMW = RRSPCTMAX * RRSREQ - 0.5(RUPCT*RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ - (MCL - NSMWMIN)) ECRSMW = ECRSPCTMAX * ECRSREQ - 0.5(RUPCT*RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ - (MCL - NSMWMIN)) NSMW = NSMWMIN
AFTER:  The above variables are defined as follows: -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Definition -------------- ------ -------------------------------…

### e59 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3(5), proxy Ancillary Service Offers · text copy line 1988 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (5) 
QUOTE: For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available Ancillary Service MW capacity of all Resources by creating a proxy Ancillary Service Offer for qualified Resources as follows:
AFTER:  (a) The proxy Ancillary Service Offer shall be a linked Ancillary Service Offer across all Ancillary Service products for which a Resource is qualified to provide. For Generation Resources, the proxy Ancillary Service Offer MW shall be equal to the Resource's telemetered HSL. For ESRs, the proxy An…

### e63 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3(5)(c)(ii), proxy Ancillary Service Offer price floor for RRS · text copy line 2043 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …owing logic: (i) The proxy Ancillary Service Offer price floor for Reg-Up is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for Reg-Up that intersects with a quantity that is 95% of the Ancillary Service Plan for Reg-Up. 
QUOTE: (ii) The proxy Ancillary Service Offer price floor for RRS is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for RRS that intersects with a quantity that is 95% of the Ancillary Service Plan for RRS.
AFTER:  (iii) The proxy Ancillary Service Offer price floor for ECRS is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for ECRS that intersects with a quantity that is 95% of the Ancillary Service Plan for ECRS. (iv) The proxy A…

### e64 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3(5)(b), proxy offer price for Resources that are not RUC-committed · text copy line 1992 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: … the Resource's telemetered HSL. For ESRs, the proxy Ancillary Service Offer MW shall be equal to the difference between the Resource's telemetered HSL and LSL. For Load Resources, the proxy Ancillary Service Offer MW shall be equal to the Resource's telemetered Maximum Power Consumption (MPC). (b) 
QUOTE: For Resources that are not RUC-committed, the price in the proxy Ancillary Service Offer shall be set to:
AFTER:  (i) For Reg-Up and RRS, the maximum of: (A) The proxy Ancillary Service Offer price floor for Reg-Up or RRS, respectively; (B) The Resource's highest submitted Ancillary Service Offer price for Reg-Up or RRS, respectively; (C) The Resource's highest Ancillary Service Offer price for ECRS (submitted…

### e60 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17) · text copy line 360 · heading above: 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed

BEFORE: …ingly, ERCOT understands that alterations to the ASDCs may be considered. ERCOT's forthcoming biennial report on the ORDC performed pursuant to 16 TAC § 25.505(e) will also analyze the efficacy, utilization, related costs, and contribution ofthe ASDCs so far to grid reliability in the ERCOT Region. 
QUOTE: ERCOT's report will likely support the need to review and alter the ASDCs' design.
AFTER:  ERCOT looks forward to working with stakeholders, the Independent Market Monitor (IMM), and Commission Staff to evaluate potential changes to the ASDCs. F. Ouestion 4: What credit risk concerns should the Commission consider if either the SPM or the EPP were to be adjusted, and how should existing …

### e61 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages (p. A-7) · text copy line 9600

BEFORE: …ary mechanism for signaling the need for new capacity investment in the ERCOT market. These ASDCs effectively replace the ORDC price adder used to produce scarcity pricing in the previous market design. Table A3 shows the frequency, magnitude, and pricing of AS shortages in ERCOT since RTC go-live. 
QUOTE: Shortage conditions have been infrequent since go-live.
AFTER:  This infrequency is consistent with the high levels of operating reserves in the last several years, as discussed throughout the report. NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern. Table A3: …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e3, e4, e25): In real time, SCED picks energy dispatch and AS awards by maximizing bid-based revenues minus offer-based costs, subject to the ASDCs as well as power balance and network limits. [e2] The curves are meant to reflect the marginal reliability value of reserves, and they set the penalty price when the market goes short on a product. [e3] The DAM starts from the same ASDCs as the RTM. [e4] ERCOT must post the ASDCs by 0600 of the Day-Ahead, and reposts them if it changes the Operating Day AS Plan. [e25]
- **How it works #3** (cites e7, e8, e31, e32, e9, e33) FLAG number-not-in-quote: $250: The protocols define a Minimum Contingency Level (MCL) of 3,000 MW. [e7] For quantities up to the MCL, the maximum demand prices are Reg-Up at VOLL + 4,052, RRS at VOLL + 2,051, ECRS at VOLL + 50, and Non-Spin at VOLL. [e8] Beyond the MCL, Reg-Up takes evenly spaced 1 MW segments of the AORDC from the MCL down to the Reg-Up minimum price, then RRS does the same down to its minimum price. [e31] The current minimum prices are $250/MWh for Reg-Up and $100/MWh for RRS. [e32] The remaining 1 MW segments go to ECRS and Non-Spin alternately until both requirements are met, and any remaining segments priced above $0.01/MWh go to Non-Spin. [e9] Each ASDC is then represented by a linear approximation to its part of the AORDC. [e33]
- **How it works #5** (cites e34): RUC uses its own set of ASDCs. They must be substantively the same as the DAM/RTM curves, with one exception: in RUC the Non-Spin ASDC does not extend beyond the Non-Spin AS Plan for the hour. ERCOT posts the RUC ASDCs after each RUC run. [e34]
- **How it works #6** (cites e59, e64, e35, e63): The ASDCs also set the price floor on the proxy AS offers SCED creates from the available AS capacity of qualified Resources; for Resources that are not RUC-committed, the proxy offer price is at least that floor. [e59][e64] For Reg-Up, the floor is the lesser of $2,000 per MW per hour or the ASDC price at 95% of the Reg-Up AS Plan, minus $0.01 per MW per hour. [e35] The RRS floor is set the same way. [e63]
- **Formula #1** (cites e28, e26, e27): Step 1, historical pricing. For every SCED interval in the data window where on-line plus off-line reserves (RTOLCAP + RTOFFCAP) were under 10,000 MW [e28], ERCOT computes a reserve pricing outcome as (0.5 × (1 − pnorm(RTOLCAP − 3000, 0.5μ, 0.707σ)) + 0.5 × (1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ))) × (VOLL − min(System Lambda, 250)). [e26] RTOLCAP and RTOFFCAP are the real-time reserve capacity of on-line and off-line Resources; μ and σ are the mean and standard deviation of the shifted loss-of-load-probability (LOLP) distribution as published for Summer 2026. [e27] The data window runs from June 1, 2014 through August 31, 2025. [e28]
- **Formula #2** (cites e57, e62, e29): Step 2, the fitted curve. A regression fits AORDC = (1 − pnorm(reserve level − 3000, μ*, σ*)) × VOLL to the average pricing outcomes at each reserve level, where μ* and σ* are the fitted mean and standard deviation. [e57][e62] Points are calculated in 1 MW steps for reserve levels at or above 3,000 MW and prices above $0.01/MWh. [e29]
- **Formula #3** (cites e56, e7, e30, e58, e8) FLAG number-not-in-quote: 90%, 10 MW: Step 3, the split up to the MCL. The first 3,000 MW (the MCL) is shared out using a fixed percentage of the Reg-Up AS Plan, maximum percentages of the RRS and ECRS plans, and minimum MW for ECRS and Non-Spin. [e56][e7] The current parameter values are RUPCT (Reg-Up share) 90%, RRSPCTMAX 90%, ECRSPCTMAX 30%, ECRSMWMIN 40 MW and NSMWMIN 10 MW. [e30] The protocol computes the MCL shares in three cases, checked in this order. If the full shares (RUPCT × Reg-Up plan + RRSPCTMAX × RRS plan + ECRSPCTMAX × ECRS plan) plus NSMWMIN are below the MCL, Reg-Up, RRS and ECRS take their full shares and Non-Spin takes the rest of the MCL (MCL − Reg-Up − RRS − ECRS). Else, if the Reg-Up and RRS shares plus ECRSMWMIN plus NSMWMIN exceed the MCL, Reg-Up keeps its share, ECRS and Non-Spin get their minimums, and RRS is cut by the excess over (MCL − ECRSMWMIN − NSMWMIN). Otherwise (the full shares plus NSMWMIN exceed the MCL), Reg-Up keeps its share, Non-Spin gets NSMWMIN, and RRS and ECRS are each cut by half of the excess over (MCL − NSMWMIN). [e58] That first block of each product is priced at the maximum demand prices listed above. [e8]
- **Formula #4** (cites e9, e31): Step 4, beyond the MCL: the segment assignment described under How it works, ending with any leftover segments above $0.01/MWh going to Non-Spin. [e9][e31]
- **ERCOT context #1** (cites e13, e50, e42, e43): The IMM's 2025 report describes visible effects of the aggregation rule. The AORDC runs to 10,000 MW, but for much of the year the combined AS Plan for the four up-reserves is smaller. The leftover volume is currently added to the Non-Spin (NSRS) curve, so the real-time market buys more NSRS than the plan calls for. [e13] From December 5, 2025 through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan on average, per the IMM. [e50] In February 2026 the IMM told the Board that the RTM clears surplus NSRS yet produces a shortage price, and recommended stopping the ASDC at the AS Plan and then reformulating the ASDCs. [e42][e43]
- **ERCOT context #2** (cites e61, e49, e48, e53, e52): The IMM says shortage conditions have been infrequent since go-live. [e61] Over December 5, 2025 through February 2026, the IMM counts about 25.9 hours of NSRS shortage (average 702.2 MW, average MCPC $22.5/MWh), 4.0 hours of ECRS shortage (average 214.6 MW, $78.0/MWh) and 1.6 hours of RRS shortage (average 35.2 MW, $131.6/MWh), with none for Reg-Up or Reg-Down. [e49] NSRS had the most frequent shortages and the lowest penalty price, and about 45% of the NSRS shortage volume fell in Winter Storm Fern. [e48] In August 2026 the IMM told TAC that ASDC shortage pricing since RTC go-live has been minimal. [e53] There is no separate adder to track any more: the IMM notes the energy price natively includes any shortage value the ASDC produces through co-optimization. [e52]
- **ERCOT context #3** (cites e14, e20, e19, e15, e51): According to the IMM, ERCOT added the $15/MWh floor on AS shortages through NPRR 1269, and ERCOT argues it reduces the likelihood of real-time AS shortages that would prompt RUC commitments. [e14][e20] The IMM calls the resulting reserve policy excessively conservative and says it suppresses price signals. [e19] It recommends dropping the rule that the ASDCs must add up to the AORDC and instead building each curve from the reliability value of its own product. [e15] It also argues the VOLL behind the ASDCs is well below what a 1-in-10 standard implies and recommends $35,000 to $40,000 per MWh for the lower segments that price shallow shortages. [e51]
- **ERCOT context #4** (cites e54, e44, e45, e55): ERCOT's 2026 statements point toward a redesign. ERCOT staff told the Board in September 2026 that some RUCs could be avoided through stronger ASDCs that encourage self-commitment. [e54] In its September 17, 2026 comments in the offer-cap review (Project 59550), ERCOT says the ASDCs were designed to replicate ORDC pricing outcomes under a prior Commission directive, and that on August 20, 2026 the Commission agreed with Staff that the ASDC design no longer has to follow that directive. [e44][e45] The IMM reports that ERCOT lists "ASDC Review" as its top RTC issue for 2026. [e55]
- **Timeline #1** (cites e41, e40) FLAG number-not-in-quote: 2020, 4.4: - December 8, 2020: ERCOT Board approves NPRR1008 (RTC Day-Ahead Operations), whose Section 4.4.12 text set up the AORDC. [e41][e40] That 2020 text specified a data window of June 1, 2014 through December 31, 2023 for the AORDC. [e40]
- **Timeline #2** (cites e39, e37, e38) FLAG number-not-in-quote: 2025: - April 8, 2025: ERCOT Board recommends NPRR1269 (one opposing vote). [e39] During review, TCPA proposed carrying the $15 floor from RUC into the DAM and RTM, and Joint Consumers proposed $0 instead, for monitoring through 2026. [e37][e38]
- **Timeline #3** (cites e36) FLAG number-not-in-quote: 2025: - May 15, 2025: PUCT approves NPRR1269. [e36]
- **Timeline #4** (cites e44) FLAG number-not-in-quote: 2026: - December 5, 2025: ASDCs go live with RTC+B (per ERCOT's 2026 comments). [e44]
- **Timeline #5** (cites e43) FLAG number-not-in-quote: 2026: - February 9-10, 2026: IMM recommends to the Board stopping the ASDC at the AS Plan and reformulating the curves (a recommendation, not adopted). [e43]
- **Timeline #6** (cites e45): - August 20, 2026: the Commission agrees the ASDC design no longer has to replicate the ORDC (as reported in ERCOT's comments). [e45]
- **Timeline #7** (cites e46, e47) FLAG number-not-in-quote: $15,, $5,: - Pending: NPRR1309 (DRRS) would add a DRRS ASDC with a $10 per MW per hour floor and new minimum prices (ECRS $15, Non-Spin $5, DRRS $0.01/MWh). This language sits in "upon system implementation" boxes and is not in effect. [e46][e47]
- **Key facts #3** (cites e32) FLAG number-not-in-quote: $250, $100: - Minimum prices beyond the MCL (current): Reg-Up $250/MWh, RRS $100/MWh. [e32]
- **Key facts #7** (cites e27, e28): - AORDC data window: June 1, 2014 through August 31, 2025; LOLP parameters as published for Summer 2026. [e27][e28]
- **Key facts #8** (cites e13, e50): - AORDC length: 10,000 MW. Excess volume goes to Non-Spin (IMM 2025 report); nearly 1,400 MW of NSRS above plan on average, December 5, 2025 through February 2026. [e13][e50]
- **Key facts #9** (cites e25, e34): - Posting: DAM/RTM ASDCs by 0600 of the Day-Ahead; RUC ASDCs after each RUC run. [e25][e34]
- **Common confusion #2** (cites e10, e59, e35, e46): (Guidance) Keep three "floors" apart: the $15 ASDC floor (a demand-curve price over the AS Plan quantity) [e10]; the proxy AS offer floor (a supply-side floor on the proxy AS offers SCED creates from Resources' available AS capacity, at most $2,000 per MW per hour minus $0.01) [e59][e35]; and the pending $10 DRRS floor, which is approved text not yet implemented. [e46]
- **Questions #2** (cites e8, e31, e32) FLAG number-not-in-quote: $250: The protocols price quantities up to the MCL at VOLL + 4,052 for Reg-Up, above RRS (VOLL + 2,051), ECRS (VOLL + 50) and Non-Spin (VOLL). [e8] Beyond the MCL, Reg-Up also takes its AORDC segments first and has the highest minimum price ($250/MWh against $100 for RRS). [e31][e32]
- **Questions #4** (cites e13, e9, e50, e34): The up-reserve ASDCs must add up to a 10,000 MW AORDC. When the AS Plan is smaller than that, the extra volume is assigned to the Non-Spin curve, so SCED buys NSRS above plan. [e13][e9] The IMM measured nearly 1,400 MW above plan on average in the first months of RTC. [e50] RUC is different: its Non-Spin ASDC stops at the Non-Spin AS Plan. [e34]
- **Questions #6** (cites e10, e14, e19, e37, e38, e36) FLAG number-not-in-quote: 2025: No point on any ASDC can fall below $15 per MW per hour over the AS Plan quantity. [e10] According to the IMM, ERCOT introduced it through NPRR 1269 to avoid shortages that would lead operators to use RUC, and the IMM calls it part of an excessively conservative reserve policy that suppresses price signals. [e14][e19] In the stakeholder process TCPA proposed carrying the floor from RUC into the DAM and RTM, while Joint Consumers wanted $0 for monitoring through 2026; the PUCT approved NPRR1269 on May 15, 2025. [e37][e38][e36]
- **Questions #8** (cites e15, e43, e51) FLAG number-not-in-quote: 2026: It wants to drop the requirement that the ASDCs add up to the AORDC and build each ASDC from the reliability value of its own product. [e15] As a near-term step it told the Board in February 2026 to stop the ASDC at the AS Plan. [e43] It also recommends a much higher VOLL ($35,000 to $40,000 per MWh) for the segments that price shallow shortages. [e51]
- **Questions #10** (cites e52, e61, e49): Under RTC there is no explicit shortage adder; the energy price natively includes any shortage value produced by the ASDCs through co-optimization. [e52] To see scarcity you look at AS shortages and MCPCs instead, which the IMM reports have been infrequent since go-live (Table A3 covers December 5, 2025 through February 2026). [e61][e49]
- **Questions #12** (cites e45, e60, e54): That is now possible: ERCOT reports that on August 20, 2026 the Commission agreed the ASDCs no longer have to replicate the ORDC, and ERCOT says its forthcoming biennial ORDC report will likely support the need to review and alter the ASDC design. [e45][e60] ERCOT staff see stronger ASDCs as one way to avoid some RUCs by encouraging self-commitment. [e54] No redesign has been filed or approved in the saved sources.
- **Scenarios #5** (cites e42) FLAG number-not-in-quote: 2026: - The IMM's February 2026 Board slide calls this a shortage price while the RTM clears surplus NSRS. [e42]
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

