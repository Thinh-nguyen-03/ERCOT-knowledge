# Audit packet: Post-Uri Securitization (securitization)

kind rule · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Default Balance · text copy line 2773

BEFORE: …include dedicated connections such as Multi-Protocol Label Switching (MPLS), Time Division Multiplexing Digital Signal 1 (TDM DS1), Metro Ethernet, or other networks that do not rely upon the Internet and are approved by ERCOT's telecommunications and security groups. Securitization Default Balance 
QUOTE: The amount financed by ERCOT pursuant to Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter M, Winter Storm Uri Default Balance Financing, as authorized by the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million.
AFTER:  Securitization Default Charge Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance. Securitization Uplift Balance The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapt…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Securitization Uplift Balance · text copy line 2781

BEFORE: … the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million. Securitization Default Charge Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance. Securitization Uplift Balance 
QUOTE: The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322
AFTER: , Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good Cause Exception. Securitization Uplift Charge A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated …

### e6 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, paragraph (1) · text copy line 81 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …alified Scheduling Entity (QSE), and the QSE shall remit those funds to ERCOT within two Business Days of the QSE receiving the funds from the LSE. The funds must be paid by the QSE to the account designated for payment of Securitization Uplift Charge Invoices. 27.3 Securitization Uplift Charge (1) 
QUOTE: ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day.
AFTER:  The resulting charge to each QSE for the Operating Day is calculated as follows: LASUCAMT _(q, d) = SUCDA _(d) * DQSELSELRS _(q, d) Where: DQSELSELRS _(q, d) = DQSELSERTAML _(q, d) / DERCOTQSELSERTAML _(d) DQSELSERTAML _(q, d) = max(0, $\sum_{i,l}^{\ }($LSERTAML _(l,) _(q, i))) DERCOTQSELSERTAML _(…

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

### e11 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS) · text copy line 104 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …SE - The charge allocated to QSE q, for the QSE's share of the total amount of Securitization Uplift Charges assessed for Operating Day d. SUCDA _(d) $ Securitization Uplift Charge Daily Amount - The total amount of Securitization Uplift Charges assessed for Operating Day d. DQSELSELRS _(q, d) none 
QUOTE: Daily QSE Non-Opted-Out LSE Load Ratio Share - The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d.
AFTER:  PRELIMLSERTAML _(l,) _(q, i) MWh Preliminary Non-Opted-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML), including the RTAML of Securitization Uplift Charge Opt-Out Entities that are Customers of Retail Electric Providers (REPs), but excluding the RTAML of Secur…

### e13 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.602(1), definition of Default balance · alt copy line 143

BEFORE: …under this subchapter result in the lowest financing costs consistent with market conditions and the terms of the commission's order. The present value calculation must use a discount rate equal to the proposed interest rate on the debt obligations. Sec. 39.602. DEFINITIONS. In this subchapter: (1) 
QUOTE: "Default balance" means an amount of money of not more than $800 million that includes only: (A) amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be or have been uplifted to other wholesale market participants;
AFTER:  (B) financial revenue auction receipts used by the independent organization to temporarily reduce amounts short-paid to wholesale market participants related to the period of emergency; and (C) reasonable costs incurred by a state agency or the independent organization to implement a debt obligatio…

### e14 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance · alt copy line 414

BEFORE: …ied under Section 39.151 for the ERCOT power region. (2) "Load-serving entity" means a municipally owned utility, an electric cooperative, or a retail electric provider. (3) "Period of emergency" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021. (4) 
QUOTE: "Uplift balance" means an amount of money of not more than $2.1 billion that was uplifted to load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41.
AFTER:  The term does not include amounts that were part of the prevailing settlement point price during the period of emergency. (5) "Uplift charges" means charges assessed to load-serving entities to repay amounts financed under this subchapter to pay the uplift balance and reasonable costs incurred by a…

### e15 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.652(3), definition of Period of emergency · alt copy line 163

BEFORE: …g existing debt. (2) "Default charges" means charges assessed to wholesale market participants to repay amounts financed under this subchapter to pay the default balance. (3) "Independent organization" means the independent organization certified under Section 39.151 for the ERCOT power region. (4) 
QUOTE: "Period of emergency" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021.
AFTER:  Sec. 39.603. DEBT OBLIGATION ORDER. (a) On application by the independent organization, the commission by order may authorize the independent organization to establish a debt financing mechanism to finance the default balance if the commission finds that the debt obligations are needed to preserve …

