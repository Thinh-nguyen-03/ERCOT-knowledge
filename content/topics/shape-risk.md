---
id: shape-risk
name: Shape Risk
aliases: [shape risk, profile risk, shape/profile risk]
kind: concept
domain: trading
level: 2
lenses: [trading, portfolio, structuring, retail]
as_of: 2026-11-22
depth: deep
basis: industry-reference
links:
  - to: volumetric-risk
    type: contrasts-with
    note: Shape risk is about when the energy comes, volume risk about how much in total; WBCSD says shape risk exists even if the overall volume matches the estimate. [e3][e7]
  - to: ppa-vppa
    type: affects
    note: RMI and RFF say that in an as-produced VPPA the buyer carries the mismatch between the timing of generation and its own needs and prices. [e6][e36]
  - to: solar-generation
    type: related
    note: The IMM says the solar capacity factor in the daily peak net load interval fell to 1.7% in 2025, against 29.3% for wind. [e16]
  - to: evening-ramp
    type: related
    note: The IMM says most 2025 price spikes came in the peak net load hours between 7 and 9 p.m., as solar ramped down. [e15]
  - to: net-load
    type: related
    note: The IMM says solar growth shifts peak net demand later into the evening, when wind generation tends to increase. [e14]
  - to: block-products
    type: contrasts-with
    note: ERCOT CRRs are auctioned in time-of-use blocks with the same MW in every hour of the block, a flat shape unlike variable renewable output. [e17]
  - to: energy-storage-resource
    type: related
    note: POWER Magazine says a load-following PPA product will likely need storage alongside several renewable resources. [e11]
  - to: wind-generation
    type: related
    note: The IMM says solar's captured price premium over wind has nearly disappeared, $21 versus $19 per MWh. [e14]
  - to: weather-load
    type: related
    note: The FERC primer says more variable demand is typically more expensive to serve, especially when peaks coincide. [e10]
