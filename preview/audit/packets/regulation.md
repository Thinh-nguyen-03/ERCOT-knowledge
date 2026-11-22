# Audit packet: Regulation Up / Down (regulation)

kind product · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (1) · text copy line 8096 · heading above: 3.17.1 Regulation Service

BEFORE: …or sale of ECRS to other Market Participants. The total amount of ECRS using the Load Resource excluding CLRs procured by ERCOT is also limited to the lesser of the 50% limit or the limit established by ERCOT in paragraph (8) above. 3.17 Ancillary Service Capacity Products 3.17.1 Regulation Service 
QUOTE: (1) Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency.
AFTER:  The amount of Reg-Up capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output…

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (1) · text copy line 8096 · heading above: 3.17.1 Regulation Service

BEFORE: …vides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. The amount of Reg-Up capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. 
QUOTE: A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output when deployed and decrease energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Up must be able to decrease Load when deployed and increase Load when recalled. ERCOT dispatches Reg-Up by a Load Frequency Control (LFC) signal.
AFTER:  (2) Regulation Down Service (Reg-Down) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. The amount of Reg-Down capacity is the amount of capacity available from a Resource that may be called on to c…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Regulation Down Service (Reg-Down) · text copy line 2315

BEFORE: …ice An Ancillary Service that consists of either Regulation Down Service (Reg-Down) or Regulation Up Service (Reg-Up). Regulation Down Service (Reg-Down) An Ancillary Service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes in system frequency. 
QUOTE: Such capacity is the amount available below any Base Point but above the low limit in MW of the Generation Resource's capacity that is frequency responsive and may be called on to change output as necessary throughout the range of capacity available to maintain proper system frequency.
AFTER:  An Energy Storage Resource (ESR) providing Reg-Down must be able to modify its energy withdrawal or injection as deployed for Reg-Down across the full range of capacity available to maintain proper system frequency. A Load Resource providing Reg-Down must be able to increase and decrease Load as de…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (4)(b)-(c) · text copy line 2867 · heading above: 6.5.7.6.2.1 Deployment of Regulation Service

BEFORE: …ed limits according to the Operating Guides. (4) These requirements also apply to the deployment or recall of a deployment of Reg-Up and Reg-Down: (a) Deployment or recall of a deployment must be accomplished through use of an automatic signal from ERCOT to each QSE provider of Reg-Up and Reg-Down. 
QUOTE: (b) ERCOT shall minimize Reg-Up and Reg-Down energy as much as practicable in each SCED cycle. (c) ERCOT shall settle energy provided by Reg-Up and Reg-Down at the Resource's Settlement Point Price.
AFTER:  (d) ERCOT shall integrate the control signal sent to providers of Reg-Up and shall calculate the amount of energy deployed by Reg-Up in each Settlement Interval. (e) ERCOT shall integrate the control signal sent to providers of Reg-Down and shall calculate the amount of energy deployed by Reg-Down …

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (6) · text copy line 2886 · heading above: 6.5.7.6.2.1 Deployment of Regulation Service

BEFORE: …========================================================================================================================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (6) For each Resource providing Reg-Up or Reg-Down, the implied ramp rate in MW per minute is the total amount of Regulation Service awarded divided by five.
AFTER:  (7) Each QSE providing Reg-Up or Reg-Down and ERCOT shall meet the deployment performance requirements specified in Section 8, Performance Monitoring. (8) ERCOT shall issue Reg-Up and Reg-Down deployment Dispatch Instructions over ICCP. Those Dispatch Instructions must contain the change in MW outp…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2, LFC Deployment, paragraph (1) · text copy line 2851 · heading above: 6.5.7.6.2 LFC Deployment

BEFORE: …ion Service, telemetered HSL or MPC, and LSL or LPC; (e) Resource limits calculated by ERCOT as described in Section 6.5.7.2, Resource Limit Calculator; (f) Capacity awarded for RRS and ECRS to Resources; (g) ERCOT System frequency bias; and (h) Telemetered Resource output. 6.5.7.6.2 LFC Deployment 
QUOTE: (1) ERCOT may deploy Regulation Service, RRS, ECRS, and Non-Spin only as prescribed by their respective specific functions to maintain frequency and system security. ERCOT may not substitute one Ancillary Service for another.
AFTER:  (2) LFC will send UDSP deployment signals for each Resource, as specified in Section 6.5.7.4.1, Updated Desired Set Points. 6.5.7.6.2.1 Deployment of Regulation Service (1) ERCOT shall deploy Reg-Up and Reg-Down necessary to maintain ERCOT System frequency to meet NERC Control Area and other Contro…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.4, paragraph (1)(c) · text copy line 2997 · heading above: 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service

