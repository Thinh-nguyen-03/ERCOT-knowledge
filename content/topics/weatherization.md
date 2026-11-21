---
id: weatherization
name: Weatherization Standards
aliases: [weatherization, winterization, weather emergency preparedness, Section 25.55, 25.55, declaration of preparedness]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: winter-storm-uri
    type: related
    note: The FERC-NERC Uri report said it appears there was no meaningful follow-up when entities missed the December 1 winter preparation deadline. [e9]
  - to: puct
    type: regulates
    note: 16 TAC 25.55 is the PUCT rule, and it makes a violation a Class A violation. [e1][e6]
  - to: ercot
    type: operates
    note: SB 3 directs the independent organization certified under PURA 39.151 for the ERCOT power region to inspect generation assets and report violations to the PUCT, and the rule requires inspection of every resource at least once every three years. [e11][e5]
  - to: ffss
    type: related
    note: FFSS is the paid fuel-readiness product; weatherization is the mandatory equipment-preparation duty.
  - to: reliability-standard
    type: used-in
    note: The reliability standard modeling assumes a weatherization effectiveness percentage tied to compliance with 25.55. [e8]
  - to: thermal-outages
    type: related
    note: Weather-related forced interruptions of service trigger an engineer assessment under the rule. [e7]
  - to: nerc
    type: related
    note: The FERC-NERC Uri report is the source for the earlier ERCOT winter spot check program. [e12]
  - to: winter-storm-jan-2026
    type: example-of
    note: ERCOT's January 2026 Winter Storm Fern materials cite the mandatory weatherization and inspection program and an ERCOT forced outage review of dispatchable, wind and solar outages. [e46][e49][e50]
  - to: natural-gas-price
    type: related
    note: Generators with natural gas as primary fuel must submit a declaration on coordination with connected pipeline operators with their summer preparedness submission. [e39]
  - to: weather-load
    type: related
    note: The rule's extreme-weather design levels come from ERCOT's historical weather study by weather zone. [e22][e36]
  - to: resource-entity
    type: related
    note: The rule applies to generation entities, which it defines as ERCOT-registered resource entities acting on behalf of generation or energy storage resources. [e14]
