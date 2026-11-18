---
id: congestion
name: Transmission Congestion
aliases: [congestion, transmission congestion, congestion rent, constraint, binding constraint, intrazonal congestion]
kind: concept
domain: congestion
level: 1
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-18
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
    note: A GTC groups transmission elements to limit flow between geographic areas, and ERCOT treats it as a stability constraint. [e8]
  - to: crr
    type: hedges
    note: CRRs pay holders the congestion rent that arises from locational price differences. [e3][e14]
  - to: lmp
    type: causes
    note: Congestion shows up as differing energy prices at each node. [e2]
  - to: basis-risk
    type: related
    note: Differences between day-ahead and real-time congestion create basis between positions. [e10]
  - to: load-zone
    type: related
    note: The IMM says growing congestion inside load zones is averaged across load rather than priced. [e13]
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
---

## Definition

Transmission congestion arises when network power flows are restricted by limits on transmission facilities such as lines and transformers. When flow over a facility reaches its limit, the market shifts generation to higher-cost units to alter flows and serve load without exceeding the limit, so congestion keeps the lowest-cost generators from serving load. [e1]

## How it works

Congestion shows up in prices: differences in the cost of delivering electricity to different locations are reflected in different energy prices at each node. [e2] The value of a constraint is its shadow price, the rate at which system costs would fall or rise with a slight change in the amount of the commodity made available. [e4] The IMM calculates day-ahead congestion values as power flow over each constraint times that constraint's shadow price. [e6] How much a given injection loads a constraint is its shift factor: the flow on a transmission element from a unit injection at a bus to a fixed reference bus. [e5]

SCED caps the price of congestion: the cost it calculates to resolve an additional MW on a network constraint is limited to that constraint's maximum shadow price. [e7] Some constraints are generic transmission constraints (GTCs), which group transmission elements to limit flow between geographic areas to manage stability, voltage and other limits that cannot be modeled directly. [e8]

Congestion rent is the difference between what consumers pay and what generators receive, based on locational price differences. It accrues to CRR holders. [e3] A CRR entitles its owner to be charged or paid congestion rent that arises when the grid is congested in the DAM or in real time. [e14]

## ERCOT context

The IMM reports real-time congestion cost of $1.9 billion in 2024, down 17% from 2023. [e12] In 2025 day-ahead congestion rose 26%, ending a three-year decline; the main drivers were the North zone, where RUC commitments were used to manage congestion, and the West zone, where transmission has lagged renewables in the Panhandle and demand in the Permian Basin. [e9] Real-time congestion was 7% above day-ahead, which the IMM attributes to forecast error for load and renewables. [e10]

Violated-constraint hours fell to 64 in 2025, the lowest annual total ever, partly because NPRR 1230 lets SCED use more expensive dispatch to avoid violations. [e11] The IMM also notes that only about 9% of 2025 congestion cost was interzonal, so most of it occurs within load zones; the West zone is the largest contributor to the intrazonal share. [e13]

## Key facts

- Real-time congestion cost was $1.9 billion in 2024, down 17% from 2023. [e12]
- Day-ahead congestion increased 26% in 2025. [e9]
- Real-time congestion was 7% higher than day-ahead in 2025. [e10]
- Violated constraint hours in 2025 were 64, the lowest annual total ever. [e11]
- About 9% of 2025 congestion costs were interzonal, down from 11% in 2024. [e13]
- SCED limits the cost it will pay to resolve an additional MW of congestion to the constraint's maximum shadow price. [e7]

## Say it like this

Congestion is what happens when a line or transformer hits its limit and cheaper power cannot reach all load, so prices split by location. In ERCOT most of it now sits inside load zones, with the West and the Permian the pressure points. [e1][e13][e9]

## Common confusion

Congestion cost is not the same as congestion rent: the first is a measure of the value of constraints, and the second is the surplus that funds CRR payments. [e6][e3] A shadow price is also not a price paid by an individual customer; it is a marginal value that feeds locational prices. [e4][e2] Binding and violated are different: the IMM treats violated constraints as a separate, shrinking count, and SCED's shadow price cap limits what it will pay to relieve a constraint. [e7][e11]

## Questions

### Why do prices differ across ERCOT nodes?

When flows reach a transmission limit, the market has to dispatch higher-cost units to keep within the limit, and the difference in delivery cost across locations appears as different nodal energy prices. [e1][e2]

### What is a shadow price and how is congestion valued?

A shadow price is the marginal value of a commodity, such as one more MW of relief on a constraint. [e4] The IMM values day-ahead congestion as flow over each constraint times its shadow price. [e6]

### What drove congestion in 2025?

Day-ahead congestion rose 26%, with North-zone RUC commitments and West-zone transmission lagging renewables and Permian demand cited by the IMM as the main drivers. [e9]

### Why does real-time congestion exceed day-ahead?

In 2025 real-time congestion was about 7% higher. The IMM says that is reasonable because forecast error persists for load and renewable generation. [e10]

## Scenarios

### A West-zone generator is stuck behind a constraint. What do prices and CRRs do?

- The constraint's shadow price drives nodal prices on either side apart. [e2][e6]
- CRR holders on a path across the constraint are paid congestion rent. [e3][e14]
- The West zone had the largest intrazonal congestion cost in 2025, so the settlement point price may not capture local conditions. [e13]

## Open items

- Dollar congestion totals for 2025 appear only in garbled figures in the IMM 2025 report; the percentage changes (26% day-ahead, 32% real-time) were readable, but no 2025 dollar amount is stated here. The 32% real-time figure appears in the executive summary, though the summary section reports real-time as 7% above day-ahead.
- No saved source gave a clean list of the most frequently binding constraints for 2025 or 2024, so none are named.
- The 2025 shadow price cap values by voltage class appear in the IMM report but are in a bulleted list that was not quoted.
- How shadow prices and shift factors combine into the congestion component of an LMP was not quoted from the protocols.
