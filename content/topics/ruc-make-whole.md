---
id: ruc-make-whole
name: RUC Make-Whole & Clawback
aliases: [RUC make-whole, RUC Make-Whole Payment, RUC Clawback, RUC Clawback Charge, RUC capacity-short charge, RUC opt-out]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: three-part-supply-offer
    type: determines
    note: The RUC Guarantee uses the lesser of the validated Startup and Minimum-Energy Offers and the applicable caps, so the offer sets the ceiling on what the Resource can be made whole for. [e17]
  - to: energy-storage-resource
    type: related
    note: ERCOT does not calculate or pay a RUC Make-Whole Payment for an ESR, and ESRs are not subject to RUC Clawback Charges. [e11][e22]
  - to: rmr
    type: related
    note: The capacity-short charge, the total make-whole payments it is based on, and the clawback charge all include amounts for RMR Units. [e34][e22]
  - to: sced
    type: related
    note: A QSE that opts out of RUC Settlement must make the Resource available to SCED for all RUC Buy-Back Hours. [e31]
  - to: natural-gas-price
    type: related
    note: A QSE may dispute a RUC Make-Whole Payment when the actual gas price paid exceeds the Fuel Index Price adjusted by the proxy fuel adder. [e43]
  - to: dam
    type: related
    note: A Resource with a Three-Part Supply Offer cleared in the DAM that later receives a RUC commitment for the awarded hour is settled under the Day-Ahead Make-Whole Settlements section. [e28]
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
    quote: "If a RUC-committed Resource, which Resource is eligible to include startup costs in its RUC guarantee under Section 5.6.2 without considering the criteria in item (2)(d) of Section 5.6.2, experiences startup failure that creates a Forced Outage before breaker close, ERCOT shall include the Resource’s submitted and approved verifiable actual costs in the Resource’s RUC guarantee, limited to the lesser of: (a) Costs that qualify as normal startup expenses, including fuel and operation and maintenance expenses, incurred before the event that caused the Forced Outage; or (b) Resource’s Startup Offer in the RUC."
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
    locator: "Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2)"
    quote: "In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution."
  - id: e36
    source: np-05
    locator: "Section 5.7.4.1.1, paragraph (3)"
    quote: "In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Intermittent Renewable Resources (IRRs) that were given notice of decommitment within the two hours before the Operating Hour as a result of the RUC process by setting the RCAPSNAP and RCAPADJ variables used below set equal to the RCAPSNAP value for the Resource immediately before the decommitment instruction was given."
  - id: e37
    source: np-05
    locator: "Section 5.7.4.1.1, paragraph (4)"
    quote: "In calculating the short amount for each QSE, if the RCAPSNAP for a non-IRR was credited to the QSE during the RUC Snapshot but the Resource experiences a Forced Outage within two hours before the start of the Settlement Interval, then the RCAPSNAP for that Resource is also credited to the QSE in the RCAPADJ."
  - id: e38
    source: np-05
    locator: "Section 5.7.4.1.2, RUC Capacity Credit, paragraph (1)"
    quote: "A QSE that is charged for a capacity shortfall in one RUC process gets a capacity credit equal to the minimum of the QSE’s RUC shortfall (MW) or the total RUC capacity purchased multiplied by the QSE’s shortfall ratio share. The capacity credit to be used in future RUC processes for the same 15-minute Settlement Interval is calculated as follows:"
  - id: e39
    source: np-05
    locator: "Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1), formula"
    quote: "LARUCAMT_(q,i) = (-1) * ( RUCMWAMTTOT_(h) / 4 + RUCCSAMTTOT_(i)) * LRS_(q,i)"
  - id: e40
    source: np-05
    locator: "Section 5.7.4.2, paragraph (1), variable LRS"
    quote: "Load Ratio Share—The ratio of Adjusted Metered Load to the total ERCOT Adjusted Metered Load for the 15-minute Settlement Interval."
  - id: e41
    source: np-05
    locator: "Section 5.7.5, RUC Clawback Payment, paragraph (1), formula"
    quote: "LARUCCBAMT_(q,i) = (-1) * (RUCCBAMTTOT_(h) / 4 * LRS_(q,i))"
  - id: e42
    source: np-05
    locator: "Section 5.7.6, RUC Decommitment Charge, paragraph (1)"
    quote: "ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units."
  - id: e43
    source: np-09
    locator: "Section 9.14.7, Disputes for RUC Make-Whole Payment for Fuel Costs, paragraph (1)"
    quote: "If the actual price paid for delivered natural gas for a specific Resource during a Reliability Unit Commitment (RUC)-Committed Interval is greater than Fuel Index Price (FIP) adjusted by the proxy fuel adder, X, defined in the Verifiable Cost Manual (i.e., FIP * (1+X)), then the QSE may file a Settlement dispute for that Resource’s RUC Make-Whole Payment. The maximum amount that may be recovered through this dispute process is the difference between the RUC Guarantee based on the actual price paid and the RUC Guarantee based on the fuel index price FIP * (1+X)."
  - id: e44
    source: np-09
    locator: "Section 9.14.7, paragraph (3)"
    quote: "The QSE or Resource Entity must purchase and nominate fuel as described in paragraph (2) above unless one or more of the conditions below applies: (a) The Resource received an initial RUC instruction for less than 12 contiguous hours within the same gas delivery day; (b) The QSE or Resource Entity did not have sufficient time to procure and nominate fuel after receiving the RUC instruction; (c) The RUC instruction was instructed outside of Business Hours or otherwise at a time when the Resource was unable to procure fuel."
  - id: e45
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 8 area, Event Specific Verifiable Costs (paragraph (7) of the general verifiable-cost rules)"
    quote: "Event Specific Verifiable Costs are documented costs a Resource actually incurred during a specific event and, thus, exclude amortized or discounted future costs."
  - id: e46
    source: imm-som-2025
    locator: "page 101 (OCR), Make-Whole Payments, Clawbacks, and Opt-Outs"
    quote: "ERCOT first allocates make-whole payment costs to Qualified Scheduling Entities (QSEs) that do not provide enough capacity to cover their real-time obligations and are therefore capacity short. Second, all QSEs share the remaining costs on a load-ratio-share basis. Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes."
  - id: e47
    source: imm-som-2025
    locator: "page 101 (OCR), Table 7: Magnitude of RUC Activity 2021-2025 (columns: Active Hours, Resource-Hours, RUC LSL Capacity-Hours (MWh))"
    quote: "2021 1,187 3,863 257,603 2022 2,139 7,910 609,322 2023 975 2,501 155,553 2024 1,066 1,861 191,393 2025 1,820 5,129 364,991"
  - id: e48
    source: imm-som-2025
    locator: "page 102 (OCR), Table 8: Reported Reason for RUC 2021-2025 (Congestion %, Capacity %)"
    quote: "2021 9 91 2022 18 82 2023 8 92 2024 34 66 2025 77 23"
  - id: e49
    source: imm-som-2025
    locator: "page 102 (OCR), 5. RUC Settlement"
    quote: "In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement."
  - id: e50
    source: imm-som-2025
    locator: "page 102 (OCR), Table 9: RUC Settlement 2021-2025 (columns: Opt-Out Frequency %, Claw-Back $ Millions, Make-Whole $ Millions)"
    quote: "2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84"
  - id: e51
    source: imm-som-2025
    locator: "page 102 (OCR), 5. RUC Settlement"
    quote: "The most likely explanation for the even lower level of opt-outs in 2025 is that market prices were not expected to be high enough to warrant opting out. This is reflected in the large increase in make-whole payments from 2024 to 2025 and the relatively low total for claw- back charges despite the large volume of energy settled through RUC."
  - id: e52
    source: imm-som-2024
    locator: "page 105 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "The proposal called for 100 percent clawback of revenues above cost for economic resources that were RUC-committed after submitting day-ahead offers."
  - id: e53
    source: imm-som-2024
    locator: "page 105 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "As shown in Table 6, clawback payments increased while make-whole payments declined in 2024."
  - id: e54
    source: imm-som-2022
    locator: "page 100 (OCR), RUC settlement (2022 report)"
    quote: "Generators that participate in the day-ahead market forfeit only 50% of markets revenues above cost through the claw-back, rather than 100%."
  - id: e55
    source: imm-som-2021
    locator: "page 109 (OCR), RUC (2021 report)"
    quote: "This increase from preceding years was due to ERCOT’s desire to have at least 6,500 MW in reserve above the load forecast, which began in July 2021."
  - id: e56
    source: np-05
    locator: "Section 5.7.4.2, paragraph (1), variable RUCMWAMTTOT"
    quote: "RUC Make-Whole Amount Total—The sum of RUC Make-Whole Payments for all RUC processes, including amounts for RMR Units, for the hour that includes the 15-minute Settlement Interval."
  - id: e57
    source: np-05
    locator: "Section 5.7.4.2, paragraph (1), variable RUCCSAMTTOT"
    quote: "RUC Capacity Amount Total—The sum of RUC Capacity-Short Charges for all QSEs and RUC processes, including payments for RMR Units, for the 15-minute Settlement Interval."
  - id: e58
    source: np-05
    locator: "Section 5.7.5, paragraph (1), variable RUCCBAMTTOT"
    quote: "RUC Clawback Charge Total —The sum of RUC Clawback Charges to all QSEs, including amounts for RMR Units, for the hour that includes the 15-minute Settlement Interval."
  - id: e59
    source: imm-som-2024
    locator: "page 105 (OCR), 3. Make-Whole Payments and Clawbacks"
    quote: "In response to concerns that this undermined efficient market behavior, consumer stakeholder representatives filed NPRR 1172, Fuel Adder Definition, Mitigated Offer Caps, and RUC Clawback, in April 2023"
  - id: e60
    source: np-09
    locator: "Section 9.14.7, paragraph (2)"
    quote: "If the QSE submitting a Settlement dispute under paragraph (1) above, or the Resource Entity for the Resource, has an executed and enforceable transportation contract (together with any associated statement of operating conditions), on an interstate or intrastate pipeline, for the Generation Resource that received the RUC instruction, the QSE must show proof that the QSE or Resource Entity (or another entity acting on behalf of the Resource Entity with respect to fuel procurement) purchased and nominated fuel in sufficient quantities to start and operate the Resource at its Low Sustained Limit (LSL) during the RUC-Committed Intervals."
  - id: e61
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement."
---

