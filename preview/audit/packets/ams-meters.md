# Audit packet: AMS Smart Meter Data (ams-meters)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

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
locator: Section 10.12.3(1)(b), ERCOT Distribution of Settlement Quality Meter Data · text copy line 1093 · heading above: 10.12.3 ERCOT Distribution of Settlement Quality Meter Data

BEFORE: …c Service Identifiers (ESI IDs) to the Competitive Retailer (CR) indicated in the transaction. ERCOT relies upon the TSP or DSP to ensure that the CR included in the transaction is the appropriate CR for the meter data timeframe. ERCOT does not further validate the accuracy of the CR indicated. (b) 
QUOTE: Whenever a TSP or DSP submits meter data to ERCOT via an ERCOT specified file format for Advanced Meters, upon certified request by a Market Participant, ERCOT shall make that data available to the Market Participant via Market Information System (MIS) Certified Area.
AFTER:  (c) On Request - A Market Participant may submit an electronic request via the MIS Certified Area for specific meter consumption data. ERCOT will receive and validate the request and, if appropriate, automatically forward the appropriate information to the Market Participant. 10.13 Meter Identifica…

### e6 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.1(1) · text copy line 73 · heading above: 18.1 Overview

BEFORE: …Transition of Interval Data Recorder Meter to AMS Profile Type 18-8 Load Profiling 18.1 Overview (1) The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). 
QUOTE: This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process.
AFTER:  18.2 Methodology (1) A Load Profiling Methodology is the fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. All Load Profiles shall conform to the …

### e8 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.6.1(1) · text copy line 267 · heading above: 18.6.1 Interval Data Recorder Mandatory Installation Requirements

BEFORE: …t of Load Profiles. (2) Competitive Retailers (CRs) shall be responsible for reviewing any assignment of Load Profiles to Electric Service Identifiers (ESI IDs) they represent. 18.6 Installation and Use of Interval Data Recorders 18.6.1 Interval Data Recorder Mandatory Installation Requirements (1) 
QUOTE: Interval Data Recorders (IDRs) are required and shall be installed and utilized for Settlement of Premises having either: (a) A peak Demand greater than 700 kW (or 700 kVA in CenterPoint Energy's service territory); or (b) Service provided at transmission voltage (above 60 kV).
AFTER:  (2) All non-metered Loads such as street lighting, regardless of the aggregation level, shall not be required to install IDRs under the IDR Mandatory Installation Requirements. These Loads shall be settled using Load Profiles. (3) Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) t…

### e14 · `np-10` · tier 1 · ERCOT Nodal Protocols, Section 10: Metering (effective 2026-06-01)
locator: Section 10.3.3.3(1)(a)(i)-(ii), Submission of Settlement Quality Meter Data to ERCOT · text copy line 654 · heading above: 10.3.3.3 Submission of Settlement Quality Meter Data to ERCOT

BEFORE: …ycle, but no later than monthly: (a) For provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ IDRs, Settlement Quality Meter Data will be submitted using an ERCOT specified file format for the interval data only, which will be used for Settlement. 
QUOTE: (i) The monthly non-interval total consumption and demand (if applicable) values for these ESI IDs shall be provided to ERCOT and LSEs using the appropriate Texas Standard Electronic Transactions (TX SETs) in order to effectuate the registration transactions outlined in Section 15, Customer Registration. (ii) These non-interval total consumption and demand values will not be used for Settlement.
AFTER:  (b) For all other meters, Settlement Quality Meter Data will be submitted using the appropriate TX SET. (2) Each TSP or DSP shall ensure that consumption meter data submitted to ERCOT is in intervals of: (a) 15-minutes for those ESI IDs and RIDs served by IDRs; and (b) Monthly or on an ERCOT-approv…

### e15 · `np-10` · tier 1 · ERCOT Nodal Protocols, Section 10: Metering (effective 2026-06-01)
locator: Section 10.3.3.3(2), Submission of Settlement Quality Meter Data to ERCOT · text copy line 660 · heading above: 10.3.3.3 Submission of Settlement Quality Meter Data to ERCOT

BEFORE: …n order to effectuate the registration transactions outlined in Section 15, Customer Registration. (ii) These non-interval total consumption and demand values will not be used for Settlement. (b) For all other meters, Settlement Quality Meter Data will be submitted using the appropriate TX SET. (2) 
QUOTE: Each TSP or DSP shall ensure that consumption meter data submitted to ERCOT is in intervals of: (a) 15-minutes for those ESI IDs and RIDs served by IDRs; and (b) Monthly or on an ERCOT-approved meter reading cycle for non-IDRs.
AFTER:  (3) The Settlement Quality Meter Data submitted by TSP or DSP must be in kWh and kVArh values (as applicable). 10.3.3.3.1 Past Due Data Submission (1) ERCOT shall provide a report to the appropriate TSP and DSP for any ESI ID or RID for which consumption data has not been received in the past 38 da…

