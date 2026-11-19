---
id: esi-id
name: ESI ID
aliases: [ESI ID, ESIID, Electric Service Identifier, premise, service delivery point ID]
kind: concept
domain: structure
level: 1
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
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
---

## Definition

An ESI ID is the basic identifier assigned to each Service Delivery Point and used in the registration and settlement systems managed by ERCOT. [e1] A Service Delivery Point is the specific point where electricity flows from the TSP or DSP to a customer. [e2]

## How it works

Each Service Delivery Point has a number unique within Texas. Once created and assigned it is not re-issued, even if the point of service is terminated. [e3] The TDSP creates, assigns, maintains and retires the ESI ID for each point in its service area. [e4] The ESI ID can use only 0-9 and A-Z and cannot exceed 36 characters. [e5]

A Premise is a Service Delivery Point, or a combination of them, assigned a single ESI ID for settlement and registration. [e9] Retail processes key off it: a switch request must include an ESI ID and zip code, and each ESI ID has at most one REP of record at a time. [e7][e6]

## ERCOT context

The retail market requires a 15-minute Settlement Interval, and Load Profiling is a way of estimating and allocating 15-minute Load for ESI IDs. [e8]

## Key facts

- Unique statewide and never re-issued. [e3]
- Up to 36 alphanumeric characters. [e5]
- Assigned and maintained by the TDSP. [e4]
- One REP of record per ESI ID at any time. [e6]

## Say it like this

(Guidance) The ESI ID is the basic identifier assigned to each Service Delivery Point. It is used in registration and settlement, and a switch request must include one. [e1][e7]

## Common confusion

(Guidance) An ESI ID is a delivery point identifier. [e1] A premise may combine more than one delivery point under a single ESI ID. [e9]

## Questions

### Who creates an ESI ID?

The TDSP serving the Service Delivery Point. [e4]

### Can an ESI ID be reused after service at the point ends?

No. The number is not re-issued even if the point of service ends. [e3]

## Open items

- Deeper pass: aggregation rules for metered and unmetered points (15.4.1.1 and 15.4.1.2) and ESI ID inactive/reinstatement rules.
- The meaning of the digits in the ESI ID format was not summarized.
