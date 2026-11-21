---
id: lmp
name: LMP (Locational Marginal Price)
aliases: [LMP, Locational Marginal Price, nodal price]
kind: metric
domain: pricing
level: 1
lenses: [analyst, trading, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: spp
    type: determines
    note: Settlement Point Prices are calculated from LMP data. [e12]
  - to: system-lambda
    type: composed-of
    note: System Lambda is the energy component of the LMP at each Settlement Point. [e2]
  - to: shadow-price
    type: composed-of
    note: The IMM says that when a violated constraint hits its shadow price cap, the shadow price set determines congestion prices at locations that affect it. [e11]
  - to: sced
    type: related
    note: SCED is the real-time process that produces Real-Time LMPs. [e4]
  - to: dam
    type: related
    note: The DAM process produces Day-Ahead LMPs. [e1]
  - to: congestion
    type: related
    note: The IMM says the shadow price set for a violated constraint (by the shadow price cap) determines congestion prices at locations that affect it. [e11]
  - to: resource-node
    type: related
    note: The day-ahead Settlement Point Price at a Resource Node is the LMP at that node. [e13]
  - to: shift-factor
    type: composed-of
    note: The Attachment P formula multiplies each Shadow Price by the bus Shift Factor to get the congestion component. [e14]
  - to: binding-constraint
    type: related
    note: Only constraints with positive Shadow Prices (congested lines) add a congestion term to the LMP. [e15]
  - to: load-zone
    type: related
    note: The Load Zone LMP is based on state-estimated Loads and the bus LMPs in the zone, and the IMM describes load as settled at the load-weighted average price of its load zone. [e22][e29]
  - to: trading-hub
    type: related
    note: The Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses. [e23]
  - to: negative-prices
    type: related
    note: Real-Time Settlement Point Prices have an administrative floor of -$251/MWh, and the SCED over-generation Power Balance Penalty Price is -$250/MWh. [e8][e19]
  - to: rtc-b
    type: related
    note: The IMM says RTC went live on December 5, 2025, and that before then ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e21]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Locational Marginal Price (LMP)"
    quote: "The offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of System Lambda"
    quote: "The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Shadow Price"
    quote: "A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available."
  - id: e4
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3, paragraph on the two-step methodology, item (b)"
    quote: "The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph on VOLL cap, item (d)"
    quote: >-
      Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL.
  - id: e7
    source: np-04
    locator: "Section 4.6.1.2, variable table for Load Zone DASPP"
    quote: "The DAM Shadow Price for the system power balance constraint for the hour."
  - id: e8
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e9
    source: np-02
    locator: "Section 2.1, definitions of Hub LMP and Load Zone LMP"
    quote: "The price calculated for a Load Zone for each SCED interval according to the formula in Section 6.6.1.4, Load Zone LMPs, using State Estimator Load data and LMPs at the Electrical Buses included in the Load Zone."
  - id: e10
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance"
    quote: "With RTC, the real-time market simultaneously procures energy and ancillary services."
  - id: e11
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, 1. Violated Constraints"
    quote: >-
      When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint.
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Settlement Point Price"
    quote: "A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations."
  - id: e13
    source: np-04
    locator: "Section 4.6.1.1"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e14
    source: np-22p-2025-12
    locator: "Attachment P (edition dated December 5, 2025), Section 3.1, Congestion LMP Component"
    quote: "The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \\lambda - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$"
  - id: e15
    source: np-22p-2025-12
    locator: "Attachment P, Section 3.1, definitions under the LMP formula"
    quote: "Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive."
  - id: e16
    source: np-22p-2025-12
    locator: "Attachment P, Section 3.1"
    quote: "The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion."
  - id: e17
    source: np-22p-2025-12
    locator: "Attachment P, Section 1 (Purpose)"
    quote: "The maximum Shadow Prices for the transmission network constraints and the power balance constraint directly determine the Locational Marginal Prices (LMPs) for the ERCOT Real-Time Market (RTM) in the cases of constraint violations."
  - id: e18
    source: np-22p-2025-12
    locator: "Attachment P, Section 3.5, Generic Transmission Constraint (GTC) Shadow Price Caps in SCED"
    quote: "The Generic Transmission Shadow Price Caps noted below will be used in SCED unless ERCOT determines that a constraint is irresolvable by SCED."
  - id: e24
    source: np-22p-2025-12
    locator: "Attachment P, Section 3.5, Generic Transmission Constraint (GTC) Shadow Price Caps in SCED"
    quote: "Base Case/Voltage Violation: $5,251/MW - N-1 Constraint Violation - Greater than 200 kV: $4,500/MW - 100 kV to 200 kV: $3,500/MW - Less than 100 kV: $2,800/MW"
  - id: e19
    source: np-22p-2025-12
    locator: "Attachment P, Section 4.1, The Power Balance Penalty"
    quote: "In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e20
    source: np-22p-2025-12
    locator: "Attachment P, Section 3.5.1 (supporting analysis)"
    quote: "The LMP at an individual node, hub or load zone can exceed the RTSWCAP in some circumstances, even ignoring the impacts of co-optimization of energy and Ancillary Services. This is most likely to occur when there are one or more irresolvable constraints on the system and when overall dispatchable supply on the system is tight."
  - id: e21
    source: imm-som-2025
    locator: "page 30 (OCR), Chapter II.D, Shortage and Reliability Pricing"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e22
    source: np-06
    locator: "Section 6.6.1.4, Load Zone LMPs, paragraph (1)"
    quote: "The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone."
  - id: e23
    source: np-06
    locator: "Section 6.6.1.5, Hub LMPs, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e25
    source: np-06
    locator: "Section 6.6.1.1, Real-Time Settlement Point Price for a Resource Node, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e26
    source: np-06
    locator: "Section 6.6.1, paragraph (1) and (a)-(b)(iii), de-energized Electrical Buses"
    quote: "ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order:"
  - id: e27
    source: np-06
    locator: "Section 6.6.1, paragraph (1)(b)(i)-(iii)"
    quote: "(i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda."
  - id: e28
    source: imm-som-2025
    locator: "page 81 (OCR), Chapter V.B.1, Locational Marginal Prices"
    quote: "LMPs represent the marginal cost of serving an incremental unit of load at a specific location, accounting for generation costs and the physical limits of the transmission network. When transmission constraints bind, the cost of delivering power differs across locations, causing prices to vary geographically."
  - id: e29
    source: imm-som-2025
    locator: "page 81 (OCR), Chapter V.B.1, Locational Marginal Prices"
    quote: "In ERCOT’s design, LMPs are calculated at individual generation and load nodes, but load is settled at the load-weighted average price of its load zone."
  - id: e30
    source: np-06
    locator: "Section 6.5.7.1.11, Transmission Network and Power Balance Constraint Management, paragraph (2)"
    quote: "ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint."
  - id: e31
    source: imm-som-2025
    locator: "page 80 (OCR), Chapter V.A, bullet on violated constraints"
    quote: "Violated transmission constraint hours continued to drop in 2025 to only 64 constraint-hours, the lowest annual total ever. NPRR 1230 can partially explain this decline in constraint violations because it allows SCED to produce more expensive dispatch solutions to avoid violating these constraints."

  - id: e32
    source: np-04
    locator: "Section 4.6.1.2, variable table for Load Zone DASPP, DALMP"
    quote: "The DAM LMP at Electrical Bus b for the hour."
