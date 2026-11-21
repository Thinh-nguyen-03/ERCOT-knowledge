---
id: heat-rate
name: Heat Rate
aliases: [heat rate, incremental heat rate, average heat rate, MMBtu/MWh, IHR, AHR, I/O curve, proxy heat rate]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: implied-heat-rate
    type: contrasts-with
    note: The IMM's implied heat rate is the power price divided by the gas price, a market indicator rather than a unit's physical efficiency. [e8]
  - to: natural-gas-price
    type: related
    note: ERCOT multiplies heat rates by the Fuel Index Price, a Katy Hub gas index in $/MMBtu, plus a fuel adder for units with verifiable costs. [e12][e3][e29]
  - to: market-power-mitigation
    type: used-in
    note: Mitigated Offer Caps are built from a generic or verifiable incremental heat rate times a fuel price. [e3][e30]
  - to: ffss
    type: used-in
    note: The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate. [e11]
  - to: offer-cap
    type: used-in
    note: PUCT rule 25.509 sets a daily peaking operating cost of 10 times the natural gas price index, and ERCOT's peaker net margin uses a 10.0 MMBtu per MWh heat rate. [e4][e5]
  - to: peaker-net-margin
    type: used-in
    note: The PNM proxy combustion turbine assumes a 10 MMBtu per MWh heat rate and no other variable operating or startup costs. [e36][e5]
  - to: spark-spread
    type: prerequisite-of
    note: EIA's spark spread is the power price minus the gas price times a heat rate, with a 7,000 Btu/kWh benchmark. [e34]
  - to: ruc-make-whole
    type: used-in
    note: ERCOT's proxy heat rate (day-ahead hub price over the fuel index) is used to estimate real-time payments removed from the RUC guarantee. [e27]
  - to: merit-order
    type: determines
    note: The IMM says the 0 to 10 times FIP price band covers the incremental fuel price of most of the ERCOT fleet. [e10]
  - to: heat-rate-call-option
    type: prerequisite-of
    note: See that topic; it builds on the heat rate concept defined here.
