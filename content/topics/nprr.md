---
id: nprr
name: NPRR (Nodal Protocol Revision Request)
aliases: [NPRR, Nodal Protocol Revision Request, revision request, SCR, System Change Request]
kind: rule
domain: structure
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: nodal-protocols
    type: part-of
    note: An NPRR is the formal request to change the Nodal Protocols. [e1]
  - to: stakeholder-process
    type: used-in
    note: NPRRs move through PRS, TAC and the ERCOT Board before PUCT approval. [e4][e13][e14][e6]
  - to: puct
    type: related
    note: Every NPRR needs PUCT approval before ERCOT implements it. [e6]
  - to: ercot
    type: related
    note: ERCOT checks submissions for completeness and implements approved changes. [e3][e7]
  - to: imm
    type: related
    note: The IMM is one of the entities that may submit an NPRR. [e2]
  - to: sc-nprr-opinion
    type: related
    note: The scenario topic on forming a view on an NPRR builds on this process.
  - to: nodal-market
    type: related
    note: A non-binding ERCOT document lists guiding principles of the Nodal Market that an NPRR should strive to further. [e32]
  - to: large-load-interconnection
    type: related
    note: Rule changes for new Large Load requirements also reach the Protocols through revision requests; see the topic for the NPRR1325 changes.
