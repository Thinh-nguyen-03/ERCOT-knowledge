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

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.1, Changes in Resource Status, paragraph (8) · text copy line 1116 · heading above: 6.5.5.1 Changes in Resource Status

BEFORE: … the Resource is necessary to maintain the security of the TDSP's system or the ERCOT System; (d) The TDSP's disconnection of the Resource is necessary to protect the public from a safety risk attributable to the operation of the Resource; or (e) ERCOT directs the disconnection of the Resource. (8) 
QUOTE: For each Intermittent Renewable Resource (IRR) synchronized to the ERCOT System and not capable of providing real power due to a lack of fuel, the Resource Entity and QSE shall send ERCOT, via telemetry, a Real-Time On-Line status and HSL and LSL of 0.
AFTER:  6.5.5.2 Operational Data Requirements (1) ERCOT shall use Operating Period data to monitor and control the reliability of the ERCOT Transmission Grid and shall use it in network analysis software to predict the short-term reliability of the ERCOT Transmission Grid. Each TSP, at its own expense, may…

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

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(c) and (d), HSL and LSL items of a COP · text copy line 4532 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …Dispatch by SCED or Ancillary Service awards. ESRs shall not be discharging into or charging from the grid. This Resource Status is only to be used for Real-Time telemetry purposes; and (F) OUT - Off-Line and unavailable, or not connected to the ERCOT System and operating in a PMI; (c) The HSL; (i) 
QUOTE: For Load Resources other than CLRs, the HSL should equal the expected power consumption;
AFTER:  (ii) For ESRs, the HSL may be negative; (d) The LSL; (i) For Load Resources other than CLRs, the LSL should equal the expected Low Power Consumption (LPC); (ii) For ESRs, the LSL may be positive; (e) The High Emergency Limit (HEL); (f) The Low Emergency Limit (LEL); (g) Ancillary Service capability…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.2, paragraph (12)(d), power augmentation methods for Combined Cycle Generation Resources · text copy line 1262 · heading above: 6.5.5.2 Operational Data Requirements

BEFORE: … as part of one or more of the registered Combined Cycle Generation Resource configurations. Power augmentation methods may include: (a) Combustion turbine inlet air cooling methods; (b) Duct firing; (c) Other ways of temporarily increasing the output of Combined Cycle Generation Resources; and (d) 
QUOTE: For Qualifying Facilities (QFs), an LSL that represents the minimum energy available for Dispatch by SCED, in MW, from the Combined Cycle Generation Resource based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts for changes in ambient conditions.
AFTER:  (13) A QSE representing a Generation Resource other than a Combined Cycle Generation Resource may provide FRC telemetry for the Generation Resource only if the QSE or Resource Entity associated with that Generation Resource has first requested and obtained ERCOT's approval. (14) A QSE representing …

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.2, paragraph (2)(i), Combined Cycle Generation Resources · text copy line 1140 · heading above: 6.5.5.2 Operational Data Requirements

BEFORE: …uxiliary Load; (f) Status of switching devices in the plant switchyard not monitored by the TSP or DSP affecting flows on the ERCOT Transmission Grid; (g) Any data mutually agreed to by ERCOT and the QSE to adequately manage system reliability; (h) Generation Resource breaker and switch status; (i) 
QUOTE: HSL (Combined Cycle Generation Resources) shall: (i) Submit the HSL of the current operating configuration; and (ii) When providing ECRS, update the HSL as needed, to be consistent with Resource performance limitations of ECRS provision;
AFTER:  (j) NFRC currently available (unloaded) and included in the HSL of the Generation Resource; (k) High Emergency Limit (HEL), under Section 6.5.9.2, Failure of the SCED Process; (l) Low Emergency Limit (LEL), under Section 6.5.9.2; (m) LSL; (n) Configuration identification for Combined Cycle Generati…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (14) · text copy line 4595 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …ource Status to ONEMR. (13) A QSE representing a Resource may use the Resource Status code of ONEMR for a Resource that is: (a) On-Line, but for equipment problems it must be held at its current output level until repair and/or replacement of equipment can be accomplished; or (b) A hydro unit. (14) 
QUOTE: A QSE operating a Resource with a Resource Status code of ONEMR may set the HSL and LSL of the unit to be equal to ensure that SCED does not send Base Points that would move the unit.
AFTER:  (15) A QSE representing a Resource may use the Resource Status code of EMRSWGR only for an SWGR. (16) A QSE representing a Self-Limiting Facility must ensure that the sum of the COP HSL/LSL and the sum of the telemetered HSL/LSL submitted for each Resource within the Self-Limiting Facility do not e…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(I), OFFQS · text copy line 4455 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …-Line and in a start-up sequence and is not eligible for an Ancillary Service award, unless coming On-Line in response to a manual deployment of ERCOT Contingency Reserve Service (ECRS) or Non-Spinning Reserve (Non-Spin). This Resource Status is only to be used for Real-Time telemetry purposes; (I) 
QUOTE: OFFQS - Off-Line but available for SCED deployment and to provide ECRS and Non-Spin, if qualified and capable. Only qualified Quick Start Generation Resources (QSGRs) may utilize this status;
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace item (I) above with the foll…

