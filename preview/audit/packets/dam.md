# Audit packet: Day-Ahead Market (DAM) (dam)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Day-Ahead Market (DAM) · text copy line 565

BEFORE: …ive is used to populate the Data Warehouse. Data Warehouse De-normalized data stored in a schema, physically optimized to handle high volumes of data and concurrent user access, and generally lightly indexed. Day-Ahead The 24-hour period before the start of the Operating Day. Day-Ahead Market (DAM) 
QUOTE: A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions.
AFTER:  Day-Ahead Market (DAM)-Committed Interval A Settlement Interval for which the Resource has been committed due to a DAM award. Day-Ahead Market (DAM) Energy Bid A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity. Day-Ahead Marke…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1, Introduction, paragraphs (1)-(2) · text copy line 233 · heading above: 4.1 Introduction

BEFORE: …rve Charge 4-118 4.6.4.2.4 Non-Spinning Reserve Service Charge 4-119 4.6.4.2.5 ERCOT Contingency Reserve Service Charge 4-120 4.6.4.2.6 Dispatchable Reliability Reserve Service Charge 4-121 4.6.5 Calculation of "Average Incremental Energy Cost" (AIEC) 4-122 Day-Ahead Operations 4.1 Introduction (1) 
QUOTE: The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions.
AFTER:  (2) Participation in the DAM is voluntary. (3) DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements u…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1, Introduction, paragraph (3) · text copy line 237 · heading above: 4.1 Introduction

BEFORE: …ation of "Average Incremental Energy Cost" (AIEC) 4-122 Day-Ahead Operations 4.1 Introduction (1) The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions. (2) Participation in the DAM is voluntary. (3) 
QUOTE: DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval.
AFTER:  (4) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (1) · text copy line 2516 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.5 DAM Execution and Results 4.5.1 DAM Clearing Process (1) 
QUOTE: At 1000 in the Day-Ahead, ERCOT shall start the Day-Ahead Market (DAM) clearing process.
AFTER:  If the processing of DAM bids and offers after 0900 is significantly delayed or impacted by a failure of ERCOT software or systems that directly impacts the DAM, ERCOT shall post a Notice as soon as practicable on the ERCOT website, in accordance with paragraph (1) of Section 4.1.2, Day-Ahead Proce…

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (4) · text copy line 2522 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …Day-Ahead Updated Network Model topology and evaluates all Congestion Revenue Rights (CRRs) for feasibility to determine hourly oversold quantities. (3) The purpose of the DAM is to economically and simultaneously clear offers and bids described in Section 4.4, Inputs into DAM and Other Trades. (4) 
QUOTE: The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand Curves (ASDCs), minus the offer-based costs over the Operating Day, subject to security and other constraints.
AFTER:  (a) The bid-based revenues include revenues from ASDCs, DAM Energy Bids, bid portions of Energy Bid/Offer Curves, and Point-to-Point (PTP) Obligation bids. +----------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, Communicating DAM Results, paragraph (1) · text copy line 2631 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …ice when the constraint between the Resource Connectivity Node and the Resource Node is binding. (12) PTP Obligation bids shall not be awarded where the DAM clearing price for the PTP Obligation is greater than the PTP Obligation bid price plus $0.01/MW per hour. 4.5.2 Communicating DAM Results (1) 
QUOTE: As soon as practicable, but no later than 1330 in the Day-Ahead, ERCOT shall notify the parties to each cleared DAM transaction (e.g., the buyer and the seller) of the results of the DAM as follows:
AFTER:  (a) Awarded Resource-Specific Ancillary Service Offers, specifying Resource, MW, Ancillary Service type, and price, for each hour of the awarded offer; (b) Awarded Ancillary Service Only Offers, specifying MW, Ancillary Service type, and price, for each hour of the awarded offer; (c) Awarded energy…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, DAM Energy Bids, paragraphs (1)-(2) · text copy line 1776 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: ….4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) 
QUOTE: A QSE must submit any DAM Energy Bids by 1000 for the effective DAM.
AFTER:  (2) A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM. 4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and …

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.1, Day-Ahead Settlement Point Prices for Resource Nodes · text copy line 2750 · heading above: 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes

BEFORE: …----------------+ 4.6 DAM Settlement 4.6.1 Day-Ahead Settlement Point Prices (1) The Day-Ahead Settlement Point Price (DASPP) calculations are described in this Section for Resource Nodes, Load Zones, Hubs, and logical Resource Nodes. 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes (1) 
QUOTE: The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process.
AFTER:  4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: D…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, Day-Ahead Energy Payment · text copy line 2857 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 4.6.2 Day-Ahead Energy and Make-Whole Settlement 4.6.2.1 Day-Ahead Energy Payment (1) 
QUOTE: The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves.
AFTER:  The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p) The above variables are defined as follows: ------------------------------------------------------------…

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

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1.2, Day-Ahead Process and Timing Deviations, paragraph (2) · text copy line 259 · heading above: 4.1.2 Day-Ahead Process and Timing Deviations

BEFORE: …f the following: (a) Details of the affected timing and procedures; (b) Details of interim requirements, if any exist; (c) An estimate of the period for which the interim requirements apply; and (d) Reasons for the temporary variation. (2) Subject to the principles set forth in paragraph (3) below, 
QUOTE: ERCOT may omit any procedure or take any manual action necessary to ensure, to the greatest extent practicable, that the DAM clearing process completes by 1900 in the Day-Ahead.
AFTER:  Should ERCOT omit any such procedure or take any such manual action, ERCOT will issue a Market Notice no later than 1700 Central Prevailing Time (CPT) on the next Business Day that details the omitted procedures or manual actions taken by ERCOT and ERCOT's explanation as to why they were necessary.…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4632

BEFORE: …sure. Until RTC was implemented, ancillary services awarded in the DAM implied a physical obligation to provide reserves. Otherwise, the DAM is a voluntary financial market that creates no physical obligations from market awards. Key insights from about the ERCOT day-ahead market in 2025 include: • 
QUOTE: The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh.
AFTER:  This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • Three-part offers account for only 58% of …

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4638

BEFORE: …arket awards. Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • 
QUOTE: The day-ahead market cleared 62% of real-time load in 2025.
AFTER:  This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load. Thermal resources not awarded through threepart offers risk not…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets · text copy line 812

BEFORE: …orward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. 
QUOTE: Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time.
AFTER:  Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves. These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the …

### e17 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(c), Day-ahead energy market · text copy line 43

BEFORE: …e extent that ERCOT determines that the market participant's self-arranged ancillary services will not be delivered, ERCOT shall procure energy and ancillary capacity services on behalf of the market participant to cover the shortfall and charge the market participant for the services provided. (c) 
QUOTE: Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract.
AFTER:  (d) Adequacy of operational information. ERCOT shall require resource-specific bid curves for energy and ancillary capacity services that it competitively procures in the day-ahead or operating day, and ERCOT shall use these bid curves or ex-ante mitigated bid curves to address market failure, as a…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4644

BEFORE: …ute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • 
QUOTE: Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load.
AFTER:  Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast. • ERCOT's total collateral remai…

## Statements to check

