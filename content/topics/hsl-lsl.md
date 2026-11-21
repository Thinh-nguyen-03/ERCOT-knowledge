---
id: hsl-lsl
name: HSL / LSL
aliases: [HSL, LSL, High Sustained Limit, Low Sustained Limit, sustained limits]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: sced
    type: used-in
    note: An On-Line Resource's offer curve must price it between its HSL and LSL (or it needs an Output Schedule), and the Resource limits feed SCED. [e7][e8]
  - to: ancillary-services
    type: related
    note: A Resource's HSL must be greater than or equal to the LSL and the sum of its Resource-specific Ancillary Service awards. [e6]
  - to: energy-offer-curve
    type: related
    note: The Energy Offer Curve must price the Resource between its HSL and LSL. [e7]
  - to: energy-storage-resource
    type: related
    note: For an ESR a negative HSL is the minimum temporary charging capability and a negative LSL is the maximum sustained charging capability. [e3][e4]
  - to: market-power-mitigation
    type: used-in
    note: For the SCED CCT, the telemetered HSL is used for Resources with specified telemetered statuses, and zero for all others. [e10]
  - to: ruc
    type: related
    note: The IMM removes the aggregate HSL of RUC-committed resources to test how much RUC lowered scarcity. [e12]
  - to: cop
    type: related
    note: The COP carries the HSL and LSL for each Resource and each hour, and for IRRs ERCOT updates the COP HSL from forecasts. [e17][e18]
  - to: hasl-lasl
    type: contrasts-with
    note: HASL and LASL were pre-RTC calculated limits that no longer exist; HDL and LDL are the current calculated limits. [e9]
  - to: base-point
    type: related
    note: SCED Base Points are issued within the HDL and LDL calculated from telemetered output and limits. [e9]
  - to: rtc-b
    type: related
    note: ERCOT says the HASL concept no longer exists with RTC+B, so HDL and LDL are the calculated limits now. [e9]
  - to: wind-solar-forecasts
    type: related
    note: For IRRs the HSL is tied to net output capability and, for Ancillary Service-qualified IRRs, to the five-minute intra-hour forecast in the HDL formula. [e14][e15]
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
  - id: e14
    source: np-06
    locator: "Section 6.5.5.2, Operational Data Requirements, paragraph (3)"
    quote: "For each Intermittent Renewable Resource (IRR), the QSE shall set the HSL equal to the current net output capability of the facility. The net output capability should consider the net real power of the IRR generation equipment, IRR generation equipment availability, weather conditions, and whether the IRR net output is being affected by compliance with a SCED Dispatch Instruction."
  - id: e15
    source: np-06
    locator: "Section 6.5.7.2, paragraph (2), variable table, HSLTELEM"
    quote: "For IRRs qualified to provide an Ancillary Service and telemetering a non-zero capability to provide that Ancillary Service, and all IRRs within an IRR Group where any IRR within the IRR Group is qualified to provide an Ancillary Service and telemetering a non-zero capability to provide that Ancillary Service, HSLTELEM shall be the five-minute intra-hour forecast for the Resource. For all other Resources, HSLTELEM shall be the Resource’s HSL provided to ERCOT via telemetry, in accordance with Section 6.5.5.2."
  - id: e16
    source: np-06
    locator: "Section 6.5.5.2, paragraph (8)"
    quote: "For each Intermittent Renewable Resource (IRR) synchronized to the ERCOT System and not capable of providing real power due to a lack of fuel, the Resource Entity and QSE shall send ERCOT, via telemetry, a Real-Time On-Line status and HSL and LSL of 0."
  - id: e17
    source: np-03
    locator: "Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8)"
    quote: "For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF)."
  - id: e18
    source: np-03
    locator: "Section 3.9.1, paragraph (8)"
    quote: "A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT."
  - id: e19
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(c) and (d), HSL and LSL items of a COP"
    quote: "For Load Resources other than CLRs, the HSL should equal the expected power consumption;"
  - id: e20
    source: np-06
    locator: "Section 6.5.5.2, paragraph (12)(d)"
    quote: "For Qualifying Facilities (QFs), an LSL that represents the minimum energy available for Dispatch by SCED, in MW, from the Combined Cycle Generation Resource based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts for changes in ambient conditions."
  - id: e21
    source: np-06
    locator: "Section 6.5.5.2, paragraph (2)(i), Combined Cycle Generation Resources"
    quote: "HSL (Combined Cycle Generation Resources) shall: (i) Submit the HSL of the current operating configuration; and (ii) When providing ECRS, update the HSL as needed, to be consistent with Resource performance limitations of ECRS provision;"
  - id: e22
    source: np-03
    locator: "Section 3.9.1, paragraph (14)"
    quote: "A QSE operating a Resource with a Resource Status code of ONEMR may set the HSL and LSL of the unit to be equal to ensure that SCED does not send Base Points that would move the unit."
  - id: e23
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(i)(I), OFFQS"
    quote: "OFFQS – Off-Line but available for SCED deployment and to provide ECRS and Non-Spin, if qualified and capable. Only qualified Quick Start Generation Resources (QSGRs) may utilize this status;"
  - id: e24
    source: np-05
    locator: "Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (4)"
    quote: "For all hours of the RUC Study Period within the RUC process, Quick Start Generation Resources (QSGRs) with a COP Resource Status of OFFQS shall be considered as On-Line with Low Sustained Limit (LSL) at zero MW."
  - id: e25
    source: np-08
    locator: "Section 8.1.1.2, General Capacity Testing Requirements, paragraph (1)"
    quote: "Within the first 15 days of each Season, each QSE shall provide ERCOT a Seasonal HSL for any Generation Resource with a capacity greater than ten MW that will be operated during that Season."
  - id: e26
    source: np-08
    locator: "Section 8.1.1.2, paragraph (2)"
    quote: "To verify that the HSL reported by telemetry is achievable, ERCOT may, at its discretion, conduct an unannounced Generation Resource test."
  - id: e27
    source: np-08
    locator: "Section 8.1.1.2, paragraph (3)"
    quote: "Hydro, wind, and PhotoVoltaic (PV) generation will be excluded from unannounced generation capacity testing. ERCOT shall not perform an unannounced Generation Resource test during a Watch or Energy Emergency Alert (EEA) event."
  - id: e28
    source: np-06
    locator: "Section 6.5.7.2, paragraph (5), LDL for ESRs"
    quote: "If the telemetered Resource Status is ONHOLD, then LDL = 0"
  - id: e29
    source: np-06
    locator: "Section 6.5.7.2, paragraph (5)(c), LDL for ESRs"
    quote: "If the telemetered Resource Status is any status code specified in item (5)(b)(iv) of Section 3.9.1 other than OUT, or EMR, or EMRSWGR, or ONHOLD, or ONTEST, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM)"
  - id: e30
    source: np-06
    locator: "Section 6.5.7.2, paragraph (6), HDL for SCED-dispatchable Load Resources"
    quote: "HDL = Min (POWERTELEM + (NORMRAMPDN * 5), HSLTELEM)"
  - id: e31
    source: np-06
    locator: "Section 6.5.7.2, paragraph (3)(a) and (b), LDL for SCED-dispatchable Generation Resources"
    quote: "If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1 other than STARTUP, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM)"
  - id: e32
    source: np-06
    locator: "Section 6.5.5.1, Changes in Resource Status, paragraph (2)"
    quote: "Following this Resource Status change, the telemetered HSL and any other applicable telemetry of the Resource as specified in paragraph (2) of Section 6.5.5.2, Operational Data Requirements, shall be updated as soon as practicable but no longer than 15 minutes after the change in Resource Status to ONHOLD."
  - id: e33
    source: np-03
    locator: "Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (2)"
    quote: "For Non-Spin, the amount of Non-Spin awarded must be less than or equal to the HSL for Off-Line Generation Resources."
  - id: e34
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL)"
    quote: "A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource’s capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator."

