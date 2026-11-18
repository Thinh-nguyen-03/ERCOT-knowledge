---
id: hsl-lsl
name: HSL / LSL
aliases: [HSL, LSL, High Sustained Limit, Low Sustained Limit, sustained limits]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: sced
    type: used-in
    note: SCED dispatches each Resource between its LSL and HSL, and the limits feed the Resource limit calculator that SCED uses. [e7][e8][e9]
  - to: ancillary-services
    type: related
    note: A Resource's HSL must be greater than or equal to the LSL and the sum of its Resource-specific Ancillary Service awards. [e6]
  - to: energy-offer-curve
    type: related
    note: The Energy Offer Curve must price the Resource between its HSL and LSL. [e7]
  - to: energy-storage-resource
    type: related
    note: For an ESR a negative limit describes charging capability, with a negative HSL is the minimum temporary charging capability and a negative LSL the maximum sustained charging capability. [e3][e4]
  - to: market-power-mitigation
    type: used-in
    note: For the SCED CCT, the telemetered HSL is used for Resources with specified telemetered statuses, and zero for all others. [e10]
  - to: ruc
    type: related
    note: The IMM removes the aggregate HSL of RUC-committed resources to test how much RUC lowered scarcity. [e12]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, High Sustained Limit (HSL) for a Generation Resource"
    quote: "The limit established by the Qualified Scheduling Entity (QSE), continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource."
  - id: e2
    source: np-02
    locator: "Section 2.1, Low Sustained Limit (LSL) for a Generation Resource"
    quote: "The limit established by the Qualified Scheduling Entity (QSE), continuously updatable in Real-Time, that describes the minimum sustained energy production capability of a Resource."
  - id: e3
    source: np-02
    locator: "Section 2.1, High Sustained Limit (HSL) for an Energy Storage Resource (ESR)"
    quote: "The limit established by the Qualified Scheduling Entity (QSE), expressed as a MW value that may be less than, equal to, or greater than zero, continuously updated in Real-Time. A positive HSL for an ESR describes the maximum sustained energy discharging capability of the ESR. A negative HSL for an ESR describes the minimum temporary energy charging capability of the ESR."
  - id: e4
    source: np-02
    locator: "Section 2.1, Low Sustained Limit (LSL) for an Energy Storage Resource (ESR)"
    quote: "A negative LSL for an ESR describes the maximum sustained energy charging capability of the ESR. A positive LSL for an ESR describes the minimum temporary energy discharging capability of the ESR."
  - id: e5
    source: np-02
    locator: "Section 2.1, High Sustained Limit (HSL) for a Load Resource"
    quote: "The limit calculated by ERCOT, using the Qualified Scheduling Entity (QSE)-established Maximum Power Consumption (MPC)."
  - id: e6
    source: np-03
    locator: "Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (1)"
    quote: "For Generation Resources, Energy Storage Resources (ESRs), and Load Resources the High Sustained Limit (HSL) must be greater than or equal to the Low Sustained Limit (LSL) and the sum of the Resource-specific awards for Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS), Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), and Non-Spinning Reserve (Non-Spin)."
  - id: e7
    source: np-06
    locator: "Section 6.5.1.2, Centralized Dispatch, paragraph (2)"
    quote: "ERCOT shall verify that either an Energy Offer Curve or Energy Bid/Offer Curve providing prices for the Resource between its High Sustained Limit (HSL) and Low Sustained Limit (LSL) or an Output Schedule has been submitted for each On-Line Resource an hour before the end of the Adjustment Period for the upcoming Operating Hour."
  - id: e8
    source: np-06
    locator: "Section 6.5.7.2, Resource Limit Calculator, paragraph (1)"
    quote: "The Resource limits are used as inputs into both the SCED process and the Ancillary Service Capacity Monitor as described in Section 6.5.7.6, Load Frequency Control. These Resource limits help ensure that the deployments produced by the SCED and Load Frequency Control (LFC) processes will respect individual Resource physical limitations."
  - id: e9
    source: np-06
    locator: "Section 6.5.7.2, paragraph (2)(b), High Dispatch Limit for SCED-dispatchable Generation Resources"
    quote: "If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, other than SHUTDOWN, then HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM)"
  - id: e10
    source: np-03
    locator: "Section 3.19.1, paragraph (3)(a)(ii)"
    quote: "SCED CCT - the telemetered High Sustained Limit (HSL) for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, and zero for all other Resources."
  - id: e11
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (4)"
    quote: "The QSE must appropriately update the telemetered High Sustained Limit (HSL) and any applicable telemetry as specified in paragraph (2) of Section 6.5.5.2, Operational Data Requirements, based on the Forced Derate, as soon as practicable but no longer than 15 minutes after the beginning of a Forced Derate, if the Forced Derate is greater than ten MW and more than 5% of the Seasonal net maximum sustainable rating of the Resource and its expected or actual duration is greater than 30 minutes."
  - id: e12
    source: imm-som-2025
    locator: "Section on Operating Reserve Margin / PRC, subsection 2, Accounting for Reliability Actions and Conservative Operations"
    quote: "In 2025, removing the aggregate HSL of RUC-committed resources would have increased the frequency of PRC below 3,000 MW to only 1.2 hours in 2025, which remains well below the average frequency observed from 2016 to 2021."
  - id: e13
    source: np-03
    locator: "Section 3.25, Submission of Gas Supply Disruption, paragraph (2)"
    quote: "a QSE that represents a Generation Resource that relies on natural gas as the primary fuel source shall ensure that the High Sustained Limit (HSL) and Current Operating Plan (COP) accurately reflect the amount of output the Generation Resource can produce based on an amount of natural gas that the QSE expects it can procure after exploring all accessible and reasonable options."
