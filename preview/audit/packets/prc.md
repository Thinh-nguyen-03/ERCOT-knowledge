# Audit packet: PRC (Physical Responsive Capability) (prc)

kind metric · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Physical Responsive Capability (PRC) · text copy line 2010

BEFORE: …eneration Resource Production Potential (PVGRPP) The generation in MWh per hour from a PVGR that could be generated from all available units of that Resource allocated from the 80% probability of exceedance of the Total ERCOT PhotoVoltaic Power Forecast (TEPPF). Physical Responsive Capability (PRC) 
QUOTE: A representation of the total amount of frequency responsive Resource capability On-Line in Real-Time.
AFTER:  Planned Outage (see Outage) Planning Reserve Margin (PRM) The net of total capacity for the Peak Load Season, less firm peak Load for the Peak Load Season, divided by the firm peak Load for the Peak Load Season (expressed as a percentage). +----------------------------------------------------------…

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC formula · text copy line 2735 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …===================================================================================+ +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: PRC = PRC1 + PRC2 + PRC3+ PRC4 + PRC5 + PRC6 + PRC7 + PRC8
AFTER:  +--------------------------------------------------------------------------------------------+ | [NPRR1029: Replace the formula "PRC" above with the following upon system implementation:] | | | | PRC = PRC1 + PRC2 + PRC3+ PRC4 + PRC5 + PRC6 + PRC7 + PRC8 + PRC9 | +==================================…

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC variable table · text copy line 2777 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor
FLAG pending-box: | | | | [NPRR1244: Replace the description above with the following upon system implementation:] | |
BEFORE: … of providing FFR | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | PRC8 | MW | 
QUOTE: ESR capacity capable of providing Primary Frequency Response
AFTER:  | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | +----------------------------…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (4) · text copy line 2811 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …---------------------------------------+ (2) The Load Resource Reserve Discount Factors (RDFs) for CLRs (LRDF_1 and LRDF_2) shall be subject to review and approval by TAC. (3) The RDFs used in the PRC calculation shall be posted to the ERCOT website no later than three Business Days after approval. 
QUOTE: (4) ERCOT shall display on the ERCOT website and update every ten seconds a rolling view of the ERCOT-wide PRC, as defined in paragraph (1)(p) above, for the current Operating Day.
AFTER:  6.5.7.6 Load Frequency Control (1) The function of LFC is to maintain system frequency without a cost optimization function. ERCOT shall execute LFC every four seconds to reduce system frequency deviations from scheduled frequency by providing a control signal to each QSE that represents Resources …

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (1)(f) · text copy line 3445 · heading above: 6.5.9.4.1 General Procedures Prior to EEA Operations

BEFORE: …or their agent determines in their sole discretion that the distribution voltage reduction would adversely affect reliability, the voltage reduction measure may be reduced, modified, or otherwise changed from maximum performance to a level of exercise that has no negative impact to reliability; and 
QUOTE: (f) ERCOT shall use the PRC and system frequency to determine the appropriate Emergency Notice and EEA levels.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.1, paragraph (3) · text copy line 3489 · heading above: 6.5.9.4.1 General Procedures Prior to EEA Operations

