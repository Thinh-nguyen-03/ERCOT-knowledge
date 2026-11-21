---
id: sced
name: SCED (Security-Constrained Economic Dispatch)
aliases: [SCED, Security-Constrained Economic Dispatch, real-time dispatch]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, congestion, portfolio]
as_of: 2026-11-21
depth: deep
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
    note: Step 2 of SCED produces Shadow Prices, subject to security constraints. [e5]
  - to: rtm
    type: part-of
    note: In real time SCED calculates Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs approximately every five minutes. [e3]
  - to: spp
    type: determines
    note: Real-Time Settlement Point Prices use the Real-Time LMPs from SCED. [e10][e15]
  - to: energy-offer-curve
    type: used-in
    note: SCED evaluates Energy Offer Curves to determine dispatch. [e1]
  - to: market-power-mitigation
    type: related
    note: SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e14]
  - to: ruc
    type: related
    note: The IMM reports that ERCOT applies a $250-per-MWh offer floor to RUC-committed units. [e23]
  - to: asdc
    type: related
    note: SCED awards Ancillary Service subject to ASDCs, which the IMM says define shortage pricing under RTC. [e6][e26]
  - to: energy-storage-resource
    type: related
    note: SCED accounts for each ESR's state of charge and issues ESR Base Points that respect SOC limits. [e8]
  - to: offer-cap
    type: related
    note: The System-Wide Offer Cap was lowered to $2000/MWh from $5000/MWh after RTC go-live, per ERCOT's summer 2026 review. [e28]
  - to: ordc
    type: replaced
    note: The IMM says the ORDC adder was replaced under RTC by sloped Ancillary Service Demand Curves. [e12][e26]
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
    locator: "Section 6.5.7.3, paragraph (14)(a)"
    quote: "The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(b)"
    quote: "The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(d)"
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
    quote: >-
      Since ERCOT implemented RTC, the real-time market has functioned as expected without any major malfunctions. However, we identified some issues with real-time ancillary service price formation that are likely due to the design of the ancillary service demand curves and the duration constraints for ESRs providing ancillary services.
  - id: e15
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (4)"
    quote: "Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval, using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval."
  - id: e16
    source: imm-som-2025
    locator: "Chapter I.D, Shortage and Reliability Pricing"
    quote: "Since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder."
  - id: e14
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour."
  - id: e17
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP."
  - id: e18
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)"
    quote: "For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available capacity of all committed Generation Resources by creating proxy Energy Offer Curves for certain Resources as follows:"
  - id: e19
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(b)(i)"
    quote: "Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource’s Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;"
  - id: e20
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(d)"
    quote: "Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged."
  - id: e21
    source: np-06
    locator: "Section 6.5.7.3, paragraph (6)(b)"
    quote: "At the time of SCED execution, if a valid Energy Bid/Offer Curve or Output Schedule does not exist for an ESR that has a status of On-Line, then ERCOT shall notify the QSE and create a proxy Energy Bid/Offer Curve priced at -$250/MWh for the MW portion of the curve less than zero MW, and priced at the RTSWCAP for the MW portion of the curve greater than zero MW."
  - id: e22
    source: np-06
    locator: "Section 6.5.7.3, paragraph (12)(a)"
    quote: "A scaling factor of 5/7 shall be used for Reg-Up award when ensuring that the SCED Base Point plus the product of this scaling factor and the Reg-Up award does not exceed HDL."
  - id: e23
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter, 2. Market Impacts of RUC"
    quote: "ERCOT also applies a $250-per-MWh offer floor to RUC-committed units."
  - id: e24
    source: np-06
    locator: "Section 6.5.9.2, paragraph (2)"
    quote: "For intervals that the SCED process fails to reach a solution, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service for the interval for which no solution was reached are equal to the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service in the most recently solved interval."
  - id: e25
    source: np-06
    locator: "Section 6.5.9.2, paragraph (1)"
    quote: "When the SCED process is not able to reach a solution, ERCOT shall issue a Watch."
  - id: e26
    source: imm-som-2025
    locator: "page 70 (OCR), Ancillary Services chapter"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e27
    source: imm-som-2025
    locator: "page 71 (OCR), Ancillary Services chapter"
    quote: "ERCOT operations, however, has signaled skepticism about this feature of RTC and indicated that it intends to use reliability unit commitment (RUC) instructions to increase operating reserves when the market does not procure the full AS Plan. To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269."
  - id: e28
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, Energy Storage offers slide, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e29
    source: imm-som-2025
    locator: "page 34 (OCR), Ancillary Services chapter, ECRS discussion"
    quote: "With RTC’s implementation in December 2025, ERCOT operators no longer manually deploy ECRS. Instead, SCED can make economic trade-offs between procuring energy and ancillary services in real time using reserve shortage prices under an ancillary service demand curve (ASDC)."
  - id: e30
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board report, Revision Description and Board Decision"
    quote: "This NPRR updates the Adjustment Period and Real-Time Operations in the Protocols to address changes associated with the implementation of RTC."
  - id: e31
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board report, Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e32
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, key takeaways slide"
    quote: "Real-time co-optimization helped to lower ancillary service costs and market congestion"
  - id: e33
    source: np-06
    locator: "Section 6.5.7.3, paragraph (2)"
    quote: "The SCED solution must monitor cumulative deployment of Regulation Services and ensure that Regulation Services deployment is minimized over time."
  - id: e34
    source: np-06
    locator: "Section 6.5.7.3, paragraph (17)"
    quote: "The QSE representing an ESR may withdraw energy from the ERCOT System only when dispatched by SCED to do so."
  - id: e36
    source: np-06
    locator: "Section 6.5.9.2, paragraph (2)"
    quote: "For Settlement Intervals that the Real-Time Settlement Point Prices are identified as erroneous, and ERCOT sets the SCED intervals as failed in accordance with Section 6.3, Adjustment Period and Real-Time Operations Timeline, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, for the failed SCED intervals are equal to the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, in the most recently solved SCED interval that is not set as failed."
  - id: e35
    source: np-06
    locator: "Section 6.5.7.3, paragraph (7)"
    quote: "The Entity with decision-making authority, as more fully described in Section 3.19.1, Constraint Competitiveness Test Definitions, over how a Resource or Split Generation Resource is offered or scheduled, shall be responsible for all offers associated with each Resource, including offers represented by a proxy Energy Offer Curve, proxy Energy Bid/Offer Curve, or proxy Ancillary Service Offer."
