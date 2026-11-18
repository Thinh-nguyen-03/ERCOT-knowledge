---
id: resource-mix
name: ERCOT Resource Mix
aliases: [fuel mix, generation mix, capacity mix, resource mix]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: solar-generation
    type: part-of
    note: Solar's share of ERCOT generation rose from 10.4% in 2024 to 13.9% in 2025. [e2]
  - to: wind-generation
    type: part-of
    note: Wind's generation share was nearly flat in 2025 and wind output grew only 2.9%. [e2][e6]
  - to: energy-storage-resource
    type: part-of
    note: ESR capacity passed 17,000 MW and 31,500 MWh by the end of 2025. [e4]
  - to: natural-gas-price
    type: affects
    note: Natural gas remained the largest single source of generation in 2025 at 41.1%, so gas prices still move power prices. [e2]
  - to: net-load
    type: affects
    note: The more wind and solar in the mix, the more load is netted out before the dispatchable fleet is needed.
  - to: cdr-report
    type: related
    note: The CDR projects solar to keep leading capacity growth, followed by battery storage. [e9]
  - to: merit-order
    type: determines
    note: The mix of resources sets the shape of the supply stack that clears the market.
  - to: winter-storm-uri
    type: related
    note: ERCOT's February 2021 board deck listed installed capacity by fuel just after the storm. [e12][e13]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, C. Generation Capacity in ERCOT"
    quote: "In 2025, approximately 14.8 GW of new capacity entered commercial operation, including 6.2 GW of solar, 7.3 GW of energy storage resources (ESRs), 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come from solar and ESRs, averaging 5.7 GW and 3.3 GW of annual additions, respectively."
  - id: e2
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, discussion of Figure 12: Percentage of Annual Generation by Resource Type"
    quote: "Over the past year, the share of output from wind has been nearly flat while the solar share increased from 10.4% in 2024 to 13.9% in 2025. The share of output from coal was flat at 12.9%. Generation from natural gas resources decreased from 44.3% in 2024 to 41.1% in 2025."
  - id: e3
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, discussion of generation shares"
    quote: "Over the past year, the share of generation from wind has been nearly flat while the solar share increased from 7.2% in 2023 to 10.4% in 2024. The share of output from coal and natural gas resources both fell roughly one percentage point each from last year to 12.6% and 44.2% of all output in 2024, respectively."
  - id: e4
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024."
  - id: e5
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, chapter key insights"
    quote: "Wind resources have an overall capacity factor of 31.6%, while solar resources have an overall capacity factor of 23.8%. However, the wind capacity factor during peak net load hours has increased, while the solar capacity factor has plummeted because the net peak load hour has continued to shift into the evening."
  - id: e6
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, D.1 Production and Curtailment"
    quote: "Wind generation grew by only 2.9% in 2025, continuing a trend of relatively low wind-capacity growth since 2022. Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years."
  - id: e7
    source: ercot-fact-sheet
    locator: "ERCOT Fact Sheet, October 2026"
    quote: "41,926 MW of utility-scale installed solar capacity as of October 2026"
  - id: e8
    source: ercot-fact-sheet
    locator: "ERCOT Fact Sheet, October 2026"
    quote: "21,537 MW of installed energy storage as of October 2026"
  - id: e9
    source: ercot-cdr-2025-12
    locator: "Executive Summary, Planned Resource Trends"
    quote: "Solar is expected to continue out-pacing the other resource types in terms of installed capacity growth, followed by Energy Storage Resources (battery energy storage)."
  - id: e10
    source: eia-texas-profile
    locator: "Texas Electricity Profile 2024, Table 1. 2024 Summary statistics (Texas)"
    quote: "Primary energy source Natural gas Net summer capacity (megawatts) 168,317 1"
  - id: e11
    source: eia-tx-gas-2021
    locator: "Today in Energy, March 12, 2021"
    quote: "In February 2020, wind accounted for 22% of Texas's net electricity generation (including both utility- and small-scale wind farms). Coal's share has declined in recent years; it accounted for 13% of generation in February 2020. Nuclear consistently generates about 10% of electricity in Texas."
  - id: e12
    source: ercot-uri-board
    locator: "Slide 7, Electric Generation, Transmission & Distribution Overview (February 24, 2021)"
    quote: "51,667 MW Gas 47.45% 13,630 MW Coal 12.52%"
  - id: e13
    source: ercot-uri-board
    locator: "Slide 7, Electric Generation, Transmission & Distribution Overview (February 24, 2021)"
    quote: "31,390 MW Wind 28.83% MW represent installed capacity"
  - id: e14
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, discussion of Figure 11"
    quote: "In the West zone, the Permian Basin remains import-constrained, but strong renewable generation in the Panhandle more than offsets those imports, making the zone a substantial net exporter of power."
---

## Definition

