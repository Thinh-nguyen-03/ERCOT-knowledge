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

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(b) · text copy line 2238

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (b) 
QUOTE: The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints.
AFTER:  The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Cu…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(d) · text copy line 2266

BEFORE: … System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. 
QUOTE: The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website.
AFTER:  (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding projection of the Base Points, Ancillary Service awards, MCPCs, Resource Node LMPs, Real-Time Reliability Deployment Price Adders, Hub LMPs, a…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …o power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. 
QUOTE: In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits.
AFTER:  This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR's Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) l…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.1, paragraph (1) · text copy line 3703 · heading above: 6.6.1.1 Real-Time Settlement Point Price for a Resource Node

BEFORE: …for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda. 6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) 
QUOTE: The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy.
AFTER:  The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y))))) Where the Resource Node weighting factor is: RNWF _(y) = TLMP _(y) / []TLMP _(y) The above variables are defined as follows: ---------…

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

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …he SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. 
QUOTE: The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour.
AFTER:  The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancil…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …ffer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. 
QUOTE: The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP.
AFTER:  In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4) · text copy line 1798 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …onitor cumulative deployment of Regulation Services and ensure that Regulation Services deployment is minimized over time. (3) In the Generation To Be Dispatched (GTBD) determined by LFC, ERCOT shall subtract the sum of the telemetered net real power consumption from all CLRs available to SCED. (4) 
QUOTE: For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available capacity of all committed Generation Resources by creating proxy Energy Offer Curves for certain Resources as follows:
AFTER:  (a) Non-IRRs without Energy Offer Curves (i) ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below for: (A) Each non-IRR for which its QSE has submitted an Output Schedule instead of an Energy Offer Curve. -----------------------------------------------------…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(b)(i) · text copy line 2240

BEFORE: …s, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. 
QUOTE: Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;
AFTER:  (ii) Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. The offer portion of each Energy Bid/Offer Curve subject to mi…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(d) · text copy line 2266

BEFORE: … the limiting element (or identified operator-entered constraint with operator's comments describing the reason and the Resource-specific impacts for any manual overrides). ERCOT shall provide the summary to Market Participants on the MIS Secure Area and to the Independent Market Monitor (IMM). (d) 
QUOTE: Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged.
AFTER:  These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT sh…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (6)(b) · text copy line 2132 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: … MW point on the Energy Bid/Offer Curve | | | +------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+--------------------------------------------------------------------------+ (b) 
QUOTE: At the time of SCED execution, if a valid Energy Bid/Offer Curve or Output Schedule does not exist for an ESR that has a status of On-Line, then ERCOT shall notify the QSE and create a proxy Energy Bid/Offer Curve priced at -$250/MWh for the MW portion of the curve less than zero MW, and priced at the RTSWCAP for the MW portion of the curve greater than zero MW.
AFTER:  (c) At the time of SCED execution, if a QSE representing an ESR has submitted an Output Schedule instead of an Energy Bid/Offer Curve, ERCOT shall create a proxy Energy Bid/Offer Curve priced at -$250 per MWh for the MW portion of the curve from its LSL to the MW amount on the Output Schedule, and …

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (12)(a) · text copy line 2198

BEFORE: …gy Offer Curves shall be so marked in all ERCOT postings or references to the energy offer. (12) SCED will enforce Resource-specific Ancillary Service constraints to ensure that Ancillary Service awards are aligned with a Resource's qualifications and telemetered Ancillary Service capabilities. (a) 
QUOTE: A scaling factor of 5/7 shall be used for Reg-Up award when ensuring that the SCED Base Point plus the product of this scaling factor and the Reg-Up award does not exceed HDL.
AFTER:  (b) A scaling factor of 5/7 shall be used for Reg-Down award when ensuring that the SCED Base Point minus the product of this scaling factor and the Reg-Down award does not go below LDL. (13) Energy Bid/Offer Curves that were constructed in whole or in part with proxy Energy Bid/Offer Curves shall …

### e23 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 101 (OCR), Market Operations chapter, 2. Market Impacts of RUC · text copy line 6410

BEFORE: …) to adjust real-time prices upward and preserve the shortage signals that would have existed without the out-of-market commitment. See Figure 6 in Chapter I.D.2 for more information on the frequency and magnitude of the RDPA for 2021-2025. 78 | 2025 State of the Market Report / / Market Operations 
QUOTE: ERCOT also applies a $250-per-MWh offer floor to RUC-committed units.
AFTER:  This high minimumoffer price reduces the likelihood that these resources will be economically dispatched or set the market clearing price, which limits their direct influence on real-time prices. Together, these tools limit the extent to which RUC suppresses prices. Make-Whole Payments, Clawbacks, …

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.2, paragraph (2) · text copy line 3233 · heading above: 6.5.9.2 Failure of the SCED Process

