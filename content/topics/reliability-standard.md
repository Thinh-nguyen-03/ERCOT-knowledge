---
id: reliability-standard
name: ERCOT Reliability Standard
aliases: [reliability standard, 25.508, LOLE, 0.1 LOLE, 1-in-10, Reliability Standard Assessment, RSA, loss of load event]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-21
depth: deep
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
    note: The rule defines weatherization effectiveness as an assumed percentage reduction in weather-related unplanned outages due to compliance with the weatherization standards in 25.55. [e8]
  - to: cdr-report
    type: related
    note: The CDR's ELCC method is built to line up with the probabilistic model that supports the reliability standard analysis, but the CDR is a planning report and not the standard itself. [e32][e33]
  - to: texas-legislature
    type: related
    note: SB 3 (2021) directed the PUCT to develop and implement a formal reliability standard. [e9]
  - to: mora-report
    type: contrasts-with
    note: The IMM says the MORA's 2025 reports implied a roughly 49% minimum annual probability of firm load shed, which it calls implausibly high, whereas the standard is a three-year-forward 0.1 LOLE test. [e34][e2]
  - to: long-term-load-forecast
    type: prerequisite-of
    note: ERCOT recommended using the LTLF as the load forecast input to the 2026 Reliability Assessment, and the PUCT approved an adjusted LTLF for it. [e26][e28]
  - to: load-shed
    type: related
    note: The magnitude criterion is tied to the maximum load shed that can be safely rotated, which ERCOT determines by surveying transmission operators. [e4][e30]
  - to: large-load-growth
    type: related
    note: ERCOT said the ongoing Batch Zero load work meant it did not yet have a final load forecast, and asked to file the 2027 magnitude by the second quarter of 2027. [e31][e42]
  - to: drrs
    type: related
    note: ERCOT's board-item comments say the 2026 reliability assessment will determine whether further market design changes are needed and that DRRS is among the options. [e37]
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
  - id: e15
    source: puct-25-508
    locator: "16 TAC 25.508(a)(1) (copy effective 9/29/24)"
    quote: "Exceedance tolerance -- the maximum acceptable percentage of simulations in which the modeled ERCOT system experiences a loss of load event that exceeds the threshold for a given criterion of the reliability standard."
  - id: e16
    source: puct-25-508
    locator: "16 TAC 25.508(b)(3), second sentence"
    quote: "Beginning in 2024, on or before December 1 of each year, ERCOT must file the maximum number of megawatts of load shed that can be safely rotated during a loss of load event and a summary of the methodology used to calculate this value."
  - id: e17
    source: puct-25-508
    locator: "16 TAC 25.508(c)(1)(A), Modeling assumptions"
    quote: "Before conducting the assessment, ERCOT must file a comprehensive list of proposed modeling assumptions to be used in the reliability assessment. The proposed assumptions must include: (i) the number of historic weather years that will be included in the modeling; (ii) the amount of new resources and retirements, in megawatts, listed by resource type; (iii) the weatherization effectiveness; and (iv) any other assumptions that would impact the modeling results, along with an explanation of the possible impact of the additional assumptions."
  - id: e18
    source: puct-25-508
    locator: "16 TAC 25.508(c)(1)(B)"
    quote: "Commission staff will provide interested persons with at least 30 days from the date ERCOT files its proposed modeling assumptions to file comments recommending modifications to ERCOT’s proposed modeling assumptions."
  - id: e19
    source: puct-25-508
    locator: "16 TAC 25.508(c)(2)(A), Assessment components"
    quote: "ERCOT’s assessment must include review and analysis of the resource fleet, loads, and other system characteristics for the ERCOT region for the following points in time: (i) the current year’s system configuration; and (ii) the expected system configuration three years from the date of the current year’s system analysis."
  - id: e20
    source: puct-25-508
    locator: "16 TAC 25.508(c)(2)(B)"
    quote: "The assessment results must include, at a minimum, the following metrics for each point in time: (i) the LOLE; (ii) the probability of a loss of load event exceeding the duration threshold established in subsection (b)(2) of this section; (iii) the probability of a loss of load event exceeding the magnitude threshold established in subsection (b)(3) of this section; (iv) the expected unserved energy; and (v) the normalized expected unserved energy."
  - id: e21
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(B)"
    quote: "Commission staff will provide interested persons with at least 30 days from the date ERCOT files its assessment to file comments on ERCOT’s assessment."
  - id: e22
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(C)(iii)"
    quote: "commission staff must provide a recommendation to the commission, considering expected system costs and reliability benefits, on whether any market design changes or other changes may be necessary to address the deficiency."
  - id: e23
    source: puct-25-508
    locator: "16 TAC 25.508(c)(3)(C)(i), last sentence"
    quote: "ERCOT must provide the commission with the expected system costs associated with each of its proposed recommended changes;"
  - id: e24
    source: imm-som-2025
    locator: "page 127 (OCR), Resource Adequacy, F.3 2026 Reliability Standard Assessment"
    quote: "The 2026 RSA has already begun, and ERCOT is conducting the assessment based on modeling assumptions it filed in January 2026. Stakeholders and the PUC reviewed these assumptions in February and March of 2026, and PUC staff filed final recommendations in April 2026."
  - id: e25
    source: imm-som-2025
    locator: "page 128 (OCR), Resource Adequacy, F.4 Additional Notes on the RSA"
    quote: "The final recommendations emerging from the RSA are not expected to rely exclusively on increasing VOLL. Instead, they are expected to evaluate a range of potential market design options."
  - id: e26
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust the Load Forecast (Project 59772, May 2026), Background"
    quote: "On April 15, 2026, ERCOT filed the LTLF in Project No. 58777 in accordance with ERCOT's recommendation that it be used for the load forecast modeling input to Strategic Energy & Risk Valuation Model (SERVM) for performance ofthe 2026 Reliability Assessment."
  - id: e27
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust the Load Forecast, Option B discussion"
    quote: "ERCOT anticipates that this would delay the delivery of the results of the 2026 Triennial Reliability Assessment until November or December 2026."
  - id: e28
    source: puct-59772-order
    locator: "PUCT Project 59772, Order Granting ERCOT's Load Forecast Adjustment Request (June 2026), page 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e29
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT Motion for Good Cause Exception Regarding 2027 Magnitude (Project 58777, filed 2026-11-06), Section I"
    quote: "The magnitude value for 2026 is 13,988 MW based on a systemwide winter 2025-2026 peak load of 77,338 MW."
  - id: e30
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT Motion for Good Cause Exception Regarding 2027 Magnitude, Section I"
    quote: "To determine the magnitude criterion' s value, ERCOT has in prior years issued a Request for Information (RFI) to Transmission Operators (TOs) to determine the total megawatts (MW) in each TO's respective load shed rotation program and, of that total, how many MW can be shed at any one time to facilitate rotation of load shed."
  - id: e31
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT Motion for Good Cause Exception Regarding 2027 Magnitude, Section II"
    quote: "Due to the ongoing work to finalize the Batch Zero load values, ERCOT does not yet have a final load forecast, including an official peak load forecast for winter 2026-2027."
  - id: e32
    source: ercot-cdr-2025-12
    locator: "December 2025 CDR, ELCC Background, Why has ERCOT changed its method"
    quote: "Importantly, the ELCC method aligns the CDR with how IBRs are represented in the probabilistic simulation model to be used to support analysis for the Texas Public Utility Commission’s new Reliability Standard."
  - id: e33
    source: ercot-cdr-2025-12
    locator: "December 2025 CDR, notes before ELCC Background"
    quote: "Note that the CDR is not intended for characterizing the risk of capacity scarcity conditions from a real-time operations perspective."
  - id: e34
    source: imm-som-2025
    locator: "page 129 (OCR), Resource Adequacy, G.1 Monthly Outlook for Resource Adequacy"
    quote: "The minimum annual LOLP implied by ERCOT’s MORA reports for 2025 is approximately 49%, indicating that, under prevailing system conditions, a firm load shed event due to insufficient capacity should occur roughly every other year. However, there has not been such an event in over five years as of this writing."
  - id: e35
    source: imm-som-2025
    locator: "page 130 (OCR), Resource Adequacy, G.2 Capacity, Demand, and Reserves Report"
    quote: "Unlike the MORA, a near-term operational tool, the CDR is a planning tool that provides a broad view of medium-term resource adequacy trends."
  - id: e36
    source: imm-som-2025
    locator: "page 126 (OCR), Resource Adequacy, F.1 Background"
    quote: "If a reliability standard is mandatory, it creates imposed demand for installed capacity that can drive new investment when the standard would not otherwise be met."
  - id: e37
    source: ercot-nprr1309-comments-2026-05
    locator: "ERCOT comments on NPRR1309 (Board item 15.1.2.3, May 2026), Summary, Future Optionality for Resource Adequacy"
    quote: "The 2026 reliability assessment (results targeted for fall 2026) will determine whether further market design changes are needed – DRRS is on the list of options."
  - id: e38
    source: ercot-annual-report-2025
    locator: "2025 ERCOT Annual Report (March 2026), PUCT Rulemaking Projects, Reliability Standard Assessment"
    quote: "We supported the PUCT in developing ERCOT’s first empirical Reliability Standard. In 2026, we will conduct an inaugural probability-based assessment to evaluate the grid’s compliance with this standard"
  - id: e39
    source: puct-25-505
    locator: "16 TAC 25.505(b), Resource adequacy reports (copy effective 05/11/2022)"
    quote: "ERCOT must publish a resource adequacy report by December 31 of each year that projects, for at least the next five years, the capability of existing and planned electric generation resources and load resources to reliably meet the projected system demand in the ERCOT power region."
  - id: e40
    source: puct-25-508
    locator: "16 TAC 25.508(c)(1)(C)"
    quote: "After reviewing filed comments, ERCOT, in consultation with commission staff, must file its final recommended modeling assumptions for commission review."
  - id: e41
    source: puct-59772-order
    locator: "PUCT Project 59772, Order Granting ERCOT's Load Forecast Adjustment Request, page 1"
    quote: "Adjustment using Batch Zero Base Load per Planning Guide Revision Request (PGRR) 145"
  - id: e42
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT Motion for Good Cause Exception Regarding 2027 Magnitude, Section II"
    quote: "ERCOT anticipates that the updated magnitude could be filed no later than the second quarter of 2027 after issuing RFIs near the end of the first quarter of 2027."
  - id: e43
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section F, Additional Notes on the RSA"
    quote: "The reliability standard is significant because it creates a formal pathway to consider a broad range of market design options to improve reliability in ERCOT."
  - id: e44
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust the Load Forecast, Option B discussion"
    quote: "ERCOT recommends that the Batch Zero adjustment option is justified because the benefit of a more reliable load forecast outweighs the cost of the additional time required."
  - id: e45
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust the Load Forecast, Background"
    quote: "In its April 15th filing, ERCOT indicated that it had concerns with using these values in the Reliability Assessment and any other transmission and resource adequacy analysis."