evidence:
  - id: e1
    source: puct-25-55
    locator: "16 TAC 25.55(a)"
    quote: "This section applies to the Electric Reliability Council of Texas, Inc. (ERCOT) and to generation entities and transmission service providers (TSPs) in the ERCOT power region."
  - id: e2
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)"
    quote: "Winter season preparations. By December 1 each year, a generation entity must complete the following winter weather emergency preparation measures for each resource under its control."
  - id: e3
    source: puct-25-55
    locator: "16 TAC 25.55(c)(2)"
    quote: "Summer season preparations. By June 1 each year, a generation entity must complete the following summer weather emergency preparation measures for each resource under its control."
  - id: e4
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(A)"
    quote: "No earlier than November 1 and no later than December 1 of each year, a generation entity must submit a declaration of winter weather preparedness for the upcoming winter season that:"
  - id: e13
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(B)"
    quote: "No earlier than May 1 and no later than June 1 of each year, a generation entity must submit a declaration of summer weather preparedness for the upcoming summer season that at a minimum:"
  - id: e5
    source: puct-25-55
    locator: "16 TAC 25.55(d)(1)"
    quote: "every resource interconnected to the ERCOT power region must be inspected at least once every three years."
  - id: e6
    source: puct-25-55
    locator: "16 TAC 25.55(d)(2)(D)"
    quote: "A violation of this section is a Class A violation under §25.8(b)(3)(A) of this title (relating to Classification System for Violations of Statutes, Rules, and Orders Applicable to Electric Service Providers) and may be subject to a penalty not to exceed $1,000,000 per violation per day."
  - id: e7
    source: puct-25-55
    locator: "16 TAC 25.55(e)"
    quote: "ERCOT must notify a generation entity and commission staff of the generation entity's repeated or major weather-related forced interruption of service. Upon notification from ERCOT, the generation entity must contract with a qualified professional engineer to assess its weather emergency preparation measures, plans, procedures, and operations."
  - id: e8
    source: puct-25-508
    locator: "16 TAC 25.508(a)(4)"
    quote: "Weatherization effectiveness -- the assumed percentage reduction in the amount of weatherrelated unplanned outages for generation resources and energy storage resources included in the model, due to compliance with the weatherization standards in §25.55 of this title (relating to Weather Emergency Preparedness)."
  - id: e9
    source: ferc-nerc-uri
    locator: "ERCOT winter weatherization spot check program and declarations"
    quote: "Given that GOs/GOPs can delay such critical preparations until well after the onset of cold weather, it appears that there is no meaningful follow-up process when entities fail to complete their winter preparations by the December 1 deadline."
  - id: e10
    source: sb3-87r
    locator: "PURA Sec. 35.0021(b), as added by SB 3"
    quote: "The commission by rule shall require each provider of electric generation service described by Subsection (a) to implement measures to prepare the provider's generation assets to provide adequate electric generation service during a weather emergency according to reliability standards adopted by the commission."
  - id: e11
    source: sb3-87r
    locator: "PURA Sec. 35.0021(c), as added by SB 3"
    quote: "The independent organization certified under Section 39.151 for the ERCOT power region shall: (1) inspect generation assets in the ERCOT power region for compliance with the reliability standards; (2) provide the owner of a generation asset with a reasonable period of time in which to remedy any violation the independent organization discovers in an inspection; and (3) report to the commission any violation."
  - id: e12
    source: ferc-nerc-uri
    locator: "ERCOT winter weatherization spot check program"
    quote: "ERCOT initiated a winter weatherization spot check program during the 2011/2012 winter season, following the February 2011 cold weather event."
  - id: e14
    source: puct-25-55
    locator: "16 TAC 25.55(b)(2), definition of Generation entity"
    quote: "Generation entity -- An ERCOT-registered resource entity acting on behalf of an ERCOTregistered generation resource or energy storage resource."
  - id: e15
    source: puct-25-55
    locator: "16 TAC 25.55(a)(1)"
    quote: "A generation resource with an ERCOT-approved notice of suspension of operations for the summer season or winter season is not required to comply with this section until the return to service date identified in its notice of change of generation resource designation required under the ERCOT protocols."
  - id: e16
    source: puct-25-55
    locator: "16 TAC 25.55(a)(2)"
    quote: "A new or repowered resource scheduled to begin commercial operations during the summer season or winter season or a transmission facility scheduled for initial energization during the summer season or winter season must meet the requirements of this section prior to either the commissioning date established in the ERCOT interconnection process for generation resources or initial energization for transmission facilities, as applicable."
  - id: e17
    source: puct-25-55
    locator: "16 TAC 25.55(b)(5), definition of Major weather-related forced interruption of service of a resource"
    quote: "Major weather-related forced interruption of service of a resource – (A) The failure of a resource to start, following one or more attempts, for 12 or more continuous hours as a result of a weather emergency; or (B) The loss of 50% or more of the capacity reflected in a resource’s seasonal net maximum sustainable rating for 12 or more continuous hours as a result of a weather emergency."
  - id: e18
    source: puct-25-55
    locator: "16 TAC 25.55(b)(7), definition of Repeated weather-related forced interruption of service"
    quote: "Repeated weather-related forced interruption of service -- Three or more of any combination of the following occurrences as a result of separate weather emergencies within any three-year period: (A) The failure of a resource to start; (B) The loss of 50% or more of the capacity reflected in a resource’s seasonal net maximum sustainable rating for 30 minutes or more; or (C) The loss or derate of 50% or more of a transmission facility’s rating."
  - id: e19
    source: puct-25-55
    locator: "16 TAC 25.55(b)(14), definition of Winter season"
    quote: "Winter season -- December 1 to February 28 of the following year."
  - id: e20
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)(A)(i)-(ii), winter measures"
    quote: "Implement weather emergency preparation measures that could reasonably be expected to ensure the sustained operation of all cold weather critical components during winter weather conditions. Where appropriate, such measures may be implemented using either personnel or automated systems. Such measures include, as appropriate for the resource: (i) Installation and maintenance of adequate wind breaks for resources susceptible to outages or derates caused by wind; (ii) Installation and maintenance of insulation and enclosures for all cold weather critical components;"
  - id: e21
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)(A)(vi), freeze protection"
    quote: "Maintenance of freeze protection equipment for all cold weather critical components, including fuel delivery systems controlled by the generation entity, and testing or verifying the functionality of freeze protection equipment prior to and on a monthly basis during the winter season; and"
  - id: e22
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)(B), winter design level"
    quote: "required by subparagraph (A) of this paragraph, that could reasonably be expected to ensure sustained operation of the resource at the 95th percentile minimum average 72-hour wind chill temperature reported in ERCOT’s historical weather study, required under subsection (i) of this section, for the weather zone in which the resource is located."
  - id: e23
    source: puct-25-55
    locator: "16 TAC 25.55(c)(2)(B), summer design level"
    quote: "Beginning in 2023, implement weather emergency preparation measures by June 1 each year, in addition to the weather emergency preparation measures required by subparagraph (A) of this paragraph, that could reasonably be expected to ensure sustained operation of the resource during the greater of the maximum ambient temperature at which the resource has experienced sustained operations or the 95th percentile maximum average 72-hour temperature reported in ERCOT’s historical weather study, required under subsection (i) of this section, for the weather zone in which the resource is located."
  - id: e24
    source: puct-25-55
    locator: "16 TAC 25.55(c)(2)(A)(v), summer measures"
    quote: "Maintenance of all hot weather critical components, including air flow or cooling systems, and verifying the functionality of all components prior to and on a monthly basis during the summer season; and"
  - id: e25
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(A)(v), attestation"
    quote: "Includes a notarized attestation sworn to by the generation entity’s highestranking representative, official, or officer with binding authority over the generation entity attesting to the completion of all applicable activities described in paragraph (1) of this subsection, and to the accuracy and veracity of the information described in subparagraph (A) of this paragraph."
  - id: e26
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(A)(iii)"
    quote: "Provides the minimum ambient temperature at which each resource has experienced sustained operations, as measured at the resource site or the weather station nearest to the resource site;"
  - id: e27
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(C)"
    quote: "A generation entity must submit the appropriate declaration of preparedness to ERCOT prior to returning a mothballed, outaged, or decommissioned resource to service during the winter or summer season."
  - id: e28
    source: puct-25-55
    locator: "16 TAC 25.55(c)(4)"
    quote: "No later than December 20 of each year, ERCOT must file with the commission a compliance report that addresses whether each generation entity has submitted the declaration of winter weather preparedness required by paragraph (3)(A) of this subsection for each resource under the generation entity’s control."
  - id: e29
    source: puct-25-55
    locator: "16 TAC 25.55(d)(1)"
    quote: "ERCOT must conduct inspections of resources and may prioritize inspections based on factors such as whether a resource is critical for electric grid reliability; the length of time since the resource was last inspected; has experienced a forced outage, forced derate, or failure to start related to weather emergency conditions; or has other vulnerabilities related to weather emergency conditions."
  - id: e30
    source: puct-25-55
    locator: "16 TAC 25.55(d)(1)(A)"
    quote: "ERCOT must provide each generation entity at least 72 hours’ written notice of an inspection unless otherwise agreed by the generation entity and ERCOT."
  - id: e31
    source: puct-25-55
    locator: "16 TAC 25.55(d)(2)(B)"
    quote: "If the generation entity has not complied with a requirement in subsection (c)(1) or (2) of this section, ERCOT must provide the generation entity a reasonable period to cure the identified deficiencies."
  - id: e32
    source: puct-25-55
    locator: "16 TAC 25.55(d)(2)(C)"
    quote: "ERCOT must report to commission staff any generation entity that does not remedy the deficiencies identified under subparagraph (A) of this paragraph within the cure period determined by ERCOT under subparagraph (B) of this paragraph."
  - id: e33
    source: puct-25-55
    locator: "16 TAC 25.55(e)"
    quote: "The qualified professional engineer must conduct a root cause analysis of the failure and develop a corrective action plan to address any weather-related causes of the failure. The generation entity must submit the qualified professional engineer’s assessment to the commission and ERCOT within 15 calendar days of receiving the assessment."
  - id: e34
    source: puct-25-55
    locator: "16 TAC 25.55(e)"
    quote: "The qualified professional engineer must not be an employee of the generation entity or its affiliate."
  - id: e35
    source: puct-25-55
    locator: "16 TAC 25.55(g)(1), TSP inspections"
    quote: "ERCOT must determine, in consultation with commission staff, the number, extent, and content of inspections, as well as develop a riskbased methodology for selecting at least ten percent of substations or switchyards providing transmission service to be inspected at least once every three years."
  - id: e36
    source: puct-25-55
    locator: "16 TAC 25.55(i), ERCOT historical weather study"
    quote: "ERCOT must study historical weather data across each weather zone classified in the ERCOT protocols. ERCOT must file with the commission a report summarizing the results of the study at least once every five years, beginning no later than November 1, 2026."
  - id: e37
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1), last sentence"
    quote: "If necessary to come into compliance, a generation entity must update its winter weather emergency preparation measures no later than one year after ERCOT files a historical weather study report under subsection (i) of this section."
  - id: e38
    source: puct-25-55
    locator: "16 TAC 25.55(f)(1)(A)(i), TSP winter measures"
    quote: "Confirmation of the operability of all systems and subsystems containing all cold weather critical components;"
  - id: e39
    source: np-03
    locator: "Section 3.21, Submission of Declarations of Natural Gas Pipeline Coordination, paragraph (1)"
    quote: "As part of its submission to ERCOT in connection with subsection (c)(3)(B) of P.U.C. SUBST. R. 25.55, Weather Emergency Preparedness, each Resource Entity representing one or more Generation Resources subject to P.U.C. SUBST. R. 25.55 that uses natural gas as its primary fuel shall submit to ERCOT the declaration in Section 22, Attachment K, Declaration of Natural Gas Pipeline Coordination, stating that the Resource Entity or its Qualified Scheduling Entity (QSE) made a documented effort to communicate with the operator of each natural gas pipeline directly connected to its Generation Resource to coordinate regarding potential impacts to the Generation Resource’s availability during the summer Peak Load Season of that year."
  - id: e40
    source: sb3-87r
    locator: "PURA Sec. 35.0021(a), as added by SB 3"
    quote: "This section applies only to a municipally owned utility, electric cooperative, power generation company, or exempt wholesale generator that sells electric energy at wholesale in the ERCOT power region."
  - id: e41
    source: sb3-87r
    locator: "PURA Sec. 35.0021(g), as added by SB 3"
    quote: "The commission shall impose an administrative penalty on an entity, including a municipally owned utility or an electric cooperative, that violates a rule adopted under this section and does not remedy that violation within a reasonable period of time."
  - id: e42
    source: sb3-87r
    locator: "PURA Sec. 38.075(a), as added by SB 3"
    quote: "The commission by rule shall require each electric cooperative, municipally owned utility, and transmission and distribution utility providing transmission service in the ERCOT power region to implement measures to prepare the cooperative's or utility's facilities to maintain service quality and reliability during a weather emergency according to standards adopted by the commission."
  - id: e43
    source: ercot-roadmap-2021-10
    locator: "ERCOT Roadmap to Improving Grid Reliability (October 15, 2021 update), item 5"
    quote: "Require all market participants who own or operate generation resources and/or transmission/distribution power lines to submit a letter signed by their CEO twice a year attesting that their companies have completed their weatherization preparations to protect the electric grid for the summer and winter respectively."
  - id: e44
    source: ercot-roadmap-2021-10
    locator: "ERCOT Roadmap to Improving Grid Reliability (October 15, 2021 update), spot-check item"
    quote: "Perform 30+ on-site power plant spot-checks to ensure they are following their weatherization plan in preparation for the hot Texas summer. We previously only performed these types of checks in advance of the winter season."
  - id: e45
    source: puct-25-53
    locator: "16 TAC 25.53(e)(1)(A), weather emergency annex"
    quote: "operational plans for responding to a cold or hot weather emergency, distinct from the weather preparations required under §25.55 of this title (relating to Weather Emergency Preparedness); and"
  - id: e46
    source: ercot-fern-post-event
    locator: "ERCOT, Winter Storm Fern - January 2026 (January 28, 2026), Winter Storm Preparation"
    quote: "Power plants and transmission facilities are required to be weatherized for extreme weather events. ERCOT conducts regular inspections and plans to complete at least 450 inspections during this winter season."
  - id: e47
    source: ercot-fern-outage-review
    locator: "ERCOT Winter Storm Fern Forced Outage Review (October 2026), Part II, After the inspection"
    quote: "Submit CPTSK progress reports by the 15th and last day of each month."
  - id: e48
    source: ercot-fern-outage-review
    locator: "ERCOT Winter Storm Fern Forced Outage Review (October 2026), Part II, After the inspection"
    quote: "Unremedied deficiencies extending beyond the cure period will be reported to the PUCT."
  - id: e49
    source: ercot-fern-outage-review
    locator: "ERCOT Winter Storm Fern Forced Outage Review (October 2026), Part I, Dispatchable Generation"
    quote: "Dispatchable Generation: common causes during Winter Storm Fern Control-path, combustion systems, air inlets, and coal-path issues drove the largest dispatchable impacts. Total Number of Outages 76 Total MWh Lost ~156,000 MWh"
  - id: e50
    source: ercot-fern-outage-review
    locator: "ERCOT Winter Storm Fern Forced Outage Review (October 2026), Part I, Wind and Solar Generation"
    quote: "Wind and Solar Generation: common causes during Winter Storm Fern Icing dominated renewable impacts, with faults and electrical issues also contributing. Total Number of Outages 107 Total MWh Lost ~610,000 MWh"
  - id: e51
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)(B), start"
    quote: "Beginning in 2023, implement weather emergency preparation measures by December 1 each year, in addition to the weather emergency preparation measures"
  - id: e52
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(B)(iii), summer declaration"
    quote: "Provides the maximum ambient temperature at which each resource has experienced sustained operations, as measured at the resource site or the weather station nearest to the resource site;"
  - id: e53
    source: puct-25-55
    locator: "16 TAC 25.55(c)(3)(B)(v), summer attestation"
    quote: "Includes a notarized attestation sworn to by the generation entity’s highestranking representative, official, or officer with binding authority over the generation entity attesting to the completion of all applicable activities described in paragraph (2) of this subsection, and to the accuracy and veracity of the information described in this subparagraph."
  - id: e54
    source: puct-25-55
    locator: "16 TAC 25.55 page footer, copy effective date"
    quote: "§25.55-1 effective 10/20/2022 (P 53401)"
