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

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing · text copy line 4681

BEFORE: …to develop accurate expectations of real-time prices, and (3) both markets accurately reflect the physical limitations of the transmission network. These conditions allow market participants to arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence. 
QUOTE: Price convergence between the day-ahead and real-time markets is important because it leads to more efficient commitment of resources for use in real-time.
AFTER:  The average difference between day-ahead and real-time spot prices shows whether persistent, predictable differences exist that participants should arbitrage over time. Figure 30 shows the annual average day-ahead and real-time prices for the past five years. It also shows the average absolute diff…

## Statements to check

- **Definition #1** (cites e1, e2, e14, e7): A virtual, in ERCOT, is a DAM Energy-Only Offer (a QSE's willingness to sell energy at or above a price at a specific Settlement Point in the DAM) or a DAM Energy Bid (a proposal to buy energy at a Settlement Point in the DAM). [e1][e2][e14] The IMM describes an energy-only, or virtual, bid or offer as a location-specific transaction submitted as a hedge or for speculative purposes. [e7]
- **How it works #1** (cites e1, e15, e5, e3, e13): Both instruments can be made only in the DAM, and a QSE must submit them by 1000 for the effective DAM. [e1][e15][e5] Unlike a Three-Part Supply Offer, a DAM Energy-Only Offer Curve is not tied to a Resource. [e1] An offer curve must fall between -$250.00 per MWh and the DAM system-wide offer cap, with a minimum of one MW. [e3][e13]
- **How it works #2** (cites e6, e8, e16, e17, e9): A cleared offer is paid, and a cleared bid is charged, based on the Day-Ahead Settlement Point Price at its Settlement Point. [e6][e8][e16][e17] The position does not stay in the DAM: at a Hub, for example, the amounts of DAM Energy Bids and energy offers cleared in the DAM are included in the QSE's Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price. [e9] In effect, at a Hub, the DAM-cleared position is settled against the real-time price, so it earns or loses the difference between the two.
- **How it works #3** (cites e4): There is a guard against disguising a congestion position: energy-only offers, energy bids and PTP Obligation bids may not be combined to create the net effect of one PTP Obligation between electrically similar Settlement Points. [e4]
- **ERCOT context #1** (cites e10, e12): In 2025 day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years. [e10] The IMM says market participants can arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence. [e12]
- **ERCOT context #2** (cites e11): Since December 6, 2025, the DAM has also allowed virtual Ancillary Service positions, which are strictly financial positions not associated with any physical resources. [e11]
- **Key facts #1** (cites e1, e15, e5): - DAM Energy-Only Offers are not Resource-specific; both offers and bids are DAM-only and due by 1000. [e1][e15][e5]
- **Key facts #2** (cites e3, e13): - Offer curves must lie between -$250.00 per MWh and the DASWCAP, with a one MW minimum. [e3][e13]
- **Key facts #3** (cites e6, e8, e16, e17): - Cleared offers are paid and cleared bids are charged using the Day-Ahead Settlement Point Price. [e6][e8][e16][e17]
- **Key facts #4** (cites e4): - Virtuals may not be combined with PTP Obligation bids to replicate a PTP between electrically similar points. [e4]
- **Key facts #5** (cites e11): - Virtual AS positions have been allowed in the DAM since December 6, 2025. [e11]
- **Say it like this #1** (cites e12): A virtual is a purely financial day-ahead trade at a Settlement Point: you buy or sell energy in the DAM and it unwinds at the real-time price, so you make or lose the day-ahead-to-real-time spread there. It needs no physical asset, and arbitrage of day-ahead versus real-time differences is what the IMM links to price convergence. [e12]
- **Common confusion #1** (cites e1, e2, e11): Virtuals are not PTP Obligations. A virtual is a single-location energy position at one Settlement Point. [e1][e2] A PTP Obligation bid names a source and a sink (see the PTP Obligation topic). The IMM also uses "virtual" for the new day-ahead Ancillary Service positions, which are a separate product from energy virtuals. [e11]
- **Questions #2** (cites e1, e6): An Energy-Only Offer is a willingness to sell at a Settlement Point and is not Resource-specific. [e1] A Three-Part Supply Offer is tied to a Resource (see the Three-Part Supply Offer topic). In the DAM, payment goes to either kind of cleared sale. [e6]
- **Questions #4** (cites e6, e9): It is cleared in the DAM at its Settlement Point, and the cleared quantity then enters the Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price, as the Hub text shows. [e6][e9]
- **Questions #6** (cites e12, e18): Because market participants can arbitrage predictable day-ahead and real-time differences, resulting in price convergence, and the IMM says convergence leads to more efficient commitment of resources for use in real-time. [e12][e18]
- **Link to dam** (cites e1, e14, e15, e5): part-of Day-Ahead Market (DAM): Both instruments may be made only in the DAM, and both are submitted by 1000 for the effective DAM. [e1][e14][e15][e5]
- **Link to dart-spread** (cites e7, e12): related DART Spread: The IMM describes virtual bids and offers as location-specific transactions, and says market participants arbitrage predictable differences between day-ahead and real-time prices. [e7][e12]
- **Link to ptp-obligation** (cites e4): related PTP Obligation: A QSE may not combine energy-only offers, energy bids and PTP Obligation bids to create the net effect of a PTP between electrically similar points. [e4]
- **Link to three-part-supply-offer** (cites e1): contrasts-with Three-Part Supply Offer: A Three-Part Supply Offer is Resource-specific, while a DAM Energy-Only Offer Curve is not. [e1]
- **Link to settlement-point** (cites e1, e2, e16, e17): related Settlement Point: Each offer and bid is at a specific Settlement Point, and the payment or charge for cleared quantities is calculated from that point's Day-Ahead Settlement Point Price. [e1][e2][e16][e17]
- **Link to qse** (cites e15, e5): related QSE (Qualified Scheduling Entity): Only a QSE can submit these offers and bids. [e15][e5]
