# Audit packet: AMS Smart Meter Data (ams-meters)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Advanced Metering System (AMS) · text copy line 61 · heading above: 2.1 DEFINITIONS

BEFORE: …trofitted meter that functions as part of a system that includes such meters and the associated hardware, software, and communications devices, that collects time-differentiated energy usage, and that is deployed pursuant to P.U.C. SUBST. R. 25.130, Advanced Metering. Advanced Metering System (AMS) 
QUOTE: A system, including Advanced Meters and the associated hardware, software, and communications devices, that collects time-differentiated energy usage and is deployed pursuant to P.U.C. SUBST. R. 25.130, Advanced Metering.
AFTER:  Advisory The second of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition. Affiliate (1) An Entity that directly or indirectly owns or holds at least 5% of the voting securities of a Market Participant; or (2) An Entity in a chain of successive ownership…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Interval Data Recorder (IDR) · text copy line 1289

BEFORE: …ider The electric utility, municipally owned utility, or electric cooperative that owns and operates the facilities necessary to interconnect the Interconnecting Large Load Entity (ILLE) to the ERCOT system. Intermittent Renewable Resource (IRR) (see Resource Attribute) Interval Data Recorder (IDR) 
QUOTE: A metering device that is capable of recording energy in each Settlement Interval under Section 9, Settlement and Billing, and Section 10, Metering.
AFTER:  Interval Data Recorder (IDR) Meter An IDR where the ESI ID is required to be assigned a BUSIDRRQ Load Profile Type code and data is submitted in accordance with Section 10.3.3.3, Submission of Settlement Quality Meter Data to ERCOT. Interval Data Recorder (IDR) Meter Data Threshold The percentage o…

### e3 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.7(1) · text copy line 551 · heading above: 19.7 Advanced Meter Interval Data Format and Submission

BEFORE: … (TX SET) recognizes all characters within the basic character set. Further clarification and additional character set validations are available within each Texas SET Implementation Guide that is located on the ERCOT website. 19.6 RESERVED 19.7 Advanced Meter Interval Data Format and Submission (1) 
QUOTE: Transmission and/or Distribution Service Providers (TDSPs) will provide 15-minute interval data to ERCOT from provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ Interval Data Recorders (IDRs) using an ERCOT specified file format submitted via North American Energy Standards Board (NAESB) on at least a monthly basis.
AFTER:  19.8 Retail Market Testing (1) The Texas Standard Electronic Transaction (TX SET) Working Group works with the ERCOT flight administrator to develop and maintain a test plan and related testing standards for all retail transactional changes within the ERCOT market. (2) Market Participants may be re…

### e4 · `np-10` · tier 1 · ERCOT Nodal Protocols, Section 10: Metering (effective 2026-06-01)
locator: Section 10.3.3.3(1)(a) · text copy line 652 · heading above: 10.3.3.3 Submission of Settlement Quality Meter Data to ERCOT

BEFORE: …ettle all ESI IDs in the same manner. (2) ERCOT shall not receive or process the IDR data associated with the master meter. 10.3.3.3 Submission of Settlement Quality Meter Data to ERCOT (1) Settlement Quality Meter Data shall be submitted to ERCOT on a periodic cycle, but no later than monthly: (a) 
QUOTE: For provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ IDRs, Settlement Quality Meter Data will be submitted using an ERCOT specified file format for the interval data only, which will be used for Settlement.
AFTER:  (i) The monthly non-interval total consumption and demand (if applicable) values for these ESI IDs shall be provided to ERCOT and LSEs using the appropriate Texas Standard Electronic Transactions (TX SETs) in order to effectuate the registration transactions outlined in Section 15, Customer Registr…

### e5 · `np-10` · tier 1 · ERCOT Nodal Protocols, Section 10: Metering (effective 2026-06-01)
locator: Section 10.3.3.2 area, Advanced Meter data availability (b) · text copy line 1093 · heading above: 10.12.3 ERCOT Distribution of Settlement Quality Meter Data

BEFORE: …c Service Identifiers (ESI IDs) to the Competitive Retailer (CR) indicated in the transaction. ERCOT relies upon the TSP or DSP to ensure that the CR included in the transaction is the appropriate CR for the meter data timeframe. ERCOT does not further validate the accuracy of the CR indicated. (b) 
QUOTE: Whenever a TSP or DSP submits meter data to ERCOT via an ERCOT specified file format for Advanced Meters, upon certified request by a Market Participant, ERCOT shall make that data available to the Market Participant via Market Information System (MIS) Certified Area.
AFTER:  (c) On Request - A Market Participant may submit an electronic request via the MIS Certified Area for specific meter consumption data. ERCOT will receive and validate the request and, if appropriate, automatically forward the appropriate information to the Market Participant. 10.13 Meter Identifica…

### e6 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.1(1) · text copy line 73 · heading above: 18.1 Overview

BEFORE: …Transition of Interval Data Recorder Meter to AMS Profile Type 18-8 Load Profiling 18.1 Overview (1) The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). 
QUOTE: This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process.
AFTER:  18.2 Methodology (1) A Load Profiling Methodology is the fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. All Load Profiles shall conform to the …

