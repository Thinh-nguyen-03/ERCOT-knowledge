# Audit packet: Merit Order / Supply Stack (merit-order)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Review of Real-Time Market Outcomes, D. Aggregated Offer Curves · text copy line 2429

BEFORE: …s when such withholding is most likely to cause the real-time dispatch model to perceive a shortage. We recommend changes in this report to address these ECRS concerns going forward. D. Aggregated Offer Curves The next analysis compares the quantity and price of generation offered in 2023 and 2022. 
QUOTE: By averaging the amount of capacity offered at selected price levels, an aggregated offer stack can be assembled. Figure 8 provides the average aggregated generator offer stacks for the year in all hours, the peak load hour, and peak net load hour of the year.
AFTER:  This figure shows that: • 40% of the capacity was not dispatchable because it is below generators' Low Sustained Limit (LSL) and will produce at any price. • 30% of the capacity in 2023 was offered below zero from wind, solar, and other resources. These resources have the incentive to produce when …

### e2 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, first bullet · text copy line 1949

BEFORE: …ffered in 2025 and 2024. Figure 7 shows the average aggregated generator offer stacks for all hours of the year, the peak load hour, and the peak net load hour. The 2024 values have been adjusted because of methodological changes in how the aggregate offer stacks are formulated. The figure shows: • 
QUOTE: 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average.
AFTER:  • 35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits. 202…

### e3 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, third bullet · text copy line 1969

BEFORE: …o $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits. 2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 
QUOTE: 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet.
AFTER:  • Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024. The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025. Figure 7: Aggregated Generation Offer St…

### e4 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, second bullet · text copy line 1955

BEFORE: …al changes in how the aggregate offer stacks are formulated. The figure shows: • 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average. • 
QUOTE: 35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits.
AFTER:  2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT gene…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7, Real-Time Sequence Methodology, introductory paragraph · text copy line 1365 · heading above: 6.5.7 Real-Time Sequence Methodology

BEFORE: …Section outlines the programmatic and manual processes employed by ERCOT to simultaneously achieve power balance (minimizing the use of Regulation Service), determine Ancillary Service awards, and manage congestion while operating within the constraints of the system at economically optimized cost. 
QUOTE: The Real-Time Sequence describes the key system components and inputs that are required to support the SCED process, which produces the Locational Marginal Prices (LMPs), Base Points, Real-Time Market Clearing Prices for Capacity (MCPCs), and Ancillary Service awards while meeting transmission system constraints.
AFTER:  Section 6.5.7.3, Security Constrained Economic Dispatch, provides further details regarding additional components and inputs and ex-ante mitigation. 6.5.7.1 Real-Time Sequence (1) The Real-Time Sequence consists of multiple interdependent processes that are driven by telemetry data and the network …

### e6 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Congestion discussion, real-time market dispatch · text copy line 3693

