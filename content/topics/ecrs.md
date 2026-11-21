---
id: ecrs
name: ECRS (ERCOT Contingency Reserve Service)
aliases: [ECRS, ERCOT Contingency Reserve Service, contingency reserve]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: ancillary-services
    type: part-of
    note: ECRS is an Ancillary Service; see that topic for plan, obligations and cost. [e1]
  - to: rrs
    type: related
    note: ECRS restores RRS after a deviation that significantly depletes it. [e1]
  - to: regulation
    type: related
    note: ECRS provides backup to Reg-Up. [e6]
  - to: non-spin
    type: related
    note: ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e7]
  - to: eea
    type: related
    note: ECRS provides energy to avoid or during an EEA. [e1][e6]
  - to: energy-storage-resource
    type: related
    note: ESRs provide a large share of ECRS. [e11]
  - to: asdc
    type: related
    note: The ECRS demand curve has a Max Demand Price of VOLL + 50 in the Section 4.4.12 table, and its quantity is capped as a share of the Minimum Contingency Level. [e25][e26]
  - to: ordc
    type: related
    note: ECRS and Non-Spin share the remaining AORDC segments alternately under the current Section 4.4.12 disaggregation. [e28]
  - to: rtc-b
    type: related
    note: With RTC ERCOT operators no longer manually deploy ECRS; SCED trades energy and AS using ASDC shortage prices. [e38]
  - to: market-power-mitigation
    type: related
    note: The IMM argued NPRR 1224's $750 energy offer floor on released ECRS capacity had no reasonable basis, and the Commission rejected the proposal in July 2024. [e44]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS)"
    quote: "An Ancillary Service that provides operating reserves that is intended to: (a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal; (b) Provide energy or continued Load interruption to avoid or during the implementation of an Energy Emergency Alert (EEA); (c) Provide backup regulation; and (d) Be sustained at a specified level for two consecutive hours."
  - id: e2
    source: np-03
    locator: "Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (3)"
    quote: "(3) ECRS may be used to provide energy prior to or during the implementation of an EEA. ECRS provides Resource capacity, or capacity from interruptible Load available for deployment on ten minutes’ notice."
  - id: e3
    source: np-03
    locator: "Section 3.17.4, paragraph (4)(a)-(f)"
    quote: "(4) ECRS may be provided by: (a) Unloaded, On-Line Generation Resource capacity; (b) Quick Start Generation Resources (QSGRs); (c) Load Resources that may or may not be controlled by high-set, under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs."
  - id: e4
    source: np-03
    locator: "Section 3.16, paragraph (7)"
    quote: "(7) Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing ECRS. The amount of Load Resources excluding CLRs that may or may not be on high-set under-frequency relays providing ECRS is limited to 50% of the total ERCOT ECRS requirement."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (2)(a)-(b)"
    quote: "(2) ERCOT shall deploy ECRS to meet NERC Standards and other performance criteria as specified in these Protocols and the Operating Guides by taking one or more of the following actions: (a) ERCOT shall issue ECRS deployment Dispatch Instructions, specifying the required MW output, over ICCP for Resources awarded ECRS with a Resource Status of ONSC. (b) Dispatch Instruction for deployment of energy from Load Resources via electronic Messaging System."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (1)"
    quote: "(1) ECRS is intended to: (a) Help restore the frequency to 60 Hz within ten minutes of a significant frequency deviation; (b) Provide energy to avoid, or during the implementation of, an EEA; (c) Provide backup to Reg-Up; and (d) Provide energy upon detection of insufficient available capacity for net load ramps."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (4)"
    quote: "(4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves."
  - id: e8
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of ECRS"
    quote: "ECRS is the latest addition to ERCOT’s suite of ancillary services. Its purpose is to restore frequency within 10 minutes of a significant frequency deviation and recover deployed regulation service. It also compensates for intra-hour net load forecast uncertainty. ECRS can be provided by online and offline units."
  - id: e9
    source: imm-som-2025
    locator: "Section F, Impact of ECRS on Real-Time Market Prices"
    quote: "The implementation of ECRS in June 2023 had a profound impact on the ERCOT wholesale market because its restrictive deployment criteria created high prices from artificial shortage conditions."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.A.1, Ancillary Services Procurement Targets"
    quote: "ECRS volume decreased by over 19% because of the removal of the “adjustment for risk coverage” during sunset hours."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.C.1, ECRS and NSRS Provision by ESRs"
    quote: "ESRs’ provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III.C.1, ECRS and NSRS Provision by ESRs"
    quote: "The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Responsive Reserve (RRS), paragraph (a)"
    quote: "Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load;"
  - id: e14
    source: np-08
    locator: "Section 8.1.1.3.4, ERCOT Contingency Reserve Service Capacity Monitoring Criteria, paragraph (2)"
    quote: "For the ECRS capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of ECRS reflected in that capability must be limited to the amount of ECRS that can be sustained by the Resource for at least one hour."
  - id: e15
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report, Revision Description"
    quote: "Updates duration requirement for ERCOT Contingency Reserve Service (ECRS) to one hour."
  - id: e16
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report, Effective Date"
    quote: "Upon system implementation of PR447, Real-Time Co-Optimization (RTC)"
  - id: e17
    source: np-08
    locator: "Section 8.1.1.2.1.7, paragraph (2)"
    quote: "Resources are required to undergo a qualification test to provide ECRS when the Resource is On-Line, which shall at least include the ability to provide applicable telemetry and market submissions. The amount of ECRS for which the Resource is qualified when On-Line will be limited to the amount of capacity that can be ramped or unloaded within ten minutes. Off-Line ECRS can only be provided by qualified QSGRs."
  - id: e18
    source: np-08
    locator: "Section 8.1.1.2.1.7, paragraph (3)"
    quote: "The amount of ECRS provided by individual Generation Resources and Load Resources is limited to ten times its telemetered emergency ramp rate. Each Resource providing ECRS must be capable of ramping the Resource’s Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS, and must be able to maintain the awarded level of deployment for at least one hour."
  - id: e19
    source: np-08
    locator: "Section 8.1.1.2.1.7, paragraph (4)"
    quote: "A Load Resource must be loaded and capable of unloading the awarded amount of ECRS within ten minutes of instruction by ERCOT and must either be immediately responsive to system frequency or be interrupted by action of under-frequency relays with settings as specified by the Operating Guides."
  - id: e20
    source: np-08
    locator: "Section 8.1.1.3.4, paragraph (4)"
    quote: "A Resource that is capable of providing ECRS and that has a Resource Status code of ONSC and an ECRS award is considered to be providing capability to the extent that it is not using that capacity to provide energy or other Ancillary Services."
  - id: e21
    source: np-08
    locator: "Section 8.1.1.4.4, paragraph (1), lead-in and (a)"
    quote: "Control performance during periods in which ERCOT has manually deployed ECRS shall be based on the requirements below and failure to meet any one of these requirements shall be reported to the Reliability Monitor as non-compliance: (a) For a Resource providing ECRS with a Resource Status of ONSC, once the ECRS is deployed, the Resource must maintain the response until recalled by ERCOT."
  - id: e22
    source: np-08
    locator: "Section 8.1.1.4.4, paragraph (1)(b)"
    quote: "For QSEs with Load Resources, excluding Controllable Load Resources, ten minutes following deployment instruction the sum of the QSE’s Load Resource response shall not be less than 95% of the requested MW deployment, nor more than 150% of the lesser of the following: (i) The QSE’s awards for ECRS from non-Controllable Load Resources; or (ii) The requested MW deployment."
  - id: e23
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (5)"
    quote: "Following a manual ECRS deployment to Load Resources, excluding CLRs, or Resources telemetering a Resource Status of ONSC, the QSE’s obligation to deliver ECRS remains in effect until ERCOT issues a recall instruction."
  - id: e24
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (6)"
    quote: "For Generation Resources, ESRs, and CLRs providing ECRS, Base Points include ECRS energy as well as any other energy dispatched by SCED. A Resource must be able to be fully dispatched by SCED to its ECRS Ancillary Service award within the ten-minute time frame according to its telemetered ramp rate that reflects the Resource’s capability of providing ECRS."
  - id: e25
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), ASDC price table"
    quote: "ECRS Max Demand Price $/MWh VOLL + 50"
  - id: e26
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), fixed parameters table"
    quote: "ECRSPCTMAX % 30 ECRSMWMIN MW 40"
  - id: e27
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), variable table"
    quote: "Minimum Contingency Level – the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW."
  - id: e28
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(b)(iii)"
    quote: "(iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and"
  - id: e29
    source: np-03
    locator: "Section 3.18, paragraph (4)(a)-(b)"
    quote: "(4) For ECRS: (a) The full amount of ECRS that can be awarded to an On-Line Generation Resource or ESR must be less than or equal to ten times the Emergency Ramp Rate; (b) The full amount of ECRS that can be awarded to a Quick Start Generation Resource (QSGR) must be less than or equal to its proven ten-minute capability as demonstrated pursuant to paragraph (16) of Section 8.1.1.2, General Capacity Testing Requirements; "
  - id: e30
    source: np-03
    locator: "Section 3.17.4, paragraph (2)(b)"
    quote: "Either manually or by using a four-second signal to provide energy on deployment by ERCOT."
  - id: e31
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Introduction"
    quote: "ECRS is a service that is provided using capacity that is capable of being ramped to a specified output level within 10 minutes."
  - id: e32
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "The frequency recovery related capacity for ECRS is computed for each hour in every month as capacity needed following a supply-side trip to recover frequency; will be based on expected diurnal load, solar, and wind patterns; will cover 70% of historic system inertia conditions for each hour for the month and will include an adjustment to account for Regulation Up requirement in the hour."
  - id: e33
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria."
  - id: e34
    source: ercot-as-methodology-2027
    locator: "Board item 18 (September 14-15, 2026), summary of proposed changes"
    quote: "Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories."
  - id: e35
    source: ercot-as-methodology-2027
    locator: "Board item 18, summary of proposed changes"
    quote: "Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold."
  - id: e36
    source: imm-som-2025
    locator: "Section F, Impact of ECRS on Real-Time Market Prices (page 32 (OCR))"
    quote: "Our analysis in the 2023 State of the Market report indicated that ECRS deployment practices resulted in approximately $12 billion in excess costs in the real-time market."
  - id: e37
    source: imm-som-2025
    locator: "Recommendation 2023-3 (page 156 (OCR))"
    quote: "After 2023, the impact of ERCOT’s ECRS deployment practices decreased substantially, falling to $720 million in 2024 and $90 million in 2025. This reduction in excess cost primarily resulted from increased supply from new solar and energy storage resources. These resources created enough market surplus to make ECRS deployment practices less impactful on real-time market outcomes. ERCOT maintained a policy of releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation, effectively forcing the real-time market into artificial shortage conditions."
  - id: e38
    source: imm-som-2025
    locator: "Section F, Impact of ECRS on Real-Time Market Prices (page 34 (OCR))"
    quote: "With RTC’s implementation in December 2025, ERCOT operators no longer manually deploy ECRS. Instead, SCED can make economic trade-offs between procuring energy and ancillary services in real time using reserve shortage prices under an ancillary service demand curve (ASDC)."
  - id: e39
    source: imm-som-2025
    locator: "Chapter III.A.2, Figure 25 inset table, ECRS row (page 62 (OCR))"
    quote: "ECRS - - $73.18 $9.56 $2.65"
  - id: e40
    source: imm-som-2025
    locator: "Chapter III.C.2, ECRS Provision from NCLRs (page 65 (OCR))"
    quote: "In 2025, ECRS prices did not clear at a premium to RRS, unlike in 2023 and 2024. However, initial RTC results show that ECRS consistently clears above RRS, driven in part by differences in duration requirements across ancillary service products in RTC."
  - id: e41
    source: imm-som-2025
    locator: "Chapter III.C.1 (page 65 (OCR))"
    quote: "However, we continue to recommend that ERCOT adopt a one-hour duration requirement for both ECRS and NSRS, as detailed in Recommendation 2024-2."
  - id: e42
    source: imm-som-2025
    locator: "Appendix, Table A2 (page 163 (OCR))"
    quote: "Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420"
  - id: e43
    source: imm-som-2025
    locator: "Chapter III.D, AS Methodology is Misaligned with Reliability Outcomes (OCR)"
    quote: "Setting operating reserve targets to meet a one-in-ten standard for the probability of entering a “Watch,” defined as reserves dropping below 3,000 MW, rather than for the probability of firm load shed, defined as reserves dropping below 1,500 MW. This parameter increases the AS Plan target level by approximately 43%."
  - id: e44
    source: imm-som-2024
    locator: "Ancillary Services, ECRS deployment (NPRR 1224)"
    quote: "NPRR 1224 would have established formal deployment criteria based on real-time market conditions, deploying in 500 MW increments when power balance violations exceeded 40 MW for 10 consecutive minutes. Additionally, the capacity released to SCED would be subject to a $750 per MWh energy offer floor, for which there is no reasonable basis. Hence, we found this proposal to be flawed and it was ultimately rejected by the Commission in July 2024."

