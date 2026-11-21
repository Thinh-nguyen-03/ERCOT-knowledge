---
id: sc-hot-august-evening
name: "Scenario: Hot August Evening Price Spike"
aliases: [hot August evening, evening price spike, net peak price spike, solar down-ramp spike]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: net-load
    type: used-in
    note: The scenario turns on net load, which peaks after solar fades in the evening. [e2]
  - to: evening-ramp
    type: example-of
    note: A hot August evening spike is the evening solar down-ramp at its tightest; the evening ramp accounted for 30% of 2025 price spikes. [e1][e27]
  - to: energy-storage-resource
    type: related
    note: ESRs are particularly likely to set the price during the evening solar down-ramp. [e7]
  - to: asdc
    type: determines
    note: Under RTC, scarcity pricing in real time comes from the sloped ASDCs, whose maximum prices are built on VOLL set to the DAM HCAP. [e11][e19][e21]
  - to: rtc-b
    type: affects
    note: Under RTC, scarcity pricing and the value of reserves come from ASDCs, and the SWCAP was reduced to $2,000/MWh after RTC go-live. [e9][e12]
  - to: ordc
    type: replaced
    note: Under RTC, scarcity pricing is set by individual ASDCs instead of the ORDC. [e9]
  - to: offer-cap
    type: related
    note: The real-time offer cap is $2,000/MWh, but ERCOT says the energy component of real-time LMPs can exceed $2,000 because of the ASDCs. [e20][e22]
  - to: system-lambda
    type: related
    note: The under-generation Power Balance Penalty, VOLL plus RTSWCAP plus $4,052.01/MWh, sets the maximum System Lambda. [e23]
  - to: non-spin
    type: related
    note: Most Non-Spin shortfalls in June occurred in the late evening, per ERCOT's summer 2026 review. [e13]
  - to: eea
    type: related
    note: ERCOT declares EEA Level 1 when PRC falls below 2,500 MW and is not projected to recover within 30 minutes. [e30]
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
  - id: e18
    source: ercot-summer-2026-review
    locator: "Slide 21, Energy Storage Capacity Offered in Real-Time Market, Key Takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e19
    source: np-04
    locator: "Section 4.4.11(1)(a), Day-Ahead and Real-Time System-Wide Offer Caps"
    quote: "Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM."
  - id: e20
    source: np-04
    locator: "Section 4.4.11, parameter table"
    quote: "HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000"
  - id: e21
    source: np-04
    locator: "Section 4.4.12(7)(a), pricing table for quantities up to the MCL"
    quote: "Reg-Up Max Demand Price $/MWh VOLL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 Non-Spin Max Demand Price $/MWh VOLL"
  - id: e22
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), pp. 2-3"
    quote: "In the RTM, the energy component of Locational Marginal Prices (LMPs) can exceed $2,000 due to the Ancillary Service Demand Curves (ASDCs). Allowing QSEs to submit higher energy bids into the DAM allows Market Participants to more effectively hedge when they expect scarcity conditions in Real-Time."
  - id: e23
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 4.1, The Power Balance Penalty"
    quote: "In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e24
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \\lambda - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line."
  - id: e25
    source: imm-quarterly-fy2026-q3
    locator: "IMM Quarterly Report FY2025-26 Q3, Daily ORDC Reserve/Reliability Adders, ORDC Reserve Adders"
    quote: "The energy price natively includes any shortage value produced by the ASDC via co-optimization."
  - id: e26
    source: imm-som-tac-2026-07
    locator: "IMM presentation to TAC (August 13, 2026), slide 3, Summary of market pricing trends"
    quote: "Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal"
  - id: e27
    source: imm-som-2025
    locator: "page 23 (OCR), Chapter I.A, Real-Time Market Highlights"
    quote: "Price spikes occurred 40% less often in 2025 than in 2024. The evening ramp accounted for 30% of all price spikes."
  - id: e28
    source: ercot-summer-2026-review
    locator: "Slide 9, State of Charge on lowest days, Key Takeaway"
    quote: "On average the SOC percentage on the lowest recorded days in 2026 was 50% lower than the lowest recorded days in 2025."
  - id: e29
    source: ercot-summer-2026-review
    locator: "Slide 20, RUC, Key Takeaway"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e30
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (1)"
    quote: "(1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:"
  - id: e31
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(b)(ii)"
    quote: "(ii) Ensure that each of its ESRs suspends charging until the EEA is recalled, except under the following circumstances: (A) The ESR has a current SCED Base Point Instruction, LFC Dispatch Instruction, or manual Dispatch Instruction to charge the ESR; (B) The ESR is actively providing Primary Frequency Response; or"
  - id: e32
    source: ercot-eea2-2023-report
    locator: "Section II, Emergency Event Overview (p. 1)"
    quote: "On September 6, 2023, from approximately 7:10 p.m. until approximately 7:25 p.m., ERCOT observed a decline in the system frequency from 60 Hz to 59.77 Hz, which is outside the target range of 59.9 to 60.1 Hz. In order to access additional power reserves to restore and maintain frequency, ERCOT declared an EEA Level 2 (EEA.2) at 7:25 p.in."
  - id: e33
    source: imm-som-2023
    locator: "Executive Summary, recommendation on shadow price caps"
    quote: "Reliability concerns associated with a severe violation on September 6, 2023, prompted ERCOT to curtail 1,500 MW of generation, including 1,300 MW of wind. These curtailments occurred simultaneously with rising demand and resulted in the system frequency falling below 59.91 hertz for 15 consecutive minutes and ERCOT’s declaring an Energy Emergency Alert Level 2."
  - id: e34
    source: ercot-summer-2023-review
    locator: "Slide 2, Key Takeaways"
    quote: "Solar down ramp led to tighter conditions in late evening than at peak demand; high demand and lower wind output on some days led to the need to request conservation"
  - id: e35
    source: ercot-summer-2026-review
    locator: "Slide 5, Net Load with Energy Storage Resource (ESR) Contribution"
    quote: "12 of the top 20 Hourly Net Load Hours have been from 2026. The Peak Net Load typically occurs in HE 20:00 – 21:00 and occur most often during the Summer."
  - id: e37
    source: ercot-summer-2026-review
    locator: "Slide 10, ESR SOC, Solar, and Wind Generation on Lowest SOC% Days, Key Takeaway"
    quote: "Compared to last year SOC% was lower on raw percentage, however, since ESR MWh capacity is higher, this lower SOC% is not necessarily lower SOC MWh."
  - id: e36
    source: ercot-summer-2026-review
    locator: "Slide 16, Key Takeaway on AS prices"
    quote: "Day-ahead ancillary service prices have been trending lower in summer 2026 compared to 2024 and 2025, except for Non-Spin."
