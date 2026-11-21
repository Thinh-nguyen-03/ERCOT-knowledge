---
id: sc-ccgt-in-the-money
name: "Scenario: Is the CCGT In the Money?"
aliases: [CCGT in the money, combined cycle dispatch economics, spark spread scenario, gas plant economics]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: heat-rate
    type: used-in
    note: Heat rate is the energy a plant uses to generate one kWh, expressed in Btu per net kWh. [e1]
  - to: natural-gas-price
    type: used-in
    note: Fuel costs are the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT. [e8]
  - to: implied-heat-rate
    type: related
    note: The implied heat rate is power price divided by fuel price, the market-side half of the comparison. [e3]
  - to: spark-spread
    type: related
    note: EIA defines the spark spread as power price minus gas price times heat rate, the core test in this scenario. [e29]
  - to: dam
    type: related
    note: A DAM-committed Resource on a cleared Three-Part Supply Offer is guaranteed DAM payment at least equal to its capped startup, minimum-energy and energy costs. [e27]
  - to: resource-adequacy
    type: related
    note: The IMM's 2025 CC net revenue of $82.96/kW-year was below the $140/kW-year planning CONE. [e13][e16]
  - to: three-part-supply-offer
    type: related
    note: Thermal resources not awarded through three-part offers risk not recovering start-up and minimum generation costs. [e11]
  - to: market-power-mitigation
    type: related
    note: ERCOT's mitigated offer cap formula uses heat rates times fuel prices, plus O&M in one branch, as a cost reference. [e9]
  - to: waha-hub
    type: affects
    note: Low gas prices at Waha have given gas resources in the Permian area much higher net revenues. [e12]
  - to: rtc-b
    type: affects
    note: Co-optimization can simultaneously schedule energy and operating reserves and make economic trade-offs among them. [e14]
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
    quote: "Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market."
  - id: e15
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e16
    source: imm-som-2025
    locator: "Resource Adequacy chapter, CONE vs Net Revenue"
    quote: "Comparing 2025 net revenues with the planning CONE of $140 per kW-year, set by the PUCT, shows that 2025 net revenues were not high enough to incentivize new investment."
  - id: e17
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (GIHR)"
    quote: "Generic Incremental Heat Rate—The generic, single-value, incremental heat rate."
  - id: e18
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (IHR)"
    quote: "Verifiable Incremental Heat Rate per Resource—The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process."
  - id: e19
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (FPRC)"
    quote: "Fuel Price Calculated per Resource—The calculated index price for fuel for the Resource based on the Resources fuel mix."
  - id: e20
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 2.6(1), Additional Rules for Submitting Emission Costs"
    quote: "Verifiable cost data may include the cost of purchasing emission credits but only to the extent necessary to meet environmental regulations associated with the operation of the specific Resource. ERCOT will not approve emission costs of any type unless they are sufficiently documented."
  - id: e21
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 2.6(1)(b)-(c)"
    quote: "Emission costs incurred while operating the Resource at the Minimum-Energy level or above Low Sustained Limit (LSL) are calculated on a $/MWh basis. ERCOT will calculate Verifiable emission costs ($/MWh) at LSL by using Equation 5 described in Section 14, Appendices, Appendix 5. (c) Resources may include the cost of NOx, and SO2 emissions requirements as part of the verifiable cost for:"
  - id: e22
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 2.6(1)(g) (current text; a pending VCMRR042 box would make it daily)"
    quote: "On a monthly basis, ERCOT will recalculate each Resource’s emission costs for SO2 and NOx utilizing the emission prices taken from the indices described in paragraph (1)(e) above. The new emission costs will replace the emission costs in the previously approved Operations & Maintenance (O&M) Verifiable Costs totals."
  - id: e23
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 5.1 Submitting Data for Mitigated Offers, item (a) Variable O&M"
    quote: "Variable O&M: For purposes of calculating Mitigated Offer Caps, Variable O&M costs are limited to the incremental O&M costs a Resource incurs while operating above LSL. Variable O&M costs will only be verified if both the type of cost and its method of calculation are permissible under Section 9, Operating and Maintenance Cost Guidelines, of this document. Submitted data is to be in terms of dollars per Megawatt-hour ($/MWh) and must be a single average value for the entire range (LSL to HSL) of the IHR Curve submitted. Emission costs may be included as an additional component of the Variable O&M cost."
  - id: e24
    source: np-04
    locator: "Section 4.4.9.2.3(1), Startup Offer and Minimum-Energy Offer Generic Caps, table row"
    quote: "Combined Cycle Generation Resource with a combustion turbine ≥ 90 MW, as determined by the largest combustion turbine in the Combined Cycle Generation Resource and for each combustion turbine in the Combined Cycle Generation Resource 6,810"
  - id: e25
    source: np-04
    locator: "Section 4.4.9.2.3(2)(c), Resource Category Minimum-Energy Generic Cap"
    quote: "(c) Combined-cycle greater than 90 MW = 8 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in Minimum-Energy Offer;"
  - id: e26
    source: np-04
    locator: "Section 4.4.9.2.1(4), Startup Offer and Minimum-Energy Offer Criteria"
    quote: "The Resource’s Startup Offer must not be greater than 200% of the Resource Category Generic Startup Cost for that type of Resource listed in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps, unless ERCOT has approved verifiable Resource-specific startup costs for that Resource, under Section 4.4.9.2.4, Verifiable Startup Offer and Minimum-Energy Offer Caps, in which case the Resource’s Startup Offer must not be greater than 200% of those approved verifiable Resource-specific Startup Costs."
  - id: e27
    source: np-04
    locator: "Section 4.6.2.3(4), Day-Ahead Make-Whole Settlements"
    quote: "The Day-Ahead Make-Whole Payment guarantees the QSE that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost calculated based on the Startup Cap, the Minimum Energy Cap, and the Energy Offer Curve capped by the Energy Offer Curve Cap defined under Section 4.4.9.3.3, Energy Offer Curve Cost Caps."
  - id: e28
    source: imm-som-2024
    locator: "Resource Adequacy chapter, footnote 48 (net revenue assumptions)"
    quote: "A total outage rate (planned and forced) of 10% was assumed for each technology. It does not include: 1) start-up and minimum energy costs; or 2) ramping restrictions that can prevent generators from profiting during brief price spikes."
  - id: e29
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), spark spread equation"
    quote: "Spark spread ($/MWh) = power price ($/MWh) – [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)]"
  - id: e30
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), paragraph after the spark spread equation"
    quote: "Those marketing the output of a unit will use the unit's tested heat rate to assess its profitability. Market participants and observers rely on a generic benchmark to assess overall market conditions. EIA's new daily price table shows the spark spread using a benchmark heat rate of 7,000 Btu/kilowatthour (kWh), which represents a fairly new and efficient natural gas combined-cycle generator."
  - id: e31
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy (2013), final paragraph"
    quote: "A limitation of the spark spread calculation is that it does not take into consideration other costs associated with the generation of electricity, such as pipeline costs or fuel-related finance charges, and other variable costs (like operations and maintenance costs), taxes, or fixed expenses. In that sense, a spark spread is an indicator of market conditions, but it is not necessarily an exact measure of profitability for any one specific generator."
  - id: e32
    source: eia-faq-heat-rate
    locator: "EIA FAQ, What is the efficiency of different types of power plants?"
    quote: "To express the efficiency of a generator or power plant as a percentage, divide the equivalent Btu content of a kWh of electricity (3,412 Btu) by the heat rate."
  - id: e33
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 2.1(1), Generally Applicable Rules"
    quote: "The use of Verifiable Costs, rather than generic amounts capped according to Resource Category, is optional for a Qualified Scheduling Entity (QSE) that does not receive Reliability Unit Commitment (RUC) instructions for a Resource."
