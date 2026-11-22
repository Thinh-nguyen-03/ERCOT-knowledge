# Audit packet: Scenario: Valuing a CRR Path (sc-crr-valuation)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.1, Function of Congestion Revenue Rights, paragraph (1) · text copy line 143 · heading above: 7.1 Function of Congestion Revenue Rights

BEFORE: … Credit to CRR Balancing Account 7-69 7.9.3.3 Shortfall Charges to CRR Owners 7-71 7.9.3.4 Monthly Refunds to Short-Paid CRR Owners 7-72 7.9.3.5 CRR Balancing Account Closure 7-74 7.9.3.6 Rolling CRR Balancing Account Fund 7-76 Congestion Revenue Rights 7.1 Function of Congestion Revenue Rights (1) 
QUOTE: A Congestion Revenue Right (CRR) is a financial instrument that entitles the CRR Owner to be charged or to receive compensation for congestion rents that arise when the ERCOT Transmission Grid is congested in the Day-Ahead Market (DAM) or in Real-Time. CRRs do not represent a right to receive, or obligation to deliver, physical energy.
AFTER:  Most CRRs are tradable in the CRR Auction, in the DAM, or bilaterally, as described in more detail in this Section. (2) CRRs may be acquired as follows: (a) CRR Auction - ERCOT shall conduct periodic auctions to allow eligible CRR Account Holders to acquire CRRs. The auction also allows CRR Owners …

### e2 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, paragraph (1) · text copy line 1412 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …to the DAM. PTP Obligations acquired in DAM may not change ownership in the ERCOT CRR registration system after DAM execution. 7.9 CRR Settlements 7.9.1 Day-Ahead CRR Payments and Charges 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM (1) Except as specified in paragraph (2) below, 
QUOTE: ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point.
AFTER:  (2) For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions. (3) The payment or charge to each CRR Owner for a given Operating Hour…

### e3 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, paragraph (4) · text copy line 197 · heading above: 7.3 Types of Congestion Revenue Rights to Be Auctioned

BEFORE: …l network elements. (3) PTP Obligations are evaluated hourly in each CRR Auction as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW). (4) 
QUOTE: PTP Options can only result in payments from ERCOT to the CRR Owner of record. A PTP Obligation may result in either a payment or a charge to the CRR Owner of record.
AFTER:  (5) CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x…

### e4 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, Nature and Timing, paragraph (4)(a) · text copy line 421 · heading above: 7.5.1 Nature and Timing

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) ERCOT shall conduct CRR Auctions as follows: (a) 
QUOTE: The CRR Monthly Auction, held once per calendar month, shall include the sale of one-month terms of Point-to-Point (PTP) Options and PTP Obligations for the month immediately following the month during which the CRR bid submission window closes.
AFTER:  (b) Twice per year, a CRR Long-Term Auction Sequence shall be held, selling PTP Options and PTP Obligations, subject to the following constraints: (i) Each CRR Long-Term Auction Sequence shall consist of six successive CRR Auctions, each of which offers for sale CRRs spanning a term of six consecut…

### e5 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, paragraph (5)(b) · text copy line 448 · heading above: 7.5.1 Nature and Timing

BEFORE: … the new date(s) and to explain the need for the change. (iii) The CRR activity calendar must be approved by the Wholesale Market Subcommittee (WMS) prior to the annual posting. (5) For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) For the CRR Monthly Auction, 90%. (b) 
QUOTE: For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively.
AFTER:  (6) For any month covered by a CRR Auction that is part of a CRR Long-Term Auction Sequence, ERCOT shall offer network capacity equal to: (a) The expected network topology for that month, scaled down to the CRR Auction Capacity percentage; minus (b) All outstanding CRRs that were previously allocat…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4651

BEFORE: …ve only 36% of real-time load. Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast. • 
QUOTE: ERCOT's total collateral remained unchanged in 2025 at $6.9 billion. For the last two years, exposure to positional risks from CRRs has driven most of this collateral.
AFTER:  • Point-to-point obligations remained profitable in 2025, paying 10.9% more in real time than their day-ahead purchase cost. This ended a multi-year trend of declining PTP profitability. • The volume of PTP bids has grown by 258% over the last decade. This increase lengthens the time ERCOT needs to…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V, Real-Time Congestion, discussion of Figure 37 · text copy line 5282

