# Audit packet: Scenario: West Negative While North Spikes (sc-west-negative-north-spike)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Transmission Congestion · text copy line 853

BEFORE: …awn from the network determine the power flows. When flow over a transmission facility reaches its limit, the market shifts generation to higher-cost units to alter the network flows and serve load without exceeding the limit. Hence, congestion prevents the lowest-cost generators from serving load. 
QUOTE: When transmission congestion occurs, differences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or "node" on the network.
AFTER:  These differences in nodal prices provide efficient economic signals for generators and consumers to produce and consume at different locations. Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial ri…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of System Lambda · text copy line 3094

BEFORE: …ng depending on its settings. Synchroscope A piece of equipment that is used to monitor voltage waveforms from the two sides of an open circuit breaker or disconnect switch to ensure that the voltage magnitude, frequency and phase angle are close enough to close the breaker or switch. System Lambda 
QUOTE: The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT.
AFTER:  System Operator An Entity that supervises the collective Transmission Facilities of a power region. This Entity is charged with coordination of market transactions, system-wide transmission planning, and network reliability. T [Back to Top] TSP and DSP Metered Entity An Entity that meets the requir…

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Shift Factor · text copy line 2955

BEFORE: … RTM True-Up Statement. Shadow Price A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available. Shift Factor 
QUOTE: A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus.
AFTER:  Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource. Short-Term Wind Power Forecast (STWPF) An ERCOT produced hourly 50% prob…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained.
AFTER:  This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone. We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCO…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1704

BEFORE: …he trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. 
QUOTE: This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Market Operations, bullets on offers at or below $0 · text copy line 1955

BEFORE: …al changes in how the aggregate offer stacks are formulated. The figure shows: • 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average. • 
QUOTE: 35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits.
AFTER:  2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT gene…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …all Market Participants are described in the Operating Guides. 6.6 Settlement Calculations for the Real-Time Energy Operations 6.6.1 Real-Time Settlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. 
QUOTE: For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar · text copy line 2682 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: … these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network. ERCOT had 26 active GTCs in 2025, compared to 18 in 2021. 3. Captured Prices for Wind and Solar 
QUOTE: The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments.
AFTER:  Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the energy they produce. Figure 15: Average Captured Prices for Wind and Solar 2021-2025 !"#A%C#'(%)*+A#,'-A./#'M1')#A'2P45 !*" +,-./ !)" 0123 !(" !'" !&" !%" !$" !#" !" $"$# $"$$ $"$% $"$& …

### e10 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Generic Transmission Constraint (GTC) · text copy line 1142

BEFORE: …(GSU) Transformer in a station with generation where the voltage is transformed from the voltage level of the generator terminals to a higher voltage. If the higher voltage is at or above 60 kV, the GSU may also be referred to as a Main Power Transformer (MPT). Generic Transmission Constraint (GTC) 
QUOTE: A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT's powerflow and contingency analysis applications.
AFTER:  Generic Transmission Limit (GTL) The value of the transmission flow limit associated with a GTC. Generation To Be Dispatched (GTBD) A dynamically calculated system total generation MW requirement used by Security-Constrained Economic Dispatch (SCED) for resource dispatch, calculated every four seco…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Generic Transmission Constraints · text copy line 5193

BEFORE: …Elements. ERCOT uses GTCs to constrain flow between geographic areas to manage stability, voltage, and other constraints that its power flow and contingency analyses cannot model directly and that are based on offline studies (i.e., Real-Time Contingency Analysis (RTCA) will not indicate concerns). 
QUOTE: GTCs manage grid stability across geographic regions rather than enforce thermal transmission limits for specific transmission paths. They are especially relevant in areas with significant renewable generation, which are often far from load centers and can contribute to system stability concerns.
AFTER:  C. Day-Ahead Congestion The day-ahead market produces financially binding schedules for supply, demand, and point-topoint (PTP) transactions that reflect transmission system limits. When these limits bind, congestion increases dispatch costs and causes energy prices to vary across locations in the …

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5349

