---
id: securitization
name: Post-Uri Securitization
aliases: [securitization, Securitization Default Charge, Securitization Uplift Charge, Winter Storm Uri financing]
kind: rule
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-18
links:
  - to: winter-storm-uri
    type: related
    note: Both securitization balances relate to costs from Winter Storm Uri. [e1][e3]
  - to: retailer-defaults-2021
    type: related
    note: The default balance covers amounts owed to ERCOT by competitive wholesale market participants during the period of emergency that would otherwise be uplifted. [e12]
  - to: uplift
    type: related
    note: The Uplift Balance is money that was uplifted and then securitized. [e3]
  - to: credit-tpe
    type: related
    note: Securitization Default Charges have an escrow deposit, and ERCOT can use Financial Security to cover short-pays when escrow is insufficient. [e8][e9]
  - to: load-ratio-share
    type: related
    note: The Securitization Uplift Charge is allocated using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e15]
  - to: texas-legislature
    type: related
    note: The financing was authorized under PURA Chapter 39 subchapters. [e1][e3]
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
  - id: e15
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS)"
    quote: "Daily QSE Non-Opted-Out LSE Load Ratio Share — The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d."
  - id: e11
    source: hb4492-87r
    locator: "HB 4492 (87R), Section 1, Government Code Sec. 404.0241(b-1)"
    quote: "Notwithstanding any other law, directly or indirectly through a separately managed account or other investment vehicle, the comptroller shall invest not more than $800 million of the economic stabilization fund balance to finance the default balance as defined by Section 39.602, Utilities Code, to be repaid by ERCOT market participants through default charges established by the Public Utility Commission of Texas."
  - id: e12
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.602(1), definition of Default balance"
    quote: "\"Default balance\" means an amount of money of not more than $800 million that includes only: (A) amounts owed to the independent organization by competitive wholesale market participants from the period of emergency that otherwise would be or have been uplifted to other wholesale market participants;"
  - id: e13
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.652(4), definition of Uplift balance"
    quote: "\"Uplift balance\" means an amount of money of not more than $2.1 billion that was uplifted to load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41."
  - id: e14
    source: hb4492-87r
    locator: "HB 4492 (87R), Utilities Code Sec. 39.652(3), definition of Period of emergency"
    quote: "\"Period of emergency\" means the period beginning 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20, 2021."
---

## Definition

Post-Uri securitization in the Protocols covers two financings under PURA Chapter 39: the Securitization Default Balance (Subchapter M, Winter Storm Uri Default Balance Financing, capped at $800 million) and the Securitization Uplift Balance (Subchapter N, Winter Storm Uri Uplift Financing, under the Debt Obligation Order in PUCT Docket No. 52322). [e1][e3]

## How it works

Two separate charges repay the two balances. Securitization Default Charges are assessed to QSEs and CRR Account Holders to repay the Default Balance. [e2] ERCOT invoices them monthly (on the seventh Business Day) to collect the monthly amount needed, and may assess them over up to 30 years. [e5][e10]

The Securitization Uplift Charge is assessed to QSEs representing obligated LSEs, to pay the Uplift Balance, interest and other financing expenses. [e4] ERCOT allocates it to those QSEs for each Operating Day, using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e6][e15] Entities that qualified to opt out under PURA § 39.653(d) do not pay it. [e7]

## ERCOT context

HB 4492 (87th Legislature) directs the comptroller to invest not more than $800 million of the economic stabilization fund balance to finance the default balance, to be repaid by ERCOT market participants through default charges set by the PUCT. [e11] It defines the default balance (capped at $800 million) as amounts owed to ERCOT by competitive wholesale market participants during the period of emergency that would otherwise be uplifted to other participants. [e12] The uplift balance is capped at $2.1 billion and is the amount uplifted to load-serving entities on a load ratio share basis for reliability deployment price adder charges and ancillary services costs above the system-wide offer cap. [e13] The period of emergency runs from 12:01 a.m. on February 12, 2021 to 11:59 p.m. on February 20, 2021. [e14]

The default-charge side comes with escrow and credit rules. Market Participants deposit cash or a letter of credit in escrow for their Default Charge obligations. [e8] If an invoice is short-paid, ERCOT first draws on the escrow deposits and then on Financial Security held for other ERCOT market activity. [e9]

## Key facts

- Default Balance financing may not exceed $800 million, and the statute caps the Uplift Balance at $2.1 billion. [e1][e12][e13]
- Default Charges can be assessed over up to 30 years. [e5]
- Default Charges go to QSEs and CRR Account Holders; Uplift Charges go to QSEs representing obligated LSEs. [e2][e4]
- Default Charge invoices are prepared monthly on the seventh Business Day. [e10]
- Opt-out entities under PURA § 39.653(d) are excluded from Uplift Charges. [e7]

## Say it like this

(Guidance) After Winter Storm Uri, Texas financed two pools of unpaid and uplifted costs with securitization, and ERCOT now collects the repayment through two separate charges. One hits QSEs and CRR holders, the other hits QSEs for obligated LSEs' load.

## Common confusion

The two charges are separate: Default Charges (Subchapter M) repay the default balance and Uplift Charges (Subchapter N) repay the uplift balance, [e1][e3] ERCOT may not use Securitization Uplift Charge escrow deposits to cover short-pays of Default Charges. [e9]

## Questions

### Who pays Securitization Default Charges versus Uplift Charges?

Default Charges are assessed to QSEs and CRR Account Holders. Uplift Charges are assessed to QSEs that represent obligated LSEs. [e2][e4]

### How long can Default Charges run?

Up to 30 years. [e5]

## Open items

- Deeper pass: HB 4492's interest-rate formula (index plus 2.5 percent) and 30-year term limit, and the legislative history, were not summarized.
- Deeper pass: the Default Charge formula (largest-of-measures Counter-Party share, Section 26.2) and the Uplift Charge opt-out and reallocation mechanics (Sections 27.2, 27.4) were not summarized.
- Deeper pass: current charge rates and remaining balances are not in the saved sources.