BEFORE: …een the day-ahead and real-time markets often lead to differences in congestion values. These changes include net load forecast errors, forced outages, and other deviations from expected conditions. Figure 37 summarizes monthly real-time congestion for 2025 and annual values from 2021 through 2025. 
QUOTE: This figure shows that real-time congestion in 2025 followed trends similar to those in the day-ahead market. Overall, congestion was approximately 7% higher in the real-time market than in the day-ahead market, likely because of forecast error for load and renewable generation and differences in thermal resource commitments between day-ahead and real time.
AFTER:  2025 State of the Market Report | 61 / / Transmission Congestion and CRRs Figure 37: Value of Real-Time Congestion by Zone !(%""" RST8 JVO8W /V;8W <VOT8VN Z;VTT>?VNS @AHBCAZBa34OS !D#" !D"" !C#" !D%#"" !D%""" !C%#"" !C"" !C%""" !A#" !A%#"" !A"" !A%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.A, Summary of Transmission Congestion Results in 2025 · text copy line 5090

BEFORE: …ch generator's energy offer curve and its corresponding impact on transmission constraints. This market dispatch produces a set of locational prices that vary across the network and congestion costs collected from participants. Key insights on transmission and congestion in ERCOT in 2025 include: • 
QUOTE: Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin.
AFTER:  • Real-time congestion was 7% higher in the RTM than in the DAM. This disparity is reasonable because forecast error persists for both load and renewable generation. • Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 12…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary / renewable congestion discussion · text copy line 2679 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …nce between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network. 
QUOTE: ERCOT had 26 active GTCs in 2025, compared to 18 in 2021.
AFTER:  3. Captured Prices for Wind and Solar The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments. Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the e…

### e20 · `ercot-crr-handbook` · tier 2 · CRR Market User Interface Handbook v4.3
locator: CRR Market User Interface Handbook v4.3, CRR Clearing Prices · text copy line 635

BEFORE: …- for a PTP Obligation is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] - for a PTP Option is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] if [LMP_(sink) - LMP_(source)] ≥ 0 = 0 if [LMP_(sink) - LMP_(source)] < 0 CRR Clearing Prices 
QUOTE: A CRR Clearing Price is equal to the corresponding Shadow Price for that CRR product. The Shadow Price for a CRR product is the impact in the objective function of a one MW change to the CRR product. - For PTP Obligations, this is calculated as the sum of the products of the binding constraint shadow prices and their shift factors. - For PTP options, it is the sum of the products of the binding constraint shadow prices and their shift factors, including only non-negative shift factors.
AFTER:  Note that the CRR auction system limits the ability of a CRR AH to have its submitted transactions awarded if the AH's credit exposure for the auction exceeds the lesser of the AH's self-imposed credit limit or the credit limit as prescribed in Section 16 of the Nodal Protocols. CRR System Overview…

### e24 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.3, Auction Process, paragraph (3), credit constraint formula · text copy line 739 · heading above: 7.5.5.3 Auction Process

