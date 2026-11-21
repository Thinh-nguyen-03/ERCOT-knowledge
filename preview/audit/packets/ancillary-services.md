# Audit packet: Ancillary Services (AS) (ancillary-services)

kind concept · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (1) · text copy line 8096 · heading above: 3.17.1 Regulation Service

BEFORE: …ale of ECRS to other Market Participants. The total amount of ECRS using the Load Resource excluding CLRs procured by ERCOT is also limited to the lesser of the 50% limit or the limit established by ERCOT in paragraph (8) above. 3.17 Ancillary Service Capacity Products 3.17.1 Regulation Service (1) 
QUOTE: Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency.
AFTER:  The amount of Reg-Up capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2) · text copy line 8102 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: … able to decrease energy output when deployed and increase energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Down must be able to increase Load when deployed and decrease Load when recalled. ERCOT dispatches Reg-Down by an LFC signal. 3.17.2 Responsive Reserve Service 
QUOTE: (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases.
AFTER:  (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlle…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (1) · text copy line 8162 · heading above: 3.17.4 ERCOT Contingency Reserve Service

BEFORE: … consumption based on an ERCOT Extensible Markup Language (XML) instruction within 30 minutes; and (ii) Maintaining that deployment until recalled; or (d) ESRs. (2) The Non-Spin may be deployed by ERCOT to increase available reserves in Real-Time operations. 3.17.4 ERCOT Contingency Reserve Service 
QUOTE: (1) ERCOT Contingency Reserve Service (ECRS) is a service that is provided using capacity that can be sustained at a specified level for two consecutive hours and is used to restore or maintain the frequency of the ERCOT System: (a) In response to significant depletion of RRS; (b) As backup Regulation Service; and (c) By providing energy to avoid getting into or during an Energy Emergency Alert (EEA).
AFTER:  (2) ECRS may be provided through one or more of the following means: (a) From On-Line or Off-Line Resources as prescribed in the Operating Guides following a significant frequency deviation in the ERCOT System; and (b) Either manually or by using a four-second signal to provide energy on deployment…

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Spinning Reserve (Non-Spin) · text copy line 1833

BEFORE: …quired to be metered by applicable transmission or distribution tariff. Non-Opt-In Entity (NOIE) An EC or MOU that does not offer Customer Choice. Non-Opt-In Entity (NOIE) Load Zone A Load Zone established by a NOIE or a group of NOIEs using a one-time NOIE election. Non-Spinning Reserve (Non-Spin) 
QUOTE: An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours.
AFTER:  Non-Spin may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, that is reserved exclusively for use for this service and that can be sustained at a specified level for at least four consecutive hours. +---------------------------------------------------…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.1.1, Ancillary Service Plan, paragraph (1) · text copy line 293 · heading above: 4.2.1.1 Ancillary Service Plan

BEFORE: …. (6) If ERCOT is unable to operate the Adjustment Period process, then ERCOT may abort the Adjustment Period process and operate under its Operating Period procedures. 4.2 ERCOT Activities in the Day-Ahead 4.2.1 Ancillary Service Plan and Ancillary Service Obligation 4.2.1.1 Ancillary Service Plan 
QUOTE: (1) ERCOT shall analyze the expected Load conditions for the Operating Day and develop an Ancillary Service Plan that identifies the Ancillary Service MW necessary for each hour of the Operating Day. The MW of each Ancillary Service required may vary from hour to hour depending on ERCOT System conditions. ERCOT must post the Ancillary Service Plan to the ERCOT website by 0600 of the Day-Ahead.
AFTER:  (2) If ERCOT determines that an Emergency Condition may exist that would adversely affect ERCOT System reliability, it may change the percentage of Load Resources that are allowed to provide ERCOT Contingency Reserve Service (ECRS) and Responsive Reserve (RRS) from the monthly amounts determined pr…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.1.2, Ancillary Service Obligation Assignment and Notice, paragraph (1) · text copy line 307 · heading above: 4.2.1.2 Ancillary Service Obligation Assignment and Notice

BEFORE: …by 0600 of the Day-Ahead. If ERCOT changes the Ancillary Service Plan per Section 6.4.9.1.2, Changes to Operating Day Ancillary Service Plan, the ASDCs reflecting the change to the Ancillary Service Plan will be posted to the ERCOT website. 4.2.1.2 Ancillary Service Obligation Assignment and Notice 
QUOTE: (1) ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level.
AFTER:  If the resultant QSE-level share is negative, the QSE's share will be set to zero and all other QSE shares will be adjusted on a pro rata basis such that the sum of all shares is equal to one. The resulting Ancillary Service quantity for each QSE, by service, by hour, is called its Ancillary Servic…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraphs (4)-(5) · text copy line 2296 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …Day-Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) The DAM shall use the same ASDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. 
QUOTE: (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market · text copy line 3821

BEFORE: …g resources. 2025 State of the Market Report | 37 / / Ancillary Services B. Ancillary Services Market Ancillary Services are operating reserves that ERCOT procures to address risks associated with contingencies, variations in supply and demand, and forecast errors for load and renewable generation. 
QUOTE: Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation.
AFTER:  Consumers pay the cost of AS procured through the market. Specifically, ERCOT allocates procurement costs to Load Serving Entities (LSEs) based on their real-time adjusted metered load. Market participants representing qualified resources may self-schedule ancillary services using those resources t…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Figure 1 discussion (all-in cost) · text copy line 1374

BEFORE: …titive market because suppliers have an incentive to offer energy according to the marginal cost of generation. Fuel costs represent the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT. Figure 1 provides additional insights: • 
QUOTE: Ancillary services costs were $0.39 per MWh of load in 2025, a 60% decrease from 2024 and the lowest since 2020.
AFTER:  We analyze this in greater detail in Chapter III.A. • The ORDC adder contributed $0.02 per MWh to the all-in cost of energy in 2025, a 93% reduction from 2024. The low ORDC cost reflects a significant increase in online reserves because of growth if renewable generation and ESRs, as discussed in Se…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e14 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Executive Summary, ancillary services · text copy line 678

BEFORE: …ificial shortages caused by ECRS deployment practices.  Price convergence was much better in 2024 compared to recent years. Prices in the dayahead market averaged $1.46 per MWh higher than in real-time, and the average absolute difference in prices was only $17.35 per MWh, the lowest since 2020.  
QUOTE: Ancillary services costs dropped to $0.98 per MWh of load from $3.74 per MWh in 2023.
AFTER:  This overall drop in the cost of ancillary services corresponds to a decrease in the average price for all products, but especially for ECRS, whose average price dropped from $76.77 per MWh in 2023 to only $9.62 per MWh in 2024. This drop was caused by an increase in supply, particularly from energ…

### e16 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Cover page · text copy line 3

BEFORE: …ERCOT Methodologies for Determining Minimum Ancillary Service Requirements 
QUOTE: ERCOT Board Recommended approval on 09/23/2025 PUC Approved on 11/06/2025 Effective Date of 01/01/2026
AFTER:  TABLE OF CONTENTS Introduction 2 Regulation Service Requirement Details 3 Responsive Reserve (RRS) Requirement Details 4 ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin) Requirement Details 5 Introduction Paragraph (2) of Protocol Section 3.16, Standards for Determining …

### e17 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Introduction · text copy line 27

BEFORE: …ve (Non-Spin) and Responsive Reserve (RRS) that are required to maintain system reliability. Those procedures are discussed below. These procedures are intended for determining each of the Ancillary Service requirements for all months of the upcoming year. This procedure will be performed annually. 
QUOTE: The Ancillary Service requirements are determined annually and will be posted to the Market Information System (MIS) by December 20^(th) for the upcoming year.
AFTER:  If necessary, any additional incremental adjustment to the posted Ancillary Service requirements for a particular month will be made using this procedure and will be posted to the MIS prior to the 20^(th) of each month for the upcoming month. If the Ancillary Service requirements identified through…

### e18 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Regulation Service Requirement Details, Summary · text copy line 37

BEFORE: …tes of Regulation Service usage to perform evaluation and determine the required quantities for this service. Regulation Service is deployed in order to correct actual frequency to scheduled frequency and to ensure North American Electric Reliability Corporation (NERC) requirements are met. Summary 
QUOTE: The Regulation Service requirements are calculated with the expectation that sufficient Regulation Service will be available to cover the 95^(th) percentile of deployed regulation or net load variability. An adjustment may also be made based on historic CPS1 performance.
AFTER:  Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) per…

### e19 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Regulation Service Requirement Details, Procedure · text copy line 41

BEFORE: …d regulation or net load variability. An adjustment may also be made based on historic CPS1 performance. Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. 
QUOTE: For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load - wind - solar) forecast error for the same month of the previous two years.
AFTER:  For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load - wind - solar) forecast error for the same month of the previous two years. To better reflect balancing needs within the hours, the net load variability may be updated to acco…

