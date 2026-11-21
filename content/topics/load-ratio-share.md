---
id: load-ratio-share
name: Load Ratio Share (LRS)
aliases:
- LRS
- Load Ratio Share
- zonal LRS
kind: metric
domain: congestion
level: 1
lenses:
- analyst
- retail
- portfolio
as_of: '2026-11-21'
links:
- to: ufe
  type: related
  note: UFE is allocated using an adjusted Load Ratio Share. [e6]
- to: lse
  type: related
  note: AS obligations are assigned to QSEs from the LSE-level Load Ratio Shares. [e4]
- to: qse
  type: related
  note: Each QSE has its own Load Ratio Share per Settlement Interval. [e3]
- to: uplift
  type: related
  note: RUC make-whole shortfalls are uplifted to QSEs on a Load Ratio Share basis. [e5]
- to: securitization
  type: related
  note: Securitization Uplift Charges are allocated to QSEs using a daily QSE Non-Opted-Out LSE Load Ratio Share. [e9]
- to: crr
  type: related
  note: Net CRR auction revenue is credited to QSEs on a Load Ratio Share basis. [e8]
- to: ruc-make-whole
  type: related
  note: RUC make-whole uplift, clawback payments and decommitment charges are all allocated on LRS. [e24][e25]
- to: rmr
  type: related
  note: The total RMR service cost is allocated to QSEs representing Loads on LRS. [e22]
- to: ers
  type: related
  note: A QSE self-providing ERS submits a proxy LRS representing its estimate of its final LRS used in ERS Settlement. [e27]
- to: four-cp
  type: contrasts-with
  note: Monthly LRS for CRR and BLT allocations uses the peak-Load 15-minute interval of the month, a coincident-peak style share; see the 4CP topic for transmission cost allocation. [e16][e18]
- to: load-zone
  type: related
  note: Zonal LRS allocations use the four 2003-era Cost-Allocation Load Zones, not today's Load Zones. [e26]
