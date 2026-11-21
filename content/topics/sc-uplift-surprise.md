---
id: sc-uplift-surprise
name: "Scenario: Explaining an Uplift Charge to Finance"
aliases: [uplift surprise, explaining uplift to finance, unexpected settlement charge, RUC uplift charge question]
kind: scenario
domain: cases
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-21
depth: deep
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
    note: ERCOT issues an RTM Initial Statement on the fifth day after the Operating Day and an RTM Final Statement on the 55th day, unless that day is not a Business Day. [e16][e17]
  - to: rmr
    type: related
    note: RMR uplift was the largest contributor to the 2025 increase in uplift, at $68 million. [e3]
  - to: ffss
    type: related
    note: The IMM, summarizing the FFSS rule (16 TAC 25.520), says ERCOT uplifts most FFSS program costs to LSEs by load-ratio share. [e13]
  - to: ruc
    type: causes
    note: RUC instructions rose to 5,129 resource-hours in 2025, mostly for congestion. [e11]
  - to: securitization
    type: related
    note: The Securitization Uplift Charge is a separate charge to a QSE representing an obligated LSE, used to pay the Securitization Uplift Balance and financing expenses. [e20]
  - to: congestion
    type: causes
    note: Congestion drove about 77% of 2025 RUC commitments, and the IMM says almost all 2021 RENA uplift occurred in hours with transmission congestion. [e11][e47]
  - to: crr
    type: related
    note: The IMM's 2025 annual table shows CRR Auction Distribution as a credit of $1,810 million to load, alongside the uplift lines. [e32]
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
    locator: "Section G, Firm Fuel Supply Service, 3. FFSS Rulemaking, Highlights of 16 TAC 25.520 (OCR)"
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
  - id: e22
    source: imm-som-2025
    locator: "Appendix, Table A4: ERCOT 2025 Year at a Glance, page 169 (OCR), header"
    quote: "Annual Total ($ Millions)"
  - id: e23
    source: np-05
    locator: "Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1)"
    quote: "The dollar amount charged to each QSE, due to capacity shortfalls for a particular RUC, for a 15-minute Settlement Interval, is the QSE’s shortfall ratio share multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, to all QSEs for that RUC, subject to a cap."
  - id: e24
    source: np-05
    locator: "Section 5.7.4.1, RUC Capacity-Short Charge, paragraph (1), cap"
    quote: "The cap on the charge to each QSE is two multiplied by the total RUC Make-Whole Payments, including amounts for RMR Units, for all QSEs multiplied by that QSE’s capacity shortfall for that RUC process divided by the total capacity of all RUC-committed Resources during that Settlement Interval for the RUC process."
  - id: e25
    source: np-06
    locator: "Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval, paragraph (1)"
    quote: "LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT The above variables are defined as follows:"
  - id: e26
    source: np-06
    locator: "Section 6.6.6.5, RMR Service Charge, paragraph (1)"
    quote: "(1) The total RMR cost for all RMR Units is allocated to the QSEs representing Loads based on LRS."
  - id: e27
    source: np-06
    locator: "Section 6.6.10, Real-Time Revenue Neutrality Allocation, paragraph (1)"
    quote: "ERCOT must be revenue-neutral in each Settlement Interval. Each QSE receives an allocated share, on a LRS basis, of the net amount of:"
  - id: e28
    source: np-06
    locator: "Section 6.7.3, Real-Time Ancillary Service Revenue Neutrality Allocation, paragraph (1)"
    quote: "The total cost for Real-Time Ancillary Service payments and charges is allocated to the QSEs representing Load based on Load Ratio Share (LRS)."
  - id: e29
    source: np-09
    locator: "Section 9.19.1, Default Uplift Invoices, paragraph (1)"
    quote: "ERCOT shall collect the total short-pay amount for all Settlement Invoices for a month, less the total payments expected from a payment plan, from Qualified Scheduling Entities (QSEs) and CRR Account Holders."
  - id: e30
    source: np-09
    locator: "Section 9.19.1, paragraph (2) formula"
    quote: "DURSCP_(cp =) TSPA * MMARS_(cp) Where: MMARS _(cp) = MMA _(cp) / MMATOT"
  - id: e31
    source: imm-som-2025
    locator: "page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions"
    quote: "Revenue Neutrality Uplift $154 AS Imbalance Uplift $27 ERCOT Fee $308 ERO Passthrough Fee $30 Firm Fuel $46"
  - id: e32
    source: imm-som-2025
    locator: "page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions"
    quote: "CRR Auction Distribution ($1,810) Balancing Account Surplus ($293)"
  - id: e33
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "RENA uplift grew to total $160 million in 2024, up from $109 million in 2023."
  - id: e34
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "Figure 46 shows that the largest positive contributor to RENA uplift in 2024 was the LDF Contribution totaling $75 million. Uplift associated with differences in the transmission models between the day-ahead and real-time markets was also one of the largest factors, accounting for $55 million in RENA uplift."
  - id: e35
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "NPRR 1004, Load Distribution Factor Process Update, approved on August 11, 2020, is still pending implementation, but should reduce this uplift."
  - id: e36
    source: imm-som-2021
    locator: "page 41 (OCR), Review of Real-Time Market Outcomes, all-in price"
    quote: "Uplift costs accounted for $5.34 per MWh of the all-in electricity price in 2021, up from $0.94 per MWh in 2020. The total amount of uplifted costs in 2021 was approximately $2.1 billion, vastly higher than the $359 million in 2020. The largest driver of this massive uplift value is the ancillary service imbalance settlement."
  - id: e37
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide"
    quote: "There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effective Resource-hours in the summer of 2024."
  - id: e38
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide, key takeaway"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e39
    source: ercot-monthly-ops-2026-10
    locator: "ERCOT monthly operations report, October 2026, RUC slide"
    quote: "There were 165.6 RUC total effective Resource-hours in October. 164.7 hours (99.4%) were committed to address capacity concerns and 0.9 (0.6%) were committed to alleviate congestion."
  - id: e40
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter"
    quote: "Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes."
  - id: e41
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, 5. RUC Settlement"
    quote: "In 2024, the rate of RUC-committed resources that opted out of RUC settlement dropped significantly below its long-term trend, largely because of the implementation of NPRR 1172. This rule imposed a full rather than partial claw-back for resources that opted out of RUC settlement."
  - id: e42
    source: np-09
    locator: "Section 9.5.8, RTM True-Up Statement, paragraph (2)"
    quote: "ERCOT shall issue RTM True-Up Statements 180 days following the Operating Day, if ERCOT has received and validated usage data from at least 99% of the total number of Electric Service Identifiers (ESI IDs) with a BUSIDRRQ Load Profile Type code"
  - id: e43
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Revision Description, item 9"
    quote: "9. DRRS deployments will not qualify for RUC Make-Whole Payments or RUC Clawback Charges. For RUC blocks that are contiguous with a DRRS deployment, only minimum energy costs for the RUC hours will be included in the RUC Guarantee;"
  - id: e44
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, paragraph (4)"
    quote: "An LSE may not pass through the Securitization Uplift Charge to any transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity."
  - id: e45
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, Table 9 (columns: opt-out frequency %, claw-back $ millions, make-whole $ millions)"
    quote: "2021 39 $3.09 $5.38 2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84"
  - id: e46
    source: np-09
    locator: "Section 9.19.1, Default Uplift Invoices, paragraph (2)"
    quote: "Each Counter-Party’s share of the uplift is calculated using the best available Settlement data for each Operating Day in the month prior to the month in which the default occurred (the “reference month”), and is calculated as follows:"
  - id: e47
    source: imm-som-2021
    locator: "page 47 (OCR), Evaluation of the Revenue Neutrality Allocation Uplift"
    quote: "Almost all the RENA uplift occurred in market hours when there was transmission congestion."
  - id: e48
    source: np-05
    locator: "Section 5.7.6, RUC Decommitment Charge, paragraph (1)"
    quote: "(1) ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units."
  - id: e49
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, RUC slide, chart footnote"
    quote: "August data for each year goes through 8/15."
