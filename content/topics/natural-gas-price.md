---
id: natural-gas-price
name: Natural Gas Prices (Henry Hub)
aliases: [natural gas price, gas price, Henry Hub, Katy Hub, Fuel Index Price, FIP, Houston Ship Channel]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: heat-rate
    type: related
    note: One term of the Mitigated Offer Cap formula multiplies a generic incremental heat rate by the higher of the FIP or a weighted average fuel price. [e15]
  - to: implied-heat-rate
    type: measures
    note: The IMM calculates its implied heat rate by dividing the power price by the fuel price. [e16][e7]
  - to: waha-hub
    type: contrasts-with
    note: Waha traded below zero on 42% of trading days in 2024 because Permian production outpaced pipeline takeaway capacity, per EIA. [e24][e8]
  - to: spark-spread
    type: determines
    note: See that topic; it builds on the gas price as a fuel-cost input.
  - to: winter-storm-uri
    type: related
    note: Texas hub gas prices spiked to over $400/MMBtu during Uri, when Texas, Oklahoma and Louisiana gas production fell by about 21 Bcf/d. [e9][e36]
  - to: ffss
    type: used-in
    note: The FFSS rules use Henry Hub natural gas futures as the natural gas price index source. [e11]
  - to: peaker-net-margin
    type: used-in
    note: The daily peaking operating cost in the PNM is 10 times ERCOT's natural gas price index. [e44]
  - to: market-power-mitigation
    type: used-in
    note: A QSE can submit an Exceptional Fuel Cost for the Mitigated Offer Cap only if its fuel price exceeds the FIP plus $1/MMBtu plus the fuel adder. [e39]
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
  - id: e17
    source: eia-glossary-henry-hub
    locator: "EIA Glossary, Henry Hub"
    quote: "Henry Hub:  A pipeline hub on the Louisiana Gulf coast. It is the delivery point for the natural gas futures contract on the New York Mercantile Exchange (NYMEX)."
  - id: e18
    source: eia-gas-hubs
    locator: "EIA Today in Energy (October 23, 2024), South Central region, Henry Hub"
    quote: "Most natural gas at U.S. trading hubs is priced relative to Henry Hub, which is also an increasingly relevant benchmark for global liquefied natural gas (LNG) purchases, as U.S. exports increase and as Henry Hub price indexation is used to price deliveries at U.S. export terminals."
  - id: e19
    source: eia-gas-hubs
    locator: "EIA Today in Energy (October 23, 2024), introduction"
    quote: "Changes in prices at natural gas hubs tend to be reflected in movements in prices at nearby power market hubs or zones."
  - id: e20
    source: eia-gas-hubs
    locator: "EIA Today in Energy (October 23, 2024), South Central region, Waha"
    quote: "The Permian Basin produced 19% of total U.S. natural gas in 2023, with most coming from associated gas from crude oil wells. Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at other hubs, sometimes turning negative."
  - id: e22
    source: eia-gas-2025
    locator: "EIA Today in Energy (January 9, 2026), In 2025, U.S. natural gas spot prices increased from 2024's record low"
    quote: "In 2025, the wholesale U.S. natural gas spot price at the national benchmark Henry Hub in Louisiana averaged $3.52 per million British thermal units (MMBtu), based on data from LSEG Data. The 2025 average Henry Hub natural gas spot price increased 56% from the 2024 annual average, which—when adjusted for inflation—was the lowest on record. On a daily basis, the Henry Hub natural gas spot price ranged from $2.65/MMBtu to $9.86/MMBtu, reflecting a narrower range of daily prices compared with the previous year."
  - id: e23
    source: eia-gas-2025
    locator: "EIA Today in Energy (January 9, 2026), second paragraph"
    quote: "Natural gas prices tend to be higher in winter months, when colder winter temperatures lead to more demand for natural gas, both directly for space heating and indirectly because natural gas is also the most prevalent source of electricity generation in the United States."
  - id: e24
    source: eia-waha-2024
    locator: "EIA Today in Energy (February 3, 2025), Natural gas spot prices fell across key regional trading hubs in 2024"
    quote: "In West Texas, prices at the Waha Hub near Permian Basin production activities traded below zero for 42% of trading days in 2024 as natural gas production from the Permian Basin outpaced available pipeline takeaway capacity. The Matterhorn Express Pipeline, capable of carrying 2.5 billion cubic feet per day from the Permian Basin to demand centers on the Texas coast, entered service in October 2024 and helped clear some of the regional production bottleneck. Since mid-November the price at the Waha Hub has been more than zero."
  - id: e25
    source: eia-waha-2024
    locator: "EIA Today in Energy (February 3, 2025), last paragraph (prices adjusted to December 2024 CPI)"
    quote: "Spot natural gas prices at the Henry Hub in Erath, Louisiana, which serves as the U.S. benchmark, averaged $2.22/MMBtu in 2024, the lowest average annual price in inflation-adjusted dollars ever reported."
  - id: e26
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 3 ORDC Impact on Prices, footnote 16"
    quote: "16 The average Fuel Index Price (FIP) was $5.58/MMBtu in 2022, $2.21/MMBtu in 2023, and $1.82/MMBtu in 2024through September."
  - id: e27
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 3 ORDC Impact on Prices"
    quote: "Real-Time Hub Average prices have been lower in 2024 than in 2023: $27.37/MWh in 2024 compared to $52.48/MWh in 2023. This is due in part to the reduction in natural gas prices which are highly correlated with spot market prices."
  - id: e28
    source: imm-som-2025
    locator: "2025 State of the Market Report, Figure 2 labels, page 26 (OCR)"
    quote: "Natural Gas Price ($ per MMBtu) 2 $7.30 $5.84 $2.22 $1.90 $3.06"
  - id: e29
    source: imm-som-2025
    locator: "2025 State of the Market Report, Review of Real-Time Market Outcomes, 1. All-In Cost of Electricity, page 25 (OCR)"
    quote: "The all-in cost of electricity increased 13.8% from almost $34 per MWh in 2024 to $38 per MWh in 2025. This increase was driven primarily by the cost of energy, with no adders or uplift, and corresponded to a 61% increase in the average daily index price for natural gas. Gas and energy prices are expected to correlate in a well-functioning, competitive market because suppliers have an incentive to offer energy according to the marginal cost of generation."
  - id: e30
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary (p. i)"
    quote: "The ERCOT-wide load-weighted average balancing energy price was $39.40 per MWh in 2010 compared to $34.03 per MWh in 2009, a 16 percent increase. The natural gas price also increased 16 percent in 2010, averaging $4.34 per MMBtu in 2010 compared to $3.74 per MMBtu in 2009."
  - id: e31
    source: imm-som-2011
    locator: "2011 State of the Market Report, Executive Summary"
    quote: "The average price for natural gas was 9.2% lower in 2011 than in 2010, decreasing from $4.34 per MMBtu in 2010 to $3.94 per MMBtu in 2011."
  - id: e32
    source: imm-som-2020
    locator: "2020 State of the Market Report, Executive Summary, Market Outcomes and Performance"
    quote: "Average energy prices decreased by 45% to $25.73 per megawatt-hour (MWh). This change was due primarily to a nearly 20% drop in natural gas prices and fewer instances of supply shortages, which result in very high market prices."
  - id: e33
    source: imm-som-2021
    locator: "2021 State of the Market Report, Review of Real-Time Market Outcomes, real-time prices"
    quote: "In 2021, the average natural gas price was higher than any recent year. Combined with the extreme winter event, rising natural gas prices caused real-time energy prices to average just under $170 per MWh. Removing the period of Winter Storm Uri reveals an average real-time energy price of about $41 per MWh, which is consistent with the natural gas prices that prevailed in 2021."
  - id: e34
    source: imm-som-2022
    locator: "2022 State of the Market Report, Review of Real-Time Market Outcomes, real-time prices"
    quote: "Average real-time prices in 2022 were nearly triple the prices in 2020 ($25.73 per MWh) because of the increase in natural gas prices and the ORDC adjustments made in the beginning of 2022."
  - id: e35
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary"
    quote: "Average real-time prices fell to roughly $65 per megawatt hour (MWh) in 2023, a reduction of more than 13% from 2022. This is a much smaller decrease than one would expect given the 62% reduction in natural gas prices in 2023 (which averaged $2.22 per million British Thermal Units or MMBtu)."
  - id: e36
    source: ferc-nerc-uri
    locator: "FERC-NERC Staff Report on the February 2021 cold weather outages, Executive Summary"
    quote: "U.S. natural gas production in February 2021 experienced the largest monthly decline on record. 22 Between February 8 and 17, the total natural gas production in the U.S. Lower 48 fell by 28 percent. In the Event Area, Texas, Oklahoma, and Louisiana gas production at its lowest point of February 17 declined by an estimated 21 Bcf/d, exceeding a 50 percent decline when compared to average production in January 2021."
  - id: e37
    source: ferc-nerc-uri
    locator: "FERC-NERC Staff Report, Key Findings and Causes (Event Area: ERCOT, SPP and MISO South)"
    quote: "Natural gas fuel supply issues caused the majority, 87 percent, of the 31.4 percent of outages and derates due to fuel issues, and caused 27.3 percent of all outages, derates and failures to start during the Event."
  - id: e38
    source: ferc-nerc-uri
    locator: "FERC-NERC Staff Report, Imports of Natural Gas from Other Regions"
    quote: "As a result, natural gas demand in the Midcontinent hit a new single-day high of 11.9 Bcf/d on February 15, and Texas hit a record of 27.6 Bcf/d on the same day."
  - id: e39
    source: np-04
    locator: "Section 4.4.9.4.1(1)(f)(i), Exceptional Fuel Cost"
    quote: "During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as a volume-weighted average fuel price for use in the MOC calculation for that Resource. To qualify as Exceptional Fuel Cost, the submission must meet the following conditions: (i) For all Resources, the weighted average fuel price must exceed FIP for the applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder."
  - id: e40
    source: np-04
    locator: "Section 4.4.9.4.1, variable table (WAFP), current definition"
    quote: "Weighted Average Fuel Price—The volume-weighted average intraday, same-day and spot fuel price, the projected incremental fuel consistent with a fuel supply contract(s), or a combination of these two prices, submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day, as described in paragraph (1)(e) below."
  - id: e41
    source: np-04
    locator: "Section 4.4.9.4.1, variable table (WAFP), NPRR1279 box"
    quote: "[NPRR1279: Replace the definition above with the following on April 1, 2027:]"
  - id: e42
    source: np-04
    locator: "Section 4.4.9.4.1(1)(g)"
    quote: "ERCOT may notify the Independent Market Monitor (IMM) if a QSE submits an Exceptional Fuel Cost."
  - id: e43
    source: np-22k
    locator: "Section 22 Attachment K, Declaration of Natural Gas Pipeline Coordination (effective February 1, 2026), instructions"
    quote: "INSTRUCTIONS: Use this section for Generation Resources relying on natural gas as the primary fuel source. Repeat the following for each applicable Generation Resource."
  - id: e44
    source: puct-25-509
    locator: "16 TAC §25.509(b)(2)"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh)."
  - id: e45
    source: np-22k
    locator: "Section 22 Attachment K, Declaration of Natural Gas Pipeline Coordination (effective February 1, 2026), item (3)"
    quote: "If a natural gas pipeline operator responded to the Resource Entity's documented effort to coordinate and disclose activities or conditions materially increasing the risk of Generation Resource unavailability in the summer Peak Load Season, please disclose the following information:"
