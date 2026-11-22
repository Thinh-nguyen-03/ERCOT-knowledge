---
id: asset-optimization
name: Asset Optimization
aliases: [asset optimization, asset optimisation, dispatch optimization, commitment optimization, asset-backed trading, optimizer]
kind: concept
domain: trading
level: 2
depth: deep
basis: industry-reference
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-22
links:
  - to: energy-storage-resource
    type: related
    note: The IMM says ESRs must optimize their charging and discharging cycles to maximize revenue because SCED optimizes only one five-minute interval at a time. [e3]
  - to: battery-revenue-stack
    type: related
    note: The IMM reports ESRs shifted from ancillary services toward energy arbitrage as several AS markets saturated. [e14]
  - to: three-part-supply-offer
    type: used-in
    note: A Generation Resource's offer has three parts (Startup Offer, Minimum-Energy Offer, Energy Offer Curve), which is where commitment and dispatch choices are expressed in ERCOT. [e13]
  - to: ancillary-services
    type: related
    note: ERCOT's training says one Resource can submit offers for multiple ancillary services combined with energy offers. [e12]
  - to: rtc-b
    type: related
    note: Since December 5, 2025 ERCOT's real-time dispatch co-optimizes energy and ancillary services. [e11]
  - to: tolling-agreement
    type: related
    note: A physical battery toll hands operation of the asset and its market revenues to the offtaker for a fixed fee, which is one way an owner outsources optimization; in a virtual toll the owner keeps operating. [e44][e45][e60][e61]
  - to: sced
    type: related
    note: SCED optimizes one five-minute interval at a time, which is why the IMM says ESR owners must manage state of charge themselves. [e3]
  - to: qse
    type: related
    note: In ERCOT, offers for a Resource are made by its QSE, the Market Participant qualified to communicate with ERCOT for Resource Entities. [e56][e13]
  - to: dam
    type: related
    note: FERC says day-ahead markets in RTOs/ISOs give generators lead time to procure fuel or bring up long-start resources, and that day-ahead offers are consistent with resources' business strategies. [e38][e39]
  - to: sc-battery-strategy
    type: used-in
    note: A battery strategy question is an asset optimization question, about which hours and products to offer into given state-of-charge limits. [e3][e16]
