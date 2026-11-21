---
id: securitization
name: Post-Uri Securitization
aliases: [securitization, Securitization Default Charge, Securitization Uplift Charge, Winter Storm Uri financing]
kind: rule
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: winter-storm-uri
    type: related
    note: Both securitization balances relate to costs from Winter Storm Uri. [e1][e3]
  - to: retailer-defaults-2021
    type: related
    note: The statutory default balance includes amounts owed to the independent organization by competitive wholesale market participants during the period of emergency that otherwise would be uplifted. [e13]
  - to: uplift
    type: related
    note: The Uplift Balance is money that was uplifted and then securitized. [e3]
  - to: credit-tpe
    type: related
    note: Securitization Default Charges have an escrow deposit, and ERCOT can use Financial Security to cover short-pays when escrow is insufficient. [e8][e9]
  - to: load-ratio-share
    type: related
    note: The Securitization Uplift Charge is allocated using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e11]
  - to: texas-legislature
    type: related
    note: The financing was authorized under PURA Chapter 39 subchapters. [e1][e3]
  - to: ptp-obligation
    type: related
    note: The Default Charge activity measure includes day-ahead and real-time PTP Obligation and Option activity and CRR auction activity, so CRR Account Holders are charged. [e32][e64]
  - to: winter-storm-uri
    type: related
    note: The statutes define the period of emergency as 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e15]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Securitization Default Balance"
    quote: "The amount financed by ERCOT pursuant to Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter M, Winter Storm Uri Default Balance Financing, as authorized by the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Securitization Default Charge"
    quote: "Charges assessed to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to repay the Securitization Default Balance."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Balance"
    quote: "The amount of money ERCOT securitized under Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter N, Winter Storm Uri Uplift Financing, pursuant to the Debt Obligation Order (DOO) issued by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 52322"
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Charge"
    quote: "A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses."
  - id: e5
    source: np-26
    locator: "Section 26.2, Securitization Default Charges, paragraph (1)"
    quote: "ERCOT shall issue Invoices to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to collect the monthly amount determined by ERCOT to be necessary to repay the Securitization Default Balance. ERCOT may assess Securitization Default Charges over a period of up to 30 years."
  - id: e6
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, paragraph (1)"
    quote: "ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Charge Opt-Out Entity"
    quote: "An eligible entity under Public Utility Regulatory Act, TEX. UTIL. CODE ANN. § 39.653(d) (Vernon 1998 & Supp. 2007) (PURA) that qualified to opt-out of paying Securitization Uplift Charges"
  - id: e8
    source: np-26
    locator: "Section 26.5.1, Securitization Default Charge Escrow, paragraph (1)"
    quote: "The term “Securitization Default Charge escrow deposit” means the amount required to be deposited with ERCOT in the form of cash or an unconditional, irrevocable letter of credit to be held in escrow for a Market Participant’s obligation to pay Securitization Default Charges."
  - id: e9
    source: np-26
    locator: "Section 26.3.1.2, Insufficient Payments by Invoice Recipients, paragraph (1)(a)-(b)"
    quote: "ERCOT shall draw on any available Securitization Default Charge escrow deposits by the Invoice Recipient. (b) If available Securitization Default Charge escrow deposits are insufficient to cover the short-paid amount, ERCOT will utilize Financial Security held with respect to other ERCOT market activities as determined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure. ERCOT may not utilize Securitization Uplift Charge escrow deposits to cover short-pays of Securitization Default Charges."
  - id: e10
    source: np-26
    locator: "Section 26.3, Securitization Default Charge Invoices, paragraph (1)"
    quote: "ERCOT shall prepare Securitization Default Charge Invoices on a monthly basis, as specified in Section 9.1.2, Settlement Calendar, on the seventh Business Day of a month."
  - id: e11
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS)"
    quote: "Daily QSE Non-Opted-Out LSE Load Ratio Share — The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d."
  - id: e12
    source: hb4492-87r
    locator: "HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1)"
    quote: "Notwithstanding any other law, directly or indirectly through a separately managed account or other investment vehicle, the comptroller shall invest not more than $800 million of the economic stabilization fund balance to finance the default balance as defined by Section 39.602, Utilities Code, to be repaid by ERCOT market participants through default charges established by the Public Utility Commission of Texas."
  - id: e13
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.602(1), definition of Default balance"
    quote: "\"Default balance\" means an amount of money of not more than $800 million that includes only: (A) amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be or have been uplifted to other wholesale market participants;"
  - id: e14
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance"
    quote: "\"Uplift balance\" means an amount of money of not more than $2.1 billion that was uplifted to load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41."
  - id: e15
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.652(3), definition of Period of emergency"
    quote: "\"Period of emergency\" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021."
  - id: e16
    source: hb4492-87r
    locator: "HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1), interest and term"
    quote: "The interest rate charged in connection with the debt obligations must be calculated by adding the rate determined by the Municipal Market Data Municipal Electric Index, as published by Refinitiv TM3, based on the credit rating of the independent organization, as defined by Section 39.602, Utilities Code, plus 2.5 percent. The term of the debt obligations may not exceed 30 years."
  - id: e17
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.601(b), purpose of Subchapter M"
    quote: "Financing the default balance in the manner provided by this subchapter will: (1) allow wholesale market participants that are owed money to be paid in a more timely manner; (2) replenish financial revenue auction receipts temporarily used by the independent organization to reduce the Winter Storm Uri-related amounts short-paid to the wholesale market participants; and (3) allow the wholesale market to repay the default balance over time."
  - id: e18
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.602(1)(B)-(C), definition of Default balance"
    quote: "(B) financial revenue auction receipts used by the independent organization to temporarily reduce amounts short-paid to wholesale market participants related to the period of emergency; and (C) reasonable costs incurred by a state agency or the independent organization to implement a debt obligation order under Sections 39.603 and 39.604, including the cost of retiring or refunding existing debt."
  - id: e19
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.603(b)(2) and (c)"
    quote: "The order must include an adjustment mechanism requiring the independent organization to adjust default charges to refund, over the remaining period of the default charges, any payments made by a market participant toward unpaid obligations from the period of emergency that were included in the financed default balance."
  - id: e20
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.603(d)"
    quote: "The independent organization shall collect from and allocate among wholesale market participants the default charges using the same allocated pro rata share methodology under which the charges would otherwise be uplifted under the protocols in effect on March 1, 2021. The default charges must be assessed on all wholesale market participants, including market participants who are in default but still participating in the wholesale market and who enter the market after a debt obligation order is issued under this subchapter, and may be based on periodically updated transaction data to prevent market participants from engaging in behavior designed to avoid the default charges."
  - id: e21
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.603(f)"
    quote: "Notwithstanding another provision of this subchapter, default charges may not be collected from or allocated to a market participant that: (1) otherwise would be subject to a default charge solely as a result of acting as a central counterparty clearinghouse in wholesale market transactions in the ERCOT power region; and (2) is regulated as a derivatives clearing organization, as defined by Section 1a, Commodity Exchange Act (7 U.S.C. Section 1a)."
  - id: e22
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.603(g)"
    quote: "The order becomes effective in accordance with its terms and the order, together with the default charges authorized in the order, shall be irrevocable and not subject to reduction, impairment, or adjustment by further action of the commission after the order takes effect."
  - id: e23
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.603(i)"
    quote: "A debt obligation issued under this section is a nonrecourse debt secured solely by the default charges explicitly assessed to repay the obligation."
  - id: e24
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance, last sentence"
    quote: "The term does not include amounts that were part of the prevailing settlement point price during the period of emergency."
  - id: e25
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.653(b)"
    quote: "An order issued under this section must: (1) state the uplift balance to be financed; (2) state the period over which the uplift charges must be assessed to repay the debt obligations, which may not exceed 30 years; and (3) provide the process for remitting the proceeds of the financing to load-serving entities who were exposed to the costs included in the uplift balance, including a requirement for the load-serving entities to submit documentation of their exposure."
  - id: e26
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.653(c)"
    quote: "The independent organization shall assess uplift charges to all load-serving entities on a load ratio share basis, which may be translated to a kWh charge, including load serving entities who enter the market after an order has been issued under this subchapter, but excluding the load of entities that opt out under Subsection (d)."
  - id: e27
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.653(d)"
    quote: "The commission shall develop a one-time process that allows municipally owned utilities, electric cooperatives, river authorities, a retail electric provider that has the same corporate parent as each of the provider's customers, a retail electric provider that is an affiliate of each of the provider's customers, and transmission-voltage customers served by a retail electric provider to opt out of the uplift charges by paying in full all invoices owed for usage during the period of emergency. Load-serving entities and transmission-voltage customers that opt out under this subsection shall not receive any proceeds from the uplift financing."
  - id: e28
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.653(e)"
    quote: "An order issued under this section must include a requirement that any load-serving entity that receives proceeds from the financing that exceed the entity's actual exposure to uplift charges from consumption during the period of emergency notify the independent organization and remit any excess receipts. Any payments received under this subsection must be credited against the uplift balance to reduce the remaining uplift charges."
  - id: e29
    source: np-26
    locator: "Section 26.2, Securitization Default Charges, paragraph (2)"
    quote: "Each Counter-Party’s share of the Securitization Default Charge for a month is calculated using the best available Settlement data for the most recent month for which ERCOT has posted Final Settlement data for all Operating Days in the month (referred to below as “the reference month”), as follows:"
  - id: e30
    source: np-26
    locator: "Section 26.2, paragraph (2), formula"
    quote: "SDCRSCP _(cp =) TSDCMA * SDCMMARS _(cp)"
  - id: e31
    source: np-26
    locator: "Section 26.2, paragraph (2), formula"
    quote: "SDCMMARS _(cp) = SDCMMA _(cp) / SDCMMATOT"
  - id: e32
    source: np-26
    locator: "Section 26.2, paragraph (2), variable table, SDCMMA"
    quote: "Securitization Default Charge Maximum MWh Activity—The maximum MWh activity of all Market Participants represented by the Counter-Party in the DAM, RTM and CRR Auction for the reference month."
  - id: e33
    source: np-26
    locator: "Section 26.2, paragraph (3)"
    quote: "The Securitization Default Charge amount will be allocated to the QSE or CRR Account Holder assigned to a registered Counter-Party based on the pro-rata share of MWhs that the QSE or CRR Account Holder contributed to its Counter-Party’s maximum MWh activity ratio share."
  - id: e34
    source: np-26
    locator: "Section 26.2, paragraph (4)"
    quote: "As needed, but no less than annually, ERCOT will conduct an evaluation to determine if the Total Securitization Default Charge Monthly Amount (TSDCMA), which is the amount collected each month to repay the Securitization Default Balance, should be modified. In conducting this evaluation, ERCOT will calculate the amount that must be collected each month to service the then-remaining Securitization Default Balance debt in even monthly amounts over the remaining tenor of the debt."
  - id: e35
    source: np-26
    locator: "Section 26.3.1.1, Invoice Recipient Payment to ERCOT, paragraph (1)"
    quote: "The payment due date and time for Securitization Default Charge Invoices, with funds owed by an Invoice Recipient, is 1700 on the fifth Bank Business Day after the Securitization Default Charge Invoice date, unless fifth Bank Business Day is not a Business Day."
  - id: e36
    source: np-26
    locator: "Section 26.3, Securitization Default Charge Invoices, paragraph (2)"
    quote: "Each Invoice Recipient shall pay any debit shown on the Securitization Default Charge Invoice on the payment due date, whether or not there is any Settlement and billing dispute regarding the amount of the debit."
  - id: e37
    source: np-26
    locator: "Section 26.3.1.1, paragraph (3)"
    quote: "Securitization Default Charge Invoices are distinct from other Invoices issued by ERCOT and must be paid by an EFT that is separate from any other Invoice. An Invoice Recipient may not net amounts owing on a Securitization Default Charge Invoice with any other funds due to or from ERCOT."
  - id: e38
    source: np-26
    locator: "Section 26.3.1.2, paragraph (1)(c)"
    quote: "funds drawn from Financial Security will be allocated first to cover short-pays of Invoices for non-securitization activity. Any remaining Financial Security will be allocated pro rata on the basis of unpaid Invoice amounts to Securitization Uplift Charge Initial Invoices and Securitization Default Charge Invoices."
  - id: e39
    source: np-26
    locator: "Section 26.3.1.2, paragraph (1)(e)"
    quote: "If an amount owed to ERCOT for a Securitization Default Charge Invoice cannot be fully recovered from a short-paying Market Participant by drawing upon available Securitization Default Charge escrow deposits, available Financial Security held with respect to other ERCOT market activities, or taking other action against the Market Participant to recover the amount owed, the remaining short payment amount will be taken into consideration in ERCOT’s next evaluation of the Total Securitization Default Charge Monthly Amount performed pursuant to paragraph (4) of Section 26.2, Securitization Default Charges, that occurs after the short payment."
  - id: e40
    source: np-26
    locator: "Section 26.5.1, Securitization Default Charge Escrow, paragraph (2)"
    quote: "Although ERCOT is the servicer for the assessment and collection of Securitization Default Charges, by providing escrow deposits pursuant to this Section each Counter-Party grants the Texas Electric Market Stabilization Funding M LLC (TEMSFM) a secured interest in Securitization Default Charge escrow deposits to secure its obligation to pay the same."
  - id: e41
    source: np-26
    locator: "Section 26.5.2, paragraph (2)"
    quote: "If at any time a Counter-Party does not meet ERCOT’s SDCCE requirements, then the Counter-Party will be considered to be in Payment Breach and ERCOT may suspend the Counter-Party’s rights under these Protocols until it meets the SDCCE requirements."
  - id: e42
    source: np-26
    locator: "Section 26.5.4, Determination of Securitization Default Charge Credit Exposure, variable table"
    quote: "Securitization Default Charge Credit Exposure – Estimated credit exposure for each Counter-Party related to Securitization Default Charges."
  - id: e43
    source: np-26
    locator: "Section 26.5.4, parameter table (current value)"
    quote: "Parameter Unit Current Value ---------------- ----------------- ------------------------------------ nfmd Months 4"
  - id: e44
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, paragraph (1), formula"
    quote: "LASUCAMT _(q, d) = SUCDA _(d) * DQSELSELRS _(q, d)"
  - id: e45
    source: np-27
    locator: "Section 27.3, paragraph (1), variable SUCDA"
    quote: "Securitization Uplift Charge Daily Amount — The total amount of Securitization Uplift Charges assessed for Operating Day d."
  - id: e46
    source: np-27
    locator: "Section 27.3, paragraph (1), variable LSERTAML"
    quote: "Non-Opted-Out LSE Real-Time Adjusted Metered Load — The Real-Time Adjusted Metered Load (RTAML), excluding the RTAML for Securitization Uplift Charge Opt-Out Entities, Load that is exempt from Securitization Uplift Charges pursuant to the Declaratory Order entered by the Public Utility Commission of Texas (PUCT) in PUCT Docket No. 56119, Petition of Electric Reliability Council of Texas, Inc. for Expedited Declaratory Order Regarding Public Utility Regulatory Act Chapter 39, Subchapter N, and DC Tie exports, for LSE l represented by QSE q, for the 15-minute Settlement Interval i."
  - id: e47
    source: np-27
    locator: "Section 27.3, paragraph (2)"
    quote: "As needed, but no less often than quarterly, ERCOT will, to ensure the Securitization Uplift Charge is repaid in substantially equal payments over its term, conduct an evaluation to:"
  - id: e48
    source: np-27
    locator: "Section 27.3, paragraph (3)"
    quote: "If it is determined in the re-estimation process that the Securitization Uplift Charge Daily Amount needs to be revised, ERCOT will issue a Market Notice notifying Market Participants of the change no later than 15 calendar days before the Operating Day in which the new Securitization Uplift Charge Daily Amount will become effective."
  - id: e49
    source: np-27
    locator: "Section 27.3, paragraph (4)"
    quote: "An LSE that is not a Securitization Uplift Charge Opt-Out Entity is responsible for remitting payment to its QSE for the LSE’s share of the Securitization Uplift Charge, based on the LSE’s Non-Opted-Out LSE Adjusted Metered Load (AML). An LSE may not pass through the Securitization Uplift Charge to any transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity."
  - id: e50
    source: np-27
    locator: "Section 27.3, paragraph (6)"
    quote: "Securitization Uplift Charge Opt-Out Entity status for a transmission-voltage Customer is only granted for an ESI ID associated with the original Customer that was granted opt-out status, and this status cannot be transferred."
  - id: e51
    source: np-27
    locator: "Section 27.2, paragraph (6)"
    quote: "if a transmission-voltage Customer of a REP is a Securitization Uplift Charge Opt-Out Entity, the only ESI IDs associated with the transmission-voltage Customer that will be included in the Adjusted Metered Load (AML) adjustments for Securitization Uplift Charge Opt-Out Entities made under Section 27.3 are the specific ESI IDs included in opt-out notifications filed by the opt-out deadline in PUCT Project No. 52364"
  - id: e52
    source: np-27
    locator: "Section 27.2.1, Return of Securitization Proceeds, paragraph (1)"
    quote: "If an LSE is required under PURA § 39.664 or the Debt Obligation Order in Docket No. 52322 to return securitization proceeds, then the LSE must remit the proceeds to its Qualified Scheduling Entity (QSE), and the QSE shall remit those funds to ERCOT within two Business Days of the QSE receiving the funds from the LSE."
  - id: e53
    source: np-27
    locator: "Section 27.4.1, Securitization Uplift Charge Initial Invoices, paragraph (1)"
    quote: "ERCOT shall issue Securitization Uplift Charge Initial Invoices for an Operating Day on the same Business Day that Real-Time Market (RTM) Initial Statements are posted to the Market Information System (MIS) Certified Area for the same Operating Day."
  - id: e54
    source: np-27
    locator: "Section 27.4.3.1, paragraph (1)"
    quote: "The payment due date and time for the Securitization Uplift Charge Initial Invoice, with funds owed by an Invoice Recipient, is 1700 on the second Bank Business Day after the Securitization Uplift Charge Initial Invoice date, unless the second Bank Business Day is not a Business Day."
  - id: e55
    source: np-27
    locator: "Section 27.4.2, Securitization Uplift Charge Reallocation Invoices, paragraphs (1)-(2)"
    quote: "ERCOT shall issue Securitization Uplift Charge Reallocation Invoices for an Operating Day on the same Business Day that the Statements for RTM Final Settlements, True-Up Settlements and Resettlements are posted to the MIS Certified Area for the same Operating Day."
  - id: e56
    source: np-27
    locator: "Section 27.4.6, paragraph (1)(e)"
    quote: "ERCOT shall reduce payments to all Securitization Uplift Charge Reallocation Invoice Recipients owed monies from ERCOT. The reductions shall be based on a pro rata basis of monies owed to each Securitization Uplift Charge Reallocation Invoice Recipient, to the extent necessary to clear ERCOT’s accounts on the payment due date to achieve revenue neutrality for ERCOT as to Securitization Uplift Charge Reallocation Invoices."
  - id: e57
    source: np-27
    locator: "Section 27.4.4, paragraph (1)(e)"
    quote: "If an amount owed to ERCOT for an Initial Invoice for Securitization Uplift Charges cannot be fully recovered from a short-paying Market Participant by drawing upon available Securitization Uplift Charge escrow deposits or taking other action against the Market Participant to recover the amount owed, the remaining short payment amount will be taken into consideration in ERCOT’s next evaluation of the Securitization Uplift Charge Daily Amount performed pursuant to paragraph (2) of Section 27.3, Securitization Uplift Charge, that occurs after the short payment."
  - id: e58
    source: imm-som-2022
    locator: "page 145 (OCR), Appendix, PUCT Implementation of Securitization and Financing (2022 report)"
    quote: "The Debt Obligation Orders were issued on October 13, 2021."
  - id: e59
    source: imm-som-2022
    locator: "page 145 (OCR), Appendix (2022 report)"
    quote: "The Subchapter M Default Balance Securitization financing closed, and proceeds were disbursed, in November 2021. ERCOT began collecting default charges to repay the default balance in January 2022."
  - id: e60
    source: imm-som-2022
    locator: "page 145 (OCR), Appendix (2022 report)"
    quote: "The Subchapter N Uplift Balance Securitization financing closed on June 15, 2022."
  - id: e61
    source: imm-som-2022
    locator: "page 145 (OCR), Appendix (2022 report), NPRR1103"
    quote: "Approved on December 16, 2021, NPRR1103, Securitization — PURA Subchapter M Default Charges, established processes for the assessment and collection of Default Charges and Default Charge Escrow Deposits to QSEs and CRRAHs pursuant to the Debt Obligation Order (DOO) issued in PUCT Docket No. 52321, Application of Electric Reliability Council of Texas, Inc. for a Debt Obligation Order Pursuant to Chapter 39, Subchapter M, of PURA."
  - id: e62
    source: imm-som-2022
    locator: "page 145 (OCR), Appendix (2022 report), NPRR1114"
    quote: "Posted on December 29, 2021, and approved on March 31, 2022, NPRR1114, Securitization - PURA Subchapter N Uplift Charges,"
  - id: e63
    source: np-26
    locator: "Section 26.2, paragraph (2), SDCRTMG definition"
    quote: "excluding RTMG for Reliability Must-Run (RMR) Resources and RTMG in Reliability Unit Commitment (RUC)-Committed Intervals for RUC-committed Resources"
  - id: e64
    source: np-26
    locator: "Section 26.2, paragraph (2), SDCMMA formula (first line)"
    quote: "SDCMMA _(cp) = Max { ∑_(mp) (SDCRTMG _(mp) + SDCRTDCIMP _(mp))_(,)"
  - id: e65
    source: np-26
    locator: "Section 26.3.1.2, paragraph (1)(d)"
    quote: "Regardless of whether ERCOT’s draw on available Securitization Default Charge escrow deposits or other Financial Security under paragraphs (a) through (c) above is sufficient to cover the amount owed by a Market Participant for a Securitization Default Charge Invoice, a Market Participant’s failure to pay the Invoice by the payment due date and time will still be deemed a Payment Breach under Section 16.11.6, Payment Breach and Late Payments by Market Participants."
