---
id: sc-load-forecast-miss
name: "Scenario: Your Load Forecast Missed by 3 GW"
aliases: [load forecast miss, forecast error scenario, missed load forecast case, forecast error and RUC]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: load-forecasting
    type: example-of
    note: The scenario applies load forecast error to ERCOT's commitment and pricing processes.
  - to: ruc
    type: affects
    note: RUC commits capacity to match ERCOT's forecasted Load, and HRUC re-runs with updated load forecasts. [e2][e3]
  - to: ruc-make-whole
    type: causes
    note: Units committed by RUC that do not recover costs get make-whole payments, and any shortfall is uplifted by Load Ratio Share. [e6][e7]
  - to: non-spin
    type: related
    note: The IMM describes NSRS as covering intra-hour net load forecast uncertainty. [e10]
  - to: regulation
    type: related
    note: The Regulation procurement target is set at the 95th percentile of five-minute net load forecast error. [e11]
  - to: dam
    type: contrasts-with
    note: Day-ahead energy positions are financial; ERCOT settles imbalances on them in real time. [e5]
  - to: rtm
    type: settles
    note: Day-ahead positions are financial and ERCOT settles imbalances on them in real time; the Load Zone Energy Imbalance charge uses the Real-Time Settlement Point Price. [e5][e19]
  - to: winter-storm-jan-2026
    type: example-of
    note: During Winter Storm Fern the load forecast (84,500 MW peak) overestimated expected peak consumption on January 26 and 27. [e13][e14]
  - to: net-load
    type: related
    note: The IMM reports that the average net load forecast error, measured eight hours ahead of real-time, fell to 452 MW in 2025, and says ERCOT still systematically over-forecasts load. [e8][e22]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Reliability Unit Commitment (RUC)"
    quote: "A process to ensure that there is adequate Resource capacity and Ancillary Service capacity committed in the proper locations to serve ERCOT forecasted Load."
  - id: e2
    source: np-05
    locator: "Section 5.5.2, RUC Process, paragraph (1)"
    quote: "The RUC process recommends commitment of Generation Resources, to match ERCOT’s forecasted Load including Direct Current Tie (DC Tie) Schedules and RUC Ancillary Service Demand Curves (ASDCs), subject to all transmission constraints and Resource performance characteristics."
  - id: e3
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (5)"
    quote: "ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information."
  - id: e4
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (3)"
    quote: "The DRUC must be run after the close of the Day-Ahead Market (DAM)."
  - id: e5
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets"
    quote: "Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e6
    source: np-05
    locator: "Section 5.7.1, RUC Make-Whole Payment, paragraph (1)"
    quote: "To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR)."
  - id: e7
    source: np-05
    locator: "Section 5.7.4, paragraph (1)"
    quote: "All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge."
  - id: e8
    source: imm-som-2025
    locator: "Market Operations chapter, key insights"
    quote: "ERCOT has meaningfully improved its forecast accuracy since 2022, reducing the average net load forecast error to 452 MW. This error is down from more than 1,000 MW in 2023 and 2024, but ERCOT still systematically underforecasts renewable generation and overforecasts load."
  - id: e9
    source: imm-som-2025
    locator: "Demand and Supply chapter, F. Operating Reserve Margin, 1. Increased Reliability Risks due to Renewables and Batteries"
    quote: "Despite the average PRC increasing by 128% from 4.9 GW in 2021 to over 11 GW in 2025, forecast errors associated with load, renewables, and battery SOC could produce hours in which the PRC is very low, resulting in a load-shed scenario. In response, ERCOT increased its procurements of operating reserves – beyond the level at which any there is any potential risk of load shedding."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of NSRS"
    quote: "NSRS resources can respond within 30 minutes and are needed to compensate for intra-hour net load forecast uncertainty that results in under-commitments of capacity or inefficient dispatch instructions."
  - id: e11
    source: imm-som-2025
    locator: "Ancillary Services chapter, AS Methodology discussion"
    quote: "For example, the procurement target for Regulation is set according to the 95th percentile of net load forecast error based on a five-minute look-ahead."
  - id: e12
    source: imm-som-2025
    locator: "Transmission Congestion, D. Real-Time Congestion"
    quote: "Unexpected changes in system conditions between the day-ahead and real-time markets often lead to differences in congestion values. These changes include net load forecast errors, forced outages, and other deviations from expected conditions."
  - id: e13
    source: ercot-fern-board-sysops
    locator: "Slide 10, Load Forecast"
    quote: "The load forecast peak for Winter Storm Fern was 84,500 MW, which assumes no demand response."
  - id: e14
    source: ercot-fern-board-sysops
    locator: "Slide 10, Load Forecast, Key Takeaway"
    quote: "Key Takeaway: The load forecast overestimated expected peak consumption on Monday, January 26th and Tuesday, January 27th."
  - id: e15
    source: ercot-fern-board-sysops
    locator: "Slide 10, Load Forecast"
    quote: "Abnormal statewide school & business closure (more than typical Holiday) and reduced Oil and Gas demand resulted in actual load well under forecasted values."
  - id: e16
    source: ercot-elliott-report
    locator: "Section 3, Peak Demand: Forecast and Actual"
    quote: "As a result, the load forecasts produced by the internally-developed forecast models were obviously too low for the 23rd and 24th so ERCOT switched to the vendor-developed forecast models."
  - id: e17
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "ERCOT operators issued RUC instructions for 5,129 resource-hours in 2025, a 176% increase from 2024. Congestion accounted for approximately 77% of these commitments."
  - id: e18
    source: ercot-summer-2026-review
    locator: "Slide 13, Increasing solar and storage resources continue to impact summer market outcomes"
    quote: "Reliability Unit Commitments were up compared to prior years, shifting from congestion to capacity related procurement"
  - id: e19
    source: np-06
    locator: "Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, paragraph (1)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:"
  - id: e20
    source: imm-som-2025
    locator: "Executive Summary, Market Operations"
    quote: "The increase in RUC commitments corresponds to higher make-whole payments, which exceeded $21 million in 2025. The increase in make-whole payments can be partially explained by greater use of RUC and fewer resources opting out of RUC settlement."
  - id: e21
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (2)"
    quote: "The Adjustment Period provides each Qualified Scheduling Entity (QSE) the opportunity to adjust its trades, Self-Schedules, and Resource commitments as more accurate information becomes available under Section 6.4, Adjustment Period."
  - id: e22
    source: imm-som-2025
    locator: "Market Operations chapter, C. Forecast Error, Figure 50 introduction"
    quote: "Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time."