## Definition

A RUC Make-Whole Payment is what ERCOT pays a QSE to reimburse allowable startup and minimum-energy costs of a Resource that energy and Ancillary Service revenue did not cover, when the Resource was committed by RUC and the QSE did not opt out of RUC Settlement, or when it was committed by the DAM. [e1] A RUC Clawback Charge is the reverse: the QSE pays when the RUC Guarantee is less than the sum of the RUC Minimum-Energy Revenue and the two revenue-less-cost amounts listed in Section 5.7.2. [e2]

## How it works

**Make-whole.** ERCOT calculates a make-whole payment per Operating Day for each RUC-committed Resource, whether committed by DRUC or HRUC, when revenue falls short of cost; it does not calculate or pay one for an ESR. [e5][e11] ERCOT pays the QSE if the RUC Guarantee is greater than the sum of RUC Minimum-Energy Revenue, revenue less cost above LSL during RUC-Committed Hours, and revenue less cost during QSE Clawback Intervals. [e12]

**What the guarantee is made of.** The RUC Guarantee is the sum of eligible Startup Costs and minimum-energy costs during all RUC-Committed Hours of the Operating Day. [e15] The minimum-energy part is prorated by actual generation when average output in a 15-minute Settlement Interval is below LSL. [e16] If a validated Three-Part Supply Offer was submitted, the guarantee uses the lesser of the offers and caps; if none was submitted and ERCOT has not approved unit-specific costs, it uses the Resource Category generic caps. [e17][e18] Until ERCOT approves verifiable unit-specific costs the caps are the generic caps, and a QSE or Resource Entity must file verifiable costs no later than 30 days after five RUC events for the Resource in a calendar year. [e25]

