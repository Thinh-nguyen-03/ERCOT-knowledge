---
id: ruc
name: "RUC (Reliability Unit Commitment: DRUC/HRUC)"
aliases: [RUC, DRUC, HRUC, WRUC, Reliability Unit Commitment, Day-Ahead RUC, Hourly RUC]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: dam
    type: related
    note: The DRUC runs after the DAM closes and uses Three-Part Supply Offers that were considered in the DAM but not awarded. [e15][e3]
  - to: ruc-make-whole
    type: determines
    note: A RUC-committed Resource whose revenues fall short of its costs gets a RUC Make-Whole Payment, unless its QSE opted out. [e5][e6]
  - to: sced
    type: contrasts-with
    note: RUC recommends commitment of Generation Resources; see the SCED topic for dispatch. [e7]
  - to: ordc
    type: related
    note: The reliability deployment price adder is meant to offset the price suppression from RUC and other out-of-market actions. [e9]
  - to: market-power-mitigation
    type: related
    note: A unit that receives a RUC instruction and must resolve a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e10]
  - to: three-part-supply-offer
    type: related
    note: The DRUC uses the Three-Part Supply Offers submitted to the DAM. [e3]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Reliability Unit Commitment (RUC)"
    quote: "A process to ensure that there is adequate Resource capacity and Ancillary Service capacity committed in the proper locations to serve ERCOT forecasted Load."
  - id: e2
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (2)"
    quote: "ERCOT shall conduct at least one Day-Ahead Reliability Unit Commitment (DRUC) and at least one Hourly Reliability Unit Commitment (HRUC) before each hour of the Operating Day. ERCOT, in its sole discretion, may conduct a RUC at any time to evaluate and resolve reliability issues."
  - id: e3
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (4)"
    quote: "The DRUC uses Three-Part Supply Offers, capped at the maximum of generic or verifiable minimum energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM."
  - id: e15
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (3)"
    quote: "The DRUC must be run after the close of the Day-Ahead Market (DAM)."
  - id: e4
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (5)"
    quote: "ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information."
  - id: e5
    source: np-05
    locator: "Section 5.7.1, RUC Make-Whole Payment, paragraph (1)"
    quote: "To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR)."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Reliability Unit Commitment (RUC) Buy-Back Hour"
    quote: "An Operating Hour for which a Resource that is not a Reliability Must-Run (RMR) Unit has been committed to come On-Line by a Day-Ahead Reliability Unit Commitment (DRUC) or Hourly Reliability Unit Commitment (HRUC) process and the Resource’s Qualified Scheduling Entity (QSE) has chosen to opt out of RUC Settlement in accordance with Section 5.5.2, Reliability Unit Commitment (RUC) Process."
  - id: e7
    source: np-05
    locator: "Section 5.5.2, RUC Process, paragraph (1)"
    quote: "The RUC process recommends commitment of Generation Resources, to match ERCOT’s forecasted Load including Direct Current Tie (DC Tie) Schedules and RUC Ancillary Service Demand Curves (ASDCs), subject to all transmission constraints and Resource performance characteristics. The RUC process takes into account Resources already committed in the Current Operating Plans (COPs), Resources already committed in previous RUCs, and Off-Line Available Resources having a start-up time of one hour or less."
  - id: e8
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (11)"
    quote: "After the use of market processes to the fullest extent practicable without jeopardizing the reliability of the ERCOT System, any ERCOT Dispatch Instructions for additional capacity that order a QSE to commit a specific Generation Resource to be On-Line shall be considered a RUC Dispatch for the purpose of the Settlement of payments and charges related to the committed Generation Resource. An Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice requesting the available capacity of any currently available Generation Resources but not naming specific Generation Resources is not considered a RUC Dispatch for purposes of Settlement."
  - id: e9
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, Shortage and Reliability Pricing, 2. RDPA"
    quote: "The Reliability Deployment Price Adder adjusts prices to account for the price-suppressing effects of ERCOT’s out-of-market reliability actions. Actions such as Reliability Unit Commitments (RUCs) and deployment of ERS demand response can artificially lower prices by increasing supply or reducing demand outside the normal market process."
  - id: e10
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section E, Market Power Mitigation"
    quote: "When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constraint, ERCOT often dispatches it in real time with its offer prices capped at mitigated levels."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "The increase in RUC commitments corresponds to higher make-whole payments, which exceeded $21 million in 2025. The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement."
  - id: e13
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "Over the longer term, RUC activity in the last five years has been significantly higher than the norm before Winter Storm Uri. For example, annual resource-hours committed through RUC ranged from 202 to 613 from 2017 through 2020, whereas annual RUC commitments have consistently totaled thousands of hours since 2021."
  - id: e14
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "One factor increasing RUC commitments is the incorporation of ESR state of charge (SOC) into the RUC engine under NPRR 1186, which ERCOT implemented in summer 2024."
  - id: e16
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e17
    source: imm-som-2025
    locator: "Market Operations chapter, A. Summary of Market Operations Results in 2025"
    quote: "Although such interventions are sometimes necessary, persistent reliance on them indicates a misalignment between market design and system operations."