### e7 · `pura-39` · tier 1 · Texas Utilities Code (PURA) Chapter 39, Restructuring of Electric Utility Industry
locator: PURA Sec. 39.107(b) · text copy line 58

BEFORE: … and generally available in the market and provided that the retail electric provider pays the differential cost of such a meter or accessory. Metering and billing services provided to residential customers shall be governed by the customer safeguards adopted by the commission under Section 39.101. 
QUOTE: All meter data, including all data generated, provided, or otherwise made available, by advanced meters and meter information networks, shall belong to a customer, including data used to calculate charges for service, historical load data, and any other proprietary customer information.
AFTER:  A customer may authorize its data to be provided to one or more retail electric providers under rules and charges established by the commission.(c) Beginning on the date of introduction of customer choice in a service area, tenants of leased or rented property that is separately metered shall have …

### e8 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.6.1(1) · text copy line 267 · heading above: 18.6.1 Interval Data Recorder Mandatory Installation Requirements

BEFORE: …t of Load Profiles. (2) Competitive Retailers (CRs) shall be responsible for reviewing any assignment of Load Profiles to Electric Service Identifiers (ESI IDs) they represent. 18.6 Installation and Use of Interval Data Recorders 18.6.1 Interval Data Recorder Mandatory Installation Requirements (1) 
QUOTE: Interval Data Recorders (IDRs) are required and shall be installed and utilized for Settlement of Premises having either: (a) A peak Demand greater than 700 kW (or 700 kVA in CenterPoint Energy's service territory); or (b) Service provided at transmission voltage (above 60 kV).
AFTER:  (2) All non-metered Loads such as street lighting, regardless of the aggregation level, shall not be required to install IDRs under the IDR Mandatory Installation Requirements. These Loads shall be settled using Load Profiles. (3) Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) t…

## Statements to check

- **Definition #1** (cites e1): The Advanced Metering System is a system of advanced meters plus the hardware, software and communications devices that collects time-differentiated energy usage, deployed under PUCT Substantive Rule 25.130. [e1]
- **How it works #1** (cites e3, e4, e5): TDSPs provide 15-minute interval data from provisioned Advanced Meters to ERCOT in an ERCOT-specified file format via NAESB, at least monthly. [e3] That interval data is submitted as Settlement Quality Meter Data and is what is used for settlement. [e4] Upon certified request, ERCOT makes the data available to a Market Participant through the MIS Certified Area. [e5]
- **How it works #2** (cites e2, e8, e6): Advanced meters sit alongside Interval Data Recorders, devices able to record energy in each Settlement Interval. [e2] IDRs are required for premises with peak demand above 700 kW (700 kVA in CenterPoint's territory) or service at transmission voltage above 60 kV. [e8] Where ERCOT does not receive 15-minute data, load profiles estimate it instead. [e6]
- **ERCOT context #1** (cites e7): By statute, all meter data produced by advanced meters and meter information networks belongs to the customer, including data used to calculate charges and historical load data. [e7]
- **Key facts #1** (cites e3): - Advanced meter data reaches ERCOT as 15-minute intervals at least monthly, via an ERCOT-specified file. [e3]
- **Key facts #2** (cites e4): - It is used for settlement as Settlement Quality Meter Data. [e4]
- **Key facts #3** (cites e7): - Customers own their meter data under PURA. [e7]
- **Common confusion #1** (cites e2, e8): (Guidance) An advanced meter and an IDR are not the same thing in the Protocols: an IDR is any device recording each Settlement Interval, and certain larger premises are required to have one. [e2][e8]
- **Questions #2** (cites e4, e6): Settlement is in 15-minute intervals, and interval data from advanced meters is submitted as Settlement Quality Meter Data to be used for settlement, replacing profile estimates. [e4][e6]
- **Questions #4** (cites e7) FLAG number-not-in-quote: 39.107: The customer, under PURA 39.107. [e7]
- **Link to load-profiling** (cites e6): contrasts-with Load Profiling: Profiles estimate 15-minute load where interval data is not available; advanced meters supply actual intervals. [e6]
- **Link to tdsp** (cites e3): related TDSP (Transmission & Distribution Service Provider): TDSPs send the interval data from advanced meters to ERCOT. [e3]
- **Link to rep** (cites e5): related REP (Retail Electric Provider): A Market Participant can obtain advanced meter data from ERCOT on certified request. [e5]
- **Link to tx-set** (cites e3): related TX SET (Texas Standard Electronic Transactions): Advanced meter interval data is submitted to ERCOT in an ERCOT-specified file format via NAESB. [e3]
- **Link to settlement-statements** (cites e4): used-in Settlement Statements & Timeline: Settlement Quality Meter Data feeds ERCOT settlement. [e4]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) Smart meters give ERCOT actual 15-minute usage by premise, so settlement uses real intervals instead of estimated profile shapes. The data belongs to the customer.

