---
id: base-point
name: Base Point
aliases: [Base Point, SCED base point, dispatch instruction, basepoint]
kind: concept
domain: pricing
level: 1
depth: deep
lenses: [analyst, trading]
as_of: 2026-11-21
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
    note: The Protocols send Settlement Intervals where Base Points are inconsistent with the Real-Time LMPs to Emergency Operations Settlement. [e4]
  - to: qse
    type: related
    note: Base Points are sent to the QSE representing each Resource. [e7]
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
    quote: "(c) For Settlement purposes, if the Base Points are inconsistent with the Real-Time LMPs, ignoring the Real-Time Reliability Deployment Price Adder for Energy, or Ancillary Service awards are inconsistent with the Real-Time MCPCs, ignoring the Real-Time Reliability Deployment Price Adder for Ancillary Service, averaged over the 15-minute Settlement Interval, then ERCOT shall consider the relevant Settlement Interval(s) in accordance with Section 6.6.9, Emergency Operations Settlement."
  - id: e5
    source: np-06
    locator: "Section 6.5.1.2, Centralized Dispatch, paragraph (1)"
    quote: "ERCOT shall centrally Dispatch Resources and Transmission Facilities under these Protocols, including deploying energy by establishing Base Points, and Emergency Base Points, and by deploying Regulation Service, ERCOT Contingency Reserve Service (ECRS), and Non-Spinning Reserve (Non-Spin) to ensure operational security."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.4, paragraph (1)"
    quote: "Base Points are automatically superseded on receipt of a new Base Point from ERCOT regardless of the status of any current ramping activity of a Resource. ERCOT shall provide each Base Point using Dispatch Instructions issued over Inter-Control Center Communications Protocol (ICCP) data link to the QSE representing each Resource that include the following information:"
  - id: e8
    source: np-06
    locator: "Section 6.5.7.4, paragraph (1)(b)"
    quote: "(b) MW output for Generation Resource, MW output or MW consumption for ESR, and MW consumption for CLR;"
  - id: e9
    source: np-06
    locator: "Section 6.5.7.4.1, Updated Desired Set Points, paragraph (1)"
    quote: "(1) Each Resource shall follow ERCOT-issued Updated Desired Set Points (UDSPs), unless otherwise instructed by ERCOT. ERCOT-issued UDSPs shall not include expected Primary Frequency Response."
  - id: e10
    source: np-06
    locator: "Section 6.5.7.4.1, paragraph (2)"
    quote: "(2) A UDSP is the sum of a calculated MW value representing the expected MW output (positive or negative) of a Resource ramping to a SCED Base Point and the Resource-specific Regulation Service instruction from ERCOT."
  - id: e11
    source: np-06
    locator: "Section 6.5.7.4.1, paragraphs (3)"
    quote: "(3) LFC shall send Resource-specific UDSP to QSEs every four seconds."
  - id: e12
    source: np-06
    locator: "Section 6.5.7.4.1, paragraph (5)"
    quote: "(5) When ERCOT System frequency experiences a 0.05 Hz or greater deviation from scheduled frequency, and a Resource is ramping to a SCED Base Point in a manner directionally opposite to system frequency, the ramping component of the Resource’s UDSP will be temporarily held constant and flagged accordingly."
  - id: e13
    source: np-06
    locator: "Section 6.5.9, Emergency Operations, paragraph (1)"
    quote: "(1) ERCOT, based on ERCOT System reliability needs, may issue a Dispatch Instruction requiring a Resource to move to a specific output level (“Emergency Base Point”)."
  - id: e14
    source: np-06
    locator: "Section 6.5.9.1, Emergency and Short Supply Operation, paragraph (2)"
    quote: "(2) ERCOT shall, to the fullest extent practicable, utilize the Day-Ahead process, the Adjustment Period process, and the Real-Time process before ordering Resources to specific output levels with Emergency Base Point instructions."
  - id: e15
    source: np-06
    locator: "Section 6.6.9, Emergency Operations Settlement, paragraph (1)"
    quote: "(1) Due to Emergency Conditions or Watches, additional compensation for each Generation Resource or ESR for which ERCOT provides an Emergency Base Point may be awarded to the QSE representing the Generation Resource or ESR. If the Resource was instructed to increase generation at a Settlement Point price that is lower than the price based on their Energy Offer Curve or Energy Bid/Offer Curve, or if the Resource was instructed to increase withdrawal at a Settlement Point price that is higher than the price based on their Energy Bid/Offer Curve, ERCOT shall pay the QSE additional compensation for the change from the SCED Base Point immediately before the Emergency Condition or Watch, per paragraph (1) in Section 6.6.9.1, Payment for Emergency Operations Settlement. The Energy Offer Curve and Energy/Bid Offer Curve shall be capped by the Mitigated Offer Cap (MOC)."
  - id: e16
    source: np-06
    locator: "Section 6.5.9.2, Failure of the SCED Process, paragraph (4)(b)-(c)"
    quote: "(b) ERCOT may issue Emergency Base Points for Resources; (c) ERCOT may manually issue Emergency Base Points for a Resource and must communicate the Resource name, MW output requested, and start time and duration of the Dispatch Instruction to the QSE representing the Resource;"
  - id: e17
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (1), GREDP"
    quote: "(1) ERCOT shall compute the GREDP for each Generation Resource that is On-Line and released to SCED for Base Point Dispatch Instructions. The GREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows:"
  - id: e18
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (1), GREDP formula and variable ASP"
    quote: "GREDP (%) = ABS[((ATG – AEPFR)/(ASP)) – 1.0] * 100 GREDP (MW) = ABS(ATG – AEPFR – ASP) Where: ATG = Average Telemetered Generation = the average telemetered generation of the Generation Resource or for the aggregate of the IRRs within an IRR Group for the five-minute clock interval"
  - id: e19
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (4)(e)"
    quote: "(e) The percentage of the monthly five-minute clock intervals during which the Generation Resource or the IRR Group was released to SCED that the GREDP was less than 2.5% and the percentage of the monthly five-minute clock intervals during which the Generation Resource or the IRR Group was released to SCED that the GREDP was less than 2.5 MW;"
  - id: e20
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (5)(a)-(b)"
    quote: "(5) ERCOT shall calculate the GREDP/CLREDP/ESREDP under normal operating conditions. ERCOT shall not consider five-minute clock intervals during which any of the following events has occurred: (a) The five-minute intervals within the 20-minute period following an event in which ERCOT has experienced a Forced Outage causing an ERCOT frequency deviation of greater than 0.05 Hz; (b) Five-minute clock intervals in which ERCOT has issued Emergency Base Points to the QSE;"
  - id: e21
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (6)(a)"
    quote: "(a) A Generation Resource, excluding an IRR, must have a GREDP less than the greater of X% or Y MW for 85% of the five-minute clock intervals in the month during which GREDP was calculated."
  - id: e22
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (5)(f)"
    quote: "(f) The five-minute clock intervals where a Generation Resource’s ASP is below the average telemetered LSL;"
  - id: e23
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (3), ESREDP"
    quote: "(3) ERCOT shall compute the ESREDP for ESRs. The ESREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows:"
