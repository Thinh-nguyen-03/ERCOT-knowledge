# Audit packet: ECRS (ERCOT Contingency Reserve Service) (ecrs)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS) · text copy line 900

BEFORE: …ion that transfers responsibility for energy between a buyer and a seller at a Settlement Point. Entity Any natural person, partnership, municipal corporation, cooperative corporation, association, governmental subdivision, or public or private organization. ERCOT Contingency Reserve Service (ECRS) 
QUOTE: An Ancillary Service that provides operating reserves that is intended to: (a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal; (b) Provide energy or continued Load interruption to avoid or during the implementation of an Energy Emergency Alert (EEA); (c) Provide backup regulation; and (d) Be sustained at a specified level for two consecutive hours.
AFTER:  ERCOT Critical Energy Infrastructure Information (ECEII) Specific engineering, vulnerability, or detailed design information concerning proposed or existing ERCOT System Infrastructure that: (a) Relates details about the production, generation, transportation, transmission or distribution of energy…

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (3) · text copy line 8176 · heading above: 3.17.4 ERCOT Contingency Reserve Service

BEFORE: …ay be provided through one or more of the following means: (a) From On-Line or Off-Line Resources as prescribed in the Operating Guides following a significant frequency deviation in the ERCOT System; and (b) Either manually or by using a four-second signal to provide energy on deployment by ERCOT. 
QUOTE: (3) ECRS may be used to provide energy prior to or during the implementation of an EEA. ECRS provides Resource capacity, or capacity from interruptible Load available for deployment on ten minutes' notice.
AFTER:  (4) ECRS may be provided by: (a) Unloaded, On-Line Generation Resource capacity; (b) Quick Start Generation Resources (QSGRs); (c) Load Resources that may or may not be controlled by high-set, under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in sync…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.4, paragraph (4)(a)-(f) · text copy line 8178 · heading above: 3.17.4 ERCOT Contingency Reserve Service

BEFORE: …b) Either manually or by using a four-second signal to provide energy on deployment by ERCOT. (3) ECRS may be used to provide energy prior to or during the implementation of an EEA. ECRS provides Resource capacity, or capacity from interruptible Load available for deployment on ten minutes' notice. 
QUOTE: (4) ECRS may be provided by: (a) Unloaded, On-Line Generation Resource capacity; (b) Quick Start Generation Resources (QSGRs); (c) Load Resources that may or may not be controlled by high-set, under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Insert Section 3.17.5 below upon system i…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (7) · text copy line 8082 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: … limit established by ERCOT for sale of RRS to other Market Participants. The total amount of RRS using the Load Resource procured by ERCOT is also limited to the capacity established in paragraph (4) above, up to the lesser of the 60% limit or the limit established by ERCOT in paragraph (4) above. 
QUOTE: (7) Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing ECRS. The amount of Load Resources excluding CLRs that may or may not be on high-set under-frequency relays providing ECRS is limited to 50% of the total ERCOT ECRS requirement.
AFTER:  (8) The amount of ECRS that a QSE can self-arrange using a Load Resource excluding CLRs is limited to the lower of: (a) 50% of its ECRS Ancillary Service Obligation; or (b) A reduced percentage of its ECRS Ancillary Service Obligation based on the limit established by ERCOT in paragraph (7) above. …

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (2)(a)-(b) · text copy line 3001 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …ended to: (a) Help restore the frequency to 60 Hz within ten minutes of a significant frequency deviation; (b) Provide energy to avoid, or during the implementation of, an EEA; (c) Provide backup to Reg-Up; and (d) Provide energy upon detection of insufficient available capacity for net load ramps. 
QUOTE: (2) ERCOT shall deploy ECRS to meet NERC Standards and other performance criteria as specified in these Protocols and the Operating Guides by taking one or more of the following actions: (a) ERCOT shall issue ECRS deployment Dispatch Instructions, specifying the required MW output, over ICCP for Resources awarded ECRS with a Resource Status of ONSC. (b) Dispatch Instruction for deployment of energy from Load Resources via electronic Messaging System.
AFTER:  (3) Energy from Resources providing ECRS may also be manually deployed by ERCOT pursuant to Section 6.5.9, Emergency Operations. (4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves. (5) Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resour…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (1) · text copy line 2991 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …wer augmentation. (11) ERCOT shall provide a notification to all QSEs via the ERCOT website when any Non-Spin capacity is deployed on the ERCOT System showing the time, MW quantity and the anticipated duration of the deployment. 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service 
QUOTE: (1) ECRS is intended to: (a) Help restore the frequency to 60 Hz within ten minutes of a significant frequency deviation; (b) Provide energy to avoid, or during the implementation of, an EEA; (c) Provide backup to Reg-Up; and (d) Provide energy upon detection of insufficient available capacity for net load ramps.
AFTER:  (2) ERCOT shall deploy ECRS to meet NERC Standards and other performance criteria as specified in these Protocols and the Operating Guides by taking one or more of the following actions: (a) ERCOT shall issue ECRS deployment Dispatch Instructions, specifying the required MW output, over ICCP for Re…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (4) · text copy line 3009 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …ver ICCP for Resources awarded ECRS with a Resource Status of ONSC. (b) Dispatch Instruction for deployment of energy from Load Resources via electronic Messaging System. (3) Energy from Resources providing ECRS may also be manually deployed by ERCOT pursuant to Section 6.5.9, Emergency Operations. 
QUOTE: (4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves.
AFTER:  (5) Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resources telemetering a Resource Status of ONSC, the QSE's obligation to deliver ECRS remains in effect until ERCOT issues a recall instruction. (6) For Generation Resources, ESRs, and CLRs providing ECRS, Base Points inc…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section F, Impact of ECRS on Real-Time Market Prices · text copy line 2025

BEFORE: … - Annual, Peak and Net Peak Load !""#$#%C'#(#$)G+,(C-).)/+G0C1'O3 ""! "!! *! F! (! ?"!!!@ABCH7 ?(C@?"!!! ?a"!EFd7e0>W0?(C ?!@?a"!EFd7e fg! KOLWL09A9 '! C! B! A! #! "! ! #!#B #!#C HII-.L0HNOP.4O05SSOP #!#B #!#C 7O.809W.;0<W-P #!#B #!#C 7O.80=O>09W.;0<W-P F. Impact of ECRS on Real-Time Market Prices 
QUOTE: The implementation of ECRS in June 2023 had a profound impact on the ERCOT wholesale market because its restrictive deployment criteria created high prices from artificial shortage conditions.
AFTER:  Our analysis in the 2023 State of the Market report indicated that ECRS deployment practices resulted in approximately $12 billion in excess costs in the real-time market. Since then, the pricing impact of ECRS has been less severe, largely because of supply and demand fundamentals. Solar and energ…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4223

BEFORE: …)9W;< C,D C,! %,D %,! #!!" RST4P RSTU9 PNRN S:RN RRN 9;<=;>?@A;BCaBREBMNBc<CGefeC> +!" G!" F!" E!" A,D D!" A,! C!" #,D %!" #,! A!" !,D #!" !,! !"#A"%&'E")G+),"E-)./0")12)!#GP/4/G% D,! !" J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 A!A% A!AC A!AD ECRS and NSRS Provision by ESRs 
QUOTE: ESRs' provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025.
AFTER:  This increase is noteworthy because the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282. 42 | 2025 State of the Marke…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4225

BEFORE: … 4 J . /M/ J J M N O P 4 A!A% A!AC A!AD ECRS and NSRS Provision by ESRs ESRs' provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025. This increase is noteworthy because the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. 
QUOTE: The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282.
AFTER:  42 | 2025 State of the Market Report / / Ancillary Services As of this report, the NSRS duration requirement remains four hours, despite mounting evidence that this constraint distorts market outcomes. However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set …

### e13 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Responsive Reserve (RRS), paragraph (a) · text copy line 2711

BEFORE: …-----------------------------------------------------------------------------------+ Resource Status The operational state of a Resource as provided in Section 3.9, Current Operating Plan (COP). Responsive Reserve (RRS) An Ancillary Service that provides operating reserves that are intended to: (a) 
QUOTE: Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load;
AFTER:  (b) After the first few seconds of a significant frequency deviation, help arrest and stabilize frequency; and (c) Provide energy or continued Load interruption during the implementation of the Energy Emergency Alert (EEA). Retail Business Day (see Business Day) Retail Business Hour Any hour within…

### e14 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.4, ERCOT Contingency Reserve Service Capacity Monitoring Criteria, paragraph (2) · text copy line 849 · heading above: 8.1.1.3.4 ERCOT Contingency Reserve Service Capacity Monitoring Criteria

BEFORE: …pacity of each Resource to provide ECRS. ERCOT shall consider for each Resource the Resource Status, the On-Line versus Off-Line status, actual generation or Load, the Ancillary Service award for ECRS, the HSL, the LSL, ramp rates, relay status, and the Resource's qualification to provide ECRS. (2) 
QUOTE: For the ECRS capability provided for a Resource to ERCOT by the Resource's QSE, the amount of ECRS reflected in that capability must be limited to the amount of ECRS that can be sustained by the Resource for at least one hour.
AFTER:  (3) For Load Resources, excluding Controllable Load Resources, that have an ECRS award, the amount of ECRS capacity provided must be measured as the Load Resource's average Load level in the last five minutes. (4) A Resource that is capable of providing ECRS and that has a Resource Status code of O…

### e15 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, Revision Description · text copy line 40

BEFORE: …) makes changes to the duration requirements for the following Ancillary Services in preparation for Real-Time Co-optimization plus Batteries (RTC+B): | | | | | | | | | | - Updates duration requirements for Regulation Service and Responsive Reserve (RRS) to thirty minutes; and | | | | | | | | | | - 
QUOTE: Updates duration requirement for ERCOT Contingency Reserve Service (ECRS) to one hour.
AFTER:  | | | | | | | | | | This NPRR also updates the requirement for Reliability Unit Commitment (RUC) studies to use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR). | | | | | | | | | | ERCOT invites review of this NPRR from the RTC+B Task Force (RTCBTF). The…

