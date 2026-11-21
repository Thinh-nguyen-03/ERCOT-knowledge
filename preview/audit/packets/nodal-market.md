# Audit packet: Nodal Market (nodal-market)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(f), Nodal energy prices for resources · text copy line 71

BEFORE: … on each scheduled transaction for a resource and load pair at the difference between the nodal LMP at the resource injection location calculated pursuant to subsection (f) of this section and the zonal price at the load withdrawal location calculated pursuant to subsection (h) of this section. (f) 
QUOTE: Nodal energy prices for resources. ERCOT shall use nodal energy prices for resources. Nodal energy prices for resources shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch.
AFTER:  (g) Energy trading hubs. ERCOT shall provide information for energy trading hubs by aggregating nodes and calculating an average price for each aggregation, for each financial settlement interval. (h) Zonal energy prices for loads. ERCOT shall use zonal energy prices for loads that consist of an ag…

### e2 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(e)(2), Congestion pricing · text copy line 61

BEFORE: …n its operational decisions and financial settlements. (e) Congestion pricing. (1) ERCOT shall directly assign all congestion rents to those resources that caused the congestion. (2) ERCOT shall be considered to have complied with paragraph (1) of this subsection if it complies with this paragraph. 
QUOTE: ERCOT shall settle each resource imbalance at its nodal locational marginal price (LMP) calculated pursuant to subsection (f) of this section; each load imbalance at its zonal price calculated pursuant to subsection (h) of this section; and congestion rents on each scheduled transaction for a resource and load pair at the difference between the nodal LMP at the resource injection location calculated pursuant to subsection (f) of this section and the zonal price at the load withdrawal location calculated pursuant to subsection (h) of this section.
AFTER:  (f) Nodal energy prices for resources. ERCOT shall use nodal energy prices for resources. Nodal energy prices for resources shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch. (g) Energy trading hubs. ERCOT…

### e3 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(a), General · text copy line 24

BEFORE: …be developed with consideration of microeconomic principles and shall promote economic efficiency in the production and consumption of electricity; support wholesale and retail competition; support the reliability of electric service; and reflect the physical realities of the ERCOT electric system. 
QUOTE: Except as otherwise directed by the commission, ERCOT shall determine the market clearing prices of energy and other ancillary services that it procures through auctions and the congestion rents that it charges or credits, using economic concepts and principles such as: shadow price of a constraint, marginal cost pricing, and maximizing the sum of consumer and producer surplus.
AFTER:  (b) Bilateral markets and default provision of energy and ancillary capacity services. ERCOT shall permit market participants to self-arrange (self-schedule or bilaterally contract for) energy and ancillary capacity services, except to the extent that doing so would adversely impact ERCOT's ability…

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Locational Marginal Price (LMP) · text copy line 1439

BEFORE: …trical Buses assigned to the same zone under Section 3.4. Every Electrical Bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes. (3) A Non-Opt-In Entity (NOIE) Load Zone is a type of Load Zone. Load Zone LMP (see Locational Marginal Price) Locational Marginal Price (LMP) 
QUOTE: The offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process.
AFTER:  Hub LMP The price calculated for a Hub for each SCED interval according to the formula in Section 6.6.1.5, Hub LMPs, using LMPs at the Electrical Buses included in the Hub. Load Zone LMP The price calculated for a Load Zone for each SCED interval according to the formula in Section 6.6.1.4, Load Zo…

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2909

BEFORE: …--------------------------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) 
QUOTE: Settlement Point A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Transmission Congestion and CRRs, 1. Locational Marginal Prices · text copy line 5151

BEFORE: …. By embedding transmission constraints into prices, LMPs play a central role in guiding efficient operational and investment decisions. Higher prices in constrained areas signal the value of generation that can relieve congestion, while lower prices in unconstrained areas reflect relative surplus. 
QUOTE: In ERCOT's design, LMPs are calculated at individual generation and load nodes, but load is settled at the load-weighted average price of its load zone. Zonal settlement smooths short-term volatility and facilitates hedging, but it also means some congestion costs are averaged across customers. As a result, LMPs' effectiveness in conveying accurate signals depends on how well load zones align with persistent transmission constraints, directly linking locational pricing to transmission planning and zone design.
AFTER:  2. Congestion Rent Transmission congestion gives rise to congestion rent, which reflects the price differences created by locational marginal pricing. When transmission constraints bind, load on the higherpriced side of a constraint pays more than generators on the lower-priced side receive, so tot…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Transmission Congestion and CRRs, G. Load Zone Configuration · text copy line 5939

BEFORE: …l/SB00006F.htm PUC Project 58484: https://interchange.puc.texas.gov/Search/Filings?ControlNumber=58484 IMM Comments on Project 58484: https://interchange.puc.texas.gov/Documents/58484_74_1561771.PDF 70 | 2025 State of the Market Report / / Transmission Congestion and CRRs G. Load Zone Configuration 
QUOTE: ERCOT established the four current load zones in 2003: North, West, South, and Houston. Load zones aggregate nodal prices to settle load and communicate congestion conditions to the market through price signals.
AFTER:  By averaging nodal prices within each zone, they provide clear price signals that reflect persistent transmission constraints between regions, including signals that transmission investment may be needed when congestion costs persist. However, when a load zone contains substantial internal congesti…