---

## Definition

Post-Uri securitization in the Protocols covers two financings under PURA Chapter 39: the Securitization Default Balance (Subchapter M, Winter Storm Uri Default Balance Financing, capped at $800 million) and the Securitization Uplift Balance (Subchapter N, Winter Storm Uri Uplift Financing, under the Debt Obligation Order in PUCT Docket No. 52322). [e1][e3]

## How it works

Two separate charges repay the two balances. Securitization Default Charges are assessed to QSEs and CRR Account Holders to repay the Default Balance. [e2] The Securitization Uplift Charge is assessed to QSEs representing obligated LSEs, to pay the Uplift Balance, interest and other financing expenses. [e4]

**Default Charges: who pays how much.** ERCOT collects a monthly amount to repay the Default Balance and may assess it over up to 30 years. [e5] Each Counter-Party's monthly share is the Total Securitization Default Charge Monthly Amount (TSDCMA) times the Counter-Party's share of total "maximum MWh activity", computed from Settlement data for the most recent month with Final Settlement data for every Operating Day (the reference month). [e29][e30][e31] The activity measure is the maximum MWh activity of all Market Participants represented by the Counter-Party in the DAM, RTM and CRR Auction for the reference month, and the formula takes the Max of several monthly sums. [e32][e64] One of those sums, real-time generation, excludes generation for RMR Resources and in RUC-Committed Intervals for RUC-committed Resources. [e63] The Counter-Party's charge is allocated to its QSE or CRR Account Holder pro rata by the MWh each contributed to the Counter-Party's activity. [e33] ERCOT evaluates the TSDCMA at least annually, computing the amount needed to service the remaining debt in even monthly amounts over the remaining tenor. [e34]