BEFORE: …me within the ERCOT XML message shall represent the official notice of ERS-10 and ERS-30 recall. (d) Upon release, an ERS Resource shall return to a condition such that it is capable of meeting its ERS performance requirements as soon as practical, but no later than ten hours following the release. 
QUOTE: (3) When a Watch is issued for PRC below 3,000 MW and ERCOT expects system conditions to deteriorate to the extent that an EEA Level 2 or 3 may be experienced, ERCOT shall evaluate constraints active in SCED and determine which constraints have the potential to limit generation output.
AFTER:  (a) Upon identification of such constraints, ERCOT shall coordinate with the TSPs that own or operate the overloaded Transmission Facilities associated with those constraints, as well as the Resource Entities whose generation output may be limited, to determine whether: +---------------------------…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, EEA Levels, paragraph (3)(b) · text copy line 3598 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (b) Direct all TOs to shed firm Load, in 100 MW blocks, distributed as documented in the Operating Guides in order to maintain a steady state system frequency at a minimum of 59.91 Hz and to recover 1,500 MW of PRC within 30 minutes.
AFTER:  (i) TOs and TDSPs may: (A) Manually shed Load connected to under-frequency relays and/or under-voltage relays pursuant to an ERCOT Load shed directive issued during EEA Level 3 so long as the TO has determined that system conditions warrant utilizing Load connected to under-frequency and/or under-v…

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (2)(c) · text copy line 8058 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …======================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW.
AFTER:  (3) The ERCOT Board shall review and recommend approval of ERCOT's methodology for determining the minimum Ancillary Service requirements, any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin), the minimum …

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, EEA Levels, paragraph (1) · text copy line 3522 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …s detailed in this Section shall be supplemental to the development and maintenance of CMPs as otherwise directed by the Protocols or Operating Guides. (4) When a Watch is issued for PRC below 3,000 MW, QSEs shall suspend any ongoing ERCOT-required Resource performance testing. 6.5.9.4.2 EEA Levels 
QUOTE: (1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:
AFTER:  (a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW: (i) Request available Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Ins…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraphs (2)-(3), Reserve Discount Factors · text copy line 2807 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: … of FRC portion of the Resource | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (2) The Load Resource Reserve Discount Factors (RDFs) for CLRs (LRDF_1 and LRDF_2) shall be subject to review and approval by TAC. (3) The RDFs used in the PRC calculation shall be posted to the ERCOT website no later than three Business Days after approval.
AFTER:  (4) ERCOT shall display on the ERCOT website and update every ten seconds a rolling view of the ERCOT-wide PRC, as defined in paragraph (1)(p) above, for the current Operating Day. 6.5.7.6 Load Frequency Control (1) The function of LFC is to maintain system frequency without a cost optimization fun…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.D, AS Methodology, bullet on one-in-ten standard · text copy line 4470

BEFORE: …to the excessive procurement volumes in more detail. 2. The AS Methodology is Misaligned with Reliability Outcomes The following list describes the parameters used in ERCOT's 2026 AS Methodology for ECRS and NSRS and each parameter's impact on the procurement targets for these ancillary services: • 
QUOTE: Setting operating reserve targets to meet a one-in-ten standard for the probability of entering a "Watch," defined as reserves dropping below 3,000 MW, rather than for the probability of firm load shed, defined as reserves dropping below 1,500 MW.
AFTER:  This parameter increases the AS Plan target level by approximately 43%. • Assessing the operational risk that NSRS is meant to manage based on the six hour-ahead forecast error for demand and generation from intermittent renewables. This parameter inflates the target level of the AS Plan by 57% mor…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, G. RDPA (p. A-10) · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
AFTER:  The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. The RDPA process now produces separate price adders for energy and each AS product. The real-time market…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1), lead-in · text copy line 2514 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: … greater deviation from scheduled frequency, and a Resource is ramping to a SCED Base Point in a manner directionally opposite to system frequency, the ramping component of the Resource's UDSP will be temporarily held constant and flagged accordingly. 6.5.7.5 Ancillary Services Capacity Monitor (1) 
QUOTE: Every ten seconds, ERCOT shall calculate the following and provide Real-Time summaries to ERCOT Operators and all Market Participants using ICCP and postings on the ERCOT website showing the Real-Time total system amount of:
AFTER:  (a) RRS capability from: (i) Generation Resources and ESRs in the form of PFR that can be sustained for the SCED duration requirements of PFR; (ii) Load Resources, excluding CLRs, capable of responding via under-frequency relay; (iii) CLRs in the form of PFR; (iv) Resources, other than ESRs, capabl…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC1 · text copy line 2686 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …esources with a telemetered Resource Status of EMR; (n) Aggregate telemetered HSL capacity for Resources with a telemetered Resource Status of OUT; (o) Aggregate net telemetered consumption for Resources with a telemetered Resource Status of OUTL; and (p) The ERCOT-wide PRC calculated as follows: []
QUOTE: PRC1 = Min(Max((RDF*FRCHL - FRCO)_(i) , 0.0) , 0.2*RDF*FRCHL_(i)), where the included On-Line Generation Resources do not include WGRs, nuclear Generation Resources, or Generation Resources with an output less than or equal to 95% of telemetered LSL or with a telemetered status of ONTEST, ONHOLD, STARTUP, or SHUTDOWN.
AFTER:  PRC2 = Min(Max((RDF_(W)*HSL - Actual Net Telemetered Output)_(i) , 0.0) , 0.2*RDF_(W)*HSL_(i)), where the included On-Line WGRs only include WGRs that are Primary Frequency Response-capable. []PRC3 = ((Synchronous condenser output)_(i) as qualified by item (8) of Operating Guide Section 2.3.1.2, Ad…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC2 · text copy line 2694 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …FRCHL - FRCO)_(i) , 0.0) , 0.2*RDF*FRCHL_(i)), where the included On-Line Generation Resources do not include WGRs, nuclear Generation Resources, or Generation Resources with an output less than or equal to 95% of telemetered LSL or with a telemetered status of ONTEST, ONHOLD, STARTUP, or SHUTDOWN. 
QUOTE: PRC2 = Min(Max((RDF_(W)*HSL - Actual Net Telemetered Output)_(i) , 0.0) , 0.2*RDF_(W)*HSL_(i)), where the included On-Line WGRs only include WGRs that are Primary Frequency Response-capable.
AFTER:  []PRC3 = ((Synchronous condenser output)_(i) as qualified by item (8) of Operating Guide Section 2.3.1.2, Additional Operational Details for Responsive Reserve and ERCOT Contingency Reserve Service Providers)) PRC4 = (Min(Max((Actual Net Telemetered Consumption - LPC), 0.0), ECRS and RRS Ancillary …

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC5 · text copy line 2702 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …nd ERCOT Contingency Reserve Service Providers)) PRC4 = (Min(Max((Actual Net Telemetered Consumption - LPC), 0.0), ECRS and RRS Ancillary Service Resource award * 1.5) from all Load Resources controlled by high-set under-frequency relays with an ECRS and/or RRS Ancillary Service Resource award)_(i) 
QUOTE: PRC5 = Min(Max((LRDF_1*Actual Net Telemetered Consumption - LPC)_(i), 0.0), (0.2 * LRDF_1 * Actual Net Telemetered Consumption)) from all CLRs active in SCED with an Ancillary Service Resource award
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1244: Replace the formula "PRC5" above wi…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC7 · text copy line 2720 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …==========================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: PRC7 = (Capacity from Resources capable of providing FFR)_(i)
AFTER:  PRC8 = Min(X% of MDRR, HSL-Net MW, the capacity that can be sustained for 45 minutes per the State of Charge Excludes ESR capacity used to provide FFR. +--------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC8 · text copy line 2722 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ PRC7 = (Capacity from Resources capable of providing FFR)_(i) 
QUOTE: PRC8 = Min(X% of MDRR, HSL-Net MW, the capacity that can be sustained for 45 minutes per the State of Charge Excludes ESR capacity used to provide FFR.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1029: Insert the formula "PRC9" below upon system implementation:] | | | | PR…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(a), EEA Level 1 steps · text copy line 3524 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …spend any ongoing ERCOT-required Resource performance testing. 6.5.9.4.2 EEA Levels (1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1: 
QUOTE: (a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW:
AFTER:  (i) Request available Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Instructions, and request available ESRs that can perform within the expected timeframe of the emergency to come On-Line through D…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.1, paragraph (4) · text copy line 3518 · heading above: 6.5.9.4.1 General Procedures Prior to EEA Operations

BEFORE: …ircuits that are part of the double circuit in the preceding 48 hours, or fire in progress in the right of way of the double circuit. (c) The actions detailed in this Section shall be supplemental to the development and maintenance of CMPs as otherwise directed by the Protocols or Operating Guides. 
QUOTE: (4) When a Watch is issued for PRC below 3,000 MW, QSEs shall suspend any ongoing ERCOT-required Resource performance testing.
AFTER:  6.5.9.4.2 EEA Levels (1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1: (a) ERCOT shall take the following steps to maintain steady st…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2), EEA Level 2 · text copy line 3561 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …==============================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (2) ERCOT may declare an EEA Level 2 when the clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2:
AFTER:  (a) In addition to the measures associated with EEA Level 1, ERCOT shall take the following steps to maintain steady state system frequency at a minimum of 59.91 Hz and maintain PRC above 1,500 MW: (i) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service dist…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (3), EEA Level 3 lead-in · text copy line 3587 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …age level BLTs, which transfer Load from the ERCOT Control Area to non-ERCOT Control Areas in accordance with BLTs as defined in the Operating Guides. (b) Confidentiality requirements regarding transmission operations and system capacity information will be lifted, as needed to restore reliability. 
QUOTE: (3) ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes.
AFTER:  Upon declaration of an EEA Level 3, ERCOT shall take any of the following measures as necessary to recover frequency or PRC to the minimum required levels: (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwi…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4, paragraph (10) · text copy line 3427 · heading above: 6.5.9.4 Energy Emergency Alert

BEFORE: …by ERCOT and modified annually as required. (10) During EEA Level 2 or 3, for those constraints that meet the criteria identified in paragraph (3)(a) of Section 6.5.9.4.1, General Procedures Prior to EEA Operations, ERCOT may control the post-contingency flow to within the 15-Minute Rating in SCED. 
QUOTE: After PRC is restored to at least 3,000 MW or the Emergency Condition has ended, whichever is later, and ERCOT has determined that system conditions have improved such that the chance of re-entering into an EEA Level 2 or 3 is low, ERCOT shall restore control to the post-contingency flow to within the Emergency Rating for these constraints that utilized the 15-Minute Rating in SCED.
AFTER:  (11) During EEA Level 2 or 3, for those constraints that meet the criteria identified in paragraph (3)(b) of Section 6.5.9.4.1, ERCOT shall continue to enforce constraints associated with double-circuit contingencies throughout an EEA if the double-circuit failures are determined to be at high risk…

### e24 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026) · text copy line 75

BEFORE: …he risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria. 
QUOTE: The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load - wind - solar) forecast and conventional resource availability.
AFTER:  The hourly requirement for ECRS and Non-Spin will be derived by using the 30 minute ahead and 6 hour ahead historic net load forecast error and the combined ECRS and Non-Spin requirements from the optimization. ECRS requirement may be increased further to account for the capacity needed to recover …

### e25 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board presentation (September 2026), The Target Reserve Level (Watch vs. EEA1), Bottom line · text copy line 289

BEFORE: …. *Since Winter 2020-2021, installed solar has roughly doubled, battery capacity has roughly quadrupled, and load has set new records. Given this alone, comparisons to AS or RUC levels from before Winter 2020-2021 are not meaningful." 6 The Target Reserve Level (Watch vs. EEA1) PUBLIC BOTTOM LINE • 
QUOTE: Of the three parameters, the target reserve level (ZZ) is the one ERCOT is proposing to change for 2027 - moving from a criterion of avoiding a Watch (3,000 MW) toward avoiding EEA1 (2,500 MW) based on feedback during last year's approval.
AFTER:  • This is a measured change: it moves quantities and costs only marginally today, because the Reg Up + RRS restoration floor - not the target level - drives most hours. It may open an opportunity to design the ASDCs more around the AS requirement than the legacy threshold. WHY • The target reserve …

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), variable table (MCL) · text copy line 2382 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------------------------------------ Variable Unit Definition -------------- ------ ---------------------------------------------------------------------------------------------------------------------------------------------------------- MCL MW 
QUOTE: Minimum Contingency Level - the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW.
AFTER:  RUREQ MW Total capacity of Reg-Up in the Ancillary Service Plan RRSREQ MW Total capacity of RRS in the Ancillary Service Plan ECRSREQ MW Total capacity of ECRS in the Ancillary Service Plan RUPCT % Fixed percentage of Reg-Up included in the MCL RRSPCTMAX % Maximum RRS percentage included in the MCL…

### e27 · `ercot-mora-2027-01` · tier 2 · Monthly Outlook for Resource Adequacy (MORA), January 2027 (posted 2026-11-06)
locator: Methodology notes, CAFOR reserve thresholds (January 2027 MORA) · text copy line 16319

BEFORE: …Pre-EEA Resources if CAFOR < 3,000 MW + EEA Resources if CAFOR < 2,500 MW Note that winter storm scenarios also account for incremental unplanned wind outages due to severe storm events. The synthetic wind profiles used in the Probabilistic Reserve Risk Model (PRRM) account for normal availability. 
QUOTE: The MORA uses CAFOR reserve thresholds of 2,500 and 1,500 MW to indicate, respectively, the risk that an Energy Emergency Alert and controlled outages may be triggered during the time of the forecasted monthly peak load day. These threshold levels are intended to be proxies to the 2,500 and 1,500 MW Physical Responsive Capability (PRC) thresholds. While PRC is a real-time capability measure for Resources that can quickly respond to system disturbance, ERCOT believes that the 2,500 and 1,500 MW CAFOR thresholds are appropriate indicators for the risk of Emergency Conditions given the uncertainties in predicting system conditions months in advance.
AFTER:  Wind and Solar Capacity Values Hourly capacity contributions for specific wind and solar capacity values come from hourly synthetic generation profiles prepared for existing sites and planned sites expected to generate power by the beginning of the month. Every site has multiple profiles representi…

### e28 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Frequency Responsive Capacity (FRC) · text copy line 1099

BEFORE: …ing unit/generating facility, Direct Current Tie (DC Tie), and/or firm load pre-perturbation megawatt value to post-perturbation megawatt value absolute deviation greater than 550 MW (the 550 MW value may be adjusted by ERCOT to capture 30 to 40 events per year). Frequency Responsive Capacity (FRC) 
QUOTE: The telemetered portion of the total MW output of a Generation Resource or Energy Storage Resource (ESR) that represents the fraction of the capacity that is capable of providing Primary Frequency Response.
AFTER:  Capacity not capable of providing Primary Frequency Response includes, but may not be limited to, capacity from duct firing, auxiliary boilers, and other methods that do not immediately respond, arrest, or stabilize frequency excursions following a disturbance without secondary frequency response o…

### e29 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Maximum Droop Response Range (MDRR) · text copy line 1612

BEFORE: …aken and is used in Mass Transition transactions. Master Qualified Scheduling Entity (QSE) (see Qualified Scheduling Entity (QSE)) Maximum Droop Response Range (MDRR) This value reflects the total capability of a Resource to respond to system frequency deviations based on its droop characteristics. 
QUOTE: The MDRR for a Generation Resource is its High Sustained Limit (HSL), for a Controllable Load Resource (CLR) is its Maximum Power Consumption (MPC), and for an Energy Storage Resource (ESR) is the difference between its HSL and Low Sustained Limit (LSL).
AFTER:  This capability will be used to determine the maximum Responsive Reserve (RRS) using Primary Frequency Response that a Resource can be awarded in Day-Ahead Market (DAM) or Real-Time. Maximum Power Consumption (MPC) For a Load Resource, the limit established by the QSE, continuously updated in Real-…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), variable table (X) · text copy line 2792 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor
FLAG pending-box: | | [NPRR1029: Insert the variable "PRC9" below upon system implementation:] | | | |
BEFORE: …e Capability | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | X | Percentage | 
QUOTE: Percent threshold based on the Governor droop setting of ESRs
AFTER:  | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | RDF | | The currently approve…

### e31 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), pending box [NPRR1029: Insert the formula PRC9 ...] · text copy line 2729 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor
FLAG pending-box: | [NPRR1029: Insert the formula "PRC9" below upon system implementation:] |
BEFORE: …R. +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1029: Insert the formula "PRC9" below upon system implementation:] | | | | 
QUOTE: PRC9 = Min(X% of MDRR, HSL-Net MW, the sum of the MW headroom available from the intermittent renewable generation component and the MW capacity that can be sustained for 45 minutes per the ESS State of Charge)
AFTER:  | | | | Excludes DC-Coupled Resource capacity used to provide FFR. | +====================================================================================================================================================================================================================+ +--------------…

