---
id: hb-north
name: HB_NORTH (North Hub)
aliases: [HB_NORTH, North Hub, North 345, North 345 kV Hub]
kind: concept
domain: pricing
level: 1
lenses: [trading, analyst, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: trading-hub
    type: is-a
    note: The North 345 kV Hub is one of the defined Hubs. [e1]
  - to: settlement-point
    type: is-a
    note: A Hub is a kind of Settlement Point. [e2]
  - to: hb-west
    type: contrasts-with
    note: The West 345 kV Hub is defined the same way but over a different set of buses (17 buses against 75 for North). [e3][e4][e10][e11]
  - to: spp
    type: determines
    note: The hub price is the Settlement Point Price at the Hub. [e3]
  - to: load-zone
    type: contrasts-with
    note: A Load Zone price is a Load-weighted average of bus LMPs, while a Hub price is an unweighted average of Hub Bus prices. [e8][e19]
  - to: block-products
    type: used-in
    note: ICE lists monthly peak and off-peak ERCOT North 345KV real-time contracts that settle on the ERCOT-published price for the North 345 kV Hub. [e22][e23]
  - to: exchanges-ice-nodal
    type: used-in
    note: The ICE North 345KV contracts are cash settled futures referencing ERCOT's published hub price. [e22][e24]
  - to: lmp
    type: related
    note: The Hub price averages Hub Bus prices, which are averages of bus LMPs. [e3][e15]
  - to: shift-factor
    type: related
    note: The day-ahead hub price uses aggregated Shift Factors of the Hub Buses. [e3]
  - to: basis-risk
    type: related
    note: A position settled at a node or load zone against a hub price carries a price difference between the two Settlement Points. [e2][e8]
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
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub)"
    quote: "The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price."
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
  - id: e10
    source: np-03
    locator: "Section 3.5.2.1, paragraph (1), Hub Bus table, last rows"
    quote: "74 WHTNY 345 NORTH 75 WCPP 345 NORTH"
  - id: e11
    source: np-03
    locator: "Section 3.5.2.4, paragraph (1), Hub Bus table, last rows"
    quote: "16 SWESW 345 WEST 17 TWINBU 345 WEST"
  - id: e12
    source: np-03
    locator: "Section 3.5.2.1, paragraph (1), Hub Bus table, first rows"
    quote: "No. Hub Bus kV Hub 1 ANASW 345 NORTH 2 CN345 345 NORTH 3 WLSH 345 NORTH 4 FMRVL 345 NORTH 5 LPCCS 345 NORTH"
  - id: e13
    source: np-03
    locator: "Section 3.5.1, paragraph (1)"
    quote: "A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub."
  - id: e14
    source: np-03
    locator: "Section 3.5.1, paragraphs (2) to (4)"
    quote: "When any Electrical Bus within a Hub Bus is disconnected from the Network Operations Model or the CRR Network Model through operations changes in transmission topology temporarily, ERCOT shall provide notice to all Market Participants as soon as practicable and exclude that Electrical Bus from the Hub Bus price calculation. (4) In the event of a permanent change that removes the Hub Bus from the ERCOT Transmission Grid, ERCOT shall file a Nodal Protocol Revision Request (NPRR) to revise the appropriate Hub definition."
  - id: e15
    source: np-02
    locator: "Section 2.1, definition of Hub Bus, paragraph (2) (Real-Time Market)"
    quote: "In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus. If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus."
  - id: e16
    source: np-03
    locator: "Section 3.5.2.1, paragraph (3), day-ahead formula, fallback case"
    quote: "DASPP _(North345) = DASPP _(ERCOT345Bus), if HBBC _(North345)=0"
  - id: e17
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), real-time formula, fallback case"
    quote: "RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0"
  - id: e18
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), real-time formula"
    quote: "RTSPP _(North345) = Max [-$251, (RTRDP +"
  - id: e19
    source: np-06
    locator: "Section 6.6.1.5, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e20
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e21
    source: np-03
    locator: "Section 3.5.2.7, paragraph (1) (ERCOT Bus Average 345 kV Hub)"
    quote: "The ERCOT Bus Average 345 kV Hub is composed of the Hub Buses listed in Section 3.5.2.1, North 345 kV Hub (North 345); Section 3.5.2.2, South 345 kV Hub (South 345); Section 3.5.2.3, Houston 345 kV Hub (Houston 345); and Section 3.5.2.4, West 345 kV Hub (West 345). The Panhandle 345 kV Hub is not included in the ERCOT Bus Average 345 kV Hub price."
  - id: e22
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Reference Price A - Description (ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, document dated November 18, 2026)"
    quote: "\"ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME\" means that the price for a Pricing Date will be that day's Specified Price per MWh of electricity for delivery on the Delivery Date, stated in U.S. Dollars, published by the ERCOT at http://www.ercot.com/content/cdr/html/real_time_spp"
  - id: e23
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Reference Price A - Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e24
    source: ice-ercot-north-offpeak
    locator: "Contract Specifications, Description (ICE ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, document dated November 18, 2026)"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the off-peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e25
    source: imm-som-2025
    locator: "page 80 (OCR), Chapter V.A, Summary of Transmission Congestion Results in 2025, first bullet"
    quote: "Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin."
  - id: e28
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), variable definitions, HBDF"
    quote: "HBDF _(b, hb, North345) = IF(B _(hb, North345)=0, 0, 1 / B _(hb, North345))"
  - id: e26
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, North row ($ per MWh, 2021 to 2025); these are Load Zone prices, not Hub prices"
    quote: "North $221.52 $77.30 $78.01 $30.42 $35.34"
  - id: e27
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter II.C, Table 1, West row ($ per MWh, 2021 to 2025); Load Zone prices"
    quote: "West $111.56 $66.62 $67.56 $35.88 $41.59"
