# Audit packet: Asset Optimization (asset-optimization)

kind concept · domain trading · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL, Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026), 'Optimization for PV+S dispatch' · text copy line 1042 · heading above: 6.01 [1.0, 6.7] (up)

BEFORE: …movement multiplier. 6 Value based on the table on pg. 48 here for batteries following RegD. 7 ERCOT does not have mileage or performance scores. The combined price = the capacity price. Utility-Scale Solar+Storage Operations 21 emp.lbl.gov/utility-scale-storage Optimization for PV+S dispatch    
QUOTE: Modeling perspective: asset owner who is a price-taker with perfect foresight into generation and price conditions seeking to maximize market value while considering battery degradation.
AFTER:  Implementation: Linear model optimizing operation of battery and solar curtailment to maximize value (energy and AS revenue, including hourly capacity price adders for regions where accreditation is profile-dependent) less costs at an hourly resolution. Equality Constraints Inequality Constraints P…

### e2 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), 'Optimization for PV+S dispatch' · text copy line 1044 · heading above: 6.01 [1.0, 6.7] (up)

BEFORE: …Utility-Scale Solar+Storage Operations 21 emp.lbl.gov/utility-scale-storage Optimization for PV+S dispatch    Modeling perspective: asset owner who is a price-taker with perfect foresight into generation and price conditions seeking to maximize market value while considering battery degradation. 
QUOTE: Implementation: Linear model optimizing operation of battery and solar curtailment to maximize value (energy and AS revenue, including hourly capacity price adders for regions where accreditation is profile-dependent) less costs at an hourly resolution.
AFTER:  Equality Constraints Inequality Constraints PV power balance SOC bounds Storage power balance Charge/discharge power limits AC bus power balance Export/import limit at POI Battery State of Charge (SOC) transition AS awards limited by storage power and energy capacity according to varying market rul…

### e3 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals · text copy line 2851

BEFORE: …d adjust output, batteries are always online and can adjust their charging and discharging rate almost instantly. This flexibility makes them well suited to provide fast-responding ancillary services such as regulation or responsive reserves to manage fluctuations in load or renewable generation. • 
QUOTE: They are driven by opportunity cost - The charging/discharging cycle and duration limits create unique economics for ESRs. ESRs must optimize these cycles to maximize their revenues. Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value. These strategies can introduce market inefficiencies.
AFTER:  A Multi-Interval Real-Time Market (MIRTM) would allow SCED to optimize ESR charging and discharging over time and reduce the need for ESRs to do so themselves. We have recommended that ERCOT consider implementing a MIRTM since our 2022 State of the Market report as part of Recommendation 2022-1. 2.…

### e4 · `ref-montel-optimisation` · tier 3 · How to optimise generation portfolios across spot and forward power markets
locator: Montel (data vendor) blog, 'How to optimise generation portfolios across spot and forward power markets' (November 18, 2025), introduction · text copy line 221

BEFORE: …arkets 0% The writer [] Abi Grogan Freelance Writer Topics Risk Management Power market Energy Prices Share [Facebook] [LinkedIn] [] Track key market spreads to optimise your energy trading strategy Explore Montel Analytics How to optimise generation portfolios across spot and forward power markets 
QUOTE: Power producers and portfolio managers can capture value across different time horizons, including spot, intraday, and forward, by balancing physical generation, market positions, and risk appetite.
AFTER:  The relationship between risk and flexibility is a nuanced, but important one for the renewable energy market. This is why it&#039;s key that market participants can understand and shape the relationship between physical output, forward hedges, and real-time optimisation. November 18, 2025 [] Jump …

### e7 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), empirical versus optimized dispatch (sample of 49 projects, 2024) · text copy line 290

BEFORE: …al.    We collected empirical operating data for 18% of the modeled projects and compared observed with optimized dispatch. Modeled On a national average basis in 2024, projects in this subsample increased wholesale market value from $25/MWh for standalone PV to $39/MWh for combined PV+S output. 
QUOTE: The empirical value fell well short of the optimized result of $63/MWh, achieving only 62% of modeled value.
AFTER:  This gap was driven mainly by:     Sample: 49 projects totaling 4.2 GW PV , 1.6 GW Bat/5.3GWh Lower realized storage value, as the implied storage value adder was $14/MWh under empirical operations, compared with $36/MWh under optimized dispatch (38%). Lower reported ancillary services revenue,…

