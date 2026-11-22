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

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, paragraph (2) · text copy line 2301 · heading above: 3.4 Load Zones

BEFORE: …evenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors. (2) 
QUOTE: ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The Load-weighting must be determined using the Load, if any, from the State Estimator at each Electrical Bus.
AFTER:  3.4.1 Load Zone Types (1) The Load Zone types are: (a) The Competitive Load Zones; (b) The Non-Opt-In Entity (NOIE) Load Zones created pursuant to Section 3.4.3, NOIE Load Zones; and (c) The Direct Current Tie (DC Tie) Load Zones as defined in Section 3.4.4, DC Tie Load Zones. (2) The Competitive L…

### e20 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub Bus, item (1) · text copy line 1212

BEFORE: …ribed in the definition of the Hub in Section 3.5.2, Hub Definitions. Hubs may only be created by an amendment to Section 3.5.2. The list of Hub Buses and the Settlement price calculation methodology that define a Hub can never be modified, and a Hub, once defined, exists in perpetuity. Hub Bus (1) 
QUOTE: In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, an energized power flow bus or group of energized power flow buses are defined as a single element in the Hub definition. The Locational Marginal Price (LMP) of the Hub Bus is the simple average of the LMPs assigned to each energized power flow bus in the Hub Bus. If all power flow buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus.
AFTER:  If power flow buses within a Hub Bus are de-energized under contingency, the disconnected MWs are redistributed among remaining energized power flow buses. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2, Hub Definitions; or (2) In the Real-Time Market …

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), Day-Ahead formula variables · text copy line 2567 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: … _(ERCOT345Bus), if HBBC _(North345)=0 Where: DAHUBSF _(North345, c) = $\begin{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, North345, c) * DAHBSF _(hb, North345, c)) DAHBSF _(hb, North345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, North345, c) * DASF _(pb, hb, North345, c)) 
QUOTE: HUBDF _(hb, North345, c) = IF(HB _(North345, c)=0, 0, 1 / HB _(North345, c))
AFTER:  HBDF _(pb, hb, North345, c) = IF(PB _(hb, North345, c)=0, 0, 1 / PB _(hb, North345, c)) The above variables are defined as follows: -----------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), Day-Ahead formula variables · text copy line 2569 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …n{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, North345, c) * DAHBSF _(hb, North345, c)) DAHBSF _(hb, North345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, North345, c) * DASF _(pb, hb, North345, c)) HUBDF _(hb, North345, c) = IF(HB _(North345, c)=0, 0, 1 / HB _(North345, c)) 
QUOTE: HBDF _(pb, hb, North345, c) = IF(PB _(hb, North345, c)=0, 0, 1 / PB _(hb, North345, c))
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Definition ---…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), Day-Ahead formula · text copy line 2553 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …al-Time, for each Hub Bus included in this Hub. (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 
QUOTE: DASPP _(North345) = DASPP _(ERCOT345Bus), if HBBC _(North345)=0
AFTER:  Where: DAHUBSF _(North345, c) = $\begin{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, North345, c) * DAHBSF _(hb, North345, c)) DAHBSF _(hb, North345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, North345, c) * DASF _(pb, hb, North345, c)) HUBDF _(hb, North345, c) = IF(HB _(Nor…

### e34 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), Day-Ahead formula · text copy line 2546 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: … Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub. (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: 
QUOTE: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0
AFTER:  DASPP _(North345) = DASPP _(ERCOT345Bus), if HBBC _(North345)=0 Where: DAHUBSF _(North345, c) = $\begin{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, North345, c) * DAHBSF _(hb, North345, c)) DAHBSF _(hb, North345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, North345, c) * DAS…

### e35 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), variable table, DASL · text copy line 2578 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------ DASPP _(North345) $/MWh Day-Ahead Settlement Point PriceThe DAM Settlement Point Price at the Hub, for the hour. DASL $/MWh Day-Ahead System Lambda
QUOTE: The DAM Shadow Price for the system power balance constraint for the hour.
AFTER:  DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DAHUBSF _(North345,c) none Day-Ahead Shift Factor of the Hub The DAM aggregated Shift Factor of a Hub for the constraint c for the hour. DAHBSF _(hb,North345,c) none…

### e36 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), variable table, DASP(c) · text copy line 2580 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ASPP _(North345) $/MWh Day-Ahead Settlement Point PriceThe DAM Settlement Point Price at the Hub, for the hour. DASL $/MWh Day-Ahead System LambdaThe DAM Shadow Price for the system power balance constraint for the hour. DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraint
QUOTE: The DAM Shadow Price for the constraint c for the hour.
AFTER:  DAHUBSF _(North345,c) none Day-Ahead Shift Factor of the Hub The DAM aggregated Shift Factor of a Hub for the constraint c for the hour. DAHBSF _(hb,North345,c) none Day-Ahead Shift Factor of the Hub BusThe DAM aggregated Shift Factor of a Hub Bus hb for the constraint c for the hour. DASF _(pb,h…

### e37 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), variable table, HB(North345,c) · text copy line 2600 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …Hub Bus hb for the constraint c. hb none A Hub Bus that is a component of the Hub with at least one energized power flow bus for the constraint c. HBBC _(North345) none The total number of Hub Buses in the Hub with at least one energized component in each Hub Bus in base case. HB _(North345,c) none 
QUOTE: The total number of Hub Buses in the Hub with at least one energized component in each Hub Bus for the constraint c.
AFTER:  c none A DAM binding transmission constraint for the hour caused by either base case or a contingency. ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e38 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), variable table, HBBC(North345) · text copy line 2598 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …that is a component of a Hub Bus for the constraint c. PB _(hb, North345,c) none The total number of energized power flow buses in Hub Bus hb for the constraint c. hb none A Hub Bus that is a component of the Hub with at least one energized power flow bus for the constraint c. HBBC _(North345) none 
QUOTE: The total number of Hub Buses in the Hub with at least one energized component in each Hub Bus in base case.
AFTER:  HB _(North345,c) none The total number of Hub Buses in the Hub with at least one energized component in each Hub Bus for the constraint c. c none A DAM binding transmission constraint for the hour caused by either base case or a contingency. ---------------------------------------------------------…

### e39 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (4), Real-Time formula (continuation) · text copy line 2609 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------ (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: RTSPP _(North345) = Max [-$251, (RTRDP + 
QUOTE: [](HUBDF _(hb, North345) * ([](RTHBP _(hb, North345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(North345)≠0
AFTER:  RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, North345, y) = [](HBDF _(b, hb, North345) * RTLMP _(b, hb, North345, y)) HUBDF _(hb, North345) = IF(HB _(North345)=0, 0, 1 / HB _(North345)) HBDF …

## Statements to check (new or changed since the last audit)

- **Formula #1** (cites e34, e35, e36, e38, e21, e22, e37, e23): Day-Ahead, North 345 shown (the other hubs use the same structure with their own Hub Buses). The Hub price is the Day-Ahead System Lambda (the Shadow Price for the system power balance constraint) minus the sum, over Day-Ahead binding transmission constraints, of the Hub's aggregated Shift Factor times that constraint's Shadow Price, when the count of Hub Buses with an energized component in the base case is not zero. [e34][e35][e36][e38] The aggregated Shift Factor averages the shift factors of the Hub Buses, and each Hub Bus's factor averages its energized power flow buses: the Hub Distribution Factor is 1 divided by the number of Hub Buses with at least one energized component for the constraint (zero if there are none) and the Hub Bus Distribution Factor is 1 divided by the number of energized power flow buses in the Hub Bus. [e21][e22][e37] If that base-case count is zero, the Day-Ahead price falls back to the ERCOT Bus Average 345 price. [e23][e38]
- **Questions #12** (cites e5, e34, e39): The Protocol text writes the two methods differently: the Day-Ahead price is built from System Lambda and constraint Shadow Prices using aggregated Shift Factors, and the Real-Time price is a time-weighted average of Hub Bus prices. [e5][e34][e39] The Protocol does not state a reason for the difference.
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is one of the three kinds of Settlement Point. [e2]
- **Link to spp** (cites e1): determines SPP (Settlement Point Price): Each Hub has its own Settlement Point Price calculated by the method in its definition. [e1]
- **Link to lmp** (cites e6): related LMP (Locational Marginal Price): Real-Time Hub LMPs are averages of the Real-Time LMPs of the Hub Buses. [e6]
- **Link to hb-north** (cites e4): related HB_NORTH (North Hub): North 345 kV Hub is one of the defined Hubs. [e4]
- **Link to hb-west** (cites e4): related HB_WEST (West Hub): West 345 kV Hub is one of the defined Hubs. [e4]
- **Link to load-zone** (cites e14, e1): contrasts-with Load Zone: A Load Zone price is Load-weighted from State Estimator Load; a Hub has a fixed list of Hub Buses and a fixed price method. [e14][e1]
- **Link to dam** (cites e34, e35, e36): used-in Day-Ahead Market (DAM): In the Day-Ahead a Hub price is built from the aggregated Shift Factors of its Hub Buses, the System Lambda and the constraint Shadow Prices. [e34][e35][e36]
- **Link to crr-auction** (cites e20): used-in CRR Auctions: The Hub Bus definition covers the Day-Ahead Market and the CRR Auction. [e20]
- **Link to rtm** (cites e5): used-in Real-Time Market (RTM): Real-Time Hub prices are averages of Hub Bus prices over the 15-minute Settlement Interval. [e5]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A hub is a Settlement Point made of a defined group of buses, with its price method written into the Protocols. In Real-Time a hub price is a simple average of Hub Bus prices, not weighted by load, whereas a Load Zone price is Load-weighted.

