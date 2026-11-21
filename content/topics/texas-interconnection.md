---
id: texas-interconnection
name: Texas Interconnection & DC Ties
aliases: [ERCOT Interconnection, Texas Interconnection, ERCOT System, DC Ties, DC Tie, asynchronous ties]
kind: concept
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: ercot
    type: related
    note: ERCOT may order the disconnection of Transmission Facilities connecting the ERCOT Region to another Control Area so that entities in the region do not become Federal Power Act public utilities. [e9]
  - to: ferc
    type: contrasts-with
    note: The FERC-NERC report says ERCOT's wholesale market is not regulated by FERC because power exchanges occur wholly within the state. [e8]
  - to: puct
    type: related
    note: The Protocols define the ERCOT System as the interconnected system under PUCT jurisdiction that is not synchronized with the Eastern or Western grids. [e1]
  - to: winter-storm-uri
    type: related
    note: During Uri, ERCOT's 1,220 MW import limit meant it could not import thousands of MW the way MISO and SPP did. [e13]
  - to: ancillary-services
    type: affects
    note: Because the grid is isolated, all frequency response has to come from resources inside ERCOT. [e7]
  - to: nerc
    type: related
    note: ERCOT is a separate interconnection for reliability purposes, with its own frequency-response needs. [e3][e7]
  - to: eea
    type: related
    note: In EEA Level 1, one prescribed step is to use available DC Tie import capacity that is not already being used. [e25]
  - to: settlement-point
    type: related
    note: A DC Tie importer is treated as a Resource, and an exporter as a Load, at the DC Tie Settlement Point. [e18][e19]
  - to: ruc
    type: related
    note: DC Tie Schedules on e-Tags reported before 1430 Day-Ahead create capacity supply or obligation in the DRUC. [e20]
  - to: spp
    type: settles
    note: Energy imported over a DC Tie is paid at the Real-Time Settlement Point Price at the DC Tie Settlement Point. [e24]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of ERCOT System"
    quote: "The interconnected power system that is under the jurisdiction of the PUCT and that is not synchronously interconnected with either the Eastern Interconnection or the Western Electricity Coordinating Council."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Direct Current Tie (DC Tie)"
    quote: "Any non-synchronous transmission interconnections between ERCOT and non-ERCOT electric power systems."
  - id: e3
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, Interconnections Between Affected Entities and Other Parts of the Electric Grid"
    quote: "ERCOT operates as a functionally separate interconnection (as shown in Figure 7 below), although it has four asynchronous ties with other interconnections. There are two Direct Current (DC) transmission tie lines 50 between ERCOT and the Eastern Interconnection through SPP: The North Tie, and the East Tie."
  - id: e4
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, Interconnections Between Affected Entities and Other Parts of the Electric Grid"
    quote: "In addition, there are two DC ties between ERCOT and Mexico's Grid Operator CENACE: The Laredo Variable Frequency Tie, and the Railroad Tie."
  - id: e5
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, discussion of Recommendation 25"
    quote: "ERCOT does not have any synchronous connections to the Eastern Interconnection, Western Interconnection, or Mexican grid. ERCOT's Interconnection has approximately 1,220 MW of asynchronous direct current ties to SPP (820 MW) and Mexico (400 MW)."
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, H. Imports and Exports Via DC Ties"
    quote: "The ERCOT region is connected to neighboring systems through several direct current (DC) ties. Two ties with the Southwest Power Pool (SPP) provide 820 MW of transfer capability, and two ties with Mexico's Comisión Federal de Electricidad provide 400 MW. Power can flow in either direction across these ties; exports increase demand and imports increase supply in ERCOT."
  - id: e7
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, frequency response discussion"
    quote: "Because ERCOT is not synchronously connected to either the Eastern or Western Interconnections, all frequency response must come from resources internal to ERCOT's BA area. And because ERCOT is smaller than the other interconnections, the loss of any given generating unit results in a comparatively steeper frequency decline, necessitating a more robust frequency response."
  - id: e8
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, Appendix J, footnote 378"
    quote: "ERCOT manages a wholesale energy market which is not regulated by FERC, since the exchange of power between entities occur wholly within the state not through interstate commerce."
  - id: e9
    source: np-01
    locator: "Section 1.2(9), Functions of ERCOT"
    quote: "Notwithstanding any other provision in these Protocols, ERCOT shall take any action, and shall direct any Market Participant to take any action, that ERCOT deems necessary to ensure that any Entity in the ERCOT Region that is not a \"public utility\" as defined in the Federal Power Act (FPA), including ERCOT, does not become such a public utility. ERCOT's authority includes, but is not limited to, the authority to order the disconnection of any Transmission Facilities connecting the ERCOT Region to another Control Area and the authority to deny or curtail Electronic Tags (e-Tags) over any Direct Current Tie (DC Tie)."
  - id: e10
    source: imm-som-2025
    locator: "2025 State of the Market Report, H. Imports and Exports Via DC Ties"
    quote: "In 2025, ERCOT reverted to a net importer of energy through its DC ties with neighboring regions. ERCOT remained a net exporter to Mexico and a net importer from SPP. These volumes are shown on an energy basis. For context, the average net power flowing into ERCOT was very small relative to system-wide demand, approximately 36 MW for all of 2025."
  - id: e11
    source: imm-som-2024
    locator: "2024 State of the Market Report, D. Imports to ERCOT"
    quote: "In 2024, ERCOT was a net exporter for the first time since 2018. Although it remained a net importer from the SPP, net exports to Mexico were large enough to offset those imports."
  - id: e12
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, ERCOT seasonal assessment discussion"
    quote: "ERCOT does not classify flows across its DC ties as firm capacity because such flows are scheduled as day-ahead energy transactions. However, in its SARA, ERCOT assumed an expected amount of net imports based on the average amount of net imports reported during winter 2013/2014 EEA intervals."
  - id: e13
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, footnote 197"
    quote: "The entire ERCOT Interconnection has a maximum total import limitation of only 1,220 MW over its direct current ties with SPP (Eastern Interconnection) and CENACE (Mexico). ERCOT did schedule power to be imported to the extent available from the Eastern Interconnection. ERCOT, unlike MISO and SPP (who collectively imported nearly 13,000 MW) did not have the ability to import many thousands of MW from the Eastern Interconnection."
  - id: e14
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, Description of Affected Electric Grid Entities"
    quote: "ERCOT is an Independent System Operator (ISO) 34 that covers approximately 75 percent of the landmass in Texas, excluding the El Paso Area, part of the northern panhandle, and part of east Texas north and east of Houston to the Louisiana border."
  - id: e15
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 2, discussion of Figure 2-4 (NERC regions)"
    quote: "Nationally, the grid is geographically split into three main sections – the Western, Eastern and Texas Interconnections. These sections operate independently and have limited interconnections between them."
  - id: e16
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 2, RTOs/ISOs introduction"
    quote: "Currently, seven RTO/ISOs operate in the United States, listed below in order of the size of their all-time peak load.130 FERC regulates all RTOs/ISOs except ERCOT."
  - id: e17
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 2, Power Pools"
    quote: "The Electric Reliability Council of Texas (ERCOT) and the Southwest Power Pool (SPP) formed in 1941 to pool resources for the war effort."
  - id: e18
    source: np-04
    locator: "Section 4.4.4(3), DC Tie Schedules"
    quote: "A QSE that is an importer into ERCOT through a DC Tie in a Settlement Interval under an approved e-Tag must be treated as a Resource at that DC Tie Settlement Point for that Settlement Interval."
  - id: e19
    source: np-04
    locator: "Section 4.4.4(4), DC Tie Schedules"
    quote: "A QSE that is an exporter from ERCOT through a DC Tie in a Settlement Interval under an approved e-Tag must be treated as a Load at the DC Tie Settlement Point for that Settlement Interval and is responsible for allocated Transmission Losses, Unaccounted for Energy (UFE), System Administration Fee, and any other applicable ERCOT fees."
  - id: e20
    source: np-04
    locator: "Section 4.4.4(2), DC Tie Schedules"
    quote: "A DC Tie Schedule for hours in the Operating Day corresponding to an Electronic Tag (e-Tag) that is reported to ERCOT before 1430 in the Day-Ahead creates a capacity supply for the equivalent Resource or an obligation for the equivalent Load of the DC Tie in the DRUC process. DC Tie Schedules corresponding to e-Tags approved after 1430 in the Day-Ahead for the Operating Day create a capacity supply or obligation in any applicable HRUC processes."
  - id: e21
    source: np-04
    locator: "Section 4.4.4(11), DC Tie Schedules"
    quote: "DC Tie Load is considered as Load for daily and hourly reliability studies, and settled as Adjusted Metered Load (AML). DC Tie Load is curtailed prior to other Load on the ERCOT System as described below, and during Energy Emergency Alert (EEA) events as set forth in Section 6.5.9.4.2, EEA Levels."
  - id: e22
    source: np-04
    locator: "Section 4.4.4(17), DC Tie Schedules (followed by a box: NPRR1030 deletes it upon system implementation)"
    quote: "Market Participants shall not engage in DC Tie export transactions that are reasonably expected to be uneconomic in consideration of all costs and revenues associated with the transaction, excluding Congestion Revenue Right (CRR) Auction Revenue Distribution (CARD) and CRR Balancing Account (CRRBA) allocations."
  - id: e23
    source: np-04
    locator: "Section 4.4.4(1), DC Tie Schedules (current text; a pending NPRR857 box would replace it)"
    quote: "All schedules between the ERCOT Control Area and a non-ERCOT Control Area(s) over Direct Current Tie(s) (DC Ties(s)), must be implemented under these Protocols, any applicable North American Electric Reliability Corporation (NERC) Reliability Standards, North American Energy Standards Board (NAESB) Practice Standards, and operating agreements between ERCOT and the Comision Federal de Electricidad (CFE)."
  - id: e24
    source: np-06
    locator: "Section 6.6.3.4(1), Real-Time Energy Payment for DC Tie Import"
    quote: "The payment to each QSE for energy imported into the ERCOT System through each DC Tie is calculated based on the Real-Time Settlement Point Price at the DC Tie Settlement Point. The payment for a given 15-minute Settlement Interval is calculated as follows: RTDCIMPAMT _(q, p) = (-1) * RTSPP _(p) * (RTDCIMP _(q, p) * ¼)"
  - id: e25
    source: np-06
    locator: "Section 6.5.9.4.2(1)(a), EEA Levels (EEA Level 1 actions)"
    quote: "ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW: (i) Request available Generation Resources that can perform within the expected timeframe of the emergency to come On-Line by initiating manual HRUC or through Dispatch Instructions, and request available ESRs that can perform within the expected timeframe of the emergency to come On-Line through Dispatch Instructions; (ii) Use available DC Tie import capacity that is not already being used;"
  - id: e26
    source: imm-som-2020
    locator: "2020 State of the Market Report, C. Imports to ERCOT"
    quote: "Two ties totaling 820 MW connect ERCOT with the Southwest Power Pool (SPP) and three ties totaling 430 MW connect ERCOT with Comisión Federal de Electricidad (CFE) in Mexico."
  - id: e27
    source: imm-som-2022
    locator: "2022 State of the Market Report, B. Imports to ERCOT"
    quote: "The figure shows that ERCOT remained a net importer in 2022, and by an even wider margin than in 2021. This trend began in 2018 because of tightening supply in ERCOT and the resulting higher prices in 2018 and 2019. The amount of tie activity in general in 2022 was higher than the activity in 2021 because of the higher prices resulting from high summer demand, as well as the ORDC shift implemented on January 1, 2022."
  - id: e28
    source: imm-som-2023
    locator: "2023 State of the Market Report, Imports to ERCOT (after Figure 17)"
    quote: "Even though ERCOT remained a net importer in 2023, ERCOT imported less in 2023 than in 2022. However, the amount of tie activity in 2023 was still higher than the activity in 2021."
  - id: e29
    source: pura-39
    locator: "PURA §39.151(a), Essential Organizations"
    quote: "A power region must establish one or more independent organizations to perform the following functions:(1)  ensure access to the transmission and distribution systems for all buyers and sellers of electricity on nondiscriminatory terms;(2)  ensure the reliability and adequacy of the regional electrical network;"
  - id: e30
    source: nog-02
    locator: "Nodal Operating Guide Section 2.6.3(1), Frequency Ride-Through Requirements for DC Ties"
    quote: "The following Direct Current Ties (DC Ties) are subject to the frequency ride-through requirements specified in this Section: (a) Any DC Tie with an initial energization date after January 1, 2021. (b) Any DC Tie that is modified by increasing the physical capacity of the DC Tie by 20 MW or more or by changing the power converter associated with the DC Tie, unless the replacement is in-kind."
  - id: e31
    source: np-04
    locator: "Section 4.4.4(13), DC Tie Schedules"
    quote: "If a system operator in a non-ERCOT Control Area requests curtailment of a DC Tie Schedule due to an actual or anticipated emergency in its Control Area, ERCOT may curtail the DC Tie Schedule."
  - id: e32
    source: imm-som-2020
    locator: "2020 State of the Market Report, C. Imports to ERCOT"
    quote: "The figure shows that ERCOT remained a net importer in 2020. This trend began in 2018 due to tightening supply in ERCOT and the resulting higher prices in 2018 and 2019."
  - id: e33
    source: np-06
    locator: "Section 6.6.3.4(1), variable table (RTDCIMPAMT, RTSPP, RTDCIMP)"
    quote: "RTDCIMP _(q, p) | MW | Real-Time DC Import per QSE per Settlement Point—The aggregated DC Tie Schedule submitted by QSE q as an importer into the ERCOT System through DC Tie p, for the 15-minute Settlement Interval."
  - id: e34
    source: np-06
    locator: "Section 6.6.3.4(1), variable table, RTDCIMPAMT"
    quote: "Real-Time DC Import Amount per QSE per Settlement Point—The payment to QSE q for DC Tie import through DC Tie p, for the 15-minute Settlement Interval."
