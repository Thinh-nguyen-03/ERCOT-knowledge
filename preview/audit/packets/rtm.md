# Audit packet: Real-Time Market (RTM) (rtm)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Real-Time Market (RTM) · text copy line 2215

BEFORE: …component of alternating current. Reactive Power, usually measured in MVAr, is produced by capacitors, overexcited generators and other capacitive devices and is absorbed by reactors, under-excited generators and other inductive devices. Real-Time The current instant in time. Real-Time Market (RTM) 
QUOTE: A Real-Time, co-optimized market in the Operating Day for Ancillary Service capacity and energy.
AFTER:  Real-Time Market (RTM) Energy Bid A proposal to buy energy in the RTM at a monotonically non-increasing price with increasing quantity. --------------------------------------------------------------------------------------------------------- [NPRR1188: Delete the above definition "Real-Time Market …

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Operating Day · text copy line 1893

BEFORE: …onously interconnected to the ERCOT System. On-Peak Hours Hours ending in 0700 to 2200 CPT from Monday through Friday excluding NERC holidays. Operating Condition Notice (OCN) The first of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition. Operating Day 
QUOTE: The day, including hours ending 0100 to 2400, during which energy flows.
AFTER:  Operating Hour A full clock hour during which energy flows. Operating Period A two-hour period comprised of the Operating Hour and the clock hour preceding the Operating Hour. Opportunity Outage (see Outage) Opt Out Snapshot A record of a Resource's Current Operating Plan (COP) used to determine wh…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Adjustment Period · text copy line 49 · heading above: 2.1 DEFINITIONS

BEFORE: …, Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports. Adjusted Static Models Load Profiles that are generated from statistical models that are based on static historical Load data, and adjusted for conditions of the day (e.g., weather, Season, etc.). Adjustment Period 
QUOTE: For each Operating Hour, the time between 1800 in the Day-Ahead up to the start of the hour before that Operating Hour.
AFTER:  Advance Action Notice (AAN) A type of Operating Condition Notice (OCN) that identifies a possible future Emergency Condition and describes future action ERCOT expects to take to address that condition unless the need for ERCOT action is alleviated by Qualified Scheduling Entity (QSE) and/or Transmi…

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

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (2) · text copy line 397 · heading above: 6.1 Introduction

BEFORE: … 6-337 6.8.4 Miscellaneous Invoice for Payments and Charges for an LCAP or ECAP Effective Period 6-338 Adjustment Period and Real-Time Operations 6.1 Introduction (1) This Section addresses the following components: the Adjustment Period and Real-Time Operations, including Emergency Operations. (2) 
QUOTE: The Adjustment Period provides each Qualified Scheduling Entity (QSE) the opportunity to adjust its trades, Self-Schedules, and Resource commitments as more accurate information becomes available under Section 6.4, Adjustment Period.
AFTER:  During the Adjustment Period, ERCOT continues to evaluate system sufficiency and security by use of Hour-Ahead Reliability Unit Commitment (RUC) processes, as described in Section 5, Transmission Security Analysis and Reliability Unit Commitment. (3) During Real-Time operations, ERCOT dispatches Re…

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

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, Adjustment Period and Real-Time Operations Timeline, paragraph (7) · text copy line 454 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …consistent with the Real-Time MCPCs, ignoring the Real-Time Reliability Deployment Price Adder for Ancillary Service, averaged over the 15-minute Settlement Interval, then ERCOT shall consider the relevant Settlement Interval(s) in accordance with Section 6.6.9, Emergency Operations Settlement. (7) 
QUOTE: All Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final at 1600 of the second Business Day after the Operating Day.
AFTER:  (a) However, after Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final, if ERCOT determines that prices qu…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 741

BEFORE: …er flows to maintain system reliability and sets expectations for the forward markets. Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. 
QUOTE: With RTC, the real-time market simultaneously procures energy and ancillary services.
AFTER:  Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT. Now, ancillary service awards can be adjusted in real-time to reflect change…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Review of Market Performance · text copy line 735

BEFORE: …ts: the real-time market and two forward markets-the day-ahead market, which allows market participants to take financial positions on energy and ancillary services, and the CRR market, a series of auctions in which market participants can bid for the right to revenues derived from congestion rent. 
QUOTE: The real-time market is the most consequential because it coordinates real-time power flows to maintain system reliability and sets expectations for the forward markets.
AFTER:  Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. With RTC, the real-time market simultaneously procures energy and ancillary services. …

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 764

BEFORE: … key trend in 2025 was the continued increase in operating reserves levels in the market. This trend began in 2022 when the entry of new solar and energy storage resources increased considerably. This increase in operating reserve levels has significantly reduced the prevalence of shortage pricing. 
QUOTE: For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014.
AFTER:  The supply expansion also reduced the all-in price of electricity in the real-time market. The allin price of electricity includes all costs to load that transact through the ERCOT wholesale market, i.e., the cost of energy, reserves, and any uplift costs. Energy is the main component of the all-in…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, price spikes · text copy line 1628

BEFORE: …ity was lower on both an absolute and percentage basis. This trend likely results from continued growth in installed solar and energy storage capacity, which contributes to high online reserves throughout the year. We further discuss the current surplus of operating reserves in ERCOT in Chapter II. 
QUOTE: As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day.
AFTER:  During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes. Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 2…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, price spikes · text copy line 1623

BEFORE: …N2P425S70829.7:8;2P<2=>8S/?825S708 =>8S/?825S7082P42@P<9.7:82I<N8S>/A; @B-C8S2P425S70829.7:8; 5SH,ATH&.,/MH&89&2H,&W;<= )%!! (&A &A! )#A! '#A )#!! A!! )"A! %&A )"!! #A! )A! "#A )! !"#A%&'E)*H,&"-&.,/MH&N2/PH4 )%A! ! " % A & * "" "% "A "& "* #" #% " % A & * "" "% "A "& "* #" #% #!#+ #!#A >"E,&?@A/@T 
QUOTE: Figure 4 shows that price spikes were 40% less frequent in 2025 than in 2024.
AFTER:  It also shows that their effect on the average hourly price of electricity was lower on both an absolute and percentage basis. This trend likely results from continued growth in installed solar and energy storage capacity, which contributes to high online reserves throughout the year. We further di…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node · text copy line 4668 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.3 Real-Time Energy Charges and Payments 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Resource Node Settlement Point:
AFTER:  (a) The energy produced by all its Generation Resources, consumed as WSL, or consumed as Non-WSL ESR Charging Load at the Settlement Point; plus +---------------------------------------------------------------------------------------------------------------------------------------------------------…

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, G. RDPA (p. A-10) · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature.
AFTER:  The RDPA process now produces separate price adders for energy and each AS product. The real-time market is run in two instances: one based on realized operating conditions and one counterfactual, as if no reliability actions had been taken. The AS RDPA is the difference in MCPCs for each AS produc…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Ancillary Services · text copy line 783

