# Audit packet: RUC Make-Whole & Clawback (ruc-make-whole)

kind concept · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Make-Whole Payment · text copy line 1507

BEFORE: … terminals, the MPT may also be referred to as a Generator Step-Up (GSU). Maintenance Outage (see Outage) Make-Whole Charge A charge made by ERCOT to a QSE for a Resource to recapture all or part of the revenues received by a QSE that exceed the Make-Whole Payment for a Resource. Make-Whole Payment 
QUOTE: A payment made by ERCOT to a Qualified Scheduling Entity (QSE) for a Resource to reimburse a QSE for allowable startup and minimum energy costs of a Resource not recovered in energy or Ancillary Service revenue when a Resource is committed by Reliability Unit Commitment (RUC) and the QSE has not elected to opt out of RUC Settlement, or when a Resource is committed by the Day-Ahead Market (DAM).
AFTER:  Mandatory Installation Threshold A peak demand greater than 700 kW (or 700 kVA). Manual System Adjustment Operator actions, with consequences allowed by Planning Guide Section 4, Transmission Planning Criteria, in response to an outage in the ERCOT System, including, but not limited to, circuit swi…

### e2 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2, paragraph (1) · text copy line 1402 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.2 RUC Clawback Charge (1) 
QUOTE: A QSE for a Resource shall pay a RUC Clawback Charge for the Operating Day if the RUC Guarantee is less than the sum of: (a) RUC Minimum-Energy Revenue calculated in Section 5.7.1.2, RUC Minimum-Energy Revenue; (b) Revenue Less Cost Above LSL During RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue Less Cost During QSE-Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals.
AFTER:  (2) The RUC Clawback Charge for a Resource, including RMR Units, for each Operating Day is allocated evenly over the RUC-Committed Hours for that Resource. (3) ESRs are not subject to RUC Clawback Charges. +----------------------------------------------------------------------------------------+ | …

### e3 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1) · text copy line 1579 · heading above: 5.7.4.1 RUC Capacity-Short Charge

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.4.1 RUC Capacity-Short Charge (1) 
QUOTE: The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE's shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap.
AFTER:  The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE's capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for t…

### e4 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4, paragraph (1) · text copy line 1566 · heading above: 5.7.4 RUC Make-Whole Charges

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.4 RUC Make-Whole Charges (1) 
QUOTE: All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge.
AFTER:  (2) On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortf…

### e6 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.5, paragraph (1) · text copy line 2173 · heading above: 5.7.5 RUC Clawback Payment

BEFORE: …ruc none A RUC Process. q none A QSE. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.5 RUC Clawback Payment (1) 
QUOTE: ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment.
AFTER:  The RUC Clawback Payment is calculated as follows for each QSE for each 15-minute Settlement Interval: LARUCCBAMT_(q,i) = (-1) * (RUCCBAMTTOT_(h) / 4 * LRS_(q,i)) Where: RUCCBAMTTOT_(h) = [][]RUCCBAMT_(q,r,h) The above variables are defined as follows: ----------------------------------------------…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Market Operations · text copy line 916

BEFORE: …imes necessary for reliability, persistent reliance on them indicates a misalignment between market design and system operations. Despite high operating reserve levels in 2025, out-of-market reliability actions increased substantially from 2024, particularly the Reliability Unit Commitment process. 
QUOTE: ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments.
AFTER:  The increase in RUC commitments corresponds to higher make-whole payments, which exceeded $21 million in 2025. The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement. In 2025, only 3% of vi | 2025 State of the Market Rep…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, RUC Settlement · text copy line 6341

BEFORE: …r 2024. The RDPA exceeded $0 in 76% of active intervals, consistent with the trend over the last five years. • In 77% of cases, RUC instructions were issued to manage congestion rather than capacity. This reversed the pattern in recent years, when RUC instructions were mainly issued for capacity. • 
QUOTE: Make-whole payments during RUC settlement exceeded $21 million in 2025, while total claw-backs were only $4.5 million.
AFTER:  This disparity reflects relatively low market prices in 2025 that did not cover the start-up and minimum generation costs of RUCcommitted units. • ERCOT has meaningfully improved its forecast accuracy since 2022, reducing the average net load forecast error to 452 MW. This error is down from more t…

