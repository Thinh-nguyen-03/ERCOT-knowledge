# Audit packet: Settlement Point (settlement-point)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Resource Node · text copy line 2671

BEFORE: …-----------------------------------------------------------+ Resource ID (RID) A unique identifier assigned to each ERCOT-Polled Settlement (EPS) Meter or Settlement Only Generator (SOG) meter. The RID for a SOG meter may be identical to the SOG's Electric Service Identifier (ESI ID). Resource Node 
QUOTE: Either a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource (ESR) is calculated and used in Settlement.
AFTER:  All Resource Nodes shall be identified in accordance with Section 22, Attachment R, Procedure for Identifying Resource Nodes. +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point Price · text copy line 2915

BEFORE: …nly Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point A Resource Node, Load Zone, or Hub. Settlement Point Price 
QUOTE: A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations.
AFTER:  Settlement Quality Meter Data Data that has been edited, validated, and is appropriate for ERCOT to use for Settlement and billing purposes. Settlement Statement A statement issued by ERCOT reflecting a breakdown of administrative, miscellaneous, and market charges for the applicable market service…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1) · text copy line 3795 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.1.2 Real-Time Settlement Point Price for a Load Zone (1) 
QUOTE: The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone.
AFTER:  The Real-Time Settlement Point Price for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.3, paragraph (1) · text copy line 3872 · heading above: 6.6.1.3 Real-Time Settlement Point Price for a Hub

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.3 Real-Time Settlement Point Price for a Hub (1) 
QUOTE: The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions.
AFTER:  6.6.1.4 Load Zone LMPs (1) The Load Zone LMPs shall be posted on the ERCOT website. The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone. The Load Zone LMP for a Load Zone for a SCED interval is calculated as follows:…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.2, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval
AFTER: , using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executi…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.2.1, Day-Ahead Energy Payment · text copy line 2857 · heading above: 4.6.2.1 Day-Ahead Energy Payment

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 4.6.2 Day-Ahead Energy and Make-Whole Settlement 4.6.2.1 Day-Ahead Energy Payment (1) 
QUOTE: The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves. The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows:
AFTER:  DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, paragraph (1), items (a)-(c) · text copy line 5145 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus
AFTER:  (d) The amount of its Self-Schedules with source specified at the Settlement Point; minus (e) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (f) The amount of its Energy Trades at the Settlement Point where the QSE is the seller; minus (g) Its AML at the Settlemen…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, paragraph (1) · text copy line 4668 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.3 Real-Time Energy Charges and Payments 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Resource Node Settlement Point:
AFTER:  (a) The energy produced by all its Generation Resources, consumed as WSL, or consumed as Non-WSL ESR Charging Load at the Settlement Point; plus +---------------------------------------------------------------------------------------------------------------------------------------------------------…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.4, paragraph (1) · text copy line 6104 · heading above: 6.6.4 Real-Time Congestion Payment or Charge for Self-Schedules

