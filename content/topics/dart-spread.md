---
id: dart-spread
name: DART Spread
aliases: [DART, DART premium, day-ahead real-time spread, DAM-RT spread, DA/RT convergence]
kind: metric
domain: pricing
level: 1
lenses: [trading, analyst, portfolio]
as_of: 2026-11-18
links:
  - to: dam
    type: related
    note: The DAM side of the spread is the day-ahead price, and the IMM calls the DAM's price edge over real time its premium. [e3]
  - to: rtm
    type: related
    note: The real-time side is the price that day-ahead positions are settled against. [e7]
  - to: virtual-bids
    type: related
    note: The IMM says participants can arbitrage predictable differences between day-ahead and real-time prices. [e1]
  - to: ptp-obligation
    type: related
    note: The IMM reports that PTPs received 10.9% more in real time than their day-ahead purchase cost in 2025. [e8]
  - to: spp
    type: measures
    note: The IMM looks at the average difference between day-ahead and real-time spot prices. [e2]
  - to: sc-dam-premium-flip
    type: related
    note: A scenario on what it means when the DAM clears below real time. [e3]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing"
    quote: "Prices should converge when: (1) barriers to purchases and sales in either market are low, (2) sufficient information is available for market participants to develop accurate expectations of real-time prices, and (3) both markets accurately reflect the physical limitations of the transmission network. These conditions allow market participants to arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence."
  - id: e2
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B"
    quote: "The average difference between day-ahead and real-time spot prices shows whether persistent, predictable differences exist that participants should arbitrage over time."
  - id: e3
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B, Figure 30 discussion"
    quote: "Compared to 2021 through 2023, the price spread between the day-ahead and real-time markets was relatively low in 2025. The average price premium in the day-ahead market was $1.17 per MWh, slightly lower than in 2024, but the average absolute price difference was only $12 per MWh, the lowest since 2020."
  - id: e4
    source: imm-som-2024
    locator: "Day-Ahead Market Performance, day-ahead energy prices"
    quote: "Price convergence was much better in 2024 compared to recent years. The average price for energy in the day-ahead market was less than $1.50 per MWh higher than in the real-time market and the average absolute difference in prices was only $17.35 per MWh, the lowest since 2020."
  - id: e5
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B"
    quote: "Price convergence between the day-ahead and real-time markets is important because it leads to more efficient commitment of resources for use in real-time."
  - id: e6
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT"
    quote: "Table A2 shows the average prices for energy and each AS product in the day-ahead and real-time markets, as well as the corresponding DART premium."
  - id: e7
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets"
    quote: "Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e8
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, PTP Profitability"
    quote: "Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024."
  - id: e9
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT"
    quote: "Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium."
  - id: e10
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B"
    quote: "It also shows the average absolute difference between the daily average day-ahead and real-time price. This measure captures variation in daily price differences, which may be large even if prices converge on average."
---

## Definition

The DART spread is the difference between the day-ahead (DA) and real-time (RT) price. The IMM tracks it as the DART premium, for example in its comparison of day-ahead and real-time prices for energy and each Ancillary Service. [e6][e2]

## How it works

The IMM looks at the average difference between day-ahead and real-time spot prices to see whether persistent, predictable gaps exist that participants should arbitrage. [e2] It also reports the average absolute difference between daily average day-ahead and real-time prices, because that can be large even when the prices converge on average. [e10]

Prices should converge when barriers to trading in either market are low, participants have enough information to form accurate expectations of real-time prices, and both markets reflect the physical limits of the transmission network, so that participants can arbitrage predictable differences. [e1] Day-ahead energy and Ancillary Services are now strictly financial positions, with imbalances settled in real time. [e7]

## ERCOT context

The IMM treats convergence as important because it leads to more efficient commitment of resources for use in real time. [e5]

For energy, the spread has been small recently. In 2025 the average day-ahead premium was $1.17 per MWh, slightly lower than 2024, and the average absolute difference was only $12 per MWh, the lowest since 2020. [e3] In 2024 the day-ahead price averaged under $1.50 per MWh above real time, with an average absolute difference of $17.35 per MWh. [e4]

For Ancillary Services under RTC, the day-ahead premium was very high in the early days of RTC, and two events account for a disproportionate share of it. [e9] A related two-location measure is PTP profitability: PTPs received 10.9% more in real time than their day-ahead purchase cost in 2025. [e8]

## Key facts

- 2025 average DAM premium to RT: $1.17 per MWh; average absolute difference: $12 per MWh, the lowest since 2020. [e3]
- 2024 average DAM premium under $1.50 per MWh; average absolute difference: $17.35 per MWh. [e4]
- Day-ahead energy and AS positions are financial, settled against real time. [e7]
- Early-RTC day-ahead AS premiums were very high; two events account for a disproportionate share. [e9]
- PTPs earned 10.9% more in real time than their day-ahead cost in 2025. [e8]

## Say it like this

The DART spread is the gap between the day-ahead and real-time price. In recent years the average gap has been small, a dollar or so per MWh, but daily gaps can still be large even when prices converge on average.

## Common confusion

A small average spread does not mean a small risk. The average absolute daily difference was $12 per MWh in 2025 even though the average premium was only $1.17. [e3] Also, the average difference between day-ahead and real-time prices can hide persistent or offsetting gaps, while the average absolute difference captures variation in daily price differences. [e2][e10]

## Questions

### Was the DAM higher or lower than real time in 2025?

Higher, on average, by $1.17 per MWh, slightly less than in 2024. [e3]

### What does the IMM say should make day-ahead and real-time prices converge?

Low barriers to trading, enough information to form accurate expectations of real-time prices, and markets that both reflect transmission limits, which let participants arbitrage predictable differences. [e1]

### What changed for day-ahead Ancillary Service prices with RTC?

Day-ahead energy and AS positions are now strictly financial positions with imbalances settled in real time, and the early-RTC day-ahead AS premium was very high. [e7][e9]

## Open items

- The protocols saved here do not define "DART" or the DART spread; the term appears only in the IMM report's Table A2 and in np-04 settlement variable names. The definition above is built from the IMM text.
- Deeper pass: DART by location (Hub vs Resource Node vs Load Zone) and by hour; the saved IMM figures are not legible in text form and were not quoted in this pass.
- Deeper pass: drivers of persistent premiums (day-ahead participation by physical resources, risk premia), and the Table A2 AS premium numbers.
- Deeper pass: the two events behind the early-RTC AS premium (December 5, 2025 and Winter Storm Fern) are described in the IMM appendix and could be linked to a case topic.
