---
id: resource-mix
name: ERCOT Resource Mix
aliases: [fuel mix, generation mix, capacity mix, resource mix]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
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
    note: Natural gas generation was 41.1% of ERCOT output in 2025, down from 44.3% in 2024. [e2]
  - to: net-load
    type: affects
    note: Net Load is the Load for a period minus generation from solar and wind Resources for the same period. [e15]
  - to: cdr-report
    type: related
    note: The CDR projects solar to keep leading capacity growth, followed by battery storage. [e9]
  - to: merit-order
    type: determines
    note: Gas generation's share fell as solar grew, from 45.1% in 2023 to 41.1% in 2025 (IMM). [e23][e2]
  - to: resource-adequacy
    type: affects
    note: ERCOT reports 10,227 MW of dispatchable thermal capacity retired and 9,365 MW added from 2016 to 2025. [e27]
  - to: tax-credits-recs
    type: affects
    note: Public Law 119-21 ends 45Y for wind and solar facilities placed in service after 2027, subject to a construction-start effective date. [e31][e32]
  - to: texas-energy-fund
    type: affects
    note: ERCOT's 2025 annual report expects about 8,800 MW of new gas-fired generation by end-2029, supported in part by TEF incentives. [e35]
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
  - id: e15
    source: np-02
    locator: "Section 2.1, definition of Net Load"
    quote: "The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period."
  - id: e14
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, discussion of Figure 11"
    quote: "In the West zone, the Permian Basin remains import-constrained, but strong renewable generation in the Panhandle more than offsets those imports, making the zone a substantial net exporter of power."
  - id: e16
    source: imm-som-2020
    locator: "2020 State of the Market Report, Demand and Supply in ERCOT, Generation Capacity"
    quote: "Approximately 7.7 GW of new generation resources came online in 2020, the bulk of which were intermittent renewable resources and the remaining capacity was 390 MW from combustion turbines and 70 MW of power storage."
  - id: e17
    source: imm-som-2020
    locator: "2020 State of the Market Report, Demand and Supply in ERCOT, Generation Capacity"
    quote: "The nine storage projects that came online in 2020 doubled ERCOT’s storage capacity to around 200 MW. There were 1,030 MW of retirements in 2020, 650 MW coal and 380 MW gas."
  - id: e18
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary, capacity changes"
    quote: "The 24 storage projects that came online in 2021 increased ERCOT’s storage capacity by a factor of five to around 1 GW. There were 172 MW of retirements in 2021 – 150 MW wind and 22 MW gas."
  - id: e19
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary, generation shares"
    quote: "Natural gas generation decreased in 2021 from 46% in 2020 to less than 42% in 2021 as natural gas prices rose sharply."
  - id: e20
    source: imm-som-2022
    locator: "2022 State of the Market Report, Executive Summary, capacity changes"
    quote: "The remaining new capacity included 700 MW of combustion turbines and 1,700 MW of storage resources. Storage resources now total roughly 2.7 GW."
  - id: e21
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary, capacity changes"
    quote: "The remaining new capacity included combustion turbines totaling 440 MW; a 530 MW combined cycle; and 1,900 MW of ESRs, which now total 4.4 GW. No natural gas-fired resources retired in 2023."
  - id: e22
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary, generation shares"
    quote: "Coal generation fell to 13.9% from 16.6% in 2022 as coal units totaling 830 MW retired."
  - id: e23
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary, generation shares"
    quote: "Natural gas generation increased to 45.1% in 2023 from 42.5% in 2022. Lower gas prices and the falling coal output contributed to this higher output share."
  - id: e24
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary, generation shares"
    quote: "Rising solar penetration increased its output share to 7.3% in 2023 from 5.6% in 2022."
  - id: e25
    source: imm-som-2024
    locator: "2024 State of the Market Report, Demand and Supply in ERCOT, Generation Capacity"
    quote: "In 2024, approximately 14 GW of new capacity entered commercial operation, including 7.5 GW of solar, 5.0 GW of energy storage resources (ESRs), 1.1 GW of wind, and 500 MW of combustion turbines. Since 2020, most new capacity has come from solar and ESRs, with annual average additions of 5.2 GW and 2.4 GW, respectively."
  - id: e26
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, By the Numbers, SUPPLY: Fuel Mix Snapshot (MW Capacity), Total row (columns 2016, 2020, 2025, 2030*)"
    quote: "Total 110,752 124,858 184,904 284,494"
  - id: e27
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, By the Numbers, Dispatchable Thermal Generation 2016-2025"
    quote: "-10,227 MW of dispatchable thermal generation retired 9,365 MW of dispatchable thermal generation added -862 MW of net new dispatchable thermal generation added"
  - id: e28
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, By the Numbers, notes to the Fuel Mix Snapshot"
    quote: "Capacity totals are based on Installed Capacity Ratings for generating units. “Thermal” is made up of Natural Gas, Nuclear, Coal, Biomass, and Diesel."
  - id: e29
    source: imm-som-2020
    locator: "2020 State of the Market Report, Demand and Supply in ERCOT, discussion of Figure 16"
    quote: "This figure shows the transition of ERCOT’s portfolio away from coal-fired resources to natural gas and renewable resources. Some of this transition has been driven by the vintage of the generating fleet in ERCOT. For example, 70% of the total coal capacity in ERCOT was at least thirty years old in 2020."
  - id: e30
    source: ercot-monthly-ops-2026-10
    locator: "Monthly Operational Overview, October 2026, Planning Summary"
    quote: "ERCOT is tracking 1,847 active generation interconnection requests totaling 461,414 MW as of October 31, 2026. This includes 151,798 MW of solar, 49,781 MW of wind, 160,102 MW of battery, and 95,032 MW of gas projects;"
  - id: e31
    source: fed-pl-119-21
    locator: "Public Law 119-21, Sec. 70512(a), amending 26 USC 45Y(d) (clean electricity production credit)"
    quote: "``(4) Termination for wind and solar facilities.-- ``(A) In general.--This section shall not apply with respect to any applicable facility placed in service after December 31, 2027. ``(B) Applicable facility.--For purposes of this paragraph, the term `applicable facility' means a qualified facility which-- ``(i) uses wind to produce electricity"
  - id: e32
    source: fed-pl-119-21
    locator: "Public Law 119-21, Sec. 70512(l)(4) and Sec. 70513(g)(5), effective dates"
    quote: "Termination for wind and solar facilities.--The amendments made by subsection (a) shall apply to facilities the construction of which begins after the date which is 12 months after the date of enactment of this Act."
  - id: e33
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, President and CEO letter (p. 4)"
    quote: "Market Participants added more than 16,000 megawatts (MW) of power supply, primarily from energy storage and solar resources."
  - id: e34
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, President and CEO letter (p. 5)"
    quote: "Today, 40 percent of the thermal generation fleet in ERCOT is more than 30 years old."
  - id: e35
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, President and CEO letter (p. 4)"
    quote: "We also observed a notable uptick in interest from natural gas resources seeking grid connection, with approximately 8,800 MW of new gas-fired generation expected by the end of 2029, supported in part by incentives from the Texas Energy Fund."
  - id: e36
    source: imm-som-2022
    locator: "2022 State of the Market Report, Executive Summary, generation shares"
    quote: "The percentage of total generation supplied by wind resources increased slightly to almost 25% of all generation in 2022."
  - id: e37
    source: imm-som-2022
    locator: "2022 State of the Market Report, Executive Summary, capacity changes"
    quote: "Approximately 700 MW of new natural gas resources came online in 2022 while one 420 MW natural gas resource retired, resulting in a net addition of 280 MW."
