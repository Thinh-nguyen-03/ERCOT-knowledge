---
id: crr-auction
name: CRR Auctions
aliases: [CRR Auction, CRR Monthly Auction, CRR Long-Term Auction Sequence, LTAS, CARD, SFT]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, congestion, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: crr
    type: prerequisite-of
    note: The CRR topic covers the instruments, settlement and the distribution of auction revenue; this topic covers how the auction runs. [e1]
  - to: pcrr
    type: related
    note: Auction capacity excludes what is allocated as PCRRs. [e1]
  - to: ptp-obligation
    type: related
    note: The Monthly Auction and Long-Term Auction Sequence sell PTP Options and PTP Obligations. [e2][e11]
  - to: credit-tpe
    type: related
    note: Each Counter-Party has a CRR Auction credit limit equal to the lesser of the Section 16 limit or its self-imposed limit, if provided. [e13]
  - to: congestion
    type: related
    note: CRR auction revenue grew about 6% in 2025. [e8]
  - to: basis-risk
    type: related
    note: Participants buy CRRs to manage congestion risk. [e9]
evidence:
  - id: e1
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (1)"
    quote: "The Congestion Revenue Right (CRR) Auction auctions the available network capacity of the ERCOT transmission system not allocated as described in Section 7.4, Preassigned Congestion Revenue Rights Overview, or sold in a previous auction. The CRR Auction also allows CRR Owners an opportunity to offer for sale CRRs that they hold."
  - id: e2
    source: np-07
    locator: "Section 7.5.1, paragraph (4)(a)"
    quote: "The CRR Monthly Auction, held once per calendar month, shall include the sale of one-month terms of Point-to-Point (PTP) Options and PTP Obligations for the month immediately following the month during which the CRR bid submission window closes."
  - id: e3
    source: np-07
    locator: "Section 7.5.1, paragraph (4)(b)(ii)"
    quote: "The CRR Long-Term Auction Sequence shall operate in chronological order, first providing a CRR Auction covering the next six-month (January through June, or July through December) period that has not yet commenced, and then five successive CRR Auctions for the five six-month periods thereafter."
  - id: e4
    source: np-07
    locator: "Section 7.5.1, paragraph (5)"
    quote: "For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) For the CRR Monthly Auction, 90%."
  - id: e5
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (1)"
    quote: "The CRR Auction must be a single-round, simultaneous auction for selling the CRRs available for all auction products."
  - id: e6
    source: np-07
    locator: "Section 7.5.1, paragraph (5)(b)"
    quote: "For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively."
  - id: e7
    source: np-07
    locator: "Section 7.5.5.4, Simultaneous Feasibility Test, paragraph (1)"
    quote: "The Simultaneous Feasibility Test (SFT) is a market feasibility test that confirms that the transmission system can support the awarded set of CRRs during normal system conditions, assuming that the Network Operations Model updated with Real-Time network topology is the same as that modeled (for the CRR Auction), while observing all security constraints."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, CRR Auction Revenues"
    quote: "The total value of CRR auction revenue increased by almost 6% from 2024 to 2025. This growth rate was notably lower than in prior years, as annual CRR revenue growth from 2021-2024 ranged from around 14% to 32%."
  - id: e9
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, introduction to CRRs"
    quote: "Market participants purchase CRRs through auctions and may acquire them in monthly blocks up to three years in advance to manage congestion risk."
  - id: e11
    source: np-07
    locator: "Section 7.5.1, paragraph (4)(b)"
    quote: "Twice per year, a CRR Long-Term Auction Sequence shall be held, selling PTP Options and PTP Obligations, subject to the following constraints:"
  - id: e12
    source: np-07
    locator: "Section 7.8, paragraph (1)"
    quote: "Market Participants may sell or trade Point-to-Point (PTP) Options and PTP Obligations bilaterally, except PTP Options with Refund and PTP Obligations with Refund."
  - id: e13
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (1)"
    quote: "ERCOT shall enter into the CRR Auction system a credit limit for each Counter-Party that has at least one CRR Account Holder. A Counter-Party’s CRR Auction credit limit is equal to the lesser of the credit limit as determined in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation, or, if provided, the Counter-Party’s self-imposed CRR Auction credit limit for the CRR Monthly Auction or for a time-of-use within a CRR Auction held as part of a CRR Long-Term Auction Sequence."
  - id: e10
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, CRR Auction Revenue Distribution"
    quote: "ERCOT distributes the revenues it receives from selling CRRs to Load Serving Entities (LSEs) through the CRR Auction Revenue Distribution (CARD) process. CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month’s coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval."
