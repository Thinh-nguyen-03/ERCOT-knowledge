---
id: nerc
name: NERC & Texas RE
aliases: [NERC, North American Electric Reliability Corporation, Texas RE, Texas Reliability Entity, Texas Regional Entity]
kind: entity
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: ferc
    type: related
    note: FERC certified NERC as the Electric Reliability Organization and approves its Reliability Standards. [e1]
  - to: ercot
    type: related
    note: The 2021 FERC-NERC report says ERCOT serves as a Balancing Authority and Planning Authority/Planning Coordinator and shares Transmission Operator duties. [e4]
  - to: weatherization
    type: related
    note: ERCOT and Texas RE staff typically visited 75-80 generating units per year (winter 2011/2012 to 2019/2020) to assess winter readiness. [e5]
  - to: winter-storm-uri
    type: related
    note: NERC and Texas RE took part in the joint inquiry, whose scope included lessons for NERC's development of cold weather Reliability Standards. [e6][e3]
  - to: reliability-standard
    type: contrasts-with
    note: NERC Reliability Standards are mandatory standards that FERC must approve; the PUCT's ERCOT reliability standard is a separate topic. [e1]
  - to: nodal-protocols
    type: related
    note: The NERC Regional Entity can submit NPRRs. [e7]
  - to: stakeholder-process
    type: related
    note: The NERC Regional Entity may attend PRS meetings and appeal PRS actions to TAC. [e17][e18]
  - to: load-shed
    type: related
    note: The 2021 report recommends the Regional Entity review proposed underfrequency load shedding changes against standard PRC-006-5. [e19]
  - to: eea
    type: related
    note: The Operating Guides require each TO to file an annual emergency operations plan with ERCOT as required by NERC Reliability Standards. [e22]
