---
id: mass-transition
name: Mass Transition
aliases: [Mass Transition, mass transition event, bulk transfer of ESI IDs, transition to POLR]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
depth: deep
as_of: 2026-11-21
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
    note: See the retailer-defaults-2021 topic for the 2021 retailer failures; Griddy's mass transition began on February 26, 2021. [e21]
  - to: stakeholder-process
    type: related
    note: The Retail Market Subcommittee (RMS) e-mail ListServ receives the second Mass Transition Market Notice. [e15]
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
  - id: e11
    source: np-16
    locator: "Section 16.11.6.1.6(3)"
    quote: "If a breaching Market Participant is also an LSE"
  - id: e12
    source: rmg-07
    locator: "Section 7.11.1(4)(b)-(c), Mass Transition timeline definitions"
    quote: >-
      (b) Calendar Day 0 - Date that ERCOT sends 814_03, Enrollment Notification Request. This can be on the Notification Date.

        (c) Mass Transition Date - Scheduled Meter Read Date (SMRD) will be equal to Calendar Day 0 plus two days and will be the date requested in the 814_03 transaction from ERCOT to the TDSP. POLRs will be responsible for ESI IDs no earlier than the Mass Transition Date.
  - id: e13
    source: rmg-07
    locator: "Section 7.11.1(5)"
    quote: "The processes described in this Section presume that a Mass Transition Decision to transfer the ESI IDs has already been made by ERCOT as a result of a Market Participant’s default of the Standard Form Market Participant Agreement with ERCOT."
  - id: e14
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (events requiring a mass transition)"
    quote: >-
      On the occurrence of one or more of the following events, ERCOT must initiate a mass transition to POLR providers, of all of the customers served by a REP:
      (A)
      Termination of the Load Serving Entity (LSE) or Qualified Scheduling Entity (QSE)
      Agreement for a REP with ERCOT;
      (B)
      Issuance of a commission order recognizing that a REP is in default under the TDU
      Tariff for Retail Delivery Service;
  - id: e15
    source: rmg-07
    locator: "Section 7.11.1.1.1(4), Mass Transition Initiation"
    quote: "The same day as and following the initial Mass Transition Market Notice to affected parties, ERCOT will provide a Mass Transition Market Notice to Transition/Acquisition contacts for Load Serving Entities (LSEs) and TDSPs, and the Retail Market Subcommittee (RMS) e-mail ListServ."
  - id: e16
    source: rmg-07
    locator: "Section 7.11.1.1.1(3), Mass Transition Initiation"
    quote: "Upon confirmation that a Mass Transition will occur, ERCOT shall provide an initial Mass Transition Market Notice to affected TDSPs, POLRs, the Losing CR, and appropriate PUCT and OPUC Staff."
  - id: e17
    source: rmg-07
    locator: "Section 7.11.1.2(2)(a)(i), pending transactions that would give the Losing CR responsibility for an ESI ID"
    quote: >-
      (a) Pending Transaction has a scheduled date that is prior to or equal to Calendar Day 0:

        (i) Switch: Allowed to complete and ERCOT sends the 814_03, Enrollment Notification Request, with the Mass Transition, indicator;
  - id: e18
    source: rmg-07
    locator: "Section 7.11.1.2(2)(b)(i), pending transactions that would give the Losing CR responsibility for an ESI ID"
    quote: >-
      (b) Pending Transaction has a scheduled date that is greater than Calendar Day 0 or is not yet scheduled (In Review or Permit Pending):

        (i) Switch: Cancelled and ERCOT will not send an 814_03 transaction;
  - id: e19
    source: rmg-07
    locator: "Section 7.11.1.4.1.2(6), ERCOT Pre-Launch Responsibilities in a Mass Transition"
    quote: "Determine the Mass Transition completion date to be no more than five days after ERCOT generates and the TDSP receives the 814_03, Enrollment Notification Request, with the Mass Transition indicator, for all affected ESI IDs;"
  - id: e20
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (switch requests)"
    quote: >-
      A mass transition under this section must not override or supersede a switch request made by
      a customer to switch an ESI ID to a new REP of choice, if the request was made before a mass
      transition is initiated. If a switch request has been made but is scheduled for any date after the
      next available switch date, the switch must be made on the next available switch date.
  - id: e21
    source: ercot-griddy-notice
    locator: "Market Notice M-G022621-01, Long Description"
    quote: "On Friday, February 26, 2021, ERCOT revoked all rights of GRIDDY ENERGY LLC to conduct activity under the ERCOT Protocols due to a Payment Breach."
  - id: e22
    source: ercot-griddy-notice
    locator: "Market Notice M-G022621-01, Long Description"
    quote: "The size of the associated combined 30 day Average Daily Load is approximately 1,065 MWHs and the number of ESI IDs involved is approximately 10,127."
  - id: e23
    source: puct-51859-griddy-order
    locator: "Order, Finding of Fact 34 (Mass Transition to Providers of Last Resort)"
    quote: >-
      Between February 26, 2021 and March 2,2021, following ERGOI's revocation of
      Griddy's market participant rights, ERCOT executed a mass transition of Griddy's
      customers to providers of last resort. In total, ERCOT transitioned 9,926 Griddy customers
      to providers of last resort.
  - id: e24
    source: puct-51859-griddy-order
    locator: "Order, Conclusion of Law on 16 TAC 25.107(f)(4)(F)(i)"
    quote: >-
      Under 16 TAC § 25.107(f)(4)(F)(i), the Commission's executive director or the executive
      director's designee may draw on a REP's irrevocable stand-by letter of credit if ERCOT
      performs a mass transition of the REP's customers.
  - id: e25
    source: np-15
    locator: "Section 15.1.6.8, Move Out Date After Mass Transition Drop Date"
    quote: "If the move out scheduled meter read date is after a Mass Transition drop scheduled meter read date, both processes will run concurrently and both processes will be allowed to complete. If the submitting CR is not scheduled to be the CR of Record on the scheduled meter read date of the move out, ERCOT cancels the move out."
  - id: e26
    source: np-15
    locator: "Section 15.1.6.5, Move In Date After Mass Transition Drop Date"
    quote: "If the move in scheduled meter read date is after a Mass Transition drop scheduled meter read date, both processes will run concurrently and both processes will be allowed to complete."
  - id: e27
    source: np-15
    locator: "Section 15.1.3.3(1), Customer Billing Contact Information"
    quote: "ERCOT shall retain the Customer data from the most recent submission, to be used in lieu of data from the exiting CR, in instances where the exiting CR does not provide data."
  - id: e28
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (deposits)"
    quote: "A defaulting REP whose customers are subject to a mass transition event must return the customers’ deposits within seven calendar days of the initiation of the transition."
  - id: e29
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (financial responsibility)"
    quote: >-
      If a REP terminates service to a customer, or transitions a customer to a POLR provider, the
      REP is financially responsible for the resources and services used to serve the customer until
      it notifies the independent organization of the termination or transition of the service and the
      transfer to the POLR provider is complete.
  - id: e30
    source: puct-25-43
    locator: "16 TAC 25.43(l), Mass transition of customers to POLR providers"
    quote: "ERCOT must first transfer customers to VREPs, up to the number of ESI IDs that each VREP has offered to serve for each customer class in the POLR area."
  - id: e31
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (improper use)"
    quote: "A REP must not use the mass transition process in this section as a means to cease providing service to some customers, while retaining other customers. A REP’s improper use of the mass transition process may lead to de-certification of the REP."
  - id: e32
    source: rmg-07
    locator: "Section 7.11.1(1), Transition Process"
    quote: "Each opt-in Municipally Owned Utility (MOU) or opt-in Electric Cooperative (EC) without an affiliated POLR that has not delegated authority to designate POLRs to the Public Utility Commission of Texas (PUCT), as applicable to opt-in ECs, must provide its initial POLR allocation methodology to ERCOT no later than 30 days prior to the Customer Choice opt-in date using Section 9, Appendices, Appendix J7, Mass Transition Allocation Methodology."
  - id: e33
    source: rmg-07
    locator: "Section 7.11.1(3), Transition Process"
    quote: "Per Protocol Section 16.1.1, Re-Registration as a Market Participant, any Market Participant that has had its Customers dropped via the Mass Transition process must provide to ERCOT a new Data Universal Numbering System (DUNS) Number (DUNS #) to re-register as a Market Participant with ERCOT."
  - id: e34
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (out-of-cycle meter read)"
    quote: >-
      In a mass transition event, the ERCOT initiated transactions must request an out-of-cycle meter
      read for the associated ESI IDs for a date two calendar days after the calendar date ERCOT
      initiates such transactions to the TDU. If an ESI ID does not have the capability to be read in
      a fashion other than a physical meter read, the out-of-cycle meter read may be estimated.
  - id: e35
    source: rmg-09f2
    locator: "Appendix F2, Timeline for Initiation of a Mass Transition (dated May 1, 2019)"
    quote: "When feasible, ERCOT shall adhere to the timelines outlined below. However, ERCOT reserves the right to initiate the Mass Transition process as directed by Applicable Legal Authority (ALA) or ERCOT Legal."
  - id: e36
    source: rmg-07
    locator: "Section 7.11.1.1.1(3), Mass Transition Initiation"
    quote: "If a Mass Transition is initiated on a Business Day prior to a weekend or ERCOT holiday, the initial Mass Transition project coordination call will be scheduled for that Business Day."
