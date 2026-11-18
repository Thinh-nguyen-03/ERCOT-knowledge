---
id: drrs
name: DRRS (Dispatchable Reliability Reserve Service)
aliases: [DRRS, Dispatchable Reliability Reserve Service, NPRR1309, NOGRR283, NPRR1235, NPRR1203, NPRR1310, NPRR1340, DRRS+]
kind: product
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ancillary-services
    type: part-of
    note: NPRR1309 adds DRRS as a new Ancillary Service alongside Reg, RRS, ECRS and Non-Spin. [e1]
  - to: non-spin
    type: related
    note: The first DRRS design (NPRR1203) was a Non-Spin subtype, and NPRR1309 would cut the Non-Spin duration to two hours once DRRS is implemented. [e6][e5]
  - to: ruc
    type: related
    note: The statute requires ERCOT to reduce reliability unit commitment by the amount of DRRS procured. [e3]
  - to: rtc-b
    type: prerequisite-of
    note: The NPRR1309 design lets DRRS be awarded in Real-Time and co-optimized with energy and other Ancillary Services. [e7]
  - to: energy-storage-resource
    type: related
    note: NPRR1309 limits DRRS to Generation Resources; storage participation was carried into NPRR1340 in June 2026. [e4][e13]
  - to: texas-legislature
    type: related
    note: HB 1500 (88th Legislature, 2023) added the DRRS mandate to PURA 39.159(d). [e2]
  - to: pcm
    type: contrasts-with
    note: DRRS is an operating-reserve product; the PCM was a separate proposed reliability credit program.
evidence:
  - id: e1
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report (2026-07-09), Proposed Protocol Language Revision, Section 2.1, definition of DRRS"
    quote: "An Ancillary Service that provides operating reserves that are intended to manage uncertainty on the ERCOT System while mitigating the need for Reliability Unit Commitment (RUC) instructions."
  - id: e2
    source: pura-39
    locator: "PURA Sec. 39.159(d)"
    quote: "The commission shall require the independent organization certified under Section 39.151 for the ERCOT power region to develop and implement an ancillary services program to procure dispatchable reliability reserve services on a day-ahead and real-time basis to account for market uncertainty."
  - id: e3
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 22, adding Utilities Code Sec. 39.159(d)(2)-(3)"
    quote: "(2)  develop criteria for resource participation that require a resource to: (A)  be capable of running for at least four hours at the resource's high sustained limit; (B)  be online and dispatchable not more than two hours after being called on for deployment; and (C)  have the dispatchable flexibility to address inter-hour operational challenges; and (3)  reduce the amount of reliability unit commitment by the amount of dispatchable reliability reserve services procured under this section."
  - id: e4
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report (2026-07-09), new Section 3.17.5, Dispatchable Reliability Reserve Service, paragraph (1)"
    quote: "DRRS is provided using capacity from: (a) Off-Line Generation Resources that can demonstrate a ramping capability within two hours to a specified output level and operate at that output level for at least four consecutive hours; and (b) On-Line Generation Resources that can demonstrate a ramping capability within two hours to a specified output level and operate at that output level for at least four consecutive hours."
  - id: e5
    source: imm-som-2025
    locator: "Chapter III (Ancillary Services), NSRS duration discussion"
    quote: "However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set the duration for NSRS at two hours upon the implementation of the long-foretold Dispatchable Reliability Reserve Service (DRRS). DRRS is statutorily required to carry a four-hour duration requirement."
  - id: e6
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History"
    quote: "On September 27, 2023, ERCOT submitted NPRR1203, Implementation of Dispatchable Reliability Reserve Service, to establish DRRS as a subtype of an existing Ancillary Service, Non-Spinning Reserve Service (Non-Spin). H.B. 1500 § 51 established a statutory deadline of December 1, 2024, by which to implement DRRS and establishing DRRS as a sub-type of an existing Ancillary Service was deemed necessary to allow for implementation by this deadline."
  - id: e7
    source: ercot-nprr1309-board-priority
    locator: "Board item 6.1 memo (dated 2025-12-01), Background/History"
    quote: "NPRR1235 only permitted participation in DRRS by Off-Line Resources. In order to incorporate stakeholder feedback for design improvements, ERCOT has withdrawn NPRR1235, and on November 20, 2025, submitted NPRR1309, Dispatchable Reliability Reserve Service Ancillary Service. This new NPRR meets all statutory criteria of TEX. UTIL. CODE § 39.159(d) while improving on NPRR1235 by allowing On-Line Resources to participate in DRRS in addition to Off-Line Resources. This new design enables DRRS to be awarded in Real-Time and accordingly procurement of DRRS may be cooptimized with procurement of energy and other Ancillary Services."
  - id: e8
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Timeline"
    quote: "Urgent – On 12/8/25, the Board designated Nodal Protocol Revision Request (NPRR) 1309 a Board Priority Revision Request."
  - id: e9
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, TAC Decision"
    quote: "On 4/29/26, TAC voted to recommend approval of NPRR1309 as recommended by PRS in the 4/15/26 PRS Report as amended by the 4/28/26 ERCOT II comments. There were five opposing votes from the Cooperative (3) (LCRA, Brazos, STEC) and Independent Generator (2) (Vistra, Constellation) Market Segments and one abstention from the Cooperative (GSEC) Market Segment."
  - id: e10
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, ERCOT Board Decision"
    quote: "On 6/2/26, the ERCOT Board voted unanimously to recommend approval of NPRR1309 as recommended by TAC in the 4/29/26 TAC Report."
  - id: e11
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, PUCT Decision"
    quote: "On 7/9/26, the PUCT approved NPRR1309 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e12
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, cover table, Estimated Impacts"
    quote: "Project Duration: 20 to 30 months"
  - id: e13
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026 (published 2026-07-10), DRRS Adopted by Board and PUCT"
    quote: "Design and pricing refinements for energy storage resource participation in DRRS continued at the Protocol Revision Subcommittee (PRS) on June 10, where ERCOT filed NPRR1340 with companion NOGRR288 to carry the storage discussion forward."
  - id: e14
    source: imm-som-2025
    locator: "Recommendations, 2021-2: Implement an Uncertainty Product"
    quote: "ERCOT’s current proposal for DRRS an operating reserve under NPRR 1309 incorporates both design principles. If ERCOT implements it correctly, DRRS should reduce reliance on costly out-of-market actions and lower reserve procurement costs compared to holding excessive 30minute reserves."
