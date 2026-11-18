---
id: market-power-mitigation
name: "Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps)"
aliases: [market power mitigation, mitigated offer cap, MOC, constraint competitiveness test, CCT, ECI, pivotal player, competitive constraint, non-competitive constraint, VMP]
kind: rule
domain: pricing
level: 2
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-18
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
    note: The system-wide offer cap limits every offer, while mitigated offer caps apply only to specific Resources dispatched to resolve non-competitive constraints. [e5][e6]
  - to: ruc
    type: related
    note: A RUC-committed unit resolving a non-competitive constraint is dispatched with offers capped at mitigated levels. [e8]
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
---

## Definition

Market power mitigation in ERCOT is the set of rules that cap a supplier's offers when it could exploit its position, mainly by limiting offers from Resources needed to resolve a non-competitive transmission constraint. [e17][e16] PUCT rules define market power as the ability to control prices or exclude competition in a relevant market, and require ERCOT to develop protocols to mitigate the price effects of congestion on noncompetitive constraints. [e14][e2]

## How it works

Mitigation has two parts: a test of whether a constraint is competitive, and a cap on offers when it is not. The Constraint Competitiveness Test (CCT) checks each constraint by evaluating each Market Participant's ability to exercise market power by physical or economic withholding. [e3] The index it uses, the ECI on the import side, is the sum of the squares of the percentages of ECI Effective Capacity for each DME on the import side. [e13] The test is run before each SCED execution. [e15] The SCED CCT classes a constraint as competitive only if it meets all of the listed conditions, including an ECI below ECIT2 on the import side and that the constraint can be resolved even when all Available Capacity of a Resource on the import side is eliminated (otherwise the DME is marked as the pivotal player). [e4]

A Resource's offer is mitigated in SCED Step 2 when the constraint is non-competitive (by the SCED CCT or the IMM), the Resource's DME is a pivotal player or holds more than a set share of the effective capacity, and the Resource has a large enough Shift Factor on the constraint. [e10] The second step of the SCED method applies this mitigation. [e6] The IMM may designate any constraint as competitive or non-competitive. [e9]

SCED uses a two-step method that applies mitigation to energy offers prospectively to resolve Non-Competitive Constraints for the current Operating Hour. [e5] In Step 2, an offer subject to mitigation is capped at the greater of the Step 1 Reference LMP at the Resource Node plus a small variable, or the Resource's Mitigated Offer Cap (MOC) curve. [e6] The MOC is an upper limit on the price of an offer, and np-04 allows Energy Offer Curves and Energy Bid/Offer Curves to be mitigated with it in Real-Time operations. [e16][e7]

## ERCOT context

The IMM says ERCOT's real-time mitigation targets resources that may have local market power because they are required to manage a transmission constraint, and that it applies whether the unit is self-committed or receives a RUC instruction. [e17] A RUC-committed unit resolving a non-competitive constraint is often dispatched with offers capped at mitigated levels. [e8] Structurally, the share of top-quartile net load hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e11]

Even so, the IMM continues to recommend system-wide market power mitigation [e12], and it separately warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods within a few years. [e18]

## Key facts

- Competitiveness is tested both on a long-term basis and before each SCED execution. [e15]
- SCED mitigation is two-step: Step 2 caps mitigated offers at the greater of Reference LMP (plus a small variable) or the MOC. [e5][e6]
- The IMM may override the test by designating any constraint competitive or non-competitive. [e9]
- Pivotal-supplier hours: over 90% of top-quartile net load hours in 2022, 35% in 2025. [e11]
- The IMM recommends adding system-wide mitigation. [e12]

## Say it like this

ERCOT does not cap every offer; it tests each binding constraint, and if too few independent suppliers can fix it, the units that can are limited to mitigated offer levels in SCED Step 2. The IMM continues to recommend system-wide mitigation and warns the market could become structurally uncompetitive in high-load periods as load grows. [e12][e18]

## Common confusion

This is not the system-wide offer cap. The offer caps limit every offer, while mitigation applies only to the Resources that SCED relies on for a non-competitive constraint. [e5][e6] The saved protocols describe the ECI and pivotal-player tests. [e4][e13]

## Questions

### What does "pivotal" mean in the constraint test?

An entity is a pivotal player for a constraint if the constraint cannot be resolved even after eliminating all its available capacity on the import side, excluding nuclear and minimum-energy amounts of coal and lignite. [e4]

### Who decides whether a constraint is competitive?

The SCED CCT checks competitiveness before each SCED execution, and the IMM may designate any constraint as competitive or non-competitive. [e3][e15][e9]

### Why does the IMM still recommend more mitigation if competition improved?

Pivotal-supplier hours fell to 35% of top-quartile net load hours in 2025, but the IMM warns that extreme projected load growth could make the market structurally uncompetitive during high-load periods. [e11][e18]

## Open items

- "TPS test" (three pivotal supplier) does not appear anywhere in the saved sources; ERCOT's described tests are the ECI and pivotal-player tests. The topic list may need revisiting if a TPS test was intended.
- The numeric thresholds (ECIT2 2300, SFP4 2%, DMEECP 10%) are in a np-03 Section 3.19.1 table not quoted here.
- Deeper pass: the MOC formula inputs (generic and verifiable heat rates, fuel adders, O&M), Mitigated Offer Floor table, MOC for RMR Resources (np-04 Section 4.4.9.4.3, with pending NPRR826), and pending NPRR1325 / PGRR145 changes.
- Deeper pass: PUCT 25.504 withholding standard and Voluntary Mitigation Plans (the IMM reports only Luminant's was in effect at the end of 2025), and the IMM's output gap analysis.
