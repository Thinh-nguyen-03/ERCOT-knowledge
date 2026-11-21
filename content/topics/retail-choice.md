---
id: retail-choice
name: Retail Choice / Competitive Retail Market
aliases: [retail choice, customer choice, competitive retail, deregulation, opt-in]
kind: concept
domain: structure
level: 1
depth: deep
lenses: [retail, analyst, portfolio]
as_of: 2026-11-21
links:
  - to: rep
    type: related
    note: Customers may choose a retail electric provider, or a cooperative or municipal utility that offers choice. [e3]
  - to: tdsp
    type: related
    note: The wires utility cannot sell electricity and, with an exception for IDR-metered commercial and industrial customers, its affiliate continues to provide metering after choice begins. [e4][e5]
  - to: noe
    type: contrasts-with
    note: Co-ops and municipal utilities are outside customer choice unless they opt in, and an MOU's opt-in resolution is irrevocable. [e2][e14]
  - to: esi-id
    type: related
    note: A Switch Request must include an ESI ID. [e10]
  - to: tx-set
    type: used-in
    note: A CR submits a Switch Request to ERCOT using the 814_01 transaction. [e8]
  - to: mass-transition
    type: related
    note: ERCOT initiates a Mass Transition of an LSE's ESI IDs if the LSE serving Load fails to cure a QSE Affiliation Breach. [e11]
  - to: polr
    type: related
    note: A cooperative that initiates choice must designate itself or another entity as provider of last resort. [e20]
  - to: lse
    type: related
    note: MOUs and ECs register with ERCOT whether they plan to be a NOIE or a Competitive Retailer. [e22]
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
    quote: "On introduction of customer choice in a service area, metering services for the area shall continue to be provided by the transmission and distribution utility affiliate of the electric utility that was serving the area before the introduction of customer choice. Metering services provided to commercial and industrial customers that are required by the independent system operator to have an interval data recorder meter may be provided on a competitive basis."
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
  - id: e12
    source: pura-39
    locator: "PURA Sec. 39.102(c), systemwide freeze exception"
    quote: "(c) An electric utility that has in effect a systemwide freeze for residential and commercial customers in effect September 1, 1997, extending beyond December 31, 2001, that has been found by a regulatory authority to be in the public interest is not subject to this chapter. At the expiration of the utility's freeze period, the utility shall be subject to this chapter and, at that time, has no claim for stranded cost recovery."
  - id: e13
    source: pura-39
    locator: "PURA Sec. 39.104(b), customer choice pilot projects"
    quote: "(b) The commission shall require each electric utility to offer customer choice in its service area within this state amounting to five percent of the utility's combined load of all customer classes within this state beginning on June 1, 2001."
  - id: e14
    source: pura-40
    locator: "PURA Sec. 40.051(a)-(b), governing body decision (municipally owned utilities)"
    quote: "The municipal governing body or a body vested with the power to manage and operate a municipally owned utility has the discretion to decide when or if the municipally owned utility will provide customer choice.(b) Municipally owned utilities may choose to participate in customer choice at any time on or after January 1, 2002, by adoption of an appropriate resolution of the municipal governing body or a body vested with power to manage and operate the municipally owned utility. The decision to participate in customer choice by the adoption of a resolution is irrevocable."
  - id: e15
    source: pura-41
    locator: "PURA Sec. 41.051(a)-(b), board decision (electric cooperatives)"
    quote: "The board of directors has the discretion to decide when or if the electric cooperative will provide customer choice.(b) Electric cooperatives that choose to participate in customer choice may do so at any time on or after January 1, 2002, by adoption of an appropriate resolution of the board of directors. The decision to participate in customer choice by the adoption of a resolution may be revoked only if no customer has opted for choice within four years of the resolution's adoption. An electric cooperative may initiate a customer choice pilot project at any time."
  - id: e16
    source: pura-40
    locator: "PURA Sec. 40.052, utility not offering customer choice"
    quote: "A municipally owned utility that has not chosen to participate in customer choice may not offer electric energy at unregulated prices directly to retail customers outside its certificated retail service area.(b) A municipally owned utility under Subsection (a) retains the right to offer and provide a full range of customer service and pricing programs to the customers within its certificated area and to purchase and sell electric energy at wholesale without geographic restriction."
  - id: e17
    source: pura-41
    locator: "PURA Sec. 41.052(a)-(b), cooperatives not offering customer choice"
    quote: "An electric cooperative that chooses not to participate in customer choice may not offer electric energy at unregulated prices directly to retail customers outside its certificated retail service area.(b) An electric cooperative under Subsection (a) retains the right to offer and provide a full range of customer service and pricing programs to the customers within its certificated retail service area and to purchase and sell electric energy at wholesale without geographic restriction."
  - id: e18
    source: pura-40
    locator: "PURA Sec. 40.053(a)-(b), retail customer's right of choice (municipally owned utilities)"
    quote: "If a municipally owned utility chooses to participate in customer choice, after that choice all retail customers served by the municipally owned utility within the certificated retail service area of the municipally owned utility shall have the right of customer choice consistent with the provisions of this chapter, and the municipally owned utility shall provide open access for retail service.(b) Notwithstanding Section 39.107, the metering function may not be deemed a competitive service for customers of the municipally owned utility within that service area and may, at the option of the municipally owned utility, continue to be offered by the municipally owned utility as sole provider."
  - id: e19
    source: pura-41
    locator: "PURA Sec. 41.053(a)-(b), retail customer right of choice (electric cooperatives)"
    quote: "If an electric cooperative chooses to participate in customer choice, after that choice, all retail customers within the certificated service area of the electric cooperative shall have the right of customer choice, and the electric cooperative shall provide nondiscriminatory open access for retail service.(b) Notwithstanding Section 39.107, the metering function may not be deemed a competitive service for customers of the electric cooperative within that service area and may, at the option of the electric cooperative, continue to be offered by the electric cooperative as sole provider."
  - id: e20
    source: pura-41
    locator: "PURA Sec. 41.053(c)-(d), provider of last resort (electric cooperatives)"
    quote: "On its initiation of customer choice, an electric cooperative shall designate itself or another entity as the provider of last resort for retail customers within the electric cooperative's certificated service area and shall fulfill the role of default provider of last resort in the event no other entity is available to act in that capacity.(d) If a retail electric provider fails to serve a customer described in Subsection (c), on request by the customer, the provider of last resort shall offer the customer the standard retail service package for the appropriate customer class, with no interruption of service, at a fixed, nondiscountable rate that is at least sufficient to cover the reasonable costs of providing that service, as approved by the board of directors."
  - id: e21
    source: pura-40
    locator: "PURA Sec. 40.054(a)-(c), service outside area (municipally owned utilities)"
    quote: "A municipally owned utility participating in customer choice shall have the right to offer electric energy and related services at unregulated prices directly to retail customers who have customer choice without regard to geographic location.(b) In providing service under Subsection (a) to retail customers outside its certificated retail service area as that area exists on the date of adoption of customer choice, a municipally owned utility is subject to the commission's rules establishing a code of conduct regulating anticompetitive practices.(c) For municipally owned utilities participating in customer choice, the commission shall have jurisdiction to establish terms and conditions, but not rates, for access by other retail electric providers to the municipally owned utility's distribution facilities."
  - id: e22
    source: np-16
    locator: "Section 16.6(1)-(2), Registration of MOUs and ECs"
    quote: "(1) Each Municipally Owned Utility (MOU) and Electric Cooperative (EC) shall register with ERCOT and sign the Agreements that apply to the functions it performs in the ERCOT Region, regardless of whether planning to be a Non-Opt-In Entity (NOIE) or a Competitive Retailer (CR). (2) If an MOU or EC decides to register an affiliate as a CR, it must notify ERCOT of its intentions six months prior to opting in."
  - id: e23
    source: rmg-08
    locator: "Retail Market Guide Section 8.1(4)(a)-(c), differences between IOU and MOU/EC TDSP markets"
    quote: "(4) Notable differences between the IOU TDSP market and the MOU/EC TDSP market include, but are not limited to the following: (a) Billing may be consolidated billing or separate billing (based on Customer Choice) in an MOU/EC TDSP territory versus consolidated billing only by the Competitive Retailer (CR) in an IOU TDSP territory. The MOU/EC TDSP could choose to delegate the consolidated billing to the CR or contract with a third party; (b) Differences in who the Customer calls to report an outage or make a service request; (c) In an IOU TDSP territory, the PUCT Customer protection rules apply. However, in an MOU/EC territory, the specific MOU/EC utility service rules apply, which in many cases are different from the PUCT Customer protection rules such as the due date of the bill;"
  - id: e24
    source: rmg-08
    locator: "Retail Market Guide Section 8.1(3), tariff references"
    quote: "(3) For current tariff information, refer to P.U.C. SUBST. R. 25.215, Terms and Conditions of Access by a Competitive Retailer to the Delivery System of a Municipally Owned Utility or Electric Cooperative that has Implemented Customer Choice, for Nueces Electric Cooperative (NEC)/EC or P.U.C. SUBST. R. 25.219, Terms and Conditions of Access by a Competitive Retailer to the Delivery System of a Municipally Owned Utility or Electric Cooperative that Implements Customer Choice after May 1, 2023, for Lubbock Power & Light (LP&L)/MOU"
  - id: e25
    source: np-15
    locator: "Section 15.1.1.5(1), Response to Valid Enrollment Request"
    quote: "Within one Retail Business Day of receipt of the TDSP’s 814_04, Enrollment Notification Response, ERCOT will respond to the requesting CR in accordance with the 814_05, CR Enrollment Notification Response. This response will contain the scheduled meter read date for the switch and all information the TDSP furnished to ERCOT under the TDSP’s 814_04 transaction. The TDSP must effectuate the switch within two Retail Business Days of the scheduled meter read date."
  - id: e26
    source: np-15
    locator: "Section 15.1.1.7(1) and (3), Completion of Switch Request"
    quote: "(1) A Switch Request is effectuated on the actual meter read date in the 867_04, Initial Meter Read, or the final 867_03, Monthly or Final Usage, which must be equal to the scheduled meter read date. The process for a specific Switch Request is complete upon receipt of the effectuating meter read sent by the TDSP."
  - id: e27
    source: np-15
    locator: "Section 15.1.1.7(3)"
    quote: "(3) Switches shall become effective at 0000 (midnight) on the actual date of the effectuating meter read. The new CR may request a special meter read (including a profile-estimated meter read or interval meter calculation as allowed), in accordance with the TDSP’s tariff. For a special meter read, the switch is effective at 0000 (midnight) the day of the special meter read."
  - id: e28
    source: np-15
    locator: "Section 15.1.1.8(2), Rejection of Switch Request"
    quote: "(2) ERCOT will reject a Switch Request using the 814_02 transaction for any of the following reasons: (a) The ESI ID provided is inactive or does not exist; (b) The ESI ID and five digit zip code do not match; (c) The CR is not certified by the PUCT, if required; (d) The CR is not authorized to provide service in the TDSP service area; (e) The CR has not registered as a CR with ERCOT in accordance with Section 16, Registration and Qualification of Market Participants; (f) The PUCT directs ERCOT to reject registration requests from the CR per applicable PUCT rules;"
  - id: e29
    source: np-15
    locator: "Section 15.1.3.1(1)-(2), Mass Transition Process"
    quote: "(1) In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP. The 814_03 transaction shall contain a request for historical usage and the requested date for the meter read date to transfer the ESI IDs. If an actual meter read cannot be obtained by the date requested in the 814_03 transaction, then the meter read may be estimated by the TDSP. (See Retail Market Guide Section 9, Appendices, Appendix F2, Timeline for Initiation of a Mass Transition on a Business Day not Prior to a Weekend or ERCOT Holiday.) (2) The TDSP shall respond to the 814_03 transaction within two Retail Business Days with an 814_04, Enrollment Notification Response, and an 867_02, Historical Usage. Within one Retail Business Day of receiving the 814_04 transaction, ERCOT will send an 814_11, Drop Response, to the transitioning CR and forward an 814_14, Drop Enrollment Request, with the scheduled meter read date, to the POLR(s) or designated CR."
  - id: e30
    source: np-15
    locator: "Section 15.1.3.1(3)"
    quote: "(3) ERCOT shall identify and monitor transitioned ESI IDs for a period of 60 days from the Mass Transition Date, as defined in the Retail Market Guide. Identification of the transitioned ESI ID shall terminate either upon the first completed switch, move in, move out, or at the end of the 60 day period, whichever occurs first."
  - id: e31
    source: rmg-07
    locator: "Retail Market Guide Section 7.9(1)(a)(i), No REP of Record List"
    quote: "(i) Prepare a No REP of Record List on a monthly basis, identifying all ESI IDs with consumption equal to or greater than 150 kilowatt hours (kWh) in a single meter reading cycle, but no REP of record in the TDSP's customer information system;"
  - id: e32
    source: rmg-07
    locator: "Retail Market Guide Section 7.9(3)"
    quote: "(3) Pursuant to paragraph (i) of P.U.C. SUBST. R. 25.489, the TDSP may disconnect an ESI ID with no REP of record no earlier than ten days after the Customer receives the TDSP's notification as required by paragraph (g) of P.U.C. SUBST. R. 25.489. A TDSP shall not disconnect any ESI ID that has been claimed by a REP."
  - id: e33
    source: pura-39
    locator: "PURA Sec. 39.101(b)(2), customer entitlements"
    quote: "(2) to choose the customer's retail electric provider consistent with this chapter, to have that choice honored, and to assume that the customer's chosen provider will not be changed without the customer's informed consent;"