### e24 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (4) · text copy line 298 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …loyments Factors that are projected to be used in the RUC process for that Operating Day; and (c) Following each month, ERCOT shall post the average, minimum, and maximum Ancillary Service Deployment Factors used in the RUC process by type of Ancillary Service and hour of the day for the month. (4) 
QUOTE: For all hours of the RUC Study Period within the RUC process, Quick Start Generation Resources (QSGRs) with a COP Resource Status of OFFQS shall be considered as On-Line with Low Sustained Limit (LSL) at zero MW.
AFTER:  QSGRs with a Resource Status of OFFQS shall only be committed by ERCOT through a RUC instruction in instances when a reliability issue would not otherwise be managed through Dispatch Instructions from Security-Constrained Economic Dispatch (SCED). (5) In addition to On-Line qualified Generation Res…

### e25 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2, General Capacity Testing Requirements, paragraph (1) · text copy line 242 · heading above: 8.1.1.2 General Capacity Testing Requirements

BEFORE: …ovided it submits a corrective action plan to ERCOT that identifies actions taken to correct performance deficiencies and the disqualified Resource successfully passes a new test as specified in Section 8.1.1.2.1.2, Responsive Reserve Qualification. 8.1.1.2 General Capacity Testing Requirements (1) 
QUOTE: Within the first 15 days of each Season, each QSE shall provide ERCOT a Seasonal HSL for any Generation Resource with a capacity greater than ten MW that will be operated during that Season.
AFTER:  ERCOT shall provide an appropriate form for QSEs to submit their Seasonal HSL data. The Seasonal HSL form shall take into account auxiliary Load and gross and net real power capability of the Generation Resource. Each QSE shall update its COP and telemetry, as necessary, to reflect the HSL of each …

### e26 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2, paragraph (2) · text copy line 244 · heading above: 8.1.1.2 General Capacity Testing Requirements

BEFORE: …esource may not be ramp rate-limited while the Real-Time telemetered value of HSL for the Generation Resource may be ramp rate-limited by the QSE representing the Generation Resource in order for the Generation Resource to meet its HSL using the testing process described in paragraph (2) below. (2) 
QUOTE: To verify that the HSL reported by telemetry is achievable, ERCOT may, at its discretion, conduct an unannounced Generation Resource test.
AFTER:  At a time determined solely by ERCOT, ERCOT will issue a Verbal Dispatch Instruction (VDI) to the QSE to operate the designated Generation Resource at its HSL as shown in the QSE's telemetry at the time the test is initiated. Immediately upon receiving the VDI, the QSE shall telemeter Resource Stat…

### e27 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2, paragraph (3) · text copy line 246 · heading above: 8.1.1.2 General Capacity Testing Requirements

