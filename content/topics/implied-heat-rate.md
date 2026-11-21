---
id: implied-heat-rate
name: Implied Market Heat Rate
aliases: [implied heat rate, implied marginal heat rate, market heat rate]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: heat-rate
    type: contrasts-with
    note: A unit's heat rate is its physical efficiency, while the implied heat rate is a market ratio of power price to fuel price. [e6][e2]
  - to: natural-gas-price
    type: prerequisite-of
    note: The IMM's implied heat rate divides the electricity price by a fuel price; the 2024 report uses the natural gas price. [e1][e2]
  - to: waha-hub
    type: related
    note: ERCOT's Fuel Index Price is a Katy Hub price, not a Waha price. [e7]
  - to: negative-prices
    type: related
    note: Hours at or below $0 per MWh lower the implied heat rate. [e4]
  - to: ordc
    type: related
    note: The IMM says shortage pricing raises the implied heat rate; the ORDC adder was discontinued in December 2025 with the introduction of RTC. [e4][e9]
  - to: state-of-market-report
    type: related
    note: The implied heat rate is published in the IMM State of the Market reports. [e1][e2]
  - to: spark-spread
    type: related
    note: EIA writes the spark spread as power price minus natural gas price times heat rate, so the implied heat rate is the heat rate at which that spread is zero. [e20]
  - to: heat-rate-call-option
    type: related
    note: ICE lists an ERCOT heat rate contract that settles on an agreed heat rate times the NYMEX last-day price. [e21]
  - to: merit-order
    type: related
    note: The IMM ties the rise of the implied heat rate with load to resources with higher marginal costs being dispatched as load approaches peak. [e15]
  - to: evening-ramp
    type: related
    note: The IMM's price-spike threshold is an implied heat rate of 18, and most 2025 spikes fell in the evening net load peak. [e8][e23]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Chapter I, Review of Real-Time Market Outcomes, section 2, Implied Heat Rates"
    quote: "We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money."
  - id: e2
    source: imm-som-2024
    locator: "Chapter I, text before Figure 7"
    quote: "To summarize the separation between electricity and natural gas prices, we produce an “implied marginal heat rate” that is calculated by dividing the real-time price of electricity by the natural gas price."
  - id: e3
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates, text after Figure 2"
    quote: "The average implied heat rate for 2025 was almost 28% lower than in 2024 and was the lowest annual average of the last five years. This value is now in line with the marginal heat rate of natural gas power plants in the ERCOT market. In recent years, the prevalence and impact of price spikes, shown in Figure 4, elevated the implied marginal heat rate. Those spikes had a larger effect in 2023 and 2024 relative to fuel prices than in 2025."
  - id: e4
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates, text after Figure 2"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e5
    source: imm-som-2024
    locator: "Chapter I, text after Figure 7"
    quote: "The average implied heat rate for 2024 was considerably lower than in 2021 and 2023, years in which prices were significantly elevated due to Winter Storm Uri and ECRS-related issues."
  - id: e6
    source: eia-glossary-heat-rate
    locator: "Glossary entry, Heat rate"
    quote: "A measure of generating station thermal efficiency commonly stated as Btu per kilowatthour."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e9
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e8
    source: imm-som-2025
    locator: "Chapter I, section 4, Price Spike Impacts"
    quote: "For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price exceeds 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the corresponding fuel index price (FIP)"
  - id: e10
    source: imm-som-2024
    locator: "Chapter I, text after Figure 7 (page 47 (OCR))"
    quote: "That said, the implied heat rate for 2024 was still roughly 30% higher than in 2020 and 2022 and noticeably higher than would be expected based on the marginal heat rate of the natural gas power plants in the ERCOT market. This disparity is driven by the impact from price spikes, shown in Figure 3, which were more impactful in 2024 relative to the price of fuel compared to 2020 and 2022."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, key insights from Chapter I"
    quote: "Higher energy costs drove the increase, corresponding to a 61% increase in the average daily index price for natural gas."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, key insights from Chapter I"
    quote: "The implied heat rate in the ERCOT market decreased 28% in 2025 to its lowest point in five years. This implied heat rate is now in line with expectations based on ERCOT’s generation fleet and signals a more competitive market."
  - id: e13
    source: imm-som-2023
    locator: "Review of Real-Time Market Outcomes, C. Real-Time Prices Adjusted for Fuel Price Changes, text after Figure 6 (page 48 (OCR))"
    quote: "The most notable change in 2023 was the sharp increase in implied heat rate in June, August, and September. These increases were almost entirely due to the artificial shortages caused by the implementation of ECRS, which is discussed in detail in subsection G."
  - id: e14
    source: imm-som-2023
    locator: "Review of Real-Time Market Outcomes, C. Real-Time Prices Adjusted for Fuel Price Changes, text after Figure 7 (page 49 (OCR))"
    quote: "Figure 7 shows that the implied heat rate continued to be positively correlated with load levels in 2023, which is expected since prices tend to rise with demand."
  - id: e15
    source: imm-som-2022
    locator: "Review of Real-Time Market Outcomes, D. Real-Time Prices Adjusted for Fuel Price Changes, text after Figure 8 (page 49 (OCR))"
    quote: "Figure 9 shows a positive relationship between implied heat rate and load level as expected in a well-performing market for two reasons. First, resources with higher marginal costs were dispatched as the load approached peak. Second, the tight market conditions that cause the ORDC to produce price adders increase in frequency as load rises."
  - id: e16
    source: imm-som-2021
    locator: "Review of Real-Time Market Outcomes, D. Real-Time Prices Adjusted for Fuel Price Changes (page 51 (OCR))"
    quote: "The implied heat rate is mostly lower than 2020 when the effects of the extreme cold weather of February are removed from the analysis, especially during the second half of the year. This can be attributable to more coal output due to the high natural gas prices, as well as the effect of more conservative operations in the latter half of the year."
  - id: e17
    source: imm-som-2021
    locator: "Review of Real-Time Market Outcomes, D. Real-Time Prices Adjusted for Fuel Price Changes (page 51 (OCR))"
    quote: "The implied heat rate varied substantially among zones in 2021, particularly in February as extreme cold weather led to high load levels and prices."
  - id: e18
    source: imm-som-2023
    locator: "Review of Real-Time Market Outcomes, C. Real-Time Prices Adjusted for Fuel Price Changes (page 48 (OCR))"
    quote: "Although real-time electricity prices are driven largely by changes in natural gas prices, they are also influenced by other factors."
  - id: e19
    source: eia-faq-heat-rate
    locator: "EIA FAQ, What is the efficiency of different types of power plants?"
    quote: "To express the efficiency of a generator or power plant as a percentage, divide the equivalent Btu content of a kWh of electricity (3,412 Btu) by the heat rate."
  - id: e20
    source: ref-eia-spark-spread-2013
    locator: "An introduction to spark spreads (EIA, 2013), spark spread equation"
    quote: "Spark spread ($/MWh) = power price ($/MWh) – [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)]"
  - id: e21
    source: ref-ice-ercot-heat-rate
    locator: "ICE ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract specification (dated November 21, 2026), Final Settlement"
    quote: "Final settlement will be determined by multiplying the actual heat rate entered into at the time of the transaction by the NYMEX Last Day Settlement Price for the relevant delivery month."
  - id: e22
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates (page 26 (OCR))"
    quote: "Figure 2 shows the implied marginal heat rates for each month of 2025 and annually for 2021-2025."
  - id: e23
    source: imm-som-2025
    locator: "Chapter I, section 4, Price Spike Impacts, text after Figure 4"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
