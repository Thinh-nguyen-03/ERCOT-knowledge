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

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (2) · text copy line 2542 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 74 WHTNY 345 NORTH 75 WCPP 345 NORTH ------------------------------------------------------------------------ (2) 
QUOTE: The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 DASPP _(North345) = DASPP _(ERCOT345Bus), if HB…

### e9 · `ercot-hubs-load-zones-page` · tier 2 · ERCOT Hubs and Load Zones display (settlement point names)
locator: ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote) · alt copy line 5

BEFORE: …Same page as ercot-hubs-load-zones-page.txt, table rows written one per line (cells separated by |). Real-Time LMPs for Load Zones and Trading Hubs Display Price Adders | RTRDPA: $0.42 Settlement Point | LMP | 5 MinChange to LMP | RTRDPA + LMP | 5 Min Change to RTRDPA + LMP 
QUOTE: HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08
AFTER:  LZ_AEN | 37.40 | -2.06 | 37.82 | -2.01 LZ_CPS | 38.17 | -1.72 | 38.59 | -1.67 LZ_HOUSTON | 36.10 | -2.65 | 36.52 | -2.60 LZ_LCRA | 37.72 | -1.92 | 38.14 | -1.87 LZ_NORTH | 34.44 | -3.41 | 34.86 | -3.36 LZ_RAYBN | 34.25 | -3.49 | 34.67 | -3.44 LZ_SOUTH | 37.80 | -1.88 | 38.22 | -1.83 LZ_WEST | 50.55…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (1), Hub Bus table, first rows · text copy line 3137 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …-------------------------------------------------------------------------------------------------------+ 3.5.2.4 West 345 kV Hub (West 345) (1) The West 345 kV Hub is composed of the following listed Hub Buses: ------ ---------------------------------- ---------- ------------------ ERCOT Operations 
QUOTE: No. Hub Bus kV Hub 1 MULBERRY 345 WEST 2 BOMSW 345 WEST 3 OECCS 345 WEST 4 BITTCR 345 WEST
AFTER:  5 FSHSW 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 16 SWESW 345 WEST 17 TWINBU 345 WEST ------ ---------------------------------- ---------- ---------------…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (1), Hub Bus table, last rows · text copy line 3169 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …COT Operations No. Hub Bus kV Hub 1 MULBERRY 345 WEST 2 BOMSW 345 WEST 3 OECCS 345 WEST 4 BITTCR 345 WEST 5 FSHSW 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 
QUOTE: 16 SWESW 345 WEST 17 TWINBU 345 WEST
AFTER:  ------ ---------------------------------- ---------- ------------------ (2) The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-min…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.5, paragraph (1) (Panhandle 345 kV Hub) · text copy line 3330 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.5.2.5 Panhandle 345 kV Hub (Pan 345) (1) 
QUOTE: The Panhandle 345 kV Hub is composed of the following listed Hub Buses:
AFTER:  ----------------------------------------------------------------------- ERCOT Operations ------- --------------------------------- ---------- ------------------ No. Hub Bus kV Hub 1 ABERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN 4 CTT_CROS 345 PAN 5 CTT_GRAY 345 PAN 6 OGALLALA 345 PAN 7 RAI…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.5, Hub Bus table, first and last rows · text copy line 3335 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)

BEFORE: …----------------------+ 3.5.2.5 Panhandle 345 kV Hub (Pan 345) (1) The Panhandle 345 kV Hub is composed of the following listed Hub Buses: ----------------------------------------------------------------------- ERCOT Operations ------- --------------------------------- ---------- ------------------ 
QUOTE: No. Hub Bus kV Hub 1 ABERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN
AFTER:  4 CTT_CROS 345 PAN 5 CTT_GRAY 345 PAN 6 OGALLALA 345 PAN 7 RAILHEAD 345 PAN 8 TESLA 345 PAN 9 TULECNYN 345 PAN 10 W_CW_345 345 PAN 11 WHIT_RVR 345 PAN 12 WINDMILL 345 PAN ----------------------------------------------------------------------- (2) The Panhandle 345 kV Hub Price uses the aggregated S…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.5, Hub Bus table, last rows · text copy line 3357 · heading above: 3.5.2.5 Panhandle 345 kV Hub (Pan 345)

