---
id: reliability-standard
name: ERCOT Reliability Standard
aliases: [reliability standard, 25.508, LOLE, 0.1 LOLE, 1-in-10, Reliability Standard Assessment, RSA, loss of load event]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: resource-adequacy
    type: prerequisite-of
    note: The standard is the formal yardstick for judging whether the ERCOT system has enough supply, assessed at least every three years. [e6]
  - to: puct
    type: regulates
    note: 16 TAC 25.508 is the PUCT rule setting the standard, and the PUCT decides whether market design changes are needed after each assessment. [e1][e14]
  - to: imm
    type: related
    note: The IMM must independently review ERCOT's proposed market design changes if the standard is not met. [e13]
  - to: energy-only-market
    type: related
    note: The IMM says meeting the standard through price signals alone would imply an extraordinarily high VOLL in an energy-only market. [e10]
  - to: weatherization
    type: related
    note: The assessment must state a weatherization effectiveness assumption tied to the weatherization standards in 25.55. [e8]
  - to: cdr-report
    type: contrasts-with
    note: The standard is a probability-based simulation test; how it relates to the CDR was not sourced. [e1]
  - to: texas-legislature
    type: related
    note: SB 3 (2021) directed the PUCT to develop and implement a formal reliability standard. [e9]
evidence:
  - id: e1
    source: puct-25-508
    locator: "16 TAC 25.508(b)"
    quote: "The bulk power system for the ERCOT region meets the reliability standard if an ERCOT probability-based model simulation demonstrates that the system meets each of the criteria provided in this subsection."
  - id: e2
    source: puct-25-508
    locator: "16 TAC 25.508(b)(1)"
    quote: "Frequency. The expected loss of load events for the ERCOT region must be equal to or less than one event per ten years on average, i.e., 0.1 loss of load expectation (LOLE)."
  - id: e3
    source: puct-25-508
    locator: "16 TAC 25.508(b)(2)"
    quote: "Duration. The maximum expected length of a loss of load event for the ERCOT region, measured in hours, must be less than 12 hours, with a 1.00 percent exceedance tolerance."
  - id: e4
    source: puct-25-508
    locator: "16 TAC 25.508(b)(3)"
    quote: "Magnitude. The expected highest level of load shed during a loss of load event for the ERCOT region, measured as the average lost load for a given hour, must be less than the maximum number of megawatts of load shed that can be safely rotated during a loss of load event, as determined by ERCOT, in consultation with commission staff and the transmission operators, with a 1.00 percent exceedance tolerance."
  - id: e5
    source: puct-25-508
    locator: "16 TAC 25.508(a)(2)"
    quote: "an occurrence when the system-wide firm load plus minimum operating reserves required to avoid an energy emergency alert level three event is greater than the available resource capacity to serve that load, resulting in involuntary load shed."
  - id: e6
    source: puct-25-508
    locator: "16 TAC 25.508(c)"
    quote: "Beginning January 1, 2026, ERCOT must initiate an assessment to determine whether the bulk power system for the ERCOT region is meeting the reliability standard and is likely to continue to meet the reliability standard for the three years following the date of assessment. The assessment must be conducted at least once every three years."
  - id: e7
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(C)"
    quote: "ERCOT must provide the commission with a summary explanation of any identified deficiencies and its supporting analysis. ERCOT must also provide the commission with a menu of proposed recommended market design changes, including a primary recommendation, that are intended to address the identified deficiencies."
  - id: e8
    source: puct-25-508
    locator: "16 TAC 25.508(a)(4)"
    quote: "Weatherization effectiveness -- the assumed percentage reduction in the amount of weatherrelated unplanned outages for generation resources and energy storage resources included in the model, due to compliance with the weatherization standards in §25.55 of this title (relating to Weather Emergency Preparedness)."
  - id: e9
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section F, ERCOT's Reliability Standard, Background"
    quote: "Senate Bill (SB) 3, which the 87th Texas Legislature passed in the aftermath of Winter Storm Uri in 2021, established the foundation for ERCOT’s reliability standard. SB 3 directed the PUCT to develop and implement a formal reliability standard for the ERCOT power region."
  - id: e10
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section F, Additional Notes on the RSA"
    quote: "As we have previously noted, meeting the reliability standard defined in 16 TAC §25.508 through price signals alone would imply an operational VOLL that is extraordinarily high for an energy-only market like ERCOT’s."
  - id: e11
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section F, 2026 Reliability Standard Assessment"
    quote: "The RSA schedule requires ERCOT to file its reliability assessment results in August 2026, along with market design options if the model outputs suggest that ERCOT is unlikely to meet the reliability standard in 2029."
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section F, Additional Notes on the RSA"
    quote: "The Commission should clarify whether the reliability standard is intended to function as a binding requirement that the market must meet or as an aspirational benchmark against which alternative market design options are evaluated to improve reliability outcomes over time."
  - id: e13
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(C)(ii)"
    quote: "the independent market monitor must conduct an independent review of ERCOT’s proposed recommended market design changes, including associated expected system costs for each proposed recommended change, and file its review no later than the deadline established in subparagraph (B) of this paragraph; and"
  - id: e14
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(D)"
    quote: "The commission will review ERCOT’s assessment and any recommendations, the independent market monitor’s review, commission staff’s recommendations, and stakeholder comments to determine whether any market design changes may be necessary."
