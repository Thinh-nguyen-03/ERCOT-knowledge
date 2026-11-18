---
id: net-load
name: Net Load
aliases: [Net Load, Peak Net Load, net peak, net load peak]
kind: metric
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
    note: ERCOT's average net load forecast error fell to about 452 MW in 2025, per the IMM. [e9]
  - to: energy-storage-resource
    type: related
    note: ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a recurring pattern. [e14]
  - to: cdr-report
    type: used-in
    note: The CDR reports reserve margins for both the peak Load hour and the peak Net Load hour. [e5]
  - to: ancillary-services
    type: related
    note: Regulation targets are set from the 95th percentile of five-minute net load forecast error. [e10]
  - to: resource-adequacy
    type: related
    note: SB 3 requires reliability services sized against net load variability in high-demand, low-supply conditions. [e8]
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
---

## Definition

In the ERCOT Protocols, Net Load is the Load for a given period minus generation from solar (PVGRs) and wind (WGRs) for the same period. [e1] Peak net load is the highest value of that quantity over a period, which the IMM describes as the peak of system demand net of renewable generation. [e3]

## How it works

Net load is what the rest of the fleet (thermal units, storage, imports and demand response) has to cover after wind and solar output. [e1] Because solar output falls in the evening while demand stays high, the hour of highest net load lands later than the hour of highest gross load. [e3] The IMM reports that the tightest hours have moved from the firm peak load hour around 4 to 5 p.m. to 7 to 9 p.m., the net load peak. [e2]

ERCOT's planning reports now track both peaks. The December 2025 CDR's base case gives summer 2026 reserve margins of 18.3% at the peak Load hour (hour ending 5 p.m.) and 20.9% at the peak Net Load hour (hour ending 9 p.m.). [e5] ERCOT's summer 2026 review says the peak net load typically falls in HE 20-21, and that in June and July the net load hour moved from HE 21 to HE 22. [e6][e7]

In winter the pattern is different: ERCOT's MORA battery model uses two scheduling windows in winter months because of bimodal morning and evening high net load periods. [e13]

## ERCOT context

Prices follow net load. Most real-time price spikes in 2025 occurred during the 7 to 9 p.m. peak net load hours as solar ramped down. [e12] At the daily net peak interval, solar's capacity factor fell to 1.7% in 2025 while wind's held at 29.3%. [e11]

Net load drives operations and procurement. The Regulation procurement target is based on the 95th percentile of five-minute net load forecast error. [e10] The IMM says ERCOT's average net load forecast error fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, but forecasts still under-forecast renewable output and over-forecast load. [e9] SB 3 (2021) requires the reliability services ERCOT procures to be sized to prevent prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e8]

Storage serves the net peak: ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a pattern through the summer. [e14]

## Key facts

- Protocol definition: Load minus PVGR and WGR generation for the same period. [e1]
- 2024 peak net load was 69.6 GW, about 10 GW lower than 2023 and 5 GW lower than 2022 (IMM). [e4]
- Summer 2026 CDR base case: 18.3% reserve margin at peak Load hour (HE 5 p.m.) and 20.9% at peak Net Load hour (HE 9 p.m.). [e5]
- 12 of the top 20 hourly net load hours were in 2026, as of ERCOT's September 2026 review. [e6]
- 2025 average net load forecast error was about 452 MW. [e9]
- The IMM expected the peak net load hour to be in the late evening by 2028. [e3]

## Example

(Illustrative) Suppose at 5 p.m. load is 85 GW, solar is 20 GW and wind is 10 GW: net load is 85 - 20 - 10 = 55 GW. Suppose at 9 p.m. load is 80 GW, solar is 0 GW and wind is 14 GW: net load is 80 - 0 - 14 = 66 GW. Gross load peaked at 5 p.m., but the rest of the fleet faced its heaviest requirement at 9 p.m.

## Say it like this

(Guidance) Net load is demand after you take out wind and solar, so it is the part the dispatchable fleet and batteries actually have to serve. In ERCOT the net peak now comes after sunset, and that is where the price spikes and the reliability risk have moved.

## Common confusion

(Guidance) Peak load and peak net load are different hours with different reserve margins; the CDR reports both. [e5] Also, the Protocol definition subtracts only solar and wind, not storage discharge; ERCOT's summer review separately shows storage's contribution against net load. [e1][e6]

## Questions

### Why does ERCOT now care more about the net peak than the gross peak?

Because the system is tightest when solar has ramped down but demand is still high, and the IMM shows the tight hours and price spikes moved to 7-9 p.m. [e2][e12] Solar contributes almost nothing at that interval (1.7% capacity factor in 2025). [e11]

### How is net load defined in the Protocols?

Load for a period minus generation from PhotoVoltaic Generation Resources and Wind Generation Resources for the same period. [e1]

### What does net load forecast error affect?

It sets the Regulation procurement target (95th percentile of five-minute net load forecast error) and feeds commitment decisions; the IMM puts the 2025 average error at about 452 MW. [e10][e9]

### Was 2024 a high or low year for peak net load?

Low: 69.6 GW, about 10 GW lower than 2023, which the IMM attributes to more solar capacity and milder summer weather; it expected peak net load to rise in later years. [e4]

## Scenarios

### A trader asks which hour to watch for a hot, still August day.

- Look at the net peak, not the gross peak: low wind means less is subtracted from load, and solar is gone after sunset. [e1][e11]
- ERCOT's 2026 review says the peak net load usually falls in HE 20-21 and moved to HE 22 in June and July. [e6][e7]

## Open items

- The sources define net load only for wind and solar (np-02, CDR) or "renewable generation" (IMM); none says whether storage, DC-tie flows or distributed solar are netted. I did not add them.
- The December 2025 CDR table gives summer 2026 figures of 94,159 MW at the peak Load hour and 81,411 MW for the "peak Net Load hour (Load minus wind and solar generation)", but the extracted table text does not make clear whether 81,411 MW is the net load itself or the gross load at that hour, so I did not cite it.
- Hour of the net peak differs slightly across sources: IMM says 7 to 9 p.m.; the CDR uses HE 9 p.m.; ERCOT's summer review says HE 20-21 typically, shifting to HE 22 in June-July 2026. These are consistent in direction but not identical.
- The IMM 2025 report does not state a 2025 peak net load value in the extracted text; only 2024 (69.6 GW) is stated.
- No source gave net load ramp rates (GW per hour) in quotable text.