evidence:
  - id: e1
    source: np-21
    locator: "Section 21.1(1), Introduction"
    quote: "A request to make additions, edits, deletions, revisions, or clarifications to these Protocols, including any attachments and exhibits to these Protocols, is called a Nodal Protocol Revision Request (NPRR)."
  - id: e2
    source: np-21
    locator: "Section 21.2(1), Submission"
    quote: "The following Entities may submit a Nodal Protocol Revision Request (NPRR) or System Change Request (SCR) (“Revision Request”): (a) Any Market Participant; (b) Any ERCOT Member; (c) Public Utility Commission of Texas (PUCT) Staff; (d) The Reliability Monitor; (e) The North American Electric Reliability Corporation (NERC) Regional Entity; (f) The Independent Market Monitor (IMM); (g) ERCOT;"
  - id: e3
    source: np-21
    locator: "Section 21.4.2(3), Submission and evaluation"
    quote: "ERCOT shall evaluate the NPRR for completeness and shall notify the submitter, within five Business Days of receipt, if the NPRR is incomplete, including the reasons for such status."
  - id: e4
    source: np-21
    locator: "Section 21.4.4(2), Protocol Revision Subcommittee Review and Action"
    quote: "To receive consideration, comments must be delivered electronically to ERCOT in the designated format provided on the ERCOT website within 14 days from the posting date of the Revision Request."
  - id: e5
    source: np-21
    locator: "Section 21.5(1), Urgent Revision Requests"
    quote: >-
      The party submitting a Nodal Protocol Revision Request (NPRR) or System Change Request (SCR) (“Revision Request”) may request that the Revision Request be considered on an urgent timeline (“Urgent”) only when the submitter can reasonably show that an existing Protocol or condition is impairing or could imminently impair ERCOT System reliability or wholesale or retail market operations, or is causing or could imminently cause a discrepancy between a settlement formula and a provision of these Protocols.
  - id: e6
    source: np-21
    locator: "Section 21.4.11(1), PUCT Approval of Revision Requests"
    quote: "All Revision Requests require approval by the PUCT prior to implementation."
  - id: e7
    source: np-21
    locator: "Section 21.6(1), Nodal Protocol Revision Implementation"
    quote: "Following Public Utility Commission of Texas (PUCT) approval, ERCOT shall implement Nodal Protocol Revision Requests (NPRRs) on the first day of the month following PUCT approval, unless otherwise provided in the PUCT Report for the approved NPRR."
  - id: e8
    source: np-21
    locator: "Section 21.1(4)(b), Administrative NPRRs"
    quote: >-
      If no Entity submits comments to the Administrative NPRR within ten Business Days in accordance with paragraph (1) of Section 21.4.4, Protocol Revision Subcommittee Review and Action, the Administrative NPRR shall be subject to PUCT approval.
  - id: e9
    source: np-21
    locator: "Section 21.1(2), Introduction"
    quote: "A request that ERCOT change its computer systems that does not require a revision to the Protocols is called a System Change Request (SCR)."
  - id: e10
    source: np-21
    locator: "Section 21.5(3), Board Priority"
    quote: "The ERCOT Board may designate any existing Revision Request a Board Priority Revision Request."
  - id: e11
    source: np-21
    locator: "Section 21.4.1(1), Review and Posting of NPRRs"
    quote: "Nodal Protocol Revision Requests (NPRRs) shall be submitted electronically to ERCOT by completing the designated form provided on the ERCOT website."
  - id: e12
    source: np-21
    locator: "Section 21.1(4)(a), Administrative NPRRs"
    quote: "This type of revision is referred to as an “Administrative NPRR” or “Administrative Changes” and shall consist of non-substantive corrections, such as typos (excluding grammatical changes), internal references (including table of contents), improper use of acronyms, and references to ERCOT Protocols, PUCT Substantive Rules, the Public Utility Regulatory Act (PURA), NERC regulations, Federal Energy Regulatory Commission (FERC) rules, etc."
  - id: e13
    source: np-21
    locator: "Section 21.4.8(2), Technical Advisory Committee Vote"
    quote: "In considering action on a PRS Report, TAC shall: (a) Recommend approval of the Revision Request as recommended in the PRS Report or as modified by TAC; (b) Reject the Revision Request; (c) Table the Revision Request; (d) Remand the Revision Request to PRS with instructions; or (e) Refer the Revision Request to another TAC subcommittee or a TAC working group or task force with instructions."
  - id: e14
    source: np-21
    locator: "Section 21.4.10(1), ERCOT Board Vote"
    quote: "Upon issuance of a TAC Report and Impact Analysis to the ERCOT Board, the ERCOT Board shall review the TAC Report and the Impact Analysis at the next regularly scheduled meeting."
  - id: e15
    source: np-21
    locator: "Section 21.2(1)(h), Submission"
    quote: "and (h) Any other Entity that meets the following qualifications: (i) Resides (or represents residents) in Texas or operates in the Texas electricity market; and (ii) Demonstrates that Entity (or those it represents) is affected by the Customer Registration or Renewable Energy Credit (REC) Trading Program or Energy Attribute Certificate (EAC) Program sections of these Protocols."
  - id: e16
    source: np-21
    locator: "Section 21.1(3), Introduction"
    quote: "The “next regularly scheduled meeting” of the Protocol Revision Subcommittee (PRS), the Technical Advisory Committee (TAC), an assigned TAC subcommittee (as defined below), the ERCOT Board, or the PUCT, shall mean the next regularly scheduled meeting for which required notice can be timely given regarding the item(s) to be addressed, as specified in the appropriate PUCT, ERCOT Board, or committee procedures."
  - id: e17
    source: np-21
    locator: "Section 21.4.1(2), Review and Posting of NPRRs"
    quote: "(a) Description of requested revision and reason for suggested change; (b) Impacts and benefits of the suggested change on ERCOT market structure, ERCOT operations, and Market Participants, to the extent that the submitter may know this information; (c) List of affected Nodal Protocol Sections and subsections; (d) General administrative information (organization, contact name, etc.); and (e) Suggested language for requested revision."
  - id: e18
    source: np-21
    locator: "Section 21.4.1(3)-(5), Review and Posting of NPRRs"
    quote: "An incomplete NPRR shall not receive further consideration until it is completed. In order to pursue the NPRR, a submitter must submit a completed version of the NPRR."
  - id: e19
    source: np-21
    locator: "Section 21.4.1(4)-(5), Review and Posting of NPRRs"
    quote: "For any ERCOT-sponsored NPRR, ERCOT shall also post an initial Impact Analysis on the ERCOT website, and distribute it to PRS. The initial Impact Analysis will provide PRS with guidance as to potential ERCOT computer systems, operations, or business functions that could be affected by the submitted NPRR."
  - id: e20
    source: np-21
    locator: "Section 21.3(1), Protocol Revision Subcommittee"
    quote: "(a) PRS meetings are open to ERCOT, ERCOT Members, Market Participants, the Reliability Monitor, the North American Electric Reliability Corporation (NERC) Regional Entity, the Independent Market Monitor (IMM), and the Public Utility Commission of Texas (PUCT) Staff; (b) Each Market Segment is allowed to participate; and (c) Each Market Segment has equal voting power."
  - id: e21
    source: np-21
    locator: "Section 21.4.3(2), Withdrawal"
    quote: "The submitter of a Revision Request may withdraw the Revision Request at any time before PRS recommends approval of the Revision Request. If PRS has recommended approval of the Revision Request, the Request for Withdrawal must be approved by the Technical Advisory Committee (TAC) if the Revision Request has not yet been recommended for approval by TAC. If TAC has recommended approval of the Revision Request, the Request for Withdrawal must be approved by the ERCOT Board if the Revision Request has not yet been recommended for approval by the ERCOT Board. Once recommended for approval by the ERCOT Board, a Revision Request cannot be withdrawn."
  - id: e22
    source: np-21
    locator: "Section 21.4.4(3), Protocol Revision Subcommittee Review and Action"
    quote: "The PRS shall consider the Revision Request at its next regularly scheduled meeting after the end of the 14-day comment period. At such meeting, the PRS may take action on the Revision Request. The quorum and voting requirements for PRS action are set forth in the Technical Advisory Committee Procedures. In considering action on a Revision Request, PRS may: (a) Recommend approval of the Revision Request as submitted or as modified; (b) Reject the Revision Request; (c) Table the Revision Request; or (d) Refer the Revision Request to another TAC subcommittee, working group, or task force as provided in Section 21.3, Protocol Revision Subcommittee."
  - id: e23
    source: np-21
    locator: "Section 21.4.4(4), Protocol Revision Subcommittee Review and Action"
    quote: "If a motion is made to recommend approval of a Revision Request and that motion fails, the Revision Request shall be deemed rejected by PRS unless at the same meeting PRS later votes to recommend approval of, table, or refer the Revision Request."
  - id: e24
    source: np-21
    locator: "Section 21.4.6(1)-(2), Revision Request Impact Analysis"
    quote: "If PRS recommends approval of a Revision Request, ERCOT shall prepare an Impact Analysis based on the proposed language or proposed system changes in the PRS Report. If ERCOT has already prepared an Impact Analysis, ERCOT shall update the existing Impact Analysis, if necessary, to accommodate the language or system changes recommended for approval in the PRS Report."
  - id: e25
    source: np-21
    locator: "Section 21.4.6(2), Revision Request Impact Analysis"
    quote: "(a) An estimate of any cost and budgetary impacts to ERCOT for both implementation and on-going operations; (b) The estimated amount of time required to implement the Revision Request; (c) The identification of alternatives to the Revision Request that may result in more efficient implementation; and (d) The identification of any manual workarounds that may be used as an interim solution and estimated costs of the workaround."
  - id: e26
    source: np-21
    locator: "Section 21.4.8(4), Technical Advisory Committee Vote, TAC Report items"
    quote: "(f) PRS action; (g) TAC action; (h) Credit review; (i) IMM Opinion; (j) ERCOT Opinion; and (k) ERCOT Market Impact Statement."
  - id: e27
    source: np-21
    locator: "Section 21.4.10(2), ERCOT Board Vote"
    quote: "In considering action on a TAC Report, the ERCOT Board shall: (a) Recommend approval of the Revision Request as recommended in the TAC Report or as modified by the ERCOT Board; (b) Reject the Revision Request; (c) Table the Revision Request; or (d) Remand the Revision Request to TAC with instructions."
  - id: e28
    source: np-21
    locator: "Section 21.4.12.1, Appeal of Protocol Revision Subcommittee Action"
    quote: "Such appeal to the TAC must be submitted electronically to ERCOT by completing the designated form provided on the ERCOT website within seven days after the date of the relevant PRS appealable event. ERCOT shall reject appeals made after that time."
  - id: e29
    source: np-21
    locator: "Section 21.4.12.3, Appeal of ERCOT Board Action"
    quote: "Such appeal to the PUCT or other Governmental Authority must be made within any deadline prescribed by the PUCT or other Governmental Authority, but in any event no later than 35 days of the date of the relevant ERCOT Board appealable event."
  - id: e30
    source: np-21
    locator: "Section 21.5(2)-(3), Urgent and Board Priority"
    quote: "The ERCOT Board may designate any existing Revision Request a Board Priority Revision Request. If the ERCOT Board directs ERCOT Staff to file a Revision Request, it may further direct that a Revision Request be designated a Board Priority Revision Request. All Board Priority Revision Requests will be considered on an Urgent timeline."
  - id: e31
    source: np-21
    locator: "Section 21.7(1)-(3), Review of Project Prioritization and Annual Budget Process"
    quote: "The Protocol Revision Subcommittee (PRS) shall recommend to the Technical Advisory Committee (TAC) an assignment of a project priority for each approved Nodal Protocol Revision Request (NPRR) and System Change Request (SCR) (“Revision Request”) that requires an associated project."
  - id: e32
    source: ercot-nodal-guiding-principles
    locator: "Guiding Principles of the Nodal Market, Purpose"
    quote: "This non-binding document provides general principles of the future Nodal Market design that may be used by entities to help develop their proposed Nodal Protocol Revision Request (NPRR) or market change proposal."
  - id: e33
    source: np-21
    locator: "Section 21.6(2), Nodal Protocol Revision Implementation"
    quote: "For such other NPRRs, the Impact Analysis shall provide an estimated amount of time required to implement the NPRR and ERCOT shall issue a Market Notice as soon as practicable, but no later than ten days prior to actual implementation, unless a different notice period is required in the PUCT Report for the approved NPRR."
  - id: e34
    source: ercot-tac-procedures
    locator: "Section IV.F (Voting), TAC Procedures approved October 22, 2025"
    quote: "As provided in the ERCOT Bylaws, an act of TAC requires affirmative votes of: (i) two-thirds of the Eligible Voting Representatives of TAC; and (ii) at least 50% of the total Seated Representatives."
  - id: e35
    source: ercot-tac-procedures
    locator: "PRS membership, quorum and votes (TAC Procedures, standing subcommittees)"
    quote: "A motion of the subcommittee passes when a majority (unless a two-thirds vote is required for the motion as prescribed in Appendix A, ERCOT Meeting Rules of Order) of the aggregate of the fractional Segment Votes are (i) affirmative, and (ii) a minimum total of three."
  - id: e36
    source: ercot-tac-procedures
    locator: "PRS quorum (TAC Procedures, standing subcommittees)"
    quote: "In order to take action, a quorum must be present. A quorum is defined as at least one Standing Representative in each of at least four Segments."
  - id: e37
    source: ercot-tac-procedures
    locator: "Appeal of a TAC subcommittee vote, expedited process (TAC Procedures)"
    quote: "An expedited process may be utilized for appeals of (a) TAC subcommittee votes related to decisions on items designated as Urgent; or (b) any other TAC subcommittee vote that the TAC Chair or Vice-Chair designates as urgent. Such appeals must be submitted to ERCOT (RevisionRequest@ercot.com) within 48 hours after the end of the relevant TAC subcommittee meeting and shall be heard at the next regularly scheduled TAC meeting."
  - id: e38
    source: ercot-bylaws
    locator: "Section 3.1(a), Membership (Bylaws approved December 20, 2022)"
    quote: "Members must qualify in one of the following Segments as defined in Article 2: (1) Cooperative; (2) Independent Generator; (3) Independent Power Marketer; (4) Independent REP; (5) Investor-Owned Utility; (6) Municipal; or (7) Consumer in one of three subsegments: (i) Commercial (which is further divided into Large and Small Commercial Consumer); (ii) Industrial; and (iii) Residential."
  - id: e39
    source: ercot-board-policies
    locator: "Section VIII, 8.2 Consent Agenda (Board Policies and Procedures, eff. 6.18.2024)"
    quote: "The Board may consider on a consent agenda Revision Requests that TAC unanimously recommended to approve (including abstentions), provided that any Director may request that an item on the consent agenda be removed therefrom to allow for full discussion."
  - id: e40
    source: ercot-board-policies
    locator: "Section IX, 9.3 Procedural Timeline for TAC Actions Not Designated as Urgent"
    quote: "Written notice of TAC Appeals or TAC Recommendation Oppositions on matters that have not been granted urgent status as part of the TAC review and recommendation process or that the Board Chair or Vice Chair or a PUCT Commissioner designates as urgent must be submitted to ERCOT’s General Counsel within ten (10) Business Days after the date of the TAC action which serves as the basis for the TAC Appeal or comments on TAC Recommendation."
  - id: e41
    source: ercot-prs-procedures
    locator: "Urgent Revision Requests, step 1 (PRS Procedures dated December 1, 2011)"
    quote: "If a submitter requests Urgent status, the complete Revision Request is forwarded to the e-mail distribution list of the PRS and Urgent status will be considered at the next regularly scheduled PRS meeting or, if PRS leadership deems necessary, a special meeting of the PRS."
  - id: e42
    source: np-21
    locator: "Section 21.4.5(2), Comments to the PRS Report"
    quote: "The comments to the PRS Report will be considered at the next regularly scheduled PRS meeting that is at least six days from the posting date."
  - id: e43
    source: np-21
    locator: "Section 21.8(1), Review of Guide Changes"
    quote: "The revision process for the ERCOT market guides shall be governed by the individual guides and assigned subcommittees."
  - id: e44
    source: np-21
    locator: "Section 21.4.12.2, Appeal of Technical Advisory Committee Action"
    quote: "Any ERCOT Member, Market Participant, PUCT Staff, the Reliability Monitor, the IMM, the NERC Regional Entity, or ERCOT may appeal a TAC action to reject, table, remand or refer a Revision Request directly to the ERCOT Board."
  - id: e45
    source: np-21
    locator: "Section 21.4.8(1), Technical Advisory Committee Vote"
    quote: "TAC shall consider any Revision Requests that PRS has submitted to TAC for consideration for which both a PRS Report and an Impact Analysis (as updated if modified by PRS under Section 21.4.7, Protocol Revision Subcommittee Review of Impact Analysis) have been posted on the ERCOT website."