---

## Definition

Customer Choice is the freedom of a retail customer to buy electric services, individually or aggregated with other customers, from the provider of its choice, and to choose among fuel types, energy efficiency programs and renewable power suppliers. [e1]

## How it works

**Who has choice.** In Texas, each retail customer has choice from January 1, 2002, except customers of cooperatives and municipally owned utilities that have not opted for choice. [e2] The incumbent utility's affiliated retail provider could keep serving its customers until each chose a different REP, or a cooperative or municipal utility offering choice. [e3] A utility with a qualifying systemwide freeze in effect September 1, 1997 that extended beyond December 31, 2001 was not subject to the chapter until the freeze expired. [e12] After the start date the transmission and distribution utility may not sell electricity except to buy for its own needs, and metering services for the area continue to be provided by its transmission and distribution utility affiliate, except that metering for commercial and industrial customers required by the ISO to have an interval data recorder meter may be provided on a competitive basis. [e4][e5] A customer is entitled to choose its provider, to have the choice honored and to assume the provider will not be changed without informed consent. [e33]

**How a co-op or municipal utility opts in.** A municipal governing body, or a body managing the utility, has discretion to decide when or whether the MOU will provide choice; the decision may be made at any time on or after January 1, 2002 by resolution and is irrevocable. [e14] An electric cooperative's board has the same discretion, by resolution, but the decision may be revoked only if no customer has opted for choice within four years of the resolution, and a cooperative may start a choice pilot at any time. [e15] After opting in, all retail customers within the certificated area have the right of choice and the utility must provide open access; metering may remain with the utility as sole provider. [e18][e19] An opted-in cooperative must designate itself or another entity as provider of last resort, [e20] and an opted-in MOU may service customers outside its area at unregulated prices, subject to the PUCT's code of conduct, with PUCT jurisdiction over terms but not rates for access to its distribution facilities. [e21] An MOU or EC that has not opted in may not sell at unregulated prices to retail customers outside its certificated area but keeps its in-area programs and wholesale rights. [e16][e17] At ERCOT, each MOU and EC must register whether it plans to be a NOIE or a Competitive Retailer, and one that registers an affiliate as a CR must notify ERCOT six months before opting in. [e22] Opt-in entities must install IDRs at premises subject to the mandatory requirement before joining ERCOT's choice systems. [e7]

