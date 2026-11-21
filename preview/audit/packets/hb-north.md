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
locator: Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …----------------------+ 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345) (1) The ERCOT Hub Average 345 kV Hub price for Day-Ahead is calculated for each hour using the aggregated Shift Factors of four Hubs: the North 345 kV Hub, the South 345 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. 
QUOTE: The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

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

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e9 · `ercot-hubs-load-zones-page` · tier 2 · ERCOT Hubs and Load Zones display (settlement point names)
locator: ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote) · alt copy line 5

BEFORE: …Same page as ercot-hubs-load-zones-page.txt, table rows written one per line (cells separated by |). Real-Time LMPs for Load Zones and Trading Hubs Display Price Adders | RTRDPA: $0.42 Settlement Point | LMP | 5 MinChange to LMP | RTRDPA + LMP | 5 Min Change to RTRDPA + LMP 
QUOTE: HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08
AFTER:  LZ_AEN | 37.40 | -2.06 | 37.82 | -2.01 LZ_CPS | 38.17 | -1.72 | 38.59 | -1.67 LZ_HOUSTON | 36.10 | -2.65 | 36.52 | -2.60 LZ_LCRA | 37.72 | -1.92 | 38.14 | -1.87 LZ_NORTH | 34.44 | -3.41 | 34.86 | -3.36 LZ_RAYBN | 34.25 | -3.49 | 34.67 | -3.44 LZ_SOUTH | 37.80 | -1.88 | 38.22 | -1.83 LZ_WEST | 50.55…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (1), Hub Bus table, last rows · text copy line 2537 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …W 345 NORTH 59 SHRSW 345 NORTH 60 SCSES 345 NORTH 61 SYCRK 345 NORTH 62 THSES 345 NORTH 63 TMPSW 345 NORTH 64 TNP_ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 
QUOTE: 74 WHTNY 345 NORTH 75 WCPP 345 NORTH
AFTER:  ------------------------------------------------------------------------ (2) The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead and is the simple average of the time-weighted Hub Bus p…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (1), Hub Bus table, last rows · text copy line 3169 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …COT Operations No. Hub Bus kV Hub 1 MULBERRY 345 WEST 2 BOMSW 345 WEST 3 OECCS 345 WEST 4 BITTCR 345 WEST 5 FSHSW 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 
QUOTE: 16 SWESW 345 WEST 17 TWINBU 345 WEST
AFTER:  ------ ---------------------------------- ---------- ------------------ (2) The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-min…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (1), Hub Bus table, first rows · text copy line 2389 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …-----------+ 3.5.2 Hub Definitions 3.5.2.1 North 345 kV Hub (North 345) (1) The North 345 kV Hub is composed of the following Hub Buses: ------------------------------------------------------------------------ ERCOT Operations ---------- ----------------------------- ----------- ------------------- 
QUOTE: No. Hub Bus kV Hub 1 ANASW 345 NORTH 2 CN345 345 NORTH 3 WLSH 345 NORTH 4 FMRVL 345 NORTH 5 LPCCS 345 NORTH
AFTER:  6 MNSES 345 NORTH 7 PRSSW 345 NORTH 8 SSPSW 345 NORTH 9 VLSES 345 NORTH 10 ALNSW 345 NORTH 11 ALLNC 345 NORTH 12 BNDVS 345 NORTH 13 BNBSW 345 NORTH 14 BBSES 345 NORTH 15 BOSQUESW 345 NORTH 16 CDHSW 345 NORTH 17 CNTRY 345 NORTH 18 CRLNW 345 NORTH 19 CMNSW 345 NORTH 20 CNRSW 345 NORTH 21 CRTLD 345 NO…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraph (1) · text copy line 2363 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: … 3.5.1 Process for Defining Hubs (1) Hubs settled through ERCOT may only be created by an amendment to Section 3.5.2, Hub Definitions. Hubs are made up of one or more Electrical Buses. ERCOT shall post the list of Electrical Buses (including their names) that are part of a Hub on the ERCOT website. 
QUOTE: A Hub, once defined, may not be modified except as explicitly described in the definition of that Hub.
AFTER:  (2) When any Electrical Bus within a Hub Bus is added to the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Network Model, ERCOT shall provide notice to all Market Participants as soon as practicable and include th…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.1, paragraphs (2) to (4) · text copy line 2367 · heading above: 3.5.1 Process for Defining Hubs

