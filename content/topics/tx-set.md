---
id: tx-set
name: TX SET (Texas Standard Electronic Transactions)
aliases: [TX SET, Texas SET, Texas Standard Electronic Transaction, 814, 867, EDI]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst]
depth: deep
as_of: 2026-11-21
links:
  - to: retail-choice
    type: used-in
    note: TX SET enables the retail business processes of the deregulated market. [e1]
  - to: esi-id
    type: related
    note: See the esi-id topic for the premise identifier.
  - to: tdsp
    type: related
    note: The TDSP reports monthly usage to ERCOT with an 867_03. [e5]
  - to: rep
    type: related
    note: A new CR submits switch and move-in requests to ERCOT, and a CR submits service order requests to the TDSP. [e3][e4][e9]
  - to: mass-transition
    type: related
    note: In a Mass Transition event ERCOT submits an 814_03 Enrollment Notification Request. [e11]
  - to: ams-meters
    type: related
    note: TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format via NAESB. [e7]
  - to: nprr
    type: contrasts-with
    note: TX SET changes go through a separate Texas SET Change Control process run by a TAC subcommittee, not through an NPRR. [e6][e24]
  - to: stakeholder-process
    type: related
    note: A Market Participant may dispute a TAC subcommittee decision on a Texas SET Change Control to TAC. [e25]
  - to: market-information-system
    type: related
    note: ERCOT provides market synchronization reports for TX SET transactions on the Market Information System Certified Area. [e28]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Texas Standard Electronic Transaction (TX SET)"
    quote: "Texas Standard Electronic Transactions (TX SETs) are the electronic data transactions, implementation guides, and applicable external standards that enable and facilitate the retail business processes in the deregulated Texas electric market."
  - id: e2
    source: np-19
    locator: "Section 19.2(1)(b)"
    quote: "Develop Electronic Data Interchange (EDI) transactions using American National Standards Institute Accredited Standards Committee X12 (ANSI ASC X12) standards;"
  - id: e3
    source: np-19
    locator: "Section 19.3.1(9), Switch Request (814_01)"
    quote: "From a new CR to ERCOT, is used to begin the Customer enrollment process for a switch."
  - id: e4
    source: np-19
    locator: "Section 19.3.1(24), Move In Request (814_16)"
    quote: "From the new CR to ERCOT, is used to begin the Customer enrollment process for a move in."
  - id: e5
    source: np-19
    locator: "Section 19.3.1(42), Monthly or Final Usage (867_03)"
    quote: "From the TDSP to ERCOT, is used to report monthly usage."
  - id: e6
    source: np-19
    locator: "Section 19.4(1)"
    quote: "The appropriate Technical Advisory Committee (TAC) subcommittee shall make modifications and additions to the Texas Standard Electronic Transactions (TX SETs) in accordance with this Section. TX SETs will be expanded and modified to accommodate retail market operations or regulatory requirements on an ongoing basis."
  - id: e7
    source: np-19
    locator: "Section 19.7(1)"
    quote: "Transmission and/or Distribution Service Providers (TDSPs) will provide 15-minute interval data to ERCOT from provisioned Advanced Meters and Municipally Owned Utility (MOU) / Electric Cooperative (EC) Non-BUSIDRRQ Interval Data Recorders (IDRs) using an ERCOT specified file format submitted via North American Energy Standards Board (NAESB) on at least a monthly basis."
  - id: e8
    source: np-19
    locator: "Section 19.8(1)"
    quote: "The Texas Standard Electronic Transaction (TX SET) Working Group works with the ERCOT flight administrator to develop and maintain a test plan and related testing standards for all retail transactional changes within the ERCOT market."
  - id: e9
    source: np-19
    locator: "Section 19.3.1(1), Service Order Request (650_01)"
    quote: "From the Competitive Retailer (CR) to the Transmission and/or Distribution Service Provider (TDSP) via point to point protocol, is used to initiate the original service order request, cancel request, or change/update request."
  - id: e10
    source: np-19
    locator: "Section 19.1(2)(a)"
    quote: "Transactions between Transmission and/or Distribution Service Providers (TDSPs) (refers to all TDSPs unless otherwise specified), Competitive Retailers (CRs) and ERCOT;"
  - id: e11
    source: np-15
    locator: "Section 15.1.3.1(1)"
    quote: "In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP."
  - id: e12
    source: np-19
    locator: "Section 19.1(1), Overview"
    quote: "The Texas SET Implementation Guides shall serve as the standard for the applicable TX SETs among all Market Participants and ERCOT."
  - id: e13
    source: np-24
    locator: "Section 24(1), Retail Point to Point Communications"
    quote: "Point to point communications include transactions flowing directly between Competitive Retailers (CRs), and Transmission and/or Distribution Service Providers (TDSPs) and do not flow through ERCOT."
  - id: e14
    source: np-15
    locator: "Section 15(5), Customer Registration"
    quote: "ERCOT will reject any initiating transaction due to date reasonableness if the requested implementation date is of more than 90 days in the future or 270 days in the past. Initiating transactions are: 814_01, Switch Request; 814_16, Move In Request; and 814_24, Move Out Request."
  - id: e15
    source: np-15
    locator: "Section 15(6)(a)-(b), Customer Registration (prioritization)"
    quote: >-
      (a) Level 1 – Same day 814_16 transactions, same day 814_24 transactions, 814_01 transactions and 814_20, ESI ID Maintenance Requests (Create), will be processed in one Retail Business Hour.
        (b) Level 2 – Standard 814_16 transactions and standard 814_24 transactions will be processed in two Retail Business Hours.
  - id: e16
    source: np-15
    locator: "Section 15.1.1, Submission of a Switch Request"
    quote: "The First Available Switch Date (FASD) is the day received by ERCOT unless received on a Sunday or an ERCOT holiday."
  - id: e17
    source: np-15
    locator: "Section 15.1.1.3(1), Switch Enrollment Notification Request to TDSP"
    quote: "ERCOT will submit to the TDSP serving the ESI ID, an enrollment notification request using the 814_03, Enrollment Notification Request, within one Retail Business Hour of the receipt of a valid Switch Request."
  - id: e18
    source: np-15
    locator: "Section 15.1.1.4(2), Response from TDSP to Registration Notification Request"
    quote: "This information shall be transmitted using the 814_04, Enrollment Notification Response, within two Retail Business Days of the receipt of the 814_03, Enrollment Notification Request. If the TDSP does not respond with the ESI ID information within two Retail Business Days after the receipt of the 814_03 transaction from ERCOT, ERCOT shall create an internal tracking exception. The switch will be held in “in review” status until the TDSP’s 814_04 transaction response is received."
  - id: e19
    source: np-15
    locator: "Section 15.1.1.5(1), Response to Valid Enrollment Request"
    quote: "Within one Retail Business Day of receipt of the TDSP’s 814_04, Enrollment Notification Response, ERCOT will respond to the requesting CR in accordance with the 814_05, CR Enrollment Notification Response. This response will contain the scheduled meter read date for the switch and all information the TDSP furnished to ERCOT under the TDSP’s 814_04 transaction. The TDSP must effectuate the switch within two Retail Business Days of the scheduled meter read date."
  - id: e20
    source: np-15
    locator: "Section 15.1.1.7(1), Completion of Switch Request and Effective Switch Date"
    quote: "A Switch Request is effectuated on the actual meter read date in the 867_04, Initial Meter Read, or the final 867_03, Monthly or Final Usage, which must be equal to the scheduled meter read date."
  - id: e21
    source: np-15
    locator: "Section 15.1.1.7(3), Completion of Switch Request and Effective Switch Date"
    quote: "Switches shall become effective at 0000 (midnight) on the actual date of the effectuating meter read."
  - id: e22
    source: np-15
    locator: "Section 15.1.4.7.1(1), Standard Move-In Requests"
    quote: "A standard Move-In Request is effectuated on the period start date in the 867_04, Initial Meter Read, which shall be the date requested in the 814_16, Move In Request, provided that the 814_03, Enrollment Notification Request, was received by the TDSP by 1700 at least two Retail Business Days prior to the requested date."
  - id: e23
    source: np-19
    locator: "Section 19.3.1(36)(c), Complete Unexecutable or Permit Required (814_28)"
    quote: "Upon sending the 814_28 (PT) transaction to notify the new CR that a permit is required, ERCOT will allow the TDSP 20 Retail Business Days to send the 814_04, Enrollment Notification Response, due to permit requirements."
  - id: e24
    source: np-19
    locator: "Section 19.4.1(1)(a)-(c), Technical Advisory Committee Subcommittee Responsibilities"
    quote: >-
      The appropriate TAC subcommittee will continue to:
      (a) Review and approve Texas SET Change Controls;
        (b) Classify a Texas SET Change Control request as urgent when the change meets the criteria in Section 19.4.5, Urgent Change Request;
        (c) Review and approve Texas SET Implementation Guides; and
  - id: e25
    source: np-19
    locator: "Section 19.4.3, Texas SET Change Control Dispute Process"
    quote: "A Market Participant may register a dispute with ERCOT by completing the designated form provided on the ERCOT website within seven days after the date of the appropriate TAC subcommittee decision. ERCOT shall reject disputes made after that time."
  - id: e26
    source: np-19
    locator: "Section 19.4.3(2), Texas SET Change Control Dispute Process"
    quote: "A dispute of a Texas SET Change Control to TAC suspends any further decisions on the Texas SET Change Control until the dispute has been decided by TAC."
  - id: e27
    source: np-19
    locator: "Section 19.4.5, Urgent Change Request"
    quote: >-
      A Texas SET Change Control may be classified as urgent by the appropriate TAC subcommittee and will accommodate:
        (a) An approved regulatory requirement; and /or
        (b) Necessary corrective action to retail market processes.
  - id: e28
    source: rmg-07
    locator: "Section 7.2(2)(b), Market Synchronization"
    quote: "Potential Load Loss Report – A daily report notifying CRs of potential Customer loss based on ERCOT’s receipt of the TDSP’s accepted response to a Switch or Move-In Request."
  - id: e29
    source: rmg-07
    locator: "Section 7.2(2)(a), Market Synchronization"
    quote: "Mapping Status Reject Report – A daily report identifying inbound transactions that ERCOT rejected due to mapping status errors."
  - id: e30
    source: rmg-07
    locator: "Section 7.2(3)-(4), Market Synchronization"
    quote: "MarkeTrak is the primary tool used by CRs, TDSPs and ERCOT to resolve retail market transaction issues, request manual service order cancellations, request ERCOT assistance with inadvertent ESI ID transfers, and file Data Extract Variance (DEV) issues."
  - id: e31
    source: rmg-07
    locator: "Section 7.7(2)(c), Transaction Timing Matrix"
    quote: "Days are counted beginning with Day 0 (day of transaction receipt) and progress sequentially from that day as Day 1, Day 2, etc."
  - id: e32
    source: rmg-07
    locator: "Section 7.7(1), Transaction Timing Matrix"
    quote: "Section 9, Appendices, Appendix D1, Transaction Timing Matrix, is an abbreviated version of Protocol Section 15, Customer Registration, used to assist Market Participants in identifying the flow and timing of transactions between Market Participants and ERCOT."
  - id: e33
    source: np-19
    locator: "Section 19.3.1(5), TDSP Invoice (810_02)"
    quote: "The 810_02, TDSP Invoice, may be paired with an 867_03, Monthly or Final Usage, to trigger the Customer billing process."
  - id: e34
    source: np-24
    locator: "Section 24.1.3.2(1)(a), Bill Payment Switch Hold"
    quote: "To add a switch hold indicator, the CR sends the 650_01, Service Order Request, to the TDSP requesting the addition of the switch hold indicator. The TDSP will respond with the 650_02, Service Order Response, to the CR acknowledging receipt of the service order request. Confirmation that the service order request has been completed will be received through the 814_20, ESI ID Maintenance Request."
  - id: e35
    source: rmg-07
    locator: "Section 7.15.2(1), Submission of Interval Data on ESI IDs with Advanced Metering Systems"
    quote: "All TDSPs shall submit 15 minute Settlement Quality Meter Data to ERCOT daily for provisioned Advanced Metering System (AMS) meters."
  - id: e36
    source: np-19
    locator: "Section 19.3.1(22)(a), Drop Enrollment Request (814_14)"
    quote: "From ERCOT to the POLR or designated CR, is used in response to a Mass Transition."
  - id: e37
    source: np-19
    locator: "Section 19.3.1(11)(a), Enrollment Notification Request (814_03)"
    quote: "From ERCOT to the TDSP, passes information from the 814_01, Switch Request; 814_16, Move In Request; or an 814_24, Move Out Request, where a Continuous Service Agreement (CSA) exists."
  - id: e38
    source: np-19
    locator: "Section 19.4.2(2)(a), ERCOT Responsibilities"
    quote: "The Texas SET Change Controls shall be published by ERCOT within seven Retail Business Days of approval by the appropriate TAC subcommittee."
  - id: e40
    source: np-19
    locator: "Section 19.3.1(14), Loss Notification (814_06)"
    quote: "From ERCOT to the current CR, is used to notify a current CR of a drop initiated by an 814_01, Switch Request, or drop notification due to a pending 814_16, Move In Request, from a new CR."
  - id: e41
    source: rmg-07
    locator: "Section 7.2(2), Market Synchronization"
    quote: "In order to maintain synchronization with the Transmission and/or Distribution Service Providers (TDSPs) and Competitive Retailers (CRs), ERCOT provides the following reports on the Market Information System (MIS) Certified Area:"
  - id: e39
    source: np-19
    locator: "Section 19.2(1)(c)-(d), Methodology"
    quote: >-
      (c) Develop Extensible Markup Language (XML) transactions as needed;
        (d) Develop other spreadsheets, templates, comma separated value (CSV) files, etc. as needed;