depth: deep
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Ratio Share"
    quote: "The ratio of an Entity’s AML to total ERCOT AML for an interval."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Adjusted Metered Load (AML)"
    quote: "Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports."
  - id: e3
    source: np-06
    locator: "Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval, paragraph (1)"
    quote: "Each QSE’s Load Ratio Share (LRS) for a 15-minute Settlement Interval is calculated as follows:"
  - id: e4
    source: np-04
    locator: "Section 4.2.1.2, Ancillary Service Obligation Assignment and Notice, paragraph (1)"
    quote: "ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level."
  - id: e5
    source: np-05
    locator: "Section 5.7.4.2, RUC Make-Whole Uplift Charge, paragraph (1)"
    quote: "If the revenues from the charges under Section 5.7.4.1, RUC Capacity-Short Charge, are not enough to cover all RUC Make-Whole Payments, including amounts for RMR Units, for a 15-minute Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share basis, as a RUC Make-Whole Uplift Charge, calculated as follows:"
  - id: e6
    source: np-11
    locator: "Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (1)"
    quote: "ERCOT will allocate UFE to specific categories based upon adjusted Load Ratio Share."
  - id: e7
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, paragraph (1)"
    quote: "ERCOT shall allocate to Qualified Scheduling Entities (QSEs) representing obligated Load Serving Entities (LSEs), the Securitization Uplift Charge that is to be collected for the Operating Day."
  - id: e8
    source: np-07
    locator: "Section 7.5.7, Method for Distributing CRR Auction Revenues, paragraph (2)"
    quote: "ERCOT shall credit the net CRR Auction revenue (including PCRR revenue) produced from CRRs cleared in each CRR Auction that source from a Settlement Point located within a 2003 ERCOT CMZ and sink at a Settlement Point located within the same 2003 ERCOT CMZ to Qualified Scheduling Entities (QSEs) in the 2003 ERCOT CMZ on a zonal Load Ratio Share (LRS) basis. All other net CRR Auction revenues must be allocated to QSEs on an ERCOT-wide LRS basis."
  - id: e9
    source: np-27
    locator: "Section 27.3, Securitization Uplift Charge, variable definitions (DQSELSELRS)"
    quote: "Daily QSE Non-Opted-Out LSE Load Ratio Share — The ratio of Daily QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DQSELSERTAML) to Daily ERCOT QSE Non-Opted-Out LSE Real-Time Adjusted Metered Load (DERCOTQSELSERTAML), for a QSE q, for the Operating Day d."
  - id: e10
    source: np-06
    locator: "Section 6.6.2.1, ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval, variable table"
    quote: "RTAMLTOT MWh Real-Time Adjusted Metered Load Total—The total AML in ERCOT, for the 15-minute Settlement Interval. RTAML _(q, p) MWh Real-Time Adjusted Metered Load per Qualified Scheduling Entity (QSE) per Settlement Point—The sum of the AML at the Electrical Buses that are included in Settlement Point p, represented by Qualified Scheduling Entity (QSE) q, for the 15-minute Settlement Interval."
  - id: e11
    source: np-06
    locator: "Section 6.6.2.2, paragraph (1)"
    quote: "LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT The above variables are defined as follows:"
  - id: e12
    source: np-06
    locator: "Section 6.6.2.4, QSE Load Ratio Share for an Operating Hour, paragraph (1)"
    quote: "(1) Each QSE’s LRS for an Operating Hour is calculated as follows: HLRS _(q) = (max(0,[][]RTAML _(q, p, i))) / (HRTAMLTOT)"
  - id: e13
    source: np-06
    locator: "Section 6.6.2.2, pending box [NPRR1030]"
    quote: "(2) Each QSE’s MLRS, excluding DC Tie exports included in RTAML, for ERCOT’s peak Load 15-minute Settlement Interval in the calendar month is calculated as follows:"
  - id: e14
    source: np-06
    locator: "Section 6.6.2.2, pending box [NPRR1030: Insert paragraphs (2)-(4)]"
    quote: "[NPRR1030: Insert paragraphs (2)-(4) below upon system implementation:]"
  - id: e15
    source: np-06
    locator: "Section 6.6.2.6 (inserted by pending NPRR1030)"
    quote: "(1) Each QSE’s DC Tie Export DCMLRS for a calendar month is calculated as follows:"
  - id: e16
    source: np-07
    locator: "Section 7.9.3.5, CRR Balancing Account Closure, paragraph (1)"
    quote: "Any surplus that remains from the CRR Balancing Account and CRR Auction PTP Option Award Charge Total above the CRR Balancing Account Fund cap is paid to the QSEs representing Load Serving Entities (LSEs) based on a monthly Load Ratio Share (LRS). The monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month."
  - id: e17
    source: np-06
    locator: "Section 6.6.3.5, Real-Time Payment for a Block Load Transfer Point, paragraph (c)"
    quote: "(c) ERCOT shall calculate each QSE’s monthly BLT charge as follows: LAMBLTAMT _(q) = (-1) * MLRS _(q) * MBLTAMTTOT"
  - id: e18
    source: np-06
    locator: "Section 6.6.3.5, variable table"
    quote: "Monthly Load Ratio Share per QSE—The LRS calculated for QSE q for the peak-Load 15-minute Settlement Interval in the month."
  - id: e19
    source: np-06
    locator: "Section 6.6.3.7, Real-Time High Dispatch Limit Override Energy Charge, paragraph (1)"
    quote: "(1) ERCOT shall allocate to QSEs on an LRS basis the total amount of the payment specified in Section 6.6.3.6, Real-Time High Dispatch Limit Override Energy Payment. The charge to each QSE for a given 15-minute Settlement Interval is calculated as follows"
  - id: e20
    source: np-06
    locator: "Section 6.6.3.10, Real-Time Constraint Management Plan Cost Recovery Charge, paragraph (1)"
    quote: "(1) ERCOT shall allocate to QSEs on an LRS basis the total amount of the payment specified in Section 6.6.3.9, Real-Time Constraint Management Plan Cost Recovery Payment. The charge to each QSE for a given 15-minute Settlement Interval is calculated as follows"
  - id: e21
    source: np-06
    locator: "Section 6.6.5.7, Set Point Deviation Payment, paragraph (1)"
    quote: "(1) ERCOT shall pay the Set Point Deviation Charges collected from the QSEs representing Resources to the QSEs representing Load based on LRS."
  - id: e22
    source: np-06
    locator: "Section 6.6.6.5, RMR Service Charge, paragraph (1)"
    quote: "(1) The total RMR cost for all RMR Units is allocated to the QSEs representing Loads based on LRS."
  - id: e23
    source: np-06
    locator: "Section 6.6.6.6, paragraph (2)"
    quote: "(2) ERCOT shall issue a miscellaneous Invoice allocating expenses incurred related to the processing of an RMR Agreement or validation and/or processing of RMR budgets on an LRS basis."
  - id: e24
    source: np-05
    locator: "Section 5.7.5, RUC Clawback Payment, paragraph (1)"
    quote: "(1) ERCOT shall pay the revenues from all RUC Clawback Charges, including amounts for RMR Units, in a 15-minute Settlement Interval to all QSEs, on an LRS basis, as the RUC Clawback Payment."
  - id: e25
    source: np-05
    locator: "Section 5.7.6, RUC Decommitment Charge, paragraph (1)"
    quote: "(1) ERCOT shall charge each QSE a RUC Decommitment Charge, on an LRS basis, all revenues paid as a result of RUC Decommitment Payments, including amounts for RMR Units."
  - id: e26
    source: np-03
    locator: "Section 3.4.3, NOIE Load Zones, paragraph (b)"
    quote: "(b) Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using “Cost-Allocation Load Zones,” which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications. For these allocation purposes, any NOIE Load Zone is considered to be located entirely within the 2003 ERCOT Congestion Management Zone (CMZ) that represented the largest Load for that NOIE or group of NOIEs in 2003;"
  - id: e27
    source: np-03
    locator: "Section 3.14.3.2, Emergency Response Service Self-Provision, paragraph (1)(b)"
    quote: "(b) A proxy Load Ratio Share (LRS) specific to each ERS Time Period for which an offer is submitted. Proxy LRS shall be a number between zero and one and determined by the self-providing QSE to represent its estimate of its final LRS to be used in ERS Settlement."
  - id: e28
    source: np-06
    locator: "Section 6.5.1.1, capital contribution clawback, item (C)"
    quote: "(C) ERCOT shall distribute the repayment to QSEs representing Load on the same basis used to collect the monthly capital expenditures, using a monthly Load Ratio Share (LRS). A QSE’s monthly LRS shall be the QSE’s total Real-Time Adjusted Metered Load (AML) for the month divided by the total ERCOT Real-Time AML for the same month."
  - id: e29
    source: np-09
    locator: "Section 9.12, CRR Balancing Account Invoices, paragraph (3)"
    quote: "The Monthly Load Ratio Share (MLRS) as described in Section 7.9.3.5, CRR Balancing Account Closure, used for the resettlement CRRBA Invoice will be the same one used for the most recently posted balancing account Invoices."
  - id: e30
    source: imm-som-2025
    locator: "page 88 (OCR), Chapter V.E.2, CRR Auction Revenues"
    quote: "CARD allocates revenues from cross-zone CRRs to LSEs ERCOT-wide based on their system-wide load ratio share during each month’s coincident peak interval, and it allocates revenues from CRRs with source and sink in the same zone to loads in that zone based on their zonal load ratio share during the same coincident peak interval."
  - id: e31
    source: imm-som-2025
    locator: "page 88 (OCR), Chapter V.E.2"
    quote: "As revenues from CRR purchases and corresponding CARD payment distributions have increased, this methodology has drawn greater scrutiny because it can create adverse economic incentives for loads to increase consumption during periods of high demand, when high energy prices should incentivize loads to decrease consumption. To date, only DC tie operators have clearly exhibited such behavior."
  - id: e32
    source: imm-som-2025
    locator: "page 89 (OCR), footnote 42"
    quote: "Despite being approved in 2020, the project to implement NPRR 1030 has not been initiated yet."