BEFORE: …o the Network Operations Model or the Congestion Revenue Right (CRR) Network Model through changes to the Network Operations Model or CRR Network Model, ERCOT shall provide notice to all Market Participants as soon as practicable and include that Electrical Bus in the Hub Bus price calculation. (3) 
QUOTE: When any Electrical Bus within a Hub Bus is disconnected from the Network Operations Model or the CRR Network Model through operations changes in transmission topology temporarily, ERCOT shall provide notice to all Market Participants as soon as practicable and exclude that Electrical Bus from the Hub Bus price calculation. (4) In the event of a permanent change that removes the Hub Bus from the ERCOT Transmission Grid, ERCOT shall file a Nodal Protocol Revision Request (NPRR) to revise the appropriate Hub definition.
AFTER:  (5) If a Transmission Service Provider (TSP) or ERCOT plans a nomenclature change in the Network Operations Model or the CRR Network Model, ERCOT shall file a NPRR to include the nomenclature change in the Hub Bus definitions before implementing the name change to either the Network Operations Mode…

### e15 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub Bus, paragraph (2) (Real-Time Market) · text copy line 1214

BEFORE: …he de-energized Hub Bus. If power flow buses within a Hub Bus are de-energized under contingency, the disconnected MWs are redistributed among remaining energized power flow buses. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2, Hub Definitions; or (2) 
QUOTE: In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus. If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus.
AFTER:  This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2. Hub LMP (see Locational Marginal Price) I [Back to Top] Independent Market Information System Registered Entity (IMRE) A Market Participant that has signed the Standard Form Market Participant Agreement (…

### e16 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (3), day-ahead formula, fallback case · text copy line 2553 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …al-Time, for each Hub Bus included in this Hub. (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array}{r} \mathbf{\Sigma} \\ \mathbf{c} \end{array}$(DAHUBSF _(North345, c) * DASP _(c)), if HBBC _(North345)≠0 
QUOTE: DASPP _(North345) = DASPP _(ERCOT345Bus), if HBBC _(North345)=0
AFTER:  Where: DAHUBSF _(North345, c) = $\begin{array}{r} \Sigma \\ hb \end{array}$(HUBDF _(hb, North345, c) * DAHBSF _(hb, North345, c)) DAHBSF _(hb, North345, c) = $\begin{array}{r} \Sigma \\ pb \end{array}$(HBDF _(pb, hb, North345, c) * DASF _(pb, hb, North345, c)) HUBDF _(hb, North345, c) = IF(HB _(Nor…

### e17 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (4), real-time formula, fallback case · text copy line 2613 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …---------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: RTSPP _(North345) = Max [-$251, (RTRDP + [](HUBDF _(hb, North345) * ([](RTHBP _(hb, North345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(North345)≠0 
QUOTE: RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, North345, y) = [](HBDF _(b, hb, North345) * RTLMP _(b, hb, North345, y)) HUBDF _(hb, North345) = IF(HB _(North345)=0, 0, 1 / HB _(North345)) HBDF _(b, hb, North345) = IF(B _(hb, North345)=0, 0, 1 / B _(hb, No…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (4), real-time formula · text copy line 2607 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP _(North345) = Max [-$251, (RTRDP +
AFTER:  [](HUBDF _(hb, North345) * ([](RTHBP _(hb, North345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(North345)≠0 RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, North345, y) = [](HBDF _(b, hb, Nort…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ettlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, 
QUOTE: an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.7, paragraph (1) (ERCOT Bus Average 345 kV Hub) · text copy line 3805 · heading above: 3.5.2.7 ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus)

BEFORE: …rice at the West 345 Hub for the 15-minute Settlement Interval. ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 3.5.2.7 ERCOT Bus Average 345 kV Hub (ERCOT 345 Bus) (1) 
QUOTE: The ERCOT Bus Average 345 kV Hub is composed of the Hub Buses listed in Section 3.5.2.1, North 345 kV Hub (North 345); Section 3.5.2.2, South 345 kV Hub (South 345); Section 3.5.2.3, Houston 345 kV Hub (Houston 345); and Section 3.5.2.4, West 345 kV Hub (West 345). The Panhandle 345 kV Hub is not included in the ERCOT Bus Average 345 kV Hub price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e22 · `ice-ercot-north-peak` · tier 2 · ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, contract specification
locator: Contract Specifications, Reference Price A - Description (ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, document dated November 18, 2026) · text copy line 55

BEFORE: … Resolution 1 to this Chapter 18. Listing Cycle Up to 50 consecutive monthly Contract Periods Last Trading Day The last Business Day of the Contract Period Final Settlement Average of Reference Price A Prices REFERENCE PRICE A ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME a) Ref Price A - Description 
QUOTE: "ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME" means that the price for a Pricing Date will be that day's Specified Price per MWh of electricity for delivery on the Delivery Date, stated in U.S. Dollars, published by the ERCOT at http://www.ercot.com/content/cdr/html/real_time_spp
AFTER:  ICE Help Desk: Atlanta + 1 770 738 2101, London + 44 (0)20 7488 5100 or ICEHelpdesk@ice.com Contract Specifications b) Ref Price A - Pricing Date Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date c) Ref Price A - Specified Price Average of SPPs for …

### e23 · `ice-ercot-north-peak` · tier 2 · ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, contract specification
locator: Contract Specifications, Reference Price A - Specified Price · text copy line 71

BEFORE: …r/html/real_time_spp ICE Help Desk: Atlanta + 1 770 738 2101, London + 44 (0)20 7488 5100 or ICEHelpdesk@ice.com Contract Specifications b) Ref Price A - Pricing Date Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date c) Ref Price A - Specified Price 
QUOTE: Average of SPPs for all hours ending 0700-2200 CPT
AFTER:  d) Ref Price A - Pricing calendar ERCOT e) Ref Price A - Delivery Date Contract Period Final Payment Date The sixth Clearing Organization business day following the Last Trading Day ICE Help Desk: Atlanta + 1 770 738 2101, London + 44 (0)20 7488 5100 or ICEHelpdesk@ice.com…

### e24 · `ice-ercot-north-offpeak` · tier 2 · ICE ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, contract specification
locator: Contract Specifications, Description (ICE ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, document dated November 18, 2026) · text copy line 11

BEFORE: …ICE Futures U.S. November 18, 2026 ERCOT North 345KV Real-Time Off-Peak Fixed Price Future Contract Specifications Description 
QUOTE: A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the off-peak hourly electricity prices published by ERCOT for the location specified in Reference Price A.
AFTER:  Contract Symbol NEB Settlement Method Cash settlement Contract Size 1 MW Currency USD Minimum Price Fluctuation The price quotation convention shall be One cent ($0.01) per MWh; minimum price fluctuation may vary by trade type. Please see Table in Resolution 1 to this Chapter 18. Listing Cycle Up t…

### e25 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 80 (OCR), Chapter V.A, Summary of Transmission Congestion Results in 2025, first bullet · text copy line 5090

BEFORE: …ch generator's energy offer curve and its corresponding impact on transmission constraints. This market dispatch produces a set of locational prices that vary across the network and congestion costs collected from participants. Key insights on transmission and congestion in ERCOT in 2025 include: • 
QUOTE: Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin.
AFTER:  • Real-time congestion was 7% higher in the RTM than in the DAM. This disparity is reasonable because forecast error persists for both load and renewable generation. • Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 12…

### e28 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, paragraph (4), variable definitions, HBDF · text copy line 2625 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …45)≠0 RTSPP _(North345) = RTSPP _(ERCOT345Bus), if HB _(North345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, North345, y) = [](HBDF _(b, hb, North345) * RTLMP _(b, hb, North345, y)) HUBDF _(hb, North345) = IF(HB _(North345)=0, 0, 1 / HB _(North345)) 
QUOTE: HBDF _(b, hb, North345) = IF(B _(hb, North345)=0, 0, 1 / B _(hb, North345))
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e26 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, North row ($ per MWh, 2021 to 2025); these are Load Zone prices, not Hub prices · ocr copy line 1116, OCR page 29

BEFORE: …in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 
QUOTE: North $221.52 $77.30 $78.01 $30.42 $35.34
AFTER:  South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-co…

### e27 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, West row ($ per MWh, 2021 to 2025); Load Zone prices · ocr copy line 1118, OCR page 29

BEFORE: …hrough DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 
QUOTE: West $111.56 $66.62 $67.56 $35.88 $41.59
AFTER:  Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e2, e9): The North 345 kV Hub (North 345) is one of the Hubs defined in Protocol Section 3.5.2, composed of a listed set of 345 kV Hub Buses. [e1] A Hub is a designated Settlement Point made of a Hub Bus or group of Hub Buses with the price methodology set out in its definition. [e2] ERCOT's real-time price display lists the hub Settlement Point name HB_NORTH. [e9] The saved Protocol text does not itself use the name HB_NORTH.
- **How it works #1** (cites e12, e10, e11, e6) FLAG number-not-in-quote: 345 kV: The Hub Bus list. The Protocol table for the North 345 kV Hub starts with buses ANASW, CN345, WLSH, FMRVL and LPCCS and ends at number 75, WCPP, so the hub has 75 listed Hub Buses, each at 345 kV. [e12][e10] The West 345 kV Hub, by comparison, ends at number 17. [e11] ERCOT posts the list of Electrical Buses in each Hub on its website. [e6]
- **How it works #2** (cites e15, e19, e3): From bus to hub price in real time. In the real-time market a Hub Bus is an energized Electrical Bus or group of them, and the Hub Bus LMP is the simple average of the LMPs of its energized Electrical Buses; a fully de-energized Hub Bus drops out of the Hub price. [e15] The Hub LMP for a SCED interval is the arithmetic average of the Real-Time LMPs of the Hub Buses (except for the ERCOT Hub Average 345 kV Hub). [e19] The North 345 kV Hub Price is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval. [e3]
- **How it works #3** (cites e3): Day-ahead. The day-ahead price uses the aggregated Shift Factors of the Hub Buses for each hour of the DAM. [e3]
- **How it works #4** (cites e16, e17) FLAG number-not-in-quote: 345 kV: Fallbacks. If no Hub Bus has an energized component, the Protocol sets the North hub price equal to the ERCOT Bus Average 345 kV Hub price, in both the day-ahead formula and the real-time formula. [e16][e17]
- **How it works #5** (cites e18, e20): Floor. The real-time hub formula is written with a floor of -$251, applied as Max[-$251, (RTRDP + ...)], where RTRDP is the Real-Time Reliability Deployment Price for Energy. [e18] The Protocol states the same administrative floor of -$251/MWh for Real-Time Settlement Point Prices after adding the Reliability Deployment Price Adders for Energy. [e20]
- **Formula #1** (cites e18, e28, e3): The Protocol gives the real-time North hub price per 15-minute Settlement Interval as the floor (Max[-$251, ...]) applied to the Real-Time Reliability Deployment Price plus the sum over Hub Buses of the Hub Distribution Factor times the time-weighted Hub Bus price. [e18] The distribution factors are equal weights: the Hub Distribution Factor for a Hub Bus is one divided by the number of Hub Buses with an energized component, and the Hub Bus Distribution Factor for an Electrical Bus is one divided by the number of energized Electrical Buses in the Hub Bus (the Protocol writes the Hub Bus Distribution Factor as IF(B=0, 0, 1/B)). [e28] The equal weighting is what "simple average" means in the Protocol sentence. [e3]
- **ERCOT context #1** (cites e5, e21, e9): North 345 is one of four hubs whose prices are averaged into the ERCOT Hub Average 345 kV Hub price (the others are South, Houston and West); the Panhandle 345 kV Hub is excluded. [e5] The ERCOT Bus Average 345 kV Hub is built from all the Hub Buses of those same four hubs, again excluding Panhandle. [e21] ERCOT's display shows both as Settlement Points, HB_BUSAVG and HB_HUBAVG, next to HB_NORTH. [e9]
- **ERCOT context #2** (cites e22, e24, e23) FLAG number-not-in-quote: 345 kV, 2026: Exchange contracts: ICE lists monthly cash-settled ERCOT North 345KV Real-Time contracts, peak and off-peak. Their reference price is the SPP published by ERCOT for the North 345 kV Hub real-time. [e22][e24] The peak contract's specified price is the average of SPPs for all hours ending 0700 to 2200 CPT (as stated in the ICE document dated November 18, 2026). [e23]
- **ERCOT context #3** (cites e26, e27, e19, e25) FLAG number-not-in-quote: 2021, 2022, 2023, 2024: Price levels: the saved IMM tables give Load Zone prices, not Hub prices. The IMM's Table 1 shows North zone annual average real-time prices of $221.52 (2021), $77.30 (2022), $78.01 (2023), $30.42 (2024) and $35.34 (2025) per MWh, against West at $111.56, $66.62, $67.56, $35.88 and $41.59. [e26][e27] Those are load-weighted zone prices, so they should not be read as HB_NORTH levels. [e19] In 2025 the IMM named the North zone, where ERCOT used significant RUC commitments to manage congestion, as one driver of the 26% rise in day-ahead congestion. [e25]
- **Timeline #1** (cites e6, e13): - The Hub definition is fixed by amendment: hubs may only be created by amending Section 3.5.2, and a defined Hub may not be modified except as its definition explicitly allows. [e6][e13]
- **Timeline #2** (cites e14): - Temporary bus outages: ERCOT gives notice and excludes the disconnected Electrical Bus from the Hub Bus price calculation. [e14]
- **Timeline #3** (cites e14): - Permanent removal of a Hub Bus from the grid requires ERCOT to file an NPRR revising the Hub definition. [e14]
- **Key facts #1** (cites e1, e10) FLAG number-not-in-quote: 3.5, 2.1: - The North 345 kV Hub is defined in Protocol Section 3.5.2.1 and lists 75 Hub Buses. [e1][e10]
- **Key facts #3** (cites e20): - The Real-Time Settlement Point Price floor is -$251/MWh, applied after adding the Reliability Deployment Price Adders. [e20]
- **Key facts #4** (cites e5): - It is one of four prices in the ERCOT Hub Average 345 kV Hub price; Panhandle is excluded. [e5]
- **Key facts #5** (cites e7, e13, e14) FLAG number-not-in-quote: 3.5: - Definition language: np-02 says Hub Bus lists and methods can never be modified, while np-03 Section 3.5.1 says a Hub may not be modified except as its definition explicitly describes, with notice and NPRR steps for bus changes. [e7][e13][e14]
- **Key facts #6** (cites e9): - ERCOT's real-time price display lists HB_NORTH. [e9]
- **Say it like this #1** (cites e3, e10, e8, e19): HB_NORTH is the price of a fixed list of 75 north 345 kV buses, an equal-weighted average of Hub Bus prices in real time. It is a different kind of Settlement Point from the North Load Zone, which is weighted by Load. [e3][e10][e8][e19]
- **Common confusion #1** (cites e2, e3, e8, e19): - North Hub versus North Load Zone: the Hub is a Settlement Point defined by a fixed Hub Bus list and an unweighted average, and a Load Zone is a separate kind of Settlement Point weighted by Load. [e2][e3][e8][e19]
- **Common confusion #2** (cites e5, e21, e9): - North Hub versus the ERCOT hub averages: HB_HUBAVG is a separate Hub that averages four hub prices including North, and HB_BUSAVG is built from all the Hub Buses of those four hubs. [e5][e21][e9]
- **Common confusion #3** (cites e7, e14) FLAG number-not-in-quote: 3.5: - "Can never be modified" (np-02) is the short form; the operating rules in np-03 Section 3.5.1 describe bus additions, temporary exclusions and an NPRR route for permanent bus removal. [e7][e14]
- **Common confusion #4** (cites e26): - IMM "North zone" figures are zone numbers, not HB_NORTH. [e26]
- **Questions #2** (cites e3, e18, e20): As the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval, across each Hub Bus in the Hub, with the -$251 floor applied after the reliability deployment price. [e3][e18][e20]
- **Questions #4** (cites e7, e13, e14): np-02 says the definition can never be modified. [e7] np-03 qualifies this: a Hub may not be modified except as its definition explicitly describes, ERCOT excludes temporarily disconnected buses, and a permanent bus removal requires an NPRR. [e13][e14]
- **Questions #6** (cites e2, e3): The Protocol defines the Hub as a Hub Bus or group of Hub Buses with a stated price methodology, and the North hub price is an equal-weighted average of its Hub Bus prices. [e2][e3]
- **Questions #8** (cites e16, e17) FLAG number-not-in-quote: 345 kV: The Protocol sets the North hub price equal to the ERCOT Bus Average 345 kV Hub price, in both the day-ahead and real-time formulas. [e16][e17]
- **Questions #10** (cites e22, e24) FLAG number-not-in-quote: 345 kV: ICE North 345KV real-time contracts reference ERCOT's published real-time price for the North 345 kV Hub, cash settled monthly. [e22][e24]
- **Link to trading-hub** (cites e1): is-a Trading Hubs: The North 345 kV Hub is one of the defined Hubs. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is a kind of Settlement Point. [e2]
- **Link to hb-west** (cites e3, e4, e10, e11): contrasts-with HB_WEST (West Hub): The West 345 kV Hub is defined the same way but over a different set of buses (17 buses against 75 for North). [e3][e4][e10][e11]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): The hub price is the Settlement Point Price at the Hub. [e3]
- **Link to load-zone** (cites e8, e19): contrasts-with Load Zone: A Load Zone price is a Load-weighted average of bus LMPs, while a Hub price is an unweighted average of Hub Bus prices. [e8][e19]
- **Link to block-products** (cites e22, e23) FLAG number-not-in-quote: 345 kV: used-in Block Products (5x16, 2x16, 7x8, ATC): ICE lists monthly peak and off-peak ERCOT North 345KV real-time contracts that settle on the ERCOT-published price for the North 345 kV Hub. [e22][e23]
- **Link to exchanges-ice-nodal** (cites e22, e24): used-in ICE & Nodal Exchange: The ICE North 345KV contracts are cash settled futures referencing ERCOT's published hub price. [e22][e24]
- **Link to lmp** (cites e3, e15): related LMP (Locational Marginal Price): The Hub price averages Hub Bus prices, which are averages of bus LMPs. [e3][e15]
- **Link to shift-factor** (cites e3): related Shift Factors: The day-ahead hub price uses aggregated Shift Factors of the Hub Buses. [e3]
- **Link to basis-risk** (cites e2, e8): related Basis Risk: A position settled at a node or load zone against a hub price carries a price difference between the two Settlement Points. [e2][e8]