evidence:
  - id: e1
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026), 'Optimization for PV+S dispatch'"
    quote: "Modeling perspective: asset owner who is a price-taker with perfect foresight into generation and price conditions seeking to maximize market value while considering battery degradation."
  - id: e2
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), 'Optimization for PV+S dispatch'"
    quote: "Implementation: Linear model optimizing operation of battery and solar curtailment to maximize value (energy and AS revenue, including hourly capacity price adders for regions where accreditation is profile-dependent) less costs at an hourly resolution."
  - id: e3
    source: imm-som-2025
    locator: "Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals"
    quote: "They are driven by opportunity cost – The charging/discharging cycle and duration limits create unique economics for ESRs. ESRs must optimize these cycles to maximize their revenues. Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value. These strategies can introduce market inefficiencies."
  - id: e7
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), empirical versus optimized dispatch (sample of 49 projects, 2024)"
    quote: "The empirical value fell well short of the optimized result of $63/MWh, achieving only 62% of modeled value."
  - id: e8
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), barriers to increasing PV+S market value"
    quote: "Dispatch strategies tied to out-of-market considerations including fixed delivery obligations under tolls, PPAs, REC markets or state incentive programs Rule-based operation, such as charging at midday and discharging in the evening regardless of price conditions Imperfect price forecasting"
  - id: e9
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), empirical versus optimized dispatch, regional performance"
    quote: "In ISO-NE, NYISO, and ERCOT, the largest shortfall relative to the optimum came from lower AS value."
  - id: e10
    source: ref-lbnl-pv-battery
    locator: "LBNL, Influence of business models on PV-battery dispatch decisions and market value (briefing), Conclusion"
    quote: "Only a minority of projects optimize battery dispatch for wholesale market revenue as merchant plants, majority follow other business models"
  - id: e11
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization"
    quote: "Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market."
  - id: e12
    source: ref-ercot-forward-markets-101
    locator: "ERCOT training, Forward Markets 101 (2026), slide 27, Ancillary Service Offers"
    quote: "Multiple offers from single Resource: • Multiple Ancillary Services • May be combined with Energy Offers"
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Three-Part Supply Offer"
    quote: "An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve."
  - id: e14
    source: imm-som-2025
    locator: "Chapter II.E.4, ESR Participation in Energy Markets"
    quote: "Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high."
  - id: e15
    source: imm-som-2025
    locator: "Chapter II.E.4, ESR Aggregate Offers"
    quote: "In 2025, 55% of energy offers were priced between $0-100 per MWh, compared to 46% in 2024 and 25% in 2023. As more ESRs enter the market, they must offer more competitively to maximize revenue from energy sales."
  - id: e16
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: "Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment."
  - id: e17
    source: imm-som-2025
    locator: "Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals"
    quote: "A Multi-Interval Real-Time Market (MIRTM) would allow SCED to optimize ESR charging and discharging over time and reduce the need for ESRs to do so themselves. We have recommended that ERCOT consider implementing a MIRTM since our 2022 State of the Market report as part of Recommendation 2022-1."
  - id: e19
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal, 'Merchant plant tolling contracts divide risk' (2000), paragraph on the tolling party"
    quote: "For the tolling party, the agreement serves as a physical asset hedge to cover electricity trading positions."
  - id: e21
    source: imm-som-2025
    locator: "Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals"
    quote: "Batteries ramp quickly – Unlike thermal generators, which require time to start up and adjust output, batteries are always online and can adjust their charging and discharging rate almost instantly."
  - id: e22
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization"
    quote: "With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services."
  - id: e26
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), empirical versus optimized dispatch (text before e7)"
    quote: "On a national average basis in 2024, projects in this subsample increased wholesale market value from $25/MWh for standalone PV to $39/MWh for combined PV+S output."
  - id: e27
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), empirical versus optimized dispatch, sample note"
    quote: "Sample: 49 projects totaling 4.2 GW PV , 1.6 GW Bat/5.3GWh"
  - id: e28
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), barriers to increasing PV+S market value, first bullet"
    quote: "Under-participation in wholesale markets, including still-lucrative ancillary services in less mature markets."
  - id: e29
    source: ref-lbnl-pv-battery
    locator: "LBNL, Influence of business models on PV-battery dispatch decisions (briefing), Conclusion, study scope"
    quote: "Our study is only a snapshot of 11 PV-battery hybrids in 2020"
  - id: e24
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (2015), Heat Rate Call Options"
    quote: "The decision whether actually to run the plant is made by the project owner, but for purposes of determining whether a hedge payment will made, it is the option of the hedge provider to “call the hypothetical plant” from one hour to the next."
  - id: e25
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper, 'Financial Hedges for United States Gas-Fired Power Generation Facilities' (2017), Heat Rate Call Options"
    quote: "Like a revenue put, the payout on the HRCO is purely notional and is not tied to the actual operations or results of the power generation facility."
  - id: e30
    source: ref-vistra-10k-2024
    locator: "Vistra Corp. Form 10-K for 2024, Item 1 Business, Wholesale Operations"
    quote: "Our wholesale commodity risk management group is responsible for dispatching our generation fleet in response to market needs after implementing portfolio optimization strategies, thus linking and integrating the generation fleet production with our retail customer and wholesale sales opportunities."
  - id: e31
    source: ref-vistra-10k-2024
    locator: "Vistra Corp. Form 10-K for 2024, Item 1 Business, Wholesale Operations, closing paragraph"
    quote: "Our commodity risk management group enters into electricity, natural gas, and other commodity derivative contracts to reduce exposure to price fluctuations with the goal of reducing volatility of future revenues and fuel costs for our generation facilities and purchased power costs for our Retail segment."
  - id: e33
    source: ref-vistra-10k-2024
    locator: "Vistra Corp. Form 10-K for 2024, Item 7 MD&A, 2024 highlights"
    quote: "Our commercial team focused on effectively and efficiently managing risk by opportunistically hedging and optimizing our assets and business positions, which led to strong plant operating performance and energy margins."
  - id: e34
    source: ref-nrg-10k-2024
    locator: "NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Market Operations, Power"
    quote: "The power commercial group is responsible for end-use electricity supply including power plant optimization and certain fuel supply. To meet the market operations objectives, NRG enters into supply, power and gas hedging agreements via a wide range of products and contracts, including (i) physical and financial commodity instruments, (ii) fuel supply and transportation contracts, (iii) PPAs and Renewable PPAs, and (iv) capacity and other contracted revenue or supply sources, as further discussed below."
  - id: e35
    source: ref-nrg-10k-2024
    locator: "NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Market Operations, Power (paragraph after e34)"
    quote: "In addition, because changes in power prices in the markets where NRG operates are generally correlated to changes in natural gas prices, NRG uses hedging strategies that may include power and natural gas forward purchases and sales contracts to manage commodity price risk."
  - id: e36
    source: ref-nrg-10k-2024
    locator: "NRG Energy, Inc. Form 10-K for 2024, Notes to financial statements, derivative instruments"
    quote: "NRG enters into derivative instruments to manage price and delivery risk, optimize physical and contractual assets in the portfolio and manage working capital requirements."
  - id: e37
    source: ref-nrg-10k-2024
    locator: "NRG Energy, Inc. Form 10-K for 2024, Item 1 Business, Plant Operations"
    quote: "NRG continually evaluates its generation portfolio to focus on asset optimization opportunities and the locational value of its generation assets in each of the markets where the Company participates, as well as opportunities for the development of new generation."
  - id: e38
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024 edition), Chapter on electricity markets, Day-Ahead Energy Markets"
    quote: "The purpose of the day-ahead market is to give generators and load-serving entities a means for scheduling their activities with sufficient lead time to procure fuel or bring up resources with longer start times."
  - id: e39
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Day-Ahead Energy Markets"
    quote: "The day-ahead bids and offers are based on a forecast of loads and are consistent with resources’ business strategies."
  - id: e40
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), RTOs/ISOs"
    quote: "Unlike traditional electricity systems, RTOs/ISOs also operate competitive, nondiscriminatory electricity markets, which allow resource owners to offer resources and load-serving entities to submit bids for generation. These markets are the primary mechanism for dispatching resources, managing transmission congestion and pricing electricity."
  - id: e41
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter on trading, Hedging"
    quote: "Hedging is the act of establishing an offsetting position with the intent of minimizing substantial losses should an original position lose its value."
  - id: e42
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter on trading, Traders' Strategy"
    quote: "Trading strategies in natural gas and electricity markets include activities such as buying or selling the physical product, managing the risk of physical and financial positions – also known as hedging--and attempting to make money through speculation."
  - id: e43
    source: ref-cra-ercot-value-stacking-2025
    locator: "CRA International, 'Energy and ancillary services value stacking in ERCOT' (August 2025), Introduction, ESOP model"
    quote: "Given projections of energy and ancillary services prices, ESOP outputs optimal dispatch decisions for storage or other fast response resources (i.e., value stacking strategies) that are unique to (a) the resource’s technological characteristics, and (b) the regional market’s participation rules. Decisions include whether to discharge or charge and by how much, and whether to commit to participate in the energy or ancillary services markets."
  - id: e60
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Tolling / PPA, physical toll"
    quote: "A physical tolling agreement gives the offtaker direct dispatch rights over a specific battery or generation asset. The offtaker schedules, bids, and controls the physical asset, while the owner receives a fixed or structured payment regardless of how it is used."
  - id: e61
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Tolling / PPA, physical and virtual tolls"
    quote: "A virtual tolling agreement is financial. The asset owner continues to operate the asset, but the offtaker takes on the market risk and return through a contractual swap or settlement mechanism."
  - id: e44
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy, 'Part 1: The state of battery offtake and tolling agreements in ERCOT' (September 4, 2025), Tolling / PPA"
    quote: "The offtaker pays a fixed $/MW fee for full access to the battery’s capacity. The asset owner locks in stable revenue, while the offtaker manages all upside and downside from arbitrage and Ancillary Services."
  - id: e45
    source: ref-troutman-storage-offtake-tolling
    locator: "Troutman Pepper, 'Monetizing Opportunities in Energy Storage in a Post-IRA World' (May 8, 2023), transcript (AI-generated, per the firm's disclaimer), Vaughn Morrison at 02:00"
    quote: "Under that structure, the off-taker has authority to charge and discharge the battery and run it as they see fit within certain operating parameters, in exchange for a monthly tolling payment, typically often with some adjusters based on project performance."
  - id: e46
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (European battery optimizer), 'BESS revenue models: tolling, floor & fully merchant' (February 4, 2025), Tolling for battery storage"
    quote: "Tolling agreements for BESS grant the asset owner a pre-defined sum of guaranteed revenue, independent of the commercial result later achieved by an optimizer. The offtaker has the right to utilize the asset’s capacity in the markets as desired and put limitations on the toller."
  - id: e47
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Floor + Revenue Share"
    quote: "The offtaker guarantees a minimum payment per MW (a floor), with upside shared as a percentage of market revenues."
  - id: e48
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), Floor price for BESS, with and without cap"
    quote: "A floor price is the minimum revenue an asset owner makes when using the optimization service of an RTM (route-to-market) provider. This amount is typically contractually fixed but can be variable in certain scenarios. The guaranteed revenue is lower than in a tolling agreement because the asset owner retains the upside potential, while the optimizer assumes the main risk."
  - id: e49
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Third-party optimization"
    quote: "An alternative is to partner with third-party optimizers who provide bidding, dispatch, and trading services, including AI-driven autobidders. This approach allows owners to retain merchant exposure while reducing operational complexity."
  - id: e50
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Third-party optimization"
    quote: "Unlike a tolling agreement where the offtaker guarantees payment to the asset owner, under these other third-party partnerships, the asset owner pays a fee to the optimizer."
  - id: e51
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), Fully merchant batteries"
    quote: "The high-risk profile of the fully merchant strategy is reflected in the client’s proportionally higher revenue share."
  - id: e59
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), table 'Revenue scenarios for fully merchant batteries' (illustrative figures)"
    quote: "contracted revenue split 90:10 90:10 generated revenue 70k 270k asset owner earnings 63k 243k"
  - id: e52
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC, Further Definition of Swap (Final Rule, 77 FR 48208, August 2012), section II.B.2.b(iv), Energy Management Agreements"
    quote: "They also did not provide a working definition of EMAs. The CFTC understands that EMAs can cover a number of services and transactions, which can include spot, forward and swap transactions."
  - id: e55
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, list of services, item (ii)"
    quote: "(ii) providing market information to assist the owner in developing and refining a risk-management plan for the plant;"
  - id: e53
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, list of services, item (iii)"
    quote: "(iii) procuring fuel, arranging delivery and storage, selling excess power not needed to serve load for another party."
  - id: e54
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC (2012), section II.B.2.b(iv), Energy Management Agreements, compensation"
    quote: "The entity carrying out these activities may receive a portion of the revenue generated from such activities as compensation for its efforts."
  - id: e56
    source: np-02
    locator: "Section 2.1, definition of Qualified Scheduling Entity (QSE)"
    quote: "A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT."
  - id: e57
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "In addition, the SCED process accounts for each ESR’s State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR’s Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) limits."
  - id: e58
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Merchant"
    quote: "The battery participates directly in wholesale markets without any contractual hedges or guarantees."
