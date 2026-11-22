# Audit packet: ESI ID (esi-id)

kind concept · domain structure · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Electric Service Identifier (ESI ID) · text copy line 738

BEFORE: …COT Region. Electric Reliability Organization The organization approved by the Federal Energy Regulatory Commission (FERC) to perform the electric reliability organization functions described in the Electricity Modernization Act of 2005, 16 U.S.C. § 824o (2005). Electric Service Identifier (ESI ID) 
QUOTE: The basic identifier assigned to each Service Delivery Point used in the registration and settlement systems managed by ERCOT or another Independent Organization.
AFTER:  Electrical Bus (1) A physical transmission element defined in the Network Operations Model that connects, using breakers and switches, one or more: (a) Loads; (b) Lines; (c) Transformers; (d) Generators; (e) Capacitors; (f) Reactors; (g) Phase shifters; or (h) Other reactive control devices to the …

### e4 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1(3) · text copy line 813 · heading above: 15.4.1 Electric Service Identifier Format

BEFORE: …ure use; xxxxx Is the five-digit Department of Energy identification code for the assigning TDSP; and yyy..yy Is up to 29 alphanumeric characters assigned by the TDSP. (2) Allowable alphanumeric characters are 0-9 and A-Z. The total length of the ESI ID cannot exceed 36 alphanumeric characters. (3) 
QUOTE: It is the TDSP's responsibility to create, assign, maintain and retire, as necessary, an ESI ID to each Service Delivery Point in its service area.
AFTER:  15.4.1.1 Assignment of ESI IDs to Unmetered Service Delivery Points (1) In general, each unmetered Service Delivery Point will be assigned an ESI ID corresponding to the point of delivery from the TDSP system to the Customer or Load. The TDSP may, however, aggregate unmetered Service Delivery Point…

### e6 · `puct-25-5` · tier 1 · PUCT Substantive Rule 16 TAC §25.5, Definitions
locator: Section 25.5, definition of REP of record · text copy line 859

BEFORE: …s equipment used solely to provide electricity charging service for consumption by an alternatively fueled vehicle, as defined by Section 502.004, Transportation Code. (115) Retail electric provider (REP) of record -- The REP assigned to the electric service identifier (ESI ID) in ERCOT's database. 
QUOTE: There can be no more than one REP of record assigned to an ESI ID at any specific point in time.
AFTER:  (116) Retail stranded costs -- That part of net stranded cost associated with the provision of retail service. (117) Retrofit -- The installation of control technology on an electric generating facility to reduce the emissions of nitrogen oxide, sulfur dioxide, or both. (118) River authority -- A c…

### e7 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1(1) · text copy line 193 · heading above: 15.1.1 Submission of a Switch Request

BEFORE: …transaction processing in the retail market, please refer to the Retail Market Guide. 15.1 Customer Switch of Competitive Retailer (1) The following process shall be followed for a Competitive Retailer (CR) to switch an Electric Service Identifier (ESI ID). 15.1.1 Submission of a Switch Request (1) 
QUOTE: The CR shall submit a Switch Request to ERCOT using the 814_01, Switch Request. The Switch Request shall include, at a minimum, the five-digit zip code and an ESI ID.
AFTER:  Within this transaction, the CR will also send information necessary for ERCOT to send a switch confirmation notice to the Customer as required by the applicable Public Utility Commission of Texas (PUCT) rules. The First Available Switch Date (FASD) is the day received by ERCOT unless received on a…

### e8 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.1(1) · text copy line 73 · heading above: 18.1 Overview

BEFORE: …nsibilities 18-7 18.5.2 Market Participant Responsibilities 18-8 18.6 Installation and Use of Interval Data Recorders 18-8 18.6.1 Interval Data Recorder Mandatory Installation Requirements 18-8 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type 18-8 Load Profiling 18.1 Overview (1) 
QUOTE: The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs).
AFTER:  This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process. 18.2 Methodology (1) A Load Profiling Methodology is the fundamental basis on …

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Premise · text copy line 2075

BEFORE: …ation dampening support to the ERCOT System under transient conditions. Pre-Assigned Congestion Revenue Right (PCRR) Nomination Year The calendar year that is three years after the year containing a PCRR nomination process. Pre-Contingency Action Plan (PCAP) (see Constraint Management Plan) Premise 
QUOTE: A Service Delivery Point or combination of Service Delivery Points that is assigned a single ESI ID for Settlement and registration.
AFTER:  Presidio Exception The losses associated with keeping the 69 kV line from the Gonzales substation to the ERCOT BLT Point at Presidio constantly energized in order to maintain connectivity and allow for rapid response to contingencies impacting the reliability for Customers in the Presidio area when…

