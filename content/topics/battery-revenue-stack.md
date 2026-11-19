---
id: battery-revenue-stack
name: Battery Revenue Stack
aliases: [battery revenue stack, ESR revenue, storage revenue, energy arbitrage, AS saturation, revenue stacking]
kind: concept
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
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
    note: See DRRS for the new reserve product and the pending work on storage participation.
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
---

## Definition

A battery's revenue stack is the mix of income an Energy Storage Resource earns from ancillary services and from energy arbitrage, buying electricity when prices are low and selling it when prices are high. [e5] In ERCOT the stack has shifted: as ESR capacity grew, batteries earned more of their revenue from energy arbitrage than from ancillary services. [e1]

## How it works

Batteries first earned mainly from ancillary services because they respond quickly. As ESRs saturated several AS markets, they began shifting toward energy arbitrage in 2024. [e5] The IMM expects revenue per unit of capacity to fall as more ESRs enter, because AS markets saturate and arbitrage spreads tighten. [e4] Location also matters: the IMM says ESRs can act as both supply and demand, and can often charge at prices below $0 when increasing load at a location resolves congestion. [e13]

ERCOT's July 2025 RTC+B battery overview, written before go-live, described the change this way: awards are limited by qualification, physical capability, state of charge, ramp rates and AS duration requirements, and one ESR can receive energy and several AS types in the same SCED execution, where before the QSE had to reserve enough state of charge itself. [e9] The Protocols now in force base AS awards on Resource capability, including State of Charge and SOC limits, and the ASDCs. [e15]

## ERCOT context

2025 results (IMM): revenue per unit of ESR capacity fell almost 37%, even though total net ESR revenue rose about 8%. [e2] Net energy revenue rose 57% after charging costs, while AS revenue fell more than 37% as added ESR supply pushed AS prices down. [e3] ESRs still provided most regulation: 94% of Reg-Up and 86% of Reg-Down on average in 2025. [e10] Average duration rose from 1.67 to 1.83 hours, which the IMM ties to the shift to arbitrage. [e6] In 2024 total ESR revenue had already fallen versus 2023 because of the supply surplus and fewer extreme heat days. [e8]

Summer 2026 (ERCOT): AS costs were relatively low under real-time co-optimization, and ESR state-of-charge exhaustion in the evenings was a pattern all summer. [e11][e14] ERCOT linked a higher share of ESR capacity offered within $100/MWh of the cap to the lower $2,000/MWh real-time offer cap introduced with RTC+B. [e12]

## Key facts

- 2025: revenue per unit of ESR capacity down almost 37%; total net ESR revenue up about 8%. [e2]
- 2025: net energy revenue up 57%; AS revenue down more than 37%. [e3]
- 2025: ESRs supplied 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin. [e10]
- 2025: 55% of ESR energy offers priced at $0-100/MWh, up from 46% in 2024 and 25% in 2023. [e7]
- Average ESR duration rose from 1.67 to 1.83 hours (IMM 2025 report). [e6]

## Say it like this

(Guidance) ERCOT batteries used to live on ancillary services, but they now supply most of the regulation and about half of RRS themselves, so AS prices fell and the IMM sees a shift toward energy arbitrage. Per-MW revenue dropped by more than a third in 2025 even as the fleet's total revenue rose, and average duration rose as participation shifted. [e1][e2][e3][e6][e10]

## Common confusion

(Guidance) Falling revenue per MW is not falling total revenue: in 2025 the fleet's total net revenue rose about 8% while per-unit revenue fell almost 37%. [e2] A falling AS line does not mean batteries left AS: they still supplied most regulation in 2025. [e10] ERCOT says the slightly higher share of ESR capacity offered within $100/MWh of the cap in summer 2026 is largely due to the lower $2,000 real-time cap. [e12]

## Questions

### Why did ESR revenue per MW fall in 2025?

Added ESR capacity raised AS supply and cut AS prices, so AS revenue fell more than 37%; net energy revenue rose 57% but not enough to offset it per unit of capacity. [e3][e2]

### How did RTC+B change how a battery's stack is set?

As ERCOT's pre-go-live (July 2025) battery overview described it, SCED can award energy and multiple AS types to an ESR in the same run, within limits set by qualification, physical capability, state of charge, ramp rates and duration requirements, where before the QSE had to make sure it reserved enough state of charge. [e9] The Protocols in force list State of Charge and SOC limits among the bases for AS awards. [e15]

### Why has average battery duration risen?

The IMM ties the rise in average duration from 1.67 to 1.83 hours to ESR market participation shifting from AS to energy arbitrage. [e6]

## Open items

- Dollar values of ESR revenue by product ($ million and $/kW-year) are in Figure 17 (2025) and Figure 23 (2024), but the figure numbers are not legible even in the OCR copies; only the IMM's percentages are used.
- Revenue split by individual AS product (Reg, RRS, ECRS, Non-Spin) for ESRs was not found.
- No post-RTC+B (2026) full-year revenue figure for ESRs is in the saved sources.
- Deeper pass: summer 2026 ESR AS shares in DAM and RTM (slide 22 charts), state-of-charge patterns and the share of hours below 20% SOC.
- Deeper pass: E3's PCM finding that battery margins would rise 29% under the PCM; tolling and hedge structures for batteries are not in the saved sources.
- Deeper pass: whether ESRs can provide DRRS (NPRR1310, NPRR1340 pending).
