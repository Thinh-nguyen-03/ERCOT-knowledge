# Audit packet: Non-Spinning Reserve (non-spin)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Spinning Reserve (Non-Spin) · text copy line 1833

BEFORE: …quired to be metered by applicable transmission or distribution tariff. Non-Opt-In Entity (NOIE) An EC or MOU that does not offer Customer Choice. Non-Opt-In Entity (NOIE) Load Zone A Load Zone established by a NOIE or a group of NOIEs using a one-time NOIE election. Non-Spinning Reserve (Non-Spin) 
QUOTE: An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours. Non-Spin may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, that is reserved exclusively for use for this service and that can be sustained at a specified level for at least four consecutive hours.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.3, Non-Spinning Reserve Service, paragraph (1)(a) · text copy line 8122 · heading above: 3.17.3 Non-Spinning Reserve Service

BEFORE: …sponse for up to 15 minutes; (c) Load Resources controlled by high-set under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs. 3.17.3 Non-Spinning Reserve Service 
QUOTE: (1) Non-Spinning Reserve (Non-Spin) is provided by using: (a) Generation Resources, whether On-Line or Off-Line, capable of: (i) Being synchronized and ramped to a specified output level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours;
AFTER:  +-----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] | | | | (ii) Running at a specified output level for at least two consecutive hours; | +=============================…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.3, paragraph (1)(b) · text copy line 8137 · heading above: 3.17.3 Non-Spinning Reserve Service

BEFORE: …upon system implementation:] | | | | (ii) Running at a specified output level for at least two consecutive hours; | +=========================================================================================+ +-----------------------------------------------------------------------------------------+ 
QUOTE: (b) CLRs qualified for Dispatch by Security-Constrained Economic Dispatch (SCED) and capable of: (i) Ramping to an ERCOT-instructed consumption level within 30 minutes; and (ii) Consuming at the ERCOT-instructed level for at least four consecutive hours;
AFTER:  +-----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] | | | | (ii) Consuming at the ERCOT-instructed level for at least two consecutive hours; | +=========================…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.3, Non-Spinning Reserve Service Deployment, paragraph (1) · text copy line 2950 · heading above: 6.5.7.6.2.3 Non-Spinning Reserve Service Deployment

BEFORE: …aging System; and (c) RRS energy deployment from Load Resources and Generation Resources operating in synchronous condenser fast-response mode by automatic action of high-set under-frequency relays as a result of a significant frequency deviation. 6.5.7.6.2.3 Non-Spinning Reserve Service Deployment 
QUOTE: (1) ERCOT shall deploy Non-Spin Service by operator Dispatch Instruction for the portion of On-Line Generation Resources that is only available through power augmentation and participating as Off-Line Non-Spin and Off-Line Generation Resources. ERCOT shall develop a procedure approved by TAC to deploy Resources providing Non-Spin Service. ERCOT Operators shall implement the deployment procedure when a specified threshold(s) in MW of capability available to SCED to increase generation is reached. ERCOT Operators may implement the deployment procedure to recover deployed RRS, ECRS, or when other Emergency Conditions exist. The deployment of Non-Spin must always be 100% of that awarded on an individual Resource.
AFTER:  (2) Once Non-Spin capacity from Off-Line Generation Resources awarded Non-Spin is deployed and the Generation Resources are On-Line, ERCOT shall use SCED to determine the amount of energy to be dispatched from those Resources. (3) Off-Line Generation Resources offering to provide Non-Spin must prov…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (4) · text copy line 3009 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …ver ICCP for Resources awarded ECRS with a Resource Status of ONSC. (b) Dispatch Instruction for deployment of energy from Load Resources via electronic Messaging System. (3) Energy from Resources providing ECRS may also be manually deployed by ERCOT pursuant to Section 6.5.9, Emergency Operations. 
QUOTE: (4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves.
AFTER:  (5) Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resources telemetering a Resource Status of ONSC, the QSE's obligation to deliver ECRS remains in effect until ERCOT issues a recall instruction. (6) For Generation Resources, ESRs, and CLRs providing ECRS, Base Points inc…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.3, paragraphs (2)-(3) · text copy line 2952 · heading above: 6.5.7.6.2.3 Non-Spinning Reserve Service Deployment

BEFORE: …shold(s) in MW of capability available to SCED to increase generation is reached. ERCOT Operators may implement the deployment procedure to recover deployed RRS, ECRS, or when other Emergency Conditions exist. The deployment of Non-Spin must always be 100% of that awarded on an individual Resource. 
QUOTE: (2) Once Non-Spin capacity from Off-Line Generation Resources awarded Non-Spin is deployed and the Generation Resources are On-Line, ERCOT shall use SCED to determine the amount of energy to be dispatched from those Resources. (3) Off-Line Generation Resources offering to provide Non-Spin must provide an Energy Offer Curve for use by SCED.
AFTER:  (4) Non-Spin can be provided by CLRs that are SCED qualified or by Load Resources that are not CLRs but do not have an under-frequency relay or the under-frequency relay is unarmed. (a) CLRs awarded Non-Spin shall have an RTM Energy Bid for SCED and shall be capable of being Dispatched to its Non-S…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market, description of NSRS · text copy line 3859

BEFORE: …illary services. Its purpose is to restore frequency within 10 minutes of a significant frequency deviation and recover deployed regulation service. It also compensates for intra-hour net load forecast uncertainty. ECRS can be provided by online and offline units. • Non-Spin Reserve Service (NSRS). 
QUOTE: NSRS resources can respond within 30 minutes and are needed to compensate for intra-hour net load forecast uncertainty that results in under-commitments of capacity or inefficient dispatch instructions. Online and offline units can provide NSRS.
AFTER:  38 | 2025 State of the Market Report / / Ancillary Services 1. Ancillary Services Procurement Targets The corresponding AS Methodology determines the volume of each ancillary service procured in the ERCOT markets on a month-hour basis.30 The resulting schedule, called the AS Plan, is shown on a mon…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Ancillary Services Prices · text copy line 3968

BEFORE: …ich we discuss later in this chapter. Until RTC was implemented, the entire AS plan was procured in the day-ahead market, often producing very high prices. The high prices shown for May in Figure 25 are an example. ERCOT operators increased an already high procurement target for NSRS in that month. 
QUOTE: Exercising their discretion, they increased the procurement target by an additional 1,000 MW for HE 19-22 on May 20, 2025, causing the price of NSRS to average $320 per MWh during this period.
AFTER:  These four hours accounted for 27% of the increase in the NSRS price across May. Figure 25: Ancillary Service Prices 2021-2025 !"#A%%CDE)*+D,A#+)-DA#+)./)M+D)N2P4 !D# !D" RSR7 ?,@N;*@A<, :S?S ;+<M="<A,+ >*;* ;+?@AM ;+?@B=C" aE;* ?,RBCN ?,RB=;a* !C bc?S !G""eCI !CDe>% !#C#e>% !DD%eD% B RSRR RSRU RSR…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3798

BEFORE: …of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 58 MW of NSRS. 
QUOTE: CLRs shifted to NSRS in 2025 because NSRS was the highest-priced AS product throughout the year.
AFTER:  • At the end of this chapter, we recommend an AS Methodology that uses assessment criteria rooted in real reliability risks rather than arbitrary benchmarks. Using excessively conservative parameters in its AS Methodology, the volume of reserves set by ERCOT's AS Plan is 140% larger than a 1-in-10 …

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4223

BEFORE: …)9W;< C,D C,! %,D %,! #!!" RST4P RSTU9 PNRN S:RN RRN 9;<=;>?@A;BCaBREBMNBc<CGefeC> +!" G!" F!" E!" A,D D!" A,! C!" #,D %!" #,! A!" !,D #!" !,! !"#A"%&'E")G+),"E-)./0")12)!#GP/4/G% D,! !" J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 A!A% A!AC A!AD ECRS and NSRS Provision by ESRs 
QUOTE: ESRs' provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025.
AFTER:  This increase is noteworthy because the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282. 42 | 2025 State of the Marke…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4234

