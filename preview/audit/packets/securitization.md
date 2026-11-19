# Audit packet: Post-Uri Securitization (securitization)

kind rule · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Default Balance · text copy line 2773

BEFORE: …include dedicated connections such as Multi-Protocol Label Switching (MPLS), Time Division Multiplexing Digital Signal 1 (TDM DS1), Metro Ethernet, or other networks that do not rely upon the Internet and are approved by ERCOT's telecommunications and security groups. Securitization Default Balance 
QUOTE: The amount financed by ERCOT pursuant to Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter M, Winter Storm Uri Default Balance Financing, as authorized by the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million.
AFTER:  Securitization Default Charge Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance. Securitization Uplift Balance The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapt…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Default Charge · text copy line 2777

BEFORE: …COT pursuant to Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter M, Winter Storm Uri Default Balance Financing, as authorized by the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million. Securitization Default Charge 
QUOTE: Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance.
AFTER:  Securitization Uplift Balance The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Balance · text copy line 2781

BEFORE: … the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million. Securitization Default Charge Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance. Securitization Uplift Balance 
QUOTE: The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322
AFTER: , Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good Cause Exception. Securitization Uplift Charge A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated …

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Charge · text copy line 2785

BEFORE: …(DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322, Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good Cause Exception. Securitization Uplift Charge 
QUOTE: A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses.
AFTER:  Securitization Uplift Charge Opt-Out Entity An eligible entity under Public Utility Regulatory Act, TEX. UTIL. CODE ANN. § 39.653(d) (Vernon 1998 & Supp. 2007) (PURA) that qualified to opt-out of paying Securitization Uplift Charges, as documented through the filing of opt-out notices in Public Uti…

### e5 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, Securitization Default Charges, paragraph (1) · text copy line 47 · heading above: 26.2 Securitization Default Charges

BEFORE: …nt's Securitization Default Charge Escrow Deposit Requirement 26-15 Securitization default charges 26.1 Overview (1) This section establishes processes for the assessment of Securitization Default Charges and Securitization Default Charge credit requirements. 26.2 Securitization Default Charges (1) 
QUOTE: ERCOT shall issue Invoices to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to collect the monthly amount determined by ERCOT to be necessary to repay the Securitization Default Balance. ERCOT may assess Securitization Default Charges over a period of up to 30 years.
AFTER:  (2) Each Counter-Party's share of the Securitization Default Charge for a month is calculated using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as foll…

### e6 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, paragraph (1) · text copy line 81 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …alified Scheduling Entity (QSE), and the QSE shall remit those funds to ERCOT within two Business Days of the QSE receiving the funds from the LSE. The funds must be paid by the QSE to the account designated for payment of Securitization Uplift Charge Invoices. 27.3 Securitization Uplift Charge (1) 
QUOTE: ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day.
AFTER:  The resulting charge to each QSE for the Operating Day is calculated as follows: LASUCAMT _(q, d) = SUCDA _(d) * DQSELSELRS _(q, d) Where: DQSELSELRS _(q, d) = DQSELSERTAML _(q, d) / DERCOTQSELSERTAML _(d) DQSELSERTAML _(q, d) = max(0, $\sum_{i,l}^{\ }($LSERTAML _(l,) _(q, i))) DERCOTQSELSERTAML _(…

### e7 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Charge Opt-Out Entity · text copy line 2789

BEFORE: …ecuritization Uplift Charge A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses. Securitization Uplift Charge Opt-Out Entity 
QUOTE: An eligible entity under Public Utility Regulatory Act, TEX. UTIL. CODE ANN. § 39.653(d) (Vernon 1998 & Supp. 2007) (PURA) that qualified to opt-out of paying Securitization Uplift Charges
AFTER: , as documented through the filing of opt-out notices in Public Utility Commission of Texas (PUCT) Project No. 52364, Proceeding for Eligible Entities to File an Opt Out Pursuant to PURA § 39.653(d) and for Load-Serving Entities to File Documentation of Exposure to Costs Pursuant to the Debt Obligat…

### e8 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.5.1, Securitization Default Charge Escrow, paragraph (1) · text copy line 315 · heading above: 26.5.1 Securitization Default Charge Escrow

BEFORE: …ges. (2) ERCOT shall post a report containing Initial Settlement data as such data becomes available. The report shall be updated with Final Settlement data as such data becomes available. 26.5 Securitization Default Charge Escrow Deposit Requirements 26.5.1 Securitization Default Charge Escrow (1) 
QUOTE: The term "Securitization Default Charge escrow deposit" means the amount required to be deposited with ERCOT in the form of cash or an unconditional, irrevocable letter of credit to be held in escrow for a Market Participant's obligation to pay Securitization Default Charges.
AFTER:  (2) Although ERCOT is the servicer for the assessment and collection of Securitization Default Charges, by providing escrow deposits pursuant to this Section each Counter-Party grants the Texas Electric Market Stabilization Funding M LLC (TEMSFM) a secured interest in Securitization Default Charge …

### e9 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.2, Insufficient Payments by Invoice Recipients, paragraph (1)(a)-(b) · text copy line 279 · heading above: 26.3.1.2 Insufficient Payments by Invoice Recipients for Securitization Default Charge Invoices

BEFORE: …voice Recipient owing funds does not pay its Securitization Default Charge Invoice in full (short-pay) by the payment due date and time set forth in Section 26.3.1.1, Invoice Recipient Payment to ERCOT for Securitization Default Charge Invoices, ERCOT shall follow the procedure set forth below: (a) 
QUOTE: ERCOT shall draw on any available Securitization Default Charge escrow deposits by the Invoice Recipient. (b) If available Securitization Default Charge escrow deposits are insufficient to cover the short-paid amount, ERCOT will utilize Financial Security held with respect to other ERCOT market activities as determined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure. ERCOT may not utilize Securitization Uplift Charge escrow deposits to cover short-pays of Securitization Default Charges.
AFTER:  (c) In the event that an Invoice Recipient short-pays: (i) Both a Securitization Default Charge Invoice and a Securitization Uplift Charge Initial Invoice, or; (ii) One or both of the above securitization Invoices as well as any other ERCOT Invoice, and it is necessary to utilize Financial Security…

### e10 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3, Securitization Default Charge Invoices, paragraph (1) · text copy line 231 · heading above: 26.3 Securitization Default Charge Invoices

BEFORE: …pursuant to paragraph (4) above, ERCOT will issue a Market Notice notifying Market Participants of the change no later than 15 days before the beginning of the month in which the new TSDCMA will be used to calculate the Securitization Default Charges. 26.3 Securitization Default Charge Invoices (1) 
QUOTE: ERCOT shall prepare Securitization Default Charge Invoices on a monthly basis, as specified in Section 9.1.2, Settlement Calendar, on the seventh Business Day of a month.
AFTER:  Unless expressly stated otherwise, the publication of the Securitization Default Charge Invoices can occur as late as 2400 on the scheduled publication date. The Market Participant to whom the Invoice is addressed (Invoice Recipient) is a payor. (2) Each Invoice Recipient shall pay any debit shown …

### e15 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS) · text copy line 104 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …SE - The charge allocated to QSE q, for the QSE's share of the total amount of Securitization Uplift Charges assessed for Operating Day d. SUCDA _(d) $ Securitization Uplift Charge Daily Amount - The total amount of Securitization Uplift Charges assessed for Operating Day d. DQSELSELRS _(q, d) none 
QUOTE: Daily QSE Non-Opted-Out LSE Load Ratio Share - The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d.
AFTER:  PRELIMLSERTAML _(l,) _(q, i) MWh Preliminary Non-Opted-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML), including the RTAML of Securitization Uplift Charge Opt-Out Entities that are Customers of Retail Electric Providers (REPs), but excluding the RTAML of Secur…

### e11 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1) · alt copy line 18

BEFORE: …certain costs associated with electric markets; granting authority to issue bonds; authorizing fees. BE IT ENACTED BY THE LEGISLATURE OF THE STATE OF TEXAS: SECTION 1. Section 404.0241, Government Code, is amended by adding Subsections (b-1), (b-2), (b-3), (b-4), and (b-5) to read as follows: (b-1) 
QUOTE: Notwithstanding any other law, directly or indirectly through a separately managed account or other investment vehicle, the comptroller shall invest not more than $800 million of the economic stabilization fund balance to finance the default balance as defined by Section 39.602, Utilities Code, to be repaid by ERCOT market participants through default charges established by the Public Utility Commission of Texas.
AFTER:  The interest rate charged in connection with the debt obligations must be calculated by adding the rate determined by the Municipal Market Data Municipal Electric Index, as published by Refinitiv TM3, based on the credit rating of the independent organization, as defined by Section 39.602, Utilitie…

### e12 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.602(1), definition of Default balance · alt copy line 143

BEFORE: …under this subchapter result in the lowest financing costs consistent with market conditions and the terms of the commission's order. The present value calculation must use a discount rate equal to the proposed interest rate on the debt obligations. Sec. 39.602. DEFINITIONS. In this subchapter: (1) 
QUOTE: "Default balance" means an amount of money of not more than $800 million that includes only: (A) amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be or have been uplifted to other wholesale market participants;
AFTER:  (B) financial revenue auction receipts used by the independent organization to temporarily reduce amounts short-paid to wholesale market participants related to the period of emergency; and (C) reasonable costs incurred by a state agency or the independent organization to implement a debt obligatio…

### e13 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance · alt copy line 414

BEFORE: …ied under Section 39.151 for the ERCOT power region. (2) "Load-serving entity" means a municipally owned utility, an electric cooperative, or a retail electric provider. (3) "Period of emergency" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021. (4) 
QUOTE: "Uplift balance" means an amount of money of not more than $2.1 billion that was uplifted to load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41.
AFTER:  The term does not include amounts that were part of the prevailing settlement point price during the period of emergency. (5) "Uplift charges" means charges assessed to load-serving entities to repay amounts financed under this subchapter to pay the uplift balance and reasonable costs incurred by a…

### e14 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.652(3), definition of Period of emergency · alt copy line 163

BEFORE: …g existing debt. (2) "Default charges" means charges assessed to wholesale market participants to repay amounts financed under this subchapter to pay the default balance. (3) "Independent organization" means the independent organization certified under Section 39.151 for the ERCOT power region. (4) 
QUOTE: "Period of emergency" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021.
AFTER:  Sec. 39.603. DEBT OBLIGATION ORDER. (a) On application by the independent organization, the commission by order may authorize the independent organization to establish a debt financing mechanism to finance the default balance if the commission finds that the debt obligations are needed to preserve …

## Statements to check

- **Definition #1** (cites e1, e3): Post-Uri securitization in the Protocols covers two financings under PURA Chapter 39: the Securitization Default Balance (Subchapter M, Winter Storm Uri Default Balance Financing, capped at $800 million) and the Securitization Uplift Balance (Subchapter N, Winter Storm Uri Uplift Financing, under the Debt Obligation Order in PUCT Docket No. 52322). [e1][e3]
- **How it works #1** (cites e2, e5, e10): Two separate charges repay the two balances. Securitization Default Charges are assessed to QSEs and CRR Account Holders to repay the Default Balance. [e2] ERCOT invoices them monthly (on the seventh Business Day) to collect the monthly amount needed, and may assess them over up to 30 years. [e5][e10]
- **How it works #2** (cites e4, e6, e15, e7): The Securitization Uplift Charge is assessed to QSEs representing obligated LSEs, to pay the Uplift Balance, interest and other financing expenses. [e4] ERCOT allocates it to those QSEs for each Operating Day, using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e15] Entities that qualified to opt out under PURA § 39.653(d) do not pay it. [e7]
- **ERCOT context #1** (cites e11, e12, e13, e14): HB 4492 (87th Legislature) directs the comptroller to invest not more than $800 million of the economic stabilization fund balance to finance the default balance, to be repaid by ERCOT market participants through default charges set by the PUCT. [e11] It defines the default balance (capped at $800 million) as amounts owed to ERCOT by competitive wholesale market participants during the period of emergency that would otherwise be uplifted to other participants. [e12] The uplift balance is capped at $2.1 billion and is the amount uplifted to load-serving entities on a load ratio share basis for reliability deployment price adder charges and ancillary services costs above the system-wide offer cap. [e13] The period of emergency runs from 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e14]
- **ERCOT context #2** (cites e8, e9): The default-charge side comes with escrow and credit rules. Market Participants deposit cash or a letter of credit in escrow for their Default Charge obligations. [e8] If an invoice is short-paid, ERCOT first draws on the escrow deposits and then on Financial Security held for other ERCOT market activity. [e9]
- **Key facts #1** (cites e1, e12, e13): - Default Balance financing may not exceed $800 million, and the statute caps the Uplift Balance at $2.1 billion. [e1][e12][e13]
- **Key facts #2** (cites e5): - Default Charges can be assessed over up to 30 years. [e5]
- **Key facts #3** (cites e2, e4): - Default Charges go to QSEs and CRR Account Holders; Uplift Charges go to QSEs representing obligated LSEs. [e2][e4]
- **Key facts #4** (cites e10): - Default Charge invoices are prepared monthly on the seventh Business Day. [e10]
- **Key facts #5** (cites e7): - Opt-out entities under PURA § 39.653(d) are excluded from Uplift Charges. [e7]
- **Common confusion #1** (cites e1, e3, e9): The two charges are separate: Default Charges (Subchapter M) repay the default balance and Uplift Charges (Subchapter N) repay the uplift balance, [e1][e3] ERCOT may not use Securitization Uplift Charge escrow deposits to cover short-pays of Default Charges. [e9]
- **Questions #2** (cites e2, e4): Default Charges are assessed to QSEs and CRR Account Holders. Uplift Charges are assessed to QSEs that represent obligated LSEs. [e2][e4]
- **Questions #4** (cites e5): Up to 30 years. [e5]
- **Link to winter-storm-uri** (cites e1, e3) FLAG number-not-in-quote: 2021: related Winter Storm Uri (Feb 2021): Both securitization balances relate to costs from Winter Storm Uri. [e1][e3]
- **Link to retailer-defaults-2021** (cites e12) FLAG number-not-in-quote: 2021: related Griddy & Brazos: 2021 Defaults: The default balance covers amounts owed to ERCOT by competitive wholesale market participants during the period of emergency that would otherwise be uplifted. [e12]
- **Link to uplift** (cites e3): related Uplift: The Uplift Balance is money that was uplifted and then securitized. [e3]
- **Link to credit-tpe** (cites e8, e9): related Credit, Collateral & TPE: Securitization Default Charges have an escrow deposit, and ERCOT can use Financial Security to cover short-pays when escrow is insufficient. [e8][e9]
- **Link to load-ratio-share** (cites e6, e15): related Load Ratio Share (LRS): The Securitization Uplift Charge is allocated using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e15]
- **Link to texas-legislature** (cites e1, e3): related Texas Legislature: The financing was authorized under PURA Chapter 39 subchapters. [e1][e3]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) After Winter Storm Uri, Texas financed two pools of unpaid and uplifted costs with securitization, and ERCOT now collects the repayment through two separate charges. One hits QSEs and CRR holders, the other hits QSEs for obligated LSEs' load.

