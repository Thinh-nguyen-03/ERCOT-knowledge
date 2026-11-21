---
id: crr-auction
name: CRR Auctions
aliases: [CRR Auction, CRR Monthly Auction, CRR Long-Term Auction Sequence, LTAS, CARD, SFT]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, congestion, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: crr
    type: prerequisite-of
    note: The CRR topic covers the instruments, settlement and the distribution of auction revenue; this topic covers how the auction runs. [e1]
  - to: pcrr
    type: related
    note: Auction capacity excludes what is allocated as PCRRs. [e1]
  - to: ptp-obligation
    type: related
    note: The Monthly Auction and Long-Term Auction Sequence sell PTP Options and PTP Obligations. [e2][e10]
  - to: credit-tpe
    type: related
    note: Each Counter-Party has a CRR Auction credit limit equal to the lesser of the Section 16 limit or its self-imposed limit, if provided. [e12]
  - to: congestion
    type: related
    note: CRR auction revenue grew about 6% in 2025. [e8]
  - to: basis-risk
    type: related
    note: Participants buy CRRs to manage congestion risk. [e9]
  - to: load-ratio-share
    type: used-in
    note: Auction revenue is credited to QSEs on a zonal or ERCOT-wide load ratio share measured in the interval coincident with the ERCOT-wide monthly peak 15-minute Settlement Interval. [e28]
  - to: shadow-price
    type: determines
    note: The CRR clearing price equals the Shadow Price for that CRR product. [e24]
  - to: binding-constraint
    type: related
    note: The Simultaneous Feasibility Test observes security constraints and uses a DC power-flow model; it is not a reliability test. [e7][e26]
  - to: settlement-statements
    type: related
    note: Awarded CRRs are not placed in the winner's CRR account until the required CRR Invoice has been paid. [e25]
  - to: sc-crr-valuation
    type: related
    note: The IMM reported CRRs as a group lost about 1.5% in 2024 and gained almost 21% in profitability in 2025. [e39]
  - to: dam
    type: related
    note: Day-ahead congestion rent funds CRR payments; a surplus goes to the CRR Balancing Account and a shortfall short-pays CRR Owners. [e29][e30]
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
  - id: e10
    source: np-07
    locator: "Section 7.5.1, paragraph (4)(b)"
    quote: "Twice per year, a CRR Long-Term Auction Sequence shall be held, selling PTP Options and PTP Obligations, subject to the following constraints:"
  - id: e11
    source: np-07
    locator: "Section 7.8, paragraph (1)"
    quote: "Market Participants may sell or trade Point-to-Point (PTP) Options and PTP Obligations bilaterally, except PTP Options with Refund and PTP Obligations with Refund."
  - id: e12
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (1)"
    quote: "ERCOT shall enter into the CRR Auction system a credit limit for each Counter-Party that has at least one CRR Account Holder. A Counter-Party’s CRR Auction credit limit is equal to the lesser of the credit limit as determined in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation, or, if provided, the Counter-Party’s self-imposed CRR Auction credit limit for the CRR Monthly Auction or for a time-of-use within a CRR Auction held as part of a CRR Long-Term Auction Sequence."
  - id: e13
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, CRR Auction Revenue Distribution"
    quote: "ERCOT distributes the revenues it receives from selling CRRs to Load Serving Entities (LSEs) through the CRR Auction Revenue Distribution (CARD) process. CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month’s coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval."
  - id: e14
    source: imm-som-2025
    locator: "page 87 (OCR), 1. CRR Auction Timeline"
    quote: "Historically, long-term auctions allowed participants to purchase CRRs either for individual months or as blocks of consecutive months within a single auction. NPRR 1288, approved in November 2025, eliminated this block purchase option by removing multi-month blocks to reduce auction optimization time. As a result, participants now purchase CRRs only for individual months, even in long-term auctions that cover multiple future months."
  - id: e15
    source: imm-som-2025
    locator: "page 87 (OCR), 1. CRR Auction Timeline"
    quote: "ERCOT holds long-term auctions twice each year and offers CRRs up to three years, or 36 months, in advance of the real-time market. It conducts subsequent long-term auctions every six months, with the final auction occurring six months prior to real-time."
  - id: e16
    source: np-07
    locator: "Section 7.5.1, paragraph (6), long-term capacity offered"
    quote: "For any month covered by a CRR Auction that is part of a CRR Long-Term Auction Sequence, ERCOT shall offer network capacity equal to: (a) The expected network topology for that month, scaled down to the CRR Auction Capacity percentage; minus (b) All outstanding CRRs that were previously allocated for the month, scaled down to the CRR Auction Capacity percentage; minus (c) All outstanding CRRs that were previously awarded for the month in any previous CRR Auction."
  - id: e17
    source: np-07
    locator: "Section 7.5.2.1, CRR Auction Offer Criteria, paragraph (1) and (3)"
    quote: "A Participating CRR Account Holder can only offer to sell one-month or multi-month strips of CRRs for which it is the CRR Owner of record at the time of the offer. Multi-month CRR offers must consist of consecutive months that are within the period of the relevant CRR Auction and can only be submitted as part of a CRR Long-Term Auction Sequence."
  - id: e18
    source: np-07
    locator: "Section 7.5.2.3, CRR Auction Bid Criteria, paragraphs (3)-(4)"
    quote: "A bid to buy a PTP Option cannot specify a non-positive Not-to-Exceed Price less than the Minimum PTP Option Bid Price. (4) A bid to buy a PTP Obligation can specify a negative Not-to-Exceed Price."
  - id: e19
    source: np-07
    locator: "Section 7.5.2.3, paragraph (1)(d)"
    quote: "The month or strip of consecutive months for which the block of CRRs is being bid, including time-of-use designation, which may include a 7x24 block in a CRR Monthly Auction but not in a CRR Auction held as part of a CRR Long-Term Auction Sequence;"
  - id: e20
    source: np-07
    locator: "Section 7.5.5.3, paragraph (2), pre-auction screening"
    quote: "First, if the Counter-Party’s CRR Auction credit limit is greater than that Counter-Party’s credit exposure as defined below using the CRR bid volumes rather than awarded volumes, then the Counter-Party’s CRR Auction credit limit will be ignored as the CRR Auction is solved."
  - id: e21
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, Path-Specific DAM-Based Adder"
    quote: "Path-Specific DAM-Based Adder—The path-specific DAM-based adder with the source j and sink k for the hour h, and month m submitted by a Counter-Party b; calculated as 99^(th) percentile of the average rolling consecutive DAM settled price for the reference CRR source/sink over a period that represents a month for each product type (18 days for 5*16, 8 days for 2*16, 28 days for 7*8)."
  - id: e22
    source: np-07
    locator: "Section 7.5.5.3, paragraph (4)(a)-(b), post-auction collateral"
    quote: "If it is practicable to rerun the applicable CRR Auction, and the post CRR Auction collateral requirements for a Counter-Party are not satisfied, ERCOT: (a) Shall promptly notify the Counter-Party of the amount by which its Financial Security must be increased and allow it until 1500 on the next Bank Business Day from the date on which ERCOT delivered Notification to increase the Financial Security. (b) If sufficient Financial Security is not received by 1500 on the next Bank Business Day, ERCOT shall void all of the Counter-Party’s bids and offers in the CRR Auction and rerun the CRR Auction without that Counter-Party’s activity."
  - id: e23
    source: np-07
    locator: "Section 7.5.5.3, paragraph (5), linear programming auction engine"
    quote: "ERCOT shall use a linear programming auction engine model for each CRR Auction that evaluates all CRR Auction bids and CRR Auction offers submitted, and selects a combination of CRR Auction bids and CRR Auction offers that: (a) Makes the solution simultaneously feasible within the limits of the ERCOT network capability over the auction term; and (b) Maximizes the objective function, which is equal to the total economic value (as expressed in the CRR Auction bids) of the awarded CRR Auction bids, less the total economic cost (as expressed in CRR Auction offers) of the awarded CRR Auction offers, while observing all applicable constraints."
  - id: e24
    source: np-07
    locator: "Section 7.5.5.3, paragraph (4)(d)"
    quote: "The CRR clearing price is equal to the corresponding Shadow Price for that CRR product."
  - id: e25
    source: np-07
    locator: "Section 7.5.5.3, paragraph (4)(e)"
    quote: "Except as noted in paragraph (f) below, when a CRR Account Holder is awarded CRRs as a result of a CRR Auction, the CRRs do not become the property of the winning CRR Account Holder, and the CRRs may not be placed in their CRR accounts, until the required CRR Invoice has been paid."
  - id: e26
    source: np-07
    locator: "Section 7.5.5.4, Simultaneous Feasibility Test, paragraph (2)"
    quote: "The SFT uses a Direct Current (DC) power-flow model to model the effect of CRR Auction bids and offers on the expected system network topology during the auction term. SFT is not a system reliability test and is not intended to model actual system operating conditions."
  - id: e27
    source: np-07
    locator: "Section 7.5.5.4, paragraph (3)(e)"
    quote: "Increased capacity of each element that has been oversold in prior CRR Auctions and CRR allocations to exactly match the amount of CRRs that have been sold or allocated on that element (this ensures the feasibility of the CRR Auction);"
  - id: e28
    source: np-07
    locator: "Section 7.5.7, Method for Distributing CRR Auction Revenues, paragraph (2)"
    quote: "ERCOT shall credit the net CRR Auction revenue (including PCRR revenue) produced from CRRs cleared in each CRR Auction that source from a Settlement Point located within a 2003 ERCOT CMZ and sink at a Settlement Point located within the same 2003 ERCOT CMZ to Qualified Scheduling Entities (QSEs) in the 2003 ERCOT CMZ on a zonal Load Ratio Share (LRS) basis. All other net CRR Auction revenues must be allocated to QSEs on an ERCOT-wide LRS basis."
  - id: e29
    source: np-07
    locator: "Section 7.6, CRR Balancing Account, paragraphs (1)-(2)"
    quote: "In the Day-Ahead Market (DAM), if the congestion rent is equal to or greater than the net amounts due to all Congestion Revenue Right (CRR) Owners for any Settlement Interval, then ERCOT shall pay the net amounts due to the CRR Owners and put any excess amount into the CRR Balancing Account (CRRBA)."
  - id: e30
    source: np-07
    locator: "Section 7.6, paragraph (2)"
    quote: "In the DAM, if the congestion rent is less than the net amounts due to all CRR Owners for any Settlement Interval, then ERCOT shall short-pay each CRR Owner on a prorated basis and shall keep track of how much each CRR Owner has been short-paid. The proration must be calculated using only the amounts due to the CRR Owner for CRRs settled in both the DAM and Real-Time and not using amounts due to ERCOT for Point-to-Point (PTP) Obligations owned by the CRR Owner."
  - id: e31
    source: np-07
    locator: "Section 7.9.3.3, Shortfall Charges to CRR Owners, paragraph (1)"
    quote: "For each Operating Hour, if the Day-Ahead Congestion Rent is less than the total payment to all CRR Owners for the CRRs settled in the DAM, a charge will be made to each CRR Owner for any of its CRRs settled in the DAM that have positive Settlement prices."
  - id: e32
    source: np-07
    locator: "Section 7.9.3.5, CRR Balancing Account Closure, paragraph (1)"
    quote: "Any surplus that remains from the CRR Balancing Account and CRR Auction PTP Option Award Charge Total above the CRR Balancing Account Fund cap is paid to the QSEs representing Load Serving Entities (LSEs) based on a monthly Load Ratio Share (LRS). The monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month. The CRR Balancing Account Fund Cap is $10 million."
  - id: e33
    source: ercot-crr-handbook
    locator: "ERCOT CRR Market User Interface Handbook, CRR Allocation and Auction Time Lines (monthly auction)"
    quote: "At least 10 business days prior to the opening of the transaction window, ERCOT posts the network model on which the auction will be executed. This posting occurs approximately 2 weeks ahead of the transaction window."
  - id: e34
    source: ercot-crr-handbook
    locator: "CRR Handbook, CRR Allocation and Auction Time Lines (Long-Term Auction Sequence)"
    quote: "At least 20 business days prior to the opening of the transaction window, ERCOT posts the network model on which the CRR auction will be executed. This posting occurs approximately 4 weeks ahead of the transaction window."
  - id: e35
    source: ercot-credit-faqs
    locator: "ERCOT Credit FAQs, timelines for sending collateral for CRR auctions"
    quote: "On CRR lock days, collateral/Available Credit Limits as reflected in the CRR portal will be updated throughout the day. However, it is important to note that only collateral received by ERCOT no later than 3 pm CT will be reflected in the CRR portal and made available for the auction."
  - id: e36
    source: imm-som-2025
    locator: "page 88 (OCR), Figure 41 CRR Auction Revenue 2021-2025 ($ millions), Total row"
    quote: "Total $832 $1,098 $1,442 $1,710 $1,810"
  - id: e37
    source: imm-som-2025
    locator: "page 88 (OCR), 2. CRR Auction Revenues"
    quote: "Intrazonal CRRs drove the increase in total CRR revenue, while revenue for Cross Zone CRRs fell to its lowest value since 2021."
  - id: e38
    source: imm-som-2025
    locator: "page 88-89 (OCR), CARD and NPRR 1030"
    quote: "To remove these adverse incentives, ERCOT approved NPRR 1030 in August 2020, which allocates CARD payments for DC ties based on their monthly load"
  - id: e39
    source: imm-som-2025
    locator: "page 89 (OCR), 3. CRR Profitability"
    quote: "Figure 42 shows annual aggregate CRR auction revenue and payments to CRR owners, whose difference represents CRR profitability. Overall, CRRs have been profitable annually in every year except 2024, when they produced a loss of approximately 1.5%. In 2025, CRR profitability increased by almost 21%, reversing a two-year decline."
  - id: e40
    source: imm-som-2025
    locator: "page 89-90 (OCR), 4. CRR Funding Levels and CRR Shortfall Settlement"
    quote: "ERCOT pays less than the target value only when day-ahead congestion rent is insufficient, which can occur when the network flows modeled in the CRR auction exceed the flows in the day-ahead market. This occurrence is often the result of unforeseen outages or other factors that reduce transmission capability between the CRR auction and the DAM."
  - id: e41
    source: imm-som-2025
    locator: "page 90 (OCR), CRR Shortfall Settlement"
    quote: "If revenue remains insufficient after this adjustment, ERCOT allocates the remaining shortfall across all holders of positively valued CRRs through a prorated charge, which reduces their overall payments. The last CRR short payment occurred in November 2020."
  - id: e42
    source: imm-som-2025
    locator: "page 90 (OCR), Figure 43 CRR Solvency, day-ahead congestion rent ($ millions, 2021-2025)"
    quote: "Day-Ahead Congestion Rent $1,402 $2,365 $2,069 $1,923 $2,477"
  - id: e43
    source: imm-som-2025
    locator: "page 90 (OCR), Figure 43 CRR Solvency, CRR payments ($ millions, 2021-2025)"
    quote: "CRR Payments $1,289 $2,067 $1,809 $1,684 $2,185"
  - id: e44
    source: imm-som-2025
    locator: "page 90 (OCR), 2025 funding"
    quote: "In 2025, the total day-ahead surplus was approximately $293 million, up 22.4% from 2024. Congestion rent from the day-ahead market was sufficient to fully fund CRRs in every month of the year."
  - id: e45
    source: imm-som-2025
    locator: "page 91 (OCR), CRR deratings"
    quote: "CRR deratings reduced payments to CRR holders by $33 million and reduced ERCOT’s overall funding percentage to approximately 99%, comparable to the previous year."
  - id: e46
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), credit constraint for each Counter-Party"
    quote: "ACR _(b) = AOBLCR _(b) + AOPTCR _(b) - AOBLCRO _(b)"
  - id: e47
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, AOBLCRO"
    quote: "Auction PTP Obligation Credit Requirement for Offers—The auction credit requirement for all PTP Obligation offers submitted by a Counter-Party b for all Operating Days."
  - id: e48
    source: np-07
    locator: "Section 7.5.6.1, paragraph (1), payment formula"
    quote: "OBLSAMT _(crrh, (j, k), a) = (-1) * OBLPR _((j, k), a) * OBLS _(crrh, (j, k), a)"
  - id: e49
    source: np-07
    locator: "Section 7.5.6.2, paragraph (1), charge formula"
    quote: "OBLPAMT _(crrh, (j, k), a) = OBLPR _((j, k), a) * OBLP _(crrh, (j, k), a)"
  - id: e50
    source: np-07
    locator: "Section 7.5.6.1, variable table, OBLPR"
    quote: "PTP Obligation Price per source and sink pair per CRR Auction—The clearing price of a PTP Obligation with the source j and the sink k in CRR Auction a, for the hour."
  - id: e51
    source: imm-som-2025
    locator: "page 87 (OCR), 1. CRR Auction Timeline"
    quote: "However, forecasting congestion becomes more uncertain over longer time horizons because congestion outcomes depend on load growth, generation development, transmission outages, and variable renewable output. This uncertainty increases the risk that payments to CRR account holders could exceed the congestion rent collected in the day-ahead market and create a revenue shortfall. To mitigate this risk, ERCOT sells only a portion of the rated transmission capacity for each CRR path in long-term auctions, then increases the percentage of capacity available in successive auctions until the final monthly auction, as illustrated in Figure 40."
  - id: e52
    source: np-07
    locator: "Section 7.5.2, CRR Auction Offers and Bids, paragraph (1)"
    quote: "To submit bids or offers into a CRR Auction, an Entity must become a CRR Account Holder and satisfy financial assurance criteria required to participate, under Section 16.8, Registration and Qualification of Congestion Revenue Rights Account Holders."
  - id: e53
    source: np-07
    locator: "Section 7.5.5.3, paragraph (2), pre-auction screening"
    quote: "PTP Option offers have zero credit exposure."
  - id: e54
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, AOBLCR"
    quote: "Auction PTP Obligation Credit Requirement—The auction credit requirement for all PTP Obligation bids submitted by a Counter-Party b for all Operating Days."
  - id: e55
    source: np-07
    locator: "Section 7.5.5.3, paragraph (3), variable table, AOPTCR"
    quote: "Auction PTP Option Bid Credit Requirement—The auction credit requirement for all PTP Option bids submitted by a Counter-Party b."
  - id: e56
    source: np-07
    locator: "Section 7.5.6.1, variable table, OBLS"
    quote: "PTP Obligation Sale per CRR Account Holder per source and sink pair per CRR Auction—The MW quantity that represents the total of CRR Account Holder crrh’s PTP Obligation offers associated with the source j and the sink k awarded in CRR Auction a, for the hours of the TOU period."
  - id: e57
    source: np-07
    locator: "Section 7.5.6.2, variable table, OBLP"
    quote: "PTP Obligation Purchase per CRR Account Holder per source and sink pair per CRR Auction—The MW quantity that represents the total of CRR Account Holder crrh’s PTP Obligation bids associated with the source j and the sink k awarded in CRR Auction a, for the hours of the TOU period."
  - id: e58
    source: np-07
    locator: "Section 7.5.7, paragraph (3)"
    quote: "For initial distribution of CMRs, revenues shall be paid to each QSE based on that QSE’s LRS in the interval coincident with the ERCOT-wide peak 15-minute Settlement Interval for the month."
  - id: e59
    source: imm-som-2025
    locator: "page 90 (OCR), footnote 42, NPRR 1030"
    quote: "Despite being approved in 2020, the project to implement NPRR 1030 has not been initiated yet."
  - id: e60
    source: ercot-crr-handbook
    locator: "CRR Handbook, typical timeline for a monthly CRR auction (Market Notice)"
    quote: "Approximately 10 days prior to the opening of the transaction window, a Market Notice for the auction is sent out and the window for Market Participants to submit credit is opened."
  - id: e61
    source: ercot-crr-handbook
    locator: "CRR Handbook, typical timeline for a monthly CRR auction (execution time)"
    quote: "ERCOT then takes approximately 1 week to execute the auction, review the results, and post the results for the Market Participants."