---


## Definition

This scenario asks whether a gas combined-cycle unit earns more from selling power than it pays for fuel and running costs at current prices. EIA's spark spread (power price minus gas price times heat rate) is the unit-level test [e29], and the IMM's implied heat rate (power price divided by fuel price) is the market-level measure: a low value indicates a market where "only the most efficient generators are in the money". [e3]

## How it works

Fuel is the main cost. Fuel is the largest part of marginal cost for most generators, and gas is ERCOT's most-used fuel. [e8] The heat rate is the energy a plant uses to make one kWh, stated in Btu per net kWh. [e1] Efficiency in percent is 3,412 Btu divided by the heat rate. [e32] EIA's benchmark is 7,000 Btu/kWh, which it describes as a fairly new and efficient combined cycle, while those marketing a unit use its tested heat rate. [e30] In its 2024 report's net revenue work the IMM assumed 7 MMBtu/MWh for a combined cycle, 10.5 MMBtu/MWh for a gas turbine and $4/MWh of variable O&M. [e2] It also assumed a 10% total outage rate and left out start-up and minimum-energy costs and ramping limits. [e28]

ERCOT itself builds a cost reference the same way. The mitigated offer cap takes the larger of a generic incremental heat rate times the higher of the fuel index and a resource fuel price, or the unit's verifiable incremental heat rate times its calculated fuel price plus O&M. [e9][e17][e18][e19] That O&M term covers variable costs above LSL and includes an emissions cost adjustment. [e10] The Fuel Index Price is the daily Katy Hub gas price. [e4] Verifiable costs are optional for a QSE unless it receives RUC instructions for the Resource; otherwise generic caps by Resource Category apply. [e33]

