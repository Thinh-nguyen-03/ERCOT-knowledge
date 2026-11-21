---
id: battery-revenue-stack
name: Battery Revenue Stack
aliases: [battery revenue stack, ESR revenue, storage revenue, energy arbitrage, AS saturation, revenue stacking]
kind: concept
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: energy-storage-resource
    type: related
    note: The ESR topic covers what a battery is in ERCOT; this one covers how it earns money. [e1]
  - to: ancillary-services
    type: part-of
    note: Ancillary service revenue was the main ESR income until saturation pushed batteries toward energy arbitrage. [e5]
  - to: rtc-b
    type: affects
    note: ERCOT's pre-go-live RTC+B overview said SCED can award energy and several AS types to one ESR in the same run, limited by state of charge. [e9]
  - to: negative-prices
    type: related
    note: Energy arbitrage means buying when prices are low, and ESRs can often charge at prices below $0 where added load resolves congestion. [e5][e13]
  - to: offer-cap
    type: related
    note: ERCOT links a higher share of ESR offers near the cap in summer 2026 to the lower $2,000/MWh real-time cap under RTC+B. [e12]
  - to: sc-battery-strategy
    type: example-of
    note: The scenario applies this revenue stack to a battery operating decision.
  - to: drrs
    type: related
    note: Under pending NPRR1309 a DRRS provider must run at HSL for four consecutive hours, and ERCOT filed NPRR1340 in June 2026 to carry the storage participation discussion forward. [e27][e29]
  - to: pcm
    type: related
    note: PUCT staff reported E3's finding that battery storage margins would rise 29% under the PCM, but recommended not moving forward with the PCM as designed. [e37][e38]
  - to: non-spin
    type: related
    note: Non-Spin capability must be sustainable for four consecutive hours today, which limits how much Non-Spin a battery can carry per MWh. [e25]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services."
  - id: e2
    source: imm-som-2025
    locator: "Chapter II.E.3, ESR Revenue Trends"
    quote: "Annual revenue per unit of ESR capacity declined significantly in 2025, falling by almost 37% from 2024 after normalization for the larger volume of ESR capacity in the market. This decline occurred even though total net ESR revenue increased by about 8%"
  - id: e3
    source: imm-som-2025
    locator: "Chapter II.E.3, ESR Revenue Trends"
    quote: "Net energy revenue rose by 57% after accounting for charging costs. However, ancillary services revenue fell by more than 37% because the additional ESR capacity increased ancillary services supply and reduced prices."
  - id: e4
    source: imm-som-2025
    locator: "Chapter II.E.3, ESR Revenue Trends"
    quote: "Economic fundamentals suggest that as more ESRs enter the market, revenue per unit of capacity will decline as the ancillary services market saturates and energy arbitrage price spreads tighten."
  - id: e5
    source: imm-som-2025
    locator: "Chapter II.E.4, ESR Participation in Energy Markets"
    quote: "Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high."
  - id: e6
    source: imm-som-2025
    locator: "Chapter II, key insights on ESRs"
    quote: "Total energy storage capacity exceeded 17 GW, and average duration increased from 1.67 hours to 1.83 hours. The increase in average duration corresponds to ESR market participation shifting from AS to energy arbitrage."
  - id: e7
    source: imm-som-2025
    locator: "Chapter II.E.4, ESR Aggregate Offers"
    quote: "In 2025, 55% of energy offers were priced between $0-100 per MWh, compared to 46% in 2024 and 25% in 2023. As more ESRs enter the market, they must offer more competitively to maximize revenue from energy sales."
  - id: e8
    source: imm-som-2024
    locator: "Chapter II.E.5, ESR Revenue Trends (2024 report)"
    quote: "In 2024, total ESR revenue declined compared to 2023, primarily because of the increasing supply surplus from new IRRs and fewer extreme heat days that together reduced the frequency of price spikes."
  - id: e9
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3"
    quote: "The awards for each Resource are limited based on the Resource’s qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE’s responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements. Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e11
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 17"
    quote: "Ancillary Service costs were relatively low in Summer 2026, reflecting low opportunity costs in both DAM and Real-Time Energy and AS Co-Optimization."
  - id: e12
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, slide 21"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e13
    source: imm-som-2025
    locator: "Chapter V, Congestion Management by ESRs"
    quote: "ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0."
  - id: e14
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, key takeaways (slide 1)"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e15
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: "Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment."
  - id: e16
    source: imm-som-2024
    locator: "Chapter I.E.5, ESR Revenue Trends, page 64 (OCR)"
    quote: "Normalized revenues from energy arbitrage have grown every year as their offer patterns have become more competitive."
  - id: e17
    source: imm-som-2025
    locator: "Chapter I.E.3, ESR Revenue Trends, page 44 (OCR)"
    quote: "Events such as Winter Storm Uri in 2021 and the artificial scarcity caused by the implementation of ECRS in 2023 created revenue spikes that obscure year-over-year trends in revenue per kilowatt (kW) and total revenue growth."
  - id: e18
    source: imm-som-2025
    locator: "Chapter I.E.4, ESR Net Injection of Power, page 46 (OCR)"
    quote: "rate increased by 215% to 2,171 MW. Together, those increases amount to roughly triple the volume of energy arbitrage in 2025 compared to 2024."
  - id: e19
    source: imm-som-2025
    locator: "Chapter I.E.4, ESR Participation in Energy Markets"
    quote: "As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed."
  - id: e20
    source: imm-som-2025
    locator: "Chapter I.E.2, ESR capacity and duration, page 44 (OCR)"
    quote: "To capitalize on revenue opportunities throughout the day, particularly during the morning and evening ramps, battery developers increasingly focus on duration rather than power capacity."
  - id: e21
    source: imm-som-2023
    locator: "Executive Summary, Recommendation 2023-3, Improve the procurement and deployment of ECRS"
    quote: "Reduce the duration requirement for ECRS to one hour, which would allow more ESRs capacity to provide ECRS."
  - id: e22
    source: np-08
    locator: "Section 8.1.1.3.1, Regulation Service Capacity Monitoring Criteria, paragraph (2)"
    quote: "For the Reg-Up and Reg-Down capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of Reg-Up or Reg-Down reflected in that capability must be limited to the amount of Reg-Up or Reg-Down that can be sustained by the Resource for at least 30 minutes."
  - id: e23
    source: np-08
    locator: "Section 8.1.1.3.2, Responsive Reserve Capacity Monitoring Criteria, paragraph (4)"
    quote: "For Resources that are providing RRS and are available for Dispatch by SCED, for the RRS capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of RRS reflected in that capability must be limited to the amount of RRS that can be sustained by the Resource for at least 30 minutes."
  - id: e24
    source: np-08
    locator: "Section 8.1.1.3.4, ERCOT Contingency Reserve Service Capacity Monitoring Criteria, paragraph (2)"
    quote: "For the ECRS capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of ECRS reflected in that capability must be limited to the amount of ECRS that can be sustained by the Resource for at least one hour."
  - id: e25
    source: np-08
    locator: "Section 8.1.1.3.3, Non-Spinning Reserve Capacity Monitoring Criteria, paragraph (2)"
    quote: "For the Non-Spin capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least four consecutive hours."
  - id: e26
    source: np-08
    locator: "Section 8.1.1.3.3, pending box [NPRR1309: Replace paragraph (2) above with the following upon system implementation]"
    quote: "For the Non-Spin capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least two consecutive hours."
  - id: e27
    source: np-08
    locator: "Pending box [NPRR1309: Insert Section 8.1.1.2.1.8 upon system implementation], DRRS Qualification, paragraph (5)"
    quote: "For Resources seeking to qualify to provide DRRS, the Resource must be capable of operating at its HSL for at least four consecutive hours. The amount of DRRS for which the Resource is qualified is limited to the amount of capacity that can be ramped within two hours."
  - id: e28
    source: np-08
    locator: "Pending box [NPRR1309: Insert Section 8.1.1.2.1.8 upon system implementation], DRRS Qualification, paragraph (1)"
    quote: "DRRS may only be provided from capability that is not fulfilling any other energy or capacity commitment."
  - id: e29
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026 (published 2026-07-10), DRRS item"
    quote: "Design and pricing refinements for energy storage resource participation in DRRS continued at the Protocol Revision Subcommittee (PRS) on June 10, where ERCOT filed NPRR1340 with companion NOGRR288 to carry the storage discussion forward."
  - id: e30
    source: ercot-summer-2026-review
    locator: "Slide 11, State of Charge Operating Patterns Across Summer (2026 data June 1 - August 15)"
    quote: "Key Takeaway: SOC levels were generally highest between Hours 12 and 20. There were several hours during the late evening through sunrise where SOC was very low. The percent of hours with SOC under 20% and 10% were 15% and 0.74% respectively."
  - id: e31
    source: ercot-summer-2026-review
    locator: "Slide 22, ESR contribution to Ancillary Services continues to increase"
    quote: "Key Takeaway: With increasing ESR capacity on the system, they continue to dominate Ancillary Service awards, especially for regulation services in both DAM and RTM. In DAM, the most notable increase from summer of 2024 is in Non-Spin and ECRS. In 2026, ESR’s AS contribution in real-time follows the same pattern as day-ahead."
  - id: e32
    source: ercot-summer-2026-review
    locator: "Slide 16, Day-Ahead and real-time Ancillary Service prices are lower"
    quote: "Key Takeaway: Day-ahead ancillary service prices have been trending lower in summer 2026 compared to 2024 and 2025, except for Non-Spin. Across summer 2026, Real-time Ancillary Service prices have decreased month over month."
  - id: e33
    source: ercot-summer-2026-review
    locator: "Slides 9-10, lowest SOC% days"
    quote: "Key Takeaway: ESRs were charging during high solar generation and discharging during the solar ramp down. Compared to last year SOC% was lower on raw percentage, however, since ESR MWh capacity is higher, this lower SOC% is not necessarily lower SOC MWh."
  - id: e34
    source: ercot-summer-2026-review
    locator: "Slide 18, Most Ancillary Services were fully procured"
    quote: "In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, offsetting a decline in the Plan from 86 to 66 GWh/day."
  - id: e35
    source: imm-board-2026-02
    locator: "IMM report to ERCOT Board R&M Committee, February 9-10, 2026, slide 2, Non-Spinning Reserve Pricing in RTC"
    quote: "The RTM clears surplus NSRS yet is producing a shortage price. • Is frequently clearing at price > other reserves."
  - id: e36
    source: imm-som-tac-2026-07
    locator: "IMM 2025 SOM presentation to TAC (July 2026), slide 11, Trends related to RUC"
    quote: "One legitimate and growing challenge for ERCOT in using RUC appropriately is the (in)accuracy of the forecast for battery State of Charge"
  - id: e37
    source: puct-pcm-staff-rec
    locator: "Project 55000, Staff Recommendation (December 2024), summary of ERCOT/E3 assessment, p. 6"
    quote: "The only resource classes that see a change of greater than one percent of expected revenues are battery storage and wind. Battery storage sees a 29% increase in margins under PCM while wind resources see a 1.2% reduction in margins."
  - id: e38
    source: puct-pcm-staff-rec
    locator: "Project 55000, Staff Recommendation, Staff's Final Recommendation, p. 2"
    quote: "After reviewing the ERCOT/E3 and IMM assessments, Staff recommends not moving forward with the PCM as currently designed."
  - id: e39
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids (May 2026), slide 39, ERCOT storage standalone value"
    quote: "For the 2024 PV+S sample, empirical cropped storage revenue was $28/kW-yr, slightly below Modo’s1 estimate for the broader ERCOT storage fleet, which has longer average battery duration than these seven projects."
  - id: e40
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids (May 2026), slide 39, ERCOT results"
    quote: "Optimized non-cropped storage revenue fell by 70% in 2024, to $88/kW-yr, reflecting lower ancillary services prices."
  - id: e41
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids (May 2026), slide 39, value drivers"
    quote: "In both 2023 and 2024, ECRS was the largest storage value driver in the optimized case, contributing $32/kW-yr in 2024."
  - id: e42
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids (May 2026), slide 38, ERCOT empirical data description"
    quote: "ERCOT has many operating batteries, but only 7 projects with available data were co-located with solar (with varying degrees of usable data of 2,208 to 8,784 h/year)."
  - id: e43
    source: ref-lbnl-pv-battery
    locator: "LBNL, Influence of business models on PV-battery dispatch decisions (briefing), Conclusion"
    quote: "Only a minority of projects optimize battery dispatch for wholesale market revenue as merchant plants, majority follow other business models"
  - id: e44
    source: np-04
    locator: "Section 4.6.2.3, Day-Ahead Make-Whole Settlements, paragraph (7)"
    quote: "An Energy Storage Resource (ESR) is not eligible for Day-Ahead Make-Whole Payment."
  - id: e45
    source: ercot-rtcb-battery
    locator: "Slide 11, High Level Scope of \"+B\" (July 2025 overview)"
    quote: "NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024)"
  - id: e46
    source: ercot-nprr1014-board-report
    locator: "NPRR1014 Board Report, Revision Description"
    quote: "This Nodal Protocol Revision Request (NPRR) enables the integration of Energy Storage Resources (ESRs) into the ERCOT core systems as a single-model Resource, replacing the existing “combination model” paradigm in which ESRs are treated as two Resources: a Generation Resource and a Controllable Load Resource."
  - id: e47
    source: ercot-summer-2026-review
    locator: "Slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e48
    source: ref-lbnl-pv-battery
    locator: "LBNL, Influence of business models on PV-battery dispatch decisions (briefing), sample description"
    quote: "Our sample includes 1 plant in CAISO, 3 plants in ERCOT, and 7 plants in ISO-NE"
