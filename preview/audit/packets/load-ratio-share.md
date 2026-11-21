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

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.1, ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval, variable table · text copy line 4396 · heading above: 6.6.2.1 ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval

BEFORE: …cription --------------- ------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
QUOTE: RTAMLTOT MWh Real-Time Adjusted Metered Load Total-The total AML in ERCOT, for the 15-minute Settlement Interval. RTAML _(q, p) MWh Real-Time Adjusted Metered Load per Qualified Scheduling Entity (QSE) per Settlement Point-The sum of the AML at the Electrical Buses that are included in Settlement Point p, represented by Qualified Scheduling Entity (QSE) q, for the 15-minute Settlement Interval.
AFTER:  q none A QSE. The summation is over all of the QSEs with metered readings in that interval. p none A Settlement Point. The summation is over all of the Settlement Points. --------------------------------------------------------------------------------------------------------------------------------…

### e11 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.2, paragraph (1) · text copy line 4409 · heading above: 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------- 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval (1) Each QSE's Load Ratio Share (LRS) for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT The above variables are defined as follows:
AFTER:  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Description --------------- ------ -------------------…

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.4, QSE Load Ratio Share for an Operating Hour, paragraph (1) · text copy line 4524 · heading above: 6.6.2.4 QSE Load Ratio Share for an Operating Hour

BEFORE: …e Operating Hour. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.2.4 QSE Load Ratio Share for an Operating Hour 
QUOTE: (1) Each QSE's LRS for an Operating Hour is calculated as follows: HLRS _(q) = (max(0,[][]RTAML _(q, p, i))) / (HRTAMLTOT)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Vari…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.2, pending box [NPRR1030] · text copy line 4430 · heading above: 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval
FLAG pending-box: | [NPRR1030: Insert paragraphs (2)-(4) below upon system implementation:] |
BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1030: Insert paragraphs (2)-(4) below upon system implementation:] | | | | 
QUOTE: (2) Each QSE's MLRS, excluding DC Tie exports included in RTAML, for ERCOT's peak Load 15-minute Settlement Interval in the calendar month is calculated as follows:
AFTER:  | | | | MLRS _(q) = max(0,[](RTAML _(q, p) - RTAMLDC _(q, p))) / (RTAMLTOT - [][] RTAMLDC _(q, p)) | | | | The above variables are defined as follows: | | | | --------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.2, pending box [NPRR1030: Insert paragraphs (2)-(4)] · text copy line 4428 · heading above: 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval
FLAG pending-box: | [NPRR1030: Insert paragraphs (2)-(4) below upon system implementation:] |
BEFORE: …--------------------------------- +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Insert paragraphs (2)-(4) below upon system implementation:]
AFTER:  | | | | (2) Each QSE's MLRS, excluding DC Tie exports included in RTAML, for ERCOT's peak Load 15-minute Settlement Interval in the calendar month is calculated as follows: | | | | MLRS _(q) = max(0,[](RTAML _(q, p) - RTAMLDC _(q, p))) / (RTAMLTOT - [][] RTAMLDC _(q, p)) | | | | The above variables…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.6 (inserted by pending NPRR1030) · text copy line 4576 · heading above: 6.6.2.4 QSE Load Ratio Share for an Operating Hour
FLAG pending-box: | [NPRR1030 : Insert Section 6.6.2.6 below upon system implementation:] |
BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1030 : Insert Section 6.6.2.6 below upon system implementation:] | | | | 6.6.2.6 QSE DC Tie Export Load Ratio Share for a Month | | | | 
QUOTE: (1) Each QSE's DC Tie Export DCMLRS for a calendar month is calculated as follows:
AFTER:  | | | | DCMLRS _(q) = max(0, [][]RTAMLDC _(q, p, i) ) / MRTAMLTOT | | | | The above variables are defined as follows: | | | | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e16 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.3.5, CRR Balancing Account Closure, paragraph (1) · text copy line 2596 · heading above: 7.9.3.5 CRR Balancing Account Closure

