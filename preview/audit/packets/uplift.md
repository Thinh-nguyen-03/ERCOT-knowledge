# Audit packet: Uplift (uplift)

kind concept · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4, paragraph (1) · text copy line 1566 · heading above: 5.7.4 RUC Make-Whole Charges

BEFORE: …----------------------------------------------------------------------------------------------------------------------------- 5.7.4 RUC Make-Whole Charges (1) All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. 
QUOTE: If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge.
AFTER:  (2) On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortf…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Ratio Share · text copy line 1419

BEFORE: …cesses used to develop and create Load Profiles. Load Profiling Methodology The fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. Load Ratio Share 
QUOTE: The ratio of an Entity's AML to total ERCOT AML for an interval.
AFTER:  Load Resource (see Resource) Load Serving Entity (LSE) An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs. Load Zone (1) In the Day-Ahead Market (D…

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Charge · text copy line 2785

BEFORE: …(DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322, Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good Cause Exception. Securitization Uplift Charge 
QUOTE: A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses.
AFTER:  Securitization Uplift Charge Opt-Out Entity An eligible entity under Public Utility Regulatory Act, TEX. UTIL. CODE ANN. § 39.653(d) (Vernon 1998 & Supp. 2007) (PURA) that qualified to opt-out of paying Securitization Uplift Charges, as documented through the filing of opt-out notices in Public Uti…

### e9 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Transmission Congestion and CRRs, real-time congestion shortfalls · text copy line 6239

BEFORE: …outages or limit changes, binding real-time constraints that are not modeled in the day-ahead market can produce real-time congestion shortfalls. Shortfalls are costs incurred by ERCOT to lower the real-time flows when day-ahead scheduled flows exceed the flows the network can support in real time. 
QUOTE: These realtime congestion shortfall costs are paid for by charges to LSEs as part of the uplift charge known as the Revenue Neutrality Allocation (RENA).
AFTER:  RENA exists to ensure that ERCOT remains revenue-neutral, which means payments equal charges. In general, RENA uplift occurs when there are differences in power flow modeling between the day-ahead and real-time markets, including:  Transmission network modeling inconsistencies between the day-ahea…

### e12 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Balance · text copy line 2781

BEFORE: … the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million. Securitization Default Charge Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance. Securitization Uplift Balance 
QUOTE: The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322
AFTER: , Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good Cause Exception. Securitization Uplift Charge A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated …

### e13 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1) formula · text copy line 2137 · heading above: 5.7.4.2 RUC Make-Whole Uplift Charge

BEFORE: …tion 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows: 
QUOTE: LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i)
AFTER:  Where: RUCMWAMTTOT_(h) = []RUCMWAMTRUCTOT_(ruc,h) RUCCSAMTTOT_(i) = [][]RUCCSAMT_(ruc,i,q) The above variables are defined as follows: --------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1) · text copy line 1579 · heading above: 5.7.4.1 RUC Capacity-Short Charge

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.4.1 RUC Capacity-Short Charge (1) 
QUOTE: The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE's shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap.
AFTER:  The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE's capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for t…

### e19 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.19, Partial Payments by Invoice Recipients, paragraph (1)(e) · text copy line 1666 · heading above: 9.19 Partial Payments by Invoice Recipients

