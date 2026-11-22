# Audit packet: Scenario: Bidding a Battery After RTC+B (sc-battery-strategy)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 2 · text copy line 633 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …2) 1. EB/OCs for the ESR and the Ancillary Service offers are input data to SCED process. EB/OCs can be updated anytime. SCED uses the most recent EB/OC that is available in the database and the telemetered physical capability of the resource in determining awards (along with other information). 2. 
QUOTE: SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs.
AFTER:  3. The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is…

### e2 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 23, ESR Participation in the DAM with the RTC+B Project, item 2 · text copy line 610 · heading above: 8.1.1.2.1.3 (8)

BEFORE: ….1.1.3.3 (2) 4 hours 8.1.1.2.1.3 (8) 1 hour *Note FRRS is being eliminated with RTC. PUBLIC 22 ESR Participation in the DAM with the RTC+B Project 1. EB/OCs for the ESR is input to DAM. Resource-specific DAM energy sales and purchases that are cleared are cleared at the Resource Node of the ESR. 2. 
QUOTE: State of Charge (SOC) is not considered in the clearing for Energy and Ancillary Services in the DAM. (If not careful, a QSE representing ESRs could "oversell" its capability in DAM.
AFTER:  Financial Exposure is based on imbalance between DAM and Real-Time. [DAM Ancillary Service awards, Real-Time Ancillary Service awards, self-arrangement of Ancillary Services, and trades].) 3. The ESR will be awarded DAM Resource-specific energy sales and purchases and Resource-specific Ancillary Se…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 717

BEFORE: …duced by solar resources increased from 10.4% in 2024 to 13.9% in 2025. Energy Storage Resource (ESR) capacity increased even more dramatically than solar capacity. The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024. 
QUOTE: The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services.
AFTER:  Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation. Changes in demand and supply …

### e11 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, Energy Storage Capacity Offered in Real-Time Market, Key Takeaway · text copy line 1349

BEFORE: …te: 1. The data is based on the 20:00 SCED interval snapshot. SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. 2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. 
QUOTE: The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B.
AFTER:  21 PUBLIC ESR contribution to Ancillary Services continues to increase ESR AS Contribution in DAM 100 90 80 70 60 % 50 40 30 20 10 0 ESR AS Contribution in RTM 100 80 % 60 40 20 0 Jun Jul Aug 2024 REGUP Jun Jul Aug 2025 REGDN RRS Jun Jul 2026 ECRS Aug 2026-Jun REGUP REGDN 2026-Jul RRS 2026-Aug ECRS…

### e12 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3 · text copy line 638 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs. 3. 
QUOTE: The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements. Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution.
AFTER:  4. QSE management of Ancillary Service responsibility across their portfolio no longer exists. PUBLIC 24 Real-Time Market With the Implementation of the RTC+B Project (2 of 2) 1. 6.6.5.5 ESR Set Point Deviation Charge for Over Performance The tolerance is the greater of 3% of the Average Aggregated…

### e15 · `ercot-rtc-update-2025-12` · tier 2 · Real-Time Co-optimization Update to the Board (post go-live) (December 2025)
locator: Slide 4, RTC+B Market Trial Progression, footnote · text copy line 160

BEFORE: …ED/LFC (QSE RTC offers and telemetry to support closed-loop frequency control test 2-3 tests of 2-4 hour durations) #6 Day-Ahead Market (Non-binding DAM using QSE offers for at least 2 tests) Transition to Go-Live Upon completion of testing, confirmation of ERCOT and market readiness for Go-Live. * 
QUOTE: Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration.
AFTER:  4 Item 10 PUBLIC Key activities leading up to Go-Live ERCOT successfully conducted the second/final RTC+B Production Test on Oct 30, 2025 from 10:35am-12:35pm to manage the Real-Time Market and Load Frequency Control systems: - Frequency control was improved, QSE performance improved, and no new is…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e17 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Key Takeaways slide · text copy line 24

