---
id: crr
name: CRR (Congestion Revenue Right)
aliases:
- CRR
- Congestion Revenue Right
- CRRs
kind: product
domain: congestion
level: 1
lenses:
- analyst
- trading
- congestion
- portfolio
- structuring
as_of: '2026-11-21'
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
- to: load-ratio-share
  type: related
  note: CRR auction revenue is distributed to QSEs representing LSEs by zonal or ERCOT-wide Load Ratio Share. [e51]
- to: credit-tpe
  type: related
  note: CRR positions drive TPES, one of the two components of TPE, and CRR auction credit limits lock collateral. [e58][e31]
- to: shadow-price
  type: related
  note: 'The handbook says a CRR clearing price equals the CRR product shadow price: binding constraint shadow prices times shift factors. [e45]'
- to: shift-factor
  type: related
  note: CRR product prices sum constraint shadow prices times shift factors; PTP Options include only non-negative ones. [e45]
- to: binding-constraint
  type: related
  note: Oversold flows on a facility cause shortfalls that reduce payments to CRRs sinking at generator locations affecting that facility. [e61]
- to: uplift
  type: related
  note: The balancing account surplus is returned to load, and shortfalls are charged to CRR owners. [e37][e38]
depth: deep
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
  - id: e19
    source: np-07
    locator: "Section 7.9.1.1, paragraph (2)"
    quote: "For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions."
  - id: e20
    source: np-07
    locator: "Section 7.9.1.2, paragraph (2)"
    quote: "For PTP Options that sink at a Resource Node, the PTP Option payment may be reduced due to Transmission Elements that are oversold in previous CRR Auctions."
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
  - id: e21
    source: np-07
    locator: "Section 7.5.1, Nature and Timing, paragraph (1)"
    quote: "(1) The Congestion Revenue Right (CRR) Auction auctions the available network capacity of the ERCOT transmission system not allocated as described in Section 7.4, Preassigned Congestion Revenue Rights Overview, or sold in a previous auction. The CRR Auction also allows CRR Owners an opportunity to offer for sale CRRs that they hold. Each CRR Auction allows for the purchase of CRR products as described in paragraph (5) of Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, in strips of one or more consecutive months and allows for the reconfiguration of all CRR blocks that were previously awarded for the months covered by that CRR Auction."
  - id: e22
    source: np-07
    locator: "Section 7.5.1, paragraph (1), pending box"
    quote: "[NPRR1288: Replace paragraph (1) above with the following upon system implementation:]"
  - id: e23
    source: imm-som-2025
    locator: "page 87 (OCR), Chapter V.E.1, CRR Auction Timeline"
    quote: "NPRR 1288, approved in November 2025, eliminated this block purchase option by removing multi-month blocks to reduce auction optimization time. As a result, participants now purchase CRRs only for individual months, even in long-term auctions that cover multiple future months."
  - id: e24
    source: np-07
    locator: "Section 7.5.1, paragraph (5)"
    quote: "(5) For each CRR Auction, the CRR Auction Capacity shall be defined as follows: (a) For the CRR Monthly Auction, 90%. (b) For any CRR Auction that is part of a CRR Long-Term Auction Sequence, 70%, 55%, 40%, 30%, 20%, or 10% for the first, second, third, fourth, fifth, and sixth six-month windows sold in the sequence, respectively."
  - id: e25
    source: np-07
    locator: "Section 7.5.1, paragraph (2)"
    quote: "(2) The CRR Network Model must be based on, but is not the same as, the Network Operations Model."
  - id: e26
    source: np-07
    locator: "Section 7.5.1, paragraph (2)(b)"
    quote: "(b) The CRR Network Model must use the peak Load conditions of the month or set of months being modeled."
  - id: e27
    source: np-07
    locator: "Section 7.3, paragraphs (2)-(3)"
    quote: "(2) PTP Options are evaluated hourly in each CRR Auction as the positive power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points in the quantity represented by the CRR bid or offer (MW), excluding all negative flows on all directional network elements. (3) PTP Obligations are evaluated hourly in each CRR Auction as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW)."
  - id: e28
    source: np-07
    locator: "Section 7.3, paragraph (5)"
    quote: "(5) CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x16 blocks for hours ending 0700-2200, Saturday and Sunday, and NERC holidays in one-month strips; and (c) 7x8 blocks for hours ending 0100-0600 and hours ending 2300-2400 Sunday through Saturday, in one-month strips."
  - id: e29
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (1)"
    quote: "(1) The CRR Auction must be a single-round, simultaneous auction for selling the CRRs available for all auction products. ERCOT shall enter into the CRR Auction system a credit limit for each Counter-Party that has at least one CRR Account Holder. A Counter-Party’s CRR Auction credit limit is equal to the lesser of the credit limit as determined in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation, or, if provided, the Counter-Party’s self-imposed CRR Auction credit limit for the CRR Monthly Auction or for a time-of-use within a CRR Auction held as part of a CRR Long-Term Auction Sequence."
  - id: e30
    source: np-07
    locator: "Section 7.5.5.1, Creditworthiness, paragraph (1)"
    quote: "(1) The CRR Auction system prevents a CRR Account Holder from being awarded bids and offers that exceed the lesser of the CRR Account Holder’s self-imposed credit limit or the credit limit as prescribed in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation."
  - id: e31
    source: np-16
    locator: "Section 16.11.4.6.1, paragraph (3)"
    quote: "(3) ERCOT shall assign the ACL locked for CRR Auction for each Counter-Party participating in any CRR Auction as the lower of the Counter-Party’s: (a) Requested credit limit, as described in paragraph (1) above; (b) ACLC, calculated in accordance with paragraph (1)(a) of Section 16.11.4.6, Determination of Counter-Party Available Credit Limits, at the time of the closure of the CRR bid submission window; or (c) Pre-auction screening credit exposure amount, calculated in accordance with paragraph (2) of Section 7.5.5.3, Auction Process."
  - id: e32
    source: ercot-credit-faqs
    locator: "FAQ, excess collateral"
    quote: "Excess collateral is defined as the total Financial Security (Cash, Letters of Credit and Surety Bond) less the sum of 1) TPEA, 2) TPES and 3) CRR Locked ACL."
  - id: e33
    source: ercot-credit-faqs
    locator: "FAQ, timelines for collateral and CRR unlock"
    quote: "For CRR auctions. Collateral needed for CRR auctions can be sent at any time. However, collateral received and credited to a Counter-Party’s collateral account on any day will only be reflected in the CRR portal the following day except on days where allocated collateral for an auction is locked (“CRR lock days”). On CRR lock days, collateral/Available Credit Limits as reflected in the CRR portal will be updated throughout the day. However, it is important to note that only collateral received by ERCOT no later than 3 pm CT will be reflected in the CRR portal and made available for the auction."
  - id: e34
    source: np-07
    locator: "Section 7.7.1, Determination of the PTP Option Award Charge, paragraphs (1)-(2)"
    quote: "(1) ERCOT will calculate a Point-to-Point (PTP) Option Award Charge for each Congestion Revenue Right (CRR) Account Holder for each PTP Option bid awarded where the clearing price for the PTP Option bid awarded is less than the Minimum PTP Option Bid Price. (2) The Technical Advisory Committee (TAC) shall review the current Minimum PTP Option Bid Price at least annually and may recommend to the ERCOT Board a change to this value by submitting a Nodal Protocol Revision Request (NPRR)."
  - id: e35
    source: np-07
    locator: "Section 7.6, CRR Balancing Account, paragraphs (1)-(2)"
    quote: "(1) In the Day-Ahead Market (DAM), if the congestion rent is equal to or greater than the net amounts due to all Congestion Revenue Right (CRR) Owners for any Settlement Interval, then ERCOT shall pay the net amounts due to the CRR Owners and put any excess amount into the CRR Balancing Account (CRRBA). (2) In the DAM, if the congestion rent is less than the net amounts due to all CRR Owners for any Settlement Interval, then ERCOT shall short-pay each CRR Owner on a prorated basis and shall keep track of how much each CRR Owner has been short-paid. The proration must be calculated using only the amounts due to the CRR Owner for CRRs settled in both the DAM and Real-Time and not using amounts due to ERCOT for Point-to-Point (PTP) Obligations owned by the CRR Owner."
  - id: e36
    source: np-07
    locator: "Section 7.6, paragraph (3)"
    quote: "(3) ERCOT shall pay any positive balance in the CRRBA to each short-paid CRR Owner, with the amount paid to each CRR Owner being the lesser of (a) a prorated amount based on the short-paid amount for that CRR Owner compared to the total short-paid amount, and (b) the short-paid amount for that CRR Owner. Any remaining positive balance in the CRRBA will first be used to fund the CRRBA fund up to the fund cap, as described in Section 7.9.3.5, CRR Balancing Account Closure, and any surplus must be allocated to all Qualified Scheduling Entities (QSEs) on the QSE’s Load Ratio Share (LRS) in the interval coincident with the ERCOT-wide peak 15-minute Settlement Interval for the month."
  - id: e37
    source: np-07
    locator: "Section 7.9.3.5, CRR Balancing Account Closure, paragraph (1)"
    quote: "(1) After the calculation of refunds described in Section 7.9.3.4, Monthly Refunds to Short-Paid CRR Owners, any CRR Balancing Account and CRR Auction PTP Option Award Charge Total in excess of the refunds described in Section 7.9.3.4 will first be used to fund the CRR Balancing Account Fund if the prior month’s CRR Balancing Account Fund Balance is less than the CRR Balancing Account Fund Cap. Any surplus that remains from the CRR Balancing Account and CRR Auction PTP Option Award Charge Total above the CRR Balancing Account Fund cap is paid to the QSEs representing Load Serving Entities (LSEs) based on a monthly Load Ratio Share (LRS). The monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month. The CRR Balancing Account Fund Cap is $10 million."
  - id: e38
    source: np-07
    locator: "Section 7.9.3.3, Shortfall Charges to CRR Owners, paragraph (1)"
    quote: "(1) For each Operating Hour, if the Day-Ahead Congestion Rent is less than the total payment to all CRR Owners for the CRRs settled in the DAM, a charge will be made to each CRR Owner for any of its CRRs settled in the DAM that have positive Settlement prices."
  - id: e39
    source: np-07
    locator: "Section 7.9.3.2, Credit to CRR Balancing Account, paragraph (1)"
    quote: "The credit to the CRR Balancing Account for a given Operating Hour is calculated as follows: CRRBACR = Max (0, (DACONGRENT + DACRRCRTOT + DACRRCHTOT)) Where: DACRRCRTOT = DAOBLCRTOT + DAOBLRCRTOT + DAOPTAMTTOT + DAOPTRAMTTOT DACRRCHTOT = DAOBLCHTOT + DAOBLRCHTOT"
  - id: e40
    source: np-07
    locator: "Section 7.9.3.3, paragraph (2)"
    quote: "DACRRSAMT _(o) = DACRRSAMTTOT * CRRCRRSDA _(o) Where: DACRRSAMTTOT = (-1) * Min (0, DACONGRENT + DACRRCRTOT + DACRRCHTOT)"
  - id: e41
    source: np-07
    locator: "Section 7.9.3.4, Monthly Refunds to Short-Paid CRR Owners, paragraph (1)"
    quote: "(1) On a monthly basis, a refund may be paid to the CRR Owners that have a shortfall charge for any Operating Hour in a month."
  - id: e42
    source: np-07
    locator: "Section 7.9.2.1, paragraph (2)"
    quote: "(2) ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e43
    source: np-07
    locator: "Section 7.9.2.1, paragraph (3)"
    quote: "(3) In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e44
    source: ercot-crr-handbook
    locator: "CRR Market User Interface Handbook v4.3 (June 27, 2022), Introduction"
    quote: "CRRs may be used as either a financial hedge or a financial investment. When used as a hedge, a CRR locks in the price of congestion at the purchase price of the CRR. When purchased as an investment, it may be used as a financial tool to speculate whether the congestion rent will be greater than the purchase price."
  - id: e45
    source: ercot-crr-handbook
    locator: "Handbook v4.3, CRR Clearing Prices"
    quote: "A CRR Clearing Price is equal to the corresponding Shadow Price for that CRR product. The Shadow Price for a CRR product is the impact in the objective function of a one MW change to the CRR product. - For PTP Obligations, this is calculated as the sum of the products of the binding constraint shadow prices and their shift factors. - For PTP options, it is the sum of the products of the binding constraint shadow prices and their shift factors, including only non-negative shift factors."
  - id: e46
    source: ercot-crr-handbook
    locator: "Handbook v4.3, CRR Hedge Types (Obligations and Options)"
    quote: "A PTP Obligation allows negative revenue values, meaning that it is possible for an AH to owe ERCOT money depending on the results in an applicable DAM. A PTP Option, on the other hand, does not allow negative revenue values and therefore does not have the same DAM payout risk."
  - id: e47
    source: imm-som-2025
    locator: "page 87 (OCR), Chapter V.E.1, CRR Auction Timeline"
    quote: "ERCOT holds long-term auctions twice each year and offers CRRs up to three years, or 36 months, in advance of the real-time market. It conducts subsequent long-term auctions every six months, with the final auction occurring six months prior to real-time."
  - id: e48
    source: imm-som-2025
    locator: "page 87 (OCR), Chapter V.E.1"
    quote: "To mitigate this risk, ERCOT sells only a portion of the rated transmission capacity for each CRR path in long-term auctions, then increases the percentage of capacity available in successive auctions until the final monthly auction, as illustrated in Figure 40."
  - id: e49
    source: imm-som-2025
    locator: "page 88 (OCR), Chapter V.E.2, CRR Auction Revenues"
    quote: "The total value of CRR auction revenue increased by almost 6% from 2024 to 2025. This growth rate was notably lower than in prior years, as annual CRR revenue growth from 2021-2024 ranged from around 14% to 32%. Intrazonal CRRs drove the increase in total CRR revenue, while revenue for Cross Zone CRRs fell to its lowest value since 2021."
  - id: e50
    source: imm-som-2025
    locator: "page 88 (OCR), Figure 41 inset table"
    quote: "Total $832 $1,098 $1,442 $1,710 $1,810"
  - id: e51
    source: imm-som-2025
    locator: "page 88 (OCR), Chapter V.E.2, CARD"
    quote: "CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month’s coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval."
  - id: e52
    source: imm-som-2025
    locator: "page 88 (OCR), Chapter V.E.2"
    quote: "To date, only DC tie operators have clearly exhibited such behavior."
  - id: e53
    source: imm-som-2025
    locator: "page 89 (OCR), footnote 42"
    quote: "Despite being approved in 2020, the project to implement NPRR 1030 has not been initiated yet."
  - id: e54
    source: imm-som-2025
    locator: "page 89 (OCR), Chapter V.E.3, CRR Profitability"
    quote: "Overall, CRRs have been profitable annually in every year except 2024, when they produced a loss of approximately 1.5%. In 2025, CRR profitability increased by almost 21%, reversing a two-year decline."
  - id: e55
    source: imm-som-2025
    locator: "page 89 (OCR), Chapter V.E.4, CRR Funding Levels"
    quote: "ERCOT pays less than the target value only when day-ahead congestion rent is insufficient, which can occur when the network flows modeled in the CRR auction exceed the flows in the day-ahead market. This occurrence is often the result of unforeseen outages or other factors that reduce transmission capability between the CRR auction and the DAM."
  - id: e56
    source: imm-som-2025
    locator: "page 90 (OCR), CRR Shortfall Settlement"
    quote: "If revenue remains insufficient after this adjustment, ERCOT allocates the remaining shortfall across all holders of positively valued CRRs through a prorated charge, which reduces their overall payments. The last CRR short payment occurred in November 2020."
  - id: e57
    source: imm-som-2025
    locator: "page 91 (OCR), CRR Funding Levels"
    quote: "Although the day-ahead market produced enough revenue to fully fund CRRs, ERCOT derated many CRRs in 2025 under the mandatory deration process. CRR deratings reduced payments to CRR holders by $33 million and reduced ERCOT’s overall funding percentage to approximately 99%, comparable to the previous year. Derating CRRs when the market produces sufficient revenue introduces unnecessary risk for CRR buyers and could ultimately reduce CRR auction revenues."
  - id: e58
    source: imm-som-2025
    locator: "Chapter IV (OCR), Collateral Requirements"
    quote: "The second, TPES (TPE-Secured), is based on exposure to positional risk from CRRs."
  - id: e59
    source: imm-som-2025
    locator: "Chapter IV (OCR), Collateral Requirements, Figure 33 discussion"
    quote: "Figure 33 shows that over the last two years, TPES has been the larger component of TPE by a significant margin on average. Both years had relatively low wholesale energy prices and high CRR market participation."
  - id: e60
    source: imm-som-2025
    locator: "page 90 (OCR), Day-ahead congestion rent table"
    quote: "2021 2022 2023 2024 2025 $700 $ Millions © Day-Ahead Congestion Rent $1,402 $2,365 $2,069 $1,923 $2,477"
  - id: e61
    source: imm-som-2025
    locator: "page 89-90 (OCR), CRR Shortfall Settlement"
    quote: "When oversold flows cause a shortfall on a specific transmission facility, ERCOT reduces payments to CRRs that sink at generator locations affecting that facility."
  - id: e62
    source: np-07
    locator: "Section 7.6, pending box [NPRR1030] replacing paragraph (3)"
    quote: "[NPRR1030: Replace paragraph (3) above with the following upon system implementation:]"
  - id: e63
    source: np-07
    locator: "Section 7.9.3.5, pending box [NPRR1030] replacing paragraph (1)"
    quote: "[NPRR1030: Replace paragraph (1) above with the following upon system implementation:]"