evidence:
  - id: e1
    source: ref-rmi-ppa-risk
    locator: "Shape Risk, What It Is (p. 18)"
    quote: "For VPPAs and PPPAs, the source of shape risk is the uncertainty regarding the timing of the renewable generation."
  - id: e2
    source: ref-yale-ppa-risk
    locator: "Other risks, Shape Risk"
    quote: "Shape risk refers to the variable amount of power generated at different times (and at different prices). Companies with electricity usage spread out throughout the day and night (like a data center company) that are looking for a PPA to serve as a hedge against variable retail electricity prices might be concerned about the shape of the power generation under the PPA not matching the shape of their own electricity consumption."
  - id: e3
    source: ref-wbcsd-multitech-ppa
    locator: "Key PPA risks related to variable generation patterns"
    quote: "Shape or profile risk – This captures the fact that hour-to-hour generation will be variable depending on wind speed or solar irradiation, even if the overall volume over a sufficient period of time equals the estimated volume. Against this generation profile, the demand profile of a corporate buyer is likely to be flatter, with a pronounced variation between business and non-business days."
  - id: e4
    source: ref-epex-wind-hedging
    locator: "General Introduction and Problem Definition"
    quote: "Wind and Solar power plants produce energy according to the weather at particular times and locations, not according to demand. Renewable energy generation companies are therefore exposed to what is known as the Shape Risk. This risk results from the time disconnect between supply and demand and the impact of the generation on the shape of the day-ahead price curve."
  - id: e5
    source: ref-rmi-ppa-risk
    locator: "Shape Risk, Further Detail (p. 18)"
    quote: "The intersection of uncertain generation with uncertain market prices increases the uncertainty around the project’s revenue with a VPPA and avoided costs with a PPPA."
  - id: e6
    source: ref-rmi-ppa-risk
    locator: "Shape Risk, Further Detail (p. 18)"
    quote: "Meanwhile, in a VPPA, if generation and consumption are not coincident (and they rarely are), changing wholesale energy prices throughout the day may lead to the VPPA revenues not fully offsetting the city’s energy costs."
  - id: e7
    source: ref-rmi-ppa-risk
    locator: "Volume Risk, Further Detail (p. 22)"
    quote: "Furthermore, while the timing of renewable generation inherent in shape risk can also be weather-driven, volume risk is distinctly associated with the uncertainty in the overall amount of renewable generation."
  - id: e8
    source: ref-rmi-ppa-risk
    locator: "Shape Risk, How It Affects Cities (p. 18)"
    quote: "For a PPPA, shape risk requires the buyer to purchase or sell energy to manage over- or underproduction, while also impacting the deal’s opportunity cost."
  - id: e9
    source: ref-wbcsd-multitech-ppa
    locator: "Physical PPA, as-produced sleeved structure"
    quote: "For shape risk, if the sun did not shine or the wind did not blow, then the corporate buyer would need to procure the near-term reduction in volumes to meet its demand requirements."
  - id: e10
    source: ref-ferc-energy-primer
    locator: "Chapter on electricity, Retail Customer Mix (p. 39)"
    quote: "If a consumer uses electricity consistently throughout the day and seasons, the load shape is flat. Another consumer may use more at some times than others. More variable demand is typically more expensive to serve, especially if the peak occurs at the same time as other customers’ use peaks."
  - id: e11
    source: ref-powermag-ppa
    locator: "Section on load-following PPAs"
    quote: "To provide such a “load-following” product, the PPA provider will likely need to generate from multiple renewable resources (a blend of solar, wind, hydro, and/or geothermal), as well as incorporate a storage solution."
  - id: e12
    source: ref-wbcsd-multitech-ppa
    locator: "Introduction"
    quote: "Particularly, corporate buyers have shown increasing interest in firm or shaped PPA offerings in recent years (that is, rather than be exposed to a project’s variable generation profile, the corporate buyer can rely on a firm profile over a given time period – whether physically or via a financial hedging product)."
  - id: e13
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the energy they produce."
  - id: e14
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "Figure 15 shows that the average captured energy price by renewable generation tends to decrease as installed renewable capacity increases. After years in which solar captured a premium relative to wind, the average captured price for solar at $21 per MWh was nearly at parity with wind at $19 per MWh. This trend is likely to continue as solar capacity increases and shifts peak net demand later to the evening, when wind generation tends to increase."
  - id: e15
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e16
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, Table 2 discussion"
    quote: "Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years."
  - id: e17
    source: np-07
    locator: "Section 7.3, paragraph (5)"
    quote: "CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x16 blocks for hours ending 0700-2200, Saturday and Sunday, and NERC holidays in one-month strips; and (c) 7x8 blocks for hours ending 0100-0600 and hours ending 2300-2400 Sunday through Saturday, in one-month strips."
  - id: e18
    source: ice-ercot-north-peak
    locator: "Reference Price A (c) Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e19
    source: ref-epex-wind-hedging
    locator: "Quality Factor Index"
    quote: "The third and final index is the Quality Factor (QF) Index which is a measure of the Achieved Price divided by the Baseload Price. It is sometimes described as the Capture Rate"
  - id: e20
    source: ref-epex-wind-hedging
    locator: "General Introduction and Problem Definition"
    quote: "This concentration effect, which results from the high correlation between energy production at different solar plants, will increasingly impact the achieved clearing prices especially during the hours between 10:00 and 16:00 thereby modifying the shape of the price curve."
  - id: e21
    source: ref-wbcsd-multitech-ppa
    locator: "Shape risk"
    quote: "The corporate buyer seeking to minimize shape risk tailors the contracted amount of renewable generation to its demand profile in an effort to reduce the number of hours in which it needs to purchase / sell additional power as well as to reduce the volume that it needs to purchase / sell."
  - id: e22
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments."
  - id: e23
    source: ref-powermag-ppa
    locator: "Section on load-following PPAs"
    quote: "Increasingly, however, sophisticated corporate customers are looking for PPA providers who can solve this problem and match renewable generation with load, hour for hour."
  - id: e24
    source: ref-nrf-hedges-since-uri
    locator: "Three flavors of hedge"
    quote: "Most hedges are settled on an hourly basis. Most compare the spot market price for electricity that hour to an agreed-upon fixed price. One price is subtracted from the other, and the difference is multiplied by a volume of power for that hour."
  - id: e25
    source: ref-rmi-ppa-risk
    locator: "Volume Risk, Further Detail (p. 22)"
    quote: "Since the value of a VPPA to a city in any given period is the product of the energy generated and the difference between the market and VPPA prices, any variability in the former causes uncertainty to the project’s value."
  - id: e26
    source: ref-wbcsd-multitech-ppa
    locator: "Introduction"
    quote: "In this paper we explore whether combined technology solutions can offer a firmer generation profile in comparison to a single technology and hence reduce exposure to risks, now or perhaps in the future."
  - id: e27
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Profile risk"
    quote: "Profile risk captures short-term variations of production, even if the annual production is in line with forecasted volumes."
  - id: e28
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Profile risk"
    quote: "One speaks of “profile risk” of a generating asset such as a wind farm, if the hourly production profile of such an asset deviates from the baseload characteristic and corresponding hourly prices lead to an overall lower value (or higher, as the case may be) in aggregate."
  - id: e29
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Profile risk"
    quote: "In markets with high penetration of renewable energy, there is generally a negative correlation between times with lots of wind and/or radiation and market prices. This is often referred to as “cannibalization” effect and forms part of the profile cost."
  - id: e30
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Capture factor"
    quote: "Capture factors illustrate the ratio of the average volume weighted price to the baseload price of a given tenor (captured price/baseload price)."
  - id: e31
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Baseload PPA"
    quote: "In an annual baseload PPA, the buyer agrees to buy a determined volume of energy for every hour over the year. Profile and volume risks sit with the seller, because they have to deliver the agreed energy no matter what. If there’s low production and the seller cannot meet its obligations through its plant, the agreed volume will be sourced from the spot market."
  - id: e32
    source: ref-montel-shape-imbalance
    locator: "What \"shape\" and imbalance risk mean for buyers"
    quote: "Shape risk is the mismatch between the contracted baseload and the actual usage profile. This is usually because larger energy contracts provide steady supplies at a lower cost to suppliers, at a fixed rate. However, if a consumer goes above that baseload amount, they will have to pay a higher spot price to fulfil their energy needs. They may also have to offload energy they don't use for a lower price than they paid for it."
  - id: e33
    source: ref-montel-shape-imbalance
    locator: "How suppliers price shape risk into contracts"
    quote: "When the energy market is volatile, suppliers often add premiums to energy pricing to cover financial losses, including the difference between a customer's actual consumption and the agreed forecasted consumption. This is called a risk premium."
  - id: e34
    source: ref-rff-merchant-hedges
    locator: "3.1 Bank Hedge (p. 7)"
    quote: "The hourly nature of the contract creates the additional risk of mismatch in the timing of wind generation versus contracted hourly power sales (shape risk). To limit the extent of volume and shape risks, fixed hourly volume is typically determined by the project’s hourly generation in a “P99” scenario (Eberhardt and Brozynski 2017), the amount forecasted to be exceeded 99 percent of the time."
  - id: e35
    source: ref-rff-merchant-hedges
    locator: "3.1 Synthetic PPA (p. 8)"
    quote: "In addition, the quantity of electricity in a synthetic PPA is a percentage of the actual electricity generation, removing the project’s volume, shape, and curtailment risks that exist in bank hedges."
  - id: e36
    source: ref-rff-merchant-hedges
    locator: "3.5 Wind Hedging Structures: Risks to Counterparties (p. 16)"
    quote: "Second, since the contracted volume is a percentage of as-produced generation, the counterparty bears the risk that the amount and timing of wind generation revenue will not align with its needs. Although the counterparty may be purchasing electricity within the wholesale market of the project, which would mitigate its price risk, the quantity and timing of electricity purchases versus contracted wind revenue may not be well matched (volume and shape risks). For example, a corporation may consume more electricity during daytime hours but the wind project may generate more electricity at night, likely a period of different pricing."
  - id: e37
    source: ref-rff-merchant-hedges
    locator: "3.5 Wind Hedging Structures: Risks to Counterparties (p. 16)"
    quote: "As with a synthetic PPA, the counterparties bear the volume and shape risks of electricity revenue, and unique among the hedging structures, the counterparties in a proxy revenue swap also take on the weather (wind speed) risk."
  - id: e38
    source: ref-levelten-vppa-terms
    locator: "Calculation Interval, what it means"
    quote: "The Calculation Interval is the time period over which your Market Price is calculated and multiplied by your Trade Quantity, typically on an hourly basis."
  - id: e39
    source: ref-ornl-renewable-contracting-vt6
    locator: "Slide: Considerations and Risk Management"
    quote: "▪ Risks and Considerations ▪ Location ▪ Resource and Technology ▪ Volume ▪ Shape ▪ Price volatility ▪ Transaction complexity ▪ Market insight ▪ Congestion ▪ Curtailment ▪ Basis risk"
  - id: e40
    source: ref-ornl-ppa
    locator: "Sleeved PPA, p. 2"
    quote: "If renewable energy does not meet the offtaker’s demand, the utility company supplies additional grid electricity. Sleeved PPAs are good options for buyers who are not well-versed in power markets. The utility company takes on the risks associated with price fluctuations while offering electricity to the buyer at a fixed price."
  - id: e41
    source: ref-rmi-ppa-risk
    locator: "Retailer-Firmed Power, risk effects"
    quote: "and ensuring that the city receives shaped power to meet its hourly demand, a retail solution would eliminate shape risk"
  - id: e42
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Profile risk"
    quote: "Profile risk can only be hedged through “fixed price” products where a utility is willing to pay a fixed price (usually at discount to the baseload price) for the entirety or parts of the volume produced by the wind farm during at any time."
  - id: e43
    source: ref-rmi-ppa-risk
    locator: "Fixed-Volume Price Swap, which city risks are mitigated"
    quote: "Shape risk: An FVPS increases shape risk for the city because by having to provide a set amount of “power” at certain times they are more susceptible to the timing of renewable generation."
