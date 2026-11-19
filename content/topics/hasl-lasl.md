---
id: hasl-lasl
name: HASL / LASL
aliases: [HASL, LASL, High Ancillary Service Limit, Low Ancillary Service Limit]
kind: concept
domain: pricing
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-19
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
---

## Definition

HASL (High Ancillary Service Limit) and LASL (Low Ancillary Service Limit) are terms from the ERCOT Protocols as they stood before Real-Time Co-optimization. HASL was a dynamically calculated MW upper limit on a Resource that reserved the part of its capacity committed for Ancillary Service. [e1] LASL was a dynamically calculated MW lower limit that kept the Resource able to provide committed Ancillary Service. [e2]

## How it works

In the pre-RTC Protocols, HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2. [e1] The same definition says HASL was also used in the capacity shortfall ratio share calculations and in the Reliability Unit Commitment optimization. [e5]

## ERCOT context

These are historical terms. The pre-RTC edition of the definitions carried a note under each one saying NPRR1013 would delete the definition upon system implementation of the Real-Time Co-Optimization project. [e3][e4] In a 2025 revision request ERCOT wrote that "the concept of a HASL no longer exists with RTC+B". [e6] RTC+B's first Operating Day was 12/5/2025. [e7]

## Key facts

- HASL: an upper MW limit that reserved capacity committed for Ancillary Service. [e1]
- LASL: a lower MW limit that kept the Resource able to provide committed Ancillary Service. [e2]
- Both definitions were marked for deletion upon implementation of the RTC project (NPRR1013). [e3][e4]
- ERCOT's own wording in NPRR1290: the concept of a HASL no longer exists with RTC+B. [e6]

## Say it like this

(Guidance) HASL and LASL were the limits ERCOT used before real-time co-optimization to hold back the part of a unit committed to ancillary services. They went away with RTC+B, so you will meet them in older data and documents, not in the current rules.

## Common confusion

(Guidance) Do not confuse them with HSL and LSL, the sustained limits a Resource reports. HASL and LASL were calculated limits that sat inside those and existed only to protect ancillary service capacity. [e1][e2]

## Questions

### What were HASL and LASL?

Calculated MW limits on a Resource: HASL an upper limit reserving capacity committed for Ancillary Service, LASL a lower limit keeping the Resource able to provide it. [e1][e2]

### Do they still exist?

No, according to ERCOT's own statement that the concept of a HASL no longer exists with RTC+B, and the Protocol notes marking both definitions for deletion upon RTC implementation. [e6][e3][e4]

## Open items

- A search of the current Section 2 (np-02, effective 2026-11-06) finds no HASL or LASL definition. An absence cannot be quoted, so this is noted here and not cited above.
- No saved source explains in one place how the pre-RTC HASL/LASL calculation was replaced inside SCED. Deeper pass: the NPRR1010-1014 reports.
- The pre-RTC definition also carried a pending NPRR1216 replacement; it is not described here.
