---
id: drrs
name: DRRS (Dispatchable Reliability Reserve Service)
aliases: [DRRS, Dispatchable Reliability Reserve Service, NPRR1309, NOGRR283, NPRR1235, NPRR1203, NPRR1310, NPRR1340, DRRS+]
kind: product
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: ancillary-services
    type: part-of
    note: NPRR1309 defines DRRS as an Ancillary Service. [e1][e7]
  - to: non-spin
    type: related
    note: The first DRRS proposal (NPRR1203) would have made it a Non-Spin subtype, and NPRR1309 reduces the Non-Spin duration requirement from four hours to two hours once DRRS is implemented. [e6][e16][e5]
  - to: ruc
    type: related
    note: The statute requires ERCOT to reduce reliability unit commitment by the amount of DRRS procured. [e3]
  - to: rtc-b
    type: related
    note: The NPRR1309 design lets DRRS be awarded in Real-Time and co-optimized with energy and other Ancillary Services. [e7]
  - to: energy-storage-resource
    type: related
    note: NPRR1309 limits DRRS to Generation Resources; storage participation was carried into NPRR1340 in June 2026. [e4][e13]
  - to: texas-legislature
    type: related
    note: HB 1500 (88th Legislature, 2023) added resource criteria and the RUC reduction requirement to PURA 39.159(d)(2)-(3). [e3]
  - to: pcm
    type: contrasts-with
    note: DRRS is an Ancillary Service that provides operating reserves, not a capacity or reliability credit program. [e1]
  - to: asdc
    type: related
    note: The approved NPRR1309 text gives DRRS its own ASDC cut from the AORDC, with a $0.01/MWh minimum price and a $10 per MW per hour floor. [e33][e34]
  - to: resource-adequacy
    type: related
    note: ERCOT's separate NPRR1310 Release Factor would let DRRS support resource adequacy, but the IMM wants DRRS kept a pure reserve product. [e40][e45]
  - to: imm
    type: related
    note: The IMM co-wrote the April 2026 demand-curve and Non-Spin proposals with ERCOT, then withdrew support for the PRS version. [e46][e47]
