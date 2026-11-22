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

### e11 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS) · text copy line 104 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …SE - The charge allocated to QSE q, for the QSE's share of the total amount of Securitization Uplift Charges assessed for Operating Day d. SUCDA _(d) $ Securitization Uplift Charge Daily Amount - The total amount of Securitization Uplift Charges assessed for Operating Day d. DQSELSELRS _(q, d) none 
QUOTE: Daily QSE Non-Opted-Out LSE Load Ratio Share - The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d.
AFTER:  PRELIMLSERTAML _(l,) _(q, i) MWh Preliminary Non-Opted-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML), including the RTAML of Securitization Uplift Charge Opt-Out Entities that are Customers of Retail Electric Providers (REPs), but excluding the RTAML of Secur…

### e12 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1) · alt copy line 18

BEFORE: …certain costs associated with electric markets; granting authority to issue bonds; authorizing fees. BE IT ENACTED BY THE LEGISLATURE OF THE STATE OF TEXAS: SECTION 1. Section 404.0241, Government Code, is amended by adding Subsections (b-1), (b-2), (b-3), (b-4), and (b-5) to read as follows: (b-1) 
QUOTE: Notwithstanding any other law, directly or indirectly through a separately managed account or other investment vehicle, the comptroller shall invest not more than $800 million of the economic stabilization fund balance to finance the default balance as defined by Section 39.602, Utilities Code, to be repaid by ERCOT market participants through default charges established by the Public Utility Commission of Texas.
AFTER:  The interest rate charged in connection with the debt obligations must be calculated by adding the rate determined by the Municipal Market Data Municipal Electric Index, as published by Refinitiv TM3, based on the credit rating of the independent organization, as defined by Section 39.602, Utilitie…

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

### e16 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1), interest and term · alt copy line 24

BEFORE: …e, the comptroller shall invest not more than $800 million of the economic stabilization fund balance to finance the default balance as defined by Section 39.602, Utilities Code, to be repaid by ERCOT market participants through default charges established by the Public Utility Commission of Texas. 
QUOTE: The interest rate charged in connection with the debt obligations must be calculated by adding the rate determined by the Municipal Market Data Municipal Electric Index, as published by Refinitiv TM3, based on the credit rating of the independent organization, as defined by Section 39.602, Utilities Code, plus 2.5 percent. The term of the debt obligations may not exceed 30 years.
AFTER:  (b-2) A person may not bring a civil action against this state, the Texas Treasury Safekeeping Trust Company, or an employee, independent contractor, or official of this state, including the comptroller, for any claim, including breach of fiduciary duty or violation of any constitutional, statutory…

### e17 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.601(b), purpose of Subchapter M · alt copy line 119

BEFORE: …st by: (1) enabling the independent organization to finance the payment of the default balance with debt obligations; and (2) authorizing the commission to contract with the comptroller under Section 404.0241, Government Code, to finance the payment of the default balance with debt obligations. (b) 
QUOTE: Financing the default balance in the manner provided by this subchapter will: (1) allow wholesale market participants that are owed money to be paid in a more timely manner; (2) replenish financial revenue auction receipts temporarily used by the independent organization to reduce the Winter Storm Uri-related amounts short-paid to the wholesale market participants; and (3) allow the wholesale market to repay the default balance over time.
AFTER:  (c) The legislature finds that the financing authorized by this subchapter serves the public purpose of preserving the integrity of the electricity market in the ERCOT power region. (d) The proceeds of debt obligations issued under this subchapter must be used solely for the purpose of financing de…

### e18 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.602(1)(B)-(C), definition of Default balance · alt copy line 149

BEFORE: …efault balance" means an amount of money of not more than $800 million that includes only: (A) amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be or have been uplifted to other wholesale market participants; 
QUOTE: (B) financial revenue auction receipts used by the independent organization to temporarily reduce amounts short-paid to wholesale market participants related to the period of emergency; and (C) reasonable costs incurred by a state agency or the independent organization to implement a debt obligation order under Sections 39.603 and 39.604, including the cost of retiring or refunding existing debt.
AFTER:  (2) "Default charges" means charges assessed to wholesale market participants to repay amounts financed under this subchapter to pay the default balance. (3) "Independent organization" means the independent organization certified under Section 39.151 for the ERCOT power region. (4) "Period of emerg…

### e19 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.603(b)(2) and (c) · alt copy line 184

BEFORE: …e potential effects of uplifting those balances to the wholesale market without a financing vehicle. (b) The order must state: (1) the default balance to be financed; and (2) the period over which the default charges must be assessed to repay the debt obligations, which may not exceed 30 years. (c) 
QUOTE: The order must include an adjustment mechanism requiring the independent organization to adjust default charges to refund, over the remaining period of the default charges, any payments made by a market participant toward unpaid obligations from the period of emergency that were included in the financed default balance.
AFTER:  (d) The independent organization shall collect from and allocate among wholesale market participants the default charges using the same allocated pro rata share methodology under which the charges would otherwise be uplifted under the protocols in effect on March 1, 2021. The default charges must b…

### e20 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.603(d) · alt copy line 190

BEFORE: …adjustment mechanism requiring the independent organization to adjust default charges to refund, over the remaining period of the default charges, any payments made by a market participant toward unpaid obligations from the period of emergency that were included in the financed default balance. (d) 
QUOTE: The independent organization shall collect from and allocate among wholesale market participants the default charges using the same allocated pro rata share methodology under which the charges would otherwise be uplifted under the protocols in effect on March 1, 2021. The default charges must be assessed on all wholesale market participants, including market participants who are in default but still participating in the wholesale market and who enter the market after a debt obligation order is issued under this subchapter, and may be based on periodically updated transaction data to prevent market participants from engaging in behavior designed to avoid the default charges.
AFTER:  (e) Not later than the 30th day after the date the independent organization receives a default charge payment from a wholesale market participant, the independent organization shall remit the payment to the comptroller toward repayment of debt obligations in which the comptroller made an investment…

### e21 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.603(f) · alt copy line 207

BEFORE: …ganization receives a default charge payment from a wholesale market participant, the independent organization shall remit the payment to the comptroller toward repayment of debt obligations in which the comptroller made an investment under Section 404.0241(b-1), Government Code, if applicable. (f) 
QUOTE: Notwithstanding another provision of this subchapter, default charges may not be collected from or allocated to a market participant that: (1) otherwise would be subject to a default charge solely as a result of acting as a central counterparty clearinghouse in wholesale market transactions in the ERCOT power region; and (2) is regulated as a derivatives clearing organization, as defined by Section 1a, Commodity Exchange Act (7 U.S.C. Section 1a).
AFTER:  (g) Not later than the 90th day after the date the independent organization files an application for an order under Subsection (a), the commission shall issue an order described by Subsection (a) or an order denying the application. The order becomes effective in accordance with its terms and the o…

### e22 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.603(g) · alt copy line 220