---

## Definition

For ERCOT market rules the reference natural gas price is the Fuel Index Price (FIP): the daily midpoint or average price of natural gas at the Katy Hub, in $/MMBtu. [e1] The national benchmark is Henry Hub, a pipeline hub on the Louisiana Gulf coast that is the delivery point for the NYMEX natural gas futures contract. [e17] EIA says most gas at U.S. trading hubs is priced relative to Henry Hub. [e18]

## How it works

Gas units are usually the marginal generators in ERCOT, so real-time power prices are driven mainly by gas prices and by shortage pricing. [e2] The IMM expects gas and energy prices to correlate in a competitive market because suppliers offer at marginal cost. [e29] ERCOT's 2024 ORDC report likewise attributed lower 2024 hub prices partly to lower gas prices, which it called highly correlated with spot power prices. [e27] EIA makes the same general point: price moves at gas hubs tend to show up at nearby power hubs. [e19]

That link is not one-for-one. In 2024 gas prices fell 14% but energy prices without adders fell almost 52%, which the IMM attributes to less artificial shortage pricing from ECRS deployment. [e4] In 2023 energy prices stayed about level with 2022 despite a 62% drop in gas prices, which the IMM calls a distortion from ECRS practices. [e10] In 2025 the gas price rose 61% while the all-in price of electricity rose less than 14%. [e5] The IMM gives two reasons: surplus supply meant expensive gas peakers set price less often, and high operating reserves meant little shortage pricing. [e6] More broadly, growing zero marginal cost wind and solar produces hundreds of hours at or below $0, weakening the gas-power link. [e7]

