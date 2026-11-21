---
id: binding-constraint
name: Binding Constraint
aliases: [binding constraint, active constraint, violated constraint, constraint, contingency constraint]
kind: concept
domain: congestion
level: 1
lenses: [analyst, congestion, trading]
as_of: 2026-11-21
depth: deep
links:
  - to: shadow-price
    type: related
    note: The shadow price is the marginal cost of redirecting flow around a binding constraint. [e5]
  - to: shift-factor
    type: related
    note: ERCOT posts the binding constraints and, in the same hourly MIS Secure Area posting, Shift Factors by Resource Node, Hub, Load Zone and DC Tie. [e2][e30]
  - to: gtc
    type: related
    note: A GTC is a constraint used to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow applications. [e9]
  - to: congestion
    type: related
    note: When a constraint binds, prices differ across locations. [e4]
  - to: sced
    type: used-in
    note: Constraints identified by NSA are activated in SCED, and each binding constraint's competitive designation is posted per SCED execution. [e1][e6]
  - to: market-power-mitigation
    type: related
    note: Each binding constraint is designated Competitive or Non-Competitive; a Non-Competitive determination is one condition for mitigation in SCED Step 2 (Protocol 3.19.4(7)(a)). [e6][e33]
  - to: system-lambda
    type: related
    note: The shadow price caps for network and power balance constraints are set under Section 22, Attachment P. [e15]
  - to: ruc
    type: related
    note: Committing additional Generation Resources through RUC is one of the steps ERCOT may take if SCED does not resolve a security violation. [e14]
  - to: crr
    type: related
    note: The IMM says congestion rent is based on locational price differences and that the financial right to it accrues to CRR holders. [e29]
  - to: energy-storage-resource
    type: related
    note: The IMM says ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand, and that growing ESR participation may partly explain the fall in violated constraints. [e32][e24]
