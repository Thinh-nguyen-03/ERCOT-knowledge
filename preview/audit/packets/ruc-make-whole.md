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

## Statements to check

- **Definition #1** (cites e1, e2): A RUC Make-Whole Payment is what ERCOT pays a QSE to reimburse allowable startup and minimum-energy costs of a Resource that energy and Ancillary Service revenue did not cover, when the Resource was committed by RUC and the QSE did not opt out of RUC Settlement, or when it was committed by the DAM. [e1] A RUC Clawback Charge is the reverse: the QSE pays when the RUC Guarantee is less than the sum of the RUC Minimum-Energy Revenue and the two revenue-less-cost amounts listed in Section 5.7.2. [e2]
- **How it works #1** (cites e5, e2, e6): ERCOT calculates a make-whole payment per Operating Day for each RUC-committed Resource, whether committed by DRUC or HRUC, when revenue falls short of cost. [e5] The QSE pays the clawback charge for the Operating Day if the RUC Guarantee is less than the sum of the RUC Minimum-Energy Revenue and the two revenue-less-cost amounts. [e2] The revenues from all clawback charges are paid back to all QSEs on a Load Ratio Share basis as the RUC Clawback Payment. [e6]
- **How it works #2** (cites e3, e4): The cost of make-whole payments is recovered in two steps. QSEs that were capacity-short in a RUC are charged first, in proportion to their shortfall and subject to a cap. [e3] Any remainder in a 15-minute Settlement Interval is uplifted to all QSEs on a Load Ratio Share basis. [e4]
- **ERCOT context #1** (cites e7, e8): The IMM reports 5,129 resource-hours of RUC instructions in 2025, up 176% from 2024, with congestion behind about 77% of them. [e7] Make-whole payments exceeded $21 million in 2025 against only $4.5 million of clawbacks. [e8]
- **ERCOT context #2** (cites e9, e10): Rules changed in 2024. The IMM's 2024 report says that prior to 2024, RUC-committed resources with valid day-ahead offers faced only a 50% clawback of revenue above cost. [e9] It also says the PUCT approved NPRR 1172 and that it took effect on March 1, 2024. [e10] The two IMM reports describe its clawback change differently (see Open items).
- **Key facts #1** (cites e1): - Make-whole covers startup and minimum-energy costs not recovered in revenue. [e1]
- **Key facts #2** (cites e3, e4): - Capacity-short QSEs are charged first, subject to a cap; the rest is uplifted by LRS. [e3][e4]
- **Key facts #3** (cites e6): - Clawback revenue is paid to all QSEs by LRS. [e6]
- **Key facts #4** (cites e8): - 2025: make-whole above $21 million; clawbacks $4.5 million. [e8]
- **Key facts #5** (cites e9, e10): - Per the IMM's 2024 report, NPRR 1172 took effect March 1, 2024; before 2024 the clawback was 50% for resources with valid day-ahead offers. [e9][e10]
- **Common confusion #1** (cites e1, e4, e6): The make-whole payment is not a payment for the energy; it only covers shortfalls against allowable costs. [e1] The clawback payment to QSEs is also separate from the uplift charge, though both use Load Ratio Share. [e4][e6]
- **Questions #2** (cites e3, e4): First QSEs that were capacity-short, then all QSEs by Load Ratio Share. [e3][e4]
- **Questions #4** (cites e9, e10): Per the IMM's 2024 report, NPRR 1172 took effect on March 1, 2024; before 2024, resources with valid day-ahead offers faced only a 50% clawback. [e9][e10] The saved IMM reports describe the new clawback differently (see Open items).
- **Questions #6** (cites e1): The make-whole definition applies to a RUC-committed Resource only if the QSE has not elected to opt out of RUC Settlement; whether opt-out also avoids clawback was not quoted here. [e1]
- **Link to ruc** (cites e1): prerequisite-of RUC (Reliability Unit Commitment: DRUC/HRUC): Make-whole and clawback settle resources that ERCOT commits through RUC. [e1]
- **Link to uplift** (cites e4): causes Uplift: Make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e4]
- **Link to qse** (cites e1, e2, e3): related QSE (Qualified Scheduling Entity): Make-whole payments are paid to QSEs, and clawback and capacity-short charges are charged to QSEs. [e1][e2][e3]
- **Link to load-ratio-share** (cites e4, e6): used-in Load Ratio Share (LRS): The uplift charge and the clawback payment are both allocated on a Load Ratio Share basis. [e4][e6]
- **Link to congestion** (cites e7): related Transmission Congestion: The IMM says congestion accounted for about 77% of 2025 RUC commitments. [e7]
- **Link to imm** (cites e8): related Independent Market Monitor (Potomac Economics): The IMM reports the 2025 make-whole and clawback amounts. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) If ERCOT commits a unit out of market and its revenue does not cover its costs, ERCOT makes it whole, and if its revenues exceed its RUC Guarantee, it pays a clawback charge. Short QSEs pay first and the balance is spread across load.

