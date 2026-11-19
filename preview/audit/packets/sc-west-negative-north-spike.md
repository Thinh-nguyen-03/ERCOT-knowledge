# Audit packet: Scenario: West Negative While North Spikes (sc-west-negative-north-spike)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Transmission Congestion · text copy line 847

BEFORE: …Both gains reversed a multi-year trend of declining profitability. The growing volume of PTP and CRR bids that the market must clear has prompted concerns about computing capabilities and whether the market needs new bid limits or fees to ensure that it can post on schedule. Transmission Congestion 
QUOTE: Transmission congestion arises when network power flows are restricted by limits on transmission facilities such as power lines and transformers. Network topology, i.e., the configuration of transmission facilities, and the locations where power is injected into or withdrawn from the network determine the power flows. When flow over a transmission facility reaches its limit, the market shifts generation to higher-cost units to alter the network flows and serve load without exceeding the limit. Hence, congestion prevents the lowest-cost generators from serving load.
AFTER:  When transmission congestion occurs, differences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or "node" on the network. These differences in nodal prices provide efficient economic signals for generators and consumers to …

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

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, 2. Congestion Management by ESRs · text copy line 5435

BEFORE: … growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity. 2. Congestion Management by ESRs 
QUOTE: ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0.
AFTER:  Conversely, when increasing supply at a particular location can resolve congestion, ESRs can discharge and earn higher prices that reflect the value of serving load subject to binding transmission constraints. 2025 State of the Market Report | 63 / / Transmission Congestion and CRRs Figure 39 illus…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-3 summary · text copy line 9077

BEFORE: …ds while complying with HB 1500. We continue to recommend that ERCOT implement DRRS using the design principles outlined above. 2020-3: Reconfigure Load Zones to Reflect Prevailing Congestion Patterns Load zones are groups of load nodes in the ERCOT grid that experience similar congestion patterns. 
QUOTE: Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone.
AFTER:  By aggregating prices this way, the system shields loads from nodal price volatility and simplifies market settlements. Beyond simplifying settlements, load zone prices also provide important short- and long-term economic signals. When they accurately capture congestion patterns, they can inform co…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-Time Market Outcomes bullets · text copy line 1249

BEFORE: …urred 40% less often in 2025 than in 2024. The evening ramp accounted for 30% of all price spikes. The sharp decrease in price spikes is likely due to the large increase in installed capacity in ERCOT, especially solar and storage resources. This concentration during the evening ramp is expected. • 
QUOTE: The West Zone continued to have the highest average energy price in 2025, excluding adders, at $41.59 per MWh, compared to the ERCOT average of $36.94 per MWh. This high price reflects import constraints in the Permian Basin and export constraints in the Panhandle.
AFTER:  • Price adders like the ORDC and the RDPA added $0.02 per MWh and $0.41 per MWh, respectively, to the price of energy. This extremely low price impact reflects the genuine lack of shortage conditions on the ERCOT grid throughout 2025. 2025 State of the Market Report | 1 / / Review of Real-Time Mark…

### e17 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide: Congestion Rent fell from summer 2025 to summer 2026, Key Takeaway · text copy line 1219

BEFORE: …line in the Plan from 86 to 66 GWh/day. 18 Congestion Rent fell from summer 2025 to summer 2026 200 180 160 140 $ Millions PUBLIC 120 100 80 60 40 20 0 Jun Jul Aug Jun Jul 2024 Aug 2025 North West South Houston Jun Jul Aug 2026 Cross Zone * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025.
AFTER:  19 RUC Effective Resource-Hours are higher in summer 2026, primarily to ensure sufficient Ancillary Services There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effe…

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 3. Prices by Time of Day · text copy line 1552

BEFORE: …%"" !$#" !$"" !#" !" $ % & ' # ( ) * + $" $$ $% $& $' $# $( $) $* $+ %" %$ %% %& %' 12PA'45S75& The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.). 
QUOTE: This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up.
AFTER:  The shift in peak prices to the peak net load hours demonstrates the growing impact of solar generation. During this solar down-ramp, ESRs increasingly provide energy, causing peak prices to occur later in the evening. Peak prices were relatively lower in 2025 than in 2024 because scarcity conditio…

## Statements to check

