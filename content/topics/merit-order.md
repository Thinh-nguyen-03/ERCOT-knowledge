---
id: merit-order
name: Merit Order / Supply Stack
aliases: [merit order, supply stack, offer stack, aggregated offer curve, generation offer stack]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: energy-offer-curve
    type: composed-of
    note: The IMM's aggregated offer stack averages the capacity offered at selected price levels, and the real-time dispatch optimizes based on each generator's energy offer curve. [e1][e6]
  - to: sced
    type: used-in
    note: SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
  - to: natural-gas-price
    type: affects
    note: The IMM defines the middle of the stack as capacity priced up to 10 times the daily natural gas price. [e3]
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
    locator: "Section 6.5.7, Real-Time Sequence, paragraph (1)"
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
---

## Definition

The sources do not use the term "merit order" or "supply stack." What they do describe is the aggregated offer stack: the IMM (in its 2023 report) assembles it by averaging the amount of capacity offered at selected price levels, and shows it for all hours of the year, the peak load hour and the peak net load hour. [e1] This topic uses that offer stack as ERCOT's version of the merit order: capacity ranked by offer price.

## How it works

Generators submit energy offer curves, and the real-time dispatch software optimizes based on each generator's energy offer curve while accounting for transmission constraints. [e6] SCED produces LMPs, Base Points and Ancillary Service awards. [e5]

The IMM's 2025 breakdown shows the shape of the stack. 22% of real-time generation capacity was not dispatchable because it was below the Low Sustained Limit; 35% was offered at or below $0, mostly wind and solar with production tax credits; 28% was priced between zero and 10 times the daily gas price; and roughly 15% was offered above "this level", a phrase the IMM follows with a $75 level tied to the NSRS energy offer floor (the antecedent is unclear; see Open items). [e2][e4][e3][e9]

## ERCOT context

The IMM says the capacity offered at or below $0 is primarily wind and solar, and that the zero-to-10-times-FIP range is the incremental fuel price for the vast majority of the fleet. [e4][e3] In the evening ramp, when solar production ramps down, SCED often dispatches quick-start gas or ESRs with high-priced offer curves, which produces predictable price spikes. [e7]

Offer curve rules also shape the stack. The 2024 IMM report notes that under the then-current design an incomplete curve is replaced by a proxy offer, $1,500 for IRRs and the system-wide offer cap for non-IRRs, creating steep, non-competitive offer curves. [e8] That report predates real-time co-optimization, which went live on 5 December 2025 per the 2025 IMM report, [e11] and the Protocol parameter table now lists a day-ahead cap (DASWCAP) of $5,000 per MWh and a real-time cap (RTSWCAP) of $2,000 per MWh (see offer-cap). [e10]

## Key facts

- 2025: 22% of capacity not dispatchable (below LSL), 35% offered at or below $0, 28% between $0 and 10 times daily gas, about 15% above "this level" (unclear reference, see Open items) (IMM). [e2][e4][e3][e9]
- 2024 comparison: 27% below LSL, 32% at or below $0, 23% in the fuel-price band, 19% above. [e2][e4][e3][e9]
- The IMM's 2023 report shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- The 10x daily gas price band is described as the incremental fuel price for the vast majority of the fleet. [e3]
- Proxy offers for incomplete energy offer curves, as described in the 2024 IMM report for the design before RTC: $1,500 for IRRs and the system-wide offer cap for non-IRRs. [e8]

## Say it like this

(Guidance) The IMM describes ERCOT's offer stack by price band: offers at or below $0 are mostly wind and solar, the zero-to-10-times-gas-price band is the incremental fuel price for most of the fleet, and in the evening ramp SCED often dispatches quick-start gas and batteries with high-priced offers. [e4][e3][e7]

## Common confusion

(Guidance) The stack is by offers, not by cost: offers can be at or below $0 for reasons other than fuel cost (tax credits), and units below LSL are in the fleet but not dispatchable. [e4][e2] Also, ERCOT's dispatch produces locational prices that vary across the network, so price is not just where demand crosses a single system-wide curve. [e6]

## Questions

### What does ERCOT's offer stack look like?

In 2025, 22% of capacity was below LSL, 35% offered at or below $0, 28% priced up to 10 times the daily gas price, and about 15% above an IMM reference level whose antecedent is unclear. [e2][e4][e3][e9]

### Why do wind and solar sit at the bottom?

The IMM says they offer at or below $0 because many receive federal production tax credits, so they produce even when prices are negative. [e4]

### Why does the stack matter at the net peak?

After solar ramps down SCED often dispatches quick-start gas and ESRs with high-priced offer curves, which the IMM says results in frequent and predictable price spikes. [e7]

## Open items

- The terms "merit order" and "supply stack" do not appear in any saved source; "offer stack" and "aggregated offer curve" appear in the IMM State of the Market reports. The Definition above is built on that.
- The IMM text says the roughly 15% was "offered above this level" and then refers to a $75 level that corresponds to the NSRS energy offer floor; the antecedent of "this level" (10 times FIP, or $75) is unclear in the extracted text, so it is not interpreted beyond the quoted share.
- Deeper pass: the dollar levels of the offer stack by quantity (Figure 7 is a chart; values are not in the text), how ESR bids and offers enter the stack, and the effect of mitigated offer caps.
- Deeper pass: a source on marginal-unit frequency by fuel (what sets price how often) was not found in the saved text.