BEFORE: … !(%""" RST8 JVO8W /V;8W <VOT8VN Z;VTT>?VNS @AHBCAZBa34OS !D#" !D"" !C#" !D%#"" !D%""" !C%#"" !C"" !C%""" !A#" !A%#"" !A"" !A%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""#A%C'(")*+,-("C.A%#*C/MC1-%%-("+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 1. Violated Constraints 
QUOTE: The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit.
AFTER:  Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.A, Summary of Transmission Congestion Results in 2025 · text copy line 5090

BEFORE: …ch generator's energy offer curve and its corresponding impact on transmission constraints. This market dispatch produces a set of locational prices that vary across the network and congestion costs collected from participants. Key insights on transmission and congestion in ERCOT in 2025 include: • 
QUOTE: Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin.
AFTER:  • Real-time congestion was 7% higher in the RTM than in the DAM. This disparity is reasonable because forecast error persists for both load and renewable generation. • Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 12…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-3 summary · text copy line 9077

BEFORE: …ds while complying with HB 1500. We continue to recommend that ERCOT implement DRRS using the design principles outlined above. 2020-3: Reconfigure Load Zones to Reflect Prevailing Congestion Patterns Load zones are groups of load nodes in the ERCOT grid that experience similar congestion patterns. 
QUOTE: Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone.
AFTER:  By aggregating prices this way, the system shields loads from nodal price volatility and simplifies market settlements. Beyond simplifying settlements, load zone prices also provide important short- and long-term economic signals. When they accurately capture congestion patterns, they can inform co…

### e19 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 35 · heading above: 3.1 Congestion LMP Component

BEFORE: …e value applicable to all constraints, or may be values unique to subsets of the full constraint set. For the Power Balance constraint, the Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component 
QUOTE: The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line.
AFTER:  Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of El…

### e20 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 49 · heading above: 3.1 Congestion LMP Component

BEFORE: …ows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. 
QUOTE: Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive.
AFTER:  The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at …

### e21 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 51 · heading above: 3.1 Congestion LMP Component

BEFORE: …w Price for transmission line. Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. 
QUOTE: The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion.
AFTER:  Note that only marginal units (i.e. units that are able to move, not those dispatched at min/max dispatch limits to resolve other constraints or to provide energy to the system) can participate in resolving network congestion and determining the System Lambda for a particular iteration of SCED. The…

### e22 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P, Section 3.5.1 (supporting analysis) · text copy line 185 · heading above: 3.5.1 Generic Transmission Constraint Shadow Price Cap in SCED Supporting Analysis

BEFORE: …h a congestion component of $50,000/MWh from just this one constraint, and even higher if multiple constraints are binding. In contrast, with a $5,251/MW shadow price cap, the congestion component of the LMP of the node with a shift factor of -50% would be $2,625.50/MW for just this one constraint. 
QUOTE: The LMP at an individual node, hub or load zone can exceed the RTSWCAP in some circumstances, even ignoring the impacts of co-optimization of energy and Ancillary Services. This is most likely to occur when there are one or more irresolvable constraints on the system and when overall dispatchable supply on the system is tight.
AFTER:  Relatively speaking, it is more likely that individual node prices will exceed the RTSWCAP than hubs or load zones, but it is possible that hub or load zone prices could exceed the RTSWCAP. It is not possible in the nodal system to assign constraint shadow price caps and power balance penalty facto…

### e23 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints, 2025 shadow price caps · text copy line 5379

BEFORE: …t locations that affect the violated constraint. The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • 
QUOTE: ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW.
AFTER:  See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommen…

### e24 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4) · text copy line 189

BEFORE: …ture. The role of the LTSA is to guide near-term planning decisions by providing a longer-term view of system reliability and economic needs. The GRRA assesses the system needs based on the resiliency criteria. 4 Map Monitored Element of Constraint Congestion Rent* 1 Koch Tap - Vealmoor 138kV $211M 
QUOTE: Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M
AFTER:  5 Longshore Switch - Consavvy Switch 345kV $102M 6 Laredo VFT North - Las Cruces 138kV $64M 7 Bell County - Salado Switch 138kV $64M 8 Knapp - Scurry Chevron 138kV $57M 9 Haine Drive - La Palma 138kV $54M 10 Polecat Creek Switch - Wrage Ranch Pod 138kV $52M Outage Related? Planned and Forced Outage…

### e25 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.4, paragraph (2) · text copy line 3174 · heading above: 3.5.2.4 West 345 kV Hub (West 345)

BEFORE: … 345 WEST 6 FLCNS 345 WEST 7 GRSES 345 WEST 8 JCKSW 345 WEST 9 MDLNE 345 WEST 10 MOSSW 345 WEST 11 MGSES 345 WEST 12 DCTM 345 WEST 13 ODEHV 345 WEST 14 OKLA 345 WEST 15 REDCREEK 345 WEST 16 SWESW 345 WEST 17 TWINBU 345 WEST ------ ---------------------------------- ---------- ------------------ (2) 
QUOTE: The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub.
AFTER:  (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(West345) = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DAHUBSF _(West345, c) * DASP _(c)), if HBBC _(West345)≠0 DASPP _(West345) = DASPP _(ERCOT345Bus), if HBBC _(West345)=0 Where:…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub) · text copy line 3731 · heading above: 3.5.2.6 ERCOT Hub Average 345 kV Hub (ERCOT 345)

