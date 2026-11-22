# Audit packet: Negative Prices (negative-prices)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh.
AFTER:  No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amoun…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(i), second step · text copy line 2240

BEFORE: …s, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. 
QUOTE: Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Energy Storage Resources chapter, ESR revenue and arbitrage · text copy line 3008

BEFORE: … arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high. The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. 
QUOTE: As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed.
AFTER:  ESR Net Injection of Power Figure 18 shows the growth in hourly net energy injections from ESRs from 2023 through 2025. A positive injection value indicates aggregate discharging to the grid, and a negative value indicates aggregate charging. The figure shows a dramatic year-by-year increase in ESR…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, section C, Zonal Energy Prices · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Market Operations, bullets on offers at or below $0 · text copy line 1955

BEFORE: …al changes in how the aggregate offer stacks are formulated. The figure shows: • 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average. • 
QUOTE: 35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits.
AFTER:  2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT gene…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, 2. Congestion Management by ESRs · text copy line 5435

BEFORE: … growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity. 2. Congestion Management by ESRs 
QUOTE: ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0.
AFTER:  Conversely, when increasing supply at a particular location can resolve congestion, ESRs can discharge and earn higher prices that reflect the value of serving load subject to binding transmission constraints. 2025 State of the Market Report | 63 / / Transmission Congestion and CRRs Figure 39 illus…

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table, last rows · text copy line 1671 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …ry Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh 
QUOTE: ESR -$250/MWh Other -$50/MWh
AFTER:  -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Un…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(ii), second step · text copy line 2242

BEFORE: …y-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC; (ii) 
QUOTE: Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  The offer portion of each Energy Bid/Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ettlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, 
QUOTE: an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), West 345 kV Hub real-time formula · text copy line 3239 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP _(West345) = Max [-$251, (RTRDP +
AFTER:  [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) *…

### e20 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 43 (OCR), Chapter II, Zonal Energy Prices (2024 report) · text copy line 2556

BEFORE: …rough 2023. Moreover, the two highest zonal prices on average were in the West and the South for the first time since 2020. The higher prices in the West and South are caused by greater exposure to congestion compared to the North and Houston zones, a topic we explore more thoroughly in Chapter IV. 
QUOTE: The West had the highest number of prices below $0, largely due to high wind and solar output that could not be delivered because of transmission congestion, both within the zone and on export paths to other regions.
AFTER:  The West and South zones were tied for the greatest frequency of prices exceeding $200, driven by localized congestion within those zones. C. Shortage and Reliability Pricing The current ERCOT market design features two distinct price adders, the ORDC and the RDPA. This section summarizes the ratio…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (3) and (4), West 345 kV Hub formulas (same floor in each Hub definition) · text copy line 3243 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …-------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: RTSPP _(West345) = Max [-$251, (RTRDP + [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 
QUOTE: RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) * RTLMP _(b, hb, West345, y)) HUBDF _(hb, West345) = IF(HB _(West345)=0, 0, 1 / HB _(West345)) HBDF _(b, hb, West345) = IF(B _(hb, West345)=0, 0, 1 / B _(hb, West345)) …

### e28 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 39 (OCR), Chapter I.D.1, Production and Curtailment · text copy line 2525 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …f wind and solar curtailment due to congestion, which is particularly relevant for renewable generation as we describe in more detail later in this section. 1. Production and Curtailment Wind generation grew by only 2.9% in 2025, continuing a trend of relatively low wind-capacity growth since 2022. 
QUOTE: Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years.
AFTER:  In general, the economics of renewable generation have shifted in favor of solar development, as shown by the sharp increase in solar generation. 2025 State of the Market Report | 17 / / Demand and Supply in ERCOT Figure 13: Wind Production and Curtailment, 2021-2025 T,".5%8C'(")C*+,)#-.(,"C/CM#+.A…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 40 (OCR), Chapter I.D.1, Production and Curtailment · text copy line 2590 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …5 "!"# ! C D E %" FG+ ,J. /GM NOM /G3 F4+ F45 N4S 7JO 89W ;<= >J9 %# @A+BCaJ+JMGWA<+ bcWAdGWJBCe4MWGA5dJ+W "!"% "!"" "!"C "!"? "!"# ! "# #! A# %!! %"# !""#A%C'(")C*+,)#-.(,"C/CM#+.A(%12".CP4'56 In contrast to the relatively low growth in wind generation, solar generation grew by almost 49% in 2025. 
QUOTE: Roughly 6% of solar generation was curtailed in 2025, similar to 2024 levels.
AFTER:  One explanation for this relatively low curtailment is that solar projects can be sited closer to load and are less prone to congestion than wind resources sited in areas with the highest wind potential. Figure 14: Solar Production and Curtailment, 2021-2025 8("-S%9C'(%A)C*)(+#,-.("C/CM#)-A.%12"-CP…

## Statements to check (new or changed since the last audit)

- **Link to lmp** (cites e6, e7): related LMP (Locational Marginal Price): The IMM reports negative real-time prices in midday solar hours and in the West zone. [e6][e7]
- **Link to tax-credits-recs** (cites e8): causes PTC / ITC & RECs: Federal production tax credits keep many wind and solar resources willing to produce when prices are negative. [e8]
- **Link to congestion** (cites e7, e9) FLAG number-not-in-quote: 2025: related Transmission Congestion: The West zone, which includes export-constrained Panhandle wind and solar, had the most negative-price intervals in 2025, and batteries can often charge at prices below $0 when added load resolves congestion. [e7][e9]
- **Link to battery-revenue-stack** (cites e6): related Battery Revenue Stack: Midday negative prices let batteries charge cheaply or be paid to consume. [e6]
- **Link to offer-cap** (cites e1): contrasts-with Offer Caps (HCAP / LCAP / SWCAP): The offer cap limits prices on the high side, while the offer floor of -$250 per MWh limits offers on the low side. [e1]
- **Link to hb-west** (cites e20, e18, e26) FLAG number-not-in-quote: 345 kV: related HB_WEST (West Hub): The IMM's negative-price findings are about the West zone, and ERCOT also settles a West 345 kV Hub price with the same -$251 floor in its formula. [e20][e18][e26]
- **Link to load-zone** (cites e20, e7): related Load Zone: The West load zone combines the curtailed Panhandle and the import-constrained Permian Basin. [e20][e7]
- **Link to wind-generation** (cites e28): related Wind Generation: The IMM reports roughly 4.7% of wind generation curtailed in 2025. [e28]
- **Link to solar-generation** (cites e29, e6): related Solar Generation: The IMM reports roughly 6% of solar generation curtailed in 2025, and solar surges drive midday price drops. [e29][e6]
- **Link to spp** (cites e16): related SPP (Settlement Point Price): Real-Time Settlement Point Prices have an administrative floor of -$251/MWh. [e16]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): SCED Step 2 bounds offers at the lesser of the Reference LMP or the Mitigated Offer Floor. [e4]
- **Link to energy-storage-resource** (cites e12, e14): related Energy Storage Resource (ESR): The ESR Mitigated Offer Floor is -$250/MWh and ESR bid/offer curves are bounded the same way. [e12][e14]
- **Link to sc-west-negative-north-spike** (cites e7) FLAG number-not-in-quote: 2025: example-of Scenario: West Negative While North Spikes: The West zone had the most negative-price intervals in 2025 while also having the most price spikes. [e7]