---

## Definition

TX SETs are the electronic data transactions, implementation guides and external standards that enable and facilitate the retail business processes in the deregulated Texas electric market. [e1] The Texas SET Implementation Guides are the standard for the applicable TX SETs among all Market Participants and ERCOT. [e12]

## How it works

TX SET covers transactions among TDSPs, Competitive Retailers and ERCOT. [e10] The responsible TAC subcommittee develops EDI transactions using ANSI ASC X12 standards, XML transactions as needed, and other spreadsheets, templates and CSV files as needed. [e2][e39]

Two routes. Some transactions flow through ERCOT; others are point to point. Point-to-point communications flow directly between CRs and TDSPs and do not flow through ERCOT. [e13] Examples: a CR sends a 650_01 Service Order Request to the TDSP, [e9] and the TDSP sends the 810_02 invoice for wires charges, which may be paired with an 867_03 to trigger the customer billing process. [e33] Examples that run through ERCOT: a new CR sends ERCOT an 814_01 Switch Request to begin a switch enrollment, and an 814_16 Move In Request to begin a move in [e3][e4]; ERCOT passes these to the TDSP as an 814_03 Enrollment Notification Request [e37]; and the TDSP reports monthly usage to ERCOT with an 867_03. [e5]

The switch sequence (Protocol Section 15). ERCOT sets the First Available Switch Date (FASD) as the day it receives the 814_01, unless received on a Sunday or an ERCOT holiday. [e16] ERCOT sends the 814_03 to the TDSP within one Retail Business Hour of a valid Switch Request. [e17] The TDSP answers with an 814_04 within two Retail Business Days; if it does not, ERCOT creates an internal tracking exception and holds the switch in "in review" status until the 814_04 arrives. [e18] Within one Retail Business Day of the 814_04, ERCOT sends the new CR an 814_05 with the scheduled meter read date, and the TDSP must effectuate the switch within two Retail Business Days of that date. [e19] The switch is effectuated on the actual meter read date in the 867_04 or final 867_03, which must equal the scheduled meter read date, [e20] and becomes effective at 0000 (midnight) on that date. [e21]