### e12 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.1(1), Assignment of ESI IDs to Unmetered Service Delivery Points · text copy line 817 · heading above: 15.4.1.1 Assignment of ESI IDs to Unmetered Service Delivery Points

BEFORE: …Z. The total length of the ESI ID cannot exceed 36 alphanumeric characters. (3) It is the TDSP's responsibility to create, assign, maintain and retire, as necessary, an ESI ID to each Service Delivery Point in its service area. 15.4.1.1 Assignment of ESI IDs to Unmetered Service Delivery Points (1) 
QUOTE: In general, each unmetered Service Delivery Point will be assigned an ESI ID corresponding to the point of delivery from the TDSP system to the Customer or Load. The TDSP may, however, aggregate unmetered Service Delivery Points into one ESI ID provided they meet all of the following conditions: (a) The Service Delivery Points are owned by the same Customer and are located at the same physical location (an exception is allowed for governmental unmetered loads such as street lighting and traffic signals); (b) All Service Delivery Points have the same Usage Profile; (c) All Service Delivery Points have the same voltage and are located in the same Unaccounted for Energy (UFE) zone and same Load Zone; and (d) The TDSP's tariffs allow aggregation of unmetered Service Delivery Points.
AFTER:  15.4.1.2 Assignment of ESI IDs to metered Service Delivery Points (1) In general, each metered Service Delivery Point will be assigned an ESI ID corresponding to an existing billing meter. However, the TDSP may aggregate metered Service Delivery Points into one ESI ID provided they meet all the fol…

### e13 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.2(1), Assignment of ESI IDs to metered Service Delivery Points · text copy line 829 · heading above: 15.4.1.2 Assignment of ESI IDs to metered Service Delivery Points

BEFORE: …e Profile; (c) All Service Delivery Points have the same voltage and are located in the same Unaccounted for Energy (UFE) zone and same Load Zone; and (d) The TDSP's tariffs allow aggregation of unmetered Service Delivery Points. 15.4.1.2 Assignment of ESI IDs to metered Service Delivery Points (1) 
QUOTE: In general, each metered Service Delivery Point will be assigned an ESI ID corresponding to an existing billing meter. However, the TDSP may aggregate metered Service Delivery Points into one ESI ID provided they meet all the following conditions: (a) The Service Delivery Points are owned by the same Customer and are at the same Service Address; (b) All Service Delivery Points have the same Load Profile or all Service Delivery Points have Interval Data Recorders (IDRs); (c) All Service Delivery Points have the same voltage and are located in the same UFE zone and same Load Zone; and (d) The TDSP's tariffs allow aggregation of separately metered Service Delivery Points.
AFTER:  (2) A Customer may request that the TDSP assign separate ESI IDs for separate Service Delivery Points as allowed in the TDSP's tariffs. (3) A TDSP may not assign an ESI ID to submeters where the energy consumption for those meters is included in another ESI ID. This does not prohibit the TDSP from …

### e14 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.2(3) · text copy line 841 · heading above: 15.4.1.2 Assignment of ESI IDs to metered Service Delivery Points

BEFORE: …me voltage and are located in the same UFE zone and same Load Zone; and (d) The TDSP's tariffs allow aggregation of separately metered Service Delivery Points. (2) A Customer may request that the TDSP assign separate ESI IDs for separate Service Delivery Points as allowed in the TDSP's tariffs. (3) 
QUOTE: A TDSP may not assign an ESI ID to submeters where the energy consumption for those meters is included in another ESI ID. This does not prohibit the TDSP from tracking these submeters internally or charging for submetering services via the Competitive Retailer (CR). Notwithstanding the foregoing, TDSPs using the practice of subtract metering shall assign an ESI ID to both the master meter and the subtract meter and report adjusted consumption accordingly.
AFTER:  15.4.1.3 Splitting a Service Delivery Point into Multiple ESI IDs (1) A Service Delivery Point with Load above one MW may split the actual meter into up to four virtual meters which would each have its own ESI ID. This process of splitting the meter into separate ESI IDs shall be performed in accor…

