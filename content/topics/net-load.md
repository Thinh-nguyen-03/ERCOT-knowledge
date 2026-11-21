---
id: net-load
name: Net Load
aliases: [Net Load, Peak Net Load, net peak, net load peak]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: evening-ramp
    type: related
    note: The IMM ties the shift of tight hours to the evening to the solar down-ramp, which is when net load peaks. [e2]
  - to: solar-generation
    type: affects
    note: Solar output is subtracted from load, and its capacity factor at the net peak interval fell to 1.7% in 2025. [e1][e11]
  - to: wind-generation
    type: affects
    note: Wind output is subtracted from load and held a 29.3% capacity factor at the net peak interval in 2025. [e1][e11]
  - to: load-forecasting
    type: related
    note: The IMM reports that the average net load forecast error, measured eight hours ahead of real time, fell to about 452 MW in 2025. [e9][e15]
  - to: energy-storage-resource
    type: related
    note: ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a recurring pattern. [e14]
  - to: cdr-report
    type: used-in
    note: The CDR reports reserve margins for both the peak Load hour and the peak Net Load hour. [e5]
  - to: ancillary-services
    type: related
    note: The IMM says the Regulation procurement target is set according to the 95th percentile of net load forecast error on a five-minute look-ahead; ERCOT's 2026 methodology words it as covering the 95th percentile of deployed regulation or net load variability. [e10][e23]
  - to: resource-adequacy
    type: related
    note: SB 3 (new PURA §39.159(b)(5)) has the commission ensure ERCOT sizes the services procured under subdivision (3) to prevent prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e30][e31][e8]
  - to: ecrs
    type: related
    note: ERCOT's CDR glossary says ECRS was developed to address net load ramps; ECRS and Non-Spin sizing uses 30-minute and 6-hour-ahead net load forecast errors. [e24][e22]
  - to: non-spin
    type: related
    note: ERCOT's 2026 AS methodology says net load ramp risk should be accounted for in setting Non-Spin requirements. [e21]
  - to: market-power-mitigation
    type: related
    note: The IMM measures structural market power in top-quartile net load hours; the share with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e25]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Net Load"
    quote: "The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period."
  - id: e2
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 3. Prices by Time of Day"
    quote: "The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.). This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up."
  - id: e3
    source: imm-som-2024
    locator: "Executive Summary, implications of the changing resource mix"
    quote: "Peak net load refers to the peak of system demand net of renewable generation. As more solar is added to the grid, these hours are increasingly shifting later in the day. By 2028, the peak net load hour is expected to occur in the late evening, when solar output is minimal or zero, but demand is still high."
  - id: e4
    source: imm-som-2024
    locator: "Demand and Supply in ERCOT, discussion of Figure 17"
    quote: "Figure 17 shows that in 2024, the peak net load was 69.6 GW, about 10 GW lower than in 2023 and 5 GW lower than in 2022. This decline was driven by a sharp increase in solar capacity and milder summer weather."
  - id: e5
    source: ercot-cdr-2025-12
    locator: "Executive Summary bullets"
    quote: "The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST)."
  - id: e6
    source: ercot-summer-2026-review
    locator: "Slide 5, Net Load with Energy Storage Resource (ESR) Contribution"
    quote: "12 of the top 20 Hourly Net Load Hours have been from 2026. The Peak Net Load typically occurs in HE 20:00 – 21:00 and occur most often during the Summer."
  - id: e7
    source: ercot-summer-2026-review
    locator: "Slide: Net Load HE 17-22 for Summers 2024-2026"
    quote: "Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July."
  - id: e8
    source: sb3-87r
    locator: "SB 3 (87R), Section 18, new PURA §39.159(b)(5) (bill line number appears in the text)"
    quote: "to prevent prolonged rotating outages due to net load variability 14 in high demand and low supply scenarios."
  - id: e9
    source: imm-som-2025
    locator: "Market Operations chapter, net load forecast error (Figure 50 discussion)"
    quote: "By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load."
  - id: e10
    source: imm-som-2025
    locator: "Ancillary Services chapter, AS Methodology discussion"
    quote: "For example, the procurement target for Regulation is set according to the 95th percentile of net load forecast error based on a five-minute look-ahead."
  - id: e11
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, Table 2 discussion"
    quote: "Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years."
  - id: e12
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e13
    source: ercot-mora-2027-01
    locator: "Battery Energy Storage System (BESS) Output Sub-model description"
    quote: "The daily scheduling period for non-winter months is all 24 hours, while the winter months have two daily scheduling periods, hours 1-10 and 11-24, reflecting bimodal morning and evening high net load periods, respectively."
  - id: e14
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e15
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 introduction"
    quote: "Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time."
  - id: e16
    source: imm-som-2022
    locator: "2022 State of the Market Report, Demand and Supply in ERCOT, discussion of Figure 19"
    quote: "Figure 19 shows the peak net load was 74.5 GW and the 95th percentile was 61.5 GW in 2022. These net load values across the highest 440 net load hours reflect a 14% increase from 2021. This continues a trend of increasing load that must be served by non-renewable resources. The minimum net load dropped from roughly 15 GW in 2016 to about 10.4 GW in 2022."
  - id: e17
    source: imm-som-2023
    locator: "2023 State of the Market Report, Demand and Supply in ERCOT, discussion of Figure 20"
    quote: "Figure 20 shows the peak net load was 79.3 GW in 2023 with the 95th percentile of peak net load at 67.6 GW. The net load values across the highest 440 net load hours reflect a 9% increase from 2022. This continues a trend of increasing load that must be served by non-renewable resources. The minimum net load dropped from roughly 15 GW in 2022 to about 12 GW in 2023."
  - id: e18
    source: imm-som-2025
    locator: "page 42 (OCR), Table 2: Aggregate Capacity Factor of Wind and Solar Generation 2021-2025 (columns: wind overall, daily peak load, daily net peak load; solar overall, daily peak load, daily net peak load)"
    quote: "2021 33.0% 30.6% 25.6% 23.1% 41.2% 31.1%"
  - id: e19
    source: imm-som-2025
    locator: "page 42 (OCR), Table 2, rows 2023-2025"
    quote: "2023 31.7% 28.5% 26.7% 22.6% 40.4% 10.1% 2024 31.4% 29.0% 27.8% 22.2% 42.5% 3.9% 2025 31.6% 28.5% 29.3% 23.8% 48.4% 1.7%"
  - id: e20
    source: imm-som-2025
    locator: "page 28 (OCR), Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 22% in 2024. Price spikes also occurred relatively frequently during the morning ramp hours, 1.e., between 6 a.m. and 8 a.m., but they accounted for only 7.5% of the total in 2025, down from 8.9% in 2024."
  - id: e21
    source: ercot-as-methodology-2026
    locator: "ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (2026), Non-Spin section"
    quote: "The periods when load is increasing and wind and/or solar are decreasing requires other generation resources to increase output or come online quickly to compensate for the sudden net load increases. As a result, net load ramp risk should be accounted for in the determination of Non-Spin requirements."
  - id: e22
    source: ercot-as-methodology-2026
    locator: "ERCOT AS Methodology (2026), ECRS and Non-Spin, Procedure"
    quote: "Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years."
  - id: e23
    source: ercot-as-methodology-2026
    locator: "ERCOT AS Methodology (2026), Regulation Service section"
    quote: "The Regulation Service requirements are calculated with the expectation that sufficient Regulation Service will be available to cover the 95^(th) percentile of deployed regulation or net load variability."
  - id: e24
    source: ercot-cdr-2025-12
    locator: "December 2025 CDR, ELCC/resource definitions appendix, ECRS description"
    quote: "ECRS was developed to address net load ramps and take advantage of Energy Storage Resources with maximum durations of at least two hours."
  - id: e25
    source: imm-som-2025
    locator: "Executive Summary, Competition and Market Power"
    quote: "The percentage of top-quartile net load hours with a pivotal supplier declined from over 90% in 2022 to 35% in 2025. This positive development is due in large part to milder weather and a large influx of energy storage resources held by smaller participants."
  - id: e26
    source: ercot-cdr-2025-12
    locator: "December 2025 CDR, Planning Reserve Margins for the Peak Load and Peak Net Load Hours"
    quote: "For the winter, both peak Load and peak Net Load Margins enter negative territory beginning winter 2028/29."
  - id: e27
    source: ercot-monthly-ops-2026-10
    locator: "Monthly Operational Overview (October 2026), slide 8, Net Load Forecast Performance"
    quote: "Day Ahead Net Load Forecast - Mean Absolute Forecast Error Day Ahead Net Load Forecast MAE (MW) KPI Goal (4,000 MW)"
  - id: e28
    source: ercot-summer-2026-review
    locator: "Slide 8: Net Load HE 17-22 for Summers 2024-2026, footnote"
    quote: "*2026 data period is 6/1 – 8/15"
  - id: e29
    source: ercot-cdr-2025-12
    locator: "December 2025 CDR, Definitions, Net Load / Peak Net Load"
    quote: "The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period. The peak Net Load is the highest value for the given period."
  - id: e30
    source: sb3-87r
    locator: "SB 3 (87R), Section 18, new PURA §39.159(b), lead-in"
    quote: "The commission shall ensure that the independent organization certified under Section 39.151 for the ERCOT power region:"
  - id: e31
    source: sb3-87r
    locator: "SB 3 (87R), Section 18, new PURA §39.159(b)(5)"
    quote: "(5)AAsizes the services procured under Subdivision (3)"
  - id: e32
    source: ercot-summer-2026-review
    locator: "Slide 5, title"
    quote: "Net Load with Energy Storage Resource (ESR) Contribution"