### e16 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT Report, Effective Date · text copy line 14

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon system implementation of PR447, Real-Time Co-Optimization (RTC)
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e17 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.7, paragraph (2) · text copy line 735 · heading above: 8.1.1.2.1.7 ERCOT Contingency Reserve Service Qualification

BEFORE: …ication (1) ECRS may be provided by: (a) Unloaded Generation Resources that are On-Line; (b) QSGRs; (c) Load Resources that may or may not be controlled by high-set under-frequency relays; (d) Generation Resources operating in the synchronous condenser fast-response mode; (e) CLRs; or (f) ESRs. (2) 
QUOTE: Resources are required to undergo a qualification test to provide ECRS when the Resource is On-Line, which shall at least include the ability to provide applicable telemetry and market submissions. The amount of ECRS for which the Resource is qualified when On-Line will be limited to the amount of capacity that can be ramped or unloaded within ten minutes. Off-Line ECRS can only be provided by qualified QSGRs.
AFTER:  (3) The amount of ECRS provided by individual Generation Resources and Load Resources is limited to ten times its telemetered emergency ramp rate. Each Resource providing ECRS must be capable of ramping the Resource's Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS,…

### e18 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.7, paragraph (3) · text copy line 737 · heading above: 8.1.1.2.1.7 ERCOT Contingency Reserve Service Qualification

