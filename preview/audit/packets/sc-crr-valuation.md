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

### e20 · `ercot-crr-handbook` · tier 2 · CRR Market User Interface Handbook v4.3
locator: CRR Market User Interface Handbook v4.3, CRR Clearing Prices · text copy line 635

BEFORE: …- for a PTP Obligation is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] - for a PTP Option is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] if [LMP_(sink) - LMP_(source)] ≥ 0 = 0 if [LMP_(sink) - LMP_(source)] < 0 CRR Clearing Prices 
QUOTE: A CRR Clearing Price is equal to the corresponding Shadow Price for that CRR product. The Shadow Price for a CRR product is the impact in the objective function of a one MW change to the CRR product. - For PTP Obligations, this is calculated as the sum of the products of the binding constraint shadow prices and their shift factors. - For PTP options, it is the sum of the products of the binding constraint shadow prices and their shift factors, including only non-negative shift factors.
AFTER:  Note that the CRR auction system limits the ability of a CRR AH to have its submitted transactions awarded if the AH's credit exposure for the auction exceeds the lesser of the AH's self-imposed credit limit or the credit limit as prescribed in Section 16 of the Nodal Protocols. CRR System Overview…

### e21 · `ercot-crr-handbook` · tier 2 · CRR Market User Interface Handbook v4.3
locator: CRR Market User Interface Handbook v4.3 (June 27, 2022), Introduction · text copy line 463

BEFORE: …----------------------------------------------------+ : Table 2: Nominations for OPT Hedge Type of Contract ID 1916 ERCOT CRR Market Overview CRRs are financial instruments that result in a charge or a payment to the owner when the ERCOT transmission grid is congested in the Day Ahead Market (DAM). 
QUOTE: CRRs may be used as either a financial hedge or a financial investment. When used as a hedge, a CRR locks in the price of congestion at the purchase price of the CRR. When purchased as an investment, it may be used as a financial tool to speculate whether the congestion rent will be greater than the purchase price.
AFTER:  The main purposes of the ERCOT CRR market are to: - Support a liquid energy market by providing tradable financial instruments for the hedging of transmission congestion costs - Allow Market Participants to eliminate or greatly reduce the cost uncertainties resulting from transmission congestion co…

### e22 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.3, paragraph (5) · text copy line 199 · heading above: 7.3 Types of Congestion Revenue Rights to Be Auctioned

BEFORE: …y the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW). (4) PTP Options can only result in payments from ERCOT to the CRR Owner of record. A PTP Obligation may result in either a payment or a charge to the CRR Owner of record. 
QUOTE: (5) CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x16 blocks for hours ending 0700-2200, Saturday and Sunday, and NERC holidays in one-month strips; and (c) 7x8 blocks for hours ending 0100-0600 and hours ending 2300-2400 Sunday through Saturday, in one-month strips.
AFTER:  (6) CRR Auction bids and Pre-Assigned Congestion Revenue Right (PCRR) nominations must specify a TOU block. (7) For the CRR Monthly Auction only, a single block bid may be submitted for all hours in a calendar month, which represents a linked-offer for all three TOU blocks described above in paragr…

### e23 · `ref-ercot-crr-training` · tier 2 · Congestion Revenue Rights (ERCOT training) (2020)
locator: ERCOT CRR training (2020), slides 53-54, 7x24 block bid example · text copy line 1167

BEFORE: …r CRR from Source A to Sink B • Bid Price = $6 • Month of February has total of 672 hours, including • 224 Off Peak hours • 128 Peak Weekend hours • 320 Peak Weekday hours 53 CRR Auction Example The three time-of-use Clearing Prices for CRR A-B are: • $2 Off Peak • $3 Peak Weekend • $8 Peak Weekday 
QUOTE: Weighted average price for the three time-of-use periods is (224x$2 + 128x$3 + 320x$8) / 672 = $5.048 Bid price was $6, so 7x24 Bid is awarded
AFTER:  54 CRR Auction No 7x24 Block Bids in Long Term Auction Sequences Peak WD Monthly Auction Peak WE Off-Peak TOU blocks Optimized Simultaneously Peak WD Long-Term Auction Peak WE TOU blocks Optimized Independently Off-Peak 55 CRR Auction Minimum Bid Price and Auction Fees • Minimum Bid Price for PTP O…