### e20 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Responsive Reserve (RRS) Requirement Details · text copy line 51

BEFORE: …ll increase to 20% if the CPS1 score falls below 100%. Responsive Reserve (RRS) Requirement Details Nodal Operating Guide Section 2.3.1.1, Obligation, sets the minimum RRS requirement for all hours under normal conditions. ERCOT will procure amounts of RRS that vary by hour of the day and by month. 
QUOTE: These RRS amounts will be published by month in six separate blocks covering four-hour intervals. These amounts will be based on expected diurnal load, solar, and wind patterns for the month, will cover 70% of historic system inertia conditions for each block of hours for the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours.
AFTER:  The equivalency ratio will be used to establish the total reserves assuming the Day-Ahead Market (DAM) will use a one to one equivalency ratio. The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use…

### e21 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 75

BEFORE: …tment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources. Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes. 
QUOTE: The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria.
AFTER:  The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) =…

### e22 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years.
AFTER:  ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation…

### e23 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 81

BEFORE: …d, solar, and wind patterns; will cover 70% of historic system inertia conditions for each hour for the month and will include an adjustment to account for Regulation Up requirement in the hour. ERCOT will post the monthly amounts for ECRS and Non-Spin requirements for the upcoming year on the MIS. 
QUOTE: Following this posting, ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Operating Hours that are (a) identified as having an increased potential of high forecast variability, (b) there is a risk that the actual net load during these Operating Hours could be higher than forecast (after making appropriate forecast model selection) and (c) the expected available capacity and expected reserves including the posted minimum Non-Spin requirements during these Operating Hours is not sufficient to cover the projected net load forecast uncertainty risk.
AFTER:  The minimum amount of Non-Spin procured from SCED dispatchable Resources in any hour shall not be less than lower of ERCOT's Most Severe Single Contingency (MSSC) value and the Non-Spin requirement for that hour.…