ERCOT's resource mix is the makeup of its generation, by installed capacity and by energy produced, across natural gas, wind, solar, coal, nuclear, storage and other resources. In 2025 natural gas produced 41.1% of ERCOT's generation, coal 12.9% and solar 13.9%, with wind's share nearly flat from 2024. [e2]

## How it works

Capacity and energy shares differ because resources run at different rates. The IMM puts 2025 overall capacity factors at 31.6% for wind and 23.8% for solar, and notes that solar's contribution at the net peak has collapsed as that hour moves into the evening. [e5] So a resource's share of installed MW is not its share of MWh or its share of the hardest hours to serve.

New entry is now dominated by solar and storage. In 2025 about 14.8 GW came online: 6.2 GW solar, 7.3 GW storage, 1.2 GW wind and 280 MW of combustion turbines. [e1] Since 2021 solar additions have averaged 5.7 GW a year and storage 3.3 GW. [e1] Storage capacity reached more than 17,000 MW and 31,500 MWh at the end of 2025. [e4]

Location matters. The IMM says the West zone is a substantial net exporter because Panhandle renewables more than offset Permian Basin imports. [e14] About 4.7% of wind generation was curtailed in 2025. [e6]

## ERCOT context

The shift is fast. In February 2021, ERCOT's board deck showed installed gas at 51,667 MW (47.45%), coal at 13,630 MW (12.52%) and wind at 31,390 MW (28.83%). [e12][e13] By October 2026 ERCOT's fact sheet lists 41,926 MW of utility-scale solar and 21,537 MW of installed energy storage. [e7][e8] The December 2025 CDR expects solar to keep leading capacity growth, followed by battery storage. [e9]

On the energy side, solar's generation share went from 7.2% in 2023 to 10.4% in 2024 and 13.9% in 2025, while gas fell to 41.1% in 2025. [e3][e2] Gas is still the largest single source, and EIA lists natural gas as the primary energy source for Texas as a whole. [e2][e10]

## Key facts

- 2025 generation shares (IMM): gas 41.1%, solar 13.9%, coal 12.9%; wind nearly flat versus 2024. [e2]
- 2024 generation shares (IMM 2024 report): gas 44.2%, coal 12.6%, solar 10.4%. [e3]
- 2025 new capacity: about 14.8 GW, of which 6.2 GW solar and 7.3 GW storage. [e1]
- ESRs: more than 17,000 MW and 31,500 MWh at end-2025, up almost 80% in a year. [e4]
- October 2026: 41,926 MW utility-scale solar and 21,537 MW storage installed (ERCOT fact sheet). [e7][e8]
- Texas statewide net summer capacity in 2024 was 168,317 MW, first among states (EIA; covers all of Texas, not only ERCOT). [e10]

## Say it like this

(Guidance) ERCOT is still a gas-led system in energy terms, but almost all new capacity is solar and batteries, so the question is shifting from "how much capacity" to "what is available after sunset." That is why net load, storage duration and gas units' evening role matter more each year.

## Common confusion

(Guidance) Capacity share is not energy share: wind and solar have capacity factors of 31.6% and 23.8%, so their MW share overstates their MWh share and, for solar, badly overstates its share at the evening net peak. [e5] Also, EIA's Texas figures cover the whole state, while ERCOT and IMM figures cover the ERCOT region only. [e10]

## Questions

### What is ERCOT's largest source of generation?

Natural gas, at 41.1% of 2025 output, down from 44.3% in 2024 per the 2025 IMM report. [e2]

### What has been built recently?

Mostly solar and storage: of about 14.8 GW added in 2025, 6.2 GW was solar and 7.3 GW was storage, versus 280 MW of combustion turbines. [e1]

### Why doesn't adding solar fix evening reliability?

Solar's capacity factor at the net peak has fallen sharply as the net peak moves into the evening, while wind's has risen. [e5] Storage is what has grown to serve those hours. [e4]

### How has wind's role changed?

Wind output grew only 2.9% in 2025 and its share of generation was nearly flat, with about 4.7% curtailed. [e6][e2]

## Open items

- Conflicting 2024 shares: the 2024 IMM report says gas was 44.2% and coal 12.6% of 2024 output; the 2025 IMM report says gas was 44.3% in 2024 and coal was "flat at 12.9%". I cite both.
- Wind's 2025 generation share as a percentage is not stated in IMM 2025 text ("nearly flat"). The ERCOT fact sheet's 2025 energy-use and 2026 capacity pie charts appear to list wind, gas, nuclear and other shares, but the extracted text scrambles the labels and values, so I did not cite any of those percentages (including total installed wind MW).
- Nuclear's share of ERCOT generation and ERCOT's total installed capacity for 2025 are not stated in quotable IMM text; EIA's "about 10%" nuclear figure is for Texas statewide and dated 2021.
- I found no source text giving retirements of coal or gas units by year.
