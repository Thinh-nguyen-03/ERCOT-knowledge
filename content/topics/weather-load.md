---
id: weather-load
name: Weather-Driven Load (CDD / HDD)
aliases: [cooling degree days, heating degree days, CDD, HDD, weather and load, temperature and demand]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: load-forecasting
    type: related
    note: ERCOT's Seven-Day Load Forecast is built on weather forecast parameters for each Weather Zone. [e7]
  - to: net-load
    type: related
    note: Net load is the Load for a period minus solar and wind generation for the same period. [e13]
  - to: evening-ramp
    type: related
    note: The IMM says the tightest hours have moved from the 4 to 5 p.m. peak load hour to 7 to 9 p.m., so a hot day does not by itself mean the riskiest hour. [e14]
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
    note: Wind output is the supply-side companion topic; see its own file.
  - to: load-forecasting
    type: related
    note: ERCOT's long-term forecast builds eight weather-zone models and uses temperature, temperature squared and temperature cubed with lags among its candidate variables. [e17][e18]
  - to: summer-2023
    type: related
    note: The IMM reports cooling degree days up 8.5% and a record 85.7 GW peak on August 10, 2023. [e2]
  - to: winter-storm-jan-2026
    type: related
    note: ERCOT's Winter Storm Fern peak was 75,922 MW, not a new winter peak. [e25]
  - to: summer-2026
    type: related
    note: ERCOT ranked June-July 2026 the 11th hottest of 132 years and reported a 91,134 MW record on July 22, 2026. [e5][e6]
  - to: resource-adequacy
    type: related
    note: The Protocols' ten-year hourly Load forecast, which precedes the CDR firm peak Load equation, takes weather conditions into account. [e21]
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
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Net Load"
    quote: "The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period."
  - id: e14
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 3. Prices by Time of Day"
    quote: "The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.)."
  - id: e15
    source: ercot-ltlf-2025
    locator: "Load forecast methodology overview, paragraph 1"
    quote: "This forecast is based on a set of econometric models describing the hourly load in the region as a function of the number of premises in various customer classes (e.g., residential, business, and industrial), weather variables (e.g., various temperature values), and calendar variables (e.g., day of week and holidays) to create the base load forecast."
  - id: e11
    source: ercot-summer-2023-review
    locator: "Key Takeaways slide"
    quote: "Increase in peak demand since last year is due to both economic growth and hotter temperatures"
  - id: e12
    source: ercot-summer-2026-review
    locator: "Slide 2, Summer 2026 Weather, Key Takeaway"
    quote: "Key Takeaway: The first half of summer 2026 was the hottest on average since 2023."
  - id: e16
    source: imm-som-2022
    locator: "Executive Summary, weather and demand (OCR)"
    quote: "In the summer of 2022, cooling degree days increased substantially from 2021 — 12%, 24% and 26% in Houston, Dallas and Austin, respectively."
  - id: e17
    source: ercot-ltlf-2025
    locator: "Weather zones description"
    quote: "ERCOT consists of eight distinct weather zones (Figure 1). Weather zones[1] represent a geographic region in which climatological characteristics are similar. Each weather zone has two or three weather stations that provide data for the assigned weather zone."
  - id: e18
    source: ercot-ltlf-2025
    locator: "Hourly demand model variables, 4. Weather Variables"
    quote: "Weather Variables a. Temperature including various lagged values b. Temperature squared including various lagged values c. Temperature cubed including various lagged values"
  - id: e19
    source: ercot-ltlf-2025
    locator: "Weather Zone Normal Weather Hourly Forecast"
    quote: "Forecasted hourly values for each individual calendar month were ordered from the highest value to the lowest value. Then, for each ordered value, the average was calculated. This process is commonly referred to as the Rank-and-Average methodology."
  - id: e20
    source: ercot-ltlf-2025
    locator: "Weather Zone Normal Weather Summer Peak Demand Forecast and Winter Peak Demand Forecast"
    quote: "The maximum forecasted hourly value occurring during the summer season (defined as June through September) was determined for each individual calendar year."
  - id: e21
    source: np-03
    locator: "Section 3.2.6.3, Firm Peak Load and Firm Peak Net Load Estimates, paragraph (1)"
    quote: "ERCOT shall prepare, at least annually, a forecast of total hourly Loads for a minimum of ten future years using an econometric forecast, taking into account econometric inputs, weather conditions, demographic data and other variables as deemed appropriate by ERCOT."
  - id: e22
    source: imm-som-2023
    locator: "Demand and Supply in ERCOT, A. ERCOT Load (OCR)"
    quote: "Summer 2023 was drier and hotter than the prior year with an average temperature of 85.3° F, which was one half of a degree higher than in 2022. This contributed to an increase in peak demand, which is typically driven by summer conditions."
  - id: e23
    source: imm-som-2023
    locator: "Executive Summary, weather and demand (OCR)"
    quote: "The winter record was set in 2022 of 78.3 GW on December 23, 2022, and subsequently broken on January 16, 2024, with a winter peak load of 78.5 GW. Winter peak demands are raising reliability concerns more frequently than in the past."
  - id: e24
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, B. ERCOT Load in 2025 (page 37 (OCR))"
    quote: "Figure 9 shows that average load in ERCOT in 2025 increased by 6.1%, while peak load declined by 1.8%, continuing both trends from 2024. Continued population and economic growth in Texas explain the overall load growth."
  - id: e25
    source: ercot-fern-board-sysops
    locator: "Item 9.3, System Analysis at Various Winter Peaks slide"
    quote: "Key Takeaway: ERCOT’s maximum unofficial instantaneous peak demand during Winter Storm Fern was 75,922 MW, which was not a new winter peak (winter peak recorded during Winter Storm Kingston), and there was 6,777 MW wind and 3,167 MW solar output at that time."
  - id: e26
    source: ercot-monthly-ops-2026-01
    locator: "Highlights, Records and Notifications"
    quote: "ERCOT’s maximum peak demand for the month of January was 75,572 MW on 01/26/26; this is 1,910 MW less than the January 2025 peak demand of 77,482 MW on 01/22/25."
  - id: e27
    source: ercot-monthly-ops-2026-08
    locator: "Highlights, Records and Notifications"
    quote: "ERCOT’s maximum peak demand for the month of August was 90,817 MW* at hour ending 18 on 8/24/2026; this is 7,110 MW more than the August 2025 peak demand of 83,707 MW on 8/18/2025."
  - id: e28
    source: ercot-summer-2026-review
    locator: "Slide 2, Summer 2026 Weather"
    quote: "This was especially driven by the minimum temperatures, which ranked the 3rd warmest all-time."
  - id: e29
    source: ercot-summer-2023-review
    locator: "Weather-adjusted load growth slide"
    quote: "On a weatheradjusted (WA) basis, the peak and energy growth of residential and commercial is offset due to: growth in rooftop solar, continually improving energy efficiency of appliances and HVAC systems, and load management programs."
  - id: e30
    source: ercot-summer-2023-review
    locator: "Key Takeaway, transmission limitation slide"
    quote: "Key Takeaway: Higher temperatures, higher demand and insufficient resources in North and West led to a high-risk transmission limitation in Central Texas."
  - id: e31
    source: imm-som-2024
    locator: "Review of Real-Time Market Outcomes, ancillary service prices (OCR)"
    quote: "There were fewer days of extreme temperatures in summer 2024 compared to 2023, and there was considerably more solar and energy storage capacity online."
  - id: e32
    source: imm-som-2024
    locator: "Executive Summary, price spikes (page 4 (OCR))"
    quote: "Average prices were higher and the impact from price spikes was more significant in 2023 primarily due to more frequent extreme temperatures and the corresponding impacts of artificial scarcity caused by the implementation of ECRS."
  - id: e33
    source: np-03
    locator: "Section 3.10.6, QSE and Resource Entity Responsibilities, paragraph (3)"
    quote: "For each Generation Resource and ESR, Resource Entities shall provide ERCOT the following temperature data:"
  - id: e34
    source: ercot-ltlf-2025
    locator: "Weather Zone Normal Weather Winter Peak Demand Forecast"
    quote: "The maximum forecasted hourly value occurring during the winter season (defined as December through March) was determined for each year."
  - id: e35
    source: ercot-ltlf-2025
    locator: "Weather zones description"
    quote: "To reflect the unique weather and load characteristics of each zone, separate load forecasting models were developed for each of the weather zones."