BEFORE: …4-hour period. However, in no case shall ERCOT test more than two Generation Resources within one QSE simultaneously. All Resources On-Line in a Combined-Cycle Configuration will be measured on an aggregate capacity basis. All QSEs associated with a jointly owned unit will be tested simultaneously. 
QUOTE: Hydro, wind, and PhotoVoltaic (PV) generation will be excluded from unannounced generation capacity testing. ERCOT shall not perform an unannounced Generation Resource test during a Watch or Energy Emergency Alert (EEA) event.
AFTER:  If an unannounced Generation Resource test is underway when a Watch or EEA event commences, ERCOT may cancel the test. (4) Should the designated Generation Resource fail to reach its HSL shown in its telemetry within the time frame set forth herein, the Real-Time averaged MW telemetered during the …

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (5), LDL for ESRs · text copy line 1721 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …MRAMPUP 5-minute blended Normal Ramp Rate up, as telemetered by the QSE. HSLTELEM High Sustained Limit (HSL) provided via telemetry - per Section 6.5.5.2. ------------------------------------------------------------------------------------------------ (5) For ESRs, LDL is calculated as follows: (a) 
QUOTE: If the telemetered Resource Status is ONHOLD, then LDL = 0
AFTER:  (b) If the telemetered Resource Status is ONTEST, then LDL = Max (Min (POWERTELEM, HSLTELEM), LSLTELEM) (c) If the telemetered Resource Status is any status code specified in item (5)(b)(iv) of Section 3.9.1 other than OUT, or EMR, or EMRSWGR, or ONHOLD, or ONTEST, then LDL = Max (POWERTELEM - (NOR…

### e29 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (5)(c), LDL for ESRs · text copy line 1729 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …------------------------------------------------------------------------------------ (5) For ESRs, LDL is calculated as follows: (a) If the telemetered Resource Status is ONHOLD, then LDL = 0 (b) If the telemetered Resource Status is ONTEST, then LDL = Max (Min (POWERTELEM, HSLTELEM), LSLTELEM) (c) 
QUOTE: If the telemetered Resource Status is any status code specified in item (5)(b)(iv) of Section 3.9.1 other than OUT, or EMR, or EMRSWGR, or ONHOLD, or ONTEST, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM)
AFTER:  ------------------------------------------------------------------------------------------ Variable Description --------------------- -------------------------------------------------------------------- LDL Low Dispatch Limit. POWERTELEM Net real power provided via telemetry. LSLTELEM Low Sustained…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (6), HDL for SCED-dispatchable Load Resources · text copy line 1747 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …etry. LSLTELEM Low Sustained Limit provided via telemetry. NORMRAMPDN 5-minute blended Normal Ramp Rate down, as telemetered by the QSE. ------------------------------------------------------------------------------------------ (6) For SCED-dispatchable Load Resources, HDL is calculated as follows: 
QUOTE: HDL = Min (POWERTELEM + (NORMRAMPDN * 5), HSLTELEM)
AFTER:  ------------------------------------------------------------------------- Variable Description --------------------- --------------------------------------------------- HDL High Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPDN Normal Ramp Rate down, as telemetered b…

### e31 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (3)(a) and (b), LDL for SCED-dispatchable Generation Resources · text copy line 1675 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …----------------------------------------------------------------------------------------------------------------------------- (3) For SCED-dispatchable Generation Resources, LDL is calculated as follows: (a) If the telemetered Resource Status is STARTUP, then LDL = POWERTELEM + (NORMRAMPUP * 5) (b) 
QUOTE: If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1 other than STARTUP, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM)
AFTER:  ------------------------------------------------------------------------------------------ Variable Description --------------------- -------------------------------------------------------------------- LDL Low Dispatch Limit. POWERTELEM Gross or net real power provided via telemetry. LSLTELEM Low …

### e32 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.1, Changes in Resource Status, paragraph (2) · text copy line 1094 · heading above: 6.5.5.1 Changes in Resource Status

BEFORE: …(2) When an On-Line Resource is experiencing an event that may affect its availability and/or capability and that requires further actions to stabilize the Resource and/or determine the impact of the event, the QSE may change the Resource Status to ONHOLD within 15 minutes of experiencing an event. 
QUOTE: Following this Resource Status change, the telemetered HSL and any other applicable telemetry of the Resource as specified in paragraph (2) of Section 6.5.5.2, Operational Data Requirements, shall be updated as soon as practicable but no longer than 15 minutes after the change in Resource Status to ONHOLD.
AFTER:  After the QSE has determined the impact of the event, the QSE shall change the Resource Status to its updated status as soon as practicable but no longer than 60 consecutive minutes of being in the ONHOLD status. (3) Each QSE shall promptly inform ERCOT when the operating mode of the Automatic Volt…