### e24 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 83

BEFORE: …ould be higher than forecast (after making appropriate forecast model selection) and (c) the expected available capacity and expected reserves including the posted minimum Non-Spin requirements during these Operating Hours is not sufficient to cover the projected net load forecast uncertainty risk. 
QUOTE: The minimum amount of Non-Spin procured from SCED dispatchable Resources in any hour shall not be less than lower of ERCOT's Most Severe Single Contingency (MSSC) value and the Non-Spin requirement for that hour.
AFTER: …

### e25 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (2)(c) · text copy line 8058 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …======================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW.
AFTER:  (3) The ERCOT Board shall review and recommend approval of ERCOT's methodology for determining the minimum Ancillary Service requirements, any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin), the minimum …

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (3) · text copy line 8060 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …nning Reserve (Non-Spin), the minimum capacity required from Resources providing Primary Frequency Response to provide RRS, the maximum amount of RRS that can be provided by Resources capable of FFR, the maximum amount of RRS that an individual Resource can provide using Primary Frequency Response. 
QUOTE: ERCOT shall post on the ERCOT website the ERCOT Methodologies for Determining Minimum Ancillary Service Requirements approved by the ERCOT Board. Any such recommendations require approval by the Public Utility Commission of Texas (PUCT) prior to implementation.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.16, paragraph (7) · text copy line 8082 · heading above: 3.16 Standards for Determining Ancillary Service Quantities

BEFORE: …it established by ERCOT for sale of RRS to other Market Participants. The total amount of RRS using the Load Resource procured by ERCOT is also limited to the capacity established in paragraph (4) above, up to the lesser of the 60% limit or the limit established by ERCOT in paragraph (4) above. (7) 
QUOTE: Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing ECRS. The amount of Load Resources excluding CLRs that may or may not be on high-set under-frequency relays providing ECRS is limited to 50% of the total ERCOT ECRS requirement.
AFTER:  (8) The amount of ECRS that a QSE can self-arrange using a Load Resource excluding CLRs is limited to the lower of: (a) 50% of its ECRS Ancillary Service Obligation; or (b) A reduced percentage of its ECRS Ancillary Service Obligation based on the limit established by ERCOT in paragraph (7) above. …

### e28 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.3, paragraph (1)(a) · text copy line 8124 · heading above: 3.17.3 Non-Spinning Reserve Service

BEFORE: … by high-set under-frequency relays; (d) Controllable Load Resources (CLRs); (e) Generation Resources operating in synchronous condenser fast-response mode as defined in the Operating Guides; and (f) ESRs. 3.17.3 Non-Spinning Reserve Service (1) Non-Spinning Reserve (Non-Spin) is provided by using: 
QUOTE: (a) Generation Resources, whether On-Line or Off-Line, capable of: (i) Being synchronized and ramped to a specified output level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours;
AFTER:  +-----------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (ii) above with the following upon system implementation:] | | | | (ii) Running at a specified output level for at least two consecutive hours; | +=============================…