---

## Definition

A Congestion Revenue Right is a financial instrument that entitles its holder to be charged or to receive compensation (congestion rent), depending on the instrument, when the ERCOT Transmission Grid is congested in the DAM or in real time. [e1] CRRs do not represent a right to receive, or an obligation to deliver, physical energy. [e2]

## How it works

**Products.** ERCOT auctions PTP Options, PTP Obligations and Flowgate Rights. [e5] A CRR runs from a designated source Settlement Point to a different sink Settlement Point; the exception is a Flowgate Right, which names a network element instead. [e7] A PTP Option only pays: the holder receives the positive sink-minus-source price difference. [e5][e6] A PTP Obligation can produce either a payment or a charge. [e5] In the auction ERCOT evaluates PTP Options hourly on the positive flows they create on directional network elements (excluding negative flows) and PTP Obligations on both positive and negative flows. [e27] CRRs are auctioned in Time Of Use blocks: 5x16 (hours ending 0700-2200, Monday through Friday excluding NERC holidays), 2x16 (the same hours on weekends and NERC holidays) and 7x8 (hours ending 0100-0600 and 2300-2400, every day), in one-month strips. [e28]

**Ways to get one.** CRRs can be acquired in the CRR Auction (ERCOT also lets owners sell CRRs there), through PCRR allocations, bilaterally, and, for PTP Obligations, by bidding in the DAM. [e16][e17][e3] PCRRs are allocated to eligible municipally owned utilities and electric cooperatives. [e4] The auction sells network capacity not allocated as PCRRs or sold in a previous auction. [e21]

