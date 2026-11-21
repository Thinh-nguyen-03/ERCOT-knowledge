---
id: congestion
name: Transmission Congestion
aliases: [congestion, transmission congestion, congestion rent, constraint, binding constraint, intrazonal congestion]
kind: concept
domain: congestion
level: 1
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: shadow-price
    type: determines
    note: A constraint's shadow price is its marginal cost, and day-ahead congestion value is flow times shadow price. [e4][e6]
  - to: shift-factor
    type: determines
    note: A shift factor measures how much a unit injection loads a particular transmission element. [e5]
  - to: binding-constraint
    type: related
    note: Congestion exists when flow reaches a constraint's limit and dispatch has to move. [e1]
  - to: gtc
    type: related
    note: A GTC groups transmission elements to limit flow between geographic areas, to manage stability, voltage and other constraints that cannot be modeled directly. [e8]
  - to: crr
    type: hedges
    note: CRRs pay holders the congestion rent that arises from locational price differences. [e3][e14]
  - to: lmp
    type: causes
    note: Congestion shows up as differing energy prices at each node. [e2]
  - to: basis-risk
    type: related
    note: Real-time congestion was 7% higher than day-ahead in 2025 per the IMM. [e10]
  - to: load-zone
    type: related
    note: The IMM reports about 9% of 2025 congestion costs were interzonal, and the West Zone is the largest contributor to intrazonal congestion costs. [e13]
  - to: energy-storage-resource
    type: related
    note: The IMM says ESRs are well suited to resolve congestion because they can act as both supply and demand. [e24]
  - to: ruc
    type: related
    note: The IMM reports about 77% of 2025 RUC commitments were for congestion. [e23]
  - to: permian-transmission
    type: related
    note: The IMM ties West-zone congestion to Panhandle renewables and Permian demand outrunning transmission. [e15]
  - to: energy-storage-resource
    type: related
    note: The IMM says ESRs are well suited to resolve congestion because they can act as both supply and demand. [e24]
  - to: ruc
    type: related
    note: The IMM reports about 77% of 2025 RUC commitments were for congestion. [e23]
  - to: permian-transmission
    type: related
    note: The IMM ties West-zone congestion to Panhandle renewables and Permian demand outrunning transmission. [e15]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Executive Summary, Transmission Congestion"
    quote: "Transmission congestion arises when network power flows are restricted by limits on transmission facilities such as power lines and transformers. Network topology, i.e., the configuration of transmission facilities, and the locations where power is injected into or withdrawn from the network determine the power flows. When flow over a transmission facility reaches its limit, the market shifts generation to higher-cost units to alter the network flows and serve load without exceeding the limit. Hence, congestion prevents the lowest-cost generators from serving load."
  - id: e2
    source: imm-som-2025
    locator: "Executive Summary, Transmission Congestion"
    quote: "When transmission congestion occurs, differences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or “node” on the network."
  - id: e3
    source: imm-som-2025
    locator: "Executive Summary, Transmission Congestion"
    quote: "Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial right to this congestion rent accrues to holders of CRRs."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Shadow Price"
    quote: "A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Shift Factor"
    quote: "A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus."
  - id: e6
    source: imm-som-2025
    locator: "Chapter V.C, Day-Ahead Congestion"
    quote: "It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.1.11, Transmission Network and Power Balance Constraint Management, paragraph (2)"
    quote: "The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Constraint (GTC)"
    quote: "A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT’s powerflow and contingency analysis applications."
  - id: e9
    source: imm-som-2025
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin."
  - id: e10
    source: imm-som-2025
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Real-time congestion was 7% higher in the RTM than in the DAM. This disparity is reasonable because forecast error persists for both load and renewable generation."
  - id: e11
    source: imm-som-2025
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 1230 can partially explain this decline in constraint violations because it allows SCED to produce more expensive dispatch solutions to avoid violating these constraints."
  - id: e12
    source: imm-som-2024
    locator: "Executive Summary, Real-Time Congestion Costs"
    quote: "Congestion costs in the real-time market totaled $1.9 billion in 2024, down 17% from 2023 and the continuation of a trend that began in 2022."
  - id: e13
    source: imm-som-2025
    locator: "Chapter V.F, Load Zone Reconfiguration, Congestion Impact"
    quote: "In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin."
  - id: e14
    source: np-07
    locator: "Section 7.1, Congestion Revenue Rights, paragraph (1)"
    quote: "A Congestion Revenue Right (CRR) is a financial instrument that entitles the CRR Owner to be charged or to receive compensation for congestion rents that arise when the ERCOT Transmission Grid is congested in the Day-Ahead Market (DAM) or in Real-Time."
  - id: e15
    source: imm-som-2025
    locator: "page 15 (OCR), Executive Summary, Transmission Congestion"
    quote: "The annual cost of congestion in the day-ahead and real-time markets increased by 26% and 32%, respectively in 2025, reversing the previous 3-year trend of declining annual congestion costs. The main driver of this increase were: e The increase in natural gas prices, the fuel for the resources most frequently used to manage congestion in ERCOT; e Higher congestion in the North zone, where ERCOT used a significant amount of RUC commitments to manage congestion; e Higher congestion in the West Zone, where transmission projects have not kept pace with the large increase in renewables in the Panhandle and growing demand in the Permian Basin."
  - id: e16
    source: imm-som-2025
    locator: "page 90 (OCR), Figure 42, CRR funding table"
    quote: "2021 2022 2023 2024 2025 $700 $ Millions © Day-Ahead Congestion Rent $1,402 $2,365 $2,069 $1,923 $2,477"
  - id: e17
    source: imm-som-2025
    locator: "page 94 (OCR), Chapter V.F.2, Congestion Impact"
    quote: "Congestion costs within the West increased by 27% between 2024 and 2025."
  - id: e18
    source: imm-som-2021
    locator: "page 20 (OCR), Executive Summary"
    quote: "The congestion costs in ERCOT’s real-time market in 2021 were $2.1 billion, up 46% from 2020. This increase is largely attributable to high levels of congestion during Winter Storm Uri which accounted for almost one third of all of the congestion costs in 2021."
  - id: e19
    source: imm-som-2022
    locator: "page 18 (OCR), Executive Summary"
    quote: "The congestion costs in ERCOT’s real-time market in 2022 were $2.8 billion, up 37% from 2021. High natural gas prices, outages of generators in load pockets, and frequently binding generic transmission constraints (GTCs) contributed to the increase."
  - id: e20
    source: imm-som-2023
    locator: "page 18 (OCR), Executive Summary"
    quote: "The congestion costs in ERCOT’s real-time market in 2023 were $2.4 billion, down 15% from 2022. This reduction is largely attributable to lower natural gas prices in 2023."
  - id: e21
    source: imm-som-2024
    locator: "page 10 (OCR), Executive Summary"
    quote: "Congestion cost from Generic Transmission Constraints (GTCs) increased roughly 10% from 2023 to 2024 but was still significantly lower than in 2022."
  - id: e22
    source: imm-som-2025
    locator: "page 84 (OCR), Chapter V.D.1, Violated Constraints"
    quote: "The 2025 shadow price caps were: e $5,251 per MW for base-case (non-contingency) constraints or voltage violations, e $4,500 per MW for 345 kV constraints, e $3,500 per MW for 138 kV constraints, and e $2,800 per MW for 69 kV thermal violations. e ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e23
    source: imm-som-2025
    locator: "page 15 (OCR), Executive Summary, RUC"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e24
    source: imm-som-2025
    locator: "page 85 (OCR), Chapter V.D.2, Congestion Management by ESRs"
    quote: "ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0."
  - id: e25
    source: imm-som-2025
    locator: "Chapter V.B.1, Background on Transmission Congestion (OCR)"
    quote: "In ERCOT’s design, LMPs are calculated at individual generation and load nodes, but load is settled at the load-weighted average price of its load zone. Zonal settlement smooths short-term volatility and facilitates hedging, but it also means some congestion costs are averaged across customers."
  - id: e26
    source: ercot-constraints-needs-2025
    locator: "Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4)"
    quote: "Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M"
  - id: e27
    source: ercot-constraints-needs-2025
    locator: "Recent Constraints, footnote"
    quote: "*Congestion rent indicates areas of the system where economic transmission projects may be beneficial. It is not an indication of whether a project to reduce specific congestion would or would not meet the ERCOT economic planning criteria."
  - id: e28
    source: ercot-constraints-needs-2025
    locator: "Projected Constraints, slide 6 note"
    quote: "Top 10 projected constraints on the ERCOT System for 2027 and 2030 Base Cases Based on economic analysis conducted for the 2025 RTP"
  - id: e29
    source: imm-som-2025
    locator: "page 92 (OCR) / Figure 45: balancing account"
    quote: "In 2025, the total day-ahead surplus was approximately $293 million, up 22.4% from 2024. Congestion rent from the day-ahead market was sufficient to fully fund CRRs in every month of the year. As a result, the balancing account remained at its $10 million cap, and ERCOT returned all surplus congestion rent above that threshold to LSEs."
  - id: e30
    source: imm-som-2025
    locator: "page 92 (OCR), Figure 43 table, CRR Payments row"
    quote: "CRR Payments $1,289 $2,067 $1,809 $1,684 $2,185"
  - id: e31
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint."
---

