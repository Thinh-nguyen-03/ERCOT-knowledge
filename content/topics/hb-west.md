---
id: hb-west
name: HB_WEST (West Hub)
aliases: [HB_WEST, West Hub, West 345, West 345 kV Hub]
kind: concept
domain: pricing
level: 1
lenses: [trading, analyst, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: trading-hub
    type: is-a
    note: The West 345 kV Hub is one of the defined Hubs. [e1]
  - to: settlement-point
    type: is-a
    note: A Hub is a kind of Settlement Point. [e2]
  - to: hb-north
    type: contrasts-with
    note: The North 345 kV Hub Price uses the same pricing method as the West 345 kV Hub (aggregated Shift Factors in the Day-Ahead, simple average of time-weighted Hub Bus prices in Real-Time) over its own Hub Buses. [e3][e8]
  - to: congestion
    type: related
    note: In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs. [e5]
  - to: load-zone
    type: contrasts-with
    note: The IMM's West Zone statements are about the Load Zone, not this Hub. [e6]
  - to: basis-risk
    type: related
    note: A position settled at a node or load zone against the West Hub carries the price difference between the two Settlement Points, which the IMM ties to West congestion. [e5][e23]
  - to: waha-hub
    type: related
    note: The IMM uses Waha gas prices for West-zone gas units, and EIA says Waha prices are typically lower than other hubs and sometimes negative. [e26][e28]
  - to: negative-prices
    type: related
    note: The IMM says the West zone had the highest number of negative-price intervals. [e24]
  - to: permian-transmission
    type: related
    note: The IMM ties West congestion to import constraints in the Permian Basin and export constraints in the Panhandle. [e5]
  - to: shift-factor
    type: related
    note: The day-ahead hub price uses aggregated Shift Factors of the Hub Buses. [e3]
  - to: exchanges-ice-nodal
    type: related
    note: ICE lists an ERCOT Panhandle Heat Rate 345kV Hub contract, a different hub from West 345. [e30][e12]
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
  - id: e8
    source: np-03
    locator: "Section 3.5.2.1, paragraph (2)"
    quote: "The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e9
    source: ercot-hubs-load-zones-page
    locator: 'ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote)'
    quote: "HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08"
  - id: e10
    source: np-03
    locator: "Section 3.5.2.4, paragraph (1), Hub Bus table, first rows"
    quote: "No. Hub Bus kV Hub 1 MULBERRY 345 WEST 2 BOMSW 345 WEST 3 OECCS 345 WEST 4 BITTCR 345 WEST"
  - id: e11
    source: np-03
    locator: "Section 3.5.2.4, paragraph (1), Hub Bus table, last rows"
    quote: "16 SWESW 345 WEST 17 TWINBU 345 WEST"
  - id: e12
    source: np-03
    locator: "Section 3.5.2.5, paragraph (1) (Panhandle 345 kV Hub)"
    quote: "The Panhandle 345 kV Hub is composed of the following listed Hub Buses:"
  - id: e13
    source: np-03
    locator: "Section 3.5.2.5, Hub Bus table, first and last rows"
    quote: "No. Hub Bus kV Hub 1 ABERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN"
  - id: e14
    source: np-03
    locator: "Section 3.5.2.5, Hub Bus table, last rows"
    quote: "11 WHIT_RVR 345 PAN 12 WINDMILL 345 PAN"
  - id: e15
    source: np-03
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub)"
    quote: "The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price."
  - id: e16
    source: np-03
    locator: "Section 3.5.2.4, paragraph (3), day-ahead formula, fallback case"
    quote: "DASPP _(West345) = DASPP _(ERCOT345Bus), if HBBC _(West345)=0"
  - id: e17
    source: np-03
    locator: "Section 3.5.2.4, paragraph (4), real-time formula, fallback case"
    quote: "RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0"
  - id: e18
    source: np-03
    locator: "Section 3.5.2.4, paragraph (4), real-time formula"
    quote: "RTSPP _(West345) = Max [-$251, (RTRDP +"
  - id: e19
    source: np-06
    locator: "Section 6.6.1.5, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e20
    source: np-03
    locator: "Section 3.5.1, paragraph (1)"
    quote: "A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub."
  - id: e21
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, West row ($ per MWh, 2021 to 2025); Load Zone prices, not Hub prices"
    quote: "West $111.56 $66.62 $67.56 $35.88 $41.59"
  - id: e22
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, ERCOT row ($ per MWh, 2021 to 2025)"
    quote: "ERCOT $179.24 $76.41 $73.28 $32.41 $36.94"
  - id: e23
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.G.2, Congestion Impact"
    quote: "Congestion costs within the West increased by 27% between 2024 and 2025."
  - id: e24
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Zonal Energy Prices"
    quote: "This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone."
  - id: e25
    source: imm-som-2025
    locator: "Chapter VI, Resource Adequacy, Net Revenue by Location (page 122 OCR)"
    quote: "Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region."
  - id: e26
    source: imm-som-2025
    locator: "Chapter VI, Resource Adequacy, Net Revenue by Location (page 122 OCR)"
    quote: "the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices)."
  - id: e27
    source: eia-gas-hubs
    locator: "EIA, natural gas pricing hubs, Waha"
    quote: "The Waha natural gas pricing hub is in West Texas near Permian Basin production activities and helps natural gas market participants get a sense of pricing in West Texas and southeastern New Mexico."
  - id: e28
    source: eia-gas-hubs
    locator: "EIA, natural gas pricing hubs, Waha"
    quote: "Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at other hubs, sometimes turning negative."
  - id: e29
    source: eia-waha-2024
    locator: "EIA, Today in Energy on 2024 natural gas prices, West Texas paragraph"
    quote: "In West Texas, prices at the Waha Hub near Permian Basin production activities traded below zero for 42% of trading days in 2024 as natural gas production from the Permian Basin outpaced available pipeline takeaway capacity."
  - id: e30
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC contract specification dated November 21, 2026, title"
    quote: "ERCOT Panhandle Heat Rate 345kV Hub Off-Peak"
  - id: e31
    source: np-02
    locator: "Section 2.1, definition of Hub Bus, paragraph (2) (Real-Time Market)"
    quote: "In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus. If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus."
