---
id: pcm
name: PCM (Performance Credit Mechanism)
aliases: [PCM, Performance Credit Mechanism, performance credits, PCs, Project 55000, PURA 39.1594, reliability program]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: resource-adequacy
    type: related
    note: The PUCT adopted the PCM as its preferred Phase II market design change; it would have had LSEs buy credits earned by availability in the highest-risk hours. [e2][e1]
  - to: texas-legislature
    type: regulates
    note: HB 1500 codified the PCM guardrails, including the $1 billion annual net cost cap, in PURA 39.1594. [e14][e3]
  - to: rtc-b
    type: prerequisite-of
    note: The statute bars the PCM until ERCOT begins implementing real-time co-optimization. [e5]
  - to: ordc
    type: related
    note: The multi-step ORDC price floor of November 2023 was the "bridge solution" until the PCM could be implemented. [e11]
  - to: drrs
    type: contrasts-with
    note: The PUCT Chairman's December 2024 memo said resources were better directed to RTC+B and DRRS than to the PCM as designed. [e10]
  - to: reliability-standard
    type: related
    note: PUCT Staff's memo said the PCM as designed was anticipated to cut projected long-term LOLE from 2.67 to 2.18 days per year. [e8]
  - to: imm
    type: related
    note: The IMM put long-term PCM net costs at $350 million to $725 million, against ERCOT/E3's approximately $12 million. [e9]
evidence:
  - id: e1
    source: imm-som-2023
    locator: "Appendix, Performance Credit Mechanism"
    quote: "The PCM, as described by E3, establishes a requirement for LSEs to purchase “performance credits” (PCs) – earned by generators based on their availability to the system during the top 30 hours of highest risk – at a centrally determined clearing price."
  - id: e2
    source: imm-som-2023
    locator: "Executive Summary, Other Reforms Underway or Recommended"
    quote: "On January 19, 2023, the PUCT adopted the PCM as its preferred Phase II market design change, but delayed implementation pending consideration by the Texas Legislature."
  - id: e3
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(1)"
    quote: "the commission may not require retail customers or load-serving entities in the ERCOT power region to purchase credits designed to support a required reserve margin or other capacity or reliability requirement unless the commission ensures that:(1)  the net cost to the ERCOT market of the credits does not exceed $1 billion annually, less the cost of any interim or bridge solutions that are lawfully implemented"
  - id: e4
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(2)-(5)"
    quote: "(2)  credits are available only for dispatchable generation;(3)  the independent organization certified under Section 39.151 for the ERCOT power region is required to procure the credits centrally in a manner designed to prevent market manipulation by affiliated generation and retail companies;(4)  a generator cannot receive credits that exceed the amount of generation bid into the forward market by that generator;(5)  an electric generating unit can receive a credit only for being available to perform in real time during the tightest intervals of low supply and high demand on the grid, as defined by the commission on a seasonal basis;"
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(10)"
    quote: "(10)  the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented;"
  - id: e6
    source: pura-39
    locator: "PURA Sec. 39.1594(d)"
    quote: "Before the commission adopts a program described by Subsection (a), the commission shall require the independent organization certified under Section 39.151 for the ERCOT power region and the wholesale electric market monitor to complete an updated assessment on the cost to and effects on the ERCOT market of the proposed reliability program and submit to the commission and the legislature a report on the costs and benefits of continuing the program."
  - id: e7
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project 55000 Item 47 (2024-12-13), p. 1 and Staff's Final Recommendation, p. 2"
    quote: "After reviewing the ERCOT/E3 and IMM assessments, Staff recommends not moving forward with the PCM as currently designed."
  - id: e8
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2"
    quote: "The PCM, as designed, is anticipated to incentivize 780 MW of additional dispatchable generation relative to the energy-only market design, which would reduce the projected long-term equilibrium Loss of Load Expectation (LOLE) from 2.67 days per year to 2.18 days per year."
  - id: e9
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2, Alternative design choices"
    quote: "The ERCOT/E3 analysis found that the $1 billion of PCM costs would almost be offset by a reduction in energy and ancillary service costs, resulting in the net cost of the PCM coming out to approximately $12 million. This is well below the $1 billion net cost cap imposed by statute. However, the IMM stated that the reduction in energy and ancillary service costs are unlikely to offset the PCM costs to the degree that ERCOT/E3 indicated. In its assessment, the IMM stated that, while higher capacity margins induced by the PCM will reduce the frequency of shortage pricing, the long-term net costs of PCM with the gross cap in place may be in the range of $350 million to $725 million."
  - id: e10
    source: puct-pcm-chair-memo
    locator: "Chairman Gleeson memorandum (2024-12-18) for the 2024-12-19 Open Meeting, Item 17"
    quote: "After considering the ERCOT/E3 and IMM assessments and Commission Staffs summary of their work, I don't believe that the PCM, as currently designed, will provide the reliability benefits needed in the ERCOT market. While reconsideration of the PCM may be appropriate in the future, at this point I believe our collective resources are best directed toward implementing other market design initiatives, including but not limited to RTC+B and DRRS."
  - id: e11
    source: imm-som-2023
    locator: "Executive Summary, shortage pricing bullets"
    quote: "In November 2023, ERCOT implemented a multi-step ORDC price floor, a “bridge solution” to raise the incentive to build new dispatchable resources until the Performance Credit Mechanism (PCM) is implemented."
  - id: e12
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 1"
    quote: "After several months of discussion and engagement, including multiple rounds of public comment and workshops, the Commission selected the final PCM design parameters at its August 29,2024 open meeting."
  - id: e13
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 4, ERCOT Assessment"
    quote: "ERCOT also noted that, consistent with PURA, PCM would not be implemented until after the implementation of RTC+B."
  - id: e14
    source: imm-som-2023
    locator: "Executive Summary, footnote 6"
    quote: "House Bill 1500 codified these legislative guardrails for the potential design of the PCM in PURA § 39.1594."
