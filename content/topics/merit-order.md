---
id: merit-order
name: Merit Order / Supply Stack
aliases: [merit order, supply stack, offer stack, aggregated offer curve, generation offer stack]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: energy-offer-curve
    type: composed-of
    note: The IMM's aggregated offer stack averages the capacity offered at selected price levels, and the real-time dispatch optimizes based on each generator's energy offer curve. [e1][e6]
  - to: sced
    type: used-in
    note: SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
  - to: natural-gas-price
    type: affects
    note: The IMM reports the share of capacity priced between zero and 10 times the daily natural gas price. [e3]
  - to: heat-rate
    type: related
    note: See that topic for how a heat rate is applied to a fuel price.
  - to: resource-mix
    type: determines
    note: The IMM says the capacity offered at or below $0 is primarily associated with wind and solar resources. [e4]
  - to: net-load
    type: related
    note: The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
  - to: offer-cap
    type: related
    note: In the 2024 IMM report's description of the then-current design, proxy offers for incomplete curves were set at the system-wide offer cap for non-IRRs. [e8]
  - to: market-power-mitigation
    type: related
    note: Energy Offer Curves and ESR Energy Bid/Offer Curves can be mitigated in SCED using a Mitigated Offer Cap and a Mitigated Offer Floor. [e27][e24]
  - to: energy-storage-resource
    type: related
    note: ESRs submit a single Energy Bid/Offer Curve whose negative MW range is charging and positive MW range is discharging. [e21]
  - to: negative-prices
    type: related
    note: The IMM says wind and solar offer at or below $0 because many receive production tax credits, and that negative ERCOT-wide prices may occur when wind is the marginal generation. [e4][e40]