---

## Definition

The North 345 kV Hub (North 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology set out in its definition. [e2] ERCOT's real-time price display lists the hub Settlement Point name HB_NORTH. [e9] The saved Protocol text does not itself use the name HB_NORTH.

## How it works

The Hub Bus list. The Protocol table for the North 345 kV Hub starts with buses ANASW, CN345, WLSH, FMRVL and LPCCS and ends at number 75, WCPP, so the hub has 75 listed Hub Buses, each at 345 kV. [e12][e10] The West 345 kV Hub, by comparison, ends at number 17. [e11] ERCOT posts the list of Electrical Buses in each Hub on its website. [e6]

From bus to hub price in real time. In the real-time market a Hub Bus is an energized Electrical Bus or group of them, and the Hub Bus LMP is the simple average of the LMPs of its energized Electrical Buses; a fully de-energized Hub Bus drops out of the Hub price. [e15] The Hub LMP for a SCED interval is the arithmetic average of the Real-Time LMPs of the Hub Buses (except for the ERCOT Hub Average 345 kV Hub). [e19] The North 345 kV Hub Price is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3]

Day-ahead. The day-ahead price uses the aggregated Shift Factors of the Hub Buses for each hour of the DAM. [e3]

Fallbacks. If no Hub Bus has an energized component, the Protocol sets the North hub price equal to the ERCOT Bus Average 345 kV Hub price, in both the day-ahead formula and the real-time formula. [e16][e17]

Floor. The real-time hub formula is written with a floor of -$251, applied as Max[-$251, (RTRDP + ...)], where RTRDP is the Real-Time Reliability Deployment Price for Energy. [e18] The Protocol states the same administrative floor of -$251/MWh for Real-Time Settlement Point Prices after adding the Reliability Deployment Price Adders for Energy. [e20]

## Formula

The Protocol gives the real-time North hub price per 15-minute Settlement Interval as the floor (Max[-$251, ...]) applied to the Real-Time Reliability Deployment Price plus the sum over Hub Buses of the Hub Distribution Factor times the time-weighted Hub Bus price. [e18] The distribution factors are equal weights: the Hub Distribution Factor for a Hub Bus is one divided by the number of Hub Buses with an energized component, and the Hub Bus Distribution Factor for an Electrical Bus is one divided by the number of energized Electrical Buses in the Hub Bus (the Protocol writes the Hub Bus Distribution Factor as IF(B=0, 0, 1/B)). [e28] The equal weighting is what "simple average" means in the Protocol sentence. [e3]

## ERCOT context

North 345 is one of four hubs whose prices are averaged into the ERCOT Hub Average 345 kV Hub price (the others are South, Houston and West); the Panhandle 345 kV Hub is excluded. [e5] The ERCOT Bus Average 345 kV Hub is built from all the Hub Buses of those same four hubs, again excluding Panhandle. [e21] ERCOT's display shows both as Settlement Points, HB_BUSAVG and HB_HUBAVG, next to HB_NORTH. [e9]

Exchange contracts: ICE lists monthly cash-settled ERCOT North 345KV Real-Time contracts, peak and off-peak. Their reference price is the SPP published by ERCOT for the North 345 kV Hub real-time. [e22][e24] The peak contract's specified price is the average of SPPs for all hours ending 0700 to 2200 CPT (as stated in the ICE document dated November 18, 2026). [e23]

