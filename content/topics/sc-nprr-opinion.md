---
id: sc-nprr-opinion
name: "Scenario: Pitch Your View on a Market Rule"
aliases: [pitch a market rule, NPRR opinion question, market design view interview, DRRS debate, Non-Spin duration debate]
kind: scenario
domain: cases
level: 2
lenses: [analyst, portfolio, trading]
as_of: 2026-11-18
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
    note: NPRR1309 reduces the Non-Spin duration requirements from four hours to two hours, given that DRRS has at least a four-hour duration. [e9]
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
---

## Definition

This scenario asks the candidate to take and defend a position on an ERCOT market rule, which in practice means a Revision Request. An NPRR is a request to add, edit, delete, revise or clarify the Protocols, and every Revision Request needs PUCT approval before it is implemented. [e1][e5]

## How it works

Step 1, know the path. Comments on a posted Revision Request are due within 14 days, PRS reviews it, and TAC can recommend approval, reject, table, remand or refer it. [e4][e2] The ERCOT Board can designate a request a Board Priority Revision Request, and the PUCT must approve before implementation. [e3][e5]

Step 2, pick a live debate with a public record. ERCOT called NPRR1309 the third iteration of the DRRS design, and the statute sets minimum characteristics for DRRS: reduce RUC by the amount procured, run at least four hours at High Sustained Limit, and be On-Line within two hours of being called. [e7][e6] DRRS is offered, awarded and paid in both the DAM and RTM. [e7][e8] The contested piece was a side change: Non-Spin's duration requirement is reduced from four hours to two. [e9]

Step 3, give the positions as recorded. At PRS on 4/15/26 participants proposed desktop edits to maintain the current four-hour Non-Spin duration. [e22] The IMM opposed that PRS version and proposed a two-hour Non-Spin; ERCOT's 4/28/26 comments did the same, and TAC approved on 4/29/26 with five opposing votes from LCRA, Brazos, STEC, Vistra and Constellation. [e23][e25][e10] LCRA called the two-hour change premature without more analysis, and Vistra argued it was not required for DRRS, should wait for the 2029 AS methodology review, and could degrade durable reserves and increase RUC of thermal units. [e11][e12] The Board recommended approval unanimously on 6/2/26 and the PUCT approved on 7/9/26. [e14][e15]

Step 4, bring evidence for your side. The IMM says NSRS was priced at a premium in 2025 because of oversized procurement and the four-hour duration, under which a storage resource must carry four hours of energy for its NSRS award; its Recommendation 2024-2 asks for one hour. [e17] It also says ERCOT's proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]

## Key facts

- Every Revision Request needs PUCT approval before implementation. [e5]
- DRRS statutory criteria: at least four hours at HSL, on-line within two hours, and RUC reduced by the amount procured. [e6]
- NPRR1309: Non-Spin duration requirements reduced from four hours to two. [e9]
- NPRR1309 timeline: TAC 4/29/26, Board 6/2/26, PUCT approval 7/9/26; estimated project duration 20 to 30 months. [e10][e14][e15][e16]
- IMM: proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]

## Say it like this

(Guidance) "My view is that the Non-Spin duration cut in NPRR1309 is right, because a four-hour requirement makes storage hold four times its award in energy and the IMM shows that drove Non-Spin to a price premium. The best counter-argument is the generators' and co-ops': shorter reserves may lead to more out-of-market RUC, so I would want ERCOT to track RUC volumes after DRRS goes live." [e9][e17][e12]

## Common confusion

(Guidance) TAC and the ERCOT Board recommend; the PUCT approves. [e5] Another trap is presenting a rule debate as one-sided: the NPRR1309 record shows different positions: the IMM and ERCOT proposed a two-hour Non-Spin, PRS participants proposed keeping four hours, LCRA, Brazos, STEC, Vistra and Constellation voted against at TAC, and the Texas REP Coalition asked for a date-certain to avoid regulatory uncertainty affecting retail pricing. [e23][e25][e22][e10][e24]

## Questions

### Why did some members oppose cutting Non-Spin to two hours?

LCRA said the change was premature without more analysis, and Vistra said it was not required for DRRS, should be evaluated in the 2029 AS methodology review, and risked degrading durable reserves and increasing RUC of thermal generators. [e11][e12]

### What is the IMM's position?

The IMM supported keeping DRRS a reserve product rather than a resource adequacy tool, tied to reliability criteria, and in its February 2026 comments said Non-Spin's duration should be reduced to one hour upon implementation of DRRS. [e13] Its April 2026 comments proposed redlines to lower the Non-Spin duration to two hours. [e23] In its 2025 report it ties the NSRS price premium to oversized procurement and the four-hour duration. [e17]

### Give another live rule debate.

Transmission cost allocation: the IMM says the 4CP method no longer aligns with cost causation, and a PUCT proposal for publication would replace 4CP with 12CP. [e19][e20] Load zones are a third: the IMM keeps recommending that ERCOT reconfigure them to reflect current congestion. [e21]

## Scenarios

### "Pick an ERCOT market rule you have a view on and pitch it to me in two minutes."

- (Reasoning) Choose a rule with a public record, state the problem, your position, the best counter-argument, and what evidence would change your mind.
- The rule: NPRR1309 is the third iteration of the DRRS design [e7] and reduces the Non-Spin duration requirements from four hours to two. [e9]
- Why it matters: the IMM says the four-hour duration plus oversized procurement drove an NSRS price premium in 2025, because a storage resource must carry four hours of energy for its NSRS award. [e17]
- Supporting evidence: the IMM finds ERCOT's proposed AS Methodology procures 140% more than the 1-in-10 load shed standard requires. [e18]
- The other side: Vistra argued the cut was not needed for DRRS, should wait for the 2029 AS methodology review, and could increase RUC of thermal units; LCRA called it premature. [e12][e11]
- Process facts: PRS participants proposed edits to keep four hours, TAC approved two hours with five opposing votes, the Board approved unanimously, and the PUCT approved on 7/9/26. [e22][e10][e14][e15]
- (Reasoning) Your position: support the cut on efficiency grounds, but propose a measurable check, such as tracking RUC volumes and reserve shortages after go-live, which answers the generators' concern directly.
- Implementation reality: ERCOT estimates 20 to 30 months to implement, so the effect is not immediate. [e16]
- (Reasoning) Close by naming what would change your view: evidence that shorter reserves raise RUC or shortages, the concern Vistra raised. [e12]

## Open items

- The timing of the Non-Spin duration reduction relative to DRRS go-live is not stated in the NPRR1309 Revision Description item quoted (the IMM's February comment says 'upon implementation of DRRS'); the IMM's recommendation moved from one hour (February) to two hours (April) in the saved comments.
- No saved source gives the DRRS go-live date; only the 20 to 30 month implementation estimate.
- Whether the PUCT adopted the 12CP proposal in Project 58000 is not in the saved sources.
- The NPRR1310 outcome (ESR participation and release factor for DRRS) was not checked.
- Deeper pass: the joint IMM/ERCOT DRRS demand curve proposal from the March 2026 TAC workshop is referenced but its parameters were not sourced.
- Deeper pass: the IMM's load zone reconfiguration analysis (Recommendation 2020-3) and any ERCOT response.