**Switching.** ERCOT administers retail switching. [e6] A competitive retailer submits a Switch Request to ERCOT using an 814_01 transaction, and the customer stays with its current retailer during the switch process. [e8][e9] ERCOT responds to the CR with the 814_05 within one Retail Business Day of the TDSP's 814_04, and the TDSP must effectuate the switch within two Retail Business Days of the scheduled meter read date. [e25] A switch is effectuated on the actual meter read date and becomes effective at 0000 (midnight) on that date, or on the date of a special meter read. [e26][e27] ERCOT rejects a Switch Request with the 814_02 for listed reasons, which include an inactive ESI ID, a mismatched ZIP code, a CR not certified by the PUCT, a CR not registered with ERCOT, and a PUCT direction to reject registration requests from the CR. [e28]

**When a retailer fails.** If an LSE fails to cure a QSE Affiliation Breach and serves Load, ERCOT initiates a Mass Transition of its ESI IDs. [e11] In a Mass Transition ERCOT requests a meter read for a date two days after it initiates the transactions, and sends a drop to the transitioning CR and an enrollment request to the POLR(s) or designated CR. [e29] ERCOT then monitors the transitioned ESI IDs for 60 days from the Mass Transition Date, or until the first completed switch, move in or move out. [e30]

**ESI IDs with no REP.** The TDSP prepares a monthly list of ESI IDs with consumption of 150 kWh or more in a single meter reading cycle but no REP of record. [e31] The TDSP may disconnect such an ESI ID no earlier than ten days after notifying the customer, and may not disconnect one a REP has claimed. [e32]

