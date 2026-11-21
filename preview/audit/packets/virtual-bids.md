# Audit packet: Virtuals (Energy-Only Offers & Bids) (virtual-bids)

kind product · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Day-Ahead Market (DAM) Energy-Only Offer · text copy line 577

BEFORE: …mmitted Interval A Settlement Interval for which the Resource has been committed due to a DAM award. Day-Ahead Market (DAM) Energy Bid A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity. Day-Ahead Market (DAM) Energy-Only Offer 
QUOTE: A QSE's willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. DAM Energy-Only Offer Curves are not Resource-specific.
AFTER:  Day-Ahead Market (DAM) Resettlement Statement (see Settlement Statement) Day-Ahead Market (DAM) Statement (see Settlement Statement) Day-Ahead Operations The Day-Ahead process consisting of the DAM and Day-Ahead Reliability Unit Commitment (DRUC). Day-Ahead Reliability Unit Commitment (DRUC) A Reli…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Day-Ahead Market (DAM) Energy Bid · text copy line 573

BEFORE: …DAM) A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions. Day-Ahead Market (DAM)-Committed Interval A Settlement Interval for which the Resource has been committed due to a DAM award. Day-Ahead Market (DAM) Energy Bid 
QUOTE: A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity.
AFTER:  Day-Ahead Market (DAM) Energy-Only Offer A QSE's willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. DAM Energy-Only Offer Curves are not Resource-specific. Day-Ahea…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria, paragraph (2) · text copy line 1760 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: …creasing energy offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity; (d) The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) 
QUOTE: A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh.
AFTER:  (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. (4) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sin…

### e13 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, paragraph (3) · text copy line 1762 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: …rs and no more than two consecutive price/quantity pairs at the same price or quantity; (d) The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) 
QUOTE: The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW.
AFTER:  (4) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any c…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, paragraph (4) · text copy line 1764 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: … The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. (4) 
QUOTE: DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party.
AFTER:  4.4.9.5.2 DAM Energy-Only Offer Validation (1) A valid DAM Energy-Only Offer Curve is an offer that ERCOT has determined meets the criteria listed in Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria. (2) ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging Sys…

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, DAM Energy Bids, paragraph (1) · text copy line 1776 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: ….4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) 
QUOTE: A QSE must submit any DAM Energy Bids by 1000 for the effective DAM.
AFTER:  (2) A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM. 4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and …

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5, DAM Energy-Only Offer Curves, paragraph (1) · text copy line 1734 · heading above: 4.4.9.5 DAM Energy-Only Offer Curves

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.4.9.5 DAM Energy-Only Offer Curves (1) 
QUOTE: A QSE must submit any DAM Energy-Only Offer Curves by 1000 for the effective DAM.
AFTER:  (2) The DAM Energy-Only Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. (3) DAM Energy-Only Offer Curves are not Resource-specif…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, paragraph (2) · text copy line 1778 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: …et timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) A QSE must submit any DAM Energy Bids by 1000 for the effective DAM. (2) 
QUOTE: A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM.
AFTER:  4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and must include the following information: (a) The buying QSE; (b) The Settlement Point; (c) Fixed quantity block, variable quantity block, or curve indicator for the bid; (i) If a fixed quantity block, the single …

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, Day-Ahead Energy Payment, paragraph (1) · text copy line 2857 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 4.6.2 Day-Ahead Energy and Make-Whole Settlement 4.6.2.1 Day-Ahead Energy Payment (1) 
QUOTE: The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves.
AFTER:  The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p) The above variables are defined as follows: ------------------------------------------------------------…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section C, Day-Ahead Market Activity · text copy line 4733