**Auction schedule and capacity.** The Monthly Auction is held once a month and sells one-month terms for the following month; twice a year a Long-Term Auction Sequence sells six successive auctions of six-month terms. [e8][e9][e18] ERCOT only offers a fraction of network capacity: the CRR Auction Capacity is 90% for the Monthly Auction and 70%, 55%, 40%, 30%, 20% or 10% for the first through sixth six-month windows of a sequence. [e24] The IMM explains the rationale: congestion forecasts get less certain over longer horizons, raising the risk that payments exceed day-ahead congestion rent, so ERCOT sells a smaller share early and more later. [e47][e48] The auction model is the CRR Network Model, based on but not the same as the Network Operations Model, using peak Load conditions of the months modeled. [e25][e26]

**Clearing and credit.** The auction is a single-round, simultaneous auction. [e29] The auction system will not award bids and offers beyond the lesser of the account holder's self-imposed limit and the credit limit prescribed in Section 16.11.4.6.1. [e30] The ACL locked for a CRR Auction is the lower of the requested limit, the Counter-Party's available credit limit for the CRR Auction (ACLC) at the close of the CRR bid submission window, and the pre-auction screening exposure. [e31] ERCOT's credit FAQ defines excess collateral as total Financial Security less TPEA, TPES and CRR Locked ACL, and says only collateral received by 3 pm CT on CRR lock days is reflected in the portal for the auction. [e32][e33] A PTP Option Award Charge applies when a PTP Option bid clears below the Minimum PTP Option Bid Price. [e34]

