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

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1701

BEFORE: …eal-Time Energy Market Prices by Zone !"!# 'E)*H,-.*/M)N-OP-4)*-RST8 '9W;< P#=>?!% BCDNECE !"#$%$& cC*ET !(("%,( GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& 
QUOTE: Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone.
AFTER:  The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative pr…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1), formula · text copy line 3705 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))
AFTER:  Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1), variable table (y) · text copy line 3726 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …r intervalThe weight used in the Resource Node Settlement Point Price calculation for the portion of the SCED interval y within the Settlement Interval. TLMP _(y) second Duration of SCED interval per intervalThe duration of the portion of the SCED interval y within the Settlement Interval. y none 
QUOTE: A SCED interval in the 15-minute Settlement Interval. The summation is over the total number of SCED runs that cover the 15-minute Settlement Interval.
AFTER:  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (2) The Real-Time Settlement Point Price at the logical Resource Node for a Combined Cy…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1), variable table (RNWF) · text copy line 3722 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: … the Settlement Point for the SCED interval y. RTRDPA _(y) $/MWh Real-Time Reliability Deployment Price Adder for EnergyThe Real-Time price adder that captures the impact of reliability deployments on energy prices for the SCED interval y. RNWF _(y) none Resource Node Weighting Factor per interval
QUOTE: The weight used in the Resource Node Settlement Point Price calculation for the portion of the SCED interval y within the Settlement Interval.
AFTER:  TLMP _(y) second Duration of SCED interval per intervalThe duration of the portion of the SCED interval y within the Settlement Interval. y none A SCED interval in the 15-minute Settlement Interval. The summation is over the total number of SCED runs that cover the 15-minute Settlement Interval. -…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1), variable table (SEL) · text copy line 3854 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SEL _(b, y) | MW | State Estimator Load at bus per interval
QUOTE: The Load value from State Estimator, including a calculated net Load value at each Private Use Network and adjustments to account for Distribution Generation Resource (DGR) and Distribution Energy Storage Resource (DESR) injections and withdrawals that are settled at a Resource Node, excluding Wholesale Storage Load (WSL) and Non-WSL Energy Storage Resource (ESR) Charging Load, for Electrical Bus b in the Load Zone, for the SCED interval y.
AFTER:  | | | | | | | | +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 30 (OCR), Chapter I.D, Shortage and Reliability Pricing, 1. ORDC · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low.
AFTER:  In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, p…

### e19 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 30 (OCR), Chapter I.D, 1. ORDC · text copy line 1732

BEFORE: …cline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, particularly solar and ESRs, without a comparable increase in peak demand. As a result, there have been fewer instances of reserve shortages and non-zero prices produced by the ORDC. 
QUOTE: Overall, the ORDC contributed less than $0.02/MWh to the annual average real-time energy price.
AFTER:  Figure 5 summarizes the impact of the ORDC on real-time prices, showing the number of hours these mechanisms were active, their price impact during those hours, and their average impact across all hours of each year for 2021-2025. Figure 5: Impact of the ORDC on Real-Time Prices 9@?ABO:;C>.Ba=RNb O…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3.1, paragraph (1)(a)-(d) · text copy line 2276 · heading above: 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders

BEFORE: …e reliability of the ERCOT System. (17) The QSE representing an ESR may withdraw energy from the ERCOT System only when dispatched by SCED to do so. An ESR may telemeter a status of OUT only if the ESR is in Outage status. 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders (1) 
QUOTE: The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process;
AFTER:  (b) RMR Resources that are On-Line, including capacity secured to prevent an Emergency Condition pursuant to paragraph (4) of Section 6.5.1.1, ERCOT Control Area Authority; (c) Deployed Load Resources other than CLRs; (d) Deployed ERS; (e) Real-Time DC Tie imports during an EEA where the total adju…

### e21 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 31 (OCR), Chapter I.D, 2. RDPA · text copy line 1845

