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
    note: The aggregated offer stack is built from each generator's energy offer curve, which the real-time dispatch optimizes against. [e1][e6]
  - to: sced
    type: used-in
    note: SCED dispatches against offer curves and produces LMPs, Base Points and Ancillary Service awards. [e5][e6]
  - to: natural-gas-price
    type: affects
    note: The IMM defines the middle of the stack as capacity priced up to 10 times the daily natural gas price. [e3]
  - to: heat-rate
    type: related
    note: Fuel price times unit efficiency is what places a thermal unit in the stack; see that topic.
  - to: resource-mix
    type: determines
    note: The mix of resources sets the shape of the stack, with wind and solar at the bottom. [e4]
  - to: net-load
    type: related
    note: The IMM shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
  - to: offer-cap
    type: related
    note: Proxy offers for incomplete curves are set at the system-wide offer cap for non-IRRs. [e8]
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
    quote: "Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024."
---

## Definition

The sources do not use the term "merit order" or "supply stack." What they do describe is the aggregated offer stack: the IMM assembles it by averaging the amount of capacity offered at selected price levels, and shows it for all hours of the year, the peak load hour and the peak net load hour. [e1] This topic uses that offer stack as ERCOT's version of the merit order: capacity ranked by offer price.

## How it works

Generators submit energy offer curves, and the real-time dispatch software optimizes based on each generator's energy offer curve while accounting for transmission constraints. [e6] SCED produces LMPs, Base Points and Ancillary Service awards. [e5]

The IMM's 2025 breakdown shows the shape of the stack. 22% of real-time generation capacity was not dispatchable because it was below the Low Sustained Limit; 35% was offered at or below $0, mostly wind and solar with production tax credits; 28% was priced between zero and 10 times the daily gas price; and roughly 15% was offered above that level. [e2][e4][e3][e9]

## ERCOT context

Because wind and solar offer at or below $0, the low end of the stack is renewable, and the price-setting range for thermal units follows the daily natural gas price. [e4][e3] When the net peak arrives and solar has dropped out, the stack steepens: in the evening ramp SCED often dispatches quick-start gas or ESRs with high-priced offer curves, which produces predictable price spikes. [e7]

Offer curve rules also shape the stack. The IMM notes that an incomplete curve is replaced by a proxy offer, $1,500 for IRRs and the system-wide offer cap for non-IRRs, creating steep, non-competitive offer curves. [e8]

## Key facts

- 2025: 22% of capacity not dispatchable (below LSL), 35% offered at or below $0, 28% between $0 and 10 times daily gas, about 15% above (IMM). [e2][e4][e3][e9]
- 2024 comparison: 27% below LSL, 32% at or below $0, 23% in the fuel-price band, 19% above. [e2][e4][e3][e9]
- The IMM shows the stack for the annual average, the peak load hour and the peak net load hour. [e1]
- The 10x daily gas price band is described as the incremental fuel price for the vast majority of the fleet. [e3]
- Proxy offers: $1,500 for IRRs and the system-wide offer cap for non-IRRs. [e8]

## Say it like this

(Guidance) ERCOT does not run a merit-order dispatch in name, but its offer stack works the same way: wind and solar at the bottom, thermal priced off gas in the middle, and a thin high-priced tail of peakers and batteries at the top. What sets price at the net peak is how much of that tail is needed.

## Common confusion

(Guidance) The stack is by offers, not by cost: offers can be at or below $0 for reasons other than fuel cost (tax credits), and units below LSL are in the fleet but not dispatchable. [e4][e2] Also, with ESRs and a locational market, the marginal unit is shaped by constraints as well, so price is not just where demand crosses a single system-wide curve. [e6]

## Questions

### What does ERCOT's offer stack look like?

In 2025, 22% of capacity was below LSL, 35% offered at or below $0, 28% priced up to 10 times the daily gas price, and about 15% above. [e2][e4][e3][e9]

### Why do wind and solar sit at the bottom?

The IMM says they offer at or below $0 because many receive federal production tax credits, so they produce even when prices are negative. [e4]

### Why does the stack matter at the net peak?

After solar ramps down SCED turns to quick-start gas and high-offer ESRs, which sets high prices. [e7]

## Open items

- The terms "merit order" and "supply stack" do not appear in any saved source; "offer stack" and "aggregated offer curve" appear in the IMM State of the Market reports. The Definition above is built on that.
- The IMM text says the roughly 15% "offered above this level" and links the $75 level to the NSRS offer floor; the antecedent of "this level" is unclear in the extracted text, so I did not interpret it beyond the quoted share.
- Deeper pass: the dollar levels of the offer stack by quantity (Figure 7 is a chart; values are not in the text), how ESR bids and offers enter the stack, and the effect of mitigated offer caps.
- Deeper pass: a source on marginal-unit frequency by fuel (what sets price how often) was not found in the saved text.