---

## Definition

The CRR Auction sells the available network capacity of the ERCOT transmission system that has not been allocated as PCRRs or sold in a previous auction, and lets CRR Owners offer CRRs they already hold. [e1]

## How it works

**Two auction types.** The CRR Monthly Auction is held once per month and sells one-month PTP Options and PTP Obligations for the following month. [e2] Twice a year a Long-Term Auction Sequence runs six successive auctions, starting with the next six-month period (January-June or July-December) and then the five periods after it. [e10][e3] The IMM describes this as CRRs offered up to three years (36 months) ahead, with the last long-term auction six months before real time. [e15] Each auction is a single-round, simultaneous auction across all products. [e5]

**How much is offered.** Auction capacity is 90% for the Monthly Auction, and for the Long-Term sequence 70%, 55%, 40%, 30%, 20% and 10% for the first through sixth six-month windows. [e4][e6] For a month in a Long-Term auction, the capacity offered is the expected network topology scaled to that percentage, minus previously allocated CRRs (also scaled to the percentage), minus CRRs already awarded in any earlier auction. [e16] The IMM explains the logic: congestion is harder to forecast far ahead, which raises the risk that payments to CRR holders exceed day-ahead congestion rent, so ERCOT sells a portion of capacity and raises the share in successive auctions. [e51]

