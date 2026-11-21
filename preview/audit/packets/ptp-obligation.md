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

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6, PTP Obligation Bids, paragraph (3) · text copy line 754 · heading above: 4.4.6 PTP Obligation Bids

BEFORE: …ligation bid is a bid that specifies the source and sink, a range of hours, and a maximum price that the bidder is willing to pay ("Not-to-Exceed Price"). (2) PTP Obligations that are bought in the Day-Ahead Market (DAM) must be settled based on the applicable Real-Time Settlement Point Prices. (3) 
QUOTE: A PTP Obligation with Links to an Option is held to be reflective of the Non-Opt-In Entity's (NOIE's) PTP Option if the source and sink pairs on both the NOIE's PTP Obligation and the NOIE's PTP Option are the same, and the MWs of the NOIE's PTP Obligations are less than or equal to the number of MWs of the NOIE's PTP Option. There shall be no payment for PTP Obligations with Links to an Option acquired in the DAM.
AFTER:  4.4.6.1 PTP Obligation Bid Criteria (1) A PTP Obligation bid must be submitted by a QSE and must include the following: (a) The name of the QSE submitting the PTP Obligation bid; (b) The source Settlement Point and the sink Settlement Point for the PTP Obligation or block of PTP Obligations being b…

### e13 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, paragraph (1) · text copy line 1997 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 7.9.2 Real-Time CRR Payments and Charges 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time (1) 
QUOTE: ERCOT shall pay the Qualified Scheduling Entity (QSE) of each cleared PTP Obligation with links to an Option the positive difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The payment to each QSE for a given Operating Hour of its cleared PTP Obligation with links to an Option with each pair of source and sink Settlement Points is calculated as follows: RTOBLLOAMT _(q, (j, k)) = (-1) * MAX(0, RTOBLPR _((j, k))) * RTOBLLO _(q, (j, k)) (2) ERCOT shall pay or charge the …

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.1, PTP Obligation Bid Criteria, paragraph (2) · text copy line 791 · heading above: 4.4.6.1 PTP Obligation Bid Criteria

BEFORE: …hour for the Not-to-Exceed Price. | +===============================================================================================================================+ +-------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: If the PTP Obligation bid is for more than one PTP Obligation (which is one MW for one hour), the block bid must: (a) Include the same number of PTP Obligations in each hour of the block; (b) Be for PTP Obligations that have the same source and sink Settlement Points; and (c) Be for contiguous hours.
AFTER:  (3) A PTP Obligation bid shall not contain a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points. (4) PTP Obligation bids shall not be submitted in combination with PTP Obligation bids or with DAM Energy-Only Offer Curves and DAM Energy Bids to create…

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.1, paragraphs (3) and (9) · text copy line 799 · heading above: 4.4.6.1 PTP Obligation Bid Criteria

BEFORE: … PTP Obligation bid is for more than one PTP Obligation (which is one MW for one hour), the block bid must: (a) Include the same number of PTP Obligations in each hour of the block; (b) Be for PTP Obligations that have the same source and sink Settlement Points; and (c) Be for contiguous hours. (3) 
QUOTE: A PTP Obligation bid shall not contain a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points.
AFTER:  (4) PTP Obligation bids shall not be submitted in combination with PTP Obligation bids or with DAM Energy-Only Offer Curves and DAM Energy Bids to create the net effect of a single PTP Obligation bid containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Sett…

### e16 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Electrically Similar Settlement Points · text copy line 775

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Resource Connectivity Node The Electrical Bus to which the terminal of a Resource is connected. Electrically Similar Settlement Points 
QUOTE: Two or more distinct Settlement Points that are either mapped to the same electrical location in a market model or are mapped to locations that are connected by a transmission element with a reactance of less than 0.0005 per unit.
AFTER:  Eligible Transmission Service Customer A Transmission and/or Distribution Service Provider (TDSP) (for all uses of its transmission system), or any electric utility, MOU, EC, power generation company, CR, REP, federal power marketing agency, exempt wholesale generator, Qualifying Facility (QF), Ind…

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.1, paragraph (9) · text copy line 830 · heading above: 4.4.6.1 PTP Obligation Bid Criteria

BEFORE: …identifier for each CRR being offered. (8) For PTP Obligations with Links to an Option, the CRR Account Holder for whom the PTP Obligations with Links to an Option are being submitted must be shown in the ERCOT CRR registration system as the owner of the CRRs being linked to the PTP Obligation. (9) 
QUOTE: The minimum amount for each PTP Obligation with Links to an Option is one-tenth of one MW. The minimum amount for each PTP Obligation bid is one MW.
AFTER:  4.4.6.2 PTP Obligation Bid Validation (1) A validated PTP Obligation bid is a bid that ERCOT has determined meets the criteria listed in Section 4.4.6.1, PTP Obligation Bid Criteria, with the exception of paragraphs (3), (4), (5) and (6). Bids that do not meet the criteria in paragraph (3) of Secti…

### e18 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.1, paragraph (5) (text in effect; an NPRR918 replacement is shown as pending in the same section) · text copy line 803 · heading above: 4.4.6.1 PTP Obligation Bid Criteria