---

## Definition

The High Sustained Limit (HSL) of a Generation Resource is the limit set by its QSE, continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. [e1] The Low Sustained Limit (LSL) is the matching limit for the minimum sustained energy production capability. [e2]

## How it works

The QSE sets and keeps updating the limits for a Generation Resource. [e1][e2] For a Load Resource, ERCOT calculates the HSL from the Maximum Power Consumption the QSE has established. [e5] For an Energy Storage Resource the limits are MW values that can be below, at, or above zero: a positive HSL is the maximum sustained discharge, a negative HSL is the minimum temporary charge, and a negative LSL is the maximum sustained charge. [e3][e4]

ERCOT checks that every On-Line Resource has either an Energy Offer Curve (or Energy Bid/Offer Curve) that prices it between its HSL and LSL, or an Output Schedule. [e7] The Resource limits feed both SCED and the Ancillary Service Capacity Monitor. [e8] For example, for a SCED-dispatchable Generation Resource in certain telemetered status codes (other than SHUTDOWN), the High Dispatch Limit is HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM), that is, the lesser of telemetered output plus the telemetered normal ramp rate up times 5, or the telemetered HSL. [e9]

The HSL is also tied to reserve awards: it must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]

## ERCOT context

The HSL is set by the QSE, and the protocols set duties to keep it current. A QSE must update the telemetered HSL within 15 minutes of a Forced Derate that is over ten MW and more than 5% of the Resource's Seasonal net maximum sustainable rating and expected to last more than 30 minutes. [e11] A gas-fired Resource's QSE must keep its HSL and COP in line with the output it expects it can produce from the gas it can procure. [e13]