evidence:
  - id: e1
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report (2026-07-09), Proposed Protocol Language Revision, Section 2.1, definition of DRRS"
    quote: "An Ancillary Service that provides operating reserves that are intended to manage uncertainty on the ERCOT System while mitigating the need for Reliability Unit Commitment (RUC) instructions."
  - id: e2
    source: pura-39
    locator: "PURA Sec. 39.159(d)"
    quote: "The commission shall require the independent organization certified under Section 39.151 for the ERCOT power region to develop and implement an ancillary services program to procure dispatchable reliability reserve services on a day-ahead and real-time basis to account for market uncertainty."
  - id: e3
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 22, adding Utilities Code Sec. 39.159(d)(2)-(3)"
    quote: "(2)  develop criteria for resource participation that require a resource to: (A)  be capable of running for at least four hours at the resource's high sustained limit; (B)  be online and dispatchable not more than two hours after being called on for deployment; and (C)  have the dispatchable flexibility to address inter-hour operational challenges; and (3)  reduce the amount of reliability unit commitment by the amount of dispatchable reliability reserve services procured under this section."
  - id: e4
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report (2026-07-09), new Section 3.17.5, Dispatchable Reliability Reserve Service, paragraph (1)"
    quote: "DRRS is provided using capacity from: (a) Off-Line Generation Resources that can demonstrate a ramping capability within two hours to a specified output level and operate at that output level for at least four consecutive hours; and (b) On-Line Generation Resources that can demonstrate a ramping capability within two hours to a specified output level and operate at that output level for at least four consecutive hours."
  - id: e5
    source: imm-som-2025
    locator: "Chapter III (Ancillary Services), NSRS duration discussion"
    quote: "However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set the duration for NSRS at two hours upon the implementation of the long-foretold Dispatchable Reliability Reserve Service (DRRS). DRRS is statutorily required to carry a four-hour duration requirement."
  - id: e6
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History"
    quote: "On September 27, 2023, ERCOT submitted NPRR1203, Implementation of Dispatchable Reliability Reserve Service, to establish DRRS as a subtype of an existing Ancillary Service, Non-Spinning Reserve Service (Non-Spin). H.B. 1500 § 51 established a statutory deadline of December 1, 2024, by which to implement DRRS and establishing DRRS as a sub-type of an existing Ancillary Service was deemed necessary to allow for implementation by this deadline."
  - id: e7
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History"
    quote: "NPRR1235 only permitted participation in DRRS by Off-Line Resources. In order to incorporate stakeholder feedback for design improvements, ERCOT has withdrawn NPRR1235, and on November 20, 2025, submitted NPRR1309, Dispatchable Reliability Reserve Service Ancillary Service. This new NPRR meets all statutory criteria of TEX. UTIL. CODE § 39.159(d) while improving on NPRR1235 by allowing On-Line Resources to participate in DRRS in addition to Off-Line Resources. This new design enables DRRS to be awarded in Real-Time and accordingly procurement of DRRS may be cooptimized with procurement of energy and other Ancillary Services."
  - id: e8
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Timeline"
    quote: "Urgent – On 12/8/25, the Board designated Nodal Protocol Revision Request (NPRR) 1309 a Board Priority Revision Request."
  - id: e9
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, TAC Decision"
    quote: "On 4/29/26, TAC voted to recommend approval of NPRR1309 as recommended by PRS in the 4/15/26 PRS Report as amended by the 4/28/26 ERCOT II comments. There were five opposing votes from the Cooperative (3) (LCRA, Brazos, STEC) and Independent Generator (2) (Vistra, Constellation) Market Segments and one abstention from the Cooperative (GSEC) Market Segment."
  - id: e10
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, ERCOT Board Decision"
    quote: "On 6/2/26, the ERCOT Board voted unanimously to recommend approval of NPRR1309 as recommended by TAC in the 4/29/26 TAC Report."
  - id: e11
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, PUCT Decision"
    quote: "On 7/9/26, the PUCT approved NPRR1309 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e12
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Estimated Impacts"
    quote: "Project Duration: 20 to 30 months"
  - id: e13
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026 (published 2026-07-10), DRRS Adopted by Board and PUCT"
    quote: "Design and pricing refinements for energy storage resource participation in DRRS continued at the Protocol Revision Subcommittee (PRS) on June 10, where ERCOT filed NPRR1340 with companion NOGRR288 to carry the storage discussion forward."
  - id: e15
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History"
    quote: "On May 29, 2024, ERCOT submitted NPRR1235, Dispatchable Reliability Reserve Service as a Stand-Alone Ancillary Service, to establish DRRS as a new Ancillary Service separate from Non-Spin."
  - id: e14
    source: imm-som-2025
    locator: "Recommendations, 2021-2: Implement an Uncertainty Product"
    quote: "ERCOT’s current proposal for DRRS an operating reserve under NPRR 1309 incorporates both design principles. If ERCOT implements it correctly, DRRS should reduce reliance on costly out-of-market actions and lower reserve procurement costs compared to holding excessive 30minute reserves."
  - id: e16
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 13"
    quote: "13. Given that DRRS has at least a four-hour duration, the Non-Spin duration requirements are reduced from four hours to two hours."
  - id: e17
    source: pura-39
    locator: "PURA Sec. 39.159(d)(1) and (e)"
    quote: "(1)  determine the quantity of services necessary based on historical variations in generation availability for each season based on a targeted reliability standard or goal, including intermittency of non-dispatchable generation facilities and forced outage rates, for dispatchable generation facilities;"
  - id: e18
    source: pura-39
    locator: "PURA Sec. 39.159(e)"
    quote: "Notwithstanding Subsection (d)(2)(A), the independent organization certified under Section 39.151 for the ERCOT power region may require a resource to be capable of running for more than four hours as the organization determines is needed."
  - id: e19
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, items 2-3"
    quote: "2. DRRS is offered, awarded, and paid in both the Day-Ahead Market (DAM) and the Real-Time Market (RTM);"
  - id: e20
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 6"
    quote: "6. When looking to commit capacity during the Reliability Unit Commitment (RUC) process, RUC will prioritize committing Off-Line Generation Resources providing DRRS. This is accomplished because Off-Line DRRS Resources will appear to have lower start-up and minimum energy costs relative to other Off-Line Generation Resources in the RUC optimization;"
  - id: e21
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 8"
    quote: "8. DRRS capacity will be considered in the calculation of the Qualified Scheduling Entities’ (QSEs’) RUC Capacity Short charges;"
  - id: e22
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 9"
    quote: "9. DRRS deployments will not qualify for RUC Make-Whole Payments or RUC Clawback Charges. For RUC blocks that are contiguous with a DRRS deployment, only minimum energy costs for the RUC hours will be included in the RUC Guarantee;"
  - id: e23
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for Section 3.9.1, Off-Line Resource Statuses"
    quote: "(C) DRRS – Off-Line and available for DRRS deployment;"
  - id: e24
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for new Section 6.5.7.6.2.5, Deployment of Dispatchable Reliability Reserve Service (DRRS)"
    quote: "(2) ERCOT shall deploy Off-Line DRRS by operator Dispatch Instruction. The deployment of DRRS must always be 100% of the Ancillary Service capability for DRRS on an individual Resource. (3) Resources providing DRRS must provide an Energy Offer Curve for use by SCED. (4) Off-Line Generation Resources providing DRRS must be capable of being dispatched to their DRRS award within two hours of receiving a Dispatch Instruction from ERCOT."
  - id: e25
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for Section 5.5.2(19)"
    quote: "The RUC process, including any Verbal Dispatch Instructions (VDIs), will be used to deploy DRRS from Off-Line Generation Resources showing a DRRS Resource Status in the COP. A commitment instruction issued to a Resource that is providing DRRS will be treated as a DRRS deployment for any hours in which the Resource has a DRRS award."
  - id: e26
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for new Section 8.1.1.2.1.8, Dispatchable Reliability Reserve Service Qualification"
    quote: "(1) Each Resource being offered to provide Dispatchable Reliability Reserve Service (DRRS) must be capable of ramping to its Ancillary Service award for DRRS within two hours. DRRS may only be provided from capability that is not fulfilling any other energy or capacity commitment."
  - id: e27
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for new Section 8.1.1.2.1.8(4)"
    quote: "For any Resource requesting qualification for providing Off-Line DRRS, a qualification test for each Resource to provide DRRS is conducted during a continuous eight-hour period agreed to by the QSE and ERCOT."
  - id: e28
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for new Section 4.6.4.1.6, Dispatchable Reliability Reserve Service Payment"
    quote: "(1) ERCOT shall pay each QSE whose Resource-specific Ancillary Service Offers to provide DRRS to ERCOT were cleared in the DAM, for each hour as follows:"
  - id: e29
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for Section 6.6.1.6(6), Real-Time Market Clearing Prices for Ancillary Services"
    quote: "The Real-Time MCPC for DRRS is the time-weighted average of the sum of the Real-Time MCPC for DRRS and Real-Time Reliability Deployment Price Adders for Ancillary Service for DRRS of each SCED interval in the 15-minute Settlement Interval."
  - id: e30
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Estimated Impacts"
    quote: "Cost/Budgetary: Between $3.0M and $5.0M"
  - id: e31
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Explanation of Opposing TAC Votes (Cooperative/LCRA)"
    quote: "LCRA voted ‘No’ on the TAC motion as the modification of the Non-Spin duration to two-hours is premature without more analysis."
  - id: e32
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Explanation of Opposing TAC Votes (Independent Generator/Vistra)"
    quote: "The reduction in Non-Spin duration from 4 hours to 2 hours was (1) not required to implement DRRS; (2) would be better evaluated during the 2029 Ancillary Services methodology review to align with DRRS go-live; and (3) raises concerns about the degradation of durable reserve quality and the implications for reactionary out-of-market activities (such as increased RUCing of thermal generators)."
  - id: e33
    source: np-04
    locator: "Section 4.4.12, pending box [NPRR1309: Replace paragraph (9) above ... upon system implementation]"
    quote: "The DRRS ASDC will have a floor price of $10 per MW per hour, applied in the DAM and RTM, for the portion of the DRRS ASDC that corresponds to the Ancillary Service Plan for DRRS."
  - id: e34
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for Section 4.4.12(7)(b), minimum prices table"
    quote: "Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100 ECRS Min Price $/MWh 15 Non-Spin Min Price $/MWh 5 DRRS Min Price $/MWh 0.01"
  - id: e35
    source: np-05
    locator: "Section 5.5.2, pending box [NPRR1309: Replace paragraph (2) above ... upon system implementation]"
    quote: "ERCOT shall create an ASDC for each Ancillary Service for use in RUC, except DRRS."
  - id: e36
    source: ercot-drrs-workshop-3
    locator: "TAC DRRS Workshop 3 (March 9, 2026), slide 8"
    quote: "Current DRRS Demand Curve is a linear curve sloping down from $150/MW/h"
  - id: e37
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3 (June 1-2, 2026), slide 4, demand curve design"
    quote: "The Joint ERCOT/IMM proposal replaced the original linear demand curve for DRRS with one derived from the existing Aggregate Operating Reserve Demand Curve (AORDC)."
  - id: e38
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 5, shortage floor pricing"
    quote: "NPRR1309 proposes a $10/MWh floor to reflect the relative reliability value of DRRS in realtime, particularly when compared to Non-Spinning Reserve Service (Non-Spin) which has a $15/MWh floor"
  - id: e39
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 7, Summary"
    quote: "NPRR 1309 / NOGRR 283 are before the Board for approval today. Implementation in 2028."
  - id: e40
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 2, NPRR 1310 column"
    quote: "Release Factor: Allows ERCOT to define a proportion of DRRS capacity able to overlap with energy/other Ancillary Service awards when larger quantities of DRRS are procured to directly support resource adequacy and incentivize new dispatchable capacity."
  - id: e41
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 2, NPRR 13XX (ESR participation) column"
    quote: "At the 3/26/2026 Open Meeting, PUCT provided guidance to consider ESR participation in a separate NPRR."
  - id: e42
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 2, NPRR 13XX (ESR participation) column"
    quote: "If approved in 2026, can be implemented along with NPRR 1309 in 2028."
  - id: e43
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 6, duration requirements"
    quote: "March 2026 PUCT guidance confirms 4hour DRRS duration to be maintained for now"
  - id: e44
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 6, duration requirements"
    quote: "ERCOT intends to conduct a holistic analysis to determine procurement quantities and duration requirements for each Ancillary Service."
  - id: e45
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), introduction"
    quote: "In these comments, we will outline (1) how this proposal addresses our prior concerns with NPRR1235, (2) that we are in favor of keeping DRRS a reserve product and not an explicit tool for resource adequacy,"
  - id: e46
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments"
    quote: "That engagement resulted in our second set of comments, which were filed jointly with ERCOT on April 9, 2026."
  - id: e47
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Summary"
    quote: "The IMM no longer supports Nodal Protocol Revision Request (NPRR) 1309 as recommended by PRS."
  - id: e48
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), section 2, The DRRS Demand Curve Should Reflect its Reliability Value"
    quote: "The currently proposed demand curve decreases linearly from $150/MWh to a $10/MWh floor corresponding to the DRRS plan determined by the procurement methodology. While we commend ERCOT for designing a demand curve that scales with its corresponding Ancillary Service procurement target, ERCOT has not reported the empirical basis for either of the curve’s endpoints or for its linear shape."
  - id: e49
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), section 4, Reduce Non-Spin Duration Requirement to One Hour"
    quote: "As a result, we recommend that the implementation of DRRS should at the same time relax the duration requirement for Non-Spin from 4 hours to 1 hour."
  - id: e50
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments, item 1"
    quote: "The procurement volumes for DRRS are still unknown and could increase the excessive volumes defined by the prevailing Ancillary Service Methodology."
  - id: e51
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History, p. 2"
    quote: "issued a letter to the PUCT that was filed in PUCT Project No. 55156 and urged the PUCT “to direct ERCOT to revise NPRR 1203 to establish DRRS as a standalone ancillary service, even if doing so will cause a delay in the implementation timeline while, of course, still expeditiously pursued."
  - id: e52
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History, p. 1"
    quote: "establishing DRRS as a sub-type of an existing Ancillary Service was deemed necessary to allow for implementation by this deadline. However, on October 17, 2023, Senator"
  - id: e53
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 slides (December 8-9, 2025), slide 3"
    quote: "Public Utility Commission of Texas designated DRRS as a key PUCT priority in approval of ERCOT’s budget on November 6, 2025"
  - id: e54
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026, DRRS Adopted by Board and PUCT"
    quote: "DRRS works by competitively procuring dispatchable resources to stand in reserve so that the ERCOT Control Room can utilize this tool when net demand runs higher than forecast or when wind and solar output falls short, particularly during the evening hours when solar drops off and demand stays high."
  - id: e55
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Comments Received (TCPA 4/23/26 and ERCOT 4/23/26)"
    quote: "Proposed additional redlines to remove language exempting DRRS from the $15/MWh ASDC floor and to insert “market uncertainty” into relevant DRRS citations to better align with statutory language"
  - id: e56
    source: ercot-drrs-workshop-3
    locator: "TAC DRRS Workshop 3 (March 9, 2026), slide 8"
    quote: "Assume DRRS Operational Reserve requirement = 1,500 MW."
  - id: e57
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Summary of PRS Discussion (4/15/26)"
    quote: "Participants proposed additional desktop edits to the 4/9/26 Joint Commenters comments to maintain the current four-hour duration for Non-Spin and to clarify language related to ramping expectations for Resources providing DRRS."