---

## Definition

Shape risk is the risk that comes from when a variable resource produces, hour by hour, rather than how much it produces in total. The sources describe it as uncertainty in the timing of renewable generation [e1], as power produced in varying amounts at different times and prices [e2], and as hour-to-hour generation that varies with wind and sun even when the total volume comes in as expected; Pexapark, which calls it profile risk, says the same. [e3][e27] The resulting mismatch is against the buyer's demand profile, against market prices, against contracted hourly sales, or a combination. [e2][e3][e4][e34]

## How it works

The sources agree that wind and solar output follows the weather, not demand, so its hourly profile rarely matches a buyer's load: WBCSD says a corporate buyer's demand profile is likely to be flatter, and Yale gives a data center using power day and night as an example. [e3][e2][e4] RFF gives the reverse case: a corporation that uses more power by day buying from a wind project that generates more at night. [e36]

Prices vary through the day as well. RMI describes a VPPA's value in a period as the energy generated times the difference between market and contract price, and Norton Rose Fulbright and LevelTen say the calculation is typically made hour by hour, so the value depends on how output lines up with prices. [e24][e25][e38] RMI says the intersection of uncertain generation with uncertain prices makes VPPA revenue uncertain, and that because generation and consumption rarely coincide, changing prices through the day can leave VPPA revenues short of offsetting the buyer's energy costs. [e5][e6] Pexapark describes the same price side as the hourly profile, valued at hourly prices, being worth less (or more) than a baseload profile. [e28]