BEFORE: …ast include the ability to provide applicable telemetry and market submissions. The amount of ECRS for which the Resource is qualified when On-Line will be limited to the amount of capacity that can be ramped or unloaded within ten minutes. Off-Line ECRS can only be provided by qualified QSGRs. (3) 
QUOTE: The amount of ECRS provided by individual Generation Resources and Load Resources is limited to ten times its telemetered emergency ramp rate. Each Resource providing ECRS must be capable of ramping the Resource's Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS, and must be able to maintain the awarded level of deployment for at least one hour.
AFTER:  The amount of ECRS on a Generation Resource may be further limited by requirements of the Operating Guides. (4) A Load Resource must be loaded and capable of unloading the awarded amount of ECRS within ten minutes of instruction by ERCOT and must either be immediately responsive to system frequency…

### e19 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.7, paragraph (4) · text copy line 739 · heading above: 8.1.1.2.1.7 ERCOT Contingency Reserve Service Qualification

BEFORE: …amping the Resource's Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS, and must be able to maintain the awarded level of deployment for at least one hour. The amount of ECRS on a Generation Resource may be further limited by requirements of the Operating Guides. (4) 
QUOTE: A Load Resource must be loaded and capable of unloading the awarded amount of ECRS within ten minutes of instruction by ERCOT and must either be immediately responsive to system frequency or be interrupted by action of under-frequency relays with settings as specified by the Operating Guides.
AFTER:  (5) Any QSE providing ECRS shall provide communications equipment to receive ERCOT telemetered control deployments of ECRS. (6) Load Resources providing ECRS must provide a telemetered output signal, including breaker status and status of the under-frequency relay, if applicable. (7) Each QSE shall…

### e20 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.4, paragraph (4) · text copy line 853 · heading above: 8.1.1.3.4 ERCOT Contingency Reserve Service Capacity Monitoring Criteria

BEFORE: …ed to the amount of ECRS that can be sustained by the Resource for at least one hour. (3) For Load Resources, excluding Controllable Load Resources, that have an ECRS award, the amount of ECRS capacity provided must be measured as the Load Resource's average Load level in the last five minutes. (4) 
QUOTE: A Resource that is capable of providing ECRS and that has a Resource Status code of ONSC and an ECRS award is considered to be providing capability to the extent that it is not using that capacity to provide energy or other Ancillary Services.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e21 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.4, paragraph (1), lead-in and (a) · text copy line 1172 · heading above: 8.1.1.4.4 ERCOT Contingency Reserve Service Energy Deployment Criteria

BEFORE: … ERCOT that identifies actions taken to correct performance deficiencies and the disqualified Load Resource successfully passes qualification test as specified in Section 8.1.1.1, Ancillary Service Qualification and Testing. 8.1.1.4.4 ERCOT Contingency Reserve Service Energy Deployment Criteria (1) 
QUOTE: Control performance during periods in which ERCOT has manually deployed ECRS shall be based on the requirements below and failure to meet any one of these requirements shall be reported to the Reliability Monitor as non-compliance: (a) For a Resource providing ECRS with a Resource Status of ONSC, once the ECRS is deployed, the Resource must maintain the response until recalled by ERCOT.
AFTER:  (b) For QSEs with Load Resources, excluding Controllable Load Resources, ten minutes following deployment instruction the sum of the QSE's Load Resource response shall not be less than 95% of the requested MW deployment, nor more than 150% of the lesser of the following: (i) The QSE's awards for EC…

### e22 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.4, paragraph (1)(b) · text copy line 1176 · heading above: 8.1.1.4.4 ERCOT Contingency Reserve Service Energy Deployment Criteria