---
## Definition

DRRS is a new Ancillary Service, set up under NPRR1309 (approved by the PUCT on July 9, 2026 but not yet implemented), that provides operating reserves to manage uncertainty on the ERCOT System while mitigating the need for Reliability Unit Commitment (RUC) instructions. [e1][e7][e11][e12] It exists because state law requires ERCOT to procure dispatchable reliability reserve services on a day-ahead and real-time basis to account for market uncertainty. [e2] ERCOT describes it as a tool the control room can use when net demand runs higher than forecast or wind and solar fall short, especially in the evening. [e54]

## How it works

The statute sets the minimum design. ERCOT must size the service from historical variations in generation availability for each season, based on a targeted reliability standard or goal, including renewable intermittency and forced outage rates of dispatchable units. [e17] A participating resource must be able to run for at least four hours at its high sustained limit, be online and dispatchable within two hours of being called, and have the flexibility to handle inter-hour operational problems. ERCOT must also reduce reliability unit commitment by the amount of DRRS it procures. [e3] ERCOT may require more than four hours if it decides that is needed. [e18]

Under the approved NPRR1309 language, DRRS comes from both Off-Line and On-Line Generation Resources that can ramp to a set output within two hours and hold it for at least four consecutive hours. [e4] It is offered, awarded and paid in both the DAM and the RTM. [e19] Compared with the withdrawn NPRR1235, which allowed only Off-Line Resources, NPRR1309 lets DRRS be awarded in Real-Time, so its procurement can be co-optimized with energy and the other Ancillary Services. [e7] DRRS may only come from capability that is not fulfilling any other energy or capacity commitment. [e26] An Off-Line Resource qualifies through an eight-hour test window agreed with ERCOT. [e27]

