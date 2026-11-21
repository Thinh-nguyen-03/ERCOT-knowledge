---
id: resource-entity
name: Resource Entity
aliases: [Resource Entity, RE, resource owner, resource-owning Market Participant, Interconnecting Entity]
kind: entity
domain: structure
level: 1
depth: deep
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
links:
  - to: qse
    type: related
    note: A Resource Entity must designate a QSE, and can be designated a Virtual QSE by ERCOT to temporarily perform QSE responsibilities. [e15][e4]
  - to: resource-types
    type: composed-of
    note: The Resource types a Resource Entity may own or control are Generation Resources, ESRs, Load Resources and SOGs. [e1]
  - to: lse
    type: contrasts-with
    note: LSEs and Resource Entities can both be designated Virtual QSEs by ERCOT. [e4]
  - to: clr
    type: related
    note: A Load Resource is among the Resources a Resource Entity owns or controls. [e1]
  - to: dgr-sodg
    type: related
    note: A Settlement Only Generator is among the things a Resource Entity owns or controls, and distribution-connected generation above one MW must register. [e1][e14]
  - to: energy-storage-resource
    type: related
    note: An ESR is one of the Resource types a Resource Entity can own or control, and must meet ERCOT's conditions before Initial Energization and commercial operations. [e1][e29]
  - to: large-load-interconnection
    type: related
    note: A Resource Entity that registers a Large Load as a PCLR must give ERCOT at least 120 days' written notice to de-register it early. [e22]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Resource Entity"
    quote: "An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity."
  - id: e2
    source: np-16
    locator: "Section 16.5(1)"
    quote: "A Resource Entity owns or controls a Generation Resource, Energy Storage Resource (ESR), Settlement Only Generator (SOG), or Load Resource connected to the ERCOT System. Each Resource Entity operating in the ERCOT Region must register with ERCOT."
  - id: e3
    source: np-16
    locator: "Section 16.5(1)"
    quote: "To become registered as a Resource Entity, an Entity must execute a Standard Form Market Participant Agreement (using the form in Section 22, Attachment A, Standard Form Market Participant Agreement), designate Resource Entity Authorized Representatives, contacts, and a User Security Administrator (USA) (per the Application for Registration as a Resource Entity), and demonstrate to ERCOT’s reasonable satisfaction that it is capable of performing the functions of a Resource Entity under these Protocols."
  - id: e4
    source: np-16
    locator: "Section 16.2.6.1(1)"
    quote: "A “Virtual QSE” is defined as an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE."
  - id: e5
    source: np-16
    locator: "Section 16.5(2)"
    quote: "Prior to commissioning, Resources Entities will regularly update the data necessary for modeling."
  - id: e6
    source: np-16
    locator: "Section 16.2.6.3(2)"
    quote: "If an Emergency QSE that is a Resource Entity fails to meet at least one of the requirements listed above within the allotted time, ERCOT may allow the Resource Entity additional time, as determined by ERCOT staff, to meet the requirements."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Resource"
    quote: "The term is used to refer to an Energy Storage Resource (ESR), a Generation Resource, or a Load Resource. The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG) or an Emergency Response Service (ERS) Resource."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Qualified Scheduling Entity (QSE)"
    quote: "A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT."
  - id: e9
    source: np-16
    locator: "Section 16.2.6.1(3)"
    quote: "If ERCOT has given Notice of an LSE’s or Resource Entity’s QSE’s termination or suspension, that LSE or Resource Entity will be designated as a Virtual QSE for up to two Bank Business Days, during which time it must either: (a) Designate and begin operations with a new QSE; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, and operate as an Emergency QSE as described below. As provided in paragraph (2) of Section 16.2.5, Suspended or Terminated Qualified Scheduling Entity – Notification to LSEs and Resource Entities Represented, this option does not apply to an LSE or Resource Entity represented by a terminated or suspended QSE that is the same Entity as the terminated or suspended QSE."
  - id: e10
    source: np-16
    locator: "Section 16.5(1), Resource Registration data"
    quote: "The Resource Entity shall provide Resource Registration data pursuant to Planning Guide Section 6.8.2, Resource Registration Process, for each Resource or SOG through ERCOT registration, except for an Unregistered Distributed Generator (UDG)."
  - id: e11
    source: np-16
    locator: "Section 16.5(1), aggregations and storage SOGs"
    quote: "A Resource Entity may submit a proposal to register the aggregation of generators, with the exception of Intermittent Renewable Resources (IRRs) pursuant to paragraph (13) of Section 3.10.7.2, Modeling of Resources and Transmission Loads, as an Aggregate Generation Resource (AGR) which ERCOT may grant at its sole discretion. A Resource Entity may submit a proposal to register a SOG consisting of an Energy Storage System (ESS) or a combination of ESS and non-ESS generation. The Resource Entity must identify all components of the SOG as part of the Resource Registration process."
  - id: e12
    source: np-16
    locator: "Section 16.5(3), ERCOT review of proposed Generation Resource, ESR or SOG"
    quote: "(3) Once ERCOT has received a new or amended Standard Generation Interconnection Agreement (SGIA) or a letter from a duly authorized official from the Municipally Owned Utility (MOU) or Electric Cooperative (EC) and has determined that the proposed Generation Resource, ESR, or SOG meets the requirements of Planning Guide Section 6.9, Addition of Proposed Generation to the Planning Models, ERCOT shall review the description of the proposed Generation Resource, ESR, or SOG in Exhibit “C” (or similar exhibit) to the SGIA and the data submitted pursuant to Planning Guide Section 6.8.2 to assess whether the Generation Resource, ESR, or SOG, as proposed, would violate any operational standards established in the Protocols, Planning Guide, Nodal Operating Guides, and Other Binding Documents. ERCOT must provide its determination to the Transmission Service Provider (TSP) and the owner of the proposed Generation Resource, ESR, or SOG within 90 days of the date the Generation Resource, ESR, or SOG meets the conditions for review. Notwithstanding the foregoing, this determination shall not preclude ERCOT from subsequently determining that the Generation Resource, ESR, or SOG violates any operational standards established in the Protocols, Planning Guide, Nodal Operating Guides, and Other Binding Documents or from taking any appropriate action based on that determination."
  - id: e13
    source: np-16
    locator: "Section 16.5(5), conditions barring Initial Synchronization"
    quote: "(5) An Interconnecting Entity (IE) shall not proceed to Initial Synchronization of a Generation Resource, ESR, Settlement Only Transmission Generator (SOTG), or Settlement Only Transmission Self-Generator (SOTSG) in the event of any of the following conditions: (a) Pursuant to paragraph (3) above, ERCOT has reasonably determined that the Generation Resource, ESR, SOTG, or SOTSG may violate operational standards established in the Protocols, Planning Guide, Nodal Operating Guides, and Other Binding Documents, and the Resource Entity has not yet demonstrated to ERCOT’s satisfaction that the Generation Resource, ESR, SOTG, or SOTSG can comply with these standards; or (b) The requirements of Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, if applicable, have not been completed for the Generation Resource, ESR, SOTG, or SOTSG."
  - id: e14
    source: np-16
    locator: "Section 16.5(6), DG registration threshold"
    quote: "(6) DG with an installed capacity greater than one MW, the DG registration threshold, which exports energy into a Distribution System, must register with ERCOT."
  - id: e15
    source: np-16
    locator: "Section 16.5.1.1(1), Designation of a QSE"
    quote: "(1) Each Resource Entity applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the Resource Entity. Each applicant shall acknowledge that it bears sole responsibility for selecting and maintaining a QSE as its representative. The applicant shall include a written statement from the designated QSE acknowledging that the QSE accepts responsibility for the applicant’s transactions pursuant to these Protocols. For the Resource Entity that owns or operates a Resource, the Resource Entity’s QSE designation must be submitted to ERCOT no later than 45 days prior to the Network Operations Model change date, as described in Section 3.10.1, Time Line for Network Operations Model Changes, for the Resource."
  - id: e16
    source: np-16
    locator: "Section 16.5.1.1(2)"
    quote: "(2) If a Resource Entity fails to maintain a QSE as its representative, the Resource Entity may be designated as an Emergency QSE as provided in Section 16.2.6.1, Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity."
  - id: e17
    source: np-16
    locator: "Section 16.5.3(1)-(2), Changing QSE Designation"
    quote: "(1) A Resource Entity may change its designation of QSE with written notice to ERCOT, no more than once in any consecutive three days. (2) If a Resource Entity’s representation by a QSE will terminate or the Resource Entity intends to be represented by a different QSE, the Resource Entity shall provide the name of the newly designated QSE to ERCOT along with a written statement from the newly designated QSE acknowledging the QSE’s agreement to accept responsibility for the Resource Entity’s transactions under these Protocols. For the Resource Entity that owns or operates a Resource, the Resource Entity’s QSE designation must be submitted to ERCOT no later than 45 days before the effective date of the change, unless otherwise approved by ERCOT, before the Resource Entity will be evaluated for compliance with the requirements of paragraph (3) below."
  - id: e18
    source: np-16
    locator: "Section 16.5.3(3)(a)-(b), Resources in the Network Operations Model"
    quote: "(3) For Resources required by these Protocols to be in the Network Operations Model, the following apply: (a) The designated QSE shall install all telemetry required of these Protocols for the requesting Resource Entity and schedule point-to-point data verification with ERCOT. (b) The designated QSE shall submit telemetry data descriptions to ERCOT to meet ERCOT’s normal model update process."
  - id: e19
    source: np-16
    locator: "Section 16.5.2.3(1), approval of a Resource Entity application"
    quote: "(1) ERCOT may reject a Resource Entity application within ten Business Days after the application has been deemed complete in accordance with this Section. If ERCOT does not reject the Resource Entity application within ten Business Days after the application is deemed complete then the application is deemed approved."
  - id: e20
    source: np-16
    locator: "Section 16.5.2(3), Load Resource in a NOIE service territory"
    quote: "(3) If the Resource Entity intends to own or control a Load Resource located within a Non-Opt-In Entity’s (NOIE’s) service territory, such applicant must designate the NOIE’s QSE, or an alternate QSE authorized by the NOIE. If an alternate QSE is designated, then such QSE representing that Load Resource must first obtain written permission from the NOIE prior to offering any services in the NOIE’s service territory. The alternate QSE shall submit the NOIE’s written permission to ERCOT at the time of designation."
  - id: e21
    source: np-16
    locator: "Section 16.5.4(2), Switchable Generation Resources"
    quote: "(2) A Resource Entity that has a Switchable Generation Resource (SWGR) shall submit a report to ERCOT in writing indicating whether or not it has any contractual requirement in a non-ERCOT Control Area for each season as defined in Section 3.2.6.4, Total Capacity Estimates, which may cause the identified capacity to not be available to the ERCOT System for the subsequent ten years."
  - id: e22
    source: np-16
    locator: "Section 16.5.5(2), PCLR de-registration"
    quote: "(2) A Resource Entity that desires to de-register a Large Load as a PCLR prior to its end date shall provide ERCOT no less than 120 days’ written notice. Upon de-registration, the Large Load shall be limited to the maximum Low Power Consumption (LPC) amounts identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan (LCP) until new interconnection studies have been performed according to applicable ERCOT Protocols and Guides."
  - id: e23
    source: pg-06
    locator: "Planning Guide Section 6.8.2(2)-(3), Resource Registration Process"
    quote: "(2) Upon receipt of the Resource Registration data, ERCOT shall review the completeness and accuracy of the data submission. ERCOT shall provide notice of acceptance and/or deficiencies to the Resource Entity. (3) ERCOT shall provide notice to the Resource Entity if the Resource Registration data is accepted, which is not the same as an approved Network Operations Model Change Request (NOMCR). The acceptance of the Resource Registration data only means that the registered data moves to the next step of being converted to a NOMCR. After acceptance and/or approval, the data is still subject to various and continuous validation processes."
  - id: e24
    source: pg-06
    locator: "Planning Guide Section 6.8.2(5)-(6)"
    quote: "(5) Upon acceptance of the Resource Registration data, ERCOT shall provide the Resource Entity with the model ready date on which the Resource Registration data will be implemented in production. Although a model ready date has been provided, subsequent data corrections may be required as a result of validation processes. (6) If a Resource Entity desires that the submitted Resource Registration data become effective earlier than the schedule established in Protocol Section 3.10.1, Time Line for Network Operations Model Changes, it may submit a request for interim update as described in the Resource Registration Guide."
  - id: e25
    source: pg-06
    locator: "Planning Guide Section 6.8.2(9), updates to Resource Registration data"
    quote: "(9) The Resource Entity must submit updated Resource Registration data containing changes made for the reasons below for a Generation Resource, ESR, SOG, or Load Resource: (a) Within ten Business Days of ERCOT approval of a Net Dependable Capability test to reflect the results of the test; (b) Within ten Business Days of ERCOT approval of a reactive capability test to reflect the results of the test; (c) Within ten Business Days of a request by ERCOT to check or update specific Resource Registration data; and (d) Within ten Business Days of a known change to any Resource Registration data."
  - id: e26
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.2.1(1)(a)-(b), applicability"
    quote: "(1) The requirements in Section 5, Generator Interconnection or Modification, apply to the following: (a) Any Entity proposing to interconnect any generator with an aggregate nameplate capacity of one MW or greater, including but not limited to any Generation Resource or Energy Storage Resource (ESR), to the ERCOT System; (b) Any Entity proposing to interconnect a Settlement Only Generator (SOG) to the ERCOT System; or"
  - id: e27
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.2.1(3), large and small generators"
    quote: "(3) For the purposes of determining the appropriate requirements in Section 5, a generator is considered a “large generator” if it currently has or is proposed to have an aggregate nameplate capacity of ten MW or greater. A generator is considered a “small generator” if it currently has or is proposed to have an aggregate nameplate capacity of less than ten MW."
  - id: e28
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.2.2(1), Initiation of GIM"
    quote: "(1) Any Entity subject to paragraph (1) of Section 5.2.1, Applicability, must initiate a Generator Interconnection or Modification (GIM) by submitting a completed request and providing all requested information and documentation through the online Resource Integration and Ongoing Operations (RIOO) system and paying the Generation Interconnection Fee described in the ERCOT Fee Schedule in the ERCOT Protocols."
  - id: e29
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.5(1), Generator Commissioning"
    quote: "(1) For each interconnecting Generation Resource or Energy Storage Resource (ESR), each Interconnecting Entity (IE) shall meet the conditions established by ERCOT before proceeding to Initial Energization, Initial Synchronization, and commercial operations. These conditions may require proof of meeting applicable ERCOT requirements, which may include, but are not limited to, reactive capability, voltage ride-through standards, dynamic model template submission, Automatic Voltage Regulator (AVR), Primary Frequency Response, Power System Stabilizer (PSS), Subsynchronous Resonance (SSR) models, and telemetry."
  - id: e30
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.5(3), 300-day commissioning window"
    quote: "(3) Within 300 days of receiving ERCOT’s approval for Initial Synchronization above 20 MVA of a new or repowered Generation Resource or ESR, a Resource Entity shall ensure the Resource meets the conditions established by ERCOT for commercial operations and shall submit a request to ERCOT to commission the Resource. (a) In the event a Generation Resource or ESR will be unable to complete all necessary construction and required testing to commence commercial operations and connect reliably to the ERCOT System within the 300 days, the Generation Resource or ESR may request a good cause exception with sufficient detail, and shall notify ERCOT prior to the planned commercial operation date and provide ERCOT with an updated commercial operation date that the Generation Resource or ESR can reasonably expect to commence operations in a reliable manner."
  - id: e31
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.5(2), ESI ID before Initial Energization"
    quote: "(2) Before ERCOT approves Initial Energization for a project that will consume Load other than Wholesale Storage Load (WSL) and that is not behind a Non-Opt-In Entity (NOIE) tie meter: (a) The Resource Entity must request an Electric Service Identifier(s) (ESI ID(s)) from the Distribution Service Provider(s) (DSP(s)) that will be serving the Load at the Resource site and provide the ESI ID(s) to ERCOT, as described in paragraph (2) of Protocol Section 10.3.2, ERCOT-Polled Settlement Meters; and (b) These ESI ID(s) must be established in the ERCOT Settlement system in a state that allows for the Load to be properly settled to the appropriate Qualified Scheduling Entity (QSE)."
  - id: e32
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.5(5)"
    quote: "(5) No later than 30 days following the Resource Commissioning Date, the Resource Entity shall submit updates to the resource dynamic planning and operations models through the online Resource Integration and Ongoing Operations (RIOO) system based on “as-built” data and provide a plant verification report as required by paragraph (5)(b) of Section 6.2."