---

## Definition

Weatherization standards are the PUCT's weather emergency preparedness rule, 16 TAC 25.55, which applies to ERCOT and to generation entities and transmission service providers in the ERCOT power region. [e1] Under it, a generation entity must complete winter preparation measures for each resource by December 1 each year and summer measures by June 1. [e2][e3]

## How it works

**Who and when it applies.** A generation entity is an ERCOT-registered resource entity acting for an ERCOT-registered generation or energy storage resource. [e14] A resource with an ERCOT-approved notice of suspension of operations for the summer or winter season is not required to comply until the return-to-service date in its notice of change of designation; a new or repowered resource, or a transmission facility energized for the first time, must meet the rule before its commissioning date or first energization. [e15][e16] The rule defines the winter season as December 1 to February 28 of the following year. [e19]

**What winter measures look like.** The entity must implement measures that could reasonably be expected to ensure sustained operation of all cold weather critical components, such as adequate wind breaks, insulation and enclosures, and freeze protection equipment tested or verified before and monthly during winter. [e20][e21] On top of that, beginning in 2023, resources must be prepared for the 95th percentile minimum average 72-hour wind chill temperature in ERCOT's historical weather study for their weather zone. [e51][e22] Summer measures include maintaining hot weather critical components and verifying them before and monthly during summer, plus preparedness for the greater of the maximum ambient temperature the resource has sustained operations at or the 95th percentile maximum average 72-hour temperature for its weather zone. [e24][e23]

