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

## Statements to check (new or changed since the last audit)

- **Link to resource-node** (cites e1, e2): composed-of Resource Node: A Resource Node is one kind of Settlement Point, where generator prices are calculated. [e1][e2]
- **Link to load-zone** (cites e1, e4): composed-of Load Zone: A Load Zone is one kind of Settlement Point, its real-time price is based on state-estimated Load and time-weighted average Real-Time LMPs. [e1][e4]
- **Link to trading-hub** (cites e1, e5): composed-of Trading Hubs: A Hub is one kind of Settlement Point, its real-time price follows the method in its definition. [e1][e5]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): Each Settlement Point gets a Settlement Point Price for each Settlement Interval. [e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Settlement Point Prices are calculated using LMP data. [e3]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The Settlement Point Price definition refers to the DAM Settlement formulas. [e3]
- **Link to rtm** (cites e9, e8): used-in Real-Time Market (RTM): Real-time Energy Imbalance Service is charged or paid at the Real-Time Settlement Point Price at a Resource Node (and, per the Load Zone section, a Load Zone). [e9][e8]
- **Link to ptp-obligation** (cites e11): used-in PTP Obligation: A PTP Obligation settles on the difference in DASPP between sink and source Settlement Points. [e11]
- **Link to congestion** (cites e10): related Transmission Congestion: A Self-Schedule's real-time congestion charge is the difference in prices at its sink and source Settlement Points times its amount. [e10]
- **Link to crr** (cites e11): related CRR (Congestion Revenue Right): CRR payments are based on Settlement Point price differences between sink and source. [e11]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A settlement point is any of the three places ERCOT actually prices energy for settlement: a resource node for generators, a load zone for load, and a hub. The LMP is the underlying bus price; the settlement point price is what gets paid.

