# Audit packet: HSL / LSL (hsl-lsl)

kind concept · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, High Sustained Limit (HSL) for a Generation Resource · text copy line 1192

BEFORE: …ter than zero, continuously updated in Real-Time. A positive HSL for an ESR describes the maximum sustained energy discharging capability of the ESR. A negative HSL for an ESR describes the minimum temporary energy charging capability of the ESR. High Sustained Limit (HSL) for a Generation Resource 
QUOTE: The limit established by the Qualified Scheduling Entity (QSE), continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource.
AFTER:  High Sustained Limit (HSL) for a Load Resource The limit calculated by ERCOT, using the Qualified Scheduling Entity (QSE)-established Maximum Power Consumption (MPC). Hotline The telecommunications capability of the ERCOT Wide Area Network (WAN) reserved for simultaneous communications with WAN Par…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, Low Sustained Limit (LSL) for a Generation Resource · text copy line 1481

BEFORE: …ater than zero, continuously updated in Real-Time. A negative LSL for an ESR describes the maximum sustained energy charging capability of the ESR. A positive LSL for an ESR describes the minimum temporary energy discharging capability of the ESR. Low Sustained Limit (LSL) for a Generation Resource 
QUOTE: The limit established by the Qualified Scheduling Entity (QSE), continuously updatable in Real-Time, that describes the minimum sustained energy production capability of a Resource.
AFTER:  Low Sustained Limit (LSL) for a Load Resource The limit calculated by ERCOT, using the Qualified Scheduling Entity (QSE)-established Low Power Consumption (LPC). Low System-Wide Offer Cap (LCAP) Effective Period The period in which the Day-Ahead System-Wide Offer Cap (DASWCAP) is set to the LCAP. M…

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

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, High Sustained Limit (HSL) for a Load Resource · text copy line 1196

BEFORE: …ility of the ESR. High Sustained Limit (HSL) for a Generation Resource The limit established by the Qualified Scheduling Entity (QSE), continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. High Sustained Limit (HSL) for a Load Resource 
QUOTE: The limit calculated by ERCOT, using the Qualified Scheduling Entity (QSE)-established Maximum Power Consumption (MPC).
AFTER:  Hotline The telecommunications capability of the ERCOT Wide Area Network (WAN) reserved for simultaneous communications with WAN Participants or their designated agents. Hourly Reliability Unit Commitment (HRUC) Any RUC executed after the DRUC. Hub A designated Settlement Point consisting of a Hub …

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

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.1.4.7, Reporting of Forced Derates, paragraph (4) · text copy line 780 · heading above: 3.1.4.7 Reporting of Forced Derates

BEFORE: …eria specified in paragraph (1) or (2) above and that is caused by ambient temperature or humidity, the Resource Entity or its designee must enter the Forced Derate into the Outage Scheduler as soon as practicable but no longer than eight hours after the beginning of the Force Derate or change. (4) 
QUOTE: The QSE must appropriately update the telemetered High Sustained Limit (HSL) and any applicable telemetry as specified in paragraph (2) of Section 6.5.5.2, Operational Data Requirements, based on the Forced Derate, as soon as practicable but no longer than 15 minutes after the beginning of a Forced Derate, if the Forced Derate is greater than ten MW and more than 5% of the Seasonal net maximum sustainable rating of the Resource and its expected or actual duration is greater than 30 minutes.
AFTER:  Alternatively for a Forced Derate, a QSE may use the ONHOLD process described in paragraph (2) of Section 6.5.5.1, Changes in Resource Status. (5) The QSE must update the COP as soon as practicable but no longer than 60 minutes after the beginning of a Forced Derate, if the Forced Derate is greater…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Operating Reserve Margin / PRC, subsection 2, Accounting for Reliability Actions and Conservative Operations · text copy line 3247

BEFORE: …RC may result from ERCOT's reliability actions, including the Reliability Unit Commitments (RUC) that increase real-time supplies and Emergency Reserve Service (ERS) resources. However, even after accounting for the effects of RUC and ERS, shortage conditions have declined substantially since 2022. 
QUOTE: In 2025, removing the aggregate HSL of RUC-committed resources would have increased the frequency of PRC below 3,000 MW to only 1.2 hours in 2025, which remains well below the average frequency observed from 2016 to 2021.
AFTER:  In addition, ERCOT has not deployed ERS system wide since September 6, 2023, which was the result of transmission-related contingencies rather than insufficient capacity. In short, the level of operating reserves and the infrequency of shortage conditions indicate that the system had surplus capaci…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.25, Submission of Gas Supply Disruption, paragraph (2) · text copy line 8703 · heading above: 3.25 Submission of Gas Supply Disruption

BEFORE: …termines that the Generation Resource's ability to supply electricity will be significantly limited by the gas supply disruption. Notification under paragraph (1) will include a description of the potential impact to the operation of the Generation Resource. (2) Notwithstanding paragraph (1) above, 
QUOTE: a QSE that represents a Generation Resource that relies on natural gas as the primary fuel source shall ensure that the High Sustained Limit (HSL) and Current Operating Plan (COP) accurately reflect the amount of output the Generation Resource can produce based on an amount of natural gas that the QSE expects it can procure after exploring all accessible and reasonable options.
AFTER:  (3) Notifications shall indicate which Generation Resources are reasonably expected to be impacted by the gas supply disruption based on the criteria above and the expected timeline of the disruption, based on available information. (4) Notifications to ERCOT shall be via email, sent to fuelsupply@…

## Statements to check

