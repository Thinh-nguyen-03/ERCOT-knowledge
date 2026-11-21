---
id: uplift
name: Uplift
aliases: [uplift, uplift charges, uplift costs, RUC make-whole uplift, default uplift, RENA]
kind: concept
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: rmr
    type: related
    note: The IMM puts total 2025 uplift associated with RMR units at approximately $68 million. [e32]
  - to: ffss
    type: related
    note: The IMM says ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share. [e34]
  - to: winter-storm-uri
    type: related
    note: The IMM attributes the 2021 uplift of about $2.1 billion mainly to ancillary service imbalance settlement during Winter Storm Uri. [e35][e36]
  - to: ruc
    type: related
    note: RUC make-whole payments are funded first by capacity-short charges, then uplifted by LRS. [e13][e14]
  - to: credit-tpe
    type: related
    note: Default uplift is how ERCOT spreads short-paid amounts when a payment plan and collateral do not cover them. [e19]
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
  - id: e13
    source: np-05
    locator: "Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1) formula"
    quote: "LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i)"
  - id: e14
    source: np-05
    locator: "Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1)"
    quote: "The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE’s shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap."
  - id: e15
    source: np-06
    locator: "Section 6.6.10, Real-Time Revenue Neutrality Allocation, paragraph (1)"
    quote: "ERCOT must be revenue-neutral in each Settlement Interval. Each QSE receives an allocated share, on a LRS basis, of the net amount of:"
  - id: e16
    source: np-06
    locator: "Section 6.6.10, paragraph (2) formula (current text)"
    quote: "LARTRNAMT _(q) = (-1) * (RTEIAMTTOT + BLTRAMTTOT + RTDCIMPAMTTOT + RTESOGAMTTOT + RTCCAMTTOT + RTOBLAMTTOT / 4 + RTOBLLOAMTTOT / 4) * LRS _(q)"
  - id: e17
    source: np-06
    locator: "Section 6.6.10, paragraph (1)(g)-(h)"
    quote: "(g) Real-Time congestion payments or charges under Section 6.6.4, Real-Time Congestion Payment or Charge for Self-Schedules; and (h) Real-Time payments or charges to the Congestion Revenue Right (CRR) Owners under Section 7.9.2, Real-Time CRR Payments and Charges."
  - id: e18
    source: np-06
    locator: "Section 6.7.3, Real-Time Ancillary Service Revenue Neutrality Allocation, paragraph (1)"
    quote: "The total cost for Real-Time Ancillary Service payments and charges is allocated to the QSEs representing Load based on Load Ratio Share (LRS)."
  - id: e19
    source: np-09
    locator: "Section 9.19, Partial Payments by Invoice Recipients, paragraph (1)(e)"
    quote: "If sufficient funds continue to be unavailable for ERCOT to pay all amounts in full to short-paid Entities for that Settlement Invoice and the short-paying Entity is not complying with a payment plan designed to enable ERCOT to pay all amounts in full to short-paid Entities, ERCOT shall uplift short-paid amounts through the Default Uplift process described below in Section 9.19.1 and Section 9.19.2, Payment Process for Default Uplift Invoices."
  - id: e20
    source: np-09
    locator: "Section 9.19, paragraph (1)(d)"
    quote: "If, after taking the actions set forth in paragraphs (a), (b) and (c) above, ERCOT still does not have sufficient funds to pay all amounts that it owes to Settlement Invoice Recipients in full, ERCOT shall deduct any applicable administrative fees as specified in Section 9.16, ERCOT System Administration and User Fees, payments for Reliability Must-Run (RMR) Services, and the Congestion Revenue Right (CRR) Balancing Account (CRRBA) from the amount received or collected and then reduce payments to all Settlement Invoice Recipients owed monies from ERCOT."
  - id: e21
    source: np-09
    locator: "Section 9.19.1, Default Uplift Invoices, paragraph (2)"
    quote: "Each Counter-Party’s share of the uplift is calculated using the best available Settlement data for each Operating Day in the month prior to the month in which the default occurred (the “reference month”), and is calculated as follows:"
  - id: e22
    source: np-09
    locator: "Section 9.19.1, paragraph (2) formula"
    quote: "DURSCP_(cp =) TSPA * MMARS_(cp) Where: MMARS _(cp) = MMA _(cp) / MMATOT"
  - id: e23
    source: np-09
    locator: "Section 9.19.1, paragraph (1)"
    quote: "ERCOT must pay the funds it collects from payments on Default Uplift Invoices to the Entities previously short-paid."
  - id: e24
    source: np-09
    locator: "Section 9.19.1, paragraph (2), pending-change box"
    quote: "[NPRR995 and NPRR1201: Replace applicable portions of the formula “MMA _(cp)” above with the following upon system implementation:]"
  - id: e25
    source: np-09
    locator: "Section 9.19.3, Default Uplift Supporting Data Reporting, paragraph (1)"
    quote: "ERCOT shall post once each month on the MIS Certified Area, the Maximum MWh Activity (MMA), Maximum MWh Activity Total (MMATOT), Maximum MWh Activity Ratio Share (MMARS), and the Counter-Party level components of MMA calculation as defined in paragraph (2) of Section 9.19.1, Default Uplift Invoices."
  - id: e26
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, paragraph (1)"
    quote: "ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day."
  - id: e27
    source: np-27
    locator: "Section 27.3, paragraph (1) variable definitions (DQSELSELRS)"
    quote: "The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d."
  - id: e28
    source: np-27
    locator: "Section 27.3, paragraph (2)"
    quote: "As needed, but no less often than quarterly, ERCOT will, to ensure the Securitization Uplift Charge is repaid in substantially equal payments over its term, conduct an evaluation to:"
  - id: e29
    source: np-27
    locator: "Section 27.3, paragraph (4)"
    quote: "An LSE may not pass through the Securitization Uplift Charge to any transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity."
  - id: e30
    source: np-26
    locator: "Section 26.2, Securitization Default Charges, paragraph (1)"
    quote: "ERCOT shall issue Invoices to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to collect the monthly amount determined by ERCOT to be necessary to repay the Securitization Default Balance. ERCOT may assess Securitization Default Charges over a period of up to 30 years."
  - id: e31
    source: imm-som-2025
    locator: "page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions"
    quote: "Revenue Neutrality Uplift $154 AS Imbalance Uplift $27 ERCOT Fee $308 ERO Passthrough Fee $30 Firm Fuel $46"
  - id: e32
    source: imm-som-2025
    locator: "page 109 (OCR), RMR discussion"
    quote: "Total uplift associated with these RMR units in 2025 was approximately $68 million."
  - id: e33
    source: imm-som-2025
    locator: "page 25 (OCR), Chapter I, all-in price"
    quote: "Uplift associated with FFSS increased 36% from $33.8 million in 2024 to $45.9 million in 2025."
  - id: e34
    source: imm-som-2025
    locator: "page 114 (OCR), FFSS discussion"
    quote: "ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share."
  - id: e35
    source: imm-som-2021
    locator: "page 41 (OCR), Review of Real-Time Market Outcomes, all-in price"
    quote: "Uplift costs accounted for $5.34 per MWh of the all-in electricity price in 2021, up from $0.94 per MWh in 2020. The total amount of uplifted costs in 2021 was approximately $2.1 billion, vastly higher than the $359 million in 2020. The largest driver of this massive uplift value is the ancillary service imbalance settlement."
  - id: e36
    source: imm-som-2022
    locator: "page 41 (OCR), Review of Real-Time Market Outcomes, all-in price"
    quote: "The total uplift costs in 2022 were approximately $368 million, much lower than the $2.1 billion in 2021, which was driven by ancillary service imbalance settlement associated with Winter Storm Uri."
  - id: e37
    source: imm-som-2023
    locator: "page 45 (OCR), all-in price"
    quote: "Uplift costs accounted for $0.90 per MWh of the all-in price in 2023, up from $0.77. Uplift costs in 2023 were almost $400 million, a 16.5% increase from 2022."
  - id: e38
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "RENA uplift grew to total $160 million in 2024, up from $109 million in 2023."
  - id: e39
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "Figure 46 shows that the largest positive contributor to RENA uplift in 2024 was the LDF Contribution totaling $75 million. Uplift associated with differences in the transmission models between the day-ahead and real-time markets was also one of the largest factors, accounting for $55 million in RENA uplift."
  - id: e40
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "RENA exists to ensure that ERCOT remains revenue-neutral, which means payments equal charges. In general, RENA uplift occurs when there are differences in power flow modeling between the day-ahead and real-time markets, including:"
  - id: e41
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "NPRR 1004, Load Distribution Factor Process Update, approved on August 11, 2020, is still pending implementation, but should reduce this uplift."
  - id: e42
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "This change will introduce load forecast models to calculate daily LDF rather than the current seasonal LDF based on historical patterns."
  - id: e43
    source: imm-som-2021
    locator: "page 47 (OCR), Evaluation of the Revenue Neutrality Allocation Uplift"
    quote: "Almost all the RENA uplift occurred in market hours when there was transmission congestion."
  - id: e44
    source: imm-som-2022
    locator: "page 45 (OCR), Evaluation of the Revenue Neutrality Allocation Uplift"
    quote: "However, there was higher Revenue Neutrality Allocation Uplift (RENA), which increased in 2022 to $38 million, up from less than $1 million (less than $0.01 per MWh) in 2021."
  - id: e45
    source: imm-som-2022
    locator: "page 41 (OCR), Review of Real-Time Market Outcomes, all-in price"
    quote: "the Real-Time Revenue Neutrality Allocation (RENA), which totaled $43 million or $0.10 per MWh in 2022."
  - id: e46
    source: imm-som-2023
    locator: "page 96 (OCR), RENA evaluation"
    quote: "RENA uplift grew to total $109 million in 2023."
  - id: e47
    source: np-09
    locator: "Section 9.19, paragraph (1)(b)"
    quote: "ERCOT shall draw on any available Financial Security pledged to ERCOT by each short-paying Invoice Recipient that did not pay the amount due under paragraph (a) above."
  - id: e48
    source: np-09
    locator: "Section 9.19, paragraph (1)(c)"
    quote: "ERCOT shall offset or recoup any amounts owed, or to be owed, by ERCOT to a short-paying Invoice Recipient against amounts not paid by that Invoice Recipient, and ERCOT shall apply the amount offset or recouped to cover short pays by that Invoice Recipient."
  - id: e49
    source: np-09
    locator: "Section 9.19.1, paragraph (2), MMA formula (current text, first two terms)"
    quote: "MMA _(cp) = Max { ∑_(mp) (URTMG _(mp) + URTDCIMP _(mp) + USOGTOT _(mp))_(,) ∑_(mp) (URTAML _(mp) + UWSLTOT _(mp))_(,)"
