---
id: gtc
name: GTC (Generic Transmission Constraint)
aliases: [GTC, GTL, Generic Transmission Constraint, Generic Transmission Limit, stability constraint]
kind: concept
domain: congestion
level: 2
lenses: [analyst, congestion, trading]
as_of: 2026-11-18
links:
  - to: congestion
    type: related
    note: GTCs account for a measurable share of day-ahead congestion value. [e6]
  - to: binding-constraint
    type: related
    note: A GTC is one kind of constraint that can bind in SCED, and a Non-Competitive Constraint can be associated with a GTC. [e1][e9]
  - to: shadow-price
    type: related
    note: In 2025 ERCOT applied a $5,251 per MW shadow price cap to GTCs as base-case stability constraints. [e7]
  - to: wind-generation
    type: related
    note: GTCs matter most where renewable generation sits far from load centers. [e5]
  - to: crez
    type: related
    note: Renewable export regions are where the IMM says stability constraints are most relevant. [e5]
  - to: sced
    type: used-in
    note: GTCs created under Section 3.10.7.6 are used in the SCED application. [e3]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Constraint (GTC)"
    quote: "A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT’s powerflow and contingency analysis applications."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Limit (GTL)"
    quote: "The value of the transmission flow limit associated with a GTC."
  - id: e3
    source: np-03
    locator: "Section 3.10.7.6, paragraph (1)"
    quote: "For the sole purpose of creating transmission flow constraints between areas of the ERCOT Transmission Grid in ERCOT applications that are unable to recognize non-thermal operating limits (such as system stability limits and voltage limits on Electrical Buses), ERCOT may create new Generic Transmission Constraints (GTCs) or modify existing GTCs for use in reliability and market analysis. GTCs created or modified as described in this Section shall be used in the SCED application. ERCOT shall not use GTCs in ERCOT applications to replace other constraints already capable of being directly modeled in the SCED application."
  - id: e4
    source: np-03
    locator: "Section 3.10.7.6, paragraph (7)"
    quote: "No later than 180 days after the effective date of a new GTC, ERCOT shall post a report listing alternatives for exiting the GTC to the MIS Secure Area. The listed alternatives may include but are not limited to the implementation or modification of a RAS or a transmission improvement project."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Generic Transmission Constraints"
    quote: "GTCs manage grid stability across geographic regions rather than enforce thermal transmission limits for specific transmission paths. They are especially relevant in areas with significant renewable generation, which are often far from load centers and can contribute to system stability concerns."
  - id: e6
    source: imm-som-2024
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "The figure also indicates that roughly 12% of the total congestion value in the day-ahead market during 2024 was attributable to GTCs."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Non-Competitive Constraint"
    quote: "A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests."
  - id: e8
    source: imm-som-2025
    locator: "Executive Summary / renewable congestion discussion"
    quote: "ERCOT had 26 active GTCs in 2025, compared to 18 in 2021."
---

## Definition

A Generic Transmission Constraint is a transmission constraint made up of one or more grouped Transmission Elements, used to constrain flow between geographic areas of ERCOT to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow and contingency analysis applications. [e1] The Generic Transmission Limit (GTL) is the flow limit value associated with a GTC. [e2]

## How it works

ERCOT may create or modify GTCs only to create flow constraints between areas in applications that cannot recognize non-thermal limits such as stability or bus voltage limits. These GTCs are used in SCED, and ERCOT may not use a GTC to replace a constraint that SCED can already model directly. [e3] The IMM describes them as managing stability across regions rather than enforcing thermal limits on specific paths. [e5]

Within 180 days of a new GTC taking effect, ERCOT must post a report of alternatives for exiting it, which may include a RAS or a transmission improvement project. [e4]

## ERCOT context

The IMM links GTCs to renewable-heavy regions far from load. [e5] It counted 26 active GTCs in 2025 against 18 in 2021. [e8] In 2024 roughly 12% of day-ahead congestion value came from GTCs. [e6] For pricing, ERCOT treats GTCs as base-case stability constraints with a $5,251 per MW shadow price cap (2025). [e7]

## Key facts

- GTC = grouped Transmission Elements limiting flow between areas, for stability and voltage. [e1]
- GTL = the flow limit value of a GTC. [e2]
- GTCs are used in SCED and may not replace constraints SCED can model directly. [e3]
- 180-day exit-alternatives report for new GTCs. [e4]
- Active GTCs: 26 in 2025 versus 18 in 2021. [e8]
- About 12% of 2024 day-ahead congestion value was attributable to GTCs. [e6]

## Say it like this

A GTC is a modeled stand-in for a stability or voltage limit that ERCOT's normal analysis cannot see, applied as a flow limit between areas. The IMM ties them to areas with significant renewable generation far from load.

## Common confusion

GTCs are not thermal line ratings; they are applied as flow limits between areas. [e1][e5] Also, the GTL is the number, while the GTC is the constraint. [e2]

## Questions

### Why does ERCOT use GTCs instead of normal constraints?

Some stability and voltage limits cannot be modeled directly in its powerflow and contingency applications, so ERCOT uses grouped elements with a limit to represent them. [e1][e3]

### How big is GTC congestion?

The IMM attributed roughly 12% of 2024 day-ahead congestion value to GTCs. [e6]

### What must ERCOT do after creating a new GTC?

Post a report listing alternatives for exiting it no later than 180 days after it takes effect. [e4]

## Open items

- Deeper pass: posting and comment requirements for new or modified GTCs (np-03 3.10.7.6 paragraphs (3)-(6)), and the list and locations of active GTCs.
- Deeper pass: GTL setting rules (the lowest non-zero limit for localized stability issues, paragraph (2)) and the quarterly stability assessment in the Planning Guide, which is not saved.
- Real-time GTC congestion share in 2025 was not sourced; the 2024 IMM report had a ~10% increase and 22% real-time figure not quoted here.