BEFORE: …ert most threats to the reliability of the ERCOT System. However, these Protocols do not preclude ERCOT from taking any action to preserve the integrity of the ERCOT System. 6.5.9.2 Failure of the SCED Process (1) When the SCED process is not able to reach a solution, ERCOT shall issue a Watch. (2) 
QUOTE: For intervals that the SCED process fails to reach a solution, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service for the interval for which no solution was reached are equal to the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service in the most recently solved interval.
AFTER:  For Settlement Intervals that the Real-Time Settlement Point Prices are identified as erroneous, and ERCOT sets the SCED intervals as failed in accordance with Section 6.3, Adjustment Period and Real-Time Operations Timeline, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Ad…

### e25 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.2, paragraph (1) · text copy line 3231 · heading above: 6.5.9.2 Failure of the SCED Process

BEFORE: … effective and timely communication, the market-based tools available to ERCOT will avert most threats to the reliability of the ERCOT System. However, these Protocols do not preclude ERCOT from taking any action to preserve the integrity of the ERCOT System. 6.5.9.2 Failure of the SCED Process (1) 
QUOTE: When the SCED process is not able to reach a solution, ERCOT shall issue a Watch.
AFTER:  (2) For intervals that the SCED process fails to reach a solution, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service for the interval for which no solution was reached are equal to the LM…

### e26 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 70 (OCR), Ancillary Services chapter · text copy line 4567

BEFORE: …ent in new generation. Procuring excessive volumes of ancillary services will inefficiently inject additional non-price-setting energy into the real-time market and reduce prices. Ultimately, it can undermine the ability of shortage pricing to provide efficient long-term signals for new investment. 
QUOTE: With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them.
AFTER:  At the extremity of a well-designed ASDC, the shortage price should approach $0, reflecting the low marginal reliability value of additional reserves and allowing the market to go short on AS. This dynamic contrasts with the previous market design where the day-ahead market necessarily 48 | 2025 St…

### e27 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 71 (OCR), Ancillary Services chapter · text copy line 4583

BEFORE: … Report / / Ancillary Services procured the entirety of the AS Plan and is how RTC is meant to function. Shortages of operating reserves priced according to a sloped demand curve are a critical aspect of price formation in an energy-only market with co-optimization of energy and operating reserves. 
QUOTE: ERCOT operations, however, has signaled skepticism about this feature of RTC and indicated that it intends to use reliability unit commitment (RUC) instructions to increase operating reserves when the market does not procure the full AS Plan. To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269.
AFTER:  ERCOT argues that this price floor reduces the likelihood of real-time shortages of ancillary services that would prompt operators to commit resources through RUC. In practice, this excessively conservative operating reserve policy will increase consumer costs while suppressing the price signals ne…

### e28 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, Energy Storage offers slide, note 1 · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 34 (OCR), Ancillary Services chapter, ECRS discussion · text copy line 2130