**Declarations.** Each generation entity must submit a declaration of winter weather preparedness between November 1 and December 1, and a declaration of summer weather preparedness between May 1 and June 1. [e4][e13] Each declaration must identify the resources, give the ambient temperature at which each has experienced sustained operations (the minimum for the winter declaration, the maximum for the summer one), and include a notarized attestation by the entity's highest-ranking representative with binding authority. [e26][e52][e25][e53] A declaration is also needed before a mothballed, outaged or decommissioned resource returns to service during the winter or summer season. [e27] ERCOT files a compliance report with the commission by December 20 on winter declarations. [e28] For gas-fired resources, the summer declaration submission also brings a declaration of natural gas pipeline coordination under Protocol Section 3.21. [e39]

**Inspections and cure.** ERCOT must inspect every resource at least once every three years and may prioritize by criticality, time since last inspection, weather-related outages and other vulnerabilities. [e5][e29] ERCOT gives at least 72 hours' written notice unless otherwise agreed. [e30] If a resource is not in compliance, ERCOT must give a reasonable cure period, and it must report to commission staff any entity that does not cure in time. [e31][e32] A violation is a Class A violation that may carry a penalty up to $1,000,000 per violation per day. [e6]

**After a failure.** If a resource has a repeated or major weather-related forced interruption of service, ERCOT notifies the entity and staff, and the entity must contract a qualified professional engineer to assess its preparation measures, plans, procedures and operations. [e7] A major interruption is a failure to start for 12 or more continuous hours, or loss of 50% or more of the seasonal net maximum sustainable rating for 12 or more continuous hours, in a weather emergency; a repeated one is three or more qualifying occurrences from separate weather emergencies within three years. [e17][e18] The engineer must be independent of the entity and its affiliates, perform a root cause analysis and corrective action plan, and the entity must submit the assessment to the PUCT and ERCOT within 15 calendar days of receiving it. [e34][e33]

