---
id: spark-spread
name: Spark Spread
aliases: [spark spread, gross spark spread, net spark spread, clean spark spread, dark spread, quark spread]
kind: metric
domain: fundamentals
level: 2
depth: deep
basis: industry-reference
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-22
links:
  - to: forward-curve
    type: used-in
    note: A spark spread can be built from forward as well as spot prices; Montel describes hedging it by buying gas forward and selling power forward, and EIA says the coal analogue can be calculated on spot or forward prices. [e8][e40][e35]
  - to: heat-rate
    type: prerequisite-of
    note: The heat rate converts the gas price into a fuel cost per MWh, so it is a key input to the spark spread. [e3][e4]
  - to: implied-heat-rate
    type: related
    note: The market-inferred (implied) heat rate is the heat rate at which the spark spread is exactly zero. [e13][e14]
  - to: natural-gas-price
    type: prerequisite-of
    note: The spark spread subtracts the cost of the natural gas needed to produce the electricity from the power price. [e1]
  - to: heat-rate-call-option
    type: related
    note: A heat rate call option protects a gas project against tightening spark spreads in exchange for giving up the upside from widening spreads. [e18][e29]
  - to: tolling-agreement
    type: related
    note: The spark spread is a fundamental consideration when assessing tolling contracts. [e2]
  - to: peaker-net-margin
    type: contrasts-with
    note: ERCOT's PNM uses a protocol-specified 10.0 MMBtu per MWh heat rate and excludes variable O&M, unlike a net revenue calculation. [e21]
  - to: merit-order
    type: related
    note: Spark spreads indicate the general operational competitiveness of gas-fired generators in meeting demand. [e9]
  - to: sc-ccgt-in-the-money
    type: used-in
    note: Whether a combined-cycle unit is in the money is a spark spread question at that unit's heat rate. [e5][e20]
