---
id: dart-spread
name: DART Spread
aliases: [DART, DART premium, day-ahead real-time spread, DAM-RT spread, DA/RT convergence]
kind: metric
domain: pricing
level: 1
depth: deep
lenses: [trading, analyst, portfolio]
as_of: 2026-11-21
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
    note: A scenario on what it means when the DAM clears below real time. [e11]
  - to: rtc-b
    type: related
    note: With RTC, day-ahead awards are financial and virtual AS positions were allowed from December 6, 2025. [e7][e29]
  - to: winter-storm-jan-2026
    type: related
    note: The IMM says Winter Storm Fern (January 21-27, 2026) accounts for part of the early-RTC day-ahead premium. [e27]
  - to: winter-storm-uri
    type: related
    note: The IMM's February 2021 day-ahead versus real-time difference was the largest absolute difference it cites. [e14]
  - to: ancillary-services
    type: related
    note: Table A2 reports DART premiums for each AS product as well as energy. [e25]
  - to: congestion
    type: related
    note: Participants use PTP obligations to hedge congestion in the day-ahead market. [e32]
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
  - id: e11
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report), energy price convergence"
    quote: "Day-ahead prices averaged $157 per MWh in 2021, while real-time prices averaged $160 per MWh."
  - id: e12
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The relative instability of real-time prices and persistence of tight conditions increased the risk premium associated with day-ahead hedges."
  - id: e13
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The average absolute difference between day-ahead and real-time prices was $52.70 per MWh in 2021, a sharp increase from $11.60 in 2020, $27.63 MWh in 2019 and $16.21 in 2018, respectively."
  - id: e14
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The largest absolute difference primarily occurred in February, an astonishing $447.15, as expectations were rendered virtually meaningless as shortage conditions resulted in rolling blackouts."
  - id: e15
    source: imm-som-2022
    locator: "Day-Ahead Market Performance (2022 report), energy price convergence"
    quote: "Price convergence was good overall as day-ahead prices and real-time prices averaged $66 and $64 per MWh in 2022, respectively."
  - id: e16
    source: imm-som-2022
    locator: "Day-Ahead Market Performance (2022 report)"
    quote: "The average absolute difference between day-ahead and real-time prices was $33.30 per MWh in 2022, much lower than the $85 per MWh in 2021 caused by Uri."
  - id: e17
    source: imm-som-2022
    locator: "Day-Ahead Market Performance (2022 report)"
    quote: "While day-ahead prices were generally higher, real-time prices were significantly higher in July 2022 because of real-time price volatility caused by hot weather. The small overall divergence is expected because the day-ahead market allows participants to hedge the risk associated with real-time price volatility."
  - id: e18
    source: imm-som-2023
    locator: "Day-Ahead Market Performance (2023 report), energy price convergence"
    quote: "Price convergence was not very good overall as day-ahead prices and real-time prices simple averaged $58 and $51 per MWh in 2023, respectively."
  - id: e19
    source: imm-som-2023
    locator: "Day-Ahead Market Performance (2023 report)"
    quote: "Price convergence was reasonably good in all months of 2023 except June through August, when the divergence between day-ahead and real-time prices were relatively high. These divergences were largely due to the artificial realtime price spikes caused by the excessive procurements of ECRS and the artificial shortages these procurements caused, which are very difficult to predict in the day-ahead timeframe."
  - id: e20
    source: imm-som-2023
    locator: "Day-Ahead Market Performance (2023 report)"
    quote: "The average absolute difference between day-ahead and real-time prices was $38.59 per MWh in 2023, which was higher than previous non-Uri years ($27.63 MWh in 2019 and $16.21 in 2018)."
  - id: e21
    source: imm-som-2024
    locator: "Executive Summary (2024 report)"
    quote: "Prices in the dayahead market averaged $1.46 per MWh higher than in real-time, and the average absolute difference in prices was only $17.35 per MWh, the lowest since 2020."
  - id: e22
    source: imm-som-2024
    locator: "Executive Summary, Day-Ahead Market (2024 report)"
    quote: "Dayahead prices averaged $31 per MWh in 2024, reflecting a modest premium over the $29 average price produced by the real-time market."
  - id: e23
    source: imm-som-2022
    locator: "Appendix, Day-Ahead Market Performance, A. Prices and Convergence (2022 report)"
    quote: "Although the average dayahead and real-time prices were similar in all zones, the average absolute difference in the Houston zone was the largest. This trend is explained by wide swings in Houston zone prices, the result of transmission congestion in the area related to high load in real-time."
  - id: e24
    source: imm-som-2023
    locator: "Appendix, Day-Ahead Market Performance, A. Day-Ahead Market Prices and Convergence (2023 report)"
    quote: "Although the average day-ahead and real-time prices were similar in all zones, the average absolute difference in the West zone was the largest. This trend is explained by wide swings in West zone prices resulting from transmission congestion in the area that typically occurs at times when wind energy output is low."
  - id: e25
    source: imm-som-2025
    locator: "Appendix, Table A2 (page A-5, OCR)"
    quote: "Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420"
  - id: e26
    source: imm-som-2025
    locator: "Appendix, Table A2 header (page A-5, OCR)"
    quote: "Table A2: Convergence in Energy and AS Prices in the Day-Ahead and Real-Time Markets December 5, 2026, through February 2026 Average Average Average Day-Ahead Real-Time DART Price Price Premium $ per MWh $ per MWh %"
  - id: e27
    source: imm-som-2025
    locator: "Appendix, section B (page A-5, OCR)"
    quote: "Excluding RegDown, elevated day- ahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products."
  - id: e28
    source: imm-som-2025
    locator: "Appendix, section B (page A-5, OCR)"
    quote: "Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices. We expect this premium to diminish over the year and to be significantly lower in the 2026 annual average."
  - id: e29
    source: imm-som-2025
    locator: "Appendix, section B (page A-4, OCR)"
    quote: "Since December 6, 2025, the day-ahead market has also allowed transactions in virtual AS, i.e., strictly financial positions that are not associated with any physical resources."
  - id: e30
    source: imm-som-2025
    locator: "Appendix, section B (page A-4, OCR)"
    quote: "Ultimately, including virtual AS positions in the day-ahead market clearing should lead to greater convergence between day-ahead and real-time prices for AS."
  - id: e31
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (page 72 OCR)"
    quote: "This spread is low compared to prior years because fewer price spikes occurred"
  - id: e32
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, C.1 (page 74 OCR)"
    quote: "Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market."
  - id: e33
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (OCR)"
    quote: "Some of this low participation may reflect participants’ response to the imbalance risk of taking day-ahead forward positions, particularly for intermittent resources and duration-limited energy storage resources. If changes in weather conditions or a depleted state of charge prevent these resources from delivering on their day-ahead positions, they must buy back the position at the real-time price."
  - id: e34
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 training deck (tier 2), Point-to-Point Obligations"
    quote: "Hourly Financial instruments • Purchased at DAM price spread • Settled at Real-Time price spread"
  - id: e35
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 training deck (tier 2), scenario: How's it settled? (energy offer)"
    quote: "Paid 60 MW at the DAM Energy Price Charged 10 MW at the Real-Time Energy Price"
  - id: e36
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 training deck (tier 2), scenario: How's it settled? (energy bid)"
    quote: "Charged 60 MW at the DAM Energy Price Paid 10 MW at the Real-Time Energy Price"
  - id: e37
    source: np-04
    locator: "Section 4.6.3, Settlement for PTP Obligations Bought in DAM"
    quote: "ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e38
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (OCR)"
    quote: "The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025."
