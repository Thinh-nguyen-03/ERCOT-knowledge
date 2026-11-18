---
id: sced
name: SCED (Security-Constrained Economic Dispatch)
aliases: [SCED, Security-Constrained Economic Dispatch, real-time dispatch]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-18
links:
  - to: base-point
    type: determines
    note: SCED produces the Base Point, the MW output level for each Resource. [e2]
  - to: lmp
    type: determines
    note: SCED calculates the real-time LMPs, approximately every five minutes. [e3]
  - to: system-lambda
    type: determines
    note: System Lambda is a SCED output, capped at the effective VOLL. [e7]
  - to: shadow-price
    type: determines
    note: Step 2 of SCED produces Shadow Prices for binding constraints. [e5]
  - to: rtm
    type: part-of
    note: SCED is the dispatch and pricing engine of the Real-Time Market.
  - to: spp
    type: determines
    note: Real-Time Settlement Point Prices are built from SCED-interval LMPs.
  - to: energy-offer-curve
    type: used-in
    note: SCED evaluates Energy Offer Curves to determine dispatch. [e1]
  - to: market-power-mitigation
    type: related
    note: SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Security-Constrained Economic Dispatch (SCED)"
    quote: "A process for determining Ancillary Service awards and Base Point instructions for Resources using Energy Offer Curves, Energy Bid/Offer Curves, Real-Time Market (RTM) Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs)."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Base Point"
    quote: "The MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process."
  - id: e3
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e4
    source: np-06
    locator: "Section 6.5.7.3, two-step methodology, item (a)"
    quote: "The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3, two-step methodology, item (b)"
    quote: "The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.3, item (d) on VOLL"
    quote: "The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website."
  - id: e8
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "In addition, the SCED process accounts for each ESR’s State of Charge (SOC) and SOC operating limits."
  - id: e9
    source: np-06
    locator: "Section 6.5.7.3, paragraph (15)"
    quote: "ERCOT shall calculate a non-binding projection of the Base Points, Ancillary Service awards, MCPCs, Resource Node LMPs, Real-Time Reliability Deployment Price Adders, Hub LMPs, and Load Zone LMPs at a frequency of every five minutes for at least 15 minutes into the future"
  - id: e10
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance"
    quote: "With RTC, the real-time market simultaneously procures energy and ancillary services. Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT."
  - id: e12
    source: imm-som-2025
    locator: "Chapter I.D, Shortage and Reliability Pricing"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e13
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance"
    quote: "However, we identified some issues with real-time ancillary service price formation that are likely due to the design of the ancillary service demand curves and the duration constraints for ESRs providing ancillary services."
  - id: e14
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour."
---

## Definition

SCED is the process for determining Ancillary Service awards and Base Point instructions for Resources, using Energy Offer Curves, Energy Bid/Offer Curves, RTM Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs). [e1] A Base Point is the MW output level for a Resource that SCED produces. [e2]

## How it works

SCED is designed to manage energy, Ancillary Services, the system power balance and network congestion at the same time, through Base Points, Ancillary Service awards and the calculation of LMPs and Real-Time MCPCs, approximately every five minutes or more frequently if necessary. [e3] It determines dispatch and awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, ASDCs and network constraints. [e6] It also accounts for each Energy Storage Resource's state of charge and SOC operating limits. [e8]

SCED uses a two-step method that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. [e14] Step 1 runs SCED on the full Network Operations Model observing only Competitive Constraints (plus power balance and Ancillary Service constraints) to determine Reference LMPs. [e4] Step 2 produces the Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to all security constraints, Competitive and Non-Competitive, and other Resource constraints. [e5]

The prices SCED produces feed settlement. A Resource Node's real-time Settlement Point Price is the time-weighted average, over the SCED intervals in the 15-minute Settlement Interval, of the Real-Time LMP plus the Reliability Deployment Price Adder for Energy. [e10] System Lambda and Real-Time MCPCs from Step 2 are capped at the effective VOLL, and ERCOT posts both capped and uncapped values. [e7] Separately from the binding run, ERCOT calculates a non-binding projection of Base Points, awards, MCPCs, Resource Node, Hub and Load Zone LMPs every five minutes for at least 15 minutes ahead. [e9]

## ERCOT context

Real-time co-optimization (RTC) changed what SCED does in price formation. The IMM reports that with RTC the real-time market simultaneously procures energy and ancillary services, whereas previously the day-ahead market alone procured them. [e11] The current protocol text reflects this: SCED determines Ancillary Service awards using Ancillary Service Offers and ASDCs. [e1][e6] Before RTC went live on December 5, 2025, shortage pricing came from an ORDC price adder added to energy and reserve prices when reserves were low. [e12]

The IMM says the RTC real-time market has functioned as expected, but flags issues with real-time ancillary service price formation likely due to the design of the ancillary service demand curves and duration constraints for ESRs providing ancillary services. [e13]

## Key facts

- SCED runs approximately every five minutes, or more frequently if necessary. [e3]
- It maximizes bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e6]
- It is a two-step process: Step 1 sets Reference LMPs with only Competitive Constraints; Step 2 produces Base Points, awards, Shadow Prices, MCPCs and LMPs. [e4][e5]
- SCED outputs include Ancillary Service awards as well as energy Base Points. [e1]
- RTC went live December 5, 2025 (per the IMM), moving AS procurement into real time. [e12][e11]
- ERCOT publishes a non-binding projection every five minutes for at least 15 minutes ahead. [e9]

## Say it like this

SCED is ERCOT's real-time engine: every five minutes [e3] it picks the cheapest feasible dispatch that respects transmission limits, and the shadow prices from that solve are what create nodal prices. Since RTC in December 2025 the same solve also awards ancillary services, so energy and reserve prices are formed together.

## Common confusion

- SCED versus RUC: SCED produces Base Points and awards in real time; commitment is a separate process covered in the ruc topic. [e2]
- SCED versus the Settlement Point Price: SCED produces LMPs per SCED interval, and the settlement price averages them over 15 minutes and adds the reliability adder. [e10]
- Pre-RTC descriptions (separate ORDC adder, day-ahead-only AS procurement) are historical as of December 2025. [e11][e12]

## Questions

### What does SCED produce?

Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, from Step 2 of its two-step process. [e5]

### Why does SCED run two steps?

Step 1 finds Reference LMPs observing only Competitive Constraints, and Step 2 then solves with all constraints, with mitigation applied to energy offers to resolve Non-Competitive Constraints. [e14][e4][e5]

### What did RTC change for SCED?

The real-time market now co-optimizes energy and ancillary services, where previously the day-ahead market alone procured ancillary services. [e11] Shortage pricing is now part of energy prices instead of a separate ORDC adder. [e12]

## Open items

- RTC-specific protocol mechanics (how ASDCs set the MCPCs, how ESRs are modeled as a single model): the np-06 text was only read for the SCED sections above; detail belongs in an RTC topic.
- Pending NPRR1188/NPRR1325 changes to SCED (dynamic capping of PCLR bid curves) are shown in np-06 as not yet in effect and are not described here.
- The mechanism by which Shadow Prices on binding constraints become location-specific LMPs (shift factor formula) was not quoted.
- Exact ESR "single model" description is in the IMM report but not quoted here.
