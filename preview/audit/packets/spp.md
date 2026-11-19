# Audit packet: SPP (Settlement Point Price) (spp)

kind metric · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point Price · text copy line 2915

BEFORE: …nly Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point A Resource Node, Load Zone, or Hub. Settlement Point Price 
QUOTE: A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations.
AFTER:  Settlement Quality Meter Data Data that has been edited, validated, and is appropriate for ERCOT to use for Settlement and billing purposes. Settlement Statement A statement issued by ERCOT reflecting a breakdown of administrative, miscellaneous, and market charges for the applicable market service…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.1 · text copy line 2750 · heading above: 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes

BEFORE: …----------------+ 4.6 DAM Settlement 4.6.1 Day-Ahead Settlement Point Prices (1) The Day-Ahead Settlement Point Price (DASPP) calculations are described in this Section for Resource Nodes, Load Zones, Hubs, and logical Resource Nodes. 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes (1) 
QUOTE: The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process.
AFTER:  4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: D…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.3 · text copy line 2809 · heading above: 4.6.1.3 Day-Ahead Settlement Point Prices for Hubs

BEFORE: …our caused by either base case or a contingency. --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 4.6.1.3 Day-Ahead Settlement Point Prices for Hubs (1) 
QUOTE: The DASPP for a Settlement Point at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5, Hubs.
AFTER:  4.6.1.4 Day-Ahead Settlement Point Prices at the Logical Resource Node for a Combined Cycle Generation Resource (1) ERCOT shall calculate the DASPP for each hour at the logical Resource Node for the Combined Cycle Generation Resource as follows: (a) The DASPP at a logical Resource Node shall be the…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1) · text copy line 3703 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) 
QUOTE: The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows:
AFTER:  RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y))))) Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1) · text copy line 3795 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.1.2 Real-Time Settlement Point Price for a Load Zone (1) 
QUOTE: The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone.
AFTER:  The Real-Time Settlement Point Price for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.3, paragraph (1) · text copy line 3872 · heading above: 6.6.1.3 Real-Time Settlement Point Price for a Hub

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.3 Real-Time Settlement Point Price for a Hub (1) 
QUOTE: The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions.
AFTER:  6.6.1.4 Load Zone LMPs (1) The Load Zone LMPs shall be posted on the ERCOT website. The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone. The Load Zone LMP for a Load Zone for a SCED interval is calculated as follows:…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …all Market Participants are described in the Operating Guides. 6.6 Settlement Calculations for the Real-Time Energy Operations 6.6.1 Real-Time Settlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. 
QUOTE: For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e9 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, paragraph (1) · text copy line 2299 · heading above: 3.4 Load Zones

