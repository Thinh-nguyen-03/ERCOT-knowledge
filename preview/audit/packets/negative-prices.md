# Audit packet: Negative Prices (negative-prices)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh.
AFTER:  No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amoun…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …----------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor.
AFTER:  The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh G…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table · text copy line 1667 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …-------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh 
QUOTE: Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh
AFTER:  ESR -$250/MWh Other -$50/MWh -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(i), second step · text copy line 2240

BEFORE: …s, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. 
QUOTE: Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, Implied Heat Rate · text copy line 1504

BEFORE: …t years, the prevalence and impact of price spikes, shown in Figure 4, elevated the implied marginal heat rate. Those spikes had a larger effect in 2023 and 2024 relative to fuel prices than in 2025. Over time, however, some factors have weakened the link between natural gas and electricity prices. 
QUOTE: The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market's implied heat rate.
AFTER:  Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market's implied heat rate. 3. Prices by Time of Day While Figure 1 shows monthly variation in the all-in cost of energy, Figure 3 illustrates how real-…

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

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Energy Storage Resources chapter, Figure 19 discussion · text copy line 3123

BEFORE: …r ESRs to Buy or Sell Energy 2021-2025 )#>>> :3;D>>> ;">>><;D>>> (#>>> ;">><;">>> ;><;">> D#>>> =>3;> C#>>> B#>>> $#>>> "#>>> > $>$" $>$$ $>$B $>$C *+,-./01+O1345560, $>$D $>$" $>$$ $>$B $>$C $>$D 7./01+O138+9, Figure 19 also shows the aggregated bid curves for ESRs to purchase energy for charging. 
QUOTE: Historically, ESRs could charge for free (i.e. at bids priced at $0 or less) during most charging periods, but this trend is changing rapidly. The share of bids priced at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025.
AFTER:  ESR capacity offering to buy energy far exceeds the capacity offering to sell. This likely reflects that ancillary services, such as up-reserves, commit much of the ESR discharging capacity and make it unavailable to SCED. F. Operating Reserve Margin In evaluating the current supply and demand cond…

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table, first rows · text copy line 1657 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- 
QUOTE: Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh
AFTER:  Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of…

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table, last rows · text copy line 1671 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …ry Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh 
QUOTE: ESR -$250/MWh Other -$50/MWh
AFTER:  -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Un…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(i), second step (sentence after the bounding rule) · text copy line 2240

BEFORE: …) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. 
QUOTE: In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;
AFTER:  (ii) Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. The offer portion of each Energy Bid/Offer Curve subject to mi…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(ii), second step · text copy line 2242

BEFORE: …y-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC; (ii) 
QUOTE: Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  The offer portion of each Energy Bid/Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to…

### e15 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (edition dated December 5, 2025), Section 4.1, The Power Balance Penalty · text copy line 295 · heading above: 4.1 The Power Balance Penalty

BEFORE: …nce Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. 
QUOTE: The SCED over-generation Power Balance Penalty Price is -$250/MWh.
AFTER:  Appendix 1: Day-Ahead Market Optimization Control Parameters The purpose of the Day-Ahead Market (DAM) is to economically co-optimize energy and Ancillary Service by simultaneously clearing offers and bids submitted by the Market Participants to maximize social welfare while observing the transmiss…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ettlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, 
QUOTE: an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, formula for a Resource Node · text copy line 3705 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))
AFTER:  Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (4), West 345 kV Hub real-time formula · text copy line 3239 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP _(West345) = Max [-$251, (RTRDP +
AFTER:  [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0 Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) *…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, formula for a Load Zone · text copy line 3797 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …d Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone. The Real-Time Settlement Point Price for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP)
AFTER:  For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y) * SEL _(b, y)) / []SEL _(b, y) For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y) Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y)= TLMP _(y) / []TLMP _(y) (2) For all Settlement calculations in whi…

### e20 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 43 (OCR), Chapter II, Zonal Energy Prices (2024 report) · text copy line 2556

