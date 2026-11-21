---
id: shape-risk
name: Shape Risk
aliases: [shape risk, profile risk, shape/profile risk]
kind: concept
domain: trading
level: 2
lenses: [trading, portfolio, structuring, retail]
as_of: 2026-11-21
depth: deep
basis: industry-reference
links:
  - to: volumetric-risk
    type: contrasts-with
    note: Shape risk is about when the energy comes, volume risk about how much in total; WBCSD says shape risk exists even if the overall volume matches the estimate. [e3][e7]
  - to: ppa-vppa
    type: affects
    note: For a VPPA, shape risk combined with price risk makes the buyer's settlement revenue uncertain. [e5][e6]
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
    note: POWER Magazine and WBCSD describe storage and multi-technology portfolios as ways to offer firmer or load-following profiles. [e11][e12]
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
    quote: "The third and final index is the Quality Factor (QF) Index which is a measure of the Achieved Price divided by the Baseload Price."
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
---

## Definition

Shape risk is the risk that comes from when a variable resource produces, hour by hour, rather than how much it produces in total. The sources describe it as uncertainty in the timing of renewable generation [e1], as power produced in varying amounts at different times and prices [e2], and as hour-to-hour generation that varies with wind and sun even when the total volume comes in as expected. [e3] The resulting mismatch is against the buyer's demand profile, against market prices, or both. [e2][e3][e4]

## How it works

The sources agree that wind and solar output follows the weather, not demand, so its hourly profile rarely matches a buyer's load: WBCSD says a corporate buyer's demand profile is likely to be flatter, and Yale gives a data center using power day and night as an example. [e3][e2][e4]

Prices vary through the day as well. In a virtual PPA the settlement each hour is the price difference times the volume in that hour, so the value depends on how output lines up with prices. [e24][e25] RMI says the intersection of uncertain generation with uncertain prices makes VPPA revenue uncertain, and that because generation and consumption rarely coincide, changing prices through the day can leave VPPA revenues short of offsetting the buyer's energy costs. [e5][e6]

In a physical, as-produced PPA, shape risk shows up as balancing: when output falls short in an hour the buyer has to buy the difference, and when output exceeds need it has to sell. [e8][e9]

The sources separate shape from volume. RMI says that timing can be weather-driven too, but volume risk is about the total amount; WBCSD says shape risk exists even if the total over a long enough period equals the estimate. [e7][e3]

EPEX SPOT, a European power exchange, adds a price-side effect: because solar plants produce at the same times, their combined output depresses prices in the midday hours and changes the shape of the price curve itself. [e20][e4] The IMM reports the same direction in ERCOT for captured prices (see ERCOT context). [e14]

Mitigation in the sources: the buyer can size the contracted generation to its demand profile to reduce the hours and volumes it must buy or sell [e21]; buyers have shown interest in firm or shaped PPAs, physical or financial, that give a firm profile instead of the project's variable one [e12]; and POWER Magazine says a load-following product that matches generation to load hour by hour will likely need several resource types plus storage. [e23][e11]

## ERCOT context

The ERCOT data the IMM reports show why shape matters here. In 2025 most real-time price spikes occurred between 7 and 9 p.m., the peak net load hours when solar ramps down. [e15] The solar capacity factor in the daily peak net load interval fell to 1.7% in 2025, while wind held 29.3%. [e16]

The IMM defines the captured energy price as the weighted-average price paid to generators for the energy they produce. It says captured prices fall as installed renewable capacity rises, and that in 2025 solar's captured price ($21/MWh) was nearly at parity with wind's ($19/MWh) after years of a solar premium, a trend it expects to continue as solar shifts peak net demand into the evening. [e13][e14] It also says congestion lowers nodal prices in high-renewable regions. [e22]

ERCOT's standard products are flat blocks. CRRs are auctioned in time-of-use blocks with the same MW in each hour: 5x16 and 2x16 blocks for hours ending 0700-2200 and 7x8 blocks for the remaining hours. [e17] The ICE ERCOT North peak futures contract uses the average of Settlement Point Prices for hours ending 0700-2200. [e18] A flat block hedges a constant MW, whereas a wind or solar profile varies within the block. [e17][e3]

## Key facts

- Shape risk is about timing of output within a period; volume risk is about the total. [e3][e7]
- A buyer's demand profile is usually flatter than wind or solar output. [e3][e2]
- In a VPPA, generation and consumption rarely coincide, so the hedge may not fully offset energy costs. [e6][e2]
- In 2025, most ERCOT price spikes were between 7 and 9 p.m. as solar ramped down. [e15]
- ERCOT solar capacity factor at the daily net peak interval: 1.7% in 2025; wind 29.3%. [e16]
- ERCOT 2025 captured prices: solar $21/MWh, wind $19/MWh. [e14]
- ERCOT CRR TOU blocks have the same MW in every hour of the block. [e17]