BEFORE: … the requirements below and failure to meet any one of these requirements shall be reported to the Reliability Monitor as non-compliance: (a) For a Resource providing ECRS with a Resource Status of ONSC, once the ECRS is deployed, the Resource must maintain the response until recalled by ERCOT. (b) 
QUOTE: For QSEs with Load Resources, excluding Controllable Load Resources, ten minutes following deployment instruction the sum of the QSE's Load Resource response shall not be less than 95% of the requested MW deployment, nor more than 150% of the lesser of the following: (i) The QSE's awards for ECRS from non-Controllable Load Resources; or (ii) The requested MW deployment.
AFTER:  The QSE's portfolio shall maintain this response until recalled. (c) For Load Resources, excluding Controllable Load Resources, associated with a QSE that does not successfully deploy as defined under this Section, ERCOT shall evaluate, identify and investigate each Load Resource that contributed t…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (5) · text copy line 3011 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …n for deployment of energy from Load Resources via electronic Messaging System. (3) Energy from Resources providing ECRS may also be manually deployed by ERCOT pursuant to Section 6.5.9, Emergency Operations. (4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves. (5) 
QUOTE: Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resources telemetering a Resource Status of ONSC, the QSE's obligation to deliver ECRS remains in effect until ERCOT issues a recall instruction.
AFTER:  (6) For Generation Resources, ESRs, and CLRs providing ECRS, Base Points include ECRS energy as well as any other energy dispatched by SCED. A Resource must be able to be fully dispatched by SCED to its ECRS Ancillary Service award within the ten-minute time frame according to its telemetered ramp …

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (6) · text copy line 3013 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …l use SCED and Non-Spin as soon as practicable to recover ECRS reserves. (5) Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resources telemetering a Resource Status of ONSC, the QSE's obligation to deliver ECRS remains in effect until ERCOT issues a recall instruction. (6) 
QUOTE: For Generation Resources, ESRs, and CLRs providing ECRS, Base Points include ECRS energy as well as any other energy dispatched by SCED. A Resource must be able to be fully dispatched by SCED to its ECRS Ancillary Service award within the ten-minute time frame according to its telemetered ramp rate that reflects the Resource's capability of providing ECRS.
AFTER:  (7) Each Resource providing ECRS shall meet the deployment performance requirements specified in Section 8.1.1.4.2, Responsive Reserve Energy Deployment Criteria. (8) ERCOT shall issue deployment instructions for Load Resources providing ECRS via XML. Such instructions shall contain the MW requeste…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), ASDC price table · text copy line 2434 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …as follows: --------------------------------------------------------------------------------------- Parameter Unit Current Value --------------------------- ------------- --------------------------------------------- Reg-Up Max Demand Price $/MWh VOLL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 
QUOTE: ECRS Max Demand Price $/MWh VOLL + 50
AFTER:  Non-Spin Max Demand Price $/MWh VOLL --------------------------------------------------------------------------------------- (b) Beyond the MCL, the nonlinear segments of the AORDC are disaggregated as follows: (i) First, extract evenly spaced 1 MW AORDC segments extending from the MCL to the minim…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), fixed parameters table · text copy line 2418 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …--------------------------------------------------------- Fixed parameters are defined as follows: ------------------------------------------------------------------------ Parameter Unit Current Value ------------ ------------- --------------------------------------------- RUPCT % 90 RRSPCTMAX % 90 
QUOTE: ECRSPCTMAX % 30 ECRSMWMIN MW 40
AFTER:  NSMWMIN MW 10 ------------------------------------------------------------------------ Further, the quantities of each Ancillary Service product procured until the MCL is satisfied are priced as follows: --------------------------------------------------------------------------------------- Paramet…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), variable table · text copy line 2382 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------------------------------------ Variable Unit Definition -------------- ------ ---------------------------------------------------------------------------------------------------------------------------------------------------------- MCL MW 
QUOTE: Minimum Contingency Level - the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW.
AFTER:  RUREQ MW Total capacity of Reg-Up in the Ancillary Service Plan RRSREQ MW Total capacity of RRS in the Ancillary Service Plan ECRSREQ MW Total capacity of ECRS in the Ancillary Service Plan RUPCT % Fixed percentage of Reg-Up included in the MCL RRSPCTMAX % Maximum RRS percentage included in the MCL…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(b)(iii) · text copy line 2445 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form the nonlinear portion of the Reg-Up ASDC; (ii) Second, extract evenly spaced 1 MW AORDC segments extending from MCL to the minimum RRS price. These segments form the nonlinear portion of the RRS ASDC; 
QUOTE: (iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and
AFTER:  (iv) Assign any remaining 1 MW segments of the AORDC priced above $0.01/MWh to Non-Spin. The minimum prices for Reg-Up and RRS are defined as follows: ------------------------------------------------------------------------------ Parameter Unit Current Value ------------------ ------------- -------…

### e29 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, paragraph (4)(a)-(b) · text copy line 8228 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: … than 59.70 Hz; and (d) The amount of RRS awarded to a Resource capable of providing Fast Frequency Response (FFR) must be less than or equal to its 15-minute rated capacity. The initiation setting of the automatic self-deployment of the Resource providing RRS as FFR must be no lower than 59.85 Hz. 
QUOTE: (4) For ECRS: (a) The full amount of ECRS that can be awarded to an On-Line Generation Resource or ESR must be less than or equal to ten times the Emergency Ramp Rate; (b) The full amount of ECRS that can be awarded to a Quick Start Generation Resource (QSGR) must be less than or equal to its proven ten-minute capability as demonstrated pursuant to paragraph (16) of Section 8.1.1.2, General Capacity Testing Requirements;
AFTER:  (c) Generation Resources operating in the synchronous condenser fast-response mode may be awarded ECRS up to the Generation Resource's proven 20-second response capability (which may be 100% of the HSL). The initiation setting of the automatic under-frequency relay setting shall not be lower than 5…

### e30 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.4, paragraph (2)(b) · text copy line 8174 · heading above: 3.17.4 ERCOT Contingency Reserve Service

BEFORE: …roviding energy to avoid getting into or during an Energy Emergency Alert (EEA). (2) ECRS may be provided through one or more of the following means: (a) From On-Line or Off-Line Resources as prescribed in the Operating Guides following a significant frequency deviation in the ERCOT System; and (b) 
QUOTE: Either manually or by using a four-second signal to provide energy on deployment by ERCOT.
AFTER:  (3) ECRS may be used to provide energy prior to or during the implementation of an EEA. ECRS provides Resource capacity, or capacity from interruptible Load available for deployment on ten minutes' notice. (4) ECRS may be provided by: (a) Unloaded, On-Line Generation Resource capacity; (b) Quick St…

### e31 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Introduction · text copy line 61

BEFORE: …tage level for Resources providing FFR and Load Resources, excluding Controllable Load Resources, specified in the Protocols is changed, that change will be reflected in these requirements. ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin) Requirement Details Introduction 
QUOTE: ECRS is a service that is provided using capacity that is capable of being ramped to a specified output level within 10 minutes.
AFTER:  ECRS may be provided by unloaded, On-Line Generation Resource capacity; Quick Start Generation Resources (QSGRs); Load Resources that may or may not be controlled by high-set, underfrequency relays; Controllable Load Resources; and Generation Resources operating in synchronous condenser fast-respon…

