---
id: solar-generation
name: Solar Generation
aliases: [solar, PVGR, PV, photovoltaic, solar capacity factor]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: resource-mix
    type: part-of
    note: Solar generation grew almost 49% in 2025; see resource-mix for generation and capacity shares. [e2]
  - to: wind-generation
    type: contrasts-with
    note: Solar has a lower overall capacity factor than wind but a higher one at daily peak load. [e4][e5]
  - to: net-load
    type: affects
    note: Solar's capacity factor at the daily net peak fell to 1.7% in 2025. [e4]
  - to: evening-ramp
    type: causes
    note: Most 2025 price spikes occurred in the 7 to 9 p.m. peak net load hours, when solar production ramped down for the day. [e13]
  - to: energy-storage-resource
    type: related
    note: More solar lowers daytime prices, which lets ESRs charge midday and discharge in the evening. [e9]
  - to: negative-prices
    type: related
    note: A large share of capacity is offered at or below $0, primarily wind and solar with federal production tax credits. [e7]
  - to: cdr-report
    type: related
    note: The CDR cites a lower capacity contribution from wind and solar, due to the use of Effective Load Carrying Capabilities, as a reason for lower margin trajectories in its Adjusted Load Forecast scenario. [e10]
  - to: wind-solar-forecasts
    type: related
    note: The IMM says 2025 NSRS volumes rose 7.5%, driven by higher net load and solar forecast errors. [e30]
  - to: resource-adequacy
    type: related
    note: ERCOT's CDR says solar ELCCs decrease sharply for the evening risk period but also decrease for the afternoon. [e24]
  - to: tax-credits-recs
    type: related
    note: The IMM says many wind and solar resources receive federal production tax credits and so are incentivized to produce even when prices are negative. [e7]
  - to: gtc
    type: related
    note: The IMM says ERCOT had 26 active GTCs in 2025, compared to 18 in 2021, and that renewable siting concentrates congestion. [e31]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Intermittent Renewable Resource (IRR)"
    quote: "A Generation Resource that can only produce energy from variable, uncontrollable Resources, such as wind, solar, or run-of-the-river hydroelectricity."
  - id: e2
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, D.1 Production and Curtailment"
    quote: "In contrast to the relatively low growth in wind generation, solar generation grew by almost 49% in 2025. Roughly 6% of solar generation was curtailed in 2025, similar to 2024 levels. One explanation for this relatively low curtailment is that solar projects can be sited closer to load and are less prone to congestion than wind resources sited in areas with the highest wind potential."
  - id: e3
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Solar generation grew by 49% in 2025, and 6% of total generation was curtailed. Although solar potential is strong across Texas, solar resources are more likely to be curtailed at midday, when simultaneous production peaks."
  - id: e4
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 4. Capacity Factors for Wind and Solar Resources"
    quote: "As shown in Table 2, wind resources had a 28.5% capacity factor during daily peak load intervals in 2025, compared to over 48% for solar. However, as solar output has increased, it has shifted the timing of peak net load into later in the evening when solar production declines. Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025."
  - id: e5
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Wind resources have an overall capacity factor of 31.6%, while solar resources have an overall capacity factor of 23.8%. However, the wind capacity factor during peak net load hours has increased, while the solar capacity factor has plummeted because the net peak load hour has continued to shift into the evening."
  - id: e6
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Solar growth outpacing large load additions helped make the daytime hours this summer uneventful. A new all-time demand record was set on July 22nd."
  - id: e7
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, E. Aggregated Offer Curves"
    quote: "35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits."
  - id: e8
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "Conversely, the share of price spikes that occurred during the middle of the day, when solar production peaks, i.e., between 9 a.m. and 2 p.m., dropped from 9.3% in 2024 to 2.7% in 2025."
  - id: e9
    source: ercot-summer-2026-review
    locator: "Slide 15, Key Takeaway"
    quote: "More solar and Energy Storage Resource capacity was in the system in summer 2026 compared to 2025 and 2024. This tends to result in lower energy prices during the day, allowing ESRs to charge during this time to later discharge over the evening solar ramp period."
  - id: e10
    source: ercot-cdr-2025-12
    locator: "Executive Summary, Planning Reserve Margin discussion"
    quote: "The lower and sharply downward trajectory of the Margins is due to (1) high load growth largely driven by new Loads reported by Transmission Service Providers, (2) a lower capacity contribution from wind and solar resources due to the use of Effective Load Carrying Capabilities, (3) fewer planned resources that result from applying additional eligibility criteria to be included in Planning Reserve Margins."
  - id: e11
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, wind and solar production"
    quote: "Solar generation grew more sharply, increasing by 62% with nearly 6% of that output curtailed."
  - id: e13
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e12
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "Figure 15 shows that the average captured energy price by renewable generation tends to decrease as installed renewable capacity increases."
  - id: e14
    source: imm-som-2025
    locator: "Executive Summary (page 12 (OCR))"
    quote: "More than 6 gigawatt (GW) of new solar capacity was commercialized in 2025, and annual solar generation increased by 49% compared to 2024. The share of total generation produced by solar resources increased from 10.4% in 2024 to 13.9% in 2025."
  - id: e15
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, C. Generation Capacity in ERCOT (page 37 (OCR))"
    quote: "In 2025, approximately 14.8 GW of new capacity entered commercial operation, including 6.2 GW of solar, 7.3 GW of energy storage resources (ESRs), 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come from solar and ESRs, averaging 5.7 GW and 3.3 GW of annual additions, respectively."
  - id: e16
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 4. Capacity Factors for Wind and Solar Resources, Table 2 (page 42 (OCR))"
    quote: "2023 31.7% 28.5% 26.7% 22.6% 40.4% 10.1% 2024 31.4% 29.0% 27.8% 22.2% 42.5% 3.9% 2025 31.6% 28.5% 29.3% 23.8% 48.4% 1.7%"
  - id: e17
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar (page 42 (OCR))"
    quote: "After years in which solar captured a premium relative to wind, the average captured price for solar at $21 per MWh was nearly at parity with wind at $19 per MWh. This trend is likely to continue as solar capacity increases and shifts peak net demand later to the evening, when wind generation tends to increase."
  - id: e18
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar (page 42 (OCR))"
    quote: "To mitigate congestion risks in resource-rich locations, renewable developers often expand into regions with lower renewable potential but less concentration and congestion. This strategy is particularly applicable when the capital cost of renewable generation declines over time, as it has for solar, allowing projects to meet their ROI targets despite lower annual output."
  - id: e19
    source: imm-som-2024
    locator: "Executive Summary (page 17 (OCR))"
    quote: "By the end of 2024, more than 29 GW of solar and 10 GW of ESRs had been installed. An additional 40 GW of solar and 25 GW of ESRs have already signed interconnection agreements for installation by 2028."
  - id: e20
    source: imm-som-2023
    locator: "Demand and Supply in ERCOT, Wind and Solar Generation (page 64 (OCR))"
    quote: "Figure 19 shows that total solar production in 2023 was approximately 33,733 GWh, and close to 3% of that production was curtailed to manage congestion caused by solar resources."
  - id: e21
    source: imm-som-2022
    locator: "Demand and Supply in ERCOT, Wind and Solar Generation (page 61 (OCR))"
    quote: "Figure 18 shows that total solar production in 2022 was 24,200 GWh and an additional 9% was curtailed to manage congestion caused by solar resources."
  - id: e22
    source: imm-som-2021
    locator: "Generation Capacity in ERCOT, new capacity discussion (page 61 (OCR))"
    quote: "The amount of utility-scale solar capacity added in 2021 (3,600 MW) was the largest amount of solar added to the ERCOT system in any given year, bringing total installed capacity to nearly 9,600 MW"
  - id: e23
    source: imm-som-2022
    locator: "Demand and Supply in ERCOT, Wind and Solar Generation (page 61 (OCR))"
    quote: "Solar resources, although still a smaller component of overall generation than wind today, are positively correlated with summer load and thus produce at much higher capacity factors than wind during summer peak hours. The capacity factors during these hours were approximately 69% for facilities located in the west and 54% for those located in other areas of Texas."
  - id: e24
    source: ercot-cdr-2025-12
    locator: "ELCC Background, Key Attributes of ELCCs"
    quote: "At low penetration levels, solar has a large reliability benefit in the afternoon when solar output is at its highest. As more solar is added, the risk of reliability issues is then pushed into the evening hours when solar generation drops and becomes much less effective at maintaining reliability. Solar ELCCs decrease sharply for the evening risk period, but also decrease for the afternoon."
  - id: e25
    source: ercot-cdr-2025-12
    locator: "ELCC Background, How are ELCCs Estimated?"
    quote: "The associated ELCC capacity is the ELCC percentage multiplied by the resource type’s aggregate installed capacity in megawatts (MW)."
  - id: e26
    source: ercot-cdr-2025-12
    locator: "ELCC Background, Key Attributes of ELCCs"
    quote: "ERCOT’s ELCCs are estimated by year, season, and daily risk period (afternoon and evening for non-winter months; morning, afternoon, and evening for winter months.)"
  - id: e27
    source: ercot-cdr-2025-12
    locator: "ELCC Background, What is an Effective Load Carrying Capability?"
    quote: "ELCC is not a direct measure of generation output available for a given period, but rather an indicator of the expected reliability benefit of the capacity for the given period."
  - id: e28
    source: ercot-cdr-2025-12
    locator: "Planned Resource Trends, Planned Generation Capacity Additions by Summer Season"
    quote: "Solar is expected to continue out-pacing the other resource types in terms of installed capacity growth, followed by Energy Storage Resources (battery energy storage)."
  - id: e29
    source: ercot-monthly-ops-2026-10
    locator: "Highlights, interconnection queue bullet (as of October 31, 2026)"
    quote: "ERCOT is tracking 1,847 active generation interconnection requests totaling 461,414 MW as of October 31, 2026. This includes 151,798 MW of solar, 49,781 MW of wind, 160,102 MW of battery, and 95,032 MW of gas projects"
  - id: e30
    source: imm-som-2025
    locator: "Ancillary Services, key insights (OCR)"
    quote: "NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors."
  - id: e31
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 2. Congestion Impact (page 41 (OCR))"
    quote: "ERCOT had 26 active GTCs in 2025, compared to 18 in 2021."
  - id: e32
    source: imm-som-2021
    locator: "Generation Capacity in ERCOT, annual generation mix (page 61 (OCR))"
    quote: "Solar increased from 2.3% of annual generation in 2020 to 4% of annual generation in 2021."
  - id: e33
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, footnote 8 to Table 2 (page 42 (OCR))"
    quote: "The capacity factor is the ratio of a resource’s energy output to its maximum capability."