---

## Definition

The CRR Auction sells the available network capacity of the ERCOT transmission system that has not been allocated as PCRRs or sold in a previous auction, and lets CRR Owners offer CRRs they already hold. [e1]

## How it works

Two kinds of auction run. The CRR Monthly Auction is held once per month and sells one-month PTP Options and PTP Obligations for the following month. [e2] Twice a year a Long-Term Auction Sequence runs six successive auctions, starting with the next six-month period (January-June or July-December) and then the five periods after it. [e11][e3] Each auction is a single-round, simultaneous auction across all products. [e5]

Only part of the network is sold in each auction. Auction capacity is 90% for the Monthly Auction, and for the Long-Term sequence 70%, 55%, 40%, 30%, 20% and 10% for the first through sixth six-month windows. [e4][e6] Awards must pass the Simultaneous Feasibility Test, which confirms the system can support the awarded CRRs under normal conditions while observing security constraints. [e7]

## ERCOT context

The IMM says participants can buy CRRs in monthly blocks up to three years ahead to manage congestion risk. [e9] Auction revenue is passed to load through CARD, by system-wide load ratio share for cross-zone CRRs and zonal share for same-zone CRRs. [e10] The IMM reports auction revenue up almost 6% in 2025, after 14% to 32% annual growth in 2021-2024. [e8]

## Key facts

- Monthly Auction: held monthly, sells one-month terms for the next month. [e2]
- Long-Term Auction Sequence: twice a year, six successive auctions of six-month terms. [e11][e3]
- Auction capacity: 90% monthly; 70% down to 10% across the Long-Term windows. [e4][e6]
- Single-round, simultaneous auction. [e5]
- 2025 auction revenue growth: almost 6%. [e8]

## Say it like this

ERCOT sells CRRs in a monthly auction and in long-term sequences up to three years out, each time offering only a share of what the network can support. Revenue goes back to load.

## Common confusion

The auction is not the only source of CRRs: PCRRs are allocated outside it and PTP Options and PTP Obligations can also be traded bilaterally. [e1][e12] The SFT is a market feasibility test that confirms the system can support the awarded CRRs. [e7]

## Questions

### Why does the long-term capacity percentage shrink?

The percentage falls with each successive six-month window sold, from 70% for the first to 10% for the sixth, so less of the network is offered for the periods furthest out. [e6]

### Who gets the auction revenue?

Load, through CARD: cross-zone revenue by ERCOT-wide load ratio share and same-zone revenue by zonal share. [e10]

### What stops ERCOT from over-selling the grid?

The Simultaneous Feasibility Test on the awarded set of CRRs. [e7]

## Open items

- Pending NPRR1288 would change strips to one-month strips and was not treated as current. Deeper pass: the box text in 7.5.1(1) and (4)(b)(i).
- Deeper pass: bid and offer criteria (7.5.2), the credit limit formula (7.5.5.3), clearing method, and auction settlement formulas (7.5.6).
- Deeper pass: the CRR Balancing Account and shortfall charges (7.6, 7.9.3); the IMM CRR funding section (2025) was not read in detail.
- 2024 and 2025 CRR auction revenue totals: the 2025 IMM table is garbled in the text copy and no OCR copy is saved, so dollar totals are not given.