---

## Definition

A battery's revenue stack is the mix of income an Energy Storage Resource earns from ancillary services and from energy arbitrage, buying electricity when prices are low and selling it when prices are high. [e5] In ERCOT the stack has shifted: as ESR capacity grew, batteries earned more of their revenue from energy arbitrage than from ancillary services. [e1]

## How it works

Batteries first earned mainly from ancillary services because they respond quickly. As ESRs saturated several AS markets, they began shifting toward energy arbitrage in 2024. [e5] The IMM expects revenue per unit of capacity to fall as more ESRs enter, because AS markets saturate and arbitrage spreads tighten. [e4] The arbitrage leg works because midday solar pushes real-time prices down, sometimes below zero, so batteries can charge cheaply or even be paid to consume. [e19] Location also matters: the IMM says ESRs can act as both supply and demand, and can often charge at prices below $0 when increasing load at a location resolves congestion. [e13]

Since RTC+B the market sets the stack for each interval. ESRs became a single-model Resource under NPRR1014, replacing the old pairing of a Generation Resource and a Controllable Load Resource. [e46] ERCOT's July 2025 RTC+B battery overview, written before go-live, described the change this way: awards are limited by qualification, physical capability, state of charge, ramp rates and AS duration requirements, and one ESR can receive energy and several AS types in the same SCED execution, where before the QSE had to reserve enough state of charge itself. [e9] The Protocols now in force base AS awards on Resource capability, including State of Charge and SOC limits, and the ASDCs. [e15] An ESR is not eligible for Day-Ahead Make-Whole Payment. [e44]

