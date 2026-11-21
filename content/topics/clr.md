---
id: clr
name: CLR (Controllable Load Resource)
aliases: [CLR, Controllable Load Resource, price-responsive load, demand response in SCED]
kind: concept
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
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
  - to: ancillary-services
    type: used-in
    note: A CLR can provide Reg-Up, Reg-Down, RRS and Non-Spin when qualified. [e10][e11]
  - to: settlement-point
    type: related
    note: The Protocols currently give a CLR its Load Zone Settlement Point. [e12]
  - to: large-load-interconnection
    type: related
    note: A Provisional CLR is a Large Load registered as a CLR under the Batch Zero process. [e25][e26]
  - to: nprr
    type: related
    note: NPRR1325 was approved by the PUCT on 6/18/26, effective upon PGRR145 implementation. [e28][e27]
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
  - id: e10
    source: np-03
    locator: "Section 3.6.1(1)(a)(i)-(iii), Load Resource Participation"
    quote: >-
      (i) Regulation Up Service (Reg-Up) Service as a Controllable Load Resource (CLR) capable of providing Primary Frequency Response;
      (ii) Regulation Down Service (Reg-Down) Service as a CLR capable of providing Primary Frequency Response;
      (iii) Responsive Reserve (RRS) as a CLR qualified for Security-Constrained Economic Dispatch (SCED) Dispatch and capable of providing Primary Frequency Response, or as a Load Resource controlled by high-set under-frequency relay;
  - id: e11
    source: np-03
    locator: "Section 3.6.1(1)(a)(v)-(vi), (1)(b)"
    quote: >-
      (v) Non-Spinning Reserve (Non-Spin) as a CLR qualified for SCED Dispatch or as a Load Resource that is not a CLR and that is not controlled by under-frequency relay; and
      (vi) A Load Resource that is not a CLR cannot simultaneously provide Non-Spin and RRS in Real-Time;
      (b) Energy in the form of Demand response from a CLR in Real-Time via SCED;
  - id: e12
    source: np-03
    locator: "Section 3.6.1(4)-(5), Load Resource Participation (paragraph (5) as currently in force, before the NPRR1188 replacement)"
    quote: >-
      A QSE representing a Load Resource and submitting a bid to buy for participation in SCED, as described in Section 6.4.3.1, RTM Energy Bids, must represent the Load Serving Entity (LSE) serving the Load of the Load Resource. If the Load Resource is an Aggregate Load Resource (ALR), the QSE must represent the LSE serving the Load of all sites within the ALR.
      (5) The Settlement Point for a CLR is its Load Zone Settlement Point.
  - id: e13
    source: np-03
    locator: "Section 3.6.1(2), Load Resource Participation"
    quote: "Except for voluntary Load response and ERS, loads participating in any ERCOT market must be registered as a Load Resource and are subject to qualification testing administered by ERCOT."
  - id: e14
    source: np-08
    locator: "Section 8.1.1.2(10), General Capacity Testing Requirements"
    quote: "Before the start of each Season, a QSE shall provide ERCOT a list identifying each Controllable Load Resource that is expected to operate in a Season as a provider of Ancillary Service. Prior to the beginning of each Season, QSEs shall identify the Controllable Load Resources to be tested during the Season and the specific week of the test if known."
  - id: e15
    source: np-08
    locator: "Section 8.1.1.2(11)(b), General Capacity Testing Requirements"
    quote: "ERCOT shall periodically validate the telemetry attributes of each Controllable Load Resource."
  - id: e16
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch (proxy bid paragraph (8), current text)"
    quote: "For a CLR whose QSE has submitted an RTM Energy Bid that does not cover the full range of the Resource’s available Demand response capability, consistent with the CLR’s telemetered quantities, ERCOT shall create a proxy energy bid as described below:"
  - id: e17
    source: np-06
    locator: "Section 6.5.7.3, paragraph (10), current text"
    quote: "If a CLR telemeters a status of OUTL, it is not considered as dispatchable capacity by SCED. A QSE may use this function to inform ERCOT of instances when the CLR is unable to follow SCED Dispatch Instructions."
  - id: e18
    source: np-06
    locator: "Section 6.5.7.3, paragraph (10) as proposed to be replaced by NPRR1188 (pending box, upon system implementation)"
    quote: "A CLR may consume energy only when dispatched by SCED to do so. A CLR may telemeter a status of OUTL only if the Resource is Off-Line and unavailable with its energy consumption at zero. In instances when the CLR is unable to follow SCED Dispatch Instructions but still consumes energy, the CLR must submit a Resource Status of ONHOLD."
  - id: e19
    source: np-06
    locator: "Section 6.6.5.3(1)-(2), Controllable Load Resource Set Point Deviation Charge for Over Consumption"
    quote: >-
      ERCOT shall charge a QSE of a CLR, for over-consumption that exceeds the following tolerance. The tolerance is the greater of:
      (a) XO% of the AASP in the Settlement Interval; or
      (b) YO MW above the AASP in the Settlement Interval.
      (2) The CLR Set Point Deviation Charge for over-consumption variables XO and YO shall be subject to review and approval by the Technical Advisory Committee (TAC) and shall be posted to the ERCOT website no later than three Business Days after TAC approval.
  - id: e20
    source: np-06
    locator: "Section 6.6.5.3(3), variable PRZ1"
    quote: "The price to use for the charge calculation when RTSPP is greater than -$20, -$20/MWh."
  - id: e21
    source: np-06
    locator: "Section 6.6.5.3.1(1)-(2), Controllable Load Resource Set Point Deviation Charge for Under Consumption"
    quote: >-
      ERCOT shall charge a QSE for a CLR, for under-consumption if the average telemetered power consumption is below than the lesser of:
      (a) [100-XU]% of the AASP in the Settlement Interval; or
      (b) The AASP in the Settlement Interval minus YU MW.
  - id: e22
    source: np-06
    locator: "Section 6.6.5.3.1(3), variable PRZ2"
    quote: "The price to use for the Set Point Deviation Charge for under-consumption calculation when RTSPP is less than $20/MWh, $20/MWh."
  - id: e23
    source: np-06
    locator: "Section 6.6.5.1(2), variable AASP"
    quote: "Average Aggregated Set Point per QSE per Settlement Point per Resource—The average of the Average Five Minute Clock Interval Set Point (AVGSP5M) of Resource r represented by QSE q at Settlement Point p, for the 15-minute Settlement Interval i."
  - id: e24
    source: np-02
    locator: "Section 2.1, definition of Aggregate Load Resource (ALR)"
    quote: "A Controllable Load Resource (CLR) that is an aggregation of individual metered sites, each of which has less than ten MW of Demand response capability and all of which are located within a single Load Zone."
  - id: e25
    source: np-02
    locator: "Section 2.1, definition of Provisional Controllable Load Resource (PCLR)"
    quote: "A Controllable Load Resource (CLR) that is required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met."
  - id: e26
    source: np-16
    locator: "Section 16.5.5(2), Provisional Controllable Load Resources (PCLRs)"
    quote: "A Resource Entity that desires to de-register a Large Load as a PCLR prior to its end date shall provide ERCOT no less than 120 days’ written notice. Upon de-registration, the Large Load shall be limited to the maximum Low Power Consumption (LPC) amounts identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan (LCP) until new interconnection studies have been performed according to applicable ERCOT Protocols and Guides."
  - id: e27
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, Effective Date"
    quote: "Upon implementation of Planning Guide Revision Request (PGRR) 145, Batch Zero Process for Large Load Interconnections"
  - id: e28
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, PUCT Decision"
    quote: "On 6/18/26, the PUCT approved NPRR1325 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e29
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, proposed Section 4.4.9.4.4, Adjusted Bid Caps, paragraph (1)(c)"
    quote: >-
      (i) Where a PCLR has a Shift Factor equal to or less than -2% on the list identified in paragraph (c) above, the constraint contribution shall be calculated by multiplying the maximum Shadow Price of that constraint by the Shift Factor of the PCLR for each constraint identified in paragraph (c) above.
      (A) If no such constraints exist, or where the PCLR has a Shift Factor greater than -2%, no Adjusted Bid Cap (ABC) will be applied.
      (B) Otherwise, the Adjusted Bid Cap (ABC) used in Step 2 of the two-step SCED process as described in paragraph (14)(b)(iv) of Section 6.5.7.3 will be set at the lowest absolute value of these constraint contributions plus the System Lambda of the first step in the two-step SCED process described in paragraph (14)(a) of Section 6.5.7.3 minus $0.01/MWh.
  - id: e30
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, page 29"
    quote: "despite a 41% decrease in average load from CLRs, the volume of CLR bids priced above $100/MWh increased by over 19%."
  - id: e31
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, page 29"
    quote: "That’s because, prior to the go-live of RTC, CLRs commonly operated outside of SCED and without a bid curve under certain conditions, such as when they carried AS on all or most of their online capacity."
  - id: e32
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, pages 29-30"
    quote: "dispute was resolved in April 2025, allowing cryptocurrency facilities to license the relevant patents at no cost and register and operate as CLRs."
  - id: e33
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, page 30"
    quote: "Before RTC, if a CLR received an AS award in the day-ahead market, it had to run in real-time according to the volume of the award. With RTC, CLRs can sell out of their day-ahead positions or forego the day-ahead market entirely and only sell AS in real-time when energy prices are favorable."
  - id: e34
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, page 30"
    quote: "Currently, CLRs are dispatched and settled using zonal prices. This creates an economic challenge for CLRs at nodes with structurally low energy costs, such as those in the Panhandle near large volumes of renewable generation, where the zonal price is often higher than the cost of serving their load."
  - id: e35
    source: imm-som-2025
    locator: "Section on CDR deficiencies, Excludes most demand response resources"
    quote: "According to the January 2026 Annual Report on ERCOT Demand Response, 10,550 MW of Non-Controllable Load Resources (NCLRs) and 915 MW of Controllable Load Resources (CLRs) are available"
  - id: e36
    source: imm-som-2025
    locator: "Section on Controllable Load Resources, page 30"
    quote: "We recommend that ERCOT continue to incentivize loads to register as CLRs rather than participate in out of market programs like ERS or engage in self-curtailment outside of SCED."