## ERCOT context

ERCOT states that it administers retail switching for more than 8 million premises in competitive choice areas. [e6]

The Retail Market Guide notes that in an IOU TDSP territory the PUCT customer protection rules apply, whereas in an MOU/EC territory the utility's own service rules apply, which often differ, for example on bill due date. It also notes that billing may be consolidated or separate in an MOU/EC territory but only consolidated by the CR in an IOU territory. [e23] Its Section 8 points to the PUCT tariff-access rules for Nueces Electric Cooperative and for Lubbock Power & Light, whose rule covers MOUs and ECs that implement customer choice after May 1, 2023. [e24]

## Timeline

- Customer choice pilot projects: the PUCT was to require each electric utility to offer choice for five percent of its combined load beginning June 1, 2001. [e13]
- January 1, 2002: customer choice for most retail customers. [e2]
- On or after January 1, 2002: MOUs and ECs may opt in by resolution (irrevocable for MOUs; revocable for ECs only if no customer has opted for choice within four years). [e14][e15]

## Key facts

- Customer choice began January 1, 2002 for most retail customers. [e2]
- Co-ops and municipal utilities are in only if they opt in. [e2][e7]
- The wires utility may not sell electricity, and its affiliate keeps metering after choice begins, except IDR-metered commercial and industrial customers, whose metering may be competitive. [e4][e5]
- More than 8 million premises are in competitive choice areas, per ERCOT. [e6]
- A switch takes effect at 0000 on the effectuating meter read date. [e27]
- Mass Transition: meter read requested two days after initiation, 60-day monitoring. [e29][e30]