**Pricing.** The ERCOT CRR handbook (version 4.3, June 27, 2022) says a CRR may be used as a financial hedge, which locks in the price of congestion at the CRR's purchase price, or as an investment. [e44] It also says a CRR clearing price equals the shadow price of that CRR product: for Obligations the sum of binding-constraint shadow prices times shift factors, and for Options only the non-negative shift factors. [e45]

**DAM settlement.** In the DAM, a PTP Obligation owner is paid or charged the Day-Ahead Settlement Point Price difference between sink and source, and a PTP Option owner is paid that difference if it is positive. [e11][e12] A PTP Obligation payment (for an Obligation with a positive value) or a PTP Option payment can be reduced when the CRR sinks at a Resource Node and directional network elements or Transmission Elements were oversold in earlier CRR Auctions. [e19][e20]

**Real-time settlement.** ERCOT pays or charges the QSE of each PTP Obligation acquired in the DAM the real-time Settlement Point Price difference between sink and source, and if ERCOT cannot execute the DAM it pays or charges PTP Obligation owners on the real-time difference. [e42][e43]

**Funding: the balancing account.** If DAM congestion rent is at least the net amount due to CRR Owners, ERCOT pays them and puts any excess into the CRR Balancing Account; if rent is short, ERCOT short-pays owners pro rata and tracks the amount. [e35] Hourly, a credit is the greater of zero and DAM congestion rent plus the CRR payment and charge totals (as defined in 7.9.3.2). [e39] Shortfall charges fall on CRR Owners' CRRs with positive settlement prices, calculated as the negated minimum of zero and that same sum. [e38][e40] Monthly refunds may be paid to owners with shortfall charges. [e41] Excess first repays short-paid owners; the rest goes to fund the rolling CRR Balancing Account Fund up to a cap of $10 million, and any surplus above the cap is paid to QSEs representing LSEs on monthly Load Ratio Share, the 15-minute LRS for the peak-Load Settlement Interval. [e36][e37] NPRR1030 pending boxes would replace Section 7.6 paragraph (3) and Section 7.9.3.5 paragraph (1) upon system implementation; the text above is the text now in the Protocols, and the pending replacements are not described as the rule in force. [e62][e63]

