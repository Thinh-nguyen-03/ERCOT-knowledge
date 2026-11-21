---
id: sc-nprr-opinion
name: "Scenario: Pitch Your View on a Market Rule"
aliases: [pitch a market rule, NPRR opinion question, market design view interview, DRRS debate, Non-Spin duration debate]
kind: scenario
domain: cases
level: 2
lenses: [analyst, portfolio, trading]
as_of: 2026-11-21
depth: deep
links:
  - to: nprr
    type: example-of
    note: An NPRR is the request to add, edit or delete Protocol language, and every Revision Request needs PUCT approval before implementation. [e1][e5]
  - to: stakeholder-process
    type: used-in
    note: NPRR1309 went through PRS, TAC, the ERCOT Board and the PUCT, with recorded segment votes. [e10][e14][e15]
  - to: drrs
    type: example-of
    note: Under NPRR1309, DRRS is offered, awarded and paid in both the DAM and the RTM. [e8]
  - to: non-spin
    type: affects
    note: NPRR1309, approved with an effective date of "Upon system implementation", reduces the Non-Spin duration requirements from four hours to two hours, given that DRRS has at least a four-hour duration. [e9][e26]
  - to: imm
    type: related
    note: The IMM recommends a one-hour NSRS duration and argues ERCOT's AS Methodology over-procures reserves. [e17][e18]
  - to: four-cp
    type: related
    note: The IMM says 4CP no longer aligns with cost-causation principles, and a PUCT proposal would replace 4CP with 12CP. [e19][e20]
  - to: load-zone
    type: related
    note: The IMM keeps recommending that ERCOT reconfigure its load zones to reflect current congestion patterns. [e21]
  - to: energy-storage-resource
    type: affects
    note: A four-hour NSRS duration means a storage resource must hold four hours of energy for its award, which the IMM says raises its cost of participating. [e17]
  - to: asdc
    type: affects
    note: The joint ERCOT/IMM proposal replaced the original linear DRRS demand curve with one derived from the Aggregate Operating Reserve Demand Curve. [e31]
  - to: ruc
    type: affects
    note: The statute requires DRRS to reduce the amount of RUC by the amount of DRRS procured, and RUC will prioritize committing Off-Line DRRS Resources. [e6][e42]
