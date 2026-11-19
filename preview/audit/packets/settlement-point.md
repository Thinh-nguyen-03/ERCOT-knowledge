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

## Statements to check

- **Definition #1** (cites e1): A Settlement Point is a Resource Node, a Load Zone, or a Hub. [e1]
- **How it works #1** (cites e3, e6): A Settlement Point Price is calculated for each Settlement Point for each Settlement Interval, using LMP data and the formulas in the day-ahead (DAM Settlement) and real-time settlement sections of the Protocols. [e3] In real time those prices are calculated for Resource Nodes, Load Zones and Hubs for each 15-minute Settlement Interval. [e6]
- **How it works #2** (cites e2, e4, e5): The three kinds are priced by their own methods. A Resource Node is where the price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e2] The Real-Time Settlement Point Price for a Load Zone is based on state-estimated Load and the time-weighted average Real-Time LMPs at the buses in the zone. [e4] The Real-Time Settlement Point Price at a Hub follows the methodology in that Hub's own definition. [e5]
- **ERCOT context #1** (cites e6, e2, e4): Real-time energy settlements use Settlement Point Prices calculated for Resource Nodes, Load Zones and Hubs. [e6] A Resource Node price is calculated for a Generation Resource or ESR, and a Load Zone price is calculated from Load and the LMPs at the buses in the zone. [e2][e4]
- **Key facts #1** (cites e1): - Settlement Points are Resource Nodes, Load Zones and Hubs. [e1]
- **Key facts #2** (cites e3): - A Settlement Point Price is calculated per Settlement Interval from LMP data. [e3]
- **Key facts #3** (cites e6): - Real-time settlement prices are calculated for a 15-minute Settlement Interval. [e6]
- **Key facts #4** (cites e5): - Real-Time Hub prices follow the method written in each Hub's definition in Section 3.5.2. [e5]
- **Common confusion #1** (cites e1): - Settlement Point versus bus: only Resource Nodes, Load Zones and Hubs are Settlement Points. [e1]
- **Common confusion #2** (cites e3): - Settlement Point Price versus LMP: the SPP is calculated from LMP data by the settlement formulas. [e3]
- **Questions #2** (cites e1): Resource Nodes, Load Zones and Hubs. [e1]
- **Questions #4** (cites e2): Its Resource Node, which is where the Settlement Point Price for a Generation Resource or ESR is calculated and used in Settlement. [e2]
- **Questions #6** (cites e6): For each 15-minute Settlement Interval. [e6]
- **Link to resource-node** (cites e1, e2): composed-of Resource Node: A Resource Node is one kind of Settlement Point, where generator prices are calculated. [e1][e2]
- **Link to load-zone** (cites e1, e4): composed-of Load Zone: A Load Zone is one kind of Settlement Point, its real-time price is based on state-estimated Load and time-weighted average Real-Time LMPs. [e1][e4]
- **Link to trading-hub** (cites e1, e5): composed-of Trading Hubs: A Hub is one kind of Settlement Point, its real-time price follows the method in its definition. [e1][e5]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): Each Settlement Point gets a Settlement Point Price for each Settlement Interval. [e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Settlement Point Prices are calculated using LMP data. [e3]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The Settlement Point Price definition refers to the DAM Settlement formulas. [e3]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A settlement point is any of the three places ERCOT actually prices energy for settlement: a resource node for generators, a load zone for load, and a hub. The LMP is the underlying bus price; the settlement point price is what gets paid.

