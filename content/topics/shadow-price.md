---
id: shadow-price
name: Shadow Price
aliases: [shadow price, constraint shadow price, maximum shadow price, shadow price cap]
kind: metric
domain: congestion
level: 1
lenses: [analyst, congestion, trading]
as_of: 2026-11-18
links:
  - to: binding-constraint
    type: related
    note: A shadow price is the marginal cost of redirecting flow around a binding constraint. [e4]
  - to: shift-factor
    type: related
    note: How shift factors combine with the shadow price was not sourced in this topic; see the shift-factor topic.
  - to: gtc
    type: related
    note: ERCOT treats GTCs as base-case stability constraints with a shadow price cap of $5,251 per MW in 2025. [e6]
  - to: sced
    type: used-in
    note: SCED produces Shadow Prices along with Base Points and LMPs. [e3]
  - to: congestion
    type: determines
    note: Day-ahead congestion value is flow over a constraint times its shadow price. [e7]
  - to: lmp
    type: determines
    note: The shadow price set for a violated constraint determines congestion prices at the locations that affect it. [e8]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Shadow Price"
    quote: "A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.1.11, paragraphs (2)-(3)"
    quote: "ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.3, paragraph (b)"
    quote: "The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints."
  - id: e4
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, discussion of NPRR 1230"
    quote: "At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommendation 2023-1. The higher shadow price cap allows SCED to produce more expensive dispatch solutions to avoid violating these constraints."
  - id: e6
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints, 2025 shadow price caps"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost."
  - id: e9
    source: np-06
    locator: "Section 6.5.7.1.11, paragraph (3)"
    quote: "Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint."
---

## Definition

A shadow price is the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were made available. [e1] For a transmission constraint, the IMM describes it as the marginal cost of redirecting the flow of energy around a binding constraint. [e4]

## How it works

SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to the security constraints. [e3] ERCOT sets a maximum shadow price for each network constraint as part of its contingency definition, and the cost SCED calculates to resolve another MW of congestion on that constraint cannot exceed it. A separate maximum applies to the power balance constraint. [e2][e9]

Per the IMM, violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps. When the marginal cost of relief through dispatch exceeds the reliability cost of violating the constraint, the cap stops further dispatch cost and sets the shadow price, which determines congestion prices at the locations that affect the violated constraint. [e8] In the day-ahead market, congestion value is the flow over each constraint times its shadow price. [e7]

## ERCOT context

The IMM reports that ERCOT implemented NPRR 1230 at the end of 2024 to raise the cap on base-case constraints, which lets SCED choose more expensive dispatch to avoid violations. [e5] In 2025 the cap for GTCs treated as base-case stability constraints was $5,251 per MW. [e6]

## Key facts

- ERCOT sets a maximum shadow price per network constraint and for the power balance constraint. [e2][e9]
- SCED's cost to resolve one more MW of congestion is limited to that maximum. [e2]
- 2025 cap for GTCs as base-case stability constraints: $5,251 per MW. [e6]
- NPRR 1230, implemented at the end of 2024, raised the cap on base-case constraints. [e5]
- Day-ahead congestion value equals flow times shadow price. [e7]

## Say it like this

A shadow price is what it costs the system, at the margin, to squeeze one more MW through a binding constraint. ERCOT caps it at a reliability-based value, so when relief would cost more than the reliability cost of a violation, the cap sets the shadow price. [e8]

## Common confusion

The shadow price is a marginal cost per MW, not a total congestion cost; congestion value comes from multiplying it by flow. [e7] It is also not a bid or offer: it comes out of the SCED solution. [e3]

## Questions

### Why does ERCOT cap shadow prices?

When relief through dispatch would cost more than the reliability cost of a violation, the cap limits the dispatch cost and sets the shadow price rather than letting it rise further. [e8][e2]

### What changed with NPRR 1230?

It raised the cap on base-case constraints so SCED can find more expensive dispatch solutions to avoid violating them. [e5]

### How does a shadow price become a congestion charge?

In the day-ahead market, congestion value is the flow over the constraint times its shadow price. [e7]

## Open items

- Deeper pass: Section 22 Attachment P (methodology for maximum shadow prices) is not in the saved sources; only the IMM's 2025 cap levels and the np-06 references were used. The IMM lists caps for 345 kV, 138 kV and 69 kV constraints that were not quoted here.
- How shadow prices are combined with shift factors into the LMP congestion component was not sourced in this pass.