**Bids and offers.** To bid or offer, an entity must become a CRR Account Holder and satisfy the financial assurance criteria required to participate. [e52] A Participating CRR Account Holder can only offer CRRs it owns of record at the time of the offer, and, in the saved Protocol text, multi-month offers can only be made in a Long-Term Auction Sequence (NPRR1288 would replace this with one-month strips only, upon system implementation; see Open items). [e17] A bid for a PTP Option cannot specify a non-positive Not-to-Exceed Price below the Minimum PTP Option Bid Price, while a PTP Obligation bid can specify a negative price. [e18] In the saved Protocol text, a 7x24 block may be bid in a Monthly Auction but not in a Long-Term Auction Sequence (NPRR1288 also has a pending replacement for this paragraph). [e19]

**Credit.** ERCOT enters into the auction system a CRR Auction credit limit for each Counter-Party, equal to the lesser of its Section 16 credit limit and its self-imposed limit, if provided. [e12] Before the auction ERCOT screens: if a Counter-Party's credit limit exceeds its credit exposure computed on bid volumes, the limit is ignored while the auction is solved. [e20] PTP Option offers have zero credit exposure. [e53] After preliminary results, a Counter-Party that falls short of post-auction collateral can be given until 1500 on the next Bank Business Day to post more, failing which ERCOT voids all of its bids and offers and reruns the auction without it, if rerunning is practicable. [e22]

