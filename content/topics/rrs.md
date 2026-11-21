---
id: rrs
name: RRS (Responsive Reserve Service)
aliases: [RRS, Responsive Reserve, Responsive Reserve Service, PFR, FFR, Primary Frequency Response, Fast Frequency Response, UFR]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: ancillary-services
    type: part-of
    note: The Protocols define RRS as an Ancillary Service; see that topic for plan, obligations and cost. [e1]
  - to: regulation
    type: contrasts-with
    note: ERCOT deploys RRS when restoring frequency would exceed the Reg-Up ramping capability. [e8]
  - to: ecrs
    type: related
    note: ECRS restores RRS after a significant depletion. [e9]
  - to: eea
    type: related
    note: RRS provides energy or continued load interruption during an EEA. [e1]
  - to: prc
    type: related
    note: See the PRC topic for how reserve levels are measured.
  - to: energy-storage-resource
    type: related
    note: ESRs provide RRS through primary frequency response or fast frequency response. [e3][e10]
  - to: non-spin
    type: contrasts-with
    note: A non-controllable load resource that wants to provide Non-Spin cannot have an active under-frequency relay, so it must choose between Non-Spin and RRS, the IMM says. [e24]
  - to: ancillary-services
    type: part-of
    note: The annual AS methodology sets the RRS quantity along with the other products, and the PUCT approves it. [e13]
  - to: clr
    type: related
    note: Controllable Load Resources are one of the Resource types that may provide RRS. [e3]
  - to: rtc-b
    type: related
    note: NPRR1282 sets RRS and Regulation duration to 30 minutes upon implementation of Real-Time Co-Optimization. [e21]
  - to: drrs
    type: related
    note: DRRS is a separate, newer reserve product; see that topic for how it differs from RRS.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Responsive Reserve (RRS)"
    quote: "An Ancillary Service that provides operating reserves that are intended to: (a) Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load; (b) After the first few seconds of a significant frequency deviation, help arrest and stabilize frequency; and (c) Provide energy or continued Load interruption during the implementation of the Energy Emergency Alert (EEA)."
  - id: e2
    source: np-03
    locator: "Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2)"
    quote: "(1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases."
  - id: e3
    source: np-03
    locator: "Section 3.17.2, paragraph (3)(a)-(c)"
    quote: "(3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlled by high-set under-frequency relays;"
  - id: e4
    source: np-03
    locator: "Section 3.16, paragraph (4)"
    quote: "(4) Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing RRS using Primary Frequency Response. The remaining capacity required for RRS may be supplied by all Resources qualified to provide RRS, provided that RRS from Load Resources on high-set under-frequency relays and Resources providing FFR shall be limited to 60% of the total ERCOT RRS requirement."
  - id: e5
    source: np-03
    locator: "Section 3.16, paragraph (2)(c)"
    quote: "(c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (14)"
    quote: "(14) RRS provided from a Resource capable of FFR shall self-deploy their obligated response within 15 cycles after frequency drops below 59.85 Hz and must continue to provide a response until the frequency increases above that level."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (13)"
    quote: "(13) RRS provided from a Generation Resource or ESR shall be responsive to frequency deviations as defined in Section 8.5.1.1, Governor in Service. Generation Resources and ESRs providing RRS must have a Governor droop setting that is not greater than 5.0%."
  - id: e8
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (3)"
    quote: "(3) ERCOT shall deploy RRS to respond to a frequency deviation when the power requirement to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS), item (a)"
    quote: "(a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal;"
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of RRS"
    quote: "ERCOT procures three types of responsive reserves: (1) primary frequency response (PFR), which all generators must be able to provide and which responds automatically to deviations in system frequency; (2) Under Frequency Relay (UFR), which deploys by tripping NCLRs after a sufficient drop in frequency; and (3) Fast Frequency Response (FFR), which is overwhelmingly provided by energy storage resources (ESRs) that can respond to deviations in frequency within 30 cycles."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.C.1, RRS Provision from ESRs"
    quote: "The share of responsive reserves composed of resources providing FFR is capped at 450 MW."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS."
  - id: e13
    source: ercot-as-methodology-2026
    locator: "RRS Requirement Details, third paragraph (effective 01/01/2026)"
    quote: "The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use of studies and shall not be less than 1,377 MWs. The remaining capacity required for RRS will be procured from all Resources qualified to provide RRS including Load Resources. The maximum amount of RRS that can be provided by Resources providing Fast Frequency Response (FFR) is limited to 450 MW. DAM will limit the combined RRS procured from Load Resources controlled by high set under frequency relay and Resources providing FFR to 60% of the total RRS requirement. ERCOT may increase the minimum capacity required from Resources providing RRS using Primary Frequency Response if it believes that the current posted quantity will have a negative impact on reliability or if it would require additional Regulation Service to be deployed."
  - id: e14
    source: ercot-as-methodology-2026
    locator: "RRS Requirement Details, third paragraph (effective 01/01/2026)"
    quote: "ERCOT will procure amounts of RRS that vary by hour of the day and by month. These RRS amounts will be published by month in six separate blocks covering four-hour intervals. These amounts will be based on expected diurnal load, solar, and wind patterns for the month, will cover 70% of historic system inertia conditions for each block of hours for the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours."
  - id: e15
    source: ercot-as-methodology-2026
    locator: "RRS Requirement Details, third paragraph (effective 01/01/2026)"
    quote: "ERCOT will procure additional 200 MW of RRS for each percent of Reserve Discount Factor (RDF) when ERCOT estimates RDF to be less than 1. This adjustment will only apply for those 4-hour blocks where the 85^(th) percentile of weighted average temperate is greater than 95°F. RDFs are reviewed and adjusted based on the generators performance during an unannounced test."
  - id: e16
    source: ercot-as-methodology-2026
    locator: "Document header"
    quote: "ERCOT Board Recommended approval on 09/23/2025 PUC Approved on 11/06/2025 Effective Date of 01/01/2026"
  - id: e17
    source: nog-02
    locator: "Section 2.3.1.1, Obligation, paragraph (1)"
    quote: "(1) ERCOT operating reserve requirements are more restrictive than North American Electric Reliability Corporation (NERC) Reliability Standards. The RRS obligation is a minimum of 2300 MW. The amount of RRS procured may be adjusted as described in ERCOT Methodologies for Determining Ancillary Service Requirements or if ERCOT determines a reliability need for additional Ancillary Service Resources."
  - id: e18
    source: np-03
    locator: "Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (3)(a)"
    quote: "(a) The full amount of RRS using Primary Frequency Response that can be provided by an On-Line Resource is dependent upon the verified droop characteristics of the Resource. ERCOT shall calculate and update, using the methodology described in Nodal Operating Guide Section 8, Attachment N, Procedure for Calculating RRS MW Limits for Individual Resources to Provide RRS Using Primary Frequency Response, a maximum MW amount of RRS using Primary Frequency Response for each Resource subject to verified droop performance. The default value for any newly qualified Resource not yet evaluated per Nodal Operating Guide Section 8, Attachment N shall be 20% of its Maximum Droop Response Range (MDRR)."
  - id: e19
    source: np-03
    locator: "Section 3.18, paragraph (3)(c)-(d)"
    quote: "(c) The initiation setting of the automatic under-frequency relay setting for Load Resources providing RRS shall not be lower than 59.70 Hz; and"
  - id: e20
    source: np-03
    locator: "Section 3.18, paragraph (3)(d)"
    quote: "(d) The amount of RRS awarded to a Resource capable of providing Fast Frequency Response (FFR) must be less than or equal to its 15-minute rated capacity. The initiation setting of the automatic self-deployment of the Resource providing RRS as FFR must be no lower than 59.85 Hz."
  - id: e21
    source: ercot-nprr1282-puct-report
    locator: "Revision Description and Effective Date"
    quote: "Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT\u2019s analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT\u2019s obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events."
  - id: e22
    source: np-08
    locator: "Section 8.1.1.2.1.2, Responsive Reserve Qualification, paragraph (10)"
    quote: "(10) For Resources providing RRS and available for dispatch by SCED, the maximum quantity of RRS that a Resource is qualified to provide is limited to the amount of RRS that can be sustained by the Resource for at least 30 minutes. For all other Resources excluding non-CLRs providing FFR, the maximum quantity of RRS that a Resource is qualified to provide is limited to the amount of RRS that can be sustained by the Resource for at least one hour. The maximum quantity of FFR that any non-CLR qualified to provide FFR is limited to the amount of FFR that can be sustained by the Resource for at least 15 minutes."
  - id: e23
    source: np-08
    locator: "Section 8.1.1.1, Ancillary Service Qualification and Testing, paragraph (11)"
    quote: "(11) ERCOT may revoke the Ancillary Service qualification of any Resource providing FFR if that Resource has two Resource performance failures, either in a manual deployment event or a frequency triggered event, within any rolling 365-day period. A performance failure is defined as a response less than 95% or more than 105% of the Resource\u2019s RRS award within 15 cycles of a triggering event or within ten minutes of an ERCOT Dispatch Instruction."
  - id: e24
    source: imm-som-2025
    locator: "page 66 (OCR), Chapter III.C.2, NSRS Provision from NCLRs"
    quote: "To qualify to provide NSRS, NCLRs cannot have an active UFR, so they must choose between providing NSRS and RRS."
  - id: e25
    source: imm-som-2025
    locator: "page 65 (OCR), Chapter III.C.2, RRS Provision from NCLRs"
    quote: "Although 7,568 MW of NCLRs were qualified to provide responsive reserves, they provided only 1,480 MW on average in 2025. One reason for this gap is that ERCOT requires that PFR- capable resources must provide at least 1,365 MW or 40% of the AS Plan. NCLRs cannot provide PFR and instead provide responsive reserves primarily through an under-frequency relay. UFR is a variant of RRS that automatically disconnects the load resource when system frequency drops below 59.7 Hertz (Hz) or when ERCOT issues manual deployment instructions during an Energy Emergency Alert Level 2."
  - id: e26
    source: imm-som-2025
    locator: "page 67 (OCR), Chapter III.D, RRS Aggregation Impact on Market Outcomes"
    quote: "Instead of clearing each type of responsive reserve separately at distinct prices, ERCOT clears them together and prorates UFR and FFR awards when the combined limit is binding."
  - id: e27
    source: imm-som-2025
    locator: "page 68 (OCR), Chapter III.D, after Figure 28"
    quote: "The main driver was the increase in the minimum PFR volume requirement from 1,185 MW to 1,365 MW in the 2025 AS Methodology. No comparable change occurred in FFR offers and awards, which continued to clear below the 450 MW limit."
  - id: e28
    source: imm-som-2025
    locator: "page 68 (OCR), Chapter III.D, after Figure 28"
    quote: "Since PFR is similarly costly for ESRs to provide, many prefer to offer PFR to avoid the risk that their FFR offers will be prorated when the combined limit is reached."
  - id: e29
    source: imm-som-2025
    locator: "page 62 (OCR), Figure 25: Ancillary Service Prices 2021-2025, inset table"
    quote: "@ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74"
  - id: e30
    source: imm-som-2023
    locator: "Market rule revisions, NPRR 1128"
    quote: "NPRR 1128, Allow FFR Procurement up to FFR Limit Without Proration - Status: Approved on January 26, 2023 - Description: This NPRR sets a -$0.01 per MW lower ancillary service offer floor for Fast Frequency Response (FFR) Responsive Reserve (RRS) rather than for other RRS categories, thereby allowing, depending on relative ancillary service offers, FFR procurement up to the current FFR limit without proration with other RRS categories in the ancillary service procurement process."
  - id: e31
    source: np-03
    locator: "Section 3.16, paragraph (2)(b), pending box [NPRR1128]"
    quote: "[NPRR1128: Replace item (b) above with the following upon system implementation:]"
  - id: e32
    source: imm-som-2025
    locator: "Chapter III.A, key insights, page 59 (OCR)"
    quote: "On average, ESRs provided 94% of Reg- Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
