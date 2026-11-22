# Audit packet: EEA (Energy Emergency Alert) Levels (eea)

kind rule · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

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

### e9 · `ercot-eea-overview` · tier 2 · 2026 Energy Emergency Alert Overview (2026)
locator: Controlled outages box, history list · text copy line 113 · heading above: 59.8 Hz for any period of time,

BEFORE: …hen manage the outage on their local system. ERCOT does not have oversight into these outage plans. Controlled outages are also referred to as load shed. Current load shed tables are updated annually. ERCOT has initiated controlled outages four times since the grid operator was established: • • • • 
QUOTE: December 22, 1989: 500 MW April 17, 2006: 1,000 MW February 2, 2011: 4,000 MW February 15-18, 2021: 20,000 MW
AFTER:  Critical Needs Reminder If you have critical medical needs, it's important to contact your local electric utility ahead of a need, that way you are registered in the utility's system, and they have awareness of your medical needs. Also, it is important to have a backup plan for any emergency situat…

### e11 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(a)(1) · text copy line 13

BEFORE: …E TO ELECTRIC SERVICE PROVIDERS. Subchapter S. WHOLESALE MARKETS. §25.509. Scarcity Pricing Mechanism for the Electric Reliability Council of Texas Power Region. (a) Definitions. The following terms, when used in this section, have the following meanings, unless the context indicates otherwise: (1) 
QUOTE: Emergency operations -- ERCOT entering into any level of Energy Emergency Alert.
AFTER:  (2) Generation entity -- an entity that owns or controls a generation resource. (3) Generation resource -- a generator capable of providing energy or ancillary services to the ERCOT grid and that is registered with ERCOT as a generation resource. (4) Load entity -- an entity that owns or controls a…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, paragraph (1)(b)(ii) · text copy line 3540 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …ity from Generation Resources having a Resource Status of ONSC and awarded RRS or ECRS. (b) QSEs shall: (i) Ensure COPs, telemetered status, telemetered HSLs, Normal Ramp Rates, Emergency Ramp Rates, and Ancillary Service capabilities are updated and reflect all Resource delays and limitations; and 
QUOTE: (ii) Ensure that each of its ESRs suspends charging until the EEA is recalled, except under the following circumstances: (A) The ESR has a current SCED Base Point Instruction, LFC Dispatch Instruction, or manual Dispatch Instruction to charge the ESR; (B) The ESR is actively providing Primary Frequency Response; or
AFTER:  (C) The ESR is co-located behind a POI with onsite generation that is incapable of exporting additional power to the ERCOT System, in which case the ESR may continue to charge as long as maximum output to the ERCOT System is maintained. +-------------------------------------------------------------…

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

### e43 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Chronology, September 6, 2023 · text copy line 384

BEFORE: …. 6:59 p.m.: RRS deployed. 7:00 p.m. Directed manual curtailment of 1,590 MW on Pawnee-to-Calaveras transmission line to manage DELSAN5 constraint. 7:14 p.m. 1,023 MW of ERS deployed. ERCOT also instructed TOs to implement distribution voltage reduction, if available, from 7:15 - 8:44 pm 7: 15 p.m. 
QUOTE: Advisory issued due to Physical Responsive Capability (PRC, i.e., the total amount of frequency responsive Resource capability On-Line in Real-Time) falling below 3,000 MW.
AFTER:  7:16 p.m.: System frequency reached 59.90 Hz. 7: 19 p.m. System frequency reached 59.85 Hz. Fast Frequency Response (FFR) deployed. Page 6 of 10 • 7:25 p.m. System frequency reached its lowest point of 59.77 Hz. EEA2 declared.9 Transmission and Distribution Utilities (TDUs) were requested to deploy…

### e46 · `ercot-eea2-2023-report` · tier 2 · ERCOT Report of Emergency Event, September 6, 2023 EEA2 (PUCT Project 54444) (2023-09-13)
locator: Section II, Emergency Event Overview · text copy line 81