Deployment runs through RUC. Off-Line Resources carrying DRRS show a new "DRRS" Resource Status in the COP. [e23] RUC prioritizes committing them because they appear to have lower start-up and minimum-energy costs than other Off-Line units in the optimization. [e20] A RUC commitment of a Resource holding a DRRS award is treated as a DRRS deployment for those hours. [e25] ERCOT deploys Off-Line DRRS by operator Dispatch Instruction, always at 100% of the Resource's DRRS capability; the unit must reach its award within two hours and must have an Energy Offer Curve in SCED. [e24]

NPRR1309 also changes Non-Spin: its revision description says that, given DRRS has at least a four-hour duration, the Non-Spin duration requirements are reduced from four hours to two hours. [e16] The IMM describes this as taking effect upon DRRS implementation, and says DRRS is statutorily required to carry a four-hour duration requirement. [e5] Storage participation is not in NPRR1309; after PUCT guidance on March 26, 2026 to handle it separately, ERCOT filed NPRR1340 and NOGRR288 in June 2026, and said that if approved in 2026 it could be implemented with NPRR1309 in 2028. [e4][e41][e13][e42]

## Formula

Pricing. In the approved text, DRRS gets its own ASDC as the fifth product cut from the AORDC, with a minimum price of $0.01/MWh (against ECRS $15 and Non-Spin $5 in the same table). [e34] The DRRS ASDC has a floor of $10 per MW per hour, applied in the DAM and RTM, over the part that matches the DRRS AS Plan; the other ASDCs keep the $15 floor. [e33] RUC does not get a DRRS ASDC. [e35] The real-time DRRS MCPC is the time-weighted average, over the SCED intervals in the 15-minute Settlement Interval, of the DRRS MCPC plus the Reliability Deployment Price Adder for DRRS. [e29]

