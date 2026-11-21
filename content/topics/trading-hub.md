---
id: trading-hub
name: Trading Hubs
aliases: [Hub, Hubs, trading hub, Hub Bus, ERCOT 345, North 345, Hub Average]
kind: concept
domain: pricing
level: 1
lenses: [trading, analyst, portfolio, structuring]
depth: deep
as_of: 2026-11-21
links:
  - to: settlement-point
    type: is-a
    note: A Hub is one of the three kinds of Settlement Point. [e2]
  - to: spp
    type: determines
    note: Each Hub has its own Settlement Point Price calculated by the method in its definition. [e5]
  - to: lmp
    type: related
    note: Real-Time Hub LMPs are averages of the Real-Time LMPs of the Hub Buses. [e6]
  - to: hb-north
    type: related
    note: North 345 kV Hub is one of the defined Hubs. [e4]
  - to: hb-west
    type: related
    note: West 345 kV Hub is one of the defined Hubs. [e4]
  - to: load-zone
    type: contrasts-with
    note: A Load Zone price is Load-weighted from State Estimator Load; a Hub has a fixed list of Hub Buses and a fixed price method. [e14][e1]
  - to: basis-risk
    type: related
    note: A position settled at a different Settlement Point than a hub carries the price difference between them.
  - to: block-products
    type: used-in
    note: Block products are a related topic for hub-referenced trading.
  - to: dam
    type: used-in
    note: In the Day-Ahead a Hub price is built from the aggregated Shift Factors of its Hub Buses, the System Lambda and the constraint Shadow Prices. [e5]
  - to: crr-auction
    type: used-in
    note: The Hub Bus definition covers the Day-Ahead Market and the CRR Auction. [e20]
  - to: rtm
    type: used-in
    note: Real-Time Hub prices are averages of Hub Bus prices over the 15-minute Settlement Interval. [e5]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Hub"
    quote: "A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions. Hubs may only be created by an amendment to Section 3.5.2. The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e3
    source: np-03
    locator: "Section 3.5.1, paragraph (1)"
    quote: "Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website. A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub."
  - id: e4
    source: np-03
    locator: "Section 3.5.2.7, paragraph (1)"
    quote: "The ERCOT Bus Average 345 kV Hub is composed of the Hub Buses listed in Section 3.5.2.1, North 345 kV Hub (North 345); Section 3.5.2.2, South 345 kV Hub (South 345); Section 3.5.2.3, Houston 345 kV Hub (Houston 345); and Section 3.5.2.4, West 345 kV Hub (West 345)."
  - id: e5
    source: np-03
    locator: "Section 3.5.2.1, paragraph (2)"
    quote: "The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e6
    source: np-06
    locator: "Section 6.6.1.5, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Hub Bus, item (2)"
    quote: "In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus."
  - id: e8
    source: np-03
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT 345)"
    quote: "The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price."
  - id: e9
    source: np-03
    locator: "Section 3.5.1, paragraphs (3) and (4)"
    quote: "In the event of a permanent change that removes the Hub Bus from the ERCOT Transmission Grid, ERCOT shall file a Nodal Protocol Revision Request (NPRR) to revise the appropriate Hub definition."
  - id: e10
    source: np-03
    locator: "Section 3.5.2.6, pending paragraph (1) replacement box [NPRR941]"
    quote: "The Panhandle 345 kV Hub and the Lower Rio Grande Valley 138/345 kV Hub are not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price."
  - id: e11
    source: np-03
    locator: "Section 3.5.2.5, paragraph (2)"
    quote: "The Panhandle 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e12
    source: np-03
    locator: "Section 3.5.2.6 (LRGV 138/345), paragraph (2)"
    quote: "The Lower Rio Grande Valley 138/345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e14
    source: np-03
    locator: "Section 3.4, paragraph (2)"
    quote: "ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The Load-weighting must be determined using the Load, if any, from the State Estimator at each Electrical Bus."
  - id: e13
    source: np-03
    locator: "Section 3.5.3.2, paragraph (1)"
    quote: "ERCOT shall calculate Hub prices for each Settlement Interval as identified in the description of each Hub."
  - id: e15
    source: ercot-hubs-load-zones-page
    locator: 'ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote)'
    quote: "HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08"
  - id: e16
    source: np-03
    locator: "Section 3.5.1, paragraph (2)"
    quote: "When any Electrical Bus within a Hub Bus is added to the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Network Model, ERCOT shall provide notice to all Market Participants as soon as practicable and include that Electrical Bus in the Hub Bus price calculation."
  - id: e17
    source: np-03
    locator: "Section 3.5.1, paragraph (3)"
    quote: "When any Electrical Bus within a Hub Bus is disconnected from the Network Operations Model or the CRR Network Model through operations changes in transmission topology temporarily, ERCOT shall provide notice to all Market Participants as soon as practicable and exclude that Electrical Bus from the Hub Bus price calculation."
  - id: e18
    source: np-03
    locator: "Section 3.5.1, paragraph (5)"
    quote: "If a Transmission Service Provider (TSP) or ERCOT plans a nomenclature change in the Network Operations Model or the CRR Network Model, ERCOT shall file a NPRR to include the nomenclature change in the Hub Bus definitions before implementing the name change to either the Network Operations Model or the CRR Network Model."
  - id: e19
    source: np-03
    locator: "Section 3.5.3.1, paragraph (1)"
    quote: "ERCOT shall post a list of all the Hub Buses included in each Hub on the ERCOT website. The list must include the name and kV rating for each Electrical Bus included in each Hub Bus."
  - id: e20
    source: np-02
    locator: "Section 2.1, definition of Hub Bus, item (1)"
    quote: "In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, an energized power flow bus or group of energized power flow buses are defined as a single element in the Hub definition. The Locational Marginal Price (LMP) of the Hub Bus is the simple average of the LMPs assigned to each energized power flow bus in the Hub Bus. If all power flow buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus."
  - id: e21
    source: np-03
    locator: "Section 3.5.2.1, paragraph (3), Day-Ahead formula variables"
    quote: "HUBDF _(hb, North345, c) = IF(HB _(North345, c)=0, 0, 1 / HB _(North345, c))"
  - id: e22
    source: np-03
    locator: "Section 3.5.2.1, paragraph (3), Day-Ahead formula variables"
    quote: "HBDF _(pb, hb, North345, c) = IF(PB _(hb, North345, c)=0, 0, 1 / PB _(hb, North345, c))"
  - id: e23
    source: np-03
    locator: "Section 3.5.2.1, paragraph (3), Day-Ahead formula"
    quote: "DASPP _(North345) = DASPP _(ERCOT345Bus), if HBBC _(North345)=0"
  - id: e24
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), Real-Time formula"
    quote: "RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0"
  - id: e25
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), Real-Time formula"
    quote: "HUBDF _(hb, North345) = IF(HB _(North345)=0, 0, 1 / HB _(North345))"
  - id: e26
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), Real-Time formula"
    quote: "HBDF _(b, hb, North345) = IF(B _(hb, North345)=0, 0, 1 / B _(hb, North345))"
  - id: e27
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), Real-Time formula"
    quote: "RTSPP _(North345) = Max [-$251, (RTRDP +"
  - id: e28
    source: np-03
    locator: "Section 3.5.2.1, paragraph (4), variable table"
    quote: "The Real-Time price for the 15-minute Settlement Interval, reflecting the impact of reliability deployments on energy prices that are calculated from the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e29
    source: np-03
    locator: "Section 3.5.2.6 (ERCOT 345), paragraph (2) Day-Ahead formula"
    quote: "DAHUBSF _(ERCOT345, c) = (DAHUBSF _(North345, c) + DAHUBSF _(South345, c) + DAHUBSF _(Houston345, c) + DAHUBSF _(West345, c)) / 4"
  - id: e30
    source: np-03
    locator: "Section 3.5.2.6 (ERCOT 345), paragraph (3) Real-Time formula"
    quote: "RTSPP _(ERCOT345) = (RTSPP _(North345) + RTSPP _(South345) + RTSPP _(Houston345) + RTSPP _(West345)) / 4"
  - id: e31
    source: np-03
    locator: "Section 3.5.2.6 (ERCOT 345), paragraph (2)"
    quote: "DASPP _(ERCOT345) = DASPP _(ERCOT345Bus), if HBBC _(ERCOT345Bus)=0"
  - id: e32
    source: np-03
    locator: "Section 3.5.2.7, paragraph (2)"
    quote: "The ERCOT Bus Average 345 kV Hub uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: e33
    source: ercot-hubs-load-zones-page
    locator: "ERCOT display \"Real-Time LMPs for Load Zones and Trading Hubs\", note under the title"
    quote: "LMP values do not include the Real-Time price adders."

