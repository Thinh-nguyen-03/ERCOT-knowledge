---
id: market-power-mitigation
name: "Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps)"
aliases: [market power mitigation, mitigated offer cap, MOC, constraint competitiveness test, CCT, ECI, pivotal player, competitive constraint, non-competitive constraint, VMP]
kind: rule
domain: pricing
level: 2
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: sced
    type: used-in
    note: SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e5][e6]
  - to: puct
    type: regulates
    note: PUCT Rule 25.502 requires ERCOT to develop protocols that mitigate the price effects of congestion on noncompetitive constraints. [e1][e2]
  - to: imm
    type: related
    note: The IMM may designate any constraint as competitive or non-competitive, and its reports track pivotal suppliers and mitigation. [e9][e11][e17]
  - to: binding-constraint
    type: related
    note: Constraint competitiveness is tested before each SCED execution. [e15]
  - to: offer-cap
    type: contrasts-with
    note: Mitigated offer caps apply to Resources that meet the mitigation conditions for a non-competitive constraint, which is different from the system-wide offer cap covered in that topic. [e5][e6]
  - to: ruc
    type: related
    note: A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels, per the IMM. [e8]
  - to: rmr
    type: related
    note: ERCOT sets the MOC curve for an RMR Unit at the highest value expected to allow SCED to dispatch it. [e39]
  - to: shift-factor
    type: used-in
    note: ECI Effective Capacity weights each Resource's capacity by the square of its Shift Factor to the constraint, and mitigation needs a minimum Shift Factor (SFP4). [e21][e22]
  - to: energy-storage-resource
    type: related
    note: The MOC for ESRs is set at the RTSWCAP rather than from the heat-rate formula. [e34]
  - to: hsl-lsl
    type: used-in
    note: For the SCED CCT, Available Capacity is the telemetered HSL for Resources in specified statuses. [e19]
  - to: system-lambda
    type: related
    note: The RMR MOC under pending NPRR826 is built from system lambda of SCED Step 1 plus an adder. [e40]