**Who carries it depends on the contract.** In an as-produced (as-generated) contract the buyer carries it: RFF says a synthetic PPA's volume is a share of actual generation, which removes the project's volume, shape and curtailment risks and leaves the counterparty bearing the mismatch in amount and timing. [e35][e36] RMI likewise places the shape mismatch in a VPPA on the buyer's side. [e6] In a contract with a fixed hourly volume, whoever committed to the volume carries it: RFF says a bank hedge's hourly fixed volume creates shape risk for the project, RMI that a fixed-volume price swap increases shape risk for the buyer that must provide the set amount, and Pexapark (writing on European baseload PPAs) that profile and volume risks sit with the seller, who must source any shortfall from the spot market. [e34][e43][e31] RFF adds that in a proxy revenue swap the counterparties bear the volume and shape risks. [e37]

In a physical, as-produced PPA, shape risk shows up as balancing: when output falls short in an hour the buyer has to buy the difference, and when output exceeds need it has to sell. [e8][e9] In a sleeved PPA, ORNL says the utility supplies additional grid electricity when renewable output does not meet the buyer's demand and takes on price-fluctuation risk while offering the buyer a fixed price. [e40]

The sources separate shape from volume. RMI says that timing can be weather-driven too, but volume risk is about the total amount; WBCSD and Pexapark say shape (profile) risk exists even if the total over a long enough period equals the estimate. [e7][e3][e27] ORNL's DOE training lists volume and shape as separate VPPA risks. [e39]