BEFORE: …, the ECRS deployment criteria before RTC negatively affected reliability by dispatching ESRs excessively for energy while keeping gas turbines in reserve. Simulations that released ECRS in these events preserved ESR state of charge (SOC) by reducing ESR net injections by 10% throughout the events. 
QUOTE: With RTC's implementation in December 2025, ERCOT operators no longer manually deploy ECRS. Instead, SCED can make economic trade-offs between procuring energy and ancillary services in real time using reserve shortage prices under an ancillary service demand curve (ASDC).
AFTER:  This eliminates the need for manual deployments and enables more efficient, marketdriven decisions.6 6 The ASDCs defined by NPRR 1268 sponsored by the IMM, should result in further improvements in market performance vis a vis ECRS. See https://www.ercot.com/mktrules/issues/NPRR1268 for more details…

### e30 · `ercot-nprr1010-board-report` · tier 1 · NPRR1010 Board Report (Real-Time Co-optimization, Section 6 Adjustment Period and Real-Time Operations) (Board approved 2020-12-08)
locator: NPRR1010 Board report, Revision Description and Board Decision · text copy line 206

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------+ | Revision Description | | 
QUOTE: This NPRR updates the Adjustment Period and Real-Time Operations in the Protocols to address changes associated with the implementation of RTC.
AFTER:  Specifically, this NPRR addresses the following Key Principles: | | | | | | | | | | - KP1.1- Ancillary Service Demand Curves and Current Market Price Adders | | | | | | | | | | - KP1.2 - System-Wide Offer Cap and Power Balance Penalty Curve | | | | | | | | | | - KP1.3 - Offering and Awarding of Anc…

### e31 · `ercot-nprr1010-board-report` · tier 1 · NPRR1010 Board Report (Real-Time Co-optimization, Section 6 Adjustment Period and Real-Time Operations) (Board approved 2020-12-08)
locator: NPRR1010 Board report, Board Decision · text copy line 262

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------+ | Board Decision | | 
QUOTE: On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e32 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 review, key takeaways slide · text copy line 694 · heading above: 4.5 5

BEFORE: …mes including energy and ancillary service prices as well as peaker net margins continue to reflect increasing solar and storage resources • Summer 2026 energy and ancillary prices declined relative to prior years • Peaker net margins also declined, even with growth in both gross and net peak loads 
QUOTE: Real-time co-optimization helped to lower ancillary service costs and market congestion
AFTER:  Ancillary services were rarely short and most instances shortages occurred in early summer, before the highest demand periods Reliability Unit Commitments were up compared to prior years, shifting from congestion to capacity related procurement 13 Real-Time Hub Prices are lower this summer, contrib…

### e33 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (2) · text copy line 1794 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: The SCED solution must monitor cumulative deployment of Regulation Services and ensure that Regulation Services deployment is minimized over time.
AFTER:  (3) In the Generation To Be Dispatched (GTBD) determined by LFC, ERCOT shall subtract the sum of the telemetered net real power consumption from all CLRs available to SCED. (4) For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available capacit…

### e34 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (17) · text copy line 2272

BEFORE: …ub LMPs and Load Zone LMPs on the ERCOT website pursuant to Section 6.3.2, Activities for Real-Time Operations. (16) ERCOT may override one or more of a CLR's parameters in SCED if ERCOT determines that the CLR's participation is having an adverse impact on the reliability of the ERCOT System. (17) 
QUOTE: The QSE representing an ESR may withdraw energy from the ERCOT System only when dispatched by SCED to do so.
AFTER:  An ESR may telemeter a status of OUT only if the ESR is in Outage status. 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders (1) The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Ener…

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.2, paragraph (2) · text copy line 3233 · heading above: 6.5.9.2 Failure of the SCED Process

