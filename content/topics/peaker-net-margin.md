---
id: peaker-net-margin
name: Peaker Net Margin (PNM)
aliases: [PNM, peaker net margin, peaking operating cost, POC, RTEP, PNM threshold, CONE]
kind: metric
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: offer-cap
    type: determines
    note: When PNM exceeds the threshold, the system-wide offer cap drops from the HCAP to the LCAP for the rest of the calendar year. [e7][e10]
  - to: puct
    type: regulates
    note: The PUCT's rule 25.509 defines the PNM formula and sets the system-wide offer cap to the LCAP if PNM exceeds the threshold. [e1][e10]
  - to: emergency-pricing-program
    type: contrasts-with
    note: The Emergency Pricing Program is triggered by hours at the cap in a rolling 24 hours, while PNM is a cumulative annual measure. [e1][e15]
  - to: resource-adequacy
    type: used-in
    note: The IMM uses PNM compared with the cost of new entry as a benchmark for whether market revenues support new generation. [e8]
  - to: energy-only-market
    type: part-of
    note: The PNM threshold mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. [e9]
  - to: winter-storm-uri
    type: example-of
    note: The threshold has been reached only once, in February 2021 during Winter Storm Uri. [e9]
  - to: state-of-market-report
    type: related
    note: The IMM State of the Market report discusses PNM in its Resource Adequacy chapter. [e8]
  - to: ordc
    type: related
    note: When the PNM switch moves the cap to the LCAP, the PUCT rule says ERCOT continues to apply the operating reserve demand curve and the reliability deployment price adder for the rest of that year; the IMM says the ORDC adder was discontinued in December 2025 with RTC. [e18][e44]
  - to: asdc
    type: affects
    note: When PNM exceeds the threshold, the VOLL used to determine the ASDCs for the DAM and RTM is changed to the LCAP along with the day-ahead cap. [e7]
  - to: heat-rate
    type: related
    note: ERCOT's PNM uses a fixed 10.0 MMBtu per MWh heat rate and ten times the daily gas index, while the IMM's net revenue analysis uses 10.5 MMBtu per MWh. [e11][e35]
  - to: natural-gas-price
    type: related
    note: The peaking operating cost is ten times the Fuel Index Price, the daily Katy Hub gas price. [e3][e26]
  - to: spark-spread
    type: related
    note: PNM is a spark-spread-like measure with a fixed 10 heat rate and the Hub Average 345 kV Hub price. [e1][e3]