---

## Definition

This scenario is about why ERCOT real-time prices jump in the early evening as solar output falls away while demand is still high: the IMM found most 2025 price spikes came in the peak net load hours between 7 and 9 p.m., when solar ramped down. [e1]

## How it works

Start with net load, not load. The tightest hours have moved from the 4 to 5 p.m. load peak to the 7 to 9 p.m. net load peak, which is demand minus renewable output, because solar is ramping down then. [e2] In 2025 solar ran at only a 1.7% capacity factor in the net peak interval, while wind ran at 29.3%. [e3] ERCOT's summer 2026 review says 12 of the top 20 hourly net load hours were from 2026 (the slide does not state the period ranked), the peak net load typically falls in HE 20-21, and the net load hour shifted from HE 21 to HE 22 in June and July. [e35][e4]

Next, ask who serves the ramp. During the solar ramp-down SCED often dispatches quick-start gas plants or storage with high-priced offer curves, and the IMM calls the resulting spikes "frequent and predictable". [e5] ESRs are especially likely to set the price in the evening down-ramp. [e7] Storage is limited by what it has stored: in summer 2026 ERCOT reported that ESR state of charge running out in the evenings was a pattern all summer. [e8] SOC was usually highest between hours 12 and 20 and very low in some hours from late evening to sunrise, and on the lowest recorded days of 2026 (data through August 15) the SOC percentage averaged 50% lower than on the lowest days of 2025, although ERCOT notes that with more ESR MWh capacity a lower SOC% is not necessarily lower stored MWh. [e17][e28][e37]