evidence:
  - id: e1
    source: np-21
    locator: "Section 21.1(1), Introduction"
    quote: "A request to make additions, edits, deletions, revisions, or clarifications to these Protocols, including any attachments and exhibits to these Protocols, is called a Nodal Protocol Revision Request (NPRR)."
  - id: e2
    source: np-21
    locator: "Section 21.4.8(2), Technical Advisory Committee Vote"
    quote: "In considering action on a PRS Report, TAC shall: (a) Recommend approval of the Revision Request as recommended in the PRS Report or as modified by TAC; (b) Reject the Revision Request; (c) Table the Revision Request; (d) Remand the Revision Request to PRS with instructions; or (e) Refer the Revision Request to another TAC subcommittee or a TAC working group or task force with instructions."
  - id: e3
    source: np-21
    locator: "Section 21.5(3), Board Priority"
    quote: "The ERCOT Board may designate any existing Revision Request a Board Priority Revision Request."
  - id: e4
    source: np-21
    locator: "Section 21.4.4(2), Protocol Revision Subcommittee Review and Action"
    quote: "To receive consideration, comments must be delivered electronically to ERCOT in the designated format provided on the ERCOT website within 14 days from the posting date of the Revision Request."
  - id: e5
    source: np-21
    locator: "Section 21.4.11(1), PUCT Approval of Revision Requests"
    quote: "All Revision Requests require approval by the PUCT prior to implementation."
  - id: e6
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (December 1, 2025), Background/History"
    quote: "Subsection (d) of § 39.159 establishes certain minimum characteristics for DRRS, including that the service reduce the amount of Reliability Unity Commitment (RUC) by the amount of DRRS procured and that participating Resources: (A) be capable of running for at least four hours at the Resource’s High Sustained Limit; (B) be On-Line and dispatchable not more than two hours after being called on for deployment; and (C) have the dispatchable flexibility to address inter-hour operational challenges."
  - id: e7
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1, Key Takeaways slide"
    quote: "NPRR1309 is the third iteration of DRRS design and presents requested improvements while meeting all statutory criteria"
  - id: e8
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Revision Description, item 2"
    quote: "DRRS is offered, awarded, and paid in both the Day-Ahead Market (DAM) and the Real-Time Market (RTM);"
  - id: e9
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Revision Description, item 13"
    quote: "Given that DRRS has at least a four-hour duration, the Non-Spin duration requirements are reduced from four hours to two hours."
  - id: e10
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, TAC Decision"
    quote: "On 4/29/26, TAC voted to recommend approval of NPRR1309 as recommended by PRS in the 4/15/26 PRS Report as amended by the 4/28/26 ERCOT II comments. There were five opposing votes from the Cooperative (3) (LCRA, Brazos, STEC) and Independent Generator (2) (Vistra, Constellation) Market Segments and one abstention from the Cooperative (GSEC) Market Segment."
  - id: e11
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Explanation of Opposing TAC Votes, Cooperative/LCRA"
    quote: "LCRA voted ‘No’ on the TAC motion as the modification of the Non-Spin duration to two-hours is premature without more analysis."
  - id: e12
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Explanation of Opposing TAC Votes, Independent Generator/Vistra"
    quote: "The reduction in Non-Spin duration from 4 hours to 2 hours was (1) not required to implement DRRS; (2) would be better evaluated during the 2029 Ancillary Services methodology review to align with DRRS go-live; and (3) raises concerns about the degradation of durable reserve quality and the implications for reactionary out-of-market activities (such as increased RUCing of thermal generators)."
  - id: e13
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Comments Received, IMM 020326"
    quote: "Outlined that the IMM is in favor of keeping DRRS a reserve product and not an explicit tool for resource adequacy; that procurement of DRRS should be tied to reliability criteria and that its demand curve should be designed to achieve these reliability criteria effectively; that they are seeking clarification on ERCOT’s intended treatment of Non-Spin relative to DRRS, and that the duration requirement for Non-Spin should be reduced to one hour upon implementation of DRRS"
  - id: e14
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, ERCOT Board Decision"
    quote: "On 6/2/26, the ERCOT Board voted unanimously to recommend approval of NPRR1309 as recommended by TAC in the 4/29/26 TAC Report."
  - id: e15
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, PUCT Decision"
    quote: "On 7/9/26, the PUCT approved NPRR1309 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e16
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Estimated Impacts"
    quote: "Project Duration: 20 to 30 months"
  - id: e17
    source: imm-som-2025
    locator: "Ancillary Services chapter, page 63 (OCR)"
    quote: "Two structural factors drove this price premium: oversized NSRS procurement volume on a capacity basis and the associated four-hour duration requirement. To provide NSRS, an energy storage resource must carry four hours of energy corresponding to its NSRS award, which significantly increases the effective cost of participation. In SOM Recommendation 2024-2, we propose reducing this duration requirement to one hour."
  - id: e18
    source: imm-som-2025
    locator: "Ancillary Services chapter, AS Methodology parameters (OCR)"
    quote: "Together, these inputs yield the proposed AS Methodology, which procures 140% more than required to satisfy the 1-in-10 reliability standard for load shed."
  - id: e19
    source: imm-som-2025
    locator: "Recommendation 2015-1, Transition Away from the 4CP Method, page 154 (OCR)"
    quote: "Whatever virtues this methodology once had, it no longer aligns with cost-causation principles and fails to send efficient signals for new transmission investments."
  - id: e20
    source: puct-58000-pfp
    locator: "Project 58000, Proposal for Publication (for the July 9, 2026 open meeting), page 1"
    quote: "The proposal will restyle amended §25.192 to Transmission Service Rates, replace the four coincident peak (4CP) methodology with a 12 coincident peak (12CP) methodology for assigning transmission costs, codify using a 30-minute interval to measure 12CP"
  - id: e21
    source: imm-som-2025
    locator: "Chapter I, Congestion section"
    quote: "We continue to recommend that ERCOT revise the prevailing load zone configuration to reflect these evolving congestion patterns."
  - id: e22
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Summary of PRS Discussion (4/15/26)"
    quote: "Participants proposed additional desktop edits to the 4/9/26 Joint Commenters comments to maintain the current four-hour duration for Non-Spin and to clarify language related to ramping expectations for Resources providing DRRS."
  - id: e23
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Comments Received, IMM 042426"
    quote: "Opposed NPRR1309 as recommended by PRS and proposed additional redlines to lower the Non-Spin duration to two hours"
  - id: e24
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Comments Received, Texas REP Coalition 020426"
    quote: "Requested a date-certain be added into NPRR1309 to avoid any regulatory uncertainty around the new Ancillary Service unnecessarily impacting retail pricing"
  - id: e25
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, Comments Received, ERCOT 042826"
    quote: "Responded to the 4/24/26 IMM comments and proposed additional redlines to lower the Non-Spin duration to two hours"
  - id: e26
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, header table, Effective Date row"
    quote: "Effective Date | | Upon system implementation"
  - id: e27
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report (2026-07-09), Proposed Protocol Language Revision, Section 2.1, definition of DRRS"
    quote: "An Ancillary Service that provides operating reserves that are intended to manage uncertainty on the ERCOT System while mitigating the need for Reliability Unit Commitment (RUC) instructions."
  - id: e28
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3 (June 1-2, 2026), slide 7, Summary"
    quote: "NPRR 1309 / NOGRR 283 are before the Board for approval today. Implementation in 2028."
  - id: e29
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 6, duration requirements"
    quote: "March 2026 PUCT guidance confirms 4hour DRRS duration to be maintained for now"
  - id: e30
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 6, duration requirements"
    quote: "ERCOT intends to conduct a holistic analysis to determine procurement quantities and duration requirements for each Ancillary Service."
  - id: e31
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309, Board item 15.1.2.3, slide 4, demand curve design"
    quote: "The Joint ERCOT/IMM proposal replaced the original linear demand curve for DRRS with one derived from the existing Aggregate Operating Reserve Demand Curve (AORDC)."
  - id: e32
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), section 2, The DRRS Demand Curve Should Reflect its Reliability Value"
    quote: "The currently proposed demand curve decreases linearly from $150/MWh to a $10/MWh floor corresponding to the DRRS plan determined by the procurement methodology. While we commend ERCOT for designing a demand curve that scales with its corresponding Ancillary Service procurement target, ERCOT has not reported the empirical basis for either of the curve’s endpoints or for its linear shape."
  - id: e33
    source: np-04
    locator: "Section 4.4.12, pending box [NPRR1309: Replace paragraph (9) above ... upon system implementation]"
    quote: "The DRRS ASDC will have a floor price of $10 per MW per hour, applied in the DAM and RTM, for the portion of the DRRS ASDC that corresponds to the Ancillary Service Plan for DRRS."
  - id: e34
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments, reservation 3 from the first set of comments"
    quote: "With the implementation of DRRS as a four-hour-duration product by statutory requirement, there is no plausible rationale for maintaining Non-Spin as a four-hour-duration product. Non-Spin should only be required to have enough duration to last until DRRS resources can be deployed, which is defined as a maximum of two-hour cold start for offline DRRS."
  - id: e35
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments, joint ERCOT/IMM comments of April 9, 2026, proposal 2"
    quote: "The duration requirement for Non-Spin was reduced to two hours. We would prefer a one-hour duration requirement for Non-Spin, but, given the two-hour start-time for DRRS, this compromise represented a reasonable step in the right direction."
  - id: e36
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments, after the two joint proposals"
    quote: "When NPRR1309 was raised at PRS, ERCOT did not provide justification or support for the reliability case for reducing the requirement to two hours. The NPRR was desktop edited during the meeting and passed with the desktop edits. Thus, we can no longer offer our support for this NPRR."
  - id: e37
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments on NPRR1309 (April 24, 2026), Comments, reservation 1 from the first set of comments"
    quote: "The procurement volumes for DRRS are still unknown and could increase the excessive volumes defined by the prevailing Ancillary Service Methodology."
  - id: e38
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report, Justification of Reason for Revision, Non-Spin bullet"
    quote: "Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours."
  - id: e39
    source: imm-som-2025
    locator: "page 63 (OCR), Chapter III.B, Ancillary Services Market"
    quote: "After NPRR 1282 took effect, RTC-SCED explicitly enforced the four-hour duration requirement for NSRS, reinforcing a structural design flaw that predictably inflated NSRS prices."
  - id: e40
    source: imm-som-2025
    locator: "page 149 (OCR), Recommendations, 2024-2"
    quote: "for NSRS for energy storage resources, which must maintain a state of charge four times their NSRS obligation. For example, a 10 MW NSRS award would require 40 MWh of stored capacity."
  - id: e41
    source: imm-som-2025
    locator: "page 161 (OCR), Appendix I, Figure A5 discussion (5 December 2025 to February 2026)"
    quote: "Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1."
  - id: e42
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 6"
    quote: "6. When looking to commit capacity during the Reliability Unit Commitment (RUC) process, RUC will prioritize committing Off-Line Generation Resources providing DRRS. This is accomplished because Off-Line DRRS Resources will appear to have lower start-up and minimum energy costs relative to other Off-Line Generation Resources in the RUC optimization;"
  - id: e43
    source: imm-som-2025
    locator: "Recommendations, 2021-2: Implement an Uncertainty Product"
    quote: "ERCOT’s current proposal for DRRS an operating reserve under NPRR 1309 incorporates both design principles. If ERCOT implements it correctly, DRRS should reduce reliance on costly out-of-market actions and lower reserve procurement costs compared to holding excessive 30minute reserves."
  - id: e44
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(a), pending box [NPRR1309: Replace paragraph (ii) above upon system implementation]"
    quote: "(ii) Running at a specified output level for at least two consecutive hours;"
  - id: e45
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Timeline"
    quote: "Urgent – On 12/8/25, the Board designated Nodal Protocol Revision Request (NPRR) 1309 a Board Priority Revision Request."
  - id: e46
    source: imm-som-2025
    locator: "page 93 (OCR), Chapter V.G.1, The Case for Updating the Load Zones in ERCOT"
    quote: "A regular process for updating ERCOT’s load zone configuration is critical for zonal pricing to send efficient signals to load for consumption and investment. This is especially important because ERCOT’s topology will continue to become more complex, while any approved load zone configuration will take effect four years after approval."
  - id: e47
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.G.3, Methodology for Defining Load Zones"
    quote: "We evaluated a 7-load-zone configuration using data from January 2022 through December 2025."
  - id: e48
    source: imm-som-2025
    locator: "page 153 (OCR), Recommendation 2020-3"
    quote: "To date, ERCOT has not indicated that it intends to revisit or revise the current load zone structure."
  - id: e49
    source: np-03
    locator: "Section 3.4.2, paragraph (1), Load Zone Modifications"
    quote: "Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below."
  - id: e50
    source: imm-som-2025
    locator: "page 153 (OCR), Recommendation 2020-3"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e51
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "Because 4CP charges are based solely on contribution to peak demand, operationally flexible loads, such as cryptocurrency mines, can shift a disproportionate share of transmission costs onto other consumers."
  - id: e52
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, request for comments (p. 5)"
    quote: "Comments must be filed by August 11, 2026."