BEFORE: …----------------- [NPRR1229: Delete Section 6.6.3.11 above upon system implementation.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 6.6.4 Real-Time Congestion Payment or Charge for Self-Schedules (1) 
QUOTE: The congestion payment or charge to each QSE submitting a Self-Schedule calculated based on the difference in Real-Time Settlement Point Prices at the specified sink and the source of the Self-Schedule multiplied by the amount of the Self-Schedule.
AFTER:  The congestion charge to each QSE for each of its Self-Schedule for a given 15-minute Settlement Interval is calculated as follows: RTCCAMT _(q, s) = (RTSPP _(sink, s) - RTSPP _(source, s)) * (SSQ _(q, s) * 1⁄4) The above variables are defined as follows: -------------------------------------------…

### e11 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, paragraph (1) · text copy line 1412 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …ugh the ERCOT CRR registration system prior to the DAM. PTP Obligations acquired in DAM may not change ownership in the ERCOT CRR registration system after DAM execution. 7.9 CRR Settlements 7.9.1 Day-Ahead CRR Payments and Charges 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM (1) 
QUOTE: Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point.
AFTER:  (2) For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions. (3) The payment or charge to each CRR Owner for a given Operating Hour…

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executions of SCED in the Settlement Interval. 
QUOTE: In contrast, the Day-Ahead Market (DAM) energy settlements will use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval, and DAM Ancillary Service Settlements will use DAM MCPCs for a one-hour Settlement Interval.
AFTER:  (5) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT-administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (2) · text copy line 3813 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: … * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y) * SEL _(b, y)) / []SEL _(b, y) For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y) Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y)= TLMP _(y) / []TLMP _(y) (2) 
QUOTE: For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrated value for the 15-minute interval) but varies with each SCED interval within the 15-minute Settlement Interval, an energy-weighted Real-Time Settlement Point Price shall be used and is calculated as follows:
AFTER:  RTSPPEW = Max [-$251, ([][](RTLMP _(b, y) * LZWF _(b, y)) + RTRDP)] For all Load Zones except DC Tie Load Zones: LZWF _(b, y) = (SEL _(b, y) * TLMP _(y)) / [[][](SEL _(b, y) * TLMP _(y))] For a DC Tie Load Zone: LZWF _(b, y) = (SEL _(b, y) * TLMP _(y)) / [[][](SEL _(b, y) * TLMP _(y))] SEL _(b, y) …

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, Hub LMPs, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e15 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, Process for Defining Hubs, paragraph (1) · text copy line 2363 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: …on Zone with the closest matching zonal Settlement Point Price to the new Electrical Bus's LMP. (f) For each new Electrical Bus not covered in paragraph (a), the new Electrical Bus is assigned to the same Cost Allocation Zone as its designated Load Zone; 3.5 Hubs 3.5.1 Process for Defining Hubs (1) 
QUOTE: Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses.
AFTER:  ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website. A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub. (2) When any Electrical Bus within a Hub Bus is added to the Network Operations M…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ty-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy. 
QUOTE: ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order:
AFTER:  (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specified (b) Use the following rules in order: (i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist.…

### e17 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Interval · text copy line 2843

BEFORE: …ations between a Market Participant and ERCOT. Settlement Calendar A calendar that provides information on when Settlement Statements and Invoices shall be posted, payment due dates, and dispute deadlines. Additional information is provided in Section 9.1.2, Settlement Calendar. Settlement Interval 
QUOTE: The time period for which markets are settled.
AFTER:  Settlement Invoice A notice for payment or credit due rendered by ERCOT based on data contained in Settlement Statements. Settlement Meter Generation and end-use consumption meters used for allocation of ERCOT charges and wholesale and retail Settlements. +------------------------------------------…

## Statements to check

- **Definition #1** (cites e1): A Settlement Point is a Resource Node, a Load Zone, or a Hub. [e1]
- **How it works #1** (cites e3, e6): A Settlement Point Price is calculated for each Settlement Point for each Settlement Interval, using LMP data and the formulas in the day-ahead (DAM Settlement) and real-time settlement sections of the Protocols. [e3] In real time those prices are calculated for Resource Nodes, Load Zones and Hubs for each 15-minute Settlement Interval. [e6]
- **How it works #2** (cites e2, e4, e5): The three kinds are priced by their own methods. A Resource Node is where the price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e2] The Real-Time Settlement Point Price for a Load Zone is based on state-estimated Load and the time-weighted average Real-Time LMPs at the buses in the zone. [e4] The Real-Time Settlement Point Price at a Hub follows the methodology in that Hub's own definition. [e5]
- **How it works #4** (cites e7, e9, e8, e10, e11, e12): Day-ahead energy is paid to the QSE for each Settlement Point and hour at the DASPP there. [e7] Real-time Energy Imbalance Service is charged or paid at the Real-Time Settlement Point Price at each Resource Node, Load Zone and Hub, using separate quantity lists for each kind. [e9][e8] The Load Zone list, for example, starts from Self-Schedules sinking at the point, DAM Energy Bids cleared there and Energy Trades where the QSE is buyer, less the matching source-side items. [e8] A Self-Schedule's real-time congestion charge is the sink price minus the source price times the amount. [e10] A DAM PTP Obligation settles on the DASPP difference between sink and source, though a positive value sinking at a Resource Node may be reduced. [e11] Day-ahead Ancillary Service settlements do not use Settlement Point Prices: they use DAM MCPCs. [e12]
- **How it works #5** (cites e17, e12, e6, e13): Interval basis: a Settlement Interval is the time period for which markets are settled. [e17] DAM energy uses a one-hour Settlement Interval and real time a 15-minute one. [e12][e6] Where a 15-minute Load Zone quantity varies with each SCED interval, an energy-weighted Real-Time Settlement Point Price is used instead of the simple time-weighted one. [e13]
- **How it works #6** (cites e15, e14, e16) FLAG number-not-in-quote: 6.6: Hubs: a Hub is made of one or more Electrical Buses and can be created only by amending Section 3.5.2. [e15] The Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses, except for the ERCOT Hub Average 345 kV Hub. [e14] De-energized buses get an LMP by heuristic rules defined in Section 6.6.1. [e16]
- **ERCOT context #1** (cites e6, e2, e4): Real-time energy settlements use Settlement Point Prices calculated for Resource Nodes, Load Zones and Hubs. [e6] A Resource Node price is calculated for a Generation Resource or ESR, and a Load Zone price is calculated from Load and the LMPs at the buses in the zone. [e2][e4]
- **Key facts #1** (cites e1): - Settlement Points are Resource Nodes, Load Zones and Hubs. [e1]
- **Key facts #2** (cites e3): - A Settlement Point Price is calculated per Settlement Interval from LMP data. [e3]
- **Key facts #3** (cites e6): - Real-time settlement prices are calculated for a 15-minute Settlement Interval. [e6]
- **Key facts #4** (cites e7, e9, e10, e11, e12): - Day-ahead energy payments, real-time imbalance, Self-Schedule congestion and PTP Obligations all settle on Settlement Point Prices, while day-ahead Ancillary Services use MCPCs. [e7][e9][e10][e11][e12]
- **Key facts #5** (cites e5): - Real-Time Hub prices follow the method written in each Hub's definition in Section 3.5.2. [e5]
- **Common confusion #1** (cites e1): - Settlement Point versus bus: only Resource Nodes, Load Zones and Hubs are Settlement Points. [e1]
- **Common confusion #2** (cites e3): - Settlement Point Price versus LMP: the SPP is calculated from LMP data by the settlement formulas. [e3]
- **Questions #2** (cites e1): Resource Nodes, Load Zones and Hubs. [e1]
- **Questions #4** (cites e2, e4, e9, e8): Generator energy settles at a Resource Node price, while Load Zone prices are state-estimated-Load-weighted averages across buses in the zone. [e2][e4] Imbalance charges are computed separately at each Settlement Point. [e9][e8]
- **Questions #6** (cites e16): ERCOT assigns it an LMP by ordered heuristic rules, starting from a predetermined LMP for that bus. [e16]
- **Questions #8** (cites e2): Its Resource Node, which is where the Settlement Point Price for a Generation Resource or ESR is calculated and used in Settlement. [e2]
- **Questions #10** (cites e6): For each 15-minute Settlement Interval. [e6]
- **Link to resource-node** (cites e1, e2): composed-of Resource Node: A Resource Node is one kind of Settlement Point, where generator prices are calculated. [e1][e2]
- **Link to load-zone** (cites e1, e4): composed-of Load Zone: A Load Zone is one kind of Settlement Point, its real-time price is based on state-estimated Load and time-weighted average Real-Time LMPs. [e1][e4]
- **Link to trading-hub** (cites e1, e5): composed-of Trading Hubs: A Hub is one kind of Settlement Point, its real-time price follows the method in its definition. [e1][e5]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): Each Settlement Point gets a Settlement Point Price for each Settlement Interval. [e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Settlement Point Prices are calculated using LMP data. [e3]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The Settlement Point Price definition refers to the DAM Settlement formulas. [e3]
- **Link to rtm** (cites e9): used-in Real-Time Market (RTM): Real-time Energy Imbalance Service is charged or paid at the Real-Time Settlement Point Price for each Settlement Point. [e9]
- **Link to ptp-obligation** (cites e11): used-in PTP Obligation: A PTP Obligation settles on the difference in DASPP between sink and source Settlement Points. [e11]
- **Link to congestion** (cites e10): related Transmission Congestion: A Self-Schedule's real-time congestion charge is the difference in prices at its sink and source Settlement Points times its amount. [e10]
- **Link to crr** (cites e11): related CRR (Congestion Revenue Right): CRR payments are based on Settlement Point price differences between sink and source. [e11]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A settlement point is any of the three places ERCOT actually prices energy for settlement: a resource node for generators, a load zone for load, and a hub. The LMP is the underlying bus price; the settlement point price is what gets paid.