evidence:
  - id: e1
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES"
    quote: "Pursuant to its EPAct authority, FERC certified the North American Electric Reliability Corporation (NERC) as the Electric Reliability Organization (ERO) responsible for establishing mandatory Reliability Standards, which then must be approved by FERC."
  - id: e2
    source: ferc-nerc-uri
    locator: "Glossary, Regional Entity"
    quote: "Regional Entity - An independent, regional entity having delegated authority from NERC to propose and enforce Reliability Standards and to otherwise promote the effective and efficient administration of bulkpower system reliability."
  - id: e3
    source: ferc-nerc-uri
    locator: "Appendix J, footnote 377"
    quote: "The Regional Entities relevant to this event are Midwest Reliability Organization, ReliabilityFirst, SERC Reliability Corporation, and Texas Regional Entity."
  - id: e4
    source: ferc-nerc-uri
    locator: "Footnote 35"
    quote: "In addition, ERCOT also serves as a Balancing Authority (BA), Planning Authority (PA)/Planning Coordinator (PC), and shares Transmission Operator (TOP) duties with transmission utilities in its footprint."
  - id: e5
    source: ferc-nerc-uri
    locator: "Winter weatherization site visit program"
    quote: "From winter 2011/2012 until winter 2019/2020, ERCOT and Texas RE staff typically visited 75-80 generating units per year to assess their readiness for the upcoming winter season and suggest potential improvements."
  - id: e6
    source: ferc-nerc-uri
    locator: "Section on scope of the inquiry"
    quote: >-
      Staff from FERC, NERC and all six of the Regional Entities quickly formed a team (the Team) of over 50 subject-matter experts and identified the scope of the inquiry to include: assessing what occurred during the Event, identifying commonalities with previous cold weather events and any lessons that should be incorporated in the development by NERC of cold weather Reliability Standards, and making recommendations to avoid similar events in the future.
  - id: e7
    source: np-21
    locator: "Section 21.2(1)(e), Submission"
    quote: "(e) The North American Electric Reliability Corporation (NERC) Regional Entity;"
  - id: e8
    source: ferc-nerc-uri
    locator: "Footnote 28"
    quote: "In August, the Commission approved revisions to the NERC Reliability Standards to address cold weather, including a new requirement for generating units to have a cold weather preparedness plan. However, the effective date for these revisions is April 1, 2023. See 176 FERC ¶ 61,119 (August 2021)."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of North American Electric Reliability Corporation (NERC) Regional Entity"
    quote: "An Entity with delegated authority from the North American Electric Reliability Corporation (NERC) and approved by the Federal Energy Regulatory Commission (FERC) to propose and enforce NERC Reliability Standards in the ERCOT Region."
  - id: e10
    source: ferc-nerc-uri
    locator: "Introduction, composition of the inquiry team"
    quote: "Texas Reliability Entity (Texas RE) and Western Electricity Coordinating Council (WECC), as well as the Department of Energy and the National Oceanic and Atmospheric Administration (NOAA), all of whom are named in Appendix A."
  - id: e11
    source: ref-ferc-energy-primer
    locator: "2024 Energy Primer, reliability section (p. 45)"
    quote: "The reliability standards, once approved by FERC, must be met by applicable industry participants as designated in each reliability standard. Consequently, the grid is planned and operated to meet these standards."
  - id: e12
    source: ref-ferc-energy-primer
    locator: "2024 Energy Primer, RTO/ISO discussion"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
  - id: e13
    source: nog-03
    locator: "Section 3.6(1), Transmission Service Providers"
    quote: "ERCOT and Transmission Service Providers (TSPs) shall operate the ERCOT Transmission Grid in compliance with Good Utility Practice, North American Electric Reliability Corporation (NERC) Reliability Standards, Protocols and Operating Guides."
  - id: e14
    source: nog-02
    locator: "Section 2.1(1), Operational Duties (Operating Guides dated November 1, 2026)"
    quote: "The duties of ERCOT are described in relevant sections of the Protocols and North American Electric Reliability Corporation (NERC) Reliability Standards."
  - id: e15
    source: np-03
    locator: "Section 3.11.2(2), Planning Criteria"
    quote: "The technical reliability criteria are established by the Planning Guide, Operating Guides, and the North American Electric Reliability Corporation (NERC) Reliability Standards. ERCOT and TSPs shall strongly endeavor to meet these criteria, identify current and future violations thereof and initiate solutions necessary to ensure continual compliance."
  - id: e16
    source: ferc-nerc-uri
    locator: "Appendix on frequency response, discussion of Primary Frequency Response"
    quote: "ERCOT is somewhat unique it that all generating resources in the Interconnection are subject to Regional Reliability Standard, BAL-001-TRE-2 — Primary Frequency Response in the ERCOT Region, which has been in effect since April 2015."
  - id: e17
    source: np-21
    locator: "Section 21.3(1)(a), Protocol Revision Subcommittee"
    quote: "PRS meetings are open to ERCOT, ERCOT Members, Market Participants, the Reliability Monitor, the North American Electric Reliability Corporation (NERC) Regional Entity, the Independent Market Monitor (IMM), and the Public Utility Commission of Texas (PUCT) Staff;"
  - id: e18
    source: np-21
    locator: "Section 21.4.12.1(1), Appeal of Protocol Revision Subcommittee Action"
    quote: "Any ERCOT Member, Market Participant, PUCT Staff, the Reliability Monitor, the IMM, the NERC Regional Entity, or ERCOT may appeal a PRS action to reject, table, or refer a Revision Request, directly to the TAC."
  - id: e19
    source: ferc-nerc-uri
    locator: "Recommendation 22 (underfrequency load shedding)"
    quote: "The Regional Entity should review any changes proposed by the Planning Coordinator for (1) consistency with Standard PRC-006-5 Automatic Underfrequency Load Shedding, and (2) whether a revision of, or regional variance from, Standard PRC-006-5 is warranted."
  - id: e20
    source: ferc-nerc-uri
    locator: "Section on generator underfrequency trip settings"
    quote: "ERCOT Nodal Protocols and NERC Reliability Standard PRC-024-2 (Generator Frequency and Voltage Protective Relay Settings) allow generating units to automatically trip offline, or automatically shut down and disconnect from the grid, if the grid frequency drops to 59.4 Hz or below for more than nine minutes."
  - id: e21
    source: ferc-nerc-uri
    locator: "Footnote 86, NERC Standard EOP-011-1"
    quote: "NERC Standard EOP-011-1 Emergency Operations requires that each Transmission Operator shall develop, maintain, and implement one or more Reliability Coordinator-reviewed Operating Plan(s) to mitigate operating Emergencies in its Transmission Operator Area."
  - id: e22
    source: nog-03
    locator: "Section 3.7(6), Transmission Operators"
    quote: "By February 15 of each year, each TO shall submit to ERCOT its emergency operations plan to mitigate operating emergencies, as required by the applicable North American Electric Reliability Corporation (NERC) Reliability Standards, and in accordance with Section 8, Attachment L, Emergency Operations Plan."
  - id: e23
    source: ferc-nerc-uri
    locator: "Recommendations on cold weather preparedness plans (Reliability Standards revisions to EOP-011, IRO-010 and TOP-003)"
    quote: "The Reliability Standards revisions to EOP-011, IRO-010 and TOP-003 (versions -2, -4 and -5, respectively) (effective April 1, 2023) will, for the first time, require GOs to implement and maintain cold weather preparedness plans for their generating units"
  - id: e24
    source: ferc-nerc-uri
    locator: "Recommendation 1c discussion, EOP-011-2 R7.3.2"
    quote: "EOP-011-2, R7.3.2 (effective April 1, 2023) requires a GO to include in its cold weather preparedness plan, at a minimum, the generating unit’s minimum design temperature, historical operating temperature or current cold weather performance temperature determined by an engineering analysis."
  - id: e25
    source: nog-03
    locator: "Section 3.2.3(1), Regulatory Required Incident and Disturbance Reports"
    quote: "In the event of a system incident or disturbance, as described by North American Electric Reliability Corporation (NERC) and the Department of Energy (DOE), QSEs, and TSPs or their Designated Agents shall provide required reports to ERCOT, the DOE and/or NERC."
  - id: e26
    source: nog-02
    locator: "Section 2.3.1.1(1), Obligation"
    quote: "ERCOT operating reserve requirements are more restrictive than North American Electric Reliability Corporation (NERC) Reliability Standards."
  - id: e27
    source: ferc-nerc-uri
    locator: "Footnote 373, BAL-001-TRE"
    quote: "BAL-001-TRE was implemented April 1, 2014, with compliance enforcement of the unit FRM measurements one year later in April 2015."
  - id: e28
    source: ferc-nerc-uri
    locator: "Winter weatherization site visit program"
    quote: "Texas RE focused its site visits on recommendations from the 2011 Southwest cold weather report, the NERC Generating Unit Winter Weather Readiness Reliability Guideline and information gathered from NERC’s Generating Availability Data System (GADS)."
  - id: e29
    source: ferc-nerc-uri
    locator: "Winter weatherization site visit program"
    quote: "ERCOT focused its spot checks on Public Utility Commission of Texas rules and ERCOT Nodal Protocols, and to standardize its review, ERCOT developed a comprehensive checklist of items to evaluate."
