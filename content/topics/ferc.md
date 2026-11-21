---
id: ferc
name: FERC
aliases: [FERC, Federal Energy Regulatory Commission, the Commission (federal)]
kind: entity
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: nerc
    type: regulates
    note: FERC certified NERC as the Electric Reliability Organization and approves its Reliability Standards. [e2]
  - to: puct
    type: contrasts-with
    note: The 2021 FERC-NERC staff report says ERCOT's wholesale energy market is not regulated by FERC because power exchanges occur wholly within the state. [e1]
  - to: ercot
    type: related
    note: The 2021 FERC-NERC staff report says ERCOT's wholesale energy market is not regulated by FERC, and that ERCOT served as a Reliability Coordinator in the 2021 event area. [e1][e4]
  - to: winter-storm-uri
    type: related
    note: FERC, NERC and Regional Entity staff jointly inquired into the February 2021 event. [e5]
  - to: texas-interconnection
    type: related
    note: The 2021 FERC-NERC staff report gives ERCOT's wholesale exchanges occurring wholly within the state as the reason FERC does not regulate its wholesale energy market. [e1]
  - to: nodal-protocols
    type: related
    note: The Protocols reference FERC rules among the things Administrative NPRRs may correct. [e6]
  - to: nerc
    type: regulates
    note: FERC approved over 100 NERC-proposed mandatory Reliability Standards and approved Regional Entities as regional compliance authorities. [e16]
  - to: imm
    type: related
    note: The 2021 inquiry scope excluded market manipulation and market design issues, which FERC's Office of Enforcement and others were examining. [e17]
  - to: energy-only-market
    type: related
    note: FERC's wholesale rate jurisdiction under the Federal Power Act covers interstate wholesale sales, which the 2021 report says ERCOT's market is not. [e12][e1]