---

## Definition

An LMP is the offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus. It is produced either by the Day-Ahead Market (DAM) process or by the SCED process. [e1]

## How it works

The LMP is built at the bus level. Its energy component is System Lambda, the Shadow Price of the power balance constraint, meaning the change in the objective function from relaxing that constraint by one MW. [e2] A Shadow Price in general measures the marginal value of a commodity, the rate at which system costs would fall or rise if slightly more or less of it were available. [e3] The protocol text says System Lambda is the energy component of LMP at each Settlement Point. [e2] SCED produces Shadow Prices and LMPs in the same step. [e5]

The congestion term. ERCOT's Attachment P (edition dated December 5, 2025) gives the bus LMP as System Lambda minus the sum, over transmission lines, of the bus Shift Factor times the line's Shadow Price. [e14] Shadow Prices on congested lines are positive and zero otherwise, and Shift Factors are negative on one side of a line and positive on the other, so the congestion component can be positive or negative at a bus. [e15] That congestion component is a price incentive for units at the bus to raise or lower output to manage congestion. [e16]

In real time, SCED runs approximately every five minutes, or more frequently if necessary, and calculates LMPs and Real-Time MCPCs alongside Base Points and Ancillary Service awards. [e4] SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to security constraints and other Resource constraints. [e5] In the day-ahead, the Protocols define Day-Ahead System Lambda as the DAM Shadow Price for the system power balance constraint for the hour. [e7]