---

## Definition

No saved source defines "asset optimization" as a term: NRG's 2024 annual report uses the phrase ("asset optimization opportunities") without defining it. [e37] What the sources describe is a function, so this entry describes the function rather than defining the term. Two generating companies describe that function for their own fleets in their 2024 SEC annual reports. Vistra says its wholesale commodity risk management group dispatches its generation fleet in response to market needs after implementing portfolio optimization strategies, and that its commodity risk management group enters into power, gas and other derivative contracts to reduce price exposure; NRG says its power commercial group is responsible for end-use electricity supply including power plant optimization and certain fuel supply, and enters into power and gas hedging agreements. [e30][e31][e34] Each is describing its own organization; what the two descriptions share is a commercial function that decides how plants are run, hedges power and fuel price exposure, and ties the fleet to supplying the company's own end-use customers. [e30][e31][e34][e35]

## How it works

The optimizer's decisions reach the market as offers. FERC says RTO/ISO markets let resource owners offer resources and load-serving entities bid, and that these markets are the primary mechanism for dispatching resources; day-ahead offers are based on load forecasts and are consistent with resources' business strategies, and the day-ahead market gives generators lead time to procure fuel or bring up resources with longer start times. [e40][e39][e38] (FERC describes US organized markets generally; ERCOT's own rules are under ERCOT context.)

Hedging is part of the same job. FERC defines hedging as establishing an offsetting position to minimize losses should the original position lose value, and lists hedging alongside physical buying and selling and speculation among trading strategies in gas and electricity. [e41][e42] Vistra and NRG both say they use power and gas derivatives or forward contracts to manage commodity price risk; NRG links this to power prices being generally correlated with gas prices. [e31][e35][e36] Vistra says its commercial team hedged and optimized its assets and positions "opportunistically" in 2024; that is the company's own account of its year. [e33]

An owned or tolled plant can back trading and retail positions. The Oil & Gas Journal says a toll serves the tolling party as a physical asset hedge for its trading positions, and Vistra describes dispatching its fleet in a way that links generation with its retail and wholesale sales. [e19][e30]

For storage, optimization models make the decisions explicit. LBNL models a price-taking owner seeking to maximize market value, choosing battery operation and solar curtailment to maximize energy and ancillary service revenue less costs, hour by hour, while accounting for battery degradation. [e1][e2] CRA's ESOP model, given energy and ancillary service price projections, outputs optimal dispatch decisions that depend on the resource's characteristics and the market's participation rules: whether to charge or discharge and by how much, and whether to commit to the energy or ancillary service market. [e43]

Flexibility is what an optimizer has to work with. FERC notes that resources with longer start times need day-ahead lead time, and the IMM says batteries, unlike thermal units that need time to start up and adjust output, are always online and can change charging and discharging almost instantly. [e38][e21]

The dispatch decision stays with the owner even when the asset is hedged. In a heat rate call option hedge, the hedge provider decides only for hedge calculation purposes, while the owner decides whether to actually run the plant, and the payout is notional rather than tied to the plant's actual operations. [e24][e25]

For batteries, who does the optimizing is itself a contract choice. Three structures recur in the sources. [e44][e46][e48][e50][e51]

- Toll: the offtaker pays the owner a fixed payment and takes the battery's market upside and downside; in a physical toll it also schedules, bids and operates the battery (Modo Energy and Troutman Pepper for the US; enspired describes the same in Europe). Troutman adds that the monthly payment often has adjusters based on project performance, and Modo describes a virtual toll in which the owner keeps operating the asset while the offtaker takes the market risk and return financially. [e44][e60][e45][e46][e61]
- Floor plus revenue share: the owner is guaranteed a minimum revenue and keeps a share of the upside. The sources differ on who gives the floor: Modo says the offtaker; enspired (Europe) says the route-to-market optimizer, which then assumes the main risk. [e47][e48]
- Third-party optimization: the owner keeps merchant exposure and pays the optimizer. Modo says owners can hire third-party optimizers for bidding, dispatch and trading and pay them a fee; enspired's fully merchant model pays the optimizer through a revenue split (90:10 in its illustrative table). [e49][e50][e51][e59]

Outside batteries, the CFTC's 2012 swap-definition rule describes energy management agreements (EMAs). It says commenters gave no working definition, but that EMAs can cover spot, forward and swap transactions and services such as providing market information for a plant's risk-management plan and procuring fuel, arranging delivery and storage and selling excess power, and that the entity doing this may receive a portion of the revenue as compensation. [e52][e55][e53][e54]

Real operation falls short of the optimum. In LBNL's 2024 sample of 49 hybrid projects (national), empirical value reached only 62% of the $63/MWh optimized value. [e26][e7][e27] LBNL names fixed delivery obligations under tolls and PPAs, rule-based charging and discharging, and imperfect price forecasting among the barriers, and a second LBNL study, a snapshot of 11 PV-battery hybrids in 2020, found that only a minority optimized battery dispatch for wholesale revenue as merchant plants. [e8][e10][e29]

## ERCOT context

In ERCOT, the market software and the asset owner optimize different things. Co-optimization is the market model scheduling energy and ancillary services together and trading them off; before December 5, 2025 ERCOT did this only in the Day-Ahead Market, and with RTC the real-time dispatch now co-optimizes energy and ancillary services. [e11][e22] The owner's optimization is expressed in what its QSE offers: a QSE is the Market Participant qualified to communicate with ERCOT for Resource Entities and to settle with ERCOT, a Generation Resource's Three-Part Supply Offer (Startup Offer, Minimum-Energy Offer and Energy Offer Curve) is made by its QSE, and ERCOT's Forward Markets 101 training says a single Resource can make multiple ancillary service offers, which may be combined with energy offers. [e56][e13][e12]

For storage, the IMM says ESRs must optimize their charging and discharging cycles themselves, because SCED optimizes only one five-minute interval at a time, so ESR owners must offer strategically to manage state of charge; the IMM adds that these strategies can introduce market inefficiencies. [e3] Since its 2022 report the IMM has recommended that ERCOT consider implementing a Multi-Interval Real-Time Market, which it says would allow SCED to optimize ESR charging and discharging over time. [e17] Within each interval, SCED accounts for each ESR's state of charge and SOC limits so that its base points and ancillary service awards are feasible, and ancillary service awards are limited by each Resource's capability, including state of charge and SOC limits. [e57][e16]

The IMM reports how ERCOT storage optimization has shifted: ESRs moved from ancillary services toward energy arbitrage in 2024 as several AS markets saturated, and in 2025 55% of ESR energy offers were priced between $0 and $100 per MWh (46% in 2024, 25% in 2023). [e14][e15] LBNL found that in ERCOT, as in ISO-NE and NYISO, the largest shortfall of real hybrid operation against the optimum came from lower ancillary service value. [e9]

## Key facts

- Function, as two generators describe their own: dispatching the fleet after portfolio optimization and hedging with derivatives (Vistra); power plant optimization, certain fuel supply and power and gas hedging (NRG). [e30][e31][e34]
- Battery contract structures: toll (fixed payment to owner), floor plus revenue share, and third-party optimization paid by fee or revenue share. [e44][e45][e47][e48][e50][e51]
- EMAs (CFTC, 2012): commenters gave no working definition; the CFTC understands that the managing entity may be paid a portion of the revenue. [e52][e54]
- LBNL 2024 sample (49 projects, national): empirical PV-plus-storage value was 62% of the $63/MWh optimized value. [e26][e7][e27]
- ERCOT real-time dispatch co-optimizes energy and ancillary services since December 5, 2025 (RTC). [e11][e22]
- SCED optimizes one five-minute interval at a time; ESR owners manage state of charge through their offers. [e3]
- The IMM has recommended since its 2022 report that ERCOT consider implementing a Multi-Interval Real-Time Market (Recommendation 2022-1). [e17]
- 55% of ESR energy offers were priced at $0-100 per MWh in 2025. [e15]

## Example

Suppose (illustrative, made-up numbers) a 100 MW, 2-hour battery expects evening prices of $150/MWh and midday prices of $10/MWh, and an ECRS price of $5/MW-hour through the day. Holding 50 MW for ECRS all day earns about $6,000; cycling fully for energy earns roughly 200 MWh x ($150 - $10) = $28,000 before losses. The optimizer compares these, keeps enough state of charge for any reserve it offers, and offers accordingly, since SCED will not plan across intervals for it. Under a toll the offtaker makes this choice and the owner gets its fixed payment; with a third-party optimizer the owner keeps the result less the optimizer's fee.

## Say it like this

(Guidance) "Asset optimization is the owner's side of the market: the commercial team decides how the plant or battery is offered and dispatched, and hedges the power and fuel exposure that results. In ERCOT, SCED co-optimizes each five-minute interval, so for batteries the cross-interval planning still sits with the owner, or with whoever the owner has contracted to do it."

## Common confusion

(Guidance) Asset optimization is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here, and no saved source of any kind defines it. The Definition above describes the function as Vistra and NRG describe it for themselves; it is not a definition from a source.

(Guidance) Asset optimization versus ERCOT co-optimization: co-optimization is the market model trading off energy and reserves across all Resources; asset optimization is one owner choosing its offers. [e11][e3]

(Guidance) Toll versus third-party optimizer: under a toll the offtaker guarantees payment to the owner; under a third-party optimization agreement the owner pays the optimizer and keeps the market exposure. [e50][e49]

(Guidance) "Merchant" is used differently: Modo uses it for a battery with no contractual hedges or guarantees, while enspired's "fully merchant" model still splits revenue with the optimizer. [e58][e51]

(Guidance) Optimized versus actual value: LBNL's optimized figures assume perfect foresight, so they are an upper bound, not a forecast. [e1][e7]

## Questions

### What does an asset optimization function actually do?

As Vistra and NRG describe their own: dispatch the fleet in response to market needs after portfolio optimization, manage fuel supply, and hedge power and gas price risk with derivatives and forward contracts. [e30][e34][e31][e35] In organized markets those decisions are expressed as offers, which FERC says are consistent with resources' business strategies. [e39][e40]

### Why do ERCOT battery owners need their own optimization when ERCOT co-optimizes?

Because SCED optimizes one five-minute interval at a time and does not plan across intervals; ESR owners must offer strategically to manage state of charge. [e3] The IMM has recommended a multi-interval market to move that work into SCED. [e17]

### What contracts can a battery owner use to hand off optimization?

A toll, where the offtaker pays a fixed amount and takes the market revenues (and, in a physical toll, runs the battery); a floor plus revenue share; or a third-party optimizer paid a fee or a revenue share while the owner keeps merchant exposure. [e44][e45][e47][e48][e49][e50][e51] The sources differ on who provides a floor: the offtaker (Modo) or the optimizer (enspired, Europe). [e47][e48]

### Why does real dispatch fall short of the optimized value?

LBNL points to fixed delivery obligations under tolls and PPAs, rule-based operation, imperfect forecasting and under-participation in wholesale markets, including ancillary services in less mature markets; in ERCOT the biggest shortfall came from lower AS value. [e8][e28][e9]

### What if ancillary service prices fall as more batteries enter?

The IMM reports ESRs shifted toward energy arbitrage as AS markets saturated, and are offering energy more competitively. [e14][e15]

### How does hedging interact with optimization?

A hedge such as a heat rate call does not decide dispatch: the owner still decides whether to run the real plant. [e24][e25] Hedging and dispatch sit in the same commercial function at Vistra and NRG, and an owned or tolled plant can back trading positions. [e30][e34][e19]

## Scenarios

### A new ERCOT battery owner asks whether to keep selling ECRS or move to energy arbitrage. How do you frame it?

- ERCOT co-optimizes energy and AS in real time, but awards are limited by the Resource's SOC and limits, so the owner's offers must respect its state of charge. [e22][e16]
- The IMM reports the shift toward energy arbitrage as AS markets saturated, and more competitive energy offers. [e14][e15]
- LBNL found that missing ancillary service value was the largest shortfall for ERCOT hybrids, so dropping AS entirely has a cost. [e9]
- If the owner would rather not make these calls itself, two of the routes Modo describes are a toll (fixed payment, offtaker takes the upside and downside) or a third-party optimizer paid a fee (owner keeps merchant exposure). [e44][e49][e50]

## Open items

- No saved source defines "asset optimization". The Definition is a description of the function as Vistra and NRG describe their own commercial groups (tier 3, two publishers), with FERC (tier 2) on offers and hedging in US organized markets. The earlier one-line definition was a writer's construction and was removed in audit I1.
- The 10-K passages found do not say how either company's commercial group builds its day-ahead, real-time or ancillary service offers in ERCOT; that link rests on FERC (US generic) and the ERCOT Protocols.
- ERCOT-specific, tier 3 only: Modo (September 2025) names third-party optimizers operating ERCOT batteries (for example Gridmatic, Habitat Energy, Equilibrium Energy), and GridBeyond says it provides optimization and QSE services for a battery portfolio in ERCOT under RTC+B (a GridBeyond release and a pv magazine article about GridBeyond's floor and synthetic-toll offers, counted as one voice). No tier 1-2 source says how many ERCOT Resources use third-party optimizers or QSEs.
- No saved source gives typical optimizer fee levels or revenue-share percentages in ERCOT; enspired's 90:10 split is an illustrative European figure.
- Single-source, not cross-checked (Modo): a "revenue share" structure in which all payments depend on market revenues with no floor.
- Single-source, not cross-checked (GE Vernova, software vendor): optimization in two stages, commitment optimization that positions the asset ahead of time and real-time dispatch optimization that adjusts operations to available capacity and market conditions.
- Removed 2026-11-22: Montel (data vendor, European focus) quotes on capturing value across time horizons, asset-backed strategies as insurance, and start-up time; replaced by FERC, Vistra, NRG, Oil & Gas Journal and IMM quotes. Montel's claim that forward markets are more volatile because of lower liquidity remains single-source (see forward-curve).
