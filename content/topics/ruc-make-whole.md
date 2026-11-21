---
id: ruc-make-whole
name: RUC Make-Whole & Clawback
aliases: [RUC make-whole, RUC Make-Whole Payment, RUC Clawback, RUC Clawback Charge, RUC capacity-short charge, RUC opt-out]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ruc
    type: prerequisite-of
    note: Make-whole and clawback settle resources that ERCOT commits through RUC. [e1]
  - to: uplift
    type: causes
    note: Make-whole costs not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e4]
  - to: qse
    type: related
    note: Make-whole payments are paid to QSEs, and clawback and capacity-short charges are charged to QSEs. [e1][e2][e3]
  - to: load-ratio-share
    type: used-in
    note: The uplift charge and the clawback payment are both allocated on a Load Ratio Share basis. [e4][e6]
  - to: congestion
    type: related
    note: The IMM says congestion accounted for about 77% of 2025 RUC commitments. [e7]
  - to: imm
    type: related
    note: The IMM reports the 2025 make-whole and clawback amounts. [e8]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Make-Whole Payment"
    quote: "A payment made by ERCOT to a Qualified Scheduling Entity (QSE) for a Resource to reimburse a QSE for allowable startup and minimum energy costs of a Resource not recovered in energy or Ancillary Service revenue when a Resource is committed by Reliability Unit Commitment (RUC) and the QSE has not elected to opt out of RUC Settlement, or when a Resource is committed by the Day-Ahead Market (DAM)."
  - id: e2
    source: np-05
    locator: "Section 5.7.2, paragraph (1)"
    quote: "A QSE for a Resource shall pay a RUC Clawback Charge for the Operating Day if the RUC Guarantee is less than the sum of: (a) RUC Minimum-Energy Revenue calculated in Section 5.7.1.2, RUC Minimum-Energy Revenue; (b) Revenue Less Cost Above LSL During RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue Less Cost During QSE-Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals."
  - id: e3
    source: np-05
    locator: "Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1)"
    quote: "The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE’s shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap."
  - id: e4
    source: np-05
    locator: "Section 5.7.4, paragraph (1)"
    quote: "All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge."
  - id: e5
    source: np-05
    locator: "Section 5.7.1, paragraph (1)"
    quote: "To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC))."
  - id: e6
    source: np-05
    locator: "Section 5.7.5, paragraph (1)"
    quote: "ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment."
  - id: e7
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e8
    source: imm-som-2025
    locator: "Market Operations, RUC Settlement"
    quote: "Make-whole payments during RUC settlement exceeded $21 million in 2025, while total claw-backs were only $4.5 million."
  - id: e9
    source: imm-som-2024
    locator: "Market Operations, Make-Whole Payments and Clawbacks"
    quote: "Prior to 2024, RUC-committed resources that had submitted valid day-ahead offers were subject to only a 50% clawback of revenues above their costs."
  - id: e10
    source: imm-som-2024
    locator: "Market Operations, Make-Whole Payments and Clawbacks"
    quote: "The PUCT approved NPRR 1172 and it took effect on March 1, 2024."
  - id: e11
    source: np-05
    locator: "Section 5.7.1, RUC Make-Whole Payment, paragraph (1), last sentence"
    quote: "ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR)."
  - id: e12
    source: np-05
    locator: "Section 5.7.1, paragraph (2)"
    quote: "ERCOT shall pay to the Qualified Scheduling Entity (QSE) for the Resource a Make-Whole Payment if the RUC Guarantee calculated in Section 5.7.1.1, RUC Guarantee, is greater than the sum of: (a) RUC Minimum-Energy Revenue calculated in Section 5.7.1.2, RUC Minimum-Energy Revenue; (b) Revenue less cost above Low Sustained Limited (LSL) during RUC-Committed Hours calculated in Section 5.7.1.3, Revenue Less Cost Above LSL During RUC-Committed Hours; and (c) Revenue less cost during QSE Clawback Intervals calculated in Section 5.7.1.4, Revenue Less Cost During QSE Clawback Intervals."
  - id: e13
    source: np-05
    locator: "Section 5.7.1, paragraph (3), formula"
    quote: "RUCMWAMT_(q,r,h) = (-1) * Max (0, RUCG_(q,r,d) – RUCMEREV_(q,r,d) – RUCEXRR_(q,r,d) – RUCEXRQC_(q,r,d)) / RUCHR_(q,r,d)"
  - id: e14
    source: np-05
    locator: "Section 5.7.1, paragraph (3), variable RUCHR"
    quote: "RUC Hour—The total number of RUC-Committed Hours, for Resource r for the Operating Day."
  - id: e15
    source: np-05
    locator: "Section 5.7.1, paragraph (3), variable RUCG"
    quote: "RUC Guarantee—The sum of eligible Startup Costs and minimum-energy costs for Resource r during all RUC-Committed Hours, for the Operating Day."
  - id: e16
    source: np-05
    locator: "Section 5.7.1.1, RUC Guarantee, paragraph (1)"
    quote: "The allowable Startup Costs and minimum-energy costs of a Resource committed by RUC is the RUC Guarantee. The RUC Guarantee minimum-energy costs are prorated according to the actual generation when the Resource’s average output during a 15-minute Settlement Interval is below the corresponding LSL."
  - id: e17
    source: np-05
    locator: "Section 5.7.1.1, paragraph (6)"
    quote: "If a validated Three-Part Supply Offer has been submitted for a Resource for the RUC, then the RUC Guarantee for that Resource is based on the minimum of the Startup Offer in that validated Three-Part Supply Offer and Startup Cap and the lesser of the Minimum-Energy Offer in that validated Three-Part Supply Offer and the Minimum-Energy Offer Cap."
  - id: e18
    source: np-05
    locator: "Section 5.7.1.1, paragraph (6)"
    quote: "If a validated Three-Part Supply Offer has not been submitted for a Resource for the RUC and ERCOT has not yet approved verifiable unit-specific costs for the Resource, then the RUC Guarantee for a Resource is based on the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap."
  - id: e19
    source: np-05
    locator: "Section 5.7.1.2, RUC Minimum-Energy Revenue, paragraph (1)"
    quote: "The energy revenue for a Resource’s generation up to LSL during all RUC-Committed Hours of the Operating Day is RUC Minimum-Energy Revenue."
  - id: e20
    source: np-05
    locator: "Section 5.7.1.3, paragraph (1)"
    quote: "The total revenue for a Resource operating above its LSL less the cost based on the Energy Offer Curve Cost Cap (as described in Section 4.4.9.3.3, Energy Offer Curve Cost Caps) during all RUC-Committed Hours of the Operating Day is Revenue Less Cost Above LSL During RUC-Committed Hours."
  - id: e21
    source: np-05
    locator: "Section 5.7.1.4, paragraph (1)"
    quote: "The total revenue for a Resource less the cost based on the Energy Offer Curve Cost Cap as described in Section 4.4.9.3.3, Energy Offer Curve Cost Caps, during all QSE Clawback Intervals of the Operating Day is Revenue Less Cost During QSE-Clawback Intervals."
  - id: e22
    source: np-05
    locator: "Section 5.7.2, RUC Clawback Charge, paragraphs (2)-(3)"
    quote: "The RUC Clawback Charge for a Resource, including RMR Units, for each Operating Day is allocated evenly over the RUC-Committed Hours for that Resource. (3) ESRs are not subject to RUC Clawback Charges."
  - id: e23
    source: np-05
    locator: "Section 5.7.2, paragraph (4), formula"
    quote: "RUCCBAMT _(q, r, h) = Max (0, RUCMEREV _(q, r, d) + RUCEXRR _(q, r, d) + RUCEXRQC _(q, r, d) – RUCACREV _(q, r, d) – RUCG _(q, r, d)) / RUCHR _(q, r, d)"
  - id: e24
    source: np-05
    locator: "Section 5.7.2, paragraph (4), variable RUCACREV"
    quote: "Revenue from RUCAC Hours—The net positive sum for the energy revenues for generation of Resource r represented by QSE q up to LSL and the total revenue for Resource r operating above its LSL less the cost during all RUCAC-Hours, for the Operating Day d."
  - id: e25
    source: np-05
    locator: "Section 5.6.1, Verifiable Costs, paragraph (2)"
    quote: "Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs. A QSE or Resource Entity may file verifiable unit-specific costs for a Resource at any time, but it must file those costs no later than 30 days after five Reliability Unit Commitment (RUC) events for that Resource in a calendar year."
  - id: e26
    source: np-05
    locator: "Section 5.6.2, RUC Startup Cost Eligibility, paragraph (1)"
    quote: "For purposes of this Section 5.6.2, all contiguous RUC-Committed Hours are considered as one RUC instruction. For each Resource, only one Startup Cost is eligible per block of contiguous RUC-Committed Hours."
  - id: e27
    source: np-05
    locator: "Section 5.6.2, paragraph (2)(c)-(d)"
    quote: "The generation breakers must have been open, as indicated by a telemetered Resource Status of Off-Line, for at least five minutes during the six hours preceding the first RUC-Committed Hour; and (d) The generation breakers must have been closed, as indicated by a telemetered Resource Status of On-Line, for at least one minute during the RUC commitment period or after the determined five-minute open breaker, as indicated by a telemetered Resource Status of Off-Line, in the six hours preceding the first RUC-Committed Hour."
  - id: e28
    source: np-05
    locator: "Section 5.6.2, paragraph (5)"
    quote: "A Resource that has a Three-Part Supply Offer cleared in the DAM and subsequently receives a RUC commitment for the Operating Hour for which it was awarded will be settled in accordance with Section 4.6.2.3, Day-Ahead Make-Whole Settlements."
  - id: e29
    source: np-05
    locator: "Section 5.6.3, Forced Outage of a RUC-Committed Resource, paragraph (2)"
    quote: "If a RUC-committed Resource, which Resource is eligible to include startup costs in its RUC guarantee under Section 5.6.2 without considering the criteria in item (2)(d) of Section 5.6.2, experiences startup failure that creates a Forced Outage before breaker close, ERCOT shall include the Resource’s submitted and approved verifiable actual costs in the Resource’s RUC guarantee, limited to the lesser of:"
  - id: e30
    source: np-05
    locator: "Section 5.5.2, RUC Process, paragraph (21), opt out"
    quote: "A QSE with a Resource that is not a Reliability Must-Run (RMR) Unit or has not received an Outage Schedule Adjustment (OSA) that has been committed in a DRUC or HRUC process may opt out of the RUC Settlement (or “buy back” the commitment) by setting the COP status of the RUC-committed Resource to ONOPTOUT for the first hour of a contiguous block of RUC-Committed Hours in the Opt Out Snapshot."
  - id: e31
    source: np-05
    locator: "Section 5.5.2, paragraph (21), opt out"
    quote: "A QSE that opts out of RUC Settlement forfeits RUC Settlement for the affected Resource for a given block of RUC Buy-Back Hours. A QSE that opts out of RUC Settlement treatment must make the Resource available to SCED for all RUC Buy-Back Hours."
  - id: e32
    source: np-05
    locator: "Section 5.7.3, Payment When ERCOT Decommits a QSE-Committed Resource, paragraph (1)"
    quote: "If ERCOT decommits a QSE-committed Resource during the RUC process earlier than its scheduled shutdown within the Operating Day, then no compensation is due to the affected QSE from ERCOT."
  - id: e33
    source: np-05
    locator: "Section 5.7.4, RUC Make-Whole Charges, paragraph (2)"
    quote: "On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortfall and by amount uplifted."
  - id: e34
    source: np-05
    locator: "Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1)"
    quote: "The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE’s capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for the RUC process."
  - id: e35
    source: np-05
    locator: "Section 5.7.4.1, paragraph (1), variable RUCSFRS"
    quote: "RUC Shortfall Ratio Share—The ratio of the QSE q’s capacity shortfall to the sum of all QSEs’ capacity shortfalls for a particular RUC process ruc, for the 15-minute Settlement Interval i."
  - id: e36
    source: np-05
    locator: "Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2)"
    quote: "In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution."
  - id: e37
    source: np-05
    locator: "Section 5.7.4.1.1, paragraph (3)"
    quote: "In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Intermittent Renewable Resources (IRRs) that were given notice of decommitment within the two hours before the Operating Hour as a result of the RUC process by setting the RCAPSNAP and RCAPADJ variables used below set equal to the RCAPSNAP value for the Resource immediately before the decommitment instruction was given."
  - id: e38
    source: np-05
    locator: "Section 5.7.4.1.1, paragraph (4)"
    quote: "In calculating the short amount for each QSE, if the RCAPSNAP for a non-IRR was credited to the QSE during the RUC Snapshot but the Resource experiences a Forced Outage within two hours before the start of the Settlement Interval, then the RCAPSNAP for that Resource is also credited to the QSE in the RCAPADJ."
  - id: e39
    source: np-05
    locator: "Section 5.7.4.1.2, RUC Capacity Credit, paragraph (1)"
    quote: "A QSE that is charged for a capacity shortfall in one RUC process gets a capacity credit equal to the minimum of the QSE’s RUC shortfall (MW) or the total RUC capacity purchased multiplied by the QSE’s shortfall ratio share. The capacity credit to be used in future RUC processes for the same 15-minute Settlement Interval is calculated as follows:"
  - id: e40
    source: np-05
    locator: "Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1), formula"
    quote: "LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i)"
  - id: e41
    source: np-05
    locator: "Section 5.7.4.2, paragraph (1), variable LRS"
    quote: "Load Ratio Share—The ratio of Adjusted Metered Load to the total ERCOT Adjusted Metered Load for the 15-minute Settlement Interval."
  - id: e42
    source: np-05
    locator: "Section 5.7.5, RUC Clawback Payment, paragraph (1), formula"
    quote: "LARUCCBAMT_(q,i) = (-1) * (RUCCBAMTTOT_(h) / 4 * LRS_(q,i))"
  - id: e43
    source: np-05
    locator: "Section 5.7.6, RUC Decommitment Charge, paragraph (1)"
    quote: "ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units."
  - id: e44
    source: np-09
    locator: "Section 9.14.7, Disputes for RUC Make-Whole Payment for Fuel Costs, paragraph (1)"
    quote: "If the actual price paid for delivered natural gas for a specific Resource during a Reliability Unit Commitment (RUC)-Committed Interval is greater than Fuel Index Price (FIP) adjusted by the proxy fuel adder, X, defined in the Verifiable Cost Manual (i.e., FIP * (1+X)), then the QSE may file a Settlement dispute for that Resource’s RUC Make-Whole Payment. The maximum amount that may be recovered through this dispute process is the difference between the RUC Guarantee based on the actual price paid and the RUC Guarantee based on the fuel index price FIP * (1+X)."
  - id: e45
    source: np-09
    locator: "Section 9.14.7, paragraph (3)"
    quote: "The QSE or Resource Entity must purchase and nominate fuel as described in paragraph (2) above unless one or more of the conditions below applies: (a) The Resource received an initial RUC instruction for less than 12 contiguous hours within the same gas delivery day; (b) The QSE or Resource Entity did not have sufficient time to procure and nominate fuel after receiving the RUC instruction; (c) The RUC instruction was instructed outside of Business Hours or otherwise at a time when the Resource was unable to procure fuel."
  - id: e46
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 8 area, Event Specific Verifiable Costs (paragraph (7) of the general verifiable-cost rules)"
    quote: "Event Specific Verifiable Costs are documented costs a Resource actually incurred during a specific event and, thus, exclude amortized or discounted future costs."
  - id: e47
    source: imm-som-2025
    locator: "page 101 (OCR), Make-Whole Payments, Clawbacks, and Opt-Outs"
    quote: "ERCOT first allocates make-whole payment costs to Qualified Scheduling Entities (QSEs) that do not provide enough capacity to cover their real-time obligations and are therefore capacity short. Second, all QSEs share the remaining costs on a load-ratio-share basis. Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes."
  - id: e48
    source: imm-som-2025
    locator: "page 101 (OCR), Table 7: Magnitude of RUC Activity 2021-2025 (columns: Active Hours, Resource-Hours, RUC LSL Capacity-Hours (MWh))"
    quote: "2021 1,187 3,863 257,603 2022 2,139 7,910 609,322 2023 975 2,501 155,553 2024 1,066 1,861 191,393 2025 1,820 5,129 364,991"
  - id: e49
    source: imm-som-2025
    locator: "page 102 (OCR), Table 8: Reported Reason for RUC 2021-2025 (Congestion %, Capacity %)"
    quote: "2021 9 91 2022 18 82 2023 8 92 2024 34 66 2025 77 23"
  - id: e50
    source: imm-som-2025
    locator: "page 102 (OCR), 5. RUC Settlement"
    quote: "In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement."
  - id: e51
    source: imm-som-2025
    locator: "page 102 (OCR), Table 9: RUC Settlement 2021-2025 (columns: Opt-Out Frequency %, Claw-Back $ Millions, Make-Whole $ Millions)"
    quote: "2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84"
  - id: e52
    source: imm-som-2025
    locator: "page 102 (OCR), 5. RUC Settlement"
    quote: "The most likely explanation for the even lower level of opt-outs in 2025 is that market prices were not expected to be high enough to warrant opting out. This is reflected in the large increase in make-whole payments from 2024 to 2025 and the relatively low total for claw- back charges despite the large volume of energy settled through RUC."
  - id: e53
    source: imm-som-2024
    locator: "page 105 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "The proposal called for 100 percent clawback of revenues above cost for economic resources that were RUC-committed after submitting day-ahead offers."
  - id: e54
    source: imm-som-2024
    locator: "page 105 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "As shown in Table 6, clawback payments increased while make-whole payments declined in 2024."
  - id: e55
    source: imm-som-2024
    locator: "page 104 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "Conversely, if a RUC-committed unit earns more revenue than its costs, ERCOT may apply a clawback to recover some or all of the excess revenues, depending on whether a valid three-part offer was submitted in the day-ahead market."
  - id: e56
    source: imm-som-2023
    locator: "page 99 (OCR), RUC opt-outs and clawback (2023 report)"
    quote: "The remaining 80% of RUC resources were subject to partial clawback of revenues (50% for those with day-ahead offers) or full clawback of revenues (those without offers)."
  - id: e57
    source: imm-som-2022
    locator: "page 100 (OCR), RUC settlement (2022 report)"
    quote: "Generators that participate in the day-ahead market forfeit only 50% of markets revenues above cost through the claw-back, rather than 100%."
  - id: e58
    source: imm-som-2021
    locator: "page 109 (OCR), RUC (2021 report)"
    quote: "This increase from preceding years was due to ERCOT’s desire to have at least 6,500 MW in reserve above the load forecast, which began in July 2021."
