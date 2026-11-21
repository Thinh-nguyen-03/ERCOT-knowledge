---
id: shadow-price
name: Shadow Price
aliases:
- shadow price
- constraint shadow price
- maximum shadow price
- shadow price cap
kind: metric
domain: congestion
level: 1
lenses:
- analyst
- congestion
- trading
as_of: '2026-11-21'
links:
- to: binding-constraint
  type: related
  note: A shadow price is the marginal cost of redirecting flow around a binding constraint. [e4]
- to: shift-factor
  type: related
  note: How shift factors combine with the shadow price was not sourced in this topic; see the shift-factor topic.
- to: gtc
  type: related
  note: ERCOT treats GTCs as base-case stability constraints with a shadow price cap of $5,251 per MW in 2025. [e6]
- to: sced
  type: used-in
  note: SCED produces Shadow Prices along with Base Points and LMPs. [e3]
- to: congestion
  type: determines
  note: The IMM's Figure 36 calculates day-ahead congestion values as flow over each constraint times its shadow price. [e7]
- to: lmp
  type: determines
  note: The shadow price set for a violated constraint determines congestion prices at the locations that affect it. [e8]
- to: system-lambda
  type: related
  note: System Lambda is the shadow price of the power balance constraint; its cap is the Power Balance Penalty. [e14][e32]
- to: offer-cap
  type: related
  note: The under-generation Power Balance Penalty is set from VOLL plus the effective RTSWCAP plus a fixed adder. [e32]
- to: market-power-mitigation
  type: related
  note: The cap for an irresolvable constraint is derived from the Mitigated Offer Cap of a reference Resource. [e25]
- to: ruc
  type: related
  note: Committing additional units is one step ERCOT may take once a shadow price cap is reached. [e23]
- to: dam
  type: related
  note: DAM uses much higher network penalty factors than SCED caps because DAM is a unit commitment problem. [e37]