BEFORE: …icipated duration of the deployment. 6.5.7.6.2.4 Deployment and Recall of ERCOT Contingency Reserve Service (1) ECRS is intended to: (a) Help restore the frequency to 60 Hz within ten minutes of a significant frequency deviation; (b) Provide energy to avoid, or during the implementation of, an EEA; 
QUOTE: (c) Provide backup to Reg-Up; and
AFTER:  (d) Provide energy upon detection of insufficient available capacity for net load ramps. (2) ERCOT shall deploy ECRS to meet NERC Standards and other performance criteria as specified in these Protocols and the Operating Guides by taking one or more of the following actions: (a) ERCOT shall issue E…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market, description of Regulation · text copy line 3832

BEFORE: …t participants representing qualified resources may self-schedule ancillary services using those resources to reduce their exposure to ancillary service procurement costs. Since June 2023, ancillary services in the ERCOT market include the following: • Regulation Up/Down Service (Reg-Up, Reg-Down). 
QUOTE: Regulation reserves include capacity that responds to Load Frequency Control (LFC), which sends instructions every four seconds to increase or decrease generation or demand as needed to balance generation and load from moment to moment and maintain system frequency.
AFTER:  • Responsive Reserve Service (RRS). Responsive reserves can respond within 10 minutes and are needed to restore system frequency during rapidly developing contingencies such as unplanned generator outages, rather than to meet normal load fluctuations. ERCOT procures three types of responsive reserv…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Ancillary Services · text copy line 783

BEFORE: …pikes because gas peakers and highpriced ESRs were needed to balance rapid changes in net load. In the summer of 2025, however, price spikes were 40% less frequent than in the summer of 2024 as additional ESR capacity improved ERCOT's capability to manage the system's ramp needs. Ancillary Services 
QUOTE: The most noteworthy development for ancillary services was the implementation of RTC in December.
AFTER:  Resources can now sell ancillary services directly into the real-time market and ERCOT optimizes its utilization of resources for satisfying the system's energy and ancillary services needs. The ability to sell real-time ancillary services is particularly attractive for ESRs that dominate the provi…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.B, Ancillary Services Market · text copy line 3821

BEFORE: …g resources. 2025 State of the Market Report | 37 / / Ancillary Services B. Ancillary Services Market Ancillary Services are operating reserves that ERCOT procures to address risks associated with contingencies, variations in supply and demand, and forecast errors for load and renewable generation. 
QUOTE: Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation.
AFTER:  Consumers pay the cost of AS procured through the market. Specifically, ERCOT allocates procurement costs to Load Serving Entities (LSEs) based on their real-time adjusted metered load. Market participants representing qualified resources may self-schedule ancillary services using those resources t…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.2, Responsive Reserve Service, paragraph (1) · text copy line 8102 · heading above: 3.17.2 Responsive Reserve Service