evidence:
  - id: e1
    source: puct-25-509
    locator: "16 TAC 25.509(b)(4)"
    quote: "Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP – POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP – POC >0."
  - id: e2
    source: puct-25-509
    locator: "16 TAC 25.509(b)(2)"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh)."
  - id: e3
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c)"
    quote: "(b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price."
  - id: e4
    source: np-04
    locator: "Section 4.4.11.1, paragraph (1)(d)"
    quote: "For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows:"
  - id: e5
    source: np-04
    locator: "Section 4.4.11.1, paragraph (2)"
    quote: "By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website."
  - id: e6
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(f)"
    quote: "For the PNM process described above, ERCOT shall set the PNM threshold at three times the cost of new entry of new generation plants."
  - id: e7
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(a)"
    quote: "When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner: (a) On the Operating Day that the PNM exceeds the PNM threshold, the HCAP will remain in effect for the balance of the day and for the Operating Day thereafter (Days 1 and 2)."
  - id: e8
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Net revenue overview"
    quote: "PNM estimates the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. Comparing PNM with CONE helps market participants determine whether revenues are sufficient to support new generation or whether additional incentives may be needed before they decide to invest in new generation."
  - id: e9
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section E, Peaker Net Margin"
    quote: "If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT’s history, on February 16, 2021, during Winter Storm Uri."
  - id: e10
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year."
  - id: e11
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section E, Peaker Net Margin"
    quote: "ERCOT’s PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates."
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024. The PNM did not reach the PNM threshold that would reduce the system-wide offer cap in ERCOT."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Cost of New Entry"
    quote: "In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold."
  - id: e15
    source: puct-25-509
    locator: "16 TAC 25.509(c)(1)"
    quote: "The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period."
  - id: e14
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(c)"
    quote: "For the Operating Day two days after the PNM threshold is exceeded (Day 3) and through the end of the calendar year, DAM and RTM will use the LCAP and ASDCs reflecting the updated VOLL."
  - id: e16
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(A)-(B), System-Wide Offer Caps (copy effective 12/20/23)"
    quote: "The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e17
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(C)"
    quote: "The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants."
  - id: e18
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year."
  - id: e19
    source: puct-25-509
    locator: "16 TAC 25.509(b)(7), Reimbursement for Operating Losses when the LCAP is in Effect"
    quote: "When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource."
  - id: e20
    source: puct-25-509
    locator: "16 TAC 25.509(d), Review of System-Wide Offer Cap Programs"
    quote: "Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program."
  - id: e21
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a) parameter table (np-04 edition effective 2026-08-01), PNM threshold"
    quote: "PNM threshold $/MW-year 315,000"
  - id: e22
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a) parameter table, HCAP rows"
    quote: "HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000"
  - id: e23
    source: np-04
    locator: "Section 4.4.11.1, paragraph (1)(d), equation"
    quote: "∑((RTEP – POC) * (0.25)) for each Settlement Interval where (RTEP – POC) > 0"
  - id: e24
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(d)"
    quote: "On December 31, for Operating Day January 1, DASWCAP and the VOLL used to determine the ASDCs for the DAM and RTM will be reset to the HCAP for DAM for the new Resource adequacy cycle."
  - id: e25
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(b)"
    quote: "On the Operating Day after the PNM exceeds the PNM threshold (Day 2) prior to the execution of DAM, ERCOT shall send a Market Notice that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3)."
  - id: e26
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e27
    source: puct-25-509
    locator: "16 TAC 25.509(b)(3)"
    quote: "For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT."
  - id: e28
    source: imm-som-2021
    locator: "page 122 (OCR), Resource Adequacy, Peaker Net Margin in 2021"
    quote: "This figure shows that the $315,000 PNM threshold was exceeded for the first time in ERCOT’s history during the ERCOT operating day of February 16, 2021."
  - id: e29
    source: imm-som-2021
    locator: "page 122 (OCR), Resource Adequacy, Peaker Net Margin in 2021"
    quote: "The LCAP is set at the greater of either $2,000 per MWh and $2,000 per MW per hour or 50 times the natural gas price index value determined by ERCOT. However, the exceptionally high natural gas prices $400/MMBtu during Winter Storm Uri (up to $400/MMBtu or more than 100 times normal levels) caused the LCAP rise to more than double the HCAP."
  - id: e30
    source: imm-som-2021
    locator: "page 123 (OCR), Resource Adequacy, Peaker Net Margin in 2021"
    quote: "LCAP on March 3 to avoid outcomes contrary to the purpose of the rule, which was to protect consumers from sustained high prices in years with exceptional generator revenues."
  - id: e31
    source: imm-som-2022
    locator: "page 115 (OCR), Resource Adequacy, Peaker Net Margin in 2022"
    quote: "This figure shows that PNM results in 2022 were higher than any other year except 2021, but still nowhere near reaching the $315,000 PNM threshold."
  - id: e32
    source: imm-som-2022
    locator: "page 115 (OCR), Resource Adequacy, Peaker Net Margin in 2022"
    quote: "Also of note was the PNM accumulation of $32k/MW-yr in the winter months (includes January, February, and December) of 2022."
  - id: e33
    source: imm-som-2023
    locator: "page 115 (OCR), Resource Adequacy, Shortage Pricing and the Peaker Net Margin in 2023"
    quote: "This figure shows that PNM results in 2023 were higher than any other year except 2021, totaling approximately $263,968, but still well below the $315,000 PNM threshold."
  - id: e34
    source: imm-som-2023
    locator: "page 115 (OCR), Resource Adequacy, Shortage Pricing and the Peaker Net Margin in 2023"
    quote: "The relatively high PNM results in 2023 were largely due to the impact of the implementation of ECRS on real-time energy prices, as the first spike in the metric occurred in mid-June immediately after ECRS was introduced."
  - id: e35
    source: imm-som-2024
    locator: "page 121 (OCR), Resource Adequacy, E. Peaker Net Margin"
    quote: "In our analysis, we assume a heat rate of 10.5 MMBtu per MWh, include variable O&M costs of $4 per MWh, and apply a total outage rate of 10%, which we believe reflects a more realistic estimate of generator performance and costs."
  - id: e36
    source: imm-som-2025
    locator: "page 119 (OCR), Resource Adequacy, key points"
    quote: "Net revenues in 2024 and 2025 were significantly lower than in previous years. Years with lower net revenues occur often and are not a threat to resource adequacy."
  - id: e37
    source: imm-som-2025
    locator: "page 122 (OCR), Resource Adequacy, 2. Net Revenue by Location"
    quote: "The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region."
  - id: e38
    source: imm-som-2025
    locator: "page 123 (OCR), Resource Adequacy, Figure 55 discussion"
    quote: "In 2025, net revenues for wind and solar were lower than net revenues for gas-fired technologies in all areas."
  - id: e39
    source: imm-som-2025
    locator: "page 123 (OCR), Resource Adequacy, D. Cost of New Entry"
    quote: "CONE represents the estimated annualized revenue requirement for a marginal new generating resource, typically a gas-fired unit, to recover capital and fixed operating costs over the resource’s economic life."
  - id: e40
    source: imm-som-2025
    locator: "page 122 (OCR), Resource Adequacy, Peaker Net Margin and Shortage Pricing"
    quote: "If the PNM approaches or exceeds the CONE, it suggests that market revenues are sufficient to support new generation for that year."
  - id: e41
    source: imm-som-2025
    locator: "page 124 (OCR), Resource Adequacy, Updates to CONE"
    quote: "In parallel with ERCOT’s 2026 Reliability Standard Assessment (RSA), ERCOT is conducting an additional review of CONE to align cost assumptions with potential reliability pathways."
  - id: e42
    source: ercot-nprr1216-puct-report
    locator: "NPRR1216 PUCT report (Board approval September 26, 2024), proposed Section 4.4.11 language, paragraph (1)(a)(ii)"
    quote: "If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, on the next Operating Day, the SWCAP shall be set to the Low System-Wide Offer Cap (LCAP) for the remainder of that year. At the beginning of the next calendar year, the SWCAP shall be reset to the HCAP."
  - id: e43
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(ii)"
    quote: "If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism."
  - id: e44
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
---