BEFORE: …ith DAM Energy-Only Offer Curves and DAM Energy Bids to create the net effect of a single PTP Obligation bid containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party. (5) 
QUOTE: For each NOIE or QSE representing NOIEs that designated PTP Obligations with Links to an Option, the total of each hourly MW quantity designated to be settled in Real-Time as a PTP Option may not exceed the lesser of: (a) 110% of that NOIE's peak Load forecast for the Operating Day; or (b) 125% of the NOIE's hourly Load forecast for the Operating Day.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR918: Replace paragraph (5) above with the following upon system implementa…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.2, PTP Obligation Bid Validation, paragraph (1) (text in effect; an NPRR918 replacement is shown as pending) · text copy line 834 · heading above: 4.4.6.2 PTP Obligation Bid Validation

BEFORE: … shown in the ERCOT CRR registration system as the owner of the CRRs being linked to the PTP Obligation. (9) The minimum amount for each PTP Obligation with Links to an Option is one-tenth of one MW. The minimum amount for each PTP Obligation bid is one MW. 4.4.6.2 PTP Obligation Bid Validation (1) 
QUOTE: A validated PTP Obligation bid is a bid that ERCOT has determined meets the criteria listed in Section 4.4.6.1, PTP Obligation Bid Criteria, with the exception of paragraphs (3), (4), (5) and (6). Bids that do not meet the criteria in paragraph (3) of Section 4.4.6.1 will not be awarded in the DAM.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.2, paragraph (3) · text copy line 845 · heading above: 4.4.6.2 PTP Obligation Bid Validation

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------+ (2) ERCOT shall continuously display on the MIS Certified Area information that allows any QSE submitting a PTP Obligation bid to view its valid PTP Obligation bid. (3) 
QUOTE: As soon as practicable, ERCOT shall notify each QSE through the Messaging System of any of its PTP Obligation bids that are invalid. The QSE may correct and resubmit any invalid PTP Obligation bid within the appropriate market timeline.
AFTER:  4.4.6.3 PTP Obligations with Links to an Option DAM Award Eligibility (1) A bid for a PTP Obligation with Links to an Option will not be considered eligible for award for an Operating Hour if it sources at a Resource Node where a Generation Resource or Energy Storage Resource (ESR) has a COP Resour…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.3, paragraph (1) · text copy line 849 · heading above: 4.4.6.3 PTP Obligations with Links to an Option DAM Award Eligibility

BEFORE: …practicable, ERCOT shall notify each QSE through the Messaging System of any of its PTP Obligation bids that are invalid. The QSE may correct and resubmit any invalid PTP Obligation bid within the appropriate market timeline. 4.4.6.3 PTP Obligations with Links to an Option DAM Award Eligibility (1) 
QUOTE: A bid for a PTP Obligation with Links to an Option will not be considered eligible for award for an Operating Hour if it sources at a Resource Node where a Generation Resource or Energy Storage Resource (ESR) has a COP Resource Status of:
AFTER:  (a) OUT for an Operating Hour; or (b) OFF for an Operating Hour; and (i) The QSE representing the Resource has not submitted a valid Three-Part Supply Offer or Ancillary Service Offer to be considered by the DAM; and (ii) The QSE representing the Resource has not submitted a valid Energy Only Offer…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.6.3, paragraph (3) · text copy line 861 · heading above: 4.4.6.3 PTP Obligations with Links to an Option DAM Award Eligibility

BEFORE: …s associated with a Resource Node, ERCOT will consider a PTP Obligation with Links to an Option bid eligible for award unless all Generation Resources and ESRs associated with the Resource Node do not satisfy the COP Resource Status requirements in paragraph (1) above during the Operating Hour. (3) 
QUOTE: In order for ERCOT to award a bid for a PTP Obligation with Links to an Option under this section for an upcoming year, by October 1 of the prior year a NOIE must have provided ERCOT with an attestation that the Generation Resource or ESR for the Resource Node where the bid is sourced is owned or controlled by the NOIE, or has a contractual commitment for capacity and/or energy with the NOIE.
AFTER:  The attestation must be executed by an officer or executive with authority to bind the NOIE, and submitted to ERCOT. ERCOT shall rely exclusively on the attestation provided by a NOIE in determining eligibility for bid awards under this section. ERCOT shall issue a Market Notice by September 1 of e…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (12) · text copy line 2627 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …ent Statement. (11) Constraints can exist between a Resource's Resource Connectivity Node and its Resource Node, in which case the awarded quantity of energy may be inconsistent with the clearing price when the constraint between the Resource Connectivity Node and the Resource Node is binding. (12) 
QUOTE: PTP Obligation bids shall not be awarded where the DAM clearing price for the PTP Obligation is greater than the PTP Obligation bid price plus $0.01/MW per hour.
AFTER:  4.5.2 Communicating DAM Results (1) As soon as practicable, but no later than 1330 in the Day-Ahead, ERCOT shall notify the parties to each cleared DAM transaction (e.g., the buyer and the seller) of the results of the DAM as follows: (a) Awarded Resource-Specific Ancillary Service Offers, specifyi…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, paragraph (4)(D) (DAM Clearing Process, block bids) · text copy line 2573 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (D) 
QUOTE: Block DAM Energy Bids, DAM Energy-Only Offers, and PTP Obligation bids - blocks will not be cleared unless the entire time and/or quantity block can be awarded. Because quantity block bids and offers cannot set the Settlement Point Price, a quantity block bid or offer may clear in a manner inconsistent with the bid or offer price for that block.
AFTER:  (E) Combined Cycle Generation Resources - The DAM may commit a Combined Cycle Generation Resource in a time period that includes the last hour of the Operating Day only if that Combined Cycle Generation Resource can transition to a shutdown condition in the DAM Operating Day. (F) Energy Storage Res…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, Credit Requirement for DAM Bids and Offers, paragraph (6)(d)(i)-(ii) · text copy line 2074 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …ce is positive). If the Three-Part Supply Offer causes a credit increase (when the z^(th) percentile Settlement Point Price is negative), the increase in credit exposure will be the maximum credit exposure increase created by the individual Three-Part Supply Offers. (d) For PTP Obligation Bids: (i) 
QUOTE: That have a bid price greater than zero, the sum of the quantity of the bid multiplied by the bid price, plus the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid.
AFTER:  (ii) That have a bid price less than or equal to zero, the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid. (iii) Each tenth …

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(d)(ii) · text copy line 2076 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …he sum of the quantity of the bid multiplied by the bid price, plus the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid. (ii) 
QUOTE: That have a bid price less than or equal to zero, the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid.
AFTER:  (iii) Each tenth of a MW quantity (0.1 MW) of an expiring CRR for a Counter-Party can provide credit reduction for only one-tenth of a MW (0.1 MW) of a PTP Obligation bid for that Counter-Party. (A) The QSE must submit the PTP Obligation bid at the same source and sink pair for the same hour, for t…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(d)(iii) · text copy line 2078 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …of the bid. (ii) That have a bid price less than or equal to zero, the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid. (iii) 
QUOTE: Each tenth of a MW quantity (0.1 MW) of an expiring CRR for a Counter-Party can provide credit reduction for only one-tenth of a MW (0.1 MW) of a PTP Obligation bid for that Counter-Party.
AFTER:  (A) The QSE must submit the PTP Obligation bid at the same source and sink pair for the same hour, for the same operating date where the QSE submitting the PTP Obligation bid is represented by the same Counter-Party as the CRR Account Holder that is the owner of record for an expiring CRR, or group…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (3) · text copy line 1921 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …accepted DAM bid and offers of the Counter-Party's other QSEs. (2) DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party's credit limit for DAM participation. (3) 
QUOTE: ERCOT shall reject the QSE's individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party's credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable.
AFTER:  (4) The QSE may revise and resubmit such rejected bids and offers described in item (3) above, provided that the resubmitted bids and offers are valid and within the Counter-Party's credit limit for DAM participation adjusted for all accepted DAM bids and offers of the Counter-Party's QSE's limit a…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.3, variable table, DAOBLPR · text copy line 3322 · heading above: 4.6.3 Settlement for PTP Obligations Bought in DAM

