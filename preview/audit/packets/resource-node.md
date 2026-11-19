# Audit packet: Resource Node (resource-node)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Resource Node · text copy line 2671

BEFORE: …-----------------------------------------------------------+ Resource ID (RID) A unique identifier assigned to each ERCOT-Polled Settlement (EPS) Meter or Settlement Only Generator (SOG) meter. The RID for a SOG meter may be identical to the SOG's Electric Service Identifier (ESI ID). Resource Node 
QUOTE: Either a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource (ESR) is calculated and used in Settlement. All Resource Nodes shall be identified in accordance with Section 22, Attachment R, Procedure for Identifying Resource Nodes.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.1 · text copy line 2750 · heading above: 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes

BEFORE: …----------------+ 4.6 DAM Settlement 4.6.1 Day-Ahead Settlement Point Prices (1) The Day-Ahead Settlement Point Price (DASPP) calculations are described in this Section for Resource Nodes, Load Zones, Hubs, and logical Resource Nodes. 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes (1) 
QUOTE: The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process.
AFTER:  4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: D…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1) · text copy line 3703 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) 
QUOTE: The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy.
AFTER:  The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y))))) Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ---------…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1) · text copy line 3795 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.1.2 Real-Time Settlement Point Price for a Load Zone (1) 
QUOTE: The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone.
AFTER:  The Real-Time Settlement Point Price for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y…

### e7 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(g), Energy trading hubs · text copy line 77

BEFORE: …ction (h) of this section. (f) Nodal energy prices for resources. ERCOT shall use nodal energy prices for resources. Nodal energy prices for resources shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch. (g) 
QUOTE: Energy trading hubs. ERCOT shall provide information for energy trading hubs by aggregating nodes and calculating an average price for each aggregation, for each financial settlement interval.
AFTER:  (h) Zonal energy prices for loads. ERCOT shall use zonal energy prices for loads that consist of an aggregation of either the individual load node energy prices within each zone or the individual §25.501--1 effective date 4/18/12 (P39917) CHAPTER 25. SUBSTANTIVE PROVIDERS. Subchapter S. RULES APPLI…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.2, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval
AFTER: , using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executi…

## Statements to check

- **Definition #1** (cites e1): A Resource Node is either a logical construct that creates a virtual pricing point needed to model a Combined-Cycle Configuration, or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e1] All Resource Nodes are identified under Section 22, Attachment R. [e1]
- **How it works #1** (cites e3, e4, e6): In the day-ahead, the price at a Resource Node for an hour is simply the LMP at that node from the DAM process. [e3] In real time, the price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e4][e6]
- **ERCOT context #1** (cites e1, e2, e7, e4, e5): The Resource Node is the generator's side of the market: it is a Settlement Point alongside the Load Zone and Hub, and it is the point where a Generation Resource or ESR price is calculated, whereas a Hub aggregates nodes into an average price. [e1][e2][e7] Because the Load Zone price is based on state-estimated Load and time-weighted average LMPs across buses in the zone, a generator paid at its node and a load paid at its zone can see different prices in the same interval. [e4][e5]
- **Key facts #1** (cites e1): - A Resource Node can be an Electrical Bus or a virtual point used to model a Combined-Cycle Configuration. [e1]
- **Key facts #2** (cites e1): - Resource Nodes apply to Generation Resources and Energy Storage Resources. [e1]
- **Key facts #3** (cites e3): - The day-ahead Resource Node price is the DAM LMP at that node. [e3]
- **Key facts #4** (cites e4): - The real-time Resource Node price includes the Reliability Deployment Price Adder for Energy. [e4]
- **Common confusion #1** (cites e1, e7): - Resource Node versus Hub: a Hub aggregates nodes into an average price; a Resource Node is where a Generation Resource's or ESR's price is calculated. [e1][e7]
- **Common confusion #2** (cites e5): - Resource Node versus Load Zone: the zone price is based on state-estimated Load and time-weighted average LMPs across the zone's buses, not a single node. [e5]
- **Questions #2** (cites e3): The DASPP at its Resource Node, which is the LMP at that node for the hour from the DAM. [e3]
- **Questions #4** (cites e1): Yes. It can be a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Resource Node is one of the three kinds of Settlement Point. [e2]
- **Link to spp** (cites e3, e4): determines SPP (Settlement Point Price): The Resource Node price is the DAM LMP in the day-ahead and a time-weighted LMP plus adder in real time. [e3][e4]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Resource Node prices are built directly from LMPs at that node. [e3]
- **Link to load-zone** (cites e1, e5): contrasts-with Load Zone: A Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone, while a Resource Node is the point where a Resource's price is calculated. [e1][e5]
- **Link to trading-hub** (cites e7, e1): contrasts-with Trading Hubs: Hub information comes from aggregating nodes and calculating an average price; a Resource Node is where a Generation Resource or ESR price is calculated. [e7][e1]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The resource node is the pricing point where a generator or battery is paid. Its day-ahead price is the node LMP, and its real-time price is the time-weighted node LMP plus any reliability deployment adder.

