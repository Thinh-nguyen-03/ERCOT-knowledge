---
id: load-ratio-share
name: Load Ratio Share (LRS)
aliases: [LRS, Load Ratio Share, zonal LRS]
kind: metric
domain: congestion
level: 1
lenses: [analyst, retail, portfolio]
as_of: 2026-11-18
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
---

## Definition

Load Ratio Share is the ratio of an Entity's Adjusted Metered Load (AML) to total ERCOT AML for an interval. [e1] AML is retail Load usage adjusted for UFE, Transmission Losses, Distribution Losses and DC Tie exports. [e2]

## How it works

Each QSE has its own LRS for each 15-minute Settlement Interval. [e3] An Entity's LRS is its AML over total ERCOT AML. [e1] ERCOT uses LRS as the allocation key for costs and credits that are spread across load. Examples in the Protocols: assigning the Ancillary Service quantity to QSEs, uplifting RUC make-whole shortfalls, allocating UFE to categories, and distributing CRR auction revenue. [e4][e5][e6][e8]

## ERCOT context

Some allocations are ERCOT-wide and some are zonal. CRR auction revenue for paths wholly within one 2003 congestion management zone is credited on a zonal LRS basis, and all other CRR auction revenue goes on an ERCOT-wide LRS basis. [e8]

The Securitization Uplift Charge is allocated to QSEs representing obligated LSEs. [e7] It uses a daily QSE Non-Opted-Out LSE Load Ratio Share, the ratio of the QSE's non-opted-out LSE load to the ERCOT total of the same, per Operating Day. [e9]

## Key facts

- LRS = an Entity's AML divided by total ERCOT AML for the interval. [e1]
- AML already includes UFE, loss and DC Tie export adjustments. [e2]
- RUC make-whole shortfalls are uplifted to all QSEs on an LRS basis. [e5]
- Ancillary Service obligations are assigned to QSEs from LSE LRSs, including DC Tie export shares. [e4]
- CRR auction revenue is credited by zonal LRS (same-zone paths) or ERCOT-wide LRS (all others). [e8]

## Say it like this

(Guidance) LRS is your share of ERCOT's metered load in an interval. Whenever ERCOT has a cost or credit to spread over load, such as uplift or auction revenue, your LRS decides your slice.

## Common confusion

LRS is a share of adjusted metered load, not of peak demand or capacity. [e1][e2] Zonal and ERCOT-wide LRS are both used, depending on the charge. [e8]

## Questions

### What is LRS built from?

A QSE's adjusted metered load over total ERCOT adjusted metered load, for a 15-minute interval. [e1][e3]

### Name two charges or credits allocated by LRS.

RUC make-whole uplift to QSEs, and CRR auction revenue credits to QSEs. [e5][e8]

## Open items

- Deeper pass: the hourly, monthly (peak-interval) and DC Tie export LRS variants in Section 6.6.2 were not summarized.
- Deeper pass: which settlement charges are allocated by LRS was not catalogued beyond the examples quoted.