---

## Definition

This scenario asks the candidate to take and defend a position on an ERCOT market rule, which in practice means a Revision Request. An NPRR is a request to add, edit, delete, revise or clarify the Protocols, and every Revision Request needs PUCT approval before it is implemented. [e1][e5]

## How it works

Step 1, know the path. To receive consideration, comments on a posted Revision Request must be delivered within 14 days of posting, PRS reviews it, and TAC can recommend approval, reject, table, remand or refer it. [e4][e2] The ERCOT Board can designate a request a Board Priority Revision Request, and the PUCT must approve before implementation. [e3][e5] NPRR1309 itself was designated a Board Priority Revision Request by the Board on 12/8/25. [e45]

Step 2, pick a live debate with a public record. ERCOT called NPRR1309 the third iteration of the DRRS design, and the statute sets minimum characteristics for DRRS: reduce RUC by the amount procured, run at least four hours at High Sustained Limit, and be On-Line within two hours of being called. [e7][e6] The approved definition calls DRRS an Ancillary Service providing operating reserves intended to manage uncertainty while mitigating the need for RUC instructions, and DRRS is offered, awarded and paid in both the DAM and RTM. [e27][e8] The contested piece was a side change: under the approved NPRR, Non-Spin's duration requirement is reduced from four hours to two, which shows up in the Protocols as a pending box replacing "at least four consecutive hours" with "at least two consecutive hours" upon system implementation. [e9][e44] The PUCT Report lists the NPRR's effective date as "Upon system implementation", with an estimated project duration of 20 to 30 months, and ERCOT told the Board in June 2026 that implementation is in 2028. [e26][e16][e28]