depth: deep
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Shadow Price"
    quote: "A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.1.11, paragraphs (2)-(3)"
    quote: "ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.3, paragraph (b)"
    quote: "The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints."
  - id: e4
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, discussion of NPRR 1230"
    quote: "At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommendation 2023-1. The higher shadow price cap allows SCED to produce more expensive dispatch solutions to avoid violating these constraints."
  - id: e6
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints, 2025 shadow price caps"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost."
  - id: e9
    source: np-06
    locator: "Section 6.5.7.1.11, paragraph (3)"
    quote: "Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint."
  - id: e8
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint."
  - id: e10
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 1, Purpose"
    quote: "The effect of the Shadow Price cap for transmission network constraints is to limit the cost calculated by the Security-Constrained Economic Dispatch (SCED) optimization to resolve an additional MW of congestion on a transmission network constraint to the designated maximum Shadow Price for that transmission network constraint. The effect of the Shadow Price cap for the Power Balance Constraint is to limit the cost calculated by the SCED optimization when the instantaneous amount of generation to be dispatched does not equal the instantaneous demand of the ERCOT system. In this case, the cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint, which is also referred to as the Power Balance Penalty. The maximum Shadow Prices for the transmission network constraints and the power balance constraint directly determine the Locational Marginal Prices (LMPs) for the ERCOT Real-Time Market (RTM) in the cases of constraint violations."
  - id: e11
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 1, Purpose"
    quote: "Section 6.5.7.1.11, Transmission Network and Power Balance Constraint Management, requires the Public Utility Commission of Texas (PUCT) to approve ERCOT’s methodology for establishing caps on the Shadow Prices for transmission constraints and the Power Balance constraint. Additionally, PUCT must also approve the values (in $/MWh) for each of the Shadow Price caps."
  - id: e12
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 2, Background Discussion"
    quote: "the Shadow Prices for the transmission constraints are different for each transmission constraint and they are positive $/MW amounts defined as increase of the system dispatch costs if a transmission line limit is decreased by one MW. The Shadow Price for the Power Balance constraint represents system costs for serving the last MW of load."
  - id: e13
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 2, Background Discussion"
    quote: "If a constraint is not binding, meaning the constraint has excess capability under the given system conditions, the Shadow Price of the constraint is $0.00/MWh. On the other hand, if the constraint is binding, meaning it is limiting because the system conditions are such that the constraint limit is exactly met by the SCED selected dispatch pattern, the constraint Shadow Price is a non-zero $/MW value and when the maximal Shadow Price (i.e. the Shadow Price cap) is reached the constraint will be violated without further increases in the constraint Shadow Price."
  - id: e14
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \\lambda - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line."
  - id: e15
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive."
  - id: e16
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.1, Congestion LMP Component"
    quote: "The congestion component of Electrical Bus LMP is: $$\\Delta LMP_{EB}^{cong} = - \\sum_{line}^{}{SF_{EB}^{line} \\cdot SP_{\\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion."
  - id: e17
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.2, Network Congestion Efficiency"
    quote: "Generating units with small Shift Factors (i.e. below Shift Factor threshold) will not be as effective in resolving constraints as will generation units with higher shift factors on the constraint. If there are no efficient generating units then the Shadow Price must be increased to get enough contribution from inefficient units. Therefore, high Shadow Prices indicate inefficient congestion management."
  - id: e18
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5, Generic Values"
    quote: "The Generic Transmission Shadow Price Caps noted below will be used in SCED unless ERCOT determines that a constraint is irresolvable by SCED. The methodology for determining and resolving an insecure state within SCED (i.e. SCED Irresolvable) is defined in Section 6.5.7.1.10, Network Security Analysis Processor and Security Violation Alarm, whereas the subsequent trigger condition for the determination of that constraint’s Shadow Price Cap is described in Section 3.6, Methodology for Setting Transmission Shadow Price Caps for Irresolvable Constraints in SCED."
  - id: e19
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5, Generic Transmission Constraint Shadow Price Caps in SCED"
    quote: "Base Case/Voltage Violation: $5,251/MW - N-1 Constraint Violation - Greater than 200 kV: $4,500/MW - 100 kV to 200 kV: $3,500/MW - Less than 100 kV: $2,800/MW"
  - id: e20
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5.1, supporting analysis"
    quote: "For example, with a shift factor difference of the marginal units of just 2%, the maximum offer price difference of the marginal units that will be deployed to resolve the constraint is $56, $70, $90 and $105.02/MWh for constraint shadow price cap values of $2,800, $3,500, $4,500 and $5,251/MW, respectively."
  - id: e21
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5.1, supporting analysis"
    quote: "However, it is not possible in the nodal design to establish constraint shadow price caps at a level that will always accept an offer at RTSWCAP and still produce pricing outcomes that remain within reasonable bounds of expected scarcity pricing outcomes. For example, taking the case above where the shift factor difference of the marginal units is just 2%, a constraint shadow price cap of $100,000/MW would be required to deploy $2,000/MWh offers to resolve the congestion (assuming an offer price of zero for the marginal constrained-down unit)."
  - id: e22
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5.1, supporting analysis"
    quote: "The LMP at an individual node, hub or load zone can exceed the RTSWCAP in some circumstances, even ignoring the impacts of co-optimization of energy and Ancillary Services. This is most likely to occur when there are one or more irresolvable constraints on the system and when overall dispatchable supply on the system is tight."
  - id: e23
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.5.1, operational steps once the cap is reached"
    quote: "Operationally once ERCOT reaches the shadow price cap, ERCOT may use the following method to manage congestion. Steps that may be taken by ERCOT operations to resolve congestion when the transmission constraint is violated in SCED after the Shadow Price reaches the shadow price cap include: - Formulating a mitigation plan which may include - Transmission reconfiguration (switching) - Load rollover to adjacent feeders - Load shed plans - Redistribution of ancillary services to increase the capacity available within a particular area. - Commitment of additional units."
  - id: e24
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6.1, Trigger"
    quote: "ERCOT shall modify the Shadow Price Cap for a transmission network constraint that is consistently irresolvable by SCED if either of the following two conditions are true. Intervals with manual overrides performed as a result of SCED not resolving the congestion, shall be included: A. A constraint violation is not resolved by the SCED dispatch or overridden for more than two consecutive hours on more than 4 consecutive Operating Days; or B. A constraint violation is not resolved by the SCED dispatch for more than a total of 20 hours in a rolling thirty-day period."
  - id: e25
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6.2"
    quote: "The Shadow Price Cap on the constraint that has met the trigger conditions described in Section 3.6.1, will be set to the minimum of E or F as follows: E. The value of the Generic Shadow Price Cap as determined in Section 3.5, Generic Values for the Transmission Network System-Wide Shadow Price Caps in SCED, and F. The Maximum of the either the largest value of the Mitigated Offer Cap (MOC) for Resource C, as determined above, divided by the absolute value of its shift factor impact on the constraint or $2000 per MW."
  - id: e26
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6.2"
    quote: "When the value of a constraint that has met the trigger conditions described in Section 3.6.1 accumulates a net margin, as determined in Section 3.6.3, The Constraint Net Margin Calculation for Constraints that Have Met the Trigger Conditions in Section 3.6.1, below, that exceeds $95,000/MW at any time during the remainder of the calendar year following the determination that the constraint is irresolvable by SCED, the Shadow Price Cap for this, and for all constraints that have the same overloaded transmission element and direction as the constraint in the next Operating Day will be set to the minimum of either $2,000/MWh or G, below, for the remainder of the calendar year:"
  - id: e27
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6.3, items 2-3"
    quote: "For these, ERCOT will calculate a constraint net margin in $/MW equal to the running sum of ¼ times the Maximum of either zero or that constraint’s (net margin reference Settlement Point Price – the POC) for all Real-Time Settlement Intervals in the current calendar year during which the constraint is binding (i.e. the constraint net margin calculation starts with the first operating day in the current calendar year during which the constraint meets the trigger conditions described in Section 3.6.1). 3. The Proxy Operating Cost (POC) in $/MWh used in step 2 for each of these constraints equals 10 times the Fuel Index Price (FIP) as defined in Section 2, Definitions and Acronyms, for the Business Day previous to the current Operating Day."
  - id: e28
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6.2"
    quote: "The Independent Market Monitor (IMM) may initiate re-evaluation of the maximum Shadow Price of the constraint if it is identified that the constraint can be resolvable. This will reset the constraint net margin calculation."
  - id: e29
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.6, notice"
    quote: "ERCOT shall provide the market 30 days notice before deeming the constraint resolvable by SCED."
  - id: e30
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 3.7, IROL"
    quote: "Upon implementation of an Interconnection Reliability Operating Limit (IROL), the shadow price cap of an IROL shall be set by ERCOT to A, below. If ERCOT, in its sole discretion, determines that A, below, is insufficient for SCED to manage an IROL, ERCOT shall use B, below, to determine the shadow price cap: A. The value of the Generic Transmission Shadow Price Cap for Base Case constraints, as set in subsection 3.5, Generic Values for the Transmission Network System-Wide Shadow Price Caps in SCED, above; or B. The power balance penalty price minus the mitigated offer floor for Resource H, as determined below, divided by Resource H’s Shift Factor impact to the constraint."
  - id: e31
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 4.1, The Power Balance Penalty"
    quote: "The objective function for SCED is the sum of four components: (1) the cost of dispatching generation; (2) the cost of procuring Ancillary Services; (3) the penalty for violating Power Balance constraint; and (4) the penalty for violating network transmission constraints."
  - id: e32
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Section 4.1, The Power Balance Penalty"
    quote: "In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e33
    source: np-22p
    locator: "Attachment P (April 1, 2025 version), Section 4.1 (pre-RTC text)"
    quote: "In the ERCOT design, SCED implements the Power Balance Penalty by a step function with up to 10 (Violation MW; Penalty $/MW) pairs. This curve determines the maximum System Lambda for a given amount of the Power Balance Constraint violation. The following section describes the factors that ERCOT considered in developing the amount of the Power Balance Penalty in $/MWh of violation and provides the resulting Power Balance Penalty Curve."
  - id: e34
    source: np-22p
    locator: "Attachment P (April 1, 2025 version), Section 4.1, NPRR1246 pending box"
    quote: "plus $0.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e35
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Appendix 1, Day-Ahead Market Optimization Control Parameters"
    quote: "The Protocols require transmission constraint limits to be satisfied in DAM and hence the transmission constraint penalty values are set to very high values to ensure that the constraints are not violated in DAM."
  - id: e36
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Appendix 1, Table 1-1"
    quote: "Base case 1-10KV 350,000.00 Base case 10.1-20KV 450,000.00 Base case 20.1-30KV 550,000.00 Base case 30.1-50KV 650,000.00 Base case 50.1-100KV 750,000.00 Base case 100.1-120KV 850,000.00 Base case 120.1-150KV 950,000.00 Base case 150+KV 1,050,000.00 Contingency 1-10KV 300,000.00 Contingency 10.1-20KV 400,000.00 Contingency 20.1-30KV 500,000.00 Contingency 30.1-50KV 600,000.00 Contingency 50.1-100KV 700,000.00 Contingency 100.1-120KV 800,000.00 Contingency 120.1-150KV 900,000.00 Contingency 150+KV 1,000,000.00 Non-thermal (e.g. generic constraints) 1,000,000.00"
  - id: e37
    source: np-22p-2025-12
    locator: "Attachment P (Dec. 5, 2025 version), Appendix 1, Section 1.2"
    quote: "The values of the Network Transmission Penalty Factors chosen to enforce the Network Transmission Constraints are considerably higher in DAM when compared to the SCED (Network Transmission Shadow Price Caps) since the DAM is a unit commitment problem and for it to clear reasonable offers and bids, the Network Transmission Penalty Factors need to represent the higher costs associated with a unit start up and generation at minimum energy. The SCED is an economic dispatch problem and hence for it to dispatch reasonable offers; the penalties need only be in the order of energy offer cost."
  - id: e38
    source: imm-som-2025
    locator: "page 84 (OCR), Chapter V.D.1, Violated Constraints"
    quote: "The 2025 shadow price caps were: e $5,251 per MW for base-case (non-contingency) constraints or voltage violations, e $4,500 per MW for 345 kV constraints, e $3,500 per MW for 138 kV constraints, and e $2,800 per MW for 69 kV thermal violations. e ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
