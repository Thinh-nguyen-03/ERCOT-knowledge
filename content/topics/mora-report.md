---
id: mora-report
name: MORA Report
aliases: [MORA, Monthly Outlook for Resource Adequacy]
kind: report
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: cdr-report
    type: contrasts-with
    note: The MORA is a monthly outlook that evaluates the risk of emergency conditions; the CDR provides a deterministic view of future resource adequacy with alternative scenarios. [e2][e11]
  - to: eea
    type: measures
    note: The MORA estimates hourly probabilities that ERCOT would need to declare an Energy Emergency Alert. [e2]
  - to: resource-adequacy
    type: measures
    note: The MORA evaluates resource adequacy for the upcoming assessment month. [e2]
  - to: prc
    type: related
    note: The MORA's CAFOR thresholds are proxies for the Physical Responsive Capability thresholds that the Protocols tie to EEA Level 1 and Level 3. [e5][e12][e13]
  - to: energy-storage-resource
    type: related
    note: The January 2027 MORA incorporates a new battery energy storage system sub-model integrated into the PRRM. [e10][e18]
  - to: ffss
    type: related
    note: The PRRM models an outage reduction for units in the Firm Fuel Supply Service program. [e15]
  - to: large-flexible-load
    type: related
    note: The MORA forecasts Large Flexible Load consumption and price-responsive demand reduction as model inputs. [e17][e16]
  - to: winter-storm-uri
    type: related
    note: The extreme-weather outage distribution in the PRRM is scaled up to the maximum amount observed during Winter Storm Uri. [e15]
  - to: ordc
    type: related
    note: Unlike the ORDC, which prices reserve scarcity, the MORA reports probabilities of reserve shortage; see the ordc topic for the price mechanism.