evidence:
  - id: e1
    source: puct-25-502
    locator: "16 TAC 25.502(c)(5), definition of Noncompetitive constraint"
    quote: "Noncompetitive constraint -- A transmission element on which prices to relieve congestion are not moderated by the normal forces of competition between multiple, unaffiliated resources."
  - id: e2
    source: puct-25-502
    locator: "16 TAC 25.502(f), Noncompetitive constraints"
    quote: "ERCOT, through its stakeholder process, must develop protocols to mitigate the price effects of congestion on noncompetitive constraints."
  - id: e3
    source: np-03
    locator: "Section 3.19.1, Constraint Competitiveness Test Definitions, paragraph (1)"
    quote: "The Constraint Competitiveness Test (CCT) checks the competitiveness of a constraint by evaluating each Market Participant’s ability to exercise market power by physical or economic withholding."
  - id: e4
    source: np-03
    locator: "Section 3.19.4, SCED Constraint Competitiveness Test, paragraphs (2)(a)-(b)"
    quote: "The SCED CCT shall classify a constraint as competitive for the current SCED execution if the constraint meets all of the following conditions: (a) The ECI is less than ECIT2 on the import side; (b) The constraint can be resolved by eliminating all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME. If the constraint cannot be resolved, then the DME will be marked as the pivotal player for resolving the constraint;"
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)(b)(i), second step"
    quote: "each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource’s Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;"
  - id: e7
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1)"
    quote: "Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC)."
  - id: e8
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section E, Market Power Mitigation"
    quote: "When a unit that receives a RUC instruction is required to resolve a non-competitive transmission constraint, ERCOT often dispatches it in real time with its offer prices capped at mitigated levels."
  - id: e9
    source: np-03
    locator: "Section 3.19.4, paragraph (5)"
    quote: "The Independent Market Monitor (IMM) may designate any constraint as a Competitive Constraint or a Non-Competitive Constraint."
  - id: e10
    source: np-03
    locator: "Section 3.19.4, paragraph (7)(a)-(c)"
    quote: "(a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM; (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and (c) The Resource has a Shift Factor on the import side of the constraint with an absolute value greater than SFP4;"
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Competition and Market Power"
    quote: "The percentage of top-quartile net load hours with a pivotal supplier declined from over 90% in 2022 to 35% in 2025."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Competition and Market Power"
    quote: "Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation."
  - id: e13
    source: np-03
    locator: "Section 3.19.2, Element Competitiveness Index Calculation, paragraph (2)(c)"
    quote: "The ECI on the import side is equal to the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side."
  - id: e14
    source: puct-25-504
    locator: "16 TAC 25.504(b)(2), definition of Market power"
    quote: "Market power -- The ability to control prices or exclude competition in a relevant market."
  - id: e15
    source: np-03
    locator: "Section 3.19.1, paragraph (2)"
    quote: "The competitiveness of a constraint is tested both on a long-term basis and before each Security-Constrained Economic Dispatch (SCED) execution."
  - id: e16
    source: np-02
    locator: "Section 2.1, definition of Mitigated Offer Cap (MOC)"
    quote: "An upper limit on the price of an offer as detailed in Section 4.4.9.4.1, Mitigated Offer Cap."
  - id: e17
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section E, Market Power Mitigation"
    quote: "ERCOT’s real-time market includes a mechanism to mitigate offers for resources that may have local market power because they are required to manage a transmission constraint. Mitigation applies whether the unit is self-committed or receives a Reliability Unit Commitment (RUC) instruction."
  - id: e18
    source: imm-som-2025
    locator: "Executive Summary, Competition and Market Power"
    quote: "With extreme projected load growth in the ERCOT footprint, the market could become structurally uncompetitive during high-load periods within a few years."
  - id: e19
    source: np-03
    locator: "Section 3.19.1, paragraph (3)(a)(ii), Available Capacity for a Resource, SCED CCT"
    quote: "SCED CCT - the telemetered High Sustained Limit (HSL) for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, and zero for all other Resources."
  - id: e20
    source: np-03
    locator: "Section 3.19.1, paragraph (6), threshold table, ECIT2"
    quote: "ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300"
  - id: e21
    source: np-03
    locator: "Section 3.19.1, paragraph (6), threshold table, SFP4"
    quote: "SFP4 Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2 2%"
  - id: e22
    source: np-03
    locator: "Section 3.19.2, Element Competitiveness Index Calculation, paragraph (1)"
    quote: "The ECI Effective Capacity that each Entity contributes to resolve the constraint on the import side is determined by taking, for each Managed Capacity for an Entity having negative Shift Factors with absolute values greater than the minimum of one-third of the highest absolute value of any Resource Shift Factor with a negative value and SFP1, the sum of the products of (a) the Available Capacity for a Resource and (b) the square of the Shift Factor of that Resource to the constraint."
  - id: e23
    source: np-03
    locator: "Section 3.19.1, paragraph (6), threshold table, DMEECP"
    quote: "DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10%"
  - id: e24
    source: np-03
    locator: "Section 3.19.1, paragraph (6), threshold table, ECIT1"
    quote: "ECIT1 Maximum competitive threshold for ECI on the import side of a constraint for the Long-Term CCT process 2000"
  - id: e25
    source: np-03
    locator: "Section 3.19.3, Long-Term Constraint Competitiveness Test, paragraph (1)"
    quote: "The Long-Term CCT process is executed once a year and provides a projection of Competitive Constraints for the month with the highest forecasted Demand in the following year."
  - id: e26
    source: np-03
    locator: "Section 3.19.4, paragraph (4)"
    quote: "A constraint that is determined to be a Non-Competitive Constraint by the SCED CCT within an Operating Hour will not be re-evaluated for its competitiveness status for the remainder of that Operating Hour."
  - id: e27
    source: np-03
    locator: "Section 3.19.4, paragraph (5)"
    quote: "Any such designation from the IMM shall override the competitiveness status determined by the SCED CCT for the dates for which the IMM override is effective."
  - id: e28
    source: np-03
    locator: "Section 3.19.4, paragraph (6)"
    quote: "Each hour, ERCOT shall post on the ERCOT website whether each binding constraint was designated as a Competitive Constraint or as a Non-Competitive Constraint for each of the SCED executions during the previous Operating Hour."
  - id: e29
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(a), Step 1"
    quote: "The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints."
  - id: e30
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(b)(i), Step 2, floor"
    quote: "Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor."
  - id: e31
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1), formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e32
    source: np-04
    locator: "Section 4.4.9.4.1, variable table, GIHR"
    quote: "Generic Incremental Heat Rate—The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5."
  - id: e33
    source: np-04
    locator: "Section 4.4.9.4.1, variable table, IHR"
    quote: "Verifiable Incremental Heat Rate per Resource—The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process."
  - id: e34
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(c)"
    quote: "Notwithstanding the MOC calculation described in paragraph (1) above, the MOC for ESRs shall be set at the RTSWCAP."
  - id: e35
    source: np-04
    locator: "Section 4.4.9.4.1, variable table, FA and OM"
    quote: "Fuel Adder—The fuel adder is the average cost above the index price Resource r has paid to obtain fuel."
  - id: e36
    source: np-04
    locator: "Section 4.4.9.4.1, variable table, OM"
    quote: "Variable Operations and Maintenance Cost above LSL—The O&M cost for Resource r to operate above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process."
  - id: e37
    source: np-04
    locator: "Section 4.4.9.4.1, variable table, SFP"
    quote: "Solid Fuel Price—The solid fuel index price is $1.50."
  - id: e38
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1)"
    quote: "Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh"
  - id: e39
    source: np-04
    locator: "Section 4.4.9.4.3, Mitigated Offer Cap for RMR Resources, paragraph (1) (current text)"
    quote: "For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Unit may be required to resolve and variations in transmission system topology, ERCOT shall set the MOC curve equal to the highest value (in $/MWh) that is expected to allow SCED to Dispatch the RMR Unit."
  - id: e40
    source: np-04
    locator: "Section 4.4.9.4.3, pending NPRR826 replacement, paragraph (1)(e)"
    quote: "If the value from paragraph (b) above for every constraint analyzed is greater than zero, the RMR Resource’s MOC curve for use in Step 2 of the SCED process is the sum of system lambda from Step 1 of SCED in the interval and the value from (d) above."
  - id: e41
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(f)(i), Exceptional Fuel Cost"
    quote: "For all Resources, the weighted average fuel price must exceed FIP for the applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder."
  - id: e42
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(k), Exceptional Fuel Cost attestation"
    quote: "The accuracy of submitted Exceptional Fuel Cost and the need for purchasing intraday or same-day gas must be attested to by a duly authorized officer or agent of the QSE representing the Resource."
  - id: e43
    source: np-04
    locator: "Section 4.4.9.4, pending NPRR1325 replacement note"
    quote: "[NPRR1325: Replace Section 4.4.9.4 above with the following upon system implementation of PGRR145:]"
  - id: e44
    source: puct-25-504
    locator: "16 TAC 25.504(c), Withholding of production"
    quote: "A generation entity with market power that prices its services substantially above its marginal cost may be found to be withholding production; offering prices that are not substantially above marginal cost does not constitute withholding of production."
  - id: e45
    source: puct-25-504
    locator: "16 TAC 25.504(d), Voluntary mitigation plan"
    quote: "Adherence to a commission-approved voluntary mitigation plan must be considered in a proceeding to determine whether the generation entity violated PURA §39.157 or §25.503(g)(7) of this title and, if so, the amount of the administrative penalty to be assessed for the violation."
  - id: e46
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section D, Voluntary Mitigation Plans"
    quote: "Adherence to a VMP no longer constitutes an absolute defense against allegations of market power abuse with respect to the behaviors addressed by the VMP; instead, it must be considered in determining whether a violation occurred and, if so, the penalty to assess."
  - id: e47
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section D, Voluntary Mitigation Plans"
    quote: "In 2025, Calpine eliminated their VMP during the process of merging with Constellation which left only Luminant. Luminant’s VMP was amended in late 2025 and in early 2026 to reflect market changes that resulted from transitioning to the Real-Time Co-optimization Imarket framework."
  - id: e48
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding"
    quote: "The output gap is the quantity of energy not produced by online resources even though producing that output would be economic by a substantial margin at the real-time energy price."
  - id: e49
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding"
    quote: "In 2025, over 80% of hours exhibited an output gap, indicating a potential attempt to exercise market power through economic withholding."
  - id: e50
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section A, Structural Market Power"
    quote: "Pivotal suppliers, market participants with structural market power, existed in 10.3% of all hours in 2025, compared to 23.1% in 2024, 36.1% in 2023, and 42.5% in 2022."
  - id: e51
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section A, footnote 79"
    quote: "The methodology for identifying pivotal suppliers has been modified prior to the publishing of this report. This has resulted in a more stringent identification process and a lower frequency of hours with one or more pivotal suppliers."
  - id: e52
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section A, Structural Market Power"
    quote: "The PUCT elected to remove the small fish rule beginning June 1, 2026 (Project P-58379)."
  - id: e53
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, section 2, Evaluation of Potential Economic Withholding"
    quote: "The mitigated offer cap serves as a proxy for the resource’s marginal production cost of energy."

