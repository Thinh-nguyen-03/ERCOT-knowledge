# Audit packet: SCED (Security-Constrained Economic Dispatch) (sced)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Security-Constrained Economic Dispatch (SCED) · text copy line 2793

BEFORE: …er in Docket No. 52322, Application of the Electric Reliability Council of Texas, Inc. For a Debt Obligation Order to Finance Uplift Balances Under PURA Chapter 39, Subchapter N, for an Order Initiating a Parallel Docket, and for a Good Cause Exception. Security-Constrained Economic Dispatch (SCED) 
QUOTE: A process for determining Ancillary Service awards and Base Point instructions for Resources using Energy Offer Curves, Energy Bid/Offer Curves, Real-Time Market (RTM) Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs).
AFTER:  A SCED execution results in Ancillary Service awards and Base Point instructions that maximize bid-based revenues less offer-based costs while considering State Estimator output for Load at transmission-level Electrical Buses, Resource limits, and transmission limits to maximize bid-based revenues …

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Base Point · text copy line 225 · heading above: 2.1 DEFINITIONS

BEFORE: … any general arrangement for the benefit of creditors; (c) Has a liquidator, administrator, receiver, trustee, conservator, or similar official appointed with respect to it or any substantial portion of its property or assets; or (d) Is generally unable to pay its debts as they fall due. Base Point 
QUOTE: The MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process.
AFTER:  Batch Zero Process A transitional interconnection process used to evaluate on a system-wide basis one or more Large Loads that meet the requirements set forth in Planning Guide Section 9.2, General Provisions. Batch Zero Interconnection Study A singular, system-wide interconnection study conducted …

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, two-step methodology, item (a) · text copy line 2229

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (14) The two-step SCED methodology referenced in paragraph (1) above is: (a) 
QUOTE: The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints.
AFTER:  Energy Offer Curves for all On-Line Generation Resources, Energy Bid/Offer Curves for all On-Line ESRs, and RTM Energy Bids from available CLRs, whether submitted by QSEs or created by ERCOT under this Section, are used in the SCED to determine "Reference LMPs." +-----------------------------------…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, two-step methodology, item (b) · text copy line 2238

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (b) 
QUOTE: The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints.
AFTER:  The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Cu…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, item (d) on VOLL · text copy line 2266

BEFORE: … System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. 
QUOTE: The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website.
AFTER:  (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding projection of the Base Points, Ancillary Service awards, MCPCs, Resource Node LMPs, Real-Time Reliability Deployment Price Adders, Hub LMPs, a…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …o power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. 
QUOTE: In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits.
AFTER:  This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR's Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) l…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (15) · text copy line 2268

BEFORE: …shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website. (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, 
QUOTE: ERCOT shall calculate a non-binding projection of the Base Points, Ancillary Service awards, MCPCs, Resource Node LMPs, Real-Time Reliability Deployment Price Adders, Hub LMPs, and Load Zone LMPs at a frequency of every five minutes for at least 15 minutes into the future
AFTER:  based on the same inputs to the SCED process as described in this Section, except that the Resource's HDL and LDL and the total generation requirement will be as estimated at future intervals. The Resource's HDL and LDL will be calculated for each interval of the projection based on the ramp rate c…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1) · text copy line 3703 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) 
QUOTE: The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy.
AFTER:  The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y))))) Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ---------…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 741

BEFORE: …er flows to maintain system reliability and sets expectations for the forward markets. Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. 
QUOTE: With RTC, the real-time market simultaneously procures energy and ancillary services. Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT.
AFTER:  Now, ancillary service awards can be adjusted in real-time to reflect changes in system conditions. As part of the RTC project, ERCOT also implemented the single-model for ESRs, which improves the real-time market's coordination of energy and ii | 2025 State of the Market Report / / Executive Summa…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.D, Shortage and Reliability Pricing · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low.
AFTER:  In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, p…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 756

