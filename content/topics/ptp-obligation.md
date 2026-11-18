---
id: ptp-obligation
name: PTP Obligation
aliases: [PTP Obligation, Point-to-Point Obligation, PTP, PTP obligation bid, DAM PTP]
kind: product
domain: pricing
level: 1
lenses: [trading, congestion, analyst]
as_of: 2026-11-18
links:
  - to: crr
    type: is-a
    note: A PTP Obligation is a type of CRR, so it is also sold in CRR Auctions. [e1]
  - to: dam
    type: part-of
    note: PTP Obligations are bid for and cleared in the DAM, then settled on the price difference between sink and source. [e2][e4]
  - to: congestion
    type: hedges
    note: PTPs let participants hedge or speculate on congestion between two locations in the day-ahead and real-time markets. [e7]
  - to: dart-spread
    type: related
    note: A DAM-bought PTP pays the day-ahead spread and earns the real-time spread, so its profit is the difference. [e4][e5][e7]
  - to: virtual-bids
    type: contrasts-with
    note: Energy-only offers and bids may not be combined to mimic a PTP between electrically similar points. [e6]
  - to: settlement-point
    type: related
    note: Source and sink are Settlement Points. [e2]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Point-to-Point (PTP) Obligation"
    quote: "A type of CRR that entitles the holder to be charged or to receive compensation and is evaluated in each CRR Auction and DAM as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW)."
  - id: e2
    source: np-04
    locator: "Section 4.4.6, PTP Obligation Bids, paragraph (1)"
    quote: "A Point-to-Point (PTP) Obligation bid is a bid that specifies the source and sink, a range of hours, and a maximum price that the bidder is willing to pay (“Not-to-Exceed Price”)."
  - id: e3
    source: np-04
    locator: "Section 4.4.6, paragraph (2)"
    quote: "PTP Obligations that are bought in the Day-Ahead Market (DAM) must be settled based on the applicable Real-Time Settlement Point Prices."
  - id: e4
    source: np-04
    locator: "Section 4.6.3, Settlement for PTP Obligations Bought in DAM, paragraph (1)"
    quote: "ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e5
    source: np-07
    locator: "Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2)"
    quote: "ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e6
    source: np-04
    locator: "Section 4.4.9.6.1, DAM Energy Bid Criteria, paragraph (3)"
    quote: "DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party."
  - id: e7
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section D, Point-to-Point Obligations"
    quote: "A PTP represents a scheduled flow from a source node to a sink node. Its purchase cost equals the product of the day-ahead price difference between those nodes and the flow volume in MWh. The participant realizes its value in real time when the position is liquidated based on the real-time price difference between the same nodes."
  - id: e8
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, PTP Profitability"
    quote: "Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024."
  - id: e9
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, 2. PTP Bid Volume"
    quote: "The volume of PTP bids39 has grown by 258% over the past decade, affecting both PTP profitability and day-ahead market performance."
  - id: e10
    source: imm-som-2025
    locator: "Recommendation 2020-4: Implement a Point-to-Point Obligation Bid Fee"
    quote: "Over the past decade, the day-ahead market has experienced numerous delays in solving and posting results. ERCOT has identified the large and growing volume of PTP obligation bids as a key contributor to these delays."
  - id: e11
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, 3. PTP Bid Fees"
    quote: "In Recommendation 2020-4, we recommend that ERCOT impose a small fee on PTP bids to discourage uncompetitive bids that are extremely unlikely to clear."
---

## Definition

A Point-to-Point (PTP) Obligation is a type of CRR that entitles the holder to be charged or to receive compensation, based on the power flows created by an injection at a source and a withdrawal at a sink. [e1] A PTP Obligation bid specifies the source and sink, a range of hours, and a maximum price the bidder will pay, the Not-to-Exceed Price. [e2]

## How it works

A QSE can buy PTP Obligations in the DAM by submitting such bids. [e2] A cleared PTP Obligation is charged or paid the difference in DAM Settlement Point Prices between the sink and the source. [e4] It is then settled in real time: ERCOT pays or charges the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between sink and source. [e5][e3]

The IMM puts the economics in simple terms: the purchase cost is the day-ahead price difference times the flow volume in MWh, and its value is realized in real time when the position is liquidated at the real-time price difference between the same nodes. [e7]

DAM bidding has a guardrail: energy-only offers, energy bids and PTP Obligation bids may not be combined to create the net effect of one PTP between electrically similar Settlement Points. [e6]

## ERCOT context

The IMM reports that PTPs remained profitable in 2025, receiving 10.9% more in real time than their day-ahead purchase cost, up from a 7.5% margin in 2024. [e8] PTP bid volume has grown 258% over a decade. [e9] ERCOT has identified that growing volume as a key contributor to day-ahead market delays in solving and posting results. [e10]

The IMM recommends a small fee on PTP bids (Recommendation 2020-4) to discourage uncompetitive bids that are extremely unlikely to clear. [e11]

## Key facts

- A PTP Obligation can produce a charge or a payment. [e1]
- A DAM-cleared PTP Obligation pays or charges the DAM sink-minus-source price difference, and is also settled on the real-time sink-minus-source difference. [e4][e5]
- 2025: PTPs received 10.9% more in real time than their day-ahead purchase cost; 2024 margin was 7.5%. [e8]
- PTP bid volume is up 258% over the past decade. [e9]
- The IMM's Recommendation 2020-4 is a small fee on PTP bids. [e11]

## Say it like this

A PTP Obligation is a day-ahead bet on congestion between two points: you pay the day-ahead price spread and collect the real-time spread. It was profitable in 2025, but the IMM warns that the growing number of bids is straining the day-ahead market.

## Common confusion

A PTP Obligation can lose money, unlike a PTP Option, which only pays. The Obligation can produce a charge or a payment. [e1] Do not confuse it with a virtual: a PTP is a two-location spread, while an energy-only offer or bid is a one-location energy position. [e2][e6]

## Questions

### How is a DAM PTP Obligation settled?

The QSE is paid or charged the DAM Settlement Point Price difference between sink and source, and then paid or charged the real-time sink-minus-source difference. [e4][e5] The net is the change in congestion between the two markets. [e7]

### Why does the IMM want a PTP bid fee?

Because PTP bid volume has grown a lot and ERCOT sees it as a key contributor to DAM delays, and many bids are uncompetitive and unlikely to clear. [e9][e10][e11]

### Was the PTP a good trade in 2025?

On average yes: PTPs received 10.9% more in real time than their day-ahead purchase cost. [e8]

## Open items

- The sign convention in np-04 Section 4.6.3 (DAM) and np-07 Section 7.9.2.1 (real-time) should be re-read together before quoting profit and loss mechanics; the quoted text says "pay or charge" without a sign rule.
- np-04 Section 4.4.6(2) says DAM-bought PTP Obligations "must be settled based on the applicable Real-Time Settlement Point Prices" while Section 4.6.3 gives a DAM price-difference payment; the two reflect the two legs, but the reconciliation is not stated in the saved text.
- Deeper pass: PTP Obligations with Links to an Option for NOIEs (np-02, np-04 Sections 4.4.6.1 and 4.4.6.3), bid criteria and validation, per-counterparty bid caps, and DAM credit requirements for PTP bids (np-04 Section 4.4.10).
- Deeper pass: the PTP-bid-fee NPRR status (CMWG options) and IMM profitability numbers in the OCR tables, which are not saved.
