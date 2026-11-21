---
id: cop
name: COP (Current Operating Plan)
aliases: [COP, Current Operating Plan, resource status plan]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading]
as_of: 2026-11-21
depth: deep
links:
  - to: qse
    type: related
    note: Each QSE representing a Resource must submit a COP. [e2]
  - to: ruc
    type: used-in
    note: ERCOT uses COP data to calculate operating limits and Ancillary Service capabilities for RUC. [e3]
  - to: energy-offer-curve
    type: related
    note: When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule. [e5]
  - to: sced
    type: contrasts-with
    note: SCED uses telemetered Resource Status instead of the COP Resource Status. [e6]
  - to: hsl-lsl
    type: related
    note: The DAM offer curve is bounded by the LSL and HSL specified in the COP. [e7]
  - to: three-part-supply-offer
    type: related
    note: A Generation Resource's day-ahead Energy Offer Curve is bounded by the LSL and HSL specified in the COP. [e7]
  - to: dam
    type: used-in
    note: For the DAM and DRUC initial state, the COP supplies Resource status, and a missing valid COP makes a Generation Resource OUT for DAM awards. [e15]
  - to: energy-storage-resource
    type: related
    note: An ESR's COP carries MinSOC, MaxSOC and HBSOC, which must follow stated consistency rules. [e12][e17]
  - to: rmr
    type: related
    note: The EMR status is for Resources whose operation cannot be monetized in the offer or that ERCOT contracted under Section 3.14.1 Reliability Must-Run. [e16]
  - to: operating-notices
    type: related
    note: An OCN, Advisory, Watch or Emergency Notice for weather triggers a duty to update the COP for Resource-specific limits. [e13]
  - to: ancillary-services
    type: related
    note: The COP must show each Resource's ability to provide each Ancillary Service by product and sub-type. [e11]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Current Operating Plan (COP)"
    quote: "A plan by a Qualified Scheduling Entity (QSE) reflecting anticipated operating conditions for each of the Resources that it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status, and Ancillary Service capabilities."
  - id: e2
    source: np-03
    locator: "Section 3.9, paragraph (1)"
    quote: "Each Qualified Scheduling Entity (QSE) that represents a Resource must submit a Current Operating Plan (COP) under this Section."
  - id: e3
    source: np-03
    locator: "Section 3.9, paragraph (2)"
    quote: "ERCOT shall use the information provided in the COP to calculate operating limits and Ancillary Service capabilities for each Resource for the Reliability Unit Commitment (RUC) processes."
  - id: e4
    source: np-03
    locator: "Section 3.9, paragraph (5)"
    quote: "To reflect changes to a Resource’s capability, each QSE shall report by exception, changes to the COP for all hours after the Operating Period through the rest of the Operating Day."
  - id: e5
    source: np-03
    locator: "Section 3.9, paragraph (6)"
    quote: "When a QSE updates its COP to show changes in Resource Status, the QSE shall update for each On-Line Resource, either an Energy Offer Curve under Section 4.4.9, Energy Offers and Bids, or Output Schedule under Section 6.4.2, Output Schedules."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP."
  - id: e7
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e8
    source: np-03
    locator: "Section 3.9, paragraph (7)"
    quote: "Each QSE, including QSEs representing Reliability Must-Run (RMR) Units, Firm Fuel Supply Service Resources (FFSSRs), or Black Start Resources, shall submit a revised COP reflecting changes in Resource availability as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change."
  - id: e9
    source: np-03
    locator: "Section 3.9, paragraph (4)"
    quote: "The QSE must show the Resource as On-Line with a Resource Status of ONRUC, indicating a RUC process committed the Resource for all RUC-Committed Intervals."
  - id: e10
    source: np-08
    locator: "Section 8.1.2, Current Operating Plan (COP) Performance Requirements, paragraph (2)"
    quote: "For each QSE, ERCOT shall post for each month the number of Operating Hours during which a Reliability Unit Commitment (RUC)-committed QSE Resource, not Off-Line as the result of a Forced Outage, failed to be On-Line and released to SCED for deployment within the first 15 minutes of the RUC-Commitment Hour. QSEs shall have no more than three hours during an Operating Day and no more than 74 hours during a month that contains one or more of these events."
  - id: e11
    source: np-03
    locator: "Section 3.9.1, paragraph (3)"
    quote: "Each QSE that represents a Resource shall update its COP to reflect the ability of the Resource to provide each Ancillary Service by product and sub-type."
  - id: e12
    source: np-03
    locator: "Section 3.9.1, paragraph (3)"
    quote: "Additionally, for a COP provided for an ESR, the QSE shall ensure that the Hour Beginning Planned State of Charge (HBSOC) for any two consecutive hours shall be feasible based on the ESR’s maximum rate of charge or discharge."
  - id: e13
    source: np-03
    locator: "Section 3.9, paragraph (9)"
    quote: "When ERCOT issues a communication in the form of an Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice due to forecasted or actual cold or hot weather, for each Generation Resource and Energy Storage Resource (ESR) a QSE represents, the QSE shall update the COP, Real-Time telemetry, and Outage or derate reporting to reflect any Resource-specific operating limitations based on: (i) capability and availability; (ii) fuel supply or inventory concerns, including fuel switching capabilities; or (iii) environmental constraints and the impact on the Generation Resource or ESR due to the weather conditions."
  - id: e14
    source: np-03
    locator: "Section 3.9.1, paragraph (2)"
    quote: "Each QSE shall timely update its COP unless in the reasonable judgment of the QSE, such compliance would create an undue threat to safety, undue risk of bodily harm, or undue damage to equipment. The QSE is excused from updating the COP only for so long as the undue threat to safety, undue risk of bodily harm, or undue damage to equipment exists."
  - id: e15
    source: np-03
    locator: "Section 3.9.1, paragraph (10)"
    quote: "If a QSE has not submitted a valid COP for any Generation Resource for any hour in the DAM or RUC Study Period, then the Generation Resource is considered to have a Resource Status as OUT thus not available for DAM awards or RUC commitments for those hours."
  - id: e16
    source: np-03
    locator: "Section 3.9.1, paragraph (12)"
    quote: "A QSE representing a Resource may only use the Resource Status code of EMR for a Resource whose operation would have impacts that cannot be monetized and reflected through the Resource’s Energy Offer Curve or recovered through the RUC make-whole process or if the Resource has been contracted by ERCOT under Section 3.14.1 or under paragraph (5) of Section 6.5.1.1."
  - id: e17
    source: np-03
    locator: "Section 3.9.1, paragraph (17) (ESR COP rules)"
    quote: "(a) MinSOC is greater than or equal to the nameplate minimum MWh operating SOC limit; (b) MaxSOC is less than or equal to the nameplate maximum MWh operating SOC limit; and (c) HBSOC is a value between the corresponding COP values of MinSOC and MaxSOC."
  - id: e18
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(i)(E)"
    quote: "ONEMR – On-Line EMR (available for commitment or dispatch only for ERCOT-declared Emergency Conditions; the QSE may appropriately set LSL and High Sustained Limit (HSL) to reflect operating limits);"
  - id: e19
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(i)(I)"
    quote: "OFFQS – Off-Line but available for SCED deployment and to provide ECRS and Non-Spin, if qualified and capable. Only qualified Quick Start Generation Resources (QSGRs) may utilize this status;"
  - id: e20
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(ii)(B)"
    quote: "OFF – Off-Line but available for commitment in the Day-Ahead Market (DAM), RUC, and providing Non-Spin, if qualified and capable;"
  - id: e21
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(ii)(A)"
    quote: "OUT – Off-Line and unavailable, or not connected to the ERCOT System and operating in a Private Microgrid Island (PMI);"
  - id: e22
    source: np-03
    locator: "Section 3.9.1, paragraph (5)(b)(i)(A)"
    quote: "ONRUC – On-Line and the hour is a RUC-Committed Hour;"
  - id: e23
    source: np-03
    locator: "Section 3.9.1, paragraph (6)"
    quote: "For Combined Cycle Generation Resources, the above items are required for each operating configuration. In each hour only one Combined Cycle Generation Resource in a Combined Cycle Train may be assigned one of the On-Line Resource Status codes described above."
  - id: e24
    source: np-03
    locator: "Section 3.9.1, paragraph (6)(a)"
    quote: "During a RUC study period, if a QSE’s COP reports multiple Combined Cycle Generation Resources in a Combined Cycle Train to be On-Line for any hour, then until the QSE corrects its COP, the On-Line Combined Cycle Generation Resource with the largest HSL is considered to be On-Line and all other Combined Cycle Generation Resources in the Combined Cycle Train are considered to be Off-Line."
  - id: e25
    source: np-03
    locator: "Section 3.9.1, paragraph (8)"
    quote: "For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF)."
  - id: e26
    source: np-03
    locator: "Section 3.9.1, paragraph (8)"
    quote: "A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT."
  - id: e27
    source: np-03
    locator: "Section 3.9.2, paragraphs (1) and (2), Current Operating Plan Validation"
    quote: "ERCOT shall verify that each COP, on its submission, complies with the criteria described in Section 3.9.1, Current Operating Plan (COP) Criteria. ERCOT shall notify the QSE by means of the Messaging System if the QSE’s COP fails to comply with the criteria described in Section 3.9.1 and this Section 3.9.2 for any reason. The QSE must then resubmit the COP within the appropriate market timeline."
  - id: e28
    source: np-03
    locator: "Section 3.9.2, paragraph (4)"
    quote: "A QSE representing a Resource that has an Energy Offer Curve valid for an hour of the COP may not designate a Resource Status of ONOS for that hour for that Resource."
  - id: e30
    source: np-03
    locator: "Section 3.9, paragraph (8)"
    quote: "Each QSE representing a Qualifying Facility (QF) must submit a Low Sustained Limit (LSL) that represents the minimum energy available, in MW, from the unit for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts for changes in ambient conditions."
  - id: e31
    source: np-05
    locator: "Section 5.4, QSE Security Sequence Responsibilities, paragraph (1)(e)"
    quote: "Submit an updated COP before 1430 in the Day-Ahead; and"
  - id: e32
    source: np-05
    locator: "Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (4)"
    quote: "For all hours of the RUC Study Period within the RUC process, Quick Start Generation Resources (QSGRs) with a COP Resource Status of OFFQS shall be considered as On-Line with Low Sustained Limit (LSL) at zero MW."

