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

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

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

### e15 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Hub Bus, paragraph (2) (Real-Time Market) · text copy line 1214

BEFORE: …he de-energized Hub Bus. If power flow buses within a Hub Bus are de-energized under contingency, the disconnected MWs are redistributed among remaining energized power flow buses. This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2, Hub Definitions; or (2) 
QUOTE: In the Real-Time Market (RTM), an energized Electrical Bus or group of energized Electrical Buses defined as a single element in the Hub definition. The LMP of the Hub Bus is the simple average of the LMPs assigned to each energized Electrical Bus in the Hub Bus. If all Electrical Buses within a Hub Bus are de-energized, the LMP of the Hub does not include the de-energized Hub Bus.
AFTER:  This is used solely for calculating the prices of existing Hub Buses defined in Section 3.5.2. Hub LMP (see Locational Marginal Price) I [Back to Top] Independent Market Information System Registered Entity (IMRE) A Market Participant that has signed the Standard Form Market Participant Agreement (…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

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

### e29 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.4, paragraph (1), Load Zone LMPs · text copy line 3876 · heading above: 6.6.1.4 Load Zone LMPs

BEFORE: …6.1.3 Real-Time Settlement Point Price for a Hub (1) The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions. 6.6.1.4 Load Zone LMPs (1) The Load Zone LMPs shall be posted on the ERCOT website. 
QUOTE: The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone.
AFTER:  The Load Zone LMP for a Load Zone for a SCED interval is calculated as follows: LZLMP _(y) = [] (RTLMP _(b, y) * LZWF _(b, y)) For all Load Zones except DC Tie Load Zones: LZWF _(b, y) = SEL _(b, y) / ([]SEL _(b, y)) For a DC Tie Load Zone: LZWF _(b, y) = [Max (0.001, SEL _(b, y))] / [Max (0.001, S…

## Statements to check (new or changed since the last audit)

- **Link to trading-hub** (cites e1): is-a Trading Hubs: The North 345 kV Hub is one of the defined Hubs. [e1]
- **Link to settlement-point** (cites e2): is-a Settlement Point: A Hub is a kind of Settlement Point. [e2]
- **Link to hb-west** (cites e3, e4, e10, e11): contrasts-with HB_WEST (West Hub): The West 345 kV Hub is defined the same way but over a different set of buses (17 buses against 75 for North). [e3][e4][e10][e11]
- **Link to spp** (cites e3): determines SPP (Settlement Point Price): The hub price is the Settlement Point Price at the Hub. [e3]
- **Link to load-zone** (cites e29, e19): contrasts-with Load Zone: A Load Zone LMP is based on state-estimated Loads and bus LMPs, while a Hub price is an unweighted average of Hub Bus prices. [e29][e19]
- **Link to block-products** (cites e22, e23) FLAG number-not-in-quote: 345 kV: used-in Block Products (5x16, 2x16, 7x8, ATC): ICE lists monthly peak and off-peak ERCOT North 345KV real-time contracts that settle on the ERCOT-published price for the North 345 kV Hub. [e22][e23]
- **Link to exchanges-ice-nodal** (cites e22, e24): used-in ICE & Nodal Exchange: The ICE North 345KV contracts are cash settled futures referencing ERCOT's published hub price. [e22][e24]
- **Link to lmp** (cites e3, e15): related LMP (Locational Marginal Price): The Hub price averages Hub Bus prices, which are averages of bus LMPs. [e3][e15]
- **Link to shift-factor** (cites e3): related Shift Factors: The day-ahead hub price uses aggregated Shift Factors of the Hub Buses. [e3]
- **Link to basis-risk** (cites e2, e8): related Basis Risk: A position settled at a node or load zone against a hub price carries a price difference between the two Settlement Points. [e2][e8]