---

## Definition

This scenario asks how a large load forecast error moves through ERCOT's commitment, reserve and pricing processes. The link starts with RUC, which exists to make sure enough Resource and Ancillary Service capacity is committed in the right places to serve ERCOT's forecasted Load. [e1]

## How it works

Step 1, the day-ahead market does not commit for reliability. Day-ahead energy and ancillary services are financial positions whose imbalances settle in real time. [e5] DRUC runs after the DAM closes and recommends commitment of Generation Resources to match ERCOT's forecasted Load, subject to transmission constraints. [e4][e2] Because RUC commits to match ERCOT's forecasted Load, a forecast that is too high can lead to extra RUC commitments, and one that is too low can leave too little capacity committed. [e2]

Step 2, the forecast is updated through the day. HRUC runs at least one hour before each Operating Hour using updated Load forecasts and Outage information, and QSEs can adjust trades, Self-Schedules and commitments in the Adjustment Period as better information arrives. [e3][e21]

Step 3, reserves absorb the rest. The IMM describes NSRS as covering intra-hour net load forecast uncertainty that leads to under-commitment, and the Regulation target is set at the 95th percentile of five-minute net load forecast error. [e10][e11] The IMM describes concern that forecast errors for load, renewables and battery state of charge could produce very low PRC hours as the reason ERCOT increased its operating reserve procurement, which the IMM says went beyond the level at which there is any potential risk of load shedding. [e9]

Step 4, prices and settlement. Day-ahead positions are financial and ERCOT settles imbalances on them in real time, and the Load Zone Energy Imbalance charge uses the Real-Time Settlement Point Price. [e5][e19] Forecast errors also shift congestion between day-ahead and real-time. [e12] RUC-committed units that do not cover costs receive make-whole payments (ESRs excepted), charged first to capacity-short QSEs and then uplifted to all QSEs by Load Ratio Share. [e6][e7]

## Key facts