---

## Definition

The West 345 kV Hub (West 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology in its definition. [e2] ERCOT's real-time price display lists the hub Settlement Point name HB_WEST. [e9] The saved Protocol text does not itself use the name HB_WEST.

## How it works

The Hub Bus list. The Protocol table for the West 345 kV Hub starts with MULBERRY, BOMSW, OECCS and BITTCR and ends at number 17, TWINBU, so it has 17 listed Hub Buses. [e10][e11] The table gives only bus names, voltage (345 kV) and the hub label, so it does not show which buses sit in the Panhandle and which in the Permian Basin (see Open items). [e10]

Pricing. The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] The real-time Hub Bus LMP is the simple average of the LMPs of its energized Electrical Buses, and a fully de-energized Hub Bus drops out. [e31] The Hub LMP is the arithmetic average of the Hub Buses' Real-Time LMPs (the ERCOT Hub Average 345 kV Hub is the exception). [e19] The real-time formula carries the -$251 floor, written Max[-$251, (RTRDP + ...)]. [e18] If no Hub Bus has an energized component, the hub price equals the ERCOT Bus Average 345 kV Hub price in both the day-ahead and real-time formulas. [e16][e17]

Stability. A Hub, once defined, may not be modified except as explicitly described in its definition (np-03 Section 3.5.1), and np-02 says the Hub Bus list and method can never be modified. [e20][e7]

## Formula

West hub real-time price per 15-minute Settlement Interval: the floor Max[-$251, ...] applied to the Real-Time Reliability Deployment Price (RTRDP) plus the equal-weighted average over Hub Buses of the time-weighted Hub Bus prices. [e18][e3] The Protocol defines the RT variables with the same structure as the North hub, over West Hub Buses. [e3][e4]

## ERCOT context

The West Hub and the Panhandle Hub are different hubs. The Panhandle 345 kV Hub is its own Section 3.5.2.5 hub of 12 Hub Buses (ABERNATH through WINDMILL) and is not part of the ERCOT Hub Average. [e12][e13][e14][e15] ERCOT's display lists an HB_PAN Settlement Point, though no saved source says in words that it is the Panhandle hub. [e9] ICE lists an "ERCOT Panhandle Heat Rate 345kV Hub Off-Peak" contract, which refers to that Panhandle hub rather than West 345. [e30]

In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs, export constrained in the panhandle because of renewables and import constrained in the Permian Basin. [e5] Congestion costs within the West increased by 27% between 2024 and 2025. [e23] The IMM also reports that the West Zone had the highest annual average zonal energy price for the second year in a row (2025). [e6] Those statements are about the West Load Zone, not the West Hub. [e6]

