# Audit packet: Trading Hubs (trading-hub)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub · text copy line 1208

BEFORE: …(QSE)-established Maximum Power Consumption (MPC). Hotline The telecommunications capability of the ERCOT Wide Area Network (WAN) reserved for simultaneous communications with WAN Participants or their designated agents. Hourly Reliability Unit Commitment (HRUC) Any RUC executed after the DRUC. Hub 
QUOTE: A designated Settlement Point consisting of a Hub Bus or group of Hub Buses and the associated Settlement price calculation methodology prescribed in the definition of the Hub in Section 3.5.2, Hub Definitions. Hubs may only be created by an amendment to Section 3.5.2. The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity.
AFTER:  Hub Bus (1) In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, an energized power flow bus or group of energized power flow buses are defined as a single element in the Hub definition. The Locational Marginal Price (LMP) of the Hub Bus is the simple average of the LMPs assign…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraph (1) · text copy line 2363 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: …on Zone with the closest matching zonal Settlement Point Price to the new Electrical Bus's LMP. (f) For each new Electrical Bus not covered in paragraph (a), the new Electrical Bus is assigned to the same Cost Allocation Zone as its designated Load Zone; 3.5 Hubs 3.5.1 Process for Defining Hubs (1) 
QUOTE: Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website. A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub.
AFTER:  (2) When any Electrical Bus within a Hub Bus is added to the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Network Model, ERCOT shall provide notice to all Market Participants as soon as practicable and include th…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.7, paragraph (1) · text copy line 3805 · heading above: 3.5.2.7 ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus)

BEFORE: …rice at the West 345 Hub for the 15-minute Settlement Interval. ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 3.5.2.7 ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus) (1) 
QUOTE: The ERCOT Bus Average 345 kV Hub is composed of the Hub Buses listed in Section 3.5.2.1, North 345 kV Hub (North 345); Section 3.5.2.2, South 345 kV Hub (South 345); Section 3.5.2.3, Houston 345 kV Hub (Houston 345); and Section 3.5.2.4, West 345 kV Hub (West 345).
AFTER:  The Panhandle 345 kV Hub is not included in the ERCOT Bus Average 345 kV Hub price. +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (2) · text copy line 2542 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 74 WHTNY 345 NORTH 75 WCPP 345 NORTH ------------------------------------------------------------------------ (2) 
QUOTE: The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 DASPP _(North345) = DASPP _(ERCOT345Bus), if HB…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e7 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub Bus, item (2) · text copy line 1214

BEFORE: …he de-energized Hub Bus. If power flow buses within a Hub Bus are de-energized under contingency, the disconnected MWs are redistributed among remaining energized power flow buses. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2, Hub Definitions; or (2) 
QUOTE: In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus.
AFTER:  If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2. Hub LMP (see Locational Marginal Price) I [Back to Top] Independent Market Informat…

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, paragraph (1) (ERCOT 345) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …----------------------+ 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345) (1) The ERCOT Hub Average 345 kV Hub price for Day-Ahead is calculated for each hour using the aggregated Shift Factors of four Hubs: the North 345 kV Hub, the South 345 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. 
QUOTE: The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e9 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraphs (3) and (4) · text copy line 2369 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: … a Hub Bus is disconnected from the Network Operations Model or the CRR Network Model through operations changes in transmission topology temporarily, ERCOT shall provide notice to all Market Participants as soon as practicable and exclude that Electrical Bus from the Hub Bus price calculation. (4) 
QUOTE: In the event of a permanent change that removes the Hub Bus from the ERCOT Transmission Grid, ERCOT shall file a Nodal Protocol Revision Request (NPRR) to revise the appropriate Hub definition.
AFTER:  (5) If a Transmission Service Provider (TSP) or ERCOT plans a nomenclature change in the Network Operations Model or the CRR Network Model, ERCOT shall file a NPRR to include the nomenclature change in the Hub Bus definitions before implementing the name change to either the Network Operations Mode…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, pending paragraph (1) replacement box [NPRR941] · text copy line 3736 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)
FLAG pending-box: | [NPRR941: Replace paragraph (1) above upon system implementation:] |
BEFORE: …45 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. 
QUOTE: The Panhandle 345 kV Hub and the Lower Rio Grande Valley 138/345 kV Hub are not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price.
AFTER:  | +========================================================================================================================================================================================================================================================================================================…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.5, paragraph (2) · text copy line 3362 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)

