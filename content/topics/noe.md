---
id: noe
name: "NOIE (Non-Opt-In Entity: Munis & Co-ops)"
aliases: [NOIE, NOE, Non-Opt-In Entity, MOU, EC, muni, co-op, municipally owned utility, electric cooperative]
kind: entity
domain: structure
level: 2
lenses: [analyst, congestion, retail]
as_of: 2026-11-18
links:
  - to: lse
    type: part-of
    note: NOIEs that serve Load are LSEs. [e4]
  - to: retail-choice
    type: contrasts-with
    note: NOIEs are the MOUs and ECs that do not offer Customer Choice. [e1][e5]
  - to: tdsp
    type: related
    note: MOUs and ECs operating as a TSP or DSP in the ERCOT Region must register as a TSP or DSP. [e14]
  - to: crr
    type: related
    note: NOIEs have special CRR products and allocations. [e9][e10]
  - to: pcrr
    type: related
    note: The IMM says ERCOT allocates PCRRs to NOIEs, and that parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs. [e10]
  - to: load-zone
    type: related
    note: Protocols let a NOIE or group of NOIEs establish a NOIE Load Zone. [e8]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE)"
    quote: "An EC or MOU that does not offer Customer Choice."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Municipally Owned Utility (MOU)"
    quote: "A utility owned, operated, and controlled by a nonprofit corporation, the directors of which are appointed by one or more municipalities, or a utility owned, operated, or controlled by a municipality."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e4
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Load Serving Entities (LSEs) provide electric service to Customers and Wholesale Customers. LSEs include Non-Opt-In Entities (NOIEs) that serve Load, Competitive Retailers (CRs) (which includes Retail Electric Providers (REPs)), and External Load Serving Entities (ELSEs). Each LSE must register with ERCOT."
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.102(a)"
    quote: "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice on and after January 1, 2002."
  - id: e6
    source: np-16
    locator: "Section 16.6(1)-(2)"
    quote: "Each Municipally Owned Utility (MOU) and Electric Cooperative (EC) shall register with ERCOT and sign the Agreements that apply to the functions it performs in the ERCOT Region, regardless of whether planning to be a Non-Opt-In Entity (NOIE) or a Competitive Retailer (CR)."
  - id: e7
    source: np-16
    locator: "Section 16.6(2)-(3)"
    quote: "If an MOU or EC decides to register an affiliate as a CR, it must notify ERCOT of its intentions six months prior to opting in."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE) Load Zone"
    quote: "A Load Zone established by a NOIE or a group of NOIEs using a one-time NOIE election."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Point-to-Point (PTP) Obligation with Links to an Option"
    quote: "A type of CRR that entitles a Non-Opt-In Entity’s (NOIE’s) PTP Obligation bought in the DAM to be reflective of the NOIE’s PTP Option."
  - id: e10
    source: imm-som-2025
    locator: "CRR discussion of PCRRs"
    quote: "In addition to auctioned CRRs, ERCOT allocates a subset known as Pre-Assigned Congestion Revenue Rights, or PCRRs, to Non-Opt-In Entities (NOIEs) based on generation ownership or contractual arrangements that predate retail competition. Parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs, reflecting their legacy transmission access rights."
  - id: e11
    source: np-16
    locator: "Section 16.6(3)"
    quote: "Each MOU and EC shall assign an Electric Service Identifier (ESI ID) to each NOIE wholesale point of delivery as specified in these Protocols. The ESI IDs must be assigned to a Load Serving Entity (LSE)."
  - id: e12
    source: pura-39
    locator: "PURA Sec. 39.105(b)"
    quote: "A person or retail electric utility may not provide, furnish, or make available electric service at retail within the certificated service area of an electric cooperative that has not adopted customer choice or a municipally owned utility that has not adopted customer choice."
  - id: e13
    source: np-16
    locator: "Section 16.2.3(1)(c)"
    quote: "If applicable, a QSE offering services in a Non-Opt-In Entity (NOIE) service territory must obtain written authorization from the NOIE, and submit such authorization to ERCOT; and"
  - id: e14
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT."
  - id: e15
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e16
    source: puct-25-5
    locator: "Section 25.5, definition of Transmission and distribution utility (TDU)"
    quote: "but does not include a municipally owned utility or an electric cooperative. The TDU may be a single utility or may be separate transmission and distribution utilities."
