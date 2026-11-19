# Audit packet: Shadow Price (shadow-price)

kind metric · domain congestion · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Shadow Price · text copy line 2951

BEFORE: …ment Statement using corrected Settlement data, in accordance with Section 9.5.6, RTM Resettlement Statement. Real-Time Market (RTM) True-Up Statement The RTM Settlement Statement issued 180 days following the Operating Day, as further described in Section 9.5.8, RTM True-Up Statement. Shadow Price 
QUOTE: A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available.
AFTER:  Shift Factor A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the genera…

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.11, paragraphs (2)-(3) · text copy line 1472 · heading above: 6.5.7.1.11 Transmission Network and Power Balance Constraint Management

BEFORE: …f the overloaded Transmission Element for at least 15 minutes consecutively that were not activated in SCED and an explanation of why each constraint was not activated. (2) Pursuant to Section 22, Attachment P, Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints, 
QUOTE: ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint.
AFTER:  (3) Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price …

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

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, discussion of NPRR 1230 · text copy line 5390

BEFORE: …ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW. See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs 
QUOTE: At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommendation 2023-1. The higher shadow price cap allows SCED to produce more expensive dispatch solutions to avoid violating these constraints.
AFTER:  Figure 38 shows the distribution of violated constraints by overload percentage since 2021. Figure 38: Overload Distribution of Violated Constraints !"#$%C'(#%)*"HC$,'%,-'#./ &'#!! *+,-./M12.&)3 &'"!! &!3./+.&)3 &'!!! !3./+.)3 )3./+.&!3 %!! $!! #!! "!! ! "!"& "!"" "!"( "!"# "!") Figure 38 shows tha…

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

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.11, paragraph (3) · text copy line 1474 · heading above: 6.5.7.1.11 Transmission Network and Power Balance Constraint Management

BEFORE: …ce Constraints, ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint. (3) 
QUOTE: Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint.
AFTER:  (4) If ERCOT determines that rating(s) in the Network Operations Model or configuration of the Transmission Facilities are not correct, then the TSP will provide the appropriate data submittals to ERCOT to correct the problem upon notification by ERCOT. +--------------------------------------------…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5351

BEFORE: …+2 1(",3%4C'(")*+,-("C.A%#*C/MC1-%%-("+2 !("" CA CC CD C( C# ,NNO34 1. Violated Constraints The shadow price of a constraint represents the marginal cost of redirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit. 
QUOTE: Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint.
AFTER:  The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • ERCOT treats GTCs as base-case stability constra…

## Statements to check

- **Definition #1** (cites e1, e4): A shadow price is the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were made available. [e1] For a transmission constraint, the IMM describes it as the marginal cost of redirecting the flow of energy around a binding constraint. [e4]
- **How it works #1** (cites e3, e2, e9): SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to the security constraints. [e3] ERCOT sets a maximum shadow price for each network constraint as part of its contingency definition, and the cost SCED calculates to resolve another MW of congestion on that constraint cannot exceed it. A separate maximum applies to the power balance constraint. [e2][e9]
- **How it works #2** (cites e8, e7): Per the IMM, violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps. When the marginal cost of relief through dispatch exceeds the reliability cost of violating the constraint, the cap stops further dispatch cost and sets the shadow price, which determines congestion prices at the locations that affect the violated constraint. [e8] In the day-ahead market, congestion value is the flow over each constraint times its shadow price. [e7]
- **ERCOT context #1** (cites e5, e6) FLAG number-not-in-quote: 2025: The IMM reports that ERCOT implemented NPRR 1230 at the end of 2024 to raise the cap on base-case constraints, which lets SCED choose more expensive dispatch to avoid violations. [e5] In 2025 the cap for GTCs treated as base-case stability constraints was $5,251 per MW. [e6]
- **Key facts #1** (cites e2, e9): - ERCOT sets a maximum shadow price per network constraint and for the power balance constraint. [e2][e9]
- **Key facts #2** (cites e2): - SCED's cost to resolve one more MW of congestion is limited to that maximum. [e2]
- **Key facts #3** (cites e6) FLAG number-not-in-quote: 2025: - 2025 cap for GTCs as base-case stability constraints: $5,251 per MW. [e6]
- **Key facts #4** (cites e5): - NPRR 1230, implemented at the end of 2024, raised the cap on base-case constraints. [e5]
- **Key facts #5** (cites e7): - Day-ahead congestion value equals flow times shadow price. [e7]
- **Say it like this #1** (cites e8): A shadow price is what it costs the system, at the margin, to squeeze one more MW through a binding constraint. ERCOT caps it at a reliability-based value, so when relief would cost more than the reliability cost of a violation, the cap sets the shadow price. [e8]
- **Common confusion #1** (cites e7, e3): The shadow price is a marginal cost per MW, not a total congestion cost; congestion value comes from multiplying it by flow. [e7] It is also not a bid or offer: it comes out of the SCED solution. [e3]
- **Questions #2** (cites e8, e2): When relief through dispatch would cost more than the reliability cost of a violation, the cap limits the dispatch cost and sets the shadow price rather than letting it rise further. [e8][e2]
- **Questions #4** (cites e5): It raised the cap on base-case constraints so SCED can find more expensive dispatch solutions to avoid violating them. [e5]
- **Questions #6** (cites e7): In the day-ahead market, congestion value is the flow over the constraint times its shadow price. [e7]
- **Link to binding-constraint** (cites e4): related Binding Constraint: A shadow price is the marginal cost of redirecting flow around a binding constraint. [e4]
- **Link to gtc** (cites e6) FLAG number-not-in-quote: 2025: related GTC (Generic Transmission Constraint): ERCOT treats GTCs as base-case stability constraints with a shadow price cap of $5,251 per MW in 2025. [e6]
- **Link to sced** (cites e3): used-in SCED (Security-Constrained Economic Dispatch): SCED produces Shadow Prices along with Base Points and LMPs. [e3]
- **Link to congestion** (cites e7): determines Transmission Congestion: Day-ahead congestion value is flow over a constraint times its shadow price. [e7]
- **Link to lmp** (cites e8): determines LMP (Locational Marginal Price): The shadow price set for a violated constraint determines congestion prices at the locations that affect it. [e8]