BEFORE: …ause the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282. 42 | 2025 State of the Market Report / / Ancillary Services 
QUOTE: As of this report, the NSRS duration requirement remains four hours, despite mounting evidence that this constraint distorts market outcomes. However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set the duration for NSRS at two hours upon the implementation of the long-foretold Dispatchable Reliability Reserve Service (DRRS).
AFTER:  DRRS is statutorily required to carry a four-hour duration requirement. Reducing the NSRS duration requirement to two hours would be a step in the right direction. However, we continue to recommend that ERCOT adopt a one-hour duration requirement for both ECRS and NSRS, as detailed in Recommendatio…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.2, NCLR Participation in Ancillary Services · text copy line 4301

BEFORE: …uirements across ancillary service products in RTC. If this price premium persists, more NCLRs may shift from RRS to ECRS. NSRS Provision from NCLRs Although NCLRs have participated in NSRS since November 2022, after ERCOT implemented NPRR 109334 and NPRR 1101,35 participation has remained limited. 
QUOTE: To qualify to provide NSRS, NCLRs cannot have an active UFR, so they must choose between providing NSRS and RRS.
AFTER: 36 Because RRS is deployed less frequently than NSRS, most NCLRs participate in RRS. However, NSRS prices were considerably higher than RRS prices in 2025, and initial observations since RTC go-live indicate that this trend is continuing into 2026. If this trend continues for several years, more NCL…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.3, paragraph (1)(a), pending box [NPRR1309: Replace paragraph (ii) above upon system implementation] · text copy line 8133 · heading above: 3.17.3 Non-Spinning Reserve Service
FLAG pending-box: | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] |
BEFORE: …ut level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours; +-----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] | | | | 
QUOTE: (ii) Running at a specified output level for at least two consecutive hours;
AFTER:  | +=========================================================================================+ +-----------------------------------------------------------------------------------------+ (b) CLRs qualified for Dispatch by Security-Constrained Economic Dispatch (SCED) and capable of: (i) Ramping to a…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (5) · text copy line 2298 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …SDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. 
QUOTE: (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e15 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.3, Non-Spinning Reserve Qualification, paragraph (1) · text copy line 372 · heading above: 8.1.1.2.1.3 Non-Spinning Reserve Qualification

BEFORE: … shall provide a copy of the certificate to the QSE and the Resource Entity. 8.1.1.2.1.3 Non-Spinning Reserve Qualification (1) Each Off-Line Resource being offered in to provide Non-Spin must be capable of being synchronized and ramped to its Ancillary Service award for Non-Spin within 30 minutes. 
QUOTE: Non-Spin may be provided from Generation Resource capacity that can ramp within 30 minutes or Load Resources capable of unloading within 30 minutes. Non-Spin may only be provided from capacity that is not fulfilling any other energy or capacity commitment.
AFTER:  (2) Resources are required to undergo a qualification test to provide Non-Spin when the Resource is On-Line, which shall at least include the ability to provide applicable telemetry and market submissions. The amount of Non-Spin for which the Resource is qualified when On-Line is limited to the amo…

### e16 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (3) · text copy line 302 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …frequency operation as specified in the Operating Guides. ERCOT's direction to the QSE to operate on constant frequency will be considered a Dispatch Instruction. (3) A QSE providing Reg-Up or Reg-Down shall provide ERCOT with the data requirements of Section 6.5.5.2, Operational Data Requirements. 
QUOTE: Resources providing Reg-Up or Reg-Down must be capable of delivering the full amount of regulating capacity offered to ERCOT within five minutes.
AFTER:  (4) A Reg-Up and Reg-Down qualification test for each Resource is conducted during a continuous 60-minute period agreed on in advance by the QSE and ERCOT. QSEs may qualify a Resource to provide Reg-Up or Reg-Down, or both, in separate testing. ERCOT shall administer the following test requirements…

### e17 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.3, paragraphs (2)-(3) · text copy line 374 · heading above: 8.1.1.2.1.3 Non-Spinning Reserve Qualification

BEFORE: …vice award for Non-Spin within 30 minutes. Non-Spin may be provided from Generation Resource capacity that can ramp within 30 minutes or Load Resources capable of unloading within 30 minutes. Non-Spin may only be provided from capacity that is not fulfilling any other energy or capacity commitment. 
QUOTE: (2) Resources are required to undergo a qualification test to provide Non-Spin when the Resource is On-Line, which shall at least include the ability to provide applicable telemetry and market submissions. The amount of Non-Spin for which the Resource is qualified when On-Line is limited to the amount of capacity that can be ramped or unloaded within 30 minutes. (3) A Controllable Load Resource offering to provide Non-Spin must be qualified to participate in SCED and must provide a telemetered output signal, including breaker status.
AFTER:  (4) Each Resource providing Non-Spin when Off-Line or providing Non-Spin as a Load Resource other than a Controllable Load Resource must meet additional technical requirements specified in this Section. (5) QSEs using a Controllable Load Resource to provide Non-Spin must be capable of responding to…

### e18 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.3, paragraph (8) · text copy line 390 · heading above: 8.1.1.2.1.3 Non-Spinning Reserve Qualification

BEFORE: … measure the test Resource's response as described under Section 8.1.1.4.3, Non-Spinning Reserve Service Energy Deployment Criteria. ERCOT shall evaluate the response of the Resource given the current operating conditions of the system and determine the Resource's qualification to provide Non-Spin. 
QUOTE: (8) The maximum quantity of Non-Spin that an individual Resource is qualified to provide is limited to the amount of Non-Spin that can be sustained by the Resource for at least four hours.
AFTER:  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (8) above with the following upon system implementation:] | | | | (8) The ma…