**Clearing.** ERCOT uses a linear programming auction engine that selects the bids and offers that keep the solution simultaneously feasible and maximize awarded bid value less awarded offer cost. [e23] The CRR clearing price equals the Shadow Price for that CRR product. [e24] Awards are tested with the Simultaneous Feasibility Test, which confirms the system can support the awarded CRRs under normal conditions, while observing security constraints. [e7] It uses a DC power-flow model and is not a system reliability test. [e26] Elements already oversold in prior auctions and allocations are increased to match what has been sold or allocated, which ensures feasibility of the auction. [e27] Awarded CRRs do not become the winner's property and cannot be placed in its CRR account until the required CRR Invoice has been paid, except for a one-time auction following repossession or forfeiture under Sections 16.11.6.1.4 and 16.11.6.1.5; the saved text marks that exception for deletion upon system implementation of NPRR1023. [e25]

## Formula

The credit constraint for each Counter-Party b in the auction is written ACR(b) = AOBLCR(b) + AOPTCR(b) - AOBLCRO(b). [e46] AOBLCR is the auction credit requirement for all PTP Obligation bids submitted by the Counter-Party, AOPTCR is the auction credit requirement for all its PTP Option bids submitted, and AOBLCRO is the auction credit requirement for all its PTP Obligation offers submitted. [e54][e55][e47] The Protocols' variable list also defines a path-specific DAM-based adder, calculated as a 99th percentile of the average rolling consecutive DAM settled price for the reference source/sink over a month-equivalent period for each product type (18 days for 5x16, 8 days for 2x16, 28 days for 7x8). [e21]

