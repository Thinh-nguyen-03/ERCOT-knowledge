---
id: ruc
name: "RUC (Reliability Unit Commitment: DRUC/HRUC)"
aliases: [RUC, DRUC, HRUC, WRUC, Reliability Unit Commitment, Day-Ahead RUC, Hourly RUC]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: dam
    type: related
    note: The DRUC runs after the DAM closes and uses Three-Part Supply Offers that were considered in the DAM but not awarded. [e15][e3]
  - to: ruc-make-whole
    type: determines
    note: A RUC-committed Resource whose revenues fall short of its costs gets a RUC Make-Whole Payment, unless its QSE opted out. [e5][e6]
  - to: sced
    type: contrasts-with
    note: RUC recommends commitment of Generation Resources; see the SCED topic for dispatch. [e7]
  - to: ordc
    type: related
    note: The IMM says the Reliability Deployment Price Adder adjusts prices for the price-suppressing effects of RUC and other out-of-market actions. [e9]
  - to: market-power-mitigation
    type: related
    note: A unit that receives a RUC instruction and must resolve a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e10]
  - to: three-part-supply-offer
    type: related
    note: The DRUC uses the Three-Part Supply Offers submitted to the DAM. [e3]
  - to: rmr
    type: related
    note: RMR Units cannot opt out of RUC Settlement. [e25]
  - to: energy-storage-resource
    type: related
    note: ESR state of charge is built into the RUC engine and ESRs get no RUC make-whole payment. [e23][e5]
  - to: load-ratio-share
    type: related
    note: Make-whole costs not covered by capacity-short charges are uplifted on a Load Ratio Share basis. [e61]
  - to: rtc-b
    type: related
    note: NPRR 1236 changed RUC capacity-short calculations as part of RTC+B. [e50]
  - to: uplift
    type: related
    note: RUC make-whole costs end up as uplift to QSEs after capacity-short charges. [e34]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Reliability Unit Commitment (RUC)"
    quote: "A process to ensure that there is adequate Resource capacity and Ancillary Service capacity committed in the proper locations to serve ERCOT forecasted Load."
  - id: e2
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (2)"
    quote: "ERCOT shall conduct at least one Day-Ahead Reliability Unit Commitment (DRUC) and at least one Hourly Reliability Unit Commitment (HRUC) before each hour of the Operating Day. ERCOT, in its sole discretion, may conduct a RUC at any time to evaluate and resolve reliability issues."
  - id: e3
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (4)"
    quote: "The DRUC uses Three-Part Supply Offers, capped at the maximum of generic or verifiable minimum energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM."
  - id: e15
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (3)"
    quote: "The DRUC must be run after the close of the Day-Ahead Market (DAM)."
  - id: e4
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (5)"
    quote: "ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information."
  - id: e5
    source: np-05
    locator: "Section 5.7.1, RUC Make-Whole Payment, paragraph (1)"
    quote: "To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR)."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Reliability Unit Commitment (RUC) Buy-Back Hour"
    quote: "An Operating Hour for which a Resource that is not a Reliability Must-Run (RMR) Unit has been committed to come On-Line by a Day-Ahead Reliability Unit Commitment (DRUC) or Hourly Reliability Unit Commitment (HRUC) process and the Resource’s Qualified Scheduling Entity (QSE) has chosen to opt out of RUC Settlement in accordance with Section 5.5.2, Reliability Unit Commitment (RUC) Process."
  - id: e7
    source: np-05
    locator: "Section 5.5.2, RUC Process, paragraph (1)"
    quote: "The RUC process recommends commitment of Generation Resources, to match ERCOT’s forecasted Load including Direct Current Tie (DC Tie) Schedules and RUC Ancillary Service Demand Curves (ASDCs), subject to all transmission constraints and Resource performance characteristics. The RUC process takes into account Resources already committed in the Current Operating Plans (COPs), Resources already committed in previous RUCs, and Off-Line Available Resources having a start-up time of one hour or less."
  - id: e8
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (11)"
    quote: "After the use of market processes to the fullest extent practicable without jeopardizing the reliability of the ERCOT System, any ERCOT Dispatch Instructions for additional capacity that order a QSE to commit a specific Generation Resource to be On-Line shall be considered a RUC Dispatch for the purpose of the Settlement of payments and charges related to the committed Generation Resource. An Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice requesting the available capacity of any currently available Generation Resources but not naming specific Generation Resources is not considered a RUC Dispatch for purposes of Settlement."
  - id: e9
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, Shortage and Reliability Pricing, 2. RDPA"
    quote: "The Reliability Deployment Price Adder adjusts prices to account for the price-suppressing effects of ERCOT’s out-of-market reliability actions. Actions such as Reliability Unit Commitments (RUCs) and deployment of ERS demand response can artificially lower prices by increasing supply or reducing demand outside the normal market process."
  - id: e10
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section E, Market Power Mitigation"
    quote: "When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constraint, ERCOT often dispatches it in real time with its offer prices capped at mitigated levels."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "The increase in RUC commitments corresponds to higher make-whole payments, which exceeded $21 million in 2025. The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement."
  - id: e13
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "Over the longer term, RUC activity in the last five years has been significantly higher than the norm before Winter Storm Uri. For example, annual resource-hours committed through RUC ranged from 202 to 613 from 2017 through 2020, whereas annual RUC commitments have consistently totaled thousands of hours since 2021."
  - id: e14
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "One factor increasing RUC commitments is the incorporation of ESR state of charge (SOC) into the RUC engine under NPRR 1186, which ERCOT implemented in summer 2024."
  - id: e16
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e17
    source: imm-som-2025
    locator: "Market Operations chapter, A. Summary of Market Operations Results in 2025"
    quote: "Although such interventions are sometimes necessary, persistent reliance on them indicates a misalignment between market design and system operations."
  - id: e18
    source: np-02
    locator: "Section 2.1, definition of Weekly Reliability Unit Commitment (WRUC)"
    quote: "An instruction issued by ERCOT prior to 1330 in the Day-Ahead for an Operating Day that reserves a Generation Resource that requires a longer lead time for startup than possible from the DRUC."
  - id: e19
    source: np-05
    locator: "Section 5.1, paragraph (13)(b)"
    quote: "ERCOT will commit the Resource as part of the DRUC process for the relevant Operating Day for all WRUC-instructed hours not DAM-committed or QSE self-committed. For all purposes, including RUC Settlement, the Resource will be considered as committed by the DRUC for these hours."
  - id: e20
    source: np-05
    locator: "Section 5.1, paragraph (6)"
    quote: "The RUC Study Period for DRUC is the next Operating Day. The RUC Study Period for HRUC is the balance of the current Operating Day plus the next Operating Day if the DRUC for the Operating Day has been solved."
  - id: e21
    source: np-05
    locator: "Section 5.2.2.1, paragraph (1)"
    quote: "If the Day-Ahead Market (DAM) execution is delayed in accordance with Section 4.1.2, Day-Ahead Process and Timing Deviations, ERCOT shall conduct a Day-Ahead Reliability Unit Commitment (DRUC) after 1430 in the Day-Ahead and no earlier than one hour following the posting of DAM awards information on the ERCOT website as set forth in Section 4.5.3, Communicating DAM Results."
  - id: e22
    source: np-05
    locator: "Section 5.2.2.2, paragraph (1)"
    quote: "If ERCOT aborts all or part of the Day-Ahead process in accordance with Section 4.1.2, Day-Ahead Process and Timing Deviations, for any reason not due to a Market Suspension, then ERCOT shall use the Hourly Reliability Unit Commitment (HRUC) process described in this Section in lieu of the DRUC process."
  - id: e23
    source: np-05
    locator: "Section 5.5.2, paragraph (8)"
    quote: "The RUC constraints in the RUC engine shall use 60 minutes as the duration for energy and Ancillary Services, excluding Responsive Reserve (RRS) provided using Fast Frequency Response (FFR), for which duration shall be 15 minutes. These same duration requirements will be used to enforce a constraint on each ESR’s dispatch for energy and Ancillary Services using Ancillary Service deployment factors for a given hour such that the calculated SOC at the end of that hour is equal to the next hour’s COP value of HBSOC."
  - id: e24
    source: np-05
    locator: "Section 5.5.2, paragraph (10)"
    quote: "ERCOT shall review the RUC-recommended Resource commitments and the list of Off-Line Available Resources having a start-up time of one hour or less to assess feasibility and shall make any changes that it considers necessary, in its sole discretion."
  - id: e25
    source: np-05
    locator: "Section 5.5.2, paragraph (21)"
    quote: "A QSE with a Resource that is not a Reliability Must-Run (RMR) Unit or has not received an Outage Schedule Adjustment (OSA) that has been committed in a DRUC or HRUC process may opt out of the RUC Settlement (or “buy back” the commitment) by setting the COP status of the RUC-committed Resource to ONOPTOUT for the first hour of a contiguous block of RUC-Committed Hours in the Opt Out Snapshot."
  - id: e26
    source: np-05
    locator: "Section 5.5.2, paragraph (21)"
    quote: "A QSE that opts out of RUC Settlement forfeits RUC Settlement for the affected Resource for a given block of RUC Buy-Back Hours. A QSE that opts out of RUC Settlement treatment must make the Resource available to SCED for all RUC Buy-Back Hours."
  - id: e27
    source: np-05
    locator: "Section 5.6.1, paragraph (2)"
    quote: "Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs."
  - id: e28
    source: np-05
    locator: "Section 5.6.1, paragraph (2)"
    quote: "A QSE or Resource Entity may file verifiable unit-specific costs for a Resource at any time, but it must file those costs no later than 30 days after five Reliability Unit Commitment (RUC) events for that Resource in a calendar year."
  - id: e29
    source: np-05
    locator: "Section 5.6.2, paragraph (1)"
    quote: "For purposes of this Section 5.6.2, all contiguous RUC-Committed Hours are considered as one RUC instruction. For each Resource, only one Startup Cost is eligible per block of contiguous RUC-Committed Hours."
  - id: e30
    source: np-05
    locator: "Section 5.6.2, paragraph (2)(c)"
    quote: "The generation breakers must have been open, as indicated by a telemetered Resource Status of Off-Line, for at least five minutes during the six hours preceding the first RUC-Committed Hour; and"
  - id: e31
    source: np-05
    locator: "Section 5.7.1.1, paragraph (1)"
    quote: "The allowable Startup Costs and minimum-energy costs of a Resource committed by RUC is the RUC Guarantee. The RUC Guarantee minimum-energy costs are prorated according to the actual generation when the Resource’s average output during a 15-minute Settlement Interval is below the corresponding LSL."
  - id: e32
    source: np-05
    locator: "Section 5.7.2, paragraph (1)"
    quote: "A QSE for a Resource shall pay a RUC Clawback Charge for the Operating Day if the RUC Guarantee is less than the sum of:"
  - id: e33
    source: np-05
    locator: "Section 5.7.2, paragraph (3)"
    quote: "ESRs are not subject to RUC Clawback Charges."
  - id: e34
    source: np-05
    locator: "Section 5.7.4, paragraph (1)"
    quote: "All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge."
  - id: e35
    source: np-05
    locator: "Section 5.7.4.1, paragraph (1)"
    quote: "The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE’s capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for the RUC process."
  - id: e36
    source: np-05
    locator: "Section 5.7.4.1.1, paragraph (3)"
    quote: "In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Intermittent Renewable Resources (IRRs) that were given notice of decommitment within the two hours before the Operating Hour as a result of the RUC process by setting the RCAPSNAP and RCAPADJ variables used below set equal to the RCAPSNAP value for the Resource immediately before the decommitment instruction was given."
  - id: e37
    source: np-05
    locator: "Section 5.8, paragraph (1)"
    quote: "ERCOT shall report to the Technical Advisory Committee (TAC), each January, an assessment of market impacts and Settlements for the aggregate Reliability Unit Commitment (RUC) activity, delineated by type of RUC instruction as follows:"
  - id: e38
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter, Table 7"
    quote: "Table 7: Magnitude of RUC Activity 2021-2025 Active Resource- RUC LSL Hours Hours Capacity-Hours (MWh) 2021 1,187 3,863 257,603 2022 2,139 7,910 609,322 2023 975 2,501 155,553 2024 1,066 1,861 191,393 2025 1,820 5,129 364,991"
  - id: e39
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, Table 8"
    quote: "Table 8: Reported Reason for RUC 2021-2025 Congestion Capacity Frequency (%) 2021 9 91 2022 18 82 2023 8 92 2024 34 66 2025 77 23"
  - id: e40
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, Table 9 (columns: opt-out frequency %, claw-back $ millions, make-whole $ millions)"
    quote: "2021 39 $3.09 $5.38 2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84"
  - id: e41
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, 5. RUC Settlement"
    quote: "In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement."
  - id: e42
    source: imm-som-2025
    locator: "page 103 (OCR), Market Operations chapter"
    quote: "NPRR 1214, submitted in December 2023, seeks to address this shortcoming of the RDPA by producing price adders that vary across nodes to reduce out-of-market make-whole payments for resources committed through RUC to manage local transmission issues. This NPRR has been tabled at PRS since May 2025 as ERCOT was focused on implementing RTC"
  - id: e43
    source: imm-som-2025
    locator: "page 103 (OCR), Market Operations chapter"
    quote: "The RDPA is intended to address this price suppression, but it currently does not address local nodal price effects. As a result, the RDPA does not significantly increase energy prices unless the commitments affect system-wide prices."
  - id: e44
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide"
    quote: "There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effective Resource-hours in the summer of 2024."
  - id: e45
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide"
    quote: "In summer 2026, 17% of RUC effective Resource-hours were nominally attributed to congestion. In 2025, that number was 100%."
  - id: e46
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide, key takeaway"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e47
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide, footnote"
    quote: "“Effective Resource-hours” excludes any period during a RUC-instructed hour when the committed Resource was starting up, shutting down, off-line, or otherwise not available for dispatch by SCED."
  - id: e48
    source: ercot-monthly-ops-2026-10
    locator: "ERCOT monthly operations report, October 2026, RUC slide"
    quote: "There were 165.6 RUC total effective Resource-hours in October. 164.7 hours (99.4%) were committed to address capacity concerns and 0.9 (0.6%) were committed to alleviate congestion."
  - id: e49
    source: imm-som-tac-2026-07
    locator: "IMM presentation to TAC, August 13, 2026, RUC trends slide"
    quote: "One legitimate and growing challenge for ERCOT in using RUC appropriately is the (in)accuracy of the forecast for battery State of Charge"
  - id: e50
    source: ercot-rtcb-battery
    locator: "RTC+B deck, High Level Scope of +B"
    quote: "NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024)"
  - id: e51
    source: imm-som-2025
    locator: "page 71 (OCR), Ancillary Services chapter"
    quote: "ERCOT operations, however, has signaled skepticism about this feature of RTC and indicated that it intends to use reliability unit commitment (RUC) instructions to increase operating reserves when the market does not procure the full AS Plan. To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269."
  - id: e52
    source: np-05
    locator: "Section 5.5.2, paragraph (20)(d)"
    quote: "For the HRUC, DRUC, and Weekly Reliability Unit Commitment (WRUC) processes, a feasibility check on the COP submitted HBSOC will be performed. This check may adjust the HBSOC used in the RUC process."
  - id: e53
    source: np-05
    locator: "Section 5.7.1, paragraph (1), pending box NPRR1309 (not yet in effect)"
    quote: "ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR) or for Dispatchable Reliability Reserve Service (DRRS) deployments."
  - id: e54
    source: np-05
    locator: "Section 5.5.2, paragraph (4)"
    quote: "QSGRs with a Resource Status of OFFQS shall only be committed by ERCOT through a RUC instruction in instances when a reliability issue would not otherwise be managed through Dispatch Instructions from Security-Constrained Economic Dispatch (SCED)."
  - id: e55
    source: np-05
    locator: "Section 5.5.2, paragraph (9)"
    quote: "ERCOT may only decommit a Resource to resolve transmission constraints that are otherwise unresolvable. Qualifying Facilities (QFs) may be decommitted only after all other types of Resources have been assessed for decommitment."
  - id: e56
    source: np-05
    locator: "Section 5.5.2, paragraph (14)(a)"
    quote: "If the QSE has provided the ERCOT Operator notice of that limitation at least seven days prior to the Operating Day in which the instruction occurs, the QSE shall be excused from complying with the portion of the RUC Dispatch Instruction that it could not meet due to the identified limitation."
  - id: e57
    source: np-05
    locator: "Section 5.6.2, paragraph (3)"
    quote: "the QSE of a RUC-committed Resource may submit a Settlement dispute for a Resource’s Startup Costs in the Operating Day, per RUC instruction, to be included in the calculation of the RUC guarantee for that Operating Day if the startup time for the RUC-committed Resource is greater than six hours."
  - id: e58
    source: np-06
    locator: "Section 6.5.7.3.1, paragraph (1)(a)"
    quote: "The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process;"
  - id: e59
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter, 1. Overview"
    quote: "The vast majority of RUC instructions come through the HRUC process. For resources that submitted a valid three-part offer in the day-ahead market, RUC uses those offers. For all other resources, RUC uses either verifiable cost data or, if verifiable cost data are unavailable, generic cost data for different resource classes."
  - id: e60
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter"
    quote: "Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes."
  - id: e61
    source: np-05
    locator: "Section 5.7.4.2, paragraph (1)"
    quote: "If the revenues from the charges under Section 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows:"
  - id: e62
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide, footnote"
    quote: "* August data for each year goes through 8/15."
  - id: e63
    source: imm-som-2025
    locator: "page 30 (OCR), Chapter I.D, 1. ORDC"
    quote: "In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e64
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, 5. RUC Settlement"
    quote: "The most likely explanation for the even lower level of opt-outs in 2025 is that market prices were not expected to be high enough to warrant opting out."