---

## Definition

A Nodal Protocol Revision Request (NPRR) is a request to make additions, edits, deletions, revisions or clarifications to the ERCOT Protocols, including their attachments and exhibits. [e1]

## How it works

### Who files and what must be in it

Any Market Participant or ERCOT Member can file one, as can PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM and ERCOT itself. [e2] Any other Entity that resides (or represents residents) in Texas or operates in the Texas electricity market, and is affected by the Customer Registration or REC/EAC program sections, can also file. [e15] NPRRs are submitted electronically by completing the designated form on the ERCOT website. [e11] The NPRR must include a description and reason, impacts and benefits (to the extent the submitter knows them), the affected Protocol sections, administrative information and suggested language. [e17]

ERCOT has five Business Days to tell the submitter if the NPRR is incomplete, and an incomplete NPRR gets no further consideration until it is completed. [e3][e18] For an ERCOT-sponsored NPRR, ERCOT also posts an initial Impact Analysis giving PRS guidance on the systems, operations or business functions affected. [e19]

### PRS stage

PRS meetings are open to ERCOT, Members, Market Participants, the Reliability Monitor, the NERC Regional Entity, the IMM and PUCT Staff; each Market Segment may participate and has equal voting power. [e20] Comments must be delivered within 14 days of posting to receive consideration. [e4] PRS considers the request at its next regularly scheduled meeting after the 14-day comment period and may recommend approval (as submitted or modified), reject, table, or refer it to another TAC subcommittee, working group or task force. [e22] If a motion to recommend approval fails, the request is deemed rejected unless PRS later votes at the same meeting to approve, table or refer it. [e23]