### e32 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 79

BEFORE: …ad and 6 hour ahead historic net load forecast error and the combined ECRS and Non-Spin requirements from the optimization. ECRS requirement may be increased further to account for the capacity needed to recover frequency following a large unit trip. [Diagram AI-generated content may be incorrect.] 
QUOTE: The frequency recovery related capacity for ECRS is computed for each hour in every month as capacity needed following a supply-side trip to recover frequency; will be based on expected diurnal load, solar, and wind patterns; will cover 70% of historic system inertia conditions for each hour for the month and will include an adjustment to account for Regulation Up requirement in the hour.
AFTER:  ERCOT will post the monthly amounts for ECRS and Non-Spin requirements for the upcoming year on the MIS. Following this posting, ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Ope…

### e33 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 75

BEFORE: …tment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources. Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes. 
QUOTE: The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria.
AFTER:  The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) =…

### e34 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18 (September 14-15, 2026), summary of proposed changes · text copy line 826

BEFORE: …e - i.e., same methodology as approved on September 23, 2025. • ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve Service (Non-Spin) o Change to the methodology to update the risk credit parameter during daytime hours used in the probabilistic model to identify minimum requirements. 
QUOTE: Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories.
AFTER:  o Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold. In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resou…

### e35 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18, summary of proposed changes · text copy line 831

BEFORE: …. Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories. o 
QUOTE: Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold.
AFTER:  In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resources providing RRS using Primary Frequency Response will remain at 1,377 MW. • Key Factors Influencing Issue: ERCOT Contingency Reserve Service and Non-Spinnin…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section F, Impact of ECRS on Real-Time Market Prices (page 32 (OCR)) · text copy line 2027

BEFORE: …O05SSOP #!#B #!#C 7O.809W.;0<W-P #!#B #!#C 7O.80=O>09W.;0<W-P F. Impact of ECRS on Real-Time Market Prices The implementation of ECRS in June 2023 had a profound impact on the ERCOT wholesale market because its restrictive deployment criteria created high prices from artificial shortage conditions. 
QUOTE: Our analysis in the 2023 State of the Market report indicated that ECRS deployment practices resulted in approximately $12 billion in excess costs in the real-time market.
AFTER:  Since then, the pricing impact of ECRS has been less severe, largely because of supply and demand fundamentals. Solar and energy storage capacity have increased significantly since 2023, and neither 2024 nor 2025 had as many days of extreme summer heat as 2023. The net effect was a marked reduction…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2023-3 (page 156 (OCR)) · text copy line 9253

BEFORE: …ort | 133 / / Recommendations real-time market because operators often delayed releasing ECRS capacity for dispatch until scarcity pricing had already begun. As a result, ECRS deployment practices caused significant, unnecessary market costs in 2023, which we estimated at approximately $12 billion. 
QUOTE: After 2023, the impact of ERCOT's ECRS deployment practices decreased substantially, falling to $720 million in 2024 and $90 million in 2025. This reduction in excess cost primarily resulted from increased supply from new solar and energy storage resources. These resources created enough market surplus to make ECRS deployment practices less impactful on real-time market outcomes. ERCOT maintained a policy of releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation, effectively forcing the real-time market into artificial shortage conditions.
AFTER:  RTC's implementation in December 2025 largely resolved this issue. Under RTC, the real-time market will automatically go short on reserves according to the prices set by the ASDCs, eliminating the need for manual ECRS deployment decisions. In addition, several of our other recommendations on ancill…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section F, Impact of ECRS on Real-Time Market Prices (page 34 (OCR)) · text copy line 2130

BEFORE: …, the ECRS deployment criteria before RTC negatively affected reliability by dispatching ESRs excessively for energy while keeping gas turbines in reserve. Simulations that released ECRS in these events preserved ESR state of charge (SOC) by reducing ESR net injections by 10% throughout the events. 
QUOTE: With RTC's implementation in December 2025, ERCOT operators no longer manually deploy ECRS. Instead, SCED can make economic trade-offs between procuring energy and ancillary services in real time using reserve shortage prices under an ancillary service demand curve (ASDC).
AFTER:  This eliminates the need for manual deployments and enables more efficient, marketdriven decisions.6 6 The ASDCs defined by NPRR 1268 sponsored by the IMM, should result in further improvements in market performance vis a vis ECRS. See https://www.ercot.com/mktrules/issues/NPRR1268 for more details…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Figure 25 inset table, ECRS row (page 62 (OCR)) · ocr copy line 2720, OCR page 62

BEFORE: …ice Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74 5 @Reg-Up NSRS $81.56 $23.24 $15.53 $7.13 $3.65 a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 
QUOTE: ECRS - - $73.18 $9.56 $2.65
AFTER:  2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under RTC High NSRS prices also occurred in December, likely because of uncertainty about RTC. Looking at hourly day-ahead market prices for NSRS for the month of December, 15 of the 24 highest- pri…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.2, ECRS Provision from NCLRs (page 65 (OCR)) · text copy line 4294