### e11 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, RUC Make-Whole Payment, paragraph (1), last sentence · text copy line 822 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …en the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). 
QUOTE: ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR).
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.1, paragraph (6) · text copy line 945 · heading above: 5.7.1.1 RUC Guarantee

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (6) 
QUOTE: If a validated Three-Part Supply Offer has been submitted for a Resource for the RUC, then the RUC Guarantee for that Resource is based on the minimum of the Startup Offer in that validated Three-Part Supply Offer and Startup Cap and the lesser of the Minimum-Energy Offer in that validated Three-Part Supply Offer and the Minimum-Energy Offer Cap.
AFTER:  If a validated Three-Part Supply Offer has not been submitted for a Resource for the RUC and ERCOT has not yet approved verifiable unit-specific costs for the Resource, then the RUC Guarantee for a Resource is based on the Resource Category Startup Generic Cap and the Resource Category Minimum-Ener…

### e22 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2, RUC Clawback Charge, paragraphs (2)-(3) · text copy line 1410 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …ergy Revenue; (b) Revenue Less Cost Above LSL During RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue Less Cost During QSE-Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals. (2) 
QUOTE: The RUC Clawback Charge for a Resource, including RMR Units, for each Operating Day is allocated evenly over the RUC-Committed Hours for that Resource. (3) ESRs are not subject to RUC Clawback Charges.
AFTER:  +----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (3) above with the following upon system implementation:] | | | | (3) ESRs and DRRS deployments are not subject to RUC Clawback Charges. | +=====================================…

### e28 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.2, paragraph (5) · text copy line 704 · heading above: 5.6.2 RUC Startup Cost Eligibility

BEFORE: …ck of RUC-Committed Hours; and (d) The startup time used to process the dispute will be the startup time considered by the ERCOT Operator at the time the RUC instruction was issued. (4) For purposes of this Section 5.6.2, the telemetered Resource Status of OFFQS shall be considered as Off-Line. (5) 
QUOTE: A Resource that has a Three-Part Supply Offer cleared in the DAM and subsequently receives a RUC commitment for the Operating Hour for which it was awarded will be settled in accordance with Section 4.6.2.3, Day-Ahead Make-Whole Settlements.
AFTER:  (6) To determine the startup warmth state (i.e., hot, intermediate, or cold) for a startup-eligible block of contiguous RUC-Committed Hours, ERCOT calculates the time from the beginning of the first RUC-Committed Hour of the block to the most recent time the Resource went Off-Line prior to the firs…

### e31 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, paragraph (21), opt out · text copy line 434 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …ot. A Combined Cycle Generation Resource that is RUC-committed from one On-Line configuration in order to transition to a different configuration with additional capacity may opt out of the RUC Settlement following the same rule for RUC-committed Combined Cycle Generation Resources described above. 
QUOTE: A QSE that opts out of RUC Settlement forfeits RUC Settlement for the affected Resource for a given block of RUC Buy-Back Hours. A QSE that opts out of RUC Settlement treatment must make the Resource available to SCED for all RUC Buy-Back Hours.
AFTER:  All hours in a contiguous block of RUC-Committed Hours that includes the RUC Buy-Back Hour shall be considered RUC Buy-Back Hours. If a contiguous block of RUC-Committed Hours spans more than one Operating Day and a QSE wishes to opt out of RUC Settlement for the RUC-Committed Hours in the second o…

### e34 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1) · text copy line 1579 · heading above: 5.7.4.1 RUC Capacity-Short Charge

BEFORE: …rt Charge (1) The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE's shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap. 
QUOTE: The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE's capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for the RUC process.
AFTER:  That dollar amount charged to each QSE is calculated as follows: RUCCSAMT _(ruc, i, q) = (-1) * Max [(RUCSFRS _(ruc, i, q) * RUCMWAMTRUCTOT _(ruc, h)), (2 * RUCSF _(ruc, i, q) * RUCMWAMTRUCTOT _(ruc, h) / RUCCAPTOT _(ruc, h))] / 4 Where: RUCMWAMTRUCTOT _(ruc, h) = [][]RUCMWAMT _(ruc, q, r, h) RUCCA…

