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

### e8 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.8(1) · text copy line 555 · heading above: 19.8 Retail Market Testing

BEFORE: …T from provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ Interval Data Recorders (IDRs) using an ERCOT specified file format submitted via North American Energy Standards Board (NAESB) on at least a monthly basis. 19.8 Retail Market Testing (1) 
QUOTE: The Texas Standard Electronic Transaction (TX SET) Working Group works with the ERCOT flight administrator to develop and maintain a test plan and related testing standards for all retail transactional changes within the ERCOT market.
AFTER:  (2) Market Participants may be required to successfully test as a means of confirming that each Market Participant is qualified to transmit TX SET transactions as a result of approved changes prior to production implementation. Some of these changes include, but may not be limited to: (a) North Ame…

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

### e12 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.1(1), Overview · text copy line 45 · heading above: 19.1 Overview

BEFORE: …ew (1) Texas Standard Electronic Transactions (TX SETs) provide the mechanism that enables and facilitates the retail business processes in the deregulated Texas electric market. The Texas SET Implementation Guides and Texas SET Change Control process documents shall be posted on the ERCOT website. 
QUOTE: The Texas SET Implementation Guides shall serve as the standard for the applicable TX SETs among all Market Participants and ERCOT.
AFTER:  (2) This Section shall cover: (a) Transactions between Transmission and/or Distribution Service Providers (TDSPs) (refers to all TDSPs unless otherwise specified), Competitive Retailers (CRs) and ERCOT; (b) Technical Advisory Committee (TAC) subcommittee and ERCOT responsibilities; and (c) Texas SE…

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

### e16 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1, Submission of a Switch Request · text copy line 193 · heading above: 15.1.1 Submission of a Switch Request

BEFORE: …. The Switch Request shall include, at a minimum, the five-digit zip code and an ESI ID. Within this transaction, the CR will also send information necessary for ERCOT to send a switch confirmation notice to the Customer as required by the applicable Public Utility Commission of Texas (PUCT) rules. 
QUOTE: The First Available Switch Date (FASD) is the day received by ERCOT unless received on a Sunday or an ERCOT holiday.
AFTER:  If received on a Sunday or an ERCOT holiday, the FASD will be calculated as the next day that is not a Sunday or an ERCOT holiday. 15.1.1.1 Notification to Customer of Switch Request (1) ERCOT will send a switch confirmation notice to the Customer as specified in the PUCT rules. This notice will gi…

### e17 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.3(1), Switch Enrollment Notification Request to TDSP · text copy line 217 · heading above: 15.1.1.3 Switch Enrollment Notification Request to TDSP

BEFORE: …rovided in the 867_02 transaction by the TDSP within four Retail Business Hours of receipt from the TDSP. (2) Provision of meter read and historical usage data pursuant to this paragraph shall not be required when prohibited by PUCT rules. 15.1.1.3 Switch Enrollment Notification Request to TDSP (1) 
QUOTE: ERCOT will submit to the TDSP serving the ESI ID, an enrollment notification request using the 814_03, Enrollment Notification Request, within one Retail Business Hour of the receipt of a valid Switch Request.
AFTER:  The notification will include the name of the CR requesting service to the ESI ID and will indicate the FASD calculated pursuant to Section 15.1.1, Submission of a Switch Request. 15.1.1.4 Response from TDSP to Registration Notification Request (1) Upon receipt of an enrollment notification request…

### e18 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.4(2), Response from TDSP to Registration Notification Request · text copy line 243 · heading above: 15.1.1.4 Response from TDSP to Registration Notification Request