BEFORE: … able to decrease energy output when deployed and increase energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Down must be able to increase Load when deployed and decrease Load when recalled. ERCOT dispatches Reg-Down by an LFC signal. 3.17.2 Responsive Reserve Service 
QUOTE: (1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation.
AFTER:  (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. (3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of provi…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(h)-(k) · text copy line 2603 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …ne Generation Resources, excluding Quick Start Generation Resources (QSGRs); and | | | | (iii) QSGRs. | +===============================================================================================+ +-----------------------------------------------------------------------------------------------+ 
QUOTE: (h) Reg-Up and Reg-Down capability (for ESRs, the SCED duration requirements of Reg-Up and Reg-Down are considered);
AFTER:  (i) Undeployed Reg-Up and Reg-Down; (j) Ancillary Service Resource awards for Reg-Up and Reg-Down; (k) Deployed Reg-Up and Reg-Down; (l) Available capacity: (i) With Energy Offer Curves in the ERCOT System that can be used to increase Generation Resource Base Points in SCED; (ii) With Energy Offer …

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6, Load Frequency Control, paragraph (1) · text copy line 2815 · heading above: 6.5.7.6 Load Frequency Control

BEFORE: … shall be posted to the ERCOT website no later than three Business Days after approval. (4) ERCOT shall display on the ERCOT website and update every ten seconds a rolling view of the ERCOT-wide PRC, as defined in paragraph (1)(p) above, for the current Operating Day. 6.5.7.6 Load Frequency Control 
QUOTE: (1) The function of LFC is to maintain system frequency without a cost optimization function. ERCOT shall execute LFC every four seconds to reduce system frequency deviations from scheduled frequency by providing a control signal to each QSE that represents Resources providing Regulation Service, RRS, and ECRS.
AFTER:  6.5.7.6.1 LFC Process Description (1) The LFC system corrects system frequency based on the Area Control Error (ACE) algorithm and Good Utility Practice. (2) The ACE algorithm subtracts the actual frequency in Hz from the scheduled system frequency (normally 60 Hz), and multiplies the result by the…

### e16 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (2) · text copy line 8098 · heading above: 3.17.1 Regulation Service

BEFORE: …Reg-Up must be able to increase energy output when deployed and decrease energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Up must be able to decrease Load when deployed and increase Load when recalled. ERCOT dispatches Reg-Up by a Load Frequency Control (LFC) signal. 
QUOTE: (2) Regulation Down Service (Reg-Down) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency.
AFTER:  The amount of Reg-Down capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. A Generation Resource or ESR in discharge mode providing Reg-Down must be able to decrease energy output when deployed and inc…

### e17 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (3) · text copy line 302 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …frequency operation as specified in the Operating Guides. ERCOT's direction to the QSE to operate on constant frequency will be considered a Dispatch Instruction. (3) A QSE providing Reg-Up or Reg-Down shall provide ERCOT with the data requirements of Section 6.5.5.2, Operational Data Requirements. 
QUOTE: Resources providing Reg-Up or Reg-Down must be capable of delivering the full amount of regulating capacity offered to ERCOT within five minutes.
AFTER:  (4) A Reg-Up and Reg-Down qualification test for each Resource is conducted during a continuous 60-minute period agreed on in advance by the QSE and ERCOT. QSEs may qualify a Resource to provide Reg-Up or Reg-Down, or both, in separate testing. ERCOT shall administer the following test requirements…

### e18 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (4) · text copy line 304 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …tch Instruction. (3) A QSE providing Reg-Up or Reg-Down shall provide ERCOT with the data requirements of Section 6.5.5.2, Operational Data Requirements. Resources providing Reg-Up or Reg-Down must be capable of delivering the full amount of regulating capacity offered to ERCOT within five minutes. 
QUOTE: (4) A Reg-Up and Reg-Down qualification test for each Resource is conducted during a continuous 60-minute period agreed on in advance by the QSE and ERCOT. QSEs may qualify a Resource to provide Reg-Up or Reg-Down, or both, in separate testing.
AFTER:  ERCOT shall administer the following test requirements: (a) ERCOT shall confirm the date and time of the test with the QSE. (b) For the 60-minute duration of the test, when market and reliability conditions allow, the ERCOT Control Area Operator shall send a random sequence of increasing ramp, hold…

### e19 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (4)(c)(i)-(iv) · text copy line 312 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …that at least one five-minute test interval is used to test the Resource's ability to achieve the entire amount of Reg-Up or Reg-Down requested for qualification. (c) ERCOT shall measure and record the average real power output for each minute of the Resource(s) being tested represented by the QSE. 
QUOTE: (i) During at least one five minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Generation/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance (GREDP/CLREDP/ESREDP) calculated in accordance with Section 8.1.1.4.1, Regulation Service and Generation Resource/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance, and Ancillary Service Capacity Performance Metrics, over the entire five minute interval must be less than or equal to 3.5%.
AFTER:  (ii) Additionally, in all other test sequence intervals, the Resource's measured GREDP/CLREDP/ESREDP must be less than or equal to 5% as calculated for the entire duration of each test interval. (iii) During at least one five-minute duration interval selected to evaluate each of the Reg-Up and Reg-…

### e20 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (4)(c)(iii)-(iv) · text copy line 318 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …t one five-minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Energy Storage Resource Energy Deployment Performance (ESREDP) calculated in accordance with Section 8.1.1.4.1, over the entire five minute interval must be less than or equal to 3.0%. 
QUOTE: (iv) For an ESR, in all other test sequence intervals, the Resource's measured ESREDP must be less than or equal to 3.0% as calculated for the entire duration of each test interval.
AFTER:  (d) On successful demonstration of the above test criteria, ERCOT shall qualify that the Resource is capable of providing Regulation Service and shall provide a copy of the certificate to the QSE and the Resource. (5) The maximum quantity of Reg-Up or Reg-Down that an individual Resource is qualifi…

### e21 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, Regulation Service Requirement Details, Procedure (effective 1 January 2026) · text copy line 41

BEFORE: …d regulation or net load variability. An adjustment may also be made based on historic CPS1 performance. Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. 
QUOTE: For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load - wind - solar) forecast error for the same month of the previous two years. For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load - wind - solar) forecast error for the same month of the previous two years.
AFTER:  To better reflect balancing needs within the hours, the net load variability may be updated to account for accumulated Area Control Error (ACE). In order to consider the increased amount of wind and solar penetration, ERCOT will calculate the increase in installed wind and solar generation capacity…

### e22 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Methodology, Regulation Service Requirement Details, Procedure (effective 1 January 2026) · text copy line 47

BEFORE: …l changes to the annually posted amounts are needed then the revised amounts for the following month will be posted to the MIS prior to the 20^(th) of the current month. ERCOT may include adjustments for hours in a month considering monthly average for CPS1 and 12-month rolling average CPS1 scores. 
QUOTE: If it is determined that during the course of the year that the ERCOT monthly average for CPS1 score was less than 140% for a specific month, ERCOT will apply an extra 10% of both Reg-Up and Reg-Down for hours in which the CPS1 score was less than 140%.
AFTER:  Additionally, if the ERCOT 12-month rolling average CPS1 score is less than 140%, for the next month ERCOT will procure an extra 10% of both Reg-Up and Reg-Down for hours in which the hourly CPS1 score was less than 140%. This value will increase to 20% if the CPS1 score falls below 100%. Responsiv…

### e23 · `ercot-as-methodology-2027` · tier 2 · Recommendation regarding 2027 ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (Board) (2026-09-07)
locator: Board presentation (September 2026), Key Takeaways · text copy line 34

BEFORE: …d is required to review and recommend approval of ERCOT's AS methodology. Any such recommendations require approval by the Public Utility Commission of Texas before implementation. Voting Items ERCOT requests the Board to recommend approval of the 2027 Ancillary Services Methodology Key Takeaways • 
QUOTE: For 2027, ERCOT is not proposing any change to the methodology for Regulation Service (Reg Up/Reg Down) and Responsive Reserve Service (RRS); their quantities reflect moving history forward.
AFTER:  • ERCOT is proposing two measured parameter changes for ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve Service (Non-Spin) - the headroom credit and the target reserve level - that result in quantities meeting the reliability needs of the system. Background PUBLIC • • • Ancillary …

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(a), Max Demand Price table · text copy line 2430 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …s of each Ancillary Service product procured until the MCL is satisfied are priced as follows: --------------------------------------------------------------------------------------- Parameter Unit Current Value --------------------------- ------------- --------------------------------------------- 
QUOTE: Reg-Up Max Demand Price $/MWh VOLL + 4,052
AFTER:  RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 Non-Spin Max Demand Price $/MWh VOLL --------------------------------------------------------------------------------------- (b) Beyond the MCL, the nonlinear segments of the AORDC are disaggregated as follows: (i) First,…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (7)(b), minimum prices table · text copy line 2454 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …s of the AORDC priced above $0.01/MWh to Non-Spin. The minimum prices for Reg-Up and RRS are defined as follows: ------------------------------------------------------------------------------ Parameter Unit Current Value ------------------ ------------- --------------------------------------------- 
QUOTE: Reg-Up Min Price $/MWh 250
AFTER:  RRS Min Price $/MWh 100 ------------------------------------------------------------------------------ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace …

### e26 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (3), ESREDP · text copy line 906 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: … averaged for the five-minute clock interval ASP = Average Set Point = the time-weighted average of the Resource's UDSP for the five-minute clock interval (3) ERCOT shall compute the ESREDP for ESRs. The ESREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows: 
QUOTE: ESREDP (%) = ABS[((ATPF - AEPFR)/(ASP)) - 1.0] * 100 ESREDP (MW) = ABS(ATPF - AEPFR - ASP)
AFTER:  Where: ATPF = Average Telemetered Power Flow = the average telemetered power flow of the Energy Storage Resource for the five-minute clock interval. ASP = Average Set Point = the time-weighted average of UDSP, for the five-minute clock interval. ∆frequency is actual frequency minus 60 Hz. EPFR = Es…

### e27 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (9)(a) · text copy line 1054 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …iv) Five-minute clock intervals which begin 30 minutes or less after a recall of Non-Spin when the Resource was deployed for Non-Spin. (9) All ESRs shall meet the following ESREDP criteria each month. ERCOT will report non-compliance of the following performance criteria to the Reliability Monitor: 
QUOTE: (a) An ESR must have an ESREDP less than the greater of V% or W MW for 85% of the five-minute clock intervals in the month during which ESREDP was calculated.
AFTER:  (b) Additionally, all ESRs will also be measured for performance specifically during intervals in which ERCOT has declared EEA Level 1 or greater. These Resources must meet the following ESREDP criteria for the time window that includes all five-minute clock intervals during which EEA was declared.…

### e28 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (10) · text copy line 1077 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (10) The GREDP/CLREDP/ESREDP performance criteria in paragraphs (6) through (9) above shall be subject to review and approval by TAC. 
QUOTE: The GREDP/CLREDP/ESREDP performance criteria variables V, W, X, Y, and Z shall be posted to the ERCOT website no later than three Business Days after TAC approval.
AFTER:  (11) If at the end of the month during which GREDP was calculated, a Resource has a GREDP less than X% or Y MW for 85% of the five-minute clock intervals, the Reliability Monitor shall, at the request of the QSE, recalculate GREDP excluding the five-minute clock intervals when a Resource is deploye…

### e29 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.1, Regulation Service Capacity Monitoring Criteria, paragraph (2) · text copy line 820 · heading above: 8.1.1.3.1 Regulation Service Capacity Monitoring Criteria

BEFORE: …g-Up and Reg-Down. When determining this available capacity, ERCOT shall consider for each Resource the Resource Status, the actual generation or Load, the Ancillary Service award for Reg-Up and Reg-Down, the HSL, the LSL, ramp rates, and the Resource's qualification to provide Reg-Up and Reg-Down. 
QUOTE: (2) For the Reg-Up and Reg-Down capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Reg-Up or Reg-Down reflected in that capability must be limited to the amount of Reg-Up or Reg-Down that can be sustained by the Resource for at least 30 minutes.
AFTER:  8.1.1.3.2 Responsive Reserve Capacity Monitoring Criteria (1) ERCOT shall continuously monitor the capacity of each Resource to provide RRS. ERCOT shall consider for each Resource the Resource Status, actual generation or Load, the Ancillary Service award for RRS, the HSL, the LSL, any other Resour…

### e30 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision, Regulation Service and RRS bullet (NPRR1282, PUCT approval 7/31/25) · text copy line 66

BEFORE: …mendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002, Disturbance Control Standard - Contingency Reserve for Recovery from a Balancing Contingency Event. | | | | | | | | | | - 
QUOTE: Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT's analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT's obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
AFTER:  | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. A one-hour duration for RUC studies is appropriate to both respect an E…

### e31 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 23, ESR Participation in the DAM with the RTC+B Project, item 4 · text copy line 618 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ure is based on imbalance between DAM and Real-Time. [DAM Ancillary Service awards, Real-Time Ancillary Service awards, self-arrangement of Ancillary Services, and trades].) 3. The ESR will be awarded DAM Resource-specific energy sales and purchases and Resource-specific Ancillary Service sales. 4. 
QUOTE: Fast Responding Regulation Service (FRRS) is no longer a subset of Regulation.
AFTER:  5. For details on how the DAM will "convert" various EB/OCs; See 2-7-25 RTCBTF "DAM ESR Offers" presentation: https://www.ercot.com/files/docs/2025/02/07/7b.%20ESRs%20in%20DAM.pptx PUBLIC 23 Real-Time Market With the Implementation of the RTC+B Project (1 of 2) 1. EB/OCs for the ESR and the Ancilla…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 161 (OCR), Appendix I, Real-Time Co-Optimization, Figure A1 discussion · text copy line 9385

BEFORE: … AS. Figure A1 shows the average AS offers in the real-time market, aggregated by price level, from December 5, 2025, through February 2026. These data are similar to the offers from A-2 | 2025 State of the Market Report / / Appendix: Real-Time Co-Optimization the day-ahead market prior to go-live. 
QUOTE: Regulation service has the most expensive offers, consistent with its higher opportunity cost.
AFTER:  Figure A1: Aggregate Offers for AS in the RTM December 5, 2025 through February 2026 "! 0#N2 0#!!P0#N 0#!P0#!! 0#P0#! 0!P0# 4GR/S7U !"#A%&#'()'!G'+,,#A-'./01 C" C! %" %! A" A! #" #! " ! DE)G +G)G )D,-+ )D,./ ))G Although RTC has been our main focus, another major market upgrade that went live on De…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions · ocr copy line 7179, OCR page 169

BEFORE: …d outcomes in ERCOT's real-time energy market. Table A4 shows the annual aggregate costs of various ERCOT charges and payments in 2025, including ancillary services charges by type and different forms of uplift. Table A4: ERCOT 2025 Year at a Glance (Annual) Annual Total ($ Millions) Energy $17,659 
QUOTE: Regulation Up $11 Regulation Down $6
AFTER:  Responsive Reserve $52 NSRS $81 ECRS $30 CRR Auction Distribution ($1,810) Balancing Account Surplus ($293) Emergency Response Service $69 Revenue Neutrality Uplift $154 AS Imbalance Uplift $27 ERCOT Fee $308 ERO Passthrough Fee $30 Firm Fuel $46 Other Load Allocation $0 Net Cost of Electricity $16…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 62 (OCR), Figure 25 inset table, annual average DAM prices ($ per MWh) · ocr copy line 2719, OCR page 62

BEFORE: …RS price across May. Figure 25: Ancillary Service Prices 2021-2025 $12 ; @ Responsive 2021 2022 2023 2024 2025 = ENSRS $ per MWh = $10 Responsive] $300.87 $20.79 $21.04 $5.52 $2.74 5 @Reg-Up NSRS $81.56 $23.24 $15.53 $7.13 $3.65 a @ Reg-Down Reg-Up -_| $282.56 $25.62 $34.88 $7.36 --$2.97 & $8 1 ERS 
QUOTE: Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79
AFTER:  2 ECRS - - $73.18 $9.56 $2.65 2 z= $6 3 5 $4 Nn o = 32 Ss = < $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 2025 3. AS Prices under RTC High NSRS prices also occurred in December, likely because of uncertainty about RTC. Looking at hourly day-ahead market prices for NSRS for the month of Decem…

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (4)(a) · text copy line 2865 · heading above: 6.5.7.6.2.1 Deployment of Regulation Service

