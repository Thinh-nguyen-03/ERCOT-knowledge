# Audit packet: TX SET (Texas Standard Electronic Transactions) (tx-set)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Texas Standard Electronic Transaction (TX SET) · text copy line 3120

BEFORE: … ERCOT starts operation of the Texas Nodal Market in compliance with the rules and orders of the Public Utility Commission of Texas (PUCT). Once this date is determined, ERCOT shall post it on the ERCOT website and maintain it on the ERCOT website. Texas Standard Electronic Transaction (TX SET) (1) 
QUOTE: Texas Standard Electronic Transactions (TX SETs) are the electronic data transactions, implementation guides, and applicable external standards that enable and facilitate the retail business processes in the deregulated Texas electric market.
AFTER:  (2) The procedures used to transmit information pertaining to the Customer Registration Database are set forth in Section 19, Texas Standard Electronic Transaction. Three-Part Supply Offer An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Off…

### e2 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.2(1)(b) · text copy line 61 · heading above: 19.2 Methodology

BEFORE: …cess. 19.2 Methodology (1) In developing and maintaining the implementation guides, the appropriate Technical Advisory Committee (TAC) subcommittee shall: (a) Develop standardized transactions, which support documented ERCOT market business requirements across all Market Participants and ERCOT; (b) 
QUOTE: Develop Electronic Data Interchange (EDI) transactions using American National Standards Institute Accredited Standards Committee X12 (ANSI ASC X12) standards;
AFTER:  (c) Develop Extensible Markup Language (XML) transactions as needed; (d) Develop other spreadsheets, templates, comma separated value (CSV) files, etc. as needed; (e) Follow 'Best Practices' as identified in the overall technology market place related to development of Texas Standard Electronic Tra…

### e3 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(9), Switch Request (814_01) · text copy line 135 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: …: From the TDSP to the CR via point to point protocol, or from the CR to MOU/EC TDSP via point to point protocol, unless otherwise indicated in Retail Market Guide Section 8.1, is used to respond to the 814_PC, Maintain Customer Information Request. (9) Switch Request (814_01) This transaction set: 
QUOTE: From a new CR to ERCOT, is used to begin the Customer enrollment process for a switch.
AFTER:  (10) Switch Reject Response (814_02) This transaction set: From ERCOT to the new CR, is used by ERCOT to reject the 814_01, Switch Request, based on incomplete or invalid information. This is a conditional transaction and will only be used as a negative response. If the 814_02, Switch Reject Respon…

### e4 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(24), Move In Request (814_16) · text copy line 277 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: … POLR or designated CR, is used in response to a Mass Transition. (b) From ERCOT to the Gaining CR, is used in response to an Acquisition Transfer. (23) Drop Enrollment Response (814_15) This transaction set is no longer valid as of Texas SET 4.0. (24) Move In Request (814_16) This transaction set: 
QUOTE: From the new CR to ERCOT, is used to begin the Customer enrollment process for a move in.
AFTER:  (25) Move In Reject Response (814_17) This transaction set: From ERCOT to the new CR, is used by ERCOT to reject the 814_16, Move In Request, based on incomplete or invalid information. This is a conditional transaction and will only be used as a negative response. If the 814_17, Move In Reject Res…

### e5 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(42), Monthly or Final Usage (867_03) · text copy line 439 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: …rket Guide Section 8.1. (41) Historical Usage (867_02) This transaction set: (a) From the TDSP to ERCOT, is used to report historical usage. (b) From ERCOT to the CR, is essentially a pass through of the TDSP's 867_02, Historical Usage. (42) Monthly or Final Usage (867_03) This transaction set: (a) 
QUOTE: From the TDSP to ERCOT, is used to report monthly usage.
AFTER:  (b) From ERCOT to the CR, is essentially a pass through of the TDSP's 867_03, Monthly or Final Usage. (c) From ERCOT to the TDSP or CR, is for ERCOT polled services. (43) Initial Meter Read (867_04) This transaction set: (a) From the TDSP to ERCOT, is used to report the initial read associated with…

### e6 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4(1) · text copy line 493 · heading above: 19.4 Texas Standard Electronic Transaction Change Control Process

