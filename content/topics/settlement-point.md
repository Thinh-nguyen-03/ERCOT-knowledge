---
id: settlement-point
name: Settlement Point
aliases: [Settlement Point, SP, settlement point]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, retail, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: resource-node
    type: composed-of
    note: A Resource Node is one kind of Settlement Point, where generator prices are calculated. [e1][e2]
  - to: load-zone
    type: composed-of
    note: A Load Zone is one kind of Settlement Point, its real-time price is based on state-estimated Load and time-weighted average Real-Time LMPs. [e1][e4]
  - to: trading-hub
    type: composed-of
    note: A Hub is one kind of Settlement Point, its real-time price follows the method in its definition. [e1][e5]
  - to: spp
    type: determines
    note: Each Settlement Point gets a Settlement Point Price for each Settlement Interval. [e3]
  - to: lmp
    type: related
    note: Settlement Point Prices are calculated using LMP data. [e3]
  - to: dam
    type: used-in
    note: The Settlement Point Price definition refers to the DAM Settlement formulas. [e3]
  - to: rtm
    type: used-in
    note: Real-time Energy Imbalance Service is charged or paid at the Real-Time Settlement Point Price at a Resource Node (and, per the Load Zone section, a Load Zone). [e9][e8]
  - to: ptp-obligation
    type: used-in
    note: A PTP Obligation settles on the difference in DASPP between sink and source Settlement Points. [e11]
  - to: congestion
    type: related
    note: A Self-Schedule's real-time congestion charge is the difference in prices at its sink and source Settlement Points times its amount. [e10]
  - to: crr
    type: related
    note: CRR payments are based on Settlement Point price differences between sink and source. [e11]
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
  - id: e7
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment"
    quote: "The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves. The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows:"
  - id: e8
    source: np-06
    locator: "Section 6.6.3.2, paragraph (1), items (a)-(c)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus"
  - id: e9
    source: np-06
    locator: "Section 6.6.3.1, paragraph (1)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Resource Node Settlement Point:"
  - id: e10
    source: np-06
    locator: "Section 6.6.4, paragraph (1)"
    quote: "The congestion payment or charge to each QSE submitting a Self-Schedule calculated based on the difference in Real-Time Settlement Point Prices at the specified sink and the source of the Self-Schedule multiplied by the amount of the Self-Schedule."
  - id: e11
    source: np-07
    locator: "Section 7.9.1.1, paragraph (1)"
    quote: "Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point."
  - id: e12
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (4)"
    quote: "In contrast, the Day-Ahead Market (DAM) energy settlements will use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval, and DAM Ancillary Service Settlements will use DAM MCPCs for a one-hour Settlement Interval."
  - id: e13
    source: np-06
    locator: "Section 6.6.1.2, paragraph (2)"
    quote: "For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrated value for the 15-minute interval) but varies with each SCED interval within the 15-minute Settlement Interval, an energy-weighted Real-Time Settlement Point Price shall be used and is calculated as follows:"
  - id: e14
    source: np-06
    locator: "Section 6.6.1.5, Hub LMPs, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e15
    source: np-03
    locator: "Section 3.5.1, Process for Defining Hubs, paragraph (1)"
    quote: "Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses."
  - id: e16
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order:"
  - id: e17
    source: np-02
    locator: "Section 2.1, definition of Settlement Interval"
    quote: "The time period for which markets are settled."
---

## Definition

A Settlement Point is a Resource Node, a Load Zone, or a Hub. [e1]

## How it works

A Settlement Point Price is calculated for each Settlement Point for each Settlement Interval, using LMP data and the formulas in the day-ahead (DAM Settlement) and real-time settlement sections of the Protocols. [e3] In real time those prices are calculated for Resource Nodes, Load Zones and Hubs for each 15-minute Settlement Interval. [e6]

The three kinds are priced by their own methods. A Resource Node is where the price for a Generation Resource or Energy Storage Resource is calculated and used in Settlement. [e2] The Real-Time Settlement Point Price for a Load Zone is based on state-estimated Load and the time-weighted average Real-Time LMPs at the buses in the zone. [e4] The Real-Time Settlement Point Price at a Hub follows the methodology in that Hub's own definition. [e5]

