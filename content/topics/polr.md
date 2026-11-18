---
id: polr
name: POLR (Provider of Last Resort)
aliases: [POLR, Provider of Last Resort, LSP, Large Service Provider, VREP, Voluntary Retail Electric Provider]
kind: rule
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: mass-transition
    type: related
    note: A mass transition moves ESI IDs from a failing competitive retailer to a POLR or designated CR. [e5]
  - to: rep
    type: related
    note: The PUCT designates retail electric providers to serve as providers of last resort. [e1]
  - to: retail-choice
    type: part-of
    note: POLR applies in areas where customer choice is in effect. [e1]
  - to: puct
    type: related
    note: The PUCT designates POLR providers and sets requirements for POLR service in 16 TAC 25.43. [e1][e3]
  - to: esi-id
    type: related
    note: A mass transition moves ESI IDs to a POLR or designated CR. [e5]
  - to: retailer-defaults-2021
    type: related
    note: See the retailer-defaults-2021 topic for the 2021 retailer failures.
evidence:
  - id: e1
    source: pura-39
    locator: "PURA Sec. 39.106(a), (c)"
    quote: "The commission shall designate retail electric providers in areas of the state in which customer choice is in effect to serve as providers of last resort."
  - id: e2
    source: pura-39
    locator: "PURA Sec. 39.106(g)"
    quote: "In the event that a retail electric provider fails to serve any or all of its customers, the provider of last resort shall offer that customer the standard retail service package for that customer class with no interruption of service to any customer."
  - id: e3
    source: puct-25-43
    locator: "16 TAC 25.43(a), Purpose"
    quote: "This section establishes the requirements for Provider of Last Resort (POLR) service and ensures that it is available to any requesting retail customer and any retail customer who is transferred to another retail electric provider (REP) by the Electric Reliability Council of Texas (ERCOT) because the customer’s REP failed to provide service to the customer or failed to meet its obligations to the independent organization."
  - id: e4
    source: puct-25-43
    locator: "16 TAC 25.43(d)(1)-(4), POLR service"
    quote: "There are two types of POLR providers: VREPs and LSPs. (2) For the purpose of POLR service, there are four classes of customers: residential, small nonresidential, medium non-residential, and large non-residential."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Mass Transition"
    quote: "The transition of Electric Service Identifiers (ESI IDs) from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in a quantity or within a timeframe identified by Applicable Legal Authority."
  - id: e6
    source: puct-25-43
    locator: "16 TAC 25.43(m)(1), Rates applicable to POLR service"
    quote: "A VREP must provide service to customers using a market-based, month-to-month product."
  - id: e7
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A)(iii), LSP energy charge"
    quote: "Beginning on the 10th of each month, an LSP energy charge must be the average of the actual Real-Time Settlement Point Prices (RTSPPs) for the applicable load zone for the preceding calendar month (the historical average RTSPP) multiplied by the number of kWhs the customer used during that billing period and further multiplied by 120%."
  - id: e8
    source: puct-25-43
    locator: "16 TAC 25.43(g)(2) and (h)"
    quote: "POLR providers must serve two-year terms."
  - id: e9
    source: puct-25-43
    locator: "16 TAC 25.43(d)(4)"
    quote: "A POLR provider must offer a basic, standard retail service package to customers it is designated to serve, which is limited to: (A) Basic firm service; and (B)Call center facilities available for customer inquiries."
  - id: e10
    source: puct-25-43
    locator: "16 TAC 25.43(b), Application"
    quote: "This section does not apply when an electric cooperative or a municipally owned utility (MOU) designates a POLR provider for its certificated service area. However, this section is applicable when an electric cooperative delegates its authority to the commission in accordance with subsection (r) of this section to select a POLR provider for the electric cooperative’s service area."
  - id: e11
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A), LSP residential rate"
    quote: "Subparagraphs (A)-(C) of this paragraph establish the maximum rate for POLR service charged by an LSP. An LSP may charge a rate less than the maximum rate if it charges the lower rate to all customers in a mass transition that are in the same class and POLR area. (A) Residential customers. The LSP rate for the residential customer class must be determined by the following formula:"
  - id: e12
    source: puct-25-43
    locator: "16 TAC 25.43(c), definition of VREP"
    quote: "Voluntary retail electric provider (VREP) -- A REP that has volunteered to provide POLR service pursuant to subsection (i) of this section."
  - id: e13
    source: puct-25-43
    locator: "16 TAC 25.43(c), definition of LSP"
    quote: "Large service provider (LSP) -- A REP that is designated to provide POLR service pursuant to subsection (j) of this section."