---

## Definition

This scenario asks an analyst to explain an unexpected uplift line on a settlement statement to a finance team. The IMM describes uplift as the non-market-based expenses loads pay on top of energy and ancillary services. [e1]

## How it works

Step 1, name the bucket. The IMM's uplift covers a list of settlements including Revenue Neutrality Allocation, emergency energy, ERS, black start, Firm Fuel, RMR, RUC, voltage services and the ERCOT administrative fee. [e2] In 2025 uplift totalled $668 million, or $1.38 per MWh of the all-in price, up 12% from 2024; RMR at $68 million was the largest contributor to the increase. [e3] Real-time congestion shortfalls are charged to LSEs through the Revenue Neutrality Allocation, and the IMM's 2025 annual table (in $ millions) lists Revenue Neutrality Uplift at $154, AS Imbalance Uplift at $27, the ERCOT Fee at $308 and Firm Fuel at $46. [e15][e31][e22] "Uplift" is the IMM's analytical grouping; in the Protocols each item is its own charge with its own section and allocation, such as the RUC Make-Whole Uplift Charge, the RMR Service Charge and the Real-Time Revenue Neutrality Allocation. [e7][e26][e27]

Step 2, explain the allocation. Load Ratio Share is the ratio of an Entity's AML (retail Load usage data adjusted for UFE, losses and DC Tie exports) to total ERCOT AML for an interval; for a 15-minute interval a QSE's LRS is its AML (floored at zero) over total ERCOT AML. [e5][e6][e25] Several uplift items are spread on it: total RMR cost goes to QSEs representing Loads by LRS, ERCOT allocates the net RENA amount by LRS to stay revenue-neutral in each Settlement Interval, and Real-Time AS payments and charges are allocated to QSEs representing Load by LRS. [e26][e27][e28] The IMM, in its summary of the FFSS rule (16 TAC 25.520), also says ERCOT uplifts most FFSS program costs to LSEs by load-ratio share. [e13]