---

## Definition

"Uplift" is not a defined term in the Protocol definitions (np-02). The Protocols use it in several named charges, and the IMM uses it as a label for non-market-based costs that loads pay on top of energy and ancillary services. [e1] In the Protocols the idea is that a cost is "uplifted" to Market Participants, for example the RUC make-whole shortfall to all QSEs on a Load Ratio Share basis. [e2]

## How it works

In the Protocols uplift shows up as specific mechanisms with different allocators. Load Ratio Share, the ratio of an Entity's AML to total ERCOT AML, is the allocator for the RUC make-whole shortfall. [e3][e2] The other main families are the revenue neutrality allocations, the default uplift for short-paid invoices, and the Securitization Uplift Charge for the Winter Storm Uri balance. [e4][e5][e12] A Cost Allocation Zone may also be used to uplift certain costs to a QSE's Load regardless of NOIE Load Zone. [e6]

RUC make-whole. QSEs that were capacity-short in a RUC are charged first: the charge is the QSE's shortfall ratio share times total RUC make-whole payments for that RUC, including RMR Units, subject to a cap. [e14] Only if those revenues do not cover the payments for a 15-minute interval is the difference uplifted to all QSEs by LRS. [e2][e13]

Revenue neutrality (RENA). ERCOT must be revenue-neutral in each Settlement Interval, and each QSE receives an allocated share, on an LRS basis, of the net of a list of Real-Time energy payments and charges that includes Real-Time congestion payments or charges for Self-Schedules and Real-Time payments or charges to CRR Owners. [e15][e17] The IMM describes RENA as arising when day-ahead and real-time power flow modeling differ, for example through transmission model differences, differences between the LDF used in the DAM and actual real-time load distribution (the "LDF contribution"), and CRR uplift. [e40] A separate allocation spreads Real-Time Ancillary Service costs to QSEs representing Load by LRS. [e18]