Move-ins. A standard Move-In Request is effectuated on the date requested in the 814_16, provided the TDSP received the 814_03 by 1700 at least two Retail Business Days before the requested date. [e22] Where a permit is required, ERCOT allows the TDSP 20 Retail Business Days to send the 814_04 after the 814_28 permit-pending notice. [e23]

Validation and priority. ERCOT rejects an initiating 814_01, 814_16 or 814_24 for date reasonableness if the requested date is more than 90 days in the future or 270 days in the past. [e14] ERCOT processes same-day 814_16 and 814_24, 814_01 and ESI ID Maintenance (Create) transactions within one Retail Business Hour (Level 1) and standard 814_16 and 814_24 within two Retail Business Hours (Level 2). [e15]

Counting days. The Retail Market Guide counts days from Day 0, the day of transaction receipt. [e31] Its Appendix D1 Transaction Timing Matrix is an abbreviated version of Protocol Section 15 for identifying the flow and timing of transactions. [e32]

Change control. The appropriate TAC subcommittee reviews and approves Texas SET Change Controls and Implementation Guides and classifies a change as urgent. [e24] TX SETs are expanded and modified on an ongoing basis. [e6] A change may be classified urgent to accommodate an approved regulatory requirement and/or necessary corrective action to retail market processes. [e27] ERCOT publishes approved change controls within seven Retail Business Days of subcommittee approval. [e38] A Market Participant may dispute a subcommittee decision to ERCOT within seven days of it, and a dispute to TAC suspends further decisions on that change control until TAC decides it. [e25][e26]