---

## Definition

A Mass Transition is the transition of ESI IDs from one Competitive Retailer to a Provider of Last Resort or designated CR, or from one TDSP to another, in a quantity or timeframe identified by Applicable Legal Authority. [e1]

## How it works

The Protocols provide it for circumstances where standard market transactions and processes do not fully support moving ESI IDs in that quantity or timeframe. [e2] The Retail Market Guide process presumes that ERCOT has already made the decision to transfer the ESI IDs because of a Market Participant's default of the Standard Form Market Participant Agreement. [e13]

Notice and timeline. When ERCOT confirms that a Mass Transition will occur, it gives an initial Mass Transition Market Notice to the affected TDSPs, POLRs, the Losing CR and PUCT and OPUC Staff. [e16] The same day, ERCOT sends a Market Notice to LSE and TDSP Transition/Acquisition contacts and the Retail Market Subcommittee (RMS) e-mail ListServ. [e15] The Retail Market Guide calls the day ERCOT sends the 814_03 "Calendar Day 0"; the Mass Transition Date is the scheduled meter read date, Calendar Day 0 plus two days, and POLRs are responsible for ESI IDs no earlier than the Mass Transition Date. [e12] ERCOT determines a completion date no more than five days after it generates, and the TDSP receives, the 814_03 for all affected ESI IDs. [e19]

