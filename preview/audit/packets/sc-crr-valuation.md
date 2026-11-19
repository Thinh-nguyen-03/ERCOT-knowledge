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

### e6 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.4, Simultaneous Feasibility Test, paragraph (1) · text copy line 842 · heading above: 7.5.5.4 Simultaneous Feasibility Test

BEFORE: …applicable billing adjustment procedures. (8) Once a CRR Auction is complete, ERCOT will make available on the MIS Certified Area each active CRR Account Holder's credit exposure calculated within the CRR Auction process (as defined in paragraph (3) above). 7.5.5.4 Simultaneous Feasibility Test (1) 
QUOTE: The Simultaneous Feasibility Test (SFT) is a market feasibility test that confirms that the transmission system can support the awarded set of CRRs during normal system conditions, assuming that the Network Operations Model updated with Real-Time network topology is the same as that modeled (for the CRR Auction), while observing all security constraints.
AFTER:  (2) The SFT uses a Direct Current (DC) power-flow model to model the effect of CRR Auction bids and offers on the expected system network topology during the auction term. SFT is not a system reliability test and is not intended to model actual system operating conditions. SFTs are run during the d…

### e7 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, Nature and Timing, paragraph (2) (CRR Network Model) · text copy line 398 · heading above: 7.5.1 Nature and Timing

BEFORE: …ilize the same or similar CRR Network Model inputs for multiple consecutive months. The CRR Network Model must, to the extent practicable, include the same topology, contingencies, and operating procedures as used in the Network Operations Model as reasonably expected to be in place for each month. 
QUOTE: The expected network topology used in the CRR Network Model for any month or set of months must include all Outages from the Outage Scheduler and identified by ERCOT as expected to have a significant impact upon transfer capability during that time.
AFTER:  These Outages included in the CRR Network Model shall be posted on the Market Information System (MIS) Secure Area consistent with model posting requirements by ERCOT with accompanying cause and duration information, as indicated in the Outage Scheduler. Transmission system upgrades and changes mus…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, 4. CRR Funding Levels · text copy line 5715

BEFORE: …and Payments !#'%A" -.//-01OP4R6-/7876179 !#'A"" -:;<=76P9-PR-.//->?67@9 !#'#A" !#'""" !"#$%%$&'( !C'%A" !C'A"" !C'#A" !C'""" !%A" !A"" !#A" !" #"C( #"C% #"C) #"C* #"#" #"#C #"## #"#+ #"#, #"#A 4. CRR Funding Levels The integrity of the CRR market depends on fully funding CRRs with congestion rent. 
QUOTE: ERCOT pays less than the target value only when day-ahead congestion rent is insufficient, which can occur when the network flows modeled in the CRR auction exceed the flows in the day-ahead market. This occurrence is often the result of unforeseen outages or other factors that reduce transmission capability between the CRR auction and the DAM.
AFTER:  CRR Shortfall Settlement When oversold flows cause a shortfall on a specific transmission facility, ERCOT reduces payments to CRRs that sink at generator locations affecting that facility. These reductions are 42 Despite being approved in 2020, the project to implement NPRR 1030 has not been initia…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, CRR Shortfall Settlement · text copy line 5735

BEFORE: …pite being approved in 2020, the project to implement NPRR 1030 has not been initiated yet. https://www.ercot.com/files/docs/2022/01/27/Revision_Requests_2026_04_14.xlsx 2025 State of the Market Report | 67 / / Transmission Congestion and CRRs based on the decrease in day-ahead transfer capability. 
QUOTE: If revenue remains insufficient after this adjustment, ERCOT allocates the remaining shortfall across all holders of positively valued CRRs through a prorated charge, which reduces their overall payments. The last CRR short payment occurred in November 2020.
AFTER:  CRR Surplus Settlement When day-ahead congestion rent exceeds the amount owed to CRR holders, ERCOT tracks the excess in a monthly settlement process called the balancing account. ERCOT uses this excess congestion rent to repay CRR holders previously assessed shortfall charges, effectively refundin…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Highlights · text copy line 5116

BEFORE: … more expensive dispatch solutions to avoid violating these constraints. • CRR auction revenues increased 6% in 2025, slower growth than the 14-32% annual growth rates from 2021 to 2024. Intrazonal CRRs drove the increase, whereas CRR revenue across zones decreased to its lowest value since 2021. • 
QUOTE: CRR profitability increased by 21% in 2025, reversing a multi-year decline. By contrast, CRRs posted a net loss of 1.5% in 2024.
AFTER:  • CRR surplus payments to load totaled $293 million, up 22% from the prior year. The balancing account was sufficiently funded to cover CRRs in every month of 2025. • The last two sections of this chapter cover recommendations on the ongoing review of 4CP and load zone reconfiguration in ERCOT. Bot…

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

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.C, Day-Ahead Congestion · text copy line 5204