---

## Definition

The ERCOT reliability standard is set in PUCT rule 16 TAC 25.508. The ERCOT bulk power system meets it if an ERCOT probability-based model simulation shows the system meets each of three criteria: frequency, duration and magnitude of loss of load events. [e1][e2][e3][e4]

## How it works

The frequency criterion is no more than one loss of load event per ten years on average, i.e., 0.1 loss of load expectation (LOLE). [e2] The duration criterion is that the maximum expected length of an event must be under 12 hours, with a 1.00 percent exceedance tolerance. [e3] The magnitude criterion is that the expected highest level of load shed must be below the maximum load that can be safely rotated, as determined by ERCOT with PUCT staff and transmission operators, again with a 1.00 percent exceedance tolerance. [e4] A loss of load event is when firm load plus the minimum operating reserves needed to avoid EEA Level 3 exceeds available capacity, resulting in involuntary load shed. [e5]

Starting January 1, 2026, ERCOT must assess whether the system meets the standard and is likely to keep meeting it for the following three years, at least once every three years. [e6] If deficiencies are identified, ERCOT must give the PUCT a summary of deficiencies and a menu of proposed market design changes with a primary recommendation. [e7] The model assumptions include a weatherization effectiveness, the assumed percentage reduction in weather-related unplanned outages from complying with 25.55. [e8]

## ERCOT context

The IMM says SB 3, passed after Winter Storm Uri, directed the PUCT to develop a formal reliability standard, which is the basis of the standard in 25.508. [e9] For the 2026 Reliability Standard Assessment, per the IMM, ERCOT is to file results in August 2026, along with market design options if the model suggests the standard will not be met in 2029. [e11] The IMM argues that meeting the standard through price signals alone would imply an extraordinarily high VOLL in an energy-only market, and asks the PUCT to clarify whether the standard is a binding requirement or an aspirational benchmark. [e10][e12]

## Key facts

- Frequency: no more than one loss of load event per ten years on average (0.1 LOLE). [e2]
- Duration: expected maximum event length under 12 hours, with a 1.00 percent exceedance tolerance. [e3]
- Magnitude: expected highest load shed below the maximum that can be safely rotated. [e4]
- Assessment at least once every three years, beginning January 1, 2026. [e6]
- If deficiencies are identified, ERCOT proposes market design changes; the PUCT decides whether changes are needed. [e7][e14]

## Say it like this

Texas has a formal one-in-ten-year loss-of-load standard with caps on how long and how large an outage can be. ERCOT must test the grid against it at least every three years and, if it fails, propose market design fixes to the PUCT.

## Common confusion

The standard is a probability-based simulation test. [e1] Failing it does not automatically trigger a specific remedy: ERCOT proposes options and the PUCT decides whether market design changes are necessary. [e7][e14] The IMM has asked the PUCT to clarify whether the standard is binding. [e12]

## Questions

### What are the three criteria?

Frequency (0.1 LOLE, one event in ten years on average), duration (under 12 hours with 1.00 percent exceedance tolerance), and magnitude (load shed below the maximum that can be safely rotated, with 1.00 percent tolerance). [e2][e3][e4]

### What happens if the assessment fails the standard?

ERCOT provides the PUCT with a summary of deficiencies and a menu of market design changes with a primary recommendation. [e7] The rule also requires the IMM to review them independently, and the PUCT then decides whether changes are necessary. [e13][e14]

### Why does the IMM say the standard is hard to meet in ERCOT?

It says meeting the standard through price signals alone would imply an extraordinarily high operational VOLL in an energy-only market. [e10]

## Open items

- Deeper pass: the staff recommendation step (25.508(c)(3)(C)(iii)), comment periods and the modeling-assumptions filing process were read but not quoted.
- The outcome of the 2026 assessment (filed August 2026 per the IMM schedule) was not found in the saved sources; the IMM report predates it.
- The load-shed rotation maximum that ERCOT files each December 1 was not found.
- The IMM says the first RSA's schedule is subject to change; the final schedule was not sourced.
- Deeper pass: how the standard relates to the CDR and MORA reporting (the IMM discusses them in the same chapter).