BEFORE: …ile Type; (f) Scheduled meter read date; (g) Meter type, identification number, number of dials and role for each meter at the ESI ID if the ESI ID is metered; (h) Number and description of each unmetered device for unmetered ESI IDs; (i) Station ID; and (j) Distribution Loss Factor (DLF) code. (2) 
QUOTE: This information shall be transmitted using the 814_04, Enrollment Notification Response, within two Retail Business Days of the receipt of the 814_03, Enrollment Notification Request. If the TDSP does not respond with the ESI ID information within two Retail Business Days after the receipt of the 814_03 transaction from ERCOT, ERCOT shall create an internal tracking exception. The switch will be held in "in review" status until the TDSP's 814_04 transaction response is received.
AFTER:  If the TDSP's 814_04 transaction is not received within three Retail Business Days of receipt of the 814_03 transaction from ERCOT and is still not received by the earlier of the requested date on the switch or within 20 Retail Business Days after the original submission of the 814_03 transaction f…

### e19 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.5(1), Response to Valid Enrollment Request · text copy line 249 · heading above: 15.1.1.5 Response to Valid Enrollment Request

BEFORE: …h, ERCOT will send the TDSP's 814_28 transaction to the requesting CR. The TDSP will note the complete unexecutable reason on the 814_28 transaction. The initiating transaction is considered unexecutable. The current CR will remain the CR of Record. 15.1.1.5 Response to Valid Enrollment Request (1) 
QUOTE: Within one Retail Business Day of receipt of the TDSP's 814_04, Enrollment Notification Response, ERCOT will respond to the requesting CR in accordance with the 814_05, CR Enrollment Notification Response. This response will contain the scheduled meter read date for the switch and all information the TDSP furnished to ERCOT under the TDSP's 814_04 transaction. The TDSP must effectuate the switch within two Retail Business Days of the scheduled meter read date.
AFTER:  15.1.1.6 Loss Notification to Current Competitive Retailer (with date) (1) Within two Retail Business Days of the scheduled meter read date for the switch, but not before the receipt of the TDSP's 814_04, Enrollment Notification Response, ERCOT will notify the current CR using the 814_06, Loss Noti…

### e20 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.7(1), Completion of Switch Request and Effective Switch Date · text copy line 257 · heading above: 15.1.1.7 Completion of Switch Request and Effective Switch Date

BEFORE: …, but not before the receipt of the TDSP's 814_04, Enrollment Notification Response, ERCOT will notify the current CR using the 814_06, Loss Notification. This notification will contain the scheduled meter read date for the switch. 15.1.1.7 Completion of Switch Request and Effective Switch Date (1) 
QUOTE: A Switch Request is effectuated on the actual meter read date in the 867_04, Initial Meter Read, or the final 867_03, Monthly or Final Usage, which must be equal to the scheduled meter read date.
AFTER:  The process for a specific Switch Request is complete upon receipt of the effectuating meter read sent by the TDSP. The TDSP shall send the meter read information to ERCOT using the 867_03 transaction and 867_04 transaction within three Retail Business Days of the meter read. This transaction will …

### e21 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.7(3), Completion of Switch Request and Effective Switch Date · text copy line 261 · heading above: 15.1.1.7 Completion of Switch Request and Effective Switch Date

BEFORE: … reads will be sent to the CR DUNS Number within the Texas Standard Electronic Transaction (TX SET) transaction from the TDSP within 12 hours of receipt by ERCOT. (2) Failure by ERCOT to provide the initial meter read information does not change the Mass Transition Effective Date of the switch. (3) 
QUOTE: Switches shall become effective at 0000 (midnight) on the actual date of the effectuating meter read.
AFTER:  The new CR may request a special meter read (including a profile-estimated meter read or interval meter calculation as allowed), in accordance with the TDSP's tariff. For a special meter read, the switch is effective at 0000 (midnight) the day of the special meter read. During the switch process, t…

### e22 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.4.7.1(1), Standard Move-In Requests · text copy line 429 · heading above: 15.1.4.7.1 Standard Move-In Requests