---

## Definition

A Controllable Load Resource is a Load Resource capable of controllably reducing or increasing consumption under ERCOT's Dispatch control. [e1] A Load Resource is a load capable of providing ancillary service and/or energy as demand response, registered with ERCOT. [e2]

## How it works

The CLR participation model in SCED was implemented in 2014. It lets loads that can respond to 5-minute dispatch instructions submit bids to buy electricity at price-quantity pairs, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3] The Protocols let a Load Resource provide energy as demand response from a CLR in Real-Time via SCED. [e11] A QSE that submits a bid to buy for a Load Resource must represent the LSE serving that Load; for an Aggregate Load Resource it must represent the LSE serving all sites in the ALR. [e12] An ALR is a CLR that aggregates individual metered sites, each with less than ten MW of demand response capability, all in a single Load Zone. [e24]

Ancillary services: a Load Resource can provide Reg-Up and Reg-Down as a CLR capable of Primary Frequency Response, and RRS as a CLR qualified for SCED dispatch and capable of Primary Frequency Response (or as a Load Resource controlled by high-set under-frequency relay). [e10] Non-Spin can be provided as a CLR qualified for SCED Dispatch, and a Load Resource that is not a CLR cannot provide Non-Spin and RRS simultaneously in Real-Time. [e11] Except for voluntary Load response and ERS, loads participating in any ERCOT market must be registered as a Load Resource and pass ERCOT qualification testing. [e13]

