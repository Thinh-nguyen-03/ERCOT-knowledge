# Audit packet: RRS (Responsive Reserve Service) (rrs)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Responsive Reserve (RRS) · text copy line 2709

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Resource Status The operational state of a Resource as provided in Section 3.9, Current Operating Plan (COP). Responsive Reserve (RRS) 
QUOTE: An Ancillary Service that provides operating reserves that are intended to: (a) Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load; (b) After the first few seconds of a significant frequency deviation, help arrest and stabilize frequency; and (c) Provide energy or continued Load interruption during the implementation of the Energy Emergency Alert (EEA).
AFTER:  Retail Business Day (see Business Day) Retail Business Hour Any hour within a Retail Business Day. Retail Electric Provider (REP) As defined in P.U.C. SUBST. R. 25.5, Definitions, an Entity that sells electric energy to retail Customers in Texas but does not own or operate generation assets and is …

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, paragraph (3)(a)-(c) · text copy line 8106 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: …7.2 Responsive Reserve Service (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. 
QUOTE: (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlled by high-set under-frequency relays;
AFTER:  (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs. 3.17.3 Non-Spinning Reserve Service (1) Non-Spinning Reserve (Non-Spin) is provided by using: (a) Generation Resources, whether On…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.2, paragraph (3) · text copy line 2914 · heading above: 6.5.7.6.2.2 Deployment of Responsive Reserve (RRS)

BEFORE: …CLRs, by an electronic Messaging System; (c) RRS energy deployment by automatic action of high-set under-frequency relays as a result of a significant frequency deviation; and (d) By Dispatch Instruction for deployment of RRS from Resources with a Resource Status of ONSC or Resources providing FFR. 
QUOTE: (3) ERCOT shall deploy RRS to respond to a frequency deviation when the power requirement to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability.
AFTER:  Deployment of RRS on Load Resources, excluding CLRs, must be as described in Section 6.5.9.4, Energy Emergency Alert. (4) Energy from RRS Resources may also be deployed by ERCOT under Section 6.5.9, Emergency Operations. (5) For Resources providing RRS with a Resource Status of ONSC, ERCOT shall de…

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS), item (a) · text copy line 902

BEFORE: …t a Settlement Point. Entity Any natural person, partnership, municipal corporation, cooperative corporation, association, governmental subdivision, or public or private organization. ERCOT Contingency Reserve Service (ECRS) An Ancillary Service that provides operating reserves that is intended to: 
QUOTE: (a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal;
AFTER:  (b) Provide energy or continued Load interruption to avoid or during the implementation of an Energy Emergency Alert (EEA); (c) Provide backup regulation; and (d) Be sustained at a specified level for two consecutive hours. ERCOT Critical Energy Infrastructure Information (ECEII) Specific engineeri…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market, description of RRS · text copy line 3841

BEFORE: …moment to moment and maintain system frequency. • Responsive Reserve Service (RRS). Responsive reserves can respond within 10 minutes and are needed to restore system frequency during rapidly developing contingencies such as unplanned generator outages, rather than to meet normal load fluctuations. 
QUOTE: ERCOT procures three types of responsive reserves: (1) primary frequency response (PFR), which all generators must be able to provide and which responds automatically to deviations in system frequency; (2) Under Frequency Relay (UFR), which deploys by tripping NCLRs after a sufficient drop in frequency; and (3) Fast Frequency Response (FFR), which is overwhelmingly provided by energy storage resources (ESRs) that can respond to deviations in frequency within 30 cycles.
AFTER:  • ERCOT Contingency Reserve Service (ECRS). ECRS is the latest addition to ERCOT's suite of ancillary services. Its purpose is to restore frequency within 10 minutes of a significant frequency deviation and recover deployed regulation service. It also compensates for intra-hour net load forecast un…

### e13 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: RRS Requirement Details, third paragraph (effective 01/01/2026) · text copy line 51

BEFORE: … the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours. The equivalency ratio will be used to establish the total reserves assuming the Day-Ahead Market (DAM) will use a one to one equivalency ratio. 
QUOTE: The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use of studies and shall not be less than 1,377 MWs. The remaining capacity required for RRS will be procured from all Resources qualified to provide RRS including Load Resources. The maximum amount of RRS that can be provided by Resources providing Fast Frequency Response (FFR) is limited to 450 MW. DAM will limit the combined RRS procured from Load Resources controlled by high set under frequency relay and Resources providing FFR to 60% of the total RRS requirement. ERCOT may increase the minimum capacity required from Resources providing RRS using Primary Frequency Response if it believes that the current posted quantity will have a negative impact on reliability or if it would require additional Regulation Service to be deployed.
AFTER:  ERCOT will procure additional 200 MW of RRS for each percent of Reserve Discount Factor (RDF) when ERCOT estimates RDF to be less than 1. This adjustment will only apply for those 4-hour blocks where the 85^(th) percentile of weighted average temperate is greater than 95°F. RDFs are reviewed and ad…

### e21 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts, Regulation Service and RRS duration bullet · text copy line 66

BEFORE: …mendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency Event. | | | | | | | | | | - 
QUOTE: Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT's analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT's obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
AFTER:  | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. A one-hour duration for RUC studies is appropriate to both respect an E…

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 66 (OCR), Chapter III.C.2, NSRS Provision from NCLRs · text copy line 4301

BEFORE: …uirements across ancillary service products in RTC. If this price premium persists, more NCLRs may shift from RRS to ECRS. NSRS Provision from NCLRs Although NCLRs have participated in NSRS since November 2022, after ERCOT implemented NPRR 109334 and NPRR 1101,35 participation has remained limited. 
QUOTE: To qualify to provide NSRS, NCLRs cannot have an active UFR, so they must choose between providing NSRS and RRS.
AFTER: 36 Because RRS is deployed less frequently than NSRS, most NCLRs participate in RRS. However, NSRS prices were considerably higher than RRS prices in 2025, and initial observations since RTC go-live indicate that this trend is continuing into 2026. If this trend continues for several years, more NCL…

### e33 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, Effective Date row · text copy line 14

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon system implementation of PR447, Real-Time Co-Optimization (RTC)
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): The Protocols define RRS as an Ancillary Service; see that topic for plan, obligations and cost. [e1]
- **Link to regulation** (cites e8): contrasts-with Regulation Up / Down: ERCOT deploys RRS when restoring frequency would exceed the Reg-Up ramping capability. [e8]
- **Link to ecrs** (cites e9): related ECRS (ERCOT Contingency Reserve Service): ECRS restores RRS after a significant depletion. [e9]
- **Link to eea** (cites e1): related EEA (Energy Emergency Alert) Levels: RRS provides energy or continued load interruption during an EEA. [e1]
- **Link to energy-storage-resource** (cites e3, e10): related Energy Storage Resource (ESR): ESRs provide RRS through primary frequency response or fast frequency response. [e3][e10]
- **Link to non-spin** (cites e24): contrasts-with Non-Spinning Reserve: A non-controllable load resource that wants to provide Non-Spin cannot have an active under-frequency relay, so it must choose between Non-Spin and RRS, the IMM says. [e24]
- **Link to ancillary-services** (cites e13): part-of Ancillary Services (AS): The annual AS methodology sets the RRS quantity along with the other products, and the PUCT approves it. [e13]
- **Link to clr** (cites e3): related CLR (Controllable Load Resource): Controllable Load Resources are one of the Resource types that may provide RRS. [e3]
- **Link to rtc-b** (cites e33, e21): related RTC+B (Real-Time Co-optimization + Batteries): NPRR1282 sets RRS and Regulation duration to 30 minutes upon implementation of Real-Time Co-Optimization. [e33][e21]

