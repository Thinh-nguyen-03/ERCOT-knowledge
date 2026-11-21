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

### e5 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, paragraph (1) · text copy line 822 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …laneous Invoice to charge the QSE representing the Resource that has received an OSA the excess revenues not clawed back in RUC Settlements. (2) All clawed back revenues will be paid to QSEs based on a 15-minute Load-Ratio Share basis. 5.7 Settlement for RUC Process 5.7.1 RUC Make-Whole Payment (1) 
QUOTE: To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)).
AFTER:  ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR). +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

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

### e9 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Market Operations, Make-Whole Payments and Clawbacks · text copy line 6704

BEFORE: …e the option to opt-out of both the makewhole payment and any associated clawback, which effectively means self-scheduling the unit and accepting full exposure to market outcomes. This approach gives suppliers the flexibility to manage their own risk while helping ERCOT maintain system reliability. 
QUOTE: Prior to 2024, RUC-committed resources that had submitted valid day-ahead offers were subject to only a 50% clawback of revenues above their costs.
AFTER:  This partial clawback created a financial incentive for some units to avoid self-committing, even when they were likely to be economic,40 40 It is notable that there is no requirement that the day-ahead market energy offer that triggers the reduced claw-back percentage be feasible, i.e., able to be…

### e10 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Market Operations, Make-Whole Payments and Clawbacks · text copy line 6725

BEFORE: …arket behavior, consumer stakeholder representatives filed NPRR 1172, Fuel Adder Definition, Mitigated Offer Caps, and RUC Clawback, in April 2023.42 The proposal called for 100 percent clawback of revenues above cost for economic resources that were RUC-committed after submitting day-ahead offers. 
QUOTE: The PUCT approved NPRR 1172 and it took effect on March 1, 2024.
AFTER:  Since the implementation of this rule change, patterns in RUC clawback and make-whole payments have shifted. As shown in Table 6, clawback payments increased while make-whole payments declined in 2024. This increase in clawbacks was largely driven by a high number of unit hours in March and April o…

### e11 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, RUC Make-Whole Payment, paragraph (1), last sentence · text copy line 822 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …en the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). 
QUOTE: ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR).
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e12 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, paragraph (2) · text copy line 831 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: ERCOT shall pay to the Qualified Scheduling Entity (QSE) for the Resource a Make-Whole Payment if the RUC Guarantee calculated in Section 5.7.1.1, RUC Guarantee, is greater than the sum of: (a) RUC Minimum-Energy Revenue calculated in Section 5.7.1.2, RUC Minimum-Energy Revenue; (b) Revenue less cost above Low Sustained Limited (LSL) during RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue less cost during QSE Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals.
AFTER:  (3) The RUC Make-Whole Payment to the QSE for each RUC-committed Resource, including Reliability Must-Run (RMR) Units, for each RUC-Committed Hour in an Operating Day is calculated as follows: RUCMWAMT_(q,r,h) = (-1) * Max (0, RUCG_(q,r,d) - RUCMEREV_(q,r,d) - RUCEXRR_(q,r,d) - RUCEXRQC_(q,r,d)) / …

### e13 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, paragraph (3), formula · text copy line 841 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …ing QSE Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals. (3) The RUC Make-Whole Payment to the QSE for each RUC-committed Resource, including Reliability Must-Run (RMR) Units, for each RUC-Committed Hour in an Operating Day is calculated as follows: 
QUOTE: RUCMWAMT_(q,r,h) = (-1) * Max (0, RUCG_(q,r,d) - RUCMEREV_(q,r,d) - RUCEXRR_(q,r,d) - RUCEXRQC_(q,r,d)) / RUCHR_(q,r,d)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, paragraph (3), variable RUCHR · text copy line 858 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …g Day. See Section 5.7.1.4. When one or more Combined Cycle Generation Resources are committed by RUC, revenue less cost during QSE Clawback Intervals is calculated for the Combined Cycle Train for all Combined Cycle Generation Resources earning revenue in QSE Clawback Intervals. RUCHR_(q,r,d) None 
QUOTE: RUC Hour-The total number of RUC-Committed Hours, for Resource r for the Operating Day.
AFTER:  When one or more Combined Cycle Generation Resources are committed by RUC, the total number of RUC-Committed Hours is calculated for the Combined Cycle Train for all RUC-committed Combined Cycle Generation Resources. q None A QSE. r None A RUC-committed Generation Resource. d None An Operating Day …

### e15 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, paragraph (3), variable RUCG · text copy line 850 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …nt-The RUC Make-Whole Payment to the QSE for Resource r, for each RUC-Committed Hour of the Operating Day. When one or more Combined Cycle Generation Resources are committed by RUC, payment is made to the Combined Cycle Train for all RUC-committed Combined Cycle Generation Resources. RUCG_(q,r,d) $ 
QUOTE: RUC Guarantee-The sum of eligible Startup Costs and minimum-energy costs for Resource r during all RUC-Committed Hours, for the Operating Day.
AFTER:  See Section 5.7.1.1. When one or more Combined Cycle Generation Resources are committed by RUC, guaranteed costs are calculated for the Combined Cycle Train for all RUC-committed Combined Cycle Generation Resources. RUCMEREV_(q,r,d) $ RUC Minimum-Energy Revenue-The sum of the energy revenues for Re…

### e16 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.1, RUC Guarantee, paragraph (1) · text copy line 871 · heading above: 5.7.1.1 RUC Guarantee

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.1.1 RUC Guarantee (1) 
QUOTE: The allowable Startup Costs and minimum-energy costs of a Resource committed by RUC is the RUC Guarantee. The RUC Guarantee minimum-energy costs are prorated according to the actual generation when the Resource's average output during a 15-minute Settlement Interval is below the corresponding LSL.
AFTER:  (2) The SUPR, MEPR and LSL used to calculate the RUC Guarantee for a Combined Cycle Train are the SUPR, MEPR and LSL that correspond to the Combined Cycle Generation Resource, within the Combined Cycle Train, that is RUC-committed for the hour. If the RUC-Committed Interval is a RUC for Additional …

### e17 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.1, paragraph (6) · text copy line 945 · heading above: 5.7.1.1 RUC Guarantee

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (6) 
QUOTE: If a validated Three-Part Supply Offer has been submitted for a Resource for the RUC, then the RUC Guarantee for that Resource is based on the minimum of the Startup Offer in that validated Three-Part Supply Offer and Startup Cap and the lesser of the Minimum-Energy Offer in that validated Three-Part Supply Offer and the Minimum-Energy Offer Cap.
AFTER:  If a validated Three-Part Supply Offer has not been submitted for a Resource for the RUC and ERCOT has not yet approved verifiable unit-specific costs for the Resource, then the RUC Guarantee for a Resource is based on the Resource Category Startup Generic Cap and the Resource Category Minimum-Ener…