**Transmission providers.** TSPs have parallel duties, including confirming the operability of all systems and subsystems containing cold weather critical components, and ERCOT must select at least ten percent of substations or switchyards for inspection every three years. [e38][e35]

## ERCOT context

The rule's statutory backdrop: SB 3 (87th Legislature) added a provision directing the commission by rule to require generators in the ERCOT region to prepare their assets for weather emergencies, with the independent organization for the ERCOT power region inspecting for compliance and reporting violations. [e10][e11] The SB 3 provision applies to municipally owned utilities, electric cooperatives, power generation companies and exempt wholesale generators that sell at wholesale in ERCOT, and a parallel provision covers electric cooperatives, municipally owned utilities and transmission and distribution utilities providing transmission service. [e40][e42] The commission must impose an administrative penalty on an entity that violates the rule and does not remedy it within a reasonable time. [e41]

The FERC-NERC Uri report describes the earlier approach: ERCOT started a winter weatherization spot check program for the 2011/2012 winter after the February 2011 cold event, and the report said it appears there is no meaningful follow-up when entities fail to finish winter preparations by the December 1 deadline. [e12][e9] ERCOT's October 2021 roadmap proposed requiring a CEO-signed letter twice a year attesting to weatherization preparations and planned 30+ summer spot checks where it had previously checked only before winter. [e43][e44]