### e8 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), barriers to increasing PV+S market value · text copy line 385

BEFORE: …ng PV+S market value include: Under-participation in wholesale markets, including still-lucrative ancillary services in less mature markets. Restrictions on grid charging under earlier ITC rules for older projects Limited response to negative prices because of volume targets or hub-based settlement 
QUOTE: Dispatch strategies tied to out-of-market considerations including fixed delivery obligations under tolls, PPAs, REC markets or state incentive programs Rule-based operation, such as charging at midday and discharging in the evening regardless of price conditions Imperfect price forecasting
AFTER:  In non-ISO regions, additional value is constrained by the lack of organized ancillary services markets and by weak energy price signals. •Even utilities in regional imbalance markets may prioritize balancing within their own BA rather than dispatching against imbalance market prices. | | Utility-S…

### e9 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), empirical versus optimized dispatch, regional performance · text copy line 318

BEFORE: … incomplete capacity revenue reporting in FERC EQR or lower realized capacity prices. The modeled values are the product of design-driven capacity credits and zonal capacity prices reported by the CPUC that may not have been accessible by the sampled projects. Performance also varied by region.   
QUOTE: In ISO-NE, NYISO, and ERCOT, the largest shortfall relative to the optimum came from lower AS value.
AFTER:  FERC EQR derived Lower realized capacity and energy value was the main reason optimized value was higher in CAISO and the non-ISO West. ENERGY T ECHNOLOGIES AREA | ENERGY ANALYSIS DIVISION | ENERGY MARKET S & PLANNING Utility-Scale Solar+Storage Operations emp.lbl.gov/utility-scale-storage 8 Despit…

### e10 · `ref-lbnl-pv-battery` · tier 2 · Influence of business models on PV-battery dispatch decisions and market value (briefing)
locator: LBNL, Influence of business models on PV-battery dispatch decisions and market value (briefing), Conclusion · text copy line 812

BEFORE: …REA | E NERGY A NALYSIS AND E NVIRONMENTAL I MPACTS D IVISION | E LECTRICITY M ARKETS & P OLICY https://emp.lbl.gov/publications/influence-business-models-pv-battery 22 Conclusion  PV-battery hybrid projects dominate the interconnection queues, but little empirical data has been available so far  
QUOTE: Only a minority of projects optimize battery dispatch for wholesale market revenue as merchant plants, majority follow other business models
AFTER:   Associated operational signals deviate from wholesale market signals but can yield higher private revenue  Regulators tasked with tariff design and policy makers designing incentive programs should ensure these are aligned with grid needs  Our study is only a snapshot of 11 PV-battery hybrids i…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization · text copy line 9344

BEFORE: …me Co-Optimization APPENDIX 2025 State of the Market Report | A-1 / / Appendix: Real-Time Co-Optimization REAL-TIME CO-OPTIMIZATION Wholesale electricity markets rely on a set of optimization models that schedule generation to serve load at the lowest cost while respecting transmission constraints. 
QUOTE: Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market.
AFTER:  Ancillary service awards from the day-ahead market represented physical obligations to provide reserves in real time, and the market withheld these reserves from the capacity available for real-time energy. With the implementation of RTC, the real-time market dispatch now co-optimizes energy and an…

### e12 · `ref-ercot-forward-markets-101` · tier 2 · Forward Markets 101 (ERCOT training) (2026)
locator: ERCOT training, Forward Markets 101 (2026), slide 27, Ancillary Service Offers · text copy line 530

BEFORE: …ly Offer • DAM Energy-Only Offer • Ancillary Service (AS) Offers 26 Ancillary Service Offers Resource-Specific AS Offers for Each Service Type of Service Offer Regulation Up MW $ / MW Regulation Down MW $ / MW Responsive Reserve MW $ / MW Contingency Reserve MW $ / MW Non-Spinning Reserve MW $ / MW 
QUOTE: Multiple offers from single Resource: • Multiple Ancillary Services • May be combined with Energy Offers
AFTER:  27 Ancillary Service Only Offers Financial AS Offers for Each Service Type of Service Offer Regulation Up MW $ / MW Regulation Down MW $ / MW Responsive Reserve MW $ / MW Contingency Reserve MW $ / MW Non-Spinning Reserve MW $ / MW Financial AS Transactions: • Paid DAM AS Prices • Charged Real-Time…

