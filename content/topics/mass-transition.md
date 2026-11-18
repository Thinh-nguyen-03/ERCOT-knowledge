---
id: mass-transition
name: Mass Transition
aliases: [Mass Transition, mass transition event, bulk transfer of ESI IDs, transition to POLR]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: polr
    type: related
    note: A mass transition can move ESI IDs from a Competitive Retailer to a Provider of Last Resort. [e1]
  - to: rep
    type: related
    note: The exiting and gaining parties are competitive retailers. [e1]
  - to: esi-id
    type: composed-of
    note: A mass transition moves ESI IDs in a quantity or timeframe identified by Applicable Legal Authority. [e1]
  - to: tx-set
    type: used-in
    note: The process runs on TX SET transactions such as the 814_03 and 814_14. [e3][e4]
  - to: qse
    type: related
    note: ERCOT initiates a mass transition of an LSE's ESI IDs if its Emergency QSE fails to meet the requirements within the allotted time. [e6]
  - to: retailer-defaults-2021
    type: related
    note: See the retailer-defaults-2021 topic for the 2021 retailer failures.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Mass Transition"
    quote: "The transition of Electric Service Identifiers (ESI IDs) from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in a quantity or within a timeframe identified by Applicable Legal Authority."
  - id: e2
    source: np-15
    locator: "Section 15.1.3(1)"
    quote: "Certain circumstances may arise during the course of business in the Texas retail electric market that may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes."
  - id: e3
    source: np-15
    locator: "Section 15.1.3.1(1)"
    quote: "In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP."
  - id: e4
    source: np-15
    locator: "Section 15.1.3.1(2)"
    quote: "Within one Retail Business Day of receiving the 814_04 transaction, ERCOT will send an 814_11, Drop Response, to the transitioning CR and forward an 814_14, Drop Enrollment Request, with the scheduled meter read date, to the POLR(s) or designated CR."
  - id: e5
    source: np-15
    locator: "Section 15.1.3.1(3)"
    quote: "ERCOT shall identify and monitor transitioned ESI IDs for a period of 60 days from the Mass Transition Date, as defined in the Retail Market Guide. Identification of the transitioned ESI ID shall terminate either upon the first completed switch, move in, move out, or at the end of the 60 day period, whichever occurs first."
  - id: e6
    source: np-16
    locator: "Section 16.2.6.3(2)"
    quote: "If an Emergency QSE that is an LSE fails to meet at least one of the requirements listed above within the allotted time, then ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s ESI IDs pursuant to Section 15.1.3, Transition Process."
  - id: e7
    source: np-16
    locator: "Section 16.11.6.1.6(3)(b)"
    quote: "On revocation of some or all of the Market Participant’s rights or termination of the Market Participant’s agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant’s ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT."
  - id: e8
    source: np-16
    locator: "Section 16.11.4.3, definition of ILE"
    quote: "In the event of a Mass Transition necessitated by the default of a Counter-Party representing a QSE associated with an LSE, ERCOT may adjust the TPE of the Counter-Parties representing QSEs that are qualified as Providers of Last Resort (POLRs) to reflect the estimated Incremental Load Exposure (ILE) resulting from the Mass Transition."
  - id: e9
    source: np-15
    locator: "Section 15.1.3.3(1)"
    quote: "All CRs participating in the Texas retail electric market shall provide, in accordance with the Retail Market Guide, current Customer billing contact information to ERCOT for use in the event of a Mass Transition."
  - id: e10
    source: np-16
    locator: "Section 16.2.6.3(1)"
    quote: "Within seven Business Days after receiving designation as an Emergency QSE, an Emergency QSE must either: (a) Designate a QSE that will represent the LSE or Resource Entity to ERCOT; or (b) Fulfill all QSE registration and qualification requirements."
---

## Definition

A Mass Transition is the transition of ESI IDs from one Competitive Retailer to a Provider of Last Resort or designated CR, or from one TDSP to another, in a quantity or timeframe identified by Applicable Legal Authority. [e1]

## How it works

The Protocols provide it for circumstances where standard market transactions and processes do not fully support moving ESI IDs in that quantity or timeframe. [e2] ERCOT submits an 814_03 Enrollment Notification Request asking for a meter read two days after it initiates the transactions to the TDSP. [e3] ERCOT then sends an 814_11 Drop Response to the transitioning CR and an 814_14 Drop Enrollment Request to the POLR or designated CR. [e4] ERCOT monitors transitioned ESI IDs for 60 days, ending earlier on the first completed switch, move in or move out. [e5]

To prepare, every CR must give ERCOT current customer billing contact information for use in a mass transition. [e9]

## ERCOT context

ERCOT initiates a mass transition of an LSE's ESI IDs when an Emergency QSE that is an LSE fails, within the allotted time, to designate a QSE or fulfill QSE registration and qualification requirements [e10][e6], and also on revocation or termination of a defaulting Market Participant's rights or agreements, without a PUCT order. [e6][e7] ERCOT may also adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect the load they would take on. [e8]

## Key facts

- Applies to moving ESI IDs between CRs (to a POLR or designated CR) or between TDSPs. [e1]
- 814_03 meter read requested for two days after initiation. [e3]
- ERCOT monitors transitioned ESI IDs for up to 60 days. [e5]
- ERCOT can initiate one without a PUCT order on revocation or termination of a defaulting Market Participant. [e7]

## Say it like this

(Guidance) A mass transition is how ERCOT moves a failed retailer's customers, in bulk, to a provider of last resort or designated retailer. It is built into the default and QSE-loss rules.

## Common confusion

(Guidance) It is not an ordinary switch: it runs on a special process because standard market transactions do not completely support moving ESI IDs in that quantity or timeframe. [e2] It also is not limited to retailer failure: the definition includes TDSP-to-TDSP transitions. [e1]

## Questions

### What triggers a mass transition for a retailer?

An Emergency QSE that is an LSE failing within the allotted time to designate a QSE or fulfill QSE registration and qualification requirements, or revocation or termination of a defaulting Market Participant's rights or agreements. [e10][e6][e7]

### Who gets the customers?

A Provider of Last Resort or a designated CR. [e1]

## Open items

- Deeper pass: the Retail Market Guide Section 7 process and timelines (appendices) are not a saved source.
- Deeper pass: move-in and move-out dates falling after a mass transition drop date (np-15 15.1.6.5 and 15.1.6.8).
- Deeper pass: PURA 39.106 provider of last resort designation, covered by the polr topic.
