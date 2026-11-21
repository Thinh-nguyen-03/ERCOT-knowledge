---
id: gtc
name: GTC (Generic Transmission Constraint)
aliases: [GTC, GTL, Generic Transmission Constraint, Generic Transmission Limit, stability constraint]
kind: concept
domain: congestion
level: 2
lenses: [analyst, congestion, trading]
as_of: 2026-11-21
depth: deep
links:
  - to: congestion
    type: related
    note: GTCs account for a measurable share of day-ahead congestion value. [e6]
  - to: binding-constraint
    type: related
    note: A GTC is a transmission constraint used in the SCED application, and a Non-Competitive Constraint can be associated with a GTC. [e3][e8]
  - to: shadow-price
    type: related
    note: In 2025 ERCOT applied a $5,251 per MW shadow price cap to GTCs as base-case stability constraints. [e7]
  - to: wind-generation
    type: related
    note: The IMM says GTCs are especially relevant in areas with significant renewable generation, which are often far from load centers. [e5]
  - to: crez
    type: related
    note: The IMM says GTCs are especially relevant in areas with significant renewable generation; the source does not name CREZ here. [e5]
  - to: sced
    type: used-in
    note: GTCs created under Section 3.10.7.6 are used in the SCED application. [e3]
  - to: permian-transmission
    type: related
    note: ERCOT's 2024 RTP comparison estimated the West Texas Export stability constraint limit would rise from 12.7 GW to 16.2 GW with the 765-kV STEP (an estimate for future conditions). [e34]
  - to: large-load-interconnection
    type: related
    note: The quarterly stability assessment, which sets GTLs for new generation, also covers planned Large Loads subject to the Batch Zero rules. [e16]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Constraint (GTC)"
    quote: "A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT’s powerflow and contingency analysis applications."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Generic Transmission Limit (GTL)"
    quote: "The value of the transmission flow limit associated with a GTC."
  - id: e3
    source: np-03
    locator: "Section 3.10.7.6, paragraph (1)"
    quote: "For the sole purpose of creating transmission flow constraints between areas of the ERCOT Transmission Grid in ERCOT applications that are unable to recognize non-thermal operating limits (such as system stability limits and voltage limits on Electrical Buses), ERCOT may create new Generic Transmission Constraints (GTCs) or modify existing GTCs for use in reliability and market analysis. GTCs created or modified as described in this Section shall be used in the SCED application. ERCOT shall not use GTCs in ERCOT applications to replace other constraints already capable of being directly modeled in the SCED application."
  - id: e4
    source: np-03
    locator: "Section 3.10.7.6, paragraph (7)"
    quote: "No later than 180 days after the effective date of a new GTC, ERCOT shall post a report listing alternatives for exiting the GTC to the MIS Secure Area. The listed alternatives may include but are not limited to the implementation or modification of a RAS or a transmission improvement project."
  - id: e5
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Generic Transmission Constraints"
    quote: "GTCs manage grid stability across geographic regions rather than enforce thermal transmission limits for specific transmission paths. They are especially relevant in areas with significant renewable generation, which are often far from load centers and can contribute to system stability concerns."
  - id: e6
    source: imm-som-2024
    locator: "Transmission Congestion and CRRs, Day-Ahead Congestion"
    quote: "The figure also indicates that roughly 12% of the total congestion value in the day-ahead market during 2024 was attributable to GTCs."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, Violated Constraints"
    quote: "ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Non-Competitive Constraint"
    quote: "A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests."
  - id: e9
    source: imm-som-2025
    locator: "Executive Summary / renewable congestion discussion"
    quote: "ERCOT had 26 active GTCs in 2025, compared to 18 in 2021."
  - id: e10
    source: np-03
    locator: "Section 3.10.7.6, paragraph (2)"
    quote: "During the ERCOT quarterly stability assessment, performed pursuant to Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, if ERCOT determines a GTC is necessary for a new Generation Resource, ESR, or SOTSG due to localized stability issues associated with the output of the interconnecting Generation Resource, ESR, or SOTSG, the GTL for the GTC shall be set to the lowest non-zero limit for all system conditions outside those in which the limit is zero."
  - id: e11
    source: np-03
    locator: "Section 3.10.7.6, paragraph (3)"
    quote: "Except as provided in paragraph (6) below, ERCOT shall post a description of each new or modified GTC to the MIS Secure Area as soon as possible, but no later than the day prior to the GTC or GTC modification becoming effective in any ERCOT application."
  - id: e12
    source: np-03
    locator: "Section 3.10.7.6, paragraph (3)(d)"
    quote: "This information shall be redacted or omitted to protect the confidentiality of certain stability-related GTCs."
  - id: e13
    source: np-03
    locator: "Section 3.10.7.6, paragraph (4)"
    quote: "Market Participants may review and comment on each new or modified GTC. Within seven days following receipt of any comments, ERCOT shall post the comments to the MIS Secure Area as part of the information related to the subject GTC. ERCOT shall review any comments and may modify any part of a given GTC in response to any comments received."
  - id: e14
    source: np-03
    locator: "Section 3.10.7.6, paragraph (5)"
    quote: "Anticipated GTLs, except those determined pursuant to paragraph (6) below, shall be posted to the MIS Secure Area no later than one day before the Operating Day."
  - id: e15
    source: np-03
    locator: "Section 3.10.7.6, paragraph (6)"
    quote: "If an unexpected change to ERCOT System conditions requires the creation of a new GTC or the modification of an existing GTC to manage ERCOT System reliability, and the GTC has not been posted pursuant to paragraph (3) above, ERCOT shall issue an Operating Condition Notice (OCN) and post on the MIS Secure Area the new or modified GTC and its associated GTL(s), including the detailed information described in paragraphs (3) and (5) above."
  - id: e16
    source: ercot-planning-guide-05
    locator: "Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, paragraph (1)"
    quote: "ERCOT shall conduct a stability assessment every three months to assess the impact of planned large generators and Large Loads subject to the requirements of Section 9.2.1, Applicability of the Batch Zero Process, connecting to the ERCOT System."
  - id: e17
    source: nog-11
    locator: "Nodal Operating Guides Section 11.8, Extended Action Plans (EAPs), paragraph (2)(e)"
    quote: "Does not negatively impact any Generic Transmission Constraints (GTCs), decrease Generic Transmission Limits (GTLs), or create new instability situations;"
  - id: e18
    source: np-22p
    locator: "Methodology for Setting Maximum Shadow Prices (Protocols Section 22 Attachment P), Section 3.5"
    quote: "The Generic Transmission Shadow Price Caps noted below will be used in SCED unless ERCOT determines that a constraint is irresolvable by SCED."
  - id: e19
    source: imm-som-2022
    locator: "Transmission Congestion and CRRs, Violated Constraints (2022 report)"
    quote: "reduced the shadow price cap for base-case constraints from $9,251 per MW to $5,251 per MW effective April 1, 2022."
  - id: e20
    source: imm-som-2021
    locator: "page 32 (OCR), Increasing Generic Transmission Constraints (2021 report)"
    quote: "GTCs are not typical thermals constraints and are used to limit overall flows over a path to maintain the stability of the system. They are harder to manage than thermal constraints and are sometimes not well known prior to committing a resource."
  - id: e21
    source: imm-som-2021
    locator: "page 32 (OCR), Increasing Generic Transmission Constraints (2021 report)"
    quote: "GTCs have increased significantly over the last few years with the expansion of inverter-based generation, with congestion on these constraints growing from $190 million in real-time congestion in 2020 to $400 million in 2021."
  - id: e22
    source: imm-som-2022
    locator: "page 86 (OCR), Real-time congestion (2022 report)"
    quote: "The number of GTC binding intervals in 2022 was nearly identical to the number in 2021 and the associated congestion represented 23% of real-time congestion rent."
  - id: e23
    source: imm-som-2023
    locator: "page 86 (OCR), Real-time congestion (2023 report)"
    quote: "Roughly 11% of real-time congestion was associated with GTCs."
  - id: e24
    source: imm-som-2023
    locator: "page 86 (OCR), Real-time congestion (2023 report)"
    quote: "Certain GTC limits are determined in real-time using the Voltage Stability Assessment Tool (VSAT) or the Transient Stability Assessment Tool (TSAT). These tools are used continuously to evaluate the East Texas, North to Houston, the Rio Grande Valley Import, and Panhandle limits, and provide a more accurate real-time limit than could be achieved through offline studies."
  - id: e25
    source: imm-som-2023
    locator: "page 87 (OCR), Real-time congestion (2023 report)"
    quote: "Apart from the North to Houston, Rio Grande Valley Import, and East Texas constraints, all GTCs resulted from issues identified in the generation interconnection process."
  - id: e26
    source: imm-som-2023
    locator: "page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023)"
    quote: "Panhandle July 31, 2015 783.0 670.8"
  - id: e27
    source: imm-som-2023
    locator: "page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023)"
    quote: "North Edinburg - Lobo August 24. 2017 1,830.4 1,948.3"
  - id: e28
    source: imm-som-2023
    locator: "page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023), total row"
    quote: "Total Hours 6,355.9 5,791.0"
  - id: e29
    source: imm-som-2024
    locator: "page 88 (OCR), Types and Frequency of Constraints in 2024"
    quote: "In addition to GTCs, the limits of which are set prior to the operating day, ERCOT also activates constraints based on the Real-Time Contingency Analysis (RTCA) process that runs on an ongoing basis."
  - id: e30
    source: imm-som-2025
    locator: "page 82 (OCR), Day-Ahead Congestion (2025 report)"
    quote: "It shows that day-ahead congestion increased by 26% from 2024 to 2025, ending the recent trend of declining annual congestion cost. Congestion costs increased in all four zones, across zones, and for GTCs."
  - id: e31
    source: imm-som-2025
    locator: "page 85 (OCR), shadow price caps and NPRR 1230"
    quote: "At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on base- case constraints in response to IMM recommendation 2023-1."
  - id: e32
    source: imm-som-2025
    locator: "Renewable congestion discussion (2025 report), Generic Transmission Constraints"
    quote: "Second, the distance between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network."
  - id: e33
    source: ercot-constraints-needs-2025
    locator: "Report on Existing and Potential Electric System Constraints and Needs, December 2025, Top 10 constraints Oct. 2024 to Sep. 2025 (real-time data), constraint 4"
    quote: "West Texas Export Interface $127M"
  - id: e34
    source: ercot-rtp-765-comparison
    locator: "2024 RTP 345-kV Plan and Texas 765-kV STEP Comparison, stability analysis"
    quote: "The study results indicate that the TX 765-kV STEP would increase the West Texas Export stability constraint limit from 12.7 GW to 16.2 GW, compared to only 15.8 GW with the 345-kV option."
  - id: e35
    source: imm-som-2022
    locator: "page 34 (OCR), Increasing Generic Transmission Constraints (2022 report)"
    quote: "Real-time congestion rent on these constraints has grown from $400 million in real- time congestion in 2021 to $640 million in 2022."
  - id: e36
    source: imm-som-2024
    locator: "page 88 (OCR), Transmission Congestion and CRRs, Real-Time Congestion (2024 report)"
    quote: "There was also approximately 22% more congestion associated with GTCs in the real- time market, likely a result of forecast error for generation from renewables."