### e8 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(c), Day-ahead energy market · text copy line 43

BEFORE: …e extent that ERCOT determines that the market participant's self-arranged ancillary services will not be delivered, ERCOT shall procure energy and ancillary capacity services on behalf of the market participant to cover the shortfall and charge the market participant for the services provided. (c) 
QUOTE: Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract.
AFTER:  (d) Adequacy of operational information. ERCOT shall require resource-specific bid curves for energy and ancillary capacity services that it competitively procures in the day-ahead or operating day, and ERCOT shall use these bid curves or ex-ante mitigated bid curves to address market failure, as a…

### e9 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(i), Congestion rights · text copy line 112

BEFORE: …section, resulting from security-constrained, economic dispatch. ERCOT shall maintain stable zones and shall notify market participants in advance of zonal boundary changes in order that the market participants will have an appropriate amount of time to adjust to the changes. (i) Congestion rights. 
QUOTE: ERCOT shall provide congestion revenue rights (CRRs), but shall not provide physical transmission rights. ERCOT shall auction all CRRs, using a simultaneous combinatorial auction, except as otherwise ordered by the commission for any preassigned CRRs approved by the commission.
AFTER:  CRRs shall not be subject to "use-it-or-lose-it" or "schedule-it-or-lose-it" restrictions and shall be tradable. (j) Pricing safeguards. ERCOT shall apply pricing safeguards to protect against market failure, including market power abuse, consistent with direction provided by the commission. (k) Si…

### e10 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(g), Energy trading hubs · text copy line 77

BEFORE: …ction (h) of this section. (f) Nodal energy prices for resources. ERCOT shall use nodal energy prices for resources. Nodal energy prices for resources shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch. (g) 
QUOTE: Energy trading hubs. ERCOT shall provide information for energy trading hubs by aggregating nodes and calculating an average price for each aggregation, for each financial settlement interval.
AFTER:  (h) Zonal energy prices for loads. ERCOT shall use zonal energy prices for loads that consist of an aggregation of either the individual load node energy prices within each zone or the individual §25.501--1 effective date 4/18/12 (P39917) CHAPTER 25. SUBSTANTIVE PROVIDERS. Subchapter S. RULES APPLI…

### e11 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Security-Constrained Economic Dispatch (SCED) · text copy line 2793

BEFORE: …er in Docket No. 52322, Application of the Electric Reliability Council of Texas, Inc. For a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, for an Order Initiating a Parallel Docket, and for a Good Cause Exception. Security-Constrained Economic Dispatch (SCED) 
QUOTE: A process for determining Ancillary Service awards and Base Point instructions for Resources using Energy Offer Curves, Energy Bid/Offer Curves, Real-Time Market (RTM) Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs).
AFTER:  A SCED execution results in Ancillary Service awards and Base Point instructions that maximize bid-based revenues less offer-based costs while considering State Estimator output for Load at transmission-level Electrical Buses, Resource limits, and transmission limits to maximize bid-based revenues …

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Executive Summary, Review of Market Performance · text copy line 732

BEFORE: …s of new peak demand without the annual frequency of shortage conditions exceeding the norm from 2016 through 2021. This surplus of operating reserves also explains the relative infrequency of shortage pricing, as we discuss in the next section of the Executive Summary. Review of Market Performance 
QUOTE: ERCOT operates three distinct wholesale markets: the real-time market and two forward markets-the day-ahead market, which allows market participants to take financial positions on energy and ancillary services, and the CRR market, a series of auctions in which market participants can bid for the right to revenues derived from congestion rent. The real-time market is the most consequential because it coordinates real-time power flows to maintain system reliability and sets expectations for the forward markets.
AFTER:  Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. With RTC, the real-time market simultaneously procures energy and ancillary services. …

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Executive Summary, Transmission Congestion · text copy line 886

BEFORE: …ission projects have not kept pace with the large increase in renewables in the Panhandle and growing demand in the Permian Basin. This led the West Zone to exhibit the highest annual average zonal energy prices for the second year in a row. 2025 State of the Market Report | v / / Executive Summary 
QUOTE: Despite the increase in congestion costs, the prevalence of transmission constraints being violated because they were too expensive to resolve dropped to its lowest level since the ERCOT nodal market was implemented.
AFTER:  This drop in the frequency of constraint violations can be partially explained by NPRR 1230, which defines a process to increase the shadow price of basecase constraints. Higher shadow price caps allow SCED to produce more expensive dispatch solutions to avoid violating these constraints. The drop …

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Demand Response (controllable load resources) · text copy line 3398

BEFORE: …ard. With RTC, CLRs can sell out of their day-ahead positions or forego the day-ahead market entirely and only sell AS in real-time when energy prices are favorable. Another major improvement is NPRR 1188, which the PUCT approved in November 2024 and13 which will introduce nodal pricing for CLRs.14 
QUOTE: Currently, CLRs are dispatched and settled using zonal prices. This creates an economic challenge for CLRs at nodes with structurally low energy costs, such as those in the Panhandle near large volumes of renewable generation, where the zonal price is often higher than the cost of serving their load.
AFTER:  A related rule change also approved in November 2024,15 NPRR 1244, will allow loads to register as CLRs even if they cannot provide primary frequency response (PFR). This change expands participation to wholesale consumers that SCED can dispatch, improving reliability and real-time price formation …

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: 2025 State of the Market Report, Demand Response (controllable load resources), sentence before e14 · text copy line 3397