---

## Definition

A NOIE is an Electric Cooperative (EC) or Municipally Owned Utility (MOU) that does not offer Customer Choice. [e1] An MOU is a utility owned, operated and controlled by a nonprofit corporation whose directors are appointed by one or more municipalities, or a utility owned, operated or controlled by a municipality. [e2]

## How it works

Customer choice applies to every Texas retail customer except customers of cooperatives and municipally owned utilities that have not opted for it. [e5] PURA also bars anyone else from providing retail electric service in the certificated area of a co-op or muni that has not adopted customer choice. [e12] An MOU or EC that does offer Customer Choice and sells at retail is a Competitive Retailer. [e3]

Each MOU and EC must register with ERCOT and sign the agreements for the functions it performs, whether it plans to be a NOIE or a Competitive Retailer. [e6] If it registers an affiliate as a CR, it must tell ERCOT six months before opting in. [e7]

Each MOU and EC assigns an ESI ID to each NOIE wholesale point of delivery, and those ESI IDs must be assigned to an LSE. [e11] NOIEs that serve Load are LSEs, so they register with ERCOT as LSEs [e4], and each LSE applicant must designate a QSE. [e15]

## ERCOT context

The Protocols carry NOIE-specific features. A NOIE or group of NOIEs can establish a NOIE Load Zone through a one-time election. [e8] A QSE offering services in a NOIE service territory must get written authorization from the NOIE and submit it to ERCOT. [e13] There is a CRR type, PTP Obligation with Links to an Option, defined around a NOIE's PTP Obligation and PTP Option. [e9] The IMM notes that ERCOT allocates Pre-Assigned CRRs to NOIEs based on generation ownership or arrangements that predate retail competition. [e10]

## Key facts

- NOIE = EC or MOU that does not offer Customer Choice. [e1]
- Customer choice since January 1, 2002 excludes customers of co-ops and munis that have not opted in. [e5]
- An MOU or EC registering an affiliate as a CR must notify ERCOT six months before opting in. [e7]
- NOIE wholesale delivery points get ESI IDs assigned to an LSE. [e11]
- PCRRs are allocated to NOIEs (IMM description, 2025 report). [e10]

## Say it like this

(Guidance) A NOIE is a municipal utility or co-op that has not opened its territory to retail competition, so it serves its own load rather than competing against REPs. In ERCOT it still registers, needs a QSE and settles as a load serving entity.

## Common confusion

(Guidance) "NOIE" and "opt-in" are not about whether the entity is in ERCOT; both opt-in and non-opt-in munis and co-ops can be inside the ERCOT Region and register with ERCOT. [e6] The difference is Customer Choice. [e1][e3] Also, the PUCT TDU definition excludes MOUs and ECs, so do not call a muni a TDU in PUCT terms. [e16]

## Questions

### What is the difference between a NOIE and a Competitive Retailer?

A NOIE is an EC or MOU that does not offer Customer Choice; a Competitive Retailer is a REP or an MOU or EC that does offer Customer Choice and sells at retail. [e1][e3]

### How does a muni or co-op move from NOIE to competitive?

Per the Protocols, it registers an affiliate as a CR and must notify ERCOT six months before opting in. [e7]

### Do NOIEs get anything different in the CRR market?

The IMM says NOIEs receive PCRRs allocated based on generation ownership or arrangements that predate retail competition, at a fraction of the auction value of comparable CRRs. [e10] The Protocols also define a CRR type linking a NOIE's PTP Obligation to its PTP Option. [e9]

## Open items

- The NOIE election process for load zones and PCRR allocation rules in Section 7 were not read in detail.
- How many NOIEs exist in ERCOT and their share of load was not found in the sources reviewed.
- Whether any specific MOUs or ECs have opted in recently was not sourced.