evidence:
  - id: e1
    source: ercot-mora-2027-01
    locator: "MORA Release Schedule"
    quote: "MORA releases are targeted for the first Friday of each month, or the next business day if the Friday is a holiday. A MORA is released two months prior to the reporting month; for example, the planned release of the MORA report for August would be the first Friday in June. ERCOT may post one or more revised versions of a MORA report if material data errors are discovered."
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
      The MORA uses CAFOR reserve thresholds of 2,500 and 1,500 MW to indicate, respectively, the risk that an Energy Emergency Alert and controlled outages may be triggered during the time of the forecasted monthly peak load day. These threshold levels are intended to be proxies to the 2,500 and 1,500 MW Physical Responsive Capability (PRC) thresholds. While PRC is a real-time capability measure for Resources that can quickly respond to system disturbance, ERCOT believes that the 2,500 and 1,500 MW CAFOR thresholds are appropriate indicators for the risk of Emergency Conditions given the uncertainties in predicting system conditions months in advance.
  - id: e6
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling"
    quote: >-
      For MORA development, ERCOT uses an in-house-developed model called the Probabilistic Reserve Risk Model (PRRM). The model uses Monte Carlo simulation techniques to generate 10,000 outcomes for Capacity Available for Operating Reserves (CAFOR).
  - id: e7
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "The monthly capacity reserve margin for the deterministic scenario, expressed as a percentage, is 44.9% for the highest risk hour, Hour Ending 8:00 a.m. Reserve Margin formula: ((Total Resources / (Peak Demand - Emergency Resources)) - 1) * 100"
  - id: e8
    source: ercot-mora-2027-01
    locator: "Background tab, Capacity Available for Operating Reserves"
    quote: "CAFOR Formula: = Monthly Maximum Expected Resource Generation Capability – Demand – Thermal Outages + Pre-EEA Resources if CAFOR < 3,000 MW + EEA Resources if CAFOR < 2,500 MW"
  - id: e9
    source: ercot-mora-2027-01
    locator: "Hourly Risk Assessment of CAFOR"
    quote: "Note that this probability forecast is not intended to predict specific capacity reserve outcomes."
  - id: e10
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "This MORA report incorporates the impacts of a new battery energy storage system (BESS) sub-model integrated into the PRRM."
  - id: e11
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The CDR provides a deterministic view of future resource adequacy along with several alternative load and planned resource scenarios designed to capture a range of potential reserve margin outcomes."
  - id: e12
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (1)"
    quote: "ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:"
  - id: e13
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (3)"
    quote: "ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Physical Responsive Capability (PRC)"
    quote: "A representation of the total amount of frequency responsive Resource capability On-Line in Real-Time."
  - id: e15
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling, risk variables"
    quote: "Extreme-Weather-Related Thermal Outages - For the winter months, the probability distribution reflects a range of daily unplanned weather-related outage amounts scaled from zero MW to the maximum amount observed during Winter Storm Uri. The probability distribution is correlated with the Low Ambient Temperature curve. An outage reduction amount, reflecting availability of generating units that participate in the Firm Fuel Supply Service (FFSS) program, is also modeled."
  - id: e16
    source: ercot-mora-2027-01
    locator: "Background tab, Other Dynamically Determined Resource Variables, Price-Responsive Demand Reduction (Winter Months)"
    quote: "The model triggers this demand reduction if a severe winter storm (at least as severe as Winter Storm Elliott) or extremely high net loads occurs for a given simulation outcome."
  - id: e17
    source: ercot-mora-2027-01
    locator: "Background tab, Large Flexible Load Consumption Forecast"
    quote: "The LFL pattern indicates a reduction to 50% over the coincident peak hours for the months of June, July, August, and September and to 15% over the net-load peak hours for these months."
  - id: e18
    source: ercot-mora-2027-01
    locator: "Background tab, Battery Energy Storage System (BESS) Output Sub-model"
    quote: "The daily scheduling period for non-winter months is all 24 hours, while the winter months have two daily scheduling periods, hours 1-10 and 11-24, reflecting bimodal morning and evening high net load periods, respectively."
  - id: e19
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling, Monthly Peak Load risk variable"
    quote: "Monthly Peak Load - The Peak load variable is negatively correlated with a system-average temperature probability distribution. (For the winter months, the lower the temperature selected by the model for a simulation, the higher the peak load selected.)"
  - id: e20
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling, Wind Production risk variable"
    quote: "Note that synthetic wind profiles do not reflect actual observed generation. They are based on meteorological and power conversion models that together simulate what wind production would be for existing and planned sites at the start of the month based on historical hourly weather patterns."
  - id: e21
    source: ercot-mora-2027-01
    locator: "Background tab, Probabilistic Modeling, Weather-related Outage Reduction Success Rate due to Weatherization"
    quote: "For selected (\"sampled\") temperatures greater than five degrees °F above the weatherization standard's compliance temperature threshold, the success rate is fixed at 85%."
  - id: e22
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "Hourly reserve shortage risks for January are the highest during the morning hours, with EEA probabilities that remain well below the threshold indicative of 'elevated' reserve shortage risk (10%)."
  - id: e23
    source: ercot-mora-2027-01
    locator: "Hourly Risk Assessment of CAFOR"
    quote: "As a guideline to interpret these probabilities, ERCOT considers an EEA probability at or below 10% to indicate that the reserve adequacy risk is low for the monthly peak load day. An EEA probability above 10% indicates an elevated reserve adequacy risk."
  - id: e24
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "The deterministic load forecast value for this hour is 78,912 MW, reflecting the 50th percentile for the MORA forecast. This MORA deterministic scenario assumes a total thermal outage amount (planned plus unplanned) of 8,105 MW during normal grid conditions."
  - id: e25
    source: ercot-mora-2027-01
    locator: "Monthly Outlook, Deterministic results table (January 2027, HE 8:00 a.m.)"
    quote: "Load Based on Average Weather [1] 78,912 Generation Resource Stack Dispatchable [2] 88,322 Thermal, excluding RMR and other Emergency Generation Agreements 74,616 Energy Storage [3] 13,275 Hydro 431 Expected Thermal Outages 8,105 Planned 417 Unplanned 7,688"
  - id: e26
    source: ercot-mora-2027-01
    locator: "Monthly Outlook, Deterministic results table (January 2027, HE 8:00 a.m.)"
    quote: "Total Available Resources (Normal Conditions) 97,116 Emergency Resources Available prior to an Energy Emergency Alert [5] Emergency Response Service 2,401 Distribution Voltage Reduction 1,279 Total Available prior to an Energy Emergency Alert 3,680"
  - id: e27
    source: ercot-mora-2027-01
    locator: "Monthly Outlook, Deterministic results table (January 2027, HE 8:00 a.m.)"
    quote: "Total Emergency Resources 6,279 Capacity Available for Operating Reserves, Normal Conditions 21,884 Capacity Available for Operating Reserves, Emergency Conditions 24,483 Less than 2,500 MW indicates risk of EEA Level 1 Less than 1,500 MW indicates risk of EEA Level 3 Load Shed"
  - id: e28
    source: ercot-mora-2027-01
    locator: "Monthly Outlook, Deterministic results table, footnote [5]"
    quote: "Although crypto-mining load may self-curtail beyond forecasted levels in response to an imminent energy emergency, such load reduction is not dispatchable or controllable, and is therefore not considered an emergency resource for this scenario."
  - id: e29
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights, January 2027"
    quote: "While the model accounts for the risk of coastal wind curtailment needed to avoid overloads on lines that make up the South Texas export interface, it does not capture the risk of emergency conditions due to transmission constraints impacting imports into Far West Texas."
  - id: e30
    source: ercot-mora-2027-01
    locator: "Storm & Low Wind-BESS Risk, Risk Profile for Combined Low Wind and Limited BESS Availability"
    quote: "Variability in wind generation represents the greatest risk factor for declaring an EEA in January, although the possibility of significantly low BESS State of Charge can also be a substantial risk factor."
  - id: e31
    source: ercot-mora-2027-01
    locator: "Disclaimer"
    quote: "Note that resource data is based on a mid-month Resource Integration and Ongoing Operations (RIOO) system snapshot."
  - id: e32
    source: puct-25-505
    locator: "16 TAC §25.505(b), Resource adequacy reports"
    quote: "ERCOT may publish other resource adequacy reports or forecasts as it deems appropriate."
