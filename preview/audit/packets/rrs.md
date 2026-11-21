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

### e13 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: RRS Requirement Details, third paragraph (effective 01/01/2026) · text copy line 51

BEFORE: … the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours. The equivalency ratio will be used to establish the total reserves assuming the Day-Ahead Market (DAM) will use a one to one equivalency ratio. 
QUOTE: The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use of studies and shall not be less than 1,377 MWs. The remaining capacity required for RRS will be procured from all Resources qualified to provide RRS including Load Resources. The maximum amount of RRS that can be provided by Resources providing Fast Frequency Response (FFR) is limited to 450 MW. DAM will limit the combined RRS procured from Load Resources controlled by high set under frequency relay and Resources providing FFR to 60% of the total RRS requirement. ERCOT may increase the minimum capacity required from Resources providing RRS using Primary Frequency Response if it believes that the current posted quantity will have a negative impact on reliability or if it would require additional Regulation Service to be deployed.
AFTER:  ERCOT will procure additional 200 MW of RRS for each percent of Reserve Discount Factor (RDF) when ERCOT estimates RDF to be less than 1. This adjustment will only apply for those 4-hour blocks where the 85^(th) percentile of weighted average temperate is greater than 95°F. RDFs are reviewed and ad…

### e14 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: RRS Requirement Details, third paragraph (effective 01/01/2026) · text copy line 51

BEFORE: …wn for hours in which the hourly CPS1 score was less than 140%. This value will increase to 20% if the CPS1 score falls below 100%. Responsive Reserve (RRS) Requirement Details Nodal Operating Guide Section 2.3.1.1, Obligation, sets the minimum RRS requirement for all hours under normal conditions. 
QUOTE: ERCOT will procure amounts of RRS that vary by hour of the day and by month. These RRS amounts will be published by month in six separate blocks covering four-hour intervals. These amounts will be based on expected diurnal load, solar, and wind patterns for the month, will cover 70% of historic system inertia conditions for each block of hours for the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours.
AFTER:  The equivalency ratio will be used to establish the total reserves assuming the Day-Ahead Market (DAM) will use a one to one equivalency ratio. The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use…

### e15 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: RRS Requirement Details, third paragraph (effective 01/01/2026) · text copy line 51

BEFORE: …f the total RRS requirement. ERCOT may increase the minimum capacity required from Resources providing RRS using Primary Frequency Response if it believes that the current posted quantity will have a negative impact on reliability or if it would require additional Regulation Service to be deployed. 
QUOTE: ERCOT will procure additional 200 MW of RRS for each percent of Reserve Discount Factor (RDF) when ERCOT estimates RDF to be less than 1. This adjustment will only apply for those 4-hour blocks where the 85^(th) percentile of weighted average temperate is greater than 95°F. RDFs are reviewed and adjusted based on the generators performance during an unannounced test.
AFTER:  RRS amount will be published as a monthly requirement along with the equivalency ratio for each 4-hour block. Additionally, ERCOT will make incremental adjustments to account for Resources operating in synchronous condenser fast response mode providing RRS. This adjustment will only apply to those …

### e16 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Document header · text copy line 3

BEFORE: …ERCOT Methodologies for Determining Minimum Ancillary Service Requirements 
QUOTE: ERCOT Board Recommended approval on 09/23/2025 PUC Approved on 11/06/2025 Effective Date of 01/01/2026
AFTER:  TABLE OF CONTENTS Introduction 2 Regulation Service Requirement Details 3 Responsive Reserve (RRS) Requirement Details 4 ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin) Requirement Details 5 Introduction Paragraph (2) of Protocol Section 3.16, Standards for Determining …

### e17 · `nog-02` · tier 1 · ERCOT Nodal Operating Guides, Section 2: System Operations and Control Requirements (current 2026)
locator: Section 2.3.1.1, Obligation, paragraph (1) · text copy line 621 · heading above: 2.3.1.1 Obligation

