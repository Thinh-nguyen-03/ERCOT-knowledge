---
id: wind-generation
name: Wind Generation
aliases: [wind, WGR, wind-powered generation, wind capacity factor]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
    note: ERCOT's 2023 review says wind generation ramping up in the evenings was key to serving demand on most days. [e6]
  - to: weatherization
    type: related
    note: FERC/NERC attribute the rising generating unit outages in the week of February 7, 2021 primarily to wind turbine blade freezing and natural gas fuel supply issues. [e9]
  - to: congestion
    type: affects
    note: Wind resources are concentrated where the resource is best, and the IMM reports more than 4% of 2024 wind output was curtailed due to congestion. [e3][e12]
  - to: summer-2023
    type: related
    note: ERCOT's summer 2023 review says low wind output was a primary factor on the conservation appeal days, and low wind in north and west was a factor on September 6. [e6][e24]
  - to: winter-storm-jan-2026
    type: related
    note: At the Winter Storm Fern peak of 75,922 MW, there was 6,777 MW of wind output. [e25]
  - to: resource-adequacy
    type: related
    note: ERCOT's CDR splits wind capacity contribution into Coastal, Panhandle and Other regions using ELCCs. [e26]
  - to: gtc
    type: related
    note: The IMM says the export-constrained Texas Panhandle sees frequent curtailment of abundant wind generation. [e23]
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
  - id: e13
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 4. Capacity Factors for Wind and Solar Resources, Table 2 (page 42 (OCR))"
    quote: "2023 31.7% 28.5% 26.7% 22.6% 40.4% 10.1% 2024 31.4% 29.0% 27.8% 22.2% 42.5% 3.9% 2025 31.6% 28.5% 29.3% 23.8% 48.4% 1.7%"
  - id: e14
    source: imm-som-2023
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 62 (OCR))"
    quote: "The value of wind in satisfying ERCOT’s peak summer demand is limited by its negative correlation with load in most areas (excluding the Gulf Coast area). The highest wind output occurs during non-summer months, and mainly during off-peak hours. Wind output during high load periods will continue to be a pivotal determinant of shortages, though this may be mitigated by the increased penetration of solar and ESRs."
  - id: e15
    source: imm-som-2023
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 62 (OCR))"
    quote: "More than 38 GW of wind capacity was installed in ERCOT as of the end of 2023. Although much of the wind generation is in the West zone, more than 9 GW of wind generation is located in the South zone, as well as 3 GW in the North zone."
  - id: e16
    source: imm-som-2022
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 60 (OCR))"
    quote: "The amount of wind capacity installed in ERCOT was more than 37 GW at the end of 2022."
  - id: e17
    source: imm-som-2021
    locator: "Demand and Supply in ERCOT, D. Wind and Solar Output in ERCOT (page 63 (OCR))"
    quote: "The amount of wind capacity installed in ERCOT was more than 34 GW at the end of 2021."
  - id: e18
    source: imm-som-2021
    locator: "Demand and Supply in ERCOT, D. Wind and Solar Output in ERCOT (page 63 (OCR))"
    quote: "A new wind output record was set on October 21, 2021 (23,657 MW). The amount of power produced by wind resources (24%) continued to outpace coal (19%) in 2021."
  - id: e19
    source: imm-som-2022
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 61 (OCR))"
    quote: "a new wind output record was set on May 29, 2022 (27,044 MW)."
  - id: e20
    source: imm-som-2023
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 62 (OCR))"
    quote: "The quantity of curtailments implemented to manage congestion decreased slightly from a 5% reduction in wind output in 2022 to a 4.2% reduction in 2023."
  - id: e21
    source: imm-som-2021
    locator: "Demand and Supply in ERCOT, D. Wind and Solar Output in ERCOT (page 64 (OCR))"
    quote: "These curtailments reduced wind output by less than 6%, compared to a peak of 17% in 2009."
  - id: e22
    source: imm-som-2022
    locator: "Demand and Supply in ERCOT, C. Wind and Solar Output in ERCOT (page 61 (OCR))"
    quote: "These curtailments reduced wind output by less than 5%, compared to a peak of 20% in 2009."
  - id: e23
    source: imm-som-2025
    locator: "Chapter V, load zone configuration discussion (OCR)"
    quote: "For example, the Permian Basin, a major hub for oil and gas production, has become a high-cost, import-constrained load pocket, while the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation."
  - id: e24
    source: ercot-summer-2023-review
    locator: "September 6th - Emergency Operations slide"
    quote: "Reserves were very tight during this period due to high demand, low wind in north and west, and earlier solar ramp compared to August"
  - id: e25
    source: ercot-fern-board-sysops
    locator: "Item 9.3, System Analysis at Various Winter Peaks slide"
    quote: "Key Takeaway: ERCOT’s maximum unofficial instantaneous peak demand during Winter Storm Fern was 75,922 MW, which was not a new winter peak (winter peak recorded during Winter Storm Kingston), and there was 6,777 MW wind and 3,167 MW solar output at that time."
  - id: e26
    source: ercot-cdr-2025-12
    locator: "Capacity table, Inverter-Based Resources rows"
    quote: "Inverter-Based Resources, Capacity Contribution based on Effective Load Carrying Capabilities (ELCCs) Coastal Wind Panhandle Wind Other Wind"
  - id: e27
    source: ercot-cdr-2025-12
    locator: "ELCC Background, How are ELCCs Estimated? (illustrative example)"
    quote: "For example, a wind ELCC of 25% means that the resource portfolio’s wind capacity is only 25% as effective as perfect capacity in maintaining the portfolio’s reliability level for the given period."
  - id: e28
    source: ercot-mora-2027-01
    locator: "Risk Profile for Combined Low Wind and Limited BESS Availability, Simulation Results"
    quote: "The percentiles represent the percentage of outcomes above the given values. For example, the 5th percentile indicates that 95% of all values are above a 4,497 MW wind output level."
  - id: e29
    source: ercot-mora-2027-01
    locator: "Notable Load and Resource Developments, severe winter storm scenario"
    quote: "The more severe the storm, the higher the levels of weather-related thermal unit outages and wind turbine outages due to icing."
  - id: e30
    source: imm-som-2024
    locator: "Executive Summary, Changing Capacity Factors During Peak Net Load (OCR)"
    quote: "Meanwhile, wind resources, which typically begin ramping up as the sun sets, have higher capacity factors during these increasingly critical hours. This hand-off between solar and wind can result in reliability risk if wind output lags its forecast."
  - id: e31
    source: ercot-summer-2023-review
    locator: "Peak Load, Peak Net Load, Wind, Solar slide, Key Takeaway"
    quote: "Key Takeaway: ERCOT appealed for conservation on 11 days, including the day ERCOT entered an EEA level 2."
  - id: e32
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, 4. Capacity Factors for Wind and Solar Resources (page 57 (OCR))"
    quote: "In contrast, wind maintained a capacity factor of 28.4% during the same interval, consistent with previous years."
