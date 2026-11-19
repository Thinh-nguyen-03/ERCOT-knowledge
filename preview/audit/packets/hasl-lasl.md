# Audit packet: HASL / LASL (hasl-lasl)

kind concept · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL) · text copy line 1276

BEFORE: …, or mechanical device that implements Primary Frequency Response of generating units/generating facilities or other system elements. Governor Dead-Band The range of deviations of system frequency (+/-) that produces no Primary Frequency Response. H [Back to Top] High Ancillary Service Limit (HASL) 
QUOTE: A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource's capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator.
AFTER:  HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.…

### e2 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of Low Ancillary Service Limit (LASL) · text copy line 1561

BEFORE: …defined as the expected value of the number of days where at least one loss of Load event occurs (e.g., one day per 100 years). A loss of Load event is an hour during which firm Load, plus required minimum operating reserves, exceeds available generation capacity. Low Ancillary Service Limit (LASL) 
QUOTE: A dynamically calculated MW lower limit on a Resource to maintain the ability of the Resource to provide committed Ancillary Service.
AFTER:  --------------------------------------------------------------------------------------------------------------------------------------------------------- [NPRR1013: Delete the above definition "Low Ancillary Service Limit (LASL)" upon system implementation of the Real-Time Co-Optimization (RTC) pro…

### e3 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), note under the HASL definition · text copy line 1288

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------+ ---------------------------------------------------------------------------------------------------------------------------------------------------------- 
QUOTE: [NPRR1013: Delete the above definition "High Ancillary Service Limit (HASL)" upon system implementation of the Real-Time Co-Optimization (RTC) project.]
AFTER:  ---------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------…

### e4 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), note under the LASL definition · text copy line 1564

BEFORE: …imit (LASL) A dynamically calculated MW lower limit on a Resource to maintain the ability of the Resource to provide committed Ancillary Service. --------------------------------------------------------------------------------------------------------------------------------------------------------- 
QUOTE: [NPRR1013: Delete the above definition "Low Ancillary Service Limit (LASL)" upon system implementation of the Real-Time Co-Optimization (RTC) project.]
AFTER:  --------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------…

### e5 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL), second sentence · text copy line 1276

BEFORE: …at produces no Primary Frequency Response. H [Back to Top] High Ancillary Service Limit (HASL) A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource's capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator. 
QUOTE: HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization
AFTER:  but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.2. +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `ercot-nprr1290-prs-report` · tier 1 · NPRR1290 PRS Report (2025-08-13)
locator: NPRR1290 PRS Report (2025-08-13), Revision Description, item 6 · text copy line 100

BEFORE: … the calculation, and explain what price will be used if the Ancillary Service Offer submitted is a partial offer. | | | | | | | | | | 6. Within Section 6.5.5.2, there is language describing how State of Charge (SOC) data will be used in calculating a Resource's High Ancillary Service Limit (HASL). 
QUOTE: As the concept of a HASL no longer exists with RTC+B, ERCOT is proposing that the applicable language be struck with RTC+B implementation.
AFTER:  | | | | | | | | | | 7. Under the Protocol language for RTC+B, "[t]he System Lambda used to determine LMPs from SCED Step 2 shall be capped at the effective [Value of Lost Load] (VOLL)." In discussions with ERCOT stakeholders, it has been identified that a Resource's QSE may face significant financi…

### e7 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Real-Time Co-optimization Update to the Board, go-live note · text copy line 160

BEFORE: …ED/LFC (QSE RTC offers and telemetry to support closed-loop frequency control test 2-3 tests of 2-4 hour durations) #6 Day-Ahead Market (Non-binding DAM using QSE offers for at least 2 tests) Transition to Go-Live Upon completion of testing, confirmation of ERCOT and market readiness for Go-Live. * 
QUOTE: Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration.
AFTER:  4 Item 10 PUBLIC Key activities leading up to Go-Live ERCOT successfully conducted the second/final RTC+B Production Test on Oct 30, 2025 from 10:35am-12:35pm to manage the Real-Time Market and Load Frequency Control systems: - Frequency control was improved, QSE performance improved, and no new is…

## Statements to check

- **Definition #1** (cites e1, e2): HASL (High Ancillary Service Limit) and LASL (Low Ancillary Service Limit) are terms from the ERCOT Protocols as they stood before Real-Time Co-optimization. HASL was a dynamically calculated MW upper limit on a Resource that reserved the part of its capacity committed for Ancillary Service. [e1] LASL was a dynamically calculated MW lower limit that kept the Resource able to provide committed Ancillary Service. [e2]
- **How it works #1** (cites e1, e5): In the pre-RTC Protocols, HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2. [e1] The same definition says HASL was also used in the capacity shortfall ratio share calculations and in the Reliability Unit Commitment optimization. [e5]
- **ERCOT context #1** (cites e3, e4, e6, e7): These are historical terms. The pre-RTC edition of the definitions carried a note under each one saying NPRR1013 would delete the definition upon system implementation of the Real-Time Co-Optimization project. [e3][e4] In a 2025 revision request ERCOT wrote that "the concept of a HASL no longer exists with RTC+B". [e6] RTC+B's first Operating Day was 12/5/2025. [e7]
- **Key facts #1** (cites e1): - HASL: an upper MW limit that reserved capacity committed for Ancillary Service. [e1]
- **Key facts #2** (cites e2): - LASL: a lower MW limit that kept the Resource able to provide committed Ancillary Service. [e2]
- **Key facts #3** (cites e3, e4): - Both definitions were marked for deletion upon implementation of the RTC project (NPRR1013). [e3][e4]
- **Key facts #4** (cites e6): - ERCOT's own wording in NPRR1290: the concept of a HASL no longer exists with RTC+B. [e6]
- **Common confusion #1** (cites e1, e2): (Guidance) Do not confuse them with HSL and LSL, the sustained limits a Resource reports. HASL and LASL were calculated limits that sat inside those and existed only to protect ancillary service capacity. [e1][e2]
- **Questions #2** (cites e1, e2): Calculated MW limits on a Resource: HASL an upper limit reserving capacity committed for Ancillary Service, LASL a lower limit keeping the Resource able to provide it. [e1][e2]
- **Questions #4** (cites e6, e3, e4): No, according to ERCOT's own statement that the concept of a HASL no longer exists with RTC+B, and the Protocol notes marking both definitions for deletion upon RTC implementation. [e6][e3][e4]
- **Link to hsl-lsl** (cites e1, e2): related HSL / LSL: HASL and LASL were limits calculated inside a Resource's sustained limits to hold back capacity committed to Ancillary Service. [e1][e2]
- **Link to rtc-b** (cites e3, e4): related RTC+B (Real-Time Co-optimization + Batteries): The Protocols marked both definitions for deletion upon system implementation of the Real-Time Co-Optimization project. [e3][e4]
- **Link to ancillary-services** (cites e1, e2): related Ancillary Services (AS): Both limits existed to reserve or protect capacity committed for Ancillary Service. [e1][e2]
- **Link to sced** (cites e1): related SCED (Security-Constrained Economic Dispatch): HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2 of the pre-RTC Protocols. [e1]
- **Link to ruc** (cites e5): related RUC (Reliability Unit Commitment: DRUC/HRUC): The pre-RTC definition says HASL was also included in the Reliability Unit Commitment optimization. [e5]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) HASL and LASL were the limits ERCOT used before real-time co-optimization to hold back the part of a unit committed to ancillary services. They went away with RTC+B, so you will meet them in older data and documents, not in the current rules.

