# Audit packet: Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps) (market-power-mitigation)

kind rule · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `puct-25-502` · tier 1 · PUCT Substantive Rule 16 TAC §25.502, Pricing Safeguards in Markets Operated by ERCOT
locator: 16 TAC 25.502(c)(5), definition of Noncompetitive constraint · text copy line 35

BEFORE: …ocation -- The location for purposes of financial settlement of a service (e.g., congestion management zone in a zonal market design or a node in a nodal market design). (4) Must-run alternative (MRA) service -- A service that ERCOT may procure as an alternative to reliability must-run service. (5) 
QUOTE: Noncompetitive constraint -- A transmission element on which prices to relieve congestion are not moderated by the normal forces of competition between multiple, unaffiliated resources.
AFTER:  (6) Reliability must-run (RMR) service -- A service provided by a generation resource to meet a reliability need resulting from the planned suspension of operation of that generation resource for a period of greater than 180 calendar days. (7) Resource -- A generation resource, or a load capable of…

### e2 · `puct-25-502` · tier 1 · PUCT Substantive Rule 16 TAC §25.502, Pricing Safeguards in Markets Operated by ERCOT
locator: 16 TAC 25.502(f), Noncompetitive constraints · text copy line 178

BEFORE: …. ERCOT may require less than the entire original amount of capital expenditures to be refunded to reflect the depreciation of capital over time. Implementation. ERCOT, through its stakeholder process, must establish protocols and procedures to implement this subsection. Noncompetitive constraints. 
QUOTE: ERCOT, through its stakeholder process, must develop protocols to mitigate the price effects of congestion on noncompetitive constraints.
AFTER:  (1) The protocols must specify a method by which noncompetitive constraints may be distinguished from competitive constraints. (2) Competitive constraints and noncompetitive constraints must be designated annually prior to the corresponding auction of annual congestion revenue rights. A constraint …

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, Constraint Competitiveness Test Definitions, paragraph (1) · text copy line 8242 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …ded ECRS, the initiation setting of the automatic under-frequency relay setting shall not be lower than 59.70 Hz. To provide ECRS, Load Resources are not required to be controlled by under-frequency relays. 3.19 Constraint Competitiveness Tests 3.19.1 Constraint Competitiveness Test Definitions (1) 
QUOTE: The Constraint Competitiveness Test (CCT) checks the competitiveness of a constraint by evaluating each Market Participant's ability to exercise market power by physical or economic withholding.
AFTER:  The CCT for a constrained Transmission Element evaluates whether there is sufficient competition to resolve the constraint on the import side by calculating the Element Competitiveness Index (ECI) on the import side of the constraint and by determining whether a single Entity is needed to resolve t…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, SCED Constraint Competitiveness Test, paragraphs (2)(a)-(b) · text copy line 8373 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …--------------------------------------+ 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test (1) The SCED CCT uses current system conditions to evaluate the competitiveness of a constraint. (2) Before each SCED execution, CCT is performed for all active constraints in SCED. 
QUOTE: The SCED CCT shall classify a constraint as competitive for the current SCED execution if the constraint meets all of the following conditions: (a) The ECI is less than ECIT2 on the import side; (b) The constraint can be resolved by eliminating all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME. If the constraint cannot be resolved, then the DME will be marked as the pivotal player for resolving the constraint;
AFTER:  (c) There are negative Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that have an absolute value greater than or equal to SFP3; and +-----------------------------------------------------------------------------------------------------------------------------…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …he SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. 
QUOTE: The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour.
AFTER:  The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancil…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(b)(i), second step · text copy line 2240

BEFORE: …esource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, 
QUOTE: each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;
AFTER:  (ii) Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. The offer portion of each Energy Bid/Offer Curve subject to mi…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC).
AFTER:  For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has …

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section E, Market Power Mitigation · text copy line 8657

BEFORE: …n applies whether the unit is self-committed or receives a Reliability Unit Commitment (RUC) instruction. Prior to 2021, ERCOT typically issued RUC instructions to resolve transmission constraints. However, RUCs for system-wide capacity became common in summer 2021 and continued through early 2023. 
QUOTE: When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constraint, ERCOT often dispatches it in real time with its offer prices capped at mitigated levels.
AFTER:  ERCOT's dispatch software includes an automatic two-step mitigation process: 83 • The dispatch software calculates output levels (base points) and prices using participants' offer curves and considering only the "competitive" transmission constraints. In the second step of the dispatch process, the…