### e33 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (2) · text copy line 8209 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …Limit (HSL) must be greater than or equal to the Low Sustained Limit (LSL) and the sum of the Resource-specific awards for Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS), Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), and Non-Spinning Reserve (Non-Spin). (2) 
QUOTE: For Non-Spin, the amount of Non-Spin awarded must be less than or equal to the HSL for Off-Line Generation Resources.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Insert paragraph (3) below upon system implementation and renumber accordingly:] | | | | (3) For Dispatchable Reliability Reserve S…

### e34 · `np-02-2024-11` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (historical edition, before Real-Time Co-optimization) (effective 2024-11-01, superseded)
locator: Section 2.1 (edition effective 2024-11-01, superseded), definition of High Ancillary Service Limit (HASL) · text copy line 1276

BEFORE: …, or mechanical device that implements Primary Frequency Response of generating units/generating facilities or other system elements. Governor Dead-Band The range of deviations of system frequency (+/-) that produces no Primary Frequency Response. H [Back to Top] High Ancillary Service Limit (HASL) 
QUOTE: A dynamically calculated MW upper limit on a Resource to reserve the part of the Resource's capacity committed for Ancillary Service, calculated as described in Section 6.5.7.2, Resource Limit Calculator.
AFTER:  HASL is also included in Section 5.7.4.1.1, Capacity Shortfall Ratio Share, Section 6.8.3.1.1, Capacity Shortfall Ratio Share for an LCAP Effective Period, and in the Reliability Unit Commitment (RUC) optimization but is not adjusted for Non-Frequency Responsive Capacity (NFRC) as in Section 6.5.7.…

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, Resource Limit Calculator, paragraph (1) · text copy line 1643 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.5.7.2 Resource Limit Calculator (1) 
QUOTE: ERCOT shall calculate the HDL and LDL within four seconds after a change of the Resource-specific attributes provided as part of the QSE's SCADA telemetry under Section 6.5.5.2, Operational Data Requirements.
AFTER:  The formulas described below define which Resource-specific attributes must be used to calculate each Resource limit. The Resource limits are used as inputs into both the SCED process and the Ancillary Service Capacity Monitor as described in Section 6.5.7.6, Load Frequency Control. These Resource …

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (2), variable table · text copy line 1660 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- HDL High Dispatch Limit. 
QUOTE: POWERTELEM Gross or net real power provided via telemetry. NORMRAMPDN 5-minute blended Normal Ramp Rate down, as telemetered by the QSE. NORMRAMPUP 5-minute blended Normal Ramp Rate up, as telemetered by the QSE.
AFTER:  HSLTELEM For IRRs qualified to provide an Ancillary Service and telemetering a non-zero capability to provide that Ancillary Service, and all IRRs within an IRR Group where any IRR within the IRR Group is qualified to provide an Ancillary Service and telemetering a non-zero capability to provide th…

### e37 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (2)(a), HDL for SCED-dispatchable Generation Resources · text copy line 1647 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …in Section 6.5.7.6, Load Frequency Control. These Resource limits help ensure that the deployments produced by the SCED and Load Frequency Control (LFC) processes will respect individual Resource physical limitations. (2) For SCED-dispatchable Generation Resources, HDL is calculated as follows: (a) 
QUOTE: If the telemetered Resource Status is SHUTDOWN, then HDL = POWERTELEM - (NORMRAMPDN * 5)
AFTER:  (b) If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria, other than SHUTDOWN, then HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM) ------------------------------------------------------------------------------…

### e38 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (3)(a), LDL for SCED-dispatchable Generation Resources · text copy line 1671 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (3) For SCED-dispatchable Generation Resources, LDL is calculated as follows: (a) 
QUOTE: If the telemetered Resource Status is STARTUP, then LDL = POWERTELEM + (NORMRAMPUP * 5)
AFTER:  (b) If the telemetered Resource Status is any status code specified in item (5)(b)(i) of Section 3.9.1 other than STARTUP, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM) ------------------------------------------------------------------------------------------ Variable Description -------…

