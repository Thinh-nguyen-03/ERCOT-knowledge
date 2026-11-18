---
id: three-part-supply-offer
name: Three-Part Supply Offer
aliases: [Three-Part Supply Offer, TPO, three-part offer, startup minimum-energy energy offer]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, structuring]
as_of: 2026-11-18
links:
  - to: energy-offer-curve
    type: composed-of
    note: The Energy Offer Curve is the third component of the Three-Part Supply Offer. [e1]
  - to: dam
    type: used-in
    note: The DAM uses all three parts of the offer. [e3]
  - to: ruc
    type: used-in
    note: RUC uses only the Startup and Minimum-Energy components to determine commitments. [e3]
  - to: sced
    type: used-in
    note: SCED may use the Energy Offer Curve in Real-Time Operations. [e3]
  - to: qse
    type: related
    note: A QSE makes the offer for a Generation Resource it represents. [e1]
  - to: cop
    type: related
    note: Offers for the DAM are bounded by the Resource limits stated in the COP. [e6]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Three-Part Supply Offer"
    quote: "An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Startup Offer"
    quote: "An offer for all costs incurred by a Generation Resource in starting up and reaching Low Sustained Limit (LSL). The Startup Offer is in dollars per start."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.2, paragraphs (1) and (2)"
    quote: "A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Minimum-Energy Offer"
    quote: "An offer for the costs incurred by a Resource in producing energy at the Resource’s LSL expressed in $/MWh."
  - id: e5
    source: np-04
    locator: "Section 4.4.9.2, paragraph (2)"
    quote: "The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. The RUC only uses the Startup Offer and the Minimum-Energy Offer components for determining RUC commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource’s energy payments. The Energy Offer Curve may also be used by SCED in Real-Time Operations."
  - id: e6
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e7
    source: imm-som-2025
    locator: "Market operations discussion of RUC"
    quote: "ERCOT also applies a $250-per-MWh offer floor to RUC-committed units."
---

## Definition

A Three-Part Supply Offer is an offer made by a QSE for a Generation Resource it represents, with three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. [e1]

## How it works

The Startup Offer covers all costs a Generation Resource incurs in starting up and reaching its Low Sustained Limit (LSL), expressed in dollars per start. [e2] The Minimum-Energy Offer covers the cost of producing energy at the LSL, in $/MWh. [e4] The Energy Offer Curve is the price and quantity schedule above that. [e1] ERCOT must validate each component before it can be used in any ERCOT process. [e3]

Different processes use different parts. The DAM uses all three parts and also accepts Energy Offer Curves submitted alone. RUC uses only the Startup and Minimum-Energy components to decide commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource's energy payments. SCED may use the Energy Offer Curve in real time. [e5]

## ERCOT context

The three-part structure matters because it separates the cost of turning a unit on and holding it at minimum from the cost of incremental energy, which lets the DAM and RUC commit units on all-in cost while SCED dispatches on the energy curve. [e5] The IMM notes that ERCOT also applies a $250-per-MWh offer floor to RUC-committed units. [e7]

## Key facts

- Three parts: Startup Offer, Minimum-Energy Offer, Energy Offer Curve. [e1]
- Startup Offer is in dollars per start; Minimum-Energy Offer is in $/MWh at LSL. [e2][e4]
- RUC uses only the Startup and Minimum-Energy Offers for commitment decisions. [e5]
- ERCOT must validate each component before use. [e3]

## Say it like this

A three-part offer tells ERCOT what it costs to start the unit, what it costs to run it at minimum, and what each additional MWh costs. The day-ahead market and RUC use the first two to decide whether to commit; SCED dispatches off the energy curve.

## Common confusion

- Three-Part Offer versus Energy Offer Curve: the curve is only one of the three parts, and the DAM also accepts a curve without the other two. [e1][e5]
- Self-commitment: an Energy Offer Curve without Startup and Minimum-Energy Offers is a different offer type from a three-part offer, and only three-part offers are used in RUC. [e5]

## Questions

### What are the three parts?

Startup Offer, Minimum-Energy Offer, and Energy Offer Curve. [e1]

### Which parts does RUC use?

Only the Startup Offer and Minimum-Energy Offer for commitments; the energy curve may be used in Settlement to claw back energy payments. [e5]

### What does the Startup Offer cover?

All costs incurred in starting up and reaching LSL, in dollars per start. [e2]

## Open items

- Deeper pass: offer criteria and cost caps (np-04 Sections 4.4.9.2.1 to 4.4.9.2.3) and verifiable cost rules.
- Deeper pass: treatment of Combined Cycle configurations and self-commitment in the DAM.
- Deeper pass: IMM discussion of offer floors for RUC and NSRS capacity.
