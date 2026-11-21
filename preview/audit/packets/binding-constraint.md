# Audit packet: Binding Constraint (binding-constraint)

kind concept · domain congestion · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.11, paragraph (1) · text copy line 1470 · heading above: 6.5.7.1.11 Transmission Network and Power Balance Constraint Management

BEFORE: …COT System that contributed to each transmission security violation reported in paragraph (7)(a) above. Analysis should be made to understand the root cause and what steps could be taken to avoid a recurrence in the future. 6.5.7.1.11 Transmission Network and Power Balance Constraint Management (1) 
QUOTE: ERCOT may not allow any constraint (contingency and limiting Transmission Element pair) identified by NSA to be activated in SCED until it has verified that the contingency definition in NSA associated with the constraint is accurate and appropriate given the current operating state of the ERCOT Transmission Grid.
AFTER:  ERCOT shall continuously post to the MIS Secure Area all constraint contingencies in the NSA. ERCOT shall provide relevant constraint information, including, but not limited to, the contingency name as provided in the standard contingency list, whether or not the constraint is active in SCED, the o…

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(b) · text copy line 1588 · heading above: 6.5.7.1.13 Data Inputs and Outputs for the Real-Time Sequence and SCED

BEFORE: …s; (ii) Overloads; (iii) System security violations; and (iv) Base Points. (3) Every hour, ERCOT shall post on the MIS Secure Area the following information: (a) Status of all breakers and switches used in the NSA except breakers and switches connecting Resources to the ERCOT Transmission Grid; (b) 
QUOTE: All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint;
AFTER:  and (c) Shift Factors, including Private Use Network Settlement Points, by Resource Node, Hub, Load Zone, and DC Tie. +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Competitive Constraint · text copy line 1813

BEFORE: …-----------------+ Network Security Analysis A processor used by ERCOT to monitor Transmission Elements in the ERCOT Transmission Grid for limit violations and to verify Electrical Bus voltage limits to be within a percentage tolerance as outlined in the Operating Guides. Non-Competitive Constraint 
QUOTE: A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests.
AFTER:  Non-Frequency Responsive Capacity (NFRC) The telemetered portion of a Generation Resource's High Sustained Limit (HSL) that represents the sustainable non-Dispatched power augmentation capability from duct firing, inlet air cooling, auxiliary boilers, or other methods which does not immediately res…

### e4 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Day-Ahead Congestion · text copy line 5198

BEFORE: …nificant renewable generation, which are often far from load centers and can contribute to system stability concerns. C. Day-Ahead Congestion The day-ahead market produces financially binding schedules for supply, demand, and point-topoint (PTP) transactions that reflect transmission system limits. 
QUOTE: When these limits bind, congestion increases dispatch costs and causes energy prices to vary across locations in the network.
AFTER:  Planned transmission outages and forecasts for load and intermittent renewable generation influence congestion in the day-ahead market. These factors shape how market participants hedge their positions before real time. Figure 36 shows how the day-ahead market values congestion and highlights the r…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5349