BEFORE: …rices. Before RTC, if a CLR received an AS award in the day-ahead market, it had to run in real-time according to the volume of the award. With RTC, CLRs can sell out of their day-ahead positions or forego the day-ahead market entirely and only sell AS in real-time when energy prices are favorable. 
QUOTE: Another major improvement is NPRR 1188, which the PUCT approved in November 2024 and13 which will introduce nodal pricing for CLRs.
AFTER: 14 Currently, CLRs are dispatched and settled using zonal prices. This creates an economic challenge for CLRs at nodes with structurally low energy costs, such as those in the Panhandle near large volumes of renewable generation, where the zonal price is often higher than the cost of serving their l…

### e16 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, pending-change box for NPRR1188 (Energy Bid Curve definition) · text copy line 860
FLAG pending-box: | [NPRR1188: Insert the following definition "Energy Bid Curve" upon system implementation:] |
BEFORE: …ate in the EAC program. Energy Attribute Certificate (EAC) Account Holder An Entity registered with ERCOT to participate in the EAC Program. +----------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1188: Insert the following definition "Energy Bid Curve" upon system implementation:]
AFTER:  | | | | Energy Bid Curve | | | | A proposal from a Controllable Load Resource (CLR) to buy energy at a Settlement Point at a monotonically non-increasing price with increasing quantity. | +==============================================================================================================…

### e18 · `ercot-nodal-go-live-plan` · tier 2 · Nodal Program Update to the Board (item 5e): go-live timeline (2010-10-12, pre-launch plan)
locator: Nodal Program Update to the ERCOT Board (19 October 2010), slide: TAC Certification of Full Nodal Systems for Go-Live · text copy line 2623

BEFORE: …eferred issues. The NATF expects ERCOT to continue updating NATF, TAC and the Board regarding the progress of the fixes and workarounds." NATF Vote Totals MP Segment For Against Abstention 19 October 2010 7 0 1 Consumer 42 ERCOT Board of Directors TAC Certification of Full Nodal Systems for Go-Live 
QUOTE: TAC voted to certify the Full Nodal systems for a December 1, 2010 Go-Live
AFTER:  based on the October 1, 2010 ERCOT Management Readiness Certification and th October the O t b 5, 5 2010 N Nodal d l Ad Advisory i T Task kF Force ( NATF) recommendation d ti . TAC Vote Totals MP Segment For Against Abstention 19 October 2010 25 1 3 Consumer Cooperative (2) & Consumer 43 ERCOT Boar…

### e19 · `ercot-nodal-go-live-plan` · tier 2 · Nodal Program Update to the Board (item 5e): go-live timeline (2010-10-12, pre-launch plan)
locator: Nodal Program Update to the ERCOT Board (19 October 2010), slide: System Cut-Over / Go-Live · text copy line 85

BEFORE: …points every five minutes during this period Non-Binding: Day Ahead Market, HRUC and DRUC per protocol timelines SCED will continue to publish base points and LMPs November 28, 2010 - November 30, 2010 LFC Test • Generation and Frequency Control cutover to Nodal systems System Cut-Over / Go-Live: • 
QUOTE: November 30th - Execute DAM for December 1 (the first Operating Day to be binding with Nodal settlement)
AFTER:  • December 1st - First Operating Day Planning has begun for nodal stabilization, parking deck prioritization, deferred defects, and release management scheduling for post Go-Live 19 October 2010 4 ERCOT Board of Directors Preliminary Nodal Stabilization Timeline • ERCOT is in the early stages of fi…

### e20 · `imm-som-2011` · tier 2 · 2011 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2012)
locator: 2011 State of the Market Report, Executive Summary, introduction (p. i) · text copy line 208

BEFORE: …latory Act. It includes assessments of the incentives provided by the current market rules and procedures, and analyses of the conduct of market participants. This report also assesses the effectiveness of the scarcity pricing mechanism pursuant to the provisions of PUCT Substantive Rule 25.505(g). 
QUOTE: ERCOT transitioned from the zonal market design that had been in place since 2001 and implemented the nodal market design on December 1, 2010. Thus, this is the first annual report that contains an entire year of nodal market operations.
AFTER:  Key findings and statistics from 2011 include the following:  The ERCOT wholesale market performed competitively in 2011.  The ERCOT-wide load-weighted average real-time energy price was $53.23 per MWh in 2011, a 35 percent increase from $39.40 per MWh in 2010. The increase was primarily driven b…

### e21 · `imm-som-2010` · tier 2 · 2010 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2011)
locator: 2010 State of the Market Report, Executive Summary, introduction · text copy line 160

BEFORE: …latory Act. It includes assessments of the incentives provided by the current market rules and procedures, and analyses of the conduct of market participants. This report also assesses the effectiveness of the scarcity pricing mechanism pursuant to the provisions of PUCT Substantive Rule 25.505(g). 
QUOTE: The market outcomes during the eleven months of zonal market operation in 2010 were generally similar to those in 2009. The highlight of 2010 was the much anticipated implementation of ERCOT's nodal market on December 1, 2010.
AFTER:  Some of the analysis contained in this report is for the eleven months of zonal market operation, while others cover the entire year, including the one month of nodal operation.  The ERCOT-wide load-weighted average balancing energy price was $39.40 per MWh in 2010 compared to $34.03 per MWh in 20…

