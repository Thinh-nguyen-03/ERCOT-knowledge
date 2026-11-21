---
id: sc-crr-valuation
name: "Scenario: Valuing a CRR Path"
aliases: [CRR valuation, valuing a CRR path, pricing a PTP obligation, CRR bid]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: crr
    type: used-in
    note: A CRR is a financial right to congestion rent; a PTP Obligation settled in the DAM pays or charges the day-ahead price difference between its source and sink. [e1][e2]
  - to: crr-auction
    type: used-in
    note: The monthly CRR auction sells one-month PTP Options and PTP Obligations for the following month, and long-term auctions sell a smaller share of capacity. [e4][e5]
  - to: ptp-obligation
    type: example-of
    note: A PTP obligation can pay or charge; a PTP option can only pay. [e3]
  - to: shadow-price
    type: determines
    note: A PTP Obligation's auction clearing price is the sum of binding constraint shadow prices times their shift factors. [e20]
  - to: shift-factor
    type: determines
    note: Shift factors weight each binding constraint's shadow price in a CRR's clearing price; options count only non-negative shift factors. [e20]
  - to: congestion
    type: related
    note: 2025 day-ahead congestion rose 26%, driven by the North and West zones. [e13]
  - to: gtc
    type: affects
    note: The number of active GTCs was 26 in 2025, up from 18 in 2021, and GTCs carry the $5,251 per MW base-case cap. [e16][e33]
  - to: basis-risk
    type: related
    note: PTP Obligations settled in the DAM pay on the Day-Ahead price difference, while real-time congestion was about 7% higher than day-ahead in 2025. [e2][e12]
  - to: credit-tpe
    type: related
    note: Positional risk from CRRs has driven most of ERCOT's collateral, and each auction bid is limited by an auction credit requirement. [e11][e24]
  - to: pcrr
    type: related
    note: PCRRs allocated to eligible NOIEs come out of available CRR capacity before the auction sells the rest. [e29][e31]
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
  - id: e20
    source: ercot-crr-handbook
    locator: "CRR Market User Interface Handbook v4.3, CRR Clearing Prices"
    quote: "A CRR Clearing Price is equal to the corresponding Shadow Price for that CRR product. The Shadow Price for a CRR product is the impact in the objective function of a one MW change to the CRR product. - For PTP Obligations, this is calculated as the sum of the products of the binding constraint shadow prices and their shift factors. - For PTP options, it is the sum of the products of the binding constraint shadow prices and their shift factors, including only non-negative shift factors."
  - id: e21
    source: ercot-crr-handbook
    locator: "CRR Market User Interface Handbook v4.3 (June 27, 2022), Introduction"
    quote: "CRRs may be used as either a financial hedge or a financial investment. When used as a hedge, a CRR locks in the price of congestion at the purchase price of the CRR. When purchased as an investment, it may be used as a financial tool to speculate whether the congestion rent will be greater than the purchase price."
  - id: e22
    source: np-07
    locator: "Section 7.3, paragraph (5)"
    quote: "(5) CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x16 blocks for hours ending 0700-2200, Saturday and Sunday, and NERC holidays in one-month strips; and (c) 7x8 blocks for hours ending 0100-0600 and hours ending 2300-2400 Sunday through Saturday, in one-month strips."
  - id: e23
    source: ref-ercot-crr-training
    locator: "ERCOT CRR training (2020), slides 53-54, 7x24 block bid example"
    quote: "Weighted average price for the three time-of-use periods is (224x$2 + 128x$3 + 320x$8) / 672 = $5.048 Bid price was $6, so 7x24 Bid is awarded"
  - id: e24
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (3), credit constraint formula"
    quote: "The credit constraint for each Counter-Party is based on the following calculation: ACR _(b) = AOBLCR _(b) + AOPTCR _(b) - AOBLCRO _(b)"
  - id: e25
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, Path-Specific DAM-Based Adder"
    quote: "Path-Specific DAM-Based Adder—The path-specific DAM-based adder with the source j and sink k for the hour h, and month m submitted by a Counter-Party b; calculated as 99^(th) percentile of the average rolling consecutive DAM settled price for the reference CRR source/sink over a period that represents a month for each product type (18 days for 5*16, 8 days for 2*16, 28 days for 7*8)."
  - id: e26
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, EACP"
    quote: "Effective Auction Clearing Price—The auction clearing price with the source j and sink k for the hour h, and month m."
  - id: e27
    source: ref-ercot-crr-training
    locator: "ERCOT CRR training (2020), slide 101, Credit Consumption in CRR Auction"
    quote: "PTP Obligation Bids: Volume * (Bid price + Path-Specific Adders)"
  - id: e28
    source: np-07
    locator: "Section 7.5.5.3, paragraph (2), pre-auction screening"
    quote: "Prior to the CRR Auction, ERCOT will conduct a two-part pre-auction screening process. First, if the Counter-Party’s CRR Auction credit limit is greater than that Counter-Party’s credit exposure as defined below using the CRR bid volumes rather than awarded volumes, then the Counter-Party’s CRR Auction credit limit will be ignored as the CRR Auction is solved."
  - id: e29
    source: np-07
    locator: "Section 7.4, Pre-Assigned Congestion Revenue Rights Overview, paragraph (1)"
    quote: "ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources."
  - id: e30
    source: np-07
    locator: "Section 7.4.2.2, PCRR Allocations and Nominations, paragraph (1)(a)"
    quote: "The Simultaneous Feasibility Test (SFT) evaluation to determine the feasible PCRR allocation amount for each month being evaluated uses 100% of that month’s expected network topology, which may result in different amounts allocated in different months. If the SFT evaluation indicates that the nominated PCRR amounts are not feasible, then ERCOT shall proportionately reduce the requested PCRRs by their Impact Ratio on violated constraints."
  - id: e31
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (1)"
    quote: "The Congestion Revenue Right (CRR) Auction auctions the available network capacity of the ERCOT transmission system not allocated as described in Section 7.4, Preassigned Congestion Revenue Rights Overview, or sold in a previous auction."
  - id: e32
    source: imm-som-2025
    locator: "page 91 (OCR), Chapter V.E.4, CRR Funding Levels"
    quote: "Although the day-ahead market produced enough revenue to fully fund CRRs, ERCOT derated many CRRs in 2025 under the mandatory deration process. CRR deratings reduced payments to CRR holders by $33 million and reduced ERCOT’s overall funding percentage to approximately 99%, comparable to the previous year. Derating CRRs when the market produces sufficient revenue introduces unnecessary risk for CRR buyers and could ultimately reduce CRR auction revenues."
  - id: e33
    source: imm-som-2025
    locator: "page 84 (OCR), Chapter V.D.1, Violated Constraints, 2025 shadow price caps"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e34
    source: imm-som-2025
    locator: "Chapter V.F, Load Zone Reconfiguration, Figure 45 discussion"
    quote: "The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. Congestion costs within the West increased by 27% between 2024 and 2025."
  - id: e35
    source: np-07
    locator: "Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2)"
    quote: "(2) ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e36
    source: np-07
    locator: "Section 7.9.2.1, paragraph (3)"
    quote: "(3) In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e37
    source: imm-som-2025
    locator: "page 87 (OCR), Chapter V.E.1, CRR Auction Timeline"
    quote: "This uncertainty increases the risk that payments to CRR account holders could exceed the congestion rent collected in the day-ahead market and create a revenue shortfall. To mitigate this risk, ERCOT sells only a portion of the rated transmission capacity for each CRR path in long-term auctions, then increases the percentage of capacity available in successive auctions until the final monthly auction, as illustrated in Figure 40."
  - id: e38
    source: imm-som-2025
    locator: "page 87 (OCR), Chapter V.E.1, CRR Auction Timeline"
    quote: "NPRR 1288, approved in November 2025, eliminated this block purchase option by removing multi-month blocks to reduce auction optimization time. As a result, participants now purchase CRRs only for individual months, even in long-term auctions that cover multiple future months."
  - id: e39
    source: np-07
    locator: "Section 7.5.1, paragraph (2)(b)"
    quote: "(b) The CRR Network Model must use the peak Load conditions of the month or set of months being modeled."
  - id: e40
    source: ref-ercot-crr-training
    locator: "ERCOT CRR training (2020), slide 132, Payment for CRRs Settled in Day-Ahead (Hedge Value)"
    quote: "Hedge Value < Target Payment CRR Owner receives Hedge Value or Derated Amount, whichever is greater"