BEFORE: …cot.com/misdownload/servlets/mirDownload?doclookupId=1188179018 2025 State of the Market Report | 43 / / Ancillary Services ECRS Provision from NCLRs NCLR participation in ECRS has increased in recent years, although ERCOT limits NCLRs to no more than 50 percent of the ECRS Ancillary Services Plan. 
QUOTE: In 2025, ECRS prices did not clear at a premium to RRS, unlike in 2023 and 2024. However, initial RTC results show that ECRS consistently clears above RRS, driven in part by differences in duration requirements across ancillary service products in RTC.
AFTER:  If this price premium persists, more NCLRs may shift from RRS to ECRS. NSRS Provision from NCLRs Although NCLRs have participated in NSRS since November 2022, after ERCOT implemented NPRR 109334 and NPRR 1101,35 participation has remained limited. To qualify to provide NSRS, NCLRs cannot have an ac…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1 (page 65 (OCR)) · text copy line 4239

BEFORE: …ld set the duration for NSRS at two hours upon the implementation of the long-foretold Dispatchable Reliability Reserve Service (DRRS). DRRS is statutorily required to carry a four-hour duration requirement. Reducing the NSRS duration requirement to two hours would be a step in the right direction. 
QUOTE: However, we continue to recommend that ERCOT adopt a one-hour duration requirement for both ECRS and NSRS, as detailed in Recommendation 2024-2.
AFTER:  2. NCLR Participation in Ancillary Services ERCOT allows qualified load resources to offer into the ancillary services markets. In addition to CLRs, discussed in Chapter II.F.1, there are also NCLRs that are not controlled by SCED. Because CLRs and NCLRs differ in their response to system condition…

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A2 (page 163 (OCR)) · ocr copy line 6943, OCR page 163

BEFORE: … the Market Report a ===== page 163 (OCR) ===== Appendix: Real-Time Co-Optimization Table A2: Convergence in Energy and AS Prices in the Day-Ahead and Real-Time Markets December 5, 2026, through February 2026 Average Average Average Day-Ahead Real-Time DART Price Price Premium $ per MWh $ per MWh % 
QUOTE: Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420
AFTER:  Compared to recent trends in convergence for energy between the day-ahead and real-time markets, the day-ahead premium for AS has been very high in the early days of RTC. Two events account for a disproportionate share of this premium. Excluding RegDown, elevated day- ahead market prices on Decembe…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.D, AS Methodology is Misaligned with Reliability Outcomes (OCR) · text copy line 4470

BEFORE: …to the excessive procurement volumes in more detail. 2. The AS Methodology is Misaligned with Reliability Outcomes The following list describes the parameters used in ERCOT's 2026 AS Methodology for ECRS and NSRS and each parameter's impact on the procurement targets for these ancillary services: • 
QUOTE: Setting operating reserve targets to meet a one-in-ten standard for the probability of entering a "Watch," defined as reserves dropping below 3,000 MW, rather than for the probability of firm load shed, defined as reserves dropping below 1,500 MW. This parameter increases the AS Plan target level by approximately 43%.
AFTER:  • Assessing the operational risk that NSRS is meant to manage based on the six hour-ahead forecast error for demand and generation from intermittent renewables. This parameter inflates the target level of the AS Plan by 57% more than our recommendation of one hour-ahead forecast error. • Accreditin…

### e44 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Ancillary Services, ECRS deployment (NPRR 1224) · text copy line 1775