---

## Definition

The MORA, or Monthly Outlook for Resource Adequacy, is an ERCOT report that evaluates resource adequacy for the upcoming assessment month. It does so in two ways: a probabilistic estimate of the risk of emergency conditions on the monthly peak load day, and a deterministic scenario for typical grid conditions. [e2][e3]

## How it works

ERCOT targets MORA releases for the first Friday of each month (or the next business day if the Friday is a holiday), and each MORA is released two months before its reporting month. [e1] ERCOT may post revised versions if material data errors are found, and resource data come from a mid-month RIOO snapshot. [e1][e31] The probabilistic side gives the chances, across a range of hours, that ERCOT may need to issue an Energy Emergency Alert or begin controlled outages. [e2] ERCOT runs its Probabilistic Reserve Risk Model, a Monte Carlo model, to generate 10,000 outcomes for Capacity Available for Operating Reserves (CAFOR). [e6]

## Formula

The CAFOR formula is the monthly maximum expected resource generation capability, minus demand, minus thermal outages, plus Pre-EEA Resources if CAFOR is below 3,000 MW, plus EEA Resources if CAFOR is below 2,500 MW. [e8] The MORA reads CAFOR against thresholds of 2,500 MW (EEA risk) and 1,500 MW (controlled outage risk), which are proxies for the 2,500 and 1,500 MW Physical Responsive Capability thresholds. [e5] The MORA's deterministic results table reads a CAFOR below 2,500 MW as a risk of EEA Level 1 and below 1,500 MW as a risk of EEA Level 3 load shed. [e27] The Protocols declare Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the prescribed Level 1 actions, and Level 3 when PRC cannot be maintained above 1,500 MW (or on frequency criteria). [e12][e13]