Emissions enter as a documented O&M add-on. Under the Verifiable Cost Manual, variable O&M for the MOC is limited to incremental O&M above LSL, submitted as one average $/MWh across the heat rate curve, and emission costs may be included as an additional component. [e23] Emission credit costs count only to the extent needed to meet environmental regulations for that Resource, and only if documented. [e20] Emission costs at or above LSL are calculated in $/MWh, and NOx and SO2 costs may be included. [e21] ERCOT recalculates SO2 and NOx costs monthly from index prices and replaces the emission part of approved O&M (a pending VCMRR042 box would make this daily). [e22]

Then compare with the market. The implied heat rate divides the power price by the fuel price. If it is above the unit's own heat rate, the unit covers its fuel cost. [e3] Zero-cost renewables pull the implied heat rate down for hundreds of hours a year, and shortage pricing pushes it up for hundreds of hours. [e15]

Hourly margin is not the whole answer. Thermal units that do not clear a three-part offer day-ahead risk not recovering start-up and minimum generation costs. [e11] A unit DAM-committed on a cleared Three-Part Supply Offer is guaranteed DAM payment at least equal to its capped startup, minimum-energy and energy costs. [e27] The generic startup cap for a combined cycle with a combustion turbine of 90 MW or more is built from $6,810 of O&M, applied for each combustion turbine in the Resource [e24], its generic minimum-energy cap uses 8 MMBtu/MWh times the fuel price [e25], and a startup offer may not exceed 200% of the generic cost, or 200% of verifiable unit-specific startup costs where ERCOT has approved them. [e26] Co-optimization schedules energy and reserves together and makes trade-offs between them; before December 5, 2025 ERCOT had it only in the day-ahead market. [e14]

## Formula

- Spark spread ($/MWh) = power price ($/MWh) − gas price ($/MMBtu) × heat rate (MMBtu/MWh). [e29] EIA notes it ignores pipeline costs, finance charges, O&M, taxes and fixed costs, so it indicates market conditions rather than one plant's profit. [e31]
- Implied heat rate = power price ÷ fuel price; the unit covers fuel when this exceeds its own heat rate. [e3]
- Mitigated offer cap: MOC = Max[GIHR × Max(FIP, WAFP), (IHR × FPRC + OM)], where GIHR is a generic single-value incremental heat rate, IHR is the unit's verifiable incremental heat rate curve, FPRC is the calculated fuel price for its fuel mix, and OM is variable O&M above LSL including emissions. [e9][e17][e18][e19][e10]
- Generic minimum-energy cap for a combined cycle over 90 MW = 8 MMBtu/MWh × the FIP/FOP fuel price blend. [e25]