---

## Definition

This scenario is about putting a price on a CRR, a financial right to day-ahead or real-time congestion rent between two points that carries no right or duty to deliver physical energy. [e1]

## How it works

Know what you are paid. A PTP obligation bought in the CRR auction pays or charges the difference in Day-Ahead Settlement Point Prices between sink and source. [e2] An option can only pay; an obligation can pay or charge. [e3] So the expected value is the expected day-ahead sink-minus-source spread over the hours of the CRR, compared with the auction price. The Protocols treat a PTP Obligation acquired in the DAM differently: it is paid or charged on the Real-Time price difference. [e35] If ERCOT cannot run the DAM at all, PTP Obligations are settled on Real-Time price differences. [e36]

Know what you buy. CRRs are auctioned in Time Of Use blocks with the same MW in every hour of the block: 5x16 (hours ending 0700-2200 on weekdays), 2x16 (the same hours on weekends and NERC holidays) and 7x8 (hours ending 0100-0600 and 2300-2400 every day). [e22] Since NPRR 1288 (approved November 2025), the IMM says participants buy CRRs only for individual months, even in long-term auctions. [e38] ERCOT's 2020 training shows how a 7x24 bid in the monthly auction is tested against the three block prices weighted by their hours: (224x$2 + 128x$3 + 320x$8) / 672 = $5.048, so a $6 bid is awarded. [e23]