Then bring in reserves. Under RTC, the ORDC is no longer used; individual ASDCs set scarcity pricing and the value of reserves. [e9] These sloped curves define the penalty price when the market is short of reserves, in both day-ahead and real time. [e11] Because energy and reserves are co-optimized, the IMM says the energy price natively includes any shortage value the ASDCs produce. [e25] ERCOT's RTC example shows AS cost entering the LMP: a $30/MWh unit yields a $40/MWh LMP once $10/MWh of additional AS cost is added. [e10] In practice the IMM told TAC in August 2026 that shortage pricing via the ASDCs had been minimal since RTC began. [e26]

Finally, know the ceilings, which are not the same thing. The real-time offer cap (RTSWCAP) is $2,000/MWh and the day-ahead cap $5,000/MWh. [e20] ERCOT's summer 2026 review says the real-time cap was reduced to $2,000/MWh from $5,000/MWh at RTC go-live on 12/5/2025. [e12] The VOLL used to build the ASDCs is set to the DAM HCAP, and the ASDC maximum prices up to the Minimum Contingency Level are VOLL + 4,052 for Reg-Up, VOLL + 2,051 for RRS, VOLL + 50 for ECRS and VOLL for Non-Spin. [e19][e21] So ERCOT says the energy component of real-time LMPs can exceed $2,000 because of the ASDCs. [e22] System Lambda itself is capped by the under-generation Power Balance Penalty, the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh. [e23] A nodal LMP is System Lambda minus the sum of the bus's shift factors times constraint shadow prices, so congestion can move a node above or below that. [e24]

## Formula

Highest System Lambda under RTC (np-22 Attachment P, December 5, 2025 version): Power Balance Penalty = effective VOLL + effective RTSWCAP + $4,052.01/MWh. [e23] Knowledge-base arithmetic, not a source figure: if the "effective VOLL" in Attachment P equals the VOLL that np-04 sets for the ASDCs (the DAM HCAP, $5,000/MWh) and the effective RTSWCAP is $2,000/MWh, the sum is $5,000 + $2,000 + $4,052.01 = $11,052.01/MWh. No saved source states the total or confirms that the two VOLL terms are the same value. [e19][e20][e23]

Nodal price: LMP_EB = λ − Σ SF_EB × SP_line, where λ is System Lambda (the shadow price of power balance), SF_EB is the bus's shift factor on each line and SP_line is the line's shadow price. [e24]

## Key facts

- Most 2025 price spikes came between 7 and 9 p.m., in the peak net load hours; spikes were 40% less frequent than in 2024 and the evening ramp accounted for 30% of them. [e1][e27]
- The IMM counts a price spike as a 15-minute interval above 18 times the fuel index price, a level above the marginal cost of almost every online generator. [e6]
- Solar capacity factor in the 2025 net peak interval was 1.7%; wind's was 29.3%. [e3]
- Offer caps: RTSWCAP $2,000/MWh and DASWCAP $5,000/MWh; ERCOT's summer 2026 review says the real-time cap fell from $5,000 at RTC go-live on 12/5/2025. [e20][e12]
- ASDC maximum demand prices up to the MCL: Reg-Up VOLL + 4,052, RRS VOLL + 2,051, ECRS VOLL + 50, Non-Spin VOLL, with VOLL set to the DAM HCAP. [e21][e19]
- In June 2026, 40% of intervals in HE 22-23 were affected by Non-Spin shortfalls; Reg-Up, Reg-Down and RRS were never short that summer. [e13]
- Summer 2026 RUC was substantially higher than the two previous summers, mainly for capacity and AS sufficiency. [e29]
- The all-time demand record was 91,134 MW in HE19 on 7/22/2026, with cryptomining loads cutting up to about 3,299 MW. [e14]