### e32 · `imm-som-tac-2026-07` · tier 2 · IMM State of the Market presentation to TAC (2026-08-06)
locator: Slide 9, ERCOT has argued that PRC is an inappropriate metric for assessing reliability · text copy line 380

BEFORE: …n-limited, and so additional reserves are needed to ensure the reliability of the grid. That said, if these risks were substantial under prevailing conditions, they would manifest through shortage conditions. Instead, the frequency of shortage conditions has dropped precipitously in recent years. - 
QUOTE: PRC includes capacity from out-of-market reliability actions
AFTER:  After adjusting for the supply and demand impacts of Reliability Unit Commitments and Emergency Reserve Service resources, the adjusted frequency of shortage conditions still indicated that the system had a surplus of capacity in 2025 © 2025 Potomac Economics 9 Despite the supply surplus, ERCOT con…

### e33 · `imm-som-tac-2026-07` · tier 2 · IMM State of the Market presentation to TAC (2026-08-06)
locator: Slide 9, ERCOT has argued that PRC is an inappropriate metric for assessing reliability · text copy line 371

BEFORE: …verage PRC Minimum Hours of PRC <= 6.5 GW Hours of PRC <= 3 GW 10 10 8 8 6 6 4 4 2 2 0 2016 © 2025 Potomac Economics 2017 2018 2019 2020 2021 2022 2023 2024 2025 Hours (1000s) Physical Responsive Capability (GW) 12 0 8 ERCOT has argued that PRC is an inappropriate metric for assessing reliability • 
QUOTE: PRC measures the instantaneous volume of reserves available to the grid in the event of a contingency.
AFTER:  Some arguments ERCOT has made for why it isn't a sufficient measure of reliability: - Increased Reliability Risks due to Renewables and Batteries Renewables are intermittent, and batteries are duration-limited, and so additional reserves are needed to ensure the reliability of the grid. That said, …

