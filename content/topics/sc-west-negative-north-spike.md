---
id: sc-west-negative-north-spike
name: "Scenario: West Negative While North Spikes"
aliases: [West negative North spike, West-North spread, Panhandle negative prices, locational price divergence]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, congestion]
as_of: 2026-11-21
depth: deep
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
  - to: permian-transmission
    type: affects
    note: The PUCT approved three 765-kV Permian import paths on April 24, 2025, and ERCOT lists them for 2031; the IMM expects the West-Houston price gap to narrow as projects conclude. [e33][e34][e32]
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
  - id: "e19"
    source: "np-22p-2025-12"
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \\lambda - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line."
  - id: "e20"
    source: "np-22p-2025-12"
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive."
  - id: "e21"
    source: "np-22p-2025-12"
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "The congestion component of Electrical Bus LMP is: $$\\Delta LMP_{EB}^{cong} = - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion."
  - id: "e22"
    source: "np-22p-2025-12"
    locator: "Attachment P, Section 3.5.1 (supporting analysis)"
    quote: "The LMP at an individual node, hub or load zone can exceed the RTSWCAP in some circumstances, even ignoring the impacts of co-optimization of energy and Ancillary Services. This is most likely to occur when there are one or more irresolvable constraints on the system and when overall dispatchable supply on the system is tight."
  - id: "e23"
    source: "imm-som-2025"
    locator: "Transmission Congestion and CRRs, Violated Constraints, 2025 shadow price caps"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: "e24"
    source: "ercot-constraints-needs-2025"
    locator: "Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4)"
    quote: "Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M"
  - id: "e25"
    source: "np-03"
    locator: "Section 3.5.2.4, paragraph (2)"
    quote: "The West 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the DAM in the Day-Ahead and is the simple average of the time weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub."
  - id: "e26"
    source: "np-03"
    locator: "Section 3.5.2.6, paragraph (1) (ERCOT Hub Average 345 kV Hub)"
    quote: "The Panhandle 345 kV Hub is not included in either the Day-Ahead or Real-Time ERCOT Hub Average 345 kV Hub price."
  - id: "e27"
    source: "np-06"
    locator: "Section 6.6.1.1, formula for a Resource Node"
    quote: "RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))"
  - id: "e28"
    source: "imm-som-2025"
    locator: "page 39 (OCR), Chapter I.D.1, Production and Curtailment"
    quote: "Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years."
  - id: "e29"
    source: "imm-som-2024"
    locator: "page 43 (OCR), Chapter II, Zonal Energy Prices (2024 report)"
    quote: "The West had the highest number of prices below $0, largely due to high wind and solar output that could not be delivered because of transmission congestion, both within the zone and on export paths to other regions."
  - id: "e30"
    source: "imm-som-2025"
    locator: "2025 State of the Market Report, Transmission Congestion, intrazonal congestion (Figure 45)"
    quote: "The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. Congestion costs within the West increased by 27% between 2024 and 2025."
  - id: "e31"
    source: "imm-som-2025"
    locator: "2025 State of the Market Report, Executive Summary, net revenue bullets"
    quote: "A combustion turbine in the Houston zone could expect to earn roughly $59 per kW-year in net revenue, while the same CT could earn up to $177 per kW-year in the West zone. The price gap is driven by the import-constrained Permian Basin where congestion costs drive up prices in the West zone."
  - id: "e32"
    source: "imm-som-2025"
    locator: "2025 State of the Market Report, Resource Adequacy, net revenue by zone (Figure 55)"
    quote: "The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region. As work on these projects concludes, we expect the gap between the two hubs to narrow again."
  - id: "e33"
    source: "ercot-constraints-needs-2025"
    locator: "2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025), Key Takeaways"
    quote: "On April 24, 2025, the Public Utility Commission of Texas (PUCT) approved the three 765-kV import paths recommended in the Permian Basin Reliability Plan, introducing the new 765kV voltage class in the ERCOT Region."
  - id: "e34"
    source: "ercot-constraints-needs-2025"
    locator: "2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025), Planned Improvements (top 10 list; year shown beside each project)"
    quote: "Delaware Basin Stage 5 Project 2029 10 Permian Basin 765-kV Import Paths 2031"
  - id: "e35"
    source: "ercot-permian-geren-response"
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 5, quoting Market Notice of Feb. 23, 2026"
    quote: "ERCOT has identified an emerging reliability risk in Far West Texas of local load shed potentially being needed in the area during low wind conditions at night, especially during transmission and thermal resource outages."
  - id: "e36"
    source: "ercot-permian-geren-response"
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 5"
    quote: "The primary time of concern will be high-load, low-wind nights, when the entire Far West region would depend on the limited thermal generation in the area together with the limited import capability of the existing transmission infrastructure."
  - id: "e37"
    source: "imm-som-2025"
    locator: "Chapter V.A, Summary of Transmission Congestion Results in 2025"
    quote: "Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 1230 can partially explain this decline in constraint violations because it allows SCED to produce more expensive dispatch solutions to avoid violating these constraints."
  - id: "e38"
    source: "imm-som-2025"
    locator: "Chapter V.C, Day-Ahead Congestion"
    quote: "It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost."
  - id: "e39"
    source: "np-22p-2025-12"
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5.1, supporting analysis"
    quote: "For example, with a shift factor difference of the marginal units of just 2%, the maximum offer price difference of the marginal units that will be deployed to resolve the constraint is $56, $70, $90 and $105.02/MWh for constraint shadow price cap values of $2,800, $3,500, $4,500 and $5,251/MW, respectively."
  - id: e40
    source: ercot-constraints-needs-2025
    locator: "Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4)"
    quote: "1 Koch Tap - Vealmoor 138kV $211M Top 10 constraints on the ERCOT System"
  - id: "e41"
    source: "np-22p-2025-12"
    locator: "Attachment P (Dec. 5, 2025 version), Section 2, Background Discussion"
    quote: "If a constraint is not binding, meaning the constraint has excess capability under the given system conditions, the Shadow Price of the constraint is $0.00/MWh. On the other hand, if the constraint is binding, meaning it is limiting because the system conditions are such that the constraint limit is exactly met by the SCED selected dispatch pattern, the constraint Shadow Price is a non-zero $/MW value and when the maximal Shadow Price (i.e. the Shadow Price cap) is reached the constraint will be violated without further increases in the constraint Shadow Price."
