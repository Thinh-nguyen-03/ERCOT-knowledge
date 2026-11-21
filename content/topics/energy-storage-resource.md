---
id: energy-storage-resource
name: Energy Storage Resource (ESR)
aliases: [ESR, Energy Storage Resource, battery, BESS, battery energy storage, single model ESR, state of charge, SOC]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
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
  - to: prc
    type: related
    note: ESR capacity capable of primary frequency response counts toward PRC as the PRC8 term, which is the minimum of X% of MDRR, HSL-Net MW and the capacity that can be sustained for 45 minutes per the State of Charge. [e48][e42]
  - to: non-spin
    type: related
    note: The four-hour Non-Spin duration means an ESR must hold four times its award in stored energy, according to the IMM. [e43]
  - to: ruc
    type: related
    note: RUC uses each ESR's hour-beginning State of Charge from the COP, and ESRs are not seen as off-line so cannot be RUCed. [e39][e14]
  - to: load-shed
    type: related
    note: A DESR on a circuit subject to load shed is disqualified from offering ancillary service, and ESRs must suspend charging at EEA Level 3. [e30][e28]
  - to: ordc
    type: related
    note: The IMM says the ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs with RTC. [e44]
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
  - id: e17
    source: np-06
    locator: "Section 6.5.5.2, Operational Data Requirements, paragraphs (14)-(15)"
    quote: >-
      (14) A QSE representing an ESR shall provide the following Real-Time telemetry data to ERCOT for each ESR: (a) Maximum State of Charge (MaxSOC), in MWh; (b) Minimum State of Charge (MinSOC), in MWh; (c) State of Charge (SOC), in MWh; (d) Maximum Operating Discharge Power Limit, in MW; and (e) Maximum Operating Charge Power Limit, in MW. (15) The QSE shall ensure that the SOC is greater than or equal to the MinSOC and less than or equal to the MaxSOC.
  - id: e18
    source: np-02
    locator: "Section 2.1, definition of State of Charge (SOC)"
    quote: >-
      The stored energy in MWh, of an Energy Storage Resource (ESR), that can be injected into the grid at the Point of Interconnection (POI) or Point of Common Coupling (POCC).
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Low Sustained Limit (LSL) for an Energy Storage Resource (ESR)"
    quote: >-
      A negative LSL for an ESR describes the maximum sustained energy charging capability of the ESR. A positive LSL for an ESR describes the minimum temporary energy discharging capability of the ESR.
  - id: e20
    source: np-03
    locator: "Section 3.8.5, Energy Storage Resources, paragraph (2)"
    quote: >-
      (2) A QSE representing an ESR co-located with a Generation Resource may update the telemetered LSL of the ESR when self-charging (using output from the Generation Resource). The updated LSL shall be equal to the MW level of self-charge.
  - id: e21
    source: np-06
    locator: "Section 6.6.5.5, ESR Set Point Deviation Charge for Over Performance, paragraphs (1)-(2)"
    quote: >-
      (1) ERCOT shall charge a QSE for an ESR a Set Point Deviation Charge for over-performance if the telemetered generation or consumption exceeds the specified tolerance. (2) The tolerance is the greater of 3% of the AASP for the ESR in the Settlement Interval, or three MW above the AASP for the ESR in the Settlement Interval.
  - id: e22
    source: np-06
    locator: "Section 6.6.5.5.1, ESR Set Point Deviation Charge for Under Performance, paragraphs (1)-(2)"
    quote: >-
      (1) ERCOT shall charge a QSE for an ESR a Set Point Deviation Charge for under-performance if the telemetered generation or consumption is below the specified tolerance. (2) The tolerance is the lesser of 3% of the AASP for the ESR in the Settlement Interval, or three MW below the AASP for the ESR in the Settlement Interval.
  - id: e23
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3"
    quote: >-
      The awards for each Resource are limited based on the Resource’s qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE’s responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements.
  - id: e24
    source: ercot-rtcb-battery
    locator: "Slide 11, High Level Scope of +B, items 1-2"
    quote: >-
      1. NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024)
  - id: e25
    source: ercot-rtcb-battery
    locator: "Slide 11, High Level Scope of +B, items 3-5"
    quote: >-
      3. NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024) 4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optimization (Approved at the ERCOT Board of Directors June 24, 2025)
  - id: e26
    source: ercot-rtcb-battery
    locator: "Slide 11, High Level Scope of +B, item 6"
    quote: >-
      6. Not part of RTC+B Project. (On the back burner. “Way back” burner.) NPRR 1029: BESTF-6 DC-Coupled Resources (Approved December 2020)
  - id: e27
    source: np-08
    locator: "Section 8.1.1.2.1.2, Responsive Reserve Qualification, paragraph (2)"
    quote: >-
      (2) The amount of RRS provided by individual Generation Resources, CLRs, or ESRs is limited by the ERCOT-calculated maximum MW amount of RRS for the Generation Resource, CLR, or ESR subject to its verified droop performance as described in the Nodal Operating Guide. The default value for any newly qualified Generation Resource, CLR, or ESR shall be 20% of its Maximum Droop Response Range (MDRR).
  - id: e28
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (3)(a)"
    quote: >-
      (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwise necessary, via a manual Dispatch Instruction. An ESR shall suspend charging unless it is providing Primary Frequency Response, has received a charging instruction via SCED Base Point, or is carrying Reg-Down and has received a charging instruction from LFC.
  - id: e29
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (5)"
    quote: >-
      In addition, ERCOT may instruct any QSE representing an ESR to suspend ESR charging if ERCOT determines that a Load reduction by the ESR is capable of mitigating the transmission problem.
  - id: e30
    source: np-03
    locator: "Section 3.8.6, DGRs and DESRs, paragraph (1)(a)"
    quote: >-
      (a) If a DSP subsequently determines that any circuit to which a DGR or DESR is interconnected will need to be disconnected during these Load shedding events, or that a DGR or DESR will need to be moved to a circuit that will be disconnected during these Load shedding events: (i) The DSP shall promptly notify the designated contact for the DGR or DESR; (ii) The Resource Entity shall promptly notify ERCOT of this fact via the Resource Registration process; and (iii) The DGR or DESR will immediately be disqualified from offering to provide any Ancillary Service.
  - id: e31
    source: np-02
    locator: "Section 2.1, definition of Self-Limiting Facility"
    quote: >-
      A modeled generation station that includes one or more Generation Resources, and/or Energy Storage Resources (ESRs) with an established limit on the total MW Injection that is less than the total nameplate capacity of all Resource(s) within the Facility.
  - id: e32
    source: imm-som-2025
    locator: "page 43 (OCR), Chapter II.E.1, ESR Fundamentals"
    quote: >-
      They are duration limited — ESRs are limited by their state of charge (SOC), which is the amount of energy stored at a given time. The average duration of batteries in ERCOT at the end of 2025 was 1.83 hours, up from 1.67 hours in 2024.
  - id: e33
    source: imm-som-2025
    locator: "page 43 (OCR), Chapter II.E.1, ESR Fundamentals"
    quote: >-
      Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value.
  - id: e34
    source: imm-som-2025
    locator: "page 44 (OCR), Chapter II.E.3, ESR Revenue Trends"
    quote: >-
      Annual revenue per unit of ESR capacity declined significantly in 2025, falling by almost 37% from 2024 after normalization for the larger volume of ESR capacity in the market. This decline occurred even though total net ESR revenue increased by about 8%, driven mainly by the
  - id: e35
    source: imm-som-2025
    locator: "page 45 (OCR), Chapter II.E.3, ESR Revenue Trends"
    quote: >-
      Net energy revenue rose by 57% after accounting for charging costs. However, ancillary services revenue fell by more than 37% because the additional ESR capacity increased ancillary services supply and reduced prices.
  - id: e36
    source: imm-som-2025
    locator: "page 45 (OCR), Chapter II.E.4, ESR Participation in Energy Markets"
    quote: >-
      Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024.
  - id: e37
    source: ercot-rtcb-battery
    locator: "Slide 21, Telemetry with the Implementation of the RTC+B Project (2 of 2), items 1-2"
    quote: >-
      1. Net MW telemetry of the ESR, when it is charging or when it receives a Base Point of zero, should NOT include internal losses in the Battery (electro-chemical) and inverter. 2. Net MW (charging or discharging) represents the ESR response to its Updated Desired Set Point (UDSP) (plus any frequency response) at the Point Of Interconnection.
  - id: e38
    source: ercot-rtcb-battery
    locator: "Slide 25, Real-Time Market With the Implementation of the RTC+B Project (2 of 2), Key Takeaway"
    quote: >-
      Key Takeaway: The Set Point Deviation calculation implemented with the RTC+B Project is less tolerant than the current Base Point Deviation calculation.
  - id: e39
    source: ercot-rtcb-battery
    locator: "Slide 27, RUC with Implementation of RTC+B Project: Continued, item 4"
    quote: >-
      4. The RUC software will use the Hour Beginning SoC (HB SoC) provided by the QSEs in their COPS for each ESR to appropriately limit the possible use/capability of each ESR.
  - id: e40
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision, RUC bullet (NPRR1282; PUCT approval 7/31/25)"
    quote: >-
      A one-hour duration for RUC studies is appropriate to both respect an Energy Storage Resource’s (ESR’s) minimum and maximum State of Charge (SOC) values from the Current Operating Plan (COP) and as a deployment duration for use with deployment factors.
  - id: e41
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: >-
      (1) Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
  - id: e42
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC8"
    quote: >-
      PRC₈ = Min(X% of MDRR, HSL-Net MW, the capacity that can be sustained for 45 minutes per the State of Charge Excludes ESR capacity used to provide FFR.
  - id: e43
    source: imm-som-2025
    locator: "page 149 (OCR), Recommendations, 2024-2"
    quote: >-
      for NSRS for energy storage resources, which must maintain a state of charge four times their NSRS obligation. For example, a 10 MW NSRS award would require 40 MWh of stored capacity.
  - id: e44
    source: imm-som-2025
    locator: "page 168 (OCR), Appendix I.G, RDPA"
    quote: >-
      The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
  - id: e45
    source: np-02
    locator: "Section 2.1, definition of Maximum Droop Response Range (MDRR)"
    quote: >-
      The MDRR for a Generation Resource is its High Sustained Limit (HSL), for a Controllable Load Resource (CLR) is its Maximum Power Consumption (MPC), and for an Energy Storage Resource (ESR) is the difference between its HSL and Low Sustained Limit (LSL).
  - id: e46
    source: imm-som-2025
    locator: "page 62-63 (OCR), Chapter III.B, AS Prices"
    quote: >-
      priced hours occurred on the RTC go-live date, December 5, 2025.
  - id: e47
    source: np-08
    locator: "Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (4)(c)(iv)"
    quote: >-
      (iv) For an ESR, in all other test sequence intervals, the Resource’s measured ESREDP must be less than or equal to 3.0% as calculated for the entire duration of each test interval.
  - id: e48
    source: np-06
    locator: "Section 6.5.7.5, PRC variable table, PRC8"
    quote: "ESR capacity capable of providing Primary Frequency Response"
  - id: e49
    source: imm-som-2025
    locator: "page 149 (OCR), Recommendations, 2024-2"
    quote: "This occurs because a four-hour obligation produces an opportunity cost for selling reserves that is four times the prevailing energy price"
---

## Definition

An Energy Storage Resource (ESR) is an energy storage system registered with ERCOT for the purpose of providing energy and/or ancillary service to the ERCOT System. [e1] An energy storage system is a facility or device that receives electric energy and stores it for later release. [e2]

## How it works

An ESR is one resource that both charges and discharges. Its High Sustained Limit is positive when describing maximum sustained discharge and negative when describing the minimum temporary charging capability. [e3] The Low Sustained Limit works the other way: a negative LSL is the maximum sustained charging capability and a positive LSL the minimum temporary discharging capability. [e19] ERCOT's single-model approach has bid/offer curves, the Current Operating Plan and telemetry for the ESR as a single device across the whole range from maximum charging (negative MW) to maximum discharging (positive MW). [e5] A QSE can update the telemetered HSL and LSL in Real-Time to reflect state of charge limits, and a QSE for an ESR co-located with a Generation Resource may set the LSL to the MW level of self-charge when charging from that generator. [e4][e20]

State of charge (SOC) is the stored energy in MWh that can be injected at the POI or POCC. [e18] The QSE must telemeter maximum SOC, minimum SOC, SOC, and the maximum operating discharge and charge power limits, and must ensure SOC stays between the minimum and maximum. [e17] Telemetered net MW does not include internal battery and inverter losses when the ESR is charging or has a zero Base Point, according to ERCOT's July 2025 RTC+B overview. [e37]

For ancillary services, an ESR in discharge mode provides Reg-Up by raising output, while an ESR in charge mode provides it by cutting load. [e8] Under RTC, ancillary service awards are based on Resource capability including state of charge and SOC limits, and ERCOT's July 2025 RTC+B overview says SCED accounts for state of charge in its optimization so awards are feasible for their duration requirements and it will not violate telemetered minimum and maximum SOC. [e41][e6] The same overview says that is different from before, when the QSE had to reserve sufficient SoC to cover its ancillary service duration requirements. [e23] The day-ahead market does not consider SOC in clearing energy and ancillary services. [e7] The same overview says ESRs will not be seen as off-line in RUC and so are not available to be RUCed; RUC uses the hour-beginning SoC in the COP to limit each ESR. [e14][e39]

**Qualification and limits.** An ESR providing RRS is limited by an ERCOT-calculated maximum MW subject to verified droop performance; the default for a newly qualified ESR is 20% of its Maximum Droop Response Range, which for an ESR is the difference between HSL and LSL. [e27][e45] Regulation qualification includes a test in which, for an ESR, the measured ESREDP in all other test sequence intervals must be at or below 3.0% for the entire duration of each test interval. [e47] The NPRR1282 PUCT report says a one-hour duration for RUC studies is appropriate to respect an ESR's minimum and maximum SOC values from the COP and as a deployment duration for use with deployment factors. [e40]

**Set Point Deviation.** ERCOT charges a QSE for over-performance when an ESR's telemetered generation or consumption exceeds a tolerance of the greater of 3% of the AASP (Average Aggregated Set Point) for the ESR or three MW above the AASP, and for under-performance when it falls below a tolerance of the lesser of 3% of the AASP or three MW below it. [e21][e22] A pending NPRR1014/NPRR1029 box in Section 6.6.5.5 would add conditions on DC-Coupled Resources to the over-performance tolerance upon system implementation; this topic does not describe it. ERCOT's July 2025 overview says the Set Point Deviation calculation implemented with RTC+B is less tolerant than the current Base Point Deviation calculation. [e38] Self-Limiting Facilities, which cap total MW injection below nameplate, are defined separately. [e31]

**Emergency operations.** At EEA Level 3 ERCOT can instruct ESRs to suspend charging, by SCED Base Point or manual Dispatch Instruction, and an ESR must suspend unless it is providing Primary Frequency Response, has a SCED charging instruction, or is carrying Reg-Down with an LFC charging instruction; the Protocols add that an ESR co-located behind a POI with onsite generation that cannot export additional power to ERCOT may continue to charge as long as maximum output to ERCOT is maintained. [e28] When an Emergency Condition is the result of a transmission problem, ERCOT may instruct an ESR QSE to suspend charging if ERCOT determines the Load reduction by the ESR is capable of mitigating it (the same co-located exception applies). [e29] A DGR or DESR whose circuit becomes subject to disconnection in load shedding is immediately disqualified from offering ancillary service. [e30] ESR capacity capable of primary frequency response counts toward PRC through the PRC8 term, the minimum of X% of MDRR, HSL-Net MW and the capacity that can be sustained for 45 minutes per the State of Charge. [e48][e42]

## ERCOT context

The IMM says batteries make up virtually all ESRs in ERCOT, and ESR capacity grew to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% on 2024. [e12][e10] The IMM puts average battery duration at 1.83 hours at the end of 2025, up from 1.67 hours in 2024. [e32] Aggregate ESR output at the hourly peak was almost 2,400 MW in 2025 versus 820 MW in 2024, reflecting a major role serving load in the evening solar down-ramp. [e13] ESRs provided 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin on average in 2025. [e9]

As supply grew, revenue per unit of ESR capacity fell by almost 37% in 2025 even though total net ESR revenue rose about 8%; net energy revenue rose 57% while AS revenue fell by more than 37%. [e34][e35][e11] The IMM says ESRs began shifting toward energy arbitrage in 2024 as AS saturated, and that AS prices fell across all products from 2024 to 2025, partly because of ESR growth. [e36][e15][e16]

The IMM also argues that, because the market software optimizes one five-minute interval at a time, ESR owners must offer strategically to manage SOC. [e33] It recommends a multi-interval real-time market; that recommendation is the IMM's, not ERCOT's. [e33]

## Timeline

- December 2020: NPRR1014 (ESR single model) approved; February 2024: NPRR1204 (state of charge with RTC) approved. [e24]
- November 2024: NPRR1236 (RUC capacity short calculations) approved; March 2025: NPRR1246 (terminology) approved; 24 June 2025: ERCOT Board approved NPRR1282 (AS duration under RTC). [e25]
- NPRR1029 (DC-coupled resources, approved December 2020) was described in July 2025 as not part of the RTC+B project. [e26]
- 5 December 2025: RTC go-live. [e46]

## Key facts

- An ESR is registered to provide energy and/or ancillary service. [e1]
- ESR capacity was more than 17,000 MW and 31,500 MWh at the end of 2025. [e10]
- On average in 2025 ESRs provided 94% of Reg-Up and 86% of Reg-Down, per the IMM. [e9]
- The IMM says annual revenue per unit of ESR capacity fell by almost 37% in 2025 after normalization for the larger volume of capacity. [e34]
- SCED tracks ESR state of charge after RTC+B; the DAM does not. [e6][e7]
- Set Point Deviation tolerance for an ESR is the greater of 3% of AASP or three MW above (over-performance) and the lesser of 3% of AASP or three MW below (under-performance). [e21][e22]
- The default RRS limit for a newly qualified ESR is 20% of its MDRR. [e27]

## Say it like this

An ESR is a battery modelled as one resource that can be a generator or a load, bounded by its state of charge. In 2025 it supplied most regulation and large shares of the other ancillary services, and it plays a major role serving evening load, and the IMM says the growth in ESR capacity partly caused AS prices to fall. [e5][e9][e13][e16]

## Common confusion

An ESR is not a generator plus a separate load: the single-model approach treats it as one device with one curve across charging and discharging. [e5] ESR capacity in MW is also not energy: duration and state of charge limit how long it can sustain MW awards. [e6][e10] And a positive LSL is not an error: it means a minimum temporary discharge. [e19]

## Questions

### How does SCED handle a battery's limited energy?

After RTC+B, SCED includes state of charge accounting so awards can be sustained for their duration, and will not violate the telemetered min and max SOC. [e6]

### Why did battery revenue per MW fall in 2025?

Revenue per unit of ESR capacity fell almost 37% as AS revenues fell by more than 37%, and the IMM says the continued growth in ESR capacity and AS provision by ESRs partly caused AS prices to fall. [e34][e35][e16]

### Can RUC start a battery?

ERCOT's RTC+B material says ESRs will not be seen as off-line and so are not available to be RUCed. [e14]

### What if EEA Level 3 is declared while a battery is charging?

ERCOT can instruct it to suspend charging; it must stop unless it is providing Primary Frequency Response, has a SCED charging Base Point, or is carrying Reg-Down with an LFC charge instruction, and an ESR co-located behind a POI with onsite generation that cannot export additional power may continue to charge as long as maximum output to ERCOT is maintained. [e28]

### How does Set Point Deviation for an ESR compare with the old Base Point Deviation?

ERCOT's July 2025 overview says the Set Point Deviation calculation implemented with RTC+B is less tolerant than the current Base Point Deviation calculation. The ESR tolerance is the greater of 3% of AASP or three MW above AASP for over-performance and the lesser of 3% of AASP or three MW below AASP for under-performance. [e38][e21][e22]

### Why might a four-hour Non-Spin duration discourage batteries from selling reserves?

The IMM says ERCOT maintains a four-hour NSRS duration requirement under which an ESR must hold a state of charge four times its NSRS obligation (a 10 MW award would require 40 MWh), and argues this produces an opportunity cost for selling reserves that is four times the prevailing energy price; the argument is the IMM's view. [e43][e49]

## Open items

- Settlement Only ESS and wholesale storage load treatment (settlement of ESR charging) were not worked through.
- DC-coupled resources: NPRR1029 is pending and was described in July 2025 as not part of RTC+B; the Protocol pending boxes were not read in full. [e26]
- ESR duration and ELCC treatment in resource adequacy and the CDR: not found in the saved sources checked.
- The revenue split by product was not quoted; the IMM's ESR energy offer and price-setting discussion in 2025 beyond the points above was not covered.
