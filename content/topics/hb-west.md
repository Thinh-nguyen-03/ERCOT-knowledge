---
id: hb-west
name: HB_WEST (West Hub)
aliases: [HB_WEST, West Hub, West 345, West 345 kV Hub]
kind: concept
domain: pricing
level: 1
lenses: [trading, analyst, congestion]
as_of: 2026-11-18
links:
  - to: trading-hub
    type: is-a
    note: The West 345 kV Hub is one of the defined Hubs. [e1]
  - to: settlement-point
    type: is-a
    note: A Hub is a kind of Settlement Point. [e2]
  - to: hb-north
    type: contrasts-with
    note: The North 345 kV Hub is defined the same way over a different bus list. [e3]
  - to: congestion
    type: related
    note: In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs. [e5]
  - to: load-zone
    type: contrasts-with
    note: The IMM's West Zone statements are about the Load Zone, not this Hub. [e6]
  - to: basis-risk
    type: related
    note: Related topic for positions settled at a different Settlement Point than the West Hub.
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.5.2.4, paragraph (1)"
    quote: "The West 345 kV Hub is composed of the following listed Hub Buses:"
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Hub"
    quote: "A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions."
  - id: e3
    source: np-03
    locator: "Section 3.5.2.4, paragraph (2)"
    quote: "The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e4
    source: np-03
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT 345)"
    quote: "The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price."
  - id: e5
    source: imm-som-2025
    locator: "Chapter on Congestion, Figure 45 discussion"
    quote: "The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin."
  - id: e6
    source: imm-som-2025
    locator: "Executive summary, congestion bullet"
    quote: "Higher congestion in the West Zone, where transmission projects have not kept pace with the large increase in renewables in the Panhandle and growing demand in the Permian Basin. This led the West Zone to exhibit the highest annual average zonal energy prices for the second year in a row."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Hub"
    quote: "The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity."
---

## Definition

The West 345 kV Hub (West 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology in its definition. [e2] The market shorthand "HB_WEST" is not used in the saved protocol text.

## How it works

The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] Its buses and method can never be modified. [e7] West 345 is one of four hub prices averaged into the ERCOT Hub Average 345 kV Hub. [e4]

## ERCOT context

In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs, export constrained in the panhandle because of renewables and import constrained in the Permian Basin. [e5] The IMM also reports that the West Zone had the highest annual average zonal energy prices for the second year in a row (2025). [e6] Those statements are about the West Load Zone, not the West Hub, so hub-specific price levels should be checked separately. [e6]

## Key facts

- The West 345 kV Hub is defined in Protocol Section 3.5.2.4. [e1]
- Day-ahead price uses aggregated Shift Factors; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval. [e3]
- It is one of four prices in the ERCOT Hub Average 345 kV Hub price. [e4]
- 2025 IMM: West Zone had the highest annual average zonal energy price for the second year in a row. [e6]

## Say it like this

HB_WEST is the price of a fixed set of west 345 kV buses, a simple average of Hub Bus prices in real time. The IMM ties higher West Zone prices to congestion, so check whether a west hub price is the right reference for a particular west generator.

## Common confusion

- West Hub versus West Load Zone: the Hub price follows the Hub definition, and the IMM's zone statements do not automatically apply to the Hub. [e3][e6]
- Hub versus generators in the Permian or Panhandle: the IMM reports large intrazonal congestion costs in the West Zone, so check node-level prices rather than assuming the hub or zone price applies to a given generator. [e5]

## Questions

### Why is West pricing different from the rest of ERCOT?

The IMM says transmission projects have not kept pace with renewables growth in the Panhandle and rising demand in the Permian Basin, leading to higher congestion in the West. [e6]

### How is the West Hub real-time price formed?

As the simple average of time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3]

## Open items

- "HB_WEST" naming and the West hub's price levels and spreads to North are not in saved sources (garbled IMM tables).
- Deeper pass: Hub Bus list (17 buses in the np-03 table) and which are Panhandle versus Permian; not quoted.
- Deeper pass: how the Waha price relates to West prices (IMM 2025 mentions Waha hub prices reflected in the West zone).