The reliability standard rule links to this one: the rule defines weatherization effectiveness as the assumed percentage reduction in weather-related unplanned outages for generation and storage resources in the model, due to compliance with 25.55. [e8] The PUCT's emergency operations plan rule keeps weather emergency response annexes distinct from the preparations required under 25.55. [e45]

Recent practice: ERCOT's January 2026 Winter Storm Fern materials say power plants and transmission facilities are required to be weatherized, and that ERCOT planned at least 450 inspections that winter. [e46] ERCOT's October 2026 Fern forced outage review lists 76 dispatchable outages (about 156,000 MWh lost) driven by control-path, combustion, air inlet and coal-path issues, and 107 wind and solar outages (about 610,000 MWh lost) dominated by icing. [e49][e50] The same ERCOT guidance says deficiencies tracked under a cure period task need progress reports on the 15th and last day of each month and that unremedied deficiencies beyond the cure period are reported to the PUCT. [e47][e48]

## Timeline

- 2011/2012 winter: ERCOT starts a winter weatherization spot check program after the February 2011 cold event. [e12]
- 2021: SB 3 adds PURA 35.0021 and 38.075 requiring weather emergency preparedness rules. [e10][e42]
- October 2021: ERCOT roadmap proposes CEO-signed attestation letters and summer spot checks. [e43][e44]
- Rule copy effective 10/20/2022 (the saved copy; later amendments not checked): design-level requirements apply beginning in 2023. [e54][e51][e23]
- November 1, 2026: ERCOT's first historical weather study report is due to the commission, then at least every five years; generation entities must update winter measures within a year of a filed study if necessary to comply. [e36][e37]
- Winter 2025-2026: ERCOT planned at least 450 inspections. [e46]