Gas prices also differ by location. The IMM uses Katy prices for Houston-zone gas units and Waha prices for West-zone units, and says Permian production and limited export capability have historically kept Waha prices low. [e8] EIA explains the mechanism: Permian production has grown faster than pipeline takeaway capacity, so Waha is typically below other hubs and sometimes negative. [e20] Waha traded below zero on 42% of trading days in 2024; the Matterhorn Express pipeline (2.5 Bcf/d to the Texas coast) entered service in October 2024, and Waha had been above zero since mid-November 2024 when EIA wrote in February 2025. [e24]

## Formula

Where the gas price enters ERCOT rules: [e15][e39][e44][e11]

- Mitigated Offer Cap: generic heat rate × the higher of the FIP and the resource's weighted average fuel price (WAFP), or the verifiable heat rate × a calculated fuel price plus O&M, whichever is greater. [e15] The current WAFP is the volume-weighted intraday, same-day and spot price, a projected incremental price under a fuel supply contract, or a combination, submitted during the Adjustment Period for a specific hour. [e40] NPRR1279 will replace that definition on April 1, 2027 (a pending change shown in a box in the Protocols). [e41]
- Exceptional Fuel Cost: to have its own fuel price used in the MOC, a QSE's weighted average fuel price must, as the first of several listed conditions, exceed the FIP plus a $1/MMBtu threshold plus the applicable fuel adder. [e39] ERCOT may notify the IMM when a QSE submits one. [e42]
- Peaker net margin: the daily peaking operating cost is 10 times ERCOT's natural gas price index, in $/MWh. [e44]
- FFSS: the natural gas price index source is Henry Hub November futures, published by July 15. [e11]

