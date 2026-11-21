---
id: hasl-lasl
name: HASL / LASL
aliases: [HASL, LASL, High Ancillary Service Limit, Low Ancillary Service Limit]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: hsl-lsl
    type: related
    note: HASL and LASL were limits calculated inside a Resource's sustained limits to hold back capacity committed to Ancillary Service. [e1][e2]
  - to: rtc-b
    type: related
    note: The Protocols marked both definitions for deletion upon system implementation of the Real-Time Co-Optimization project. [e3][e4]
  - to: ancillary-services
    type: related
    note: Both limits existed to reserve or protect capacity committed for Ancillary Service. [e1][e2]
  - to: sced
    type: related
    note: HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2 of the pre-RTC Protocols. [e1]
  - to: ruc
    type: related
    note: The pre-RTC definition says HASL was also included in the Reliability Unit Commitment optimization. [e5]
  - to: base-point
    type: related
    note: The HDL and LDL limit the SCED dispatch range around a Resource's telemetered output. [e10]
  - to: energy-storage-resource
    type: related
    note: Post-RTC the limit formulas have separate ESR cases with ONHOLD and ONTEST handling. [e12]
evidence:
  - id: e1
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL)"
    quote: "A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource’s capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator."
  - id: e2
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), definition of Low Ancillary Service Limit (LASL)"
    quote: "A dynamically calculated MW lower limit on a Resource to maintain the ability of the Resource to provide committed Ancillary Service."
  - id: e3
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), note under the HASL definition"
    quote: "[NPRR1013: Delete the above definition “High Ancillary Service Limit (HASL)” upon system implementation of the Real-Time Co-Optimization (RTC) project.]"
  - id: e4
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), note under the LASL definition"
    quote: "[NPRR1013: Delete the above definition “Low Ancillary Service Limit (LASL)” upon system implementation of the Real-Time Co-Optimization (RTC) project.]"
  - id: e5
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL), second sentence"
    quote: "HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization"
  - id: e6
    source: ercot-nprr1290-prs-report
    locator: "NPRR1290 PRS Report (2025-08-13), Revision Description, item 6"
    quote: "As the concept of a HASL no longer exists with RTC+B, ERCOT is proposing that the applicable language be struck with RTC+B implementation."
  - id: e7
    source: ercot-rtc-update-2025-12
    locator: "Real-Time Co-optimization Update to the Board, go-live note"
    quote: "Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration."
  - id: e8
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board Report (decision date December 8, 2020), header table"
    quote: "Upon system implementation of the Real-Time Co-Optimization (RTC) Project"
  - id: e9
    source: ercot-nprr1013-board-report
    locator: "NPRR1013 Board Report, header table, Revision Description"
    quote: "This NPRR updates the Protected Information provisions, definitions and acronyms, registration and qualification of Market Participants, and Market Suspension and Restart in the Protocols to address changes associated with the implementation of RTC."
  - id: e10
    source: np-06
    locator: "Section 6.5.7.2, Resource Limit Calculator, paragraph (1)"
    quote: "ERCOT shall calculate the HDL and LDL within four seconds after a change of the Resource-specific attributes provided as part of the QSE’s SCADA telemetry under Section 6.5.5.2, Operational Data Requirements."
  - id: e11
    source: np-06
    locator: "Section 6.5.7.1.12, Resource Limits, paragraph (1)(c) and (d)"
    quote: "HDL, which represents a dynamically calculated MW upper limit on a Resource that describes the maximum capability of the Resource’s SCED dispatch and limits the amount of Reg-Up that can be awarded to the Resource for the next five minutes (the Resource’s Real-Time generation or, in the case of an ESR, its Real-Time output or consumption, plus the product of the Normal Ramp Rate, as telemetered by the QSE, multiplied by five), restricted by HSL; and"
  - id: e12
    source: np-06
    locator: "Section 6.5.7.2, paragraph (4)(a) to (c)"
    quote: "If the telemetered Resource Status is ONHOLD, then HDL = 0"
  - id: e13
    source: np-06
    locator: "Section 6.5.7.2, paragraph (2)(b), High Dispatch Limit"
    quote: "If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, other than SHUTDOWN, then HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM)"
  - id: e14
    source: np-02-2024-11
    locator: "Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL), end of the paragraph"
    quote: "but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.2."
  - id: e15
    source: ercot-nprr1290-prs-report
    locator: "NPRR1290 PRS Report (2025-08-13), Revision Description, item 2"
    quote: "While it was initially expected that this telemetry would be removed with RTC+B, ERCOT has identified instances in which that information is still useful and necessary."

---

## Definition