---

## Definition

Solar is an Intermittent Renewable Resource: in the Protocols, a Generation Resource that can only produce energy from variable, uncontrollable sources such as wind, solar or run-of-the-river hydroelectricity. [e1]

## How it works

The IMM says solar production peaks in the middle of the day. [e8] Its capacity factor is high at daily peak load (over 48% in 2025) but near zero at the evening net peak (1.7% in 2025). [e4] Its overall capacity factor was 23.8% in 2025, below wind's 31.6%. [e5] The IMM's Table 2 lists, for solar, overall, daily-peak-load and daily-net-peak capacity factors of 22.6%, 40.4% and 10.1% for 2023, 22.2%, 42.5% and 3.9% for 2024, and 23.8%, 48.4% and 1.7% for 2025 (the second set of three columns in the table, which matches the 2025 text). [e16][e4] The IMM defines the capacity factor as the ratio of a resource's energy output to its maximum capability. [e33]

Because solar output is concentrated at midday, midday is also when curtailment is most likely, since simultaneous production peaks. [e3] Roughly 6% of solar generation was curtailed in 2025, which the IMM calls relatively low, partly because solar projects can be sited closer to load and are less prone to congestion than wind. [e2] Developers also expand into regions with lower renewable potential but less congestion, which the IMM says is helped by falling solar capital costs, even if annual output per project is lower. [e18]