BEFORE: …the Resource's Base Point in response to a change (up or down) in ERCOT System frequency to maintain the target ERCOT System frequency within predetermined limits according to the Operating Guides. (4) These requirements also apply to the deployment or recall of a deployment of Reg-Up and Reg-Down: 
QUOTE: (a) Deployment or recall of a deployment must be accomplished through use of an automatic signal from ERCOT to each QSE provider of Reg-Up and Reg-Down.
AFTER:  (b) ERCOT shall minimize Reg-Up and Reg-Down energy as much as practicable in each SCED cycle. (c) ERCOT shall settle energy provided by Reg-Up and Reg-Down at the Resource's Settlement Point Price. (d) ERCOT shall integrate the control signal sent to providers of Reg-Up and shall calculate the amo…

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1) · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …ffers and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards 
QUOTE: (1) Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e37 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.6.2.1, paragraph (10) · text copy line 2894 · heading above: 6.5.7.6.2.1 Deployment of Regulation Service

BEFORE: …formance Monitoring. (8) ERCOT shall issue Reg-Up and Reg-Down deployment Dispatch Instructions over ICCP. Those Dispatch Instructions must contain the change in MW output requested of the Resource. (9) Reg-Up and Reg-Down Dispatch Instructions shall be included as a component of a Resource's UDSP. 
QUOTE: (10) Upon the receipt of new Base Points and Ancillary Service awards from SCED, LFC will reset Regulation Service instructions to zero.
AFTER:  6.5.7.6.2.2 Deployment of Responsive Reserve (RRS) (1) RRS is intended to: (a) Help restore the frequency within the first few seconds of a significant frequency deviation of the interconnected transmission system; and (b) Provide energy during the implementation of an EEA. (2) ERCOT shall deploy R…

