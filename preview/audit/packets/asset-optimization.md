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

### e19 · `ref-ogj-tolling` · tier 3 · Merchant plant tolling contracts divide risk
locator: Oil & Gas Journal, 'Merchant plant tolling contracts divide risk' (2000), paragraph on the tolling party · text copy line 128

BEFORE: …me a hot topic during negotiations. Original equipment manufacturers are having trouble meeting delivery deadlines. There are also problems with malfunctioning or poorly assembled components, said Feldman. Many project sponsors are trying to shift some of the plant delivery risks to the contractor. 
QUOTE: For the tolling party, the agreement serves as a physical asset hedge to cover electricity trading positions.
AFTER:  At the same time, merchant plants can be used to extract the "volatility value", or upside, potentially present in volatile gas and power markets, said Feldman. In the restructuring of power purchase agreements and the calculation of equity returns, he explained, volatility value represents an effe…

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

### e30 · `ref-vistra-10k-2024` · tier 3 · Vistra Corp. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: Vistra Corp. Form 10-K for 2024, Item 1 Business, Wholesale Operations · text copy line 514

BEFORE: …l, monthly, and intra-month procurement to cover for deficiencies in the market. The voluntary Competitive Solicitation Process, which FERC approved in October 2015, is a modification to the Capacity Procurement Mechanism (CPM) and provides another avenue to sell RA capacity. Wholesale Operations - 
QUOTE: Our wholesale commodity risk management group is responsible for dispatching our generation fleet in response to market needs after implementing portfolio optimization strategies, thus linking and integrating the generation fleet production with our retail customer and wholesale sales opportunities.
AFTER:  Market demand, also known as load, faced by electric power systems, such as those we operate in, varies from moment to moment as a result of changes in business and residential demand, which is often driven by weather. Unlike most other commodities, the production and consumption of electricity mus…

### e31 · `ref-vistra-10k-2024` · tier 3 · Vistra Corp. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: Vistra Corp. Form 10-K for 2024, Item 1 Business, Wholesale Operations, closing paragraph · text copy line 516

BEFORE: …al, baseload units, intermediate/load following units, and peaking units are dispatched into the ISO/RTO grid in order from lowest to highest variable cost. Price formation is typically based on the highest variable cost unit that clears the market to satisfy system demand at a given point in time. 
QUOTE: Our commodity risk management group enters into electricity, natural gas, and other commodity derivative contracts to reduce exposure to price fluctuations with the goal of reducing volatility of future revenues and fuel costs for our generation facilities and purchased power costs for our Retail segment.
AFTER:  5 ------------------------------------------------------------------------ Table of Contents Seasonality The demand for and market prices of electricity and natural gas are affected by weather. As a result, our operating results are impacted by extreme or sustained weather conditions and may fluctu…

### e33 · `ref-vistra-10k-2024` · tier 3 · Vistra Corp. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: Vistra Corp. Form 10-K for 2024, Item 7 MD&A, 2024 highlights · text copy line 1741

BEFORE: …1, 2024. This highlights our competitive advantage of coupling retail with our reliable and efficient generation fleet and wholesale commodity risk management capabilities, which reduces the effects of commodity price movements and contributes to the stability and predictability of our cash flows. •
QUOTE: Our commercial team focused on effectively and efficiently managing risk by opportunistically hedging and optimizing our assets and business positions, which led to strong plant operating performance and energy margins.
AFTER:  •Our retail brands served the retail electricity and natural gas needs of end-use residential, small business, and commercial and industrial electricity customers through multiple sales and marketing channels with products and solutions that differentiates Vistra from our competitors. Disciplined c…

### e34 · `ref-nrg-10k-2024` · tier 3 · NRG Energy, Inc. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Market Operations, Power · text copy line 614

BEFORE: …ent manner and to maximize the value of the Company's assets in satisfying its customer load requirements. These objectives are intended to reduce supply costs and maximize earnings with predictable cash flows. Power and natural gas are the two main commercial groups within Market Operations. Power 
QUOTE: The power commercial group is responsible for end-use electricity supply including power plant optimization and certain fuel supply. To meet the market operations objectives, NRG enters into supply, power and gas hedging agreements via a wide range of products and contracts, including (i) physical and financial commodity instruments, (ii) fuel supply and transportation contracts, (iii) PPAs and Renewable PPAs, and (iv) capacity and other contracted revenue or supply sources, as further discussed below.
AFTER:  In addition, because changes in power prices in the markets where NRG operates are generally correlated to changes in natural gas prices, NRG uses hedging strategies that may include power and natural gas forward purchases and sales contracts to manage commodity price risk. Physical and Financial C…

### e35 · `ref-nrg-10k-2024` · tier 3 · NRG Energy, Inc. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Market Operations, Power (paragraph after e34) · text copy line 616

BEFORE: … gas hedging agreements via a wide range of products and contracts, including (i) physical and financial commodity instruments, (ii) fuel supply and transportation contracts, (iii) PPAs and Renewable PPAs, and (iv) capacity and other contracted revenue or supply sources, as further discussed below. 
QUOTE: In addition, because changes in power prices in the markets where NRG operates are generally correlated to changes in natural gas prices, NRG uses hedging strategies that may include power and natural gas forward purchases and sales contracts to manage commodity price risk.
AFTER:  Physical and Financial Commodity Instruments NRG trades power, natural gas, environmental, weather and other physical and financial commodity related products, including forwards, futures, options and swaps. NRG enters into these instruments primarily to manage price and delivery risk, 8 ----------…