**Default Charge invoicing.** ERCOT prepares invoices monthly on the seventh Business Day. [e10] Payment is due at 1700 on the fifth Bank Business Day after the invoice date (moved to the next qualifying day if that is not a Business Day). [e35] An Invoice Recipient must pay any debit whether or not there is a Settlement and billing dispute, and may not net a Default Charge invoice against other amounts due to or from ERCOT. [e36][e37]

**Short-pays and escrow.** ERCOT first draws on the payer's Default Charge escrow deposit, then on Financial Security held for other activity, but may not use Securitization Uplift Charge escrow deposits for Default Charge short-pays. [e9] If Financial Security is drawn to cover several invoices, it goes first to non-securitization invoices and any remainder is allocated pro rata by unpaid amount to the securitization invoices. [e38] Any unrecovered short-pay is considered in ERCOT's next TSDCMA evaluation, i.e. it can be reflected in later charges. [e39] Each Counter-Party grants the Texas Electric Market Stabilization Funding M LLC (TEMSFM) a secured interest in its escrow deposits. [e40] A Counter-Party that does not meet its Default Charge credit requirement is in Payment Breach and ERCOT may suspend its rights under the Protocols. [e41] The credit exposure (SDCCE) is the Counter-Party's share of activity times the sum of TSDCMA over a number of forward months, which the Protocols' parameter table lists as 4. [e42][e43]