### e22 · `imm-som-2010` · tier 2 · 2010 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2011)
locator: 2010 State of the Market Report, Transmission and Congestion, introduction (p. 57) · text copy line 6070

BEFORE: …ket Report III. Transmission and Congestion TRANSMISSION AND CONGESTION One of the most important functions of any electricity market is to manage the flows of power over the transmission network by limiting additional power flows over transmission facilities when they reach their operating limits. 
QUOTE: Under ERCOT's zonal market design, constraints on the transmission network are managed in two ways. First, ERCOT is made up of zones with the constraints between the zones managed through the balancing energy market. The balancing energy market model increases energy production in one zone and reduces it in another zone to manage the flows between the two zones when the interface constraint is binding, i.e., when there is interzonal congestion. Second, all other constraints not defined as zonal constraints (i.e., local congestion) are managed through the redispatch of individual generating resources.
AFTER:  In this section of the report we review the ERCOT transmission system usage and analyze the costs and frequency of transmission congestion. A. Electricity Flows between Zones In 2010 there were four commercial pricing zones in ERCOT: (a) the North Zone, (b) the West Zone, (c) the South Zone, and (d…

### e23 · `imm-som-2010` · tier 2 · 2010 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2011)
locator: 2010 State of the Market Report, Transmission and Congestion, A. Electricity Flows between Zones · text copy line 6088

BEFORE: …nder ERCOT's zonal market design, operators use the Scheduling, Pricing and Dispatch ("SPD") software to economically dispatch balancing energy in each zone to serve load and manage congestion between zones. The SPD model embodies the market rules and requirements documented in the ERCOT protocols. 
QUOTE: To manage interzonal congestion, SPD uses a simplified network model with four zone-based locations and five transmission interfaces. These five transmission interfaces, referred to as Commercially Significant Constraints ("CSCs"), are simplified representations of groups of transmission elements.
AFTER:  ERCOT operators use planning studies and real-time information to set limits for each CSC that are intended to utilize the total transfer capability of the CSC. In this subsection of the report, we describe the SPD model's simplified representations of flows between zones and analyze actual flows i…

### e24 · `imm-som-2011` · tier 2 · 2011 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2012)
locator: 2011 State of the Market Report, III. Transmission and Congestion, introduction · text copy line 5170

BEFORE: …et, the decision about which generator(s) will vary their output is based on generating unit specific offer curves. Previous annual reports described at great length the inconsistencies and resulting inefficiencies in the bifurcated way in which congestion was managed under the zonal market design. 
QUOTE: Although zonal congestion management instructions were bid-based, because all generators located within in a zone were assumed to have the same ability to affect the flows across a zonal constraint, the result was significant operational inefficiency and uncertainty. All other constraints were managed by paying generators to either increase or decrease their output from their scheduled level. Because the money to make these payments to generators was collected from all loads in ERCOT, generators had no incentive to take into account the state of the transmission system when scheduling their output.
AFTER:  The nodal market provides many improvements, including unit-specific offers and shift factors, simultaneous resolution of all transmission congestion, actual output instead of schedule-based dispatch, and 5-minute instead of 15-minute dispatch, among others. These changes have helped to increase th…

### e25 · `imm-som-2011` · tier 2 · 2011 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2012)
locator: 2011 State of the Market Report, III. Transmission and Congestion, introduction · text copy line 5177

BEFORE: …paying generators to either increase or decrease their output from their scheduled level. Because the money to make these payments to generators was collected from all loads in ERCOT, generators had no incentive to take into account the state of the transmission system when scheduling their output. 
QUOTE: The nodal market provides many improvements, including unit-specific offers and shift factors, simultaneous resolution of all transmission congestion, actual output instead of schedule-based dispatch, and 5-minute instead of 15-minute dispatch, among others.
AFTER:  These changes have helped to increase the economic and reliable utilization of scarce transmission resources beyond that experienced in the zonal market, and in so doing, also dispatch the most efficient resources available to reliably serve demand. Page 41 Transmission and Congestion ERCOT 2011 St…

### e26 · `imm-som-2011` · tier 2 · 2011 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2012)
locator: 2011 State of the Market Report, III. Transmission and Congestion, CRR discussion · text copy line 5699

BEFORE: …s because power produced by lower-cost resources cannot be delivered due to transmission constraint(s). Under the nodal market design, one means by which ERCOT market participants can hedge these price differences is by acquiring Congestion Revenue Rights ("CRRs") between any two settlement points. 
QUOTE: In the zonal market only the costs associated with managing congestion on the commercially significant constraints could be hedged. All other congestion costs were uplifted to all loads.
AFTER:  CRRs are acquired by annual and monthly auctions while Pre-assigned Congestion Revenue Rights ("PCRRs") are allocated to certain participants based on their historical patterns of transmission usage. Parties receiving PCRRs pay only a fraction of the auction value of a CRR between the same source a…

### e27 · `imm-som-2010` · tier 2 · 2010 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2011)
locator: 2010 State of the Market Report, Review of Market Outcomes (p. 13) · text copy line 3144

BEFORE: …er MWh in 2010 compared to an average of $40 per MWh for real-time prices. The day-ahead and real-time prices exhibit relatively good average convergence in 2010 with an average absolute difference being $12.25, almost the same as the level in 2009, where the average absolute difference was $12.37. 
QUOTE: One of the fundamental improvements brought about by the implementation of ERCOT's nodal market design is the establishment of a centralized day-ahead market.
AFTER:  As a preliminary review Page 13 ERCOT 2010 State of the Market Report Review of Market Outcomes of the performance of ERCOT's new day-ahead market, we evaluate the price differences between day-ahead and real-time for the month of December 2010. Figure 11 shows the both the average and absolute pri…

### e28 · `imm-som-2011` · tier 2 · 2011 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2012)
locator: 2011 State of the Market Report, Executive Summary bullets (p. i) · text copy line 232 · heading above: 4.0 percent, setting a new all time system hourly peak of 68,379 MW on August 3rd.

BEFORE: …k of 68,379 MW on August 3rd.  The West to North interface constraint was the most frequently occurring transmission constraint in 2011. It was active at some point during every month and was binding more than 20 percent of the time. Page i Executive Summary ERCOT 2011 State of the Market Report  
QUOTE: More reliable and efficient shortage pricing mechanisms than existed in the zonal market allowed energy prices to rise automatically up to the system-wide offer cap during periods of operating reserve shortages.
AFTER:  Prices at the system-wide offer cap were experienced in dispatch intervals which totaled 28.5 hours in 2011, or 0.33 percent of the total hours.  Net revenues provided by the market in 2011 were sufficient to support investment in either new simple-cycle natural gas-fired turbines or natural gas-f…

### e29 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(h), Zonal energy prices for loads · text copy line 107

BEFORE: … RULES APPLICABLE TO ELECTRIC SERVICE WHOLESALE MARKETS. resource node energy prices within each zone. Individual load node or resource node energy prices shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch. 
QUOTE: ERCOT shall maintain stable zones and shall notify market participants in advance of zonal boundary changes in order that the market participants will have an appropriate amount of time to adjust to the changes.
AFTER:  (i) Congestion rights. ERCOT shall provide congestion revenue rights (CRRs), but shall not provide physical transmission rights. ERCOT shall auction all CRRs, using a simultaneous combinatorial auction, except as otherwise ordered by the commission for any preassigned CRRs approved by the commissio…

### e30 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(k), Simultaneous optimization of ancillary capacity services · text copy line 125

BEFORE: …hedule-it-or-lose-it" restrictions and shall be tradable. (j) Pricing safeguards. ERCOT shall apply pricing safeguards to protect against market failure, including market power abuse, consistent with direction provided by the commission. (k) Simultaneous optimization of ancillary capacity services. 
QUOTE: For ancillary capacity services that it competitively procures in the day-ahead or operating day, ERCOT shall use simultaneous optimization and shall set prices for each service to the corresponding shadow price.
AFTER:  (l) Multi-settlement system for procuring energy and ancillary capacity services. For any energy and ancillary capacity services that it competitively procures in the day-ahead or operating day, ERCOT shall set a separate market clearing price for each procurement of a particular service. (m) Energ…

### e31 · `puct-25-501` · tier 1 · PUCT Substantive Rule 16 TAC §25.501, Wholesale Market Design for the Electric Reliability Council of Texas
locator: 16 TAC §25.501(i), Congestion rights, last sentence · text copy line 115

BEFORE: …) Congestion rights. ERCOT shall provide congestion revenue rights (CRRs), but shall not provide physical transmission rights. ERCOT shall auction all CRRs, using a simultaneous combinatorial auction, except as otherwise ordered by the commission for any preassigned CRRs approved by the commission. 
QUOTE: CRRs shall not be subject to "use-it-or-lose-it" or "schedule-it-or-lose-it" restrictions and shall be tradable.
AFTER:  (j) Pricing safeguards. ERCOT shall apply pricing safeguards to protect against market failure, including market power abuse, consistent with direction provided by the commission. (k) Simultaneous optimization of ancillary capacity services. For ancillary capacity services that it competitively pro…