---


## Definition

The ERCOT System (the FERC-NERC report calls it the "ERCOT Interconnection"; FERC's Energy Primer calls it the Texas Interconnection) is the interconnected power system under PUCT jurisdiction that is not synchronously connected to the Eastern Interconnection or the Western (WECC) grid. [e1][e13][e15] A DC tie is a non-synchronous transmission interconnection between ERCOT and a non-ERCOT system, and the FERC-NERC report describes four asynchronous ties. [e2][e3]

## How it works

FERC's staff primer describes the national grid as three main sections, the Western, Eastern and Texas Interconnections, which operate independently with limited interconnections between them. [e15] The 2021 FERC-NERC report describes ERCOT as a functionally separate interconnection with four asynchronous ties. Two DC ties, the North Tie and the East Tie, connect it to the Eastern Interconnection through SPP. [e3] Two more, the Laredo Variable Frequency Tie and the Railroad Tie, connect it to Mexico. [e4] Total DC tie capability is about 1,220 MW: 820 MW to SPP and 400 MW to Mexico. [e5]

Power can flow either way across the ties. Exports add to ERCOT demand and imports add to supply. [e6] Every DC tie schedule must follow the Protocols, NERC Reliability Standards, NAESB standards and ERCOT's operating agreements with CFE (current Protocol text; a pending NPRR857 change would generalize the counterparty). [e23] An importing QSE is treated as a Resource at the DC Tie Settlement Point; an exporting QSE is treated as a Load there and pays allocated losses, UFE and ERCOT fees. [e18][e19] e-Tags reported before 1430 Day-Ahead feed the DRUC as capacity supply or obligation; later ones feed the HRUC. [e20] The 2021 FERC-NERC report says ERCOT does not classify DC tie flows as firm capacity because they are scheduled as day-ahead energy transactions, although its seasonal assessment (SARA) did assume some net imports based on winter 2013/2014 EEA intervals. [e12]

Exports are the first to go in a pinch. DC Tie Load is counted as Load in reliability studies and settled as Adjusted Metered Load, but it is curtailed before other ERCOT Load and during EEA events. [e21] ERCOT may also curtail a schedule when the neighboring system operator asks because of an emergency in its own area. [e31] On the import side, using DC Tie import capacity not already in use is one of the prescribed EEA Level 1 steps. [e25]

Isolation shapes reliability. With no synchronous neighbors, all frequency response must come from resources inside ERCOT. Because the system is smaller than the other interconnections, losing a unit causes a steeper frequency drop, so ERCOT needs more robust frequency response. [e7] DC ties energized after January 1, 2021, and ties modified by adding 20 MW or more of capacity or by a non-in-kind converter change, must meet the Operating Guide's frequency ride-through requirements. [e30]

## Formula

The Real-Time payment for DC tie imports is priced at the Real-Time Settlement Point Price at the DC Tie Settlement Point: RTDCIMPAMT(q, p) = (-1) × RTSPP(p) × (RTDCIMP(q, p) × ¼), for each 15-minute Settlement Interval. [e24] In words: the QSE's aggregated DC Tie Schedule as an importer (in MW) for the interval, times one quarter to turn 15 minutes of MW into MWh, times the real-time price at that tie, times (-1). [e24][e33] The Protocols define RTDCIMPAMT as the payment to the QSE for the DC Tie import; the (-1) reflects the settlement sign convention for payments, which this section does not itself explain. [e34]

## ERCOT context

Isolation also shapes regulation. The FERC-NERC staff report states that ERCOT's wholesale market is not regulated by FERC because power exchanges between entities occur wholly within the state, not through interstate commerce. [e8] FERC's own primer says simply that FERC regulates all RTOs/ISOs except ERCOT. [e16] The Protocols back this up. ERCOT must act to keep entities in the ERCOT Region from becoming "public utilities" under the Federal Power Act, including by ordering ties to other Control Areas disconnected or by denying or curtailing e-Tags over DC ties. [e9] At state level, PURA requires a power region to establish an independent organization to ensure nondiscriminatory transmission access and the reliability and adequacy of the regional network. [e29]

The ERCOT footprint is not all of Texas. It covers about 75 percent of the state's land area, excluding the El Paso area, part of the northern panhandle, and part of east Texas north and east of Houston to the Louisiana border. [e14]

Net DC tie flows are small and change direction. The IMM's 2020, 2022 and 2023 reports describe ERCOT as a net importer (2022 by a wider margin than 2021), in a trend they say began in 2018 because of tight supply and higher prices in 2018 and 2019. [e32][e27][e28] The IMM's 2024 report calls 2024 ERCOT's first net-export year "since 2018", so the IMM reports are not consistent about 2018 itself. [e11] In 2025 it returned to net importer, exporting to Mexico and importing from SPP, with average net inflow of only about 36 MW. [e10] During Winter Storm Uri, ERCOT imported what it could, but with 1,220 MW of tie capability it could not import the many thousands of MW that MISO and SPP brought in. [e13]

## Key facts

- Four asynchronous DC ties: North and East (to SPP), and Laredo VFT and Railroad (to Mexico). [e3][e4]
- About 1,220 MW of total tie capability: 820 MW to SPP and 400 MW to Mexico (FERC-NERC 2021 report and IMM 2025 report); the IMM's 2020 report described three Mexico ties totalling 430 MW. [e5][e6][e26]
- Importer = Resource, exporter = Load at the DC Tie Settlement Point; exporters pay allocated losses, UFE and fees. [e18][e19]
- DC Tie Load is curtailed before other ERCOT Load and during EEAs. [e21]
- Market Participants may not make DC tie exports reasonably expected to be uneconomic, excluding CARD and CRRBA allocations (a pending NPRR1030 box would delete this paragraph). [e22]
- The 2021 FERC-NERC report says ERCOT does not classify DC tie flows as firm capacity. [e12]
- Net flow: net importer through 2023 in a trend the IMM dates from 2018 (its 2024 report is inconsistent on 2018), net exporter in 2024, net importer in 2025 with about 36 MW average net inflow. [e32][e28][e11][e10]
- During Uri, MISO and SPP together imported nearly 13,000 MW, while ERCOT was limited to its 1,220 MW of ties. [e13]
- ERCOT covers about 75 percent of Texas land area. [e14]

## Timeline

- 1941: ERCOT and SPP formed to pool resources for the war effort (FERC primer). [e17]
- 2018: the start, per the IMM's 2020-2023 reports, of a net-import trend over the ties that continued through 2023 (the IMM's 2024 report instead implies 2018 was a net-export year). [e32][e28][e11]
- January 1, 2021: DC ties energized after this date fall under the Operating Guide's frequency ride-through requirements. [e30]
- February 2021: Winter Storm Uri; ERCOT's tie import limit was 1,220 MW against nearly 13,000 MW imported by MISO and SPP. [e13]
- 2022: net imports widened; the IMM attributes higher tie activity to high-summer-demand prices and the January 1, 2022 ORDC shift. [e27]
- 2024: ERCOT a net exporter for the first time since 2018. [e11]
- 2025: back to net importer, about 36 MW average net inflow. [e10]