BEFORE: …--- ERCOT Operations ------- --------------------------------- ---------- ------------------ No. Hub Bus kV Hub 1 ABERNATH 345 PAN 2 AJ_SWOPE 345 PAN 3 ALIBATES 345 PAN 4 CTT_CROS 345 PAN 5 CTT_GRAY 345 PAN 6 OGALLALA 345 PAN 7 RAILHEAD 345 PAN 8 TESLA 345 PAN 9 TULECNYN 345 PAN 10 W_CW_345 345 PAN 
QUOTE: 11 WHIT_RVR 345 PAN 12 WINDMILL 345 PAN
AFTER:  ----------------------------------------------------------------------- (2) The Panhandle 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 1…

### e15 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …45 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. 
QUOTE: The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e16 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (3), day-ahead formula, fallback case · text copy line 3185 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …lement Interval in Real-Time, for each Hub Bus included in this Hub. (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(West345) = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DAHUBSF _(West345, c) * DASP _(c)), if HBBC _(West345)≠0 
QUOTE: DASPP _(West345) = DASPP _(ERCOT345Bus), if HBBC _(West345)=0
AFTER:  Where: DAHUBSF _(West345, c) = $\begin{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, West345, c) * DAHBSF _(hb, West345, c)) DAHBSF _(hb, West345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, West345, c) * DASF _(pb, hb, West345, c)) HUBDF _(hb, West345, c) = IF(HB _(West345, c…

### e17 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), real-time formula, fallback case · text copy line 3243 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …-------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: RTSPP _(West345) = Max [-$251, (RTRDP + [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 
QUOTE: RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) * RTLMP _(b, hb, West345, y)) HUBDF _(hb, West345) = IF(HB _(West345)=0, 0, 1 / HB _(West345)) HBDF _(b, hb, West345) = IF(B _(hb, West345)=0, 0, 1 / B _(hb, West345)) …

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), real-time formula · text copy line 3239 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP _(West345) = Max [-$251, (RTRDP +
AFTER:  [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) *…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraph (1) · text copy line 2363 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: … 3.5.1 Process for Defining Hubs (1) Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website. 
QUOTE: A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub.
AFTER:  (2) When any Electrical Bus within a Hub Bus is added to the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Network Model, ERCOT shall provide notice to all Market Participants as soon as practicable and include th…

### e21 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, West row ($ per MWh, 2021 to 2025); Load Zone prices, not Hub prices · ocr copy line 1118, OCR page 29

BEFORE: …hrough DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 
QUOTE: West $111.56 $66.62 $67.56 $35.88 $41.59
AFTER:  Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-…

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, ERCOT row ($ per MWh, 2021 to 2025) · ocr copy line 1114, OCR page 29

BEFORE: …each zone for 2021-2025. These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) 
QUOTE: ERCOT $179.24 $76.41 $73.28 $32.41 $36.94
AFTER:  Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone inc…

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

### e25 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter VI, Resource Adequacy, Net Revenue by Location (page 122 OCR) · text copy line 7521

BEFORE: … types of new generators. Because natural gas prices can vary widely by location, the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices). Figure 55 shows a wide gap in net revenues between the West and Houston. 
QUOTE: Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region.
AFTER:  As work on these projects concludes, we expect the gap between the two hubs to narrow again. 100 | 2025 State of the Market Report / / Resource Adequacy Figure 55: Net Revenues by Location 2025 $C! $%! #! "! /(W;F*H<(, =F0;<,. /(W;<,.9 />?T. S(TN0 -.*H S(FH5 8N,5N,9T. 4(0H5 /(N*HNT S(FH5.N*H 4(0H52…

### e26 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter VI, Resource Adequacy, Net Revenue by Location (page 122 OCR) · text copy line 7519

