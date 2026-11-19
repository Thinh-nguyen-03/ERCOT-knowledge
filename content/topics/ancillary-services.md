---
id: ancillary-services
name: Ancillary Services (AS)
aliases: [AS, ancillary services, Reg-Up, Reg-Down, RRS, ECRS, Non-Spin, NSRS, AS Plan, AS Obligation]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: regulation
    type: composed-of
    note: Regulation Up is capacity that can respond to signals from ERCOT within five seconds to changes from scheduled system frequency. [e2]
  - to: rrs
    type: composed-of
    note: RRS is the automatically self-deployed service that restores or maintains frequency after a significant deviation. [e3]
  - to: ecrs
    type: composed-of
    note: ECRS is capacity sustained for two consecutive hours, used for depleted RRS, backup regulation and energy to avoid or during an EEA. [e4]
  - to: non-spin
    type: composed-of
    note: Non-Spin is capacity that can be synchronized and ramped within 30 minutes. [e5]
  - to: asdc
    type: determines
    note: ERCOT builds an ancillary service demand curve for each service from the AS Plan. [e9]
  - to: rtc-b
    type: related
    note: RTC changed day-ahead AS awards from physical obligations to financial positions. [e11]
  - to: eea
    type: related
    note: ECRS provides energy to avoid getting into or during an Energy Emergency Alert. [e4]
  - to: energy-storage-resource
    type: related
    note: ESRs supply most regulation and large shares of the other services. [e13]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Ancillary Service"
    quote: "A service necessary to support the transmission of energy to Loads while maintaining reliable operation of the Transmission Service Provider’s (TSP’s) transmission system using Good Utility Practice."
  - id: e2
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (1)"
    quote: "Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency."
  - id: e3
    source: np-03
    locator: "Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2)"
    quote: "(1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases."
  - id: e4
    source: np-03
    locator: "Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (1)"
    quote: "(1) ERCOT Contingency Reserve Service (ECRS) is a service that is provided using capacity that can be sustained at a specified level for two consecutive hours and is used to restore or maintain the frequency of the ERCOT System: (a) In response to significant depletion of RRS; (b) As backup Regulation Service; and (c) By providing energy to avoid getting into or during an Energy Emergency Alert (EEA)."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Non-Spinning Reserve (Non-Spin)"
    quote: "An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours."
  - id: e6
    source: np-04
    locator: "Section 4.2.1.1, Ancillary Service Plan, paragraph (1)"
    quote: "(1) ERCOT shall analyze the expected Load conditions for the Operating Day and develop an Ancillary Service Plan that identifies the Ancillary Service MW necessary for each hour of the Operating Day. The MW of each Ancillary Service required may vary from hour to hour depending on ERCOT System conditions. ERCOT must post the Ancillary Service Plan to the ERCOT website by 0600 of the Day-Ahead."
  - id: e7
    source: np-04
    locator: "Section 4.2.1.2, Ancillary Service Obligation Assignment and Notice, paragraph (1)"
    quote: "(1) ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level."
  - id: e8
    source: imm-som-2025
    locator: "Chapter III, Ancillary Services, A. Summary of Ancillary Services Results in 2025"
    quote: "Using excessively conservative parameters in its AS Methodology, the volume of reserves set by ERCOT’s AS Plan is 140% larger than a 1-in-10 reliability standard for load shed would require."
  - id: e9
    source: np-04
    locator: "Section 4.4.12, paragraphs (4)-(5)"
    quote: "(4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market"
    quote: "Consumers pay the cost of AS procured through the market. Specifically, ERCOT allocates procurement costs to Load Serving Entities (LSEs) based on their real-time adjusted metered load."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market"
    quote: "Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Figure 1 discussion (all-in cost)"
    quote: "Ancillary services costs were $0.39 per MWh of load in 2025, a 60% decrease from 2024 and the lowest since 2020."
  - id: e13
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e14
    source: imm-som-2024
    locator: "Executive Summary, ancillary services"
    quote: "Ancillary services costs dropped to $0.98 per MWh of load from $3.74 per MWh in 2023."
  - id: e15
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
---

## Definition

Ancillary services are the services necessary to support the transmission of energy to load while maintaining reliable operation of the transmission system. [e1] In ERCOT they are procured as reserve capacity: Regulation Up and Down, Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin). [e2][e3][e4][e5][e9]

## How it works

Each day ERCOT analyzes expected load for the Operating Day and develops an Ancillary Service Plan listing the MW of each service needed in each hour. The quantities can vary by hour with system conditions, and ERCOT must post the plan by 0600 of the Day-Ahead. [e6] The plan is then split among QSEs: ERCOT assigns each QSE a share by service and by hour, based on its load ratio share, and that share is its Ancillary Service Obligation. [e7]