---

## Definition

A Generic Transmission Constraint is a transmission constraint made up of one or more grouped Transmission Elements, used to constrain flow between geographic areas of ERCOT to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow and contingency analysis applications. [e1] The Generic Transmission Limit (GTL) is the flow limit value associated with a GTC. [e2]

## How it works

**What a GTC may do.** ERCOT may create or modify GTCs only to create flow constraints between areas in applications that cannot recognize non-thermal limits such as stability or bus voltage limits. These GTCs are used in SCED, and ERCOT may not use a GTC to replace a constraint that SCED can already model directly. [e3] The IMM describes them as managing stability across regions rather than enforcing thermal limits on specific paths. [e5] The IMM also says GTC limits are set before the operating day, whereas other constraints are activated through the Real-Time Contingency Analysis process that runs continuously. [e29]

**How the limit is set.** In the quarterly stability assessment, if ERCOT finds a GTC is necessary for a new Generation Resource, ESR or SOTSG because of localized stability issues from its output, the GTL is set to the lowest non-zero limit for all system conditions outside those in which the limit is zero. [e10] The Planning Guide requires ERCOT to run that stability assessment every three months, covering planned large generators and Large Loads subject to the Batch Zero requirements. [e16] The IMM says certain GTC limits (East Texas, North to Houston, Rio Grande Valley Import and Panhandle in its 2023 report) are determined in real time using the Voltage Stability Assessment Tool or the Transient Stability Assessment Tool, giving a more accurate limit than offline studies. [e24] It says ERCOT has been working to get better inverter data so all GTC limits can be calculated in real time, which it expects to mean less congestion and curtailment. [e25]