---

## Definition

DRRS is a new Ancillary Service, created by NPRR1309, that provides operating reserves to manage uncertainty on the ERCOT System while reducing the need for Reliability Unit Commitment (RUC) instructions. [e1] It exists because state law requires ERCOT to procure dispatchable reliability reserve services on a day-ahead and real-time basis to account for market uncertainty. [e2]

## How it works

The statute sets the minimum design. A participating resource must be able to run for at least four hours at its high sustained limit, be online and dispatchable within two hours of being called, and have the flexibility to handle inter-hour operational problems. ERCOT must also reduce reliability unit commitment by the amount of DRRS it procures. [e3]

Under the approved NPRR1309 language, DRRS comes from both Off-Line and On-Line Generation Resources that can ramp to a set output within two hours and hold it for at least four consecutive hours. [e4] Compared with the withdrawn NPRR1235, which allowed only Off-Line Resources, NPRR1309 lets DRRS be awarded in Real-Time, so its procurement can be co-optimized with energy and the other Ancillary Services. [e7]

NPRR1309 also changes Non-Spin: the IMM notes it would set the Non-Spin duration at two hours once DRRS is implemented, because DRRS itself carries the four-hour requirement. [e5] Storage participation is not in NPRR1309; ERCOT filed NPRR1340 and NOGRR288 in June 2026 to continue that work. [e4][e13]

## ERCOT context

Status as of the saved sources: NPRR1309 is decided but not yet live. The PUCT approved it on July 9, 2026, after the ERCOT Board recommended approval on June 2, 2026. [e11][e10] ERCOT's impact analysis estimated a project duration of 20 to 30 months. [e12] The saved sources do not give a go-live date.

DRRS took three tries. NPRR1203 (2023) made it a subtype of Non-Spin to meet HB 1500's December 1, 2024 deadline. [e6] NPRR1235 (May 2024) made it stand-alone but Off-Line only, and NPRR1309 (November 2025) replaced it. [e7] The design was contested: TAC endorsed it with five opposing votes from cooperatives and independent generators. [e9] The IMM, in its 2025 report, said NPRR1309 follows both of its design principles and, if implemented correctly, should reduce costly out-of-market actions. [e14]

## Key facts