Settlement. In the DAM, each QSE whose DRRS offers cleared is paid the DAM DRRS MCPC times its awarded MW, hour by hour. [e28] DRRS capacity counts in the QSE's RUC Capacity Short charge. [e21] DRRS deployments do not qualify for RUC Make-Whole Payments or RUC Clawback Charges, and for RUC blocks contiguous with a DRRS deployment only minimum-energy costs go into the RUC Guarantee. [e22]

## ERCOT context

Status: NPRR1309 is decided but not live. The PUCT approved it on July 9, 2026, after the ERCOT Board recommended approval on June 2, 2026. [e11][e10] ERCOT's impact analysis estimated a cost of $3.0M to $5.0M and a project duration of 20 to 30 months. [e30][e12] ERCOT told the Board in June 2026 that implementation is planned for 2028. [e39] Until then every DRRS rule above sits in "upon system implementation" boxes. [e33][e35]

DRRS took three tries. NPRR1203 (2023) proposed it as a subtype of Non-Spin to meet HB 1500's December 1, 2024 deadline. [e6] On October 17, 2023, legislative committee leaders wrote to the PUCT urging that ERCOT make DRRS a standalone service even if that delayed implementation. [e52][e51] NPRR1235 (May 2024) proposed it as a stand-alone Ancillary Service but Off-Line only; ERCOT withdrew it and filed NPRR1309 (November 2025) instead. [e15][e7] The PUCT had designated DRRS a key priority in approving ERCOT's budget on November 6, 2025. [e53]