Default uplift. If a short-paying Entity does not pay, ERCOT draws on available Financial Security, offsets or recoups amounts it owes that Entity, and, if it is still short, deducts certain fees and reduces payments to all owed parties pro rata; where funds remain unavailable and the Entity is not following a payment plan, it uplifts the short-paid amount through the Default Uplift process. [e47][e48][e20][e19] ERCOT collects the month's short-pay amount, less expected payment-plan payments, from QSEs and CRR Account Holders and pays it to the Entities that were short-paid. [e4][e23]

Securitization Uplift Charge. ERCOT allocates the charge for each Operating Day to QSEs representing obligated LSEs. [e26] See the Formula section for the allocator. The charge may not be passed through to transmission-voltage Customers that are Securitization Uplift Charge Opt-Out Entities. [e29]

The IMM's own grouping is wider. In its 2024 report it counts the reliability and ORDC adder imbalance settlements, Revenue Neutrality Allocation, emergency energy charges, base point deviation payments, ERS, black start, block load transfer, firm fuel, high dispatch limit override, RMR, RUC, voltage services and the ERCOT administrative fee as uplift for its all-in price. [e7] The ORDC adder in that list was discontinued in December 2025 with the introduction of RTC. [e11]

## Formula

RUC make-whole uplift charge (np-05 5.7.4.2): the QSE's charge is minus one times (total RUC make-whole payments for the hour, divided by 4 for a 15-minute interval, plus the total RUC capacity-short charges for the interval) times the QSE's Load Ratio Share. [e13] The capacity-short charge total is netted into that amount, so what is uplifted is the difference left after those revenues. [e13][e2]