evidence:
  - id: e1
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (GIHR)"
    quote: "GIHR _(q, r) | MMBtu/MWh | Generic Incremental Heat Rate—The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5."
  - id: e2
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, variable table (IHR)"
    quote: "Verifiable Incremental Heat Rate per Resource—The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.4.1(1), Mitigated Offer Cap formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e4
    source: puct-25-509
    locator: "16 TAC §25.509(b)(2)"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh)."
  - id: e5
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Peaker Net Margin"
    quote: "Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates."
  - id: e6
    source: imm-som-2024
    locator: "Resource Adequacy chapter, footnote 48 (net revenue assumptions)"
    quote: "For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs."
  - id: e7
    source: imm-som-2024
    locator: "Resource Adequacy chapter, footnote 51"
    quote: "The average heat rate of coal-fired power plants has remained relatively stable over the past decade, increasing slightly from 10.4 MMBtu per MWh in 2013 to 10.7 MMBtu per MWh in 2023 as the national fleet continues to age."
  - id: e8
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money."
  - id: e9
    source: imm-som-2024
    locator: "Review of Real-Time Market Outcomes, price spike analysis (Figure 3)"
    quote: "For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price is greater than 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the prevailing fuel index price (FIP) which produces an energy price spike threshold in $ per MWh. Prices at this level typically exceed the marginal costs of virtually all on-line generators."
  - id: e10
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves"
    quote: "28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet."
  - id: e11
    source: imm-som-2025
    locator: "Market Operations chapter, 1. FFSS Deployments in 2025"
    quote: "In the 2024-2025 contract period, ERCOT procured 4,195 MW across 32 dualfuel resources and one natural gas resource. The offer cap was set at $12,240 per MW based on a Fuel Oil Index price of $17 per MMBtu, a heat rate of 15 MMBtu per MWh, and a 48-hour obligation period."
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e13
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "The average implied heat rate for 2025 was almost 28% lower than in 2024 and was the lowest annual average of the last five years. This value is now in line with the marginal heat rate of natural gas power plants in the ERCOT market."
  - id: e14
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 1. Real-Time Market Prices"
    quote: "Fuel costs represent the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT."
  - id: e15
    source: eia-faq-heat-rate
    locator: "FAQ: What is the efficiency of different types of power plants?, first paragraph"
    quote: "Heat rate is one measure of the efficiency of electric generators and power plants that convert fuel into heat and then into electricity. The heat rate is the amount of energy used by an electrical generator or power plant to generate one kilowatthour (kWh) of electricity. We express heat rates in British thermal units (Btu) per net kWh generated."
  - id: e16
    source: eia-glossary-heat-rate
    locator: "Glossary entry, Heat rate"
    quote: "A measure of generating station thermal efficiency commonly stated as Btu per kilowatthour. Note: Heat rates can be expressed as either gross or net heat rates, depending whether the electricity output is gross or net generation. Heat rates are typically expressed as net heat rates."
  - id: e17
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 2. Implied Heat Rates"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e18
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.1 Verifiable Heat Rate Policies, (1)-(2)"
    quote: "Heat rate curve data is utilized within the Nodal Verifiable Cost Process because it can be used, in conjunction with the market price of fuel, to provide a proxy for the actual fuel costs of operating a Resource. (2) In the ERCOT Nodal market, there are two types of Resource-specific Heat Rate Curve data that Filing Entities may submit: Incremental Heat Rate and Average Heat Rate data. Average Heat Rate data must be submitted with Verifiable Minimum Energy Cost submissions. Incremental Heat Rate data may be included with data submitted for use in calculating Mitigated Offer Caps. ERCOT, however, will not approve any submitted heat rate data unless the Filing Entity also develops and submits Resource-specific heat-input versus power-output curves (I/O Curves)."
  - id: e19
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.1 Verifiable Heat Rate Policies, (3)"
    quote: "The first of the aforementioned curves, the Incremental Heat Rate (IHR) Curve, is defined as the first derivative of the I/O Curve. It provides the amount of thermal energy used by a Resource to achieve an incremental change in electrical energy output (i.e., the amount of thermal energy used to produce an additional unit of output). The second, the Average Heat Rate (AHR) Curve provides the average amount of energy used by a Resource to provide each unit of power output. The AHR Curve is determined by dividing input in fuel by the power it generates for various levels of generation."
  - id: e20
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.2.1 Input-Output Curve, (1)(d)"
    quote: "Submitted I/O Curves are to be defined by the third-order equation: y = A + Bx + Cx2 + Dx3 where: (i) x = Output in MW; y = Input in MMBtu/hr; and A-D = coefficients that define the equation;"
  - id: e21
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.2.2 Incremental Heat Rate Curve, (1)(b)-(e)"
    quote: "(b) Provide a monotonic, non-decreasing function; (c) Be submitted in terms of MMBtu/MWh; (d) Consist of at least 2, but no more than 10, pairs of IHR (MMBtu/MWh) and Output (MW) points; and (e) Be defined as the I/O Curve’s first derivative: IHR = dy/dx = B + 2Cx +3Dx2, unless it’s based on a second order equation as described in paragraph (e) of Section 6.2.1, Input-Output Curve, above."
  - id: e22
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.2.3 Average Heat Rate Curve, (1)(d)"
    quote: "Be defined as the I/O Curve divided by the output (x): AHR = y/x = (A + Bx + Cx2 + Dx3) / x where:"
  - id: e23
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 6.2 Submission of Heat Rate Curve Data, (1)"
    quote: "All Heat Rate Curves and Heat Rate data must be submitted in terms of Net Output. Filing Entities have two options for submitting Heat Rate Curves and Heat Rate data: submit the results of tests actually performed on the generating unit or submit the manufacturer suggested Heat Rate values. If a Filing Entity has reason to believe that the physical characteristics of a generator have changed so that previously submitted Heat Rate Curves overstate fuel consumption or under state efficiency, the Filing Entity must notify ERCOT and must submit updated Heat Rate data."
  - id: e24
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 2.1 Generally Applicable Rules, (g)"
    quote: "For use in Real Time Mitigation, Filing Entities have the option of submitting, but none are required to submit, Incremental Heat Rate (IHR) curves, with the exception of RMR Resources which are required to submit IHR curves, the incremental Operations & Maintenance (O&M) costs of generating power at greater than LSL output."
  - id: e25
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), 2.1 Generally Applicable Rules, (r)"
    quote: "Although ERCOT requires the submission of parameters (i.e. heat rates, fuel, emission and O&M rates, etc.) on a seasonal basis, if they change by season, ERCOT will utilize summer parameters for all seasons."
  - id: e26
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), Section 3 fuel adder, paragraph (1)"
    quote: "All Resources that have been approved for Verifiable Costs will receive a default fuel adder of $0.50/MMBtu, unless the Filing Entity elects to submit an actual fuel adder ($/MMBtu) for each Resource for verification and approval by ERCOT."
  - id: e27
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), Appendix 6, Calculation and Application of Proxy Heat Rate"
    quote: "Proxy Heat Rate Monthly (PHRM) (MMBtu/MWh) = Average (based on values for one standard deviation from the Arithmetic Mean) ERCOT Day-Ahead Hub Price (in period) (DASPP _(ERCOT345BUS) )/Average Fuel Price Index (AVGFIP)($/MMBtu) for the same period. The PHR shall be based on the 12 month rolling average of the PHRM values."
  - id: e28
    source: ercot-vcm
    locator: "Verifiable Cost Manual (version effective December 1, 2026), Appendix 6, use of the PHR"
    quote: "The PHR is used to estimate the payments received in Real Time by Resources ramping from breaker close to LSL (see Section 14, Appendices, Appendix 5, Specification of Relevant Equations, for additional details)."
  - id: e29
    source: np-04
    locator: "Section 4.4.9.4.1(1), FPRC formula and Fuel Adder definition"
    quote: "FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100"
  - id: e30
    source: np-04
    locator: "Section 4.4.9.4.1(1), Mitigated Offer Cap"
    quote: "Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC)."
  - id: e31
    source: eia-faq-heat-rate
    locator: "FAQ: What is the efficiency of different types of power plants?, second and third paragraphs"
    quote: "Net generation is the amount of electricity a power plant supplies to the power transmission line connected to the power plant. Net generation accounts for all the electricity the power plant consumes to operate the plant’s equipment and generators, such as fuel feeding systems, boiler water pumps, cooling equipment, and pollution control devices. To express the efficiency of a generator or power plant as a percentage, divide the equivalent Btu content of a kWh of electricity (3,412 Btu) by the heat rate. For example, if the heat rate is 10,500 Btu, the efficiency is 33%. If the heat rate is 7,500 Btu, the efficiency is 45%."
  - id: e32
    source: np-04
    locator: "Section 4.4.9.4.1, variable table (FA)"
    quote: "Fuel Adder—The fuel adder is the average cost above the index price Resource r has paid to obtain fuel."
  - id: e33
    source: np-04
    locator: "Section 4.4.9.4.1, variable table (OM)"
    quote: "Variable Operations and Maintenance Cost above LSL—The O&M cost for Resource r to operate above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process."
  - id: e34
    source: ref-eia-spark-spread-2013
    locator: "EIA Today in Energy, An introduction to spark spreads (February 8, 2013)"
    quote: "Spark spread ($/MWh) = power price ($/MWh) – [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)] A key component of the spark spread equation is the heat rate, or measure of efficiency, of a generating unit. Those marketing the output of a unit will use the unit's tested heat rate to assess its profitability. Market participants and observers rely on a generic benchmark to assess overall market conditions. EIA's new daily price table shows the spark spread using a benchmark heat rate of 7,000 Btu/kilowatthour (kWh), which represents a fairly new and efficient natural gas combined-cycle generator."
  - id: e35
    source: imm-som-2023
    locator: "2023 State of the Market Report, Resource Adequacy, net revenue assumptions footnote"
    quote: "For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs. A total outage rate (planned and forced) of 10% was assumed for each technology."
  - id: e36
    source: imm-som-2020
    locator: "2020 State of the Market Report, Resource Adequacy, footnote 43 (p. 81)"
    quote: "The proxy combustion turbine in the Peaker Net Margin calculation assumes a heat rate of 10 MMBtu per MWh and includes no other variable operating costs or startup costs."
