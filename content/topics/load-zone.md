---
id: load-zone
name: Load Zone
aliases: [Load Zone, LZ, zonal price, LZ_NORTH, LZ_WEST, LZ_SOUTH, LZ_HOUSTON]
kind: concept
domain: pricing
level: 1
lenses: [analyst, retail, trading, congestion]
as_of: 2026-11-21
depth: deep
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
    note: For each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of its Hub Buses, while a Load Zone price is weighted by Load. [e16][e3]
  - to: congestion
    type: related
    note: Zones are meant to group areas with similar congestion, and the IMM says intrazonal congestion now exceeds interzonal congestion. [e7]
  - to: load-ratio-share
    type: related
    note: Zonal Load Ratio Share cost allocation uses the four 2003 zones as Cost-Allocation Load Zones. [e14]
  - to: lse
    type: related
    note: Loads are billed at the load zone price. [e10]
  - to: crr
    type: related
    note: Load Zones are also used for Congestion Revenue Right Settlement, as a zone of power flow buses. [e1]
  - to: ptp-obligation
    type: related
    note: A Load Zone can be the source or sink of a PTP, with Load distribution factors spreading the quantity across the zone's buses. [e27]
  - to: shift-factor
    type: related
    note: The day-ahead Load Zone price uses Load-weighted aggregated Shift Factors. [e2]
  - to: pcrr
    type: related
    note: A NOIE's move to a Competitive Load Zone is tied to the PCRR nomination window timing. [e19]
  - to: hb-west
    type: related
    note: The IMM's West Zone findings concern the Load Zone, not the West Hub. [e12]
  - to: negative-prices
    type: related
    note: The IMM says the West zone had the most negative-price intervals in 2025. [e12]
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
    quote: "Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below. DC Tie Load Zones are not subject to these requirements."
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
  - id: e16
    source: np-06
    locator: "Section 6.6.1.5, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e15
    source: imm-som-2025
    locator: "Chapter I, Congestion section"
    quote: "We continue to recommend that ERCOT revise the prevailing load zone configuration to reflect these evolving congestion patterns."
  - id: e17
    source: ercot-hubs-load-zones-page
    locator: 'ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote)'
    quote: "LZ_AEN | 37.40 | -2.06 | 37.82 | -2.01 LZ_CPS | 38.17 | -1.72 | 38.59 | -1.67 LZ_HOUSTON | 36.10 | -2.65 | 36.52 | -2.60 LZ_LCRA | 37.72 | -1.92 | 38.14 | -1.87 LZ_NORTH | 34.44 | -3.41 | 34.86 | -3.36 LZ_RAYBN | 34.25 | -3.49 | 34.67 | -3.44 LZ_SOUTH | 37.80 | -1.88 | 38.22 | -1.83 LZ_WEST | 50.55 | 3.89 | 50.97 | 3.94"
  - id: e18
    source: np-03
    locator: "Section 3.4.2, paragraph (2)"
    quote: "The addition of Load that is new to the ERCOT System to an existing Load Zone does not constitute a change to a Load Zone under this section."
  - id: e19
    source: np-03
    locator: "Section 3.4.2, paragraph (3)"
    quote: "A NOIE that was included in the establishment of an automatic pre-assigned NOIE Load Zone under paragraph (1)(c) of Section 3.4.3 may elect to be assigned to an appropriate Competitive Load Zone after giving notice of termination of its power supply arrangement if a request to be assigned to a Competitive Load Zone was given to ERCOT at least 90 days prior to the start of the Pre-Assigned Congestion Revenue Right (PCRR) nomination window for the effective year of the Load Zone change."
  - id: e20
    source: np-03
    locator: "Section 3.4.3, paragraph (1)(d) and (f)"
    quote: "NOIEs may participate in only one NOIE Load Zone, and all Loads served by that NOIE must be contained within that Load Zone;"
  - id: e21
    source: np-03
    locator: "Section 3.4.3, paragraph (1)(f)"
    quote: "Four years after a NOIE offers its Customers retail choice, the NOIE’s Load must be merged into the appropriate Competitive Load Zone(s)."
  - id: e22
    source: np-03
    locator: "Section 3.4.5, paragraph (1), (a) and (b)"
    quote: "ERCOT shall assign new Electrical Buses to a Load Zone and Cost Allocation Zone in accordance with the following rules; changes are effective immediately:"
  - id: e23
    source: np-03
    locator: "Section 3.4.5, paragraph (1)(a)-(b)"
    quote: "For each new Electrical Bus serving Load of a NOIE that is a part of a NOIE Load Zone, the new Electrical Bus will be assigned to that NOIE Load Zone; (b) For each new Electrical Bus not covered in paragraph (a) above, connected via Transmission Facilities to Electrical Buses all located within the same Competitive Load Zone, the new Electrical Bus will be assigned to that Competitive Load Zone;"
  - id: e24
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone."
  - id: e25
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1), formula for DC Tie Load Zone"
    quote: "For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y)"
  - id: e26
    source: np-06
    locator: "Section 6.6.1.2, paragraph (2)"
    quote: "For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrated value for the 15-minute interval) but varies with each SCED interval within the 15-minute Settlement Interval, an energy-weighted Real-Time Settlement Point Price shall be used and is calculated as follows:"
  - id: e27
    source: np-04
    locator: "Section 4.5.1, paragraph (5) (DAM Clearing Process; text in effect refers to CRRs)"
    quote: "ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone. The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions."
  - id: e28
    source: np-06
    locator: "Section 6.6.1.4, Load Zone LMPs, variable table, SEL"
    quote: "The Load from the State Estimator, including a calculated net Load value at each Private Use Network and adjustments to account for DGR and DESR injections and withdrawals that are settled at a Resource Node, excluding WSL and Non-WSL ESR Charging Load for Electrical Bus b in the Load Zone, for the SCED interval y."
  - id: e29
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, Houston row ($ per MWh, 2021 to 2025)"
    quote: "Houston $136.69 $82.47 $72.88 $30.24 $34.95"
  - id: e30
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, North row"
    quote: "North $221.52 $77.30 $78.01 $30.42 $35.34"
  - id: e31
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, South row"
    quote: "South $200.35 $74.39 $71.12 $34.66 $37.59"
  - id: e32
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, West row"
    quote: "West $111.56 $66.62 $67.56 $35.88 $41.59"
  - id: e33
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, ERCOT row and note"
    quote: "ERCOT $179.24 $76.41 $73.28 $32.41 $36.94"
  - id: e34
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Zonal Energy Prices, introduction to Table 1"
    quote: "These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties."
  - id: e35
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.G.2, Congestion Impact, Figure 45 discussion"
    quote: "In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024."
  - id: e36
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.G.2, Figure 45 discussion"
    quote: "Congestion costs within the West increased by 27% between 2024 and 2025."
  - id: e37
    source: imm-som-2025
    locator: "page 93 (OCR), Chapter V.G.1, The Case for Updating the Load Zones in ERCOT"
    quote: "A regular process for updating ERCOT’s load zone configuration is critical for zonal pricing to send efficient signals to load for consumption and investment. This is especially important because ERCOT’s topology will continue to become more complex, while any approved load zone configuration will take effect four years after approval."
  - id: e38
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.G.3, Methodology for Defining Load Zones"
    quote: "We evaluated a 7-load-zone configuration using data from January 2022 through December 2025."
  - id: e39
    source: imm-som-2025
    locator: "page 95 (OCR), Table 6: Real-Time Congestion Rent ($MM) for the 7-Load-Zone Configuration, column headings"
    quote: "Cross Zone Coast North South SouthCentral SouthWest FarWest Panhandle"
  - id: e40
    source: imm-som-2025
    locator: "page 153 (OCR), Recommendation 2020-3"
    quote: "Because of the CRR auction design, any change to the configuration must take effect at least four years after approval."
  - id: e41
    source: imm-som-2025
    locator: "page 153 (OCR), Recommendation 2020-3"
    quote: "To date, ERCOT has not indicated that it intends to revisit or revise the current load zone structure."
  - id: e42
    source: imm-som-2025
    locator: "page 152-153 (OCR), Recommendation 2020-3"
    quote: "Industrial load has grown substantially in West Texas, driven by electrification of oil-and-gas operations and data center development, and residential load has shifted away from historical population centers."
  - id: e43
    source: imm-som-2025
    locator: "page 153 (OCR), Recommendation 2020-3"
    quote: "Both areas face the same zonal price for settlement despite their very different cost and congestion profiles."
  - id: e44
    source: imm-som-2024
    locator: "page 97 (OCR), Chapter IV, Load Zone Configuration (2024 report)"
    quote: "That is why the IMM recommended in the 2020 SOM that ERCOT update the configuration of load zones and introduce new load zones to recognize key transmission constraints and minimize intra-zonal congestion."

