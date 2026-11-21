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

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …LMPs) from all of the executions of SCED in the Settlement Interval. Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executions of SCED in the Settlement Interval. 
QUOTE: In contrast, the Day-Ahead Market (DAM) energy settlements will use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval, and DAM Ancillary Service Settlements will use DAM MCPCs for a one-hour Settlement Interval.
AFTER:  (5) To the extent that the ERCOT CEO or designee determines that Market Participant activities have produced an outcome inconsistent with the efficient operation of the ERCOT-administered markets as defined in subsection (c)(2) of P.U.C. SUBST. R. 25.503, Oversight of Wholesale Market Participants,…

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

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (2) · text copy line 422 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …Change Requests. 6.2 Market Timeline Summary (1) The figure below is a high-level summary of the overall market timeline: [] 6.3 Adjustment Period and Real-Time Operations Timeline (1) The figure below highlights the major activities that occur in the Adjustment Period and Real-Time operations: (2) 
QUOTE: Activities for the Adjustment Period begin at 1800 in the Day-Ahead and end one full hour before the start of the Operating Hour.
AFTER:  The figure above is intended to be only a general guide and not controlling language, and any conflict between this figure and another section of the Protocols is controlled by the other section. (3) ERCOT shall monitor Real-Time Locational Marginal Prices (LMPs), Real-Time Market (RTM) Clearing Pr…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1, paragraph (2) · text copy line 896 · heading above: 6.4.9.1 Ancillary Service Offers

BEFORE: …risk of bodily harm, or undue damage to equipment no longer exists. 6.4.9 Real-Time Ancillary Service Offers and Awards 6.4.9.1 Ancillary Service Offers (1) A detailed description of the Ancillary Service Offers and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) 
QUOTE: QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution.
AFTER:  6.4.9.1.1 Ancillary Service Awards (1) Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary S…

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

### e25 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (3) · text copy line 424 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …Period begin at 1800 in the Day-Ahead and end one full hour before the start of the Operating Hour. The figure above is intended to be only a general guide and not controlling language, and any conflict between this figure and another section of the Protocols is controlled by the other section. (3) 
QUOTE: ERCOT shall monitor Real-Time Locational Marginal Prices (LMPs), Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs), and Real-Time Settlement Point Prices, including Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, for errors and if there are conditions that cause the price to be questionable, as soon as practicable, ERCOT shall notify all Market Participants that the Real-Time LMPs, Real-Time MCPCs, and Real-Time Settlement Point Prices are under investigation.
AFTER:  (4) ERCOT shall correct prices for an Operating Day when accurate prices can be determined, the impact of the price correction is determined to be significant, and one of the following conditions has been met: a market solution is determined to be invalid, invalid prices are identified in an otherw…

### e26 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (7)(b) · text copy line 464 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …ment Funds. (b) Before seeking ERCOT Board review of prices, ERCOT will determine if the impact of the price correction is significant, as that term is used in paragraph (4) above, by calculating the potential changes to the RTM Settlement Statement(s) of any Counter-Party on a given Operating Day. 
QUOTE: ERCOT shall seek ERCOT Board review of prices if the change in RTM Settlement Statement(s) would result in the absolute value impact to any single Counter-Party, based on the sum of all original RTM Settlement Statement amounts of Market Participants assigned to the Counter-Party, to be greater than: (i) 2% and also greater than $20,000; or (ii) 20% and also greater than $2,000.
AFTER:  (c) The ERCOT Board may review and change Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service if ERCOT gave timely n…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (7)(a) · text copy line 456 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …iability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final, if ERCOT determines that prices qualify for a price correction pursuant to paragraph (4) above and that ERCOT will seek ERCOT Board review of such prices, 
QUOTE: it shall notify Market Participants and describe the need for such correction as soon as practicable but no later than 30 days after the Operating Day. Failure to notify Market Participants within this timeline precludes the ERCOT Board from reviewing such prices.
AFTER:  However, nothing in this section shall be understood to limit or otherwise inhibit any of the following: (i) ERCOT's duty to inform the PUCT of potential or actual violations of the ERCOT Protocols or PUCT Rules and its right to request that the PUCT authorize correction of any prices that may have…

### e28 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter I.C, Table 1 · ocr copy line 1114, OCR page 29