## Say it like this

(Guidance) ERCOT is its own grid. It is tied to the rest of North America only through about 1,220 MW of DC ties, so in a crisis it has to rely almost entirely on resources inside Texas. [e5] Separately, FERC's primer says FERC regulates every RTO/ISO except ERCOT, and the FERC-NERC staff report explains that power exchanges there stay within the state; the system is under PUCT jurisdiction. [e16][e8][e1]

## Common confusion

(Guidance) "Not synchronized" does not mean "not connected": the DC ties do move power, in both directions. [e6] ERCOT does not cover all of Texas. El Paso and parts of the panhandle and east Texas are outside it. [e14] Do not count tie imports as reliable capacity; the 2021 FERC-NERC report says ERCOT does not classify them as firm. [e12] And exports are not firm demand either: DC Tie Load is cut before other Load in an emergency. [e21] "SPP" in this topic is the Southwest Power Pool, not a Settlement Point Price.

## Questions

### Why couldn't ERCOT import its way out of Winter Storm Uri?

Its total import limit over the DC ties was 1,220 MW. MISO and SPP together imported nearly 13,000 MW, but ERCOT had no way to import thousands of MW from the Eastern Interconnection. [e13]

### Why is the ERCOT wholesale market outside FERC market regulation?

According to the FERC-NERC staff report, it is because power exchanges between entities occur wholly within Texas, not through interstate commerce. [e8] The Protocols let ERCOT disconnect ties or curtail e-Tags on DC ties so that ERCOT-region entities do not become FPA public utilities. [e9]

