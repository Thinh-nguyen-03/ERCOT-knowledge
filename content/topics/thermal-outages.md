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
    note: Cold-weather outages in 2021 were mostly freezing and fuel issues. [e14]
  - to: ruc
    type: related
    note: The IMM says many outages are forced by unexpected failures that take units offline. [e11]
  - to: winter-storm-uri
    type: related
    note: FERC-NERC attributes 75 percent of Uri's outages, derates and failures to start to freezing or fuel issues. [e14]
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
---

## Definition

Under the Protocols, a Forced Outage of a Generation Resource or ESR is an outage that requires immediate removal of all or part of its capacity from service, whether controlled or uncontrolled. [e1] A Planned Outage is scheduled in advance with ERCOT, other than a Maintenance Outage or Opportunity Outage, and a Maintenance Outage is work that could be postponed briefly but is required to prevent a potential Forced Outage. [e2][e3] A Forced Derate is the unavailability of a portion of a Resource's capacity relative to its Seasonal net max sustainable rating. [e4]

## How it works

Resource Entities give ERCOT a Planned and Maintenance Outage plan for at least the next 12 months, updated monthly. [e5] ERCOT approves or rejects outage plans submitted more than 45 days ahead, and approves a plan if it would not push aggregate MW of Resource outages above the Resource Planned Outage Limit (RPOL) at any point. [e6][e7]

Forced derates have reporting thresholds: a derate over ten MW and 5% of the Seasonal net maximum sustainable rating that lasts longer than 30 minutes must go into the Outage Scheduler within 60 minutes. [e8] The IMM describes derated capacity as the difference between registered maximum capacity and actual capability. [e9]

## ERCOT context

The IMM says thermal outages and deratings are especially important because they can affect reliability when other resources are limited. [e20] It reports that planned and unapproved outages were lowest in summer and highest in spring and fall, while the most noteworthy change from 2024 to 2025 was a higher rate of forced outages and derates, particularly in summer. [e10] The IMM also says planned outages are only part of the total, many outages are forced, and many go unreported, which makes system planning harder. [e11]

ERCOT's reviews show the same: summer thermal forced outages as a share of installed capacity have been higher in 2025-2026 than in 2019-2020, and in summer 2023 forced thermal outages stayed in a 4-8 GW range except on low net load days when generators did repairs. [e13][e15] ERCOT's MORA assumes 8,105 MW of total thermal outages (planned plus unplanned) in normal conditions for its January deterministic scenario. [e16] In the February 2021 event, freezing and fuel issues caused 75% of outages, derates and failures to start. [e14]

## Key facts

- Forced derate reporting: more than ten MW and 5% of rating, lasting over 30 minutes, entered within 60 minutes. [e8]
- Outage plans cover at least 12 months and ERCOT decides on requests made more than 45 days ahead. [e5][e6]
- Outage approval is limited by the Resource Planned Outage Limit (RPOL). [e7]
- 2025 saw more forced outages and derates in summer than 2024, per the IMM. [e10]
- Summer 2023 forced thermal outages stayed within 4-8 GW except on low net load days. [e15]

## Say it like this

(Guidance) Planned outages are scheduled around the seasons, with the lowest levels in summer when energy is most valuable, so what hurts at the margin is forced outages and unreported derates. The more the system relies on wind and solar, the more a surprise thermal outage on a high-net-load evening matters.

## Common confusion

(Guidance) Do not assume an outage means the whole unit: the Forced Outage definition covers all or a portion of a Resource's capacity [e1], and a Forced Derate is the unavailability of a portion of capacity against its Seasonal net max sustainable rating. [e4] Also, the Protocol categories differ from how the IMM classifies outages in its charts: for scheduler records under 30 days, the IMM treats one submitted more than seven days ahead as planned and one submitted less than seven days ahead as forced. [e1][e17]

## Questions

### What is the difference between a Planned and a Maintenance Outage?

Planned Outages are scheduled in advance with ERCOT; a Maintenance Outage is work that could be briefly postponed but is required to prevent a potential Forced Outage. [e2][e3]

### When must a forced derate be reported?

If it exceeds ten MW and 5% of the Seasonal net maximum sustainable rating and lasts over 30 minutes, within 60 minutes of starting. [e8]

### What did the IMM find about outages in 2025?

Forced outages and derates were higher than in 2024, especially in summer, and many outages remain unreported. [e10][e11]

## Open items

- Deeper pass: Level I/II/III maintenance outage timelines, outage coordination for Reliability Resources, ONHOLD process, and the Resource Forced Outage report (np-03 3.1.4.8).
- Deeper pass: forced outage MW by fuel type and by season; none was cleanly quotable from chart-derived text.
- The sources use "thermal" to cover gas, coal, nuclear and biomass; no single definition of "thermal outage" was found.