## Definition

Transmission congestion arises when network power flows are restricted by limits on transmission facilities such as lines and transformers. When flow over a facility reaches its limit, the market shifts generation to higher-cost units to alter flows and serve load without exceeding the limit, so congestion keeps the lowest-cost generators from serving load. [e1]

## How it works

Congestion shows up in prices: differences in the cost of delivering electricity to different locations are reflected in different energy prices at each node. [e2] The IMM adds that in ERCOT LMPs are calculated at individual generation and load nodes but load is settled at the load-weighted average price of its load zone, so some congestion costs are averaged across customers. [e25] A constraint's marginal economic cost is reflected in its shadow price, which is defined as the rate at which system costs would fall or rise with a slight change in the amount of the commodity made available. [e4][e6] The IMM calculates day-ahead congestion values as power flow over each constraint times that constraint's shadow price. [e6] How much a given injection loads a constraint is its shift factor: the flow on a transmission element from a unit injection at a bus to a fixed reference bus. [e5]

SCED caps the price of congestion: the cost it calculates to resolve an additional MW on a network constraint is limited to that constraint's maximum shadow price. [e7] For 2025 the IMM lists caps of $5,251 per MW for base-case or voltage constraints, $4,500 for 345 kV, $3,500 for 138 kV and $2,800 for 69 kV thermal violations, with GTCs treated as base-case stability constraints at the $5,251 cap. [e22] Some constraints are generic transmission constraints (GTCs), which group transmission elements to limit flow between geographic areas to manage stability, voltage and other limits that cannot be modeled directly. [e8]

