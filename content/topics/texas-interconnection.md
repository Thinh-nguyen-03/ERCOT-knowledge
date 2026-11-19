---
id: texas-interconnection
name: Texas Interconnection & DC Ties
aliases: [ERCOT Interconnection, Texas Interconnection, ERCOT System, DC Ties, DC Tie, asynchronous ties]
kind: concept
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
---

## Definition

The ERCOT System (the FERC-NERC report calls it the "ERCOT Interconnection"; this topic uses the label Texas Interconnection) is the interconnected power system under PUCT jurisdiction that is not synchronously connected to the Eastern Interconnection or the Western (WECC) grid. [e1][e13] A DC tie is a non-synchronous transmission interconnection between ERCOT and a non-ERCOT system, and the FERC-NERC report describes four asynchronous ties. [e2][e3]

## How it works

The 2021 FERC-NERC report describes ERCOT as a functionally separate interconnection with four asynchronous ties. Two DC ties, the North Tie and the East Tie, connect it to the Eastern Interconnection through SPP. [e3] Two more, the Laredo Variable Frequency Tie and the Railroad Tie, connect it to Mexico. [e4] Total DC tie capability is about 1,220 MW: 820 MW to SPP and 400 MW to Mexico. [e5]

Power can flow either way across the ties. Exports add to ERCOT demand and imports add to supply. [e6] The 2021 FERC-NERC report says ERCOT does not classify DC tie flows as firm capacity because they are scheduled as day-ahead energy transactions, although its seasonal assessment (SARA) did assume an expected amount of net imports based on winter 2013/2014 EEA intervals. [e12]

Isolation shapes reliability. With no synchronous neighbors, all frequency response must come from resources inside ERCOT. Because the system is smaller than the other interconnections, losing a unit causes a steeper frequency drop, so ERCOT needs more robust frequency response. [e7]

## ERCOT context

Isolation also shapes regulation. The FERC-NERC staff report states that ERCOT's wholesale market is not regulated by FERC because power exchanges between entities occur wholly within the state, not through interstate commerce. [e8] The Protocols back this up. ERCOT must act to keep entities in the ERCOT Region from becoming "public utilities" under the Federal Power Act, including by ordering ties to other Control Areas disconnected or by denying or curtailing e-Tags over DC ties. [e9]

The ERCOT footprint is not all of Texas. It covers about 75 percent of the state's land area, excluding the El Paso area, part of the northern panhandle, and part of east Texas north and east of Houston to the Louisiana border. [e14]

Net DC tie flows were small in 2025, and the net direction differed between 2024 and 2025. ERCOT was a net exporter in 2024 for the first time since 2018. [e11] In 2025 it returned to net importer, exporting to Mexico and importing from SPP, with average net inflow of only about 36 MW. [e10] During Winter Storm Uri, ERCOT imported what it could, but with 1,220 MW of tie capability it could not import the many thousands of MW that MISO and SPP brought in. [e13]

## Key facts

- Four asynchronous DC ties: North and East (to SPP), and Laredo VFT and Railroad (to Mexico). [e3][e4]
- About 1,220 MW of total tie capability: 820 MW to SPP and 400 MW to Mexico. [e5][e6]
- The 2021 FERC-NERC report says ERCOT does not classify DC tie flows as firm capacity. [e12]
- Net flow: net exporter in 2024 (first time since 2018), and net importer in 2025 with about 36 MW average net inflow. [e11][e10]
- During Uri, MISO and SPP together imported nearly 13,000 MW, while ERCOT was limited to its 1,220 MW of ties. [e13]
- ERCOT covers about 75 percent of Texas land area. [e14]

## Say it like this

(Guidance) ERCOT is its own grid. It is tied to the rest of North America only through about 1,220 MW of DC ties, so in a crisis it has to rely almost entirely on resources inside Texas. [e5] Separately, the FERC-NERC report says the ERCOT wholesale market is not regulated by FERC because power exchanges occur wholly within the state; the system is under PUCT jurisdiction. [e8][e1]

## Common confusion

(Guidance) "Not synchronized" does not mean "not connected": the DC ties do move power, in both directions. [e6] Also, ERCOT does not cover all of Texas. El Paso and parts of the panhandle and east Texas are outside it. [e14] Do not count tie imports as reliable capacity. The 2021 FERC-NERC report says ERCOT does not classify them as firm capacity. [e12]

## Questions

### Why couldn't ERCOT import its way out of Winter Storm Uri?

Its total import limit over the DC ties was 1,220 MW. MISO and SPP together imported nearly 13,000 MW, but ERCOT had no way to import thousands of MW from the Eastern Interconnection. [e13]

### Why is the ERCOT wholesale market outside FERC market regulation?

According to the FERC-NERC staff report, it is because power exchanges between entities occur wholly within Texas, not through interstate commerce. [e8] The Protocols let ERCOT disconnect ties or curtail e-Tags on DC ties so that ERCOT-region entities do not become FPA public utilities. [e9]

### What does isolation mean for frequency response?

All frequency response has to come from inside ERCOT. Because the system is smaller, a unit trip causes a steeper frequency decline, so ERCOT needs more robust frequency response. [e7]

### Is ERCOT a net importer or exporter over its ties?

It changes from year to year: a net exporter in 2024 and a net importer in 2025, with average net inflow of only about 36 MW in 2025. [e11][e10]

## Open items

- The saved sources name the Mexican counterparty differently: FERC-NERC says CENACE, the grid operator [e4]; the IMM says Comisión Federal de Electricidad [e6]. Not reconciled.
- No saved source covers the legal history of ERCOT's non-FERC status (for example, the specific Federal Power Act provisions or court and FERC orders).
- No saved source gives the individual MW rating of each named DC tie, only the SPP and Mexico totals.
- Pending NPRR857 (Southern Cross / DC Tie Operator language in np-01) was seen but not covered.