**Startup eligibility.** All contiguous RUC-Committed Hours count as one RUC instruction, and only one Startup Cost is eligible per block. [e26] Among the criteria that must all be met, breaker tests also apply: the breakers must have been open (Off-Line) for at least five minutes during the six hours before the first RUC-Committed Hour and then closed (On-Line) for at least one minute. [e27] If the Resource suffers a startup failure that creates a Forced Outage before breaker close, ERCOT includes submitted and approved verifiable actual costs, limited to the lesser of normal startup expenses incurred before the event and the Resource's Startup Offer in the RUC. This applies to a Resource that is eligible to include startup costs under Section 5.6.2 without considering criterion (2)(d). [e29]

**Clawback.** The QSE pays a clawback charge for the Operating Day if the RUC Guarantee is less than the sum of the same three revenue measures. [e2] The charge is allocated evenly over the Resource's RUC-Committed Hours, includes RMR Units, and does not apply to ESRs. [e22] Revenues from all clawback charges are paid to all QSEs on a Load Ratio Share basis as the RUC Clawback Payment. [e6][e41]

**Opt-out.** A QSE with a Resource that is not an RMR Unit and has not received an OSA may opt out of RUC Settlement ("buy back" the commitment) by setting the COP status to ONOPTOUT for the first hour of the contiguous block of RUC-Committed Hours in the Opt Out Snapshot. [e30] Opting out forfeits RUC Settlement for the block of RUC Buy-Back Hours, and the Resource must be available to SCED for all those hours. [e31] The IMM says suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes. [e46]

