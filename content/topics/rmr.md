---
id: rmr
name: RMR (Reliability Must-Run) & Must-Run Alternatives
aliases: [RMR, Reliability Must-Run, MRA, Must-Run Alternative, NSO, Notification of Suspension of Operations, Braunig]
kind: product
domain: reliability
level: 2
lenses: [analyst, portfolio, trading, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: uplift
    type: related
    note: RMR settlement is part of the uplift the IMM tracks, and RMR was the largest contributor to the 2025 uplift increase. [e10]
  - to: lse
    type: related
    note: ERCOT allocates the cost of RMR agreements to LSEs. [e12]
  - to: resource-adequacy
    type: related
    note: RMR service can be procured after a Notification of Suspension of Operations, for a unit needed for localized reliability where market solutions do not exist. [e1][e3]
  - to: ers
    type: related
    note: A resource with an existing ERS obligation may propose to serve as an alternative to an RMR unit. [e14]
  - to: ffss
    type: related
    note: RMR is procured under protocol Section 3.14.1 (FFSS is covered in the ffss topic). [e3]
  - to: ruc
    type: contrasts-with
    note: RUC is a separate reliability commitment process; a resource whose RMR agreement is approved but not yet executed must stay available for RUC commitment. [e26]
  - to: imm
    type: related
    note: The IMM reports RMR basics, the 2025 Braunig agreement and uplift. [e9][e10]
  - to: puct
    type: regulates
    note: PUCT rule 25.502(e) sets the 150-day notice of suspension, ERCOT's 60-day determination and board approval of RMR and MRA agreements. [e45][e47]
  - to: market-power-mitigation
    type: related
    note: The Protocols set the mitigated offer cap for an RMR Unit at the highest value expected to allow SCED to dispatch it. [e40]
  - to: sced
    type: related
    note: An RMR Unit committed through DRUC or HRUC can be offered into SCED by ERCOT at the effective Value of Lost Load. [e38]
  - to: binding-constraint
    type: related
    note: RMR exists for localized transmission constraints, and Braunig Unit 3 was committed during Winter Storm Fern to relieve overloads and manage the binding South Texas Export. [e15][e55]
  - to: winter-storm-jan-2026
    type: example-of
    note: ERCOT committed Braunig Unit 3, which was under an RMR contract, throughout Winter Storm Fern. [e54][e55]
  - to: load-ratio-share
    type: related
    note: Total RMR cost for all RMR Units is allocated to QSEs representing Load based on load ratio share. [e36]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Reliability Must-Run (RMR) Unit"
    quote: "A Generation Resource operated under the terms of an Agreement with ERCOT that would not otherwise be operated except that it is necessary to provide voltage support, stability or management of localized transmission constraints under Credible Single Contingency criteria where market solutions do not exist."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Must-Run Alternative (MRA)"
    quote: "A resource operated under the terms of an Agreement with ERCOT as an alternative to a Reliability Must-Run (RMR) Unit."
  - id: e3
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(a)"
    quote: "Upon receiving a Notification of Suspension of Operations (NSO) from a Resource Entity as described in Section 3.14.1.1, Notification of Suspension of Operations, ERCOT may begin procurement of RMR Service under this Section."
  - id: e4
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(b)"
    quote: "Before entering into an RMR Agreement, ERCOT shall assess alternatives to the proposed RMR Agreement."
  - id: e5
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(e)"
    quote: "ERCOT may execute RMR Agreements for no less than one month and no more than one year, with one exception. ERCOT may execute an RMR Agreement for a term longer than 12 months if the Resource Entity must make a significant capital expenditure to meet environmental regulations or to ensure availability to continue operating the RMR Unit so as to make an RMR Agreement in excess of 12 months appropriate, in ERCOT’s opinion. The term of a multi-year RMR Agreement must take into account the appropriate RMR exit strategy discussed in Section 3.14.1.4, Exit Strategy from an RMR Agreement. In the event ERCOT chooses to contract for an RMR Unit for longer than one year, ERCOT shall annually re-evaluate the need for the RMR Unit under the criteria set forth in paragraph (b) above."
  - id: e6
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(g)"
    quote: "A Resource Entity cannot be compelled to enter into an RMR Agreement. A Resource Entity that owns or controls a Generation Resource that is uneconomic to remain in service can voluntarily petition ERCOT for contracted RMR status by following the process in this subsection."
  - id: e7
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(j)"
    quote: "The Resource Entity that owns or controls the RMR Unit may not use the RMR Unit for: (i) Participating in the bilateral energy market; (ii) Self-providing of energy except for plant auxiliary Load obligations under the RMR Agreement; and (iii) Providing of Ancillary Service to any Entity."
  - id: e8
    source: np-03
    locator: "Section 3.14.1.3, ERCOT Board Approval of RMR and MRA Agreements, paragraph (1)"
    quote: "If ERCOT determines that an RMR or MRA Agreement is a cost-effective solution to remedy a performance deficiency for which the suspending Generation Resource has a material impact as described in paragraph (3) of Section 3.14.1.2, ERCOT Evaluation Process, or if ERCOT has identified such a performance deficiency but has determined that entering into an RMR or MRA Agreement is not a cost-effective solution to that performance deficiency, then ERCOT shall present this finding to the ERCOT Board for approval."
  - id: e9
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMRs in 2025"
    quote: "On February 24, 2025, the ERCOT Board approved RMR service for Braunig Unit 3, which has an HSL of approximately 410 MW."
  - id: e10
    source: imm-som-2025
    locator: "Executive summary, all-in price and uplift"
    quote: "RMR uplift was the largest contributor to this increase, accounting for $68 million of the $668 million in total uplift costs."
  - id: e11
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMRs in 2025"
    quote: "Since the beginning of the RMR period, the mobile generating units have produced approximately 1,226 MWh, and the maximum aggregate output of RMR units has been less than 40 MW. Total uplift associated with these RMR units in 2025 was approximately $68 million."
  - id: e12
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMR basics"
    quote: "ERCOT allocates costs incurred under RMR agreements to LSEs."
  - id: e13
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMR policy changes"
    quote: "More recently, ERCOT proposed NPRR 1330 in April 2026 to establish a process for setting mitigated offer caps for RMR units so they do not interfere with market outcomes."
  - id: e14
    source: puct-25-507
    locator: "16 TAC 25.507(d)(11)"
    quote: "A resource with a pre-existing obligation to provide ERS may submit a proposal to serve as an alternative to a resource subject to reliability must-run (RMR) service for the same period."
  - id: e15
    source: np-03
    locator: "Section 3.14.1, Reliability Must Run, paragraph (1)"
    quote: "RMR Service is the use by ERCOT, under contracts with Resource Entities, of capacity and energy from Generation Resources that otherwise would not operate and that are necessary to provide voltage support, stability or management of localized transmission constraints under applicable reliability criteria, where market solutions do not exist."
  - id: e16
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(b)"
    quote: "The list of alternatives ERCOT must consider includes (as reasonable for each type of reliability concern identified): (i) Re-dispatch/reconfiguration through operator instruction; (ii) Automatic Mitigation Plans (AMPs) and Remedial Action Plans (RAPs); (iii) Remedial Action Schemes (RASs) initiated on unit trips or Transmission Facilities’ Outages; and (iv) Any other operational alternatives deemed viable by ERCOT."
  - id: e17
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(c)"
    quote: "ERCOT shall minimize the use of RMR Units as much as practicable subject to the other provisions of these Protocols. ERCOT may Dispatch an RMR Unit at any time for ERCOT System security."
  - id: e18
    source: np-03
    locator: "Section 3.14.1, paragraph (1)(h)"
    quote: "ERCOT must contract for the entire capacity of each RMR Unit."
  - id: e19
    source: np-03
    locator: "Section 3.14.1.1, Notification of Suspension of Operations, paragraph (1)"
    quote: "Except for the occurrence of a Forced Outage, a Resource Entity must notify ERCOT in writing no less than 150 days prior to the date on which the Resource Entity intends to cease or suspend operation of a Generation Resource for a period of greater than 180 days. If a Generation Resource is to be mothballed on a seasonal basis, the Resource Entity must notify ERCOT in writing no less than 90 days prior to the suspension date and identify its Seasonal Operation Period."
  - id: e20
    source: np-03
    locator: "Section 3.14.1.2, ERCOT Evaluation Process, paragraph (2)"
    quote: "Within 21 days after receiving the NSO described in paragraph (1) above, unless otherwise notified by ERCOT that a shorter comment period is required, Market Participants may submit comments to ERCOT on whether the Generation Resource(s) referenced in the NSO is necessary to support ERCOT System reliability or should qualify for a multi-year RMR Agreement."
  - id: e21
    source: np-03
    locator: "Section 3.14.1.2, paragraph (3)"
    quote: "ERCOT shall conduct a reliability analysis of the need for any Generation Resource(s) with a summer Seasonal net max sustainable rating greater than or equal to 20 MW to support ERCOT System reliability."
  - id: e22
    source: np-03
    locator: "Section 3.14.1.2, paragraph (3)(c)(iv)"
    quote: "the Generation Resource will only be deemed to have a material impact on a performance deficiency that is caused by a thermal overload(s) if the Generation Resource has a more than 2% unloading Shift Factor on the Transmission Facility(s) that is overloaded and more than 5% unloading impact on the Transmission Facility(s) that is overloaded."
  - id: e23
    source: np-03
    locator: "Section 3.14.1.2, paragraph (5)"
    quote: "Within 60 days after receiving Part I and Part II of the NSO, ERCOT shall complete its reliability analysis described in paragraph (3) above and shall issue a Market Notice describing the results of its reliability analysis if the results were not provided in the Market Notice issued under paragraph (4) above."
  - id: e24
    source: np-03
    locator: "Section 3.14.1.2, paragraph (6)"
    quote: "Within ten days after a determination by ERCOT that the proposed suspension of the Generation Resource would result in a performance deficiency on which the Generation Resource has a material impact, as described in this Section, ERCOT shall issue a “Request for Proposal” (RFP) for Must-Run Alternatives (MRAs)."
  - id: e25
    source: np-03
    locator: "Section 3.14.1.2, paragraph (9)"
    quote: "Except in cases where the Generation Resource is to be mothballed on a seasonal basis, if, after 150 days following ERCOT’s receipt of Part I and Part II of the NSO, ERCOT has neither notified the Resource Entity that the continued operation of the Generation Resource is not required nor obtained ERCOT Board approval to enter into an RMR or MRA Agreement, then the Resource Entity may file a complaint with the Public Utility Commission of Texas (PUCT) under subsection (e)(1) of P.U.C. SUBST. R. 25.502, Pricing Safeguards in Markets Operated by the Electric Reliability Council of Texas."
  - id: e26
    source: np-03
    locator: "Section 3.14.1.2, paragraph (10)"
    quote: "If the ERCOT Board approves entering into an RMR Agreement but ERCOT and the Resource Entity have not both executed the RMR Agreement by the date on which the Resource Entity intends to cease or suspend operation of the Generation Resource, then the Resource Entity shall maintain that Generation Resource(s) so that it is available for Reliability Unit Commitment (RUC) commitment until no longer required to do so under subsection (e)(2) of P.U.C. SUBST. R. 25.502."
  - id: e27
    source: np-03
    locator: "Section 3.14.1.4, Exit Strategy from an RMR Agreement, paragraph (1)"
    quote: "No later than 90 days after the execution of an RMR Agreement, ERCOT shall report to the Board and post on the MIS Secure Area a list of feasible alternatives that may, at a future time, be more cost-effective than the continued renewal of the existing RMR Agreement."
  - id: e28
    source: np-03
    locator: "Section 3.14.1.10, Eligible Costs, paragraph (1)"
    quote: "“Eligible Costs” are costs that would be incurred by the RMR Unit owner to provide the RMR Service, excluding fuel costs or other costs the RMR Unit would have incurred anyway had it been mothballed or shut down."
  - id: e29
    source: np-03
    locator: "Section 3.14.1.10, paragraph (1)(b)"
    quote: "Examples of costs not included as Eligible Costs are: (i) Depreciation expense, return on equity, and debt and interest costs;"
  - id: e30
    source: np-03
    locator: "Section 3.14.1.12, Calculation of the Initial Standby Cost, paragraph (1)"
    quote: "The initial Standby Cost for each month during the term of the RMR Agreement shall be calculated by dividing the monthly approved budget cost by the total hours of that month."
  - id: e31
    source: np-03
    locator: "Section 3.14.1.13, Updated Budgets During the Term of an RMR Agreement, paragraph (2)"
    quote: "If the total costs over the remaining term of the RMR Agreement change by more than 10% with respect to those costs anticipated for the same period in the most recently approved budget, the RMR Standby Cost will be recalculated."
  - id: e32
    source: np-03
    locator: "Section 3.14.1.17, Incentive Factor, paragraph (1)"
    quote: "Subject to the reductions described in paragraphs (2) and (3) below, the Incentive Factor for RMR Agreements is equal to 10% of the actual Eligible Costs, excluding fuel costs and reservation and transportation costs associated with firm fuel supplies as described in paragraph (1)(a)(vi) of Section 3.14.1.10, Eligible Costs. The Incentive Factor for RMR Agreements is not applied to capital expenditures as described in Section 3.14.1, Reliability Must Run, or to capital expenditures reclassified as an expense in accordance with paragraph (3)(d) of Section 3.14.1.19, Charge for Contributed Capital Expenditures."
  - id: e33
    source: np-03
    locator: "Section 3.14.1.17, paragraph (2)"
    quote: "The Incentive Factor shall be reduced if the RMR Unit fails to perform to the contracted capacity during a Capacity Test as described in the RMR Agreement. The reduction will be linear, with a 2% reduction in the Incentive Factor for every 1% of reduced Capacity."
  - id: e34
    source: np-03
    locator: "Section 3.14.1.17, paragraph (3)(b)"
    quote: "The calculation is made by dividing the total MW of available capacity per hour according to its final COP by the total MW of contracted capacity per hour for the previous 4380 hours."
  - id: e35
    source: np-06
    locator: "Section 6.6.6.1, RMR Standby Payment, paragraph (3), standby price equation"
    quote: "RMRSBPR _(q, r) = (RMRMNFNCC _(q, r) * (1 + RMRIF * RMRCRF _(q, r) * RMRARF _(q, r)) + RMRMNFCC _(q, r)) / MH _(q, r)"
  - id: e36
    source: np-06
    locator: "Section 6.6.6.5, RMR Service Charge, paragraph (1)"
    quote: "The total RMR cost for all RMR Units is allocated to the QSEs representing Loads based on LRS."
  - id: e37
    source: np-06
    locator: "Section 6.6.6.2, RMR Payment for Energy, paragraph (1)"
    quote: "Payment for energy on the Initial Settlement and settlements executed before true-up and before actual cost data is submitted must be calculated using the estimated input/output curve and startup fuel as specified in the RMR Agreement, the actual energy produced and the FIP. The payment for energy for all other settlements must be based on actual fuel costs for the RMR Unit."
  - id: e38
    source: np-04
    locator: "Section 4.4.8, RMR Offers, paragraph (1)(b)"
    quote: "ERCOT may submit Energy Offer Curves at the effective Value of Lost Load (VOLL) in $/MWh on behalf of RMR Units committed in the DRUC or HRUC, and subsequently available for Dispatch by SCED, unless ERCOT declares a Market Suspension, in which case no Energy Offer Curves will be submitted, and ERCOT may, at its discretion, Dispatch RMR Units to restore the ERCOT Transmission Grid."
  - id: e39
    source: np-04
    locator: "Section 4.4.8, paragraph (1)(a)"
    quote: "If ERCOT has determined that an RMR Unit will be needed in Real-Time to resolve a transmission constraint, then ERCOT shall manually commit the Resource for the capacity required to resolve the transmission constraint using the DRUC or HRUC process."
  - id: e40
    source: np-04
    locator: "Section 4.4.9.4.3, Mitigated Offer Cap for RMR Resources, paragraph (1) (current text; NPRR826 box would replace it)"
    quote: "For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Unit may be required to resolve and variations in transmission system topology, ERCOT shall set the MOC curve equal to the highest value (in $/MWh) that is expected to allow SCED to Dispatch the RMR Unit."
  - id: e41
    source: np-04
    locator: "Section 4.4.9.4.3, pending NPRR826 box (not yet in effect), paragraph (1)"
    quote: "The single price ($/MWh) value determined below will be used as the MOC curve for the full operating range of the Resource."
  - id: e42
    source: np-03
    locator: "Section 3.14.4.1, Overview and Description of MRAs, paragraph (1), inside pending NPRR885 and NPRR995 box (not yet in effect)"
    quote: "Subject to approval by the ERCOT Board, ERCOT may procure Must-Run Alternative (MRA) Service as an alternative to contracting with an RMR Unit if ERCOT determines that the MRA Agreement(s) will, in whole or in part, address the reliability need identified in the RMR study in a more cost-effective manner."
  - id: e43
    source: np-03
    locator: "Section 3.14.4.1, paragraph (5), inside pending NPRR885 and NPRR995 box (not yet in effect)"
    quote: "Each MRA must provide at least five MW of capacity."
  - id: e44
    source: np-03
    locator: "Section 3.14.4.1, paragraph (2)(b), inside pending NPRR885 and NPRR995 box (not yet in effect)"
    quote: "A clearing price mechanism shall not be used for awarding offers for MRA Service."
  - id: e45
    source: puct-25-502
    locator: "16 TAC 25.502(e), RMR resources (copy effective 12/5/19)"
    quote: "Except for the occurrence of a forced outage, a generation entity must submit to ERCOT in writing a notice of suspension of operation no later than 150 calendar days prior to the suspension date. If a generation resource is to be mothballed on a seasonal basis in accordance with ERCOT protocols, the generation entity must submit in writing a notice of suspension of operation no later than 90 calendar days prior to the suspension date. ERCOT must issue a final determination of the need for RMR service within 60 calendar days of ERCOT’s receipt of the notice."
  - id: e46
    source: puct-25-502
    locator: "16 TAC 25.502(e)(1)(H)"
    quote: "If the generation entity does not file a complaint with the commission, the generation entity will be deemed to have accepted ERCOT’s most-recent offer as of the suspension date."
  - id: e47
    source: puct-25-502
    locator: "16 TAC 25.502(e)(5), Approval of RMR and MRA service agreements"
    quote: "All recommendations by ERCOT staff to enter into an RMR or MRA service agreement will be subject to approval by the ERCOT governing board."
  - id: e48
    source: puct-25-502
    locator: "16 TAC 25.502(e)(6), Refund of payments for capital expenditures"
    quote: "A resource entity that owns or controls a resource providing RMR or MRA service must refund payments for capital expenditures made by ERCOT in connection with the RMR or MRA service agreement if the resource participates in the energy or ancillary service markets at any time following the termination of the agreement. ERCOT may require less than the entire original amount of capital expenditures to be refunded to reflect the depreciation of capital over time."
  - id: e49
    source: np-03
    locator: "Section 3.14.1.19, Charge for Contributed Capital Expenditures, paragraph (3)(c)"
    quote: "If an RMR Unit or MRA participates in the energy or Ancillary Service markets at any time after the termination date of the RMR or MRA Agreement, the Resource Entity that owns or controls the RMR Unit or the QSE that represents the MRA shall repay, in a lump sum payment, 100% of the remaining book value of the capitalized equipment and capitalized installation charges based on straight-line depreciation over the estimated life of the capitalized component(s) as of the termination date of the RMR or MRA Agreement in accordance with GAAP or IAS standards for electric utility equipment, plus 10% of the value of any accelerated tax depreciation associated with the capital contribution taken by the Resource Entity that owns or controls the RMR Unit or the QSE that represents the MRA during the term of the RMR or MRA Agreement, less any remaining positive salvage value associated with the contributed capital expenditures that was previously repaid in accordance with paragraph (a) or (b) above."
  - id: e50
    source: imm-som-2025
    locator: "page 108 (OCR), Market Operations, E.1 RMR Basics"
    quote: "RMR units receive a standby payment based on the approved budget or actual eligible costs, adjusted for performance and availability. An incentive factor equal to 10% of eligible costs, excluding fuel, may be applied, but it is reduced if the unit fails to meet contracted capacity or availability targets."
  - id: e51
    source: imm-som-2025
    locator: "page 108 (OCR), Market Operations, E.2 RMRs in 2025"
    quote: "ERCOT’s reliability analysis found that retiring these units would significantly increase the risk of overloading key 345-kV transmission lines south of San Antonio and could lead to cascading outages and widespread uncontrolled load loss."
  - id: e52
    source: imm-som-2025
    locator: "Market Operations, E.2 RMRs in 2025 (page after 108; text copy)"
    quote: "covers March 2, 2025, through no later than March 1, 2027. For Units 1 and 2, the ERCOT Board later approved 15 mobile diesel-fired generation units from Life Cycle Power (LCP), with HSLs ranging from 12 to 28 MW, as a temporary reliability solution in lieu of RMR agreements."
  - id: e53
    source: imm-som-2025
    locator: "page 109 (OCR), Market Operations, E.3 RMR Policy Changes"
    quote: "NPRR 1313 changes the calculation of the initial standby cost for RMR Resources from a constant to a variable hourly value that may vary by month during the term of the Agreement based on a monthly budget."
  - id: e54
    source: ercot-fern-board-sysops
    locator: "ERCOT Board system operations presentation on Winter Storm Fern, Braunig Unit 3 bullet"
    quote: "Braunig Unit 3 repairs under Reliability Must Run (RMR) contract were completed prior to the storm."
  - id: e55
    source: ercot-fern-board-sysops
    locator: "ERCOT Board system operations presentation on Winter Storm Fern, Braunig Unit 3 sub-bullet"
    quote: "ERCOT committed the unit throughout storm, providing support to relieve overloads and manage the binding South Texas Export."
  - id: e56
    source: imm-som-2025
    locator: "page 109 (OCR), Market Operations, E.3 RMR Policy Changes"
    quote: "At an October 2025 workshop on out-of-market contracts, ERCOT proposed, among other changes, (1) increasing the NSO notice period from 5 months to 15-21 months, (2) obtaining retirement plans annually through an RFI process from units above a certain age, and (3) changing the budget structure to frontload costs and align budget timelines with actual expenditures."
  - id: e57
    source: imm-som-2025
    locator: "page 110 (OCR), Market Operations, E.4 Contracts for Capacity"
    quote: "Both the RMR and MRA constructs are initiated in response to a resource suspending its operations, whereas the C4C construct uses this RFP process without receiving an NSO."
  - id: e58
    source: ercot-monthly-ops-2026-01
    locator: "ERCOT monthly operations report (January 2026), Operating Days undergoing Criteria Analysis"
    quote: "Operating Days January 14, 2026 to January 16, 2026 were impacted by a software defect that resulted in the Reliability Deployment Price Adder (RDPA) not being triggered when a Reliability Must-Run (RMR) Resource was online for testing. ERCOT corrected the defect on January 17th, 2026."
  - id: e59
    source: np-03
    locator: "Section 3.14.1.2, paragraph (3)(c)(v)"
    quote: "ERCOT may, in its sole discretion, deviate from the above criteria in order to maintain ERCOT System reliability."
  - id: e60
    source: np-03
    locator: "Section 3.14.1.17, paragraph (3)(a), availability reduction"
    quote: "The reduction will be linear; with a 2% reduction in the Incentive Factor payment for every 1% of the Hourly Rolling Equivalent Availability Factor less than the Target Availability stated in the RMR Agreement."
  - id: e61
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMRs in 2025"
    quote: "In March 2024, ERCOT received Notifications of Suspension of Operations (NSOs) stating that three CPS Energy Braunig gas units planned to suspend operations in early 2025."
  - id: e62
    source: imm-som-2025
    locator: "Market Operations chapter, section E, RMR policy changes"
    quote: "The ERCOT Board of Directors approved NPRR 1313 in April 2026, and the PUC will take these up at the May 29 Open Meeting."
  - id: e63
    source: np-03
    locator: "Section 3.14.1.2, paragraph (10), last sentence"
    quote: "This paragraph does not apply to a Generation Resource that suspended operations due to a Forced Outage."
  - id: e64
    source: np-06
    locator: "Section 6.6.6.1, paragraph (3), when the equation applies"
    quote: "For the Initial Settlement and resettlements executed before true-up and before actual cost data is submitted, the standby price of an RMR Unit is either the “Initial Standby Cost” stated in the RMR Agreement or the revised Standby Cost calculated in accordance with paragraph (2) of Section 3.14.1.13."
  - id: e65
    source: np-06
    locator: "Section 6.6.6.1, variable definition of RMRMNFNCC"
    quote: "The actual non-capital and non-fuel Eligible Cost of RMR Unit r represented by QSE q, for the month."
  - id: e66
    source: np-06
    locator: "Section 6.6.6.1, variable definition of RMRMNFCC"
    quote: "The actual non-fuel and capital Eligible Cost of RMR Unit r represented by QSE q, for the month."
  - id: e67
    source: np-06
    locator: "Section 6.6.6.1, variable definition of RMRMNFCC, second sentence"
    quote: "Notwithstanding the above, reservation and transportation costs associated with firm fuel supplies as described in paragraph (1)(a)(vi) of Section 3.14.1.10, Eligible Costs, shall be included herein."
  - id: e68
    source: np-06
    locator: "Section 6.6.6.1, variable definition of MH"
    quote: "The total number of hours of the month, when RMR Unit r represented by QSE q is under an RMR Agreement."
  - id: e69
    source: np-06
    locator: "Section 6.6.6.1, variable definition of RMRIF"
    quote: "The Incentive Factor of RMR Units under RMR Agreement."
---

## Definition

A Reliability Must-Run (RMR) Unit is a Generation Resource operated under an agreement with ERCOT that would not otherwise be operated, because it is necessary for voltage support, stability or management of localized transmission constraints where market solutions do not exist. [e1] A Must-Run Alternative (MRA) is a resource operated under an agreement with ERCOT as an alternative to an RMR Unit. [e2]

## How it works

**Trigger and timeline.** The process starts when a Resource Entity files a Notification of Suspension of Operations (NSO); ERCOT may then begin procuring RMR Service. [e3] Except for a Forced Outage, the Resource Entity must give written notice at least 150 days before it intends to cease or suspend operation for more than 180 days, or at least 90 days before a seasonal mothball. [e19] PUCT rule 25.502(e) likewise requires ERCOT to make a final determination of the need for RMR service within 60 calendar days of receiving the notice. [e45] In the Protocols, Market Participants have 21 days to comment (unless ERCOT shortens it), ERCOT's reliability analysis must be completed within 60 days after receiving Parts I and II of the NSO, and ERCOT conducts that analysis for resources with a summer net max sustainable rating of at least 20 MW. [e20][e23][e21]

**The need test.** A thermal-overload performance deficiency is deemed materially impacted by the resource only if the resource has a more than 2% unloading Shift Factor and more than 5% unloading impact on the overloaded facility; ERCOT may, in its sole discretion, deviate from these criteria in order to maintain ERCOT System reliability. [e22][e59] Before entering an agreement ERCOT must assess alternatives, including re-dispatch or reconfiguration, Automatic Mitigation Plans and Remedial Action Plans, and Remedial Action Schemes. [e4][e16] ERCOT must minimize the use of RMR Units as much as practicable. [e17]

**MRA RFP and Board approval.** Within ten days after a determination that the proposed suspension would cause a performance deficiency the resource materially affects, ERCOT issues an RFP for Must-Run Alternatives. [e24] If it finds an RMR or MRA agreement cost-effective (or finds a deficiency but that an agreement is not cost-effective), it presents the finding to the ERCOT Board for approval, and PUCT rule 25.502 makes ERCOT staff's recommendations subject to board approval. [e8][e47] If ERCOT has neither cleared the unit nor obtained Board approval after 150 days (seasonal mothballs have a separate timing rule), the Resource Entity may file a complaint at the PUCT under 25.502(e)(1); if it does not file, it is deemed to have accepted ERCOT's most recent offer as of the suspension date. [e25][e46] If the Board approves an RMR agreement but it is not yet executed by the suspension date, the unit must stay available for RUC commitment until no longer required to do so under PUCT rule 25.502(e)(2), except that this does not apply to a Generation Resource that suspended operations due to a Forced Outage. [e26][e63]

**Terms.** RMR is voluntary for the owner: a Resource Entity cannot be compelled to sign, and one with an uneconomic unit can petition for RMR status. [e6] ERCOT must contract for the entire capacity of each RMR Unit. [e18] Agreements run from one month to one year, with longer terms allowed when a significant capital expenditure is needed. [e5] While under RMR the unit may not participate in the bilateral energy market, self-provide energy (other than plant auxiliary load) or provide Ancillary Service to any entity. [e7] No later than 90 days after an RMR agreement is executed, ERCOT must report a list of feasible alternatives that may later be more cost-effective than continued renewal. [e27]

**Money.** Eligible Costs are those the owner would incur to provide RMR Service, excluding fuel costs or other costs it would have incurred anyway had it been mothballed or shut down; depreciation, return on equity and debt costs are among the examples that are not eligible. [e28][e29] The initial Standby Cost for each month is the monthly approved budget divided by the hours in the month, and it is recalculated if the remaining-term costs change by more than 10% from the most recently approved budget. [e30][e31] The incentive factor is 10% of actual Eligible Costs, excluding fuel and firm fuel reservation and transportation costs, and it is not applied to capital expenditures; it is reduced linearly for failed capacity tests (2% per 1% of reduced capacity) and for availability below target (2% per 1% of availability shortfall). [e32][e33][e60] Energy payment on the Initial Settlement and settlements before true-up and before actual cost data is submitted uses the estimated input/output curve and startup fuel in the RMR Agreement, actual energy produced and the FIP; other settlements use actual fuel costs. [e37] If the resource later participates in the energy or ancillary service markets, it must refund contributed capital under the Protocols' schedule (100% of remaining book value plus 10% of accelerated tax depreciation, less salvage previously repaid), and the PUCT rule says ERCOT may require less than the full amount to reflect depreciation. [e49][e48] The total RMR cost for all RMR Units is allocated to QSEs representing Load based on load ratio share. [e36]

**Operations.** ERCOT may manually commit an RMR Unit through DRUC or HRUC to resolve a transmission constraint, and may submit Energy Offer Curves at the effective VOLL on its behalf, unless ERCOT declares a Market Suspension, in which case no Energy Offer Curves are submitted. [e39][e38] ERCOT sets the unit's mitigated offer cap at the highest value expected to allow SCED to dispatch it. [e40] A pending change (NPRR826, to take effect upon system implementation) would instead use a single price ($/MWh) as the MOC curve for the full operating range of the Resource. [e41]

**Must-Run Alternatives (pending text).** The saved protocol text for Section 3.14.4 sits inside a pending NPRR885 and NPRR995 box and is not yet in effect. As proposed there, ERCOT may procure MRA Service, subject to Board approval, if the MRA agreements would address the reliability need identified in the RMR study more cost-effectively, each MRA must provide at least five MW, and a clearing price mechanism shall not be used for awarding offers. [e42][e43][e44]

## Formula

Hourly standby price in $ per hour, used for resettlements after actual cost data is submitted (np-06 Section 6.6.6.1; the Initial Settlement and earlier resettlements use the Initial Standby Cost or revised Standby Cost instead): [e35][e64]

`RMRSBPR = (RMRMNFNCC * (1 + RMRIF * RMRCRF * RMRARF) + RMRMNFCC) / MH` [e35]

- RMRMNFNCC is the actual non-capital and non-fuel Eligible Cost for the month; RMRMNFCC is the actual non-fuel and capital Eligible Cost for the month, and it also includes firm fuel reservation and transportation costs. [e65][e66][e67]
- RMRIF is the incentive factor of the unit under its agreement (10% of actual Eligible Costs excluding fuel and firm fuel reservation and transportation costs, not applied to capital expenditures, before reductions); the formula scales it by RMRCRF and RMRARF. [e69][e32][e33]
- RMRCRF and RMRARF are the capacity and availability reduction factors; the incentive factor falls 2% for each 1% of reduced capacity in a Capacity Test, and 2% for each 1% of availability below the Target Availability. [e33][e60]
- Availability is measured as available MW per hour per the final COP over contracted MW per hour for the previous 4380 hours. [e34]
- MH is the total number of hours of the month when the unit is under an RMR Agreement. [e68]

## ERCOT context

RMR addresses local reliability needs where market solutions do not exist, an RMR unit may not trade bilaterally or provide Ancillary Service, and the owner cannot be compelled into a contract. [e1][e7][e6] The IMM describes compensation as a standby payment based on the approved budget or actual eligible costs, adjusted for performance and availability, plus a 10% incentive factor that is reduced for missed capacity or availability. [e50]

The IMM reports that in March 2024 ERCOT received NSOs for three CPS Energy Braunig gas units, and that ERCOT's reliability analysis found retiring them would significantly increase the risk of overloading key 345-kV lines south of San Antonio. [e61][e51] The ERCOT Board approved RMR service for Braunig Unit 3 (HSL about 410 MW) on February 24, 2025; the agreement runs from March 2, 2025 through no later than March 1, 2027, and for Units 1 and 2 the Board later approved 15 mobile diesel-fired generation units with HSLs of 12 to 28 MW as a temporary solution in lieu of RMR agreements. [e9][e52] The IMM counts RMR settlement as part of the 2025 uplift, with RMR uplift the largest contributor to the increase at $68 million of $668 million in total uplift, and says the mobile generating units had produced about 1,226 MWh with maximum aggregate output of RMR units under 40 MW. [e10][e11] ERCOT allocates the cost of RMR agreements to LSEs. [e12]

In a February 2026 Board system operations update on Winter Storm Fern (January 2026), ERCOT said Braunig Unit 3 repairs under the RMR contract were completed before the storm and that ERCOT committed the unit throughout the storm to relieve overloads and manage the binding South Texas Export. [e54][e55] A monthly operations report notes a software defect on January 14 to 16, 2026 that stopped the RDPA being triggered when an RMR Resource was online for testing; ERCOT corrected it on January 17. [e58]

## Timeline

- March 2024: NSOs received for three Braunig units. [e61]
- February 24, 2025: ERCOT Board approves RMR for Braunig Unit 3. [e9]
- March 2, 2025: Braunig Unit 3 agreement period starts, to run no later than March 1, 2027. [e52]
- October 2025: ERCOT workshop on out-of-market contracts proposes a longer NSO notice period (15-21 months instead of 5), annual retirement-plan RFIs and a frontloaded budget structure. [e56]
- April 2026: the ERCOT Board approves NPRR1313 (variable monthly initial standby cost), per the IMM; ERCOT proposes NPRR1330 on mitigated offer caps for RMR units. [e53][e62][e13]

## Key facts

- RMR agreements run one month to one year unless a significant capital expenditure justifies longer. [e5]
- A unit under RMR may not trade bilaterally, self-provide energy or provide Ancillary Service. [e7]
- RMR and MRA agreements require ERCOT Board approval. [e8]
- Notice: 150 days before suspension (90 for seasonal mothball); ERCOT's reliability analysis within 60 days. [e19][e23]
- Incentive factor: 10% of actual Eligible Costs excluding fuel (and not applied to capital expenditures), reduced 2% per 1% shortfall. [e32][e33]
- RMR uplift was $68 million of $668 million total uplift in 2025. [e10]
- RMR costs are allocated to LSEs (QSEs representing Load by load ratio share in settlement). [e12][e36]

## Say it like this

RMR is ERCOT paying a plant that wants to retire to stay available because the local grid would be at risk without it. It is a short, voluntary contract outside the market, so the cost shows up as uplift on load. [e6][e5][e36]

## Common confusion

RMR is not capacity market revenue and not a routine commitment tool: it applies only where market solutions do not exist, and the owner cannot be forced into it. [e1][e6] An MRA is the alternative to an RMR unit, not the same contract. [e2] The 10% incentive factor applies to eligible costs excluding fuel and is not applied to capital expenditures, so it is not a mark-up on the whole payment. [e32] And the IMM separates RMR and MRA, which respond to a resource suspending operations, from contracts for capacity (C4C), which use the RFP process without an NSO. [e57]

## Questions

### What makes a unit eligible for RMR?

It must be necessary to provide voltage support, stability or management of localized transmission constraints where market solutions do not exist, and the owner must be willing. [e1][e6]

### Who approves an RMR agreement?

ERCOT presents its finding to the ERCOT Board for approval after assessing alternatives. [e4][e8]

### Who pays?

The IMM says ERCOT allocates RMR costs to LSEs, and the Protocols allocate the total to QSEs representing Load by load ratio share; RMR settlement counts in the uplift the IMM reports ($68 million of $668 million in 2025). [e12][e36][e10]

### How is an RMR unit paid?

A standby payment from the approved budget (or actual eligible costs later), adjusted for capacity and availability and including an incentive factor, plus energy paid on fuel costs. [e30][e35][e37]

### Why can a retiring owner not just walk away if ERCOT needs the unit?

The owner must give notice and, if ERCOT's 150 days pass without a determination or Board approval, it can complain to the PUCT. If the Board has approved an RMR agreement that is not yet executed, the unit must stay available for RUC (not applicable after a Forced Outage). [e19][e25][e26][e63] But ERCOT cannot compel an RMR agreement. [e6]

### What if the RMR need disappears?

ERCOT must report exit alternatives within 90 days of execution and, for multi-year agreements, re-evaluate the need annually. [e27][e5] If the unit then trades in the market, contributed capital must be refunded. [e49][e48]

### Why would ERCOT choose an MRA over an RMR unit?

Under the proposed MRA text, ERCOT may procure an MRA if it addresses the reliability need in a more cost-effective manner than an RMR agreement. This text is pending. [e42]

## Open items

- Resolved 2026-11-21: eligible costs, standby cost, incentive factor, capital contribution refunds, exit strategy and the PUCT 25.502 framework are now sourced.
- Section 3.14.4 (MRA) and Attachment N (the standard form MRA agreement) are inside pending NPRR885 and NPRR995 boxes, so MRA detail is quoted only as pending text; the actual MRA terms in force were not found.
- ERCOT proposed NPRR 1330 in April 2026 on mitigated offer caps for RMR units and the Board approved NPRR1313 in April 2026 (PUCT to consider May 29 per the IMM); whether the PUCT approved either, and their implementation status, was not found in the saved sources.
- The IMM discusses Contracts for Capacity (C4C) and NPRR 1315 as a related construct; only its framing is sourced here and not the Protocol text.
- The IMM's e11 figures (RMR units under 40 MW output, mobile generating units) are not tied in the saved text to the 410 MW Braunig Unit 3 approval; the IMM states the RMR resources have a total capacity of around 730 MW, but how that is composed was not quoted.
- Cost of the Braunig Unit 3 agreement and the actual RMR standby cost were not found in the saved sources.
