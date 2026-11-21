---
id: sc-dam-premium-flip
name: "Scenario: When DAM Clears Below RT"
aliases: [DAM premium flip, negative DART, real-time premium, DA below RT]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading]
as_of: 2026-11-21
depth: deep
links:
  - to: dart-spread
    type: measures
    note: Day-ahead and real-time prices should converge when trading barriers are low, information is good and both markets reflect the network. [e5]
  - to: dam
    type: used-in
    note: Day-ahead energy and AS awards are financial positions settled against real time. [e15]
  - to: rtm
    type: contrasts-with
    note: In July 2022 real-time prices diverged higher than day-ahead prices. [e4]
  - to: virtual-bids
    type: used-in
    note: Virtual bids and offers are location-specific transactions submitted as a hedge or for speculation, and participants can arbitrage predictable DA-RT differences. [e11][e5]
  - to: ptp-obligation
    type: related
    note: PTPs received 10.9% more in real time than their day-ahead purchase cost in 2025. [e14]
  - to: net-load
    type: affects
    note: The IMM reports that by 2025 the average net load forecast error (eight hours ahead of real time) was about 452 MW, and forecasts still under-forecast IRR generation and over-forecast load. [e10][e17]
  - to: congestion
    type: related
    note: Day-ahead congestion can be under-priced relative to real time, as in August 2023. [e9]
  - to: energy-storage-resource
    type: related
    note: Storage with depleted SOC must buy back day-ahead sales at the real-time price. [e12]
  - to: ecrs
    type: related
    note: The IMM blamed the June-August 2023 DA-RT divergence on artificial real-time price spikes from excessive ECRS procurement. [e21]
  - to: rtc-b
    type: affects
    note: Since RTC, day-ahead AS awards are financial, virtual AS has been allowed since December 6, 2025, and the early-RTC AS day-ahead premium was very high. [e27][e26][e29]
evidence:
  - id: e1
    source: imm-som-2021
    locator: "Day-Ahead Market Performance, day-ahead energy prices"
    quote: "Day-ahead prices averaged $157 per MWh in 2021, while real-time prices averaged $160 per MWh.63 This divergence was a change from the stability in 2020, which occurred throughout the year but especially in February because of the effects of Winter Storm Uri."
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
  - id: e17
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 introduction"
    quote: "Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time."
  - id: e18
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The relative instability of real-time prices and persistence of tight conditions increased the risk premium associated with day-ahead hedges."
  - id: e19
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The average absolute difference between day-ahead and real-time prices was $52.70 per MWh in 2021, a sharp increase from $11.60 in 2020, $27.63 MWh in 2019 and $16.21 in 2018, respectively."
  - id: e20
    source: imm-som-2021
    locator: "Day-Ahead Market Performance (2021 report)"
    quote: "The largest absolute difference primarily occurred in February, an astonishing $447.15, as expectations were rendered virtually meaningless as shortage conditions resulted in rolling blackouts."
  - id: e21
    source: imm-som-2023
    locator: "Day-Ahead Market Performance (2023 report)"
    quote: "Price convergence was reasonably good in all months of 2023 except June through August, when the divergence between day-ahead and real-time prices were relatively high. These divergences were largely due to the artificial realtime price spikes caused by the excessive procurements of ECRS and the artificial shortages these procurements caused, which are very difficult to predict in the day-ahead timeframe."
  - id: e22
    source: imm-som-2022
    locator: "Appendix, Day-Ahead Market Performance, A. Prices and Convergence (2022 report)"
    quote: "Although the average dayahead and real-time prices were similar in all zones, the average absolute difference in the Houston zone was the largest. This trend is explained by wide swings in Houston zone prices, the result of transmission congestion in the area related to high load in real-time."
  - id: e23
    source: imm-som-2023
    locator: "Appendix, Day-Ahead Market Performance, A. Day-Ahead Market Prices and Convergence (2023 report)"
    quote: "Although the average day-ahead and real-time prices were similar in all zones, the average absolute difference in the West zone was the largest. This trend is explained by wide swings in West zone prices resulting from transmission congestion in the area that typically occurs at times when wind energy output is low."
  - id: e24
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (OCR)"
    quote: "Some of this low participation may reflect participants’ response to the imbalance risk of taking day-ahead forward positions, particularly for intermittent resources and duration-limited energy storage resources. If changes in weather conditions or a depleted state of charge prevent these resources from delivering on their day-ahead positions, they must buy back the position at the real-time price."
  - id: e25
    source: imm-som-2025
    locator: "Appendix, Table A2 (page A-5, OCR)"
    quote: "Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420"
  - id: e26
    source: imm-som-2025
    locator: "Appendix, section B (page A-4, OCR)"
    quote: "Since December 6, 2025, the day-ahead market has also allowed transactions in virtual AS, i.e., strictly financial positions that are not associated with any physical resources."
  - id: e27
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT (page A-4 (OCR))"
    quote: "In the previous market design, AS awards from the day-ahead market effectively created a physical obligation to provide reserves in real time. With the implementation of RTC, AS awards in the day-ahead market now function as financial positions, like energy awards."
  - id: e28
    source: imm-som-2025
    locator: "Appendix, section B (page A-5, OCR)"
    quote: "Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices. We expect this premium to diminish over the year and to be significantly lower in the 2026 annual average."
  - id: e29
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT"
    quote: "Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium."
  - id: e30
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 training deck (tier 2), slide 22, scenario: How's it settled? (energy offer, 60 MW awarded, 50 MW provided)"
    quote: "Paid 60 MW at the DAM Energy Price Charged 10 MW at the Real-Time Energy Price"
  - id: e31
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B"
    quote: "Price convergence between the day-ahead and real-time markets is important because it leads to more efficient commitment of resources for use in real-time."
  - id: e32
    source: imm-som-2022
    locator: "Day-Ahead Market Performance (2022 report)"
    quote: "The average absolute difference between day-ahead and real-time prices was $33.30 per MWh in 2022, much lower than the $85 per MWh in 2021 caused by Uri."
  - id: e33
    source: ercot-summer-2026-review
    locator: "Slide 14, Key Takeaway on real-time prices"
    quote: "Real-Time prices were lower in summer 2026 than 2024 and 2025 due to higher supply particularly during day light hours."
  - id: e34
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e35
    source: imm-som-2024
    locator: "Executive Summary, Day-Ahead Market (2024 report)"
    quote: "Dayahead prices averaged $31 per MWh in 2024, reflecting a modest premium over the $29 average price produced by the real-time market."
  - id: e36
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, C.1 (page 74 OCR)"
    quote: "Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market."