BEFORE: …ent of load management program capacity. And immediately after the EEA2 declaration, Load Resources were deployed through RRS to stop frequency decay. At 7:37 p.m., system frequency was restored to 60 Hzthrough these actions, and no additional measures, including firm load-shedding, were necessary. 
QUOTE: At 8:27 p.m., the ERCOT System moved from EEA2 up to EEA1, and at 8:37 p.m., the ERCOT System exited EEA1 and returned to normal operations.
AFTER:  Operating reserve levels remained tight the following day on Thursday, September 7, at their lowest reaching 3,685 MW, but conditions improved on Friday, September 8 with the lowest reserves of 4,612 MW on that date. A variety of factors contributed to the low power reserve conditions that resulted…

### e49 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18, summary of proposed changes · text copy line 831

BEFORE: …. Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories. o 
QUOTE: Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold.
AFTER:  In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resources providing RRS using Primary Frequency Response will remain at 1,377 MW. • Key Factors Influencing Issue: ERCOT Contingency Reserve Service and Non-Spinnin…

## Statements to check (new or changed since the last audit)

- **Link to prc** (cites e43, e3, e5, e6) FLAG number-not-in-quote: 2023: measures PRC (Physical Responsive Capability): PRC, the total frequency-responsive Resource capability On-Line in Real-Time (as ERCOT's 2023 report defines it), is one of the triggers for EEA Levels 1 to 3. [e43][e3][e5][e6]
- **Link to load-shed** (cites e7): causes Load Shed / Rotating Outages: EEA Level 3 is where ERCOT directs transmission owners to shed firm load. [e7]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): The PUCT scarcity pricing rule defines emergency operations as ERCOT entering any EEA level. [e11]
- **Link to rrs** (cites e2): related RRS (Responsive Reserve Service): At EEA Level 2 ERCOT may instruct QSEs to deploy RRS supplied from Load Resources controlled by high-set under-frequency relays. [e2]
- **Link to ecrs** (cites e2): related ECRS (ERCOT Contingency Reserve Service): Load Resources providing ECRS can be deployed at EEA Level 2. [e2]
- **Link to winter-storm-uri** (cites e9): example-of Winter Storm Uri (Feb 2021): February 2021 is the largest of the controlled-outage events in ERCOT's overview list. [e9]
- **Link to nodal-protocols** (cites e3) FLAG number-not-in-quote: 6.5, 9.4: part-of ERCOT Nodal Protocols: The EEA levels are set out in Section 6.5.9.4.2 of the Nodal Protocols. [e3]
- **Link to energy-storage-resource** (cites e14): related Energy Storage Resource (ESR): Under the Protocols each ESR must suspend charging when EEA Level 1 applies, with listed exceptions. [e14]
- **Link to ers** (cites e26, e4): related ERS (Emergency Response Service): ERCOT may deploy ERS-10 and ERS-30 when PRC is below 3,000 MW after Non-Spin, and Level 1 includes deploying undeployed ERS. [e26][e4]
- **Link to operating-notices** (cites e27, e28): related Operating Notices (OCN, Advisory, Watch, Emergency): A Watch is the third of three levels of communication issued in anticipation of an Emergency Condition, and does not place ERCOT in one. [e27][e28]
- **Link to summer-2023** (cites e46) FLAG number-not-in-quote: 2023: example-of Summer 2023 Tight Conditions: ERCOT moved from EEA2 to EEA1 on September 6, 2023 after a frequency decline. [e46]
- **Link to non-spin** (cites e26): related Non-Spinning Reserve: ERS deployment under the pre-EEA rule follows Non-Spin deployment. [e26]
- **Link to ancillary-services** (cites e49) FLAG number-not-in-quote: 2027: related Ancillary Services (AS): ERCOT's 2027 AS methodology proposal would lower the ECRS/Non-Spin convergence threshold from Watch (3,000 MW) to EEA1 (2,500 MW). [e49]