---

## Definition

A shadow price is the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were made available. [e1] For a transmission constraint, the IMM describes it as the marginal cost of redirecting the flow of energy around a binding constraint. [e4] In ERCOT's methodology document, a transmission constraint's shadow price is a positive $/MW amount defined as the increase in system dispatch cost if the line limit is decreased by one MW. [e12]

## How it works

SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to the security constraints. [e3] The SCED objective function has four components: the cost of dispatching generation, the cost of procuring Ancillary Services, the penalty for violating the power balance constraint, and the penalty for violating network transmission constraints. [e31] ERCOT sets a maximum shadow price for each network constraint as part of its contingency definition, and the cost SCED calculates to resolve another MW of congestion on that constraint cannot exceed it. A separate maximum applies to the power balance constraint. [e2][e9]

If a constraint is not binding, its shadow price is $0.00/MWh. If it is binding, the shadow price is a non-zero $/MW value, and once the cap is reached the constraint is violated without further increases in the shadow price. [e13] Per the IMM, violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps. When the marginal cost of relief through dispatch exceeds the reliability cost of violating the constraint, the cap stops further dispatch cost and sets the shadow price, which determines congestion prices at the locations that affect the violated constraint. [e8] The IMM calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price. [e7]

**Who sets the caps.** Section 6.5.7.1.11 requires PUCT approval of ERCOT's methodology and of the values of the caps, per Attachment P. [e11] The caps directly determine real-time LMPs in cases of constraint violations. [e10]