---

## Definition

Responsive Reserve (RRS) is an ancillary service providing operating reserves meant to arrest frequency decay in the first few seconds of a significant frequency deviation, to help stabilize frequency afterwards, and to provide energy or continued load interruption during an Energy Emergency Alert. [e1] It is automatically self-deployed by resources in a way that changes their real power. [e2]

## How it works

**Who can provide it.** RRS can be provided by on-line generation using primary frequency response, by resources with fast frequency response (FFR) that can sustain it for up to 15 minutes, and by load resources on high-set under-frequency relays; the Protocol list also includes Controllable Load Resources, generation in synchronous condenser fast-response mode, and ESRs. [e3]

**How much is bought.** The amount is set each year in ERCOT's methodology, not in the Protocols. For 2026 the document was recommended by the ERCOT Board on 09/23/2025, approved by the PUC on 11/06/2025 and effective 01/01/2026. [e16] It publishes amounts by month in six four-hour blocks, based on expected load, solar and wind patterns and set to cover 70% of historic system inertia conditions for each block. [e14] Outside that base, ERCOT adds 200 MW of RRS for each percent of Reserve Discount Factor below 1, but only in four-hour blocks where the 85th percentile of weighted average temperature is above 95 degrees F. [e15]

**The three limits that shape the mix.** (1) A floor on RRS from primary frequency response: the methodology says the monthly minimum shall not be less than 1,377 MW, while the Protocols' own floor is 1,150 MW. [e13][e5] ERCOT posts the monthly minimum and may raise it if it believes the posted quantity would hurt reliability or force more Regulation to be deployed. [e4][e13] (2) A cap on FFR: 450 MW in the 2026 methodology. [e13] (3) A combined cap: RRS from high-set under-frequency relay loads and FFR together is limited to 60% of the total requirement. [e4][e13]

