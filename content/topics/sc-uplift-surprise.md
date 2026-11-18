---
id: sc-uplift-surprise
name: "Scenario: Explaining an Uplift Charge to Finance"
aliases: [uplift surprise, explaining uplift to finance, unexpected settlement charge, RUC uplift charge question]
kind: scenario
domain: cases
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: uplift
    type: example-of
    note: The scenario explains the non-market costs loads pay on top of energy and ancillary services. [e1]
  - to: ruc-make-whole
    type: example-of
    note: RUC make-whole shortfalls not covered by capacity-short charges are uplifted to all QSEs by Load Ratio Share. [e7]
  - to: load-ratio-share
    type: used-in
    note: Load Ratio Share is an Entity's AML divided by total ERCOT AML for the interval. [e5]
  - to: settlement-statements
    type: related
    note: Charges first appear on the RTM Initial Statement on the fifth day and are restated on the RTM Final Statement on the 55th day. [e16][e17]
  - to: rmr
    type: related
    note: RMR uplift was the largest contributor to the 2025 increase in uplift, at $68 million. [e3]
  - to: ffss
    type: related
    note: ERCOT uplifts most FFSS program costs to LSEs by load-ratio share. [e13]
  - to: ruc
    type: causes
    note: RUC instructions rose to 5,129 resource-hours in 2025, mostly for congestion. [e11]
  - to: securitization
    type: related
    note: The Securitization Uplift Charge is a separate charge that pays the Uri securitization balance. [e20]
evidence:
  - id: e1
    source: imm-som-2024
    locator: "Executive Summary, all-in price"
    quote: "In addition to the costs of energy, loads incur costs associated with ancillary services and a variety of non-market-based expenses referred to as “uplift.”"
  - id: e2
    source: imm-som-2025
    locator: "Executive Summary, footnote 1 on the all-in price, page 2 (OCR)"
    quote: "For this analysis “uplift” includes: Reliability Adder Imbalance Settlement, ORDC Adder Imbalance Settlement, Revenue Neutrality Allocation, Emergency Energy Charges, Base Point Deviation Payments, ERS Settlement, Black Start Service Settlement, Block Load Transfer Settlement, Firm Fuel Service Settlement, High Dispatch Limit Override Settlement, RMR Settlement, RUC Settlement, Voltage Services Settlement, and the ERCOT System Administrative Fee."
  - id: e3
    source: imm-som-2025
    locator: "Executive Summary, all-in price"
    quote: "Uplift costs accounted for $1.38 per MWh of the all-in price in 2025, up 12% from 2024. RMR uplift was the largest contributor to this increase, accounting for $68 million of the $668 million in total uplift costs."
  - id: e4
    source: imm-som-2025
    locator: "Executive summary, all-in price and uplift"
    quote: "Uplift associated with FFSS increased 36% from $33.8 million in 2024 to $45.9 million in 2025."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Load Ratio Share"
    quote: "The ratio of an Entity’s AML to total ERCOT AML for an interval."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Adjusted Metered Load (AML)"
    quote: "Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports."
  - id: e7
    source: np-05
    locator: "Section 5.7.4, paragraph (1)"
    quote: "All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Make-Whole Payment"
    quote: "A payment made by ERCOT to a Qualified Scheduling Entity (QSE) for a Resource to reimburse a QSE for allowable startup and minimum energy costs of a Resource not recovered in energy or Ancillary Service revenue when a Resource is committed by Reliability Unit Commitment (RUC) and the QSE has not elected to opt out of RUC Settlement, or when a Resource is committed by the Day-Ahead Market (DAM)."
  - id: e9
    source: imm-som-2025
    locator: "Market Operations, RUC Settlement"
    quote: "Make-whole payments during RUC settlement exceeded $21 million in 2025, while total claw-backs were only $4.5 million."
  - id: e10
    source: np-05
    locator: "Section 5.7.5, paragraph (1)"
    quote: "ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy chapter, RMR discussion (OCR)"
    quote: "These RMR resources have a total capacity of around 730 MW. Since the beginning of the RMR period, the mobile generating units have produced approximately 1,226 MWh, and the maximum aggregate output of RMR units has been less than 40 MW. Total uplift associated with these RMR units in 2025 was approximately $68 million."
  - id: e13
    source: imm-som-2025
    locator: "Section G, Firm Fuel Supply Service, rulemaking discussion (OCR)"
    quote: "ERCOT uplifts most FFSS program costs to LSEs based on load-ratio share."
  - id: e14
    source: imm-som-2025
    locator: "Appendix, Table A4: ERCOT 2025 Year at a Glance, page 169 (OCR)"
    quote: "Revenue Neutrality Uplift $154"
  - id: e15
    source: imm-som-2024
    locator: "Transmission Congestion and CRRs, real-time congestion shortfalls"
    quote: "These realtime congestion shortfall costs are paid for by charges to LSEs as part of the uplift charge known as the Revenue Neutrality Allocation (RENA)."
  - id: e16
    source: np-09
    locator: "Section 9.5.4, RTM Initial Statement"
    quote: "ERCOT shall issue an RTM Initial Statement for each Statement Recipient for a given Operating Day on the fifth day after the Operating Day, unless that fifth day is not a Business Day."
  - id: e17
    source: np-09
    locator: "Section 9.5.5, RTM Final Statement"
    quote: "ERCOT shall issue an RTM Final Statement for each Statement Recipient for a given Operating Day on the 55th day after the Operating Day, unless that 55th day is not a Business Day."
  - id: e18
    source: np-09
    locator: "Section 9.1.5, Settlement Payment Convention"
    quote: "A Settlement Statement or Invoice containing a negative amount represents a payment due by ERCOT to the Market Participant that received the Statement or Invoice. A Settlement Statement or Invoice containing a positive amount represents a payment due to ERCOT by the Market Participant that received the Statement or Invoice."
  - id: e19
    source: imm-som-2024
    locator: "Executive Summary, all-in price"
    quote: "Uplift costs accounted for $1.24 per MWh of the all-in price in 2024, up 26% from 2023. Total uplift costs in 2024 were approximately $573 million."
  - id: e20
    source: np-02
    locator: "Section 2.1, definition of Securitization Uplift Charge"
    quote: "A charge assessed to a Qualified Scheduling Entity (QSE) that represents an obligated Load Serving Entity (LSE) that will be used to pay the Securitization Uplift Balance, interest charges, and other financing related expenses."
  - id: e21
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "The increase in RUC commitments corresponds to higher make-whole payments, which exceeded $21 million in 2025. The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement."
---