BEFORE: …sential function of any electricity market is to efficiently manage power flows on the transmission networks. Congestion management occurs as the markets coordinate the dispatch of generation to ensure that the resulting power flows do not exceed the operating limits of the transmission facilities. 
QUOTE: This coordination occurs through the real-time market dispatch software, which optimizes based on each generator's energy offer curve and incorporating each generator's impact on constraint violations. The result of this market dispatch is a set of locational prices that vary across the network and resulting congestion costs that are collected from participants.
AFTER:  Congestion exists most of the time - at least one constraint was binding (with the dispatch flow at the constraint's limit) in real time 78% of the time in 2023. The locational difference in prices caused by congestion can result in costs or risks for parties in long-term power contracts who are li…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 4. Price Spike Impacts · text copy line 1629

BEFORE: …butes to high online reserves throughout the year. We further discuss the current surplus of operating reserves in ERCOT in Chapter II. As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day. 
QUOTE: During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes.
AFTER:  Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 22% in 2024. Price spikes also occurred relatively frequently during the morning ramp hours, i.e., between 6 a.m. and 8 a.m., but they accounted for only 7.5% of the total in 2025, down from 8.9% in 2024. C…

### e8 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Recommendations, Establish Real-Time Offer Requirements, Penalties, and Proxy Pricing · text copy line 1726

BEFORE: …2024-4 Establish Real-Time Offer Requirements, Penalties, and Proxy Pricing QSEs are responsible for submitting offer curves that specify the prices and quantities at which their resources are willing to provide energy and, with the implementation of RTC, ancillary services in the real-time market. 
QUOTE: Under the current market design, if a QSE submits an incomplete energy offer curve, ERCOT substitutes a proxy offer to maintain a solvable dispatch solution. These proxy offers are set at $1,500 for IRRs and at the system-wide offer cap (SWCAP) for non-IRRs, creating steep, non-competitive offer curves that lead to inefficient and costly dispatch outcomes.
AFTER:  With the upcoming implementation of RTC, the potential impacts of incomplete offers could become more significant. Whereas today, ancillary services are only procured in the day-ahead market, under RTC, ancillary services and energy will be co-optimized every 5 minutes, making complete real-time of…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, fourth bullet · text copy line 1975

BEFORE: …he Market Report | 9 / / Review of Real-Time Market Outcomes • 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet. • 
QUOTE: Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024. The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025.
AFTER:  Figure 7: Aggregated Generation Offer Stack - Annual, Peak and Net Peak Load !""#$#%C'#(#$)G+,(C-).)/+G0C1'O3 ""! "!! *! F! (! ?"!!!@ABCH7 ?(C@?"!!! ?a"!EFd7e0>W0?(C ?!@?a"!EFd7e fg! KOLWL09A9 '! C! B! A! #! "! ! #!#B #!#C HII-.L0HNOP.4O05SSOP #!#B #!#C 7O.809W.;0<W-P #!#B #!#C 7O.80=O>09W.;0<W-P F…

### e12 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: Chapter 2, Electric, System and Unit Dispatch (NYISO illustration, Figure 2-6) · text copy line 8105

BEFORE: …tps://eqrreportviewer.ferc.gov. 2024 ENERGY PRIMER n 56 n FEDERAL ENERGY REGULATORY COMMISSION Figure 2-6: Market Supply Curve for NYISO (Illustrative) Source: Hitachi Energy, Velocity Suite114 This is typically done by automatic generation control (AGC) to change the generation dispatch as needed. 
QUOTE: In general, dispatch occurs based on the cost of generation from given resources, with the lowest-cost resources dispatched first and the higher-cost resources dispatched last. The chart above is a depiction of the market supply curve for the New York Independent System Operator (NYISO). This is also commonly called the supply stack.
AFTER:  In it, all the generating units in the New York market are shown, sorted according to their marginal cost of production. Their cost of production is shown on the vertical axis in terms of dollars per MWh. The cheapest units to run are to the left and the most expensive to the right. Dispatch in New…

### e13 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: Chapter 2, Electric, RTO/ISO energy markets (general description) · text copy line 9258

BEFORE: …or the production and consumption of electricity one day before the operating day. Real-Time Market balances differences between the Day-Ahead scheduled amounts of electricity needed and the actual Real-Time load requirements Source: ISO-NE recognizing physical resource and transmission limitation. 
QUOTE: The overall market price for electricity is determined by the highest offer accepted. However, transmission limitations may require the market to adjust the offers selected, which can change the price for different locations in the RTO/ISO - the locational marginal price (LMP).
AFTER:  The RTO/ISO markets calculate the LMP at each location on the power grid. The LMP reflects the marginal cost of serving load at the specific location, given the set of resources that are being dispatched and the limitations of the transmission system. LMP has three elements: an energy charge, a con…

### e14 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Energy Offer Curve · text copy line 882

BEFORE: …possible continuity of service and maintaining the integrity of the ERCOT System. Energy Imbalance Service The difference between the amount of energy cleared in the Day-Ahead Market (DAM) and through trades and the amount of delivery of that energy in the Real-Time Market (RTM). Energy Offer Curve 
QUOTE: A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity.
AFTER:  Energy Storage Resource (ESR) (see Resource) Energy Storage System (ESS) A facility, process, or device(s) that receives electric energy and stores it, in any form, for the purpose of later releasing electrical energy. Energy Trade A QSE-to-QSE financial transaction that transfers responsibility fo…

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, Energy Offer Curve, paragraph (1) · text copy line 1404 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: … and Minimum-Energy Offer Generic Caps. A QSE may file verifiable unit-specific costs for a Resource at any time, but it is not required to file those costs only because of a DAM commitment. The most recent approved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) 
QUOTE: The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations.
AFTER:  (2) A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetr…

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (1)(c) · text copy line 1430 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …ffer Curve is submitted in a subsequent Adjustment Period. 4.4.9.3.1 Energy Offer Curve Criteria (1) Each Energy Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) 
QUOTE: A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;
AFTER:  (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage…

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh.
AFTER:  No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amoun…

### e18 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(g) · text copy line 1438 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …s at the same price or quantity; (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); (g) 
QUOTE: Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and
AFTER:  (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 143…

### e19 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Fuel Index Price (FIP) · text copy line 1103

BEFORE: …cy Response includes, but may not be limited to, capacity from duct firing, auxiliary boilers, and other methods that do not immediately respond, arrest, or stabilize frequency excursions following a disturbance without secondary frequency response or instructions from ERCOT. Fuel Index Price (FIP) 
QUOTE: The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu).
AFTER:  ERCOT shall issue a Market Notice disclosing the name of the ERCOT-selected source for the average daily index prices used to calculate FIP. In the event that the ERCOT-selected source becomes unavailable, or ERCOT determines that the source has become unsuitable for the intended purpose, ERCOT may…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.7, Energy Bid/Offer Curve, paragraph (1) · text copy line 1814 · heading above: 4.4.9.7 Energy Bid/Offer Curve

BEFORE: …Section 4.4.9.6.1. The QSE may then resubmit the bid within the appropriate market timeline. (3) ERCOT shall continuously validate DAM Energy Bids and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy Bids. 4.4.9.7 Energy Bid/Offer Curve (1) 
QUOTE: The Energy Bid/Offer Curve represents the willingness of a QSE representing an ESR to buy energy at or below a certain price and sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations.
AFTER:  ERCOT must validate each Energy Bid/Offer Curve in accordance with Section 4.4.9.7.2, Energy Bid/Offer Curve Validation, before it can be used in any ERCOT process. (2) A QSE may submit Resource-Specific Energy Bid/Offer Curves to ERCOT. Such Energy Bid/Offer Curves will be bounded in the DAM for e…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.7.1, Energy Bid/Offer Curve Criteria, paragraph (1)(c) · text copy line 1844 · heading above: 4.4.9.7.1 Energy Bid/Offer Curve Criteria

BEFORE: … (b) The ESR represented by the QSE from which the bid and offer would be provided; (c) A monotonically non-decreasing curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity. 
QUOTE: Negative MW values cover the charging MW range, and the positive MW values cover the discharging MW range. The price points corresponding to the charging MW range represent the not-to-exceed bid prices to consume energy, and the price points corresponding to the discharging MW range represent the offer prices to sell energy;
AFTER:  (d) The first and last hour of the offer; (e) The expiration time and date of the offer; (2) An Energy Bid/Offer Curve shall be bounded by -$250.00 per MWh and either the DASWCAP or RTSWCAP depending on the timing of the submission in dollars per MWh. The ERCOT systems must allow ERCOT to enter ESR…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.7, paragraph (7) · text copy line 1834 · heading above: 4.4.9.7 Energy Bid/Offer Curve

BEFORE: … A QSE may withdraw an Energy Bid/Offer Curve if: (a) An Output Schedule is submitted for all intervals for which an Energy Bid/Offer Curve is withdrawn; or (b) The ESR is forced Off-Line and notifies ERCOT of the Forced Outage by changing the Resource Status appropriately and updating its COP. (7) 
QUOTE: At the time of SCED execution, if a valid Energy Bid/Offer Curve or Output Schedule does not exist for an ESR that has a status of On-Line, then ERCOT shall notify the QSE and create a proxy Energy Bid/Offer Curve priced at -$250/MWh for the portion of the curve less than zero MW, and priced at the RTSWCAP for the portion of the curve greater than zero MW.
AFTER:  4.4.9.7.1 Energy Bid/Offer Curve Criteria (1) Each Energy Bid/Offer Curve must be reported by a QSE representing an ESR and must include the following information: (a) The selling QSE; (b) The ESR represented by the QSE from which the bid and offer would be provided; (c) A monotonically non-decreas…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) table · text copy line 1657 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- 
QUOTE: Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh
AFTER:  -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Un…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …----------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor.
AFTER:  The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh G…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) formula · text copy line 1511 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: 
QUOTE: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]
AFTER:  Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 If a QSE has not submitted an Energy O…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable definitions (GIHR) · text copy line 1530 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | GIHR _(q, r) | MMBtu/MWh | Generic Incremental Heat Rate-The generic, single-value, incremental heat rate. 
QUOTE: For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1) · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC).
AFTER:  For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has …

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (14)(b)(i) · text copy line 2240