---

## Definition

The implied heat rate, as the IMM calculates it, is the power price divided by the fuel price, giving the heat rate that equates revenue from selling electricity with the cost of buying gas. [e1] In the 2024 report the IMM calls it the "implied marginal heat rate" and divides the real-time price of electricity by the natural gas price. [e2]

## Formula

Implied heat rate = real-time power price ($ per MWh) divided by the fuel price ($ per MMBtu), which gives a result in MMBtu per MWh. [e2][e1] The IMM's reports do not print the formula as an equation; the division is described in prose, and the unit follows from dividing $/MWh by $/MMBtu. For comparison, EIA writes the spark spread as power price minus natural gas price times heat rate, so, by the knowledge base's own arithmetic from that equation, the implied heat rate is the heat rate at which that spread is zero. [e20] A physical heat rate converts to efficiency by dividing 3,412 Btu (the Btu content of a kWh) by the heat rate. [e19]

## How it works

A heat rate is normally a measure of a generating station's thermal efficiency in Btu per kilowatthour. [e6] The implied version turns that around: it divides the market power price by the gas price to get the heat rate that equates revenue from selling electricity with the cost of buying gas. [e1] The IMM reads a high value as a less competitive market where even inefficient units profit, and a low value as a market where only the most efficient generators are in the money. [e1]

The IMM uses it to separate fuel effects from everything else: real-time electricity prices are driven largely by natural gas prices but also influenced by other factors, and the implied marginal heat rate summarizes the changes related to those other factors. [e18] The 2025 report shows each month of 2025 and annual values for 2021 to 2025. [e22]

Wind and solar push the number down by creating hundreds of hours at or below $0 per MWh, while shortage pricing pushes it up by creating hundreds of hours above gas marginal cost. [e4] The ORDC adder, which reflected reliability risk when reserves ran short, was discontinued in December 2025 with RTC. [e9]

It rises with load. The IMM's 2022 report gives two reasons: resources with higher marginal costs are dispatched as load approaches peak, and tight conditions that cause the ORDC to produce price adders become more frequent as load rises. [e15] The 2023 report again found a positive correlation with load. [e14]

## ERCOT context