The demand curve changed during review. As filed, it was a linear curve sloping down from $150/MW/h; ERCOT's workshop example used an illustrative 1,500 MW requirement. [e36][e56] The IMM criticized that curve in February 2026 (it fell linearly to a $10 floor, and ERCOT had not reported the empirical basis for its endpoints or shape). [e48] ERCOT and the IMM then filed joint comments on April 9, 2026; their proposal replaced the linear curve with one derived from the AORDC and set minimum prices for each ASDC. [e46][e37] ERCOT proposed the $10 floor to reflect DRRS's lower reliability value relative to Non-Spin's $15 floor; TCPA had proposed removing the exemption from the $15 floor. [e38][e55]

Non-Spin duration was the fight. LCRA called the two-hour Non-Spin change premature without more analysis, and Vistra said it was not required for DRRS and should wait for the 2029 AS methodology review. [e31][e32] The IMM wanted one hour (February 2026), co-proposed two hours with ERCOT, and on April 24, 2026 withdrew support for the PRS version, which had been desktop-edited to keep four hours. [e49][e46][e57][e47] TAC then restored two hours and recommended approval with five opposing votes. [e9][e16] ERCOT says it will do a holistic analysis of AS quantities and durations before DRRS goes live. [e44]

The IMM's position is a party view: it wants DRRS kept a reserve product, not a resource-adequacy tool, and warns that DRRS procurement volumes are still unknown. [e45][e50] In its 2025 report it said that, if implemented correctly, DRRS under NPRR1309 should reduce reliance on costly out-of-market actions. [e14] ERCOT's NPRR1310 "Release Factor", which needs explicit PUCT direction, would let part of a larger DRRS quantity overlap other awards to support resource adequacy. [e40]

