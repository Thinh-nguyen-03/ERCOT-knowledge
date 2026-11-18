---
id: sc-dam-premium-flip
name: "Scenario: When DAM Clears Below RT"
aliases: [DAM premium flip, negative DART, real-time premium, DA below RT]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading]
as_of: 2026-11-18
links:
  - to: dart-spread
    type: measures
    note: The DART spread is the measure that flips sign in this scenario. [e5]
  - to: dam
    type: used-in
    note: Day-ahead energy and AS awards are financial positions settled against real time. [e15]
  - to: rtm
    type: contrasts-with
    note: Real-time prices diverged above day-ahead in tight months such as July 2022. [e4]
  - to: virtual-bids
    type: used-in
    note: Virtual bids and offers are the tool participants use to hedge or arbitrage predictable DA-RT differences. [e11]
  - to: ptp-obligation
    type: related
    note: PTP obligations profit when real-time congestion exceeds what day-ahead priced in. [e14]
  - to: net-load
    type: affects
    note: Net load forecast errors are a main source of DA-RT surprises. [e10]
  - to: congestion
    type: related
    note: Day-ahead congestion can be under-priced relative to real time, as in August 2023. [e9]
  - to: energy-storage-resource
    type: related
    note: Storage with depleted SOC must buy back day-ahead sales at the real-time price. [e12]
evidence:
  - id: e1
    source: imm-som-2021
    locator: "Day-Ahead Market Performance, day-ahead energy prices"
    quote: "Day-ahead prices averaged $157 per MWh in 2021, while real-time prices averaged $160 per MWh."
  - id: e2
    source: imm-som-2021
    locator: "Day-Ahead Market Performance, day-ahead energy prices"
    quote: "Price divergence was pronounced in February, April, the summer months and October in 2021, when conditions were tighter, real-time prices were higher, and ERCOT began a more conservative approach to operations, creating less price convergence on average for the year than recent years."
  - id: e3
    source: imm-som-2023
    locator: "Executive Summary, Day-Ahead and Ancillary Services Markets"
    quote: "Day-ahead prices averaged $58 per MWh in 2023. This price closely aligns with prices from the real-time market, $51 per MWh, while still reflecting a modest risk premium."
  - id: e4
    source: imm-som-2022
    locator: "Appendix: Day-Ahead Market Performance, A. Day-Ahead Market Prices and Convergence"
    quote: "July saw the highest prices overall, with real-time prices diverging higher than day-ahead prices because of the exceptionally high and sustained temperatures throughout the month and some instances of under-forecasting demand day-ahead."
  - id: e5
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing"
    quote: "Prices should converge when: (1) barriers to purchases and sales in either market are low, (2) sufficient information is available for market participants to develop accurate expectations of real-time prices, and (3) both markets accurately reflect the physical limitations of the transmission network. These conditions allow market participants to arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence."
  - id: e6
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred"
  - id: e7
    source: imm-som-2022
    locator: "Executive Summary, RUC discussion"
    quote: "Such incentives are not needed because the day-ahead market provides revenue certainty and generally a risk premium to generators."
  - id: e8
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B"
    quote: "It also shows the average absolute difference between the daily average day-ahead and real-time price. This measure captures variation in daily price differences, which may be large even if prices converge on average."
  - id: e9
    source: imm-som-2023
    locator: "Executive Summary, Day-Ahead Congestion Costs"
    quote: "Congestion priced in the day-ahead market was lower than in in the real-time market, indicating that some of the congestion was not well predicted day-ahead, particularly the high congestion periods in August."
  - id: e10
    source: imm-som-2025
    locator: "Market Operations chapter, net load forecast error (Figure 50 discussion)"
    quote: "By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load."
  - id: e11
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section C, Day-Ahead Market Activity"
    quote: "an energy-only, or virtual, bid or offer, which is a locationspecific transaction submitted either as a hedge or for speculative purposes."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (p. iv)"
    quote: "If changes in weather conditions or a depleted state of charge prevent these resources from delivering on their day-ahead positions, they must buy back the position at the real-time price."
  - id: e13
    source: imm-som-2025
    locator: "Appendix, B. Convergence between DAM and RT"
    quote: "Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products."
  - id: e14
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, PTP Profitability"
    quote: "Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets"
    quote: "Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e16
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market."
---

## Definition

This scenario is about the times when day-ahead prices settle below real-time prices instead of at their usual small premium; in 2021, for example, day-ahead prices averaged $157/MWh while real-time prices averaged $160/MWh. [e1]

## How it works

The normal state is a small day-ahead premium. The IMM says the day-ahead market "generally" gives generators a risk premium as well as revenue certainty. [e7] In 2023 day-ahead averaged $58/MWh against $51/MWh in real time, which the IMM called a modest risk premium. [e3] In 2025 the average premium was $1.17/MWh. [e6]

