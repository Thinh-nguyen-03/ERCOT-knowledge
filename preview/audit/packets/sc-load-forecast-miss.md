# Audit packet: Scenario: Your Load Forecast Missed by 3 GW (sc-load-forecast-miss)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, RUC Process, paragraph (1) · text copy line 272 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.5.2 Reliability Unit Commitment (RUC) Process (1) 
QUOTE: The RUC process recommends commitment of Generation Resources, to match ERCOT's forecasted Load including Direct Current Tie (DC Tie) Schedules and RUC Ancillary Service Demand Curves (ASDCs), subject to all transmission constraints and Resource performance characteristics.
AFTER:  The RUC process takes into account Resources already committed in the Current Operating Plans (COPs), Resources already committed in previous RUCs, and Off-Line Available Resources having a start-up time of one hour or less. For On-Line Energy Storage Resources (ESRs), using RUC duration requiremen…

### e3 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.1, Introduction, paragraph (5) · text copy line 103 · heading above: 5.1 Introduction

BEFORE: …um energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM. A QSE may not submit a Three-Part Supply Offer to be considered in the DRUC unless the offer was also submitted for consideration in the DAM. (5) 
QUOTE: ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information.
AFTER:  (6) The RUC Study Period for DRUC is the next Operating Day. The RUC Study Period for HRUC is the balance of the current Operating Day plus the next Operating Day if the DRUC for the Operating Day has been solved. (7) HRUC may decommit Resources only to maintain the reliability of the ERCOT System.…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets · text copy line 812

BEFORE: …orward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. 
QUOTE: Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time.
AFTER:  Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves. These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the …

### e6 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.1, RUC Make-Whole Payment, paragraph (1) · text copy line 822 · heading above: 5.7.1 RUC Make-Whole Payment

BEFORE: …laneous Invoice to charge the QSE representing the Resource that has received an OSA the excess revenues not clawed back in RUC Settlements. (2) All clawed back revenues will be paid to QSEs based on a 15-minute Load-Ratio Share basis. 5.7 Settlement for RUC Process 5.7.1 RUC Make-Whole Payment (1) 
QUOTE: To make up the difference when the revenues that a Reliability Unit Commitment (RUC)-committed Resource receives are less than its costs as described in paragraph (2) below, ERCOT shall calculate a RUC Make-Whole Payment for that Operating Day for that Resource (whether committed by Day-Ahead RUC (DRUC) or Hourly RUC (HRUC)). ERCOT shall not calculate or pay a RUC Make-Whole Payment for an Energy Storage Resource (ESR).
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e7 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4, paragraph (1) · text copy line 1566 · heading above: 5.7.4 RUC Make-Whole Charges

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 5.7.4 RUC Make-Whole Charges (1) 
QUOTE: All QSEs that were capacity-short in each RUC will be charged for that shortage, as described in Section 5.7.4.1, RUC Capacity-Short Charge. If the revenues from the charges under Section 5.7.4.1 are not enough to cover all RUC Make-Whole Payments for a Settlement Interval, then the difference will be uplifted to all QSEs on a Load Ratio Share (LRS) basis, as described in Section 5.7.4.2, RUC Make-Whole Uplift Charge.
AFTER:  (2) On a monthly basis, within ten days after the Initial Settlement of the last day of the month has been completed, ERCOT shall post on the Market Information System (MIS) Secure Area the total RUC Make-Whole Charges and RUC Clawback Payment Amounts, by Settlement Interval, by QSE capacity-shortf…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, key insights · text copy line 6347

BEFORE: …ere mainly issued for capacity. • Make-whole payments during RUC settlement exceeded $21 million in 2025, while total claw-backs were only $4.5 million. This disparity reflects relatively low market prices in 2025 that did not cover the start-up and minimum generation costs of RUCcommitted units. • 
QUOTE: ERCOT has meaningfully improved its forecast accuracy since 2022, reducing the average net load forecast error to 452 MW. This error is down from more than 1,000 MW in 2023 and 2024, but ERCOT still systematically underforecasts renewable generation and overforecasts load.
AFTER:  • RUC now incorporates ESR SOC from the COP, which has a major impact on outof-market commitment decisions. On average, aggregate ESR SOC in the COP exceeded real-time values by 874 MWh. • The PUCT has approved a rulemaking for the firm fuel supply service. We are concerned that including natural g…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Demand and Supply chapter, F. Operating Reserve Margin, 1. Increased Reliability Risks due to Renewables and Batteries · text copy line 3217