Transactions. ERCOT submits an 814_03 Enrollment Notification Request asking for a meter read two days after it initiates the transactions to the TDSP. [e3] The PUCT rule says the same, as a meter read two calendar days after the date ERCOT initiates the transactions; where an ESI ID cannot be read other than by a physical meter read, the read may be estimated. [e34] ERCOT then sends an 814_11 Drop Response to the transitioning CR and an 814_14 Drop Enrollment Request to the POLR or designated CR. [e4] ERCOT monitors transitioned ESI IDs for 60 days from the Mass Transition Date, ending earlier on the first completed switch, move in or move out. [e5]

Transactions already in flight. Under the Retail Market Guide, for pending transactions that would leave the Losing CR responsible for an ESI ID, a switch scheduled on or before Calendar Day 0 is allowed to complete and ERCOT sends the 814_03 with the Mass Transition indicator. [e17] A switch scheduled after Calendar Day 0, or not yet scheduled, is cancelled and ERCOT does not send an 814_03. [e18] The PUCT rule separately says a mass transition must not override a switch request a customer made before the transition was initiated; if that switch was scheduled after the next available switch date, it is made on the next available switch date. [e20] Move-in and move-out dates that fall after the Mass Transition drop date: the move-in and the mass transition run concurrently and both complete [e26]; for a move-out both also complete, but if the submitting CR is not scheduled to be CR of Record on the move-out's scheduled meter read date, ERCOT cancels the move-out. [e25]