Before each Season a QSE must give ERCOT a list of each CLR expected to provide Ancillary Service that Season and identify which will be tested. [e14] ERCOT periodically validates each CLR's telemetry attributes. [e15] If a CLR's bid does not cover its full demand-response range, ERCOT creates a proxy energy bid. [e16] In current text, a CLR that telemeters status OUTL is not dispatchable capacity for SCED, and a QSE may use that to tell ERCOT when the CLR cannot follow Dispatch Instructions. [e17]

## Formula

Set Point Deviation Charge, over-consumption. ERCOT charges the QSE of a CLR for over-consumption above a tolerance equal to the greater of XO% of the AASP or YO MW above the AASP in the Settlement Interval. [e19] AASP is the average of the five-minute set points the Resource should have followed within the 15-minute Settlement Interval. [e23] XO and YO are set by TAC review and approval and posted to the ERCOT website no later than three Business Days after TAC approval. [e19] The charge price uses the Real-Time Settlement Point Price together with a fixed reference price, PRZ1, defined as -$20/MWh for when RTSPP is greater than -$20, applied to the over-consumption volume. [e20] The saved text gives the formula as an equation with variables; the sign convention should be read from the Protocol itself.

Set Point Deviation Charge, under-consumption. ERCOT charges when average telemetered consumption is below the lesser of [100-XU]% of the AASP or the AASP minus YU MW. [e21] The price variable PRZ2 is $20/MWh, used when RTSPP is less than $20/MWh, applied to the under-consumption volume. [e22]

