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

### e8 · `ercot-nprr1010-board-report` · tier 1 · NPRR1010 Board Report (Real-Time Co-optimization, Section 6 Adjustment Period and Real-Time Operations) (Board approved 2020-12-08)
locator: NPRR1010 Board Report (decision date December 8, 2020), header table · text copy line 10

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon system implementation of the Real-Time Co-Optimization (RTC) Project
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e9 · `ercot-nprr1013-board-report` · tier 1 · NPRR1013 Board Report (Real-Time Co-optimization, Sections 1, 2, 16 and 25) (Board approved 2020-12-08)
locator: NPRR1013 Board Report, header table, Revision Description · text copy line 46

BEFORE: …---------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+ | Revision Description | | 
QUOTE: This NPRR updates the Protected Information provisions, definitions and acronyms, registration and qualification of Market Participants, and Market Suspension and Restart in the Protocols to address changes associated with the implementation of RTC.
AFTER:  Specifically, this NPRR addresses the following Key Principles: | | | | | | | | | | - KP1.4 - Systems/Applications that Provide Input into the Real-Time Optimization Engine; | | | | | | | | | | - KP1.6 - Ancillary Service Imbalance Settlement; | | | | | | | | | | - KP4 - The Supplemental Ancillary …

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, Resource Limit Calculator, paragraph (1) · text copy line 1643 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.5.7.2 Resource Limit Calculator (1) 
QUOTE: ERCOT shall calculate the HDL and LDL within four seconds after a change of the Resource-specific attributes provided as part of the QSE's SCADA telemetry under Section 6.5.5.2, Operational Data Requirements.
AFTER:  The formulas described below define which Resource-specific attributes must be used to calculate each Resource limit. The Resource limits are used as inputs into both the SCED process and the Ancillary Service Capacity Monitor as described in Section 6.5.7.6, Load Frequency Control. These Resource …

### e11 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.12, Resource Limits, paragraph (1)(c) and (d) · text copy line 1493 · heading above: 6.5.7.1.12 Resource Limits

BEFORE: …ulated by ERCOT and used as inputs by the SCED process: (a) Normal Ramp Rate based on the values telemetered by the QSE to ERCOT, which represents the current ability of the Resource to follow a Base Point instruction; (b) Emergency Ramp Rate based on the values telemetered by the QSE to ERCOT; (c) 
QUOTE: HDL, which represents a dynamically calculated MW upper limit on a Resource that describes the maximum capability of the Resource's SCED dispatch and limits the amount of Reg-Up that can be awarded to the Resource for the next five minutes (the Resource's Real-Time generation or, in the case of an ESR, its Real-Time output or consumption, plus the product of the Normal Ramp Rate, as telemetered by the QSE, multiplied by five), restricted by HSL; and
AFTER:  (d) LDL, which represents a dynamically calculated MW lower limit on a Resource that describes the minimum capability of the Resource's SCED dispatch and limits the amount of Reg-Down that can be awarded to the Resource for the next five minutes (the Resource's Real-Time generation or, in the case …

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (4)(a) to (c) · text copy line 1695 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …metry. NORMRAMPDN 5-minute blended Normal Ramp Rate down, as telemetered by the QSE. NORMRAMPUP 5-minute blended Normal Ramp Rate up, as telemetered by the QSE. ------------------------------------------------------------------------------------------ (4) For ESRs, HDL is calculated as follows: (a) 
QUOTE: If the telemetered Resource Status is ONHOLD, then HDL = 0
AFTER:  (b) If the telemetered Resource Status is ONTEST, then HDL = Max (Min (POWERTELEM, HSLTELEM), LSLTELEM) (c) If the telemetered Resource Status is any status code specified in item (5)(b)(iv) of Section 3.9.1 other than OUT, EMR, EMRSWGR, ONHOLD, or ONTEST, then HDL = Min (POWERTELEM + (NORMRAMPUP* …

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (2)(b), High Dispatch Limit · text copy line 1651 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …ments produced by the SCED and Load Frequency Control (LFC) processes will respect individual Resource physical limitations. (2) For SCED-dispatchable Generation Resources, HDL is calculated as follows: (a) If the telemetered Resource Status is SHUTDOWN, then HDL = POWERTELEM - (NORMRAMPDN * 5) (b) 
QUOTE: If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, other than SHUTDOWN, then HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM)
AFTER:  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL), end of the paragraph · text copy line 1276

BEFORE: …llary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator. HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization 
QUOTE: but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.2.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e15 · `ercot-nprr1290-prs-report` · tier 1 · NPRR1290 PRS Report (2025-08-13)
locator: NPRR1290 PRS Report (2025-08-13), Revision Description, item 2 · text copy line 92

