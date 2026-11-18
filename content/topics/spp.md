---
id: spp
name: SPP (Settlement Point Price)
aliases: [SPP, Settlement Point Price, RTSPP, DASPP]
kind: metric
domain: pricing
level: 1
lenses: [analyst, trading, retail, congestion]
as_of: 2026-11-18
links:
  - to: lmp
    type: related
    note: The Settlement Point Price is calculated from LMP data. [e1]
  - to: settlement-point
    type: related
    note: A Settlement Point is a Resource Node, Load Zone or Hub, and each has its own Settlement Point Price. [e2]
  - to: resource-node
    type: related
    note: Resource Node prices are essentially LMPs, with a real-time adder in real time. [e3][e5]
  - to: load-zone
    type: related
    note: Load Zone prices are load-weighted averages of bus-level prices.
  - to: trading-hub
    type: related
    note: Hub prices follow the methodology written into each Hub's definition. [e7]
  - to: dam
    type: related
    note: The Day-Ahead SPP is the DAM-side price. [e3]
  - to: rtm
    type: related
    note: The Real-Time SPP is the price for each 15-minute Settlement Interval. [e5]
  - to: negative-prices
    type: related
    note: The real-time SPP has an administrative floor. [e8]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Settlement Point Price"
    quote: "A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e3
    source: np-04
    locator: "Section 4.6.1.1"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e4
    source: np-04
    locator: "Section 4.6.1.3"
    quote: "The DASPP for a Settlement Point at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5, Hubs."
  - id: e5
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e6
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone."
  - id: e7
    source: np-06
    locator: "Section 6.6.1.3, paragraph (1)"
    quote: "The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions."
  - id: e8
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e9
    source: np-03
    locator: "Section 3.4, paragraph (1)"
    quote: "ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors."
  - id: e10
    source: np-06
    locator: "Section 6.6.1, paragraph (1)(b)"
    quote: "Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist."
  - id: e11
    source: imm-som-2025
    locator: "Chapter I.D, Shortage and Reliability Pricing"
    quote: "Since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder."
  - id: e12
    source: imm-som-2025
    locator: "Chapter I.C, Zonal Energy Prices"
    quote: "Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone."
---

## Definition

A Settlement Point Price (SPP) is the price calculated for a Settlement Point for each Settlement Interval, using LMP data and the formulas in Section 4.6 (DAM Settlement) and Section 6.6 (Real-Time settlement calculations). [e1] A Settlement Point is a Resource Node, a Load Zone or a Hub. [e2]

## How it works

Day-ahead. The DASPP at a Resource Node for an hour is the LMP at that node from the DAM process. [e3] For a Load Zone, ERCOT calculates the day-ahead price from Load-weighted aggregated Shift Factors of the energized power flow buses for each constraint, with the weighting based on Load distribution factors. [e9] For a Hub, the DASPP follows the methodology in that Hub's definition. [e4]

Real time. The Resource Node price for a 15-minute Settlement Interval is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy over the SCED intervals in that period. [e5] The Load Zone price is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6] The Hub price again follows the Hub's own definition in Section 3.5.2. [e7]

Two protocol rules shape the real-time number after the LMP is known. First, an administrative price floor of -$251/MWh is applied after the Reliability Deployment Price Adders for Energy are added. [e8] Second, de-energized Electrical Buses are assigned an LMP by heuristics; the first fallback is the average LMP of buses in the same station at the same voltage level. [e10]

## ERCOT context

The settlement price is a different object from the LMP: generators settle at the Resource Node price, while loads settle at the Load Zone price, a load-weighted average of the bus prices in the zone. [e5][e6] On shortage pricing, the IMM notes that since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder. [e11] The Reliability Deployment Price Adder for Energy is still part of the real-time SPP formula in the current protocol text. [e5]

For outcomes, the IMM reports that in 2025 the West zone had the highest average real-time price, followed by the South zone. [e12]

## Key facts

- Settlement Points are Resource Nodes, Load Zones and Hubs. [e2]
- The Day-Ahead SPP at a Resource Node equals the DAM LMP there. [e3]
- The Real-Time SPP is calculated per 15-minute Settlement Interval from SCED-interval LMPs plus the Reliability Deployment Price Adder for Energy. [e5]
- Real-Time SPPs have an administrative floor of -$251/MWh. [e8]
- In 2025 the West zone had the highest average real-time price, then South (IMM). [e12]

## Say it like this

The SPP is the price that actually settles: it is built from LMPs but computed at a Resource Node, Load Zone or Hub, hourly in the day-ahead and per 15 minutes in real time. Generators see node prices, loads see zone averages, and hubs are the standardized reference points.

## Common confusion

- SPP versus LMP: the LMP is a bus-level SCED or DAM output, while the SPP is the settled price at a Settlement Point. [e1]
- Day-ahead versus real-time Load Zone method: the day-ahead price uses shift-factor aggregation with load distribution factors, while the real-time price is the load-weighted average of bus LMPs using State Estimator Load. [e9][e6]
- Real-time shortage pricing no longer comes from a separate ORDC adder in the current text; do not describe the current real-time SPP as LMP plus ORDC. [e11]

## Questions

### What is the difference between an LMP and a Settlement Point Price?

The LMP is the bus-level marginal cost from DAM or SCED. The SPP is calculated for a Resource Node, Load Zone or Hub from LMP data using the Section 4.6 and 6.6 formulas. [e1] A Resource Node's day-ahead SPP is simply its LMP, while its real-time SPP also includes the reliability deployment adder. [e3][e5]

### How is a real-time Load Zone price calculated?

It is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6]

### What is the lowest a real-time SPP can be?

The protocol sets an administrative floor of -$251/MWh, applied after adding the Reliability Deployment Price Adders for Energy. [e8]

## Open items

- Annual average Hub prices (North, South, Houston, West): the IMM reports saved here give zone averages in tables whose numbers are garbled in the text extraction, so I did not cite dollar levels.
- Day-ahead Load Zone and Hub formulas: described qualitatively above; the full formulas were not quoted.
- A plain-language statement of how the ORDC adder was removed in the protocol: the current np-06 text contains no ORDC adder; the removal is sourced only through the IMM's statement about RTC.