Congestion rent is the difference between what consumers pay and what generators receive, based on locational price differences. It accrues to CRR holders. [e3] A CRR entitles its owner to be charged or paid congestion rent that arises when the grid is congested in the DAM or in real time. [e14] In 2025 the IMM reports day-ahead congestion rent of $2,477 million against CRR payments of $2,185 million, and a day-ahead surplus of about $293 million. [e16][e29]

## ERCOT context

**Trend.** The IMM reports real-time congestion cost of $2.1 billion in 2021 (almost one third of it during Winter Storm Uri), $2.8 billion in 2022, $2.4 billion in 2023 and $1.9 billion in 2024. [e18][e19][e20][e12] It attributes the 2022 rise partly to high natural gas prices, generator outages in load pockets and frequently binding GTCs, and the 2023 fall largely to lower natural gas prices. [e19][e20] In 2025 the IMM says day-ahead and real-time congestion costs rose 26% and 32%, citing higher natural gas prices, North-zone RUC commitments and West-zone transmission lagging Panhandle renewables and Permian demand; the IMM's chapter summary names the North zone and West Zone as the main drivers of the day-ahead increase. [e15][e9] The 26% (day-ahead) and 32% (real-time) are year-over-year changes; the "7% higher" figure compares real-time with day-ahead within 2025, so they do not conflict. [e15][e10]

**Where.** Only about 9% of 2025 congestion costs were interzonal, down from 11% in 2024, and the West Zone is the largest contributor to intrazonal cost; congestion within the West rose 27% from 2024 to 2025. [e13][e17] GTC congestion cost rose about 10% from 2023 to 2024 but stayed well below 2022. [e21] ERCOT's December 2025 report lists the top constraints by real-time congestion rent for Oct 2024 to Sep 2025, headed by Koch Tap - Vealmoor 138kV at $211M, and states the figure shows where economic projects may be beneficial rather than whether one would pass planning criteria. [e26][e27] ERCOT also publishes top projected constraints for 2027 and 2030 base cases from the 2025 RTP economic analysis. [e28]

**Management.** Violated-constraint hours fell to 64 in 2025, partly because NPRR 1230 lets SCED use more expensive dispatch to avoid violations. [e11] RUC was used heavily for congestion: 5,129 resource-hours of RUC instructions in 2025, about 77% for congestion. [e23] The IMM says ESRs can charge at negative prices to resolve congestion where adding load helps, or discharge where adding supply helps. [e24]

