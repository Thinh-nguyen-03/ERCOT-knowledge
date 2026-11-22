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

### e9 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 2. Resource Connectivity Nodes, items a-b · text copy line 95

BEFORE: …===================================================================================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ b. 
QUOTE: Generator output is injected and ESR charging consumption is withdrawn at the Resource Connectivity Node.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [OBDRR046: Replace paragraph b above with the following upon system implementation of NPRR1188:] | | | | b. Generat…

### e12 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.1 Resource Node Definition, items g-h · text copy line 126 · heading above: 3.1 Resource Node Definition

BEFORE: … Only DAM Energy-Only Offers, DAM Energy Bids and PTP bids can be submitted and settled at a PUN Resource Node. g. Multiple Generation Resources and ESRs can be mapped to the same Resource Node, i.e. offers from different Generation Resources and ESRs can be settled at the same Settlement Point. h. 
QUOTE: A Generation Resource can only be mapped to one Resource Node, i.e. offers from a Generation Resource can only be settled at one Settlement Price. Similarly, an ESR can only be mapped to one Resource Node, i.e. offers/bids from an ESR can only be settled at one Settlement Point.
AFTER:  i. The Resource Nodes for "single" Resources and for Resources that are a component of a CCP shall be identified prior to the identification of the PUN Resource Nodes. Once those Resource Nodes have been located, the PUN Resource Nodes shall be located for PUN Resources that are not co-located with…

### e15 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item f · text copy line 189 · heading above: 3.2 Resource Node Location

BEFORE: … Settlement Point Prices (SPPs) for de-energized Resource Nodes are calculated using heuristic rules. e. Generic Transmission Constraint (GTC) Rule: A GTC cannot include Transmission Elements between a Resource Node and any Generation Resources or ESRs mapped to it. f. Transmission Constraint Rule: 
QUOTE: Initial placement of the Resource Node should not be such that Transmission Elements between Resource Node and associated Resource Connectivity Nodes could be constrained.
AFTER:  The parameters of the Network Operations Model are evaluated at that point in time when the determination of the Resource Node placement is being made such that there is no congestion between the location of the Resource Node and the Resource Connectivity Node that the Generation Resource or ESR is…

### e17 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, paragraph (2) · text copy line 1414 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …arges for PTP Obligations Settled in DAM (1) Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point. (2) 
QUOTE: For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions.
AFTER:  (3) The payment or charge to each CRR Owner for a given Operating Hour of PTP Obligations with each pair of source and sink Settlement Points settled in the Day-Ahead Market (DAM) is calculated as follows: If the PTP Obligation has a non-positive value, i.e. (DAOBLPR _((j, k)) ≤ 0), or the sink, k,…

### e32 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.1 Resource Node Definition, item c (PTP bids) · text copy line 114 · heading above: 3.1 Resource Node Definition

BEFORE: …) Resource Nodes and Private Use Network (PUN) Resource Nodes. c. A Generation Resource Node represents the Settlement Point for ERCOT and PUN Generation Resources and ESRs. The Three-Part Supply Offers, Energy Bid/Offer Curves, DAM Energy-Only Offers, Ancillary Service Offers, and DAM Energy Bids, 
QUOTE: as well as Point-to-Point (PTP) bids, can be submitted and settled at a Generation Resource Node, unless that Generation Resource Node is within a PUN site where constrainable Transmission Element(s) exist between the Generation Resource Node and ERCOT-Polled Settlement (EPS) Meter, in which case only Three-Part Supply Offers, Energy Bid/Offer Curves, and Ancillary Service Offers can be submitted and settled.
AFTER:  i. Generation Resource Node within a PUN site refers to those Resource Nodes defined for Generation Resources and ESRs within a PUN site that cannot be placed at the PUN Point of Interconnection (POI) due to the rules for placement of Resource Nodes described in Section 3.2, Resource Node Location.…

## Statements to check (new or changed since the last audit)

- **Link to settlement-point** (cites e2): is-a Settlement Point: A Resource Node is one of the three kinds of Settlement Point. [e2]
- **Link to spp** (cites e3, e4): determines SPP (Settlement Point Price): The Resource Node price is the DAM LMP in the day-ahead and a time-weighted LMP plus adder in real time. [e3][e4]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Resource Node prices are built directly from LMPs at that node. [e3]
- **Link to load-zone** (cites e1, e5): contrasts-with Load Zone: A Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone, while a Resource Node is the point where a Resource's price is calculated. [e1][e5]
- **Link to trading-hub** (cites e7, e1) FLAG number-not-in-quote: 25.501: contrasts-with Trading Hubs: Under PUCT rule 25.501(g), hub information comes from aggregating nodes and calculating an average price; a Resource Node is where a Generation Resource or ESR price is calculated. [e7][e1]
- **Link to crr** (cites e17): related CRR (Congestion Revenue Right): A PTP Obligation that sinks at a Resource Node can have its positive payment reduced by oversold network elements. [e17]
- **Link to ptp-obligation** (cites e32): related PTP Obligation: PTP bids can be submitted and settled at a Generation Resource Node, subject to the PUN exception. [e32]
- **Link to energy-storage-resource** (cites e12, e9): related Energy Storage Resource (ESR): An ESR can be mapped to only one Resource Node, and its charging consumption is withdrawn at the Resource Connectivity Node. [e12][e9]
- **Link to congestion** (cites e15): related Transmission Congestion: The placement rules aim at no congestion between the Resource Node and the physical connection point. [e15]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The resource node is the pricing point where a generator or battery is paid. Its day-ahead price is the node LMP, and its real-time price is the time-weighted node LMP plus any reliability deployment adder.