BEFORE: …fined by Section 1a, Commodity Exchange Act (7 U.S.C. Section 1a). (g) Not later than the 90th day after the date the independent organization files an application for an order under Subsection (a), the commission shall issue an order described by Subsection (a) or an order denying the application. 
QUOTE: The order becomes effective in accordance with its terms and the order, together with the default charges authorized in the order, shall be irrevocable and not subject to reduction, impairment, or adjustment by further action of the commission after the order takes effect.
AFTER:  Notwithstanding this requirement, the commission may refinance any debt obligations created by an order issued under this subchapter if the commission determines that the refinancing is in the public interest, considering the interest of both the ERCOT market and the state's interest in the economi…

### e23 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.603(i) · alt copy line 246

BEFORE: …other matters. Review on appeal shall be based solely on the record before the commission and briefs to the court and shall be limited to whether the order conforms to the constitution and laws of this state and the United States and is within the authority of the commission under this chapter. (i) 
QUOTE: A debt obligation issued under this section is a nonrecourse debt secured solely by the default charges explicitly assessed to repay the obligation.
AFTER:  The independent organization's obligations authorized under this section do not create personal liability for the independent organization. Sec. 39.604. COMMISSION-AUTHORIZED FINANCING. (a) The commission may contract with another state agency with expertise in public financing to establish a debt …

### e24 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance, last sentence · alt copy line 420

BEFORE: …o load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41. 
QUOTE: The term does not include amounts that were part of the prevailing settlement point price during the period of emergency.
AFTER:  (5) "Uplift charges" means charges assessed to load-serving entities to repay amounts financed under this subchapter to pay the uplift balance and reasonable costs incurred by a state agency or the independent organization to implement a debt obligation order under Section 39.653, 39.654, or 39.655…

### e25 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.653(b) · alt copy line 436

BEFORE: …financing mechanism for the payment of the uplift balance if the commission finds that such financing will support the financial integrity of the wholesale market and is necessary to protect the public interest, considering the impacts on both wholesale market participants and retail customers. (b) 
QUOTE: An order issued under this section must: (1) state the uplift balance to be financed; (2) state the period over which the uplift charges must be assessed to repay the debt obligations, which may not exceed 30 years; and (3) provide the process for remitting the proceeds of the financing to load-serving entities who were exposed to the costs included in the uplift balance, including a requirement for the load-serving entities to submit documentation of their exposure.
AFTER:  (c) The independent organization shall assess uplift charges to all load-serving entities on a load ratio share basis, which may be translated to a kWh charge, including load serving entities who enter the market after an order has been issued under this subchapter, but excluding the load of entiti…

### e26 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.653(c) · alt copy line 446

BEFORE: …gations, which may not exceed 30 years; and (3) provide the process for remitting the proceeds of the financing to load-serving entities who were exposed to the costs included in the uplift balance, including a requirement for the load-serving entities to submit documentation of their exposure. (c) 
QUOTE: The independent organization shall assess uplift charges to all load-serving entities on a load ratio share basis, which may be translated to a kWh charge, including load serving entities who enter the market after an order has been issued under this subchapter, but excluding the load of entities that opt out under Subsection (d).
AFTER:  (d) The commission shall develop a one-time process that allows municipally owned utilities, electric cooperatives, river authorities, a retail electric provider that has the same corporate parent as each of the provider's customers, a retail electric provider that is an affiliate of each of the pr…

### e27 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.653(d) · alt copy line 452

BEFORE: …sess uplift charges to all load-serving entities on a load ratio share basis, which may be translated to a kWh charge, including load serving entities who enter the market after an order has been issued under this subchapter, but excluding the load of entities that opt out under Subsection (d). (d) 
QUOTE: The commission shall develop a one-time process that allows municipally owned utilities, electric cooperatives, river authorities, a retail electric provider that has the same corporate parent as each of the provider's customers, a retail electric provider that is an affiliate of each of the provider's customers, and transmission-voltage customers served by a retail electric provider to opt out of the uplift charges by paying in full all invoices owed for usage during the period of emergency. Load-serving entities and transmission-voltage customers that opt out under this subsection shall not receive any proceeds from the uplift financing.
AFTER:  (e) An order issued under this section must include a requirement that any load-serving entity that receives proceeds from the financing that exceed the entity's actual exposure to uplift charges from consumption during the period of emergency notify the independent organization and remit any exces…

### e28 · `hb4492-87r` · tier 1 · HB 4492 (87th Legislature, 2021), enrolled: securitization
locator: HB 4492 (87R), Utilities Code Sec. 39.653(e) · alt copy line 463

BEFORE: …rved by a retail electric provider to opt out of the uplift charges by paying in full all invoices owed for usage during the period of emergency. Load-serving entities and transmission-voltage customers that opt out under this subsection shall not receive any proceeds from the uplift financing. (e) 
QUOTE: An order issued under this section must include a requirement that any load-serving entity that receives proceeds from the financing that exceed the entity's actual exposure to uplift charges from consumption during the period of emergency notify the independent organization and remit any excess receipts. Any payments received under this subsection must be credited against the uplift balance to reduce the remaining uplift charges.
AFTER:  (f) Not later than the 90th day after the date the independent organization files an application for an order under Subsection (a), the commission shall issue an order described by Subsection (a) or an order denying the application. The order becomes effective in accordance with its terms and the o…

### e29 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, Securitization Default Charges, paragraph (2) · text copy line 49 · heading above: 26.2 Securitization Default Charges

