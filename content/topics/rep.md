---
id: rep
name: REP (Retail Electric Provider)
aliases: [REP, Retail Electric Provider, POLR, REP of record]
kind: entity
domain: structure
level: 1
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: lse
    type: is-a
    note: LSEs include Competitive Retailers, which includes REPs. [e13]
  - to: qse
    type: related
    note: A REP must have its QSE designation approved by ERCOT before enrolling customer ESI IDs. [e6]
  - to: retail-choice
    type: part-of
    note: REPs exist because Texas gave most retail customers a choice of provider from January 1, 2002. [e5]
  - to: tdsp
    type: contrasts-with
    note: After January 1, 2002 a transmission and distribution utility may not sell electricity except to buy for its own needs, and a REP may not own generation. [e2][e7]
  - to: esi-id
    type: related
    note: Each ESI ID has at most one REP of record at a time. [e8]
  - to: retailer-defaults-2021
    type: related
    note: See the case topic for the 2021 retailer failures.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Retail Electric Provider (REP)"
    quote: "As defined in P.U.C. SUBST. R. 25.5, Definitions, an Entity that sells electric energy to retail Customers in Texas but does not own or operate generation assets and is not an MOU or EC."
  - id: e2
    source: puct-25-5
    locator: "Section 25.5, definition of Retail electric provider (REP)"
    quote: "A person that sells electric energy to retail customers in this state. A retail electric provider may not own or operate generation assets."
  - id: e3
    source: puct-25-107
    locator: "Section 25.107(b)(1)(A)"
    quote: "A person must obtain a REP certificate under this section before purchasing, taking title to, or reselling electricity to provide retail electric service."
  - id: e4
    source: puct-25-107
    locator: "Section 25.107(b)(1)(A)"
    quote: "A person may certify as an Option 1 REP, Option 2 REP, or Option 3 REP under this section."
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.102(a)"
    quote: "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice on and after January 1, 2002."
  - id: e6
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e7
    source: pura-39
    locator: "PURA Sec. 39.105(a)"
    quote: "After January 1, 2002, a transmission and distribution utility may not sell electricity or otherwise participate in the market for electricity except for the purpose of buying electricity to serve its own needs."
  - id: e8
    source: puct-25-5
    locator: "Section 25.5, definition of REP of record"
    quote: "There can be no more than one REP of record assigned to an ESI ID at any specific point in time."
  - id: e9
    source: pura-39
    locator: "PURA Sec. 39.352(b)"
    quote: "The commission shall issue a certificate to provide retail electric service to a person applying for certification who demonstrates:(1)  the financial and technical resources to provide continuous and reliable electric service to customers in the area for which the certification is sought;(2)  the managerial and technical ability to supply electricity at retail in accordance with customer contracts;(3)  the resources needed to meet the customer protection requirements of this title;  and(4)  ownership or lease of an office located within this state for the purpose of providing customer service, accepting service of process, and making available in that office books and records sufficient to establish the retail electric provider's compliance with the requirements of this subchapter."
  - id: e10
    source: pura-39
    locator: "PURA Sec. 39.106(a)-(c)"
    quote: "The commission shall designate retail electric providers in areas of the state in which customer choice is in effect to serve as providers of last resort."
  - id: e11
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Additionally, a REP must demonstrate certification by P.U.C. SUBST. R. 25.107, Certification of Retail Electric Providers (REPs), and comply with the remaining requirements of this Section."
  - id: e12
    source: puct-25-107
    locator: "Section 25.107(b)(1)(B)"
    quote: "A REP that outsources retail electric service functions is responsible for those functions in accordance with all applicable laws and commission rules for all activities conducted on its behalf by any third-party provider."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e15
    source: np-16
    locator: "Section 16.3(2)"
    quote: "All CRs must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, prior to commencing operations with ERCOT."
---

## Definition

A REP is an entity that sells electric energy to retail customers in Texas but does not own or operate generation assets and is not an MOU or EC. [e1] The PUCT's rule says the same: a REP sells to retail customers in the state and may not own or operate generation assets. [e2]

## How it works

Two layers apply: PUCT certification and ERCOT registration. A person must obtain a REP certificate from the PUCT before purchasing, taking title to, or reselling electricity to provide retail electric service, and may certify as an Option 1, Option 2 or Option 3 REP. [e3][e4] PURA requires the applicant to show financial and technical resources, managerial and technical ability, resources to meet customer protection requirements, and an office in Texas. [e9] A REP that outsources functions remains responsible for them. [e12]

At ERCOT, a REP is a Competitive Retailer and so an LSE, and it must demonstrate PUCT certification under Section 25.107. [e13][e11] It must have a QSE, and ERCOT must approve the QSE designation before the CR enrolls Customer ESI IDs. [e6]

Each ESI ID has at most one REP of record at a time. [e8]

## ERCOT context

REPs exist because retail customers in Texas, other than customers of non-opted-in cooperatives and municipally owned utilities, have had customer choice since January 1, 2002. [e5] After that date a transmission and distribution utility may not sell electricity except to buy for its own needs. [e7]

PURA also requires the PUCT to designate REPs as providers of last resort in areas where customer choice is in effect. [e10]

## Key facts

- REP certificate from the PUCT is required before buying and reselling electricity at retail; there are Option 1, 2 and 3 certification routes. [e3][e4]
- Customer choice began on January 1, 2002 for most retail customers. [e5]
- A REP may not own or operate generation assets. [e2]
- One REP of record per ESI ID at a time. [e8]
- PURA requires an in-state office as a certification condition. [e9]

## Say it like this

(Guidance) A REP is the certified retailer that sells power to Texas customers who have choice; it needs a PUCT certificate and a QSE designation approved by ERCOT. By rule it cannot own generation.

## Common confusion

(Guidance) A REP is not a utility: a transmission and distribution utility may not sell electricity except to buy for its own needs. [e7] A REP is also not the only retailer: MOUs and ECs that offer Customer Choice are Competitive Retailers too. [e14]

## Questions

### Can a REP own power plants?

No. The PUCT definition says a REP may not own or operate generation assets. [e2]

### What does a REP need before it can serve customers?

A PUCT REP certificate, ERCOT registration as an LSE, a QSE whose designation ERCOT has approved, and completion of Retail Market Testing as a CR. [e3][e11][e6][e15]

## Open items

- Option 1/2/3 distinctions (what each requires, for example credit or customer affidavits) were not summarized here.
- REP financial requirements (net worth, security) under Section 25.107 were not extracted.
- The history of the provider of last resort designations and the 2021 retailer failures is not covered; see the case topic.