### e24 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.3, Auction Process, paragraph (3), credit constraint formula · text copy line 739 · heading above: 7.5.5.3 Auction Process

BEFORE: …ion bids, PTP Obligation offers, and PTP Option bids, for each source/sink Settlement Point combination, the credit exposure will use the bid price and MW quantity that produces the maximum credit exposure that could result from the CRR Auction for that source/sink Settlement Point combination. (3) 
QUOTE: The credit constraint for each Counter-Party is based on the following calculation: ACR _(b) = AOBLCR _(b) + AOPTCR _(b) - AOBLCRO _(b)
AFTER:  Where: AOBLCR _(b) = ∑_(m) ∑_(h) ∑_(j, k) [(BOBLMW _(m, h,(j, k), b) * (Max(0, BPOBL _(m, h,(j, k), b)) - Min(0,A _(ci99, m, h,(j, k), b), EACP _(m, h,(j, k)) )))] AOPTCR _(b) = ∑_(m) ∑_(h) ∑_(j, k) [(BOPTMW _(m, h,(j, k), b) * BPOPT _(m, h,(j, k), b))] AOBLCRO _(b) = ∑_(m) ∑_(h) ∑_(j, k) (OOBLMW _…

### e25 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.3, paragraph (3), variable table, Path-Specific DAM-Based Adder · text copy line 764 · heading above: 7.5.5.3 Auction Process

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | A _(ci 99, m, h, (j, k), b) | $/MW per hour | 
QUOTE: Path-Specific DAM-Based Adder-The path-specific DAM-based adder with the source j and sink k for the hour h, and month m submitted by a Counter-Party b; calculated as 99^(th) percentile of the average rolling consecutive DAM settled price for the reference CRR source/sink over a period that represents a month for each product type (18 days for 5*16, 8 days for 2*16, 28 days for 7*8).
AFTER:  The look-back period for DAM settled prices shall be the lesser of Nodal Market go-live to current time and current time minus three years. If historical Day-Ahead Settlement Point Prices (DASPPs) are not available for a Settlement Point for one or more Operating Days, ERCOT will designate a proxy …

### e26 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.3, paragraph (3), variable table, EACP · text copy line 766 · heading above: 7.5.5.3 Auction Process

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | EACP _(m, h, (j, k)) | $/MW per hour | 
QUOTE: Effective Auction Clearing Price-The auction clearing price with the source j and sink k for the hour h, and month m.
AFTER:  | | | | | | | | For each CRR PTP Obligation, this value is equal to the auction clearing price of an awarded CRR selected as follows: | | | | | | | | (a) Awarded CRRs with the source j and sink k containing hour h and operating month m are selected from the set of unexpired awarded PTP Obligations.…

### e27 · `ref-ercot-crr-training` · tier 2 · Congestion Revenue Rights (ERCOT training) (2020)
locator: ERCOT CRR training (2020), slide 101, Credit Consumption in CRR Auction · text copy line 2313

BEFORE: …adlines, refer to CRR Activity Calendar on ercot.com ACLC CP Credit Limit Auction Limit CRR AH Self-Imposed 100 Utilizing Available Credit Credit Consumption in CRR Auction Credit is consumed as follows: • PTP Options Bids: Volume * Bid price • PTP Obligation Offers: Volume * Min (0, Offer price) • 
QUOTE: PTP Obligation Bids: Volume * (Bid price + Path-Specific Adders)
AFTER:  ACLC CP Credit Limit Auction Limit CRR AH Self-Imposed 101 Utilizing Available Credit Path-Specific DAM-Based Adder for PTP Obligation Bids • Calculated for each source/sink pair -$14 -$12 -$10 -$8 -$6 -$4 -$2 $0 $2 $4 $6 $8 $10 ci99 = 99th percentile Confidence Interval Occurrences • Three year lo…

### e28 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.5.3, paragraph (2), pre-auction screening · text copy line 735 · heading above: 7.5.5.3 Auction Process

BEFORE: …redit limit as determined in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation, or, if provided, the Counter-Party's self-imposed CRR Auction credit limit for the CRR Monthly Auction or for a time-of-use within a CRR Auction held as part of a CRR Long-Term Auction Sequence. (2) 
QUOTE: Prior to the CRR Auction, ERCOT will conduct a two-part pre-auction screening process. First, if the Counter-Party's CRR Auction credit limit is greater than that Counter-Party's credit exposure as defined below using the CRR bid volumes rather than awarded volumes, then the Counter-Party's CRR Auction credit limit will be ignored as the CRR Auction is solved.
AFTER:  Second, for each CRR Account Holder of a Counter-Party, if the CRR Account Holder's self-imposed credit limit is greater than that CRR Account Holder's credit exposure as defined below, then the CRR Account Holder's self-imposed credit limit will be ignored as the CRR Auction is solved. The calcula…

### e29 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.4, Pre-Assigned Congestion Revenue Rights Overview, paragraph (1) · text copy line 223 · heading above: 7.4 Pre-Assigned Congestion Revenue Rights Overview

BEFORE: …ilable for FGRs on the ERCOT website. If there is any change in the designation of flowgates, ERCOT shall provide notice to all Market Participants as soon as practicable. 7.3.1.2 Defined Flowgates (1) There are currently no defined flowgates. 7.4 Pre-Assigned Congestion Revenue Rights Overview (1) 
QUOTE: ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources.
AFTER:  For purposes of this Section 7.4, such Generation Resources shall be referred to as "pre-September 1, 1999 Generation Resources." An existing Generation Resource that interconnected to the ERCOT Transmission Grid on or after June 1, 2021, pursuant to paragraph (3) of Section 1.6.5, Interconnection …

### e30 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.4.2.2, PCRR Allocations and Nominations, paragraph (1)(a) · text copy line 343 · heading above: 7.4.2.2 PCRR Allocations and Nominations

BEFORE: …he simultaneous feasibility test described in Section 7.5.5.4, Simultaneous Feasibility Test. A PCRR nomination is a request for one-month strips of a NOIE-specified CRR type for amounts and blocks specified by the NOIE for each month of the PCRR Nomination Year as described in paragraph (c) below. 
QUOTE: The Simultaneous Feasibility Test (SFT) evaluation to determine the feasible PCRR allocation amount for each month being evaluated uses 100% of that month's expected network topology, which may result in different amounts allocated in different months. If the SFT evaluation indicates that the nominated PCRR amounts are not feasible, then ERCOT shall proportionately reduce the requested PCRRs by their Impact Ratio on violated constraints.
AFTER:  The "Impact Ratio" is the amount of a particular PCRR's impact divided by the total impact of all PCRRs in the same direction on a violated constraint. The price that a NOIE must pay for an allocated PCRR is based on the corresponding CRR clearing price in the CRR First Offering. The invoicing and …

### e31 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, Nature and Timing, paragraph (1) · text copy line 389 · heading above: 7.5.1 Nature and Timing

BEFORE: …mber of PCRRs for Resources other than solid-fuel and combined-cycle Resources are provided at no charge. (h) PCRRs shall not be able to be bilaterally traded through ERCOT systems prior to the completion of the CRR Auction used to determine their value. 7.5 CRR Auctions 7.5.1 Nature and Timing (1) 
QUOTE: The Congestion Revenue Right (CRR) Auction auctions the available network capacity of the ERCOT transmission system not allocated as described in Section 7.4, Preassigned Congestion Revenue Rights Overview, or sold in a previous auction.
AFTER:  The CRR Auction also allows CRR Owners an opportunity to offer for sale CRRs that they hold. Each CRR Auction allows for the purchase of CRR products as described in paragraph (5) of Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, in strips of one or more consecutive months and all…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 91 (OCR), Chapter V.E.4, CRR Funding Levels · text copy line 5811

BEFORE: …ap, and ERCOT returned all surplus congestion rent above that threshold to LSEs. ERCOT's practice of offering only 90% of forecasted transmission capability in CRR auctions reduces the likelihood of future funding shortfalls. 68 | 2025 State of the Market Report / / Transmission Congestion and CRRs 
QUOTE: Although the day-ahead market produced enough revenue to fully fund CRRs, ERCOT derated many CRRs in 2025 under the mandatory deration process. CRR deratings reduced payments to CRR holders by $33 million and reduced ERCOT's overall funding percentage to approximately 99%, comparable to the previous year. Derating CRRs when the market produces sufficient revenue introduces unnecessary risk for CRR buyers and could ultimately reduce CRR auction revenues.
AFTER:  F. Congestion Cost and Load As the ERCOT grid has grown in size and complexity, transmission costs have become a larger share of overall system costs. Rapid load growth, changes in the geographic distribution of generation, and the need to manage congestion and reliability have driven substantial i…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 84 (OCR), Chapter V.D.1, Violated Constraints, 2025 shadow price caps · text copy line 5379

BEFORE: …t locations that affect the violated constraint. The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • 
QUOTE: ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW.
AFTER:  See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommen…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.F, Load Zone Reconfiguration, Figure 45 discussion · text copy line 6021

BEFORE: …" !'(""" !C"" -./00N2/34 5/S07/3 8/.79 W/S79 ;407 !%"" !$"" !#"" !" #"'% #"') #"'C #"'* #"#" #"#' #"## #"#H #"#$ #"#, Figure 45 shows that a growing share of congestion costs materializes as intrazonal congestion costs. In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. 
QUOTE: The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. Congestion costs within the West increased by 27% between 2024 and 2025.
AFTER:  Next, we discuss a methodology to define load-zone boundaries based on geographic coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new load zones based on geographic coordinates and historical price data.47 W…

### e35 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2) · text copy line 2001 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …t and the source Settlement Point. The payment to each QSE for a given Operating Hour of its cleared PTP Obligation with links to an Option with each pair of source and sink Settlement Points is calculated as follows: RTOBLLOAMT _(q, (j, k)) = (-1) * MAX(0, RTOBLPR _((j, k))) * RTOBLLO _(q, (j, k)) 
QUOTE: (2) ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The payment or charge to each QSE for a given Operating Hour of its cleared PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k)) (3) In the event that ERCOT is unable to execute the DAM, E…