Awarded auction offers are paid, and awarded auction bids charged, at the clearing price: the payment for PTP Obligation offers is OBLSAMT = (-1) x OBLPR x OBLS and the charge for bids is OBLPAMT = OBLPR x OBLP, where OBLPR is the clearing price of the PTP Obligation for the source and sink in that auction for the hour and OBLS and OBLP are the awarded MW of the account holder's PTP Obligation offers and bids for the source and sink pair. [e48][e49][e50][e56][e57] The Protocols give matching formulas for PTP Options.

## ERCOT context

**Revenue and who gets it.** The IMM says ERCOT distributes auction revenue to Load Serving Entities through CARD, by system-wide load ratio share for cross-zone CRRs and zonal share for same-zone CRRs. [e13] The Protocols credit the revenue to QSEs: same-zone-CMZ revenue (including PCRR revenue) on a zonal load ratio share and all other net revenue on an ERCOT-wide share, and the initial distribution is based on each QSE's LRS in the interval coincident with the ERCOT-wide peak 15-minute Settlement Interval for the month (NPRR1030 would change this to a DC Tie ratio share upon system implementation). [e28][e58] The IMM reports total CRR auction revenue of $832 million, $1,098 million, $1,442 million, $1,710 million and $1,810 million for 2021 through 2025 (OCR table, Figure 41), and growth of almost 6% in 2025 after 14% to 32% a year in 2021-2024. [e36][e8] In 2025 intrazonal CRRs drove the increase while cross-zone CRR revenue fell to its lowest value since 2021. [e37]