BEFORE: … to CR, is used by the TDSP to notify the CR that the trouble condition has been resolved. This is a required transaction for the TDSP when an Option 1 CR utilizes the T1, Option 1 Outages: Trouble Reporting Request, transaction. 19.4 Texas Standard Electronic Transaction Change Control Process (1) 
QUOTE: The appropriate Technical Advisory Committee (TAC) subcommittee shall make modifications and additions to the Texas Standard Electronic Transactions (TX SETs) in accordance with this Section. TX SETs will be expanded and modified to accommodate retail market operations or regulatory requirements on an ongoing basis.
AFTER:  Each Market Participant will rely on established, documented, and tested transactions. The Texas SET Change Control process provides the mechanism by which changes to the Texas SET Implementation Guides may be discussed, reviewed, accepted, and implemented. 19.4.1 Technical Advisory Committee Subco…

### e7 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.7(1) · text copy line 551 · heading above: 19.7 Advanced Meter Interval Data Format and Submission

BEFORE: … (TX SET) recognizes all characters within the basic character set. Further clarification and additional character set validations are available within each Texas SET Implementation Guide that is located on the ERCOT website. 19.6 RESERVED 19.7 Advanced Meter Interval Data Format and Submission (1) 
QUOTE: Transmission and/or Distribution Service Providers (TDSPs) will provide 15-minute interval data to ERCOT from provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ Interval Data Recorders (IDRs) using an ERCOT specified file format submitted via North American Energy Standards Board (NAESB) on at least a monthly basis.
AFTER:  19.8 Retail Market Testing (1) The Texas Standard Electronic Transaction (TX SET) Working Group works with the ERCOT flight administrator to develop and maintain a test plan and related testing standards for all retail transactional changes within the ERCOT market. (2) Market Participants may be re…

### e9 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(1), Service Order Request (650_01) · text copy line 79 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: …s); and (f) Develop processes and procedures for the management of changes to TX SETs and the release of new versions of TX SETs. 19.3 Texas Standard Electronic Transaction Definitions 19.3.1 Defined Texas Standard Electronic Transactions (1) Service Order Request (650_01) This transaction set: (a) 
QUOTE: From the Competitive Retailer (CR) to the Transmission and/or Distribution Service Provider (TDSP) via point to point protocol, is used to initiate the original service order request, cancel request, or change/update request.
AFTER:  (b) For every 650_01, Service Order Request, there will be a 650_02, Service Order Response. (2) Service Order Response (650_02) This transaction set: (a) From the TDSP to the CR via point to point protocol, is used to send a response to the CR's original 650_01, Service Order Request, that the tra…

### e10 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.1(2)(a) · text copy line 49 · heading above: 19.1 Overview

BEFORE: …tric market. The Texas SET Implementation Guides and Texas SET Change Control process documents shall be posted on the ERCOT website. The Texas SET Implementation Guides shall serve as the standard for the applicable TX SETs among all Market Participants and ERCOT. (2) This Section shall cover: (a) 
QUOTE: Transactions between Transmission and/or Distribution Service Providers (TDSPs) (refers to all TDSPs unless otherwise specified), Competitive Retailers (CRs) and ERCOT;
AFTER:  (b) Technical Advisory Committee (TAC) subcommittee and ERCOT responsibilities; and (c) Texas SET Change Control process. 19.2 Methodology (1) In developing and maintaining the implementation guides, the appropriate Technical Advisory Committee (TAC) subcommittee shall: (a) Develop standardized tra…

### e11 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.1(1) · text copy line 309 · heading above: 15.1.3.1 Mass Transition Process