evidence:
  - id: e1
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy, 'An introduction to spark spreads' (February 8, 2013), first paragraph"
    quote: "The spark spread is a common metric for estimating the profitability of natural gas-fired electric generators. The spark spread is the difference between the price received by a generator for electricity produced and the cost of the natural gas needed to produce that electricity. It is typically calculated using daily spot prices for natural gas and power at various regional trading points."
  - id: e2
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project (Powerex tolling), Chapter 2, section on generation fuel and efficiency, before 2.4.1.1 Steam Units"
    quote: "The profitability of running a fuelled power plant is measured by the spark spread. This is the difference between the demand price of electricity and the cost of the fuel to produce it and may or may not include fixed and/or variable operating and maintenance costs, depending upon the context. Spark spread is a fundamental consideration when assessing tolling contract offerings."
  - id: e3
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), 'Spark spread calculation'"
    quote: "Spark spread ($/MWh) = power price ($/MWh) – [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)]"
  - id: e4
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread"
    quote: "The spark spread is calculated by subtracting the product of an assumed heat rate for a single or group of generation facilities and the price of natural gas from the price of power during the same period, and results in an effective margin that would be realized if one was to buy gas from the market, convert the gas to electricity at the stated heat rate (MMBtu / MWh) and sell the resulting electricity into the market at the market price."
  - id: e5
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), paragraph after the spark spread equation"
    quote: "Those marketing the output of a unit will use the unit's tested heat rate to assess its profitability. Market participants and observers rely on a generic benchmark to assess overall market conditions. EIA's new daily price table shows the spark spread using a benchmark heat rate of 7,000 Btu/kilowatthour (kWh), which represents a fairly new and efficient natural gas combined-cycle generator."
  - id: e6
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread"
    quote: "Spark spreads can be calculated on a gross or net basis, where the net basis follows the same calculation but also accounts (at a minimum) for the following variable costs: gas transportation costs and power transmission costs."
  - id: e7
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), final paragraph"
    quote: "A limitation of the spark spread calculation is that it does not take into consideration other costs associated with the generation of electricity, such as pipeline costs or fuel-related finance charges, and other variable costs (like operations and maintenance costs), taxes, or fixed expenses. In that sense, a spark spread is an indicator of market conditions, but it is not necessarily an exact measure of profitability for any one specific generator."
  - id: e8
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides, 'Tolling Deals' (G. Swindle, 2013), slide 3, Basics of Tolling Deals: Deal Structure"
    quote: "FP denotes the forward (or spot) price of power for a particular delivery bucket (e.g. 5x16) and FG denotes the price of natural gas; both are typically at liquid pricing hubs. - H∗ is the heatrate (conversion rate between gas and power). - V is VOM (variable operation and maintenance)."
  - id: e9
    source: ref-eia-spark-dark-2017
    locator: "EIA Today in Energy, 'Spark and dark spreads indicate profitability of natural gas, coal power plants' (October 13, 2017), third paragraph"
    quote: "Changes in spark spreads and dark spreads for a given electricity power market indicate the general operational competitiveness of coal-fired or natural gas-fired electric generators in meeting the market’s electricity demand. These spreads are calculated by comparing the day-ahead, wholesale power market price with the delivered input price of the fuel, and are adjusted for the energy content of the fuel and the relative conversion efficiency of power plants."
  - id: e10
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread, first paragraph"
    quote: "It is primarily the relative prices of the two commodities rather than their absolute levels that lead to the degree to which it is favourable to generate using natural gas over some other means."
  - id: e11
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), paragraph after the efficiency chart"
    quote: "Generators burning other fuels have similar metrics; for example, dark spreads (electricity price minus the cost of coal) are calculated for coal-fired generators, and quark spreads (electricity price minus the cost of enriched uranium fuel) for nuclear generators."
  - id: e12
    source: ref-eia-spark-dark-2017
    locator: "EIA Today in Energy (2017), fifth paragraph"
    quote: "Coal and natural gas have different energy contents, and the power plants using these fuels have different heat rates, or energy conversion efficiencies. For this reason, spark and dark spreads are location-specific and reflect the characteristics of the fuels and the technical specifications of power plants in a given market."
  - id: e13
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread, market-inferred heat rate paragraph"
    quote: "In addition to the spark spread, a market-inferred heat rate can be calculated for a time series of historical gas and power prices by calculating the varying heat rate of a fictitious generating facility that would be operating with precisely zero gross margin (zero spark spread)."
  - id: e14
    source: imm-som-2025
    locator: "Chapter I, Review of Real-Time Market Outcomes, section 2, Implied Heat Rates"
    quote: "We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money."
  - id: e15
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), second paragraph"
    quote: "Spark spreads tend to be fairly volatile, more so than crack spreads in petroleum markets, largely because of the volatility of wholesale electric power prices, which vary widely with changes in demand for electricity and the available electric supply."
  - id: e16
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (2015), Context"
    quote: "It is not so much how much the gas costs or what price will be paid for the electricity in absolute terms. The key is the spread between the two and how efficiently you can convert gas into electricity."
  - id: e17
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), paragraph on heat rate and efficiency"
    quote: "One kWh has a heat content of 3,412 Btu. A generator that uses 7,000 Btu to produce one kWh has a conversion efficiency slightly below 50% (see chart below)."
  - id: e18
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper, 'Financial Hedges for United States Gas-Fired Power Generation Facilities' (2017), Heat Rate Call Options"
    quote: "The effect of the HRCO is similar to a revenue put in that the project is protected against tightening spark spreads. However, this protection is effectively paid for in an HRCO by the project giving up the potential upside that it would otherwise realize from widening spark spreads, rather than the upfront premium payment found in the revenue put."
  - id: e19
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (2015), Context"
    quote: "The wholesale price for electricity can vary wildly. Gas prices also are volatile. Energy hedges guard the spread between gas and electric prices."
  - id: e20
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), paragraph after the efficiency chart"
    quote: "Conversely, as a generating unit's efficiency decreases, the spark spread also decreases—thus, older, less-efficient plants have smaller spark spreads than those achieved with a heat rate of 7,000 Btu/kWh because they require more fuel per unit of output."
  - id: e21
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Peaker Net Margin (text before footnote 64)"
    quote: "ERCOT’s PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates."
  - id: e22
    source: imm-som-2024
    locator: "Resource Adequacy chapter, footnote 48 (net revenue assumptions)"
    quote: "For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs."
  - id: e23
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates, text after Figure 2"
    quote: "The average implied heat rate for 2025 was almost 28% lower than in 2024 and was the lowest annual average of the last five years. This value is now in line with the marginal heat rate of natural gas power plants in the ERCOT market."
  - id: e24
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates, text after Figure 2"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e25
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e26
    source: ref-eia-spark-2025
    locator: "EIA Today in Energy, spark and dark spreads (December 8, 2025), spark spread paragraph and data note"
    quote: "The spark spread for natural gas, a similar measure of revenue relative to fuel costs for natural gas-fired generators, increased from a January through November average of $21/MWh in 2023 to $28/MWh in 2025."
  - id: e27
    source: ref-eia-spark-2025
    locator: "EIA Today in Energy (December 8, 2025), data note under the chart"
    quote: "The heat rate used for the dark spread was 10,500 British thermal units per kilowatthour (Btu/kWh), while the heat rate for the spark spread was 7,000 Btu/kWh."
  - id: e29
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Contrasts"
    quote: "Both products provide downside protection for project revenue. With a revenue put, the project has all the upside — the assumed excess revenue from physical sales — if market prices turn in the project’s favor. With a heat rate call option, the upside goes to the hedge provider."
  - id: e28
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), third paragraph"
    quote: "Note that spark spreads are not reported if they have negative values."
  - id: e30
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Spark Spread'"
    quote: "The differential between the price of electricity and the price of natural gas or other fuel used to generate electricity, expressed in equivalent units."
  - id: e31
    source: ref-deng-exotic-electricity-options
    locator: "Deng, Johnson and Sogomonian, Decision Support Systems 30 (2001), section 2.1, Spark spread, or heat rate-linked derivatives"
    quote: "The spark spread associated with a particular heat rate is defined as the current price of electricity less the product of the heat rate and the current fuel price. Thus, the lower the heat rate, the lower the fuel price, and the higher the electricity price, the larger the spark spread."
  - id: e32
    source: ref-psu-risk-management-lesson12
    locator: "Penn State EBF 301, Lesson 12, Temporal and Locational Risks, 'Spark Spread'"
    quote: >-
      The second mechanism for exercising arbitrage is through the "spark spread," which is the difference between the electricity price and the cost of generating electricity, which is mainly the fuel cost. The arbitrage opportunity that the spark spread represents is typically the opportunity to buy fuel and sell electricity. Spark spreads in financial markets are typically defined as the difference between the LMP and the cost of producing electricity by a natural gas generator with certain characteristics (like a heat rate of 10,000 and variable O&M costs of $2.50 per MWh).
  - id: e33
    source: ref-psu-risk-management-lesson12
    locator: "Penn State EBF 301, Lesson 12, 'Spark Spread', worked example"
    quote: "As an example, let's say that the electricity price is $100/MWh and the cost of fuel is $5 per million BTU. The marginal cost of a gas-fired generator at this fuel price with a heat rate of 10 million BTU/MWh and variable O&M costs of $2.50/MWh would be 10*5 + 2.50 = $52.50/MWh. The spark spread would thus be $100/MWh - $52.50/MWh = $47.50/MWh."
  - id: e34
    source: ref-psu-risk-management-lesson12
    locator: "Penn State EBF 301, Lesson 12, 'Spark Spread', text with Figure 3 (PJM LMPs)"
    quote: "During some hours, the spark spread is negative, indicating that it would not be profitable to buy fuel and sell electricity. During other hours, the spark spread is positive, indicating that it would be profitable to buy fuel and sell electricity."
  - id: e35
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy, 'Dark spreads measure returns over fuel costs of coal-fired generation' (February 20, 2013), first paragraph"
    quote: "The dark spread is a common metric used to estimate returns over fuel costs of coal-fired electric generators. A dark spread is the difference between the price received by a generator for electricity produced and the cost of coal needed to produce that electricity. Dark spreads can be calculated using current spot prices or forward prices."
  - id: e36
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy (February 20, 2013), 'Power price'"
    quote: "Unlike spark spreads, which are calculated using natural gas costs and on-peak power prices, dark spreads often use a combination of on- and off-peak power prices. The combination of power prices (referred to as a flat price) reflects the different role that coal-fired generators play in the supply stack of a particular electric system."
  - id: e37
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy (February 20, 2013), 'Fuel costs', heat rate paragraph"
    quote: "The heat rate assumption in the chart above was a generic 10,000 Btu/kWh coal-fired steam turbine. A generator that uses 10,000 Btu to produce one kWh has a conversion efficiency of slightly above 30% (see chart below). More-efficient combined-cycle units that burn natural gas have heat rates of 7,000 Btu/kWh (these are often used as the assumption in spark spread calculations)."
  - id: e38
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy (February 20, 2013), 'Fuel costs'"
    quote: "Because the prompt-month contract price is for a specific fuel only, a transportation cost is added to reflect the price of shipping the coal to the power plant."
  - id: e39
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy (February 20, 2013), final paragraph"
    quote: "A generic dark spread calculation has similar limitations to the spark spread, as it does not take into consideration other costs associated with generating electricity such as finance charges, environmental costs (although those are sometimes added), and other variable costs (like operations and maintenance costs), or taxes."
  - id: e41
    source: ref-eia-dark-spread-2013
    locator: "EIA Today in Energy (February 20, 2013), note under the dark spread chart"
    quote: "Note: Dark spreads are calculated using the MISO Minnesota Hub on-peak and off-peak power prices, prompt-month futures contracts for Powder River Basin Wyoming coal with an energy content of 8,800 Btu/lb and a sulfur content of 0.8 lb/MMBtu, a 10,000-Btu/kWh heat rate, and a $17/ton coal transportation rate."
  - id: e40
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', hedging strategies list"
    quote: "Hedging the spark spread, or profit margin of natural gas, allows traders to both buy natural gas as part of a forward contract and sell power forwards."