BEFORE: …RTOBLAMT _(q, (j, k)) $ Day-Ahead Real-Time Obligation Amount per QSE per pair of source and sinkThe charge or payment to QSE q for a PTP Obligation bid cleared in the DAM with the source j and the sink k, for the hour. DAOBLPR _((j, k)) $/MWh Day-Ahead Obligation Price per pair of source and sink
QUOTE: The DAM clearing price of a PTP Obligation bid with the source j and the sink k, for the hour.
AFTER:  DASPP _(j) $/MWh Day-Ahead Settlement Point Price at sourceThe DAM Settlement Point Price at the source Settlement Point j for the hour. DASPP _(k) $/MWh Day-Ahead Settlement Point Price at sinkThe DAM Settlement Point Price at the sink Settlement Point k for the hour. RTOBL _(q, (j, k)) MW Real-…

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.3, paragraph (1), formula · text copy line 3309 · heading above: 4.6.3 Settlement for PTP Obligations Bought in DAM

BEFORE: …tion bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point. The charge or payment to each QSE for a given Operating Hour of its cleared PTP Obligation bids with each pair of source and sink Settlement Points is calculated as follows: 
QUOTE: DARTOBLAMT _(q, (j, k)) = DAOBLPR _((j, k)) ^(*) RTOBL _(q, (j, k))
AFTER:  Where: DAOBLPR _((j, k)) = DASPP _(k) - DASPP _(j) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e31 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, paragraph (2), formula · text copy line 2003 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point. The payment or charge to each QSE for a given Operating Hour of its cleared PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: 
QUOTE: RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k))
AFTER:  (3) In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point. The payment or charge to each CRR Owner for a given Op…

### e32 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, paragraph (3), definition of RTOBLPR · text copy line 2011 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …nk Settlement Point and the source Settlement Point. The payment or charge to each CRR Owner for a given Operating Hour of its PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: NDRTOBLAMT _(o, (j, k)) = (-1) * RTOBLPR _((j, k)) * DAOBL _(o, (j, k)) Where: 
QUOTE: RTOBLPR _((j, k)) = [](RTSPP _(k, i) - RTSPP _(j, i)) / 4
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e33 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, variable table, RTOBLPR · text copy line 2024 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: …BLAMT _(o, (j, k)) $ No DAM Real-Time Obligation Amount per CRR Owner per pair of source and sink-The payment or charge to CRR Owner o for its PTP Obligations with the source j and the sink k settled in Real-Time when ERCOT is unable to execute the DAM, for the hour. RTOBLPR _((j, k)) $/MW per hour 
QUOTE: Real-Time Obligation Price-The Real-Time price of the PTP Obligation, for the hour.
AFTER:  RTSPP _(j, i) $/MWh Real-Time Settlement Point Price at source per interval-The Real-Time Settlement Point Price at the source j for the 15-minute Settlement Interval i. RTSPP _(k, i) $/MWh Real-Time Settlement Point Price at sink per interval-The Real-Time Settlement Point Price at the sink k for …

### e34 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.2.1, paragraph (3) · text copy line 2005 · heading above: 7.9.2.1 Payments and Charges for PTP Obligations Settled in Real-Time