### e19 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.3, Non-Spinning Reserve Service Energy Deployment Criteria, paragraph (3)(a) · text copy line 1139 · heading above: 8.1.1.4.3 Non-Spinning Reserve Service Energy Deployment Criteria

BEFORE: …rol performance during periods in which ERCOT has manually deployed Non-Spin shall be based on the requirements below and failure to meet any one of these requirements for the greater of one or 5% of Non-Spin deployments during a month shall be reported to the Reliability Monitor as non-compliance: 
QUOTE: (a) Off-Line Generation Resources, within 25 minutes following a deployment instruction, must be On-Line with an Energy Offer Curve and the telemetered net generation must be greater than or equal to the Resource's telemetered LSL multiplied by P1 where P1 is defined in the "ERCOT and QSE Operations Business Practices During the Operating Hour."
AFTER:  The Resource Status that must be telemetered indicating that the Resource has come On-Line with an Energy Offer Curve is ON as described in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria. (b) If an Off-Line Generation Resource experiences a Startup Loading Failure (excl…

### e20 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: Revision Description, item 13 (NPRR1309, Board Priority DRRS) · text copy line 144

BEFORE: … Status (or statuses of DRRS or OFF if eligible to provide Non-Spinning Reserve (Non-Spin)) for a given Operating Hour in their Current Operating Plan (COP) for Day-Ahead Reliability Unit Commitment (DRUC) and each subsequent run of Hourly Reliability Unit Commitment (HRUC); and | | | | | | | | | | 
QUOTE: 13. Given that DRRS has at least a four-hour duration, the Non-Spin duration requirements are reduced from four hours to two hours.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e21 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: Decision rows (PUCT Report, 9 July 2026) · text copy line 208

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------+ | PUCT Decision | | 
QUOTE: On 7/9/26, the PUCT approved NPRR1309 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e22 · `ercot-nprr1309-puct-report` · tier 1 · NPRR1309 PUCT Report (Dispatchable Reliability Reserve Service) (2026-07-09)
locator: Opposing TAC votes, Cooperative/LCRA · text copy line 174

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------+ | Explanation of Opposing TAC Votes | | Cooperative/LCRA - 
QUOTE: LCRA voted 'No' on the TAC motion as the modification of the Non-Spin duration to two-hours is premature without more analysis.
AFTER:  This decision should not be made until performing a holistic reliability analysis under the annual Ancillary Services Methodology study prior to the implementation of NPRR1309. Given that the statutory requirement for DRRS states that participating capacity should have a duration of "at least four …

### e23 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision, Non-Spin bullet (NPRR1282) · text copy line 62

BEFORE: …l analysis to determine appropriate duration requirements for Ancillary Services. ERCOT shared the results of its analysis and its recommendations with the RTCBTF at its March 25, 2025 and April 22, 2025 meetings. Following is a summary of ERCOT's analysis and recommendations: | | | | | | | | | | - 
QUOTE: Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours.
AFTER:  This duration analysis for Non-Spin should be periodically revisited to assess its sufficiency especially during extreme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-S…

### e24 · `imm-nprr1309-comments-2026-02` · tier 2 · IMM comments on NPRR1309 (2026-02-03, a party comment)
locator: IMM comments of 3 February 2026, section 4, Reduce Non-Spin Duration Requirement to One Hour · text copy line 59

BEFORE: …lting interference with effective price formation. 4. Reduce Non-Spin Duration Requirement to One Hour ERCOT has maintained that a 4-hour duration reserve product has been critical to maintaining reliability for a few events over the past few years, and until now, Non-Spin has served this function. 
QUOTE: Given that DRRS is specifically designed to manage uncertainty with a statutory 4-hour duration requirement, it will serve this function moving forward, thus replacing Non-Spin. As a result, we recommend that the implementation of DRRS should at the same time relax the duration requirement for Non-Spin from 4 hours to 1 hour.
AFTER:  ----------------------------------------------------------------------- Revised Cover Page Language ----------------------------------------------------------------------- None. ----------------------------------------------------------------------- Revised Proposed Protocol Language --------------…

### e25 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 63 (OCR), Chapter III.B, Ancillary Services Market · text copy line 4077

BEFORE: …ed four-hour duration requirement. To provide NSRS, an energy storage resource must carry four hours of energy corresponding to its NSRS award, which significantly increases the effective cost of participation. In SOM Recommendation 2024-2, we propose reducing this duration requirement to one hour. 
QUOTE: After NPRR 1282 took effect, RTC-SCED explicitly enforced the four-hour duration requirement for NSRS, reinforcing a structural design flaw that predictably inflated NSRS prices.
AFTER: 32 We also showed that, under scarcity conditions, the constraint discourages ESR from providing reserves and instead incentivizes them to sell energy. This depletes their state of charge and increases the risk of a supply shortfall during prolonged scarcity events. We discuss the implications of th…

### e26 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026) · text copy line 75

BEFORE: …he risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria. 
QUOTE: The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load - wind - solar) forecast and conventional resource availability.
AFTER:  The hourly requirement for ECRS and Non-Spin will be derived by using the 30 minute ahead and 6 hour ahead historic net load forecast error and the combined ECRS and Non-Spin requirements from the optimization. ECRS requirement may be increased further to account for the capacity needed to recover …