BEFORE: …yment Price Adders for Ancillary Service for the interval for which no solution was reached are equal to the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service in the most recently solved interval. 
QUOTE: For Settlement Intervals that the Real-Time Settlement Point Prices are identified as erroneous, and ERCOT sets the SCED intervals as failed in accordance with Section 6.3, Adjustment Period and Real-Time Operations Timeline, then the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, for the failed SCED intervals are equal to the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, in the most recently solved SCED interval that is not set as failed.
AFTER:  ERCOT shall notify the market of the failure by posting on the ERCOT website. For intervals covering the first 15 minutes of SCED process execution following a failure, ERCOT shall set the LMPs, Real-Time MCPCs, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Dep…

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (7) · text copy line 2136 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …Energy Bid/Offer Curve, ERCOT shall create a proxy Energy Bid/Offer Curve priced at -$250 per MWh for the MW portion of the curve from its LSL to the MW amount on the Output Schedule, and priced at the RTSWCAP for the MW portion of the curve from the MW amount on the Output Schedule to its HSL. (7) 
QUOTE: The Entity with decision-making authority, as more fully described in Section 3.19.1, Constraint Competitiveness Test Definitions, over how a Resource or Split Generation Resource is offered or scheduled, shall be responsible for all offers associated with each Resource, including offers represented by a proxy Energy Offer Curve, proxy Energy Bid/Offer Curve, or proxy Ancillary Service Offer.
AFTER:  (8) For a CLR whose QSE has submitted an RTM Energy Bid that does not cover the full range of the Resource's available Demand response capability, consistent with the CLR's telemetered quantities, ERCOT shall create a proxy energy bid as described below: --------------------------------------------…

## Statements to check (new or changed since the last audit)