---

## Definition

In the ERCOT Protocols, Net Load is the Load for a given period minus generation from solar (PVGRs) and wind (WGRs) for the same period. [e1] The December 2025 CDR uses the same definition and defines the peak Net Load as the highest value for the given period. [e29] The IMM describes peak net load as the peak of system demand net of renewable generation. [e3]

## How it works

Net load is Load minus solar and wind generation for the same period, so it is the demand left over after those Resources. [e1] Because solar output falls in the evening while demand stays high, the hour of highest net load lands later than the hour of highest gross load. [e3] The IMM reports that the tightest hours have moved from the firm peak load hour around 4 to 5 p.m. to 7 to 9 p.m., the net load peak. [e2]

ERCOT's planning reports now track both peaks. The December 2025 CDR's base case gives summer 2026 reserve margins of 18.3% at the peak Load hour (hour ending 5 p.m. Central Standard Time) and 20.9% at the peak Net Load hour (hour ending 9 p.m. CST). [e5] For winter, the same CDR says both the peak Load and peak Net Load margins turn negative from winter 2028/29. [e26] ERCOT's summer 2026 review says the peak net load typically falls in HE 20-21 [e6], and that the hour of highest average net load in June and July moved from HE 21 to HE 22, based on 2026 data from June 1 to August 15. [e7][e28]