### e18 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.1, paragraph (6) · text copy line 945 · heading above: 5.7.1.1 RUC Guarantee

BEFORE: …ubmitted for a Resource for the RUC, then the RUC Guarantee for that Resource is based on the minimum of the Startup Offer in that validated Three-Part Supply Offer and Startup Cap and the lesser of the Minimum-Energy Offer in that validated Three-Part Supply Offer and the Minimum-Energy Offer Cap. 
QUOTE: If a validated Three-Part Supply Offer has not been submitted for a Resource for the RUC and ERCOT has not yet approved verifiable unit-specific costs for the Resource, then the RUC Guarantee for a Resource is based on the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap.
AFTER:  If a validated Three-Part Supply Offer has not been submitted for a Resource for the RUC and ERCOT has approved verifiable unit-specific costs for the Resource, then the RUC Guarantee for a Resource is based on the most recent ERCOT-approved verifiable unit-specific costs for that Resource. For a R…

### e19 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.2, RUC Minimum-Energy Revenue, paragraph (1) · text copy line 1060 · heading above: 5.7.1.2 RUC Minimum-Energy Revenue

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.1.2 RUC Minimum-Energy Revenue (1) 
QUOTE: The energy revenue for a Resource's generation up to LSL during all RUC-Committed Hours of the Operating Day is RUC Minimum-Energy Revenue.
AFTER:  (2) The LSL used to calculate RUC Minimum-Energy Revenue for a Combined Cycle Train is the LSL that corresponds to the Combined Cycle Generation Resource, within the Combined Cycle Train, that is RUC-committed for the hour. If the interval is a RUCAC-Interval, then the LSL that corresponds to the Q…

### e20 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.3, paragraph (1) · text copy line 1166 · heading above: 5.7.1.3 Revenue Less Cost Above LSL During RUC-Committed Hours

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.1.3 Revenue Less Cost Above LSL During RUC-Committed Hours (1) 
QUOTE: The total revenue for a Resource operating above its LSL less the cost based on the Energy Offer Curve Cost Cap (as described in Section 4.4.9.3.3, Energy Offer Curve Cost Caps) during all RUC-Committed Hours of the Operating Day is Revenue Less Cost Above LSL During RUC-Committed Hours.
AFTER:  (2) The LSL used to calculate Revenue Less Cost Above LSL During RUC-Committed Hours for a Combined Cycle Train is the LSL that corresponds to the Combined Cycle Generation Resource, within the Combined Cycle Train, that is RUC-committed for the hour. (3) For each RUC-committed Resource, Revenue Le…

### e21 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1.4, paragraph (1) · text copy line 1296 · heading above: 5.7.1.4 Revenue Less Cost During QSE Clawback Intervals

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.1.4 Revenue Less Cost During QSE Clawback Intervals (1) 
QUOTE: The total revenue for a Resource less the cost based on the Energy Offer Curve Cost Cap as described in Section 4.4.9.3.3, Energy Offer Curve Cost Caps, during all QSE Clawback Intervals of the Operating Day is Revenue Less Cost During QSE-Clawback Intervals.
AFTER:  (2) The MEPR and LSL used to calculate Revenue Less Cost During QSE Clawback Intervals for a Combined Cycle Train is the MEPR and LSL that corresponds to the Combined Cycle Generation Resource, within a Combined Cycle Train, that operates in Real-Time for the QSE Clawback Interval. (3) For each QSE…

### e22 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2, RUC Clawback Charge, paragraphs (2)-(3) · text copy line 1410 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …ergy Revenue; (b) Revenue Less Cost Above LSL During RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue Less Cost During QSE-Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals. (2) 
QUOTE: The RUC Clawback Charge for a Resource, including RMR Units, for each Operating Day is allocated evenly over the RUC-Committed Hours for that Resource. (3) ESRs are not subject to RUC Clawback Charges.
AFTER:  +----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (3) above with the following upon system implementation:] | | | | (3) ESRs and DRRS deployments are not subject to RUC Clawback Charges. | +=====================================…

### e23 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2, paragraph (4), formula · text copy line 1423 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …=======================================================================+ +----------------------------------------------------------------------------------------+ (4) For each RUC-committed Resource, the RUC Clawback Charge for each RUC-Committed Hour of the Operating Day is calculated as follows: 
QUOTE: RUCCBAMT _(q, r, h) = Max (0, RUCMEREV _(q, r, d) + RUCEXRR _(q, r, d) + RUCEXRQC _(q, r, d) - RUCACREV _(q, r, d) - RUCG _(q, r, d)) / RUCHR _(q, r, d)
AFTER:  Where, The RUCAC revenue is calculated for a Combined Cycle Train as follows: RUCACREV _(q, r, d) = Max{0, [] RUCMEREV96 _(q, r, i) + Max(0, []RUCEXRR96 _(q, r, i))} The above variables are defined as follows: +----------------------------------------------------------------------------------------…

### e24 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.2, paragraph (4), variable RUCACREV · text copy line 1446 · heading above: 5.7.2 RUC Clawback Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | RUCACREV _(q, r, d) | $ | 
QUOTE: Revenue from RUCAC Hours-The net positive sum for the energy revenues for generation of Resource r represented by QSE q up to LSL and the total revenue for Resource r operating above its LSL less the cost during all RUCAC-Hours, for the Operating Day d.
AFTER:  When one or more Combined Cycle Generation Resources are RUCAC, revenue from RUCAC Hours is calculated for the Combined Cycle Train for all Combined Cycle Generation Resources that were RUC-committed during the RUCAC-Hours. | +------------------------------------------------------------------------…

### e25 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.1, Verifiable Costs, paragraph (2) · text copy line 465 · heading above: 5.6.1 Verifiable Costs

BEFORE: … responsibility, in which case both the QSE and Resource Entity shall submit an affidavit to ERCOT stating this arrangement. Notwithstanding the foregoing, QSEs that submit Power Purchase or Tolling Agreements (PPAs) do not have the option of allowing Resource Entities to file verifiable costs. (2) 
QUOTE: Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs. A QSE or Resource Entity may file verifiable unit-specific costs for a Resource at any time, but it must file those costs no later than 30 days after five Reliability Unit Commitment (RUC) events for that Resource in a calendar year.
AFTER:  A RUC event begins when a Resource receives a RUC instruction to come or stay On-Line and ends the later of when the Resource shuts down or the end of the Operating Day. The most recent ERCOT-approved verifiable costs must be used going forward. (3) These unit-specific verifiable costs may include …

### e26 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.2, RUC Startup Cost Eligibility, paragraph (1) · text copy line 661 · heading above: 5.6.2 RUC Startup Cost Eligibility