### e43 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.14.7, Disputes for RUC Make-Whole Payment for Fuel Costs, paragraph (1) · text copy line 1194 · heading above: 9.14.7 Disputes for RUC Make-Whole Payment for Fuel Costs

BEFORE: …icipant alleged the decision violated these Protocols. Inquiries or disputes concerning such decisions, Protocols, or Operating Guides must be handled through the Protocol change process set forth in Section 21, Revision Request Process. 9.14.7 Disputes for RUC Make-Whole Payment for Fuel Costs (1) 
QUOTE: If the actual price paid for delivered natural gas for a specific Resource during a Reliability Unit Commitment (RUC)-Committed Interval is greater than Fuel Index Price (FIP) adjusted by the proxy fuel adder, X, defined in the Verifiable Cost Manual (i.e., FIP * (1+X)), then the QSE may file a Settlement dispute for that Resource's RUC Make-Whole Payment. The maximum amount that may be recovered through this dispute process is the difference between the RUC Guarantee based on the actual price paid and the RUC Guarantee based on the fuel index price FIP * (1+X).
AFTER:  When calculating the RUC Guarantee based on the actual price paid for Resources with approved verifiable costs, the RUC Guarantee may be adjusted to reflect the cost difference between the fuel burned and the fuel calculated based on verifiable cost rates. This adjustment will allow for the RUC Gua…

## Statements to check (new or changed since the last audit)

- **Link to ruc** (cites e1): prerequisite-of RUC (Reliability Unit Commitment: DRUC/HRUC): Make-whole and clawback settle resources that ERCOT commits through RUC. [e1]
- **Link to uplift** (cites e4): causes Uplift: Make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e4]
- **Link to qse** (cites e1, e2, e3): related QSE (Qualified Scheduling Entity): Make-whole payments are paid to QSEs, and clawback and capacity-short charges are charged to QSEs. [e1][e2][e3]
- **Link to load-ratio-share** (cites e4, e6): used-in Load Ratio Share (LRS): The uplift charge and the clawback payment are both allocated on a Load Ratio Share basis. [e4][e6]
- **Link to congestion** (cites e7): related Transmission Congestion: The IMM says congestion accounted for about 77% of 2025 RUC commitments. [e7]
- **Link to imm** (cites e8): related Independent Market Monitor (Potomac Economics): The IMM reports the 2025 make-whole and clawback amounts. [e8]
- **Link to three-part-supply-offer** (cites e17): determines Three-Part Supply Offer: The RUC Guarantee uses the lesser of the validated Startup and Minimum-Energy Offers and the applicable caps, so the offer sets the ceiling on what the Resource can be made whole for. [e17]
- **Link to energy-storage-resource** (cites e11, e22): related Energy Storage Resource (ESR): ERCOT does not calculate or pay a RUC Make-Whole Payment for an ESR, and ESRs are not subject to RUC Clawback Charges. [e11][e22]
- **Link to rmr** (cites e34, e22): related RMR (Reliability Must-Run) & Must-Run Alternatives: The capacity-short charge, the total make-whole payments it is based on, and the clawback charge all include amounts for RMR Units. [e34][e22]
- **Link to sced** (cites e31): related SCED (Security-Constrained Economic Dispatch): A QSE that opts out of RUC Settlement must make the Resource available to SCED for all RUC Buy-Back Hours. [e31]
- **Link to natural-gas-price** (cites e43): related Natural Gas Prices (Henry Hub): A QSE may dispute a RUC Make-Whole Payment when the actual gas price paid exceeds the Fuel Index Price adjusted by the proxy fuel adder. [e43]
- **Link to dam** (cites e28): related Day-Ahead Market (DAM): A Resource with a Three-Part Supply Offer cleared in the DAM that later receives a RUC commitment for the awarded hour is settled under the Day-Ahead Make-Whole Settlements section. [e28]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) If ERCOT commits a unit out of market and its revenue does not cover its allowable costs, ERCOT makes it whole, and if its revenues exceed its RUC Guarantee, it pays a clawback charge. Short QSEs pay first and the balance is spread across all QSEs by load ratio share; a QSE can opt out of both by buying back the commitment.

