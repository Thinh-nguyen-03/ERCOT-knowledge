# Audit packet: PTP Obligation (ptp-obligation)

kind product · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Point-to-Point (PTP) Obligation · text copy line 376 · heading above: 2.1 DEFINITIONS

BEFORE: …receive compensation and is evaluated in each CRR Auction and DAM as the positive power flows represented by the quantity of the CRR bid or offer (MW) on a flowgate (i.e., predefined directional network element or a predefined bundle of directional network elements). Point-to-Point (PTP) Obligation 
QUOTE: A type of CRR that entitles the holder to be charged or to receive compensation and is evaluated in each CRR Auction and DAM as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW).
AFTER:  Point-to-Point (PTP) Obligation with Links to an Option A type of CRR that entitles a Non-Opt-In Entity's (NOIE's) PTP Obligation bought in the DAM to be reflective of the NOIE's PTP Option. To qualify as a PTP Obligation of this type, the source and sink pairs on both the NOIE's PTP Obligation and…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6, PTP Obligation Bids, paragraph (1) · text copy line 750 · heading above: 4.4.6 PTP Obligation Bids

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.4.5 [RESERVED] 4.4.6 PTP Obligation Bids (1) 
QUOTE: A Point-to-Point (PTP) Obligation bid is a bid that specifies the source and sink, a range of hours, and a maximum price that the bidder is willing to pay ("Not-to-Exceed Price").
AFTER:  (2) PTP Obligations that are bought in the Day-Ahead Market (DAM) must be settled based on the applicable Real-Time Settlement Point Prices. (3) A PTP Obligation with Links to an Option is held to be reflective of the Non-Opt-In Entity's (NOIE's) PTP Option if the source and sink pairs on both the …

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6, paragraph (2) · text copy line 752 · heading above: 4.4.6 PTP Obligation Bids

BEFORE: …-------------------------------------------------------------------+ 4.4.5 [RESERVED] 4.4.6 PTP Obligation Bids (1) A Point-to-Point (PTP) Obligation bid is a bid that specifies the source and sink, a range of hours, and a maximum price that the bidder is willing to pay ("Not-to-Exceed Price"). (2) 
QUOTE: PTP Obligations that are bought in the Day-Ahead Market (DAM) must be settled based on the applicable Real-Time Settlement Point Prices.
AFTER:  (3) A PTP Obligation with Links to an Option is held to be reflective of the Non-Opt-In Entity's (NOIE's) PTP Option if the source and sink pairs on both the NOIE's PTP Obligation and the NOIE's PTP Option are the same, and the MWs of the NOIE's PTP Obligations are less than or equal to the number …

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.3, Settlement for PTP Obligations Bought in DAM, paragraph (1) · text copy line 3307 · heading above: 4.6.3 Settlement for PTP Obligations Bought in DAM

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.6.3 Settlement for PTP Obligations Bought in DAM (1) 
QUOTE: ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The charge or payment to each QSE for a given Operating Hour of its cleared PTP Obligation bids with each pair of source and sink Settlement Points is calculated as follows: DARTOBLAMT _(q, (j, k)) = DAOBLPR _((j, k)) ^(*) RTOBL _(q, (j, k)) Where: DAOBLPR _((j, k)) = DASPP _(k) - DASPP _(j) The ab…

### e5 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2) · text copy line 2001 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …d the source Settlement Point. The payment to each QSE for a given Operating Hour of its cleared PTP Obligation with links to an Option with each pair of source and sink Settlement Points is calculated as follows: RTOBLLOAMT _(q, (j, k)) = (-1) * MAX(0, RTOBLPR _((j, k))) * RTOBLLO _(q, (j, k)) (2) 
QUOTE: ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The payment or charge to each QSE for a given Operating Hour of its cleared PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k)) (3) In the event that ERCOT is unable to execute the DAM, E…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6.1, DAM Energy Bid Criteria, paragraph (3) · text copy line 1764 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: … The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. (4) 
QUOTE: DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party.
AFTER:  4.4.9.5.2 DAM Energy-Only Offer Validation (1) A valid DAM Energy-Only Offer Curve is an offer that ERCOT has determined meets the criteria listed in Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria. (2) ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging Sys…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section D, Point-to-Point Obligations · text copy line 4919

