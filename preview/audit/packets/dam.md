# Audit packet: Day-Ahead Market (DAM) (dam)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Day-Ahead Market (DAM) · text copy line 565

BEFORE: …ive is used to populate the Data Warehouse. Data Warehouse De-normalized data stored in a schema, physically optimized to handle high volumes of data and concurrent user access, and generally lightly indexed. Day-Ahead The 24-hour period before the start of the Operating Day. Day-Ahead Market (DAM) 
QUOTE: A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions.
AFTER:  Day-Ahead Market (DAM)-Committed Interval A Settlement Interval for which the Resource has been committed due to a DAM award. Day-Ahead Market (DAM) Energy Bid A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity. Day-Ahead Marke…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1, Introduction, paragraph (1) · text copy line 233 · heading above: 4.1 Introduction

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
locator: Section 4.4.9.6, DAM Energy Bids, paragraph (1) · text copy line 1776 · heading above: 4.4.9.6 DAM Energy Bids

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

BEFORE: …visory and notify all Qualified Scheduling Entities (QSEs) of the following: (a) Details of the affected timing and procedures; (b) Details of interim requirements, if any exist; (c) An estimate of the period for which the interim requirements apply; and (d) Reasons for the temporary variation. (2) 
QUOTE: Subject to the principles set forth in paragraph (3) below, ERCOT may omit any procedure or take any manual action necessary to ensure, to the greatest extent practicable, that the DAM clearing process completes by 1900 in the Day-Ahead.
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

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4644

BEFORE: …ute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • 
QUOTE: Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load.
AFTER:  Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast. • ERCOT's total collateral remai…

### e17 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(c), Day-ahead energy market · text copy line 43

BEFORE: …e extent that ERCOT determines that the market participant's self-arranged ancillary services will not be delivered, ERCOT shall procure energy and ancillary capacity services on behalf of the market participant to cover the shortfall and charge the market participant for the services provided. (c) 
QUOTE: Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract.
AFTER:  (d) Adequacy of operational information. ERCOT shall require resource-specific bid curves for energy and ancillary capacity services that it competitively procures in the day-ahead or operating day, and ERCOT shall use these bid curves or ex-ante mitigated bid curves to address market failure, as a…

### e18 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1, Introduction, paragraph (2) · text copy line 235 · heading above: 4.1 Introduction

BEFORE: …ility Reserve Service Charge 4-121 4.6.5 Calculation of "Average Incremental Energy Cost" (AIEC) 4-122 Day-Ahead Operations 4.1 Introduction (1) The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions. 
QUOTE: (2) Participation in the DAM is voluntary.
AFTER:  (3) DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that a…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (1) · text copy line 2516 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------+ 4.5 DAM Execution and Results 4.5.1 DAM Clearing Process (1) At 1000 in the Day-Ahead, ERCOT shall start the Day-Ahead Market (DAM) clearing process. 
QUOTE: If the processing of DAM bids and offers after 0900 is significantly delayed or impacted by a failure of ERCOT software or systems that directly impacts the DAM, ERCOT shall post a Notice as soon as practicable on the ERCOT website, in accordance with paragraph (1) of Section 4.1.2, Day-Ahead Process and Timing Deviations, extending the start time of the execution of the DAM clearing process by an amount of time at least as long as the duration of the processing delay plus ten minutes. In no event shall the extension exceed more than one hour from when the processing delay is resolved.
AFTER:  (2) ERCOT shall complete a Day-Ahead Simultaneous Feasibility Test (SFT). This test uses the Day-Ahead Updated Network Model topology and evaluates all Congestion Revenue Rights (CRRs) for feasibility to determine hourly oversold quantities. (3) The purpose of the DAM is to economically and simulta…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (2) · text copy line 2518 · heading above: 4.5.1 DAM Clearing Process

BEFORE: … Process and Timing Deviations, extending the start time of the execution of the DAM clearing process by an amount of time at least as long as the duration of the processing delay plus ten minutes. In no event shall the extension exceed more than one hour from when the processing delay is resolved. 
QUOTE: (2) ERCOT shall complete a Day-Ahead Simultaneous Feasibility Test (SFT). This test uses the Day-Ahead Updated Network Model topology and evaluates all Congestion Revenue Rights (CRRs) for feasibility to determine hourly oversold quantities.
AFTER:  (3) The purpose of the DAM is to economically and simultaneously clear offers and bids described in Section 4.4, Inputs into DAM and Other Trades. (4) The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand C…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (4)(a)-(b) · text copy line 2524 · heading above: 4.5.1 DAM Clearing Process

BEFORE: ….4, Inputs into DAM and Other Trades. (4) The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand Curves (ASDCs), minus the offer-based costs over the Operating Day, subject to security and other constraints. 
QUOTE: (a) The bid-based revenues include revenues from ASDCs, DAM Energy Bids, bid portions of Energy Bid/Offer Curves, and Point-to-Point (PTP) Obligation bids.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1188: Replace paragraph (a) above with the following upon system implementation:] | | | | (a) The bid-based rev…