---

## Definition

Reliability Unit Commitment (RUC) is the process ERCOT uses to ensure there is adequate Resource capacity and Ancillary Service capacity committed in the proper locations to serve its forecasted Load. [e1]

## How it works

ERCOT runs at least one Day-Ahead RUC (DRUC) and at least one Hourly RUC (HRUC) before each hour of the Operating Day, and may run a RUC at any time to deal with reliability issues. [e2] The DRUC runs after the DAM closes and uses Three-Part Supply Offers that were submitted to the DAM, considered there, but not awarded. [e15][e3] The HRUC starts at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and Outage information. [e4]

The RUC recommends commitments of Generation Resources to match forecast Load, including DC Tie Schedules, and the RUC Ancillary Service Demand Curves, subject to transmission constraints and Resource performance. It starts from Resources already committed in COPs and previous RUCs and from Off-Line Available Resources with a start-up time of one hour or less. [e7] Any ERCOT instruction that orders a QSE to commit a named Generation Resource, after the market has been used as far as practicable, is a RUC Dispatch for Settlement purposes. [e8]

A RUC-committed Resource whose revenues fall short of its costs receives a RUC Make-Whole Payment for that Operating Day, whether it came from DRUC or HRUC, but not an ESR. [e5] A QSE can instead opt out of RUC Settlement unless the Resource is an RMR Unit or has received an OSA, and the Operating Hours for which it does so are RUC Buy-Back Hours. [e25][e6] An opt-out forfeits RUC Settlement for that block of hours and requires the Resource to be available to SCED for all of them. [e26]