BEFORE: …45 kV Hub, the Houston 345 kV Hub, and the West 345 kV Hub. The ERCOT Hub Average 345 kV Hub price for Real-Time is the simple average of four prices from the applicable time period: the North 345 kV Hub price, the South 345 kV Hub price, the Houston 345 kV Hub price, and the West 345 kV Hub price. 
QUOTE: The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, formula for a Resource Node · text copy line 3705 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))
AFTER:  Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 39 (OCR), Chapter I.D.1, Production and Curtailment · text copy line 2525 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …f wind and solar curtailment due to congestion, which is particularly relevant for renewable generation as we describe in more detail later in this section. 1. Production and Curtailment Wind generation grew by only 2.9% in 2025, continuing a trend of relatively low wind-capacity growth since 2022. 
QUOTE: Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years.
AFTER:  In general, the economics of renewable generation have shifted in favor of solar development, as shown by the sharp increase in solar generation. 2025 State of the Market Report | 17 / / Demand and Supply in ERCOT Figure 13: Wind Production and Curtailment, 2021-2025 T,".5%8C'(")C*+,)#-.(,"C/CM#+.A…

### e29 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 43 (OCR), Chapter II, Zonal Energy Prices (2024 report) · text copy line 2556

BEFORE: …rough 2023. Moreover, the two highest zonal prices on average were in the West and the South for the first time since 2020. The higher prices in the West and South are caused by greater exposure to congestion compared to the North and Houston zones, a topic we explore more thoroughly in Chapter IV. 
QUOTE: The West had the highest number of prices below $0, largely due to high wind and solar output that could not be delivered because of transmission congestion, both within the zone and on export paths to other regions.
AFTER:  The West and South zones were tied for the greatest frequency of prices exceeding $200, driven by localized congestion within those zones. C. Shortage and Reliability Pricing The current ERCOT market design features two distinct price adders, the ORDC and the RDPA. This section summarizes the ratio…

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Transmission Congestion, intrazonal congestion (Figure 45) · text copy line 6021

BEFORE: …" !'(""" !C"" -./00N2/34 5/S07/3 8/.79 W/S79 ;407 !%"" !$"" !#"" !" #"'% #"') #"'C #"'* #"#" #"#' #"## #"#H #"#$ #"#, Figure 45 shows that a growing share of congestion costs materializes as intrazonal congestion costs. In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. 
QUOTE: The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. Congestion costs within the West increased by 27% between 2024 and 2025.
AFTER:  Next, we discuss a methodology to define load-zone boundaries based on geographic coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new load zones based on geographic coordinates and historical price data.47 W…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Executive Summary, net revenue bullets · text copy line 7333

