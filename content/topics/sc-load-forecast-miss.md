---
id: sc-load-forecast-miss
name: "Scenario: Your Load Forecast Missed by 3 GW"
aliases: [load forecast miss, forecast error scenario, missed load forecast case, forecast error and RUC]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: load-forecasting
    type: example-of
    note: The scenario applies load forecast error to ERCOT's commitment and pricing processes; ERCOT's Seven-Day Load Forecast predicts hourly Loads by Weather Zone. [e23]
  - to: ruc
    type: affects
    note: RUC commits capacity to match ERCOT's forecasted Load, and HRUC re-runs with updated load forecasts. [e2][e3]
  - to: ruc-make-whole
    type: causes
    note: Units committed by RUC that do not recover costs get make-whole payments, and any shortfall is uplifted by Load Ratio Share. [e6][e7]
  - to: non-spin
    type: related
    note: ERCOT describes Non-Spin as covering multi-hour shortfalls the hourly commitment did not anticipate, caused by net load forecast error and forced outages. [e29]
  - to: ecrs
    type: related
    note: ERCOT describes ECRS as covering net-load movement within the operating hour that the hourly commitment did not anticipate. [e28]
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
  - id: e23
    source: np-03
    locator: "Section 3.12.1, Seven-Day Load Forecast, paragraph (1)"
    quote: "ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone."
  - id: e24
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 2, why AS are needed"
    quote: "The needed AS quantities depend on drivers such as: • amount of intermittent resources serving load, • load, wind, and solar forecast accuracy, • the probability of resource outages, • uncertainty in battery state of charge management,"
  - id: e25
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 6, Look-Ahead Period for forecast error & forced outages"
    quote: "A six-hour look-ahead remains the prudent posture for 2027. It is based on analysis of the startup times of Resources ERCOT typically has to commit."
  - id: e26
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 16, Startup Times of RUC-Committed Units"
    quote: "Key Takeaway: At least half of the units ERCOT commits for capacity have startup times of 5 hours or more — and the RUC process adds 20-30 minutes — supporting ERCOT’s recommendation for a six-hour look-ahead period."
  - id: e27
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 6"
    quote: "Reliability Unit Commitments (RUCs) will tend to increase, not decrease, if this Look-Ahead Period parameter is reduced."
  - id: e28
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 11, Impacts on Quantities for ECRS and NSRS"
    quote: "ERCOT Contingency Reserve Service = Reserved capacity from Resources that respond within 10 minutes to (1) restore Reg Up and RRS (and hence frequency) following the trip of a large generator and/or (2) cover net-load movement within the operating hour that the hourly commitment did not anticipate, bridging until Non-Spin and other resources respond."
  - id: e29
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 11, Impacts on Quantities for ECRS and NSRS"
    quote: "Non-Spinning Reserve Service = Reserved capacity from Resources that respond within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate — caused by net load forecast error and resource forced outages — until additional resources are committed."
  - id: e30
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board presentation (September 14-15, 2026), slide 6"
    quote: "RUC volume is high right now largely because of an exceptionally hot summer and record load. Some RUCs are avoidable with better inputs, especially how battery state of charge is represented, and through stronger AS Demand Curves (ASDCs) that encourage resources to self-commit — but not all."
  - id: e31
    source: ercot-as-methodology-2026
    locator: "Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026)"
    quote: >-
      The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load – wind – solar) forecast and conventional resource availability.
  - id: e32
    source: imm-som-2025
    locator: "Chapter III.A.1, Ancillary Services Procurement Targets"
    quote: "Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error."
  - id: e33
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision, Non-Spin bullet (NPRR1282)"
    quote: >-
      Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours.
  - id: e34
    source: np-05
    locator: "Section 5.5.2, paragraph (21)"
    quote: "A QSE with a Resource that is not a Reliability Must-Run (RMR) Unit or has not received an Outage Schedule Adjustment (OSA) that has been committed in a DRUC or HRUC process may opt out of the RUC Settlement (or “buy back” the commitment) by setting the COP status of the RUC-committed Resource to ONOPTOUT for the first hour of a contiguous block of RUC-Committed Hours in the Opt Out Snapshot."
  - id: e35
    source: imm-som-2025
    locator: "page 101 (OCR), Market Operations chapter"
    quote: "Suppliers may opt out of both the make-whole payment and any associated clawback, effectively self-committing the unit and accepting full exposure to market outcomes."
  - id: e36
    source: imm-som-2025
    locator: "page 102 (OCR), Market Operations chapter, Table 9 (columns: opt-out frequency %, claw-back $ millions, make-whole $ millions)"
    quote: "2021 39 $3.09 $5.38 2022 24 $22.69 $70.13 2023 23 $3.45 $3.69 2024 8 $7.14 $3.35 2025 3 $4.53 $21.84"
  - id: e37
    source: imm-som-tac-2026-07
    locator: "IMM presentation to TAC, August 13, 2026, RUC trends slide"
    quote: "One legitimate and growing challenge for ERCOT in using RUC appropriately is the (in)accuracy of the forecast for battery State of Charge"
  - id: e38
    source: ercot-summer-2026-review
    locator: "Slide 20, RUC, Key Takeaway"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e39
    source: imm-som-2025
    locator: "Market Operations chapter, C. Forecast Error"
    quote: "An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC."
  - id: e40
    source: ercot-summer-2026-review
    locator: "Slide 20, RUC, chart footnote"
    quote: "August data for each year goes through 8/15."