Zone price levels (load-weighted real-time prices by Load Zone, IMM Table 1, $ per MWh for 2021 to 2025): West $111.56, $66.62, $67.56, $35.88, $41.59; ERCOT $179.24, $76.41, $73.28, $32.41, $36.94. [e21][e22] So the West zone was below the ERCOT average from 2022 to 2023 and above it in 2024 and 2025 (comparison from the two rows). [e21][e22] These are Load Zone prices, not HB_WEST. [e19]

Negative prices and spikes: the IMM says the West zone's Panhandle/Permian duality explains why it had the highest number of negative-price intervals and the greatest frequency of price spikes of any load zone in 2025. [e24]

Gas link: the IMM's net revenue analysis uses Waha hub gas prices for the West zone. [e26] It says high Permian gas production and limited export capability have resulted in low gas prices at Waha, and that the price gap between the Waha and Katy gas hubs widened in 2025 because the Permian import constraint increased congestion costs. [e25] EIA describes the Waha gas pricing hub as in West Texas near Permian production, with prices typically below other hubs and sometimes negative. [e27][e28] EIA reports Waha traded below zero for 42% of trading days in 2024. [e29] These are gas prices, not electricity hub prices.

## Key facts

- The West 345 kV Hub is defined in Protocol Section 3.5.2.4 and lists 17 Hub Buses. [e1][e11]
- Day-ahead price uses aggregated Shift Factors; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval, with a -$251 floor in the formula. [e3][e18]
- In real time it is one of four prices averaged in the ERCOT Hub Average 345 kV Hub price; Panhandle is excluded. [e4][e15]
- 2025 IMM: West Zone had the highest annual average zonal energy price ($41.59 per MWh) for the second year in a row. [e6][e21]
- 2025 IMM: congestion within the West rose 27% from 2024 to 2025. [e23]
- ERCOT's real-time price display lists HB_WEST and HB_PAN as separate Settlement Points. [e9]

## Say it like this

HB_WEST is the price of a fixed set of 17 west 345 kV buses, a simple average of Hub Bus prices in real time. The IMM ties the West zone's higher prices and negative prices to congestion between the Panhandle and the Permian, so check whether a west hub price is the right reference for a particular west generator or load. [e3][e11][e5][e24]

## Common confusion

- West Hub versus West Load Zone: the Hub price follows the Hub definition (equal-weighted Hub Bus average), the Load Zone price is weighted by Load, and the IMM's zone statements do not automatically apply to the Hub. [e3][e19][e6]
- West Hub versus Panhandle Hub (HB_PAN on ERCOT's display): separate hubs with separate bus lists; only West is in the ERCOT Hub Average. [e12][e15][e9]
- West Hub versus Waha: Waha is a natural gas pricing hub, while the West Hub is an electricity Settlement Point. [e27][e2]
- Hub versus generators in the Permian or Panhandle: the IMM reports large intrazonal congestion costs in the West Zone, so check node-level prices rather than assuming the hub or zone price applies to a given generator. [e5]

## Questions

### Why is West pricing different from the rest of ERCOT?

The IMM says transmission projects have not kept pace with renewables growth in the Panhandle and rising demand in the Permian Basin, leading to higher congestion in the West. [e6]

### How is the West Hub real-time price formed?

As the simple average of time-weighted Hub Bus prices for each 15-minute Settlement Interval, with the -$251 floor applied. [e3][e18]

### Why does the West zone show both the most negative prices and the most spikes?

The IMM says the West zone includes the export-constrained Panhandle and the import-constrained Permian Basin, and that this duality explains the highest number of negative-price intervals and the greatest frequency of price spikes. [e24][e5]

### What if a West Hub position is settled against a Panhandle generator?

The Panhandle 345 kV Hub is a separate hub with its own 12 buses, so a position referenced to HB_WEST does not settle at the Panhandle hub price. [e12][e14][e2]

### How do West power prices relate to Waha gas prices?

The IMM uses Waha gas prices for West-zone gas units and says Permian gas is cheap because of limited export capability. [e26][e25] It does not state a numerical link between Waha and HB_WEST.

## Open items

- Resolved 2026-11-21: Hub Bus list quoted (17 buses; Panhandle hub 12 buses).
- Which of the 17 West Hub Buses are Panhandle and which Permian: the Protocol table gives only names, so it is not stated in the saved sources.
- Hub-level annual price levels and West-versus-North hub spreads: not in the saved sources (IMM tables cover Load Zones only).
- No saved source states in so many words that HB_WEST is the Protocols' "West 345 kV Hub (West 345)".
- A numerical relationship between Waha gas prices and HB_WEST prices is not stated in the saved sources.
- np-02 says a Hub can "never be modified"; np-03 Section 3.5.1 says it may not be modified except as its definition explicitly describes.