**Auction revenue distribution.** Net auction revenue from CRRs sourcing and sinking in the same 2003 congestion management zone is credited to QSEs in that zone by zonal Load Ratio Share, and all other net auction revenue is allocated by ERCOT-wide Load Ratio Share. [e10] The IMM calls this the CARD process and says only DC tie operators have clearly exhibited the incentive to raise consumption at the peak; it notes the project to implement NPRR 1030, approved in 2020, has not been initiated. [e51][e52][e53]

## Formula

DAM settlement for a CRR (ERCOT handbook, v4.3): hourly revenue to the holder of an Obligation is the MWh amount times the sink LMP minus the source LMP; for an Option the same, but zero if that difference is negative. [e46] The hourly balancing-account credit is the greater of zero and the sum of Day-Ahead Congestion Rent and the CRR payment and charge totals, where the payment total is the sum of the Obligation, Obligation-with-refund, Option and Option-with-refund payment totals and the charge total is the sum of the Obligation and Obligation-with-refund charge totals. [e39] The shortfall total is the negated minimum of zero and that same sum, and each owner's charge is that total times the owner's factor (CRRCRRSDA). [e40]

## ERCOT context

ERCOT sells CRRs in a monthly auction and in a long-term auction sequence held twice per year, each sequence being six auctions of six-month terms. [e8][e18][e9] The IMM says long-term auctions offer CRRs up to 36 months ahead. [e47] The IMM says NPRR 1288, approved in November 2025, removed multi-month blocks so participants now buy single months only; the saved Protocol text still shows NPRR1288 as a pending box, and the IMM's statement is not reconciled with it. [e23][e22]