RENA (np-06 6.6.10): each QSE's Load-Allocated Real-Time Revenue Neutrality Amount is minus one times the sum of the total net real-time amounts (energy imbalance, Block Load Transfer, DC import, SODG/SOTG energy, real-time congestion cost, and the real-time obligation totals divided by 4) multiplied by the QSE's LRS. [e16] A pending revision (NPRR995) would change one of the terms in that list; this entry cites the current text. [e16]

Default uplift (np-09 9.19.1): each Counter-Party's share, DURSCP, equals the total short-pay amount to be uplifted (TSPA) times the Counter-Party's Maximum MWh Activity Ratio Share (MMARS), which is its Maximum MWh Activity (MMA) divided by the total of all Counter-Parties' MMA. MMA is the largest of several MWh activity measures for the Counter-Party in the reference month, which is the month before the default; the first two measures in the Max { ... } list are a sum of the URTMG, URTDCIMP and USOGTOT terms and a sum of the URTAML and UWSLTOT terms, followed by further terms. [e49][e21] ERCOT posts the MMA, MMATOT, MMARS and the Counter-Party level components monthly on the MIS Certified Area. [e25] The formula has a pending replacement for applicable portions of MMA (NPRR995 and NPRR1201), which is not the rule in force. [e24] (The full variable table for MMA did not extract cleanly; the measure list here is drawn from the formula text and is partial.)

Securitization Uplift Charge (np-27 27.3): the charge to QSE q for Operating Day d equals the Securitization Uplift Charge Daily Amount times the QSE's Daily QSE Non-Opted-Out LSE Load Ratio Share, which is the QSE's non-opted-out LSE RTAML divided by the ERCOT total for the day. [e26][e27] ERCOT re-evaluates at least quarterly so the charge is repaid in substantially equal payments over its term. [e28]

Securitization Default Charge (np-26 26.2), the companion mechanism for the Default Balance: ERCOT invoices QSEs and CRR Account Holders for the monthly amount needed to repay the Securitization Default Balance and may assess it over up to 30 years. [e30]

## ERCOT context

The IMM put uplift at $1.24 per MWh in 2024, about $573 million in total, and $1.38 per MWh in 2025, with $668 million in total and RMR the largest contributor to the increase. [e10][e8] The IMM says total uplift associated with the RMR units was approximately $68 million in 2025 [e32], and FFSS-related uplift rose 36% from $33.8 million in 2024 to $45.9 million in 2025 [e33]; ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share. [e34]

Table A4 of the IMM's 2025 report lists annual aggregate charges and payments in $ millions, including Revenue Neutrality Uplift of $154, AS Imbalance Uplift of $27, ERCOT Fee of $308, ERO Passthrough Fee of $30 and Firm Fuel of $46. [e31] The table is a statement of ERCOT charge types, not the IMM's definition of uplift in its all-in price, so the lines should not be summed to the $668 million; the IMM's list of included items is in the footnote. [e31][e7]

On RENA, the IMM says real-time congestion shortfalls are charged to LSEs through it. [e9] For 2024 the IMM says RENA uplift totaled $160 million, with the largest positive contributor the LDF Contribution at $75 million and transmission model differences accounting for $55 million. [e38][e39] The IMM said NPRR 1004, which would use load forecast models to calculate daily LDF instead of the seasonal LDF, was approved August 11, 2020 and still pending implementation in its 2024 report. [e41][e42]

## Timeline

- 2021: uplift about $2.1 billion ($5.34 per MWh), against $359 million in 2020; the IMM says the largest driver was ancillary service imbalance settlement. [e35]
- 2021 RENA: nearly all RENA uplift occurred in congested hours. [e43]
- 2022: uplift about $368 million, $0.77 per MWh. [e36][e44] RENA is $38 million in one IMM passage and $43 million in another (see Open items). [e44][e45]
- 2023: uplift almost $400 million, $0.90 per MWh, up 16.5%; RENA $109 million. [e37][e46]
- 2024: uplift about $573 million, $1.24 per MWh; RENA $160 million. [e10][e38]
- 2025: uplift $668 million, $1.38 per MWh; Table A4 shows Revenue Neutrality Uplift of $154 million. [e8][e31]
- December 2025: the ORDC adder, one item in the IMM's uplift list, was discontinued with RTC. [e11]