---

## Definition

Heat rate is the amount of energy used by a generator or power plant to generate one kilowatthour of electricity, expressed by EIA in Btu per net kWh generated; it is a measure of thermal efficiency. [e15][e16] ERCOT rules and IMM reports express a generator's heat rate in MMBtu per MWh and multiply it by a fuel price in $/MMBtu to get a fuel cost in $/MWh; for example, the Protocols' Generic Incremental Heat Rate is a single-value incremental heat rate in MMBtu/MWh. [e1][e12][e3]

## How it works

A heat rate turns a fuel price into a marginal cost. In the Mitigated Offer Cap formula, ERCOT multiplies a generic incremental heat rate (GIHR) by the higher of the Fuel Index Price or a weighted average fuel price, or uses the resource's verifiable incremental heat rate (IHR) times a fuel price plus O&M, whichever is greater. [e3] The MOC is what ERCOT uses when it mitigates energy offer curves in real-time SCED. [e30] The FIP is a daily Katy Hub natural gas price in $/MMBtu. [e12] The verifiable IHR is a curve for each resource approved through the verifiable cost process, while the GIHR is set at 10.5 for resources in commercial operation on or before January 1, 2004 and 14.5 for later ones. [e2][e1]

ERCOT distinguishes two heat rates, both derived from a unit's input-output (I/O) curve. The incremental heat rate is the fuel needed for one more unit of output (the first derivative of the I/O curve). The average heat rate is total fuel input divided by output at a given level. [e19] Heat rate data are used in the verifiable cost process because, combined with the market price of fuel, they give a proxy for a resource's actual fuel cost; ERCOT will not approve heat rate data without a resource-specific I/O curve. [e18]