evidence:
  - id: e1
    source: ferc-nerc-uri
    locator: "Appendix J, footnote 378"
    quote: "ERCOT manages a wholesale energy market which is not regulated by FERC, since the exchange of power between entities occur wholly within the state not through interstate commerce."
  - id: e2
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES"
    quote: "Pursuant to its EPAct authority, FERC certified the North American Electric Reliability Corporation (NERC) as the Electric Reliability Organization (ERO) responsible for establishing mandatory Reliability Standards, which then must be approved by FERC."
  - id: e3
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES"
    quote: "Congress granted FERC jurisdiction over electric grid reliability through the enactment of the Energy Policy Act of 2005 (EPAct), by adding a new section to the Federal Power Act, 16 U.S.C. § 215."
  - id: e4
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES"
    quote: "Electric Reliability Council of Texas, Inc. (ERCOT), Midcontinent Independent System Operator (MISO) and Southwest Power Pool (SPP) all served as RCs in the Event Area."
  - id: e5
    source: ferc-nerc-uri
    locator: "Section on scope of the inquiry"
    quote: >-
      Staff from FERC, NERC and all six of the Regional Entities quickly formed a team (the Team) of over 50 subject-matter experts and identified the scope of the inquiry to include: assessing what occurred during the Event, identifying commonalities with previous cold weather events and any lessons that should be incorporated in the development by NERC of cold weather Reliability Standards, and making recommendations to avoid similar events in the future.
  - id: e6
    source: np-21
    locator: "Section 21.1(4)(a), Administrative NPRRs"
    quote: >-
      This type of revision is referred to as an “Administrative NPRR” or “Administrative Changes” and shall consist of non-substantive corrections, such as typos (excluding grammatical changes), internal references (including table of contents), improper use of acronyms, and references to ERCOT Protocols, PUCT Substantive Rules, the Public Utility Regulatory Act (PURA), NERC regulations, Federal Energy Regulatory Commission (FERC) rules, etc.
  - id: e7
    source: pura-39
    locator: "PURA Sec. 39.151(c), Essential Organizations"
    quote: "The commission shall certify an independent organization or organizations to perform the functions prescribed by this section.  The commission shall apply the provisions of this section and Sections 39.1511, 39.1512, and 39.1515 so as to avoid conflict with a ruling of a federal regulatory body."
  - id: e8
    source: pura-39
    locator: "PURA Sec. 39.151(d), last sentence"
    quote: "The commission may not implement, by order or by rule, a requirement that is contrary to an applicable federal law or rule."
  - id: e9
    source: pura-39
    locator: "PURA Sec. 39.151(a)(1)-(2), Essential Organizations"
    quote: "A power region must establish one or more independent organizations to perform the following functions:(1)  ensure access to the transmission and distribution systems for all buyers and sellers of electricity on nondiscriminatory terms;(2)  ensure the reliability and adequacy of the regional electrical network;"
  - id: e10
    source: pura-39
    locator: "PURA Sec. 39.151(m)"
    quote: "A power region outside of ERCOT shall be deemed to have met the requirement to establish an independent organization to perform the transmission functions specified in Subsection (a) if the Federal Energy Regulatory Commission has approved a regional transmission organization for the region and found that the regional transmission organization meets the requirements of Subsection (a)."
  - id: e11
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (staff handbook), chapter on RTOs/ISOs"
    quote: "Currently, seven RTO/ISOs operate in the United States, listed below in order of the size of their all-time peak load.130 FERC regulates all RTOs/ISOs except ERCOT."
  - id: e12
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer, FERC Jurisdiction (electricity)"
    quote: "Under the Federal Power Act (FPA), FERC regulates the transmission of electric energy in interstate commerce and the sale of electric energy at wholesale in interstate commerce. The FPA requires that every public utility file with FERC all rates and charges for any transmission or sale subject to the jurisdiction of FERC."
  - id: e13
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer, introduction to electricity markets"
    quote: "Because the Federal Energy Regulatory Commission (FERC) has jurisdiction over wholesale electric rates and not retail electric rates, this document focuses on wholesale electricity markets, although it does address retail demand and other instances where retail markets strongly influence wholesale markets."
  - id: e14
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer, FERC Jurisdiction (electricity), Sections 205 and 206 of the FPA"
    quote: "Under Sections 205 and 206 of the FPA, 16 U.S.C. §§ 824d, 824e, FERC ensures that the rates and charges made, demanded, or received by any public utility for, or in connection with, the transmission or sale of electric energy subject to the jurisdiction of FERC, and all rules and regulations affecting, or pertaining to, such rates or charges are just and reasonable and not unduly preferential or unduly discriminatory."
  - id: e15
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer, introduction to electricity markets"
    quote: "For wholesale markets, FERC either authorizes jurisdictional entities to sell at market-based rates or at cost-based rates."
  - id: e16
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES, with footnote 377"
    quote: "FERC also promulgated regulations, approved Regional Entities to serve as regional compliance authorities, 377 and approved over 100 NERC-proposed mandatory Reliability Standards."
  - id: e17
    source: ferc-nerc-uri
    locator: "Section on scope of the inquiry"
    quote: >-
      The scope did not include potential market manipulation or market design issues, which were being examined by the Commission’s Office of Enforcement, among others, but rather would focus on reliability of the BES. As with other inquiries, the purpose was not to determine whether there may have been violations of applicable regulations, requirements, or standards subject to the Commission’s jurisdiction, but to make findings and recommendations with the aim of preventing future events.
  - id: e18
    source: ferc-nerc-uri
    locator: "Appendix J, Primer on Electric Markets and Reliable Operation of the BES, with footnote 378"
    quote: "ERCOT, MISO and SPP are also Independent System Operators, and MISO and SPP are Regional Transmission Organizations (RTOs). 378 In the United States, RTOs and ISOs (hereafter, we will use ISO/RTOs to refer to both) plan, operate and administer wholesale markets for electricity. These entities, which are regulated by FERC, manage markets for energy and related services, for specific regions of the country."
  - id: e19
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer, chapter on the February 2021 cold weather event"
    quote: "The inquiry’s final report was issued on November 16, 2021, and included 28 formal recommendations that seek to prevent a recurrence of the failures experienced during the February 2021 cold weather event."
  - id: e20
    source: ferc-nerc-uri
    locator: "Appendix J, footnote 377"
    quote: "The Regional Entities relevant to this event are Midwest Reliability Organization, ReliabilityFirst, SERC Reliability Corporation, and Texas Regional Entity."
---

## Definition

FERC is the Federal Energy Regulatory Commission. The federal reliability law gives it jurisdiction over electric grid reliability, but the 2021 FERC-NERC staff report says ERCOT's wholesale energy market is not regulated by FERC because power exchanges occur wholly within the state and not through interstate commerce. [e3][e1]

## How it works

Markets. A FERC staff handbook (tier 2) says that under the Federal Power Act FERC regulates the transmission of electric energy in interstate commerce and the sale of electric energy at wholesale in interstate commerce, and that every public utility must file its rates and charges for such transmission or sales with FERC. [e12] Under FPA sections 205 and 206 FERC ensures those rates, charges and related rules are just and reasonable and not unduly preferential or discriminatory. [e14] FERC has jurisdiction over wholesale electric rates and not retail electric rates, and for wholesale markets it authorizes jurisdictional entities to sell at market-based or cost-based rates. [e13][e15] The same handbook says FERC regulates all RTOs/ISOs except ERCOT. [e11] The 2021 FERC-NERC report's footnote gives the reason: ERCOT's wholesale energy market is not regulated by FERC because the exchange of power occurs wholly within the state and not through interstate commerce. [e1] The report's body text, by contrast, says ISOs and RTOs are regulated by FERC and that ERCOT is an Independent System Operator, with the ERCOT exception in the footnote. [e18]