BEFORE: … and demand-side participation. Without these signals, the market risks underinvestment in generation and transmission, which can lead to reliability challenges. The following are the key insights from this chapter: • Net revenues for natural gas generators varied significantly by location in 2025. 
QUOTE: A combustion turbine in the Houston zone could expect to earn roughly $59 per kW-year in net revenue, while the same CT could earn up to $177 per kW-year in the West zone. The price gap is driven by the import-constrained Permian Basin where congestion costs drive up prices in the West zone.
AFTER:  • The planning Cost of New Entry has received renewed attention in ERCOT because it may affect the market design options that ERCOT proposes to meet the reliability standard in 2029 as part of its 2026 assessment. In 2024, the PUCT approved a CONE of $140 per kW-year while leaving the legacy CONE o…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Resource Adequacy, net revenue by zone (Figure 55) · text copy line 7524

BEFORE: …ces). Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. 
QUOTE: The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region. As work on these projects concludes, we expect the gap between the two hubs to narrow again.
AFTER:  100 | 2025 State of the Market Report / / Resource Adequacy Figure 55: Net Revenues by Location 2025 $C! $%! #! "! /(W;F*H<(, =F0;<,. /(W;<,.9 />?T. S(TN0 -.*H S(FH5 8N,5N,9T. 4(0H5 /(N*HNT S(FH5.N*H 4(0H52.*H PN02.*H PN0.N*H /.,H.02.*H /.,H.0.N*H -.*H '(F*H(, -.*H ! '(F*H(, !"#$%"&"'(")$*+$,"-$./0…

### e33 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025), Key Takeaways · text copy line 9

BEFORE: …Report on Existing and Potential Electric System Constraints and Needs December 2025 PUBLIC Key Takeaways 
QUOTE: On April 24, 2025, the Public Utility Commission of Texas (PUCT) approved the three 765-kV import paths recommended in the Permian Basin Reliability Plan, introducing the new 765kV voltage class in the ERCOT Region.
AFTER:  The ERCOT Board of Directors endorsed the remaining portions of the 765-kV Strategic Transmission Expansion Plan (STEP) proposed in the 2024 Regional Transmission Plan (RTP) in December 2025. ERCOT and Transmission Service Providers (TSPs) that serve West Texas have been proactively positioning the…

### e34 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025), Planned Improvements (top 10 list; year shown beside each project) · text copy line 646

BEFORE: …illion of future transmission improvement projects that are expected to be put in service between 2026 and the end of 2031, according to the October 2025 TPIT*. 7 2027 9 2 5 3 2027 1 8 10 7 West Texas Infrastructure Project 2028 8 Texas A&M University System RELLIS Campus Reliability Project 2029 9 
QUOTE: Delaware Basin Stage 5 Project 2029 10 Permian Basin 765-kV Import Paths 2031
AFTER:  PUBLIC 6 4 *TPIT: Transmission Project Information Tracking 8 Transmission Investment Trend for ERCOT Region ERCOT Region nn al Transmission Cost o Service illion The total Transmission Cost of Service1 (TCOS), which is driven by investments in new infrastructure and system upgrades, has risen in r…

### e35 · `ercot-permian-geren-response` · tier 2 · ERCOT response to Rep. Geren on the Permian Basin plan (2026-08-12)
locator: ERCOT letter to Rep. Geren (Aug. 12, 2026), response 5, quoting Market Notice of Feb. 23, 2026 · text copy line 128