- Statutory criteria: at least 4 hours at HSL, online within 2 hours, inter-hour flexibility, and RUC reduced by the amount procured. [e3]
- NPRR1309 eligibility: Off-Line and On-Line Generation Resources that can ramp within two hours and hold output for at least four consecutive hours. [e4]
- PUCT approval: July 9, 2026 (Project No. 54445). [e11]
- Estimated implementation: 20 to 30 months. [e12]
- Non-Spin duration falls from four hours to two hours when DRRS is implemented, under NPRR1309. [e5]

## Timeline

- 2023-09-27: ERCOT files NPRR1203, DRRS as a Non-Spin subtype, aiming at the December 1, 2024 statutory deadline in HB 1500. [e6]
- 2024-05-29: ERCOT files NPRR1235, DRRS as a stand-alone service, Off-Line Resources only. [e7]
- 2025-11-20: ERCOT withdraws NPRR1235 and files NPRR1309 (On-Line and Off-Line, co-optimized). [e7]
- 2025-12-08: ERCOT Board designates NPRR1309 a Board Priority Revision Request (Urgent). [e8]
- 2026-04-15 and 2026-04-29: PRS, then TAC, recommend approval; TAC has five "no" votes. [e9]
- 2026-06-02: ERCOT Board votes unanimously to recommend approval. [e10]
- 2026-06-10: ERCOT files NPRR1340 and NOGRR288 for storage participation in DRRS (pending). [e13]
- 2026-07-09: PUCT approves NPRR1309. [e11]
- Go-live: not set in the saved sources; the impact analysis estimates 20 to 30 months of project work. [e12]

## Say it like this

(Guidance) DRRS is the new four-hour, two-hour-start reserve the Legislature told ERCOT to build so the control room has dispatchable backup when net load comes in above forecast. [e3] It was approved in July 2026 but still has to be built, so it does not yet affect prices or revenues. [e11][e12]

## Common confusion

(Guidance) DRRS is not the PCM or a capacity market: it is an Ancillary Service bought day-ahead and in real time. [e2] It is also not the same as Non-Spin, even though the first design was a Non-Spin subtype; NPRR1309 makes it a separate service and changes the Non-Spin duration once DRRS goes live. [e6][e5] "Approved" does not mean "in effect": after the July 2026 PUCT approval, ERCOT still faces an estimated 20 to 30 months of project work. [e11][e12]

## Questions

### What does the statute require of DRRS?

A resource must be able to run at least four hours at its HSL, be online and dispatchable within two hours of a call, and have inter-hour flexibility, and ERCOT must reduce RUC by the amount of DRRS procured. [e3] The service must be procured on a day-ahead and real-time basis to account for market uncertainty. [e2]

### Why did ERCOT replace NPRR1235 with NPRR1309?

NPRR1235 allowed only Off-Line Resources. NPRR1309 adds On-Line Resources, which lets DRRS be awarded in Real-Time and co-optimized with energy and other Ancillary Services. [e7]

### Is DRRS live today?

Not in the saved sources. The PUCT approved NPRR1309 on July 9, 2026, but ERCOT estimated 20 to 30 months of project work, and the IMM describes the Non-Spin change as taking effect upon DRRS implementation. [e11][e12][e5]

## Open items

- No go-live date for DRRS appears in the saved sources; a Vistra comment in the PUCT report refers to aligning with "DRRS go-live" and a 2029 AS methodology review, but that is a commenter's statement, not an ERCOT date.
- The DRRS quantity (how ERCOT sizes the requirement each season) and the DRRS demand curve in the approved text were not quoted. Deeper pass: NPRR1309 Sections 3.16, 4.4.12 (DRRS ASDC, $10 floor, $0.01 minimum price) and the joint IMM/ERCOT demand curve proposal from TAC Workshop 3 (March 2026).
- NPRR1310 (DRRS with ESR participation and a resource-adequacy "Release Factor") and NPRR1340 are pending; their content and status after June 2026 were not traced.
- The PRS discussion mentions desktop edits "to maintain the current four-hour duration for Non-Spin", while the IMM and the TAC dissents describe the TAC-endorsed version as reducing it to two hours. The final Non-Spin duration in the PUCT-approved text was not read directly from the redline.
- Deeper pass: DRRS settlement (payments and charges, RUC make-whole exclusion, RUC Capacity Short treatment) and the new "DRRS" Resource Status in the pending np-03 boxes.
- Deeper pass: the October 17, 2023 legislative letter urging a stand-alone DRRS, quoted in the Board memo across a page break.