evidence:
  - id: e1
    source: np-06
    locator: "Section 6.5.7.1.11, paragraph (1)"
    quote: "ERCOT may not allow any constraint (contingency and limiting Transmission Element pair) identified by NSA to be activated in SCED until it has verified that the contingency definition in NSA associated with the constraint is accurate and appropriate given the current operating state of the ERCOT Transmission Grid."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(b)"
    quote: "All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint;"
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Non-Competitive Constraint"
    quote: "A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests."
  - id: e4
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "When these limits bind, congestion increases dispatch costs and causes energy prices to vary across locations in the network."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit."
  - id: e6
    source: np-03
    locator: "Section 3.19.4, paragraph (6)"
    quote: "Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Real-Time Congestion"
    quote: "SCED manages power flows across the network as physical constraints become binding in real time."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Constraint (GTC)"
    quote: "A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT’s powerflow and contingency analysis applications."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "Figure 38 shows that the overall rate of violated transmission constraints continued to drop precipitously to 64 constraint-hours in 2025, by far the lowest annual total."
  - id: e10
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints, Figure 38 discussion"
    quote: "The next lowest year was 2016, with 271 constraint-hours of violations."
  - id: e11
    source: imm-som-2024
    locator: "page 88 (OCR), Types and Frequency of Constraints in 2024"
    quote: "Constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit, and not binding when they do not require a redispatch of generation and have no effect on prices."
  - id: e12
    source: imm-som-2024
    locator: "page 88 (OCR), Types and Frequency of Constraints in 2024"
    quote: "To make the dispatch problem solved by SCED more computationally tractable, ERCOT only activates a subset of these constraints at any given time. In addition to GTCs, the limits of which are set prior to the operating day, ERCOT also activates constraints based on the Real-Time Contingency Analysis (RTCA) process that runs on an ongoing basis."
  - id: e13
    source: np-06
    locator: "Section 6.5.7.1.10, paragraph (1)(a)-(b)"
    quote: "Contingency security violations for transmission lines and transformers occur if: (a) The predicted post-contingency MVA exceeds 100% of the Emergency Rating after consideration of Dynamic Ratings; and (b) A RAP, AMP or RAS is not defined allowing relief within the time allowed by the security criteria as defined in Operating Guide Section 2.2.2, Security Criteria."
  - id: e14
    source: np-06
    locator: "Section 6.5.7.1.10, paragraph (3)(a)-(i)"
    quote: "(3) If SCED does not resolve a transmission security violation, ERCOT shall attempt to relieve the security violation by: (a) Confirming that pre-determined RAPs are properly modeled in the system; (b) Instructing Resources to follow Base Points from SCED if those Resources are not already doing so; (c) Instructing Resources to update the Resources Status in the COP from ONTEST to ON in order to provide more capacity to SCED; (d) Deploying Resource-Specific Non-Spin; (e) Committing additional Generation Resources through the Reliability Unit Commitment (RUC) process; (f) Removing conflicting non-cascading constraints from the SCED process; (g) Re-Dispatching generation or, in the case of an ESR, its output or consumption, by over-riding HDLs and LDLs; (h) Instructing TSPs to utilize Reactive Power devices to manage voltage; and (i) If all other mechanisms have failed, ERCOT may authorize the expedited use of a Temporary Outage Action Plan (TOAP) or Mitigation Plan."
  - id: e15
    source: np-06
    locator: "Section 6.5.7.1.11, paragraphs (2)-(3)"
    quote: "(2) Pursuant to Section 22, Attachment P, Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints, ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint. (3) Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint."
  - id: e16
    source: np-06
    locator: "Section 6.5.7.1.10, paragraph (7)(a)"
    quote: "(7) ERCOT shall report monthly: (a) All security violations that were 125% or greater of the Emergency Rating for a single SCED interval or greater than 100% of the Emergency Rating for a duration of 30 minutes or more during the prior reporting month and the number of occurrences and congestion cost associated with each of the constraints causing the security violations on a rolling 12 month basis."
  - id: e17
    source: np-03
    locator: "Section 3.19.4, paragraph (2)(a)-(b)"
    quote: "(2) Before each SCED execution, CCT is performed for all active constraints in SCED. The SCED CCT shall classify a constraint as competitive for the current SCED execution if the constraint meets all of the following conditions: (a) The ECI is less than ECIT2 on the import side; (b) The constraint can be resolved by eliminating all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME. If the constraint cannot be resolved, then the DME will be marked as the pivotal player for resolving the constraint;"
  - id: e18
    source: np-03
    locator: "Section 3.19.4, paragraph (5)"
    quote: "(5) The Independent Market Monitor (IMM) may designate any constraint as a Competitive Constraint or a Non-Competitive Constraint. ERCOT shall provide notice describing any such designation by the IMM. The notice shall include an effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective."
  - id: e19
    source: np-03
    locator: "Section 3.19.1, threshold table, ECIT2 row"
    quote: "ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300"
  - id: e20
    source: nog-11
    locator: "Section 11, paragraph (1)"
    quote: "(1) Constraint Management Plans (CMPs) are developed in accordance to the guidelines set forth in the sections below, and are defined in Protocol Section 2.1, Definitions. CMPs include, but are not limited to the following: (a) Remedial Action Plans (RAPs) which are modeled in Network Security Analysis (NSA) where practicable; (b) Automatic Mitigation Plans (AMPs) which are modeled in NSA where practicable; (c) Pre-Contingency Action Plans (PCAPs); (d) Extended Action Plans (EAPs); (e) Temporary Outage Action Plans (TOAPs); and (f) Mitigation Plans."
  - id: e21
    source: nog-11
    locator: "Section 11.2, paragraph (1)"
    quote: "(1) Remedial Action Schemes (RASs) are designed to detect abnormal predetermined ERCOT System conditions and automatically take corrective actions to maintain a secure system. Any RAS proposed on or after June 24, 2020 may not be approved or implemented unless ERCOT has first determined that the RAS is necessary to avoid an actual or anticipated violation of transmission security criteria, as defined in Section 2.2.2, Security Criteria, that cannot be resolved through ERCOT market tools."
  - id: e22
    source: imm-som-2021
    locator: "page 89 (OCR), Types and Frequency of Constraints in 2021"
    quote: "A base-case constraint exists if the flow on a transmission element exceeds its normal rating. A thermal contingency constraint exists if the outage of a transmission element (i.e., a contingency) would result in a flow higher than the rating of an in- service element."
  - id: e23
    source: imm-som-2021
    locator: "page 90 (OCR), Types and Frequency of Constraints in 2021"
    quote: "The ERCOT system had at least one binding constraint 70% of the time in 2021, a decrease from 75% in 2020."
  - id: e24
    source: imm-som-2025
    locator: "page 85 (OCR), Violated Constraints"
    quote: "The sharp decline may be partly explained by the growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity."
  - id: e25
    source: ercot-constraints-needs-2025
    locator: "Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4)"
    quote: "Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M"
  - id: e26
    source: ercot-constraints-needs-2025
    locator: "Recent Constraints, footnote"
    quote: "*Congestion rent indicates areas of the system where economic transmission projects may be beneficial. It is not an indication of whether a project to reduce specific congestion would or would not meet the ERCOT economic planning criteria."
  - id: e27
    source: imm-som-2023
    locator: "page 86 (OCR), Real-time Constraints and Congested Areas"
    quote: "Our review of real-time congestion is based on its economic value, calculated by multiplying the shadow price of each constraint by the flow over the constraint."
  - id: e28
    source: imm-som-2023
    locator: "page 87 (OCR), GTC binding hours"
    quote: "In 2023, there was a decrease in the GTC binding hours from 2022 and 2021, however they continued to be much higher than the binding hours in prior years."
  - id: e29
    source: imm-som-2025
    locator: "Executive overview, congestion rent"
    quote: "Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial right to this congestion rent accrues to holders of CRRs."
  - id: e30
    source: np-06
    locator: "Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(c)"
    quote: "(c) Shift Factors, including Private Use Network Settlement Points, by Resource Node, Hub, Load Zone, and DC Tie."
  - id: e31
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint."
  - id: e32
    source: imm-som-2025
    locator: "page 85 (OCR), Congestion Management by ESRs"
    quote: "ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand."
  - id: e33
    source: np-03
    locator: "Section 3.19.4, paragraph (7)(a)"
    quote: "(a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM;"