**Uplift Charge allocation.** ERCOT allocates the daily Securitization Uplift Charge amount to QSEs representing obligated LSEs on a daily QSE Non-Opted-Out LSE Load Ratio Share: LASUCAMT = SUCDA x DQSELSELRS. [e6][e44][e45][e11] The load used excludes opt-out entities, load exempt under the PUCT declaratory order in Docket No. 56119, and DC Tie exports. [e46] ERCOT re-evaluates at least quarterly so the charge is repaid in substantially equal payments, and gives a Market Notice at least 15 calendar days before a revised daily amount takes effect. [e47][e48] An LSE that is not an opt-out entity pays its QSE for its share, and may not pass the charge through to a transmission-voltage Customer that is an opt-out entity. [e49]

**Opt-out.** Entities that qualified to opt out under PURA 39.653(d) do not pay it. [e7] The statute's one-time opt-out process was for municipally owned utilities, electric cooperatives, river authorities, certain affiliated REPs and transmission-voltage customers served by a REP, by paying in full all invoices owed for usage during the period of emergency; those that opt out do not receive any proceeds from the uplift financing. [e27] Opt-out status for a transmission-voltage Customer attaches to the ESI ID of the original Customer and cannot be transferred, and only ESI IDs in notifications filed by the opt-out deadline in PUCT Project No. 52364 are included in the Adjusted Metered Load adjustments. [e50][e51] If an LSE must return securitization proceeds, it remits them to its QSE, which remits them to ERCOT within two Business Days of receipt. [e52]