---

## Definition

Market power mitigation in ERCOT is the set of rules that cap a supplier's offers when it could exploit its position, mainly by limiting offers from Resources needed to resolve a non-competitive transmission constraint. [e17][e16] PUCT rules define market power as the ability to control prices or exclude competition in a relevant market, and require ERCOT to develop protocols to mitigate the price effects of congestion on noncompetitive constraints. [e14][e2]

## How it works

Mitigation has two parts: a test of whether a constraint is competitive, and a cap on offers when it is not. The Constraint Competitiveness Test (CCT) checks each constraint by evaluating each Market Participant's ability to exercise market power by physical or economic withholding. [e3] The index it uses, the ECI on the import side, is the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side. [e13] Each Entity's ECI Effective Capacity is the sum, over its Managed Capacity with a large enough negative Shift Factor, of Available Capacity times the square of the Shift Factor to the constraint. [e22] For the SCED CCT, Available Capacity is the telemetered HSL for Resources with the listed telemetered statuses and zero for all other Resources. [e19]

Two versions of the test run. The Long-Term CCT is executed once a year and projects Competitive Constraints for the month with the highest forecasted Demand in the following year. [e25] The SCED CCT is run before each SCED execution on all active constraints, [e15] and it classes a constraint as competitive only if it meets all of the listed conditions, including an ECI below ECIT2 on the import side and that the constraint can be resolved even when all Available Capacity of a Resource on the import side is eliminated (otherwise the DME is marked as the pivotal player). [e4] Once the SCED CCT finds a constraint non-competitive within an Operating Hour it is not re-evaluated for the rest of that hour. [e26] The IMM may designate any constraint competitive or non-competitive, [e9] and such a designation overrides the SCED CCT result for the dates it is effective. [e27] ERCOT posts each hour whether each binding constraint was competitive or non-competitive for each SCED execution in the previous Operating Hour. [e28]