Settlement uses Settlement Point Prices, which are calculated using LMP data. [e12] The day-ahead Settlement Point Price at a Resource Node is that node's LMP. [e13] In real time the Resource Node price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. [e25] The Load Zone LMP is calculated using State Estimator Load data and the LMPs at the Electrical Buses in the zone. [e9][e22] The Hub LMP is the arithmetic average of the Hub Buses' Real-Time LMPs (except for the ERCOT Hub Average 345 kV Hub). [e23]

De-energized buses. For Real-Time Settlement Point Prices, ERCOT assigns an LMP to de-energized Electrical Buses by heuristic rules in order: an LMP predetermined by ERCOT for that bus if specified; otherwise the average LMP of buses at the same station and voltage, then of all buses in the same station, then System Lambda. [e26][e27]

## Formula

Bus LMP (Attachment P, Section 3.1): LMP at Electrical Bus EB equals lambda (System Lambda, the Shadow Price of the power balance constraint) minus the sum over lines of SF (the Shift Factor of bus EB for the line) times SP (the Shadow Price of the line). [e14] The SP term is zero for a line that is not congested. [e15]

The maximum Shadow Prices for the transmission network constraints and the power balance constraint directly determine the real-time LMPs in cases of constraint violations. [e17] ERCOT establishes a maximum Shadow Price for each network constraint, and SCED's cost to resolve an additional MW of congestion on the constraint is limited to it. [e30] Attachment P's generic caps, used in SCED unless ERCOT determines that a constraint is irresolvable, are $5,251/MW for base case or voltage violations and, for N-1 violations, $4,500/MW above 200 kV, $3,500/MW from 100 to 200 kV and $2,800/MW below 100 kV (edition dated December 5, 2025). [e18][e24]

For power balance, SCED's under-generation Power Balance Penalty Price is the effective VOLL plus the effective Real-Time System-Wide Offer Cap plus $4,052.01/MWh, which sets the maximum System Lambda; the over-generation penalty price is -$250/MWh. [e19]

## ERCOT context

Real-time LMPs in ERCOT now come out of a SCED that also procures Ancillary Services: the IMM reports that with real-time co-optimization (RTC) the real-time market simultaneously procures energy and ancillary services. [e10] The IMM says RTC went live on December 5, 2025, and before that ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e21] There is a cap at the effective Value of Lost Load: any Electrical Bus LMP above it is reset, and System Lambda and Real-Time MCPCs from SCED Step 2 are also capped. [e6] A separate administrative floor of -$251/MWh applies to Real-Time Settlement Point Prices, after adding the Real-Time Reliability Deployment Price Adders for Energy. [e8]

Attachment P notes that an LMP at a node, hub or load zone can exceed the RTSWCAP in some circumstances, most likely with irresolvable constraints and tight dispatchable supply. [e20]

The IMM describes LMPs as the marginal cost of serving an incremental unit of load at a location, reflecting generation costs and the physical limits of the transmission network; in ERCOT, LMPs are calculated at individual generation and load nodes but load is settled at the load-weighted average price of its load zone. [e28][e29] The IMM also reports that violated transmission constraint hours fell to 64 constraint-hours in 2025, the lowest annual total ever, which it partly attributes to NPRR 1230 allowing SCED to produce more expensive dispatch solutions to avoid violations. [e31]

