# Audit packet: Ancillary Services (AS) (ancillary-services)

kind concept · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (1) · text copy line 8096 · heading above: 3.17.1 Regulation Service

BEFORE: …ale of ECRS to other Market Participants. The total amount of ECRS using the Load Resource excluding CLRs procured by ERCOT is also limited to the lesser of the 50% limit or the limit established by ERCOT in paragraph (8) above. 3.17 Ancillary Service Capacity Products 3.17.1 Regulation Service (1) 
QUOTE: Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency.
AFTER:  The amount of Reg-Up capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2) · text copy line 8102 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: … able to decrease energy output when deployed and increase energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Down must be able to increase Load when deployed and decrease Load when recalled. ERCOT dispatches Reg-Down by an LFC signal. 3.17.2 Responsive Reserve Service 
QUOTE: (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases.
AFTER:  (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlle…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (1) · text copy line 8162 · heading above: 3.17.4 ERCOT Contingency Reserve Service

BEFORE: … consumption based on an ERCOT Extensible Markup Language (XML) instruction within 30 minutes; and (ii) Maintaining that deployment until recalled; or (d) ESRs. (2) The Non-Spin may be deployed by ERCOT to increase available reserves in Real-Time operations. 3.17.4 ERCOT Contingency Reserve Service 
QUOTE: (1) ERCOT Contingency Reserve Service (ECRS) is a service that is provided using capacity that can be sustained at a specified level for two consecutive hours and is used to restore or maintain the frequency of the ERCOT System: (a) In response to significant depletion of RRS; (b) As backup Regulation Service; and (c) By providing energy to avoid getting into or during an Energy Emergency Alert (EEA).
AFTER:  (2) ECRS may be provided through one or more of the following means: (a) From On-Line or Off-Line Resources as prescribed in the Operating Guides following a significant frequency deviation in the ERCOT System; and (b) Either manually or by using a four-second signal to provide energy on deployment…

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Spinning Reserve (Non-Spin) · text copy line 1833

BEFORE: …quired to be metered by applicable transmission or distribution tariff. Non-Opt-In Entity (NOIE) An EC or MOU that does not offer Customer Choice. Non-Opt-In Entity (NOIE) Load Zone A Load Zone established by a NOIE or a group of NOIEs using a one-time NOIE election. Non-Spinning Reserve (Non-Spin) 
QUOTE: An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours.
AFTER:  Non-Spin may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, that is reserved exclusively for use for this service and that can be sustained at a specified level for at least four consecutive hours. +---------------------------------------------------…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraphs (4)-(5) · text copy line 2296 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …Day-Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) The DAM shall use the same ASDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. 
QUOTE: (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market · text copy line 3821

BEFORE: …g resources. 2025 State of the Market Report | 37 / / Ancillary Services B. Ancillary Services Market Ancillary Services are operating reserves that ERCOT procures to address risks associated with contingencies, variations in supply and demand, and forecast errors for load and renewable generation. 
QUOTE: Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation.
AFTER:  Consumers pay the cost of AS procured through the market. Specifically, ERCOT allocates procurement costs to Load Serving Entities (LSEs) based on their real-time adjusted metered load. Market participants representing qualified resources may self-schedule ancillary services using those resources t…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e28 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.3, paragraph (1)(a) · text copy line 8124 · heading above: 3.17.3 Non-Spinning Reserve Service

BEFORE: … by high-set under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs. 3.17.3 Non-Spinning Reserve Service (1) Non-Spinning Reserve (Non-Spin) is provided by using: 
QUOTE: (a) Generation Resources, whether On-Line or Off-Line, capable of: (i) Being synchronized and ramped to a specified output level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours;
AFTER:  +-----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] | | | | (ii) Running at a specified output level for at least two consecutive hours; | +=============================…

### e32 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts · text copy line 66

BEFORE: …mendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency Event. | | | | | | | | | | - 
QUOTE: Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT's analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT's obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
AFTER:  | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. A one-hour duration for RUC studies is appropriate to both respect an E…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section on AS shortages (page A-7 (OCR)) · text copy line 9645

BEFORE: …t, rather than going short on AS, ERCOT consistently goes long on NSRS. This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC). 
QUOTE: The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC. The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW.
AFTER:  To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include the excess volume. This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as …

## Statements to check (new or changed since the last audit)

- **Link to regulation** (cites e2): composed-of Regulation Up / Down: Regulation Up is capacity that can respond to signals from ERCOT within five seconds to changes from scheduled system frequency. [e2]
- **Link to rrs** (cites e3): composed-of RRS (Responsive Reserve Service): RRS is the automatically self-deployed service that restores or maintains frequency after a significant deviation. [e3]
- **Link to ecrs** (cites e4): composed-of ECRS (ERCOT Contingency Reserve Service): ECRS is capacity sustained for two consecutive hours, used for depleted RRS, backup regulation and energy to avoid or during an EEA. [e4]
- **Link to non-spin** (cites e5): composed-of Non-Spinning Reserve: Non-Spin is capacity that can be synchronized and ramped within 30 minutes. [e5]
- **Link to asdc** (cites e9): determines ASDC (Ancillary Service Demand Curves): ERCOT builds an ancillary service demand curve for each service from the AS Plan. [e9]
- **Link to rtc-b** (cites e11): related RTC+B (Real-Time Co-optimization + Batteries): RTC changed day-ahead AS awards from physical obligations to financial positions. [e11]
- **Link to eea** (cites e4): related EEA (Energy Emergency Alert) Levels: ECRS provides energy to avoid getting into or during an Energy Emergency Alert. [e4]
- **Link to energy-storage-resource** (cites e13): related Energy Storage Resource (ESR): ESRs supply most regulation and large shares of the other services. [e13]
- **Link to ordc** (cites e41): related ORDC (Operating Reserve Demand Curve): The IMM says the individual up-reserve ASDCs, aggregated, conform to the Aggregate Operating Reserve Demand Curve (AORDC), a fixed curve defined to 10,000 MW. [e41]
- **Link to non-spin** (cites e28): composed-of Non-Spinning Reserve: Non-Spin must be able to run at its specified output for at least four consecutive hours. [e28]
- **Link to reliability-standard** (cites e32): related ERCOT Reliability Standard: ERCOT's NPRR1282 analysis ties Regulation and RRS duration to NERC BAL-001 performance when SCED is unavailable. [e32]