---

## Definition

The DART spread is the difference between the day-ahead (DA) and real-time (RT) price. The IMM tracks it as the DART premium, for example in its comparison of day-ahead and real-time prices for energy and each Ancillary Service. [e6][e2]

## How it works

The IMM looks at the average difference between day-ahead and real-time spot prices to see whether persistent, predictable gaps exist that participants should arbitrage. [e2] It also reports the average absolute difference between daily average day-ahead and real-time prices, because that can be large even when the prices converge on average. [e10]

Prices should converge when barriers to trading in either market are low, participants have enough information to form accurate expectations of real-time prices, and both markets reflect the physical limits of the transmission network, so that participants can arbitrage predictable differences. [e1] With RTC, day-ahead energy and Ancillary Services are strictly financial positions, with imbalances settled in real time. [e7]

Two measures matter: the signed average premium (DA minus RT) and the average absolute daily difference. The IMM reports both, and says the absolute difference captures variation in daily price differences, which may be large even if prices converge on average. [e10][e3]

### How a DART shows up in a position

In ERCOT's Forward Markets 101 training deck (tier 2), a QSE awarded 60 MW of day-ahead energy offer that provides only 50 MW is paid for 60 MW at the DAM price and charged for the 10 MW shortfall at the Real-Time price. [e35] A QSE awarded a 60 MW energy bid that consumes only 50 MW is charged 60 MW at the DAM price and paid for the 10 MW at the Real-Time price. [e36] The deck also describes PTP Obligations as hourly financial instruments purchased at the DAM price spread and settled at the Real-Time price spread. [e34] The Protocols settle a cleared PTP Obligation bid on the DAM price difference between the sink and the source Settlement Point. [e37]