**Generic caps.** Unless ERCOT determines a constraint is irresolvable by SCED, the generic caps apply: $5,251/MW for a base case or voltage violation, and for N-1 constraint violations $4,500/MW above 200 kV, $3,500/MW from 100 to 200 kV and $2,800/MW below 100 kV (Attachment P, December 5, 2025 version). [e18][e19] The IMM lists the 2025 caps as $5,251 per MW for base-case or voltage constraints, $4,500 for 345 kV, $3,500 for 138 kV and $2,800 for 69 kV thermal violations, and says GTCs are treated as base-case stability constraints at $5,251. [e38]

**Why those levels.** ERCOT's supporting analysis shows how a cap maps to which offers will be used: with a 2% shift factor difference between marginal units, the maximum offer price difference of units deployed to resolve a constraint is $56, $70, $90 and $105.02/MWh for caps of $2,800, $3,500, $4,500 and $5,251/MW. [e20] It also argues that a cap high enough to always accept an offer at the RTSWCAP is not workable: at a 2% shift factor difference, a $100,000/MW cap would be required to deploy $2,000/MWh offers. [e21] ERCOT notes that an LMP at a node, hub or load zone can exceed the RTSWCAP in some circumstances, most likely with irresolvable constraints and tight dispatchable supply. [e22]