BEFORE: …--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 2.3.1 Responsive Reserve 2.3.1.1 Obligation 
QUOTE: (1) ERCOT operating reserve requirements are more restrictive than North American Electric Reliability Corporation (NERC) Reliability Standards. The RRS obligation is a minimum of 2300 MW. The amount of RRS procured may be adjusted as described in ERCOT Methodologies for Determining Ancillary Service Requirements or if ERCOT determines a reliability need for additional Ancillary Service Resources.
AFTER:  2.3.1.2 Additional Operational Details for Responsive Reserve Providers (1) ERCOT shall specify the minimum amount of RRS provided by Generation Resources as outlined in Section 2.3.1.2.1, Limit on Resources Providing RRS Using Primary Frequency Response. QSE's Generation Resources providing RRS mu…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, Resource Limits in Providing Ancillary Service, paragraph (3)(a) · text copy line 8220 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …==================================================================================================================================+ +--------------------------------------------------------------------------------------------------------------------------------------------------------+ (3) For RRS: 
QUOTE: (a) The full amount of RRS using Primary Frequency Response that can be provided by an On-Line Resource is dependent upon the verified droop characteristics of the Resource. ERCOT shall calculate and update, using the methodology described in Nodal Operating Guide Section 8, Attachment N, Procedure for Calculating RRS MW Limits for Individual Resources to Provide RRS Using Primary Frequency Response, a maximum MW amount of RRS using Primary Frequency Response for each Resource subject to verified droop performance. The default value for any newly qualified Resource not yet evaluated per Nodal Operating Guide Section 8, Attachment N shall be 20% of its Maximum Droop Response Range (MDRR).
AFTER:  A Private Use Network with a registered Resource may use the gross HSL for qualification and establishing a limit on the amount of RRS capacity that the Resource within the Private Use Network can provide; (b) Generation Resources operating in the synchronous condenser fast-response mode may be awa…

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, paragraph (3)(c)-(d) · text copy line 8224 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …eration Resources operating in the synchronous condenser fast-response mode may be awarded RRS up to the Generation Resource's proven 20-second response capability (which may be 100% of the HSL). The initiation setting of the automatic under-frequency relay setting shall not be lower than 59.80 Hz; 
QUOTE: (c) The initiation setting of the automatic under-frequency relay setting for Load Resources providing RRS shall not be lower than 59.70 Hz; and
AFTER:  (d) The amount of RRS awarded to a Resource capable of providing Fast Frequency Response (FFR) must be less than or equal to its 15-minute rated capacity. The initiation setting of the automatic self-deployment of the Resource providing RRS as FFR must be no lower than 59.85 Hz. (4) For ECRS: (a) T…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, paragraph (3)(d) · text copy line 8226 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …esponse capability (which may be 100% of the HSL). The initiation setting of the automatic under-frequency relay setting shall not be lower than 59.80 Hz; (c) The initiation setting of the automatic under-frequency relay setting for Load Resources providing RRS shall not be lower than 59.70 Hz; and 
QUOTE: (d) The amount of RRS awarded to a Resource capable of providing Fast Frequency Response (FFR) must be less than or equal to its 15-minute rated capacity. The initiation setting of the automatic self-deployment of the Resource providing RRS as FFR must be no lower than 59.85 Hz.
AFTER:  (4) For ECRS: (a) The full amount of ECRS that can be awarded to an On-Line Generation Resource or ESR must be less than or equal to ten times the Emergency Ramp Rate; (b) The full amount of ECRS that can be awarded to a Quick Start Generation Resource (QSGR) must be less than or equal to its prove…

### e21 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts, Regulation Service and RRS duration bullet · text copy line 66

BEFORE: …mendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency Event. | | | | | | | | | | - 
QUOTE: Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT's analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT's obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
AFTER:  | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. A one-hour duration for RUC studies is appropriate to both respect an E…

### e22 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.2, Responsive Reserve Qualification, paragraph (10) · text copy line 356 · heading above: 8.1.1.2.1.2 Responsive Reserve Qualification