The charge applies to a CLR's QSE unless the set points violate the Resource Parameters. [e6]

## ERCOT context

In 2025 all 12 registered CLRs were cryptocurrency mines. [e4] The IMM reports that average CLR load fell to 240 MW in 2025 as many mines deregistered and moved to the Emergency Reserve Service, where they now account for 64% of ERS volume. [e5] The IMM also says that despite a 41% decrease in average CLR load, CLR bids priced above $100/MWh increased by over 19%. [e30] The IMM says CLR base points shown in its Figure 22 are much lower than average load because, before RTC go-live, CLRs commonly operated outside SCED and without a bid curve under certain conditions, such as carrying AS on all or most of their online capacity. [e31]

The IMM calls the 2025 decline inconsistent with recent policy changes that raised incentives to register as CLRs. [e32] One was the resolution in April 2025 of a patent dispute, which the IMM says allowed cryptocurrency facilities to license the relevant patents at no cost and register as CLRs. [e32] The other is RTC: the IMM says that before RTC a CLR with a day-ahead AS award had to run in real time according to the award, while with RTC it can sell out of day-ahead positions or skip the day-ahead market and sell AS only in real time when energy prices are favorable. [e33][e7]

The IMM says that currently CLRs are dispatched and settled at zonal prices, which creates an economic challenge for CLRs at structurally low-cost nodes such as the Panhandle. [e34] Protocol Section 3.6.1(5) currently gives the CLR its Load Zone Settlement Point. [e12] The IMM supports NPRR 1188 (nodal pricing for CLRs) and NPRR 1244 (registration without primary frequency response), both scheduled for January 2027 implementation per its 2025 report. [e8] NPRR1188 is a pending replacement in the Protocol text: it would let a CLR consume only when dispatched by SCED, restrict OUTL to a CLR that is Off-Line with zero consumption, and require status ONHOLD when the CLR cannot follow Dispatch but still consumes. [e18]

Provisional CLRs (PCLRs) are a newer category. The Protocols define a PCLR as a CLR required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met. [e25] A Resource Entity wishing to de-register a Large Load as a PCLR before its end date must give ERCOT at least 120 days' written notice, and the Large Load is then limited to the maximum LPC identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan until new studies are done. [e26] The PUCT approved NPRR1325 on 6/18/26, effective upon implementation of PGRR 145 (Batch Zero Process). [e28][e27] The approved NPRR1325 text adds an Adjusted Bid Cap for PCLRs in Step 2 of two-step SCED: where a PCLR has a Shift Factor of -2% or lower on a matching constraint, the cap is the lowest absolute constraint contribution plus the first-step System Lambda minus $0.01/MWh, and otherwise no cap applies. [e29]