A Resource's offer is mitigated in SCED Step 2 when the constraint is non-competitive (by the SCED CCT or the IMM), the Resource's DME is a pivotal player or holds more than a set share of the effective capacity, and the Resource has a large enough Shift Factor on the constraint. [e10]

Two-step SCED: Step 1 runs SCED over the full Network Operations Model observing only Competitive Constraints (plus power balance and Ancillary Service constraints) to produce Reference LMPs. [e29] In Step 2 each Energy Offer Curve is bounded at the lesser of the Reference LMP or the appropriate Mitigated Offer Floor, [e30] and an offer subject to mitigation is capped at the greater of (the Step 1 Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Resource's MOC curve at LSL) or the appropriate MOC. [e6] SCED applies this to resolve Non-Competitive Constraints for the current Operating Hour. [e5] The MOC is an upper limit on the price of an offer, and np-04 allows Energy Offer Curves and Energy Bid/Offer Curves to be mitigated with it in Real-Time operations. [e16][e7]

## Formula

Mitigated Offer Cap (np-04 Section 4.4.9.4.1), for each point of the incremental MOC curve of a Generation Resource r of QSE q in hour h: MOC = Max [GIHR * Max(FIP, WAFP), (IHR * FPRC + OM)]. [e31] In words:

- GIHR is the generic incremental heat rate: 10.5 for Resources with a Commercial Operations Date on or before January 1, 2004, and 14.5 for Resources with a later Commercial Operations Date. [e32]
- IHR is the verifiable incremental heat rate curve approved in the verifiable cost process. [e33]
- FIP is the natural gas index price and WAFP the Weighted Average Fuel Price submitted during the Adjustment Period (see Exceptional Fuel Cost below); FPRC is the calculated fuel price for the Resource based on its fuel mix, which includes the fuel adder FA, the average cost above the index price the Resource has paid to obtain fuel. [e31][e35]
- OM is the variable O&M cost above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process. [e36]
- The solid fuel index price used for solid fuel is $1.50. [e37]
- Exceptions: the MOC for ESRs is set at the RTSWCAP. [e34]

Mitigated Offer Floor (Section 4.4.9.4.2): Nuclear and Hydro -$250/MWh, Coal and Lignite -$20/MWh, Combined Cycle -$20/MWh, Gas/Oil Steam and Combustion Turbine -$20/MWh, Qualifying Facility -$50/MWh, Wind -$100/MWh, PhotoVoltaic -$50/MWh, ESR -$250/MWh, Other -$50/MWh. [e38]

CCT thresholds (Section 3.19.1): ECIT1 (Long-Term CCT ECI maximum) 2000 and ECIT2 (SCED CCT ECI maximum) 2300; DMEECP, the ECI Effective Capacity share above which a DME's Managed Capacity is eligible for Step 2 mitigation, is 10%; SFP4, the Shift Factor below which a Resource will not be mitigated in Step 2, is 2%. [e24][e20][e23][e21]

## ERCOT context

The IMM says ERCOT's real-time mitigation targets resources that may have local market power because they are required to manage a transmission constraint, and that it applies whether the unit is self-committed or receives a RUC instruction. [e17] A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e8]

Exceptional Fuel Cost: during the Adjustment Period a QSE may submit a volume-weighted average fuel price for use in its Resource's MOC, but for all Resources it must exceed FIP for the Operating Day plus a $1/MMBtu threshold parameter plus the applicable fuel adder, [e41] and the submitted accuracy must be attested by a duly authorized officer or agent of the QSE. [e42]

RMR Resources: under the current text ERCOT sets the MOC curve for an RMR Unit at the highest value expected to allow SCED to dispatch it, in consideration of the Shadow Price caps of the constraints it may resolve. [e39] The np-04 text also carries an NPRR826 replacement, pending system implementation, under which the RMR MOC for Step 2 would be system lambda from SCED Step 1 plus a value derived from constraint Shadow Prices. [e40] A further NPRR1325 replacement of Section 4.4.9.4, adding Adjusted Bid Caps, is pending upon system implementation of PGRR145. [e43]

Structure: the IMM reported pivotal suppliers in 10.3% of all hours in 2025, compared with 23.1% in 2024, 36.1% in 2023 and 42.5% in 2022. [e50] The IMM also says it modified the pivotal supplier methodology before publishing the 2025 report, which made the identification more stringent and lowered the frequency. [e51] The share of top-quartile net load hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e11] The PUCT elected to remove the "small fish" rule beginning June 1, 2026 (Project P-58379). [e52]