### e34 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC4 · text copy line 2700 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: … the included On-Line WGRs only include WGRs that are Primary Frequency Response-capable. []PRC3 = ((Synchronous condenser output)_(i) as qualified by item (8) of Operating Guide Section 2.3.1.2, Additional Operational Details for Responsive Reserve and ERCOT Contingency Reserve Service Providers)) 
QUOTE: PRC4 = (Min(Max((Actual Net Telemetered Consumption - LPC), 0.0), ECRS and RRS Ancillary Service Resource award * 1.5) from all Load Resources controlled by high-set under-frequency relays with an ECRS and/or RRS Ancillary Service Resource award)_(i)
AFTER:  PRC5 = Min(Max((LRDF_1*Actual Net Telemetered Consumption - LPC)_(i), 0.0), (0.2 * LRDF_1 * Actual Net Telemetered Consumption)) from all CLRs active in SCED with an Ancillary Service Resource award +---------------------------------------------------------------------------------------------------…

## Statements to check

- **Definition #1** (cites e1): Physical Responsive Capability (PRC) is a representation of the total amount of frequency responsive resource capability on-line in Real-Time. [e1]
- **How it works #1** (cites e13, e2, e3, e10): Every ten seconds ERCOT calculates real-time system totals for ancillary service capability and awards, and the ERCOT-wide PRC is one of the items in that list. [e13] PRC is the sum of eight components, one of which is ESR capacity capable of providing primary frequency response. [e2][e3] Reserve Discount Factors are used in the calculation, and the Load Resource factors for CLRs are subject to TAC review and approval. [e10]
- **How it works #2** (cites e4): ERCOT displays the rolling ERCOT-wide PRC on its website and updates it every ten seconds for the current Operating Day. [e4]
- **Formula #1** (cites e2, e14, e28) FLAG number-not-in-quote: 6.5, 7.5: The Protocols give the PRC formula in Section 6.5.7.5, paragraph (1)(p). The text below describes each component from the variable list and the quoted formulas; in these formulas RDF is the currently approved Reserve Discount Factor, RDF_W the one for wind, LRDF_1 and LRDF_2 the Load Resource factors for CLRs with and without an ancillary service award, FRCHL the telemetered high limit of the frequency responsive capacity (FRC), and FRCO its telemetered output. FRC is the telemetered portion of a Generation Resource's or ESR's output that represents capacity capable of providing Primary Frequency Response. [e2][e14][e28]
- **Formula #2** (cites e14) FLAG number-not-in-quote: 20%: - PRC1 is on-line generation: for each included resource, the discounted FRC high limit minus the output of the FRC portion, floored at zero and capped at 20% of the discounted FRC high limit. The included resources exclude WGRs, nuclear units, units with output at or below 95% of telemetered LSL, and units with a telemetered status of ONTEST, ONHOLD, STARTUP or SHUTDOWN. [e14]
- **Formula #3** (cites e15) FLAG number-not-in-quote: 20%: - PRC2 is on-line wind: the discounted HSL minus actual net output, floored at zero and capped at 20% of the discounted HSL, counting only WGRs that are Primary Frequency Response-capable. [e15]
- **Formula #4** (cites e34): - PRC4 is Load Resources controlled by high-set under-frequency relays with an ECRS and/or RRS award: consumption above the low power consumption (LPC), capped at 1.5 times the award. [e34]
- **Formula #5** (cites e16) FLAG number-not-in-quote: 20%: - PRC5 is CLRs active in SCED with an ancillary service award: discounted consumption minus LPC, floored at zero and capped at 20% of the discounted consumption. [e16]
- **Formula #6** (cites e17): - PRC7 is capacity from resources capable of Fast Frequency Response (FFR). [e17]
- **Formula #7** (cites e18, e30, e29): - PRC8 is ESR capacity: the minimum of X% of the Maximum Droop Response Range (MDRR), the HSL-net MW, and the capacity that can be sustained for 45 minutes per the State of Charge, excluding ESR capacity used to provide FFR. [e18] X is a percentage threshold based on the Governor droop setting of ESRs. [e30] For an ESR the MDRR is the difference between its HSL and LSL. [e29]
- **Formula #8** (cites e31): - Pending, not in force: NPRR1029 would add a PRC9 term for DC-coupled resources, again using a 45-minute State of Charge limit. [e31]
- **ERCOT context #1** (cites e5, e6, e9, e7, e11): PRC is the measure the Protocols use to decide when conditions are an emergency: ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA level. [e5] A Watch is tied to PRC below 3,000 MW, EEA Level 1 is declared when PRC falls below 2,500 MW and is not projected to recover within 30 minutes, and at EEA Level 3 firm load shed is directed to recover 1,500 MW of PRC. [e6][e9][e7] The IMM uses the same lines when it speaks of "reserves": a Watch is reserves below 3,000 MW and firm load shed risk is reserves below 1,500 MW. [e11]
- **ERCOT context #2** (cites e20, e9, e19, e21, e22): The full ladder is: Watch below 3,000 MW (when a Watch is issued for PRC below 3,000 MW, QSEs suspend ongoing ERCOT-required Resource performance testing); Level 1 below 2,500 MW, with steps taken to keep PRC above 2,000 MW; Level 2 below 2,000 MW and not projected to recover within 30 minutes; and Level 3 when PRC cannot be maintained above 1,500 MW. [e20][e9][e19][e21][e22] Frequency can trigger levels too: Level 2 may be declared at clock-minute average frequency below 59.91 Hz for 15 consecutive minutes, and Level 3 at the same frequency for 20 minutes or at steady-state frequency below 59.8 Hz. [e21][e22]
- **ERCOT context #3** (cites e23): When the emergency passes, ERCOT restores SCED's normal post-contingency limits only after PRC is back to at least 3,000 MW or the Emergency Condition has ended, whichever is later, and ERCOT judges the chance of re-entering Level 2 or 3 to be low. [e23]
- **ERCOT context #4** (cites e24, e25, e26, e27) FLAG number-not-in-quote: 2026: The same numbers shape planning. ERCOT's AS Methodology effective 1 January 2026 sizes ECRS and Non-Spin so that there is a 1 in 10-year probability of reserves dropping below the sum of procured Reg-Up and RRS or the Watch threshold (PRC = 3,000 MW), whichever is higher. [e24] For 2027 ERCOT staff proposed moving the target reserve level from avoiding a Watch (3,000 MW) toward avoiding EEA1 (2,500 MW), as presented to the Board in September 2026. [e25] The ASDC disaggregation defines a Minimum Contingency Level of 3,000 MW. [e26] The MORA uses CAFOR thresholds of 2,500 and 1,500 MW as proxies for the PRC thresholds, because PRC is a real-time measure that is hard to forecast months ahead. [e27]
- **ERCOT context #5** (cites e33, e32) FLAG number-not-in-quote: 2026: The IMM, in an August 2026 presentation to TAC, summarised arguments ERCOT has made against PRC as a reliability metric, and itself notes that PRC includes capacity from out-of-market reliability actions. [e33][e32]
- **Key facts #1** (cites e1): - PRC is the total frequency-responsive resource capability on-line in Real-Time. [e1]
- **Key facts #2** (cites e2, e3): - The ERCOT-wide PRC is a sum of eight components, including ESR capacity capable of providing primary frequency response. [e2][e3]
- **Key facts #3** (cites e4): - ERCOT posts a rolling PRC view updated every ten seconds. [e4]
- **Key facts #4** (cites e9): - EEA Level 1: PRC below 2,500 MW and not projected to recover within 30 minutes. [e9]
- **Key facts #5** (cites e21): - EEA Level 2: PRC below 2,000 MW and not projected to recover within 30 minutes. [e21]
- **Key facts #6** (cites e22): - EEA Level 3: PRC cannot be maintained above 1,500 MW. [e22]
- **Key facts #7** (cites e6, e7) FLAG number-not-in-quote: 6.5, 9.4: - Watch for PRC below 3,000 MW (Section 6.5.9.4.1); load shed at Level 3 aims to recover 1,500 MW of PRC. [e6][e7]
- **Key facts #8** (cites e18): - PRC8 counts ESR capacity only to the extent it can be sustained for 45 minutes per State of Charge. [e18]
- **Key facts #9** (cites e14, e15, e16) FLAG number-not-in-quote: 20%: - PRC1, PRC2 and PRC5 are each capped at 20% of the discounted capability. [e14][e15][e16]
- **Say it like this #1** (cites e1, e6, e9, e21, e22): PRC is ERCOT's measure of the total frequency-responsive Resource capability on-line in Real-Time. [e1] The emergency steps, from a Watch at 3,000 MW through EEA Levels at 2,500, 2,000 and 1,500 MW, are keyed to that number. [e1][e6][e9][e21][e22]
- **Common confusion #1** (cites e1, e10, e14, e27): Do not read PRC as a plain count of total capacity. The Protocols define it as frequency responsive Resource capability on-line in Real-Time, discount factors apply and caps limit several components. [e1][e10][e14] PRC is also not the same as the MORA's CAFOR, which is a forecast proxy for the same thresholds. [e27]
- **Questions #2** (cites e6, e9, e21, e22, e7): A Watch can be issued for PRC below 3,000 MW, EEA Level 1 is declared for PRC below 2,500 MW and not projected to recover within 30 minutes, Level 2 below 2,000 MW on the same test, and Level 3 when PRC cannot be maintained above 1,500 MW, where firm load shed aims to recover 1,500 MW of PRC. [e6][e9][e21][e22][e7]
- **Questions #4** (cites e4): On the ERCOT website, as a rolling ERCOT-wide view updated every ten seconds. [e4]
- **Questions #6** (cites e3, e18): ESR capacity capable of providing primary frequency response is a PRC component, limited by the lesser of X% of its MDRR, its HSL-net MW and the capacity that can be sustained for 45 minutes per State of Charge. [e3][e18]
- **Questions #8** (cites e15) FLAG number-not-in-quote: 20%: (Guidance on a sourced formula.) The PRC2 term floors the discounted headroom at zero and caps it at 20% of the discounted HSL, and counts only wind units capable of Primary Frequency Response, so wind adds only a limited slice of its output headroom. [e15]
- **Questions #10** (cites e9, e22): Levels are set by PRC, not only by frequency: ERCOT declares Level 1 at PRC below 2,500 MW without recovery in 30 minutes, and Level 3 when PRC cannot be maintained above 1,500 MW, regardless of the 59.91 Hz criteria, which are alternative triggers. [e9][e22]
- **Link to eea** (cites e5): determines EEA (Energy Emergency Alert) Levels: PRC and system frequency determine the Emergency Notice and EEA level. [e5]
- **Link to operating-notices** (cites e6): determines Operating Notices (OCN, Advisory, Watch, Emergency): A Watch can be issued for PRC below 3,000 MW. [e6]
- **Link to ordc** (cites e12): related ORDC (Operating Reserve Demand Curve): See the ORDC topic for how reserve levels were turned into price adders before the ORDC adder was replaced by a set of ASDCs. [e12]
- **Link to rrs** (cites e8) FLAG number-not-in-quote: 3.16: related RRS (Responsive Reserve Service): Section 3.16 sets a minimum capacity for RRS provided using Primary Frequency Response. [e8]
- **Link to energy-storage-resource** (cites e3): related Energy Storage Resource (ESR): ESR capacity capable of primary frequency response counts toward PRC. [e3]
- **Link to load-shed** (cites e7): related Load Shed / Rotating Outages: At EEA Level 3 ERCOT directs firm load shed to recover 1,500 MW of PRC. [e7]
- **Link to asdc** (cites e26): related ASDC (Ancillary Service Demand Curves): The ASDC disaggregation sets a Minimum Contingency Level of 3,000 MW of reserves, the same number as the Watch threshold. [e26]
- **Link to mora-report** (cites e27): related MORA Report: The MORA uses CAFOR thresholds of 2,500 and 1,500 MW as proxies for the PRC thresholds. [e27]
- **Link to ancillary-services** (cites e24): related Ancillary Services (AS): The AS Methodology sizes ECRS and Non-Spin against a 1-in-10 chance of reserves falling below the Watch threshold of PRC = 3,000 MW. [e24]
- **Link to ecrs** (cites e21, e19): related ECRS (ERCOT Contingency Reserve Service): At EEA Level 2, ERCOT instructs QSEs to deploy ECRS and RRS from Load Resources, and RRS and ECRS from ONSC Generation Resources can be deployed manually at Level 1. [e21][e19]