**Uplift Charge invoicing.** ERCOT issues Initial Invoices (based on Initial Settlement data) on the same Business Day that RTM Initial Statements are posted for the Operating Day, due at 1700 on the second Bank Business Day after the invoice date. [e53][e54] Reallocation Invoices follow on the same Business Day as RTM Final, True-Up and Resettlement Statements. [e55] If ERCOT lacks funds to pay all Reallocation Invoice recipients, it reduces payments pro rata to achieve revenue neutrality for ERCOT. [e56] A short-pay of an Initial Invoice that cannot be recovered is considered in ERCOT's next evaluation of the Uplift Charge Daily Amount. [e57]

## ERCOT context

HB 4492 (87th Legislature) directs the comptroller to invest not more than $800 million of the economic stabilization fund balance to finance the default balance, to be repaid by ERCOT market participants through default charges set by the PUCT. [e12] The interest rate is the Municipal Market Data Municipal Electric Index rate for the independent organization's credit rating plus 2.5 percent, and the debt term may not exceed 30 years. [e16] It defines the default balance (capped at $800 million) as an amount that includes only listed items: amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be uplifted; financial revenue auction receipts used to temporarily reduce short-pays; and reasonable implementation costs. [e13][e18] The statute says the financing lets owed participants be paid sooner, replenishes the auction receipts and lets the market repay over time. [e17]

