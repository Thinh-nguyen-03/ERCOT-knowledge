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
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval
AFTER: , using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executi…

### e8 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Procedure to Incorporate a Resource Node into the Network Operations Model, items 4-5 · text copy line 28

BEFORE: …n ERCOT. 2. The Network Modeling Group will utilize the "Principles for Resource Node Definition" located in Appendix A to determine the Resource Node parameters. 3. The Network Modeling Group will provide documentation back to the Resource Entity clearly indicating the Resource Node parameters. 4. 
QUOTE: The Resource Entity will have five Business Days to accept or reject the suggested Resource Node parameters.
AFTER:  5. If there are any disagreements with the Resource Node parameters, ERCOT and the Resource Entity shall work together to reach agreement. 6. If agreement cannot be reached by ERCOT and the Resource Entity, the Wholesale Market Subcommittee (WMS) or appropriate WMS working group shall help guide th…

### e9 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 2. Resource Connectivity Nodes, items a-b · text copy line 95

BEFORE: …===================================================================================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ b. 
QUOTE: Generator output is injected and ESR charging consumption is withdrawn at the Resource Connectivity Node.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [OBDRR046: Replace paragraph b above with the following upon system implementation of NPRR1188:] | | | | b. Generat…

### e10 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Procedure to Incorporate a Resource Node into the Network Operations Model, item 9 · text copy line 38

BEFORE: …rce Entity, the Resource Node parameters will be implemented in the Network Operations Model. 8. The normal timeline for this procedure shall not exceed 20 Business Days after the submission date of validated Resource Registration information that includes a detailed electrical one-line drawing. 9. 
QUOTE: In the event that agreement between ERCOT and the Resource Entity cannot be reached within 20 Business Days, no Resource Node parameters will be entered into the Network Operations Model. This may have an effect on Congestion Revenue Right (CRR) Network Models and associated CRR activities regarding the Generation Resource or ESR in question. There must be an agreement between ERCOT and the Resource Entity before Resource Node parameters will be implemented into the Network Operations Model.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e11 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.1 Resource Node Definition, item c · text copy line 114 · heading above: 3.1 Resource Node Definition

BEFORE: …e represents the Electrical Bus or the logical construct that defines the location of a Settlement Point. b. Resource Nodes include Generation Resource Nodes, Combined Cycle Plant (CCP) Logical Resource Nodes, Combined Cycle Unit (CCU) Resource Nodes and Private Use Network (PUN) Resource Nodes. c. 
QUOTE: A Generation Resource Node represents the Settlement Point for ERCOT and PUN Generation Resources and ESRs.
AFTER:  The Three-Part Supply Offers, Energy Bid/Offer Curves, DAM Energy-Only Offers, Ancillary Service Offers, and DAM Energy Bids, as well as Point-to-Point (PTP) bids, can be submitted and settled at a Generation Resource Node, unless that Generation Resource Node is within a PUN site where constrainab…

### e12 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.1 Resource Node Definition, items g-h · text copy line 126 · heading above: 3.1 Resource Node Definition

BEFORE: … Only DAM Energy-Only Offers, DAM Energy Bids and PTP bids can be submitted and settled at a PUN Resource Node. g. Multiple Generation Resources and ESRs can be mapped to the same Resource Node, i.e. offers from different Generation Resources and ESRs can be settled at the same Settlement Point. h. 
QUOTE: A Generation Resource can only be mapped to one Resource Node, i.e. offers from a Generation Resource can only be settled at one Settlement Price. Similarly, an ESR can only be mapped to one Resource Node, i.e. offers/bids from an ESR can only be settled at one Settlement Point.
AFTER:  i. The Resource Nodes for "single" Resources and for Resources that are a component of a CCP shall be identified prior to the identification of the PUN Resource Nodes. Once those Resource Nodes have been located, the PUN Resource Nodes shall be located for PUN Resources that are not co-located with…

### e13 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item a · text copy line 175 · heading above: 3.2 Resource Node Location

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.2 Resource Node Location a. 
QUOTE: First Fork Rule: Locate Resource Node at the first Electrical Bus with alternate paths starting from the Generation Resource Connectivity Node. Parallel network paths do not count as alternate paths.
AFTER:  i. Exception: There is an exception to this rule for placing Generation Resource Nodes and CCU Resource Nodes that are mapped to Generation Resources or ESRs within a PUN. If the Generation Resource(s) and/or ESR(s) is within a PUN that has only one interconnection to the ERCOT Transmission Grid, l…