## Formula

Duration caps limit how much of each AS a battery's stored energy can back. Under the Protocols in force (capacity monitoring criteria in Section 8.1.1.3), the capability a QSE shows for a Resource must be limited to what it can sustain for at least the following durations. [e22][e25]
- Reg-Up or Reg-Down: 30 minutes. [e22]
- RRS (SCED-dispatchable Resources): 30 minutes. [e23]
- ECRS: one hour. [e24]
- Non-Spin: four consecutive hours. [e25] Pending NPRR1309 would cut this to two consecutive hours on implementation. [e26]
- DRRS (pending, NPRR1309): a qualifying Resource must be able to run at its HSL for four consecutive hours, and DRRS may come only from capability not fulfilling another energy or capacity commitment. [e27][e28]

In words: the longer the duration requirement, the fewer MW of that service each MWh of state of charge can support, which is why the IMM in 2023 recommended cutting the ECRS duration to one hour so more ESR capacity could provide it. [e21]

## Example

(Illustrative) Suppose a 100 MW / 200 MWh battery with full charge and no other award. Using the sustain-for-at-least rule above, its stored energy alone could back up to 100 MW of Reg-Up or RRS (30 minutes), 100 MW of ECRS (one hour), or 50 MW of Non-Spin (four hours at 50 MW uses 200 MWh). [e22][e23][e24][e25] Any MWh committed to one service or to energy is not available for another, and under RTC+B SCED checks this against telemetered SOC when it awards. [e9][e15] These numbers are made up for illustration; actual qualified quantities also depend on ramp rates, qualification and SOC limits.

