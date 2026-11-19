---
id: ecrs
name: ECRS (ERCOT Contingency Reserve Service)
aliases: [ECRS, ERCOT Contingency Reserve Service, contingency reserve]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
---

## Definition

ERCOT Contingency Reserve Service (ECRS) is an ancillary service providing operating reserves intended to restore RRS within ten minutes after a deviation that significantly depletes it, to provide energy or continued load interruption to avoid or during an EEA, to provide backup regulation, and to be sustained for two consecutive hours. [e1]

## How it works

ECRS capacity can come from unloaded on-line generation, Quick Start Generation Resources, load resources with or without high-set under-frequency relays, and controllable load resources, generation resources operating in synchronous condenser fast-response mode, and ESRs. [e3] Load resources other than CLRs may supply no more than 50% of the total ECRS requirement, and ERCOT posts a monthly minimum capacity required from resources providing ECRS. [e4] ECRS provides resource capacity, or interruptible load, available for deployment on ten minutes' notice. [e2]

ERCOT deploys ECRS by Dispatch Instruction over ICCP to resources with status ONSC, or by message to load resources. [e5] The protocol lists four purposes: restore frequency to 60 Hz within ten minutes, provide energy to avoid or during an EEA, back up Reg-Up, and provide energy when capacity is insufficient for net load ramps. [e6] ERCOT then uses SCED and Non-Spin as soon as practicable to recover the ECRS reserves it used. [e7]

## ERCOT context

The IMM calls ECRS the latest addition to ERCOT's ancillary services, implemented in June 2023, and describes its purpose as restoring frequency within 10 minutes and recovering deployed regulation, as well as covering intra-hour net load forecast uncertainty. [e8][e9] In 2025 ECRS procurement volume fell by over 19% because the "adjustment for risk coverage" during sunset hours was removed, and ESRs supplied 42% of ECRS. [e10][e11]

The IMM also reports that the ECRS duration requirement was two hours until RTC went live and is one hour since, under NPRR 1282. [e12] The protocol definition quoted above still says two consecutive hours, so treat the duration as an open point. [e1]

## Key facts

- ECRS is capacity sustained for two consecutive hours under the definition in the Protocols. [e1]
- ECRS is deployable on ten minutes' notice. [e2]
- Load resources other than CLRs may provide up to 50% of the total ECRS requirement. [e4]
- ECRS was implemented in June 2023. [e9]
- In 2025 ESRs provided 42% of ECRS and the ECRS procurement volume fell by over 19%. [e10][e11]

## Say it like this

ECRS is the contingency reserve that backs up RRS and regulation: it restores frequency within ten minutes and supplies energy before or during an emergency. It can come from generators, quick-start units and load, and ESRs supply a large share. [e1][e3][e6][e11]

## Common confusion

ECRS and RRS are often swapped. RRS is intended to arrest frequency decay within the first few seconds of a significant frequency deviation, [e13] and ECRS is intended to restore RRS within ten minutes after that. [e1] ERCOT deploys ECRS by Dispatch Instruction. [e5] ECRS is also not Non-Spin: ERCOT uses Non-Spin to recover ECRS after it is deployed. [e7]

## Questions

### What is ECRS for?

To restore RRS within ten minutes after a significant depletion, to provide energy to avoid or during an EEA, to back up regulation, and to cover insufficient capacity for net load ramps. [e1][e6]

### What is the duration requirement?

The Protocol definition says two consecutive hours. [e1] The IMM says it was two hours until RTC and then one hour under NPRR 1282. [e12]

### Who provides ECRS?

Generators, quick-start units, loads and ESRs can; ESRs provided 42% in 2025. [e3][e11]

## Open items

- Protocol text says two consecutive hours; the IMM says one hour since RTC under NPRR 1282. The saved Protocols may not include NPRR1282 yet. Not reconciled.
- Deeper pass: ECRS qualification (Section 8.1.1.2.1.7), deployment performance (8.1.1.4.4), ECRS prices and the net load ramp risk adjustment in the AS Methodology.
- Deeper pass: how ECRS demand is priced in the ASDC and what a recall looks like in practice.