### e15 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.3, Splitting a Service Delivery Point into Multiple ESI IDs · text copy line 845 · heading above: 15.4.1.3 Splitting a Service Delivery Point into Multiple ESI IDs

BEFORE: …s via the Competitive Retailer (CR). Notwithstanding the foregoing, TDSPs using the practice of subtract metering shall assign an ESI ID to both the master meter and the subtract meter and report adjusted consumption accordingly. 15.4.1.3 Splitting a Service Delivery Point into Multiple ESI IDs (1) 
QUOTE: A Service Delivery Point with Load above one MW may split the actual meter into up to four virtual meters which would each have its own ESI ID. This process of splitting the meter into separate ESI IDs shall be performed in accordance with the requirements of Section 10, Metering. Reissuing and reassignment of ESI IDs is prohibited.
AFTER:  15.4.1.4 New Electric Service Identifier Creation (1) Since it is anticipated that the ESI ID will be based on the existing TDSP account or Premise numbers (with a prefix identifying the TDSP), the TDSP will assign and submit to the registration database ESI IDs for new Premises as service is exten…

### e16 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.4(2), New Electric Service Identifier Creation · text copy line 851 · heading above: 15.4.1.4 New Electric Service Identifier Creation

BEFORE: …ifying the TDSP), the TDSP will assign and submit to the registration database ESI IDs for new Premises as service is extended to them. TDSPs that opt in after the market startup will be responsible for the creation of ESI IDs for all existing Service Delivery Points in their service territory. (2) 
QUOTE: The TDSP will send ESI ID information using the 814_20, ESI ID Maintenance Request. ERCOT will verify that this transaction meets Texas Standard Electronic Transaction (TX SET) specifications. ERCOT will respond to the TDSP within one Retail Business Hour, with acceptance or rejection of these transactions using the 814_21, ESI ID Maintenance Response.
AFTER:  At least the following data elements are required to be sent in the 814_20 transaction: (a) ESI ID; (b) Service Address; city, state, zip, county; (c) Load Profile Type; (d) Meter reading cycle or meter cycle by day of month; (e) Station ID; (f) Distribution Loss Factor (DLF) code; and (g) Premise …

### e17 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.4(3) · text copy line 867 · heading above: 15.4.1.4 New Electric Service Identifier Creation

BEFORE: …the following data elements are required to be sent in the 814_20 transaction: (a) ESI ID; (b) Service Address; city, state, zip, county; (c) Load Profile Type; (d) Meter reading cycle or meter cycle by day of month; (e) Station ID; (f) Distribution Loss Factor (DLF) code; and (g) Premise type. (3) 
QUOTE: The TDSP must receive an accepted 814_21 from ERCOT prior to initiating electric service pursuant to Section 15.1.4, Beginning Service (New Construction Completed and Move Ins).
AFTER:  15.4.1.5 Electric Service Identifier Maintenance (1) The TDSP will notify ERCOT of any changes in information related to an ESI ID for which it is responsible. The TDSP will send changes to ERCOT using the 814_20, ESI ID Maintenance Request. ERCOT will respond to the TDSP within four Retail Busines…

### e19 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1.4(2), required data elements · text copy line 851 · heading above: 15.4.1.4 New Electric Service Identifier Creation

BEFORE: … ESI ID Maintenance Request. ERCOT will verify that this transaction meets Texas Standard Electronic Transaction (TX SET) specifications. ERCOT will respond to the TDSP within one Retail Business Hour, with acceptance or rejection of these transactions using the 814_21, ESI ID Maintenance Response. 
QUOTE: At least the following data elements are required to be sent in the 814_20 transaction: (a) ESI ID; (b) Service Address; city, state, zip, county; (c) Load Profile Type; (d) Meter reading cycle or meter cycle by day of month; (e) Station ID; (f) Distribution Loss Factor (DLF) code; and (g) Premise type.
AFTER:  (3) The TDSP must receive an accepted 814_21 from ERCOT prior to initiating electric service pursuant to Section 15.1.4, Beginning Service (New Construction Completed and Move Ins). 15.4.1.5 Electric Service Identifier Maintenance (1) The TDSP will notify ERCOT of any changes in information related…

### e24 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3(1), Transition Process · text copy line 305 · heading above: 15.1.3 Transition Process