---

## Definition

Reliability Unit Commitment (RUC) is the process ERCOT uses to ensure there is adequate Resource capacity and Ancillary Service capacity committed in the proper locations to serve its forecasted Load. [e1]

## How it works

ERCOT runs at least one Day-Ahead RUC (DRUC) and at least one Hourly RUC (HRUC) before each hour of the Operating Day, and may run a RUC at any time to deal with reliability issues. [e2] The DRUC runs after the DAM closes and uses Three-Part Supply Offers that were submitted to the DAM, considered there, but not awarded. [e15][e3] The HRUC starts at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and Outage information. [e4]

The RUC recommends commitments of Generation Resources to match forecast Load, including DC Tie Schedules, and the RUC Ancillary Service Demand Curves, subject to transmission constraints and Resource performance. It starts from Resources already committed in COPs and previous RUCs and from Off-Line Available Resources with a start-up time of one hour or less. [e7] Any ERCOT instruction that orders a QSE to commit a named Generation Resource, after the market has been used as far as practicable, is a RUC Dispatch for Settlement purposes. [e8]

A RUC-committed Resource whose revenues fall short of its costs receives a RUC Make-Whole Payment for that Operating Day, whether it came from DRUC or HRUC, but not an ESR. [e5] A QSE can instead choose to opt out of RUC Settlement, and the Operating Hours for which it does so are RUC Buy-Back Hours. [e6]

## ERCOT context

The IMM treats RUC as an out-of-market reliability action [e9] and says persistent reliance on out-of-market interventions indicates a misalignment between market design and system operations. [e17] In 2025 ERCOT issued RUC instructions for 5,129 resource-hours, 176% more than in 2024, and about 77% were for congestion. [e11] Make-whole payments exceeded $21 million in 2025, helped by more RUC use and fewer opt-outs. [e12] Since 2021 annual RUC commitments have totaled thousands of hours, against 202 to 613 per year from 2017 through 2020. [e13]

One driver the IMM names is ESR state of charge being fed into the RUC engine under NPRR 1186, implemented in summer 2024. [e14] RUC also suppresses prices, which the reliability deployment price adder is meant to offset. [e9] When a RUC-committed unit must resolve a non-competitive constraint, it is often dispatched in real time with offers capped at mitigated levels. [e10]

## Key facts

- ERCOT runs at least one DRUC and one HRUC before each hour of the Operating Day. [e2]
- The DRUC uses Three-Part Supply Offers that were considered but not awarded in the DAM. [e3]
- 2025 RUC: 5,129 resource-hours, up 176% from 2024; roughly 77% for congestion. [e11]
- 2025 RUC make-whole payments exceeded $21 million. [e12]
- ESRs do not receive a RUC Make-Whole Payment. [e5]

## Say it like this

RUC is ERCOT's back-stop commitment process: if the market and QSE self-commitments do not put enough of the right units on, ERCOT instructs units on and pays them make-whole if they lose money. It has grown a lot in recent years, and the IMM says congestion accounted for about 77% of 2025 commitments. [e11][e13]

## Common confusion

RUC is not SCED. RUC decides which units are committed, ahead of the hour, while SCED manages energy and Ancillary Services through Base Points approximately every five minutes. [e16] A RUC instruction is not an OCN, Advisory, Watch or Emergency Notice that asks for capacity without naming a Resource; only an instruction naming a specific Generation Resource counts as a RUC Dispatch. [e8]

## Questions

### What is the difference between DRUC and HRUC?

The DRUC must be run after the close of the DAM, while the HRUC is initiated at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and Outage information. [e15][e4]

### Why did the IMM flag RUC in its 2025 report?

RUC instructions rose 176% to 5,129 resource-hours and make-whole payments passed $21 million. [e11][e12] The IMM says persistent reliance on out-of-market interventions indicates a misalignment between market design and system operations. [e17]

### Can a QSE avoid RUC settlement?

It can opt out, making the hours RUC Buy-Back Hours. [e6] The IMM notes that in 2025 fewer resources opted out, which is part of why make-whole payments rose. [e12]

## Open items

- The IMM figure that only 3% of RUC-committed resources opted out in 2025 (versus 8% in 2024) sits across a page break in the saved text, so it is not quoted verbatim here.
- Deeper pass: the RUC timeline (np-05 Section 5.2), Weekly RUC (WRUC), RUC cost eligibility and verifiable costs (5.6), RUC clawback (5.7.2), capacity-short charge (5.7.4.1).
- Deeper pass: pending NPRR1309 language adds DRRS Resource Status to the RUC process; this is not yet in effect.
- Deeper pass: how RUC interacts with RTC+B (NPRR1236 on RUC capacity-short calculations is listed in the RTC+B deck).