### e29 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.18, paragraph (1) · text copy line 8207 · heading above: 3.18 Resource Limits in Providing Ancillary Service

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.18 Resource Limits in Providing Ancillary Service (1) 
QUOTE: For Generation Resources, Energy Storage Resources (ESRs), and Load Resources the High Sustained Limit (HSL) must be greater than or equal to the Low Sustained Limit (LSL) and the sum of the Resource-specific awards for Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS), Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), and Non-Spinning Reserve (Non-Spin).
AFTER:  (2) For Non-Spin, the amount of Non-Spin awarded must be less than or equal to the HSL for Off-Line Generation Resources. +--------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Insert pa…

### e30 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts · text copy line 64

BEFORE: …eme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-Spin should be revisited upon implementation of Dispatchable Reliability Reserve Service (DRRS). | | | | | | | | | | - 
QUOTE: ECRS duration should be changed to one hour: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in solar Resources, changing from a two-hour duration requirement to a one-hour duration requirement for ECRS is sufficient.
AFTER:  However, this duration recommendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency …

### e31 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts · text copy line 62

BEFORE: …l analysis to determine appropriate duration requirements for Ancillary Services. ERCOT shared the results of its analysis and its recommendations with the RTCBTF at its March 25, 2025 and April 22, 2025 meetings. Following is a summary of ERCOT's analysis and recommendations: | | | | | | | | | | - 
QUOTE: Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours.
AFTER:  This duration analysis for Non-Spin should be periodically revisited to assess its sufficiency especially during extreme events such as those that occurred on May 13, 2022 and March 2, 2025, for which Non-Spin deployments lasted more than four hours. Additionally, the duration requirement for Non-S…

### e32 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision and Market Impacts · text copy line 66

BEFORE: …mendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency Event. | | | | | | | | | | - 
QUOTE: Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT's analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT's obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
AFTER:  | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. A one-hour duration for RUC studies is appropriate to both respect an E…

### e33 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Effective Date row · text copy line 14

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon system implementation of PR447, Real-Time Co-Optimization (RTC)
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e34 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: PUCT Decision row · text copy line 94

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------+ | PUCT Decision | | 
QUOTE: On 7/31/25, the PUCT approved NPRR1282 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A1: Duration Requirements for Energy and AS in RTM (page A-3 (OCR)) · ocr copy line 6885, OCR page 161

BEFORE: …ket. One feature is that SCED now explicitly accounts for ESR SOC in its energy and AS awards. Together with the duration requirements for energy and AS shown in Table A1, this SOC accounting limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM 
QUOTE: Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours
AFTER:  These duration constraints introduce some imbalance risk for ESRs that sell reserves in the day- ahead market. At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to in…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Figure 25 inset table, NSRS row (page 62 (OCR)) · ocr copy line 2717, OCR page 62

BEFORE: …NSRS to average $320 per MWh during this period. These four hours accounted for 27% of the increase in the NSRS price across May. Figure 25: Ancillary Service Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74 5 @Reg-Up 
QUOTE: NSRS $81.56 $23.24 $15.53 $7.13 $3.65
AFTER:  a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 ECRS - - $73.18 $9.56 $2.65 2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under RTC High NSRS prices also occurred in December,…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Figure 25 inset table, ECRS row (page 62 (OCR)) · ocr copy line 2720, OCR page 62

BEFORE: …ice Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74 5 @Reg-Up NSRS $81.56 $23.24 $15.53 $7.13 $3.65 a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 
QUOTE: ECRS - - $73.18 $9.56 $2.65
AFTER:  2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under RTC High NSRS prices also occurred in December, likely because of uncertainty about RTC. Looking at hourly day-ahead market prices for NSRS for the month of December, 15 of the 24 highest- pri…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Figure 25 inset table, Responsive row (page 62 (OCR)) · ocr copy line 2716, OCR page 62

BEFORE: …0 MW for HE 19-22 on May 20, 2025, causing the price of NSRS to average $320 per MWh during this period. These four hours accounted for 27% of the increase in the NSRS price across May. Figure 25: Ancillary Service Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 
QUOTE: Responsive] $300.87 $20.79 $21.04 $5.52 $2.74
AFTER:  5 @Reg-Up NSRS $81.56 $23.24 $15.53 $7.13 $3.65 a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79 2 ECRS - - $73.18 $9.56 $2.65 2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III, Ancillary Services, page 63 (OCR) · text copy line 4063