**Who pays.** QSEs that were capacity-short in each RUC are charged first, by shortfall ratio share and subject to a cap; any remainder in a 15-minute Settlement Interval is uplifted to all QSEs on a Load Ratio Share basis. [e3][e4] The cap on a QSE's charge is two times total RUC Make-Whole Payments for all QSEs multiplied by that QSE's capacity shortfall divided by the total capacity of all RUC-committed Resources during the Settlement Interval for the RUC process. [e34] (The capacity-short formula printed in 5.7.4.1 wraps this term and the shortfall-ratio-share term in Max(...); see Open items.) ERCOT posts monthly, within ten days after Initial Settlement of the month's last day, the total make-whole charges and clawback payment amounts by interval, by QSE capacity shortfall and by amount uplifted. [e33]

**How shortfall is measured.** The available capacity of an IRR in the shortfall calculation is the lesser of its COP HSL and its wind or PV production potential at the time of RUC execution. [e35] A QSE is credited for non-IRR Resources given notice of decommitment within the two hours before the Operating Hour, and for a non-IRR Resource that suffers a Forced Outage within two hours before the Settlement Interval if its capacity was credited in the RUC Snapshot. [e36][e37] A QSE charged for a shortfall in one RUC gets a capacity credit, equal to the lesser of its RUC shortfall and the total RUC capacity purchased times its shortfall ratio share, for future RUC processes for the same Settlement Interval. [e38]

**Decommitment.** If ERCOT decommits a QSE-committed Resource during the RUC process earlier than its scheduled shutdown within the Operating Day, no compensation is due to the QSE; a separate RUC Decommitment Charge recovers on an LRS basis any RUC Decommitment Payments. [e32][e42]

## Formula

Make-whole (per RUC-Committed Hour): RUCMWAMT = (-1) x Max(0, RUCG - RUCMEREV - RUCEXRR - RUCEXRQC) / RUCHR. [e13] RUCG is the RUC Guarantee, RUCMEREV the RUC Minimum-Energy Revenue (energy revenue up to LSL during RUC-Committed Hours), RUCEXRR the revenue less cost above LSL during RUC-Committed Hours, RUCEXRQC the revenue less cost during QSE Clawback Intervals, and RUCHR the number of RUC-Committed Hours in the Operating Day. [e15][e19][e20][e21][e14]

Clawback (per RUC-Committed Hour): RUCCBAMT = Max(0, RUCMEREV + RUCEXRR + RUCEXRQC - RUCACREV - RUCG) / RUCHR. [e23] RUCACREV is the net positive revenue from RUCAC Hours. [e24]

Uplift: LARUCAMT = (-1) x (RUCMWAMTTOT / 4 + RUCCSAMTTOT) x LRS, where RUCMWAMTTOT is the sum of RUC Make-Whole Payments for all RUC processes, including amounts for RMR Units, for the hour, RUCCSAMTTOT is the sum of RUC Capacity-Short Charges for all QSEs and RUC processes for the 15-minute interval, and LRS is the ratio of the QSE's Adjusted Metered Load to total ERCOT Adjusted Metered Load for the 15-minute interval. [e39][e56][e57][e40] Clawback payment to QSEs: LARUCCBAMT = (-1) x (RUCCBAMTTOT / 4 x LRS), where RUCCBAMTTOT is the sum of RUC Clawback Charges to all QSEs for the hour. [e41][e58]

## ERCOT context

**Activity by year (IMM, 2025 report, OCR Tables 7-9).** RUC resource-hours were 3,863 in 2021, 7,910 in 2022, 2,501 in 2023, 1,861 in 2024 and 5,129 in 2025. [e47] The reported share of RUC commitments for congestion was 9% in 2021, 18% in 2022, 8% in 2023, 34% in 2024 and 77% in 2025. [e48] The IMM reports opt-out frequency of 24%, 23%, 8% and 3% for 2022-2025, with clawbacks of $22.69, $3.45, $7.14 and $4.53 million and make-whole payments of $70.13, $3.69, $3.35 and $21.84 million. [e50] The IMM reports 5,129 resource-hours of RUC instructions in 2025, up 176% from 2024, with congestion behind about 77%, and that make-whole payments exceeded $21 million against $4.5 million of clawbacks. [e7][e8]