If PRS recommends approval, ERCOT prepares an Impact Analysis (or updates an existing one) based on the PRS Report language. [e24] The Impact Analysis covers cost and budget estimates for implementation and ongoing operations, the estimated time to implement, alternatives that may be more efficient, and any manual workaround and its cost. [e25] Comments on the PRS Report are considered at the next regularly scheduled PRS meeting that is at least six days from the posting date. [e42]

### TAC and Board

TAC considers a request once the PRS Report and Impact Analysis have been posted, and may recommend approval, reject, table, remand to PRS or refer it to another TAC subcommittee or group. [e45][e13] The TAC Report includes the PRS and TAC actions, credit review, the IMM Opinion, the ERCOT Opinion and the ERCOT Market Impact Statement. [e26] The ERCOT Board reviews the TAC Report and Impact Analysis at its next regularly scheduled meeting and may recommend approval, reject, table or remand to TAC. [e14][e27]

Voting rules sit in the TAC Procedures and Bylaws. An act of TAC requires two-thirds of the Eligible Voting Representatives and at least 50% of the total Seated Representatives. [e34] A PRS motion passes on a majority of the aggregate fractional Segment Votes with a minimum total of three, and PRS needs at least one Standing Representative from each of at least four Segments for a quorum. [e35][e36] The Segments are Cooperative, Independent Generator, Independent Power Marketer, Independent REP, Investor-Owned Utility, Municipal and Consumer (with Commercial, Industrial and Residential subsegments). [e38] The Board may take requests that TAC unanimously recommended on a consent agenda, and any Director can pull an item off it. [e39]

