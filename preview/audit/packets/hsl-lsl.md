# Audit packet: HSL / LSL (hsl-lsl)

kind concept · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, High Sustained Limit (HSL) for an Energy Storage Resource (ESR) · text copy line 1188

BEFORE: …f a Resource. This limit must be achievable for a time stated by the QSE, but not less than 30 minutes. High Impact Outage (HIO) (see Outage) High Impact Transmission Element (HITE) (see Transmission Element) High Sustained Limit (HSL) High Sustained Limit (HSL) for an Energy Storage Resource (ESR) 
QUOTE: The limit established by the Qualified Scheduling Entity (QSE), expressed as a MW value that may be less than, equal to, or greater than zero, continuously updated in Real-Time. A positive HSL for an ESR describes the maximum sustained energy discharging capability of the ESR. A negative HSL for an ESR describes the minimum temporary energy charging capability of the ESR.
AFTER:  High Sustained Limit (HSL) for a Generation Resource The limit established by the Qualified Scheduling Entity (QSE), continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. High Sustained Limit (HSL) for a Load Resource The limit calcula…

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, Low Sustained Limit (LSL) for an Energy Storage Resource (ESR) · text copy line 1477

BEFORE: … be a non-negative number in MW. Low Sustained Limit (LSL) Low Sustained Limit (LSL) for an Energy Storage Resource (ESR) The limit established by the Qualified Scheduling Entity (QSE), expressed as a MW value that may be less than, equal to, or greater than zero, continuously updated in Real-Time. 
QUOTE: A negative LSL for an ESR describes the maximum sustained energy charging capability of the ESR. A positive LSL for an ESR describes the minimum temporary energy discharging capability of the ESR.
AFTER:  Low Sustained Limit (LSL) for a Generation Resource The limit established by the Qualified Scheduling Entity (QSE), continuously updatable in Real-Time, that describes the minimum sustained energy production capability of a Resource. Low Sustained Limit (LSL) for a Load Resource The limit calculate…

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (1) · text copy line 8207 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.18 Resource Limits in Providing Ancillary Service (1) 
QUOTE: For Generation Resources, Energy Storage Resources (ESRs), and Load Resources the High Sustained Limit (HSL) must be greater than or equal to the Low Sustained Limit (LSL) and the sum of the Resource-specific awards for Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS), Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), and Non-Spinning Reserve (Non-Spin).
AFTER:  (2) For Non-Spin, the amount of Non-Spin awarded must be less than or equal to the HSL for Off-Line Generation Resources. +--------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Insert pa…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.1.2, Centralized Dispatch, paragraph (2) · text copy line 1022 · heading above: 6.5.1.2 Centralized Dispatch

BEFORE: … Non-Spinning Reserve (Non-Spin) to ensure operational security. Responsive Reserve (RRS) shall be self-deployed in response to frequency deviations or as specified in Nodal Operating Guide Section 4.8, Responsive Reserve Service and ERCOT Contingency Reserve Service During Scarcity Conditions. (2) 
QUOTE: ERCOT shall verify that either an Energy Offer Curve or Energy Bid/Offer Curve providing prices for the Resource between its High Sustained Limit (HSL) and Low Sustained Limit (LSL) or an Output Schedule has been submitted for each On-Line Resource an hour before the end of the Adjustment Period for the upcoming Operating Hour.
AFTER:  ERCOT shall notify QSEs that have not submitted an Output Schedule or Energy Offer Curve or Energy Bid/Offer Curve through the Market Information System (MIS) Certified Area. (3) If a Resource is scheduled to be On-Line and available to provide an Ancillary Service, but does not have any Ancillary …

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, Resource Limit Calculator, paragraph (1) · text copy line 1643 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …DL and LDL within four seconds after a change of the Resource-specific attributes provided as part of the QSE's SCADA telemetry under Section 6.5.5.2, Operational Data Requirements. The formulas described below define which Resource-specific attributes must be used to calculate each Resource limit. 
QUOTE: The Resource limits are used as inputs into both the SCED process and the Ancillary Service Capacity Monitor as described in Section 6.5.7.6, Load Frequency Control. These Resource limits help ensure that the deployments produced by the SCED and Load Frequency Control (LFC) processes will respect individual Resource physical limitations.
AFTER:  (2) For SCED-dispatchable Generation Resources, HDL is calculated as follows: (a) If the telemetered Resource Status is SHUTDOWN, then HDL = POWERTELEM - (NORMRAMPDN * 5) (b) If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (2)(b), High Dispatch Limit for SCED-dispatchable Generation Resources · text copy line 1651 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …ments produced by the SCED and Load Frequency Control (LFC) processes will respect individual Resource physical limitations. (2) For SCED-dispatchable Generation Resources, HDL is calculated as follows: (a) If the telemetered Resource Status is SHUTDOWN, then HDL = POWERTELEM - (NORMRAMPDN * 5) (b) 
QUOTE: If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, other than SHUTDOWN, then HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM)
AFTER:  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, paragraph (3)(a)(ii) · text copy line 8252 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …ion. (3) The "Available Capacity for a Resource" is defined as follows: (a) For Generation Resources, including Switchable Generation Resources (SWGRs), but excluding Intermittent Renewable Resources (IRRs): (i) Long-Term CCT - the Seasonal net max sustainable rating, as registered with ERCOT. (ii) 
QUOTE: SCED CCT - the telemetered High Sustained Limit (HSL) for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, and zero for all other Resources.
AFTER:  (b) For IRRs: (i) Long-Term CCT - the Seasonal net max sustainable rating, as registered with ERCOT, on the export side and zero MW on the import side. (ii) SCED CCT - the telemetered HSL for Resources with telemetered Resource Status as specified in paragraph (5)(b)(i) of Section 3.9.1 and zero fo…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Operating Reserve Margin / PRC, subsection 2, Accounting for Reliability Actions and Conservative Operations · text copy line 3247

