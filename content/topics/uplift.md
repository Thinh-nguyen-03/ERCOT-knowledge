---
id: uplift
name: Uplift
aliases: [uplift, uplift charges, uplift costs, RUC make-whole uplift, default uplift, RENA]
kind: concept
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-18
links:
  - to: ruc-make-whole
    type: related
    note: RUC make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e2]
  - to: load-ratio-share
    type: used-in
    note: Load Ratio Share is the ratio of an Entity's AML to total ERCOT AML for an interval. [e3]
  - to: settlement-statements
    type: related
    note: Some uplifts, such as the RUC make-whole shortfall, are allocated to all QSEs. [e2]
  - to: securitization
    type: related
    note: The Securitization Uplift Charge is used to pay the Securitization Uplift Balance, which the Protocols define as the amount ERCOT securitized under PURA Subchapter N, Winter Storm Uri Uplift Financing. [e5][e12]
  - to: sc-uplift-surprise
    type: related
    note: Worked scenario for an unexpected uplift charge.
  - to: crr
    type: related
    note: The IMM says real-time congestion shortfall costs are paid through the uplift charge known as RENA. [e9]
evidence:
  - id: e1
    source: imm-som-2024
    locator: "Executive Summary, all-in price"
    quote: "In addition to the costs of energy, loads incur costs associated with ancillary services and a variety of non-market-based expenses referred to as “uplift.”"
  - id: e2
    source: np-05
    locator: "Section 5.7.4, paragraph (1)"
    quote: "If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Load Ratio Share"
    quote: "The ratio of an Entity’s AML to total ERCOT AML for an interval."
  - id: e4
    source: np-09
    locator: "Section 9.19.1, Default Uplift Invoices, paragraph (1)"
    quote: "ERCOT shall collect the total short-pay amount for all Settlement Invoices for a month, less the total payments expected from a payment plan, from Qualified Scheduling Entities (QSEs) and CRR Account Holders."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Charge"
    quote: "A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Cost Allocation Zone"
    quote: "A Cost Allocation Zone may be used by ERCOT to uplift certain costs to a QSE’s Load regardless of NOIE Load Zone."
  - id: e7
    source: imm-som-2024
    locator: "Executive Summary, footnote on the all-in price"
    quote: "For this analysis “uplift” includes: Reliability Adder Imbalance Settlement, ORDC Adder Imbalance Settlement, Revenue Neutrality Allocation, Emergency Energy Charges, Base Point Deviation Payments, ERS Settlement, Black Start Service Settlement, Block Load Transfer Settlement, Firm Fuel Service Settlement, High Dispatch Limit Override Settlement, RMR Settlement, RUC Settlement, Voltage Services Settlement, and the ERCOT System Administrative Fee."
  - id: e8
    source: imm-som-2025
    locator: "Executive Summary, all-in price"
    quote: "Uplift costs accounted for $1.38 per MWh of the all-in price in 2025, up 12% from 2024. RMR uplift was the largest contributor to this increase, accounting for $68 million of the $668 million in total uplift costs."
  - id: e9
    source: imm-som-2024
    locator: "Transmission Congestion and CRRs, real-time congestion shortfalls"
    quote: "These realtime congestion shortfall costs are paid for by charges to LSEs as part of the uplift charge known as the Revenue Neutrality Allocation (RENA)."
  - id: e11
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e10
    source: imm-som-2024
    locator: "Executive Summary, all-in price"
    quote: "Uplift costs accounted for $1.24 per MWh of the all-in price in 2024, up 26% from 2023. Total uplift costs in 2024 were approximately $573 million."
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Balance"
    quote: "The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322"
---

## Definition

"Uplift" is not a defined term in the Protocol definitions (np-02). The Protocols use it in several named charges, and the IMM uses it as a label for non-market-based costs that loads pay on top of energy and ancillary services. [e1] In the Protocols the idea is that a cost is "uplifted" to Market Participants, for example the RUC make-whole shortfall to all QSEs on a Load Ratio Share basis. [e2]

## How it works

In the Protocols uplift shows up as specific mechanisms: the RUC Make-Whole Uplift Charge, default uplift invoices that collect short-paid amounts from QSEs and CRR Account Holders, and the Securitization Uplift Charge for the Winter Storm Uri securitization balance. [e2][e4][e5][e12] Load Ratio Share, the ratio of an Entity's AML to total ERCOT AML, is the allocator for the RUC make-whole shortfall. [e3][e2] A Cost Allocation Zone may be used to uplift certain costs to a QSE's Load regardless of NOIE Load Zone. [e6]

In its 2024 report the IMM groups many settlements under uplift for its all-in price: the reliability and ORDC adder imbalance settlements, Revenue Neutrality Allocation, emergency energy charges, base point deviation payments, ERS, black start, block load transfer, firm fuel, high dispatch limit override, RMR, RUC, voltage services and the ERCOT administrative fee. [e7] The ORDC adder in that list was discontinued in December 2025 with the introduction of RTC. [e11]

## ERCOT context

The IMM put uplift at $1.24 per MWh in 2024, about $573 million in total, and $1.38 per MWh in 2025, with $668 million in total and RMR the largest contributor to the increase. [e10][e8] The IMM also notes that real-time congestion shortfalls are charged to LSEs through RENA. [e9]

## Key facts

- No np-02 definition of "uplift"; usage is by mechanism. [e2][e4][e5]
- RUC make-whole shortfall is uplifted to all QSEs by LRS. [e2]
- 2024 uplift: about $573 million, $1.24 per MWh. [e10]
- 2025 uplift: $668 million, $1.38 per MWh, up 12%. [e8]
- RENA is an uplift charge to LSEs. [e9]

## Say it like this

Uplift is the part of your all-in cost that is not energy or ancillary services: settlement items spread over load rather than priced into the market. It is the IMM's grouping for the all-in price; the Protocols name specific uplift charges but do not define "uplift" itself.

## Common confusion

Not every uplift item is allocated the same way: RUC make-whole uses Load Ratio Share, default uplift is collected from QSEs and CRR Account Holders, and the Securitization Uplift Charge is tied to obligated LSEs. [e2][e4][e5] Also, the IMM's uplift list is its analytical grouping for the all-in price. [e7]

## Questions

### Is uplift a defined term in the Protocols?

No definition was found in the definitions section; the Protocols name specific uplift charges. [e2][e5]

### How big was uplift recently?

Approximately $573 million in 2024 and $668 million in 2025, per the IMM. [e10][e8]

### Where does congestion show up in uplift?

Real-time congestion shortfalls are paid through RENA charges to LSEs. [e9]

## Open items

- "Uplift" has no np-02 definition; this topic is written from how np-02 (Cost Allocation Zone, Securitization Uplift terms), np-05, np-09 and the IMM use it.
- Deeper pass: allocation formulas for default uplift (np-09 9.19.1), the Securitization Uplift Charge (np-09 Section 27) and RENA.
- Deeper pass: IMM 2024 Figure 46 RENA components (LDF contribution, CRR uplift) are garbled in the text copy and no OCR copy is saved.
- Deeper pass: the full breakdown of the $668 million by item (2025).