## Key facts

- Statutory criteria: seasonal quantity based on a reliability standard or goal; at least 4 hours at HSL; online within 2 hours; inter-hour flexibility; RUC reduced by the amount procured. [e17][e3]
- NPRR1309 eligibility: Off-Line and On-Line Generation Resources that can ramp within two hours and hold output for at least four consecutive hours; no ESRs. [e4]
- PUCT approval: July 9, 2026 (Project No. 54445). [e11]
- Estimated implementation: 20 to 30 months, $3.0M to $5.0M; ERCOT plans 2028. [e12][e30][e39]
- DRRS ASDC (pending): $0.01/MWh minimum price, $10 per MW per hour floor over the DRRS AS Plan. [e34][e33]
- NPRR1309 reduces the Non-Spin duration requirement from four hours to two hours; the IMM says this applies upon DRRS implementation. [e16][e5]
- DRRS deployments get no RUC make-whole and no clawback. [e22]

## Timeline

- 2023-09-27: ERCOT files NPRR1203, DRRS as a Non-Spin subtype, aiming at the December 1, 2024 statutory deadline in HB 1500. [e6]
- 2023-10-17: legislative committee leaders' letter urges a standalone DRRS even at the cost of delay. [e52][e51]
- 2024-05-29: ERCOT files NPRR1235, DRRS as a stand-alone Ancillary Service, Off-Line Resources only. [e15][e7]
- 2025-11-06: PUCT designates DRRS a key priority in ERCOT's budget approval. [e53]
- 2025-11-20: ERCOT withdraws NPRR1235 and files NPRR1309 (On-Line and Off-Line, co-optimized). [e7]
- 2025-12-08: ERCOT Board designates NPRR1309 a Board Priority Revision Request (Urgent). [e8]
- 2026-02-03: IMM gives qualified support, criticizes the linear demand curve, asks for a one-hour Non-Spin. [e48][e49]
- 2026-03-09: TAC DRRS Workshop 3 presents the linear curve and a new joint IMM/ERCOT curve proposal. [e36]
- 2026-03-26: PUCT guidance (Open Meeting) to keep the four-hour DRRS duration for now and handle ESR participation in a separate NPRR, as reported by ERCOT. [e43][e41]
- 2026-04-09: joint ERCOT/IMM comments (AORDC-based DRRS curve, two-hour Non-Spin). [e46][e37]
- 2026-04-15: PRS recommends approval with desktop edits keeping four-hour Non-Spin; 2026-04-24 the IMM withdraws support. [e57][e47]
- 2026-04-29: TAC recommends approval with the two-hour Non-Spin (five "no" votes). [e9]
- 2026-06-02: ERCOT Board votes unanimously to recommend approval; ERCOT states implementation in 2028. [e10][e39]
- 2026-06-10: ERCOT files NPRR1340 and NOGRR288 for storage participation in DRRS (pending). [e13]
- 2026-07-09: PUCT approves NPRR1309. [e11]
- Go-live: planned for 2028 per ERCOT; not yet in effect. [e39]

## Say it like this

(Guidance) DRRS is the new four-hour, two-hour-start reserve the Legislature told ERCOT to build to account for market uncertainty, deployed through RUC and priced off its own demand curve. [e3][e25][e34] It was approved in July 2026, but ERCOT plans to implement it in 2028, so today it is approved rule text, not a live product. [e11][e39]

## Common confusion

(Guidance) DRRS is not the PCM or a capacity market: it is an Ancillary Service bought day-ahead and in real time. [e2] It is also not the same as Non-Spin, even though the first design was a Non-Spin subtype; NPRR1309 makes it a separate service and reduces the Non-Spin duration requirement to two hours once DRRS goes live. [e6][e16][e5] "Approved" does not mean "in effect": after the July 2026 PUCT approval, ERCOT still plans a 2028 implementation. [e11][e39] Keep NPRR1309 (core product, approved) apart from NPRR1310 (Release Factor, needs PUCT direction) and the ESR NPRR (filed June 2026, pending). [e40][e13]

