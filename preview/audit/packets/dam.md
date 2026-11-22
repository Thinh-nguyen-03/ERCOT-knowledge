# Audit packet: Day-Ahead Market (DAM) (dam)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Day-Ahead Market (DAM) · text copy line 565

BEFORE: …ive is used to populate the Data Warehouse. Data Warehouse De-normalized data stored in a schema, physically optimized to handle high volumes of data and concurrent user access, and generally lightly indexed. Day-Ahead The 24-hour period before the start of the Operating Day. Day-Ahead Market (DAM) 
QUOTE: A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions.
AFTER:  Day-Ahead Market (DAM)-Committed Interval A Settlement Interval for which the Resource has been committed due to a DAM award. Day-Ahead Market (DAM) Energy Bid A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity. Day-Ahead Marke…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1, Introduction, paragraph (3) · text copy line 237 · heading above: 4.1 Introduction

BEFORE: …ation of "Average Incremental Energy Cost" (AIEC) 4-122 Day-Ahead Operations 4.1 Introduction (1) The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions. (2) Participation in the DAM is voluntary. (3) 
QUOTE: DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval.
AFTER:  (4) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, DAM Energy Bids, paragraph (1) · text copy line 1776 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: ….4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) 
QUOTE: A QSE must submit any DAM Energy Bids by 1000 for the effective DAM.
AFTER:  (2) A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM. 4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and …

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.1, Day-Ahead Settlement Point Prices for Resource Nodes · text copy line 2750 · heading above: 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes

BEFORE: …----------------+ 4.6 DAM Settlement 4.6.1 Day-Ahead Settlement Point Prices (1) The Day-Ahead Settlement Point Price (DASPP) calculations are described in this Section for Resource Nodes, Load Zones, Hubs, and logical Resource Nodes. 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes (1) 
QUOTE: The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process.
AFTER:  4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: D…

### e10 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.3, Settlement for PTP Obligations Bought in DAM · text copy line 3307 · heading above: 4.6.3 Settlement for PTP Obligations Bought in DAM

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.6.3 Settlement for PTP Obligations Bought in DAM (1) 
QUOTE: ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point.
AFTER:  The charge or payment to each QSE for a given Operating Hour of its cleared PTP Obligation bids with each pair of source and sink Settlement Points is calculated as follows: DARTOBLAMT _(q, (j, k)) = DAOBLPR _((j, k)) ^(*) RTOBL _(q, (j, k)) Where: DAOBLPR _((j, k)) = DASPP _(k) - DASPP _(j) The ab…

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, Communicating DAM Results, paragraph (6) · text copy line 2713 · heading above: 4.5.2 Communicating DAM Results

BEFORE: … a Resource Node or Day-Ahead MCPC is greater than $0.05/MWh; (b) The price correction would require ERCOT to change more than ten DAM Settlement Point Prices and Day-Ahead MCPCs; or (c) The absolute value change to any DAM Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh. (6) 
QUOTE: All DAM LMPs, MCPCs, and Settlement Point Prices are final at 1000 of the second Business Day after the Operating Day.
AFTER:  (a) However, after DAM LMPs, MCPCs, and Settlement Point Prices are final, if ERCOT determines that prices qualify for a correction pursuant to paragraph (4) above and that ERCOT will seek ERCOT Board review of such prices, it shall notify Market Participants and describe the need for such correcti…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4632

BEFORE: …sure. Until RTC was implemented, ancillary services awarded in the DAM implied a physical obligation to provide reserves. Otherwise, the DAM is a voluntary financial market that creates no physical obligations from market awards. Key insights from about the ERCOT day-ahead market in 2025 include: • 
QUOTE: The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh.
AFTER:  This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • Three-part offers account for only 58% of …

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets · text copy line 812

BEFORE: …orward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. 
QUOTE: Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time.
AFTER:  Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves. These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the …

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4644

BEFORE: …ute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • 
QUOTE: Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load.
AFTER:  Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast. • ERCOT's total collateral remai…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (2) · text copy line 2518 · heading above: 4.5.1 DAM Clearing Process