BEFORE: …articipants' 54 | 2025 State of the Market Report / / Day-Ahead Market Performance expectations of congestion. PTP obligations are a key part of day-ahead market activity because they allow participants to hedge or speculate on congestion between two locations in the dayahead and real-time markets. 
QUOTE: A PTP represents a scheduled flow from a source node to a sink node. Its purchase cost equals the product of the day-ahead price difference between those nodes and the flow volume in MWh. The participant realizes its value in real time when the position is liquidated based on the real-time price difference between the same nodes.
AFTER:  1. PTP Profitability The net value of the PTP reflects the change in congestion between the day-ahead and real-time markets. A PTP is profitable when the participant pays less to purchase it than it earns in real time. Figure 34 compares total day-ahead payments to acquire these products with total…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, PTP Profitability · text copy line 4976

BEFORE: …" 6T68 !D#" !D"" <,=C>?.,@DA?,B+. -.,*CC#a.D-./.AM. !A=AAC !A=#AC 6T66 6T69 6T6: ODP#**#"A4 !A=>?@ !A=AAC !A=A>D !%=AA% !A=@AA !A=>?? 6T6; !A=?#A !%=AA? /+MNONMP4RST8 9OMNONM98:8;<8 !C#" !C"" !%#" !%"" !A#" !A"" !#" !" ( F *+* ( ( + , J . / ( F *+* ( ( + , J . / ( F *+* ( ( + , J . / %"%C %"%D %"%# 
QUOTE: Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024.
AFTER:  This higher margin ended a multi-year trend of declining PTP profitability even as PTP bid volume continued to increase. 2025 State of the Market Report | 55 / / Day-Ahead Market Performance 2. PTP Bid Volume The volume of PTP bids39 has grown by 258% over the past decade, affecting both PTP profit…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, 2. PTP Bid Volume · text copy line 4988

BEFORE: …ore in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024. This higher margin ended a multi-year trend of declining PTP profitability even as PTP bid volume continued to increase. 2025 State of the Market Report | 55 / / Day-Ahead Market Performance 2. PTP Bid Volume 
QUOTE: The volume of PTP bids39 has grown by 258% over the past decade, affecting both PTP profitability and day-ahead market performance.
AFTER:  Higher bid volumes lead to clearing prices that more closely reflect real-time congestion, reducing the net value of awarded PTPs and limiting opportunities for profit. At the same time, the growing number of PTP bids has increased the complexity of the day-ahead market optimization. This makes it …

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-4: Implement a Point-to-Point Obligation Bid Fee · text copy line 9122

BEFORE: …bligation Bid Fee Point-to-point (PTP) obligations are financial instruments that allow market participants to take positions on congestion between the day-ahead and real-time markets. Market participants submit PTP bids into the day-ahead market, and the market optimization process evaluates them. 
QUOTE: Over the past decade, the day-ahead market has experienced numerous delays in solving and posting results. ERCOT has identified the large and growing volume of PTP obligation bids as a key contributor to these delays.
AFTER:  While computational and optimization improvements have reduced delays in recent years, the consistent year-on-year increase in PTP volume continues to risk delays in clearing the day-ahead market. These delays disrupt the market and create unnecessary risk for participants who rely on timely inform…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, 3. PTP Bid Fees · text copy line 5054

BEFORE: …head Market Performance ERCOT has sought to manage this situation by capping the volume of PTP bids each counterparty can submit. However, PTP traders can evade this cap by working across an arbitrary number of counterparties. 3. PTP Bid Fees Alternatively, we have recommended a fee-based approach. 
QUOTE: In Recommendation 2020-4, we recommend that ERCOT impose a small fee on PTP bids to discourage uncompetitive bids that are extremely unlikely to clear.
AFTER:  The fee should be small enough not to deter bids that have a reasonable probability of clearing and that therefore contribute liquidity to the day-ahead market and promote efficient price formation. ERCOT has responded to this recommendation and sought feedback on potential design options. The Cong…

## Statements to check