BEFORE: … sink Settlement Point and the source Settlement Point. The payment or charge to each QSE for a given Operating Hour of its cleared PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k)) (3) 
QUOTE: In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The payment or charge to each CRR Owner for a given Operating Hour of its PTP Obligations with each pair of source and sink Settlement Points is calculated as follows: NDRTOBLAMT _(o, (j, k)) = (-1) * RTOBLPR _((j, k)) * DAOBL _(o, (j, k)) Where: RTOBLPR _((j, k)) = [](RTSPP _(k, i) - RTSPP _(j, i)…

### e35 · `ercot-crr-handbook` · tier 2 · CRR Market User Interface Handbook v4.3
locator: Section 2.6, CRR Hedge Types (Obligations and Options) · text copy line 617

BEFORE: …------------------------------------------------------+ | MW | MW amount, per hour, measured to one-tenth of a MW. | +----------------+-------------------------------------------------------------------------------------------------------------------------+ CRR Hedge Types (Obligations and Options) 
QUOTE: A PTP Obligation allows negative revenue values, meaning that it is possible for an AH to owe ERCOT money depending on the results in an applicable DAM.
AFTER:  A PTP Option, on the other hand, does not allow negative revenue values and therefore does not have the same DAM payout risk. For example, settlement in the DAM - for a PTP Obligation is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] - for a PTP Option is: Hourly rev…

### e36 · `ercot-crr-handbook` · tier 2 · CRR Market User Interface Handbook v4.3
locator: Section 2.6, CRR Hedge Types (Obligations and Options) · text copy line 619