---

## Definition

Load Ratio Share is the ratio of an Entity's Adjusted Metered Load (AML) to total ERCOT AML for an interval. [e1] AML is retail Load usage adjusted for UFE, Transmission Losses, Distribution Losses and DC Tie exports. [e2]

## How it works

Each QSE has its own LRS for each 15-minute Settlement Interval. [e3] An Entity's LRS is its AML over total ERCOT AML. [e1] ERCOT uses LRS as the allocation key for costs and credits that are spread across load. [e4][e5][e6][e8]

**Variants in force.** The Protocols define the 15-minute LRS in Section 6.6.2.2 and an hourly LRS in Section 6.6.2.4. [e3][e12] The 15-minute LRS for a QSE is its AML summed over Settlement Points, floored at zero, divided by ERCOT total AML for the interval; the total is the sum across QSEs and Settlement Points (floored at zero), meaning negative AML does not reduce the total or a QSE's share. [e10][e11] The hourly LRS is the same calculation summed over the four 15-minute intervals of the Operating Hour. [e12]

**Monthly LRS is a peak-interval share.** In the CRR Balancing Account, the monthly LRS is the 15-minute LRS calculated for the peak-Load Settlement Interval during the month. [e16] The Block Load Transfer charge likewise uses a Monthly Load Ratio Share defined as the LRS for the peak-Load 15-minute Settlement Interval in the month. [e17][e18] This differs from the monthly LRS in one capital-contribution clawback provision, which defines it as the QSE's total Real-Time AML for the month divided by the total ERCOT Real-Time AML for the same month. [e28]