- The IMM reports that ERCOT's average net load forecast error (which it measures eight hours ahead of real-time) was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024; the IMM says ERCOT still systematically over-forecasts load. [e8][e22]
- RUC instructions totalled 5,129 resource-hours in 2025, 77% for congestion; make-whole payments exceeded $21 million. [e17][e20]
- Summer 2026: RUC rose and shifted from congestion to capacity procurement. [e18]
- Winter Storm Fern: the load forecast (84,500 MW peak, assuming no demand response) overestimated expected peak consumption on January 26 and 27. [e13][e14]
- Winter Storm Elliott: ERCOT's internal load forecasts were too low for December 23 and 24 (2022). [e16]

## Say it like this

(Guidance) "A big load forecast miss shows up first in commitment: RUC commits to the forecast, so an over-forecast buys capacity that gets paid through make-whole uplift, and an under-forecast leaves the real-time market and reserves to cover the gap. For a retailer the direct cost is the volume bought day-ahead against the wrong forecast, which settles at the real-time Load Zone price."

## Common confusion

(Guidance) The day-ahead market is not where ERCOT secures reliability; it is a financial market, and RUC is the reliability commitment after it. [e5][e4] Also, ERCOT's own forecast error is a different thing from a QSE's forecast error: ERCOT's affects RUC and reserves for everyone, while a QSE's affects its own imbalance at the real-time price. [e2][e19]

## Questions

### Is ERCOT's load forecast biased?

The IMM says that by 2025 ERCOT still systematically under-forecasts renewable generation and over-forecasts load, even though the average net load forecast error (measured eight hours ahead of real-time) fell to 452 MW. [e8][e22] Single events can go either way: Fern was over-forecast and Elliott under-forecast. [e14][e16]

### Who pays when RUC commits units for a forecast that does not show up?

The RUC-committed Resource gets a make-whole payment if its revenues fall short of costs; capacity-short QSEs are charged first and any remainder is uplifted to all QSEs by Load Ratio Share. [e6][e7] The IMM reports make-whole payments above $21 million in 2025. [e20]

### Why did Fern's forecast miss?

ERCOT cited abnormal statewide school and business closures and reduced oil and gas demand, which pushed actual load well under the forecast; the 84,500 MW forecast also assumed no demand response. [e15][e13]

## Scenarios

### ERCOT's day-ahead load forecast for tomorrow's peak turns out 3 GW too high (or too low). Walk me through what happens.

- (Reasoning) Start with direction: an over-forecast and an under-forecast hit different processes.
- The DAM is financial, so the miss does not change physical commitment there; positions settle against real-time. [e5]
- DRUC, run after the DAM, commits to ERCOT's forecasted Load, so an over-forecast can commit extra units. [e4][e2]
- HRUC re-runs at least an hour before each Operating Hour with updated Load forecasts and Outage information, so the forecast used is refreshed during the day. [e3]
- Units committed for load that does not appear may not cover costs; their make-whole is charged to capacity-short QSEs and the rest uplifted by Load Ratio Share. [e6][e7]
- If load is under-forecast, the gap falls on real-time dispatch and reserves; NSRS is meant to cover intra-hour net load forecast uncertainty. [e10]
- For a QSE, the Load Zone Energy Imbalance charge is calculated at the Real-Time Settlement Point Price, and day-ahead positions are settled against real time. [e19][e5]
- Suppose (illustrative) a QSE bought 3,000 MW day-ahead for an hour but its load came in at 2,700 MW: it sells 300 MWh back at the real-time price, a loss only if real-time is below what it paid.
- Congestion can also move, because forecast errors drive day-ahead to real-time differences in congestion. [e12]
- (Reasoning) Close with the post-mortem: was it weather, calendar effects (school and business closures drove Fern's over-forecast), or large flexible load behaviour, and what does that say about the next similar day? [e15]

## Open items

- No saved source quantifies how many MW of RUC a given forecast error causes; the link is described qualitatively.
- No source describes how individual QSEs or REPs build their own load forecasts or how ERCOT's published forecast is used in trading.
- The DRUC/HRUC opt-out (RUC buy-back) and its effect on who bears forecast-driven RUC costs were not covered here.
- Deeper pass: the 2027 AS Methodology (ercot-as-methodology-2027) links ECRS and NSRS quantities to 30-minute and six-hour-ahead net load forecast errors, but the saved copy is redlined and was not quoted.
