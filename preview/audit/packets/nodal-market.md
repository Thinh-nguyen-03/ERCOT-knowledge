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

### e17 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Zone, paragraph (3) · text copy line 1433

BEFORE: …power flow bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes. (2) In the Real-Time Market (RTM), a group of Electrical Buses assigned to the same zone under Section 3.4. Every Electrical Bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes. 
QUOTE: (3) A Non-Opt-In Entity (NOIE) Load Zone is a type of Load Zone.
AFTER:  Load Zone LMP (see Locational Marginal Price) Locational Marginal Price (LMP) The offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process. Hub LMP The price calculated for a Hub for ea…

## Statements to check

- **Definition #1** (cites e1, e4): The nodal market is ERCOT's wholesale design in which resources are priced at nodal locational marginal prices (LMPs) produced by security-constrained economic dispatch. [e1] An LMP is the offer- and bid-based marginal cost of serving the next increment of load at an electrical bus, as calculated by the DAM or SCED. [e4]
- **How it works #1** (cites e3, e2) FLAG number-not-in-quote: 25.501: PUCT rule 25.501 sets the design. ERCOT must price energy, ancillary services and congestion using economic principles such as the shadow price of a constraint, marginal cost pricing, and maximizing the sum of consumer and producer surplus. [e3] Resources are settled at their nodal LMP, and load at its zonal price. A resource-to-load scheduled transaction pays congestion equal to the difference between the resource's nodal LMP and the load zone price. [e2]
- **How it works #2** (cites e5, e10, e6): Prices settle at Settlement Points, and each Settlement Point is a Resource Node, a Load Zone or a Hub. [e5] Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10] LMPs are calculated at individual generation and load nodes, but load pays the load-weighted average price of its zone. That smooths volatility and makes hedging easier, but it averages some congestion costs across customers. [e6]
- **How it works #3** (cites e11, e4, e8, e9, e12): The market runs in layers. Real-time prices come from SCED, which sets base points and ancillary service awards from offers, bids and ancillary service demand curves. [e11][e4] The rules also require a voluntary day-ahead energy market [e8], and CRRs, which ERCOT auctions in a simultaneous combinatorial auction instead of offering physical transmission rights. [e9] The IMM describes these as three markets: real-time, plus the day-ahead and CRR forward markets. The real-time market is the most consequential, because it coordinates power flows and sets expectations for the forward markets. [e12]
- **ERCOT context #1** (cites e6, e7, e17): Zonal settlement for load trades signal accuracy for smoother prices, and the quality of the signal depends on the zones. [e6] The IMM says ERCOT set the four current load zones in 2003: North, West, South and Houston. [e7] The Protocols also define a Non-Opt-In Entity (NOIE) Load Zone as a type of Load Zone. [e17] The IMM argues that LMP signals are only as accurate as the match between load zones and persistent transmission constraints. [e6]
- **ERCOT context #2** (cites e14, e15, e16, e13) FLAG number-not-in-quote: 2025, 2026: The zonal layer has real costs. The IMM's 2025 report says controllable load resources are dispatched and settled at zonal prices, which hurts CLRs at low-cost nodes, such as in the Panhandle, where the zonal price is often above their actual cost of service. [e14] NPRR 1188, approved by the PUCT in November 2024, will introduce nodal pricing for CLRs [e15]; in the November 2026 Protocols its changes are still marked for insertion "upon system implementation". [e16] On the operations side, the IMM reported that in 2025 the rate of transmission constraints violated because they were too expensive to resolve fell to its lowest level since the nodal market was implemented. [e13]
- **Key facts #1** (cites e1) FLAG number-not-in-quote: 25.501: - Resources are priced at nodal LMPs from security-constrained economic dispatch (rule 25.501(f)). [e1]
- **Key facts #2** (cites e2): - Load imbalances settle at zonal prices, and resource-to-load schedules pay the nodal-to-zonal price difference as congestion. [e2]
- **Key facts #3** (cites e5): - Settlement Point types: Resource Node, Load Zone, Hub. [e5]
- **Key facts #4** (cites e7, e17): - Four current load zones, set in 2003 (per the IMM): North, West, South, Houston. [e7] NOIE Load Zones are also a type of Load Zone. [e17]
- **Key facts #5** (cites e9): - CRRs are financial rights sold in a simultaneous combinatorial auction. ERCOT offers no physical transmission rights. [e9]
- **Key facts #6** (cites e13) FLAG number-not-in-quote: 2025: - 2025: constraint violations hit their lowest level since nodal implementation (IMM). [e13]
- **Common confusion #1** (cites e2, e6, e10, e9): (Guidance) "Nodal" does not mean everyone settles at a node. Resources do, but load settles at the load zone price. [e2][e6] Hubs are not physical locations. They are averages of nodal prices. [e10] And CRRs are financial instruments, not rights to physically use transmission. [e9]
- **Questions #2** (cites e2, e7, e6): The PUCT rule settles resources at nodal LMPs and loads at zonal prices, and load zones aggregate nodal prices. [e2][e7] The IMM notes that zonal settlement smooths volatility and helps hedging, but it averages some congestion across customers. [e6]
- **Questions #4** (cites e4, e3): It is the offer- and bid-based marginal cost of serving the next increment of load at an electrical bus, produced by the DAM or by SCED. [e4] The rule ties prices to shadow prices of constraints and marginal cost pricing. [e3]
- **Questions #6** (cites e14, e15, e16) FLAG number-not-in-quote: 2025: Per the IMM's 2025 report, CLRs are dispatched and settled at zonal prices until NPRR 1188's nodal pricing for CLRs is implemented. [e14][e15][e16] At low-cost nodes, such as in the Panhandle, the zonal price is often above the cost of serving their load. [e14]
- **Questions #8** (cites e12): The IMM calls the real-time market the most consequential: it coordinates real-time power flows and sets expectations for the day-ahead and CRR markets. [e12]
- **Scenarios #2** (cites e2): - The wind farm is paid its nodal LMP, while the retailer's load settles at the West load zone price. [e2]
- **Scenarios #3** (cites e6): - Some congestion costs are averaged across customers in the zone, and the IMM says LMP signals work only as well as zones align with persistent constraints. [e6]
- **Link to lmp** (cites e1): composed-of LMP (Locational Marginal Price): Resource prices in the nodal market are LMPs that come out of security-constrained economic dispatch. [e1]
- **Link to load-zone** (cites e6): composed-of Load Zone: Load is settled at the load-weighted average price of its load zone, not at its own node. [e6]
- **Link to settlement-point** (cites e5): composed-of Settlement Point: Every Settlement Point is a Resource Node, a Load Zone or a Hub. [e5]
- **Link to sced** (cites e11, e4): composed-of SCED (Security-Constrained Economic Dispatch): SCED determines Ancillary Service awards and Base Point instructions, and LMPs are produced by the DAM or SCED. [e11][e4]
- **Link to dam** (cites e8): composed-of Day-Ahead Market (DAM): PUCT rules require ERCOT to run a voluntary day-ahead energy market. [e8]
- **Link to crr** (cites e9): composed-of CRR (Congestion Revenue Right): ERCOT provides CRRs, not physical transmission rights, and auctions them in a simultaneous combinatorial auction. [e9]
- **Link to trading-hub** (cites e10): composed-of Trading Hubs: Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10]
- **Link to congestion** (cites e2): related Transmission Congestion: Congestion rents on a scheduled transaction are the difference between the resource's nodal LMP and the load zone price. [e2]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) In ERCOT every generator is paid the price at its own node, and that price includes the cost of transmission congestion, while load pays an average price across its load zone. That gives generators sharp location signals and gives retail load a smoother, easier-to-hedge price, at the cost of averaging some congestion inside each zone.