## ERCOT context

2025 results (IMM): revenue per unit of ESR capacity fell almost 37%, even though total net ESR revenue rose about 8%. [e2] Net energy revenue rose 57% after charging costs, while AS revenue fell more than 37% as added ESR supply pushed AS prices down. [e3] The maximum average hourly charging rate rose 215% to 2,171 MW, which together with higher discharge the IMM says roughly tripled arbitrage volume versus 2024. [e18] ESRs still provided most regulation: 94% of Reg-Up and 86% of Reg-Down on average in 2025. [e10] Average duration rose from 1.67 to 1.83 hours, which the IMM ties to the shift to arbitrage; it says developers increasingly focus on duration to capture the morning and evening ramps. [e6][e20] In 2024 total ESR revenue had already fallen versus 2023 because of the supply surplus and fewer extreme heat days, while normalized arbitrage revenue had grown every year. [e8][e16] The IMM says Uri in 2021 and what it calls the artificial scarcity from ECRS in 2023 created revenue spikes that obscure the trend. [e17]

Summer 2026 (ERCOT, data through August 15): AS costs were relatively low under real-time co-optimization, and day-ahead AS prices trended lower than 2024 and 2025 except Non-Spin. [e11][e32] ESRs continued to dominate AS awards, especially regulation, in both DAM and RTM, with the biggest day-ahead gains since 2024 in Non-Spin and ECRS. [e31] ERCOT bought Non-Spin above the AS Plan when cost-effective, rising from 25 GWh/day in June to about 48 GWh/day in July and August. [e34] SOC exhaustion in the evenings was a pattern: SOC was below 20% in 15% of hours and below 10% in 0.74%. [e14][e30] ERCOT linked a higher share of ESR capacity offered within $100/MWh of the cap to the lower $2,000/MWh real-time offer cap introduced with RTC+B on 12/5/2025. [e12][e47]