ERCOT's CDR treats solar capacity through an Effective Load Carrying Capability (ELCC), which is not a direct measure of generation output but an indicator of the expected reliability benefit of the capacity. [e27] The ELCC capacity is the ELCC percentage multiplied by the resource type's aggregate installed capacity in MW, and ELCCs are estimated by year, season and daily risk period (afternoon and evening in non-winter months). [e25][e26] For solar, the CDR says ELCC falls as solar is added: the risk of reliability issues is pushed into the evening hours when solar drops, and solar ELCCs decrease sharply for the evening risk period but also for the afternoon. [e24]

## ERCOT context

Solar is the growth story: generation grew almost 49% in 2025 after 62% in 2024, and its share of total generation rose from 10.4% in 2024 to 13.9% in 2025. [e2][e11][e14] In 2025, about 6.2 GW of solar entered commercial operation, and since 2021 solar additions have averaged 5.7 GW a year. [e15] The IMM reported more than 29 GW of solar installed by the end of 2024, with an additional 40 GW holding signed interconnection agreements for installation by 2028. [e19] ERCOT's December 2025 CDR says solar is expected to continue out-pacing other resource types in installed capacity growth, followed by ESRs. [e28] As of October 31, 2026, ERCOT was tracking 151,798 MW of solar among 461,414 MW of active generation interconnection requests; these are requests, not installed capacity. [e29]