BEFORE: …---------+ (b) The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) 
QUOTE: Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01…

### e29 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(a) · text copy line 2229

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (14) The two-step SCED methodology referenced in paragraph (1) above is: (a) 
QUOTE: The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints.
AFTER:  Energy Offer Curves for all On-Line Generation Resources, Energy Bid/Offer Curves for all On-Line ESRs, and RTM Energy Bids from available CLRs, whether submitted by QSEs or created by ERCOT under this Section, are used in the SCED to determine "Reference LMPs." +-----------------------------------…

### e30 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 50 (OCR), E. Aggregated Offer Curves · text copy line 2290

BEFORE: …on Offer Stack - Annual and Peak This figure shows that in both periods, as in previous years, the largest amount of capacity was not dispatchable because it is below generators' Low Sustainable Limit (LSL) and is a price- 2022 State of the Market Report | 19 / / Review of Real-Time Market Outcomes 
QUOTE: taking (i.e., it will produce at any price). This quantity was 42% of the available capacity in 2022.
AFTER:  This amount increases under peak conditions as more generators are online. Roughly one quarter of the capacity in 2022 was offered below zero from wind, solar, and other resources. These resources have the incentive to produce when prices are negative because many of them receive production tax cre…

### e31 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 49 (OCR), D. Aggregated Offer Curves · text copy line 2435