---

## Definition

This scenario asks how a large load forecast error moves through ERCOT's commitment, reserve and pricing processes. The link starts with RUC, which exists to make sure enough Resource and Ancillary Service capacity is committed in the right places to serve ERCOT's forecasted Load. [e1]

## How it works

Step 1, the forecast itself. ERCOT's Seven-Day Load Forecast predicts hourly Loads for the next 168 hours from current weather forecast parameters in each Weather Zone. [e23] ERCOT's September 2026 Board presentation on the 2027 AS Methodology lists load, wind and solar forecast accuracy and uncertainty in battery state of charge among the drivers of how much AS is needed. [e24]

Step 2, the day-ahead market does not commit for reliability. Day-ahead energy and ancillary services are financial positions whose imbalances settle in real time. [e5] DRUC runs after the DAM closes and recommends commitment of Generation Resources to match ERCOT's forecasted Load, subject to transmission constraints. [e4][e2] The IMM notes that an over-forecast of net demand can lead to sub-optimal commitment decisions, and an under-forecast to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. [e39]

Step 3, the forecast is updated through the day. HRUC runs at least one hour before each Operating Hour using updated Load forecasts and Outage information, and QSEs can adjust trades, Self-Schedules and commitments in the Adjustment Period as better information arrives. [e3][e21] A QSE whose Resource is RUC-committed (other than an RMR Unit or one with an Outage Schedule Adjustment) may opt out of RUC Settlement by setting its COP status to ONOPTOUT; the IMM says this gives up both the make-whole payment and any clawback and accepts full market exposure. [e34][e35]

Step 4, reserves absorb the rest, each for its own horizon. The Regulation target is set at the 95th percentile of five-minute net load forecast error, and in 2025 higher five-minute error raised Reg-Up and Reg-Down volumes by 7.4% and 3.3%. [e11][e32] ERCOT describes ECRS as covering net-load movement within the operating hour that the hourly commitment did not anticipate, and Non-Spin as covering multi-hour shortfalls caused by net load forecast error and forced outages until more resources are committed; the IMM likewise says NSRS compensates for intra-hour net load forecast uncertainty that leads to under-commitment. [e28][e29][e10] The 2026 AS Methodology sizes ECRS and Non-Spin so that there is a 1 in 10-year probability of reserves falling below the higher of procured Reg-Up plus RRS or PRC of 3,000 MW, due to net load forecast and conventional resource uncertainty. [e31] For 2027, ERCOT's staff recommend keeping a six-hour look-ahead for forecast error and forced outages, because at least half the units it commits for capacity take 5 hours or more to start and RUC adds 20-30 minutes. [e25][e26] The IMM, by contrast, says ERCOT's response to forecast-error risk raised reserve procurement beyond the level at which there is any potential risk of load shedding. [e9]