### e9 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (5) · text copy line 8394 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …I Effective Capacity on the import side for each DME and whether the DME is a pivotal player for the constraint. SCED will re-evaluate the competitiveness of the Non-Competitive Constraint starting with the first SCED interval of the next Operating Hour if the constraint remains active in SCED. (5) 
QUOTE: The Independent Market Monitor (IMM) may designate any constraint as a Competitive Constraint or a Non-Competitive Constraint.
AFTER:  ERCOT shall provide notice describing any such designation by the IMM. The notice shall include an effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. Any such designation from the IMM shall override the competitive…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (7)(a)-(c) · text copy line 8407 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …======================================================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM; (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and (c) The Resource has a Shift Factor on the import side of the constraint with an absolute value greater than SFP4;
AFTER:  (8) Once mitigation has been applied to a Resource for a SCED interval, it shall remain applied for the remainder of the Operating Hour regardless of the conditions listed in paragraph (7) above. 3.20 Identification of Chronic Congestion (1) A constraint that has been binding in Real-Time on three …

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Competition and Market Power · text copy line 973

BEFORE: …te of the Market Report | vii / / Executive Summary Competition and Market Power We evaluate market power from two perspectives: structural (does market power exist) and behavioral (have attempts been made to exercise it). There has been a downtrend in uncompetitive hours over the last three years. 
QUOTE: The percentage of top-quartile net load hours with a pivotal supplier declined from over 90% in 2022 to 35% in 2025.
AFTER:  This positive development is due in large part to milder weather and a large influx of energy storage resources held by smaller participants. Potential economic withholding, measured by the output gap, occurs frequently but has a relatively low impact. Along with the declining frequency of uncompet…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.2, Element Competitiveness Index Calculation, paragraph (2)(c) · text copy line 8335 · heading above: 3.19.2 Element Competitiveness Index Calculation

BEFORE: …aint, as follows: (a) Determine the total ECI Effective Capacity by each DME on the import side. (b) Determine the percentage of ECI Effective Capacity by each DME on the import side by taking each DME's ECI Effective Capacity and dividing by the total ECI Effective Capacity on the import side. (c) 
QUOTE: The ECI on the import side is equal to the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side.
AFTER:  3.19.3 Long-Term Constraint Competitiveness Test (1) The Long-Term CCT process is executed once a year and provides a projection of Competitive Constraints for the month with the highest forecasted Demand in the following year. (2) The Long-Term CCT performs analysis on a selected set of constraint…

### e15 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (2) · text copy line 8244 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …trained Transmission Element evaluates whether there is sufficient competition to resolve the constraint on the import side by calculating the Element Competitiveness Index (ECI) on the import side of the constraint and by determining whether a single Entity is needed to resolve the constraint. (2) 
QUOTE: The competitiveness of a constraint is tested both on a long-term basis and before each Security-Constrained Economic Dispatch (SCED) execution.
AFTER:  (3) The "Available Capacity for a Resource" is defined as follows: (a) For Generation Resources, including Switchable Generation Resources (SWGRs), but excluding Intermittent Renewable Resources (IRRs): (i) Long-Term CCT - the Seasonal net max sustainable rating, as registered with ERCOT. (ii) SCED…

### e16 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Mitigated Offer Cap (MOC) · text copy line 1648

BEFORE: …Resource's LSL expressed in $/MWh. Minimum Point-to-Point (PTP) Option Bid Price A value of $0.010 representing the minimum price that can be submitted into the CRR Auction for a PTP Option bid. Minimum Reservation Price The lowest price that a seller is willing to accept. Mitigated Offer Cap (MOC) 
QUOTE: An upper limit on the price of an offer as detailed in Section 4.4.9.4.1, Mitigated Offer Cap.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR826: Replace the above definition "Mitigated Offer Cap (MOC)" with the following upon system implementation:] | | | | Mitigated Off…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section E, Market Power Mitigation · text copy line 8651

BEFORE: …d with potential exercise of market power can be addressed in a timely manner. E. Market Power Mitigation When competition is not robust and suppliers have market power, an independent system operator must mitigate offers to prevent offer prices from diverging substantially from competitive levels. 
QUOTE: ERCOT's real-time market includes a mechanism to mitigate offers for resources that may have local market power because they are required to manage a transmission constraint. Mitigation applies whether the unit is self-committed or receives a Reliability Unit Commitment (RUC) instruction.
AFTER:  Prior to 2021, ERCOT typically issued RUC instructions to resolve transmission constraints. However, RUCs for system-wide capacity became common in summer 2021 and continued through early 2023. When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constra…

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (3)(a)(ii), Available Capacity for a Resource, SCED CCT · text copy line 8252 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …ion. (3) The "Available Capacity for a Resource" is defined as follows: (a) For Generation Resources, including Switchable Generation Resources (SWGRs), but excluding Intermittent Renewable Resources (IRRs): (i) Long-Term CCT - the Seasonal net max sustainable rating, as registered with ERCOT. (ii) 
QUOTE: SCED CCT - the telemetered High Sustained Limit (HSL) for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, and zero for all other Resources.
AFTER:  (b) For IRRs: (i) Long-Term CCT - the Seasonal net max sustainable rating, as registered with ERCOT, on the export side and zero MW on the import side. (ii) SCED CCT - the telemetered HSL for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1 and zero fo…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (6), threshold table, ECIT2 · text copy line 8309 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …an Entity to include in the ECI calculation 2% ECIT1 Maximum competitive threshold for ECI on the import side of a constraint for the Long-Term CCT process 2000 SFP2 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the Long-Term CCT process 2% 
QUOTE: ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300
AFTER:  SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2% DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10%…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (6), threshold table, SFP4 · text copy line 8315 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2% DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10% 
QUOTE: SFP4 Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2 2%
AFTER:  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 3.19.2 Element Competitiveness Index Calculation (1) To compute the ECI on the import side, first determine the "ECI Ef…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.2, Element Competitiveness Index Calculation, paragraph (1) · text copy line 8320 · heading above: 3.19.2 Element Competitiveness Index Calculation

BEFORE: …----------------------------------------------------------------------------------------------------------------------------- 3.19.2 Element Competitiveness Index Calculation (1) To compute the ECI on the import side, first determine the "ECI Effective Capacity" available to resolve the constraint. 
QUOTE: The ECI Effective Capacity that each Entity contributes to resolve the constraint on the import side is determined by taking, for each Managed Capacity for an Entity having negative Shift Factors with absolute values greater than the minimum of one-third of the highest absolute value of any Resource Shift Factor with a negative value and SFP1, the sum of the products of (a) the Available Capacity for a Resource and (b) the square of the Shift Factor of that Resource to the constraint.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (6), threshold table, DMEECP · text copy line 8313 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …itive Constraint as part of the Long-Term CCT process 2% ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300 SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2% 
QUOTE: DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10%
AFTER:  SFP4 Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2 2% ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 3.19.2 El…

### e24 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (6), threshold table, ECIT1 · text copy line 8305 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …----- ------------------------------------------------------------------------------------------------------------------------------------------------------------ ---------- SFP1 Minimum Shift Factor threshold for determining which Managed Capacity for an Entity to include in the ECI calculation 2% 
QUOTE: ECIT1 Maximum competitive threshold for ECI on the import side of a constraint for the Long-Term CCT process 2000
AFTER:  SFP2 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the Long-Term CCT process 2% ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300 SFP3 Minimum Shift Factor threshold for a constrain…

### e25 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.3, Long-Term Constraint Competitiveness Test, paragraph (1) · text copy line 8339 · heading above: 3.19.3 Long-Term Constraint Competitiveness Test