### Timeline, WRUC and deviations

Before 1330 in the Day-Ahead ERCOT may issue a Weekly RUC (WRUC) instruction, which reserves a Generation Resource that needs a longer startup lead time than the DRUC allows. [e18] ERCOT commits the Resource in the DRUC for WRUC-instructed hours that are not DAM-committed or self-committed, and for RUC Settlement it is treated as DRUC-committed. [e19] The DRUC Study Period is the next Operating Day; the HRUC Study Period is the rest of the current day plus the next day if that day's DRUC has been solved. [e20] If the DAM is delayed, the DRUC runs after 1430 and at least an hour after DAM awards post. [e21] If the Day-Ahead process is aborted for a reason other than a Market Suspension, the HRUC is used instead of the DRUC. [e22]

### Engine rules and edge cases (np-05 Section 5.5.2)

The RUC engine uses 60 minutes as the duration for energy and Ancillary Services, and 15 minutes for RRS provided by Fast Frequency Response; ESR dispatch is constrained so the end-of-hour state of charge equals the next hour's COP HBSOC. [e23] A feasibility check on COP-submitted HBSOC can adjust the HBSOC used. [e52] ERCOT reviews the engine's commitments and may change them in its sole discretion. [e24] Quick Start Generation Resources with status OFFQS are committed through RUC only when a reliability issue would not otherwise be managed through SCED dispatch. [e54] ERCOT may decommit a Resource through RUC only to resolve otherwise unresolvable transmission constraints, and Qualifying Facilities only after all other types have been assessed. [e55] A QSE that gave notice of a physical limitation at least seven days ahead is excused from the part of an instruction it could not meet. [e56]

