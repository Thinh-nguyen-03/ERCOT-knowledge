# Audit packet: Load Ratio Share (LRS) (load-ratio-share)

kind metric · domain congestion · level 1

## Evidence (quote, where it sits in the source, and the text around it)

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

### e16 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.3.5, CRR Balancing Account Closure, paragraph (1) · text copy line 2596 · heading above: 7.9.3.5 CRR Balancing Account Closure

BEFORE: …RR Owners, any CRR Balancing Account and CRR Auction PTP Option Award Charge Total in excess of the refunds described in Section 7.9.3.4 will first be used to fund the CRR Balancing Account Fund if the prior month's CRR Balancing Account Fund Balance is less than the CRR Balancing Account Fund Cap. 
QUOTE: Any surplus that remains from the CRR Balancing Account and CRR Auction PTP Option Award Charge Total above the CRR Balancing Account Fund cap is paid to the QSEs representing Load Serving Entities (LSEs) based on a monthly Load Ratio Share (LRS). The monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month.
AFTER:  The CRR Balancing Account Fund Cap is $10 million. +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.5, variable table · text copy line 5537 · heading above: 6.6.3.5 Real-Time Payment for a Block Load Transfer Point

BEFORE: …------------------------- Variable Unit Description -------------------- ------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ MLRS _(q) none 
QUOTE: Monthly Load Ratio Share per QSE-The LRS calculated for QSE q for the peak-Load 15-minute Settlement Interval in the month.
AFTER:  See Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval. MBLTAMTQSETOT _(q) $ Monthly Block Load Transfer Amount QSE Total per QSEThe total of the payments to QSE q for energy delivered into the ERCOT System for the month. LAMBLTAMT _(q) $ Load-Allocated Monthly BLT Amount pe…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.6.5, RMR Service Charge, paragraph (1) · text copy line 7273 · heading above: 6.6.6.5 RMR Service Charge

BEFORE: …. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.6.5 RMR Service Charge 
QUOTE: (1) The total RMR cost for all RMR Units is allocated to the QSEs representing Loads based on LRS.
AFTER:  The RMR Service charge to each QSE for a given hour is calculated as follows: LARMRAMT _(q) = (-1) * (RMRSBAMTTOT + RMREAMTTOT + RMRAAMTTOT + RMRNPAMTTOT / H) * HLRS _(q) Where: RMR Standby Amount Total RMRSBAMTTOT = []RMRSBAMTQSETOT _(q) RMR Energy Amount Total RMREAMTTOT = []RMREAMTQSETOT _(q) RM…

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

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 88 (OCR), Chapter V.E.2, CRR Auction Revenues · text copy line 5644

BEFORE: …% !AgIA" !AgeA" ZF8.(>:F+?@ABB A.:CC?a:F+?@ABB ZF8.(>:F+?ABB A.:CC?a:F+?ABB !A#" !A"" !#" !" D(F *+I J(. /M. J(N DOF DOP /O4 R+M S78 9:; <+7 %"%# ERCOT distributes the revenues it receives from selling CRRs to Load Serving Entities (LSEs) through the CRR Auction Revenue Distribution (CARD) process. 
QUOTE: CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month's coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval.
AFTER:  As revenues from CRR purchases and corresponding CARD payment distributions have increased, this methodology has drawn greater scrutiny because it can create adverse economic incentives for loads to increase consumption during periods of high demand, when high energy prices should incentivize loads…

## Statements to check (new or changed since the last audit)

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