BEFORE: …rough 2023. Moreover, the two highest zonal prices on average were in the West and the South for the first time since 2020. The higher prices in the West and South are caused by greater exposure to congestion compared to the North and Houston zones, a topic we explore more thoroughly in Chapter IV. 
QUOTE: The West had the highest number of prices below $0, largely due to high wind and solar output that could not be delivered because of transmission congestion, both within the zone and on export paths to other regions.
AFTER:  The West and South zones were tied for the greatest frequency of prices exceeding $200, driven by localized congestion within those zones. C. Shortage and Reliability Pricing The current ERCOT market design features two distinct price adders, the ORDC and the RDPA. This section summarizes the ratio…

### e21 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Appendix, Real-Time Price Analysis, page 158 (OCR) (2023 report) · text copy line 7739

BEFORE: …argely due to increases in solar generation. There was also a large increase in system lambda in 2023 relative to 2022, mainly due to the implementation of ECRS and additional reserves being inaccessible to SCED. Both of these factors contributed to the ORDC adders being lower in 2023 than in 2022. 
QUOTE: Negative ERCOT-wide prices may occur when wind is the marginal generation.
AFTER:  More installed wind generation and additional transmission infrastructure led to increased occurrences of negative prices over the past few years. In 2023, there were 139 hours with ERCOT-wide prices at or below zero, an increase from 110 hours in 2022. Figure A4 and Figure A5 present price duratio…

### e22 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Appendix, Real-Time Price Analysis, page 158 (OCR) (2023 report) · text copy line 7741

BEFORE: …hese factors contributed to the ORDC adders being lower in 2023 than in 2022. Negative ERCOT-wide prices may occur when wind is the marginal generation. More installed wind generation and additional transmission infrastructure led to increased occurrences of negative prices over the past few years. 
QUOTE: In 2023, there were 139 hours with ERCOT-wide prices at or below zero, an increase from 110 hours in 2022.
AFTER:  Figure A4 and Figure A5 present price duration curve and range data to demonstrate this effect. In 2023, there was a 61% increase in the duration of prices in the lower range ($0 - $50) and a broad decrease in the duration of prices across the $50 - $300 ranges when compared with 2022. Figure A4: E…

### e23 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: Appendix, Real-Time Price Analysis, page A-20, page 165 (OCR) (2022 report) · text copy line 6828

BEFORE: …nues have the effect of reducing the total cost to serve load borne by a QSE. Negative ERCOT-wide prices may occur when wind is the marginal generation. More installed wind generation and additional transmission infrastructure led to increased occurrences of negative prices over the past few years. 
QUOTE: In 2022, there were 110 hours with ERCOT-wide prices at or below zero, a decrease from the 176 hours in 2021.
AFTER:  Figure A3 and Figure A4 present price duration curve and range data to demonstrate this effect. In 2022, there was a clear increase in the duration of prices in the middle range from the previous two years ($50 - $100). A-20 | 2022 State of the Market Report / Appendix: Review of Real-Time Market O…

### e24 · `fed-pl-119-21` · tier 1 · Public Law 119-21 (2025 budget reconciliation act) (2025-07-04)
locator: Public Law 119-21 (July 4, 2025), Sec. 70512(a), amending 26 USC 45Y(d) (clean electricity production credit) · text copy line 11744