### e54 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (4)(b) · text copy line 2533 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …=====================================================================================================================+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (b) The offer-based costs include costs from the Startup Offer, Minimum Energy Offer, and Energy Offer Curve of any Resource that submitted a Three-Part Supply Offer, DAM Energy-Only Offers, offer portions of Energy Bid/Offer Curves, Ancillary Service Only Offers, and Ancillary Service Offers.
AFTER:  (c) Security constraints specified to prevent DAM solutions that would overload the elements of the ERCOT Transmission Grid include the following: (i) Transmission constraints - transfer limits on energy flows through the ERCOT Transmission Grid, e.g., thermal or stability limits. These limits must…

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

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, paragraph (2) · text copy line 1778 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: …market timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) A QSE must submit any DAM Energy Bids by 1000 for the effective DAM. 
QUOTE: (2) A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM.
AFTER:  4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and must include the following information: (a) The buying QSE; (b) The Settlement Point; (c) Fixed quantity block, variable quantity block, or curve indicator for the bid; (i) If a fixed quantity block, the single …

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5.1, paragraph (4) · text copy line 1764 · heading above: 4.4.9.5.1 DAM Energy-Only Offer Curve Criteria

BEFORE: … (d) The first and last hour of the offer; and (e) The expiration time and date of the offer. (2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW. 
QUOTE: (4) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party.
AFTER:  4.4.9.5.2 DAM Energy-Only Offer Validation (1) A valid DAM Energy-Only Offer Curve is an offer that ERCOT has determined meets the criteria listed in Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria. (2) ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging Sys…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, Day-Ahead Energy Payment, formula · text copy line 2857 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …ad Energy and Make-Whole Settlement 4.6.2.1 Day-Ahead Energy Payment (1) The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves. 
QUOTE: The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, variable DAES · text copy line 2870 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …r QSE per Settlement PointThe payment to QSE q for the cleared energy offers at Settlement Point p for the hour. DASPP _(p) $/MWh Day-Ahead Settlement Point Price per Settlement PointThe DAM SPP at Settlement Point p for the hour. DAES _(q, p) MW Day-Ahead Energy Sale per QSE per Settlement Point
QUOTE: The total amount of energy represented by QSE q's cleared Three-Part Supply Offers in the DAM, cleared DAM Energy-Only Offer Curves, and cleared sales from the offer portion of Energy Bid/Offer Curves at Settlement Point p, for the hour.
AFTER:  q none A QSE. p none A Settlement Point. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.2, Day-Ahead Energy Charge · text copy line 2897 · heading above: 4.6.2.2 Day-Ahead Energy Charge

BEFORE: …gy offers at Settlement Point p for the hour. q none A QSE. p none A Settlement Point. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 4.6.2.2 Day-Ahead Energy Charge 
QUOTE: (1) The Day-Ahead Energy Charge is made for all cleared DAM Energy Bids or cleared purchases from the bid portion of Energy Bid/Offer Curves. This charge to each QSE for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAEPAMT _(q, p) = DASPP _(p) * DAEP _(q, p)
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.3, Day-Ahead Make-Whole Settlements, paragraph (4) · text copy line 3006 · heading above: 4.6.2.3 Day-Ahead Make-Whole Settlements

BEFORE: …or Day-Ahead Make-Whole Payment energy cost compensation in a DAM-committed Operating Hour, if, for the Resource associated with the offer the generator's breakers were closed, as indicated by a telemetered Resource Status of On-Line, for at least one minute during the DAM-committed Operating Hour. 
QUOTE: (4) The Day-Ahead Make-Whole Payment guarantees the QSE that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost calculated based on the Startup Cap, the Minimum Energy Cap, and the Energy Offer Curve capped by the Energy Offer Curve Cap defined under Section 4.4.9.3.3, Energy Offer Curve Cost Caps.
AFTER:  (5) If a Generation Resource is eligible for startup or energy cost compensation in the Day-Ahead Make-Whole payment, then Ancillary Service revenue from the hours committed in the DAM will be included in its make-whole calculation for that Resource. (6) For purposes of this Section 4.6.2.3, the te…

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.3, paragraph (7) · text copy line 3012 · heading above: 4.6.2.3 Day-Ahead Make-Whole Settlements

BEFORE: … compensation in the Day-Ahead Make-Whole payment, then Ancillary Service revenue from the hours committed in the DAM will be included in its make-whole calculation for that Resource. (6) For purposes of this Section 4.6.2.3, the telemetered Resource Status of OFFQS shall be considered as Off-Line. 
QUOTE: (7) An Energy Storage Resource (ESR) is not eligible for Day-Ahead Make-Whole Payment.
AFTER:  4.6.2.3.1 Day-Ahead Make-Whole Payment (1) ERCOT shall pay the QSE a Day-Ahead Make-Whole Payment for an eligible Resource for each Operating Hour in a DAM-commitment period. (2) Any Resource-Specific Ancillary Service Offer cleared for the same Operating Hour, QSE, and Generation Resource as a Thr…

### e31 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.3, paragraph (2) · text copy line 3002 · heading above: 4.6.2.3 Day-Ahead Make-Whole Settlements

BEFORE: …-------------------------------------------------------------------+ (d) The breaker open-close sequence for which the QSE is eligible for startup cost compensation in an earlier DAM commitment period within the same Operating Day does not qualify in meeting the criteria in items (a) and (b) above. 
QUOTE: (2) Notwithstanding the eligibility criteria described in paragraph (1) above, a Resource will not be eligible for Day-Ahead Make-Whole Payment Startup Cost compensation if the Resource was considered by the DAM as not having a cost to start due to the DAM commitment period being contiguous with a self-committed hour, as described in Section 4.4.9.1, Three-Part Supply Offers.
AFTER:  (3) A QSE that has a Three-Part Supply Offer cleared in the DAM is eligible for Day-Ahead Make-Whole Payment energy cost compensation in a DAM-committed Operating Hour, if, for the Resource associated with the offer the generator's breakers were closed, as indicated by a telemetered Resource Status…

### e32 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1.2, paragraph (3)(b) · text copy line 265 · heading above: 4.1.2 Day-Ahead Process and Timing Deviations

BEFORE: …ond 1900 in the Day-Ahead. (3) When omitting a procedure or taking a manual action under paragraph (2) above, ERCOT will act in accordance with the following principles: (a) ERCOT will only act in cases in which it reasonably believes that intervention is necessary in order to complete DAM by 1900; 
QUOTE: (b) ERCOT will seek to minimize impacts to Market Participants and will only remove transactions from the DAM as a last resort; when ERCOT believes a QSE's transactions need to be removed, either in whole or in part, in order to complete the DAM clearing process, ERCOT will prioritize the removal in reverse order based on submittal time, where the QSE's most recently submitted transactions are prioritized before the removal of the earliest submitted transactions; however, the number of transactions removed will be at ERCOT's discretion, subject to the principles set forth in this paragraph;
AFTER:  (c) Approval to act will be obtained from the applicable ERCOT executive or designee; and (d) ERCOT will not publish a DAM in which no transmission constraints are evaluated. (4) Should ERCOT omit a procedure or take manual action pursuant to paragraph (2) above, and a Market Participant is directl…

### e33 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1.2, paragraph (5) · text copy line 279 · heading above: 4.1.2 Day-Ahead Process and Timing Deviations

BEFORE: …procedure or manual action under paragraph (2) above in the following circumstances: (a) ERCOT removed the Market Participant's bid(s) or offer(s); (b) ERCOT failed to award the Market Participant's bid(s) or offer(s); or (c) ERCOT de-energized the Market Participant's Resource(s) in the base case. 
QUOTE: (5) If ERCOT is unable to execute the Day-Ahead process prior to 1900 in the Day-Ahead, ERCOT may abort all or part of the Day-Ahead process and require all schedules and trades to be submitted in the Adjustment Period. In that event, ERCOT shall issue a Watch
AFTER:  and notify all QSEs of the following: (a) Details of the affected timing and procedures; and (b) Reasons for the temporary variation. (6) If ERCOT is unable to operate the Adjustment Period process, then ERCOT may abort the Adjustment Period process and operate under its Operating Period procedures…

### e34 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, paragraph (4) · text copy line 2697 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …ervice for each hour of the Operating Day. (3) ERCOT shall monitor Day-Ahead MCPCs and Day-Ahead hourly LMPs for errors and if there are conditions that cause the price to be questionable, ERCOT shall notify all Market Participants that the DAM prices are under investigation as soon as practicable. 
QUOTE: (4) ERCOT shall correct prices for an Operating Day when a market solution is determined to be invalid or invalid prices are identified in an otherwise valid market solution, accurate prices can be determined, and the impact of the price correction is significant.
AFTER:  The following are some reasons that may cause an invalid market solution or invalid prices in a valid market solution. (a) Data Input error: Missing, incomplete, or incorrect versions of one or more data elements input to the DAM application may result in an invalid market solution and/or prices. (…

### e35 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, paragraph (5) · text copy line 2705 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …aring process, and/or DAM post processing. (c) Inconsistency with these Protocols or the Public Utility Commission of Texas (PUCT) Substantive Rules: Pricing errors may occur when specific circumstances result in prices that are in conflict with such Protocol language or the PUCT Substantive Rules. 
QUOTE: (5) For purposes of a price correction performed prior to 1000 on the second Business Day after the Operating Day, the impact of a price correction is considered significant, as that term is used in paragraph (4) above, for the Operating Day when: (a) The absolute value change to any single DAM Settlement Point Price at a Resource Node or Day-Ahead MCPC is greater than $0.05/MWh; (b) The price correction would require ERCOT to change more than ten DAM Settlement Point Prices and Day-Ahead MCPCs; or (c) The absolute value change to any DAM Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh.
AFTER:  (6) All DAM LMPs, MCPCs, and Settlement Point Prices are final at 1000 of the second Business Day after the Operating Day. (a) However, after DAM LMPs, MCPCs, and Settlement Point Prices are final, if ERCOT determines that prices qualify for a correction pursuant to paragraph (4) above and that ERC…

### e36 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, paragraph (6)(a) · text copy line 2715 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …re than ten DAM Settlement Point Prices and Day-Ahead MCPCs; or (c) The absolute value change to any DAM Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh. (6) All DAM LMPs, MCPCs, and Settlement Point Prices are final at 1000 of the second Business Day after the Operating Day. 
QUOTE: (a) However, after DAM LMPs, MCPCs, and Settlement Point Prices are final, if ERCOT determines that prices qualify for a correction pursuant to paragraph (4) above and that ERCOT will seek ERCOT Board review of such prices, it shall notify Market Participants and describe the need for such correction as soon as practicable but no later than 30 days after the Operating Day.
AFTER:  Failure to notify Market Participants within this timeline precludes the ERCOT Board from reviewing such prices. However, nothing in this section shall be understood to limit or otherwise inhibit any of the following: (i) ERCOT's duty to inform the PUCT of potential or actual violations of the ERCO…

### e37 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, paragraph (2)(b)-(d) · text copy line 2652 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …nergy Bid/Offer Curves, specifying Resource, MWh, Settlement Point, and Settlement Point Price, for each hour of the awarded bid/offer; and (f) Awarded PTP Obligation Bids, number of PTP Obligations in MW, source and sink Settlement Points, and price for each Settlement Interval of the awarded bid. 
QUOTE: (2) As soon as practicable, but no later than 1330, ERCOT shall post on the ERCOT website the hourly: (a) Day-Ahead MCPC for each type of Ancillary Service for each hour of the Operating Day; (b) DASPPs for each Settlement Point for each hour of the Operating Day; (c) Day-Ahead hourly LMPs for each Electrical Bus for each hour of the Operating Day; (d) Shadow Prices for every binding constraint for each hour of the Operating Day;
AFTER:  (e) Energy bought in the DAM consisting of the following: (i) The total quantity of awarded DAM Energy Bids (in MWh) bought in the DAM at each Settlement Point for each hour of the Operating Day; +------------------------------------------------------------------------------------------------------…

### e38 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a) · text copy line 2215 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …------------------------------------------------------ 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps (1) The DASWCAP and RTSWCAP shall be determined in accordance with the Public Utility Commission of Texas (PUCT) rules. The methodology for determining the DASWCAP and RTSWCAP is as follows: 
QUOTE: (a) The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM. These caps shall be maintained at these levels until either of the following criteria are met:
AFTER:  (i) If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determin…

### e39 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a)(ii) · text copy line 2223 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: … ECAP; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while the EPP was active. If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions. 
QUOTE: (ii) If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism.
AFTER:  (b) ERCOT shall issue operations notices when the ECAP Effective Period begins and ends. Such notices shall respectively state the date and time of the initiation and cessation of the ECAP Effective Period. (c) ERCOT will post on the ERCOT website the cumulative number of hours in which the sum of …

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights (page 72 OCR) · text copy line 4626

BEFORE: …nd sales of energy for delivery in real-time, point-to-point (PTP) obligations and options, and sales of ancillary services for provision in real-time. The DAM plays a critical role in coordinating generator commitment decisions and helping participants manage or arbitrage real-time price exposure. 
QUOTE: Until RTC was implemented, ancillary services awarded in the DAM implied a physical obligation to provide reserves. Otherwise, the DAM is a voluntary financial market that creates no physical obligations from market awards.
AFTER:  Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • The day-ahead…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights (OCR) · text copy line 4638

BEFORE: …arket awards. Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • 
QUOTE: The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market.
AFTER:  • Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load. Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part of…

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, C.1 Day Ahead Market Volume (page 74 OCR) · text copy line 4739

BEFORE: …h generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years. Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market. 
QUOTE: Less than half of physical real-time generation in ERCOT is scheduled through the day-ahead market, so resources scheduled after the DAM must provide the remaining supply needed to satisfy real-time load, as shown in Figure 31.
AFTER:  Figure 31 shows awards for three-part offers (i.e., three-part awards) for thermal and intermittent renewable resources (IRR), thermal capacity selfscheduled in Current Operating Plans (COPs) prior to the day-ahead RUC process (DRUC), and the day-ahead forecast for renewable generation. Figure 31: …

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights (OCR) · text copy line 4656

BEFORE: …entionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast. • ERCOT's total collateral remained unchanged in 2025 at $6.9 billion. For the last two years, exposure to positional risks from CRRs has driven most of this collateral. • 
QUOTE: Point-to-point obligations remained profitable in 2025, paying 10.9% more in real time than their day-ahead purchase cost. This ended a multi-year trend of declining PTP profitability.
AFTER:  • The volume of PTP bids has grown by 258% over the last decade. This increase lengthens the time ERCOT needs to solve the DAM optimization. Although there have been few late publications of DAM results, optimization runtime may pose a risk if bidvolume inflation continues. ERCOT has indicated that…

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights (OCR) · text copy line 4662

BEFORE: ….9 billion. For the last two years, exposure to positional risks from CRRs has driven most of this collateral. • Point-to-point obligations remained profitable in 2025, paying 10.9% more in real time than their day-ahead purchase cost. This ended a multi-year trend of declining PTP profitability. • 
QUOTE: The volume of PTP bids has grown by 258% over the last decade. This increase lengthens the time ERCOT needs to solve the DAM optimization.
AFTER:  Although there have been few late publications of DAM results, optimization runtime may pose a risk if bidvolume inflation continues. ERCOT has indicated that it may draft an NPRR to impose a bid fee on PTP bids that are unlikely to clear. 50 | 2025 State of the Market Report / / Day-Ahead Market P…

### e45 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (OCR) · text copy line 818

BEFORE: …l-time price for reserves. These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. 
QUOTE: Some of this low participation may reflect participants' response to the imbalance risk of taking day-ahead forward positions, particularly for intermittent resources and duration-limited energy storage resources. If changes in weather conditions or a depleted state of charge prevent these resources from delivering on their day-ahead positions, they must buy back the position at the real-time price.
AFTER:  Day-ahead schedules can also reduce an ESR's market revenues when real-time changes in the optimal charging and discharging hours occur. It is harder to explain the consistently low participation of thermal resources in the day-ahead market. Day-ahead awards to thermal resources account for only 36…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights (OCR) · ocr copy line 3140, OCR page 72 · heading above: 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5

BEFORE: …d e The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. e Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load. 
QUOTE: Thermal resources not awarded through three- part offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast.
AFTER:  e ERCOT?'s total collateral remained unchanged in 2025 at $6.9 billion. For the last two years, exposure to positional risks from CRRs has driven most of this collateral. e Point-to-point obligations remained profitable in 2025, paying 10.9% more in real time than their day-ahead purchase cost. Thi…

### e47 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (OCR) · text copy line 813

BEFORE: … the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. 
QUOTE: Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves.
AFTER:  These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. Some of this low participa…

### e48 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Ancillary Services (OCR) · text copy line 783

BEFORE: …pikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT's capability to manage the system's ramp needs. Ancillary Services 
QUOTE: The most noteworthy development for ancillary services was the implementation of RTC in December.
AFTER:  Resources can now sell ancillary services directly into the real-time market and ERCOT optimizes its utilization of resources for satisfying the system's energy and ancillary services needs. The ability to sell real-time ancillary services is particularly attractive for ESRs that dominate the provi…

### e49 · `ercot-nprr1008-board-report` · tier 1 · NPRR1008 Board Report (Real-Time Co-optimization, Section 4 Day-Ahead Operations) (Board approved 2020-12-08)
locator: NPRR1008 Revision Description · text copy line 106

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | Revision Description | | 
QUOTE: This NPRR updates Day-Ahead Operations in the Protocols to address changes associated with the implementation of RTC.
AFTER:  Specifically, this NPRR addresses the following Key Principles: | | | | | | | | | | - KP1.1 - Ancillary Service Demand Curves and Current Market Price Adders | | | | | | | | | | - KP1.2 - System-Wide Offer Cap and Power Balance Penalty Curve | | | | | | | | | | - KP1.3 - Offering and Awarding of An…

### e50 · `ercot-nprr1008-board-report` · tier 1 · NPRR1008 Board Report (Real-Time Co-optimization, Section 4 Day-Ahead Operations) (Board approved 2020-12-08)
locator: NPRR1008, Board Decision · text copy line 158

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1008 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e51 · `ref-ercot-forward-markets-101` · tier 2 · Forward Markets 101 (ERCOT training) (2026)
locator: ERCOT Forward Markets 101 training deck (tier 2), scenario: How's it settled? (energy offer) · text copy line 390

BEFORE: … obligation in Real-Time 20 Energy Bids Day-Ahead Market Energy Bid • Proposal to buy energy in DAM $ / MWh • Submitted at any Settlement Point Energy Bid MW Financial credit in Real-Time 21 Scenario: How's it Settled? QSE awarded Energy Offer in DAM 60 MW Awarded Energy Offer 50 MW Energy Provided 
QUOTE: Paid 60 MW at the DAM Energy Price Charged 10 MW at the Real-Time Energy Price
AFTER:  DAM Transaction Real-Time Settlement 22 Scenario: How's it Settled? QSE awarded Energy Offer in DAM 60 MW Awarded Energy Offer DAM Transaction 70 MW Energy Provided Paid 60 MW at the DAM Energy Price Paid 10 MW at the Real-Time Energy Price Real-Time Settlement 23 Scenario: How's it Settled? QSE aw…

### e52 · `ref-ercot-forward-markets-101` · tier 2 · Forward Markets 101 (ERCOT training) (2026)
locator: ERCOT Forward Markets 101 training deck (tier 2), Point-to-Point Obligations · text copy line 1090

BEFORE: …sing DAM PTP Obligations Resource Node 2 345kV Hub Load Zone DAM SPP $36/MWh $38/MWh $42/MWh Average RT SPP $15/MWh $35/MWh $50/MWh Resource Node 2 345kV Hub 100 MW Trade sale at Hub 100 MW Output at Resource Node 2 Load Zone 48 Day-Ahead Market Point-to-Point Obligations Point-to-Point Obligations 
QUOTE: Hourly Financial instruments • Purchased at DAM price spread • Settled at Real-Time price spread
AFTER:  Source Sink 49 Hedging Congestion Costs Longer Term Congestion Revenue Rights Monthly Financial instruments • Purchased at Auction Price • Settled at DAM price spread Source Sink 50 Hedging Congestion Costs Longer Term Congestion Revenue Rights Two types of instruments Point-to-Point Obligation Pay…

### e53 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.5, paragraph (1) · text copy line 1734 · heading above: 4.4.9.5 DAM Energy-Only Offer Curves

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 4.4.9.5 DAM Energy-Only Offer Curves 
QUOTE: (1) A QSE must submit any DAM Energy-Only Offer Curves by 1000 for the effective DAM.
AFTER:  (2) The DAM Energy-Only Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. (3) DAM Energy-Only Offer Curves are not Resource-specif…

## Statements to check

- **Definition #1** (cites e1, e2, e18, e17) FLAG number-not-in-quote: 25.501: The Day-Ahead Market is a daily, co-optimized market run the day before the Operating Day for forward financial energy, Ancillary Services, and congestion transactions. [e1][e2] Participation is voluntary. [e18] PUCT rule 25.501 requires ERCOT to operate a voluntary day-ahead energy market. [e17]
- **How it works #2** (cites e7, e53, e4, e19, e6, e52): A QSE must submit DAM Energy Bids and DAM Energy-Only Offer Curves by 1000 in the Day-Ahead, and ERCOT starts the DAM clearing process at 1000. [e7][e53][e4] If processing of bids and offers after 0900 is significantly delayed or impacted by a failure of ERCOT software or systems that directly impacts the DAM, ERCOT posts a Notice extending the start time by at least the duration of the delay plus ten minutes, and the extension may not exceed one hour from when the delay is resolved. [e19] ERCOT must notify the parties to each cleared transaction of the results no later than 1330 in the Day-Ahead. [e6] ERCOT's Forward Markets 101 training deck (tier 2) shows the same 10:00 and 13:30 markers. [e52]
- **How it works #4** (cites e20, e5, e21, e54): ERCOT first completes a Day-Ahead Simultaneous Feasibility Test, which uses the Day-Ahead Updated Network Model topology and evaluates all CRRs for feasibility to determine hourly oversold quantities. [e20] The clearing is a multi-hour mixed integer program that maximizes bid-based revenues minus offer-based costs over the Operating Day, subject to security and other constraints. [e5] Bid-based revenues include ASDC revenues, DAM Energy Bids, the bid portions of Energy Bid/Offer Curves, and PTP Obligation bids. [e21] Offer-based costs include the Startup Offer, Minimum Energy Offer and Energy Offer Curve of any Resource with a Three-Part Supply Offer, DAM Energy-Only Offers, offer portions of Energy Bid/Offer Curves, Ancillary Service Only Offers and Ancillary Service Offers. [e54]
- **How it works #6** (cites e22, e23, e38, e39, e24, e25): A DAM Energy-Only Offer Curve is the QSE's willingness to sell energy at or above a price and quantity at a specific Settlement Point; it may be offered only in the DAM and is not Resource-specific. [e22] It must be within the range of -$250 per MWh to the DASWCAP, and the minimum amount is one MW. [e23] The DASWCAP is set equal to the High System-Wide Offer Cap (HCAP) and stays there until one of two criteria is met, one of which is the Peaker Net Margin exceeding its per-MW-year threshold, after which the DASWCAP is set per the Scarcity Pricing Mechanism schedule in Section 4.4.11.1. [e38][e39] A DAM Energy Bid is the willingness to buy at or below a price at a Settlement Point, and may be made only in the DAM. [e24] Energy-Only Offers, Energy Bids and PTP Obligation bids may not be combined to create the net effect of a single PTP Obligation between Electrically Similar Settlement Points for the QSE or any QSEs in the same Counter-Party. [e25]
- **How it works #8** (cites e3, e8, e9, e10, e28, e51) FLAG number-not-in-quote: 50 MW: Settlement uses DAM Settlement Point Prices for a one-hour Settlement Interval, built from DAM LMPs. [e3] A Resource Node's DAM price is simply its DAM LMP for the hour. [e8] Sellers whose energy offers clear receive the Day-Ahead Energy Payment, and a cleared PTP Obligation bid is paid or charged the sink-minus-source price difference. [e9][e10] Cleared DAM Energy Bids are charged the Day-Ahead Energy Charge. [e28] Because DAM energy is a financial position, ERCOT's training deck shows a QSE awarded 60 MW of energy offer that provides only 50 MW being paid at the DAM price for 60 MW and charged the Real-Time price for the 10 MW shortfall. [e51]
- **How it works #9** (cites e37): ERCOT posts, no later than 1330, the hourly DASPPs, the Day-Ahead hourly LMPs for each Electrical Bus, and Shadow Prices for every binding constraint, among other items. [e37]
- **How it works #11** (cites e29, e31, e30) FLAG number-not-in-quote: 4.6, 2.3: A QSE with a cleared Three-Part Supply Offer is eligible for Day-Ahead Make-Whole payments under conditions in Section 4.6.2.3. [e29] The payment guarantees that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost based on the Startup Cap, the Minimum Energy Cap and the Energy Offer Curve capped by the Energy Offer Curve Cap. [e29] A Resource is not eligible for startup cost compensation if the DAM treated it as having no cost to start because the commitment period is contiguous with a self-committed hour, and an ESR is not eligible for Day-Ahead Make-Whole Payment. [e31][e30]
- **How it works #13** (cites e12, e32, e33): Subject to principles in the same section, ERCOT may omit a procedure or take a manual action so that clearing completes by 1900 in the Day-Ahead. [e12] ERCOT is to remove transactions only as a last resort, removing a QSE's most recently submitted transactions first, though the number removed is at ERCOT's discretion. [e32] If ERCOT cannot execute the Day-Ahead process before 1900, it may abort all or part of it, require all schedules and trades in the Adjustment Period, and must issue a Watch. [e33]
- **How it works #15** (cites e34, e35, e11, e36): ERCOT corrects prices for an Operating Day when a market solution is invalid or invalid prices are identified, accurate prices can be determined, and the impact is significant. [e34] For a correction before 1000 on the second Business Day, "significant" means a change greater than $0.05/MWh to any single Resource Node DAM SPP or Day-Ahead MCPC, more than ten prices to change, or a change greater than $0.02/MWh to any Load Zone or Hub DAM SPP. [e35] All DAM LMPs, MCPCs and SPPs are final at 1000 of the second Business Day after the Operating Day. [e11] After that, if ERCOT will seek ERCOT Board review it must notify Market Participants no later than 30 days after the Operating Day, and failure to do so precludes Board review. [e36]
- **ERCOT context #1** (cites e15, e40, e47) FLAG number-not-in-quote: 2025: The IMM's 2025 report says that with RTC, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. [e15] The IMM adds that before RTC, ancillary services awarded in the DAM implied a physical obligation, while otherwise the DAM is a voluntary financial market creating no physical obligations. [e40] It also describes virtual ancillary service positions as a new DAM feature implemented with RTC. [e47]
- **ERCOT context #2** (cites e14, e41, e16, e42, e46): The DAM cleared 62% of real-time load in 2025 (energy bought through generator-specific and virtual offers), which the IMM says is in line with recent years while other US RTOs clear more than 90% in the day-ahead market. [e14][e41] Three-part offers were 58% of DAM energy sold and served 36% of real-time load. [e16] The IMM says less than half of physical real-time generation is scheduled through the DAM. [e42] It notes thermal resources not awarded through three-part offers risk not recovering start-up and minimum generation costs, and that most renewables intentionally do not submit three-part offers. [e46]
- **ERCOT context #3** (cites e45): The IMM suggests (opinion) that low physical participation may reflect the imbalance risk of day-ahead positions, particularly for intermittent resources and duration-limited ESRs, which must buy back the position at the real-time price if they cannot deliver. [e45]
- **ERCOT context #4** (cites e13, e43, e44): For 2025 the IMM reports a $1.17/MWh average DAM premium and a $12/MWh average absolute price difference. [e13] PTP obligations paid 10.9% more in real time than their day-ahead purchase cost in 2025, and PTP bid volume has grown 258% over the last decade, which lengthens DAM solve time. [e43][e44]
- **Formula #1** (cites e26, e27): Day-Ahead Energy Payment per QSE per Settlement Point per hour: DAESAMT = (-1) * DASPP * DAES. DASPP is the DAM Settlement Point Price at the Settlement Point for the hour, and DAES is the total energy of the QSE's cleared Three-Part Supply Offers, cleared DAM Energy-Only Offer Curves and cleared sales from the offer portion of Energy Bid/Offer Curves at that point for the hour. [e26][e27]
- **Formula #2** (cites e28): Day-Ahead Energy Charge per QSE per Settlement Point per hour: DAEPAMT = DASPP * DAEP, where DAEP is the QSE's cleared purchases (DAM Energy Bids and the bid portion of Energy Bid/Offer Curves) at that point. [e28]
- **Timeline #1** (cites e50, e49) FLAG number-not-in-quote: 2020: - 2020-12-08: the ERCOT Board approved NPRR1008, RTC - NP 4: Day-Ahead Operations, which updates the Day-Ahead Operations section for changes associated with the implementation of RTC. [e50][e49]
- **Timeline #2** (cites e48) FLAG number-not-in-quote: 2025: - December 2025: the IMM's 2025 report says RTC was implemented in December. [e48]
- **Key facts #1** (cites e17) FLAG number-not-in-quote: 25.501: - PUCT rule 25.501 calls for a voluntary day-ahead energy market. [e17]
- **Key facts #2** (cites e7, e53, e4): - DAM Energy Bids and Energy-Only Offer Curves are due by 1000 in the Day-Ahead; clearing starts at 1000. [e7][e53][e4]
- **Key facts #3** (cites e6): - Results are communicated no later than 1330 in the Day-Ahead. [e6]
- **Key facts #4** (cites e3): - DAM settles hourly, versus 15-minute intervals in real time. [e3]
- **Key facts #5** (cites e11): - DAM prices are final at 1000 of the second Business Day after the Operating Day. [e11]
- **Key facts #6** (cites e14, e13): - 2025: DAM cleared 62% of real-time load; average DAM premium $1.17/MWh. [e14][e13]
- **Common confusion #1** (cites e15): - The DAM is financial, not a physical commitment: a DAM energy award is settled against real-time prices, with imbalances settled in real time. [e15]
- **Common confusion #2** (cites e29, e31): - DAM versus RUC: the DAM does not guarantee a unit runs. A generator's DAM award earns the DAM price and the DAM make-whole applies only under its own eligibility conditions. [e29][e31]
- **Questions #2** (cites e1, e2, e5, e7, e4, e6): Energy offers and bids, Ancillary Service capacity and PTP Obligation bids are cleared together. [e1][e2][e5] DAM Energy Bids are due by 1000, clearing starts at 1000, and results go out by 1330. [e7][e4][e6]
- **Questions #4** (cites e3, e15): The DAM uses one-hour Settlement Intervals with DAM Settlement Point Prices, while real time uses 15-minute intervals. [e3] Real-time prices are the ones that settle any imbalance against a DAM position. [e15]
- **Questions #6** (cites e13): At a modest premium: the IMM reports an average premium of $1.17/MWh and an average absolute difference of $12/MWh. [e13]
- **Questions #8** (cites e14, e42, e45): The IMM reports 62% in 2025, with less than half of physical real-time generation scheduled through the DAM. [e14][e42] The IMM's view is that part of the reason is imbalance risk for intermittent and duration-limited storage resources, and that thermal resources are mostly self-committed. [e45]
- **Questions #10** (cites e12, e32, e33): It may omit procedures or take manual actions, removing transactions only as a last resort and starting with a QSE's most recent submissions. [e12][e32] If it still cannot execute, it may abort all or part of the process, require schedules and trades in the Adjustment Period, and issue a Watch. [e33]
- **Questions #12** (cites e34, e35, e11, e36): ERCOT corrects prices when a solution or prices are invalid and the impact is significant, with thresholds such as $0.05/MWh at a Resource Node. [e34][e35] Prices are final at 1000 on the second Business Day, but Board review is possible if ERCOT gave notice within 30 days. [e11][e36]
- **Questions #14** (cites e30, e31): ESRs are not eligible, and a Resource whose commitment is contiguous with a self-committed hour is not eligible for startup compensation. [e30][e31]
- **Scenarios #2** (cites e51): - It is paid for 60 MW at the DAM price and charged the real-time price for the 10 MW shortfall, per ERCOT's training scenario. [e51]
- **Link to rtm** (cites e3): contrasts-with Real-Time Market (RTM): The RTM settles on 15-minute intervals from SCED prices, while the DAM settles on one-hour intervals from the DAM clearing. [e3]
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