HASL (High Ancillary Service Limit) and LASL (Low Ancillary Service Limit) are terms from the ERCOT Protocols as they stood before Real-Time Co-optimization. HASL was a dynamically calculated MW upper limit on a Resource that reserved the part of its capacity committed for Ancillary Service. [e1] LASL was a dynamically calculated MW lower limit that kept the Resource able to provide committed Ancillary Service. [e2]

## How it works

In the pre-RTC Protocols, HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2. [e1] The same definition says HASL was also used in the capacity shortfall ratio share calculations and in the Reliability Unit Commitment optimization, [e5] and that it was not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.2. [e14]

What replaced them: the same Section 6.5.7.2, Resource Limit Calculator, in the current np-06 text calculates the HDL and LDL within four seconds after a change in telemetered Resource-specific attributes. [e10] HDL is described as a dynamically calculated MW upper limit describing the maximum capability of the Resource's SCED dispatch, and it limits the amount of Reg-Up that can be awarded for the next five minutes, restricted by HSL. [e11] For a SCED-dispatchable Generation Resource in the On-Line status codes (other than SHUTDOWN), HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM). [e13] For an ESR in ONHOLD, HDL = 0. [e12] (See the hsl-lsl topic for how Section 3.18 requires HSL to cover Resource-specific Ancillary Service awards.)

## ERCOT context

These are historical terms. The pre-RTC edition of the definitions carried a note under each one saying NPRR1013 would delete the definition upon system implementation of the Real-Time Co-Optimization project. [e3][e4] The NPRR1010 Board report (RTC - NP 6: Adjustment Period and Real-Time Operations) gives its effective date as upon system implementation of the RTC project, and the NPRR1013 report says that NPRR updates definitions and acronyms, among other items, to address changes associated with RTC implementation. [e8][e9] In a 2025 revision request ERCOT wrote that "the concept of a HASL no longer exists with RTC+B". [e6] RTC+B's first Operating Day was 12/5/2025. [e7]

One related carry-over: in NPRR1290 ERCOT proposed to retain existing Non-Frequency Responsive Capacity telemetry, noting that it was initially expected to be removed with RTC+B but is still useful and necessary in some instances. [e15]

## Timeline

- NPRR1010 and NPRR1013 take effect upon RTC system implementation; NPRR1013 deletes the HASL and LASL definitions at that point. [e8][e9][e3][e4]
- 2025-08-13: the NPRR1290 PRS report, in which ERCOT says the HASL concept no longer exists with RTC+B. [e6]
- 12/5/2025: first Operating Day of RTC+B. [e7]

## Key facts

- HASL: an upper MW limit that reserved capacity committed for Ancillary Service. [e1]
- LASL: a lower MW limit that kept the Resource able to provide committed Ancillary Service. [e2]
- Both definitions were marked for deletion upon implementation of the RTC project (NPRR1013). [e3][e4]
- ERCOT's own wording in NPRR1290: the concept of a HASL no longer exists with RTC+B. [e6]
- Current np-06 Section 6.5.7.2 computes HDL and LDL, not HASL and LASL. [e10]

## Say it like this

(Guidance) HASL and LASL were the limits ERCOT used before real-time co-optimization to hold back the part of a unit committed to ancillary services. They went away with RTC+B, so you will meet them in older data and documents, not in the current rules; today the dispatch window is described by HDL and LDL.

## Common confusion

(Guidance) Do not confuse them with HSL and LSL, the sustained limits a Resource reports. HASL and LASL were calculated limits that sat inside those and existed only to protect ancillary service capacity. [e1][e2] Also do not confuse them with HDL and LDL, which are the current calculated dispatch limits. [e10]

## Questions

### What were HASL and LASL?

Calculated MW limits on a Resource: HASL an upper limit reserving capacity committed for Ancillary Service, LASL a lower limit keeping the Resource able to provide it. [e1][e2]

### Do they still exist?

No, according to ERCOT's own statement that the concept of a HASL no longer exists with RTC+B, and the Protocol notes marking both definitions for deletion upon RTC implementation. [e6][e3][e4]

### What does the Resource Limit Calculator compute now?

HDL and LDL, within four seconds of a change in telemetered attributes. [e10]

### Why did RTC+B make HASL unnecessary?

The saved sources give ERCOT's statement that the concept no longer exists with RTC+B, [e6] but not a step-by-step explanation of the substitution.

## Open items

- A search of the current Section 2 (np-02, effective 2026-11-06) finds no HASL or LASL definition. An absence cannot be quoted, so this is noted here and not cited above.
- The sources still do not state in one place how the pre-RTC HASL/LASL calculation was replaced inside SCED; the NPRR1010 and NPRR1013 Board reports revise Section 6 and Section 2 but do not discuss HASL by name. Resolved in part 2026-11-21: they show the effective date and that Section 6.5.7.2 now computes HDL and LDL.
- The pre-RTC definition also carried a pending NPRR1216 replacement; it is not described here.