BEFORE: … As part of the RTC project, ERCOT also implemented the single-model for ESRs, which improves the real-time market's coordination of energy and ii | 2025 State of the Market Report / / Executive Summary reserve awards for ESRs. Both changes should improve market performance and economic efficiency. 
QUOTE: Since ERCOT implemented RTC, the real-time market has functioned as expected without any major malfunctions. However, we identified some issues with real-time ancillary service price formation that are likely due to the design of the ancillary service demand curves and the duration constraints for ESRs providing ancillary services.
AFTER:  The Appendix discusses these issues and the performance of the real-time market since RTC was implemented in detail. One key trend in 2025 was the continued increase in operating reserves levels in the market. This trend began in 2022 when the entry of new solar and energy storage resources increas…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.1, Introduction, paragraph (4) · text copy line 408 · heading above: 6.1 Introduction

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval, using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval.
AFTER:  Similarly, Real-Time Ancillary Service Settlements use Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs) for a 15-minute Settlement Interval, using the MCPCs from all of the executions of SCED in the Settlement Interval. In contrast, the Day-Ahead Market (DAM) energy settlements will use …

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.D, Shortage and Reliability Pricing · text copy line 1361

BEFORE: … / / Review of Real-Time Market Outcomes • The Reliability Deployment Price Adder (RDPA), implemented in 2015, ensures that prices are not inefficiently reduced when ERCOT takes out-of-market reliability actions.2 These adders are ERCOT's primary means of reflecting shortage pricing in its markets. 
QUOTE: Since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder.
AFTER:  The all-in cost of electricity increased 13.8% from almost $34 per MWh in 2024 to $38 per MWh in 2025. This increase was driven primarily by the cost of energy, with no adders or uplift, and corresponded to a 61% increase in the average daily index price for natural gas. Gas and energy prices are e…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …he SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. 
QUOTE: The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour.
AFTER:  The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancil…

## Statements to check