### PUCT and implementation

All Revision Requests require PUCT approval before implementation. [e6] ERCOT implements an approved NPRR on the first day of the month after PUCT approval, unless the PUCT Report says otherwise. [e7] For the NPRRs that this paragraph covers ("such other NPRRs"), the Impact Analysis gives the estimated time to implement and ERCOT issues a Market Notice no later than ten days before implementation, unless the PUCT Report requires a different notice period. [e33]

### Shortcuts and special cases

A submitter can ask for an urgent timeline only if it can reasonably show that an existing Protocol or condition is impairing or could imminently impair reliability or market operations, or is causing or could cause a settlement-formula discrepancy. [e5] The ERCOT Board may designate any existing request a Board Priority request, and all Board Priority requests are considered on an Urgent timeline. [e10][e30] Under the PRS Procedures (dated December 1, 2011), an Urgent request is forwarded to the PRS e-mail list and Urgent status is considered at the next regular PRS meeting or a special meeting. [e41]

An Administrative NPRR consists of non-substantive corrections such as typos and internal references. [e12] If no Entity comments within ten Business Days, it becomes subject to PUCT approval. [e8]

### Withdrawal and appeals

A submitter may withdraw before PRS recommends approval; after that, withdrawal needs TAC approval (if TAC has not yet recommended), then Board approval (if the Board has not yet recommended), and once the Board recommends approval a request cannot be withdrawn. [e21] An appeal of a PRS action to reject, table or refer goes to TAC and must be filed within seven days; ERCOT rejects later appeals. [e28] A TAC action to reject, table, remand or refer can be appealed to the ERCOT Board. [e44] Under the Board Policies (eff. 6.18.2024), written notice of a TAC Appeal on a non-urgent matter is due within ten Business Days of the TAC action. [e40] An expedited process (appeal within 48 hours after the subcommittee meeting) may be used for appeals of TAC subcommittee votes on items designated Urgent, or any other subcommittee vote the TAC Chair or Vice-Chair designates as urgent. [e37] A Board decision can be appealed to the PUCT or other Governmental Authority no later than 35 days after the Board appealable event, or within any shorter deadline they prescribe. [e29]