BEFORE: …23 and 2022. By averaging the amount of capacity offered at selected price levels, an aggregated offer stack can be assembled. Figure 8 provides the average aggregated generator offer stacks for the year in all hours, the peak load hour, and peak net load hour of the year. This figure shows that: • 
QUOTE: 40% of the capacity was not dispatchable because it is below generators' Low Sustained Limit (LSL) and will produce at any price.
AFTER:  • 30% of the capacity in 2023 was offered below zero from wind, solar, and other resources. These resources have the incentive to produce when prices are negative because most of them receive production tax credits. • 18% of the capacity was priced at levels between zero and a value equal to 10 tim…

### e32 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 46 (OCR), D. Aggregated Offer Curves · text copy line 2816

BEFORE: … and price of generation offered in 2024 and 2023. Figure 6 provides the average aggregated generator offer stacks for the year in all hours, the peak load hour, and peak net load hour of the year. 2024 State of the Market Report | 7 / / Review of Real-Time Market Outcomes This figure shows that:  
QUOTE: 36% of real-time generation capacity was not dispatchable because it is below generators' Low Sustained Limit (LSL).
AFTER:   32% of real-time generation capacity was offered at less than or equal to $0, primarily from wind and solar resources. These resources have the incentive to produce even when prices are negative because many of them receive federal production tax credits.  16% of the capacity was priced at level…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 31 (OCR), E. Aggregated Offer Curves · text copy line 1945

BEFORE: …*H, J./ MHN OPN MH4 *R, *RS OR7 8.P 9:; <=> ?.: E. Aggregated Offer Curves The next exhibit compares the quantity and price of generation offered in 2025 and 2024. Figure 7 shows the average aggregated generator offer stacks for all hours of the year, the peak load hour, and the peak net load hour. 
QUOTE: The 2024 values have been adjusted because of methodological changes in how the aggregate offer stacks are formulated.
AFTER:  The figure shows: • 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average. • 35% of real-time generation capacity was offered at less tha…