BEFORE: …RR Owners, any CRR Balancing Account and CRR Auction PTP Option Award Charge Total in excess of the refunds described in Section 7.9.3.4 will first be used to fund the CRR Balancing Account Fund if the prior month's CRR Balancing Account Fund Balance is less than the CRR Balancing Account Fund Cap. 
QUOTE: Any surplus that remains from the CRR Balancing Account and CRR Auction PTP Option Award Charge Total above the CRR Balancing Account Fund cap is paid to the QSEs representing Load Serving Entities (LSEs) based on a monthly Load Ratio Share (LRS). The monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month.
AFTER:  The CRR Balancing Account Fund Cap is $10 million. +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.5, Real-Time Payment for a Block Load Transfer Point, paragraph (c) · text copy line 5526 · heading above: 6.6.3.5 Real-Time Payment for a Block Load Transfer Point

BEFORE: … payment to QSE q for the delivered energy to Load Zone p for the month. q none A QSE. p none A Load Zone Settlement Point. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
QUOTE: (c) ERCOT shall calculate each QSE's monthly BLT charge as follows: LAMBLTAMT _(q) = (-1) * MLRS _(q) * MBLTAMTTOT
AFTER:  MBLTAMTTOT = [] MBLTAMTQSETOT _(q) The above variables are defined as follows: ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.5, variable table · text copy line 5537 · heading above: 6.6.3.5 Real-Time Payment for a Block Load Transfer Point

BEFORE: …------------------------- Variable Unit Description -------------------- ------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ MLRS _(q) none 
QUOTE: Monthly Load Ratio Share per QSE-The LRS calculated for QSE q for the peak-Load 15-minute Settlement Interval in the month.
AFTER:  See Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval. MBLTAMTQSETOT _(q) $ Monthly Block Load Transfer Amount QSE Total per QSEThe total of the payments to QSE q for energy delivered into the ERCOT System for the month. LAMBLTAMT _(q) $ Load-Allocated Monthly BLT Amount pe…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.7, Real-Time High Dispatch Limit Override Energy Charge, paragraph (1) · text copy line 5691 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge 
QUOTE: (1) ERCOT shall allocate to QSEs on an LRS basis the total amount of the payment specified in Section 6.6.3.6, Real-Time High Dispatch Limit Override Energy Payment. The charge to each QSE for a given 15-minute Settlement Interval is calculated as follows
AFTER: : LAHDLOEAMT _(q, i) = (-1) * HDLOEAMTTOT * LRS _(q, i) Where: HDLOEAMTTOT_(i) = [] HDLOEAMTQSETOT _(q, i) The above variables are defined as follows: -----------------------------------------------------------------------------------------------------------------------------------------------------…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.10, Real-Time Constraint Management Plan Cost Recovery Charge, paragraph (1) · text copy line 6058 · heading above: 6.6.3.10 Real-Time Constraint Management Plan Cost Recovery Charge

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.10 Real-Time Constraint Management Plan Cost Recovery Charge 
QUOTE: (1) ERCOT shall allocate to QSEs on an LRS basis the total amount of the payment specified in Section 6.6.3.9, Real-Time Constraint Management Plan Cost Recovery Payment. The charge to each QSE for a given 15-minute Settlement Interval is calculated as follows
AFTER: : LACMPCRAMT _(q, i) = (-1) * CMPCRAMTTOT _(i) * LRS _(q, i) Where: CMPCRAMTTOT _(i) = [] CMPCRAMTQSETOT _(q, i) The above variables are defined as follows: -----------------------------------------------------------------------------------------------------------------------------------------------…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.7, Set Point Deviation Payment, paragraph (1) · text copy line 6954 · heading above: 6.6.5.7 Set Point Deviation Payment

BEFORE: …nt Deviation Charges do not apply to the QSE for the ESR for the 15-minute Settlement Interval if the following occur: (a) The ESR is telemetering a status of ONTEST anytime during the Settlement Interval; or (b) The AASP is less than its average telemetered LSL. 6.6.5.7 Set Point Deviation Payment 
QUOTE: (1) ERCOT shall pay the Set Point Deviation Charges collected from the QSEs representing Resources to the QSEs representing Load based on LRS.
AFTER:  The payment to each QSE for a given 15-minute Settlement Interval is calculated as follows: LASPDAMT _(q) = (-1) * SPDAMTTOT * LRS _(q) Where: SPDAMTTOT = []SPDAMTQSETOT _(q) SPDAMTQSETOT _(q) = [][]SPDAMT _(q, r, p) The above variables are defined as follows: --------------------------------------…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.6.5, RMR Service Charge, paragraph (1) · text copy line 7273 · heading above: 6.6.6.5 RMR Service Charge

