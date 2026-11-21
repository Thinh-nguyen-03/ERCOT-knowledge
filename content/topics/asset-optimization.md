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
as_of: 2026-11-21
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
    note: LBNL lists fixed delivery obligations under tolls and PPAs among the reasons hybrid plants do not follow market-value-optimized dispatch. [e8]
  - to: sced
    type: related
    note: SCED optimizes one five-minute interval at a time, which is why the IMM says ESR owners must manage state of charge themselves. [e3]
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
  - id: e4
    source: ref-montel-optimisation
    locator: "Montel (data vendor) blog, 'How to optimise generation portfolios across spot and forward power markets' (November 18, 2025), introduction"
    quote: "Power producers and portfolio managers can capture value across different time horizons, including spot, intraday, and forward, by balancing physical generation, market positions, and risk appetite."
  - id: e5
    source: ref-gevernova-optimization
    locator: "GE Vernova (software vendor) blog, 'Asset and Fleet Optimization: Key to Success for Power Generators', The First Step"
    quote: "Commitment optimization must manage the risk associated with both increasing capacity and market uncertainty to position the asset, site, and fleet most economically and reliably."
  - id: e6
    source: ref-gevernova-optimization
    locator: "GE Vernova (software vendor) blog, The First Step (dispatch optimization)"
    quote: "Once we move from commitment optimization to real-time dispatch optimization, we must be able to adjust fleet-to-asset operations quickly based on available capacity and market dynamics."
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
  - id: e18
    source: ref-montel-optimisation
    locator: "Montel (data vendor) blog (2025), The role of asset-backed trading strategies"
    quote: "The benefit of asset-backed strategies compared to financial-only traders is that the physical assets can act as an insurance policy, which pays off in forward trading. If a forward transaction falls short of the expected performance, a plant owner can top up using their own plant's output."
  - id: e19
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal, 'Merchant plant tolling contracts divide risk' (2000), paragraph on the tolling party"
    quote: "For the tolling party, the agreement serves as a physical asset hedge to cover electricity trading positions."
  - id: e20
    source: ref-montel-optimisation
    locator: "Montel (data vendor) blog (2025), How flexibility drives portfolio value"
    quote: "The value of startup time is also relevant: for example, shorter startup times allow an asset to respond to and adjust to imbalances and price spikes."
  - id: e21
    source: imm-som-2025
    locator: "Chapter II, E. Energy Storage Resources, 1. ESR Fundamentals"
    quote: "Batteries ramp quickly – Unlike thermal generators, which require time to start up and adjust output, batteries are always online and can adjust their charging and discharging rate almost instantly."
  - id: e22
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization"
    quote: "With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services."
  - id: e23
    source: ref-gevernova-optimization
    locator: "GE Vernova (software vendor) blog, The First Step (closing paragraph)"
    quote: "As solar and wind generators transition from being price-takers in real-time markets to committing in day-ahead markets – where opportunity is greater, but risk is higher – commitment optimization is even more paramount."
  - id: e24
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (2015), Heat Rate Call Options"
    quote: "The decision whether actually to run the plant is made by the project owner, but for purposes of determining whether a hedge payment will made, it is the option of the hedge provider to “call the hypothetical plant” from one hour to the next."
  - id: e25
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper, 'Financial Hedges for United States Gas-Fired Power Generation Facilities' (2017), Heat Rate Call Options"
    quote: "Like a revenue put, the payout on the HRCO is purely notional and is not tied to the actual operations or results of the power generation facility."
---

## Definition

Asset optimization is deciding when and how a generating or storage asset is committed, dispatched and offered into the markets it can sell into, so as to maximize its market value net of costs and within its physical limits. [e1][e2][e3][e5][e6]

## How it works

The national-lab version is a model: LBNL optimizes a solar-plus-storage plant from the view of a price-taking owner seeking to maximize market value, choosing battery operation and solar curtailment to maximize energy and ancillary service revenue less costs, hour by hour, while accounting for battery degradation. [e1][e2] Vendors describe the same job in two stages: commitment optimization, which positions the asset economically ahead of time, and real-time dispatch optimization, which adjusts operations to available capacity and market conditions. [e5][e6][e23]

The value is captured across time horizons. A data vendor (Montel) says producers capture value across spot, intraday and forward horizons by balancing physical generation, market positions and risk appetite; LBNL's model optimizes across energy and ancillary service products. [e4][e2] An owned asset can also back trading positions: Montel says a plant owner can top up a forward position from its own output, and the Oil & Gas Journal says a toll serves the tolling party as a physical asset hedge for trading positions. [e18][e19]

Flexibility is what an optimizer has to work with. Montel says shorter start-up times let an asset respond to imbalances and price spikes, and the IMM says batteries, unlike thermal units, are always online and can change charging and discharging almost instantly. [e20][e21]

The dispatch decision stays with the owner even when the asset is hedged. In a heat rate call option hedge, the hedge provider decides only for hedge calculation purposes, while the owner decides whether to actually run the plant, and the payout is notional rather than tied to the plant's actual operations. [e24][e25]

Real operation falls short of the optimum. In LBNL's 2024 sample of 49 hybrid projects, empirical value reached only 62% of the $63/MWh optimized value. [e7] LBNL names fixed delivery obligations under tolls and PPAs, rule-based charging and discharging, and imperfect price forecasting among the barriers, and a second LBNL study found that only a minority of PV-battery projects dispatch for wholesale revenue as merchant plants. [e8][e10]