### Cost eligibility (Section 5.6)

RUC cost inputs come from the Three-Part Supply Offer where one was submitted to the DAM, otherwise from verifiable costs or generic class costs (IMM description). [e59] Make-whole is based on Startup and Minimum-Energy Offers limited by caps: the generic category caps until ERCOT approves unit-specific verifiable costs, then those costs. [e27] Unit-specific costs must be filed within 30 days after five RUC events for that Resource in a calendar year. [e28] Only one Startup Cost is eligible per block of contiguous RUC-Committed Hours, and among other criteria the breakers must have been open at least five minutes in the six hours before the first RUC hour. [e29][e30] A QSE can dispute startup cost eligibility where the startup time exceeds six hours. [e57]

### Settlement flow (Section 5.7; formulas are in the ruc-make-whole topic)

The RUC Guarantee is the allowable Startup and minimum-energy costs, with minimum-energy costs prorated when output in a 15-minute interval is below LSL. [e31] A QSE pays a RUC Clawback Charge if the Guarantee is less than the sum of its revenue items; ESRs are not subject to it. [e32][e33] Capacity-short QSEs are charged first, subject to a cap of twice the total make-whole payments times the QSE's shortfall divided by total RUC-committed capacity. [e34][e35] Any remainder is uplifted to all QSEs on a Load Ratio Share basis. [e61] A QSE gets a capacity credit for non-IRR Resources notified of decommitment within two hours before the Operating Hour. [e36] ERCOT reports annually to TAC each January on RUC activity by type of instruction. [e37]

