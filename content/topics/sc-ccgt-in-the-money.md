---
id: sc-ccgt-in-the-money
name: "Scenario: Is the CCGT In the Money?"
aliases: [CCGT in the money, combined cycle dispatch economics, spark spread scenario, gas plant economics]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: heat-rate
    type: used-in
    note: Heat rate converts the gas price into a fuel cost per MWh. [e1]
  - to: natural-gas-price
    type: used-in
    note: The gas price is the largest part of a gas unit's marginal cost. [e8]
  - to: implied-heat-rate
    type: related
    note: The implied heat rate is power price divided by fuel price, the market-side half of the comparison. [e3]
  - to: spark-spread
    type: related
    note: The scenario is a spark-spread test, although the sources give no formal spark-spread formula.
  - to: three-part-supply-offer
    type: related
    note: Three-part offers let a thermal unit include start-up and minimum generation costs in the day-ahead market. [e11]
  - to: market-power-mitigation
    type: related
    note: ERCOT's mitigated offer cap uses heat rate times fuel price plus O&M as a cost reference. [e9]
  - to: waha-hub
    type: affects
    note: Cheap Waha gas has given West gas units much higher net revenues than Houston units. [e12]
  - to: rtc-b
    type: affects
    note: Under RTC a unit's capacity can earn from energy or reserves in the same interval. [e14]
evidence:
  - id: e1
    source: eia-faq-heat-rate
    locator: "FAQ: What is the efficiency of different types of power plants?"
    quote: "The heat rate is the amount of energy used by an electrical generator or power plant to generate one kilowatthour (kWh) of electricity. We express heat rates in British thermal units (Btu) per net kWh generated."
  - id: e2
    source: imm-som-2024
    locator: "Resource Adequacy chapter, footnote 48 (net revenue assumptions)"
    quote: "For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs."
  - id: e3
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e5
    source: imm-som-2025
    locator: "page 26 (OCR), Figure 2 labels, natural gas price by year 2021-2025"
    quote: "$7.30 $5.84 $2.22 $1.90 $3.06"
  - id: e6
    source: imm-som-2025
    locator: "Executive Summary, Real-Time Market Outcomes bullets"
    quote: "The West Zone continued to have the highest average energy price in 2025, excluding adders, at $41.59 per MWh, compared to the ERCOT average of $36.94 per MWh."
  - id: e7
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "The average implied heat rate for 2025 was almost 28% lower than in 2024 and was the lowest annual average of the last five years. This value is now in line with the marginal heat rate of natural gas power plants in the ERCOT market."
  - id: e8
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 1. Real-Time Market Prices"
    quote: "Fuel costs represent the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT."
  - id: e9
    source: np-04
    locator: "Section 4.4.9.4.1(1), Mitigated Offer Cap formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e10
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (OM)"
    quote: "Variable Operations and Maintenance Cost above LSL—The O&M cost for Resource r to operate above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process."
  - id: e11
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load. Thermal resources not awarded through threepart offers risk not recovering their start-up and minimum generation costs."
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy chapter, 2. Net Revenue by Location"
    quote: "Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, CONE vs Net Revenue"
    quote: "We calculate energy net revenues using generation-weighted real-time settlement point prices, assuming each unit sells energy or ancillary services in any hour when it is profitable to do so. Net revenues for a CT were $52.59 per kW-year and $82.96 per kW-year for a CC generator."
  - id: e14
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, introduction (p. A-2)"
    quote: "Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them."
  - id: e15
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e16
    source: imm-som-2025
    locator: "Resource Adequacy chapter, CONE vs Net Revenue"
    quote: "Comparing 2025 net revenues with the planning CONE of $140 per kW-year, set by the PUCT, shows that 2025 net revenues were not high enough to incentivize new investment."
---

## Definition

This scenario asks whether a gas combined-cycle unit earns more from selling power than it pays for fuel and running costs at current prices, which the IMM frames with the implied heat rate: power price divided by fuel price, where a low value means "only the most efficient generators are in the money". [e3]

## How it works

Fuel is the main cost. Fuel is the largest part of marginal cost for most generators, and gas is ERCOT's most-used fuel. [e8] The heat rate is the energy a plant uses to make one kWh, stated in Btu per net kWh. [e1] In its net revenue work the IMM has assumed 7 MMBtu/MWh for a combined cycle, 10.5 MMBtu/MWh for a gas turbine and $4/MWh of variable O&M. [e2]

