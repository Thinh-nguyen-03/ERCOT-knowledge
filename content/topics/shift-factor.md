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
    note: SCED Step 2 mitigation applies only to a Resource whose Shift Factor on the import side of a non-competitive constraint exceeds SFP4 (2%). [e11][e12][e29]
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
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, variable definitions"
    quote: "DAWASF _(j, c)          none            Day-Ahead Weighted Average Shift Factor at source per constraint—The Day-Ahead Shift Factor for the source Settlement Point and the directional network element for constraint c, in the hour."
  - id: e14
    source: np-04
    locator: "Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, variable definitions"
    quote: "The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour."
  - id: e15
    source: np-04
    locator: "Section 4.6.1.2, variable definitions"
    quote: "The DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour."
  - id: e16
    source: np-04
    locator: "Section 4.6.1.2, variable definitions"
    quote: "The Load distribution factor for power flow bus pb in the Load Zone for the constraint c for the hour."
  - id: e17
    source: np-04
    locator: "Section 4.5.2, Communicating DAM Results, paragraph (7) (current text)"
    quote: "(7) As soon as practicable, but no later than 1330, ERCOT shall make available the Day-Ahead Shift Factors for binding constraints in the DAM and post to the Market Information System (MIS) Secure Area."
  - id: e18
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "Generating units with small Shift Factors (i.e. below Shift Factor threshold) will not be as effective in resolving constraints as will generation units with higher shift factors on the constraint. If there are no efficient generating units then the Shadow Price must be increased to get enough contribution from inefficient units. Therefore, high Shadow Prices indicate inefficient congestion management."
  - id: e19
    source: np-22p-2025-12
    locator: "Section 3.3, Shift Factor Cutoff"
    quote: "The Shift Factor cutoff will cause mismatch between optimized line power flow and actual line power flow that will happen when dispatch Base Points are deployed. This mismatch can degrade the efficiency of congestion management."

  - id: e20
    source: np-07
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, variable definitions"
    quote: "DRF _(c)                none            Deration Factor per constraint—The deration factor of the constraint c for the hour, equal to the MW amount by which the constraint is oversold divided by the total MW amount of the positive impacts on the constraint of all CRRs existing prior to DAM execution."
  - id: e21
    source: np-03
    locator: "Section 3.19.4, paragraph (7)(b)"
    quote: "(b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and"
  - id: e22
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "$LMP_{EB} = \\lambda - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$"
  - id: e23
    source: np-22p-2025-12
    locator: "Section 3.1, Congestion LMP Component"
    quote: "The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion."
  - id: e24
    source: np-04
    locator: "Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, paragraph (1)"
    quote: "DALZSF _(c) = $\\begin{array}{r} \\Sigma \\\\ pb \\end{array}$ (DADF _(pb, c) * DASF _(pb, c))"
  - id: e25
    source: np-04
    locator: "Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, paragraph (1)"
    quote: "DASPP = DASL - $\\begin{array}{r} \\Sigma \\\\ c \\end{array}$(DALZSF _(c) * DASP _(c))"
  - id: e26
    source: np-07
    locator: "Section 7.9.1.1, price used to calculate the derated amount"
    quote: "OBLDRPR _((j, k)) = [](Max (0, DAWASF _(j, c) – DAWASF _(k, c)) * DASP _(c) * DRF_(c))"
  - id: e27
    source: np-22p-2025-12
    locator: "Section 3.3, Shift Factor Cutoff, note"
    quote: "Note: This Shift Factor cutoff is not related to above Shift Factor efficiency threshold used for determination of maximal Shadow Price."
  - id: e28
    source: np-22p-2025-12
    locator: "Section 3.3, Shift Factor Cutoff"
    quote: "Since the effect of the Shift Factors below the cut off on the overload are ignored in the optimization"
  - id: e29
    source: np-03
    locator: "Section 3.19.4, paragraph (7)(c)"
    quote: "(c) The Resource has a Shift Factor on the import side of the constraint with an absolute value greater than SFP4;"
---

## Definition