BEFORE: …RC may result from ERCOT's reliability actions, including the Reliability Unit Commitments (RUC) that increase real-time supplies and Emergency Reserve Service (ERS) resources. However, even after accounting for the effects of RUC and ERS, shortage conditions have declined substantially since 2022. 
QUOTE: In 2025, removing the aggregate HSL of RUC-committed resources would have increased the frequency of PRC below 3,000 MW to only 1.2 hours in 2025, which remains well below the average frequency observed from 2016 to 2021.
AFTER:  In addition, ERCOT has not deployed ERS system wide since September 6, 2023, which was the result of transmission-related contingencies rather than insufficient capacity. In short, the level of operating reserves and the infrequency of shortage conditions indicate that the system had surplus capaci…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.2, Operational Data Requirements, paragraph (3) · text copy line 1168 · heading above: 6.5.5.2 Operational Data Requirements

BEFORE: …urce in addition to the Split Generation Resource the Master QSE represents; and (t) The telemetered MW of power augmentation capacity that is not On-Line for Resources that have power augmentation capacity included in HSL. When power augmentation capacity is On-Line, this value should be zero. (3) 
QUOTE: For each Intermittent Renewable Resource (IRR), the QSE shall set the HSL equal to the current net output capability of the facility. The net output capability should consider the net real power of the IRR generation equipment, IRR generation equipment availability, weather conditions, and whether the IRR net output is being affected by compliance with a SCED Dispatch Instruction.
AFTER:  (4) For each Resource, the QSE for the Resource shall consider the physical capability to provide a specific type of Ancillary Service based on the operating conditions for that specific Ancillary Service, including equipment availability, weather conditions and ability to meet the Ancillary Servic…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (2), variable table, HSLTELEM · text copy line 1666 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …---------------------------------------------------- HDL High Dispatch Limit. POWERTELEM Gross or net real power provided via telemetry. NORMRAMPDN 5-minute blended Normal Ramp Rate down, as telemetered by the QSE. NORMRAMPUP 5-minute blended Normal Ramp Rate up, as telemetered by the QSE. HSLTELEM 
QUOTE: For IRRs qualified to provide an Ancillary Service and telemetering a non-zero capability to provide that Ancillary Service, and all IRRs within an IRR Group where any IRR within the IRR Group is qualified to provide an Ancillary Service and telemetering a non-zero capability to provide that Ancillary Service, HSLTELEM shall be the five-minute intra-hour forecast for the Resource. For all other Resources, HSLTELEM shall be the Resource's HSL provided to ERCOT via telemetry, in accordance with Section 6.5.5.2.
AFTER:  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …t for a Combined Cycle Generation Resource shall be determined by the positive transition cost from the On-Line Combined Cycle Generation Resource within the Combine Cycle Train or from a shutdown condition, whichever ERCOT determines to be appropriate. (7) ERCOT may accept COPs only from QSEs. (8) 
QUOTE: For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF).
AFTER:  ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most re…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: … Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF). ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. 
QUOTE: A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL) · text copy line 1276