The IMM's view after RTC: in February 2026 it told the ERCOT Board that the real-time market clears surplus Non-Spin yet produces a shortage price, frequently above other reserves. [e35] It also says forecast error for battery SOC is a growing challenge for ERCOT's RUC decisions. [e36]

Outside estimates (tier 2): for seven ERCOT solar-plus-storage projects, LBNL estimates empirical 2024 storage revenue of $28/kW-yr, and optimized revenue that fell 70% to $88/kW-yr on lower AS prices; it found ECRS was the largest optimized value driver ($32/kW-yr in 2024). [e42][e39][e40][e41] An earlier LBNL briefing on 11 hybrids (3 in ERCOT) found only a minority dispatch as merchant plants for wholesale revenue. [e48][e43]

Policy: PUCT staff reported E3's finding that battery storage margins would rise 29% under the PCM, but recommended not moving forward with the PCM as designed. [e37][e38] ERCOT filed NPRR1340 in June 2026 to continue the work on storage participation in DRRS. [e29]

## Key facts

- 2025: revenue per unit of ESR capacity down almost 37%; total net ESR revenue up about 8%. [e2]
- 2025: net energy revenue up 57%; AS revenue down more than 37%. [e3]
- 2025: ESRs supplied 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin. [e10]
- 2025: 55% of ESR energy offers priced at $0-100/MWh, up from 46% in 2024 and 25% in 2023. [e7]
- Average ESR duration rose from 1.67 to 1.83 hours (IMM 2025 report). [e6]
- Duration caps in force: Reg and RRS 30 minutes, ECRS one hour, Non-Spin four consecutive hours. [e22][e23][e24][e25]
- Summer 2026: SOC below 20% in 15% of hours (June 1 to August 15). [e30]

## Timeline