### e16 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.7(1)(a)-(c), Transition of Interval Data Recorder Meter to AMS Profile Type · text copy line 279 · heading above: 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type

BEFORE: …stall IDRs at all Premises subject to the IDR Mandatory Installation Requirements for metering prior to the effective date of their participation in the testing and integration requirements of ERCOT systems for Customer Choice. 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type (1) 
QUOTE: At a Transmission and/or Distribution Service Provider's (TDSP's) discretion, or upon a Customer's request and TDSP's approval, a TDSP shall: (a) Utilize a provisioned Advanced Meter or similarly functional meter for Customer's Premise; (b) Assign the appropriate Load Profile, other than one with a BUSIDRRQ Profile Type Code, to Premise's Electric Service Identifier (ESI ID); (c) Submit Settlement Quality Meter Data, which will be used for Settlement, using the ERCOT specified file format for the interval data only in accordance with Retail Market Guide Section 7.15, Advanced Meter Interval Data File Format and Submission;
AFTER:  (d) If the ESI ID will be transitioning to an Advanced Metering System (AMS) Profile Type other than BUSLRG or BUSLRGDG, submit a MarkeTrak issue to notify ERCOT; and (e) Submit the appropriate Texas Standard Electronic Transaction (TX SET) transaction notifying the Competitive Retailer (CR) of the…

### e17 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.7(1)(d)-(e) · text copy line 287 · heading above: 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type

BEFORE: …ise's Electric Service Identifier (ESI ID); (c) Submit Settlement Quality Meter Data, which will be used for Settlement, using the ERCOT specified file format for the interval data only in accordance with Retail Market Guide Section 7.15, Advanced Meter Interval Data File Format and Submission; (d) 
QUOTE: If the ESI ID will be transitioning to an Advanced Metering System (AMS) Profile Type other than BUSLRG or BUSLRGDG, submit a MarkeTrak issue to notify ERCOT; and (e) Submit the appropriate Texas Standard Electronic Transaction (TX SET) transaction notifying the Competitive Retailer (CR) of the Load Profile change.
AFTER: …

### e19 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2(3), Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation · text copy line 571 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: …istribution System (out-flow from the Premise). read_days days Number of days in meter read period. DST adjust N/A Daylight Savings Time Adjustment: Spring DST = -4; Fall DST = 4. ------------------------------------------------------------------------------------------------------------------- (3) 
QUOTE: The excess generation adjustments for ESI IDs, which have UDG made up of PV or wind generation behind the meter and that have an Advanced Metering System (AMS) integrated meter or Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ IDR that measures the excess energy flow into the ERCOT System in 15-minute intervals, shall be determined using the actual 15-minute interval data, if available.
AFTER:  11.4.4.3 Load Reduction for Excess from Other Distributed Generators (1) AML for ESI IDs with DG that is neither PV nor wind shall be adjusted as follows: For ESI IDs with non-IDRs installed, AML shall be reduced for excess generation from ESI IDs with UDGs behind the meter where there is a meter t…

### e21 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.6.1(2)-(3), Interval Data Recorder Mandatory Installation Requirements · text copy line 273 · heading above: 18.6.1 Interval Data Recorder Mandatory Installation Requirements

BEFORE: …Requirements (1) Interval Data Recorders (IDRs) are required and shall be installed and utilized for Settlement of Premises having either: (a) A peak Demand greater than 700 kW (or 700 kVA in CenterPoint Energy's service territory); or (b) Service provided at transmission voltage (above 60 kV). (2) 
QUOTE: All non-metered Loads such as street lighting, regardless of the aggregation level, shall not be required to install IDRs under the IDR Mandatory Installation Requirements. These Loads shall be settled using Load Profiles. (3) Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) that opt-in to Customer Choice must install IDRs at all Premises subject to the IDR Mandatory Installation Requirements for metering prior to the effective date of their participation in the testing and integration requirements of ERCOT systems for Customer Choice.
AFTER:  18.7 Transition of Interval Data Recorder Meter to AMS Profile Type (1) At a Transmission and/or Distribution Service Provider's (TDSP's) discretion, or upon a Customer's request and TDSP's approval, a TDSP shall: (a) Utilize a provisioned Advanced Meter or similarly functional meter for Customer's…

### e22 · `np-10` · tier 1 · ERCOT Nodal Protocols, Section 10: Metering (effective 2026-06-01)
locator: Section 10.12.3(1)(c), ERCOT Distribution of Settlement Quality Meter Data · text copy line 1095 · heading above: 10.12.3 ERCOT Distribution of Settlement Quality Meter Data

