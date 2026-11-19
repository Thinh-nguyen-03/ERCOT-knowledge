# Audit packet: HB_WEST (West Hub) (hb-west)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (1) · text copy line 3132 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.5.2.4 West 345 kV Hub (West 345) (1) 
QUOTE: The West 345 kV Hub is composed of the following listed Hub Buses:
AFTER:  ------ ---------------------------------- ---------- ------------------ ERCOT Operations No. Hub Bus kV Hub 1 MULBERRY 345 WEST 2 BOMSW 345 WEST 3 OECCS 345 WEST 4 BITTCR 345 WEST 5 FSHSW 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WES…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub · text copy line 1208

BEFORE: …(QSE)-established Maximum Power Consumption (MPC). Hotline The telecommunications capability of the ERCOT Wide Area Network (WAN) reserved for simultaneous communications with WAN Participants or their designated agents. Hourly Reliability Unit Commitment (HRUC) Any RUC executed after the DRUC. Hub 
QUOTE: A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions.
AFTER:  Hubs may only be created by an amendment to Section 3.5.2. The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity. Hub Bus (1) In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auct…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (2) · text copy line 3174 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: … 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 16 SWESW 345 WEST 17 TWINBU 345 WEST ------ ---------------------------------- ---------- ------------------ (2) 
QUOTE: The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(West345) = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DAHUBSF _(West345, c) * DASP _(c)), if HBBC _(West345)≠0 DASPP _(West345) = DASPP _(ERCOT345Bus), if HBBC _(West345)=0 Where:…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, paragraph (1) (ERCOT 345) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …----------------------+ 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345) (1) The ERCOT Hub Average 345 kV Hub price for Day-Ahead is calculated for each hour using the aggregated Shift Factors of four Hubs: the North 345 kV Hub, the South 345 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. 
QUOTE: The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price.
AFTER:  The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price. +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter on Congestion, Figure 45 discussion · text copy line 6021

BEFORE: …" !'(""" !C"" -./00N2/34 5/S07/3 8/.79 W/S79 ;407 !%"" !$"" !#"" !" #"'% #"') #"'C #"'* #"#" #"#' #"## #"#H #"#$ #"#, Figure 45 shows that a growing share of congestion costs materializes as intrazonal congestion costs. In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. 
QUOTE: The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin.
AFTER:  Congestion costs within the West increased by 27% between 2024 and 2025. Next, we discuss a methodology to define load-zone boundaries based on geographic coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new …

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive summary, congestion bullet · text copy line 874

BEFORE: …nnual congestion costs. The main driver of this increase were: • The increase in natural gas prices, the fuel for the resources most frequently used to manage congestion in ERCOT; • Higher congestion in the North zone, where ERCOT used a significant amount of RUC commitments to manage congestion; • 
QUOTE: Higher congestion in the West Zone, where transmission projects have not kept pace with the large increase in renewables in the Panhandle and growing demand in the Permian Basin. This led the West Zone to exhibit the highest annual average zonal energy prices for the second year in a row.
AFTER:  2025 State of the Market Report | v / / Executive Summary Despite the increase in congestion costs, the prevalence of transmission constraints being violated because they were too expensive to resolve dropped to its lowest level since the ERCOT nodal market was implemented. This drop in the frequen…

### e7 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub · text copy line 1208

BEFORE: … executed after the DRUC. Hub A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions. Hubs may only be created by an amendment to Section 3.5.2. 
QUOTE: The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity.
AFTER:  Hub Bus (1) In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, an energized power flow bus or group of energized power flow buses are defined as a single element in the Hub definition. The Locational Marginal Price (LMP) of the Hub Bus is the simple average of the LMPs assign…

## Statements to check

- **Definition #1** (cites e1, e2): The West 345 kV Hub (West 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology in its definition. [e2] The market shorthand "HB_WEST" is not used in the saved protocol text.
- **How it works #1** (cites e3, e7, e4): The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] Its buses and method can never be modified. [e7] West 345 is one of four hub prices averaged into the ERCOT Hub Average 345 kV Hub. [e4]
- **ERCOT context #1** (cites e5, e6) FLAG number-not-in-quote: 2025: In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs, export constrained in the panhandle because of renewables and import constrained in the Permian Basin. [e5] The IMM also reports that the West Zone had the highest annual average zonal energy prices for the second year in a row (2025). [e6] Those statements are about the West Load Zone, not the West Hub, so hub-specific price levels should be checked separately. [e6]
- **Key facts #1** (cites e1) FLAG number-not-in-quote: 3.5, 2.4: - The West 345 kV Hub is defined in Protocol Section 3.5.2.4. [e1]
- **Key facts #2** (cites e3): - Day-ahead price uses aggregated Shift Factors; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval. [e3]
- **Key facts #3** (cites e4): - It is one of four prices in the ERCOT Hub Average 345 kV Hub price. [e4]
- **Key facts #4** (cites e6) FLAG number-not-in-quote: 2025: - 2025 IMM: West Zone had the highest annual average zonal energy price for the second year in a row. [e6]
- **Common confusion #1** (cites e3, e6): - West Hub versus West Load Zone: the Hub price follows the Hub definition, and the IMM's zone statements do not automatically apply to the Hub. [e3][e6]
- **Common confusion #2** (cites e5): - Hub versus generators in the Permian or Panhandle: the IMM reports large intrazonal congestion costs in the West Zone, so check node-level prices rather than assuming the hub or zone price applies to a given generator. [e5]
- **Questions #2** (cites e6): The IMM says transmission projects have not kept pace with renewables growth in the Panhandle and rising demand in the Permian Basin, leading to higher congestion in the West. [e6]
- **Questions #4** (cites e3): As the simple average of time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3]
- **Link to trading-hub** (cites e1): is-a Trading Hubs: The West 345 kV Hub is one of the defined Hubs. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is a kind of Settlement Point. [e2]
- **Link to hb-north** (cites e3): contrasts-with HB_NORTH (North Hub): The North 345 kV Hub is defined the same way over a different bus list. [e3]
- **Link to congestion** (cites e5) FLAG number-not-in-quote: 2025: related Transmission Congestion: In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs. [e5]
- **Link to load-zone** (cites e6): contrasts-with Load Zone: The IMM's West Zone statements are about the Load Zone, not this Hub. [e6]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) HB_WEST is the price of a fixed set of west 345 kV buses, a simple average of Hub Bus prices in real time. The IMM ties higher West Zone prices to congestion, so check whether a west hub price is the right reference for a particular west generator.