BEFORE: …each DME's ECI Effective Capacity and dividing by the total ECI Effective Capacity on the import side. (c) The ECI on the import side is equal to the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side. 3.19.3 Long-Term Constraint Competitiveness Test (1) 
QUOTE: The Long-Term CCT process is executed once a year and provides a projection of Competitive Constraints for the month with the highest forecasted Demand in the following year.
AFTER:  (2) The Long-Term CCT performs analysis on a selected set of constraints. (3) A constraint is classified as a Competitive Constraint for the monthly case if it meets all of the following conditions: (a) The ECI is less than ECIT1 on the import side of the constraint; (b) The constraint can be resol…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (4) · text copy line 8392 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: … as non-competitive by a previous SCED CCT execution within the current Operating Hour. (3) Any constraint that is analyzed and is not designated as a Competitive Constraint under the conditions outlined in paragraph (2) above shall be designated as a Non-Competitive Constraint by the SCED CCT. (4) 
QUOTE: A constraint that is determined to be a Non-Competitive Constraint by the SCED CCT within an Operating Hour will not be re-evaluated for its competitiveness status for the remainder of that Operating Hour. However, the SCED CCT will reevaluate the percentage of the ECI Effective Capacity on the import side for each DME and whether the DME is a pivotal player for the constraint.
AFTER:  SCED will re-evaluate the competitiveness of the Non-Competitive Constraint starting with the first SCED interval of the next Operating Hour if the constraint remains active in SCED. (5) The Independent Market Monitor (IMM) may designate any constraint as a Competitive Constraint or a Non-Competiti…

### e27 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (5) · text copy line 8394 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …int as a Competitive Constraint or a Non-Competitive Constraint. ERCOT shall provide notice describing any such designation by the IMM. The notice shall include an effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. 
QUOTE: Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective.
AFTER:  (6) Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour. (7) Mitigation will be applied to a Resource in the SCED Step 2, as …

### e28 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (6) · text copy line 8396 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …n effective date, justification for the constraint designation by the IMM and the duration for which the IMM designation will be applied. Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective. (6) 
QUOTE: Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour.
AFTER:  (7) Mitigation will be applied to a Resource in the SCED Step 2, as described in Section 6.5.7.3, Security Constrained Economic Dispatch, when all of the following conditions are met: +------------------------------------------------------------------------------------------------------------------…

### e29 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(a), Step 1 · text copy line 2229

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (14) The two-step SCED methodology referenced in paragraph (1) above is: (a) 
QUOTE: The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints.
AFTER:  Energy Offer Curves for all On-Line Generation Resources, Energy Bid/Offer Curves for all On-Line ESRs, and RTM Energy Bids from available CLRs, whether submitted by QSEs or created by ERCOT under this Section, are used in the SCED to determine "Reference LMPs." +-----------------------------------…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(b)(i), Step 2, floor · text copy line 2240

BEFORE: …s, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. 
QUOTE: Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01…

### e31 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1), formula · text copy line 1511 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: 
QUOTE: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]
AFTER:  Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 If a QSE has not submitted an Energy O…

### e32 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, GIHR · text copy line 1530 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | GIHR _(q, r) | MMBtu/MWh | 
QUOTE: Generic Incremental Heat Rate-The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e33 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, IHR · text copy line 1532 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | IHR _(q, r) | MMBtu/MWh | 
QUOTE: Verifiable Incremental Heat Rate per Resource-The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(c) · text copy line 1576 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …e MOC curve may be modified by ERCOT to ensure that the Resource is Dispatched by SCED to help resolve transmission congestion in Real-Time or to allow the Resource to be Dispatched by SCED after other Resources. Any modification to the MOC curve by ERCOT shall be communicated by Market Notice. (c) 
QUOTE: Notwithstanding the MOC calculation described in paragraph (1) above, the MOC for ESRs shall be set at the RTSWCAP.
AFTER:  No later than December 31, 2023, ERCOT and stakeholders shall submit a report to TAC that includes a recommendation to continue the existing approach or a proposal to implement an alternative approach to determine the MOC for ESRs. (d) For Quick Start Generation Resources (QSGRs) the MOC shall be a…

### e35 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, FA and OM · text copy line 1552 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | FA _(q, r) | $/MMBtu | 
QUOTE: Fuel Adder-The fuel adder is the average cost above the index price Resource r has paid to obtain fuel.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information. | +------------------+-----------+------------------------------------------------------------------------------------…

### e36 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, OM · text copy line 1554 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | OM _(q, r) | $/MWh | 
QUOTE: Variable Operations and Maintenance Cost above LSL-The O&M cost for Resource r to operate above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information. | +------------------+-----------+------------------------------------------------------------------------------------…

### e37 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, SFP · text copy line 1542 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SFP | $/MMBtu | 
QUOTE: Solid Fuel Price-The solid fuel index price is $1.50.
AFTER:  | +------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e38 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1657 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- 
QUOTE: Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh
AFTER:  -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Un…

### e39 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.3, Mitigated Offer Cap for RMR Resources, paragraph (1) (current text) · text copy line 1678 · heading above: 4.4.9.4.3 Mitigated Offer Cap for RMR Resources

BEFORE: …mbined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) 
QUOTE: For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Unit may be required to resolve and variations in transmission system topology, ERCOT shall set the MOC curve equal to the highest value (in $/MWh) that is expected to allow SCED to Dispatch the RMR Unit.
AFTER:  The MOC values that will be used for the MOC curve shall be initially determined and communicated as part of the Market Notice issued for the status of the RMR Unit, as described in paragraph (8) of Section 3.14.1.2, ERCOT Evaluation Process. The MOC curve may be modified by ERCOT to ensure that th…

### e40 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.3, pending NPRR826 replacement, paragraph (1)(e) · text copy line 1699 · heading above: 4.4.9.4.3 Mitigated Offer Cap for RMR Resources
FLAG pending-box: | [NPRR826: Replace Section 4.4.9.4.3 above with the following upon system implementation:] |
BEFORE: …re are multiple constraints which are being analyzed, the lowest value is used for the SCED interval. | | | | (e) If the value from paragraph (b) above for any constraint analyzed is zero, the MOC curve for the RMR Resource shall be calculated in accordance with Section 4.4.9.4.1 and Section 5.6.1. 
QUOTE: If the value from paragraph (b) above for every constraint analyzed is greater than zero, the RMR Resource's MOC curve for use in Step 2 of the SCED process is the sum of system lambda from Step 1 of SCED in the interval and the value from (d) above.
AFTER:  | +========================================================================================================================================================================================================================================================================================================…