Testing. The TX SET Working Group works with the ERCOT flight administrator on test plans and testing standards for all retail transactional changes. [e8]

## ERCOT context

TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format, submitted via NAESB at least monthly under Protocol Section 19.7. [e7] The Retail Market Guide separately says all TDSPs shall submit 15 minute Settlement Quality Meter Data daily for provisioned AMS meters. [e35]

Mass Transition uses TX SETs: ERCOT initiates an 814_03 to the TDSP in a Mass Transition and sends an 814_14 Drop Enrollment Request to the POLR or designated CR. [e11][e36]

Practice. To keep the retail market synchronized, ERCOT provides reports on the Market Information System (MIS) Certified Area [e41], among them a daily Mapping Status Reject Report identifying inbound transactions it rejected for mapping status errors, [e29] and a daily Potential Load Loss Report that notifies CRs of potential Customer loss when ERCOT receives the TDSP's accepted response to a Switch or Move-In Request. [e28] MarkeTrak is the primary tool CRs, TDSPs and ERCOT use to resolve retail market transaction issues. [e30]

Switch holds are an example of a point-to-point use: to add a bill-payment switch hold the CR sends a 650_01 to the TDSP, the TDSP answers with a 650_02, and completion is confirmed through the 814_20 ESI ID Maintenance Request. [e34]