---

## Definition

This scenario is about prices splitting by location when the grid cannot move cheap power to where it is needed: when congestion occurs, the different cost of delivering power to each location shows up as different energy prices at each node. [e2]

## How it works

Congestion starts with a physical limit. When flow on a line or transformer reaches its limit, the market dispatches higher-cost units to change the flows, so the cheapest generators cannot serve all the load. [e1]

Every LMP has the same energy part. System Lambda is the cost of one more MWh at the reference bus and is the energy component of the LMP at every Settlement Point. [e3] A shift factor measures the flow on a transmission element from a unit injection at a bus. [e4] The shadow price of the constraint is the marginal cost of routing energy around it. [e12] Attachment P puts these together: a bus LMP is System Lambda minus the sum over congested lines of the bus's shift factor times the line's shadow price, and that congestion component can be positive or negative depending on the sign of the shift factors. [e19][e21] Shadow prices on congested lines are positive, and buses on one side of a line have negative shift factors while buses on the other side have positive ones. [e20]

The West is a split zone. The Panhandle has a lot of wind and solar but cannot export all of it, while the Permian Basin has fast-growing demand and cannot import enough. [e5] That is why the West zone had both the most negative-price intervals and the most price spikes of any load zone in 2025. [e6] Generic Transmission Constraints, which limit flows between areas for stability and voltage reasons, matter most in renewable-heavy areas far from load; ERCOT treats them as base-case stability constraints with a $5,251 per MW shadow price cap. [e10][e11][e23] Among ERCOT's top constraints by real-time congestion rent from October 2024 to September 2025, the West Texas Export Interface ranked fourth at $127 million, behind Koch Tap - Vealmoor 138kV ($211 million), Hargrove - Twin Buttes 138kV and Odessa EHV Switch Yarbrough Sub 138kV. [e40][e24]

Prices go negative because many renewables are paid to produce even when prices are below zero. In 2025, 35% of real-time capacity was offered at or below $0, mainly wind and solar, many of which receive federal production tax credits. [e7] For 2024 the IMM said the West's below-zero prices came largely from wind and solar output that could not be delivered because of congestion within the zone and on export paths. [e29] Real-time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]

Hubs average the split. The West 345 kV Hub price in real time is the simple average of the time-weighted Hub Bus prices, and the Panhandle 345 kV Hub is a separate hub that is not included in the ERCOT Hub Average 345 kV Hub price. [e25][e26]