BEFORE: …sue Invoices to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to collect the monthly amount determined by ERCOT to be necessary to repay the Securitization Default Balance. ERCOT may assess Securitization Default Charges over a period of up to 30 years. (2) 
QUOTE: Each Counter-Party's share of the Securitization Default Charge for a month is calculated using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as follows:
AFTER:  SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp) Where: SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,) ∑_(mp) (SDCRTAML _(mp) + SDCWSLTOT _(mp))_(,) ∑_(mp )SDCRTQQES _(mp,) ∑_(mp) SDCRTQQEP _(mp,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp…

### e30 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), formula · text copy line 51 · heading above: 26.2 Securitization Default Charges

BEFORE: …Each Counter-Party's share of the Securitization Default Charge for a month is calculated using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as follows: 
QUOTE: SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp)
AFTER:  Where: SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,) ∑_(mp) (SDCRTAML _(mp) + SDCWSLTOT _(mp))_(,) ∑_(mp )SDCRTQQES _(mp,) ∑_(mp) SDCRTQQEP _(mp,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp) (SDCRTOBL _(mp) + SDCRTOBLLO _(mp))_(,…

### e31 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), formula · text copy line 55 · heading above: 26.2 Securitization Default Charges

BEFORE: …n Default Charge for a month is calculated using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as follows: SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp) Where: 
QUOTE: SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT
AFTER:  SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,) ∑_(mp) (SDCRTAML _(mp) + SDCWSLTOT _(mp))_(,) ∑_(mp )SDCRTQQES _(mp,) ∑_(mp) SDCRTQQEP _(mp,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp) (SDCRTOBL _(mp) + SDCRTOBLLO _(mp))_(,) ∑_(mp) (SDCDAOPT _(mp) + SDCDAOBL _(mp) + SDCOP…

### e32 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), variable table, SDCMMA · text copy line 122 · heading above: 26.2 Securitization Default Charges

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SDCMMA _(cp) | MWh | 
QUOTE: Securitization Default Charge Maximum MWh Activity-The maximum MWh activity of all Market Participants represented by the Counter-Party in the DAM, RTM and CRR Auction for the reference month.
AFTER:  | +--------------------------+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e33 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (3) · text copy line 223 · heading above: 26.2 Securitization Default Charges

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (3) 
QUOTE: The Securitization Default Charge amount will be allocated to the QSE or CRR Account Holder assigned to a registered Counter-Party based on the pro-rata share of MWhs that the QSE or CRR Account Holder contributed to its Counter-Party's maximum MWh activity ratio share.
AFTER:  (4) As needed, but no less than annually, ERCOT will conduct an evaluation to determine if the Total Securitization Default Charge Monthly Amount (TSDCMA), which is the amount collected each month to repay the Securitization Default Balance, should be modified. In conducting this evaluation, ERCOT …

### e34 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (4) · text copy line 225 · heading above: 26.2 Securitization Default Charges

BEFORE: …-------------------+ (3) The Securitization Default Charge amount will be allocated to the QSE or CRR Account Holder assigned to a registered Counter-Party based on the pro-rata share of MWhs that the QSE or CRR Account Holder contributed to its Counter-Party's maximum MWh activity ratio share. (4) 
QUOTE: As needed, but no less than annually, ERCOT will conduct an evaluation to determine if the Total Securitization Default Charge Monthly Amount (TSDCMA), which is the amount collected each month to repay the Securitization Default Balance, should be modified. In conducting this evaluation, ERCOT will calculate the amount that must be collected each month to service the then-remaining Securitization Default Balance debt in even monthly amounts over the remaining tenor of the debt.
AFTER:  (5) If ERCOT modifies the TSDCMA pursuant to paragraph (4) above, ERCOT will issue a Market Notice notifying Market Participants of the change no later than 15 days before the beginning of the month in which the new TSDCMA will be used to calculate the Securitization Default Charges. 26.3 Securitiz…

### e35 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.1, Invoice Recipient Payment to ERCOT, paragraph (1) · text copy line 267 · heading above: 26.3.1.1 Invoice Recipient Payment to ERCOT for Securitization Default Charge Invoices

BEFORE: …ss. 26.3.1 Payment Process for Securitization Default Charge Invoices (1) Payments for Securitization Default Charge Invoices are due on a Business Day and Bank Business Day basis in a process detailed below. 26.3.1.1 Invoice Recipient Payment to ERCOT for Securitization Default Charge Invoices (1) 
QUOTE: The payment due date and time for Securitization Default Charge Invoices, with funds owed by an Invoice Recipient, is 1700 on the fifth Bank Business Day after the Securitization Default Charge Invoice date, unless fifth Bank Business Day is not a Business Day.
AFTER:  If the fifth Bank Business Day is not a Business Day, then the payment is due by 1700 on the next Bank Business Day after the fifth Bank Business Day that is also a Business Day. (2) All Securitization Default Charge Invoices due, with funds owed by an Invoice Recipient, must be paid to ERCOT in U.…

### e36 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3, Securitization Default Charge Invoices, paragraph (2) · text copy line 233 · heading above: 26.3 Securitization Default Charge Invoices

BEFORE: …Calendar, on the seventh Business Day of a month. Unless expressly stated otherwise, the publication of the Securitization Default Charge Invoices can occur as late as 2400 on the scheduled publication date. The Market Participant to whom the Invoice is addressed (Invoice Recipient) is a payor. (2) 
QUOTE: Each Invoice Recipient shall pay any debit shown on the Securitization Default Charge Invoice on the payment due date, whether or not there is any Settlement and billing dispute regarding the amount of the debit.
AFTER:  (3) ERCOT shall post the Securitization Default Charge Invoice on the MIS Certified Area. The Invoice Recipient is responsible for accessing the Securitization Default Charge Invoice on the MIS Certified Area once posted by ERCOT, as described in Section 9.1.3, Settlement Statement and Invoice Acce…

### e37 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.1, paragraph (3) · text copy line 271 · heading above: 26.3.1.1 Invoice Recipient Payment to ERCOT for Securitization Default Charge Invoices

BEFORE: …tion Default Charge Invoices due, with funds owed by an Invoice Recipient, must be paid to ERCOT in U.S. Dollars (USDs) by Electronic Funds Transfer (EFT) in immediately available or good funds (i.e., not subject to reversal) on or before the payment due date. EFTs must be with U.S. banks only. (3) 
QUOTE: Securitization Default Charge Invoices are distinct from other Invoices issued by ERCOT and must be paid by an EFT that is separate from any other Invoice. An Invoice Recipient may not net amounts owing on a Securitization Default Charge Invoice with any other funds due to or from ERCOT.
AFTER:  (4) Payments for Securitization Default Charges must be made to the account listed on the Invoice. If payment is not made to the correct account, the payment will be rejected. Failure to remit funds to the correct account may result in a Payment Breach. The payment remark must include the Invoice n…

### e38 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.2, paragraph (1)(c) · text copy line 289 · heading above: 26.3.1.2 Insufficient Payments by Invoice Recipients for Securitization Default Charge Invoices

BEFORE: …s: (i) Both a Securitization Default Charge Invoice and a Securitization Uplift Charge Initial Invoice, or; (ii) One or both of the above securitization Invoices as well as any other ERCOT Invoice, and it is necessary to utilize Financial Security held with respect to other ERCOT market activities, 
QUOTE: funds drawn from Financial Security will be allocated first to cover short-pays of Invoices for non-securitization activity. Any remaining Financial Security will be allocated pro rata on the basis of unpaid Invoice amounts to Securitization Uplift Charge Initial Invoices and Securitization Default Charge Invoices.
AFTER:  (d) Regardless of whether ERCOT's draw on available Securitization Default Charge escrow deposits or other Financial Security under paragraphs (a) through (c) above is sufficient to cover the amount owed by a Market Participant for a Securitization Default Charge Invoice, a Market Participant's fai…

### e39 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.2, paragraph (1)(e) · text copy line 293 · heading above: 26.3.1.2 Insufficient Payments by Invoice Recipients for Securitization Default Charge Invoices

BEFORE: … to cover the amount owed by a Market Participant for a Securitization Default Charge Invoice, a Market Participant's failure to pay the Invoice by the payment due date and time will still be deemed a Payment Breach under Section 16.11.6, Payment Breach and Late Payments by Market Participants. (e) 
QUOTE: If an amount owed to ERCOT for a Securitization Default Charge Invoice cannot be fully recovered from a short-paying Market Participant by drawing upon available Securitization Default Charge escrow deposits, available Financial Security held with respect to other ERCOT market activities, or taking other action against the Market Participant to recover the amount owed, the remaining short payment amount will be taken into consideration in ERCOT's next evaluation of the Total Securitization Default Charge Monthly Amount performed pursuant to paragraph (4) of Section 26.2, Securitization Default Charges, that occurs after the short payment.
AFTER:  (f) Any action taken by under this Section does not relieve or otherwise excuse the short paying Market Participant of its obligation to fully pay all outstanding financial obligations to ERCOT, including is obligation to fully pay all Securitization Default Charge Invoices. 26.4 Securitization Def…

### e40 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.5.1, Securitization Default Charge Escrow, paragraph (2) · text copy line 317 · heading above: 26.5.1 Securitization Default Charge Escrow

BEFORE: … Charge Escrow (1) The term "Securitization Default Charge escrow deposit" means the amount required to be deposited with ERCOT in the form of cash or an unconditional, irrevocable letter of credit to be held in escrow for a Market Participant's obligation to pay Securitization Default Charges. (2) 
QUOTE: Although ERCOT is the servicer for the assessment and collection of Securitization Default Charges, by providing escrow deposits pursuant to this Section each Counter-Party grants the Texas Electric Market Stabilization Funding M LLC (TEMSFM) a secured interest in Securitization Default Charge escrow deposits to secure its obligation to pay the same.
AFTER:  (3) The security interest of TEMSFM is perfected upon a Counter-Party's deposit of cash or a letter of credit with ERCOT pursuant to this Section. 26.5.2 ERCOT Securitization Default Charge Credit Requirements for Counter-Parties (1) A Counter-Party must, at all times, maintain its Securitization D…

### e41 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.5.2, paragraph (2) · text copy line 325 · heading above: 26.5.2 ERCOT Securitization Default Charge Credit Requirements for Counter-Parties

BEFORE: …uritization Default Charge Credit Exposure (SDCCE). Each Counter-Party shall maintain any required Securitization Default Charge escrow deposit in a form acceptable to ERCOT in its sole discretion pursuant to Section 26.5.3, Means of Satisfying Securitization Default Charge Credit Requirements. (2) 
QUOTE: If at any time a Counter-Party does not meet ERCOT's SDCCE requirements, then the Counter-Party will be considered to be in Payment Breach and ERCOT may suspend the Counter-Party's rights under these Protocols until it meets the SDCCE requirements.
AFTER:  (3) ERCOT's failure to suspend a Counter-Party's rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a Congestion Revenue Right (CRR) Account Holder's ability to bid on future CRRs or a Qualified Scheduling Entity's (QSE's) abi…

### e42 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.5.4, Determination of Securitization Default Charge Credit Exposure, variable table · text copy line 366 · heading above: 26.5.4 Determination of Securitization Default Charge Credit Exposure for a Counter-Party

BEFORE: …riable Unit Description -------------------- ------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- SDCCE _(cp) $ 
QUOTE: Securitization Default Charge Credit Exposure - Estimated credit exposure for each Counter-Party related to Securitization Default Charges.
AFTER:  SDCMMARS _(cp, rm) None Securitization Default Charge Maximum MWh Activity Ratio Share - The Counter-Party's pro rata share of Securitization Default Charge Maximum MWh Activity in the most recent available reference month rm based on Initial Settlements. TSDCMA $ Total Securitization Default Charg…

### e43 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.5.4, parameter table (current value) · text copy line 384 · heading above: 26.5.4 Determination of Securitization Default Charge Credit Exposure for a Counter-Party

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- The above parameters are defined as follows: ----------------------------------------------------------------------- 
QUOTE: Parameter Unit Current Value ---------------- ----------------- ------------------------------------ nfmd Months 4
AFTER:  ----------------------------------------------------------------------- 26.5.5 Monitoring of a Counter-Party's Securitization Default Charge Credit Exposure by ERCOT (1) Pursuant to Section 16.11.5, Monitoring of a Counter-Party's Creditworthiness and Credit Exposure by ERCOT, ERCOT shall monitor t…

### e44 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, paragraph (1), formula · text copy line 83 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …zation Uplift Charge (1) ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day. The resulting charge to each QSE for the Operating Day is calculated as follows: 
QUOTE: LASUCAMT _(q, d) = SUCDA _(d) * DQSELSELRS _(q, d)
AFTER:  Where: DQSELSELRS _(q, d) = DQSELSERTAML _(q, d) / DERCOTQSELSERTAML _(d) DQSELSERTAML _(q, d) = max(0, $\sum_{i,l}^{\ }($LSERTAML _(l,) _(q, i))) DERCOTQSELSERTAML _(d) =$\sum_{q}^{\ }($DQSELSERTAML _(q, d)) LSERTAML _(l,) _(q, i) = PRELIMLSERTAML _(l,) _(q, i) - OPTOUTLSERTAML _(l,) _(q, i) The a…

### e45 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (1), variable SUCDA · text copy line 102 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …------------------------------------------------------------------------ LASUCAMT _(q, d) $ Load-Allocated Securitization Uplift Charge Amount per QSE - The charge allocated to QSE q, for the QSE's share of the total amount of Securitization Uplift Charges assessed for Operating Day d. SUCDA _(d) $ 
QUOTE: Securitization Uplift Charge Daily Amount - The total amount of Securitization Uplift Charges assessed for Operating Day d.
AFTER:  DQSELSELRS _(q, d) none Daily QSE Non-Opted-Out LSE Load Ratio Share - The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d. PRELIMLSERTA…

### e46 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (1), variable LSERTAML · text copy line 108 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …ities that are Customers of Retail Electric Providers (REPs), but excluding the RTAML of Securitization Uplift Charge Opt-Out Entities that are LSEs and excluding Direct Current Tie (DC Tie) exports, for LSE l represented by QSE q, for the 15-minute Settlement Interval i. LSERTAML _(l,) _(q, i) MWh 
QUOTE: Non-Opted-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML), excluding the RTAML for Securitization Uplift Charge Opt-Out Entities, Load that is exempt from Securitization Uplift Charges pursuant to the Declaratory Order entered by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 56119, Petition of Electric Reliability Council of Texas, Inc. for Expedited Declaratory Order Regarding Public Utility Regulatory Act Chapter 39, Subchapter N, and DC Tie exports, for LSE l represented by QSE q, for the 15-minute Settlement Interval i.
AFTER:  OPTOUTLSERTAML _(l,) _(q, i) MWh Opt-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML) of Securitization Uplift Charge Opt-Out Entities that are transmission-voltage Customers and Load exempt from Securitization Uplift Charges pursuant to the Declaratory Order en…