BEFORE: …ct true market conditions and reliability risks. 4 "Active" is defined as a settlement interval where the ORDC price was at least $0.01 per MWh. 8 | 2025 State of the Market Report / / Review of Real-Time Market Outcomes Figure 6 summarizes how often the RDPA was activated and its effect on prices. 
QUOTE: The RDPA was active 71% more hours in 2025 than in 2024. The main driver of this increase was the large increase in RUC commitments from 2024 to 2025, as shown in Table 7. Despite the increase in hours when the RDPA was $0.01/MWh or greater, its overall effect on prices remained modest at $0.41 per MWh for the year.
AFTER:  This indicates a lack of genuine scarcity conditions in 2025 that would have produced an RDPA of hundreds or thousands of dollars per MWh. Figure 6: Impact of the RDPA on Real-Time Prices (#)*%H*)*,-'!..#A'!6,*"#'789AW D(" @?AOBO:;C>.Ba=RNb O>7B@?AOBO:;C>.Ba=RNb ;<;= O>7B@?AOBOSSBa=RNb D"" ;<;; ;<;…

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter I.C, Table 1 · ocr copy line 1111, OCR page 29

BEFORE: …n differences in electricity prices between Load Zones. Table | lists the annual load-weighted average prices for each zone for 2021-2025. These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. 
QUOTE: Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59
AFTER:  Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-…

### e23 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter I.C, text under Table 1 · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraphs (4) and (5)(a),(c) · text copy line 436 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …, and failure of the market run to complete. (d) Inconsistency with the Protocols or Public Utility Commission of Texas (PUCT) Substantive Rules: Pricing errors may occur when specific circumstances result in prices that are in conflict with such Protocol language or the PUCT Substantive Rules. (5) 
QUOTE: For purposes of a price correction performed prior to 1600 on the second Business Day after the Operating Day, the impact of a price correction shall be considered significant, as that term is used in paragraph (4) above, for the Operating Day when: (a) The absolute value change to any single Real-Time Settlement Point Price at a Resource Node or Real-Time MCPC is greater than $0.05/MWh; (b) The price correction would require ERCOT to change more than 50 Real-Time Settlement Point Prices and/or Real-Time MCPCs; (c) The absolute value change to any Real-Time Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh; or (d) The estimated absolute total dollar impact for changes to Real-Time prices for energy metered is greater than $500.
AFTER:  (6) If it is determined that any Real-Time Settlement Point Prices, Settlement Point LMPs, Electrical Bus LMPs, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Ancillary Service, and/or…

### e25 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, paragraph (1) · text copy line 1412 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …ugh the ERCOT CRR registration system prior to the DAM. PTP Obligations acquired in DAM may not change ownership in the ERCOT CRR registration system after DAM execution. 7.9 CRR Settlements 7.9.1 Day-Ahead CRR Payments and Charges 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM (1) 
QUOTE: Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point.
AFTER:  (2) For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions. (3) The payment or charge to each CRR Owner for a given Operating Hour…

### e26 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (7) · text copy line 454 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …consistent with the Real-Time MCPCs, ignoring the Real-Time Reliability Deployment Price Adder for Ancillary Service, averaged over the 15-minute Settlement Interval, then ERCOT shall consider the relevant Settlement Interval(s) in accordance with Section 6.6.9, Emergency Operations Settlement. (7) 
QUOTE: All Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final at 1600 of the second Business Day after the Operating Day.
AFTER:  (a) However, after Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final, if ERCOT determines that prices qu…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (4) · text copy line 426 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …loyment Price Adders for Ancillary Service, for errors and if there are conditions that cause the price to be questionable, as soon as practicable, ERCOT shall notify all Market Participants that the Real-Time LMPs, Real-Time MCPCs, and Real-Time Settlement Point Prices are under investigation. (4) 
QUOTE: ERCOT shall correct prices for an Operating Day when accurate prices can be determined, the impact of the price correction is determined to be significant, and one of the following conditions has been met: a market solution is determined to be invalid, invalid prices are identified in an otherwise valid market solution, the Base Points or Ancillary Service awards received by Market Participants are inconsistent with the Base Points or Ancillary Service awards of a valid market solution, or the Security-Constrained Economic Dispatch (SCED) process experiences a failure as described in Section 6.5.9.2, Failure of the SCED Process.
AFTER:  The following are some reasons that may cause these conditions. (a) Data Input error: Missing, incomplete, stale, or incorrect versions of one or more data elements input to the market applications may result in an invalid market solution and/or prices. (b) Data Output error: These include: incorre…

### e28 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, ESR offers slide, note 1 · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable table (DASL) · text copy line 2788 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …------------------------------------------------- DASPP $/MWh Day-Ahead Settlement Point PriceThe DAM Settlement Point Price at the Load Zone, for the hour. DALMP _(b) $/MWh Day-Ahead Locational Marginal Price per busThe DAM LMP at Electrical Bus b for the hour. DASL $/MWh Day-Ahead System Lambda
QUOTE: The DAM Shadow Price for the system power balance constraint for the hour.
AFTER:  DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour. DASF _(pb, ,c) none Day-Ah…

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable table (DALZSF) · text copy line 2792 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …ASL $/MWh Day-Ahead System LambdaThe DAM Shadow Price for the system power balance constraint for the hour. DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone 
QUOTE: The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour.
AFTER:  DASF _(pb, ,c) none Day-Ahead Shift factor of the power flow busThe DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour. DADF _(pb, c) none Day-Ahead Distribution factor per power flow bus for a constraintThe Load distribution factor for …

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix G, RDPA (p. A-10) · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature.
AFTER:  The RDPA process now produces separate price adders for energy and each AS product. The real-time market is run in two instances: one based on realized operating conditions and one counterfactual, as if no reliability actions had been taken. The AS RDPA is the difference in MCPCs for each AS produc…

### e32 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1), formula (DC Tie Load Zone) · text copy line 3803 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …rice for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y) * SEL _(b, y)) / []SEL _(b, y) 
QUOTE: For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y)
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y)= TLMP _(y) / []TLMP _(y) (2) For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrate…

