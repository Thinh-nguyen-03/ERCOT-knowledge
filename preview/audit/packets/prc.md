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

## Statements to check

- **Definition #1** (cites e1): Physical Responsive Capability (PRC) is a representation of the total amount of frequency responsive resource capability on-line in Real-Time. [e1]
- **How it works #1** (cites e2, e3, e10): ERCOT computes an ERCOT-wide PRC as the sum of eight components, one of which is ESR capacity capable of providing primary frequency response. [e2][e3] Reserve Discount Factors are used in the PRC calculation, and the Load Resource factors for CLRs are subject to TAC review and approval. [e10]
- **How it works #2** (cites e4): ERCOT displays the rolling ERCOT-wide PRC on its website and updates it every ten seconds for the current Operating Day. [e4]
- **ERCOT context #1** (cites e5, e6, e9, e7, e11): PRC is the measure the Protocols use to decide when conditions are an emergency: ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA level. [e5] A Watch is tied to PRC below 3,000 MW, EEA Level 1 is declared when PRC falls below 2,500 MW and is not projected to recover within 30 minutes, and at EEA Level 3 firm load shed is directed to recover 1,500 MW of PRC. [e6][e9][e7] The IMM uses the same lines when it speaks of "reserves": a Watch is reserves below 3,000 MW and firm load shed risk is reserves below 1,500 MW. [e11]
- **Key facts #1** (cites e1): - PRC is the total frequency-responsive resource capability on-line in Real-Time. [e1]
- **Key facts #2** (cites e2, e3): - The ERCOT-wide PRC is a sum of eight components, including ESR capacity capable of providing primary frequency response. [e2][e3]
- **Key facts #3** (cites e4): - ERCOT posts a rolling PRC view updated every ten seconds. [e4]
- **Key facts #4** (cites e9): - EEA Level 1: PRC below 2,500 MW and not projected to recover within 30 minutes. [e9]
- **Key facts #5** (cites e6, e7) FLAG number-not-in-quote: 6.5, 9.4: - Watch for PRC below 3,000 MW (Section 6.5.9.4.1); load shed at Level 3 aims to recover 1,500 MW of PRC. [e6][e7]
- **Say it like this #1** (cites e1, e6, e7): PRC is ERCOT's measure of the total frequency-responsive Resource capability on-line in Real-Time. [e1] The emergency steps, from a Watch at 3,000 MW to load shed around 1,500 MW, are keyed to that number. [e1][e6][e7]
- **Common confusion #1** (cites e1, e10): Do not read PRC as a plain count of total capacity. The Protocols define it as frequency responsive Resource capability on-line in Real-Time, and reserve discount factors are used in the calculation. [e1][e10]
- **Questions #2** (cites e6, e9, e7): A Watch can be issued for PRC below 3,000 MW, EEA Level 1 is declared for PRC below 2,500 MW and not projected to recover within 30 minutes, and Level 3 load shed aims to recover 1,500 MW of PRC. [e6][e9][e7]
- **Questions #4** (cites e4): On the ERCOT website, as a rolling ERCOT-wide view updated every ten seconds. [e4]
- **Questions #6** (cites e3): ESR capacity capable of providing primary frequency response is a PRC component. [e3]
- **Link to eea** (cites e5): determines EEA (Energy Emergency Alert) Levels: PRC and system frequency determine the Emergency Notice and EEA level. [e5]
- **Link to operating-notices** (cites e6): determines Operating Notices (OCN, Advisory, Watch, Emergency): A Watch can be issued for PRC below 3,000 MW. [e6]
- **Link to ordc** (cites e12): related ORDC (Operating Reserve Demand Curve): See the ORDC topic for how reserve levels were turned into price adders before the ORDC adder was replaced by a set of ASDCs. [e12]
- **Link to rrs** (cites e8) FLAG number-not-in-quote: 3.16: related RRS (Responsive Reserve Service): Section 3.16 sets a minimum capacity for RRS provided using Primary Frequency Response. [e8]
- **Link to energy-storage-resource** (cites e3): related Energy Storage Resource (ESR): ESR capacity capable of primary frequency response counts toward PRC. [e3]
- **Link to load-shed** (cites e7): related Load Shed / Rotating Outages: At EEA Level 3 ERCOT directs firm load shed to recover 1,500 MW of PRC. [e7]