BEFORE: …irectly contradict the prevailing narrative about grid reliability. 1. Increased Reliability Risks due to Renewables and Batteries In recent years, the immense growth in renewable and energy storage capacity has sparked concerns about the intermittent and duration-limited nature of these resources. 
QUOTE: Despite the average PRC increasing by 128% from 4.9 GW in 2021 to over 11 GW in 2025, forecast errors associated with load, renewables, and battery SOC could produce hours in which the PRC is very low, resulting in a load-shed scenario. In response, ERCOT increased its procurements of operating reserves - beyond the level at which any there is any potential risk of load shedding.
AFTER:  We have termed this posture "conservative operations" in recent filings.10 While forecast errors and uncertainty associated with intermittent renewable generation should be factored into operating reserves requirements, it should be done so reasonably. In our commentary on the AS Methodology for 20…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market, description of NSRS · text copy line 3859

BEFORE: …illary services. Its purpose is to restore frequency within 10 minutes of a significant frequency deviation and recover deployed regulation service. It also compensates for intra-hour net load forecast uncertainty. ECRS can be provided by online and offline units. • Non-Spin Reserve Service (NSRS). 
QUOTE: NSRS resources can respond within 30 minutes and are needed to compensate for intra-hour net load forecast uncertainty that results in under-commitments of capacity or inefficient dispatch instructions.
AFTER:  Online and offline units can provide NSRS. 38 | 2025 State of the Market Report / / Ancillary Services 1. Ancillary Services Procurement Targets The corresponding AS Methodology determines the volume of each ancillary service procured in the ERCOT markets on a month-hour basis.30 The resulting sche…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services chapter, AS Methodology discussion · text copy line 4446

BEFORE: …eded to maintain system reliability. Historically, the ERCOT AS Methodology was based on a combination of NERC requirements and statistical parameters meant to quantify the reliability risks ancillary services are meant to 46 | 2025 State of the Market Report / / Ancillary Services protect against. 
QUOTE: For example, the procurement target for Regulation is set according to the 95th percentile of net load forecast error based on a five-minute look-ahead.
AFTER:  This deterministic statistical approach works reasonably well for a product like Regulation, which is meant to account for forecast errors over a relatively short time horizon and variability between regular runs of the real-time market clearing process. For ancillary services meant to address risk…

### e13 · `ercot-fern-board-sysops` · tier 2 · Board item 9.3 System Operations Update (Winter Storm Fern) (2026-02-04)
locator: Slide 10, Load Forecast · text copy line 214

BEFORE: …OT committed the Life Cycle units during the Transmission Emergency to relieve the overloads. Key Takeaway: A transmission emergency for the South Texas Export IROL was handled effectively via RTC improvements, Braunig Unit 3, and Life Cycle Power unit deployments. 9 Item 9.3 PUBLIC Load Forecast • 
QUOTE: The load forecast peak for Winter Storm Fern was 84,500 MW, which assumes no demand response.
AFTER:  • This forecast was ~5 GW higher than February 2025 actual peak due to growth and colder temperatures. • • System temp at peak 2025: 24.7F • System temp at peak 2026: 18.9F • Estimated 4GW of load growth Abnormal statewide school & business closure (more than typical Holiday) and reduced Oil and Ga…

### e14 · `ercot-fern-board-sysops` · tier 2 · Board item 9.3 System Operations Update (Winter Storm Fern) (2026-02-04)
locator: Slide 10, Load Forecast, Key Takeaway · text copy line 244