### e36 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, paragraph (3) · text copy line 2005 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: … the sink Settlement Point and the source Settlement Point. The payment or charge to each QSE for a given Operating Hour of its cleared PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k)) 
QUOTE: (3) In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The payment or charge to each CRR Owner for a given Operating Hour of its PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: NDRTOBLAMT _(o, (j, k)) = (-1) * RTOBLPR _((j, k)) * DAOBL _(o, (j, k)) Where: RTOBLPR _((j, k)) = [](RTSPP _(k, i) - RTSPP _(j, i)…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 87 (OCR), Chapter V.E.1, CRR Auction Timeline · text copy line 5515

BEFORE: …t participants with additional hedging opportunities and supports forward price formation. However, forecasting congestion becomes more uncertain over longer time horizons because congestion outcomes depend on load growth, generation development, transmission outages, and variable renewable output. 
QUOTE: This uncertainty increases the risk that payments to CRR account holders could exceed the congestion rent collected in the day-ahead market and create a revenue shortfall. To mitigate this risk, ERCOT sells only a portion of the rated transmission capacity for each CRR path in long-term auctions, then increases the percentage of capacity available in successive auctions until the final monthly auction, as illustrated in Figure 40.
AFTER:  Figure 40: Schedule for CRR Capacity Sold in Long-Term Auctions !"#A"BC'(")*+),'C"-).'/'AMC1)2*P-)MB) .,,)4RACM*B #!!" +!" *!" -.LM1234516T89:.L; <.L9=>?16T89:.L )!" (!" '!" &!" %!" A!" #!" !" ,%( ,%! ,A& ,#* ,#A ,( ! S*BC78)9"+*#").,,),"'PM:"- 2025 State of the Market Report | 65 / / Transmission …

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 87 (OCR), Chapter V.E.1, CRR Auction Timeline · text copy line 5508