Behavior: the IMM measures potential economic withholding with an output gap, the energy not produced by online resources although producing would be economic by a substantial margin at the real-time energy price, and uses the mitigated offer cap as a proxy for marginal production cost. [e48][e53] In 2025 over 80% of hours exhibited an output gap, which the IMM calls a potential attempt to exercise market power, though it describes the quantities as low overall. [e49]

Legal standard (16 TAC 25.504): a generation entity with market power that prices its services substantially above its marginal cost may be found to be withholding production; offering prices not substantially above marginal cost does not constitute withholding. [e44] A generation entity may file a voluntary mitigation plan; adherence must be considered in deciding whether it violated PURA 39.157 or 25.503(g)(7) and in setting any penalty. [e45] The IMM says that since House Bill 1500 (effective September 1, 2023) adherence is no longer an absolute defense. [e46] The IMM reports that only Luminant had an effective VMP after Calpine eliminated its plan in 2025, and that Luminant's was amended in late 2025 and early 2026 for the real-time co-optimization framework. [e47]

Even so, the IMM continues to recommend system-wide market power mitigation [e12], and it separately warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods within a few years. [e18]

## Key facts

- Competitiveness is tested both on a long-term basis and before each SCED execution. [e15]
- SCED mitigation is two-step: Step 2 caps mitigated offers at the greater of the Reference LMP-based value or the MOC, and bounds offers below at the lesser of Reference LMP or the Mitigated Offer Floor. [e5][e6][e30]
- ECIT2 is 2300 for the SCED CCT; ECIT1 is 2000 for the Long-Term CCT. [e20][e24]
- Mitigation applies only to Resources whose Shift Factor passes SFP4 (2%) and whose DME is pivotal or above the DMEECP share (10%). [e10][e21][e23]
- The MOC for ESRs is the RTSWCAP. [e34]
- The IMM may override the test by designating any constraint competitive or non-competitive. [e9][e27]
- Pivotal-supplier hours: over 90% of top-quartile net load hours in 2022, 35% in 2025. [e11]
- The IMM continues to recommend system-wide market power mitigation. [e12]