---

## Definition

The ERCOT reliability standard is set in PUCT rule 16 TAC 25.508. The ERCOT bulk power system meets it if an ERCOT probability-based model simulation shows the system meets each of three criteria: frequency, duration and magnitude of loss of load events. [e1][e2][e3][e4]

## How it works

**The three criteria.** The frequency criterion is no more than one loss of load event per ten years on average, i.e., 0.1 loss of load expectation (LOLE). [e2] The duration criterion is that the maximum expected length of an event must be under 12 hours, with a 1.00 percent exceedance tolerance. [e3] The magnitude criterion is that the expected highest level of load shed, measured as the average lost load for a given hour, must be below the maximum load that can be safely rotated, as determined by ERCOT with PUCT staff and transmission operators, again with a 1.00 percent exceedance tolerance. [e4] An exceedance tolerance is the maximum acceptable percentage of simulations in which a loss of load event exceeds the threshold for a criterion. [e15] A loss of load event is when firm load plus the minimum operating reserves needed to avoid EEA Level 3 exceeds available capacity, resulting in involuntary load shed. [e5]

**The magnitude value is updated yearly.** Beginning in 2024, on or before December 1 each year, ERCOT must file the maximum MW of load shed that can be safely rotated and a summary of its methodology. [e16] ERCOT gets the number by sending a Request for Information to transmission operators on the total MW in each one's load shed rotation program and how many MW can be shed at any one time to facilitate rotation. [e30] ERCOT's November 2026 filing gives the 2026 value as 13,988 MW, based on a systemwide winter 2025-2026 peak load of 77,338 MW. [e29]