### e47 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (2) · text copy line 125 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (2) 
QUOTE: As needed, but no less often than quarterly, ERCOT will, to ensure the Securitization Uplift Charge is repaid in substantially equal payments over its term, conduct an evaluation to:
AFTER:  (a) Calculate under-collections or over-collections from the preceding evaluation period; (b) Estimate any anticipated under-collections or over-collections for the current or upcoming evaluation period; and (c) Calculate the periodic billing requirement for the upcoming evaluation period, taking i…

### e48 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (3) · text copy line 133 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …nd (c) Calculate the periodic billing requirement for the upcoming evaluation period, taking into account the total amount of prior and anticipated over-collection and under-collection amounts, and calculate the Securitization Uplift Charge Daily Amount for future periodic billing requirements. (3) 
QUOTE: If it is determined in the re-estimation process that the Securitization Uplift Charge Daily Amount needs to be revised, ERCOT will issue a Market Notice notifying Market Participants of the change no later than 15 calendar days before the Operating Day in which the new Securitization Uplift Charge Daily Amount will become effective.
AFTER:  (4) An LSE that is not a Securitization Uplift Charge Opt-Out Entity is responsible for remitting payment to its QSE for the LSE's share of the Securitization Uplift Charge, based on the LSE's Non-Opted-Out LSE Adjusted Metered Load (AML). An LSE may not pass through the Securitization Uplift Charg…