### e34 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 12 (OCR), Executive Summary, drivers of market prices · text copy line 642 · heading above: 78.3 GW on December 23, 2022, and subsequently broken on January 16, 2024, with a winter

BEFORE: …, far more is transacted in the day-ahead market or bilaterally). This is because real-time prices are the principal driver of prices in the day-ahead and forward markets. There are two primary drivers of market prices: natural gas prices and the number of hours of supply shortages during the year. 
QUOTE: Electricity prices will be correlated with natural gas prices in a well-functioning market because fuel costs represent the majority of most suppliers' marginal production costs, and natural gas units are generally on the margin in ERCOT.
AFTER:  Average Annual Real-Time Energy Market Prices by Zone Natural gas prices declined more than 60% from 2023 to 2022, but the load-weighted average energy prices fell only 13.3%. This is largely because of the adverse effects of the ECRS implementation described in this report. Absent these effects, w…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 25 (OCR), Implied Heat Rates · text copy line 1398

BEFORE: …ift costs. • Uplift associated with FFSS increased 36% from $33.8 million in 2024 to $45.9 million in 2025. This increase resulted from a 26% increase in total MW procured and a 36% increase in the offer cap for the 2024-2025 FFSS season relative to the 2023-2024 FFSS season.3 2. Implied Heat Rates 
QUOTE: Historically, the real-time price of electricity has been directly correlated with the fuel price for the marginal generation technology, which in ERCOT is usually natural gas.
AFTER:  To assess the competitiveness of the real-time power market at prevailing fuel costs, we calculate an implied heat rate, a market-based indicator of the fuel efficiency a gas generator would need to break 2 3 The reliability adder uses the dispatch software to simulate the system lambda without RUC…

### e36 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 47 (OCR), E. Real-Time Prices Adjusted for Fuel Price Changes · text copy line 2897

BEFORE: …tate of the Market Report / / Review of Real-Time Market Outcomes E. Real-Time Prices Adjusted for Fuel Price Changes Historically, the real-time price of electricity was directly correlated with the price of fuel for the marginal generation technology, which for ERCOT is most commonly natural gas. 
QUOTE: Over time, other factors have weakened the connection between the prices of natural gas and electricity. Figure 6 highlighted that the significant deployment of zero marginal cost generation like wind and solar have resulted in hundreds of hours prices at or below $0 per MWh.
AFTER:  Conversely, shortage pricing induced by the ORDC results in hundreds of hours per year of prices higher than the marginal cost of natural gas generators. To summarize the separation between electricity and natural gas prices, we produce an "implied marginal heat rate" that is calculated by dividing…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 13 (OCR), Executive Summary · text copy line 777

BEFORE: … resources are needed less often, so the price of electricity was frequently set by lowercost resources. Second, the high level of operating reserves directly resulted in a low frequency of shortage pricing. Together, these supply-side trends limited the increase in the all-in price of electricity. 
QUOTE: ESRs are particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp.
AFTER:  In recent years, as solar development increased dramatically, these ramp periods corresponded with a high frequency of price spikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in t…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 13 (OCR), Executive Summary · ocr copy line 436, OCR page 13

BEFORE: …et. In 2025, the price of natural gas increased by 61%, but the all-in price of electricity increased by less than 14%. This disparity reflects the supply-and-demand fundamentals in ERCOT. The surplus of supply in ERCOT put downward pressure on electricity prices relative to gas prices in two ways. 
QUOTE: First, expensive gas peaking resources are needed less often, so the price of electricity was frequently set by lower- cost resources.
AFTER:  Second, the high level of operating reserves directly resulted in a low frequency of shortage pricing. Together, these supply-side trends limited the increase in the all-in price of electricity. ESRs are particularly likely to set the price of electricity during the morning demand ramp and evening …

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 13 (OCR), Executive Summary · text copy line 779

BEFORE: …ce of electricity during the morning demand ramp and evening solar down-ramp. In recent years, as solar development increased dramatically, these ramp periods corresponded with a high frequency of price spikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. 
QUOTE: In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT's capability to manage the system's ramp needs.
AFTER:  Ancillary Services The most noteworthy development for ancillary services was the implementation of RTC in December. Resources can now sell ancillary services directly into the real-time market and ERCOT optimizes its utilization of resources for satisfying the system's energy and ancillary service…

