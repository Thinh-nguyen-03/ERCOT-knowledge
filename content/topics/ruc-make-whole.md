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
    note: Make-whole payments, clawbacks and capacity-short charges are paid to or charged to QSEs. [e1][e3]
  - to: load-ratio-share
    type: used-in
    note: The uplift charge and the clawback payment are both allocated on a Load Ratio Share basis. [e4][e6]
  - to: congestion
    type: related
    note: The IMM says congestion accounted for about 77% of 2025 RUC commitments. [e7]
  - to: imm
    type: related
    note: IMM reports supply the 2024-2025 make-whole and clawback amounts. [e8]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Make-Whole Payment"
    quote: "A payment made by ERCOT to a Qualified Scheduling Entity (QSE) for a Resource to reimburse a QSE for allowable startup and minimum energy costs of a Resource not recovered in energy or Ancillary Service revenue when a Resource is committed by Reliability Unit Commitment (RUC) and the QSE has not elected to opt out of RUC Settlement, or when a Resource is committed by the Day-Ahead Market (DAM)."
  - id: e2
    source: np-05
    locator: "Section 5.7.2, paragraph (1)"
    quote: "A QSE for a Resource shall pay a RUC Clawback Charge for the Operating Day if the RUC Guarantee is less than the sum of:"
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
---

## Definition

A RUC Make-Whole Payment is what ERCOT pays a QSE to reimburse allowable startup and minimum-energy costs of a Resource that energy and Ancillary Service revenue did not cover, when the Resource was committed by RUC and the QSE did not opt out of RUC Settlement, or when it was committed by the DAM. [e1] A RUC Clawback Charge is the reverse: the QSE pays when the RUC Guarantee is less than the Resource's revenues from the components listed in Section 5.7.2. [e2]

## How it works

ERCOT calculates a make-whole payment per Operating Day for each RUC-committed Resource, whether committed by DRUC or HRUC, when revenue falls short of cost. [e5] If the Resource earned more than its guarantee, the QSE pays the clawback charge. [e2] The revenues from all clawback charges are paid back to all QSEs on a Load Ratio Share basis as the RUC Clawback Payment. [e6]

The cost of make-whole payments is recovered in two steps. QSEs that were capacity-short in a RUC are charged first, in proportion to their shortfall and subject to a cap. [e3] Any remainder in a 15-minute Settlement Interval is uplifted to all QSEs on a Load Ratio Share basis. [e4]

## ERCOT context

The IMM reports 5,129 resource-hours of RUC instructions in 2025, up 176% from 2024, with congestion behind about 77% of them. [e7] Make-whole payments exceeded $21 million in 2025 against only $4.5 million of clawbacks. [e8]

Rules changed in 2024. Before then, resources with valid day-ahead offers faced a 50% clawback of revenue above cost. [e9] NPRR 1172 took effect on March 1, 2024. [e10] The two IMM reports describe its clawback change differently (see Open items).

## Key facts

- Make-whole covers startup and minimum-energy costs not recovered in revenue. [e1]
- Capacity-short QSEs are charged first, subject to a cap; the rest is uplifted by LRS. [e3][e4]
- Clawback revenue is paid to all QSEs by LRS. [e6]
- 2025: make-whole above $21 million; clawbacks $4.5 million. [e8]
- NPRR 1172 took effect March 1, 2024; prior clawback was 50% for resources with valid day-ahead offers. [e9][e10]

## Say it like this

If ERCOT commits a unit out of market and its revenue does not cover its costs, ERCOT makes it whole, and if it earns more than its guarantee, ERCOT claws the excess back. Short QSEs pay first and the balance is spread across load.

## Common confusion

The make-whole payment is not a payment for the energy; it only covers shortfalls against allowable costs. [e1] The clawback payment to QSEs is also separate from the uplift charge, though both use Load Ratio Share. [e4][e6]

## Questions

### Who pays for RUC make-whole?

First QSEs that were capacity-short, then all QSEs by Load Ratio Share. [e3][e4]

### What changed in March 2024?

NPRR 1172 took effect; before it, resources with valid day-ahead offers faced only a 50% clawback. [e9][e10]

### Can a resource avoid make-whole and clawback?

A resource can opt out of RUC Settlement; the make-whole definition applies only if the QSE has not elected to opt out. [e1]

## Open items

- Deeper pass: the RUC Guarantee, minimum-energy revenue and revenue-less-cost formulas (5.7.1.1-5.7.1.4), cost eligibility (5.6), and treatment of RMR Units.
- Deeper pass: capacity-short ratio share and cap math (5.7.4.1.1) and RUC capacity credit (5.7.4.1.2).
- The IMM 2025 and 2024 settlement tables are garbled in the text copies and no OCR copy is saved; only prose figures are used. The 2025 IMM says opt-outs fell to 3% in 2025 from 8% in 2024, but that sentence spans a page break and was not quoted.
- IMM 2024 describes NPRR 1172 as 100% clawback for economic resources committed after day-ahead offers; IMM 2025 describes it as a full clawback for resources that opted out. These descriptions differ and were not resolved.
- Pending NPRR1309 (no make-whole for DRRS deployments) is not current text.