---

## Definition

ERCOT Contingency Reserve Service (ECRS) is an ancillary service providing operating reserves intended to restore RRS within ten minutes after a deviation that significantly depletes it, to provide energy or continued load interruption to avoid or during an EEA, to provide backup regulation, and to be sustained for two consecutive hours. [e1] (The "two consecutive hours" wording is the Section 2 definition as saved; see Duration below and Open items.)

## How it works

ECRS capacity can come from unloaded on-line generation, Quick Start Generation Resources, load resources with or without high-set under-frequency relays, and controllable load resources, generation resources operating in synchronous condenser fast-response mode, and ESRs. [e3] Load resources other than CLRs may supply no more than 50% of the total ECRS requirement, and ERCOT posts a monthly minimum capacity required from resources providing ECRS. [e4] ECRS provides resource capacity, or interruptible load, available for deployment on ten minutes' notice. [e2] ECRS may be deployed manually or by a four-second signal to provide energy. [e30]

**Qualification.** A Resource must pass a qualification test when On-Line, covering at least telemetry and market submissions; the On-Line qualification is limited to what can be ramped or unloaded within ten minutes, and Off-Line ECRS can only be provided by qualified QSGRs. [e17] A Resource's ECRS is limited to ten times its telemetered emergency ramp rate; it must ramp its award within ten minutes of the notice to deploy and maintain the awarded level for at least one hour. [e18] In the Ancillary Service limits section the same ten-times-Emergency-Ramp-Rate cap applies to On-Line Generation Resources and ESRs, and a QSGR's ECRS is limited to its proven ten-minute capability. [e29] A Load Resource must be loaded and able to unload the awarded amount within ten minutes and either respond immediately to frequency or be interrupted by under-frequency relays. [e19] A Resource in status ONSC with an ECRS award counts as providing capability to the extent it is not using that capacity for energy or other Ancillary Services. [e20]