---

## Definition

SCED is the process for determining Ancillary Service awards and Base Point instructions for Resources, using Energy Offer Curves, Energy Bid/Offer Curves, RTM Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs). [e1] A Base Point is the MW output level for a Resource that SCED produces. [e2]

## How it works

SCED is designed to manage energy, Ancillary Services, the system power balance and network congestion at the same time, through Base Points, Ancillary Service awards and the calculation of LMPs and Real-Time MCPCs, approximately every five minutes or more frequently if necessary. [e3] It determines dispatch and awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, ASDCs and network constraints. [e6] It also accounts for each Energy Storage Resource's state of charge and SOC operating limits. [e8]

SCED uses a two-step method that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. [e14] Step 1 runs SCED on the full Network Operations Model observing only Competitive Constraints (plus power balance and Ancillary Service constraints) to determine Reference LMPs. [e4] Step 2 produces the Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to all security constraints, Competitive and Non-Competitive, and other Resource constraints. [e5]

The prices SCED produces feed settlement. Real-time energy settlements use Settlement Point Prices for a 15-minute Settlement Interval, using the LMPs from all SCED executions in that interval. [e15] A Resource Node's real-time Settlement Point Price is the time-weighted average of the sum of the Real-Time LMPs and the Reliability Deployment Price Adder for Energy. [e10] System Lambda and Real-Time MCPCs from Step 2 are capped at the effective VOLL, and ERCOT posts both capped and uncapped values. [e7] Separately from the binding run, ERCOT calculates a non-binding projection of Base Points, awards, MCPCs, Resource Node, Hub and Load Zone LMPs every five minutes for at least 15 minutes ahead. [e9]

### Inputs, proxies and edge cases (np-06 Section 6.5.7.3)

Inputs. SCED uses the Resource Status from SCADA telemetry, validated by the Real-Time Sequence, instead of the COP Resource Status. [e17] ERCOT builds proxy Energy Offer Curves so that the available capacity of all committed Generation Resources is used, for example for non-IRRs that submitted only an Output Schedule or a partial curve. [e18] For an On-Line ESR with no valid curve or Output Schedule, ERCOT notifies the QSE and creates a proxy curve at -$250/MWh below zero MW and at the RTSWCAP above zero. [e21] The entity with decision-making authority over a Resource is responsible for offers represented by proxy curves. [e35] An ESR may withdraw energy only when dispatched by SCED to do so. [e34]

Constraints. The SCED solution monitors cumulative Regulation deployment and keeps it minimized over time. [e33] A 5/7 scaling factor is applied to Reg-Up awards when checking that Base Point plus scaled award does not exceed HDL. [e22]

Step 2 mitigation detail. Each Energy Offer Curve is bounded at the lesser of the Step 1 Reference LMP or the Mitigated Offer Floor, and a curve subject to mitigation is capped at the greater of the Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Mitigated Offer Cap curve value at LSL, or the MOC. [e19]

VOLL cap. A bus LMP above the effective VOLL is set to the greater of the VOLL or the initial LMP minus the positive difference between System Lambda and VOLL, and LMPs below VOLL are unchanged. [e20]

Failure. When SCED cannot solve, ERCOT issues a Watch. [e25] The LMPs, MCPCs and adders for an unsolved interval equal those of the most recently solved interval. [e24] Paragraph (2) adds separate handling for Settlement Intervals identified as erroneous and set as failed under Section 6.3. [e36]