---

## Definition

"Binding constraint" does not have its own entry in the Protocol definitions (np-02, Section 2.1), although Section 6 refers to "binding transmission constraints". [e2] In ERCOT a constraint is a contingency and limiting Transmission Element pair that Network Security Analysis identifies and that is activated in SCED. [e1] The IMM says constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit, and not binding when they require no redispatch and have no effect on prices. [e11] When these limits bind, congestion raises dispatch costs and makes energy prices differ by location. [e4]

## How it works

**Where constraints come from.** The IMM notes SCED manages flows as physical constraints become binding in real time. [e7] Thousands of constraints exist on physical network elements, and ERCOT activates only a subset in SCED at a time; besides GTCs, whose limits are set before the operating day, ERCOT activates constraints based on the Real-Time Contingency Analysis process that runs continuously (IMM description). [e12] A base-case constraint exists when flow on an element exceeds its normal rating; a thermal contingency constraint exists when the outage of an element would push flow above the rating of an in-service element (IMM, 2021). [e22]

**Security violation and the contingency test.** In the Protocols, a contingency security violation on a line or transformer occurs if the predicted post-contingency MVA exceeds 100% of the Emergency Rating after Dynamic Ratings and no RAP, AMP or RAS provides relief within the time the security criteria allow. [e13] ERCOT may not activate an NSA-identified constraint in SCED until it has verified that the contingency definition is accurate for the current operating state. [e1]

**If SCED cannot solve it.** ERCOT may confirm RAPs are modeled, instruct Resources to follow Base Points, deploy Resource-Specific Non-Spin, commit more Generation through RUC, remove conflicting non-cascading constraints, override HDLs and LDLs, instruct TSPs to use reactive devices, and, if everything else has failed, authorize expedited use of a Temporary Outage Action Plan or Mitigation Plan. [e14] Constraint Management Plans include RAPs, AMPs, PCAPs, EAPs, TOAPs and Mitigation Plans. [e20] A Remedial Action Scheme detects predetermined abnormal conditions and takes corrective action automatically; one proposed on or after June 24, 2020 may not be approved unless ERCOT first determines it is necessary to avoid an actual or anticipated violation that market tools cannot resolve. [e21]

**Binding versus violated, and the cap.** The IMM says a constraint is violated when market dispatch flows exceed its transmission limit, and the shadow price is the marginal cost of redirecting flow around the binding constraint. [e5] ERCOT sets a maximum Shadow Price for each network constraint under Section 22, Attachment P, so the cost SCED calculates to resolve an additional MW of congestion on it is limited to that maximum. [e15]

**Competitive or non-competitive.** Before each SCED execution the SCED Constraint Competitiveness Test is run on every active constraint; it requires, among other conditions, an Element Competitiveness Index below the import-side threshold (ECIT2) and that the constraint can be resolved by eliminating all of a DME's Managed Available Capacity on the import side (except nuclear and minimum-energy coal and lignite capacity); if it cannot be resolved, the DME is marked as the pivotal player. [e17] The SCED ECI threshold (ECIT2) is 2300. [e19] The IMM may designate any constraint as competitive or non-competitive, and its designation overrides the SCED test for the effective dates. [e18] Each binding constraint's designation is posted hourly. [e6] A non-competitive constraint is one not found competitive under the Section 3.19 tests. [e3]

**Reporting.** ERCOT must report monthly security violations of 125% or more of the Emergency Rating for a single SCED interval, or above 100% for 30 minutes or more, with occurrences and congestion cost per constraint on a rolling 12-month basis. [e16]