---

## Definition

The Current Operating Plan (COP) is a QSE's plan reflecting anticipated operating conditions for each Resource it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status and Ancillary Service capabilities. [e1]

## How it works

Every QSE that represents a Resource must submit a COP. [e2] ERCOT uses the information to calculate operating limits and Ancillary Service capabilities for each Resource for the RUC processes. [e3] QSEs report changes by exception for all hours after the Operating Period through the rest of the Operating Day, [e4] and must submit a revised COP no later than 60 minutes after an event that changes Resource availability. [e8] The 60-minute duty has one exception: a QSE is excused from timely updates only while compliance would create an undue threat to safety, undue risk of bodily harm or undue damage to equipment. [e14] When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule for each On-Line Resource. [e5]

What the COP must contain (Section 3.9.1): the COP must show each Resource's ability to provide each Ancillary Service by product and sub-type, [e11] along with the Resource Status, HSL, LSL, emergency limits and Ancillary Service MW (see the Key facts below for the status codes). For an ESR, the QSE must also keep the Hour Beginning Planned State of Charge (HBSOC) for any two consecutive hours feasible given the ESR's maximum rate of charge or discharge, [e12] and the COP values for an hour must follow three rules: MinSOC at or above the nameplate minimum, MaxSOC at or below the nameplate maximum, and HBSOC between MinSOC and MaxSOC. [e17]

