---
id: implied-heat-rate
name: Implied Market Heat Rate
aliases: [implied heat rate, implied marginal heat rate, market heat rate]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
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
---

## Definition

The implied heat rate is the IMM's market-based indicator of the fuel efficiency a gas generator would need to break even at current electricity and natural gas prices, calculated by dividing the power price by the fuel price. [e1] In the 2024 report the IMM calls it the "implied marginal heat rate" and divides the real-time price of electricity by the natural gas price. [e2]

## How it works

A heat rate is normally a measure of a generating station's thermal efficiency in Btu per kilowatthour. [e6] The implied version turns that around: it divides the market power price by the gas price to get the heat rate that equates revenue from selling electricity with the cost of buying gas. [e1] The IMM reads a high value as a less competitive market where even inefficient units profit, and a low value as a market where only the most efficient generators are in the money. [e1]

Wind and solar push the number down by creating hundreds of hours at or below $0 per MWh, while shortage pricing pushes it up by creating hundreds of hours above gas marginal cost. [e4] The ORDC adder, which reflected reliability risk when reserves ran short, was discontinued in December 2025 with RTC. [e9]

## ERCOT context

The IMM reported that the 2025 average implied heat rate was almost 28% lower than 2024 and the lowest annual average of the last five years, now in line with the marginal heat rate of ERCOT gas plants. [e3] For 2024 it had been considerably lower than 2021 and 2023, years elevated by Winter Storm Uri and ECRS-related issues. [e5]

The IMM also uses an implied heat rate of 18 times the Fuel Index Price as its threshold for a real-time price spike. [e8] ERCOT's FIP is a Katy Hub gas index. [e7]

## Key facts

- Implied heat rate = power price divided by fuel price (IMM). [e1][e2]
- 2025 average was almost 28% below 2024 and the lowest of 2021-2025. [e3]
- Wind and solar lower it; shortage pricing raises it. [e4]
- The IMM's price-spike threshold is a heat rate of 18 times the FIP, applied to 15-minute intervals. [e8]

## Say it like this

(Guidance) The implied heat rate is the power price expressed in gas terms, so it shows whether power is expensive or cheap relative to the fuel behind it. A reading above what gas plants actually need can point to scarcity pricing rather than fuel costs.

## Common confusion

It is not a unit's heat rate. A unit's heat rate is its efficiency, whereas the implied heat rate is a market ratio and moves with price spikes, negative-price hours and gas prices. [e6][e4]

## Questions

### Why did the implied heat rate fall in 2025?

The IMM says the 2025 average fell almost 28% from 2024 to the lowest in five years, because price spikes had a smaller effect relative to fuel prices than in 2023 and 2024. [e3]

### What pushes the implied heat rate above a gas plant's actual heat rate?

Shortage pricing that puts prices above gas marginal cost for hundreds of hours a year. [e4]

### Does a high implied heat rate mean a competitive or uncompetitive market?

The IMM says a high value signals a less competitive market, where even inefficient units can profit. [e1]

## Open items

- The 2025 report text divides by "the fuel price" without naming the index; the saved text does not state whether it is a Katy-based FIP or Henry Hub.
- Deeper pass: the monthly and annual values in the figures (2021-2025) were not read from the OCR tables.
- Deeper pass: how traders use implied heat rate in forward pricing or heat-rate call options is not in the saved sources.
