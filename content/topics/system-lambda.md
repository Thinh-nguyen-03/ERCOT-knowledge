---
id: system-lambda
name: System Lambda
aliases: [System Lambda, lambda, system lambda, energy component of LMP, DASL, Day-Ahead System Lambda]
kind: metric
domain: pricing
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: lmp
    type: part-of
    note: System Lambda is the energy component of LMP at each Settlement Point. [e1]
  - to: shadow-price
    type: is-a
    note: System Lambda is the Shadow Price for the power balance constraint. [e1][e2]
  - to: sced
    type: related
    note: The System Lambda from SCED Step 2 is capped at the effective VOLL. [e3]
  - to: dam
    type: related
    note: The day-ahead counterpart is the DAM Shadow Price for the system power balance constraint for the hour. [e6]
  - to: offer-cap
    type: related
    note: The real-time System Lambda plus the reliability deployment adder is the test that can activate the Emergency Pricing Program. [e8]
  - to: congestion
    type: related
    note: For ESRs acting as generators, the IMM counts base points awarded at an LMP above the system lambda as a sign that injections at that location help manage congestion. [e9]
  - to: shift-factor
    type: used-in
    note: Electrical Bus LMP is System Lambda minus the sum over lines of Shift Factor times line Shadow Price. [e12]
  - to: rtc-b
    type: related
    note: The power balance penalty methodology was replaced upon RTC implementation; the December 2025 edition states the current single-value penalty. [e17][e20]
  - to: emergency-pricing-program
    type: used-in
    note: RTM System Lambda plus the reliability deployment adder is the activation test input. [e8]
  - to: large-flexible-load
    type: related
    note: The IMM reports large flexible loads reducing consumption as system lambda rises above $1,000 per MWh. [e21]
  - to: binding-constraint
    type: related
    note: Congestion enters LMP through positive Shadow Prices on congested transmission lines, separately from System Lambda. [e12][e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of System Lambda"
    quote: "The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Shadow Price"
    quote: "A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.3, item (d) on VOLL"
    quote: >-
      Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website.
  - id: e4
    source: np-06
    locator: "Section 6.5.7.1.11, paragraph (3)"
    quote: "Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3.1, item (o)"
    quote: "The Real-Time Reliability Deployment Price Adder for Energy is equal to the positive difference between the System Lambda from item (n) above and the System Lambda of the second step in the two-step SCED process described in paragraph (14)(b) of Section 6.5.7.3, Security Constrained Economic Dispatch, except when ERCOT is directing firm Load shed during EEA Level 3."
  - id: e6
    source: np-04
    locator: "Section 4.6.1.2, variable table for Load Zone DASPP"
    quote: "The DAM Shadow Price for the system power balance constraint for the hour."
  - id: e7
    source: np-06
    locator: "Section 6.6.1, paragraph (1)(a)-(b)(iii), de-energized Electrical Buses"
    quote: >-
      ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order:
      (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specified
      (b) Use the following rules in order:
      (i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist.
      (ii) Use average LMP for all Electrical Buses within the same station, if any exist.
      (iii) Use System Lambda.
  - id: e8
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)"
    quote: "If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change."
  - id: e9
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, ESR congestion management discussion (Figure 39)"
    quote: >-
      For ESRs acting as generators, we aggregate base points awarded at an LMP greater than the system lambda, indicating that energy injections at that location help manage congestion.
  - id: e11
    source: np-02
    locator: "Section 2.1, definition of Settlement Point Price"
    quote: "A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations."
  - id: e10
    source: imm-som-2025
    locator: "Executive Summary, footnote on the reliability adder"
    quote: >-
      The reliability adder uses the dispatch software to simulate the system lambda without RUCs, deployed load capacity, or certain other reliability actions. The adder is the difference in system lambda output by SCED with and without any reliability actions.
  - id: e12
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 3.1, Congestion LMP Component"
    quote: "LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line."
  - id: e13
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 3.1"
    quote: "The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion."
  - id: e14
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 3.1"
    quote: "Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero."
  - id: e15
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 4.1, The Power Balance Penalty"
    quote: "The Power Balance Penalty sets the maximum limit for this Shadow Price, i.e. Power Balance Penalty is the maximum cost paid for one addition/less MW of generation to meet the ERCOT system load constraint."
  - id: e16
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 4.1"
    quote: "The objective function for SCED is the sum of four components: (1) the cost of dispatching generation; (2) the cost of procuring Ancillary Services; (3) the penalty for violating Power Balance constraint; and (4) the penalty for violating network transmission constraints. SCED economically dispatches Generation Resources and Energy Storage Resources (ESRs) and procures Ancillary Services by minimizing this objective function within the Resource physical limits and transmission limits. Since the Power Balance penalty is the maximum cost for meeting the Power Balance, SCED will re-dispatch generation to meet the Power Balance if the cost of re-dispatching the generation is less than cost of violating the Power Balance. When the cost of re-dispatching the Generation Resources and ESRs becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and ESRs and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation."
  - id: e17
    source: np-22p-2025-12
    locator: "Section 22, Attachment P (December 5, 2025 edition), Section 4.1"
    quote: "In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e18
    source: np-22p
    locator: "Section 22, Attachment P (April 1, 2025 edition), Section 4.1 (pre-RTC text)"
    quote: "In the ERCOT design, SCED implements the Power Balance Penalty by a step function with up to 10 (Violation MW; Penalty $/MW) pairs. This curve determines the maximum System Lambda for a given amount of the Power Balance Constraint violation."
  - id: e19
    source: np-22p
    locator: "Section 22, Attachment P (April 1, 2025 edition), Section 4.3, The ERCOT Power Balance Penalty Curve (pre-RTC)"
    quote: "≤ 5 250 5 < to ≤ 10 300 10 < to ≤ 20 400 20 < to ≤ 30 500 30 < to ≤ 40 1,000 40 < to ≤ 50 2,250 50 < to ≤ 100 4,500 > 100 HCAP plus 1"
  - id: e20
    source: np-22p
    locator: "Section 22, Attachment P (April 1, 2025 edition), pending box above Section 4.1 replacement"
    quote: "[OBDRR020 and NPRR1246: Replace Section 4.1 above with the following upon system implementation of the Real-Time Co-Optimization (RTC) project:]"
  - id: e21
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, Large Flexible Load self-curtailment (Figure 28, 2022-2024 data)"
    quote: "The data indicate that LFLs reduce their consumption by as much as 75% when system lambda exceeds $1,000 per MWh."
  - id: e22
    source: imm-som-2025
    locator: "Section on ECRS deployment practice, excess cost of ECRS deployment (Figure 8)"
    quote: "We calculated excess cost as the difference between the original and simulated results, measured as system lambda multiplied by load."
  - id: e23
    source: ercot-nprr1290-prs-report
    locator: "NPRR1290 PRS Report (2025-08-13), Revision Description, item 3"
    quote: "Under RTC+B, with the Real-Time System-Wide Offer Cap (RTSWCAP) at $2,000/MWh, a QSE will not be able to comply with this requirement."

  - id: e24
    source: np-22p
    locator: "Section 22, Attachment P (April 1, 2025 edition), pending replacement of Section 4.1"
    quote: "In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $0.01/MWh."
  - id: e25
    source: np-22p
    locator: "Section 22, Attachment P (April 1, 2025 edition), Section 4.3, under-generation curve cap"
    quote: "The SCED under-generation Power Balance Penalty curve will be capped at LCAP plus $1 per MWh whenever the SWCAP is set to the LCAP."
---

## Definition

System Lambda is the cost of providing one MWh of energy at the reference Electrical Bus. It is the Shadow Price for the power balance constraint, equal to the change in the objective function from relaxing that constraint by one MW, and it is the energy component of LMP at each Settlement Point in ERCOT. [e1]

## How it works

A Shadow Price measures the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were available. [e2] System Lambda is that price for the power balance constraint, and the definition calls it the energy component of LMP. [e1][e2]

In real time, the System Lambda from SCED Step 2 is capped at the effective Value of Lost Load. [e3] Where an Electrical Bus LMP is above the effective VOLL, it is reset to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. ERCOT posts both capped and uncapped values of System Lambda to its website. [e3] Separately, the cost SCED calculates to resolve one more MW on the power balance constraint is limited to a maximum Shadow Price for that constraint set under Section 22, Attachment P. [e4]

In the day-ahead, the Settlement Point Price formulas for Load Zones carry a system-wide term (the day-ahead counterpart of System Lambda), defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]

## Formula

Attachment P gives the Electrical Bus LMP as System Lambda minus a sum over transmission lines: LMP at bus EB = λ − Σ over lines of (Shift Factor of bus EB for the line × Shadow Price of the line), where λ is System Lambda (the Shadow Price of power balance), SF is the Shift Factor for the bus and line, and SP is the Shadow Price for the transmission line. [e12] The Shadow Prices for congested transmission lines are positive, otherwise zero. [e14] The congestion component of LMP represents a price incentive to generation units at that bus to increase or decrease output to manage network congestion. [e13] Put plainly: with no binding network constraint, every bus LMP equals System Lambda; with constraints, bus LMPs differ from System Lambda by the congestion component. [e12][e14]

The maximum System Lambda is set by the power balance penalty: the Power Balance Penalty sets the maximum limit for this Shadow Price, that is the maximum cost paid for one additional or one fewer MW of generation to meet the system load constraint. [e15] The SCED objective function is the sum of the cost of dispatching generation, the cost of procuring Ancillary Services, the penalty for violating the power balance constraint and the penalty for violating network transmission constraints. [e16]

## Timeline

- Pre-RTC (Attachment P, April 1, 2025 edition): SCED implemented the Power Balance Penalty as a step function with up to 10 (violation MW; penalty $/MW) pairs that determined the maximum System Lambda for a given amount of violation. [e18] The under-generation curve in Section 4.3 of that edition ran from 250 $/MWh for violations of 5 MW or less, through 300, 400, 500, 1,000, 2,250 and 4,500 $/MWh at higher violation bands, to HCAP plus 1 above 100 MW. [e19] That edition also said the under-generation curve would be capped at LCAP plus $1 per MWh whenever the SWCAP is set to the LCAP. [e25]
- April 1, 2025 edition also carried a pending box: OBDRR020 and NPRR1246 would replace Section 4.1 upon system implementation of RTC. [e20] The pending text in that edition set the under-generation penalty at VOLL plus RTSWCAP plus $0.01/MWh. [e24] (The December 5, 2025 edition, below, shows a different adder.)
- December 5, 2025 edition (current in the saved sources): the under-generation Power Balance Penalty Price is a single value equal to the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh, which determines the maximum System Lambda; the over-generation penalty price is -$250/MWh. [e17]
- In the NPRR1290 PRS report (2025-08-13), the revision description says that under RTC+B the Real-Time System-Wide Offer Cap (RTSWCAP) is at $2,000/MWh. [e23]

## ERCOT context

System Lambda shows up in several price rules, not only as an LMP component. The Real-Time Reliability Deployment Price Adder for Energy is the positive difference between the System Lambda from the SCED run in item (n) of Section 6.5.7.3.1 and the Step 2 System Lambda, with an exception when ERCOT is directing firm Load shed during EEA Level 3. [e5] The IMM describes the same adder as the difference in system lambda output by SCED with and without any reliability actions. [e10]

It is also a fallback price: when ERCOT must assign an LMP to a de-energized Electrical Bus, the last rule in the order is to use System Lambda, after a predetermined LMP, same-station same-voltage averages and same-station averages. [e7] And the Emergency Pricing Program test adds the RTM System Lambda to the reliability deployment adder and compares the sum to the HCAP for DAM, with activation when it is at or above the HCAP for a total of 12 hours within a rolling 24-hour period. [e8]

Practice: the IMM uses system lambda as a benchmark in two ways. It counts ESR base points awarded at an LMP above system lambda as a sign that injections there help manage congestion, [e9] and it measured the excess cost of ECRS deployment practice as the difference between actual and simulated results, expressed as system lambda multiplied by load. [e22] For demand behavior, the IMM reported in its 2024 State of the Market Report that large flexible loads reduce their consumption by as much as 75% when system lambda exceeds $1,000 per MWh. [e21]

## Key facts

- System Lambda is the Shadow Price for the power balance constraint and the energy component of LMP at each Settlement Point. [e1]
- Bus LMP = System Lambda minus the sum of Shift Factor times line Shadow Price over transmission lines. [e12]
- Real-time System Lambda and MCPCs from SCED Step 2 are capped at the effective VOLL; ERCOT posts capped and uncapped values. [e3]
- The December 5, 2025 Attachment P sets the under-generation Power Balance Penalty Price at effective VOLL plus effective RTSWCAP plus $4,052.01/MWh and the over-generation price at -$250/MWh. [e17]
- The Real-Time Reliability Deployment Price Adder for Energy is built from the difference between two System Lambda values. [e5]
- Day-ahead Load Zone Settlement Point Price formulas use a system-wide term defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- The Emergency Pricing Program activation test uses the sum of the RTM System Lambda and the reliability deployment adder. [e8]

## Say it like this

(Guidance) System Lambda is the marginal cost of one more MWh of energy at the reference bus, and it is the energy component of the LMP at each Settlement Point. Congestion moves individual bus prices away from it, and scarcity pricing is limited by the power balance penalty that caps it.

## Common confusion

(Guidance) System Lambda is not the Settlement Point Price: it is one component of LMP, and Settlement Point Prices are calculated from LMP data. [e1][e11] Also, in the real-time reliability adder the same term appears twice, once from the item (n) SCED run and once from Step 2, so the adder is a difference, not a level. [e5] And the cap on System Lambda from the power balance penalty is a different thing from the VOLL cap applied to Step 2 System Lambda. [e3][e17]

## Questions

### What is System Lambda?

The cost of one more MWh of energy at the reference Electrical Bus, equal to the Shadow Price on the power balance constraint, and the energy component of LMP at each Settlement Point. [e1]

### Where else does System Lambda matter besides being part of LMP?

It is the input to the Real-Time Reliability Deployment Price Adder for Energy, which is the difference between two System Lambda values. [e5] It is the final fallback LMP for de-energized buses, and the sum of RTM System Lambda and the adder is the test for activating the Emergency Pricing Program. [e7][e8]

### Is real-time System Lambda capped?

Yes. System Lambda from SCED Step 2 is capped at the effective VOLL. [e3] Separately, SCED's cost to resolve one MW on the power balance constraint is limited to a maximum Shadow Price for that constraint. [e4] In the December 2025 Attachment P, that limit is the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh for under-generation. [e17]

### Why does the power balance penalty matter for prices?

The Power Balance Penalty is the maximum cost paid for one more or one fewer MW of generation to meet the system load constraint, so it sets the maximum limit of System Lambda. [e15] When re-dispatching costs more than violating the constraint, SCED stops re-dispatching and the objective is minimized with the penalty. [e16]

### What if there were no binding transmission constraints?

Every Shadow Price on congested lines would be zero, so by the Attachment P formula the congestion component is zero and each bus LMP equals System Lambda. [e12][e14]

### How did the power balance penalty change with RTC?

Before RTC the penalty was a step function of up to 10 pairs, rising with the MW of violation. [e18][e19] The December 2025 edition replaces it with a single value built from VOLL, RTSWCAP and an adder. [e17]

## Open items

- No saved protocol sentence writes LMP as System Lambda plus a congestion component in prose; Attachment P Section 3.1 gives the formula LMP = λ minus the sum of Shift Factor times line Shadow Price, which is the decomposition used above. [e12]
- Resolved 2026-11-21: the maximum System Lambda mechanism (power balance penalty, Section 22 Attachment P) is now described. The numeric effective VOLL value was not read, so the dollar value of the maximum System Lambda is not computed here.
- The April 1, 2025 edition of Attachment P shows a pending $0.01/MWh adder while the December 5, 2025 edition shows $4,052.01/MWh; the sources do not explain the change.
- Still open: IMM statistics on System Lambda levels by year; only the 2024 LFL price-response observation was quoted.
