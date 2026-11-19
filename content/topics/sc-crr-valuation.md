---
id: sc-crr-valuation
name: "Scenario: Valuing a CRR Path"
aliases: [CRR valuation, valuing a CRR path, pricing a PTP obligation, CRR bid]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-18
links:
  - to: crr
    type: used-in
    note: A CRR is a financial right to congestion rent; a PTP Obligation settled in the DAM pays or charges the day-ahead price difference between its source and sink. [e1][e2]
  - to: crr-auction
    type: used-in
    note: The monthly CRR auction sells one-month PTP Options and PTP Obligations for the following month. [e4]
  - to: ptp-obligation
    type: example-of
    note: A PTP obligation can pay or charge; a PTP option can only pay. [e3]
  - to: shadow-price
    type: determines
    note: Day-ahead congestion value is flow times the constraint's shadow price. [e14]
  - to: congestion
    type: related
    note: 2025 day-ahead congestion rose 26%, driven by the North and West zones. [e13]
  - to: gtc
    type: affects
    note: The number of active GTCs was 26 in 2025, up from 18 in 2021. [e16]
  - to: basis-risk
    type: related
    note: PTP Obligations settled in the DAM pay on the Day-Ahead price difference, while real-time congestion was about 7% higher than day-ahead in 2025. [e2][e12]
  - to: credit-tpe
    type: related
    note: Positional risk from CRRs has driven most of ERCOT's collateral. [e11]
evidence:
  - id: e1
    source: np-07
    locator: "Section 7.1, Function of Congestion Revenue Rights, paragraph (1)"
    quote: "A Congestion Revenue Right (CRR) is a financial instrument that entitles the CRR Owner to be charged or to receive compensation for congestion rents that arise when the ERCOT Transmission Grid is congested in the Day-Ahead Market (DAM) or in Real-Time. CRRs do not represent a right to receive, or obligation to deliver, physical energy."
  - id: e2
    source: np-07
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, paragraph (1)"
    quote: "ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point."
  - id: e3
    source: np-07
    locator: "Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, paragraph (4)"
    quote: "PTP Options can only result in payments from ERCOT to the CRR Owner of record. A PTP Obligation may result in either a payment or a charge to the CRR Owner of record."
  - id: e4
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (4)(a)"
    quote: "The CRR Monthly Auction, held once per calendar month, shall include the sale of one-month terms of Point-to-Point (PTP) Options and PTP Obligations for the month immediately following the month during which the CRR bid submission window closes."
  - id: e5
    source: np-07
    locator: "Section 7.5.1, paragraph (5)(b)"
    quote: "For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively."
  - id: e6
    source: np-07
    locator: "Section 7.5.5.4, Simultaneous Feasibility Test, paragraph (1)"
    quote: "The Simultaneous Feasibility Test (SFT) is a market feasibility test that confirms that the transmission system can support the awarded set of CRRs during normal system conditions, assuming that the Network Operations Model updated with Real-Time network topology is the same as that modeled (for the CRR Auction), while observing all security constraints."
  - id: e7
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (2) (CRR Network Model)"
    quote: "The expected network topology used in the CRR Network Model for any month or set of months must include all Outages from the Outage Scheduler and identified by ERCOT as expected to have a significant impact upon transfer capability during that time."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, 4. CRR Funding Levels"
    quote: "ERCOT pays less than the target value only when day-ahead congestion rent is insufficient, which can occur when the network flows modeled in the CRR auction exceed the flows in the day-ahead market. This occurrence is often the result of unforeseen outages or other factors that reduce transmission capability between the CRR auction and the DAM."
  - id: e9
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, CRR Shortfall Settlement"
    quote: "If revenue remains insufficient after this adjustment, ERCOT allocates the remaining shortfall across all holders of positively valued CRRs through a prorated charge, which reduces their overall payments. The last CRR short payment occurred in November 2020."
  - id: e10
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Highlights"
    quote: "CRR profitability increased by 21% in 2025, reversing a multi-year decline. By contrast, CRRs posted a net loss of 1.5% in 2024."
  - id: e11
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "ERCOT’s total collateral remained unchanged in 2025 at $6.9 billion. For the last two years, exposure to positional risks from CRRs has driven most of this collateral."
  - id: e12
    source: imm-som-2025
    locator: "Chapter V, Real-Time Congestion, discussion of Figure 37"
    quote: "This figure shows that real-time congestion in 2025 followed trends similar to those in the day-ahead market. Overall, congestion was approximately 7% higher in the real-time market than in the day-ahead market, likely because of forecast error for load and renewable generation and differences in thermal resource commitments between day-ahead and real time."
  - id: e13
    source: imm-som-2025
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin."
  - id: e14
    source: imm-som-2025
    locator: "Chapter V.C, Day-Ahead Congestion"
    quote: "It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost."
  - id: e15
    source: np-07
    locator: "Section 7.9.1.1, paragraph (2)"
    quote: "For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions."
  - id: e16
    source: imm-som-2025
    locator: "Executive Summary / renewable congestion discussion"
    quote: "ERCOT had 26 active GTCs in 2025, compared to 18 in 2021."
  - id: e17
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, introduction to CRRs"
    quote: "Market participants purchase CRRs through auctions and may acquire them in monthly blocks up to three years in advance to manage congestion risk."
  - id: e18
    source: np-07
    locator: "Section 7.5.1, paragraph (5)"
    quote: "For the CRR Monthly Auction, 90%."
  - id: e19
    source: np-07
    locator: "Section 7.5.1, paragraph (5) and (5)(a)"
    quote: "For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) For the CRR Monthly Auction, 90%."
---

## Definition