evidence:
  - id: e1
    source: imm-som-2023
    locator: "Review of Real-Time Market Outcomes, D. Aggregated Offer Curves"
    quote: "By averaging the amount of capacity offered at selected price levels, an aggregated offer stack can be assembled. Figure 8 provides the average aggregated generator offer stacks for the year in all hours, the peak load hour, and peak net load hour of the year."
  - id: e2
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, first bullet"
    quote: "22% of real-time generation capacity was not dispatchable because it was below generators’ Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average."
  - id: e3
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, third bullet"
    quote: "28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet."
  - id: e4
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, second bullet"
    quote: "35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits."
  - id: e5
    source: np-06
    locator: "Section 6.5.7, Real-Time Sequence Methodology, introductory paragraph"
    quote: "The Real-Time Sequence describes the key system components and inputs that are required to support the SCED process, which produces the Locational Marginal Prices (LMPs), Base Points, Real-Time Market Clearing Prices for Capacity (MCPCs), and Ancillary Service awards while meeting transmission system constraints."
  - id: e6
    source: imm-som-2023
    locator: "Congestion discussion, real-time market dispatch"
    quote: "This coordination occurs through the real-time market dispatch software, which optimizes based on each generator’s energy offer curve and incorporating each generator’s impact on constraint violations. The result of this market dispatch is a set of locational prices that vary across the network and resulting congestion costs that are collected from participants."
  - id: e7
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes."
  - id: e8
    source: imm-som-2024
    locator: "Recommendations, Establish Real-Time Offer Requirements, Penalties, and Proxy Pricing"
    quote: "Under the current market design, if a QSE submits an incomplete energy offer curve, ERCOT substitutes a proxy offer to maintain a solvable dispatch solution. These proxy offers are set at $1,500 for IRRs and at the system-wide offer cap (SWCAP) for non-IRRs, creating steep, non-competitive offer curves that lead to inefficient and costly dispatch outcomes."
  - id: e9
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves, fourth bullet"
    quote: "Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024. The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025."
  - id: e11
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, shortage and reliability pricing (ORDC adder paragraph)"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025,"
  - id: e10
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e12
    source: ref-ferc-energy-primer
    locator: "Chapter 2, Electric, System and Unit Dispatch (NYISO illustration, Figure 2-6)"
    quote: "In general, dispatch occurs based on the cost of generation from given resources, with the lowest-cost resources dispatched first and the higher-cost resources dispatched last. The chart above is a depiction of the market supply curve for the New York Independent System Operator (NYISO). This is also commonly called the supply stack."
  - id: e13
    source: ref-ferc-energy-primer
    locator: "Chapter 2, Electric, RTO/ISO energy markets (general description)"
    quote: "The overall market price for electricity is determined by the highest offer accepted. However, transmission limitations may require the market to adjust the offers selected, which can change the price for different locations in the RTO/ISO – the locational marginal price (LMP)."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Energy Offer Curve"
    quote: "A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity."
  - id: e15
    source: np-04
    locator: "Section 4.4.9.3, Energy Offer Curve, paragraph (1)"
    quote: "The Energy Offer Curve represents the QSE’s willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations."
  - id: e16
    source: np-04
    locator: "Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (1)(c)"
    quote: "A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;"
  - id: e17
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (2)"
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh."
  - id: e18
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(g)"
    quote: "Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and"
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e20
    source: np-04
    locator: "Section 4.4.9.7, Energy Bid/Offer Curve, paragraph (1)"
    quote: "The Energy Bid/Offer Curve represents the willingness of a QSE representing an ESR to buy energy at or below a certain price and sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations."
  - id: e21
    source: np-04
    locator: "Section 4.4.9.7.1, Energy Bid/Offer Curve Criteria, paragraph (1)(c)"
    quote: "Negative MW values cover the charging MW range, and the positive MW values cover the discharging MW range. The price points corresponding to the charging MW range represent the not-to-exceed bid prices to consume energy, and the price points corresponding to the discharging MW range represent the offer prices to sell energy;"
  - id: e22
    source: np-04
    locator: "Section 4.4.9.7, paragraph (7)"
    quote: "At the time of SCED execution, if a valid Energy Bid/Offer Curve or Output Schedule does not exist for an ESR that has a status of On-Line, then ERCOT shall notify the QSE and create a proxy Energy Bid/Offer Curve priced at -$250/MWh for the portion of the curve less than zero MW, and priced at the RTSWCAP for the portion of the curve greater than zero MW."
  - id: e23
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) table"
    quote: "Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh"
  - id: e24
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1)"
    quote: "Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor."
  - id: e25
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e26
    source: np-04
    locator: "Section 4.4.9.4.1, variable definitions (GIHR)"
    quote: "For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5."
  - id: e27
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)"
    quote: "Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC)."
  - id: e28
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (14)(b)(i)"
    quote: "Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor."
  - id: e29
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(a)"
    quote: "The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints."
  - id: e30
    source: imm-som-2022
    locator: "page 50 (OCR), E. Aggregated Offer Curves"
    quote: "taking (i.e., it will produce at any price). This quantity was 42% of the available capacity in 2022."
  - id: e31
    source: imm-som-2023
    locator: "page 49 (OCR), D. Aggregated Offer Curves"
    quote: "40% of the capacity was not dispatchable because it is below generators’ Low Sustained Limit (LSL) and will produce at any price."
  - id: e32
    source: imm-som-2024
    locator: "page 46 (OCR), D. Aggregated Offer Curves"
    quote: "36% of real-time generation capacity was not dispatchable because it is below generators’ Low Sustained Limit (LSL)."
  - id: e33
    source: imm-som-2025
    locator: "page 31 (OCR), E. Aggregated Offer Curves"
    quote: "The 2024 values have been adjusted because of methodological changes in how the aggregate offer stacks are formulated."
  - id: e34
    source: imm-som-2023
    locator: "page 12 (OCR), Executive Summary, drivers of market prices"
    quote: "Electricity prices will be correlated with natural gas prices in a well-functioning market because fuel costs represent the majority of most suppliers’ marginal production costs, and natural gas units are generally on the margin in ERCOT."
  - id: e35
    source: imm-som-2025
    locator: "page 25 (OCR), Implied Heat Rates"
    quote: "Historically, the real-time price of electricity has been directly correlated with the fuel price for the marginal generation technology, which in ERCOT is usually natural gas."
  - id: e36
    source: imm-som-2024
    locator: "page 47 (OCR), E. Real-Time Prices Adjusted for Fuel Price Changes"
    quote: "Over time, other factors have weakened the connection between the prices of natural gas and electricity. Figure 6 highlighted that the significant deployment of zero marginal cost generation like wind and solar have resulted in hundreds of hours prices at or below $0 per MWh."
  - id: e37
    source: imm-som-2025
    locator: "page 13 (OCR), Executive Summary"
    quote: "ESRs are particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp."
  - id: e38
    source: imm-som-2025
    locator: "page 13 (OCR), Executive Summary"
    quote: "First, expensive gas peaking resources are needed less often, so the price of electricity was frequently set by lower- cost resources."
  - id: e39
    source: imm-som-2025
    locator: "page 13 (OCR), Executive Summary"
    quote: "In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT’s capability to manage the system’s ramp needs."
  - id: e40
    source: imm-som-2021
    locator: "page 162 (OCR), Appendix, price duration curve discussion"
    quote: "Negative ERCOT-wide prices may occur when wind is the marginal generation."
  - id: e41
    source: imm-som-2021
    locator: "page 52 (OCR), E. Aggregated Offer Curves"
    quote: "This figure shows that in both periods, as in previous years, the largest amount of capacity is not dispatchable because it is below generators’ Low Sustainable Limit (LSL) and is a price-taking portion of the offer stack."
  - id: e42
    source: np-04
    locator: "Section 4.4.9.4, pending-change box"
    quote: "[NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:]"
  - id: e43
    source: imm-som-2025
    locator: "page 13 (OCR), Executive Summary"
    quote: "In 2025, the price of natural gas increased by 61%, but the all-in price of electricity increased by less than 14%."