BEFORE: …the month of December, 15 of the 24 highestpriced hours occurred on the RTC go-live date, December 5, 2025. The day-ahead market that day did not include virtual bids for AS, so the high prices reflect elevated offers from physical resources. AS prices normalized again a few days after RTC go-live. 
QUOTE: In 2025, NSRS was the most expensive ancillary service on average for the first time.
AFTER:  This outcome is inconsistent with expectations for a well-functioning market, particularly in a year 40 | 2025 State of the Market Report / / Ancillary Services without material shortages. Two structural factors drove this price premium: oversized NSRS procurement volume on a capacity basis and the…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Ancillary Services Prices (page 62 (OCR)) · text copy line 3962

BEFORE: ….com/calendar/09192024TAC-Meeting 2025 State of the Market Report | 39 / / Ancillary Services 2. Ancillary Services Prices Figure 25 presents the monthly average DAM clearing prices for the five ancillary services in 2025, and the inset table shows the annual average prices for the last five years. 
QUOTE: Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter.
AFTER:  Until RTC was implemented, the entire AS plan was procured in the day-ahead market, often producing very high prices. The high prices shown for May in Figure 25 are an example. ERCOT operators increased an already high procurement target for NSRS in that month. Exercising their discretion, they inc…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section on AS shortages (page A-7 (OCR)) · text copy line 9645

BEFORE: …t, rather than going short on AS, ERCOT consistently goes long on NSRS. This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC). 
QUOTE: The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC. The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW.
AFTER:  To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include the excess volume. This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as …

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, section on AS shortages (page A-7 (OCR)) · text copy line 9650

BEFORE: …ned to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW. To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include the excess volume. 
QUOTE: This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4.
AFTER:  94 That is, everything except for Reg-Down 2025 State of the Market Report | A-7 / / Appendix: Real-Time Co-Optimization Figure A4: Illustration of Extended ASDC for NSRS From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average. Thus, this…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A3 discussion (page A-6 (OCR)) · text copy line 9602

BEFORE: …t design. Table A3 shows the frequency, magnitude, and pricing of AS shortages in ERCOT since RTC go-live. Shortage conditions have been infrequent since go-live. This infrequency is consistent with the high levels of operating reserves in the last several years, as discussed throughout the report. 
QUOTE: NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern.
AFTER:  Table A3: Frequency, Magnitude, and Pricing of AS Shortages December 5, 2025, through February 2026 =>S)!"#A%%C'()*H',A#H)*;.'?CPH2 !"#A%%C'() *H',A#H -)./) M.1'2 !,H'CPH) 4R !,H'CPH)4STS) 89)WH')4R;<) !"#$ -$#$ #!0N#!04R ##$ %CD E.C/ 2 2 )CG E)%CG +DECE 2P 2P S.CE +,CD EEC. )S)CG In fact, rather t…

### e44 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.7, paragraph (3) · text copy line 737 · heading above: 8.1.1.2.1.7 ERCOT Contingency Reserve Service Qualification

BEFORE: …ast include the ability to provide applicable telemetry and market submissions. The amount of ECRS for which the Resource is qualified when On-Line will be limited to the amount of capacity that can be ramped or unloaded within ten minutes. Off-Line ECRS can only be provided by qualified QSGRs. (3) 
QUOTE: The amount of ECRS provided by individual Generation Resources and Load Resources is limited to ten times its telemetered emergency ramp rate. Each Resource providing ECRS must be capable of ramping the Resource's Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS, and must be able to maintain the awarded level of deployment for at least one hour.
AFTER:  The amount of ECRS on a Generation Resource may be further limited by requirements of the Operating Guides. (4) A Load Resource must be loaded and capable of unloading the awarded amount of ECRS within ten minutes of instruction by ERCOT and must either be immediately responsive to system frequency…

### e45 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Ancillary Services Prices (OCR) · text copy line 5316

BEFORE: …oth days, unusually hot weather created heightened uncertainty around wind and solar output, which in turn led to sharp increases in day-ahead prices. While January also saw elevated prices, the overall trend for 2024 shows a substantial decline in average ancillary service prices compared to 2023, 
QUOTE: most notably for ECRS, which dropped from $76.77 per MWh to $9.62 per MWh.
AFTER:  The total cost of ancillary services per MWh of load dropped by approximately 74%, as shown in Figure 1 in Chapter I. Figure 36: Ancillary Service Prices, 2020-2024 Ancillary Service Price ($ per MWh) $35 Responsive Non-Spin Reg-Up Reg-Down ECRS $30 $25 2020 $/MWh Responsive $11.40 Non-Spin $4.45 R…

### e46 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18 (September 14-15, 2026), Key Takeaways · text copy line 34