### e32 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), variable table, SDCMMA · text copy line 122 · heading above: 26.2 Securitization Default Charges

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SDCMMA _(cp) | MWh | 
QUOTE: Securitization Default Charge Maximum MWh Activity-The maximum MWh activity of all Market Participants represented by the Counter-Party in the DAM, RTM and CRR Auction for the reference month.
AFTER:  | +--------------------------+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e64 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), SDCMMA formula (first line) · text copy line 57 · heading above: 26.2 Securitization Default Charges

BEFORE: … using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as follows: SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp) Where: SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT 
QUOTE: SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,)
AFTER:  ∑_(mp) (SDCRTAML _(mp) + SDCWSLTOT _(mp))_(,) ∑_(mp )SDCRTQQES _(mp,) ∑_(mp) SDCRTQQEP _(mp,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp) (SDCRTOBL _(mp) + SDCRTOBLLO _(mp))_(,) ∑_(mp) (SDCDAOPT _(mp) + SDCDAOBL _(mp) + SDCOPTS _(mp) + SDCOBLS _(mp)), ∑_(mp) (SDCOPTP _(mp) + SDCOBLP _(mp))} …

### e66 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), variable table, SDCRTOBL · text copy line 170 · heading above: 26.2 Securitization Default Charges
FLAG pending-box: | | | | [NPRR1188: Replace the definition above with the following upon system implementation:] | |
BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SDCRTOBL _(mp) | MWh | Securitization Default Charge Real-Time Obligation per Market Participant-
QUOTE: The monthly total in the reference month of Market Participant mp's PTP Obligations settled in Real-Time, counting the quantity only once per source and sink pair
AFTER: , and where the Market Participant is a QSE assigned to the registered Counter-Party. | +--------------------------+------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e67 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), variable table, SDCDAOPT · text copy line 178 · heading above: 26.2 Securitization Default Charges
FLAG pending-box: | | | | [NPRR1188: Replace the definition above with the following upon system implementation:] | |
BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SDCDAOPT _(mp) | MWh | Securitization Default Charge Day-Ahead Option per Market ParticipantThe 
QUOTE: monthly total in the reference month of Market Participant mp's PTP Options owned in the DAM
AFTER: , counting the ownership quantity only once per source and sink pair, and where the Market Participant is a CRR Account Holder assigned to the registered Counter-Party. | +--------------------------+------+----------------------------------------------------------------------------------------------…

### e68 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), variable table, SDCOBLS · text copy line 190 · heading above: 26.2 Securitization Default Charges
FLAG pending-box: | | | | [NPRR1188: Replace the definition above with the following upon system implementation:] | |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SDCOBLS _(mp) | MWh | Securitization Default Charge PTP Obligation Sale per Market Participant-
QUOTE: The MW quantity that represents the monthly total in the reference month of Market Participant mp's PTP Obligation offers awarded in CRR Auctions
AFTER: , counting the quantity only once per source and sink pair, where the Market Participant is a CRR Account Holder assigned to the registered Counter-Party. | +--------------------------+------+------------------------------------------------------------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to winter-storm-uri** (cites e1, e3) FLAG number-not-in-quote: 2021: related Winter Storm Uri (Feb 2021): Both securitization balances relate to costs from Winter Storm Uri. [e1][e3]
- **Link to retailer-defaults-2021** (cites e13) FLAG number-not-in-quote: 2021: related Griddy & Brazos: 2021 Defaults: The statutory default balance includes amounts owed to the independent organization by competitive wholesale market participants during the period of emergency that otherwise would be uplifted. [e13]
- **Link to uplift** (cites e3, e14): related Uplift: The Uplift Balance is money that was uplifted and then securitized. [e3][e14]
- **Link to credit-tpe** (cites e8, e9): related Credit, Collateral & TPE: Securitization Default Charges have an escrow deposit, and ERCOT can use Financial Security to cover short-pays when escrow is insufficient. [e8][e9]
- **Link to load-ratio-share** (cites e6, e11): related Load Ratio Share (LRS): The Securitization Uplift Charge is allocated using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e11]
- **Link to texas-legislature** (cites e1, e3): related Texas Legislature: The financing was authorized under PURA Chapter 39 subchapters. [e1][e3]
- **Link to ptp-obligation** (cites e32, e64, e66, e67, e68): related PTP Obligation: The Default Charge activity measure includes day-ahead and real-time PTP Obligation and Option activity and CRR auction activity, so CRR Account Holders are charged. [e32][e64][e66][e67][e68]
- **Link to winter-storm-uri** (cites e15): related Winter Storm Uri (Feb 2021): The statutes define the period of emergency as 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e15]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) After Winter Storm Uri, Texas financed two pools of unpaid and uplifted costs with securitization, and ERCOT now collects the repayment through two separate charges. One hits QSEs and CRR holders by trading activity, the other hits QSEs for obligated LSEs' load.