BEFORE: …al. For coal- and lignite-fired units, the actual fuel costs must be calculated using the actual Seasonal heat rate multiplied by a deemed fuel price of $1.50 per MMBtu. For fuel oil-fired operations, the number of gallons burned must be multiplied by the FOP. 5.6.2 RUC Startup Cost Eligibility (1) 
QUOTE: For purposes of this Section 5.6.2, all contiguous RUC-Committed Hours are considered as one RUC instruction. For each Resource, only one Startup Cost is eligible per block of contiguous RUC-Committed Hours.
AFTER:  (2) For a Resource's Startup Costs in the Operating Day, per RUC instruction, to be included in the calculation of the RUC guarantee for that Operating Day, all the criteria below must be met: (a) According to the RUC Snapshot for the RUC process that committed the Resource, the Resource must not b…

### e27 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.2, paragraph (2)(c)-(d) · text copy line 669 · heading above: 5.6.2 RUC Startup Cost Eligibility

BEFORE: …ater RUC instruction or QSE commitment must not connect the designated start hour or last hour of the RUC instruction to a block of QSE-committed Intervals that was QSE-committed before the RUC instruction was given, according to the RUC Snapshot for the RUC process that committed the Resource; (c) 
QUOTE: The generation breakers must have been open, as indicated by a telemetered Resource Status of Off-Line, for at least five minutes during the six hours preceding the first RUC-Committed Hour; and (d) The generation breakers must have been closed, as indicated by a telemetered Resource Status of On-Line, for at least one minute during the RUC commitment period or after the determined five-minute open breaker, as indicated by a telemetered Resource Status of Off-Line, in the six hours preceding the first RUC-Committed Hour.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.2, paragraph (5) · text copy line 704 · heading above: 5.6.2 RUC Startup Cost Eligibility

BEFORE: …ck of RUC-Committed Hours; and (d) The startup time used to process the dispute will be the startup time considered by the ERCOT Operator at the time the RUC instruction was issued. (4) For purposes of this Section 5.6.2, the telemetered Resource Status of OFFQS shall be considered as Off-Line. (5) 
QUOTE: A Resource that has a Three-Part Supply Offer cleared in the DAM and subsequently receives a RUC commitment for the Operating Hour for which it was awarded will be settled in accordance with Section 4.6.2.3, Day-Ahead Make-Whole Settlements.
AFTER:  (6) To determine the startup warmth state (i.e., hot, intermediate, or cold) for a startup-eligible block of contiguous RUC-Committed Hours, ERCOT calculates the time from the beginning of the first RUC-Committed Hour of the block to the most recent time the Resource went Off-Line prior to the firs…

### e29 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.3, Forced Outage of a RUC-Committed Resource, paragraph (2) · text copy line 712 · heading above: 5.6.3 Forced Outage of a RUC-Committed Resource

BEFORE: … Outage of a RUC-Committed Resource (1) The calculation of a Make-Whole Payment for a RUC-committed Resource that is eligible to receive startup costs under Section 5.6.2, RUC Startup Cost Eligibility, and that experiences a Forced Outage after unit synchronization is governed by Section 5.6.2. (2) 
QUOTE: If a RUC-committed Resource, which Resource is eligible to include startup costs in its RUC guarantee under Section 5.6.2 without considering the criteria in item (2)(d) of Section 5.6.2, experiences startup failure that creates a Forced Outage before breaker close, ERCOT shall include the Resource's submitted and approved verifiable actual costs in the Resource's RUC guarantee, limited to the lesser of:
AFTER:  (a) Costs that qualify as normal startup expenses, including fuel and operation and maintenance expenses, incurred before the event that caused the Forced Outage; or (b) Resource's Startup Offer in the RUC. (3) The process for determining the verifiable actual costs for a startup attempt under item…

### e30 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, RUC Process, paragraph (21), opt out · text copy line 434 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: … used in the RUC process. The feasibility check looks sequentially across all intervals in the RUC Study Period to validate whether a particular interval's COP HBSOC is achievable from the previous interval. If it is not feasible, then RUC will adjust the HBSOC to the closest achievable value. (21) 
QUOTE: A QSE with a Resource that is not a Reliability Must-Run (RMR) Unit or has not received an Outage Schedule Adjustment (OSA) that has been committed in a DRUC or HRUC process may opt out of the RUC Settlement (or "buy back" the commitment) by setting the COP status of the RUC-committed Resource to ONOPTOUT for the first hour of a contiguous block of RUC-Committed Hours in the Opt Out Snapshot.
AFTER:  All the configurations of the same Combined Cycle Train shall be treated as the same Resource for the purpose of creating the block of RUC-Committed Hours. A RUC-committed Combined Cycle Generation Resource may opt out of the RUC Settlement by setting the COP status of any Combined Cycle Generation…

### e31 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, paragraph (21), opt out · text copy line 434 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …ot. A Combined Cycle Generation Resource that is RUC-committed from one On-Line configuration in order to transition to a different configuration with additional capacity may opt out of the RUC Settlement following the same rule for RUC-committed Combined Cycle Generation Resources described above. 
QUOTE: A QSE that opts out of RUC Settlement forfeits RUC Settlement for the affected Resource for a given block of RUC Buy-Back Hours. A QSE that opts out of RUC Settlement treatment must make the Resource available to SCED for all RUC Buy-Back Hours.
AFTER:  All hours in a contiguous block of RUC-Committed Hours that includes the RUC Buy-Back Hour shall be considered RUC Buy-Back Hours. If a contiguous block of RUC-Committed Hours spans more than one Operating Day and a QSE wishes to opt out of RUC Settlement for the RUC-Committed Hours in the second o…

### e32 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.3, Payment When ERCOT Decommits a QSE-Committed Resource, paragraph (1) · text copy line 1478 · heading above: 5.7.3 Payment When ERCOT Decommits a QSE-Committed Resource

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.3 Payment When ERCOT Decommits a QSE-Committed Resource (1) 
QUOTE: If ERCOT decommits a QSE-committed Resource during the RUC process earlier than its scheduled shutdown within the Operating Day, then no compensation is due to the affected QSE from ERCOT.
AFTER:  (2) If ERCOT decommits a QSE committed Resource that is not scheduled to shutdown within the Operating Day, then ERCOT shall pay the affected QSE an amount as calculated below for the hours of decommitment. The number of continuous decommitted hours used in the calculation are the hours beginning w…

### e33 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4, RUC Make-Whole Charges, paragraph (2) · text copy line 1568 · heading above: 5.7.4 RUC Make-Whole Charges

BEFORE: …-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge. (2) 
QUOTE: On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortfall and by amount uplifted.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1) · text copy line 1579 · heading above: 5.7.4.1 RUC Capacity-Short Charge

BEFORE: …rt Charge (1) The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE's shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap. 
QUOTE: The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE's capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for the RUC process.
AFTER:  That dollar amount charged to each QSE is calculated as follows: RUCCSAMT _(ruc, i, q) = (-1) * Max [(RUCSFRS _(ruc, i, q) * RUCMWAMTRUCTOT _(ruc, h)), (2 * RUCSF _(ruc, i, q) * RUCMWAMTRUCTOT _(ruc, h) / RUCCAPTOT _(ruc, h))] / 4 Where: RUCMWAMTRUCTOT _(ruc, h) = [][]RUCMWAMT _(ruc, q, r, h) RUCCA…