## ERCOT context

In ERCOT, the market software and the asset owner optimize different things. Co-optimization is the market model scheduling energy and ancillary services together and trading them off; before December 5, 2025 ERCOT did this only in the Day-Ahead Market, and with RTC the real-time dispatch now co-optimizes energy and ancillary services. [e11][e22] The owner's optimization is expressed in what it offers: a Generation Resource's Three-Part Supply Offer has a Startup Offer, a Minimum-Energy Offer and an Energy Offer Curve, and a single Resource can offer multiple ancillary services combined with energy offers. [e13][e12]

For storage, the IMM says ESRs must optimize their charging and discharging cycles themselves, because SCED optimizes only one five-minute interval at a time, so ESR owners must offer strategically to manage state of charge; the IMM adds that these strategies can introduce market inefficiencies. [e3] The IMM has recommended a Multi-Interval Real-Time Market since its 2022 report so that SCED would optimize ESR charging and discharging over time. [e17] ERCOT's ancillary service awards are limited by each Resource's capability, including state of charge and SOC limits. [e16]

The IMM reports how ERCOT storage optimization has shifted: ESRs moved from ancillary services toward energy arbitrage in 2024 as several AS markets saturated, and in 2025 55% of ESR energy offers were priced between $0 and $100 per MWh (46% in 2024, 25% in 2023). [e14][e15] LBNL found that in ERCOT, as in ISO-NE and NYISO, the largest shortfall of real hybrid operation against the optimum came from lower ancillary service value. [e9]

## Key facts

- LBNL 2024 sample (49 projects, national): empirical PV-plus-storage value was 62% of the $63/MWh optimized value. [e7]
- ERCOT real-time dispatch co-optimizes energy and ancillary services since December 5, 2025 (RTC). [e11][e22]
- SCED optimizes one five-minute interval at a time; ESR owners manage state of charge through their offers. [e3]
- The IMM has recommended a Multi-Interval Real-Time Market since its 2022 report (Recommendation 2022-1). [e17]
- 55% of ESR energy offers were priced at $0-100 per MWh in 2025. [e15]

## Example

Suppose (illustrative, made-up numbers) a 100 MW, 2-hour battery expects evening prices of $150/MWh and midday prices of $10/MWh, and an ECRS price of $5/MW-hour through the day. Holding 50 MW for ECRS all day earns about $6,000; cycling fully for energy earns roughly 200 MWh x ($150 - $10) = $28,000 before losses. The optimizer compares these, keeps enough state of charge for any reserve it offers, and offers accordingly, since SCED will not plan across intervals for it.

## Say it like this

(Guidance) "Asset optimization is the owner's side of the market: deciding what to offer, when, and into which products to get the most value from the asset. In ERCOT, SCED co-optimizes each five-minute interval, so for batteries the cross-interval planning still sits with the owner."

## Common confusion

(Guidance) Asset optimization is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here. No saved source gives a plain one-line definition; the definition above is the common ground of an LBNL model description, the IMM's ESR discussion and two vendor blogs (Montel and GE Vernova).

(Guidance) Asset optimization versus ERCOT co-optimization: co-optimization is the market model trading off energy and reserves across all Resources; asset optimization is one owner choosing its offers. [e11][e3]

(Guidance) Optimized versus actual value: LBNL's optimized figures assume perfect foresight, so they are an upper bound, not a forecast. [e1][e7]

## Questions

### Why do ERCOT battery owners need their own optimization when ERCOT co-optimizes?

Because SCED optimizes one five-minute interval at a time and does not plan across intervals; ESR owners must offer strategically to manage state of charge. [e3] The IMM has recommended a multi-interval market to move that work into SCED. [e17]

### Why does real dispatch fall short of the optimized value?

LBNL points to fixed delivery obligations under tolls and PPAs, rule-based operation, imperfect forecasting and under-participation in ancillary services; in ERCOT the biggest shortfall came from lower AS value. [e8][e9]

### What if ancillary service prices fall as more batteries enter?

The IMM reports ESRs shifted toward energy arbitrage as AS markets saturated, and are offering energy more competitively. [e14][e15]

### How does hedging interact with optimization?

A hedge such as a heat rate call does not decide dispatch: the owner still decides whether to run the real plant. [e24][e25] An owned asset can also back forward positions. [e18][e19]

## Scenarios

### A new ERCOT battery owner asks whether to keep selling ECRS or move to energy arbitrage. How do you frame it?

- ERCOT co-optimizes energy and AS in real time, but awards are limited by the Resource's SOC and limits, so the owner's offers must respect its state of charge. [e22][e16]
- The IMM reports the shift toward energy arbitrage as AS markets saturated, and more competitive energy offers. [e14][e15]
- LBNL found that missing ancillary service value was the largest shortfall for ERCOT hybrids, so dropping AS entirely has a cost. [e9]

## Open items

- No saved source gives an independent plain-words definition of "asset optimization"; the Definition is built from model descriptions (LBNL), an IMM discussion of ESRs and two vendor blogs (Montel, GE Vernova). Owner review suggested.
- Vendor sources (Montel, GE Vernova) used sparingly; their claims on AI/ML forecasting and fleet software were left out.
- Single-source, not cross-checked (Montel): forward markets are more volatile because of lower liquidity; this conflicts with the SFU thesis and the New Zealand regulator (see forward-curve).
- No saved source describes third-party "optimizer" or asset-management agreements in ERCOT (fees, revenue sharing).