**Why they moved.** The IMM attributes the 2021 jump in make-whole payments to ERCOT's desire to hold at least 6,500 MW of reserve above the load forecast beginning in July 2021. [e55] It says the 2024 fall in opt-outs came largely from NPRR 1172, and that the lower 2025 opt-out level most likely reflects prices not being expected to be high enough to warrant opting out, with large make-whole growth and low clawbacks. [e49][e51]

**The 2024 rule change.** Before 2024, RUC-committed resources with valid day-ahead offers were subject to only a 50% clawback of revenues above their costs. [e9][e54] The IMM says NPRR 1172 was filed by consumer stakeholder representatives in April 2023 and that the proposal called for a 100% clawback of revenue above cost for economic resources RUC-committed after submitting day-ahead offers; it says the PUCT approved NPRR 1172 and it took effect on March 1, 2024. [e59][e52][e10] The IMM says clawbacks increased and make-whole payments declined in 2024. [e53] (The IMM's 2025 report describes the same rule as a full rather than partial clawback for resources that opted out; see Open items.) [e49]

**Fuel disputes.** A QSE may file a Settlement dispute for a Resource's RUC Make-Whole Payment when the actual price paid for delivered natural gas during a RUC-Committed Interval exceeds the Fuel Index Price adjusted by the proxy fuel adder; the maximum recovery is the difference between the RUC Guarantee based on the actual price and on FIP * (1+X). [e43] For the dispute, if the QSE or the Resource Entity has an executed and enforceable pipeline transportation contract for the Resource, the QSE must show proof that fuel was purchased and nominated in quantities sufficient to start and operate the Resource at LSL. [e60] The QSE or Resource Entity must purchase and nominate fuel in that way unless the initial RUC instruction was under 12 contiguous hours in the same gas day, there was insufficient time, or the instruction came outside Business Hours or when it could not procure fuel. [e44]

**Event-specific costs.** The Verifiable Cost Manual (the saved edition is effective 2026-12-01) describes Event Specific Verifiable Costs as documented costs a Resource actually incurred during a specific event, excluding amortized or discounted future costs. [e45]

## Timeline

- July 2021: ERCOT begins wanting at least 6,500 MW of reserve above the load forecast, which the IMM links to the 2021 rise in make-whole payments. [e55]
- April 2023: NPRR 1172 filed (per the IMM) calling for a 100% clawback of revenue above cost for economic RUC resources with day-ahead offers. [e59][e52]
- 1 March 2024: NPRR 1172 takes effect. [e10]
- 2025: RUC resource-hours rise to 5,129, 77% reported for congestion, make-whole above $21 million. [e47][e48][e8]

## Key facts

- Make-whole covers startup and minimum-energy costs not recovered in revenue; ESRs are excluded from make-whole and clawback. [e1][e11][e22]
- Capacity-short QSEs are charged first, subject to a cap; the rest is uplifted by LRS. [e3][e4]
- Clawback revenue is paid to all QSEs by LRS. [e6]
- 2025: make-whole above $21 million; clawbacks $4.5 million. [e8]
- Per the IMM, NPRR 1172 took effect March 1, 2024; before 2024 the clawback was 50% for resources with valid day-ahead offers. [e9][e10]
- Opt-out frequency fell to 8% in 2024 and 3% in 2025 (IMM 2025 report). [e50]

## Example

Illustration with figures chosen by this knowledge base (not from a source; the arithmetic only applies the two formulas below). Suppose a unit is RUC-committed for 4 hours with a RUC Guarantee of $20,000. If RUC Minimum-Energy Revenue is $5,000, revenue less cost above LSL is $8,000 and there are no QSE Clawback Intervals, the sum is $13,000, below the guarantee, so ERCOT pays a make-whole of $7,000 spread over the 4 hours. If instead revenue less cost above LSL is $30,000, the sum is $35,000, above the guarantee, so the clawback charge is $15,000 over the 4 hours (ignoring any RUCAC revenue). The Protocol formulas are mirror images: the same three revenue measures are tested against the guarantee. [e13][e23]

## Say it like this

If ERCOT commits a unit out of market and its revenue does not cover its allowable costs, ERCOT makes it whole, and if its revenues exceed its RUC Guarantee, it pays a clawback charge. Short QSEs pay first and the balance is spread across all QSEs by load ratio share; a QSE can opt out of both by buying back the commitment.

## Common confusion

The make-whole payment is not a payment for the energy; it only covers shortfalls against allowable costs. [e1] The clawback payment to QSEs is also separate from the uplift charge, though both use Load Ratio Share. [e4][e6] Make-whole also covers DAM-committed Resources in the definition, but this topic's RUC mechanics (Section 5.7) apply to RUC commitments. [e1][e28]

## Questions

### Who pays for RUC make-whole?

First QSEs that were capacity-short, then all QSEs by Load Ratio Share. [e3][e4]

### What changed in March 2024?

Per the IMM's 2024 report, NPRR 1172 took effect on March 1, 2024; before 2024, resources with valid day-ahead offers faced only a 50% clawback, and NPRR 1172 called for 100% for economic resources committed after submitting day-ahead offers. [e9][e10][e52] The saved IMM reports describe the new clawback differently (see Open items).

### Can a resource avoid make-whole and clawback?

Yes, by opting out, unless it is an RMR Unit or has received an OSA: the QSE sets the COP status to ONOPTOUT for the first hour of the block in the Opt Out Snapshot, forfeits RUC Settlement for those hours and must make the Resource available to SCED. [e30][e31]

### Why did opt-outs fall from 23% in 2023 to 8% in 2024 and 3% in 2025?

The IMM links the 2024 drop largely to NPRR 1172's clawback change, and says the further drop in 2025 most likely reflects prices not expected to be high enough to warrant opting out. [e49][e50][e51]

### Why were make-whole payments so much higher in 2025 than 2024?

The IMM reports $21.84 million in 2025 against $3.35 million in 2024 and says the increase can be partially explained by greater use of RUC (5,129 resource-hours in 2025, 77% reported for congestion) and fewer resources opting out. [e50][e47][e48][e7][e61]

### What if a RUC-committed unit trips on startup?

If it would otherwise be eligible for startup costs and has a startup failure that creates a Forced Outage before breaker close, ERCOT includes verifiable actual costs in the RUC Guarantee, limited to the lesser of normal startup expenses incurred and the Resource's Startup Offer in the RUC. [e29]

### What if a QSE is capacity-short but then the committed unit is decommitted?

The QSE is credited for non-IRR Resources given notice of decommitment within the two hours before the Operating Hour. [e36] (The saved text does not address any other effect.)

## Scenarios

### ERCOT RUC-commits a CCGT for a transmission constraint; the QSE had a valid day-ahead offer. What are the economics after March 2024?

- The unit is guaranteed its allowable startup and minimum-energy costs through the RUC Guarantee. [e15]
- Per the IMM's 2024 report, the NPRR 1172 proposal called for a 100% clawback of revenue above cost for such economic resources, where before 2024 it was 50% (the IMM's 2025 report describes the rule differently; see Open items). [e52][e9]
- The QSE could instead opt out, forfeiting make-whole and clawback and taking full market exposure. [e31][e46]