BEFORE: …esulted in excess ECRS-related costs of less than $1 billion in 2024, compared to the $12 billion estimated for 2023. Nevertheless, deployment practices remain a source of inefficiency that warrants further attention. In March 2024, ERCOT proposed NPRR 1224 to address concerns with ECRS deployment. 
QUOTE: NPRR 1224 would have established formal deployment criteria based on real-time market conditions, deploying in 500 MW increments when power balance violations exceeded 40 MW for 10 consecutive minutes. Additionally, the capacity released to SCED would be subject to a $750 per MWh energy offer floor, for which there is no reasonable basis. Hence, we found this proposal to be flawed and it was ultimately rejected by the Commission in July 2024.
AFTER:  However, ERCOT still implemented the deployment process proposed by NPRR 1224, but without the $750 per MWh energy offer floor. Once RTC is implemented in December 2025, these deployment issues will largely be resolved. Under RTC, the real-time market will automatically go short on reserves accordi…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1): ERCOT Contingency Reserve Service (ECRS) is an ancillary service providing operating reserves intended to restore RRS within ten minutes after a deviation that significantly depletes it, to provide energy or continued load interruption to avoid or during an EEA, to provide backup regulation, and to be sustained for two consecutive hours. [e1] (The "two consecutive hours" wording is the Section 2 definition as saved; see Duration below and Open items.)
- **How it works #1** (cites e3, e4, e2, e30): ECRS capacity can come from unloaded on-line generation, Quick Start Generation Resources, load resources with or without high-set under-frequency relays, and controllable load resources, generation resources operating in synchronous condenser fast-response mode, and ESRs. [e3] Load resources other than CLRs may supply no more than 50% of the total ECRS requirement, and ERCOT posts a monthly minimum capacity required from resources providing ECRS. [e4] ECRS provides resource capacity, or interruptible load, available for deployment on ten minutes' notice. [e2] ECRS may be deployed manually or by a four-second signal to provide energy. [e30]
- **How it works #2** (cites e17, e18, e29, e19, e20): **Qualification.** A Resource must pass a qualification test when On-Line, covering at least telemetry and market submissions; the On-Line qualification is limited to what can be ramped or unloaded within ten minutes, and Off-Line ECRS can only be provided by qualified QSGRs. [e17] A Resource's ECRS is limited to ten times its telemetered emergency ramp rate; it must ramp its award within ten minutes of the notice to deploy and maintain the awarded level for at least one hour. [e18] In the Ancillary Service limits section the same ten-times-Emergency-Ramp-Rate cap applies to On-Line Generation Resources and ESRs, and a QSGR's ECRS is limited to its proven ten-minute capability. [e29] A Load Resource must be loaded and able to unload the awarded amount within ten minutes and either respond immediately to frequency or be interrupted by under-frequency relays. [e19] A Resource in status ONSC with an ECRS award counts as providing capability to the extent it is not using that capacity for energy or other Ancillary Services. [e20]
- **How it works #3** (cites e5, e6, e23, e24, e7): **Deployment and recall.** ERCOT deploys ECRS by Dispatch Instruction over ICCP to resources with status ONSC, or by message to load resources. [e5] The protocol lists four purposes: restore frequency to 60 Hz within ten minutes, provide energy to avoid or during an EEA, back up Reg-Up, and provide energy when capacity is insufficient for net load ramps. [e6] After a manual deployment to Load Resources (excluding CLRs) or Resources telemetering ONSC, the QSE's obligation to deliver ECRS remains until ERCOT issues a recall instruction. [e23] For Generation Resources, ESRs and CLRs, Base Points include ECRS energy plus any other SCED energy, and the Resource must be able to be fully dispatched to its ECRS award within ten minutes at its telemetered ramp rate. [e24] ERCOT then uses SCED and Non-Spin as soon as practicable to recover the ECRS reserves it used. [e7]
- **How it works #4** (cites e21, e22): **Performance.** For manual deployments, failing any performance requirement is reported to the Reliability Monitor as non-compliance; a Resource in ONSC must maintain its response until recalled. [e21] Ten minutes after the deployment instruction a QSE's Load Resource portfolio response must be at least 95% of the requested MW and not more than 150% of the lesser of its non-CLR ECRS awards or the requested deployment. [e22]
- **How it works #5** (cites e32, e33, e31, e34, e35) FLAG number-not-in-quote: 2026, 2027: **How much ERCOT buys.** The 2026 methodology says the frequency-recovery capacity for ECRS is the capacity needed after a supply-side trip, covers 70% of historic system inertia conditions for each hour and includes an adjustment for the Reg-Up requirement. [e32] The combined ECRS and Non-Spin requirement comes from a Monte Carlo optimization that takes risk and credits 60% of historically available capacity at night (HE23-HE5) and 25% in day hours (HE6-HE22); [e33] ERCOT's description of the capacity is "capable of being ramped to a specified output level within 10 minutes." [e31] ERCOT's 2027 proposal (Board item, September 14-15, 2026; outcome not in the saved sources) would raise the daytime credit to 50% for online and offline generation and 60% for ESRs with four-hour sustainable duration, and lower the convergence threshold from Watch (3,000 MW) to EEA1 (2,500 MW). [e34][e35]
- **How it works #6** (cites e25, e26, e27, e28) FLAG number-not-in-quote: 4.4, 40 MW: **Pricing in the ASDC.** In Protocol Section 4.4.12 the ECRS Max Demand Price is VOLL + 50, [e25] the fixed parameters include an ECRS maximum percentage of 30 and a minimum of 40 MW in the Minimum Contingency Level calculation, [e26] and the MCL is 3,000 MW, defined as the minimum reserves ERCOT considers necessary to avoid a system-wide failure. [e27] Beyond the MCL, the remaining 1 MW segments of the AORDC are assigned alternately to ECRS and Non-Spin until both requirements are met (current text; NPRR1309 would replace this upon implementation). [e28]
- **ERCOT context #2** (cites e36, e37, e44, e38): Deployment history: the IMM's 2023 analysis estimated that ECRS deployment practices produced approximately $12 billion in excess real-time costs, [e36] which it says fell to $720 million in 2024 and $90 million in 2025, mainly because new solar and storage supply made the practices less impactful; ERCOT kept a policy of releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation. [e37] ERCOT's March 2024 NPRR 1224 would have set deployment criteria (500 MW increments when power balance violations exceeded 40 MW for 10 consecutive minutes) with a $750 per MWh energy offer floor on released capacity; the IMM said the floor had no reasonable basis, and the Commission rejected the proposal in July 2024, though ERCOT implemented the deployment process without the floor. [e44] With RTC in December 2025 operators no longer manually deploy ECRS; SCED trades energy and AS using ASDC reserve shortage prices. [e38]
- **ERCOT context #3** (cites e39, e40, e42) FLAG number-not-in-quote: 2026, 420%, 36%: Prices: ECRS annual average DAM prices were $73.18 (2023), $9.56 (2024) and $2.65 (2025) per MWh in the IMM's 2025 report (OCR copy). [e39] The IMM says ECRS cleared at no premium to RRS in 2025, unlike 2023 and 2024, but initial RTC results show ECRS consistently clearing above RRS, driven partly by duration differences. [e40] In the IMM's Table A2, covering the first RTC months (the OCR header reads "December 5, 2026, through February 2026", apparently a typo), the day-ahead ECRS average was $3.67 against $0.71 in real time, a 420% premium (energy: $50.21 against $37.03, 36%). [e42]
- **ERCOT context #4** (cites e15, e16, e12, e41, e14, e1): The duration requirement changed with RTC. NPRR1282 updated the ECRS duration requirement to one hour, effective upon system implementation of Real-Time Co-Optimization. [e15][e16] The IMM reports the same: two hours until RTC was implemented, one hour since. [e12] The IMM continues to recommend one hour for both ECRS and NSRS (Recommendation 2024-2). [e41] The current Protocols' capacity monitoring criteria limit a Resource's ECRS capability to what it can sustain for at least one hour. [e14] The general description of ECRS in Section 3 of the Protocols still reads "two consecutive hours". [e1]
- **ERCOT context #5** (cites e43) FLAG number-not-in-quote: 2026: The IMM argues ERCOT's 2026 methodology sets targets too high: setting the one-in-ten standard against Watch (3,000 MW) rather than firm load shed (1,500 MW) increases the AS Plan target by approximately 43%, in the IMM's estimate. [e43]
- **Key facts #2** (cites e2, e18): - ECRS is deployable on ten minutes' notice and must ramp within ten minutes. [e2][e18]
- **Key facts #3** (cites e18): - ECRS is capped at ten times the Resource's emergency ramp rate. [e18]
- **Key facts #6** (cites e39) FLAG number-not-in-quote: 2023, 2024, 2025: - ECRS annual average DAM price: $73.18 (2023), $9.56 (2024), $2.65 (2025). [e39]
- **Key facts #8** (cites e25): - ECRS Max Demand Price in the ASDC table is VOLL + 50. [e25]
- **Say it like this #1** (cites e1, e3, e6, e11, e38): ECRS is the contingency reserve that backs up RRS and regulation: it restores frequency within ten minutes and supplies energy before or during an emergency. It can come from generators, quick-start units and load, and ESRs supply a large share. Since RTC, SCED decides when it is used rather than an operator. [e1][e3][e6][e11][e38]
- **Common confusion #1** (cites e13, e1, e5, e7, e38, e23) FLAG number-not-in-quote: 6.5, 7.6, 2.4: ECRS and RRS are often swapped. RRS is intended to arrest frequency decay within the first few seconds of a significant frequency deviation, [e13] and ECRS is intended to restore RRS within ten minutes after that. [e1] ERCOT deploys ECRS by Dispatch Instruction. [e5] ECRS is also not Non-Spin: ERCOT uses Non-Spin to recover ECRS after it is deployed. [e7] "Deployed" no longer means an operator decision under RTC: the IMM says operators no longer manually deploy ECRS. [e38] The Protocol text on manual deployment and recall remains in the saved Section 6.5.7.6.2.4. [e23]
- **Questions #8** (cites e9, e37): The IMM says restrictive deployment criteria created high prices from artificial shortage conditions, with ERCOT releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation. [e9][e37]
- **Questions #10** (cites e21): For manual deployments, failure to meet any performance requirement is reported to the Reliability Monitor as non-compliance, and a Resource in ONSC must maintain the response until ERCOT recalls it. [e21]
- **Questions #12** (cites e40, e4): The IMM says NCLRs can supply no more than 50% of the ECRS Plan, and that if ECRS keeps clearing above RRS under RTC, more NCLRs may shift from RRS to ECRS. [e40][e4]
- **Questions #14** (cites e25, e27, e28): The ECRS Max Demand Price is VOLL + 50 until the Minimum Contingency Level (3,000 MW) is satisfied, and beyond it the remaining AORDC segments are split alternately between ECRS and Non-Spin. [e25][e27][e28]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): ECRS is an Ancillary Service; see that topic for plan, obligations and cost. [e1]
- **Link to rrs** (cites e1): related RRS (Responsive Reserve Service): ECRS restores RRS after a deviation that significantly depletes it. [e1]
- **Link to regulation** (cites e6): related Regulation Up / Down: ECRS provides backup to Reg-Up. [e6]
- **Link to non-spin** (cites e7): related Non-Spinning Reserve: ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e7]
- **Link to eea** (cites e1, e6): related EEA (Energy Emergency Alert) Levels: ECRS provides energy to avoid or during an EEA. [e1][e6]
- **Link to energy-storage-resource** (cites e11): related Energy Storage Resource (ESR): ESRs provide a large share of ECRS. [e11]
- **Link to asdc** (cites e25, e26) FLAG number-not-in-quote: 4.4: related ASDC (Ancillary Service Demand Curves): The ECRS demand curve has a Max Demand Price of VOLL + 50 in the Section 4.4.12 table, and its quantity is capped as a share of the Minimum Contingency Level. [e25][e26]
- **Link to ordc** (cites e28) FLAG number-not-in-quote: 4.4: related ORDC (Operating Reserve Demand Curve): ECRS and Non-Spin share the remaining AORDC segments alternately under the current Section 4.4.12 disaggregation. [e28]
- **Link to rtc-b** (cites e38): related RTC+B (Real-Time Co-optimization + Batteries): With RTC ERCOT operators no longer manually deploy ECRS; SCED trades energy and AS using ASDC shortage prices. [e38]
- **Link to market-power-mitigation** (cites e44): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The IMM argued NPRR 1224's $750 energy offer floor on released ECRS capacity had no reasonable basis, and the Commission rejected the proposal in July 2024. [e44]