## ERCOT context

Natural gas is used to generate a large share of Texas electricity: 52% in February 2020 and as much as 61% of monthly generation during summer peaks, according to EIA. [e12][e13] Gas's share is smaller in winter because power demand is lower and heating demand for gas is higher. [e13] EIA notes that gas prices tend to be higher in winter for the same reason: heating demand plus gas's role as the most common U.S. generation fuel. [e23]

Winter is when gas and power risks combine. During Winter Storm Uri, Texas hub gas prices rose from normally much less than $10/MMBtu to over $400/MMBtu. [e9] U.S. gas production in February 2021 had its largest monthly decline on record; Texas, Oklahoma and Louisiana production fell by about 21 Bcf/d at the February 17 low, more than 50% below January's average. [e36] Texas gas demand hit a record 27.6 Bcf/d on February 15. [e38] Across the FERC-NERC event area (ERCOT, SPP and MISO South), natural gas fuel supply issues caused 27.3% of all generating unit outages, derates and failures to start. [e37] In 2021 the PUCT order noted that if the LCAP is calculated as 50 times the natural gas price index value, it may exceed the then-current $9,000 HCAP. [e14]

Gas supply risk is now part of weather emergency preparedness filings: as part of its submission under PUCT rule 25.55, each Resource Entity with Generation Resources subject to that rule that use natural gas as their primary fuel must submit a declaration of natural gas pipeline coordination, stating that it made a documented effort to coordinate with each directly connected pipeline operator about impacts on availability in the summer Peak Load Season. [e46][e43] Where a pipeline operator responded and disclosed activities or conditions materially increasing the risk of unavailability, the declaration asks for that information. [e45]