BEFORE: …may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes. 15.1.3.1 Mass Transition Process (1) 
QUOTE: In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP.
AFTER:  The 814_03 transaction shall contain a request for historical usage and the requested date for the meter read date to transfer the ESI IDs. If an actual meter read cannot be obtained by the date requested in the 814_03 transaction, then the meter read may be estimated by the TDSP. (See Retail Marke…

### e13 · `np-24` · tier 1 · ERCOT Nodal Protocols, Section 24: Retail Point to Point Communications (effective 2023-11-01)
locator: Section 24(1), Retail Point to Point Communications · text copy line 61 · heading above: 24.6 MOU/EC TDSP to CR Maintain Customer Information Request 24-7

BEFORE: …titive Retailer 24-7 24.6 MOU/EC TDSP to CR Maintain Customer Information Request 24-7 24.6.1 Timing of 814_PC Maintain Customer Information Request from Municipally Owned Utility/Electric Cooperative Transmission and/or Distribution Service Provider 24-7 24 Retail Point to Point Communications (1) 
QUOTE: Point to point communications include transactions flowing directly between Competitive Retailers (CRs), and Transmission and/or Distribution Service Providers (TDSPs) and do not flow through ERCOT.
AFTER:  These point to point transactions may be Customer requested service orders and CR/TDSP invoicing and remittance. 24.1 Maintenance Service Order Request (1) To initiate an original service order, cancel, or change (update) request, the Competitive Retailer (CR) sends maintenance related information …

### e14 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15(5), Customer Registration · text copy line 171 · heading above: 15.4.1.5 Electric Service Identifier Maintenance 15-33

BEFORE: …ection 19, Texas Standard Electronic Transaction. A reference to any TX SET transaction should be read as referring to the named transaction or its Market Information System (MIS) equivalent, if any. Transaction flow diagrams for Customer registration processing are posted on the ERCOT website. (5) 
QUOTE: ERCOT will reject any initiating transaction due to date reasonableness if the requested implementation date is of more than 90 days in the future or 270 days in the past. Initiating transactions are: 814_01, Switch Request; 814_16, Move In Request; and 814_24, Move Out Request.
AFTER:  ERCOT will reject an 814_18, Establish/Change/Delete CSA Request, transaction with a requested start date of more than 90 days in the future or a requested start date in the past. (6) ERCOT will prioritize initiating or inbound transactions in the following manner. The following timing requirement …

### e15 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15(6)(a)-(b), Customer Registration (prioritization) · text copy line 175 · heading above: 15.4.1.5 Electric Service Identifier Maintenance 15-33

BEFORE: … than 90 days in the future or a requested start date in the past. (6) ERCOT will prioritize initiating or inbound transactions in the following manner. The following timing requirement calculations will not include the duration of a planned and TAC subcommittee-approved ERCOT retail system outage: 
QUOTE: (a) Level 1 - Same day 814_16 transactions, same day 814_24 transactions, 814_01 transactions and 814_20, ESI ID Maintenance Requests (Create), will be processed in one Retail Business Hour. (b) Level 2 - Standard 814_16 transactions and standard 814_24 transactions will be processed in two Retail Business Hours.
AFTER:  (c) Level 3 - 867_02, Historical Usage, 814_20, ESI ID Maintenance Requests (Maintain and Retire), will be processed in four Retail Business Hours. (d) Level 4 - All 814_26, Historical Usage Requests, 814_18, Establish/Change/Delete CSA Requests, and 814_19, Establish/Change/Delete CSA Responses, w…

### e24 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.1(1)(a)-(c), Technical Advisory Committee Subcommittee Responsibilities · text copy line 497 · heading above: 19.4.1 Technical Advisory Committee Subcommittee Responsibilities

BEFORE: … rely on established, documented, and tested transactions. The Texas SET Change Control process provides the mechanism by which changes to the Texas SET Implementation Guides may be discussed, reviewed, accepted, and implemented. 19.4.1 Technical Advisory Committee Subcommittee Responsibilities (1) 
QUOTE: The appropriate TAC subcommittee will continue to: (a) Review and approve Texas SET Change Controls; (b) Classify a Texas SET Change Control request as urgent when the change meets the criteria in Section 19.4.5, Urgent Change Request; (c) Review and approve Texas SET Implementation Guides; and
AFTER:  (d) Coordinate timing for changes in any of the TX SETs. 19.4.2 ERCOT Responsibilities (1) ERCOT will facilitate the activities listed in Section 19.4, Texas Standard Electronic Transaction Change Control Process, by overseeing the Texas SET Change Control activities of the TX SETs. (2) ERCOT, in c…

### e25 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.3, Texas SET Change Control Dispute Process · text copy line 519 · heading above: 19.4.3 Texas SET Change Control Dispute Process

BEFORE: … published by ERCOT within seven Retail Business Days of approval by the appropriate TAC subcommittee. (b) The approved Texas SET Implementation Guides shall be published by ERCOT at a predetermined time as set by the appropriate TAC subcommittee. 19.4.3 Texas SET Change Control Dispute Process (1) 
QUOTE: A Market Participant may register a dispute with ERCOT by completing the designated form provided on the ERCOT website within seven days after the date of the appropriate TAC subcommittee decision. ERCOT shall reject disputes made after that time.
AFTER:  The dispute shall be submitted to txsetchangecontrol@ercot.com. ERCOT shall post disputes with the applicable change control within three Business Days of receiving the dispute. (2) Disputes shall be heard at the next regularly scheduled TAC meeting. However, if the dispute is posted within seven d…

### e26 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.3(2), Texas SET Change Control Dispute Process · text copy line 521 · heading above: 19.4.3 Texas SET Change Control Dispute Process

BEFORE: …tes with the applicable change control within three Business Days of receiving the dispute. (2) Disputes shall be heard at the next regularly scheduled TAC meeting. However, if the dispute is posted within seven days of the TAC meeting the dispute will not be heard until the subsequent TAC meeting. 
QUOTE: A dispute of a Texas SET Change Control to TAC suspends any further decisions on the Texas SET Change Control until the dispute has been decided by TAC.
AFTER:  19.4.4 Submission of Proposed Changes (1) An Entity proposing a change shall notify ERCOT by submitting the designated form provided on the ERCOT website. (2) Texas SET Change Controls will be processed in accordance with the Texas Standard Electronic Transaction Implementation Guides Change Contro…

### e27 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.5, Urgent Change Request · text copy line 533 · heading above: 19.4.5 Urgent Change Request

BEFORE: …th the Texas Standard Electronic Transaction Implementation Guides Change Control Process located on the ERCOT website. (3) Texas SET Change Controls will proceed on a normal timeline unless classified as urgent as described in Section 19.4.5, Urgent Change Request. 19.4.5 Urgent Change Request (1) 
QUOTE: A Texas SET Change Control may be classified as urgent by the appropriate TAC subcommittee and will accommodate: (a) An approved regulatory requirement; and /or (b) Necessary corrective action to retail market processes.
AFTER:  (2) Urgent Texas SET Change Controls shall be implemented as prescribed by the approving TAC subcommittee. 19.5 Texas Standard Electronic Transactions Acceptable Character Set 19.5.1 Alphanumeric Field(s) (1) For use on an alphanumeric field, Texas Standard Electronic Transaction (TX SET) recognize…

### e28 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.2(2)(b), Market Synchronization · text copy line 357 · heading above: 7.2 Market Synchronization

BEFORE: …ject Report - A daily report identifying inbound transactions that ERCOT rejected due to mapping status errors. (i) Notifies TDSPs and CRs that one or more transactions submitted the previous day were rejected due to failing the Texas Standard Electronic Transaction (TX SET) validation process. (b) 
QUOTE: Potential Load Loss Report - A daily report notifying CRs of potential Customer loss based on ERCOT's receipt of the TDSP's accepted response to a Switch or Move-In Request.
AFTER:  (i) Notifies CRs that are the current Retail Electric Provider (REP) of record for an Electric Service Identifier (ESI ID) that the ESI ID has a pending Switch or Move-In Request and the scheduling transaction for the pending order has been received outside the two Business Day window; and (ii) Ass…

### e38 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.2(2)(a), ERCOT Responsibilities · text copy line 513 · heading above: 19.4.2 ERCOT Responsibilities

BEFORE: …seeing the Texas SET Change Control activities of the TX SETs. (2) ERCOT, in conjunction with the appropriate TAC subcommittee, will maintain, publish, and post the Texas SET Implementation Guides and the Texas SET Change Controls requesting modifications and enhancements, to the ERCOT website. (a) 
QUOTE: The Texas SET Change Controls shall be published by ERCOT within seven Retail Business Days of approval by the appropriate TAC subcommittee.
AFTER:  (b) The approved Texas SET Implementation Guides shall be published by ERCOT at a predetermined time as set by the appropriate TAC subcommittee. 19.4.3 Texas SET Change Control Dispute Process (1) A Market Participant may register a dispute with ERCOT by completing the designated form provided on t…

### e39 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.2(1)(c)-(d), Methodology · text copy line 63 · heading above: 19.2 Methodology

BEFORE: …evelop standardized transactions, which support documented ERCOT market business requirements across all Market Participants and ERCOT; (b) Develop Electronic Data Interchange (EDI) transactions using American National Standards Institute Accredited Standards Committee X12 (ANSI ASC X12) standards; 
QUOTE: (c) Develop Extensible Markup Language (XML) transactions as needed; (d) Develop other spreadsheets, templates, comma separated value (CSV) files, etc. as needed;
AFTER:  (e) Follow 'Best Practices' as identified in the overall technology market place related to development of Texas Standard Electronic Transactions (TX SETs); and (f) Develop processes and procedures for the management of changes to TX SETs and the release of new versions of TX SETs. 19.3 Texas Stand…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e10, e2, e39): Protocol Section 19 covers transactions among TDSPs, Competitive Retailers and ERCOT. [e10] The responsible TAC subcommittee develops EDI transactions using ANSI ASC X12 standards, XML transactions as needed, and other spreadsheets, templates and CSV files as needed. [e2][e39]
- **How it works #5** (cites e14, e15): Validation and priority. ERCOT rejects an initiating 814_01, 814_16 or 814_24 for date reasonableness if the requested date is more than 90 days in the future or 270 days in the past. [e14] ERCOT processes same-day 814_16 and 814_24, 814_01 and ESI ID Maintenance (Create) transactions within one Retail Business Hour (Level 1) and standard 814_16 and 814_24 within two Retail Business Hours (Level 2). [e15]
- **How it works #7** (cites e24, e6, e27, e38, e25, e26): Change control. The appropriate TAC subcommittee reviews and approves Texas SET Change Controls and Implementation Guides and classifies a change as urgent. [e24] TX SETs are expanded and modified on an ongoing basis. [e6] A change may be classified urgent to accommodate an approved regulatory requirement and/or necessary corrective action to retail market processes. [e27] ERCOT publishes approved change controls within seven Retail Business Days of subcommittee approval. [e38] A Market Participant may dispute a subcommittee decision to ERCOT within seven days of it, and a dispute to TAC suspends further decisions on that change control until TAC decides it. [e25][e26]
- **Common confusion #1** (cites e1, e9, e13, e6, e24): (Guidance) TX SET is the set of transactions, implementation guides and standards for retail processes, not a database. [e1] Not every TX SET passes through ERCOT: the 650 service orders are point to point between the CR and TDSP. [e9][e13] And changes to TX SETs are made by the appropriate TAC subcommittee through Texas SET Change Control under Section 19.4. [e6][e24]
- **Questions #4** (cites e6, e24): The appropriate TAC subcommittee, through change control. [e6][e24]
- **Link to retail-choice** (cites e1): used-in Retail Choice / Competitive Retail Market: TX SET enables the retail business processes of the deregulated market. [e1]
- **Link to tdsp** (cites e5): related TDSP (Transmission & Distribution Service Provider): The TDSP reports monthly usage to ERCOT with an 867_03. [e5]
- **Link to rep** (cites e3, e4, e9): related REP (Retail Electric Provider): A new CR submits switch and move-in requests to ERCOT, and a CR submits service order requests to the TDSP. [e3][e4][e9]
- **Link to mass-transition** (cites e11): related Mass Transition: In a Mass Transition event ERCOT submits an 814_03 Enrollment Notification Request. [e11]
- **Link to ams-meters** (cites e7): related AMS Smart Meter Data: TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format via NAESB. [e7]
- **Link to nprr** (cites e6, e24): contrasts-with NPRR (Nodal Protocol Revision Request): Section 19.4 has the appropriate TAC subcommittee make TX SET modifications through the Texas SET Change Control process; the saved text does not describe it as an NPRR. [e6][e24]
- **Link to stakeholder-process** (cites e25, e26): related Stakeholder Process (TAC, PRS, WMS, ROS, Board): A Market Participant may register a dispute of a TAC subcommittee decision on a Texas SET Change Control within seven days; disputes go to TAC. [e25][e26]
- **Link to market-information-system** (cites e28): related MIS (Market Information System) & Public Data: ERCOT provides market synchronization reports for TX SET transactions on the Market Information System Certified Area. [e28]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) TX SET is the standard messaging layer between retailers, wires companies and ERCOT for switches, move-ins and usage. Changes are governed by market change control run by a TAC subcommittee.