BEFORE: …and update monthly, information on the MIS Secure Area regarding each new Transmission Element to be installed on the ERCOT Transmission Grid. 3.4 Load Zones (1) ERCOT shall assign every power flow bus to a Load Zone for Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Settlement purposes. 
QUOTE: ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors.
AFTER:  (2) ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The …

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) and (1)(a)-(b)(i) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ty-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy. 
QUOTE: ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specified (b) Use the following rules in order: (i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist.
AFTER:  (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Rea…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.D, Shortage and Reliability Pricing · text copy line 1361

BEFORE: … / / Review of Real-Time Market Outcomes • The Reliability Deployment Price Adder (RDPA), implemented in 2015, ensures that prices are not inefficiently reduced when ERCOT takes out-of-market reliability actions.2 These adders are ERCOT's primary means of reflecting shortage pricing in its markets. 
QUOTE: Since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder.
AFTER:  The all-in cost of electricity increased 13.8% from almost $34 per MWh in 2024 to $38 per MWh in 2025. This increase was driven primarily by the cost of energy, with no adders or uplift, and corresponded to a 61% increase in the average daily index price for natural gas. Gas and energy prices are e…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-3 summary · text copy line 9077

BEFORE: …ds while complying with HB 1500. We continue to recommend that ERCOT implement DRRS using the design principles outlined above. 2020-3: Reconfigure Load Zones to Reflect Prevailing Congestion Patterns Load zones are groups of load nodes in the ERCOT grid that experience similar congestion patterns. 
QUOTE: Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone.
AFTER:  By aggregating prices this way, the system shields loads from nodal price volatility and simplifies market settlements. Beyond simplifying settlements, load zone prices also provide important short- and long-term economic signals. When they accurately capture congestion patterns, they can inform co…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1701

BEFORE: …eal-Time Energy Market Prices by Zone !"!# 'E)*H,-.*/M)N-OP-4)*-RST8 '9W;< P#=>?!% BCDNECE !"#$%$& cC*ET !(("%,( GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& 
QUOTE: Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone.
AFTER:  The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative pr…

## Statements to check

- **Definition #1** (cites e1, e2): A Settlement Point Price (SPP) is the price calculated for a Settlement Point for each Settlement Interval, using LMP data and the formulas in Section 4.6 (DAM Settlement) and Section 6.6 (Real-Time settlement calculations). [e1] A Settlement Point is a Resource Node, a Load Zone or a Hub. [e2]
- **How it works #1** (cites e3, e9, e4): Day-ahead. The DASPP at a Resource Node for an hour is the LMP at that node from the DAM process. [e3] For a Load Zone, ERCOT calculates the day-ahead price from Load-weighted aggregated Shift Factors of the energized power flow buses for each constraint, with the weighting based on Load distribution factors. [e9] For a Hub, the DASPP follows the methodology in that Hub's definition. [e4]
- **How it works #2** (cites e5, e6, e7): Real time. The Resource Node price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e5] The Load Zone price is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6] The Hub price again follows the Hub's own definition in Section 3.5.2. [e7]
- **How it works #3** (cites e8, e10): Two protocol rules shape the real-time number after the LMP is known. First, an administrative price floor of -$251/MWh is applied after the Reliability Deployment Price Adders for Energy are added. [e8] Second, ERCOT assigns an LMP to de-energized Electrical Buses by heuristic rules applied in order: an LMP predetermined by ERCOT for that bus if there is one, otherwise (first) the average LMP of buses in the same station at the same voltage level. [e10]
- **ERCOT context #1** (cites e14, e11, e5): The settlement price is a different object from the LMP: the IMM notes generators settle at the nodal level while loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e14] On shortage pricing, the IMM notes that since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder. [e11] The Reliability Deployment Price Adder for Energy is still part of the real-time SPP formula in the current protocol text. [e5]
- **ERCOT context #2** (cites e12): For outcomes, the IMM reports that in 2025 the West zone had the highest average price, followed by the South zone. [e12]
- **Key facts #1** (cites e2): - Settlement Points are Resource Nodes, Load Zones and Hubs. [e2]
- **Key facts #2** (cites e3): - The Day-Ahead SPP at a Resource Node equals the DAM LMP there. [e3]
- **Key facts #3** (cites e5): - The Real-Time SPP is calculated per 15-minute Settlement Interval from Real-Time LMPs plus the Reliability Deployment Price Adder for Energy. [e5]
- **Key facts #4** (cites e8): - Real-Time SPPs have an administrative floor of -$251/MWh. [e8]
- **Key facts #5** (cites e12): - In 2025 the West zone had the highest average zonal price, then South (IMM). [e12]
- **Common confusion #1** (cites e1): - SPP versus LMP: the LMP is a bus-level SCED or DAM output, while the SPP is the settled price at a Settlement Point. [e1]
- **Common confusion #2** (cites e9, e6): - Day-ahead versus real-time Load Zone method: the day-ahead price uses shift-factor aggregation with load distribution factors, while the real-time price is the load-weighted average of bus LMPs using State Estimator Load. [e9][e6]
- **Common confusion #3** (cites e11): - Real-time shortage pricing no longer comes from a separate ORDC adder in the current text; do not describe the current real-time SPP as LMP plus ORDC. [e11]
- **Questions #2** (cites e1, e3, e5): The LMP is the bus-level marginal cost from DAM or SCED. The SPP is calculated for a Resource Node, Load Zone or Hub from LMP data using the Section 4.6 and 6.6 formulas. [e1] A Resource Node's day-ahead SPP is simply its LMP, while its real-time SPP also includes the reliability deployment adder. [e3][e5]
- **Questions #4** (cites e6): It is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6]
- **Questions #6** (cites e8): The protocol sets an administrative floor of -$251/MWh, applied after adding the Reliability Deployment Price Adders for Energy. [e8]
- **Link to lmp** (cites e1): related LMP (Locational Marginal Price): The Settlement Point Price is calculated from LMP data. [e1]
- **Link to settlement-point** (cites e2): related Settlement Point: A Settlement Point is a Resource Node, Load Zone or Hub, and each has its own Settlement Point Price. [e2]
- **Link to resource-node** (cites e3, e5): related Resource Node: Resource Node prices are essentially LMPs, with a real-time adder in real time. [e3][e5]
- **Link to load-zone** (cites e6): related Load Zone: The real-time Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone. [e6]
- **Link to trading-hub** (cites e7): related Trading Hubs: Hub prices follow the methodology written into each Hub's definition. [e7]
- **Link to dam** (cites e3): related Day-Ahead Market (DAM): The Day-Ahead SPP is the DAM-side price. [e3]
- **Link to rtm** (cites e5): related Real-Time Market (RTM): The Real-Time SPP is the price for each 15-minute Settlement Interval. [e5]
- **Link to negative-prices** (cites e8): related Negative Prices: The real-time SPP has an administrative floor. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The SPP is the price that actually settles: it is built from LMPs but computed at a Resource Node, Load Zone or Hub, hourly in the day-ahead and per 15 minutes in real time. Generators see node prices, loads see zone averages, and hubs follow their own definitions.