### e35 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2) · text copy line 1634 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …y Emergency Alert (EEA) condition and that is shown as On-Line in its COP; or (d) If the Settlement Interval is a RUCAC-Interval, the Combined Cycle Generation Resource that was QSE-committed at the time the RUCAC was issued, excluding the condition for SWGRs as describe in paragraph (c) above. (2) 
QUOTE: In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution.
AFTER:  For an IRR, the RCAPSNAP variable used below shall be equal to the minimum of the WGRPP or PVGRPP described above and the HSL value as reflected in the QSE's COP, at the time of the RUC execution. (3) In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Inte…

### e36 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1, paragraph (3) · text copy line 1636 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution. For an IRR, the RCAPSNAP variable used below shall be equal to the minimum of the WGRPP or PVGRPP described above and the HSL value as reflected in the QSE's COP, at the time of the RUC execution. (3) 
QUOTE: In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Intermittent Renewable Resources (IRRs) that were given notice of decommitment within the two hours before the Operating Hour as a result of the RUC process by setting the RCAPSNAP and RCAPADJ variables used below set equal to the RCAPSNAP value for the Resource immediately before the decommitment instruction was given.
AFTER:  (4) In calculating the short amount for each QSE, if the RCAPSNAP for a non-IRR was credited to the QSE during the RUC Snapshot but the Resource experiences a Forced Outage within two hours before the start of the Settlement Interval, then the RCAPSNAP for that Resource is also credited to the QSE …

### e37 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1, paragraph (4) · text copy line 1638 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …ources (IRRs) that were given notice of decommitment within the two hours before the Operating Hour as a result of the RUC process by setting the RCAPSNAP and RCAPADJ variables used below set equal to the RCAPSNAP value for the Resource immediately before the decommitment instruction was given. (4) 
QUOTE: In calculating the short amount for each QSE, if the RCAPSNAP for a non-IRR was credited to the QSE during the RUC Snapshot but the Resource experiences a Forced Outage within two hours before the start of the Settlement Interval, then the RCAPSNAP for that Resource is also credited to the QSE in the RCAPADJ.
AFTER:  (5) In calculating the short amount for each QSE, if the DCIMPSNAP was credited to the QSE during the RUC Snapshot but the entire Direct Current Tie (DC Tie) experiences a Forced Outage within two hours before the start of the Settlement Interval, then the DCIMPSNAP is also credited to the QSE in t…

### e38 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.2, RUC Capacity Credit, paragraph (1) · text copy line 2107 · heading above: 5.7.4.1.2 RUC Capacity Credit

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.7.4.1.2 RUC Capacity Credit (1) 
QUOTE: A QSE that is charged for a capacity shortfall in one RUC process gets a capacity credit equal to the minimum of the QSE's RUC shortfall (MW) or the total RUC capacity purchased multiplied by the QSE's shortfall ratio share. The capacity credit to be used in future RUC processes for the same 15-minute Settlement Interval is calculated as follows:
AFTER:  RUCCAPCREDIT_(ruc,i,q) = Min [RUCSF_(ruc,i,q), (RUCCAPTOT_(ruc,h)* RUCSFRS_(ruc,i,q))] The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e39 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1), formula · text copy line 2137 · heading above: 5.7.4.2 RUC Make-Whole Uplift Charge

BEFORE: …tion 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows: 
QUOTE: LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i)
AFTER:  Where: RUCMWAMTTOT_(h) = []RUCMWAMTRUCTOT_(ruc,h) RUCCSAMTTOT_(i) = [][]RUCCSAMT_(ruc,i,q) The above variables are defined as follows: --------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e40 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.2, paragraph (1), variable LRS · text copy line 2160 · heading above: 5.7.4.2 RUC Make-Whole Uplift Charge

BEFORE: …ty-Short Charges for all QSEs and RUC processes, including payments for RMR Units, for the 15-minute Settlement Interval. RUCCSAMT_(ruc,i,q) $ RUC Capacity-Short Amount-The charge to a QSE, due to capacity shortfall for a particular RUC process, for the 15-minute Settlement Interval. LRS_(q,i) none 
QUOTE: Load Ratio Share-The ratio of Adjusted Metered Load to the total ERCOT Adjusted Metered Load for the 15-minute Settlement Interval.
AFTER:  See Section 6.6.2, Load Ratio Share, item (2). i none A 15-minute Settlement Interval. h none The hour that includes the Settlement Interval i. ruc none A RUC Process. q none A QSE. ---------------------------------------------------------------------------------------------------------------------…

### e41 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.5, RUC Clawback Payment, paragraph (1), formula · text copy line 2175 · heading above: 5.7.5 RUC Clawback Payment

BEFORE: …yment (1) ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment. The RUC Clawback Payment is calculated as follows for each QSE for each 15-minute Settlement Interval: 
QUOTE: LARUCCBAMT_(q,i) = (-1) * (RUCCBAMTTOT_(h) / 4 * LRS_(q,i))
AFTER:  Where: RUCCBAMTTOT_(h) = [][]RUCCBAMT_(q,r,h) The above variables are defined as follows: -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e42 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.6, RUC Decommitment Charge, paragraph (1) · text copy line 2205 · heading above: 5.7.6 RUC Decommitment Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.6 RUC Decommitment Charge (1) 
QUOTE: ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units.
AFTER:  The RUC Decommitment Charge for a 15-minute Settlement Interval is calculated as follows: LARUCDCAMT_(q,i) = (-1) * [(RUCDCAMTTOT_(h) / 4) * LRS_(q,i)] Where: RUCDCAMTTOT_(h) = [][]RUCDCAMT_(q,r,h) The above variables are defined as follows: ---------------------------------------------------------…

### e43 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.14.7, Disputes for RUC Make-Whole Payment for Fuel Costs, paragraph (1) · text copy line 1194 · heading above: 9.14.7 Disputes for RUC Make-Whole Payment for Fuel Costs

BEFORE: …icipant alleged the decision violated these Protocols. Inquiries or disputes concerning such decisions, Protocols, or Operating Guides must be handled through the Protocol change process set forth in Section 21, Revision Request Process. 9.14.7 Disputes for RUC Make-Whole Payment for Fuel Costs (1) 
QUOTE: If the actual price paid for delivered natural gas for a specific Resource during a Reliability Unit Commitment (RUC)-Committed Interval is greater than Fuel Index Price (FIP) adjusted by the proxy fuel adder, X, defined in the Verifiable Cost Manual (i.e., FIP * (1+X)), then the QSE may file a Settlement dispute for that Resource's RUC Make-Whole Payment. The maximum amount that may be recovered through this dispute process is the difference between the RUC Guarantee based on the actual price paid and the RUC Guarantee based on the fuel index price FIP * (1+X).
AFTER:  When calculating the RUC Guarantee based on the actual price paid for Resources with approved verifiable costs, the RUC Guarantee may be adjusted to reflect the cost difference between the fuel burned and the fuel calculated based on verifiable cost rates. This adjustment will allow for the RUC Gua…