---

## Definition

In the IMM's State of the Market reports, weather's effect on electricity use is measured by heating and cooling degree days, which are the amount by which average daily temperatures are above or below 65 °F. [e1] Residential and commercial demand rises quickly as cooling degree days grow, because of air conditioning. [e1]

## How it works

In ERCOT's long-term forecasting, the base load forecast uses econometric models of hourly load with weather variables such as temperature values alongside premises and calendar variables. [e15] The models are built per weather zone: ERCOT has eight weather zones, each a geographic region with similar climatological characteristics and two or three weather stations, and separate load forecasting models were developed for each. [e17][e35] The 2025 report's hourly demand model lists temperature, temperature squared and temperature cubed, each with various lagged values, among its candidate weather variables. [e18]

To turn weather into a forecast, ERCOT applies actual weather data from each historical year (2008 through 2024 in the 2025 report) one at a time to each weather zone's model. [e9] For the normal-weather hourly forecast, the monthly hourly values across scenarios are ordered from highest to lowest and averaged by rank, which ERCOT calls the Rank-and-Average methodology. [e19] The normal-weather summer peak uses the maximum forecast hourly value in the summer season, defined as June through September, and the winter peak uses December through March. [e20][e34] The operational Seven-Day Load Forecast is driven by current weather forecast parameters for each Weather Zone. [e7] In the Protocols, ERCOT must prepare, at least annually, a forecast of total hourly Loads for a minimum of ten future years using an econometric forecast that takes weather conditions into account among its inputs; the same section goes on to define the CDR's firm peak Load estimates. [e21]

