---
id: heat-rate
name: Heat Rate
aliases: [heat rate, incremental heat rate, average heat rate, MMBtu/MWh]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: implied-heat-rate
    type: contrasts-with
    note: The IMM's implied heat rate is the power price divided by the gas price, a market indicator rather than a unit's physical efficiency. [e8]
  - to: natural-gas-price
    type: related
    note: ERCOT multiplies heat rates by the Fuel Index Price, a Katy Hub gas index in $/MMBtu. [e12][e3]
  - to: market-power-mitigation
    type: used-in
    note: Mitigated Offer Caps are built from a generic or verifiable incremental heat rate times a fuel price. [e3]
  - to: ffss
    type: used-in
    note: The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate. [e11]
  - to: offer-cap
    type: used-in
    note: The peaker net margin, which can lower the system-wide offer cap, uses a 10 times FIP operating cost. [e4][e5]
  - to: spark-spread
    type: prerequisite-of
    note: A spark spread compares the power price with a unit's fuel cost, which is its heat rate times the gas price.
  - to: merit-order
    type: determines
    note: The IMM says the 0 to 10 times FIP price band covers the incremental fuel price of most of the ERCOT fleet. [e10]
  - to: heat-rate-call-option
    type: prerequisite-of
    note: A heat rate call option is struck in heat rate terms, so the concept here is a prerequisite.
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
    quote: "The offer cap was set at $12,240 per MW based on a Fuel Oil Index price of $17 per MMBtu, a heat rate of 15 MMBtu per MWh, and a 48-hour obligation period."
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
---

## Definition

ERCOT rules and IMM reports express a generator's heat rate in MMBtu per MWh and multiply it by a fuel price in $/MMBtu to get a fuel cost in $/MWh; for example, the Protocols' Generic Incremental Heat Rate is a single-value incremental heat rate in MMBtu/MWh. [e1][e12][e3] None of the saved sources defines "heat rate" itself in so many words (see Open items).

## How it works

A heat rate turns a fuel price into a marginal cost. In the Mitigated Offer Cap formula, ERCOT multiplies a generic incremental heat rate (GIHR) by the higher of the Fuel Index Price or a weighted average fuel price, or uses the resource's verifiable incremental heat rate (IHR) times a fuel price plus O&M, whichever is greater. [e3] The FIP is a daily Katy Hub natural gas price in $/MMBtu. [e12] The verifiable IHR is a curve for each resource approved through the verifiable cost process, while the GIHR is set at 10.5 for resources in commercial operation on or before January 1, 2004 and 14.5 for later ones. [e2][e1]

Because fuel is the largest part of marginal production cost for most generators and gas is the most widely used fuel in ERCOT, a unit's heat rate largely decides where it sits in the offer stack. [e14] The IMM says the price band from zero to 10 times the FIP covers the incremental fuel price of the vast majority of the ERCOT fleet; 28% of capacity was offered in that band in 2025. [e10]

## ERCOT context

Heat rates appear as fixed parameters in several rules and analyses. [e4][e6][e9][e11]

- The scarcity pricing rule sets the daily peaking operating cost at 10 times the natural gas price index, and the IMM describes this as a 10.0 MMBtu per MWh heat rate in the PNM calculation. [e4][e5]
- The IMM's own net revenue analysis assumes 7 MMBtu per MWh for a combined-cycle unit and 10.5 MMBtu per MWh for a gas turbine. [e6]
- The IMM defines a price spike as a price above 18 MMBtu per MWh times the FIP, a level that typically exceeds the marginal cost of virtually all online generators. [e9]
- The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate with a $17 per MMBtu fuel oil price and a 48-hour obligation. [e11]

The market-wide counterpart is the implied heat rate, the power price divided by the gas price. [e8] The IMM says the 2025 average implied heat rate was in line with the marginal heat rate of ERCOT gas plants. [e13]

## Key facts

