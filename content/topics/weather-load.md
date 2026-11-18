---
id: weather-load
name: Weather-Driven Load (CDD / HDD)
aliases: [cooling degree days, heating degree days, CDD, HDD, weather and load, temperature and demand]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
links:
  - to: load-forecasting
    type: related
    note: ERCOT's Seven-Day Load Forecast is built on weather forecast parameters for each Weather Zone. [e7]
  - to: net-load
    type: related
    note: Weather drives gross load, and net load is that load minus wind and solar output.
  - to: evening-ramp
    type: related
    note: Hot days set the high gross load that solar then falls away from in the evening.
  - to: thermal-outages
    type: related
    note: The IMM notes that rising ambient temperatures generally reduce thermal units' capability. [e8]
  - to: winter-storm-uri
    type: related
    note: Cold weather is the other side of weather risk, with freezing causing a large share of unit outages in February 2021. [e10]
  - to: long-term-load-forecast
    type: related
    note: The long-term forecast uses weather scenarios from historical years as inputs. [e9]
  - to: wind-generation
    type: related
    note: Weather also drives wind output, so hot and calm days combine high load with low supply.
evidence:
  - id: e1
    source: imm-som-2023
    locator: "Executive Summary, Weather and demand discussion"
    quote: "We measure the impact weather has on electricity use by quantifying heating and cooling degree days – the amount by which the average daily temperatures are above or below 65 °F. Residential and commercial demand rises quickly as the number of cooling degree days grows because of the demand for air conditioning."
  - id: e2
    source: imm-som-2023
    locator: "Executive Summary, 2023 summer weather"
    quote: "In the summer of 2023, cooling degree days increased 8.5% on average following a substantial increase in 2022. We observed increases across major load regions throughout Texas. These increases indicate that temperatures were unusually hot during the summer of 2023, leading to numerous record load levels culminating on August 10 at a peak load of 85.7 GW."
  - id: e3
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, load discussion"
    quote: "Average demand for electricity in 2024 was approximately 3.5% higher than in 2023 – an increase of approximately 1,776 megawatts (MW) as the Texas economy continued to grow. Peak demand in 2024, however, was down 0.3% from 2023 because of less extreme heat in the summer."
  - id: e4
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Average load in ERCOT increased by 6.1% in 2025, while peak load declined by 1.8%. The West load zone led this growth by a large margin, primarily because cryptocurrency mines and oil and gas operations have sited there."
  - id: e5
    source: ercot-summer-2026-review
    locator: "Slide 2, Summer 2026 Weather"
    quote: "The June-July 2026 period ranked as the 11th hottest June-July period out of 132 historical years (mean temperatures, 1895-2026)."
  - id: e6
    source: ercot-summer-2026-review
    locator: "Slide 3, Summer 2025 vs. Summer 2026, Key Takeaway"
    quote: "Key Takeaway: 2026 saw higher overall summer temperatures which corresponds to higher summer load peaks reaching a new record on July 22nd, 2026, of 91,134 MW."
  - id: e7
    source: np-03
    locator: "Section 3.12.1, Seven-Day Load Forecast, paragraph (1)"
    quote: "ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone."
  - id: e8
    source: imm-som-2025
    locator: "Market Power chapter, Figure 61 discussion"
    quote: "The fact that available capacity tends to be higher under the highest load conditions is particularly notable because rising ambient temperatures generally cause thermal units’ capability to fall."
  - id: e9
    source: ercot-ltlf-2025
    locator: "Weather Zone Load Forecast Scenarios"
    quote: "Actual weather data from calendar years 2008 through 2024 was used to create each weather zone’s forecast by applying the weather data from each historical year one-by-one to the load forecasting model."
  - id: e10
    source: ferc-nerc-uri
    locator: "Executive Summary, Figure 3 discussion"
    quote: "Of those outages, derates, and failures to start, 75 percent were caused by either freezing issues (44.2 percent) or fuel issues (31.4 percent), as shown in Figure 3, below."
  - id: e11
    source: ercot-summer-2023-review
    locator: "Key Takeaways slide"
    quote: "Increase in peak demand since last year is due to both economic growth and hotter temperatures"
  - id: e12
    source: ercot-summer-2026-review
    locator: "Slide 2, Summer 2026 Weather, Key Takeaway"
    quote: "Key Takeaway: The first half of summer 2026 was the hottest on average since 2023."