BEFORE: …pate in the day-ahead market by submitting bids to buy electricity or offers to sell electricity for real-time delivery. These bids and offers include either (1) a threepart supply offer, which lets a seller include startup cost, minimum generation cost, and an incremental energy offer curve or (2) 
QUOTE: an energy-only, or virtual, bid or offer, which is a locationspecific transaction submitted either as a hedge or for speculative purposes.
AFTER:  1. Day Ahead Market Volume The day-ahead market clears offers and bids by matching supply and demand. In 2025, dayahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years. Participants also use PTP obligations schedu…

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.2, Day-Ahead Energy Charge, paragraph (1) · text copy line 2897 · heading above: 4.6.2.2 Day-Ahead Energy Charge

BEFORE: …ffers at Settlement Point p for the hour. q none A QSE. p none A Settlement Point. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 4.6.2.2 Day-Ahead Energy Charge (1) 
QUOTE: The Day-Ahead Energy Charge is made for all cleared DAM Energy Bids or cleared purchases from the bid portion of Energy Bid/Offer Curves.
AFTER:  This charge to each QSE for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAEPAMT _(q, p) = DASPP _(p) * DAEP _(q, p) The above variables are defined as follows: -------------------------------------------------------------------------------------------------…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.3, Real-Time Energy Imbalance Payment or Charge at a Hub, paragraph (1) · text copy line 5288 · heading above: 6.6.3.3 Real-Time Energy Imbalance Payment or Charge at a Hub

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.3 Real-Time Energy Imbalance Payment or Charge at a Hub (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Hub Settlement Point: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (d) The amount of its Self-Schedules with source specified at the Settlement Point; minus (e) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (f) The amount of its Energy Trades at the Settlement Point where the QSE is the seller.
AFTER:  (2) The payment or charge to each QSE for Energy Imbalance Service at a Hub for a given 15-minute Settlement Interval is calculated as follows: RTEIAMT _(q, p) = (-1) * RTSPP _(p) * {(SSSK _(q, p) * 1⁄4) + (DAEP _(q, p) * 1⁄4) + (RTQQEP _(q, p) * 1⁄4) - (SSSR _(q, p) * 1⁄4) - (DAES _(q, p) * 1⁄4) -…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section C, 1. Day Ahead Market Volume · text copy line 4735

BEFORE: …eration cost, and an incremental energy offer curve or (2) an energy-only, or virtual, bid or offer, which is a locationspecific transaction submitted either as a hedge or for speculative purposes. 1. Day Ahead Market Volume The day-ahead market clears offers and bids by matching supply and demand. 
QUOTE: In 2025, dayahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years.
AFTER:  Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market. Less than half of physical real-time generation in ERCOT is scheduled through the day-ahead market, so resource…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section B, Convergence between DAM and RT · text copy line 9489

BEFORE: …B. Convergence between DAM and RT In the previous market design, AS awards from the day-ahead market effectively created a physical obligation to provide reserves in real time. With the implementation of RTC, AS awards in the day-ahead market now function as financial positions, like energy awards. 
QUOTE: Since December 6, 2025, the day-ahead market has also allowed transactions in virtual AS, i.e., strictly financial positions that are not associated with any physical resources.
AFTER:  Ultimately, including virtual AS positions in the day-ahead market clearing should lead to greater convergence between day-ahead and real-time prices for AS. Table A2 shows the average prices for energy and each AS product in the day-ahead and real-time markets, as well as the corresponding DART pr…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing · text copy line 4679

BEFORE: …ces should converge when: (1) barriers to purchases and sales in either market are low, (2) sufficient information is available for market participants to develop accurate expectations of real-time prices, and (3) both markets accurately reflect the physical limitations of the transmission network. 
QUOTE: These conditions allow market participants to arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence.
AFTER:  Price convergence between the day-ahead and real-time markets is important because it leads to more efficient commitment of resources for use in real-time. The average difference between day-ahead and real-time spot prices shows whether persistent, predictable differences exist that participants sh…

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, Day-Ahead Energy Payment, paragraph (1), formula · text copy line 2857 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …ad Energy and Make-Whole Settlement 4.6.2.1 Day-Ahead Energy Payment (1) The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves. 
QUOTE: The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.2, Day-Ahead Energy Charge, paragraph (1), formula · text copy line 2897 · heading above: 4.6.2.2 Day-Ahead Energy Charge

BEFORE: …----------------------------------------------------------------------------------------------------------------------------- 4.6.2.2 Day-Ahead Energy Charge (1) The Day-Ahead Energy Charge is made for all cleared DAM Energy Bids or cleared purchases from the bid portion of Energy Bid/Offer Curves. 
QUOTE: This charge to each QSE for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAEPAMT _(q, p) = DASPP _(p) * DAEP _(q, p)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, paragraph (1)(c)(iii) · text copy line 1754 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: …y (in MW) for all hours offered in that block , which may clear at a Settlement Point Price less than the offer price for that block; (ii) If a variable quantity block, the single price (in $/MWh) and single "up to" quantity (in MW) contingent on the purchase of all hours offered in that block; and 
QUOTE: (iii) If a curve, a monotonically non-decreasing energy offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;
AFTER:  (d) The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. …

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6.1, paragraph (1)(c)(iii) · text copy line 1794 · heading above: 4.4.9.6.1 DAM Energy Bid Criteria

BEFORE: … quantity (in MW) for all hours bid in that block, which may clear at a Settlement Point Price greater than the bid price for that block; (ii) If a variable quantity block, the single price (in $/MWh) and single "up to" quantity (in MW) contingent on the purchase of all hours bid in that block; and 
QUOTE: (iii) If a curve, a monotonically non-increasing energy bid curve for price (in $/MWh) and monotonically increasing for quantity (in MW) with no more than 10 price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity.
AFTER:  (d) The first and last hour of the bid; and (e) The expiration time and date of the bid. (2) The minimum amount for each DAM Energy Bid that may be bid is one MW. (3) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect o…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6.1, paragraph (2) · text copy line 1800 · heading above: 4.4.9.6.1 DAM Energy Bid Criteria

BEFORE: …id curve for price (in $/MWh) and monotonically increasing for quantity (in MW) with no more than 10 price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity. (d) The first and last hour of the bid; and (e) The expiration time and date of the bid. (2) 
QUOTE: The minimum amount for each DAM Energy Bid that may be bid is one MW.
AFTER:  (3) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any c…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.2, paragraph (2) · text copy line 1770 · heading above: 4.4.9.5.2 DAM Energy-Only Offer Validation

BEFORE: …tlement Points for the QSE or for any combination of QSEs within the same Counter-Party. 4.4.9.5.2 DAM Energy-Only Offer Validation (1) A valid DAM Energy-Only Offer Curve is an offer that ERCOT has determined meets the criteria listed in Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria. (2) 
QUOTE: ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging System if the offer was rejected or was considered invalid for any reason, with the exception of paragraph (4) of Section 4.4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline.
AFTER:  (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) A QSE must submit any DAM Energy Bids by 1000 for the effective DAM. (2) A DAM Energy…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (1) · text copy line 1917 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …========+ +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.4.10 Credit Requirement for DAM Bids and Offers (1) 
QUOTE: Each QSE's ability to bid and offer in the DAM is subject to credit exposure from the QSE's bids and offers being within the credit limit for DAM participation established for the entire Counter-Party of which the QSE is part, as specified in item (1) of Section 16.11.4.6.2, Credit Requirements for DAM Participation, and taking into account the credit exposure of accepted DAM bid and offers of the Counter-Party's other QSEs.
AFTER:  (2) DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party's credit limit for DAM participation. (3) ERCOT shall reject the QSE's individual bids and offers whose …

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (2) · text copy line 1919 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …imit for DAM participation established for the entire Counter-Party of which the QSE is part, as specified in item (1) of Section 16.11.4.6.2, Credit Requirements for DAM Participation, and taking into account the credit exposure of accepted DAM bid and offers of the Counter-Party's other QSEs. (2) 
QUOTE: DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party's credit limit for DAM participation.
AFTER:  (3) ERCOT shall reject the QSE's individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party's credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable.…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (3) · text copy line 1921 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …accepted DAM bid and offers of the Counter-Party's other QSEs. (2) DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party's credit limit for DAM participation. (3) 
QUOTE: ERCOT shall reject the QSE's individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party's credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable.
AFTER:  (4) The QSE may revise and resubmit such rejected bids and offers described in item (3) above, provided that the resubmitted bids and offers are valid and within the Counter-Party's credit limit for DAM participation adjusted for all accepted DAM bids and offers of the Counter-Party's QSE's limit a…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(a)(i) · text copy line 1931 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …culate credit exposure for bids and offers in the DAM as follows: (a) For a DAM Energy Bid or for each MW portion of the bid portion of an Energy Bid/Offer Curve, the credit exposure shall be calculated as the quantity of the bid multiplied by a bid exposure price that is calculated as follows: (i) 
QUOTE: If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is less than or equal to zero, the bid exposure price for that quantity will equal zero.
AFTER:  (ii) If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is greater than zero, the bid exposure price for that quantity will equal the greater of zero or the sum of (A) and (B): (A) The lesser of: (1) The d^(th) percentile of the Day-Ahead Settlement Poin…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(a)(ii) · text copy line 1933 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …e calculated as the quantity of the bid multiplied by a bid exposure price that is calculated as follows: (i) If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is less than or equal to zero, the bid exposure price for that quantity will equal zero. (ii) 
QUOTE: If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is greater than zero, the bid exposure price for that quantity will equal the greater of zero or the sum of (A) and (B):
AFTER:  (A) The lesser of: (1) The d^(th) percentile of the Day-Ahead Settlement Point Price (DASPP) for the hour over the previous 30 days; and (2) The bid price. (B) The value e1 multiplied by (bid price minus (A)) when the bid price is greater than (A). (1) The value e1 is computed as the ep1^(th) perce…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(a)(ii)(A)-(B) · text copy line 1935 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …n or equal to zero, the bid exposure price for that quantity will equal zero. (ii) If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is greater than zero, the bid exposure price for that quantity will equal the greater of zero or the sum of (A) and (B): 
QUOTE: (A) The lesser of: (1) The d^(th) percentile of the Day-Ahead Settlement Point Price (DASPP) for the hour over the previous 30 days; and (2) The bid price. (B) The value e1 multiplied by (bid price minus (A)) when the bid price is greater than (A).
AFTER:  (1) The value e1 is computed as the ep1^(th) percentile of Ratio1 for the 30 days prior to the Operating Day, where Ratio1 is calculated daily as follows: Ratio1 = Min[1, Max[0, (∑_(h=1,24) $\sum_{p}^{\ }\ $(DAM EOB Cleared _(h, p) * DASPP _(h, p) - DAM EOO Cleared _(h, p) * DASPP _(h, p) - DAM TPO…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(b)(ii) · text copy line 2060 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …edit exposure will be increased by the product of the quantity of the offer multiplied by the dp^(th) percentile of the hourly difference between Real-Time Settlement Point Price and DASPP (where any negative differences are set to zero) over the previous 30 days for the hour multiplied by e3. (ii) 
QUOTE: That has an offer price that is greater than the a^(th) percentile of the DASPP for the hour over the previous 30 days, credit exposure will be increased by the product of the quantity of the offer multiplied by the dp^(th) percentile of the hourly difference between Real-Time Settlement Point Price and DASPP (where any negative differences are set to zero) over the previous 30 days for the hour multiplied by e3.
AFTER:  (iii) ERCOT may, in its sole discretion, use a percentile other than the dp^(th) percentile of the hourly difference between Real-Time Settlement Point Price and DASPP (where any negative differences are set to zero) over the previous 30 days in determining credit exposure per this paragraph (6)(b)…

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (6)(i) · text copy line 2100 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …3 for each Counter-Party no less than once every two weeks. ERCOT shall provide written or electronic notice to the Counter-Party of the basis for ERCOT's assessment, or change of assessment, of the exposure adjustment variable established for the Counter-Party and the impact of the adjustment. (i) 
QUOTE: The value of each exposure adjustment e1, e2, and e3 is a value between zero and one, rounded to the nearest hundredth decimal place, set by ERCOT by Counter-Party.
AFTER:  The values ERCOT establishes for e1, e2, and e3 for a Counter-Party shall be applied equally to the portfolio of all QSEs represented by such Counter-Party. (i) ERCOT must re-examine DAM credit parameters immediately if Counter-Party exceeds 90% of its Available Credit Limit (ACL) available to DAM.…

### e31 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, paragraph (8) · text copy line 2120 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …ith a possible adder on the e1 variable, at ERCOT's sole discretion, for a period of not less than seven days and until ERCOT is satisfied that the Counter-Party has and will comply with the conditions set forth in this Section. In no case shall the adder result in an e1 value greater than one. (8) 
QUOTE: Beginning no later than 0800 and ending at 0945 each Business Day, ERCOT shall post to the MIS Certified Area, approximately every 15 minutes, each active Counter-Party's remaining Available Credit Limit (ACL) for that day's DAM and the time at which the report was run.
AFTER:  (9) After the DAM results are posted, ERCOT shall post once each Business Day on the MIS Certified Area each active Counter-Party's calculated aggregate DAM credit exposure and its aggregate DAM credit exposure per transaction type, to the extent available, as it pertains to the most recent DAM Ope…

### e32 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, paragraph (1)(b)-(g) · text copy line 4679 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node

BEFORE: …=======================================================================================+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (b) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (c) The amount of its Day-Ahead Market (DAM) Energy Bids cleared in the DAM at the Settlement Point; plus (d) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (e) The amount of its Self-Schedules with source specified at the Settlement Point; minus (f) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (g) The amount of its Energy Trades at the Settlement Point where the QSE is the seller.
AFTER:  (2) The payment or charge to each QSE for Energy Imbalance Service at a Resource Node Settlement Point for a given 15-minute Settlement Interval is calculated as follows: RTEIAMT _(q, p) = (-1) * {[]([](RESREV _(q, r, gsc, p))) + ([]WSLAMTTOT _(q, r, p)) + ([]ESRNWSLAMTTOT _(q, r, p)) + RTSPP _(p) …

### e33 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, paragraph (1) · text copy line 5145 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:
AFTER:  (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (d) The amount of its Self-Sche…

### e34 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Day-Ahead Market Performance, section C, 1. Day Ahead Market Volume (page 38 (OCR)) · text copy line 4860 · heading above: 26.26 Much of this load can be attributed to CLRs carrying ancillary services.

BEFORE: …hich is a location-specific transaction not tied to an actual generation resource or load. These are referred to as virtual bids and offers, submitted either as a hedge or for speculative purposes. 1. Day Ahead Market Volume The day-ahead market clears offers and bids by matching supply and demand. 
QUOTE: In 2024, the volume of day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 61% of real-time load, in line with recent years.
AFTER:  Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and other transactions outside the ERCOT wholesale market to hedge exposure to real-time prices. 38 | 2024 State of the Market Report / / Day-Ahead Market Performance Day-Ahead Scheduled Capacity (GW) Less t…

### e35 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Day-Ahead Market Performance, Day Ahead Market Volume (OCR) · text copy line 3275 · heading above: 5.8 GW of newly installed solar capacity entered the market with an effective peak serving

BEFORE: …l load shown as hedged in this figure (the difference between the red day-ahead purchases and the blue real-time load hedged) is load served by PTP obligations scheduled to a load zone from other locations. Figure 23 shows that the volume of day-ahead energy purchases provided through a combination 
QUOTE: of generator-specific offers (also known as three-part offers) and virtual energy offers was 59% of real-time load in 2023, remaining at the volume observed in 2022.
AFTER:  Although it may appear 54 The values are simple averages, rather than load-weighted averages as shown in Figures 2 and 4 and Table 1. 38 | 2022 State of the Market Report / / Day-Ahead Market Performance that many loads are still subjecting themselves to greater risk by not locking in a day-ahead p…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive summary, RTC discussion (OCR) · text copy line 813

BEFORE: … the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. 
QUOTE: Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves.
AFTER:  These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. Some of this low participa…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section B, Convergence between DAM and RT (page A-4 (OCR)) · text copy line 9487

BEFORE: …ecember 5, through February, 2024-25 for Pre-RTC and 2025-26 for RTC Data "!! U9:;! !:.:;"!! ;"!!:.:;"<!!! ;"<!!!:.:;C<!!! !"#A%&DA&"AE))*+A,+-.*/AM1O G! )! E! D! C! %! $! #! "! ! +,-./0N /0N +,-./0N /0N +,-./0N /0N +,-./0N /0N +,-./0N /0N 2N/P 4P/P /2RS4 /2RT+ //P B. Convergence between DAM and RT 
QUOTE: In the previous market design, AS awards from the day-ahead market effectively created a physical obligation to provide reserves in real time. With the implementation of RTC, AS awards in the day-ahead market now function as financial positions, like energy awards.
AFTER:  Since December 6, 2025, the day-ahead market has also allowed transactions in virtual AS, i.e., strictly financial positions that are not associated with any physical resources. Ultimately, including virtual AS positions in the day-ahead market clearing should lead to greater convergence between da…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A2 (page 163 (OCR)) · ocr copy line 6943, OCR page 163

BEFORE: … the Market Report a ===== page 163 (OCR) ===== Appendix: Real-Time Co-Optimization Table A2: Convergence in Energy and AS Prices in the Day-Ahead and Real-Time Markets December 5, 2026, through February 2026 Average Average Average Day-Ahead Real-Time DART Price Price Premium $ per MWh $ per MWh % 
QUOTE: Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420
AFTER:  Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium. Excluding RegDown, elevated day- ahead market prices on Decembe…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section B, after Table A2 (OCR) · text copy line 9544

BEFORE: …y days of RTC. Two events account for a disproportionate share of this premium. Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products. 
QUOTE: Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices.
AFTER:  We expect this premium to diminish over the year and to be significantly lower in the 2026 annual average. C. AS Position Switching during sunrise/sunset One benefit of RTC is that the time resolution of the real-time market allows intra-hour variation in AS awards in response to changes in system …

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e7, e1, e2, e14): The IMM describes an energy-only, or virtual, bid or offer as a location-specific transaction submitted as a hedge or for speculative purposes. [e7] In the Protocols the instruments at a Settlement Point in the DAM are the DAM Energy-Only Offer (a QSE's willingness to sell energy at or above a price at a specific Settlement Point in the DAM) [e1] and the DAM Energy Bid (a proposal to buy energy in the DAM at a Settlement Point). [e2][e14] The saved Protocol text does not itself say that every DAM Energy Bid is a virtual.
- **How it works #1** (cites e1, e15, e5, e3, e13, e19, e20, e21, e22): Both instruments can be made only in the DAM, and a QSE must submit them by 1000 for the effective DAM. [e1][e15][e5] Unlike a Three-Part Supply Offer, a DAM Energy-Only Offer Curve is not tied to a Resource. [e1] An offer curve must fall between -$250.00 per MWh and the DAM system-wide offer cap, with a minimum of one MW. [e3][e13] An offer curve is monotonically non-decreasing in price and quantity with at most ten price/quantity pairs and no more than two consecutive pairs at the same price or quantity. [e19] A bid curve is monotonically non-increasing in price and increasing in quantity, with the same limits on pairs, and a DAM Energy Bid has a one MW minimum. [e20][e21] If ERCOT rejects an offer as invalid it notifies the QSE through the Messaging System and the QSE may resubmit within the market timeline, except where the offer breaks the rule against combining virtuals into a synthetic PTP. [e22]
- **How it works #2** (cites e6, e8, e16, e17, e9, e32, e33): A cleared offer is paid, and a cleared bid is charged, based on the Day-Ahead Settlement Point Price at its Settlement Point. [e6][e8][e16][e17] The position does not stay in the DAM: the cleared quantities enter the QSE's Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price. At a Hub the amounts are DAM Energy Bids cleared (added) and energy offers cleared (subtracted), alongside self-schedules and energy trades. [e9] The Resource Node calculation lists the same DAM cleared bids and offers, [e32] and the Load Zone calculation is built the same way (the Load Zone text is quoted only by its header here). [e33] The cleared quantity is therefore paid or charged at the Day-Ahead Settlement Point Price in the DAM and again, in the imbalance calculation, at the Real-Time Settlement Point Price. [e16][e17][e9]
- **How it works #4** (cites e23, e24, e25): **Credit for DAM bids and offers.** A QSE's ability to bid and offer in the DAM is subject to its credit exposure being within the credit limit for DAM participation set for the whole Counter-Party, taking into account the other QSEs' accepted bids and offers. [e23] Bids and offers of all of a Counter-Party's QSEs are accepted in the order submitted so long as accepted exposure does not exceed that limit. [e24] ERCOT rejects an individual bid or offer whose exposure exceeds the limit and notifies the QSE through the MIS Certified Area. [e25]
- **How it works #5** (cites e26, e27, e28, e29, e30, e31): Bid exposure: a DAM Energy Bid priced at or below zero has a bid exposure price of zero. [e26] For a bid priced above zero, the exposure price is the greater of zero or the sum of (A) the lesser of the d-th percentile of the Day-Ahead Settlement Point Price for the hour over the previous 30 days and the bid price, and (B) a factor e1 times the amount by which the bid price exceeds (A). [e27][e28] Exposure is the quantity of the bid times that bid exposure price. [e27] Offer exposure: for a DAM Energy-Only Offer priced above the a-th percentile of the hourly DASPP over the previous 30 days, exposure is increased by the offer quantity times the dp-th percentile of the positive hourly difference between Real-Time and Day-Ahead Settlement Point Prices over the previous 30 days times e3. [e29] The exposure adjustment values e1, e2 and e3 are each between zero and one, rounded to the nearest hundredth, and set by ERCOT by Counter-Party. [e30] The percentile parameters a, d and dp are not given as numbers in the saved text. During the morning each Business Day, from no later than 0800 to 0945, ERCOT posts each active Counter-Party's remaining Available Credit Limit for that day's DAM approximately every 15 minutes. [e31]
- **ERCOT context #1** (cites e35, e34, e10, e12): Day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 59% of real-time load in 2023 (as the IMM's 2023 report states, remaining at the 2022 volume), 61% in 2024 and 62% in 2025, which the IMM calls in line with recent years. [e35][e34][e10] The IMM says market participants can arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence. [e12]
- **ERCOT context #2** (cites e11, e36, e37, e38, e39) FLAG number-not-in-quote: 2026, 36%, 420%: Since December 6, 2025, the DAM has also allowed virtual Ancillary Service positions, which are strictly financial positions not associated with any physical resources. [e11] The IMM describes these as financial hedges on the real-time price for reserves. [e36] With the implementation of RTC, the IMM says day-ahead AS awards no longer create a physical obligation to provide reserves in real time but function as financial positions, like energy awards. [e37] In the IMM's Table A2 (labelled "December 5, 2026, through February 2026" in the OCR, which appears to be a typo for 2025), the day-ahead average price was $50.21 per MWh for energy against $37.03 in real time, a 36% DART premium; for ECRS the day-ahead average was $3.67 against $0.71 in real time, a 420% premium. [e38] The IMM says virtual offers for AS were not introduced until December 6, so physical-resource offers drove the elevated prices on RTC go-live day. [e39]
- **Key facts #5** (cites e26): - A bid priced at or below zero carries zero bid exposure price in the DAM credit calculation. [e26]
- **Key facts #6** (cites e35, e34, e10): - Day-ahead purchases through generator-specific and virtual offers: 59% of real-time load in 2023, 61% in 2024, 62% in 2025. [e35][e34][e10]
- **Say it like this #1** (cites e12): A virtual is the IMM's term for an energy-only bid or offer at a Settlement Point, which is not tied to a Resource. The cleared quantity settles at the day-ahead price and then enters the real-time imbalance calculation at the real-time price, so the position earns or loses the difference between the two. The IMM links arbitrage of day-ahead versus real-time differences to price convergence. [e12]
- **Common confusion #1** (cites e1, e2, e11, e23): Virtuals are not PTP Obligations. A virtual is a single-location energy position at one Settlement Point. [e1][e2] A PTP Obligation bid names a source and a sink (see the PTP Obligation topic). The IMM also uses "virtual" for the new day-ahead Ancillary Service positions, which are a separate product from energy virtuals. [e11] A virtual is also not exempt from credit: DAM bids and offers are tested against the Counter-Party's DAM credit limit. [e23]
- **Questions #4** (cites e6, e9, e32): It is cleared in the DAM at its Settlement Point, and the cleared quantity then enters the Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price, as the Hub and Resource Node texts show. [e6][e9][e32]
- **Questions #8** (cites e37, e11): Under RTC day-ahead AS awards are financial positions like energy awards, and the IMM expects virtual AS positions in day-ahead clearing to lead to greater convergence between day-ahead and real-time AS prices. [e37][e11]
- **Questions #10** (cites e24, e25): Bids and offers are accepted in the order submitted until the limit would be exceeded; ERCOT rejects an individual bid or offer whose exposure exceeds the limit and notifies the QSE. [e24][e25]
- **Questions #12** (cites e4): The Protocols prohibit combining energy-only offers, energy bids and PTP Obligation bids to create the net effect of a single PTP between electrically similar Settlement Points, for the QSE or any combination of QSEs in the same Counter-Party. [e4]
- **Link to dam** (cites e1, e14, e15, e5): part-of Day-Ahead Market (DAM): Both instruments may be made only in the DAM, and both are submitted by 1000 for the effective DAM. [e1][e14][e15][e5]
- **Link to dart-spread** (cites e7, e12): related DART Spread: The IMM describes virtual bids and offers as location-specific transactions, and says market participants arbitrage predictable differences between day-ahead and real-time prices. [e7][e12]
- **Link to ptp-obligation** (cites e4): related PTP Obligation: A QSE may not combine energy-only offers, energy bids and PTP Obligation bids to create the net effect of a PTP between electrically similar points. [e4]
- **Link to three-part-supply-offer** (cites e1): contrasts-with Three-Part Supply Offer: A Three-Part Supply Offer is Resource-specific, while a DAM Energy-Only Offer Curve is not. [e1]
- **Link to settlement-point** (cites e1, e2, e16, e17): related Settlement Point: Each offer and bid is at a specific Settlement Point, and the payment or charge for cleared quantities is calculated from that point's Day-Ahead Settlement Point Price. [e1][e2][e16][e17]
- **Link to qse** (cites e15, e5): related QSE (Qualified Scheduling Entity): Only a QSE can submit these offers and bids. [e15][e5]
- **Link to ruc** (cites e1): related RUC (Reliability Unit Commitment: DRUC/HRUC): Virtual offers have no Resource and no Startup Offer, so they are separate from the three-part offers RUC uses for commitments. [e1]
- **Link to ancillary-services** (cites e11): related Ancillary Services (AS): Since December 6, 2025 the DAM has also allowed virtual AS positions, which are strictly financial positions. [e11]
- **Link to rtc-b** (cites e37): related RTC+B (Real-Time Co-optimization + Batteries): With RTC the IMM says day-ahead AS awards function as financial positions like energy awards. [e37]
- **Link to credit-tpe** (cites e23): related Credit, Collateral & TPE: A QSE's DAM bids and offers must fit within the Counter-Party's credit limit for DAM participation. [e23]
- **Link to trading-hub** (cites e9): related Trading Hubs: Hubs are one of the Settlement Point types at which DAM bids and offers settle in Real-Time as imbalance. [e9]