- Generic Incremental Heat Rate in the Mitigated Offer Cap: 10.5 MMBtu/MWh for COD on or before January 1, 2004; 14.5 after. [e1]
- PNM peaking operating cost: 10 times the gas price index, i.e. a 10.0 MMBtu per MWh heat rate. [e4][e5]
- IMM net revenue assumptions: 7 MMBtu/MWh combined cycle, 10.5 MMBtu/MWh gas turbine, $4/MWh variable O&M. [e6]
- IMM price spike threshold: 18 times FIP. [e9]
- FFSS 2024-2025 offer cap: $12,240 per MW from $17/MMBtu, 15 MMBtu/MWh and 48 hours. [e11]
- U.S. coal fleet average heat rate: 10.4 MMBtu/MWh in 2013 to 10.7 in 2023 (national figure cited by the IMM). [e7]

## Formula

The FFSS cap shows the arithmetic directly: fuel price ($17 per MMBtu) times heat rate (15 MMBtu per MWh) times the 48-hour obligation gives the $12,240 per MW cap. [e11] The same structure, heat rate times a fuel price, sits inside the Mitigated Offer Cap formula. [e3]

## Example

(Illustrative) Suppose gas is $3.00/MMBtu. A combined cycle at the IMM's assumed 7 MMBtu/MWh has a fuel cost of 7 × 3.00 = $21/MWh; a gas turbine at 10.5 MMBtu/MWh has 10.5 × 3.00 = $31.50/MWh. Add the IMM's assumed $4/MWh variable O&M and you get $25 and $35.50. If real-time power is $30/MWh, the combined cycle covers its marginal cost and the gas turbine does not. The IMM's price spike threshold at that gas price would be 18 × 3.00 = $54/MWh.

## Say it like this

(Guidance) Heat rate is how many MMBtu of fuel a plant burns per MWh, so heat rate times the gas price is the plant's fuel cost per MWh. ERCOT's rules plug fixed heat rates into offer caps, the peaker net margin and FFSS caps, so knowing the standard numbers lets you rebuild those caps in your head.

## Common confusion

(Guidance) A unit's physical heat rate and the market's implied heat rate are different things: the implied heat rate is just the power price divided by the gas price, and it can be pushed up by shortage pricing or down by zero-priced renewable hours. [e8] Also, the 10.5 and 14.5 GIHR values in the Mitigated Offer Cap are parameters the Protocols set by Commercial Operations Date; the sources do not say they are measured heat rates of actual units. [e1]

## Questions

### How does ERCOT turn a heat rate into a price?

It multiplies the heat rate in MMBtu/MWh by a fuel price in $/MMBtu, such as the Katy Hub FIP, as in the Mitigated Offer Cap formula. [e3][e12]

### What heat rate does the peaker net margin assume?

10 MMBtu/MWh: the rule sets the peaking operating cost at 10 times the gas price index. [e4][e5]

### What heat rates does the IMM use for new gas units?

7 MMBtu/MWh for a combined cycle and 10.5 MMBtu/MWh for a gas turbine, plus $4/MWh variable O&M, in its 2024 net revenue analysis. [e6]

### Where does a heat rate show up in reliability products?

In FFSS: the 2024-2025 offer cap was built from a 15 MMBtu/MWh heat rate, a $17/MMBtu fuel oil price and a 48-hour obligation. [e11]

## Scenarios

### Is the CCGT in the money tonight?

- Multiply its heat rate by tonight's gas price and add variable O&M, then compare with the expected power price. [e3][e6]
- If power is above 18 times the FIP, the IMM would count it as a price spike, above the marginal cost of virtually all online units. [e9]

## Open items

- No saved source defines "heat rate" in so many words (e.g. fuel input per unit of electrical output); np-02 has no definition. The definition above is limited to how the sources use the units.
- The sources do not give actual heat rates of ERCOT units or fleet averages for ERCOT gas plants; the IMM says only that the 2025 implied heat rate is "in line with" the marginal heat rate of ERCOT gas plants, without a number.
- The coal heat rate (10.4 to 10.7 MMBtu/MWh) is a national EIA-based figure quoted by the IMM, not ERCOT-specific.
- np-06 has Average Heat Rate definitions for settlement, but the current text sits next to a pending NPRR1086 replacement box, so I did not cite it.
- The reason the GIHR is higher (14.5) for resources with a Commercial Operations Date after January 1, 2004 is not explained in the sources.