BEFORE: …nto the region. Please explain the transmission constraints ERCOT has identified and the reliability impacts ERCOT anticipates. ERCOT Response: On February 23, 2026, ERCOT issued a Market Notice titled "MA022326-01 Large Load Interconnection Studies update for Far West Texas region," which stated: "
QUOTE: ERCOT has identified an emerging reliability risk in Far West Texas of local load shed potentially being needed in the area during low wind conditions at night, especially during transmission and thermal resource outages.
AFTER:  This risk is expected to increase as additional loads are interconnected in this area." The primary time of concern will be high-load, low-wind nights, when the entire Far West region would depend on the limited thermal generation in the area together with the limited import capability of the exist…

### e36 · `ercot-permian-geren-response` · tier 2 · ERCOT response to Rep. Geren on the Permian Basin plan (2026-08-12)
locator: ERCOT letter to Rep. Geren (Aug. 12, 2026), response 5 · text copy line 131

BEFORE: …identified an emerging reliability risk in Far West Texas of local load shed potentially being needed in the area during low wind conditions at night, especially during transmission and thermal resource outages. This risk is expected to increase as additional loads are interconnected in this area." 
QUOTE: The primary time of concern will be high-load, low-wind nights, when the entire Far West region would depend on the limited thermal generation in the area together with the limited import capability of the existing transmission infrastructure.
AFTER:  During those conditions, the amount of power imported into the Permian Basin could result in damage to existing infrastructure if ERCOT does not order temporary load shed. 6. Finally, if one or more of the 765-kV transmission applications pending before the Public Utility Commission were denied or …

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.A, Summary of Transmission Congestion Results in 2025 · text copy line 5103

BEFORE: …where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin. • Real-time congestion was 7% higher in the RTM than in the DAM. This disparity is reasonable because forecast error persists for both load and renewable generation. • 
QUOTE: Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 1230 can partially explain this decline in constraint violations because it allows SCED to produce more expensive dispatch solutions to avoid violating these constraints.
AFTER:  • CRR auction revenues increased 6% in 2025, slower growth than the 14-32% annual growth rates from 2021 to 2024. Intrazonal CRRs drove the increase, whereas CRR revenue across zones decreased to its lowest value since 2021. • CRR profitability increased by 21% in 2025, reversing a multi-year decli…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.C, Day-Ahead Congestion · text copy line 5204

BEFORE: …s for load and intermittent renewable generation influence congestion in the day-ahead market. These factors shape how market participants hedge their positions before real time. Figure 36 shows how the day-ahead market values congestion and highlights the role of GTCs in managing system stability. 
QUOTE: It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost.
AFTER:  Figure 36 presents congestion values within and across zones, including congestion linked to GTCs. It shows that day-ahead congestion increased by 26% from 2024 to 2025, ending the recent trend of declining annual congestion cost. Congestion costs increased in all four zones, across zones, and for …

### e39 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.5.1, supporting analysis · text copy line 181 · heading above: 3.5.1 Generic Transmission Constraint Shadow Price Cap in SCED Supporting Analysis

BEFORE: …tor difference of the marginal units is as low as 5.35%. Figure 3 shows the maximum offer price difference of the marginal units that will be deployed to resolve congestion with each of the proposed shadow price cap values as a function of the shift factor difference of the marginal units. Figure 3 
QUOTE: For example, with a shift factor difference of the marginal units of just 2%, the maximum offer price difference of the marginal units that will be deployed to resolve the constraint is $56, $70, $90 and $105.02/MWh for constraint shadow price cap values of $2,800, $3,500, $4,500 and $5,251/MW, respectively.
AFTER:  Similarly, for with a shift factor difference of the marginal units of 60%, the maximum offer price difference of the marginal units that will be deployed to resolve the constraint is $1,680, $2,100, $2,700 and $3,150.60/MWh for constraint shadow price cap values of $2,800, $3,500, $4,500 and $5,25…

### e40 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4) · text copy line 183