## Formula

The sources share a measure of shape cost on the price side: the price a generator actually captures, weighted by its own output, compared with the average price. The IMM defines the captured price as the output-weighted average price paid to generators [e13]; EPEX SPOT's Quality Factor (or capture rate) divides the achieved price by the baseload price. [e19]

Captured price = Σ(price_h × output_h) ÷ Σ output_h, and capture rate = captured price ÷ average (baseload) price, where h runs over the hours of the period. This writes out the two definitions above; neither source prints the summation. [e13][e19]

## Example

Suppose (illustrative, made-up numbers) a solar project produces 10 MWh in a midday hour priced at $20/MWh and 2 MWh in an evening hour priced at $100/MWh, and a flat-load buyer uses 6 MWh in each hour. The project's captured price is (10 × $20 + 2 × $100) ÷ 12 = $33.33/MWh, while the simple average of the two hours is $60, a capture rate of about 56%. The buyer is long 4 MWh at midday (worth $80 if sold) and short 4 MWh in the evening (costing $400 to buy): the total volume matches its load, but the shape leaves it $320 worse off.

## Say it like this

(Guidance) Shape risk is the gap between when your solar or wind farm produces and when you need power or when power is valuable. In ERCOT, solar produces at midday but prices spike in the evening ramp, so even a perfect annual volume match can leave you buying expensive evening power.

## Common confusion

(Guidance) Shape risk is general industry usage and is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

The sources measure the mismatch against different things. WBCSD and Yale compare the generation profile with the buyer's demand profile [e3][e2]; RMI stresses the timing of generation against market prices [e1][e5]; EPEX SPOT includes the generation's own effect on the price curve. [e4] They agree that timing, not total volume, is the core. [e3][e7]

Shape risk is not volume risk. A project can hit its annual MWh exactly and still produce at the wrong hours. [e3]

Shape risk is not basis risk. Basis is about location; shape is about time. Both can hit the same contract.

## Questions

### What is the difference between shape risk and volume risk?

Shape risk is about the hourly timing of output; volume risk is about the total amount over a longer period. WBCSD says shape risk exists even if the total over a long period matches the estimate. [e3][e7]

### Why does shape risk matter more for solar in ERCOT now?

The IMM says solar's capacity factor at the daily net peak interval fell to 1.7% in 2025, most price spikes come in the 7-9 p.m. ramp, and solar's captured price has fallen to near parity with wind. [e15][e16][e14]

### How would you measure shape risk for a project?

Compare its captured price (output-weighted average price) with the average price over the same period; the IMM publishes captured prices for wind and solar, and EPEX SPOT calls the ratio a quality factor or capture rate. [e13][e19]

### Why can a flat block not fully hedge a wind or solar project?

A flat block, like an ERCOT CRR TOU block, has the same MW in every hour, while renewable output varies hour to hour. [e17][e3] In some hours the project is short of the block and must buy; in others it is long and must sell. [e8][e9]

### What can a buyer do about shape risk?

Size the contracted generation to its demand profile, buy a firm or shaped product instead of as-produced output, or contract a portfolio with storage that can follow load. [e21][e12][e11]

### What if many solar plants in one market all produce at once?

EPEX SPOT says their correlated output depresses prices in the hours they produce and reshapes the price curve; the IMM reports falling captured prices as ERCOT renewable capacity grows. [e20][e14]

## Scenarios

### A retailer with flat business-hours load buys an as-produced solar PPA equal to its annual usage. What does its position look like in July?

- Midday it is long: output exceeds load and the surplus must be sold. [e8][e3]
- In the evening ramp it is short just as ERCOT prices spike, because solar output has fallen away. [e15][e16]
- The annual volume match does not remove this; it is shape risk, not volume risk. [e3][e7]
- Options include resizing to load, a shaped or firm product, or adding storage or wind. [e21][e12][e11]

## Open items

- No saved source quantifies ERCOT shape cost for a typical solar or wind profile against a 5x16 or 7x24 block; the IMM gives captured prices but not a shape discount to hub blocks.
- Single-source, not cross-checked (RMI): a retailer-firmed product that delivers shaped power to meet hourly demand "would eliminate shape risk".
- Single-source (EPEX SPOT, European): solar shape risk is "more predictable than for wind but it is also more concentrated". Not cross-checked and not ERCOT.
- Load-side shape risk (an LSE's customer load shape against block hedges) is supported only in general terms (FERC load shape); no ERCOT tier 1-2 source discusses it directly.
- The FERC primer's load-shape passage is about cost to serve, not hedging; it is used only to show that load shapes differ.