## Key facts

- IMM net revenue assumptions (2024 report): 7 MMBtu/MWh for a combined cycle, 10.5 for a gas turbine, $4/MWh variable O&M, 10% outage rate, no start-up or min-energy costs. [e2][e28]
- EIA's benchmark heat rate: 7,000 Btu/kWh for a fairly new and efficient combined cycle. [e30]
- Labels in the IMM's natural gas price figure for 2021-2025: $7.30, $5.84, $2.22, $1.90, $3.06 (unit not stated in the quote). [e5]
- 2025 ERCOT average real-time energy price, excluding adders: $36.94/MWh. [e6]
- The 2025 implied heat rate was almost 28% below 2024 and in line with the marginal heat rate of ERCOT gas plants. [e7]
- IMM estimate of 2025 net revenue: $82.96/kW-year for a combined cycle and $52.59/kW-year for a combustion turbine, below the $140/kW-year planning CONE. [e13][e16]
- Generic startup cap O&M for a combined cycle with a CT of at least 90 MW: $6,810; startup offers capped at 200% of generic, or 200% of approved verifiable costs. [e24][e26]

## Scenarios

### Katy gas is $3.00/MMBtu and North Hub is trading at $30/MWh off-peak and $55/MWh in the evening peak. Is a 7.0 heat-rate CCGT in the money?

- Start with fuel cost. Heat rate times gas price gives fuel cost per MWh, and fuel is the biggest part of a gas unit's marginal cost. [e1][e8]
- Suppose (illustrative): 7.0 MMBtu/MWh × $3.00/MMBtu = $21/MWh of fuel. Add the IMM's $4/MWh of variable O&M and marginal cost is about $25/MWh. [e2]
- Suppose (illustrative): at $30/MWh off-peak the margin is about $5/MWh; at $55/MWh in the evening it is about $30/MWh. That is EIA's spark spread less O&M. [e29]
- Cross-check with the implied heat rate: $30 ÷ $3.00 = 10 and $55 ÷ $3.00 is about 18, both above 7.0, so the unit covers fuel in both blocks (illustrative). [e3]
- (Reasoning) The thin off-peak margin can disappear once start-up and minimum generation costs are counted, so ask whether the unit must run through the night to be online for the evening peak.
- Price the start. Suppose (illustrative): the generic startup cap's O&M part is $6,810 for a CC with a CT of 90 MW or more, applied for each combustion turbine [e24]; for one combustion turbine, spread over a 4-hour evening run at 400 MW (1,600 MWh) that is about $4/MWh, before start fuel.
- Price the minimum run. Suppose (illustrative): the generic minimum-energy cap of 8 MMBtu/MWh at $3.00 is $24/MWh at LSL [e25], so overnight hours at $30 earn about $6/MWh at LSL before O&M, a thin but positive cushion in this example.
- Thermal units that do not clear a three-part offer day-ahead take that start-up and min-gen risk themselves; a cleared and DAM-committed offer is made whole to its capped costs. [e11][e27]
- Wind and solar have produced hundreds of hours at or below $0, which lowers the implied heat rate; shortage pricing produces hundreds of hours above gas marginal cost, which raises it. [e15]
- Location matters: historically, low gas prices at Waha have meant much higher net revenues for gas resources in the Permian area. [e12]
- Co-optimization schedules energy and reserves together and makes trade-offs among them, so (Guidance) compare the energy margin with the reserve alternative before deciding how to offer. [e14]

### Harder follow-ups

#### Your unit is in Houston and must buy NOx credits. How does that show up in its cost-based offer cap?