## Questions

### What does the statute require of DRRS?

ERCOT must size it seasonally from historical generation availability against a reliability standard or goal. [e17] A resource must be able to run at least four hours at its HSL, be online and dispatchable within two hours of a call, and have inter-hour flexibility, and ERCOT must reduce RUC by the amount of DRRS procured. [e3] ERCOT may require longer than four hours. [e18]

### Why did ERCOT replace NPRR1235 with NPRR1309?

NPRR1235 allowed only Off-Line Resources. NPRR1309 adds On-Line Resources, which lets DRRS be awarded in Real-Time and co-optimized with energy and other Ancillary Services. [e7]

### Is DRRS live today?

No. The PUCT approved NPRR1309 on July 9, 2026, but ERCOT estimated 20 to 30 months of project work and told the Board it plans implementation in 2028. [e11][e12][e39]

### Why does the DRRS floor sit at $10 when the other ASDCs have $15?

ERCOT says the $10 floor reflects DRRS's lower relative reliability value in real time compared with Non-Spin and its $15 floor. [e38] TCPA argued for applying the $15 floor to DRRS instead. [e55]

### Why was cutting Non-Spin to two hours contested?

The IMM and ERCOT argued that four-hour needs now carried as Non-Spin would be covered by DRRS. [e49][e46] LCRA called the change premature without more analysis, and Vistra said it was not required for DRRS and should wait for the 2029 AS methodology review. [e31][e32] TAC adopted two hours. [e9][e16]

### What if RUC commits a unit that holds a DRRS award?

That commitment counts as a DRRS deployment for the awarded hours. [e25] The unit does not get a RUC make-whole payment or a clawback for the deployment. [e22]

### Why does the IMM care how much DRRS ERCOT buys?

The IMM says DRRS volumes are still unknown and could add to what it sees as already excessive AS procurement, and it wants DRRS kept a reserve product rather than a resource-adequacy tool. [e50][e45]

## Scenarios

### A gas peaker owner asks whether to offer DRRS in 2028.

- The unit must reach its award within two hours and run at least four consecutive hours, and the DRRS MW cannot also back other energy or AS commitments. [e4][e26]
- Off-Line it would sit in the "DRRS" status and be called through RUC, at 100% of its DRRS capability. [e23][e24]
- Revenue is the DAM or RTM DRRS MCPC; deployments carry no RUC make-whole. [e28][e22]
- The DRRS ASDC floor is $10 per MW per hour over the DRRS plan, but the plan size is not yet set. [e33][e50]

## Open items

- The DRRS quantity: NPRR1309 does not change Section 3.16, and no DRRS procurement methodology or seasonal MW requirement is in the saved sources (the 1,500 MW in Workshop 3 is illustrative). ERCOT plans a holistic AS quantity and duration analysis before go-live.
- No firm go-live date beyond ERCOT's "Implementation in 2028" (June 2026 Board slide).
- NPRR1310 (Release Factor) status after June 2026: the June Board slide appears to list it as tabled for evaluation in the 2026 Reliability Assessment (Q4 2026 or Q1 2027), but the column layout makes the attribution uncertain. NPRR1340/NOGRR288 (ESR participation) status after June 10, 2026 not traced.
- The DRRS charge (Section 4.6.4.2.6) allocation basis was not traced beyond the payment formula.
- The PRS discussion mentions desktop edits "to maintain the current four-hour duration for Non-Spin"; the TAC-recommended version (as amended by the 4/28/26 ERCOT II comments) and the PUCT report's revision description reduce it to two hours (cited as e16). The PRS-stage four-hour version is not the approved text.
- Resolved 2026-11-21: settlement (RUC make-whole exclusion, RUC Capacity Short), the DRRS Resource Status, and the October 17, 2023 legislative letter are now covered.