**The assessment process.** Starting January 1, 2026, ERCOT must assess whether the system meets the standard and is likely to keep meeting it for the following three years, at least once every three years. [e6] Before assessing, ERCOT files proposed modeling assumptions, which must include the number of historic weather years, new resources and retirements in MW by resource type, the weatherization effectiveness, and any other assumptions that would affect results. [e17] PUCT staff gives interested persons at least 30 days to comment on them, and after reviewing comments ERCOT, in consultation with staff, files its final recommended assumptions for Commission review. [e18][e40] The assessment covers two points in time: the current year's configuration and the expected configuration three years from the date of the current year's analysis. [e19] Results must include, at minimum, LOLE, the probability of an event exceeding the duration threshold, the probability of exceeding the magnitude threshold, expected unserved energy and normalized expected unserved energy. [e20] The rule defines weatherization effectiveness, one of the assumptions, as the assumed percentage reduction in weather-related unplanned outages from complying with 25.55. [e8]

**If the standard is not met.** ERCOT gives the PUCT a summary of deficiencies and a menu of proposed market design changes with a primary recommendation, plus expected system costs for each. [e7][e23] The IMM must independently review the proposals and costs. [e13] PUCT staff gives at least 30 days for comments on the assessment and then recommends, weighing expected system costs and reliability benefits, whether market design or other changes may be necessary. [e21][e22] The PUCT reviews ERCOT's assessment and recommendations, the IMM review, staff's recommendations and stakeholder comments to decide whether market design changes may be necessary. [e14]