---

## Definition

In the IMM's State of the Market reports, weather's effect on electricity use is measured by heating and cooling degree days, which are the amount by which average daily temperatures are above or below 65 °F. [e1] Residential and commercial demand rises quickly as cooling degree days grow, because of air conditioning. [e1]

## How it works

Temperature is the main weather input to load. In ERCOT's own forecasting, hourly demand models use temperature values (including lagged values) and the forecast is built on weather data from each historical year applied one at a time. [e9] The operational Seven-Day Load Forecast is driven by current weather forecast parameters for each Weather Zone. [e7]

Weather moves peak demand year to year while the underlying trend keeps growing. In 2024 average demand rose about 3.5% but peak demand fell 0.3% because of less extreme summer heat. [e3] In 2025 average load rose 6.1% while peak load fell 1.8%. [e4]

## ERCOT context

Hot summers produce record peaks. Cooling degree days rose 8.5% in summer 2023 and the all-time peak reached 85.7 GW on August 10, 2023, which ERCOT's review attributes to economic growth and hotter temperatures. [e2][e11] ERCOT's summer 2026 review ranked June-July 2026 as the 11th hottest of 132 years and reported a new record of 91,134 MW on July 22, 2026. [e5][e6]

Weather also acts on supply. The IMM notes that rising ambient temperatures generally cause thermal units' capability to fall. [e8] On the cold side, freezing issues caused 44.2% of the outages, derates and failures to start in the February 2021 event, according to the FERC/NERC report. [e10]

## Key facts

- CDD/HDD are measured against a 65 °F base in the IMM reports. [e1]
- Summer 2023: cooling degree days up 8.5% on average; peak load 85.7 GW on August 10, 2023. [e2]
- 2024: peak demand down 0.3% on milder heat while average demand rose about 3.5%. [e3]
- 2025: average load up 6.1%, peak load down 1.8%. [e4]
- 2026: record peak of 91,134 MW on July 22, 2026, in a summer whose first half ERCOT calls the hottest on average since 2023. [e6][e12]

## Say it like this

(Guidance) Load has two drivers: a steady structural climb from population, industry and large loads, and a weather overlay measured in degree days. Peak records need both a high base and heat, which is why a milder summer can show a lower peak even when average load is growing.

## Common confusion

(Guidance) Peak load and average load can move in opposite directions in a year, as they did in 2024 and 2025. [e3][e4] Also, hot weather raises gross load, but the tightest hour has moved to the evening net peak, so a high-temperature day is not the same as a high-risk hour. See net-load.

## Questions

### What are cooling degree days and why do analysts care?

They measure how far average daily temperature is above 65 °F and track air-conditioning demand, so they explain much of the year-to-year swing in summer load. [e1][e2]

### Why did peak load fall in 2024 and 2025 even though average load rose?

The IMM attributes the 2024 peak decline to less extreme summer heat, and reports average load up 6.1% but peak load down 1.8% in 2025. [e3][e4]

### What does ERCOT's Seven-Day Load Forecast use as input?

Current weather forecast parameters within each Weather Zone. [e7]

## Open items

- Deeper pass: no source gives CDD/HDD values for 2024 or 2025, or a MW-per-degree load sensitivity.
- The "heating degree day" term appears in the IMM reports only as part of the 65 °F definition; no winter-specific degree-day numbers were found.
- The ERCOT Fact Sheet (October 2026) text layout is ambiguous but appears to show a record peak of 91,155 MW for July 22, 2026, versus 91,134 MW in the Summer 2026 review; I cited only the review. Needs reconciling.
- Deeper pass: weather zones list and temperature-to-load mapping (ercot-ltlf-2025 model details); winter peak records and cold-weather load.
