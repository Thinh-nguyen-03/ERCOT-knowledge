---
id: weatherization
name: Weatherization Standards
aliases: [weatherization, winterization, weather emergency preparedness, Section 25.55, 25.55, declaration of preparedness]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: winter-storm-uri
    type: related
    note: The FERC-NERC Uri report said it appears there was no meaningful follow-up when entities missed the December 1 winter preparation deadline. [e9]
  - to: puct
    type: regulates
    note: 16 TAC 25.55 is the PUCT rule, and it makes a violation a Class A violation. [e1][e6]
  - to: ercot
    type: operates
    note: SB 3 directs ERCOT to inspect generation assets and report violations to the PUCT, and the rule requires inspection of every resource at least once every three years. [e11][e5]
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
---

## Definition

Weatherization standards are the PUCT's weather emergency preparedness rule, 16 TAC 25.55, which applies to ERCOT and to generation entities and transmission service providers in the ERCOT power region. [e1] Under it, a generation entity must complete winter preparation measures for each resource by December 1 each year and summer measures by June 1. [e2][e3]

## How it works

Each generation entity must submit a declaration of winter weather preparedness between November 1 and December 1, and a declaration of summer weather preparedness between May 1 and June 1. [e4][e13] Every resource interconnected to the ERCOT power region must be inspected at least once every three years, and SB 3 has ERCOT, as the independent organization, inspect generation assets and report violations to the commission. [e5][e11]

A violation is a Class A violation and may carry a penalty up to $1,000,000 per violation per day. [e6] If a resource has a repeated or major weather-related forced interruption of service, ERCOT notifies the entity and staff, and the entity must contract a qualified professional engineer to assess its preparation measures, plans, procedures and operations. [e7]

## ERCOT context

The rule's statutory backdrop: SB 3 (87th Legislature) added a provision directing the commission by rule to require generators in the ERCOT region to prepare their assets for weather emergencies, with the ERCOT independent organization inspecting for compliance and reporting violations. [e10][e11] The FERC-NERC Uri report describes the earlier approach: ERCOT started a winter weatherization spot check program for the 2011/2012 winter after the February 2011 cold event, and the report said it appears there is no meaningful follow-up when entities fail to finish winter preparations by the December 1 deadline. [e12][e9]

The reliability standard rule links to this one: the rule defines weatherization effectiveness as the assumed percentage reduction in weather-related unplanned outages for generation and storage resources in the model, due to compliance with 25.55. [e8]

## Key facts

- Winter measures must be complete by December 1 each year; summer measures by June 1. [e2][e3]
- Declarations of winter preparedness are due between November 1 and December 1; summer declarations between May 1 and June 1. [e4][e13]
- ERCOT inspects each resource at least once every three years. [e5]
- A violation is a Class A violation, with a penalty up to $1,000,000 per violation per day. [e6]
- A repeated or major weather-related forced interruption requires an independent engineer assessment. [e7]

## Say it like this

Texas now has a PUCT rule that makes every generator prepare for each season, declare it, be inspected at least every three years, and face penalties of up to $1 million a day. [e2][e5][e6] After a repeated or major weather-related forced interruption, ERCOT notifies the unit, which must contract with a qualified professional engineer to assess its preparation. [e7]

## Common confusion

Weatherization is a compliance duty with penalties, not a paid service. Firm fuel supply (FFSS) is a separate service (see the ffss topic), and the two should not be mixed up. [e6] The rule also covers transmission service providers, not only generators. [e1]

## Questions

### What does a generator have to do each year under 25.55?

Complete season-specific preparation measures by December 1 (winter) and June 1 (summer), submit a declaration of preparedness, and be available for inspection. [e2][e3][e4][e5]

### How often does ERCOT inspect resources?

At least once every three years for every resource interconnected to the ERCOT power region. [e5]

### What happens after a major weather-related outage at a unit?

ERCOT notifies the entity and PUCT staff, and the entity must contract with a qualified professional engineer to assess its measures, plans, procedures and operations. [e7]

## Open items

- Deeper pass: the specific winter and summer measures (insulation, freeze protection, wind-chill and temperature design levels based on ERCOT's historical weather study), the notarized attestation, and the TSP-side requirements in 25.55(f) were not quoted in detail.
- SB 3 text on gas supply chain facilities (PURA 86.044 and 38.075) and critical natural gas designation was not summarized.
- Compliance results (how many resources failed or were penalized) were not found in the saved sources.
- The FERC-NERC finding on the number of ERCOT generating units without winterization plans was seen but not quoted because the source text is garbled by a footnote.
- The effective date shown on the rule text is 10/20/2022; later amendments, if any, were not checked.