### Which Settlement Point each charge uses (Protocol sections 4.6, 6.6, 7.9)

Day-ahead energy is paid to the QSE for each Settlement Point and hour at the DASPP there. [e7] Real-time Energy Imbalance Service is charged or paid at the Real-Time Settlement Point Price at a Resource Node or at a Load Zone, using a separate quantity list for each. [e9][e8] The Load Zone list, for example, starts from Self-Schedules sinking at the point, DAM Energy Bids cleared there and Energy Trades where the QSE is buyer, less the matching source-side items. [e8] A Self-Schedule's real-time congestion charge is the sink price minus the source price times the amount. [e10] A DAM PTP Obligation settles on the DASPP difference between sink and source, though a positive value sinking at a Resource Node may be reduced. [e11] Day-ahead Ancillary Service settlements use DAM MCPCs. [e12]

Interval basis: a Settlement Interval is the time period for which markets are settled. [e17] DAM energy uses a one-hour Settlement Interval and real time a 15-minute one. [e12][e6] Where a 15-minute Load Zone quantity varies with each SCED interval, an energy-weighted Real-Time Settlement Point Price is used. [e13]

Hubs: a Hub is made of one or more Electrical Buses, and Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2. [e15] The Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses, except for the ERCOT Hub Average 345 kV Hub. [e14] De-energized buses get an LMP by heuristic rules defined in Section 6.6.1. [e16]

## ERCOT context

Real-time energy settlements use Settlement Point Prices calculated for Resource Nodes, Load Zones and Hubs. [e6] A Resource Node price is calculated for a Generation Resource or ESR, and a Load Zone price is calculated from Load and the LMPs at the buses in the zone. [e2][e4]

## Key facts

- Settlement Points are Resource Nodes, Load Zones and Hubs. [e1]
- A Settlement Point Price is calculated per Settlement Interval from LMP data. [e3]
- Real-time settlement prices are calculated for a 15-minute Settlement Interval. [e6]
- Day-ahead energy payments, real-time imbalance, Self-Schedule congestion and PTP Obligations all settle on Settlement Point Prices, while day-ahead Ancillary Services use MCPCs (imbalance is cited here for Resource Nodes). [e7][e9][e10][e11][e12]
- Real-Time Hub prices follow the method written in each Hub's definition in Section 3.5.2. [e5]

## Say it like this

A settlement point is any of the three places ERCOT actually prices energy for settlement: a resource node for generators, a load zone for load, and a hub. The LMP is the underlying bus price; the settlement point price is what gets paid.

## Common confusion

- Settlement Point versus bus: only Resource Nodes, Load Zones and Hubs are Settlement Points. [e1]
- Settlement Point Price versus LMP: the SPP is calculated from LMP data by the settlement formulas. [e3]

## Questions

### What are the types of Settlement Point?

Resource Nodes, Load Zones and Hubs. [e1]

### Why do generators and loads see different prices in the same interval?

Generator energy settles at a Resource Node price, while Load Zone prices are state-estimated-Load-weighted averages across buses in the zone. [e2][e4] Imbalance charges are computed separately at a Resource Node and at a Load Zone. [e9][e8]

### What if a bus at a Hub or Resource Node is de-energized?

ERCOT assigns it an LMP by ordered heuristic rules, starting from a predetermined LMP for that bus. [e16]

### Which Settlement Point does a generator settle at?

Its Resource Node, which is where the Settlement Point Price for a Generation Resource or ESR is calculated and used in Settlement. [e2]

### How often is a real-time Settlement Point Price calculated?

For each 15-minute Settlement Interval. [e6]

## Open items

- The formulas by kind of point are in the spp topic. Resolved 2026-11-21 for energy settlement in Sections 4.6, 6.6 and 7.9.
- Section 9 (np-09) treatment of Settlement Points in statements and invoices was not traced.
