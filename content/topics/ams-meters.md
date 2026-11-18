---
id: ams-meters
name: AMS Smart Meter Data
aliases: [AMS, advanced meter, smart meter, interval data, IDR]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: esi-id
    type: related
    note: Meter data is submitted and settled per ESI ID. [e3]
  - to: load-profiling
    type: contrasts-with
    note: Profiles estimate 15-minute load where interval data is not available; advanced meters supply actual intervals. [e6]
  - to: tdsp
    type: related
    note: TDSPs send the interval data from advanced meters to ERCOT. [e3]
  - to: rep
    type: related
    note: A REP can obtain advanced meter data from ERCOT on certified request. [e5]
  - to: tx-set
    type: related
    note: Advanced meter interval data uses a separate ERCOT file format, outside the TX SET transactions. [e3]
  - to: settlement-statements
    type: used-in
    note: Settlement Quality Meter Data feeds ERCOT settlement. [e4]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Advanced Metering System (AMS)"
    quote: "A system, including Advanced Meters and the associated hardware, software, and communications devices, that collects time-differentiated energy usage and is deployed pursuant to P.U.C. SUBST. R. 25.130, Advanced Metering."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Interval Data Recorder (IDR)"
    quote: "A metering device that is capable of recording energy in each Settlement Interval under Section 9, Settlement and Billing, and Section 10, Metering."
  - id: e3
    source: np-19
    locator: "Section 19.7(1)"
    quote: "Transmission and/or Distribution Service Providers (TDSPs) will provide 15-minute interval data to ERCOT from provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ Interval Data Recorders (IDRs) using an ERCOT specified file format submitted via North American Energy Standards Board (NAESB) on at least a monthly basis."
  - id: e4
    source: np-10
    locator: "Section 10.3.3.3(1)(a)"
    quote: "For provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ IDRs, Settlement Quality Meter Data will be submitted using an ERCOT specified file format for the interval data only, which will be used for Settlement."
  - id: e5
    source: np-10
    locator: "Section 10.3.3.2 area, Advanced Meter data availability (b)"
    quote: "Whenever a TSP or DSP submits meter data to ERCOT via an ERCOT specified file format for Advanced Meters, upon certified request by a Market Participant, ERCOT shall make that data available to the Market Participant via Market Information System (MIS) Certified Area."
  - id: e6
    source: np-18
    locator: "Section 18.1(1)"
    quote: "This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process."
  - id: e7
    source: pura-39
    locator: "PURA Sec. 39.107(b)"
    quote: "All meter data, including all data generated, provided, or otherwise made available, by advanced meters and meter information networks, shall belong to a customer, including data used to calculate charges for service, historical load data, and any other proprietary customer information."
  - id: e8
    source: np-18
    locator: "Section 18.6.1(1)"
    quote: "Interval Data Recorders (IDRs) are required and shall be installed and utilized for Settlement of Premises having either: (a) A peak Demand greater than 700 kW (or 700 kVA in CenterPoint Energy’s service territory); or (b) Service provided at transmission voltage (above 60 kV)."
---

## Definition

The Advanced Metering System is a system of advanced meters plus the hardware, software and communications devices that collects time-differentiated energy usage, deployed under PUCT Substantive Rule 25.130. [e1]

## How it works

TDSPs provide 15-minute interval data from provisioned Advanced Meters to ERCOT in an ERCOT-specified file format via NAESB, at least monthly. [e3] That interval data is submitted as Settlement Quality Meter Data and is what is used for settlement. [e4] Upon certified request, ERCOT makes the data available to a Market Participant through the MIS Certified Area. [e5]

Advanced meters sit alongside Interval Data Recorders, devices able to record energy in each Settlement Interval. [e2] IDRs are required for premises with peak demand above 700 kW (700 kVA in CenterPoint's territory) or service at transmission voltage above 60 kV. [e8] Where ERCOT does not receive 15-minute data, load profiles estimate it instead. [e6]

## ERCOT context

By statute, all meter data produced by advanced meters and meter information networks belongs to the customer, including data used to calculate charges and historical load data. [e7]

## Key facts

- Advanced meter data reaches ERCOT as 15-minute intervals at least monthly, via an ERCOT-specified file. [e3]
- It is used for settlement as Settlement Quality Meter Data. [e4]
- Customers own their meter data under PURA. [e7]

## Say it like this

(Guidance) Smart meters give ERCOT actual 15-minute usage by premise, so settlement uses real intervals instead of estimated profile shapes. The data belongs to the customer.

## Common confusion

(Guidance) An advanced meter and an IDR are not the same thing in the Protocols: an IDR is any device recording each Settlement Interval, and certain larger premises are required to have one. [e2][e8]

## Questions

### Why does ERCOT need smart meter data?

Settlement is in 15-minute intervals, and interval data from advanced meters is submitted as Settlement Quality Meter Data to be used for settlement, replacing profile estimates. [e4][e6]

### Who owns smart meter data?

The customer, under PURA 39.107. [e7]

## Open items

- Deeper pass: the percentage of ESI IDs with AMS meters and the Smart Meter Texas portal were not in the sources read.
- Deeper pass: IDR thresholds (18.6.1), IDR-to-AMS profile transition (18.7), and validation/estimation of interval data in Section 11.
- Deeper pass: PUCT Substantive Rule 25.130 is not among the saved sources.