BEFORE: …k due to growth and colder temperatures. • • System temp at peak 2025: 24.7F • System temp at peak 2026: 18.9F • Estimated 4GW of load growth Abnormal statewide school & business closure (more than typical Holiday) and reduced Oil and Gas demand resulted in actual load well under forecasted values. 
QUOTE: Key Takeaway: The load forecast overestimated expected peak consumption on Monday, January 26th and Tuesday, January 27th.
AFTER:  Further analysis is being conducted to apply insights into future winter weather forecasts. 10 Item 9.3 Estimated Demand Reductions for Customer Types PUBLIC • ERCOT has developed capability to estimate load reductions for some large types of customers. • Oil & Gas began reducing ~4,200 MW overnigh…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, paragraph (1) · text copy line 5145 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:
AFTER:  (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (d) The amount of its Self-Sche…

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, C. Forecast Error, Figure 50 introduction · text copy line 6600

BEFORE: …), is a major determinant of thermal resource commitment decisions. An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. 
QUOTE: Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time.
AFTER:  Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. Ho…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, Seven-Day Load Forecast, paragraph (1) · text copy line 6310 · heading above: 3.12.1 Seven-Day Load Forecast

BEFORE: …----------------------------------------------------------------------------------------------------+ (2) ERCOT shall produce and post to the ERCOT website an Intra-Hour Load Forecast (IHLF) that provides a rolling two hour five minute forecast of ERCOT-wide Load. 3.12.1 Seven-Day Load Forecast (1) 
QUOTE: ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone.
AFTER:  Preparation for Day-Ahead Operations requires an accurate forecast of the Loads for which generation capacity must be secured. The Seven-Day Load Forecast must have a "self-training" mode that allows ERCOT to review historic Load data and provide the ability to retrain the Seven-Day Load Forecast a…

### e25 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board presentation (September 14-15, 2026), slide 6, Look-Ahead Period for forecast error & forced outages · text copy line 237

BEFORE: …, even where that means doing what other BAs don't have to. Key Takeaway: Restoring Reg Up and RRS is a reliability floor for ERCOT -not over-procurement, but what reliability needs for a grid with no neighbors to lean on. 5 Look-Ahead Period for forecast error & forced outages PUBLIC BOTTOM LINE • 
QUOTE: A six-hour look-ahead remains the prudent posture for 2027. It is based on analysis of the startup times of Resources ERCOT typically has to commit.
AFTER:  • Dialing down the look-ahead does not change the uncertainty the Control Room must manage - an uncertainty that is growing* as the grid adds more inverter-based resources and depends more on duration-limited storage. • It reduces the reserves the tools plan with, leaving operators to bridge the ga…

### e26 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board presentation (September 14-15, 2026), slide 16, Startup Times of RUC-Committed Units · text copy line 774

BEFORE: …pects the trend of having higher available (online + offline) headroom capacity during night hours to continue 15 PUBLIC Startup Times of RUC-Committed Units The startup times of RUCs between Jan 2, 2012, and Sep 2, 2026 (2,152 RUCs), were analyzed. RUCs for congestion and extensions were excluded. 
QUOTE: Key Takeaway: At least half of the units ERCOT commits for capacity have startup times of 5 hours or more - and the RUC process adds 20-30 minutes - supporting ERCOT's recommendation for a six-hour look-ahead period.
AFTER:  16 Date: To: From: Subject: September 7, 2026 Board of Directors Nitika Mago, Director Balancing Operations Planning 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements Issue for the ERCOT Board of Directors ERCOT Board of Directors Meeting Date: September 14-15, 2026 It…

### e27 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board presentation (September 14-15, 2026), slide 6 · text copy line 252

BEFORE: …he grid adds more inverter-based resources and depends more on duration-limited storage. • It reduces the reserves the tools plan with, leaving operators to bridge the gap with their own judgment more often - with limited insight into how battery energy availability will materialize in real time. • 
QUOTE: Reliability Unit Commitments (RUCs) will tend to increase, not decrease, if this Look-Ahead Period parameter is reduced.
AFTER:  WHY • RUC study is a stop-gap assessment: it recommends committing resources to ensure enough capacity is available in real time to serve load and meet the planned AS requirements (to maintain reliability) when the market has not committed enough on its own. • Relying on short-start Resources - whi…

### e28 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board presentation (September 14-15, 2026), slide 11, Impacts on Quantities for ECRS and NSRS · text copy line 617