---


## Definition

ERCOT's resource mix is the makeup of its generation, by installed capacity and by energy produced, across natural gas, wind, solar, coal, nuclear, storage and other resources. In 2025 natural gas produced 41.1% of ERCOT's generation, coal 12.9% and solar 13.9%, with wind's share nearly flat from 2024. [e2]

## How it works

Capacity and energy shares differ because resources run at different rates. The IMM puts 2025 overall capacity factors at 31.6% for wind and 23.8% for solar, and notes that solar's contribution at the net peak has collapsed as that hour moves into the evening. [e5] So a resource's share of installed MW is not its share of MWh or its share of the hardest hours to serve.

New entry is now dominated by solar and storage. In 2025 about 14.8 GW came online: 6.2 GW solar, 7.3 GW storage, 1.2 GW wind and 280 MW of combustion turbines. [e1] Since 2021 solar additions have averaged 5.7 GW a year and storage 3.3 GW. [e1] Storage capacity reached more than 17,000 MW and 31,500 MWh at the end of 2025. [e4] ERCOT's own annual report counts "more than 16,000 MW" of supply added in 2025, mainly storage and solar, so the totals depend on the counting basis. [e33]

Thermal capacity has roughly held level while everything else grew. ERCOT's annual report shows total installed capacity of 110,752 MW in 2016, 124,858 MW in 2020 and 184,904 MW in 2025, with 284,494 MW projected for 2030. [e26] Over 2016-2025 it counts 10,227 MW of dispatchable thermal (gas, nuclear, coal, biomass, diesel) retired and 9,365 MW added, a net change of -862 MW. [e27][e28] ERCOT says 40 percent of the thermal fleet is more than 30 years old. [e34]