---

## Definition

A RUC Make-Whole Payment is what ERCOT pays a QSE to reimburse allowable startup and minimum-energy costs of a Resource that energy and Ancillary Service revenue did not cover, when the Resource was committed by RUC and the QSE did not opt out of RUC Settlement, or when it was committed by the DAM. [e1] A RUC Clawback Charge is the reverse: the QSE pays when the RUC Guarantee is less than the sum of the RUC Minimum-Energy Revenue and the two revenue-less-cost amounts listed in Section 5.7.2. [e2]

## How it works

ERCOT calculates a make-whole payment per Operating Day for each RUC-committed Resource, whether committed by DRUC or HRUC, when revenue falls short of cost. [e5] The QSE pays the clawback charge for the Operating Day if the RUC Guarantee is less than the sum of the RUC Minimum-Energy Revenue and the two revenue-less-cost amounts. [e2] The revenues from all clawback charges are paid back to all QSEs on a Load Ratio Share basis as the RUC Clawback Payment. [e6]

The cost of make-whole payments is recovered in two steps. QSEs that were capacity-short in a RUC are charged first, in proportion to their shortfall and subject to a cap. [e3] Any remainder in a 15-minute Settlement Interval is uplifted to all QSEs on a Load Ratio Share basis. [e4]

## ERCOT context

