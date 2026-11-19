---
id: hb-north
name: HB_NORTH (North Hub)
aliases: [HB_NORTH, North Hub, North 345, North 345 kV Hub]
kind: concept
domain: pricing
level: 1
lenses: [trading, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: trading-hub
    type: is-a
    note: The North 345 kV Hub is one of the defined Hubs. [e1]
  - to: settlement-point
    type: is-a
    note: A Hub is a kind of Settlement Point. [e2]
  - to: hb-west
    type: contrasts-with
    note: The West 345 kV Hub is defined the same way but over a different set of buses. [e3][e4]
  - to: spp
    type: determines
    note: The hub price is the Settlement Point Price at the Hub. [e3]
  - to: block-products
    type: used-in
    note: Block products are a related topic for hub-referenced trading.
  - to: lmp
    type: related
    note: The Hub price averages Hub Bus prices. [e3]
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.5.2.1, paragraph (1)"
    quote: "The North 345 kV Hub is composed of the following Hub Buses:"
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Hub"
    quote: "A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions."
  - id: e3
    source: np-03
    locator: "Section 3.5.2.1, paragraph (2)"
    quote: "The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e4
    source: np-03
    locator: "Section 3.5.2.4, paragraph (2)"
    quote: "The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e5
    source: np-03
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT 345)"
    quote: "The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price."
  - id: e6
    source: np-03
    locator: "Section 3.5.1, paragraph (1)"
    quote: "Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Hub"
    quote: "The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e9
    source: ercot-hubs-load-zones-page
    locator: 'ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote)'
    quote: "HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08"
---

## Definition

The North 345 kV Hub (North 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology set out in its definition. [e2] The market shorthand "HB_NORTH" is not used in the saved protocol text.

## How it works

The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Day-Ahead Market, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] In real time it is therefore a simple (unweighted) average across its Hub Buses. [e3] The list of Hub Buses and the price method can never be modified once defined. [e7]

## ERCOT context

North 345 is one of four hubs whose real-time prices are averaged into the ERCOT Hub Average 345 kV Hub price (the others are South, Houston and West). [e5] ERCOT posts the list of Electrical Buses in each Hub on its website. [e6]

## Key facts

- The North 345 kV Hub is defined in Protocol Section 3.5.2.1. [e1]
- Day-ahead price uses aggregated Shift Factors of the Hub Buses; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval. [e3]
- The Hub definition can never be modified and exists in perpetuity. [e7]
- It is one of four prices in the ERCOT Hub Average 345 kV Hub price. [e5]
- ERCOT's real-time price display lists a hub Settlement Point named HB_NORTH. [e9]

## Say it like this

HB_NORTH is the price of a fixed list of 345 kV buses in the north, a simple average of Hub Bus prices in real time. A Hub is a different kind of Settlement Point from a Load Zone.

## Common confusion

- North Hub versus North Load Zone: the Hub is a Settlement Point defined by a fixed Hub Bus list and its own price method, and a Load Zone is a separate kind of Settlement Point from a Hub (a Settlement Point is a Resource Node, Load Zone, or Hub; see the load-zone topic). [e2][e3][e8]
- North Hub versus the ERCOT 345 average: the ERCOT average is a separate Hub that averages four hub prices, including North. [e5]

## Questions

### How is the North Hub price calculated in real time?

As the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval, across each Hub Bus in the Hub. [e3]

### Can ERCOT change which buses are in the North Hub?

The definition can never be modified. [e7]

## Open items

- Resolved 2026-11-19: the name HB_NORTH is sourced from ERCOT's real-time display. No saved source states in so many words that HB_NORTH is the Protocols' "North 345 kV Hub (North 345)".
- Deeper pass: the Hub Bus list (25+ buses in a table in np-03 Section 3.5.2.1) was not quoted.
- Deeper pass: North hub price levels and spreads versus West by year; saved IMM tables are garbled, so none cited.