---

## Definition

A Hub is a designated Settlement Point made up of a Hub Bus or group of Hub Buses, together with the settlement price calculation methodology prescribed in that Hub's definition in Section 3.5.2. [e1] Hubs can only be created by amending Section 3.5.2, and the list of Hub Buses and the price methodology that define a Hub can never be modified; a Hub, once defined, exists in perpetuity. [e1]

## How it works

A Hub is made up of one or more Electrical Buses, and ERCOT posts the list of those buses on its website. [e3] ERCOT must post every Hub Bus in each Hub, including the name and kV rating of each Electrical Bus in each Hub Bus. [e19] In real time, a Hub Bus is an energized Electrical Bus or group of them treated as a single element, and its LMP is the simple average of the LMPs of the energized buses it contains. [e7] In the Day-Ahead Market and the CRR Auction, the Hub Bus is defined over energized power flow buses, with the same simple average; if all power flow buses in a Hub Bus are de-energized, the Hub LMP leaves that Hub Bus out. [e20] The Hub LMP is, for every defined Hub except the ERCOT Hub Average 345 kV Hub, the arithmetic average of the Real-Time LMPs of the Hub Buses in the Hub. [e6]

Settlement prices follow the same pattern. For example, the North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time. [e5] The Panhandle 345 kV Hub Price is written the same way. [e11] In Real-Time the Hub price is thus a simple average of Hub Bus prices rather than a Load-weighted one. [e5][e7]

