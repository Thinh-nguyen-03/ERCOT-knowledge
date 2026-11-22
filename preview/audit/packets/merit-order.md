# Audit packet: Merit Order / Supply Stack (merit-order)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Review of Real-Time Market Outcomes, D. Aggregated Offer Curves · text copy line 2429

BEFORE: …s when such withholding is most likely to cause the real-time dispatch model to perceive a shortage. We recommend changes in this report to address these ECRS concerns going forward. D. Aggregated Offer Curves The next analysis compares the quantity and price of generation offered in 2023 and 2022. 
QUOTE: By averaging the amount of capacity offered at selected price levels, an aggregated offer stack can be assembled. Figure 8 provides the average aggregated generator offer stacks for the year in all hours, the peak load hour, and peak net load hour of the year.
AFTER:  This figure shows that: • 40% of the capacity was not dispatchable because it is below generators' Low Sustained Limit (LSL) and will produce at any price. • 30% of the capacity in 2023 was offered below zero from wind, solar, and other resources. These resources have the incentive to produce when …

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

### e8 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Recommendations, Establish Real-Time Offer Requirements, Penalties, and Proxy Pricing · text copy line 1726

BEFORE: …2024-4 Establish Real-Time Offer Requirements, Penalties, and Proxy Pricing QSEs are responsible for submitting offer curves that specify the prices and quantities at which their resources are willing to provide energy and, with the implementation of RTC, ancillary services in the real-time market. 
QUOTE: Under the current market design, if a QSE submits an incomplete energy offer curve, ERCOT substitutes a proxy offer to maintain a solvable dispatch solution. These proxy offers are set at $1,500 for IRRs and at the system-wide offer cap (SWCAP) for non-IRRs, creating steep, non-competitive offer curves that lead to inefficient and costly dispatch outcomes.
AFTER:  With the upcoming implementation of RTC, the potential impacts of incomplete offers could become more significant. Whereas today, ancillary services are only procured in the day-ahead market, under RTC, ancillary services and energy will be co-optimized every 5 minutes, making complete real-time of…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.7.1, Energy Bid/Offer Curve Criteria, paragraph (1)(c) · text copy line 1844 · heading above: 4.4.9.7.1 Energy Bid/Offer Curve Criteria

BEFORE: … (b) The ESR represented by the QSE from which the bid and offer would be provided; (c) A monotonically non-decreasing curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity. 
QUOTE: Negative MW values cover the charging MW range, and the positive MW values cover the discharging MW range. The price points corresponding to the charging MW range represent the not-to-exceed bid prices to consume energy, and the price points corresponding to the discharging MW range represent the offer prices to sell energy;
AFTER:  (d) The first and last hour of the offer; (e) The expiration time and date of the offer; (2) An Energy Bid/Offer Curve shall be bounded by -$250.00 per MWh and either the DASWCAP or RTSWCAP depending on the timing of the submission in dollars per MWh. The ERCOT systems must allow ERCOT to enter ESR…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …----------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor.
AFTER:  The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh G…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1) · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC).
AFTER:  For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has …

### e40 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 162 (OCR), Appendix, price duration curve discussion · text copy line 6093 · heading above: 25.505 in PUC Project No. 51871 (51871 Order), which modifies the value of the

BEFORE: …gy market for 2019 through 2021, with 2019 showing the most shortage pricing hours since the nodal market implementation before the extreme impacts of Winter Storm Uri in 2021. The prices in this figure are the hourly ERCOT average prices derived by load weighting the zonal settlement point prices. 
QUOTE: Negative ERCOT-wide prices may occur when wind is the marginal generation.
AFTER:  More installed wind generation and additional transmission infrastructure led to increased occurrences of negative prices over the past few years. In 2021, there were 176 hours with ERCOT-wide prices at or below zero, an increase from the 77 hours in 2020. Figure A7 represents a price duration curv…

## Statements to check (new or changed since the last audit)

- **Link to energy-offer-curve** (cites e1, e6): composed-of Energy Offer Curve: The IMM's aggregated offer stack averages the capacity offered at selected price levels, and the real-time dispatch optimizes based on each generator's energy offer curve. [e1][e6]
- **Link to sced** (cites e5, e6): used-in SCED (Security-Constrained Economic Dispatch): SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
- **Link to natural-gas-price** (cites e3): affects Natural Gas Prices (Henry Hub): The IMM reports the share of capacity priced between zero and 10 times the daily natural gas price. [e3]
- **Link to resource-mix** (cites e4): determines ERCOT Resource Mix: The IMM says the capacity offered at or below $0 is primarily associated with wind and solar resources. [e4]
- **Link to net-load** (cites e1) FLAG number-not-in-quote: 2023: related Net Load: The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- **Link to offer-cap** (cites e8) FLAG number-not-in-quote: 2024: related Offer Caps (HCAP / LCAP / SWCAP): In the 2024 IMM report's description of the then-current design, proxy offers for incomplete curves were set at the system-wide offer cap for non-IRRs. [e8]
- **Link to market-power-mitigation** (cites e27, e24): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Energy Offer Curves and ESR Energy Bid/Offer Curves can be mitigated in SCED using a Mitigated Offer Cap and a Mitigated Offer Floor. [e27][e24]
- **Link to energy-storage-resource** (cites e21): related Energy Storage Resource (ESR): ESRs submit a single Energy Bid/Offer Curve whose negative MW range is charging and positive MW range is discharging. [e21]
- **Link to negative-prices** (cites e4, e40): related Negative Prices: The IMM says wind and solar offer at or below $0 because many receive production tax credits, and that negative ERCOT-wide prices may occur when wind is the marginal generation. [e4][e40]