## ERCOT context

The IMM says SB 3, passed after Winter Storm Uri, directed the PUCT to develop a formal reliability standard, and that the PUCT rule setting the standard is 16 TAC 25.508. [e9][e10] ERCOT's 2025 annual report says it supported the PUCT in developing ERCOT's first empirical reliability standard and would conduct an inaugural probability-based assessment in 2026. [e38]

For the 2026 assessment (PUCT Project No. 58777), per the IMM, ERCOT is using modeling assumptions filed in January 2026, which stakeholders and the PUC reviewed in February and March, with PUC staff final recommendations filed in April 2026. [e24] The IMM's report said the results were due in August 2026 along with market design options if the model suggested the standard would not be met in 2029. [e11] That schedule has since slipped: ERCOT recommended the Long-Term Load Forecast as the load input for the assessment, said it had concerns with using its values, and proposed to adjust it; its adjustment proposal said that using the Batch Zero option would delay results until November or December 2026. [e26][e45][e27] The PUCT approved ERCOT's request to adjust the LTLF using the Option B methodology, which the order describes as adjustment using Batch Zero Base Load per PGRR 145. [e28][e41] ERCOT's board-item comments in May 2026 said results were targeted for fall 2026 and would determine whether further market design changes are needed, with DRRS among the options. [e37] The saved sources do not contain the assessment results.

The IMM says the standard creates a formal pathway to consider a broad range of market design options, argues that meeting it through price signals alone would imply an extraordinarily high VOLL in an energy-only market, and says the RSA's final recommendations are not expected to rely exclusively on a higher VOLL. [e43][e10][e25] It also asks the PUCT to clarify whether the standard is a binding requirement or an aspirational benchmark. [e12] The IMM notes that a mandatory standard creates imposed demand for installed capacity that can drive investment. [e36]

**Relationship to CDR and MORA.** The CDR is a planning report: PUCT rule 25.505 requires an annual resource adequacy report projecting at least five years ahead. [e39] ERCOT says the CDR's ELCC method aligns it with how inverter-based resources are represented in the probabilistic model to be used for the reliability standard analysis, and that the CDR is not meant to characterize capacity scarcity risk from a real-time operations perspective. [e32][e33] The IMM describes the CDR as a planning tool, unlike the near-term MORA. [e35] The IMM also analysed MORA reports and found they implied a minimum annual probability of firm load shed of approximately 49% for 2025 while no such event had occurred in over five years, which it called implausibly high; that is an IMM empirical check of MORA and not a test under the standard. [e34]

## Key facts