### e40 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 162 (OCR), Appendix, price duration curve discussion · text copy line 6093 · heading above: 25.505 in PUC Project No. 51871 (51871 Order), which modifies the value of the

BEFORE: …gy market for 2019 through 2021, with 2019 showing the most shortage pricing hours since the nodal market implementation before the extreme impacts of Winter Storm Uri in 2021. The prices in this figure are the hourly ERCOT average prices derived by load weighting the zonal settlement point prices. 
QUOTE: Negative ERCOT-wide prices may occur when wind is the marginal generation.
AFTER:  More installed wind generation and additional transmission infrastructure led to increased occurrences of negative prices over the past few years. In 2021, there were 176 hours with ERCOT-wide prices at or below zero, an increase from the 77 hours in 2020. Figure A7 represents a price duration curv…

### e41 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 52 (OCR), E. Aggregated Offer Curves · text copy line 2342

BEFORE: …e of generation offered in 2021 to that offered in 2020. By averaging the amount of capacity offered at selected price levels, an aggregated offer stack can be assembled. Figure 16 provides the average aggregated generator offer stacks for the entire year, as well as the peak load hour of the year. 
QUOTE: This figure shows that in both periods, as in previous years, the largest amount of capacity is not dispatchable because it is below generators' Low Sustainable Limit (LSL) and is a price-taking portion of the offer stack.
AFTER:  The second largest share of capacity is priced at levels between zero and a value equal to 10 times the daily natural gas price (known as the Fuel Index Price, or FIP): $(10*FIP). This price range represents the incremental fuel price for the vast majority of the ERCOT generation fleet. Figure 16: …

### e42 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4, pending-change box · text copy line 1501 · heading above: 4.4.9.4 Mitigated Offer Cap and Mitigated Offer Floor
FLAG pending-box: | [NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:] |
BEFORE: …o the DASWCAP that was used to clear the DAM, and the VOLL shall be set to the maximum value VOLL that was effective for the Operating Day. 4.4.9.4 Mitigated Offer Cap and Mitigated Offer Floor +-----------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:]
AFTER:  | | | | 4.4.9.4 Mitigated Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 13 (OCR), Executive Summary · text copy line 770