The statute directs that default charges be allocated using the same pro rata methodology under which charges would otherwise be uplifted under the protocols in effect on March 1, 2021, and assessed on all wholesale market participants, including those in default but still participating and those entering later. [e20] A central counterparty clearinghouse regulated as a derivatives clearing organization is exempt where it would be charged solely for that role. [e21] The order must include an adjustment mechanism to refund, over the remaining period, payments a participant makes toward unpaid obligations included in the financed balance. [e19] The order and charges are irrevocable and not subject to reduction after the order takes effect, though the commission may refinance, and the debt is nonrecourse, secured solely by the default charges. [e22][e23]

For the uplift side, the uplift balance is capped at $2.1 billion and is the amount uplifted to LSEs on a load ratio share basis for reliability deployment price adder charges and ancillary services costs above the system-wide offer cap, excluding amounts under Subchapter D of Chapter 41 and excluding amounts that were part of the prevailing settlement point price. [e14][e24] The period of emergency runs from 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e15] The statute has uplift charges assessed to all LSEs on a load ratio share basis, including later entrants, excluding opt-outs, with a maximum period of 30 years set in the order. [e26][e25] Proceeds go to LSEs exposed to the costs, who must document exposure, and any LSE receiving more than its actual exposure must notify ERCOT and remit the excess, which is credited against the uplift balance. [e25][e28]