The protocol's Section 3.5.2 as currently in effect defines North 345, South 345, Houston 345 and West 345 hubs, plus Panhandle 345, the ERCOT Hub Average 345 kV Hub (ERCOT 345) and the ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus). [e4][e8][e11] A Lower Rio Grande Valley 138/345 kV Hub appears only in text marked as pending (NPRR941 and NPRR1057, to be inserted upon system implementation), so it is not yet a defined Hub in the current Protocols. [e12] The ERCOT 345 average is the simple average of the North, South, Houston and West hub prices in Real-Time, and the Panhandle hub is not part of it. [e8] The ERCOT Bus Average hub is composed of the Hub Buses of the North, South, Houston and West hubs. [e4]

Changes to what is inside a Hub Bus are handled by notice, not by changing the definition. When an Electrical Bus is added to the network models, ERCOT notifies Market Participants as soon as practicable and includes that bus in the Hub Bus price. [e16] When a bus is temporarily disconnected by a topology change, ERCOT notifies Market Participants and excludes it from the Hub Bus price. [e17] If a permanent change removes the Hub Bus from the grid, ERCOT files an NPRR to revise the Hub definition. [e9] If a TSP or ERCOT plans a nomenclature change in the network models, ERCOT files an NPRR to put the change into the Hub Bus definitions before the name change is implemented. [e18]

## Formula

Day-Ahead, North 345 shown (the other hubs use the same structure with their own Hub Buses). The Hub price is the System Lambda minus the sum, over binding constraints, of the Hub's aggregated Shift Factor times that constraint's Shadow Price. [e5][e21] The aggregated Shift Factor averages the shift factors of the Hub Buses, and each Hub Bus's factor averages its energized power flow buses: the Hub Distribution Factor is 1 divided by the number of Hub Buses (zero if there are none) and the Hub Bus Distribution Factor is 1 divided by the number of energized power flow buses in the Hub Bus. [e21][e22] If no Hub Bus in the Hub has an energized component in the base case, the Day-Ahead price falls back to the ERCOT Bus Average 345 price. [e23]

Real-Time, North 345 shown. The Hub price for each 15-minute Settlement Interval is the Real-Time Reliability Deployment Price plus the time-weighted (by SCED interval duration) average of the Hub Bus prices, with the result floored by taking the maximum of -$251 and that value. [e27][e5] Each Hub Bus price is itself the average of its energized Electrical Bus LMPs, using a distribution factor of 1 divided by the count of energized buses; the Hub Distribution Factor is likewise 1 divided by the number of Hub Buses. [e25][e26] If no Hub Bus is energized, the price falls back to the ERCOT Bus Average 345 price. [e24] The Reliability Deployment Price in the formula reflects the impact of reliability deployments on energy prices, calculated from the Real-Time Reliability Deployment Price Adder for Energy. [e28]

ERCOT 345 (the Hub Average): the Day-Ahead aggregated Shift Factor is the average of the North, South, Houston and West Hub Shift Factors. [e29] The Real-Time price is the sum of the four hub prices divided by four. [e30] If the ERCOT Bus Average hub has no energized Hub Buses in the base case, the Day-Ahead ERCOT 345 price equals the ERCOT 345 Bus price. [e31] The ERCOT Bus Average 345 kV Hub itself uses the aggregated Shift Factors of its Hub Buses in the Day-Ahead and the simple average of the time-weighted Hub Bus prices in Real-Time. [e32]

## ERCOT context

The definition of Hub says a Hub's bus list and price method can never be modified and that a Hub, once defined, exists in perpetuity. [e1] Section 3.5.1 adds that a Hub may not be modified except as explicitly described in that Hub's own definition. [e3] A pending protocol change (NPRR941, not yet in effect) would also exclude the Lower Rio Grande Valley 138/345 kV Hub from the ERCOT Hub Average 345 kV Hub price. [e10]

