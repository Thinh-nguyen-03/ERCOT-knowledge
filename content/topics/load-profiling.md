---
id: load-profiling
name: Load Profiling
aliases: [load profile, load profiling, profile ID, profiled load, adjusted static model, weather zone]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: esi-id
    type: related
    note: Load Profile IDs are assigned to individual ESI IDs. [e4]
  - to: ams-meters
    type: contrasts-with
    note: Advanced meters supply actual 15-minute intervals; profiles fill in where those are not received. [e2]
  - to: lse
    type: related
    note: Aggregated profiled load is allocated to QSE and LSE settlement responsibilities. [e6]
  - to: tdsp
    type: related
    note: The TDSP assigns weather zones and submits load profile ID changes. [e5][e4]
  - to: rep
    type: related
    note: A competitive retailer may dispute a Load Profile ID assignment. [e10]
  - to: ufe
    type: related
    note: Load profile design aims to minimize its contribution to unaccounted for energy. [e7]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Profile"
    quote: "A representation of the energy usage of a group of Customers, showing the Demand variation on an hourly or sub-hourly basis."
  - id: e2
    source: np-18
    locator: "Section 18.1(1)"
    quote: "The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process."
  - id: e3
    source: np-18
    locator: "Section 18.2.2.1(1)"
    quote: "Load Profiles for non-interval metered Loads are created using statistical models developed from appropriate Load research sample data. These models are referred to as adjusted static. These model equations relate daily Settlement Interval Load patterns to relevant weather descriptors such as maximum and minimum dry-bulb temperature and humidity."
  - id: e4
    source: np-18
    locator: "Section 18.4.2(2)-(3)"
    quote: "Should there be any change in Load Profile ID assignment to any ESI ID, it will be the responsibility of the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) to submit those changes to ERCOT."
  - id: e5
    source: np-18
    locator: "Section 18.4.4(1)"
    quote: "TSPs and /or DSPs will assign each ESI ID to a Weather Zone, based on service address ZIP code."
  - id: e6
    source: np-11
    locator: "Section 11.4, Load Data Aggregation, paragraph (1)"
    quote: "Data Aggregation is the process of netting, grouping and summing Load consumption data, applying appropriate profiles, Transmission Loss Factors (TLFs) and Distribution Loss Factors (DLFs) and calculating and allocating Unaccounted For Energy (UFE) to determine each Qualified Scheduling Entity (QSE) and/or Load Serving Entity (LSE) responsibility by Settlement Interval by Settlement Point and by other prescribed aggregation determinants."
  - id: e7
    source: np-18
    locator: "Section 18.2.1(1)(c)"
    quote: "Minimize the Load Profiles’ contribution to Unaccounted For Energy (UFE) over all Settlement Intervals, paying particular attention to higher cost periods;"
  - id: e8
    source: np-11
    locator: "Section 11.4.2(3), Non-Interval Missing Consumption Data Estimation"
    quote: "Profile application will take aggregated non-interval consumption data and apply the Load Profile in order to create interval consumption data. Profiled non-interval data is calculated by dividing the aggregated ESI ID’s total kWh for a specific time period (usually a month) by the profile class’ kWh for the same specific time period and scaling the Load Profile for that same specific Operating Day by the resulting value to provide the profiled non-interval consumption data."
  - id: e9
    source: np-18
    locator: "Section 18.2.3(1)"
    quote: "Load Profiles for Non-Metered Loads, e.g. streetlights, traffic signals, security lighting, billboards, and parking lots are created using engineering estimates based on known criteria, such as hours of operation, with appropriate variation in sunrise/sunset times."
  - id: e10
    source: np-18
    locator: "Section 18.4.2(3)"
    quote: "Competitive Retailers (CRs) may dispute a Load Profile ID assignment through the process described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure."
---

## Definition

A Load Profile represents the energy usage of a group of customers, showing demand variation on an hourly or sub-hourly basis. [e1]

## How it works

The retail market requires 15-minute settlement intervals. Load profiling is a cost-effective way to estimate and allocate 15-minute load for ESI IDs when ERCOT does not receive 15-minute consumption data. [e2] For non-interval metered loads, profiles come from statistical "adjusted static" models built from load research samples and tied to weather descriptors such as temperature and humidity. [e3] Non-metered loads such as streetlights use engineering estimates. [e9]

Profile application takes an ESI ID's aggregated usage for a period, usually a month, divides it by the profile class's usage for the same period, and scales the daily load profile by the result to produce interval data. [e8] These intervals feed Data Aggregation, which applies profiles, loss factors and unaccounted-for-energy allocation to determine QSE and LSE responsibility by settlement interval and settlement point. [e6]

## ERCOT context

Each ESI ID is assigned a Weather Zone by TDSPs based on service address ZIP code, and TDSPs submit any Load Profile ID change to ERCOT. [e5][e4] Profile design is meant, among other goals, to minimize its contribution to UFE over all settlement intervals. [e7]

## Key facts

- 15-minute settlement interval drives the need for profiles. [e2]
- Non-interval loads use adjusted static models relating load to weather. [e3]
- Non-metered loads use engineering estimates. [e9]
- TDSPs assign Weather Zones by ZIP code. [e5]

## Say it like this

(Guidance) For customers without interval meters, ERCOT builds a 15-minute load shape from a weather-driven profile and scales it to the customer's metered usage. Profiled load then rolls up to each retailer's settlement position.

## Common confusion

(Guidance) A profile is not that customer's own interval data: it is a class shape scaled to the ESI ID's usage. [e8] It is also not used where actual interval data is received. [e2]

## Questions

### Why does ERCOT need profiles at all?

Settlement is in 15-minute intervals, and where ERCOT does not receive 15-minute consumption data, profiles estimate it. [e2]

### How is a profile scaled to a customer?

Aggregated usage for a period is divided by the profile class's usage over the same period, and the day's profile is scaled by that ratio. [e8]

## Open items

- Deeper pass: Load Profile ID assignment and validation cycles (18.4), profile types and the Load Profiling Guide (not a saved source).
- Deeper pass: estimation for IDR ESI IDs in Section 11.4.3 (weather response informed proxy day).
- Deeper pass: UDG and excess generation adjustments for rooftop solar.
