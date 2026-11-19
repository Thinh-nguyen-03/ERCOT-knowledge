---
id: nprr
name: NPRR (Nodal Protocol Revision Request)
aliases: [NPRR, Nodal Protocol Revision Request, revision request, SCR, System Change Request]
kind: rule
domain: structure
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
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
    note: ERCOT checks submissions for completeness, posts them and implements approved changes. [e3][e7]
  - to: imm
    type: related
    note: The IMM is one of the entities that may submit an NPRR. [e2]
  - to: sc-nprr-opinion
    type: related
    note: The scenario topic on forming a view on an NPRR builds on this process.
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
---

## Definition

A Nodal Protocol Revision Request (NPRR) is a request to make additions, edits, deletions, revisions or clarifications to the ERCOT Protocols, including their attachments and exhibits. [e1]

## How it works

Any Market Participant or ERCOT Member can file one, as can PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM and ERCOT itself. [e2] Any other Entity that resides (or represents residents) in Texas or operates in the Texas electricity market, and is affected by the Customer Registration or REC/EAC program sections, can also file. [e15] NPRRs are submitted electronically by completing the designated form on the ERCOT website, and ERCOT has five Business Days to tell the submitter if the NPRR is incomplete. [e11][e3] Once it is complete, comments must be delivered within 14 days of posting to receive consideration, and the Protocol Revision Subcommittee then considers it. [e4]

After PRS, TAC considers a PRS Report, the ERCOT Board reviews the TAC Report and Impact Analysis at its next regularly scheduled meeting, and then PUCT approval is required. [e13][e14][e6] ERCOT implements an approved NPRR on the first day of the month after PUCT approval, unless the PUCT Report says otherwise. [e7]

Two shortcuts exist. A submitter can ask for an urgent timeline only if it can reasonably show that an existing Protocol or condition is impairing or could imminently impair reliability or market operations, or is causing or could cause a settlement-formula discrepancy. [e5] And the ERCOT Board may designate any existing request a Board Priority request. [e10] An Administrative NPRR consists of non-substantive corrections such as typos and internal references. [e12] If no Entity comments within ten Business Days, it becomes subject to PUCT approval. [e8]

## ERCOT context

Not every change is an NPRR: a request to change ERCOT's computer systems without changing the Protocols is a System Change Request (SCR). [e9]

## Key facts

- Who can file: any Market Participant, ERCOT Member, PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM, ERCOT, or another Entity meeting the Section 21.2(1)(h) qualifications. [e2][e15]
- ERCOT tells the submitter within five Business Days if an NPRR is incomplete. [e3]
- To receive consideration, comments must be delivered within 14 days of posting. [e4]
- All revision requests need PUCT approval before implementation. [e6]
- Implementation is on the first day of the month after PUCT approval, unless the PUCT Report says otherwise. [e7]

## Say it like this

(Guidance) An NPRR is the formal route for changing the ERCOT rulebook. It runs through the PRS and TAC committees and the ERCOT Board, and nothing takes effect until the PUCT approves it.

## Common confusion

(Guidance) An NPRR changes the Protocols; an SCR changes ERCOT's systems without changing the Protocols. [e1][e9] Board approval is not the end: PUCT approval is still required. [e6] "Urgent" is not a label the committees give freely; it requires a showing of a reliability, market-operations or settlement-formula problem. [e5]

## Questions

### Who can submit an NPRR?

Any Market Participant, ERCOT Member, PUCT Staff, the Reliability Monitor, the NERC Regional Entity, the IMM or ERCOT, plus any other Entity that meets the Section 21.2(1)(h) qualifications (it resides or represents residents in Texas or operates in the Texas market, and is affected by the Customer Registration or REC/EAC program sections). [e2][e15]

### When does an approved NPRR take effect?

ERCOT implements it on the first day of the month following PUCT approval, unless the PUCT Report for the NPRR provides otherwise. [e7]

### What qualifies a request for an urgent timeline?

The submitter must reasonably show that an existing Protocol or condition is impairing or could imminently impair reliability or wholesale or retail market operations, or is causing or could imminently cause a settlement formula discrepancy. [e5]

## Open items

- Deeper pass: Impact Analysis, ERCOT-sponsored NPRR steps and the standard timeline from PRS to Board.
- Deeper pass: the appeal paths for TAC and Board actions (Sections 21.4.12.2 and 21.4.12.3).
- Deeper pass: how project prioritization (Section 21.7) affects when an approved NPRR is built.
- No saved source gives how many NPRRs are filed a year or typical durations.