BEFORE: …-time. ERCOT conducts monthly auctions closer to delivery, holding the auction for a given operating month in the preceding calendar month. Historically, long-term auctions allowed participants to purchase CRRs either for individual months or as blocks of consecutive months within a single auction. 
QUOTE: NPRR 1288, approved in November 2025, eliminated this block purchase option by removing multi-month blocks to reduce auction optimization time. As a result, participants now purchase CRRs only for individual months, even in long-term auctions that cover multiple future months.
AFTER:  Running CRR auctions years in advance of real time provides market participants with additional hedging opportunities and supports forward price formation. However, forecasting congestion becomes more uncertain over longer time horizons because congestion outcomes depend on load growth, generation …

### e41 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1(1), pending box [NPRR1288: Replace paragraph (1) above with the following upon system implementation] · text copy line 394 · heading above: 7.5.1 Nature and Timing
FLAG pending-box: | [NPRR1288: Replace paragraph (1) above with the following upon system implementation:] |
BEFORE: …nue Rights Overview, or sold in a previous auction. The CRR Auction also allows CRR Owners an opportunity to offer for sale CRRs that they hold. Each CRR Auction allows for the purchase of CRR products as described in paragraph (5) of Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, 
QUOTE: in one-month strips and allows for the reconfiguration of all CRR blocks that were previously awarded for the months covered by that CRR Auction.
AFTER:  | +========================================================================================================================================================================================================================================================================================================…