BEFORE: … System up to 15 years into the future. The role of the LTSA is to guide near-term planning decisions by providing a longer-term view of system reliability and economic needs. The GRRA assesses the system needs based on the resiliency criteria. 4 Map Monitored Element of Constraint Congestion Rent* 
QUOTE: 1 Koch Tap - Vealmoor 138kV $211M Top 10 constraints on the ERCOT System
AFTER:  2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M 5 Longshore Switch - Consavvy Switch 345kV $102M 6 Laredo VFT North - Las Cruces 138kV $64M 7 Bell County - Salado Switch 138kV $64M…

### e41 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 2, Background Discussion · text copy line 25

BEFORE: …ne limit is decreased by one MW. The Shadow Price for the Power Balance constraint represents system costs for serving the last MW of load. The Power Balance Penalty can be either positive (if the system requires additional generation) or negative (if the system requires a reduction in generation). 
QUOTE: If a constraint is not binding, meaning the constraint has excess capability under the given system conditions, the Shadow Price of the constraint is $0.00/MWh. On the other hand, if the constraint is binding, meaning it is limiting because the system conditions are such that the constraint limit is exactly met by the SCED selected dispatch pattern, the constraint Shadow Price is a non-zero $/MW value and when the maximal Shadow Price (i.e. the Shadow Price cap) is reached the constraint will be violated without further increases in the constraint Shadow Price.
AFTER:  In the context of the SCED optimization, the Shadow Prices give rise to the application of a transmission penalty cost and a power balance penalty cost in the SCED objective function that results in an increase in the total system dispatch cost. On the other hand, the transmission network constrain…

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e3, e4, e12, e19, e21, e20): Every LMP has the same energy part. System Lambda is the cost of one more MWh at the reference bus and is the energy component of the LMP at every Settlement Point. [e3] A shift factor measures the flow on a transmission element from a unit injection at a bus. [e4] The shadow price of the constraint is the marginal cost of routing energy around it. [e12] Attachment P puts these together: a bus LMP is System Lambda minus the sum over congested lines of the bus's shift factor times the line's shadow price, and that congestion component can be positive or negative depending on the sign of the shift factors. [e19][e21] Shadow prices on congested lines are positive, and buses on one side of a line have negative shift factors while buses on the other side have positive ones. [e20]
- **How it works #3** (cites e5, e6, e10, e11, e23, e40, e24): The West is a split zone. The Panhandle has a lot of wind and solar but cannot export all of it, while the Permian Basin has fast-growing demand and cannot import enough. [e5] That is why the West zone had both the most negative-price intervals and the most price spikes of any load zone in 2025. [e6] Generic Transmission Constraints, which limit flows between areas for stability and voltage reasons, matter most in renewable-heavy areas far from load; ERCOT treats them as base-case stability constraints with a $5,251 per MW shadow price cap. [e10][e11][e23] Among ERCOT's top constraints by real-time congestion rent from October 2024 to September 2025, the West Texas Export Interface ranked fourth at $127 million, behind Koch Tap - Vealmoor 138kV ($211 million), Hargrove - Twin Buttes 138kV and Odessa EHV Switch Yarbrough Sub 138kV. [e40][e24]
- **How it works #4** (cites e7, e29, e8): Prices go negative because many renewables are paid to produce even when prices are below zero. In 2025, 35% of real-time capacity was offered at or below $0, mainly wind and solar, many of which receive federal production tax credits. [e7] For 2024 the IMM said the West's below-zero prices came largely from wind and solar output that could not be delivered because of congestion within the zone and on export paths. [e29] Real-time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]
- **How it works #5** (cites e25, e26): Hubs average the split. The West 345 kV Hub price in real time is the simple average of the time-weighted Hub Bus prices, and the Panhandle 345 kV Hub is a separate hub that is not included in the ERCOT Hub Average 345 kV Hub price. [e25][e26]
- **Formula #1** (cites e19): - Bus LMP = System Lambda - sum over congested lines of (shift factor of the bus on that line x shadow price of the line). [e19]
- **Formula #2** (cites e21, e20): - Congestion component = - sum of (shift factor x shadow price); its sign depends on which side of the constraint the bus sits. [e21][e20]
- **Formula #3** (cites e27): - Resource Node Settlement Point Price in real time: RTSPP = Max(-$251, weighted sum over SCED intervals of (LMP + Reliability Deployment Price Adder)), with RNWF the interval weighting. [e27]
- **Formula #4** (cites e38): - The IMM values day-ahead congestion as flow over each constraint times its shadow price. [e38]
- **Key facts #4** (cites e13, e30): - Day-ahead congestion rose 26% in 2025, driven by the North zone (with heavy RUC use for congestion) and the West zone; congestion costs within the West rose 27% from 2024 to 2025. [e13][e30]
- **Key facts #5** (cites e28): - About 4.7% of wind generation was curtailed in 2025. [e28]
- **Key facts #6** (cites e23) FLAG number-not-in-quote: 2025: - 2025 shadow price cap for GTCs (treated as base-case stability constraints): $5,251 per MW. [e23]
- **Key facts #7** (cites e37): - Violated constraint hours fell to 64 constraint-hours in 2025, the lowest ever, partly because of NPRR1230. [e37]
- **Key facts #10** (cites e33, e34): - The PUCT approved three 765-kV Permian import paths on April 24, 2025; ERCOT's planned improvements list shows the Permian Basin 765-kV Import Paths for 2031. [e33][e34]
- **Scenarios #2** (cites e3, e19, e21, e12): - Start from the LMP build-up. System Lambda is the energy component of the LMP at each Settlement Point, and each bus adds its own congestion component: minus the sum of shift factor times shadow price over binding constraints. [e3][e19][e21] The shadow price of the binding constraint is the marginal cost of redirecting flow around it. [e12]
- **Scenarios #3** (cites e5, e9, e24): - The binding limit is likely on the export path out of the Panhandle. Too much wind and solar there cannot reach load, so local prices fall and output gets curtailed. [e5][e9] The West Texas Export Interface was among ERCOT's top-ranked constraints by congestion rent from October 2024 to September 2025. [e24]
- **Scenarios #7** (cites e10, e11, e23): - A GTC may be the binding limit rather than one thermal line, since GTCs are used for stability limits between areas with a lot of renewables; its shadow price is capped at $5,251 per MW. [e10][e11][e23]
- **Scenarios #8** (cites e25, e26): - Why HB_WEST can be negative too: it is a simple average of its Hub Bus prices, so it falls when enough of its buses sit on the export side; the Panhandle hub is a separate hub. [e25][e26]
- **Scenarios #13** (cites e35): - The constraint flips to the import side: ERCOT has flagged a risk of local load shed in Far West Texas during low wind conditions at night, especially with transmission and thermal outages. [e35]
- **Scenarios #14** (cites e36): - ERCOT says the main time of concern is high-load, low-wind nights, when Far West depends on limited local thermal generation and the limited import capability of existing transmission. [e36]
- **Scenarios #15** (cites e31) FLAG number-not-in-quote: 2025: - The price signal is visible in net revenue: the IMM estimates a combustion turbine could earn up to $177 per kW-year in the West zone in 2025 against about $59 in Houston, driven by the import-constrained Permian Basin. [e31]
- **Scenarios #17** (cites e33, e34, e32): - What should narrow it: the PUCT approved three 765-kV Permian import paths in April 2025, listed by ERCOT for 2031, and the IMM expects the price gap between the hubs to narrow as projects conclude. [e33][e34][e32]
- **Questions #10** (cites e22, e19): Because the congestion component adds to System Lambda. ERCOT's Attachment P says an LMP at a node, hub or load zone can exceed the RTSWCAP, most likely when one or more constraints are irresolvable and dispatchable supply is tight. [e22][e19]
- **Questions #12** (cites e41, e39, e37): The cap sets the price: once the Shadow Price cap is reached, the constraint is violated without further increases in its Shadow Price. [e41] Attachment P shows how much that limits dispatch: with a 2% shift factor difference between marginal units, the most offer-price difference the market will pay to resolve the constraint is $105.02/MWh at a $5,251 cap. [e39] Violations fell to 64 constraint-hours in 2025, which the IMM partly ties to NPRR1230. [e37]
- **Questions #14** (cites e21, e20): The congestion component is minus shift factor times shadow price, and buses on opposite sides of a congested line have shift factors of opposite sign, so one side is lifted and the other pushed down by the same constraint. [e21][e20] (Reasoning) A West-to-North spread position pays off only if your source and sink sit on opposite sides of the binding constraint in the direction you expect.
- **Questions #16** (cites e32, e33, e34): The IMM expects the West-Houston hub gap to narrow as transmission work in the Permian concludes, and the three 765-kV import paths approved in April 2025 are listed by ERCOT for 2031. [e32][e33][e34] (Reasoning) The Panhandle export side is a separate problem from the Permian import paths.
- **Common confusion #2** (cites e25, e26): (Guidance) HB_WEST is not the Panhandle hub: they are separate hubs, and the Panhandle hub is left out of the ERCOT Hub Average. [e25][e26]
- **Link to congestion** (cites e2): example-of Transmission Congestion: A West-North split is congestion showing up as different prices at different nodes. [e2]
- **Link to lmp** (cites e3): used-in LMP (Locational Marginal Price): System Lambda is the energy component of the LMP at each Settlement Point. [e3]
- **Link to shift-factor** (cites e4): used-in Shift Factors: A shift factor measures the flow on a transmission element due to a unit injection at a bus. [e4]
- **Link to hb-west** (cites e5): related HB_WEST (West Hub): The West zone holds both the export-constrained Panhandle and the import-constrained Permian Basin. [e5]
- **Link to hb-north** (cites e13): contrasts-with HB_NORTH (North Hub): The North zone was the other main driver of higher day-ahead congestion in 2025. [e13]
- **Link to negative-prices** (cites e6) FLAG number-not-in-quote: 2025: related Negative Prices: The West zone had the most negative-price intervals of any load zone in 2025. [e6]
- **Link to gtc** (cites e10, e11): related GTC (Generic Transmission Constraint): GTCs limit flows between regions and matter most in renewable-heavy areas. [e10][e11]
- **Link to shadow-price** (cites e12): measures Shadow Price: The shadow price of a constraint is the marginal cost of redirecting energy around a binding constraint. [e12]
- **Link to load-zone** (cites e15): related Load Zone: Loads are billed at the load zone price, a load-weighted average of nodal prices within the zone. [e15]
- **Link to permian-transmission** (cites e33, e34, e32): affects Permian Basin Load & 765 kV Plan: The PUCT approved three 765-kV Permian import paths on April 24, 2025, and ERCOT lists them for 2031; the IMM expects the West-Houston price gap to narrow as projects conclude. [e33][e34][e32]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) Check the posted binding constraints and shadow prices first, then confirm which side of the constraint each node sits on before calling a direction for the spread.
- (Scenarios) - Suppose (illustrative): System Lambda is $600/MWh and one constraint binds with a shadow price of $3,000 per MW. A North node with a shift factor of -0.10 gets +$300 and settles at $900; a Panhandle node with a shift factor of +0.2067 gets about -$620 and settles near -$20. Same energy price, opposite congestion signs.
- (Scenarios) - (Reasoning) A West position that profits from Panhandle negative prices can lose on the same day if the binding constraint moves to the Permian import side; the hub averages both.
- (Say it like this) (Guidance) The energy component of the price is the same at every ERCOT Settlement Point; what differs is congestion. When the Panhandle cannot export its wind, prices there can go negative while North pays for expensive local units, and the shadow price on the binding constraint tells you how wide that gap is.
- (Say it like this) (Guidance) One line for the formula: "Each node is System Lambda minus shift factor times shadow price, so the same binding constraint pushes one side up and the other side down."

