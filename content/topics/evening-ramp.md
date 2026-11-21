---
id: evening-ramp
name: Evening Ramp / Duck Curve
aliases: [evening ramp, duck curve, solar down-ramp, net load ramp]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: net-load
    type: related
    note: The net load peak is the hour the evening ramp produces; see that topic for the definition and peak-hour data. [e1]
  - to: solar-generation
    type: causes
    note: The IMM links the sharp evening net load ramp to increasing solar entry and the evening solar ramp down. [e4][e1]
  - to: wind-generation
    type: related
    note: Wind output tends to ramp up in the evening and was key to serving demand on most summer 2023 days. [e1][e6]
  - to: energy-storage-resource
    type: related
    note: ERCOT's summer 2026 review says more solar and ESR capacity lets ESRs charge during the day and later discharge over the evening solar ramp. [e10]
  - to: rtc-b
    type: related
    note: The IMM argues a multi-interval real-time market, which looks beyond the current five-minute interval, would help with the duck curve. [e4][e5]
  - to: sced
    type: related
    note: SCED often dispatches quick-start gas plants or high-offer ESRs during the evening ramp-down. [e2]
  - to: negative-prices
    type: related
    note: ERCOT says more solar and ESR capacity tends to result in lower energy prices during the day. [e10]
  - to: non-spin
    type: related
    note: ERCOT's AS methodology effective 2026-01-01 says net load ramp risk should be accounted for in determining Non-Spin requirements. [e20]
  - to: wind-solar-forecasts
    type: related
    note: The IMM's 2024 report says forecast errors for intermittent renewables directly impact thermal unit commitment, and that over-forecasting is particularly challenging during hot summer evenings. [e15]
  - to: ordc
    type: related
    note: The IMM says SCED often dispatches quick-start gas plants or ESRs with high-priced energy offer curves during the evening ramp-down, which results in frequent and predictable price spikes. [e2]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 3. Prices by Time of Day"
    quote: "The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.). This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up."
  - id: e2
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day. During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes. Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 22% in 2024."
  - id: e3
    source: imm-som-2025
    locator: "Executive Summary, Energy Storage discussion"
    quote: "ESRs are particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp. In recent years, as solar development increased dramatically, these ramp periods corresponded with a high frequency of price spikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT’s capability to manage the system’s ramp needs."
  - id: e4
    source: imm-som-2025
    locator: "Recommendations, 2022-1: Implement a Multi-Interval Real-Time Market"
    quote: "It would help address the sharp evening net load ramp from increasing solar entry, often referred to as the \"duck curve,\" by pre-positioning slow-ramping resources earlier and reducing reliance on expensive ESRs and quick-start units."
  - id: e5
    source: imm-som-2025
    locator: "Recommendations, 2022-1: Implement a Multi-Interval Real-Time Market"
    quote: "ERCOT’s real-time market currently considers a single interval and optimizes dispatch instructions based only on forecasted system conditions over the next five minutes."
  - id: e6
    source: ercot-summer-2023-review
    locator: "Key Takeaway, Wind During Conservation Appeal Days slide"
    quote: "Key Takeaway: Wind generation ramping up in the evenings was key to serving demand on most days, however low wind output was a primary factor contributing to tight conditions on the conservation appeal days."
  - id: e7
    source: ercot-summer-2026-review
    locator: "Slide 10, ESR SOC, Solar, and Wind Generation on Lowest SOC% Days"
    quote: "Key Takeaway: ESRs were charging during high solar generation and discharging during the solar ramp down."
  - id: e8
    source: ercot-summer-2023-review
    locator: "Key Takeaways slide"
    quote: "Solar down ramp led to tighter conditions in late evening than at peak demand; high demand and lower wind output on some days led to the need to request conservation"
  - id: e9
    source: ercot-summer-2023-review
    locator: "Net Load HE 17-21 for Summer 2021-2023 slide"
    quote: "Key Takeaway: In 2023, the peak net load hours during summer months have shifted from HE 17 to HE 21."
  - id: e10
    source: ercot-summer-2026-review
    locator: "Slide 15, Key Takeaway"
    quote: "More solar and Energy Storage Resource capacity was in the system in summer 2026 compared to 2025 and 2024. This tends to result in lower energy prices during the day, allowing ESRs to charge during this time to later discharge over the evening solar ramp period."
  - id: e11
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "Conversely, the share of price spikes that occurred during the middle of the day, when solar production peaks, i.e., between 9 a.m. and 2 p.m., dropped from 9.3% in 2024 to 2.7% in 2025."
  - id: e12
    source: imm-som-2021
    locator: "Future Needs of the ERCOT Market, Increasing Ramp Demands (page 30 (OCR))"
    quote: "Net load is defined as the system load minus the output of intermittent renewable resources that must be served by dispatchable resources. The prediction of the future shape of this curve once a large quantity of solar has entered has been referred to as the “duck curve” or, in Texas, the “dead armadillo curve.” This curve indicates that conventional resources will have to ramp rapidly each evening as the sun goes down and the solar resources’ output falls sharply."
  - id: e13
    source: imm-som-2023
    locator: "Future Needs of the ERCOT Market, Increasing Ramp Demands (OCR)"
    quote: "Likewise, with over 20 GW of installed solar capacity in the ERCOT market, dispatchable resources must ramp rapidly each evening as the sun goes down and the solar resources’ output falls sharply. This challenge is felt even more acutely on days when wind generation remains low into the evening as solar generation ramps down."
  - id: e14
    source: imm-som-2024
    locator: "Executive Summary, Changing Capacity Factors During Peak Net Load (OCR)"
    quote: "As the net load peak moves into the evening, solar’s contribution during these evening hours falls to zero. Meanwhile, wind resources, which typically begin ramping up as the sun sets, have higher capacity factors during these increasingly critical hours. This hand-off between solar and wind can result in reliability risk if wind output lags its forecast."
  - id: e15
    source: imm-som-2024
    locator: "Executive Summary, Growing Absolute Risk from Expanding Solar Output (OCR)"
    quote: "Under-forecasting generation from renewables may result in inefficient economic outcomes, but over-forecasting can lead to reliability issues if thermal units are not committed in time to compensate. This dynamic is particularly challenging during hot summer evenings, when solar output declines rapidly and demand remains elevated."
  - id: e16
    source: imm-som-2024
    locator: "Executive Summary, discussion of ESRs and Recommendation 2022-1 (OCR)"
    quote: "They can quickly ramp up output to meet demand during brief shortfalls or bridge the evening transition between declining solar and ramping wind. However, ERCOT’s current dispatch engine, Security-Constrained Economic Dispatch (SCED), optimizes ESR state of charge one interval at a time (i.e., five minutes ahead), limiting its ability to coordinate ESR dispatch for longer-duration needs."
  - id: e17
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts (page 27 (OCR))"
    quote: "For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price exceeds 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the corresponding fuel index price (FIP)"
  - id: e18
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts (page 28 (OCR))"
    quote: "Price spikes also occurred relatively frequently during the morning ramp hours, 1.e., between 6 a.m. and 8 a.m., but they accounted for only 7.5% of the total in 2025, down from 8.9% in 2024."
  - id: e19
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts (page 29 (OCR))"
    quote: "The increase in solar capacity primarily drove the reduction in daytime price spikes from 2024 to 2025, while growth in energy storage capacity largely drove the decline in price spikes during solar ramp periods."
  - id: e20
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details (methodology effective 2026-01-01)"
    quote: "The periods when load is increasing and wind and/or solar are decreasing requires other generation resources to increase output or come online quickly to compensate for the sudden net load increases. As a result, net load ramp risk should be accounted for in the determination of Non-Spin requirements."
  - id: e21
    source: ercot-summer-2026-review
    locator: "Net Load with Energy Storage Resource (ESR) Contribution slide"
    quote: "Key Takeaway: 12 of the top 20 Hourly Net Load Hours have been from 2026. The Peak Net Load typically occurs in HE 20:00 – 21:00 and occur most often during the Summer."
  - id: e22
    source: ercot-summer-2026-review
    locator: "Net Load HE 17-22 for Summers 2024-2026 slide (2026 data period 6/1 - 8/15)"
    quote: "Key Takeaway: Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July."
  - id: e23
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e24
    source: ercot-summer-2023-review
    locator: "Example: Load versus Net Load slide"
    quote: "The peak Net Load is the highest loading on the non-renewable Resources"