---

## Definition

A Load Zone is a group of power flow buses (in the DAM and CRR Auction) or Electrical Buses (in the Real-Time Market) assigned to the same zone under Protocol Section 3.4, and every bus in ERCOT with Load must be assigned to one for Settlement. [e1][e3]

## How it works

Real-time price. In real time, the Load Zone Settlement Point Price is the Load-weighted average of the LMPs at all Electrical Buses assigned to the zone, with the weights taken from State Estimator Load at each bus. [e3][e24] The weight is each bus's State Estimator Load; the Protocol defines that Load as including a calculated net Load at each Private Use Network and adjustments for distribution generation and storage injections and withdrawals settled at a Resource Node, excluding wholesale storage and non-wholesale-storage ESR charging Load (a pending change, NPRR1188, would also exclude certain Controllable Load Resource Load). [e28] For a DC Tie Load Zone the zone LMP is simply the LMP at its one bus. [e25]

Energy-weighted price. Where a 15-minute quantity is represented as one value but varies within the interval, Settlement uses an energy-weighted Real-Time Settlement Point Price rather than the simple time-weighted one. [e26]

Day-ahead price. In the day-ahead, ERCOT calculates the zone price using Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint, with weights from Load distribution factors. [e2] The distribution factors allocate bids and offers and source and sink quantities at a Load Zone across the power flow buses modeled with Load; the non-Private Use Network factors come from historical State Estimator hourly distribution using a proxy day for anticipated weather. [e27]