Step 3, know the history behind the number. When NPRR1282 was approved, its justification said Non-Spin duration should remain at not less than four hours, based on historical risk-relevant deployments and sustained under-forecast error in six hour-ahead net load. [e38] The IMM says that after NPRR1282 took effect, RTC-SCED explicitly enforced the four-hour NSRS duration, which in its view is a structural design flaw that inflated NSRS prices. [e39]

Step 4, give the positions as recorded. In its February 2026 comments the IMM recommended a one-hour Non-Spin duration upon implementation of DRRS. [e13] The IMM then worked with ERCOT on joint comments filed April 9, 2026; the IMM says they reduced Non-Spin duration to two hours, which it called a compromise given the two-hour start time for DRRS, though it would prefer one hour. [e35] At PRS on 4/15/26 participants proposed desktop edits to maintain the current four-hour Non-Spin duration, and the IMM says ERCOT gave no reliability justification for two hours at PRS, so it withdrew its support for the PRS version. [e22][e36] The IMM and ERCOT then each proposed redlines to restore the two-hour Non-Spin, and on 4/29/26 TAC voted to recommend approval with five opposing votes from LCRA, Brazos, STEC, Vistra and Constellation. [e23][e25][e10] LCRA called the two-hour change premature without more analysis, and Vistra argued it was not required for DRRS, should wait for the 2029 AS methodology review, and could degrade durable reserves and increase RUC of thermal units. [e11][e12] The Board recommended approval unanimously on 6/2/26 and the PUCT approved on 7/9/26. [e14][e15]