BEFORE: …ide an Operational and Market review of Summer 2026 • For information only No action is requested of the ERCOT Board; for discussion Key Takeaways • Solar growth outpacing large load additions helped make the daytime hours this summer uneventful. A new all-time demand record was set on July 22nd. • 
QUOTE: Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer.
AFTER:  • Both Energy and Ancillary Service costs were close to or slightly lower than Summer 2025 and Summer 2024. • Overall, Operations and Market outcomes met reliability needs. Dan Woodfin Vice President, System Operations Keith Collins Vice President, Commercial Operations Board of Directors Meeting S…

### e19 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slides 26-27, RUC with Implementation of RTC+B Project, items 2 and 4 · text copy line 691 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …tware. In other words, with the RTC+B implementation the RUC software will not assume Ancillary Services are carried by any particular Resource and will consider all possibilities of where to carry Ancillary Services for future hours. PUBLIC 26 RUC with Implementation of RTC+B Project: Continued 4. 
QUOTE: The RUC software will use the Hour Beginning SoC (HB SoC) provided by the QSEs in their COPS for each ESR to appropriately limit the possible use/capability of each ESR.
AFTER:  5. The RUC process self-schedules ESRs to their HB SoC. The process of self-scheduling evaluates the change in the COP submitted HB SoC (change in stored energy SoC) across two consecutive hours and determines the best use of that change in energy - combination of charging or discharging the ESR as…

### e21 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 26, RUC with Implementation of RTC+B Project, item 2 · text copy line 674 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …Point Deviation calculation. PUBLIC 25 RUC with Implementation of RTC+B Project 1. DRUC and HRUC will be the tools to assess if enough capacity is available (and in the right locations) to ensure RTC SCED will have enough capacity (and State of Charge) to solve for energy and Ancillary Services. 2. 
QUOTE: Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed.
AFTER:  In other words, the RUC software will NOT RUC an ESR to come online. (ESRs should have a status of "ON", "ONOS" "ONTEST", "ONEMR", "ONHOLD" or "OUT." "OUT" should be used only if the resource is "broken.") 3. In evaluating the capability of the online Resources (and those shown off-line), the full …

### e24 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, The AS Methodology and the Energy-Only Market (p. 48) · text copy line 4567

BEFORE: …ent in new generation. Procuring excessive volumes of ancillary services will inefficiently inject additional non-price-setting energy into the real-time market and reduce prices. Ultimately, it can undermine the ability of shortage pricing to provide efficient long-term signals for new investment. 
QUOTE: With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them.
AFTER:  At the extremity of a well-designed ASDC, the shortage price should approach $0, reflecting the low marginal reliability value of additional reserves and allowing the market to go short on AS. This dynamic contrasts with the previous market design where the day-ahead market necessarily 48 | 2025 St…

### e32 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.3(2), Non-Spinning Reserve Capacity Monitoring Criteria · text copy line 836 · heading above: 8.1.1.3.3 Non-Spinning Reserve Capacity Monitoring Criteria

BEFORE: …he actual generation or Load, the Ancillary Service award for Non-Spin, the HSL/Maximum Power Consumption (MPC), the LSL/LPC, ramp rates, and the Resource's qualification to provide Non-Spin. ERCOT shall also monitor Non-Spin available from and awarded to qualified Resources with an OFF status. (2) 
QUOTE: For the Non-Spin capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least four consecutive hours.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (2) abov…

### e33 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.3, pending box [NPRR1309: Replace paragraph (2) above with the following upon system implementation] · text copy line 841 · heading above: 8.1.1.3.3 Non-Spinning Reserve Capacity Monitoring Criteria
FLAG pending-box: | [NPRR1309: Replace paragraph (2) above with the following upon system implementation:] |
BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (2) above with the following upon system implementation:] | | | | (2) 
QUOTE: For the Non-Spin capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least two consecutive hours.
AFTER:  | +=================================================================================================================================================================================================================================================================+ +------------------------------------…