Practice: ERCOT's real-time display of Load Zone and Trading Hub LMPs states that LMP values do not include the Real-Time price adders, and it lists a separate RTRDPA + LMP column. [e33][e15] When comparing a displayed hub LMP to a settled Real-Time hub price, note that the settled formula adds the Reliability Deployment Price. [e27][e28]

## Key facts

- Hubs may only be created by an amendment to Protocol Section 3.5.2, and once defined exist in perpetuity. [e1]
- Real-Time Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses, except for the ERCOT Hub Average 345 kV Hub. [e6]
- Real-Time Hub Bus LMP is the simple average of the LMPs of the energized Electrical Buses in it. [e7]
- The ERCOT 345 hub price in Real-Time averages the North, South, Houston and West hub prices; Panhandle is excluded. [e8]
- ERCOT calculates Hub prices for each Settlement Interval as identified in the description of each Hub. [e13]
- The North 345 Real-Time Settlement Point Price formula takes the maximum of -$251 and the computed value. [e27]
- ERCOT's real-time price display lists seven hub Settlement Points by the names HB_BUSAVG, HB_HOUSTON, HB_HUBAVG, HB_NORTH, HB_PAN, HB_SOUTH and HB_WEST. [e15]

## Say it like this

A hub is a Settlement Point made of a defined group of buses, with its price method written into the Protocols. In Real-Time a hub price is a simple average of Hub Bus prices, not weighted by load, whereas a Load Zone price is Load-weighted.

## Common confusion

- Hub versus Load Zone: a Hub averages a fixed list of buses with the method written in its definition, while a Load Zone price is load-weighted from State Estimator Load. [e1][e14]
- Hub versus Resource Node: a Resource Node is the point where a generator's price is calculated; a Hub is a Settlement Point made of buses. [e2]
- "ERCOT 345" and "ERCOT 345 Bus" are two different hubs: one averages four hub prices, the other averages the buses of the same four hubs. [e4][e8]
- Whether a hub is one of the four main ones or Panhandle matters for the ERCOT averages: Panhandle is excluded under the current text. [e8]
- The displayed LMP is not the settled price: the display excludes the Real-Time price adders. [e33]

## Questions

### Why is a Hub useful as a reference price?

The Protocol definition says the Hub Buses and price method can never be modified and that a Hub exists in perpetuity once defined. [e1]

### How is the real-time Hub LMP calculated?

For each defined Hub other than the ERCOT Hub Average 345 kV Hub, it is the arithmetic average of the Real-Time LMPs of its Hub Buses. [e6] Each Hub Bus LMP is the simple average of the energized Electrical Buses within it. [e7]

### Which hubs make up the ERCOT 345 average?

North 345, South 345, Houston 345 and West 345 in the current text. The Panhandle 345 kV Hub is excluded. [e8] Pending text (NPRR941) would also exclude the Lower Rio Grande Valley 138/345 kV Hub. [e10]

### Can ERCOT change a hub's buses?

Not through any ordinary process: the Hub definition says the list of Hub Buses can never be modified [e1], Section 3.5.1 allows modification only as explicitly described in a Hub's own definition [e3], and a permanent removal of a Hub Bus requires an NPRR to revise the Hub definition. [e9]

### What if every Hub Bus in a hub is de-energized?

The formulas fall back to another hub: North 345's Day-Ahead and Real-Time prices become the ERCOT Bus Average 345 price when no Hub Bus has an energized component. [e23][e24]

### Why does the Day-Ahead hub price use shift factors while the Real-Time price averages bus prices?

The Protocol text writes the two methods differently: the Day-Ahead price is built from System Lambda and constraint Shadow Prices using aggregated Shift Factors, and the Real-Time price is a time-weighted average of Hub Bus prices. [e5] The Protocol does not state a reason for the difference.

### What happens to a hub price when a bus is temporarily taken out of service?

ERCOT notifies Market Participants and excludes the disconnected Electrical Bus from the Hub Bus price calculation. [e17]

## Open items

- The Hub definition says a Hub's Hub Buses and price method "can never be modified" [e1], while Section 3.5.1 has ERCOT file an NPRR to "revise the appropriate Hub definition" if a Hub Bus is permanently removed [e9]. The saved text does not reconcile the two.
- The saved sources do not map each HB_ name to its Protocol hub definition in so many words (for example HB_NORTH to "North 345 kV Hub").
- Average hub prices by year (for example North versus West hub): the saved IMM reports present hub-to-load-zone spreads only as figures, and OCR of those charts is not legible enough to quote, so none are cited.
- Number of Hub Buses in each hub and the specific substations: lists exist in tables in np-03 but were not quoted.
- The Protocol text does not state why Day-Ahead hub prices use shift factors rather than direct bus averages; the reason is not in the saved sources.
