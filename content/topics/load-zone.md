---
id: load-zone
name: Load Zone
aliases: [Load Zone, LZ, zonal price, LZ_NORTH, LZ_WEST, LZ_SOUTH, LZ_HOUSTON]
kind: concept
domain: pricing
level: 1
lenses: [analyst, retail, trading, congestion]
as_of: 2026-11-18
links:
  - to: settlement-point
    type: is-a
    note: A Load Zone is one of the three kinds of Settlement Point. [e8]
  - to: spp
    type: determines
    note: Each Load Zone has a Settlement Point Price calculated as a load-weighted price. [e2][e3]
  - to: lmp
    type: related
    note: Load Zone prices are built from bus-level LMPs. [e3]
  - to: trading-hub
    type: contrasts-with
    note: A Hub averages a fixed list of buses, while a Load Zone price is weighted by Load. [e3]
  - to: congestion
    type: related
    note: Zones are meant to group areas with similar congestion, and the IMM says intrazonal congestion now exceeds interzonal congestion. [e7]
  - to: load-ratio-share
    type: related
    note: Zonal Load Ratio Share cost allocation uses the four 2003 zones as Cost-Allocation Load Zones. [e14]
  - to: lse
    type: related
    note: LSEs' load is settled at the zone price.
  - to: crr
    type: related
    note: Load Zones are also used for Congestion Revenue Right Settlement, as a zone of power flow buses. [e1]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Zone"
    quote: "In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, a group of power flow buses assigned to the same zone under Section 3.4, Load Zones. Every power flow bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes."
  - id: e2
    source: np-03
    locator: "Section 3.4, paragraph (1)"
    quote: "ERCOT shall assign every power flow bus to a Load Zone for Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors."
  - id: e3
    source: np-03
    locator: "Section 3.4, paragraph (2)"
    quote: "ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The Load-weighting must be determined using the Load, if any, from the State Estimator at each Electrical Bus."
  - id: e4
    source: np-03
    locator: "Section 3.4.1, paragraphs (1) and (2)"
    quote: "The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications, less any Electrical Buses that are assigned to a NOIE Load Zone or a DC Tie Load Zone."
  - id: e5
    source: np-03
    locator: "Section 3.4.2, paragraph (1)"
    quote: "Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below."
  - id: e6
    source: np-03
    locator: "Section 3.4.3, paragraph (1)(a)"
    quote: "There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, and Lower Colorado River Authority (LCRA);"
  - id: e7
    source: imm-som-2025
    locator: "Chapter I, Congestion section"
    quote: "Congestion within load zones continues to outpace congestion between load zones. Load zones are aggregations of load nodes on the system that experience similar congestion patterns. ERCOT established its current four load zones – West, North, South, and Houston – in 2003."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e9
    source: np-03
    locator: "Section 3.4.4, paragraph (1)"
    quote: "A DC Tie Load Zone contains only the Electrical Bus in the ERCOT Transmission Grid that connects the DC Tie and is used in the settlement of the DC Tie Load in that zone."
  - id: e10
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e11
    source: imm-som-2025
    locator: "Chapter V.G, Load Zone Configuration"
    quote: "However, when a load zone contains substantial internal congestion, those costs are averaged across loads and are no longer clearly associated with specific transmission limitations."
  - id: e12
    source: imm-som-2025
    locator: "Chapter I.C, Zonal Energy Prices"
    quote: "The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained."
  - id: e13
    source: np-03
    locator: "Section 3.4.5, paragraph (1)(c)"
    quote: "For each new Electrical Bus not covered in paragraphs (a) or (b) above, ERCOT shall simulate LMPs for the annual peak hour of the system with the new Electrical Bus incorporated into the model. ERCOT shall assign that new Electrical Bus to the Competitive Load Zone with the closest matching zonal Settlement Point Price to the new Electrical Bus's LMP"
  - id: e14
    source: np-03
    locator: "Section 3.4.3, paragraph (1)(b)"
    quote: "Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using “Cost-Allocation Load Zones,” which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications"
  - id: e15
    source: imm-som-2025
    locator: "Chapter I, Congestion section"
    quote: "We continue to recommend that ERCOT revise the prevailing load zone configuration to reflect these evolving congestion patterns."
---

## Definition

A Load Zone is a group of power flow buses (in the DAM and CRR Auction) or Electrical Buses (in the Real-Time Market) assigned to the same zone under Protocol Section 3.4, and every bus in ERCOT with Load must be assigned to one for Settlement. [e1]