## Key facts

- Defined in the Protocols' Section 2.1 definitions. [e1]
- The TAC subcommittee develops EDI transactions using ANSI ASC X12 standards. [e2]
- 814_01 switch, 814_16 move in, 867_03 monthly or final usage. [e3][e4][e5]
- Initiating transactions are rejected if the requested date is more than 90 days ahead or 270 days back. [e14]
- 814_03 to the TDSP within one Retail Business Hour of a valid Switch Request; 814_04 back within two Retail Business Days. [e17][e18]
- Switch effective at 0000 on the actual meter read date. [e21]
- Changes go through TAC subcommittee change control; disputes within seven days. [e6][e25]

## Say it like this

(Guidance) TX SET is the standard messaging layer between retailers, wires companies and ERCOT for switches, move-ins and usage. Changes are governed by market change control run by a TAC subcommittee.

## Common confusion

(Guidance) TX SET is the set of transactions, implementation guides and standards for retail processes, not a database. [e1] Not every TX SET passes through ERCOT: the 650 service orders are point to point between the CR and TDSP. [e9][e13] And a change to a transaction is not an NPRR; it goes through Texas SET Change Control. [e6][e24]

## Questions

### Which transaction starts a switch?

The 814_01 Switch Request from the new CR to ERCOT. [e3]

### Who changes TX SET?

The appropriate TAC subcommittee, through change control. [e6][e24]

### Why does ERCOT reject some switch or move-in requests as "date reasonable" failures?

The Protocols have ERCOT reject an initiating 814_01, 814_16 or 814_24 whose requested date is more than 90 days in the future or 270 days in the past. [e14] The saved sources do not say why those limits were chosen.

### What happens if the TDSP does not answer the 814_03 on time?

ERCOT creates an internal tracking exception and the switch stays in "in review" status until the 814_04 arrives. [e18]

### Why do the 650 service orders not show up in ERCOT's data?

They are point-to-point transactions between the CR and TDSP and do not flow through ERCOT. [e13][e9] Issues with them can still be raised through MarkeTrak Day-to-Day. [e30]

## Scenarios

### A CR submits a standard switch on a Monday. What transactions follow?

- ERCOT treats the day received as the FASD (it is not a Sunday or holiday). [e16]
- ERCOT sends an 814_03 to the TDSP within one Retail Business Hour. [e17]
- The TDSP returns an 814_04 with the scheduled meter read date within two Retail Business Days. [e18]
- ERCOT sends the new CR an 814_05 within one Retail Business Day of that. [e19]
- The switch completes on the effectuating meter read (867_04 or final 867_03) and is effective at 0000 on that date. [e20][e21]
- The CR currently serving the premise is notified of the drop with an 814_06 Loss Notification [e40], and may see the pending switch in the daily Potential Load Loss Report. [e28]

## Open items

- The saved sources do not say whether the advanced meter interval data file is a TX SET transaction (Section 19.7 describes it as an ERCOT-specified file format via NAESB, and the Retail Market Guide calls it an interval data file); the guides' text is not saved.
- The Texas SET Implementation Guides themselves, and the Retail Market Guide Appendix D1 timing matrix, are not saved or not legible, so field-level content and per-transaction timings beyond Protocol Section 15 are not sourced.
- Protocol Section 19.7 says interval data is provided "at least" monthly while the Retail Market Guide 7.15.2 says daily; the saved sources do not state which governs in practice.
- Section 15.1.1.4(2) sets a "cancel pending" path when the TDSP's 814_04 is late; the exact conditions (three and 20 Retail Business Days) were not quoted here.
- Resolved 2026-11-21: the full transaction list (Section 19.3.1, 49 entries), urgent change requests (19.4.5) and Retail Market Guide references are now saved and cited above only in part; not every transaction is described.
