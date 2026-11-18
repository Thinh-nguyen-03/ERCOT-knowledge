---
id: energy-storage-resource
name: Energy Storage Resource (ESR)
aliases: [ESR, Energy Storage Resource, battery, BESS, battery energy storage, single model ESR, state of charge, SOC]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: ancillary-services
    type: related
    note: ESRs supply most regulation and large shares of the other ancillary services. [e9]
  - to: regulation
    type: related
    note: An ESR in discharge mode or charge mode can provide Reg-Up under the protocol's performance requirements. [e8]
  - to: rtc-b
    type: related
    note: The "+B" in RTC+B changes how ESRs are modelled, offered and dispatched after RTC. [e5][e6]
  - to: sced
    type: related
    note: SCED accounts for state of charge inside its optimization after RTC+B. [e6]
  - to: eea
    type: related
    note: See the EEA topic for the rules on ESR charging during an EEA.
  - to: battery-revenue-stack
    type: related
    note: The IMM links ESR capacity growth to a shift toward earning more revenue from energy arbitrage than from ancillary services. [e15]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Energy Storage Resource (ESR) under Resource"
    quote: "An Energy Storage System (ESS) registered with ERCOT for the purpose of providing energy and/or Ancillary Service to the ERCOT System."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Energy Storage System (ESS)"
    quote: "A facility, process, or device(s) that receives electric energy and stores it, in any form, for the purpose of later releasing electrical energy."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of High Sustained Limit (HSL) for an Energy Storage Resource (ESR)"
    quote: "A positive HSL for an ESR describes the maximum sustained energy discharging capability of the ESR. A negative HSL for an ESR describes the minimum temporary energy charging capability of the ESR."
  - id: e4
    source: np-03
    locator: "Section 3.8.5, Energy Storage Resources, paragraph (1)"
    quote: "(1) A QSE representing an ESR may update the telemetered HSL and/or LSL for the ESR in Real-Time to reflect state of charge limitations."
  - id: e5
    source: ercot-rtcb-battery
    locator: "Slide 18, Energy Bid/Offer Curves (EB/OC), Current Operating Plan (COP), and Telemetry"
    quote: "EB/OC, COP information, and telemetry are provided for the ESR as a single device to cover the entire range from Low Sustained Limit (LSL) to High Sustained Limit (HSL); the maximum charging MW a negative number to maximum discharging MW positive number."
  - id: e6
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 2"
    quote: "SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs."
  - id: e7
    source: ercot-rtcb-battery
    locator: "Slide 23, ESR Participation in the DAM with the RTC+B Project, item 2"
    quote: "State of Charge (SOC) is not considered in the clearing for Energy and Ancillary Services in the DAM."
  - id: e8
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (1)"
    quote: "A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output when deployed and decrease energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Up must be able to decrease Load when deployed and increase Load when recalled."
  - id: e9
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e10
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024."
  - id: e11
    source: imm-som-2025
    locator: "Chapter II, key insights on ESRs"
    quote: "Annual revenue per unit of ESR capacity declined by 37% in 2025 as revenues from providing AS fell by the same amount."
  - id: e12
    source: imm-som-2025
    locator: "Chapter II.E.1, ESR Fundamentals"
    quote: "Because battery energy storage systems (BESSs) constitute virtually all ESRs in ERCOT, this report uses the term ESR interchangeably with batteries."
  - id: e13
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation."
  - id: e14
    source: ercot-rtcb-battery
    locator: "Slide 26, RUC with Implementation of RTC+B Project, item 2"
    quote: "Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services."
  - id: e16
    source: imm-som-2025
    locator: "Chapter III.A.2, Ancillary Services Prices"
    quote: "Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter."
---

## Definition

An Energy Storage Resource (ESR) is an energy storage system registered with ERCOT for the purpose of providing energy and/or ancillary service to the ERCOT System. [e1] An energy storage system is a facility or device that receives electric energy and stores it for later release. [e2]

## How it works

An ESR is one resource that both charges and discharges. Its High Sustained Limit is positive when describing maximum sustained discharge and negative when describing the minimum temporary charging capability. [e3] ERCOT's single-model approach has bid/offer curves, the Current Operating Plan and telemetry for the ESR as a single device across the whole range from maximum charging (negative MW) to maximum discharging (positive MW). [e5] A QSE can update the telemetered HSL and LSL in Real-Time to reflect state of charge limits. [e4]

For ancillary services, an ESR in discharge mode provides Reg-Up by raising output, while an ESR in charge mode provides it by cutting load. [e8] With RTC+B, SCED accounts for state of charge in its optimization so awards are feasible for their duration requirements, and it will not violate telemetered minimum and maximum SOC. [e6] The day-ahead market does not consider SOC in clearing energy and ancillary services. [e7] RUC does not treat an ESR as off-line, so it is not committed by RUC. [e14]

## ERCOT context

The IMM says batteries make up virtually all ESRs in ERCOT, and ESR capacity grew to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% on 2024. [e12][e10] Aggregate ESR output at the hourly peak was almost 2,400 MW in 2025 versus 820 MW in 2024, reflecting a major role serving load in the evening solar down-ramp. [e13] ESRs provided 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin on average in 2025. [e9]

As supply grew, revenue per unit of ESR capacity fell by 37% in 2025 because AS revenues fell by the same amount, which the IMM links to a shift toward energy arbitrage. [e11][e15] The IMM says AS prices fell across all products from 2024 to 2025, partly because of ESR growth. [e16]

## Key facts

- An ESR is registered to provide energy and/or ancillary service. [e1]
- ESR capacity was more than 17,000 MW and 31,500 MWh at the end of 2025. [e10]
- In 2025 ESRs supplied 94% of Reg-Up and 86% of Reg-Down. [e9]
- Revenue per MW of ESR capacity fell 37% in 2025. [e11]
- SCED tracks ESR state of charge after RTC+B; the DAM does not. [e6][e7]

## Say it like this

An ESR is a battery modelled as one resource that can be a generator or a load, bounded by its state of charge. In 2025 it supplied most regulation and large shares of the other ancillary services, and it plays a major role serving evening load, which the IMM says partly contributed to lower AS prices. [e5][e9][e13][e16]

## Common confusion

An ESR is not a generator plus a separate load: the single-model approach treats it as one device with one curve across charging and discharging. [e5] ESR capacity in MW is also not energy: duration and state of charge limit how long it can sustain MW awards. [e6][e10]

## Questions

### How does SCED handle a battery's limited energy?

After RTC+B, SCED includes state of charge accounting so awards can be sustained for their duration, and will not violate the telemetered min and max SOC. [e6]

### Why did battery revenue per MW fall in 2025?

Revenue per unit of ESR capacity fell 37% as AS revenues fell by the same amount, and the IMM says the continued growth in ESR capacity and AS provision by ESRs partly caused AS prices to fall. [e11][e16]

### Can RUC start a battery?

ERCOT's RTC+B material says ESRs will not be seen as off-line and so are not available to be RUCed. [e14]

## Open items

- Deeper pass: ESR registration and qualification for AS (RRS % limit), Set Point Deviation tolerances (3% or 3 MW), Settlement Only ESS, DC-coupled resources and wholesale storage load treatment.
- Deeper pass: ESR duration and ELCC treatment in resource adequacy (Section 3 ELCC variables) and the CDR.
- Deeper pass: the IMM's 2025 discussion of ESR energy offers, price-setting and congestion relief; battery-revenue-stack is a separate topic.
- The revenue split by product was not quoted.
