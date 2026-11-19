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
locator: Section 6.5.7.3, paragraph (1)(b)(i), second step · text copy line 2240

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

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Competition and Market Power · text copy line 983

BEFORE: …rally positive competitive environment. Analysis of potential physical withholding indicates that large suppliers continue to have lower unavailability rates than smaller suppliers, even at higher load levels. This provides additional evidence of positive competitive conditions in the ERCOT market. 
QUOTE: Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation.
AFTER:  With extreme projected load growth in the ERCOT footprint, the market could become structurally uncompetitive during high-load periods within a few years. If even 20 GW of new net load appears, a small fraction of the projected load growth, the operating margin will diminish significantly. This cou…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.2, Element Competitiveness Index Calculation, paragraph (2)(c) · text copy line 8335 · heading above: 3.19.2 Element Competitiveness Index Calculation

BEFORE: …aint, as follows: (a) Determine the total ECI Effective Capacity by each DME on the import side. (b) Determine the percentage of ECI Effective Capacity by each DME on the import side by taking each DME's ECI Effective Capacity and dividing by the total ECI Effective Capacity on the import side. (c) 
QUOTE: The ECI on the import side is equal to the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side.
AFTER:  3.19.3 Long-Term Constraint Competitiveness Test (1) The Long-Term CCT process is executed once a year and provides a projection of Competitive Constraints for the month with the highest forecasted Demand in the following year. (2) The Long-Term CCT performs analysis on a selected set of constraint…

### e14 · `puct-25-504` · tier 1 · PUCT Substantive Rule 16 TAC §25.504, Wholesale Market Power in the ERCOT Power Region
locator: 16 TAC 25.504(b)(2), definition of Market power · text copy line 18

BEFORE: …in this section, shall have the following meanings, unless the context or specific language of a section indicates otherwise: (1) Generation entity -- An entity that controls a generation resource. An entity affiliated with a generation entity shall be considered part of that generation entity. (2) 
QUOTE: Market power -- The ability to control prices or exclude competition in a relevant market.
AFTER:  (3) Market power abuse -- Practices by persons possessing market power that are unreasonably discriminatory or tend to unreasonably restrict, impair, or reduce the level of competition, including practices that tie unregulated products or services to regulated products or services or unreasonably d…

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

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Competition and Market Power · text copy line 984

BEFORE: …availability rates than smaller suppliers, even at higher load levels. This provides additional evidence of positive competitive conditions in the ERCOT market. Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation. 
QUOTE: With extreme projected load growth in the ERCOT footprint, the market could become structurally uncompetitive during high-load periods within a few years.
AFTER:  If even 20 GW of new net load appears, a small fraction of the projected load growth, the operating margin will diminish significantly. This could significantly increase both the frequency of hours with pivotal suppliers and the opportunity to profitably exercise market power. Hence, we recommend t…

## Statements to check