BEFORE: … (1) in paragraph (1), by striking ``The amount of'' and inserting ``Subject to paragraph (4), the amount of'', and (2) by striking paragraph (3) and inserting the following new paragraphs: ``(3) Applicable year.--For purposes of this subsection, the term `applicable year' means calendar year 2032. 
QUOTE: ``(4) Termination for wind and solar facilities.-- ``(A) In general.--This section shall not apply with respect to any applicable facility placed in service after December 31, 2027. ``(B) Applicable facility.--For purposes of this paragraph, the term `applicable facility' means a qualified facility which-- ``(i) uses wind to produce electricity
AFTER:  (within the meaning of such term as used in section 45(d)(1), as determined without regard to any requirement under such section with respect to the date on which construction of property begins), or ``(ii) uses solar energy to produce electricity (within the meaning of such term as used in section…

### e25 · `fed-pl-119-21` · tier 1 · Public Law 119-21 (2025 budget reconciliation act) (2025-07-04)
locator: Public Law 119-21, Sec. 70512(l)(4), effective date of the wind and solar termination · text copy line 13037

BEFORE: … (b)(1) shall apply to facilities for which construction begins after December 31, 2025. [[Page 139 STAT. 270]] (3) Penalty for substantial misstatements on certification provided by supplier.--The amendments made by subsection (k) shall apply to certifications provided after December 31, 2025. (4) 
QUOTE: Termination for wind and solar facilities.--The amendments made by subsection (a) shall apply to facilities the construction of which begins after the date which is 12 months after the date of enactment of this Act.
AFTER:  SEC. 70513. TERMINATION AND RESTRICTIONS ON CLEAN ELECTRICITY INVESTMENT CREDIT. (a) Termination for Wind and Solar Facilities.--Section 48E(e) is amended-- (1) in paragraph (1), by striking ``The amount of'' and inserting ``Subject to paragraph (4), the amount of'', and (2) by adding at the end th…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (3) and (4), West 345 kV Hub formulas (same floor in each Hub definition) · text copy line 3243 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: …-------------------------------- (4) The Real-Time Settlement Point Price of the Hub for a given 15-minute Settlement Interval is calculated as follows: RTSPP _(West345) = Max [-$251, (RTRDP + [](HUBDF _(hb, West345) * ([](RTHBP _(hb, West345, y) * TLMP _(y)) / ([]TLMP _(y)))))], if HB _(West345)≠0 
QUOTE: RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y) = TLMP _(y) / []TLMP _(y) RTHBP _(hb, West345, y) = [](HBDF _(b, hb, West345) * RTLMP _(b, hb, West345, y)) HUBDF _(hb, West345) = IF(HB _(West345)=0, 0, 1 / HB _(West345)) HBDF _(b, hb, West345) = IF(B _(hb, West345)=0, 0, 1 / B _(hb, West345)) …

### e27 · `np-14` · tier 1 · ERCOT Nodal Protocols, Section 14: State of Texas Renewable Energy Credit Trading Program (effective 2026-08-01)
locator: Section 14.3.2, Attributes of Renewable Energy Credits and Compliance Premiums, paragraph (1) · text copy line 127 · heading above: 14.3.2 Attributes of Renewable Energy Credits and Compliance Premiums

BEFORE: …ve must have the authority to represent and legally bind the REC Account Holder in all matters pertaining to the REC Trading Program. These individuals will be the contact persons for ERCOT on matters regarding a REC Account. 14.3.2 Attributes of Renewable Energy Credits and Compliance Premiums (1) 
QUOTE: A REC or Compliance Premium is a tradable instrument that represents all of the renewable attributes associated with one MWh of production from a certified renewable generator.
AFTER:  A REC or Compliance Premium may trade separately from energy. RECs are distributed to REC generators on a quarterly basis by ERCOT. The number of RECs distributed to a certified generator is based on physically metered MWh production. RECs may be traded, transferred, and retired. (2) The components…

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

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 93 (OCR), Chapter V.G.1, The Case for Updating the Load Zones in ERCOT · text copy line 5954

BEFORE: …years. Renewable development, especially solar, has expanded rapidly, while load growth patterns have become increasingly misaligned with the existing load zone map. For example, the Permian Basin, a major hub for oil and gas production, has become a high-cost, import-constrained load pocket, while 
QUOTE: the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation.
AFTER:  Placing both regions within the same load zone (West) produces inefficient prices that fail to reflect the underlying differences in system conditions. The growing divergence in load and generation patterns in ERCOT led us to Recommendation 2020-3, that ERCOT should update the load zone configurati…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 30 (OCR), Chapter II.D, Shortage and Reliability Pricing · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low.
AFTER:  In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, p…