The IMM reports 5,129 resource-hours of RUC instructions in 2025, up 176% from 2024, with congestion behind about 77% of them. [e7] Make-whole payments exceeded $21 million in 2025 against only $4.5 million of clawbacks. [e8]

Rules changed in 2024. The IMM's 2024 report says that prior to 2024, RUC-committed resources with valid day-ahead offers faced only a 50% clawback of revenue above cost. [e9] It also says the PUCT approved NPRR 1172 and that it took effect on March 1, 2024. [e10] The two IMM reports describe its clawback change differently (see Open items).

## Key facts

- Make-whole covers startup and minimum-energy costs not recovered in revenue. [e1]
- Capacity-short QSEs are charged first, subject to a cap; the rest is uplifted by LRS. [e3][e4]
- Clawback revenue is paid to all QSEs by LRS. [e6]
- 2025: make-whole above $21 million; clawbacks $4.5 million. [e8]
- Per the IMM's 2024 report, NPRR 1172 took effect March 1, 2024; before 2024 the clawback was 50% for resources with valid day-ahead offers. [e9][e10]

## Say it like this

If ERCOT commits a unit out of market and its revenue does not cover its costs, ERCOT makes it whole, and if its revenues exceed its RUC Guarantee, it pays a clawback charge. Short QSEs pay first and the balance is spread across load.