In winter the pattern is different: ERCOT's MORA battery model uses two scheduling windows in winter months because of bimodal morning and evening high net load periods. [e13]

Net load sizes reserves. Regulation requirements are set to cover the 95th percentile of deployed regulation or net load variability, per ERCOT's 2026 methodology. [e23] ERCOT says periods when load rises while wind or solar fall need other generation to ramp or start quickly, so net load ramp risk is accounted for in Non-Spin requirements. [e21] The ECRS and Non-Spin risk calculation uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors and 6-hour-ahead forced outages from the previous four years. [e22] The CDR says ECRS itself was developed to address net load ramps. [e24]

## ERCOT context

Price spikes cluster at the net peak. Most real-time price spikes in 2025 occurred during the 7 to 9 p.m. peak net load hours as solar ramped down. [e12] The IMM counts spikes during this evening ramp at 30% of all 2025 spikes (22% in 2024), against 7.5% in the 6 to 8 a.m. morning ramp (8.9% in 2024). [e20]

Solar has stopped helping at the net peak. In the IMM's Table 2, solar's capacity factor at the daily net peak interval was 31.1% in 2021, 10.1% in 2023, 3.9% in 2024 and 1.7% in 2025, while wind's was 25.6% in 2021 and 29.3% in 2025. [e18][e19][e11]