- **Definition #1** (cites e2): This scenario is about prices splitting by location when the grid cannot move cheap power to where it is needed: when congestion occurs, the different cost of delivering power to each location shows up as different energy prices at each node. [e2]
- **How it works #1** (cites e1): Congestion starts with a physical limit. When flow on a line or transformer reaches its limit, the market dispatches higher-cost units to change the flows, so the cheapest generators cannot serve all the load. [e1]
- **How it works #2** (cites e3, e4, e12): Every LMP has the same energy part. System Lambda is the cost of one more MWh at the reference bus and is the energy component of the LMP at every Settlement Point. [e3] A shift factor measures the flow on a transmission element from a unit injection at a bus. [e4] The shadow price of the constraint is the marginal cost of routing energy around it. [e12]
- **How it works #3** (cites e5, e6, e10, e11) FLAG number-not-in-quote: 2025: The West is a split zone. The Panhandle has a lot of wind and solar but cannot export all of it, while the Permian Basin has fast-growing demand and cannot import enough. [e5] That is why the West zone had both the most negative-price intervals and the most price spikes of any load zone in 2025. [e6] Generic Transmission Constraints, which limit flows between areas for stability and voltage reasons, matter most in renewable-heavy areas far from load. [e10][e11]
- **How it works #4** (cites e7, e8): Prices go negative because many renewables are paid to produce even when prices are below zero. In 2025, 35% of real-time capacity was offered at or below $0, mainly wind and solar, many of which receive federal production tax credits. [e7] Real-time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]
- **Key facts #1** (cites e7): - In 2025, 35% of real-time generation capacity was offered at or below $0, up from 32% in 2024. [e7]
- **Key facts #2** (cites e6) FLAG number-not-in-quote: 2025: - The West zone had the most negative-price intervals and the most price spikes of any load zone in 2025. [e6]
- **Key facts #3** (cites e16): - West zone average energy price in 2025, excluding adders, was $41.59/MWh against an ERCOT average of $36.94/MWh, reflecting Permian import limits and Panhandle export limits. [e16]
- **Key facts #4** (cites e13): - Day-ahead congestion rose 26% in 2025, driven by the North zone (with heavy RUC use for congestion) and the West zone. [e13]
- **Key facts #5** (cites e17): - Real-time congestion rent in summer 2026 was 10% lower than in summer 2025, partly because of RTC. [e17]
- **Key facts #6** (cites e8): - Real-time Settlement Point Prices cannot go below -$251/MWh. [e8]
- **Scenarios #2** (cites e3, e2, e12): - Start from the LMP build-up. System Lambda is the energy component of the LMP at each Settlement Point, and when congestion occurs the differing cost of delivering power shows up as different prices at each node. [e3][e2] The shadow price of the binding constraint is the marginal cost of redirecting flow around it. [e12]
- **Scenarios #3** (cites e5, e9): - The binding limit is likely on the export path out of the Panhandle. Too much wind and solar there cannot reach load, so local prices fall and output gets curtailed. [e5][e9]
- **Scenarios #4** (cites e18): - Evening timing: at the net load peak solar has ramped down while wind is beginning to ramp up. [e18] (Reasoning) That could put more Panhandle output against an export limit.
- **Scenarios #5** (cites e7, e8): - Prices go below zero because a large share of renewable capacity offers at or below $0, many of those units being backed by production tax credits. The floor is -$251/MWh. [e7][e8]
- **Scenarios #6** (cites e1, e13): - When congestion blocks lower-cost generators from serving load, the market shifts generation to higher-cost units. [e1] The IMM named the North zone, where ERCOT used significant RUC commitments to manage congestion, as a main driver of higher day-ahead congestion in 2025. [e13]
- **Scenarios #7** (cites e10, e11): - A GTC may be the binding limit rather than one thermal line, since GTCs are used for stability limits between areas with a lot of renewables. [e10][e11]
- **Scenarios #9** (cites e14): - Batteries behind the constraint can help: when added load relieves congestion, ESRs often charge at prices below $0. [e14]
- **Questions #2** (cites e5, e6): It contains two different load pockets: the export-limited Panhandle, rich in renewables, and the import-limited Permian Basin with fast-growing demand. [e5][e6]
- **Questions #4** (cites e15): Loads pay the load zone price, which is a load-weighted average of the zone's nodal prices, so a Panhandle-negative and Permian-high split gets averaged. [e15]
- **Questions #6** (cites e17): ERCOT reported that real-time congestion rent in summer 2026 was 10% below summer 2025 and said RTC played a role. [e17]
- **Questions #8** (cites e14, e15): Batteries, which can act as both supply and demand and can often charge at prices below $0 when added load at a location resolves congestion. [e14] (Guidance) Generators settle at their own nodal prices, so those at negative-priced West nodes receive the lower price. [e15]
- **Common confusion #1** (cites e5): (Guidance) A negative West price does not by itself mean the whole system is oversupplied; the IMM describes the Panhandle as export-constrained. [e5] Also, HB_WEST and a Panhandle node are not the same thing: the zone also includes the Permian, where prices can be high. [e5]
- **Link to congestion** (cites e2): example-of Transmission Congestion: A West-North split is congestion showing up as different prices at different nodes. [e2]
- **Link to lmp** (cites e3): used-in LMP (Locational Marginal Price): System Lambda is the energy component of the LMP at each Settlement Point. [e3]
- **Link to shift-factor** (cites e4): used-in Shift Factors: A shift factor measures the flow on a transmission element due to a unit injection at a bus. [e4]
- **Link to hb-west** (cites e5): related HB_WEST (West Hub): The West zone holds both the export-constrained Panhandle and the import-constrained Permian Basin. [e5]
- **Link to hb-north** (cites e13): contrasts-with HB_NORTH (North Hub): The North zone was the other main driver of higher day-ahead congestion in 2025. [e13]
- **Link to negative-prices** (cites e6) FLAG number-not-in-quote: 2025: related Negative Prices: The West zone had the most negative-price intervals of any load zone in 2025. [e6]
- **Link to gtc** (cites e10, e11): related GTC (Generic Transmission Constraint): GTCs limit flows between regions and matter most in renewable-heavy areas. [e10][e11]
- **Link to shadow-price** (cites e12): measures Shadow Price: The shadow price of a constraint is the marginal cost of redirecting energy around a binding constraint. [e12]
- **Link to load-zone** (cites e15): related Load Zone: Loads are billed at the load zone price, a load-weighted average of nodal prices within the zone. [e15]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) Check the posted binding constraints and shadow prices first, then confirm which side of the constraint each node sits on before calling a direction for the spread.
- (Scenarios) - Suppose (illustrative): System Lambda is $600/MWh. A North node with a congestion component of +$300 settles at $900, while a Panhandle node with -$620 settles at -$20. Same energy price, opposite congestion signs.
- (Say it like this) (Guidance) The energy price is the same across Texas; what differs is congestion. When the Panhandle cannot export its wind, prices there can go negative while North pays for expensive local units, and the shadow price on the binding constraint tells you how wide that gap is.