### e49 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (4) · text copy line 135 · heading above: 27.3 Securitization Uplift Charge

BEFORE: … process that the Securitization Uplift Charge Daily Amount needs to be revised, ERCOT will issue a Market Notice notifying Market Participants of the change no later than 15 calendar days before the Operating Day in which the new Securitization Uplift Charge Daily Amount will become effective. (4) 
QUOTE: An LSE that is not a Securitization Uplift Charge Opt-Out Entity is responsible for remitting payment to its QSE for the LSE's share of the Securitization Uplift Charge, based on the LSE's Non-Opted-Out LSE Adjusted Metered Load (AML). An LSE may not pass through the Securitization Uplift Charge to any transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity.
AFTER:  (5) ERCOT shall post to the ERCOT website a list that consists solely of every Electric Service Identifier (ESI ID) associated with a transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity. This list of ESI IDs will not include the identity of the Customer or its Retail…

### e50 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, paragraph (6) · text copy line 139 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …RCOT website a list that consists solely of every Electric Service Identifier (ESI ID) associated with a transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity. This list of ESI IDs will not include the identity of the Customer or its Retail Electric Provider (REP). (6) 
QUOTE: Securitization Uplift Charge Opt-Out Entity status for a transmission-voltage Customer is only granted for an ESI ID associated with the original Customer that was granted opt-out status, and this status cannot be transferred.
AFTER:  To identify any such possible transfers: (a) Each Transmission Service Provider (TSP) that serves a transmission voltage customer that is a Securitization Uplift Charge Opt-Out Entity shall adopt at least a monthly process that enables each TSP to compare current Customer records to those Customer …

### e51 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.2, paragraph (6) · text copy line 73 · heading above: 27.2 Changes Involving Securitization Uplift Charge Opt-Out Entities

BEFORE: …e with the PUCT. (5) A Securitization Uplift Charge Opt-Out Entity that is a REP must notify ERCOT within five Business Days of the REP becoming the Competitive Retailer (CR) of Record for a Customer that is not an affiliate of the REP or that does not have the same corporate parent of the REP. (6) 
QUOTE: Subject to paragraph (2) above, if a transmission-voltage Customer of a REP is a Securitization Uplift Charge Opt-Out Entity, the only ESI IDs associated with the transmission-voltage Customer that will be included in the Adjusted Metered Load (AML) adjustments for Securitization Uplift Charge Opt-Out Entities made under Section 27.3 are the specific ESI IDs included in opt-out notifications filed by the opt-out deadline in PUCT Project No. 52364
AFTER: , Proceeding for Eligible Entities to File an Opt Out Pursuant to PURA § 39.653(d) and for Load-Serving Entities to File Documentation of Exposure to Costs Pursuant to the Debt Obligation Order in Docket No. 52322. 27.2.1 Return of Securitization Proceeds (1) If an LSE is required under PURA § 39.66…

### e52 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.2.1, Return of Securitization Proceeds, paragraph (1) · text copy line 77 · heading above: 27.2.1 Return of Securitization Proceeds

BEFORE: …t-out deadline in PUCT Project No. 52364, Proceeding for Eligible Entities to File an Opt Out Pursuant to PURA § 39.653(d) and for Load-Serving Entities to File Documentation of Exposure to Costs Pursuant to the Debt Obligation Order in Docket No. 52322. 27.2.1 Return of Securitization Proceeds (1) 
QUOTE: If an LSE is required under PURA § 39.664 or the Debt Obligation Order in Docket No. 52322 to return securitization proceeds, then the LSE must remit the proceeds to its Qualified Scheduling Entity (QSE), and the QSE shall remit those funds to ERCOT within two Business Days of the QSE receiving the funds from the LSE.
AFTER:  The funds must be paid by the QSE to the account designated for payment of Securitization Uplift Charge Invoices. 27.3 Securitization Uplift Charge (1) ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge …

### e53 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.4.1, Securitization Uplift Charge Initial Invoices, paragraph (1) · text copy line 149 · heading above: 27.4.1 Securitization Uplift Charge Initial Invoices

BEFORE: … ID. 27.4 Securitization Uplift Charge Invoices 27.4.1 Securitization Uplift Charge Initial Invoices (1) ERCOT shall prepare Securitization Uplift Charge Initial Invoices for the Securitization Uplift Charge, as described in Section 27.3, Securitization Uplift Charge, using Initial Settlement data. 
QUOTE: ERCOT shall issue Securitization Uplift Charge Initial Invoices for an Operating Day on the same Business Day that Real-Time Market (RTM) Initial Statements are posted to the Market Information System (MIS) Certified Area for the same Operating Day.
AFTER:  ERCOT will post the dates that it will issue the Securitization Uplift Charge Initial Invoices under Section 9.1.2, Settlement Calendar. Unless expressly stated otherwise, the publication of Securitization Uplift Charge Initial Invoices can occur as late as 2400 on the scheduled publication date. T…

### e54 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.4.3.1, paragraph (1) · text copy line 219 · heading above: 27.4.3.1 Invoice Recipient Payment to ERCOT for Securitization Uplift Charge Initial Invoices

BEFORE: …Payment Process for Securitization Uplift Charge Initial Invoices (1) Payments for Securitization Uplift Charge Initial Invoices are due on a Business Day and Bank Business Day basis as detailed below. 27.4.3.1 Invoice Recipient Payment to ERCOT for Securitization Uplift Charge Initial Invoices (1) 
QUOTE: The payment due date and time for the Securitization Uplift Charge Initial Invoice, with funds owed by an Invoice Recipient, is 1700 on the second Bank Business Day after the Securitization Uplift Charge Initial Invoice date, unless the second Bank Business Day is not a Business Day.
AFTER:  If the second Bank Business Day is not a Business Day, the payment is due by 1700 on the next Bank Business Day after the second Bank Business Day that is also a Business Day. (2) All Securitization Uplift Charge Initial Invoices due, with funds owed by an Invoice Recipient, must be paid to ERCOT i…

### e55 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.4.2, Securitization Uplift Charge Reallocation Invoices, paragraphs (1)-(2) · text copy line 181 · heading above: 27.4.2 Securitization Uplift Charge Reallocation Invoices

BEFORE: …tion Uplift Charge Reallocation Invoices (1) ERCOT shall prepare Securitization Uplift Charge Reallocation Invoices on a net basis for Securitization Uplift Charges, as described in Section 27.3, Securitization Uplift Charge, based on RTM Final Settlement, True-Up Settlement, and Resettlement data. 
QUOTE: ERCOT shall issue Securitization Uplift Charge Reallocation Invoices for an Operating Day on the same Business Day that the Statements for RTM Final Settlements, True-Up Settlements and Resettlements are posted to the MIS Certified Area for the same Operating Day.
AFTER:  ERCOT will post the dates that it will issue the Securitization Uplift Charge Reallocation Invoices under Section 9.1.2, Settlement Calendar. Unless expressly stated otherwise, the publication of Securitization Uplift Charge Reallocation Invoices can occur as late as 2400 on the scheduled publicati…