### Prioritization of the build

For a request that needs an ERCOT project, PRS recommends a project priority, TAC considers it and recommends to the Board. [e31]

## ERCOT context

Not every change is an NPRR: a request to change ERCOT's computer systems without changing the Protocols is a System Change Request (SCR). [e9] "Next regularly scheduled meeting" means the next meeting for which required notice can be timely given. [e16] The revision process for ERCOT market guides is governed by the individual guides and assigned subcommittees. [e43]

ERCOT's Guiding Principles of the Nodal Market (TAC approved 2010-07-01) is a non-binding document that entities may use when developing an NPRR. [e32]

## Timeline

Standard path, in the order the Protocols give it: submission and completeness check (5 Business Days) [e3]; posting and comments (14 days) [e4]; PRS consideration at its next regular meeting [e22]; Impact Analysis and PRS comment cycle [e42]; TAC [e45]; Board at its next regular meeting [e14]; PUCT approval [e6]; implementation on the first day of the following month unless otherwise provided [e7]. The Protocols give no total duration for this path.

## Key facts

- Who can file: any Market Participant, ERCOT Member, PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM, ERCOT, or another Entity meeting the Section 21.2(1)(h) qualifications. [e2][e15]
- ERCOT tells the submitter within five Business Days if an NPRR is incomplete. [e3]
- To receive consideration, comments must be delivered within 14 days of posting. [e4]
- The Impact Analysis must cover cost, implementation time, alternatives and manual workarounds. [e25]
- TAC action needs two-thirds of eligible voting Representatives and at least 50% of seated Representatives. [e34]
- All revision requests need PUCT approval before implementation. [e6]
- Implementation is on the first day of the month after PUCT approval, unless the PUCT Report says otherwise. [e7]
- Appeals: PRS to TAC within seven days; TAC to the Board; Board to the PUCT within 35 days. [e28][e44][e29]