---

## Definition

The High Sustained Limit (HSL) of a Generation Resource is the limit set by its QSE, continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. [e1] The Low Sustained Limit (LSL) is the matching limit for the minimum sustained energy production capability. [e2]

## How it works

The QSE sets and keeps updating the limits for a Generation Resource. [e1][e2] For a Load Resource, ERCOT calculates the HSL from the Maximum Power Consumption the QSE has established. [e5] For an Energy Storage Resource the limits are MW values that can be below, at, or above zero: a positive HSL is the maximum sustained discharge, a negative HSL is the minimum temporary charge, and a negative LSL is the maximum sustained charge. [e3][e4]

SCED works between the two limits. ERCOT checks that every On-Line Resource has either an Energy Offer Curve (or Energy Bid/Offer Curve) that prices it between its HSL and LSL, or an Output Schedule. [e7] The Resource limits feed both SCED and the Ancillary Service Capacity Monitor. [e8] For example, for a SCED-dispatchable Generation Resource in certain telemetered status codes (other than SHUTDOWN), the High Dispatch Limit is the lesser of telemetered output plus five minutes of normal ramp up or the telemetered HSL. [e9]

The HSL is also tied to reserve awards: it must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]

## ERCOT context

The HSL is set by the QSE, and the protocols set duties to keep it current. A QSE must update the telemetered HSL within 15 minutes of a Forced Derate that is over ten MW and more than 5% of the Resource's Seasonal net maximum sustainable rating and expected to last more than 30 minutes. [e11] A gas-fired Resource's QSE must keep its HSL and COP in line with the output it expects it can produce from the gas it can procure. [e13]

The HSL is also an input to the market power test: for the SCED CCT, the telemetered HSL is used for Resources with the specified telemetered status, and zero for all other Resources. [e10] The IMM uses HSL as well, removing the aggregate HSL of RUC-committed resources to show that, even without RUC, PRC below 3,000 MW would have occurred only 1.2 hours in 2025. [e12]

## Key facts

- HSL and LSL are QSE-established and continuously updated for Generation Resources; ERCOT calculates a Load Resource's HSL using the QSE-established MPC. [e1][e2][e5]
- For an ESR a negative LSL is maximum sustained charging and a positive HSL is maximum sustained discharging. [e3][e4]
- HSL must be greater than or equal to the LSL and the sum of the Resource-specific Ancillary Service awards. [e6]
- A forced derate over ten MW and more than 5% of Seasonal net maximum sustainable rating, expected to last over 30 minutes, requires an HSL update within 15 minutes. [e11]
- ERCOT must confirm each On-Line Resource has an offer curve between HSL and LSL, or an Output Schedule, an hour before the end of the Adjustment Period. [e7]

## Say it like this

HSL and LSL are the top and bottom of the range a unit says it can sustain, and SCED will only dispatch it inside that range. Keeping them accurate matters because they set both how much energy and how much reserve a unit can be asked for.

## Common confusion

HSL is not the same as the High Dispatch Limit. The HSL is what the QSE reports as sustained capability, while the HDL is ERCOT's calculated, ramp-limited ceiling for the next SCED run, which is capped by the telemetered HSL. [e9] For batteries, a negative number is normal, not an error. [e3][e4]

## Questions

### Why does a QSE have to update HSL after a forced derate?

The Resource limits are inputs to SCED and the Ancillary Service Capacity Monitor and help ensure deployments respect Resources' physical limitations, so a stale HSL weakens that protection. [e8] The protocols require the update within 15 minutes for a derate over ten MW and more than 5% of the Seasonal net maximum sustainable rating that is expected to last more than 30 minutes. [e11]

### How do HSL and LSL work for a battery?

They are MW values that can be negative. A negative LSL is the maximum sustained charging capability and a positive HSL is the maximum sustained discharging capability. [e3][e4]

### How does HSL limit ancillary service sales?

The HSL must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]

## Open items

- HASL and LASL (High and Low Ancillary Service Limit) do not appear in any saved source. The saved np-03 Section 3.18 and np-06 refer only generically to Ancillary Service limits. See the skipped topic hasl-lasl in the report.
- Deeper pass: how LSL is set for Quick Start Generation Resources (OFFQS), Qualifying Facilities and Intermittent Renewable Resources (np-03 Sections 3.9 and 6.5.5), and the HSL/LSL rules for Combined Cycle Trains.
- Deeper pass: the ESR LDL/HDL formulas in np-06 Section 6.5.7.2 and how RTC+B changed telemetry.