The IMM's 2025 numbers: auction revenues rose 6% (versus 14-32% annual growth in 2021-2024), intrazonal CRRs drove the increase and cross-zone CRR revenue fell to its lowest since 2021, with total auction revenue shown as $1,810 million in its table. [e13][e49][e50] CRR profitability rose 21% after a 1.5% net loss in 2024. [e14][e54] Surplus payments to load were $293 million with the balancing account fully funding CRRs every month. [e15] Day-ahead congestion rent in the IMM's table is $2,477 million for 2025. [e60]

On funding, the IMM says ERCOT pays less than target only when day-ahead congestion rent is insufficient, usually when flows modeled in the auction exceed those in the DAM after unforeseen outages; oversold flows on a facility reduce payments to CRRs sinking at affected generators, and any remaining shortfall is prorated across positively valued CRRs. [e55][e61][e56] The last CRR short payment occurred in November 2020 per the IMM. [e56] In 2025 mandatory derations still cut payments by $33 million and the funding percentage to about 99%, and the IMM argues derating when revenue is sufficient adds unnecessary risk for buyers. [e57]

CRRs also matter for credit: the IMM says TPES, based on CRR positional risk, was the larger component of TPE in 2024 and 2025. [e58][e59]

## Key facts

- CRRs are financial; no physical energy is delivered. [e2]
- PTP Options can only pay; PTP Obligations can pay or charge. [e5]
- The Monthly Auction is held once per calendar month for the following month; the CRR Auction Capacity is 90%. [e8][e24]
- A Long-Term Auction Sequence is six successive auctions of six-month terms, held twice per year, at 70%, 55%, 40%, 30%, 20% and 10% capacity. [e9][e18][e24]
- CRR Balancing Account Fund Cap: $10 million. [e37]
- 2025 CRR auction revenue grew about 6% to a total shown as $1,810 million; profitability rose 21%. [e13][e14][e50]
- 2025 surplus payments to load totaled $293 million. [e15]
- Mandatory derations cut 2025 payments by $33 million (IMM). [e57]

