---
id: qse
name: QSE (Qualified Scheduling Entity)
aliases: [QSE, Qualified Scheduling Entity, Virtual QSE, Emergency QSE]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-18
links:
  - to: lse
    type: related
    note: Every LSE must designate a QSE to perform QSE functions on its behalf. [e4]
  - to: resource-entity
    type: related
    note: Resource Entities are also represented by a QSE, and the QSE definition names them alongside LSEs. [e1]
  - to: rep
    type: related
    note: ERCOT must approve the LSE's QSE designation before a Competitive Retailer (which includes REPs) enrolls customer ESI IDs. [e5][e13]
  - to: ercot
    type: related
    note: ERCOT qualifies QSEs and settles payments and charges with them. [e1]
  - to: ruc-make-whole
    type: related
    note: RUC make-whole costs are first allocated to capacity-short QSEs. [e9]
  - to: retailer-defaults-2021
    type: related
    note: See the case topic for retailer default events.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Qualified Scheduling Entity (QSE)"
    quote: "A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT."
  - id: e2
    source: puct-25-5
    locator: "Section 25.5, definition of Qualified scheduling entity"
    quote: "to submit balanced schedules and ancillary services bids and settle payments with ERCOT."
  - id: e3
    source: np-16
    locator: "Section 16.2.1(1)(k)"
    quote: "Be financially responsible for payment of Settlement charges for those Entities it represents under these Protocols;"
  - id: e4
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e5
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e6
    source: np-16
    locator: "Section 16.2.1(3)"
    quote: "(3) A QSE must be able to demonstrate to ERCOT’s reasonable satisfaction that it does not pose an Unreasonable Financial Risk. Unreasonable Financial Risk as used in Section 16, Registration and Qualification of Market Participants, is a risk of financial default posed to ERCOT or its Market Participants by participation of an Entity or its Principals in the ERCOT market."
  - id: e7
    source: np-16
    locator: "Section 16.2.6.1(1)"
    quote: "A “Virtual QSE” is defined as an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE."
  - id: e8
    source: np-16
    locator: "Section 16.2.6.1(3)"
    quote: "If ERCOT has given Notice of an LSE’s or Resource Entity’s QSE’s termination or suspension, that LSE or Resource Entity will be designated as a Virtual QSE for up to two Bank Business Days, during which time it must either: (a) Designate and begin operations with a new QSE; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, and operate as an Emergency QSE as described below."
  - id: e9
    source: imm-som-2025
    locator: "RUC make-whole cost allocation discussion"
    quote: "ERCOT first allocates make-whole payment costs to Qualified Scheduling Entities (QSEs) that do not provide enough capacity to cover their real-time obligations and are therefore capacity short."
  - id: e10
    source: np-02
    locator: "Section 2.1, definition of Counter-Party"
    quote: "A single Entity that is a QSE and/or a CRR Account Holder. A Counter-Party includes all registrations as a QSE, all subordinate QSEs, and all CRR Account Holders by the same Entity."
  - id: e11
    source: imm-som-2025
    locator: "QSE Operation Planning"
    quote: "The Current Operating Plan (COP) is the mechanism QSEs use to communicate the expected status of their resources to ERCOT."
  - id: e12
    source: np-16
    locator: "Section 16.2.1(1)(n)"
    quote: "Demonstrate to ERCOT’s reasonable satisfaction that the Entity can maintain a 24-hour, seven-day-per-week control or operations center with qualified personnel for the purposes of communicating with ERCOT relating to Day-Ahead and Operating Day exchange of market and operational obligations. This requirement applies to QSEs that are WAN Participants."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e14
    source: np-16
    locator: "Section 16.2.6.1(3)(b)"
    quote: "this option does not apply to an LSE or Resource Entity represented by a terminated or suspended QSE that is the same Entity as the terminated or suspended QSE."
---

## Definition

A QSE is a Market Participant that ERCOT has qualified to communicate with ERCOT on behalf of Resource Entities and Load Serving Entities and to settle payments and charges with ERCOT. [e1] The PUCT's rule describes the same role as submitting balanced schedules and ancillary services bids and settling payments with ERCOT. [e2]

## How it works

