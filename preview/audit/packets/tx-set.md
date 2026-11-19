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

## Statements to check

- **Definition #1** (cites e1): TX SETs are the electronic data transactions, implementation guides and external standards that enable and facilitate the retail business processes in the deregulated Texas electric market. [e1]
- **How it works #1** (cites e10, e2, e3, e4, e9, e5): TX SET covers transactions among TDSPs, Competitive Retailers and ERCOT. [e10] EDI transactions are built on ANSI ASC X12 standards. [e2] Examples: a new CR sends ERCOT an 814_01 Switch Request to begin a switch enrollment, and an 814_16 Move In Request to begin a move in. [e3][e4] A CR sends a 650_01 Service Order Request to the TDSP, and the TDSP reports monthly usage to ERCOT with an 867_03. [e9][e5]
- **How it works #2** (cites e6, e8): Changes follow a change control process: the appropriate TAC subcommittee makes modifications and additions, since TX SETs are expanded and modified on an ongoing basis. [e6] The TX SET Working Group works with ERCOT's flight administrator on test plans and standards for retail transactional changes. [e8]
- **ERCOT context #1** (cites e7): TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format, submitted via NAESB at least monthly. [e7]
- **Key facts #1** (cites e1) FLAG number-not-in-quote: 2.1: - Defined in the Protocols' Section 2.1 definitions. [e1]
- **Key facts #2** (cites e2): - EDI transactions follow ANSI ASC X12. [e2]
- **Key facts #3** (cites e3, e4, e5): - 814_01 switch, 814_16 move in, 867_03 monthly or final usage. [e3][e4][e5]
- **Key facts #4** (cites e6): - Changes go through TAC subcommittee change control. [e6]
- **Common confusion #1** (cites e1): (Guidance) TX SET is the set of transactions, implementation guides and standards for retail processes, not a database. [e1]
- **Questions #2** (cites e3): The 814_01 Switch Request from the new CR to ERCOT. [e3]
- **Questions #4** (cites e6): The appropriate TAC subcommittee, through change control. [e6]
- **Link to retail-choice** (cites e1): used-in Retail Choice / Competitive Retail Market: TX SET enables the retail business processes of the deregulated market. [e1]
- **Link to tdsp** (cites e5): related TDSP (Transmission & Distribution Service Provider): The TDSP reports monthly usage to ERCOT with an 867_03. [e5]
- **Link to rep** (cites e3, e4, e9): related REP (Retail Electric Provider): A new CR submits switch and move-in requests to ERCOT, and a CR submits service order requests to the TDSP. [e3][e4][e9]
- **Link to mass-transition** (cites e11): related Mass Transition: In a Mass Transition event ERCOT submits an 814_03 Enrollment Notification Request. [e11]
- **Link to ams-meters** (cites e7): related AMS Smart Meter Data: TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format via NAESB. [e7]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) TX SET is the standard messaging layer between retailers, wires companies and ERCOT for switches, move-ins and usage. Changes are governed by market change control.

