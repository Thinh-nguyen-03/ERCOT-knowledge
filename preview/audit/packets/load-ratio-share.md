# Audit packet: Load Ratio Share (LRS) (load-ratio-share)

kind metric · domain congestion · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Ratio Share · text copy line 1419

BEFORE: …cesses used to develop and create Load Profiles. Load Profiling Methodology The fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. Load Ratio Share 
QUOTE: The ratio of an Entity's AML to total ERCOT AML for an interval.
AFTER:  Load Resource (see Resource) Load Serving Entity (LSE) An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs. Load Zone (1) In the Day-Ahead Market (D…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Adjusted Metered Load (AML) · text copy line 41 · heading above: 2.1 DEFINITIONS

BEFORE: … involving manual intervention. Acquisition Transfer Effective Date The date on which the Acquisition Transfer of ESI IDs from the Losing CR to the Gaining CR takes place. This is the date on which the meter read is taken and is used in Acquisition Transfer transactions. Adjusted Metered Load (AML) 
QUOTE: Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports.
AFTER:  Adjusted Static Models Load Profiles that are generated from statistical models that are based on static historical Load data, and adjusted for conditions of the day (e.g., weather, Season, etc.). Adjustment Period For each Operating Hour, the time between 1800 in the Day-Ahead up to the start of t…

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval, paragraph (1) · text copy line 4407 · heading above: 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval (1) 
QUOTE: Each QSE's Load Ratio Share (LRS) for a 15-minute Settlement Interval is calculated as follows:
AFTER:  LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT The above variables are defined as follows: ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.1.2, Ancillary Service Obligation Assignment and Notice, paragraph (1) · text copy line 307 · heading above: 4.2.1.2 Ancillary Service Obligation Assignment and Notice

BEFORE: …600 of the Day-Ahead. If ERCOT changes the Ancillary Service Plan per Section 6.4.9.1.2, Changes to Operating Day Ancillary Service Plan, the ASDCs reflecting the change to the Ancillary Service Plan will be posted to the ERCOT website. 4.2.1.2 Ancillary Service Obligation Assignment and Notice (1) 
QUOTE: ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level.
AFTER:  If the resultant QSE-level share is negative, the QSE's share will be set to zero and all other QSE shares will be adjusted on a pro rata basis such that the sum of all shares is equal to one. The resulting Ancillary Service quantity for each QSE, by service, by hour, is called its Ancillary Servic…

### e5 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1) · text copy line 2135 · heading above: 5.7.4.2 RUC Make-Whole Uplift Charge

BEFORE: …s for which this RUC Capacity Credit is calculated. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.4.2 RUC Make-Whole Uplift Charge (1) 
QUOTE: If the revenues from the charges under Section 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows:
AFTER:  LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i) Where: RUCMWAMTTOT_(h) = []RUCMWAMTRUCTOT_(ruc,h) RUCCSAMTTOT_(i) = [][]RUCCSAMT_(ruc,i,q) The above variables are defined as follows: ---------------------------------------------------------------------------------------…

### e6 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (1) · text copy line 675 · heading above: 11.4.6.2 Allocation of Unaccounted For Energy

BEFORE: …or distribution and transmission losses. i Interval ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 11.4.6.2 Allocation of Unaccounted For Energy (1) 
QUOTE: ERCOT will allocate UFE to specific categories based upon adjusted Load Ratio Share.
AFTER:  The adjusted Load Ratio Share will be determined using the following UFE category weighting factors: (a) 0.0 - Transmission voltage level IDR Non-Opt-In Entities (NOIEs); (b) 0.10 - Transmission voltage level IDR Premises; (c) 0.50 - Distribution voltage level IDR Premises; and (d) 1.00 - Distribut…

### e7 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, paragraph (1) · text copy line 81 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …alified Scheduling Entity (QSE), and the QSE shall remit those funds to ERCOT within two Business Days of the QSE receiving the funds from the LSE. The funds must be paid by the QSE to the account designated for payment of Securitization Uplift Charge Invoices. 27.3 Securitization Uplift Charge (1) 
QUOTE: ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day.
AFTER:  The resulting charge to each QSE for the Operating Day is calculated as follows: LASUCAMT _(q, d) = SUCDA _(d) * DQSELSELRS _(q, d) Where: DQSELSELRS _(q, d) = DQSELSERTAML _(q, d) / DERCOTQSELSERTAML _(d) DQSELSERTAML _(q, d) = max(0, $\sum_{i,l}^{\ }($LSERTAML _(l,) _(q, i))) DERCOTQSELSERTAML _(…

### e8 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.7, Method for Distributing CRR Auction Revenues, paragraph (2) · text copy line 1166 · heading above: 7.5.7 Method for Distributing CRR Auction Revenues

BEFORE: …---------------------------------------------------------------------------------- 7.5.7 Method for Distributing CRR Auction Revenues (1) ERCOT shall determine, for each month, the CRR Monthly Revenues (CMRs). The CMR is the sum of: (a) Monthly CRR revenue for that month; and (b) PCRR revenues. (2) 
QUOTE: ERCOT shall credit the net CRR Auction revenue (including PCRR revenue) produced from CRRs cleared in each CRR Auction that source from a Settlement Point located within a 2003 ERCOT CMZ and sink at a Settlement Point located within the same 2003 ERCOT CMZ to Qualified Scheduling Entities (QSEs) in the 2003 ERCOT CMZ on a zonal Load Ratio Share (LRS) basis. All other net CRR Auction revenues must be allocated to QSEs on an ERCOT-wide LRS basis.
AFTER:  For these allocation purposes, any Non-Opt-In Entity (NOIE) Load Zone is considered to be located entirely within the 2003 ERCOT CMZ that represented the largest Load for that NOIE or group of NOIEs in 2003. +------------------------------------------------------------------------------------------…

### e9 · `np-27` · tier 1 · ERCOT Nodal Protocols, Section 27: Securitization Uplift Charges (effective 2026-03-01)
locator: Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS) · text copy line 104 · heading above: 27.3 Securitization Uplift Charge