**Funding and shortfalls.** If day-ahead congestion rent equals or exceeds the net amounts due to CRR Owners in a Settlement Interval, ERCOT pays them and puts the excess in the CRR Balancing Account. [e29] If it is less, ERCOT short-pays each CRR Owner pro rata, using only amounts due for CRRs settled in both DAM and Real-Time and not amounts due to ERCOT for PTP Obligations the owner holds. [e30] In the shortfall hours, a charge is made on CRRs settled in the DAM that have positive Settlement prices. [e31] Surplus above the $10 million Balancing Account Fund cap goes to QSEs representing LSEs on monthly load ratio share. [e32] The IMM says shortfalls can occur when flows modeled in the auction exceed day-ahead flows, and that the last CRR short payment occurred in November 2020. [e40][e41] For 2025 the IMM's Figure 43 shows day-ahead congestion rent of $2,477 million against CRR payments of $2,185 million, a surplus of about $293 million, with every month fully funded; 2024 was $1,923 million against $1,684 million (OCR, $ millions). [e42][e43][e44] The IMM also says mandatory deration reduced 2025 CRR payments by $33 million, to a funding percentage of about 99%. [e45]

**Profitability.** The IMM says CRRs were profitable in every year except 2024, a loss of approximately 1.5%, and that profitability increased almost 21% in 2025. [e39]