### e41 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(f)(i), Exceptional Fuel Cost · text copy line 1584 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …enerating Resources. (f) During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as a volume-weighted average fuel price for use in the MOC calculation for that Resource. To qualify as Exceptional Fuel Cost, the submission must meet the following conditions: (i) 
QUOTE: For all Resources, the weighted average fuel price must exceed FIP for the applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder.
AFTER:  For Resources without approved verifiable costs, the fuel adder will be set to the default value assigned to Resources with approved verifiable costs, as defined in the Verifiable Cost Manual. The threshold parameter value in this paragraph shall be recommended by the Wholesale Market Subcommittee …

### e42 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(k), Exceptional Fuel Cost attestation · text copy line 1627 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …iod(s). (j) No later than 1700 Central Prevailing Time (CPT) on the 60th day following an Exceptional Fuel Cost submission, the submitting QSE shall provide ERCOT with all supporting documentation not previously provided to ERCOT. No supporting documentation will be accepted after the 60th day. (k) 
QUOTE: The accuracy of submitted Exceptional Fuel Cost and the need for purchasing intraday or same-day gas must be attested to by a duly authorized officer or agent of the QSE representing the Resource.
AFTER:  The attestation must be provided in a standardized format acceptable to ERCOT and submitted with the other documentation described in paragraph (i) above. An attestation for Exceptional Fuel Costs must state that the costs are accurate and variable, based on the dispatch of the Resource. +---------…

### e43 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4, pending NPRR1325 replacement note · text copy line 1501 · heading above: 4.4.9.4 Mitigated Offer Cap and Mitigated Offer Floor
FLAG pending-box: | [NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:] |
BEFORE: …o the DASWCAP that was used to clear the DAM, and the VOLL shall be set to the maximum value VOLL that was effective for the Operating Day. 4.4.9.4 Mitigated Offer Cap and Mitigated Offer Floor +-----------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:]
AFTER:  | | | | 4.4.9.4 Mitigated Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4…

### e44 · `puct-25-504` · tier 1 · PUCT Substantive Rule 16 TAC §25.504, Wholesale Market Power in the ERCOT Power Region
locator: 16 TAC 25.504(c), Withholding of production · text copy line 29

BEFORE: …ovision of regulated services. Market power abuses include predatory pricing, withholding of production, precluding entry, and collusion. (c) Withholding of production. Prices offered by a generation entity with market power may be a factor in determining whether the entity has withheld production. 
QUOTE: A generation entity with market power that prices its services substantially above its marginal cost may be found to be withholding production; offering prices that are not substantially above marginal cost does not constitute withholding of production.
AFTER:  (d) Voluntary mitigation plan. Any generation entity may submit to the commission a voluntary mitigation plan relating to compliance with §25.503(g)(7) of this title or with the Public Utility Regulatory Act (PURA) §39.157(a). Adherence to a commission-approved voluntary mitigation plan must be con…

### e45 · `puct-25-504` · tier 1 · PUCT Substantive Rule 16 TAC §25.504, Wholesale Market Power in the ERCOT Power Region
locator: 16 TAC 25.504(d), Voluntary mitigation plan · text copy line 37

BEFORE: …ially above marginal cost does not constitute withholding of production. (d) Voluntary mitigation plan. Any generation entity may submit to the commission a voluntary mitigation plan relating to compliance with §25.503(g)(7) of this title or with the Public Utility Regulatory Act (PURA) §39.157(a). 
QUOTE: Adherence to a commission-approved voluntary mitigation plan must be considered in a proceeding to determine whether the generation entity violated PURA §39.157 or §25.503(g)(7) of this title and, if so, the amount of the administrative penalty to be assessed for the violation.
AFTER:  (1) The commission will approve the voluntary mitigation plan only if it finds that the plan is in the public interest. (2) A generation entity or commission staff may apply to amend a voluntary mitigation plan that applies to the generation entity. (3) The parties to a proceeding related to the ap…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section D, Voluntary Mitigation Plans · text copy line 8588

BEFORE: …to a PUCT-approved VMP constituted an absolute defense against an allegation of market power abuse with respect to the behaviors addressed by the plan. However, House Bill 1500, passed during the 88th Legislative Session and effective September 1, 2023, modified the statutory requirements for VMPs. 
QUOTE: Adherence to a VMP no longer constitutes an absolute defense against allegations of market power abuse with respect to the behaviors addressed by the VMP; instead, it must be considered in determining whether a violation occurred and, if so, the penalty to assess.
AFTER: 81 VMPs should promote competitive outcomes and prevent abuse of market power through economic withholding in the ERCOT real-time energy market. Forward energy markets (e.g., the ERCOT day-ahead market) do not require the same restrictions, but prices in those markets reflect expectations for real-t…

### e47 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section D, Voluntary Mitigation Plans · text copy line 8605

BEFORE: … abuse of market power in violation of Public Utility Regulatory Act (PURA) §39.157(a) and 16 TAC §25.503(g)(7). In 2023, Calpine, NRG, and Luminant had active and approved VMPs filed with the PUCT.82 By the end of 2024, NRG had eliminated their VMP and only Calpine and Luminant had effective VMPs. 
QUOTE: In 2025, Calpine eliminated their VMP during the process of merging with Constellation which left only Luminant. Luminant's VMP was amended in late 2025 and in early 2026 to reflect market changes that resulted from transitioning to the Real-Time Co-optimization Imarket framework.
AFTER:  The VMPs for Calpine and Luminant included provisions that specify competitive benchmarks for offers in both energy and reserves. Further, the provisions address different generation technologies and fuel types and also address on-line versus off-line states in consideration of competitive cost on …

