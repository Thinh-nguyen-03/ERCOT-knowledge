---
id: sc-hot-august-evening
name: "Scenario: Hot August Evening Price Spike"
aliases: [hot August evening, evening price spike, net peak price spike, solar down-ramp spike]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: net-load
    type: used-in
    note: The scenario turns on net load, which peaks after solar fades in the evening. [e2]
  - to: evening-ramp
    type: example-of
    note: A hot August evening spike is the evening solar down-ramp at its tightest. [e1]
  - to: energy-storage-resource
    type: related
    note: ESRs serve much of the evening ramp and often set the price there. [e7]
  - to: asdc
    type: determines
    note: Under RTC, scarcity pricing in real time comes from the sloped ASDCs. [e11]
  - to: rtc-b
    type: affects
    note: RTC+B moved scarcity pricing inside SCED and lowered the real-time offer cap to $2,000/MWh. [e9][e12]
  - to: ordc
    type: replaced
    note: The ORDC adder that used to carry evening scarcity was replaced by ASDCs under RTC. [e9]
  - to: non-spin
    type: related
    note: Non-Spin was the product most often short in the late evening in June 2026. [e13]
  - to: offer-cap
    type: related
    note: The real-time system-wide offer cap bounds how high offers can go in the spike. [e12]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e2
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 3. Prices by Time of Day"
    quote: "The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.). This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up."
  - id: e3
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, Table 2 discussion"
    quote: "Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years."
  - id: e4
    source: ercot-summer-2026-review
    locator: "Slide: Net Load HE 17-22 for Summers 2024-2026"
    quote: "Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July."
  - id: e5
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes."
  - id: e6
    source: imm-som-2024
    locator: "Review of Real-Time Market Outcomes, price spike analysis (Figure 3)"
    quote: "For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price is greater than 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the prevailing fuel index price (FIP) which produces an energy price spike threshold in $ per MWh. Prices at this level typically exceed the marginal costs of virtually all on-line generators."
  - id: e7
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance (p. iii)"
    quote: "ESRs are particularly likely to set the price of electricity during the morning demand ramp and evening solar down-ramp."
  - id: e8
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e9
    source: ercot-rtc-overview
    locator: "Slide 14"
    quote: "Instead of using the ORDC, under RTC, scarcity pricing and the value of reserves is set by individual ASDCs"
  - id: e10
    source: ercot-rtc-overview
    locator: "Slides 12-13, LMP example"
    quote: "This means the LMP goes to $40/MWh ($30/MWh for the energy from Gen 1 plus the $10/MWh of additional Ancillary Service cost)"
  - id: e11
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 48)"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e12
    source: ercot-summer-2026-review
    locator: "Slide 21, Energy Storage Capacity Offered in Real-Time Market, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e13
    source: ercot-summer-2026-review
    locator: "Slide: Most Ancillary Services were fully procured, Key Takeaways"
    quote: "There were no shortages of Reg-Up, Reg-Down and RRS this summer. Non-Spin and ECRS met the plan in nearly all intervals. Most Non-Spin shortfalls in June occurred during peak AS Plan requirements in the late evening, with 40% of intervals in HE 22–23 affected."
  - id: e14
    source: ercot-summer-2026-review
    locator: "Slide 4, Demand Response, Key Takeaway"
    quote: "Key Takeaway: On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours. The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW."
  - id: e15
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "The increase in solar capacity primarily drove the reduction in daytime price spikes from 2024 to 2025, while growth in energy storage capacity largely drove the decline in price spikes during solar ramp periods."
  - id: e16
    source: ercot-cdr-2025-12
    locator: "Executive Summary bullets"
    quote: "The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST)."
  - id: e17
    source: ercot-summer-2026-review
    locator: "Slide: State of Charge Operating Patterns Across Summer"
    quote: "SOC levels were generally highest between Hours 12 and 20. There were several hours during the late evening through sunrise where SOC was very low."
---

## Definition

This scenario is about why ERCOT real-time prices jump in the early evening as solar output falls away while demand is still high: the IMM found most 2025 price spikes came in the peak net load hours between 7 and 9 p.m., when solar ramped down. [e1]

## How it works

Start with net load, not load. The tightest hours have moved from the 4 to 5 p.m. load peak to the 7 to 9 p.m. net load peak, which is demand minus renewable output, because solar is ramping down then. [e2] In 2025 solar ran at only a 1.7% capacity factor in the net peak interval, while wind ran at 29.3%. [e3] ERCOT saw the net load hour move from HE 21 to HE 22 in June and July 2026. [e4]

Next, ask who serves the ramp. During the solar ramp-down SCED often dispatches quick-start gas plants or storage with high-priced offer curves, and the IMM calls the resulting spikes "frequent and predictable". [e5] ESRs are especially likely to set the price in the evening down-ramp. [e7] Storage is limited by what it has stored: in summer 2026 ERCOT reported that ESR state of charge running out in the evenings was a pattern all summer. [e8] SOC was usually highest between hours 12 and 20 and very low in some hours from late evening to sunrise. [e17]