BEFORE: …ility Deployment Price Adder (RDPA) also raises energy prices by accounting for operator actions that impact the market prices. 2. Net Revenue by Location Figure 55 shows net revenues at different locations for several types of new generators. Because natural gas prices can vary widely by location, 
QUOTE: the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices).
AFTER:  Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. The p…

### e27 · `eia-gas-hubs` · tier 2 · EIA Today in Energy: Market dynamics vary at key natural gas pricing hubs
locator: EIA, natural gas pricing hubs, Waha · text copy line 84

BEFORE: …otal marketed natural gas in the United States last year. Growing LNG exports and related facilities that process the hydrocarbon gas liquids present in natural gas in this region have also further increased the significance of this hub, as have increased natural gas exports via pipeline to Mexico. 
QUOTE: The Waha natural gas pricing hub is in West Texas near Permian Basin production activities and helps natural gas market participants get a sense of pricing in West Texas and southeastern New Mexico.
AFTER:  The Permian Basin produced 19% of total U.S. natural gas in 2023, with most coming from associated gas from crude oil wells. Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at othe…

### e28 · `eia-gas-hubs` · tier 2 · EIA Today in Energy: Market dynamics vary at key natural gas pricing hubs
locator: EIA, natural gas pricing hubs, Waha · text copy line 84

BEFORE: …cing hub is in West Texas near Permian Basin production activities and helps natural gas market participants get a sense of pricing in West Texas and southeastern New Mexico. The Permian Basin produced 19% of total U.S. natural gas in 2023, with most coming from associated gas from crude oil wells. 
QUOTE: Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at other hubs, sometimes turning negative.
AFTER:  Pacific region SoCal Citygate is the major natural gas pricing hub in Southern California in the Los Angeles Basin, with substantial natural gas consumption by the various local sectors, averaging about 2.5 billion cubic feet per day (Bcf/d) in 2023. SoCal Citygate prices reflect the price of movin…

### e29 · `eia-waha-2024` · tier 2 · EIA Today in Energy: Natural gas spot prices fell across key hubs in 2024
locator: EIA, Today in Energy on 2024 natural gas prices, West Texas paragraph · text copy line 73

BEFORE: … the Northeast at Algonquin Citygate and Eastern Gas South averaged 32 cents per million British thermal units (MMBtu) and 6 cents/MMBtu lower in 2024, respectively, and western prices at Northwest Sumas and SoCal Citygate averaged $2.51/MMBtu and $4.55/MMBtu lower compared with 2023, respectively. 
QUOTE: In West Texas, prices at the Waha Hub near Permian Basin production activities traded below zero for 42% of trading days in 2024 as natural gas production from the Permian Basin outpaced available pipeline takeaway capacity.
AFTER:  The Matterhorn Express Pipeline, capable of carrying 2.5 billion cubic feet per day from the Permian Basin to demand centers on the Texas coast, entered service in October 2024 and helped clear some of the regional production bottleneck. Since mid-November the price at the Waha Hub has been more th…

### e30 · `ref-ice-ercot-heat-rate` · tier 2 · ICE ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract specification
locator: ICE OTC contract specification dated November 21, 2026, title · text copy line 4

BEFORE: …ICE OTC November 21, 2026 
QUOTE: ERCOT Panhandle Heat Rate 345kV Hub Off-Peak
AFTER:  Contract Specifications Contract Symbol B09 Contract Size 50 MW per hour Currency US $ and cents per MWH Minimum Price Fluctuation 0.001 per MMBTU/MWh Listing Cycle Up to 72 consecutive monthly Contract Periods Schedule All off-peak hours for the applicable strip length referenced by the market for…

### e31 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub Bus, paragraph (2) (Real-Time Market) · text copy line 1214

