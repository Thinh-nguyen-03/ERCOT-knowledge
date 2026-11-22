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

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e3, e4, e12, e19, e21, e20): Every LMP has the same energy part. System Lambda is the cost of one more MWh at the reference bus and is the energy component of the LMP at every Settlement Point. [e3] A shift factor measures the flow on a transmission element from a unit injection at a bus. [e4] The shadow price of the constraint is the marginal cost of routing energy around it. [e12] Attachment P puts these together: a bus LMP is System Lambda minus the sum over congested lines of the bus's shift factor times the line's shadow price, and that congestion component can be positive or negative depending on the sign of the shift factors. [e19][e21] Shadow prices on congested lines are positive, and buses on one side of a line have negative shift factors while buses on the other side have positive ones. [e20]
- **Formula #1** (cites e19): - Bus LMP = System Lambda - sum over congested lines of (shift factor of the bus on that line x shadow price of the line). [e19]
- **Formula #2** (cites e21, e20): - Congestion component = - sum of (shift factor x shadow price); its sign depends on which side of the constraint the bus sits. [e21][e20]
- **Scenarios #2** (cites e3, e19, e21, e12): - Start from the LMP build-up. System Lambda is the energy component of the LMP at each Settlement Point, and each bus adds its own congestion component: minus the sum of shift factor times shadow price over binding constraints. [e3][e19][e21] The shadow price of the binding constraint is the marginal cost of redirecting flow around it. [e12]
- **Questions #10** (cites e22, e19): Because the congestion component adds to System Lambda. ERCOT's Attachment P says an LMP at a node, hub or load zone can exceed the RTSWCAP, most likely when one or more constraints are irresolvable and dispatchable supply is tight. [e22][e19]
- **Questions #14** (cites e21, e20): The congestion component is minus shift factor times shadow price, and buses on opposite sides of a congested line have shift factors of opposite sign, so one side is lifted and the other pushed down by the same constraint. [e21][e20] (Reasoning) A West-to-North spread position pays off only if your source and sink sit on opposite sides of the binding constraint in the direction you expect.
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
- (Say it like this) (Guidance) The energy component of the price is the same at every ERCOT Settlement Point; what differs is congestion. When the Panhandle cannot export its wind, prices there can go negative while North pays for expensive local units, and the shadow price on the binding constraint tells you how wide that gap is.
- (Say it like this) (Guidance) One line for the formula: "Each node is System Lambda minus shift factor times shadow price, so the same binding constraint pushes one side up and the other side down."