---

## Definition

A Base Point is the MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process. [e1]

## How it works

ERCOT issues a Base Point for each On-Line Generation Resource, ESR and CLR on completion of each SCED execution, and the Base Point must observe the Resource's HDL and LDL. [e2] SCED runs approximately every five minutes, or more frequently if necessary, setting Base Points and calculating LMPs together. [e6] To get there it evaluates Energy Offer Curves and other offers and bids, maximizing bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e3]

Base Points are delivered as Dispatch Instructions over the ICCP data link to the QSE representing each Resource. A new Base Point automatically supersedes the previous one regardless of any ramping still under way. [e7] The instruction carries the Resource identifier, the time, and the MW target, which is MW output for a Generation Resource, MW output or MW consumption for an ESR, and MW consumption for a CLR. [e7][e8]

### Updated Desired Set Points

A Resource does not simply jump to its Base Point. Each Resource follows ERCOT-issued Updated Desired Set Points (UDSPs) unless ERCOT instructs otherwise, and UDSPs do not include expected Primary Frequency Response. [e9] A UDSP is the sum of a calculated MW value for the expected output of the Resource ramping to its SCED Base Point and the Resource-specific Regulation Service instruction. [e10] Load Frequency Control sends the Resource-specific UDSP to QSEs every four seconds. [e11] When system frequency deviates 0.05 Hz or more from scheduled and a Resource is ramping to a Base Point in the direction opposite to system frequency, the ramping component of its UDSP is temporarily held constant and flagged. [e12]

## ERCOT context

Base Points are how ERCOT deploys energy: the Protocols describe central dispatch as including deploying energy by establishing Base Points and Emergency Base Points. [e5] For Settlement, if Base Points are inconsistent with the Real-Time LMPs (ignoring the Real-Time Reliability Deployment Price Adder for Energy) averaged over the 15-minute Settlement Interval, ERCOT considers that Settlement Interval under Section 6.6.9, Emergency Operations Settlement. [e4]

### Emergency Base Points

Separately from SCED, ERCOT, based on system reliability needs, may issue a Dispatch Instruction requiring a Resource to move to a specific output level, called an "Emergency Base Point". [e13] The Protocols say ERCOT shall, to the fullest extent practicable, use the Day-Ahead, Adjustment Period and Real-Time processes before ordering Resources to specific output levels with Emergency Base Point instructions. [e14] After ERCOT issues a Watch for a SCED process failure, it may issue Emergency Base Points for Resources, and when it does so manually it must tell the QSE the Resource name, MW output requested, and start time and duration. [e16]