### e44 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.14.7, paragraph (3) · text copy line 1198 · heading above: 9.14.7 Disputes for RUC Make-Whole Payment for Fuel Costs

BEFORE: …st show proof that the QSE or Resource Entity (or another entity acting on behalf of the Resource Entity with respect to fuel procurement) purchased and nominated fuel in sufficient quantities to start and operate the Resource at its Low Sustained Limit (LSL) during the RUC-Committed Intervals. (3) 
QUOTE: The QSE or Resource Entity must purchase and nominate fuel as described in paragraph (2) above unless one or more of the conditions below applies: (a) The Resource received an initial RUC instruction for less than 12 contiguous hours within the same gas delivery day; (b) The QSE or Resource Entity did not have sufficient time to procure and nominate fuel after receiving the RUC instruction; (c) The RUC instruction was instructed outside of Business Hours or otherwise at a time when the Resource was unable to procure fuel.
AFTER:  (4) If the QSE or Resource Entity did not or was not able to nominate fuel for the RUC-Committed Intervals, ERCOT may require proof that following a reasonable effort to secure fuel, the QSE or Resource Entity was not able to both purchase and nominate fuel for reasons beyond the QSE's or Resource …

### e45 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual, Section 8 area, Event Specific Verifiable Costs (paragraph (7) of the general verifiable-cost rules) · text copy line 311 · heading above: 1.5 An Introduction to Verifiable Costs

BEFORE: … accurate and documented. Only after approving submitted data does ERCOT use it as a basis for calculating Verifiable Costs. (7) Once approved, Verifiable Cost data are used prospectively to calculate Verifiable Costs. An important exception to this rule pertains to Event Specific Verifiable Costs. 
QUOTE: Event Specific Verifiable Costs are documented costs a Resource actually incurred during a specific event and, thus, exclude amortized or discounted future costs.
AFTER:  Event Specific Verifiable Costs are only relevant to Section 8, Forced Outages and Cancellation of a RUC-Committed Resource. Event Specific Verifiable Costs are applied retroactively (i.e. used when resettling the Operating Day on which an applicable event occurred) and only apply to the event from…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 101 (OCR), Make-Whole Payments, Clawbacks, and Opt-Outs · text copy line 6420

BEFORE: … to determine whether the unit is entitled to a make-whole payment. These payments ensure that RUC-committed units do not lose money when their market revenues fall short of their costs. Conversely, if a RUC-committed unit earns more revenue than its costs, ERCOT will claw back the excess revenues. 
QUOTE: ERCOT first allocates make-whole payment costs to Qualified Scheduling Entities (QSEs) that do not provide enough capacity to cover their real-time obligations and are therefore capacity short. Second, all QSEs share the remaining costs on a load-ratio-share basis. Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes.
AFTER:  ERCOT's RUC commitment practices influence the magnitude of make-whole payments and clawbacks and the frequency of opt-outs. The following subsections discuss trends in RUC activity. 3. RUC Activity Table 7 shows trends in ERCOT's aggregate use of RUC from 2021 through 2025. In 2025, ERCOT issued t…

### e47 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 101 (OCR), Table 7: Magnitude of RUC Activity 2021-2025 (columns: Active Hours, Resource-Hours, RUC LSL Capacity-Hours (MWh)) · ocr copy line 4401, OCR page 101

BEFORE: …rend over the last five years. As discussed in Chapter I, the average RDPA value when activated was greater in 2025 than in 2024, but both years were considerably lower than the three prior years. Table 7: Magnitude of RUC Activity 2021-2025 Active Resource- RUC LSL Hours Hours Capacity-Hours (MWh) 
QUOTE: 2021 1,187 3,863 257,603 2022 2,139 7,910 609,322 2023 975 2,501 155,553 2024 1,066 1,861 191,393 2025 1,820 5,129 364,991
AFTER:  2025 State of the Market Report | 79 ===== page 102 (OCR) ===== Market Operations 4. Reasons for RUC Next, we consider trends in the reported rationale for each RUC commitment, loosely categorized as congestion or capacity, shown in Table 8. The operators who issue the instruction designate the rat…

### e48 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 102 (OCR), Table 8: Reported Reason for RUC 2021-2025 (Congestion %, Capacity %) · ocr copy line 4421, OCR page 102

BEFORE: …tem conditions that precipitated the instruction. Table 8 shows a large increase in the use of RUC to manage congestion. This increase drove the overall increase in RUC instructions and corresponding market impact in 2025. Table 8: Reported Reason for RUC 2021-2025 Congestion Capacity Frequency (%) 
QUOTE: 2021 9 91 2022 18 82 2023 8 92 2024 34 66 2025 77 23
AFTER:  Combined, Table 7 and Table 8 show a large increase in RUC instructions in 2025, most of it attributable to congestion. This trend coincided with fewer resources opting out of RUC settlement and higher make-whole payments, as shown in Table 9. 5. RUC Settlement In 2024, the rate of RUC-committed re…

### e49 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 102 (OCR), 5. RUC Settlement · text copy line 6506

BEFORE: …6%#+,789: ! !" "# #$ # !$ %& '' (( $% Combined, Table 7 and Table 8 show a large increase in RUC instructions in 2025, most of it attributable to congestion. This trend coincided with fewer resources opting out of RUC settlement and higher make-whole payments, as shown in Table 9. 5. RUC Settlement 
QUOTE: In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement.
AFTER:  The most likely explanation for the even lower level of opt-outs in 2025 is that market prices were not expected to be high enough to warrant opting out. This is reflected in the large increase in make-whole payments from 2024 to 2025 and the relatively low total for clawback charges despite the la…

### e50 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 102 (OCR), Table 9: RUC Settlement 2021-2025 (columns: Opt-Out Frequency %, Claw-Back $ Millions, Make-Whole $ Millions) · ocr copy line 4443, OCR page 102

BEFORE: …rease in make-whole payments from 2024 to 2025 and the relatively low total for claw- back charges despite the large volume of energy settled through RUC. Table 9: RUC Settlement 2021-2025 Opt-Out of RUC Ciaw-Back | Make-Whole Settlement Frequency (%) _($ Millions) _($ Millions) 2021 39 $3.09 $5.38 
QUOTE: 2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84
AFTER:  80 | 2025 State of the Market Report ===== page 103 (OCR) ===== Market Operations Out-of-market settlement is likely higher when resources are committed through RUC to resolve congestion rather than capacity needs. Without a counter-veiling pricing mechanism, out-of- market commitments necessarily …