Then bring in reserves. Under RTC, the ORDC is no longer used; individual ASDCs set scarcity pricing and the value of reserves. [e9] These sloped curves define the penalty price when the market is short of reserves, in both day-ahead and real time. [e11] Because energy and AS share the same capacity, the AS cost shows up in the LMP; in ERCOT's example a $30/MWh unit yields a $40/MWh LMP once $10/MWh of extra AS cost is added. [e10]

Finally, know the ceiling. After RTC go-live on 12/5/2025 the real-time SWCAP is $2,000/MWh, down from $5,000/MWh. [e12]

## Key facts

- Most 2025 price spikes came between 7 and 9 p.m., in the peak net load hours. [e1]
- The IMM counts a price spike as a 15-minute interval above 18 times the fuel index price, a level above the marginal cost of almost every online generator. [e6]
- Solar capacity factor in the 2025 net peak interval was 1.7%; wind's was 29.3%. [e3]
- Real-time SWCAP has been $2,000/MWh since RTC go-live on 12/5/2025. [e12]
- In June 2026, 40% of intervals in HE 22-23 were affected by Non-Spin shortfalls; Reg-Up, Reg-Down and RRS were never short that summer. [e13]
- The all-time demand record was 91,134 MW in HE19 on 7/22/2026, with cryptomining loads cutting up to about 3,299 MW. [e14]

## Scenarios

### It is 6 p.m. on a 105°F August day. Real-time prices are $40 now but traders expect a spike after 8 p.m. Walk me through why.

- Net load, not gross load, sets tightness. Load peaks around 4 to 5 p.m., but the tightest hours are 7 to 9 p.m. because solar is ramping down. [e2]
- Solar is almost gone at the net peak (1.7% capacity factor in 2025) and wind only partly fills the gap (29.3%). [e3]
- The units that cover the ramp are quick-start gas and batteries, often with high offer prices, so spikes are predictable. [e5][e7]
- Batteries have limited energy. In summer 2026 their state of charge ran out in the evenings again and again, so the later hours can be tighter than the first hour of the ramp. [e8][e17]
- Under RTC, scarcity comes through the ASDCs inside SCED, not an ORDC adder. If the system goes short of reserves, the ASDC penalty price feeds into energy prices through co-optimization. [e9][e11][e10]
- Watch which reserves are short. In June 2026 the shortfalls were mostly Non-Spin in HE 22-23, not regulation or RRS. [e13]
- The real-time offer cap is $2,000/MWh after RTC, so offers have a lower ceiling than before December 2025. [e12]
- (Reasoning) Then give a view: a spike is likely if the net load ramp is steep, batteries reach the net peak with little stored energy, and Non-Spin or ECRS look short. It is less likely if wind picks up in the evening.
- Suppose (illustrative): gas is at $3/MMBtu. The IMM's spike threshold of 18 times the fuel price would be $54/MWh, so a jump from $40 to $200 easily counts as a spike. [e6]

## Questions

### Why are evening spikes less frequent than they used to be?

The IMM credits storage growth with most of the drop in ramp-period spikes from 2024 to 2025, and solar growth with the drop in daytime spikes. [e15]

### Is reserve margin lower at the net peak than at the gross peak?

Not in ERCOT's December 2025 CDR. Its base case for summer 2026 shows an 18.3% margin at the 5 p.m. peak load hour and 20.9% at the 9 p.m. peak net load hour. [e16] (Guidance) The evening risk is about how fast the ramp is and how long storage can last, not only about how much capacity is installed.

### Where did the ORDC adder go?

Under RTC, ERCOT replaced it with individual ASDCs that set scarcity pricing inside the dispatch. [e9]

### What role did demand response play at the July 2026 peak?

At the 91,134 MW record on 7/22/2026, cryptomining loads cut up to about 3,299 MW and 4CP response cut about 492 MW. [e14]

## Say it like this

(Guidance) Evening prices spike because solar drops off faster than demand does. The last megawatts come from fast gas and batteries that are running low on stored energy. Since RTC, any reserve shortage is priced through the AS demand curves, and that pushes energy prices up in the same dispatch run.

## Common confusion

(Guidance) The peak load hour and the peak price hour are no longer the same: load peaks in late afternoon, but the tightest hours are 7 to 9 p.m. [e2] Also, do not look for an ORDC adder in post-December 2025 prices; scarcity now comes from ASDCs. [e9]

## Open items

- The sources do not give a 2026 count of evening price spikes or their average size after RTC; the IMM spike statistics shown cover 2024-2025.
- Deeper pass: how the $2,000/MWh real-time SWCAP and the ASDC maximum prices (which use VOLL set to the DAM HCAP) combine to set the highest possible real-time LMP under RTC.
- No source gives a hard rule for how a trader should forecast battery state of charge at the net peak; the summer 2026 review only describes the observed pattern.
- The sources do not quantify how much of an evening spike comes from the energy offer stack versus AS shortage pricing in a given interval.