Pending: a box in Section 5.7.1 (NPRR1309) would also exclude Dispatchable Reliability Reserve Service deployments from make-whole payments. It was not yet in effect in the saved text. [e53]

### Link to prices

The Real-Time Reliability Deployment Price Adder counts RUC-committed Resources, except those whose QSEs opted out of RUC Settlement. [e58] The IMM says the RDPA does not address local nodal price effects and so does not significantly raise prices unless commitments affect system-wide prices; it notes NPRR 1214, tabled at PRS since May 2025, would produce nodal adders. [e43][e42]

## ERCOT context

The IMM treats RUC as an out-of-market reliability action [e9] and says persistent reliance on out-of-market interventions indicates a misalignment between market design and system operations. [e17] In 2025 ERCOT issued RUC instructions for 5,129 resource-hours, 176% more than in 2024, and about 77% were for congestion. [e11] Make-whole payments exceeded $21 million in 2025, helped by more RUC use and fewer opt-outs. [e12] Since 2021 annual RUC commitments have totaled thousands of hours, against 202 to 613 per year from 2017 through 2020. [e13]

The IMM's August 2026 presentation to TAC calls the inaccuracy of the battery state-of-charge forecast a legitimate and growing challenge in using RUC appropriately. [e49] One driver the IMM names is ESR state of charge being fed into the RUC engine under NPRR 1186, implemented in summer 2024. [e14] The IMM says RUC can artificially lower prices by increasing supply outside the normal market process, which the Reliability Deployment Price Adder adjusts for. [e9] When a RUC-committed unit must resolve a non-competitive constraint, it is often dispatched in real time with offers capped at mitigated levels. [e10]