---

## Definition

The CFTC glossary defines the spark spread as the differential between the price of electricity and the price of natural gas or other fuel used to generate it, expressed in equivalent units. [e30] EIA, the SFU thesis and Penn State's course text say much the same in plant terms: the difference between the price received for electricity and the cost of the fuel needed to produce it (natural gas, in EIA's wording; "mainly the fuel cost", in Penn State's). EIA and the SFU thesis present it as a measure of the profitability of running a fuelled (for EIA, gas-fired) plant. [e1][e2][e32]

## How it works

The fuel cost is the gas price multiplied by a heat rate, so the spark spread is the power price minus gas price times heat rate, in $/MWh. EIA, the SFU thesis and Deng et al. all state it this way. [e3][e4][e31] The result is the margin a plant would earn if it bought gas, converted it to power at the stated heat rate and sold the power at the market price; Penn State describes the same buy-fuel, sell-power opportunity. [e4][e32] The heat rate is the plant's conversion rate between gas and power. [e8][e3]

Which heat rate is used depends on the purpose, and the sources assume different ones. Someone marketing one unit uses that unit's tested heat rate; observers of the whole market use a generic benchmark, and EIA uses 7,000 Btu/kWh, representing a fairly new and efficient combined-cycle unit. [e5][e37] Penn State's course text says spark spreads in financial markets are typically defined against a gas generator "with certain characteristics", giving as an example a heat rate of 10,000 and variable O&M of $2.50 per MWh. [e32] Deng et al. define the spread for "a particular heat rate" without fixing one. [e31] A less efficient unit (higher heat rate) needs more fuel per MWh and so earns a smaller spark spread. [e20][e4][e31]

