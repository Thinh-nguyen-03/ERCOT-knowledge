---
id: esi-id
name: ESI ID
aliases: [ESI ID, ESIID, Electric Service Identifier, premise, service delivery point ID]
kind: concept
domain: structure
level: 1
lenses: [retail, analyst, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: tdsp
    type: related
    note: The TDSP creates, assigns, maintains and retires the ESI ID for each Service Delivery Point in its area. [e4]
  - to: rep
    type: related
    note: Each ESI ID has at most one REP of record at a time. [e6]
  - to: retail-choice
    type: used-in
    note: A Competitive Retailer's Switch Request is submitted for an ESI ID. [e7]
  - to: load-profiling
    type: related
    note: Load Profiling estimates and allocates 15-minute Load for ESI IDs. [e8]
  - to: ams-meters
    type: related
    note: Covers the metering side; the ESI ID is the identifier assigned to each Service Delivery Point. [e1]
  - to: tx-set
    type: used-in
    note: The switch request (814_01) must include an ESI ID. [e7]
  - to: lse
    type: related
    note: An ELSE assigns an ESI ID for each wholesale point of delivery, and no ESI ID goes to an individual Customer behind it. [e29]
  - to: mass-transition
    type: related
    note: Transition of ESI IDs (from one CR to a Provider of Last Resort or designated CR, or between TDSPs) in quantities and on a time frame not completely supported by standard transactions is handled as a Mass Transition. [e24]
  - to: market-information-system
    type: related
    note: Market Participants can verify the Service Address for a Service Delivery Point through the MIS Find ESI ID function. [e30]
  - to: settlement-statements
    type: related
    note: ERCOT provides ESI ID service history daily, and a Market Participant may seek correction and resettlement if a data variance is unresolved before True-Up Settlement. [e27][e28]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Electric Service Identifier (ESI ID)"
    quote: "The basic identifier assigned to each Service Delivery Point used in the registration and settlement systems managed by ERCOT or another Independent Organization."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Service Delivery Point"
    quote: "The specific point on the system where electricity flows from the TSP or DSP to a Customer."
  - id: e3
    source: np-15
    locator: "Section 15.4(1)"
    quote: "Each Transmission and/or Distribution Service Provider (TDSP) Service Delivery Point shall have a unique number within Texas. Once this unique number has been created and assigned to a Service Delivery Point, it shall not be re-issued, even in the event of termination of the associated point-of-service."
  - id: e4
    source: np-15
    locator: "Section 15.4.1(3)"
    quote: "It is the TDSP’s responsibility to create, assign, maintain and retire, as necessary, an ESI ID to each Service Delivery Point in its service area."
  - id: e5
    source: np-15
    locator: "Section 15.4.1(2)"
    quote: "Allowable alphanumeric characters are 0-9 and A-Z. The total length of the ESI ID cannot exceed 36 alphanumeric characters."
  - id: e6
    source: puct-25-5
    locator: "Section 25.5, definition of REP of record"
    quote: "There can be no more than one REP of record assigned to an ESI ID at any specific point in time."
  - id: e7
    source: np-15
    locator: "Section 15.1.1(1)"
    quote: "The CR shall submit a Switch Request to ERCOT using the 814_01, Switch Request. The Switch Request shall include, at a minimum, the five-digit zip code and an ESI ID."
  - id: e8
    source: np-18
    locator: "Section 18.1(1)"
    quote: "The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs)."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Premise"
    quote: "A Service Delivery Point or combination of Service Delivery Points that is assigned a single ESI ID for Settlement and registration."
  - id: e10
    source: np-15
    locator: "Section 15.4(2)"
    quote: "Notwithstanding the foregoing, in those situations where an ESI ID has been inadvertently placed into inactive status and upon notification from the responsible TDSP, ERCOT shall re-instate the ESI ID for that Service Delivery Point."
  - id: e11
    source: np-15
    locator: "Section 15.4.1(1), Electric Service Identifier Format"
    quote: "10xxxxxyyy..yy Where: 10 Represents a placeholder for future use; xxxxx Is the five-digit Department of Energy identification code for the assigning TDSP; and yyy..yy Is up to 29 alphanumeric characters assigned by the TDSP."
  - id: e12
    source: np-15
    locator: "Section 15.4.1.1(1), Assignment of ESI IDs to Unmetered Service Delivery Points"
    quote: >-
      In general, each unmetered Service Delivery Point will be assigned an ESI ID corresponding to the point of delivery from the TDSP system to the Customer or Load. The TDSP may, however, aggregate unmetered Service Delivery Points into one ESI ID provided they meet all of the following conditions: (a) The Service Delivery Points are owned by the same Customer and are located at the same physical location (an exception is allowed for governmental unmetered loads such as street lighting and traffic signals); (b) All Service Delivery Points have the same Usage Profile; (c) All Service Delivery Points have the same voltage and are located in the same Unaccounted for Energy (UFE) zone and same Load Zone; and (d) The TDSP’s tariffs allow aggregation of unmetered Service Delivery Points.
  - id: e13
    source: np-15
    locator: "Section 15.4.1.2(1), Assignment of ESI IDs to metered Service Delivery Points"
    quote: >-
      In general, each metered Service Delivery Point will be assigned an ESI ID corresponding to an existing billing meter. However, the TDSP may aggregate metered Service Delivery Points into one ESI ID provided they meet all the following conditions: (a) The Service Delivery Points are owned by the same Customer and are at the same Service Address; (b) All Service Delivery Points have the same Load Profile or all Service Delivery Points have Interval Data Recorders (IDRs); (c) All Service Delivery Points have the same voltage and are located in the same UFE zone and same Load Zone; and (d) The TDSP’s tariffs allow aggregation of separately metered Service Delivery Points.
  - id: e14
    source: np-15
    locator: "Section 15.4.1.2(3)"
    quote: >-
      A TDSP may not assign an ESI ID to submeters where the energy consumption for those meters is included in another ESI ID. This does not prohibit the TDSP from tracking these submeters internally or charging for submetering services via the Competitive Retailer (CR). Notwithstanding the foregoing, TDSPs using the practice of subtract metering shall assign an ESI ID to both the master meter and the subtract meter and report adjusted consumption accordingly.
  - id: e15
    source: np-15
    locator: "Section 15.4.1.3, Splitting a Service Delivery Point into Multiple ESI IDs"
    quote: "A Service Delivery Point with Load above one MW may split the actual meter into up to four virtual meters which would each have its own ESI ID. This process of splitting the meter into separate ESI IDs shall be performed in accordance with the requirements of Section 10, Metering. Reissuing and reassignment of ESI IDs is prohibited."
  - id: e16
    source: np-15
    locator: "Section 15.4.1.4(2), New Electric Service Identifier Creation"
    quote: "The TDSP will send ESI ID information using the 814_20, ESI ID Maintenance Request. ERCOT will verify that this transaction meets Texas Standard Electronic Transaction (TX SET) specifications. ERCOT will respond to the TDSP within one Retail Business Hour, with acceptance or rejection of these transactions using the 814_21, ESI ID Maintenance Response."
  - id: e17
    source: np-15
    locator: "Section 15.4.1.4(3)"
    quote: "The TDSP must receive an accepted 814_21 from ERCOT prior to initiating electric service pursuant to Section 15.1.4, Beginning Service (New Construction Completed and Move Ins)."
  - id: e18
    source: np-15
    locator: "Section 15.4.1.5(1), Electric Service Identifier Maintenance"
    quote: "The TDSP will notify ERCOT of any changes in information related to an ESI ID for which it is responsible. The TDSP will send changes to ERCOT using the 814_20, ESI ID Maintenance Request. ERCOT will respond to the TDSP within four Retail Business Hours, using the 814_21, ESI ID Maintenance Response. In addition, ERCOT will send all affected CRs notice of the changes using the 814_20 transaction."
  - id: e19
    source: np-15
    locator: "Section 15.4.1.4(2), required data elements"
    quote: >-
      At least the following data elements are required to be sent in the 814_20 transaction: (a) ESI ID; (b) Service Address; city, state, zip, county; (c) Load Profile Type; (d) Meter reading cycle or meter cycle by day of month; (e) Station ID; (f) Distribution Loss Factor (DLF) code; and (g) Premise type.
  - id: e20
    source: np-15
    locator: "Section 15.1.1.7(3), Completion of Switch Request and Effective Switch Date"
    quote: "Switches shall become effective at 0000 (midnight) on the actual date of the effectuating meter read. The new CR may request a special meter read (including a profile-estimated meter read or interval meter calculation as allowed), in accordance with the TDSP’s tariff. For a special meter read, the switch is effective at 0000 (midnight) the day of the special meter read. During the switch process, the Customer will continue to be served by its current CR."
  - id: e21
    source: np-15
    locator: "Section 15.1.1(1), Submission of a Switch Request"
    quote: "The First Available Switch Date (FASD) is the day received by ERCOT unless received on a Sunday or an ERCOT holiday. If received on a Sunday or an ERCOT holiday, the FASD will be calculated as the next day that is not a Sunday or an ERCOT holiday."
  - id: e22
    source: np-15
    locator: "Section 15.1.4.7.1(1), Standard Move-In Requests"
    quote: "A standard Move-In Request is effectuated on the period start date in the 867_04, Initial Meter Read, which shall be the date requested in the 814_16, Move In Request, provided that the 814_03, Enrollment Notification Request, was received by the TDSP by 1700 at least two Retail Business Days prior to the requested date."
  - id: e23
    source: np-15
    locator: "Section 15.1.4.7.2(1), Same Day Move-In Requests"
    quote: "A same day Move-In Request is effectuated on the period start date in the 867_04, Initial Meter Read, which shall be the date requested in the 814_16, Move In Request, provided that the request was received by the TDSP by 1700 on the date requested. If the TDSP does not receive the same day move in by 1700, the move in will be completed no later than the next Retail Business Day."
  - id: e24
    source: np-15
    locator: "Section 15.1.3(1), Transition Process"
    quote: "Certain circumstances may arise during the course of business in the Texas retail electric market that may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes."
  - id: e25
    source: rmg-07
    locator: "Section 7.9(1)(a)(i), No Retail Electric Provider of Record or Left in Hot"
    quote: "Prepare a No REP of Record List on a monthly basis, identifying all ESI IDs with consumption equal to or greater than 150 kilowatt hours (kWh) in a single meter reading cycle, but no REP of record in the TDSP's customer information system;"
  - id: e26
    source: rmg-07
    locator: "Section 7.9(3)"
    quote: "Pursuant to paragraph (i) of P.U.C. SUBST. R. 25.489, the TDSP may disconnect an ESI ID with no REP of record no earlier than ten days after the Customer receives the TDSP's notification as required by paragraph (g) of P.U.C. SUBST. R. 25.489. A TDSP shall not disconnect any ESI ID that has been claimed by a REP."
  - id: e27
    source: np-11
    locator: "Section 11.3.1, Electric Service Identifier Service History and Usage"
    quote: "On a daily basis, ERCOT shall provide incremental updates to Electric Service Identifier (ESI ID) service history and usage information to Load Serving Entities (LSEs), Meter Reading Entities (MREs), and Transmission Service Providers (TSPs) and/or Distribution Service Providers (DSPs). ESI ID service history includes ESI ID relationships and ESI ID characteristics."
  - id: e28
    source: rmg-07
    locator: "Section 7.2.3(2), MarkeTrak Data Extract Variance Processes"
    quote: "If a DEV issue, submitted according to the MarkeTrak Users Guide is not resolved prior to the True-Up Settlement, a Market Participant may seek correction of ESI ID service history and usage information and resettlement pursuant to the provisions of Protocol Section 20, Alternative Dispute Resolution Procedure and Procedure for Return of Settlement Funds."
  - id: e29
    source: np-16
    locator: "Section 16.3(5), Registration of Load Serving Entities"
    quote: "An ELSE shall assign an Electric Service Identifier (ESI ID) for each wholesale point of delivery as specified in these Protocols. An ESI ID shall not be assigned to any individual Customer behind an ELSE wholesale point of delivery."
  - id: e30
    source: np-15
    locator: "Section 15.2.1, Find ESI ID Function on the Market Information System"
    quote: "Market Participants can obtain information to verify the Service Address for a Service Delivery Point using the Find ESI ID function on the Market Information System (MIS) Secure Area."
  - id: e31
    source: rmg-07
    locator: "Section 7.11.6(3)(e), TDSP Transition Process Narrative"
    quote: "(i) Upon completion of the move out for the existing CR, the losing TDSP is responsible for deactivation and retirement of the old ESI ID; and"
  - id: e32
    source: rmg-07
    locator: "Section 7.11.6(3)(a), TDSP Transition Process Narrative"
    quote: "Gaining TDSP will change the ESI IDs for the Premises acquired. When a partial TDSP transition event takes place, such partial TDSP transition requires the gaining TDSP to create new and unique ESI IDs for all ESI IDs involved in the transition;"
  - id: e33
    source: rmg-07
    locator: "Section 7.2(2)(b), Market Synchronization"
    quote: "Potential Load Loss Report – A daily report notifying CRs of potential Customer loss based on ERCOT’s receipt of the TDSP’s accepted response to a Switch or Move-In Request."
---

## Definition

An ESI ID is the basic identifier assigned to each Service Delivery Point and used in the registration and settlement systems managed by ERCOT. [e1] A Service Delivery Point is the specific point where electricity flows from the TSP or DSP to a customer. [e2]

## How it works

Each Service Delivery Point has a number unique within Texas. Once created and assigned it is not re-issued, even if the point of service is terminated. [e3] The TDSP creates, assigns, maintains and retires the ESI ID for each point in its service area. [e4] The ESI ID can use only 0-9 and A-Z and cannot exceed 36 characters. [e5] The format is "10", then the five-digit Department of Energy code for the assigning TDSP, then up to 29 alphanumeric characters assigned by the TDSP; the "10" is a placeholder for future use. [e11]

A Premise is a Service Delivery Point, or a combination of them, assigned a single ESI ID for settlement and registration. [e9] Retail processes key off it: a switch request must include an ESI ID and zip code, and each ESI ID has at most one REP of record at a time. [e7][e6]

### Creation and maintenance

To create an ESI ID, the TDSP sends an 814_20 ESI ID Maintenance Request; ERCOT checks it against TX SET specifications and answers within one Retail Business Hour with an 814_21 accept or reject. [e16] The 814_20 must carry at least ESI ID, service address, load profile type, meter reading cycle, station ID, DLF code and premise type. [e19] The TDSP needs an accepted 814_21 before it initiates electric service. [e17]

For changes, the TDSP sends an 814_20, ERCOT answers within four Retail Business Hours with an 814_21, and ERCOT notifies all affected CRs with an 814_20. [e18]

### Aggregation, submeters and splitting

Unmetered points are normally one ESI ID per point of delivery. The TDSP may aggregate them only if all four conditions hold: same Customer and same physical location (with an exception for governmental unmetered loads such as street lighting), same Usage Profile, same voltage in the same UFE zone and Load Zone, and TDSP tariffs that allow it. [e12]

Metered points normally get one ESI ID per existing billing meter. Aggregation is allowed only for the same Customer at the same Service Address, with the same Load Profile (or all with IDRs), the same voltage, UFE zone and Load Zone, and a tariff that allows it. [e13] A TDSP may not assign an ESI ID to submeters whose consumption is included in another ESI ID, except that with subtract metering both the master and subtract meters get ESI IDs and consumption is reported adjusted. [e14] Going the other way, a point with Load above one MW may split its meter into up to four virtual meters, each with its own ESI ID, and reissuing or reassigning ESI IDs is prohibited. [e15]

### Inactive status and reinstatement

If an ESI ID has been inadvertently placed in inactive status, ERCOT re-instates it on notification from the responsible TDSP. [e10] That is the only exception to "never reissued" that Section 15.4 states, and it is a reinstatement of the same ESI ID rather than a new one. [e3][e10]

## ERCOT context

The retail market requires a 15-minute Settlement Interval, and Load Profiling is a way of estimating and allocating 15-minute Load for ESI IDs. [e8]

ERCOT sends LSEs, MREs and TSPs/DSPs daily incremental updates to ESI ID service history, which includes ESI ID relationships and characteristics. [e27] If a data variance is not resolved before True-Up Settlement, a Market Participant may seek correction and resettlement under Protocol Section 20. [e28] Market Participants can verify a service address through the MIS Find ESI ID function. [e30]

### The ESI ID in retail transactions

A switch is effective at 0000 on the date of the effectuating meter read, and the customer keeps being served by its current CR during the process; the First Available Switch Date is the day ERCOT receives the request unless it is a Sunday or ERCOT holiday. [e20][e21] A standard move-in takes the requested date provided the TDSP receives the 814_03 by 1700 at least two Retail Business Days earlier; a same-day move-in needs receipt by 1700 on the requested date or completes by the next Retail Business Day. [e22][e23] The daily Potential Load Loss Report notifies a CR that is the current REP of record for an ESI ID of a pending Switch or Move-In Request, where the scheduling transaction for the pending order has been received outside the two Business Day window. [e33]

### ESI IDs with no REP

Each month the TDSP lists ESI IDs with consumption of at least 150 kWh in a single meter reading cycle but no REP of record in its customer information system. [e25] It may disconnect such an ESI ID no earlier than ten days after notice, and may not disconnect one that a REP has claimed. [e26]

### ESI IDs at ELSE and TDSP boundaries

An ELSE assigns an ESI ID for each wholesale point of delivery, and none goes to an individual Customer behind it. [e29] In a partial TDSP transition the gaining TDSP creates new and unique ESI IDs for all ESI IDs involved. [e32] The losing TDSP deactivates and retires the old ESI ID after the existing CR's move out. [e31] The Protocols provide a transition process for moving ESI IDs from one CR to a Provider of Last Resort or designated CR, or from one TDSP to another, in quantities and on a time frame that is not completely supported by standard market transactions or business processes. [e24]

## Key facts

- Unique statewide and never re-issued; a wrongly inactivated ESI ID is re-instated, not re-issued. [e3][e10]
- Up to 36 alphanumeric characters: "10" placeholder, five-digit DOE code of the TDSP, up to 29 characters. [e5][e11]
- Assigned and maintained by the TDSP via 814_20, with an ERCOT 814_21 response. [e4][e16][e18]
- One REP of record per ESI ID at any time. [e6]
- Metered aggregation needs the same Customer, same Service Address, same voltage, UFE zone and Load Zone, and tariff permission. [e13]
- A point above one MW may split into up to four virtual-meter ESI IDs. [e15]

## Say it like this

(Guidance) The ESI ID is the basic identifier assigned to each Service Delivery Point. It is used in registration and settlement, the TDSP creates it, and a switch request must include one. [e1][e4][e7]

## Common confusion

(Guidance) An ESI ID is a delivery point identifier. [e1] A premise may combine more than one delivery point under a single ESI ID. [e9] It is also not a meter number: a meter can be split into several ESI IDs above one MW, and several meters can be aggregated into one under the conditions above. [e13][e15]

## Questions

### Who creates an ESI ID?

The TDSP serving the Service Delivery Point. [e4]

### Can an ESI ID be reused after service at the point ends?

No. The number is not re-issued even if the point of service ends. [e3] The one exception in Section 15.4 is reinstatement of an ESI ID inadvertently made inactive. [e10]

### Why must the TDSP get an accepted 814_21 before starting service?

The Protocols make the accepted ESI ID Maintenance Response (814_21) a precondition to initiating service. [e17] The Protocols do not state a reason; the ESI ID is the identifier used in the registration and settlement systems. [e1]

### Why does the Protocol restrict aggregating metered points into one ESI ID?

Aggregation requires the same Customer, same address, same Load Profile (or all IDRs), and the same voltage, UFE zone and Load Zone, and a tariff that allows it. [e13] The Protocols do not state why; they say Load Profiling estimates and allocates 15-minute Load for ESI IDs. [e8]

### What if a TDSP is acquired and some premises move to a new TDSP?

The gaining TDSP creates new and unique ESI IDs for all ESI IDs in a partial transition, and the losing TDSP retires the old ones after the CR's move out. [e32][e31]

### What if a premise is consuming power but no REP is assigned?

The TDSP lists ESI IDs with at least 150 kWh and no REP of record, REPs can claim them, and unclaimed ones may be disconnected after notice no earlier than ten days. [e25][e26]

## Scenarios

### A customer's REP loses the account to a switch. What date does the load move?

- The switch is effective at 0000 on the date of the effectuating meter read; the customer stays with the current CR until then. [e20]
- The current REP of record is notified in the Potential Load Loss Report when the pending order's scheduling transaction was received outside the two Business Day window. [e33]

## Open items

- The ESI ID lifecycle states other than inactive (for example de-energized, retired) were not defined in a saved source; only inactive and reinstatement appear in Section 15.4.
- The meaning of "10" as a placeholder is quoted as written; no source says what it will be used for.
- The mapping between a Premise (np-02 definition) and metered or unmetered aggregation was not explained beyond these sections.