## Formula

- Bus LMP = System Lambda - sum over congested lines of (shift factor of the bus on that line x shadow price of the line). [e19]
- Congestion component = - sum of (shift factor x shadow price); its sign depends on which side of the constraint the bus sits. [e21][e20]
- Resource Node Settlement Point Price in real time: RTSPP = Max(-$251, weighted sum over SCED intervals of (LMP + Reliability Deployment Price Adder)), with RNWF the interval weighting. [e27]
- The IMM values day-ahead congestion as flow over each constraint times its shadow price. [e38]

## Key facts

- In 2025, 35% of real-time generation capacity was offered at or below $0, up from 32% in 2024. [e7]
- The West zone had the most negative-price intervals and the most price spikes of any load zone in 2025. [e6]
- West zone average energy price in 2025, excluding adders, was $41.59/MWh against an ERCOT average of $36.94/MWh, reflecting Permian import limits and Panhandle export limits. [e16]
- Day-ahead congestion rose 26% in 2025, driven by the North zone (with heavy RUC use for congestion) and the West zone; congestion costs within the West rose 27% from 2024 to 2025. [e13][e30]
- About 4.7% of wind generation was curtailed in 2025. [e28]
- 2025 shadow price cap for GTCs (treated as base-case stability constraints): $5,251 per MW. [e23]
- Violated constraint hours fell to 64 constraint-hours in 2025, the lowest ever, partly because of NPRR1230. [e37]
- Real-time congestion rent in summer 2026 was 10% lower than in summer 2025, partly because of RTC. [e17]
- Real-time Settlement Point Prices cannot go below -$251/MWh. [e8]
- The PUCT approved three 765-kV Permian import paths on April 24, 2025; ERCOT's planned improvements list shows the Permian Basin 765-kV Import Paths for 2031. [e33][e34]

## Scenarios

### At 8 p.m. a Panhandle wind node and HB_WEST are below zero while HB_NORTH is at $900/MWh. How can one grid have both?

- Start from the LMP build-up. System Lambda is the energy component of the LMP at each Settlement Point, and each bus adds its own congestion component: minus the sum of shift factor times shadow price over binding constraints. [e3][e19][e21] The shadow price of the binding constraint is the marginal cost of redirecting flow around it. [e12]
- The binding limit is likely on the export path out of the Panhandle. Too much wind and solar there cannot reach load, so local prices fall and output gets curtailed. [e5][e9] The West Texas Export Interface was among ERCOT's top-ranked constraints by congestion rent from October 2024 to September 2025. [e24]
- Evening timing: at the net load peak solar has ramped down while wind is beginning to ramp up. [e18] (Reasoning) That could put more Panhandle output against an export limit.
- Prices go below zero because a large share of renewable capacity offers at or below $0, many of those units being backed by production tax credits. The floor is -$251/MWh. [e7][e8]
- When congestion blocks lower-cost generators from serving load, the market shifts generation to higher-cost units. [e1] The IMM named the North zone, where ERCOT used significant RUC commitments to manage congestion, as a main driver of higher day-ahead congestion in 2025. [e13]
- A GTC may be the binding limit rather than one thermal line, since GTCs are used for stability limits between areas with a lot of renewables; its shadow price is capped at $5,251 per MW. [e10][e11][e23]
- Why HB_WEST can be negative too: it is a simple average of its Hub Bus prices, so it falls when enough of its buses sit on the export side; the Panhandle hub is a separate hub. [e25][e26]
- (Reasoning) Check the posted binding constraints and shadow prices first, then confirm which side of the constraint each node sits on before calling a direction for the spread.
- Batteries behind the constraint can help: when added load relieves congestion, ESRs often charge at prices below $0. [e14]
- Suppose (illustrative): System Lambda is $600/MWh and one constraint binds with a shadow price of $3,000 per MW. A North node with a shift factor of -0.10 gets +$300 and settles at $900; a Panhandle node with a shift factor of +0.2067 gets about -$620 and settles near -$20. Same energy price, opposite congestion signs.

### Variant: on a still, hot night the Far West spikes while the Panhandle is calm. What changed?

