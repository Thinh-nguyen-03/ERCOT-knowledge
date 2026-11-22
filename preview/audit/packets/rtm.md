# Audit packet: Real-Time Market (RTM) (rtm)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (3) · text copy line 399 · heading above: 6.1 Introduction

BEFORE: … available under Section 6.4, Adjustment Period. During the Adjustment Period, ERCOT continues to evaluate system sufficiency and security by use of Hour-Ahead Reliability Unit Commitment (RUC) processes, as described in Section 5, Transmission Security Analysis and Reliability Unit Commitment. (3) 
QUOTE: During Real-Time operations, ERCOT dispatches Resources under normal system conditions and behavior based on economics and reliability to match system Load with On-Line generation while observing Resource and transmission constraints. The Security-Constrained Economic Dispatch (SCED) process produces Base Points and Ancillary Service awards for Resources.
AFTER:  ERCOT uses the Base Points from the SCED process and uses the deployment of Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), ERCOT Contingency Reserve Service (ECRS), Responsive Reserve (RRS), and Non-Spinning Reserve (Non-Spin) to control frequency and solve potential reliabilit…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval, using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval.
AFTER:  Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executions of SCED in the Settlement Interval. In contrast, the Day-Ahead Market (DAM) energy settlements will use …

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, Real-Time Settlement Point Price for a Resource Node · text copy line 3703 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) 
QUOTE: The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy.
AFTER:  The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y))))) Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ---------…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, Real-Time Settlement Point Prices, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …all Market Participants are described in the Operating Guides. 6.6 Settlement Calculations for the Real-Time Energy Operations 6.6.1 Real-Time Settlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. 
QUOTE: For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 741

BEFORE: …er flows to maintain system reliability and sets expectations for the forward markets. Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. 
QUOTE: With RTC, the real-time market simultaneously procures energy and ancillary services.
AFTER:  Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT. Now, ancillary service awards can be adjusted in real-time to reflect change…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 764

BEFORE: … key trend in 2025 was the continued increase in operating reserves levels in the market. This trend began in 2022 when the entry of new solar and energy storage resources increased considerably. This increase in operating reserve levels has significantly reduced the prevalence of shortage pricing. 
QUOTE: For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014.
AFTER:  The supply expansion also reduced the all-in price of electricity in the real-time market. The allin price of electricity includes all costs to load that transact through the ERCOT wholesale market, i.e., the cost of energy, reserves, and any uplift costs. Energy is the main component of the all-in…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node · text copy line 4668 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.3 Real-Time Energy Charges and Payments 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Resource Node Settlement Point:
AFTER:  (a) The energy produced by all its Generation Resources, consumed as WSL, or consumed as Non-WSL ESR Charging Load at the Settlement Point; plus +---------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executions of SCED in the Settlement Interval. 
QUOTE: In contrast, the Day-Ahead Market (DAM) energy settlements will use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval, and DAM Ancillary Service Settlements will use DAM MCPCs for a one-hour Settlement Interval.
AFTER:  (5) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT-administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Ancillary Services · text copy line 783

BEFORE: …pikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT's capability to manage the system's ramp needs. Ancillary Services 
QUOTE: The most noteworthy development for ancillary services was the implementation of RTC in December.
AFTER:  Resources can now sell ancillary services directly into the real-time market and ERCOT optimizes its utilization of resources for satisfying the system's energy and ancillary services needs. The ability to sell real-time ancillary services is particularly attractive for ESRs that dominate the provi…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1, paragraph (1) · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …s and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards (1) 
QUOTE: Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.8, Notification of Forced Outage of a Resource, paragraph (3) · text copy line 886 · heading above: 6.4.8 Notification of Forced Outage of a Resource

BEFORE: …ollowing in the Outage Scheduler: (a) Time of expected change in Resource Status or rating; (b) Text message describing the nature of the Forced Outage or de-rating updated as new information becomes available; and (c) The expected minimum and maximum duration of the Forced Outage or de-rating. (3) 
QUOTE: In the event of a Forced Outage, the QSE must update the Resource's COP as soon as practicable but no longer than 60 minutes after the Forced Outage occurs.
AFTER:  (4) Each QSE shall timely update the telemetered Resource Status and COP unless in the reasonable judgment of the QSE, such compliance would create an undue threat to safety, undue risk of bodily harm, or undue damage to equipment. The QSE is excused from updating the telemetered Resource Status an…

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, paragraph (1), items (b)-(g) · text copy line 4679 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node

