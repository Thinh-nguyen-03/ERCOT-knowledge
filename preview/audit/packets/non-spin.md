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

## Statements to check

- **Definition #1** (cites e1): Non-Spinning Reserve (Non-Spin) is an ancillary service provided by off-line generation that can be synchronized and ramped to a specified output within 30 minutes, or by load that can be interrupted within 30 minutes, and that can sustain that level for at least four consecutive hours. It may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, is reserved exclusively for this service and can be sustained for at least four consecutive hours. [e1]
- **How it works #1** (cites e2, e3): Generation Resources, on-line or off-line, qualify if they can ramp to a specified output within 30 minutes and run at it for at least four consecutive hours. [e2] Controllable Load Resources qualified for SCED can also provide it if they can reach an ERCOT-instructed consumption level within 30 minutes and hold it for four hours. [e3]
- **How it works #2** (cites e4, e6): For Off-Line Generation Resources, and the portion of On-Line Generation Resources available only through power augmentation, ERCOT deploys Non-Spin by operator Dispatch Instruction, under a TAC-approved procedure that starts when a threshold of capability available to SCED is reached. Operators may also use it to recover deployed RRS or ECRS or when other Emergency Conditions exist, and a deployment is always 100% of the individual resource's award. [e4] Once off-line capacity is deployed and on line, SCED determines its energy, and off-line resources offering Non-Spin must supply an Energy Offer Curve. [e6]
- **ERCOT context #1** (cites e7, e9, e8, e10): The IMM describes Non-Spin as covering intra-hour net load forecast uncertainty that would otherwise cause under-commitment or inefficient dispatch. [e7] In 2025 NSRS was the highest-priced AS product throughout the year, which pushed controllable loads toward it, and in May the procurement target was increased by 1,000 MW for hours ending 19-22 on May 20, pushing the NSRS price to average $320 per MWh over those hours. [e9][e8] ESRs supplied 24% of NSRS in 2025. [e10]
- **ERCOT context #2** (cites e11, e13): The IMM notes that the NSRS duration requirement remained four hours at the time of the report and that NPRR 1309, approved by TAC, would set it to two hours when DRRS is implemented. [e11] The Protocols also carry this as pending text, not yet in effect, under NPRR1309. [e13]
- **Key facts #1** (cites e1): - Non-Spin ramps to a specified output within 30 minutes and holds it for at least four consecutive hours (current Protocol text). [e1]
- **Key facts #2** (cites e4): - Non-Spin deployment is always 100% of that awarded on an individual Resource. [e4]
- **Key facts #3** (cites e4): - Operators may use Non-Spin to recover deployed RRS or ECRS. [e4]
- **Key facts #4** (cites e9, e10): - 2025: NSRS was the highest-priced AS product; ESRs provided 24%. [e9][e10]
- **Key facts #5** (cites e12): - Non-controllable load resources cannot hold an active UFR and also provide NSRS, so they choose NSRS or RRS. [e12]
- **Say it like this #1** (cites e1, e4, e9): Non-Spin is the slow reserve: capacity that can be brought on or ramped within 30 minutes and held for hours, used to cover forecast error and to refill faster reserves. In 2025 it was the most expensive AS product. [e1][e4][e9]
- **Common confusion #1** (cites e2, e10, e11, e13): Despite the name, Non-Spin is not only off-line capacity: on-line generation and ESRs can also provide it. [e2][e10] The four-hour duration is the current Protocol text, and a two-hour change is pending under NPRR 1309. [e11][e13]
- **Questions #2** (cites e4, e6): For Off-Line Generation Resources (and the power-augmentation portion of On-Line Generation Resources), by operator Dispatch Instruction under a TAC-approved procedure, always for 100% of the award, after which SCED sets the energy dispatched from the deployed resource. [e4][e6]
- **Questions #4** (cites e9, e8): The IMM says NSRS was the highest-priced AS product throughout 2025 and that the procurement target was increased by an additional 1,000 MW for HE 19-22 on May 20, 2025, which caused the NSRS price to average $320 per MWh during that period. [e9][e8]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): Non-Spin is an Ancillary Service provided from capacity that can ramp within 30 minutes; see that topic for plan, obligations and cost. [e1]
- **Link to ecrs** (cites e5): related ECRS (ERCOT Contingency Reserve Service): ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e5]
- **Link to rrs** (cites e4): related RRS (Responsive Reserve Service): Non-Spin may be used to recover deployed RRS. [e4]
- **Link to energy-storage-resource** (cites e2, e10): related Energy Storage Resource (ESR): ESRs can provide Non-Spin and supplied 24% of it in 2025. [e2][e10]
- **Link to eea** (cites e4): related EEA (Energy Emergency Alert) Levels: ERCOT may deploy Non-Spin when other Emergency Conditions exist. [e4]
- **Link to asdc** (cites e14): related ASDC (Ancillary Service Demand Curves): An individual ASDC is determined for Non-Spin by disaggregating the AORDC; see that topic. [e14]