## Say it like this

(Guidance) Customers outside non-opted-in co-op and municipal territory pick their own retailer, and the wires utility may not sell electricity. ERCOT administers the switching, and a failed retailer's customers are moved by a Mass Transition. [e4][e6][e29]

## Common confusion

(Guidance) "Retail choice" does not cover the whole state: non-opted-in co-ops and municipal utilities are outside it. [e2] Opting in is not symmetrical: an MOU's resolution is irrevocable while a co-op's may be revoked in one case. [e14][e15] Customer protection rules also differ by territory. [e23]

## Questions

### Who is excluded from retail choice?

Customers of electric cooperatives and municipally owned utilities that have not opted for customer choice. [e2]

### What changes for a municipal utility that opts in?

Among other things, it must install interval data recorders at premises subject to the mandatory requirement before joining ERCOT's choice testing and integration. [e7] All its retail customers within the certificated area get the right of choice, and it must provide open access. [e18]

### Why can a municipal utility not reverse an opt-in decision?

PURA says the decision to participate in customer choice by resolution is irrevocable for a municipally owned utility. [e14] The statute does not give a reason; for cooperatives the decision may be revoked only if no customer has opted for choice within four years. [e15]

### What if a customer's REP of record disappears and nobody claims the ESI ID?

The TDSP lists ESI IDs with at least 150 kWh in a cycle and no REP of record each month, REPs have a window to claim them, and the TDSP may disconnect unclaimed ESI IDs no earlier than ten days after notice. [e31][e32]

### When does a switch actually take effect?

When the effectuating meter read occurs, at 0000 on that date, or on the date of a special meter read; the customer stays with its current CR until then. [e27][e9]

## Open items

- Resolved 2026-11-21: opt-in mechanics for MOUs and ECs (PURA 40.051 and 41.051) and customer protection entitlements (PURA 39.101(b)(2)) are now covered; the PUCT customer protection rules for REPs are in the rep topic.
- Which specific MOUs and ECs have opted in was not found as a list; Retail Market Guide Section 8 names Nueces Electric Cooperative and Lubbock Power & Light in its tables only.
- The count of competitive vs. non-competitive load share was not extracted.
- Standard Move-In and Same-Day Move-In timelines (Protocols 15.1.4) and Retail Market Guide switch-hold rules were not summarized.