**Deployment and recall.** ERCOT deploys ECRS by Dispatch Instruction over ICCP to resources with status ONSC, or by message to load resources. [e5] The protocol lists four purposes: restore frequency to 60 Hz within ten minutes, provide energy to avoid or during an EEA, back up Reg-Up, and provide energy when capacity is insufficient for net load ramps. [e6] After a manual deployment to Load Resources (excluding CLRs) or Resources telemetering ONSC, the QSE's obligation to deliver ECRS remains until ERCOT issues a recall instruction. [e23] For Generation Resources, ESRs and CLRs, Base Points include ECRS energy plus any other SCED energy, and the Resource must be able to be fully dispatched to its ECRS award within ten minutes at its telemetered ramp rate. [e24] ERCOT then uses SCED and Non-Spin as soon as practicable to recover the ECRS reserves it used. [e7]

**Performance.** For manual deployments, failing any performance requirement is reported to the Reliability Monitor as non-compliance; a Resource in ONSC must maintain its response until recalled. [e21] Ten minutes after the deployment instruction a QSE's Load Resource portfolio response must be at least 95% of the requested MW and not more than 150% of the lesser of its non-CLR ECRS awards or the requested deployment. [e22]

**How much ERCOT buys.** The 2026 methodology says the frequency-recovery capacity for ECRS is the capacity needed after a supply-side trip, covers 70% of historic system inertia conditions for each hour and includes an adjustment for the Reg-Up requirement. [e32] The combined ECRS and Non-Spin requirement comes from a Monte Carlo optimization that takes risk and credits 60% of historically available capacity at night (HE23-HE5) and 25% in day hours (HE6-HE22); [e33] ERCOT's description of the capacity is "capable of being ramped to a specified output level within 10 minutes." [e31] ERCOT's 2027 proposal (Board item, September 14-15, 2026; outcome not in the saved sources) would raise the daytime credit to 50% for online and offline generation and 60% for ESRs with four-hour sustainable duration, and lower the convergence threshold from Watch (3,000 MW) to EEA1 (2,500 MW). [e34][e35]

