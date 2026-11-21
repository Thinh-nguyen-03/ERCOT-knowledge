---
id: resource-types
name: Resource Types (Generation, Load, ESR, SOG)
aliases: [Resource, Generation Resource, GR, Load Resource, ESR, SOG, Settlement Only Generator, DESR, TESR, DGR, TGR, SODG, SOTG, SOTSG, ALR, PCLR]
kind: concept
domain: structure
level: 1
depth: deep
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
links:
  - to: resource-entity
    type: related
    note: A Resource Entity owns or controls these Resources. [e7]
  - to: clr
    type: related
    note: A CLR is a Load Resource that can be dispatched up or down, and an ALR is a CLR built from aggregated sites. [e4][e19]
  - to: dgr-sodg
    type: related
    note: A DGR is a Generation Resource connected to the Distribution System above ten MW or above one MW if it chooses to register; an SODG is a distribution-connected generator of one MW or less that chooses to register, or above one and up to ten MW that does not register as a DGR. [e14][e16]
  - to: energy-storage-resource
    type: related
    note: ESRs are registered to provide energy and/or ancillary service, and are split into DESRs and TESRs by connection point. [e2][e12][e13]
  - to: sced
    type: used-in
    note: SOGs may not participate in SCED, RUC or make energy offers. [e8]
  - to: ancillary-services
    type: related
    note: Generation Resources, Load Resources and ESRs can provide ancillary service. [e2][e3][e9]
  - to: resource-node
    type: related
    note: A Resource Entity and ERCOT agree Resource Node parameters in a defined procedure before they enter the Network Operations Model. [e33]
  - to: large-load-interconnection
    type: related
    note: A PCLR is a CLR that must keep its registration and qualification until defined exit or de-registration criteria are met. [e21]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Resource"
    quote: "The term is used to refer to an Energy Storage Resource (ESR), a Generation Resource, or a Load Resource. The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG) or an Emergency Response Service (ERS) Resource."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Energy Storage Resource (ESR)"
    quote: "An Energy Storage System (ESS) registered with ERCOT for the purpose of providing energy and/or Ancillary Service to the ERCOT System."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Generation Resource"
    quote: "A generator capable of providing energy or Ancillary Service to the ERCOT System and is registered with ERCOT as a Generation Resource."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Load Resource"
    quote: "A Load capable of providing Ancillary Service to the ERCOT System and/or energy in the form of Demand response and registered with ERCOT as a Load Resource."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Controllable Load Resource (CLR)"
    quote: "A Load Resource capable of controllably reducing or increasing consumption under Dispatch control by ERCOT."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Generator (SOG)"
    quote: "A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Distribution Generation Resource (DGR)"
    quote: "A Generation Resource connected to the Distribution System that is either:"
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Distribution Generator (SODG)"
    quote: "A generator that is connected to the Distribution System with a rating of:"
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Resource Entity"
    quote: "An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity."
  - id: e10
    source: np-02
    locator: "Section 2.1, pending NPRR995 replacement of definition of Resource"
    quote: "The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG), Settlement Only Energy Storage System (SOESS), or an Emergency Response Service (ERS) Resource."
  - id: e11
    source: np-02
    locator: "Section 2.1, pending NPRR995 note after SOG definition"
    quote: "[NPRR995: Delete the above definition “Settlement Only Generator (SOG)” upon system implementation.]"
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Distribution Energy Storage Resource (DESR)"
    quote: "An Energy Storage Resource (ESR) connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Resource with ERCOT to participate in the ERCOT markets."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Transmission Energy Storage Resource (TESR)"
    quote: "An Energy Storage Resource (ESR) connected to the ERCOT transmission system that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Resource with ERCOT to participate in the ERCOT markets."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Distribution Generation Resource (DGR)"
    quote: "A Generation Resource connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets."
  - id: e15
    source: np-02
    locator: "Section 2.1, definition of Transmission Generation Resource (TGR)"
    quote: "A Generation Resource connected to the ERCOT transmission system that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets."
  - id: e16
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Distribution Generator (SODG)"
    quote: "A generator that is connected to the Distribution System with a rating of: (1) One MW or less that chooses to register as an SODG; or (2) Greater than one and up to ten MW that is capable of providing a net export to the ERCOT System and does not register as a Distribution Generation Resource (DGR)."
  - id: e17
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Transmission Generator (SOTG)"
    quote: "A generator that is connected to the ERCOT transmission system with a rating of ten MW or less and is registered with the Public Utility Commission of Texas (PUCT) as a power generation company. SOTGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and may be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads."
  - id: e18
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Transmission Self-Generator (SOTSG)"
    quote: "A generator that is connected to the ERCOT transmission system with a rating of one MW or more and is registered with the Public Utility Commission of Texas (PUCT) as a self-generator. SOTSGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.3, Modeling of Private Use Networks."
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Aggregate Load Resource (ALR)"
    quote: "A Controllable Load Resource (CLR) that is an aggregation of individual metered sites, each of which has less than ten MW of Demand response capability and all of which are located within a single Load Zone."
  - id: e20
    source: np-02
    locator: "Section 2.1, pending NPRR1188 note after ALR definition"
    quote: "[NPRR1188: Delete the above definition “Aggregate Load Resource (ALR)” upon system implementation.]"
  - id: e21
    source: np-02
    locator: "Section 2.1, definition of Provisional Controllable Load Resource (PCLR)"
    quote: "A Controllable Load Resource (CLR) that is required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met."
  - id: e22
    source: np-02
    locator: "Section 2.1, definition of Aggregate Generation Resource (AGR)"
    quote: "A Generation Resource that is an aggregation of generators, with the exception of Intermittent Renewable Resources (IRRs) pursuant to paragraph (13) of Section 3.10.7.2, Modeling of Resources and Transmission Loads, each of which is less than 20 MW in output, which share identical operational characteristics and are located behind the same Main Power Transformer (MPT)."
  - id: e23
    source: np-02
    locator: "Section 2.1, definition of Intermittent Renewable Resource (IRR)"
    quote: "A Generation Resource that can only produce energy from variable, uncontrollable Resources, such as wind, solar, or run-of-the-river hydroelectricity."
  - id: e24
    source: np-02
    locator: "Section 2.1, definition of Inverter-Based Resource (IBR)"
    quote: "A Resource that is connected to the ERCOT System either completely or partially through a power electronic converter interface."
  - id: e25
    source: np-02
    locator: "Section 2.1, definition of Switchable Generation Resource (SWGR)"
    quote: "A Generation Resource that can be connected to either the ERCOT Transmission Grid or a non-ERCOT Control Area."
  - id: e26
    source: np-02
    locator: "Section 2.1, definition of Quick Start Generation Resource (QSGR)"
    quote: "A Generation Resource that in its cold-temperature state can come On-Line within ten minutes of receiving ERCOT notice and has passed an ERCOT QSGR test that establishes an amount of capacity that can be deployed within a ten-minute period."
  - id: e27
    source: np-02
    locator: "Section 2.1, definition of Combined Cycle Generation Resource"
    quote: "A specified configuration of physical Generation Resources (gas and steam turbines), with a distinct set of operating parameters and physical constraints, in a Combined Cycle Train registered with ERCOT."
  - id: e28
    source: np-02
    locator: "Section 2.1, definition of Split Generation Resource"
    quote: "Where a Generation Resource has been split to function as two or more independent Generation Resources in accordance with Section 10.3.2.1, Generation Resource Meter Splitting, and Section 3.10.7.2, Modeling of Resources and Transmission Loads, each such functionality independent Generation Resource is a Split Generation Resource."
  - id: e29
    source: np-02
    locator: "Section 2.1, definition of Wholesale Storage Load (WSL)"
    quote: "Energy that is separately metered from all other Facilities to charge a technology that is capable of storing energy and releasing that energy at a later time to generate electric energy. WSL includes losses for the energy conversion process that are captured by the WSL EPS Meter."
  - id: e30
    source: np-02
    locator: "Section 2.1, pending NPRR1029 definition of DC-Coupled Resource"
    quote: "A type of Energy Storage Resource (ESR) in which an Energy Storage System (ESS) is combined with wind and/or solar generation in the same modeled generation station and interconnected at the same Point of Interconnection (POI), and where these technologies are interconnected within the site using direct current (DC) equipment. The combined technologies are then connected to the ERCOT System using the same direct current-to-alternating current (DC-to-AC) inverter(s). To be classified as a DC-Coupled Resource, the generator(s) and ESS(s) at a site must meet the following conditions:"
  - id: e31
    source: np-22o
    locator: "Section 22 Attachment O (March 1, 2024), 1 Background and Introduction"
    quote: "Qualification as a Load Resource is a prerequisite for the provision of Demand response in the Ancillary Services markets and Real-Time Energy Market. This attachment sets forth the detailed requirements for Aggregations of Loads (more than one single Load site) to qualify as Aggregate Load Resources (ALRs) and maintain such qualification, thus becoming eligible to provide Ancillary Services. The attachment is limited to ALR qualification for participation in Security-Constrained Economic Dispatch (SCED) and the provision of Non-Spinning Reserve (Non-Spin)."
  - id: e32
    source: np-22o
    locator: "Section 22 Attachment O (March 1, 2024), 2.B Premise-Level Interval Metering"
    quote: "Premises in an ALR are required to have 15-minute interval meter data, whether Electric Service Identifier (ESI ID) data from the competitive choice areas of ERCOT or revenue-quality meter data within a Non Opt-In Entity (NOIE) territory.[2] ERCOT will use this Premise-level interval meter data both as the foundation of the telemetry validation process and for event performance measurement and verification."
  - id: e33
    source: np-22r
    locator: "Section 22 Attachment R (April 1, 2026), Procedure to Incorporate a Resource Node, steps 4-8"
    quote: "4. The Resource Entity will have five Business Days to accept or reject the suggested Resource Node parameters. 5. If there are any disagreements with the Resource Node parameters, ERCOT and the Resource Entity shall work together to reach agreement. 6. If agreement cannot be reached by ERCOT and the Resource Entity, the Wholesale Market Subcommittee (WMS) or appropriate WMS working group shall help guide the decision. 7. Upon an agreement between ERCOT and the Resource Entity, the Resource Node parameters will be implemented in the Network Operations Model. 8. The normal timeline for this procedure shall not exceed 20 Business Days after the submission date of validated Resource Registration information that includes a detailed electrical one-line drawing."
