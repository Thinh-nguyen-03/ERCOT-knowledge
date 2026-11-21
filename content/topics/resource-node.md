---
id: resource-node
name: Resource Node
aliases: [Resource Node, RN, generator node, resource node]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: settlement-point
    type: is-a
    note: A Resource Node is one of the three kinds of Settlement Point. [e2]
  - to: spp
    type: determines
    note: The Resource Node price is the DAM LMP in the day-ahead and a time-weighted LMP plus adder in real time. [e3][e4]
  - to: lmp
    type: related
    note: Resource Node prices are built directly from LMPs at that node. [e3]
  - to: load-zone
    type: contrasts-with
    note: A Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone, while a Resource Node is the point where a Resource's price is calculated. [e1][e5]
  - to: trading-hub
    type: contrasts-with
    note: Under PUCT rule 25.501(g), hub information comes from aggregating nodes and calculating an average price; a Resource Node is where a Generation Resource or ESR price is calculated. [e7][e1]
  - to: basis-risk
    type: related
    note: A generator paid at its node but hedged at a hub carries the node-to-hub price difference.
  - to: crr
    type: related
    note: A PTP Obligation that sinks at a Resource Node can have its positive payment reduced by oversold network elements. [e17]
  - to: ptp-obligation
    type: related
    note: PTP bids can be submitted and settled at a Generation Resource Node, subject to the PUN exception. [e32]
  - to: energy-storage-resource
    type: related
    note: An ESR can be mapped to only one Resource Node, and its charging consumption is withdrawn at the Resource Connectivity Node. [e12][e9]
  - to: congestion
    type: related
    note: The placement rules aim at no congestion between the Resource Node and the physical connection point. [e15]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Resource Node"
    quote: "Either a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource (ESR) is calculated and used in Settlement. All Resource Nodes shall be identified in accordance with Section 22, Attachment R, Procedure for Identifying Resource Nodes."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e3
    source: np-04
    locator: "Section 4.6.1.1"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e4
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e5
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone."
  - id: e7
    source: puct-25-501
    locator: "16 TAC §25.501(g), Energy trading hubs"
    quote: "Energy trading hubs. ERCOT shall provide information for energy trading hubs by aggregating nodes and calculating an average price for each aggregation, for each financial settlement interval."
  - id: e6
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (4)"
    quote: "Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval"
  - id: e8
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, items 4-5"
    quote: "The Resource Entity will have five Business Days to accept or reject the suggested Resource Node parameters."
  - id: e9
    source: np-22r
    locator: "Appendix A, 2. Resource Connectivity Nodes, items a-b"
    quote: "Generator output is injected and ESR charging consumption is withdrawn at the Resource Connectivity Node."
  - id: e10
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 9"
    quote: "In the event that agreement between ERCOT and the Resource Entity cannot be reached within 20 Business Days, no Resource Node parameters will be entered into the Network Operations Model. This may have an effect on Congestion Revenue Right (CRR) Network Models and associated CRR activities regarding the Generation Resource or ESR in question. There must be an agreement between ERCOT and the Resource Entity before Resource Node parameters will be implemented into the Network Operations Model."
  - id: e11
    source: np-22r
    locator: "Appendix A, 3.1 Resource Node Definition, item c"
    quote: "A Generation Resource Node represents the Settlement Point for ERCOT and PUN Generation Resources and ESRs."
  - id: e12
    source: np-22r
    locator: "Appendix A, 3.1 Resource Node Definition, items g-h"
    quote: "A Generation Resource can only be mapped to one Resource Node, i.e. offers from a Generation Resource can only be settled at one Settlement Price. Similarly, an ESR can only be mapped to one Resource Node, i.e. offers/bids from an ESR can only be settled at one Settlement Point."
  - id: e13
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item a"
    quote: "First Fork Rule: Locate Resource Node at the first Electrical Bus with alternate paths starting from the Generation Resource Connectivity Node. Parallel network paths do not count as alternate paths."
  - id: e14
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item d"
    quote: "De-Energization Rule: Locate Resource Node at Electrical Bus that is less often de-energized, if alternate choices exist. Settlement Point Prices (SPPs) for de-energized Resource Nodes are calculated using heuristic rules."
  - id: e15
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item f"
    quote: "Initial placement of the Resource Node should not be such that Transmission Elements between Resource Node and associated Resource Connectivity Nodes could be constrained."
  - id: e16
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item i"
    quote: "If all rules cannot be simultaneously satisfied, then the rules are listed in order of priority. ERCOT will use discretion in choosing the appropriate Resource Node location, assuming that such a location does not allow the Resource Entity to control its Resource Node price."
  - id: e17
    source: np-07
    locator: "Section 7.9.1.1, paragraph (2)"
    quote: "For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions."
  - id: e18
    source: np-22r
    locator: "Procedure to Retire a Resource Node in the Network Operations Model, items 1-2"
    quote: "Resource Nodes cannot be retired until all outstanding CRRs on that Resource Node have been settled or a model error was identified in the creation of the Resource Node. Transmission Service Providers (TSPs) cannot submit Network Operations Model Change Requests (NOMCRs) to delete a Resource Node."
  - id: e19
    source: np-22r
    locator: "Appendix A, 4.1 CCP Logical Resource Node, items b-c"
    quote: "Each CCP Logical Generation Resource is mapped to a CCP Logical Resource Node. All CCP Logical Generation Resources, i.e. all CCP configurations for a train are mapped to the same CCP Logical Resource Node."
  - id: e20
    source: np-06
    locator: "Section 6.6.1.1, paragraph (2)(b)"
    quote: "For an On-Line Combined Cycle Train, the weight factor for each generation unit registered in an On-Line Combined Cycle Generation Resource shall be the Real-Time power output telemetry in each SCED interval for each generation unit registered in the Combined Cycle Generation Resource divided by the total Real-Time power output telemetry for all of the generation units registered in the Combined Cycle Generation Resource. For an Off-Line Combined Cycle Train, the weight factor for each generation unit designated in a Combined Cycle Train registration shall be its High Reasonability Limit (HRL) divided by the total sum of the HRL for all generation units registered in the Combined Cycle Train."
  - id: e21
    source: np-22r
    locator: "Appendix A, 5.1 PUN Resource Node, items a-b"
    quote: "The placement of a PUN Resource Node is optional. At a PUN, after all the Generation Resource Nodes, CCP Logical Resource Nodes and CCU Resource Nodes are placed (if applicable), if none of the Generation Resource Nodes or CCU Resource Nodes are placed where the EPS Meter is effectively located, then this is the location of the PUN Resource Node."
  - id: e22
    source: np-22r
    locator: "Appendix A, 3.1 Resource Node Definition, items j-k"
    quote: "Resource Nodes shall not be located at the Direct Current Ties (DC Ties). (The DC Ties are Load Zones.)"
  - id: e23
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item c"
    quote: "Ownership Rule: Locate Resource Node at the Electrical Bus that is the ERCOT POI (if practical). Subsequent ownership changes shall not change the Resource Node location."
  - id: e24
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 10"
    quote: "Once effective in the Network Operations Model, the Resource Node name cannot be changed."
  - id: e26
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 6"
    quote: "If agreement cannot be reached by ERCOT and the Resource Entity, the Wholesale Market Subcommittee (WMS) or appropriate WMS working group shall help guide the decision."
  - id: e25
    source: np-22r
    locator: "Title page and Introduction (document dated April 1, 2026), pending box OBDRR046"
    quote: "This procedure is the guiding attachment for ERCOT and Market Participants with a Generation Resource, Energy Storage Resource (ESR), or Controllable Load Resource (CLR) that is not an Aggregate Load Resource (ALR), to identify Resource Nodes and manage the lifecycle of the Resource Node."
  - id: e27
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 1"
    quote: "a Resource Entity must submit Resource Registration information that includes a detailed electrical one-line drawing of the generation facility."
  - id: e28
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 3"
    quote: "The Network Modeling Group will provide documentation back to the Resource Entity clearly indicating the Resource Node parameters."
  - id: e29
    source: np-22r
    locator: "Procedure to Incorporate a Resource Node into the Network Operations Model, item 8"
    quote: "The normal timeline for this procedure shall not exceed 20 Business Days after the submission date of validated Resource Registration information that includes a detailed electrical one-line drawing."
  - id: e30
    source: np-22r
    locator: "Appendix A, 3.1 Resource Node Definition, item g"
    quote: "Multiple Generation Resources and ESRs can be mapped to the same Resource Node, i.e. offers from different Generation Resources and ESRs can be settled at the same Settlement Point."
  - id: e31
    source: np-22r
    locator: "Appendix A, 3.2 Resource Node Location, item a.i (exception)"
    quote: "Exception: There is an exception to this rule for placing Generation Resource Nodes and CCU Resource Nodes that are mapped to Generation Resources or ESRs within a PUN."
  - id: e32
    source: np-22r
    locator: "Appendix A, 3.1 Resource Node Definition, item c (PTP bids)"
    quote: "as well as Point-to-Point (PTP) bids, can be submitted and settled at a Generation Resource Node, unless that Generation Resource Node is within a PUN site where constrainable Transmission Element(s) exist between the Generation Resource Node and ERCOT-Polled Settlement (EPS) Meter, in which case only Three-Part Supply Offers, Energy Bid/Offer Curves, and Ancillary Service Offers can be submitted and settled."
  - id: e33
    source: np-06
    locator: "Section 6.6.1.1, paragraph (2) variable table, RTLMP for Combined Cycle Train units"
    quote: "The Real-Time LMP at the Resource Node of a generation unit designated in a Combined Cycle Train registration for the SCED interval y."