### e38 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (5) · text copy line 322 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …ss than or equal to 3.0% as calculated for the entire duration of each test interval. (d) On successful demonstration of the above test criteria, ERCOT shall qualify that the Resource is capable of providing Regulation Service and shall provide a copy of the certificate to the QSE and the Resource. 
QUOTE: (5) The maximum quantity of Reg-Up or Reg-Down that an individual Resource is qualified to provide is limited to the amount of Ancillary Service that can be sustained by the Resource for at least 30 minutes.
AFTER:  8.1.1.2.1.2 Responsive Reserve Qualification (1) RRS may be provided by: (a) On-Line Generation Resource capacity; (b) Resources capable of providing FFR; (c) Generation Resources operating in the synchronous condenser fast-response mode; (d) Load Resources controlled by high-set under-frequency re…

### e39 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (4)(c)(ii)-(iii) · text copy line 314 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: … calculated in accordance with Section 8.1.1.4.1, Regulation Service and Generation Resource/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance, and Ancillary Service Capacity Performance Metrics, over the entire five minute interval must be less than or equal to 3.5%. 
QUOTE: (ii) Additionally, in all other test sequence intervals, the Resource's measured GREDP/CLREDP/ESREDP must be less than or equal to 5% as calculated for the entire duration of each test interval. (iii) During at least one five-minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Energy Storage Resource Energy Deployment Performance (ESREDP) calculated in accordance with Section 8.1.1.4.1, over the entire five minute interval must be less than or equal to 3.0%.
AFTER:  (iv) For an ESR, in all other test sequence intervals, the Resource's measured ESREDP must be less than or equal to 3.0% as calculated for the entire duration of each test interval. (d) On successful demonstration of the above test criteria, ERCOT shall qualify that the Resource is capable of provi…

