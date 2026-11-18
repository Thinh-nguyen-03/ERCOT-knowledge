---
id: natural-gas-price
name: Natural Gas Prices (Henry Hub)
aliases: [natural gas price, gas price, Henry Hub, Katy Hub, Fuel Index Price, FIP]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: heat-rate
    type: related
    note: The Mitigated Offer Cap formula multiplies a generic incremental heat rate by the higher of the FIP or a weighted average fuel price. [e15]
  - to: implied-heat-rate
    type: measures
    note: The IMM calculates its implied heat rate by dividing the power price by the fuel price. [e16][e7]
  - to: waha-hub
    type: contrasts-with
    note: The IMM says Permian production and limited export capability have historically kept Waha gas prices low relative to Katy. [e8]
  - to: spark-spread
    type: determines
    note: See that topic; it builds on the gas price as a fuel-cost input.
  - to: winter-storm-uri
    type: related
    note: Texas hub gas prices spiked to over $400/MMBtu during Uri, per the UT report. [e9]
  - to: ffss
    type: used-in
    note: The FFSS rules use Henry Hub natural gas futures as the natural gas price index source. [e11]
  - to: resource-mix
    type: affects
    note: EIA reports natural gas generated a large share of Texas electricity (52% in February 2020). [e12]
  - to: offer-cap
    type: affects
    note: In 2021 the LCAP formula was tied to the gas index, so very high gas prices could have pushed it above the HCAP. [e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e2
    source: imm-som-2024
    locator: "Executive Summary, Real-Time Energy Prices"
    quote: "Real-time prices are primarily driven by natural gas prices, because natural gas power plants are typically the marginal generator, and by shortage pricing."
  - id: e3
    source: imm-som-2024
    locator: "Figure 7: Monthly and Annual Implied Heat Rates, 2020-2024 (figure labels)"
    quote: "2020 2021 2022 2023 2024 Natural Gas Price ($/MMBtu) $1.99 $7.30 $5.84 $2.22 $1.90"
  - id: e4
    source: imm-som-2024
    locator: "Executive Summary, Real-Time Energy Prices"
    quote: "Natural gas prices declined 14% from 2023 to 2024, but the price of energy excluding price adders dropped by almost 52%. The reason for this discrepancy is that there was less artificial shortage pricing caused by ERCOT's ECRS deployment practices in 2024 than in 2023."
  - id: e5
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "In 2025, the price of natural gas increased by 61%, but the all-in price of electricity increased by less than 14%. This disparity reflects the supply-and-demand fundamentals in ERCOT."
  - id: e6
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The surplus of supply in ERCOT put downward pressure on electricity prices relative to gas prices in two ways. First, expensive gas peaking resources are needed less often, so the price of electricity was frequently set by lowercost resources. Second, the high level of operating reserves directly resulted in a low frequency of shortage pricing."
  - id: e7
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "Over time, however, some factors have weakened the link between natural gas and electricity prices. The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market's implied heat rate."
  - id: e8
    source: imm-som-2025
    locator: "Resource Adequacy chapter, 2. Net Revenue by Location"
    quote: "Because natural gas prices can vary widely by location, the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices). Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area."
  - id: e9
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "According to PUCT data, natural gas prices, normally much less than $10/MMBTU, spiked to over $400/MMBTU at Texas trading hubs."
  - id: e10
    source: imm-som-2024
    locator: "Review of Real-Time Market Outcomes, all-in cost discussion"
    quote: "However, the fact that energy prices remained at approximately the same level in 2023 as in 2022 despite a 62% drop in gas prices indicated that the real-time market was distorted in 2023 as the result of ECRS procurement and deployment practices."
  - id: e11
    source: np-03
    locator: "Section 3.14.5, Firm Fuel Supply Service, paragraph (12)(b)"
    quote: "(b) Natural gas price index source(s): Henry Hub Natural Gas Futures for November, or equivalent, published by July 15 of the current year."
  - id: e12
    source: eia-tx-gas-2021
    locator: "Today in Energy, March 12, 2021"
    quote: "Because natural gas is used to generate a large share of the electricity in Texas (52% in February 2020, according to the U.S. Energy Information Administration's (EIA) Electricity Data Browser), a drop in natural gas-fired generation during the cold weather event significantly affected total electricity generation."
  - id: e13
    source: eia-tx-gas-2021
    locator: "Today in Energy, March 12, 2021"
    quote: "Natural gas has generated as much as 61% of Texas's monthly net electricity generation during peak summer electricity demand. Natural gas accounts for a smaller share of the state's electricity generation during the winter because total electricity demand is lower and demand for natural gas for heating is higher."
  - id: e15
    source: np-04
    locator: "Section 4.4.9.4.1(1), Mitigated Offer Cap formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e16
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas."
  - id: e14
    source: ut-uri-timeline
    locator: "Section 3.3.1, quoting the PUCT order in Project/Docket No. 51617"
    quote: "Due to exceptionally high natural gas prices at this time, if the LCAP is calculated as \"50 times the natural gas price index value,\" it may exceed the high system-wide offer cap (HCAP) of $9,000 per MWh and $9,000 per MW per hour."
---

## Definition

For ERCOT market rules the reference natural gas price is the Fuel Index Price (FIP): the daily midpoint or average price of natural gas at the Katy Hub, in $/MMBtu. [e1] The IMM's annual gas price series, which it compares with power prices, ran from $1.99/MMBtu in 2020 to $7.30 in 2021, $5.84 in 2022, $2.22 in 2023 and $1.90 in 2024. [e3]

## How it works

Gas units are usually the marginal generators in ERCOT, so real-time power prices are driven mainly by gas prices and by shortage pricing. [e2] That link is not one-for-one. In 2024 gas prices fell 14% but energy prices without adders fell almost 52%, which the IMM attributes to less artificial shortage pricing from ECRS deployment. [e4] In 2023 energy prices stayed about level with 2022 despite a 62% drop in gas prices, which the IMM calls a distortion from ECRS practices. [e10]

In 2025 the gas price rose 61% while the all-in price of electricity rose less than 14%. [e5] The IMM gives two reasons: surplus supply meant expensive gas peakers set price less often, and high operating reserves meant little shortage pricing. [e6] More broadly, growing zero marginal cost wind and solar produces hundreds of hours at or below $0, weakening the gas-power link. [e7]

Gas prices also differ by location. The IMM uses Katy prices for Houston-zone gas units and Waha prices for West-zone units, and says Permian production and limited export capability have historically kept Waha prices low. [e8]

## ERCOT context

Natural gas is used to generate a large share of Texas electricity: 52% in February 2020 and as much as 61% of monthly generation during summer peaks, according to EIA. [e12][e13] Gas's share is smaller in winter because power demand is lower and heating demand for gas is higher. [e13]

Winter is when gas and power risks combine. During Winter Storm Uri, Texas hub gas prices rose from normally much less than $10/MMBtu to over $400/MMBtu. [e9] In 2021 the PUCT order noted that if the LCAP is calculated as 50 times the natural gas price index value, it may exceed the then-current $9,000 HCAP. [e14]

Henry Hub appears in the Protocols as the natural gas price index source for FFSS: Henry Hub natural gas futures for November, published by July 15. [e11]

## Key facts

- FIP = daily Katy Hub natural gas price in $/MMBtu. [e1]
- IMM annual gas price series: 2020 $1.99, 2021 $7.30, 2022 $5.84, 2023 $2.22, 2024 $1.90 per MMBtu. [e3]
- 2024: gas prices down 14%, energy prices without adders down almost 52%. [e4]
- 2025: gas price up 61%, all-in power price up less than 14%. [e5]
- Uri, February 2021: Texas hub gas prices over $400/MMBtu. [e9]
- FFSS uses Henry Hub November futures as its natural gas price index source. [e11]

## Example

(Illustrative) Suppose the FIP is $3.00/MMBtu and a gas unit's heat rate is 10 MMBtu/MWh: its fuel cost is about $30/MWh. If the FIP rises 61%, to about $4.83, the same unit's fuel cost rises to about $48/MWh. Whether the power price follows depends on how often that unit is marginal and how much shortage pricing occurs, which is what happened in 2025 when power rose far less than gas.

## Say it like this

(Guidance) Gas plants are typically the marginal generator in ERCOT, so gas prices are a main driver of power prices. But with lots of wind and solar, the IMM says the link has weakened, so a gas move does not translate one-for-one into power.

## Common confusion

(Guidance) ERCOT's Fuel Index Price is a Katy Hub price, not Henry Hub, although FFSS references Henry Hub futures. [e1][e11] West Texas gas units face Waha prices, which the IMM says have historically been low. [e8] A big percentage move in gas does not mean the same percentage move in power: in 2025 gas rose 61% and power less than 14%. [e5]

## Questions

### Why do ERCOT power prices track natural gas?

Because gas plants are typically the marginal generator; the IMM names gas prices and shortage pricing as the main drivers of real-time prices. [e2]

### Why did power prices rise much less than gas prices in 2025?

The IMM says surplus supply meant gas peakers set the price less often and high reserves meant little shortage pricing. [e6]

### Which gas price does ERCOT use in its rules?

The Fuel Index Price, which is a Katy Hub daily price. [e1] FFSS is an exception that uses Henry Hub November futures as its natural gas index source. [e11]

### What happened to gas prices during Uri?

They went from normally much less than $10/MMBtu to over $400/MMBtu at Texas trading hubs. [e9]

## Scenarios

### Gas jumps 50% overnight. What happens to your ERCOT power position?

- Expect upward pressure on hours where gas units are marginal, since real-time prices are driven mainly by gas. [e2]
- Expect less effect in hours set by zero-cost renewables or with ample reserves; in 2025 a 61% gas increase came with less than a 14% power increase. [e5][e7]
- If the position is in the West, check Waha rather than Katy. [e8]

## Open items

- The topic is named for Henry Hub, but no saved source gives Henry Hub price levels; the only Henry Hub reference found is the FFSS price index source in np-03.
- The IMM 2024 annual gas price series ($1.99 to $1.90) is read from figure labels; the extracted text lists years and values in order, and the 14% (2023 to 2024) and 62% (2022 to 2023) declines stated in the text match this mapping, but which hub or index the IMM series uses is not stated.
- The IMM 2025 report gives the 61% increase but no 2025 dollar level in quotable text.
- Waha and Katy price levels, and the size of the Waha-Katy spread, are not given as numbers in the sources.