Prices should converge when trading barriers are low, participants have good information about real time, and both markets model the transmission network accurately; then participants can arbitrage predictable gaps away. [e5] A flip happens when real time turns out tighter than the day-ahead market expected. In July 2022 real-time prices rose above day-ahead because of sustained extreme heat and some day-ahead under-forecasting of demand. [e4] In 2021 the gap was largest in the tight months, when real-time prices were higher and ERCOT moved to more conservative operations. [e2]

Congestion can flip too. In 2023 day-ahead congestion was priced lower than real-time congestion, especially in the high-congestion periods of August, meaning some of it was not predicted. [e9]

The day-ahead market is financial, so DA-RT gaps become cash. Energy and AS bought or sold day-ahead are settled against real-time prices for any imbalance. [e15] Virtual bids and offers are location-specific trades used as hedges or for speculation. [e11]

## Key facts

- 2021: day-ahead averaged $157/MWh, real-time $160/MWh. [e1]
- 2023: day-ahead $58/MWh, real-time $51/MWh, a modest premium. [e3]
- 2025: average day-ahead premium $1.17/MWh, average absolute difference $12/MWh, the low spread reflecting fewer price spikes. [e6]
- Average net load forecast error fell to about 452 MW in 2025, but forecasts still under-forecast renewables and over-forecast load. [e10]
- PTP obligations earned 10.9% more in real time than their day-ahead cost in 2025. [e14]
- The day-ahead market cleared 62% of real-time load in 2025, against more than 90% in other US RTOs. [e16]

## Scenarios

### Over the past three weeks North Hub day-ahead has settled below real-time on average. Why could this happen, and what would you do?

- First check whether it is a real pattern. A small average can hide large daily swings, so look at the average absolute daily difference too. [e8]
- The usual state is a modest day-ahead premium, so a run of real-time premiums means real time is coming in tighter than day-ahead expected. [e7][e6]
- Look at weather and load forecasts. July 2022 is the textbook case: sustained heat and day-ahead under-forecasting of demand pushed real-time above day-ahead. [e4]
- Check the net load forecast bias. In 2025 forecasts tended to over-forecast load and under-forecast renewables. [e10]
- (Reasoning) That bias makes real time look looser than day-ahead expected, so if it reverses (load comes in above forecast, renewables below), real time tends to settle higher.
- Check congestion. In 2023 day-ahead under-priced real-time congestion, especially in August. [e9]
- Check storage. Batteries that sell day-ahead but run low on charge must buy back the position at the real-time price. [e12]
- If the pattern is predictable, arbitrage should close it: virtual bids (buy day-ahead, sell back in real time) are the tool. [e5][e11]
- (Reasoning) Size the trade for the tail. A real-time premium usually comes from a few spike intervals, so the position loses on most days and wins on a few.
- Suppose (illustrative): you buy 25 MW at North Hub day-ahead for HE 20 at $60/MWh and real time settles at $140/MWh. The virtual earns 25 × $80 = $2,000 for that hour; if real time had settled at $40, it would lose $500.

## Questions

### Why is the day-ahead price usually higher than real time?

The day-ahead market gives revenue certainty and generally a risk premium to generators. [e7] (Guidance) Buyers pay a little more to lock in a price and avoid real-time spikes.

### Did RTC change DART behaviour?

In the first months of RTC (December 5, 2025 through February 2026) day-ahead premiums for energy and AS were unusually high, but two events, go-live day and Winter Storm Fern, explained 57-75% of the premium. [e13]

### What forces push DA and RT back together?

Low trading barriers, good information and accurate network models let participants arbitrage predictable differences. [e5] Virtual trades are the main tool. [e11]

## Say it like this

(Guidance) Day-ahead usually carries a small premium because buyers pay for certainty. When real time keeps settling higher, the system is coming in tighter than forecast, through heat, forecast misses, congestion or storage running out, and that is what virtual traders try to arbitrage.

## Common confusion

(Guidance) A low average DART does not mean the two markets are close every day: the average absolute difference can stay large even when the average gap is small. [e8] Also, a real-time premium does not mean the day-ahead market is broken; it can be one hot month, as in July 2022. [e4]

## Open items

- The sources give annual and some monthly DART results but no 2026 month-by-month list of real-time premiums.
- No source quantifies how much virtual trading volume rises after a DART flip, or how fast convergence returns.
- Deeper pass: the IMM's 2021 text says tight conditions "increased the risk premium associated with day-ahead hedges" even though real time averaged higher that year; how to reconcile the two is not explained.
- Deeper pass: hub-specific DART figures (North vs. other hubs) are in figures that did not extract as text.