### e56 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.4.6, paragraph (1)(e) · text copy line 281 · heading above: 27.4.6 Insufficient Payments by Invoice Recipients for Securitization Uplift Charge Reallocation Invoices

BEFORE: …ces and Securitization Default Charge Invoices. (e) If, after taking the actions set forth in the paragraphs above, and subject to paragraph (f) below, ERCOT still does not have sufficient funds to pay all amounts that it owes to Securitization Uplift Charge Reallocation Invoice Recipients in full, 
QUOTE: ERCOT shall reduce payments to all Securitization Uplift Charge Reallocation Invoice Recipients owed monies from ERCOT. The reductions shall be based on a pro rata basis of monies owed to each Securitization Uplift Charge Reallocation Invoice Recipient, to the extent necessary to clear ERCOT's accounts on the payment due date to achieve revenue neutrality for ERCOT as to Securitization Uplift Charge Reallocation Invoices.
AFTER:  ERCOT shall provide to all Market Participants payment details on all short payments and subsequent reimbursements of short pays. Details must include the identity of each short-paying Invoice Recipient and the dollar amount attributable to that Invoice Recipient, broken down by Invoice numbers. In…

### e57 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.4.4, paragraph (1)(e) · text copy line 245 · heading above: 27.4.4 Insufficient Payments by Invoice Recipients for Securitization Uplift Charge Initial Invoices

BEFORE: …Participant for an Initial Invoice for Securitization Uplift Charges, a Market Participant's failure to pay the Initial Invoice by the payment due date and time will still be deemed a Late Payment and Payment Breach under Section 16.11.6, Payment Breach and Late Payments by Market Participants. (e) 
QUOTE: If an amount owed to ERCOT for an Initial Invoice for Securitization Uplift Charges cannot be fully recovered from a short-paying Market Participant by drawing upon available Securitization Uplift Charge escrow deposits or taking other action against the Market Participant to recover the amount owed, the remaining short payment amount will be taken into consideration in ERCOT's next evaluation of the Securitization Uplift Charge Daily Amount performed pursuant to paragraph (2) of Section 27.3, Securitization Uplift Charge, that occurs after the short payment.
AFTER:  (f) Any action taken by ERCOT under this Section does not relieve or otherwise excuse the short-paying Market Participant of its obligation to fully pay all outstanding financial obligations to ERCOT, including its obligation to fully pay all Initial Invoices for Securitization Uplift Charges. 27.4…

### e58 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 145 (OCR), Appendix, PUCT Implementation of Securitization and Financing (2022 report) · text copy line 5809

BEFORE: … s system-wide offer cap as that term is defined in PURA § 39.652. 111 Accordingly, ERCOT filed applications for Debt Obligation Orders pursuant to Subchapter M and N of Chapter 39 of the Public Utility Regulatory Act (PURA), to finance the Winter Storm Uri Default and Uplift Balances in July 2021. 
QUOTE: The Debt Obligation Orders were issued on October 13, 2021.
AFTER:  The PUCT authorized ERCOT to finance a "default balance," which is an amount not greater than $800 million that includes the following: certain unpaid amounts owed to ERCOT by competitive market participants; Congestion Revenue Right (CRR) auction funds used by ERCOT to reduce short payments relate…

### e59 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 145 (OCR), Appendix (2022 report) · text copy line 5817

BEFORE: …on funds used by ERCOT to reduce short payments related to Winter Storm Uri; and costs associated with implementing the debt obligation order. The PUCT authorized ERCOT to assess a monthly "default charge" on Qualified Scheduling Entitles (QSEs) and CRR Account Holders to repay the default balance. 
QUOTE: The Subchapter M Default Balance Securitization financing closed, and proceeds were disbursed, in November 2021. ERCOT began collecting default charges to repay the default balance in January 2022.
AFTER:  A compliance docket was opened in accordance with ordering paragraph 45C of the Debt Obligation Order for all filings required by the Debt Obligation Order. 112 Approved on December 16, 2021, NPRR1103, Securitization - PURA Subchapter M Default Charges, established processes for the assessment and …

### e60 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 145 (OCR), Appendix (2022 report) · text copy line 5830

BEFORE: …sts incurred by Load Serving Entities (LSEs) related to Winter Storm Uri. The PUCT authorized ERCOT to assess a daily "uplift charge" on QSEs that represent LSEs that are not opted out of the uplift charge to repay the uplift balance and costs associated with implementing the debt obligation order. 
QUOTE: The Subchapter N Uplift Balance Securitization financing closed on June 15, 2022.
AFTER:  Posted on December 29, 2021, and approved on March 31, 2022, NPRR1114, Securitization - PURA Subchapter N Uplift Charges, 111 Application of the Electric Reliability Councill of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good-Ca…

### e61 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 145 (OCR), Appendix (2022 report), NPRR1103 · text copy line 5821

BEFORE: …losed, and proceeds were disbursed, in November 2021. ERCOT began collecting default charges to repay the default balance in January 2022. A compliance docket was opened in accordance with ordering paragraph 45C of the Debt Obligation Order for all filings required by the Debt Obligation Order. 112 
QUOTE: Approved on December 16, 2021, NPRR1103, Securitization - PURA Subchapter M Default Charges, established processes for the assessment and collection of Default Charges and Default Charge Escrow Deposits to QSEs and CRRAHs pursuant to the Debt Obligation Order (DOO) issued in PUCT Docket No. 52321, Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order Pursuant to Chapter 39, Subchapter M, of PURA.
AFTER:  113 Further, the PUCT authorized ERCOT to finance an "uplift balance," which is an amount not greater than $2.1 billion for certain extraordinary costs incurred by Load Serving Entities (LSEs) related to Winter Storm Uri. The PUCT authorized ERCOT to assess a daily "uplift charge" on QSEs that repr…

### e62 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 145 (OCR), Appendix (2022 report), NPRR1114 · text copy line 5831

