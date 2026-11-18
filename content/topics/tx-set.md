---
id: tx-set
name: TX SET (Texas Standard Electronic Transactions)
aliases: [TX SET, Texas SET, Texas Standard Electronic Transaction, 814, 867, EDI]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst]
as_of: 2026-11-18
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
---

## Definition

TX SETs are the electronic data transactions, implementation guides and external standards that enable and facilitate the retail business processes in the deregulated Texas electric market. [e1]

## How it works

TX SET covers transactions among TDSPs, Competitive Retailers and ERCOT. [e10] EDI transactions are built on ANSI ASC X12 standards. [e2] Examples: a new CR sends ERCOT an 814_01 Switch Request to begin a switch enrollment, and an 814_16 Move In Request to begin a move in. [e3][e4] A CR sends a 650_01 Service Order Request to the TDSP, and the TDSP reports monthly usage to ERCOT with an 867_03. [e9][e5]

Changes follow a change control process: the appropriate TAC subcommittee makes modifications and additions, since TX SETs are expanded and modified on an ongoing basis. [e6] The TX SET Working Group works with ERCOT's flight administrator on test plans and standards for retail transactional changes. [e8]

## ERCOT context

TDSPs provide advanced meter interval data to ERCOT in an ERCOT-specified file format, submitted via NAESB at least monthly. [e7]

## Key facts

- Defined in the Protocols' Section 2.1 definitions. [e1]
- EDI transactions follow ANSI ASC X12. [e2]
- 814_01 switch, 814_16 move in, 867_03 monthly or final usage. [e3][e4][e5]
- Changes go through TAC subcommittee change control. [e6]

## Say it like this

(Guidance) TX SET is the standard messaging layer between retailers, wires companies and ERCOT for switches, move-ins and usage. Changes are governed by market change control.

## Common confusion

(Guidance) TX SET is the set of transactions, implementation guides and standards for retail processes, not a database. [e1]

## Questions

### Which transaction starts a switch?

The 814_01 Switch Request from the new CR to ERCOT. [e3]

### Who changes TX SET?

The appropriate TAC subcommittee, through change control. [e6]

## Open items

- The saved sources do not say whether the advanced meter interval data file is a TX SET transaction (Section 19.7 describes it as an ERCOT-specified file format via NAESB).
- Deeper pass: the full transaction list (Section 19.3.1 defines dozens), urgent change requests (19.4.5) and the Texas SET Implementation Guides (not a saved source).
- Deeper pass: the Retail Market Guide, which is referenced but not saved.