BEFORE: …y qualified by ERCOT to provide RRS for 90 days. Within the 90-day provisional window, a Resource must successfully complete one of the Governor tests identified in the Nodal Operating Guide Section 8, Attachment C, Turbine Governor Speed Tests, before being declared fully qualified to provide RRS. 
QUOTE: (10) For Resources providing RRS and available for dispatch by SCED, the maximum quantity of RRS that a Resource is qualified to provide is limited to the amount of RRS that can be sustained by the Resource for at least 30 minutes. For all other Resources excluding non-CLRs providing FFR, the maximum quantity of RRS that a Resource is qualified to provide is limited to the amount of RRS that can be sustained by the Resource for at least one hour. The maximum quantity of FFR that any non-CLR qualified to provide FFR is limited to the amount of FFR that can be sustained by the Resource for at least 15 minutes.
AFTER:  (11) A qualification test for each Resource to provide RRS is conducted during a continuous eight-hour period agreed to by the QSE and ERCOT. ERCOT shall confirm the date and time of the test with the QSE. ERCOT shall administer the following test requirements: (a) At any time during the window, wh…

### e23 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.1, Ancillary Service Qualification and Testing, paragraph (11) · text copy line 238 · heading above: 8.1.1.1 Ancillary Service Qualification and Testing

BEFORE: …st. If a Resource has not responded to an ERCOT Dispatch Instruction in compliance with items (a) and (b) above, in either a deployment event or an FFR test, in any rolling 365-day period, it is subject to an FFR test by ERCOT. All performance evaluations will apply on an individual Resource basis. 
QUOTE: (11) ERCOT may revoke the Ancillary Service qualification of any Resource providing FFR if that Resource has two Resource performance failures, either in a manual deployment event or a frequency triggered event, within any rolling 365-day period. A performance failure is defined as a response less than 95% or more than 105% of the Resource's RRS award within 15 cycles of a triggering event or within ten minutes of an ERCOT Dispatch Instruction.
AFTER:  This shall result in disqualification of that Resource. After six months of disqualification, a Resource may reapply for qualification provided it submits a corrective action plan to ERCOT that identifies actions taken to correct performance deficiencies and the disqualified Resource successfully p…

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 66 (OCR), Chapter III.C.2, NSRS Provision from NCLRs · text copy line 4301

BEFORE: …uirements across ancillary service products in RTC. If this price premium persists, more NCLRs may shift from RRS to ECRS. NSRS Provision from NCLRs Although NCLRs have participated in NSRS since November 2022, after ERCOT implemented NPRR 109334 and NPRR 1101,35 participation has remained limited. 
QUOTE: To qualify to provide NSRS, NCLRs cannot have an active UFR, so they must choose between providing NSRS and RRS.
AFTER: 36 Because RRS is deployed less frequently than NSRS, most NCLRs participate in RRS. However, NSRS prices were considerably higher than RRS prices in 2025, and initial observations since RTC go-live indicate that this trend is continuing into 2026. If this trend continues for several years, more NCL…

### e25 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 65 (OCR), Chapter III.C.2, RRS Provision from NCLRs · ocr copy line 2861, OCR page 65 · heading above: 0.0 0%

BEFORE: …ided RRS. Table 4 shows the time-weighted average volumes of ancillary services that NCLRs supplied from 2023 through 2025. Table 4: Average Volume of Ancillary Services Provided by NCLRs RRS ECRS _NSRS Average Volume (MW) 2023 1,742 67 70 2024 1,700 164 3 2025 1,480 190 18 RRS Provision from NCLRs 
QUOTE: Although 7,568 MW of NCLRs were qualified to provide responsive reserves, they provided only 1,480 MW on average in 2025. One reason for this gap is that ERCOT requires that PFR- capable resources must provide at least 1,365 MW or 40% of the AS Plan. NCLRs cannot provide PFR and instead provide responsive reserves primarily through an under-frequency relay. UFR is a variant of RRS that automatically disconnects the load resource when system frequency drops below 59.7 Hertz (Hz) or when ERCOT issues manual deployment instructions during an Energy Emergency Alert Level 2.
AFTER:  3 See 2025 Annual Report of Demand Response in the ERCOT Region (Jan 2026), available at https:/Avww.ercot.com/misdownload/servlets/mirDownload?doclookupId=1 188179018 2025 State of the Market Report | 43 ===== page 66 (OCR) ===== Ancillary Services ECRS Provision from NCLRs NCLR participation in E…

### e26 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 67 (OCR), Chapter III.D, RRS Aggregation Impact on Market Outcomes · text copy line 4380