### e27 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, ECRS and Non-Spin Requirement Details, Procedure · text copy line 73

BEFORE: …s reliance on historical solar forecast errors alone creates a possibility of under-estimation of the total requirement of ECRS and NSRS. To address this ERCOT will include an adjustment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources. 
QUOTE: Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes.
AFTER:  The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based o…

### e28 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board presentation (September 2026), Impacts on Quantities for ECRS and NSRS · text copy line 624

BEFORE: … from Resources that respond within 10 minutes to (1) restore Reg Up and RRS (and hence frequency) following the trip of a large generator and/or (2) cover net-load movement within the operating hour that the hourly commitment did not anticipate, bridging until Non-Spin and other resources respond. 
QUOTE: Non-Spinning Reserve Service = Reserved capacity from Resources that respond within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate - caused by net load forecast error and resource forced outages - until additional resources are committed.
AFTER:  Key Takeaway: ERCOT's recommended ECRS and Non-Spin quantities (S3) reflect a measured outcome - below the maximum that crediting no headroom would result in, but well above the aggressive scenarios that would take on more risk. * S3 is ERCOT proposed. S1, S2 S3, S4 scenario parameters are same as …

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 62 (OCR), Figure 25 inset table, annual average DAM prices ($ per MWh), NSRS row · ocr copy line 2717, OCR page 62

BEFORE: …NSRS to average $320 per MWh during this period. These four hours accounted for 27% of the increase in the NSRS price across May. Figure 25: Ancillary Service Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74 5 @Reg-Up 
QUOTE: NSRS $81.56 $23.24 $15.53 $7.13 $3.65
AFTER:  a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 ECRS - - $73.18 $9.56 $2.65 2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under RTC High NSRS prices also occurred in December,…

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions · ocr copy line 7180, OCR page 169