**Pending (NPRR1030).** Paragraphs (2)-(4) of Section 6.6.2.2, and Sections 6.6.2.5 to 6.6.2.8, are inserts that apply only upon system implementation of NPRR1030, including a monthly LRS excluding DC Tie exports and a DC Tie export monthly LRS. [e14][e13][e15] The IMM says the project to implement NPRR 1030, approved in 2020, has not been initiated. [e32] These are not in force.

**Zonal LRS.** Costs allocated on a zonal LRS must use the "Cost-Allocation Load Zones", the four Load Zones in effect during the 2003 ERCOT market unless changed under Section 3.4.2, and any NOIE Load Zone counts as located entirely within the 2003 CMZ of its largest Load in 2003. [e26]

**What is allocated by LRS.** The Protocol sections below allocate on LRS. [e4][e5]

- Ancillary Service quantities: assigned to QSEs from LSE LRSs, including DC Tie export shares, aggregated by hour. [e4]
- RUC make-whole shortfalls (uplift), RUC clawback payments and RUC decommitment charges. [e5][e24][e25]
- UFE categories, by adjusted LRS. [e6]
- Securitization Uplift Charge, by a daily non-opted-out LSE LRS. [e7][e9]
- CRR auction revenue (zonal or ERCOT-wide) and CRR Balancing Account surplus; a CRRBA resettlement invoice reuses the MLRS of the most recently posted balancing account invoices. [e8][e16][e29]
- Block Load Transfer charges (monthly LRS). [e17]
- High Dispatch Limit override energy payment charge. [e19]
- Real-Time Constraint Management Plan cost recovery charge. [e20]
- Set Point Deviation charges, paid to QSEs representing Load. [e21]
- RMR service charge and RMR miscellaneous expense invoices. [e22][e23]
- ERS: QSEs self-providing ERS submit a proxy LRS estimating their final settlement LRS. [e27]

## ERCOT context