A shift factor measures the flow on a particular Transmission Element caused by a unit injection of power at one Electrical Bus, withdrawn at a fixed reference Electrical Bus. [e1]

## How it works

Shift factors apply to each constraint at the bus level. In the LMP calculation they are the weights on the constraint shadow prices: the LMP at an Electrical Bus is System Lambda minus, for each constraint, the bus's shift factor multiplied by that constraint's shadow price. [e8] Shadow prices on congested lines are positive and otherwise zero, and buses on one side of a line have negative shift factors while buses on the other side have positive ones. [e9] The sign of the shift factor therefore decides whether congestion on a line lowers or raises the price at a bus. (The formula is in the Formula section.)

Zone and hub prices are built from the bus-level values. In the Day-Ahead Market, ERCOT computes a Load Zone's aggregated shift factor for a constraint from the shift factors of the zone's power flow buses [e15], weighted by Load distribution factors [e16], and the Load Zone's shift factor is used in the Settlement Point Price. [e14] For DAM and CRR Settlement purposes the Load-weighting must be determined using the Load distribution factors. [e2] The North 345 kV Hub Price likewise uses the aggregated shift factors of the Hub Buses for each hour of the DAM. [e4]

ERCOT posts the inputs. Every hour it posts the binding transmission constraints with the contingency and overloaded element pairs behind them, and the shift factors by Resource Node, Hub, Load Zone and DC Tie. [e3] For the DAM, ERCOT makes the Day-Ahead Shift Factors for binding constraints available as soon as practicable, but no later than 1330; the current text posts them to the MIS Secure Area. [e17]

## Formula

The LMP at Electrical Bus EB is System Lambda minus the sum, over transmission lines, of the bus's shift factor for the line times the line's shadow price. The methodology writes it as LMP = lambda minus the sum of SF times SP [e22]; in the words of its variable list: LMP is the LMP at Electrical Bus EB, lambda is System Lambda (the shadow price of power balance), SF is the shift factor for the bus and line, and SP is the shadow price for the line. [e8] The shift-factor-weighted term is the congestion component of the bus LMP; the methodology says it is a price incentive to generation at that bus to increase or decrease output to manage congestion. [e22][e23]

For a Day-Ahead Load Zone, the DASPP is the Day-Ahead System Lambda minus the sum over constraints of the Load Zone's aggregated shift factor times the constraint's DAM shadow price; the zone's aggregated shift factor is the sum over its power flow buses of the Load distribution factor times the bus shift factor. [e14][e15][e16][e24][e25]

In CRR settlement, the deration price for a PTP Obligation is given by a formula (the summation operator is not legible in the saved text, where it shows as "[]") whose terms are the larger of zero and the source Day-Ahead Weighted Average Shift Factor minus the sink one, multiplied by the constraint's Day-Ahead shadow price and the deration factor. [e26][e13][e20]

## ERCOT context

Shift factors also enter the competitiveness screen for constraints. A constraint can only be classed as competitive in the SCED test if, among other conditions, buses with available Resource capacity have negative shift factors whose absolute value is at least the SFP3 threshold, which is set at 2%. [e5][e6] Those are the current text's terms; a pending revision (NPRR1182) would rewrite it to cover shift factors that can help resolve the constraint by raising injection or cutting withdrawal. [e7]

The same threshold idea limits mitigation. Mitigation in SCED Step 2 is applied only when the constraint is non-competitive (by the SCED test or the IMM), the Resource's DME is a pivotal player or holds enough import-side ECI Effective Capacity, and the Resource's shift factor on the import side exceeds SFP4 in absolute value. [e11][e21][e29] (Pending NPRR1182 would also exclude Controllable Load Resources from this paragraph; that is not yet in force.) SFP4 is 2%, the "minimum Shift Factor threshold below which a Resource will not have mitigation applied". [e12]