### e32 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024), Electricity Markets chapter, RTO/ISO section · text copy line 8943

BEFORE: …fit entity over a large geographic footprint. Further, RTOs/ISOs do not own or conduct maintenance on the transmission or other resources involved in providing electric service. Currently, seven RTO/ISOs operate in the United States, listed below in order of the size of their all-time peak load.130 
QUOTE: FERC regulates all RTOs/ISOs except ERCOT.
AFTER:  In addition to operating RTOs/ISOs, SPP and CAISO also operate regional short-term or imbalance energy markets, which, while not RTOs/ISOs, provide markets for real-time energy sales and purchases. SPP operates the WEIS and CAISO runs the WEIM, which are discussed at the end of the SPP and CAISO se…

### e33 · `ercot-nodal-guiding-principles` · tier 2 · Guiding Principles of the Nodal Market (TAC approved 2010-07-01)
locator: Guiding Principles of the Nodal Market, Purpose · text copy line 5

BEFORE: …Guiding Principles of the Nodal Market Purpose 
QUOTE: This non-binding document provides general principles of the future Nodal Market design that may be used by entities to help develop their proposed Nodal Protocol Revision Request (NPRR) or market change proposal.
AFTER:  Guiding Principles An NPRR or market change proposal should strive to further the following guiding principles of the Nodal Market: - Improve price signals - Improve dispatch efficiencies - Improve transparency into market operations - Improve or enhance key components of the Nodal Market - Improve…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.D.1, ORDC (p. 8) · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low.
AFTER:  In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, p…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Demand Response chapter, footnote 13 on NPRR 1188 · text copy line 3427