BEFORE: …. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.6.5 RMR Service Charge 
QUOTE: (1) The total RMR cost for all RMR Units is allocated to the QSEs representing Loads based on LRS.
AFTER:  The RMR Service charge to each QSE for a given hour is calculated as follows: LARMRAMT _(q) = (-1) * (RMRSBAMTTOT + RMREAMTTOT + RMRAAMTTOT + RMRNPAMTTOT / H) * HLRS _(q) Where: RMR Standby Amount Total RMRSBAMTTOT = []RMRSBAMTQSETOT _(q) RMR Energy Amount Total RMREAMTTOT = []RMREAMTQSETOT _(q) RM…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.6.6, paragraph (2) · text copy line 7378 · heading above: 6.6.6.5 RMR Service Charge

BEFORE: …reement. r none An RMR Unit. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
QUOTE: (2) ERCOT shall issue a miscellaneous Invoice allocating expenses incurred related to the processing of an RMR Agreement or validation and/or processing of RMR budgets on an LRS basis.
AFTER:  ERCOT shall issue the miscellaneous Invoice no later than 30 days after the RTM True-Up Statement is issued for the last day of the calendar month in which ERCOT incurred the expense. A separate Invoice will be sent for each RMR Agreement. (a) The one-time charge is calculated as follows: LARMROEIA…

### e24 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.5, RUC Clawback Payment, paragraph (1) · text copy line 2173 · heading above: 5.7.5 RUC Clawback Payment

BEFORE: … i. ruc none A RUC Process. q none A QSE. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.5 RUC Clawback Payment 
QUOTE: (1) ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment.
AFTER:  The RUC Clawback Payment is calculated as follows for each QSE for each 15-minute Settlement Interval: LARUCCBAMT_(q,i) = (-1) * (RUCCBAMTTOT_(h) / 4 * LRS_(q,i)) Where: RUCCBAMTTOT_(h) = [][]RUCCBAMT_(q,r,h) The above variables are defined as follows: ----------------------------------------------…

### e25 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.6, RUC Decommitment Charge, paragraph (1) · text copy line 2205 · heading above: 5.7.6 RUC Decommitment Charge

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.6 RUC Decommitment Charge 
QUOTE: (1) ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units.
AFTER:  The RUC Decommitment Charge for a 15-minute Settlement Interval is calculated as follows: LARUCDCAMT_(q,i) = (-1) * [(RUCDCAMTTOT_(h) / 4) * LRS_(q,i)] Where: RUCDCAMTTOT_(h) = [][]RUCDCAMT_(q,r,h) The above variables are defined as follows: ---------------------------------------------------------…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.3, NOIE Load Zones, paragraph (b) · text copy line 2329 · heading above: 3.4.3 NOIE Load Zones

BEFORE: …ns and conditions set forth below apply to Load Zones established by NOIEs: (a) There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, and Lower Colorado River Authority (LCRA); 
QUOTE: (b) Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using "Cost-Allocation Load Zones," which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications. For these allocation purposes, any NOIE Load Zone is considered to be located entirely within the 2003 ERCOT Congestion Management Zone (CMZ) that represented the largest Load for that NOIE or group of NOIEs in 2003;
AFTER:  (c) A separate NOIE Load Zone is made up of a group of NOIEs that are parties to the same pre-1999 power supply arrangements and that had an overall 2003 peak Load in excess of 2,300 MW. A NOIE that is a member of this separate NOIE Load Zone and that has given notice of termination of its pre-1999…

### e27 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.14.3.2, Emergency Response Service Self-Provision, paragraph (1)(b) · text copy line 7099 · heading above: 3.14.3.2 Emergency Response Service Self-Provision