**Per-resource limits.** A generator's PFR-based RRS depends on its verified droop; a newly qualified Resource not yet evaluated defaults to 20% of its Maximum Droop Response Range. [e18] A Resource awarded RRS as FFR cannot be awarded more than its 15-minute rated capacity and must self-deploy at no lower than 59.85 Hz. [e20] Load Resources' under-frequency relay setting cannot be lower than 59.70 Hz. [e19] For qualification, a Resource dispatchable by SCED is limited to the RRS it can sustain for at least 30 minutes; other Resources (excluding non-CLRs providing FFR) are limited to one hour; and FFR from a non-CLR is limited to what it can sustain for 15 minutes. [e22]

**Deployment.** FFR resources must self-deploy within 15 cycles after frequency drops below 59.85 Hz and keep responding until it recovers. [e6] Generators and ESRs need a governor droop no greater than 5.0%. [e7] ERCOT also deploys RRS when the power needed to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability. [e8]

**Testing and loss of qualification.** For FFR, ERCOT may revoke qualification after two performance failures in a rolling 365-day period, where a failure is a response below 95% or above 105% of the RRS award within 15 cycles of a triggering event or ten minutes of a Dispatch Instruction. [e23]

## ERCOT context

The IMM describes three types of RRS in the market: primary frequency response, which all generators must be able to provide; under-frequency relay (UFR) capacity from load resources that trip on a frequency drop; and FFR, overwhelmingly provided by ESRs. [e10] The IMM reports that the share of responsive reserves from FFR is capped at 450 MW. [e11] In 2025 ESRs provided on average 51% of RRS. [e32] Non-controllable load resources (NCLRs) provided an average of 1,480 MW of RRS in 2025 even though 7,568 MW were qualified; the IMM attributes part of the gap to the PFR floor (1,365 MW or 40% of the AS Plan in 2025), which NCLRs cannot meet because they respond through under-frequency relays. [e12][e25]