Henry Hub levels for context (EIA, national benchmark, not an ERCOT index): $2.22/MMBtu in 2024 (inflation-adjusted, the lowest annual average on record) and $3.52/MMBtu in 2025, up 56%, with daily prices from $2.65 to $9.86. [e25][e22]

## Timeline

Annual average gas price as reported in each IMM State of the Market report, with the IMM's account of its effect on ERCOT power prices: [e30][e3][e28]

- 2009-2010: gas averaged $3.74 in 2009 and $4.34 in 2010 (up 16%), and the load-weighted balancing energy price also rose 16%, from $34.03 to $39.40/MWh. [e30]
- 2011: $3.94, down 9.2% from 2010. [e31]
- 2020: $1.99; a nearly 20% drop in gas prices and fewer shortages cut average energy prices 45% to $25.73/MWh. [e3][e32]
- 2021: $7.30, the highest in recent years; real-time prices averaged just under $170/MWh with Uri, or about $41/MWh without it. [e3][e33]
- 2022: $5.84; real-time prices nearly tripled from 2020 because of higher gas prices and the ORDC changes. [e3][e34]
- 2023: $2.22, down 62%; real-time prices fell only a little more than 13%, to roughly $65/MWh, which the IMM attributes to ECRS. [e35][e10]
- 2024: $1.90, down 14%; energy prices without adders fell almost 52%. [e3][e4]
- 2025: $3.06, up 61%; the all-in price rose 13.8%, from almost $34 to $38/MWh. [e28][e29]

ERCOT's own figures for the average FIP: $5.58 in 2022, $2.21 in 2023 and $1.82 in 2024 through September. [e26]

## Key facts

- FIP = daily Katy Hub natural gas price in $/MMBtu. [e1]
- IMM annual gas price series: 2020 $1.99, 2021 $7.30, 2022 $5.84, 2023 $2.22, 2024 $1.90, 2025 $3.06 per MMBtu. [e3][e28]
- ERCOT average FIP: 2022 $5.58, 2023 $2.21, 2024 (January-September) $1.82. [e26]
- Henry Hub (EIA): 2024 $2.22 (inflation-adjusted), 2025 $3.52. [e25][e22]
- 2025: gas price up 61%, all-in power price up 13.8%. [e29]
- Uri, February 2021: Texas hub gas prices over $400/MMBtu; Texas gas demand record 27.6 Bcf/d on February 15. [e9][e38]
- Waha below zero on 42% of trading days in 2024 (EIA). [e24]
- Exceptional Fuel Cost threshold: FIP + $1/MMBtu + fuel adder. [e39]

## Example

(Illustrative) Suppose the FIP is $3.00/MMBtu and a gas unit's heat rate is 10 MMBtu/MWh: its fuel cost is about $30/MWh. If the FIP rises 61%, to about $4.83, the same unit's fuel cost rises to about $48/MWh. Whether the power price follows depends on how often that unit is marginal and how much shortage pricing occurs, which is what happened in 2025 when power rose far less than gas.

(Illustrative) Suppose the FIP is $3.00, a unit's fuel adder is $0.50 and it buys intraday gas at $4.20. The Exceptional Fuel Cost threshold is 3.00 + 1.00 + 0.50 = $4.50, so $4.20 would not qualify; at $5.00 it would clear the price threshold, though the other listed conditions still apply.

## Say it like this

