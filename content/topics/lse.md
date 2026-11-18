---
id: lse
name: LSE (Load Serving Entity)
aliases: [LSE, Load Serving Entity, CR, Competitive Retailer, ELSE]
kind: entity
domain: structure
level: 1
lenses: [analyst, retail, portfolio]
as_of: 2026-11-18
links:
  - to: qse
    type: related
    note: Each LSE must designate a QSE to perform QSE functions for it. [e3]
  - to: rep
    type: is-a
    note: A REP is a Competitive Retailer, and Competitive Retailers are LSEs. [e1][e2]
  - to: noe
    type: related
    note: NOIEs that serve Load are LSEs. [e1]
  - to: esi-id
    type: related
    note: An ELSE assigns an ESI ID for each wholesale point of delivery. [e6]
  - to: retail-choice
    type: related
    note: LSEs include Competitive Retailers and NOIEs that serve Load. [e1]
  - to: tdsp
    type: contrasts-with
    note: TSPs and DSPs register with ERCOT as a TSP or DSP, which is separate from the LSE registration in Section 16.3. [e7][e4]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e3
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e4
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Load Serving Entities (LSEs) provide electric service to Customers and Wholesale Customers. LSEs include Non-Opt-In Entities (NOIEs) that serve Load, Competitive Retailers (CRs) (which includes Retail Electric Providers (REPs)), and External Load Serving Entities (ELSEs). Each LSE must register with ERCOT."
  - id: e5
    source: np-16
    locator: "Section 16.3(2)"
    quote: "All CRs must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, prior to commencing operations with ERCOT."
  - id: e6
    source: np-16
    locator: "Section 16.3(5)"
    quote: "An ELSE shall assign an Electric Service Identifier (ESI ID) for each wholesale point of delivery as specified in these Protocols."
  - id: e7
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT."
  - id: e8
    source: np-16
    locator: "Section 16.3.1(1)(c)"
    quote: "Be capable of purchasing capacity and reserves, or other Ancillary Services, as may be required by ERCOT, or other Independent Organizations, to provide adequate electricity to all the applicant’s Customers."
  - id: e9
    source: np-16
    locator: "Section 16.3.1.1(2)"
    quote: "If an LSE fails to maintain a QSE as its representative, the LSE may be designated as an Emergency QSE as provided in Section 16.2.6.1, Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity."
  - id: e11
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e10
    source: np-16
    locator: "Section 16.2.6.1(5)"
    quote: "If the LSE fails to cure the QSE Affiliation Breach within the cure period set forth in the Standard Form Market Participant Agreement, and the LSE serves Load, ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s Electronic Service Identifiers (ESI IDs) pursuant to Section 15.1.3, Transition Process."
---

## Definition

An LSE is an Entity that sells energy to Customers or Wholesale Customers and has registered as an LSE with ERCOT. [e1] LSEs include Competitive Retailers (which includes REPs), NOIEs that serve Load, and ELSEs. [e1]

## How it works

Every LSE must register with ERCOT. [e4] Registration under Section 16.3 covers three groups: NOIEs that serve Load, Competitive Retailers (including REPs), and External Load Serving Entities. [e4] An applicant must be capable of purchasing capacity and reserves or other Ancillary Services required by ERCOT to provide adequate electricity to all its Customers. [e8]

An LSE does not interface with ERCOT alone: it must designate a QSE to perform QSE functions on its behalf. [e3] All CRs must also complete Retail Market Testing before commencing operations with ERCOT. [e5]

An ELSE assigns an ESI ID for each wholesale point of delivery. [e6]

## ERCOT context

"Competitive Retailer" is itself a defined term: a REP, or an MOU or EC that offers Customer Choice and sells at retail. [e2] So the LSE label covers Competitive Retailers (REPs, and MOUs or ECs that offer Customer Choice), NOIEs that serve Load, and ELSEs. [e1][e2]

If an LSE loses its QSE and does not cure the QSE Affiliation Breach, and it serves Load, ERCOT initiates a Mass Transition of the LSE's ESI IDs. [e10] An LSE without a QSE may be designated an Emergency QSE. [e9]

## Key facts

- LSEs include CRs (which includes REPs), NOIEs that serve Load, and ELSEs. [e1]
- Each LSE must register with ERCOT. [e4]
- All CRs must complete Retail Market Testing before commencing operations with ERCOT. [e5]
- TSPs and DSPs register with ERCOT as a TSP or DSP, under Section 16.4 rather than the LSE registration in Section 16.3. [e7][e4]
- Failure to cure a QSE Affiliation Breach by an LSE serving Load leads to a Mass Transition of its ESI IDs. [e10]

## Say it like this

(Guidance) "LSE" is the wholesale-market label for whoever sells energy to end customers or wholesale customers: retailers, non-opt-in utilities and external load serving entities. It has to register with ERCOT and be represented by a QSE.

## Common confusion

(Guidance) LSE is broader than REP. A REP is one kind of Competitive Retailer, and Competitive Retailers are one kind of LSE. [e1][e2] TSPs and DSPs register as such with ERCOT under Section 16.4, and Section 16.3 lists NOIEs, CRs and ELSEs as the LSE types. [e7][e4]

## Questions

### What kinds of entities are LSEs?

Competitive Retailers (including REPs), NOIEs that serve Load, and External Load Serving Entities. [e1][e4]

### What does an LSE need before it can enroll customers?

It must register with ERCOT, designate a QSE, and have ERCOT approve that designation before a CR enrolls Customer ESI IDs. [e4][e3][e11] A CR must also complete Retail Market Testing. [e5]

## Open items

- How an LSE's load is represented in settlement (load zones, profiling) was not covered here.
- The definition of External Load Serving Entity (ELSE) was not looked up in np-02 for this topic beyond its use in Section 16.