This scenario is about putting a price on a CRR, a financial right to day-ahead or real-time congestion rent between two points that carries no right or duty to deliver physical energy. [e1]

## How it works

Know what you are paid. A PTP obligation pays or charges the difference in Day-Ahead Settlement Point Prices between sink and source. [e2] An option can only pay; an obligation can pay or charge. [e3] So the expected value is the expected day-ahead sink-minus-source spread over the hours of the CRR, compared with the auction price.

Spreads come from binding constraints. The IMM measures day-ahead congestion value as flow on each constraint times its shadow price. [e14] In 2025 day-ahead congestion rose 26%, led by the North zone (where ERCOT used heavy RUC to manage congestion) and the West zone (where transmission has lagged renewables and Permian load). [e13] Active GTCs rose to 26 in 2025 from 18 in 2021. [e16]

The auction sets supply. The monthly auction sells one-month PTP options and obligations for the following month. [e4] CRR Auction Capacity is 90% for the monthly auction and, in a long-term auction sequence, 70% in the first six-month window stepping down to 10% in the sixth. [e19][e18][e5] The Simultaneous Feasibility Test confirms the grid can support all awarded CRRs under normal conditions. [e6] The CRR network model must include outages expected to significantly affect transfer capability. [e7]

Funding risk comes from outages. ERCOT pays less than target only when day-ahead congestion rent falls short, often because unforeseen outages cut transfer capability between the auction and the DAM. [e8] The payment on a positively valued PTP Obligation that sinks at a Resource Node may be reduced because of directional network elements oversold in earlier auctions. [e15] Any remaining shortfall is prorated across holders of positively valued CRRs; the last short payment was in November 2020. [e9]

## Key facts

- PTP obligations settle on the day-ahead sink-minus-source price difference. [e2]
- CRR profitability rose 21% in 2025 after a 1.5% net loss in 2024. [e10]
- Real-time congestion was about 7% higher than day-ahead congestion in 2025. [e12]
- ERCOT's collateral was $6.9 billion in 2025, mostly driven by CRR positional risk. [e11]
- CRRs can be bought in monthly blocks up to three years ahead. [e17]
- The last CRR short payment was in November 2020 (as of the IMM's 2025 report). [e9]

## Scenarios

### You can buy an August PTP obligation from a Panhandle wind node to HB_NORTH in the monthly auction. How do you decide what to bid?

- Define the payoff. Each hour pays HB_NORTH minus the source node in the DAM, and it can be a charge if the spread reverses. [e2][e3]
- Find the constraints between the two points. The IMM calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price. [e14]
- Look at history and trend. Day-ahead congestion rose 26% in 2025, with the West zone a main driver because transmission projects have not kept pace with renewables in the panhandle, and active GTCs grew from 18 in 2021 to 26 in 2025. [e13][e16]
- Check outages. The CRR model includes outages expected to affect transfer capability, but unforeseen outages between the auction and the DAM can reduce transmission capability and leave CRRs short-funded. [e7][e8]
- Check sink deration. This path sinks at a hub, but obligations that sink at a Resource Node can be cut for oversold elements. [e15]
- (Reasoning) Build hour-by-hour scenarios and value on-peak and off-peak hours separately, since the spread may differ by hour.
- Remember it settles on day-ahead prices. Real-time congestion in 2025 was about 7% above day-ahead, so a generator using this as a hedge keeps some real-time exposure. [e12]
- Suppose (illustrative): you expect an average day-ahead spread of $9/MWh across 744 August hours on 10 MW, about $67,000. Bid below that, say $6/MWh, to leave room for model error and collateral cost.
- Price in credit: CRR positions drove most of ERCOT's $6.9 billion of collateral in 2025. [e11]

## Questions

### Why can a CRR be short-paid?

If day-ahead congestion rent is less than what CRRs are owed, often because of unforeseen outages that reduce transfer capability after the auction, ERCOT pays less than target. [e8] Remaining shortfalls are prorated across positively valued CRRs. [e9]

### Option or obligation?

A PTP Option can only result in payments to the CRR Owner, so it never produces a charge if the spread reverses; an obligation can pay or charge. [e3]

### Were CRRs profitable lately?

The IMM says CRR profitability increased by 21% in 2025, after a net loss of 1.5% in 2024. [e10]

### Why is less capacity sold in later long-term windows?

The long-term sequence sells 70% of capacity in the first six-month window and steps down to 10% in the sixth. [e5] (Guidance) One plausible reason, not stated in the sources, is keeping capacity back for later auctions.

## Say it like this

(Guidance) A CRR is a bet on day-ahead congestion between two points, so I value it from the binding constraints between them, their likely shadow prices and the outages that might change them, then bid below that value to cover model, funding and credit risk.

## Common confusion

(Guidance) A PTP Obligation settled in the DAM pays on the Day-Ahead price difference, so it does not fully cover real-time congestion, which was about 7% higher than day-ahead in 2025. [e2][e12] Also, a CRR is not a transmission reservation: it gives no right to move physical energy. [e1]

## Open items

- np-07 Section 7.9.2.1 also provides for PTP Obligations acquired in the DAM to be settled on Real-Time price differences; the day-ahead-only settlement described here applies to the Section 7.9.1.1 case, and which applies to an auction-acquired path was not traced.
- The sources do not describe how auction clearing prices for a path are set (for example, as the sum of constraint shadow prices in the auction); only the SFT and auction structure are cited.
- No source gives typical auction prices or realized values for specific West-North paths.
- Deeper pass: CRR credit requirements (how much collateral a given path needs) are in Section 16 and credit documents not used here.
- Deeper pass: PCRR and NOIE allocation effects on available capacity.
