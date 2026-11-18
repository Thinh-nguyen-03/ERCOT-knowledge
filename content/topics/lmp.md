---
id: lmp
name: LMP (Locational Marginal Price)
aliases: [LMP, Locational Marginal Price, nodal price]
kind: metric
domain: pricing
level: 1
lenses: [analyst, trading, congestion]
as_of: 2026-11-18
links:
  - to: spp
    type: determines
    note: Settlement Point Prices are calculated from LMP data, so LMP is the raw input to every price that settles.
  - to: system-lambda
    type: composed-of
    note: System Lambda is the energy component of the LMP at each Settlement Point. [e2]
  - to: shadow-price
    type: composed-of
    note: Shadow Prices on binding constraints are the other piece that makes LMPs differ by location.
  - to: sced
    type: related
    note: SCED is the real-time process that produces Real-Time LMPs. [e4]
  - to: dam
    type: related
    note: The DAM process produces Day-Ahead LMPs. [e1]
  - to: congestion
    type: related
    note: Congestion is what makes LMPs differ between locations.
  - to: resource-node
    type: related
    note: Resource Node prices are LMP-based and are where generators settle.
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
    quote: "Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged."
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
---

## Definition

An LMP is the offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus. It is produced either by the Day-Ahead Market (DAM) process or by the SCED process. [e1]

## How it works

The LMP is built at the bus level. Its energy component is System Lambda, the Shadow Price of the power balance constraint, meaning the change in the objective function from relaxing that constraint by one MW. [e2] A Shadow Price in general measures the marginal value of a commodity, the rate at which system costs would fall or rise if slightly more or less of it were available. [e3] The protocol text says System Lambda is the energy component of LMP at each Settlement Point; the differences between locations come from the Shadow Prices of binding network constraints in the same optimization. [e2][e5]

In real time, SCED runs approximately every five minutes, or more frequently if necessary, and calculates LMPs and Real-Time MCPCs alongside Base Points and Ancillary Service awards. [e4] SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to security constraints and other Resource constraints. [e5] In the day-ahead, the equivalent system-wide term is the Day-Ahead System Lambda, defined as the DAM Shadow Price for the system power balance constraint for the hour. [e7]

LMPs are not what settles directly for most participants. Settlement Point Prices are derived from them (see the spp topic). Hub and Load Zone LMPs are also published per SCED interval; the Load Zone LMP uses State Estimator Load data and the LMPs at the Electrical Buses in the zone. [e9]

## ERCOT context

Real-time LMPs in ERCOT now come out of a SCED that also procures Ancillary Services: the IMM reports that with real-time co-optimization (RTC) the real-time market simultaneously procures energy and ancillary services. [e10] There is a cap at the effective Value of Lost Load: any Electrical Bus LMP above it is reset, and System Lambda and Real-Time MCPCs from SCED Step 2 are also capped. [e6] A separate administrative floor of -$251/MWh applies to Real-Time Settlement Point Prices, after adding the Real-Time Reliability Deployment Price Adders for Energy. [e8]

## Key facts

- LMP is a bus-level price, produced by either the DAM process or the SCED process. [e1]
- System Lambda is the energy component of LMP at each Settlement Point. [e2]
- SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]
- Electrical Bus LMPs above the effective VOLL are adjusted down before Real-Time Settlement Point prices are calculated. [e6]
- Real-Time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]

## Say it like this

An LMP is the marginal cost of serving one more MW at a specific bus: a system-wide energy price plus whatever the binding transmission constraints add or subtract at that location. ERCOT computes them every five minutes in real time and hourly in the day-ahead, and settlement prices are built from them.

## Common confusion

- LMP versus Settlement Point Price: the LMP is the bus-level output of DAM or SCED, while the Settlement Point Price is the price actually used in Settlement, calculated from LMP data by formula. [e1] See the spp topic.
- LMP versus System Lambda: System Lambda is only the energy component; the LMP at a given bus also reflects congestion. [e2]
- The Real-Time Settlement Point Price includes the Reliability Deployment Price Adder for Energy; the LMP alone does not. [e8]

## Questions

### What are the components of an LMP?

The protocol text identifies System Lambda as the energy component of LMP at each Settlement Point. [e2] System Lambda is the Shadow Price on the power balance constraint. [e2] The location-specific differences come from the Shadow Prices of binding constraints produced in the same optimization. [e5]

### How often are real-time LMPs produced?

SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]

### Why can a settlement price differ from the LMP?

Settlement Point Prices are calculated from LMP data with formulas, and real-time prices add the Reliability Deployment Price Adder for Energy and are floored at -$251/MWh. [e8]

## Open items

- The sources describe System Lambda as the energy component and Shadow Prices as produced by SCED, but I did not find a protocol sentence that writes out LMP as "System Lambda plus congestion component"; the congestion decomposition above is stated from the two definitions together.
- Annual average LMP or price levels: not sourced in this topic; see the spp topic and IMM reports.
