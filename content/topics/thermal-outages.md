---
id: thermal-outages
name: Thermal Outages (Planned & Forced)
aliases: [forced outage, planned outage, maintenance outage, derate, forced derate, outages and deratings]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-adequacy
    type: related
    note: ERCOT's 36-Month Load Forecast is used in the outage coordination process and for resource adequacy reporting. [e12]
  - to: heat-rate
    type: related
    note: See that topic for unit economics; this topic covers outage definitions, scheduling and reporting.
  - to: hsl-lsl
    type: related
    note: A QSE must update the telemetered High Sustained Limit within 15 minutes of a Forced Derate above ten MW and 5% of rating lasting over 30 minutes. [e18]
  - to: cop
    type: related
    note: A QSE must update the COP within 60 minutes of a Forced Derate above 20 MW with expected duration over 120 minutes. [e19]
  - to: weatherization
    type: related
    note: In the February 2021 event area (ERCOT, SPP and MISO South), 75 percent of unplanned unit outages, derates and failures to start were freezing or fuel issues. [e14]
  - to: ruc
    type: related
    note: The IMM says many outages are forced by unexpected failures that take units offline. [e11]
  - to: winter-storm-uri
    type: related
    note: FERC-NERC attributes 75 percent of the outages, derates and failures to start across the whole event area (ERCOT, SPP and MISO South) to freezing or fuel issues. [e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Forced Outage"
    quote: "For a Generation Resource or Energy Storage Resource (ESR), an Outage that requires immediate removal, either through controlled or uncontrolled actions, of all or a portion of the capacity of the Resource from service through automated or manual means."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Planned Outage"
    quote: "An Outage that is planned and scheduled in advance with ERCOT, other than a Maintenance Outage or Opportunity Outage."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Maintenance Outage"
    quote: "An Outage initiated manually to remove equipment from service to perform work on components that could be postponed briefly but that is required to prevent a potential Forced Outage and that cannot be postponed until the next Planned Outage."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Forced Derate"
    quote: "The unavailability of a portion of a Resource’s capacity based on its Seasonal net max sustainable rating provided through the Resource Registration process."
  - id: e5
    source: np-03
    locator: "Section 3.1.3.2, Resources, paragraph (1)"
    quote: "Each Resource Entity shall provide to ERCOT a Planned Outage and Maintenance Outage plan for Generation Resources and ESRs in an ERCOT-provided format for at least the next 12 months updated monthly."
  - id: e6
    source: np-03
    locator: "Section 3.1.6, Outages of Resources Other than Reliability Resources, paragraph (2)"
    quote: "ERCOT shall approve or reject all requested Outage plans for a Resource other than a Reliability Resource submitted to ERCOT more than 45 days before the proposed start date of the Outage."
  - id: e7
    source: np-03
    locator: "Section 3.1.6, paragraph (2)(a)"
    quote: "ERCOT shall approve a requested Outage plan for a Resource other than a Reliability Resource if the proposed approval would not cause the aggregate MW of Resource Outages to exceed the Resource Planned Outage Limit (RPOL) at any point during the duration of the proposed Resource Outage, taking into consideration all previously approved Resource Outages."
  - id: e8
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (1)"
    quote: "If a Generation Resource or ESR experiences a Forced Derate in an amount greater than ten MW, and 5% of its Seasonal net maximum sustainable rating, and the Forced Derate lasts longer than 30 minutes, the Resource Entity or its designee must enter the Forced Derate into the Outage Scheduler as soon as practicable but no longer than 60 minutes after the beginning of the Forced Derate."
  - id: e9
    source: imm-som-2025
    locator: "Market Operations, F. Thermal Generation Outages and Deratings"
    quote: "Derated capacity is the difference between a resource’s registered maximum capacity and its actual capability."
  - id: e10
    source: imm-som-2025
    locator: "Market Operations, F. Thermal Generation Outages and Deratings, Figure 54 discussion"
    quote: "The most noteworthy change from 2024 to 2025 was the higher rate of forced outages and derates, particularly in the summer months. Otherwise, outage patterns in 2025 were similar to those in 2024. Planned and unapproved outages were lowest during the summer, when energy is most valuable, and highest in the spring and fall, when system load and net load are typically lower."
  - id: e11
    source: imm-som-2025
    locator: "Market Operations, F. Thermal Generation Outages and Deratings"
    quote: "However, planned outages account for only part of the total because many outages are forced by unexpected failures that take units offline. Although most forced outages are eventually reported, many remain unreported, which makes it harder for ERCOT to plan and operate the system reliably."
  - id: e12
    source: np-03
    locator: "Section 3.12, Load Forecasting, paragraph (1)(b)"
    quote: "The 36-Month Load Forecast is used in the Outage coordination process and for Resource adequacy reporting."
  - id: e13
    source: ercot-summer-2026-review
    locator: "Slides 6-7, Summer Thermal Forced Outage Comparison, Key Takeaways"
    quote: "Key Takeaway: The level of thermal forced outages (as a percent of installed capacity) has been higher in 2025-2026 summers than it was in the 2019-2020 summers."
  - id: e14
    source: ferc-nerc-uri
    locator: "Executive Summary, Figure 3 discussion"
    quote: "Of those outages, derates, and failures to start, 75 percent were caused by either freezing issues (44.2 percent) or fuel issues (31.4 percent), as shown in Figure 3, below."
  - id: e15
    source: ercot-summer-2023-review
    locator: "Forced Outages During Daily Peak Net Load slide, Key Takeaway"
    quote: "Key Takeaway: Forced Outages of thermal units stayed in the range of 4-8 GW, except on low Net Load days when generators took the opportunity to do repairs."
  - id: e16
    source: ercot-mora-2027-01
    locator: "Deterministic scenario, Hour Ending 8:00 a.m."
    quote: "This MORA deterministic scenario assumes a total thermal outage amount (planned plus unplanned) of 8,105 MW during normal grid conditions."
  - id: e17
    source: imm-som-2025
    locator: "Market Operations, F. Thermal Generation Outages and Deratings, Figure 55 discussion"
    quote: "For records in the outage scheduler spanning less than 30 days, a notification submitted more than seven days before a scheduled outage was considered planned, and a record submitted less than seven days before an outage was considered forced."
  - id: e18
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (4)"
    quote: "The QSE must appropriately update the telemetered High Sustained Limit (HSL) and any applicable telemetry as specified in paragraph (2) of Section 6.5.5.2, Operational Data Requirements, based on the Forced Derate, as soon as practicable but no longer than 15 minutes after the beginning of a Forced Derate, if the Forced Derate is greater than ten MW and more than 5% of the Seasonal net maximum sustainable rating of the Resource and its expected or actual duration is greater than 30 minutes."
  - id: e19
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (5)"
    quote: "The QSE must update the COP as soon as practicable but no longer than 60 minutes after the beginning of a Forced Derate, if the Forced Derate is greater than 20 MW and its expected duration is greater than 120 minutes."
  - id: e20
    source: imm-som-2025
    locator: "Market Operations, F. Thermal Generation Outages and Deratings"
    quote: "Outages and deratings of thermal power plants are especially important because they can affect reliability when other resources are limited."
  - id: e21
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (3)"
    quote: "Notwithstanding paragraphs (1) and (2) above, for any Forced Derate or change to a Forced Derate that meets the reporting criteria specified in paragraph (1) or (2) above and that is caused by ambient temperature or humidity, the Resource Entity or its designee must enter the Forced Derate into the Outage Scheduler as soon as practicable but no longer than eight hours after the beginning of the Force Derate or change."
  - id: e22
    source: np-02
    locator: "Section 2.1, definition of Maintenance Outage"
    quote: "Maintenance Outages are classified as follows: (1) Level 1 Maintenance Outage – Equipment that must be removed from service within 24 hours to prevent a potential Forced Outage; (2) Level II Maintenance Outage – Equipment that must be removed from service within seven days to prevent a potential Forced Outage; and (3) Level III Maintenance Outage – Equipment that must be removed from service within 30 days to prevent a potential Forced Outage."
  - id: e23
    source: np-02
    locator: "Section 2.1, definition of Opportunity Outage"
    quote: "An Outage that may be accepted by ERCOT when a specific Resource is Off-Line due to an Outage."
  - id: e24
    source: np-03
    locator: "Section 3.1.6.10, Opportunity Outage, paragraph (1)"
    quote: "Opportunity Outages for Resources are a special category of Planned Outages that may be approved by ERCOT when a specific Resource has been forced Off-Line due to a Forced Outage and the Resource has been previously approved for a Planned Outage during the next two days."
  - id: e25
    source: np-02
    locator: "Section 2.1, definition of Resource Planned Outage Limit (RPOL)"
    quote: "The aggregate maximum MW of Resource Planned Outages that will be approved by ERCOT for any time period within a given day, calculated pursuant to Section 3.1.6.13, Resource Planned Outage Limit (RPOL)."
  - id: e26
    source: np-03
    locator: "Section 3.1.6, Outages of Resources Other than Reliability Resources, paragraph (1)"
    quote: "Resource Entities should submit a request for a Resource Planned Outage as far in advance of the planned start of the Outage as is practicable but no more than 60 months in advance."
  - id: e27
    source: np-03
    locator: "Section 3.1.6, paragraph (3)(a)"
    quote: "If a Resource Entity plans to start a Planned or Maintenance Outage within 45 days, and the Resource Entity has not previously submitted a Resource Outage plan for the Outage, then the Resource Entity must immediately notify ERCOT and include in its notice whether the Outage is a Maintenance (Level I, II, or III) Outage or Planned Outage."
  - id: e28
    source: np-03
    locator: "Section 3.1.6, paragraph (3)(a)-(b)"
    quote: "(a) ERCOT shall accept Levels I, II, and III Maintenance Outage plans, and ERCOT shall coordinate the Outages within the time frames specified in these Protocols."
  - id: e29
    source: np-03
    locator: "Section 3.1.6, paragraph (3)(b)"
    quote: "(b) ERCOT shall approve Planned Outage plans, except that: (i) ERCOT shall reject an Outage plan if the proposed Outage would cause the aggregate MW of Resource Outages to exceed the RPOL at any point during the duration of the proposed Outage; and (ii) ERCOT shall reject an Outage plan if it will impair ERCOT’s ability to meet applicable reliability standards, taking into consideration all previously approved and accepted Outages, and other solutions cannot be exercised."
  - id: e30
    source: np-03
    locator: "Section 3.1.6, paragraph (4)"
    quote: "The Resource Entity shall not begin a Planned Outage unless it has received approval of its proposed Outage plan."
  - id: e31
    source: np-03
    locator: "Section 3.1.6, paragraph (6)"
    quote: "Notwithstanding any other provision of this Section, ERCOT shall approve a requested Outage plan for a nuclear Generation Resource."
  - id: e32
    source: np-03
    locator: "Section 3.1.6, paragraph (7)"
    quote: "Notwithstanding any other provision in this Section, ERCOT shall approve an Outage plan for a Generation Resource that is part of an industrial generation facility if the plan states that the Generation Resource is part of an industrial generation facility, as described in subsection (l) of the Public Utility Regulatory Act (PURA), TEX. UTIL. CODE ANN. § 39.151 (Vernon 1998 & Supp. 2007), and that the Outage is necessitated by the operational needs of an industrial Load normally served by the Generation Resource, except that ERCOT is not required to approve the Outage plan if ERCOT determines the Outage will impair ERCOT’s ability to ensure transmission security."
  - id: e33
    source: np-03
    locator: "Section 3.1.6, paragraph (8)(a)"
    quote: "Notwithstanding any other provision in this Section, ERCOT may, in its sole discretion, approve a requested Outage plan that would cause the aggregate MW of Resource Outages to exceed the RPOL at any point during the duration of the proposed Resource Outage and ERCOT determines that any of the following apply: (a) The Resource cannot operate due to unavailable fuel supply such as gas pipeline outages;"
  - id: e34
    source: np-03
    locator: "Section 3.1.6.6, Timelines for Response by ERCOT for Resource Planned Outages, paragraph (1) table"
    quote: "Three days Seven days ERCOT shall approve or reject by 1800 hours, two days before the start of the proposed Outage Between four and eight days Seven days ERCOT shall approve or reject by 1800 hours, three days prior to the start of the proposed Outage Between nine and 15 days 15 days ERCOT shall approve or reject four days before the start of the requested Outage Between 16 and 45 days 180 days ERCOT shall approve or reject within five Business Days after submission"
  - id: e35
    source: np-03
    locator: "Section 3.1.6.6, paragraphs (2)-(3)"
    quote: "Furthermore, in its sole discretion, ERCOT may approve Planned Outage durations that exceed the maximum durations prescribed in the table above. (3) The maximum duration of Planned Outages does not apply for Resource Outages under an NSO pursuant to Section 3.14.1.1, Notification of Suspension of Operations."
  - id: e36
    source: np-03
    locator: "Section 3.1.6.13, Resource Planned Outage Limit (RPOL), paragraph (1)"
    quote: "ERCOT shall calculate a maximum capacity of Resource Planned Outages, excluding Outages of nuclear-powered generation facilities and Outages of QFs that are subject to the exemption in paragraph (7) of Section 3.1.6, Outages of Resources Other than Reliability Resources, that should be allowed on each day of the next 60 months."
  - id: e37
    source: np-03
    locator: "Section 3.1.6.13, paragraph (1)(c)-(d)"
    quote: "(c) ERCOT shall post the RPOL and aggregate MW of approved Resource Planned Outages at least twice per day on the ERCOT website for each day of the next 60 months. (d) ERCOT shall post the RPOL and aggregate MW of approved Resource Planned Outages hourly on the ERCOT website for each hour of the next seven days."
  - id: e38
    source: np-03
    locator: "Section 3.1.6.13, paragraph (2)"
    quote: "ERCOT may adjust the RPOL if, at any point in time, the actual aggregate Forced Outages and Maintenance Outages exceed the amount that is used in the determination of RPOL."
  - id: e39
    source: np-03
    locator: "Section 3.1.4.4, Management of Forced Outages or Maintenance Outages, paragraph (1)(a)"
    quote: "(a) For Resource Outages: (i) Changing the telemetered Resource Status to the appropriate Off-Line status as soon as practicable but no longer than 15 minutes after the Forced Outage occurs; (ii) Updating the COP as soon as practicable but no longer than 60 minutes after the Forced Outage occurs; and (iii) Updating the Outage Scheduler, if necessary."
  - id: e40
    source: np-03
    locator: "Section 3.1.4.5, paragraph (3)"
    quote: "Any Resource Forced Outage that occurs in Real-Time must be entered into the Outage Scheduler as soon as practicable but no longer than 60 minutes after the beginning of the Forced Outage."
  - id: e41
    source: np-03
    locator: "Section 3.1.4.7, Reporting of Forced Derates, paragraph (4), last sentence"
    quote: "Alternatively for a Forced Derate, a QSE may use the ONHOLD process described in paragraph (2) of Section 6.5.5.1, Changes in Resource Status."
  - id: e42
    source: np-06
    locator: "Section 6.5.5.1, Changes in Resource Status, paragraph (2)"
    quote: "When an On-Line Resource is experiencing an event that may affect its availability and/or capability and that requires further actions to stabilize the Resource and/or determine the impact of the event, the QSE may change the Resource Status to ONHOLD within 15 minutes of experiencing an event."
  - id: e43
    source: np-06
    locator: "Section 6.5.5.1, paragraph (2)"
    quote: "After the QSE has determined the impact of the event, the QSE shall change the Resource Status to its updated status as soon as practicable but no longer than 60 consecutive minutes of being in the ONHOLD status."
  - id: e44
    source: np-03
    locator: "Section 3.1.4.8, Resource Forced Outage Report, paragraph (1)"
    quote: "Three days after each Operating Day, ERCOT shall post to the ERCOT website a report that identifies each Forced Outage, Maintenance Outage, or Forced Derate of a Generation Resource or ESR that occurs during, or that extends into, that Operating Day."
  - id: e45
    source: np-03
    locator: "Section 3.1.4.8, paragraph (1)(a)-(d)"
    quote: "At a minimum, the report shall contain: (a) The Resource name; (b) The Resource unit code; (c) The Resource’s fuel type; (d) The type of Outage or derate;"
  - id: e46
    source: np-03
    locator: "Section 3.1.6.9, Withdrawal of Approval and Rescheduling of Approved Planned Outages of Resource Facilities, paragraph (1)(b)"
    quote: "ERCOT shall issue the AAN a minimum of 24 hours prior to issuing any OSA."
  - id: e47
    source: np-03
    locator: "Section 3.1.6.9, paragraph (3)(b)"
    quote: "ERCOT may not consider nuclear-powered Generation Resources for an OSA."
  - id: e48
    source: np-02
    locator: "Section 2.1, definition of Outage Schedule Adjustment (OSA)"
    quote: "An adjustment to delay or to cancel and reschedule a Resource’s Planned Outage that has already been accepted or approved by ERCOT. The OSA is issued by ERCOT to the Qualified Scheduling Entity (QSE) representing the Resource."
  - id: e49
    source: np-03
    locator: "Section 3.1.7.1, Timelines for Response by ERCOT on Reliability Resource Outages, paragraph (2)"
    quote: "ERCOT shall approve requests for Outages, other than Forced Outages or Level I Maintenance Outages, of Reliability Resources unless, in ERCOT’s determination, the requested Outage would cause ERCOT to violate applicable reliability standards or exceed the RPOL."
  - id: e50
    source: np-03
    locator: "Section 3.1.4.3, Reporting for Planned Outages, Maintenance Outages, and Rescheduled Outages of Resource and Transmission Facilities, paragraph (3)"
    quote: "A Firm Fuel Supply Service Resource (FFSSR) shall not schedule or request a Planned Outage that would occur during the period of December 1 through March 1."
  - id: e51
    source: np-02
    locator: "Section 2.1, definition of Startup Loading Failure"
    quote: "A type of Forced Outage that results when a Generation Resource is unable to operate at Low Sustained Limit (LSL) at the time scheduled in the Current Operating Plan (COP) which occurs while the unit is ramping up to its scheduled MW output."
  - id: e52
    source: np-03
    locator: "Section 3.1.4.7, paragraph (2)"
    quote: "If a Forced Derate that has already been reported changes by an amount greater than ten MW and 5% of the Generation Resource’s or ESR’s Seasonal net maximum sustainable rating, and the change lasts longer than 30 minutes, the Resource Entity or its designee must enter the change as a new Forced Derate into the Outage Scheduler as soon as practicable but no longer than 60 minutes after the beginning of the change."
  - id: e53
    source: imm-som-2025
    locator: "page 111 (OCR), F. Thermal Generation Outages and Deratings"
    quote: "However, thermal generators tend to schedule more outages in the spring and fall, when demand and prices are typically lower."
  - id: e54
    source: imm-som-2024
    locator: "page 108 (OCR), B. Thermal Generation Outages and Deratings"
    quote: "NPRR 1084, Improvements to Reporting of Resource Outages, Derates, and Startup Loading Failures, was implemented at the end of 2022 to improve outage reporting practices."
  - id: e55
    source: imm-som-2024
    locator: "page 108 (OCR), B. Thermal Generation Outages and Deratings"
    quote: "However, Figure 53 indicates that a large share of outages and derates in 2024 were still not reported in the outage scheduler."
  - id: e56
    source: imm-som-2024
    locator: "page 108 (OCR), B. Thermal Generation Outages and Deratings"
    quote: "Forced outages remained relatively stable across the year."
  - id: e57
    source: imm-som-2023
    locator: "page 100 (OCR), B. Thermal Generation Outages and Deratings, Figure 42 discussion"
    quote: "Unreported outages fluctuated remarkably and peaked at almost 17 GW in the shoulder seasons but fell to very low levels in the summer and winter months."
  - id: e58
    source: imm-som-2023
    locator: "page 100 (OCR), B. Thermal Generation Outages and Deratings, Figure 42 discussion"
    quote: "Average unreported deratings rose in the summer, peaking at 6 GW, which may reflect the fact that high ambient temperatures reduce the maximum output of thermal resources."
  - id: e59
    source: imm-som-2023
    locator: "page 99 (OCR), footnote 77 to B. Thermal Generation Outages and Deratings"
    quote: "“Unreported outages or deratings” are resources with ‘OUT’ status codes or deratings below the summer capacity levels that are not reported in the outage scheduler."
  - id: e60
    source: ercot-summer-2026-review
    locator: "Slide 6, 2025/2026 Summer Thermal Forced Outage Comparison, Key Takeaway"
    quote: "Key Takeaway: Summer 2026 has generally had lower forced outages than summer 2025."
  - id: e61
    source: ercot-summer-2026-review
    locator: "Slide 6, chart note"
    quote: "*2026 data period is 6/1 – 8/15"
  - id: e62
    source: ercot-mora-2027-01
    locator: "Summary table, Expected Thermal Outages (deterministic scenario, HE 8:00 a.m.)"
    quote: "Expected Thermal Outages 8,105 Planned 417 Unplanned 7,688"
  - id: e63
    source: ercot-mora-2027-01
    locator: "Executive summary, January outlook"
    quote: "Regarding historical January unplanned thermal outage trends, January 2026 was significantly higher than for January 2025 and moderately higher than for January 2024."
  - id: e64
    source: ercot-mora-2027-01
    locator: "Methodology, Typical Unplanned Thermal Outages based on Normal Weather"
    quote: "Typical Unplanned Thermal Outages based on Normal Weather - A range of daily unplanned outage amounts based on assessment month history for the past three years. For the winter months, outages during major winter storms are excluded from the probability distributions."
  - id: e65
    source: ercot-mora-2027-01
    locator: "Methodology, Extreme-Weather-Related Thermal Outages"
    quote: "Extreme-Weather-Related Thermal Outages - For the winter months, the probability distribution reflects a range of daily unplanned weather-related outage amounts scaled from zero MW to the maximum amount observed during Winter Storm Uri."
  - id: e66
    source: ercot-fern-outage-review
    locator: "Slide, Dispatchable Generation: common causes during Winter Storm Fern (October 2026 presentation)"
    quote: "Control-path, combustion systems, air inlets, and coal-path issues drove the largest dispatchable impacts."
  - id: e67
    source: ercot-fern-outage-review
    locator: "Slide, Dispatchable Generation: common causes during Winter Storm Fern"
    quote: "Total Number of Outages 76 Total MWh Lost ~156,000 MWh"
---

## Definition

Under the Protocols, a Forced Outage of a Generation Resource or ESR is an outage that requires immediate removal of all or part of its capacity from service, whether controlled or uncontrolled. [e1] A Planned Outage is scheduled in advance with ERCOT, other than a Maintenance Outage or Opportunity Outage, and a Maintenance Outage is work that could be postponed briefly but is required to prevent a potential Forced Outage. [e2][e3] A Forced Derate is the unavailability of a portion of a Resource's capacity relative to its Seasonal net max sustainable rating. [e4]

## How it works

Resource Entities give ERCOT a Planned and Maintenance Outage plan for at least the next 12 months, updated monthly. [e5] ERCOT approves or rejects outage plans submitted more than 45 days ahead, and approves a plan if it would not push aggregate MW of Resource outages above the Resource Planned Outage Limit (RPOL) at any point. [e6][e7]

Forced derates have reporting thresholds: a derate over ten MW and 5% of the Seasonal net maximum sustainable rating that lasts longer than 30 minutes must go into the Outage Scheduler within 60 minutes, except that a derate caused by ambient temperature or humidity has eight hours. [e8][e21] The IMM describes derated capacity as the difference between registered maximum capacity and actual capability. [e9]

## ERCOT context

The IMM says thermal outages and deratings are especially important because they can affect reliability when other resources are limited. [e20] It reports that planned and unapproved outages were lowest in summer and highest in spring and fall, while the most noteworthy change from 2024 to 2025 was a higher rate of forced outages and derates, particularly in summer. [e10] The IMM also says planned outages are only part of the total, many outages are forced, and many go unreported, which makes system planning harder. [e11]

ERCOT's reviews show the same: summer thermal forced outages as a share of installed capacity have been higher in 2025-2026 than in 2019-2020, and in summer 2023 forced thermal outages stayed in a 4-8 GW range except on low net load days when generators did repairs. [e13][e15] ERCOT's January 2027 MORA assumes 8,105 MW of total thermal outages (planned plus unplanned) in normal grid conditions for its deterministic scenario. [e16] In the February 2021 event, FERC-NERC found that across the whole event area (ERCOT, SPP and MISO South, not ERCOT alone) freezing and fuel issues caused 75% of outages, derates and failures to start. [e14]

## Key facts

- Forced derate reporting: more than ten MW and 5% of rating, lasting over 30 minutes, entered within 60 minutes (eight hours if caused by ambient temperature or humidity). [e8][e21]
- Outage plans cover at least 12 months and ERCOT decides on requests made more than 45 days ahead. [e5][e6]
- Outage approval is limited by the Resource Planned Outage Limit (RPOL). [e7]
- 2025 saw more forced outages and derates in summer than 2024, per the IMM. [e10]
- Summer 2023 forced thermal outages stayed within 4-8 GW except on low net load days. [e15]

## Say it like this

(Guidance) Planned outages are scheduled around the seasons, with the lowest levels in summer when energy is most valuable, so what hurts at the margin is forced outages and unreported outages. [e10][e11] The IMM says thermal outages and deratings matter most when other resources are limited. [e20]

## Common confusion

(Guidance) Do not assume an outage means the whole unit: the Forced Outage definition covers all or a portion of a Resource's capacity [e1], and a Forced Derate is the unavailability of a portion of capacity against its Seasonal net max sustainable rating. [e4] Also, the Protocol categories differ from how the IMM classifies outages in its charts: for scheduler records under 30 days, the IMM treats one submitted more than seven days ahead as planned and one submitted less than seven days ahead as forced. [e1][e17]

## Questions

### What is the difference between a Planned and a Maintenance Outage?

Planned Outages are scheduled in advance with ERCOT; a Maintenance Outage is work that could be briefly postponed but is required to prevent a potential Forced Outage. [e2][e3]

### When must a forced derate be reported?

If it exceeds ten MW and 5% of the Seasonal net maximum sustainable rating and lasts over 30 minutes, within 60 minutes of starting (eight hours if the cause is ambient temperature or humidity). [e8][e21]

### What did the IMM find about outages in 2025?

Forced outages and derates were higher than in 2024, especially in summer, and many outages remain unreported. [e10][e11]

## Open items

- Deeper pass: Level I/II/III maintenance outage timelines, outage coordination for Reliability Resources, ONHOLD process, and the Resource Forced Outage report (np-03 3.1.4.8).
- Deeper pass: forced outage MW by fuel type and by season; none was cleanly quotable from chart-derived text.
- The sources use "thermal" to cover gas, coal, nuclear and biomass; no single definition of "thermal outage" was found.