The sources treat other costs differently, and you should say which version you mean. EIA's spark spread leaves out other costs such as pipeline charges, variable O&M, taxes and fixed costs, so it is an indicator of market conditions rather than an exact profit figure for one plant. [e7] Penn State's definition, by contrast, subtracts variable O&M along with fuel. [e32][e33] The SFU thesis says a spark spread may or may not include fixed or variable O&M depending on context, and separates a gross spread from a net spread that also deducts at least gas transportation and power transmission costs. [e2][e6] The Fields Institute toll payoff formula, which the slides do not call a spark spread, subtracts VOM (variable operation and maintenance) as well as heat rate times gas. [e8]

The sources also differ on which power price goes in. EIA's 2013 spark spread article says it is typically calculated from daily spot prices, its 2017 article uses day-ahead wholesale prices, and its 2013 dark spread article says spark spreads use on-peak power prices. [e1][e9][e36] Penn State uses the LMP, Deng et al. the current price, and the Fields toll formula the forward or spot price for a delivery bucket such as 5x16. [e32][e31][e8] Both Penn State and EIA's market reporting treat a negative spread as possible: Penn State's PJM example has negative and positive hours, and EIA's 2013 chart simply leaves negative values out. [e34][e28]

What matters is the relationship between the two prices, not their absolute level: the relative price of power and gas, and how efficiently the plant converts one into the other, determine whether generating on gas is favourable. [e10][e16] Spark spreads are volatile, mainly because wholesale power prices swing with demand and available supply. [e15][e19]

