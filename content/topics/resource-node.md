---
id: resource-node
name: Resource Node
aliases: [Resource Node, RN, generator node, resource node]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, congestion]
as_of: 2026-11-18
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
    note: Hub information comes from aggregating nodes and calculating an average price; a Resource Node is where a Generation Resource or ESR price is calculated. [e7][e1]
  - to: basis-risk
    type: related
    note: A generator paid at its node but hedged at a hub carries the node-to-hub price difference.
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
    locator: "Section 6.2, paragraph (4)"
    quote: "Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval"
---

## Definition

A Resource Node is either a logical construct that creates a virtual pricing point needed to model a Combined-Cycle Configuration, or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e1] All Resource Nodes are identified under Section 22, Attachment R. [e1]

## How it works

In the day-ahead, the price at a Resource Node for an hour is simply the LMP at that node from the DAM process. [e3] In real time, the price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e4][e6]

## ERCOT context

The Resource Node is the generator's side of the market: it is a Settlement Point alongside the Load Zone and Hub, and it is the point where a Generation Resource or ESR price is calculated, whereas a Hub aggregates nodes into an average price. [e1][e2][e7] Because the Load Zone price is based on state-estimated Load and time-weighted average LMPs across buses in the zone, a generator paid at its node and a load paid at its zone can see different prices in the same interval. [e4][e5]

## Key facts

- A Resource Node can be an Electrical Bus or a virtual point used to model a Combined-Cycle Configuration. [e1]
- Resource Nodes apply to Generation Resources and Energy Storage Resources. [e1]
- The day-ahead Resource Node price is the DAM LMP at that node. [e3]
- The real-time Resource Node price includes the Reliability Deployment Price Adder for Energy. [e4]

## Say it like this

The resource node is the pricing point where a generator or battery is paid. Its day-ahead price is the node LMP, and its real-time price is the time-weighted node LMP plus any reliability deployment adder.

## Common confusion

- Resource Node versus Hub: a Hub aggregates nodes into an average price; a Resource Node is where a Generation Resource's or ESR's price is calculated. [e1][e7]
- Resource Node versus Load Zone: the zone price is based on state-estimated Load and time-weighted average LMPs across the zone's buses, not a single node. [e5]

## Questions

### What price does a generator receive in the day-ahead?

The DASPP at its Resource Node, which is the LMP at that node for the hour from the DAM. [e3]

### Can a Resource Node be something other than a physical bus?

Yes. It can be a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration. [e1]

## Open items

- Deeper pass: Section 22 Attachment R (procedure for identifying Resource Nodes) not read.
- Deeper pass: how Resource Node prices relate to hub prices historically (node-to-hub basis); no saved source gives a clean number.
- Naming convention for node names (for example the _RN suffix) not found in saved sources.
