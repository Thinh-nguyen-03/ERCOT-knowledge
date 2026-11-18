---
id: wind-generation
name: Wind Generation
aliases: [wind, WGR, wind-powered generation, wind capacity factor]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-mix
    type: part-of
    note: Wind is one of the fuel categories in the generation mix; see that topic for shares.
  - to: solar-generation
    type: contrasts-with
    note: Wind has the higher overall capacity factor, but solar had the higher capacity factor at daily peak load in 2025. [e5][e4]
  - to: net-load
    type: affects
    note: Wind output is netted against load, and its capacity factor at the net peak interval was 29.3% in 2025. [e4]
  - to: wind-solar-forecasts
    type: related
    note: Wind dominates the variance of renewable forecast error because of its volatility. [e8]
  - to: evening-ramp
    type: related
    note: Wind generation tends to ramp up in the evening as solar ramps down. [e6]
  - to: weatherization
    type: related
    note: FERC/NERC attribute the rising generating unit outages in the week of February 7, 2021 primarily to wind turbine blade freezing and natural gas fuel supply issues. [e9]
  - to: congestion
    type: affects
    note: Wind resources are concentrated where the resource is best, and the IMM reports more than 4% of 2024 wind output was curtailed due to congestion. [e3][e12]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Intermittent Renewable Resource (IRR)"
    quote: "A Generation Resource that can only produce energy from variable, uncontrollable Resources, such as wind, solar, or run-of-the-river hydroelectricity."
  - id: e2
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, D.1 Production and Curtailment"
    quote: "Wind generation grew by only 2.9% in 2025, continuing a trend of relatively low wind-capacity growth since 2022. Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years."
  - id: e3
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Because wind resources are concentrated in locations with the best resource potential, curtailment has a major impact on wind project economics, and 4.7% of wind generation was curtailed in 2025."
  - id: e4
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 4. Capacity Factors for Wind and Solar Resources"
    quote: "As shown in Table 2, wind resources had a 28.5% capacity factor during daily peak load intervals in 2025, compared to over 48% for solar. However, as solar output has increased, it has shifted the timing of peak net load into later in the evening when solar production declines. Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years."
  - id: e5
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Wind resources have an overall capacity factor of 31.6%, while solar resources have an overall capacity factor of 23.8%. However, the wind capacity factor during peak net load hours has increased, while the solar capacity factor has plummeted because the net peak load hour has continued to shift into the evening."
  - id: e6
    source: ercot-summer-2023-review
    locator: "Wind During Conservation Appeal Days slide, Key Takeaway"
    quote: "Key Takeaway: Wind generation ramping up in the evenings was key to serving demand on most days, however low wind output was a primary factor contributing to tight conditions on the conservation appeal days."
  - id: e7
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, footnote 8"
    quote: "The capacity factor is the ratio of a resource’s energy output to its maximum capability."
  - id: e8
    source: imm-som-2025
    locator: "Market Operations chapter, C. Forecast Error"
    quote: "Despite this growth in solar resources, wind generation continues to dominate total IRR forecast error variance because of its higher volatility and lower predictability."
  - id: e9
    source: ferc-nerc-uri
    locator: "Executive Summary, week of February 7, 2021"
    quote: "During the week of February 7, ERCOT and SPP experienced rising load, as well as increasing generating unit outages, primarily caused by wind turbine blade freezing as a result of freezing precipitation, and natural gas fuel supply issues."
  - id: e10
    source: ercot-mora-2027-01
    locator: "Risk Profile for Combined Low Wind and Limited BESS Availability, Background"
    quote: "Variability in wind generation represents the greatest risk factor for declaring an EEA in January, although the possibility of significantly low BESS State of Charge can also be a substantial risk factor."
  - id: e11
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "After years in which solar captured a premium relative to wind, the average captured price for solar at $21 per MWh was nearly at parity with wind at $19 per MWh."
  - id: e12
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, wind and solar production"
    quote: "Wind generation grew by 3.9% from 2023 to 2024, with more than 4% of output curtailed due to congestion."
---

## Definition

Wind is an Intermittent Renewable Resource: in the Protocols, a Generation Resource that can only produce energy from variable, uncontrollable sources such as wind, solar or run-of-the-river hydroelectricity. [e1]

## How it works

Wind output is described with the capacity factor, the ratio of a resource's energy output to its maximum capability. [e7] The IMM reports it three ways: overall, during daily peak load intervals and during the daily net peak interval. [e4] Wind's overall capacity factor was 31.6% in 2025, with 28.5% at daily peak load and 29.3% at the daily net peak. [e5][e4]

Wind is less aligned with afternoon peak load than solar, but it tends to ramp up in the evening, so its capacity factor at the net peak has held up while solar's has collapsed. [e4][e5] ERCOT's 2023 review found that evening wind ramp-up was key to serving demand on most days, and low wind was a primary factor on the days ERCOT asked for conservation. [e6]

## ERCOT context

Growth has slowed: wind generation grew 2.9% in 2025 and 3.9% in 2024, with relatively low capacity growth since 2022. [e2][e12] Because wind is concentrated where the resource is best, curtailment matters: 4.7% of 2025 wind generation was curtailed. [e3] In 2025 the average captured price for solar ($21 per MWh) was nearly at parity with wind ($19 per MWh), after years in which solar captured a premium. [e11]

Wind is also the main source of renewable forecast uncertainty. The IMM says wind dominates total IRR forecast error variance because of its higher volatility and lower predictability. [e8] In ERCOT's winter risk modeling, wind variability is the greatest risk factor for declaring an EEA in January. [e10]

## Key facts

- 2025 capacity factors: 31.6% overall, 28.5% at daily peak load, 29.3% at daily net peak (IMM). [e5][e4]
- 2025 wind generation growth was 2.9%; 4.7% of wind generation was curtailed. [e2]
- 2024 wind generation growth was 3.9% with more than 4% curtailed for congestion. [e12]
- 2025 captured price: wind about $19 per MWh versus solar about $21 per MWh. [e11]
- Winter 2021: generating unit outages in the week of February 7 were primarily caused by wind turbine blade freezing and natural gas fuel supply issues. [e9]

## Say it like this

(Guidance) Wind in ERCOT is a lot of energy but not much of it lines up with the afternoon peak; it does show up in the evening, which is why its capacity factor at the net peak is higher than solar's. Its volatility, congestion-driven curtailment and forecast error are the things to model.

## Common confusion

(Guidance) A high overall capacity factor does not mean high output at the system's critical hour. Look at the capacity factor at the relevant interval: peak load, net peak, or the January EEA risk. [e4][e10]

## Questions

### How did wind's capacity factor at the net peak compare to solar's in 2025?

Wind held 29.3% at the daily net peak interval; solar fell to 1.7%. [e4]

### Why is curtailment important for wind economics?

Wind sites are concentrated in the best resource locations, so congestion curtails output; 4.7% of 2025 wind generation was curtailed. [e3]

### Why does wind drive forecast risk?

The IMM says wind dominates IRR forecast error variance because it is more volatile and less predictable than solar. [e8]

## Open items

- Deeper pass: installed wind capacity in MW by year and by region (Panhandle, Coastal, West); the ERCOT Fact Sheet text layout did not allow a clean quote of the installed wind figure.
- Deeper pass: wind generation records and penetration records (fact sheet layout ambiguous), and wind ELCC values (CDR numbers not clearly extractable).
- No source in the set explains the physical reason wind ramps up in the evening; the IMM and ERCOT only state that it does.