Step 5, bring evidence for your side. The IMM says NSRS was priced at a premium in 2025 because of oversized procurement and the four-hour duration, under which a storage resource must carry four hours of energy for its NSRS award; its Recommendation 2024-2 asks for one hour. [e17] Its example: a 10 MW NSRS award requires 40 MWh of stored capacity. [e40] For December 5, 2025 to February 2026 the IMM reports that NSRS cleared on average four times higher than ECRS and eight times higher than RRS, consistent with the ratio of their duration requirements. [e41] It also says ERCOT's proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]

Step 6, know the second front: the demand curve. The original DRRS demand curve fell linearly from $150/MWh to a $10/MWh floor, and the IMM said ERCOT had not reported the empirical basis for either endpoint or the linear shape. [e32] The joint ERCOT/IMM proposal replaced it with a curve derived from the existing Aggregate Operating Reserve Demand Curve (AORDC). [e31] The pending Protocol text gives the DRRS ASDC a $10 per MW per hour floor in the DAM and RTM for the portion that corresponds to the DRRS Ancillary Service Plan. [e33]

## Key facts

- Every Revision Request needs PUCT approval before implementation. [e5]
- DRRS statutory criteria: at least four hours at HSL, on-line within two hours, and RUC reduced by the amount procured. [e6]
- NPRR1309 as approved: Non-Spin duration requirements are reduced from four hours to two; the report lists the effective date as "Upon system implementation". [e9][e26]
- NPRR1309 timeline: Board Priority 12/8/25, TAC 4/29/26, Board 6/2/26, PUCT approval 7/9/26; estimated project duration 20 to 30 months, with ERCOT citing implementation in 2028. [e45][e10][e14][e15][e16][e28]
- In March 2026, per ERCOT, PUCT guidance confirmed the four-hour DRRS duration is to be maintained for now, and ERCOT intends a holistic analysis of procurement quantities and durations for each Ancillary Service. [e29][e30]
- IMM: proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]
- IMM, December 5, 2025 to February 2026: NSRS cleared four times ECRS and eight times RRS on average, in line with their duration ratio. [e41]

## Timeline