---

## Definition

The evening ramp, which the IMM calls the "duck curve," is the sharp rise in net load in the evening as solar production falls away while demand is still high. [e4][e1] In ERCOT the tightest system conditions have moved from the firm peak load hour, usually around 4 to 5 p.m., to the 7 to 9 p.m. net load peak. [e1]

## How it works

Net load is total demand minus renewable generation; the IMM says the tightest system conditions have moved to the later evening hours (7 to 9 p.m.) because solar generation has ramped down while wind generation is beginning to ramp up. [e1] ERCOT's summer 2023 review defines the peak net load as the highest loading on the non-renewable Resources, and found the solar down ramp made late-evening conditions tighter than at peak demand. [e24][e8]

The IMM's 2021 report explained the "duck curve" as a prediction: once a large quantity of solar entered, conventional resources would have to ramp rapidly each evening as the sun went down and solar output fell sharply (it also gave the Texas name "dead armadillo curve"). [e12] By its 2023 report, with over 20 GW of installed solar, the IMM said dispatchable resources must ramp rapidly each evening, and that this is felt even more acutely on days when wind stays low into the evening. [e13]

The ramp is met by fast resources. SCED often dispatches quick-start natural gas plants or ESRs with high-priced offer curves during the ramp-down, which produces frequent and predictable price spikes. [e2] The IMM's 2024 report describes the evening as a hand-off: solar's contribution falls to zero while wind, which typically begins ramping up as the sun sets, has higher capacity factors, and the hand-off can be a reliability risk if wind output lags its forecast. [e14] The same report says over-forecasting renewables can lead to reliability issues if thermal units are not committed in time, which is particularly challenging on hot summer evenings. [e15]