At the system level, the IMM says that per the January 2026 Annual Report on ERCOT Demand Response, 915 MW of CLRs and 10,550 MW of NCLRs are available. [e35]

## Key facts

- CLR participation in SCED dates from 2014. [e3]
- 12 registered CLRs in 2025, all crypto mines. [e4]
- Average CLR load: 240 MW in 2025. [e5]
- Reference prices in the CLR Set Point Deviation Charge: PRZ1 is -$20/MWh and PRZ2 is $20/MWh. [e20][e22]
- NPRR 1188 and NPRR 1244 were scheduled for January 2027 per the IMM's 2025 report. [e8]
- A PCLR must give 120 days' notice to de-register early. [e26]

## Say it like this

(Guidance) A CLR is a load that ERCOT can dispatch down in SCED against its own bid curve. As of 2025 that was entirely crypto miners, and many had moved to ERS. [e4][e5] Zonal settlement is the IMM's stated reason nodal pricing matters for CLRs. [e34]

## Common confusion

(Guidance) A CLR is not any demand response: a Load Resource only needs to be able to provide ancillary service or energy as demand response, while a CLR is dispatchable by ERCOT. [e2][e1] A PCLR and an ALR are both kinds of CLR, but they are different things: an ALR is an aggregation of small sites, while a PCLR is a Large Load held to CLR registration. [e24][e25]

## Questions

### Who are the CLRs?

In 2025, all 12 registered CLRs were cryptocurrency mines. [e4]

### Why did CLR load drop in 2025?

Many mines deregistered as CLRs and moved to ERS. [e5] The IMM calls this inconsistent with policy changes meant to encourage registration, and notes that CLRs had previously often operated outside SCED. [e32][e31]

### What is pending that could change CLR registration?

NPRR 1188 and NPRR 1244, scheduled by the IMM's account for January 2027. [e8]

### Why might a CLR in the Panhandle prefer nodal pricing?

The IMM says the zonal price there is often higher than the cost of serving the load, because the area has large volumes of renewable generation. A CLR dispatched and settled at the zonal price bears that mismatch. [e34]

### What if a CLR cannot follow its set point?

Its QSE pays a Set Point Deviation Charge if it does not follow the set points within tolerance, unless the set points violate Resource Parameters. [e6] Over-consumption above the tolerance and under-consumption below it are each charged, using the reference prices PRZ1 (-$20/MWh) and PRZ2 ($20/MWh) with the RTSPP. [e19][e21][e20][e22]

### How does RTC change a CLR's ancillary service risk?

Before RTC a CLR with a day-ahead award had to run in real time per the award; with RTC it can sell out of day-ahead positions or sell AS only in real time. [e33]

## Scenarios

### A crypto mine is deciding between registering as a CLR and joining ERS. What did the IMM observe?

- In 2025 many mines deregistered as CLRs and joined ERS, where they now account for 64% of ERS volume. [e5]
- The IMM says it recommends that ERCOT continue to incentivize loads to register as CLRs rather than participate in out of market programs like ERS or engage in self-curtailment outside of SCED. [e36]

## Open items

- Set Point Deviation Charge parameters XO, YO, XU and YU are set by TAC and posted to the ERCOT website; their current values are not in the saved sources.
- The Protocol text of NPRR1188 and NPRR1244 is pending in np-06, np-03 and np-02 boxes; the saved sources do not confirm implementation. The IMM's January 2027 date is from its 2025 report.
- The saved sources do not give CLR telemetry attribute lists or Section 22 Attachment O (ALR) requirements in detail.
- The PCLR ramp rate requirements (Section 6.5.7.11) exist in np-06 only as a pending NPRR1325 insertion upon PGRR145 implementation and are not cited.
- Resolved 2026-11-21: the patent dispute (IMM, resolved April 2025, no-cost licensing) and the Set Point Deviation Charge formulas.
