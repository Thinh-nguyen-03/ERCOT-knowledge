# Audit packet: ECRS (ERCOT Contingency Reserve Service) (ecrs)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS) · text copy line 900

BEFORE: …ion that transfers responsibility for energy between a buyer and a seller at a Settlement Point. Entity Any natural person, partnership, municipal corporation, cooperative corporation, association, governmental subdivision, or public or private organization. ERCOT Contingency Reserve Service (ECRS) 
QUOTE: An Ancillary Service that provides operating reserves that is intended to: (a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal; (b) Provide energy or continued Load interruption to avoid or during the implementation of an Energy Emergency Alert (EEA); (c) Provide backup regulation; and (d) Be sustained at a specified level for two consecutive hours.
AFTER:  ERCOT Critical Energy Infrastructure Information (ECEII) Specific engineering, vulnerability, or detailed design information concerning proposed or existing ERCOT System Infrastructure that: (a) Relates details about the production, generation, transportation, transmission or distribution of energy…

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

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.C.1, ECRS and NSRS Provision by ESRs · text copy line 4223

BEFORE: …)9W;< C,D C,! %,D %,! #!!" RST4P RSTU9 PNRN S:RN RRN 9;<=;>?@A;BCaBREBMNBc<CGefeC> +!" G!" F!" E!" A,D D!" A,! C!" #,D %!" #,! A!" !,D #!" !,! !"#A"%&'E")G+),"E-)./0")12)!#GP/4/G% D,! !" J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 J . /M/ J J M N O P 4 A!A% A!AC A!AD ECRS and NSRS Provision by ESRs 
QUOTE: ESRs' provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025.
AFTER:  This increase is noteworthy because the duration requirements for ECRS and NSRS imply higher opportunity costs for ESRs providing these products. The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282. 42 | 2025 State of the Marke…

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

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(b)(iii) · text copy line 2445 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form the nonlinear portion of the Reg-Up ASDC; (ii) Second, extract evenly spaced 1 MW AORDC segments extending from MCL to the minimum RRS price. These segments form the nonlinear portion of the RRS ASDC; 
QUOTE: (iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and
AFTER:  (iv) Assign any remaining 1 MW segments of the AORDC priced above $0.01/MWh to Non-Spin. The minimum prices for Reg-Up and RRS are defined as follows: ------------------------------------------------------------------------------ Parameter Unit Current Value ------------------ ------------- -------…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section F, Impact of ECRS on Real-Time Market Prices (page 34 (OCR)) · text copy line 2130

BEFORE: …, the ECRS deployment criteria before RTC negatively affected reliability by dispatching ESRs excessively for energy while keeping gas turbines in reserve. Simulations that released ECRS in these events preserved ESR state of charge (SOC) by reducing ESR net injections by 10% throughout the events. 
QUOTE: With RTC's implementation in December 2025, ERCOT operators no longer manually deploy ECRS. Instead, SCED can make economic trade-offs between procuring energy and ancillary services in real time using reserve shortage prices under an ancillary service demand curve (ASDC).
AFTER:  This eliminates the need for manual deployments and enables more efficient, marketdriven decisions.6 6 The ASDCs defined by NPRR 1268 sponsored by the IMM, should result in further improvements in market performance vis a vis ECRS. See https://www.ercot.com/mktrules/issues/NPRR1268 for more details…

### e44 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Ancillary Services, ECRS deployment (NPRR 1224) · text copy line 1775

BEFORE: …esulted in excess ECRS-related costs of less than $1 billion in 2024, compared to the $12 billion estimated for 2023. Nevertheless, deployment practices remain a source of inefficiency that warrants further attention. In March 2024, ERCOT proposed NPRR 1224 to address concerns with ECRS deployment. 
QUOTE: NPRR 1224 would have established formal deployment criteria based on real-time market conditions, deploying in 500 MW increments when power balance violations exceeded 40 MW for 10 consecutive minutes. Additionally, the capacity released to SCED would be subject to a $750 per MWh energy offer floor, for which there is no reasonable basis. Hence, we found this proposal to be flawed and it was ultimately rejected by the Commission in July 2024.
AFTER:  However, ERCOT still implemented the deployment process proposed by NPRR 1224, but without the $750 per MWh energy offer floor. Once RTC is implemented in December 2025, these deployment issues will largely be resolved. Under RTC, the real-time market will automatically go short on reserves accordi…

### e45 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), variable table, ECRSPCTMAX and ECRSMWMIN · text copy line 2394 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …RUREQ MW Total capacity of Reg-Up in the Ancillary Service Plan RRSREQ MW Total capacity of RRS in the Ancillary Service Plan ECRSREQ MW Total capacity of ECRS in the Ancillary Service Plan RUPCT % Fixed percentage of Reg-Up included in the MCL RRSPCTMAX % Maximum RRS percentage included in the MCL 
QUOTE: ECRSPCTMAX % Maximum ECRS percentage included in the MCL ECRSMWMIN MW Minimum ECRS capacity included in the MCL
AFTER:  NSMWMIN MW Minimum Non-Spin capacity included in the MCL RUMW MW Capacity of Reg-Up included in the MCL RRSMW MW Capacity of RRS included in the MCL ECRSMW MW Capacity of ECRS included in the MCL NSMW MW Capacity of Non-Spin included in the MCL ------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): ECRS is an Ancillary Service; see that topic for plan, obligations and cost. [e1]
- **Link to rrs** (cites e1): related RRS (Responsive Reserve Service): ECRS restores RRS after a deviation that significantly depletes it. [e1]
- **Link to regulation** (cites e6): related Regulation Up / Down: ECRS provides backup to Reg-Up. [e6]
- **Link to non-spin** (cites e7): related Non-Spinning Reserve: ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e7]
- **Link to eea** (cites e1, e6): related EEA (Energy Emergency Alert) Levels: ECRS provides energy to avoid or during an EEA. [e1][e6]
- **Link to energy-storage-resource** (cites e11): related Energy Storage Resource (ESR): ESRs provide a large share of ECRS. [e11]
- **Link to asdc** (cites e25, e26, e45) FLAG number-not-in-quote: 4.4: related ASDC (Ancillary Service Demand Curves): The ECRS demand curve has a Max Demand Price of VOLL + 50 in the Section 4.4.12 table, and the ECRS capacity included in the Minimum Contingency Level is governed by a maximum percentage and a minimum MW parameter. [e25][e26][e45]
- **Link to ordc** (cites e28) FLAG number-not-in-quote: 4.4: related ORDC (Operating Reserve Demand Curve): ECRS and Non-Spin share the remaining AORDC segments alternately under the current Section 4.4.12 disaggregation. [e28]
- **Link to rtc-b** (cites e38): related RTC+B (Real-Time Co-optimization + Batteries): With RTC ERCOT operators no longer manually deploy ECRS; SCED trades energy and AS using ASDC shortage prices. [e38]
- **Link to market-power-mitigation** (cites e44): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The IMM argued NPRR 1224's $750 energy offer floor on released ECRS capacity had no reasonable basis, and the Commission rejected the proposal in July 2024. [e44]