### e51 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 102 (OCR), 5. RUC Settlement · ocr copy line 4433, OCR page 102

BEFORE: …5. RUC Settlement In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement. 
QUOTE: The most likely explanation for the even lower level of opt-outs in 2025 is that market prices were not expected to be high enough to warrant opting out. This is reflected in the large increase in make-whole payments from 2024 to 2025 and the relatively low total for claw- back charges despite the large volume of energy settled through RUC.
AFTER:  Table 9: RUC Settlement 2021-2025 Opt-Out of RUC Ciaw-Back | Make-Whole Settlement Frequency (%) _($ Millions) _($ Millions) 2021 39 $3.09 $5.38 2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84 80 | 2025 State of the Market Report ===== page 103 (OCR) ===== Market Op…

### e52 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 105 (OCR), 3. Make-Whole Payments and Clawbacks · text copy line 6723

BEFORE: …enefit from the opportunity to recover all costs and retain half of any upside through RUC.41 In response to concerns that this undermined efficient market behavior, consumer stakeholder representatives filed NPRR 1172, Fuel Adder Definition, Mitigated Offer Caps, and RUC Clawback, in April 2023.42 
QUOTE: The proposal called for 100 percent clawback of revenues above cost for economic resources that were RUC-committed after submitting day-ahead offers.
AFTER:  The PUCT approved NPRR 1172 and it took effect on March 1, 2024. Since the implementation of this rule change, patterns in RUC clawback and make-whole payments have shifted. As shown in Table 6, clawback payments increased while make-whole payments declined in 2024. This increase in clawbacks was l…

### e53 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 105 (OCR), 3. Make-Whole Payments and Clawbacks · text copy line 6727

BEFORE: …100 percent clawback of revenues above cost for economic resources that were RUC-committed after submitting day-ahead offers. The PUCT approved NPRR 1172 and it took effect on March 1, 2024. Since the implementation of this rule change, patterns in RUC clawback and make-whole payments have shifted. 
QUOTE: As shown in Table 6, clawback payments increased while make-whole payments declined in 2024.
AFTER:  This increase in clawbacks was largely driven by a high number of unit hours in March and April of 2024 during which RUC-committed resources did not opt out of RUC settlement. We discuss these behaviors and additional RUC trends next. Table 6: RUC Settlement Quantities, 2020-2024 Claw-Back Make-Who…

### e54 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 100 (OCR), RUC settlement (2022 report) · text copy line 4161

BEFORE: …In theory, the claw-back amount should be low because economic units would generally benefit by opting out of the RUC instruction if such profitability is foreseeable. In 2022, roughly 20% of RUC resources opted out. However, economic resources frequently do not opt out and submit day-ahead offers. 
QUOTE: Generators that participate in the day-ahead market forfeit only 50% of markets revenues above cost through the claw-back, rather than 100%.
AFTER:  Receiving full operational cost recovery via RUC make-whole while also getting the opportunity to keep half or all of any revenues above cost can 70 | 2022 State of the Market Report / / Reliability Commitments undermine the incentive to self-commit generators when they would likely be economic. 73…

### e55 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 109 (OCR), RUC (2021 report) · text copy line 4353