Step 5, prices and settlement. Day-ahead positions are financial and ERCOT settles imbalances on them in real time, and the Load Zone Energy Imbalance charge uses the Real-Time Settlement Point Price. [e5][e19] Forecast errors also shift congestion between day-ahead and real-time. [e12] RUC-committed units that do not cover costs receive make-whole payments (ESRs excepted), charged first to capacity-short QSEs and then uplifted to all QSEs by Load Ratio Share. [e6][e7]

## Key facts

- The IMM reports that ERCOT's average net load forecast error (which it measures eight hours ahead of real-time) was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024; the IMM says ERCOT still systematically over-forecasts load. [e8][e22]
- RUC instructions totalled 5,129 resource-hours in 2025, 77% for congestion; make-whole payments exceeded $21 million. [e17][e20]
- RUC opt-out frequency fell from 39% in 2021 to 3% in 2025 in the IMM's Table 9, while make-whole payments were $21.84 million in 2025. [e36]
- Summer 2026 (ERCOT's review, with August data through August 15): RUC was substantially higher than the two previous summers, shifting from congestion to capacity and AS sufficiency. [e18][e38][e40]
- Reserve horizons: Regulation five-minute, ECRS within the hour, Non-Spin multi-hour; ERCOT's 2027 proposal keeps a six-hour look-ahead. [e11][e28][e29][e25]
- Winter Storm Fern: the load forecast (84,500 MW peak, assuming no demand response) overestimated expected peak consumption on January 26 and 27. [e13][e14]
- Winter Storm Elliott: ERCOT's internal load forecasts were too low for December 23 and 24 (2022). [e16]

## Say it like this

(Guidance) "A big load forecast miss shows up first in commitment: RUC commits to the forecast, so an over-forecast buys capacity that gets paid through make-whole uplift, and an under-forecast leaves the real-time market and reserves to cover the gap, with Regulation, ECRS and Non-Spin each covering a longer horizon. For a retailer the direct cost is the volume bought day-ahead against the wrong forecast, which settles at the real-time Load Zone price."

## Common confusion

(Guidance) The day-ahead market is not where ERCOT secures reliability; it is a financial market, and RUC is the reliability commitment after it. [e5][e4] ERCOT's own forecast error is a different thing from a QSE's forecast error: ERCOT's affects RUC and reserves for everyone, while a QSE's affects its own imbalance at the real-time price. [e2][e19] And the IMM's 452 MW is an eight-hour-ahead net load error, not the five-minute error that sizes Regulation. [e22][e11]

## Questions

### Is ERCOT's load forecast biased?

The IMM says that by 2025 ERCOT still systematically under-forecasts renewable generation and over-forecasts load, even though the average net load forecast error (measured eight hours ahead of real-time) fell to 452 MW. [e8][e22] Single events can go either way: Fern was over-forecast and Elliott under-forecast. [e14][e16]

### Who pays when RUC commits units for a forecast that does not show up?

The RUC-committed Resource gets a make-whole payment if its revenues fall short of costs; capacity-short QSEs are charged first and any remainder is uplifted to all QSEs by Load Ratio Share. [e6][e7] The IMM reports make-whole payments above $21 million in 2025, partly because fewer resources opted out of RUC settlement. [e20]

### Why did Fern's forecast miss?

ERCOT cited abnormal statewide school and business closures and reduced oil and gas demand, which pushed actual load well under the forecast; the 84,500 MW forecast also assumed no demand response. [e15][e13]

### Why does ERCOT size reserves against a six-hour forecast error rather than a shorter one?

ERCOT's staff say the look-ahead is based on the startup times of units it typically commits: at least half of capacity RUCs have startup times of 5 hours or more, and RUC adds 20-30 minutes. [e25][e26] They argue that shortening the look-ahead would tend to increase RUC, not reduce it. [e27] ERCOT's NPRR1282 analysis similarly cited sustained under-forecast error in six-hour-ahead net load to keep Non-Spin at four hours. [e33]

### What if the generator RUC commits for your over-forecast does not want the make-whole?

Its QSE can opt out of RUC Settlement by setting the COP status to ONOPTOUT, which the IMM says means giving up the make-whole and any clawback and taking full market exposure. [e34][e35] Opt-outs fell to 3% of RUCs in 2025 from 39% in 2021. [e36] (Reasoning) Fewer opt-outs means more of the cost of forecast-driven RUC flows into uplift.

### Is a forecast "miss" only about load?

No. ERCOT lists wind and solar forecast accuracy and battery state of charge alongside load as drivers of AS needs. [e24] The IMM told TAC in August 2026 that the accuracy of the battery State of Charge forecast is a growing challenge for using RUC appropriately. [e37]

## Scenarios

### ERCOT's day-ahead load forecast for tomorrow's peak turns out 3 GW too high (or too low). Walk me through what happens.

- (Reasoning) Start with direction: an over-forecast and an under-forecast hit different processes.
- The DAM is financial, so the miss does not change physical commitment there; positions settle against real-time. [e5]
- DRUC, run after the DAM, commits to ERCOT's forecasted Load, so an over-forecast can commit extra units. [e4][e2]
- HRUC re-runs at least an hour before each Operating Hour with updated Load forecasts and Outage information, so the forecast used is refreshed during the day. [e3]
- Units committed for load that does not appear may not cover costs; their make-whole is charged to capacity-short QSEs and the rest uplifted by Load Ratio Share, unless the QSE opted out of RUC settlement. [e6][e7][e34]
- If load is under-forecast, the gap falls on real-time dispatch and reserves: ECRS for movement within the hour, Non-Spin for multi-hour shortfalls until more units are committed. [e28][e29]
- (Reasoning) A 3 GW miss that only appears a few hours ahead is a problem because, per ERCOT, at least half of the units it commits for capacity need 5 hours or more to start. [e26]
- For a QSE, the Load Zone Energy Imbalance charge is calculated at the Real-Time Settlement Point Price, and day-ahead positions are settled against real time. [e19][e5]
- Suppose (illustrative) a QSE bought 3,000 MW day-ahead for an hour but its load came in at 2,700 MW: it sells 300 MWh back at the real-time price, a loss only if real-time is below what it paid.
- Congestion can also move, because forecast errors drive day-ahead to real-time differences in congestion. [e12]
- (Reasoning) Close with the post-mortem: was it weather, calendar effects (school and business closures drove Fern's over-forecast), or large flexible load behaviour, and what does that say about the next similar day? [e15]

### Variant: the load forecast is right, but batteries reach the evening with far less stored energy than ERCOT assumed.

- ERCOT treats battery state of charge uncertainty as its own driver of AS needs, next to load, wind and solar forecast accuracy. [e24]
- The IMM calls the inaccuracy of the battery SOC forecast a growing challenge for using RUC appropriately. [e37]
- ERCOT's staff say some RUCs are avoidable with better inputs, especially how battery state of charge is represented, but not all; they link high 2026 RUC volume to an exceptionally hot summer and record load. [e30]
- Summer 2026 RUC was largely for capacity and AS sufficiency. [e38]
- (Reasoning) The effect looks like a load under-forecast at the net peak: capacity the plan counted on is not there, so the gap falls on Non-Spin, ECRS and late RUC.

## Open items

- No saved source quantifies how many MW of RUC a given forecast error causes; the link is described qualitatively.
- No source describes how individual QSEs or REPs build their own load forecasts or how ERCOT's published forecast is used in trading.
- Resolved 2026-11-21: the RUC opt-out (ONOPTOUT) rule and 2021-2025 opt-out frequency are now cited.
- Resolved 2026-11-21 (partly): the 2027 AS Methodology Board presentation (September 2026) is cited for ECRS/NSRS roles and the six-hour look-ahead; the redlined methodology text giving the exact 30-minute and six-hour error calculations was still not quoted, and whether the Board approved the 2027 methodology is not in the saved sources.
- The IMM monthly report (September 2026) charts DA vs RT load forecast error by hour ending, but the values did not extract as text.