Spreads come from binding constraints. The IMM measures day-ahead congestion value as flow on each constraint times its shadow price. [e14] In 2025 day-ahead congestion rose 26%, led by the North zone (where ERCOT used heavy RUC to manage congestion) and the West zone (where transmission has lagged renewables and Permian load). [e13] The West is export constrained in the Panhandle and import constrained in the Permian Basin, and congestion within the West rose 27% from 2024 to 2025. [e34] Active GTCs rose to 26 in 2025 from 18 in 2021, and ERCOT treats them as base-case stability constraints with a $5,251 per MW shadow price cap. [e16][e33]

The auction price works the same way. ERCOT's CRR handbook says a CRR's clearing price equals its shadow price in the auction: for a PTP Obligation, the sum of binding constraint shadow prices times their shift factors; for a PTP Option, the same sum using only non-negative shift factors. [e20] The CRR Network Model uses the peak Load conditions of the month being modeled and must include outages expected to significantly affect transfer capability. [e39][e7] The Simultaneous Feasibility Test confirms the grid can support all awarded CRRs under normal conditions. [e6]

The auction sets supply. The auction sells only capacity not already allocated as PCRRs or sold in an earlier auction. [e31] PCRRs are a portion of available CRRs allocated to NOIEs with pre-September 1, 1999 ownership of, or long-term contracts for, specific Generation Resources. [e29] Their feasibility is tested on 100% of the month's expected topology, and infeasible nominations are cut pro rata by their impact on violated constraints. [e30] CRR Auction Capacity is 90% for the monthly auction and, in a long-term auction sequence, 70% in the first six-month window stepping down to 10% in the sixth. [e19][e18][e5] The IMM explains the step-down: congestion is harder to forecast far ahead, so selling only part of each path's rated capacity early reduces the risk that CRR payments exceed day-ahead congestion rent. [e37]

Funding risk comes from outages and deration. ERCOT pays less than target only when day-ahead congestion rent falls short, often because unforeseen outages cut transfer capability between the auction and the DAM. [e8] The payment on a positively valued PTP Obligation that sinks at a Resource Node may be reduced because of directional network elements oversold in earlier auctions. [e15] In 2025 the DAM produced enough revenue to fund CRRs fully, but mandatory deration cut payments by $33 million and brought funding to about 99%; the IMM says derating when revenue is sufficient adds unnecessary risk for buyers. [e32] Any remaining shortfall is prorated across holders of positively valued CRRs; the last short payment was in November 2020. [e9]

Credit sets how much you can bid. The auction enforces a credit constraint per Counter-Party, ACR = AOBLCR + AOPTCR − AOBLCRO: the credit requirement for obligation bids plus option bids, adjusted for obligation offers. [e24] For obligation bids the requirement draws on a path-specific DAM-based adder, the 99th percentile of the path's rolling DAM settled price over month-length windows (18 days for 5x16, 8 days for 2x16, 28 days for 7x8), and on the path's effective auction clearing price. [e25][e26] ERCOT's 2020 training summarizes credit use for obligation bids as volume times (bid price plus path-specific adders). [e27] Before the auction, ERCOT screens credit using bid volumes; if a Counter-Party's credit limit already exceeds that exposure, the limit is ignored while the auction is solved. [e28]