The HSL is also an input to the market power test: for the SCED CCT, the telemetered HSL is used for Resources with the specified telemetered status, and zero for all other Resources. [e10] The IMM uses HSL as well, removing the aggregate HSL of RUC-committed resources to show that, even without RUC, PRC below 3,000 MW would have occurred only 1.2 hours in 2025. [e12]

The superseded pre-RTC definition of HASL said it was calculated in Section 6.5.7.2, the section that now computes HDL and LDL (see the hasl-lasl topic). [e34]

- IRRs: the QSE sets the HSL equal to the current net output capability, considering availability, weather and whether output is affected by a SCED Dispatch Instruction. [e14] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values from its short-term forecasts, and the QSE may override only to a value no higher than the most recent ERCOT forecast. [e17][e18] An IRR that is synchronized but cannot produce real power for lack of fuel telemeters On-Line status with HSL and LSL of 0. [e16]
- Combined Cycle Resources: telemeter the HSL of the current operating configuration, and update it when providing ECRS to match performance limitations. [e21]
- Qualifying Facilities: the LSL represents the minimum energy available for Dispatch by SCED, based on minimum stable steam delivery to the thermal host plus a justifiable reliability margin. [e20]
- Quick Start Generation Resources: in the RUC study period a QSGR with COP status OFFQS is considered On-Line with LSL at zero MW; OFFQS is limited to qualified QSGRs. [e24][e23]
- ONEMR Resources: the QSE may set HSL and LSL equal so SCED does not send Base Points that would move the unit. [e22]
- Load Resources other than CLRs: the COP HSL should equal expected power consumption. [e19]

## Key facts

- HSL and LSL are QSE-established and continuously updated for Generation Resources; ERCOT calculates a Load Resource's HSL using the QSE-established MPC. [e1][e2][e5]
- For an ESR a negative LSL is maximum sustained charging and a positive HSL is maximum sustained discharging. [e3][e4]
- HSL must be greater than or equal to the LSL and the sum of the Resource-specific Ancillary Service awards. [e6]
- A forced derate over ten MW and more than 5% of Seasonal net maximum sustainable rating, expected to last over 30 minutes, requires an HSL update within 15 minutes. [e11]
- Each QSE provides a Seasonal HSL within the first 15 days of each Season for each Generation Resource over ten MW that will be operated that Season. [e25]
- ERCOT may run unannounced tests to verify the telemetered HSL is achievable; hydro, wind and PV are excluded and no test is performed during a Watch or EEA. [e26][e27]
- Off-Line Non-Spin awards must not exceed the Resource's HSL. [e33]
- After an ONHOLD status change the telemetered HSL must be updated as soon as practicable and within 15 minutes. [e32]
- ERCOT must confirm each On-Line Resource has an offer curve between HSL and LSL, or an Output Schedule, an hour before the end of the Adjustment Period. [e7]