Resource Entities and LSEs communicate with ERCOT and settle charges through a QSE. [e1] An LSE applicant must designate the QSE that will perform QSE functions on its behalf. [e4] ERCOT must approve that designation before a Competitive Retailer enrolls customer ESI IDs, or before a NOIE or ELSE registers a wholesale point of delivery. [e5]

One qualification requirement is that the entity be financially responsible for Settlement charges for the entities it represents. [e3] A QSE must also be able to demonstrate to ERCOT's reasonable satisfaction that it does not pose an "Unreasonable Financial Risk", which the Protocols define as a risk of financial default posed to ERCOT or its Market Participants. [e6] Operationally, QSEs that are WAN Participants must show they can maintain a 24-hour, seven-day-per-week control or operations center for Day-Ahead and Operating Day communication with ERCOT. [e12]

The Protocols also define a Counter-Party as a single Entity that is a QSE and/or a CRR Account Holder, including all of that Entity's QSE registrations, subordinate QSEs and CRR Account Holder registrations. [e10]

If ERCOT has given notice of the termination or suspension of the QSE that represents an LSE or Resource Entity, that entity is designated a Virtual QSE for up to two Bank Business Days. In that window it must designate and start operating with a new QSE, or meet QSE creditworthiness requirements and operate as an Emergency QSE, though the Emergency QSE option does not apply to an entity represented by a terminated or suspended QSE that is the same Entity as that QSE. [e7][e8][e14]

## ERCOT context

The IMM reports that RUC make-whole costs are allocated first to QSEs that are capacity short against their real-time obligations. [e9] QSEs also communicate resource status to ERCOT through the Current Operating Plan, which is the mechanism QSEs use to communicate the expected status of their resources to ERCOT. [e11]

## Key facts

- QSE qualification is done by ERCOT under Section 16 of the Protocols. [e1]
- A QSE is financially responsible for Settlement charges of the entities it represents. [e3]
- Each LSE applicant designates its QSE, and ERCOT approval of the designation is a precondition to enrolling customers (CRs) or registering a wholesale delivery point (NOIEs, ELSEs). [e4][e5]
- After ERCOT gives notice that a represented entity's QSE is terminated or suspended, the entity becomes a Virtual QSE for up to two Bank Business Days. [e8]
- "Unreasonable Financial Risk" is a defined qualification test. [e6]

## Say it like this

(Guidance) A QSE is the qualified middleman between ERCOT and the generators and retailers it represents: it submits schedules and ancillary service bids and settles payments with ERCOT. [e2] Because a QSE must be financially responsible for the Settlement charges of the entities it represents [e3], ERCOT also tests whether it poses an Unreasonable Financial Risk. [e6]

## Common confusion

(Guidance) A QSE is not a retailer and not a generator; it is the entity that interfaces with ERCOT for them. A REP is a Competitive Retailer, which is a kind of LSE [e13], and each LSE applicant must designate a QSE. [e4][e5] Do not confuse a QSE with a Counter-Party: a Counter-Party is a single Entity that is a QSE and/or a CRR Account Holder and includes all of that Entity's QSE registrations. [e10]

## Questions

### Why does every LSE need a QSE?

The Protocols require each LSE applicant to designate a QSE that will perform QSE functions for it. [e4] ERCOT must approve that designation before a CR enrolls customer ESI IDs. [e5] The QSE is the party qualified to communicate with ERCOT and settle charges with ERCOT. [e1]

### What happens if a QSE is suspended or terminated?

Once ERCOT has given notice of the termination or suspension, each affected LSE or Resource Entity is designated a Virtual QSE for up to two Bank Business Days. It must then designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE, except that the Emergency QSE option does not apply where the represented entity is the same Entity as the QSE. [e7][e8][e14]

### What is "Unreasonable Financial Risk"?

It is the risk of financial default posed to ERCOT or its Market Participants by an Entity or its Principals participating in the market, and a QSE must be able to demonstrate to ERCOT's reasonable satisfaction that it does not pose it. [e6]

## Open items

- Specific QSE credit limits, collateral formulas and Total Potential Exposure mechanics were not read in detail for this topic; see the credit-tpe topic.
- The exact number of QSEs registered in ERCOT was not found in the sources reviewed.
- Data Agent-Only QSE and ERS-only QSE variants (Section 16.2.1.2 and related) are not described here.