## Say it like this

(Guidance) An NPRR is the formal route for changing the ERCOT rulebook. It runs through the PRS and TAC committees and the ERCOT Board, and nothing takes effect until the PUCT approves it.

## Common confusion

(Guidance) An NPRR changes the Protocols; an SCR changes ERCOT's systems without changing the Protocols. [e1][e9] Board approval is not the end: PUCT approval is still required. [e6] "Urgent" is not a label the committees give freely; it requires a showing of a reliability, market-operations or settlement-formula problem. [e5] An approved NPRR may also not be live yet: ERCOT implements it on the first of the month after PUCT approval unless the PUCT Report says otherwise. [e7]

## Questions

### Who can submit an NPRR?

Any Market Participant, ERCOT Member, PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM or ERCOT, plus any other Entity that meets the Section 21.2(1)(h) qualifications (it resides or represents residents in Texas or operates in the Texas market, and is affected by the Customer Registration or REC/EAC program sections). [e2][e15]

### When does an approved NPRR take effect?

ERCOT implements it on the first day of the month following PUCT approval, unless the PUCT Report for the NPRR provides otherwise. [e7]

### What qualifies a request for an urgent timeline?

The submitter must reasonably show that an existing Protocol or condition is impairing or could imminently impair reliability or wholesale or retail market operations, or is causing or could imminently cause a settlement formula discrepancy. [e5]

### What does the Impact Analysis do and why does it matter?

ERCOT's Impact Analysis estimates cost, time to implement, more efficient alternatives and manual workarounds, so the committees see the implementation consequences before TAC and the Board vote. [e25][e45]

### Why can the Board, and not only PRS or TAC, jump the queue?

The ERCOT Board may designate any existing request, or one it directs staff to file, as a Board Priority request, and all Board Priority requests are considered on an Urgent timeline. [e30]

### What if PRS rejects your NPRR?

You can appeal to TAC within seven days of the PRS appealable event, and TAC may then be appealed to the ERCOT Board, and the Board to the PUCT within 35 days. [e28][e44][e29]

### What if you want to stop your own NPRR after PRS has approved it?

You need TAC approval of the withdrawal if TAC has not yet recommended approval, and Board approval if the Board has not yet recommended it; after Board recommendation it cannot be withdrawn. [e21]

### Why does PRS give each Market Segment equal weight?

PRS meetings give each Market Segment equal voting power, so no one segment dominates by headcount. [e20][e35]

## Scenarios

### A retailer wants a Protocol change that fixes a settlement formula error quickly. What route?

- Ask for Urgent status, which requires a reasonable showing that the existing Protocol is causing or could imminently cause a discrepancy between a settlement formula and the Protocols. [e5]
- PRS considers Urgent status at its next regular meeting or a special one. [e41]
- It still goes through an Impact Analysis, a Board vote, and PUCT approval. [e45][e27][e6]

## Open items

- The exact length of an Urgent-track timeline and the typical elapsed time for a standard NPRR are not given in the Protocols; no saved source gives how many NPRRs are filed a year or typical durations.
- The PRS Procedures saved are dated December 1, 2011; whether they were later revised was not checked.
- The TAC Procedures' Appendix A (Rules of Order) and the fractional segment vote mechanics for the Consumer segment were not summarized.
- Whether the saved Section 21 text contains pending (boxed) revisions was not checked beyond the quoted paragraphs.