BEFORE: …-------------------------------------------------------------------------------------------------------+ CRR Hedge Types (Obligations and Options) A PTP Obligation allows negative revenue values, meaning that it is possible for an AH to owe ERCOT money depending on the results in an applicable DAM. 
QUOTE: A PTP Option, on the other hand, does not allow negative revenue values and therefore does not have the same DAM payout risk.
AFTER:  For example, settlement in the DAM - for a PTP Obligation is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] - for a PTP Option is: Hourly revenue to CRR holder = MWh Amount_(CRR) x [LMP_(sink) - LMP_(source)] if [LMP_(sink) - LMP_(source)] ≥ 0 = 0 if [LMP_(sink) - LM…

### e37 · `ref-ercot-crr-training` · tier 2 · Congestion Revenue Rights (ERCOT training) (2020)
locator: Slide 29, Day Ahead Market PTP Obligations · text copy line 532

BEFORE: …es Difference Price Separation between two Settlement Points Hour 27 Day Ahead Market PTP Obligations As a Financial Investment ... DAM PTP Obligations may also be purchased on a speculative basis: Real-time value > Purchase Price 28 Day Ahead Market PTP Obligations Day-Ahead Market PTP Obligations 
QUOTE: • Purchased at DAM price spread • Settled at Real-Time price spread
AFTER:  Sink B Source A PTP Obligation Only QSEs may participate in the Day-Ahead Market 29 Day Ahead Market PTP Obligations Qualified Scheduling Entity Registration and qualification: • QSE Application and Standard Form Agreement • Provide bank account information • Demonstrate the capability to perform t…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 77 (OCR), Figure 34: Point-to-Point Obligation Charges and Revenues 2021-2025 ($ Millions), Real-Time Revenue row · ocr copy line 3360, OCR page 77 · heading above: 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5

BEFORE: …l revenue PTP holders received in the real-time market over the last three years. Figure 34: Point-to-Point Obligation Charges and Revenues 2021-2025 $500 > 2021 2022-2023 2024-2025 || m@ DA PTP Charge & $450 $ Millions BRT PTPR E Day-Ahead Charge $1,113. $1,798 $1,613 $1,674 $1,956 evenue A $400 | 
QUOTE: Real-Time Revenue $1,563 $2,162 $1,866 $1,799 $2,169
AFTER:  5 $350 s vo & $300 5 $250 S 2 $200 5 =| $150 '3 ® $100 £ = $50 é $0 JFMAMJJASOND)J FMAMJJASOND/IJ FMAMJJASOND 2023 2024 2025 Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024. This higher…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 77 (OCR), Figure 34, Day-Ahead Charge row · ocr copy line 3359, OCR page 77 · heading above: 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5

BEFORE: …compares total day-ahead payments to acquire these products with total revenue PTP holders received in the real-time market over the last three years. Figure 34: Point-to-Point Obligation Charges and Revenues 2021-2025 $500 > 2021 2022-2023 2024-2025 || m@ DA PTP Charge & $450 $ Millions BRT PTPR E 
QUOTE: Day-Ahead Charge $1,113. $1,798 $1,613 $1,674 $1,956
AFTER:  evenue A $400 | Real-Time Revenue $1,563 $2,162 $1,866 $1,799 $2,169 5 $350 s vo & $300 5 $250 S 2 $200 5 =| $150 '3 ® $100 £ = $50 é $0 JFMAMJJASOND)J FMAMJJASOND/IJ FMAMJJASOND 2023 2024 2025 Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-a…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 78 (OCR), Day-Ahead Market Performance, 2. PTP Bid Volume · text copy line 4989

BEFORE: …nd of declining PTP profitability even as PTP bid volume continued to increase. 2025 State of the Market Report | 55 / / Day-Ahead Market Performance 2. PTP Bid Volume The volume of PTP bids39 has grown by 258% over the past decade, affecting both PTP profitability and day-ahead market performance. 
QUOTE: Higher bid volumes lead to clearing prices that more closely reflect real-time congestion, reducing the net value of awarded PTPs and limiting opportunities for profit.
AFTER:  At the same time, the growing number of PTP bids has increased the complexity of the day-ahead market optimization. This makes it more difficult for ERCOT to produce and publish market results within the timeline required by protocol. Many of these PTP bids are unlikely to clear because their price…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 78 (OCR), Day-Ahead Market Performance, 2. PTP Bid Volume · text copy line 5034

BEFORE: …6>Lb1VPb-8:-#!#" "!! #! &! "! ! ! !"#AB#&D(F*+FI-.#FLM1F2BP45D-.5*&6 MT#"-8#FLM1F292F:5;<=&.#"T-46F>?@@@6A #&! #!"D #!"( #!") #!"* #!#! #!#" #!## #!#A #!#% #!#& ERCOT has improved the day-ahead market optimization process in recent years, reducing solve times and the frequency of late publications. 
QUOTE: There were three late DAM publications in 2025, up from only one in 2024, but still few enough that they are not an immediate concern.
AFTER:  However, if PTP bid volume continues to grow, it will remain a concern whether improvements in optimization processes and computing capacity can keep pace. 39 This volume is the total number of hourly PTP bid-intervals, including obligations linked to CRR options 56 | 2025 State of the Market Repor…

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 79 (OCR), Day-Ahead Market Performance · text copy line 5050

BEFORE: …es to grow, it will remain a concern whether improvements in optimization processes and computing capacity can keep pace. 39 This volume is the total number of hourly PTP bid-intervals, including obligations linked to CRR options 56 | 2025 State of the Market Report / / Day-Ahead Market Performance 
QUOTE: ERCOT has sought to manage this situation by capping the volume of PTP bids each counterparty can submit. However, PTP traders can evade this cap by working across an arbitrary number of counterparties.
AFTER:  3. PTP Bid Fees Alternatively, we have recommended a fee-based approach. In Recommendation 2020-4, we recommend that ERCOT impose a small fee on PTP bids to discourage uncompetitive bids that are extremely unlikely to clear. The fee should be small enough not to deter bids that have a reasonable pr…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 79 (OCR), Day-Ahead Market Performance, 3. PTP Bid Fees · text copy line 5060

BEFORE: …o clear. The fee should be small enough not to deter bids that have a reasonable probability of clearing and that therefore contribute liquidity to the day-ahead market and promote efficient price formation. ERCOT has responded to this recommendation and sought feedback on potential design options. 
QUOTE: The Congestion Management Working Group (CMWG) is considering two options. The first would place a fee on all PTP obligation bids, while the second would charge a fee only on unawarded PTP bids that do not meet certain threshold criteria.
AFTER: 40 These criteria would include both absolute clearing price thresholds and relative thresholds, i.e., a fraction or multiple deviation of the clearing price. Work on the fee and threshold criteria is ongoing. We have updated Recommendation 2020-4 to support this approach. 40 https://www.ercot.com/f…

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 79 (OCR), Day-Ahead Market Performance, 3. PTP Bid Fees · text copy line 5056

BEFORE: …an evade this cap by working across an arbitrary number of counterparties. 3. PTP Bid Fees Alternatively, we have recommended a fee-based approach. In Recommendation 2020-4, we recommend that ERCOT impose a small fee on PTP bids to discourage uncompetitive bids that are extremely unlikely to clear. 
QUOTE: The fee should be small enough not to deter bids that have a reasonable probability of clearing and that therefore contribute liquidity to the day-ahead market and promote efficient price formation.
AFTER:  ERCOT has responded to this recommendation and sought feedback on potential design options. The Congestion Management Working Group (CMWG) is considering two options. The first would place a fee on all PTP obligation bids, while the second would charge a fee only on unawarded PTP bids that do not m…

### e45 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 80 (OCR), Day-Ahead Market Performance, PTP profitability (2024 report) · text copy line 5084

BEFORE: … the PTP is profitable for the participant. Figure 33 compares the total day-ahead payments made to acquire these products with the total amount of revenue received by PTP holders in the real-time market over the last three years. Figure 33: Point-to-Point Obligation Charges and Revenues, 2020-2024 
QUOTE: Figure 33 shows that PTPs remained profitable in 2024, paying 7.8% more in real-time than their day-ahead purchase cost.
AFTER:  However, the profit margin was about half of what it was in 2023, and the total real-time value of PTPs fell for the second straight year. A key reason for declining profitability is the sharp increase in competition to procure PTPs, as observed via PTP bid volumes that are shown in Figure 34. 42 |…

### e46 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 71 (OCR), Day-Ahead Market Performance, PTP obligations as hedges (2023 report) · ocr copy line 3089, OCR page 71 · heading above: 3.500 Responsive Reserves = Market Procured

BEFORE: …tions. Figure 23: Volume of Day-Ahead Market Activity by Month 80 GagEnergy Only Awards G5Three Part Awards @@=Day-Ahead Purchase 70 e@eeReal-Time Load @@°RT Load Hedged - CP = Q 60 ve : s 50 = Zz 40 iG = zz 30 Z ol A ir 3. 20 oJ i=) 10 0 J|F|M|A|M|J{|J/A|S;/O|N|D/J|F|M;/A|M|J/J|A|S|O|N|D 2022 2023 
QUOTE: PTP obligations are financial transactions purchased in the day-ahead market. Although PTP obligations do not themselves involve the direct supply of energy, a PTP obligation allows a participant to, in effect, buy the network flow from one location to another. When coupled with a self-committed generating resource, the PTP obligation allows a participant to serve its load while avoiding the associated real-time exposure.
AFTER:  PTP obligations are also scheduled by financial participants seeking to arbitrage locational congestion differences between the day- ahead and real-time markets. PTP volumes have grown substantially in recent years and have caused day-ahead market performance issues related to ERCOT's ability to pu…

### e47 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 74 (OCR), Day-Ahead Market Performance, C. Point-to-Point Obligations (2023 report) · text copy line 3378

BEFORE: …ead Market Performance accrue value in real-time based on the difference in prices between two locations caused by congestion costs. CRRs are acquired via monthly and annual auctions and allocations, and they accrue value to their owner based on locational price differences in the day-ahead market. 
QUOTE: A participant that owns a CRR can use its CRR proceeds from the day-ahead market to buy a PTP obligation between the same two points to transfer its hedge to real-time.
AFTER:  CRRs are more fully described in Section V. Because PTP obligations represent such a substantial portion of the transactions in the day-ahead market, this subsection summarizes the quantities and profitability of PTP obligations. The first analysis of this subsection, shown in Figure 26, compares t…

### e48 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, paragraph (5) (DAM Clearing Process; text in effect refers to CRRs) · text copy line 2596 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …Ancillary Service Quantities will first be used to meet the ASDCs, and the remaining Ancillary Service needs are met from Ancillary Service Offers, as long as the costs do not exceed the ASDC value. ERCOT may not buy more of one Ancillary Service in place of the quantity of a different service. (5) 
QUOTE: ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone.
AFTER:  The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions. The Private Use Network Load distribution factors are based on an estimated Load value considering historical …

## Statements to check

- **Definition #1** (cites e1, e2): A Point-to-Point (PTP) Obligation is a type of CRR that entitles the holder to be charged or to receive compensation, based on the power flows created by an injection at a source and a withdrawal at a sink. [e1] A PTP Obligation bid specifies the source and sink, a range of hours, and a maximum price the bidder will pay, the Not-to-Exceed Price. [e2]
- **How it works #1** (cites e2, e3, e14, e17) FLAG number-not-in-quote: 4.4, 6.1: A QSE buys PTP Obligations in the DAM by submitting bids. [e2][e3] A bid must come from a QSE and, per Section 4.4.6.1, names the source and sink Settlement Points, the first and last hour, the MW quantity and the Not-to-Exceed Price in dollars per MW per hour. A block bid for more than one PTP Obligation (one MW for one hour) must have the same MW in each hour, the same source and sink, and contiguous hours. [e14] The minimum amount for each PTP Obligation bid is one MW. [e17]
- **How it works #2** (cites e23, e24, e48): Clearing: ERCOT does not award a PTP Obligation bid where the DAM clearing price for the PTP Obligation is greater than the bid price plus $0.01/MW per hour. [e23] Block bids are all-or-nothing, so a block can clear at a price inconsistent with its bid price because quantity blocks cannot set the Settlement Point Price. [e24] A load zone can be a source or sink; ERCOT spreads Load Zone source and sink quantities across the energized power flow buses modeled with Load in that zone using Load distribution factors (the text in effect speaks of CRRs generally). [e48]
- **How it works #3** (cites e4, e29, e30, e5, e3, e31, e37): Settlement has two legs. First the DAM leg: ERCOT pays or charges a QSE for a cleared PTP Obligation bid the difference in DAM Settlement Point Prices between sink and source. [e4] The Day-Ahead Obligation Price in the formula is the DAM clearing price of the PTP Obligation bid for that source and sink and hour, and the DAM amount is that price times the MW. [e29][e30] Second the real-time leg: ERCOT pays or charges the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between sink and source. [e5][e3] The real-time amount is the Real-Time Obligation Price times the MW, multiplied by (-1). [e31] The ERCOT training deck summarises it as purchased at the DAM price spread and settled at the Real-Time price spread. [e37]
- **How it works #4** (cites e7, e31): The IMM's plain statement of the economics: the purchase cost is the day-ahead price difference times the flow volume in MWh, and its value is realized in real time when the position is liquidated at the real-time price difference between the same nodes. [e7] Because the real-time leg carries a (-1) factor in the Protocol formula while the IMM says the holder realizes the real-time spread, the two legs net to the real-time spread less the day-ahead spread; the sign convention of the "pay or charge" wording is not stated in so many words in the Protocols. [e31][e7]
- **Formula #1** (cites e30, e4) FLAG number-not-in-quote: 4.6: Day-ahead leg (Protocol Section 4.6.3): the DAM amount for a QSE, source j and sink k for the hour is DAOBLPR times RTOBL, with DAOBLPR being the DAM Settlement Point Price at the sink minus the DAM Settlement Point Price at the source. [e30][e4] RTOBL is the total MW of the QSE's PTP Obligation bids cleared in the DAM and settled in real time for that pair and hour, and the net hourly total for a QSE is the sum over all its source and sink pairs. [e30]
- **Formula #2** (cites e31, e33, e32) FLAG number-not-in-quote: 7.9, 2.1: Real-time leg (Protocol Section 7.9.2.1): RTOBLAMT = (-1) * RTOBLPR * RTOBL, where RTOBLPR is the Real-Time Obligation Price for the hour. [e31][e33] RTOBLPR is built from the sink minus source Real-Time Settlement Point Prices of the 15-minute Settlement Intervals i in the hour, divided by 4 (that is, the average of the four 15-minute spreads). [e32]
- **ERCOT context #1** (cites e8, e39, e38, e45) FLAG number-not-in-quote: 2021: The IMM reports that PTPs remained profitable in 2025, receiving 10.9% more in real time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024, which ended a multi-year trend of declining profitability. [e8] The IMM's Figure 34 (OCR, in $ millions, years 2021 to 2025 in order) shows 2025 day-ahead charges of $1,956 and real-time revenue of $2,169. [e39][e38] The IMM's 2024 report gave the 2024 margin as 7.8% (see Open items). [e45]
- **ERCOT context #2** (cites e40, e9, e10, e41, e42): The IMM says higher bid volumes lead to clearing prices that more closely reflect real-time congestion, which reduces the net value of awarded PTPs and limits profit. [e40] PTP bid volume has grown 258% over the past decade (IMM 2025). [e9] ERCOT has identified that volume as a key contributor to day-ahead delays in solving and posting results. [e10] In 2025 there were three late DAM publications, up from one in 2024, which the IMM does not regard as an immediate concern. [e41] ERCOT has tried to manage volume by capping the PTP bids each counterparty can submit, and the IMM says traders can evade the cap by working across many counterparties. [e42]
- **ERCOT context #3** (cites e11, e44, e43) FLAG number-not-in-quote: 2025: The IMM recommends a small fee on PTP bids (Recommendation 2020-4) to discourage uncompetitive bids that are extremely unlikely to clear, small enough not to deter bids with a reasonable chance of clearing. [e11][e44] In its 2025 report the IMM says the Congestion Management Working Group (CMWG) is considering two options: a fee on all PTP obligation bids, or a fee only on unawarded bids that fail threshold criteria. [e43]
- **ERCOT context #4** (cites e46, e47) FLAG number-not-in-quote: 2023: Who uses PTPs: the IMM's 2023 report says a PTP lets a participant buy the network flow between two locations, and combined with a self-committed generator it lets the participant serve load while avoiding real-time exposure. [e46] A CRR owner can use its CRR proceeds from the DAM to buy a PTP between the same two points to carry its hedge into real time. [e47]
- **ERCOT context #5** (cites e12, e13, e17, e18): **PTP Obligations with Links to an Option (NOIEs).** A PTP Obligation with Links to an Option is reflective of a NOIE's PTP Option if the source and sink pairs of the obligation and the option are the same and the obligation MW do not exceed the option MW; no payment is made for such obligations acquired in the DAM. [e12] They are settled as if they were a PTP Option. [e13] In real time ERCOT pays the QSE only the positive difference between sink and source Real-Time Settlement Point Prices for them. [e13] The minimum amount for each is one-tenth of one MW. [e17] The hourly MW designated to settle as a PTP Option may not exceed the lesser of 110% of the NOIE's peak Load forecast for the Operating Day or 125% of its hourly Load forecast (current text; NPRR918 replacement wording is shown as pending). [e18]
- **ERCOT context #6** (cites e21, e22): Award eligibility: such a bid is ineligible for an Operating Hour if it sources at a Resource Node where a Generation Resource or ESR has a COP Resource Status of OUT, or OFF without the valid offers listed in the Protocol. [e21] For an upcoming year, the NOIE must have given ERCOT by October 1 of the prior year an attestation that the Resource is owned or controlled by the NOIE or has a contractual commitment with it. [e22]
- **ERCOT context #7** (cites e19, e15, e16, e20): **Bid validation and credit.** A validated bid meets the Section 4.4.6.1 criteria except paragraphs (3), (4), (5) and (6), and bids that fail paragraph (3), the ban on electrically similar source and sink points, will not be awarded. [e19][e15] Electrically Similar Settlement Points are mapped to the same electrical location or connected by a transmission element with reactance under 0.0005 per unit. [e16] ERCOT notifies the QSE of invalid bids and the QSE may correct and resubmit within the market timeline. [e20]
- **ERCOT context #8** (cites e28, e25, e26, e27): DAM credit: ERCOT rejects individual bids whose credit exposure exceeds the Counter-Party's DAM credit limit. [e28] For a PTP Obligation bid with a price above zero, exposure is quantity times bid price plus the u-th percentile of the hourly positive source-minus-sink real-time price difference over the previous 30 days times quantity; for a bid price at or below zero, only the percentile term applies. [e25][e26] Expiring CRRs can reduce exposure, 0.1 MW of expiring CRR for 0.1 MW of PTP bid. [e27]
- **Key facts #1** (cites e1, e35, e36): - A PTP Obligation can produce a charge or a payment; the CRR Handbook says a holder may owe ERCOT money, unlike a PTP Option. [e1][e35][e36]
- **Key facts #2** (cites e30, e31, e32): - DAM leg: sink minus source DAM Settlement Point Price times MW. Real-time leg: (-1) times the average of the four 15-minute sink-minus-source real-time spreads times MW. [e30][e31][e32]
- **Key facts #3** (cites e17) FLAG number-not-in-quote: 1 MW, 0.1 MW: - Minimum PTP Obligation bid is 1 MW; with Links to an Option it is 0.1 MW. [e17]
- **Key facts #4** (cites e23): - Bids are not awarded where the clearing price exceeds the bid price plus $0.01/MW per hour. [e23]
- **Key facts #5** (cites e8): - 2025: PTPs received 10.9% more in real time than their day-ahead cost; 2024 margin 7.5% per the 2025 report. [e8]
- **Key facts #6** (cites e9) FLAG number-not-in-quote: 2025: - PTP bid volume up 258% over the past decade (IMM 2025). [e9]
- **Key facts #7** (cites e11, e43) FLAG number-not-in-quote: 2025: - The IMM's Recommendation 2020-4 is a small fee on PTP bids; CMWG options were under discussion in the 2025 report. [e11][e43]
- **Example #1** (cites e7) FLAG number-not-in-quote: 10 MW, $4, $40,, $7, $70,, $30, $2, $20: Suppose a QSE buys 10 MW for one hour from A to B and the DAM clears the spread at $4. By the IMM's description the cost is $4 times 10 MWh, or $40, and if the average real-time spread comes out at $7 the position is liquidated for $70, a $30 gain. If real time came out at $2 it would lose $20. [e7] (Illustrative numbers.)
- **Say it like this #1** (cites e7, e37, e8, e10): A PTP Obligation is a day-ahead position between two points: you pay the day-ahead price spread and collect the real-time spread, so you are really trading whether congestion between the points is larger in real time than the day-ahead market priced it. [e7][e37] It was profitable in 2025 in aggregate, and the growing number of bids is a key contributor to day-ahead delays. [e8][e10]
- **Common confusion #1** (cites e1, e35, e36, e2, e6, e12, e13, e47): A PTP Obligation can lose money: it can produce a charge as well as a payment, whereas a PTP Option does not allow negative revenue. [e1][e35][e36] Do not confuse it with a virtual: a PTP is a two-location spread, while energy-only offers and energy bids are separate DAM instruments that may not be combined to create the net effect of one PTP between electrically similar Settlement Points. [e2][e6] A PTP Obligation with Links to an Option is modeled as an obligation but settles like an option. [e12][e13] A PTP Obligation bought in the DAM is not the same as a CRR bought in an auction, though a CRR owner can use CRR proceeds to buy a PTP on the same path. [e47]
- **Questions #2** (cites e4, e5, e7): In two legs. The QSE is paid or charged the DAM sink-minus-source price difference, and then paid or charged the real-time sink-minus-source difference. [e4][e5] The IMM describes the cost as the day-ahead price difference times the volume, with value realized in real time at the real-time difference. [e7]
- **Questions #4** (cites e9, e10, e11, e42): Because PTP bid volume has grown a lot and ERCOT sees it as a key contributor to DAM delays, and the fee is meant to discourage uncompetitive bids that are extremely unlikely to clear. [e9][e10][e11] The IMM says the per-counterparty volume cap can be evaded across counterparties. [e42]
- **Questions #6** (cites e40, e8): The IMM says higher bid volumes make day-ahead clearing prices reflect real-time congestion more closely, which reduces the net value of awarded PTPs. [e40] Profit still rose to 10.9% in 2025 from 7.5% in 2024, ending the multi-year decline. [e8]
- **Questions #8** (cites e34): PTP Obligation owners are paid or charged based on the real-time sink-minus-source price difference, so the day-ahead leg drops out. [e34]
- **Questions #10** (cites e35, e36): An obligation can produce a charge, so the holder may owe ERCOT money, while an option does not allow negative revenue. [e35][e36]
- **Questions #12** (cites e23, e24): It is not awarded if the clearing price exceeds its bid price plus $0.01/MW per hour, and a block bid clears only if the whole block can be awarded. [e23][e24]
- **Questions #14** (cites e25, e26, e27, e28): Each PTP bid adds credit exposure that must fit within the Counter-Party's DAM credit limit, otherwise ERCOT rejects it. The exposure rises with bid price and with the 30-day historical positive source-minus-sink real-time spread, and expiring CRRs on the same path reduce it. [e25][e26][e27][e28]
- **Scenarios #2** (cites e47): - The IMM says a CRR owner can use its CRR proceeds from the DAM to buy a PTP between the same two points, carrying the hedge into real time. [e47]
- **Scenarios #3** (cites e27): - The bid can be offset against expiring CRRs for credit, up to the CRR quantity on the same source and sink and hour. [e27]
- **Scenarios #5** (cites e12, e18): - Source and sink must match the option, MW must not exceed the option MW, and the bid is capped at the lesser of 110% of peak Load forecast or 125% of hourly Load forecast. [e12][e18]
- **Scenarios #6** (cites e21, e22): - The Resource at the source must meet the COP status test and the NOIE must have filed its attestation by October 1 of the prior year. [e21][e22]
- **Link to crr** (cites e1): is-a CRR (Congestion Revenue Right): A PTP Obligation is a type of CRR that is evaluated in each CRR Auction and in the DAM. [e1]
- **Link to dam** (cites e2, e4): part-of Day-Ahead Market (DAM): PTP Obligations are bid for and cleared in the DAM, then settled on the price difference between sink and source. [e2][e4]
- **Link to congestion** (cites e7): hedges Transmission Congestion: The IMM describes a PTP as a scheduled flow from a source node to a sink node, valued on the price difference between those nodes. [e7]
- **Link to dart-spread** (cites e4, e5, e7): related DART Spread: A DAM-bought PTP pays the day-ahead spread and earns the real-time spread, so its profit is the difference. [e4][e5][e7]
- **Link to virtual-bids** (cites e6): contrasts-with Virtuals (Energy-Only Offers & Bids): Energy-only offers and bids may not be combined to mimic a PTP between electrically similar points. [e6]
- **Link to settlement-point** (cites e2): related Settlement Point: Source and sink are Settlement Points. [e2]