BEFORE: …SP may complete the move in using an estimated meter read or complete unexecutable if the meter requires a permit, unsafe conditions exist, tampering has been detected, or other similar conditions are found that would not allow an actual reading to be taken. 15.1.4.7.1 Standard Move-In Requests (1) 
QUOTE: A standard Move-In Request is effectuated on the period start date in the 867_04, Initial Meter Read, which shall be the date requested in the 814_16, Move In Request, provided that the 814_03, Enrollment Notification Request, was received by the TDSP by 1700 at least two Retail Business Days prior to the requested date.
AFTER:  If the 814_03 transaction is not received by the TDSP by 1700 at least two Retail Business Days prior to the requested date, the move in will be completed within two Retail Business Days after the receipt of the 814_03 transaction by the TDSP. An extension of this period may be necessitated by circ…

### e23 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(36)(c), Complete Unexecutable or Permit Required (814_28) · text copy line 389 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: …counts, to notify the CR that the work was complete unexecutable, or that a permit is required. Upon sending this transaction to notify the new CR of a complete unexecutable, the TDSP closes the initiating transaction. The new CR must initiate corrective action and resubmit the Move-In Request. (c) 
QUOTE: Upon sending the 814_28 (PT) transaction to notify the new CR that a permit is required, ERCOT will allow the TDSP 20 Retail Business Days to send the 814_04, Enrollment Notification Response, due to permit requirements.
AFTER:  After the 20 Retail Business Days, if no 814_04 transaction is received, ERCOT will then issue an 814_08, Cancel Request. If the move in is cancelled due to permit not received, ERCOT will note the reason in the 814_08 transaction. (d) For a switch, is from the TDSP to ERCOT, and from ERCOT to the …

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

### e29 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.2(2)(a), Market Synchronization · text copy line 353 · heading above: 7.2 Market Synchronization

BEFORE: …arise as Market Participants submit and process transactions. (2) In order to maintain synchronization with the Transmission and/or Distribution Service Providers (TDSPs) and Competitive Retailers (CRs), ERCOT provides the following reports on the Market Information System (MIS) Certified Area: (a) 
QUOTE: Mapping Status Reject Report - A daily report identifying inbound transactions that ERCOT rejected due to mapping status errors.
AFTER:  (i) Notifies TDSPs and CRs that one or more transactions submitted the previous day were rejected due to failing the Texas Standard Electronic Transaction (TX SET) validation process. (b) Potential Load Loss Report - A daily report notifying CRs of potential Customer loss based on ERCOT's receipt o…

### e30 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.2(3)-(4), Market Synchronization · text copy line 363 · heading above: 7.2 Market Synchronization

BEFORE: …Customer and the associated Load. (3) ERCOT has developed MarkeTrak, an issue management tool, to help ensure that the various databases are synchronized with each other. The ERCOT MarkeTrak system is a web-based workflow application made available to all active Market Participants with MIS access. 
QUOTE: MarkeTrak is the primary tool used by CRs, TDSPs and ERCOT to resolve retail market transaction issues, request manual service order cancellations, request ERCOT assistance with inadvertent ESI ID transfers, and file Data Extract Variance (DEV) issues.
AFTER:  (4) All retail market transaction issues and DEV issues must be logged in the MarkeTrak system before they can be worked by ERCOT. (5) Market Participants should refer to the MarkeTrak Users Guide located on the ERCOT website for guidelines on issue submission, timing, and issue resolution. 7.2.1 T…

### e31 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.7(2)(c), Transaction Timing Matrix · text copy line 1518 · heading above: 7.7 Transaction Timing Matrix

BEFORE: …of transactions between Market Participants and ERCOT. (2) Appendix D1, Transaction Timing Matrix, is based on the following assumptions: (a) Business Hours are from 0800 - 1700, Monday through Friday (excluding holidays); (b) 0800 - 1700 on a Retail Business Day is considered one Business Day; (c) 
QUOTE: Days are counted beginning with Day 0 (day of transaction receipt) and progress sequentially from that day as Day 1, Day 2, etc.
AFTER:  (i) Day 0 is transaction receipt date and may not be a full Retail Business Day if received after 0800 but before 1700 on a Retail Business Day. (ii) If the transaction is received after 1700 on a Retail Business Day, Day 0 will begin the next Retail Business Day and will be a full Retail Business …