## Statements to check (new or changed since the last audit)

- **How it works #3** (cites e8, e10): Two protocol rules shape the real-time number after the LMP is known. First, an administrative price floor of -$251/MWh is applied after the Reliability Deployment Price Adders for Energy are added. [e8] Second, ERCOT assigns an LMP to de-energized Electrical Buses by heuristic rules applied in order: an LMP predetermined by ERCOT for that bus if there is one, otherwise (first) the average LMP of buses in the same station at the same voltage level. [e10]
- **Formula #1** (cites e13, e16, e5, e15): Real-time Resource Node price, per 15-minute Settlement Interval: RTSPP = Max (-$251, (sum over SCED intervals y of RNWF(y) x (RTLMP(y) + RTRDPA(y)))). [e13] RTLMP is the Real-Time LMP at the Settlement Point for SCED interval y, RTRDPA is the Reliability Deployment Price Adder for Energy for that interval, and RNWF is the weight for the portion of the SCED interval inside the Settlement Interval, equal to that portion's duration divided by the sum of durations. [e16][e5] The sum runs over all SCED runs covering the 15-minute interval. [e15]
- **Formula #2** (cites e6, e8, e17, e32): Real-time Load Zone price: the same -$251 floor applies to the time-weighted Load Zone LMP plus the reliability deployment price (RTRDP). [e6][e8] The Load Zone LMP for a SCED interval weights each bus LMP by State Estimator Load at that bus. [e6] That Load value includes a calculated net Load at each Private Use Network and DGR/DESR adjustments, and excludes Wholesale Storage Load and Non-WSL ESR charging Load. [e17] For a DC Tie Load Zone the Load Zone LMP is simply the bus LMP. [e32]
- **Formula #3** (cites e29, e30, e9): Day-ahead Load Zone price: built from Day-Ahead System Lambda (the DAM Shadow Price for the system power balance constraint) less constraint Shadow Prices times the Load Zone's aggregated Shift Factor for each binding constraint. [e29][e30][e9] The weights come from Load distribution factors over energized power flow buses. [e9]
- **ERCOT context #4** (cites e27, e24, e26): ERCOT corrects prices for an Operating Day only when accurate prices can be determined, the impact is significant and a listed condition (invalid solution, invalid prices, inconsistent Base Points or awards, or a SCED failure) is met. [e27] Before 1600 on the second Business Day after the Operating Day, a change is significant if, among other tests, any Resource Node price or MCPC changes by more than $0.05/MWh, any Load Zone or Hub price changes by more than $0.02/MWh, or more than 50 prices change. [e24] After that time prices are final, subject to Board review. [e26]
- **ERCOT context #6** (cites e20, e31, e11): The Reliability Deployment Price Adder counts RUC-committed Resources (except those whose QSEs opted out of RUC Settlement) among its deployment categories. [e20] The IMM says RTC replaced the ORDC adder with Ancillary Service Demand Curves, while the Reliability Deployment Price Adder remains with a new feature. [e31] Real-time shortage pricing now sits inside the energy price. [e11]
- **Timeline #1** (cites e18): - December 5, 2025: RTC went live, ending the ORDC price adder design (IMM). [e18]
- **Timeline #2** (cites e28) FLAG number-not-in-quote: 2026: - After RTC go-live, the System-Wide Offer Cap was reduced to $2000/MWh from $5000/MWh (ERCOT summer 2026 review). [e28]
- **Key facts #6** (cites e22): - Annual average real-time energy prices (IMM, load-weighted, excluding DC tie imports and exports): ERCOT $36.94/MWh in 2025, $32.41 in 2024, $73.28 in 2023; West $41.59 in 2025. [e22]
- **Key facts #7** (cites e19, e21): - 2025: the ORDC added under $0.02/MWh to the average real-time energy price, and the RDPA added $0.41/MWh. [e19][e21]
- **Key facts #8** (cites e26): - Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e26]
- **Questions #6** (cites e23, e12): The IMM says the West zone includes the export-constrained Panhandle and the import-constrained Permian Basin, which explains its many negative-price intervals and frequent spikes. [e23][e12]
- **Questions #8** (cites e21): It was active 71% more hours than in 2024, driven by more RUC commitments, but added only $0.41/MWh for the year, which the IMM reads as a lack of genuine scarcity. [e21]
- **Questions #10** (cites e27, e26): ERCOT corrects it only if accurate prices can be determined, the impact is significant and a listed condition is met; prices are final at 1600 on the second Business Day after the Operating Day, subject to Board review. [e27][e26]
- **Questions #12** (cites e25): The Day-Ahead Settlement Point Price difference between sink and source. [e25]
- **Example #1** (cites e13, e16) FLAG number-not-in-quote: $20, $50,, $30: Suppose a Resource Node has two SCED runs in a 15-minute interval: one covering 600 seconds at an LMP of $20 and one covering 300 seconds at $50, with no adder. The weights are 600/900 and 300/900, so the RTSPP is (2/3 x 20) + (1/3 x 50) = $30/MWh. [e13][e16]
- **Link to lmp** (cites e1): related LMP (Locational Marginal Price): The Settlement Point Price is calculated from LMP data. [e1]
- **Link to settlement-point** (cites e2): related Settlement Point: A Settlement Point is a Resource Node, Load Zone or Hub, and each has its own Settlement Point Price. [e2]
- **Link to resource-node** (cites e3, e5): related Resource Node: Resource Node prices are essentially LMPs, with a real-time adder in real time. [e3][e5]
- **Link to load-zone** (cites e6): related Load Zone: The real-time Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone. [e6]
- **Link to trading-hub** (cites e7): related Trading Hubs: Hub prices follow the methodology written into each Hub's definition. [e7]
- **Link to dam** (cites e3): related Day-Ahead Market (DAM): The Day-Ahead SPP is the DAM-side price. [e3]
- **Link to rtm** (cites e5): related Real-Time Market (RTM): The Real-Time SPP is the price for each 15-minute Settlement Interval. [e5]
- **Link to negative-prices** (cites e8): related Negative Prices: The real-time SPP has an administrative floor. [e8]
- **Link to sced** (cites e13): related SCED (Security-Constrained Economic Dispatch): Real-Time SPPs are built from the LMPs of every SCED run in the 15-minute interval. [e13]
- **Link to ordc** (cites e18, e19): related ORDC (Operating Reserve Demand Curve): Before RTC an ORDC adder was added to energy prices; the IMM measured it at under $0.02/MWh for 2025. [e18][e19]
- **Link to ruc** (cites e20): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC-committed Resources are among the deployments counted in the Reliability Deployment Price Adder. [e20]
- **Link to ptp-obligation** (cites e25): related PTP Obligation: A PTP Obligation settles on the DASPP difference between sink and source. [e25]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The SPP is the price that actually settles: it is built from LMPs but computed at a Resource Node, Load Zone or Hub, hourly in the day-ahead and per 15 minutes in real time. Generators see node prices, loads see zone averages, and hubs follow their own definitions.