BEFORE: …istoric headroom. Key Takeaway: The table shows how quickly expected risk climbs as the parameters are dialed down more aggressively. The two proposed changes result in quantities that meet the reliability needs of ERCOT's increasingly complex grid. 10 PUBLIC Impacts on Quantities for ECRS and NSRS 
QUOTE: ERCOT Contingency Reserve Service = Reserved capacity from Resources that respond within 10 minutes to (1) restore Reg Up and RRS (and hence frequency) following the trip of a large generator and/or (2) cover net-load movement within the operating hour that the hourly commitment did not anticipate, bridging until Non-Spin and other resources respond.
AFTER:  Non-Spinning Reserve Service = Reserved capacity from Resources that respond within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate - caused by net load forecast error and resource forced outages - until additional resources are committed. Key Takeaway: E…

### e29 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: 2027 AS Methodology Board presentation (September 14-15, 2026), slide 11, Impacts on Quantities for ECRS and NSRS · text copy line 624

BEFORE: … from Resources that respond within 10 minutes to (1) restore Reg Up and RRS (and hence frequency) following the trip of a large generator and/or (2) cover net-load movement within the operating hour that the hourly commitment did not anticipate, bridging until Non-Spin and other resources respond. 
QUOTE: Non-Spinning Reserve Service = Reserved capacity from Resources that respond within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate - caused by net load forecast error and resource forced outages - until additional resources are committed.
AFTER:  Key Takeaway: ERCOT's recommended ECRS and Non-Spin quantities (S3) reflect a measured outcome - below the maximum that crediting no headroom would result in, but well above the aggressive scenarios that would take on more risk. * S3 is ERCOT proposed. S1, S2 S3, S4 scenario parameters are same as …

### e31 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026) · text copy line 75

BEFORE: …he risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria. 
QUOTE: The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load - wind - solar) forecast and conventional resource availability.
AFTER:  The hourly requirement for ECRS and Non-Spin will be derived by using the 30 minute ahead and 6 hour ahead historic net load forecast error and the combined ECRS and Non-Spin requirements from the optimization. ECRS requirement may be increased further to account for the capacity needed to recover …

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.1, Ancillary Services Procurement Targets · text copy line 3885

BEFORE: …ubsequent years and remained roughly the same from 2024 to 2025. 31 Despite the consistent total volume of ancillary services, procurement volumes changed notably across products: • ECRS volume decreased by over 19% because of the removal of the "adjustment for risk coverage" during sunset hours. • 
QUOTE: Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error.
AFTER:  • NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors. Our section on ERCOT's AS Methodology provides more detail on this topic. Figure 24: Average Ancillary Service Capacity by Month !"#A%%&'()*+',A#+)-+./A'+M+"1)234R "!#!!! +#!!! U9:;<4:=>9 OMUM J , U9?@A; U9?@3<B4 CaUM…

### e33 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision, Non-Spin bullet (NPRR1282) · text copy line 62

BEFORE: …l analysis to determine appropriate duration requirements for Ancillary Services. ERCOT shared the results of its analysis and its recommendations with the RTCBTF at its March 25, 2025 and April 22, 2025 meetings. Following is a summary of ERCOT's analysis and recommendations: | | | | | | | | | | - 
QUOTE: Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours.
AFTER:  This duration analysis for Non-Spin should be periodically revisited to assess its sufficiency especially during extreme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-S…

## Statements to check (new or changed since the last audit)