## Statements to check

- **Definition #1** (cites e1, e5): A negative price is an energy price below $0 per MWh. ERCOT's rules allow Energy Offer Curves as low as -$250.00 per MWh, and the IMM reports hundreds of hours a year with prices at or below $0. [e1][e5]
- **How it works #1** (cites e6, e7, e21): In the IMM's account, negative prices show up when midday solar surges and in the West zone. [e6][e7] The IMM's earlier reports add that negative ERCOT-wide prices may occur when wind is the marginal generation. [e21]
- **How it works #2** (cites e1, e4, e14, e11, e3, e12, e2, e13): Where offers can go. An Energy Offer Curve must be within the range of -$250.00 per MWh and the applicable cap. [e1] In SCED Step 2, each Energy Offer Curve for On-Line Generation Resources is bounded at the lesser of the Step 1 Reference LMP or the appropriate Mitigated Offer Floor. [e4] ESR Energy Bid/Offer Curves are bounded the same way. [e14] The Mitigated Offer Floors are Resource-category specific: Nuclear and Hydro -$250/MWh, Coal and Lignite -$20/MWh, Combined Cycle -$20/MWh, Gas/Oil Steam and Combustion Turbine -$20/MWh, Qualifying Facility -$50/MWh, Wind -$100/MWh, PhotoVoltaic -$50/MWh, ESR -$250/MWh and Other -$50/MWh. [e11][e3][e12] Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM using a Mitigated Offer Floor. [e2] Offer curves that fail the constraint competitiveness test are also capped, at the greater of the Reference LMP at the Resource Node plus a small variable times the MOC curve value at LSL, or the appropriate MOC; that cap limits high offers, not negative ones. [e13]
- **How it works #3** (cites e16, e17, e19, e18, e15) FLAG number-not-in-quote: 2025, $1: Where prices can go. The administrative floor on Real-Time Settlement Point Prices is -$251/MWh, applied after adding the Real-Time Reliability Deployment Price Adders for Energy. [e16] The floor appears in the Resource Node, Load Zone and Hub formulas alike. [e17][e19][e18] Separately, Attachment P (edition dated December 5, 2025) sets the SCED over-generation Power Balance Penalty Price at -$250/MWh. [e15] The saved Protocol text does not explain why the settlement floor is $1 below those two numbers.
- **How it works #4** (cites e8): Why a generator would offer below zero. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025 (32% in 2024), mostly wind and solar that are incentivized to produce even when prices are negative because many receive federal production tax credits. [e8]
- **ERCOT context #1** (cites e7, e20, e30, e28, e29): Location matters. In 2025 the West zone, which holds export-constrained Panhandle wind and solar and import-constrained Permian load, had both the most negative-price intervals and the most price spikes of any load zone. [e7] The IMM's 2024 report said the West had the highest number of prices below $0, largely because wind and solar output could not be delivered through transmission congestion within the zone and on export paths. [e20] The IMM says the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation. [e30] The IMM reports roughly 4.7% of wind generation and roughly 6% of solar generation curtailed in 2025. [e28][e29]
- **ERCOT context #2** (cites e23, e22, e5) FLAG number-not-in-quote: 2024, 2025: Counts. ERCOT-wide hours at or below zero: 176 in 2021 and 110 in 2022 (IMM 2022 report), and 139 in 2023 (IMM 2023 report). [e23][e22] The saved sources give no ERCOT-wide count for 2024 or 2025; the IMM says only "hundreds of hours" with prices at or below $0, which also lowers the market's implied heat rate. [e5]
- **ERCOT context #3** (cites e17, e19, e18, e7): Resource Node versus Hub versus Zone. Because the floor applies in each Settlement Point formula and each is an average of bus LMPs (Hub equal-weighted, Load Zone Load-weighted), a very negative node price is diluted in a hub or zone price. [e17][e19][e18] The IMM's West-zone statements are about the zone, so a West wind generator's own node price can be lower than the zone price. [e7]
- **ERCOT context #4** (cites e24, e25, e27) FLAG number-not-in-quote: 2025: Why tax credits matter. Under Public Law 119-21, the 45Y credit does not apply to wind and solar applicable facilities placed in service after December 31, 2027, and the termination amendments apply to facilities whose construction begins more than 12 months after enactment (July 4, 2025). [e24][e25] See the tax-credits-recs topic for the detail. The saved Protocols describe RECs as tradable instruments representing the renewable attributes of one MWh from a certified renewable generator, which may trade separately from energy, but they do not say that RECs drive offer prices. [e27]
- **ERCOT context #5** (cites e6, e9, e10): Batteries are one way negative prices are being absorbed. As midday solar has surged, real-time prices have dropped, sometimes to negative levels, which lets ESRs charge cheaply or be paid to consume energy that would otherwise be curtailed. [e6] At congested locations ESRs can often charge at prices below $0. [e9] The cheap-charging era is fading: the share of ESR bids to buy at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025. [e10]
- **ERCOT context #6** (cites e32): Market design. The IMM says that with RTC, in service since December 5, 2025, the real-time market simultaneously procures energy and ancillary services (see the lmp topic); the saved sources do not describe RTC's effect on negative prices. [e32]
- **Key facts #1** (cites e1): - Energy Offer Curves may be offered down to -$250.00 per MWh. [e1]
- **Key facts #2** (cites e3, e11, e12): - Mitigated Offer Floors: Wind -$100/MWh, PV -$50/MWh, Coal/Lignite, CC and Gas/Oil Steam/CT -$20/MWh, QF and Other -$50/MWh, Nuclear/Hydro and ESR -$250/MWh. [e3][e11][e12]
- **Key facts #3** (cites e16): - Real-Time Settlement Point Price floor: -$251/MWh. [e16]
- **Key facts #4** (cites e15) FLAG number-not-in-quote: 2025: - SCED over-generation Power Balance Penalty Price: -$250/MWh (December 5, 2025 edition of Attachment P). [e15]
- **Key facts #5** (cites e8): - 35% of real-time generation capacity was offered at or below $0 in 2025 versus 32% in 2024. [e8]
- **Key facts #6** (cites e7) FLAG number-not-in-quote: 2025: - The West zone had the most negative-price intervals in 2025. [e7]
- **Key facts #7** (cites e23, e22): - ERCOT-wide hours at or below zero: 176 (2021), 110 (2022), 139 (2023). [e23][e22]
- **Key facts #8** (cites e10): - ESR bids priced at or below $0 fell from 82% (2023) to 71% (2024) to 56% (2025). [e10]
- **Say it like this #1** (cites e6, e7, e8): Negative prices happen when a lot of zero-cost wind and solar, often supported by tax credits, keeps producing at times and places where the grid cannot use it. They are most common in the West, and batteries can charge cheaply or be paid to consume when prices go negative. [e6][e7][e8]
- **Common confusion #1** (cites e1, e7, e2, e3, e16, e22) FLAG number-not-in-quote: 2021: A negative price is not an error or a free-energy event. It is a legitimate outcome of offers that go as low as -$250 per MWh, and it is local: the same interval can show negative prices in the West and spikes elsewhere. [e1][e7] The Mitigated Offer Floor table sets category-specific minimums that SCED can apply to offers. [e2][e3] The -$251 settlement floor is a floor on Real-Time Settlement Point Prices, not on offers. [e16][e1] Negative-price hours counted ERCOT-wide (2021 to 2023) are not the same as West-zone intervals. [e22][e7]
- **Questions #2** (cites e8): Many receive federal production tax credits, so they are incentivized to produce even when prices are negative. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025. [e8]
- **Questions #4** (cites e7): The West zone. The IMM says it includes the Panhandle, with abundant wind and solar but export-constrained, and the Permian Basin, with rapid demand growth and import-constrained, and this duality explains why it had both the most negative-price intervals and the most price spikes. [e7]
- **Questions #6** (cites e6, e10): They charge cheaply or even get paid to consume at negative prices. [e6] But the share of their charging bids at or below $0 has fallen to 56% in 2025. [e10]
- **Questions #8** (cites e1, e16, e15): Offers may be as low as -$250.00 per MWh, the Real-Time Settlement Point Price has an administrative floor of -$251/MWh after adding reliability deployment adders, and SCED's over-generation penalty is -$250/MWh. [e1][e16][e15]
- **Questions #10** (cites e3, e4): The Mitigated Offer Floor for wind is -$100/MWh and for PV -$50/MWh, and Step 2 bounds offer curves at the lesser of the Reference LMP or the floor. [e3][e4] (The saved sources do not say why those floor values were chosen.)
- **Questions #12** (cites e24, e25, e8): Public Law 119-21 ends the 45Y credit for wind and solar facilities placed in service after December 31, 2027 (with its own construction-start rule), so the incentive the IMM cites for negative offers would not be available to those later facilities. [e24][e25][e8]
- **Questions #14** (cites e18, e19, e30, e7): Hub and Load Zone prices are averages across many bus LMPs, so a node with severe congestion is averaged with others. [e18][e19] The IMM says the West Panhandle often sees curtailment while the Permian is import constrained. [e30][e7]
- **Link to lmp** (cites e6, e7): related LMP (Locational Marginal Price): The IMM reports negative real-time prices in midday solar hours and in the West zone. [e6][e7]
- **Link to tax-credits-recs** (cites e8): causes PTC / ITC & RECs: Federal production tax credits keep many wind and solar resources willing to produce when prices are negative. [e8]
- **Link to congestion** (cites e7, e9) FLAG number-not-in-quote: 2025: related Transmission Congestion: The West zone, which includes export-constrained Panhandle wind and solar, had the most negative-price intervals in 2025, and batteries can often charge at prices below $0 when added load resolves congestion. [e7][e9]
- **Link to battery-revenue-stack** (cites e6): related Battery Revenue Stack: Midday negative prices let batteries charge cheaply or be paid to consume. [e6]
- **Link to offer-cap** (cites e1): contrasts-with Offer Caps (HCAP / LCAP / SWCAP): The offer cap limits prices on the high side, while the offer floor of -$250 per MWh limits offers on the low side. [e1]
- **Link to hb-west** (cites e20, e26) FLAG number-not-in-quote: 345 kV, $251: related HB_WEST (West Hub): The IMM's negative-price findings are about the West zone, and ERCOT also settles a West 345 kV Hub price with the same -$251 floor in its formula. [e20][e26]
- **Link to load-zone** (cites e20, e7): related Load Zone: The West load zone combines the curtailed Panhandle and the import-constrained Permian Basin. [e20][e7]
- **Link to wind-generation** (cites e28): related Wind Generation: The IMM reports roughly 4.7% of wind generation curtailed in 2025. [e28]
- **Link to solar-generation** (cites e29, e6): related Solar Generation: The IMM reports roughly 6% of solar generation curtailed in 2025, and solar surges drive midday price drops. [e29][e6]
- **Link to spp** (cites e16): related SPP (Settlement Point Price): Real-Time Settlement Point Prices have an administrative floor of -$251/MWh. [e16]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): SCED Step 2 bounds offers at the lesser of the Reference LMP or the Mitigated Offer Floor. [e4]
- **Link to energy-storage-resource** (cites e12, e14): related Energy Storage Resource (ESR): The ESR Mitigated Offer Floor is -$250/MWh and ESR bid/offer curves are bounded the same way. [e12][e14]
- **Link to sc-west-negative-north-spike** (cites e7) FLAG number-not-in-quote: 2025: example-of Scenario: West Negative While North Spikes: The West zone had the most negative-price intervals in 2025 while also having the most price spikes. [e7]
