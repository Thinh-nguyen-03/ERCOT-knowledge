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

## Statements to check (new or changed since the last audit)

- **Link to hsl-lsl** (cites e1, e2): related HSL / LSL: HASL and LASL were dynamically calculated MW limits on a Resource tied to capacity committed for Ancillary Service. [e1][e2]
- **Link to rtc-b** (cites e3, e4): related RTC+B (Real-Time Co-optimization + Batteries): The Protocols marked both definitions for deletion upon system implementation of the Real-Time Co-Optimization project. [e3][e4]
- **Link to ancillary-services** (cites e1, e2): related Ancillary Services (AS): Both limits existed to reserve or protect capacity committed for Ancillary Service. [e1][e2]
- **Link to sced** (cites e1): related SCED (Security-Constrained Economic Dispatch): HASL was calculated by the Resource Limit Calculator described in Section 6.5.7.2 of the pre-RTC Protocols. [e1]
- **Link to ruc** (cites e5): related RUC (Reliability Unit Commitment: DRUC/HRUC): The pre-RTC definition says HASL was also included in the Reliability Unit Commitment optimization. [e5]
- **Link to base-point** (cites e11): related Base Point: HDL is described as the maximum capability of a Resource's SCED dispatch. [e11]
- **Link to energy-storage-resource** (cites e12) FLAG number-not-in-quote: 6.5, 7.2: related Energy Storage Resource (ESR): In the current Section 6.5.7.2 the HDL formulas have a separate ESR paragraph; for an ESR in ONHOLD, HDL = 0. [e12]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) HASL and LASL were the limits ERCOT used before real-time co-optimization to hold back the part of a unit committed to ancillary services. They went away with RTC+B, so you will meet them in older data and documents, not in the current rules; today the dispatch window is described by HDL and LDL.