**Irresolvable constraints.** ERCOT modifies the cap for a constraint consistently irresolvable by SCED if a violation goes unresolved for more than two consecutive hours on more than 4 consecutive Operating Days, or for more than a total of 20 hours in a rolling thirty-day period. [e24] The cap becomes the minimum of the generic cap and the greater of a reference Resource's largest Mitigated Offer Cap divided by its shift factor, or $2000 per MW. [e25] If the constraint's accumulated net margin exceeds $95,000/MW, the cap is lowered for the rest of the calendar year to the minimum of $2,000/MWh or a second formula. [e26] Net margin is a running sum of one quarter times the greater of zero or the reference Settlement Point Price minus a Proxy Operating Cost, over intervals in which the constraint binds; the Proxy Operating Cost is 10 times the Fuel Index Price for the prior Business Day. [e27] ERCOT gives 30 days notice before deeming a constraint resolvable again, and the IMM may initiate re-evaluation, which resets the net margin. [e29][e28]

**After the cap is reached.** ERCOT may form a mitigation plan (switching, load rollover, load shed plans, redistribution of Ancillary Services), commit additional units, or override HDLs and LDLs. [e23]

**IROLs.** An IROL's cap is set to the generic base-case cap, or, if ERCOT in its sole discretion finds that insufficient, to the power balance penalty price minus the mitigated offer floor of a reference Resource divided by its shift factor impact. [e30]

**Power balance cap.** For the power balance constraint, the shadow price is System Lambda and the cap is the Power Balance Penalty. [e12][e10] In the December 5, 2025 document the under-generation penalty is a single value equal to the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh, and the over-generation penalty is -$250/MWh. [e32]

## Formula

The Attachment P LMP at an Electrical Bus is System Lambda minus the sum, over constraints, of the bus's shift factor times the constraint's shadow price. [e14] Variables: LMP_EB is the LMP at electrical bus EB; lambda is System Lambda, the shadow price of power balance; SF is the shift factor of that bus for the line; SP is the line's shadow price. [e14] Shadow prices of congested lines are positive and otherwise zero, and shift factors are negative on one side of a line and positive on the other. [e15] The congestion component of the bus LMP is the negative of the sum of shift factor times shadow price, so it can be positive or negative; it is the price incentive for units at that bus to raise or lower output to manage congestion. [e16] Attachment P also notes that generating units with small shift factors are less effective at resolving constraints, so if no efficient units exist the shadow price must rise, which it says means high shadow prices indicate inefficient congestion management. [e17]

Worked illustration (Suppose, not a quote): with a $2,000/MW shadow price on one constraint and no other constraints, a bus with shift factor -0.5 gets a congestion component of +$1,000/MWh under the formula above. [e16]

## ERCOT context

The IMM reports that ERCOT implemented NPRR 1230 at the end of 2024 to raise the cap on base-case constraints, which lets SCED choose more expensive dispatch to avoid violations. [e5]

In the day-ahead market the transmission constraints are enforced with far larger penalty values: the Protocols require transmission limits to be satisfied in the DAM, so the penalty values are set very high, for example 1,050,000 for a base case 150+ kV constraint and 1,000,000 for a 150+ kV contingency constraint and for non-thermal (generic) constraints in Table 1-1. [e35][e36] ERCOT says DAM penalties are much higher than the SCED caps because DAM is a unit commitment problem needing to reflect start-up and minimum-energy costs, whereas SCED penalties need only be on the order of energy offer cost. [e37]

## Timeline