**Posting and comment.** Except for unexpected changes, ERCOT posts a description of each new or modified GTC on the MIS Secure Area no later than the day before it becomes effective in any ERCOT application. [e11] Market Participants may review and comment; ERCOT posts comments within seven days of receipt and may modify a GTC in response. [e13] Some information is redacted or omitted to protect the confidentiality of certain stability-related GTCs. [e12] Anticipated GTLs are posted no later than one day before the Operating Day. [e14] If an unexpected change in conditions requires a new or modified GTC that was not posted ahead, ERCOT issues an Operating Condition Notice and posts the GTC, its GTLs and an explanation of why it did not post the previous day. [e15]

**Exit.** Within 180 days of a new GTC taking effect, ERCOT must post a report of alternatives for exiting it, which may include a RAS or a transmission improvement project. [e4]

## ERCOT context

The IMM links GTCs to renewable-heavy regions far from load, and describes the stability issues created by distance between renewable generation and load as managed through GTCs. [e5][e32] It counted 26 active GTCs in 2025 against 18 in 2021. [e9]

**Congestion by year (IMM).** The IMM reported congestion on GTCs growing from $190 million in real-time congestion in 2020 to $400 million in 2021, and to $640 million in 2022. [e21][e35] It said GTC binding intervals in 2022 were nearly identical to 2021 and represented 23% of real-time congestion rent. [e22] In 2023 roughly 11% of real-time congestion was associated with GTCs. [e23] In 2024 roughly 12% of day-ahead congestion value was attributable to GTCs [e6], and the IMM reported approximately 22% more GTC congestion in the real-time market than the prior year, likely a result of forecast error for renewable generation. [e36] For 2025 the IMM said day-ahead congestion rose 26% and costs increased for GTCs, without a GTC-only figure in the text read. [e30] The IMM's 2023 Table A4 (OCR) lists total GTC binding hours of 6,355.9 in 2022 and 5,791.0 in 2023, including Panhandle at 783.0 and 670.8 hours and North Edinburg - Lobo at 1,830.4 and 1,948.3. [e28][e26][e27]