Heat rates are measured on net output. EIA defines net generation as what the plant supplies to the transmission line after its own use for fuel handling, pumps, cooling and pollution control, and notes that heat rates are typically expressed as net. [e31][e16] The Verifiable Cost Manual likewise requires all heat rate data in terms of net output, from actual unit tests or manufacturer values. [e23]

Fuel costs are the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT, according to the IMM. [e14] The IMM says the price band from zero to 10 times the FIP covers the incremental fuel price of the vast majority of the ERCOT fleet; 28% of capacity was offered in that band in 2025. [e10]

## Formula

Efficiency (EIA): efficiency (%) = 3,412 Btu per kWh divided by the heat rate in Btu/kWh. A 10,500 Btu/kWh heat rate is 33% efficient and a 7,500 Btu/kWh heat rate is 45%. [e31] (1 MMBtu/MWh equals 1,000 Btu/kWh, so 10.5 MMBtu/MWh is the same as 10,500 Btu/kWh.)

I/O curve (Verifiable Cost Manual, version effective December 1, 2026): fuel input y (MMBtu/hr) = A + Bx + Cx² + Dx³, where x is output in MW and A-D are fitted coefficients. [e20] The incremental heat rate is IHR = dy/dx = B + 2Cx + 3Dx²; it must be non-decreasing, in MMBtu/MWh, with 2 to 10 MW/IHR points. [e21] The average heat rate is AHR = y/x = (A + Bx + Cx² + Dx³)/x. [e22]

Mitigated Offer Cap (Protocols 4.4.9.4.1): MOC = the greater of GIHR × max(FIP, WAFP) and IHR × FPRC + OM. [e3] For a resource with verifiable costs that has submitted an energy offer curve, the fuel price FPRC = max(WAFP, FIP + fuel adder) × gas share + fuel oil price × oil share. [e29] The fuel adder is the average cost above the index the resource has paid for fuel, with a default of $0.50/MMBtu until an actual adder is approved; OM is the verifiable variable O&M above LSL, including an emissions adjustment. [e32][e26][e33]

FFSS cap: fuel price ($17 per MMBtu) times heat rate (15 MMBtu per MWh) times the 48-hour obligation gives the $12,240 per MW cap for 2024-2025. [e11]

Spark spread (EIA): power price minus gas price times heat rate. [e34]

Proxy heat rate (Verifiable Cost Manual Appendix 6): the monthly value is the average ERCOT day-ahead hub price divided by the average Fuel Index Price for the same period, and the PHR is the 12-month rolling average of those monthly values. [e27] It is used to estimate real-time payments to resources ramping from breaker close to LSL, which are removed from the RUC guarantee. [e28]