The same idea is applied to other fuels: the dark spread for coal and the quark spread for nuclear fuel. [e11] EIA defines the dark spread as the difference between the price a generator receives for electricity and the cost of the coal needed to produce it, calculated on spot or forward prices. [e35] It differs from the spark spread in its inputs: EIA says dark spreads often use a flat (on- plus off-peak) power price where spark spreads use on-peak, and its 2013 dark spread chart used MISO Minnesota Hub on- and off-peak prices, a 10,000 Btu/kWh coal heat rate rather than 7,000, and a transportation cost added to the prompt-month coal futures price. [e36][e41][e37][e38] EIA says the generic dark spread has similar limitations to the spark spread: it leaves out finance charges, variable O&M and taxes, and environmental costs unless they are added. [e39] Because fuels and plant efficiencies differ, spark and dark spreads are specific to a location and a market. [e12][e9]

The market-inferred (implied) heat rate is the same calculation turned around: the heat rate at which a plant would earn exactly zero spark spread. [e13] The IMM calculates its implied heat rate as power price divided by fuel price, the heat rate that equates revenue from selling electricity with the cost of buying gas. [e14]

## Formula

Spark spread ($/MWh) = power price ($/MWh) - [natural gas price ($/MMBtu) x heat rate (MMBtu/MWh)]. [e3][e4][e31]

- Units: the CFTC says the two prices are expressed in equivalent units; the heat rate is what converts $/MMBtu of gas into $/MWh of power. [e30][e3]
- Power price: the price received for electricity in the same period. EIA's 2013 article says it is typically calculated from daily spot prices at regional trading points, its 2013 dark spread article says spark spreads use on-peak power prices, and its 2017 article uses day-ahead prices; Penn State uses the LMP; the Fields toll formula a forward or spot price for a delivery bucket. [e1][e36][e9][e32][e8]
- Gas price: the cost of the fuel, which EIA describes as the delivered input price, adjusted for energy content. [e9][e1]
- Heat rate: the plant's conversion rate between gas and power, in MMBtu per MWh (7,000 Btu/kWh is 7.0 MMBtu/MWh: the knowledge base's own unit conversion, 1 MWh being 1,000 kWh). EIA assumes 7,000 Btu/kWh for a benchmark combined cycle; Penn State gives 10,000 as an example of the characteristics a financial-market definition fixes; for one unit, its tested heat rate is used. [e8][e5][e37][e32]
- Other costs: EIA's version subtracts nothing else. [e7] Penn State subtracts variable O&M ($2.50/MWh in its example), the Fields toll payoff (not labelled a spark spread there) subtracts VOM, and SFU's net version subtracts at least gas transportation and power transmission costs. [e32][e33][e8][e6]
## ERCOT context