---

## Definition

In the Protocols, a "Resource" means an Energy Storage Resource, a Generation Resource or a Load Resource. Used alone, the term does not include a Settlement Only Generator or an Emergency Response Service Resource. [e1]

## How it works

**The four base types.** The Protocols define each as follows. [e1]

- A Generation Resource is a generator capable of providing energy or ancillary service and registered as a Generation Resource. [e3]
- An ESR is an energy storage system registered to provide energy and/or ancillary service. [e2]
- A Load Resource is a load capable of providing ancillary service and/or energy as demand response, registered as a Load Resource. [e9] A Controllable Load Resource is one that can reduce or increase consumption under ERCOT dispatch control. [e4]
- A Settlement Only Generator is settled for exported energy only and may not participate in the ancillary services market, RUC, SCED or make energy offers. [e8]

Resource Entities own or control these types. [e7]

**Connection-point and size splits.** A Transmission Generation Resource is a Generation Resource connected to the ERCOT transmission system that is either greater than ten MW and not registered with the PUCT as a self-generator, or greater than one MW and chooses to register as a Generation Resource to participate in the ERCOT markets. [e15] A Distribution Generation Resource is the same test applied to a Generation Resource connected to the Distribution System. [e14] The Protocols apply the same two-limb test to storage: a Transmission Energy Storage Resource is an ESR on the transmission system, and a Distribution Energy Storage Resource is an ESR on the Distribution System, in each case either greater than ten MW and not a registered PUCT self-generator, or greater than one MW and choosing to register with ERCOT. [e13][e12]

