---
id: cdr-report
name: CDR Report
aliases: [CDR, Capacity Demand and Reserves report, Report on Capacity, Demand and Reserves]
kind: report
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-adequacy
    type: measures
    note: The CDR is ERCOT's multi-year forward look at whether resources cover firm demand. [e3][e4]
  - to: mora-report
    type: contrasts-with
    note: The MORA looks one month ahead with probabilistic risk, while the CDR looks years ahead with a deterministic view. [e6]
  - to: nodal-protocols
    type: related
    note: Protocol Section 3.2.6 requires the CDR twice a year. [e1]
  - to: puct
    type: related
    note: PUCT rule 25.505 requires an annual resource adequacy report covering at least five years. [e3]
  - to: sb6
    type: related
    note: The December 2025 CDR adds scenarios for SB 6 large load curtailment. [e8]
  - to: long-term-load-forecast
    type: related
    note: The CDR uses the ERCOT Adjusted Load Forecast. [e6]
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.2.6(1), Report on Capacity, Demand and Reserves in the ERCOT Region"
    quote: "ERCOT shall prepare and publish the Report on Capacity, Demand and Reserves in the ERCOT Region (CDR) twice per year. ERCOT will target the posting of the preliminary CDR during the third week of each May and the final CDR during the third week of each December."
  - id: e2
    source: np-03
    locator: "Section 3.2.6(2)"
    quote: "Load and capacity forecasts shall be reported for at least the next five years beyond the year that the CDRs are published."
  - id: e3
    source: puct-25-505
    locator: "16 TAC §25.505(b), Resource adequacy reports"
    quote: "ERCOT must publish a resource adequacy report by December 31 of each year that projects, for at least the next five years, the capability of existing and planned electric generation resources and load resources to reliably meet the projected system demand in the ERCOT power region."
  - id: e4
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab"
    quote: "The main purpose of the CDR is to provide forecasted Planning Reserve Margins by season and year. The Planning Reserve Margin represents the percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply."
  - id: e5
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab"
    quote: "Note that the CDR is not intended for characterizing the risk of capacity scarcity conditions from a real-time operations perspective."
  - id: e6
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The CDR provides a deterministic view of future resource adequacy along with several alternative load and planned resource scenarios designed to capture a range of potential reserve margin outcomes."
  - id: e7
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: >-
      The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST).
  - id: e8
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The most impactful resource adequacy development since the May 2025 CDR release are provisions in Texas Senate Bill 6 (SB6), signed into law in June 2025, that establish new interconnection requirements for Large Loads and ERCOT authority to curtail Large Load consumption before and during declared grid emergencies."
  - id: e10
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: >-
      that summer and winter Planning Reserve Margins for 2026 through 2030 decrease significantly from year to year, and cross over to negative values in 2028 in line with the trends reported in the May 2025 CDR.
  - id: e9
    source: ercot-cdr-2025-12
    locator: "Planning Reserve Margins for the Peak Load and Peak Net Load Hours"
    quote: "The lower and sharply downward trajectory of the Margins is due to (1) high load growth largely driven by new Loads reported by Transmission Service Providers, (2) a lower capacity contribution from wind and solar resources due to the use of Effective Load Carrying Capabilities, (3) fewer planned resources that result from applying additional eligibility criteria to be included in Planning Reserve Margins."
---

## Definition

The CDR is ERCOT's Report on Capacity, Demand and Reserves in the ERCOT Region. Its main purpose is to provide forecasted Planning Reserve Margins by season and year, where the Planning Reserve Margin is the percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply. [e4]

## How it works

The Protocols require ERCOT to publish the CDR twice a year, with a preliminary version targeted for the third week of May and a final version for the third week of December. [e1] Forecasts must cover at least the next five years beyond the publication year. [e2] PUCT rule 25.505 separately requires an annual resource adequacy report by December 31 that projects at least five years of capability against projected demand. [e3]

The CDR gives a deterministic view, meaning a single set of rule-based assumptions, alongside several alternative load and planned-resource scenarios that capture a range of reserve margin outcomes. [e6] It is a planning tool: ERCOT notes it is not intended to characterize the risk of capacity scarcity from a real-time operations perspective. [e5]

## ERCOT context

In the December 2025 CDR, the base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (HE 5:00 p.m. CST) and 20.9% for the peak Net Load hour (HE 9:00 p.m. CST). [e7] The report says the base scenario's summer and winter margins for 2026 through 2030 decrease significantly from year to year and cross over to negative values in 2028. [e10] The three drivers it gives are high load growth largely from new Loads reported by TSPs, lower wind and solar capacity contributions from using ELCCs, and fewer planned resources passing additional eligibility criteria. [e9]

The report calls SB 6 the most impactful resource adequacy development since the May 2025 CDR: it set new interconnection requirements for Large Loads and gave ERCOT authority to curtail Large Load consumption before and during declared grid emergencies. [e8]

## Key facts

- Published twice a year: preliminary in May, final in December (targets). [e1]
- Covers at least five years beyond the publication year. [e2]
- December 2025 CDR base scenario, summer 2026: 18.3% (peak Load hour) and 20.9% (peak Net Load hour). [e7]
- Base scenario margins turn negative in 2028 (December 2025 CDR). [e10]
- Deterministic by design; not a real-time scarcity risk measure. [e5][e6]

## Say it like this

(Guidance) The CDR is ERCOT's multi-year look at whether expected resources cover forecast firm demand, shown as planning reserve margins by season. It is a rules-based planning snapshot, so treat its negative later-year margins as a signal about the trend, not a forecast of outages.

## Common confusion

(Guidance) The CDR is not the MORA. The CDR looks at seasons across five years under Protocol-prescribed rules, and the MORA looks at one upcoming month using probabilistic modelling. [e6] The CDR margin is also not an operating reserve measure; it is a planning margin against firm peak demand. [e4][e5]

## Questions

### What is a Planning Reserve Margin?

The percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply. [e4]

### Why did the December 2025 CDR show margins falling over time?

The report cites high load growth largely from new Loads reported by TSPs, lower wind and solar contributions from ELCCs, and fewer planned resources meeting eligibility criteria. [e9]

### How often is the CDR published?

Twice a year per the Protocols, with May (preliminary) and December (final) targets. [e1]

## Open items

- Deeper pass: the four scenarios (including TEF capacity and SB 6 curtailment assumptions), exact margin values for 2027-2030, and the ELCC methodology.
- Deeper pass: Protocol Sections 3.2.6.1-3.2.6.3 on how Planning Reserve Margin and firm peak load are calculated.
- The dollar-per-kW or reliability-standard link to the reserve margin target is not covered here.