Peak net load by year (IMM): 74.5 GW in 2022 (95th percentile 61.5 GW) [e16], 79.3 GW in 2023 (95th percentile 67.6 GW) [e17], and 69.6 GW in 2024, about 10 GW below 2023, which the IMM attributes to a sharp increase in solar capacity and milder summer weather. [e4] At the other end, the IMM reports minimum net load of about 10.4 GW in 2022 (down from roughly 15 GW in 2016) and about 12 GW in 2023; its 2023 report gives the 2022 starting point as roughly 15 GW, so the two reports disagree on 2022. [e16][e17]

Forecast error. The IMM measures net load forecast errors eight hours ahead of real time [e15] and says the average error fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, but forecasts still under-forecast renewable output and over-forecast load. [e9] ERCOT's monthly operations report tracks day-ahead net load forecast mean absolute error against a KPI goal of 4,000 MW. [e27] Under an SB 3 (2021) provision, new PURA §39.159(b)(5), the commission must ensure that ERCOT sizes the ancillary or reliability services procured under subdivision (3) to prevent prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e30][e31][e8]

Market power. The IMM tests structural market power in the top quartile of net load hours; the share of those hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025, which it attributes largely to milder weather and storage held by smaller participants. [e25]

Storage serves the net peak: ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a pattern through the summer. [e14]

## Timeline

- 2021: solar capacity factor at the daily net peak interval is 31.1% (IMM). [e18]
- 2022: peak net load 74.5 GW (IMM). [e16]
- 2023: peak net load 79.3 GW; solar at the net peak falls to 10.1%. [e17][e19]
- 2024: peak net load 69.6 GW, about 10 GW below 2023. [e4]
- 2025: solar at the net peak 1.7%; evening ramp has 30% of price spikes; average 8-hour-ahead net load forecast error about 452 MW. [e19][e20][e9]
- Summer 2026: 12 of the top 20 hourly net load hours are from 2026; the June-July peak hour moves to HE 22. [e6][e7]

## Key facts

- Protocol definition: Load minus PVGR and WGR generation for the same period. [e1]
- Peak net load: 74.5 GW (2022), 79.3 GW (2023), 69.6 GW (2024), all per the IMM. [e16][e17][e4]
- December 2025 CDR base scenario for summer 2026: 18.3% reserve margin at peak Load hour (HE 5 p.m. CST) and 20.9% at peak Net Load hour (HE 9 p.m. CST). [e5]
- 12 of the top 20 hourly net load hours were in 2026, as of ERCOT's September 2026 review. [e6]
- 2025 average net load forecast error, measured by the IMM eight hours ahead of real time, was about 452 MW. [e9][e15]
- Regulation covers the 95th percentile of deployed regulation or net load variability (ERCOT 2026 methodology). [e23]
- The IMM expected the peak net load hour to be in the late evening by 2028. [e3]

## Example

(Illustrative) Suppose at 5 p.m. load is 85 GW, solar is 20 GW and wind is 10 GW: net load is 85 - 20 - 10 = 55 GW. Suppose at 9 p.m. load is 80 GW, solar is 0 GW and wind is 14 GW: net load is 80 - 0 - 14 = 66 GW. Gross load peaked at 5 p.m., but the rest of the fleet faced its heaviest requirement at 9 p.m.

## Say it like this

(Guidance) Net load is demand after you take out wind and solar, so it is the part the dispatchable fleet and batteries actually have to serve. In ERCOT the net peak now comes after sunset, and that is where the price spikes, the reserve sizing and the reliability risk have moved.