### e48 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding · text copy line 8508

BEFORE: …ers. Outage rates for large suppliers at all load levels modestly exceeded those for small suppliers but remained low enough to raise no competitiveness concerns. 2. Evaluation of Potential Economic Withholding This subsection evaluates potential economic withholding by calculating an "output gap". 
QUOTE: The output gap is the quantity of energy not produced by online resources even though producing that output would be economic by a substantial margin at the real-time energy price.
AFTER:  A participant can economically withhold resources, as measured by the output gap, by raising a resource's energy offers to reduce its dispatch level. The output gap includes resources that are committed and producing at less than full output. It also includes energy not produced from a committed re…

### e49 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding · text copy line 8532

BEFORE: …on, we remove fuel adders because they represent fixed costs. Finally, we include quick-start units if they were in quick-start mode and available for real-time dispatch. Figure 62 the average positive output gap by load level and, for reference, the percentage of hours in each load-level category. 
QUOTE: In 2025, over 80% of hours exhibited an output gap, indicating a potential attempt to exercise market power through economic withholding. At higher load levels, an extremely small percentage of generating capacity exhibited an output gap for a large percentage of the time. An even smaller percentage of generating capacity exhibited an output gap at lower load levels. The quantities withheld implied by the output gap were relatively low, even in the upper quartile of net load hours. These results show that potential economic withholding in the real-time energy market was low overall, but not trivial, in 2025.
AFTER:  While the ERCOT market may have performed competitively in general, the level of market power and the moderate evidence of potential economic withholding are cause for concern. Anticipated increases in system load over the coming years can result in more frequent structural market power and stronge…

### e50 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section A, Structural Market Power · text copy line 8275

BEFORE: …e 59: Pivotal Supplier Frequency by Net Load Level #!!" $!$# +!" $!$$ *!" $!$% )!" (!" $!$& $!$' '!" &!" %!" $!" #!" !" ,-./0123Q# ,-./0123Q$ ,-./0123Q% ,-./0123Q& !"#$"%&.2"'()'5"&'S(07 The percent of hours in the top quartile of net load with at least one pivotal supplier has declined since 2022. 
QUOTE: Pivotal suppliers, market participants with structural market power, existed in 10.3% of all hours in 2025, compared to 23.1% in 2024, 36.1% in 2023, and 42.5% in 2022.
AFTER: 79 We expect this trend to reverse as more of the ERCOT load projection becomes commercial. High net load indicates substantial demand that generation resources and net imports, excluding wind and solar, must satisfy. System conditions, including winter cold snaps, summer heat waves, and high genera…

### e51 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section A, footnote 79 · text copy line 8287

BEFORE: …conditions can directly affect the extent to which participants possess market power. Decision Making Entities (DMEs) with large portfolios of non-intermittent generation are important contributors during these hours. The frequency of hours with pivotal suppliers is expected to increase with net 79 
QUOTE: The methodology for identifying pivotal suppliers has been modified prior to the publishing of this report. This has resulted in a more stringent identification process and a lower frequency of hours with one or more pivotal suppliers.
AFTER:  114 | 2025 State of the Market Report / / Analysis of Competitive Performance load. As load reserve requirements increase, excess supply declines. This increases participants' potential market power. In the 2024 State of the Market Report, we recommended implementing a system market power mitigatio…

### e52 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section A, Structural Market Power · text copy line 8378

BEFORE: … than a large supplier with substantial long-term sales contracts. We recommended eliminating the "small fish" rule because these small suppliers are sometimes pivotal and because high offer prices are not necessary to ensure efficient pricing under tight conditions (see SOM Recommendation 2021-1). 
QUOTE: The PUCT elected to remove the small fish rule beginning June 1, 2026 (Project P-58379).
AFTER:  The analysis above evaluates the structure of the entire ERCOT market and by zone. In general, local market power in smaller geographic areas that transmission constraints can isolate raises greater competitiveness concerns. ERCOT addresses local market power through: (a) structural tests that iden…

### e53 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding · text copy line 8522

BEFORE: …itted and producing at less than full output. It also includes energy not produced from a committed resource if the offer price exceeds both (a) 118 | 2025 State of the Market Report / / Analysis of Competitive Performance the mitigated offer price and (b) the LMP plus the lesser of $10/MWh or 15%. 
QUOTE: The mitigated offer cap serves as a proxy for the resource's marginal production cost of energy.
AFTER:  Figure 62 shows the average output gap levels, measured as the difference between a unit's operating level and the output level it would have delivered over an hour if it had been offered to the market based on a proxy for a competitive offer (i.e., the unit's mitigated offers), with a few changes.…