---

## Definition

This scenario is about the times when day-ahead prices settle below real-time prices instead of at their usual small premium; in 2021, for example, day-ahead prices averaged $157/MWh while real-time prices averaged $160/MWh, a divergence the IMM says was especially marked in February because of Winter Storm Uri. [e1]

## How it works

The normal state is a small day-ahead premium. The IMM says the day-ahead market "generally" gives generators a risk premium as well as revenue certainty. [e7] In 2023 day-ahead averaged $58/MWh against $51/MWh in real time, which the IMM called a modest risk premium. [e3] In 2024 day-ahead averaged $31/MWh against $29/MWh in real time. [e35] In 2025 the average premium was $1.17/MWh. [e6]

Prices should converge when trading barriers are low, participants have good information about real time, and both markets model the transmission network accurately; then participants can arbitrage predictable gaps away. [e5] Convergence matters because it leads to more efficient commitment of resources for real time. [e31] A flip is consistent with real time turning out tighter than the day-ahead market expected. [e2] In July 2022 real-time prices rose above day-ahead because of sustained extreme heat and some day-ahead under-forecasting of demand. [e4] In 2021 the gap was largest in the tight months, when real-time prices were higher and ERCOT moved to more conservative operations. [e2]

Some real-time spikes are hard to see coming. The IMM says June-August 2023 divergence was largely due to artificial real-time price spikes and shortages caused by excessive ECRS procurement, which are very difficult to predict day-ahead. [e21] Congestion can flip too: in 2023 day-ahead congestion was priced lower than real-time congestion, especially in the high-congestion periods of August. [e9] By zone, the IMM found the largest average absolute differences in Houston in 2022 (congestion with high real-time load) and in the West in 2023 (congestion when wind output is low). [e22][e23]

The day-ahead market is financial, so DA-RT gaps become cash. Energy and AS bought or sold day-ahead are settled against real-time prices for any imbalance. [e15] In ERCOT's training example, a QSE awarded a 60 MW day-ahead offer that delivers only 50 MW is paid 60 MW at the DAM price and charged 10 MW at the real-time price. [e30] The IMM says low day-ahead participation may partly reflect this imbalance risk for intermittent resources and duration-limited storage, which must buy back undelivered positions at the real-time price. [e24] Virtual bids and offers are location-specific trades used as hedges or for speculation. [e11]

