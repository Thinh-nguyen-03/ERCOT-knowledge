---
id: clr
name: CLR (Controllable Load Resource)
aliases: [CLR, Controllable Load Resource, price-responsive load, demand response in SCED]
kind: concept
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-types
    type: is-a
    note: A CLR is a Load Resource, one of the Resource types. [e1][e2]
  - to: sced
    type: used-in
    note: CLRs can submit bids to buy electricity in SCED, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3]
  - to: ers
    type: contrasts-with
    note: Many crypto mines left CLR status for ERS in 2025 (the IMM's report calls it the "Emergency Reserve Service"). [e5]
  - to: rtc-b
    type: related
    note: RTC lets CLRs sell ancillary services in real time with less exposure to high energy prices. [e7]
  - to: large-flexible-load
    type: related
    note: Large price-responsive loads such as crypto mines are the CLR population in the IMM's account. [e4][e5]
  - to: resource-entity
    type: related
    note: A Load Resource is owned or controlled by a Resource Entity. [e9]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Controllable Load Resource (CLR)"
    quote: "A Load Resource capable of controllably reducing or increasing consumption under Dispatch control by ERCOT."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Load Resource"
    quote: "A Load capable of providing Ancillary Service to the ERCOT System and/or energy in the form of Demand response and registered with ERCOT as a Load Resource."
  - id: e3
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, Demand and Supply in ERCOT"
    quote: "The participation model of controllable load resources (CLRs) in SCED was implemented in 2014. It allows loads that can respond to 5-minute dispatch instructions to submit bids to buy electricity at specified price-quantity pairs. ERCOT can then dispatch them down when the clearing price exceeds those bids."
  - id: e4
    source: imm-som-2025
    locator: "Section on Controllable Load Resources"
    quote: "In 2025, all 12 registered CLRs are cryptocurrency mines."
  - id: e5
    source: imm-som-2025
    locator: "Executive summary, 2025"
    quote: "The monthly average aggregate load from controllable load resources dropped to 240 MW in 2025. CLRs still consist entirely of cryptocurrency mines. Many of these mines deregistered as CLRs and migrated to ERCOT’s Emergency Reserve Service, where they now account for 64% of ERS volume."
  - id: e6
    source: np-06
    locator: "Section 6.6.5.1(1), Set Point Deviation Charge"
    quote: "A QSE for a Generation Resource, ESR, or Controllable Load Resource (CLR) shall pay a Set Point Deviation Charge if the Resource did not follow Updated Desired Set Points (UDSPs) within defined tolerances, except when the UDSPs violate the Resource Parameters."
  - id: e7
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, discussion of RTC"
    quote: "RTC allows CLRs to sell ancillary services in real-time with less risk of exposure to excessively high energy prices."
  - id: e8
    source: imm-som-2025
    locator: "Executive summary, 2025"
    quote: "We support measures that incentivize these price-responsive loads to register as CLRs, including NPRR 1188, which will introduce nodal pricing for CLRs, and NPRR 1244, which allows loads to register as CLRs even if they cannot provide primary frequency response. Both NPRRs are scheduled for implementation in January 2027."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Resource Entity"
    quote: "An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity."
---

## Definition

A Controllable Load Resource is a Load Resource capable of controllably reducing or increasing consumption under ERCOT's Dispatch control. [e1] A Load Resource is a load capable of providing ancillary service and/or energy as demand response, registered with ERCOT. [e2]

## How it works

The CLR participation model in SCED was implemented in 2014. It lets loads that can respond to 5-minute dispatch instructions submit bids to buy electricity at price-quantity pairs, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3] A CLR's QSE pays a Set Point Deviation Charge if the Resource does not follow its Updated Desired Set Points within defined tolerances, except when those set points violate the Resource Parameters. [e6]

## ERCOT context

In 2025 all 12 registered CLRs were cryptocurrency mines. [e4] The IMM reports that average CLR load fell to 240 MW in 2025 as many mines deregistered and moved to the Emergency Reserve Service, where they now account for 64% of ERS volume. [e5] The IMM notes that RTC lets CLRs sell ancillary services in real time with less exposure to high energy prices. [e7] It supports NPRR 1188 (nodal pricing for CLRs) and NPRR 1244 (registration without primary frequency response), both scheduled for January 2027 implementation, as of its 2025 report. [e8]

## Key facts

- CLR participation in SCED dates from 2014. [e3]
- 12 registered CLRs in 2025, all crypto mines. [e4]
- Average CLR load: 240 MW in 2025. [e5]
- NPRR 1188 and NPRR 1244 were scheduled for January 2027. [e8]

## Say it like this

(Guidance) A CLR is a load that ERCOT can dispatch down in SCED against its own bid curve. As of 2025 that was entirely crypto miners, and many had moved to ERS. [e4][e5]

## Common confusion

(Guidance) A CLR is not any demand response: a Load Resource only needs to be able to provide ancillary service or energy as demand response, while a CLR is dispatchable by ERCOT. [e2][e1]

## Questions

### Who are the CLRs?

In 2025, all 12 registered CLRs were cryptocurrency mines. [e4]

### Why did CLR load drop in 2025?

Many mines deregistered as CLRs and moved to ERS. [e5]

### What is pending that could change CLR registration?

NPRR 1188 and NPRR 1244, scheduled by the IMM's account for January 2027. [e8]

## Open items

- Deeper pass: CLR qualification and telemetry requirements, Aggregate Load Resource and Provisional CLR rules, and CLR set point deviation charge formulas.
- Deeper pass: the patent dispute that the IMM says was resolved in April 2025 and its effect on registration.
- Current implementation status of NPRR 1188 and 1244 not verified beyond the IMM report.