- **How it works #4** (cites e11, e32, e28, e29, e10, e31, e25, e26, e9) FLAG number-not-in-quote: 2026: Step 4, reserves absorb the rest, each for its own horizon. The Regulation target is set at the 95th percentile of five-minute net load forecast error, and in 2025 higher five-minute error raised Reg-Up and Reg-Down volumes by 7.4% and 3.3%. [e11][e32] ERCOT describes ECRS as covering net-load movement within the operating hour that the hourly commitment did not anticipate, and Non-Spin as covering multi-hour shortfalls caused by net load forecast error and forced outages until more resources are committed; the IMM likewise says NSRS compensates for intra-hour net load forecast uncertainty that leads to under-commitment. [e28][e29][e10] The 2026 AS Methodology sizes ECRS and Non-Spin so that there is a 1 in 10-year probability of reserves falling below the higher of procured Reg-Up plus RRS or PRC of 3,000 MW, due to net load forecast and conventional resource uncertainty. [e31] For 2027, ERCOT's staff recommend keeping a six-hour look-ahead for forecast error and forced outages, because at least half the units it commits for capacity take 5 hours or more to start and RUC adds 20-30 minutes. [e25][e26] The IMM, by contrast, says ERCOT's response to forecast-error risk raised reserve procurement beyond the level at which there is any potential risk of load shedding. [e9]
- **Questions #8** (cites e25, e26, e27, e33): ERCOT's staff say the look-ahead is based on the startup times of units it typically commits: at least half of capacity RUCs have startup times of 5 hours or more, and RUC adds 20-30 minutes. [e25][e26] They argue that shortening the look-ahead would tend to increase RUC, not reduce it. [e27] ERCOT's NPRR1282 analysis similarly cited sustained under-forecast error in six-hour-ahead net load to keep Non-Spin at four hours. [e33]
- **Link to load-forecasting** (cites e23): example-of Load Forecasting: The scenario applies load forecast error to ERCOT's commitment and pricing processes; ERCOT's Seven-Day Load Forecast predicts hourly Loads by Weather Zone. [e23]
- **Link to ruc** (cites e2, e3): affects RUC (Reliability Unit Commitment: DRUC/HRUC): RUC commits capacity to match ERCOT's forecasted Load, and HRUC re-runs with updated load forecasts. [e2][e3]
- **Link to ruc-make-whole** (cites e6, e7): causes RUC Make-Whole & Clawback: Units committed by RUC that do not recover costs get make-whole payments, and any shortfall is uplifted by Load Ratio Share. [e6][e7]
- **Link to non-spin** (cites e29): related Non-Spinning Reserve: ERCOT describes Non-Spin as covering multi-hour shortfalls the hourly commitment did not anticipate, caused by net load forecast error and forced outages. [e29]
- **Link to ecrs** (cites e28): related ECRS (ERCOT Contingency Reserve Service): ERCOT describes ECRS as covering net-load movement within the operating hour that the hourly commitment did not anticipate. [e28]
- **Link to regulation** (cites e11): related Regulation Up / Down: The Regulation procurement target is set at the 95th percentile of five-minute net load forecast error. [e11]
- **Link to dam** (cites e5): contrasts-with Day-Ahead Market (DAM): Day-ahead energy positions are financial; ERCOT settles imbalances on them in real time. [e5]
- **Link to rtm** (cites e5, e19): settles Real-Time Market (RTM): Day-ahead positions are financial and ERCOT settles imbalances on them in real time; the Load Zone Energy Imbalance charge uses the Real-Time Settlement Point Price. [e5][e19]
- **Link to winter-storm-jan-2026** (cites e13, e14) FLAG number-not-in-quote: 2026: example-of January 2026 Winter Storm: During Winter Storm Fern the load forecast (84,500 MW peak) overestimated expected peak consumption on January 26 and 27. [e13][e14]
- **Link to net-load** (cites e8, e22) FLAG number-not-in-quote: 2025: related Net Load: The IMM reports that the average net load forecast error, measured eight hours ahead of real-time, fell to 452 MW in 2025, and says ERCOT still systematically over-forecasts load. [e8][e22]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) "A big load forecast miss shows up first in commitment: RUC commits to the forecast, so an over-forecast buys capacity that gets paid through make-whole uplift, and an under-forecast leaves the real-time market and reserves to cover the gap, with Regulation, ECRS and Non-Spin each covering a longer horizon. For a retailer the direct cost is the volume bought day-ahead against the wrong forecast, which settles at the real-time Load Zone price."
- (Scenarios) - (Reasoning) Start with direction: an over-forecast and an under-forecast hit different processes.
- (Scenarios) - Suppose (illustrative) a QSE bought 3,000 MW day-ahead for an hour but its load came in at 2,700 MW: it sells 300 MWh back at the real-time price, a loss only if real-time is below what it paid.
- (Scenarios) - (Reasoning) The effect looks like a load under-forecast at the net peak: capacity the plan counted on is not there, so the gap falls on Non-Spin, ECRS and late RUC.