BEFORE: …ed for the evaluation. 15.1.2 Response from ERCOT to Drop to Affiliate Retail Electric Provider Request (1) ERCOT will send a reject response using the 814_11, Drop Response, within one Retail Business Day to the current CR notifying the CR that the request is invalid. 15.1.3 Transition Process (1) 
QUOTE: Certain circumstances may arise during the course of business in the Texas retail electric market that may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes.
AFTER:  15.1.3.1 Mass Transition Process (1) In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP. The 814_03 transaction shall contain…

### e27 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.3.1, Electric Service Identifier Service History and Usage · text copy line 363 · heading above: 11.3.1 Electric Service Identifier Service History and Usage

BEFORE: …e relationship between the ESI ID, Load Serving Entity (LSE) and/or Resource Entity, and the meter. DAS will provide versioning to ensure ESI ID characteristic changes are time stamped. 11.3 Electric Service Identifier Synchronization 11.3.1 Electric Service Identifier Service History and Usage (1) 
QUOTE: On a daily basis, ERCOT shall provide incremental updates to Electric Service Identifier (ESI ID) service history and usage information to Load Serving Entities (LSEs), Meter Reading Entities (MREs), and Transmission Service Providers (TSPs) and/or Distribution Service Providers (DSPs). ESI ID service history includes ESI ID relationships and ESI ID characteristics.
AFTER:  11.3.2 Variance Process (1) Any LSE, MRE, TSP or DSP that contests the accuracy of ESI ID service history and usage information maintained by ERCOT shall file a variance in the manner specified by the Retail Market Guide. The variance shall be processed in the manner specified in the Retail Market …

### e28 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.2.3(2), MarkeTrak Data Extract Variance Processes · text copy line 383 · heading above: 7.2.3 MarkeTrak Data Extract Variance Processes

BEFORE: …incremental changes from ERCOT on a daily basis. Additional data extracts may be needed to resolve DEV issues. See the MarkeTrak User Guide for business rules concerning filing DEV issues in MarkeTrak. The Market Participant should contact their ERCOT Account Manager for additional information. (2) 
QUOTE: If a DEV issue, submitted according to the MarkeTrak Users Guide is not resolved prior to the True-Up Settlement, a Market Participant may seek correction of ESI ID service history and usage information and resettlement pursuant to the provisions of Protocol Section 20, Alternative Dispute Resolution Procedure and Procedure for Return of Settlement Funds.
AFTER:  7.3 Inadvertent Gain/Loss Process (1) An Inadvertent Gain/Loss (IAG) is defined in Section 2.1, Definitions. (2) The IAG process shall be used in cases where a Competitive Retailer (CR) is serving a Customer without proper authorization pursuant to P.U.C. SUBST. R. 25.474, Selection of Retail Elect…

### e29 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.3(5), Registration of Load Serving Entities · text copy line 640 · heading above: 16.3 Registration of Load Serving Entities

BEFORE: … shall select the ELSE status on the LSE application (Section 23, Form B, Load Serving Entity (LSE) Application for Registration) and other registration forms as designated by ERCOT. An ELSE shall provide all information sufficient to justify its designation as an ELSE if so requested by ERCOT. (5) 
QUOTE: An ELSE shall assign an Electric Service Identifier (ESI ID) for each wholesale point of delivery as specified in these Protocols. An ESI ID shall not be assigned to any individual Customer behind an ELSE wholesale point of delivery.
AFTER:  16.3.1 Technical and Managerial Requirements for LSE Applicants (1) An LSE applicant must: (a) Be capable of complying with all policies, rules, guidelines, registration requirements and procedures established by these Protocols, ERCOT, or other Independent Organizations, if applicable; (b) Be capa…

### e30 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.2.1, Find ESI ID Function on the Market Information System · text copy line 769 · heading above: 15.2.1 Find ESI ID Function on the Market Information System