BEFORE: … authorized ERCOT to assess a daily "uplift charge" on QSEs that represent LSEs that are not opted out of the uplift charge to repay the uplift balance and costs associated with implementing the debt obligation order. The Subchapter N Uplift Balance Securitization financing closed on June 15, 2022. 
QUOTE: Posted on December 29, 2021, and approved on March 31, 2022, NPRR1114, Securitization - PURA Subchapter N Uplift Charges,
AFTER:  111 Application of the Electric Reliability Councill of Texas, Inc. for a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, and for a Good-Cause Exception, Docket No. 52322, (Oct. 13, 2021). 112 Compliance Filing for Docket No. 52321 (Application of the Electric …

### e63 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), SDCRTMG definition · text copy line 79 · heading above: 26.2 Securitization Default Charges

BEFORE: …,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp) (SDCRTOBL _(mp) + SDCRTOBLLO _(mp))_(,) ∑_(mp) (SDCDAOPT _(mp) + SDCDAOBL _(mp) + SDCOPTS _(mp) + SDCOBLS _(mp)), ∑_(mp) (SDCOPTP _(mp) + SDCOBLP _(mp))} SDCMMATOT = ∑_(cp) (SDCMMA _(cp)) Where: SDCRTMG _(mp) = ∑_(r, p, i) (RTMG _(mp, r, p, i)), 
QUOTE: excluding RTMG for Reliability Must-Run (RMR) Resources and RTMG in Reliability Unit Commitment (RUC)-Committed Intervals for RUC-committed Resources
AFTER:  SDCRTDCIMP _(mp) = ∑_(p, i) (RTDCIMP _(mp, p, i)) / 4 SDCRTAML _(mp) = max(0,∑_(p, i) (RTAMLEXSECM _(mp, p, i))) SDCRTQQES _(mp) = ∑_(p, i) (RTQQES _(mp, p, i)) / 4 SDCRTQQEP _(mp) = ∑_(p, i) (RTQQEP _(mp, p, i)) / 4 SDCDAES _(mp) = ∑_(p, h) (DAES _(mp, p, h)) SDCDAEP _(mp) = ∑_(p, h) (DAEP _(mp, p…

### e64 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.2, paragraph (2), SDCMMA formula (first line) · text copy line 57 · heading above: 26.2 Securitization Default Charges

BEFORE: … using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as "the reference month"), as follows: SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp) Where: SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT 
QUOTE: SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,)
AFTER:  ∑_(mp) (SDCRTAML _(mp) + SDCWSLTOT _(mp))_(,) ∑_(mp )SDCRTQQES _(mp,) ∑_(mp) SDCRTQQEP _(mp,) ∑_(mp) SDCDAES _(mp,) ∑_(mp) SDCDAEP _(mp,) ∑_(mp) (SDCRTOBL _(mp) + SDCRTOBLLO _(mp))_(,) ∑_(mp) (SDCDAOPT _(mp) + SDCDAOBL _(mp) + SDCOPTS _(mp) + SDCOBLS _(mp)), ∑_(mp) (SDCOPTP _(mp) + SDCOBLP _(mp))} …

### e65 · `np-26` · tier 1 · ERCOT Nodal Protocols, Section 26: Securitization Default Charges (effective 2025-12-05)
locator: Section 26.3.1.2, paragraph (1)(d) · text copy line 291 · heading above: 26.3.1.2 Insufficient Payments by Invoice Recipients for Securitization Default Charge Invoices

BEFORE: …ncial Security will be allocated first to cover short-pays of Invoices for non-securitization activity. Any remaining Financial Security will be allocated pro rata on the basis of unpaid Invoice amounts to Securitization Uplift Charge Initial Invoices and Securitization Default Charge Invoices. (d) 
QUOTE: Regardless of whether ERCOT's draw on available Securitization Default Charge escrow deposits or other Financial Security under paragraphs (a) through (c) above is sufficient to cover the amount owed by a Market Participant for a Securitization Default Charge Invoice, a Market Participant's failure to pay the Invoice by the payment due date and time will still be deemed a Payment Breach under Section 16.11.6, Payment Breach and Late Payments by Market Participants.
AFTER:  (e) If an amount owed to ERCOT for a Securitization Default Charge Invoice cannot be fully recovered from a short-paying Market Participant by drawing upon available Securitization Default Charge escrow deposits, available Financial Security held with respect to other ERCOT market activities, or ta…

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