---

## Definition

A Resource Entity is an Entity that owns or controls a Generation Resource, an Energy Storage Resource, a Settlement Only Generator or a Load Resource and is registered with ERCOT as a Resource Entity. [e1]

## How it works

**Registering as a Resource Entity.** Every Resource Entity operating in the ERCOT Region must register with ERCOT. [e2] To register it must execute the Standard Form Market Participant Agreement, name its Authorized Representatives, contacts and a User Security Administrator, and show ERCOT it can perform the functions of a Resource Entity under the Protocols. [e3] ERCOT may reject an application within ten Business Days after it is deemed complete; if it does not, the application is deemed approved. [e19] The Resource Entity also provides Resource Registration data under Planning Guide Section 6.8.2 for each Resource or SOG, except for an Unregistered Distributed Generator. [e10] A Resource Entity may propose to register an aggregation of generators as an Aggregate Generation Resource, which ERCOT may grant at its sole discretion and which excludes Intermittent Renewable Resources; it may also propose a SOG made up of an energy storage system or a mix of storage and non-storage generation. [e11] Distribution-connected generation with installed capacity greater than one MW that exports energy into a Distribution System must register with ERCOT. [e14]

**Resource Registration data.** On receipt of registration data ERCOT reviews completeness and accuracy and notifies the Resource Entity of acceptance or deficiencies; acceptance is not an approved Network Operations Model Change Request but only means the data moves to the next step of being converted into one, and the data stays subject to continuous validation. [e23] After acceptance ERCOT gives a model ready date, and a Resource Entity wanting earlier effect than the Protocol Section 3.10.1 timeline may request an interim update. [e24] A Resource Entity must resubmit updated registration data within ten Business Days of an approved Net Dependable Capability or reactive capability test, of an ERCOT request, or of a known change to any registration data. [e25] Before commissioning, Resource Entities regularly update the data necessary for modeling. [e5]