BEFORE: … !(%""" RST8 JVO8W /V;8W <VOT8VN Z;VTT>?VNS @AHBCAZBa34OS !D#" !D"" !C#" !D%#"" !D%""" !C%#"" !C"" !C%""" !A#" !A%#"" !A"" !A%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""#A%C'(")*+,-("C.A%#*C/MC1-%%-("+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 1. Violated Constraints 
QUOTE: The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit.
AFTER:  Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price…

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (6) · text copy line 8396 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …n effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective. (6) 
QUOTE: Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour.
AFTER:  (7) Mitigation will be applied to a Resource in the SCED Step 2, as described in Section 6.5.7.3, Security Constrained Economic Dispatch, when all of the following conditions are met: +------------------------------------------------------------------------------------------------------------------…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Real-Time Congestion · text copy line 5277

BEFORE: …%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""#A%C'(")*+,-("C.A%#*C/MC1-%%-("+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 D. Real-Time Congestion The day-ahead market reflects the expected costs of congestion, but physical congestion occurs only in the real-time market. 
QUOTE: SCED manages power flows across the network as physical constraints become binding in real time.
AFTER:  Unexpected changes in system conditions between the day-ahead and real-time markets often lead to differences in congestion values. These changes include net load forecast errors, forced outages, and other deviations from expected conditions. Figure 37 summarizes monthly real-time congestion for 20…

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Generic Transmission Constraint (GTC) · text copy line 1142

BEFORE: …(GSU) Transformer in a station with generation where the voltage is transformed from the voltage level of the generator terminals to a higher voltage. If the higher voltage is at or above 60 kV, the GSU may also be referred to as a Main Power Transformer (MPT). Generic Transmission Constraint (GTC) 
QUOTE: A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT's powerflow and contingency analysis applications.
AFTER:  Generic Transmission Limit (GTL) The value of the transmission flow limit associated with a GTC. Generation To Be Dispatched (GTBD) A dynamically calculated system total generation MW requirement used by Security-Constrained Economic Dispatch (SCED) for resource dispatch, calculated every four seco…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5426

BEFORE: … these constraints. Figure 38 shows the distribution of violated constraints by overload percentage since 2021. Figure 38: Overload Distribution of Violated Constraints !"#$%C'(#%)*"HC$,'%,-'#./ &'#!! *+,-./M12.&)3 &'"!! &!3./+.&)3 &'!!! !3./+.)3 )3./+.&!3 %!! $!! #!! "!! ! "!"& "!"" "!"( "!"# "!") 
QUOTE: Figure 38 shows that the overall rate of violated transmission constraints continued to drop precipitously to 64 constraint-hours in 2025, by far the lowest annual total.
AFTER:  The next lowest year was 2016, with 271 constraint-hours of violations. This drop in the frequency of constraint violations continued despite the increase in the frequency and cost of congestion from 2024 to 2025. The sharp decline may be partly explained by the growing participation of energy stor…

### e11 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 88 (OCR), Types and Frequency of Constraints in 2024 · text copy line 5625

BEFORE: …ay, ERCOT also activates constraints based on the Real-Time Contingency Analysis (RTCA) process that runs on an ongoing basis. The RTCA evaluates network flows under many contingency scenarios and is used to determine when a constraint is at risk of being violated and needs to be activated in SCED. 
QUOTE: Constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit, and not binding when they do not require a redispatch of generation and have no effect on prices.
AFTER:  Figure 39 summarizes the frequency of active and binding constraints during 2024. The bars show the percentage of time (y-axis) at different load levels and annually (xaxis) with a binding or active constraint. The green line denotes the average number of constraints at different load levels. 20 90…

### e12 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 88 (OCR), Types and Frequency of Constraints in 2024 · text copy line 5620

BEFORE: …mission components were energized in the South Zone in 2024 that contributed to the decrease in intra-zonal congestion compared to 2023. 1. Types and Frequency of Constraints in 2024 There are thousands of transmission constraints associated with physical elements in the ERCOT transmission network. 
QUOTE: To make the dispatch problem solved by SCED more computationally tractable, ERCOT only activates a subset of these constraints at any given time. In addition to GTCs, the limits of which are set prior to the operating day, ERCOT also activates constraints based on the Real-Time Contingency Analysis (RTCA) process that runs on an ongoing basis.
AFTER:  The RTCA evaluates network flows under many contingency scenarios and is used to determine when a constraint is at risk of being violated and needs to be activated in SCED. Constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit,…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.10, paragraph (1)(a)-(b) · text copy line 1422 · heading above: 6.5.7.1.10 Network Security Analysis Processor and Security Violation Alarm

BEFORE: … analysis of all contingencies in the active list. For each contingency, ERCOT shall use the NSA processor to monitor the elements for limit violations. ERCOT shall use the NSA processor to verify Electrical Bus voltage limits to be within a percentage tolerance as outlined in the Operating Guides. 
QUOTE: Contingency security violations for transmission lines and transformers occur if: (a) The predicted post-contingency MVA exceeds 100% of the Emergency Rating after consideration of Dynamic Ratings; and (b) A RAP, AMP or RAS is not defined allowing relief within the time allowed by the security criteria as defined in Operating Guide Section 2.2.2, Security Criteria.
AFTER:  (2) When the NSA processor notifies ERCOT of a security violation, ERCOT shall immediately: (a) Initiate the process described in Section 6.5.7.1.11, Transmission Network and Power Balance Constraint Management; (b) Seek to determine what unforeseen change in system condition has arisen that has re…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.10, paragraph (3)(a)-(i) · text copy line 1436 · heading above: 6.5.7.1.10 Network Security Analysis Processor and Security Violation Alarm

BEFORE: …00% of the Emergency Rating for a duration of 30 minutes or more; and (c) Where possible, seek to reverse the action (e.g. initiating a transmission clearance that the system was not properly pre-dispatched for) that has led to a security violation until further preventative action(s) can be taken. 
QUOTE: (3) If SCED does not resolve a transmission security violation, ERCOT shall attempt to relieve the security violation by: (a) Confirming that pre-determined RAPs are properly modeled in the system; (b) Instructing Resources to follow Base Points from SCED if those Resources are not already doing so; (c) Instructing Resources to update the Resources Status in the COP from ONTEST to ON in order to provide more capacity to SCED; (d) Deploying Resource-Specific Non-Spin; (e) Committing additional Generation Resources through the Reliability Unit Commitment (RUC) process; (f) Removing conflicting non-cascading constraints from the SCED process; (g) Re-Dispatching generation or, in the case of an ESR, its output or consumption, by over-riding HDLs and LDLs; (h) Instructing TSPs to utilize Reactive Power devices to manage voltage; and (i) If all other mechanisms have failed, ERCOT may authorize the expedited use of a Temporary Outage Action Plan (TOAP) or Mitigation Plan.
AFTER:  (4) NSA must be capable of analyzing contingencies, including the effects of RASs, AMPs and RAPs modeled in the Network Operations Model. The NSA must fully integrate the evaluation and deployment of RASs, AMPs and RAPs and notify the ERCOT Operator of the application of these RASs, AMPs and RAPs t…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.11, paragraphs (2)-(3) · text copy line 1472 · heading above: 6.5.7.1.11 Transmission Network and Power Balance Constraint Management

BEFORE: … Area within five days, a report listing all constraints with pre-contingency or post-contingency flows which exceeded the Rating of the overloaded Transmission Element for at least 15 minutes consecutively that were not activated in SCED and an explanation of why each constraint was not activated. 
QUOTE: (2) Pursuant to Section 22, Attachment P, Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints, ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint. (3) Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint.
AFTER:  (4) If ERCOT determines that rating(s) in the Network Operations Model or configuration of the Transmission Facilities are not correct, then the TSP will provide the appropriate data submittals to ERCOT to correct the problem upon notification by ERCOT. +--------------------------------------------…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.10, paragraph (7)(a) · text copy line 1462 · heading above: 6.5.7.1.10 Network Security Analysis Processor and Security Violation Alarm

BEFORE: …iterations of the contingency study to gauge its impact and discard further study if the estimated result is inconsequential. (6) HDL or LDL overrides required to pre-posture for an expected Outage shall only be utilized until SCED is capable of managing the related constraint by economic dispatch. 
QUOTE: (7) ERCOT shall report monthly: (a) All security violations that were 125% or greater of the Emergency Rating for a single SCED interval or greater than 100% of the Emergency Rating for a duration of 30 minutes or more during the prior reporting month and the number of occurrences and congestion cost associated with each of the constraints causing the security violations on a rolling 12 month basis.
AFTER:  (b) Operating conditions on the ERCOT System that contributed to each transmission security violation reported in paragraph (7)(a) above. Analysis should be made to understand the root cause and what steps could be taken to avoid a recurrence in the future. 6.5.7.1.11 Transmission Network and Power…

### e17 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (2)(a)-(b) · text copy line 8373 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …---------------------------------------------------------------------------------------------------------------------------+ 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test (1) The SCED CCT uses current system conditions to evaluate the competitiveness of a constraint. 
QUOTE: (2) Before each SCED execution, CCT is performed for all active constraints in SCED. The SCED CCT shall classify a constraint as competitive for the current SCED execution if the constraint meets all of the following conditions: (a) The ECI is less than ECIT2 on the import side; (b) The constraint can be resolved by eliminating all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME. If the constraint cannot be resolved, then the DME will be marked as the pivotal player for resolving the constraint;
AFTER:  (c) There are negative Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that have an absolute value greater than or equal to SFP3; and +-----------------------------------------------------------------------------------------------------------------------------…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (5) · text copy line 8394 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …e ECI Effective Capacity on the import side for each DME and whether the DME is a pivotal player for the constraint. SCED will re-evaluate the competitiveness of the Non-Competitive Constraint starting with the first SCED interval of the next Operating Hour if the constraint remains active in SCED. 
QUOTE: (5) The Independent Market Monitor (IMM) may designate any constraint as a Competitive Constraint or a Non-Competitive Constraint. ERCOT shall provide notice describing any such designation by the IMM. The notice shall include an effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective.
AFTER:  (6) Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour. (7) Mitigation will be applied to a Resource in the SCED Step 2, as …

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, threshold table, ECIT2 row · text copy line 8309 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …an Entity to include in the ECI calculation 2% ECIT1 Maximum competitive threshold for ECI on the import side of a constraint for the Long-Term CCT process 2000 SFP2 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the Long-Term CCT process 2% 
QUOTE: ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300
AFTER:  SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2% DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10%…

### e20 · `nog-11` · tier 1 · ERCOT Nodal Operating Guides, Section 11: Constraint Management Plans and Remedial Action Schemes (current 2026)
locator: Section 11, paragraph (1) · text copy line 35 · heading above: 11.1 Introduction

BEFORE: …medial Action Plan 11-10 11.4.1 Remedial Action Plan Process 11-11 11.5 Mitigation Plan 11-12 11.6 Pre-Contingency Action Plans 11-13 11.6.1 Pre-Contingency Action Plan Process 11-14 11.7 Temporary Outage Action Plan 11-14 11 CONSTRAINT MANAGEMENT PLANS AND REMEDIAL ACTION SCHEMES 11.1 Introduction 
QUOTE: (1) Constraint Management Plans (CMPs) are developed in accordance to the guidelines set forth in the sections below, and are defined in Protocol Section 2.1, Definitions. CMPs include, but are not limited to the following: (a) Remedial Action Plans (RAPs) which are modeled in Network Security Analysis (NSA) where practicable; (b) Automatic Mitigation Plans (AMPs) which are modeled in NSA where practicable; (c) Pre-Contingency Action Plans (PCAPs); (d) Extended Action Plans (EAPs); (e) Temporary Outage Action Plans (TOAPs); and (f) Mitigation Plans.
AFTER:  (2) When developing CMPs, ERCOT shall first attempt to utilize the 15-Minute Rating of the impacted Transmission Facilities, where available, to develop RAPs such that the ERCOT Transmission Grid is utilized to the fullest extent. +-------------------------------------------------------------------…

### e21 · `nog-11` · tier 1 · ERCOT Nodal Operating Guides, Section 11: Constraint Management Plans and Remedial Action Schemes (current 2026)
locator: Section 11.2, paragraph (1) · text copy line 72 · heading above: 11.2 Remedial Action Schemes

BEFORE: …t to the Market Information System (MIS) Secure Area all CMPs and RASs and any unmodeled CMPs or RASs. (5) ERCOT is not required to provide notification to the market of any proposed TOAPs. (6) All submittals related to CMPs or RASs must be emailed to ras_cmp@ercot.com. 11.2 Remedial Action Schemes 
QUOTE: (1) Remedial Action Schemes (RASs) are designed to detect abnormal predetermined ERCOT System conditions and automatically take corrective actions to maintain a secure system. Any RAS proposed on or after June 24, 2020 may not be approved or implemented unless ERCOT has first determined that the RAS is necessary to avoid an actual or anticipated violation of transmission security criteria, as defined in Section 2.2.2, Security Criteria, that cannot be resolved through ERCOT market tools.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e22 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 89 (OCR), Types and Frequency of Constraints in 2021 · ocr copy line 3659, OCR page 89

BEFORE: …Real-Time Contingency Analysis (RTCA) that runs on an ongoing basis; and e GTCs that are determined by off-line studies, with limits determined prior to the operating day."* RTCA is the process that evaluates the resulting flows on the transmission system under many different contingency scenarios. 
QUOTE: A base-case constraint exists if the flow on a transmission element exceeds its normal rating. A thermal contingency constraint exists if the outage of a transmission element (i.e., a contingency) would result in a flow higher than the rating of an in- service element.
AFTER: '? Active transmission constraints are those that are passed by the operator to the 7 A GTC is a transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other con…

### e23 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 90 (OCR), Types and Frequency of Constraints in 2021 · text copy line 3710

BEFORE: …hen positive dispatch costs are incurred to maintain transmission flows below the constraint limit and "not binding" when they do not require a redispatch of generation and thus have no effect on prices. Our review of the active and binding constraints during 2021, Figure 40, shows the following: • 
QUOTE: The ERCOT system had at least one binding constraint 70% of the time in 2021, a decrease from 75% in 2020.
AFTER:  • Consistent with previous years, the average number of active constraints generally increased with increasing load level • On average, slightly more than ten constraints were identified for the higher load levels, up from approximately seven in 2020. Figure 40: Frequency of Binding and Active Cons…

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 85 (OCR), Violated Constraints · text copy line 5430

BEFORE: …to drop precipitously to 64 constraint-hours in 2025, by far the lowest annual total. The next lowest year was 2016, with 271 constraint-hours of violations. This drop in the frequency of constraint violations continued despite the increase in the frequency and cost of congestion from 2024 to 2025. 
QUOTE: The sharp decline may be partly explained by the growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity.
AFTER:  2. Congestion Management by ESRs ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0. Conversely, when increasing supply at a parti…

### e25 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: Recent Constraints, Top 10 constraints, Oct. 2024 to Sep. 2025 (slide 4) · text copy line 189

BEFORE: …ture. The role of the LTSA is to guide near-term planning decisions by providing a longer-term view of system reliability and economic needs. The GRRA assesses the system needs based on the resiliency criteria. 4 Map Monitored Element of Constraint Congestion Rent* 1 Koch Tap - Vealmoor 138kV $211M 
QUOTE: Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 West Texas Export Interface $127M
AFTER:  5 Longshore Switch - Consavvy Switch 345kV $102M 6 Laredo VFT North - Las Cruces 138kV $64M 7 Bell County - Salado Switch 138kV $64M 8 Knapp - Scurry Chevron 138kV $57M 9 Haine Drive - La Palma 138kV $54M 10 Polecat Creek Switch - Wrage Ranch Pod 138kV $52M Outage Related? Planned and Forced Outage…

### e26 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: Recent Constraints, footnote · text copy line 273

BEFORE: …ive - La Palma 138kV $54M 10 Polecat Creek Switch - Wrage Ranch Pod 138kV $52M Outage Related? Planned and Forced Outages Recent Constraints Congestion occurs when transmission constraints do not allow for the most efficient dispatch of generation to meet customer demand. Planned and Forced Outages 
QUOTE: *Congestion rent indicates areas of the system where economic transmission projects may be beneficial. It is not an indication of whether a project to reduce specific congestion would or would not meet the ERCOT economic planning criteria.
AFTER:  PUBLIC 5 Congestion Rent* Map Constraint 2027 Base* 1 West Texas Export Interface $130M 2 Houdini - W A Parish 345-kV Line $155M $5M 3 Bell County East Switch - Voss Lake 345-kV Line $112M - Projected Constraints 2030 Base* $147M Top 10 projected constraints on the ERCOT System for 2027 and 2030 Ba…

### e27 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 86 (OCR), Real-time Constraints and Congested Areas · text copy line 3844

BEFORE: …ande Valley Import, and East Texas constraints, all GTCs resulted from issues identified in the generation interconnection process. As more renewable resources and ESRs enter the ERCOT market, the benefits of these dynamic VSAT and TSAT models will grow. 2. Real-time Constraints and Congested Areas 
QUOTE: Our review of real-time congestion is based on its economic value, calculated by multiplying the shadow price of each constraint by the flow over the constraint.
AFTER:  The shadow price is the marginal cost of the redispatch necessary to manage the constraint and, therefore, the benefit of relieving the constraint. For this discussion, a congested area is identified by consolidating multiple real-time transmission constraints if the constraints are determined to b…

### e28 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 87 (OCR), GTC binding hours · text copy line 3835

BEFORE: …ng from 2011 to 2023. 64 Figure 33: GTC Binding Constraint Hours 64 Table A4: Generic Transmission Constraints in the Appendix shows the effective date for individual GTCs and the number of binding hours during 2022 and 2023. 54 | 2023 State of the Market Report / Transmission Congestion and CRRs / 
QUOTE: In 2023, there was a decrease in the GTC binding hours from 2022 and 2021, however they continued to be much higher than the binding hours in prior years.
AFTER:  ERCOT has been working on getting better data for the full range of inverter technologies, which will allow all GTC limits to be calculated in real time rather than using more conservative offline studies. This should result in less congestion and generation curtailment. Apart from the North to Hou…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive overview, congestion rent · text copy line 856

BEFORE: …ences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or "node" on the network. These differences in nodal prices provide efficient economic signals for generators and consumers to produce and consume at different locations. 
QUOTE: Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial right to this congestion rent accrues to holders of CRRs.
AFTER:  The annual cost of congestion in the day-ahead and real-time markets increased by 26% and 32%, respectively in 2025, reversing the previous 3-year trend of declining annual congestion costs. The main driver of this increase were: • The increase in natural gas prices, the fuel for the resources most…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e2, e1, e11, e4) FLAG number-not-in-quote: 2.1: "Binding constraint" does not have its own entry in the Protocol definitions (np-02, Section 2.1), although Section 6 refers to "binding transmission constraints". [e2] In ERCOT a constraint is a contingency and limiting Transmission Element pair that Network Security Analysis identifies and that is activated in SCED. [e1] The IMM says constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit, and not binding when they require no redispatch and have no effect on prices. [e11] When these limits bind, congestion raises dispatch costs and makes energy prices differ by location. [e4]
- **How it works #1** (cites e7, e12, e22) FLAG number-not-in-quote: 2021: **Where constraints come from.** The IMM notes SCED manages flows as physical constraints become binding in real time. [e7] Thousands of constraints exist on physical network elements, and ERCOT activates only a subset in SCED at a time; besides GTCs, whose limits are set before the operating day, ERCOT activates constraints based on the Real-Time Contingency Analysis process that runs continuously (IMM description). [e12] A base-case constraint exists when flow on an element exceeds its normal rating; a thermal contingency constraint exists when the outage of an element would push flow above the rating of an in-service element (IMM, 2021). [e22]
- **How it works #2** (cites e13, e1): **Security violation and the contingency test.** In the Protocols, a contingency security violation on a line or transformer occurs if the predicted post-contingency MVA exceeds 100% of the Emergency Rating after Dynamic Ratings and no RAP, AMP or RAS provides relief within the time the security criteria allow. [e13] ERCOT may not activate an NSA-identified constraint in SCED until it has verified that the contingency definition is accurate for the current operating state. [e1]
- **How it works #3** (cites e14, e20, e21): **If SCED cannot solve it.** ERCOT may confirm RAPs are modeled, instruct Resources to follow Base Points, deploy Resource-Specific Non-Spin, commit more Generation through RUC, remove conflicting non-cascading constraints, override HDLs and LDLs, instruct TSPs to use reactive devices, and, if everything else has failed, authorize expedited use of a Temporary Outage Action Plan or Mitigation Plan. [e14] Constraint Management Plans include RAPs, AMPs, PCAPs, EAPs, TOAPs and Mitigation Plans. [e20] A Remedial Action Scheme detects predetermined abnormal conditions and takes corrective action automatically; one proposed on or after June 24, 2020 may not be approved unless ERCOT first determines it is necessary to avoid an actual or anticipated violation that market tools cannot resolve. [e21]
- **How it works #4** (cites e5, e15): **Binding versus violated, and the cap.** A constraint is violated when market dispatch flows exceed its transmission limit; the shadow price is the marginal cost of redirecting flow around the binding constraint. [e5] ERCOT sets a maximum Shadow Price for each network constraint under Section 22, Attachment P, so the cost SCED calculates to resolve an additional MW of congestion on it is limited to that maximum. [e15]
- **How it works #5** (cites e17, e19, e18, e6, e3): **Competitive or non-competitive.** Before each SCED execution the SCED Constraint Competitiveness Test is run on every active constraint; it requires, among other conditions, an Element Competitiveness Index below the import-side threshold and that the constraint could be resolved by eliminating a Resource's capacity, otherwise that Entity is marked pivotal. [e17] The SCED ECI threshold (ECIT2) is 2300. [e19] The IMM may designate any constraint as competitive or non-competitive, and its designation overrides the SCED test for the effective dates. [e18] Each binding constraint's designation is posted hourly. [e6] A non-competitive constraint is one not found competitive under the Section 3.19 tests. [e3]
- **How it works #6** (cites e16): **Reporting.** ERCOT must report monthly security violations of 125% or more of the Emergency Rating for a single SCED interval, or above 100% for 30 minutes or more, with occurrences and congestion cost per constraint on a rolling 12-month basis. [e16]
- **ERCOT context #1** (cites e23, e27, e25, e26, e28) FLAG number-not-in-quote: $211: Congestion is common: at least one constraint was binding during 70% of 2021, down from 75% in 2020. [e23] The IMM values real-time congestion as the shadow price of each constraint times flow over the constraint. [e27] ERCOT's December 2025 report lists the top constraints by real-time congestion rent for October 2024 to September 2025; the list starts with Koch Tap - Vealmoor 138kV at $211M, Hargrove - Twin Buttes 138kV at $176M, Odessa EHV Switch - Yarbrough Sub 138kV at $151M and the West Texas Export Interface at $127M. [e25] ERCOT cautions that congestion rent indicates where economic transmission projects may be beneficial, not whether a project would pass the economic planning criteria. [e26] GTC binding hours fell in 2023 from 2022 and 2021 but stayed far above earlier years, according to the IMM. [e28]
- **ERCOT context #2** (cites e8, e24): The IMM reports that violated transmission constraints fell to 64 constraint-hours in 2025, the lowest annual total, and says growing ESR participation in real-time may partly explain it. [e8][e24]
- **Key facts #4** (cites e13): - Security violation threshold: post-contingency MVA above 100% of the Emergency Rating with no RAP, AMP or RAS relief in time. [e13]
- **Key facts #5** (cites e6, e19): - Competitive or non-competitive status is posted for each binding constraint each hour; the SCED ECI threshold is 2300. [e6][e19]
- **Key facts #7** (cites e25) FLAG number-not-in-quote: $211: - Top real-time constraint by congestion rent, Oct 2024 to Sep 2025: Koch Tap - Vealmoor 138kV, $211M. [e25]
- **Say it like this #1** (cites e4, e5): (Guidance) When a transmission limit binds, congestion raises dispatch costs and energy prices differ by location. The shadow price tells you what one more MW of relief costs. [e4][e5]
- **Common confusion #1** (cites e5, e11): Binding does not mean violated: a violation means market dispatch flows exceed the transmission limit. [e5] Also, an active constraint is not necessarily binding: it binds only when it forces redispatch. [e11]
- **Questions #6** (cites e12, e11): Active constraints are those ERCOT passes into SCED; they bind only when dispatch costs are incurred to keep flow under the limit. [e12][e11]
- **Questions #8** (cites e1): The Protocol says ERCOT may not activate an NSA-identified constraint until it has verified the contingency definition is accurate and appropriate for the current operating state. [e1]
- **Questions #10** (cites e14): ERCOT can use manual tools including RUC commitment, Non-Spin deployment, HDL/LDL overrides and, as a last resort, a TOAP or Mitigation Plan. [e14]
- **Questions #12** (cites e17, e19): If it fails the SCED test (for example ECI at or above the 2300 threshold, or a pivotal Entity), it is Non-Competitive, and non-competitive status is one condition for applying mitigation in SCED Step 2. [e17][e19]
- **Questions #14** (cites e15, e5): SCED's cost to resolve an additional MW is limited to the maximum Shadow Price, so the constraint may be violated rather than resolved at any price. [e15][e5]
- **Link to shadow-price** (cites e5): related Shadow Price: The shadow price is the marginal cost of redirecting flow around a binding constraint. [e5]
- **Link to shift-factor** (cites e2): related Shift Factors: ERCOT posts shift factors with the binding constraints each hour. [e2]
- **Link to gtc** (cites e9): related GTC (Generic Transmission Constraint): A GTC is a constraint used to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow applications. [e9]
- **Link to congestion** (cites e4): related Transmission Congestion: When a constraint binds, prices differ across locations. [e4]
- **Link to sced** (cites e1, e6): used-in SCED (Security-Constrained Economic Dispatch): Constraints identified by NSA are activated in SCED, and each binding constraint's competitive designation is posted per SCED execution. [e1][e6]
- **Link to market-power-mitigation** (cites e6): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Each binding constraint is designated Competitive or Non-Competitive; how that feeds mitigation was not sourced here. [e6]
- **Link to system-lambda** (cites e15): related System Lambda: The shadow price caps for network and power balance constraints are set under Section 22, Attachment P. [e15]
- **Link to ruc** (cites e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): Committing additional Generation Resources through RUC is one of the steps ERCOT may take if SCED does not resolve a security violation. [e14]
- **Link to crr** (cites e29): related CRR (Congestion Revenue Right): Congestion rent from binding constraints funds CRRs; the IMM says the financial right to congestion rent accrues to CRR holders. [e29]
- **Link to energy-storage-resource** (cites e24): related Energy Storage Resource (ESR): The IMM says ESRs can resolve congestion by charging or discharging and may explain the fall in violated constraints. [e24]

