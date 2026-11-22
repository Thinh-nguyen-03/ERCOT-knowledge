# Audit packet: RUC (Reliability Unit Commitment: DRUC/HRUC) (ruc)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.1, Introduction, paragraph (4) · text copy line 101 · heading above: 5.1 Introduction

BEFORE: …it Commitment (DRUC) and at least one Hourly Reliability Unit Commitment (HRUC) before each hour of the Operating Day. ERCOT, in its sole discretion, may conduct a RUC at any time to evaluate and resolve reliability issues. (3) The DRUC must be run after the close of the Day-Ahead Market (DAM). (4) 
QUOTE: The DRUC uses Three-Part Supply Offers, capped at the maximum of generic or verifiable minimum energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM.
AFTER:  A QSE may not submit a Three-Part Supply Offer to be considered in the DRUC unless the offer was also submitted for consideration in the DAM. (5) ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and u…

### e15 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.1, Introduction, paragraph (3) · text copy line 99 · heading above: 5.1 Introduction

BEFORE: …curtailed. (2) ERCOT shall conduct at least one Day-Ahead Reliability Unit Commitment (DRUC) and at least one Hourly Reliability Unit Commitment (HRUC) before each hour of the Operating Day. ERCOT, in its sole discretion, may conduct a RUC at any time to evaluate and resolve reliability issues. (3) 
QUOTE: The DRUC must be run after the close of the Day-Ahead Market (DAM).
AFTER:  (4) The DRUC uses Three-Part Supply Offers, capped at the maximum of generic or verifiable minimum energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM. A QSE may not submit a Three-Part Supply Offer to…

### e5 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, RUC Make-Whole Payment, paragraph (1) · text copy line 822 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …laneous Invoice to charge the QSE representing the Resource that has received an OSA the excess revenues not clawed back in RUC Settlements. (2) All clawed back revenues will be paid to QSEs based on a 15-minute Load-Ratio Share basis. 5.7 Settlement for RUC Process 5.7.1 RUC Make-Whole Payment (1) 
QUOTE: To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR).
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Reliability Unit Commitment (RUC) Buy-Back Hour · text copy line 2369

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Reliability Unit Commitment (RUC) Buy-Back Hour 
QUOTE: An Operating Hour for which a Resource that is not a Reliability Must-Run (RMR) Unit has been committed to come On-Line by a Day-Ahead Reliability Unit Commitment (DRUC) or Hourly Reliability Unit Commitment (HRUC) process and the Resource's Qualified Scheduling Entity (QSE) has chosen to opt out of RUC Settlement in accordance with Section 5.5.2, Reliability Unit Commitment (RUC) Process.
AFTER:  Reliability Unit Commitment (RUC) Cancellation An ERCOT instruction, prior to breaker close, to cancel a previously issued RUC instruction. Reliability Unit Commitment (RUC)-Committed Hour An Operating Hour for which a RUC has committed a Resource to be On-Line and the QSE has not designated a RUC …

### e7 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, RUC Process, paragraph (1) · text copy line 272 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.5.2 Reliability Unit Commitment (RUC) Process (1) 
QUOTE: The RUC process recommends commitment of Generation Resources, to match ERCOT's forecasted Load including Direct Current Tie (DC Tie) Schedules and RUC Ancillary Service Demand Curves (ASDCs), subject to all transmission constraints and Resource performance characteristics. The RUC process takes into account Resources already committed in the Current Operating Plans (COPs), Resources already committed in previous RUCs, and Off-Line Available Resources having a start-up time of one hour or less.
AFTER:  For On-Line Energy Storage Resources (ESRs), using RUC duration requirements for energy and Ancillary Services, RUC-projected dispatch for energy and Ancillary Service in one interval shall respect the ESR's minimum and maximum State of Charge (SOC) values from the COP, while incorporating any adju…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, Shortage and Reliability Pricing, 2. RDPA · text copy line 1828

BEFORE: …Nb D" <=<< <=<? <=<@ <=<A !4R6"#D 789AW !"CD!4R6"#D789AW !"CD!;;D789AW .D/#ADM1O .D/#ADM1O ACD CIe(F GG# CAC (G !%CcG( !#Ac%" !CDcCD !CCc"G !DcDA !GceA !Ac%e !CcDG !"cD( !"c"D !CF !C( !CD C( !% C" !A ( !# " !"#A%C#D()*HD!,,#AD-.D/#ADM1O3 #" !" *H, J./ MHN O3N MH4 *R, *RS OR7 8.3 9:; <=> ?.: 2. RDPA 
QUOTE: The Reliability Deployment Price Adder adjusts prices to account for the price-suppressing effects of ERCOT's out-of-market reliability actions. Actions such as Reliability Unit Commitments (RUCs) and deployment of ERS demand response can artificially lower prices by increasing supply or reducing demand outside the normal market process.
AFTER:  The RDPA corrects this suppression by increasing real-time prices when these actions occur, ensuring prices continue to reflect true market conditions and reliability risks. 4 "Active" is defined as a settlement interval where the ORDC price was at least $0.01 per MWh. 8 | 2025 State of the Market …

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section E, Market Power Mitigation · text copy line 8657

BEFORE: …n applies whether the unit is self-committed or receives a Reliability Unit Commitment (RUC) instruction. Prior to 2021, ERCOT typically issued RUC instructions to resolve transmission constraints. However, RUCs for system-wide capacity became common in summer 2021 and continued through early 2023. 
QUOTE: When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constraint, ERCOT often dispatches it in real time with its offer prices capped at mitigated levels.
AFTER:  ERCOT's dispatch software includes an automatic two-step mitigation process: 83 • The dispatch software calculates output levels (base points) and prices using participants' offer curves and considering only the "competitive" transmission constraints. In the second step of the dispatch process, the…