## ERCOT context

Heat rates appear as fixed parameters in several rules and analyses. [e4][e6][e9][e11]

- PUCT rule 25.509 sets the daily peaking operating cost at 10 times the natural gas price index, and the IMM says ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate, excluding variable O&M and outage rates. [e4][e5] The IMM's 2020 report adds that the PNM proxy CT includes no startup costs either. [e36]
- The IMM's own net revenue analysis (2023 and 2024 reports) assumes 7 MMBtu per MWh for a combined-cycle unit and 10.5 MMBtu per MWh for a gas turbine, $4 per MWh variable O&M, and (2023 report) a 10% total outage rate. [e6][e35]
- For its price spike analysis in the 2024 report, the IMM defines a price spike as a 15-minute interval with a load-weighted average energy price above 18 MMBtu per MWh times the FIP, a level that typically exceeds the marginal cost of virtually all online generators. [e9]
- The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate with a $17 per MMBtu fuel oil price and a 48-hour obligation. [e11]
- EIA's benchmark spark spread uses 7,000 Btu/kWh, which it describes as a fairly new, efficient combined cycle; it notes that those marketing a unit's output use its tested heat rate instead. [e34]

Some practical details of ERCOT's verifiable cost process: submitting IHR curves for real-time mitigation is optional except for RMR resources [e24]; parameters are submitted by season, but if they vary ERCOT uses the summer values for all seasons [e25]; and a resource whose heat rate curves come to overstate fuel use must notify ERCOT and resubmit. [e23]

The market-wide counterpart is the implied heat rate, the power price divided by the gas price. [e8] The IMM says the 2025 average implied heat rate was in line with the marginal heat rate of ERCOT gas plants. [e13]

## Key facts

- Generic Incremental Heat Rate in the Mitigated Offer Cap: 10.5 MMBtu/MWh for COD on or before January 1, 2004; 14.5 after. [e1]
- PNM peaking operating cost: 10 times the gas price index, i.e. a 10.0 MMBtu per MWh heat rate. [e4][e5]
- IMM net revenue assumptions (2023 and 2024 reports): 7 MMBtu/MWh combined cycle, 10.5 MMBtu/MWh gas turbine, $4/MWh variable O&M. [e6][e35]
- IMM price spike threshold (2024 report): 18 times FIP. [e9]
- FFSS 2024-2025 offer cap: $12,240 per MW from $17/MMBtu, 15 MMBtu/MWh and 48 hours. [e11]
- Default fuel adder for resources with verifiable costs: $0.50/MMBtu. [e26]
- EIA conversion: 3,412 Btu per kWh; 10,500 Btu/kWh = 33% efficient. [e31]
- U.S. coal fleet average heat rate: 10.4 MMBtu/MWh in 2013 to 10.7 in 2023 (national figure cited by the IMM). [e7]

## Example

(Illustrative) Suppose gas is $3.00/MMBtu. A combined cycle at the IMM's assumed 7 MMBtu/MWh has a fuel cost of 7 × 3.00 = $21/MWh; a gas turbine at 10.5 MMBtu/MWh has 10.5 × 3.00 = $31.50/MWh. Add the IMM's assumed $4/MWh variable O&M and you get $25 and $35.50. If real-time power is $30/MWh, the combined cycle covers its marginal cost and the gas turbine does not. The IMM's price spike threshold at that gas price would be 18 × 3.00 = $54/MWh.

(Illustrative) Suppose a unit's I/O curve is y = 200 + 7x + 0.01x² (MMBtu/hr, x in MW, D = 0). At 100 MW, fuel input is 200 + 700 + 100 = 1,000 MMBtu/hr, so the average heat rate is 10.0 MMBtu/MWh, while the incremental heat rate is 7 + 0.02 × 100 = 9.0 MMBtu/MWh. The fixed term A raises the average above the incremental rate at low output; offer curves and the MOC use the incremental rate.

## Say it like this