Customer data. Every CR must give ERCOT current customer billing contact information for use in a mass transition. [e9] ERCOT keeps the most recent submission and uses it in place of data from the exiting CR where that CR does not provide data. [e27]

## ERCOT context

Triggers. ERCOT initiates a mass transition of an LSE's ESI IDs when an Emergency QSE that is an LSE fails, within the allotted time, to designate a QSE or fulfill QSE registration and qualification requirements [e10][e6], and also, where a breaching Market Participant is also an LSE, on revocation of some or all of its rights or termination of its agreements, on notice to the Market Participant and the PUCT and without the need for a PUCT order. [e11][e7] The PUCT's POLR rule separately lists events requiring ERCOT to initiate a mass transition of all of a REP's customers, among them termination of the REP's LSE or QSE Agreement with ERCOT and a commission order recognizing the REP is in default under the TDU Tariff for Retail Delivery Service. [e14] ERCOT may also adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect the load they would take on. [e8]

Who receives the ESI IDs. The PUCT rule has ERCOT transfer customers first to VREPs, up to the number of ESI IDs each VREP has offered to serve for each class in the POLR area. [e30] The polr topic covers how remaining ESI IDs go to LSPs. For opt-in MOUs and ECs without an affiliated POLR that have not delegated POLR designation to the PUCT, the Retail Market Guide requires the MOU or EC to give ERCOT its own POLR allocation methodology no later than 30 days before its Customer Choice opt-in date. [e32]

Consequences for the exiting retailer. The defaulting REP must return customer deposits within seven calendar days of the initiation of the transition. [e28] The REP stays financially responsible for resources and services used to serve the customer until it notifies the independent organization and the transfer to the POLR provider is complete. [e29] A Market Participant whose Customers were dropped through the Mass Transition process must give ERCOT a new DUNS number to re-register. [e33] A REP must not use the mass transition process to drop some customers while keeping others, and improper use may lead to de-certification. [e31]

Real case: Griddy. ERCOT's market notice says it revoked all rights of Griddy Energy LLC on February 26, 2021 because of a Payment Breach and began the mass transition that day; the Protocol provision it relies on is the revocation trigger above. [e21][e7] The notice put the size at approximately 10,127 ESI IDs and a combined 30-day Average Daily Load of approximately 1,065 MWh. [e22] In its later order, the PUCT found ERCOT transitioned 9,926 Griddy customers to POLRs between February 26 and March 2, 2021. [e23] The two figures differ in what they count (ESI IDs in the notice, customers in the order) and in date, so do not treat them as one number. The PUCT order also notes the executive director may draw on a REP's letter of credit if ERCOT performs a mass transition of the REP's customers. [e24]

## Timeline

- 2019-05-01: the date shown on Retail Market Guide Appendix F2, "Timeline for Initiation of a Mass Transition", which says ERCOT will adhere to its timelines when feasible but reserves the right to initiate as directed by Applicable Legal Authority or ERCOT Legal; the appendix text in the saved copy does not include the timeline table itself. [e35]
- 2021-02-26: ERCOT revokes Griddy's rights and starts a mass transition. [e21]
- 2021-02-26 to 2021-03-02: ERCOT transitions Griddy's customers to POLRs (PUCT finding). [e23]

## Key facts

- Applies to moving ESI IDs between CRs (to a POLR or designated CR) or between TDSPs. [e1]
- Calendar Day 0 is the day ERCOT sends the 814_03; the Mass Transition Date is Day 0 plus two days. [e12]
- ERCOT monitors transitioned ESI IDs for up to 60 days from the Mass Transition Date. [e5]
- Where a breaching Market Participant is also an LSE, ERCOT can initiate one without a PUCT order on revocation of its rights or termination of its agreements. [e11][e7]
- Customers go first to VREPs, then to LSPs. [e30]
- Griddy 2021: about 10,127 ESI IDs in the ERCOT notice, 9,926 customers in the PUCT order. [e22][e23]