BEFORE: …s for load and intermittent renewable generation influence congestion in the day-ahead market. These factors shape how market participants hedge their positions before real time. Figure 36 shows how the day-ahead market values congestion and highlights the role of GTCs in managing system stability. 
QUOTE: It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost.
AFTER:  Figure 36 presents congestion values within and across zones, including congestion linked to GTCs. It shows that day-ahead congestion increased by 26% from 2024 to 2025, ending the recent trend of declining annual congestion cost. Congestion costs increased in all four zones, across zones, and for …

### e15 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, paragraph (2) · text copy line 1414 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …arges for PTP Obligations Settled in DAM (1) Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point. (2) 
QUOTE: For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions.
AFTER:  (3) The payment or charge to each CRR Owner for a given Operating Hour of PTP Obligations with each pair of source and sink Settlement Points settled in the Day-Ahead Market (DAM) is calculated as follows: If the PTP Obligation has a non-positive value, i.e. (DAOBLPR _((j, k)) ≤ 0), or the sink, k,…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary / renewable congestion discussion · text copy line 2679 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …nce between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network. 
QUOTE: ERCOT had 26 active GTCs in 2025, compared to 18 in 2021.
AFTER:  3. Captured Prices for Wind and Solar The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments. Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the e…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, introduction to CRRs · text copy line 5177

BEFORE: …hs, and are denominated in megawatts. The volume of CRRs available on each path is limited by the modeled physical transmission capacity between the two locations, directly linking CRR 2025 State of the Market Report | 59 / / Transmission Congestion and CRRs availability to the transmission system. 
QUOTE: Market participants purchase CRRs through auctions and may acquire them in monthly blocks up to three years in advance to manage congestion risk.
AFTER:  CRRs can be purchased as obligations or options. A CRR obligation entitles the holder to the price difference between the sink and source in the day ahead market, but it also requires the holder to pay if the price at the source exceeds the price at the sink. A CRR option entitles the holder to pos…

### e18 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, paragraph (5) · text copy line 446 · heading above: 7.5.1 Nature and Timing

BEFORE: …T will send a Market Notice to provide the new date(s) and to explain the need for the change. (iii) The CRR activity calendar must be approved by the Wholesale Market Subcommittee (WMS) prior to the annual posting. (5) For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) 
QUOTE: For the CRR Monthly Auction, 90%.
AFTER:  (b) For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively. (6) For any month covered by a CRR Auction that is part of a CRR Long-Term Auction S…

### e19 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, paragraph (5) and (5)(a) · text copy line 444 · heading above: 7.5.1 Nature and Timing

BEFORE: …relieve such overlap. For any changes to the posted auction activity dates, ERCOT will send a Market Notice to provide the new date(s) and to explain the need for the change. (iii) The CRR activity calendar must be approved by the Wholesale Market Subcommittee (WMS) prior to the annual posting. (5) 
QUOTE: For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) For the CRR Monthly Auction, 90%.
AFTER:  (b) For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively. (6) For any month covered by a CRR Auction that is part of a CRR Long-Term Auction S…

## Statements to check