BEFORE: …T's real-time energy market. Table A4 shows the annual aggregate costs of various ERCOT charges and payments in 2025, including ancillary services charges by type and different forms of uplift. Table A4: ERCOT 2025 Year at a Glance (Annual) Annual Total ($ Millions) Energy $17,659 Regulation Up $11 
QUOTE: Regulation Down $6 Responsive Reserve $52 NSRS $81
AFTER:  ECRS $30 CRR Auction Distribution ($1,810) Balancing Account Surplus ($293) Emergency Response Service $69 Revenue Neutrality Uplift $154 AS Imbalance Uplift $27 ERCOT Fee $308 ERO Passthrough Fee $30 Firm Fuel $46 Other Load Allocation $0 Net Cost of Electricity $16,371 Table AS presents monthly a…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 62-63 (OCR), Chapter III.B, AS Prices · text copy line 4072

BEFORE: … days after RTC go-live. In 2025, NSRS was the most expensive ancillary service on average for the first time. This outcome is inconsistent with expectations for a well-functioning market, particularly in a year 40 | 2025 State of the Market Report / / Ancillary Services without material shortages. 
QUOTE: Two structural factors drove this price premium: oversized NSRS procurement volume on a capacity basis and the associated four-hour duration requirement.
AFTER:  To provide NSRS, an energy storage resource must carry four hours of energy corresponding to its NSRS award, which significantly increases the effective cost of participation. In SOM Recommendation 2024-2, we propose reducing this duration requirement to one hour. After NPRR 1282 took effect, RTC-S…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 149 (OCR), Recommendations, 2024-2 · text copy line 8927

BEFORE: …title of this recommendation has since been updated to reflect ERCOT's reduction of the ECRS duration requirement to one hour when it implemented RTC, consistent with our recommendation. ERCOT still maintains a four-hour duration requirement 126 | 2025 State of the Market Report / / Recommendations 
QUOTE: for NSRS for energy storage resources, which must maintain a state of charge four times their NSRS obligation. For example, a 10 MW NSRS award would require 40 MWh of stored capacity.
AFTER:  We recommend reducing the NSRS duration requirement to one hour for two reasons: First, requiring ESRs to maintain four hours of state of charge to provide operating reserves limits their ability to supply reserves, increasing the likelihood of shortages of both energy and ancillary services. This …

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 161 (OCR), Appendix I, Figure A5 discussion (5 December 2025 to February 2026) · text copy line 9697

BEFORE: …pendix: Real-Time Co-Optimization time market and can be seen by comparing the distribution of clearing prices for NSRS to the clearing prices for the other AS products, as shown in Figure A5. Figure A5: Distribution of NSRS MCPC Relative to Other Up-Reserves December 5, 2025, through February 2026 
QUOTE: Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1.
AFTER:  The average ratio of clearing prices between NSRS and Reg-Up is lower because Reg-Up offers are generally priced higher than NSRS offers, as shown in Figure A3. We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reli…

### e34 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Ancillary services, Key Takeaways (summer 2026) · text copy line 1160

BEFORE: …1.52% ECRS Non-Spin Key Takeaways: • There were no shortages of Reg-Up, Reg-Down and RRS this summer. Non-Spin and ECRS met the plan in nearly all intervals. Most Non-Spin shortfalls in June occurred during peak AS Plan requirements in the late evening, with 40% of intervals in HE 22-23 affected. • 
QUOTE: In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, offsetting a decline in the Plan from 86 to 66 GWh/day.
AFTER:  18 Congestion Rent fell from summer 2025 to summer 2026 200 180 160 140 $ Millions PUBLIC 120 100 80 60 40 20 0 Jun Jul Aug Jun Jul 2024 Aug 2025 North West South Houston Jun Jul Aug 2026 Cross Zone * August data for each year goes through 8/15. Key Takeaway: Real-Time Congestion Rent in the summer…

### e35 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Ancillary services, Key Takeaway on day-ahead prices (summer 2026) · text copy line 989 · heading above: 4.5 5

BEFORE: …$/MWh) Average MCPC ($/MWh) PUBLIC 7 6 5 4 3 2 1 0 7 6 5 4 3 2 1 Jun Jul Aug Jun 2024 Reg-Up Jul Aug Jun 2025 Reg-Down RRS Jul Aug 0 Jun-26 Jul-26 Aug-26 2026 ECRS Non-Spin Reg-Up Reg-Down RRS ECRS Non-Spin * RT MCPCs only exist for 2026 and both DAM and RT 2026 data runs through 8/15 Key Takeaway: 
QUOTE: Day-ahead ancillary service prices have been trending lower in summer 2026 compared to 2024 and 2025, except for Non-Spin.
AFTER:  Across summer 2026, Real-time Ancillary Service prices have decreased month over month. 16 Ancillary Service costs have been lower in 2026 compared to previous years, consistent with price trends RT AS Cost DAM AS Cost 35 35 30 30 25 25 20 20 $ Million $ Million PUBLIC 15 15 10 10 5 5 0 Jun Jul Aug…