---

## Definition

In general terms, a supply stack (merit order) ranks generating units by marginal cost of production, cheapest first. FERC's staff primer describes dispatch that way and calls the market supply curve "the supply stack", illustrated for NYISO rather than ERCOT. [e12] The Nodal Protocols and the IMM State of the Market reports saved here do not use the term "merit order" for the supply stack (see Open items); the closest ERCOT concept is the IMM's aggregated offer stack, assembled by averaging the amount of capacity offered at selected price levels and shown for all hours of the year, the peak load hour and the peak net load hour. [e1] This topic uses the offer stack as ERCOT's version of the merit order: capacity ranked by offer price, not by cost.

## How it works

Generators submit energy offer curves, and the real-time dispatch software optimizes based on each generator's energy offer curve while accounting for transmission constraints. [e6] SCED produces LMPs, Base Points and Ancillary Service awards. [e5]

What an offer curve is. An Energy Offer Curve is a proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. [e14] It represents the QSE's willingness to sell at or above a price and quantity in the DAM, or to be dispatched by SCED in Real-Time. [e15] A curve may have no more than ten price/quantity pairs. [e16] Its price must be within -$250 per MWh and either the DASWCAP or the RTSWCAP depending on when it is submitted. [e17] Offers also carry the percentage of FIP and FOP used for generation above LSL, with the percentages summing to no more than 100%. [e18] FIP is the daily midpoint or average of natural gas prices for the Katy area, in $/MMBtu. [e19]

Storage. An ESR submits an Energy Bid/Offer Curve, in which negative MW values are the charging range with not-to-exceed bid prices and positive MW values are the discharging range with offer prices. [e20][e21] If an On-Line ESR has no valid curve at SCED execution, ERCOT creates a proxy curve priced at -$250/MWh for the portion below zero MW and at the RTSWCAP above zero MW. [e22] In the IMM's 2025 report ESRs are "particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp." [e37]