BEFORE: …===================================================================================+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (b) 
QUOTE: The amount of its Self-Schedules with sink specified at the Settlement Point; plus (c) The amount of its Day-Ahead Market (DAM) Energy Bids cleared in the DAM at the Settlement Point; plus (d) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (e) The amount of its Self-Schedules with source specified at the Settlement Point; minus (f) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (g) The amount of its Energy Trades at the Settlement Point where the QSE is the seller.
AFTER:  (2) The payment or charge to each QSE for Energy Imbalance Service at a Resource Node Settlement Point for a given 15-minute Settlement Interval is calculated as follows: RTEIAMT _(q, p) = (-1) * {[]([](RESREV _(q, r, gsc, p))) + ([]WSLAMTTOT _(q, r, p)) + ([]ESRNWSLAMTTOT _(q, r, p)) + RTSPP _(p) …

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3.1, paragraph (1)(a)-(d) · text copy line 2276 · heading above: 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders

BEFORE: …e reliability of the ERCOT System. (17) The QSE representing an ESR may withdraw energy from the ERCOT System only when dispatched by SCED to do so. An ESR may telemeter a status of OUT only if the ESR is in Outage status. 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders (1) 
QUOTE: The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process; (b) RMR Resources that are On-Line, including capacity secured to prevent an Emergency Condition pursuant to paragraph (4) of Section 6.5.1.1, ERCOT Control Area Authority; (c) Deployed Load Resources other than CLRs; (d) Deployed ERS;
AFTER:  (e) Real-Time DC Tie imports during an EEA where the total adjustment shall not exceed 1,250 MW in a single interval; (f) Real-Time DC Tie exports to address emergency conditions in the receiving electric grid; +---------------------------------------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to dam** (cites e19, e7): contrasts-with Day-Ahead Market (DAM): DAM energy settlements use a one-hour Settlement Interval, while real time settles on 15-minute intervals. [e19][e7]
- **Link to sced** (cites e5): composed-of SCED (Security-Constrained Economic Dispatch): SCED produces the Base Points, Ancillary Service awards, LMPs and MCPCs that the RTM runs on about every five minutes. [e5]
- **Link to spp** (cites e8, e9): determines SPP (Settlement Point Price): Real-Time Settlement Point Prices are built from SCED LMPs plus the reliability deployment adder, with a floor of -$251/MWh. [e8][e9]
- **Link to lmp** (cites e8): used-in LMP (Locational Marginal Price): The Resource Node settlement price is the time-weighted average of LMPs plus the adder. [e8]
- **Link to rtc-b** (cites e11, e17) FLAG number-not-in-quote: 2025: related RTC+B (Real-Time Co-optimization + Batteries): Real-time co-optimization was implemented in December 2025 and means energy and ancillary services are procured together in real time. [e11][e17]
- **Link to base-point** (cites e4): related Base Point: The SCED process produces Base Points (and Ancillary Service awards) for Resources. [e4]
- **Link to ordc** (cites e13) FLAG number-not-in-quote: 2025: related ORDC (Operating Reserve Demand Curve): The IMM measured the real-time price effect of ORDC shortage pricing at $0.02/MWh in 2025. [e13]
- **Link to ruc** (cites e30): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC-committed Resources are counted in the Real-Time Reliability Deployment Price Adder, except those whose QSE opted out of RUC Settlement. [e30]
- **Link to settlement-point** (cites e16, e24): related Settlement Point: Real-time Energy Imbalance Service at a Resource Node is calculated at that Resource Node Settlement Point. [e16][e24]
- **Link to cop** (cites e23): related COP (Current Operating Plan): A QSE must update the COP within 60 minutes after a Forced Outage. [e23]
- **Link to asdc** (cites e22): related ASDC (Ancillary Service Demand Curves): Real-time Ancillary Service awards depend on Resource capability and ASDCs. [e22]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) Real time is where physical dispatch happens: SCED sets prices and dispatch about every five minutes, and 15-minute settlement prices are built from those results. Anything you did not lock in day-ahead gets settled at these prices.