- **Definition #1** (cites e1, e2): SCED is the process for determining Ancillary Service awards and Base Point instructions for Resources, using Energy Offer Curves, Energy Bid/Offer Curves, RTM Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs). [e1] A Base Point is the MW output level for a Resource that SCED produces. [e2]
- **How it works #1** (cites e3, e6, e8): SCED is designed to manage energy, Ancillary Services, the system power balance and network congestion at the same time, through Base Points, Ancillary Service awards and the calculation of LMPs and Real-Time MCPCs, approximately every five minutes or more frequently if necessary. [e3] It determines dispatch and awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, ASDCs and network constraints. [e6] It also accounts for each Energy Storage Resource's state of charge and SOC operating limits. [e8]
- **How it works #2** (cites e14, e4, e5): SCED uses a two-step method that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. [e14] Step 1 runs SCED on the full Network Operations Model observing only Competitive Constraints (plus power balance and Ancillary Service constraints) to determine Reference LMPs. [e4] Step 2 produces the Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to all security constraints, Competitive and Non-Competitive, and other Resource constraints. [e5]
- **How it works #3** (cites e15, e10, e7, e9): The prices SCED produces feed settlement. Real-time energy settlements use Settlement Point Prices for a 15-minute Settlement Interval, using the LMPs from all SCED executions in that interval. [e15] A Resource Node's real-time Settlement Point Price is the time-weighted average of the sum of the Real-Time LMPs and the Reliability Deployment Price Adder for Energy. [e10] System Lambda and Real-Time MCPCs from Step 2 are capped at the effective VOLL, and ERCOT posts both capped and uncapped values. [e7] Separately from the binding run, ERCOT calculates a non-binding projection of Base Points, awards, MCPCs, Resource Node, Hub and Load Zone LMPs every five minutes for at least 15 minutes ahead. [e9]
- **ERCOT context #1** (cites e11, e1, e6, e12): Real-time co-optimization (RTC) changed what SCED does in price formation. The IMM reports that with RTC the real-time market simultaneously procures energy and ancillary services, whereas previously the day-ahead market alone procured them. [e11] The current protocol text reflects this: SCED determines Ancillary Service awards using Ancillary Service Offers and ASDCs. [e1][e6] Before RTC went live on December 5, 2025, shortage pricing came from an ORDC price adder added to energy and reserve prices when reserves were low. [e12]
- **ERCOT context #2** (cites e13): The IMM says that since RTC the real-time market has functioned as expected without major malfunctions, but flags issues with real-time ancillary service price formation likely due to the design of the ancillary service demand curves and duration constraints for ESRs providing ancillary services. [e13]
- **Key facts #1** (cites e3): - SCED runs approximately every five minutes, or more frequently if necessary. [e3]
- **Key facts #2** (cites e6): - It maximizes bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e6]
- **Key facts #3** (cites e4, e5): - It is a two-step process: Step 1 sets Reference LMPs with only Competitive Constraints; Step 2 produces Base Points, awards, Shadow Prices, MCPCs and LMPs. [e4][e5]
- **Key facts #4** (cites e1): - SCED outputs include Ancillary Service awards as well as energy Base Points. [e1]
- **Key facts #5** (cites e12, e11): - RTC went live December 5, 2025 (per the IMM), moving AS procurement into real time. [e12][e11]
- **Key facts #6** (cites e9): - ERCOT calculates a non-binding projection every five minutes for at least 15 minutes into the future. [e9]
- **Say it like this #1** (cites e3, e6, e11, e12): SCED is ERCOT's real-time engine: about every five minutes [e3] it dispatches Resources by maximizing bid-based revenues minus offer-based costs subject to network constraints [e6], and the same solve produces the LMPs [e3]. Since RTC in December 2025 the same solve also awards ancillary services, so energy and reserve prices are formed together. [e11][e12]
- **Common confusion #1** (cites e1): - SCED versus RUC: SCED produces Base Points and awards; RUC is a separate process covered in the ruc topic. [e1]
- **Common confusion #2** (cites e15, e10): - SCED versus the Settlement Point Price: SCED produces LMPs, and the settlement price uses the LMPs from all SCED executions in a 15-minute interval and adds the reliability adder. [e15][e10]
- **Common confusion #3** (cites e11, e12): - Pre-RTC descriptions (separate ORDC adder, day-ahead-only AS procurement) are historical as of December 2025. [e11][e12]
- **Questions #2** (cites e5): Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, from Step 2 of its two-step process. [e5]
- **Questions #4** (cites e14, e4, e5): Step 1 finds Reference LMPs observing only Competitive Constraints, and Step 2 then solves with all constraints, with mitigation applied to energy offers to resolve Non-Competitive Constraints. [e14][e4][e5]
- **Questions #6** (cites e11, e16): The real-time market now co-optimizes energy and ancillary services, where previously the day-ahead market alone procured ancillary services. [e11] Shortage pricing is now incorporated into the price of energy rather than being a separate adder. [e16]
- **Link to base-point** (cites e2): determines Base Point: SCED produces the Base Point, the MW output level for each Resource. [e2]
- **Link to lmp** (cites e3): determines LMP (Locational Marginal Price): SCED calculates the real-time LMPs, approximately every five minutes. [e3]
- **Link to system-lambda** (cites e7): determines System Lambda: System Lambda is a SCED output, capped at the effective VOLL. [e7]
- **Link to shadow-price** (cites e5): determines Shadow Price: Step 2 of SCED produces Shadow Prices for binding constraints. [e5]
- **Link to rtm** (cites e3): part-of Real-Time Market (RTM): In real time SCED calculates Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs approximately every five minutes. [e3]
- **Link to spp** (cites e10, e15): determines SPP (Settlement Point Price): Real-Time Settlement Point Prices use the Real-Time LMPs from SCED. [e10][e15]
- **Link to energy-offer-curve** (cites e1): used-in Energy Offer Curve: SCED evaluates Energy Offer Curves to determine dispatch. [e1]
- **Link to market-power-mitigation** (cites e14): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e14]