- **Definition #1** (cites e17, e16, e14, e2): Market power mitigation in ERCOT is the set of rules that cap a supplier's offers when it could exploit its position, mainly by limiting offers from Resources needed to resolve a non-competitive transmission constraint. [e17][e16] PUCT rules define market power as the ability to control prices or exclude competition in a relevant market, and require ERCOT to develop protocols to mitigate the price effects of congestion on noncompetitive constraints. [e14][e2]
- **How it works #1** (cites e3, e13, e15, e4): Mitigation has two parts: a test of whether a constraint is competitive, and a cap on offers when it is not. The Constraint Competitiveness Test (CCT) checks each constraint by evaluating each Market Participant's ability to exercise market power by physical or economic withholding. [e3] The index it uses, the ECI on the import side, is the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side. [e13] The test is run before each SCED execution. [e15] The SCED CCT classes a constraint as competitive only if it meets all of the listed conditions, including an ECI below ECIT2 on the import side and that the constraint can be resolved even when all Available Capacity of a Resource on the import side is eliminated (otherwise the DME is marked as the pivotal player). [e4]
- **How it works #2** (cites e10, e6, e9): A Resource's offer is mitigated in SCED Step 2 when the constraint is non-competitive (by the SCED CCT or the IMM), the Resource's DME is a pivotal player or holds more than a set share of the effective capacity, and the Resource has a large enough Shift Factor on the constraint. [e10] The second step of the SCED method applies this mitigation. [e6] The IMM may designate any constraint as competitive or non-competitive. [e9]
- **How it works #3** (cites e5, e6, e16, e7): SCED uses a two-step method that applies mitigation to energy offers prospectively to resolve Non-Competitive Constraints for the current Operating Hour. [e5] In Step 2, an offer subject to mitigation is capped at the greater of the Step 1 Reference LMP at the Resource Node plus a small variable, or the Resource's Mitigated Offer Cap (MOC) curve. [e6] The MOC is an upper limit on the price of an offer, and np-04 allows Energy Offer Curves and Energy Bid/Offer Curves to be mitigated with it in Real-Time operations. [e16][e7]
- **ERCOT context #1** (cites e17, e8, e11): The IMM says ERCOT's real-time mitigation targets resources that may have local market power because they are required to manage a transmission constraint, and that it applies whether the unit is self-committed or receives a RUC instruction. [e17] A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e8] Structurally, the share of top-quartile net load hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e11]
- **ERCOT context #2** (cites e12, e18): Even so, the IMM continues to recommend system-wide market power mitigation [e12], and it separately warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods within a few years. [e18]
- **Key facts #1** (cites e15): - Competitiveness is tested both on a long-term basis and before each SCED execution. [e15]
- **Key facts #2** (cites e5, e6): - SCED mitigation is two-step: Step 2 caps mitigated offers at the greater of Reference LMP (plus a small variable) or the MOC. [e5][e6]
- **Key facts #3** (cites e9): - The IMM may override the test by designating any constraint competitive or non-competitive. [e9]
- **Key facts #4** (cites e11): - Pivotal-supplier hours: over 90% of top-quartile net load hours in 2022, 35% in 2025. [e11]
- **Key facts #5** (cites e12): - The IMM recommends adding system-wide mitigation. [e12]
- **Say it like this #1** (cites e12, e18): ERCOT does not cap every offer; it tests each binding constraint, and if too few independent suppliers can fix it, the units that can are limited to mitigated offer levels in SCED Step 2. The IMM continues to recommend system-wide mitigation and warns the market could become structurally uncompetitive in high-load periods as load grows. [e12][e18]
- **Common confusion #1** (cites e5, e6, e4, e13): This is not the system-wide offer cap. The offer caps limit every offer, while mitigation applies only to the Resources that SCED relies on for a non-competitive constraint. [e5][e6] The saved protocols describe the ECI and pivotal-player tests. [e4][e13]
- **Questions #2** (cites e4): An entity is a pivotal player for a constraint if the constraint cannot be resolved even after eliminating all its available capacity on the import side, excluding nuclear and minimum-energy amounts of coal and lignite. [e4]
- **Questions #4** (cites e3, e15, e9): The SCED CCT checks competitiveness before each SCED execution, and the IMM may designate any constraint as competitive or non-competitive. [e3][e15][e9]
- **Questions #6** (cites e11, e18): Pivotal-supplier hours fell to 35% of top-quartile net load hours in 2025, but the IMM warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods. [e11][e18]
- **Link to sced** (cites e5, e6): used-in SCED (Security-Constrained Economic Dispatch): SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e5][e6]
- **Link to puct** (cites e1, e2) FLAG number-not-in-quote: 25.502: regulates PUCT (Public Utility Commission of Texas): PUCT Rule 25.502 requires ERCOT to develop protocols that mitigate the price effects of congestion on noncompetitive constraints. [e1][e2]
- **Link to imm** (cites e9, e11, e17): related Independent Market Monitor (Potomac Economics): The IMM may designate any constraint as competitive or non-competitive, and its reports track pivotal suppliers and mitigation. [e9][e11][e17]
- **Link to binding-constraint** (cites e15): related Binding Constraint: Constraint competitiveness is tested before each SCED execution. [e15]
- **Link to offer-cap** (cites e5, e6): contrasts-with Offer Caps (HCAP / LCAP / SWCAP): The system-wide offer cap limits every offer, while mitigated offer caps apply only to specific Resources dispatched to resolve non-competitive constraints. [e5][e6]
- **Link to ruc** (cites e8): related RUC (Reliability Unit Commitment: DRUC/HRUC): A RUC-committed unit resolving a non-competitive constraint is dispatched with offers capped at mitigated levels. [e8]