ERCOT's summer 2026 review says that on the lowest state-of-charge days it examined, ESRs were charging during high solar generation and discharging during the solar ramp down, and that ESR state-of-charge exhaustion in the evenings was a pattern throughout the summer. [e7][e23]

## ERCOT context

In 2025 the evening ramp accounted for 30% of all price spikes, up from 22% in 2024, while the share of spikes in the middle of the day fell from 9.3% to 2.7%. [e2][e11] The IMM defines a price spike in this analysis as a 15-minute interval where the load-weighted average energy price exceeds an implied heat rate of 18 times the fuel index price. [e17] Morning-ramp spikes (6 to 8 a.m.) were 7.5% of the 2025 total, down from 8.9% in 2024. [e18]

The IMM also reports that summer price spikes were 40% less frequent in 2025 than in summer 2024 as added ESR capacity improved ERCOT's ability to manage ramp needs. [e3] Its attribution is split: the increase in solar capacity primarily drove the reduction in daytime spikes from 2024 to 2025, while growth in storage capacity largely drove the decline in spikes during solar ramp periods. [e19] ERCOT's summer 2026 review says more solar and storage tends to lower daytime prices, which lets ESRs charge then and discharge over the evening ramp. [e10]

The net load peak keeps moving later. ERCOT's 2023 review found summer peak net load hours had shifted from HE 17 to HE 21 for 2023, and its summer 2026 review found that, in June and July (data period 6/1 to 8/15 for 2026), the net load hour shifted from HE 21 to HE 22 due to increasing solar and load. [e9][e22] The same review says 12 of the top 20 hourly net load hours have been from 2026 and that the peak net load typically occurs in HE 20 to 21, most often in summer. [e21] The two statements describe different groupings (typical hour across all top hours versus the shifted June and July hour), and the saved review does not reconcile them further.

The IMM treats market design as part of the issue. In its 2025 report it notes the real-time market optimizes over a single interval based on the next five minutes, and says a multi-interval market would help with the duck curve by pre-positioning slow-ramping resources earlier. [e5][e4] In its 2024 report the IMM said SCED optimizes ESR state of charge one interval at a time (five minutes ahead), limiting coordination of ESR dispatch for longer-duration needs. [e16] ERCOT's AS methodology effective 1 January 2026 says net load ramp risk should be accounted for in the determination of Non-Spin requirements. [e20]

## Key facts

