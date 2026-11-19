# Audit packet: ESI ID (esi-id)

kind concept · domain structure · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Electric Service Identifier (ESI ID) · text copy line 738

BEFORE: …COT Region. Electric Reliability Organization The organization approved by the Federal Energy Regulatory Commission (FERC) to perform the electric reliability organization functions described in the Electricity Modernization Act of 2005, 16 U.S.C. § 824o (2005). Electric Service Identifier (ESI ID) 
QUOTE: The basic identifier assigned to each Service Delivery Point used in the registration and settlement systems managed by ERCOT or another Independent Organization.
AFTER:  Electrical Bus (1) A physical transmission element defined in the Network Operations Model that connects, using breakers and switches, one or more: (a) Loads; (b) Lines; (c) Transformers; (d) Generators; (e) Capacitors; (f) Reactors; (g) Phase shifters; or (h) Other reactive control devices to the …

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Service Delivery Point · text copy line 2831

BEFORE: …y obligation at a specified sink Settlement Point for the QSE submitting the information. Service Address The street address associated with an ESI ID as recorded in the Customer Registration Database. This address shall conform to United States Postal Service Publication 28. Service Delivery Point 
QUOTE: The specific point on the system where electricity flows from the TSP or DSP to a Customer.
AFTER:  Settlement The process used to resolve financial obligations between a Market Participant and ERCOT. Settlement Calendar A calendar that provides information on when Settlement Statements and Invoices shall be posted, payment due dates, and dispute deadlines. Additional information is provided in S…

### e3 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4(1) · text copy line 793 · heading above: 15.4 Electric Service Identifier

BEFORE: …mption information and effectuating meter reads to ERCOT using the 867_03 transaction. ERCOT will then forward the monthly consumption and meter read information to the CR DUNS Number provided in the 867_03 transaction by the TDSP within one Retail Business Day. 15.4 Electric Service Identifier (1) 
QUOTE: Each Transmission and/or Distribution Service Provider (TDSP) Service Delivery Point shall have a unique number within Texas. Once this unique number has been created and assigned to a Service Delivery Point, it shall not be re-issued, even in the event of termination of the associated point-of-service.
AFTER:  This unique number shall be referred to as the Electric Service Identifier (ESI ID). (2) Notwithstanding the foregoing, in those situations where an ESI ID has been inadvertently placed into inactive status and upon notification from the responsible TDSP, ERCOT shall re-instate the ESI ID for that …

### e4 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1(3) · text copy line 813 · heading above: 15.4.1 Electric Service Identifier Format

BEFORE: …ure use; xxxxx Is the five-digit Department of Energy identification code for the assigning TDSP; and yyy..yy Is up to 29 alphanumeric characters assigned by the TDSP. (2) Allowable alphanumeric characters are 0-9 and A-Z. The total length of the ESI ID cannot exceed 36 alphanumeric characters. (3) 
QUOTE: It is the TDSP's responsibility to create, assign, maintain and retire, as necessary, an ESI ID to each Service Delivery Point in its service area.
AFTER:  15.4.1.1 Assignment of ESI IDs to Unmetered Service Delivery Points (1) In general, each unmetered Service Delivery Point will be assigned an ESI ID corresponding to the point of delivery from the TDSP system to the Customer or Load. The TDSP may, however, aggregate unmetered Service Delivery Point…

### e5 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.4.1(2) · text copy line 811 · heading above: 15.4.1 Electric Service Identifier Format

BEFORE: …rvice Identifier Format (1) The ESI ID will have the following format: 10xxxxxyyy..yy Where: 10 Represents a placeholder for future use; xxxxx Is the five-digit Department of Energy identification code for the assigning TDSP; and yyy..yy Is up to 29 alphanumeric characters assigned by the TDSP. (2) 
QUOTE: Allowable alphanumeric characters are 0-9 and A-Z. The total length of the ESI ID cannot exceed 36 alphanumeric characters.
AFTER:  (3) It is the TDSP's responsibility to create, assign, maintain and retire, as necessary, an ESI ID to each Service Delivery Point in its service area. 15.4.1.1 Assignment of ESI IDs to Unmetered Service Delivery Points (1) In general, each unmetered Service Delivery Point will be assigned an ESI I…

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

## Statements to check

- **Definition #1** (cites e1, e2): An ESI ID is the basic identifier assigned to each Service Delivery Point and used in the registration and settlement systems managed by ERCOT. [e1] A Service Delivery Point is the specific point where electricity flows from the TSP or DSP to a customer. [e2]
- **How it works #1** (cites e3, e4, e5): Each Service Delivery Point has a number unique within Texas. Once created and assigned it is not re-issued, even if the point of service is terminated. [e3] The TDSP creates, assigns, maintains and retires the ESI ID for each point in its service area. [e4] The ESI ID can use only 0-9 and A-Z and cannot exceed 36 characters. [e5]
- **How it works #2** (cites e9, e7, e6): A Premise is a Service Delivery Point, or a combination of them, assigned a single ESI ID for settlement and registration. [e9] Retail processes key off it: a switch request must include an ESI ID and zip code, and each ESI ID has at most one REP of record at a time. [e7][e6]
- **ERCOT context #1** (cites e8): The retail market requires a 15-minute Settlement Interval, and Load Profiling is a way of estimating and allocating 15-minute Load for ESI IDs. [e8]
- **Key facts #1** (cites e3): - Unique statewide and never re-issued. [e3]
- **Key facts #2** (cites e5): - Up to 36 alphanumeric characters. [e5]
- **Key facts #3** (cites e4): - Assigned and maintained by the TDSP. [e4]
- **Key facts #4** (cites e6): - One REP of record per ESI ID at any time. [e6]
- **Say it like this #1** (cites e1, e7): (Guidance) The ESI ID is the basic identifier assigned to each Service Delivery Point. It is used in registration and settlement, and a switch request must include one. [e1][e7]
- **Common confusion #1** (cites e1, e9): (Guidance) An ESI ID is a delivery point identifier. [e1] A premise may combine more than one delivery point under a single ESI ID. [e9]
- **Questions #2** (cites e4): The TDSP serving the Service Delivery Point. [e4]
- **Questions #4** (cites e3): No. The number is not re-issued even if the point of service ends. [e3]
- **Link to tdsp** (cites e4): related TDSP (Transmission & Distribution Service Provider): The TDSP creates, assigns, maintains and retires the ESI ID for each Service Delivery Point in its area. [e4]
- **Link to rep** (cites e6): related REP (Retail Electric Provider): Each ESI ID has at most one REP of record at a time. [e6]
- **Link to retail-choice** (cites e7): used-in Retail Choice / Competitive Retail Market: A Competitive Retailer's Switch Request is submitted for an ESI ID. [e7]
- **Link to load-profiling** (cites e8): related Load Profiling: Load Profiling estimates and allocates 15-minute Load for ESI IDs. [e8]
- **Link to ams-meters** (cites e1): related AMS Smart Meter Data: Covers the metering side; the ESI ID is the identifier assigned to each Service Delivery Point. [e1]
- **Link to tx-set** (cites e7): used-in TX SET (Texas Standard Electronic Transactions): The switch request (814_01) must include an ESI ID. [e7]
