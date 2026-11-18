---
id: energy-offer-curve
name: Energy Offer Curve
aliases: [Energy Offer Curve, EOC, offer curve, supply curve offer]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, structuring]
as_of: 2026-11-18
links:
  - to: three-part-supply-offer
    type: part-of
    note: The Energy Offer Curve is the third component of a Three-Part Supply Offer. [e2]
  - to: sced
    type: used-in
    note: SCED evaluates Energy Offer Curves to set dispatch. [e4]
  - to: dam
    type: used-in
    note: The DAM uses Energy Offer Curves, bounded by the Resource's LSL and HSL. [e3]
  - to: base-point
    type: determines
    note: SCED turns offer curves into Base Points. [e4]
  - to: offer-cap
    type: related
    note: Offer prices are limited by caps and mitigation rules.
  - to: cop
    type: related
    note: The DAM curve is bounded by limits from the COP. [e3]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Energy Offer Curve"
    quote: "A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity."
  - id: e2
    source: np-04
    locator: "Section 4.4.9.3, paragraph (1)"
    quote: "The Energy Offer Curve represents the QSE’s willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e4
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e5
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(c)"
    quote: "A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;"
  - id: e6
    source: np-06
    locator: "Section 6.4.3, paragraph (1)"
    quote: "A QSE that represents a Resource, other than a Reliability Must-Run (RMR) Unit, must submit and maintain an Energy Offer Curve, an Energy Bid/Offer Curve, or an Output Schedule for the Resource for all times when the Resource is On-Line."
  - id: e8
    source: imm-som-2025
    locator: "Congestion chapter, introduction"
    quote: "which schedules generation to meet demand based on each generator’s energy offer curve and its corresponding"
  - id: e7
    source: np-04
    locator: "Section 4.4.9.3, paragraph (4)"
    quote: "For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution"
---

## Definition

An Energy Offer Curve is a proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. [e1]

## How it works

The curve represents the QSE's willingness to sell energy at or above a given price and quantity in the DAM, or its willingness to be dispatched by SCED in real time. [e2] A curve must be monotonically non-decreasing in both price and quantity, with no more than ten price/quantity pairs and no more than two consecutive pairs at the same price or quantity. [e5] It is bounded by the Resource's LSL and HSL: in the DAM the limits from the COP, in SCED the limits shown by telemetry. [e3]

A QSE may change its curve for any Operating Hour at any time before SCED executes. [e7] SCED then evaluates the curves, along with other offers and bids, to set dispatch by maximizing bid-based revenues minus offer-based costs subject to power balance and network constraints. [e4]

## ERCOT context

A QSE representing a Resource, other than an RMR Unit, must keep an Energy Offer Curve, an Energy Bid/Offer Curve or an Output Schedule in place whenever the Resource is On-Line. [e6] The IMM describes SCED as scheduling generation to meet demand based on each generator's energy offer curve and its impact on transmission constraints. [e8]

## Key facts

- Curve must be monotonically non-decreasing, up to ten price/quantity pairs. [e5]
- Bounded by LSL and HSL: COP values in the DAM, telemetry in SCED. [e3]
- Can be changed any time before SCED execution for the hour. [e7]
- SCED uses the curves to maximize bid-based revenues minus offer-based costs. [e4]

## Say it like this

The energy offer curve is the generator's price ladder: how much it will produce at each price. SCED reads that ladder every few minutes to decide each unit's base point.

## Common confusion

- Energy Offer Curve versus Three-Part Supply Offer: the curve is only the incremental energy part; startup and minimum-energy costs are separate. [e2]
- Offer curve versus Output Schedule: a Resource without an offer curve is dispatched to its Output Schedule instead. [e6]

## Questions

### What shape must an offer curve have?

Monotonically non-decreasing in price and quantity, with at most ten price/quantity pairs. [e5]

### What bounds the curve in SCED?

The Resource's LSL and HSL as shown by telemetry. [e3]

### Until when can a QSE change its curve?

At any time before SCED executes for that Operating Hour. [e7]

## Open items

- Deeper pass: offer cost caps (np-04 Section 4.4.9.3.3), mitigated offers and the offer floor rules.
- Deeper pass: proxy Energy Offer Curves ERCOT builds for IRRs and RUC-committed Resources (np-06 6.5.7.3).
- Deeper pass: IMM economic-withholding analysis.