---

## Definition

A Resource Node is either a logical construct that creates a virtual pricing point needed to model a Combined-Cycle Configuration, or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e1] All Resource Nodes are identified under Section 22, Attachment R. [e1]

## How it works

In the day-ahead, the price at a Resource Node for an hour is simply the LMP at that node from the DAM process. [e3] In real time, the price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e4][e6]

## ERCOT context

The Resource Node is the generator's side of the market: it is a Settlement Point alongside the Load Zone and Hub, and it is the point where a Generation Resource or ESR price is calculated, whereas under PUCT rule 25.501(g), ERCOT provides trading hub information by aggregating nodes and calculating an average price. [e1][e2][e7] Because the Load Zone price is based on state-estimated Load and time-weighted average LMPs across buses in the zone, a generator paid at its node and a load paid at its zone can see different prices in the same interval. [e4][e5]

### Placement and lifecycle (Attachment R)

Section 22, Attachment R sets the procedure. The Resource Entity submits registration information with a one-line drawing, ERCOT's Network Modeling Group proposes the parameters, and the Resource Entity has five Business Days to accept or reject them. [e27][e28][e8] If there is no agreement within 20 Business Days, no Resource Node parameters are entered in the Network Operations Model, which may affect CRR Network Models and CRR activities for that Resource, and an agreement is required before implementation. [e10] Once effective, the Resource Node name cannot be changed. [e24]

