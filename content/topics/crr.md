---
id: crr
name: CRR (Congestion Revenue Right)
aliases: [CRR, Congestion Revenue Right, CRRs]
kind: product
domain: congestion
level: 1
lenses: [analyst, trading, congestion, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: crr-auction
    type: related
    note: ERCOT holds a CRR Monthly Auction once per calendar month and a Long-Term Auction Sequence twice per year. [e8][e18]
  - to: pcrr
    type: related
    note: PCRRs are the CRRs ERCOT allocates to eligible Municipally Owned Utilities and Electric Cooperatives. [e4]
  - to: ptp-obligation
    type: related
    note: A PTP Obligation can produce either a payment or a charge, and can also be bid for in the DAM. [e5][e3]
  - to: congestion
    type: hedges
    note: CRRs pay or charge based on congestion in the DAM or in real time. [e1]
  - to: dam
    type: used-in
    note: CRRs settled in the DAM pay on Day-Ahead Settlement Point Price differences. [e11][e12]
  - to: basis-risk
    type: related
    note: A CRR is a financial instrument that does not represent a right to receive or an obligation to deliver physical energy, and DAM payments are based on the price difference between sink and source. [e2][e11]
  - to: settlement-point
    type: related
    note: A CRR is defined between a source and a sink Settlement Point. [e7]
  - to: sc-crr-valuation
    type: related
    note: Worked scenario for valuing a CRR path.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Congestion Revenue Right (CRR)"
    quote: "A financial instrument that entitles the holder to be charged or to receive compensation (i.e., congestion rent), depending on the instrument, when the ERCOT Transmission Grid is congested in the DAM or in Real-Time."
  - id: e2
    source: np-07
    locator: "Section 7.1, Function of Congestion Revenue Rights, paragraph (1)"
    quote: "A Congestion Revenue Right (CRR) is a financial instrument that entitles the CRR Owner to be charged or to receive compensation for congestion rents that arise when the ERCOT Transmission Grid is congested in the Day-Ahead Market (DAM) or in Real-Time. CRRs do not represent a right to receive, or obligation to deliver, physical energy."
  - id: e3
    source: np-07
    locator: "Section 7.1, paragraph (2)(d)"
    quote: "Qualified Scheduling Entities (QSEs) may bid for PTP Obligations in the DAM."
  - id: e4
    source: np-07
    locator: "Section 7.1, paragraph (2)(b)"
    quote: "ERCOT shall allocate CRRs (known as Pre-Assigned Congestion Revenue Rights (PCRRs)) to eligible Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs) under Section 7.4, Preassigned Congestion Revenue Rights Overview."
  - id: e5
    source: np-07
    locator: "Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, paragraph (4)"
    quote: "PTP Options can only result in payments from ERCOT to the CRR Owner of record. A PTP Obligation may result in either a payment or a charge to the CRR Owner of record."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Point-to-Point (PTP) Option"
    quote: "A PTP Option entitles the holder to receive compensation equal to the positive energy price difference between the sink and the source Settlement Point Prices."
  - id: e7
    source: np-07
    locator: "Section 7.2, Characteristics of Congestion Revenue Rights, paragraph (1)(d)"
    quote: "A designated source (injection point) that is a Settlement Point and a designated sink (withdrawal point) that is a different Settlement Point, except for a Flowgate Right (FGR), which has a designated directional network element, or a bundle of directional network elements, instead."
  - id: e8
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (4)(a)"
    quote: "The CRR Monthly Auction, held once per calendar month, shall include the sale of one-month terms of Point-to-Point (PTP) Options and PTP Obligations for the month immediately following the month during which the CRR bid submission window closes."
  - id: e9
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (4)(b)(i)"
    quote: "Each CRR Long-Term Auction Sequence shall consist of six successive CRR Auctions, each of which offers for sale CRRs spanning a term of six consecutive calendar months (either January through June, or July through December)."
  - id: e10
    source: np-07
    locator: "Section 7.5.7, Method for Distributing CRR Auction Revenues, paragraph (2)"
    quote: "ERCOT shall credit the net CRR Auction revenue (including PCRR revenue) produced from CRRs cleared in each CRR Auction that source from a Settlement Point located within a 2003 ERCOT CMZ and sink at a Settlement Point located within the same 2003 ERCOT CMZ to Qualified Scheduling Entities (QSEs) in the 2003 ERCOT CMZ on a zonal Load Ratio Share (LRS) basis. All other net CRR Auction revenues must be allocated to QSEs on an ERCOT-wide LRS basis."
  - id: e11
    source: np-07
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, paragraph (1)"
    quote: "ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point."
  - id: e12
    source: np-07
    locator: "Section 7.9.1.2, Payments for PTP Options Settled in DAM, paragraph (1)"
    quote: "ERCOT shall pay the owner of a PTP Option the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point, if positive."
  - id: e16
    source: np-07
    locator: "Section 7.1, paragraph (2)(a)"
    quote: "CRR Auction – ERCOT shall conduct periodic auctions to allow eligible CRR Account Holders to acquire CRRs. The auction also allows CRR Owners an opportunity to sell CRRs that they hold."
  - id: e17
    source: np-07
    locator: "Section 7.1, paragraph (2)(c)"
    quote: "Bilateral Market – CRR Account Holders may trade Point-to-Point (PTP) Options and PTP Obligations bilaterally."
  - id: e18
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (4)(b)"
    quote: "Twice per year, a CRR Long-Term Auction Sequence shall be held, selling PTP Options and PTP Obligations, subject to the following constraints:"
  - id: e13
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Highlights"
    quote: "CRR auction revenues increased 6% in 2025, slower growth than the 14-32% annual growth rates from 2021 to 2024."
  - id: e14
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Highlights"
    quote: "CRR profitability increased by 21% in 2025, reversing a multi-year decline. By contrast, CRRs posted a net loss of 1.5% in 2024."
  - id: e15
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Highlights"
    quote: "CRR surplus payments to load totaled $293 million, up 22% from the prior year. The balancing account was sufficiently funded to cover CRRs in every month of 2025."
---

## Definition

A Congestion Revenue Right is a financial instrument that entitles its holder to be charged or to receive compensation (congestion rent), depending on the instrument, when the ERCOT Transmission Grid is congested in the DAM or in real time. [e1] CRRs do not represent a right to receive, or an obligation to deliver, physical energy. [e2]

## How it works

CRRs can be acquired in the CRR Auction (ERCOT also lets owners sell CRRs there), through PCRR allocations, bilaterally, and, for PTP Obligations, by bidding in the DAM. [e16][e17][e3] PCRRs are allocated to eligible municipally owned utilities and electric cooperatives. [e4]

A CRR runs from a designated source Settlement Point to a different sink Settlement Point; the exception is a Flowgate Right, which names a network element instead. [e7] A PTP Option only pays: the holder receives the positive sink-minus-source price difference. [e5][e6] A PTP Obligation can produce either a payment or a charge. [e5]

In the DAM, a PTP Obligation owner is paid or charged the Day-Ahead Settlement Point Price difference between sink and source, and a PTP Option owner is paid that difference if it is positive. [e11][e12]

Net auction revenue from CRRs sourcing and sinking in the same 2003 congestion management zone is credited to QSEs in that zone by zonal Load Ratio Share, and all other net auction revenue is allocated by ERCOT-wide Load Ratio Share. [e10]

## ERCOT context

ERCOT sells CRRs in a monthly auction and in a long-term auction sequence held twice per year, each sequence being six auctions of six-month terms. [e8][e18][e9]

The IMM's 2025 numbers: auction revenues rose 6% (versus 14-32% annual growth in 2021-2024), CRR profitability rose 21% after a 1.5% net loss in 2024, and surplus payments to load were $293 million with the balancing account fully funding CRRs every month. [e13][e14][e15]

## Key facts

- CRRs are financial; no physical energy is delivered. [e2]
- PTP Options can only pay; PTP Obligations can pay or charge. [e5]
- The Monthly Auction is held once per calendar month for the following month. [e8]
- A Long-Term Auction Sequence is six successive auctions of six-month terms, held twice per year. [e9][e18]
- 2025 CRR auction revenue grew about 6%; profitability rose 21%. [e13][e14]
- 2025 surplus payments to load totaled $293 million. [e15]

## Say it like this

A CRR is a financial hedge on the price difference between two ERCOT points, paid out on DAM (and in some cases real-time) congestion. An obligation can cost you money if the path flows the wrong way; an option cannot.

## Common confusion

CRRs are not transmission rights to move power. They do not entitle the holder to physical energy. [e2] Also, PTP Obligation bids in the DAM are a different way to acquire a position than the CRR auction, though both pay on the sink-minus-source difference. [e3][e11]

## Questions

### What is the difference between a PTP Option and a PTP Obligation?

An Option can only produce payments to the holder, equal to the positive sink-minus-source price difference. An Obligation can produce a payment or a charge, so it can lose money when the price difference is negative. [e5][e6]

### How can a market participant get a CRR?

Through the CRR Auction, a PCRR allocation (for eligible municipal utilities and cooperatives), bilateral trades, or by bidding for PTP Obligations in the DAM. [e16][e17][e3][e4]

### Where does the money from CRR auctions go?

It is credited to QSEs on a Load Ratio Share basis, zonal for same-zone paths and ERCOT-wide for the rest. [e10]

## Open items

- The CRR Balancing Account mechanics (Section 7.6, 7.9.3) were not summarized beyond the IMM funding statement.
- Real-time CRR settlement (Section 7.9.2) is not described.
- TOU block definitions (5x16, 2x16, 7x8) exist in Section 7.3(5) but were not quoted here.
- Pending NPRR1288 changes to auction strips are not described as current rules.