BEFORE: …he de-energized Hub Bus. If power flow buses within a Hub Bus are de-energized under contingency, the disconnected MWs are redistributed among remaining energized power flow buses. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2, Hub Definitions; or (2) 
QUOTE: In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus. If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus.
AFTER:  This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2. Hub LMP (see Locational Marginal Price) I [Back to Top] Independent Market Information System Registered Entity (IMRE) A Market Participant that has signed the Standard Form Market Participant Agreement (…

### e32 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), variable definitions, HUBDF · text copy line 3253 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) * RTLMP _(b, hb, West345, y)) 
QUOTE: HUBDF _(hb, West345) = IF(HB _(West345)=0, 0, 1 / HB _(West345))
AFTER:  HBDF _(b, hb, West345) = IF(B _(hb, West345)=0, 0, 1 / B _(hb, West345)) The above variables are defined as follows: --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e33 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), variable definitions, HB · text copy line 2658 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …the total number of SCED runs that cover the 15-minute Settlement Interval. b none An energized Electrical Bus that is a component of a Hub Bus. B _(hb, North345) none The total number of energized Electrical Buses in Hub Bus hb. hb none A Hub Bus that is a component of the Hub. HB _(North345) none 
QUOTE: The total number of Hub Buses in the Hub with at least one energized component in each Hub Bus.
AFTER:  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), variable definitions, RTRDP · text copy line 2636 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …nt PriceThe Real-Time Settlement Point Price at the Hub, for the 15-minute Settlement Interval. RTHBP _(hb, North345, y) $/MWh Real-Time Hub Bus Price at Hub Bus per Security-Constrained Economic Dispatch (SCED) intervalThe Real-Time energy price at Hub Bus hb for the SCED interval y. RTRDP $/MWh 
QUOTE: Real-Time Reliability Deployment Price for Energy
AFTER:  The Real-Time price for the 15-minute Settlement Interval, reflecting the impact of reliability deployments on energy prices that are calculated from the Real-Time Reliability Deployment Price Adder for Energy. RTRDPA _(y) $/MWh Real-Time Reliability Deployment Price Adder for Energy The Real-Tim…