### e39 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (3), variable table · text copy line 1686 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: …5), LSLTELEM) ------------------------------------------------------------------------------------------ Variable Description --------------------- -------------------------------------------------------------------- LDL Low Dispatch Limit. POWERTELEM Gross or net real power provided via telemetry. 
QUOTE: LSLTELEM Low Sustained Limit (LSL) provided via telemetry.
AFTER:  NORMRAMPDN 5-minute blended Normal Ramp Rate down, as telemetered by the QSE. NORMRAMPUP 5-minute blended Normal Ramp Rate up, as telemetered by the QSE. ------------------------------------------------------------------------------------------ (4) For ESRs, HDL is calculated as follows: (a) If the…

### e40 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.2, paragraph (5)(b), LDL for ESRs · text copy line 1725 · heading above: 6.5.7.2 Resource Limit Calculator

BEFORE: … the QSE. HSLTELEM High Sustained Limit (HSL) provided via telemetry - per Section 6.5.5.2. ------------------------------------------------------------------------------------------------ (5) For ESRs, LDL is calculated as follows: (a) If the telemetered Resource Status is ONHOLD, then LDL = 0 (b) 
QUOTE: If the telemetered Resource Status is ONTEST, then LDL = Max (Min (POWERTELEM, HSLTELEM), LSLTELEM)
AFTER:  (c) If the telemetered Resource Status is any status code specified in item (5)(b)(iv) of Section 3.9.1 other than OUT, or EMR, or EMRSWGR, or ONHOLD, or ONTEST, then LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM) --------------------------------------------------------------------------------…

### e41 · `ercot-nprr1290-prs-report` · tier 1 · NPRR1290 PRS Report (2025-08-13)
locator: NPRR1290 PRS report, summary of changes, item 6 (Section 6.5.5.2, HASL language) · text copy line 100

BEFORE: … the calculation, and explain what price will be used if the Ancillary Service Offer submitted is a partial offer. | | | | | | | | | | 6. Within Section 6.5.5.2, there is language describing how State of Charge (SOC) data will be used in calculating a Resource's High Ancillary Service Limit (HASL). 
QUOTE: As the concept of a HASL no longer exists with RTC+B, ERCOT is proposing that the applicable language be struck with RTC+B implementation.
AFTER:  | | | | | | | | | | 7. Under the Protocol language for RTC+B, "[t]he System Lambda used to determine LMPs from SCED Step 2 shall be capped at the effective [Value of Lost Load] (VOLL)." In discussions with ERCOT stakeholders, it has been identified that a Resource's QSE may face significant financi…

## Statements to check (new or changed since the last audit)