**Interconnection and commissioning.** Planning Guide Section 5 applies to any Entity proposing to interconnect a generator of one MW or greater, including any Generation Resource or ESR, and to any Entity proposing to interconnect a SOG. [e26] A generator is "large" if it has or is proposed to have aggregate nameplate capacity of ten MW or greater and "small" below that; the Guide adds exceptions for modifications and for Self-Limiting Facilities. [e27] An Entity initiates a Generator Interconnection or Modification through the RIOO system and pays the Generation Interconnection Fee. [e28] Once ERCOT has the SGIA (or an MOU/EC letter) and determines the project meets Planning Guide Section 6.9, ERCOT reviews the proposed Resource against operational standards and must give its determination to the TSP and owner within 90 days of the date the conditions for review are met, although that determination does not preclude later findings of violation. [e12] An Interconnecting Entity may not proceed to Initial Synchronization if ERCOT has reasonably determined the Resource may violate operating standards and the Resource Entity has not demonstrated compliance, or if a required Quarterly Stability Assessment has not been completed. [e13] For each interconnecting Generation Resource or ESR, the entity must meet ERCOT's conditions before Initial Energization, Initial Synchronization and commercial operations, which may include proof of reactive capability, voltage ride-through, dynamic models, AVR, Primary Frequency Response, PSS, SSR models and telemetry. [e29] A project that will consume Load other than Wholesale Storage Load and is not behind a NOIE tie meter needs ESI IDs established in settlement before Initial Energization. [e31] Within 300 days of ERCOT's approval for Initial Synchronization above 20 MVA of a new or repowered Generation Resource or ESR, the Resource Entity must show it meets commercial-operations conditions and request commissioning, though a good cause exception may be requested. [e30] Within 30 days after the Resource Commissioning Date it submits as-built model updates and a plant verification report. [e32]

