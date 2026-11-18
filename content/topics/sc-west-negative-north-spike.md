---
id: sc-west-negative-north-spike
name: "Scenario: West Negative While North Spikes"
aliases: [West negative North spike, West-North spread, Panhandle negative prices, locational price divergence]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-18
links:
  - to: congestion
    type: example-of
    note: A West-North split is congestion showing up as different prices at different nodes. [e2]
  - to: lmp
    type: used-in
    note: System Lambda is the energy component of the LMP at each Settlement Point. [e3]
  - to: shift-factor
    type: used-in
    note: A shift factor measures the flow on a transmission element due to a unit injection at a bus. [e4]
  - to: hb-west
    type: related
    note: The West zone holds both the export-constrained Panhandle and the import-constrained Permian Basin. [e5]
  - to: hb-north
    type: contrasts-with
    note: The North zone was the other main driver of higher day-ahead congestion in 2025. [e13]
  - to: negative-prices
    type: related
    note: The West zone had the most negative-price intervals of any load zone in 2025. [e6]
  - to: gtc
    type: related
    note: GTCs limit flows between regions and matter most in renewable-heavy areas. [e10][e11]
  - to: shadow-price
    type: measures
    note: The shadow price of a constraint is the marginal cost of redirecting energy around a binding constraint. [e12]
  - to: load-zone
    type: related
    note: Loads are billed at the load zone price, a load-weighted average of nodal prices within the zone. [e15]
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
    source: np-02
    locator: "Section 2.1, definition of System Lambda"
    quote: "The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Shift Factor"
    quote: "A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus."
  - id: e5
    source: imm-som-2025
    locator: "Chapter I.C, Zonal Energy Prices"
    quote: "The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained."
  - id: e6
    source: imm-som-2025
    locator: "Chapter I.C, Zonal Energy Prices"
    quote: "This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone."
  - id: e7
    source: imm-som-2025
    locator: "Executive Summary, Market Operations, bullets on offers at or below $0"
    quote: "35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits."
  - id: e8
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e9
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments."
  - id: e10
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Constraint (GTC)"
    quote: "A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT’s powerflow and contingency analysis applications."
  - id: e11
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Generic Transmission Constraints"
    quote: "GTCs manage grid stability across geographic regions rather than enforce thermal transmission limits for specific transmission paths. They are especially relevant in areas with significant renewable generation, which are often far from load centers and can contribute to system stability concerns."
  - id: e12
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit."
  - id: e13
    source: imm-som-2025
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Day-ahead congestion in ERCOT increased 26% in 2025, ending a trend over the previous 3 years of declining annual congestion costs. The main drivers were the North zone, where ERCOT used significant RUC commitments to manage congestion, and the West Zone, where transmission projects have not kept pace with large increases in renewables in the panhandle and demand in the Permian Basin."
  - id: e14
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, 2. Congestion Management by ESRs"
    quote: "ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0."
  - id: e15
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e16
    source: imm-som-2025
    locator: "Executive Summary, Real-Time Market Outcomes bullets"
    quote: "The West Zone continued to have the highest average energy price in 2025, excluding adders, at $41.59 per MWh, compared to the ERCOT average of $36.94 per MWh. This high price reflects import constraints in the Permian Basin and export constraints in the Panhandle."
  - id: e17
    source: ercot-summer-2026-review
    locator: "Slide: Congestion Rent fell from summer 2025 to summer 2026, Key Takeaway"
    quote: "Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025."
  - id: e18
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 3. Prices by Time of Day"
    quote: "This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up."
---

## Definition

This scenario is about prices splitting by location when the grid cannot move cheap power to where it is needed: when congestion occurs, the different cost of delivering power to each location shows up as different energy prices at each node. [e2]

## How it works

Congestion starts with a physical limit. When flow on a line or transformer reaches its limit, the market dispatches higher-cost units to change the flows, so the cheapest generators cannot serve all the load. [e1]

Every LMP has the same energy part. System Lambda is the cost of one more MWh at the reference bus and is the energy component of the LMP at every Settlement Point. [e3] A shift factor measures the flow on a transmission element from a unit injection at a bus. [e4] The shadow price of the constraint is the marginal cost of routing energy around it. [e12]

The West is a split zone. The Panhandle has a lot of wind and solar but cannot export all of it, while the Permian Basin has fast-growing demand and cannot import enough. [e5] That is why the West zone had both the most negative-price intervals and the most price spikes of any load zone in 2025. [e6] Generic Transmission Constraints, which limit flows between areas for stability and voltage reasons, matter most in renewable-heavy areas far from load. [e10][e11]