Step 3, explain RUC specifically. For RUC, QSEs that were capacity-short pay first, and only the rest of the make-whole cost is uplifted to all QSEs by Load Ratio Share; RUC clawback revenues are paid back to QSEs on the same basis, and RUC Decommitment Payments are charged back on LRS. [e7][e10][e48] A capacity-short QSE pays its shortfall ratio share of the total make-whole payments for that RUC, capped at two times the total make-whole payments times its shortfall over the total capacity of RUC-committed Resources. [e23][e24]

Step 4, explain the cause. A make-whole payment reimburses allowable startup and minimum energy costs that a RUC-committed Resource did not recover in the market. [e8] RUC instructions rose to 5,129 resource-hours in 2025, 77% for congestion, and make-whole payments exceeded $21 million against $4.5 million of claw-backs. [e11][e9] The IMM attributes part of the rise to more RUC and fewer resources opting out of RUC settlement; opting out means giving up both make-whole and claw-back, and after NPRR1172 imposed a full claw-back on resources that opted out, the opt-out rate fell. [e21][e40][e41] The IMM's table shows the opt-out frequency at 3% in 2025, against 39% in 2021. [e45]

Step 5, explain the timing and sign. ERCOT issues the RTM Initial Statement on the fifth day after the Operating Day, the RTM Final Statement on the 55th day, unless that day is not a Business Day, and an RTM True-Up Statement 180 days after the Operating Day if meter data thresholds are met. [e16][e17][e42] A positive amount on a statement is owed to ERCOT; a negative amount is owed by ERCOT. [e18]

## Formula