BEFORE: …d is required to review and recommend approval of ERCOT's AS methodology. Any such recommendations require approval by the Public Utility Commission of Texas before implementation. Voting Items ERCOT requests the Board to recommend approval of the 2027 Ancillary Services Methodology Key Takeaways • 
QUOTE: For 2027, ERCOT is not proposing any change to the methodology for Regulation Service (Reg Up/Reg Down) and Responsive Reserve Service (RRS); their quantities reflect moving history forward.
AFTER:  • ERCOT is proposing two measured parameter changes for ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve Service (Non-Spin) - the headroom credit and the target reserve level - that result in quantities meeting the reliability needs of the system. Background PUBLIC • • • Ancillary …

### e47 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18, summary of proposed changes · text copy line 826

BEFORE: …e - i.e., same methodology as approved on September 23, 2025. • ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve Service (Non-Spin) o Change to the methodology to update the risk credit parameter during daytime hours used in the probabilistic model to identify minimum requirements. 
QUOTE: Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories.
AFTER:  o Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold. In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resou…

### e48 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board item 18, summary of proposed changes · text copy line 831

BEFORE: …. Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories. o 
QUOTE: Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold.
AFTER:  In addition to the changes proposed in the 2027 AS Methodology as outlined above, Attachment A indicates the minimum level of RRS from Resources providing RRS using Primary Frequency Response will remain at 1,377 MW. • Key Factors Influencing Issue: ERCOT Contingency Reserve Service and Non-Spinnin…

### e49 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Responsive Reserve (RRS) Requirement Details · text copy line 51