### e39 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.5.1, paragraph (2)(b) · text copy line 402 · heading above: 7.5.1 Nature and Timing

BEFORE: …utage Scheduler. Transmission system upgrades and changes must be accounted for in the CRR Network Model for CRR Auctions held after the month in which the element is placed into service. (a) ERCOT shall use Dynamic Ratings in the CRR Network Model as required under Section 3.10.8, Dynamic Ratings. 
QUOTE: (b) The CRR Network Model must use the peak Load conditions of the month or set of months being modeled.
AFTER:  (c) ERCOT's criteria for determining if an Outage should be in the CRR Network Model shall be in accordance with these Protocols and described in the Operating Guides. (3) ERCOT shall model bids and offers into the CRR Auction as flows based on the MW offer and defined source and sink. When the Sim…

### e40 · `ref-ercot-crr-training` · tier 2 · Congestion Revenue Rights (ERCOT training) (2020)
locator: ERCOT CRR training (2020), slide 132, Payment for CRRs Settled in Day-Ahead (Hedge Value) · text copy line 3010

BEFORE: …HV PRICE = Max (0, MAXRESPR sink - DASPP source ) Source CRR Sink HV PRICE = Max (0, MAXRESPR sink - MINRESPR source ) 131 Hedge Value Payment to CRR Owners Target Payment < Hedge Value CRR Owner receives Target Payment Hedge Value Target Payment Target Payment Payment for CRRs Settled in Day-Ahead 
QUOTE: Hedge Value < Target Payment CRR Owner receives Hedge Value or Derated Amount, whichever is greater
AFTER:  132 Day-Ahead Settlement of CRRs - Money Flow Day-Ahead Market Congestion Rent • Charges for Cleared DAM Energy Bids • Payments for Cleared DAM Energy Offers • Charges for Cleared DAM PTP Obligation Bids • Payments for Cleared DAM PTP Obligation Bids Payment due to CRR Account Holders (Target Payme…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e3, e35, e36): Know what you are paid. A PTP obligation bought in the CRR auction pays or charges the difference in Day-Ahead Settlement Point Prices between sink and source. [e2] An option can only pay; an obligation can pay or charge. [e3] So the expected value is the expected day-ahead sink-minus-source spread over the hours of the CRR, compared with the auction price. The Protocols treat a PTP Obligation acquired in the DAM differently: it is paid or charged on the Real-Time price difference. [e35] If ERCOT cannot run the DAM at all, PTP Obligations are settled on Real-Time price differences. [e36]
- **How it works #2** (cites e22, e38, e41, e23): Know what you buy. CRRs are auctioned in Time Of Use blocks with the same MW in every hour of the block: 5x16 (hours ending 0700-2200 on weekdays), 2x16 (the same hours on weekends and NERC holidays) and 7x8 (hours ending 0100-0600 and 2300-2400 every day). [e22] Since NPRR 1288 (approved November 2025), the IMM says participants buy CRRs only for individual months, even in long-term auctions. [e38] The saved Protocols edition (effective 2025-12-05) still carries the one-month-strip wording as a pending NPRR1288 box. [e41] ERCOT's 2020 training shows how a 7x24 bid in the monthly auction is tested against the three block prices weighted by their hours: (224x$2 + 128x$3 + 320x$8) / 672 = $5.048, so a $6 bid is awarded. [e23]
- **How it works #3** (cites e14, e13, e34, e16, e33): Spreads come from binding constraints. The IMM measures day-ahead congestion value as flow on each constraint times its shadow price. [e14] In 2025 day-ahead congestion rose 26%, led by the North zone (where ERCOT used heavy RUC to manage congestion) and the West zone (where transmission has lagged renewables and Permian load). [e13] The West is export constrained in the Panhandle and import constrained in the Permian Basin, and congestion within the West rose 27% from 2024 to 2025. [e34] Active GTCs rose to 26 in 2025 from 18 in 2021, and in 2025 ERCOT treated them as base-case stability constraints with a $5,251 per MW shadow price cap. [e16][e33]
- **How it works #4** (cites e20, e39, e7, e6): The auction price works the same way. ERCOT's CRR handbook says a CRR's clearing price equals its shadow price in the auction: for a PTP Obligation, the sum of binding constraint shadow prices times their shift factors; for a PTP Option, the same sum using only non-negative shift factors. [e20] The CRR Network Model uses the peak Load conditions of the month being modeled and must include outages expected to significantly affect transfer capability. [e39][e7] The Simultaneous Feasibility Test confirms the grid can support all awarded CRRs under normal conditions. [e6]
- **How it works #5** (cites e31, e29, e30, e19, e18, e5, e37): The auction sets supply. The auction sells only capacity not already allocated as PCRRs or sold in an earlier auction. [e31] PCRRs are a portion of available CRRs allocated to NOIEs with pre-September 1, 1999 ownership of, or long-term contracts for, specific Generation Resources. [e29] Their feasibility is tested on 100% of the month's expected topology, and infeasible nominations are cut pro rata by their impact on violated constraints. [e30] CRR Auction Capacity is 90% for the monthly auction and, in a long-term auction sequence, 70% in the first six-month window stepping down to 10% in the sixth. [e19][e18][e5] The IMM explains the step-down: congestion is harder to forecast far ahead, so selling only part of each path's rated capacity early reduces the risk that CRR payments exceed day-ahead congestion rent. [e37]
- **How it works #6** (cites e8, e15, e32, e9): Funding risk comes from outages and deration. ERCOT pays less than target only when day-ahead congestion rent falls short, often because unforeseen outages cut transfer capability between the auction and the DAM. [e8] The payment on a positively valued PTP Obligation that sinks at a Resource Node may be reduced because of directional network elements oversold in earlier auctions. [e15] In 2025 the DAM produced enough revenue to fund CRRs fully, but mandatory deration cut payments by $33 million and brought funding to about 99%; the IMM says derating when revenue is sufficient adds unnecessary risk for buyers. [e32] Any remaining shortfall is prorated across holders of positively valued CRRs; the last short payment was in November 2020. [e9]
- **How it works #7** (cites e24, e25, e26, e27, e28) FLAG number-not-in-quote: 2020: Credit sets how much you can bid. The auction enforces a credit constraint per Counter-Party, ACR = AOBLCR + AOPTCR − AOBLCRO: the credit requirement for obligation bids plus option bids, adjusted for obligation offers. [e24] For obligation bids the requirement draws on a path-specific DAM-based adder, the 99th percentile of the path's rolling DAM settled price over month-length windows (18 days for 5x16, 8 days for 2x16, 28 days for 7x8), and on the path's effective auction clearing price. [e25][e26] ERCOT's 2020 training summarizes credit use for obligation bids as volume times (bid price plus path-specific adders). [e27] Before the auction, ERCOT screens credit using bid volumes; if a Counter-Party's credit limit already exceeds that exposure, the limit is ignored while the auction is solved. [e28]
- **Formula #1** (cites e24, e25, e26) FLAG number-not-in-quote: 7.5, 5.3: Auction credit for a Counter-Party b (np-07 Section 7.5.5.3(3)): ACR_b = AOBLCR_b + AOPTCR_b − AOBLCRO_b. ACR is the Auction Credit Requirement; AOBLCR is the requirement for all PTP Obligation bids, AOPTCR for PTP Option bids, and AOBLCRO for PTP Obligation offers. [e24] Inside AOBLCR, the path-specific DAM-based adder A_ci99 is the 99th percentile of the rolling DAM settled price for the source/sink, and EACP is the path's effective auction clearing price. [e25][e26]
- **Formula #2** (cites e20): Clearing price of a CRR (ERCOT handbook): the sum over binding auction constraints of shadow price times the path's shift factor; for an option, only non-negative shift factors count. [e20]
- **Key facts #1** (cites e2, e35): - Auction-bought PTP obligations settle on the day-ahead sink-minus-source price difference; DAM-bought ones settle on the real-time difference. [e2][e35]
- **Key facts #2** (cites e22, e38, e41): - TOU blocks: 5x16, 2x16 and 7x8; the IMM says that since NPRR 1288 (approved November 2025) CRRs are sold as single months (the saved Protocols edition still shows this as a pending box). [e22][e38][e41]
- **Key facts #3** (cites e19, e5): - Auction capacity: 90% monthly; 70% down to 10% across the six long-term windows. [e19][e5]
- **Key facts #6** (cites e32): - 2025 deration cut CRR payments by $33 million even though the DAM fully funded CRRs. [e32]
- **Scenarios #3** (cites e22): - Decide the blocks. You bid 5x16, 2x16 and 7x8 separately, each with the same MW in every hour of the block. [e22]
- **Scenarios #4** (cites e14, e20): - Find the constraints between the two points. The IMM calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price. [e14] The auction prices the path the same way, as the sum of binding constraint shadow prices times shift factors. [e20]
- **Scenarios #5** (cites e13, e34, e16, e33): - Look at history and trend. Day-ahead congestion rose 26% in 2025, with the West zone a main driver; the Panhandle is export constrained, and congestion within the West rose 27% in 2025. [e13][e34] Active GTCs grew from 18 in 2021 to 26 in 2025, and in 2025 they carried the $5,251 per MW cap. [e16][e33]
- **Scenarios #6** (cites e39, e7, e8): - Check outages. The CRR model uses peak Load conditions and includes outages expected to affect transfer capability, but unforeseen outages between the auction and the DAM can reduce transmission capability and leave CRRs short-funded. [e39][e7][e8]
- **Scenarios #11** (cites e27, e25, e11): - Price in credit: each obligation bid uses credit of about volume times (bid price plus a path-specific adder based on the 99th percentile of the path's DAM prices), and CRR positions drove most of ERCOT's $6.9 billion of collateral in 2025. [e27][e25][e11]
- **Scenarios #13** (cites e3): - The option never charges you if the spread reverses, so its value is only the positive part of the hourly spread. [e3]
- **Scenarios #14** (cites e20): - Its clearing price counts only non-negative shift factors, so it is priced differently from the obligation on the same path. [e20]
- **Scenarios #15** (cites e5, e37): - Less capacity is on offer: only 70% to 10% of capacity depending on the window, because the IMM says long-dated congestion is harder to forecast. [e5][e37]
- **Scenarios #16** (cites e38, e41): - According to the IMM, you buy a single month, not a multi-month strip, under NPRR 1288. [e38] The saved Protocols edition still shows the one-month-strip rule as a pending box, so confirm implementation before relying on it. [e41]
- **Questions #8** (cites e5, e37): The long-term sequence sells 70% of capacity in the first six-month window and steps down to 10% in the sixth. [e5] The IMM explains that congestion forecasts become more uncertain further ahead, so ERCOT sells only part of each path's rated capacity in long-term auctions to reduce the risk of payments exceeding day-ahead congestion rent, and offers more in later auctions. [e37]
- **Questions #10** (cites e20, e39, e7, e8): ERCOT's handbook says the clearing price equals the product's shadow price in the auction, the sum of binding constraint shadow prices times shift factors. [e20] The auction model uses the month's peak Load conditions and expected outages, while the DAM sees the actual topology; unforeseen outages are a main reason the two differ. [e39][e7][e8] (Reasoning) So the gap between clearing price and realized value is a bet on which constraints bind and how hard.
- **Questions #12** (cites e15, e40, e32) FLAG number-not-in-quote: 2020: Positively valued obligations that sink at a Resource Node can be cut for directional elements oversold in earlier auctions. [e15] ERCOT's 2020 training says that when the target payment exceeds the hedge value, the owner receives the hedge value or the derated amount, whichever is greater. [e40] In 2025 this mandatory deration cut payments by $33 million even though the DAM fully funded CRRs, which the IMM calls unnecessary risk for buyers. [e32]
- **Questions #14** (cites e35): Then it is paid or charged on the Real-Time price difference, not the day-ahead difference. [e35] (Reasoning) That makes a DAM-bought PTP a bet on real-time congestion relative to the day-ahead price you paid, while an auction CRR is a bet on day-ahead congestion relative to the auction price.
- **Questions #16** (cites e24, e25, e27) FLAG number-not-in-quote: 2020: The auction credit requirement adds up obligation-bid, option-bid and obligation-offer requirements. [e24] For obligation bids the requirement uses a path-specific adder set at the 99th percentile of the path's DAM settled prices, so a path with a history of large spreads uses more credit per MW. [e25] ERCOT's 2020 training summarizes it as volume times (bid price plus path-specific adders). [e27]
- **Say it like this #1** (cites e21): (Guidance) A CRR is a bet on day-ahead congestion between two points, so I value it from the binding constraints between them, their likely shadow prices and the outages that might change them, block by block, then bid below that value to cover model, funding, deration and credit risk. As a hedge it locks in congestion at the purchase price; as an investment it pays off only if congestion rent beats that price. [e21]
- **Common confusion #1** (cites e2, e12, e35, e1): (Guidance) A PTP Obligation settled in the DAM pays on the Day-Ahead price difference, so it does not fully cover real-time congestion, which was about 7% higher than day-ahead in 2025. [e2][e12] A PTP Obligation bought in the DAM is a different product that settles on real-time prices. [e35] Also, a CRR is not a transmission reservation: it gives no right to move physical energy. [e1]
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