Some allocations are ERCOT-wide and some are zonal. CRR auction revenue for paths wholly within one 2003 congestion management zone is credited on a zonal LRS basis, and all other CRR auction revenue goes on an ERCOT-wide LRS basis. [e8] The IMM calls this the CARD process, allocating cross-zone CRR revenue ERCOT-wide and same-zone revenue zonally, in each case by load ratio share during the month's coincident peak interval. [e30]

The IMM says the method has drawn scrutiny as CARD payments have grown, because it can create incentives for loads to increase consumption during high demand when prices should encourage them to cut it, and that to date only DC tie operators have clearly exhibited such behavior. [e31] That concern is the stated reason for NPRR1030, which would allocate DC Tie shares on monthly load. [e14][e31]

The Securitization Uplift Charge is allocated to QSEs representing obligated LSEs. [e7] It uses a daily QSE Non-Opted-Out LSE Load Ratio Share, the ratio of the QSE's non-opted-out LSE load to the ERCOT total of the same, per Operating Day. [e9]

## Key facts

- LRS = an Entity's AML divided by total ERCOT AML for the interval. [e1]
- AML already includes UFE, loss and DC Tie export adjustments. [e2]
- RUC make-whole shortfalls are uplifted to all QSEs on an LRS basis. [e5]
- Ancillary Service obligations are assigned to QSEs from LSE LRSs, including DC Tie export shares. [e4]
- CRR auction revenue is credited by zonal LRS (same-zone paths) or ERCOT-wide LRS (all others). [e8]
- In CRR and BLT settlement, "monthly LRS" means the LRS in the peak-Load 15-minute interval of the month. [e16][e18]
- DC Tie-specific LRS variants (NPRR1030) are pending, not implemented. [e14][e32]

## Say it like this

(Guidance) LRS is your share of ERCOT's metered load in an interval. Whenever ERCOT has a cost or credit to spread over load, such as uplift or auction revenue, your LRS decides your slice. For the monthly allocations, it is your share at the monthly peak interval. [e16]

## Common confusion

LRS is a share of adjusted metered load in an interval, not of capacity. [e1][e2] Zonal and ERCOT-wide LRS are both used, depending on the charge. [e8] "Monthly" LRS can mean the peak-interval LRS or a whole-month share depending on the provision, so read the section. [e16][e28]

## Questions

### What is LRS built from?

A QSE's adjusted metered load over total ERCOT adjusted metered load, for a 15-minute interval. [e1][e3]

### Name two charges or credits allocated by LRS.

RUC make-whole uplift to QSEs, and CRR auction revenue credits to QSEs. [e5][e8]

### Why can LRS-based allocation create a perverse incentive?

When a monthly allocation is keyed to the load at the month's peak interval, a participant that raises consumption then gets a bigger share. The IMM says this incentive is real for DC tie operators, which is why NPRR1030 was proposed. [e16][e31]

### What if a QSE has negative AML at a Settlement Point?

In the formula the sum is floored at zero (max(0,...)), so a QSE's share cannot be negative. [e11]

### Why do some allocations use the 2003 zones?

Zonal LRS costs must use the four "Cost-Allocation Load Zones" from the 2003 market, so zonal sharing does not move when current Load Zones change. [e26]

### How does LRS appear in ERS?

QSEs self-providing ERS offer a proxy LRS between zero and one as their estimate of the final LRS used in ERS Settlement. [e27]

## Open items

- Resolved 2026-11-21: Section 6.6.2 variants catalogued; the monthly peak-interval and DC Tie variants are NPRR1030 inserts, pending.
- The list of LRS-allocated charges is built from the Protocol sections searched (Sections 3, 4, 5, 6, 7, 9, 11, 27); charges outside those sections were not searched.
- The saved sources do not give the NPRR1030 implementation date.
- Section 6.5.1.1's monthly LRS definition (total month AML) is quoted as written; the section it implements is a capital-contribution clawback and was not studied further.