## Definition

This scenario asks an analyst to explain an unexpected uplift line on a settlement statement to a finance team. The IMM describes uplift as the non-market-based expenses loads pay on top of energy and ancillary services. [e1]

## How it works

Step 1, name the bucket. The IMM's uplift covers a list of settlements including Revenue Neutrality Allocation, emergency energy, ERS, black start, Firm Fuel, RMR, RUC, voltage services and the ERCOT administrative fee. [e2] In 2025 uplift totalled $668 million, or $1.38 per MWh of the all-in price, up 12% from 2024; RMR at $68 million was the largest contributor to the increase. [e3] Real-time congestion shortfalls are charged to LSEs through the Revenue Neutrality Allocation, and the IMM's 2025 annual table lists Revenue Neutrality Uplift at $154 million. [e15][e14]

Step 2, explain the allocation. Most uplift is spread by Load Ratio Share, an Entity's Adjusted Metered Load divided by total ERCOT AML for the interval. [e5][e6] For RUC, QSEs that were capacity-short pay first, and only the rest of the make-whole cost is uplifted to all QSEs by Load Ratio Share; RUC clawback revenues are paid back to QSEs on the same basis. [e7][e10] ERCOT also uplifts most FFSS costs to LSEs by load-ratio share. [e13]

Step 3, explain the cause. A make-whole payment reimburses allowable startup and minimum energy costs that a RUC-committed Resource did not recover in the market. [e8] RUC instructions rose to 5,129 resource-hours in 2025, 77% for congestion, and make-whole payments exceeded $21 million against $4.5 million of claw-backs. [e11][e9] The IMM attributes part of the rise to more RUC and fewer resources opting out of RUC settlement. [e21]