- December 2020: NPRR1014 (ESR single model) approved; February 2024: NPRR1204 (state of charge under RTC) approved (per ERCOT's July 2025 overview). [e45]
- 2023: ECRS introduced; the IMM recommends a one-hour ECRS duration and later describes the 2023 ECRS revenue spike as artificial scarcity. [e21][e17]
- 2024: ESRs begin shifting from AS toward energy arbitrage (IMM). [e5]
- December 2024: PUCT staff recommends not moving forward with the PCM as designed. [e38]
- 2025: per-MW ESR revenue falls almost 37% (IMM). [e2]
- December 5, 2025: RTC+B go-live; real-time offer cap $2,000/MWh. [e47]
- February 2026: IMM flags Non-Spin shortage pricing in a surplus under RTC. [e35]
- June 10, 2026: ERCOT files NPRR1340 on storage participation in DRRS. [e29]

## Say it like this

(Guidance) ERCOT batteries used to live on ancillary services, but they now supply most of the regulation and about half of RRS themselves, so AS prices fell and the IMM sees a shift toward energy arbitrage. Per-MW revenue dropped by more than a third in 2025 even as the fleet's total revenue rose, and average duration rose as participation shifted. [e1][e2][e3][e6][e10] Under RTC+B the stack is set by SCED each interval within state-of-charge and duration limits, so longer batteries can carry more of the long-duration products. [e9][e25]

## Common confusion

(Guidance) Falling revenue per MW is not falling total revenue: in 2025 the fleet's total net revenue rose about 8% while per-unit revenue fell almost 37%. [e2] A falling AS line does not mean batteries left AS: they still supplied most regulation in 2025. [e10] ERCOT says the slightly higher share of ESR capacity offered within $100/MWh of the cap in summer 2026 is largely due to the lower $2,000 real-time cap. [e12] A lower SOC percentage in 2026 does not mean less stored energy, because the fleet's MWh capacity is larger. [e33] And the LBNL $/kW-yr figures are for seven small co-located projects, not the ERCOT fleet. [e42][e39]

## Questions

### Why did ESR revenue per MW fall in 2025?

Added ESR capacity raised AS supply and cut AS prices, so AS revenue fell more than 37%; net energy revenue rose 57% but not enough to offset it per unit of capacity. [e3][e2]

### How did RTC+B change how a battery's stack is set?

As ERCOT's pre-go-live (July 2025) battery overview described it, SCED can award energy and multiple AS types to an ESR in the same run, within limits set by qualification, physical capability, state of charge, ramp rates and duration requirements, where before the QSE had to make sure it reserved enough state of charge. [e9] The Protocols in force list State of Charge and SOC limits among the bases for AS awards. [e15]

### Why has average battery duration risen?

The IMM ties the rise in average duration from 1.67 to 1.83 hours to ESR market participation shifting from AS to energy arbitrage, and says developers focus on duration to capture the morning and evening ramps. [e6][e20] Duration also matters for AS: Non-Spin must be sustainable for four consecutive hours, ECRS for one hour. [e25][e24]

### What if NPRR1309 is implemented?

The Non-Spin duration requirement would fall from four to two consecutive hours, and DRRS would arrive requiring four hours at HSL from capability not committed elsewhere. [e25][e26][e27][e28] Storage participation in DRRS was still being worked through NPRR1340 as of June 2026. [e29]

### Why does battery SOC matter beyond the battery owner's P&L?

ERCOT reported evening SOC exhaustion as a summer 2026 pattern, and the IMM says SOC forecast error makes it harder for ERCOT to use RUC appropriately. [e14][e36]

### What would a capacity-style payment have done for batteries?

PUCT staff reported E3's finding that battery storage would see a 29% increase in margins under the PCM, the largest change of any class, but staff recommended not proceeding with the PCM as designed. [e37][e38]

## Open items

- Dollar values of ESR revenue by product ($ million and $/kW-year) are in Figure 17 (2025) and Figure 23 (2024), but the figure numbers are not legible even in the OCR copies; only the IMM's percentages are used.
- Revenue split by individual AS product (Reg, RRS, ECRS, Non-Spin) for the ESR fleet was not found; LBNL gives drivers only for a seven-project sample.
- No post-RTC+B (2026) full-year revenue figure for ESRs is in the saved sources.
- Summer 2026 ESR AS shares by product in DAM and RTM are charts only (slide 22); no quotable percentages.
- Tolling and hedge structures for batteries are not in the saved sources.
- Whether ESRs will be allowed to provide DRRS, and on what terms, was pending (NPRR1310/NPRR1340) as of the latest saved sources.