**Where.** In its 2023 report the IMM said that, apart from the North to Houston, Rio Grande Valley Import and East Texas constraints, all GTCs resulted from issues identified in the generation interconnection process. [e25] ERCOT's December 2025 constraints report ranks the West Texas Export Interface fourth among the top 10 constraints for October 2024 to September 2025 at $127 million of congestion rent on real-time data. [e33]

**Pricing.** GTCs are treated as base-case stability constraints with a shadow price cap; the IMM reports $5,251 per MW in 2025 and that the base-case cap was cut from $9,251 to $5,251 per MW effective April 1, 2022. [e7][e19] ERCOT's methodology says the generic shadow price caps are used in SCED unless ERCOT determines a constraint is irresolvable by SCED. [e18] NPRR 1230, implemented at the end of 2024 per the IMM, created a process to increase the base-case shadow price cap. [e31]

**Interaction with other rules.** Before approving an Extended Action Plan for economic reasons, ERCOT must verify that it does not negatively impact any GTC, decrease a GTL or create new instability situations. [e17]

**West Texas outlook.** ERCOT's 2024 RTP comparison estimated that the 765-kV STEP would raise the West Texas Export stability constraint limit from 12.7 GW to 16.2 GW, versus 15.8 GW with the 345-kV option; these are estimated values for future system conditions. [e34]

## Timeline