**QSE representation.** A Resource Entity is the owner/controller role. A QSE is qualified to communicate with ERCOT for Resource Entities and to settle payments and charges with ERCOT. [e8] Each Resource Entity applicant must designate a QSE and, for a Resource Entity that owns or operates a Resource, the designation must be submitted to ERCOT no later than 45 days before the Network Operations Model change date for the Resource. [e15] A Resource Entity that wants to change QSE may do so by written notice no more than once in any consecutive three days; for an owner or operator of a Resource the designation must reach ERCOT at least 45 days before the effective date unless ERCOT approves otherwise. [e17] For Resources required to be in the Network Operations Model the designated QSE must install the required telemetry and schedule point-to-point data verification. [e18] A Resource Entity that intends to own or control a Load Resource in a NOIE's service territory must designate the NOIE's QSE or an alternate QSE authorized by the NOIE, with the NOIE's written permission. [e20]

**When the QSE goes away.** If ERCOT gives notice of a Resource Entity's QSE's termination or suspension, the Resource Entity is designated a Virtual QSE for up to two Bank Business Days, during which it must designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE, except that the Emergency QSE option does not apply to a Resource Entity that is itself the terminated or suspended QSE. [e9][e4] A Resource Entity that fails to maintain a QSE as its representative may be designated an Emergency QSE as provided in Section 16.2.6.1. [e16] If an Emergency QSE that is a Resource Entity cannot meet the requirements in time, ERCOT may give it more time. [e6]