The MORA says why it uses proxies: PRC is a real-time capability measure for Resources that can respond quickly, and ERCOT believes the 2,500 and 1,500 MW CAFOR levels are appropriate indicators of emergency risk given the uncertainty of predicting conditions months ahead. [e5] The Protocol defines PRC as a representation of the total amount of frequency responsive Resource capability On-Line in Real-Time. [e14]

For the deterministic scenario, the report states its monthly capacity reserve margin as ((Total Resources / (Peak Demand - Emergency Resources)) - 1) * 100. [e7]

The PRRM uses probability distributions for its risk variables. The MORA lists, among them: monthly peak load, negatively correlated with temperature so colder winter draws give higher peaks [e19]; wind production from synthetic profiles, which do not reflect actual observed generation [e20]; and, for winter, extreme-weather thermal outages scaled up to the maximum observed during Winter Storm Uri, with an FFSS outage reduction. [e15] A weatherization success rate is fixed at 85% for sampled temperatures more than five degrees F above the weatherization standard's compliance temperature threshold. [e21]

Winter price-responsive demand reduction is triggered when a simulation outcome has a severe winter storm (at least as severe as Winter Storm Elliott) or extremely high net loads. [e16] The Large Flexible Load pattern indicates a reduction to 50% over the coincident peak hours for June through September and to 15% over the net-load peak hours for those months. [e17]

The BESS sub-model (new in the January 2027 MORA) schedules the battery fleet from the net load forecast; non-winter months use one 24-hour scheduling period and winter months use hours 1-10 and 11-24 for the morning and evening peaks. [e10][e18]

## ERCOT context

In the January 2027 MORA, the hour with the highest EEA risk is HE 8:00 a.m. CST, at a 3.20% probability that ERCOT would need to declare an EEA. [e4] ERCOT treats an EEA probability at or below 10% as low reserve adequacy risk for the monthly peak load day, and the January figures are well below the 10% mark. [e23][e22] The report cites wind variability as the greatest EEA risk factor in January, with low battery state of charge a substantial one. [e30]

Deterministic scenario, January 2027, HE 8:00 a.m.: load 78,912 MW (50th percentile) and expected thermal outages of 8,105 MW (417 MW planned, 7,688 MW unplanned). [e24][e25] Dispatchable resources are 88,322 MW, of which energy storage is 13,275 MW. [e25] Total available resources under normal conditions are 97,116 MW; emergency resources available before an EEA are 3,680 MW (ERS 2,401 MW, distribution voltage reduction 1,279 MW). [e26] Total emergency resources are 6,279 MW, and CAFOR is 21,884 MW under normal and 24,483 MW under emergency conditions. [e27] The reserve margin is 44.9%. [e7]

Crypto-mining self-curtailment is not counted as an emergency resource in the scenario because it is not dispatchable or controllable. [e28] The model does not capture emergency risk from transmission constraints limiting imports into Far West Texas. [e29]

## Key facts

- Release is targeted for the first Friday of each month, for the reporting month two months ahead. [e1]
- Two approaches: probabilistic EEA and controlled-outage risk, plus a deterministic typical-conditions scenario. [e2][e3]
- CAFOR thresholds: 2,500 MW for EEA risk and 1,500 MW for controlled outage risk. [e5]
- Model: PRRM, with 10,000 Monte Carlo outcomes. [e6]
- 16 TAC 25.505(b) says ERCOT may publish other resource adequacy reports or forecasts as it deems appropriate; the rule does not name the MORA. [e32]
- 10% EEA probability is ERCOT's guideline line between low and elevated risk for the peak day. [e23]
- January 2027 MORA: highest EEA risk hour is HE 8:00 a.m. CST at 3.20%; deterministic reserve margin 44.9%. [e4][e7]