### e36 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), fixed parameters table · text copy line 2420 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …----------------------------------------- Fixed parameters are defined as follows: ------------------------------------------------------------------------ Parameter Unit Current Value ------------ ------------- --------------------------------------------- RUPCT % 90 RRSPCTMAX % 90 ECRSPCTMAX % 30 
QUOTE: ECRSMWMIN MW 40 NSMWMIN MW 10
AFTER:  ------------------------------------------------------------------------ Further, the quantities of each Ancillary Service product procured until the MCL is satisfied are priced as follows: --------------------------------------------------------------------------------------- Parameter Unit Curren…

### e37 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), Max Demand Price table · text copy line 2436 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …------------------------------------------------------------- Parameter Unit Current Value --------------------------- ------------- --------------------------------------------- Reg-Up Max Demand Price $/MWh VOLL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 
QUOTE: Non-Spin Max Demand Price $/MWh VOLL
AFTER:  --------------------------------------------------------------------------------------- (b) Beyond the MCL, the nonlinear segments of the AORDC are disaggregated as follows: (i) First, extract evenly spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form …

### e38 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (3), pending box [NPRR1128, NPRR1171, and NPRR1213 ...] · text copy line 8065 · heading above: 3.16 Standards for Determining Ancillary Service Quantities
FLAG pending-box: | [NPRR1128, NPRR1171, and NPRR1213: Replace applicable portions of paragraph (3) above with the following upon system implementation for NPRR1128, or NPRR1171;
BEFORE: …13:] | | | | (3) The ERCOT Board shall review and recommend approval of ERCOT's methodology for determining the minimum Ancillary Service requirements, any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin), 
QUOTE: the maximum amount of Non-Spin that can be provided by Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) that are interconnected to a distribution circuit that is subject to Load shed
AFTER: , the maximum amount of ECRS that can be provided by DGRs and DESRs that are interconnected to a distribution circuit that is subject to Load shed, the minimum capacity required from Resources providing Primary Frequency Response to provide RRS, the maximum amount of RRS that can be provided by Reso…

### e39 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (3) · text copy line 8060 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …------------------------------+ (c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW. (3) The ERCOT Board shall review and recommend approval of ERCOT's methodology for determining the minimum Ancillary Service requirements, 
QUOTE: any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin)
AFTER: , the minimum capacity required from Resources providing Primary Frequency Response to provide RRS, the maximum amount of RRS that can be provided by Resources capable of FFR, the maximum amount of RRS that an individual Resource can provide using Primary Frequency Response. ERCOT shall post on the …

### e40 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.3, paragraph (5) · text copy line 1168 · heading above: 8.1.1.4.3 Non-Spinning Reserve Service Energy Deployment Criteria

BEFORE: … the evaluation it performed under this Section. Specifically, if a Load Resource that is not a CLR that is providing Non-Spin fails to respond with at least 95% of its Dispatch Instruction for Non-Spin within 30 minutes of an ERCOT Dispatch Instruction, that response shall be considered a failure. 
QUOTE: Two Load Resource performance failures within any rolling 365-day period shall result in disqualification of that Load Resource.
AFTER:  After six months of disqualification, the Load Resource may reapply for qualification provided it submits a corrective action plan to ERCOT that identifies actions taken to correct performance deficiencies and the disqualified Load Resource successfully passes qualification test as specified in Sec…

### e41 · `imm-nprr1309-comments-2026-04` · tier 2 · IMM comments on NPRR1309 (2026-04-24, a party comment)
locator: IMM comments of 24 April 2026, Summary · text copy line 33

BEFORE: …------------------------------------------------------------------ ----------------------------------------------------------------------- Comments ----------------------------------------------------------------------- ----------------------------------------------------------------------- Summary 
QUOTE: The IMM no longer supports Nodal Protocol Revision Request (NPRR) 1309 as recommended by PRS. We recommend that the two-hour duration requirement for Energy Storage Resources (ESRs) participating in Non-Spinning Reserve (Non-Spin) be reinstated at the TAC meeting, as amended by these comments, and approved to be forwarded to the Board of Directors.
AFTER:  In the alternative, we will recommend that ERCOT management advise the Board of Directors that the four-hour requirement no longer serves a reliability purpose and to reject this proposal in favor of one that reflects a two-hour duration requirement for ESRs that participate in Non-Spin. During the…

## Statements to check