Mitigation bounds the stack. In Real-Time, offers may be mitigated in SCED using a Mitigated Offer Cap [e27] and a Mitigated Offer Floor, which is category-specific: for example -$250/MWh for nuclear, hydro and ESR, -$20/MWh for coal, combined cycle and gas/oil steam and combustion turbines, -$100/MWh for wind, and -$50/MWh for PV, QF and other. [e24][e23] SCED runs in two steps: the first finds Reference LMPs observing only Competitive Constraints, and the second bounds each Energy Offer Curve at the lesser of the Reference LMP or the appropriate Mitigated Offer Floor. [e29][e28]

## Formula

The Mitigated Offer Cap for a Generation Resource at each point of its curve is the larger of two terms: the generic incremental heat rate times the greater of FIP and the weighted average fuel price, or the verifiable incremental heat rate times a calculated fuel price plus variable O&M. [e25] The generic incremental heat rate is set to 10.5 MMBtu/MWh for Resources with a Commercial Operations Date on or before January 1, 2004 and 14.5 for later Resources. [e26] This is the current text; a pending box (NPRR1325, upon system implementation of PGRR145) would replace Section 4.4.9.4, and is not the rule in force. [e42]

## ERCOT context

The IMM says the capacity offered at or below $0 is primarily wind and solar, and that the zero-to-10-times-FIP range is the incremental fuel price for the vast majority of the fleet. [e4][e3] In the evening ramp, when solar production ramps down, SCED often dispatches quick-start gas or ESRs with high-priced offer curves, which produces predictable price spikes. [e7] The IMM reports that in summer 2025 price spikes were 40% less frequent than in summer 2024 as additional ESR capacity improved ERCOT's ability to manage ramp needs. [e39]

Who sets price. The IMM says natural gas units are generally on the margin in ERCOT and that real-time prices have historically been directly correlated with the fuel price for the marginal generation technology, usually natural gas. [e34][e35] It also says other factors have weakened that connection: zero marginal cost wind and solar have produced hundreds of hours at or below $0. [e36] Negative ERCOT-wide prices may occur when wind is the marginal generation. [e40] For 2025 the IMM said expensive gas peaking resources were needed less often, so the price was frequently set by lower-cost resources. [e38] No saved source gives the share of intervals set by each fuel or resource type (see Open items). By contrast, FERC's general description of RTO/ISO markets says the overall market price is determined by the highest offer accepted, adjusted for transmission limits into locational prices. [e13]

Offer curve rules also shape the stack. The 2024 IMM report notes that under the then-current design an incomplete curve is replaced by a proxy offer, $1,500 for IRRs and the system-wide offer cap for non-IRRs, creating steep, non-competitive offer curves. [e8] That report predates real-time co-optimization, which went live on 5 December 2025 per the 2025 IMM report, [e11] and the Protocol parameter table now lists a day-ahead cap (DASWCAP) of $5,000 per MWh and a real-time cap (RTSWCAP) of $2,000 per MWh (see offer-cap). [e10]

## Timeline

Share of real-time generation capacity not dispatchable because it is below LSL, as stated by the IMM in each year's report: [e30][e31][e32][e2]

- 2022: 42% of available capacity. [e30]
- 2023: 40%. [e31]
- 2024: 36% in the 2024 report; restated as 27% in the 2025 report after the IMM changed how aggregate offer stacks are formulated. [e32][e2][e33]
- 2025: 22%, which the IMM says indicates lower committed thermal capacity on average. [e2]

The IMM's 2021 report already described the largest capacity block as below LSL and price-taking. [e41]

## Key facts

- 2025: 22% of capacity not dispatchable (below LSL), 35% offered at or below $0, 28% between $0 and 10 times daily gas, about 15% above "this level" (unclear reference, see Open items) (IMM). [e2][e4][e3][e9]
- 2024 comparison as restated in the 2025 report: 27% below LSL, 32% at or below $0, 23% in the fuel-price band, 19% above. [e2][e4][e3][e9][e33]
- The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- The 10x daily gas price band is described as the incremental fuel price for the vast majority of the fleet. [e3]
- Energy Offer Curves: at most ten price/quantity pairs, price range from -$250 up to the applicable system-wide cap. [e16][e17]
- Proxy offers for incomplete energy offer curves, as described in the 2024 IMM report for the design before RTC: $1,500 for IRRs and the system-wide offer cap for non-IRRs. [e8]