BEFORE: …, or mechanical device that implements Primary Frequency Response of generating units/generating facilities or other system elements. Governor Dead-Band The range of deviations of system frequency (+/-) that produces no Primary Frequency Response. H [Back to Top] High Ancillary Service Limit (HASL) 
QUOTE: A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource's capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator.
AFTER:  HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.…

### e41 · `ercot-nprr1290-prs-report` · tier 1 · NPRR1290 PRS Report (2025-08-13)
locator: NPRR1290 PRS report, summary of changes, item 6 (Section 6.5.5.2, HASL language) · text copy line 100

BEFORE: … the calculation, and explain what price will be used if the Ancillary Service Offer submitted is a partial offer. | | | | | | | | | | 6. Within Section 6.5.5.2, there is language describing how State of Charge (SOC) data will be used in calculating a Resource's High Ancillary Service Limit (HASL). 
QUOTE: As the concept of a HASL no longer exists with RTC+B, ERCOT is proposing that the applicable language be struck with RTC+B implementation.
AFTER:  | | | | | | | | | | 7. Under the Protocol language for RTC+B, "[t]he System Lambda used to determine LMPs from SCED Step 2 shall be capped at the effective [Value of Lost Load] (VOLL)." In discussions with ERCOT stakeholders, it has been identified that a Resource's QSE may face significant financi…

## Statements to check (new or changed since the last audit)

- **Link to sced** (cites e7, e8): used-in SCED (Security-Constrained Economic Dispatch): An On-Line Resource's offer curve must price it between its HSL and LSL (or it needs an Output Schedule), and the Resource limits feed SCED. [e7][e8]
- **Link to ancillary-services** (cites e6): related Ancillary Services (AS): A Resource's HSL must be greater than or equal to the LSL and the sum of its Resource-specific Ancillary Service awards. [e6]
- **Link to energy-offer-curve** (cites e7): related Energy Offer Curve: The Energy Offer Curve must price the Resource between its HSL and LSL. [e7]
- **Link to energy-storage-resource** (cites e3, e4): related Energy Storage Resource (ESR): For an ESR a negative HSL is the minimum temporary charging capability and a negative LSL is the maximum sustained charging capability. [e3][e4]
- **Link to market-power-mitigation** (cites e10): used-in Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): For Generation Resources (including IRRs, in separate paragraphs), the SCED CCT uses the telemetered HSL for Resources with specified telemetered statuses, and zero for all others. [e10]
- **Link to ruc** (cites e12): related RUC (Reliability Unit Commitment: DRUC/HRUC): The IMM removes the aggregate HSL of RUC-committed resources to test how much RUC lowered scarcity. [e12]
- **Link to cop** (cites e17, e18): related COP (Current Operating Plan): The COP carries the HSL and LSL for each Resource and each hour, and for IRRs ERCOT updates the COP HSL from forecasts. [e17][e18]
- **Link to hasl-lasl** (cites e34, e9): contrasts-with HASL / LASL: The superseded pre-RTC HASL definition pointed to Section 6.5.7.2, which now contains the HDL and LDL calculations. [e34][e9]
- **Link to base-point** (cites e8): related Base Point: The HDL and LDL, calculated from telemetered output and limits, are inputs to SCED and help ensure its deployments respect each Resource's physical limitations. [e8]
- **Link to rtc-b** (cites e41, e9) FLAG number-not-in-quote: 6.5, 7.2: related RTC+B (Real-Time Co-optimization + Batteries): In the NPRR1290 report ERCOT said the concept of a HASL no longer exists with RTC+B and proposed striking the related language; the Section 6.5.7.2 formulas calculate HDL and LDL. [e41][e9]
- **Link to wind-solar-forecasts** (cites e14, e15): related Wind & Solar Forecasts (STWPF, STPPF): For IRRs the HSL is tied to net output capability and, for Ancillary Service-qualified IRRs, to the five-minute intra-hour forecast in the HDL formula. [e14][e15]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) HSL and LSL are the top and bottom of the range of sustained output a unit's QSE reports. The offer curve has to price the unit between them, and the HSL must cover the unit's Ancillary Service awards.