BEFORE: …pikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT's capability to manage the system's ramp needs. Ancillary Services 
QUOTE: The most noteworthy development for ancillary services was the implementation of RTC in December.
AFTER:  Resources can now sell ancillary services directly into the real-time market and ERCOT optimizes its utilization of resources for satisfying the system's energy and ancillary services needs. The ability to sell real-time ancillary services is particularly attractive for ESRs that dominate the provi…

## Statements to check

- **Definition #1** (cites e1, e2): The Real-Time Market is the co-optimized market in the Operating Day for Ancillary Service capacity and energy. [e1] The Operating Day is the day, hours ending 0100 to 2400, during which energy flows. [e2]
- **How it works #1** (cites e3, e6): Before the Operating Hour there is an Adjustment Period, running from 1800 in the Day-Ahead up to the start of the hour before that Operating Hour. [e3] In it, QSEs can adjust their trades, Self-Schedules and Resource commitments as better information arrives. [e6]
- **How it works #2** (cites e4, e5): In real time ERCOT dispatches Resources on economics and reliability to match Load with On-Line generation within Resource and transmission limits, and the SCED process produces Base Points and Ancillary Service awards. [e4] SCED manages energy, Ancillary Services, system power balance and congestion together, calculating LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. [e5]
- **How it works #3** (cites e7, e8, e9, e16, e10): Settlement uses Real-Time Settlement Point Prices for a 15-minute Settlement Interval, built from the LMPs of all SCED executions in that interval. [e7] A Resource Node price is the time-weighted average of the LMPs plus the Real-Time Reliability Deployment Price Adder for Energy, and a price floor of -$251/MWh applies after the adder. [e8][e9] Energy Imbalance Service is paid or charged at the Real-Time Settlement Point Price. [e16] Real-time prices are final at 1600 of the second Business Day after the Operating Day. [e10]
- **ERCOT context #1** (cites e12, e17, e11, e18) FLAG number-not-in-quote: 2025: The IMM calls the real-time market the most consequential of the markets because it coordinates real-time power flows and sets expectations for the forward markets. [e12] The IMM calls the implementation of RTC in December the most noteworthy development for ancillary services in its 2025 report, and with RTC the real-time market simultaneously procures energy and ancillary services. [e17][e11] The ORDC price adder was replaced by a set of Ancillary Service Demand Curves under RTC. [e18]
- **ERCOT context #2** (cites e15, e14, e13, e18): 2025 outcomes per the IMM: price spikes were 40% less frequent than in 2024, and most occurred between 7 and 9 p.m. as solar ramped down. [e15][e14] ORDC shortage pricing added only $0.02/MWh to real-time energy prices, the lowest since the ORDC began in 2014; the ORDC adder has since been replaced under RTC. [e13][e18]
- **Key facts #1** (cites e7): - Real-time settles on 15-minute Settlement Intervals using SCED LMPs. [e7]
- **Key facts #2** (cites e5): - SCED runs approximately every five minutes, or more often if necessary. [e5]
- **Key facts #3** (cites e9): - The Real-Time Settlement Point Price has an administrative floor of -$251/MWh. [e9]
- **Key facts #4** (cites e10): - Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e10]
- **Key facts #5** (cites e3): - The Adjustment Period runs from 1800 in the Day-Ahead to the start of the hour before the Operating Hour. [e3]
- **Key facts #6** (cites e15): - 2025: price spikes were 40% less frequent than in 2024. [e15]
- **Common confusion #1** (cites e7, e8): The five-minute SCED prices are not what you are settled on. Settlement is on 15-minute Settlement Point Prices that combine all SCED runs in the interval and add the reliability deployment adder. [e7][e8] The DAM, by contrast, settles hourly. (See the dam topic.)
- **Questions #2** (cites e5): About every five minutes, or more often if necessary. It produces Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs. [e5]
- **Questions #4** (cites e6, e3): It lets QSEs adjust trades, Self-Schedules and Resource commitments as more accurate information becomes available. [e6] It starts at 1800 in the Day-Ahead. [e3]
- **Questions #6** (cites e17, e11): RTC was implemented, and the real-time market now simultaneously procures energy and ancillary services. [e17][e11]
- **Link to dam** (cites e7): contrasts-with Day-Ahead Market (DAM): The DAM is the forward financial market, settled hourly, while real time settles on 15-minute intervals. [e7]
- **Link to sced** (cites e5, e6): composed-of SCED (Security-Constrained Economic Dispatch): SCED produces the Base Points, Ancillary Service awards, LMPs and MCPCs that the RTM runs on about every five minutes. [e5][e6]
- **Link to spp** (cites e8, e9): determines SPP (Settlement Point Price): Real-Time Settlement Point Prices are built from SCED LMPs plus the reliability deployment adder, with a floor of -$251/MWh. [e8][e9]
- **Link to lmp** (cites e8): used-in LMP (Locational Marginal Price): The Resource Node settlement price is the time-weighted average of LMPs plus the adder. [e8]
- **Link to rtc-b** (cites e11, e17) FLAG number-not-in-quote: 2025: related RTC+B (Real-Time Co-optimization + Batteries): Real-time co-optimization was implemented in December 2025 and means energy and ancillary services are procured together in real time. [e11][e17]
- **Link to base-point** (cites e4): related Base Point: Base Points are the SCED output that tells each Resource where to operate. [e4]
- **Link to ordc** (cites e13) FLAG number-not-in-quote: 2025: related ORDC (Operating Reserve Demand Curve): The IMM measured the real-time price effect of ORDC shortage pricing at $0.02/MWh in 2025. [e13]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) Real time is where physical dispatch happens: SCED sets prices and dispatch about every five minutes, and 15-minute settlement prices are built from those results. Anything you did not lock in day-ahead gets settled at these prices.