## Say it like this

HSL and LSL are the top and bottom of the range of sustained output a unit's QSE reports. The offer curve has to price the unit between them, and the HSL must cover the unit's Ancillary Service awards.

## Common confusion

HSL is not the same as the High Dispatch Limit. The HSL is what the QSE reports as sustained capability, while the HDL is a limit calculated from telemetered output, ramp rate and the telemetered HSL, and for a SCED-dispatchable Generation Resource in the status codes quoted it can be no higher than the telemetered HSL. [e9] For batteries, a negative number is normal, not an error. [e3][e4]

## Formula

The current Resource Limit Calculator (np-06 Section 6.5.7.2) turns telemetered output, ramp rate and the telemetered limits into dispatch limits within four seconds of a change. [e9] The variables are POWERTELEM (gross or net real power from telemetry), NORMRAMPUP and NORMRAMPDN (5-minute blended Normal Ramp Rates up and down as telemetered by the QSE), HSLTELEM and LSLTELEM (the HSL and LSL from telemetry). [e9][e31]

- SCED-dispatchable Generation Resource, High Dispatch Limit: HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM) for the On-Line status codes other than SHUTDOWN. [e9]
- SCED-dispatchable Generation Resource, Low Dispatch Limit: LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM) for the status codes other than STARTUP. [e31]
- SCED-dispatchable Load Resource: HDL = Min (POWERTELEM + (NORMRAMPDN * 5), HSLTELEM). [e30]
- ESR: LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM) for the ESR status codes other than OUT, EMR, EMRSWGR, ONHOLD or ONTEST; in ONHOLD, LDL = 0. [e29][e28]
- For IRRs qualified for an Ancillary Service with a non-zero telemetered capability, HSLTELEM is the five-minute intra-hour forecast, not the QSE's telemetered HSL. [e15]

## Questions

### Why does ERCOT test HSL, and what are the limits of the test?

Because the HSL is QSE-reported, ERCOT may at its discretion run an unannounced test to verify the telemetered HSL is achievable. [e26] Hydro, wind and PV are excluded and ERCOT does not test during a Watch or EEA. [e27]

### What if an IRR's QSE sets a higher HSL than ERCOT's forecast in the COP?

For the first 168 hours of the COP a QSE may override the forecast-based HSL but the submitted value must be less than or equal to the most recent ERCOT forecast for that Resource. [e18]

### Why is the QSGR LSL zero in RUC?

For RUC, a QSGR with COP status OFFQS is considered On-Line with LSL at zero MW. [e24] OFFQS is the status for qualified QSGRs that are Off-Line but available for SCED deployment and to provide ECRS and Non-Spin. [e23]

### Why does a QSE have to update HSL after a forced derate?

The Resource limits are inputs to SCED and the Ancillary Service Capacity Monitor and help ensure deployments respect Resources' physical limitations. [e8] The protocols require the update within 15 minutes for a derate over ten MW and more than 5% of the Seasonal net maximum sustainable rating that is expected to last more than 30 minutes. [e11]

### How do HSL and LSL work for a battery?

They are MW values that can be negative. A negative LSL is the maximum sustained charging capability and a positive HSL is the maximum sustained discharging capability. [e3][e4]

### How does HSL limit ancillary service sales?

The HSL must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]

## Open items

- Resolved 2026-11-21: the HDL/LDL formulas are covered in the Formula section; the HASL/LASL terms are now covered in the hasl-lasl topic (the superseded pre-RTC definition says HASL was calculated in Section 6.5.7.2). [e34]
- Still open: how RTC+B changed the telemetry requirements. The NPRR1290 report says ERCOT proposed retaining the existing Non-Frequency Responsive Capacity telemetry, but this pass did not read the complete RTC+B telemetry list.
- Still open: HSL and LSL for Combined Cycle Trains in RUC and DAM beyond the COP rules (see the cop topic).