Location matters. The IMM says the West zone is a substantial net exporter because Panhandle renewables more than offset Permian Basin imports. [e14] About 4.7% of wind generation was curtailed in 2025. [e6]

## ERCOT context

The shift is fast. In February 2021, ERCOT's board deck showed installed gas at 51,667 MW (47.45%), coal at 13,630 MW (12.52%) and wind at 31,390 MW (28.83%). [e12][e13] By October 2026 ERCOT's fact sheet lists 41,926 MW of utility-scale solar and 21,537 MW of installed energy storage. [e7][e8] The December 2025 CDR expects solar to keep leading capacity growth, followed by battery storage. [e9]

On the energy side, solar's generation share went from 7.2% in 2023 to 10.4% in 2024 and 13.9% in 2025, while gas fell to 41.1% in 2025. [e3][e2] Gas's 41.1% share in 2025 is well above coal's 12.9% and solar's 13.9%, and EIA lists natural gas as the primary energy source for Texas as a whole. [e2][e10] For an older statewide baseline, EIA reported that in February 2020 wind produced 22% and coal 13% of Texas net generation, and that nuclear consistently generates about 10%. [e11]

What comes next is visible in the queue and in policy. As of October 31, 2026 ERCOT was tracking 461,414 MW of active interconnection requests, including 151,798 MW of solar, 49,781 MW of wind, 160,102 MW of battery and 95,032 MW of gas. [e30] ERCOT expects about 8,800 MW of new gas-fired generation by the end of 2029, supported in part by the Texas Energy Fund. [e35] Federally, Public Law 119-21 ends the 45Y credit for wind and solar facilities placed in service after December 31, 2027, with that change applying to facilities whose construction begins more than 12 months after enactment. [e31][e32]

## Key facts

- 2025 generation shares (IMM): gas 41.1%, solar 13.9%, coal 12.9%; wind nearly flat versus 2024. [e2]
- 2024 generation shares (IMM 2024 report): gas 44.2%, coal 12.6%, solar 10.4%. [e3]
- 2025 new capacity: about 14.8 GW, of which 6.2 GW solar and 7.3 GW storage. [e1]
- ESRs: more than 17,000 MW and 31,500 MWh at end-2025, up almost 80% in a year. [e4]
- October 2026: 41,926 MW utility-scale solar and 21,537 MW storage installed (ERCOT fact sheet). [e7][e8]
- Installed capacity (ERCOT, Installed Capacity Ratings): 110,752 MW (2016), 124,858 MW (2020), 184,904 MW (2025). [e26][e28]
- 2016-2025: 10,227 MW thermal retired, 9,365 MW added (net -862 MW). [e27]
- Queue, October 31, 2026: 461,414 MW active, of which battery 160,102 MW and solar 151,798 MW are the largest. [e30]
- Texas statewide net summer capacity in 2024 was 168,317 MW, first among states (EIA, ranked 1 in its table; covers all of Texas, not only ERCOT). [e10]

## Timeline

- 2020: about 7.7 GW added, mostly renewables, with 390 MW of CTs and 70 MW of storage; storage doubled to about 200 MW; 1,030 MW retired (650 MW coal, 380 MW gas). [e16][e17] The IMM noted 70% of coal capacity was at least 30 years old. [e29]
- 2021: storage grew fivefold to about 1 GW; 172 MW retired (150 MW wind, 22 MW gas). [e18] Gas's generation share fell from 46% in 2020 to under 42% as gas prices rose. [e19]
- February 2021: installed gas 51,667 MW (47.45%), coal 13,630 MW, wind 31,390 MW (ERCOT board deck). [e12][e13]
- 2022: 700 MW of CTs and 1,700 MW of storage added beyond renewables; storage about 2.7 GW. [e20] One 420 MW gas unit retired, for a net gas addition of 280 MW. [e37] Wind supplied almost 25% of generation. [e36]
- 2023: 440 MW of CTs, a 530 MW combined cycle and 1,900 MW of ESRs added (ESRs 4.4 GW); no gas retirements; 830 MW of coal retired and coal's share fell to 13.9%. [e21][e22] Gas share rose to 45.1% and solar to 7.3%. [e23][e24]
- 2024: about 14 GW added: 7.5 GW solar, 5.0 GW ESRs, 1.1 GW wind, 500 MW CTs. [e25] Solar share 10.4%. [e3]
- 2025: about 14.8 GW added: 6.2 GW solar, 7.3 GW ESRs, 1.2 GW wind, 280 MW CTs. [e1] Gas share 41.1%, solar 13.9%. [e2]
- October 2026: 41,926 MW solar and 21,537 MW storage installed. [e7][e8]
- After December 31, 2027: wind and solar placed in service lose 45Y eligibility, subject to the construction-start rule. [e31][e32]