## Timeline

- 2017-2020: 202 to 613 RUC resource-hours a year; since 2021 thousands. [e13]
- 2024: NPRR 1172 imposed a full rather than partial claw-back on opt-outs, and opt-outs fell to 8% (IMM). [e41][e40]
- Summer 2024: ESR SOC added to the RUC engine under NPRR 1186. [e14]
- November 2024: NPRR 1236 (RTC+B changes to RUC capacity-short calculations) approved. [e50]
- December 5, 2025: RTC went live (IMM); the IMM says ERCOT operations signalled it would use RUC to add reserves when AS is not fully procured. [e63][e51]
- Summer 2026: 1,313 effective RUC Resource-hours, 17% nominally attributed to congestion (100% in summer 2025), which ERCOT says was largely to address capacity needs, particularly Ancillary Service quantities; the slide's August data goes through 8/15. [e44][e45][e46][e62]
- October 2026: 165.6 effective RUC Resource-hours, 99.4% for capacity. [e48]

## Key facts

- ERCOT runs at least one DRUC and one HRUC before each hour of the Operating Day. [e2]
- The DRUC uses Three-Part Supply Offers that were considered but not awarded in the DAM. [e3]
- 2025 RUC: 5,129 resource-hours, up 176% from 2024; roughly 77% for congestion. [e11]
- 2025 RUC make-whole payments exceeded $21 million. [e12]
- ESRs do not receive a RUC Make-Whole Payment. [e5]
- IMM Table 7 (2021-2025 resource-hours): 3,863; 7,910; 2,501; 1,861; 5,129. [e38]
- Reported reason, congestion share: 9% (2021), 18%, 8%, 34%, 77% (2025). [e39]
- Make-whole ($ millions) 2021-2025: 5.38, 70.13, 3.69, 3.35, 21.84; opt-out frequency 39%, 24%, 23%, 8%, 3%. [e40]
- "Effective" Resource-hours exclude startup, shutdown, off-line and other periods when the unit was not dispatchable by SCED, so ERCOT's 2026 counts are not the same measure as the IMM's resource-hours. [e47]