The IMM reported that the 2025 average implied heat rate was almost 28% lower than 2024 and the lowest annual average of the last five years, now in line with the marginal heat rate of ERCOT gas plants. [e3] It describes this as in line with expectations based on ERCOT's generation fleet and as a sign of a more competitive market. [e12] The same report says the average daily natural gas index price rose 61% in 2025, so the lower implied heat rate came with higher fuel prices. [e11]

The year-by-year record in the IMM text: 2021 and 2023 were elevated (Winter Storm Uri and ECRS-related issues), and 2024 was considerably lower than both but still roughly 30% higher than 2020 and 2022 and noticeably higher than the gas fleet's marginal heat rate would imply, which the IMM attributes to price spikes that were more impactful relative to fuel prices. [e5][e10] In 2023 the sharp rise in June, August and September was, per the IMM, almost entirely due to artificial shortages caused by the implementation of ECRS. [e13] In 2021 the IMM found it varied substantially among zones, particularly in February during extreme cold. [e17] Excluding February, the IMM found it mostly lower than in 2020, which it attributed to more coal output given high gas prices and more conservative operations in the latter half of the year. [e16]

For one analysis the IMM defines a real-time price spike as a 15-minute interval where the load-weighted average energy price exceeds an implied heat rate of 18 multiplied by the Fuel Index Price. [e8] ERCOT's FIP is a Katy Hub gas index. [e7]

On exchanges, ICE lists an ERCOT Panhandle Heat Rate contract whose final settlement multiplies the heat rate agreed at the transaction by the NYMEX last-day settlement price for the delivery month. [e21] That is a traded heat-rate product, and the saved ICE page does not call it an implied heat rate or say how the IMM measure relates to it.

## Key facts

- Implied heat rate = power price divided by fuel price (IMM). [e1][e2]
- 2025 average was almost 28% below 2024 and the lowest annual average of the last five years; the average daily gas index price was up 61% in 2025. [e3][e11]
- 2024 was roughly 30% above 2020 and 2022 (IMM), blamed on price spikes. [e10]
- Wind and solar lower it; shortage pricing raises it. [e4]
- It is positively correlated with load level (IMM, 2022 and 2023 reports). [e15][e14]
- The IMM's price-spike threshold is a heat rate of 18 times the FIP, applied to 15-minute intervals. [e8]

## Say it like this

(Guidance) The implied heat rate is the power price expressed in gas terms, so it shows whether power is expensive or cheap relative to the fuel behind it. A reading above what gas plants actually need can point to scarcity pricing rather than fuel costs.

## Common confusion

It is not a unit's heat rate. A unit's heat rate is its efficiency, whereas the implied heat rate is a market ratio and is affected by hours at or below $0 per MWh and by shortage-pricing hours. [e6][e4] Nor is it a spark spread: the spread is a dollar difference that uses a heat rate as an input, while the implied heat rate is the ratio itself. [e20][e1]

## Questions

### Why did the implied heat rate fall in 2025?

The IMM says the 2025 average fell almost 28% from 2024 to the lowest in five years, and that price spikes, which have elevated the implied marginal heat rate in recent years, had a larger effect relative to fuel prices in 2023 and 2024 than in 2025. [e3]

### What pushes the implied heat rate above a gas plant's actual heat rate?

Shortage pricing that puts prices above gas marginal cost for hundreds of hours a year. [e4]

### Does a high implied heat rate mean a competitive or uncompetitive market?

The IMM says a high value signals a less competitive market, where even inefficient units can profit. [e1]

### Why divide price by gas price at all?

Because real-time prices are driven largely by gas prices, dividing out the fuel isolates the part of the price movement related to other factors. [e18]

### Why does the implied heat rate rise with load?

In its 2022 report the IMM gives two reasons: higher-marginal-cost resources are dispatched as load approaches peak, and ORDC adders occur more often as load rises. [e15]

### What if gas prices jump 61% but power prices rise less?

(Guidance, illustrative) The ratio falls. In 2025 the IMM reported a 61% increase in the average daily gas index price alongside an implied heat rate almost 28% lower than 2024. [e11][e3]

### Why was 2023 so high in summer months?

The IMM says the June, August and September increases were almost entirely due to artificial shortages caused by the ECRS implementation. [e13]

## Open items

- The 2025 report text divides by "the fuel price" without naming the index; the saved text does not state whether it is a Katy-based FIP or Henry Hub. The 2022 to 2024 reports say "natural gas price".
- The annual implied heat rate values (2021-2025) are in chart or table cells whose OCR labels are garbled (for example a 2023 report table lists ERCOT 23.0, 12.8 and 29.4 beside gas prices of $7.30, $5.84 and $2.22 without clean year headers); no annual number is cited until the column years can be confirmed.
- How traders use implied heat rate in forward pricing or heat-rate call options is not in the saved sources beyond the ICE contract settlement text; the ICE page does not describe how a traded heat rate is chosen.