- **How it works #1** (cites e2, e4): Two separate charges repay the two balances. Securitization Default Charges are assessed to QSEs and CRR Account Holders to repay the Default Balance. [e2] The Securitization Uplift Charge is assessed to QSEs representing obligated LSEs, to pay the Uplift Balance, interest and other financing expenses. [e4]
- **How it works #2** (cites e5, e29, e30, e31, e32, e64, e63, e33, e34): **Default Charges: who pays how much.** ERCOT collects a monthly amount to repay the Default Balance and may assess it over up to 30 years. [e5] Each Counter-Party's monthly share is the Total Securitization Default Charge Monthly Amount (TSDCMA) times the Counter-Party's share of total "maximum MWh activity", computed from Settlement data for the most recent month with Final Settlement data for every Operating Day (the reference month). [e29][e30][e31] The activity measure is the maximum MWh activity of all Market Participants represented by the Counter-Party in the DAM, RTM and CRR Auction for the reference month, and the formula takes the Max of several monthly sums. [e32][e64] One of those sums, real-time generation, excludes generation for RMR Resources and in RUC-Committed Intervals for RUC-committed Resources. [e63] The Counter-Party's charge is allocated to its QSE or CRR Account Holder pro rata by the MWh each contributed to the Counter-Party's activity. [e33] ERCOT evaluates the TSDCMA at least annually, computing the amount needed to service the remaining debt in even monthly amounts over the remaining tenor. [e34]
- **How it works #3** (cites e10, e35, e36, e37): **Default Charge invoicing.** ERCOT prepares invoices monthly on the seventh Business Day. [e10] Payment is due at 1700 on the fifth Bank Business Day after the invoice date (moved to the next qualifying day if that is not a Business Day). [e35] An Invoice Recipient must pay any debit whether or not there is a Settlement and billing dispute, and may not net a Default Charge invoice against other amounts due to or from ERCOT. [e36][e37]
- **How it works #4** (cites e9, e38, e39, e40, e41, e42, e43): **Short-pays and escrow.** ERCOT first draws on the payer's Default Charge escrow deposit, then on Financial Security held for other activity, but may not use Securitization Uplift Charge escrow deposits for Default Charge short-pays. [e9] If Financial Security is drawn to cover several invoices, it goes first to non-securitization invoices and any remainder is allocated pro rata by unpaid amount to the securitization invoices. [e38] Any unrecovered short-pay is considered in ERCOT's next TSDCMA evaluation, i.e. it can be reflected in later charges. [e39] Each Counter-Party grants the Texas Electric Market Stabilization Funding M LLC (TEMSFM) a secured interest in its escrow deposits. [e40] A Counter-Party that does not meet its Default Charge credit requirement is in Payment Breach and ERCOT may suspend its rights under the Protocols. [e41] The credit exposure (SDCCE) is the Counter-Party's share of activity times the sum of TSDCMA over a number of forward months, which the Protocols' parameter table lists as 4. [e42][e43]
- **How it works #5** (cites e6, e44, e45, e11, e46, e47, e48, e49): **Uplift Charge allocation.** ERCOT allocates the daily Securitization Uplift Charge amount to QSEs representing obligated LSEs on a daily QSE Non-Opted-Out LSE Load Ratio Share: LASUCAMT = SUCDA x DQSELSELRS. [e6][e44][e45][e11] The load used excludes opt-out entities, load exempt under the PUCT declaratory order in Docket No. 56119, and DC Tie exports. [e46] ERCOT re-evaluates at least quarterly so the charge is repaid in substantially equal payments, and gives a Market Notice at least 15 calendar days before a revised daily amount takes effect. [e47][e48] An LSE that is not an opt-out entity pays its QSE for its share, and may not pass the charge through to a transmission-voltage Customer that is an opt-out entity. [e49]
- **How it works #6** (cites e7, e27, e50, e51, e52) FLAG number-not-in-quote: 27.2: **Opt-out.** Entities that qualified to opt out under PURA 39.653(d) do not pay it. [e7] The statute's one-time opt-out process was for municipally owned utilities, electric cooperatives, river authorities, certain affiliated REPs and transmission-voltage customers served by a REP, by paying in full all invoices owed for usage during the period of emergency; those that opt out do not receive any proceeds from the uplift financing. [e27] Opt-out status for a transmission-voltage Customer attaches to the ESI ID of the original Customer and cannot be transferred, and, subject to paragraph (2) of Section 27.2, only ESI IDs in notifications filed by the opt-out deadline in PUCT Project No. 52364 are included in the Adjusted Metered Load adjustments. [e50][e51] If an LSE must return securitization proceeds, it remits them to its QSE, which remits them to ERCOT within two Business Days of receipt. [e52]
- **How it works #7** (cites e53, e54, e55, e56, e57): **Uplift Charge invoicing.** ERCOT issues Initial Invoices (based on Initial Settlement data) on the same Business Day that RTM Initial Statements are posted for the Operating Day, due at 1700 on the second Bank Business Day after the invoice date. [e53][e54] Reallocation Invoices follow on the same Business Day as RTM Final, True-Up and Resettlement Statements. [e55] If ERCOT lacks funds to pay all Reallocation Invoice recipients, it reduces payments pro rata to achieve revenue neutrality for ERCOT. [e56] A short-pay of an Initial Invoice that cannot be recovered is considered in ERCOT's next evaluation of the Uplift Charge Daily Amount. [e57]
- **ERCOT context #1** (cites e12, e16, e13, e18, e17): HB 4492 (87th Legislature) directs the comptroller to invest not more than $800 million of the economic stabilization fund balance to finance the default balance, to be repaid by ERCOT market participants through default charges set by the PUCT. [e12] The interest rate is the Municipal Market Data Municipal Electric Index rate for the independent organization's credit rating plus 2.5 percent, and the debt term may not exceed 30 years. [e16] It defines the default balance (capped at $800 million) as an amount that includes only listed items: amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be uplifted; financial revenue auction receipts used to temporarily reduce short-pays; and reasonable implementation costs. [e13][e18] The statute says the financing lets owed participants be paid sooner, replenishes the auction receipts and lets the market repay over time. [e17]
- **ERCOT context #2** (cites e20, e21, e19, e22, e23): The statute directs that default charges be allocated using the same pro rata methodology under which charges would otherwise be uplifted under the protocols in effect on March 1, 2021, and assessed on all wholesale market participants, including those in default but still participating and those entering later. [e20] A central counterparty clearinghouse regulated as a derivatives clearing organization is exempt where it would be charged solely for that role. [e21] The order must include an adjustment mechanism to refund, over the remaining period, payments a participant makes toward unpaid obligations included in the financed balance. [e19] The order and charges are irrevocable and not subject to reduction after the order takes effect, though the commission may refinance, and the debt is nonrecourse, secured solely by the default charges. [e22][e23]
- **ERCOT context #3** (cites e14, e24, e15, e26, e25, e28): For the uplift side, the uplift balance is capped at $2.1 billion and is the amount uplifted to LSEs on a load ratio share basis for reliability deployment price adder charges and ancillary services costs above the system-wide offer cap, excluding amounts under Subchapter D of Chapter 41 and excluding amounts that were part of the prevailing settlement point price. [e14][e24] The period of emergency runs from 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e15] The statute has uplift charges assessed to all LSEs on a load ratio share basis, including later entrants, excluding opt-outs, with a maximum period of 30 years set in the order. [e26][e25] Proceeds go to LSEs exposed to the costs, who must document exposure, and any LSE receiving more than its actual exposure must notify ERCOT and remit the excess, which is credited against the uplift balance. [e25][e28]
- **Timeline #1** (cites e15): - 12 to 20 February 2021: period of emergency as defined in the statute. [e15]
- **Timeline #2** (cites e58) FLAG number-not-in-quote: 2022: - 13 October 2021: Debt Obligation Orders issued (per the IMM's 2022 report). [e58]
- **Timeline #3** (cites e59): - November 2021: Subchapter M default balance financing closed and proceeds disbursed; ERCOT began collecting default charges in January 2022 (IMM). [e59]
- **Timeline #4** (cites e61): - 16 December 2021: NPRR1103 (Subchapter M Default Charges) approved. [e61]
- **Timeline #5** (cites e62): - 29 December 2021 posted, 31 March 2022 approved: NPRR1114 (Subchapter N Uplift Charges). [e62]
- **Timeline #6** (cites e60): - 15 June 2022: Subchapter N uplift balance financing closed. [e60]
- **Key facts #2** (cites e5, e16): - Default Charges can be assessed over up to 30 years; the statute caps the debt term at 30 years. [e5][e16]
- **Key facts #3** (cites e16): - State-funded debt interest: municipal electric index plus 2.5 percent. [e16]
- **Key facts #5** (cites e10, e35): - Default Charge invoices are prepared monthly on the seventh Business Day, due on the fifth Bank Business Day after the invoice date. [e10][e35]
- **Key facts #6** (cites e54): - Uplift Charge Initial Invoices are due on the second Bank Business Day after the invoice date. [e54]
- **Common confusion #1** (cites e1, e3, e9, e32, e11): The two charges are separate: Default Charges (Subchapter M) repay the default balance and Uplift Charges (Subchapter N) repay the uplift balance, [e1][e3] and ERCOT may not use Securitization Uplift Charge escrow deposits to cover short-pays of Default Charges. [e9] The Default Charge share is based on maximum MWh activity (including generation, trades, DAM and CRR activity), not on load ratio share; the uplift charge is the one allocated by load ratio share. [e32][e11]
- **Questions #4** (cites e5, e16): Up to 30 years under the Protocols, and the statute says the order must state a period that may not exceed 30 years. [e5][e16]
- **Questions #6** (cites e29, e30, e31, e32): TSDCMA times its share of total maximum MWh activity across DAM, RTM and CRR auctions for the reference month. [e29][e30][e31][e32]
- **Questions #8** (cites e2, e32, e20): The Protocols assess Default Charges to QSEs and CRR Account Holders and measure activity in the CRR Auction among other markets. [e2][e32] The saved sources do not explain the policy reason beyond the statute's direction to use the pro rata methodology under which charges would otherwise be uplifted under the March 1, 2021 protocols. [e20]
- **Questions #10** (cites e9, e38, e65, e39): ERCOT draws on its Default Charge escrow, then Financial Security, with non-securitization short-pays served first; the nonpayment is a Payment Breach regardless, and any unrecovered amount is considered in the next TSDCMA evaluation. [e9][e38][e65][e39]
- **Questions #12** (cites e50): The opt-out status is tied to the ESI ID of the original Customer and cannot be transferred. [e50]
- **Questions #14** (cites e22): The statute says the order and charges are irrevocable and not subject to reduction, impairment or adjustment by further commission action after the order takes effect, although the commission may refinance. [e22]
- **Scenarios #2** (cites e9): - First the Default Charge escrow deposit for the Default Charge invoice. [e9]
- **Scenarios #3** (cites e38): - If other Financial Security must be used, it covers non-securitization short-pays first, then any remainder is allocated pro rata by unpaid amount to securitization invoices. [e38]
- **Scenarios #4** (cites e65): - The failure to pay on time is still a Payment Breach even if the draws cover the amount. [e65]
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