### What does isolation mean for frequency response?

All frequency response has to come from inside ERCOT. Because the system is smaller, a unit trip causes a steeper frequency decline, so ERCOT needs more robust frequency response. [e7]

### Is ERCOT a net importer or exporter over its ties?

It changes from year to year: per the IMM, a net importer in a trend it dates from 2018 through 2023 (its 2024 report implies 2018 itself was a net-export year), a net exporter in 2024 and a net importer in 2025, with average net inflow of only about 36 MW in 2025. [e32][e28][e11][e10]

### How is a DC tie export settled, and what happens to it in an emergency?

The exporting QSE is treated as a Load at the DC Tie Settlement Point and pays allocated losses, UFE and ERCOT fees. [e19] DC Tie Load is curtailed before other ERCOT Load and during EEAs. [e21] (Reasoning) So an exporter selling into Mexico or SPP during a tight ERCOT evening carries curtailment risk that an ordinary ERCOT load does not.

### What if a neighbor is short at the same time as ERCOT?

ERCOT may curtail a schedule when the neighboring operator requests it because of its own emergency. [e31] Uri showed both sides short at once: ERCOT imported what it could from the Eastern Interconnection, but only up to its 1,220 MW limit. [e13] (Reasoning) Ties help most when the neighbor has spare capacity, which is least likely in a region-wide cold snap.