BEFORE: …n its awards and the corresponding clearing prices. Thus, implementing NPRR 1188 should encourage greater AS provision from CLRs. D. RRS Aggregation Impact on Market Outcomes PFR, FFR, and UFR are three separate mechanisms through which resources can provide RRS, subject to various caps and floors. 
QUOTE: Instead of clearing each type of responsive reserve separately at distinct prices, ERCOT clears them together and prorates UFR and FFR awards when the combined limit is binding.
AFTER:  Figure 28 illustrates this dynamic by comparing the UFR and FFR 37 NPRR 1131: https://www.ercot.com/mktrules/issues/NPRR1131 2025 State of the Market Report | 45 / / Ancillary Services volumes that are self-scheduled or awarded in the DAM, the remaining uncleared offers, and the ERCOT limit. !!"#A%…

### e27 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 68 (OCR), Chapter III.D, after Figure 28 · text copy line 4424

BEFORE: …<=P>O?<@7:<P9 M(NO,RRP<OJ@>S*77PA>P9 M(NB((NOCaEa> %A"!! %A!!! #A"!! #A!!! "!! ! D ( F * F D D * + , J . D ( F * F D D * + , J . %!%L %!%" Figure 28 shows that the volumes of UFR capacity that are self-scheduled, offered into the market, and/or awarded in the market all decreased from 2024 to 2025. 
QUOTE: The main driver was the increase in the minimum PFR volume requirement from 1,185 MW to 1,365 MW in the 2025 AS Methodology. No comparable change occurred in FFR offers and awards, which continued to clear below the 450 MW limit.
AFTER:  Since PFR is similarly costly for ESRs to provide, many prefer to offer PFR to avoid the risk that their FFR offers will be prorated when the combined limit is reached. This behavior likely results directly from ERCOT clearing multiple forms of responsive reserves together rather than treating them…

### e28 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 68 (OCR), Chapter III.D, after Figure 28 · text copy line 4428

BEFORE: …market, and/or awarded in the market all decreased from 2024 to 2025. The main driver was the increase in the minimum PFR volume requirement from 1,185 MW to 1,365 MW in the 2025 AS Methodology. No comparable change occurred in FFR offers and awards, which continued to clear below the 450 MW limit. 
QUOTE: Since PFR is similarly costly for ESRs to provide, many prefer to offer PFR to avoid the risk that their FFR offers will be prorated when the combined limit is reached.
AFTER:  This behavior likely results directly from ERCOT clearing multiple forms of responsive reserves together rather than treating them as distinct products with separate clearing prices, addressed in Recommendation 2019-2. E. Ancillary Service Methodology for 2026 1. Background and Summary As mentioned…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 62 (OCR), Figure 25: Ancillary Service Prices 2021-2025, inset table · ocr copy line 2714, OCR page 62

BEFORE: …n, they increased the procurement target by an additional 1,000 MW for HE 19-22 on May 20, 2025, causing the price of NSRS to average $320 per MWh during this period. These four hours accounted for 27% of the increase in the NSRS price across May. Figure 25: Ancillary Service Prices 2021-2025 $12 ; 
QUOTE: @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74
AFTER:  5 @Reg-Up NSRS $81.56 $23.24 $15.53 $7.13 $3.65 a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 ECRS - - $73.18 $9.56 $2.65 2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under…

### e30 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Market rule revisions, NPRR 1128 · ocr copy line 6497, OCR page 148

BEFORE: …-optimization.! ERCOT Market Rule Revisions ERCOT approved or introduced a number of NPRRs and OBDRRs in 2023 to reflect and implement the changes authorized by the Texas Legislature and PUCT and to implement general market improvements, as outlined below. Nodal Protocol Revision Requests (NPRRs) e 
QUOTE: NPRR 1128, Allow FFR Procurement up to FFR Limit Without Proration - Status: Approved on January 26, 2023 - Description: This NPRR sets a -$0.01 per MW lower ancillary service offer floor for Fast Frequency Response (FFR) Responsive Reserve (RRS) rather than for other RRS categories, thereby allowing, depending on relative ancillary service offers, FFR procurement up to the current FFR limit without proration with other RRS categories in the ancillary service procurement process.
AFTER:  e NPRR 1143, Provide ERCOT Flexibility to Determine When ESRs May Charge During an EEA Level 3 - Status: Approved on July 20, 2023, effective on August 1, 2023 - Description: This NPRR allows ERCOT the ability to decide when ESRs may charge during an EEA Level 3. e NPRR 1145, Use of State Estimator…

### e31 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (2)(b), pending box [NPRR1128] · text copy line 8052 · heading above: 3.16 Standards for Determining Ancillary Service Quantities
FLAG pending-box: | [NPRR1128: Replace item (b) above with the following upon system implementation:] |
BEFORE: …uency Response (FFR); +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [NPRR1128: Replace item (b) above with the following upon system implementation:]
AFTER:  | | | | (b) The maximum amount (MW) of Responsive Reserve (RRS) that can be provided by Resources capable of Fast Frequency Response (FFR) and specify the Operating Hours where prioritizing procurement of FFR up to the maximum FFR amount is beneficial in improving reliability; | +==================…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights, page 59 (OCR) · ocr copy line 2582, OCR page 59

BEFORE: …ot materially change. e May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. e Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of Reg- Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  e At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. e The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e33 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, Effective Date row · text copy line 14

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon system implementation of PR447, Real-Time Co-Optimization (RTC)
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (2) · text copy line 8045 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …------------------------------------------------------------------------------------+ 3.16 Standards for Determining Ancillary Service Quantities (1) ERCOT shall comply with the requirements for determining Ancillary Service quantities as specified in these Protocols and the ERCOT Operating Guides. 
QUOTE: (2) ERCOT shall, at least annually, determine with supporting data, the methodology for determining the quantity requirements for each Ancillary Service needed for reliability, including:
AFTER:  (a) The percentage or MW limit of ERCOT Contingency Reserve Service (ECRS) allowed from Load Resources providing ECRS; (b) The maximum amount (MW) of Responsive Reserve (RRS) that can be provided by Resources capable of Fast Frequency Response (FFR); +-----------------------------------------------…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3): **Who can provide it.** RRS can be provided by on-line generation using primary frequency response, by resources with fast frequency response (FFR) that can sustain it for up to 15 minutes, and by load resources on high-set under-frequency relays; the Protocol list also includes Controllable Load Resources, generation in synchronous condenser fast-response mode, and ESRs. [e3]
- **How it works #2** (cites e34, e16, e14, e15) FLAG number-not-in-quote: 60%: **How much is bought.** The Protocols require ERCOT to determine, at least annually, the methodology for the quantity of each ancillary service, [e34] and the Protocols themselves also state a PFR floor and a 60% combined limit (below). For 2026 the document was recommended by the ERCOT Board on 09/23/2025, approved by the PUC on 11/06/2025 and effective 01/01/2026. [e16] It publishes amounts by month in six four-hour blocks, based on expected load, solar and wind patterns and set to cover 70% of historic system inertia conditions for each block. [e14] Outside that base, ERCOT adds 200 MW of RRS for each percent of Reserve Discount Factor below 1, but only in four-hour blocks where the 85th percentile of weighted average temperature is above 95 degrees F. [e15]
- **How it works #3** (cites e13, e5, e4) FLAG number-not-in-quote: 2026: **The three limits that shape the mix.** (1) A floor on RRS from primary frequency response: the methodology says the monthly minimum shall not be less than 1,377 MW, while the Protocols' own floor is 1,150 MW. [e13][e5] ERCOT posts the monthly minimum and may raise it if it believes the posted quantity would hurt reliability or force more Regulation to be deployed. [e4][e13] (2) A cap on FFR: 450 MW in the 2026 methodology. [e13] (3) A combined cap: RRS from high-set under-frequency relay loads and FFR together is limited to 60% of the total requirement. [e4][e13]
- **How it works #4** (cites e18, e20, e19, e22): **Per-resource limits.** A generator's PFR-based RRS depends on its verified droop; a newly qualified Resource not yet evaluated defaults to 20% of its Maximum Droop Response Range. [e18] A Resource awarded RRS as FFR cannot be awarded more than its 15-minute rated capacity and must self-deploy at no lower than 59.85 Hz. [e20] Load Resources' under-frequency relay setting cannot be lower than 59.70 Hz. [e19] For qualification, a Resource dispatchable by SCED is limited to the RRS it can sustain for at least 30 minutes; other Resources (excluding non-CLRs providing FFR) are limited to one hour; and FFR from a non-CLR is limited to what it can sustain for 15 minutes. [e22]
- **How it works #5** (cites e6, e7, e8): **Deployment.** FFR resources must self-deploy within 15 cycles after frequency drops below 59.85 Hz and keep responding until it recovers. [e6] Generators and ESRs need a governor droop no greater than 5.0%. [e7] ERCOT also deploys RRS when the power needed to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability. [e8]
- **How it works #6** (cites e23): **Testing and loss of qualification.** For FFR, ERCOT may revoke qualification after two performance failures in a rolling 365-day period, where a failure is a response below 95% or above 105% of the RRS award within 15 cycles of a triggering event or ten minutes of a Dispatch Instruction. [e23]
- **ERCOT context #1** (cites e10, e11, e32, e12, e25): The IMM describes three types of RRS in the market: primary frequency response, which all generators must be able to provide; under-frequency relay (UFR) capacity from load resources that trip on a frequency drop; and FFR, overwhelmingly provided by ESRs. [e10] The IMM reports that the share of responsive reserves from FFR is capped at 450 MW. [e11] In 2025 ESRs provided on average 51% of RRS. [e32] Non-controllable load resources (NCLRs) provided an average of 1,480 MW of RRS in 2025 even though 7,568 MW were qualified; the IMM attributes part of the gap to the PFR floor (1,365 MW or 40% of the AS Plan in 2025), which NCLRs cannot meet because they respond through under-frequency relays. [e12][e25]
- **ERCOT context #2** (cites e26, e27, e28, e30, e31) FLAG number-not-in-quote: 2024: ERCOT clears the three kinds of RRS together rather than as separate products, and prorates UFR and FFR awards when the combined limit binds. [e26] The IMM says the rise in the minimum PFR requirement from 1,185 MW to 1,365 MW in the 2025 methodology was the main driver of lower UFR volumes in 2025 than in 2024, and that many ESRs prefer to offer PFR to avoid proration of FFR. [e27][e28] That is the IMM's reading of offer behaviour. NPRR1128, approved January 26, 2023, would set a -$0.01 offer floor for FFR so that FFR could be procured up to its limit without proration; in the Protocols it is still a pending box. [e30][e31]
- **ERCOT context #3** (cites e29): Prices: the IMM's annual average Responsive price table shows $300.87 (2021), $20.79 (2022), $21.04 (2023), $5.52 (2024) and $2.74 (2025) per MWh (OCR of Figure 25). [e29]
- **Key facts #2** (cites e13, e16): - 2026 methodology (effective 01/01/2026): PFR-based RRS minimum not less than 1,377 MW; FFR maximum 450 MW; relay load plus FFR at most 60% of the requirement. [e13][e16]
- **Key facts #3** (cites e5, e27, e25): - The Protocols' floor for PFR-based RRS is 1,150 MW; the 2025 methodology minimum was 1,365 MW per the IMM, up from 1,185 MW. [e5][e27][e25]
- **Key facts #4** (cites e17) FLAG number-not-in-quote: 2.3, 1.1: - Nodal Operating Guide 2.3.1.1 states an RRS obligation of a minimum of 2300 MW, adjustable per the methodology. [e17]
- **Key facts #6** (cites e33, e21): - NPRR1282 (effective date: upon system implementation of RTC) changes the RRS and Regulation duration requirement from 15 to 30 minutes. [e33][e21]
- **Key facts #7** (cites e12): - Average NCLR RRS in 2025 was 1,480 MW. [e12]
- **Timeline #1** (cites e30, e31): - 2023-01-26: NPRR1128 (FFR offer floor and procurement up to the limit) approved; still pending implementation in the Protocol text as saved. [e30][e31]
- **Timeline #2** (cites e27): - 2025: minimum PFR volume rose from 1,185 MW to 1,365 MW (IMM description of the 2025 methodology). [e27]
- **Timeline #3** (cites e16, e13): - 2025-09-23 / 2025-11-06: ERCOT Board recommends and PUC approves the methodology effective 2026-01-01 (PFR minimum 1,377 MW). [e16][e13]
- **Timeline #4** (cites e33, e21): - NPRR1282: RRS duration to 30 minutes, effective upon system implementation of RTC. [e33][e21]
- **Say it like this #1** (cites e1, e2, e3, e10, e13): RRS is the reserve that responds on its own after a significant frequency deviation, starting within the first few seconds. [e1][e2] It can come from generators with primary frequency response, FFR resources such as batteries, and load resources on under-frequency relays, but a PFR floor and an FFR cap mean the mix is managed, not free. [e3][e10][e13]
- **Common confusion #1** (cites e2, e9, e10, e26, e5, e25, e13) FLAG number-not-in-quote: 2026: RRS is not the same as ECRS. RRS is automatically self-deployed in response to a significant frequency deviation, while ECRS is intended to restore RRS within ten minutes after it is significantly depleted. [e2][e9] Also, FFR and PFR are two ways of earning RRS, not two products, and ERCOT clears them together. [e10][e26] And do not mix up the three PFR floors: 1,150 MW is in the Protocols, 1,365 MW was the 2025 methodology figure and 1,377 MW is the 2026 figure. [e5][e25][e13]
- **Questions #2** (cites e3): On-line generators with primary frequency response, FFR-capable resources that can sustain response for 15 minutes, load resources on high-set under-frequency relays, CLRs, synchronous-condenser fast-response generation and ESRs. [e3]
- **Questions #4** (cites e4, e13) FLAG number-not-in-quote: 2026: Combined RRS from high-set relay load resources and FFR resources is limited to 60% of the total RRS requirement, and the 2026 methodology caps FFR at 450 MW. [e4][e13]
- **Questions #8** (cites e25): The IMM points to the PFR floor. NCLRs cannot provide PFR and instead provide responsive reserves primarily through an under-frequency relay, and ERCOT required at least 1,365 MW or 40% of the AS Plan from PFR-capable resources in 2025. [e25]
- **Questions #10** (cites e28, e26): PFR is similarly costly for ESRs to provide, and when the combined UFR plus FFR limit is reached FFR awards are prorated, so PFR avoids that risk. [e28][e26]
- **Questions #12** (cites e23): ERCOT may revoke its qualification if it has two performance failures in a rolling 365-day period; a failure is a response under 95% or over 105% of its RRS award within 15 cycles of a triggering event or ten minutes of a Dispatch Instruction. [e23]
- **Questions #14** (cites e15): In four-hour blocks where the 85th percentile of weighted average temperature exceeds 95 degrees F, ERCOT procures an extra 200 MW per percent of RDF below 1. [e15]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): The Protocols define RRS as an Ancillary Service; see that topic for plan, obligations and cost. [e1]
- **Link to regulation** (cites e8): contrasts-with Regulation Up / Down: ERCOT deploys RRS when restoring frequency would exceed the Reg-Up ramping capability. [e8]
- **Link to ecrs** (cites e9): related ECRS (ERCOT Contingency Reserve Service): ECRS restores RRS after a significant depletion. [e9]
- **Link to eea** (cites e1): related EEA (Energy Emergency Alert) Levels: RRS provides energy or continued load interruption during an EEA. [e1]
- **Link to energy-storage-resource** (cites e3, e10): related Energy Storage Resource (ESR): ESRs provide RRS through primary frequency response or fast frequency response. [e3][e10]
- **Link to non-spin** (cites e24): contrasts-with Non-Spinning Reserve: A non-controllable load resource that wants to provide Non-Spin cannot have an active under-frequency relay, so it must choose between Non-Spin and RRS, the IMM says. [e24]
- **Link to ancillary-services** (cites e13): part-of Ancillary Services (AS): The annual AS methodology sets the RRS quantity along with the other products, and the PUCT approves it. [e13]
- **Link to clr** (cites e3): related CLR (Controllable Load Resource): Controllable Load Resources are one of the Resource types that may provide RRS. [e3]
- **Link to rtc-b** (cites e33, e21): related RTC+B (Real-Time Co-optimization + Batteries): NPRR1282 sets RRS and Regulation duration to 30 minutes upon implementation of Real-Time Co-Optimization. [e33][e21]