Two European sources add a price-side effect. EPEX SPOT says that because solar plants produce at the same times, their combined output will increasingly affect clearing prices, especially between 10:00 and 16:00, and change the shape of the price curve itself; Pexapark says that in high-renewable markets times of high wind or sun generally coincide with lower prices, the "cannibalization" effect, which it counts as part of profile cost. [e20][e4][e29] The IMM reports the same direction in ERCOT for captured prices (see ERCOT context). [e14]

On the load side, Montel, in a procurement blog that names no particular market, defines shape risk as the mismatch between a contracted baseload and the buyer's actual usage profile: usage above the baseload must be bought at a higher spot price, and unused energy sold for less. [e32] That is the same buy-and-sell balancing RMI and WBCSD describe for an as-produced PPA. [e8][e9] Montel says that when the market is volatile, suppliers often add a risk premium to cover, among other losses, the difference between a customer's actual and forecast consumption. [e33] FERC says more variable demand is typically more expensive to serve, especially when peaks coincide. [e10]

Mitigation in the sources: WBCSD says a buyer can size the contracted generation to its demand profile to reduce the hours and volumes it must buy or sell [e21]; WBCSD and POWER Magazine both report buyer interest in firm, shaped or hour-by-hour matched PPAs instead of the project's variable profile [e12][e23]; Pexapark says profile risk can only be hedged through fixed-price products, usually at a discount to baseload [e42]; WBCSD explores multi-technology PPAs as a way to a firmer profile [e26]; and POWER Magazine says a load-following product that matches generation to load hour by hour will likely need several resource types plus storage. [e23][e11] RFF says bank-hedge volumes are typically set at the project's hourly P99 generation to limit volume and shape risk. [e34]

## ERCOT context

The ERCOT data the IMM reports show why shape matters here. In 2025 most real-time price spikes occurred between 7 and 9 p.m., the peak net load hours when solar ramps down. [e15] The solar capacity factor in the daily peak net load interval fell to 1.7% in 2025, while wind held 29.3%. [e16]

The IMM defines the captured energy price as the weighted-average price paid to generators for the energy they produce. It says captured prices fall as installed renewable capacity rises, and that in 2025 solar's captured price ($21/MWh) was nearly at parity with wind's ($19/MWh) after years of a solar premium, a trend it expects to continue as solar shifts peak net demand into the evening. [e13][e14] It also says congestion lowers nodal prices in high-renewable regions. [e22]