## Scenarios

### It is 6 p.m. on a 105°F August day. Real-time prices are $40 now but traders expect a spike after 8 p.m. Walk me through why.

- Net load, not gross load, sets tightness. Load peaks around 4 to 5 p.m., but the tightest hours are 7 to 9 p.m. because solar is ramping down; in summer 2026 the net load hour moved to HE 22 in June and July. [e2][e4]
- Solar is almost gone at the net peak (1.7% capacity factor in 2025) and wind only partly fills the gap (29.3%). [e3]
- The units that cover the ramp are quick-start gas and batteries, often with high offer prices, so spikes are predictable. [e5][e7]
- Batteries have limited energy. In summer 2026 their state of charge running out in the evenings was a pattern all summer, and on the lowest-SOC days the SOC percentage was on average 50% lower than in 2025, which ERCOT says is not necessarily lower stored MWh because ESR capacity grew. [e8][e17][e28][e37]
- Under RTC, scarcity pricing comes from the ASDCs, not the ORDC. The ASDCs define the penalty price when the market goes short of reserves, and the energy price carries that shortage value through co-optimization. [e9][e11][e25]
- Watch which reserves are short. In summer 2026 Reg-Up, Reg-Down and RRS had no shortages, Non-Spin and ECRS met the plan in nearly all intervals, and most June Non-Spin shortfalls came in the late evening, with 40% of intervals in HE 22-23 affected. [e13]
- Know the ceilings. Offers are capped at $2,000/MWh in real time, and ERCOT notes that a slightly higher proportion of ESR capacity was offered within $100/MWh of the cap in summer 2026 than in the two previous summers, largely because of the lower cap (based on 20:00 SCED snapshots); but the energy component of LMPs can go above $2,000 through the ASDCs, and System Lambda is capped by the Power Balance Penalty. [e20][e18][e22][e23]
- Watch for emergency steps. If PRC falls below 2,500 MW and is not expected to recover within 30 minutes, ERCOT declares EEA Level 1, and QSEs must make their ESRs stop charging, with listed exceptions. [e30][e31]
- (Reasoning) Then give a view: a spike is likely if the net load ramp is steep, batteries reach the net peak with little stored energy, and Non-Spin or ECRS look short. It is less likely if wind picks up in the evening.
- Suppose (illustrative): gas is at $3/MMBtu. The IMM's spike threshold of 18 times the fuel price would be $54/MWh, so a jump from $40 to $200 easily counts as a spike. [e6]

### Variant: the same evening, but a transmission problem forces ERCOT to curtail wind as demand rises (the September 6, 2023 pattern).

- On September 6, 2023, a severe constraint violation led ERCOT to curtail 1,500 MW of generation, including 1,300 MW of wind, as demand rose; frequency stayed below 59.91 Hz for 15 minutes and ERCOT declared EEA Level 2. [e33]
- The frequency drop ran from about 7:10 to 7:25 p.m., squarely in the evening ramp. [e32]
- ERCOT's summer 2023 review says the solar down-ramp made late evening tighter than the demand peak that summer. [e34]
- (Reasoning) The lesson for the scenario: evening tightness is not only an energy-balance problem; a binding constraint that removes cheap supply at the same moment can turn a predictable spike into an emergency.

## Questions

### Why are evening spikes less frequent than they used to be?

The IMM credits storage growth with most of the drop in ramp-period spikes from 2024 to 2025, and solar growth with the drop in daytime spikes. [e15] Spikes were 40% less frequent in 2025 than in 2024. [e27]

### Is reserve margin lower at the net peak than at the gross peak?

