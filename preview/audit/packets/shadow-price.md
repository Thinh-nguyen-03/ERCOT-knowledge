# Audit packet: Shadow Price (shadow-price)

kind metric · domain congestion · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (b) · text copy line 2238

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (b) 
QUOTE: The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints.
AFTER:  The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Cu…

### e4 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5349

BEFORE: … !(%""" RST8 JVO8W /V;8W <VOT8VN Z;VTT>?VNS @AHBCAZBa34OS !D#" !D"" !C#" !D%#"" !D%""" !C%#"" !C"" !C%""" !A#" !A%#"" !A"" !A%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""#A%C'(")*+,-("C.A%#*C/MC1-%%-("+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 1. Violated Constraints 
QUOTE: The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit.
AFTER:  Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints, 2025 shadow price caps · text copy line 5379

BEFORE: …t locations that affect the violated constraint. The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • 
QUOTE: ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW.
AFTER:  See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommen…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Day-Ahead Congestion · text copy line 5204

BEFORE: …s for load and intermittent renewable generation influence congestion in the day-ahead market. These factors shape how market participants hedge their positions before real time. Figure 36 shows how the day-ahead market values congestion and highlights the role of GTCs in managing system stability. 
QUOTE: It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost.
AFTER:  Figure 36 presents congestion values within and across zones, including congestion linked to GTCs. It shows that day-ahead congestion increased by 26% from 2024 to 2025, ending the recent trend of declining annual congestion cost. Congestion costs increased in all four zones, across zones, and for …

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5351

BEFORE: …+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 1. Violated Constraints The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit. 
QUOTE: Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint.
AFTER:  The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • ERCOT treats GTCs as base-case stability constra…

### e10 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 1, Purpose · text copy line 13

BEFORE: …t Management, requires the Public Utility Commission of Texas (PUCT) to approve ERCOT's methodology for establishing caps on the Shadow Prices for transmission constraints and the Power Balance constraint. Additionally, PUCT must also approve the values (in $/MWh) for each of the Shadow Price caps. 
QUOTE: The effect of the Shadow Price cap for transmission network constraints is to limit the cost calculated by the Security-Constrained Economic Dispatch (SCED) optimization to resolve an additional MW of congestion on a transmission network constraint to the designated maximum Shadow Price for that transmission network constraint. The effect of the Shadow Price cap for the Power Balance Constraint is to limit the cost calculated by the SCED optimization when the instantaneous amount of generation to be dispatched does not equal the instantaneous demand of the ERCOT system. In this case, the cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint, which is also referred to as the Power Balance Penalty. The maximum Shadow Prices for the transmission network constraints and the power balance constraint directly determine the Locational Marginal Prices (LMPs) for the ERCOT Real-Time Market (RTM) in the cases of constraint violations.
AFTER:  This Attachment describes: - the PUCT-approved methodology that the ERCOT staff will use for determining the maximum system-wide Shadow Prices for transmission network constraints and for the power balance constraint, and - the PUCT-approved Shadow Price caps and their effective date. 2. Background…

### e12 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 2, Background Discussion · text copy line 25

BEFORE: …ork as specified in the transmission constraint input set. The term Shadow Price is used in the context of individual constraints, whether a transmission network constraints or power balance constraint. Consistent with the definition of the Shadow Price, in a minimization problem, such as the SCED, 
QUOTE: the Shadow Prices for the transmission constraints are different for each transmission constraint and they are positive $/MW amounts defined as increase of the system dispatch costs if a transmission line limit is decreased by one MW. The Shadow Price for the Power Balance constraint represents system costs for serving the last MW of load.
AFTER:  The Power Balance Penalty can be either positive (if the system requires additional generation) or negative (if the system requires a reduction in generation). If a constraint is not binding, meaning the constraint has excess capability under the given system conditions, the Shadow Price of the con…

### e14 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 35 · heading above: 3.1 Congestion LMP Component

BEFORE: …e value applicable to all constraints, or may be values unique to subsets of the full constraint set. For the Power Balance constraint, the Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component 
QUOTE: The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line.
AFTER:  Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of El…

### e15 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 49 · heading above: 3.1 Congestion LMP Component

BEFORE: …ows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. 
QUOTE: Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive.
AFTER:  The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at …

### e16 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component · text copy line 51 · heading above: 3.1 Congestion LMP Component

BEFORE: …w Price for transmission line. Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. 
QUOTE: The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion.
AFTER:  Note that only marginal units (i.e. units that are able to move, not those dispatched at min/max dispatch limits to resolve other constraints or to provide energy to the system) can participate in resolving network congestion and determining the System Lambda for a particular iteration of SCED. The…

### e17 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.2, Network Congestion Efficiency · text copy line 85 · heading above: 3.2 Network Congestion Efficiency

BEFORE: …d (10%) are not efficient in network congestion. The LMP congestion component is the main incentive controlling generating unit dispatch. It is determined by Shift Factors and Shadow Prices for transmission constraints: $\Delta LMP_{EB}^{cong} = \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$. 
QUOTE: Generating units with small Shift Factors (i.e. below Shift Factor threshold) will not be as effective in resolving constraints as will generation units with higher shift factors on the constraint. If there are no efficient generating units then the Shadow Price must be increased to get enough contribution from inefficient units. Therefore, high Shadow Prices indicate inefficient congestion management.
AFTER:  The maximal value of LMP congestion component ΔLMP_(max)^(cong) directly limits the transmission congestion costs: $C_{\cos t}^{cong} = \sum_{unit}^{\sum}{\Delta LMP_{\max}^{cong_{unit}^{opt}}}$. The efficiency of a generating unit contribution can be determined by maximal value of LMP congestion c…

### e23 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.5.1, operational steps once the cap is reached · text copy line 187 · heading above: 3.5.1 Generic Transmission Constraint Shadow Price Cap in SCED Supporting Analysis

BEFORE: …the nodal system to assign constraint shadow price caps and power balance penalty factor values that achieve the desired reliability and efficiency objectives and ensure that all LMPs remain within the bounds of the RTSWCAPs, or even the effective Value of Lost Load (VOLL), under all circumstances. 
QUOTE: Operationally once ERCOT reaches the shadow price cap, ERCOT may use the following method to manage congestion. Steps that may be taken by ERCOT operations to resolve congestion when the transmission constraint is violated in SCED after the Shadow Price reaches the shadow price cap include: - Formulating a mitigation plan which may include - Transmission reconfiguration (switching) - Load rollover to adjacent feeders - Load shed plans - Redistribution of ancillary services to increase the capacity available within a particular area. - Commitment of additional units.
AFTER:  - Re-dispatching generation through over-riding High Dispatch Limit (HDL) and Low Dispatch Limit (LDL) in accordance with paragraph (3)(g) of Section 6.5.7.1.10, Network Security Analysis Processor and Security Violation Alarm. 3.6 Methodology for Setting Transmission Shadow Price Caps for Irresolv…

### e25 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 3.6.2 · text copy line 227 · heading above: 3.6.2 Methodology for Setting the Constraint Shadow Price Cap for a Constraint that is Irresolvable in SCED

BEFORE: …rigger for Modification of the Shadow Price Cap for a Constraint that is Consistently Irresolvable in SCED, and the Shadow Price Cap for any constraint that has the same overloaded transmission element and direction as a constraint that has met the trigger conditions, will be determined as follows. 
QUOTE: The Shadow Price Cap on the constraint that has met the trigger conditions described in Section 3.6.1, will be set to the minimum of E or F as follows: E. The value of the Generic Shadow Price Cap as determined in Section 3.5, Generic Values for the Transmission Network System-Wide Shadow Price Caps in SCED, and F. The Maximum of the either the largest value of the Mitigated Offer Cap (MOC) for Resource C, as determined above, divided by the absolute value of its shift factor impact on the constraint or $2000 per MW.
AFTER:  This calculation is performed one time in the Operating Day during which the trigger conditions described in Section 3.6.1 have been met and, subject to the value of the constraint net margin described below, this Shadow Price Cap will remain in effect for the shorter of the remainder of the calend…

### e32 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Section 4.1, The Power Balance Penalty · text copy line 295 · heading above: 4.1 The Power Balance Penalty

BEFORE: …ation Resources and ESRs becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and ESRs and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation. 
QUOTE: In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh.
AFTER:  Appendix 1: Day-Ahead Market Optimization Control Parameters The purpose of the Day-Ahead Market (DAM) is to economically co-optimize energy and Ancillary Service by simultaneously clearing offers and bids submitted by the Market Participants to maximize social welfare while observing the transmiss…

### e37 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (Dec. 5, 2025 version), Appendix 1, Section 1.2 · text copy line 360 · heading above: 1.2 Network Transmission Penalty Factors

BEFORE: …level, the security constraints are relaxed before the base case constraints. Finally, the Non-thermal (generic constraint) Penalty Factor assigns these constraints the same priority level in the optimization as the 345 kV security constraints making both less than the 345 kV base case constraints. 
QUOTE: The values of the Network Transmission Penalty Factors chosen to enforce the Network Transmission Constraints are considerably higher in DAM when compared to the SCED (Network Transmission Shadow Price Caps) since the DAM is a unit commitment problem and for it to clear reasonable offers and bids, the Network Transmission Penalty Factors need to represent the higher costs associated with a unit start up and generation at minimum energy. The SCED is an economic dispatch problem and hence for it to dispatch reasonable offers; the penalties need only be in the order of energy offer cost.
AFTER:  [1] A distributed load reference bus is assumed in this attachent, and all shift factor values refer to the flow on a constraint (either pre- or post-contingency) assuming an injection at the location in question and a withdrawal at the reference bus.…

## Statements to check (new or changed since the last audit)

- **How it works #9** (cites e14, e10, e32) FLAG number-not-in-quote: 2025: **Power balance cap.** For the power balance constraint, the shadow price is System Lambda (which Attachment P labels the shadow price of power balance) and the maximum Shadow Price is also referred to as the Power Balance Penalty. [e14][e10] In the December 5, 2025 document the under-generation penalty is a single value equal to the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh, and the over-generation penalty is -$250/MWh. [e32]
- **Formula #1** (cites e14, e15, e16, e17): The Attachment P LMP at an Electrical Bus is System Lambda minus the sum, over constraints, of the bus's shift factor times the constraint's shadow price. [e14] Variables: LMP_EB is the LMP at electrical bus EB; lambda is System Lambda, the shadow price of power balance; SF is the shift factor of that bus for the line; SP is the line's shadow price. [e14] Shadow prices of congested lines are positive and otherwise zero, and shift factors are negative on one side of a line and positive on the other. [e15] The congestion component of the bus LMP is the negative of the sum of shift factor times shadow price, so it can be positive or negative; it is the price incentive for units at that bus to raise or lower output to manage congestion. [e16] Attachment P also notes that generating units with small shift factors are less effective at resolving constraints, so if no efficient units exist the shadow price must rise, which it says means high shadow prices indicate inefficient congestion management. [e17]
- **Formula #2** (cites e16) FLAG number-not-in-quote: $2,000, 0.5, $1,000: Worked illustration (the knowledge base's own arithmetic on an assumed example, not a quote): with a $2,000/MW shadow price on one constraint and no other constraints, a bus with shift factor -0.5 gets a congestion component of +$1,000/MWh under the formula above. [e16]
- **Questions #6** (cites e14, e7): The bus LMP is System Lambda minus the sum of shift factor times shadow price, and the IMM values day-ahead congestion as flow times shadow price. [e14][e7]
- **Questions #14** (cites e14, e12, e10): System Lambda is the shadow price of the power balance constraint, which represents system costs for serving the last MW of load; its maximum is the Power Balance Penalty. [e14][e12][e10]
- **Link to binding-constraint** (cites e4): related Binding Constraint: A shadow price is the marginal cost of redirecting flow around a binding constraint. [e4]
- **Link to gtc** (cites e6) FLAG number-not-in-quote: 2025: related GTC (Generic Transmission Constraint): ERCOT treats GTCs as base-case stability constraints with a shadow price cap of $5,251 per MW in 2025. [e6]
- **Link to sced** (cites e3): used-in SCED (Security-Constrained Economic Dispatch): SCED produces Shadow Prices along with Base Points and LMPs. [e3]
- **Link to congestion** (cites e7): determines Transmission Congestion: The IMM's Figure 36 calculates day-ahead congestion values as flow over each constraint times its shadow price. [e7]
- **Link to lmp** (cites e8): determines LMP (Locational Marginal Price): The shadow price set for a violated constraint determines congestion prices at the locations that affect it. [e8]
- **Link to system-lambda** (cites e14, e10): related System Lambda: System Lambda is the shadow price of the power balance constraint; its maximum is the Power Balance Penalty. [e14][e10]
- **Link to offer-cap** (cites e32): related Offer Caps (HCAP / LCAP / SWCAP): The under-generation Power Balance Penalty is set from VOLL plus the effective RTSWCAP plus a fixed adder. [e32]
- **Link to market-power-mitigation** (cites e25): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The cap for an irresolvable constraint is derived from the Mitigated Offer Cap of a reference Resource. [e25]
- **Link to ruc** (cites e23): related RUC (Reliability Unit Commitment: DRUC/HRUC): Committing additional units is one step ERCOT may take once a shadow price cap is reached. [e23]
- **Link to dam** (cites e37): related Day-Ahead Market (DAM): DAM uses much higher network penalty factors than SCED caps because DAM is a unit commitment problem. [e37]