**Pricing in the ASDC.** In Protocol Section 4.4.12 the ECRS Max Demand Price is VOLL + 50, [e25] the fixed parameters include an ECRS maximum percentage of 30 and a minimum of 40 MW in the Minimum Contingency Level calculation, [e26] and the MCL is 3,000 MW, defined as the minimum reserves ERCOT considers necessary to avoid a system-wide failure. [e27] Beyond the MCL, the remaining 1 MW segments of the AORDC are assigned alternately to ECRS and Non-Spin until both requirements are met (current text; NPRR1309 would replace this upon implementation). [e28]

## ERCOT context

The IMM calls ECRS the latest addition to ERCOT's ancillary services, implemented in June 2023, and describes its purpose as restoring frequency within 10 minutes and recovering deployed regulation, as well as covering intra-hour net load forecast uncertainty. [e8][e9] In 2025 ECRS procurement volume fell by over 19% because the "adjustment for risk coverage" during sunset hours was removed, and ESRs supplied 42% of ECRS. [e10][e11]

Deployment history: the IMM's 2023 analysis estimated that ECRS deployment practices produced approximately $12 billion in excess real-time costs, [e36] which it says fell to $720 million in 2024 and $90 million in 2025, mainly because new solar and storage supply made the practices less impactful; ERCOT kept a policy of releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation. [e37] ERCOT's March 2024 NPRR 1224 would have set deployment criteria (500 MW increments when power balance violations exceeded 40 MW for 10 consecutive minutes) with a $750 per MWh energy offer floor on released capacity; the IMM said the floor had no reasonable basis, and the Commission rejected the proposal in July 2024, though ERCOT implemented the deployment process without the floor. [e44] With RTC in December 2025 operators no longer manually deploy ECRS; SCED trades energy and AS using ASDC reserve shortage prices. [e38]