## Key facts

- LMP is a bus-level price, produced by either the DAM process or the SCED process. [e1]
- System Lambda is the energy component of LMP at each Settlement Point. [e2]
- Bus LMP = System Lambda minus the sum of Shift Factor times Shadow Price over lines (Attachment P, December 5, 2025 edition). [e14]
- SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]
- Electrical Bus LMPs above the effective VOLL are adjusted down before Real-Time Settlement Point prices are calculated. [e6]
- Real-Time Settlement Point Prices have an administrative floor of -$251/MWh; the SCED over-generation penalty is -$250/MWh. [e8][e19]
- Generic transmission Shadow Price caps run from $2,800/MW to $5,251/MW depending on violation type. [e24]

## Say it like this

An LMP is the marginal cost of serving one more MW at a specific bus: a system-wide energy price (System Lambda) plus whatever the binding transmission constraints add or subtract at that location. ERCOT computes them approximately every five minutes in real time [e4] and for each hour in the day-ahead [e32], and settlement prices are built from them. [e12]

## Common confusion

- LMP versus Settlement Point Price: the LMP is the bus-level output of DAM or SCED, while the Settlement Point Price is the price actually used in Settlement, calculated from LMP data by formula. [e12] See the spp topic.
- LMP versus System Lambda: System Lambda is only the energy component; the LMP at a given bus also includes the congestion component from Shadow Prices and Shift Factors. [e2][e14]
- The Real-Time Settlement Point Price includes the Reliability Deployment Price Adder for Energy; the LMP alone does not. [e8][e25]
- LMP caps: the VOLL cap applies to Electrical Bus LMPs and System Lambda, while the -$251 floor applies to Settlement Point Prices. [e6][e8]

## Questions

### What are the components of an LMP?

System Lambda is the energy component, and the Attachment P formula subtracts, for each congested line, the bus Shift Factor times the line Shadow Price. [e2][e14] The congestion term can be positive or negative at a given bus. [e15]

### How often are real-time LMPs produced?

SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]

### Why can a settlement price differ from the LMP?

Settlement Point Prices are calculated from LMP data with formulas, and real-time prices add the Reliability Deployment Price Adder for Energy and are floored at -$251/MWh. [e12][e8][e25]

### Why does a binding constraint's Shadow Price cap matter for LMPs?

When constraints are violated, the maximum Shadow Prices for network and power balance constraints directly determine the real-time LMPs. [e17] The IMM adds that the cap sets the shadow price that determines congestion prices at the locations affecting the violated constraint. [e11]

### What if the power balance constraint is violated?

The Power Balance Penalty Price sets the maximum System Lambda, at effective VOLL plus effective RTSWCAP plus $4,052.01/MWh for under-generation, with -$250/MWh as the over-generation penalty price. [e19]

### How is the LMP at a de-energized bus set for settlement?

By the Section 6.6.1 heuristics: a predetermined LMP, else the same-station same-voltage average, else the same-station average, else System Lambda. [e26][e27]

## Open items

- Resolved 2026-11-21: the "System Lambda plus congestion" statement is in Attachment P Section 3.1 (formula and variable definitions). [e14]
- Annual average LMP or price levels by node: not sourced here; zone and hub price tables are in the load-zone, hb-north and hb-west topics and the IMM reports.
- The day-ahead bus LMP formula in np-04 was not quoted separately; the Attachment P formula is described there as the LMP at Electrical Buses and Section 4.6.1 gives the settlement-level DAM formulas.
- How RTC+B changed the LMP definition itself (beyond the IMM's statement that RTC co-optimizes energy and ancillary services) is not covered in the saved Protocol text read here.
- Attachment P generic caps and penalty values are those of the edition dated 2025-12-05; any later PUCT-approved change is not in the saved sources.