### e13 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Three-Part Supply Offer · text copy line 3126

BEFORE: …l standards that enable and facilitate the retail business processes in the deregulated Texas electric market. (2) The procedures used to transmit information pertaining to the Customer Registration Database are set forth in Section 19, Texas Standard Electronic Transaction. Three-Part Supply Offer 
QUOTE: An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  Time Of Use (TOU) Meter A programmable electronic device capable of measuring and recording electric energy in pre-specified time periods. For Load Profiling purposes TOU Metering does not include IDRs. Time Of Use Schedule (TOUS) A schedule identifying the Time Of Use period associated with each S…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.4, ESR Participation in Energy Markets · text copy line 3003

BEFORE: … *+,-./.0N. 20.34R,-./.0N. S7389:;<.=,2+-,-./.0N. !)"" !&#" !&"" !#"" !%'" !E"" !%&" !&"" !A" !%"" !#" !" !" &"&% &"&& &"&E &"&# !"#$%&'E)*+,-.+.)/)MN)+23+4)#+RST8#9 W";%&+,-.+.)/)MN)+23+<'&&'"M=9 !'"" Figure 17: Total and Normalized ESR Revenue 2021-2025 &"&) 4. ESR Participation in Energy Markets 
QUOTE: Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high.
AFTER:  The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has a…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.4, ESR Aggregate Offers · text copy line 3060

BEFORE: …nds: • The volume of energy offers that ESRs submitted continued to grow exponentially, more than doubling or tripling each year since 2021. It increased from roughly 3,000 MW in 2024 to 6,700 MW in 2025. • The share of ESR offers priced at normal market clearing price ranges continued to increase. 
QUOTE: In 2025, 55% of energy offers were priced between $0-100 per MWh, compared to 46% in 2024 and 25% in 2023. As more ESRs enter the market, they must offer more competitively to maximize revenue from energy sales.
AFTER:  • ESRs still submit a substantial percentage of offers priced at the System-Wide Offer Cap (SWCAP), 18% in 2025 compared to 32% in 2024. This tendency can be partially attributed to SOC management. ESRs must maintain sufficient SOC to satisfy their AS obligations, even if they use some capacity for…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1) · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …s and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards (1) 
QUOTE: Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals · text copy line 2856

BEFORE: …ize these cycles to maximize their revenues. Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value. These strategies can introduce market inefficiencies. 
QUOTE: A Multi-Interval Real-Time Market (MIRTM) would allow SCED to optimize ESR charging and discharging over time and reduce the need for ESRs to do so themselves. We have recommended that ERCOT consider implementing a MIRTM since our 2022 State of the Market report as part of Recommendation 2022-1.
AFTER:  2. ESR Capacity Trends The first batteries started commercial operations in ERCOT in 2012. Their installed capacity remained below 300 MW until 2021, when it increased from 300 MW to 1,600 MW in 9 https://atb.nrel.gov/electricity/2024b/utility-scale_battery_storage 2025 State of the Market Report |…

### e18 · `ref-montel-optimisation` · tier 3 · How to optimise generation portfolios across spot and forward power markets
locator: Montel (data vendor) blog (2025), The role of asset-backed trading strategies · text copy line 259

BEFORE: …differs from speculative trading in that asset-backed trading is directly related to a physical asset, such as a power plant. In contrast, speculative trading chases market volatility for short-term payoffs but does not own an actual asset. Aligning physical availability with forward book exposures 
QUOTE: The benefit of asset-backed strategies compared to financial-only traders is that the physical assets can act as an insurance policy, which pays off in forward trading. If a forward transaction falls short of the expected performance, a plant owner can top up using their own plant's output.
AFTER:  Margins and opportunity cost across horizons The focus of asset-backed trading relies on the market's volatility at a given time. Using the above method of making a physical asset available during volatile periods when the market doesn't deliver as expected, short-term margins can be achieved. Medi…

### e19 · `ref-ogj-tolling` · tier 3 · Merchant plant tolling contracts divide risk
locator: Oil & Gas Journal, 'Merchant plant tolling contracts divide risk' (2000), paragraph on the tolling party · text copy line 128