## Say it like this

(Guidance) A mass transition is the Protocol process for moving ESI IDs in bulk from one CR to a provider of last resort or designated CR. [e1] ERCOT starts it when a retailer's market participation is terminated or its QSE arrangement fails, and the customers land on a POLR on a fixed two-day meter read schedule. [e6][e7][e12]

## Common confusion

(Guidance) It is not an ordinary switch: it runs on a special process because standard market transactions do not completely support moving ESI IDs in that quantity or timeframe. [e2] It also is not limited to retailer failure: the definition includes TDSP-to-TDSP transitions. [e1] A customer's pre-existing switch request is not simply wiped out; the PUCT rule says a mass transition must not override a switch made before it was initiated. [e20]

## Questions

### What triggers a mass transition for a retailer?

An Emergency QSE that is an LSE failing within the allotted time to designate a QSE or fulfill QSE registration and qualification requirements, or revocation of rights or termination of agreements of a breaching Market Participant that is also an LSE. [e10][e6][e11][e7] The PUCT rule adds, among others, termination of the REP's LSE or QSE Agreement with ERCOT and a commission order recognizing a TDU Tariff default. [e14]

### Who gets the customers?

A Provider of Last Resort or a designated CR. [e1] Under the PUCT rule, VREPs are used first, up to what each offered to serve. [e30]

### Why is the meter read set two days after ERCOT starts?

The Protocols fix it: the 814_03 requests a meter read two days after initiation, and that date becomes the transition date at which responsibility passes. [e3][e12] The TDSP may estimate the read if an actual read cannot be obtained by that date. [e34]

### What if a customer had already asked to switch to another REP before the transition?

The PUCT rule says the mass transition must not override that switch; if it was scheduled after the next available switch date, it is made on the next available switch date. [e20] In the Retail Market Guide, a pending switch scheduled on or before Calendar Day 0 is allowed to complete, while one scheduled later or not yet scheduled is cancelled. [e17][e18] These two statements are written differently; read them together with the current Retail Market Guide and PUCT rule.

### What if a move-out is scheduled after the mass transition drop date?

Both processes run concurrently and complete, but ERCOT cancels the move-out if the submitting CR will not be CR of Record on its scheduled meter read date. [e25]

### What happened to Griddy's customers?

ERCOT revoked Griddy's rights on February 26, 2021 and started a mass transition that day; the PUCT later found 9,926 customers were transitioned to POLRs by March 2, 2021. [e21][e23]

## Scenarios

### A retailer's market participant agreement is terminated on a Friday. What does ERCOT do?

- It treats the termination as a trigger for a mass transition. [e11][e7][e14]
- It sends the initial Market Notice to TDSPs, POLRs, the Losing CR and PUCT and OPUC Staff, and, if the transition is initiated on a Business Day before a weekend or ERCOT holiday, the initial project coordination call is scheduled for that Business Day. [e16][e36]
- It sends the 814_03 on Calendar Day 0 asking for a meter read on Day 0 plus two days. [e3][e12]
- ERCOT keeps identifying the transitioned ESI IDs for up to 60 days. [e5]

## Open items

- The Retail Market Guide Appendix F2 timeline table and Appendix D1 transaction timing matrix are not legible in the saved text (the F2 copy has only its introduction), so the day-by-day schedule is not sourced.
- The 25.43 rule and the Retail Market Guide describe pending-switch handling in different words (see Questions); the saved sources do not reconcile them.
- How the PUCT allocates among POLRs in practice beyond the 25.43(l) formula (the RMG says ESI IDs are assigned "as directed by ALA and the POLR rule") is not sourced; see polr topic.
- Resolved 2026-11-21: Retail Market Guide Section 7.11 (now rmg-07), np-15 15.1.6.5 and 15.1.6.8, and the Griddy event are covered above.