Reliability. Congress granted FERC jurisdiction over electric grid reliability through the Energy Policy Act of 2005, which added a section to the Federal Power Act. [e3] Using that authority FERC certified NERC as the Electric Reliability Organization responsible for establishing mandatory Reliability Standards, which FERC must approve. [e2] FERC also approved Regional Entities as regional compliance authorities and approved over 100 NERC-proposed mandatory Reliability Standards. [e16] The Regional Entities relevant to the February 2021 event included the Texas Regional Entity. [e20]

State law reflects the federal layer. PURA requires each power region to have independent organizations that ensure nondiscriminatory access to the transmission and distribution systems and ensure the reliability and adequacy of the regional network. [e9] The PUCT certifies the independent organization and must apply those provisions so as to avoid conflict with a ruling of a federal regulatory body. [e7] The PUCT may not implement, by order or rule, a requirement contrary to an applicable federal law or rule. [e8] For power regions outside ERCOT, PURA treats the independent-organization requirement as met if FERC has approved a regional transmission organization that meets the statute's requirements. [e10]

## ERCOT context

The 2021 FERC-NERC staff report states that ERCOT's wholesale energy market is not regulated by FERC. [e1] The same report notes that ERCOT, MISO and SPP all served as Reliability Coordinators in the event area. [e4] FERC and NERC staff joined the Regional Entities in a joint inquiry into the February 2021 outages. [e5] The inquiry's scope excluded market manipulation and market design issues, which the report says FERC's Office of Enforcement and others were examining, and it did not aim to determine whether violations occurred. [e17] The inquiry's final report was issued on November 16, 2021, with 28 formal recommendations, per the FERC staff handbook. [e19] The Protocols also reference FERC rules, for example in the list of references that Administrative NPRRs may correct. [e6]

## Timeline

- 2005: Energy Policy Act of 2005 gives FERC jurisdiction over electric grid reliability, adding a section to the Federal Power Act. [e3]
- February 2021: cold weather event; FERC, NERC and Regional Entity staff form a team of over 50 experts to inquire. [e5]
- November 16, 2021: the inquiry's final report is issued. [e19]

## Key facts

- Per the 2021 FERC-NERC staff report, ERCOT's wholesale energy market is not regulated by FERC because exchanges occur wholly within the state. [e1]
- A FERC staff handbook says FERC regulates all RTOs/ISOs except ERCOT. [e11]
- FERC's reliability jurisdiction comes from the Energy Policy Act of 2005, which added a new section to the Federal Power Act (16 U.S.C. § 215). [e3]
- FERC certified NERC as the ERO and approves its mandatory Reliability Standards. [e2]
- The PUCT may not adopt a requirement contrary to applicable federal law or rule. [e8]

## Say it like this

(Guidance) FERC does not regulate ERCOT's wholesale energy market, because the power moves wholly within Texas; the PUCT does. [e1] FERC's reliability role runs through NERC, which FERC certified as the Electric Reliability Organization, and the Texas Regional Entity sits in that structure. [e2][e16][e20]

## Common confusion

(Guidance) "Not regulated by FERC" refers to the wholesale energy market. It does not mean ERCOT has no reliability role or is outside federal reliability standards: the report describes ERCOT as a Reliability Coordinator among the system operators in the event area, and FERC's reliability authority comes from a separate statute section. [e1][e4][e3] Also do not read the report's general statement that ISOs and RTOs are regulated by FERC as covering ERCOT; its footnote makes the ERCOT exception. [e18]

## Questions

### Does FERC regulate ERCOT's market?

No. The 2021 report says ERCOT's wholesale energy market is not regulated by FERC because exchanges of power occur wholly within the state. [e1]

### What is FERC's connection to NERC?

FERC certified NERC as the Electric Reliability Organization, and NERC's mandatory Reliability Standards must be approved by FERC. [e2]

### Why is FERC's authority over wholesale rates not a hook for ERCOT's market?

The Federal Power Act jurisdiction described in the FERC handbook covers transmission and wholesale sales in interstate commerce. [e12] The 2021 report says ERCOT's exchanges occur wholly within the state and not through interstate commerce. [e1]

### What if a PUCT rule conflicted with a federal rule?

PURA says the PUCT may not implement, by order or rule, a requirement contrary to an applicable federal law or rule, and must apply its independent-organization provisions so as to avoid conflict with a ruling of a federal regulatory body. [e8][e7]

### Why did FERC take part in the 2021 inquiry if it does not regulate ERCOT's market?

The inquiry focused on reliability of the bulk electric system, an area where FERC has jurisdiction under EPAct; it excluded market issues and was not meant to find violations. [e3][e17]

## Open items

- The saved sources do not say whether FERC enforces NERC Reliability Standards on ERCOT entities specifically; the 2021 report does not state it.
- FERC interconnection or transmission rules relating to DC ties are not covered; the FERC handbook notes SPP has two DC interties with ERCOT but does not describe FERC treatment.
- The FERC Energy Primer is a staff handbook (tier 2); its ERCOT statement is brief and is not a statute or order.
- Resolved 2026-11-21: PURA 39.151 was searched and supplies the state-law link to federal rulings (cited above).
