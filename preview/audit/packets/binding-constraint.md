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

## Statements to check

- **Definition #1** (cites e1, e4): "Binding constraint" is not a defined term in the Protocol definitions (np-02). The Protocols and the IMM use it for a transmission constraint whose limit is reached so that dispatch must change. In ERCOT a constraint is a contingency and limiting Transmission Element pair that Network Security Analysis identifies and that is activated in SCED. [e1] When these limits bind, congestion raises dispatch costs and makes energy prices differ by location. [e4]
- **How it works #1** (cites e1, e2, e7): ERCOT may not activate a constraint in SCED until it has verified that the contingency definition behind it is accurate for the current operating state of the grid. [e1] Each hour ERCOT posts the binding transmission constraints and the contingency or overloaded element pairs that caused them. [e2] The IMM notes that SCED manages flows as physical constraints become binding in real time. [e7]
- **How it works #2** (cites e5): A binding constraint is not the same as a violated one: a constraint is violated when market dispatch flows exceed its transmission limit, and the shadow price is the marginal cost of redirecting flow around the binding constraint. [e5]
- **How it works #3** (cites e6, e3): Each binding constraint is also classified as competitive or non-competitive, and ERCOT posts the designation for each SCED execution each hour. [e6] A non-competitive constraint is one that is not determined to be competitive under the Section 3.19 tests. [e3]
- **ERCOT context #1** (cites e8): The IMM reports that violated transmission constraints fell to 64 constraint-hours in 2025, the lowest annual total. [e8]
- **Key facts #1** (cites e1): - A constraint is a contingency and limiting Transmission Element pair activated in SCED. [e1]
- **Key facts #2** (cites e2): - ERCOT posts all binding constraints hourly. [e2]
- **Key facts #3** (cites e5): - Violated means flows exceed the limit. [e5]
- **Key facts #4** (cites e6): - Competitive or non-competitive status is posted for each binding constraint each hour. [e6]
- **Key facts #5** (cites e8): - 2025 violated constraint-hours: 64, the lowest on record per the IMM. [e8]
- **Common confusion #1** (cites e5): Binding does not mean violated: a violation means market dispatch flows exceed the transmission limit. [e5]
- **Questions #2** (cites e5, e4): The IMM says a constraint is violated when market dispatch flows exceed its transmission limit; when limits bind, congestion increases dispatch costs, and the shadow price is the marginal cost of redirecting flow around a binding constraint. [e5][e4]
- **Questions #4** (cites e2, e6): ERCOT posts them hourly with the contingency and overloaded element pairs, and the competitive or non-competitive designation. [e2][e6]
- **Link to shadow-price** (cites e5): related Shadow Price: The shadow price is the marginal cost of redirecting flow around a binding constraint. [e5]
- **Link to shift-factor** (cites e2): related Shift Factors: ERCOT posts shift factors with the binding constraints each hour. [e2]
- **Link to gtc** (cites e9): related GTC (Generic Transmission Constraint): A GTC is a constraint used to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow applications. [e9]
- **Link to congestion** (cites e4): related Transmission Congestion: When a constraint binds, prices differ across locations. [e4]
- **Link to sced** (cites e1, e6): used-in SCED (Security-Constrained Economic Dispatch): Constraints identified by NSA are activated in SCED, and each binding constraint's competitive designation is posted per SCED execution. [e1][e6]
- **Link to market-power-mitigation** (cites e6): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Each binding constraint is designated Competitive or Non-Competitive; how that feeds mitigation was not sourced here. [e6]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A binding constraint is a transmission limit that is actually holding dispatch back in that interval. It is the reason nodal prices separate.