## Key facts

- Real-time congestion cost: $2.1B (2021), $2.8B (2022), $2.4B (2023), $1.9B (2024), per IMM annual reports. [e18][e19][e20][e12]
- 2025: day-ahead congestion cost up 26%, real-time up 32% year over year (IMM). [e15]
- Real-time congestion was 7% higher than day-ahead in 2025. [e10]
- Day-ahead congestion rent $2,477 million in 2025 (IMM OCR table). [e16]
- Violated constraint hours in 2025 were 64, the lowest annual total ever. [e11]
- About 9% of 2025 congestion costs were interzonal, down from 11% in 2024. [e13]
- SCED limits the cost it will pay to resolve an additional MW of congestion to the constraint's maximum shadow price. [e7]

## Say it like this

Congestion is what happens when a line or transformer hits its limit and cheaper power cannot reach all load, so prices split by location. In ERCOT in 2025 about 9% of congestion cost was interzonal, with the rest inside load zones, with the West and the Permian the pressure points. [e1][e13][e15]

## Common confusion

Congestion cost is not the same as congestion rent: the first is a measure of the value of constraints, and the second is the difference between what consumers pay and generators receive, to which CRR holders have the financial right. [e6][e3] A shadow price is also not a price paid by an individual customer; it is a marginal value that feeds locational prices. [e4][e2] Binding and violated are different: the IMM treats violated constraints as a separate, shrinking count, and SCED's shadow price cap limits what it will pay to relieve a constraint. [e7][e11] The 26% and 32% increases are year-on-year; the 7% is real-time versus day-ahead. [e15][e10]

## Questions

### Why do prices differ across ERCOT nodes?

When flows reach a transmission limit, the market has to dispatch higher-cost units to keep within the limit, and the difference in delivery cost across locations appears as different nodal energy prices. [e1][e2]

### What is a shadow price and how is congestion valued?

A shadow price is the marginal value of a commodity, such as one more MW of relief on a constraint. [e4] The IMM values day-ahead congestion as flow over each constraint times its shadow price. [e6]

### What drove congestion in 2025?

The IMM cites higher natural gas prices, North-zone RUC commitments, and West-zone transmission lagging Panhandle renewables and Permian demand; day-ahead congestion rose 26% and real-time 32%. [e15]

### Why does real-time congestion exceed day-ahead?

In 2025 real-time congestion was about 7% higher. The IMM says that is reasonable because forecast error persists for load and renewable generation. [e10]

### Why does it matter that most congestion is intrazonal?

Load is settled at its zone's load-weighted average price, so congestion inside a zone is averaged across customers rather than shown in zonal prices; the IMM says only about 9% of 2025 congestion cost was interzonal. [e25][e13]

### What if natural gas prices fall sharply?

The IMM linked the 2023 decline in congestion cost largely to lower gas prices and the 2025 rise partly to higher gas prices, so a gas price drop would be expected to lower the dollar cost of a given pattern of congestion. This is the IMM's attribution, not a modeled forecast. [e20][e15]

### Why can a constraint be violated even though SCED has a shadow price?

Because SCED's cost to resolve an additional MW is limited to the constraint's maximum shadow price; if relief costs more than that, the constraint is left violated. [e7][e22]

## Scenarios

### A West-zone generator is stuck behind a constraint. What do prices and CRRs do?

- Congestion shows up as different energy prices at the nodes on either side of the constraint. [e2]
- CRR owners are charged or compensated for the congestion rent that arises. [e3][e14]
- The West zone had the largest intrazonal congestion cost in 2025, so much of its congestion cost sits inside the zone. [e13]

## Open items

- Resolved 2026-11-21: the 26% / 32% / 7% figures are different comparisons (year-over-year day-ahead and real-time, and real-time versus day-ahead within 2025); no 2025 dollar totals for real-time congestion were found in a quotable form in the OCR copy.
- No saved source gave a clean IMM list of the most frequently binding constraints by year; the ERCOT list covers Oct 2024 to Sep 2025 by congestion rent only.
- How shadow prices and shift factors combine into the congestion component of an LMP was not quoted: the formula is in protocol formula tables that did not extract as prose.
- The 2027 and 2030 projected congestion rent amounts by constraint are interleaved in the extracted ERCOT report text and were not quoted.