## How it works

In real time, the Load Zone Settlement Point Price is the Load-weighted average of the LMPs at all Electrical Buses assigned to the zone, with the weights taken from State Estimator Load at each bus. [e3] In the day-ahead, ERCOT calculates the zone price using Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint, with weights from Load distribution factors. [e2]

There are three types of Load Zone: Competitive Load Zones, NOIE Load Zones, and DC Tie Load Zones. [e4] The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market, unless changed, less any buses assigned to a NOIE or DC Tie Load Zone. [e4] A DC Tie Load Zone holds only the one Electrical Bus connecting the DC Tie. [e9] The four NOIE Load Zones approved before nodal implementation are Austin Energy, City Public Service, Rayburn Country Electric Cooperative and LCRA. [e6]

Changes are slow by design. Competitive and NOIE Load Zones can be added, deleted or changed only with ERCOT Board approval, and approved changes take effect 48 months after the end of the month of approval, with an exception for some NOIE cases. [e5] A new Electrical Bus without an obvious zone is assigned to the Competitive Load Zone whose zonal price best matches a simulated annual-peak-hour LMP at that bus. [e13]

## ERCOT context

The IMM names the four current load zones as West, North, South and Houston, established in 2003. [e7] Loads settle at the zone price, a load-weighted average of nodal prices, while generators settle at their own nodal prices. [e10]

The IMM argues the 2003 zones no longer match congestion: congestion within load zones continues to outpace congestion between load zones. [e7] When a zone has substantial internal congestion, its cost is averaged across loads and no longer tied to specific transmission limits. [e11] The West zone is the example the IMM gives, combining the export-constrained Panhandle with the import-constrained Permian Basin. [e12] The IMM continues to recommend that ERCOT revise the load zone configuration. [e15]

## Key facts

- Every bus with Load must be assigned to a Load Zone for Settlement. [e1]
- Real-time Load Zone SPP is the State Estimator Load-weighted average of Electrical Bus LMPs. [e3]
- Zone changes require ERCOT Board approval and take effect 48 months after the end of the approval month (with exceptions). [e5]
- The four Competitive Load Zones date from the 2003 market; the IMM names them West, North, South and Houston. [e4][e7]
- There are four NOIE Load Zones approved before nodal start-up. [e6]
- A DC Tie Load Zone contains only the one Electrical Bus connecting the DC Tie. [e9]

## Say it like this

A load zone is a group of buses that settle load at one load-weighted average price. ERCOT has used the same four competitive zones since 2003 [e4], and the IMM's view is that they now hide meaningful congestion, especially in the West.

## Common confusion

- Load Zone versus Hub: a zone price is weighted by Load, a hub price is a fixed bus average. [e3]
- Zone names in the market (the LZ_ prefix) are market convention; the protocol text calls them Competitive, NOIE and DC Tie Load Zones. [e4]
- NOIE Load Zones and Competitive Load Zones are both Load Zones, but the Cost-Allocation Load Zones used for LRS allocation are the four 2003 zones. [e14]
- Generators do not settle at the Load Zone price; they settle at their Resource Node. [e10]

## Questions

### How is the real-time Load Zone price calculated?

As the Load-weighted average of LMPs at all Electrical Buses in the zone, with Load from the State Estimator at each bus. [e3]

### Why does the IMM want to change the zones?

It says intrazonal congestion continues to outpace interzonal congestion, and that internal zone congestion is averaged across loads, obscuring transmission limitations. [e7][e11] The West is the case in point, combining Panhandle and Permian. [e12]

### Can ERCOT just redraw the zones?

No. Board approval is needed and changes take effect 48 months after the end of the month of approval. [e5]

### What is a DC Tie Load Zone?

A zone containing only the Electrical Bus that connects the DC Tie, used to settle DC Tie Load. [e9]

## Open items

- Annual average price by Load Zone (2024, 2025): the IMM tables in the saved reports are garbled in text form. Only the ranking (West highest in 2025, then South) is cited in the spp topic.
- Official zone names LZ_NORTH/LZ_SOUTH/LZ_WEST/LZ_HOUSTON: the protocol text saved does not use the LZ_ naming; the aliases above are market convention, not sourced.
- Status of any pending or approved load zone reconfiguration: not found in the saved sources beyond the IMM recommendation.
- Real-time Load Zone formula for DC Tie zones details and energy-weighted SPP (RTSPPEW): not covered here.