### e36 · `ref-nrg-10k-2024` · tier 3 · NRG Energy, Inc. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: NRG Energy, Inc. Form 10-K for 2024, Notes to financial statements, derivative instruments · text copy line 3706

BEFORE: …rading activities are subject to limits in accordance with the Company's Risk Management Policy. These contracts are recognized on the balance sheet at fair value and changes in the fair value of these derivative instruments are recognized in earnings. Mark-to-Market for Economic Hedging Activities 
QUOTE: NRG enters into derivative instruments to manage price and delivery risk, optimize physical and contractual assets in the portfolio and manage working capital requirements.
AFTER:  The mark-to-market for economic hedging activities are recognized to revenues or cost of operations during the reporting period. Operations and Maintenance and Other Cost of Operations Operations and maintenance costs include major and other routine preventative (planned outage) and corrective (for…

### e37 · `ref-nrg-10k-2024` · tier 3 · NRG Energy, Inc. Form 10-K for fiscal year 2024 (retrieved 2026-11-22)
locator: NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Plant Operations · text copy line 652

BEFORE: …ale generation portfolio with approximately 13 GW of fossil fuel, and renewable generation capacity at 18 plants. The Company's wholesale generation assets are diversified by fuel-type and dispatch level, which helps mitigate the risks associated with fuel price volatility and market demand cycles. 
QUOTE: NRG continually evaluates its generation portfolio to focus on asset optimization opportunities and the locational value of its generation assets in each of the markets where the Company participates, as well as opportunities for the development of new generation.
AFTER:  9 ------------------------------------------------------------------------ The following table summarizes NRG's generation portfolio as of December 31, 2024: [TABLE] (a)Utility Scale Solar is described in MW on an alternating current basis. MW figures provided represent nominal summer net MW capaci…

### e38 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024 edition), Chapter on electricity markets, Day-Ahead Energy Markets · text copy line 9313

BEFORE: …ower flows n FEDERAL ENERGY REGULATORY COMMISSION based on size, contractual terms and scheduling. Day-Ahead Energy Markets The day-ahead energy market produces financially binding schedules for the production and consumption of electricity one day before its production and use (the operating day). 
QUOTE: The purpose of the day-ahead market is to give generators and load-serving entities a means for scheduling their activities with sufficient lead time to procure fuel or bring up resources with longer start times.
AFTER:  The day-ahead bids and offers are based on a forecast of loads and are consistent with resources' business strategies. In day-ahead markets, offers of supply and demand bids are compiled hours ahead of the beginning of the operating day. The RTO/ISO then runs a computerized market model that matche…

### e39 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024), Day-Ahead Energy Markets · text copy line 9317

BEFORE: … consumption of electricity one day before its production and use (the operating day). The purpose of the day-ahead market is to give generators and load-serving entities a means for scheduling their activities with sufficient lead time to procure fuel or bring up resources with longer start times. 
QUOTE: The day-ahead bids and offers are based on a forecast of loads and are consistent with resources' business strategies.
AFTER:  In day-ahead markets, offers of supply and demand bids are compiled hours ahead of the beginning of the operating day. The RTO/ISO then runs a computerized market model that matches demand and supply throughout the market footprint for each hour of the day. Additionally, the model must account for …

### e40 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024), RTOs/ISOs · text copy line 8967

BEFORE: …the WEIM, which are discussed at the end of the SPP and CAISO sections below. • • • • • • • PJM, 165 GW (summer of 2006) MISO, 127 GW (summer of 2011) ERCOT, 80 GW (summer of 2022) SPP, 53 GW (summer of 2022) CAISO, 52 GW (summer of 2022) NYISO, 34 GW (summer of 2013) ISO-NE, 28 GW (summer of 2006) 
QUOTE: Unlike traditional electricity systems, RTOs/ISOs also operate competitive, nondiscriminatory electricity markets, which allow resource owners to offer resources and load-serving entities to submit bids for generation. These markets are the primary mechanism for dispatching resources, managing transmission congestion and pricing electricity.
AFTER:  RTOs/ISOs work in conjunction with the resources and transmission-owning resources that participate in the RTO/ISO to maintain reliability. RTOs/ISOs also coordinate the maintenance of generation and transmission systems and oversee a transmission planning process to identify needed upgrades in bot…

### e41 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024), Chapter on trading, Hedging · text copy line 14495

BEFORE: …her company. Trading strategies in natural gas and electricity markets include activities such as buying or selling the physical product, managing the risk of physical and financial positions - also known as hedging--and attempting to make money through speculation. 2024 ENERGY PRIMER n 129 Hedging 
QUOTE: Hedging is the act of establishing an offsetting position with the intent of minimizing substantial losses should an original position lose its value.
AFTER:  More specifically, market participants and traders with physical positions are exposed to potential gains or losses as market prices change over time. To manage this risk, market participants and traders may use any of a variety of transactions with opposing risk exposures to reduce or eliminate th…

### e42 · `ref-ferc-energy-primer` · tier 2 · Energy Primer: A Handbook of Energy Market Basics (January 2024)
locator: FERC Energy Primer (2024), Chapter on trading, Traders' Strategy · text copy line 14481

BEFORE: …termine shortterm movements and trends, helping traders time their buys and sells. TRADERS' STRATEGY A trader's strategy consists of a defined plan that includes decisions such as what contracts to trade and how to trade them. A trader's strategy will depend on the objectives of his or her company. 
QUOTE: Trading strategies in natural gas and electricity markets include activities such as buying or selling the physical product, managing the risk of physical and financial positions - also known as hedging--and attempting to make money through speculation.
AFTER:  2024 ENERGY PRIMER n 129 Hedging Hedging is the act of establishing an offsetting position with the intent of minimizing substantial losses should an original position lose its value. More specifically, market participants and traders with physical positions are exposed to potential gains or losses…

### e43 · `ref-cra-ercot-value-stacking-2025` · tier 3 · Energy and ancillary services value stacking in ERCOT (August 2025) (retrieved 2026-11-22)
locator: CRA International, 'Energy and ancillary services value stacking in ERCOT' (August 2025), Introduction, ESOP model · text copy line 90

BEFORE: …an asset valuation tool used to assess the performance of fastresponding resources in changing market conditions and scenarios. ESOP is an optimization model that computes revenues through participation of resources in real time and the ancillary services markets with five-minute level granularity. 
QUOTE: Given projections of energy and ancillary services prices, ESOP outputs optimal dispatch decisions for storage or other fast response resources (i.e., value stacking strategies) that are unique to (a) the resource's technological characteristics, and (b) the regional market's participation rules. Decisions include whether to discharge or charge and by how much, and whether to commit to participate in the energy or ancillary services markets.
AFTER:  ESOP can represent a wide spectrum of fast-responding thermal and storage technologies with a set of parameters-ones that determine the resource performance in value stacking. These performance parameters depict the strengths and shortcomings of each type of technology, which shape unique strategie…

### e60 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Tolling / PPA, physical toll · text copy line 165

BEFORE: … to fully merchant positions with high upside but substantial volatility. [] Tolling / PPA The offtaker pays a fixed $/MW fee for full access to the battery's capacity. The asset owner locks in stable revenue, while the offtaker manages all upside and downside from arbitrage and Ancillary Services. 
QUOTE: A physical tolling agreement gives the offtaker direct dispatch rights over a specific battery or generation asset. The offtaker schedules, bids, and controls the physical asset, while the owner receives a fixed or structured payment regardless of how it is used.
AFTER:  A virtual tolling agreement is financial. The asset owner continues to operate the asset, but the offtaker takes on the market risk and return through a contractual swap or settlement mechanism. The offtaker gets the economic exposure of dispatch without physically scheduling the asset. Floor + Rev…

### e61 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Tolling / PPA, physical and virtual tolls · text copy line 167

BEFORE: …m arbitrage and Ancillary Services. A physical tolling agreement gives the offtaker direct dispatch rights over a specific battery or generation asset. The offtaker schedules, bids, and controls the physical asset, while the owner receives a fixed or structured payment regardless of how it is used. 
QUOTE: A virtual tolling agreement is financial. The asset owner continues to operate the asset, but the offtaker takes on the market risk and return through a contractual swap or settlement mechanism.
AFTER:  The offtaker gets the economic exposure of dispatch without physically scheduling the asset. Floor + Revenue Share The offtaker guarantees a minimum payment per MW (a floor), with upside shared as a percentage of market revenues. This hybrid strikes a balance between predictable revenue and exposur…

### e44 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy, 'Part 1: The state of battery offtake and tolling agreements in ERCOT' (September 4, 2025), Tolling / PPA · text copy line 163

BEFORE: …tures are available? Structuring a tolling or offtake agreement depends heavily on the asset owner's risk appetite and financing needs. These deals fall on a spectrum from fully contracted, low-risk agreements to fully merchant positions with high upside but substantial volatility. [] Tolling / PPA 
QUOTE: The offtaker pays a fixed $/MW fee for full access to the battery's capacity. The asset owner locks in stable revenue, while the offtaker manages all upside and downside from arbitrage and Ancillary Services.
AFTER:  A physical tolling agreement gives the offtaker direct dispatch rights over a specific battery or generation asset. The offtaker schedules, bids, and controls the physical asset, while the owner receives a fixed or structured payment regardless of how it is used. A virtual tolling agreement is fina…

### e45 · `ref-troutman-storage-offtake-tolling` · tier 3 · Monetizing Opportunities in Energy Storage in a Post-IRA World (retrieved 2026-11-22)
locator: Troutman Pepper, 'Monetizing Opportunities in Energy Storage in a Post-IRA World' (May 8, 2023), transcript (AI-generated, per the firm's disclaimer), Vaughn Morrison at 02:00 · text copy line 235

BEFORE: …really take on. And I would love to hear from you about just the different off-take arrangements that you're seeing out there, in particular the tolling agreement. Vaughn Morrison (02:00): Well, the tolling agreement - so that's kind of the most conventional off-take arrangement for energy storage. 
QUOTE: Under that structure, the off-taker has authority to charge and discharge the battery and run it as they see fit within certain operating parameters, in exchange for a monthly tolling payment, typically often with some adjusters based on project performance.
AFTER:  And that is the most easily understandable, I think, form of contracted offtake for energy storage. From there, it gets more complex. You can add to that the resource adequacy contracts in Cal ISO, which provide for a routine, largely fixed payment. And then there's all kinds of financially settled…

### e46 · `ref-enspired-bess-revenue-models` · tier 3 · BESS revenue models: tolling, floor & fully merchant (retrieved 2026-11-22)
locator: enspired Trading (European battery optimizer), 'BESS revenue models: tolling, floor & fully merchant' (February 4, 2025), Tolling for battery storage · text copy line 187

BEFORE: …o help you navigate the fine line between revenue security and risk management. [Get your BESS revenue strategy] Tolling for battery storage A battery tolling agreement is a contract between an asset owner (toller) and a toll provider (offtaker) that combines revenue stability with risk mitigation. 
QUOTE: Tolling agreements for BESS grant the asset owner a pre-defined sum of guaranteed revenue, independent of the commercial result later achieved by an optimizer. The offtaker has the right to utilize the asset's capacity in the markets as desired and put limitations on the toller.
AFTER:  This is a convenient setup for the asset owner, as it generates fixed revenue, while the risk passes to the toll provider, who must pay the tolling fee even if the asset underperforms commercially. The toller is responsible for the technical setup and all administrative aspects and must guarantee a…

### e47 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Floor + Revenue Share · text copy line 171

BEFORE: …tolling agreement is financial. The asset owner continues to operate the asset, but the offtaker takes on the market risk and return through a contractual swap or settlement mechanism. The offtaker gets the economic exposure of dispatch without physically scheduling the asset. Floor + Revenue Share 
QUOTE: The offtaker guarantees a minimum payment per MW (a floor), with upside shared as a percentage of market revenues.
AFTER:  This hybrid strikes a balance between predictable revenue and exposure to market highs. Revenue Share All payments depend on actual market revenues earned, with no floor or fixed element. This increases risk for the owner but allows shared exposure to strong market conditions. Merchant The battery …

### e48 · `ref-enspired-bess-revenue-models` · tier 3 · BESS revenue models: tolling, floor & fully merchant (retrieved 2026-11-22)
locator: enspired Trading (2025), Floor price for BESS, with and without cap · text copy line 244

BEFORE: …ner earnings 63k 243k -------------------------- ------------- ------------- "If you are looking for the highest revenue potential and have a developed risk tolerance, fully merchant is your strategy!" Jürgen Mayerhofer CEO & Co-founder [Jürgen Mayerhofer] Floor price for BESS, with and without cap 
QUOTE: A floor price is the minimum revenue an asset owner makes when using the optimization service of an RTM (route-to-market) provider. This amount is typically contractually fixed but can be variable in certain scenarios. The guaranteed revenue is lower than in a tolling agreement because the asset owner retains the upside potential, while the optimizer assumes the main risk.
AFTER:  The guaranteed minimum revenue can increase depending on the asset's trading outcome and the contractually fixed revenue split. Floor prices might be capped, meaning the upside potential is limited to a certain amount. Revenue scenarios for BESS floor price without cap +--------------------------+:…

### e49 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Third-party optimization · text copy line 197

BEFORE: …et is unconfirmed. - Equilibrium Energy is optimizing two assets on behalf of Ormat Technologies. The first one, Lower Rio BESS, began operations in September 2025, making it the most recent tolled battery to come online. Third-party optimization Not all asset owners choose full tolling structures. 
QUOTE: An alternative is to partner with third-party optimizers who provide bidding, dispatch, and trading services, including AI-driven autobidders. This approach allows owners to retain merchant exposure while reducing operational complexity.
AFTER:  Unlike a tolling agreement where the offtaker guarantees payment to the asset owner, under these other third-party partnerships, the asset owner pays a fee to the optimizer. Third-party optimization helps capture value in highly dynamic markets, where intraday spreads and Ancillary Service prices c…

### e50 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Third-party optimization · text copy line 199

BEFORE: …mization Not all asset owners choose full tolling structures. An alternative is to partner with third-party optimizers who provide bidding, dispatch, and trading services, including AI-driven autobidders. This approach allows owners to retain merchant exposure while reducing operational complexity. 
QUOTE: Unlike a tolling agreement where the offtaker guarantees payment to the asset owner, under these other third-party partnerships, the asset owner pays a fee to the optimizer.
AFTER:  Third-party optimization helps capture value in highly dynamic markets, where intraday spreads and Ancillary Service prices can swing rapidly. For owners who are unwilling to fully relinquish merchant upside, this approach provides a way to outsource complexity without sacrificing potential revenue…

### e51 · `ref-enspired-bess-revenue-models` · tier 3 · BESS revenue models: tolling, floor & fully merchant (retrieved 2026-11-22)
locator: enspired Trading (2025), Fully merchant batteries · text copy line 221

BEFORE: …In a fully merchant setup, your BESS is exposed to the full downside and the full upside potential. If the battery performs well commercially, this model captures the highest returns, but it features no protection against loss if the asset's performance is affected by unfavorable market conditions. 
QUOTE: The high-risk profile of the fully merchant strategy is reflected in the client's proportionally higher revenue share.
AFTER:  Revenue scenarios for fully merchant batteries -------------------------- ------------- ------------- scenario #1 scenario #2 contracted revenue split 90:10 90:10 generated revenue 70k 270k asset owner earnings 63k 243k -------------------------- ------------- ------------- "If you are looking for …

### e59 · `ref-enspired-bess-revenue-models` · tier 3 · BESS revenue models: tolling, floor & fully merchant (retrieved 2026-11-22)
locator: enspired Trading (2025), table 'Revenue scenarios for fully merchant batteries' (illustrative figures) · text copy line 229

BEFORE: …formance is affected by unfavorable market conditions. The high-risk profile of the fully merchant strategy is reflected in the client's proportionally higher revenue share. Revenue scenarios for fully merchant batteries -------------------------- ------------- ------------- scenario #1 scenario #2 
QUOTE: contracted revenue split 90:10 90:10 generated revenue 70k 270k asset owner earnings 63k 243k
AFTER:  -------------------------- ------------- ------------- "If you are looking for the highest revenue potential and have a developed risk tolerance, fully merchant is your strategy!" Jürgen Mayerhofer CEO & Co-founder [Jürgen Mayerhofer] Floor price for BESS, with and without cap A floor price is the …

### e52 · `ref-cftc-swap-definition-2012` · tier 2 · Further Definition of Swap, Security-Based Swap... (Final Rule, 77 FR 48208 and product interpretations) (retrieved 2026-11-22)
locator: CFTC and SEC, Further Definition of Swap (Final Rule, 77 FR 48208, August 2012), section II.B.2.b(iv), Energy Management Agreements · text copy line 10666

BEFORE: ….S.C. 6(c)(6). --------------------------------------------------------------------------- With regard to Energy Management Agreements (``EMAs''), in general, commenters expressed the view that EMAs are forwards, and not swaps, although they did not provide analysis to support that conclusion.\388\ 
QUOTE: They also did not provide a working definition of EMAs. The CFTC understands that EMAs can cover a number of services and transactions, which can include spot, forward and swap transactions.
AFTER:  EMAs can include services such as: (i) Acting as a financial intermediary by substituting one party's credit and liquidity for those of a less credit worthy owner of illiquid energy producing assets (i.e. the other party to the EMA) to facilitate the owner's purchase of fuel and sale of power; \389…

### e55 · `ref-cftc-swap-definition-2012` · tier 2 · Further Definition of Swap, Security-Based Swap... (Final Rule, 77 FR 48208 and product interpretations) (retrieved 2026-11-22)
locator: CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, list of services, item (ii) · text copy line 10680

BEFORE: …MAs can include services such as: (i) Acting as a financial intermediary by substituting one party's credit and liquidity for those of a less credit worthy owner of illiquid energy producing assets (i.e. the other party to the EMA) to facilitate the owner's purchase of fuel and sale of power; \389\ 
QUOTE: (ii) providing market information to assist the owner in developing and refining a risk-management plan for the plant;
AFTER:  \390\ and (iii) procuring fuel, arranging delivery and storage, selling excess power not needed to serve load for another party.\391\ The entity carrying out these activities may receive a portion of the revenue generated from such activities as compensation for its efforts. Because commenters did …

### e53 · `ref-cftc-swap-definition-2012` · tier 2 · Further Definition of Swap, Security-Based Swap... (Final Rule, 77 FR 48208 and product interpretations) (retrieved 2026-11-22)
locator: CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, list of services, item (iii) · text copy line 10684

BEFORE: …se of a less credit worthy owner of illiquid energy producing assets (i.e. the other party to the EMA) to facilitate the owner's purchase of fuel and sale of power; \389\ (ii) providing market information to assist the owner in developing and refining a risk-management plan for the plant; \390\ and 
QUOTE: (iii) procuring fuel, arranging delivery and storage, selling excess power not needed to serve load for another party.
AFTER: \391\ The entity carrying out these activities may receive a portion of the revenue generated from such activities as compensation for its efforts. Because commenters did not provide a working definition of EMAs, the CFTC cannot state categorically that EMAs are or are not swaps. However, if the fue…

### e54 · `ref-cftc-swap-definition-2012` · tier 2 · Further Definition of Swap, Security-Based Swap... (Final Rule, 77 FR 48208 and product interpretations) (retrieved 2026-11-22)
locator: CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, compensation · text copy line 10686

BEFORE: …er's purchase of fuel and sale of power; \389\ (ii) providing market information to assist the owner in developing and refining a risk-management plan for the plant; \390\ and (iii) procuring fuel, arranging delivery and storage, selling excess power not needed to serve load for another party.\391\ 
QUOTE: The entity carrying out these activities may receive a portion of the revenue generated from such activities as compensation for its efforts.
AFTER:  Because commenters did not provide a working definition of EMAs, the CFTC cannot state categorically that EMAs are or are not swaps. However, if the fuel acquisition, sales of excess generation and any other transactions executed under the auspices of an EMA are not swaps, nothing about the fact th…

### e56 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Qualified Scheduling Entity (QSE) · text copy line 2130

BEFORE: …R as defined in the P.U.C. SUBST. R. 25.43, Provider of Last Resort (POLR), for default Customer service, and as further described in Section 15.1, Customer Switch of Competitive Retailer. Provisional Controllable Load Resource (PCLR) (see Resource) Q [Back to Top] Qualified Scheduling Entity (QSE) 
QUOTE: A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT.
AFTER:  Data Agent-Only Qualified Scheduling Entity (QSE) A limited type of QSE that is registered with ERCOT pursuant to Section 16.2.1.2, Data Agent-Only Qualified Scheduling Entities, for the sole purpose of acting as an agent for a QSE that meets all the criteria of Section 16.2.1, Criteria for Qualifi…

### e57 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …o power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. 
QUOTE: In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR's Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) limits.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e58 · `ref-modo-ercot-offtake-tolling-2025` · tier 3 · Part 1: The state of battery offtake and tolling agreements in ERCOT (retrieved 2026-11-22)
locator: Modo Energy (2025), Merchant · text copy line 179

BEFORE: …et revenues. This hybrid strikes a balance between predictable revenue and exposure to market highs. Revenue Share All payments depend on actual market revenues earned, with no floor or fixed element. This increases risk for the owner but allows shared exposure to strong market conditions. Merchant 
QUOTE: The battery participates directly in wholesale markets without any contractual hedges or guarantees.
AFTER:  This exposes the owner fully to volatility and uncertainty, but they also capture all upside. Hover over each bar for more details and examine the differences between revenue contracts for BESS assets. How have offtake agreements been implemented so far? While information about offtake agreements i…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e37, e30, e31, e34, e35) FLAG number-not-in-quote: 2024: No saved source defines "asset optimization" as a term: NRG's 2024 annual report uses the phrase ("asset optimization opportunities") without defining it. [e37] What the sources describe is a function, so this entry describes the function rather than defining the term. Two generating companies describe that function for their own fleets in their 2024 SEC annual reports. Vistra says its wholesale commodity risk management group dispatches its generation fleet in response to market needs after implementing portfolio optimization strategies, and that its commodity risk management group enters into power, gas and other derivative contracts to reduce price exposure; NRG says its power commercial group is responsible for end-use electricity supply including power plant optimization and certain fuel supply, and enters into power and gas hedging agreements. [e30][e31][e34] Each is describing its own organization; what the two descriptions share is a commercial function that decides how plants are run, hedges power and fuel price exposure, and ties the fleet to supplying the company's own end-use customers. [e30][e31][e34][e35]
- **How it works #1** (cites e40, e39, e38): The optimizer's decisions reach the market as offers. FERC says RTO/ISO markets let resource owners offer resources and load-serving entities bid, and that these markets are the primary mechanism for dispatching resources; day-ahead offers are based on load forecasts and are consistent with resources' business strategies, and the day-ahead market gives generators lead time to procure fuel or bring up resources with longer start times. [e40][e39][e38] (FERC describes US organized markets generally; ERCOT's own rules are under ERCOT context.)
- **How it works #2** (cites e41, e42, e31, e35, e36, e33) FLAG number-not-in-quote: 2024: Hedging is part of the same job. FERC defines hedging as establishing an offsetting position to minimize losses should the original position lose value, and lists hedging alongside physical buying and selling and speculation among trading strategies in gas and electricity. [e41][e42] Vistra and NRG both say they use power and gas derivatives or forward contracts to manage commodity price risk; NRG links this to power prices being generally correlated with gas prices. [e31][e35][e36] Vistra says its commercial team hedged and optimized its assets and positions "opportunistically" in 2024; that is the company's own account of its year. [e33]
- **How it works #3** (cites e19, e30): An owned or tolled plant can back trading and retail positions. The Oil & Gas Journal says a toll serves the tolling party as a physical asset hedge for its trading positions, and Vistra describes dispatching its fleet in a way that links generation with its retail and wholesale sales. [e19][e30]
- **How it works #4** (cites e1, e2, e43): For storage, optimization models make the decisions explicit. LBNL models a price-taking owner seeking to maximize market value, choosing battery operation and solar curtailment to maximize energy and ancillary service revenue less costs, hour by hour, while accounting for battery degradation. [e1][e2] CRA's ESOP model, given energy and ancillary service price projections, outputs optimal dispatch decisions that depend on the resource's characteristics and the market's participation rules: whether to charge or discharge and by how much, and whether to commit to the energy or ancillary service market. [e43]
- **How it works #5** (cites e38, e21): Flexibility is what an optimizer has to work with. FERC notes that resources with longer start times need day-ahead lead time, and the IMM says batteries, unlike thermal units that need time to start up and adjust output, are always online and can change charging and discharging almost instantly. [e38][e21]
- **How it works #6** (cites e24, e25): The dispatch decision stays with the owner even when the asset is hedged. In a heat rate call option hedge, the hedge provider decides only for hedge calculation purposes, while the owner decides whether to actually run the plant, and the payout is notional rather than tied to the plant's actual operations. [e24][e25]
- **How it works #7** (cites e44, e46, e48, e50, e51): For batteries, who does the optimizing is itself a contract choice. Three structures recur in the sources. [e44][e46][e48][e50][e51]
- **How it works #8** (cites e44, e60, e45, e46, e61): - Toll: the offtaker pays the owner a fixed payment and takes the battery's market upside and downside; in a physical toll it also schedules, bids and operates the battery (Modo Energy and Troutman Pepper for the US; enspired describes the same in Europe). Troutman adds that the monthly payment often has adjusters based on project performance, and Modo describes a virtual toll in which the owner keeps operating the asset while the offtaker takes the market risk and return financially. [e44][e60][e45][e46][e61]
- **How it works #9** (cites e47, e48): - Floor plus revenue share: the owner is guaranteed a minimum revenue and keeps a share of the upside. The sources differ on who gives the floor: Modo says the offtaker; enspired (Europe) says the route-to-market optimizer, which then assumes the main risk. [e47][e48]
- **How it works #10** (cites e49, e50, e51, e59): - Third-party optimization: the owner keeps merchant exposure and pays the optimizer. Modo says owners can hire third-party optimizers for bidding, dispatch and trading and pay them a fee; enspired's fully merchant model pays the optimizer through a revenue split (90:10 in its illustrative table). [e49][e50][e51][e59]
- **How it works #11** (cites e52, e55, e53, e54) FLAG number-not-in-quote: 2012: Outside batteries, the CFTC's 2012 swap-definition rule describes energy management agreements (EMAs). It says commenters gave no working definition, but that EMAs can cover spot, forward and swap transactions and services such as providing market information for a plant's risk-management plan and procuring fuel, arranging delivery and storage and selling excess power, and that the entity doing this may receive a portion of the revenue as compensation. [e52][e55][e53][e54]
- **How it works #12** (cites e26, e7, e27, e8, e10, e29): Real operation falls short of the optimum. In LBNL's 2024 sample of 49 hybrid projects (national), empirical value reached only 62% of the $63/MWh optimized value. [e26][e7][e27] LBNL names fixed delivery obligations under tolls and PPAs, rule-based charging and discharging, and imperfect price forecasting among the barriers, and a second LBNL study, a snapshot of 11 PV-battery hybrids in 2020, found that only a minority optimized battery dispatch for wholesale revenue as merchant plants. [e8][e10][e29]
- **ERCOT context #1** (cites e11, e22, e56, e13, e12): In ERCOT, the market software and the asset owner optimize different things. Co-optimization is the market model scheduling energy and ancillary services together and trading them off; before December 5, 2025 ERCOT did this only in the Day-Ahead Market, and with RTC the real-time dispatch now co-optimizes energy and ancillary services. [e11][e22] The owner's optimization is expressed in what its QSE offers: a QSE is the Market Participant qualified to communicate with ERCOT for Resource Entities and to settle with ERCOT, a Generation Resource's Three-Part Supply Offer (Startup Offer, Minimum-Energy Offer and Energy Offer Curve) is made by its QSE, and ERCOT's Forward Markets 101 training says a single Resource can make multiple ancillary service offers, which may be combined with energy offers. [e56][e13][e12]
- **ERCOT context #2** (cites e3, e17, e57, e16): For storage, the IMM says ESRs must optimize their charging and discharging cycles themselves, because SCED optimizes only one five-minute interval at a time, so ESR owners must offer strategically to manage state of charge; the IMM adds that these strategies can introduce market inefficiencies. [e3] Since its 2022 report the IMM has recommended that ERCOT consider implementing a Multi-Interval Real-Time Market, which it says would allow SCED to optimize ESR charging and discharging over time. [e17] Within each interval, SCED accounts for each ESR's state of charge and SOC limits so that its base points and ancillary service awards are feasible, and ancillary service awards are limited by each Resource's capability, including state of charge and SOC limits. [e57][e16]
- **ERCOT context #3** (cites e14, e15, e9) FLAG number-not-in-quote: $100: The IMM reports how ERCOT storage optimization has shifted: ESRs moved from ancillary services toward energy arbitrage in 2024 as several AS markets saturated, and in 2025 55% of ESR energy offers were priced between $0 and $100 per MWh (46% in 2024, 25% in 2023). [e14][e15] LBNL found that in ERCOT, as in ISO-NE and NYISO, the largest shortfall of real hybrid operation against the optimum came from lower ancillary service value. [e9]
- **Key facts #1** (cites e30, e31, e34): - Function, as two generators describe their own: dispatching the fleet after portfolio optimization and hedging with derivatives (Vistra); power plant optimization, certain fuel supply and power and gas hedging (NRG). [e30][e31][e34]
- **Key facts #2** (cites e44, e45, e47, e48, e50, e51): - Battery contract structures: toll (fixed payment to owner), floor plus revenue share, and third-party optimization paid by fee or revenue share. [e44][e45][e47][e48][e50][e51]
- **Key facts #3** (cites e52, e54) FLAG number-not-in-quote: 2012: - EMAs (CFTC, 2012): commenters gave no working definition; the CFTC understands that the managing entity may be paid a portion of the revenue. [e52][e54]
- **Key facts #4** (cites e26, e7, e27): - LBNL 2024 sample (49 projects, national): empirical PV-plus-storage value was 62% of the $63/MWh optimized value. [e26][e7][e27]
- **Key facts #5** (cites e11, e22): - ERCOT real-time dispatch co-optimizes energy and ancillary services since December 5, 2025 (RTC). [e11][e22]
- **Key facts #6** (cites e3): - SCED optimizes one five-minute interval at a time; ESR owners manage state of charge through their offers. [e3]
- **Key facts #7** (cites e17): - The IMM has recommended since its 2022 report that ERCOT consider implementing a Multi-Interval Real-Time Market (Recommendation 2022-1). [e17]
- **Key facts #8** (cites e15): - 55% of ESR energy offers were priced at $0-100 per MWh in 2025. [e15]
- **Common confusion #2** (cites e11, e3): (Guidance) Asset optimization versus ERCOT co-optimization: co-optimization is the market model trading off energy and reserves across all Resources; asset optimization is one owner choosing its offers. [e11][e3]
- **Common confusion #3** (cites e50, e49): (Guidance) Toll versus third-party optimizer: under a toll the offtaker guarantees payment to the owner; under a third-party optimization agreement the owner pays the optimizer and keeps the market exposure. [e50][e49]
- **Common confusion #4** (cites e58, e51): (Guidance) "Merchant" is used differently: Modo uses it for a battery with no contractual hedges or guarantees, while enspired's "fully merchant" model still splits revenue with the optimizer. [e58][e51]
- **Common confusion #5** (cites e1, e7): (Guidance) Optimized versus actual value: LBNL's optimized figures assume perfect foresight, so they are an upper bound, not a forecast. [e1][e7]
- **Questions #2** (cites e30, e34, e31, e35, e39, e40): As Vistra and NRG describe their own: dispatch the fleet in response to market needs after portfolio optimization, manage fuel supply, and hedge power and gas price risk with derivatives and forward contracts. [e30][e34][e31][e35] In organized markets those decisions are expressed as offers, which FERC says are consistent with resources' business strategies. [e39][e40]
- **Questions #4** (cites e3, e17): Because SCED optimizes one five-minute interval at a time and does not plan across intervals; ESR owners must offer strategically to manage state of charge. [e3] The IMM has recommended a multi-interval market to move that work into SCED. [e17]
- **Questions #6** (cites e44, e45, e47, e48, e49, e50, e51): A toll, where the offtaker pays a fixed amount and takes the market revenues (and, in a physical toll, runs the battery); a floor plus revenue share; or a third-party optimizer paid a fee or a revenue share while the owner keeps merchant exposure. [e44][e45][e47][e48][e49][e50][e51] The sources differ on who provides a floor: the offtaker (Modo) or the optimizer (enspired, Europe). [e47][e48]
- **Questions #8** (cites e8, e28, e9): LBNL points to fixed delivery obligations under tolls and PPAs, rule-based operation, imperfect forecasting and under-participation in wholesale markets, including ancillary services in less mature markets; in ERCOT the biggest shortfall came from lower AS value. [e8][e28][e9]
- **Questions #10** (cites e14, e15): The IMM reports ESRs shifted toward energy arbitrage as AS markets saturated, and are offering energy more competitively. [e14][e15]
- **Questions #12** (cites e24, e25, e30, e34, e19): A hedge such as a heat rate call does not decide dispatch: the owner still decides whether to run the real plant. [e24][e25] Hedging and dispatch sit in the same commercial function at Vistra and NRG, and an owned or tolled plant can back trading positions. [e30][e34][e19]
- **Scenarios #2** (cites e22, e16): - ERCOT co-optimizes energy and AS in real time, but awards are limited by the Resource's SOC and limits, so the owner's offers must respect its state of charge. [e22][e16]
- **Scenarios #3** (cites e14, e15): - The IMM reports the shift toward energy arbitrage as AS markets saturated, and more competitive energy offers. [e14][e15]
- **Scenarios #4** (cites e9): - LBNL found that missing ancillary service value was the largest shortfall for ERCOT hybrids, so dropping AS entirely has a cost. [e9]
- **Scenarios #5** (cites e44, e49, e50): - If the owner would rather not make these calls itself, two of the routes Modo describes are a toll (fixed payment, offtaker takes the upside and downside) or a third-party optimizer paid a fee (owner keeps merchant exposure). [e44][e49][e50]
- **Link to energy-storage-resource** (cites e3): related Energy Storage Resource (ESR): The IMM says ESRs must optimize their charging and discharging cycles to maximize revenue because SCED optimizes only one five-minute interval at a time. [e3]
- **Link to battery-revenue-stack** (cites e14): related Battery Revenue Stack: The IMM reports ESRs shifted from ancillary services toward energy arbitrage as several AS markets saturated. [e14]
- **Link to three-part-supply-offer** (cites e13): used-in Three-Part Supply Offer: A Generation Resource's offer has three parts (Startup Offer, Minimum-Energy Offer, Energy Offer Curve), which is where commitment and dispatch choices are expressed in ERCOT. [e13]
- **Link to ancillary-services** (cites e12): related Ancillary Services (AS): ERCOT's training says one Resource can submit offers for multiple ancillary services combined with energy offers. [e12]
- **Link to rtc-b** (cites e11): related RTC+B (Real-Time Co-optimization + Batteries): Since December 5, 2025 ERCOT's real-time dispatch co-optimizes energy and ancillary services. [e11]
- **Link to tolling-agreement** (cites e44, e45, e60, e61): related Tolling Agreement: A physical battery toll hands operation of the asset and its market revenues to the offtaker for a fixed fee, which is one way an owner outsources optimization; in a virtual toll the owner keeps operating. [e44][e45][e60][e61]
- **Link to sced** (cites e3): related SCED (Security-Constrained Economic Dispatch): SCED optimizes one five-minute interval at a time, which is why the IMM says ESR owners must manage state of charge themselves. [e3]
- **Link to qse** (cites e56, e13): related QSE (Qualified Scheduling Entity): In ERCOT, offers for a Resource are made by its QSE, the Market Participant qualified to communicate with ERCOT for Resource Entities. [e56][e13]
- **Link to dam** (cites e38, e39): related Day-Ahead Market (DAM): FERC says day-ahead markets in RTOs/ISOs give generators lead time to procure fuel or bring up long-start resources, and that day-ahead offers are consistent with resources' business strategies. [e38][e39]
- **Link to sc-battery-strategy** (cites e3, e16): used-in Scenario: Bidding a Battery After RTC+B: A battery strategy question is an asset optimization question, about which hours and products to offer into given state-of-charge limits. [e3][e16]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) Suppose (illustrative, made-up numbers) a 100 MW, 2-hour battery expects evening prices of $150/MWh and midday prices of $10/MWh, and an ECRS price of $5/MW-hour through the day. Holding 50 MW for ECRS all day earns about $6,000; cycling fully for energy earns roughly 200 MWh x ($150 - $10) = $28,000 before losses. The optimizer compares these, keeps enough state of charge for any reserve it offers, and offers accordingly, since SCED will not plan across intervals for it. Under a toll the offtaker makes this choice and the owner gets its fixed payment; with a third-party optimizer the owner keeps the result less the optimizer's fee.
- (Say it like this) (Guidance) "Asset optimization is the owner's side of the market: the commercial team decides how the plant or battery is offered and dispatched, and hedges the power and fuel exposure that results. In ERCOT, SCED co-optimizes each five-minute interval, so for batteries the cross-interval planning still sits with the owner, or with whoever the owner has contracted to do it."
- (Common confusion) (Guidance) Asset optimization is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here, and no saved source of any kind defines it. The Definition above describes the function as Vistra and NRG describe it for themselves; it is not a definition from a source.