- NPRR1282: its justification held that Non-Spin duration should remain at not less than four hours. [e38]
- 12/8/25: the Board designates NPRR1309 a Board Priority Revision Request. [e45]
- February 3, 2026: IMM comments recommend reducing Non-Spin to one hour upon implementation of DRRS. [e13]
- April 9, 2026: joint ERCOT/IMM comments, which per the IMM set Non-Spin at two hours and tie the DRRS curve to the AORDC. [e35][e31]
- 4/15/26: PRS participants desktop-edit to keep four hours; the IMM withdraws support for the PRS version. [e22][e36]
- 4/29/26 TAC, 6/2/26 Board, 7/9/26 PUCT approval of the two-hour version. [e10][e14][e15]

## Say it like this

(Guidance) "My view is that the Non-Spin duration cut in NPRR1309 is right, because a four-hour requirement makes storage carry four hours of energy for its award and the IMM argues that drove Non-Spin to a price premium. The best counter-argument is the generators' and co-ops': shorter reserves may lead to more out-of-market RUC, so I would want ERCOT to track RUC volumes after DRRS goes live." [e9][e17][e12]

(Guidance) A tighter version for a follow-up: "Two hours is not arbitrary: it is the window DRRS needs to come on line, so Non-Spin only has to bridge until DRRS arrives." [e34]

## Common confusion

(Guidance) TAC and the ERCOT Board recommend; the PUCT approves. [e5] Another trap is presenting a rule debate as one-sided: the NPRR1309 record shows different positions: the IMM and ERCOT proposed a two-hour Non-Spin, PRS participants proposed keeping four hours, LCRA, Brazos, STEC, Vistra and Constellation voted against at TAC, and the Texas REP Coalition asked for a date-certain to avoid regulatory uncertainty affecting retail pricing. [e23][e25][e22][e10][e24]

(Guidance) "Approved" is not "in force". The two-hour Non-Spin text sits in a pending box until system implementation, so today's Non-Spin rule is still four hours. [e44][e26]

(Guidance) Do not say the IMM "changed its mind" from one hour to two without context: it calls two hours a compromise it accepted given DRRS's two-hour start time, while still preferring one hour. [e35]

## Questions

### Why did some members oppose cutting Non-Spin to two hours?

LCRA said the change was premature without more analysis, and Vistra said it was not required for DRRS, should be evaluated in the 2029 AS methodology review, and risked degrading durable reserves and increasing RUC of thermal generators. [e11][e12]

### What is the IMM's position?

The IMM supported keeping DRRS a reserve product rather than a resource adequacy tool, tied to reliability criteria, and in its February 2026 comments said Non-Spin's duration should be reduced to one hour upon implementation of DRRS. [e13] Its April 2026 comments proposed redlines to lower the Non-Spin duration to two hours, which it describes as a compromise given the two-hour DRRS start time. [e23][e35] In its 2025 report it ties the NSRS price premium to oversized procurement and the four-hour duration. [e17]

### Why two hours rather than one, or four?

The IMM's argument is that once DRRS carries the statutory four-hour duration, Non-Spin only needs to last until DRRS can be deployed, which is a maximum two-hour cold start for offline DRRS. [e34] DRRS resources must be able to reach their award within two hours. [e6] The four-hour case was made in NPRR1282, which cited historical Non-Spin deployments and sustained six hour-ahead net load under-forecast error. [e38]

### What if DRRS procurement volumes turn out large?

The IMM warns that DRRS procurement volumes are still unknown and could add to what it calls the excessive volumes of the prevailing AS Methodology. [e37] ERCOT says it intends a holistic analysis of procurement quantities and duration requirements for each Ancillary Service. [e30] (Reasoning) So a candidate who supports the duration cut should also say the volume question is open and separate.

### Why does a duration rule show up in price?

For storage, the duration sets how much energy must be held per MW of award: the IMM's example is 40 MWh for a 10 MW NSRS award. [e40] The IMM reports that from December 5, 2025 to February 2026 NSRS cleared on average four times higher than ECRS and eight times higher than RRS, consistent with the ratio of their duration requirements. [e41]

### Why might DRRS reduce RUC, and how is that built in?

The statute requires DRRS to reduce RUC by the amount procured. [e6] Under NPRR1309, RUC will prioritize committing Off-Line DRRS Resources because they appear to have lower start-up and minimum energy costs in the RUC optimization. [e42] The IMM says DRRS, implemented correctly, should reduce reliance on costly out-of-market actions. [e43]

### Give another live rule debate.