---

## Definition

Wind is an Intermittent Renewable Resource: in the Protocols, a Generation Resource that can only produce energy from variable, uncontrollable sources such as wind, solar or run-of-the-river hydroelectricity. [e1]

## How it works

Wind output is described with the capacity factor, the ratio of a resource's energy output to its maximum capability. [e7] The IMM reports it three ways: overall, during daily peak load intervals and during the daily net peak interval. [e4] Wind's overall capacity factor was 31.6% in 2025, with 28.5% at daily peak load and 29.3% at the daily net peak. [e5][e4] In the 2025 report's Table 2 the wind net-peak capacity factor was 26.7% in 2023 and 27.8% in 2024 (first three columns of each row, matching the 2025 text). [e13] The IMM's 2024 report had said wind maintained 28.4% at the net peak in 2024, consistent with previous years. [e32]

Wind is less aligned with afternoon peak load than solar, but its capacity factor at the net peak, which has shifted into the evening, has held up while solar's has collapsed. [e4][e5] The IMM's 2023 report says wind's value in meeting summer peak demand is limited by its negative correlation with load in most areas (excluding the Gulf Coast), that the highest wind output occurs in non-summer months and mainly off-peak, and that wind output during high load periods will continue to be a pivotal determinant of shortages, a risk that may be mitigated by more solar and ESRs. [e14] The IMM's 2024 report describes the evening as a solar-to-wind hand-off: wind typically begins ramping up as the sun sets, but the hand-off is a reliability risk if wind output lags its forecast. [e30]

ERCOT's 2023 review found that evening wind ramp-up was key to serving demand on most days, and low wind was a primary factor on the days ERCOT asked for conservation (11 days that summer). [e6][e31]

## ERCOT context

Growth has slowed: wind generation grew 2.9% in 2025 and 3.9% in 2024, with relatively low capacity growth since 2022. [e2][e12] The IMM reported installed wind capacity of more than 34 GW at the end of 2021, more than 37 GW at the end of 2022 and more than 38 GW at the end of 2023, with much of it in the West zone and more than 9 GW in the South zone and 3 GW in the North zone as of 2023. [e17][e16][e15] Because wind is concentrated where the resource is best, curtailment matters: 4.7% of 2025 wind generation was curtailed. [e3] In 2025 the average captured price for solar ($21 per MWh) was nearly at parity with wind ($19 per MWh), after years in which solar captured a premium. [e11]

On the size of curtailment, the IMM's 2021 report said curtailments reduced wind output by less than 6%, compared to a peak of 17% in 2009, while its 2022 report said less than 5%, compared to a peak of 20% in 2009; the saved text does not reconcile the two. [e21][e22] The IMM links wind curtailment to geography: it says the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation, while the Permian Basin is an import-constrained load pocket, and both sit in the West load zone. [e23] The CDR counts wind capacity in three regions, Coastal, Panhandle and Other, each with a capacity contribution based on ELCCs. [e26]