### e35 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, pending box after paragraph (4) · text copy line 2662 · heading above: 3.5.2.1 North 345 kV Hub (North 345)
FLAG pending-box: | [NPRR1057: Replace paragraph (4) above with the following upon system implementation:] |
BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1057: Replace paragraph (4) above with the following upon system implementation:]
AFTER:  | | | | (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: | | | | RTSPP _(North345) = Max [-$251, (RTRDP + | | | | [](HUBLMP _(North345, y) * RNWF _(y)))] | | | | Where: | | | | RTRDP = [](RNWF _(y) * RTRDPA _(y)) | | | | RNWF _(…

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.4, paragraph (1), Load Zone LMPs · text copy line 3876 · heading above: 6.6.1.4 Load Zone LMPs

BEFORE: …6.1.3 Real-Time Settlement Point Price for a Hub (1) The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions. 6.6.1.4 Load Zone LMPs (1) The Load Zone LMPs shall be posted on the ERCOT website. 
QUOTE: The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone.
AFTER:  The Load Zone LMP for a Load Zone for a SCED interval is calculated as follows: LZLMP _(y) = [] (RTLMP _(b, y) * LZWF _(b, y)) For all Load Zones except DC Tie Load Zones: LZWF _(b, y) = SEL _(b, y) / ([]SEL _(b, y)) For a DC Tie Load Zone: LZWF _(b, y) = [Max (0.001, SEL _(b, y))] / [Max (0.001, S…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Zonal Energy Prices, text above Table 1 · ocr copy line 1108, OCR page 29

BEFORE: …ussed further in Chapter II-E.4, the expanding participation of energy storage resources in energy markets has played a central role in this shift. C. Zonal Energy Prices Congestion causes the cost to serve load to vary by location, resulting in differences in electricity prices between Load Zones. 
QUOTE: Table | lists the annual load-weighted average prices for each zone for 2021-2025.
AFTER:  These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e2, e9): The West 345 kV Hub (West 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology in its definition. [e2] ERCOT's real-time price display lists the hub Settlement Point name HB_WEST. [e9] The saved Protocol text does not itself use the name HB_WEST.
- **How it works #1** (cites e10, e11) FLAG number-not-in-quote: 345 kV: The Hub Bus list. The Protocol table for the West 345 kV Hub starts with MULBERRY, BOMSW, OECCS and BITTCR and ends at number 17, TWINBU, so it has 17 listed Hub Buses. [e10][e11] The table gives only bus names, voltage (345 kV) and the hub label, so it does not show which buses sit in the Panhandle and which in the Permian Basin (see Open items). [e10]
- **How it works #2** (cites e3, e31, e19, e18, e16, e17): Pricing. The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour in the Day-Ahead, and in real time is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3] The real-time Hub Bus LMP is the simple average of the LMPs of its energized Electrical Buses, and a fully de-energized Hub Bus drops out. [e31] The Hub LMP is the arithmetic average of the Hub Buses' Real-Time LMPs (the ERCOT Hub Average 345 kV Hub is the exception). [e19] The real-time formula carries the -$251 floor, written Max[-$251, (RTRDP + ...)]. [e18] If no Hub Bus has an energized component (in the base case for the day-ahead formula), the hub price equals the ERCOT Bus Average 345 kV Hub price in both the day-ahead and real-time formulas. [e16][e17]
- **How it works #3** (cites e20, e7) FLAG number-not-in-quote: 3.5: Stability. A Hub, once defined, may not be modified except as explicitly described in its definition (np-03 Section 3.5.1), and np-02 says the Hub Bus list and method can never be modified. [e20][e7]
- **Formula #1** (cites e18, e34, e32, e33, e3): West hub real-time price per 15-minute Settlement Interval: the floor Max[-$251, ...] applied to RTRDP (the Real-Time Reliability Deployment Price for Energy) plus the sum over Hub Buses of the Hub Distribution Factor times the time-weighted Hub Bus price. [e18][e34] The Hub Distribution Factor is one divided by HB, the number of Hub Buses in the Hub with at least one energized component, and zero if there are none. [e32][e33] This is the equal-weighted average that the Protocol calls the simple average. [e3]
- **Formula #2** (cites e35): Pending change: the saved Protocol text carries a pending box, NPRR1057, that would replace this paragraph (4) formula upon system implementation; the formula above is the text currently in force. [e35]
- **ERCOT context #1** (cites e12, e13, e14, e15, e9, e30) FLAG number-not-in-quote: 3.5: The West Hub and the Panhandle Hub are different hubs. The Panhandle 345 kV Hub is its own Section 3.5.2.5 hub of 12 Hub Buses (ABERNATH through WINDMILL) and is not part of the ERCOT Hub Average. [e12][e13][e14][e15] ERCOT's display lists an HB_PAN Settlement Point, though no saved source says in words that it is the Panhandle hub. [e9] ICE lists an "ERCOT Panhandle Heat Rate 345kV Hub Off-Peak" contract, which refers to that Panhandle hub rather than West 345. [e30]
- **ERCOT context #2** (cites e5, e23, e6): In the IMM's 2025 report the West Zone is the largest contributor to intrazonal congestion costs, export constrained in the panhandle because of renewables and import constrained in the Permian Basin. [e5] Congestion costs within the West increased by 27% between 2024 and 2025. [e23] The IMM also reports that the West Zone had the highest annual average zonal energy price for the second year in a row (2025). [e6] Those statements are about the West Load Zone, not the West Hub. [e6]
- **ERCOT context #3** (cites e37, e21, e22, e19) FLAG number-not-in-quote: 2023, 2024: Zone price levels (load-weighted real-time prices by Load Zone, IMM Table 1, $ per MWh for 2021 to 2025): West $111.56, $66.62, $67.56, $35.88, $41.59; ERCOT $179.24, $76.41, $73.28, $32.41, $36.94. [e37][e21][e22] So the West zone was below the ERCOT average from 2021 to 2023 and above it in 2024 and 2025 (comparison from the two rows). [e21][e22] These are load-weighted Load Zone prices, not HB_WEST. [e37][e19]
- **ERCOT context #4** (cites e24) FLAG number-not-in-quote: 2025: Negative prices and spikes: the IMM says the West zone's Panhandle/Permian duality explains why it had the highest number of negative-price intervals and the greatest frequency of price spikes of any load zone in 2025. [e24]
- **ERCOT context #5** (cites e26, e25, e27, e28, e29): Gas link: the IMM's net revenue analysis uses Waha hub gas prices for the West zone. [e26] It says high Permian gas production and limited export capability have resulted in low gas prices at Waha, and that the price gap between the Waha and Katy gas hubs widened in 2025 because the Permian import constraint increased congestion costs. [e25] EIA describes the Waha gas pricing hub as in West Texas near Permian production, with prices typically below other hubs and sometimes negative. [e27][e28] EIA reports Waha traded below zero for 42% of trading days in 2024. [e29] These are gas prices, not electricity hub prices.
- **Key facts #1** (cites e1, e11) FLAG number-not-in-quote: 3.5, 2.4: - The West 345 kV Hub is defined in Protocol Section 3.5.2.4 and lists 17 Hub Buses. [e1][e11]
- **Key facts #2** (cites e3, e18): - Day-ahead price uses aggregated Shift Factors; real-time price is the simple average of time-weighted Hub Bus prices per 15-minute interval, with a -$251 floor in the formula. [e3][e18]
- **Key facts #3** (cites e4, e15): - In real time it is one of four prices averaged in the ERCOT Hub Average 345 kV Hub price; Panhandle is excluded. [e4][e15]
- **Key facts #4** (cites e6, e21) FLAG number-not-in-quote: 2025: - 2025 IMM: West Zone had the highest annual average zonal energy price ($41.59 per MWh) for the second year in a row. [e6][e21]
- **Key facts #5** (cites e23): - 2025 IMM: congestion within the West rose 27% from 2024 to 2025. [e23]
- **Key facts #6** (cites e9): - ERCOT's real-time price display lists HB_WEST and HB_PAN as separate Settlement Points. [e9]
- **Say it like this #1** (cites e3, e11, e6, e24): HB_WEST is the price of a fixed set of 17 west 345 kV buses, a simple average of Hub Bus prices in real time. The IMM ties the West zone's highest zonal prices to congestion and attributes its negative prices and spikes to the export-constrained Panhandle and import-constrained Permian Basin, so check whether a west hub price is the right reference for a particular west generator or load. [e3][e11][e6][e24]
- **Common confusion #1** (cites e3, e19, e36, e6): - West Hub versus West Load Zone: the Hub price follows the Hub definition (equal-weighted Hub Bus average), the Load Zone LMP is based on state-estimated Loads and bus LMPs, and the IMM's zone statements do not automatically apply to the Hub. [e3][e19][e36][e6]
- **Common confusion #2** (cites e12, e15, e9): - West Hub versus Panhandle Hub (HB_PAN on ERCOT's display): separate hubs with separate bus lists; only West is in the ERCOT Hub Average. [e12][e15][e9]
- **Common confusion #3** (cites e27, e2): - West Hub versus Waha: Waha is a natural gas pricing hub, while the West Hub is an electricity Settlement Point. [e27][e2]
- **Questions #4** (cites e3, e18): As the simple average of time-weighted Hub Bus prices for each 15-minute Settlement Interval, with the -$251 floor applied. [e3][e18]
- **Questions #6** (cites e24, e5): The IMM says the West zone includes the export-constrained Panhandle and the import-constrained Permian Basin, and that this duality explains the highest number of negative-price intervals and the greatest frequency of price spikes. [e24][e5]
- **Questions #8** (cites e12, e14, e2): The Panhandle 345 kV Hub is a separate hub with its own 12 buses, so a position referenced to HB_WEST does not settle at the Panhandle hub price. [e12][e14][e2]
- **Questions #10** (cites e26, e25): The IMM uses Waha gas prices for West-zone gas units and says high Permian gas production and limited export capability have resulted in low gas prices at Waha. [e26][e25] It does not state a numerical link between Waha and HB_WEST.
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