Weather moves peak demand year to year while the underlying trend keeps growing. In 2024 average demand rose about 3.5% but peak demand fell 0.3% because of less extreme summer heat. [e3] In 2025 average load rose 6.1% while peak load fell 1.8%, and the IMM says continued population and economic growth explain the overall load growth. [e4][e24]

## ERCOT context

In 2023 and 2026, hotter summers coincided with record peaks. The IMM reported cooling degree days up 12%, 24% and 26% in Houston, Dallas and Austin in summer 2022 versus 2021, and up 8.5% on average in summer 2023, with numerous record load levels culminating on August 10, 2023 at 85.7 GW. [e16][e2] (The IMM's 2023 Demand and Supply section words the 2023 increase as cooling degree days "up for all of Texas by as much as 8.5%"; see Open items.) The IMM says summer 2023 averaged 85.3 °F, one half of a degree higher than 2022, which contributed to the increase in peak demand. [e22] ERCOT's review attributes the 2023 peak increase to both economic growth and hotter temperatures. [e11] ERCOT's summer 2026 review ranked June-July 2026 as the 11th hottest of 132 years, especially driven by minimum temperatures (3rd warmest all-time), and reported a new record of 91,134 MW on July 22, 2026. [e5][e28][e6]

Weather also shows up in prices and in transmission. The IMM said average prices were higher and the impact of price spikes more significant in 2023 primarily due to more frequent extreme temperatures and the artificial scarcity caused by ECRS implementation, and that fewer days of extreme temperatures in summer 2024, with more solar and storage online, lowered ancillary service prices. [e32][e31] On a Central Texas congestion slide in its summer 2023 review, ERCOT said higher temperatures, higher demand and insufficient resources in North and West led to a high-risk transmission limitation in Central Texas. [e30]

Weather-adjusted growth is different from raw growth. ERCOT's 2023 review says that on a weather-adjusted basis the peak and energy growth of residential and commercial load was offset by rooftop solar growth, appliance and HVAC efficiency, and load management programs. [e29]

In winter, the IMM says the winter record of 78.3 GW (December 23, 2022) was broken on January 16, 2024 with 78.5 GW, and winter peak demands raise reliability concerns more frequently than in the past. [e23] In Winter Storm Fern (January 2026) ERCOT's maximum unofficial instantaneous peak demand was 75,922 MW, not a new winter peak (the record was set during Winter Storm Kingston). [e25] The January 2026 monthly peak was 75,572 MW on 01/26/26, 1,910 MW below January 2025's. [e26] For comparison, ERCOT's August 2026 peak was 90,817 MW (preliminary), 7,110 MW above August 2025. [e27]

Weather also acts on supply. The IMM notes that rising ambient temperatures generally cause thermal units' capability to fall. [e8] The Protocols require Resource Entities to give ERCOT hot- and cold-weather temperature data for each Generation Resource and ESR. [e33] On the cold side, freezing issues caused 44.2% of the outages, derates and failures to start in the February 2021 event, according to the FERC/NERC report. [e10]

## Key facts

- CDD/HDD are measured against a 65 °F base in the IMM reports. [e1]
- Summer 2022: cooling degree days up 12% (Houston), 24% (Dallas), 26% (Austin) from 2021. [e16]
- Summer 2023: cooling degree days up 8.5% on average; peak load 85.7 GW on August 10, 2023. [e2]
- 2024: peak demand down 0.3% on milder heat while average demand rose about 3.5%. [e3]
- 2025: average load up 6.1%, peak load down 1.8%. [e4]
- 2026: record peak of 91,134 MW on July 22, 2026, in a summer whose first half ERCOT calls the hottest on average since 2023. [e6][e12]
- Winter peak record in the IMM's account: 78.5 GW on January 16, 2024, exceeding 78.3 GW set December 23, 2022. [e23]
- ERCOT's normal-weather summer season is June through September and winter is December through March (2025 long-term forecast). [e20][e34]

## Say it like this

(Guidance) Load has two drivers: a steady structural climb in average load [e3][e4], and a weather overlay measured in degree days [e1]. Peak records need both a high base and heat, which is why a milder summer can show a lower peak even when average load is growing.

## Common confusion

(Guidance) Peak load and average load can move in opposite directions in a year, as they did in 2024 and 2025. [e3][e4] Also, hot weather raises gross load, but the IMM says the tightest hours have moved to the later evening (7 to 9 p.m.), so a high-temperature day is not the same as a high-risk hour. [e14] See net-load.

## Questions

### What are cooling degree days and why do analysts care?

They measure how far average daily temperature is above or below 65 °F, and the IMM says residential and commercial demand rises quickly as cooling degree days grow because of air conditioning. [e1] In summer 2023 cooling degree days rose 8.5% alongside numerous record loads. [e2]

### Why did peak load fall in 2024 and 2025 even though average load rose?

The IMM attributes the 2024 peak decline to less extreme summer heat, and reports average load up 6.1% but peak load down 1.8% in 2025. [e3][e4]

### What does ERCOT's Seven-Day Load Forecast use as input?

Current weather forecast parameters within each Weather Zone. [e7]

### How does ERCOT build a "normal weather" forecast?

It runs each historical weather year (2008 through 2024 in the 2025 report) through the model, then averages same-rank hourly values across the scenarios (Rank-and-Average), and sets the summer peak from the maximum in June through September. [e9][e19][e20]

### Why might weather-adjusted residential and commercial growth be flat while total load grows?

ERCOT's 2023 review says residential and commercial peak and energy growth on a weather-adjusted basis was offset by rooftop solar, efficiency and load management. [e29]

### What if a summer is milder but the economy keeps growing?

(Guidance) Expect average load to rise while the peak may dip, as in 2024 when average demand rose about 3.5% and peak fell 0.3% on less extreme heat. [e3]

## Scenarios

### A heat wave arrives but the evening is the tight hour

- Hot weather raises gross load, and cooling degree days track demand for air conditioning. [e1]
- The IMM says the tightest conditions have shifted to 7 to 9 p.m., so check net load rather than only the peak load hour. [e14]
- ERCOT's summer 2023 review, on its Central Texas congestion slide, said higher temperatures and demand with insufficient resources in North and West led to a high-risk transmission limitation. [e30]

## Open items

- Deeper pass: no saved source gives CDD or HDD values for 2024 or 2025, or a MW-per-degree load sensitivity (the LTLF lists temperature variables but no coefficients).
- The IMM's 2023 report words the 2023 cooling-degree-day rise as "up 8.5% on average" in the Executive Summary but "up for all of Texas by as much as 8.5%" in the Demand and Supply section; the two are not reconciled in the saved text.
- The "heating degree day" term appears in the IMM reports only as part of the 65 °F definition; no winter-specific degree-day numbers were found.
- The ERCOT Fact Sheet (October 2026) text layout is ambiguous but appears to show a record peak of 91,155 MW for July 22, 2026, versus 91,134 MW in the Summer 2026 review; only the review is cited. Needs reconciling.
- Deeper pass: the Winter Storm Kingston peak value and date were not quoted from the saved sources; winter record is cited from the IMM (January 16, 2024).
- No saved source gives zone-by-zone weather station lists or the reason ERCOT chose 65 °F beyond the IMM's definition.