### e32 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.7(1), Transaction Timing Matrix · text copy line 1510 · heading above: 7.7 Transaction Timing Matrix

BEFORE: … functionality available 24/7 at repdesk.aep.com. CNP 800-332-7143 Oncor 888-313-6934 or contactcenter@Oncor.com TNMP 888-866-7456 -------------------------------------------------------------------------------------------------------------------------------------- 7.7 Transaction Timing Matrix (1) 
QUOTE: Section 9, Appendices, Appendix D1, Transaction Timing Matrix, is an abbreviated version of Protocol Section 15, Customer Registration, used to assist Market Participants in identifying the flow and timing of transactions between Market Participants and ERCOT.
AFTER:  (2) Appendix D1, Transaction Timing Matrix, is based on the following assumptions: (a) Business Hours are from 0800 - 1700, Monday through Friday (excluding holidays); (b) 0800 - 1700 on a Retail Business Day is considered one Business Day; (c) Days are counted beginning with Day 0 (day of transact…

### e33 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(5), TDSP Invoice (810_02) · text copy line 107 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: … of Texas Standard Electronic Transaction (SET) 4.0. (5) TDSP Invoice (810_02) This transaction set: From the TDSP to the CR via point to point protocol, is an invoice for wire charges as listed in each TDSP tariff (i.e., delivery charges, late payment charges, discretionary service charges, etc.). 
QUOTE: The 810_02, TDSP Invoice, may be paired with an 867_03, Monthly or Final Usage, to trigger the Customer billing process.
AFTER:  (6) MOU/EC Invoice (810_03) This transaction set: From the CR to the MOU/EC TDSP via point to point protocol, is an invoice for monthly energy charges, discretionary, and service charges for the current billing period, unless otherwise indicated in Retail Market Guide Section 8.1. The 810_03, MOU/E…

### e34 · `np-24` · tier 1 · ERCOT Nodal Protocols, Section 24: Retail Point to Point Communications (effective 2023-11-01)
locator: Section 24.1.3.2(1)(a), Bill Payment Switch Hold · text copy line 105 · heading above: 24.1.3.2 Bill Payment Switch Hold

BEFORE: …, ESI ID Maintenance Request. 24.1.3.2 Bill Payment Switch Hold (1) A bill payment switch hold is used when a Customer has entered into a payment agreement with their current CR. A switch hold will be placed on the ESI ID in accordance with P.U.C. SUBST. R. 25.480, Bill Payment and Adjustments. (a) 
QUOTE: To add a switch hold indicator, the CR sends the 650_01, Service Order Request, to the TDSP requesting the addition of the switch hold indicator. The TDSP will respond with the 650_02, Service Order Response, to the CR acknowledging receipt of the service order request. Confirmation that the service order request has been completed will be received through the 814_20, ESI ID Maintenance Request.
AFTER:  (b) To remove a switch hold indicator, the CR sends the 650_01 to the TDSP requesting the removal of the switch hold indicator. The TDSP will respond with the 650_02 response to the CR acknowledging receipt of the service order request. Confirmation that the service order request has been completed…

### e35 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.15.2(1), Submission of Interval Data on ESI IDs with Advanced Metering Systems · text copy line 2846 · heading above: 7.15.2 Submission of Interval Data on Electric Service Identifier(s) with Advanced Metering Systems

BEFORE: … G, ERCOT Specified File Format for Submission of Interval Data for Advanced Metering Systems. ERCOT will send a response to the submitting TDSP via North American Energy Standards Board (NAESB). 7.15.2 Submission of Interval Data on Electric Service Identifier(s) with Advanced Metering Systems (1) 
QUOTE: All TDSPs shall submit 15 minute Settlement Quality Meter Data to ERCOT daily for provisioned Advanced Metering System (AMS) meters.
AFTER:  Each file shall contain up to, but not to exceed, 50,000 data records. For optimum processing at ERCOT, it is suggested that the file contain a minimum of 10,000 data records. Files shall be zipped prior to Pretty Good Privacy (PGP) encryption and compression. See Section 9, Appendices, Appendix G,…

### e36 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(22)(a), Drop Enrollment Request (814_14) · text copy line 265 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: …on the 814_12 transaction. (e) From ERCOT to the current CR, is used to respond to the requested date change to the original move out date on the 814_12 transaction. (f) From the new CR to ERCOT, is no longer valid as of Texas SET 4.0. (22) Drop Enrollment Request (814_14) This transaction set: (a) 
QUOTE: From ERCOT to the POLR or designated CR, is used in response to a Mass Transition.
AFTER:  (b) From ERCOT to the Gaining CR, is used in response to an Acquisition Transfer. (23) Drop Enrollment Response (814_15) This transaction set is no longer valid as of Texas SET 4.0. (24) Move In Request (814_16) This transaction set: From the new CR to ERCOT, is used to begin the Customer enrollmen…

### e37 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(11)(a), Enrollment Notification Request (814_03) · text copy line 147 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: … is a conditional transaction and will only be used as a negative response. If the 814_02, Switch Reject Response, is not received from ERCOT, the new CR will receive the 814_05, CR Enrollment Notification Response, from ERCOT. (11) Enrollment Notification Request (814_03) This transaction set: (a) 
QUOTE: From ERCOT to the TDSP, passes information from the 814_01, Switch Request; 814_16, Move In Request; or an 814_24, Move Out Request, where a Continuous Service Agreement (CSA) exists.
AFTER:  (b) The historical usage, if requested by the submitter of the initiating transaction, will be sent using the 867_02, Historical Usage. (c) Will be initiated by ERCOT and transmitted to the TDSP in the event of a Mass Transition. (d) Will be initiated by ERCOT and transmitted to the TDSP in the eve…

### e38 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.4.2(2)(a), ERCOT Responsibilities · text copy line 513 · heading above: 19.4.2 ERCOT Responsibilities

BEFORE: …seeing the Texas SET Change Control activities of the TX SETs. (2) ERCOT, in conjunction with the appropriate TAC subcommittee, will maintain, publish, and post the Texas SET Implementation Guides and the Texas SET Change Controls requesting modifications and enhancements, to the ERCOT website. (a) 
QUOTE: The Texas SET Change Controls shall be published by ERCOT within seven Retail Business Days of approval by the appropriate TAC subcommittee.
AFTER:  (b) The approved Texas SET Implementation Guides shall be published by ERCOT at a predetermined time as set by the appropriate TAC subcommittee. 19.4.3 Texas SET Change Control Dispute Process (1) A Market Participant may register a dispute with ERCOT by completing the designated form provided on t…

### e40 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.3.1(14), Loss Notification (814_06) · text copy line 171 · heading above: 19.3.1 Defined Texas Standard Electronic Transactions

BEFORE: … ERCOT to the new CR, is essentially a pass through of the TDSP's 814_04, Enrollment Notification Response, information. This transaction will provide the scheduled meter read date for the CR's 814_01, Switch Request, or 814_16, Move In Request. (14) Loss Notification (814_06) This transaction set: 
QUOTE: From ERCOT to the current CR, is used to notify a current CR of a drop initiated by an 814_01, Switch Request, or drop notification due to a pending 814_16, Move In Request, from a new CR.
AFTER:  (15) Loss Notification Response (814_07) This transaction set is no longer valid as of Texas SET 4.0. (16) Cancel Request (814_08) This transaction set: (a) From ERCOT to the TDSP, is used to cancel an 814_03, Enrollment Notification Request, or an 814_24, Move Out Request. (b) From ERCOT to the cu…

### e41 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.2(2), Market Synchronization · text copy line 351 · heading above: 7.2 Market Synchronization

BEFORE: …--+ | TNMP | 888-866-7456 | www.tnmp.com | +-------+---------------------------------------------------------------------------+---------------------------------------+ 7.2 Market Synchronization (1) Market synchronization issues may arise as Market Participants submit and process transactions. (2) 
QUOTE: In order to maintain synchronization with the Transmission and/or Distribution Service Providers (TDSPs) and Competitive Retailers (CRs), ERCOT provides the following reports on the Market Information System (MIS) Certified Area:
AFTER:  (a) Mapping Status Reject Report - A daily report identifying inbound transactions that ERCOT rejected due to mapping status errors. (i) Notifies TDSPs and CRs that one or more transactions submitted the previous day were rejected due to failing the Texas Standard Electronic Transaction (TX SET) va…

### e42 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.1.4(2), Response from TDSP to Registration Notification Request, cancel pending · text copy line 243 · heading above: 15.1.1.4 Response from TDSP to Registration Notification Request

BEFORE: …If the TDSP does not respond with the ESI ID information within two Retail Business Days after the receipt of the 814_03 transaction from ERCOT, ERCOT shall create an internal tracking exception. The switch will be held in "in review" status until the TDSP's 814_04 transaction response is received. 
QUOTE: If the TDSP's 814_04 transaction is not received within three Retail Business Days of receipt of the 814_03 transaction from ERCOT and is still not received by the earlier of the requested date on the switch or within 20 Retail Business Days after the original submission of the 814_03 transaction from ERCOT, ERCOT shall change the status of the switch to "cancel pending."
AFTER:  The TDSP will receive notification of the pending switch cancellation through the 814_08, Cancel Request. The TDSP will respond using the 814_09, Cancel Response. If the 814_09 transaction is an "accept," the submitting CR will receive notification of the switch cancellation through the 814_08 tran…

### e39 · `np-19` · tier 1 · ERCOT Nodal Protocols, Section 19: Texas Standard Electronic Transaction (effective 2026-08-01)
locator: Section 19.2(1)(c)-(d), Methodology · text copy line 63 · heading above: 19.2 Methodology

BEFORE: …evelop standardized transactions, which support documented ERCOT market business requirements across all Market Participants and ERCOT; (b) Develop Electronic Data Interchange (EDI) transactions using American National Standards Institute Accredited Standards Committee X12 (ANSI ASC X12) standards; 
QUOTE: (c) Develop Extensible Markup Language (XML) transactions as needed; (d) Develop other spreadsheets, templates, comma separated value (CSV) files, etc. as needed;
AFTER:  (e) Follow 'Best Practices' as identified in the overall technology market place related to development of Texas Standard Electronic Transactions (TX SETs); and (f) Develop processes and procedures for the management of changes to TX SETs and the release of new versions of TX SETs. 19.3 Texas Stand…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e12): TX SETs are the electronic data transactions, implementation guides and external standards that enable and facilitate the retail business processes in the deregulated Texas electric market. [e1] The Texas SET Implementation Guides are the standard for the applicable TX SETs among all Market Participants and ERCOT. [e12]
- **How it works #1** (cites e10, e2, e39): Protocol Section 19 covers transactions among TDSPs, Competitive Retailers and ERCOT. [e10] The responsible TAC subcommittee develops EDI transactions using ANSI ASC X12 standards, XML transactions as needed, and other spreadsheets, templates and CSV files as needed. [e2][e39]
- **How it works #2** (cites e13, e9, e33, e3, e4, e37, e17, e5) FLAG number-not-in-quote: 19.3, 15.1, 1.3: Two routes. Some transactions flow through ERCOT; others are point to point. Point-to-point communications flow directly between CRs and TDSPs and do not flow through ERCOT. [e13] Examples: a CR sends a 650_01 Service Order Request to the TDSP, [e9] and the TDSP sends the 810_02 invoice for wires charges, which may be paired with an 867_03 to trigger the customer billing process. [e33] Examples that run through ERCOT: a new CR sends ERCOT an 814_01 Switch Request to begin a switch enrollment, and an 814_16 Move In Request to begin a move in [e3][e4]; ERCOT passes these to the TDSP as an 814_03 Enrollment Notification Request (Section 19.3.1 words this as passing information from those requests "where a Continuous Service Agreement (CSA) exists"; Section 15.1.1.3 has ERCOT send the 814_03 on receipt of any valid Switch Request) [e37][e17]; and the TDSP reports monthly usage to ERCOT with an 867_03. [e5]
- **How it works #3** (cites e16, e17, e42, e19, e20, e21): The switch sequence (Protocol Section 15). ERCOT sets the First Available Switch Date (FASD) as the day it receives the 814_01, unless received on a Sunday or an ERCOT holiday. [e16] ERCOT sends the 814_03 to the TDSP within one Retail Business Hour of a valid Switch Request. [e17] The TDSP answers with an 814_04 within two Retail Business Days; if it does not, ERCOT creates an internal tracking exception and holds the switch in "in review" status until the TDSP's 814_04 is received. If the 814_04 is still missing after three Retail Business Days and by the earlier of the switch's requested date or 20 Retail Business Days after the original 814_03, ERCOT changes the switch status to "cancel pending". [e42] Within one Retail Business Day of the 814_04, ERCOT sends the new CR an 814_05 with the scheduled meter read date, and the TDSP must effectuate the switch within two Retail Business Days of that date. [e19] The switch is effectuated on the actual meter read date in the 867_04 or final 867_03, which must equal the scheduled meter read date, [e20] and becomes effective at 0000 (midnight) on that date. [e21]
- **How it works #4** (cites e22, e23): Move-ins. A standard Move-In Request is effectuated on the date requested in the 814_16, provided the TDSP received the 814_03 by 1700 at least two Retail Business Days before the requested date. [e22] Where a permit is required, ERCOT allows the TDSP 20 Retail Business Days to send the 814_04 after the 814_28 permit-pending notice. [e23]
- **How it works #5** (cites e14, e15): Validation and priority. ERCOT rejects an initiating 814_01, 814_16 or 814_24 for date reasonableness if the requested date is more than 90 days in the future or 270 days in the past. [e14] ERCOT processes same-day 814_16 and 814_24, 814_01 and ESI ID Maintenance (Create) transactions within one Retail Business Hour (Level 1) and standard 814_16 and 814_24 within two Retail Business Hours (Level 2). [e15]
- **How it works #6** (cites e31, e32): Counting days. The Retail Market Guide's Appendix D1 timing matrix counts days from Day 0, the day of transaction receipt. [e31] Its Appendix D1 Transaction Timing Matrix is an abbreviated version of Protocol Section 15 for identifying the flow and timing of transactions. [e32]
- **How it works #7** (cites e24, e6, e27, e38, e25, e26): Change control. The appropriate TAC subcommittee reviews and approves Texas SET Change Controls and Implementation Guides and classifies a change as urgent. [e24] TX SETs are expanded and modified on an ongoing basis. [e6] A change may be classified urgent to accommodate an approved regulatory requirement and/or necessary corrective action to retail market processes. [e27] ERCOT publishes approved change controls within seven Retail Business Days of subcommittee approval. [e38] A Market Participant may dispute a subcommittee decision to ERCOT within seven days of it, and a dispute to TAC suspends further decisions on that change control until TAC decides it. [e25][e26]
- **How it works #8** (cites e8): Testing. The TX SET Working Group works with the ERCOT flight administrator on test plans and testing standards for all retail transactional changes. [e8]
- **ERCOT context #1** (cites e7, e35) FLAG number-not-in-quote: 19.7: TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format, submitted via NAESB at least monthly under Protocol Section 19.7. [e7] The Retail Market Guide separately says all TDSPs shall submit 15 minute Settlement Quality Meter Data daily for provisioned AMS meters. [e35]
- **ERCOT context #2** (cites e11, e36): Mass Transition uses TX SETs: ERCOT initiates an 814_03 to the TDSP in a Mass Transition and sends an 814_14 Drop Enrollment Request to the POLR or designated CR. [e11][e36]
- **ERCOT context #3** (cites e41, e29, e28, e30): Practice. To keep the retail market synchronized, ERCOT provides reports on the Market Information System (MIS) Certified Area [e41], among them a daily Mapping Status Reject Report identifying inbound transactions it rejected for mapping status errors, [e29] and a daily Potential Load Loss Report that notifies CRs of potential Customer loss when ERCOT receives the TDSP's accepted response to a Switch or Move-In Request. [e28] MarkeTrak is the primary tool CRs, TDSPs and ERCOT use to resolve retail market transaction issues. [e30]
- **ERCOT context #4** (cites e34): Switch holds are an example of a point-to-point use: to add a bill-payment switch hold the CR sends a 650_01 to the TDSP, the TDSP answers with a 650_02, and completion is confirmed through the 814_20 ESI ID Maintenance Request. [e34]
- **Key facts #4** (cites e14): - Initiating transactions are rejected if the requested date is more than 90 days ahead or 270 days back. [e14]
- **Key facts #5** (cites e17, e18): - 814_03 to the TDSP within one Retail Business Hour of a valid Switch Request; 814_04 back within two Retail Business Days. [e17][e18]
- **Key facts #6** (cites e21): - Switch effective at 0000 on the actual meter read date. [e21]
- **Key facts #7** (cites e6, e25): - Changes go through TAC subcommittee change control; disputes within seven days. [e6][e25]
- **Common confusion #1** (cites e1, e9, e13, e6, e24): (Guidance) TX SET is the set of transactions, implementation guides and standards for retail processes, not a database. [e1] Not every TX SET passes through ERCOT: the 650 service orders are point to point between the CR and TDSP. [e9][e13] And changes to TX SETs are made by the appropriate TAC subcommittee through Texas SET Change Control under Section 19.4. [e6][e24]
- **Questions #4** (cites e6, e24): The appropriate TAC subcommittee, through change control. [e6][e24]
- **Questions #6** (cites e14): The Protocols have ERCOT reject an initiating 814_01, 814_16 or 814_24 whose requested date is more than 90 days in the future or 270 days in the past. [e14] The saved sources do not say why those limits were chosen.
- **Questions #8** (cites e18, e42): ERCOT creates an internal tracking exception and the switch is held in "in review" status until the TDSP's 814_04 is received; if it is still missing after three Retail Business Days and by the earlier of the requested date or 20 Retail Business Days after the original 814_03, the status changes to "cancel pending". [e18][e42]
- **Questions #10** (cites e13, e9, e30): They are point-to-point transactions between the CR and TDSP and do not flow through ERCOT. [e13][e9] The saved sources do not say whether issues with them are handled in MarkeTrak; MarkeTrak is described as the primary tool for resolving retail market transaction issues and requesting manual service order cancellations. [e30]
- **Scenarios #2** (cites e16): - ERCOT treats the day received as the FASD (it is not a Sunday or holiday). [e16]
- **Scenarios #3** (cites e17): - ERCOT sends an 814_03 to the TDSP within one Retail Business Hour. [e17]
- **Scenarios #4** (cites e18): - The TDSP returns an 814_04 with the scheduled meter read date within two Retail Business Days. [e18]
- **Scenarios #5** (cites e19): - ERCOT sends the new CR an 814_05 within one Retail Business Day of that. [e19]
- **Scenarios #6** (cites e20, e21): - The switch completes on the effectuating meter read (867_04 or final 867_03) and is effective at 0000 on that date. [e20][e21]
- **Scenarios #7** (cites e40, e28): - The CR currently serving the premise is notified of the drop with an 814_06 Loss Notification [e40], and may be told of potential Customer loss in the daily Potential Load Loss Report, which the Retail Market Guide bases on ERCOT's receipt of the TDSP's accepted response to a Switch or Move-In Request. [e28]
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

