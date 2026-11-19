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

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market, description of ECRS · text copy line 3851

BEFORE: …ncy Relay (UFR), which deploys by tripping NCLRs after a sufficient drop in frequency; and (3) Fast Frequency Response (FFR), which is overwhelmingly provided by energy storage resources (ESRs) that can respond to deviations in frequency within 30 cycles. • ERCOT Contingency Reserve Service (ECRS). 
QUOTE: ECRS is the latest addition to ERCOT's suite of ancillary services. Its purpose is to restore frequency within 10 minutes of a significant frequency deviation and recover deployed regulation service. It also compensates for intra-hour net load forecast uncertainty. ECRS can be provided by online and offline units.
AFTER:  • Non-Spin Reserve Service (NSRS). NSRS resources can respond within 30 minutes and are needed to compensate for intra-hour net load forecast uncertainty that results in under-commitments of capacity or inefficient dispatch instructions. Online and offline units can provide NSRS. 38 | 2025 State of…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section F, Impact of ECRS on Real-Time Market Prices · text copy line 2025

BEFORE: … - Annual, Peak and Net Peak Load !""#$#%C'#(#$)G+,(C-).)/+G0C1'O3 ""! "!! *! F! (! ?"!!!@ABCH7 ?(C@?"!!! ?a"!EFd7e0>W0?(C ?!@?a"!EFd7e fg! KOLWL09A9 '! C! B! A! #! "! ! #!#B #!#C HII-.L0HNOP.4O05SSOP #!#B #!#C 7O.809W.;0<W-P #!#B #!#C 7O.80=O>09W.;0<W-P F. Impact of ECRS on Real-Time Market Prices 
QUOTE: The implementation of ECRS in June 2023 had a profound impact on the ERCOT wholesale market because its restrictive deployment criteria created high prices from artificial shortage conditions.
AFTER:  Our analysis in the 2023 State of the Market report indicated that ECRS deployment practices resulted in approximately $12 billion in excess costs in the real-time market. Since then, the pricing impact of ECRS has been less severe, largely because of supply and demand fundamentals. Solar and energ…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.1, Ancillary Services Procurement Targets · text copy line 3880

BEFORE: …2025 in Figure 24. The average magnitude of the AS Plan increased substantially from 2021 to 2023, then decreased in subsequent years and remained roughly the same from 2024 to 2025. 31 Despite the consistent total volume of ancillary services, procurement volumes changed notably across products: • 
QUOTE: ECRS volume decreased by over 19% because of the removal of the "adjustment for risk coverage" during sunset hours.
AFTER:  • Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error. • NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors. Our section on ERCOT's AS Methodology provides more detail on this topic. Figure 24: Avera…

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

## Statements to check

- **Definition #1** (cites e1): ERCOT Contingency Reserve Service (ECRS) is an ancillary service providing operating reserves intended to restore RRS within ten minutes after a deviation that significantly depletes it, to provide energy or continued load interruption to avoid or during an EEA, to provide backup regulation, and to be sustained for two consecutive hours. [e1]
- **How it works #1** (cites e3, e4, e2): ECRS capacity can come from unloaded on-line generation, Quick Start Generation Resources, load resources with or without high-set under-frequency relays, and controllable load resources, generation resources operating in synchronous condenser fast-response mode, and ESRs. [e3] Load resources other than CLRs may supply no more than 50% of the total ECRS requirement, and ERCOT posts a monthly minimum capacity required from resources providing ECRS. [e4] ECRS provides resource capacity, or interruptible load, available for deployment on ten minutes' notice. [e2]
- **How it works #2** (cites e5, e6, e7): ERCOT deploys ECRS by Dispatch Instruction over ICCP to resources with status ONSC, or by message to load resources. [e5] The protocol lists four purposes: restore frequency to 60 Hz within ten minutes, provide energy to avoid or during an EEA, back up Reg-Up, and provide energy when capacity is insufficient for net load ramps. [e6] ERCOT then uses SCED and Non-Spin as soon as practicable to recover the ECRS reserves it used. [e7]
- **ERCOT context #1** (cites e8, e9, e10, e11): The IMM calls ECRS the latest addition to ERCOT's ancillary services, implemented in June 2023, and describes its purpose as restoring frequency within 10 minutes and recovering deployed regulation, as well as covering intra-hour net load forecast uncertainty. [e8][e9] In 2025 ECRS procurement volume fell by over 19% because the "adjustment for risk coverage" during sunset hours was removed, and ESRs supplied 42% of ECRS. [e10][e11]
- **ERCOT context #2** (cites e12, e1): The IMM also reports that the ECRS duration requirement was two hours until RTC went live and is one hour since, under NPRR 1282. [e12] The protocol definition quoted above still says two consecutive hours, so treat the duration as an open point. [e1]
- **Key facts #1** (cites e1): - ECRS is capacity sustained for two consecutive hours under the definition in the Protocols. [e1]
- **Key facts #2** (cites e2): - ECRS is deployable on ten minutes' notice. [e2]
- **Key facts #3** (cites e4): - Load resources other than CLRs may provide up to 50% of the total ECRS requirement. [e4]
- **Key facts #4** (cites e9): - ECRS was implemented in June 2023. [e9]
- **Key facts #5** (cites e10, e11): - In 2025 ESRs provided 42% of ECRS and the ECRS procurement volume fell by over 19%. [e10][e11]
- **Say it like this #1** (cites e1, e3, e6, e11): ECRS is the contingency reserve that backs up RRS and regulation: it restores frequency within ten minutes and supplies energy before or during an emergency. It can come from generators, quick-start units and load, and ESRs supply a large share. [e1][e3][e6][e11]
- **Common confusion #1** (cites e13, e1, e5, e7): ECRS and RRS are often swapped. RRS is intended to arrest frequency decay within the first few seconds of a significant frequency deviation, [e13] and ECRS is intended to restore RRS within ten minutes after that. [e1] ERCOT deploys ECRS by Dispatch Instruction. [e5] ECRS is also not Non-Spin: ERCOT uses Non-Spin to recover ECRS after it is deployed. [e7]
- **Questions #2** (cites e1, e6): To restore RRS within ten minutes after a significant depletion, to provide energy to avoid or during an EEA, to back up regulation, and to cover insufficient capacity for net load ramps. [e1][e6]
- **Questions #4** (cites e1, e12): The Protocol definition says two consecutive hours. [e1] The IMM says it was two hours until RTC and then one hour under NPRR 1282. [e12]
- **Questions #6** (cites e3, e11): Generators, quick-start units, loads and ESRs can; ESRs provided 42% in 2025. [e3][e11]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): ECRS is an Ancillary Service; see that topic for plan, obligations and cost. [e1]
- **Link to rrs** (cites e1): related RRS (Responsive Reserve Service): ECRS restores RRS after a deviation that significantly depletes it. [e1]
- **Link to regulation** (cites e6): related Regulation Up / Down: ECRS provides backup to Reg-Up. [e6]
- **Link to non-spin** (cites e7): related Non-Spinning Reserve: ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e7]
- **Link to eea** (cites e1, e6): related EEA (Energy Emergency Alert) Levels: ECRS provides energy to avoid or during an EEA. [e1][e6]
- **Link to energy-storage-resource** (cites e11): related Energy Storage Resource (ESR): ESRs provide a large share of ECRS. [e11]