ERCOT's own reference gas price, the Fuel Index Price (FIP), is the daily midpoint or average gas price at Katy Hub in $/MMBtu, so a spark spread built on ERCOT's own gas index uses Katy, not Henry Hub. [e25]

The IMM does not publish a spark spread in the reports saved here; it publishes the implied heat rate, which is the zero-spark-spread view of the same two prices. [e14][e13] For 2025 the IMM reported that the average implied heat rate was almost 28% lower than in 2024 and now in line with the marginal heat rate of ERCOT gas plants. [e23] Read with the definition above, a plant whose heat rate equals the implied heat rate would roughly break even on fuel at those prices; this is reasoning from the definitions, not an IMM statement, and an annual average implied heat rate says nothing about the spread in individual hours. [e13][e14]

In ERCOT, zero-cost wind and solar create hundreds of hours at or below $0 per MWh, where a gas plant's spark spread is negative, while shortage pricing creates hundreds of hours above gas plants' marginal cost, where their spreads are positive. [e24]

ERCOT metrics also differ on variable O&M. ERCOT's peaker net margin uses a protocol-specified 10.0 MMBtu per MWh heat rate and excludes variable O&M and outage rates, while the IMM's 2024 net revenue analysis assumed 7 MMBtu per MWh for a combined cycle, 10.5 for a gas turbine, and $4 per MWh of variable O&M. [e21][e22]

## Key facts

- EIA's benchmark heat rate for the spark spread is 7,000 Btu/kWh (a fairly new, efficient combined cycle); one kWh contains 3,412 Btu, so that unit is slightly below 50% efficient. [e5][e17]
- EIA's December 2025 article used 7,000 Btu/kWh for the spark spread and 10,500 Btu/kWh for the dark spread; its February 2013 dark spread article used a generic 10,000 Btu/kWh coal unit, slightly above 30% efficient. [e27][e37]
- Penn State's course text gives a 10,000 heat rate and $2.50/MWh variable O&M as an example ("like") of the generator characteristics a financial-market spark spread fixes, against EIA's 7,000 Btu/kWh with no O&M. [e32][e5][e7]
- EIA's 2013 dark spread article says dark spreads often use a flat (on- and off-peak) power price, unlike spark spreads, which it says are calculated on on-peak prices; its own dark spread chart used MISO Minnesota Hub on- and off-peak prices. [e36][e41]
- In PJM (not ERCOT), the January-November average spark spread rose from $21/MWh in 2023 to $28/MWh in 2025, according to EIA. [e26]
- EIA does not report spark spreads in its 2013 chart when they are negative. [e28]
- ERCOT's PNM uses a fixed 10.0 MMBtu per MWh heat rate and excludes variable O&M. [e21]
- The 2025 ERCOT average implied heat rate was the lowest annual average of the last five years. [e23]

## Example

Suppose (illustrative, made-up round numbers) the North Hub power price for an hour is $40/MWh and gas costs $3.00/MMBtu. At a 7.0 MMBtu/MWh heat rate the fuel cost is $21/MWh and the gross spark spread is $19/MWh. A 10.0 heat-rate peaker has a fuel cost of $30/MWh and a spark spread of $10/MWh. If you also subtract a made-up $4/MWh VOM, the combined cycle's net figure is $15/MWh. The implied heat rate for that hour is 40 / 3 = 13.3: any plant with a heat rate below 13.3 has a positive gross spread.

Penn State's own illustration: at $100/MWh power and $5/MMBtu fuel, a 10 MMBtu/MWh heat rate and $2.50/MWh variable O&M give a marginal cost of 10 x 5 + 2.50 = $52.50/MWh and a spark spread of $47.50/MWh. [e33]

Suppose (illustrative) you take Penn State's inputs ($100/MWh power, $5/MMBtu gas, 10 MMBtu/MWh) but EIA's convention, which leaves out variable O&M: the spread is 100 - 5 x 10 = $50/MWh instead of Penn State's $47.50/MWh. The $2.50 gap is the convention, not the market.

## Say it like this

(Guidance) "The spark spread is power price minus gas price times heat rate: the gross margin for turning gas into power. Tell me which heat rate and whether VOM and transport are in it, because people quote it differently."