BEFORE: …s are examples of price responsive load in ERCOT, but we have limited visibility into price response outside of SCED. For example, how much cryptocurrency demand is economical at different electricity prices? What we do know is that 13 14 15 NPRR 1188: https://www.ercot.com/mktrules/issues/NPRR1188 
QUOTE: Although NPRR 1188 was approved in November 2024, its implementation is not complete yet. According to ERCOT project management, NPRR 1188 will be implemented in January 2027
AFTER: : https://www.ercot.com/files/docs/2022/01/27/Revision_Requests_2026_04_14.xlsx NPRR 1244 is slated for implementation at the same time as NPRR 1188 in January 2027: https://www.ercot.com/mktrules/issues/NPRR1244 30 | 2025 State of the Market Report / / Demand and Supply in ERCOT cryptocurrency mine…

### e36 · `imm-som-2010` · tier 2 · 2010 State of the Market Report for the ERCOT Wholesale Electricity Markets (published 2011)
locator: 2010 State of the Market Report, Executive Summary, expected benefits of the nodal market · text copy line 206

BEFORE: …. We are optimistic that the nodal market will bring about much anticipated and expected improvements. Two of the expected benefits from the nodal market have been immediately observed:  Improved management of transmission congestion was evident from even prior to full nodal market implementation. 
QUOTE: Figure 43 demonstrates the improved utilization of the West to North interface observed during market trials; an increase from 64 percent to 83 percent.
AFTER:   More frequent energy deployment instructions and reduced quantities of regulation capacity procured resulted in regulation capacity costs being reduced by $8.5 million during the first month of operation of the nodal market. Page ii ERCOT 2010 State of the Market Report B. Executive Summary Revie…

### e37 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.1(3), Day-Ahead Operations, Introduction · text copy line 237 · heading above: 4.1 Introduction

BEFORE: …ation of "Average Incremental Energy Cost" (AIEC) 4-122 Day-Ahead Operations 4.1 Introduction (1) The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions. (2) Participation in the DAM is voluntary. (3) 
QUOTE: DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval.
AFTER:  (4) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

### e38 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, footnote 9 · text copy line 846 · heading above: 1.81 %