---

## Definition

A Provider of Last Resort (POLR) is a retail electric provider the PUCT designates, in areas where customer choice is in effect, to serve as providers of last resort. [e1] The PUCT rule says that service is available to any requesting customer and to customers transferred because their REP failed. [e3] PURA says that if a REP fails to serve its customers, the POLR must offer the standard retail service package with no interruption of service. [e2]

## How it works

PUCT rule 25.43 makes POLR service available to any requesting retail customer and to customers ERCOT transfers because their REP failed to provide service or meet its obligations to ERCOT. [e3] There are two types of POLR providers, VREPs and LSPs. A VREP is a REP that has volunteered to provide POLR service, and an LSP is a REP designated to provide it. [e4][e12][e13] There are four customer classes: residential, small non-residential, medium non-residential and large non-residential. [e4] A POLR provider offers a basic standard service package, limited to basic firm service and call center facilities. [e9] POLR providers serve two-year terms. [e8]

Pricing differs by type. A VREP must use a market-based, month-to-month product. [e6] The rule sets a maximum rate for POLR service charged by an LSP, with a formula for the residential class. [e11] Under it, beginning on the 10th of each month the LSP energy charge is the preceding month's average real-time SPP for the applicable load zone, applied to the customer's kWh and multiplied by 120%. [e7]

## ERCOT context

When a retailer fails, ERCOT moves its customers in a mass transition, defined in the Protocols as the transition of ESI IDs from a competitive retailer to a POLR or designated CR. [e5] The PUCT designates POLR providers and sets requirements for POLR service. [e1][e3]

## Key facts

- PURA requires the PUCT to designate POLRs where customer choice is in effect. [e1]
- Two POLR types (VREP, LSP) and four customer classes. [e4]
- POLR providers serve two-year terms. [e8]
- The LSP energy charge is the preceding month's average real-time SPP for the load zone times the customer's kWh, multiplied by 120%. [e7]
- A VREP serves on a market-based, month-to-month product. [e6]

## Say it like this

(Guidance) The POLR is the retailer of last resort that picks up customers when their REP fails, so no one loses service. The PUCT designates POLRs, and ERCOT moves the customers through a mass transition.

## Common confusion

POLR is not the same as mass transition: the POLR is the receiving provider and mass transition is the process that moves the ESI IDs. [e5] The PUCT's selection rules do not apply where an electric cooperative or municipally owned utility designates its own POLR provider, unless a cooperative delegates that authority to the PUCT. [e10]

## Questions

### Who ends up serving customers when their REP fails?

A POLR provider: customers are transferred by ERCOT to a VREP or LSP, with no interruption of service. [e2][e3]

### How is the LSP's residential rate set?

By the 16 TAC 25.43(m)(2) formula, which sets a maximum rate. Its energy charge is the preceding month's average real-time SPP for the load zone, applied to the customer's kWh and multiplied by 120%. [e11][e7]

## Open items

- The 25.43 text on LSP customer charge ($0.09 per kWh), the 160% month-over-month cap and the commercial class rates were seen but not cited here.
- Deeper pass: the VREP and LSP selection and eligibility timeline (even-numbered years, July filing) and affiliate designation.
- Deeper pass: the np-16 mass transition mechanics and the 2021 events are not covered here.