BEFORE: … Process and Timing Deviations, extending the start time of the execution of the DAM clearing process by an amount of time at least as long as the duration of the processing delay plus ten minutes. In no event shall the extension exceed more than one hour from when the processing delay is resolved. 
QUOTE: (2) ERCOT shall complete a Day-Ahead Simultaneous Feasibility Test (SFT). This test uses the Day-Ahead Updated Network Model topology and evaluates all Congestion Revenue Rights (CRRs) for feasibility to determine hourly oversold quantities.
AFTER:  (3) The purpose of the DAM is to economically and simultaneously clear offers and bids described in Section 4.4, Inputs into DAM and Other Trades. (4) The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand C…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5, DAM Energy-Only Offer Curves, paragraphs (2)-(3) · text copy line 1736 · heading above: 4.4.9.5 DAM Energy-Only Offer Curves

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.4.9.5 DAM Energy-Only Offer Curves (1) A QSE must submit any DAM Energy-Only Offer Curves by 1000 for the effective DAM. 
QUOTE: (2) The DAM Energy-Only Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. (3) DAM Energy-Only Offer Curves are not Resource-specific.
AFTER:  4.4.9.5.1 DAM Energy-Only Offer Curve Criteria (1) Each DAM Energy-Only Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Settlement Point; (c) The fixed quantity block, variable quantity block, or curve indicator for the offer; (i) If a …

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, paragraphs (2)-(3) · text copy line 1760 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: …n-decreasing energy offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity; (d) The first and last hour of the offer; and (e) The expiration time and date of the offer. 
QUOTE: (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW.
AFTER:  (4) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any c…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.3, Day-Ahead Make-Whole Settlements, paragraph (4) · text copy line 3004 · heading above: 4.6.2.3 Day-Ahead Make-Whole Settlements

BEFORE: …a Resource will not be eligible for Day-Ahead Make-Whole Payment Startup Cost compensation if the Resource was considered by the DAM as not having a cost to start due to the DAM commitment period being contiguous with a self-committed hour, as described in Section 4.4.9.1, Three-Part Supply Offers. 
QUOTE: (3) A QSE that has a Three-Part Supply Offer cleared in the DAM is eligible for Day-Ahead Make-Whole Payment energy cost compensation in a DAM-committed Operating Hour, if, for the Resource associated with the offer the generator's breakers were closed, as indicated by a telemetered Resource Status of On-Line, for at least one minute during the DAM-committed Operating Hour. (4) The Day-Ahead Make-Whole Payment guarantees the QSE that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost calculated based on the Startup Cap, the Minimum Energy Cap, and the Energy Offer Curve capped by the Energy Offer Curve Cap defined under Section 4.4.9.3.3, Energy Offer Curve Cost Caps.
AFTER:  (5) If a Generation Resource is eligible for startup or energy cost compensation in the Day-Ahead Make-Whole payment, then Ancillary Service revenue from the hours committed in the DAM will be included in its make-whole calculation for that Resource. (6) For purposes of this Section 4.6.2.3, the te…

### e49 · `ercot-nprr1008-board-report` · tier 1 · NPRR1008 Board Report (Real-Time Co-optimization, Section 4 Day-Ahead Operations) (Board approved 2020-12-08)
locator: NPRR1008 Revision Description · text copy line 106

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | Revision Description | | 
QUOTE: This NPRR updates Day-Ahead Operations in the Protocols to address changes associated with the implementation of RTC.
AFTER:  Specifically, this NPRR addresses the following Key Principles: | | | | | | | | | | - KP1.1 - Ancillary Service Demand Curves and Current Market Price Adders | | | | | | | | | | - KP1.2 - System-Wide Offer Cap and Power Balance Penalty Curve | | | | | | | | | | - KP1.3 - Offering and Awarding of An…

## Statements to check (new or changed since the last audit)

- **Link to rtm** (cites e3): contrasts-with Real-Time Market (RTM): The RTM settles on 15-minute intervals, while the DAM settles on one-hour intervals from the DAM clearing. [e3]
- **Link to ptp-obligation** (cites e10): composed-of PTP Obligation: PTP Obligation bids are cleared in the DAM and settled on the Settlement Point Price difference between sink and source. [e10]
- **Link to virtual-bids** (cites e7, e22): related Virtuals (Energy-Only Offers & Bids): DAM Energy Bids and DAM Energy-Only Offer Curves are instruments in the DAM. [e7][e22]
- **Link to three-part-supply-offer** (cites e16): related Three-Part Supply Offer: Three-Part Supply Offers are one of the offer types the DAM clears, and the IMM reports how little of the DAM energy they represent. [e16]
- **Link to spp** (cites e3, e8, e11): determines SPP (Settlement Point Price): DAM Settlement Point Prices come from DAM LMPs and are final at 1000 of the second Business Day after the Operating Day. [e3][e8][e11]
- **Link to dart-spread** (cites e13) FLAG number-not-in-quote: 2025: related DART Spread: The IMM reports the average DAM price premium and average absolute price difference for 2025. [e13]
- **Link to ancillary-services** (cites e1, e15): related Ancillary Services (AS): The DAM co-optimizes Ancillary Service capacity with energy, and since RTC the awards are financial positions. [e1][e15]
- **Link to ruc-make-whole** (cites e29): related RUC Make-Whole & Clawback: A DAM-committed generator with a cleared Three-Part Supply Offer can receive a Day-Ahead Make-Whole Payment. [e29]
- **Link to offer-cap** (cites e23): related Offer Caps (HCAP / LCAP / SWCAP): DAM Energy-Only Offer Curves are limited to the range of -$250 per MWh to the DASWCAP. [e23]
- **Link to crr** (cites e20): related CRR (Congestion Revenue Right): The DAM clearing runs a Simultaneous Feasibility Test that evaluates all CRRs for feasibility. [e20]
- **Link to rtc-b** (cites e49, e15): related RTC+B (Real-Time Co-optimization + Batteries): NPRR1008 updated Day-Ahead Operations for the implementation of RTC, and the IMM says RTC made DAM awards strictly financial positions. [e49][e15]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The day-ahead market is ERCOT's voluntary forward market where energy, ancillary services and PTP congestion positions are cleared the day before, on hourly prices. It lets you lock in a price and a congestion position, and whatever you do not take there is settled at real-time prices.