## Say it like this

(Guidance) The IMM describes ERCOT's offer stack by price band: offers at or below $0 are mostly wind and solar, the zero-to-10-times-gas-price band is the incremental fuel price for most of the fleet, and in the evening ramp SCED often dispatches quick-start gas and batteries with high-priced offers. [e4][e3][e7] Gas is usually on the margin, but not always: wind can set a negative price and, per the IMM, ESRs are likely to set price in the ramps. [e35][e40][e37]

## Common confusion

(Guidance) The stack is by offers, not by cost: offers can be at or below $0 for reasons other than fuel cost (tax credits), and units below LSL are in the fleet but not dispatchable. [e4][e2] Also, ERCOT's dispatch produces locational prices that vary across the network, so price is not just where demand crosses a single system-wide curve. [e6] Percent shares from different IMM reports are not strictly comparable: the 2025 report restated 2024 for a methodology change. [e33]

## Questions

### What does ERCOT's offer stack look like?

In 2025, 22% of capacity was below LSL, 35% offered at or below $0, 28% priced up to 10 times the daily gas price, and about 15% above an IMM reference level whose antecedent is unclear. [e2][e4][e3][e9]

### Why do wind and solar sit at the bottom?

The IMM says they offer at or below $0 because many receive federal production tax credits, so they produce even when prices are negative. [e4]

### Why does the stack matter at the net peak?

After solar ramps down SCED often dispatches quick-start gas and ESRs with high-priced offer curves, which the IMM says results in frequent and predictable price spikes. [e7]

### Why can a generator not offer below -$250/MWh, and what happens to a mitigated unit?

An Energy Offer Curve must be within -$250 per MWh and the applicable system-wide cap. [e17] In SCED Step 2, curves are bounded at the lesser of the Reference LMP or the Mitigated Offer Floor, and curves subject to mitigation under the competitiveness criteria are capped as described in np-06 6.5.7.3. [e28]

### What if gas prices rise but the stack does not move?

The IMM says electricity prices should correlate with gas prices because fuel is most of marginal cost and gas units are generally on the margin. [e34] In 2025, it says, gas rose 61% but the all-in price rose less than 14%, and it says expensive gas peakers being needed less often was one reason. [e43][e38]

### How do ESR offers differ from generator offers?

An ESR's single curve covers charging and discharging, with negative MW being charging bids and positive MW discharging offers. [e21]

## Open items

- The exact phrase "merit order" appears in only one saved source, a commercial tolling slide deck (ref-fields-tolling-slides), and the PUCT rule 25.502 and older IMM reports use "out-of-merit-order" / "out-of-merit" dispatch for a different concept; it does not appear in the Protocols or recent IMM reports saved here. "Supply stack" appears in FERC's 2024 Energy Primer as a general description (with a NYISO illustration), and "offer stack" and "aggregated offer curve" appear in the IMM State of the Market reports.
- The IMM text says the roughly 15% was "offered above this level" and then refers to a $75 level that corresponds to the NSRS energy offer floor; the antecedent of "this level" (10 times FIP, or $75) is unclear in the extracted text, so it is not interpreted beyond the quoted share.
- The dollar levels of the offer stack by quantity (IMM Figure 7 and its predecessors) are charts; the values are not in the text.
- No saved source gives the frequency with which each fuel or resource type sets the real-time price; the IMM statements above are qualitative.
- The 2025 IMM report restates the 2024 offer-stack shares because of a methodology change; the 2024 report's own figures (36% below LSL, 32%, 16%, 17%) differ from the restated ones (27%, 32%, 23%, 19%). Both sets are cited with their report year.
- How the NPRR1325 Adjusted Bid Caps change the stack is pending and was not read in detail.
