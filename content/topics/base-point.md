---
id: base-point
name: Base Point
aliases: [Base Point, SCED base point, dispatch instruction, basepoint]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading]
as_of: 2026-11-18
links:
  - to: sced
    type: determines
    note: SCED produces a Base Point for each On-Line Resource on every execution. [e1][e2]
  - to: energy-offer-curve
    type: related
    note: Base Points come from SCED's evaluation of Energy Offer Curves. [e3]
  - to: hsl-lsl
    type: related
    note: The Base Point must observe the Resource's HDL and LDL. [e2]
  - to: lmp
    type: related
    note: Base Points are expected to be consistent with the Real-Time LMPs. [e4]
  - to: qse
    type: related
    note: Base Points are sent to the QSE representing each Resource. [e2]
  - to: rtm
    type: related
    note: Base Points are the real-time energy dispatch signal. [e5]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Base Point"
    quote: "The MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.4, paragraph (1)"
    quote: "ERCOT shall issue a Base Point for each On-Line Generation Resource, each On-Line ESR, and each On-Line CLR on completion of each SCED execution. The Base Point set by SCED must observe a Resource’s HDL and LDL."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e4
    source: np-06
    locator: "Section 6.3, paragraph (4)(c)"
    quote: "For Settlement purposes, if the Base Points are inconsistent with the Real-Time LMPs"
  - id: e5
    source: np-06
    locator: "Section 6.5.7.1, paragraph (1)"
    quote: "ERCOT shall centrally Dispatch Resources and Transmission Facilities under these Protocols, including deploying energy by establishing Base Points, and Emergency Base Points, and by deploying Regulation Service, ERCOT Contingency Reserve Service (ECRS), and Non-Spinning Reserve (Non-Spin) to ensure operational security."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
---

## Definition

A Base Point is the MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process. [e1]

## How it works

ERCOT issues a Base Point for each On-Line Generation Resource, ESR and CLR on completion of each SCED execution, and the Base Point must observe the Resource's HDL and LDL. [e2] SCED runs approximately every five minutes, or more frequently if necessary, setting Base Points and calculating LMPs together. [e6] To get there it evaluates Energy Offer Curves and other offers and bids, maximizing bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e3]

## ERCOT context

Base Points are how ERCOT deploys energy: the Protocols describe central dispatch as including deploying energy by establishing Base Points and Emergency Base Points. [e5] The Protocols also treat consistency between Base Points and Real-Time LMPs as something to check in price corrections. [e4]

## Key facts

- A Base Point is the SCED output MW level for a Resource. [e1]
- Issued for each On-Line Generation Resource, ESR and CLR after each SCED execution. [e2]
- SCED runs approximately every five minutes or more often. [e6]
- Must observe the Resource's HDL and LDL. [e2]

## Say it like this

The base point is the MW target SCED gives each online resource every few minutes, derived from offers, limits and network constraints. A unit that follows its base point is being paid the LMP for the output SCED asked for.

## Common confusion

- Base Point versus offer curve: the offer curve is the input from the QSE and the Base Point is the output from SCED. [e3][e1]
- Base Point versus Emergency Base Point: the Protocols distinguish the two. [e5]

## Questions

### Who produces Base Points and how often?

ERCOT, through SCED, after each execution, roughly every five minutes. [e2][e6]

### What limits does a Base Point observe?

The Resource's HDL and LDL. [e2]

## Open items

- Deeper pass: Updated Desired Set Points for ESRs (np-06 6.5.7.4.1) and Emergency Base Points.
- Deeper pass: how generators' deviation from Base Points is measured (np-08 Base Point performance).