BEFORE: …each zone for 2021-2025. These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) 
QUOTE: ERCOT $179.24 $76.41 $73.28 $32.41 $36.94
AFTER:  Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone inc…

### e29 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, real-time hub price slide, key takeaway · text copy line 795 · heading above: 4.5 5

BEFORE: …25 2026 40 30 20 10 0 Jan Feb Mar Apr May Jun Jul Aug Peaker Net Margin 120 100 Peaker Net Margin (Thousand $/MW-year) PUBLIC 8/15/24: $ 63,822 80 60 40 8/15/25: $ 46,472 8/15/26: $ 43,111 20 0 Jan Feb Mar Apr May 2024 Jun 2025 Jul 2026 Aug Sep Oct Nov Dec *2026 data runs through 8/15 Key Takeaway: 
QUOTE: Real-Time prices were lower in summer 2026 than 2024 and 2025 due to higher supply particularly during day light hours.
AFTER:  Lower prices also mean that Peaker Net Margin is lower in 2026 relative to the previous two years. 14 Solar and Energy Storage Resources capacity continues to increase PUBLIC Hourly Average Total COP Online HSL 45 40 35 30 25 20 15 10 5 0 GW GW Summer 2024 40 35 30 25 20 15 10 5 0 Summer 2025 1 3 5…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3.1, paragraph (1)(a)-(d) · text copy line 2276 · heading above: 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders

BEFORE: …e reliability of the ERCOT System. (17) The QSE representing an ESR may withdraw energy from the ERCOT System only when dispatched by SCED to do so. An ESR may telemeter a status of OUT only if the ESR is in Outage status. 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders (1) 
QUOTE: The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process; (b) RMR Resources that are On-Line, including capacity secured to prevent an Emergency Condition pursuant to paragraph (4) of Section 6.5.1.1, ERCOT Control Area Authority; (c) Deployed Load Resources other than CLRs; (d) Deployed ERS;
AFTER:  (e) Real-Time DC Tie imports during an EEA where the total adjustment shall not exceed 1,250 MW in a single interval; (f) Real-Time DC Tie exports to address emergency conditions in the receiving electric grid; +---------------------------------------------------------------------------------------…

### e31 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, congestion rent slide, key takeaway · text copy line 1219

BEFORE: …line in the Plan from 86 to 66 GWh/day. 18 Congestion Rent fell from summer 2025 to summer 2026 200 180 160 140 $ Millions PUBLIC 120 100 80 60 40 20 0 Jun Jul Aug Jun Jul 2024 Aug 2025 North West South Houston Jun Jul Aug 2026 Cross Zone * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation.
AFTER:  RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025. 19 RUC Effective Resource-Hours are higher in summer 2026, primarily to ensure sufficient Ancillary Services There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This …

### e32 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, Energy Storage offers slide, note 1 · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e33 · `ercot-nprr1010-board-report` · tier 1 · NPRR1010 Board Report (Real-Time Co-optimization, Section 6 Adjustment Period and Real-Time Operations) (Board approved 2020-12-08)
locator: NPRR1010 Board report, Board Decision · text copy line 262

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

## Statements to check