---

## Definition

NERC is the North American Electric Reliability Corporation, certified by FERC as the Electric Reliability Organization (ERO) responsible for establishing mandatory Reliability Standards, which FERC must approve. [e1] Texas RE (Texas Reliability Entity; the 2021 report also calls it Texas Regional Entity) is one of the Regional Entities, which are independent regional bodies with delegated authority from NERC to propose and enforce Reliability Standards. [e2][e3][e10] The Protocols define the NERC Regional Entity as an Entity with delegated authority from NERC, approved by FERC, to propose and enforce NERC Reliability Standards in the ERCOT Region. [e9]

## How it works

NERC writes the mandatory standards and the Regional Entities administer and enforce them regionally under NERC's delegated authority. [e1][e2] A 2024 FERC staff primer says the standards, once FERC approves them, must be met by the applicable industry participants designated in each standard, so the grid is planned and operated to meet them. [e11]

In ERCOT, ERCOT itself carries reliability functions; per the 2021 FERC-NERC report it serves as a Balancing Authority and Planning Coordinator and shares Transmission Operator duties with transmission utilities in its footprint. [e4] The Operating Guides tie ERCOT's duties to NERC Reliability Standards [e14], and require ERCOT and TSPs to operate the transmission grid in compliance with Good Utility Practice, NERC Reliability Standards, the Protocols and the Operating Guides. [e13] The Protocols say the technical reliability criteria are established by the Planning Guide, Operating Guides and NERC Reliability Standards, and that ERCOT and TSPs shall strongly endeavor to meet them and initiate solutions to ensure continual compliance. [e15]

