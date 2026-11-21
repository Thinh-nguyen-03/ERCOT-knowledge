---
id: shift-factor
name: Shift Factors
aliases: [shift factor, shift factors, SF, distribution factor sensitivity]
kind: metric
domain: congestion
level: 2
lenses: [analyst, congestion, trading]
as_of: 2026-11-21
depth: deep
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
  - to: lmp
    type: determines
    note: At an Electrical Bus, LMP is System Lambda minus the sum over constraints of shift factor times shadow price. [e8]
  - to: system-lambda
    type: related
    note: System Lambda is the shadow price of the power balance constraint and the first term of the bus LMP formula. [e8]
  - to: crr
    type: used-in
    note: CRR Settlement uses Day-Ahead Weighted Average Shift Factors at source and sink in the deration of PTP Obligations. [e13]
  - to: market-power-mitigation
    type: used-in
    note: SCED Step 2 mitigation applies only to a Resource whose Shift Factor on the import side of a non-competitive constraint exceeds SFP4 (2%). [e11]
  - to: sced
    type: used-in
    note: SCED applies a Shift Factor cutoff (default 0.0001 per the shadow-price-cap methodology) when modeling line flows. [e10]
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
  - id: e8
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line."
  - id: e9
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive."
  - id: e10
    source: np-22p-2025-12
    locator: "Section 3.3, Shift Factor Cutoff"
    quote: "The Shift Factor cutoff can reduce volume of Shift Factor data and filter out numerical errors in calculating Shift Factors. Currently the default value of Shift Factor cut off is 0.0001) and is implemented at the Energy Management System (EMS) to reduce the amount of data transferred to MMS. Any threshold above that level will cause a distortion of congestion management process."
  - id: e11
    source: np-03
    locator: "Section 3.19.4, paragraph (7)(a)-(c)"
    quote: "(a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM;"
  - id: e12
    source: np-03
    locator: "Section 3.19.1, threshold table (SFP4)"
    quote: "SFP4        Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2                                                        2%"
  - id: e13
    source: np-07
    locator: "Section 7.9.3 (CRR settlement variables), DAWASF definition"
    quote: "DAWASF _(j, c)          none            Day-Ahead Weighted Average Shift Factor at source per constraint—The Day-Ahead Shift Factor for the source Settlement Point and the directional network element for constraint c, in the hour."
  - id: e14
    source: np-04
    locator: "Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, variable definitions"
    quote: "DALZSF _(c)      none    Day-Ahead Shift factor of the Load Zone The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour."
  - id: e15
    source: np-04
    locator: "Section 4.6.1.2, variable definitions"
    quote: "DASF _(pb, ,c)   none    Day-Ahead Shift factor of the power flow busThe DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour."
  - id: e16
    source: np-04
    locator: "Section 4.6.1.2, variable definitions"
    quote: "DADF _(pb, c)    none    Day-Ahead Distribution factor per power flow bus for a constraintThe Load distribution factor for power flow bus pb in the Load Zone for the constraint c for the hour."
  - id: e17
    source: np-04
    locator: "Section 4.5, paragraph (7) (current text)"
    quote: "(7) As soon as practicable, but no later than 1330, ERCOT shall make available the Day-Ahead Shift Factors for binding constraints in the DAM and post to the Market Information System (MIS) Secure Area."
  - id: e18
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "Generating units with small Shift Factors (i.e. below Shift Factor threshold) will not be as effective in resolving constraints as will generation units with higher shift factors on the constraint. If there are no efficient generating units then the Shadow Price must be increased to get enough contribution from inefficient units. Therefore, high Shadow Prices indicate inefficient congestion management."
  - id: e19
    source: np-22p-2025-12
    locator: "Section 3.3, Shift Factor Cutoff"
    quote: "The Shift Factor cutoff will cause mismatch between optimized line power flow and actual line power flow that will happen when dispatch Base Points are deployed. This mismatch can degrade the efficiency of congestion management."

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