BEFORE: …y of each short-paying Invoice Recipient and the dollar amount attributable to that Invoice Recipient, broken down by Invoice numbers. In addition, ERCOT shall provide the aggregate total of all amounts due to all Invoice Recipients before applying the amount not paid on the Settlement Invoice. (e) 
QUOTE: If sufficient funds continue to be unavailable for ERCOT to pay all amounts in full to short-paid Entities for that Settlement Invoice and the short-paying Entity is not complying with a payment plan designed to enable ERCOT to pay all amounts in full to short-paid Entities, ERCOT shall uplift short-paid amounts through the Default Uplift process described below in Section 9.19.1 and Section 9.19.2, Payment Process for Default Uplift Invoices.
AFTER:  (f) When ERCOT enters into a payment plan with a short-pay Invoice Recipient, ERCOT shall post to the Market Information System (MIS) Secure Area: (i) The short-pay plan; (ii) The schedule of quantifiable expected payments, updated if and when modifications are made to the payment schedule; and (ii…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 109 (OCR), RMR discussion · text copy line 6816

BEFORE: …ng emergency or pre-emergency conditions for up to two years. These RMR resources have a total capacity of around 730 MW. Since the beginning of the RMR period, the mobile generating units have produced approximately 1,226 MWh, and the maximum aggregate output of RMR units has been less than 40 MW. 
QUOTE: Total uplift associated with these RMR units in 2025 was approximately $68 million.
AFTER:  As an exit strategy, ERCOT identified the acceleration of the San Antonio South Reliability II Transmission Project to rebuild key 345-kV transmission lines. Expediting this work could allow new circuits to be energized in 2026-2027, reducing or eliminating the need for temporary RMR or mobile gene…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 114 (OCR), FFSS discussion · text copy line 7180

BEFORE: …or the upcoming season. FFSSRs must be represented by a QSE. If a QSE fails to deploy consistent with its award when called upon, ERCOT may reduce or claw back its payment and suspend it from further participation until it meets reinstatement requirements determined through the stakeholder process. 
QUOTE: ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share.
AFTER:  Next, we discuss key concerns with the rulemaking. Inclusion of Gas-Fired Generation Incentivizing availability through fuel storage is the core idea behind the FFSS. Severe winter storms occur infrequently, and the resulting lack of higher energy prices does not support the economics for oil-fired…

### e35 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 41 (OCR), Review of Real-Time Market Outcomes, all-in price · text copy line 1973

BEFORE: …l in in Section IV: Day-Ahead Market 45 Issues Related to the State of Disaster for the February 202 1 Winter Weather Event, Project No. 51812, Order Reinstating Low System-Wide Offer Cap at 1-2 (Mar. 3,2021). 12 | 2021 State of the Market Report / / Review of Real-Time Market Outcomes Performance. 
QUOTE: Uplift costs accounted for $5.34 per MWh of the all-in electricity price in 2021, up from $0.94 per MWh in 2020. The total amount of uplifted costs in 2021 was approximately $2.1 billion, vastly higher than the $359 million in 2020. The largest driver of this massive uplift value is the ancillary service imbalance settlement.
AFTER:  There are many other costs included as uplift, but the largest components are the ERCOT system administrative fee ($218 million or $0.55 per MWh), Emergency Response Service (ERS) program costs ($35 million or $0.09 per MWh) and the real-time revenue neutrality allocation (RENA), which totaled less…

### e36 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 41 (OCR), Review of Real-Time Market Outcomes, all-in price · text copy line 1983 · heading above: 0.1 days/year or “one day in ten years.”) (Nov. 10, 2022);

BEFORE: …triple the prices in 2020 ($1.00 per MWh). This is discussed in more detail in Section IV: Day-Ahead Market Performance. Uplift costs accounted for $0.77 per MWh of the all-in electricity price in 2022, down from $5.34 per MWh in 2021 (and the effects of Winter Storm Uri) and $0.94 per MWh in 2020. 
QUOTE: The total uplift costs in 2022 were approximately $368 million, much lower than the $2.1 billion in 2021, which was driven by ancillary service imbalance settlement associated with Winter Storm Uri.
AFTER:  There are many other costs included as uplift, but the largest components are the ERCOT System Administrative Fee ($293 million or $0.55 per MWh), Emergency Response Service (ERS) program costs ($36 million or $0.08 per MWh) and the Real-Time Revenue Neutrality Allocation (RENA), which totaled $43 …

## Statements to check (new or changed since the last audit)

- **Link to ruc-make-whole** (cites e2): related RUC Make-Whole & Clawback: RUC make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e2]
- **Link to load-ratio-share** (cites e3): used-in Load Ratio Share (LRS): Load Ratio Share is the ratio of an Entity's AML to total ERCOT AML for an interval. [e3]
- **Link to settlement-statements** (cites e2): related Settlement Statements & Timeline: Some uplifts, such as the RUC make-whole shortfall, are allocated to all QSEs. [e2]
- **Link to securitization** (cites e5, e12): related Post-Uri Securitization: The Securitization Uplift Charge is used to pay the Securitization Uplift Balance, which the Protocols define as the amount ERCOT securitized under PURA Subchapter N, Winter Storm Uri Uplift Financing. [e5][e12]
- **Link to crr** (cites e9): related CRR (Congestion Revenue Right): The IMM says real-time congestion shortfall costs are paid through the uplift charge known as RENA. [e9]
- **Link to rmr** (cites e32): related RMR (Reliability Must-Run) & Must-Run Alternatives: The IMM puts total 2025 uplift associated with RMR units at approximately $68 million. [e32]
- **Link to ffss** (cites e34): related FFSS (Firm Fuel Supply Service): The IMM says ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share. [e34]
- **Link to winter-storm-uri** (cites e35, e36): related Winter Storm Uri (Feb 2021): The IMM attributes the 2021 uplift of about $2.1 billion mainly to ancillary service imbalance settlement during Winter Storm Uri. [e35][e36]
- **Link to ruc** (cites e13, e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC make-whole payments are funded first by capacity-short charges, then uplifted by LRS. [e13][e14]
- **Link to credit-tpe** (cites e19): related Credit, Collateral & TPE: Default uplift is how ERCOT spreads short-paid amounts when a payment plan and collateral do not cover them. [e19]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) Uplift is the part of your all-in cost that is not energy or ancillary services: settlement items spread over load rather than priced into the market. It is the IMM's grouping for the all-in price; the Protocols name specific uplift charges, each with its own allocator, but do not define "uplift" itself.