ERCOT clears the three kinds of RRS together rather than as separate products, and prorates UFR and FFR awards when the combined limit binds. [e26] The IMM says the rise in the minimum PFR requirement from 1,185 MW to 1,365 MW in the 2025 methodology reduced UFR volumes in 2024-2025, and that many ESRs prefer to offer PFR to avoid proration of FFR. [e27][e28] That is the IMM's reading of offer behaviour. NPRR1128, approved January 26, 2023, would set a -$0.01 offer floor for FFR so that FFR could be procured up to its limit without proration; in the Protocols it is still a pending box. [e30][e31]

Prices: the IMM's annual average Responsive price table shows $300.87 (2021), $20.79 (2022), $21.04 (2023), $5.52 (2024) and $2.74 (2025) per MWh (OCR of Figure 25). [e29]

## Key facts

- RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. [e2]
- 2026 methodology (effective 01/01/2026): PFR-based RRS minimum not less than 1,377 MW; FFR maximum 450 MW; relay load plus FFR at most 60% of the requirement. [e13][e16]
- The Protocols' floor for PFR-based RRS is 1,150 MW; the 2025 methodology minimum was 1,365 MW per the IMM, up from 1,185 MW. [e5][e27][e25]
- Nodal Operating Guide 2.3.1.1 states an RRS obligation of a minimum of 2300 MW, adjustable per the methodology. [e17]
- FFR must self-deploy within 15 cycles of frequency falling below 59.85 Hz. [e6]
- NPRR1282 (effective upon RTC implementation) changes the RRS and Regulation duration requirement from 15 to 30 minutes. [e21]
- Average NCLR RRS in 2025 was 1,480 MW. [e12]