## Definition

Peaker net margin (PNM) is a running calendar-year sum of how much the real-time energy price exceeds a notional peaking plant's operating cost, calculated for each settlement interval when the price is above that cost. [e1] The IMM describes it as an estimate of the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. [e8]

## How it works

**Inputs.** The peaking operating cost (POC) for each day is ten times the daily natural gas price index (the protocol calls it the effective daily fuel index price, FIP). [e2][e3] The FIP is the daily midpoint or average of natural gas prices for the Katy area (Katy Hub), in $/MMBtu. [e26] The real-time energy price in the test is the ERCOT Hub Average 345 kV Hub price in the protocol; the PUCT rule words it as an average system-wide price as determined by ERCOT. [e3][e27] The mechanism runs on a calendar-year basis. [e17]

**Accumulation.** PNM accumulates in dollars per MW on a cumulative basis across all past intervals in the year. [e4] In the Protocols each qualifying 15-minute interval adds (RTEP minus POC) times 0.25, counting only intervals where RTEP exceeds POC. [e23] ERCOT posts the updated PNM and current day-ahead cap on its website by the end of the next business day. [e5]

**Threshold and trigger.** ERCOT sets the PNM threshold at three times the cost of new entry, and the Protocol parameter table lists it as 315,000 $/MW-year. [e6][e21] The system-wide offer cap starts each calendar year at the HCAP and stays there until PNM exceeds the threshold. [e17] The Protocol's statement of the trigger covers the DASWCAP and the VOLL used to set the ASDCs for the DAM and RTM. [e43] If it does, the cap is set to the LCAP for the rest of the calendar year. [e10] In the Protocols the sequence is: the HCAP stays in effect for the day PNM crosses and the next Operating Day (Days 1 and 2), ERCOT sends a Market Notice on Day 2 before the DAM that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will be changed to the LCAP, and the LCAP applies from Day 3 to year end. [e7][e25][e14] On December 31 the DASWCAP and VOLL reset to the HCAP for the next January 1. [e24]

**What the LCAP regime does.** The rule says that when the cap is the LCAP, ERCOT keeps applying the operating reserve demand curve and the reliability deployment price adder, but energy prices exclusive of congestion will not exceed the LCAP plus $1 for the rest of the year. [e18] ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e19]