BEFORE: …ERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN 4 CTT_CROS 345 PAN 5 CTT_GRAY 345 PAN 6 OGALLALA 345 PAN 7 RAILHEAD 345 PAN 8 TESLA 345 PAN 9 TULECNYN 345 PAN 10 W_CW_345 345 PAN 11 WHIT_RVR 345 PAN 12 WINDMILL 345 PAN ----------------------------------------------------------------------- (2) 
QUOTE: The Panhandle 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(Pan345) = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DAHUBSF _(Pan345, c) * DASP _(c)), if HBBC _(Pan345)≠0 DASPP _(Pan345) = DASPP _(ERCOT345Bus), if HBBC _(Pan345)=0 Where: DAHU…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6 (LRGV 138/345), paragraph (2) · text copy line 3620 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)
FLAG pending-box: | [NPRR941 and NPRR1057: Insert applicable portions of Section 3.5.2.6 below upon system implementation; and renumber accordingly:] |
BEFORE: …40 STEWART 138 LRGV | | | | 41 WESLACO 138 LRGV | | ----------------------------------------------------------------------- | | | | $\begin{array}{r} | | \Sigma \\ | | c | | \end{array}$$\begin{array}{r} | | \Sigma \\ | | hb | | \end{array}$$\begin{array}{r} | | \Sigma \\ | | pb | | \end{array}$(2) 
QUOTE: The Lower Rio Grande Valley 138/345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  | | | | (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: | | | | DASPP _(LRGV 138/345) = DASL - $\begin{array}{r} | | \Sigma \\ | | c | | \end{array}$$\begin{array}{r} | | \Sigma \\ | | c | | \end{array}$(DAHUBSF _(LRGV 138/345, c) * DASP _(c)…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, paragraph (2) · text copy line 2301 · heading above: 3.4 Load Zones

BEFORE: …evenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors. (2) 
QUOTE: ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The Load-weighting must be determined using the Load, if any, from the State Estimator at each Electrical Bus.
AFTER:  3.4.1 Load Zone Types (1) The Load Zone types are: (a) The Competitive Load Zones; (b) The Non-Opt-In Entity (NOIE) Load Zones created pursuant to Section 3.4.3, NOIE Load Zones; and (c) The Direct Current Tie (DC Tie) Load Zones as defined in Section 3.4.4, DC Tie Load Zones. (2) The Competitive L…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.3.2, paragraph (1) · text copy line 4004 · heading above: 3.5.3.2 Calculation of Hub Prices

BEFORE: …ng Hubs 3.5.3.1 Posting of Hub Buses and Electrical Buses included in Hubs (1) ERCOT shall post a list of all the Hub Buses included in each Hub on the ERCOT website. The list must include the name and kV rating for each Electrical Bus included in each Hub Bus. 3.5.3.2 Calculation of Hub Prices (1) 
QUOTE: ERCOT shall calculate Hub prices for each Settlement Interval as identified in the description of each Hub.
AFTER:  3.6 Load Participation 3.6.1 Load Resource Participation (1) A Load Resource may participate by providing: (a) Ancillary Service: (i) Regulation Up Service (Reg-Up) Service as a Controllable Load Resource (CLR) capable of providing Primary Frequency Response; (ii) Regulation Down Service (Reg-Down)…

## Statements to check

- **Definition #1** (cites e1): A Hub is a designated Settlement Point made up of a Hub Bus or group of Hub Buses, together with the settlement price calculation methodology prescribed in that Hub's definition in Section 3.5.2. [e1] Hubs can only be created by amending Section 3.5.2, and the list of Hub Buses and the price methodology that define a Hub can never be modified; a Hub, once defined, exists in perpetuity. [e1]
- **How it works #1** (cites e3, e7, e6): A Hub is made up of one or more Electrical Buses, and ERCOT posts the list of those buses on its website. [e3] In real time, a Hub Bus is an energized Electrical Bus or group of them treated as a single element, and its LMP is the simple average of the LMPs of the energized buses it contains. [e7] The Hub LMP is, for every defined Hub except the ERCOT Hub Average 345 kV Hub, the arithmetic average of the Real-Time LMPs of the Hub Buses in the Hub. [e6]
- **How it works #2** (cites e5, e11, e7): Settlement prices follow the same pattern. For example, the North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time. [e5] The Panhandle 345 kV Hub Price is written the same way. [e11] In Real-Time the Hub price is thus a simple average of Hub Bus prices rather than a Load-weighted one. [e5][e7]
- **How it works #3** (cites e4, e8, e11, e12): The protocol's Section 3.5.2 as currently in effect defines North 345, South 345, Houston 345 and West 345 hubs, plus Panhandle 345, the ERCOT Hub Average 345 kV Hub (ERCOT 345) and the ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus). [e4][e8][e11] A Lower Rio Grande Valley 138/345 kV Hub appears only in text marked as pending (NPRR941 and NPRR1057, to be inserted upon system implementation), so it is not yet a defined Hub in the current Protocols. [e12] The ERCOT 345 average is the simple average of the North, South, Houston and West hub prices in Real-Time, and the Panhandle hub is not part of it. [e8] The ERCOT Bus Average hub is composed of the Hub Buses of the North, South, Houston and West hubs. [e4]
- **How it works #4** (cites e9): Hub definitions change only through the protocol revision process: if a permanent change removes a Hub Bus from the grid, ERCOT files an NPRR to revise the Hub definition. [e9]
- **ERCOT context #1** (cites e1, e3, e10): The definition of Hub says a Hub's bus list and price method can never be modified and that a Hub, once defined, exists in perpetuity. [e1] Section 3.5.1 adds that a Hub may not be modified except as explicitly described in that Hub's own definition. [e3] A pending protocol change (NPRR941, not yet in effect) would also exclude the Lower Rio Grande Valley 138/345 kV Hub from the ERCOT Hub Average 345 kV Hub price. [e10]
- **Key facts #1** (cites e1): - Hubs may only be created by an amendment to Protocol Section 3.5.2, and once defined exist in perpetuity. [e1]
- **Key facts #2** (cites e6): - Real-Time Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses, except for the ERCOT Hub Average 345 kV Hub. [e6]
- **Key facts #3** (cites e7): - Real-Time Hub Bus LMP is the simple average of the LMPs of the energized Electrical Buses in it. [e7]
- **Key facts #4** (cites e8): - The ERCOT 345 hub price in Real-Time averages the North, South, Houston and West hub prices; Panhandle is excluded. [e8]
- **Key facts #5** (cites e13): - ERCOT calculates Hub prices for each Settlement Interval as identified in the description of each Hub. [e13]
- **Common confusion #1** (cites e1, e14): - Hub versus Load Zone: a Hub averages a fixed list of buses with the method written in its definition, while a Load Zone price is load-weighted from State Estimator Load. [e1][e14]
- **Common confusion #2** (cites e2): - Hub versus Resource Node: a Resource Node is the point where a generator's price is calculated; a Hub is a Settlement Point made of buses. [e2]
- **Common confusion #3** (cites e4, e8): - "ERCOT 345" and "ERCOT 345 Bus" are two different hubs: one averages four hub prices, the other averages the buses of the same four hubs. [e4][e8]
- **Common confusion #4** (cites e8): - Whether a hub is one of the four main ones or Panhandle matters for the ERCOT averages: Panhandle is excluded under the current text. [e8]
- **Questions #2** (cites e1): The Protocol definition says the Hub Buses and price method can never be modified and that a Hub exists in perpetuity once defined. [e1]
- **Questions #4** (cites e6, e7): For each defined Hub other than the ERCOT Hub Average 345 kV Hub, it is the arithmetic average of the Real-Time LMPs of its Hub Buses. [e6] Each Hub Bus LMP is the simple average of the energized Electrical Buses within it. [e7]
- **Questions #6** (cites e8, e10): North 345, South 345, Houston 345 and West 345 in the current text. The Panhandle 345 kV Hub is excluded. [e8] Pending text (NPRR941) would also exclude the Lower Rio Grande Valley 138/345 kV Hub. [e10]
- **Questions #8** (cites e1, e3, e9): Not through any ordinary process: the Hub definition says the list of Hub Buses can never be modified [e1], Section 3.5.1 allows modification only as explicitly described in a Hub's own definition [e3], and a permanent removal of a Hub Bus requires an NPRR to revise the Hub definition. [e9]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is one of the three kinds of Settlement Point. [e2]
- **Link to spp** (cites e5): determines SPP (Settlement Point Price): Each Hub has its own Settlement Point Price calculated by the method in its definition. [e5]
- **Link to lmp** (cites e6): related LMP (Locational Marginal Price): Real-Time Hub LMPs are averages of the Real-Time LMPs of the Hub Buses. [e6]
- **Link to hb-north** (cites e4): related HB_NORTH (North Hub): North 345 kV Hub is one of the defined Hubs. [e4]
- **Link to hb-west** (cites e4): related HB_WEST (West Hub): West 345 kV Hub is one of the defined Hubs. [e4]
- **Link to load-zone** (cites e14, e1): contrasts-with Load Zone: A Load Zone price is Load-weighted from State Estimator Load; a Hub has a fixed list of Hub Buses and a fixed price method. [e14][e1]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A hub is a Settlement Point made of a defined group of buses, with its price method written into the Protocols. In Real-Time a hub price is a simple average of Hub Bus prices, not weighted by load, whereas a Load Zone price is Load-weighted.