Emergency Base Points can trigger extra pay. Under Section 6.6.9, where a Generation Resource or ESR gets an Emergency Base Point during Emergency Conditions or Watches and is instructed to increase generation at a price below its offer curve price, ERCOT pays the QSE additional compensation for the change from the SCED Base Point immediately before, and the offer curve is capped by the Mitigated Offer Cap. [e15]

### How deviation from the Base Point is measured

Section 8.1.1.4.1 measures how well a Resource follows its set point, not the raw Base Point. ERCOT computes the Generation Resource Energy Deployment Performance (GREDP) for each Generation Resource that is On-Line and released to SCED for Base Point Dispatch Instructions, for each five-minute clock interval. [e17] ESRs have an equivalent measure, the ESREDP. [e23]

## Formula

GREDP (%) = ABS[((ATG - AEPFR)/(ASP)) - 1.0] * 100, and GREDP (MW) = ABS(ATG - AEPFR - ASP). In words: ATG is the average telemetered generation of the Resource (or the aggregate of an IRR Group) for the five-minute clock interval, AEPFR is the average Estimated Primary Frequency Response, and ASP is the time-weighted average of the Resource's UDSP for the interval. [e18]

## Key facts

- A Base Point is the SCED output MW level for a Resource. [e1]
- Issued for each On-Line Generation Resource, ESR and CLR after each SCED execution. [e2]
- SCED runs approximately every five minutes or more often. [e6]
- Must observe the Resource's HDL and LDL. [e2]
- A new Base Point supersedes the prior one regardless of current ramping. [e7]
- UDSPs are sent to QSEs every four seconds. [e11]
- ERCOT posts, per month, the percentage of intervals in which a Generation Resource or IRR Group released to SCED had a GREDP under 2.5% and under 2.5 MW. [e19]
- ERCOT does not count five-minute intervals in which it has issued Emergency Base Points to the QSE when it calculates GREDP, CLREDP and ESREDP. [e20]
- Intervals where a Generation Resource's ASP is below the average telemetered LSL are also excluded. [e22]
- A non-IRR Generation Resource must have a GREDP less than the greater of X% or Y MW for 85% of the five-minute intervals in the month in which GREDP was calculated. [e21]

## Say it like this

The base point is the MW target SCED gives each online resource every few minutes, derived from offers, limits and network constraints. The resource actually chases an updated desired set point that ramps toward it, and ERCOT scores how closely it tracks that set point.

## Common confusion

- Base Point versus offer curve: the offer curve is the input from the QSE and the Base Point is the output from SCED. [e3][e1]
- Base Point versus Emergency Base Point: the Emergency Base Point is a manual reliability instruction to move to a specific output level, outside the SCED price-setting process. [e13][e14]
- Base Point versus UDSP: the UDSP is the ramping value toward the Base Point plus the Regulation Service instruction, so it is not the same number. [e10]
- Deviation is measured against the average set point (ASP), not against the Base Point itself. [e18]

## Questions

### Who produces Base Points and how often?

ERCOT, through SCED, after each execution, roughly every five minutes. [e2][e6]

### What limits does a Base Point observe?

The Resource's HDL and LDL. [e2]

### What is the difference between a Base Point and an Updated Desired Set Point?

The Base Point is SCED's MW target. The UDSP is the sum of the expected output of the Resource ramping to that Base Point and its Regulation Service instruction, and LFC sends it every four seconds. [e10][e11]

### Why are Emergency Base Points a separate concept, and what does ERCOT owe the Resource?

They are reliability-driven instructions to move to a specific output level, and ERCOT is to use the market processes first as far as practicable. [e13][e14] Because they can push a Resource off its offer-curve economics, Section 6.6.9 can pay additional compensation, with the offer capped at the MOC. [e15]

### What if SCED cannot solve?

ERCOT issues a Watch and may issue Emergency Base Points, manually if necessary. [e16]

### How is a generator judged on following dispatch?

By GREDP per five-minute interval against the Resource's average set point, with intervals under Emergency Base Points excluded. [e18][e20]

## Open items

- The values of X and Y in the GREDP criteria (paragraph (6)(a)) are shown as placeholders in the saved np-08 text; the saved sources do not give the numbers. Z for IRRs is likewise a placeholder.
- NPRR1188 (pending box in np-06 6.5.7.4) would add paragraph (2) on following UDSPs; not cited here as rule in force because the box is pending.
- The Reliability Monitor consequence of failing GREDP (beyond "ERCOT will report non-compliance") is not sourced here.