### e23 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, paragraph (8) · text copy line 306 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …ngine shall consider a COP Resource Status of ONL for Load Resources that are qualified for Ancillary Services, as being eligible to provide Ancillary Services constrained by the Ancillary Service capability in the COP. The RUC engine will not consider any Load Resources for dispatch of energy. (8) 
QUOTE: The RUC constraints in the RUC engine shall use 60 minutes as the duration for energy and Ancillary Services, excluding Responsive Reserve (RRS) provided using Fast Frequency Response (FFR), for which duration shall be 15 minutes. These same duration requirements will be used to enforce a constraint on each ESR's dispatch for energy and Ancillary Services using Ancillary Service deployment factors for a given hour such that the calculated SOC at the end of that hour is equal to the next hour's COP value of HBSOC.
AFTER:  (9) The RUC process can recommend Resource decommitment. ERCOT may only decommit a Resource to resolve transmission constraints that are otherwise unresolvable. Qualifying Facilities (QFs) may be decommitted only after all other types of Resources have been assessed for decommitment. In addition, t…

### e25 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, paragraph (21) · text copy line 434 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: … used in the RUC process. The feasibility check looks sequentially across all intervals in the RUC Study Period to validate whether a particular interval's COP HBSOC is achievable from the previous interval. If it is not feasible, then RUC will adjust the HBSOC to the closest achievable value. (21) 
QUOTE: A QSE with a Resource that is not a Reliability Must-Run (RMR) Unit or has not received an Outage Schedule Adjustment (OSA) that has been committed in a DRUC or HRUC process may opt out of the RUC Settlement (or "buy back" the commitment) by setting the COP status of the RUC-committed Resource to ONOPTOUT for the first hour of a contiguous block of RUC-Committed Hours in the Opt Out Snapshot.
AFTER:  All the configurations of the same Combined Cycle Train shall be treated as the same Resource for the purpose of creating the block of RUC-Committed Hours. A RUC-committed Combined Cycle Generation Resource may opt out of the RUC Settlement by setting the COP status of any Combined Cycle Generation…

### e34 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4, paragraph (1) · text copy line 1566 · heading above: 5.7.4 RUC Make-Whole Charges

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.4 RUC Make-Whole Charges (1) 
QUOTE: All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge.
AFTER:  (2) On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortf…

### e50 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: RTC+B deck, High Level Scope of +B · text copy line 231

BEFORE: …s Ancillary Service Demand Curves (ASDCs) Ancillary Service Prices 10 High Level Scope of "+B" 1. NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024) 3. 
QUOTE: NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024)
AFTER:  4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optimization (Approved at the ERCOT Board of Directors June 24, 2025) 6. Not part of RTC+B Project.…

### e61 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.2, paragraph (1) · text copy line 2135 · heading above: 5.7.4.2 RUC Make-Whole Uplift Charge

BEFORE: …s for which this RUC Capacity Credit is calculated. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.4.2 RUC Make-Whole Uplift Charge (1) 
QUOTE: If the revenues from the charges under Section 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows:
AFTER:  LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i) Where: RUCMWAMTTOT_(h) = []RUCMWAMTRUCTOT_(ruc,h) RUCCSAMTTOT_(i) = [][]RUCCSAMT_(ruc,i,q) The above variables are defined as follows: ---------------------------------------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to dam** (cites e15, e3): related Day-Ahead Market (DAM): The DRUC runs after the DAM closes and uses Three-Part Supply Offers that were considered in the DAM but not awarded. [e15][e3]
- **Link to ruc-make-whole** (cites e5, e6): determines RUC Make-Whole & Clawback: A RUC-committed Resource whose revenues fall short of its costs gets a RUC Make-Whole Payment, unless its QSE opted out. [e5][e6]
- **Link to sced** (cites e7): contrasts-with SCED (Security-Constrained Economic Dispatch): RUC recommends commitment of Generation Resources; see the SCED topic for dispatch. [e7]
- **Link to ordc** (cites e9): related ORDC (Operating Reserve Demand Curve): The IMM says the Reliability Deployment Price Adder adjusts prices for the price-suppressing effects of RUC and other out-of-market actions. [e9]
- **Link to market-power-mitigation** (cites e10): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): A unit that receives a RUC instruction and must resolve a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e10]
- **Link to three-part-supply-offer** (cites e3): related Three-Part Supply Offer: The DRUC uses the Three-Part Supply Offers submitted to the DAM. [e3]
- **Link to rmr** (cites e25): related RMR (Reliability Must-Run) & Must-Run Alternatives: RMR Units cannot opt out of RUC Settlement. [e25]
- **Link to energy-storage-resource** (cites e23, e5): related Energy Storage Resource (ESR): ESR state of charge is built into the RUC engine and ESRs get no RUC make-whole payment. [e23][e5]
- **Link to load-ratio-share** (cites e61): related Load Ratio Share (LRS): Make-whole costs not covered by capacity-short charges are uplifted on a Load Ratio Share basis. [e61]
- **Link to rtc-b** (cites e50): related RTC+B (Real-Time Co-optimization + Batteries): NPRR 1236 changed RUC capacity-short calculations as part of RTC+B. [e50]
- **Link to uplift** (cites e34): related Uplift: RUC make-whole costs end up as uplift to QSEs after capacity-short charges. [e34]