- QSE Load Ratio Share for a 15-minute interval: LRS = max(0, the QSE's Real-Time AML summed over its Settlement Points) divided by RTAMLTOT, total ERCOT AML. [e25]
- RUC Capacity-Short Charge: the QSE's shortfall ratio share times total RUC Make-Whole Payments for that RUC, capped at 2 x total make-whole x (QSE shortfall / total capacity of RUC-committed Resources). [e23][e24]
- RUC Make-Whole Uplift Charge: whatever make-whole the capacity-short charges do not cover, times each QSE's LRS. [e7]
- Default uplift is different: each Counter-Party's share (DURSCP) is the total short-pay amount times its Maximum MWh Activity ratio share (MMARS = MMA / MMATOT), using the month before the default. [e30][e46]

## Key facts

- 2025 uplift: $668 million in total, $1.38 per MWh of the all-in price, up 12% from 2024. [e3]
- 2024 uplift: about $573 million, $1.24 per MWh. [e19]
- 2021 uplift: about $2.1 billion, $5.34 per MWh, driven mostly by the ancillary service imbalance settlement. [e36]
- 2025 RMR uplift: about $68 million, for RMR resources of around 730 MW. [e12]
- 2025 FFSS uplift: $45.9 million, up 36% from $33.8 million in 2024. [e4]
- 2025 RUC: 5,129 resource-hours; make-whole above $21 million; claw-backs $4.5 million. [e11][e9]
- 2025 Revenue Neutrality Uplift in the IMM's annual table: $154 million; RENA was $160 million in 2024. [e14][e22][e33]
- Summer 2026 RUC: 1,313 effective Resource-hours, against 872 in summer 2025 and 148 in summer 2024 (ERCOT's counts, with August data for each year through August 15). [e37][e49]

## Say it like this

(Guidance) "Uplift is ERCOT passing through reliability costs that the market prices did not cover, such as paying units it ordered on-line, and every load-serving QSE pays its share, mostly based on how much load it served in those intervals (for RUC make-whole, capacity-short QSEs pay first). The charge is not a penalty on us; it rises when ERCOT relies more on out-of-market actions like RUC and RMR, and we can budget for it per MWh."

(Guidance) For a finance audience: "Think of it as a pro-rata pass-through by load share, booked on the day-five statement, trued up on day 55, and possibly again at 180 days."

## Common confusion

(Guidance) Uplift is not one charge; it is a family of settlements, each with its own allocation, and the IMM's total mixes them. [e2] RUC make-whole is not charged purely by load share: capacity-short QSEs pay first. [e7] The Securitization Uplift Charge is a separate charge to QSEs representing obligated LSEs, a different charge from the RUC make-whole uplift, and it may not be passed through to a transmission-voltage Customer that is a Securitization Uplift Charge Opt-Out Entity. [e20][e44]

(Guidance) Default uplift after another participant short-pays is not allocated by Load Ratio Share: it uses each Counter-Party's Maximum MWh Activity share and reaches QSEs and CRR Account Holders. [e29][e30]

(Guidance) Not every allocated line is a cost: the IMM's 2025 table shows CRR Auction Distribution ($1,810 million) and Balancing Account Surplus ($293 million) as credits. [e32]

## Questions

### Why did our RUC uplift go up this year?

The IMM reports RUC instructions rose 176% to 5,129 resource-hours in 2025, mostly for congestion, and make-whole payments exceeded $21 million, which the IMM says is partly explained by greater use of RUC and fewer resources opting out of RUC settlement. [e11][e21]

### Could we have avoided it?

Not the Load Ratio Share part, which every QSE pays in proportion to its AML. [e5][e7] The capacity-short charge is the part tied to the QSE's own position, so being capacity-short in a RUC interval adds cost, though it is capped. [e7][e24]

### Is the number on the initial statement final?

Not necessarily. The RTM Initial Statement comes on the fifth day and the RTM Final Statement on the 55th day after the Operating Day, and the RTM True-Up Statement 180 days after, if the meter data threshold is met. [e16][e17][e42] The saved sources do not say how much amounts typically change between them.

### Why did fewer units opt out of RUC settlement, and why does that matter to us?

NPRR1172 imposed a full rather than partial claw-back on resources that opted out, and the opt-out rate fell below its long-term trend in 2024. [e41] A unit that stays in RUC settlement collects make-whole; capacity-short QSEs are charged for it first and any remainder is uplifted to all QSEs by LRS. [e40][e7] (Reasoning) So fewer opt-outs means more make-whole to be charged and uplifted.

### What if a competitor REP defaults? Do we pay?

Possibly. If short-paid amounts cannot be recovered, ERCOT collects them through Default Uplift Invoices from QSEs and CRR Account Holders, with each Counter-Party's share based on its Maximum MWh Activity in the month before the default, not on Load Ratio Share. [e29][e30][e46]

### Will RUC uplift keep growing, and will its cause stay the same?

The reason has shifted: ERCOT reports 1,313 effective RUC Resource-hours in summer 2026 (August counted through August 15), more than the previous two summers, largely to address capacity needs and ensure sufficient Ancillary Service quantities, and in October 2026 99.4% of RUC hours were for capacity. [e37][e49][e38][e39] Under NPRR1309, once implemented, DRRS deployments will not qualify for RUC Make-Whole Payments. [e43]

### Why does RENA move with congestion?

ERCOT must be revenue-neutral each interval and allocates the net residual by LRS. [e27] For 2024 the IMM attributes $75 million of RENA to the Load Distribution Factor contribution and $55 million to day-ahead versus real-time transmission model differences, and says NPRR1004 (approved August 11, 2020, still pending) should reduce it. [e34][e35]

## Scenarios

### Finance sees a new RUC make-whole uplift line on this week's settlement and asks you what it is, why we pay it, and whether it will keep growing.

- (Reasoning) Start with one sentence finance can repeat, then the mechanism, the allocation, the trend and a budget number.
- What it is: a payment ERCOT makes so a unit it committed through RUC recovers allowable startup and minimum energy costs the market did not cover. [e8]
- Why we pay it: capacity-short QSEs are charged first, and what remains is uplifted to all QSEs by Load Ratio Share, our AML over total ERCOT AML. [e7][e5]
- How big it is system-wide: RUC make-whole exceeded $21 million in 2025, against $4.5 million of claw-backs. [e9]
- Why it grew in 2025: RUC instructions rose 176% to 5,129 resource-hours, about 77% for congestion, and make-whole payments rose with greater use of RUC and fewer opt-outs. [e11][e21]
- What 2026 looks like: summer 2026 RUC was higher again but mostly for capacity and Ancillary Service quantities rather than congestion. [e37][e38] The saved sources do not forecast make-whole dollars for 2026.
- Suppose (illustrative) a day's RUC make-whole uplift is $500,000 and our Load Ratio Share is 4%: our charge is about $20,000 for that day.
- Context for the total bill: all 2025 uplift was $668 million, or $1.38 per MWh of the all-in price. [e3]
- Timing: ERCOT issues the RTM Initial Statement on day five and the RTM Final Statement on day 55 after the Operating Day, with a True-Up at 180 days. [e16][e17][e42]
- (Reasoning) Recommend budgeting uplift per MWh of load, checking whether our QSE was capacity-short in the RUC intervals, and watching RUC and RMR trends in ERCOT and IMM reports.

### Variant: finance asks why "uplift" in the IMM report does not match the sum of uplift lines on our statements.

- The IMM's uplift is a defined list that includes items such as the ERCOT System Administrative Fee and Black Start Service Settlement, not a single ERCOT charge type. [e2]
- On statements, each item settles under its own section: RMR by LRS to QSEs representing Loads, RENA by LRS, RUC make-whole after capacity-short charges. [e26][e27][e7]
- Some allocations are credits, such as CRR Auction Distribution in the IMM's 2025 table. [e32]
- (Reasoning) Reconcile by mapping each statement charge type to the IMM's list, then compare per-MWh rather than dollars, since our share moves with our LRS.

## Open items

- No saved source gives a full per-category 2025 uplift breakdown that adds to $668 million; the IMM's Table A4 lines (RENA $154 million, AS Imbalance $27 million, ERCOT Fee $308 million, Firm Fuel $46 million) were not reconciled to that total.
- Resolved 2026-11-21: RMR cost allocation is confirmed in np-06 Section 6.6.6.5 (total RMR cost to QSEs representing Loads by LRS). [e26]
- The RUC Capacity-Short Charge shortfall calculation (np-05 Section 5.7.4.1.1, RCAPSNAP and related variables) was not worked through beyond the cap.
- Partly resolved 2026-11-21: the IMM's "uplift" list is mapped to several ERCOT charge types here; the saved sources do not include a sample settlement statement with charge-type codes.
- How much amounts typically change between Initial, Final and True-Up statements is not in the saved sources.