## Common confusion

(Guidance) Peak load and peak net load are different hours with different reserve margins; the CDR reports both. [e5] Also, the Protocol definition subtracts only solar and wind, not storage discharge; ERCOT's summer review separately shows storage's contribution against net load. [e1][e32] Forecast-error figures need their horizon: the IMM's 452 MW is eight hours ahead, Regulation (as the IMM describes it) uses a five-minute look-ahead, and ECRS/Non-Spin use 30-minute and 6-hour errors. [e9][e15][e10][e22]

## Questions

### Why does ERCOT now care more about the net peak than the gross peak?

Because the system is tightest when solar has ramped down but demand is still high, and the IMM shows the tight hours and price spikes moved to 7-9 p.m. [e2][e12] Solar contributes almost nothing at that interval (1.7% capacity factor in 2025). [e11]

### How is net load defined in the Protocols?

Load for a period minus generation from PhotoVoltaic Generation Resources and Wind Generation Resources for the same period. [e1]

### What does net load forecast error affect?

It sets the Regulation procurement target (95th percentile of five-minute net load forecast error, as the IMM describes it). [e10][e23] ECRS and Non-Spin sizing uses 30-minute and 6-hour-ahead net load forecast errors. [e22] On a different horizon, eight hours ahead of real time, the IMM puts the 2025 average net load forecast error at about 452 MW. [e9][e15]

### Was 2024 a high or low year for peak net load?

Low: 69.6 GW, about 10 GW lower than 2023's 79.3 GW, which the IMM attributes to a sharp increase in solar capacity and milder summer weather. [e4][e17]

### Why would more solar make the evening harder rather than easier?

Solar output is subtracted from load, so more solar lowers midday net load but does little after sunset: its capacity factor at the net peak fell from 31.1% in 2021 to 1.7% in 2025. [e1][e18][e19] ERCOT says the rising-load, falling-renewables period needs other generation to ramp or start quickly. [e21]

### What if wind is low at 9 p.m. on a hot day?

Less is subtracted from load, so net load is higher; wind averaged a 29.3% capacity factor at the 2025 net peak, so a low-wind evening removes a large part of that offset. [e1][e11] Separately, the IMM says most 2025 price spikes occurred in the 7 to 9 p.m. peak net load hours as solar ramped down; it does not tie them to low-wind evenings in the cited text. [e12]

## Scenarios

### A trader asks which hour to watch for a hot, still August day.

- Look at the net peak, not the gross peak: low wind means less is subtracted from load, and solar is gone after sunset. [e1][e11]
- ERCOT's 2026 review says the peak net load usually falls in HE 20-21 and moved to HE 22 in June and July. [e6][e7]
- Evening-ramp spikes were 30% of all 2025 spikes, so price risk sits in the ramp as well as the peak hour. [e20]

## Open items

- The sources define net load only for wind and solar (np-02, CDR) or "renewable generation" (IMM); none says whether storage, DC-tie flows or distributed solar are netted. I did not add them.
- The December 2025 CDR table gives 81,411 MW for summer 2026 in a column headed "Load for the peak Net Load hour (Load minus wind and solar generation)"; the extracted text does not make clear whether that is the net load itself or gross load at that hour, so it is not cited.
- Hour of the net peak differs slightly across sources: IMM says 7 to 9 p.m.; the CDR uses HE 9 p.m.; ERCOT's summer review says HE 20-21 typically, shifting to HE 22 in June-July 2026. These are consistent in direction but not identical.
- The IMM 2025 report does not state a 2025 peak net load value in the text or OCR read; no saved source gives the 2026 peak net load in MW.
- Minimum net load for 2022: the IMM's 2022 report says about 10.4 GW, its 2023 report says roughly 15 GW. Both are quoted; neither is corrected in the saved text.
- No source gave net load ramp rates (GW per hour) in quotable text; the October 2026 day-ahead net load MAE values sit in a chart that did not extract.