## Say it like this

A CRR is a financial hedge on the price difference between two ERCOT points, paid out on DAM (and in some cases real-time) congestion. An obligation can cost you money if the path flows the wrong way; an option cannot. [e5][e46]

## Common confusion

CRRs are not transmission rights to move power. They do not entitle the holder to physical energy. [e2] Also, PTP Obligation bids in the DAM are a different way to acquire a position than the CRR auction, though both pay on the sink-minus-source difference. [e3][e11] The CRR auction revenue is not kept by ERCOT: it is distributed to load by Load Ratio Share. [e10]

## Questions

### What is the difference between a PTP Option and a PTP Obligation?

An Option can only produce payments to the holder, equal to the positive sink-minus-source price difference. An Obligation can produce a payment or a charge, so it can lose money when the price difference is negative. [e5][e6]

### How can a market participant get a CRR?

Through the CRR Auction, a PCRR allocation (for eligible municipal utilities and cooperatives), bilateral trades, or by bidding for PTP Obligations in the DAM. [e16][e17][e3][e4]

### Where does the money from CRR auctions go?

It is credited to QSEs on a Load Ratio Share basis: zonal for CRRs that source and sink within the same 2003 congestion management zone, and ERCOT-wide for the rest. [e10]

### Why does ERCOT sell only a fraction of capacity in long-term auctions?

The IMM says congestion becomes harder to forecast the further ahead it is, which raises the risk that payments exceed DAM congestion rent, and says ERCOT sells a portion of capacity in long-term auctions and raises the percentage in successive auctions until the final monthly auction. The Protocol percentages are 70% for the first six-month window of a sequence, falling to 10% for the sixth, and 90% for the Monthly Auction. [e47][e48][e24]

### What if DAM congestion rent is less than what CRR owners are owed?

ERCOT short-pays owners pro rata (the IMM says payments to CRRs sinking at generators on oversold facilities are reduced first) and tracks the short-pay; later surplus first repays short-paid owners, then fills a $10 million fund. [e35][e36][e37][e61][e56]

### Why does a PTP Obligation carry more risk than an Option?

An Obligation owner is paid or charged the sink-minus-source difference, so it can produce a charge when that difference is negative, while an Option cannot go negative. [e11][e46][e5]

### Who loses if a CRR is derated?

CRR owners: the IMM says 2025 deratings reduced payments by $33 million even though day-ahead rent covered CRRs, and calls this unnecessary risk for buyers. [e57]

## Scenarios

### A load-serving QSE buys a PTP Option from a Resource Node to its Load Zone. What does it pay in the DAM?

- In the DAM the Option owner is paid the sink-minus-source Day-Ahead price difference only if positive. [e12]
- The Option was bought at the auction clearing price, which the handbook ties to constraint shadow prices times shift factors. [e45]
- If the CRR sinks at a Resource Node on an oversold element, the payment (for an Obligation, when it has a positive value) may be reduced. [e19][e20]

## Open items

- NPRR1288 (one-month strips in the auction) is a pending box in Section 7.5.1 of the saved np-07, but the IMM 2025 report says it was approved in November 2025 and now applies; the effective date is not in the saved sources.
- The monthly refund and balancing account allocation text under NPRR1030 (DC Tie and ratio shares) is pending and was not treated as current; the IMM says implementation has not begun.
- The CRR credit limit calculation (Section 16.11.4.6) beyond the ACL-locked rule, and the auction exposure formula ACR, were not read in full.
- The handbook is version 4.3 dated June 27, 2022; later changes to its descriptions are not in the saved sources.