### e14 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item d · text copy line 185 · heading above: 3.2 Resource Node Location

BEFORE: …tachment. Please refer to paragraph (h)(ii) below for a list of exceptions under which ERCOT can relocate a Resource Node. c. Ownership Rule: Locate Resource Node at the Electrical Bus that is the ERCOT POI (if practical). Subsequent ownership changes shall not change the Resource Node location. d. 
QUOTE: De-Energization Rule: Locate Resource Node at Electrical Bus that is less often de-energized, if alternate choices exist. Settlement Point Prices (SPPs) for de-energized Resource Nodes are calculated using heuristic rules.
AFTER:  e. Generic Transmission Constraint (GTC) Rule: A GTC cannot include Transmission Elements between a Resource Node and any Generation Resources or ESRs mapped to it. f. Transmission Constraint Rule: Initial placement of the Resource Node should not be such that Transmission Elements between Resource…

### e15 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item f · text copy line 189 · heading above: 3.2 Resource Node Location

BEFORE: … Settlement Point Prices (SPPs) for de-energized Resource Nodes are calculated using heuristic rules. e. Generic Transmission Constraint (GTC) Rule: A GTC cannot include Transmission Elements between a Resource Node and any Generation Resources or ESRs mapped to it. f. Transmission Constraint Rule: 
QUOTE: Initial placement of the Resource Node should not be such that Transmission Elements between Resource Node and associated Resource Connectivity Nodes could be constrained.
AFTER:  The parameters of the Network Operations Model are evaluated at that point in time when the determination of the Resource Node placement is being made such that there is no congestion between the location of the Resource Node and the Resource Connectivity Node that the Generation Resource or ESR is…

### e16 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item i · text copy line 209 · heading above: 3.2 Resource Node Location

BEFORE: … existing Resource Node to an appropriate location to: A. Align with the correct implementation of DGRs and DESRs, as stated in paragraph (m) of Section 3.1, Resource Node Definition, above, in the Network Operations Model; B. Account for a series compensator(s); or C. Implement station renames. i. 
QUOTE: If all rules cannot be simultaneously satisfied, then the rules are listed in order of priority. ERCOT will use discretion in choosing the appropriate Resource Node location, assuming that such a location does not allow the Resource Entity to control its Resource Node price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, paragraph (2) · text copy line 1414 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …arges for PTP Obligations Settled in DAM (1) Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point. (2) 
QUOTE: For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions.
AFTER:  (3) The payment or charge to each CRR Owner for a given Operating Hour of PTP Obligations with each pair of source and sink Settlement Points settled in the Day-Ahead Market (DAM) is calculated as follows: If the PTP Obligation has a non-positive value, i.e. (DAOBLPR _((j, k)) ≤ 0), or the sink, k,…

### e18 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Procedure to Retire a Resource Node in the Network Operations Model, items 1-2 · text copy line 55

BEFORE: …source Node parameters, associated electrical one-line drawings, and other relevant data shall be posted on the Market Information System (MIS) Secure Area and will be available to Market Participants with Digital Certificates. Procedure to Retire a Resource Node in the Network Operations Model: 1. 
QUOTE: Resource Nodes cannot be retired until all outstanding CRRs on that Resource Node have been settled or a model error was identified in the creation of the Resource Node. Transmission Service Providers (TSPs) cannot submit Network Operations Model Change Requests (NOMCRs) to delete a Resource Node.
AFTER:  2. ERCOT's Forward Markets will identify a nearby energized bus to move the location of the retiring Resource Node until such time as all the outstanding CRRs are settled once it has been notified that equipment tied to a Resource Node is requested to be removed from the Network Operations Model. I…