**Participant timeline.** The ERCOT CRR handbook describes the typical monthly auction cycle: network model posted at least 10 business days before the transaction window opens (about two weeks ahead) [e33], a Market Notice and credit window about 10 days ahead [e60], and about one week for ERCOT to run the auction and post results. [e61] For a Long-Term auction the model is posted at least 20 business days (about four weeks) before the window. [e34] ERCOT's credit FAQ says that on CRR lock days only collateral received by ERCOT no later than 3 pm CT is reflected in the CRR portal and made available for the auction. [e35]

## Timeline

- 2020 (August): NPRR 1030 approved to allocate CARD payments for DC ties on their monthly load ratio shares; the IMM says in its 2025 report that the implementation project had not been initiated. [e38][e59]
- November 2020: last CRR short payment, per the IMM. [e41]
- November 2025: NPRR 1288 approved, per the IMM, removing multi-month blocks so participants now buy CRRs only for individual months. [e14]

## Key facts

- Monthly Auction: held monthly, sells one-month terms for the next month. [e2]
- Long-Term Auction Sequence: twice a year, six successive auctions of six-month terms. [e10][e3]
- Auction capacity: 90% monthly; 70% down to 10% across the Long-Term windows. [e4][e6]
- Single-round, simultaneous auction; clearing price equals the Shadow Price. [e5][e24]
- Total CRR auction revenue 2025: $1,810 million (OCR), up almost 6%. [e36][e8]
- CRR Balancing Account Fund cap: $10 million. [e32]
- NPRR 1288 (approved November 2025 per the IMM) ended multi-month block purchases. [e14]

## Say it like this