BEFORE: …ovide ERS. A QSE electing to self-provide all or part of its ERS obligation shall provide ERCOT with the following, while adhering to a schedule published by ERCOT: (a) The maximum MW of capacity the QSE is willing to self-provide for each ERS Time Period for each of the four ERS service types; and 
QUOTE: (b) A proxy Load Ratio Share (LRS) specific to each ERS Time Period for which an offer is submitted. Proxy LRS shall be a number between zero and one and determined by the self-providing QSE to represent its estimate of its final LRS to be used in ERS Settlement.
AFTER:  (2) ERS Self-Provision Capacity Upper Limit is defined as the maximum level of self-provided ERS MW capacity for which a QSE may receive credit at Settlement for each ERS service type. During the procurement process, a QSE may elect to use a proxy ERS Self-Provision Capacity Upper Limit (based on t…

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.1.1, capital contribution clawback, item (C) · text copy line 1010 · heading above: 6.5.1.1 ERCOT Control Area Authority

BEFORE: …er than the True-Up Settlement. (B) For months in the contract term where notice is received five Business Days or less prior to True-Up Settlement of the first Operating Day of that month, ERCOT shall claw back any payments made for the capital expenditures within 45 days of receipt of the notice. 
QUOTE: (C) ERCOT shall distribute the repayment to QSEs representing Load on the same basis used to collect the monthly capital expenditures, using a monthly Load Ratio Share (LRS). A QSE's monthly LRS shall be the QSE's total Real-Time Adjusted Metered Load (AML) for the month divided by the total ERCOT Real-Time AML for the same month.
AFTER:  (h) ERCOT shall endeavor to minimize the deployment of capacity procured pursuant to this Section with the goal of reducing the potential distortion of markets. Resources and Loads deployed to alleviate imminent Emergency Conditions will not be offered into the Day-Ahead Market (DAM). Rather, ERCOT…

### e29 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.12, CRR Balancing Account Invoices, paragraph (3) · text copy line 968 · heading above: 9.12 CRR Balancing Account Invoices

BEFORE: …nvoice for a given month. (3) ERCOT shall prepare resettlement Invoices in the event that the balance in the CRRBA for the month changes due to a Day-Ahead Market (DAM) resettlement after the initial balancing account Invoices for that month have been posted as specified in the Settlement Calendar. 
QUOTE: The Monthly Load Ratio Share (MLRS) as described in Section 7.9.3.5, CRR Balancing Account Closure, used for the resettlement CRRBA Invoice will be the same one used for the most recently posted balancing account Invoices.
AFTER:  A resettlement CRRBA Invoice will reflect differences to financial records generated on the previous CRRBA Invoice for a given month. (4) For each Invoice cycle, the Market Participant to whom the CRRBA Invoice is addressed ("Invoice Recipient") is a payee. The Invoice Recipient is responsible for …

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 88 (OCR), Chapter V.E.2, CRR Auction Revenues · text copy line 5644

BEFORE: …% !AgIA" !AgeA" ZF8.(>:F+?@ABB A.:CC?a:F+?@ABB ZF8.(>:F+?ABB A.:CC?a:F+?ABB !A#" !A"" !#" !" D(F *+I J(. /M. J(N DOF DOP /O4 R+M S78 9:; <+7 %"%# ERCOT distributes the revenues it receives from selling CRRs to Load Serving Entities (LSEs) through the CRR Auction Revenue Distribution (CARD) process. 
QUOTE: CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month's coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval.
AFTER:  As revenues from CRR purchases and corresponding CARD payment distributions have increased, this methodology has drawn greater scrutiny because it can create adverse economic incentives for loads to increase consumption during periods of high demand, when high energy prices should incentivize loads…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 88 (OCR), Chapter V.E.2 · text copy line 5649

BEFORE: …ross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month's coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval. 
QUOTE: As revenues from CRR purchases and corresponding CARD payment distributions have increased, this methodology has drawn greater scrutiny because it can create adverse economic incentives for loads to increase consumption during periods of high demand, when high energy prices should incentivize loads to decrease consumption. To date, only DC tie operators have clearly exhibited such behavior.
AFTER:  To remove these adverse incentives, ERCOT approved NPRR 1030 in August 2020, which allocates CARD payments for DC ties based on their monthly load 66 | 2025 State of the Market Report / / Transmission Congestion and CRRs ratio shares.42 This methodology sharply reduces the incentive for DC ties to …

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 89 (OCR), footnote 42 · text copy line 5725

BEFORE: …other factors that reduce transmission capability between the CRR auction and the DAM. CRR Shortfall Settlement When oversold flows cause a shortfall on a specific transmission facility, ERCOT reduces payments to CRRs that sink at generator locations affecting that facility. These reductions are 42 
QUOTE: Despite being approved in 2020, the project to implement NPRR 1030 has not been initiated yet.
AFTER:  https://www.ercot.com/files/docs/2022/01/27/Revision_Requests_2026_04_14.xlsx 2025 State of the Market Report | 67 / / Transmission Congestion and CRRs based on the decrease in day-ahead transfer capability. If revenue remains insufficient after this adjustment, ERCOT allocates the remaining shortf…

### e33 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.1, ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval, paragraph (1) · text copy line 4389 · heading above: 6.6.2.1 ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval

BEFORE: …-------------------------------------------------------------------------------------------- 6.6.2 Load Ratio Share 6.6.2.1 ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval (1) ERCOT total Adjusted Metered Load (AML) for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTAMLTOT = [](max(0,[]RTAML _(q, p)))
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.4, variable table (i) · text copy line 4519 · heading above: 6.6.2.3 ERCOT Total Adjusted Metered Load for an Operating Hour

BEFORE: …he Electrical Buses that are included in Settlement Point p, represented by QSE q, for the 15-minute Settlement Interval. q none A QSE. The summation is over all of the QSEs with metered readings in that interval. p none A Settlement Point. The summation is over all of the Settlement Points. i none 
QUOTE: A 15-minute Settlement Interval in the Operating Hour. The summation is over all of the Settlement Intervals of the Operating Hour.
AFTER:  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.2.4 QSE Load Ratio Share for an Operating Hour (1) Each QSE's LR…

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.5, pending box [NPRR1030] · text copy line 4545 · heading above: 6.6.2.4 QSE Load Ratio Share for an Operating Hour
FLAG pending-box: | [NPRR1030: Insert Section 6.6.2.5 below upon system implementation:] |
BEFORE: …-------------------------------------------------------- +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Insert Section 6.6.2.5 below upon system implementation:]
AFTER:  | | | | 6.6.2.5 ERCOT Total Adjusted Metered Load for a Month | | | | (1) ERCOT total AML for a calendar month is calculated as follows: | | | | MRTAMLTOT = [](max(0, [][]RTAML _(q, p,i))) | | | | The above variables are defined as follows: | | | | --------------------------------------------------…

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.7, pending box [NPRR1030] · text copy line 4603 · heading above: 6.6.2.4 QSE Load Ratio Share for an Operating Hour
FLAG pending-box: | [NPRR1030: Insert Section 6.6.2.7 below upon system implementation:] |
BEFORE: …-------------------------------------------------------+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Insert Section 6.6.2.7 below upon system implementation:]
AFTER:  | | | | 6.6.2.7 ERCOT Adjusted Metered Load by Congestion Management Zone for a Month | | | | (1) ERCOT total AML per CMZ for a calendar month is calculated as follows: | | | | MRTAMLLZTOT _(z) = [] (max(0, [][]RTAML _(q, p,i))) | | | | The above variables are defined as follows: | | | | ----------…

### e37 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.8, pending box [NPRR1030] · text copy line 4632 · heading above: 6.6.2.4 QSE Load Ratio Share for an Operating Hour
FLAG pending-box: | [NPRR1030: Insert Section 6.6.2.8 below upon system implementation:] |
BEFORE: …---------------------------------------------------------------------------------------------------------+ +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Insert Section 6.6.2.8 below upon system implementation:]
AFTER:  | | | | 6.6.2.8 QSE DC Tie Export Load Ratio Share by Congestion Management Zone for a Month | | | | (1) Each QSE's DC Tie Export DCMLRSZ by CMZ for a calendar month is calculated as follows: | | | | DCMLRSZ _(q, z) = max(0, [][]RTAMLDC _(q, p, i) ) / MRTAMLLZTOT_(z) | | | | The above variables are…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 88 (OCR), Chapter V.E.2 · text copy line 5653