Prices go negative because many renewables are paid to produce even when prices are below zero. In 2025, 35% of real-time capacity was offered at or below $0, mainly wind and solar, many of which receive federal production tax credits. [e7] Real-time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]

## Key facts

- In 2025, 35% of real-time generation capacity was offered at or below $0, up from 32% in 2024. [e7]
- The West zone had the most negative-price intervals and the most price spikes of any load zone in 2025. [e6]
- West zone average energy price in 2025 was $41.59/MWh against an ERCOT average of $36.94/MWh, reflecting Permian import limits and Panhandle export limits. [e16]
- Day-ahead congestion rose 26% in 2025, driven by the North zone (with heavy RUC use for congestion) and the West zone. [e13]
- Real-time congestion rent in summer 2026 was 10% lower than in summer 2025, partly because of RTC. [e17]
- Real-time Settlement Point Prices cannot go below -$251/MWh. [e8]

## Scenarios

### At 8 p.m. a Panhandle wind node and HB_WEST are below zero while HB_NORTH is at $900/MWh. How can one grid have both?

- Start from the LMP build-up. System Lambda is the energy component of the LMP at each Settlement Point, and when congestion occurs the differing cost of delivering power shows up as different prices at each node. [e3][e2] The shadow price of the binding constraint is the marginal cost of redirecting flow around it. [e12]
- The binding limit is likely on the export path out of the Panhandle. Too much wind and solar there cannot reach load, so local prices fall and output gets curtailed. [e5][e9]
- Evening timing: at the net load peak solar has ramped down while wind is beginning to ramp up. [e18] (Reasoning) That could put more Panhandle output against an export limit.
- Prices go below zero because a large share of renewable capacity offers at or below $0, many of those units being backed by production tax credits. The floor is -$251/MWh. [e7][e8]
- When congestion blocks lower-cost generators from serving load, the market shifts generation to higher-cost units. [e1] The IMM named the North zone, where ERCOT used significant RUC commitments to manage congestion, as a main driver of higher day-ahead congestion in 2025. [e13]
- A GTC may be the binding limit rather than one thermal line, since GTCs are used for stability limits between areas with a lot of renewables. [e10][e11]
- (Reasoning) Check the posted binding constraints and shadow prices first, then confirm which side of the constraint each node sits on before calling a direction for the spread.
- Batteries behind the constraint can help: when added load relieves congestion, ESRs often charge at prices below $0. [e14]
- Suppose (illustrative): System Lambda is $600/MWh. A North node with a congestion component of +$300 settles at $900, while a Panhandle node with -$620 settles at -$20. Same energy price, opposite congestion signs.

## Questions

### Why does the West zone have both the most negative prices and the most price spikes?

It contains two different load pockets: the export-limited Panhandle, rich in renewables, and the import-limited Permian Basin with fast-growing demand. [e5][e6]

### What does a West load customer pay in this situation?

Loads pay the load zone price, which is a load-weighted average of the zone's nodal prices, so a Panhandle-negative and Permian-high split gets averaged. [e15]

### How did RTC affect congestion?

ERCOT reported that real-time congestion rent in summer 2026 was 10% below summer 2025 and said RTC played a role. [e17]

### Who benefits from the negative West prices?

Batteries, which can act as both supply and demand and can often charge at prices below $0 when added load at a location resolves congestion. [e14] (Guidance) Generators settle at their own nodal prices, so those at negative-priced West nodes receive the lower price. [e15]

## Say it like this

(Guidance) The energy price is the same across Texas; what differs is congestion. When the Panhandle cannot export its wind, prices there can go negative while North pays for expensive local units, and the shadow price on the binding constraint tells you how wide that gap is.

## Common confusion

(Guidance) A negative West price does not by itself mean the whole system is oversupplied; the IMM describes the Panhandle as export-constrained. [e5] Also, HB_WEST and a Panhandle node are not the same thing: the zone also includes the Permian, where prices can be high. [e5]

## Open items

- The sources do not name the specific constraints (for example, West-to-North interfaces) that bound most often in 2025 or 2026; only zone-level drivers are given.
- Deeper pass: the exact LMP formula (System Lambda minus shift-factor-weighted shadow prices) is in protocol formula tables that did not quote cleanly; only the definitions are cited here.
- No source gives the share of negative West prices that occur in evening versus midday hours.
- Deeper pass: Permian 765 kV and other transmission projects that the IMM expects to narrow West congestion.