Zone types. The Protocols refer to Competitive Load Zones, NOIE Load Zones, and DC Tie Load Zones. [e4] The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market, unless changed, less any buses assigned to a NOIE or DC Tie Load Zone. [e4] A DC Tie Load Zone holds only the one Electrical Bus connecting the DC Tie. [e9] The four NOIE Load Zones approved before nodal implementation are Austin Energy, City Public Service, Rayburn Country Electric Cooperative and LCRA. [e6] A NOIE may participate in only one NOIE Load Zone, with all its Loads inside that zone. [e20] Four years after a NOIE offers retail choice its Load must be merged into the appropriate Competitive Load Zone(s). [e21]

Changes are slow. Competitive and NOIE Load Zones can be added, deleted or changed only with ERCOT Board approval, and approved changes take effect 48 months after the end of the month of approval, with listed exceptions; DC Tie Load Zones are not subject to these requirements. [e5] Adding Load that is new to the ERCOT System to an existing Load Zone is not a change to the zone. [e18] A NOIE in a pre-assigned NOIE Load Zone may elect to move to a Competitive Load Zone if it asks at least 90 days before the PCRR nomination window for the effective year. [e19]

New buses. New Electrical Buses are assigned to a Load Zone and Cost Allocation Zone with changes effective immediately. [e22] A bus serving a NOIE in a NOIE zone goes to that zone, and a bus connected only to buses in one Competitive Load Zone goes to that zone. [e23] Any other new bus is assigned to the Competitive Load Zone whose zonal price best matches a simulated annual-peak-hour LMP at that bus. [e13]

## ERCOT context

The IMM names the four current load zones as West, North, South and Houston, established in 2003. [e7] Loads settle at the zone price, a load-weighted average of nodal prices, while generators settle at their own nodal prices. [e10]

Zone price levels. The IMM's Table 1 gives load-weighted average annual real-time prices by zone, in $ per MWh, for 2021 to 2025 in order. Houston: $136.69, $82.47, $72.88, $30.24, $34.95. [e29] North: $221.52, $77.30, $78.01, $30.42, $35.34. [e30] South: $200.35, $74.39, $71.12, $34.66, $37.59. [e31] West: $111.56, $66.62, $67.56, $35.88, $41.59. [e32] ERCOT: $179.24, $76.41, $73.28, $32.41, $36.94. [e33] These prices exclude imports and exports through DC ties. [e34] The IMM notes the West zone had the highest average price in 2025, followed by South. [e12]

Why the zones are criticised. The IMM says congestion within load zones continues to outpace congestion between load zones. [e7] In 2025 roughly 9% of congestion costs were interzonal, down from 11% in 2024, and congestion within the West increased by 27% between 2024 and 2025. [e35][e36] When a zone has substantial internal congestion, its cost is averaged across loads and no longer tied to specific transmission limits. [e11] The IMM notes that the West zone includes both the export-constrained Panhandle and the import-constrained Permian Basin, which face the same zonal price despite very different cost and congestion profiles. [e12][e43] It says industrial load in West Texas has grown from oil-and-gas electrification and data centers. [e42] It continues to recommend (Recommendation 2020-3, first made in its 2020 report) that ERCOT revise the load zone configuration. [e15][e44]

The IMM's proposal. The IMM evaluated a 7-load-zone configuration using January 2022 to December 2025 data, with zones named Coast, North, South, SouthCentral, SouthWest, FarWest and Panhandle in its Table 6, and says it would significantly reduce intrazonal congestion. [e38][e39] (That is an IMM analysis, not an ERCOT or Board action.) Timing: any change must take effect at least four years after approval because of the CRR auction design. [e40][e37] To date, in the IMM's 2025 report, ERCOT has not indicated that it intends to revisit the current zone structure. [e41]

## Timeline