## ERCOT context

The IMM treats convergence as important because it leads to more efficient commitment of resources for use in real time. [e5]

For energy, the spread has been small recently. In 2025 the average day-ahead premium was $1.17 per MWh, slightly lower than 2024, and the average absolute difference was only $12 per MWh, the lowest since 2020. [e3] The IMM attributes the low spread to fewer price spikes in 2025. [e31] In 2024 the day-ahead price averaged under $1.50 per MWh above real time, with an average absolute difference of $17.35 per MWh. [e4]

### By year

Earlier years from the IMM's annual reports, with the IMM's own explanations (not Protocol facts): [e11][e15][e18][e22]

- 2021: day-ahead prices averaged $157 per MWh and real-time $160; the IMM says instability of real-time prices and persistent tight conditions increased the risk premium on day-ahead hedges. [e11][e12]
- 2022: day-ahead averaged $66 and real-time $64; real-time was significantly higher in July because of price volatility from hot weather. [e15][e17]
- 2023: day-ahead averaged $58 and real-time $51 (simple averages); the IMM says the June-August divergences were largely due to artificial real-time price spikes from excessive ECRS procurement, which are very difficult to predict day-ahead. [e18][e19]
- 2024: day-ahead averaged $31 and real-time $29, a premium of $1.46 per MWh. [e22][e21]

### By location

The IMM's appendices describe zonal patterns: in 2022 the average absolute difference was largest in the Houston zone, which the IMM explains by wide swings in Houston prices from transmission congestion related to high real-time load. [e23] In 2023 it was largest in the West zone, which the IMM explains by congestion that typically occurs when wind output is low. [e24] The saved 2024 and 2025 IMM text does not give a comparable zone statement. 

### Ancillary Services under RTC

For Ancillary Services under RTC, the day-ahead premium was very high in the early days of RTC, and two events account for a disproportionate share of it. [e9] Table A2 (energy and AS, day-ahead versus real-time; its header prints the period as "December 5, 2026, through February 2026", while the report text places the start of RTC on December 5, 2025) reports: Energy $50.21 DA versus $37.03 RT, a 36% premium; Responsive $3.30 versus $0.41, 698%; NSRS $3.94 versus $1.10, 257%; Reg Up $3.57 versus $1.20, 197%; Reg Down $1.79 versus $1.13, 59%; ECRS $3.67 versus $0.71, 420%. [e25][e26] Excluding RegDown, elevated day-ahead prices on December 5, 2025 and during Winter Storm Fern on January 21-27, 2026 account for 57-75% of the average day-ahead premium for energy and up-reserve products. [e27] Virtual AS offers were allowed in the day-ahead market only from December 6, so physical-resource offers drove the elevated prices, and the IMM expects the premium to diminish and be significantly lower in the 2026 annual average. [e28][e29] The IMM also says that including virtual AS positions in the day-ahead clearing should lead to greater convergence between day-ahead and real-time AS prices. [e30]

A related two-location measure is PTP profitability: PTPs received 10.9% more in real time than their day-ahead purchase cost in 2025, up from 7.5% in 2024. [e8]

## Timeline

- 2021: average absolute difference $52.70 per MWh per the IMM's 2021 report, up from $11.60 in 2020; the largest absolute difference was in February (Winter Storm Uri). [e13][e14]
- 2022: $33.30 per MWh, described in the 2022 report as much lower than $85 for 2021. [e16]
- 2023: $38.59 per MWh. [e20]
- 2024: $17.35 per MWh, the lowest since 2020. [e4]
- 2025: $12 per MWh, the lowest since 2020; premium $1.17. [e3]
- December 6, 2025: virtual AS transactions become allowed in the day-ahead market with RTC. [e29]

## Key facts