Not in ERCOT's December 2025 CDR. Its base case for summer 2026 shows an 18.3% margin at the 5 p.m. peak load hour and 20.9% at the 9 p.m. peak net load hour. [e16] (Guidance) The evening risk is about how fast the ramp is and how long storage can last, not only about how much capacity is installed.

### Where did the ORDC adder go?

Under RTC, scarcity pricing and the value of reserves are set by individual ASDCs instead of the ORDC. [e9] The shortage value is now inside the energy price through co-optimization rather than a separate adder. [e25]

### If the real-time offer cap is $2,000/MWh, how can real-time prices go higher?

The offer cap limits offers, not prices. Under co-optimization the energy component of LMPs can exceed $2,000 because of the ASDCs, whose top prices are built on a VOLL equal to the DAM HCAP of $5,000/MWh. [e22][e19][e20] The Power Balance Penalty (VOLL plus RTSWCAP plus $4,052.01/MWh) sets the maximum System Lambda, and congestion can add to or subtract from that at a node. [e23][e24]

### Why is the day-ahead cap higher than the real-time cap?

In its September 2026 comments in PUCT Project 59550 (a party filing), ERCOT says allowing higher energy bids in the DAM lets participants hedge more effectively when they expect real-time scarcity, because real-time LMPs can exceed $2,000. [e22] (Guidance) So a buyer worried about a hot evening can lock in day-ahead at prices above the real-time offer cap.

### What role did demand response play at the July 2026 peak?

At the 91,134 MW record on 7/22/2026, cryptomining loads cut up to about 3,299 MW and ERCOT estimated the maximum 4CP reduction at about 492 MW. [e14]

### Summer 2026 set records. Why did reserves rarely price at shortage?

ERCOT reports no Reg-Up, Reg-Down or RRS shortages that summer and Non-Spin and ECRS meeting plan in nearly all intervals. [e13] It also reports substantially more RUC, mainly to secure enough AS, and day-ahead AS prices trending lower than 2024 and 2025 except Non-Spin. [e29][e36] The IMM told TAC that ASDC shortage pricing had been minimal since RTC. [e26] (Reasoning) Out-of-market commitment that fills the AS plan removes the shortage that would otherwise set the price.

## Say it like this

(Guidance) Evening prices spike because solar drops off faster than demand does. The last megawatts come from fast gas and batteries that are running low on stored energy. Since RTC, any reserve shortage is priced through the AS demand curves inside the energy price, which can take real-time prices above the real-time offer cap.

## Common confusion

(Guidance) The peak load hour and the peak price hour are no longer the same: load peaks in late afternoon, but the tightest hours are 7 to 9 p.m. [e2] Do not look for an ORDC adder in post-December 2025 prices; scarcity now comes from ASDCs. [e9] And the $2,000 real-time offer cap is not a price cap: the ASDCs and the Power Balance Penalty allow higher LMPs. [e22][e23]

## Open items

- The sources do not give a 2026 count of evening price spikes or their average size after RTC; the IMM spike statistics shown cover 2024-2025.
- Resolved 2026-11-21 (partly): the ceiling mechanics are now cited (RTSWCAP $2,000, VOLL = DAM HCAP, ASDC maxima, Power Balance Penalty = VOLL + RTSWCAP + $4,052.01). No saved source states the resulting dollar ceiling ($11,052.01/MWh is our arithmetic) or the highest real-time LMP actually reached since RTC.
- How the ASDC prices for several short products add into System Lambda in a single interval is not described in the saved sources beyond the co-optimization statements.
- No source gives a hard rule for how a trader should forecast battery state of charge at the net peak; the summer 2026 review only describes the observed pattern.
- The sources do not quantify how much of an evening spike comes from the energy offer stack versus AS shortage pricing in a given interval.
- 16 TAC §25.509 sets HCAP at $5,000/MWh while np-04 sets RTSWCAP at $2,000/MWh; how the PUCT rule and protocol values fit together is not explained in the saved sources (see asdc and offer-cap).