BEFORE: …me a hot topic during negotiations. Original equipment manufacturers are having trouble meeting delivery deadlines. There are also problems with malfunctioning or poorly assembled components, said Feldman. Many project sponsors are trying to shift some of the plant delivery risks to the contractor. 
QUOTE: For the tolling party, the agreement serves as a physical asset hedge to cover electricity trading positions.
AFTER:  At the same time, merchant plants can be used to extract the "volatility value", or upside, potentially present in volatile gas and power markets, said Feldman. In the restructuring of power purchase agreements and the calculation of equity returns, he explained, volatility value represents an effe…

### e20 · `ref-montel-optimisation` · tier 3 · How to optimise generation portfolios across spot and forward power markets
locator: Montel (data vendor) blog (2025), How flexibility drives portfolio value · text copy line 273

BEFORE: …ty drives portfolio value Flexibility is key to a profitable energy portfolio, with the availability of an asset during the most profitable times being crucial to a portfolio's success. This could be bolstered by facts such as battery storage, to make energy available during low-production periods. 
QUOTE: The value of startup time is also relevant: for example, shorter startup times allow an asset to respond to and adjust to imbalances and price spikes.
AFTER:  This time can be won back through more efficient batteries compared to gas-fired power plants. This also applies to ramping, which refers to the time it takes to adjust energy output in response to demand. And availability. Flexible PPAs can also help mitigate the financial impact of fixed-rate pow…

### e21 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals · text copy line 2843

BEFORE: … ESRs operate as both generation and load, they are a net load on the system. ESRs must consume energy to charge before they can discharge, and losses occur throughout that cycle. The National Renewable Energy Lab (NREL) cites a roundtrip efficiency of 85% in its 2024 Annual Technology Baseline.9 • 
QUOTE: Batteries ramp quickly - Unlike thermal generators, which require time to start up and adjust output, batteries are always online and can adjust their charging and discharging rate almost instantly.
AFTER:  This flexibility makes them well suited to provide fast-responding ancillary services such as regulation or responsive reserves to manage fluctuations in load or renewable generation. • They are driven by opportunity cost - The charging/discharging cycle and duration limits create unique economics …

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization · text copy line 9350

BEFORE: …ation between energy and operating reserves was only incorporated into the day-ahead market. Ancillary service awards from the day-ahead market represented physical obligations to provide reserves in real time, and the market withheld these reserves from the capacity available for real-time energy. 
QUOTE: With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services.
AFTER:  Fundamentally, real-time co-optimization produces more economically efficient awards for energy and ancillary services and satisfies the grid's reliability needs more effectively than the day-ahead market alone. The day-ahead market relies on expectations of real-time grid conditions, which are inh…

### e26 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), empirical versus optimized dispatch (text before e7) · text copy line 287

BEFORE: …lar+Storage Operations emp.lbl.gov/utility-scale-storage 7 In 2024, actual PV+storage operations realized $39/MWh of market value, 62% of the optimized value potential.    We collected empirical operating data for 18% of the modeled projects and compared observed with optimized dispatch. Modeled 
QUOTE: On a national average basis in 2024, projects in this subsample increased wholesale market value from $25/MWh for standalone PV to $39/MWh for combined PV+S output.
AFTER:  The empirical value fell well short of the optimized result of $63/MWh, achieving only 62% of modeled value. This gap was driven mainly by:     Sample: 49 projects totaling 4.2 GW PV , 1.6 GW Bat/5.3GWh Lower realized storage value, as the implied storage value adder was $14/MWh under empirical…

### e27 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), empirical versus optimized dispatch, sample note · text copy line 300

BEFORE: … average basis in 2024, projects in this subsample increased wholesale market value from $25/MWh for standalone PV to $39/MWh for combined PV+S output. The empirical value fell well short of the optimized result of $63/MWh, achieving only 62% of modeled value. This gap was driven mainly by:     
QUOTE: Sample: 49 projects totaling 4.2 GW PV , 1.6 GW Bat/5.3GWh
AFTER:  Lower realized storage value, as the implied storage value adder was $14/MWh under empirical operations, compared with $36/MWh under optimized dispatch (38%). Lower reported ancillary services revenue, often driven by under-participation in still lucrative markets. Lower capacity revenue in CAISO c…

### e28 · `ref-lbnl-hybrids-2026` · tier 2 · Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026)
locator: LBNL Year 1 Briefing (2026), barriers to increasing PV+S market value, first bullet · text copy line 382

