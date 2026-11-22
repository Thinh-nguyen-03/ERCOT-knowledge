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

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Generic Transmission Constraint (GTC) · text copy line 1142

BEFORE: …(GSU) Transformer in a station with generation where the voltage is transformed from the voltage level of the generator terminals to a higher voltage. If the higher voltage is at or above 60 kV, the GSU may also be referred to as a Main Power Transformer (MPT). Generic Transmission Constraint (GTC) 
QUOTE: A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT's powerflow and contingency analysis applications.
AFTER:  Generic Transmission Limit (GTL) The value of the transmission flow limit associated with a GTC. Generation To Be Dispatched (GTBD) A dynamically calculated system total generation MW requirement used by Security-Constrained Economic Dispatch (SCED) for resource dispatch, calculated every four seco…

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

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 85 (OCR), Violated Constraints · text copy line 5430

BEFORE: …to drop precipitously to 64 constraint-hours in 2025, by far the lowest annual total. The next lowest year was 2016, with 271 constraint-hours of violations. This drop in the frequency of constraint violations continued despite the increase in the frequency and cost of congestion from 2024 to 2025. 
QUOTE: The sharp decline may be partly explained by the growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity.
AFTER:  2. Congestion Management by ESRs ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0. Conversely, when increasing supply at a parti…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive overview, congestion rent · text copy line 856

BEFORE: …ences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or "node" on the network. These differences in nodal prices provide efficient economic signals for generators and consumers to produce and consume at different locations. 
QUOTE: Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial right to this congestion rent accrues to holders of CRRs.
AFTER:  The annual cost of congestion in the day-ahead and real-time markets increased by 26% and 32%, respectively in 2025, reversing the previous 3-year trend of declining annual congestion costs. The main driver of this increase were: • The increase in natural gas prices, the fuel for the resources most…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(c) · text copy line 1590 · heading above: 6.5.7.1.13 Data Inputs and Outputs for the Real-Time Sequence and SCED

BEFORE: … Secure Area the following information: (a) Status of all breakers and switches used in the NSA except breakers and switches connecting Resources to the ERCOT Transmission Grid; (b) All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint; and 
QUOTE: (c) Shift Factors, including Private Use Network Settlement Points, by Resource Node, Hub, Load Zone, and DC Tie.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1239 and NPRR1249: Replace applicable portions of paragraph (3) above with the following upon system implement…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 85 (OCR), Congestion Management by ESRs · text copy line 5435

BEFORE: … growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity. 2. Congestion Management by ESRs 
QUOTE: ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand.
AFTER:  When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0. Conversely, when increasing supply at a particular location can resolve congestion, ESRs can discharge and earn higher prices that reflect the value of serving load subject to binding tra…

### e33 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (7)(a) · text copy line 8407 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …======================================================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM;
AFTER:  (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and (c) The Resource has a Shift Factor on the import side of the con…

## Statements to check (new or changed since the last audit)

- **Link to shadow-price** (cites e5): related Shadow Price: The shadow price is the marginal cost of redirecting flow around a binding constraint. [e5]
- **Link to shift-factor** (cites e2, e30): related Shift Factors: ERCOT posts the binding constraints and, in the same hourly MIS Secure Area posting, Shift Factors by Resource Node, Hub, Load Zone and DC Tie. [e2][e30]
- **Link to gtc** (cites e9): related GTC (Generic Transmission Constraint): A GTC is a constraint used to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow applications. [e9]
- **Link to congestion** (cites e4): related Transmission Congestion: When a constraint binds, prices differ across locations. [e4]
- **Link to sced** (cites e1, e6): used-in SCED (Security-Constrained Economic Dispatch): Constraints identified by NSA are activated in SCED, and each binding constraint's competitive designation is posted per SCED execution. [e1][e6]
- **Link to market-power-mitigation** (cites e6, e33) FLAG number-not-in-quote: 3.19: related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Each binding constraint is designated Competitive or Non-Competitive; a Non-Competitive determination is one condition for mitigation in SCED Step 2 (Protocol 3.19.4(7)(a)). [e6][e33]
- **Link to system-lambda** (cites e15): related System Lambda: The shadow price caps for network and power balance constraints are set under Section 22, Attachment P. [e15]
- **Link to ruc** (cites e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): Committing additional Generation Resources through RUC is one of the steps ERCOT may take if SCED does not resolve a security violation. [e14]
- **Link to crr** (cites e29): related CRR (Congestion Revenue Right): The IMM says congestion rent is based on locational price differences and that the financial right to it accrues to CRR holders. [e29]
- **Link to energy-storage-resource** (cites e32, e24): related Energy Storage Resource (ESR): The IMM says ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand, and that growing ESR participation may partly explain the fall in violated constraints. [e32][e24]

