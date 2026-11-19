# Audit packet: HB_NORTH (North Hub) (hb-north)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (1) · text copy line 2384 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.5.2 Hub Definitions 3.5.2.1 North 345 kV Hub (North 345) (1) 
QUOTE: The North 345 kV Hub is composed of the following Hub Buses:
AFTER:  ------------------------------------------------------------------------ ERCOT Operations ---------- ----------------------------- ----------- ------------------- No. Hub Bus kV Hub 1 ANASW 345 NORTH 2 CN345 345 NORTH 3 WLSH 345 NORTH 4 FMRVL 345 NORTH 5 LPCCS 345 NORTH 6 MNSES 345 NORTH 7 PRSSW 34…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub · text copy line 1208

BEFORE: …(QSE)-established Maximum Power Consumption (MPC). Hotline The telecommunications capability of the ERCOT Wide Area Network (WAN) reserved for simultaneous communications with WAN Participants or their designated agents. Hourly Reliability Unit Commitment (HRUC) Any RUC executed after the DRUC. Hub 
QUOTE: A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions.
AFTER:  Hubs may only be created by an amendment to Section 3.5.2. The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity. Hub Bus (1) In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auct…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (2) · text copy line 2542 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 74 WHTNY 345 NORTH 75 WCPP 345 NORTH ------------------------------------------------------------------------ (2) 
QUOTE: The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 DASPP _(North345) = DASPP _(ERCOT345Bus), if HB…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (2) · text copy line 3174 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: … 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 16 SWESW 345 WEST 17 TWINBU 345 WEST ------ ---------------------------------- ---------- ------------------ (2) 
QUOTE: The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(West345) = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DAHUBSF _(West345, c) * DASP _(c)), if HBBC _(West345)≠0 DASPP _(West345) = DASPP _(ERCOT345Bus), if HBBC _(West345)=0 Where:…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, paragraph (1) (ERCOT 345) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …----------------------+ 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345) (1) The ERCOT Hub Average 345 kV Hub price for Day-Ahead is calculated for each hour using the aggregated Shift Factors of four Hubs: the North 345 kV Hub, the South 345 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. 
QUOTE: The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price.
AFTER:  The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price. +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraph (1) · text copy line 2363 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: …on Zone with the closest matching zonal Settlement Point Price to the new Electrical Bus's LMP. (f) For each new Electrical Bus not covered in paragraph (a), the new Electrical Bus is assigned to the same Cost Allocation Zone as its designated Load Zone; 3.5 Hubs 3.5.1 Process for Defining Hubs (1) 
QUOTE: Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website.
AFTER:  A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub. (2) When any Electrical Bus within a Hub Bus is added to the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Net…

### e7 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub · text copy line 1208

BEFORE: … executed after the DRUC. Hub A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions. Hubs may only be created by an amendment to Section 3.5.2. 
QUOTE: The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity.
AFTER:  Hub Bus (1) In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, an energized power flow bus or group of energized power flow buses are defined as a single element in the Hub definition. The Locational Marginal Price (LMP) of the Hub Bus is the simple average of the LMPs assign…

## Statements to check

- **Definition #1** (cites e1, e2): The North 345 kV Hub (North 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology set out in its definition. [e2] The market shorthand "HB_NORTH" is not used in the saved protocol text.
- **How it works #1** (cites e3, e7): The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Day-Ahead Market, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] In real time it is therefore a simple (unweighted) average across its Hub Buses. [e3] The list of Hub Buses and the price method can never be modified once defined. [e7]
- **ERCOT context #1** (cites e5, e6): North 345 is one of four hubs whose prices are averaged into the ERCOT Hub Average 345 kV Hub price (the others are South, Houston and West). [e5] ERCOT posts the list of Electrical Buses in each Hub on its website. [e6]
- **Key facts #1** (cites e1) FLAG number-not-in-quote: 3.5, 2.1: - The North 345 kV Hub is defined in Protocol Section 3.5.2.1. [e1]
- **Key facts #2** (cites e3): - Day-ahead price uses aggregated Shift Factors of the Hub Buses; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval. [e3]
- **Key facts #3** (cites e7): - The Hub definition can never be modified and exists in perpetuity. [e7]
- **Key facts #4** (cites e5): - It is one of four prices in the ERCOT Hub Average 345 kV Hub price. [e5]
- **Common confusion #1** (cites e2, e3): - North Hub versus North Load Zone: the Hub is a Settlement Point defined by a fixed Hub Bus list and its own price method, and a Load Zone is a separate kind of Settlement Point (see the load-zone topic). [e2][e3]
- **Common confusion #2** (cites e5): - North Hub versus the ERCOT 345 average: the ERCOT average is a separate Hub that averages four hub prices, including North. [e5]
- **Questions #2** (cites e3): As the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval, across each Hub Bus in the Hub. [e3]
- **Questions #4** (cites e7): The definition can never be modified. [e7]
- **Link to trading-hub** (cites e1): is-a Trading Hubs: The North 345 kV Hub is one of the defined Hubs. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is a kind of Settlement Point. [e2]
- **Link to hb-west** (cites e3, e4): contrasts-with HB_WEST (West Hub): The West 345 kV Hub is defined the same way but over a different set of buses. [e3][e4]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): The hub price is the Settlement Point Price at the Hub. [e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): The Hub price averages Hub Bus prices. [e3]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) HB_NORTH is the price of a fixed list of 345 kV buses in the north, a simple average of Hub Bus prices in real time. It is a different Settlement Point from the North Load Zone, so a load there does not settle at the hub price.