(Guidance) Gas plants are typically the marginal generator in ERCOT, so gas prices are a main driver of power prices. But with lots of wind and solar, the IMM says the link has weakened, so a gas move does not translate one-for-one into power.

(Guidance) When someone says "gas price" in ERCOT, ask which one: Katy (the FIP in the rules), Henry Hub (the national futures benchmark, used for FFSS) or Waha (West Texas, often far below the others).

## Common confusion

(Guidance) ERCOT's Fuel Index Price is a Katy Hub price, not Henry Hub, although FFSS references Henry Hub futures. [e1][e11] West Texas gas units face Waha prices, which the IMM says have historically been low. [e8] A big percentage move in gas does not mean the same percentage move in power: in 2025 gas rose 61% and power less than 14%. [e5]

(Guidance) The IMM's annual gas figures and ERCOT's average FIP are close but not identical (2022: $5.84 vs $5.58), so name the series you quote. [e3][e26]

## Questions

### Why do ERCOT power prices track natural gas?

Because gas plants are typically the marginal generator; the IMM names gas prices and shortage pricing as the main drivers of real-time prices. [e2]

### Why did power prices rise much less than gas prices in 2025?

The IMM says surplus supply meant gas peakers set the price less often and high reserves meant little shortage pricing. [e6]

### Which gas price does ERCOT use in its rules?

The Fuel Index Price, which is a Katy Hub daily price. [e1] FFSS is an exception that uses Henry Hub November futures as its natural gas index source. [e11]

### What happened to gas prices during Uri?

They went from normally much less than $10/MMBtu to over $400/MMBtu at Texas trading hubs. [e9] Production in Texas, Oklahoma and Louisiana fell by about 21 Bcf/d at the low while Texas demand hit a record. [e36][e38]

### Why is Waha gas so often cheaper than Katy?

EIA says Permian production has grown faster than pipeline takeaway capacity, so Waha is typically below other hubs and sometimes negative; in 2024 it was below zero on 42% of trading days. [e20][e24] The IMM notes this gives West-zone gas units much higher net revenues. [e8]

### What if a unit's actual fuel cost is far above the FIP on a cold day?

It can submit an Exceptional Fuel Cost for the Mitigated Offer Cap; the first of the listed conditions is that its weighted average fuel price must exceed the FIP plus $1/MMBtu plus its fuel adder. [e39] ERCOT may tell the IMM about the submission. [e42]

### Why did 2023 power prices not fall with gas?

Gas fell 62% but real-time prices fell only a little more than 13%; the IMM blames the pricing effects of ECRS procurement and deployment. [e35][e10]

## Scenarios

### Gas jumps 50% overnight. What happens to your ERCOT power position?

- Expect upward pressure on hours where gas units are marginal, since real-time prices are driven mainly by gas. [e2]
- Expect less effect in hours set by zero-cost renewables or with ample reserves; in 2025 a 61% gas increase came with less than a 14% power increase. [e5][e7]
- If the position is in the West, check Waha rather than Katy. [e8]

### A cold front is forecast for next week. What gas signals matter?

- Winter heating demand pushes gas prices up, per EIA. [e23]
- In Uri, falling production and record Texas demand drove hub prices above $400/MMBtu and fuel supply problems caused over a quarter of event-area generation outages. [e9][e36][e37]

## Open items

- The IMM's annual gas series is described as the "average daily index price for natural gas" in the 2025 report, but the hub and averaging method are not stated, and its values differ from ERCOT's reported average FIP (for example 2022: $5.84 vs $5.58).
- The IMM 2024 annual gas price series ($1.99 to $1.90) is read from figure labels; the 14% and 62% declines stated in the text match this mapping.
- Waha and Katy price levels, and the size of the Waha-Katy spread, are not given as numbers in the sources.
- The replacement WAFP definition under NPRR1279 (April 1, 2027) appears to drop the projected contract-price option; the full effect on Exceptional Fuel Cost is not analysed here.
- No saved source gives Henry Hub annual levels before 2024 or Katy daily price history.