- **ERCOT context #3** (cites e34, e9): The superseded pre-RTC definition of HASL said it was calculated in Section 6.5.7.2, the section that now computes HDL and LDL (see the hasl-lasl topic). [e34][e9]
- **ERCOT context #4** (cites e14, e17, e18, e16): - IRRs: the QSE sets the HSL equal to the current net output capability, considering availability, weather and whether output is affected by a SCED Dispatch Instruction. [e14] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values from its short-term forecasts, and the QSE may override only to a value no higher than the most recent ERCOT forecast. [e17][e18] An IRR that is synchronized but cannot produce real power for lack of fuel telemeters On-Line status with HSL and LSL of 0. [e16]
- **ERCOT context #5** (cites e21): - Combined Cycle Resources: telemeter the HSL of the current operating configuration, and update it when providing ECRS to match performance limitations. [e21]
- **ERCOT context #6** (cites e20): - Combined Cycle Generation Resources that are Qualifying Facilities: among the power augmentation methods and configuration items a QSE provides to ERCOT is an LSL that represents the minimum energy available for Dispatch by SCED, based on minimum stable steam delivery to the thermal host plus a justifiable reliability margin. [e20]
- **ERCOT context #7** (cites e24, e23): - Quick Start Generation Resources: in the RUC study period a QSGR with COP status OFFQS is considered On-Line with LSL at zero MW; OFFQS is limited to qualified QSGRs. [e24][e23]
- **ERCOT context #8** (cites e22): - ONEMR Resources: the QSE may set HSL and LSL equal so SCED does not send Base Points that would move the unit. [e22]
- **ERCOT context #9** (cites e19): - Load Resources other than CLRs: the COP HSL should equal expected power consumption. [e19]
- **Key facts #5** (cites e25): - Each QSE provides a Seasonal HSL within the first 15 days of each Season for each Generation Resource over ten MW that will be operated that Season. [e25]
- **Key facts #6** (cites e26, e27): - ERCOT may run unannounced tests to verify the telemetered HSL is achievable; hydro, wind and PV are excluded and no test is performed during a Watch or EEA. [e26][e27]
- **Key facts #7** (cites e33): - Off-Line Non-Spin awards must not exceed the Resource's HSL. [e33]
- **Key facts #8** (cites e32): - After an ONHOLD status change the telemetered HSL must be updated as soon as practicable and within 15 minutes. [e32]
- **Formula #1** (cites e35, e36, e15, e39) FLAG number-not-in-quote: 7.2: The current Resource Limit Calculator (np-06 Section 6.5.7.2) turns telemetered output, ramp rate and the telemetered limits into dispatch limits; ERCOT must calculate the HDL and LDL within four seconds after a change in the telemetered Resource-specific attributes. [e35] The variables for Generation Resources are POWERTELEM (gross or net real power from telemetry), NORMRAMPUP and NORMRAMPDN (5-minute blended Normal Ramp Rates up and down as telemetered by the QSE), [e36] HSLTELEM (normally the HSL from telemetry, see below) [e15] and LSLTELEM (the LSL from telemetry). [e39] The Load Resource and ESR variable tables word some of these differently (for example, the Load Resource Normal Ramp Rates are not described as 5-minute blended).
- **Formula #2** (cites e37, e9): - SCED-dispatchable Generation Resource, High Dispatch Limit: in SHUTDOWN, HDL = POWERTELEM – (NORMRAMPDN * 5); [e37] for the status codes specified in Section 3.9.1 paragraph (5)(b)(i) other than SHUTDOWN, HDL = Min (POWERTELEM + (NORMRAMPUP * 5), HSLTELEM). [e9]
- **Formula #3** (cites e38, e31): - SCED-dispatchable Generation Resource, Low Dispatch Limit: in STARTUP, LDL = POWERTELEM + (NORMRAMPUP * 5); [e38] for the status codes specified in Section 3.9.1 paragraph (5)(b)(i) other than STARTUP, LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM). [e31]
- **Formula #4** (cites e30): - SCED-dispatchable Load Resource: HDL = Min (POWERTELEM + (NORMRAMPDN * 5), HSLTELEM), with NORMRAMPDN as written in the Load Resource paragraph. [e30]
- **Formula #5** (cites e28, e40, e29): - ESR: LDL = Max (POWERTELEM - (NORMRAMPDN * 5), LSLTELEM) for the ESR status codes other than OUT, EMR, EMRSWGR, ONHOLD or ONTEST; in ONHOLD, LDL = 0; [e28] in ONTEST, LDL = Max (Min (POWERTELEM, HSLTELEM), LSLTELEM). [e40][e29]
- **Formula #6** (cites e15): - For IRRs qualified for an Ancillary Service with a non-zero telemetered capability (and all IRRs in an IRR Group where any IRR is so qualified), HSLTELEM is the five-minute intra-hour forecast for the Resource; for all other Resources it is the HSL provided via telemetry. [e15]
- **Questions #2** (cites e26, e27): Because the HSL is QSE-reported, ERCOT may at its discretion run an unannounced test to verify the telemetered HSL is achievable. [e26] Hydro, wind and PV are excluded and ERCOT does not test during a Watch or EEA. [e27]
- **Questions #4** (cites e18): For the first 168 hours of the COP a QSE may override the forecast-based HSL but the submitted value must be less than or equal to the most recent ERCOT forecast for that Resource. [e18]
- **Questions #6** (cites e24, e23): For RUC, a QSGR with COP status OFFQS is considered On-Line with LSL at zero MW. [e24] OFFQS is the status for qualified QSGRs that are Off-Line but available for SCED deployment and to provide ECRS and Non-Spin. [e23]
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