A Generation Resource, or an ESR, can be mapped to only one Resource Node, so its offers settle at one price. [e12] Several Resources can share a node. [e30] The location is set by the First Fork Rule: the first Electrical Bus with alternate paths from the Resource Connectivity Node, where parallel paths do not count; Attachment R lists an exception for Resources within a PUN. [e13][e31] Other rules favour a bus less often de-energized and a bus with no constrainable element between the node and the plant. [e14][e15] If the rules conflict they are applied in priority order, with ERCOT discretion, provided the Resource Entity cannot control its Resource Node price. [e16] Resource Nodes are not placed at DC Ties, which are Load Zones. [e22] After a later ownership change the node does not move. [e23]

Combined cycle plants: each CCP train has a logical Resource Node to which all of its configurations map. [e19] In real time that node's price is the weighted average of the Resource Node LMPs of its units, weighted by telemetered output when On-Line and by High Reasonability Limit when the train is Off-Line. [e33][e20] A Private Use Network Resource Node is optional and sits where the EPS Meter is effectively located when no other node does. [e21]

Retirement: a Resource Node cannot be retired until outstanding CRRs on it have settled, unless a model error was made in creating it, and TSPs cannot submit a NOMCR to delete one. [e18]

Pending: the Attachment R text dated April 1, 2026 carries an OBDRR046 box that, upon system implementation of NPRR1188, extends the procedure to Controllable Load Resources that are not Aggregate Load Resources. It is not yet in effect. [e25]

## Key facts

- A Resource Node can be an Electrical Bus or a virtual point used to model a Combined-Cycle Configuration. [e1]
- Resource Nodes apply to Generation Resources and Energy Storage Resources. [e1]
- The day-ahead Resource Node price is the DAM LMP at that node. [e3]
- The real-time Resource Node price includes the Reliability Deployment Price Adder for Energy. [e4]
- The Resource Entity has five Business Days to accept or reject proposed node parameters; the normal timeline shall not exceed 20 Business Days after submission of validated registration information (Attachment R, dated April 1, 2026). [e8][e29]
- A Generation Resource or ESR maps to exactly one Resource Node. [e12]
- A PTP Obligation that sinks at a Resource Node and has a positive value can be paid less when network elements were oversold in earlier CRR Auctions. [e17]

## Say it like this

The resource node is the pricing point where a generator or battery is paid. Its day-ahead price is the node LMP, and its real-time price is the time-weighted node LMP plus any reliability deployment adder.

## Common confusion

- Resource Node versus Hub: under PUCT rule 25.501(g) hub information aggregates nodes into an average price; a Resource Node is where a Generation Resource's or ESR's price is calculated. [e1][e7]
- Resource Node versus Load Zone: the zone price is based on state-estimated Load and time-weighted average LMPs across the zone's buses, not a single node. [e5]

## Questions

### What price does a generator receive in the day-ahead?

The DASPP at its Resource Node, which is the LMP at that node for the hour from the DAM. [e3]

### Why does ERCOT use a First Fork Rule to place the node?

The rule puts the node at the first bus with alternate paths from the plant, and the other placement rules aim for no congestion between the node and the plant's connection point. [e13][e15] Attachment R also says ERCOT uses discretion in choosing the location, assuming the location does not allow the Resource Entity to control its Resource Node price. [e16]

### What if ERCOT and a Resource Entity cannot agree on node parameters?

After 20 Business Days with no agreement, no parameters go into the Network Operations Model, which can affect CRR activity for that Resource. [e10] Attachment R says the Wholesale Market Subcommittee or an appropriate working group helps guide the decision. [e26]

### Can a Resource Node be something other than a physical bus?

Yes. It can be a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration. [e1]

## Open items

- Resolved 2026-11-21: Attachment R (np-22r, dated April 1, 2026) was read and is summarized above.
- Deeper pass: how Resource Node prices relate to hub prices historically (node-to-hub basis); no saved source gives a clean number.
- Naming convention for node names (for example the _RN suffix) not found in saved sources.