## Open items

- Resolved 2026-11-21: RUC Guarantee, minimum-energy revenue and revenue-less-cost formulas (5.7.1.1-5.7.1.4), capacity-short cap, capacity credit and uplift formulas are now described from the Protocol text. The capacity-short formula as printed in 5.7.4.1 wraps the two terms in Max(...) while the prose calls the second term a cap; the Max/cap reading was not resolved and the formula is not reproduced.
- The IMM 2021-2025 RUC settlement tables disagree across editions for the same year (for example 2022 clawback $23.74 million and make-whole $42.78 million in the 2024 report versus $22.69 million and $70.13 million in the 2025 report; 2024 opt-out 6% in the 2024 report versus 8% in the 2025 report). The saved texts do not explain the revisions; the 2025 report values are used here.
- IMM 2024 describes NPRR 1172 as 100% clawback for economic resources committed after day-ahead offers; IMM 2025 describes it as a full clawback for resources that opted out. These descriptions differ and were not resolved; the NPRR 1172 text itself is not saved.
- "QSE Clawback Interval" is used in the Protocols (5.7.1.4) but its definition was not found in the saved np-02 text.
- Cost eligibility details beyond 5.6.1-5.6.4 (OSA settlement in 5.6.5, verifiable cost line items) and the Section 5.7.7 treatment of Switchable Generation Resources were not summarized.
- Pending NPRR1309 (ESRs and DRRS deployments not subject to RUC Clawback Charges; RUCMEREV96 variable) is not current text and was not used.
- The DAM make-whole route (Section 4.6.2.3) named in the definition is not covered here.
