---
id: retail-choice
name: Retail Choice / Competitive Retail Market
aliases: [retail choice, customer choice, competitive retail, deregulation, opt-in]
kind: concept
domain: structure
level: 1
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: rep
    type: related
    note: Customers may choose a retail electric provider, or a cooperative or municipal utility that offers choice. [e3]
  - to: tdsp
    type: related
    note: The wires utility cannot sell electricity and continues to provide metering after choice begins. [e4][e5]
  - to: noe
    type: contrasts-with
    note: Co-ops and municipal utilities are outside customer choice unless they opt in. [e2]
  - to: esi-id
    type: related
    note: A Switch Request must include an ESI ID. [e10]
  - to: tx-set
    type: used-in
    note: A CR submits a Switch Request to ERCOT using the 814_01 transaction. [e8]
  - to: mass-transition
    type: related
    note: ERCOT initiates a Mass Transition of an LSE's ESI IDs if the LSE serving Load fails to cure a QSE Affiliation Breach. [e11]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Customer Choice"
    quote: "The freedom of a retail Customer to purchase electric services, either individually or on an aggregated basis with other retail Customers, from the provider or providers of the Customer’s choice and to choose among various fuel types, energy efficiency programs, and renewable power suppliers."
  - id: e2
    source: pura-39
    locator: "PURA Sec. 39.102(a)"
    quote: "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice on and after January 1, 2002."
  - id: e3
    source: pura-39
    locator: "PURA Sec. 39.102(b)"
    quote: "The affiliated retail electric provider of the electric utility serving a retail customer on December 31, 2001, may continue to serve that customer until the customer chooses service from a different retail electric provider, an electric cooperative offering customer choice, or a municipally owned utility offering customer choice."
  - id: e4
    source: pura-39
    locator: "PURA Sec. 39.105(a)"
    quote: "After January 1, 2002, a transmission and distribution utility may not sell electricity or otherwise participate in the market for electricity except for the purpose of buying electricity to serve its own needs."
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.107(a)"
    quote: "On introduction of customer choice in a service area, metering services for the area shall continue to be provided by the transmission and distribution utility affiliate of the electric utility that was serving the area before the introduction of customer choice."
  - id: e6
    source: ercot-fact-sheet
    locator: "ERCOT fact sheet, About ERCOT"
    quote: "administers retail switching for more than 8 million premises in competitive choice areas."
  - id: e7
    source: np-18
    locator: "Section 18.6.1(3)"
    quote: "Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) that opt-in to Customer Choice must install IDRs at all Premises subject to the IDR Mandatory Installation Requirements for metering prior to the effective date of their participation in the testing and integration requirements of ERCOT systems for Customer Choice."
  - id: e8
    source: np-15
    locator: "Section 15.1.1(1)"
    quote: "The CR shall submit a Switch Request to ERCOT using the 814_01, Switch Request."
  - id: e9
    source: np-15
    locator: "Section 15.1.1.7(3)"
    quote: "During the switch process, the Customer will continue to be served by its current CR."
  - id: e10
    source: np-15
    locator: "Section 15.1.1(1)"
    quote: "The CR shall submit a Switch Request to ERCOT using the 814_01, Switch Request. The Switch Request shall include, at a minimum, the five-digit zip code and an ESI ID."
  - id: e11
    source: np-16
    locator: "Section 16.2.6.1(5)"
    quote: "If the LSE fails to cure the QSE Affiliation Breach within the cure period set forth in the Standard Form Market Participant Agreement, and the LSE serves Load, ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s Electronic Service Identifiers (ESI IDs) pursuant to Section 15.1.3, Transition Process."
---

## Definition

Customer Choice is the freedom of a retail customer to buy electric services, individually or aggregated with other customers, from the provider of its choice, and to choose among fuel types, energy efficiency programs and renewable power suppliers. [e1]

## How it works

In Texas, each retail customer has choice from January 1, 2002, except customers of cooperatives and municipally owned utilities that have not opted for choice. [e2] The incumbent utility's affiliated retail provider could keep serving its customers until each chose a different REP, or a cooperative or municipal utility offering choice. [e3] After that date the transmission and distribution utility may not sell electricity except to buy for its own needs, and it continues to provide metering in the area. [e4][e5]

ERCOT administers retail switching. [e6] A competitive retailer submits a Switch Request to ERCOT using an 814_01 transaction, and the customer stays with its current retailer during the switch process. [e8][e9] Co-ops and municipal utilities that opt in must meet interval-metering requirements before joining ERCOT's choice systems. [e7]

## ERCOT context

ERCOT states that it administers retail switching for more than 8 million premises in competitive choice areas. [e6]

## Key facts

- Customer choice began January 1, 2002 for most retail customers. [e2]
- Co-ops and municipal utilities are in only if they opt in. [e2][e7]
- The wires utility may not sell electricity and keeps metering after choice begins. [e4][e5]
- More than 8 million premises are in competitive choice areas, per ERCOT. [e6]

## Say it like this

(Guidance) Most Texas customers outside co-op and municipal territory pick their own retailer, and the wires utility may not sell electricity. ERCOT administers the switching. [e4][e6]

## Common confusion

(Guidance) "Retail choice" does not cover the whole state: non-opted-in co-ops and municipal utilities are outside it. [e2]

## Questions

### Who is excluded from retail choice?

Customers of electric cooperatives and municipally owned utilities that have not opted for customer choice. [e2]

### What changes for a municipal utility that opts in?

Among other things, it must install interval data recorders at premises subject to the mandatory requirement before joining ERCOT's choice testing and integration. [e7]

## Open items

- Deeper pass: opt-in procedures for NOIEs, the PUCT rules on opt-in (Subchapter on customer choice) and which entities have opted in.
- Deeper pass: customer protection rules (PURA 39.101) and REP disclosure rules.
- The count of competitive vs. non-competitive load share was not extracted.