BEFORE: …is methodology has drawn greater scrutiny because it can create adverse economic incentives for loads to increase consumption during periods of high demand, when high energy prices should incentivize loads to decrease consumption. To date, only DC tie operators have clearly exhibited such behavior. 
QUOTE: To remove these adverse incentives, ERCOT approved NPRR 1030 in August 2020
AFTER: , which allocates CARD payments for DC ties based on their monthly load 66 | 2025 State of the Market Report / / Transmission Congestion and CRRs ratio shares.42 This methodology sharply reduces the incentive for DC ties to increase consumption to increase their CARD revenue. 3. CRR Profitability Fi…

### e39 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.7, pending box [NPRR1030] replacing paragraph (2) · text copy line 1169 · heading above: 7.5.7 Method for Distributing CRR Auction Revenues
FLAG pending-box: | [NPRR1030: Replace paragraph (2) above with the following upon system implementation:] |
BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Replace paragraph (2) above with the following upon system implementation:]
AFTER:  | | | | (2) ERCOT shall credit the net CRR Auction revenue (including PCRR revenue) produced from CRRs cleared in each CRR Auction that source from a Settlement Point located within a 2003 ERCOT CMZ and sink at a Settlement Point located within the same 2003 ERCOT CMZ to Qualified Scheduling Entiti…

