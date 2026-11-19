---
id: solar-generation
name: Solar Generation
aliases: [solar, PVGR, PV, photovoltaic, solar capacity factor]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
---

## Definition

Solar is an Intermittent Renewable Resource: in the Protocols, a Generation Resource that can only produce energy from variable, uncontrollable sources such as wind, solar or run-of-the-river hydroelectricity. [e1]

## How it works

The IMM says solar production peaks in the middle of the day. [e8] Its capacity factor is high at daily peak load (over 48% in 2025) but near zero at the evening net peak (1.7% in 2025). [e4] Its overall capacity factor was 23.8% in 2025, below wind's 31.6%. [e5]

Because solar output is concentrated at midday, midday is also when curtailment is most likely, since simultaneous production peaks. [e3] Roughly 6% of solar generation was curtailed in 2025, which the IMM calls relatively low, partly because solar projects can be sited closer to load and are less prone to congestion than wind. [e2]

## ERCOT context

Solar is the growth story: generation grew almost 49% in 2025 after 62% in 2024. [e2][e11] ERCOT's summer 2026 review says solar growth outpacing large load additions made daytime hours uneventful. [e6] The share of price spikes between 9 a.m. and 2 p.m., when solar production peaks, fell from 9.3% in 2024 to 2.7% in 2025. [e8] The IMM says that as solar output has increased, it has shifted the timing of peak net load later in the evening. [e4]

ERCOT says more solar and ESR capacity tends to result in lower daytime energy prices, allowing ESRs to charge then and discharge over the evening solar ramp. [e9] The IMM adds that the average captured energy price for renewable generation tends to decrease as installed renewable capacity increases. [e12] For resource adequacy, the December 2025 CDR lists a lower capacity contribution from wind and solar, due to the use of Effective Load Carrying Capabilities, among the reasons for the lower and sharply downward trajectory of the margins in its scenario based on the ERCOT Adjusted Load Forecast and Protocol-prescribed resource capacity. [e10]

## Key facts

- 2025 solar generation grew almost 49%; roughly 6% was curtailed (IMM). [e2]
- 2024 solar generation grew 62% with nearly 6% curtailed (IMM). [e11]
- 2025 capacity factors for solar: 23.8% overall, over 48% at daily peak load, 1.7% at daily net peak. [e5][e4]
- 35% of real-time generation capacity was offered at or below $0 in 2025, primarily wind and solar. [e7]
- Midday price spikes fell from 9.3% of spikes in 2024 to 2.7% in 2025. [e8]

## Say it like this

(Guidance) Solar has flattened the afternoon and pushed scarcity into the evening: it suppresses midday prices and fills the afternoon peak, but contributes almost nothing at the net peak.

## Common confusion

(Guidance) Solar's capacity factor depends on which interval you measure: strong at the daily peak load interval, near zero at the daily net peak. [e4] Also, the IMM's key-insights sentence says "6% of total generation was curtailed" while its Section D says 6% of solar generation was curtailed; the latter reading fits the context. [e2][e3]

## Questions

### Why did solar growth not eliminate scarcity?

The IMM says solar output has shifted peak net load later into the evening, when solar's capacity factor during the daily net peak interval was 1.7% in 2025. [e4]

### Why do wind and solar offer at or below $0?

The IMM says many receive federal production tax credits, so they are incentivized to produce even when prices are negative. [e7]

### Where is solar curtailed most?

At midday, when simultaneous production peaks. [e3]

## Open items

- Deeper pass: installed solar MW by year (the fact sheet reports 41,926 MW in October 2026 and is already used in resource-mix), solar by region, and distributed or rooftop solar treatment.
- Deeper pass: solar ELCC percentages from the CDR (the table text did not extract into clean numbers).
- The IMM's "6% of total generation was curtailed" sentence reads like a solar-only figure; see Common confusion.
- The IMM calls solar's roughly 6% curtailment in 2025 relatively low and attributes it to siting closer to load, yet its wind curtailment figure for 2025 is 4.7%; the sources do not reconcile this.