## Common confusion

(Guidance) Spark spread is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

(Guidance) Spark spread versus implied heat rate: the spark spread is a $/MWh margin at a chosen heat rate; the implied heat rate is a ratio, the heat rate at which that margin would be zero. [e13][e14]

(Guidance) Spark spread versus profit: a gross spark spread leaves out other costs, so it signals market conditions rather than one plant's profit. [e7]

(Guidance) Spark spread versus dark spread: dark spread is the coal version, and in EIA's generic version it also uses a flat rather than on-peak power price, a higher heat rate and an added coal transport cost, so the two are not computed on the same basis. [e11][e36][e41][e37][e38]

(Guidance) Two spark spreads quoted for the same hour can differ only because of convention: heat rate (7,000 for EIA, 10,000 in Penn State's text) and whether variable O&M is deducted. [e5][e32][e7]

## Questions

### Why does the heat rate matter so much in a spark spread?

It converts the gas price into a fuel cost per MWh. A less efficient plant needs more fuel per MWh, so at the same prices it earns a smaller spark spread. [e3][e20] That is why someone marketing a unit uses its tested heat rate, while market observers use a benchmark such as EIA's 7,000 Btu/kWh. [e5]

### Does a spark spread include variable O&M?

It depends who is calculating. EIA's leaves it out; the SFU thesis says it may or may not be included; Penn State's definition subtracts it, and so does the Fields toll payoff formula (which the slides do not call a spark spread). [e7][e2][e32][e8] In ERCOT, the PNM calculation excludes variable O&M while the IMM's 2024 net revenue analysis included $4 per MWh. [e21][e22] Always state the convention.

### How is the spark spread related to the IMM's implied heat rate?

The implied heat rate is the heat rate at which the spark spread is zero, computed by dividing the power price by the gas price. [e13][e14] A high implied heat rate means even inefficient plants have positive spreads; a low one means only the most efficient are in the money. [e14]

### What if ERCOT has many hours of negative prices?

In those hours the spark spread of every gas plant is negative, because the power price is below any fuel cost. The IMM says these hours lower the implied heat rate, while shortage-priced hours raise it. [e24] So, reasoning from the IMM statement, a gas plant's positive spreads are concentrated in the higher-priced hours.

### Why are spark spreads more volatile than fuel prices alone?

EIA attributes it mainly to wholesale power prices, which vary widely with demand and available supply. [e15]

## Scenarios

### A client asks whether a 7.0 heat-rate combined cycle at North Hub made money in 2025. How do you start?

- Point out that the IMM's 2025 average implied heat rate was in line with the marginal heat rate of ERCOT gas plants, so on an average-price basis the spread for a typical gas unit was close to zero (this is reasoning from the IMM figure, not an IMM statement). [e23][e13]
- Note that the money is in the hours, not the average: zero-price hours give negative spreads and shortage hours give positive ones. [e24]
- Say which gas price you use (ERCOT's FIP is Katy Hub) and whether VOM and transport are deducted. [e25][e6][e7]

## Open items

- Not sourced (checked 2026-11-22, including the CFTC glossary and EIA's 2013 dark spread article): no saved source defines a "clean spark spread" or "clean dark spread". The nearest statement is EIA's note that environmental costs are "sometimes added" to a generic dark spread, which does not define a clean spread or say how carbon is costed.
- The Fields slides' toll formula takes the larger of the daily payoff and zero (an option, not a plain spread), but that formula survives in the text copy only as a garbled fragment that cannot be quoted cleanly; the topic therefore does not state the floor.
- Only EIA (tier 2, so it stands on its own) says spark spreads are calculated on on-peak prices; Penn State uses the LMP and Fields a delivery bucket, so whether "on-peak" is a general convention is not established.
- No saved tier 1-2 source publishes an ERCOT spark spread series; only the IMM implied heat rate is available.
- The SFU thesis and EIA 2017 article mention fuel transport and delivered prices; no saved source gives ERCOT-specific gas transport costs to a plant.