---

## Definition

The Performance Credit Mechanism (PCM) is a proposed ERCOT reliability program in which LSEs would have to buy "performance credits" earned by generators for being available during the top 30 hours of highest risk, at a centrally set clearing price. [e1] The saved sources show it only as a proposal: in December 2024 PUCT Staff recommended not moving forward with the PCM as designed. [e7]

## How it works

As designed, generators earn credits by being available in the highest-risk hours (the top 30 hours), and LSEs must buy them at a centrally determined price. [e1] The PUCT selected the final design parameters on August 29, 2024. [e12]

State law fences in any such program. The commission may not require LSEs or retail customers to buy such credits unless net cost to the market does not exceed $1 billion annually, less the cost of lawful interim or bridge solutions (among other conditions). [e3] Credits go only to dispatchable generation, ERCOT must buy them centrally, a generator cannot earn more credits than it bid into the forward market, and a unit earns credit only for being available in real time during the tightest intervals, defined seasonally by the PUCT. [e4] ERCOT must begin implementing real-time co-optimization before the program starts. [e5] Before adopting it, the PUCT must get an updated cost-benefit assessment from ERCOT and the IMM and report it to the Legislature. [e6]

## ERCOT context

The PUCT adopted the PCM as its preferred Phase II market design on January 19, 2023, but delayed implementation until the Legislature weighed in. [e2] In November 2023 ERCOT added a multi-step ORDC price floor as the "bridge solution" until the PCM could be implemented. [e11]

PUCT Staff reviewed the ERCOT/E3 and IMM assessments in December 2024. Its memo says the PCM as designed was anticipated to incentivize 780 MW of additional dispatchable generation and reduce projected long-term equilibrium LOLE from 2.67 to 2.18 days per year. [e8] ERCOT/E3 put the net cost at approximately $12 million, while the IMM said long-term net costs with the gross cap may be $350 million to $725 million. [e9] Staff recommended not moving forward, and Chairman Gleeson wrote that he did not believe the PCM as designed would provide the reliability benefits needed, and that resources were better directed to RTC+B and DRRS. [e7][e10]