### e40 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, paragraph (4)(b) · text copy line 308 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …ducted during a continuous 60-minute period agreed on in advance by the QSE and ERCOT. QSEs may qualify a Resource to provide Reg-Up or Reg-Down, or both, in separate testing. ERCOT shall administer the following test requirements: (a) ERCOT shall confirm the date and time of the test with the QSE. 
QUOTE: (b) For the 60-minute duration of the test, when market and reliability conditions allow, the ERCOT Control Area Operator shall send a random sequence of increasing ramp, hold, and decreasing ramp control signals to the QSE for a specific Resource.
AFTER:  ERCOT shall maintain a duration interval, for each increasing ramp, hold, or decreasing ramp sequence, of no less than two minutes. The control signals may not request Resource performance beyond the HSL, LSL, and ramp rate limit agreed on prior to the test. During the test, ERCOT shall structure t…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e16, e3): Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. [e1] Regulation Down Service (Reg-Down) is defined in the Protocols in the same terms, and for a Generation Resource, Reg-Down capacity is the amount available below any Base Point but above the low limit of its frequency-responsive capacity. [e16][e3]
- **How it works #1** (cites e2, e35, e15, e1, e9): ERCOT dispatches regulation by a Load Frequency Control (LFC) signal, sent through an automatic signal from ERCOT to each QSE provider. [e2][e35] A generator or an ESR in discharge mode providing Reg-Up raises output when deployed and lowers it when recalled, while a Load Resource or an ESR in charge mode providing Reg-Up cuts load when deployed and restores it when recalled. [e2] ERCOT executes LFC every four seconds, which resolves the apparent conflict with the five-second figure: five seconds is the response time the service must meet, and four seconds is how often the control signal is issued. [e15][e1][e9]
- **How it works #2** (cites e6, e4, e5, e37): Regulation is deployed only for its own function: ERCOT may not substitute one ancillary service for another. [e6] ERCOT is to minimize regulation energy in each SCED cycle, and the energy delivered is settled at the resource's Settlement Point Price. [e4] For each resource providing regulation the implied ramp rate in MW per minute is the regulation award divided by five. [e5] When SCED issues new Base Points and awards, LFC resets regulation instructions to zero. [e37]
- **How it works #3** (cites e18, e17, e19, e39, e20): A regulation provider must be qualified. Each Resource takes a test during a continuous 60-minute period agreed in advance, and can qualify for Reg-Up, Reg-Down or both in separate tests. [e18] Resources must be able to deliver the full regulating capacity offered within five minutes. [e17] During the test the Resource's energy deployment performance error (GREDP, CLREDP or ESREDP) must be at or below 3.5% in at least one five-minute interval selected to evaluate each Reg-Up and Reg-Down amount tested, and at or below 5% in all other test intervals. [e19][e39] For an ESR the Protocols add an ESREDP limit of 3.0%, both in at least one such interval and in all other test sequence intervals. [e39][e20]
- **How it works #4** (cites e38, e29, e30) FLAG number-not-in-quote: 2025: The maximum Reg-Up or Reg-Down a Resource is qualified to provide is limited to what it can sustain for at least 30 minutes, and the same 30-minute limit applies to the capability the QSE reports to ERCOT. [e38][e29] ERCOT's analysis behind NPRR1282, approved by the PUCT on 31 July 2025, concluded the Regulation and RRS duration requirement should go from 15 to 30 minutes to reduce the risk of ERCOT violating NERC BAL-001 if SCED is not available. [e30]
- **Formula #1** (cites e26, e27, e28): Performance after the fact is measured with the Energy Deployment Performance error. For an ESR, ESREDP (%) is the absolute value of (average telemetered power flow minus the average estimated primary frequency response, divided by the average set point, minus 1) times 100; in MW it is the absolute value of telemetered flow minus estimated primary frequency response minus set point. [e26] An ESR must have ESREDP below the greater of V% or W MW in 85% of the five-minute clock intervals in the month during which ESREDP was calculated, and the values of V and W are posted on the ERCOT website within three Business Days of TAC approval. [e27][e28]
- **ERCOT context #2** (cites e21, e22, e23) FLAG number-not-in-quote: 2026: ERCOT sizes regulation from history: base Reg-Up is the 95th percentile of positive net load forecast error and base Reg-Down the 95th percentile of negative error, for the same month of the previous two years, under the methodology effective 1 January 2026. [e21] If a monthly average CPS1 score is below 140%, ERCOT adds an extra 10% of both Reg-Up and Reg-Down in hours where the score was below 140%. [e22] For 2027 ERCOT is not proposing any change to the Regulation methodology; its September 2026 Board recommendation says quantities reflect moving history forward. [e23]
- **ERCOT context #3** (cites e10, e12, e36, e24, e25, e14, e31): The IMM calls the December 2025 RTC go-live the most noteworthy 2025 development for ancillary services; since then ERCOT also procures ancillary services in real time and day-ahead awards are a financial rather than physical obligation. [e10][e12] Under RTC, awards are based on Resource capability including state of charge and on ASDCs. [e36] The Reg-Up ASDC has a maximum demand price of VOLL plus 4,052 $/MWh and a minimum price of 250 $/MWh in the current text. [e24][e25] ERCOT monitors ESR Reg-Up and Reg-Down capability considering the SCED duration requirements. [e14] ERCOT's July 2025 RTC+B battery overview says Fast Responding Regulation Service (FRRS) is no longer a subset of Regulation. [e31]
- **ERCOT context #4** (cites e34, e33, e32) FLAG number-not-in-quote: 2021, 2025, 2026: On prices and cost, the IMM's Figure 25 inset table reports annual average prices for Reg-Down of $116.16, $9.64, $15.19, $3.90 and $1.79 per MWh for 2021 to 2025 (OCR reading), and 2025 regulation charges of $11 million for Reg-Up and $6 million for Reg-Down. [e34][e33] The IMM says regulation has the most expensive offers in the real-time market (average offers, 5 December 2025 through February 2026), consistent with its higher opportunity cost. [e32]
- **Key facts #1** (cites e1, e15): - Reg-Up provides capacity that can respond to ERCOT signals within five seconds; LFC runs every four seconds. [e1][e15]
- **Key facts #4** (cites e18, e17, e39, e20): - Qualification: 60-minute test, full capacity deliverable within five minutes, ESREDP at or below 3.0% in the evaluated and all other test intervals for an ESR. [e18][e17][e39][e20]
- **Key facts #5** (cites e38, e29): - Qualified and reported quantity is limited to what can be sustained for at least 30 minutes. [e38][e29]
- **Key facts #7** (cites e8, e34) FLAG number-not-in-quote: 2025: - 2025: ESRs provided 94% of Reg-Up and 86% of Reg-Down on average; Reg-Down's 2025 annual average price was $1.79/MWh per the IMM's Figure 25 inset (OCR). [e8][e34]
- **Common confusion #1** (cites e2, e13, e3, e1, e15): Regulation is not the same as RRS: ERCOT dispatches Reg-Up by an LFC signal, while RRS is used in response to a significant frequency deviation. [e2][e13] Reg-Up and Reg-Down are separate products, and for a Generation Resource, Reg-Down capacity is the amount available below the Base Point. [e3] The five-second response requirement and the four-second LFC cycle are different things. [e1][e15]
- **Questions #8** (cites e18, e40, e17, e39, e20): It passes a 60-minute test where, when market and reliability conditions allow, ERCOT sends a random sequence of ramp-up, hold and ramp-down signals, delivers the full amount within five minutes, and keeps ESREDP at or below 3.0% in the evaluated interval and in all other test intervals. [e18][e40][e17][e39][e20]
- **Questions #10** (cites e22): The AS Methodology says that when the monthly average CPS1 score is under 140%, ERCOT applies an extra 10% of both Reg-Up and Reg-Down in the hours where the score was under 140%. (Guidance: the extra quantity is a margin against poor control performance.) [e22]
- **Questions #12** (cites e30): ERCOT's NPRR1282 analysis says the Regulation and RRS duration requirement should be changed from 15 to 30 minutes to reduce the risk of violating NERC BAL-001 if SCED is not available. [e30]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): Regulation is one of the ancillary services; see that topic for the AS Plan, obligations and costs. [e1]
- **Link to rrs** (cites e13, e2): contrasts-with RRS (Responsive Reserve Service): RRS is a service used to restore or maintain frequency in response to a significant frequency deviation, while ERCOT dispatches Reg-Up by an LFC signal. [e13][e2]
- **Link to ecrs** (cites e7): related ECRS (ERCOT Contingency Reserve Service): ECRS provides backup to Reg-Up. [e7]
- **Link to energy-storage-resource** (cites e2, e8): related Energy Storage Resource (ESR): ESRs, in charge or discharge mode, supply most regulation. [e2][e8]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): ERCOT minimizes regulation energy in each SCED cycle. [e4]
- **Link to rtc-b** (cites e12): related RTC+B (Real-Time Co-optimization + Batteries): Since RTC, ERCOT also procures ancillary services in real time. [e12]
- **Link to asdc** (cites e24, e25): related ASDC (Ancillary Service Demand Curves): The Reg-Up ASDC has a maximum demand price of VOLL plus 4,052 $/MWh and a minimum price of 250 $/MWh in the current Protocol text. [e24][e25]
- **Link to prc** (cites e14): related PRC (Physical Responsive Capability): Reg-Up and Reg-Down capability is one of the items in ERCOT's Ancillary Services Capacity Monitor in real time. [e14]