ERCOT CRRs and the ICE ERCOT peak futures are defined over blocks of hours. CRRs are auctioned in time-of-use blocks with the same MW in each hour: 5x16 and 2x16 blocks for hours ending 0700-2200 and 7x8 blocks for the remaining hours. [e17] The ICE ERCOT North peak futures contract uses the average of Settlement Point Prices for hours ending 0700-2200. [e18] A flat block hedges a constant MW, whereas a wind or solar profile varies within the block. [e17][e3]

## Key facts

- Shape risk is about timing of output within a period; volume risk is about the total. [e3][e7][e27]
- WBCSD says a corporate buyer's demand profile is likely to be flatter than wind or solar output; Yale gives a data center using power day and night as an example. [e3][e2]
- A mismatch between the generation shape and the buyer's consumption can weaken a PPA as a hedge; RMI says generation and consumption rarely coincide. [e6][e2][e36]
- As-produced contracts leave shape risk with the buyer; fixed hourly volumes leave it with whoever committed to the volume. [e35][e36][e34][e43]
- In 2025, most ERCOT price spikes were between 7 and 9 p.m. as solar ramped down. [e15]
- ERCOT solar capacity factor at the daily net peak interval: 1.7% in 2025; wind 29.3%. [e16]
- ERCOT 2025 captured prices: solar $21/MWh, wind $19/MWh. [e14]
- ERCOT CRR TOU blocks have the same MW in every hour of the block. [e17]

## Formula

Price-side measures in the sources compare what a generator's output earns with the average price. The IMM defines the captured price as the output-weighted average price paid to generators [e13]; EPEX SPOT's Quality Factor (also called the capture rate) divides the achieved price by the baseload price, and Pexapark's capture factor is the same ratio of the volume-weighted average price to the baseload price. [e19][e30] The IMM and EPEX SPOT do not call these a measure of shape risk; Pexapark describes profile risk in the same terms, as the hourly profile valued at hourly prices deviating from the baseload value. [e28]

Captured price = Σ(price_h × output_h) ÷ Σ output_h, and capture rate = captured price ÷ average (baseload) price, where h runs over the hours of the period. This writes out the definitions above; none of the sources prints the summation. [e13][e19][e30]

## Example

Suppose (illustrative, made-up numbers) a solar project produces 10 MWh in a midday hour priced at $20/MWh and 2 MWh in an evening hour priced at $100/MWh, and a flat-load buyer uses 6 MWh in each hour. The project's captured price is (10 × $20 + 2 × $100) ÷ 12 = $33.33/MWh, while the simple average of the two hours is $60, a capture rate of about 56%. The buyer is long 4 MWh at midday (worth $80 if sold) and short 4 MWh in the evening (costing $400 to buy): the total volume matches its load, but the shape leaves it $320 worse off.

Suppose instead, illustratively, the project had sold a fixed 6 MWh in each hour. Now the project is short 4 MWh in the evening and must buy it at $100, and has 4 MWh to sell at $20 at midday: the same $320 shape cost sits with the seller.

## Say it like this

(Guidance) Shape risk is the gap between when your solar or wind farm produces and when you need power or when power is valuable. In ERCOT, solar produces at midday but prices spike in the evening ramp, so even a perfect annual volume match can leave someone buying expensive evening power: the buyer under an as-produced deal, whoever committed to a fixed shape under a fixed-volume hedge.

## Common confusion

(Guidance) Shape risk is general industry usage and is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

The sources measure the mismatch against different things. WBCSD and Yale compare the generation profile with the buyer's demand profile [e3][e2]; RMI looks at the timing of generation against both market prices and the city's consumption [e1][e5][e6]; EPEX SPOT includes the generation's own effect on the price curve [e4]; Pexapark values the hourly profile against baseload prices [e28]; RFF compares output with a hedge's contracted hourly volumes [e34]; Montel uses the term for a consumer's usage against a baseload supply contract. [e32] They agree that timing, not total volume, is the core. [e3][e7][e27]

Shape risk is not volume risk. A project can hit its annual MWh exactly and still produce at the wrong hours. [e3][e7]

Shape risk is not basis risk. Basis is about location; shape is about time. Both can hit the same contract.

