---
id: pcrr
name: PCRR (Pre-Assigned CRR)
aliases: [PCRR, PCRRs, Pre-Assigned Congestion Revenue Right, Pre-Assigned CRR, NOIE allocation]
kind: product
domain: congestion
level: 2
lenses: [analyst, congestion, portfolio, retail]
as_of: 2026-11-18
links:
  - to: crr
    type: is-a
    note: ERCOT allocates a portion of available CRRs as PCRRs to NOIEs that meet the pre-September 1, 1999 ownership or contract test. [e1]
  - to: crr-auction
    type: related
    note: See the crr-auction topic for the auction route to CRRs.
  - to: congestion
    type: hedges
    note: The IMM says PCRR holders pay only a fraction of the auction value of comparable CRRs, reflecting legacy transmission access rights. [e7]
  - to: lse
    type: related
    note: A NOIE is an EC or MOU that does not offer Customer Choice. [e3]
  - to: load-zone
    type: related
    note: A NOIE serving Load in more than one Load Zone nominates PCRRs per zone. [e5]
  - to: four-cp
    type: related
    note: Where a portfolio supply contract does not describe the NOIE entitlement by resource, the PCRR allocation uses a 2003 4-CP ratio share. [e4]
evidence:
  - id: e1
    source: np-07
    locator: "Section 7.4, paragraph (1)"
    quote: "ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources."
  - id: e2
    source: np-07
    locator: "Section 7.4, paragraph (2)"
    quote: "NOIEs are the only Entities eligible for an allocation of PCRRs."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE)"
    quote: "An EC or MOU that does not offer Customer Choice."
  - id: e4
    source: np-07
    locator: "Section 7.4.2.1, paragraph (3)(b)"
    quote: "If the portfolio supply contract does not specifically describe the NOIE capacity entitlement from each specific Generation Resource, the PCRR allocation amount shall be based on the NOIE’s 2003 4-Coincident Peak (4-CP) ratio share of each Generation Resource in the portfolio."
  - id: e5
    source: np-07
    locator: "Section 7.4.2.1, paragraph (4)"
    quote: "If a NOIE serves Load in more than one Load Zone, it shall nominate PCRRs to each Load Zone in an amount equal to the explicit contractual rights to each Load Zone, if any, or in proportion to the peak Load served in each relevant Load Zone, based on the aggregated monthly Load data from the corresponding prior 12 months."
  - id: e6
    source: np-07
    locator: "Section 7.4.2.1, paragraph (1)"
    quote: "PCRR allocations shall be limited to the Seasonal net max sustainable rating (MW) of eligible pre-September 1, 1999 Generation Resources, but shall in no event exceed the net max sustainable rating (MW) of these pre-September 1, 1999 Generation Resources as established by 2010 registration data."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, introduction to CRRs"
    quote: "Parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs, reflecting their legacy transmission access rights."
  - id: e8
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(a)"
    quote: "A PCRR nomination is a request for one-month strips of a NOIE-specified CRR type for amounts and blocks specified by the NOIE for each month of the PCRR Nomination Year as described in paragraph (c) below."
  - id: e10
    source: np-07
    locator: "Section 7.4.2.1, paragraph (1)"
    quote: "If a Generation Resource is repowered by the addition of new equipment, the PCRR MW amount is limited to the original specific turbine/generator set(s) from the pre-September 1, 1999 Generation Resource. New or upgraded components that increase the capacity of pre-September 1, 1999 Generation Resources are not eligible for increased PCRR MW amounts."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of PCRR Nomination Year"
    quote: "The calendar year that is three years after the year containing a PCRR nomination process."
---

## Definition

A PCRR is a CRR that ERCOT allocates, rather than auctions, to a Non-Opt-In Entity that owned a specific Generation Resource before September 1, 1999 or has a pre-September 1, 1999 long-term (over five years) contract for annual capacity and energy from specific Generation Resources. [e1] NOIEs are the only entities eligible. [e2]

## How it works

A NOIE is an electric cooperative or municipally owned utility that does not offer Customer Choice. [e3] A PCRR nomination is a request for one-month strips of a NOIE-chosen CRR type, in amounts and blocks the NOIE specifies for each month of the PCRR Nomination Year, which is the third calendar year after the nomination process. [e8][e9]

Amounts are capped by the Seasonal net max sustainable rating of the eligible resources and never above the 2010 registration-data rating. [e6] Where a portfolio supply contract does not split entitlements by resource, allocations follow the NOIE's 2003 4-CP ratio share. [e4] A NOIE serving several Load Zones nominates per zone, by contract rights or in proportion to peak Load served. [e5]

## ERCOT context

The IMM says PCRR holders pay only a fraction of the auction value of comparable CRRs, reflecting legacy transmission access rights. [e7] The auction route to CRRs is covered in the crr-auction topic.

## Key facts

- Only NOIEs can receive PCRRs. [e2]
- Basis: pre-September 1, 1999 ownership or long-term contract (over five years) for specific Generation Resources. [e1]
- Allocation is capped by the 2010 registration-data net max sustainable rating. [e6]
- Nomination Year is three years after the nomination process. [e9]
- The IMM says holders pay a fraction of comparable auction value. [e7]

## Say it like this

PCRRs are legacy congestion hedges given to co-ops and municipal utilities for plants and contracts that predate the market. They pay a fraction of the auction price for them.

## Common confusion

PCRRs are allocated rather than bought in the auction, but they are not free: the IMM says holders pay a fraction of comparable auction value. [e7] They are also unrelated to retail electric providers: only NOIEs qualify. [e2][e3]

## Questions

### Who qualifies for PCRRs?

NOIEs with pre-September 1, 1999 generation ownership or qualifying long-term contracts for specific resources. [e1][e2]

### Can a new plant earn PCRRs?

Not on new capacity: eligibility rests on pre-September 1, 1999 ownership or contracts, [e1] and new or upgraded components that increase the capacity of those resources are not eligible for increased PCRR MW amounts. [e10]

## Open items

- Deeper pass: disqualifying events and their effects (7.4.1.3), outage-related eligibility (7.4.1.2), and the SFT-based proportional reduction of infeasible nominations (7.4.2.2).
- Deeper pass: the PCRR charge formula (7.5.6.3), including the PCRROBLF factor; the "fraction" level is not quantified in sources read.