## ERCOT context

Real-time co-optimization (RTC) changed what SCED does in price formation. The IMM reports that with RTC the real-time market simultaneously procures energy and ancillary services, whereas previously the day-ahead market alone procured them. [e11] The current protocol text reflects this: SCED determines Ancillary Service awards using Ancillary Service Offers and ASDCs. [e1][e6] Before RTC went live on December 5, 2025, shortage pricing came from an ORDC price adder added to energy and reserve prices when reserves were low. [e12]

The IMM says that with RTC, operators no longer manually deploy ECRS and SCED instead trades off energy and ancillary services using reserve shortage prices under an ASDC. [e29] The IMM describes the ASDCs as defining shortage pricing in the day-ahead and real-time markets, and reports that ERCOT operations signalled skepticism and imposed a $15 per MWh floor on AS shortages through NPRR 1269 to avoid RUC. [e26][e27] ERCOT's summer 2026 review says RTC helped lower ancillary service costs and market congestion. [e32]

The IMM says that since RTC the real-time market has functioned as expected without major malfunctions, but flags issues with real-time ancillary service price formation likely due to the design of the ancillary service demand curves and duration constraints for ESRs providing ancillary services. [e13]

## Timeline

- December 8, 2020: the ERCOT Board approved NPRR1010, which updates the Adjustment Period and Real-Time Operations sections to address changes associated with the implementation of RTC. [e31][e30]
- December 5, 2025: RTC went live (IMM). [e12]
- ERCOT's summer 2026 review notes that SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. [e28]

## Key facts

- SCED runs approximately every five minutes, or more frequently if necessary. [e3]
- It maximizes bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e6]
- It is a two-step process: Step 1 sets Reference LMPs with only Competitive Constraints; Step 2 produces Base Points, awards, Shadow Prices, MCPCs and LMPs. [e4][e5]
- SCED outputs include Ancillary Service awards as well as energy Base Points. [e1]
- RTC went live December 5, 2025 (per the IMM), moving AS procurement into real time. [e12][e11]
- ERCOT calculates a non-binding projection every five minutes for at least 15 minutes into the future. [e9]
- SCED uses telemetered Resource Status, not the COP status. [e17]
- If SCED cannot solve, ERCOT issues a Watch and carries forward the prior solved interval's prices (with special handling for intervals set as failed). [e25][e24][e36]

## Say it like this

SCED is ERCOT's real-time engine: about every five minutes [e3] it dispatches Resources by maximizing bid-based revenues minus offer-based costs subject to network constraints [e6], and the same solve produces the LMPs [e3]. Since RTC in December 2025 the same solve also awards ancillary services, so energy and reserve prices are formed together. [e11][e12]

## Common confusion

- SCED versus RUC: SCED produces Base Points and awards; RUC is a separate process covered in the ruc topic. [e1]
- SCED versus the Settlement Point Price: SCED produces LMPs, and the settlement price uses the LMPs from all SCED executions in a 15-minute interval and adds the reliability adder. [e15][e10]
- Pre-RTC descriptions (separate ORDC adder, day-ahead-only AS procurement) are historical as of December 2025. [e11][e12]

## Questions

### What does SCED produce?

Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, from Step 2 of its two-step process. [e5]

### Why does SCED run two steps?

Step 1 finds Reference LMPs observing only Competitive Constraints, and Step 2 then solves with all constraints, with mitigation applied to energy offers to resolve Non-Competitive Constraints. [e14][e4][e5]

### Why does SCED ignore COP status and use telemetry?

SCED uses the Resource Status from SCADA telemetry validated by the Real-Time Sequence instead of the COP status. [e17] (Reading: dispatch has to rest on what the unit is actually doing, while the COP is a plan.)

### What if SCED fails to solve?

ERCOT issues a Watch, and prices for the unsolved interval equal those of the most recently solved interval. [e25][e24]

### Why did the IMM raise concerns about RUC after RTC?

The IMM says ERCOT operations indicated it would use RUC to add reserves when the market does not procure the full AS Plan, and that the $15 floor on AS shortages was imposed to avoid that outcome. [e27]

### What did RTC change for SCED?

The real-time market now co-optimizes energy and ancillary services, where previously the day-ahead market alone procured ancillary services. [e11] Shortage pricing is now incorporated into the price of energy rather than being a separate adder. [e16]

## Open items

- How ASDCs set the MCPCs and the ESR single-model mechanics are not detailed here; the IMM statements above are the only RTC price-formation sources quoted.
- Paragraph (2) of Section 6.5.9.2 has further rules for the first 15 minutes after a failure that were not quoted.
- Pending NPRR1188/NPRR1325 changes to SCED (dynamic capping of PCLR bid curves) are shown in np-06 as not yet in effect and are not described here.
- The mechanism by which Shadow Prices on binding constraints become location-specific LMPs (shift factor formula) was not quoted.
- Exact ESR "single model" description is in the IMM report but not quoted here.