The saved sources name these standards. [e20][e21][e23][e16][e19]
- PRC-024-2 (Generator Frequency and Voltage Protective Relay Settings): with the Nodal Protocols, allows generating units to trip if frequency drops to 59.4 Hz or below for more than nine minutes (as described in the 2021 report). [e20]
- EOP-011-1 (Emergency Operations): the report says each Transmission Operator must develop, maintain and implement Reliability Coordinator-reviewed Operating Plans to mitigate operating Emergencies in its area. [e21] The Operating Guides have each TO submit its emergency operations plan to ERCOT by February 15 each year, as required by the applicable NERC Reliability Standards. [e22]
- EOP-011-2 and related revisions (effective April 1, 2023): per the report, for the first time require generator owners to implement and maintain cold weather preparedness plans. [e23] EOP-011-2 R7.3.2 requires the plan to include, at a minimum, the unit's minimum design temperature, historical operating temperature or current cold weather performance temperature from an engineering analysis. [e24]
- BAL-001-TRE-2 (Primary Frequency Response in the ERCOT Region): a Regional Reliability Standard under which the report says all generating resources in the Interconnection are subject, in effect since April 2015. [e16] The report's footnote says BAL-001-TRE was implemented April 1, 2014, with compliance enforcement of unit measurements one year later. [e27]
- PRC-006-5 (Automatic Underfrequency Load Shedding): the report recommends the Regional Entity review Planning Coordinator proposed changes for consistency with it and whether a revision or regional variance is warranted. [e19]

## ERCOT context

After the February 2021 event, FERC, NERC and all six Regional Entities, including Texas RE, formed an inquiry team whose scope included lessons for NERC cold weather Reliability Standards. [e6][e3] A footnote in the report says that in August (its cite is 176 FERC ¶ 61,119, August 2021) FERC approved NERC Reliability Standard revisions that add a requirement for generating units to have a cold weather preparedness plan, with an effective date of April 1, 2023. [e8]

Texas RE staff also worked alongside ERCOT on winter readiness. ERCOT and Texas RE staff typically visited 75-80 generating units per year from winter 2011/2012 to winter 2019/2020 to assess winter readiness. [e5] The report says the two had different focuses: ERCOT on PUCT rules and ERCOT Nodal Protocols with its own checklist, [e29] Texas RE on recommendations from the 2011 Southwest cold weather report, the NERC Generating Unit Winter Weather Readiness Reliability Guideline and NERC GADS data. [e28]

Participants report to NERC through ERCOT's procedures: in a system incident or disturbance as described by NERC and DOE, QSEs and TSPs provide required reports to ERCOT, DOE and/or NERC. [e25] ERCOT's operating reserve requirements are more restrictive than NERC Reliability Standards, per the Operating Guides. [e26]