BEFORE: …y of the CR indicated. (b) Whenever a TSP or DSP submits meter data to ERCOT via an ERCOT specified file format for Advanced Meters, upon certified request by a Market Participant, ERCOT shall make that data available to the Market Participant via Market Information System (MIS) Certified Area. (c) 
QUOTE: On Request - A Market Participant may submit an electronic request via the MIS Certified Area for specific meter consumption data. ERCOT will receive and validate the request and, if appropriate, automatically forward the appropriate information to the Market Participant.
AFTER:  10.13 Meter Identification (1) The device id used to identify an ERCOT-Polled Settlement (EPS) Meter shall be unique for such meters on the ERCOT System. ERCOT shall maintain a master list of device ids and shall notify each Transmission Service Provider (TSP) and Distribution Service Provider (DSP…

## Statements to check (new or changed since the last audit)

- **How it works #3** (cites e3, e4, e14, e15, e5, e22): For settlement, TDSPs provide 15-minute interval data from provisioned Advanced Meters to ERCOT in an ERCOT-specified file format via NAESB, at least monthly. [e3] That interval data is submitted as Settlement Quality Meter Data and is what is used for settlement. [e4] The monthly non-interval total consumption and demand for these ESI IDs still go to ERCOT and LSEs by TX SET to effect registration transactions, but those totals are not used for settlement. [e14] Interval size is set by meter type: 15 minutes for ESI IDs served by IDRs, and monthly or an ERCOT-approved read cycle for non-IDRs. [e15] Upon certified request, ERCOT makes the advanced meter data available to a Market Participant through the MIS Certified Area. [e5] A Market Participant can also request specific meter consumption data through the MIS Certified Area; ERCOT validates the request and, if appropriate, forwards the data. [e22]
- **How it works #4** (cites e2, e8, e21, e6): Advanced meters sit alongside Interval Data Recorders, devices able to record energy in each Settlement Interval. [e2] IDRs are required for premises with peak demand above 700 kW (700 kVA in CenterPoint's territory) or service at transmission voltage above 60 kV. [e8] Non-metered loads such as street lighting are not required to install IDRs and are settled with Load Profiles. [e21] Where ERCOT does not receive 15-minute data, load profiles estimate it instead. [e6]
- **ERCOT context #2** (cites e16, e17): Moving an IDR premise to an AMS profile type is a TDSP decision or a customer request the TDSP approves. The TDSP uses a provisioned Advanced Meter or similarly functional meter, assigns a Load Profile other than one with a BUSIDRRQ Profile Type Code, and submits interval-only Settlement Quality Meter Data. [e16] If the ESI ID moves to an AMS Profile Type other than BUSLRG or BUSLRGDG, the TDSP submits a MarkeTrak issue to notify ERCOT and sends a TX SET transaction telling the Competitive Retailer of the profile change. [e17]
- **Key facts #2** (cites e4, e14): - It is used for settlement as Settlement Quality Meter Data; the monthly non-interval totals for these ESI IDs are not used for settlement. [e4][e14]
- **Questions #6** (cites e16, e17): At the TDSP's discretion, or on the customer's request with TDSP approval, the TDSP assigns a Load Profile that does not carry the BUSIDRRQ type code and submits interval-only data used for settlement. It notifies the CR by TX SET, and notifies ERCOT by MarkeTrak unless the new profile type is BUSLRG or BUSLRGDG. [e16][e17]
- **Questions #8** (cites e14): They are provided to ERCOT and LSEs through TX SETs to effectuate the registration transactions in Section 15, Customer Registration, while settlement uses the interval data. [e14]
- **Link to load-profiling** (cites e6): contrasts-with Load Profiling: Profiles estimate 15-minute load where interval data is not available; advanced meters supply actual intervals. [e6]
- **Link to tdsp** (cites e3): related TDSP (Transmission & Distribution Service Provider): TDSPs send the interval data from advanced meters to ERCOT. [e3]
- **Link to rep** (cites e5): related REP (Retail Electric Provider): A Market Participant can obtain advanced meter data from ERCOT on certified request. [e5]
- **Link to tx-set** (cites e3): related TX SET (Texas Standard Electronic Transactions): Advanced meter interval data is submitted to ERCOT in an ERCOT-specified file format via NAESB. [e3]
- **Link to settlement-statements** (cites e4): used-in Settlement Statements & Timeline: Settlement Quality Meter Data feeds ERCOT settlement. [e4]
- **Link to ufe** (cites e19): related UFE (Unaccounted-For Energy): Where a premise has an AMS meter measuring excess flow into ERCOT in 15-minute intervals, the actual interval data is used for the excess-generation load reduction. [e19]
- **Link to market-information-system** (cites e5): used-in MIS (Market Information System) & Public Data: ERCOT makes advanced meter data available to a Market Participant through the MIS Certified Area. [e5]
- **Link to dgr-sodg** (cites e19): related DGR & SODG (Distribution-Connected Generation): Behind-the-meter distributed generation adjustments depend on whether an AMS meter measures export in 15-minute intervals. [e19]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) Smart meters give ERCOT actual 15-minute usage by premise, so settlement uses real intervals instead of estimated profile shapes. The data belongs to the customer, and the customer, their REP and anyone they authorize can get it from the utility's web portal.