RTC changed the AS side. Under RTC, day-ahead AS awards are financial positions like energy awards, where before they effectively created a physical obligation to provide reserves. [e27] Virtual AS has been allowed in the DAM since December 6, 2025. [e26] The IMM says the day-ahead AS premium was very high in the early days of RTC, with two events accounting for a disproportionate share. [e29]

## Key facts

- 2021: day-ahead averaged $157/MWh, real-time $160/MWh (annual averages that include the Winter Storm Uri divergence in February); the average absolute difference was $52.70/MWh, with February at $447.15. [e1][e19][e20]
- 2023: day-ahead $58/MWh, real-time $51/MWh, a modest premium; June-August divergence was tied to ECRS-driven real-time spikes. [e3][e21]
- 2024: day-ahead $31/MWh, real-time $29/MWh. [e35]
- 2025: average day-ahead premium $1.17/MWh, average absolute difference $12/MWh, the low spread reflecting fewer price spikes. [e6]
- Early RTC (the IMM's Table A2 window, December 2025 through February 2026): day-ahead energy averaged $50.21/MWh against $37.03/MWh in real time, with AS products showing much larger percentage premiums. [e25]
- The IMM's average net load forecast error, measured eight hours ahead of real time, fell to about 452 MW in 2025, but forecasts still under-forecast renewables and over-forecast load. [e10][e17]
- PTP obligations earned 10.9% more in real time than their day-ahead cost in 2025. [e14]
- The day-ahead market cleared 62% of real-time load in 2025, against more than 90% in other US RTOs. [e16]

## Scenarios

### Over the past three weeks North Hub day-ahead has settled below real-time on average. Why could this happen, and what would you do?

- First check whether it is a real pattern. A small average can hide large daily swings, so look at the average absolute daily difference too. [e8]
- The usual state is a modest day-ahead premium, so a run of real-time premiums can mean real time is coming in tighter than day-ahead expected. [e7][e6][e2]
- Look at weather and load forecasts. July 2022 is the textbook case: sustained heat and day-ahead under-forecasting of demand pushed real-time above day-ahead. [e4]
- Check the net load forecast bias. In 2025 forecasts (which the IMM measures eight hours ahead of real time) tended to over-forecast load and under-forecast renewables. [e10][e17]
- (Reasoning) That bias makes real time look looser than day-ahead expected, so if it reverses (load comes in above forecast, renewables below), real time tends to settle higher.
- Check reserves policy. In 2023 the IMM traced summer divergence to real-time spikes from excessive ECRS procurement, which are hard to predict day-ahead. [e21]
- Check congestion. In 2023 day-ahead under-priced real-time congestion, especially in August. [e9]
- Check storage. Batteries that sell day-ahead but run low on charge must buy back the position at the real-time price, and in summer 2026 ERCOT saw evening SOC exhaustion all summer. [e12][e34]
- Check the season's backdrop. ERCOT says summer 2026 real-time prices were lower than in 2024 and 2025 because of higher supply, particularly in daylight hours, so a real-time premium that summer would point to the evening rather than the day. [e33]
- If the pattern is predictable, arbitrage should close it; virtual bids and offers are location-specific transactions submitted as a hedge or for speculation. [e5][e11]
- Size the trade for the tail: the IMM says the low 2025 spread reflected fewer price spikes, so spikes matter for the spread. [e6]
- Suppose (illustrative): you buy 25 MW at North Hub day-ahead for HE 20 at $60/MWh and real time settles at $140/MWh. The virtual earns 25 × $80 = $2,000 for that hour; if real time had settled at $40, it would lose $500.

### Variant: in the first weeks after RTC go-live, day-ahead AS prices clear far above real-time AS prices. Is that the same problem in reverse?

- It is the opposite sign: a day-ahead premium, not a real-time one. In the IMM's early-RTC table, RRS averaged $3.30 day-ahead against $0.41 in real time, and ECRS $3.67 against $0.71. [e25]
- The cause was different. Day-ahead AS awards became financial positions under RTC, but virtual AS offers only arrived on December 6, 2025, so physical-resource offers drove the elevated prices. [e27][e28]
- Two events dominate: excluding RegDown, December 5, 2025 and Winter Storm Fern (January 21-27, 2026) account for 57-75% of the premium for energy and up-reserve products. [e13]
- The IMM expected the premium to diminish and be significantly lower in the 2026 annual average. [e28] (Reasoning) A trader would check whether virtual AS sellers have entered and whether the premium is spread across days or concentrated in a few events.

## Questions

### Why is the day-ahead price usually higher than real time?

The day-ahead market gives revenue certainty and generally a risk premium to generators. [e7] (Guidance) Buyers pay a little more to lock in a price and avoid real-time spikes.

### In 2021 real time averaged above day-ahead, yet the IMM said the day-ahead risk premium increased. How can both be true?

The IMM wrote that unstable real-time prices and persistent tight conditions increased the risk premium associated with day-ahead hedges, while annual averages still showed real time at $160/MWh against $157/MWh day-ahead, with February's absolute difference at $447.15/MWh; the IMM's 2022 report puts the 2021 average absolute difference at $85/MWh and attributes it to Uri. [e18][e1][e20][e32] (Reasoning) A risk premium is what buyers are willing to pay before the fact; the realized annual average includes Uri-scale real-time outcomes that no day-ahead price anticipated, so a higher premium and a negative realized DART can coexist. The IMM does not spell this out.

### Why might a real-time premium persist instead of being arbitraged away?

Arbitrage needs low barriers, good information and accurate network models. [e5] The IMM says some participants avoid day-ahead positions because of imbalance risk for intermittent and duration-limited resources. [e24] Some spikes, like the 2023 ECRS-driven ones, are very difficult to predict day-ahead. [e21] (Reasoning) If the cause is not predictable, there is nothing systematic to arbitrage.

### Which measure should you watch, the average DART or the absolute difference?

Both. The average shows whether persistent, predictable differences exist; the average absolute daily difference captures variation that can be large even when prices converge on average. [e8] In 2025 the premium averaged $1.17/MWh while the absolute difference was $12/MWh. [e6]

### Did RTC change DART behaviour?

The IMM says the day-ahead AS premium was very high in the early days of RTC and that, excluding RegDown, elevated day-ahead prices on December 5, 2025 and during Winter Storm Fern on January 21-27, 2026 account for 57-75% of the average day-ahead premium for energy and up-reserve products. [e13][e29] Virtual AS has been allowed since December 6, 2025, which the IMM expects to bring the AS premium down. [e26][e28]

### What forces push DA and RT back together?

Low trading barriers, good information and accurate network models let participants arbitrage predictable differences. [e5] Virtual bids and offers are location-specific transactions submitted as a hedge or for speculation. [e11] Participants also use day-ahead PTP obligations to hedge congestion and real-time price exposure. [e36]

## Say it like this

(Guidance) Day-ahead usually carries a small premium because buyers pay for certainty. When real time keeps settling higher, the system is coming in tighter than forecast, through heat, forecast misses, reserve procurement, congestion or storage running out, and that is what virtual traders try to arbitrage, as long as the cause is predictable.

## Common confusion

(Guidance) A low average DART does not mean the two markets are close every day: the average absolute difference can stay large even when the average gap is small. [e8] A real-time premium does not mean the day-ahead market is broken; it can be one hot month, as in July 2022. [e4] Also, energy and AS can flip in opposite directions: in early RTC, AS carried a very large day-ahead premium. [e29]

## Open items

- The sources give annual and some monthly DART results but no 2026 month-by-month list of real-time premiums; the IMM's September 2026 monthly report shows DA vs RT prices only in charts that did not extract as numbers.
- No source quantifies how much virtual trading volume rises after a DART flip, or how fast convergence returns.
- The 2021 average absolute difference is $52.70/MWh in the 2021 report and $85/MWh in the 2022 report [e19][e32]; the saved text does not reconcile the two.
- Resolved 2026-11-21 (partly): the IMM's 2021 "increased risk premium" statement and the higher real-time average are both quoted; the reconciliation given is reasoning, not a source statement.
- Hub-specific DART figures (North vs. other hubs) are still not in extractable text; only 2022-2023 zonal absolute-difference statements are cited.
- Table A2's header prints "December 5, 2026, through February 2026"; the figures are read here as the early-RTC window (December 5, 2025 through February 2026) described in the surrounding text.