- Tightest hours shifted from about 4 to 5 p.m. to 7 to 9 p.m. between 2021 and 2025 (IMM). [e1]
- Evening-ramp price spikes were 30% of all 2025 spikes, versus 22% in 2024; morning-ramp spikes were 7.5% (8.9% in 2024); midday (9 a.m. to 2 p.m.) fell from 9.3% to 2.7%. [e2][e18][e11]
- Summer 2025 price spikes were 40% less frequent than summer 2024, which the IMM attributes to added ESR capacity. [e3]
- ERCOT summer reviews: peak net load hour moved from HE 17 to HE 21 by 2023, and from HE 21 to HE 22 in June and July 2026 (data to 8/15). [e9][e22]
- Low wind output was a primary factor on the 2023 conservation appeal days; wind ramping up in the evenings was key on most other days. [e6]
- IMM recommendation 2022-1 (multi-interval real-time market) is framed partly as a duck-curve remedy. [e4]

## Say it like this

(Guidance) The duck curve in ERCOT is a net load story: solar fades just as demand is still high, so the evening hours, not the afternoon peak, are where prices spike. [e1][e2] The IMM says storage growth has reduced the frequency of spikes [e19], but the ramp itself remains, and the net load hour keeps moving later. [e9][e22]

## Common confusion

(Guidance) The "duck curve" is not the same as the gross load peak. The peak load hour and the net load peak are different hours (the IMM puts the firm peak load hour around 4 to 5 p.m. and the net load peak at 7 to 9 p.m.); see net-load. [e1] The IMM frames the term as a net load ramp driven by solar entry. [e4] Also, a ramp spike share is a share of spikes, not of hours: the 30% figure is the share of price spikes that fell in the evening ramp. [e2]

## Questions

### Why did price spikes shift to the evening?

Because solar output falls while demand stays high, so SCED turns to quick-start gas and high-offer ESRs between 7 and 9 p.m. [e1][e2]

### What dampened the evening spikes in 2025?

The IMM says summer 2025 price spikes were 40% less frequent than in summer 2024 as additional ESR capacity improved ERCOT's capability to manage ramp needs, and that storage growth largely drove the decline in spikes during solar ramp periods. [e3][e19]

### Which weather factor still makes the ramp risky?

Low wind output: ERCOT's 2023 review found it was a primary factor on the conservation appeal days, and the IMM says the evening hand-off from solar to wind is a reliability risk if wind lags its forecast. [e6][e14]

### Why does the net load peak matter more than the gross load peak for the evening?

Peak net load is the highest loading on the non-renewable Resources, so it is the hour that tests the dispatchable fleet, and ERCOT's summer 2023 review found the solar down ramp made late-evening conditions tighter than at peak demand. [e24][e8]

### What if wind output falls short of forecast just as solar ramps down?

The IMM says the hand-off between solar and wind can create reliability risk if wind lags its forecast, and that over-forecasting renewables can lead to reliability issues if thermal units are not committed in time. [e14][e15] ERCOT's methodology says net load ramp risk should be accounted for in the determination of Non-Spin requirements. [e20]

### Why would a multi-interval real-time market help?

The IMM says a multi-interval real-time market would pre-position slow-ramping resources earlier and reduce reliance on expensive ESRs and quick-start units; it describes the current real-time market as considering a single interval (this was the IMM's description in its 2025 report). [e4][e5]

## Scenarios

### A hot July evening: solar falls off at 7 p.m. and ESRs are running low on charge

- ESRs were charging during high solar and discharging during the ramp down, and SOC exhaustion in the evenings was a pattern in summer 2026. [e7][e23]
- The IMM's 2025 report says SCED often dispatches quick-start gas or high-offer ESRs during the ramp-down, which produces frequent price spikes. [e2]
- (Guidance) Watch the hour: the review found the net load hour moving toward HE 22 in June and July 2026. [e22]

## Open items

- Resolved 2026-11-21: the "duck curve" term is explained in the IMM 2021 report (prediction of net load shape; also "dead armadillo curve"). [e12] No ERCOT-authored definition found.
- Deeper pass: no saved source quantifies the ramp in GW per hour; ramp-rate (MW per hour) statistics were not found in quotable text in the IMM reports, summer reviews or monthly operations reports.
- The summer 2026 review's peak net load figures (GW) sit in chart labels that did not extract as quotable sentences, so no MW value for peak net load is cited.
- The saved summer 2026 review does not state how its "typically HE 20 to 21" and "shifted to HE 22" findings relate; see ERCOT context.
