---
id: settlement-point
name: Settlement Point
aliases: [Settlement Point, SP, settlement point]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, retail, congestion]
as_of: 2026-11-18
links:
  - to: resource-node
    type: composed-of
    note: A Resource Node is one kind of Settlement Point, where generator prices are calculated. [e1][e2]
  - to: load-zone
    type: composed-of
    note: A Load Zone is one kind of Settlement Point, priced as a load-weighted average. [e1][e4]
  - to: trading-hub
    type: composed-of
    note: A Hub is one kind of Settlement Point, priced by the method in its definition. [e1][e5]
  - to: spp
    type: determines
    note: Each Settlement Point gets a Settlement Point Price for each Settlement Interval. [e3]
  - to: lmp
    type: related
    note: Settlement Point Prices are calculated using LMP data. [e3]
  - to: dam
    type: used-in
    note: Day-ahead settlement uses Settlement Point Prices at these points. [e3]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Resource Node"
    quote: "Either a logical construct that creates a virtual pricing point required to model a Combined-Cycle Configuration or an Electrical Bus defined in the Network Operations Model, at which a Settlement Point Price for a Generation Resource or Energy Storage Resource (ESR) is calculated and used in Settlement."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Settlement Point Price"
    quote: "A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations."
  - id: e4
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone."
  - id: e5
    source: np-06
    locator: "Section 6.6.1.3, paragraph (1)"
    quote: "The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions."
  - id: e6
    source: np-06
    locator: "Section 6.2, paragraph (4)"
    quote: "Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval"
---

## Definition

A Settlement Point is a Resource Node, a Load Zone, or a Hub. [e1]

## How it works

Settlement Points are the places where a price is calculated for money to change hands. Each one gets a Settlement Point Price for each Settlement Interval, calculated from LMP data using the day-ahead and real-time settlement formulas. [e3] In real time those prices are calculated for Resource Nodes, Load Zones and Hubs for each 15-minute Settlement Interval. [e6]

The three kinds are priced differently. A Resource Node is where the price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e2] A Load Zone price is based on state-estimated Load and the time-weighted average Real-Time LMPs at the buses in the zone. [e4] A Hub price follows the methodology in that Hub's own definition. [e5]

## ERCOT context

Real-time energy settlements use Settlement Point Prices calculated for Resource Nodes, Load Zones and Hubs. [e6] Because each kind of point is priced by its own method, a generator at its Resource Node and a load at its Load Zone can be exposed to different prices at the same moment. [e2][e4]

## Key facts

- Settlement Points are Resource Nodes, Load Zones and Hubs. [e1]
- A Settlement Point Price is calculated per Settlement Interval from LMP data. [e3]
- Real-time settlement prices are calculated for a 15-minute Settlement Interval. [e6]
- Hub prices follow the method written in each Hub's definition in Section 3.5.2. [e5]

## Say it like this

A settlement point is any of the three places ERCOT actually prices energy for settlement: a resource node for generators, a load zone for load, and a hub. The LMP is the underlying bus price; the settlement point price is what gets paid.

## Common confusion

- Settlement Point versus bus: many buses exist, but only Resource Nodes, Load Zones and Hubs are Settlement Points. [e1]
- Settlement Point Price versus LMP: the SPP is calculated from LMP data by the settlement formulas. [e3]

## Questions

### What are the types of Settlement Point?

Resource Nodes, Load Zones and Hubs. [e1]

### Which Settlement Point does a generator settle at?

Its Resource Node, which is where the Settlement Point Price for a Generation Resource or ESR is calculated and used in Settlement. [e2]

### How often is a real-time Settlement Point Price calculated?

For each 15-minute Settlement Interval. [e6]

## Open items

- Deeper pass: the day-ahead and real-time formulas at each kind of point are summarized in the spp topic; the full formulas were not quoted here.
- Deeper pass: which Settlement Point each charge type (energy, ancillary, imbalance) uses in Section 9 settlement.