**Cap values.** In the PUCT rule (copy effective 12/20/23) the LCAP is $2,000 per MWh (and per MW per hour for ancillary service offers) and the HCAP is $5,000 per MWh (and per MW per hour). [e16] The saved np-04 (edition effective 2026-08-01) parameter table lists the day-ahead HCAP at $5,000/MWh and the real-time HCAP (RTSWCAP) at $2,000/MWh. [e22]

## Formula

PNM for the current year, in $ per MW, in the Protocols: [e4][e23]

`PNM = ∑((RTEP – POC) * (0.25)) for each Settlement Interval where (RTEP – POC) > 0` [e23]

- RTEP is the Real-Time Energy Price, measured as the ERCOT Hub Average 345 kV Hub price. [e3]
- POC is the Peaking Operating Cost, ten times the effective daily FIP, in dollars per MWh. [e3]
- 0.25 converts a 15-minute Settlement Interval to hours; the PUCT rule writes the same factor as minutes in the interval divided by 60. [e23][e1]
- Only intervals where RTEP exceeds POC count, so PNM only ever rises during the year. [e1]

## Example

Suppose gas is $4/MMBtu, so POC is $40/MWh. An interval at $140/MWh adds (140 - 40) x 0.25 = $25/MW; an interval at $30/MWh adds nothing.

## ERCOT context

The IMM says the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 PNM reached almost $79 per kW, about 21% below 2024, and did not reach the threshold. [e12] The IMM stresses that PNM is not a true net revenue measure: it uses protocol-specified values, a 10.0 MMBtu per MWh heat rate, and excludes variable O&M costs and outage rates. [e11] By contrast, its own net revenue analysis assumes 10.5 MMBtu per MWh, $4 per MWh variable O&M and a 10% outage rate. [e35]

The threshold is still based on the legacy cost of new entry of $105 per kW-year; in July 2024 the PUCT approved $140 per kW-year for planning purposes but kept $105 for the PNM threshold. [e13] The IMM defines CONE as the estimated annualized revenue requirement for a marginal new generating resource, typically gas-fired, to recover capital and fixed operating costs. [e39] Comparing PNM with CONE is the IMM's check on whether market revenues are enough to support new generation, and the IMM says that if PNM approaches or exceeds CONE, market revenues are sufficient for that year. [e8][e40] ERCOT is separately reviewing CONE alongside its 2026 Reliability Standard Assessment. [e41]

Year by year, from the IMM reports: 2021 crossed the $315,000 threshold on February 16. [e28] In 2022 PNM was higher than any other year except 2021 but nowhere near the threshold, with $32k/MW-yr accumulated in the winter months. [e31][e32] In 2023 PNM was about $263,968, again the highest since 2021 but well below the threshold, and the IMM attributes it largely to ECRS implementation affecting real-time prices. [e33][e34] The IMM says net revenues in 2024 and 2025 were significantly lower than in previous years and that low-revenue years occur often and are not a threat to resource adequacy. [e36] In 2025 the IMM also saw a wide West versus Houston gap in gas unit net revenues, driven by Permian import-constrained congestion. [e37] Wind and solar net revenues were lower than gas-fired technologies in all areas in 2025. [e38]

## Timeline

- February 16, 2021: PNM threshold exceeded for the first and only time; the LCAP in effect then was the greater of $2,000 or 50 times the natural gas price index, and the IMM says the gas price (up to $400/MMBtu) pushed it to more than double the HCAP. [e28][e29]
- March 3, 2021: the IMM says the Commission suspended use of the LCAP to avoid outcomes contrary to the rule's purpose. [e30]
- July 2024: PUCT approves a planning CONE of $140 per kW-year but keeps the $105 value for the PNM threshold. [e13]
- September 26, 2024: Board approval of NPRR1216 (per its report); its proposed language would set the SWCAP to the LCAP on the next Operating Day after the threshold is exceeded, instead of from Day 3 as in the Protocols saved here. The saved np-04 still shows the Day 3 schedule, so this is pending or not yet reflected. [e42][e25]
- December 2025: RTC go-live; the IMM says the ORDC adder was discontinued then. [e44]
- January 1, 2026: PUCT review of the system-wide offer cap programs begins, repeating every five years. [e20]

## Key facts