**Settlement Only Generator sub-types.** A Settlement Only Distribution Generator is connected to the Distribution System with a rating of one MW or less that chooses to register as an SODG, or greater than one and up to ten MW that can provide a net export to ERCOT and does not register as a DGR. [e16] A Settlement Only Transmission Generator is connected to the ERCOT transmission system, rated ten MW or less and registered with the PUCT as a power generation company; [e17] a Settlement Only Transmission Self-Generator is connected to the transmission system, rated one MW or more and registered with the PUCT as a self-generator. [e18]

**Load Resource variants.** An Aggregate Load Resource is a Controllable Load Resource that aggregates individual metered sites, each with less than ten MW of Demand response capability, all within a single Load Zone. [e19] Qualification as a Load Resource is a prerequisite for providing Demand response in the Ancillary Services markets and Real-Time Energy Market; Attachment O, in its March 1, 2024 version, limits ALR qualification to participation in SCED and Non-Spin. [e31] Premises in an ALR need 15-minute interval meter data, which ERCOT uses for telemetry validation and event performance measurement. [e32] A Provisional Controllable Load Resource is a CLR that must keep its registration and qualification as a CLR until defined exit or de-registration criteria are met. [e21]

**Resource attributes and categories.** The Protocols layer attributes on top of the base types, for example: an Aggregate Generation Resource aggregates generators (other than IRRs) each under 20 MW with identical operational characteristics behind the same Main Power Transformer; [e22] an Intermittent Renewable Resource can only produce energy from variable, uncontrollable sources such as wind, solar or run-of-the-river hydro; [e23] an Inverter-Based Resource connects completely or partially through a power electronic converter; [e24] a Switchable Generation Resource can connect to either the ERCOT grid or a non-ERCOT Control Area; [e25] a Quick Start Generation Resource can come on-line within ten minutes from a cold-temperature state and has passed an ERCOT test; [e26] a Split Generation Resource is a Generation Resource split to function as two or more independent Generation Resources. [e28] A Combined Cycle Generation Resource is a specified configuration of gas and steam turbines in a registered Combined Cycle Train. [e27]