## Say it like this

(Guidance) Gas still produces the largest quoted share of ERCOT energy, but most new capacity is solar and batteries, and thermal capacity has been roughly flat for a decade, so the question is shifting from "how much capacity" to "what is available after sunset." That is why net load, storage duration and gas units' evening role matter more each year.

## Common confusion

(Guidance) Capacity share is not energy share: wind and solar have capacity factors of 31.6% and 23.8%, so MW share and MWh share differ, and for solar the capacity factor at the evening net peak is far lower still. [e5] EIA's Texas figures cover the whole state, while ERCOT and IMM figures cover the ERCOT region only. [e10] Year-to-year "MW added" figures differ by source (IMM about 14.8 GW, ERCOT's annual report more than 16,000 MW for 2025), so quote the source. [e1][e33] And queue MW are requests, not plants: a 160 GW battery queue is not 160 GW of batteries. [e30]

## Questions

### What is ERCOT's largest source of generation?

Natural gas has the largest share the IMM quotes: 41.1% of 2025 output, down from 44.3% in 2024, versus solar 13.9% and coal 12.9% (wind's share is described only as nearly flat). [e2]

### What has been built recently?

Mostly solar and storage: of about 14.8 GW added in 2025, 6.2 GW was solar and 7.3 GW was storage, versus 280 MW of combustion turbines. [e1] In 2024 it was about 14 GW, including 7.5 GW solar and 5.0 GW ESRs. [e25]

### Why doesn't adding solar fix evening reliability?

Solar's capacity factor at the net peak has fallen sharply as the net peak moves into the evening, while wind's has risen. [e5] Storage is the capacity that has grown fastest: ESR capacity was up almost 80% in 2025. [e4]

### How has wind's role changed?

Wind supplied almost 25% of generation in 2022 [e36], but output grew only 2.9% in 2025 and its share was nearly flat, with about 4.7% curtailed. [e6][e2]

### Why did gas's generation share fall in 2021 and again in 2024-2025?

In 2021 the IMM ties the drop from 46% to under 42% to sharply higher gas prices. [e19] In 2024-2025 solar's share rose from 7.2% to 13.9% while gas fell to 41.1%. [e3][e2] (Reasoning) The first was a fuel-price effect, the second a displacement effect from midday solar.

### Has ERCOT lost dispatchable capacity?

By ERCOT's count, a little: 10,227 MW of thermal retired and 9,365 MW added from 2016 to 2025, a net -862 MW, while total capacity rose from 110,752 MW to 184,904 MW. [e27][e26] Retirements were 1,030 MW in 2020, 172 MW in 2021, 420 MW of gas in 2022 and 830 MW of coal in 2023. [e17][e18][e37][e22]

### What if the federal wind and solar credits end on schedule?

Public Law 119-21 ends 45Y for wind and solar placed in service after 2027, for projects starting construction more than 12 months after enactment. [e31][e32] The queue still holds 160,102 MW of battery and 95,032 MW of gas requests alongside solar and wind. [e30] (Reasoning) How much of the solar queue gets built after the cutoff is the open question; the sources do not forecast it.

## Open items

- Conflicting 2024 shares: the 2024 IMM report says gas was 44.2% and coal 12.6% of 2024 output; the 2025 IMM report says gas was 44.3% in 2024 and coal was "flat at 12.9%". I cite both.
- Conflicting 2023 solar share: the IMM 2023 report says 7.3% [e24]; the IMM 2024 report says 7.2% [e3]. Both cited.
- Wind's 2025 generation share as a percentage is not stated in IMM 2025 text ("nearly flat"). The ERCOT fact sheet's 2025 energy-use and 2026 capacity pie charts appear to list wind, gas, nuclear and other shares, but the extracted text scrambles the labels and values, so I did not cite any of those percentages (including total installed wind MW).
- Nuclear's share of ERCOT generation is not stated in quotable IMM text; EIA's "about 10%" nuclear figure is for Texas statewide and dated 2021.
- 2024-2025 retirements by fuel in MW are not stated in quotable text; the annual report gives only the 2016-2025 thermal total.
- The annual report's fuel-by-fuel capacity rows (thermal, intermittent, storage by year) did not extract in a quotable order; only the Total row is cited.