### e19 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 4.1 CCP Logical Resource Node, items b-c · text copy line 260 · heading above: 4.1 CCP Logical Resource Node

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------+ 4. Combined Cycle Plant (CCP) Modeling 4.1 CCP Logical Resource Node a. Each CCP configuration for a train represents a CCP Logical Generation Resource. b. 
QUOTE: Each CCP Logical Generation Resource is mapped to a CCP Logical Resource Node. All CCP Logical Generation Resources, i.e. all CCP configurations for a train are mapped to the same CCP Logical Resource Node.
AFTER:  c. Each CCP train has its own CCP Logical Resource Node, i.e. CCP Logical Generation Resources for different CCP trains are mapped to different CCP Logical Resource Nodes. d. Each CCP Logical Resource Node is a Settlement Point. e. CCP Logical Resource Nodes are used only for Resource-specific Thre…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (2)(b) · text copy line 3765 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (b) 
QUOTE: For an On-Line Combined Cycle Train, the weight factor for each generation unit registered in an On-Line Combined Cycle Generation Resource shall be the Real-Time power output telemetry in each SCED interval for each generation unit registered in the Combined Cycle Generation Resource divided by the total Real-Time power output telemetry for all of the generation units registered in the Combined Cycle Generation Resource. For an Off-Line Combined Cycle Train, the weight factor for each generation unit designated in a Combined Cycle Train registration shall be its High Reasonability Limit (HRL) divided by the total sum of the HRL for all generation units registered in the Combined Cycle Train.
AFTER:  Where: RTONCCGRWF _(CCGR_PhyR, y) = TG _(CCGR_PhyR) / ∑_(CCGR_PhyR) TG _(CCGR_PhyR) RTOFFCCGRWF _(CCT_PhyR, y) = HRL _(CCT_PhyR) / ∑_(CCT_PhyR) HRL _(CCT_PhyR) The above variables are defined as follows: -----------------------------------------------------------------------------------------------…

### e21 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 5.1 PUN Resource Node, items a-b · text copy line 302 · heading above: 5.1 PUN Resource Node

BEFORE: …n here is that there is no congestion between the Resource Connectivity Node of the CCU and the Resource Node. i. RTM SPP for the CCP Logical Resource Node is the Base Point or time weighted average of RTM LMPs at Logical Resource Node. 5. Private Use Network (PUN) Modeling 5.1 PUN Resource Node a. 
QUOTE: The placement of a PUN Resource Node is optional. At a PUN, after all the Generation Resource Nodes, CCP Logical Resource Nodes and CCU Resource Nodes are placed (if applicable), if none of the Generation Resource Nodes or CCU Resource Nodes are placed where the EPS Meter is effectively located, then this is the location of the PUN Resource Node.
AFTER:  b. PUN Resource Node represents the Electrical Bus where an EPS Meter is effectively located that is measuring the flow at a POI with ERCOT. c. PUN Resource Node is a Settlement Point. d. PUN Resource Node cannot have mapped PUN Generation Resources or PUN ESRs. e. There can be several PUN Resource…

### e22 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.1 Resource Node Definition, items j-k · text copy line 130 · heading above: 3.1 Resource Node Definition

BEFORE: …gle" Resources and for Resources that are a component of a CCP shall be identified prior to the identification of the PUN Resource Nodes. Once those Resource Nodes have been located, the PUN Resource Nodes shall be located for PUN Resources that are not co-located with an existing Resource Node. j. 
QUOTE: Resource Nodes shall not be located at the Direct Current Ties (DC Ties). (The DC Ties are Load Zones.)
AFTER:  k. Resource Nodes shall not be located at the Block Load Transfer (BLT) buses. l. Do not identify or locate Resource Nodes for Non-Modeled Generators. m. The Resource Node for a Distribution Generation Resource (DGR) or Distribution Energy Storage Resources (DESRs) may be located at its Resource Co…

### e23 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Appendix A, 3.2 Resource Node Location, item c · text copy line 183 · heading above: 3.2 Resource Node Location

BEFORE: …ctively metered. If the EPS Meter location changes, then a new Resource Node must be established and the old Resource Node retired in accordance with the procedure in this attachment. Please refer to paragraph (h)(ii) below for a list of exceptions under which ERCOT can relocate a Resource Node. c. 
QUOTE: Ownership Rule: Locate Resource Node at the Electrical Bus that is the ERCOT POI (if practical). Subsequent ownership changes shall not change the Resource Node location.
AFTER:  d. De-Energization Rule: Locate Resource Node at Electrical Bus that is less often de-energized, if alternate choices exist. Settlement Point Prices (SPPs) for de-energized Resource Nodes are calculated using heuristic rules. e. Generic Transmission Constraint (GTC) Rule: A GTC cannot include Trans…