- **Definition #1** (cites e1, e2): A Point-to-Point (PTP) Obligation is a type of CRR that entitles the holder to be charged or to receive compensation, based on the power flows created by an injection at a source and a withdrawal at a sink. [e1] A PTP Obligation bid specifies the source and sink, a range of hours, and a maximum price the bidder will pay, the Not-to-Exceed Price. [e2]
- **How it works #1** (cites e2, e3, e4, e5): A QSE can buy PTP Obligations in the DAM by submitting such bids. [e2][e3] A cleared PTP Obligation is charged or paid the difference in DAM Settlement Point Prices between the sink and the source. [e4] It is then settled in real time: ERCOT pays or charges the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between sink and source. [e5][e3]
- **How it works #2** (cites e7): The IMM puts the economics in simple terms: the purchase cost is the day-ahead price difference times the flow volume in MWh, and its value is realized in real time when the position is liquidated at the real-time price difference between the same nodes. [e7]
- **How it works #3** (cites e6): DAM bidding has a guardrail: energy-only offers, energy bids and PTP Obligation bids may not be combined to create the net effect of one PTP between electrically similar Settlement Points. [e6]
- **ERCOT context #1** (cites e8, e9, e10): The IMM reports that PTPs remained profitable in 2025, receiving 10.9% more in real time than their day-ahead purchase cost, up from a 7.5% margin in 2024. [e8] PTP bid volume has grown 258% over a decade. [e9] ERCOT has identified that growing volume as a key contributor to day-ahead market delays in solving and posting results. [e10]
- **ERCOT context #2** (cites e11): The IMM recommends a small fee on PTP bids (Recommendation 2020-4) to discourage uncompetitive bids that are extremely unlikely to clear. [e11]
- **Key facts #1** (cites e1): - A PTP Obligation can produce a charge or a payment. [e1]
- **Key facts #2** (cites e4, e5): - A DAM-cleared PTP Obligation pays or charges the DAM sink-minus-source price difference, and is also settled on the real-time sink-minus-source difference. [e4][e5]
- **Key facts #3** (cites e8): - 2025: PTPs received 10.9% more in real time than their day-ahead purchase cost; 2024 margin was 7.5%. [e8]
- **Key facts #4** (cites e9): - PTP bid volume is up 258% over the past decade. [e9]
- **Key facts #5** (cites e11): - The IMM's Recommendation 2020-4 is a small fee on PTP bids. [e11]
- **Say it like this #1** (cites e7, e8, e10): A PTP Obligation is a day-ahead position between two points: you pay the day-ahead price spread and collect the real-time spread. [e7] It was profitable in 2025, and the growing number of bids is a key contributor to day-ahead delays. [e8][e10]
- **Common confusion #1** (cites e1, e2, e6): A PTP Obligation can lose money: it can produce a charge as well as a payment. [e1] Do not confuse it with a virtual: a PTP is a two-location spread, while energy-only offers and energy bids are separate DAM instruments that may not be combined to create the net effect of one PTP between electrically similar Settlement Points. [e2][e6]
- **Questions #2** (cites e4, e5, e7): The QSE is paid or charged the DAM Settlement Point Price difference between sink and source, and then paid or charged the real-time sink-minus-source difference. [e4][e5] The IMM describes the cost as the day-ahead price difference times the volume, with the value realized in real time at the real-time price difference. [e7]
- **Questions #4** (cites e9, e10, e11): Because PTP bid volume has grown a lot and ERCOT sees it as a key contributor to DAM delays, and the fee is meant to discourage uncompetitive bids that are extremely unlikely to clear. [e9][e10][e11]
- **Questions #6** (cites e8): In 2025, on average yes: PTPs received 10.9% more in real time than their day-ahead purchase cost. [e8]
- **Link to crr** (cites e1): is-a CRR (Congestion Revenue Right): A PTP Obligation is a type of CRR that is evaluated in each CRR Auction and in the DAM. [e1]
- **Link to dam** (cites e2, e4): part-of Day-Ahead Market (DAM): PTP Obligations are bid for and cleared in the DAM, then settled on the price difference between sink and source. [e2][e4]
- **Link to congestion** (cites e7): hedges Transmission Congestion: The IMM describes a PTP as a scheduled flow from a source node to a sink node, valued on the price difference between those nodes. [e7]
- **Link to dart-spread** (cites e4, e5, e7): related DART Spread: A DAM-bought PTP pays the day-ahead spread and earns the real-time spread, so its profit is the difference. [e4][e5][e7]
- **Link to virtual-bids** (cites e6): contrasts-with Virtuals (Energy-Only Offers & Bids): Energy-only offers and bids may not be combined to mimic a PTP between electrically similar points. [e6]
- **Link to settlement-point** (cites e2): related Settlement Point: Source and sink are Settlement Points. [e2]