BEFORE: …d | ENERGY ANALYSIS DIVISION | ENERGY MARKET S & PLANNING Utility-Scale Solar+Storage Operations emp.lbl.gov/utility-scale-storage 9 Multiple operational and organizational barriers limit the value that PV+S systems could offer the bulk power system Barriers to increasing PV+S market value include: 
QUOTE: Under-participation in wholesale markets, including still-lucrative ancillary services in less mature markets.
AFTER:  Restrictions on grid charging under earlier ITC rules for older projects Limited response to negative prices because of volume targets or hub-based settlement Dispatch strategies tied to out-of-market considerations including fixed delivery obligations under tolls, PPAs, REC markets or state incent…

### e29 · `ref-lbnl-pv-battery` · tier 2 · Influence of business models on PV-battery dispatch decisions and market value (briefing)
locator: LBNL, Influence of business models on PV-battery dispatch decisions (briefing), Conclusion, study scope · text copy line 827

BEFORE: … merchant plants, majority follow other business models  Associated operational signals deviate from wholesale market signals but can yield higher private revenue  Regulators tasked with tariff design and policy makers designing incentive programs should ensure these are aligned with grid needs  
QUOTE: Our study is only a snapshot of 11 PV-battery hybrids in 2020
AFTER: : Storage premiums will evolve (greater deployment, associated market maturity, changing price dynamics), but consideration of operator dispatch decisions will only become more important E NERGY T ECHNOLOGIES A REA | E NERGY A NALYSIS AND E NVIRONMENTAL I MPACTS D IVISION | E LECTRICITY M ARKETS & P…

### e24 · `ref-nrf-energy-hedges` · tier 3 · Energy Hedges: What To Look For
locator: Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (2015), Heat Rate Call Options · text copy line 109

BEFORE: …f the hedge - for a heat rate call option, the exercise schedule is set based on elections made by the hedge provider each day in advance. Each day on a day-ahead basis, the hedge provider - not the project owner - decides whether to consider the plant in operation solely for purposes of the hedge. 
QUOTE: The decision whether actually to run the plant is made by the project owner, but for purposes of determining whether a hedge payment will made, it is the option of the hedge provider to "call the hypothetical plant" from one hour to the next.
AFTER:  If the hedge provider decides not to call the hypothetical plant, then there is no revenue for that hour for purposes of calculating the cash settlement amount. If the hedge provider decides to call the hypothetical plant for hedge calculation purposes, then the revenue for that hour may be positiv…

### e25 · `ref-pillsbury-gas-hedges` · tier 3 · Financial hedges for US gas-fired power generation facilities
locator: Pillsbury white paper, 'Financial Hedges for United States Gas-Fired Power Generation Facilities' (2017), Heat Rate Call Options · text copy line 129