- **How it works #5** (cites e17, e18, e21, e35, e34): Inputs. SCED uses the Resource Status from SCADA telemetry, validated by the Real-Time Sequence, instead of the COP Resource Status. [e17] ERCOT builds proxy Energy Offer Curves so that the available capacity of all committed Generation Resources is used, for example for non-IRRs that submitted only an Output Schedule or a partial curve. [e18] For an On-Line ESR with no valid curve or Output Schedule, ERCOT notifies the QSE and creates a proxy curve at -$250/MWh below zero MW and at the RTSWCAP above zero. [e21] The entity with decision-making authority over a Resource is responsible for offers represented by proxy curves. [e35] An ESR may withdraw energy only when dispatched by SCED to do so. [e34]
- **How it works #6** (cites e33, e22): Constraints. The SCED solution monitors cumulative Regulation deployment and keeps it minimized over time. [e33] A 5/7 scaling factor is applied to Reg-Up awards when checking that Base Point plus scaled award does not exceed HDL. [e22]
- **How it works #7** (cites e19): Step 2 mitigation detail. Each Energy Offer Curve is bounded at the lesser of the Step 1 Reference LMP or the Mitigated Offer Floor, and a curve subject to mitigation is capped at the greater of the Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Mitigated Offer Cap curve value at LSL, or the MOC. [e19]
- **How it works #8** (cites e20): VOLL cap. A bus LMP above the effective VOLL is set to the greater of the VOLL or the initial LMP minus the positive difference between System Lambda and VOLL, and LMPs below VOLL are unchanged. [e20]
- **How it works #9** (cites e25, e24, e36): Failure. When SCED cannot solve, ERCOT issues a Watch. [e25] The LMPs, MCPCs and adders for an unsolved interval equal those of the most recently solved interval. [e24] Paragraph (2) adds separate handling for Settlement Intervals identified as erroneous and set as failed under Section 6.3. [e36]
- **ERCOT context #2** (cites e29, e26, e27, e32) FLAG number-not-in-quote: 2026: The IMM says that with RTC, operators no longer manually deploy ECRS and SCED instead trades off energy and ancillary services using reserve shortage prices under an ASDC. [e29] The IMM describes the ASDCs as defining shortage pricing in the day-ahead and real-time markets, and reports that ERCOT operations signalled skepticism and imposed a $15 per MWh floor on AS shortages through NPRR 1269 to avoid RUC. [e26][e27] ERCOT's summer 2026 review says RTC helped lower ancillary service costs and market congestion. [e32]
- **ERCOT context #3** (cites e13): The IMM says that since RTC the real-time market has functioned as expected without major malfunctions, but flags issues with real-time ancillary service price formation likely due to the design of the ancillary service demand curves and duration constraints for ESRs providing ancillary services. [e13]
- **Timeline #1** (cites e31, e30) FLAG number-not-in-quote: 2020: - December 8, 2020: the ERCOT Board approved NPRR1010, which updates the Adjustment Period and Real-Time Operations sections to address RTC; it takes effect with RTC implementation. [e31][e30]
- **Timeline #2** (cites e12): - December 5, 2025: RTC went live (IMM). [e12]
- **Timeline #3** (cites e28) FLAG number-not-in-quote: 2026: - After go-live the System-Wide Offer Cap in ERCOT's summer 2026 review is $2000/MWh, down from $5000/MWh. [e28]
- **Key facts #7** (cites e17): - SCED uses telemetered Resource Status, not the COP status. [e17]
- **Key facts #8** (cites e25, e24, e36): - If SCED cannot solve, ERCOT issues a Watch and carries forward the prior solved interval's prices (with special handling for intervals set as failed). [e25][e24][e36]
- **Questions #6** (cites e17): SCED uses the Resource Status from SCADA telemetry validated by the Real-Time Sequence instead of the COP status. [e17] (Reading: dispatch has to rest on what the unit is actually doing, while the COP is a plan.)
- **Questions #8** (cites e25, e24): ERCOT issues a Watch, and prices for the unsolved interval equal those of the most recently solved interval. [e25][e24]
- **Questions #10** (cites e27): The IMM says ERCOT operations indicated it would use RUC to add reserves when the market does not procure the full AS Plan, and that the $15 floor on AS shortages was imposed to avoid that outcome. [e27]
- **Link to base-point** (cites e2): determines Base Point: SCED produces the Base Point, the MW output level for each Resource. [e2]
- **Link to lmp** (cites e3): determines LMP (Locational Marginal Price): SCED calculates the real-time LMPs, approximately every five minutes. [e3]
- **Link to system-lambda** (cites e7): determines System Lambda: System Lambda is a SCED output, capped at the effective VOLL. [e7]
- **Link to shadow-price** (cites e5): determines Shadow Price: Step 2 of SCED produces Shadow Prices for binding constraints. [e5]
- **Link to rtm** (cites e3): part-of Real-Time Market (RTM): In real time SCED calculates Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs approximately every five minutes. [e3]
- **Link to spp** (cites e10, e15): determines SPP (Settlement Point Price): Real-Time Settlement Point Prices use the Real-Time LMPs from SCED. [e10][e15]
- **Link to energy-offer-curve** (cites e1): used-in Energy Offer Curve: SCED evaluates Energy Offer Curves to determine dispatch. [e1]
- **Link to market-power-mitigation** (cites e14): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): SCED applies a two-step method that mitigates energy offers to resolve Non-Competitive Constraints. [e14]
- **Link to ruc** (cites e23): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC-committed Resources get proxy Energy Offer Curves in SCED, and the IMM reports a $250 offer floor on them. [e23]
- **Link to asdc** (cites e6, e26): related ASDC (Ancillary Service Demand Curves): SCED awards Ancillary Service subject to ASDCs, which the IMM says define shortage pricing under RTC. [e6][e26]
- **Link to energy-storage-resource** (cites e8): related Energy Storage Resource (ESR): SCED accounts for each ESR's state of charge and issues ESR Base Points that respect SOC limits. [e8]
- **Link to offer-cap** (cites e28) FLAG number-not-in-quote: 2026: related Offer Caps (HCAP / LCAP / SWCAP): The System-Wide Offer Cap was lowered to $2000/MWh from $5000/MWh after RTC go-live, per ERCOT's summer 2026 review. [e28]
- **Link to ordc** (cites e12, e26): replaced ORDC (Operating Reserve Demand Curve): The IMM says the ORDC adder was replaced under RTC by sloped Ancillary Service Demand Curves. [e12][e26]

