---
id: ams-meters
name: AMS Smart Meter Data
aliases: [AMS, advanced meter, smart meter, interval data, IDR]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: esi-id
    type: related
    note: See the esi-id topic for how premises are identified.
  - to: load-profiling
    type: contrasts-with
    note: Profiles estimate 15-minute load where interval data is not available; advanced meters supply actual intervals. [e6]
  - to: tdsp
    type: related
    note: TDSPs send the interval data from advanced meters to ERCOT. [e3]
  - to: rep
    type: related
    note: A Market Participant can obtain advanced meter data from ERCOT on certified request. [e5]
  - to: tx-set
    type: related
    note: Advanced meter interval data is submitted to ERCOT in an ERCOT-specified file format via NAESB. [e3]
  - to: settlement-statements
    type: used-in
    note: Settlement Quality Meter Data feeds ERCOT settlement. [e4]
  - to: ufe
    type: related
    note: Where a premise has an AMS meter measuring excess flow into ERCOT in 15-minute intervals, the actual interval data is used for the excess-generation load reduction. [e19]
  - to: market-information-system
    type: used-in
    note: ERCOT makes advanced meter data available to a Market Participant through the MIS Certified Area. [e5]
  - to: dgr-sodg
    type: related
    note: Behind-the-meter distributed generation adjustments depend on whether an AMS meter measures export in 15-minute intervals. [e19]
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
    locator: "Section 10.12.3(1)(b), ERCOT Distribution of Settlement Quality Meter Data"
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
  - id: e9
    source: puct-25-130
    locator: "16 TAC Section 25.130(g)(1), AMS features (A)-(D)"
    quote: "An AMS must provide or support the following minimum system features: (A) automated or remote meter reading; (B) two-way communications between the meter and the electric utility; (C) remote disconnection and reconnection capability for meters rated at or below 200 amps. (D) time-stamped meter data;"
  - id: e10
    source: puct-25-130
    locator: "16 TAC Section 25.130(g)(1)(E)"
    quote: "access to customer usage data by the customer, the customer’s REP of record, and entities authorized by the customer provided that 15-minute interval or shorter data from the electric utility’s AMS must be transmitted to the electric utility’s or a group of electric utilities’ web portal on a day-after basis;"
  - id: e11
    source: puct-25-130
    locator: "16 TAC Section 25.130(c)(5), definition of Web portal"
    quote: "The website made available on the internet in compliance with this section by an electric utility or a group of electric utilities through which secure, read-only access to AMS usage data is made available to the customer, the customer’s REP of record, and entities authorized by the customer."
  - id: e12
    source: puct-25-130
    locator: "16 TAC Section 25.130(g)(2), waivers"
    quote: "A waiver from any of the requirements of paragraph (1) of this subsection may be granted by the commission if it would be uneconomic or technically infeasible to implement or there is an adequate substitute for that particular requirement. The electric utility must meet its burden of proof in its waiver request."
  - id: e13
    source: puct-25-130
    locator: "16 TAC Section 25.130(h)(2), Discretionary Meter Services (effective 5/11/20 per the saved copy)"
    quote: "The REP must pay the reasonable differential cost for the enhanced advanced meters or features and system changes required by the electric utility to offer those meters or features."
  - id: e14
    source: np-10
    locator: "Section 10.3.3.3(1)(a)(i)-(ii), Submission of Settlement Quality Meter Data to ERCOT"
    quote: >-
      (i) The monthly non-interval total consumption and demand (if applicable) values for these ESI IDs shall be provided to ERCOT and LSEs using the appropriate Texas Standard Electronic Transactions (TX SETs) in order to effectuate the registration transactions outlined in Section 15, Customer Registration.
      (ii) These non-interval total consumption and demand values will not be used for Settlement.
  - id: e15
    source: np-10
    locator: "Section 10.3.3.3(2), Submission of Settlement Quality Meter Data to ERCOT"
    quote: >-
      Each TSP or DSP shall ensure that consumption meter data submitted to ERCOT is in intervals of:
      (a) 15-minutes for those ESI IDs and RIDs served by IDRs; and
      (b) Monthly or on an ERCOT-approved meter reading cycle for non-IDRs.
  - id: e16
    source: np-18
    locator: "Section 18.7(1)(a)-(c), Transition of Interval Data Recorder Meter to AMS Profile Type"
    quote: >-
      At a Transmission and/or Distribution Service Provider’s (TDSP’s) discretion, or upon a Customer’s request and TDSP’s approval, a TDSP shall:
      (a) Utilize a provisioned Advanced Meter or similarly functional meter for Customer’s Premise;
      (b) Assign the appropriate Load Profile, other than one with a BUSIDRRQ Profile Type Code, to Premise’s Electric Service Identifier (ESI ID);
      (c) Submit Settlement Quality Meter Data, which will be used for Settlement, using the ERCOT specified file format for the interval data only in accordance with Retail Market Guide Section 7.15, Advanced Meter Interval Data File Format and Submission;
  - id: e17
    source: np-18
    locator: "Section 18.7(1)(d)-(e)"
    quote: >-
      If the ESI ID will be transitioning to an Advanced Metering System (AMS) Profile Type other than BUSLRG or BUSLRGDG, submit a MarkeTrak issue to notify ERCOT; and
      (e) Submit the appropriate Texas Standard Electronic Transaction (TX SET) transaction notifying the Competitive Retailer (CR) of the Load Profile change.
  - id: e18
    source: np-11
    locator: "Section 11.4.1, Estimation of Missing Data, paragraph (1)"
    quote: "The Data Aggregation System (DAS) will perform estimation of missing interval and non-interval retail Load meter consumption data for use in Settlement when actual meter consumption data is unavailable."
  - id: e19
    source: np-11
    locator: "Section 11.4.4.2(3), Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation"
    quote: "The excess generation adjustments for ESI IDs, which have UDG made up of PV or wind generation behind the meter and that have an Advanced Metering System (AMS) integrated meter or Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ IDR that measures the excess energy flow into the ERCOT System in 15-minute intervals, shall be determined using the actual 15-minute interval data, if available."
  - id: e20
    source: np-11
    locator: "Section 11.4.3(1), Interval Consumption Data Estimation"
    quote: "ERCOT will estimate all ESI IDs with Interval Data Recorders (IDRs) for which consumption data has not been received for the Operating Day. The method for estimating interval data for ESI IDs with IDR Meters is a “Weather Response Informed Proxy Day” technique."
  - id: e21
    source: np-18
    locator: "Section 18.6.1(2)-(3), Interval Data Recorder Mandatory Installation Requirements"
    quote: >-
      All non-metered Loads such as street lighting, regardless of the aggregation level, shall not be required to install IDRs under the IDR Mandatory Installation Requirements. These Loads shall be settled using Load Profiles.
      (3) Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) that opt-in to Customer Choice must install IDRs at all Premises subject to the IDR Mandatory Installation Requirements for metering prior to the effective date of their participation in the testing and integration requirements of ERCOT systems for Customer Choice.
  - id: e22
    source: np-10
    locator: "Section 10.12.3(1)(c), ERCOT Distribution of Settlement Quality Meter Data"
    quote: "On Request – A Market Participant may submit an electronic request via the MIS Certified Area for specific meter consumption data. ERCOT will receive and validate the request and, if appropriate, automatically forward the appropriate information to the Market Participant."
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
