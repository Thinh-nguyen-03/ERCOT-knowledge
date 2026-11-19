# Audit packet: RRS (Responsive Reserve Service) (rrs)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Responsive Reserve (RRS) · text copy line 2709

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Resource Status The operational state of a Resource as provided in Section 3.9, Current Operating Plan (COP). Responsive Reserve (RRS) 
QUOTE: An Ancillary Service that provides operating reserves that are intended to: (a) Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load; (b) After the first few seconds of a significant frequency deviation, help arrest and stabilize frequency; and (c) Provide energy or continued Load interruption during the implementation of the Energy Emergency Alert (EEA).
AFTER:  Retail Business Day (see Business Day) Retail Business Hour Any hour within a Retail Business Day. Retail Electric Provider (REP) As defined in P.U.C. SUBST. R. 25.5, Definitions, an Entity that sells electric energy to retail Customers in Texas but does not own or operate generation assets and is …

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2) · text copy line 8102 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: … able to decrease energy output when deployed and increase energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Down must be able to increase Load when deployed and decrease Load when recalled. ERCOT dispatches Reg-Down by an LFC signal. 3.17.2 Responsive Reserve Service 
QUOTE: (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases.
AFTER:  (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlle…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, paragraph (3)(a)-(c) · text copy line 8106 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: …7.2 Responsive Reserve Service (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. 
QUOTE: (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlled by high-set under-frequency relays;
AFTER:  (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs. 3.17.3 Non-Spinning Reserve Service (1) Non-Spinning Reserve (Non-Spin) is provided by using: (a) Generation Resources, whether On…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (4) · text copy line 8069 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (4) Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing RRS using Primary Frequency Response. The remaining capacity required for RRS may be supplied by all Resources qualified to provide RRS, provided that RRS from Load Resources on high-set under-frequency relays and Resources providing FFR shall be limited to 60% of the total ERCOT RRS requirement.
AFTER:  ERCOT may increase the minimum capacity required from Resources providing RRS using Primary Frequency Response if it believes that the current posted quantity will have a negative impact on reliability or if it would require additional Regulation Service to be deployed. +---------------------------…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (2)(c) · text copy line 8058 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …======================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW.
AFTER:  (3) The ERCOT Board shall review and recommend approval of ERCOT's methodology for determining the minimum Ancillary Service requirements, any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin), the minimum …

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.2, paragraph (14) · text copy line 2936 · heading above: 6.5.7.6.2.2 Deployment of Responsive Reserve (RRS)

BEFORE: …ed to deploy the next available Resource. (13) RRS provided from a Generation Resource or ESR shall be responsive to frequency deviations as defined in Section 8.5.1.1, Governor in Service. Generation Resources and ESRs providing RRS must have a Governor droop setting that is not greater than 5.0%. 
QUOTE: (14) RRS provided from a Resource capable of FFR shall self-deploy their obligated response within 15 cycles after frequency drops below 59.85 Hz and must continue to provide a response until the frequency increases above that level.
AFTER:  Resources which require recharging may do so once the frequency increases above 59.990 Hz. (15) RRS provided by interruptible Load shall have automatic under-frequency relay setting set at no lower than 59.70 Hz. (16) ERCOT shall deploy RRS to meet NERC Control Performance Standards and other perfo…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.2, paragraph (13) · text copy line 2934 · heading above: 6.5.7.6.2.2 Deployment of Responsive Reserve (RRS)

BEFORE: … extent that ERCOT deploys a Load Resource that is not a CLR and that has chosen a block deployment option, ERCOT shall either deploy the entire award or, if only partial deployment is needed, skip the Load Resource with the block deployment option and proceed to deploy the next available Resource. 
QUOTE: (13) RRS provided from a Generation Resource or ESR shall be responsive to frequency deviations as defined in Section 8.5.1.1, Governor in Service. Generation Resources and ESRs providing RRS must have a Governor droop setting that is not greater than 5.0%.
AFTER:  (14) RRS provided from a Resource capable of FFR shall self-deploy their obligated response within 15 cycles after frequency drops below 59.85 Hz and must continue to provide a response until the frequency increases above that level. Resources which require recharging may do so once the frequency i…

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

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, RRS Provision from ESRs · text copy line 4159

BEFORE: …from ESRs Batteries can provide two distinct types of responsive reserves. In addition to the primary frequency response capability that conventional generators provide, batteries can also provide fast frequency response, a variant of RRS that operates via relay in response to frequency deviations. 
QUOTE: The share of responsive reserves composed of resources providing FFR is capped at 450 MW.
AFTER:  In this section, we note additional limits on RRS that restrict participation by the type of RRS capability or resource type. In section D of this chapter, we describe how aggregating the three RRS capabilities into one product affects offer behavior and market outcomes. Figure 27: Real-Time Provis…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3791

BEFORE: … NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS. • 
QUOTE: At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS.
AFTER:  • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 58 MW of NSRS. CLRs shifted to NSRS in 2025 because NSRS was the highest-priced AS product throughout the year. • At the end of this chapter, we recommend an AS Methodology that uses assessment c…

## Statements to check

- **Definition #1** (cites e1, e2): Responsive Reserve (RRS) is an ancillary service providing operating reserves meant to arrest frequency decay in the first few seconds of a significant frequency deviation, to help stabilize frequency afterwards, and to provide energy or continued load interruption during an Energy Emergency Alert. [e1] It is automatically self-deployed by resources in a way that changes their real power. [e2]
- **How it works #1** (cites e3, e4, e5): RRS can be provided by on-line generation using primary frequency response, by resources with fast frequency response (FFR) that can sustain it for up to 15 minutes, and by load resources on high-set under-frequency relays. [e3] ERCOT posts a monthly minimum capacity that must come from resources using primary frequency response, and the Protocols set that minimum no lower than 1,150 MW. [e4][e5] Load Resources on high-set under-frequency relays and FFR resources together are limited to 60% of the total RRS requirement. [e4]
- **How it works #2** (cites e6, e7, e8): Deployment rules are physical. FFR resources must self-deploy within 15 cycles after frequency drops below 59.85 Hz and keep responding until it recovers. [e6] Generators and ESRs providing RRS need a governor droop setting no greater than 5.0%. [e7] ERCOT also deploys RRS when the power needed to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability. [e8]
- **ERCOT context #1** (cites e10, e11, e12): The IMM describes three types of RRS in the market: primary frequency response, which all generators must be able to provide; under-frequency relay (UFR) capacity from load resources that trip on a frequency drop; and FFR, overwhelmingly provided by ESRs. [e10] The share of responsive reserves from FFR is capped at 450 MW. [e11] In 2025 non-controllable load resources (NCLRs) provided an average of 1,480 MW of RRS. [e12]
- **Key facts #1** (cites e2): - RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. [e2]
- **Key facts #2** (cites e4): - RRS from high-set under-frequency relay load and FFR resources is limited to 60% of the total RRS requirement. [e4]
- **Key facts #3** (cites e5): - The minimum PFR-based RRS capacity is not less than 1,150 MW. [e5]
- **Key facts #4** (cites e6): - FFR must self-deploy within 15 cycles of frequency falling below 59.85 Hz. [e6]
- **Key facts #5** (cites e11): - IMM: FFR is capped at 450 MW of responsive reserves. [e11]
- **Say it like this #1** (cites e1, e2, e10): RRS is the reserve that responds on its own, within seconds, after a significant frequency deviation. It comes from generator governors, fast-responding batteries and interruptible load on under-frequency relays. [e1][e2][e10]
- **Common confusion #1** (cites e2, e9, e10): RRS is not the same as ECRS. RRS is automatically self-deployed in response to a significant frequency deviation, while ECRS is intended to restore RRS within ten minutes after it is significantly depleted. [e2][e9] Also, FFR and PFR are two ways of earning RRS, not two products. [e10]
- **Questions #2** (cites e3): On-line generators with primary frequency response, FFR-capable resources that can sustain response for 15 minutes, and load resources on high-set under-frequency relays, among others in the Protocols. [e3]
- **Questions #4** (cites e4, e11): Combined RRS from high-set relay load resources and FFR resources is limited to 60% of the total RRS requirement, and the IMM reports an FFR cap of 450 MW. [e4][e11]
- **Questions #6** (cites e9): ECRS, which is intended to restore RRS within ten minutes after a deviation that significantly depletes it. [e9]
- **Link to ancillary-services** (cites e2): part-of Ancillary Services (AS): RRS is one of the ancillary services in the AS Plan; see that topic for plan, obligations and cost. [e2]
- **Link to regulation** (cites e8): contrasts-with Regulation Up / Down: ERCOT deploys RRS when restoring frequency would exceed the Reg-Up ramping capability. [e8]
- **Link to ecrs** (cites e9): related ECRS (ERCOT Contingency Reserve Service): ECRS restores RRS after a significant depletion. [e9]
- **Link to eea** (cites e1): related EEA (Energy Emergency Alert) Levels: RRS provides energy or continued load interruption during an EEA. [e1]
- **Link to energy-storage-resource** (cites e3, e10): related Energy Storage Resource (ESR): ESRs provide RRS through primary frequency response or fast frequency response. [e3][e10]