## Say it like this

ERCOT does not cap every offer; it tests each binding constraint, and if too few independent suppliers can fix it, the units that can are limited to mitigated offer levels in SCED Step 2. The IMM continues to recommend system-wide mitigation and warns the market could become structurally uncompetitive in high-load periods as load grows. [e12][e18]

## Common confusion

This is not the system-wide offer cap (see the offer-cap topic). Mitigation in SCED applies to Energy Offer Curves that meet the Section 3.19.4 criteria for a non-competitive constraint. [e5][e6] The Mitigated Offer Floor in Step 2 is a separate lower bound, not the MOC. [e30][e38] A voluntary mitigation plan is a PUCT-approved plan about compliance with the market power rules and is separate from the real-time MOC. [e45]

## Questions

### What does "pivotal" mean in the constraint test?

An entity is a pivotal player for a constraint if the constraint cannot be resolved even after eliminating all its available capacity on the import side, excluding nuclear and minimum-energy amounts of coal and lignite. [e4]

### Who decides whether a constraint is competitive?

The SCED CCT checks competitiveness before each SCED execution, and the IMM may designate any constraint as competitive or non-competitive. [e3][e15][e9]

### Why does the IMM still recommend more mitigation if competition improved?

Pivotal-supplier hours fell to 35% of top-quartile net load hours in 2025, but the IMM warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods. [e11][e18]

### Why does ERCOT run SCED twice?

Step 1 prices with only Competitive Constraints to produce Reference LMPs; Step 2 then applies mitigated offer caps and floors, anchored to those Reference LMPs, while observing all constraints. [e29][e30][e6]

### What if a generator's real fuel cost is far above the gas index?

It may submit an Exceptional Fuel Cost during the Adjustment Period if its weighted average fuel price exceeds FIP plus $1/MMBtu plus the fuel adder, and an officer or agent must attest to its accuracy. [e41][e42]

### Why would a Resource with a tiny Shift Factor not be mitigated?

Mitigation is not applied to a Resource below the SFP4 threshold (2%), so only Resources that can meaningfully help resolve the constraint are capped. [e21][e10]

## Scenarios

### A constraint is declared non-competitive at 14:10. What happens to the 14:40 SCED run?

- The SCED CCT will not re-evaluate that constraint's competitiveness status for the rest of the Operating Hour. [e26]
- Resources whose DME is pivotal or above the 10% share, and whose Shift Factor passes the 2% threshold, face the MOC cap in Step 2. [e10][e23][e21]

## Open items

- "TPS test" (three pivotal supplier) does not appear anywhere in the saved sources; ERCOT's described tests are the ECI and pivotal-player tests. The topic list may need revisiting if a TPS test was intended.
- Resolved 2026-11-21: the numeric thresholds (ECIT1 2000, ECIT2 2300, DMEECP 10%, SFP4 2%) are now quoted from np-03 Section 3.19.1.
- Resolved 2026-11-21: the MOC formula, generic heat rates, Mitigated Offer Floor table and the RMR MOC (current and pending NPRR826) are now covered.
- Still open: the Verifiable Cost Manual (fuel adder and O&M approval process) is not saved, so how verifiable costs are approved cannot be described beyond the np-04 variable definitions.
- Still open: the effect of NPRR1325 and PGRR145 (Adjusted Bid Caps for Provisional Controllable Load Resources) and NPRR1182 (Controllable Load Resources in the CCT) is pending and not described beyond the notes quoted here.
- Still open: an IMM quantity for how much mitigation reduced offers in 2025 (the mitigated output gap figure) was not readable as text.