BEFORE: … are set to their most recent values, and RTOFFCAP is assumed to be 0 MW for illustration purposes. Note that multiplying the PBMCL curve by VOLL (currently equal to SWCAP at $5,000/MWh) yields the ORDC. RTORPA values may therefore be read from the right axis, assuming that System Lambda is zero. 9 
QUOTE: The Nodal Market began on December 1, 2010.
AFTER:  10 Changes to the HCAP and MCL were put into effect on January 1, 2022. © 2024 ERCOT All rights reserved. 000014 8 2024 Biennial ERCOT Report on the ORDC The value of a particular Resource's reserve contribution depends on how quickly it can be made available to the system. The Mu and Sigma paramet…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e4, e20): The nodal market is ERCOT's wholesale design in which resources are priced at nodal locational marginal prices (LMPs) produced by security-constrained economic dispatch. [e1] An LMP is the offer- and bid-based marginal cost of serving the next increment of load at an electrical bus, as calculated by the DAM or SCED. [e4] ERCOT moved to this design from a zonal market on December 1, 2010. [e20]
- **How it works #1** (cites e3, e2) FLAG number-not-in-quote: 25.501: PUCT rule 25.501 sets the design. ERCOT must price energy, ancillary services and congestion using economic principles such as the shadow price of a constraint, marginal cost pricing, and maximizing the sum of consumer and producer surplus, except as otherwise directed by the commission. [e3] Resources are settled at their nodal LMP, and load at its zonal price. A resource-to-load scheduled transaction pays congestion equal to the difference between the resource's nodal LMP and the load zone price. [e2]
- **How it works #2** (cites e5, e10, e37, e6, e29): Prices settle at Settlement Points, and each Settlement Point is a Resource Node, a Load Zone or a Hub. [e5] Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10] Day-ahead Settlement Point Prices are calculated for a one-hour Settlement Interval from DAM LMPs, while real-time Settlement Point Prices use a 15-minute Settlement Interval. [e37] LMPs are calculated at individual generation and load nodes, but load pays the load-weighted average price of its zone. That smooths volatility and makes hedging easier, but it averages some congestion costs across customers. [e6] The rule tells ERCOT to keep zones stable and to give market participants advance notice of zonal boundary changes so they have time to adjust. [e29]
- **How it works #3** (cites e11, e4, e8, e9, e31, e30, e12): The market runs in layers. Real-time prices come from SCED, which sets base points and ancillary service awards from offers, bids and ancillary service demand curves. [e11][e4] The rules also require a voluntary day-ahead energy market [e8], and CRRs, which ERCOT auctions in a simultaneous combinatorial auction instead of offering physical transmission rights, except for any preassigned CRRs the commission approves. [e9] CRRs are tradable and carry no "use-it-or-lose-it" or "schedule-it-or-lose-it" restrictions. [e31] For ancillary capacity services procured day-ahead or in the operating day, the rule requires simultaneous optimization, with each service priced at its shadow price. [e30] The IMM describes these as three markets: real-time, plus the day-ahead and CRR forward markets. The real-time market is the most consequential, because it coordinates power flows and sets expectations for the forward markets. [e12]
- **ERCOT context #1** (cites e20, e22, e23): What nodal replaced. Under the zonal design (in place from 2001 to the end of November 2010, per the IMM), constraints were handled in two ways: constraints between zones were managed through the balancing energy market, which raised output in one zone and lowered it in another, and all other ("local") constraints were managed by redispatching individual generators. [e20][e22] The zonal dispatch software (SPD) modelled four zone-based locations and five interfaces called Commercially Significant Constraints (CSCs), simplified representations of groups of transmission elements. [e23]
- **ERCOT context #2** (cites e24, e26, e25, e27, e28, e36) FLAG number-not-in-quote: 2011: Why it changed, in the IMM's account. The IMM wrote in 2011 that because every generator in a zone was assumed to have the same effect on a zonal constraint, zonal congestion management caused significant operational inefficiency and uncertainty; local constraints were managed by paying generators to move off their schedules, and because those payments were collected from all loads, generators had no incentive to consider the state of the transmission system when scheduling. [e24] In the zonal market only congestion on the CSCs could be hedged, and all other congestion costs were uplifted to all loads. [e26] The IMM listed the nodal improvements as unit-specific offers and shift factors, simultaneous resolution of all transmission congestion, dispatch on actual output instead of schedules, and 5-minute instead of 15-minute dispatch. [e25] It also called a centralized day-ahead market one of the fundamental improvements of the nodal design [e27], and said shortage pricing under nodal let energy prices rise automatically to the system-wide offer cap during operating reserve shortages, which the zonal market did not do reliably. [e28] During market trials, it reported, use of the West to North interface rose from 64 percent to 83 percent. [e36]
- **ERCOT context #4** (cites e14, e15, e35, e16, e13) FLAG number-not-in-quote: 2025, 2026: The zonal layer has real costs. The IMM's 2025 report says controllable load resources are dispatched and settled at zonal prices, which hurts CLRs at low-cost nodes, such as in the Panhandle, where the zonal price is often above their actual cost of service. [e14] NPRR 1188, approved by the PUCT in November 2024, will introduce nodal pricing for CLRs [e15]; the IMM reports that its implementation is not complete and that ERCOT project management schedules it for January 2027. [e35] In the November 2026 Protocols an NPRR1188 definition (Energy Bid Curve) is still marked for insertion "upon system implementation". [e16] On the operations side, the IMM reported that in 2025 the rate of transmission constraints violated because they were too expensive to resolve fell to its lowest level since the nodal market was implemented. [e13]
- **ERCOT context #5** (cites e32, e1, e33) FLAG number-not-in-quote: 2024, 25.501: Who governs it. FERC's 2024 Energy Primer says FERC regulates all RTOs/ISOs except ERCOT [e32]; ERCOT's nodal design is set by PUCT rule 25.501. [e1] ERCOT keeps a non-binding set of guiding principles of the Nodal Market for entities drafting NPRRs or other market change proposals. [e33]
- **Timeline #1** (cites e20) FLAG number-not-in-quote: 2011: - 2001: the zonal market design begins, per the IMM's 2011 report. [e20]
- **Timeline #2** (cites e7): - 2003: ERCOT establishes the four current load zones (North, West, South, Houston), per the IMM. [e7]
- **Timeline #3** (cites e18): - October 2010: TAC votes to certify the Full Nodal systems for a December 1, 2010 go-live (October 19, 2010 Board update). [e18]
- **Timeline #4** (cites e19) FLAG number-not-in-quote: 2010: - November 30, 2010: planned first nodal DAM, for Operating Day December 1. [e19]
- **Timeline #5** (cites e20, e21, e38) FLAG number-not-in-quote: 2024: - December 1, 2010: ERCOT implements the nodal market; 2010 had eleven months of zonal operation and one month of nodal (IMM; ERCOT's 2024 ORDC report gives the same date). [e20][e21][e38]
- **Timeline #6** (cites e20) FLAG number-not-in-quote: 2011: - 2011: first full calendar year of nodal operation, per the IMM. [e20]
- **Timeline #7** (cites e15): - November 2024: the PUCT approves NPRR 1188 (nodal pricing for CLRs). [e15]
- **Timeline #8** (cites e34): - December 5, 2025: RTC goes live. [e34]
- **Timeline #9** (cites e35): - January 2027: scheduled implementation of NPRR 1188, per the IMM citing ERCOT project management. [e35]
- **Key facts #5** (cites e9, e31): - CRRs are financial, tradable rights sold in a simultaneous combinatorial auction. ERCOT offers no physical transmission rights. [e9][e31]
- **Key facts #6** (cites e20, e21) FLAG number-not-in-quote: 2011: - Nodal go-live: December 1, 2010, replacing the zonal design in place since 2001 (IMM 2010 and 2011 reports). [e20][e21]
- **Key facts #7** (cites e25) FLAG number-not-in-quote: 2011: - Zonal dispatch: 15-minute; nodal: 5-minute (IMM 2011). [e25]
- **Say it like this #2** (cites e20, e24): (Guidance) ERCOT went nodal on December 1, 2010. Before that, congestion inside a zone was socialised to all loads, which the IMM said left generators with no reason to care where they were on the grid. [e20][e24]
- **Common confusion #2** (cites e7, e22, e23, e20) FLAG number-not-in-quote: 2011: (Guidance) Today's four load zones are not leftovers of the zonal market's pricing: the zones date from 2003, but under nodal they are averages of nodal prices used to settle load, whereas in the zonal market they were the dispatch and pricing locations themselves. [e7][e22][e23] Also, IMM reports sometimes count nodal from 2011 because that was the first full year; the go-live was December 1, 2010. [e20]
- **Questions #6** (cites e20, e22, e23): December 1, 2010. [e20] Before that the zonal market, in place since 2001, dispatched balancing energy by zone and managed congestion on five Commercially Significant Constraints, with all other constraints handled by redispatching individual units. [e20][e22][e23]
- **Questions #8** (cites e24, e26, e25): In the IMM's view the zonal model assumed every generator in a zone affected a constraint the same way, which caused inefficiency and uncertainty, and local congestion costs were uplifted to all loads, so generators had no incentive to consider the grid when scheduling. [e24][e26] Nodal brought unit-specific offers and shift factors, simultaneous resolution of all congestion and 5-minute dispatch. [e25]
- **Questions #10** (cites e6, e29): The IMM says LMP signals are only as effective as the alignment between load zones and persistent constraints, because zonal settlement averages some congestion across customers. [e6] The PUCT rule requires ERCOT to keep zones stable and to give advance notice of any boundary change. [e29]
- **Questions #12** (cites e14, e15, e35) FLAG number-not-in-quote: 2025: Per the IMM's 2025 report, CLRs are dispatched and settled at zonal prices until NPRR 1188's nodal pricing for CLRs is implemented, scheduled for January 2027. [e14][e15][e35] At low-cost nodes, such as in the Panhandle, the zonal price is often above the cost of serving their load. [e14]
- **Scenarios #4** (cites e2, e9) FLAG number-not-in-quote: 25.501: - The difference on a resource-to-load schedule is the congestion rent under rule 25.501(e)(2); CRRs between the two settlement points are the hedge. [e2][e9]
- **Link to lmp** (cites e1): composed-of LMP (Locational Marginal Price): Resource prices in the nodal market are LMPs that come out of security-constrained economic dispatch. [e1]
- **Link to load-zone** (cites e6): composed-of Load Zone: Load is settled at the load-weighted average price of its load zone, not at its own node. [e6]
- **Link to settlement-point** (cites e5): composed-of Settlement Point: Every Settlement Point is a Resource Node, a Load Zone or a Hub. [e5]
- **Link to sced** (cites e11, e4): composed-of SCED (Security-Constrained Economic Dispatch): SCED determines Ancillary Service awards and Base Point instructions, and LMPs are produced by the DAM or SCED. [e11][e4]
- **Link to dam** (cites e8): composed-of Day-Ahead Market (DAM): PUCT rules require ERCOT to run a voluntary day-ahead energy market. [e8]
- **Link to crr** (cites e9): composed-of CRR (Congestion Revenue Right): ERCOT provides CRRs, not physical transmission rights, and auctions them in a simultaneous combinatorial auction. [e9]
- **Link to trading-hub** (cites e10): composed-of Trading Hubs: Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10]
- **Link to congestion** (cites e2): related Transmission Congestion: Congestion rents on a scheduled transaction are the difference between the resource's nodal LMP and the load zone price. [e2]
- **Link to rtc-b** (cites e34, e30): related RTC+B (Real-Time Co-optimization + Batteries): RTC went live on December 5, 2025, and the PUCT rule already required simultaneous optimization of ancillary capacity services priced at their shadow prices. [e34][e30]
- **Link to clr** (cites e14, e35): related CLR (Controllable Load Resource): CLRs are still dispatched and settled at zonal prices; the IMM reports NPRR 1188's nodal pricing for CLRs is scheduled for January 2027. [e14][e35]
- **Link to ferc** (cites e32, e1) FLAG number-not-in-quote: 2024, 25.501: contrasts-with FERC: FERC's 2024 Energy Primer says FERC regulates all RTOs/ISOs except ERCOT; ERCOT's design rule is PUCT rule 25.501. [e32][e1]
- **Link to nodal-protocols** (cites e33): related ERCOT Nodal Protocols: ERCOT's guiding principles for proposals that change the Nodal Market start with improving price signals and dispatch efficiency. [e33]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) In ERCOT every generator is paid the price at its own node, and that price includes the cost of transmission congestion, while load pays an average price across its load zone. That gives generators sharp location signals and gives retail load a smoother, easier-to-hedge price, at the cost of averaging some congestion inside each zone.