Step 4, explain the timing and sign. The charge first appears on the RTM Initial Statement on the fifth day after the Operating Day and is restated on the RTM Final Statement on the 55th day. [e16][e17] A positive amount on a statement is owed to ERCOT; a negative amount is owed by ERCOT. [e18]

## Key facts

- 2025 uplift: $668 million in total, $1.38 per MWh of the all-in price, up 12% from 2024. [e3]
- 2024 uplift: about $573 million, $1.24 per MWh. [e19]
- 2025 RMR uplift: about $68 million, for RMR resources of around 730 MW. [e12]
- 2025 FFSS uplift: $45.9 million, up 36% from $33.8 million in 2024. [e4]
- 2025 RUC: 5,129 resource-hours; make-whole above $21 million; claw-backs $4.5 million. [e11][e9]
- 2025 Revenue Neutrality Uplift in the IMM's annual table: $154 million. [e14]

## Say it like this

(Guidance) "Uplift is ERCOT passing through reliability costs that the market prices did not cover, such as paying units it ordered on-line, and every load-serving QSE pays its share based on how much load it served in those intervals. The charge is not a penalty on us; it rises when ERCOT relies more on out-of-market actions like RUC and RMR, and we can budget for it per MWh."

## Common confusion

(Guidance) Uplift is not one charge; it is a family of settlements, each with its own allocation, and the IMM's total mixes them. [e2] RUC make-whole is not charged purely by load share: capacity-short QSEs pay first. [e7] The Securitization Uplift Charge for Winter Storm Uri is a separate charge to QSEs representing obligated LSEs, not part of the daily RUC uplift. [e20]

## Questions

### Why did our RUC uplift go up this year?

The IMM reports RUC instructions rose 176% to 5,129 resource-hours in 2025, mostly for congestion, and make-whole payments exceeded $21 million because of more RUC and fewer opt-outs. [e11][e21]

### Could we have avoided it?

Not the Load Ratio Share part, which every QSE pays in proportion to its AML. [e5][e7] The capacity-short charge is the part tied to the QSE's own position, so being capacity-short in a RUC interval adds cost. [e7]

### Is the number on the initial statement final?

No. The RTM Initial Statement comes on the fifth day and the RTM Final Statement on the 55th day after the Operating Day, so the amount can change. [e16][e17]

## Scenarios

### Finance sees a new RUC make-whole uplift line on this week's settlement and asks you what it is, why we pay it, and whether it will keep growing.

- (Reasoning) Start with one sentence finance can repeat, then the mechanism, the allocation, the trend and a budget number.
- What it is: a payment ERCOT makes so a unit it committed through RUC recovers allowable startup and minimum energy costs the market did not cover. [e8]
- Why we pay it: capacity-short QSEs are charged first, and what remains is uplifted to all QSEs by Load Ratio Share, our AML over total ERCOT AML. [e7][e5]
- How big it is system-wide: RUC make-whole exceeded $21 million in 2025, against $4.5 million of claw-backs. [e9]
- Why it is growing: RUC instructions rose 176% to 5,129 resource-hours in 2025, about 77% for congestion. [e11]
- Suppose (illustrative) a day's RUC make-whole uplift is $500,000 and our Load Ratio Share is 4%: our charge is about $20,000 for that day.
- Context for the total bill: all 2025 uplift was $668 million, or $1.38 per MWh of the all-in price. [e3]
- Timing: it first appears on the RTM Initial Statement on day five and is trued up on the RTM Final Statement on day 55. [e16][e17]
- (Reasoning) Recommend budgeting uplift per MWh of load, checking whether our QSE was capacity-short in the RUC intervals, and watching RUC and RMR trends in ERCOT and IMM reports.

## Open items

- No saved source gives a full per-category 2025 uplift breakdown that adds to $668 million; only RMR, FFSS, RUC and the Revenue Neutrality line were cited.
- The RUC Capacity-Short Charge formula and its cap (np-05 Section 5.7.4.1) were not worked through.
- How RMR costs are allocated to QSEs was not confirmed from the Protocols in this pass.
- Deeper pass: the difference between the IMM's "uplift" definition and the ERCOT settlement charge types on an actual statement.
