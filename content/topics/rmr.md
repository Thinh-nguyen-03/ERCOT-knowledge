---
id: rmr
name: RMR (Reliability Must-Run) & Must-Run Alternatives
aliases: [RMR, Reliability Must-Run, MRA, Must-Run Alternative, NSO, Notification of Suspension of Operations, Braunig]
kind: product
domain: reliability
level: 2
lenses: [analyst, portfolio, trading, structuring]
as_of: 2026-11-18
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
    note: RUC is a separate reliability commitment process; compare it with RMR, which is a contract for a unit that would otherwise not operate. [e1]
  - to: imm
    type: related
    note: The IMM reports RMR basics, the 2025 Braunig agreement and uplift. [e9][e10]
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
    quote: "ERCOT may execute RMR Agreements for no less than one month and no more than one year, with one exception. ERCOT may execute an RMR Agreement for a term longer than 12 months if the Resource Entity must make a significant capital expenditure to meet environmental regulations or to ensure availability to continue operating the RMR Unit so as to make an RMR Agreement in excess of 12 months appropriate, in ERCOT’s opinion."
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
---

## Definition

A Reliability Must-Run (RMR) Unit is a Generation Resource operated under an agreement with ERCOT that would not otherwise be operated, because it is necessary for voltage support, stability or management of localized transmission constraints where market solutions do not exist. [e1] A Must-Run Alternative (MRA) is a resource operated under an agreement with ERCOT as an alternative to an RMR Unit. [e2]

## How it works

The process starts when a Resource Entity files a Notification of Suspension of Operations; ERCOT may then begin procuring RMR Service. [e3] Before signing, ERCOT must assess alternatives to the proposed RMR agreement. [e4] If it finds an RMR or MRA agreement is cost-effective (or finds a deficiency but that an agreement is not cost-effective), it presents the finding to the ERCOT Board for approval. [e8]

RMR is voluntary for the owner: a Resource Entity cannot be compelled to sign, and one with an uneconomic unit can petition for RMR status. [e6] Agreements run from one month to one year, with longer terms allowed when a significant capital expenditure is needed. [e5] While under RMR the unit may not participate in the bilateral energy market, self-provide energy (other than plant auxiliary load) or provide Ancillary Service to any entity. [e7]

## ERCOT context

The IMM reports that the ERCOT Board approved RMR service on February 24, 2025 for Braunig Unit 3, which has an HSL of about 410 MW. [e9] The IMM counts RMR settlement as part of the 2025 uplift, with RMR uplift the largest contributor to the increase at $68 million of $668 million in total uplift. [e10] The IMM also reports that since the beginning of the RMR period the mobile generating units have produced about 1,226 MWh, and the maximum aggregate output of RMR units has been under 40 MW. [e11] ERCOT allocates the cost of RMR agreements to LSEs. [e12]

ERCOT has proposed changes. For example, NPRR 1330 (proposed April 2026) would set mitigated offer caps for RMR units so they do not interfere with market outcomes. [e13]

## Key facts

- RMR agreements run one month to one year unless a significant capital expenditure justifies longer. [e5]
- A unit under RMR may not trade bilaterally, self-provide energy or provide Ancillary Service. [e7]
- RMR and MRA agreements require ERCOT Board approval. [e8]
- RMR uplift was $68 million of $668 million total uplift in 2025. [e10]
- RMR costs are allocated to LSEs. [e12]

## Say it like this

RMR is ERCOT paying a plant that wants to retire to stay available because the local grid would be at risk without it. It is a short, voluntary contract outside the market, so the cost shows up as uplift on load.

## Common confusion

RMR is not capacity market revenue and not a routine commitment tool: it applies only where market solutions do not exist, and the owner cannot be forced into it. [e1][e6] An MRA is the alternative to an RMR unit, not the same contract. [e2]

## Questions

### What makes a unit eligible for RMR?

It must be necessary to provide voltage support, stability or management of localized transmission constraints where market solutions do not exist, and the owner must be willing. [e1][e6]

### Who approves an RMR agreement?

ERCOT presents its finding to the ERCOT Board for approval after assessing alternatives. [e4][e8]

### Who pays?

The IMM says ERCOT allocates RMR costs to LSEs, and RMR settlement counts in the uplift the IMM reports ($68 million of $668 million in 2025). [e12][e10]

## Open items

- Deeper pass: eligible costs, budgeting, standby cost, incentive factor, capital contribution refunds and exit strategy in Sections 3.14.1.4 to 3.14.1.21; the IMM's description of the incentive factor was not quoted.
- Deeper pass: the Must-Run Alternative service section (3.14.4) sits inside a pending NPRR box in the saved protocol text, so it is not quoted; MRA detail comes only from the definition.
- Deeper pass: the PUCT's 25.502 treatment of RMR, referenced by the IMM, was not read.
- The IMM discusses Contracts for Capacity (C4C) as a related construct; not sourced here.
- The IMM's e11 figures (RMR units under 40 MW output, mobile generating units) are not tied in the saved text to the 410 MW Braunig Unit 3 approval; whether they cover the same units is unclear.
- NPRR 1313 (variable initial standby cost) and NPRR 1330 status after the IMM report's date are not confirmed.