- 2003: the four zones in effect in the 2003 ERCOT market become the Competitive Load Zones (and the Cost-Allocation Load Zones) unless changed under Section 3.4.2. [e4][e14]
- 2020: the IMM first recommends reconfiguring the load zones (Recommendation 2020-3, referencing its 2020 State of the Market report). [e44]
- 2024 and 2025 reports: the IMM repeats the recommendation; the 2025 report adds the 7-zone analysis and says ERCOT has not indicated it will revisit the structure. [e38][e41]

## Key facts

- Every bus with Load must be assigned to a Load Zone for Settlement. [e1]
- Real-time Load Zone SPP is the State Estimator Load-weighted average of Electrical Bus LMPs. [e3]
- Zone changes require ERCOT Board approval and take effect 48 months after the end of the approval month (with exceptions). [e5]
- The four Competitive Load Zones date from the 2003 market; the IMM names them West, North, South and Houston. [e4][e7]
- There are four NOIE Load Zones approved before nodal start-up. [e6]
- A DC Tie Load Zone contains only the one Electrical Bus connecting the DC Tie. [e9]
- 2025 average real-time zone prices ($/MWh): West $41.59, South $37.59, North $35.34, Houston $34.95. [e29][e30][e31][e32]
- ERCOT's real-time price display lists eight Load Zone Settlement Points by the names LZ_AEN, LZ_CPS, LZ_HOUSTON, LZ_LCRA, LZ_NORTH, LZ_RAYBN, LZ_SOUTH and LZ_WEST. [e17]

## Say it like this

A load zone is a group of buses that settle load at one load-weighted average price. ERCOT has used the same four competitive zones since 2003 [e4][e7], and the IMM's view is that congestion inside zones now outpaces congestion between them [e7], with the West zone combining very different areas [e12].

## Common confusion

- Load Zone versus Hub: a zone price is weighted by Load, while, for each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of its Hub Buses' Real-Time LMPs. [e3][e16]
- The protocol text refers to Competitive, NOIE and DC Tie Load Zones and does not use the LZ_ names. [e4]
- NOIE Load Zones and Competitive Load Zones are both Load Zones, but the Cost-Allocation Load Zones used for LRS allocation are the four 2003 zones. [e14]
- Generators do not settle at the Load Zone price; the IMM says they settle at the nodal level at their own locational marginal prices. [e10]
- Adding new load inside a zone is not a zone change; redrawing the zone is. [e18][e5]

## Questions

### How is the real-time Load Zone price calculated?

As the Load-weighted average of LMPs at all Electrical Buses in the zone, with Load from the State Estimator at each bus. [e3][e24]

### Why does the IMM want to change the zones?

It says intrazonal congestion continues to outpace interzonal congestion, and that internal zone congestion is averaged across loads, obscuring transmission limitations. [e7][e11] The IMM notes that the West zone includes both the Panhandle and the Permian Basin, which face the same zonal price. [e12][e43]

### Can ERCOT just redraw the zones?

No. Board approval is needed and changes take effect 48 months after the end of the month of approval. [e5] The IMM links the four-year lag to the CRR auction design. [e40]

### Why does a four-year lag matter for a zone proposal?

Any zone configuration approved today would take effect four years later, while the IMM says ERCOT's topology keeps getting more complex, so the IMM argues for a regular update process. [e37][e5]

### What is a DC Tie Load Zone?

A zone containing only the Electrical Bus that connects the DC Tie, used to settle DC Tie Load. [e9] Its zone LMP is that bus's LMP. [e25]

### What if a new substation is built that serves load in two zones' territory?

A new bus connected only to buses within one Competitive Load Zone joins that zone. Otherwise ERCOT simulates an annual-peak-hour LMP and assigns the bus to the Competitive Load Zone whose zonal price is closest, effective immediately. [e23][e13][e22]

## Scenarios

### A load-serving entity in the West wants to know why its zone price differs from a Panhandle wind farm's node price

- The load settles at the zone price, a load-weighted average, while the generator settles at its own nodal price. [e10]
- The IMM says the Panhandle and the Permian Basin share the West zone price despite different cost and congestion profiles. [e43]

## Open items

- Resolved 2026-11-21: zone annual average prices for 2021-2025 are now cited from the IMM 2025 OCR Table 1.
- Resolved 2026-11-19: the LZ_ names are sourced from ERCOT's real-time display. The saved sources do not state which of the eight are Competitive Load Zones and which are NOIE Load Zones in so many words.
- Status of any pending or approved load zone reconfiguration: none found; the IMM's 2025 report says ERCOT has not indicated it intends to revisit the structure. [e41]
- Quote of the full DC Tie day-ahead formula and of the RTSPPEW formula variables was not made; only the real-time DC Tie rule and the energy-weighted price purpose are cited.
- The IMM's 7-zone figures (Tables 6, Figures 46 to 48) are IMM analysis; the saved sources do not show any ERCOT, PUCT or Board decision on them.
