---
id: shift-factor
name: Shift Factors
aliases: [shift factor, shift factors, SF, distribution factor sensitivity]
kind: metric
domain: congestion
level: 2
lenses: [analyst, congestion, trading]
as_of: 2026-11-18
links:
  - to: shadow-price
    type: related
    note: A shift factor measures the flow on a Transmission Element from a unit injection at a bus, which is a different quantity from the constraint's shadow price. [e1]
  - to: binding-constraint
    type: related
    note: ERCOT posts shift factors alongside the binding constraints they apply to. [e3]
  - to: congestion
    type: related
    note: ERCOT posts shift factors by Resource Node, Hub, Load Zone and DC Tie on the MIS Secure Area. [e3]
  - to: load-zone
    type: used-in
    note: For DAM and CRR Settlement purposes, Load Zone prices are built from Load-weighted aggregated shift factors of the zone's power flow buses. [e2]
  - to: trading-hub
    type: used-in
    note: The North 345 kV Hub Price uses the aggregated shift factors of the Hub Buses. [e4]
  - to: gtc
    type: related
    note: The SCED competitiveness test for constraints uses a 2% minimum shift factor threshold. [e5]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Shift Factor"
    quote: "A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus."
  - id: e2
    source: np-03
    locator: "Section 3.4, Load Zones, paragraph (1)"
    quote: "ERCOT shall assign every power flow bus to a Load Zone for Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(b)-(c)"
    quote: "All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint; and (c) Shift Factors, including Private Use Network Settlement Points, by Resource Node, Hub, Load Zone, and DC Tie."
  - id: e4
    source: np-03
    locator: "Section 3.5.2.1, North 345 kV Hub, paragraph (2)"
    quote: "The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead"
  - id: e5
    source: np-03
    locator: "Section 3.19.1, threshold table (SFP3)"
    quote: "SFP3        Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process                                2%"
  - id: e6
    source: np-03
    locator: "Section 3.19.4, paragraph (2)(c)"
    quote: "There are negative Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that have an absolute value greater than or equal to SFP3; and"
  - id: e7
    source: np-03
    locator: "Section 3.19.4, pending NPRR1182 replacement box for paragraph (2)(c)"
    quote: "(c) There are Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that can help resolve the constraint by increasing power injection or reducing power withdrawal that have an absolute value greater than or equal to SFP3; and"
---

## Definition

A shift factor measures the flow on a particular Transmission Element caused by a unit injection of power at one Electrical Bus, withdrawn at a fixed reference Electrical Bus. [e1]

## How it works

Shift factors apply to each constraint at the bus level. Load Zone prices for DAM and CRR Settlement purposes are built from those bus-level values: ERCOT calculates a Load Zone Settlement Point Price from the Load-weighted aggregated shift factors of the zone's power flow buses for each constraint, with the Load distribution factors supplying the weights. [e2] The North 345 kV Hub Price likewise uses the aggregated shift factors of the Hub Buses for each hour of the DAM. [e4]

ERCOT posts the inputs. Every hour it posts the binding transmission constraints with the contingency and overloaded element pairs behind them, and the shift factors by Resource Node, Hub, Load Zone and DC Tie. [e3]

## ERCOT context

Shift factors also enter the competitiveness screen for constraints. A constraint can only be classed as competitive in the SCED test if, among other conditions, buses with available Resource capacity have negative shift factors whose absolute value is at least the SFP3 threshold, which is set at 2%. [e5][e6] Those are the current text's terms; a pending revision (NPRR1182) would rewrite it to cover shift factors that can help resolve the constraint by raising injection or cutting withdrawal. [e7]

## Key facts

- A shift factor is defined per Transmission Element, from a bus to a fixed reference bus. [e1]
- For DAM and CRR Settlement purposes, Load Zone prices use Load-weighted aggregated shift factors for each constraint. [e2]
- ERCOT posts shift factors hourly by Resource Node, Hub, Load Zone and DC Tie. [e3]
- The minimum shift factor threshold for the SCED competitiveness test is 2%. [e5]

## Say it like this

A shift factor tells you how many MW of a given line's flow one more MW at a bus would cause. It is the sensitivity that links a binding constraint to the price at each location.

## Common confusion

A shift factor is not a price and not a limit; it is a sensitivity measured to a fixed reference bus. [e1] It also is not the same as a Load distribution factor, which supplies weights for aggregating bus-level values into a zone. [e2]

## Questions

### What does a shift factor of 0.10 on a line mean?

By the definition, a unit injection at that bus, taken from the fixed reference bus, changes the flow on that element by 10% of the injection. The 0.10 figure is illustrative. [e1]

### How does ERCOT get a Load Zone price from shift factors?

It aggregates the shift factors of the zone's energized power flow buses for each constraint, weighting by Load distribution factors. [e2]

### Where do analysts find shift factors?

ERCOT posts them hourly, by Resource Node, Hub, Load Zone and DC Tie, on the MIS Secure Area. [e3]

## Open items

- Only the North 345 kV Hub's shift-factor pricing was quoted; other hubs were not read.
- Deeper pass: the full LMP decomposition (energy, congestion, loss) and how shift factors times shadow prices make up the congestion component; np-06 6.5.7.3 and np-04 DAM clearing were not read for this.
- Deeper pass: sign convention for import-side versus export-side shift factors in the competitiveness tests.
- Hourly posting is on the MIS Secure Area per np-06; whether any public posting exists was not confirmed (a table row in np-06 shows a pending move to the ERCOT website).