### e54 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, FIP · text copy line 1534 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | FIP | $/MMBtu | 
QUOTE: Fuel Index Price-The natural gas index price as defined in Section 2.1, Definitions.
AFTER:  | +------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e55 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table, WAFP (current definition) · text copy line 1556 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | WAFP _(q, r, h) | $/MMBtu | 
QUOTE: Weighted Average Fuel Price-The volume-weighted average intraday, same-day and spot fuel price, the projected incremental fuel consistent with a fuel supply contract(s), or a combination of these two prices, submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day, as described in paragraph (1)(e) below.
AFTER:  | | | | | | | | +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | | | | | [NPRR1279: Repl…

### e56 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1), FPRC where a QSE has submitted an Energy Offer Curve · text copy line 1515 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …er Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, 
QUOTE: If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100
AFTER:  If a QSE has not submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * GASPEROL _(q, r) / 100 + FOP * OILPEROL _(q, r) / 100 + (SFP + FA _(q, r)) * SFPEROL _(q, r) / …

### e57 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1), FPRC where a QSE has not submitted an Energy Offer Curve · text copy line 1519 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: … _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 
QUOTE: If a QSE has not submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * GASPEROL _(q, r) / 100 + FOP * OILPEROL _(q, r) / 100 + (SFP + FA _(q, r)) * SFPEROL _(q, r) / 100
AFTER:  The above variables are defined as follows: +------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e58 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(a) · text copy line 1572 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (a) 
QUOTE: For a Resource contracted by ERCOT under paragraph (4) of Section 6.5.1.1, ERCOT Control Area Authority, ERCOT shall increase the O&M cost such that every point on the MOC curve is greater than the effective Value of Lost Load (VOLL) in $/MWh.
AFTER:  (b) Notwithstanding paragraph (a) above, for a Resource contracted by ERCOT under paragraph (4) of Section 6.5.1.1 to address an anticipated Emergency Condition related to a transmission constraint concern, the MOC curve for the Resource shall be determined considering the Shadow Price caps of the …

### e59 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(d) · text copy line 1578 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …agraph (1) above, the MOC for ESRs shall be set at the RTSWCAP. No later than December 31, 2023, ERCOT and stakeholders shall submit a report to TAC that includes a recommendation to continue the existing approach or a proposal to implement an alternative approach to determine the MOC for ESRs. (d) 
QUOTE: For Quick Start Generation Resources (QSGRs) the MOC shall be adjusted in accordance with Verifiable Cost Manual Appendix 7, Calculation of the Variable O&M Value and Incremental Heat Rate used in Real Time Mitigation for Quick Start Generation Resources (QSGRs).
AFTER:  (e) For hydro Generation Resources, the MOC shall be adjusted in accordance with Verifiable Cost Manual, Appendix 10, Setting the variables used in Mitigated Offer Cap for Hydro Generating Resources. (f) During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as…

### e60 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(e) · text copy line 1580 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …determine the MOC for ESRs. (d) For Quick Start Generation Resources (QSGRs) the MOC shall be adjusted in accordance with Verifiable Cost Manual Appendix 7, Calculation of the Variable O&M Value and Incremental Heat Rate used in Real Time Mitigation for Quick Start Generation Resources (QSGRs). (e) 
QUOTE: For hydro Generation Resources, the MOC shall be adjusted in accordance with Verifiable Cost Manual, Appendix 10, Setting the variables used in Mitigated Offer Cap for Hydro Generating Resources.
AFTER:  (f) During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as a volume-weighted average fuel price for use in the MOC calculation for that Resource. To qualify as Exceptional Fuel Cost, the submission must meet the following conditions: (i) For all Resources, t…

### e61 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(f)(i), threshold parameter · text copy line 1584 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …he applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder. For Resources without approved verifiable costs, the fuel adder will be set to the default value assigned to Resources with approved verifiable costs, as defined in the Verifiable Cost Manual. 
QUOTE: The threshold parameter value in this paragraph shall be recommended by the Wholesale Market Subcommittee (WMS) and approved by the TAC.
AFTER:  ERCOT shall update the threshold value on the first day of the month following TAC approval unless otherwise directed by the TAC. ERCOT shall provide a Market Notice prior to implementation of a revised parameter value. (ii) Fixed cost (fees, penalties and similar non-gas costs) may not be included…

### e62 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, pending NPRR1279 replacement of paragraph (1)(f) · text copy line 1605 · heading above: 4.4.9.4.1 Mitigated Offer Cap
FLAG pending-box: | [NPRR1279: Replace paragraph (f) above with the following on April 1, 2027:] |
BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1279: Replace paragraph (f) above with the following on April 1, 2027:]
AFTER:  | | | | (f) During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as a volume-weighted average fuel price for use in the MOC calculation for that Resource. To qualify as Exceptional Fuel Cost, the submission must meet the following conditions: | | | | (i) For …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e13, e22, e19): Mitigation has two parts: a test of whether a constraint is competitive, and a cap on offers when it is not. The Constraint Competitiveness Test (CCT) checks each constraint by evaluating each Market Participant's ability to exercise market power by physical or economic withholding. [e3] The index it uses, the ECI on the import side, is the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side. [e13] Each Entity's ECI Effective Capacity is the sum, over its Managed Capacity with a large enough negative Shift Factor, of Available Capacity times the square of the Shift Factor to the constraint. [e22] For the SCED CCT, the Available Capacity of a Generation Resource (IRRs are covered in a separate paragraph) is the telemetered HSL if its telemetered Resource Status is one of the listed statuses, and zero otherwise; other Resource types have their own definitions. [e19]
- **How it works #2** (cites e25, e15, e4, e26, e9, e27, e28): Two versions of the test run. The Long-Term CCT is executed once a year and projects Competitive Constraints for the month with the highest forecasted Demand in the following year. [e25] The SCED CCT is run before each SCED execution, [e15] and it classes a constraint as competitive only if it meets all of the listed conditions, including an ECI below ECIT2 on the import side and that the constraint can be resolved by eliminating all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME (if it cannot be resolved, the DME is marked as the pivotal player). [e4] Once the SCED CCT finds a constraint non-competitive within an Operating Hour its competitiveness status is not re-evaluated for the rest of that hour, although the SCED CCT still re-evaluates each DME's percentage of ECI Effective Capacity and whether the DME is a pivotal player. [e26] The IMM may designate any constraint competitive or non-competitive, [e9] and such a designation overrides the SCED CCT result for the dates it is effective. [e27] ERCOT posts each hour whether each binding constraint was competitive or non-competitive for each SCED execution in the previous Operating Hour. [e28]
- **How it works #3** (cites e10): A Resource's offer is mitigated in SCED Step 2 when the constraint is non-competitive (by the SCED CCT or the IMM), the Resource's DME is a pivotal player or holds more than a set share of the effective capacity, and the Resource has a large enough Shift Factor on the constraint. [e10]
- **How it works #4** (cites e29, e30, e6, e5, e16, e7): Two-step SCED: Step 1 runs SCED over the full Network Operations Model observing only Competitive Constraints (plus power balance and Ancillary Service constraints) to produce Reference LMPs. [e29] In Step 2 each Energy Offer Curve is bounded at the lesser of the Reference LMP or the appropriate Mitigated Offer Floor, [e30] and an offer subject to mitigation is capped at the greater of (the Step 1 Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Resource's MOC curve at LSL) or the appropriate MOC. [e6] SCED applies this to resolve Non-Competitive Constraints for the current Operating Hour. [e5] The MOC is an upper limit on the price of an offer, and np-04 allows Energy Offer Curves and Energy Bid/Offer Curves to be mitigated with it in Real-Time operations. [e16][e7]
- **Formula #1** (cites e31) FLAG number-not-in-quote: 4.4, 9.4: Mitigated Offer Cap (np-04 Section 4.4.9.4.1), for each point of the incremental MOC curve of a Generation Resource r of QSE q in hour h: MOC = Max [GIHR * Max(FIP, WAFP), (IHR * FPRC + OM)]. [e31] In words:
- **Formula #2** (cites e32): - GIHR is the generic incremental heat rate: 10.5 for Resources with a Commercial Operations Date on or before January 1, 2004, and 14.5 for Resources with a later Commercial Operations Date. [e32]
- **Formula #3** (cites e33): - IHR is the verifiable incremental heat rate curve approved in the verifiable cost process. [e33]
- **Formula #4** (cites e54, e55, e31, e56, e57, e35): - FIP is the natural gas index price; [e54] WAFP is the Weighted Average Fuel Price submitted to ERCOT during the Adjustment Period for a specific Resource and hour (see Exceptional Fuel Cost below). [e55] FPRC is the calculated fuel price for the Resource based on its fuel mix. [e31] For a Resource with approved verifiable costs whose QSE has submitted an Energy Offer Curve: FPRC = Max(WAFP, FIP + FA) * RTPERFIP / 100 + FOP * RTPERFOP / 100, where RTPERFIP and RTPERFOP are the gas and fuel oil percentages submitted with the offer curve and FOP is the fuel oil index price; [e56] if no Energy Offer Curve was submitted, FPRC = Max(WAFP, FIP + FA) * GASPEROL / 100 + FOP * OILPEROL / 100 + (SFP + FA) * SFPEROL / 100, using the percentages approved in the verifiable cost process. [e57] FA, the fuel adder, is the average cost above the index price the Resource has paid to obtain fuel. [e35] The saved np-04 text does not give the FPRC formula for a Resource without approved verifiable costs.
- **Formula #5** (cites e36): - OM is the variable O&M cost above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process. [e36]
- **Formula #6** (cites e37): - The solid fuel index price used for solid fuel is $1.50. [e37]
- **Formula #7** (cites e34, e58, e59, e60): - Exceptions: the MOC for ESRs is set at the RTSWCAP; [e34] for a Resource contracted by ERCOT under paragraph (4) of Section 6.5.1.1, ERCOT increases the O&M cost so every point on the MOC curve is greater than the effective VOLL; [e58] the MOC for QSGRs is adjusted under Verifiable Cost Manual Appendix 7; [e59] and the MOC for hydro Generation Resources is adjusted under Verifiable Cost Manual Appendix 10. [e60]
- **Formula #8** (cites e38) FLAG number-not-in-quote: 4.4, 9.4: Mitigated Offer Floor (Section 4.4.9.4.2): Nuclear and Hydro -$250/MWh, Coal and Lignite -$20/MWh, Combined Cycle -$20/MWh, Gas/Oil Steam and Combustion Turbine -$20/MWh, Qualifying Facility -$50/MWh, Wind -$100/MWh, PhotoVoltaic -$50/MWh, ESR -$250/MWh, Other -$50/MWh. [e38]
- **Formula #9** (cites e24, e20, e23, e21) FLAG number-not-in-quote: 3.19: CCT thresholds (Section 3.19.1): ECIT1 (Long-Term CCT ECI maximum) 2000 and ECIT2 (SCED CCT ECI maximum) 2300; DMEECP, the ECI Effective Capacity share above which a DME's Managed Capacity is eligible for Step 2 mitigation, is 10%; SFP4, the Shift Factor below which a Resource will not be mitigated in Step 2, is 2%. [e24][e20][e23][e21]
- **ERCOT context #1** (cites e17, e8): The IMM says ERCOT's real-time mitigation targets resources that may have local market power because they are required to manage a transmission constraint, and that it applies whether the unit is self-committed or receives a RUC instruction. [e17] A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e8]
- **ERCOT context #2** (cites e41, e61, e42): Exceptional Fuel Cost: during the Adjustment Period a QSE may submit a volume-weighted average fuel price for use in its Resource's MOC, but one of the conditions is that for all Resources the weighted average fuel price must exceed FIP for the Operating Day plus a threshold parameter (stated as $1/MMBtu, a value the WMS recommends and TAC approves, so it can be updated) plus the applicable fuel adder, [e41][e61] and the submitted accuracy must be attested by a duly authorized officer or agent of the QSE. [e42]
- **ERCOT context #3** (cites e39, e40, e43, e62): RMR Resources: under the current text ERCOT sets the MOC curve for an RMR Unit at the highest value expected to allow SCED to dispatch it, in consideration of the Shadow Price caps of the constraints it may resolve. [e39] The np-04 text also carries an NPRR826 replacement, pending system implementation, under which the RMR MOC for Step 2, where the value from paragraph (b) of that replacement is greater than zero for every constraint analyzed, would be the sum of system lambda from SCED Step 1 in the interval and the value from paragraph (d) of that replacement. [e40] A further NPRR1325 replacement of Section 4.4.9.4, adding Adjusted Bid Caps, is pending upon system implementation of PGRR145. [e43] The same np-04 text also shows an NPRR1279 replacement of the Exceptional Fuel Cost paragraph, dated April 1, 2027; this topic describes the paragraph as currently in force. [e62]
- **ERCOT context #4** (cites e50, e51, e11, e52): Structure: the IMM reported pivotal suppliers in 10.3% of all hours in 2025, compared with 23.1% in 2024, 36.1% in 2023 and 42.5% in 2022. [e50] The IMM also says it modified the pivotal supplier methodology before publishing the 2025 report, which made the identification more stringent and lowered the frequency. [e51] The share of top-quartile net load hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e11] The PUCT elected to remove the "small fish" rule beginning June 1, 2026 (Project P-58379). [e52]
- **ERCOT context #5** (cites e48, e53, e49): Behavior: the IMM measures potential economic withholding with an output gap, the energy not produced by online resources although producing would be economic by a substantial margin at the real-time energy price, and uses the mitigated offer cap as a proxy for marginal production cost. [e48][e53] In 2025 over 80% of hours exhibited an output gap, which the IMM calls a potential attempt to exercise market power, though it describes potential economic withholding in the real-time energy market as low overall, but not trivial. [e49]
- **ERCOT context #6** (cites e44, e45, e46, e47) FLAG number-not-in-quote: 25.504, 2023: Legal standard (16 TAC 25.504): a generation entity with market power that prices its services substantially above its marginal cost may be found to be withholding production; offering prices not substantially above marginal cost does not constitute withholding. [e44] A generation entity may file a voluntary mitigation plan; adherence must be considered in deciding whether it violated PURA 39.157 or 25.503(g)(7) and in setting any penalty. [e45] The IMM says that since House Bill 1500 (effective September 1, 2023) adherence is no longer an absolute defense. [e46] The IMM reports that only Luminant had an effective VMP after Calpine eliminated its plan in 2025, and that Luminant's was amended in late 2025 and early 2026 for the real-time co-optimization framework. [e47]
- **Key facts #2** (cites e5, e6, e30): - SCED mitigation is two-step: Step 2 caps mitigated offers at the greater of the Reference LMP-based value or the MOC, and bounds offers below at the lesser of Reference LMP or the Mitigated Offer Floor. [e5][e6][e30]
- **Key facts #3** (cites e20, e24): - ECIT2 is 2300 for the SCED CCT; ECIT1 is 2000 for the Long-Term CCT. [e20][e24]
- **Key facts #4** (cites e10, e21, e23): - Mitigation applies only to Resources whose Shift Factor passes SFP4 (2%) and whose DME is pivotal or above the DMEECP share (10%). [e10][e21][e23]
- **Key facts #5** (cites e34): - The MOC for ESRs is the RTSWCAP. [e34]
- **Key facts #6** (cites e9, e27): - The IMM may override the test by designating any constraint competitive or non-competitive. [e9][e27]
- **Common confusion #1** (cites e5, e6, e30, e38, e45): This is not the system-wide offer cap (see the offer-cap topic). Mitigation in SCED applies to Energy Offer Curves that meet the Section 3.19.4 criteria for a non-competitive constraint. [e5][e6] The Mitigated Offer Floor in Step 2 is a separate lower bound, not the MOC. [e30][e38] A voluntary mitigation plan is a PUCT-approved plan about compliance with the market power rules and is separate from the real-time MOC. [e45]
- **Questions #8** (cites e29, e30, e6): Step 1 prices with only Competitive Constraints to produce Reference LMPs; Step 2 then applies mitigated offer caps and floors, anchored to those Reference LMPs, while observing all constraints. [e29][e30][e6]
- **Questions #10** (cites e41, e42, e61): It may submit an Exceptional Fuel Cost during the Adjustment Period, but to qualify the submission must meet several conditions, one of which is that its weighted average fuel price exceeds FIP plus the threshold parameter (stated as $1/MMBtu) plus the fuel adder; an officer or agent must also attest to its accuracy. [e41][e42][e61]
- **Questions #12** (cites e21, e10): Mitigation is not applied to a Resource whose Shift Factor on the import side of the constraint does not exceed SFP4 (2%) in absolute value. [e21][e10]
- **Scenarios #2** (cites e26): - The SCED CCT will not re-evaluate that constraint's competitiveness status for the rest of the Operating Hour, although it re-evaluates each DME's percentage of ECI Effective Capacity and pivotal-player status. [e26]
- **Scenarios #3** (cites e10, e23, e21): - Resources whose DME is pivotal or above the 10% share, and whose Shift Factor passes the 2% threshold, face the MOC cap in Step 2. [e10][e23][e21]
- **Link to sced** (cites e5, e6): used-in SCED (Security-Constrained Economic Dispatch): SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e5][e6]
- **Link to puct** (cites e1, e2) FLAG number-not-in-quote: 25.502: regulates PUCT (Public Utility Commission of Texas): PUCT Rule 25.502 requires ERCOT to develop protocols that mitigate the price effects of congestion on noncompetitive constraints. [e1][e2]
- **Link to imm** (cites e9, e11, e17): related Independent Market Monitor (Potomac Economics): The IMM may designate any constraint as competitive or non-competitive, and its reports track pivotal suppliers and mitigation. [e9][e11][e17]
- **Link to binding-constraint** (cites e15): related Binding Constraint: Constraint competitiveness is tested before each SCED execution. [e15]
- **Link to offer-cap** (cites e5, e6): contrasts-with Offer Caps (HCAP / LCAP / SWCAP): Mitigated offer caps apply to Resources that meet the mitigation conditions for a non-competitive constraint, which is different from the system-wide offer cap covered in that topic. [e5][e6]
- **Link to ruc** (cites e8): related RUC (Reliability Unit Commitment: DRUC/HRUC): A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels, per the IMM. [e8]
- **Link to rmr** (cites e39): related RMR (Reliability Must-Run) & Must-Run Alternatives: ERCOT sets the MOC curve for an RMR Unit at the highest value expected to allow SCED to dispatch it. [e39]
- **Link to shift-factor** (cites e21, e22): used-in Shift Factors: ECI Effective Capacity weights each Resource's capacity by the square of its Shift Factor to the constraint, and mitigation needs a minimum Shift Factor (SFP4). [e21][e22]
- **Link to energy-storage-resource** (cites e34): related Energy Storage Resource (ESR): The MOC for ESRs is set at the RTSWCAP rather than from the heat-rate formula. [e34]
- **Link to hsl-lsl** (cites e19): used-in HSL / LSL: For the SCED CCT, the Available Capacity of a Generation Resource is the telemetered HSL when its telemetered Resource Status is one of the specified statuses, and zero otherwise. [e19]
- **Link to system-lambda** (cites e40): related System Lambda: The RMR MOC under pending NPRR826 is, where its conditions are met, system lambda from SCED Step 1 plus a value calculated under that paragraph. [e40]