## Key facts

- Winter measures must be complete by December 1 each year; summer measures by June 1. [e2][e3]
- Declarations of winter preparedness are due between November 1 and December 1; summer declarations between May 1 and June 1; they carry a notarized attestation. [e4][e13][e25]
- ERCOT inspects each resource at least once every three years. [e5]
- A violation is a Class A violation and may be subject to a penalty not to exceed $1,000,000 per violation per day. [e6]
- A repeated or major weather-related forced interruption requires an independent engineer assessment, submitted within 15 calendar days of receipt. [e7][e33]
- Major interruption: failure to start for 12+ hours or loss of 50%+ of capacity for 12+ hours; repeated: three occurrences within three years. [e17][e18]

## Say it like this

Texas now has a PUCT rule that makes every generator prepare for each season, declare it under a notarized attestation, be inspected at least every three years, and may face penalties of up to $1 million per violation per day. [e2][e25][e5][e6] After a repeated or major weather-related forced interruption, ERCOT notifies the unit, which must contract with an independent qualified professional engineer to assess its preparation. [e7][e34]

## Common confusion

Weatherization is a compliance duty with penalties, not a paid service. Firm fuel supply (FFSS) is a separate service (see the ffss topic), and the two should not be mixed up. [e6] The rule also covers transmission service providers, not only generators. [e1] It is also separate from emergency operations plans, which cover response rather than preparation. [e45]

## Questions

### What does a generator have to do each year under 25.55?

Complete season-specific preparation measures by December 1 (winter) and June 1 (summer), submit a declaration of preparedness with a notarized attestation, and be available for inspection. [e2][e3][e4][e25][e5]

### How often does ERCOT inspect resources?

At least once every three years for every resource interconnected to the ERCOT power region. [e5]

### What happens after a major weather-related outage at a unit?

ERCOT notifies the entity and PUCT staff, and the entity must contract with a qualified professional engineer to assess its measures, plans, procedures and operations, then file the assessment within 15 calendar days of receiving it. [e7][e33]

### Why do the design temperatures come from an ERCOT study?

The rule ties the added winter and summer measures to percentile values in ERCOT's historical weather study for each weather zone, which ERCOT must file at least every five years starting no later than November 1, 2026. [e22][e23][e36]

### What if a resource fails an inspection?

ERCOT must give a reasonable cure period, then report to commission staff any entity that has not remedied the deficiencies, which can lead to an enforcement investigation and Class A penalties. [e31][e32][e6]

### Why does the rule treat a seasonal mothball differently?

A resource with an ERCOT-approved suspension notice does not have to comply until its return-to-service date, and it must file the appropriate declaration before returning to service. [e15][e27]

## Open items

- Resolved 2026-11-21: the winter and summer measures, design temperature levels, notarized attestation, TSP provisions and ERCOT inspection and cure process are now quoted.
- The ERCOT historical weather study due by November 1, 2026 and the resulting percentile values were not found in the saved sources.
- Compliance results (how many resources failed or were penalized, and ERCOT's December 20 and June 20 compliance reports) were not found.
- SB 3 text on gas supply chain facilities (PURA 86.044 and 38.075) and critical natural gas designation was not summarized.
- The FERC-NERC finding on the number of ERCOT generating units without winterization plans was seen but not quoted because the source text is garbled by a footnote.
- The effective date shown on the rule text is 10/20/2022; later amendments, if any, were not checked.
- The Fern inspection materials (450 inspections planned) give a plan, not a count completed.