## Questions

### What is the difference between shape risk and volume risk?

Shape risk is about the hourly timing of output; volume risk is about the total amount over a longer period. WBCSD and Pexapark say shape risk exists even if the total over a long period matches the estimate. [e3][e7][e27]

### Who carries shape risk in an as-generated VPPA, and who in a fixed-volume hedge?

In an as-generated VPPA the buyer does, because the settled volume follows the project's actual output. [e35][e36] In a fixed-volume (bank) hedge the project does, because it owes a set volume every hour and must cover the timing mismatch; RMI says the same of a buyer that commits to a fixed volume, and Pexapark of the seller in a European baseload PPA. [e34][e43][e31]

### Why does shape risk matter more for solar in ERCOT now?

The IMM says solar's capacity factor at the daily net peak interval fell to 1.7% in 2025, most price spikes come in the 7-9 p.m. ramp, and solar's captured price has fallen to near parity with wind. [e15][e16][e14]

### How would you measure shape risk for a project?

Compare its captured price (output-weighted average price) with the average price over the same period; the IMM publishes captured prices for wind and solar, and EPEX SPOT and Pexapark call the ratio a quality factor, capture rate or capture factor. [e13][e19][e30]

### Why can a flat block not fully hedge a wind or solar project?

A flat block, like an ERCOT CRR TOU block, has the same MW in every hour, while renewable output varies hour to hour. [e17][e3] So the holder must buy or sell the difference hour by hour, as RMI and WBCSD describe for a buyer balancing an as-produced PPA against its load, and as RFF describes for a project under an hourly fixed-volume hedge. [e8][e9][e34]

### What can a buyer do about shape risk?

Size the contracted generation to its demand profile, buy a firm or shaped product instead of as-produced output, or contract a portfolio with storage that can follow load. [e21][e12][e11] ORNL describes a sleeved PPA in which the utility fills any shortfall at a fixed price, and RMI says a retail product delivering shaped power to hourly demand would eliminate shape risk for the buyer. [e40][e41]

### What if many solar plants in one market all produce at once?

EPEX SPOT and Pexapark (both writing on European markets) say their correlated output tends to lower prices in the hours they produce and reshapes the price curve; the IMM reports falling captured prices as ERCOT renewable capacity grows. [e20][e29][e14]

## Scenarios

### A retailer with flat business-hours load buys an as-produced solar PPA equal to its annual usage. What does its position look like in July?

- Midday it is long: output exceeds load and the surplus must be sold. [e8][e3]
- In the evening ramp it is short just as ERCOT prices spike, because solar output has fallen away. [e15][e16]
- The annual volume match does not remove this; it is shape risk, not volume risk. [e3][e7]
- Under an as-produced deal this mismatch is the buyer's, not the project's. [e35][e36]
- Options include resizing to load, a shaped or firm product, or adding storage or wind. [e21][e12][e11]

## Open items

- No saved source quantifies ERCOT shape cost for a typical solar or wind profile against a 5x16 or 7x24 block; the IMM gives captured prices but not a shape discount to hub blocks.
- Retailer-firmed and sleeved supply: ORNL (tier 2) supports that the utility fills shortfalls at a fixed price; that this "would eliminate shape risk" is RMI's statement only.
- Single-source (EPEX SPOT, European): solar shape risk is "more predictable than for wind but it is also more concentrated". Not cross-checked and not ERCOT.
- Single-publisher (RFF): bank-hedge hourly volumes are typically set at the project's P99 hourly generation. No ERCOT tier 1-2 source.
- Load-side shape risk: Montel (a procurement blog naming no market) defines it against a baseload contract and FERC shows that load shapes differ in cost to serve; no ERCOT tier 1-2 source discusses an LSE's load shape against block hedges.
- Single-publisher (Pexapark, European): solar capture factors are around 1 in winter and lower in summer, wind lower in winter. Not used.
- The FERC primer's load-shape passage is about cost to serve, not hedging; it is used only to show that load shapes differ.
