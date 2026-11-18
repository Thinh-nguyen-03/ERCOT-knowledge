---
id: system-lambda
name: System Lambda
aliases: [System Lambda, lambda, system lambda, energy component of LMP, DASL, Day-Ahead System Lambda]
kind: metric
domain: pricing
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-18
links:
  - to: lmp
    type: part-of
    note: System Lambda is the energy component of LMP at each Settlement Point. [e1]
  - to: shadow-price
    type: is-a
    note: System Lambda is the Shadow Price for the power balance constraint. [e1][e2]
  - to: sced
    type: related
    note: Real-time System Lambda comes from SCED, and Step 2 System Lambda is capped at the effective VOLL. [e3]
  - to: dam
    type: related
    note: The day-ahead counterpart is the DAM Shadow Price for the system power balance constraint for the hour. [e6]
  - to: offer-cap
    type: related
    note: The real-time System Lambda plus the reliability deployment adder is the test that can activate the Emergency Pricing Program. [e8]
  - to: congestion
    type: related
    note: The IMM treats an LMP above the system lambda as a sign that injections at that location help manage congestion. [e9]
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
---

## Definition

System Lambda is the cost of providing one MWh of energy at the reference Electrical Bus. It is the Shadow Price for the power balance constraint, equal to the change in the objective function from relaxing that constraint by one MW, and it is the energy component of LMP at each Settlement Point in ERCOT. [e1]

## How it works

A Shadow Price measures the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were available. [e2] System Lambda is that price for the power balance constraint, and the definition calls it the energy component of LMP. [e1][e2]

In real time, ERCOT uses System Lambda from SCED Step 2, and it is capped at the effective Value of Lost Load. [e3] Where an Electrical Bus LMP is above the effective VOLL, it is reset to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. ERCOT posts both capped and uncapped values of System Lambda to its website. [e3] Separately, the cost SCED calculates to resolve one more MW on the power balance constraint is limited to a maximum Shadow Price for that constraint set under Section 22, Attachment P. [e4]

In the day-ahead, the Settlement Point Price formulas for Load Zones carry a system-wide term (the day-ahead counterpart of System Lambda), defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]

## ERCOT context

System Lambda shows up in several price rules, not only as an LMP component. The Real-Time Reliability Deployment Price Adder for Energy is the positive difference between a System Lambda from a modified SCED run and the Step 2 System Lambda, with an exception when ERCOT is directing firm Load shed during EEA Level 3. [e5] The IMM describes the same adder as the difference in system lambda output by SCED with and without any reliability actions. [e10]

It is also a fallback price: when ERCOT must assign an LMP to a de-energized Electrical Bus, the last rule in the order is to use System Lambda, after a predetermined LMP, same-station same-voltage averages and same-station averages. [e7] And the Emergency Pricing Program test adds the RTM System Lambda to the reliability deployment adder and compares the sum to the HCAP for DAM over a rolling 24-hour period. [e8]

## Key facts

- System Lambda is the Shadow Price for the power balance constraint and the energy component of LMP at each Settlement Point. [e1]
- Real-time System Lambda and MCPCs from SCED Step 2 are capped at the effective VOLL; ERCOT posts capped and uncapped values. [e3]
- The Real-Time Reliability Deployment Price Adder for Energy is built from the difference between two System Lambda values. [e5]
- Day-ahead Load Zone Settlement Point Price formulas use a system-wide term defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- The Emergency Pricing Program activation test uses the sum of the RTM System Lambda and the reliability deployment adder. [e8]

## Say it like this

(Guidance) System Lambda is the system-wide marginal price of energy: what one more MWh costs the whole system before location effects. An LMP at a given bus is that energy price plus whatever the transmission constraints add or subtract there.

## Common confusion

(Guidance) System Lambda is not the Settlement Point Price: it is one component of LMP, and Settlement Point Prices are calculated from LMP data. [e1][e11] The "plus whatever constraints add" part is the reader's decomposition of the two definitions; see Open items. Also, in the real-time reliability adder the same term appears twice, once from a modified SCED run and once from Step 2, so the adder is a difference, not a level. [e5]

## Questions

### What is System Lambda?

The cost of one more MWh of energy at the reference Electrical Bus, equal to the Shadow Price on the power balance constraint, and the energy component of LMP at each Settlement Point. [e1]

### Where else does System Lambda matter besides being part of LMP?

It sets the Real-Time Reliability Deployment Price Adder for Energy, as the difference between two System Lambda values. [e5] It is the final fallback LMP for de-energized buses, and the sum of RTM System Lambda and the adder is the test for activating the Emergency Pricing Program. [e7][e8]

### Is real-time System Lambda capped?

Yes. System Lambda from SCED Step 2 is capped at the effective VOLL. [e3] Separately, SCED's cost to resolve one MW on the power balance constraint is limited to a maximum Shadow Price for that constraint. [e4]

## Open items

- No saved protocol sentence writes LMP as System Lambda plus a congestion component; the definition only says System Lambda is the "energy component" of LMP. The decomposition in Say it like this is not directly quoted.
- Deeper pass: the value of the maximum Shadow Price for the power balance constraint (Section 22, Attachment P) was not read.
- Deeper pass: the exact SCED Step 2 System Lambda calculation and how it relates to the posted real-time LMPs.
- Deeper pass: IMM statistics on System Lambda levels by year; none were quoted here.