BEFORE: … | | | 2. There are multiple proposed language changes and clarifications regarding the "frequency responsive" capability telemetry provided to ERCOT by QSEs. Of particular note, ERCOT is proposing to retain the existing Non-Frequency Responsive Capacity (NFRC) telemetry currently provided by QSEs. 
QUOTE: While it was initially expected that this telemetry would be removed with RTC+B, ERCOT has identified instances in which that information is still useful and necessary.
AFTER:  | | | | | | | | | | 3. Under Section 3.1.6.9, following receipt of an Outage Schedule Adjustment (OSA) for a Resource, a "QSE must update the Resource's Energy Offer Curve to $4,500/MWh for all MW level..." Under RTC+B, with the Real-Time System-Wide Offer Cap (RTSWCAP) at $2,000/MWh, a QSE will no…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e1, e5, e14): In the pre-RTC Protocols, HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2. [e1] The same definition says HASL was also used in the capacity shortfall ratio share calculations and in the Reliability Unit Commitment optimization, [e5] and that it was not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.2. [e14]
- **How it works #2** (cites e10, e11, e13, e12) FLAG number-not-in-quote: 7.2, 3.18: What replaced them: the same Section 6.5.7.2, Resource Limit Calculator, in the current np-06 text calculates the HDL and LDL within four seconds after a change in telemetered Resource-specific attributes. [e10] HDL is described as a dynamically calculated MW upper limit describing the maximum capability of the Resource's SCED dispatch, and it limits the amount of Reg-Up that can be awarded for the next five minutes, restricted by HSL. [e11] For a SCED-dispatchable Generation Resource in the On-Line status codes (other than SHUTDOWN), HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM). [e13] For an ESR in ONHOLD, HDL = 0. [e12] (See the hsl-lsl topic for how Section 3.18 requires HSL to cover Resource-specific Ancillary Service awards.)
- **ERCOT context #1** (cites e3, e4, e8, e9, e6, e7): These are historical terms. The pre-RTC edition of the definitions carried a note under each one saying NPRR1013 would delete the definition upon system implementation of the Real-Time Co-Optimization project. [e3][e4] The NPRR1010 Board report (RTC - NP 6: Adjustment Period and Real-Time Operations) gives its effective date as upon system implementation of the RTC project, and the NPRR1013 report says that NPRR updates definitions and acronyms, among other items, to address changes associated with RTC implementation. [e8][e9] In a 2025 revision request ERCOT wrote that "the concept of a HASL no longer exists with RTC+B". [e6] RTC+B's first Operating Day was 12/5/2025. [e7]
- **ERCOT context #2** (cites e15): One related carry-over: in NPRR1290 ERCOT proposed to retain existing Non-Frequency Responsive Capacity telemetry, noting that it was initially expected to be removed with RTC+B but is still useful and necessary in some instances. [e15]
- **Timeline #1** (cites e8, e9, e3, e4): - NPRR1010 and NPRR1013 take effect upon RTC system implementation; NPRR1013 deletes the HASL and LASL definitions at that point. [e8][e9][e3][e4]
- **Timeline #2** (cites e6) FLAG number-not-in-quote: 2025: - 2025-08-13: the NPRR1290 PRS report, in which ERCOT says the HASL concept no longer exists with RTC+B. [e6]
- **Timeline #3** (cites e7): - 12/5/2025: first Operating Day of RTC+B. [e7]
- **Key facts #5** (cites e10) FLAG number-not-in-quote: 7.2: - Current np-06 Section 6.5.7.2 computes HDL and LDL, not HASL and LASL. [e10]
- **Common confusion #1** (cites e1, e2, e10): (Guidance) Do not confuse them with HSL and LSL, the sustained limits a Resource reports. HASL and LASL were calculated limits that sat inside those and existed only to protect ancillary service capacity. [e1][e2] Also do not confuse them with HDL and LDL, which are the current calculated dispatch limits. [e10]
- **Questions #6** (cites e10): HDL and LDL, within four seconds of a change in telemetered attributes. [e10]
- **Questions #8** (cites e6): The saved sources give ERCOT's statement that the concept no longer exists with RTC+B, [e6] but not a step-by-step explanation of the substitution.
- **Link to hsl-lsl** (cites e1, e2): related HSL / LSL: HASL and LASL were limits calculated inside a Resource's sustained limits to hold back capacity committed to Ancillary Service. [e1][e2]
- **Link to rtc-b** (cites e3, e4): related RTC+B (Real-Time Co-optimization + Batteries): The Protocols marked both definitions for deletion upon system implementation of the Real-Time Co-Optimization project. [e3][e4]
- **Link to ancillary-services** (cites e1, e2): related Ancillary Services (AS): Both limits existed to reserve or protect capacity committed for Ancillary Service. [e1][e2]
- **Link to sced** (cites e1): related SCED (Security-Constrained Economic Dispatch): HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2 of the pre-RTC Protocols. [e1]
- **Link to ruc** (cites e5): related RUC (Reliability Unit Commitment: DRUC/HRUC): The pre-RTC definition says HASL was also included in the Reliability Unit Commitment optimization. [e5]
- **Link to base-point** (cites e10): related Base Point: The HDL and LDL limit the SCED dispatch range around a Resource's telemetered output. [e10]
- **Link to energy-storage-resource** (cites e12): related Energy Storage Resource (ESR): Post-RTC the limit formulas have separate ESR cases with ONHOLD and ONTEST handling. [e12]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) HASL and LASL were the limits ERCOT used before real-time co-optimization to hold back the part of a unit committed to ancillary services. They went away with RTC+B, so you will meet them in older data and documents, not in the current rules; today the dispatch window is described by HDL and LDL.