## Timeline

- 12 to 20 February 2021: period of emergency as defined in the statute. [e15]
- 13 October 2021: Debt Obligation Orders issued (per the IMM's 2022 report). [e58]
- November 2021: Subchapter M default balance financing closed and proceeds disbursed; ERCOT began collecting default charges in January 2022 (IMM). [e59]
- 16 December 2021: NPRR1103 (Subchapter M Default Charges) approved. [e61]
- 29 December 2021 posted, 31 March 2022 approved: NPRR1114 (Subchapter N Uplift Charges). [e62]
- 15 June 2022: Subchapter N uplift balance financing closed. [e60]

## Key facts

- Default Balance financing may not exceed $800 million, and the statute caps the Uplift Balance at $2.1 billion. [e1][e13][e14]
- Default Charges can be assessed over up to 30 years; the statute caps the debt term at 30 years. [e5][e16]
- State-funded debt interest: municipal electric index plus 2.5 percent. [e16]
- Default Charges go to QSEs and CRR Account Holders; Uplift Charges go to QSEs representing obligated LSEs. [e2][e4]
- Default Charge invoices are prepared monthly on the seventh Business Day, due on the fifth Bank Business Day after the invoice date. [e10][e35]
- Uplift Charge Initial Invoices are due on the second Bank Business Day after the invoice date. [e54]
- Opt-out entities under PURA § 39.653(d) are excluded from Uplift Charges. [e7]

## Say it like this

(Guidance) After Winter Storm Uri, Texas financed two pools of unpaid and uplifted costs with securitization, and ERCOT now collects the repayment through two separate charges. One hits QSEs and CRR holders by trading activity, the other hits QSEs for obligated LSEs' load.

## Common confusion

The two charges are separate: Default Charges (Subchapter M) repay the default balance and Uplift Charges (Subchapter N) repay the uplift balance, [e1][e3] and ERCOT may not use Securitization Uplift Charge escrow deposits to cover short-pays of Default Charges. [e9] The Default Charge share is based on maximum MWh activity (including generation, trades, DAM and CRR activity), not on load ratio share; the uplift charge is the one allocated by load ratio share. [e32][e11]

## Questions

### Who pays Securitization Default Charges versus Uplift Charges?

Default Charges are assessed to QSEs and CRR Account Holders. Uplift Charges are assessed to QSEs that represent obligated LSEs. [e2][e4]

### How long can Default Charges run?

Up to 30 years under the Protocols, and the statute says the order must state a period that may not exceed 30 years. [e5][e16]

### How is a Counter-Party's Default Charge share computed?

TSDCMA times its share of total maximum MWh activity across DAM, RTM and CRR auctions for the reference month. [e29][e30][e31][e32]

### Why do CRR Account Holders pay Default Charges at all?

The Protocols assess Default Charges to QSEs and CRR Account Holders and measure activity in the CRR Auction among other markets. [e2][e32] The saved sources do not explain the policy reason beyond the statute's direction to use the pro rata methodology under which charges would otherwise be uplifted under the March 1, 2021 protocols. [e20]

### What if a participant short-pays a Default Charge invoice?

ERCOT draws on its Default Charge escrow, then Financial Security, with non-securitization short-pays served first; the nonpayment is a Payment Breach regardless, and any unrecovered amount is considered in the next TSDCMA evaluation. [e9][e38][e65][e39]

### What if a transmission-voltage customer that opted out changes owner?

The opt-out status is tied to the ESI ID of the original Customer and cannot be transferred. [e50]

### Can the PUCT later cut the charges?

The statute says the order and charges are irrevocable and not subject to reduction, impairment or adjustment by further commission action after the order takes effect, although the commission may refinance. [e22]

## Scenarios

### A QSE short-pays both a Default Charge invoice and an ordinary settlement invoice. In what order does ERCOT use collateral?

- First the Default Charge escrow deposit for the Default Charge invoice. [e9]
- If other Financial Security must be used, it covers non-securitization short-pays first, then any remainder is allocated pro rata by unpaid amount to securitization invoices. [e38]
- The failure to pay on time is still a Payment Breach even if the draws cover the amount. [e65]

## Open items

- Resolved 2026-11-21: HB 4492 interest formula (municipal electric index plus 2.5 percent) and 30-year limit, the Default Charge share formula (Section 26.2) and Uplift Charge opt-out and invoicing mechanics (Sections 27.2-27.4) are now covered. The full list of measures inside the Max() for SDCMMA is only partly reproduced.
- Current TSDCMA, daily uplift charge amounts, charge rates and remaining balances are not in the saved sources.
- Uplift Charge escrow and credit-exposure mechanics (Section 27.5) were not summarized.
- Debt Obligation Order dates (13 October 2021) and closing dates come from the IMM 2022 report's appendix; the Orders themselves (Dockets 52321 and 52322) are not saved.
- Whether the Section 39.603(d) pro rata methodology "protocols in effect on March 1, 2021" equals the Section 26.2 MWh-activity measure is not stated in the saved sources.
- SB 1580 (co-op securitization, referenced in the IMM 2021 report) is not saved and was not used.