ERCOT sells CRRs in a monthly auction and in long-term sequences up to three years out, each time offering only a share of what the network can support, and it prices them at the shadow price of the constraint. Revenue goes back to load, and day-ahead congestion rent funds what CRR holders are paid.

## Common confusion

The auction is not the only source of CRRs: PCRRs are allocated outside it and PTP Options and PTP Obligations (other than those with Refund) can also be traded bilaterally. [e1][e11] The SFT is a market feasibility test that confirms the system can support the awarded CRRs; it is not a reliability study. [e7][e26] Auction revenue (what buyers pay ERCOT) is different from CRR payments (what ERCOT later pays holders from day-ahead congestion rent), and the IMM measures CRR profitability as the difference. [e39]

## Questions

### Why does the long-term capacity percentage shrink?

Auction capacity is 70% for the first six-month window sold and falls to 10% for the sixth, so less of the network is offered for the periods furthest out. [e6] The IMM says forecasting congestion is more uncertain the further ahead the auction is, which raises the risk of a shortfall, so ERCOT sells a portion of capacity and raises the share in later auctions. [e51]

### Who gets the auction revenue?

Load Serving Entities, through CARD (as the IMM describes it): cross-zone revenue by ERCOT-wide load ratio share and same-zone revenue by zonal share. [e13] Under the Protocols the credit goes to QSEs on the same basis. [e28]

### What stops ERCOT from over-selling the grid?

The Simultaneous Feasibility Test on the awarded set of CRRs, plus the limited auction capacity percentages. [e7][e4][e6] Elements oversold in earlier auctions are treated as having capacity equal to what was sold, so the auction stays feasible. [e27]

### How does the auction clear and at what price?

A linear programming engine picks the feasible set of bids and offers that maximizes awarded bid value less awarded offer cost, and the clearing price is the Shadow Price of the CRR product. [e23][e24]

### What happens if a participant lacks collateral after the auction?

If rerunning is practicable, ERCOT notifies it and allows until 1500 on the next Bank Business Day; if collateral is not received, its bids and offers are voided and the auction is rerun without it. [e22]

### What if a line trips between the auction and the day-ahead market?

The IMM says shortfalls can occur when the network flows modeled in the auction exceed the flows in the day-ahead market, often after unforeseen outages. Under the Protocols, if day-ahead congestion rent falls short, CRR Owners are short-paid pro rata and charged for positive-price CRRs. [e40][e30][e31] The IMM notes the last short payment was in November 2020 and that the balancing account covered every month of 2025. [e41][e44]

### Why did CRR holders lose money in 2024 but not in 2025?

The IMM reports CRRs lost about 1.5% in aggregate in 2024 and gained almost 21% in profitability in 2025, reversing a two-year decline; the saved text does not give a cause. [e39]

## Scenarios

### A load-serving QSE sees a large cross-zone CRR auction revenue line. Where does it come from?

- Cross-zone CRR revenue is allocated ERCOT-wide by load ratio share at the monthly coincident peak interval. [e13][e28]
- The IMM says cross-zone CRR revenue fell to its lowest value since 2021 in 2025 while intrazonal revenue grew. [e37]

## Open items

- NPRR1288: the IMM 2025 report says it was approved in November 2025 and eliminated multi-month blocks; the saved np-07 text still shows strip language in 7.5.1(1) and (4)(b)(i) with NPRR1288 replacement boxes marked "upon system implementation". Whether and when it was implemented is not in the saved sources. The strip rules above are the np-07 text in the snapshot.
- The OCR of IMM Figure 41 has a garbled column header; the years 2021-2025 are inferred from the order of the figure (the 2021, 2022, 2023 values match the OCR text of earlier IMM reports and 2025 matches the almost-6% growth statement).
- Matching PTP Option settlement formulas (7.5.6.1(2), 7.5.6.2(2)) and the PCRR charge formulas (7.5.6.3) were not reproduced here; see the PCRR topic.
- The Minimum PTP Option Bid Price in the Protocols is set by TAC review and an NPRR; the current value is only in the undated ERCOT training deck and was not used here.
- CRR Balancing Account formulas (7.9.3.1-7.9.3.4 equations) are equation images; only their prose rules are described.