### e24 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Procedure to Incorporate a Resource Node into the Network Operations Model, item 10 · text copy line 47

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 10. 
QUOTE: Once effective in the Network Operations Model, the Resource Node name cannot be changed.
AFTER:  11. Once incorporated into the Network Operations Model, the Resource Node will be used in all associated ERCOT models, applications, and processes. 12. The Resource Node parameters, associated electrical one-line drawings, and other relevant data shall be posted on the Market Information System (M…

### e26 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Procedure to Incorporate a Resource Node into the Network Operations Model, item 6 · text copy line 32

BEFORE: …arly indicating the Resource Node parameters. 4. The Resource Entity will have five Business Days to accept or reject the suggested Resource Node parameters. 5. If there are any disagreements with the Resource Node parameters, ERCOT and the Resource Entity shall work together to reach agreement. 6. 
QUOTE: If agreement cannot be reached by ERCOT and the Resource Entity, the Wholesale Market Subcommittee (WMS) or appropriate WMS working group shall help guide the decision.
AFTER:  7. Upon an agreement between ERCOT and the Resource Entity, the Resource Node parameters will be implemented in the Network Operations Model. 8. The normal timeline for this procedure shall not exceed 20 Business Days after the submission date of validated Resource Registration information that inc…

### e25 · `np-22r` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment R: Procedure for Identifying Resource Nodes (effective 2026-04-01)
locator: Title page and Introduction (document dated April 1, 2026), pending box OBDRR046 · text copy line 16
FLAG pending-box: | [OBDRR046: Replace the paragraph above with the following upon system implementation of NPRR1188:] |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [OBDRR046: Replace the paragraph above with the following upon system implementation of NPRR1188:] | | | | 
QUOTE: This procedure is the guiding attachment for ERCOT and Market Participants with a Generation Resource, Energy Storage Resource (ESR), or Controllable Load Resource (CLR) that is not an Aggregate Load Resource (ALR), to identify Resource Nodes and manage the lifecycle of the Resource Node.
AFTER:  | +===================================================================================================================================================================================================================================================================================================+ +--…

## Statements to check

- **Definition #1** (cites e1): A Resource Node is either a logical construct that creates a virtual pricing point needed to model a Combined-Cycle Configuration, or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e1] All Resource Nodes are identified under Section 22, Attachment R. [e1]
- **How it works #1** (cites e3, e4, e6): In the day-ahead, the price at a Resource Node for an hour is simply the LMP at that node from the DAM process. [e3] In real time, the price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e4][e6]
- **ERCOT context #1** (cites e1, e2, e7, e4, e5): The Resource Node is the generator's side of the market: it is a Settlement Point alongside the Load Zone and Hub, and it is the point where a Generation Resource or ESR price is calculated, whereas a Hub aggregates nodes into an average price. [e1][e2][e7] Because the Load Zone price is based on state-estimated Load and time-weighted average LMPs across buses in the zone, a generator paid at its node and a load paid at its zone can see different prices in the same interval. [e4][e5]
- **ERCOT context #3** (cites e8, e10, e24): Section 22, Attachment R sets the procedure. The Resource Entity submits registration information with a one-line drawing, ERCOT's Network Modeling Group proposes the parameters, and the Resource Entity has five Business Days to accept or reject them. [e8] If there is no agreement within 20 Business Days, no Resource Node parameters are entered in the Network Operations Model, which may affect CRR Network Models and CRR activities for that Resource, and an agreement is required before implementation. [e10] Once effective, the Resource Node name cannot be changed. [e24]
- **ERCOT context #4** (cites e12, e11, e13, e14, e15, e16, e22, e23): A Generation Resource, or an ESR, can be mapped to only one Resource Node, so its offers settle at one price. [e12] Several Resources can share a node. [e11] The location is set by the First Fork Rule: the first Electrical Bus with alternate paths from the Resource Connectivity Node, where parallel paths do not count. [e13] Other rules favour a bus less often de-energized and a bus with no constrainable element between the node and the plant. [e14][e15] If the rules conflict they are applied in priority order, with ERCOT discretion, provided the Resource Entity cannot control its Resource Node price. [e16] Resource Nodes are not placed at DC Ties, which are Load Zones. [e22] After a later ownership change the node does not move. [e23]
- **ERCOT context #5** (cites e19, e20, e21): Combined cycle plants: each CCP train has a logical Resource Node to which all of its configurations map. [e19] In real time that node's price is the weighted average of unit node LMPs, weighted by telemetered output when On-Line and by High Reasonability Limit when the train is Off-Line. [e20] A Private Use Network Resource Node is optional and sits where the EPS Meter is effectively located when no other node does. [e21]
- **ERCOT context #6** (cites e18): Retirement: a Resource Node cannot be retired until outstanding CRRs on it have settled, unless a model error was made in creating it, and TSPs cannot submit a NOMCR to delete one. [e18]
- **ERCOT context #7** (cites e25) FLAG number-not-in-quote: 2026: Pending: the Attachment R text dated April 1, 2026 carries an OBDRR046 box that, upon system implementation of NPRR1188, extends the procedure to Controllable Load Resources that are not Aggregate Load Resources. It is not yet in effect. [e25]
- **Key facts #1** (cites e1): - A Resource Node can be an Electrical Bus or a virtual point used to model a Combined-Cycle Configuration. [e1]
- **Key facts #2** (cites e1): - Resource Nodes apply to Generation Resources and Energy Storage Resources. [e1]
- **Key facts #3** (cites e3): - The day-ahead Resource Node price is the DAM LMP at that node. [e3]
- **Key facts #4** (cites e4): - The real-time Resource Node price includes the Reliability Deployment Price Adder for Energy. [e4]
- **Key facts #5** (cites e8, e10) FLAG number-not-in-quote: 2026: - The Resource Entity has five Business Days to accept or reject proposed node parameters; the normal procedure is capped at 20 Business Days (Attachment R, dated April 1, 2026). [e8][e10]
- **Key facts #6** (cites e12): - A Generation Resource or ESR maps to exactly one Resource Node. [e12]
- **Key facts #7** (cites e17): - A PTP Obligation that sinks at a Resource Node and has a positive value can be paid less when network elements were oversold in earlier CRR Auctions. [e17]
- **Common confusion #1** (cites e1, e7): - Resource Node versus Hub: a Hub aggregates nodes into an average price; a Resource Node is where a Generation Resource's or ESR's price is calculated. [e1][e7]
- **Common confusion #2** (cites e5): - Resource Node versus Load Zone: the zone price is based on state-estimated Load and time-weighted average LMPs across the zone's buses, not a single node. [e5]
- **Questions #2** (cites e3): The DASPP at its Resource Node, which is the LMP at that node for the hour from the DAM. [e3]
- **Questions #4** (cites e13, e15, e16): The rule puts the node at the first bus with alternate paths from the plant, and the other placement rules aim for no congestion between the node and the plant's connection point. [e13][e15] Attachment R also says ERCOT uses discretion only where the location does not let the Resource Entity control its node price. [e16] (Reading: the design keeps the node price from reflecting congestion the plant itself creates.)
- **Questions #6** (cites e10, e26): After 20 Business Days with no agreement, no parameters go into the Network Operations Model, which can affect CRR activity for that Resource. [e10] Attachment R says the Wholesale Market Subcommittee or an appropriate working group helps guide the decision. [e26]
- **Questions #8** (cites e1): Yes. It can be a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Resource Node is one of the three kinds of Settlement Point. [e2]
- **Link to spp** (cites e3, e4): determines SPP (Settlement Point Price): The Resource Node price is the DAM LMP in the day-ahead and a time-weighted LMP plus adder in real time. [e3][e4]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Resource Node prices are built directly from LMPs at that node. [e3]
- **Link to load-zone** (cites e1, e5): contrasts-with Load Zone: A Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone, while a Resource Node is the point where a Resource's price is calculated. [e1][e5]
- **Link to trading-hub** (cites e7, e1): contrasts-with Trading Hubs: Hub information comes from aggregating nodes and calculating an average price; a Resource Node is where a Generation Resource or ESR price is calculated. [e7][e1]
- **Link to crr** (cites e17): related CRR (Congestion Revenue Right): A PTP Obligation that sinks at a Resource Node can have its positive payment reduced by oversold network elements. [e17]
- **Link to ptp-obligation** (cites e11): related PTP Obligation: PTP bids can be submitted and settled at a Generation Resource Node, subject to the PUN exception. [e11]
- **Link to energy-storage-resource** (cites e12, e9): related Energy Storage Resource (ESR): An ESR can be mapped to only one Resource Node, and its charging consumption is withdrawn at the Resource Connectivity Node. [e12][e9]
- **Link to congestion** (cites e15): related Transmission Congestion: The placement rules aim at no congestion between the Resource Node and the physical connection point. [e15]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The resource node is the pricing point where a generator or battery is paid. Its day-ahead price is the node LMP, and its real-time price is the time-weighted node LMP plus any reliability deployment adder.