- April 1, 2025 version of Attachment P: the Power Balance Penalty was a step function of up to 10 (violation MW; penalty $/MW) pairs; a pending NPRR1246 box would replace it with a single value of VOLL plus RTSWCAP plus $0.01/MWh upon RTC implementation. [e33][e34]
- End of 2024: NPRR 1230 raised the base-case constraint cap, per the IMM. [e5]
- December 5, 2025 version: power balance penalty is VOLL plus RTSWCAP plus $4,052.01/MWh (over-generation -$250/MWh); generic caps $5,251, $4,500, $3,500, $2,800 per MW. [e32][e19]

## Key facts

- ERCOT sets a maximum shadow price per network constraint and for the power balance constraint. [e2][e9]
- SCED's cost to resolve one more MW of congestion is limited to that maximum. [e2]
- Generic caps (Dec. 5, 2025): $5,251/MW base case or voltage; $4,500, $3,500, $2,800 by voltage class for N-1. [e19]
- Irresolvable trigger: more than 2 consecutive hours on more than 4 consecutive Operating Days, or more than 20 hours in a rolling 30 days. [e24]
- Net margin threshold that lowers the cap for the calendar year: $95,000/MW. [e26]
- A non-binding constraint has a $0.00/MWh shadow price. [e13]
- NPRR 1230, implemented at the end of 2024, raised the cap on base-case constraints. [e5]

## Say it like this

A shadow price is what it costs the system, at the margin, to squeeze one more MW through a binding constraint. ERCOT caps it at a reliability-based value, so when relief would cost more than the reliability cost of a violation, the cap sets the shadow price. [e8]

## Common confusion

The shadow price is a marginal cost per MW, not a total congestion cost; the IMM's day-ahead congestion values multiply it by flow over each constraint. [e7] It is also not a bid or offer: it comes out of the SCED solution. [e3] The IMM's voltage labels (345, 138 and 69 kV) and Attachment P's labels (above 200 kV, 100 to 200 kV, below 100 kV) describe the same three dollar levels in different words. [e38][e19]

## Questions

### Why does ERCOT cap shadow prices?

When relief through dispatch would cost more than the reliability cost of a violation, the cap limits the dispatch cost and sets the shadow price rather than letting it rise further. [e8][e2] ERCOT also argues no cap can always accept an RTSWCAP offer without producing congestion prices far above reasonable scarcity levels. [e21]

### What changed with NPRR 1230?

It raised the cap on base-case constraints so SCED can find more expensive dispatch solutions to avoid violating them. [e5]

### How does a shadow price become a congestion charge?

The bus LMP is System Lambda minus the sum of shift factor times shadow price, and the IMM values day-ahead congestion as flow times shadow price. [e14][e7]

### Why can a node's LMP exceed the RTSWCAP?

Because congestion components add to System Lambda: with a -50% shift factor and a $100,000/MW cap, one constraint alone would give a $50,000/MWh component; ERCOT says LMPs can exceed the cap when constraints are irresolvable and supply is tight. [e21][e22]

### What if a constraint stays violated for weeks?

If unresolved more than 2 consecutive hours on more than 4 consecutive days, or 20 hours in 30 days, ERCOT resets its cap using a reference Resource's mitigated offer cap, and may lower it further after $95,000/MW of net margin. [e24][e25][e26]

### Why are DAM penalties so much larger than SCED caps?

DAM is a unit commitment problem, so penalties reflect start-up and minimum-energy costs; SCED is an economic dispatch problem, so caps only need to be on the order of energy offer cost. [e37]

### What is the shadow price of power balance?

System Lambda: the cost of one more MWh at the reference bus, capped by the Power Balance Penalty. [e12][e10]

## Open items

- Resolved 2026-11-21: Attachment P (December 5, 2025 version, np-22p-2025-12) is now saved and used; the IMM's 345/138/69 kV cap labels match its voltage classes in dollar terms only.
- The effective date of the December 5, 2025 power balance penalty values and the date of the PUCT approval order are not stated in the saved text of Attachment P.
- The Attachment P text sets $5,251/MW, but the sources do not show the derivation of that specific number or of the $4,052.01 adder.
- The Competitive-constraint pass and mitigation interplay with shadow prices is covered in the binding-constraint topic; how SCED Step 1 reference LMPs use shadow prices was not read.