ERCOT's summer 2026 review says solar growth outpacing large load additions made daytime hours uneventful. [e6] The share of price spikes between 9 a.m. and 2 p.m., when solar production peaks, fell from 9.3% in 2024 to 2.7% in 2025. [e8] The IMM says that as solar output has increased, it has shifted the timing of peak net load later in the evening. [e4]

ERCOT says more solar and ESR capacity tends to result in lower daytime energy prices, allowing ESRs to charge then and discharge over the evening solar ramp. [e9] The IMM adds that the average captured energy price for renewable generation tends to decrease as installed renewable capacity increases; after years in which solar captured a premium relative to wind, the 2025 solar captured price of $21 per MWh was nearly at parity with wind at $19 per MWh. [e12][e17] For resource adequacy, the December 2025 CDR lists a lower capacity contribution from wind and solar, due to the use of ELCCs, among the reasons for the lower and sharply downward trajectory of the margins in its scenario based on the ERCOT Adjusted Load Forecast and Protocol-prescribed resource capacity. [e10]

## Timeline

- 2021: utility-scale solar capacity added was 3,600 MW, the largest in any year to that point per the IMM, bringing installed capacity to nearly 9,600 MW; solar rose from 2.3% of annual generation in 2020 to 4% in 2021. [e22][e32]
- 2022: total solar production 24,200 GWh, with an additional 9% curtailed to manage congestion (IMM wording). [e21]
- 2023: about 33,733 GWh produced, with close to 3% of that production curtailed. [e20]
- 2024: generation up 62%, nearly 6% of output curtailed; more than 29 GW installed by year end. [e11][e19]
- 2025: generation up almost 49%, roughly 6% curtailed, 13.9% share of generation, solar capacity factor at the net peak 1.7%. [e2][e14][e4]

## Key facts

