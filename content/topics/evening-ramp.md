---
id: evening-ramp
name: Evening Ramp / Duck Curve
aliases: [evening ramp, duck curve, solar down-ramp, net load ramp]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
    note: ESRs charge on midday solar and discharge during the solar ramp down. [e7]
  - to: rtc-b
    type: related
    note: The IMM argues a multi-interval real-time market, which looks beyond the current five-minute interval, would help with the duck curve. [e4][e5]
  - to: sced
    type: related
    note: SCED often dispatches quick-start gas plants or high-offer ESRs during the evening ramp-down. [e2]
  - to: negative-prices
    type: related
    note: ERCOT says more solar and ESR capacity tends to result in lower energy prices during the day. [e10]
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
---

## Definition

The evening ramp, which the IMM calls the "duck curve," is the sharp rise in net load in the evening as solar production falls away while demand is still high. [e4][e1] In ERCOT the tightest system conditions have moved from the firm peak load hour, usually around 4 to 5 p.m., to the 7 to 9 p.m. net load peak. [e1]

## How it works

Net load is demand minus renewable generation, so when solar ramps down in the evening and wind has only begun to ramp up, the rest of the fleet must cover a fast increase. [e1] ERCOT's summer 2023 review described the same pattern: the solar down ramp made late-evening conditions tighter than at peak demand, and the net peak hours moved from HE 17 to HE 21. [e8][e9]

The ramp is met by fast resources. SCED often dispatches quick-start natural gas plants or ESRs with high-priced offer curves during the ramp-down, which produces frequent and predictable price spikes. [e2] ESRs charge during high solar output and discharge during the solar ramp down. [e7]

## ERCOT context

In 2025 the evening ramp accounted for 30% of all price spikes, up from 22% in 2024, while the share of spikes in the middle of the day fell from 9.3% to 2.7%. [e2][e11] The IMM also reports that summer price spikes were 40% less frequent in 2025 than in summer 2024 as added ESR capacity improved ERCOT's ability to manage ramp needs. [e3] ERCOT's summer 2026 review says more solar and storage tends to lower daytime prices, which lets ESRs charge then and discharge over the evening ramp. [e10]

The market design is a stated part of the issue. The IMM notes the real-time market optimizes over a single interval based on the next five minutes, and says a multi-interval market would help with the duck curve by pre-positioning slow-ramping resources earlier. [e5][e4]

## Key facts

- Tightest hours shifted from about 4 to 5 p.m. to 7 to 9 p.m. between 2021 and 2025 (IMM). [e1]
- Evening-ramp price spikes were 30% of all 2025 spikes, versus 22% in 2024. [e2]
- Summer 2025 price spikes were 40% less frequent than summer 2024 as ESR capacity grew. [e3]
- Low wind output was a primary factor on the 2023 conservation appeal days; wind ramping up in the evenings was key on most other days. [e6]
- IMM recommendation 2022-1 (multi-interval real-time market) is framed partly as a duck-curve remedy. [e4]

## Say it like this

(Guidance) The duck curve in ERCOT is a net load story: solar fades just as demand is still high, so the evening hours, not the afternoon peak, are where prices spike and batteries earn. Storage growth has softened the spikes but not removed the ramp.

## Common confusion

(Guidance) The "duck curve" is not the same as the gross load peak. The peak load hour and the net load peak are different hours; see net-load. The IMM frames the term as a net load ramp driven by solar entry. [e4]

## Questions

### Why did price spikes shift to the evening?

Because solar output falls while demand stays high, so SCED turns to quick-start gas and high-offer ESRs between 7 and 9 p.m. [e1][e2]

### What dampened the evening spikes in 2025?

The IMM says summer 2025 price spikes were 40% less frequent than in summer 2024 as additional ESR capacity improved ERCOT's capability to manage ramp needs. [e3]

### Which weather factor still makes the ramp risky?

Low wind output: ERCOT's 2023 review found it was a primary factor on the conservation appeal days. [e6]

## Open items

- Deeper pass: no source quantifies the ramp in GW per hour; MW-per-hour net load ramp statistics were not found in quotable text.
- The term "duck curve" appears in the IMM reports only in passing (recommendation text); ERCOT documents use "net load" and "solar ramp down." No ERCOT-authored definition was found.
- Deeper pass: morning ramp (6 to 8 a.m.) price spikes were 7.5% of 2025 spikes per the IMM; winter bimodal net load is covered in net-load.