## Formula

Auction credit for a Counter-Party b (np-07 Section 7.5.5.3(3)): ACR_b = AOBLCR_b + AOPTCR_b − AOBLCRO_b. ACR is the Auction Credit Requirement; AOBLCR is the requirement for all PTP Obligation bids, AOPTCR for PTP Option bids, and AOBLCRO for PTP Obligation offers. [e24] Inside AOBLCR, the path-specific DAM-based adder A_ci99 is the 99th percentile of the rolling DAM settled price for the source/sink, and EACP is the path's effective auction clearing price. [e25][e26]

Clearing price of a CRR (ERCOT handbook): the sum over binding auction constraints of shadow price times the path's shift factor; for an option, only non-negative shift factors count. [e20]

## Key facts

- Auction-bought PTP obligations settle on the day-ahead sink-minus-source price difference; DAM-bought ones settle on the real-time difference. [e2][e35]
- TOU blocks: 5x16, 2x16 and 7x8; since NPRR 1288 (approved November 2025) CRRs are sold as single months. [e22][e38]
- Auction capacity: 90% monthly; 70% down to 10% across the six long-term windows. [e19][e5]
- CRR profitability rose 21% in 2025 after a 1.5% net loss in 2024. [e10]
- Real-time congestion was about 7% higher than day-ahead congestion in 2025. [e12]
- 2025 deration cut CRR payments by $33 million even though the DAM fully funded CRRs. [e32]
- ERCOT's collateral was $6.9 billion in 2025, mostly driven by CRR positional risk. [e11]
- CRRs can be bought in monthly blocks up to three years ahead. [e17]
- The last CRR short payment was in November 2020 (as of the IMM's 2025 report). [e9]

## Scenarios

### You can buy an August PTP obligation from a Panhandle wind node to HB_NORTH in the monthly auction. How do you decide what to bid?

- Define the payoff. Each hour pays HB_NORTH minus the source node in the DAM, and it can be a charge if the spread reverses. [e2][e3]
- Decide the blocks. You bid 5x16, 2x16 and 7x8 separately, each with the same MW in every hour of the block. [e22]
- Find the constraints between the two points. The IMM calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price. [e14] The auction prices the path the same way, as the sum of binding constraint shadow prices times shift factors. [e20]
- Look at history and trend. Day-ahead congestion rose 26% in 2025, with the West zone a main driver; the Panhandle is export constrained, and congestion within the West rose 27% in 2025. [e13][e34] Active GTCs grew from 18 in 2021 to 26 in 2025, and they carry the $5,251 per MW cap. [e16][e33]
- Check outages. The CRR model uses peak Load conditions and includes outages expected to affect transfer capability, but unforeseen outages between the auction and the DAM can reduce transmission capability and leave CRRs short-funded. [e39][e7][e8]
- Check sink deration. This path sinks at a hub, but obligations that sink at a Resource Node can be cut for oversold elements. [e15]
- (Reasoning) Build hour-by-hour scenarios and value each block separately, since the spread may differ by hour; for Panhandle-to-North, the hours with high wind are where the export constraint is most likely to bind.
- Remember it settles on day-ahead prices. Real-time congestion in 2025 was about 7% above day-ahead, so a generator using this as a hedge keeps some real-time exposure. [e12]
- Suppose (illustrative): you expect an average day-ahead spread of $9/MWh across 744 August hours on 10 MW, about $67,000. Bid below that, say $6/MWh, to leave room for model error and collateral cost.
- Price in credit: each obligation bid uses credit of about volume times (bid price plus a path-specific adder based on the 99th percentile of the path's DAM prices), and CRR positions drove most of ERCOT's $6.9 billion of collateral in 2025. [e27][e25][e11]

### Variant: the same path is offered as a PTP Option in a long-term auction for next August.

- The option never charges you if the spread reverses, so its value is only the positive part of the hourly spread. [e3]
- Its clearing price counts only non-negative shift factors, so it is priced differently from the obligation on the same path. [e20]
- Less capacity is on offer: only 70% to 10% of capacity depending on the window, because the IMM says long-dated congestion is harder to forecast. [e5][e37]
- You buy a single month, not a multi-month strip, under NPRR 1288. [e38]
- (Reasoning) The option costs more than the obligation for the same expected spread because it removes the downside; pay for it when the spread can flip, for example when wind is low and the West import side binds instead.

## Questions

### Why can a CRR be short-paid?

If day-ahead congestion rent is less than what CRRs are owed, often because of unforeseen outages that reduce transfer capability after the auction, ERCOT pays less than target. [e8] Remaining shortfalls are prorated across positively valued CRRs. [e9]

### Option or obligation?

A PTP Option can only result in payments to the CRR Owner, so it never produces a charge if the spread reverses; an obligation can pay or charge. [e3]

### Were CRRs profitable lately?

The IMM says CRR profitability increased by 21% in 2025, after a net loss of 1.5% in 2024. [e10]

### Why is less capacity sold in later long-term windows?

The long-term sequence sells 70% of capacity in the first six-month window and steps down to 10% in the sixth. [e5] The IMM explains that congestion forecasts become more uncertain further ahead, so ERCOT sells only part of each path's rated capacity in long-term auctions to reduce the risk of payments exceeding day-ahead congestion rent, and offers more in later auctions. [e37]

### How is a CRR's auction clearing price formed, and why can it differ from what the path later earns?

ERCOT's handbook says the clearing price equals the product's shadow price in the auction, the sum of binding constraint shadow prices times shift factors. [e20] The auction model uses the month's peak Load conditions and expected outages, while the DAM sees the actual topology; unforeseen outages are a main reason the two differ. [e39][e7][e8] (Reasoning) So the gap between clearing price and realized value is a bet on which constraints bind and how hard.

### Your CRR sinks at a wind farm's Resource Node and gets derated even though CRRs were fully funded. Why?

Positively valued obligations that sink at a Resource Node can be cut for directional elements oversold in earlier auctions. [e15] ERCOT's 2020 training says that when the target payment exceeds the hedge value, the owner receives the hedge value or the derated amount, whichever is greater. [e40] In 2025 this mandatory deration cut payments by $33 million even though the DAM fully funded CRRs, which the IMM calls unnecessary risk for buyers. [e32]

### What if you buy the same path as a PTP Obligation in the DAM instead of the CRR auction?

Then it is paid or charged on the Real-Time price difference, not the day-ahead difference. [e35] (Reasoning) That makes a DAM-bought PTP a bet on real-time congestion relative to the day-ahead price you paid, while an auction CRR is a bet on day-ahead congestion relative to the auction price.

### How much credit does a big CRR bid tie up?

The auction credit requirement adds up obligation-bid, option-bid and obligation-offer requirements. [e24] For obligation bids the requirement uses a path-specific adder set at the 99th percentile of the path's DAM settled prices, so a path with a history of large spreads uses more credit per MW. [e25] ERCOT's 2020 training summarizes it as volume times (bid price plus path-specific adders). [e27]

## Say it like this

(Guidance) A CRR is a bet on day-ahead congestion between two points, so I value it from the binding constraints between them, their likely shadow prices and the outages that might change them, block by block, then bid below that value to cover model, funding, deration and credit risk. As a hedge it locks in congestion at the purchase price; as an investment it pays off only if congestion rent beats that price. [e21]

## Common confusion

(Guidance) A PTP Obligation settled in the DAM pays on the Day-Ahead price difference, so it does not fully cover real-time congestion, which was about 7% higher than day-ahead in 2025. [e2][e12] A PTP Obligation bought in the DAM is a different product that settles on real-time prices. [e35] Also, a CRR is not a transmission reservation: it gives no right to move physical energy. [e1]

## Open items

- Resolved 2026-11-21: auction-acquired PTP Obligations settle on day-ahead price differences (Section 7.9.1.1); DAM-acquired ones settle on real-time differences (Section 7.9.2.1(2)).
- Resolved 2026-11-21: how auction clearing prices are formed is now cited from ERCOT's CRR handbook (v4.3); the handbook date is 2022 and later changes are not in the saved sources.
- The credit consumption summary and hedge value rules are from ERCOT's 2020 training deck; whether the current protocols still use the same hedge value parameters was not checked against np-07 Section 7.9.1.1 formulas.
- No source gives typical auction prices or realized values for specific Panhandle or West-North paths; the IMM's September 2026 monthly report lists top PTP pairs by auction value only in a chart whose values did not extract.
- The full AOBLCR term (how the adder and EACP combine in the Min() term) is in a formula line that was not quoted; only the ACR total and variable definitions are cited.
- How much capacity PCRR allocations take from a given path in a given month is not published in the saved sources.