Resource-class specifics: for a Qualifying Facility, the LSL must represent the minimum energy available for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin. [e30] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the most recent short-term forecasts; a QSE may override but must submit an HSL no higher than the most recent ERCOT forecast for that Resource. [e25][e26] For Combined Cycle Resources the items are required for each operating configuration, and only one Combined Cycle Generation Resource in a Train may be assigned an On-Line status in each hour. [e23] If a COP shows several as On-Line during a RUC study period, ERCOT treats the one with the largest HSL as On-Line and the rest as Off-Line until the QSE corrects the COP. [e24]

Validation (Section 3.9.2): ERCOT verifies each COP on submission and notifies the QSE through the Messaging System if it fails the criteria; the QSE must then resubmit within the appropriate market timeline. [e27] A Resource with a valid Energy Offer Curve in an hour may not be given a Resource Status of ONOS for that hour. [e28]

## ERCOT context

For Resource Status, SCED does not use the COP: SCED uses telemetered Resource Status validated by the Real-Time Sequence instead of the COP Resource Status. [e6] The COP still matters in the day-ahead market because a Generation Resource's Energy Offer Curve is bounded in the DAM by the LSL and HSL specified in the COP. [e7] If no valid COP exists for a Generation Resource for an hour in the DAM or RUC study period, the Resource is treated as OUT and is not available for DAM awards or RUC commitments for those hours. [e15]

RUC links: a QSE during the RUC Security Sequence must submit an updated COP before 1430 in the Day-Ahead, [e31] and QSEs must show a RUC-committed Resource as ONRUC. [e9] For RUC, a Quick Start Generation Resource with a COP status of OFFQS is considered On-Line with LSL at zero MW. [e32]

Weather: when ERCOT issues an OCN, Advisory, Watch or Emergency Notice for forecast or actual cold or hot weather, the QSE must update the COP, telemetry and outage or derate reporting for each Generation Resource and ESR it represents to reflect Resource-specific limits on capability, fuel supply or environmental constraints. [e13]

Accuracy monitoring: ERCOT monitors COP accuracy under Section 8 (Section 3.9, paragraph (3) points there). [e10] Under Section 8.1.2, ERCOT posts monthly, for each QSE, the Operating Hours in which a RUC-committed Resource not Off-Line from a Forced Outage failed to be On-Line and released to SCED within the first 15 minutes of the RUC-Commitment Hour; QSEs shall have no more than three such hours in an Operating Day and no more than 74 hours in a month that contains one or more of these events. [e10]

## Key facts