## Say it like this

RUC is ERCOT's back-stop commitment process: if the market and QSE self-commitments do not put enough of the right units on, ERCOT instructs units on and pays them make-whole if they lose money. It has grown a lot in recent years, and the IMM says congestion accounted for about 77% of 2025 commitments. [e11][e13]

## Common confusion

RUC is not SCED. RUC decides which units are committed, ahead of the hour, while SCED manages energy and Ancillary Services through Base Points approximately every five minutes. [e16] A RUC instruction is not an OCN, Advisory, Watch or Emergency Notice that asks for capacity without naming a Resource; only an instruction naming a specific Generation Resource counts as a RUC Dispatch. [e8]

## Questions

### What is the difference between DRUC and HRUC?

The DRUC must be run after the close of the DAM, while the HRUC is initiated at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and Outage information. [e15][e4]

### Why did the IMM flag RUC in its 2025 report?

RUC instructions rose 176% to 5,129 resource-hours and make-whole payments passed $21 million. [e11][e12] The IMM says persistent reliance on out-of-market interventions indicates a misalignment between market design and system operations. [e17]

### Can a QSE avoid RUC settlement?

Usually: it can opt out, making the hours RUC Buy-Back Hours, unless the Resource is an RMR Unit or got an OSA. [e25][e6] The IMM notes that in 2025 fewer resources opted out, which is part of why make-whole payments rose. [e12]

### Why did RUC volume change character in 2025 and 2026?

In 2025 the IMM reports 77% of commitments were reported as congestion, up from 34% in 2024. [e39] In summer 2026 ERCOT reports 17% congestion and attributes the activity mostly to capacity, particularly Ancillary Service quantities. [e45][e46] The IMM's account of the link is that operations indicated it would use RUC to add reserves when the market does not procure the full AS Plan. [e51]

### Why might a QSE opt out of RUC settlement?

The IMM describes opting out as self-committing the unit and accepting full exposure to market outcomes, forgoing both the make-whole payment and any clawback. [e60] The IMM says the most likely explanation for the lower opt-outs in 2025 (3%, per its Table 9) is that market prices were not expected to be high enough to warrant opting out. [e64][e40]

### What if a Resource cannot start in time for a RUC instruction?

If the QSE gave at least seven days' notice of the limitation, it is excused from the part it could not meet. [e56]

## Scenarios

### HRUC commits a unit for a local constraint. What are the money flows?

Suppose a unit is committed by HRUC for congestion and does not opt out. It is paid make-whole if revenues are below its guarantee, or pays clawback if above. [e5][e32] Capacity-short QSEs are charged first and the rest is uplifted by load ratio share. [e34] The adder may not raise prices much if the effect is local. [e43]

## Open items

- Resolved 2026-11-21: the 3% (2025) and 8% (2024) opt-out figures are now quoted from the OCR copy (Table 9).
- The normal DRUC and HRUC clock times sit in the Section 5.2.1 timeline figure, which did not extract; only the delayed-DAM case (after 1430) is quoted.
- The Section 5.7.1 make-whole formulas are covered in the ruc-make-whole topic, not repeated here.
- Pending NPRR1309 language adds DRRS to the RUC process in several places; only the make-whole exclusion is noted above and none of it is in effect.
- NPRR1236 is listed as approved in November 2024 in the RTC+B deck, but its protocol text on capacity-short calculations was not found or quoted here.
- Section 6.5.7.3.1 cites paragraph (14) of Section 5.5.2 for the RUC opt-out, but in the saved np-05 the opt-out is paragraph (21); the cross-reference looks stale.
- The IMM's August 2026 TAC slides mention battery state-of-charge forecast error as a RUC challenge, but no source quantifies it.
