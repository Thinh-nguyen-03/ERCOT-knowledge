# Audit packet: EEA (Energy Emergency Alert) Levels (eea)

kind rule · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Energy Emergency Alert (EEA) · text copy line 874

BEFORE: …n Energy Storage Resource (ESR) to buy and sell energy at a Settlement Point in the form of a single monotonically non-decreasing price curve that covers both the charging and discharging MW range and provides a bid price for charging and an offer price for discharging. Energy Emergency Alert (EEA) 
QUOTE: An orderly, predetermined procedure for maximizing use of available Resources and, only if necessary, curtailing load during an Emergency Condition while providing for the maximum possible continuity of service and maintaining the integrity of the ERCOT System.
AFTER:  Energy Imbalance Service The difference between the amount of energy cleared in the Day-Ahead Market (DAM) and through trades and the amount of delivery of that energy in the Real-Time Market (RTM). Energy Offer Curve A proposal to sell energy at a Settlement Point at a monotonically non-decreasing…

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2)(a)(iii) · text copy line 3569 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …dversely affect reliability, the voltage reduction measure may be reduced, modified, or otherwise changed from maximum performance to a level of exercise that has no negative impact to reliability. (ii) Instruct TSPs and DSPs to implement any available Load management plans to reduce Customer Load. 
QUOTE: (iii) Instruct QSEs to deploy ECRS or RRS (controlled by high-set under-frequency relays) supplied from Load Resources.
AFTER:  ERCOT may deploy ECRS or RRS from Load Resources simultaneously or separately. ERCOT shall issue such Dispatch Instructions in accordance with the deployment methodologies described in paragraph (iv) below. (iv) Load Resources providing ECRS that are not controlled by high-set under-frequency relay…

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, EEA Levels, paragraph (1) · text copy line 3522 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …s detailed in this Section shall be supplemental to the development and maintenance of CMPs as otherwise directed by the Protocols or Operating Guides. (4) When a Watch is issued for PRC below 3,000 MW, QSEs shall suspend any ongoing ERCOT-required Resource performance testing. 6.5.9.4.2 EEA Levels 
QUOTE: (1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:
AFTER:  (a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW: (i) Request available Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Ins…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(a)(ii)-(iv) · text copy line 3528 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: … Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Instructions, and request available ESRs that can perform within the expected timeframe of the emergency to come On-Line through Dispatch Instructions; 
QUOTE: (ii) Use available DC Tie import capacity that is not already being used; (iii) Issue a Dispatch Instruction for Resources to remain On-Line which, before start of emergency, were scheduled to come Off-Line; (iv) Instruct QSEs to deploy undeployed ERS-10 and ERS-30;
AFTER:  and (v) At ERCOT's discretion, manually deploy, through ICCP, available RRS and ECRS capacity from Generation Resources having a Resource Status of ONSC and awarded RRS or ECRS. (b) QSEs shall: (i) Ensure COPs, telemetered status, telemetered HSLs, Normal Ramp Rates, Emergency Ramp Rates, and Ancil…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2) · text copy line 3561 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …==============================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (2) ERCOT may declare an EEA Level 2 when the clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2:
AFTER:  (a) In addition to the measures associated with EEA Level 1, ERCOT shall take the following steps to maintain steady state system frequency at a minimum of 59.91 Hz and maintain PRC above 1,500 MW: (i) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service dist…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (3) · text copy line 3587 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …age level BLTs, which transfer Load from the ERCOT Control Area to non-ERCOT Control Areas in accordance with BLTs as defined in the Operating Guides. (b) Confidentiality requirements regarding transmission operations and system capacity information will be lifted, as needed to restore reliability. 
QUOTE: (3) ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes.
AFTER:  Upon declaration of an EEA Level 3, ERCOT shall take any of the following measures as necessary to recover frequency or PRC to the minimum required levels: (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwi…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (3)(b) · text copy line 3598 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (b) Direct all TOs to shed firm Load, in 100 MW blocks, distributed as documented in the Operating Guides in order to maintain a steady state system frequency at a minimum of 59.91 Hz and to recover 1,500 MW of PRC within 30 minutes.
AFTER:  (i) TOs and TDSPs may: (A) Manually shed Load connected to under-frequency relays and/or under-voltage relays pursuant to an ERCOT Load shed directive issued during EEA Level 3 so long as the TO has determined that system conditions warrant utilizing Load connected to under-frequency and/or under-v…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4, paragraph (7) · text copy line 3421 · heading above: 6.5.9.4 Energy Emergency Alert

BEFORE: …the authority to obtain energy from non-ERCOT Control Areas using the DC Ties or by using BLTs to move load to non-ERCOT Control Areas. ERCOT maintains the authority to curtail energy schedules flowing into or out of the ERCOT System across the DC Ties in accordance with NERC scheduling guidelines. 
QUOTE: (7) Some of the EEA steps are not applicable if transmission security violations exist. There may be insufficient time to implement all EEA levels in sequence, however, to the extent practicable, ERCOT shall use Ancillary Service capabilities of Resources in the market to maintain or restore reliability.
AFTER:  (8) ERCOT may immediately implement EEA Level 2 when clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT may immediately implement EEA Level 3 any time the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-s…

### e9 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: Controlled outages box, history list · text copy line 113 · heading above: 59.8 Hz for any period of time,

BEFORE: …hen manage the outage on their local system. ERCOT does not have oversight into these outage plans. Controlled outages are also referred to as load shed. Current load shed tables are updated annually. ERCOT has initiated controlled outages four times since the grid operator was established: • • • • 
QUOTE: December 22, 1989: 500 MW April 17, 2006: 1,000 MW February 2, 2011: 4,000 MW February 15-18, 2021: 20,000 MW
AFTER:  Critical Needs Reminder If you have critical medical needs, it's important to contact your local electric utility ahead of a need, that way you are registered in the utility's system, and they have awareness of your medical needs. Also, it is important to have a backup plan for any emergency situat…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.3, Restoration of Market Operations, paragraph (1) · text copy line 3610 · heading above: 6.5.9.4.3 Restoration of Market Operations

BEFORE: …ng instructions for manual Load shed if all Load identified for manual Load shed and the Load identified in paragraph (A) above has been shed. (c) Implement any appropriate measures associated with EEA Levels 1 and 2 that have not already been implemented. 6.5.9.4.3 Restoration of Market Operations 
QUOTE: (1) ERCOT shall continue the EEA until sufficient offers are received and deployed by ERCOT to eliminate the conditions requiring the EEA and normal SCED operations are restored. After restoring RRS, ERCOT shall restore curtailed DC Tie Load. Intermittent solutions of SCED do not set new LMPs until ERCOT declares that the EEA is no longer needed.
AFTER:  6.5.9.5 Block Load Transfers between ERCOT and Non-ERCOT Control Areas (1) BLTs are procedures that transfer Loads normally located in the ERCOT Control Area to a non-ERCOT Control Area. Similarly, when a non-ERCOT Control Area experiences certain transmission contingencies or short-supply conditio…

### e11 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(a)(1) · text copy line 13

BEFORE: …E TO ELECTRIC SERVICE PROVIDERS. Subchapter S. WHOLESALE MARKETS. §25.509. Scarcity Pricing Mechanism for the Electric Reliability Council of Texas Power Region. (a) Definitions. The following terms, when used in this section, have the following meanings, unless the context indicates otherwise: (1) 
QUOTE: Emergency operations -- ERCOT entering into any level of Energy Emergency Alert.
AFTER:  (2) Generation entity -- an entity that owns or controls a generation resource. (3) Generation resource -- a generator capable of providing energy or ancillary services to the ERCOT grid and that is registered with ERCOT as a generation resource. (4) Load entity -- an entity that owns or controls a…

### e12 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: Introduction · text copy line 6

BEFORE: …Overview When electric supply and demand can't be balanced with normal procedures, ERCOT will implement additional actions to avoid the need to enter emergency operations, including starting additional generation, reducing operating reserve levels, and deploying designated demand response programs. 
QUOTE: If operating reserves continue to drop, ERCOT begins emergency operations using three levels of Energy Emergency Alerts (EEAs). These levels provide access to resources only available during emergency conditions to protect the reliability of the electric system. ERCOT currently has about 2,500 MW of additional capacity available when it enters emergency conditions.
AFTER:  EEA levels and actions EEA LEVEL 1 EEA LEVEL 2 EEA LEVEL 3 If operating reserves drop below 2,500 MW and are not expected to recover within 30 minutes, ERCOT actions include: _________ If operating reserves drop below 2,000 MW and are not expected to recover within 30 minutes, or frequency drops be…

### e13 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: Controlled outages box · text copy line 102 · heading above: 59.8 Hz for any period of time,

BEFORE: …s, ordered by ERCOT but implemented by transmission and distribution service providers, to quickly reduce electric demand, balance the grid, and prevent an uncontrolled system-wide outage. They are used as a last resort to bring operating reserves back to a safe level and maintain system frequency. 
QUOTE: Each utility is responsible for deciding how to decrease demand in their respective service area(s). ERCOT provides an amount, in megawatts, by which each utility is required to reduce demand, based on their percentage of historic peak demand.
AFTER:  Once ERCOT orders the outages to begin, these utilities then manage the outage on their local system. ERCOT does not have oversight into these outage plans. Controlled outages are also referred to as load shed. Current load shed tables are updated annually. ERCOT has initiated controlled outages fo…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(b)(ii) · text copy line 3540 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …ity from Generation Resources having a Resource Status of ONSC and awarded RRS or ECRS. (b) QSEs shall: (i) Ensure COPs, telemetered status, telemetered HSLs, Normal Ramp Rates, Emergency Ramp Rates, and Ancillary Service capabilities are updated and reflect all Resource delays and limitations; and 
QUOTE: (ii) Ensure that each of its ESRs suspends charging until the EEA is recalled, except under the following circumstances: (A) The ESR has a current SCED Base Point Instruction, LFC Dispatch Instruction, or manual Dispatch Instruction to charge the ESR; (B) The ESR is actively providing Primary Frequency Response; or
AFTER:  (C) The ESR is co-located behind a POI with onsite generation that is incapable of exporting additional power to the ERCOT System, in which case the ESR may continue to charge as long as maximum output to the ERCOT System is maintained. +-------------------------------------------------------------…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4, paragraph (8) · text copy line 3423 · heading above: 6.5.9.4 Energy Emergency Alert

BEFORE: …f the EEA steps are not applicable if transmission security violations exist. There may be insufficient time to implement all EEA levels in sequence, however, to the extent practicable, ERCOT shall use Ancillary Service capabilities of Resources in the market to maintain or restore reliability. (8) 
QUOTE: ERCOT may immediately implement EEA Level 2 when clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT may immediately implement EEA Level 3 any time the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz for any duration of time. ERCOT shall immediately implement EEA Level 3 any time the steady-state frequency is below 59.5 Hz for any duration.
AFTER:  (9) Percentages for EEA Level 3 Load shedding will be based on the previous year's TSP peak Loads, as reported to ERCOT, and must be reviewed by ERCOT and modified annually as required. (10) During EEA Level 2 or 3, for those constraints that meet the criteria identified in paragraph (3)(a) of Sect…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(a) · text copy line 3524 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …spend any ongoing ERCOT-required Resource performance testing. 6.5.9.4.2 EEA Levels (1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1: 
QUOTE: (a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW:
AFTER:  (i) Request available Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Instructions, and request available ESRs that can perform within the expected timeframe of the emergency to come On-Line through D…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(a)(v) · text copy line 3534 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …rough Dispatch Instructions; (ii) Use available DC Tie import capacity that is not already being used; (iii) Issue a Dispatch Instruction for Resources to remain On-Line which, before start of emergency, were scheduled to come Off-Line; (iv) Instruct QSEs to deploy undeployed ERS-10 and ERS-30; and 
QUOTE: (v) At ERCOT's discretion, manually deploy, through ICCP, available RRS and ECRS capacity from Generation Resources having a Resource Status of ONSC and awarded RRS or ECRS.
AFTER:  (b) QSEs shall: (i) Ensure COPs, telemetered status, telemetered HSLs, Normal Ramp Rates, Emergency Ramp Rates, and Ancillary Service capabilities are updated and reflect all Resource delays and limitations; and (ii) Ensure that each of its ESRs suspends charging until the EEA is recalled, except u…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2)(a) · text copy line 3563 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: … clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2: 
QUOTE: (a) In addition to the measures associated with EEA Level 1, ERCOT shall take the following steps to maintain steady state system frequency at a minimum of 59.91 Hz and maintain PRC above 1,500 MW:
AFTER:  (i) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service distribution voltage reduction measures that have not already been implemented. A TSP, DSP, or their agent shall implement these instructions if distribution voltage reduction measures are available and…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2)(a)(i) · text copy line 3565 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …00 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2: (a) In addition to the measures associated with EEA Level 1, ERCOT shall take the following steps to maintain steady state system frequency at a minimum of 59.91 Hz and maintain PRC above 1,500 MW: 
QUOTE: (i) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service distribution voltage reduction measures that have not already been implemented.
AFTER:  A TSP, DSP, or their agent shall implement these instructions if distribution voltage reduction measures are available and already installed. If the TSP, DSP, or their agent determines in their sole discretion that the distribution voltage reduction would adversely affect reliability, the voltage r…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2)(a)(iv) · text copy line 3571 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …oy ECRS or RRS (controlled by high-set under-frequency relays) supplied from Load Resources. ERCOT may deploy ECRS or RRS from Load Resources simultaneously or separately. ERCOT shall issue such Dispatch Instructions in accordance with the deployment methodologies described in paragraph (iv) below. 
QUOTE: (iv) Load Resources providing ECRS that are not controlled by high-set under-frequency relays shall be deployed prior to deployment of those that have armed under-frequency relays.
AFTER:  ERCOT shall deploy ECRS and RRS capacity supplied by Load Resources (controlled by high-set under-frequency relays) in accordance with the following: (A) Instruct QSEs to deploy ECRS that is supplied from Load Resources (controlled by high-set under-frequency relays) that are only providing ECRS an…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (2)(a)(iv)(A) · text copy line 3573 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …that are not controlled by high-set under-frequency relays shall be deployed prior to deployment of those that have armed under-frequency relays. ERCOT shall deploy ECRS and RRS capacity supplied by Load Resources (controlled by high-set under-frequency relays) in accordance with the following: (A) 
QUOTE: Instruct QSEs to deploy ECRS that is supplied from Load Resources (controlled by high-set under-frequency relays) that are only providing ECRS and then instruct QSEs to deploy Load Resources (controlled by high-set under-frequency relays) providing ECRS and RRS.
AFTER:  QSEs will be given some discretion to deploy additional Load Resources not designated for deployment if Load Resource operational considerations require such. ERCOT shall issue notification of the deployment via XML message. The deployment time within the ERCOT XML deployment message shall initiate…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (3)(a) · text copy line 3589 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes. Upon declaration of an EEA Level 3, ERCOT shall take any of the following measures as necessary to recover frequency or PRC to the minimum required levels: 
QUOTE: (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwise necessary, via a manual Dispatch Instruction.
AFTER:  An ESR shall suspend charging unless it is providing Primary Frequency Response, has received a charging instruction via SCED Base Point, or is carrying Reg-Down and has received a charging instruction from LFC. However, an ESR co-located behind a POI with onsite generation that is incapable of exp…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (3)(c) · text copy line 3606 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: … such that the UFLS Load falls below the TO's 25% Load relief obligation, as described in Nodal Operating Guide Section 2.6.1, in order to meet ERCOT operating instructions for manual Load shed if all Load identified for manual Load shed and the Load identified in paragraph (A) above has been shed. 
QUOTE: (c) Implement any appropriate measures associated with EEA Levels 1 and 2 that have not already been implemented.
AFTER:  6.5.9.4.3 Restoration of Market Operations (1) ERCOT shall continue the EEA until sufficient offers are received and deployed by ERCOT to eliminate the conditions requiring the EEA and normal SCED operations are restored. After restoring RRS, ERCOT shall restore curtailed DC Tie Load. Intermittent …

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4, paragraph (9) · text copy line 3425 · heading above: 6.5.9.4 Energy Emergency Alert

BEFORE: … 3 any time the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz for any duration of time. ERCOT shall immediately implement EEA Level 3 any time the steady-state frequency is below 59.5 Hz for any duration. (9) 
QUOTE: Percentages for EEA Level 3 Load shedding will be based on the previous year's TSP peak Loads, as reported to ERCOT, and must be reviewed by ERCOT and modified annually as required.
AFTER:  (10) During EEA Level 2 or 3, for those constraints that meet the criteria identified in paragraph (3)(a) of Section 6.5.9.4.1, General Procedures Prior to EEA Operations, ERCOT may control the post-contingency flow to within the 15-Minute Rating in SCED. After PRC is restored to at least 3,000 MW …

### e25 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.1, paragraph (1)(a)-(b) · text copy line 3435 · heading above: 6.5.9.4.1 General Procedures Prior to EEA Operations

BEFORE: …, ERCOT may elect not to enforce double-circuit contingencies during EEA Level 3 only. 6.5.9.4.1 General Procedures Prior to EEA Operations (1) Prior to declaring EEA Level 1 detailed in Section 6.5.9.4.2, EEA Levels, ERCOT may perform the following operations consistent with Good Utility Practice: 
QUOTE: (a) Provide Dispatch Instructions to QSEs for specific Resources to operate at an Emergency Base Point to maximize Resource deployment so as to increase PRC levels on other Resources; (b) Commit specific available Resources as necessary that can respond in the timeframe of the emergency. Such commitments will be settled using the HRUC process;
AFTER:  (c) Start RMR Units available in the time frame of the emergency. RMR Units should be loaded to full capability; (d) Utilize available Resources providing RRS, ECRS, and Non-Spin services as required; (e) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service d…

### e26 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.1, paragraph (2) · text copy line 3472 · heading above: 6.5.9.4.1 General Procedures Prior to EEA Operations

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: When PRC falls below 3,000 MW and is not projected to be recovered above 3,000 MW within 30 minutes following the deployment of Non-Spin, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message.
AFTER:  The deployment time within the ERCOT XML deployment message shall represent the beginning of the ERS-10 and ERS-30 ramp periods. +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.3.3, paragraph (1) · text copy line 3343 · heading above: 6.5.9.3.3 Watch

BEFORE: …f no more than seven days from the date of the request. The specific information that may be requested shall be defined in the Operating Guide. QSEs representing Resources shall provide the requested information in a timely manner, as defined by ERCOT at the time of the request. 6.5.9.3.3 Watch (1) 
QUOTE: A Watch is the third of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition.
AFTER:  (2) ERCOT shall issue a Watch when ERCOT determines that: (a) Market-based congestion management techniques embedded in SCED as specified in these Protocols will not be adequate to resolve transmission security violations; (b) Forced Outages or other abnormal operating conditions have occurred, or …

### e28 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.2.3, paragraph (4) · text copy line 139 · heading above: 4.2.3 Watch

BEFORE: …ingency overload of an element cannot be rectified, including through the use of CMPs, ERCOT shall issue a Watch. (4) ERCOT shall provide verbal notice of the Watch to TOs and QSEs representing Resources through the TO and QSE Hotlines and shall post the message electronically to the ERCOT website. 
QUOTE: When a Watch is issued, it does not place ERCOT in an Emergency Condition.
AFTER:  QSEs shall notify, as appropriate, their represented QSEs, Resources, REPs and LSEs of Watches. TOs shall notify, as appropriate, their represented TSPs and DSPs of Watches. +----------------------------------------------------------------------------------------------------------------------------…

### e29 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.2.4, paragraph (3) · text copy line 154 · heading above: 4.2.4 Emergency Notice

BEFORE: …) and/or overload of a Transmission Facility, and no timely solution is obtainable from the market. (2) ERCOT shall provide verbal notice of an Emergency Notice to TOs and QSEs representing Resources through the TO and QSE Hotlines and shall post the message electronically to the ERCOT website. (3) 
QUOTE: When an Emergency Notice is issued, ERCOT is operating in an Emergency Condition.
AFTER:  QSEs shall notify their represented QSEs, Resources, REPs and LSEs as appropriate of Emergency Notices. TOs shall notify their represented TSPs, DSPs and LSEs as appropriate of Emergency Notices. +------------------------------------------------------------------------------------------------------…

### e30 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.5.3, paragraph (7)(a)-(b) · text copy line 276 · heading above: 4.5.3 Implementation

BEFORE: …d methods. Since the need for firm Load shed is immediate, interruption by SCADA is preferred. Each TO, TSP, and Transmission and/or Distribution Service Provider (TDSP) and their designated agents will comply with the following requirements when implementing an ERCOT instruction to shed firm Load: 
QUOTE: (a) Load interrupted manually by SCADA will be shed without delay upon receipt of a Load shed instruction and in a time period not to exceed 30 minutes after receipt of the Load shed instruction for each Entity's portion of every Load shed instruction. SCADA-controlled Load shed is preferred to be utilized by the TO and/or TDSP(s) before non-SCADA-controlled Load shed when executing a Load shed instruction; (b) If sufficient amounts of SCADA-controlled Load are not available to fulfill an Entity's manual Load shed instruction, the TO and/or TDSP(s) shall complete, if applicable, the remaining manual Load shed through non-SCADA-controlled Load shed methods without delay upon receipt of a Load shed instruction and in a time period not to exceed one hour after receipt of the Load shed instruction.
AFTER:  A TO shall notify ERCOT if its SCADA-controlled Load shed capabilities have been exhausted; and (c) If determined appropriate by the TO and as soon as practicable, the TO and/or TDSP(s) should restore SCADA-controlled Load by shedding non-SCADA-controlled Load not shed in paragraph (b) above, in an…

### e31 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.5.3, paragraph (8) · text copy line 282 · heading above: 4.5.3 Implementation

BEFORE: …f determined appropriate by the TO and as soon as practicable, the TO and/or TDSP(s) should restore SCADA-controlled Load by shedding non-SCADA-controlled Load not shed in paragraph (b) above, in an effort to make SCADA-controlled Load available for a potential subsequent Load shed instruction. (8) 
QUOTE: Each TSP, or its designated agent, will provide ERCOT a status report of Load shed progress within 30 minutes of the time of ERCOT's instruction or upon ERCOT's request.
AFTER:  (9) During EEA Level 2 or 3, for those constraints that meet the criteria identified in paragraph (3)(a) of Section 4.5.3.1, General Procedures Prior to EEA Operations, ERCOT may control the post-contingency flow to within the 15-Minute Rating in Security-Constrained Economic Dispatch (SCED). After…

### e32 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.5.3.4, paragraph (2) · text copy line 536 · heading above: 4.5.3.4 Load Shed Obligation

BEFORE: …------------------------------------------------------------------------------------+ (1) Each TO shall take and direct actions to ensure that ERCOT Load shed instructions are effectuated. Each DSP shall comply with any reasonable instruction given by its TO to effectuate Load shed obligations. (2) 
QUOTE: Load shed obligation percentages for ERCOT EEA Level 3 Load shedding will be determined by calculating each TO's Load as a percentage of the ERCOT System summer and winter peak 15 minute Demand interval.
AFTER:  For the purposes of this paragraph, TO Load will be the amount of Load being served by all of the TDSPs that the TO represents. The calculations for summer and winter Load shed obligation percentage are as follows: +-----------------------------------------------------------------------------------…

### e33 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.5.3.4, paragraph (3) · text copy line 549 · heading above: 4.5.3.4 Load Shed Obligation

BEFORE: …winter Season from its settlement system. Anticipated revisions to the winter Load shed table shall be posted as described in paragraph (4) below no later than August 31^(st) of each year based on data from December of the previous calendar year and January through February of the current year. (3) 
QUOTE: The summer Load shed table will be used during a hot weather Load shed event and the winter Load shed table will be used during a cold weather Load shed event. ERCOT will determine, in its sole discretion, whether an EEA event will be treated as a hot weather or cold weather Load shed event based on the weather conditions.
AFTER:  The summer and winter Load shed time periods will be published annually with the updated obligation tables in paragraph (2) above. In addition, if ERCOT issues an Operating Condition Notice (OCN), it will notify Market Participants which Load shed table would apply to the potential Load shed event.…

### e34 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.5.3.5, paragraph (1)(a)-(c) · text copy line 570 · heading above: 4.5.3.5 EEA Termination

BEFORE: … that are designated for manual firm Load shed with circuits that serve designated critical loads; and (b) Minimize overlap of circuits that are designated for manual firm Load shed with circuits that are utilized for UFLS and Under-Voltage Load Shed (UVLS). 4.5.3.5 EEA Termination (1) ERCOT shall: 
QUOTE: (a) Continue EEA until sufficient Resources are available to ERCOT to eliminate the shortfall and restore adequate reserves; (b) Restore full reserve requirements (normally 2300 MW); (c) Terminate the levels in reverse order, where practical;
AFTER:  (d) Notify each QSE and TO of EEA level change termination via QSE and TO Hotlines and post the level change or termination electronically to the ERCOT website; and (e) Maintain a stable ERCOT System frequency when restoring Load. (2) QSEs and TOs shall: (a) Implement actions to terminate previous …

### e35 · `nog-04` · tier 1 · ERCOT Nodal Operating Guides, Section 4: Emergency Operation (current 2026)
locator: Section 4.8, paragraph (1) · text copy line 830 · heading above: 4.8 Responsive Reserve Service and ERCOT Contingency Reserve Service During Scarcity Conditions

BEFORE: …e During Scarcity Conditions (1) This Section details how Responsive Reserve (RRS) service may be manually deployed during scarcity conditions, pursuant to Protocol Section 6.5.7.6.2.2, Deployment of Responsive Reserve (RRS). The existing measure of scarcity is Physical Responsive Capability (PRC). 
QUOTE: If PRC drops below 3,000 MW, and all available Non-Spinning Reserve (Non-Spin) has been deployed, this process may be used.
AFTER:  Scarcity conditions may occur during the Peak Load Season when ERCOT System Load is above 60,000 MW. For all other months, they could occur when ERCOT System Load is above 50,000 MW. (a) When HSL - (Gen + 5-minute load ramp) <= 2000 MW, ERCOT may deploy Load Resources that are not Controllable Load…

### e36 · `nog-02` · tier 1 · ERCOT Nodal Operating Guides, Section 2: System Operations and Control Requirements (current 2026)
locator: Section 2.6.1, paragraph (1) · text copy line 822 · heading above: 2.6.1 Automatic Firm Load Shedding

BEFORE: …ontingency is known to produce post-contingency results that are incorrect; or (b) The contingency is known to produce a non-convergent contingency result which may cause the RUC process to fail. 2.6 Requirements for Under-Frequency and Over-Frequency Relaying 2.6.1 Automatic Firm Load Shedding (1) 
QUOTE: At least 25% of the ERCOT System Load shall be equipped at all times with provisions for automatic Under-Frequency Load Shedding (UFLS) as described in this paragraph, unless provisions specified in Section 4.5.3.3, EEA Levels, are required to meet ERCOT operating instructions for manual Load shed.
AFTER:  In the event of an under-frequency event, each Transmission Operator (TO) shall provide Load relief by shedding the required percentage of its Distribution Service Provider (DSP)-connected Load and transmission-level Customer Load using automatic under-frequency relays, as specified in Table 1, Sta…

### e37 · `nog-02` · tier 1 · ERCOT Nodal Operating Guides, Section 2: System Operations and Control Requirements (current 2026)
locator: Section 2.6.1, Table 1: Standard UFLS Stages · text copy line 829 · heading above: 59.3 Hz               At least 5% of the TO Load               At least six cycles but no more than 30 cycles

BEFORE: …old will not apply to meeting TO Load relief percentage requirements as stated in Table 1 and Table 2 below. Table 1: Standard UFLS Stages --------------------- ---------------------------------------- ------------------------------------------------ Frequency Threshold TO Load Relief Delay to Trip 
QUOTE: 59.3 Hz At least 5% of the TO Load At least six cycles but no more than 30 cycles 59.1 Hz A total of at least 10% of the TO Load At least six cycles but no more than 30 cycles 58.9 Hz A total of at least 15% of the TO Load At least six cycles but no more than 30 cycles 58.7 Hz A total of at least 20% of the TO Load At least six cycles but no more than 30 cycles 58.5 Hz A total of at least 25% of the TO Load At least six cycles but no more than 30 cycles
AFTER:  --------------------- ---------------------------------------- ------------------------------------------------ Table 2: Supplemental/Anti-Stall UFLS Stages --------------------- ----------------------------------------- -------------------- Frequency Threshold TO Load Relief Delay to Trip 59.5 Hz …

### e38 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: EEA levels and actions, Level 1 column (January 2026) · text copy line 60 · heading above: 59.8 Hz for any period of time,

BEFORE: …s/companies to reduce demand on the electric system, which occurs through the use of controlled outages - these outages impact all customer classes, including residential, commercial, and industrial Bringing any additional available generation online Increasing other generation supplies, including: 
QUOTE: Importing available generation from neighboring electric grids: up to 1,220 MW Switchable generation that can serve multiple electric grids: up to 2,184 MW
AFTER:  Reduce power by deploying remaining demand response programs, including: Deploying operating reserves carried by Load Resources (some large industrial customers who are paid to reduce their power): up to 1,000 MW Load management programs from transmission companies: 70-300MW, depending on the seaso…

### e39 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: EEA levels and actions, Level 2 column (January 2026) · text copy line 71 · heading above: 59.8 Hz for any period of time,

BEFORE: …ble generation online Increasing other generation supplies, including: Importing available generation from neighboring electric grids: up to 1,220 MW Switchable generation that can serve multiple electric grids: up to 2,184 MW Reduce power by deploying remaining demand response programs, including: 
QUOTE: Deploying operating reserves carried by Load Resources (some large industrial customers who are paid to reduce their power): up to 1,000 MW Load management programs from transmission companies: 70-300MW, depending on the season Voltage reduction by transmission companies: 1,200-1,300 MW, depending on the season
AFTER:  Additional information on EEA 1 Additional information on EEA 2 Additional information on EEA 3 Note: Some steps may occur simultaneously and do not include additional voluntary demand response programs, where electric service from other ERCOT business and residential customers is interrupted durin…

### e40 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: EEA levels and actions, footnote · text copy line 92 · heading above: 59.8 Hz for any period of time,

BEFORE: …ote: Some steps may occur simultaneously and do not include additional voluntary demand response programs, where electric service from other ERCOT business and residential customers is interrupted during emergencies. (1 MW is enough to serve about 250 residential customers during ERCOT peak hours). 
QUOTE: These capacity figures are planning estimates; actual availability will vary based on resource-specific circumstances at the time of the energy emergency.
AFTER:  January 2026 Controlled outages Controlled outages are electric service interruptions, ordered by ERCOT but implemented by transmission and distribution service providers, to quickly reduce electric demand, balance the grid, and prevent an uncontrolled system-wide outage. They are used as a last re…

### e41 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: EEA levels and actions, Level 3 column (January 2026) · text copy line 33

BEFORE: …L 3 If operating reserves drop below 2,500 MW and are not expected to recover within 30 minutes, ERCOT actions include: _________ If operating reserves drop below 2,000 MW and are not expected to recover within 30 minutes, or frequency drops below 59.91 Hz for 15 minutes, actions include: _________ 
QUOTE: If operating reserves drop below 1,500 MW, or the grid's frequency level drops below 59.8 Hz for any period of time,
AFTER:  ERCOT actions include: _________ Request energy conservation (if not already in effect) from public, including government and municipal agencies: # MW vary Instructing transmission and distribution service providers/companies to reduce demand on the electric system, which occurs through the use of …

### e42 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Section II, Emergency Event Overview · text copy line 51

BEFORE: …nsmission Grid, on September 7, 2023, ERCOT requested an extension to file the emergency report by close of business on September 13, 2023. The Executive Director subsequently approved this extension request on September 7,2023. Accordingly, this report is timely filed. II. EMERGENCY EVENT OVERVIEW 
QUOTE: On September 6, 2023, from approximately 7:10 p.m. until approximately 7:25 p.m., ERCOT observed a decline in the system frequency from 60 Hz to 59.77 Hz, which is outside the target range of 59.9 to 60.1 Hz.
AFTER:  In order to access additional power reserves to restore and maintain frequency, ERCOT declared an EEA Level 2 (EEA.2) at 7:25 p.in.1 Due to tight reserve margins 1 ERCOT Nodal Protocol § 6.5.9 governs actions taken in anticipation of, and in response to, an Emergency Condition in the ERCOT Region. …

### e43 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Chronology, September 6, 2023 · text copy line 384

BEFORE: …. 6:59 p.m.: RRS deployed. 7:00 p.m. Directed manual curtailment of 1,590 MW on Pawnee-to-Calaveras transmission line to manage DELSAN5 constraint. 7:14 p.m. 1,023 MW of ERS deployed. ERCOT also instructed TOs to implement distribution voltage reduction, if available, from 7:15 - 8:44 pm 7: 15 p.m. 
QUOTE: Advisory issued due to Physical Responsive Capability (PRC, i.e., the total amount of frequency responsive Resource capability On-Line in Real-Time) falling below 3,000 MW.
AFTER:  7:16 p.m.: System frequency reached 59.90 Hz. 7: 19 p.m. System frequency reached 59.85 Hz. Fast Frequency Response (FFR) deployed. Page 6 of 10 • 7:25 p.m. System frequency reached its lowest point of 59.77 Hz. EEA2 declared.9 Transmission and Distribution Utilities (TDUs) were requested to deploy…

### e44 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Chronology, September 6, 2023 · text copy line 401

BEFORE: …Hz. 7: 19 p.m. System frequency reached 59.85 Hz. Fast Frequency Response (FFR) deployed. Page 6 of 10 • 7:25 p.m. System frequency reached its lowest point of 59.77 Hz. EEA2 declared.9 Transmission and Distribution Utilities (TDUs) were requested to deploy load management programs, if available. • 
QUOTE: 7:28 p.m.: 1,593 MW of Load Resources deployed.
AFTER:  • 7:29 p.m. Request submitted to TCEQ for enforcement discretion to begin immediately and end at midnight. • 7:40 p.m.: 500 MW ofRRS recalled. • 7:49 p.m.: TCEQ approved ERCOT' s request for enforcement discretion.10 • 7:54 p.m.: All RRS recalled. • 7:56 p.m. DC Tie Curtailment Notice (DCTCN) issue…

### e45 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Section II, Emergency Event Overview · text copy line 79

BEFORE: …ransmission Operators (TOs) implement distribution voltage reduction measures, if available. As part of the EEA2 declaration, ERCOT requested deployment of load management program capacity. And immediately after the EEA2 declaration, Load Resources were deployed through RRS to stop frequency decay. 
QUOTE: At 7:37 p.m., system frequency was restored to 60 Hzthrough these actions, and no additional measures, including firm load-shedding, were necessary.
AFTER:  At 8:27 p.m., the ERCOT System moved from EEA2 up to EEA1, and at 8:37 p.m., the ERCOT System exited EEA1 and returned to normal operations. Operating reserve levels remained tight the following day on Thursday, September 7, at their lowest reaching 3,685 MW, but conditions improved on Friday, Sept…

### e46 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Section II, Emergency Event Overview · text copy line 81

BEFORE: …ent of load management program capacity. And immediately after the EEA2 declaration, Load Resources were deployed through RRS to stop frequency decay. At 7:37 p.m., system frequency was restored to 60 Hzthrough these actions, and no additional measures, including firm load-shedding, were necessary. 
QUOTE: At 8:27 p.m., the ERCOT System moved from EEA2 up to EEA1, and at 8:37 p.m., the ERCOT System exited EEA1 and returned to normal operations.
AFTER:  Operating reserve levels remained tight the following day on Thursday, September 7, at their lowest reaching 3,685 MW, but conditions improved on Friday, September 8 with the lowest reserves of 4,612 MW on that date. A variety of factors contributed to the low power reserve conditions that resulted…

### e47 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Section II, Emergency Event Overview · text copy line 73

BEFORE: …the general public. Page 1 of 10 that evening, ERCOT had already deployed Ancillary Services, including Non-Spinning Reserve Service (Non-Spin), ERCOT Contingency Reserve Service (ECRS), generation-provided Responsive Reserve Service (RRS), and Fast Frequency Response (FFR) at the time of the EEA2. 
QUOTE: ERCOT had also already deployed Emergency Response Service (ERS) and requested that Transmission Operators (TOs) implement distribution voltage reduction measures, if available.
AFTER:  As part of the EEA2 declaration, ERCOT requested deployment of load management program capacity. And immediately after the EEA2 declaration, Load Resources were deployed through RRS to stop frequency decay. At 7:37 p.m., system frequency was restored to 60 Hzthrough these actions, and no additional…

### e48 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Reliability Unit Commitment / manual actions discussion (OCR) · text copy line 1294

BEFORE: …m shadow price caps for thermal constraints are too low and do not appropriately value violations of the constraint. When this happens, the real-time market may not dispatch sufficient local resources to resolve the constraint, and prompt manual actions that can result in higher prices system-wide. 
QUOTE: Reliability concerns associated with a severe violation on September 6, 2023, prompted ERCOT to curtail 1,500 MW of generation, including 1,300 MW of wind. These curtailments occurred simultaneously with rising demand and resulted in the system frequency falling below 59.91 hertz for 15 consecutive minutes
AFTER:  and ERCOT's declaring an Energy Emergency Alert Level 2. The September 6 manual curtailments highlight that reliability concerns regarding transmission violations can exceed the established shadow price caps. On this day, the marginal costs of the manual curtailments were much higher than the shado…

### e49 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18, summary of proposed changes · text copy line 831

BEFORE: …. Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories. o 
QUOTE: Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold.
AFTER:  In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resources providing RRS using Primary Frequency Response will remain at 1,377 MW. • Key Factors Influencing Issue: ERCOT Contingency Reserve Service and Non-Spinnin…

## Statements to check

- **Definition #1** (cites e1, e12): An Energy Emergency Alert is the orderly, predetermined ERCOT procedure for maximizing the use of available resources and, only if necessary, curtailing load during an Emergency Condition, while keeping service as continuous as possible and protecting the integrity of the ERCOT System. [e1] There are three levels. [e12]
- **How it works #1** (cites e3, e5, e6, e15) FLAG number-not-in-quote: 6.5, 9.4: The Protocols tie each level to physical responsive capability (PRC) and, for Levels 2 and 3, also to system frequency. ERCOT declares Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the Level 1 actions. [e3] It declares Level 2 when PRC falls below 2,000 MW on the same test, and may declare it when clock-minute average frequency stays below 59.91 Hz for 15 consecutive minutes. [e5] It declares Level 3 when PRC cannot be maintained above 1,500 MW or when clock-minute average frequency is below 59.91 Hz for 25 consecutive minutes, and may declare it at 20 minutes or when steady-state frequency falls below 59.8 Hz. [e6] Section 6.5.9.4(8) adds that ERCOT may implement Level 3 when steady-state frequency is below 59.8 Hz for any duration and shall implement it immediately any time steady-state frequency is below 59.5 Hz for any duration. [e15]
- **How it works #2** (cites e16, e4, e17, e14): The actions escalate. Level 1 is aimed at keeping steady-state frequency near 60 Hz and PRC above 2,000 MW. [e16] Its steps include using unused DC Tie import capacity, directing resources scheduled to go offline to stay on, and deploying undeployed ERS-10 and ERS-30. [e4] At ERCOT's discretion it may also manually deploy RRS and ECRS from Generation Resources in ONSC status through ICCP. [e17] Each ESR must also suspend charging until the EEA is recalled, with exceptions such as a current instruction to charge or actively providing Primary Frequency Response. [e14]
- **How it works #3** (cites e18, e19, e2, e20, e21, e7, e22, e23): Level 2 adds steps to hold frequency at a minimum of 59.91 Hz and PRC above 1,500 MW. [e18] They include using distribution voltage reduction measures not already implemented, [e19] and instructing QSEs to deploy ECRS or RRS supplied from Load Resources. [e2] Load Resources providing ECRS that are not controlled by high-set under-frequency relays are deployed before those with armed relays, [e20] and ERCOT first deploys ECRS from relay-controlled Load Resources that provide only ECRS, then those providing ECRS and RRS. [e21] Level 3 adds directing transmission owners to shed firm load in 100 MW blocks to hold frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes, [e7] and instructing ESRs to suspend charging, by a SCED Base Point instruction or if necessary a manual Dispatch Instruction. [e22] At Level 3 ERCOT also implements any Level 1 and 2 measures not already implemented. [e23]
- **How it works #4** (cites e8, e10, e34): Levels do not always happen in order: some steps do not apply when there are transmission security violations, and there may be too little time to implement every level in sequence. [e8] ERCOT keeps the EEA in place until enough offers are received and deployed to remove the conditions and normal SCED operation returns; intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA no longer needed. [e10] The Operating Guides add that ERCOT continues the EEA until sufficient Resources are available to eliminate the shortfall and restore adequate reserves, restores full reserve requirements (normally 2300 MW), and terminates levels in reverse order where practical. [e34]
- **How it works #5** (cites e25, e26, e27, e28, e29, e35): **Before the levels.** Ahead of declaring Level 1 ERCOT may, consistent with Good Utility Practice, instruct Resources to an Emergency Base Point and commit specific Resources settled through the HRUC process. [e25] When PRC is below 3,000 MW and not projected to recover within 30 minutes after Non-Spin deployment, ERCOT may deploy contracted ERS-10 and ERS-30 via XML message. [e26] A Watch is the third of three levels of communication issued in anticipation of a possible Emergency Condition, [e27] and issuing a Watch does not place ERCOT in an Emergency Condition, whereas issuing an Emergency Notice means ERCOT is operating in one. [e28][e29] The Operating Guides' scarcity-conditions section says the manual RRS/ECRS deployment process there may be used if PRC drops below 3,000 MW and all available Non-Spin has been deployed. [e35]
- **How it works #6** (cites e30, e31, e32, e33, e24, e36, e37): **Load shed mechanics.** Load interrupted manually by SCADA must be shed without delay and within 30 minutes of the instruction; if SCADA-controlled load is insufficient, the remaining manual shed through non-SCADA methods must be completed within one hour. [e30] Each TSP reports Load shed progress within 30 minutes of the instruction or on request. [e31] Each TO's obligation percentage is its Load as a share of the ERCOT System summer and winter peak 15-minute Demand interval, [e32] and ERCOT decides in its sole discretion whether an event is hot weather (summer table) or cold weather (winter table). [e33] Percentages are based on the previous year's TSP peak Loads and reviewed annually. [e24] Separately from manual shed, at least 25% of ERCOT System Load must be equipped for automatic Under-Frequency Load Shedding; the standard stages start at 59.3 Hz with at least 5% of TO Load and reach at least 25% at 58.5 Hz. [e36][e37]
- **ERCOT context #1** (cites e13, e9, e11): For load shed, ERCOT gives each utility a megawatt reduction amount based on its percentage of historic peak demand, and each utility decides how to meet it. [e13] ERCOT's own overview lists four controlled-outage events: 500 MW in December 1989, 1,000 MW in April 2006, 4,000 MW in February 2011 and 20,000 MW in February 2021. [e9] The PUCT's scarcity pricing rule defines "emergency operations" as ERCOT entering any level of EEA. [e11]
- **ERCOT context #2** (cites e38, e39, e40, e41, e15) FLAG number-not-in-quote: 2026: ERCOT's January 2026 overview gives planning estimates of the tools: imports up to 1,220 MW and switchable generation up to 2,184 MW (Level 1 column); Load Resource reserves up to 1,000 MW, transmission load management programs 70-300 MW and voltage reduction 1,200-1,300 MW depending on the season (Level 2 column). [e38][e39] It states these are planning estimates and actual availability varies with circumstances at the time. [e40] Its Level 3 column describes operating reserves below 1,500 MW or frequency below 59.8 Hz for any period of time; this matches the Protocols' 59.8 Hz steady-state path rather than the 25-minute 59.91 Hz path. [e41][e15]
- **ERCOT context #3** (cites e49) FLAG number-not-in-quote: 2027, 2026: ERCOT's 2027 AS methodology proposal (a Board item, September 14-15, 2026, requiring PUCT approval whose outcome is not in the saved sources) would change the ECRS/Non-Spin model's convergence criterion from a Watch (3,000 MW) threshold to an EEA1 (2,500 MW) threshold. [e49]
- **Timeline #1** (cites e9): - December 22, 1989, April 17, 2006, February 2, 2011 and February 15-18, 2021: ERCOT-initiated controlled outages of 500, 1,000, 4,000 and 20,000 MW. [e9]
- **Timeline #2** (cites e42, e47, e44, e45, e46): - September 6, 2023: system frequency fell from 60 Hz to 59.77 Hz between about 7:10 and 7:25 p.m.; ERCOT had already deployed ERS and requested distribution voltage reduction; Load Resources (1,593 MW) were deployed after the EEA2 declaration; frequency was restored by 7:37 p.m. without firm load shed; the system moved to EEA1 at 8:27 p.m. and exited at 8:37 p.m. [e42][e47][e44][e45][e46]
- **Key facts #1** (cites e3): - EEA Level 1 trigger: PRC below 2,500 MW and not projected to recover above 2,500 MW within 30 minutes. [e3]
- **Key facts #2** (cites e5): - EEA Level 2 trigger: PRC below 2,000 MW on the same 30-minute test; ERCOT may also declare it when clock-minute average frequency is below 59.91 Hz for 15 consecutive minutes. [e5]
- **Key facts #3** (cites e6, e15): - EEA Level 3 trigger: PRC cannot be held above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes (may declare at 20 minutes, or steady-state frequency below 59.8 Hz); steady-state below 59.5 Hz requires immediate Level 3. [e6][e15]
- **Key facts #4** (cites e7, e30): - Level 3 load shed is directed to transmission owners in 100 MW blocks; manual SCADA shed within 30 minutes. [e7][e30]
- **Key facts #5** (cites e34): - EEA termination: restore full reserve requirements (normally 2300 MW) per the Operating Guides. [e34]
- **Key facts #6** (cites e12): - ERCOT says it has about 2,500 MW of additional capacity available when it enters emergency conditions. [e12]
- **Key facts #7** (cites e9): - The 2021 controlled outage reached 20,000 MW; the 2011 event reached 4,000 MW. [e9]
- **Say it like this #1** (cites e6, e7, e8): An EEA is ERCOT's three-step emergency ladder, keyed to how much responsive capacity is left on the system and to frequency. Level 3 is the one where firm load is shed, and the protocol says the levels do not have to be reached in sequence. [e6][e7][e8]
- **Common confusion #1** (cites e7, e28, e5, e6, e36): An EEA is not the same as load shed: Levels 1 and 2 use extra supply and demand-side tools, and firm load shed is a Level 3 measure. [e7] A Watch is also not an EEA: a Watch does not place ERCOT in an Emergency Condition. [e28] The Protocols include "may declare" frequency paths at 15 minutes (Level 2) and 20 minutes (Level 3), alongside the PRC tests. [e5][e6] Automatic UFLS is a separate protection from manually directed Level 3 shed. [e36][e7]
- **Questions #2** (cites e3, e5, e6): Level 1 is PRC below 2,500 MW and not expected to recover within 30 minutes; Level 2 is PRC below 2,000 MW on the same test (ERCOT may also declare it at frequency below 59.91 Hz for 15 minutes); Level 3 is PRC that cannot be kept above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes. [e3][e5][e6]
- **Questions #4** (cites e4, e14, e19, e2, e7): At Level 1 it uses spare DC Tie imports, keeps resources on-line that were due to go offline, and deploys ERS, and ESRs suspend charging. [e4][e14] Level 2 adds voltage reduction and Load Resource deployment of ECRS and RRS. [e19][e2] Level 3 adds firm load shed in 100 MW blocks. [e7]
- **Questions #6** (cites e8, e15): Yes. The Protocols say there may be insufficient time to implement every level in sequence, and some steps are not applicable if transmission security violations exist. [e8] Frequency alone can trigger Level 3: steady-state below 59.5 Hz requires immediate implementation. [e15]
- **Questions #8** (cites e10, e11): Intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA is no longer needed. [e10] For the separate cap-related effects, see the offer cap topic. [e11]
- **Questions #10** (cites e20, e21): The Protocol sets a sequence: Load Resources providing ECRS without armed under-frequency relays go first, then relay-controlled ECRS-only Load Resources, then those providing ECRS and RRS. [e20][e21] The Protocol text does not state the reason for the ordering.
- **Questions #12** (cites e15): ERCOT can use the frequency paths: Level 2 may be implemented at 59.91 Hz for 15 consecutive minutes, Level 3 at 59.91 Hz for 20 minutes or steady-state below 59.8 Hz, and Level 3 must be immediate below 59.5 Hz steady-state. [e15]
- **Questions #14** (cites e45, e47, e44): ERCOT's report says the frequency was restored to 60 Hz by 7:37 p.m. through the deployed ancillary services, ERS, voltage reduction, load management and Load Resource deployment, so no additional measures including firm load shed were needed. [e45][e47][e44]
- **Scenarios #2** (cites e43, e42): - An Advisory was issued when PRC fell below 3,000 MW; frequency fell from 60 Hz to 59.77 Hz. [e43][e42]
- **Scenarios #3** (cites e47, e44): - ERCOT had already deployed ERS and asked for distribution voltage reduction; Load Resources (1,593 MW) were deployed after the EEA2 declaration. [e47][e44]
- **Scenarios #4** (cites e45, e46): - Frequency was restored to 60 Hz by 7:37 p.m., with no firm load shed; the system moved to EEA1 at 8:27 p.m. and exited at 8:37 p.m. [e45][e46]
- **Scenarios #5** (cites e48): - The IMM's 2023 report links the event to ERCOT's curtailment of 1,500 MW of generation (including 1,300 MW of wind) for a severe violation. [e48]
- **Link to prc** (cites e3, e5, e6): measures PRC (Physical Responsive Capability): PRC, the frequency-responsive capability on line, is one of the triggers for EEA Levels 1 to 3. [e3][e5][e6]
- **Link to load-shed** (cites e7): causes Load Shed / Rotating Outages: EEA Level 3 is where ERCOT directs transmission owners to shed firm load. [e7]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): The PUCT scarcity pricing rule defines emergency operations as ERCOT entering any EEA level. [e11]
- **Link to rrs** (cites e2): related RRS (Responsive Reserve Service): Load Resources providing RRS are deployed during EEA Level 2. [e2]
- **Link to ecrs** (cites e2): related ECRS (ERCOT Contingency Reserve Service): Load Resources providing ECRS can be deployed at EEA Level 2. [e2]
- **Link to winter-storm-uri** (cites e9): example-of Winter Storm Uri (Feb 2021): February 2021 is the largest of the controlled-outage events in ERCOT's overview list. [e9]
- **Link to nodal-protocols** (cites e3) FLAG number-not-in-quote: 6.5, 9.4: part-of ERCOT Nodal Protocols: The EEA levels are set out in Section 6.5.9.4.2 of the Nodal Protocols. [e3]
- **Link to energy-storage-resource** (cites e14): related Energy Storage Resource (ESR): Under the Protocols each ESR must suspend charging when EEA Level 1 applies, with listed exceptions. [e14]
- **Link to ers** (cites e26, e4): related ERS (Emergency Response Service): ERCOT may deploy ERS-10 and ERS-30 when PRC is below 3,000 MW after Non-Spin, and Level 1 includes deploying undeployed ERS. [e26][e4]
- **Link to operating-notices** (cites e27, e28): related Operating Notices (OCN, Advisory, Watch, Emergency): A Watch is the third of three levels of communication issued in anticipation of an Emergency Condition, and does not place ERCOT in one. [e27][e28]
- **Link to summer-2023** (cites e46) FLAG number-not-in-quote: 2023: example-of Summer 2023 Tight Conditions: ERCOT moved from EEA2 to EEA1 on September 6, 2023 after a frequency decline. [e46]
- **Link to non-spin** (cites e26): related Non-Spinning Reserve: ERS deployment under the pre-EEA rule follows Non-Spin deployment. [e26]
- **Link to ancillary-services** (cites e49) FLAG number-not-in-quote: 2027: related Ancillary Services (AS): ERCOT's 2027 AS methodology proposal would lower the ECRS/Non-Spin convergence threshold from Watch (3,000 MW) to EEA1 (2,500 MW). [e49]