- POC is ten times the daily gas price index; RTEP is the Hub Average 345 kV Hub price. [e2][e3]
- PNM threshold is three times CONE, which the IMM states as $315 per kW-year. [e6][e9]
- When exceeded, the cap falls to the LCAP for the rest of the calendar year, effective Day 3. [e10][e7][e14]
- Only once in ERCOT's history (February 16, 2021). [e9]
- 2023 PNM: approximately $263,968 (per MW-year), below the $315,000 threshold. [e33]
- 2025 PNM: almost $79 per kW, roughly 21% lower than 2024. [e12]
- The reset to the HCAP happens on December 31 for Operating Day January 1. [e24]

## Say it like this

Peaker net margin tracks, year to date, how much a hypothetical gas peaker would have earned above its fuel cost. If it passes three times the cost of new entry, ERCOT drops the price cap for the rest of the year; that has happened once, in Winter Storm Uri. [e9]

## Common confusion

PNM is not the same as the net revenue the IMM reports for real units, because it uses fixed protocol values and ignores variable O&M and outages. [e11] It also resets each calendar year, so it is different from the Emergency Pricing Program's rolling 24-hour trigger. [e1][e15] The threshold uses the legacy $105 per kW-year CONE, not the $140 planning CONE. [e13]

## Questions

### How is PNM calculated?

For each settlement interval where the Hub Average 345 kV price exceeds the POC (ten times the daily gas index), the difference times the interval length (0.25 hour in the Protocols) is added to a cumulative annual total in dollars per MW. [e1][e3][e4][e23]

### What happens when PNM crosses the threshold?

The cap goes to the LCAP for the rest of the calendar year, after the HCAP stays for the day of the crossing and the next Operating Day. [e10][e7] Energy prices excluding congestion will not exceed the LCAP plus $1, and resources are reimbursed for marginal costs above the larger of the LCAP or their real-time price. [e18][e19]

### Why is the threshold still $315 per kW-year when CONE was updated to $140?

The PUCT retained the legacy $105 per kW-year CONE for the PNM threshold when it approved $140 for planning in July 2024; three times $105 is $315. [e13][e9]

### Why did the PNM threshold not trigger in 2023 despite very high prices in places?

The IMM reports 2023 PNM of approximately $263,968, below the $315,000 threshold, and attributes the high 2023 value largely to ECRS implementation affecting real-time prices. [e33][e34]

### What if gas prices spike, as in Winter Storm Uri?

Because POC is ten times the daily gas index, a gas price spike raises the hurdle the real-time price must clear. [e2] In 2021 the IMM says the LCAP at the time was tied to 50 times the gas index and rose to more than double the HCAP, and the Commission suspended it on March 3. [e29][e30] The LCAP in the saved rule is a fixed $2,000. [e16]

### Why does the IMM say low PNM years are not a problem?

The IMM says years with lower net revenues occur often and are not a threat to resource adequacy, as part of the cycle in an energy-only market. [e36]

## Scenarios

### Gas is $5/MMBtu all year and Hub Average prices are $100/MWh for 400 hours in the summer. Does PNM reach the threshold?

- (Illustration.) POC is 10 x $5 = $50/MWh. [e2]
- Each qualifying 15-minute interval adds ($100 - $50) x 0.25 = $12.50/MW, so 400 hours (1,600 intervals) add $20,000/MW. [e23]
- That is far below the $315,000 per MW-year threshold. [e21]

## Open items

- Resolved 2026-11-21: the threshold table in np-04 now shows both $5,000 (DAM) and $2,000 (RTM) HCAP values, which matches the IMM's description of separate caps after RTC; how the PNM switch applies separately to the real-time cap is still not stated in the saved text (np-04 4.4.11.1 only mentions DASWCAP and VOLL for ASDCs).
- The PUCT rule says RTEP is an average system-wide price as determined by ERCOT, while the protocol specifies the Hub Average 345 kV Hub price; the protocol is used here for the operational definition.
- PNM values for 2018-2020 and 2024 are in Figure 57 (a chart), not in text; the saved sources give 2024 only as 2025's almost $79 per kW being roughly 21% lower, and this topic does not back-calculate a 2024 figure.
- Whether NPRR1216's "next Operating Day" language has been implemented is not stated in the saved np-04.
- The outcome of the PUCT's 2026 review of the system-wide offer cap programs (25.509(d)) was not found in the saved sources.
- The IMM 2025 net revenue by technology (Figure 55) is a chart; per-technology dollar values are not quotable.