BEFORE: … provide all of the attributes listed above when an 814_20, ESI ID Maintenance Request, is received and accepted by ERCOT that creates an ESI ID, or makes changes to the switch hold or the provisioned AMS meter indicator of an ESI ID. 15.2.1 Find ESI ID Function on the Market Information System (1) 
QUOTE: Market Participants can obtain information to verify the Service Address for a Service Delivery Point using the Find ESI ID function on the Market Information System (MIS) Secure Area.
AFTER:  The Find ESI ID function returns the information as identified in Section 15.2, Database Queries. 15.2.2 Find Transaction Function on the Market Information System (1) Competitive Retailers (CRs) or TDSPs may obtain transaction information from ERCOT to review business processes (i.e. Switch Reques…

## Statements to check (new or changed since the last audit)

- **How it works #4** (cites e16, e19, e17): To create an ESI ID, the TDSP sends an 814_20 ESI ID Maintenance Request; ERCOT checks it against TX SET specifications and answers within one Retail Business Hour with an 814_21 accept or reject. [e16] The 814_20 must carry at least ESI ID, service address, load profile type, meter reading cycle, station ID, DLF code and premise type. [e19] The TDSP needs an accepted 814_21 before it initiates electric service. [e17]
- **How it works #7** (cites e12): Unmetered points are normally one ESI ID per point of delivery. The TDSP may aggregate them only if all four conditions hold: same Customer and same physical location (with an exception for governmental unmetered loads such as street lighting), same Usage Profile, same voltage in the same UFE zone and Load Zone, and TDSP tariffs that allow it. [e12]
- **How it works #8** (cites e13, e14, e15): Metered points normally get one ESI ID per existing billing meter. Aggregation is allowed only for the same Customer at the same Service Address, with the same Load Profile (or all with IDRs), the same voltage, UFE zone and Load Zone, and a tariff that allows it. [e13] A TDSP may not assign an ESI ID to submeters whose consumption is included in another ESI ID, except that with subtract metering both the master and subtract meters get ESI IDs and consumption is reported adjusted. [e14] Going the other way, a point with Load above one MW may split its meter into up to four virtual meters, each with its own ESI ID, and reissuing or reassigning ESI IDs is prohibited. [e15]
- **Key facts #5** (cites e13): - Metered aggregation needs the same Customer, same Service Address, same voltage, UFE zone and Load Zone, and tariff permission. [e13]
- **Common confusion #1** (cites e1, e9, e13, e15): (Guidance) An ESI ID is a delivery point identifier. [e1] A premise may combine more than one delivery point under a single ESI ID. [e9] It is also not a meter number: a meter can be split into several ESI IDs above one MW, and several meters can be aggregated into one under the conditions above. [e13][e15]
- **Questions #8** (cites e13, e8): Aggregation requires the same Customer, same address, same Load Profile (or all IDRs), and the same voltage, UFE zone and Load Zone, and a tariff that allows it. [e13] The Protocols do not state why; they say Load Profiling estimates and allocates 15-minute Load for ESI IDs. [e8]
- **Link to tdsp** (cites e4): related TDSP (Transmission & Distribution Service Provider): The TDSP creates, assigns, maintains and retires the ESI ID for each Service Delivery Point in its area. [e4]
- **Link to rep** (cites e6): related REP (Retail Electric Provider): Each ESI ID has at most one REP of record at a time. [e6]
- **Link to retail-choice** (cites e7): used-in Retail Choice / Competitive Retail Market: A Competitive Retailer's Switch Request is submitted for an ESI ID. [e7]
- **Link to load-profiling** (cites e8): related Load Profiling: Load Profiling estimates and allocates 15-minute Load for ESI IDs. [e8]
- **Link to ams-meters** (cites e1): related AMS Smart Meter Data: Covers the metering side; the ESI ID is the identifier assigned to each Service Delivery Point. [e1]
- **Link to tx-set** (cites e7): used-in TX SET (Texas Standard Electronic Transactions): The switch request (814_01) must include an ESI ID. [e7]
- **Link to lse** (cites e29): related LSE (Load Serving Entity): An ELSE assigns an ESI ID for each wholesale point of delivery, and no ESI ID goes to an individual Customer behind it. [e29]
- **Link to mass-transition** (cites e24): related Mass Transition: Transition of ESI IDs (from one CR to a Provider of Last Resort or designated CR, or between TDSPs) in quantities and on a time frame not completely supported by standard transactions is handled as a Mass Transition. [e24]
- **Link to market-information-system** (cites e30): related MIS (Market Information System) & Public Data: Market Participants can verify the Service Address for a Service Delivery Point through the MIS Find ESI ID function. [e30]
- **Link to settlement-statements** (cites e27, e28): related Settlement Statements & Timeline: ERCOT provides ESI ID service history daily, and a Market Participant may seek correction and resettlement if a data variance is unresolved before True-Up Settlement. [e27][e28]