Prices: ECRS annual average DAM prices were $73.18 (2023), $9.56 (2024) and $2.65 (2025) per MWh in the IMM's 2025 report (OCR copy). [e39] The IMM says ECRS cleared at no premium to RRS in 2025, unlike 2023 and 2024, but initial RTC results show ECRS consistently clearing above RRS, driven partly by duration differences. [e40] In the IMM's Table A2, covering the first RTC months (the OCR header reads "December 5, 2026, through February 2026", apparently a typo), the day-ahead ECRS average was $3.67 against $0.71 in real time, a 420% premium (energy: $50.21 against $37.03, 36%). [e42]

The duration requirement changed with RTC. NPRR1282 updated the ECRS duration requirement to one hour, effective upon system implementation of Real-Time Co-Optimization. [e15][e16] The IMM reports the same: two hours until RTC was implemented, one hour since. [e12] The IMM continues to recommend one hour for both ECRS and NSRS (Recommendation 2024-2). [e41] The current Protocols' capacity monitoring criteria limit a Resource's ECRS capability to what it can sustain for at least one hour. [e14] The general description of ECRS in Section 3 of the Protocols still reads "two consecutive hours". [e1]

The IMM argues ERCOT's 2026 methodology sets targets too high: setting the one-in-ten standard against Watch (3,000 MW) rather than firm load shed (1,500 MW) increases the AS Plan target by approximately 43%, in the IMM's estimate. [e43]

## Key facts

- A Resource's ECRS capability is limited to what it can sustain for at least one hour. [e14] NPRR1282 set the one-hour requirement, effective with RTC. [e15][e16] The general description in Section 3 of the Protocols still says two consecutive hours. [e1]
- ECRS is deployable on ten minutes' notice and must ramp within ten minutes. [e2][e18]
- ECRS is capped at ten times the Resource's emergency ramp rate. [e18]
- Load resources other than CLRs may provide up to 50% of the total ECRS requirement. [e4]
- ECRS was implemented in June 2023. [e9]
- ECRS annual average DAM price: $73.18 (2023), $9.56 (2024), $2.65 (2025). [e39]
- In 2025 ESRs provided 42% of ECRS and the ECRS procurement volume fell by over 19%. [e10][e11]
- ECRS Max Demand Price in the ASDC table is VOLL + 50. [e25]