- 2025 solar generation grew almost 49%; roughly 6% was curtailed (IMM). [e2]
- 2024 solar generation grew 62% with nearly 6% curtailed (IMM). [e11]
- 2025 capacity factors for solar: 23.8% overall, over 48% at daily peak load, 1.7% at daily net peak. [e5][e4]
- The solar net-peak capacity factor in the IMM's Table 2 fell from 10.1% in 2023 to 3.9% in 2024 to 1.7% in 2025. [e16]
- 35% of real-time generation capacity was offered at or below $0 in 2025, primarily wind and solar. [e7]
- Midday price spikes fell from 9.3% of spikes in 2024 to 2.7% in 2025. [e8]
- In 2022, per the IMM, solar capacity factors during summer peak hours were approximately 69% for facilities in the west and 54% elsewhere in Texas. [e23]

## Say it like this

(Guidance) Solar has flattened the afternoon and pushed scarcity into the evening: it suppresses midday prices and fills the afternoon peak, but contributes almost nothing at the net peak.

## Common confusion

(Guidance) Solar's capacity factor depends on which interval you measure: strong at the daily peak load interval, near zero at the daily net peak. [e4] An ELCC is not a capacity factor either: it measures reliability benefit, and it falls as more solar is added. [e27][e24] Also, the IMM's key-insights sentence says "6% of total generation was curtailed" while its Section D says 6% of solar generation was curtailed; the latter reading fits the context. [e2][e3]

## Questions

### Why did solar growth not eliminate scarcity?

The IMM says solar output has shifted peak net load later into the evening, when solar's capacity factor during the daily net peak interval was 1.7% in 2025. [e4]

### Why do wind and solar offer at or below $0?

The IMM says many receive federal production tax credits, so they are incentivized to produce even when prices are negative. [e7]

### Where is solar curtailed most?

At midday, when simultaneous production peaks. [e3]

### Why does solar's ELCC fall as more solar is added?

The CDR says that with more solar the risk of reliability issues is pushed into the evening hours when solar drops, so solar becomes much less effective at maintaining reliability, with the sharpest decline in the evening risk period. [e24]

### What happened to solar's captured price relative to wind, and why might it continue?

The IMM says solar's 2025 captured price ($21 per MWh) was nearly at parity with wind ($19) after years at a premium, and that the trend is likely to continue as solar capacity increases and shifts peak net demand later to the evening, when wind generation tends to increase. [e17]

### What if the 2025 net-peak capacity factor of 1.7% fell further?

(Guidance) Solar would contribute essentially nothing to the net peak, so evening adequacy would rest on wind, storage and thermal; the IMM notes ESRs' evening role and that wind's net-peak capacity factor was 29.3% in 2025. [e4][e16]

## Open items

- Deeper pass: installed solar MW at end of 2025 and in 2026 was not found in quotable text (the IMM gives 6.2 GW added in 2025 and more than 29 GW installed at end of 2024; the ERCOT fact sheet figure of 41,926 MW in October 2026 is used in resource-mix); solar by region and distributed or rooftop solar treatment are not covered.
- Solar ELCC percentages from the December 2025 CDR: the ELCC tables did not extract as clean quotable numbers, so no percentage is cited; the CDR text only describes the direction.
- The CDR planned solar additions row (3,959 / 14,857 / 24,869 / 28,929 / 29,441 MW for summer 2026-2030) is in a table that does not extract with clear labels as cumulative or annual, so it is not cited.
- The IMM's "6% of total generation was curtailed" sentence reads like a solar-only figure; see Common confusion.
- The IMM calls solar's roughly 6% curtailment in 2025 relatively low and attributes it to siting closer to load, yet its wind curtailment figure for 2025 is 4.7%; the sources do not reconcile this.
- The 2021 and 2022 IMM reports say "an additional" 8% and 9% of solar production was curtailed, and 2023 to 2025 reports say a percentage "of that production"; whether the bases are identical is not stated. The 2022 net-peak cell of Table 2 is garbled in OCR and is not used.
- The IMM restated capacity factors between reports: the 2025 report's Table 2 shows solar net-peak 10.1% for 2023 and 3.9% for 2024, while the 2024 report's table showed 11.7% for 2023 (2024 value 3.9% in both); figures here follow the 2025 report.