BEFORE: …lly involves concurrent negotiations with several providers with respect to economic terms, as well as related documentation including, for example, ISDA documents, intercreditor agreements, guarantees and consents. Heat Rate Call Options Another financial hedge is the heat rate call option (HRCO). 
QUOTE: Like a revenue put, the payout on the HRCO is purely notional and is not tied to the actual operations or results of the power generation facility.
AFTER:  Under a HRCO, the project receives fixed periodic cash payments from the HRCO counterparty and, in exchange, pays to the HRCO counterparty the excess of a market power price over a market gas price multiplied by an assumed heat rate and by an assumed quantity of power. The effect of the HRCO is sim…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e2, e3): No saved source defines "asset optimization"; the saved official sources describe the task rather than define the term. LBNL models an asset owner who is a price-taker seeking to maximize market value, optimizing battery operation and solar curtailment to maximize energy and ancillary service revenue less costs at an hourly resolution. [e1][e2] The IMM says ERCOT storage owners must optimize their charging and discharging cycles to maximize revenues, offering strategically to manage state of charge because the market software optimizes only one five-minute interval at a time. [e3]
- **How it works #1** (cites e1, e2): The national-lab version is a model: LBNL optimizes a solar-plus-storage plant from the view of a price-taking owner seeking to maximize market value, choosing battery operation and solar curtailment to maximize energy and ancillary service revenue less costs, hour by hour, while accounting for battery degradation. [e1][e2]
- **How it works #2** (cites e4, e2, e18, e19): Value is sought in more than one market. A data vendor blog focused on European markets (Montel) says producers capture value across spot, intraday and forward horizons by balancing physical generation, market positions and risk appetite; LBNL's model optimizes across energy and ancillary service products. [e4][e2] An owned asset can also back trading positions: Montel says a plant owner can top up a forward position from its own output, and the Oil & Gas Journal says a toll serves the tolling party as a physical asset hedge for trading positions. [e18][e19]
- **How it works #3** (cites e20, e21): Flexibility is what an optimizer has to work with. Montel says shorter start-up times let an asset respond to imbalances and price spikes, and the IMM says batteries, unlike thermal units, are always online and can change charging and discharging almost instantly. [e20][e21]
- **How it works #4** (cites e24, e25): The dispatch decision stays with the owner even when the asset is hedged. In a heat rate call option hedge, the hedge provider decides only for hedge calculation purposes, while the owner decides whether to actually run the plant, and the payout is notional rather than tied to the plant's actual operations. [e24][e25]
- **How it works #5** (cites e26, e7, e27, e8, e10, e29): Real operation falls short of the optimum. In LBNL's 2024 sample of 49 hybrid projects (national), empirical value reached only 62% of the $63/MWh optimized value. [e26][e7][e27] LBNL names fixed delivery obligations under tolls and PPAs, rule-based charging and discharging, and imperfect price forecasting among the barriers, and a second LBNL study, a snapshot of 11 PV-battery hybrids in 2020, found that only a minority optimized battery dispatch for wholesale revenue as merchant plants. [e8][e10][e29]
- **ERCOT context #1** (cites e11, e22, e13, e12): In ERCOT, the market software and the asset owner optimize different things. Co-optimization is the market model scheduling energy and ancillary services together and trading them off; before December 5, 2025 ERCOT did this only in the Day-Ahead Market, and with RTC the real-time dispatch now co-optimizes energy and ancillary services. [e11][e22] The owner's optimization is expressed in what it offers: a Generation Resource's Three-Part Supply Offer has a Startup Offer, a Minimum-Energy Offer and an Energy Offer Curve, and a single Resource can offer multiple ancillary services combined with energy offers. [e13][e12]
- **ERCOT context #2** (cites e3, e17, e16): For storage, the IMM says ESRs must optimize their charging and discharging cycles themselves, because SCED optimizes only one five-minute interval at a time, so ESR owners must offer strategically to manage state of charge; the IMM adds that these strategies can introduce market inefficiencies. [e3] The IMM has recommended a Multi-Interval Real-Time Market since its 2022 report so that SCED would optimize ESR charging and discharging over time. [e17] ERCOT's ancillary service awards are limited by each Resource's capability, including state of charge and SOC limits. [e16]
- **ERCOT context #3** (cites e14, e15, e9) FLAG number-not-in-quote: $100: The IMM reports how ERCOT storage optimization has shifted: ESRs moved from ancillary services toward energy arbitrage in 2024 as several AS markets saturated, and in 2025 55% of ESR energy offers were priced between $0 and $100 per MWh (46% in 2024, 25% in 2023). [e14][e15] LBNL found that in ERCOT, as in ISO-NE and NYISO, the largest shortfall of real hybrid operation against the optimum came from lower ancillary service value. [e9]
- **Key facts #1** (cites e26, e7, e27): - LBNL 2024 sample (49 projects, national): empirical PV-plus-storage value was 62% of the $63/MWh optimized value. [e26][e7][e27]
- **Key facts #2** (cites e11, e22): - ERCOT real-time dispatch co-optimizes energy and ancillary services since December 5, 2025 (RTC). [e11][e22]
- **Key facts #3** (cites e3): - SCED optimizes one five-minute interval at a time; ESR owners manage state of charge through their offers. [e3]
- **Key facts #4** (cites e17): - The IMM has recommended a Multi-Interval Real-Time Market since its 2022 report (Recommendation 2022-1). [e17]
- **Key facts #5** (cites e15): - 55% of ESR energy offers were priced at $0-100 per MWh in 2025. [e15]
- **Common confusion #2** (cites e11, e3): (Guidance) Asset optimization versus ERCOT co-optimization: co-optimization is the market model trading off energy and reserves across all Resources; asset optimization is one owner choosing its offers. [e11][e3]
- **Common confusion #3** (cites e1, e7): (Guidance) Optimized versus actual value: LBNL's optimized figures assume perfect foresight, so they are an upper bound, not a forecast. [e1][e7]
- **Questions #2** (cites e3, e17): Because SCED optimizes one five-minute interval at a time and does not plan across intervals; ESR owners must offer strategically to manage state of charge. [e3] The IMM has recommended a multi-interval market to move that work into SCED. [e17]
- **Questions #4** (cites e8, e28, e9): LBNL points to fixed delivery obligations under tolls and PPAs, rule-based operation, imperfect forecasting and under-participation in wholesale markets, including ancillary services in less mature markets; in ERCOT the biggest shortfall came from lower AS value. [e8][e28][e9]
- **Questions #6** (cites e14, e15): The IMM reports ESRs shifted toward energy arbitrage as AS markets saturated, and are offering energy more competitively. [e14][e15]
- **Questions #8** (cites e24, e25, e18, e19): A hedge such as a heat rate call does not decide dispatch: the owner still decides whether to run the real plant. [e24][e25] An owned asset can also back forward positions. [e18][e19]
- **Scenarios #2** (cites e22, e16): - ERCOT co-optimizes energy and AS in real time, but awards are limited by the Resource's SOC and limits, so the owner's offers must respect its state of charge. [e22][e16]
- **Scenarios #3** (cites e14, e15): - The IMM reports the shift toward energy arbitrage as AS markets saturated, and more competitive energy offers. [e14][e15]
- **Scenarios #4** (cites e9): - LBNL found that missing ancillary service value was the largest shortfall for ERCOT hybrids, so dropping AS entirely has a cost. [e9]
- **Link to energy-storage-resource** (cites e3): related Energy Storage Resource (ESR): The IMM says ESRs must optimize their charging and discharging cycles to maximize revenue because SCED optimizes only one five-minute interval at a time. [e3]
- **Link to battery-revenue-stack** (cites e14): related Battery Revenue Stack: The IMM reports ESRs shifted from ancillary services toward energy arbitrage as several AS markets saturated. [e14]
- **Link to three-part-supply-offer** (cites e13): used-in Three-Part Supply Offer: A Generation Resource's offer has three parts (Startup Offer, Minimum-Energy Offer, Energy Offer Curve), which is where commitment and dispatch choices are expressed in ERCOT. [e13]
- **Link to ancillary-services** (cites e12): related Ancillary Services (AS): ERCOT's training says one Resource can submit offers for multiple ancillary services combined with energy offers. [e12]
- **Link to rtc-b** (cites e11): related RTC+B (Real-Time Co-optimization + Batteries): Since December 5, 2025 ERCOT's real-time dispatch co-optimizes energy and ancillary services. [e11]
- **Link to tolling-agreement** (cites e8): related Tolling Agreement: LBNL lists fixed delivery obligations under tolls and PPAs among the reasons hybrid plants do not follow market-value-optimized dispatch. [e8]
- **Link to sced** (cites e3): related SCED (Security-Constrained Economic Dispatch): SCED optimizes one five-minute interval at a time, which is why the IMM says ESR owners must manage state of charge themselves. [e3]
- **Link to sc-battery-strategy** (cites e3, e16): used-in Scenario: Bidding a Battery After RTC+B: A battery strategy question is an asset optimization question, about which hours and products to offer into given state-of-charge limits. [e3][e16]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) Suppose (illustrative, made-up numbers) a 100 MW, 2-hour battery expects evening prices of $150/MWh and midday prices of $10/MWh, and an ECRS price of $5/MW-hour through the day. Holding 50 MW for ECRS all day earns about $6,000; cycling fully for energy earns roughly 200 MWh x ($150 - $10) = $28,000 before losses. The optimizer compares these, keeps enough state of charge for any reserve it offers, and offers accordingly, since SCED will not plan across intervals for it.
- (Say it like this) (Guidance) "Asset optimization is the owner's side of the market: deciding what to offer, when, and into which products to get the most value from the asset. In ERCOT, SCED co-optimizes each five-minute interval, so for batteries the cross-interval planning still sits with the owner."
- (Common confusion) (Guidance) Asset optimization is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here, and no saved source of any kind defines it. In this file the term is used as working shorthand for the owner-side task the Definition describes: choosing how an asset is operated and offered to get the most market value from it. That usage is the writer's, not a source's.