### Why do the ties not count as firm capacity in planning?

The FERC-NERC report says flows are scheduled as day-ahead energy transactions, not firm capacity. [e12] In the Protocols, an e-Tag reported before 1430 Day-Ahead enters the DRUC as capacity supply. [e20]

## Open items

- The saved sources name the Mexican counterparty differently: FERC-NERC says CENACE, the grid operator [e4]; the IMM and the current Protocol text say CFE (Comisión Federal de Electricidad). [e6][e23] Not reconciled; the two may play different roles.
- The IMM's 2024 report calls 2024 the first net-export year "since 2018" [e11], while its 2020-2023 reports say the net-import trend began in 2018 [e32][e28]. Which applies to 2018 itself is not resolved in the saved sources.
- The IMM's 2020 report lists three Mexico ties totalling 430 MW [e26]; later reports and FERC-NERC say two ties and 400 MW. Which tie changed is not explained in the sources.
- No saved source covers the legal history of ERCOT's non-FERC status (for example, the specific Federal Power Act provisions or court and FERC orders).
- No saved source gives the individual MW rating of each named DC tie, only the SPP and Mexico totals.
- Pending Southern Cross language (NPRR857 and NPRR1034: DC Tie Operator terms, frequency-based import/export limits in a new Section 4.4.4.3) and NPRR999 ramp-limit curtailment are pending boxes in np-04 and are not described as current rules here. NPRR1030 would delete the uneconomic-export prohibition in 4.4.4(17). [e22]
- The IMM's annual DC tie volumes in MWh by direction sit in figures that did not extract as text.