ERCOT itself builds a cost reference the same way. The mitigated offer cap takes the larger of a generic heat rate times the fuel index, or the unit's verifiable heat rate times its fuel price plus O&M. [e9] That O&M term covers variable costs above LSL and includes an emissions cost adjustment. [e10] The Fuel Index Price is the daily Katy Hub gas price. [e4]

Then compare with the market. The implied heat rate divides the power price by the fuel price. If it is above the unit's own heat rate, the unit covers its fuel cost. [e3] Zero-cost renewables pull the implied heat rate down for hundreds of hours a year, and shortage pricing pushes it up for hundreds of hours. [e15]

Hourly margin is not the whole answer. Thermal units that do not clear a three-part offer day-ahead risk not recovering start-up and minimum generation costs. [e11] Under RTC, the real-time market also trades a unit's capacity between energy and reserves. [e14]

## Key facts

- IMM net revenue assumptions: 7 MMBtu/MWh for a combined cycle, 10.5 for a gas turbine, $4/MWh variable O&M. [e2]
- Natural gas price in the IMM's figure: $7.30 (2021), $5.84 (2022), $2.22 (2023), $1.90 (2024), $3.06 (2025) per MMBtu. [e5]
- 2025 ERCOT average real-time energy price, excluding adders: $36.94/MWh. [e6]
- The 2025 implied heat rate was almost 28% below 2024 and in line with the marginal heat rate of ERCOT gas plants. [e7]
- 2025 net revenue was $82.96/kW-year for a combined cycle and $52.59/kW-year for a combustion turbine, below the $140/kW-year planning CONE. [e13][e16]

## Scenarios

### Katy gas is $3.00/MMBtu and North Hub is trading at $30/MWh off-peak and $55/MWh in the evening peak. Is a 7.0 heat-rate CCGT in the money?

- Start with fuel cost. Heat rate times gas price gives fuel cost per MWh, and fuel is the biggest part of a gas unit's marginal cost. [e1][e8]
- Suppose (illustrative): 7.0 MMBtu/MWh × $3.00/MMBtu = $21/MWh of fuel. Add the IMM's $4/MWh of variable O&M and marginal cost is about $25/MWh. [e2]
- Suppose (illustrative): at $30/MWh off-peak the margin is about $5/MWh; at $55/MWh in the evening it is about $30/MWh.
- Cross-check with the implied heat rate: $30 ÷ $3.00 = 10 and $55 ÷ $3.00 is about 18, both above 7.0, so the unit covers fuel in both blocks (illustrative). [e3]
- (Reasoning) The thin off-peak margin can disappear once start-up and minimum generation costs are counted, so ask whether the unit must run through the night to be online for the evening peak.
- Thermal units that do not clear a three-part offer day-ahead take that start-up and min-gen risk themselves. [e11]
- Midday solar can push prices to or below zero for many hours, which cuts into run-hours; shortage hours can add upside. [e15]
- Location matters: units burning cheap Waha gas in the West have earned much higher net revenues than Houston units on Katy gas. [e12]
- Under RTC the unit can also be paid to hold reserves, so compare energy margin with the reserve price before deciding how to offer. [e14]

## Questions

### Which gas price should you use?

ERCOT's Fuel Index Price is the Katy Hub price. [e4] (Guidance) Use the price the plant actually pays for gas, which for a West unit may track Waha instead. [e12]

### Is the plant worth building if it is in the money most days?

Not necessarily. In 2025 a combined cycle earned about $82.96/kW-year, below the $140/kW-year planning CONE. [e13][e16]

### How does ERCOT estimate a gas unit's marginal cost for mitigation?

The mitigated offer cap uses the larger of a generic heat rate times the fuel index or the unit's verifiable heat rate times its fuel price plus O&M. [e9][e10]

## Say it like this

(Guidance) Multiply the heat rate by the gas price, add variable O&M, and compare that with the power price for the hours the unit would run. If power divided by gas is above the plant's heat rate, it covers fuel, but start-up and minimum run costs decide whether a thin margin is really worth running for.

## Common confusion

(Guidance) The implied heat rate is a market number, while the plant heat rate is an engineering number; the plant is in the money when the first is above the second. [e3] Also, being in the money in hours is not the same as earning enough to cover fixed costs. [e16]

## Open items

- The sources do not give a formal "spark spread" definition or formula; the arithmetic here is built from heat rate, the IMM's O&M assumption and the implied heat rate.
- No source gives typical start-up costs or minimum run times for ERCOT combined cycles.
- The sources do not give a 2026 average gas price or 2026 implied heat rate.
- Deeper pass: emissions costs and how they enter the verifiable O&M term.