## Timeline

- 2023-01-26: NPRR1128 (FFR offer floor and procurement up to the limit) approved; still pending implementation in the Protocol text as saved. [e30][e31]
- 2025: minimum PFR volume rose from 1,185 MW to 1,365 MW (IMM description of the 2025 methodology). [e27]
- 2025-09-23 / 2025-11-06: ERCOT Board recommends and PUC approves the methodology effective 2026-01-01 (PFR minimum 1,377 MW). [e16][e13]
- NPRR1282: RRS duration to 30 minutes, effective upon RTC implementation. [e21]

## Say it like this

RRS is the reserve that responds on its own after a significant frequency deviation, starting within the first few seconds. [e1][e2] It can come from generators with primary frequency response, FFR resources such as batteries, and load resources on under-frequency relays, but a PFR floor and an FFR cap mean the mix is managed, not free. [e3][e10][e13]

## Common confusion

RRS is not the same as ECRS. RRS is automatically self-deployed in response to a significant frequency deviation, while ECRS is intended to restore RRS within ten minutes after it is significantly depleted. [e2][e9] Also, FFR and PFR are two ways of earning RRS, not two products, and ERCOT clears them together. [e10][e26] And do not mix up the three PFR floors: 1,150 MW is in the Protocols, 1,365 MW was the 2025 methodology figure and 1,377 MW is the 2026 figure. [e5][e25][e13]

## Questions

### Who can provide RRS?

On-line generators with primary frequency response, FFR-capable resources that can sustain response for 15 minutes, load resources on high-set under-frequency relays, CLRs, synchronous-condenser fast-response generation and ESRs. [e3]

### What limits RRS from loads and FFR?

Combined RRS from high-set relay load resources and FFR resources is limited to 60% of the total RRS requirement, and the 2026 methodology caps FFR at 450 MW. [e4][e13]

### Who restores RRS after it is used?

ECRS, which is intended to restore RRS within ten minutes after a deviation that significantly depletes it. [e9]

### Why can only 1,480 MW of 7,568 MW of qualified NCLR capacity actually provide RRS?

The IMM points to the PFR floor. NCLRs cannot provide PFR, so they supply only the under-frequency-relay share, and ERCOT required at least 1,365 MW or 40% of the AS Plan from PFR-capable resources in 2025. [e25]

### Why do many ESRs offer PFR rather than FFR, according to the IMM?

PFR is similarly costly for ESRs to provide, and when the combined UFR plus FFR limit is reached FFR awards are prorated, so PFR avoids that risk. [e28][e26]

### What if a battery providing FFR misses its response twice in a year?

ERCOT may revoke its qualification if it has two performance failures in a rolling 365-day period; a failure is a response under 95% or over 105% of its RRS award. [e23]

### What happens to RRS volumes when ERCOT estimates the Reserve Discount Factor below 1?

In four-hour blocks where the 85th percentile of weighted average temperature exceeds 95 degrees F, ERCOT procures an extra 200 MW per percent of RDF below 1. [e15]

## Open items

- The IMM describes RRS as able to respond within 10 minutes; the Protocol definition emphasizes the first few seconds. Not reconciled.
- Nodal Operating Guide 2.3.1.1 states a 2300 MW minimum RRS obligation while the methodology publishes block amounts that vary by hour and month; the saved sources do not state the 2026 posted block amounts or whether 2300 MW still binds. [e17][e14]
- NPRR1128 (FFR offer floor, FFR operating-hour prioritization) is approved but its implementation date is not in the saved sources.
- The IMM's price table is from OCR of a chart inset; the saved sources do not give RRS prices after RTC go-live.
- The "equivalency ratio" values between Load Resources and Generation Resources are not in the saved sources.
