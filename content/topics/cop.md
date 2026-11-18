---
id: cop
name: COP (Current Operating Plan)
aliases: [COP, Current Operating Plan, resource status plan]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading]
as_of: 2026-11-18
links:
  - to: qse
    type: related
    note: Each QSE representing a Resource must submit a COP. [e2]
  - to: ruc
    type: used-in
    note: ERCOT uses COP data to calculate operating limits and Ancillary Service capabilities for RUC. [e3]
  - to: energy-offer-curve
    type: related
    note: When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule. [e5]
  - to: sced
    type: contrasts-with
    note: SCED uses telemetered Resource Status instead of the COP Resource Status. [e6]
  - to: hsl-lsl
    type: related
    note: The DAM offer curve is bounded by the LSL and HSL specified in the COP. [e7]
  - to: three-part-supply-offer
    type: related
    note: Day-ahead offers are bounded by COP limits. [e7]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Current Operating Plan (COP)"
    quote: "A plan by a Qualified Scheduling Entity (QSE) reflecting anticipated operating conditions for each of the Resources that it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status, and Ancillary Service capabilities."
  - id: e2
    source: np-03
    locator: "Section 3.9, paragraph (1)"
    quote: "Each Qualified Scheduling Entity (QSE) that represents a Resource must submit a Current Operating Plan (COP) under this Section."
  - id: e3
    source: np-03
    locator: "Section 3.9, paragraph (2)"
    quote: "ERCOT shall use the information provided in the COP to calculate operating limits and Ancillary Service capabilities for each Resource for the Reliability Unit Commitment (RUC) processes."
  - id: e4
    source: np-03
    locator: "Section 3.9, paragraph (5)"
    quote: "To reflect changes to a Resource’s capability, each QSE shall report by exception, changes to the COP for all hours after the Operating Period through the rest of the Operating Day."
  - id: e5
    source: np-03
    locator: "Section 3.9, paragraph (6)"
    quote: "When a QSE updates its COP to show changes in Resource Status, the QSE shall update for each On-Line Resource, either an Energy Offer Curve under Section 4.4.9, Energy Offers and Bids, or Output Schedule under Section 6.4.2, Output Schedules."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP."
  - id: e7
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e8
    source: np-03
    locator: "Section 3.9, paragraph (7)"
    quote: "Each QSE, including QSEs representing Reliability Must-Run (RMR) Units, Firm Fuel Supply Service Resources (FFSSRs), or Black Start Resources, shall submit a revised COP reflecting changes in Resource availability as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change."
---

## Definition

The Current Operating Plan (COP) is a QSE's plan reflecting anticipated operating conditions for each Resource it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status and Ancillary Service capabilities. [e1]

## How it works

Every QSE that represents a Resource must submit a COP. [e2] ERCOT uses the information to calculate operating limits and Ancillary Service capabilities for each Resource for the RUC processes. [e3] QSEs report changes by exception for all hours after the Operating Period through the rest of the Operating Day, [e4] and must submit a revised COP no later than 60 minutes after an event that changes Resource availability. [e8] When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule for each On-Line Resource. [e5]

## ERCOT context

The COP is a planning and commitment input, not the real-time dispatch input: SCED uses telemetered Resource Status validated by the Real-Time Sequence instead of the COP Resource Status. [e6] The COP still matters for pricing because the day-ahead Energy Offer Curve is bounded by the LSL and HSL specified in the COP. [e7]

## Key facts

- Covers each hour in the next seven Operating Days. [e1]
- Must be submitted by each QSE that represents a Resource. [e2]
- Used by ERCOT for RUC operating limits and Ancillary Service capabilities. [e3]
- Revisions are due as soon as reasonably practicable and within 60 minutes of the event. [e8]
- SCED uses telemetry, not COP Resource Status. [e6]

## Say it like this

The COP is the QSE's rolling seven-day plan for each unit: whether it is on, its limits and what ancillary services it can provide. ERCOT uses it for commitment and day-ahead; real-time dispatch runs off telemetry.

## Common confusion

- COP versus offers: the COP states status and capability; prices live in the offer. A status change in the COP requires a matching offer update. [e5]
- COP versus real-time status: SCED does not read the COP status. [e6]

## Questions

### How far ahead does the COP look?

Seven Operating Days, hour by hour. [e1]

### Does SCED use the COP?

Not for Resource Status: it uses telemetry instead. [e6]

### How fast must a QSE revise the COP after an outage?

As soon as reasonably practicable, and within 60 minutes of the event. [e8]

## Open items

- Deeper pass: COP criteria and Resource Status codes (np-03 Section 3.9.1) and COP validation (3.9.2).
- Deeper pass: COP accuracy monitoring in Section 8 and links to RUC and outage scheduling.