- 31 July 2015: Panhandle GTC effective; 24 August 2017: North Edinburg - Lobo effective (IMM Table A4, OCR). [e26][e27]
- 2020 to 2022: GTC real-time congestion $190 million, $400 million, $640 million (IMM). [e21][e35]
- 1 April 2022: base-case shadow price cap cut from $9,251 to $5,251 per MW. [e19]
- End of 2024: NPRR 1230 implemented to raise base-case shadow price caps in response to IMM recommendation 2023-1. [e31]
- 2025: 26 active GTCs, up from 18 in 2021. [e9]

## Key facts

- GTC = grouped Transmission Elements limiting flow between areas, for stability and voltage. [e1]
- GTL = the flow limit value of a GTC. [e2]
- GTCs are used in SCED and may not replace constraints SCED can model directly. [e3]
- New GTCs are posted no later than the day before they take effect, unless an unexpected change requires an OCN. [e11][e15]
- 180-day exit-alternatives report for new GTCs. [e4]
- Active GTCs: 26 in 2025 versus 18 in 2021. [e9]
- About 12% of 2024 day-ahead congestion value was attributable to GTCs. [e6]
- 2025 shadow price cap on GTCs (base-case): $5,251 per MW. [e7]

## Say it like this

A GTC is a modeled stand-in for a stability or voltage limit that ERCOT's normal analysis cannot see, applied as a flow limit between areas and set from stability studies before the operating day. The IMM ties them to areas with significant renewable generation far from load.

## Common confusion

GTCs are not thermal line ratings; they are applied as flow limits between areas to manage stability. [e1][e5] The GTL is the number, while the GTC is the constraint. [e2] A GTC is also not the same as a constraint SCED picks up through real-time contingency analysis: its limit is set ahead of the day, from studies. [e29]

## Questions

### Why does ERCOT use GTCs instead of normal constraints?

Some stability and voltage limits cannot be modeled directly in its powerflow and contingency applications, so ERCOT uses grouped elements with a limit to represent them. [e1][e3]

### How big is GTC congestion?

It varies by year. The IMM reported real-time GTC congestion of $400 million in 2021 and $640 million in 2022, roughly 11% of real-time congestion in 2023, and roughly 12% of day-ahead congestion value in 2024. [e21][e35][e23][e6]

### What must ERCOT do after creating a new GTC?

Post it to the MIS Secure Area no later than the day before it takes effect (an OCN and explanation if it is unexpected), accept and post comments, and post a report of exit alternatives no later than 180 days after the effective date. [e11][e15][e13][e4]

### Why can a new generator trigger a GTC?

If the quarterly stability assessment finds that localized stability issues from the new Resource's output make a GTC necessary, the GTL is set to the lowest non-zero limit for all conditions outside those in which the limit is zero. [e10] The IMM says apart from three named constraints all GTCs resulted from issues identified in the generation interconnection process. [e25]

### What if a stability issue appears suddenly and no GTC is posted?

ERCOT issues an OCN and posts the new or modified GTC and GTLs with an explanation of why it was not posted the previous day. [e15]

### Why might the IMM say GTCs are harder to manage than thermal constraints?

In its 2021 report the IMM said GTCs limit overall flows over a path to maintain stability, are harder to manage than thermal constraints and are sometimes not well known before committing a resource. [e20]

## Open items

- The list of active GTCs in the saved IMM text is the 2023 Table A4 (OCR, 2022-2023 binding hours); the IMM 2024 and 2025 tables of individual GTCs were not found, and the 26 active GTCs for 2025 are not enumerated. OCR digits in Table A4 (for example the West Texas Export 2023 value) were not quoted where legibility was doubtful.
- Quarterly stability assessment results (the actual GTL values) are not in the saved sources; ERCOT's stability reports are described as not published (constraints report, December 2025), so numeric GTLs by constraint are unavailable.
- NPRR1070 (Planning Criteria for GTC Exit Solutions): the IMM 2021 and 2022 reports called it pending; its final status is not in the saved sources. The 2023 IMM says PUCT rulemaking for SB 1281 was intended to improve economic transmission planning criteria and ERCOT was working on protocol revisions.
- Real-time GTC congestion share for 2025 was not found.
- The 2021 IMM report listed a $9,251 base-case cap (before the April 2022 reduction); the 2025 IMM describes NPRR 1230 as increasing caps at the end of 2024, but the saved texts do not give the post-NPRR 1230 base-case cap values.