## ERCOT context

Congestion is common: at least one constraint was binding during 70% of 2021, down from 75% in 2020. [e23] The IMM values real-time congestion as the shadow price of each constraint times flow over the constraint. [e27] ERCOT's December 2025 report lists the top constraints by real-time congestion rent for October 2024 to September 2025; the list starts with Koch Tap - Vealmoor 138kV at $211M, Hargrove - Twin Buttes 138kV at $176M, Odessa EHV Switch - Yarbrough Sub 138kV at $151M and the West Texas Export Interface at $127M. [e25] ERCOT cautions that congestion rent indicates where economic transmission projects may be beneficial, not whether a project would pass the economic planning criteria. [e26] GTC binding hours fell in 2023 from 2022 and 2021 but stayed far above earlier years, according to the IMM. [e28]

The IMM reports that violated transmission constraints fell to 64 constraint-hours in 2025, the lowest annual total, and says growing ESR participation in real-time may partly explain it. [e8][e24]

## Key facts

- A constraint is a contingency and limiting Transmission Element pair activated in SCED. [e1]
- ERCOT posts all binding constraints hourly. [e2]
- Violated means flows exceed the limit. [e5]
- Security violation threshold: post-contingency MVA above 100% of the Emergency Rating with no RAP, AMP or RAS relief in time. [e13]
- Competitive or non-competitive status is posted for each binding constraint each hour; the SCED ECI threshold is 2300. [e6][e19]
- 2025 violated constraint-hours: 64, the lowest annual total in the IMM's comparison (next lowest was 2016, at 271). [e8][e10]
- Top real-time constraint by congestion rent, Oct 2024 to Sep 2025: Koch Tap - Vealmoor 138kV, $211M. [e25]

## Say it like this

(Guidance) When a transmission limit binds, congestion raises dispatch costs and energy prices differ by location. The shadow price tells you what one more MW of relief costs. [e4][e5]

## Common confusion

Binding does not mean violated: a violation means market dispatch flows exceed the transmission limit. [e5] Also, an active constraint is not necessarily binding: it binds only when it forces redispatch. [e11]

## Questions

### What is the difference between binding and violated?

The IMM says a constraint is violated when market dispatch flows exceed its transmission limit; when limits bind, congestion increases dispatch costs, and the shadow price is the marginal cost of redirecting flow around a binding constraint. [e5][e4]

### Where do I see today's binding constraints?

ERCOT posts them hourly with the contingency and overloaded element pairs, and the competitive or non-competitive designation. [e2][e6]

### What is the difference between an active and a binding constraint?

Active constraints are those ERCOT passes into SCED; they bind only when dispatch costs are incurred to keep flow under the limit. [e12][e11]

### Why does ERCOT verify the contingency definition before activating a constraint?

The Protocol says ERCOT may not activate an NSA-identified constraint until it has verified the contingency definition is accurate and appropriate for the current operating state. [e1]

### What happens if SCED cannot resolve a violation?

ERCOT can use manual tools including RUC commitment, Non-Spin deployment, HDL/LDL overrides and, as a last resort, a TOAP or Mitigation Plan. [e14]

### Why would a constraint be non-competitive, and what follows?

If it fails the SCED test (for example ECI at or above the 2300 threshold, or a pivotal Entity), it is Non-Competitive, and a Non-Competitive determination by the SCED CCT or the IMM is one of the conditions for applying mitigation to a Resource in SCED Step 2 (the other conditions concern pivotal-player status or ECI share and Shift Factors). [e17][e19][e33]

### What if a constraint's shadow price would exceed the cap?

SCED's cost to resolve an additional MW is limited to the maximum Shadow Price, and per the IMM, when the marginal cost of relief exceeds the reliability cost of violating the constraint, the shadow price cap prevents additional dispatch costs and sets the constraint's shadow price, so the constraint may be violated rather than resolved at any price. [e15][e31]

## Open items

- No Protocol definition of "binding constraint" was found in np-02; the framing here comes from np-06 and the IMM.
- The IMM OCR copies give the annual share of time with a binding constraint only for 2021 (70%); later-year figures sit in chart bars that did not OCR into quotable numbers.
- The saved sources do not list the most costly constraints by year for 2024 and 2025 from the IMM in quotable form; the ERCOT top-10 list covers Oct 2024 to Sep 2025 only.
- The paragraph (7) mitigation conditions in Section 3.19.4 sit partly under a pending NPRR1182 box; the current and pending text were not reconciled here.
