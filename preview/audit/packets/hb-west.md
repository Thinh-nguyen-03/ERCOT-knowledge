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

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (2) · text copy line 2542 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 74 WHTNY 345 NORTH 75 WCPP 345 NORTH ------------------------------------------------------------------------ (2) 
QUOTE: The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 DASPP _(North345) = DASPP _(ERCOT345Bus), if HB…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.5, paragraph (1) (Panhandle 345 kV Hub) · text copy line 3330 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.5.2.5 Panhandle 345 kV Hub (Pan 345) (1) 
QUOTE: The Panhandle 345 kV Hub is composed of the following listed Hub Buses:
AFTER:  ----------------------------------------------------------------------- ERCOT Operations ------- --------------------------------- ---------- ------------------ No. Hub Bus kV Hub 1 ABERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN 4 CTT_CROS 345 PAN 5 CTT_GRAY 345 PAN 6 OGALLALA 345 PAN 7 RAI…

### e23 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 94 (OCR), Chapter V.G.2, Congestion Impact · text copy line 6024

BEFORE: …. In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. 
QUOTE: Congestion costs within the West increased by 27% between 2024 and 2025.
AFTER:  Next, we discuss a methodology to define load-zone boundaries based on geographic coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new load zones based on geographic coordinates and historical price data.47 W…

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Zonal Energy Prices · text copy line 1704

BEFORE: …he trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. 
QUOTE: This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

### e26 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter VI, Resource Adequacy, Net Revenue by Location (page 122 OCR) · text copy line 7519

BEFORE: …ility Deployment Price Adder (RDPA) also raises energy prices by accounting for operator actions that impact the market prices. 2. Net Revenue by Location Figure 55 shows net revenues at different locations for several types of new generators. Because natural gas prices can vary widely by location, 
QUOTE: the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices).
AFTER:  Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. The p…

### e28 · `eia-gas-hubs` · tier 2 · EIA Today in Energy: Market dynamics vary at key natural gas pricing hubs
locator: EIA, natural gas pricing hubs, Waha · text copy line 84

BEFORE: …cing hub is in West Texas near Permian Basin production activities and helps natural gas market participants get a sense of pricing in West Texas and southeastern New Mexico. The Permian Basin produced 19% of total U.S. natural gas in 2023, with most coming from associated gas from crude oil wells. 
QUOTE: Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at other hubs, sometimes turning negative.
AFTER:  Pacific region SoCal Citygate is the major natural gas pricing hub in Southern California in the Los Angeles Basin, with substantial natural gas consumption by the various local sectors, averaging about 2.5 billion cubic feet per day (Bcf/d) in 2023. SoCal Citygate prices reflect the price of movin…

### e30 · `ref-ice-ercot-heat-rate` · tier 2 · ICE ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract specification
locator: ICE OTC contract specification dated November 21, 2026, title · text copy line 4

BEFORE: …ICE OTC November 21, 2026 
QUOTE: ERCOT Panhandle Heat Rate 345kV Hub Off-Peak
AFTER:  Contract Specifications Contract Symbol B09 Contract Size 50 MW per hour Currency US $ and cents per MWH Minimum Price Fluctuation 0.001 per MMBTU/MWh Listing Cycle Up to 72 consecutive monthly Contract Periods Schedule All off-peak hours for the applicable strip length referenced by the market for…

## Statements to check (new or changed since the last audit)

- **Link to trading-hub** (cites e1): is-a Trading Hubs: The West 345 kV Hub is one of the defined Hubs. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is a kind of Settlement Point. [e2]
- **Link to hb-north** (cites e3, e8): contrasts-with HB_NORTH (North Hub): The North 345 kV Hub Price uses the same pricing method as the West 345 kV Hub (aggregated Shift Factors in the Day-Ahead, simple average of time-weighted Hub Bus prices in Real-Time) over its own Hub Buses. [e3][e8]
- **Link to congestion** (cites e5) FLAG number-not-in-quote: 2025: related Transmission Congestion: In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs. [e5]
- **Link to load-zone** (cites e6): contrasts-with Load Zone: The IMM's West Zone statements are about the Load Zone, not this Hub. [e6]
- **Link to basis-risk** (cites e2, e5, e23): related Basis Risk: A position settled at a node or load zone against the West Hub carries the price difference between the two Settlement Points. [e2] The IMM reports large intrazonal congestion costs in the West Zone. [e5][e23]
- **Link to waha-hub** (cites e26, e28): related Waha Gas Hub: The IMM uses Waha gas prices for West-zone gas units, and EIA says Waha prices are typically lower than other hubs and sometimes negative. [e26][e28]
- **Link to negative-prices** (cites e24): related Negative Prices: The IMM says the West zone had the highest number of negative-price intervals. [e24]
- **Link to permian-transmission** (cites e5) FLAG number-not-in-quote: 765 kV: related Permian Basin Load & 765 kV Plan: The IMM ties West congestion to import constraints in the Permian Basin and export constraints in the Panhandle. [e5]
- **Link to shift-factor** (cites e3): related Shift Factors: The day-ahead hub price uses aggregated Shift Factors of the Hub Buses. [e3]
- **Link to exchanges-ice-nodal** (cites e30, e12): related ICE & Nodal Exchange: ICE lists an ERCOT Panhandle Heat Rate 345kV Hub contract, a different hub from West 345. [e30][e12]