BEFORE: …oad that transact through the ERCOT wholesale market, i.e., the cost of energy, reserves, and any uplift costs. Energy is the main component of the all-in price of electricity and is usually heavily influenced by the price of natural gas, the most commonly used fuel in the thermal generation fleet. 
QUOTE: In 2025, the price of natural gas increased by 61%, but the all-in price of electricity increased by less than 14%.
AFTER:  This disparity reflects the supply-and-demand fundamentals in ERCOT. The surplus of supply in ERCOT put downward pressure on electricity prices relative to gas prices in two ways. First, expensive gas peaking resources are needed less often, so the price of electricity was frequently set by lowerco…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e12, e1): In general terms, a supply stack (merit order) ranks generating units by marginal cost of production, cheapest first. FERC's staff primer describes dispatch that way and calls the market supply curve "the supply stack", illustrated for NYISO rather than ERCOT. [e12] The Nodal Protocols and the IMM State of the Market reports saved here do not use the term "merit order" for the supply stack (see Open items); the closest ERCOT concept is the IMM's aggregated offer stack, assembled by averaging the amount of capacity offered at selected price levels and shown for all hours of the year, the peak load hour and the peak net load hour. [e1] This topic uses the offer stack as ERCOT's version of the merit order: capacity ranked by offer price, not by cost.
- **How it works #2** (cites e14, e15, e16, e17, e18, e19): What an offer curve is. An Energy Offer Curve is a proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. [e14] It represents the QSE's willingness to sell at or above a price and quantity in the DAM, or to be dispatched by SCED in Real-Time. [e15] A curve may have no more than ten price/quantity pairs. [e16] Its price must be within -$250 per MWh and either the DASWCAP or the RTSWCAP depending on when it is submitted. [e17] Offers also carry the percentage of FIP and FOP used for generation above LSL, with the percentages summing to no more than 100%. [e18] FIP is the daily midpoint or average of natural gas prices for the Katy area, in $/MMBtu. [e19]
- **How it works #3** (cites e20, e21, e22, e37) FLAG number-not-in-quote: 2025: Storage. An ESR submits an Energy Bid/Offer Curve, in which negative MW values are the charging range with not-to-exceed bid prices and positive MW values are the discharging range with offer prices. [e20][e21] If an On-Line ESR has no valid curve at SCED execution, ERCOT creates a proxy curve priced at -$250/MWh for the portion below zero MW and at the RTSWCAP above zero MW. [e22] In the IMM's 2025 report ESRs are "particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp." [e37]
- **How it works #4** (cites e27, e24, e23, e29, e28): Mitigation bounds the stack. In Real-Time, offers may be mitigated in SCED using a Mitigated Offer Cap [e27] and a Mitigated Offer Floor, which is category-specific: for example -$250/MWh for nuclear, hydro and ESR, -$20/MWh for coal, combined cycle and gas/oil steam and combustion turbines, -$100/MWh for wind, and -$50/MWh for PV, QF and other. [e24][e23] SCED runs in two steps: the first finds Reference LMPs observing only Competitive Constraints, and the second bounds each Energy Offer Curve at the lesser of the Reference LMP or the appropriate Mitigated Offer Floor. [e29][e28]
- **Formula #1** (cites e25, e26, e42): The Mitigated Offer Cap for a Generation Resource at each point of its curve is the larger of two terms: the generic incremental heat rate times the greater of FIP and the weighted average fuel price, or the verifiable incremental heat rate times a calculated fuel price plus variable O&M. [e25] The generic incremental heat rate is set to 10.5 MMBtu/MWh for Resources with a Commercial Operations Date on or before January 1, 2004 and 14.5 for later Resources. [e26] This is the current text; a pending box (NPRR1325, upon system implementation of PGRR145) would replace Section 4.4.9.4, and is not the rule in force. [e42]
- **ERCOT context #1** (cites e4, e3, e7, e39): The IMM says the capacity offered at or below $0 is primarily wind and solar, and that the zero-to-10-times-FIP range is the incremental fuel price for the vast majority of the fleet. [e4][e3] In the evening ramp, when solar production ramps down, SCED often dispatches quick-start gas or ESRs with high-priced offer curves, which produces predictable price spikes. [e7] The IMM reports that in summer 2025 price spikes were 40% less frequent than in summer 2024 as additional ESR capacity improved ERCOT's ability to manage ramp needs. [e39]
- **ERCOT context #2** (cites e34, e35, e36, e40, e38, e13) FLAG number-not-in-quote: 2025: Who sets price. The IMM says natural gas units are generally on the margin in ERCOT and that real-time prices have historically been directly correlated with the fuel price for the marginal generation technology, usually natural gas. [e34][e35] It also says other factors have weakened that connection: zero marginal cost wind and solar have produced hundreds of hours at or below $0. [e36] Negative ERCOT-wide prices may occur when wind is the marginal generation. [e40] For 2025 the IMM said expensive gas peaking resources were needed less often, so the price was frequently set by lower-cost resources. [e38] No saved source gives the share of intervals set by each fuel or resource type (see Open items). By contrast, FERC's general description of RTO/ISO markets says the overall market price is determined by the highest offer accepted, adjusted for transmission limits into locational prices. [e13]
- **Timeline #1** (cites e30, e31, e32, e2): Share of real-time generation capacity not dispatchable because it is below LSL, as stated by the IMM in each year's report: [e30][e31][e32][e2]
- **Timeline #2** (cites e30): - 2022: 42% of available capacity. [e30]
- **Timeline #3** (cites e31) FLAG number-not-in-quote: 2023: - 2023: 40%. [e31]
- **Timeline #4** (cites e32, e2, e33): - 2024: 36% in the 2024 report; restated as 27% in the 2025 report after the IMM changed how aggregate offer stacks are formulated. [e32][e2][e33]
- **Timeline #5** (cites e2): - 2025: 22%, which the IMM says indicates lower committed thermal capacity on average. [e2]
- **Timeline #6** (cites e41) FLAG number-not-in-quote: 2021: The IMM's 2021 report already described the largest capacity block as below LSL and price-taking. [e41]
- **Key facts #2** (cites e2, e4, e3, e9, e33): - 2024 comparison as restated in the 2025 report: 27% below LSL, 32% at or below $0, 23% in the fuel-price band, 19% above. [e2][e4][e3][e9][e33]
- **Key facts #5** (cites e16, e17): - Energy Offer Curves: at most ten price/quantity pairs, price range from -$250 up to the applicable system-wide cap. [e16][e17]
- **Say it like this #1** (cites e4, e3, e7, e35, e40, e37): (Guidance) The IMM describes ERCOT's offer stack by price band: offers at or below $0 are mostly wind and solar, the zero-to-10-times-gas-price band is the incremental fuel price for most of the fleet, and in the evening ramp SCED often dispatches quick-start gas and batteries with high-priced offers. [e4][e3][e7] Gas is usually on the margin, but not always: wind can set a negative price and, per the IMM, ESRs are likely to set price in the ramps. [e35][e40][e37]
- **Common confusion #1** (cites e4, e2, e6, e33): (Guidance) The stack is by offers, not by cost: offers can be at or below $0 for reasons other than fuel cost (tax credits), and units below LSL are in the fleet but not dispatchable. [e4][e2] Also, ERCOT's dispatch produces locational prices that vary across the network, so price is not just where demand crosses a single system-wide curve. [e6] Percent shares from different IMM reports are not strictly comparable: the 2025 report restated 2024 for a methodology change. [e33]
- **Questions #8** (cites e17, e28) FLAG number-not-in-quote: 6.5, 7.3: An Energy Offer Curve must be within -$250 per MWh and the applicable system-wide cap. [e17] In SCED Step 2, curves are bounded at the lesser of the Reference LMP or the Mitigated Offer Floor, and curves subject to mitigation under the competitiveness criteria are capped as described in np-06 6.5.7.3. [e28]
- **Questions #10** (cites e34, e43, e38): The IMM says electricity prices should correlate with gas prices because fuel is most of marginal cost and gas units are generally on the margin. [e34] In 2025, it says, gas rose 61% but the all-in price rose less than 14%, and it says expensive gas peakers being needed less often was one reason. [e43][e38]
- **Questions #12** (cites e21): An ESR's single curve covers charging and discharging, with negative MW being charging bids and positive MW discharging offers. [e21]
- **Link to energy-offer-curve** (cites e1, e6): composed-of Energy Offer Curve: The IMM's aggregated offer stack averages the capacity offered at selected price levels, and the real-time dispatch optimizes based on each generator's energy offer curve. [e1][e6]
- **Link to sced** (cites e5, e6): used-in SCED (Security-Constrained Economic Dispatch): SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
- **Link to natural-gas-price** (cites e3): affects Natural Gas Prices (Henry Hub): The IMM reports the share of capacity priced between zero and 10 times the daily natural gas price. [e3]
- **Link to resource-mix** (cites e4): determines ERCOT Resource Mix: The IMM says the capacity offered at or below $0 is primarily associated with wind and solar resources. [e4]
- **Link to net-load** (cites e1) FLAG number-not-in-quote: 2023: related Net Load: The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- **Link to offer-cap** (cites e8) FLAG number-not-in-quote: 2024: related Offer Caps (HCAP / LCAP / SWCAP): In the 2024 IMM report's description of the then-current design, proxy offers for incomplete curves were set at the system-wide offer cap for non-IRRs. [e8]
- **Link to market-power-mitigation** (cites e27, e24): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Energy Offer Curves and ESR Energy Bid/Offer Curves can be mitigated in SCED using a Mitigated Offer Cap and a Mitigated Offer Floor. [e27][e24]
- **Link to energy-storage-resource** (cites e21): related Energy Storage Resource (ESR): ESRs submit a single Energy Bid/Offer Curve whose negative MW range is charging and positive MW range is discharging. [e21]
- **Link to negative-prices** (cites e4, e40): related Negative Prices: The IMM says wind and solar offer at or below $0 because many receive production tax credits, and that negative ERCOT-wide prices may occur when wind is the marginal generation. [e4][e40]