- 2025 average DAM premium to RT: $1.17 per MWh; average absolute difference: $12 per MWh, the lowest since 2020. [e3]
- 2024 average DAM premium under $1.50 per MWh ($1.46 in the IMM's 2024 summary); average absolute difference: $17.35 per MWh. [e4][e21]
- With RTC, day-ahead energy and AS positions are financial, settled against real time. [e7]
- Early-RTC day-ahead AS premiums were very high; two events (December 5, 2025 and Winter Storm Fern) account for 57-75% of the premium for energy and up-reserve products, excluding RegDown. [e9][e27]
- PTPs earned 10.9% more in real time than their day-ahead cost in 2025. [e8]

## Say it like this

The DART spread is the gap between the day-ahead and real-time price. In 2024 and 2025 the average gap was small, a dollar or so per MWh, but daily gaps can still be large even when prices converge on average. [e3][e4]

## Common confusion

- A small average spread does not mean a small risk. The average absolute daily difference was $12 per MWh in 2025 even though the average premium was only $1.17. [e3] Daily price differences may be large even if prices converge on average, and the average absolute difference captures that variation. [e2][e10]
- A positive DART premium means day-ahead cleared above real time. It is not a profit on its own: a day-ahead position is financial and the imbalance settles in real time. [e7][e38]
- A percentage premium on a low-priced AS product can look huge (Responsive 698%) while the gap in Table A2 is $3.30 versus $0.41 per MWh. [e25]

## Questions

### Was the DAM higher or lower than real time in 2025?

Higher, on average, by $1.17 per MWh, slightly less than in 2024. [e3]

### What does the IMM say should make day-ahead and real-time prices converge?

Low barriers to trading, enough information to form accurate expectations of real-time prices, and markets that both reflect transmission limits, which let participants arbitrage predictable differences. [e1]

### What changed for day-ahead Ancillary Service prices with RTC?

With RTC, day-ahead energy and AS positions are strictly financial positions with imbalances settled in real time, and the early-RTC day-ahead AS premium was very high. [e7][e9]

### Why was the early-RTC AS premium so large, and will it persist?

The IMM says two events, December 5, 2025 and Winter Storm Fern, explain 57-75% of the premium for energy and up-reserve products (excluding RegDown), that physical-resource offers drove the prices because virtual AS offers were not yet in the DAM, and that it expects the premium to diminish. [e27][e28]

### Why was 2021 so different from 2024 and 2025?

In 2021 the IMM reports an average absolute difference of $52.70 per MWh and a February maximum tied to rolling blackouts, versus $17.35 in 2024 and $12 in 2025. [e13][e14][e4][e3] The IMM says tight conditions and unstable real-time prices raised the risk premium on day-ahead hedges in 2021, while 2025 had fewer price spikes. [e12][e31]

### What if real-time prices spike because of an operational practice rather than weather?

The IMM's 2023 report attributes the June-August divergence to artificial real-time spikes from excessive ECRS procurement, which are very difficult to predict day-ahead, so a day-ahead position bears that risk. [e19]

### Why might physical generation stay out of the day-ahead market, keeping a premium alive?

The IMM suggests (opinion) that imbalance risk for intermittent and duration-limited storage resources may explain part of the low participation. [e33]

## Scenarios

### Day-ahead cleared at $50 for a QSE's 60 MW offer, real-time averaged $37, and the Resource delivered 50 MW.

- Per ERCOT's training scenario, the QSE is paid for 60 MW at the DAM price and charged for the 10 MW shortfall at the real-time price. [e35]
- The seller benefits from a positive DART premium on the cleared quantity: the IMM's Table A2 shows the early-RTC energy average at $50.21 day-ahead versus $37.03 real-time. [e25]

## Open items

- The protocols saved here do not define "DART" or the DART spread; the term appears only in the IMM report's Table A2 and in np-04 settlement variable names. The definition above is built from the IMM text.
- Conflict: the IMM's 2021 report gives the 2021 average absolute day-ahead/real-time difference as $52.70 per MWh, while the 2022 report calls the 2021 figure $85 per MWh "caused by Uri". The saved text does not reconcile them (a with/without-Uri basis is possible but not stated). Both are quoted with their report year.
- Table A2's header prints "December 5, 2026, through February 2026"; the surrounding appendix text describes the early-RTC window from December 5, 2025 through February 2026. The saved text does not say which is intended; the figures should be read as the early-RTC window.
- The method for the DART premium percentage in Table A2 is not stated in the saved text (the percentages are not simply the ratio of the two averages in every row).
- DART by hub and by hour: the saved IMM 2024 and 2025 text gives no hub-level DART figures; only 2021-2023 zonal statements are quoted. The IMM's figure-based annual averages for 2025 are in a chart not extractable as text.
- Hub and Load Zone DART as used by traders (outside the IMM's system-wide averages) is not defined in any saved tier 1-2 source.
