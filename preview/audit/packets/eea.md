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

## Statements to check

- **Definition #1** (cites e1, e12): An Energy Emergency Alert is the orderly, predetermined ERCOT procedure for maximizing the use of available resources and, only if necessary, curtailing load during an Emergency Condition, while keeping service as continuous as possible and protecting the integrity of the ERCOT System. [e1] There are three levels. [e12]
- **How it works #1** (cites e3, e5, e6): The Protocols tie each level to physical responsive capability (PRC) and, for Levels 2 and 3, also to system frequency. ERCOT declares Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the Level 1 actions. [e3] It declares Level 2 when PRC falls below 2,000 MW on the same test, and may declare it when clock-minute average frequency stays below 59.91 Hz for 15 consecutive minutes. [e5] It declares Level 3 when PRC cannot be maintained above 1,500 MW or when clock-minute average frequency is below 59.91 Hz for 25 consecutive minutes, and may declare it at 20 minutes or when steady-state frequency falls below 59.8 Hz. [e6]
- **How it works #2** (cites e4, e14, e2, e7): The actions escalate. Level 1 steps include using unused DC Tie import capacity, directing resources scheduled to go offline to stay on, and deploying undeployed ERS-10 and ERS-30. [e4] Each ESR must also suspend charging until the EEA is recalled, with exceptions such as a current instruction to charge or actively providing Primary Frequency Response. [e14] Level 2 adds instructing QSEs to deploy ECRS or RRS supplied by Load Resources. [e2] Level 3 adds directing transmission owners to shed firm load in 100 MW blocks to hold frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes. [e7]
- **How it works #3** (cites e8, e10): Levels do not always happen in order: some steps do not apply when there are transmission security violations, and there may be too little time to implement every level in sequence. [e8] ERCOT keeps the EEA in place until enough offers are received and deployed to remove the conditions and normal SCED operation returns; intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA no longer needed. [e10]
- **ERCOT context #1** (cites e13, e9, e11): For load shed, ERCOT gives each utility a megawatt reduction amount based on its percentage of historic peak demand, and each utility decides how to meet it. [e13] ERCOT's own overview lists four controlled-outage events: 500 MW in December 1989, 1,000 MW in April 2006, 4,000 MW in February 2011 and 20,000 MW in February 2021. [e9] The PUCT's scarcity pricing rule defines "emergency operations" as ERCOT entering any level of EEA, [e11]
- **Key facts #1** (cites e3): - EEA Level 1 trigger: PRC below 2,500 MW and not projected to recover above 2,500 MW within 30 minutes. [e3]
- **Key facts #2** (cites e5): - EEA Level 2 trigger: PRC below 2,000 MW on the same 30-minute test, or frequency below 59.91 Hz for 15 consecutive minutes. [e5]
- **Key facts #3** (cites e6): - EEA Level 3 trigger: PRC cannot be held above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes (may declare at 20 minutes, or steady-state frequency below 59.8 Hz). [e6]
- **Key facts #4** (cites e7): - Level 3 load shed is directed to transmission owners in 100 MW blocks. [e7]
- **Key facts #5** (cites e12): - ERCOT says it has about 2,500 MW of additional capacity available when it enters emergency conditions. [e12]
- **Key facts #6** (cites e9): - The 2021 controlled outage reached 20,000 MW; the 2011 event reached 4,000 MW. [e9]
- **Say it like this #1** (cites e6, e8): An EEA is ERCOT's three-step emergency ladder, keyed to how much responsive capacity is left on the system and to frequency. Level 3 is the one where firm load is shed, and the protocol says the levels do not have to be reached in sequence. [e6][e8]
- **Common confusion #1** (cites e7, e5, e6): An EEA is not the same as load shed: Levels 1 and 2 use extra supply and demand-side tools, and firm load shed is a Level 3 measure. [e7] The Protocols also include "may declare" frequency paths at 15 minutes (Level 2) and 20 minutes (Level 3), alongside the PRC tests. [e5][e6]
- **Questions #2** (cites e3, e5, e6): Level 1 is PRC below 2,500 MW and not expected to recover within 30 minutes; Level 2 is PRC below 2,000 MW on the same test, or frequency below 59.91 Hz for 15 minutes; Level 3 is PRC that cannot be kept above 1,500 MW, or frequency below 59.91 Hz for 25 minutes. [e3][e5][e6]
- **Questions #4** (cites e4, e14, e2, e7): At Level 1 it uses spare DC Tie imports, keeps resources on-line that were due to go offline, and deploys ERS, and ESRs suspend charging. [e4][e14] Level 2 adds Load Resource deployment of ECRS and RRS. [e2] Level 3 adds firm load shed in 100 MW blocks. [e7]
- **Questions #6** (cites e8): Yes. The Protocols say there may be insufficient time to implement every level in sequence, and some steps are not applicable if transmission security violations exist. [e8]
- **Questions #8** (cites e10, e11): Intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA is no longer needed. [e10] For the separate cap-related effects, see the offer cap topic. [e11]
- **Link to prc** (cites e3, e5, e6): measures PRC (Physical Responsive Capability): PRC, the frequency-responsive capability on line, is one of the triggers for EEA Levels 1 to 3. [e3][e5][e6]
- **Link to load-shed** (cites e7): causes Load Shed / Rotating Outages: EEA Level 3 is where ERCOT directs transmission owners to shed firm load. [e7]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): The PUCT scarcity pricing rule defines emergency operations as ERCOT entering any EEA level. [e11]
- **Link to rrs** (cites e2): related RRS (Responsive Reserve Service): Load Resources providing RRS are deployed during EEA Level 2. [e2]
- **Link to ecrs** (cites e2): related ECRS (ERCOT Contingency Reserve Service): Load Resources providing ECRS can be deployed at EEA Level 2. [e2]
- **Link to winter-storm-uri** (cites e9): example-of Winter Storm Uri (Feb 2021): February 2021 is the largest of the controlled-outage events in ERCOT's overview list. [e9]
- **Link to nodal-protocols** (cites e3) FLAG number-not-in-quote: 6.5, 9.4: part-of ERCOT Nodal Protocols: The EEA levels are set out in Section 6.5.9.4.2 of the Nodal Protocols. [e3]