## Say it like this

(Guidance) The MORA is ERCOT's monthly look-ahead for resource adequacy. It gives hour-by-hour probabilities of an emergency alert on the peak day and a deterministic reserve margin for typical conditions.

## Common confusion

(Guidance) The MORA's probability is not a prediction of a specific outcome. [e9] Also, the MORA's CAFOR thresholds are intended as proxies for the PRC thresholds, not the same measure. [e5] The MORA is also not the CDR: the CDR gives a deterministic view of future resource adequacy with alternative load and planned resource scenarios. [e11]

(Guidance) The MORA reserve margin (44.9%) is computed with the report's own stated formula, which nets emergency resources out of peak demand; do not assume it equals a reserve margin computed another way. [e7]

## Questions

### How far ahead does the MORA look?

It is released two months before the month it covers. [e1]

### What do the 2,500 and 1,500 MW CAFOR thresholds mean?

They indicate the risk that an EEA and controlled outages may be triggered, and they are proxies for the PRC thresholds of the same sizes. [e5]

### Why does the MORA use CAFOR instead of PRC directly?

PRC is a real-time capability measure for fast-responding Resources, and ERCOT believes the CAFOR levels are appropriate indicators of emergency risk given the uncertainty in predicting conditions months in advance. The Protocols' EEA Level 1 trigger is written on PRC, and Level 3 on PRC or frequency. [e12][e13]

### Why is January's highest EEA risk in the morning rather than at the afternoon peak?

The January 2027 MORA reports the highest reserve shortage risk in the morning hours, with HE 8:00 a.m. highest at 3.20%. [e22][e4] It cites wind variability as the greatest risk factor. [e30]

### What if there is a severe winter storm in the model?

The model draws extreme-weather thermal outages up to the maximum observed during Winter Storm Uri, with an FFSS offset, and triggers price-responsive demand reduction when a storm is at least as severe as Winter Storm Elliott. [e15][e16]

### What does the MORA not cover?

It does not capture emergency risk from transmission constraints on imports into Far West Texas, and its probabilities are not forecasts of specific reserve outcomes. [e29][e9]

## Scenarios

### A trader sees a 3.20% EEA probability at HE 8:00 a.m. in the MORA. Is that alarming?

- ERCOT's guideline treats at or below 10% as low reserve adequacy risk for the monthly peak load day. [e23]
- 3.20% is the highest hour in the January 2027 MORA. [e4]
- The probabilistic side runs on the PRRM, which generates 10,000 CAFOR outcomes, and the probability forecast is not intended to predict specific capacity reserve outcomes. [e6][e9]

## Open items

- The 44.9% reserve margin is not reproduced by the report's own line items in an obvious way. Analyst arithmetic (not stated in the source): installed dispatchable 88,322 MW plus non-dispatchable 16,179 MW plus ties 720 MW, divided by peak demand less the 6,279 MW of emergency resources, gives about 44.9%, which suggests Total Resources is before thermal outages. The report does not define Total Resources; confirm in the workbook.
- The deterministic table text from the PDF interleaves labels and numbers; the breakdown of the 2,599 MW of resources available during an EEA (Load Resources, TDSP programs, RMR) was not quoted because label alignment is ambiguous.
- Legal basis: 16 TAC 25.505(b) lets ERCOT publish other resource adequacy reports as it deems appropriate; that does not name the MORA, and no Protocol or rule requiring the MORA was found in the saved sources. [e32]
- Only the January 2027 edition is saved; the long-run trend of MORA outcomes and prior editions are not available.
- The 3,000 MW Pre-EEA threshold in the CAFOR formula is not tied here to a Protocol provision; the Protocols' use of a 3,000 MW PRC Watch level was not cited.