## Common confusion

The make-whole payment is not a payment for the energy; it only covers shortfalls against allowable costs. [e1] The clawback payment to QSEs is also separate from the uplift charge, though both use Load Ratio Share. [e4][e6]

## Questions

### Who pays for RUC make-whole?

First QSEs that were capacity-short, then all QSEs by Load Ratio Share. [e3][e4]

### What changed in March 2024?

Per the IMM's 2024 report, NPRR 1172 took effect on March 1, 2024; before 2024, resources with valid day-ahead offers faced only a 50% clawback. [e9][e10] The saved IMM reports describe the new clawback differently (see Open items).

### Can a resource avoid make-whole and clawback?

The make-whole definition applies to a RUC-committed Resource only if the QSE has not elected to opt out of RUC Settlement; whether opt-out also avoids clawback was not quoted here. [e1]

## Open items

- Deeper pass: the RUC Guarantee, minimum-energy revenue and revenue-less-cost formulas (5.7.1.1-5.7.1.4), cost eligibility (5.6), and treatment of RMR Units.
- Deeper pass: capacity-short ratio share and cap math (5.7.4.1.1) and RUC capacity credit (5.7.4.1.2).
- The IMM 2025 and 2024 settlement tables are garbled in the text copies and no OCR copy is saved; only prose figures are used. The 2025 IMM says opt-outs fell to 3% in 2025 from 8% in 2024, but that sentence spans a page break and was not quoted.
- IMM 2024 describes NPRR 1172 as 100% clawback for economic resources committed after day-ahead offers; IMM 2025 describes it as a full clawback for resources that opted out. These descriptions differ and were not resolved.
- Pending NPRR1309 (no make-whole for DRRS deployments) is not current text.