Wind is also the main source of renewable forecast uncertainty. The IMM says wind dominates total IRR forecast error variance because of its higher volatility and lower predictability. [e8] In ERCOT's January 2027 Monthly Outlook for Resource Adequacy (MORA), wind variability is the greatest risk factor for declaring an EEA in January. [e10] That MORA's low-wind profile (hour ending 8 a.m. on the January peak load day) reports that, for example, the 5th percentile means 95% of values are above 4,497 MW of wind output. [e28] The MORA's severe-storm scenario notes that more severe storms bring more weather-related thermal outages and wind turbine outages due to icing. [e29] During Winter Storm Fern, wind output was 6,777 MW at the time of the maximum unofficial instantaneous peak demand. [e25]

## Timeline

- 2021: installed wind more than 34 GW; record output 23,657 MW on October 21, 2021; wind produced 24% of energy versus coal's 19%. [e17][e18]
- 2022: installed wind more than 37 GW; new output record 27,044 MW on May 29, 2022 per the IMM's 2021-2022 text. [e16][e19]
- 2023: installed wind more than 38 GW; curtailment fell from 5% of wind output in 2022 to 4.2%. [e15][e20]
- 2024: generation up 3.9%, more than 4% curtailed. [e12]
- 2025: generation up 2.9%, 4.7% curtailed, net-peak capacity factor 29.3%. [e2][e4]

## Key facts

- 2025 capacity factors: 31.6% overall, 28.5% at daily peak load, 29.3% at daily net peak (IMM). [e5][e4]
- 2025 wind generation growth was 2.9%; 4.7% of wind generation was curtailed. [e2]
- 2024 wind generation growth was 3.9% with more than 4% curtailed for congestion. [e12]
- 2025 captured price: wind about $19 per MWh versus solar about $21 per MWh. [e11]
- Installed wind: more than 34 GW (end 2021), 37 GW (end 2022), 38 GW (end 2023) per the IMM. [e17][e16][e15]
- Winter 2021: generating unit outages in the week of February 7 were primarily caused by wind turbine blade freezing and natural gas fuel supply issues. [e9]

## Say it like this

(Guidance) Wind in ERCOT is a lot of energy but not much of it lines up with the afternoon peak; it does show up in the evening, which is why its capacity factor at the net peak is higher than solar's. Its volatility, congestion-driven curtailment and forecast error are the things to model.

## Common confusion

(Guidance) A high overall capacity factor does not mean high output at the system's critical hour. Look at the capacity factor at the relevant interval: peak load, net peak, or the January EEA risk. [e4][e10] An ELCC is not a capacity factor either: the CDR's own example, a wind ELCC of 25%, means wind capacity is only 25% as effective as perfect capacity in maintaining reliability. [e27]

## Questions

### How did wind's capacity factor at the net peak compare to solar's in 2025?

Wind held 29.3% at the daily net peak interval; solar fell to 1.7%. [e4]

### Why is curtailment important for wind economics?

Wind sites are concentrated in the best resource locations, so congestion curtails output; 4.7% of 2025 wind generation was curtailed. [e3]

### Why does wind drive forecast risk?

The IMM says wind dominates IRR forecast error variance because it is more volatile and less predictable than solar. [e8]

### Why is wind variability the main January risk in the MORA?

ERCOT's January 2027 MORA says variability in wind generation is the greatest risk factor for declaring an EEA in January, with very low BESS state of charge also substantial. [e10]

### Why does wind matter at the evening net peak?

Solar's contribution falls to zero there and wind typically ramps up as the sun sets, so the IMM says the solar-to-wind hand-off is a reliability risk if wind lags its forecast. [e30]

### What if wind is low on a hot evening?

ERCOT's 2023 review says low wind output was a primary factor on the conservation appeal days, and on September 6, 2023 reserves were very tight due to high demand, low wind in north and west and an earlier solar ramp. [e6][e24]

## Open items

- Installed wind capacity for 2024 to 2026 was not found in quotable text. The ERCOT Fact Sheet (October 2026) mentions installed wind capacity "as of October 2026, the most of any state" but its layout does not make clear which number belongs to it.
- The Fact Sheet lists a wind generation record dated June 29, 2026 and a wind penetration record dated April 10, 2022, but the layout does not clearly attach the MW or percentage values, so they are not cited.
- Source conflict: the IMM's 2021 report says curtailments reduced wind output by less than 6% compared to a peak of 17% in 2009, while its 2022 report says less than 5% compared to a peak of 20% in 2009 [e21][e22]. Neither is reconciled in the saved text.
- Source conflict: the IMM restated capacity factors between reports (the 2024 report gave wind net-peak 27.1% for 2023 and 28.4% for 2024, whereas the 2025 report's table shows 26.7% and 27.8%). Figures here follow the latest (2025) report; the 2024 text value is [e32].
- Wind ELCC percentages in the December 2025 CDR did not extract as clean numbers; only the method and an illustrative 25% example are cited.
- No source in the set explains the physical reason wind ramps up in the evening; the IMM and ERCOT only state that it does.
