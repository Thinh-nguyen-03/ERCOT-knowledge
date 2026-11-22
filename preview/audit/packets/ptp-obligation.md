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
locator: Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria, paragraph (4) · text copy line 1764 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: … The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. (4) 
QUOTE: DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party.
AFTER:  4.4.9.5.2 DAM Energy-Only Offer Validation (1) A valid DAM Energy-Only Offer Curve is an offer that ERCOT has determined meets the criteria listed in Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria. (2) ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging Sys…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section D, Point-to-Point Obligations · text copy line 4919

BEFORE: …articipants' 54 | 2025 State of the Market Report / / Day-Ahead Market Performance expectations of congestion. PTP obligations are a key part of day-ahead market activity because they allow participants to hedge or speculate on congestion between two locations in the dayahead and real-time markets. 
QUOTE: A PTP represents a scheduled flow from a source node to a sink node. Its purchase cost equals the product of the day-ahead price difference between those nodes and the flow volume in MWh. The participant realizes its value in real time when the position is liquidated based on the real-time price difference between the same nodes.
AFTER:  1. PTP Profitability The net value of the PTP reflects the change in congestion between the day-ahead and real-time markets. A PTP is profitable when the participant pays less to purchase it than it earns in real time. Figure 34 compares total day-ahead payments to acquire these products with total…

## Statements to check (new or changed since the last audit)

- **Link to crr** (cites e1): is-a CRR (Congestion Revenue Right): A PTP Obligation is a type of CRR that is evaluated in each CRR Auction and in the DAM. [e1]
- **Link to dam** (cites e2, e4): part-of Day-Ahead Market (DAM): PTP Obligations are bid for and cleared in the DAM, then settled on the price difference between sink and source. [e2][e4]
- **Link to congestion** (cites e7): hedges Transmission Congestion: The IMM describes a PTP as a scheduled flow from a source node to a sink node, valued on the price difference between those nodes. [e7]
- **Link to dart-spread** (cites e4, e5, e7): related DART Spread: A DAM-bought PTP pays the day-ahead spread and earns the real-time spread, so its profit is the difference. [e4][e5][e7]
- **Link to virtual-bids** (cites e6): contrasts-with Virtuals (Energy-Only Offers & Bids): Energy-only offers and bids may not be combined to mimic a PTP between electrically similar points. [e6]
- **Link to settlement-point** (cites e2): related Settlement Point: Source and sink are Settlement Points. [e2]