**Switchable Generation Resources.** A Resource Entity with a Switchable Generation Resource must report in writing whether any contractual requirement in a non-ERCOT Control Area may make capacity unavailable to ERCOT for the subsequent ten years. [e21]

## ERCOT context

The word "Resource" used alone in the Protocols covers ESRs, Generation Resources and Load Resources, but not Settlement Only Generators or ERS Resources, even though a Resource Entity can own a SOG. [e7][e1] So the "Resource Entity" label is wider than the "Resource" label.

A Resource Entity that registers a Large Load as a Provisional Controllable Load Resource and wants to de-register it before its end date must give ERCOT at least 120 days' written notice, after which the load is limited to the maximum Low Power Consumption amounts in the Batch Zero Interconnection Study and Load Commissioning Plan until new studies are performed. [e22]

## Key facts

- Owns or controls a Generation Resource, ESR, SOG or Load Resource. [e1]
- Must register with ERCOT, with a Standard Form Market Participant Agreement. [e2][e3]
- Planning Guide Section 5 applies from one MW; "large" generator means ten MW or more. [e26][e27]
- QSE designation for a Resource must reach ERCOT 45 days before the Network Operations Model change date. [e15]
- ERCOT decision on a proposed Resource: within 90 days of the date the conditions for review are met. [e12]
- Commissioning request within 300 days of Initial Synchronization approval above 20 MVA (good cause exception available). [e30]
- Is designated a Virtual QSE for up to two Bank Business Days if ERCOT gives notice of its QSE's termination or suspension (the Emergency QSE option does not apply if it is itself the terminated or suspended QSE). [e9]