- **Definition #1** (cites e1, e2, e17) FLAG number-not-in-quote: 25.501: The Day-Ahead Market is a daily, co-optimized market run the day before the Operating Day for forward financial energy, Ancillary Services, and congestion transactions. [e1][e2] PUCT rule 25.501 requires ERCOT to operate a voluntary day-ahead energy market. [e17]
- **How it works #1** (cites e7, e4, e5, e6): A QSE must submit DAM Energy Bids by 1000 in the Day-Ahead, and ERCOT starts the DAM clearing process at 1000. [e7][e4] The DAM clearing is a multi-hour mixed integer program that maximizes bid-based revenues minus offer-based costs over the Operating Day, subject to security and other constraints. [e5] ERCOT must notify the parties to each cleared transaction of the results no later than 1330 in the Day-Ahead. [e6]
- **How it works #2** (cites e3, e8, e9, e10): Settlement uses DAM Settlement Point Prices for a one-hour Settlement Interval, built from DAM LMPs. [e3] A Resource Node's DAM price is simply its DAM LMP for the hour. [e8] Sellers whose energy offers clear receive the Day-Ahead Energy Payment, and a cleared PTP Obligation bid is paid or charged the sink-minus-source price difference. [e9][e10]
- **How it works #3** (cites e12, e11): ERCOT can intervene to make sure the DAM finishes. It may omit a procedure or take a manual action so that clearing completes by 1900 in the Day-Ahead. [e12] DAM prices become final at 1000 of the second Business Day after the Operating Day. [e11]
- **ERCOT context #1** (cites e15) FLAG number-not-in-quote: 2025: The IMM's 2025 report says that with RTC, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. [e15]
- **ERCOT context #2** (cites e14, e16, e13): The DAM cleared 62% of real-time load in 2025, and three-part offers were 58% of DAM energy sold and served 36% of real-time load. [e14][e16] The IMM reports a $1.17/MWh average DAM price premium and a $12/MWh average absolute price difference for 2025. [e13]
- **Key facts #1** (cites e17) FLAG number-not-in-quote: 25.501: - PUCT rule 25.501 calls for a voluntary day-ahead energy market. [e17]
- **Key facts #2** (cites e7, e4): - DAM Energy Bids are due by 1000 in the Day-Ahead; clearing starts at 1000. [e7][e4]
- **Key facts #3** (cites e6): - Results are communicated no later than 1330 in the Day-Ahead. [e6]
- **Key facts #4** (cites e3): - DAM settles hourly, versus 15-minute intervals in real time. [e3]
- **Key facts #5** (cites e11): - DAM prices are final at 1000 of the second Business Day after the Operating Day. [e11]
- **Key facts #6** (cites e14, e13): - 2025: DAM cleared 62% of real-time load; average DAM premium $1.17/MWh. [e14][e13]
- **Common confusion #1** (cites e15): The DAM is financial, not a physical commitment: a DAM energy award is settled against real-time prices, with imbalances settled in real time. [e15]
- **Questions #2** (cites e1, e2, e5, e7, e4, e6): Energy offers and bids, Ancillary Service capacity and PTP Obligation bids are cleared together. [e1][e2][e5] DAM Energy Bids are due by 1000, clearing starts at 1000, and results go out by 1330. [e7][e4][e6]
- **Questions #4** (cites e3, e15): The DAM uses one-hour Settlement Intervals with DAM Settlement Point Prices, while real time uses 15-minute intervals. [e3] Real-time prices are the ones that settle any imbalance against a DAM position. [e15]
- **Questions #6** (cites e13): At a modest premium: the IMM reports an average premium of $1.17/MWh and an average absolute difference of $12/MWh. [e13]
- **Link to rtm** (cites e3): contrasts-with Real-Time Market (RTM): The RTM settles on 15-minute intervals from SCED prices, while the DAM settles on one-hour intervals from the DAM clearing. [e3]
- **Link to ptp-obligation** (cites e10): composed-of PTP Obligation: PTP Obligation bids are cleared in the DAM and settled on the Settlement Point Price difference between sink and source. [e10]
- **Link to virtual-bids** (cites e7, e9): related Virtuals (Energy-Only Offers & Bids): DAM Energy Bids and DAM Energy-Only Offer Curves are instruments in the DAM. [e7][e9]
- **Link to three-part-supply-offer** (cites e16): related Three-Part Supply Offer: Three-Part Supply Offers are one of the offer types the DAM clears, and the IMM reports how little of the DAM energy they represent. [e16]
- **Link to spp** (cites e8, e11): determines SPP (Settlement Point Price): DAM Settlement Point Prices come from DAM LMPs and are final at 1000 of the second Business Day after the Operating Day. [e8][e11]
- **Link to dart-spread** (cites e13) FLAG number-not-in-quote: 2025: related DART Spread: The IMM reports the average DAM price premium and average absolute price difference for 2025. [e13]
- **Link to ancillary-services** (cites e1, e15): related Ancillary Services (AS): The DAM co-optimizes Ancillary Service capacity with energy, and since RTC the awards are financial positions. [e1][e15]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The day-ahead market is ERCOT's voluntary forward market where energy, ancillary services and PTP congestion positions are cleared the day before, on hourly prices. It lets you lock in a price and a congestion position, and whatever you do not take there is settled at real-time prices.

