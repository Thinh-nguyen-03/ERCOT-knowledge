---
id: mora-report
name: MORA Report
aliases: [MORA, Monthly Outlook for Resource Adequacy]
kind: report
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: cdr-report
    type: contrasts-with
    note: The MORA is a monthly outlook that evaluates the risk of emergency conditions; see the cdr-report topic for the separate CDR report. [e2]
  - to: eea
    type: measures
    note: The MORA estimates hourly probabilities that ERCOT would need to declare an Energy Emergency Alert. [e2]
  - to: resource-adequacy
    type: measures
    note: The MORA evaluates resource adequacy for the upcoming assessment month. [e2]
  - to: prc
    type: related
    note: The MORA's CAFOR thresholds are proxies for the Physical Responsive Capability thresholds. [e5]
  - to: energy-storage-resource
    type: related
    note: The January 2027 MORA incorporates a new battery energy storage system sub-model integrated into the PRRM. [e10]
evidence:
  - id: e1
    source: ercot-mora-2027-01
    locator: "MORA Release Schedule"
    quote: "MORA releases are targeted for the first Friday of each month, or the next business day if the Friday is a holiday. A MORA is released two months prior to the reporting month; for example, the planned release of the MORA report for August would be the first Friday in June."
  - id: e2
    source: ercot-mora-2027-01
    locator: "Introduction"
    quote: >-
      The MORA report adopts two approaches to evaluate resource adequacy for the upcoming assessment month:
      ● Determine the risk that ERCOT may face emergency conditions for the monthly peak load day — specifically, the chances, during a range of hours, that it may need to issue an Energy Emergency Alert (EEA) or begin to order controlled outages to maintain grid reliability.
  - id: e3
    source: ercot-mora-2027-01
    locator: "Introduction, second approach"
    quote: "The focus of the MORA's deterministic scenario is on typical grid conditions."
  - id: e4
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: >-
      The hour with the highest EEA risk is Hour Ending (HE) 8:00 a.m. Central Standard Time (CST), with a 3.20% probability that ERCOT would need to declare an EEA.
  - id: e5
    source: ercot-mora-2027-01
    locator: "Background tab, Capacity Available for Operating Reserves"
    quote: >-
      The MORA uses CAFOR reserve thresholds of 2,500 and 1,500 MW to indicate, respectively, the risk that an Energy Emergency Alert and controlled outages may be triggered during the time of the forecasted monthly peak load day. These threshold levels are intended to be proxies to the 2,500 and 1,500 MW Physical Responsive Capability (PRC) thresholds.
  - id: e6
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling"
    quote: >-
      For MORA development, ERCOT uses an in-house-developed model called the Probabilistic Reserve Risk Model (PRRM). The model uses Monte Carlo simulation techniques to generate 10,000 outcomes for Capacity Available for Operating Reserves (CAFOR).
  - id: e7
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "The monthly capacity reserve margin for the deterministic scenario, expressed as a percentage, is 44.9% for the highest risk hour, Hour Ending 8:00 a.m. Reserve Margin formula: ((Total Resources / (Peak Demand - Emergency Resources)) - 1) * 100"
  - id: e9
    source: ercot-mora-2027-01
    locator: "Hourly Risk Assessment of CAFOR"
    quote: "Note that this probability forecast is not intended to predict specific capacity reserve outcomes."
  - id: e8
    source: ercot-mora-2027-01
    locator: "Background tab, Capacity Available for Operating Reserves"
    quote: "CAFOR Formula: = Monthly Maximum Expected Resource Generation Capability – Demand – Thermal Outages + Pre-EEA Resources if CAFOR < 3,000 MW + EEA Resources if CAFOR < 2,500 MW"
  - id: e10
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "This MORA report incorporates the impacts of a new battery energy storage system (BESS) sub-model integrated into the PRRM."
---

## Definition

The MORA, or Monthly Outlook for Resource Adequacy, is an ERCOT report that evaluates resource adequacy for the upcoming assessment month. It does so in two ways: a probabilistic estimate of the risk of emergency conditions on the monthly peak load day, and a deterministic scenario for typical grid conditions. [e2][e3]

## How it works

ERCOT targets MORA releases for the first Friday of each month (or the next business day if the Friday is a holiday), and each MORA is released two months before its reporting month. [e1] The probabilistic side gives the chances, across a range of hours, that ERCOT may need to issue an Energy Emergency Alert or begin controlled outages. [e2] ERCOT runs its Probabilistic Reserve Risk Model, a Monte Carlo model, to generate 10,000 outcomes for Capacity Available for Operating Reserves (CAFOR). [e6]

The CAFOR formula is the monthly maximum expected resource generation capability, minus demand, minus thermal outages, plus Pre-EEA Resources if CAFOR is below 3,000 MW, plus EEA Resources if CAFOR is below 2,500 MW. [e8] The MORA reads CAFOR against thresholds of 2,500 MW (EEA risk) and 1,500 MW (controlled outage risk), which are proxies for the 2,500 and 1,500 MW Physical Responsive Capability thresholds. [e5] For the deterministic scenario, the report states its monthly capacity reserve margin and gives the formula ((Total Resources / (Peak Demand - Emergency Resources)) - 1) * 100. [e7]

## ERCOT context

In the January 2027 MORA, the hour with the highest EEA risk is HE 8:00 a.m. CST, at a 3.20% probability that ERCOT would need to declare an EEA. [e4] That report also incorporates a new battery energy storage system sub-model integrated into the PRRM. [e10] See the CDR topic for ERCOT's separate CDR report.

## Key facts

- Release is targeted for the first Friday of each month, for the reporting month two months ahead. [e1]
- Two approaches: probabilistic EEA and controlled-outage risk, plus a deterministic typical-conditions scenario. [e2][e3]
- CAFOR thresholds: 2,500 MW for EEA risk and 1,500 MW for controlled outage risk. [e5]
- Model: PRRM, with 10,000 Monte Carlo outcomes. [e6]
- January 2027 MORA: highest EEA risk hour is HE 8:00 a.m. CST at 3.20%. [e4]

## Say it like this

(Guidance) The MORA is ERCOT's monthly look-ahead for resource adequacy. It gives hour-by-hour probabilities of an emergency alert on the peak day and a deterministic reserve margin for typical conditions.

## Common confusion

(Guidance) The MORA's probability is not a prediction of a specific outcome. [e9] Also, the MORA's CAFOR thresholds are intended as proxies for the PRC thresholds, not the same measure. [e5]

## Questions

### How far ahead does the MORA look?

It is released two months before the month it covers. [e1]

### What do the 2,500 and 1,500 MW CAFOR thresholds mean?

They indicate the risk that an EEA and controlled outages may be triggered, and they are proxies for the PRC thresholds of the same sizes. [e5]

## Open items

- Deeper pass: the January 2027 deterministic scenario results (reserve margin 44.9% at HE 8:00, load forecast and outage assumptions) and the full list of risk variables.
- Deeper pass: how the MORA's CAFOR relates to the Protocol PRC definition and EEA triggers.
- The legal basis for the MORA (whether a PUCT rule or Protocol requires it) was not found in the saved sources.