### e34 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT report, Justification of Reason for Revision, ECRS bullet · text copy line 64

BEFORE: … 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-Spin should be revisited upon implementation of Dispatchable Reliability Reserve Service (DRRS). | | | | | | | | | | - ECRS duration should be changed to one hour: 
QUOTE: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in solar Resources, changing from a two-hour duration requirement to a one-hour duration requirement for ECRS is sufficient.
AFTER:  However, this duration recommendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency …

### e35 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: NPRR1282 PUCT report, Justification of Reason for Revision, Non-Spin bullet · text copy line 62

BEFORE: …-Spin should remain at not less than four hours. This duration analysis for Non-Spin should be periodically revisited to assess its sufficiency especially during extreme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. 
QUOTE: Additionally, the duration requirement for Non-Spin should be revisited upon implementation of Dispatchable Reliability Reserve Service (DRRS).
AFTER:  | | | | | | | | | | - ECRS duration should be changed to one hour: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in …

## Statements to check (new or changed since the last audit)

- **Link to rtc-b** (cites e15, e12): used-in RTC+B (Real-Time Co-optimization + Batteries): RTC+B's first Operating Day was 12/5/2025, and SCED now limits ESR awards by SOC, ramp rates and duration requirements. [e15][e12]
- **Link to energy-storage-resource** (cites e1): used-in Energy Storage Resource (ESR): SCED now tracks each ESR's state of charge inside the optimization. [e1]
- **Link to battery-revenue-stack** (cites e7): related Battery Revenue Stack: ESR revenue has shifted from AS toward energy arbitrage. [e7]
- **Link to ancillary-services** (cites e16) FLAG number-not-in-quote: 2025: related Ancillary Services (AS): In 2025 ESRs provided on average 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
- **Link to asdc** (cites e24): affects ASDC (Ancillary Service Demand Curves): Under RTC, sloped ASDCs define shortage pricing in the day-ahead and real-time markets. [e24]
- **Link to dam** (cites e2): related Day-Ahead Market (DAM): The DAM does not model SOC, so an ESR can oversell its capability there. [e2]
- **Link to offer-cap** (cites e11): related Offer Caps (HCAP / LCAP / SWCAP): ERCOT says the share of ESR capacity offered within $100/MWh of the SWCAP rose slightly in summer 2026, largely due to the lower $2,000/MWh Real-Time SWCAP. [e11]
- **Link to net-load** (cites e17) FLAG number-not-in-quote: 2026: affects Net Load: Evening net peaks drained ESR state of charge throughout summer 2026. [e17]
- **Link to ruc** (cites e19, e21): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses the SOC that QSEs report in their COPs, and ESRs are not seen as OFF and so are not available to be RUCed. [e19][e21]
- **Link to non-spin** (cites e32, e33): related Non-Spinning Reserve: Non-Spin capability must be sustainable for four consecutive hours today; a pending NPRR1309 box would cut that to two hours. [e32][e33]
- **Link to drrs** (cites e35): related DRRS (Dispatchable Reliability Reserve Service): ERCOT said the Non-Spin duration should be revisited when DRRS is implemented. [e35]
- **Link to ecrs** (cites e34): related ECRS (ERCOT Contingency Reserve Service): NPRR1282 cut the ECRS duration from two hours to one, based on historical deployments and 30-minute net load forecast error. [e34]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Scenarios) - (Reasoning) A COP SOC that is too low for a later hour can make the portfolio look short of AS coverage; fix the COP before the snapshot.
- (Say it like this) (Guidance) After RTC+B, ERCOT's dispatch makes sure a battery's awards fit its state of charge, so my job is the economics: decide day by day how much energy to save for the evening peak and how much capacity to sell as reserves. I avoid overselling in the day-ahead market, because it ignores state of charge and I would have to buy back any shortfall at real-time prices, and I keep my COP state of charge honest because RUC charges are computed from it.