**Wholesale Storage Load.** Energy separately metered from all other Facilities to charge a technology that can store and later release energy is Wholesale Storage Load, including conversion losses captured by the WSL EPS meter. [e29]

**Resource Nodes.** For a new Generation Resource or ESR, the Resource Entity has five Business Days to accept or reject the Resource Node parameters ERCOT suggests, and the normal timeline for the procedure does not exceed 20 Business Days after submission of validated registration information with a one-line drawing (Attachment R, April 1, 2026 version). [e33]

## ERCOT context

Distribution-connected generation has its own split: a Distribution Generation Resource is a Generation Resource connected to the Distribution System, while a Settlement Only Distribution Generator is a generator connected to the Distribution System with a defined rating. [e5][e6] The size tests above are the dividing line; see the dgr-sodg topic.

**Pending changes (not in effect).** NPRR995 would, upon system implementation, add a Settlement Only Energy Storage System to the list excluded from the bare term "Resource" and delete the SOG definition, as the saved note states. [e10][e11] NPRR1188 would, upon system implementation, delete the Aggregate Load Resource definition, per the saved note. [e20] NPRR1029 would insert a "DC-Coupled Resource" definition; in the saved pending text it is a type of ESR combining an ESS with wind and/or solar behind the same inverter(s). [e30]

## Key facts

- "Resource" = ESR, Generation Resource or Load Resource; SOGs and ERS Resources are excluded. [e1]
- Generation Resources and ESRs can provide energy and/or ancillary service. [e3][e2]
- A CLR can be dispatched by ERCOT to reduce or increase consumption. [e4]
- SOGs are settlement-only and cannot make energy offers or join SCED. [e8]
- Size tests: ten MW (not a PUCT-registered self-generator) or one MW (if choosing to register) for TGR, DGR, TESR and DESR. [e15][e14][e13][e12]
- SODG and SOTG ceilings are ten MW; the SOTSG floor is one MW. [e16][e17][e18]
- An ALR aggregates sites under ten MW each within one Load Zone. [e19]

## Say it like this

(Guidance) ERCOT sorts market assets into Generation Resources, Load Resources and storage that are dispatched, and settlement-only generators that are just paid for exports. Which bucket you sit in decides what you can offer, and the one-MW and ten-MW thresholds decide which bucket small and distribution-connected units fall into.

## Common confusion

(Guidance) "Resource" in the Protocols is narrower than "any generator": a SOG is not a Resource. [e1] A battery can be a Resource (ESR) rather than a Generation Resource. [e2] A DGR and an SODG are both distribution-connected; the difference is the size band and whether the owner registers as a Resource. [e14][e16] An ALR is not a different market product; it is a CLR built from many small sites. [e19]

## Questions

### What is the difference between a Generation Resource and a SOG?

A Generation Resource can provide energy or ancillary service and is registered as such; a SOG is settled for exported energy only and cannot make energy offers or join SCED, RUC or the ancillary services market. [e3][e8]

### What makes a Load Resource "controllable"?

It can reduce or increase consumption under ERCOT's dispatch control. [e4]

### What if you connect an 8 MW generator to the distribution system?

Under the definitions it is not a DGR unless it chooses to register as a Generation Resource to participate in the ERCOT markets (greater than one MW); if it can export net to ERCOT and does not register as a DGR it is an SODG (greater than one and up to ten MW). [e14][e16]

### Why would an ESR be a TESR rather than a DESR?

The only difference in the definitions is the connection point: the TESR is connected to the ERCOT transmission system and the DESR to the Distribution System; the size tests are the same. [e13][e12]

### What if you want to aggregate many small loads to offer Non-Spin?

They can qualify as an Aggregate Load Resource if each site has less than ten MW of Demand response capability and all are in a single Load Zone, and Attachment O (March 1, 2024 version) limits ALR qualification to SCED participation and Non-Spin provision. [e19][e31]

## Open items

- Resolved 2026-11-21: DESR/TESR/TGR/DGR thresholds, SOG sub-types and ALR/PCLR definitions are now covered from Section 2.1.
- Pending: NPRR995 SOESS/SODESS/SOTESS definitions once implemented; the saved copy has the delete notes but the new definitions were not used.
- The saved Section 2.1 DC-Coupled Resource text is a pending NPRR1029 insertion; the ESS size conditions inside it were not quoted and its implementation status was not checked.
- NPRR1188's replacement text for ALRs (OBDRR046 refers to CLRs that are not ALRs) was not reviewed in detail.
- Self-generator carve-outs from PUCT rule 25.109 registration were not read.