BEFORE: …SE - The charge allocated to QSE q, for the QSE's share of the total amount of Securitization Uplift Charges assessed for Operating Day d. SUCDA _(d) $ Securitization Uplift Charge Daily Amount - The total amount of Securitization Uplift Charges assessed for Operating Day d. DQSELSELRS _(q, d) none 
QUOTE: Daily QSE Non-Opted-Out LSE Load Ratio Share - The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d.
AFTER:  PRELIMLSERTAML _(l,) _(q, i) MWh Preliminary Non-Opted-Out LSE Real-Time Adjusted Metered Load - The Real-Time Adjusted Metered Load (RTAML), including the RTAML of Securitization Uplift Charge Opt-Out Entities that are Customers of Retail Electric Providers (REPs), but excluding the RTAML of Secur…

## Statements to check

- **Definition #1** (cites e1, e2): Load Ratio Share is the ratio of an Entity's Adjusted Metered Load (AML) to total ERCOT AML for an interval. [e1] AML is retail Load usage adjusted for UFE, Transmission Losses, Distribution Losses and DC Tie exports. [e2]
- **How it works #1** (cites e3, e1, e4, e5, e6, e8): Each QSE has its own LRS for each 15-minute Settlement Interval. [e3] An Entity's LRS is its AML over total ERCOT AML. [e1] ERCOT uses LRS as the allocation key for costs and credits that are spread across load. Examples in the Protocols: assigning the Ancillary Service quantity to QSEs, uplifting RUC make-whole shortfalls, allocating UFE to categories, and distributing CRR auction revenue. [e4][e5][e6][e8]
- **ERCOT context #1** (cites e8): Some allocations are ERCOT-wide and some are zonal. CRR auction revenue for paths wholly within one 2003 congestion management zone is credited on a zonal LRS basis, and all other CRR auction revenue goes on an ERCOT-wide LRS basis. [e8]
- **ERCOT context #2** (cites e7, e9): The Securitization Uplift Charge is allocated to QSEs representing obligated LSEs. [e7] It uses a daily QSE Non-Opted-Out LSE Load Ratio Share, the ratio of the QSE's non-opted-out LSE load to the ERCOT total of the same, per Operating Day. [e9]
- **Key facts #1** (cites e1): - LRS = an Entity's AML divided by total ERCOT AML for the interval. [e1]
- **Key facts #2** (cites e2): - AML already includes UFE, loss and DC Tie export adjustments. [e2]
- **Key facts #3** (cites e5): - RUC make-whole shortfalls are uplifted to all QSEs on an LRS basis. [e5]
- **Key facts #4** (cites e4): - Ancillary Service obligations are assigned to QSEs from LSE LRSs, including DC Tie export shares. [e4]
- **Key facts #5** (cites e8): - CRR auction revenue is credited by zonal LRS (same-zone paths) or ERCOT-wide LRS (all others). [e8]
- **Common confusion #1** (cites e1, e2, e8): LRS is a share of adjusted metered load, not of peak demand or capacity. [e1][e2] Zonal and ERCOT-wide LRS are both used, depending on the charge. [e8]
- **Questions #2** (cites e1, e3): A QSE's adjusted metered load over total ERCOT adjusted metered load, for a 15-minute interval. [e1][e3]
- **Questions #4** (cites e5, e8): RUC make-whole uplift to QSEs, and CRR auction revenue credits to QSEs. [e5][e8]
- **Link to ufe** (cites e6): related UFE (Unaccounted-For Energy): UFE is allocated using an adjusted Load Ratio Share. [e6]
- **Link to lse** (cites e4): related LSE (Load Serving Entity): AS obligations are assigned to QSEs from the LSE-level Load Ratio Shares. [e4]
- **Link to qse** (cites e3): related QSE (Qualified Scheduling Entity): Each QSE has its own Load Ratio Share per Settlement Interval. [e3]
- **Link to uplift** (cites e5): related Uplift: RUC make-whole shortfalls are uplifted to QSEs on a Load Ratio Share basis. [e5]
- **Link to securitization** (cites e9): related Post-Uri Securitization: Securitization Uplift Charges are allocated to QSEs using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e9]
- **Link to crr** (cites e8): related CRR (Congestion Revenue Right): Net CRR auction revenue is credited to QSEs on a Load Ratio Share basis. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) LRS is your share of ERCOT's metered load in an interval. Whenever ERCOT has a cost or credit to spread over load, such as uplift or auction revenue, your LRS decides your slice.