- Covers each hour in the next seven Operating Days. [e1]
- Must be submitted by each QSE that represents a Resource. [e2]
- Used by ERCOT for RUC operating limits and Ancillary Service capabilities. [e3]
- Revisions are due as soon as reasonably practicable and within 60 minutes of the event, except while compliance would create an undue safety or equipment threat. [e8][e14]
- SCED uses telemetry, not COP Resource Status. [e6]
- Generation status codes in the COP include ONRUC (On-Line and the hour is a RUC-Committed Hour). [e22]
- OFF means Off-Line but available for commitment in the DAM and RUC and for Non-Spin if qualified and capable; OUT means Off-Line and unavailable, or not connected and operating in a Private Microgrid Island. [e20][e21]
- OFFQS is limited to qualified Quick Start Generation Resources: Off-Line but available for SCED deployment and to provide ECRS and Non-Spin if qualified and capable. [e19] (A pending NPRR1309 box in np-03 would add DRRS to that status upon system implementation; it is not the rule yet.)
- ONEMR: On-Line EMR, available for commitment or dispatch only for ERCOT-declared Emergency Conditions; the QSE may set LSL and HSL to reflect operating limits. [e18]
- EMR may only be used where the operation has impacts that cannot be monetized in the offer or recovered through RUC make-whole, or the Resource is contracted by ERCOT under Section 3.14.1 or paragraph (5) of Section 6.5.1.1. [e16]
- Monthly RUC-commitment performance limits: no more than three hours per Operating Day and no more than 74 hours per month with events. [e10]

## Say it like this

The COP is the QSE's rolling seven-day plan for each unit: whether it is on, its limits and what ancillary services it can provide. ERCOT uses it for commitment and day-ahead; real-time dispatch runs off telemetry. A bad or missing COP can make a unit invisible to the DAM and RUC, so keeping it current is part of being a QSE.

## Common confusion

- COP versus offers: the COP states status and capability; prices live in the offer. A status change in the COP requires a matching offer update. [e5]
- COP versus real-time status: SCED does not read the COP status. [e6]
- COP versus telemetry: some codes (SHUTDOWN, STARTUP, ONHOLD) are described as for Real-Time telemetry purposes only. The source says SHUTDOWN and STARTUP are only to be used for Real-Time telemetry purposes; they are not COP entries.
- ONRUC versus ON: ONRUC marks hours where RUC committed the Resource; ON is an On-Line Resource with an Energy Offer Curve. [e22]

## Questions

### How far ahead does the COP look?

Seven Operating Days, hour by hour. [e1]

### Does SCED use the COP?

Not for Resource Status: it uses telemetry instead. [e6]

### How fast must a QSE revise the COP after an outage?

As soon as reasonably practicable, and within 60 minutes of the event, unless complying would create an undue threat to safety, risk of bodily harm or damage to equipment. [e8][e14]

### Why does a missing COP matter if SCED ignores COP status?

Because the day-ahead and RUC processes rely on it. With no valid COP for an hour in the DAM or RUC study period, the Generation Resource is treated as OUT and cannot receive DAM awards or RUC commitments for those hours. [e15][e6]

### What happens if a QSE's COP shows two units of a Combined Cycle Train On-Line in the same hour?

Only one Combined Cycle Generation Resource in a Train may carry an On-Line status in an hour. [e23] In a RUC study period, ERCOT treats the one with the largest HSL as On-Line and the others as Off-Line until the QSE corrects it. [e24]

### What if a wind farm's QSE thinks the forecast HSL is too low?

ERCOT updates the HSL with the short-term forecast for the first 168 hours, and the QSE may override, but only to a value at or below the most recent ERCOT forecast. [e25][e26]

### How is COP accuracy measured?

ERCOT monitors it under Section 8; one published measure is the monthly count of hours when a RUC-committed Resource failed to be On-Line and released to SCED within the first 15 minutes of the RUC-Commitment Hour, with limits of three hours per Operating Day and 74 hours per month with events. [e10]

## Scenarios

### A cold front is forecast and ERCOT issues a Weather Watch. What should a QSE do with its COP?

- Update the COP, telemetry and outage or derate reporting for each Generation Resource and ESR to reflect Resource-specific limits on capability, fuel supply and environmental constraints. [e13]
- Keep revising within 60 minutes of any change in availability. [e8]

## Open items

- Resolved 2026-11-21: COP criteria, Resource Status codes (np-03 Section 3.9.1) and validation (3.9.2) are now covered; NPRR1188 and NPRR1309 text in the status list is pending and not stated as the rule.
- The np-08 text read here gives only the RUC-commitment timeliness measures under 8.1.2; the Operating Guide (nog) COP accuracy metrics were not located in the saved sources.
- Link to outage scheduling: np-03 Section 3.1 outage rules were not read in this pass.