BEFORE: … 2018 $3.07 $0.61 2019 $0.90 $0.05 2020 $0.48 $0.40 2021 $3.11 $5.25 80 | 2021 State of the Market Report / / Reliability Commitments Table 7 shows that the make-whole payments rose significantly to roughly $5.3 million in 2021, higher than any year since the early part of the nodal market in 2011. 
QUOTE: This increase from preceding years was due to ERCOT's desire to have at least 6,500 MW in reserve above the load forecast, which began in July 2021.
AFTER:  The clawback amount was lower than the make-whole payment in 2021. In theory, the clawback amount should be low because units that are economic (and therefore subject to the clawback provision) would generally benefit by opting out of the RUC instruction, if such profitability is foreseeable. Howev…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e5, e11, e12): **Make-whole.** ERCOT calculates a make-whole payment per Operating Day for each RUC-committed Resource, whether committed by DRUC or HRUC, when revenue falls short of cost; it does not calculate or pay one for an ESR. [e5][e11] ERCOT pays the QSE if the RUC Guarantee is greater than the sum of RUC Minimum-Energy Revenue, revenue less cost above LSL during RUC-Committed Hours, and revenue less cost during QSE Clawback Intervals. [e12]
- **How it works #2** (cites e15, e16, e17, e18, e25): **What the guarantee is made of.** The RUC Guarantee is the sum of eligible Startup Costs and minimum-energy costs during all RUC-Committed Hours of the Operating Day. [e15] The minimum-energy part is prorated by actual generation when average output in a 15-minute Settlement Interval is below LSL. [e16] If a validated Three-Part Supply Offer was submitted, the guarantee uses the lesser of the offers and caps; if none was submitted and ERCOT has not approved unit-specific costs, it uses the Resource Category generic caps. [e17][e18] Until ERCOT approves verifiable unit-specific costs the caps are the generic caps, and a QSE or Resource Entity must file verifiable costs no later than 30 days after five RUC events for the Resource in a calendar year. [e25]
- **How it works #3** (cites e26, e27, e29): **Startup eligibility.** All contiguous RUC-Committed Hours count as one RUC instruction, and only one Startup Cost is eligible per block. [e26] Breaker tests also apply: the breakers must have been open (Off-Line) for at least five minutes during the six hours before the first RUC-Committed Hour and then closed (On-Line) for at least one minute. [e27] If the Resource suffers a startup failure that creates a Forced Outage before breaker close, ERCOT includes submitted and approved verifiable actual costs, limited to the lesser of normal startup expenses incurred and the Resource's Startup Offer in the RUC. [e29]
- **How it works #4** (cites e2, e22, e6, e41): **Clawback.** The QSE pays a clawback charge for the Operating Day if the RUC Guarantee is less than the sum of the same three revenue measures. [e2] The charge is allocated evenly over the Resource's RUC-Committed Hours, includes RMR Units, and does not apply to ESRs. [e22] Revenues from all clawback charges are paid to all QSEs on a Load Ratio Share basis as the RUC Clawback Payment. [e6][e41]
- **How it works #5** (cites e30, e31, e46): **Opt-out.** A QSE with a Resource that is not an RMR Unit and has not received an OSA may opt out of RUC Settlement ("buy back" the commitment) by setting the COP status to ONOPTOUT for the first hour of the contiguous block of RUC-Committed Hours in the Opt Out Snapshot. [e30] Opting out forfeits RUC Settlement for the block of RUC Buy-Back Hours, and the Resource must be available to SCED for all those hours. [e31] The IMM says suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes. [e46]
- **How it works #6** (cites e3, e4, e34, e33): **Who pays.** QSEs that were capacity-short in each RUC are charged first, in proportion to their shortfall and subject to a cap; any remainder in a 15-minute Settlement Interval is uplifted to all QSEs on a Load Ratio Share basis. [e3][e4] The cap on a QSE's charge is two times total RUC Make-Whole Payments for all QSEs multiplied by that QSE's capacity shortfall divided by the total capacity of all RUC-committed Resources during the Settlement Interval for the RUC process. [e34] ERCOT posts monthly, within ten days after Initial Settlement of the month's last day, the total make-whole charges and clawback payment amounts by interval, by QSE capacity shortfall and by amount uplifted. [e33]
- **How it works #7** (cites e35, e36, e37, e38): **How shortfall is measured.** The available capacity of an IRR in the shortfall calculation is the lesser of its COP HSL and its wind or PV production potential at the time of RUC execution. [e35] A QSE is credited for non-IRR Resources given notice of decommitment within the two hours before the Operating Hour, and for a non-IRR Resource that suffers a Forced Outage within two hours before the Settlement Interval if its capacity was credited in the RUC Snapshot. [e36][e37] A QSE charged for a shortfall in one RUC gets a capacity credit, equal to the lesser of its RUC shortfall and the total RUC capacity purchased times its shortfall ratio share, for future RUC processes for the same Settlement Interval. [e38]
- **How it works #8** (cites e32, e42): **Decommitment.** If ERCOT decommits a QSE-committed Resource during the RUC process earlier than its scheduled shutdown within the Operating Day, no compensation is due to the QSE; a separate RUC Decommitment Charge recovers on an LRS basis any RUC Decommitment Payments. [e32][e42]
- **Formula #1** (cites e13, e15, e19, e20, e21, e14): Make-whole (per RUC-Committed Hour): RUCMWAMT = (-1) x Max(0, RUCG - RUCMEREV - RUCEXRR - RUCEXRQC) / RUCHR. [e13] RUCG is the RUC Guarantee, RUCMEREV the RUC Minimum-Energy Revenue (energy revenue up to LSL during RUC-Committed Hours), RUCEXRR the revenue less cost above LSL during RUC-Committed Hours, RUCEXRQC the revenue less cost during QSE Clawback Intervals, and RUCHR the number of RUC-Committed Hours in the Operating Day. [e15][e19][e20][e21][e14] The leading (-1) is the Protocols' sign convention for a payment to the QSE.
- **Formula #2** (cites e23, e24): Clawback (per RUC-Committed Hour): RUCCBAMT = Max(0, RUCMEREV + RUCEXRR + RUCEXRQC - RUCACREV - RUCG) / RUCHR. [e23] RUCACREV is the net positive revenue from RUCAC Hours. [e24]
- **Formula #3** (cites e39, e40, e41): Uplift: LARUCAMT = (-1) x (RUCMWAMTTOT / 4 + RUCCSAMTTOT) x LRS, where RUCMWAMTTOT is make-whole payments for all RUC processes in the hour, RUCCSAMTTOT is capacity-short charges for the interval, and LRS is the ratio of the QSE's Adjusted Metered Load to total ERCOT Adjusted Metered Load for the 15-minute interval. [e39][e40] Clawback payment to QSEs: LARUCCBAMT = (-1) x (RUCCBAMTTOT / 4 x LRS). [e41]
- **ERCOT context #1** (cites e47, e48, e50, e7, e8) FLAG number-not-in-quote: 9%, 8%, 34%, 24%, 23%: **Activity by year (IMM, 2025 report, OCR Tables 7-9).** RUC resource-hours were 3,863 in 2021, 7,910 in 2022, 2,501 in 2023, 1,861 in 2024 and 5,129 in 2025. [e47] The reported share of RUC commitments for congestion was 9% in 2021, 18% in 2022, 8% in 2023, 34% in 2024 and 77% in 2025. [e48] The IMM reports opt-out frequency of 24%, 23%, 8% and 3% for 2022-2025, with clawbacks of $22.69, $3.45, $7.14 and $4.53 million and make-whole payments of $70.13, $3.69, $3.35 and $21.84 million. [e50] The IMM reports 5,129 resource-hours of RUC instructions in 2025, up 176% from 2024, with congestion behind about 77%, and that make-whole payments exceeded $21 million against $4.5 million of clawbacks. [e7][e8]
- **ERCOT context #2** (cites e55, e49, e51): **Why they moved.** The IMM attributes the 2021 jump in make-whole payments to ERCOT's desire to hold at least 6,500 MW of reserve above the load forecast beginning in July 2021. [e55] It says the 2024 fall in opt-outs came largely from NPRR 1172, and that the lower 2025 opt-out level most likely reflects prices not being expected to be high enough to warrant opting out, with large make-whole growth and low clawbacks. [e49][e51]
- **ERCOT context #3** (cites e9, e54, e52, e10, e53, e49) FLAG number-not-in-quote: 2023, 2025: **The 2024 rule change.** Before 2024, RUC-committed resources with valid day-ahead offers were subject to only a 50% clawback of revenues above their costs. [e9][e54] NPRR 1172 was filed by consumer stakeholder representatives in April 2023 and called for a 100% clawback of revenue above cost for economic resources RUC-committed after submitting day-ahead offers; the PUCT approved it and it took effect on March 1, 2024. [e52][e10] The IMM says clawbacks increased and make-whole payments declined in 2024. [e53] (The IMM's 2025 report describes the same rule as a full rather than partial clawback for resources that opted out; see Open items.) [e49]
- **ERCOT context #4** (cites e43, e44): **Fuel disputes.** A QSE may file a Settlement dispute for a Resource's RUC Make-Whole Payment when the actual price paid for delivered natural gas during a RUC-Committed Interval exceeds the Fuel Index Price adjusted by the proxy fuel adder; the maximum recovery is the difference between the RUC Guarantee based on the actual price and on FIP * (1+X). [e43] The QSE or Resource Entity must purchase and nominate fuel to start and operate at LSL, unless the initial RUC instruction was under 12 contiguous hours in the same gas day, there was insufficient time, or the instruction came outside Business Hours or when it could not procure fuel. [e44]
- **ERCOT context #5** (cites e45): **Event-specific costs.** The Verifiable Cost Manual describes Event Specific Verifiable Costs as documented costs a Resource actually incurred during a specific event, excluding amortized or discounted future costs. [e45]
- **Timeline #1** (cites e55): - July 2021: ERCOT begins wanting at least 6,500 MW of reserve above the load forecast, which the IMM links to the 2021 rise in make-whole payments. [e55]
- **Timeline #2** (cites e52) FLAG number-not-in-quote: 2023: - April 2023: NPRR 1172 filed to clawback 100% of revenue above cost for economic RUC resources with day-ahead offers. [e52]
- **Timeline #3** (cites e10): - 1 March 2024: NPRR 1172 takes effect. [e10]
- **Timeline #4** (cites e47, e48, e8) FLAG number-not-in-quote: 77%: - 2025: RUC resource-hours rise to 5,129, 77% reported for congestion, make-whole above $21 million. [e47][e48][e8]
- **Key facts #1** (cites e1, e11, e22): - Make-whole covers startup and minimum-energy costs not recovered in revenue; ESRs are excluded from make-whole and clawback. [e1][e11][e22]
- **Key facts #5** (cites e9, e10): - Per the IMM, NPRR 1172 took effect March 1, 2024; before 2024 the clawback was 50% for resources with valid day-ahead offers. [e9][e10]
- **Key facts #6** (cites e50) FLAG number-not-in-quote: 8%: - Opt-out frequency fell to 8% in 2024 and 3% in 2025 (IMM 2025 report). [e50]
- **Example #1** (cites e13, e23) FLAG number-not-in-quote: $20,000, $5,000,, $8,000, $13,000,, $7,000, $30,000,, $35,000,, $15,000: Suppose a unit is RUC-committed for 4 hours with a RUC Guarantee of $20,000. If RUC Minimum-Energy Revenue is $5,000, revenue less cost above LSL is $8,000 and there are no QSE Clawback Intervals, the sum is $13,000, below the guarantee, so ERCOT pays a make-whole of $7,000 spread over the 4 hours. If instead revenue less cost above LSL is $30,000, the sum is $35,000, above the guarantee, so the clawback charge is $15,000 over the 4 hours (ignoring any RUCAC revenue). The Protocol formulas are mirror images: the same three revenue measures are tested against the guarantee. [e13][e23]
- **Common confusion #1** (cites e1, e4, e6, e28): The make-whole payment is not a payment for the energy; it only covers shortfalls against allowable costs. [e1] The clawback payment to QSEs is also separate from the uplift charge, though both use Load Ratio Share. [e4][e6] Make-whole also covers DAM-committed Resources in the definition, but this topic's RUC mechanics (Section 5.7) apply to RUC commitments. [e1][e28]
- **Questions #4** (cites e9, e10, e52): Per the IMM's 2024 report, NPRR 1172 took effect on March 1, 2024; before 2024, resources with valid day-ahead offers faced only a 50% clawback, and NPRR 1172 called for 100% for economic resources committed after submitting day-ahead offers. [e9][e10][e52] The saved IMM reports describe the new clawback differently (see Open items).
- **Questions #6** (cites e30, e31): Yes, by opting out, unless it is an RMR Unit or has received an OSA: the QSE sets the COP status to ONOPTOUT for the first hour of the block in the Opt Out Snapshot, forfeits RUC Settlement for those hours and must make the Resource available to SCED. [e30][e31]
- **Questions #8** (cites e49, e50, e51): The IMM links the 2024 drop largely to NPRR 1172's clawback change, and says the further drop in 2025 most likely reflects prices not expected to be high enough to warrant opting out. [e49][e50][e51]
- **Questions #10** (cites e50, e47, e48, e7): The IMM reports $21.84 million in 2025 against $3.35 million in 2024 and ties the increase to more RUC (5,129 resource-hours, 77% for congestion) and fewer opt-outs. [e50][e47][e48][e7]
- **Questions #12** (cites e29): If it would otherwise be eligible for startup costs and has a startup failure that creates a Forced Outage before breaker close, ERCOT includes verifiable actual costs in the RUC Guarantee, limited to the lesser of normal startup expenses incurred and the Resource's Startup Offer in the RUC. [e29]
- **Questions #14** (cites e36): The QSE is credited for non-IRR Resources given notice of decommitment within the two hours before the Operating Hour. [e36] (The saved text does not address any other effect.)
- **Scenarios #2** (cites e15): - The unit is guaranteed its allowable startup and minimum-energy costs through the RUC Guarantee. [e15]
- **Scenarios #3** (cites e52, e9): - Per the IMM, NPRR 1172 calls for a 100% clawback of revenue above cost for such economic resources, where before it was 50%. [e52][e9]
- **Scenarios #4** (cites e31, e46): - The QSE could instead opt out, forfeiting make-whole and clawback and taking full market exposure. [e31][e46]
- **Link to ruc** (cites e1): prerequisite-of RUC (Reliability Unit Commitment: DRUC/HRUC): Make-whole and clawback settle resources that ERCOT commits through RUC. [e1]
- **Link to uplift** (cites e4): causes Uplift: Make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e4]
- **Link to qse** (cites e1, e2, e3): related QSE (Qualified Scheduling Entity): Make-whole payments are paid to QSEs, and clawback and capacity-short charges are charged to QSEs. [e1][e2][e3]
- **Link to load-ratio-share** (cites e4, e6): used-in Load Ratio Share (LRS): The uplift charge and the clawback payment are both allocated on a Load Ratio Share basis. [e4][e6]
- **Link to congestion** (cites e7): related Transmission Congestion: The IMM says congestion accounted for about 77% of 2025 RUC commitments. [e7]
- **Link to imm** (cites e8): related Independent Market Monitor (Potomac Economics): The IMM reports the 2025 make-whole and clawback amounts. [e8]
- **Link to three-part-supply-offer** (cites e17): determines Three-Part Supply Offer: The RUC Guarantee uses the lesser of the validated Startup and Minimum-Energy Offers and the applicable caps, so the offer sets the ceiling on what the Resource can be made whole for. [e17]
- **Link to energy-storage-resource** (cites e11, e22): related Energy Storage Resource (ESR): ERCOT does not calculate or pay a RUC Make-Whole Payment for an ESR, and ESRs are not subject to RUC Clawback Charges. [e11][e22]
- **Link to rmr** (cites e34, e22): related RMR (Reliability Must-Run) & Must-Run Alternatives: Make-whole, clawback, capacity-short and uplift amounts all include amounts for RMR Units. [e34][e22]
- **Link to sced** (cites e31): related SCED (Security-Constrained Economic Dispatch): A QSE that opts out of RUC Settlement must make the Resource available to SCED for all RUC Buy-Back Hours. [e31]
- **Link to natural-gas-price** (cites e43): related Natural Gas Prices (Henry Hub): A QSE may dispute a RUC Make-Whole Payment when the actual gas price paid exceeds the Fuel Index Price adjusted by the proxy fuel adder. [e43]
- **Link to dam** (cites e28): related Day-Ahead Market (DAM): A Resource with a Three-Part Supply Offer cleared in the DAM that later receives a RUC commitment for the awarded hour is settled under the Day-Ahead Make-Whole Settlements section. [e28]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) If ERCOT commits a unit out of market and its revenue does not cover its allowable costs, ERCOT makes it whole, and if its revenues exceed its RUC Guarantee, it pays a clawback charge. Short QSEs pay first and the balance is spread across load; a QSE can opt out of both by buying back the commitment.