## Say it like this

(Guidance) A Resource Entity is the registered owner or controller of the plants, batteries or controllable loads. It registers with ERCOT, takes each Resource through interconnection and commissioning, and relies on a QSE to communicate with ERCOT and settle charges. [e8]

## Common confusion

(Guidance) A Resource Entity is the Entity that owns or controls Resources; "Resource" on its own means an ESR, Generation Resource or Load Resource. [e1][e7] A Resource Entity is also not a QSE, although the Virtual and Emergency QSE rules can make it act as one. [e4][e9] Registration with ERCOT as a Resource Entity is not the same as having an approved Network Operations Model Change Request. [e23]

## Questions

### What happens when a Resource Entity's QSE terminates?

The Resource Entity is designated a Virtual QSE for up to two Bank Business Days, during which it must designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE, except that the Emergency QSE option does not apply to a Resource Entity that is itself the terminated or suspended QSE. [e9][e4] If it ends up as an Emergency QSE and cannot meet the requirements in time, ERCOT may allow additional time. [e6]

### Why isn't an SOG a "Resource" if the Resource Entity owns it?

The Protocols use "Resource" alone to mean ESR, Generation Resource or Load Resource and exclude SOGs and ERS Resources, but the Resource Entity definition names SOGs among what it owns or controls. [e7][e1]

### Why does a QSE change for a Resource take so much longer than for an LSE?

For an owner or operator of a Resource the new QSE designation must reach ERCOT at least 45 days before the effective date unless ERCOT approves otherwise, and the designated QSE must install telemetry and schedule point-to-point verification for Resources in the Network Operations Model. [e17][e18]

### What if the Resource Entity's own commissioning slips past 300 days?

The Resource may request a good cause exception with sufficient detail, and must notify ERCOT before the planned commercial operation date with an updated date. [e30]

### Does ERCOT's acceptance of Resource Registration data mean the Resource is in the model?

No. Acceptance is not an approved Network Operations Model Change Request; it only means the data moves on to be converted into one, and it stays subject to validation. [e23]

## Scenarios

### A battery developer's QSE gives notice that it will stop representing the project in 45 days. What does the Resource Entity do?

- The Resource Entity's designation of a new QSE for a Resource must reach ERCOT at least 45 days before the effective date unless ERCOT approves otherwise. [e17]
- The Resource Entity must designate a new QSE or satisfy creditworthiness requirements and operate as an Emergency QSE, [e9] and the new QSE installs telemetry and schedules data verification. [e18]

## Open items

- Resolved 2026-11-21: Resource Registration (Planning Guide 6.8.2), interconnection applicability, commissioning timelines and QSE representation/change rules are now covered.
- Not covered: the Interconnection study procedures in Planning Guide 5.3-5.4, SGIA content, and the Security Screening and Full Interconnection Study steps.
- Planning Guide 6.9 (addition of proposed generation to planning models) is only referenced; the PGRR127 text in the saved copy is a pending box and was not used.
- NPRR995 is pending and would add the Settlement Only Energy Storage System to the Resource Entity definition; not covered here.