## Key facts

- No np-02 definition of "uplift"; usage is by mechanism. [e2][e4][e5]
- RUC make-whole shortfall, after capacity-short charges, is uplifted to all QSEs by LRS. [e2][e13]
- RENA is allocated to QSEs by LRS under np-06 6.6.10. [e15]
- Default uplift shares use Maximum MWh Activity in the month before the default. [e21][e22]
- 2024 uplift: about $573 million, $1.24 per MWh. [e10]
- 2025 uplift: $668 million, $1.38 per MWh, up 12%. [e8]
- RENA is an uplift charge to LSEs. [e9]

## Say it like this

Uplift is the part of your all-in cost that is not energy or ancillary services: settlement items spread over load rather than priced into the market. It is the IMM's grouping for the all-in price; the Protocols name specific uplift charges, each with its own allocator, but do not define "uplift" itself.

## Common confusion

Not every uplift item is allocated the same way: RUC make-whole and RENA use Load Ratio Share, default uplift is collected from QSEs and CRR Account Holders by Maximum MWh Activity, and the Securitization Uplift Charge is tied to obligated, non-opted-out LSE load. [e2][e15][e21][e26] The IMM's uplift list is its analytical grouping for the all-in price, and ERCOT's statement and Table A4 line items do not map one for one onto it. [e7][e31]

## Questions

### Is uplift a defined term in the Protocols?

No definition was found in the definitions section; the Protocols name specific uplift charges. [e2][e5]

### How big was uplift recently?

Approximately $573 million in 2024 and $668 million in 2025, per the IMM. [e10][e8]

### Where does congestion show up in uplift?

Real-time congestion shortfalls are paid through RENA charges to LSEs. [e9] The IMM links RENA to differences between the day-ahead and real-time power flow modeling, including the LDF contribution and transmission model differences. [e40]

### Why did uplift jump in 2021 and fall in 2022?

The IMM attributes the 2021 total of about $2.1 billion mainly to ancillary service imbalance settlement during Winter Storm Uri, and the 2022 total of about $368 million is much lower for that reason. [e35][e36]

### Why is the Securitization Uplift Charge not charged to every QSE's full load?

It is allocated by non-opted-out LSE adjusted metered load; transmission-voltage Opt-Out Entities and some exempt load are excluded from the allocator, and LSEs may not pass the charge to opt-out transmission-voltage Customers. [e27][e29]

### What if a counterparty short-pays?

ERCOT draws on collateral and offsets, then cuts payments pro rata and, if funds are still unavailable and no payment plan is being followed, uplifts the short-paid amount through default uplift to QSEs and CRR Account Holders by MMARS. [e47][e48][e20][e19][e22]

### Why would RENA fall if ERCOT's LDFs were better?

The IMM says RENA impacts will persist to the extent ERCOT cannot predict accurate LDFs, and expects NPRR 1004's daily LDF from load forecast models to reduce the uplift. [e41][e42] (The "persist" phrasing is the IMM's; no saved source quantifies the effect.)

## Open items

- "Uplift" has no np-02 definition; this topic is written from how np-02, np-05, np-06, np-09, np-26, np-27 and the IMM use it.
- The IMM 2022 report gives 2022 RENA as $38 million in its RENA chapter and $43 million in its all-in price discussion; the cause is not stated. Both are quoted. [e44][e45]
- The IMM 2024 report gives 2024 RENA as $160 million in the RENA chapter, while its executive summary and Table A4 give $161 million; the saved sources do not reconcile the one-million difference.
- The full breakdown of the $668 million (2025) by item is not in the saved sources; Table A4 lists charge types in $ millions but is not the IMM's uplift list, and no RUC or black start uplift line is shown there.
- The IMM 2025 report's RENA component split (LDF contribution, CRR uplift, model differences) for 2025 was not found in the OCR copy; only the 2021-2024 splits are quoted.
- The full MMA variable definitions in np-09 9.19.1 are in a table that did not extract cleanly; pending NPRR995/NPRR1201 changes to the MMA formula are not quoted beyond the box heading.
- np-27 Section 27.2 opt-out mechanics and the reallocation invoices (27.4.2) were only touched on.
