---
id: nerc
name: NERC & Texas RE
aliases: [NERC, North American Electric Reliability Corporation, Texas RE, Texas Reliability Entity, Texas Regional Entity]
kind: entity
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ferc
    type: related
    note: FERC certified NERC as the Electric Reliability Organization and approves its Reliability Standards. [e1]
  - to: ercot
    type: related
    note: ERCOT serves as a Balancing Authority, Planning Coordinator and shares Transmission Operator duties, which NERC categorizes as reliability functions. [e4]
  - to: weatherization
    type: related
    note: ERCOT and Texas RE jointly ran winter weatherization site visits. [e5]
  - to: winter-storm-uri
    type: related
    note: NERC and Texas RE took part in the joint 2021 inquiry and NERC was asked to develop cold weather standards. [e6]
  - to: reliability-standard
    type: contrasts-with
    note: NERC Reliability Standards are mandatory standards that FERC must approve; the PUCT's ERCOT reliability standard is a separate topic. [e1]
  - to: nodal-protocols
    type: related
    note: The NERC Regional Entity can submit NPRRs. [e7]
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
    quote: "In August, the Commission approved revisions to the NERC Reliability Standards to address cold weather, including a new requirement for generating units to have a cold weather preparedness plan."
---

## Definition

NERC is the North American Electric Reliability Corporation, certified by FERC as the Electric Reliability Organization (ERO) responsible for establishing mandatory Reliability Standards, which FERC must approve. [e1] Texas RE (Texas Reliability Entity, called Texas Regional Entity in the report) is one of the Regional Entities, which are independent regional bodies with delegated authority from NERC to propose and enforce Reliability Standards. [e2][e3]

## How it works

NERC writes the mandatory standards and the Regional Entities administer and enforce them regionally under NERC's delegated authority. [e1][e2] In ERCOT, ERCOT itself carries reliability functions: it serves as a Balancing Authority and Planning Coordinator and shares Transmission Operator duties with transmission utilities in its footprint. [e4]

Texas RE also works alongside ERCOT on operations. ERCOT and Texas RE staff typically visited 75-80 generating units per year from winter 2011/2012 to winter 2019/2020 to assess winter readiness. [e5]

## ERCOT context

After the February 2021 event, FERC, NERC and all six Regional Entities, including Texas RE, formed an inquiry team whose scope included lessons for NERC cold weather Reliability Standards. [e6][e3] The report notes that FERC approved NERC Reliability Standard revisions in August 2021 that add a requirement for generating units to have a cold weather preparedness plan. [e8] The Protocols also let the NERC Regional Entity submit NPRRs. [e7]

## Key facts

- NERC is the FERC-certified ERO and develops mandatory Reliability Standards. [e1]
- Texas RE is one of the Regional Entities with delegated authority to propose and enforce standards. [e2][e3]
- ERCOT is a Balancing Authority and Planning Coordinator and shares Transmission Operator duties. [e4]
- The NERC Regional Entity may submit an NPRR. [e7]
- August 2021: FERC approved NERC standard revisions adding a cold weather preparedness plan requirement. [e8]

## Say it like this

(Guidance) NERC sets mandatory reliability standards under FERC oversight, and Texas RE is the regional entity that works with ERCOT on compliance and readiness. This is separate from the PUCT's market and rules role.

## Common confusion

(Guidance) NERC and Texas RE are about bulk power system reliability standards, not market design. NERC's mandatory Reliability Standards are also a different thing from the PUCT's reliability standard for ERCOT. [e1]

## Questions

### What is Texas RE's role?

It is a Regional Entity, with authority delegated from NERC to propose and enforce Reliability Standards. [e2][e3]

### Which reliability roles does ERCOT itself hold?

Balancing Authority and Planning Authority/Planning Coordinator, plus shared Transmission Operator duties. [e4]

## Open items

- Deeper pass: the delegation agreement between NERC and Texas RE and how enforcement against Texas entities works in practice; the saved sources only give the generic Regional Entity definition.
- Deeper pass: specific NERC standards that bind ERCOT participants (the report cites PRC-024-2 and cold weather revisions only).
- Texas RE is called "Texas Regional Entity" in some places in the report; the full formal name should be confirmed.