Transmission cost allocation: the IMM says the 4CP method no longer aligns with cost causation, and a PUCT proposal for publication would replace 4CP with 12CP; comments on it were due August 11, 2026. [e19][e20][e52] The IMM's sharpest argument: because 4CP charges depend only on peak contribution, flexible loads such as cryptocurrency mines can shift a disproportionate share of transmission costs onto other consumers. [e51] Load zones are a third: the IMM keeps recommending that ERCOT reconfigure them to reflect current congestion. [e21]

## Scenarios

### "Pick an ERCOT market rule you have a view on and pitch it to me in two minutes."

- (Reasoning) Choose a rule with a public record, state the problem, your position, the best counter-argument, and what evidence would change your mind.
- The rule: NPRR1309 is the third iteration of the DRRS design [e7] and reduces the Non-Spin duration requirements from four hours to two. [e9]
- Why it matters: the IMM says the four-hour duration plus oversized procurement drove an NSRS price premium in 2025, because a storage resource must carry four hours of energy for its NSRS award. [e17] A 10 MW award means 40 MWh held. [e40]
- Why two hours: per the IMM, Non-Spin only needs to last until DRRS, with its maximum two-hour cold start, can be deployed. [e34]
- Supporting evidence: the IMM finds ERCOT's proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]
- The other side: Vistra argued the cut was not needed for DRRS, should wait for the 2029 AS methodology review, and could increase RUC of thermal units; LCRA called it premature. [e12][e11] NPRR1282 had earlier justified keeping four hours on historical deployments and net load forecast error. [e38]
- Process facts: PRS participants proposed edits to keep four hours, TAC recommended approval of the two-hour version with five opposing votes, the Board voted unanimously to recommend approval, and the PUCT approved on 7/9/26. [e22][e10][e14][e15]
- (Reasoning) Your position: support the cut on efficiency grounds, but propose a measurable check, such as tracking RUC volumes and reserve shortages after go-live, which answers the generators' concern directly.
- Implementation reality: ERCOT estimates 20 to 30 months to implement and cites 2028, so the effect is not immediate. [e16][e28]
- (Reasoning) Close by naming what would change your view: evidence that shorter reserves raise RUC or shortages, the concern Vistra raised. [e12]

### Variant: "Pitch a change to ERCOT's load zones."

- The problem as the IMM states it: generators settle at nodal prices while loads pay the load zone price, a load-weighted average of nodal prices in the zone. [e50]
- The IMM's work: it evaluated a 7-load-zone configuration using data from January 2022 through December 2025. [e47]
- The process constraint: load zone changes need ERCOT Board approval and take effect 48 months after the end of the month of approval, with stated exceptions. [e49] The IMM argues for a regular update process precisely because any change takes effect four years after approval. [e46]
- The status: the IMM says ERCOT has not indicated it intends to revisit the load zone structure. [e48]
- (Reasoning) Counter-argument to name: a four-year lag means any configuration is drawn on today's congestion for a grid four years out, so the pitch should include a recurring review rather than a one-off redraw.

## Open items

- Resolved 2026-11-21: the IMM's move from one hour (February) to two hours (April) is explained in its April 24, 2026 comments as a compromise in the joint ERCOT/IMM comments of April 9, 2026. [e35]
- The NPRR1309 PUCT Report lists the effective date as 'Upon system implementation' and the Non-Spin two-hour text sits in an NPRR1309 pending box; whether the Non-Spin change and DRRS go live on the same day was not confirmed beyond ERCOT's "Implementation in 2028" slide.
- The IMM's April 24, 2026 summary frames the two-hour requirement as one "for Energy Storage Resources (ESRs) participating in Non-Spin", while the approved revision description and pending box apply two hours to Non-Spin generally; this wording difference was not reconciled.
- No saved source gives an exact DRRS go-live date; only the 20 to 30 month estimate and "Implementation in 2028".
- Whether the PUCT adopted the 12CP proposal in Project 58000 is not in the saved sources.
- The NPRR1310 outcome (ESR participation and release factor for DRRS) and NPRR1340 were not checked.
- The final parameters of the AORDC-derived DRRS demand curve (beyond the $10 floor) were not quoted from the approved language.
- No ERCOT response to the IMM's 7-load-zone analysis (Recommendation 2020-3) is in the saved sources beyond the IMM's statement that ERCOT has not indicated it will revisit the structure.