## Say it like this

ECRS is the contingency reserve that backs up RRS and regulation: it restores frequency within ten minutes and supplies energy before or during an emergency. It can come from generators, quick-start units and load, and ESRs supply a large share. Since RTC, SCED decides when it is used rather than an operator. [e1][e3][e6][e11][e38]

## Common confusion

ECRS and RRS are often swapped. RRS is intended to arrest frequency decay within the first few seconds of a significant frequency deviation, [e13] and ECRS is intended to restore RRS within ten minutes after that. [e1] ERCOT deploys ECRS by Dispatch Instruction. [e5] ECRS is also not Non-Spin: ERCOT uses Non-Spin to recover ECRS after it is deployed. [e7] "Deployed" no longer means an operator decision under RTC: the IMM says operators no longer manually deploy ECRS. [e38] The Protocol text on manual deployment and recall remains in the saved Section 6.5.7.6.2.4. [e23]

## Questions

### What is ECRS for?

To restore RRS within ten minutes after a significant depletion, to provide energy to avoid or during an EEA, to back up regulation, and to cover insufficient capacity for net load ramps. [e1][e6]

### What is the duration requirement?

One hour since RTC went live. NPRR1282 updated the requirement to one hour, effective upon system implementation of RTC, and the Protocols' capacity monitoring criteria use one hour. [e15][e16][e14] It was two hours before, and the general description of ECRS in Section 3 still says two consecutive hours. [e12][e1]

### Who provides ECRS?

Generators, quick-start units, loads and ESRs can; ESRs provided 42% in 2025. [e3][e11]

### Why did ECRS cause such large excess real-time costs in 2023?

The IMM says restrictive deployment criteria created high prices from artificial shortage conditions, with ERCOT releasing ECRS only after ten consecutive minutes of at least 40 MW of under-generation. [e9][e37]

### What if an ECRS-awarded Resource is deployed and then does not hold its response?

For manual deployments, failure to meet any performance requirement is reported to the Reliability Monitor as non-compliance, and a Resource in ONSC must maintain the response until ERCOT recalls it. [e21]

### Why does the ECRS price premium over RRS matter to load resources?

The IMM says NCLRs can supply no more than 50% of the ECRS Plan, and that if ECRS keeps clearing above RRS under RTC, more NCLRs may shift from RRS to ECRS. [e40][e4]

### How is ECRS priced in the ASDC?

The ECRS Max Demand Price is VOLL + 50 until the Minimum Contingency Level (3,000 MW) is satisfied, and beyond it the remaining AORDC segments are split alternately between ECRS and Non-Spin. [e25][e27][e28]

## Open items

- Resolved 2026-11-21: ECRS qualification (np-08 8.1.1.2.1.7), deployment performance (8.1.1.4.4) and the ASDC pricing (np-04 4.4.12) are now covered. NPRR1282 (PUCT report) and Protocols Section 8.1.1.3.4 give one hour since RTC. Section 3's and Section 2's general description still says "two consecutive hours"; the saved sources do not say whether that wording is meant to remain.
- The saved Section 3.17.4 describes ECRS as deployed manually or by a four-second signal; the IMM says operators no longer manually deploy ECRS under RTC. How the Protocol text in Section 6.5.7.6.2.4 is applied under RTC is not stated in the saved sources.
- The net load ramp risk adjustment: the 2026 methodology's ECRS and Non-Spin procedure speaks of net load ramp risk for Non-Spin; no separate ECRS ramp-risk quantity was found.
- The 2027 AS methodology is a Board item (September 14-15, 2026); approval by the Board and the PUCT is not in the saved sources.
- The ECRS price in the IMM 2024 report ($9.62 for 2024, $76.77 for 2023) differs from the 2025 report's figures ($9.56, $73.18); the sources do not explain the difference.
- Meaning of the ASDC parameters "ECRSPCTMAX 30" and "ECRSMWMIN 40" is inferred from their variable names (maximum percentage and minimum MW of ECRS included in the MCL); the variable table was not quoted for those two.