BEFORE: … the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours. The equivalency ratio will be used to establish the total reserves assuming the Day-Ahead Market (DAM) will use a one to one equivalency ratio. 
QUOTE: The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use of studies and shall not be less than 1,377 MWs.
AFTER:  The remaining capacity required for RRS will be procured from all Resources qualified to provide RRS including Load Resources. The maximum amount of RRS that can be provided by Resources providing Fast Frequency Response (FFR) is limited to 450 MW. DAM will limit the combined RRS procured from Load…

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e2, e3, e4, e44, e28, e5) FLAG number-not-in-quote: 3.17, 8.1, 1.2, 1.7: The services differ mainly by speed and duration. Reg-Up responds to ERCOT signals within five seconds to changes from scheduled system frequency. [e2] RRS is automatically self-deployed to restore or maintain frequency after a significant deviation. [e3] ECRS is described in the saved Protocol text (Section 3.17.4) as capacity sustained for two consecutive hours, used when RRS is depleted, as backup regulation, and to supply energy to avoid or during an EEA; [e4] the saved Operating-day performance text (np-08 Section 8.1.1.2.1.7) instead requires ECRS Resources to maintain the awarded level for at least one hour (see Duration, below). [e44] Non-Spin is provided by Generation Resources, On-Line or Off-Line, that can be synchronized and ramped to a specified output within 30 minutes and run at that output for at least four consecutive hours. [e28][e5]
- **How it works #3** (cites e9, e41, e42): Price formation uses an ancillary service demand curve for each service. Reg-Down has a constant demand curve equal to VOLL over the full range of the plan, while the curves for Reg-Up, RRS, ECRS and Non-Spin come from an aggregate ORDC that is split into individual curves. [e9] The IMM says that aggregate curve (the AORDC) is a fixed curve formulated from empirical pricing outcomes of the ORDC before RTC, defined to 10,000 MW; when the sum of the four up-reserve products in the AS Plan is below 10,000 MW, the excess volume is currently assigned to the NSRS demand curve, so the real-time market procures excess NSRS. [e41][e42]
- **How it works #4** (cites e29): A Resource's awards are limited by its capability: its HSL must be at least its LSL and the sum of its Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e29]
- **How it works #5** (cites e26, e16, e17) FLAG number-not-in-quote: 3.16: **How ERCOT sets the quantities.** Protocol Section 3.16 requires ERCOT to determine, at least annually, the methodology for each service's quantity; the Board reviews it, and any recommendation requires PUCT approval before implementation. [e26] The 2026 methodology was recommended by the Board on 09/23/2025, approved by the PUC on 11/06/2025 and effective 01/01/2026; requirements are determined annually and posted to the MIS by December 20 for the upcoming year. [e16][e17]
- **How it works #6** (cites e18, e19): - Regulation: sized to cover the 95th percentile of deployed regulation or net load variability, with a possible adjustment for historic CPS1 performance. [e18] The base Reg-Up for an hour is the 95th percentile of the positive net load (load minus wind minus solar) forecast error for the same month of the previous two years. [e19]
- **How it works #7** (cites e20, e49, e25) FLAG number-not-in-quote: 2026: - RRS: amounts are published by month in six blocks of four-hour intervals, based on expected diurnal load, solar and wind patterns, covering 70% of historic system inertia conditions for each block. [e20] The minimum RRS from Resources providing Primary Frequency Response is set monthly by ERCOT and may not be less than 1,377 MW in the 2026 methodology, [e49] above the 1,150 MW floor in the Protocol text. [e25]
- **How it works #8** (cites e22, e21, e23, e24): - ECRS and Non-Spin: a probabilistic model takes the risk (30-minute-ahead and six-hour-ahead historic net load forecast errors and rolling six-hour-ahead forced outages of conventional Resources over the previous four years) [e22] and, as credits, 60% of historically available capacity at night (HE23-HE5) and 25% in day hours (HE6-HE22), and runs a Monte Carlo optimization to compute a combined ECRS and NSRS requirement per month and hour. [e21] ERCOT may also procure up to an additional 1,000 MW of Non-Spin for hours it identifies as at risk of high forecast variability. [e23] The minimum Non-Spin procured from SCED-dispatchable Resources in any hour may not be less than the lower of the Most Severe Single Contingency and that hour's Non-Spin requirement. [e24]
- **How it works #9** (cites e30, e32, e31, e34, e33, e35): **Duration.** NPRR1282 changed duration requirements in preparation for RTC+B: ECRS from two hours to one hour, [e30] Regulation and RRS from 15 to 30 minutes, [e32] with Non-Spin staying at not less than four hours. [e31] The PUCT approved it on 7/31/25 and it takes effect upon system implementation of RTC (PR447). [e34][e33] The IMM's Table A1 shows the RTM duration requirements: energy 5 minutes, Reg-Up 30 minutes, RRS 30 minutes, ECRS 1 hour, NSRS 4 hours. [e35]
- **How it works #10** (cites e27, e44): **Who can provide what.** Load Resources excluding CLRs can provide no more than 50% of the total ERCOT ECRS requirement. [e27] ECRS from a Resource is limited to ten times its telemetered emergency ramp rate and it must ramp within ten minutes and maintain the awarded level for at least one hour. [e44]
- **ERCOT context #3** (cites e38, e36, e37, e40, e39, e43) FLAG number-not-in-quote: 2021, 2022, 2023: Prices by product (the IMM's Figure 25 inset, annual average DAM prices, $ per MWh, 2021 to 2025, read from the OCR copy): Responsive $300.87, $20.79, $21.04, $5.52, $2.74; NSRS $81.56, $23.24, $15.53, $7.13, $3.65; ECRS (no value shown for 2021 and 2022) $73.18, $9.56 and $2.65 for 2023, 2024 and 2025. [e38][e36][e37] The IMM says prices fell across all AS products from 2024 to 2025, partly from growth in ESR capacity and AS provision by ESRs. [e40] In 2025 NSRS was the most expensive ancillary service on average for the first time. [e39] Since RTC go-live shortages have been infrequent, NSRS had the most frequent shortages and the lowest penalty price, and about 45% of the volume of NSRS shortages occurred during Winter Storm Fern. [e43]
- **ERCOT context #4** (cites e46, e47, e48) FLAG number-not-in-quote: 2026: Looking ahead: ERCOT's 2027 methodology item for the Board meeting of September 14-15, 2026 (a proposal requiring PUCT approval, whose outcome is not in the saved sources) proposes no change for Regulation and RRS, [e46] and for ECRS and Non-Spin proposes a daytime risk credit of 50% for online and offline Generation Resources and 60% for ESRs with four-hour sustainable duration (night credits unchanged at 60%) [e47] and a lower convergence threshold: EEA1 (2,500 MW) instead of Watch (3,000 MW). [e48]
- **Key facts #2** (cites e28): - Non-Spin: ramp within 30 minutes and run for at least four consecutive hours. [e28]
- **Key facts #3** (cites e35): - RTM duration requirements per the IMM: 5 minutes energy, 30 minutes Reg-Up and RRS, 1 hour ECRS, 4 hours NSRS. [e35]
- **Key facts #4** (cites e6, e17): - The AS Plan is posted by 0600 on the Day-Ahead; annual requirements are posted by December 20. [e6][e17]
- **Key facts #8** (cites e39): - NSRS was the most expensive AS on average in 2025. [e39]
- **Say it like this #1** (cites e2, e5, e13, e14, e12, e26): Ancillary services are the reserve products ERCOT procures to support reliable operation, from Reg-Up that responds within five seconds to Non-Spin that ramps within 30 minutes. Batteries now supply most of the fast products, costs to load have fallen sharply since 2023, and the quantities come from an annual methodology the Board and PUCT approve. [e2][e5][e13][e14][e12][e26]
- **Common confusion #1** (cites e4, e3, e11, e7, e17, e6): Ancillary services are capacity products, not energy: awards reserve headroom rather than delivering MWh, though ECRS can supply energy to avoid or during an EEA [e4] and RRS is deployed through real power increases or decreases by Resources. [e3] Before December 2025 a day-ahead AS award was a physical obligation, and now it is a financial position. [e11] "AS Obligation" is also not the same as an award: the obligation is a QSE's allocated share of ERCOT's need. [e7] The AS Plan (what ERCOT needs) is not the methodology (how the annual quantities are derived): the methodology is approved annually and posted by December 20, while the Plan is posted daily. [e17][e6]
- **Questions #2** (cites e2, e3, e44, e5): Reg-Up responds within five seconds. [e2] RRS is automatically self-deployed after a significant frequency deviation. [e3] ECRS must ramp within ten minutes of the notice to deploy and hold the award for at least one hour. [e44] Non-Spin ramps within 30 minutes. [e5]
- **Questions #8** (cites e14, e12, e40, e45): The IMM reports AS costs of $3.74 per MWh of load in 2023, $0.98 in 2024 and $0.39 in 2025. [e14][e12] The IMM says prices fell across all products from 2024 to 2025, partly because of continued growth in ESR capacity and the increase in AS provision by ESRs. [e40] The ECRS price also dropped sharply from 2023 to 2024. [e45]
- **Questions #10** (cites e21, e48) FLAG number-not-in-quote: 2026, 2027: A Monte Carlo model nets historic headroom credits against net-load forecast and outage risk and solves for a 1-in-10-year probability that reserves drop below the higher of Reg-Up plus RRS or the Watch threshold of 3,000 MW in the 2026 methodology. [e21] ERCOT's 2027 proposal lowers that threshold to EEA1 at 2,500 MW. [e48]
- **Questions #12** (cites e30): ERCOT's analysis said the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute-ahead net load and a margin for solar forecast growth made one hour sufficient, with the caveat that it may need revisiting if there are frequency-recovery or BAL-002 concerns. [e30]
- **Questions #14** (cites e39, e42, e43): The IMM calls the 2025 outcome inconsistent with a well-functioning market, and ties excess NSRS procurement to the way excess aggregate-curve volume is assigned to the NSRS demand curve. [e39][e42] Shortages since RTC are infrequent, and NSRS has the lowest penalty price. [e43]
- **Scenarios #5** (cites e29, e35): - Awards must fit under the Resource's HSL together with its other awards, and the RTM duration requirement for Reg-Up is 30 minutes. [e29][e35]
- **Link to regulation** (cites e2): composed-of Regulation Up / Down: Regulation Up is capacity that can respond to signals from ERCOT within five seconds to changes from scheduled system frequency. [e2]
- **Link to rrs** (cites e3): composed-of RRS (Responsive Reserve Service): RRS is the automatically self-deployed service that restores or maintains frequency after a significant deviation. [e3]
- **Link to ecrs** (cites e4): composed-of ECRS (ERCOT Contingency Reserve Service): ECRS is capacity sustained for two consecutive hours, used for depleted RRS, backup regulation and energy to avoid or during an EEA. [e4]
- **Link to non-spin** (cites e5): composed-of Non-Spinning Reserve: Non-Spin is capacity that can be synchronized and ramped within 30 minutes. [e5]
- **Link to asdc** (cites e9): determines ASDC (Ancillary Service Demand Curves): ERCOT builds an ancillary service demand curve for each service from the AS Plan. [e9]
- **Link to rtc-b** (cites e11): related RTC+B (Real-Time Co-optimization + Batteries): RTC changed day-ahead AS awards from physical obligations to financial positions. [e11]
- **Link to eea** (cites e4): related EEA (Energy Emergency Alert) Levels: ECRS provides energy to avoid getting into or during an Energy Emergency Alert. [e4]
- **Link to energy-storage-resource** (cites e13): related Energy Storage Resource (ESR): ESRs supply most regulation and large shares of the other services. [e13]
- **Link to ordc** (cites e41): related ORDC (Operating Reserve Demand Curve): The IMM says the individual up-reserve ASDCs, aggregated, conform to the Aggregate Operating Reserve Demand Curve (AORDC), a fixed curve defined to 10,000 MW. [e41]
- **Link to non-spin** (cites e28): composed-of Non-Spinning Reserve: Non-Spin must be able to run at its specified output for at least four consecutive hours. [e28]
- **Link to reliability-standard** (cites e32): related ERCOT Reliability Standard: ERCOT's NPRR1282 analysis ties Regulation and RRS duration to NERC BAL-001 performance when SCED is unavailable. [e32]

