---
id: binding-constraint
name: Binding Constraint
aliases: [binding constraint, active constraint, violated constraint, constraint, contingency constraint]
kind: concept
domain: congestion
level: 1
lenses: [analyst, congestion, trading]
as_of: 2026-11-18
links:
  - to: shadow-price
    type: related
    note: The shadow price is the marginal cost of redirecting flow around a binding constraint. [e5]
  - to: shift-factor
    type: related
    note: ERCOT posts shift factors with the binding constraints each hour. [e2]
  - to: gtc
    type: related
    note: GTCs are constraints for stability and voltage limits that ERCOT cannot model directly. [e3]
  - to: congestion
    type: related
    note: When a constraint binds, prices differ across locations. [e4]
  - to: sced
    type: used-in
    note: SCED activates constraints and observes both competitive and non-competitive ones. [e1]
  - to: market-power-mitigation
    type: related
    note: Whether a binding constraint is competitive determines whether offers are mitigated.
evidence:
  - id: e1
    source: np-06
    locator: "Section 6.5.7.1.11, paragraph (1)"
    quote: "ERCOT may not allow any constraint (contingency and limiting Transmission Element pair) identified by NSA to be activated in SCED until it has verified that the contingency definition in NSA associated with the constraint is accurate and appropriate given the current operating state of the ERCOT Transmission Grid."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(b)"
    quote: "All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint;"
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Non-Competitive Constraint"
    quote: "A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests."
  - id: e4
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "When these limits bind, congestion increases dispatch costs and causes energy prices to vary across locations in the network."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit."
  - id: e6
    source: np-03
    locator: "Section 3.19.4, paragraph (6)"
    quote: "Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Real-Time Congestion"
    quote: "SCED manages power flows across the network as physical constraints become binding in real time."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "Figure 38 shows that the overall rate of violated transmission constraints continued to drop precipitously to 64 constraint-hours in 2025, by far the lowest annual total."
---

## Definition

"Binding constraint" is not a defined term in the Protocol definitions (np-02). The Protocols and the IMM use it for a transmission constraint whose limit is reached so that dispatch must change. In ERCOT a constraint is a contingency and limiting Transmission Element pair that Network Security Analysis identifies and that is activated in SCED. [e1] When these limits bind, congestion raises dispatch costs and makes energy prices differ by location. [e4]

## How it works

ERCOT may not activate a constraint in SCED until it has verified that the contingency definition behind it is accurate for the current operating state of the grid. [e1] Each hour ERCOT posts the binding transmission constraints and the contingency or overloaded element pairs that caused them. [e2] The IMM notes that SCED manages flows as physical constraints become binding in real time, so real-time and day-ahead congestion can differ. [e7]

A constraint can be binding and still be satisfied. It is "violated" only when dispatch flows exceed its limit; the shadow price is the marginal cost of redirecting flow around the binding constraint. [e5]

Each binding constraint is also classified as competitive or non-competitive, and ERCOT posts the designation for each SCED execution each hour. [e6] A non-competitive constraint is one that is not determined to be competitive under the Section 3.19 tests. [e3]

## ERCOT context

The IMM reports that violated transmission constraints fell to 64 constraint-hours in 2025, the lowest annual total. [e8]

## Key facts

- A constraint is a contingency and limiting Transmission Element pair activated in SCED. [e1]
- ERCOT posts all binding constraints hourly. [e2]
- Violated means flows exceed the limit. [e5]
- Competitive or non-competitive status is posted for each binding constraint each hour. [e6]
- 2025 violated constraint-hours: 64, the lowest on record per the IMM. [e8]

## Say it like this

A binding constraint is a transmission limit that is actually holding dispatch back in that interval. It is the reason nodal prices separate.

## Common confusion

Binding does not mean violated. A constraint can be at its limit with the shadow price positive and no violation, while a violation means flows exceed the limit. [e5] Also, binding constraints in real time are not always the ones modeled day ahead. [e7]

## Questions

### What is the difference between binding and violated?

The IMM says a constraint is violated when market dispatch flows exceed its transmission limit; a binding constraint is one whose limit is holding dispatch, with a shadow price attached. [e5]

### Where do I see today's binding constraints?

ERCOT posts them hourly with the contingency and overloaded element pairs, and the competitive or non-competitive designation. [e2][e6]

## Open items

- No Protocol definition of "binding constraint" was found in np-02; the framing here comes from np-06 and the IMM.
- Deeper pass: ranking of the most frequently binding or most costly constraints in 2024 and 2025; IMM figures are garbled in the text copies and no OCR copy is saved.
- Deeper pass: the constraint-activation and NSA process in np-06 6.5.7.1.