### e40 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.3.5, pending box [NPRR1030] replacing paragraph (1) · text copy line 2599 · heading above: 7.9.3.5 CRR Balancing Account Closure
FLAG pending-box: | [NPRR1030: Replace paragraph (1) above with the following upon system implementation:] |
BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Replace paragraph (1) above with the following upon system implementation:]
AFTER:  | | | | (1) After the calculation of refunds described in Section 7.9.3.4, Monthly Refunds to Short-Paid CRR Owners, any CRR Balancing Account and CRR Auction PTP Option Award Charge Total in excess of the refunds described in Section 7.9.3.4 will first be used to fund the CRR Balancing Account Fun…

### e41 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.5, pending box [NPRR1030] replacing paragraph (c) · text copy line 5549 · heading above: 6.6.3.5 Real-Time Payment for a Block Load Transfer Point
FLAG pending-box: | [NPRR1030: Replace paragraph (c) above with the following upon system implementation:] |
BEFORE: …------------------------------------------------------------------------------------------------------------------- +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1030: Replace paragraph (c) above with the following upon system implementation:]
AFTER:  | | | | (c) ERCOT shall calculate each QSE's monthly BLT charge as follows: | | | | LAMBLTAMT _(q) = (-1) * (MBLTDC _(q) + MBLTNDC _(q)) | | | | Where: | | | | MBLTNDC _(q) = MLRS _(q) * (MBLTAMTTOT - []MBLTDC _(q)) | | | | MBLTDC _(q) = DCMLRS _(q) * MBLTAMTTOT | | | | MBLTAMTTOT = [] MBLTAMTQSETO…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e1, e4, e5, e6, e8): Each QSE has its own LRS for each 15-minute Settlement Interval. [e3] An Entity's LRS is its AML over total ERCOT AML. [e1] ERCOT uses LRS as the allocation key for costs and credits that are spread across load. [e4][e5][e6][e8]
- **How it works #2** (cites e3, e12, e10, e11, e33, e34) FLAG number-not-in-quote: 6.6, 2.2, 2.4: **Variants in force.** The Protocols define the 15-minute LRS in Section 6.6.2.2 and an hourly LRS in Section 6.6.2.4. [e3][e12] The 15-minute LRS for a QSE is its AML summed over Settlement Points, floored at zero, divided by ERCOT total AML for the interval. [e10][e11] The ERCOT total is the sum over QSEs of each QSE's AML summed over Settlement Points, floored at zero. [e33] The hourly LRS (HLRS) has the same form, with the numerator summed over Settlement Points and over the 15-minute Settlement Intervals of the Operating Hour (floored at zero) and divided by the ERCOT total AML for the Operating Hour. [e12][e34]
- **How it works #3** (cites e16, e17, e18, e28): **Monthly LRS is a peak-interval share.** In the CRR Balancing Account, the monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month. [e16] The Block Load Transfer charge likewise uses a Monthly Load Ratio Share defined as the LRS for the peak-Load 15-minute Settlement Interval in the month. [e17][e18] This differs from the monthly LRS in one capital-contribution clawback provision, which defines it as the QSE's total Real-Time AML for the month divided by the total ERCOT Real-Time AML for the same month. [e28]
- **How it works #4** (cites e14, e13, e15, e35, e36, e37, e39, e40, e41, e32) FLAG number-not-in-quote: 2.2, 7.5, 7.9, 3.5: **Pending (NPRR1030).** Paragraphs (2)-(4) of Section 6.6.2.2, and Sections 6.6.2.5 to 6.6.2.8, are inserts that apply only upon system implementation of NPRR1030, including a monthly LRS excluding DC Tie exports and a DC Tie export monthly LRS. [e14][e13][e15][e35][e36][e37] The same NPRR1030 would also replace Section 7.5.7 paragraph (2), Section 7.9.3.5 paragraph (1) and Section 6.6.3.5 paragraph (c) upon system implementation, so the monthly peak-interval wording quoted above for those provisions is the text now in the Protocols, not the pending text. [e39][e40][e41] The IMM says the project to implement NPRR 1030, approved in 2020, has not been initiated. [e32] These pending inserts are not in force.
- **How it works #5** (cites e26): **Zonal LRS.** Costs allocated on a zonal LRS must use the "Cost-Allocation Load Zones", the four Load Zones in effect during the 2003 ERCOT market unless changed under Section 3.4.2, and any NOIE Load Zone counts as located entirely within the 2003 CMZ of its largest Load in 2003. [e26]
- **How it works #6** (cites e4, e5): **What is allocated by LRS.** The Protocol sections below allocate on LRS. [e4][e5]
- **How it works #7** (cites e4): - Ancillary Service quantities: assigned to QSEs from LSE LRSs, including DC Tie export shares, aggregated by hour. [e4]
- **How it works #8** (cites e5, e24, e25): - RUC make-whole shortfalls (uplift), RUC clawback payments and RUC decommitment charges. [e5][e24][e25]
- **How it works #9** (cites e6): - UFE categories, by adjusted LRS. [e6]
- **How it works #10** (cites e7, e9): - Securitization Uplift Charge, by a daily non-opted-out LSE LRS. [e7][e9]
- **How it works #11** (cites e8, e16, e29): - CRR auction revenue (zonal or ERCOT-wide) and CRR Balancing Account surplus; a CRRBA resettlement invoice reuses the MLRS of the most recently posted balancing account invoices. [e8][e16][e29]
- **How it works #12** (cites e17): - Block Load Transfer charges (monthly LRS). [e17]
- **How it works #13** (cites e19): - High Dispatch Limit override energy payment charge. [e19]
- **How it works #14** (cites e20): - Real-Time Constraint Management Plan cost recovery charge. [e20]
- **How it works #15** (cites e21): - Set Point Deviation charges, paid to QSEs representing Load. [e21]
- **How it works #16** (cites e22, e23): - RMR service charge and RMR miscellaneous expense invoices. [e22][e23]
- **How it works #17** (cites e27): - ERS: QSEs self-providing ERS submit a proxy LRS estimating their final settlement LRS. [e27]
- **ERCOT context #1** (cites e8, e30): Some allocations are ERCOT-wide and some are zonal. CRR auction revenue for paths wholly within one 2003 congestion management zone is credited on a zonal LRS basis, and all other CRR auction revenue goes on an ERCOT-wide LRS basis. [e8] The IMM calls this the CARD process, allocating cross-zone CRR revenue ERCOT-wide and same-zone revenue zonally, in each case by load ratio share during the month's coincident peak interval. [e30]
- **ERCOT context #2** (cites e31, e38, e15): The IMM says the method has drawn scrutiny as CARD payments have grown, because it can create incentives for loads to increase consumption during high demand when prices should encourage them to cut it, and that to date only DC tie operators have clearly exhibited such behavior. [e31] The IMM says ERCOT approved NPRR 1030 in August 2020 to remove these adverse incentives; NPRR1030's pending text adds a DC Tie export monthly LRS. [e38][e15]
- **Key facts #6** (cites e16, e18): - In CRR and BLT settlement, "monthly LRS" means the LRS in the peak-Load 15-minute interval of the month. [e16][e18]
- **Key facts #7** (cites e14, e32): - DC Tie-specific LRS variants (NPRR1030) are pending, not implemented. [e14][e32]
- **Say it like this #1** (cites e16): (Guidance) LRS is your share of ERCOT's metered load in an interval. Whenever ERCOT has a cost or credit to spread over load, such as uplift or auction revenue, your LRS decides your slice. For the monthly allocations, it is your share at the monthly peak interval. [e16]
- **Common confusion #1** (cites e1, e2, e8, e16, e28): LRS is a share of adjusted metered load in an interval, not of capacity. [e1][e2] Zonal and ERCOT-wide LRS are both used, depending on the charge. [e8] "Monthly" LRS can mean the peak-interval LRS or a whole-month share depending on the provision, so read the section. [e16][e28]
- **Questions #6** (cites e16, e31, e38): When a monthly allocation is keyed to the load at the month's peak interval, a participant that raises consumption then gets a bigger share. The IMM says this can create adverse incentives, that only DC tie operators have clearly exhibited such behavior, and that ERCOT approved NPRR 1030 to remove these incentives. [e16][e31][e38]
- **Questions #8** (cites e11): In the formula the sum is floored at zero (max(0,...)), so a QSE's share cannot be negative. [e11]
- **Questions #10** (cites e26): Zonal LRS costs must use the "Cost-Allocation Load Zones", the four Load Zones in effect during the 2003 ERCOT market unless changed under Section 3.4.2, Load Zone Modifications. [e26]
- **Questions #12** (cites e27): QSEs self-providing ERS offer a proxy LRS between zero and one as their estimate of the final LRS used in ERS Settlement. [e27]
- **Link to ufe** (cites e6): related UFE (Unaccounted-For Energy): UFE is allocated using an adjusted Load Ratio Share. [e6]
- **Link to lse** (cites e4): related LSE (Load Serving Entity): AS obligations are assigned to QSEs from the LSE-level Load Ratio Shares. [e4]
- **Link to qse** (cites e3): related QSE (Qualified Scheduling Entity): Each QSE has its own Load Ratio Share per Settlement Interval. [e3]
- **Link to uplift** (cites e5): related Uplift: RUC make-whole shortfalls are uplifted to QSEs on a Load Ratio Share basis. [e5]
- **Link to securitization** (cites e9): related Post-Uri Securitization: Securitization Uplift Charges are allocated to QSEs using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e9]
- **Link to crr** (cites e8): related CRR (Congestion Revenue Right): Net CRR auction revenue is credited to QSEs on a Load Ratio Share basis. [e8]
- **Link to ruc-make-whole** (cites e24, e25): related RUC Make-Whole & Clawback: RUC make-whole uplift, clawback payments and decommitment charges are all allocated on LRS. [e24][e25]
- **Link to rmr** (cites e22): related RMR (Reliability Must-Run) & Must-Run Alternatives: The total RMR service cost is allocated to QSEs representing Loads on LRS. [e22]
- **Link to ers** (cites e27): related ERS (Emergency Response Service): A QSE self-providing ERS submits a proxy LRS representing its estimate of its final LRS used in ERS Settlement. [e27]
- **Link to four-cp** (cites e16, e18, e30): contrasts-with 4CP Transmission Charges: Monthly LRS for CRR and BLT allocations uses the peak-Load 15-minute interval of the month, a coincident-peak style share (the IMM also describes it as based on each month's coincident peak interval); see the 4CP topic for transmission cost allocation. [e16][e18][e30]
- **Link to load-zone** (cites e26): related Load Zone: Zonal LRS allocations use the Cost-Allocation Load Zones, the four Load Zones in effect during the 2003 ERCOT market unless changed under Section 3.4.2. [e26]