- **Definition #1** (cites e1): Non-Spinning Reserve (Non-Spin) is an ancillary service provided by off-line generation that can be synchronized and ramped to a specified output within 30 minutes, or by load that can be interrupted within 30 minutes, and that can sustain that level for at least four consecutive hours. It may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, is reserved exclusively for this service and can be sustained for at least four consecutive hours. [e1]
- **How it works #1** (cites e2, e3, e15): Generation Resources, on-line or off-line, qualify if they can ramp to a specified output within 30 minutes and run at it for at least four consecutive hours. [e2] Controllable Load Resources qualified for SCED can also provide it if they can reach an ERCOT-instructed consumption level within 30 minutes and hold it for four hours. [e3] Non-Spin may only be provided from capacity that is not fulfilling any other energy or capacity commitment. [e15]
- **How it works #2** (cites e4, e6): For Off-Line Generation Resources, and the portion of On-Line Generation Resources available only through power augmentation, ERCOT deploys Non-Spin by operator Dispatch Instruction, under a TAC-approved procedure that starts when a threshold of capability available to SCED is reached. Operators may also use it to recover deployed RRS or ECRS or when other Emergency Conditions exist, and a deployment is always 100% of the individual resource's award. [e4] Once off-line capacity is deployed and on line, SCED determines its energy, and off-line resources offering Non-Spin must supply an Energy Offer Curve. [e6]
- **How it works #3** (cites e17, e18, e19, e40): Qualification and performance: a Resource takes a qualification test when On-Line, and the amount it is qualified for On-Line is limited to what it can ramp or unload in 30 minutes. [e17] The maximum quantity any Resource is qualified for is limited to what it can sustain for at least four hours. [e18] When ERCOT manually deploys Non-Spin, an Off-Line Generation Resource must be On-Line with an Energy Offer Curve within 25 minutes of the instruction, with telemetered net generation at or above its telemetered LSL multiplied by a factor defined in the business practices. [e19] A Load Resource that is not a CLR is disqualified after two performance failures in a rolling 365-day period. [e40]
- **Formula #1** (cites e26, e27, e36, e37) FLAG number-not-in-quote: 2026, 10 MW: Non-Spin quantity in the AS Plan comes from a probabilistic model. ERCOT's AS Methodology effective 1 January 2026 sets the combined ECRS and Non-Spin requirement so there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg-Up and RRS or the Watch threshold (PRC = 3,000 MW), whichever is higher. [e26] The model credits historic online capacity that can be ramped to in 30 minutes and sustained for four hours, and historic offline capacity that can be brought online in 30 minutes. [e27] The Protocols also provide for a minimum Non-Spin capacity in the Minimum Contingency Level, with a current value of 10 MW in the ASDC disaggregation, and a Non-Spin maximum demand price equal to VOLL. [e36][e37]
- **ERCOT context #1** (cites e7, e28) FLAG number-not-in-quote: 2027: The IMM describes Non-Spin as covering intra-hour net load forecast uncertainty that would otherwise cause under-commitment or inefficient dispatch. [e7] ERCOT's staff presentation for the 2027 methodology describes it as reserved capacity responding within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate. [e28]
- **ERCOT context #2** (cites e9, e8, e29, e30, e31, e10) FLAG number-not-in-quote: 2021: In 2025 NSRS was the highest-priced AS product throughout the year, which pushed controllable loads toward it, and in May the procurement target was increased by 1,000 MW for hours ending 19-22 on May 20, pushing the NSRS price to average $320 per MWh over those hours. [e9][e8] The IMM's annual day-ahead NSRS price table reads $81.56, $23.24, $15.53, $7.13 and $3.65 per MWh for 2021 through 2025, and 2025 NSRS charges were $81 million (OCR). [e29][e30] The IMM attributes the premium to oversized NSRS volume and the four-hour duration requirement. [e31] ESRs supplied 24% of NSRS in 2025. [e10]
- **ERCOT context #3** (cites e23, e25, e32, e33) FLAG number-not-in-quote: 2024, 2025, 2026: Duration is the live issue. In its NPRR1282 analysis, ERCOT concluded Non-Spin duration should remain at least four hours, based on risk-relevant deployments and sustained under-forecast error in six-hour-ahead net load. [e23] The IMM says that after NPRR1282 took effect RTC-SCED explicitly enforces the four-hour duration for NSRS, and that this inflated NSRS prices; in Recommendation 2024-2 it proposes one hour, noting an ESR must hold four times its NSRS obligation (a 10 MW award needs 40 MWh). [e25][e32] The IMM also reports that, from 5 December 2025 through February 2026, NSRS cleared four times higher than ECRS and eight times higher than RRS on average, consistent with their duration ratios. [e33]
- **ERCOT context #4** (cites e20, e24, e41, e22, e21, e13) FLAG number-not-in-quote: 2026: NPRR1309 (DRRS) addresses it: it reduces the Non-Spin duration requirements from four hours to two on the stated basis that DRRS has at least a four-hour duration. [e20] The IMM, in February 2026 comments, recommended relaxing Non-Spin to one hour when DRRS is implemented, and in April 2026 comments said it no longer supported the PRS version of NPRR1309, asking that the two-hour requirement for ESRs in Non-Spin be reinstated at TAC. [e24][e41] LCRA voted no at TAC, calling the two-hour change premature without more analysis. [e22] The PUCT approved NPRR1309 on 9 July 2026, with an effective date upon system implementation. [e21] The Protocol text for the two-hour requirement is therefore still pending text and four hours remains the rule in force. [e13]
- **ERCOT context #5** (cites e34, e35): On supply, ERCOT's summer 2026 review says Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, and that day-ahead AS prices trended lower than 2024 and 2025 except for Non-Spin. [e34][e35]
- **Key facts #1** (cites e1): - Non-Spin ramps to a specified output within 30 minutes and holds it for at least four consecutive hours (current Protocol text). [e1]
- **Key facts #2** (cites e4): - Non-Spin deployment is always 100% of that awarded on an individual Resource. [e4]
- **Key facts #3** (cites e4): - Operators may use Non-Spin to recover deployed RRS or ECRS. [e4]
- **Key facts #4** (cites e9, e10): - 2025: NSRS was the highest-priced AS product; ESRs provided 24%. [e9][e10]
- **Key facts #5** (cites e12): - Non-controllable load resources cannot hold an active UFR and also provide NSRS, so they choose NSRS or RRS. [e12]
- **Key facts #6** (cites e20, e21) FLAG number-not-in-quote: 2026: - NPRR1309, approved by the PUCT on 9 July 2026, would cut the duration to two hours on implementation. [e20][e21]
- **Key facts #7** (cites e39, e38): - Under the Board-approved methodology process, the Protocols list any minimum capacity required from SCED-dispatchable Resources for Non-Spin; a cap on Non-Spin from DGRs and DESRs on load-shed circuits appears only in pending text (NPRR1128, NPRR1171, NPRR1213). [e39][e38]
- **Say it like this #1** (cites e1, e4, e9): Non-Spin is the slow reserve: capacity that can be brought on or ramped within 30 minutes and held for hours, used to cover forecast error and to refill faster reserves. In 2025 it was the most expensive AS product. [e1][e4][e9]
- **Common confusion #1** (cites e2, e10, e11, e13, e21): Despite the name, Non-Spin is not only off-line capacity: on-line generation and ESRs can also provide it. [e2][e10] The four-hour duration is the current Protocol text, and a two-hour change is pending under NPRR 1309 even though the PUCT has approved it. [e11][e13][e21]
- **Questions #2** (cites e4, e6): For Off-Line Generation Resources (and the power-augmentation portion of On-Line Generation Resources), by operator Dispatch Instruction under a TAC-approved procedure, always for 100% of the award, after which SCED sets the energy dispatched from the deployed resource. [e4][e6]
- **Questions #4** (cites e9, e8, e31): The IMM says NSRS was the highest-priced AS product throughout 2025 and that the procurement target was increased by an additional 1,000 MW for HE 19-22 on May 20, 2025, which caused the NSRS price to average $320 per MWh during that period; it also points to oversized volume and the four-hour duration. [e9][e8][e31]
- **Questions #6** (cites e32): The IMM argues an ESR must hold four times its NSRS obligation, so selling reserves costs it four times the opportunity cost of one hour; a 10 MW award needs 40 MWh. This is the IMM's view, not a Protocol statement. [e32]
- **Questions #8** (cites e20, e24, e41): ERCOT's NPRR1309 text says that because DRRS has at least a four-hour duration, Non-Spin duration is reduced to two hours. [e20] The IMM says ERCOT stated it would reduce the ESR duration to two hours when DRRS was implemented, and wanted one hour. [e24][e41]
- **Questions #10** (cites e22, e32): LCRA's dissent noted the concern that a two-hour duration would let more batteries receive a greater share of awards; the IMM argues the four-hour rule is what constrains ESRs. [e22][e32] (Guidance: weigh both views as party positions, not findings.)
- **Questions #12** (cites e26): By a probabilistic model sized to a 1-in-10-year risk of reserves falling below the Watch threshold of 3,000 MW PRC or the sum of Reg-Up and RRS, whichever is higher. [e26]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): Non-Spin is an Ancillary Service provided from capacity that can ramp within 30 minutes; see that topic for plan, obligations and cost. [e1]
- **Link to ecrs** (cites e5): related ECRS (ERCOT Contingency Reserve Service): ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e5]
- **Link to rrs** (cites e4): related RRS (Responsive Reserve Service): Non-Spin may be used to recover deployed RRS. [e4]
- **Link to energy-storage-resource** (cites e2, e10): related Energy Storage Resource (ESR): ESRs can provide Non-Spin and supplied 24% of it in 2025. [e2][e10]
- **Link to eea** (cites e4): related EEA (Energy Emergency Alert) Levels: ERCOT may deploy Non-Spin when other Emergency Conditions exist. [e4]
- **Link to asdc** (cites e14): related ASDC (Ancillary Service Demand Curves): An individual ASDC is determined for Non-Spin by disaggregating the AORDC; see that topic. [e14]
- **Link to regulation** (cites e16, e1): contrasts-with Regulation Up / Down: Regulation must be deliverable in five minutes and is sustained for 30 minutes, while Non-Spin ramps in 30 minutes and is sustained for four hours. [e16][e1]
- **Link to drrs** (cites e20): related DRRS (Dispatchable Reliability Reserve Service): NPRR1309 creates DRRS and, given DRRS has at least a four-hour duration, cuts the Non-Spin duration requirement from four hours to two. [e20]
- **Link to prc** (cites e26): related PRC (Physical Responsive Capability): The AS Methodology sizes ECRS and Non-Spin against a 1-in-10-year chance of reserves falling below the 3,000 MW Watch threshold. [e26]
- **Link to rtc-b** (cites e25): related RTC+B (Real-Time Co-optimization + Batteries): After NPRR1282 took effect, RTC-SCED explicitly enforces the four-hour duration for NSRS, according to the IMM. [e25]