Price levels: the saved IMM tables give Load Zone prices, not Hub prices. The IMM's Table 1 shows North zone annual average real-time prices of $221.52 (2021), $77.30 (2022), $78.01 (2023), $30.42 (2024) and $35.34 (2025) per MWh, against West at $111.56, $66.62, $67.56, $35.88 and $41.59. [e26][e27] Those are load-weighted zone prices, so they should not be read as HB_NORTH levels. [e19] In 2025 the IMM named the North zone, where ERCOT used significant RUC commitments to manage congestion, as one driver of the 26% rise in day-ahead congestion. [e25]

## Timeline

- The Hub definition is fixed by amendment: hubs may only be created by amending Section 3.5.2, and a defined Hub may not be modified except as its definition explicitly allows. [e6][e13]
- Temporary bus outages: ERCOT gives notice and excludes the disconnected Electrical Bus from the Hub Bus price calculation. [e14]
- Permanent removal of a Hub Bus from the grid requires ERCOT to file an NPRR revising the Hub definition. [e14]

## Key facts

- The North 345 kV Hub is defined in Protocol Section 3.5.2.1 and lists 75 Hub Buses. [e1][e10]
- Day-ahead price uses aggregated Shift Factors of the Hub Buses; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval. [e3]
- The Real-Time Settlement Point Price floor is -$251/MWh, applied after adding the Reliability Deployment Price Adders. [e20]
- It is one of four prices in the ERCOT Hub Average 345 kV Hub price; Panhandle is excluded. [e5]
- Definition language: np-02 says Hub Bus lists and methods can never be modified, while np-03 Section 3.5.1 says a Hub may not be modified except as its definition explicitly describes, with notice and NPRR steps for bus changes. [e7][e13][e14]
- ERCOT's real-time price display lists HB_NORTH. [e9]

## Say it like this

HB_NORTH is the price of a fixed list of 75 north 345 kV buses, an equal-weighted average of Hub Bus prices in real time. It is a different kind of Settlement Point from the North Load Zone, which is weighted by Load. [e3][e10][e8][e19]

## Common confusion

- North Hub versus North Load Zone: the Hub is a Settlement Point defined by a fixed Hub Bus list and an unweighted average, and a Load Zone is a separate kind of Settlement Point weighted by Load. [e2][e3][e8][e19]
- North Hub versus the ERCOT hub averages: HB_HUBAVG is a separate Hub that averages four hub prices including North, and HB_BUSAVG is built from all the Hub Buses of those four hubs. [e5][e21][e9]
- "Can never be modified" (np-02) is the short form; the operating rules in np-03 Section 3.5.1 describe bus additions, temporary exclusions and an NPRR route for permanent bus removal. [e7][e14]
- IMM "North zone" figures are zone numbers, not HB_NORTH. [e26]

## Questions

### How is the North Hub price calculated in real time?

As the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval, across each Hub Bus in the Hub, with the -$251 floor applied after the reliability deployment price. [e3][e18][e20]

### Can ERCOT change which buses are in the North Hub?

np-02 says the definition can never be modified. [e7] np-03 qualifies this: a Hub may not be modified except as its definition explicitly describes, ERCOT excludes temporarily disconnected buses, and a permanent bus removal requires an NPRR. [e13][e14]

### Why is the hub an average of buses rather than a single node?

The Protocol defines the Hub as a Hub Bus or group of Hub Buses with a stated price methodology, and the North hub price is an equal-weighted average of its Hub Bus prices. [e2][e3]

### What if every bus in the Hub is de-energized?

The Protocol sets the North hub price equal to the ERCOT Bus Average 345 kV Hub price, in both the day-ahead and real-time formulas. [e16][e17]

### How does a trader see HB_NORTH on an exchange?

ICE North 345KV real-time contracts reference ERCOT's published real-time price for the North 345 kV Hub, cash settled monthly. [e22][e24]

## Open items

- Resolved 2026-11-21: Hub Bus list quoted (75 buses; North and West counts).
- No saved source states in so many words that HB_NORTH is the Protocols' "North 345 kV Hub (North 345)"; the link rests on the ICE contract naming and ERCOT's display name.
- Hub-level annual price levels and North-versus-West hub spreads are not in the saved sources (IMM tables cover Load Zones only).
- np-02 says a Hub can "never be modified"; np-03 Section 3.5.1 says "may not be modified except as explicitly described in the definition". The wording differs; no saved source reconciles them. The pending NPRR857 text in Section 3.5.1(5) (Southern Cross) was not used.
- The ICE contract documents are dated 2026-11-18 and describe contract terms at that date only.