- Emission costs may be added to variable O&M above LSL as one average $/MWh value, and NOx and SO2 costs may be included where regulations apply. [e23][e21]
- They count only to the extent needed to meet the Resource's environmental obligations and only with documentation. [e20]
- ERCOT recalculates the SO2 and NOx part monthly from index prices (daily once the pending VCMRR042 change is implemented). [e22]
- (Reasoning) So a higher credit price raises the OM term in the MOC with a lag, not instantly.

#### The CCGT clears every evening at a positive spread. Why might the IMM still say it does not earn enough?

- The IMM's 2025 CC net revenue was $82.96/kW-year against a $140/kW-year planning CONE. [e13][e16]
- Its 2025 calculation assumes the unit sells whenever profitable [e13], and in its 2024 report the IMM said the same kind of analysis left out start-up and minimum-energy costs and ramping restrictions that can prevent generators from profiting during brief price spikes. [e28] (Reasoning) So real units would likely earn less, not more.
- (Reasoning) Positive hourly spreads cover variable costs; the fixed-cost gap is what CONE measures.

#### What if gas doubles but power prices stay at $36.94/MWh?

- Suppose (illustrative): at $6.00/MMBtu a 7.0 heat rate means $42/MWh of fuel plus $4 of O&M, above the IMM's 2025 average real-time price of $36.94/MWh. [e2][e6]
- (Reasoning) Power prices would normally rise with gas because gas is the most-used fuel and its cost is the main marginal cost [e8], so the real question is whether the implied heat rate holds; in 2025 it was in line with gas plants' marginal heat rate. [e7]

## Questions

### Which gas price should you use?

ERCOT's Fuel Index Price is the Katy Hub price. [e4] (Guidance) Use the price the plant actually pays for gas, which for a West unit may track Waha instead. [e12]

### Is the plant worth building if it is in the money most days?

Not necessarily. The IMM estimated 2025 net revenue for a combined cycle at $82.96/kW-year, below the $140/kW-year planning CONE, and concluded that 2025 net revenues were not high enough to incentivize new investment. [e13][e16]

### How does ERCOT estimate a gas unit's marginal cost for mitigation?

The mitigated offer cap uses the larger of a generic incremental heat rate times the higher of the fuel index and a resource fuel price, or the unit's verifiable incremental heat rate times its calculated fuel price plus O&M. [e9][e17][e18][e19][e10]

### Why is the spark spread not the same as profit?

EIA says it ignores pipeline and finance costs, O&M, taxes and fixed costs, so it is an indicator of market conditions, not a plant's exact profitability. [e31]

## Say it like this

(Guidance) Multiply the heat rate by the gas price, add variable O&M, and compare that with the power price for the hours the unit would run. If power divided by gas is above the plant's heat rate, it covers fuel, but start-up and minimum run costs decide whether a thin margin is really worth running for, and even a unit in the money most evenings may not cover its fixed costs.

## Common confusion

(Guidance) The implied heat rate is a market number, while the plant heat rate is an engineering number; the plant is in the money when the first is above the second. [e3] Being in the money in hours is not the same as earning enough to cover fixed costs. [e16] And the generic startup and minimum-energy caps are ceilings for offers, not measured costs of any one plant. [e24][e26]

## Open items

- No source gives measured start-up costs or minimum run times for individual ERCOT combined cycles; the scenario uses the generic cap values only as an illustrative proxy.
- The startup cap's fuel component (startup fuel in MMBtu) for a CC is not quoted here; only the O&M part ($6,810) is.
- The sources do not give a 2026 average gas price or 2026 implied heat rate (the IMM monthly report's charts did not extract as text).
- VCM Equations 4 and 5 (startup and LSL emission costs) are referenced but their text was not quoted.
- The Verifiable Cost Manual snapshot (e20-e23, e33) is the edition effective 2026-12-01; its wording has not been compared with the edition in force before that date.