- **Definition #1** (cites e1): This scenario is about putting a price on a CRR, a financial right to day-ahead or real-time congestion rent between two points that carries no right or duty to deliver physical energy. [e1]
- **How it works #1** (cites e2, e3): Know what you are paid. A PTP obligation pays or charges the difference in Day-Ahead Settlement Point Prices between sink and source. [e2] An option can only pay; an obligation can pay or charge. [e3] So the expected value is the expected day-ahead sink-minus-source spread over the hours of the CRR, compared with the auction price.
- **How it works #2** (cites e14, e13, e16): Spreads come from binding constraints. The IMM measures day-ahead congestion value as flow on each constraint times its shadow price. [e14] In 2025 day-ahead congestion rose 26%, led by the North zone (where ERCOT used heavy RUC to manage congestion) and the West zone (where transmission has lagged renewables and Permian load). [e13] Active GTCs rose to 26 in 2025 from 18 in 2021. [e16]
- **How it works #3** (cites e4, e19, e18, e5, e6, e7): The auction sets supply. The monthly auction sells one-month PTP options and obligations for the following month. [e4] CRR Auction Capacity is 90% for the monthly auction and, in a long-term auction sequence, 70% in the first six-month window stepping down to 10% in the sixth. [e19][e18][e5] The Simultaneous Feasibility Test confirms the grid can support all awarded CRRs under normal conditions. [e6] The CRR network model must include outages expected to significantly affect transfer capability. [e7]
- **How it works #4** (cites e8, e15, e9): Funding risk comes from outages. ERCOT pays less than target only when day-ahead congestion rent falls short, often because unforeseen outages cut transfer capability between the auction and the DAM. [e8] The payment on a positively valued PTP Obligation that sinks at a Resource Node may be reduced because of directional network elements oversold in earlier auctions. [e15] Any remaining shortfall is prorated across holders of positively valued CRRs; the last short payment was in November 2020. [e9]
- **Key facts #1** (cites e2): - PTP obligations settle on the day-ahead sink-minus-source price difference. [e2]
- **Key facts #2** (cites e10): - CRR profitability rose 21% in 2025 after a 1.5% net loss in 2024. [e10]
- **Key facts #3** (cites e12): - Real-time congestion was about 7% higher than day-ahead congestion in 2025. [e12]
- **Key facts #4** (cites e11): - ERCOT's collateral was $6.9 billion in 2025, mostly driven by CRR positional risk. [e11]
- **Key facts #5** (cites e17): - CRRs can be bought in monthly blocks up to three years ahead. [e17]
- **Key facts #6** (cites e9) FLAG number-not-in-quote: 2025: - The last CRR short payment was in November 2020 (as of the IMM's 2025 report). [e9]
- **Scenarios #2** (cites e2, e3): - Define the payoff. Each hour pays HB_NORTH minus the source node in the DAM, and it can be a charge if the spread reverses. [e2][e3]
- **Scenarios #3** (cites e14): - Find the constraints between the two points. The IMM calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price. [e14]
- **Scenarios #4** (cites e13, e16): - Look at history and trend. Day-ahead congestion rose 26% in 2025, with the West zone a main driver because transmission projects have not kept pace with renewables in the panhandle, and active GTCs grew from 18 in 2021 to 26 in 2025. [e13][e16]
- **Scenarios #5** (cites e7, e8): - Check outages. The CRR model includes outages expected to affect transfer capability, but unforeseen outages between the auction and the DAM can reduce transmission capability and leave CRRs short-funded. [e7][e8]
- **Scenarios #6** (cites e15): - Check sink deration. This path sinks at a hub, but obligations that sink at a Resource Node can be cut for oversold elements. [e15]
- **Scenarios #8** (cites e12): - Remember it settles on day-ahead prices. Real-time congestion in 2025 was about 7% above day-ahead, so a generator using this as a hedge keeps some real-time exposure. [e12]
- **Scenarios #10** (cites e11): - Price in credit: CRR positions drove most of ERCOT's $6.9 billion of collateral in 2025. [e11]
- **Questions #2** (cites e8, e9): If day-ahead congestion rent is less than what CRRs are owed, often because of unforeseen outages that reduce transfer capability after the auction, ERCOT pays less than target. [e8] Remaining shortfalls are prorated across positively valued CRRs. [e9]
- **Questions #4** (cites e3): A PTP Option can only result in payments to the CRR Owner, so it never produces a charge if the spread reverses; an obligation can pay or charge. [e3]
- **Questions #6** (cites e10): The IMM says CRR profitability increased by 21% in 2025, after a net loss of 1.5% in 2024. [e10]
- **Questions #8** (cites e5): The long-term sequence sells 70% of capacity in the first six-month window and steps down to 10% in the sixth. [e5] (Guidance) One plausible reason, not stated in the sources, is keeping capacity back for later auctions.
- **Common confusion #1** (cites e2, e12, e1): (Guidance) A PTP Obligation settled in the DAM pays on the Day-Ahead price difference, so it does not fully cover real-time congestion, which was about 7% higher than day-ahead in 2025. [e2][e12] Also, a CRR is not a transmission reservation: it gives no right to move physical energy. [e1]
- **Link to crr** (cites e1, e2): used-in CRR (Congestion Revenue Right): A CRR is a financial right to congestion rent; a PTP Obligation settled in the DAM pays or charges the day-ahead price difference between its source and sink. [e1][e2]
- **Link to crr-auction** (cites e4): used-in CRR Auctions: The monthly CRR auction sells one-month PTP Options and PTP Obligations for the following month. [e4]
- **Link to ptp-obligation** (cites e3): example-of PTP Obligation: A PTP obligation can pay or charge; a PTP option can only pay. [e3]
- **Link to shadow-price** (cites e14): determines Shadow Price: Day-ahead congestion value is flow times the constraint's shadow price. [e14]
- **Link to congestion** (cites e13): related Transmission Congestion: 2025 day-ahead congestion rose 26%, driven by the North and West zones. [e13]
- **Link to gtc** (cites e16): affects GTC (Generic Transmission Constraint): The number of active GTCs was 26 in 2025, up from 18 in 2021. [e16]
- **Link to basis-risk** (cites e2, e12): related Basis Risk: PTP Obligations settled in the DAM pay on the Day-Ahead price difference, while real-time congestion was about 7% higher than day-ahead in 2025. [e2][e12]
- **Link to credit-tpe** (cites e11): related Credit, Collateral & TPE: Positional risk from CRRs has driven most of ERCOT's collateral. [e11]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) Build hour-by-hour scenarios and value on-peak and off-peak hours separately, since the spread may differ by hour.
- (Scenarios) - Suppose (illustrative): you expect an average day-ahead spread of $9/MWh across 744 August hours on 10 MW, about $67,000. Bid below that, say $6/MWh, to leave room for model error and collateral cost.
- (Say it like this) (Guidance) A CRR is a bet on day-ahead congestion between two points, so I value it from the binding constraints between them, their likely shadow prices and the outages that might change them, then bid below that value to cover model, funding and credit risk.