Shift factors also tell you why shadow prices get large. The shadow-price-cap methodology says units with small shift factors are less effective at resolving a constraint, so if no efficient units exist the shadow price must rise to draw enough output from inefficient ones, and high shadow prices therefore indicate inefficient congestion management. [e18] It also describes a separate shift factor cutoff: the effect of shift factors below the cutoff is ignored in the optimization [e28], the default is 0.0001, it is applied in the EMS to cut data volume and filter numerical error [e10], and it creates a mismatch between optimized and actual line flows that can degrade congestion management. [e19]

## Key facts

- A shift factor is defined per Transmission Element, from a bus to a fixed reference bus. [e1]
- Bus LMP = System Lambda minus the sum of (shift factor x shadow price) over constraints. [e8]
- For DAM and CRR Settlement purposes, Load Zone prices use Load-weighted aggregated shift factors for each constraint. [e2]
- ERCOT posts shift factors hourly by Resource Node, Hub, Load Zone and DC Tie. [e3]
- Day-Ahead Shift Factors for binding constraints are due no later than 1330 (current text: MIS Secure Area). [e17]
- SFP3 (competitive-constraint eligibility) and SFP4 (mitigation applicability) are both 2%. [e5][e12]
- The EMS shift factor cutoff default is 0.0001, per the December 5, 2025 version of the shadow-price-cap methodology (Attachment P). [e10]

## Say it like this

(Guidance) A shift factor tells you how many MW of a given line's flow one more MW at a bus would cause. Multiply it by the constraint's shadow price and you get the congestion piece of the LMP at that bus, which is why the same binding line can push one side of the system up and the other side down.

## Common confusion

A shift factor is not a price and not a limit; it is a sensitivity measured to a fixed reference bus. [e1] It also is not the same as a Load distribution factor, which supplies weights for aggregating bus-level values into a zone. [e2][e16] The EMS shift factor cutoff (0.0001 default) is a different thing from the SFP3 and SFP4 competitiveness and mitigation thresholds (2%); the methodology itself says its cutoff is not related to its shadow-price efficiency threshold. [e27][e10][e5][e12]

## Questions

### What does a shift factor of 0.10 on a line mean?

By the definition, a unit injection at that bus, taken from the fixed reference bus, changes the flow on that element by 10% of the injection. The 0.10 figure is illustrative. [e1]

### How does ERCOT get a Load Zone price from shift factors?

It aggregates the shift factors of the zone's power flow buses for each constraint, weighting by Load distribution factors, and uses the result with the shadow prices in the zone price formula. [e2][e14][e15][e16]

### Why can one binding constraint raise prices on one side and lower them on the other?

Shadow prices on congested lines are positive, but shift factors are negative on one side of the line and positive on the other. Since bus LMP subtracts shift factor times shadow price from System Lambda, a negative shift factor adds to the price and a positive one subtracts. [e8][e9]

### Why does ERCOT ignore Resources with small shift factors in mitigation?

Mitigation in SCED Step 2 requires a Resource shift factor on the import side above SFP4, which is 2%; below that the Resource is not mitigated. [e29][e12] Small shift factors also mean a Resource is not very effective at resolving the constraint. [e18]

### What if no Resource has a large enough shift factor to relieve a constraint?

The methodology says the shadow price must then be increased to get enough contribution from inefficient units. [e18]

### Where do analysts find shift factors?

ERCOT posts them hourly, by Resource Node, Hub, Load Zone and DC Tie, on the MIS Secure Area; Day-Ahead values follow the DAM by 1330. [e3][e17]

## Open items

- Only the North 345 kV Hub's shift-factor pricing was quoted; other hubs were not read.
- Sign convention for import-side versus export-side in the competitiveness tests: the current text pairs "negative Shift Factors" with buses that have Available Capacity on the import side, but no saved source states in one sentence which side of the reference bus is "import". Not resolved.
- The first-pass question on public posting is partly answered: np-04 4.5.2(7) and np-06 show a pending (NPRR1239) change from the MIS Secure Area to the ERCOT website; whether it has been implemented was not confirmed.
- The methodology (np-22p-2025-12) leaves its own efficiency-threshold and maximum-congestion-component defaults as placeholders ("x%", "$y/MWh") in Section 3.4; the PUCT-approved cap values are not cited here.