(Guidance) Heat rate is how many MMBtu of fuel a plant burns per MWh, so heat rate times the gas price is the plant's fuel cost per MWh. ERCOT's rules plug fixed heat rates into mitigated offer caps, the peaker net margin and FFSS caps, so knowing the standard numbers lets you rebuild those caps in your head.

(Guidance) For dispatch and offers, think incremental heat rate (the cost of the next MW); for verifiable minimum energy costs, ERCOT asks for the average heat rate.

## Common confusion

(Guidance) A unit's physical heat rate and the market's implied heat rate are different things: the implied heat rate is just the power price divided by the gas price, and the IMM says it is lowered by hours at or below $0 and raised by shortage pricing. [e8][e17] Also, the 10.5 and 14.5 GIHR values in the Mitigated Offer Cap are parameters the Protocols set by Commercial Operations Date; the sources do not say they are measured heat rates of actual units. [e1]

(Guidance) Average and incremental heat rates are not interchangeable. The incremental rate is the slope of the I/O curve; the average rate also spreads the I/O curve's fixed term over output, and ERCOT requires average heat rate data with minimum energy cost filings. [e19][e22][e18]

## Questions

### How does ERCOT turn a heat rate into a price?

It multiplies the heat rate in MMBtu/MWh by a fuel price in $/MMBtu, such as the Katy Hub FIP, as in the Mitigated Offer Cap formula. [e3][e12]

### What heat rate does the peaker net margin assume?

10 MMBtu/MWh: the rule sets the peaking operating cost at 10 times the gas price index. [e4][e5]

### What heat rates does the IMM assume in its net revenue analysis?

7 MMBtu/MWh for a combined cycle and 10.5 MMBtu/MWh for a gas turbine, plus $4/MWh variable O&M, in its 2023 and 2024 net revenue analyses. [e6][e35]

### Where does a heat rate show up in reliability products?

In FFSS: the 2024-2025 offer cap was built from a 15 MMBtu/MWh heat rate, a $17/MMBtu fuel oil price and a 48-hour obligation. [e11]

### Why does ERCOT require an I/O curve before approving a heat rate?

Because it uses the I/O curve to verify both the incremental and average heat rate curves; the IHR must be its first derivative and the AHR the curve divided by output. [e18][e21][e22]

### What if a gas unit buys spot gas above the Katy index on a cold morning?

The MOC uses the higher of the FIP and the unit's weighted average fuel price (WAFP) submitted for that hour, and for verifiable-cost units the higher of WAFP and FIP plus the fuel adder, so its cap can rise with its actual fuel cost. [e3][e29]

### Why do analysts quote spark spreads at 7,000 Btu/kWh?

EIA's benchmark uses 7,000 Btu/kWh to represent a fairly new, efficient combined cycle; it is a market-wide indicator, while a unit's owner uses its tested heat rate. [e34]

## Scenarios

### Is the CCGT in the money tonight?

- Multiply its heat rate by tonight's gas price and add variable O&M, then compare with the expected power price. [e3][e6]
- If power is above 18 times the FIP, the IMM would count it as a price spike, above the marginal cost of virtually all online units. [e9]

### A unit's heat rate degrades after a major outage. What does the owner have to do?

- If previously submitted heat rate curves now understate fuel use, the owner must notify ERCOT and submit updated data. [e23] The rule covers curves that overstate fuel use or understate efficiency; the saved text does not spell out the reverse case, so check with ERCOT.

## Open items

- The sources do not give actual heat rates of ERCOT units or fleet averages for ERCOT gas plants; the IMM says only that the 2025 implied heat rate is "in line with" the marginal heat rate of ERCOT gas plants, without a number.
- The coal heat rate (10.4 to 10.7 MMBtu/MWh) is a national EIA-based figure quoted by the IMM, not ERCOT-specific.
- np-06 has Average Heat Rate definitions for settlement, but the current text sits next to a pending NPRR1086 replacement box, so I did not cite it. The Verifiable Cost Manual's AHR definition is used instead.
- The reason the GIHR is higher (14.5) for resources with a Commercial Operations Date after January 1, 2004 is not explained in the sources.
- The Verifiable Cost Manual cited is the version effective December 1, 2026; whether the heat rate sections changed from the prior version is not checked.
- No saved source gives recent published proxy heat rate (PHR) values.