In the stakeholder process, the NERC Regional Entity may submit an NPRR, attend PRS meetings and appeal PRS actions to TAC. [e7][e17][e18] The 2024 FERC primer says FERC regulates all RTOs/ISOs except ERCOT, which is why NERC standards and the PUCT, rather than FERC market rules, are the main federal and state reliability anchors here. [e12]

## Timeline

- April 1, 2014: BAL-001-TRE implemented, with compliance enforcement of unit measurements from April 2015 (per the 2021 report). [e27]
- August 2021: FERC approved NERC Reliability Standard revisions to address cold weather (per the report's footnote). [e8]
- April 1, 2023: effective date of EOP-011-2 and related revisions requiring generator cold weather preparedness plans. [e23][e8]

## Key facts

- NERC is the FERC-certified ERO and develops mandatory Reliability Standards. [e1]
- Texas RE is one of the Regional Entities with delegated authority to propose and enforce standards. [e2][e3]
- ERCOT is a Balancing Authority and Planning Coordinator and shares Transmission Operator duties. [e4]
- The NERC Regional Entity may submit an NPRR. [e7]
- The report says FERC approved NERC Reliability Standard revisions in August 2021, adding a cold weather preparedness plan requirement for generating units, effective April 1, 2023. [e8]
- The ERCOT Region has its own Regional Reliability Standard on Primary Frequency Response, BAL-001-TRE-2 (per the 2021 report). [e16]

## Say it like this

(Guidance) NERC sets mandatory reliability standards under FERC oversight, and Texas RE is the regional entity that, with ERCOT, has assessed generator winter readiness. This is separate from the PUCT's market and rules role.

## Common confusion

(Guidance) NERC and Texas RE are about bulk power system reliability standards, not market design. NERC's mandatory Reliability Standards are also a different thing from the PUCT's reliability standard for ERCOT. [e1] Also, ERCOT is both a standards-bound entity and a standards-referencing one: it must meet NERC standards itself [e4][e13] and its Protocols and Guides refer to them. [e14][e15]

## Questions

### What is Texas RE's role?

It is a Regional Entity, with authority delegated from NERC to propose and enforce Reliability Standards; the Protocols define the NERC Regional Entity as doing so in the ERCOT Region. [e2][e3][e9]

### Which reliability roles does ERCOT itself hold?

Balancing Authority and Planning Authority/Planning Coordinator, plus shared Transmission Operator duties. [e4]

### Why did the cold weather standards change after 2021?

The inquiry team's scope included lessons for NERC's development of cold weather Reliability Standards, and the report says the revisions effective April 1, 2023 require generator owners to implement and maintain cold weather preparedness plans for the first time. [e6][e23]

### What if a TO misses the annual emergency operations plan filing?

The Operating Guides require each TO to submit its plan to ERCOT by February 15 each year, as required by the applicable NERC Reliability Standards. [e22] The saved sources do not say what enforcement follows a miss.

### Does ERCOT write reliability standards?

NERC writes the mandatory standards, and Regional Entities may propose them. [e1][e2] ERCOT has its own operating requirements that the Guides say are more restrictive than NERC's for operating reserves. [e26]

## Open items

- Deeper pass: the delegation agreement between NERC and Texas RE and how enforcement against Texas entities works in practice (penalties, audits, registration) are not in the saved sources; only the delegated authority to propose and enforce standards is.
- The saved sources do not list every NERC standard that binds ERCOT participants; the standards above are those the saved reports or guides name.
- The Operating Guides' RRS obligation of a minimum of 2300 MW (Section 2.3.1.1) was not quoted because the Guides say the amount may be adjusted; see the rrs topic.
- Resolved 2026-11-21: Texas RE's formal name appears as "Texas Reliability Entity (Texas RE)" in the 2021 report's introduction (and "Texas Regional Entity" in a footnote); the Protocols' Regional Entity definition is now cited.
