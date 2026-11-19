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
locator: Section 6.5.7, Real-Time Sequence, paragraph (1) · text copy line 1365 · heading above: 6.5.7 Real-Time Sequence Methodology

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

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, shortage and reliability pricing (ORDC adder paragraph) · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025,
AFTER:  ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low. In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a mu…

### e10 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, parameter table (Parameter / Unit / Current Value) · text copy line 2240 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------- --------------------------------------------- 
QUOTE: ECAP $/MWh 2,000 HCAP - DAM (DASWCAP) $/MWh 5,000 HCAP - RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000
AFTER:  * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise directed by the ERCOT Board. ERCOT shall provide a Mark…

## Statements to check

- **Definition #1** (cites e1) FLAG number-not-in-quote: 2023: The sources do not use the term "merit order" or "supply stack." What they do describe is the aggregated offer stack: the IMM (in its 2023 report) assembles it by averaging the amount of capacity offered at selected price levels, and shows it for all hours of the year, the peak load hour and the peak net load hour. [e1] This topic uses that offer stack as ERCOT's version of the merit order: capacity ranked by offer price.
- **How it works #1** (cites e6, e5): Generators submit energy offer curves, and the real-time dispatch software optimizes based on each generator's energy offer curve while accounting for transmission constraints. [e6] SCED produces LMPs, Base Points and Ancillary Service awards. [e5]
- **How it works #2** (cites e2, e4, e3, e9): The IMM's 2025 breakdown shows the shape of the stack. 22% of real-time generation capacity was not dispatchable because it was below the Low Sustained Limit; 35% was offered at or below $0, mostly wind and solar with production tax credits; 28% was priced between zero and 10 times the daily gas price; and roughly 15% was offered above "this level", a phrase the IMM follows with a $75 level tied to the NSRS energy offer floor (the antecedent is unclear; see Open items). [e2][e4][e3][e9]
- **ERCOT context #1** (cites e4, e3, e7): The IMM says the capacity offered at or below $0 is primarily wind and solar, and that the zero-to-10-times-FIP range is the incremental fuel price for the vast majority of the fleet. [e4][e3] In the evening ramp, when solar production ramps down, SCED often dispatches quick-start gas or ESRs with high-priced offer curves, which produces predictable price spikes. [e7]
- **ERCOT context #2** (cites e8, e11, e10) FLAG number-not-in-quote: 2024: Offer curve rules also shape the stack. The 2024 IMM report notes that under the then-current design an incomplete curve is replaced by a proxy offer, $1,500 for IRRs and the system-wide offer cap for non-IRRs, creating steep, non-competitive offer curves. [e8] That report predates real-time co-optimization, which went live on 5 December 2025 per the 2025 IMM report, [e11] and the Protocol parameter table now lists a day-ahead cap (DASWCAP) of $5,000 per MWh and a real-time cap (RTSWCAP) of $2,000 per MWh (see offer-cap). [e10]
- **Key facts #1** (cites e2, e4, e3, e9): - 2025: 22% of capacity not dispatchable (below LSL), 35% offered at or below $0, 28% between $0 and 10 times daily gas, about 15% above "this level" (unclear reference, see Open items) (IMM). [e2][e4][e3][e9]
- **Key facts #2** (cites e2, e4, e3, e9): - 2024 comparison: 27% below LSL, 32% at or below $0, 23% in the fuel-price band, 19% above. [e2][e4][e3][e9]
- **Key facts #3** (cites e1) FLAG number-not-in-quote: 2023: - The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- **Key facts #4** (cites e3): - The 10x daily gas price band is described as the incremental fuel price for the vast majority of the fleet. [e3]
- **Key facts #5** (cites e8) FLAG number-not-in-quote: 2024: - Proxy offers for incomplete energy offer curves, as described in the 2024 IMM report for the design before RTC: $1,500 for IRRs and the system-wide offer cap for non-IRRs. [e8]
- **Say it like this #1** (cites e4, e3, e7): (Guidance) The IMM describes ERCOT's offer stack by price band: offers at or below $0 are mostly wind and solar, the zero-to-10-times-gas-price band is the incremental fuel price for most of the fleet, and in the evening ramp SCED often dispatches quick-start gas and batteries with high-priced offers. [e4][e3][e7]
- **Common confusion #1** (cites e4, e2, e6): (Guidance) The stack is by offers, not by cost: offers can be at or below $0 for reasons other than fuel cost (tax credits), and units below LSL are in the fleet but not dispatchable. [e4][e2] Also, ERCOT's dispatch produces locational prices that vary across the network, so price is not just where demand crosses a single system-wide curve. [e6]
- **Questions #2** (cites e2, e4, e3, e9): In 2025, 22% of capacity was below LSL, 35% offered at or below $0, 28% priced up to 10 times the daily gas price, and about 15% above an IMM reference level whose antecedent is unclear. [e2][e4][e3][e9]
- **Questions #4** (cites e4): The IMM says they offer at or below $0 because many receive federal production tax credits, so they produce even when prices are negative. [e4]
- **Questions #6** (cites e7): After solar ramps down SCED often dispatches quick-start gas and ESRs with high-priced offer curves, which the IMM says results in frequent and predictable price spikes. [e7]
- **Link to energy-offer-curve** (cites e1, e6): composed-of Energy Offer Curve: The IMM's aggregated offer stack averages the capacity offered at selected price levels, and the real-time dispatch optimizes based on each generator's energy offer curve. [e1][e6]
- **Link to sced** (cites e5, e6): used-in SCED (Security-Constrained Economic Dispatch): SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
- **Link to natural-gas-price** (cites e3): affects Natural Gas Prices (Henry Hub): The IMM defines the middle of the stack as capacity priced up to 10 times the daily natural gas price. [e3]
- **Link to resource-mix** (cites e4): determines ERCOT Resource Mix: The IMM says the capacity offered at or below $0 is primarily associated with wind and solar resources. [e4]
- **Link to net-load** (cites e1) FLAG number-not-in-quote: 2023: related Net Load: The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- **Link to offer-cap** (cites e8) FLAG number-not-in-quote: 2024: related Offer Caps (HCAP / LCAP / SWCAP): In the 2024 IMM report's description of the then-current design, proxy offers for incomplete curves were set at the system-wide offer cap for non-IRRs. [e8]