- **Definition #1** (cites e1, e2): The Real-Time Market is the co-optimized market in the Operating Day for Ancillary Service capacity and energy. [e1] The Operating Day is the day, hours ending 0100 to 2400, during which energy flows. [e2]
- **How it works #1** (cites e3, e6): Before the Operating Hour there is an Adjustment Period, running from 1800 in the Day-Ahead up to the start of the hour before that Operating Hour. [e3] In it, QSEs can adjust their trades, Self-Schedules and Resource commitments as better information arrives. [e6]
- **How it works #2** (cites e4, e5): In real time ERCOT dispatches Resources on economics and reliability to match Load with On-Line generation within Resource and transmission limits, and the SCED process produces Base Points and Ancillary Service awards. [e4] SCED manages energy, Ancillary Services, system power balance and congestion together, calculating LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. [e5]
- **How it works #3** (cites e7, e8, e9, e16, e10): Settlement uses Real-Time Settlement Point Prices for a 15-minute Settlement Interval, built from the LMPs of all SCED executions in that interval. [e7] A Resource Node price is the time-weighted average of the LMPs plus the Real-Time Reliability Deployment Price Adder for Energy, and a price floor of -$251/MWh applies after the adder. [e8][e9] Energy Imbalance Service is paid or charged at the Real-Time Settlement Point Price. [e16] Real-time prices are final at 1600 of the second Business Day after the Operating Day. [e10]
- **How it works #5** (cites e20, e21, e22, e23): Adjustment Period activities begin at 1800 in the Day-Ahead and end one full hour before the Operating Hour starts. [e20] QSEs may update Ancillary Service Offers in real time, and SCED uses the latest available at execution. [e21] Real-time Ancillary Service awards rest on Resource capability (including SOC and SOC limits) and the ASDCs, regardless of the quantity under deployment. [e22] After a Forced Outage the QSE must update the COP as soon as practicable and within 60 minutes. [e23]
- **How it works #7** (cites e16, e24): Energy Imbalance Service at a Resource Node is priced at the RTSPP on the QSE's net position: its Resource output and certain charging consumption, plus Self-Schedules sinking there, DAM Energy Bids cleared and Energy Trades bought, minus Self-Schedules sourcing there, DAM energy offers cleared and Energy Trades sold. [e16][e24] This is why a day-ahead position is settled against real time at the same Settlement Point. [e24]
- **How it works #9** (cites e30): The Real-Time Reliability Deployment Price Adder for Energy considers RUC-committed Resources (except those whose QSEs opted out of RUC Settlement), On-Line RMR Resources, deployed Load Resources other than CLRs and deployed ERS, among other categories. [e30]
- **How it works #11** (cites e25, e10, e27, e26): ERCOT monitors real-time prices and notifies Market Participants when they are under investigation. [e25] Prices are final at 1600 on the second Business Day after the Operating Day, but ERCOT can still seek Board review if it notifies the market within 30 days of the Operating Day. [e10][e27] It seeks review if a Counter-Party's RTM Settlement Statement changes by more than 2% and $20,000, or more than 20% and $2,000. [e26]
- **ERCOT context #1** (cites e12, e17, e11, e18) FLAG number-not-in-quote: 2025: The IMM calls the real-time market the most consequential of the markets because it coordinates real-time power flows and sets expectations for the forward markets. [e12] The IMM calls the implementation of RTC in December the most noteworthy development for ancillary services in its 2025 report, and with RTC the real-time market simultaneously procures energy and ancillary services. [e17][e11] The ORDC price adder was replaced by a set of Ancillary Service Demand Curves under RTC. [e18]
- **ERCOT context #2** (cites e28, e29, e31, e32) FLAG number-not-in-quote: 2023: The IMM's load-weighted annual average real-time energy price for ERCOT was $36.94/MWh in 2025, against $32.41 in 2024 and $73.28 in 2023. [e28] ERCOT's summer 2026 review says real-time prices were lower in summer 2026 than in 2024 and 2025 because of higher supply, particularly in daylight hours, and that real-time congestion rent was 10% lower than in summer 2025. [e29][e31] After RTC go-live the System-Wide Offer Cap in that review is $2000/MWh, down from $5000/MWh. [e32]
- **ERCOT context #3** (cites e15, e14, e13, e18): 2025 outcomes per the IMM: price spikes were 40% less frequent than in 2024, and most occurred between 7 and 9 p.m. as solar ramped down. [e15][e14] ORDC shortage pricing added only $0.02/MWh to real-time energy prices, the lowest since the ORDC began in 2014; the ORDC adder has since been replaced under RTC. [e13][e18]
- **Timeline #1** (cites e33) FLAG number-not-in-quote: 2020: - December 8, 2020: the Board approved NPRR1010 (Adjustment Period and Real-Time Operations changes for RTC), effective on RTC implementation. [e33]
- **Timeline #2** (cites e17, e11) FLAG number-not-in-quote: 2025: - December 2025: RTC implemented, so the real-time market procures energy and ancillary services together. [e17][e11]
- **Key facts #1** (cites e7): - Real-time settles on 15-minute Settlement Intervals using SCED LMPs. [e7]
- **Key facts #2** (cites e5): - SCED runs approximately every five minutes, or more often if necessary. [e5]
- **Key facts #3** (cites e9): - The Real-Time Settlement Point Price has an administrative floor of -$251/MWh. [e9]
- **Key facts #4** (cites e10): - Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e10]
- **Key facts #5** (cites e3): - The Adjustment Period runs from 1800 in the Day-Ahead to the start of the hour before the Operating Hour. [e3]
- **Key facts #6** (cites e15): - 2025: price spikes were 40% less frequent than in 2024. [e15]
- **Key facts #7** (cites e27, e26): - Board review of a price correction requires ERCOT to notify the market within 30 days of the Operating Day and a Counter-Party impact above 2% and $20,000, or 20% and $2,000. [e27][e26]
- **Key facts #8** (cites e28) FLAG number-not-in-quote: 2025: - IMM 2025 average real-time energy price for ERCOT: $36.94/MWh. [e28]
- **Common confusion #1** (cites e7, e8, e19): The five-minute SCED prices are not what you are settled on. Settlement is on 15-minute Settlement Point Prices that combine all SCED runs in the interval and add the reliability deployment adder. [e7][e8] The DAM, by contrast, settles on a one-hour Settlement Interval. [e19] (See the dam topic.)
- **Questions #2** (cites e5): About every five minutes, or more often if necessary. It produces Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs. [e5]
- **Questions #4** (cites e6, e3): It lets QSEs adjust trades, Self-Schedules and Resource commitments as more accurate information becomes available. [e6] It starts at 1800 in the Day-Ahead. [e3]
- **Questions #6** (cites e10, e27, e26): Prices are final at 1600 on the second Business Day after the Operating Day, but ERCOT can seek Board review if it notifies the market within 30 days and the impact on a Counter-Party passes the thresholds. [e10][e27][e26]
- **Questions #8** (cites e23, e24): The QSE must update the COP within 60 minutes after the Forced Outage. [e23] Its energy imbalance at the Resource Node is then settled at the RTSPP on the difference between its remaining output and its DAM and trade positions. [e24]
- **Questions #10** (cites e17, e11): RTC was implemented, and the real-time market now simultaneously procures energy and ancillary services. [e17][e11]
- **Link to dam** (cites e19, e7): contrasts-with Day-Ahead Market (DAM): DAM energy settlements use a one-hour Settlement Interval, while real time settles on 15-minute intervals. [e19][e7]
- **Link to sced** (cites e5, e6): composed-of SCED (Security-Constrained Economic Dispatch): SCED produces the Base Points, Ancillary Service awards, LMPs and MCPCs that the RTM runs on about every five minutes. [e5][e6]
- **Link to spp** (cites e8, e9): determines SPP (Settlement Point Price): Real-Time Settlement Point Prices are built from SCED LMPs plus the reliability deployment adder, with a floor of -$251/MWh. [e8][e9]
- **Link to lmp** (cites e8): used-in LMP (Locational Marginal Price): The Resource Node settlement price is the time-weighted average of LMPs plus the adder. [e8]
- **Link to rtc-b** (cites e11, e17) FLAG number-not-in-quote: 2025: related RTC+B (Real-Time Co-optimization + Batteries): Real-time co-optimization was implemented in December 2025 and means energy and ancillary services are procured together in real time. [e11][e17]
- **Link to base-point** (cites e4): related Base Point: Base Points are the SCED output that tells each Resource where to operate. [e4]
- **Link to ordc** (cites e13) FLAG number-not-in-quote: 2025: related ORDC (Operating Reserve Demand Curve): The IMM measured the real-time price effect of ORDC shortage pricing at $0.02/MWh in 2025. [e13]
- **Link to ruc** (cites e30): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC-committed Resources are counted in the Real-Time Reliability Deployment Price Adder, except those whose QSE opted out of RUC Settlement. [e30]
- **Link to settlement-point** (cites e16, e24): related Settlement Point: Real-time energy imbalance is calculated separately at each Resource Node, Load Zone and Hub Settlement Point. [e16][e24]
- **Link to cop** (cites e23): related COP (Current Operating Plan): A QSE must update the COP within 60 minutes after a Forced Outage, and SCED uses telemetered status rather than the COP. [e23]
- **Link to asdc** (cites e22): related ASDC (Ancillary Service Demand Curves): Real-time Ancillary Service awards depend on Resource capability and ASDCs. [e22]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) Real time is where physical dispatch happens: SCED sets prices and dispatch about every five minutes, and 15-minute settlement prices are built from those results. Anything you did not lock in day-ahead gets settled at these prices.