BEFORE: …ion bids, PTP Obligation offers, and PTP Option bids, for each source/sink Settlement Point combination, the credit exposure will use the bid price and MW quantity that produces the maximum credit exposure that could result from the CRR Auction for that source/sink Settlement Point combination. (3) 
QUOTE: The credit constraint for each Counter-Party is based on the following calculation: ACR _(b) = AOBLCR _(b) + AOPTCR _(b) - AOBLCRO _(b)
AFTER:  Where: AOBLCR _(b) = ∑_(m) ∑_(h) ∑_(j, k) [(BOBLMW _(m, h,(j, k), b) * (Max(0, BPOBL _(m, h,(j, k), b)) - Min(0,A _(ci99, m, h,(j, k), b), EACP _(m, h,(j, k)) )))] AOPTCR _(b) = ∑_(m) ∑_(h) ∑_(j, k) [(BOPTMW _(m, h,(j, k), b) * BPOPT _(m, h,(j, k), b))] AOBLCRO _(b) = ∑_(m) ∑_(h) ∑_(j, k) (OOBLMW _…

### e29 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.4, Pre-Assigned Congestion Revenue Rights Overview, paragraph (1) · text copy line 223 · heading above: 7.4 Pre-Assigned Congestion Revenue Rights Overview

BEFORE: …ilable for FGRs on the ERCOT website. If there is any change in the designation of flowgates, ERCOT shall provide notice to all Market Participants as soon as practicable. 7.3.1.2 Defined Flowgates (1) There are currently no defined flowgates. 7.4 Pre-Assigned Congestion Revenue Rights Overview (1) 
QUOTE: ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources.
AFTER:  For purposes of this Section 7.4, such Generation Resources shall be referred to as "pre-September 1, 1999 Generation Resources." An existing Generation Resource that interconnected to the ERCOT Transmission Grid on or after June 1, 2021, pursuant to paragraph (3) of Section 1.6.5, Interconnection …

### e31 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, Nature and Timing, paragraph (1) · text copy line 389 · heading above: 7.5.1 Nature and Timing

BEFORE: …mber of PCRRs for Resources other than solid-fuel and combined-cycle Resources are provided at no charge. (h) PCRRs shall not be able to be bilaterally traded through ERCOT systems prior to the completion of the CRR Auction used to determine their value. 7.5 CRR Auctions 7.5.1 Nature and Timing (1) 
QUOTE: The Congestion Revenue Right (CRR) Auction auctions the available network capacity of the ERCOT transmission system not allocated as described in Section 7.4, Preassigned Congestion Revenue Rights Overview, or sold in a previous auction.
AFTER:  The CRR Auction also allows CRR Owners an opportunity to offer for sale CRRs that they hold. Each CRR Auction allows for the purchase of CRR products as described in paragraph (5) of Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, in strips of one or more consecutive months and all…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 84 (OCR), Chapter V.D.1, Violated Constraints, 2025 shadow price caps · text copy line 5379

BEFORE: …t locations that affect the violated constraint. The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • 
QUOTE: ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW.
AFTER:  See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommen…

## Statements to check (new or changed since the last audit)

- **Link to crr** (cites e1, e2): used-in CRR (Congestion Revenue Right): A CRR is a financial right to congestion rent; a PTP Obligation settled in the DAM pays or charges the day-ahead price difference between its source and sink. [e1][e2]
- **Link to crr-auction** (cites e4, e5): used-in CRR Auctions: The monthly CRR auction sells one-month PTP Options and PTP Obligations for the following month, and long-term auctions sell a smaller share of capacity. [e4][e5]
- **Link to ptp-obligation** (cites e3): example-of PTP Obligation: A PTP obligation can pay or charge; a PTP option can only pay. [e3]
- **Link to shadow-price** (cites e20): determines Shadow Price: A PTP Obligation's auction clearing price is the sum of binding constraint shadow prices times their shift factors. [e20]
- **Link to shift-factor** (cites e20): determines Shift Factors: Shift factors weight each binding constraint's shadow price in a CRR's clearing price; options count only non-negative shift factors. [e20]
- **Link to congestion** (cites e13): related Transmission Congestion: 2025 day-ahead congestion rose 26%, driven by the North and West zones. [e13]
- **Link to gtc** (cites e16, e33): affects GTC (Generic Transmission Constraint): The number of active GTCs was 26 in 2025, up from 18 in 2021, and in 2025 GTCs carried the $5,251 per MW base-case cap. [e16][e33]
- **Link to basis-risk** (cites e2, e12): related Basis Risk: PTP Obligations settled in the DAM pay on the Day-Ahead price difference, while real-time congestion was about 7% higher than day-ahead in 2025. [e2][e12]
- **Link to credit-tpe** (cites e11, e24): related Credit, Collateral & TPE: Positional risk from CRRs has driven most of ERCOT's collateral, and each auction bid is limited by an auction credit requirement. [e11][e24]
- **Link to pcrr** (cites e29, e31): related PCRR (Pre-Assigned CRR): PCRRs allocated to eligible NOIEs come out of available CRR capacity before the auction sells the rest. [e29][e31]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) Build hour-by-hour scenarios and value each block separately, since the spread may differ by hour; for Panhandle-to-North, the hours with high wind are where the export constraint is most likely to bind.
- (Scenarios) - Suppose (illustrative): you expect an average day-ahead spread of $9/MWh across 744 August hours on 10 MW, about $67,000. Bid below that, say $6/MWh, to leave room for model error and collateral cost.
- (Scenarios) - (Reasoning) The option costs more than the obligation for the same expected spread because it removes the downside; pay for it when the spread can flip, for example when wind is low and the West import side binds instead.