- **Definition #1** (cites e1, e2): The High Sustained Limit (HSL) of a Generation Resource is the limit set by its QSE, continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. [e1] The Low Sustained Limit (LSL) is the matching limit for the minimum sustained energy production capability. [e2]
- **How it works #1** (cites e1, e2, e5, e3, e4): The QSE sets and keeps updating the limits for a Generation Resource. [e1][e2] For a Load Resource, ERCOT calculates the HSL from the Maximum Power Consumption the QSE has established. [e5] For an Energy Storage Resource the limits are MW values that can be below, at, or above zero: a positive HSL is the maximum sustained discharge, a negative HSL is the minimum temporary charge, and a negative LSL is the maximum sustained charge. [e3][e4]
- **How it works #2** (cites e7, e8, e9): SCED works between the two limits. ERCOT checks that every On-Line Resource has either an Energy Offer Curve (or Energy Bid/Offer Curve) that prices it between its HSL and LSL, or an Output Schedule. [e7] The Resource limits feed both SCED and the Ancillary Service Capacity Monitor. [e8] For example, for a SCED-dispatchable Generation Resource in certain telemetered status codes (other than SHUTDOWN), the High Dispatch Limit is the lesser of telemetered output plus five minutes of normal ramp up or the telemetered HSL. [e9]
- **How it works #3** (cites e6): The HSL is also tied to reserve awards: it must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]
- **ERCOT context #1** (cites e11, e13): The HSL is set by the QSE, and the protocols set duties to keep it current. A QSE must update the telemetered HSL within 15 minutes of a Forced Derate that is over ten MW and more than 5% of the Resource's Seasonal net maximum sustainable rating and expected to last more than 30 minutes. [e11] A gas-fired Resource's QSE must keep its HSL and COP in line with the output it expects it can produce from the gas it can procure. [e13]
- **ERCOT context #2** (cites e10, e12): The HSL is also an input to the market power test: for the SCED CCT, the telemetered HSL is used for Resources with the specified telemetered status, and zero for all other Resources. [e10] The IMM uses HSL as well, removing the aggregate HSL of RUC-committed resources to show that, even without RUC, PRC below 3,000 MW would have occurred only 1.2 hours in 2025. [e12]
- **Key facts #1** (cites e1, e2, e5): - HSL and LSL are QSE-established and continuously updated for Generation Resources; ERCOT calculates a Load Resource's HSL using the QSE-established MPC. [e1][e2][e5]
- **Key facts #2** (cites e3, e4): - For an ESR a negative LSL is maximum sustained charging and a positive HSL is maximum sustained discharging. [e3][e4]
- **Key facts #3** (cites e6): - HSL must be greater than or equal to the LSL and the sum of the Resource-specific Ancillary Service awards. [e6]
- **Key facts #4** (cites e11): - A forced derate over ten MW and more than 5% of Seasonal net maximum sustainable rating, expected to last over 30 minutes, requires an HSL update within 15 minutes. [e11]
- **Key facts #5** (cites e7): - ERCOT must confirm each On-Line Resource has an offer curve between HSL and LSL, or an Output Schedule, an hour before the end of the Adjustment Period. [e7]
- **Common confusion #1** (cites e9, e3, e4): HSL is not the same as the High Dispatch Limit. The HSL is what the QSE reports as sustained capability, while the HDL is ERCOT's calculated, ramp-limited ceiling for the next SCED run, which is capped by the telemetered HSL. [e9] For batteries, a negative number is normal, not an error. [e3][e4]
- **Questions #2** (cites e8, e11): The Resource limits are inputs to SCED and the Ancillary Service Capacity Monitor and help ensure deployments respect Resources' physical limitations, so a stale HSL weakens that protection. [e8] The protocols require the update within 15 minutes for a derate over ten MW and more than 5% of the Seasonal net maximum sustainable rating that is expected to last more than 30 minutes. [e11]
- **Questions #4** (cites e3, e4): They are MW values that can be negative. A negative LSL is the maximum sustained charging capability and a positive HSL is the maximum sustained discharging capability. [e3][e4]
- **Questions #6** (cites e6): The HSL must be greater than or equal to the LSL and the sum of the Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e6]
- **Link to sced** (cites e7, e8, e9): used-in SCED (Security-Constrained Economic Dispatch): SCED dispatches each Resource between its LSL and HSL, and the limits feed the Resource limit calculator that SCED uses. [e7][e8][e9]
- **Link to ancillary-services** (cites e6): related Ancillary Services (AS): A Resource's HSL must be greater than or equal to the LSL and the sum of its Resource-specific Ancillary Service awards. [e6]
- **Link to energy-offer-curve** (cites e7): related Energy Offer Curve: The Energy Offer Curve must price the Resource between its HSL and LSL. [e7]
- **Link to energy-storage-resource** (cites e3, e4): related Energy Storage Resource (ESR): For an ESR a negative limit describes charging capability, with a negative HSL is the minimum temporary charging capability and a negative LSL the maximum sustained charging capability. [e3][e4]
- **Link to market-power-mitigation** (cites e10): used-in Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): For the SCED CCT, the telemetered HSL is used for Resources with specified telemetered statuses, and zero for all others. [e10]
- **Link to ruc** (cites e12): related RUC (Reliability Unit Commitment: DRUC/HRUC): The IMM removes the aggregate HSL of RUC-committed resources to test how much RUC lowered scarcity. [e12]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) HSL and LSL are the top and bottom of the range a unit says it can sustain, and SCED will only dispatch it inside that range. Keeping them accurate matters because they set both how much energy and how much reserve a unit can be asked for.