## Key facts

- Statutory net cost cap: $1 billion a year, less the cost of interim or bridge solutions. [e3]
- Credits available only to dispatchable generation. [e4]
- Must follow the start of real-time co-optimization; ERCOT said PCM would come only after RTC+B. [e5][e13]
- PUCT Staff memo: anticipated 780 MW of additional dispatchable generation; LOLE 2.67 to 2.18 days per year. [e8]
- Long-term net cost estimates: about $12 million (ERCOT/E3) versus $350 to $725 million (IMM). [e9]

## Timeline

- 2023-01-19: PUCT adopts the PCM as its preferred Phase II design but delays implementation pending the Legislature. [e2]
- 2023 (88th Legislature): HB 1500 codifies the PCM guardrails in PURA 39.1594, including the $1 billion net cost cap. [e14][e3]
- 2023-11: ERCOT implements the multi-step ORDC price floor as the bridge solution. [e11]
- 2024-08-29: PUCT selects the final PCM design parameters. [e12]
- 2024-12-13: PUCT Staff recommends not moving forward with the PCM as currently designed. [e7]
- 2024-12-18: Chairman Gleeson's memo for the December 19, 2024 open meeting says the PCM as designed will not provide the reliability benefits needed. [e10]

## Say it like this

(Guidance) The PCM was Texas's proposed availability-credit program: LSEs would buy credits earned by dispatchable units that show up in the tightest hours, under a $1 billion net cost cap set by HB 1500. In December 2024 PUCT Staff recommended against the design as it stood, the Chairman did not believe it would provide the reliability benefits needed, and he pointed resources to RTC+B and DRRS. [e3][e7][e10]

## Common confusion

(Guidance) PCM credits are earned by availability in the top 30 hours of highest risk and bought by LSEs. [e1] It is also not DRRS, which is an Ancillary Service (see the drrs topic); the Chairman pointed resources to DRRS rather than the PCM as designed. [e10] The $1 billion cap in statute is a net cost cap; whether net costs were near $12 million or hundreds of millions depended on the study. [e3][e9]

## Questions

### Why did PUCT Staff recommend against the PCM?

After reviewing the ERCOT/E3 and IMM assessments, Staff recommended not moving forward with the PCM as currently designed. [e7] Its memo says the PCM as designed was anticipated to incentivize 780 MW of additional dispatchable generation and reduce LOLE from 2.67 to 2.18 days per year. [e8]

### What guardrails does PURA 39.1594 put on a credit program?

A $1 billion annual net cost cap, credits only for dispatchable generation, central procurement by ERCOT, no more credits than a generator bid forward, credit only for real-time availability in the tightest seasonal intervals, and real-time co-optimization first. [e3][e4][e5]

### Why do the ERCOT/E3 and IMM cost estimates differ so much?

ERCOT/E3 found the $1 billion of PCM payments almost fully offset by lower energy and ancillary service costs, for a net of approximately $12 million. The IMM said the reduction is unlikely to offset PCM costs to that degree and put long-term net costs with the gross cap in place at $350 million to $725 million. [e9]

## Open items

- The PUCT's action at the December 19, 2024 open meeting (whether it formally ended, shelved or deferred the PCM) is not in the saved sources; only the Staff recommendation and the Chairman's memo are.
- The 2024 and 2025 IMM State of the Market reports in the saved set do not discuss the PCM; no later status was found.
- HB 1500's own text of 39.1594 was quoted from the current PURA chapter, not from the bill; the 2026 base-year adjustments to the cap in 39.1594(a)(1)(A)-(B) were not covered.
- Deeper pass: the 37 PCM design parameters (E3 strawman, February 2024), the PC demand curve, the 2% non-performance penalty and the trailing net-revenue offset.
- Deeper pass: E3's finding that DRRS under NPRR1235 would add less than 100 MW of gas CT capacity, and the battery (+29%) and wind (-1.2%) margin effects.
- Whether the PCM could be reconsidered after the 2026 reliability standard assessment was not traced.