- Frequency: no more than one loss of load event per ten years on average (0.1 LOLE). [e2]
- Duration: expected maximum event length under 12 hours, with a 1.00 percent exceedance tolerance. [e3]
- Magnitude: expected highest load shed below the maximum that can be safely rotated; the 2026 value is 13,988 MW. [e4][e29]
- Assessment at least once every three years, beginning January 1, 2026. [e6]
- If deficiencies are identified, ERCOT proposes market design changes with expected system costs; the IMM reviews them and the PUCT decides whether changes are needed. [e7][e23][e13][e14]
- The magnitude value is filed by December 1 each year; ERCOT sought a good cause exception on November 6, 2026 to file the 2027 value by the second quarter of 2027. [e16][e31][e42]

## Timeline

- 2021: SB 3 directs the PUCT to develop a formal reliability standard (per the IMM). [e9]
- 2024: the annual magnitude filing begins (on or before December 1). [e16]
- January 1, 2026: ERCOT must begin the first assessment. [e6]
- January to April 2026: modeling assumptions filed (January), reviewed (February and March), PUC staff final recommendations (April), per the IMM. [e24]
- April 15, 2026: ERCOT files the LTLF it recommended as the assessment load input. [e26]
- June 2026: PUCT order approves adjusting the LTLF using the Batch Zero based Option B. [e28]
- November 6, 2026: ERCOT asks for a good cause exception to file the 2027 magnitude by the second quarter of 2027, because the final load forecast for winter 2026-2027 is not ready. [e31][e42]

## Say it like this

Texas has a formal one-in-ten-year loss-of-load standard with caps on how long and how large an outage can be. ERCOT must test the grid against it at least every three years and, if it fails, propose market design fixes to the PUCT. [e2][e6][e7]

## Common confusion

The standard is a probability-based simulation test. [e1] Failing it does not automatically trigger a specific remedy: ERCOT proposes options and the PUCT decides whether market design changes are necessary. [e7][e14] The IMM has asked the PUCT to clarify whether the standard is binding. [e12] It is also not the CDR reserve margin or the MORA: those are different reports with different purposes. [e33][e35]

## Questions

### What are the three criteria?

Frequency (0.1 LOLE, one event in ten years on average), duration (under 12 hours with 1.00 percent exceedance tolerance), and magnitude (load shed below the maximum that can be safely rotated, with 1.00 percent tolerance). [e2][e3][e4]

### What happens if the assessment fails the standard?

ERCOT provides the PUCT with a summary of deficiencies and a menu of market design changes with a primary recommendation and expected costs. [e7][e23] The rule also requires the IMM to review them independently, and the PUCT then decides whether changes are necessary. [e13][e14]

### Why does the IMM say the standard is hard to meet in ERCOT?

It says meeting the standard through price signals alone would imply an operational VOLL that is extraordinarily high for an energy-only market. [e10]

### Why does the magnitude criterion depend on load shed rotation?

The criterion compares simulated load shed with the most that can be safely rotated, and ERCOT finds that number by asking transmission operators how many MW of their rotation programs can be shed at one time. [e4][e30]

### What if the final load forecast is not ready when the magnitude filing is due?

ERCOT's November 2026 motion argues that without a final winter 2026-2027 peak forecast the transmission operators cannot answer the RFI, and asks to file by the second quarter of 2027. [e31][e42] The saved sources do not show the PUCT's ruling on that motion.

### Why did ERCOT's assessment timeline move?

ERCOT recommended the LTLF as the load input, then said it had concerns with using its values and proposed adjustments; ERCOT said its preferred Batch Zero option would delay results to November or December 2026 but that the benefit of a more reliable load forecast outweighs the added time. [e26][e45][e27][e44] The PUCT approved that option. [e28]

### How does the standard relate to the CDR?

The CDR is a planning report with a five-year view, and its ELCC method is aligned with the probabilistic model that supports the reliability standard analysis, but the standard itself is the simulation test in 25.508. [e39][e32][e1]

## Open items

- Resolved 2026-11-21: the staff recommendation step, comment periods, modeling-assumption process and the annual load-shed rotation maximum (13,988 MW for 2026) are now sourced.
- The results of the 2026 assessment were not found in the saved sources; ERCOT's estimate was November or December 2026 if Option B was used.
- The PUCT's ruling on ERCOT's November 6, 2026 motion for a good cause exception was not found.
- The reasons the PUCT chose Option B beyond what the order's second page states were not read in full; the order text is a poor-quality scan.
- The 2026 magnitude RFI's 75th percentile peak forecast method is described in the motion for prior years only; the 2027 method is not sourced.