- The constraint flips to the import side: ERCOT has flagged a risk of local load shed in Far West Texas during low wind conditions at night, especially with transmission and thermal outages. [e35]
- ERCOT says the main time of concern is high-load, low-wind nights, when Far West depends on limited local thermal generation and the limited import capability of existing transmission. [e36]
- The price signal is visible in net revenue: the IMM estimates a combustion turbine could earn up to $177 per kW-year in the West zone in 2025 against about $59 in Houston, driven by the import-constrained Permian Basin. [e31]
- (Reasoning) A West position that profits from Panhandle negative prices can lose on the same day if the binding constraint moves to the Permian import side; the hub averages both.
- What should narrow it: the PUCT approved three 765-kV Permian import paths in April 2025, listed by ERCOT for 2031, and the IMM expects the price gap between the hubs to narrow as projects conclude. [e33][e34][e32]

## Questions

### Why does the West zone have both the most negative prices and the most price spikes?

It contains two different load pockets: the export-limited Panhandle, rich in renewables, and the import-limited Permian Basin with fast-growing demand. [e5][e6]

### What does a West load customer pay in this situation?

Loads pay the load zone price, which is a load-weighted average of the zone's nodal prices, so a Panhandle-negative and Permian-high split gets averaged. [e15]

### How did RTC affect congestion?

ERCOT reported that real-time congestion rent in summer 2026 was 10% below summer 2025 and said RTC played a role. [e17]

### Who benefits from the negative West prices?

Batteries, which can act as both supply and demand and can often charge at prices below $0 when added load at a location resolves congestion. [e14] (Guidance) Generators settle at their own nodal prices, so those at negative-priced West nodes receive the lower price. [e15]

### Why can a node price exceed the $2,000 real-time offer cap?

Because the congestion component adds to System Lambda. ERCOT's Attachment P says an LMP at a node, hub or load zone can exceed the RTSWCAP, most likely when one or more constraints are irresolvable and dispatchable supply is tight. [e22][e19]

### What if a constraint cannot be solved at the cap?

The cap sets the price: once the Shadow Price cap is reached, the constraint is violated without further increases in its Shadow Price. [e41] Attachment P shows how much that limits dispatch: with a 2% shift factor difference between marginal units, the most offer-price difference the market will pay to resolve the constraint is $105.02/MWh at a $5,251 cap. [e39] Violations fell to 64 constraint-hours in 2025, which the IMM partly ties to NPRR1230. [e37]

### Why does the sign of the shift factor matter for a trade?

The congestion component is minus shift factor times shadow price, and buses on opposite sides of a congested line have shift factors of opposite sign, so one side is lifted and the other pushed down by the same constraint. [e21][e20] (Reasoning) A West-to-North spread position pays off only if your source and sink sit on opposite sides of the binding constraint in the direction you expect.

### Will the West spread narrow?

The IMM expects the West-Houston hub gap to narrow as transmission work in the Permian concludes, and the three 765-kV import paths approved in April 2025 are listed by ERCOT for 2031. [e32][e33][e34] (Reasoning) The Panhandle export side is a separate problem from the Permian import paths.

## Say it like this

(Guidance) The energy component of the price is the same at every ERCOT Settlement Point; what differs is congestion. When the Panhandle cannot export its wind, prices there can go negative while North pays for expensive local units, and the shadow price on the binding constraint tells you how wide that gap is.

(Guidance) One line for the formula: "Each node is System Lambda minus shift factor times shadow price, so the same binding constraint pushes one side up and the other side down."

## Common confusion

(Guidance) A negative West price does not by itself mean the whole system is oversupplied; the IMM describes the Panhandle as export-constrained. [e5] Also, a West zone price and a Panhandle node price are not the same thing: the West zone also includes the Permian Basin, which the IMM describes as import-constrained. [e5]

(Guidance) HB_WEST is not the Panhandle hub: they are separate hubs, and the Panhandle hub is left out of the ERCOT Hub Average. [e25][e26]

## Open items

- Resolved 2026-11-21: the LMP formula (System Lambda minus shift-factor-weighted shadow prices) is now cited from Section 22 Attachment P (December 5, 2025 version). [e19]
- Partly resolved 2026-11-21: ERCOT's top-10 constraint list for October 2024 to September 2025 is cited; the sources do not say which of the 138 kV constraints sit in the Panhandle versus the Permian, and no 2026 ranking is saved.
- No source gives the share of negative West prices that occur in evening versus midday hours.
- Partly resolved 2026-11-21: Permian 765-kV import paths (approved April 24, 2025; listed for 2031) are cited; no saved source quantifies how much they will narrow the West spread, and no project specific to Panhandle export capacity was found.