The services differ mainly by speed and duration. Reg-Up responds to ERCOT signals within five seconds to changes from scheduled system frequency. [e2] RRS is automatically self-deployed to restore or maintain frequency after a significant deviation. [e3] ECRS is capacity that can be sustained for two consecutive hours, used when RRS is depleted, as backup regulation, and to supply energy to avoid or during an EEA. [e4] Non-Spin is provided from capacity that can be synchronized and ramped to a specified output within 30 minutes. [e5]

Price formation uses an ancillary service demand curve for each service. Reg-Down has a constant demand curve equal to VOLL over the full range of the plan, while the curves for Reg-Up, RRS, ECRS and Non-Spin come from an aggregate ORDC that is split into individual curves. [e9]

## ERCOT context

The IMM says consumers pay the cost of AS procured through the market, and ERCOT allocates the cost to LSEs on real-time adjusted metered load. [e10] Real-Time Co-Optimization (RTC) changed the day-ahead role: before RTC went live in December 2025 AS were sold only day-ahead as a physical obligation, and now they are also procured in real time while day-ahead awards are financial. [e11]

Costs have fallen: AS cost was $0.98 per MWh of load in 2024, down from $3.74 in 2023, and $0.39 per MWh in 2025, a 60% decrease from 2024. [e14][e12] In 2025 batteries averaged 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin. [e13] The IMM also argues ERCOT over-procures: its 2025 report says the AS Plan is 140% larger than a 1-in-10 load shed reliability standard would require. [e8]

## Key facts

- Reg-Up responds to ERCOT signals within five seconds. [e2]
- ECRS must be sustainable for two consecutive hours. [e4]
- Non-Spin capacity must be able to ramp to a specified output within 30 minutes. [e5]
- The AS Plan is posted by 0600 on the Day-Ahead. [e6]
- AS cost fell from $3.74 per MWh of load in 2023 to $0.98 in 2024 and $0.39 in 2025. [e14][e12]
- ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025. [e13]
- RTC went live in December 2025; day-ahead AS awards are now financial. [e11]

## Say it like this

Ancillary services are the reserve products ERCOT procures to support reliable operation, from Reg-Up that responds within five seconds to Non-Spin that ramps within 30 minutes. Batteries now supply most of the fast products, and costs to load have fallen sharply since 2023. [e2][e5][e13][e14][e12]

## Common confusion

Ancillary services are capacity products, not energy: awards reserve headroom rather than delivering MWh, though ECRS can supply energy to avoid or during an EEA [e4] and RRS is deployed through real power increases or decreases by Resources. [e3] Before December 2025 a day-ahead AS award was a physical obligation, and now it is a financial position. [e11] "AS Obligation" is also not the same as an award: the obligation is a QSE's allocated share of ERCOT's need. [e7]

## Questions

### Name the ancillary services and how fast each responds.

Reg-Up responds within five seconds. [e2] RRS is automatically self-deployed after a significant frequency deviation. [e3] ECRS is sustained for two consecutive hours. [e4] Non-Spin ramps within 30 minutes. [e5]

### Who pays for ancillary services?

According to the IMM, ERCOT allocates procurement costs to LSEs by real-time adjusted metered load, and QSEs also carry an obligation share based on load ratio share. [e10][e7]

### How did RTC change ancillary services?

Before December 2025, AS were bought only day-ahead and day-ahead awards were physical obligations. Now ERCOT also procures them in real time and day-ahead awards are financial. [e11]

### Why did ancillary service costs fall?

The IMM reports AS costs of $3.74 per MWh of load in 2023, $0.98 in 2024 and $0.39 in 2025. [e14][e12] The saved IMM quotes do not state the cause; they do show that ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025. [e13]

## Scenarios

### A battery owner asks whether to put capacity into Reg-Up or into energy arbitrage.

- Batteries already supplied 94% of Reg-Up on average in 2025. [e13]
- Costs of AS to load fell about 60% from 2024 to 2025. [e12]
- Since RTC, ERCOT also procures AS in real time [e11], and SCED determines Ancillary Service awards together with Resource Dispatch Instructions. [e15]

## Open items

- The Dispatchable Reliability Reserve Service (DRRS) appears in pending NPRR1309 text only and is not covered here.
- The IMM 2025 report's annual average price table by product is in a garbled figure and could not be quoted; no per-product price is stated for 2025 (the ECRS price move from 2023 to 2024 appears in the 2024 report but was not used).
- The AS quantity methodology minimums (e.g. 1,150 MW of PFR-based RRS, load resource percentage limits in Section 3.16) were read but not cited here.
- Whether Reg-Up's actual deployment signal interval is four seconds or five seconds (the protocol says response within five seconds; the IMM describes a four-second LFC signal) was not reconciled.
