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

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.1, Ancillary Services Procurement Targets · text copy line 3885

BEFORE: …ubsequent years and remained roughly the same from 2024 to 2025. 31 Despite the consistent total volume of ancillary services, procurement volumes changed notably across products: • ECRS volume decreased by over 19% because of the removal of the "adjustment for risk coverage" during sunset hours. • 
QUOTE: Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error.
AFTER:  • NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors. Our section on ERCOT's AS Methodology provides more detail on this topic. Figure 24: Average Ancillary Service Capacity by Month !"#A%%&'()*+',A#+)-+./A'+M+"1)234R "!#!!! +#!!! U9:;<4:=>9 OMUM J , U9?@A; U9?@3<B4 CaUM…

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

## Statements to check

- **Definition #1** (cites e1, e3): Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. [e1] Regulation Down (Reg-Down) is the matching capacity below a Generation Resource's Base Point, down to its low limit, that may be called on to change output to maintain system frequency. [e3]
- **How it works #1** (cites e2, e9): ERCOT dispatches regulation by a Load Frequency Control (LFC) signal. A generator or an ESR in discharge mode providing Reg-Up raises output when deployed and lowers it when recalled, while a Load Resource or an ESR in charge mode providing Reg-Up cuts load when deployed and restores it when recalled. [e2] The IMM describes the LFC signal as going out every four seconds. [e9]
- **How it works #2** (cites e6, e4, e5): Regulation is deployed only for its own function: ERCOT may not substitute one ancillary service for another. [e6] ERCOT is to minimize regulation energy in each SCED cycle, and the energy delivered is settled at the resource's Settlement Point Price. [e4] For each resource providing regulation the implied ramp rate in MW per minute is the regulation award divided by five. [e5]
- **ERCOT context #1** (cites e8, e11, e10, e12): Regulation is the product batteries dominate: in 2025 ESRs on average provided 94% of Reg-Up and 86% of Reg-Down. [e8] Regulation volumes in the 2025 AS Plan rose, by 7.4% for Reg-Up and 3.3% for Reg-Down, because of higher five-minute net load forecast error. [e11] The most noteworthy 2025 development for ancillary services was RTC going live in December, after which ERCOT also procures ancillary services in real time. [e10][e12]
- **Key facts #1** (cites e1): - Reg-Up provides capacity that can respond to ERCOT signals within five seconds. [e1]
- **Key facts #2** (cites e2, e9, e4): - ERCOT dispatches Reg-Up by an LFC signal, and regulation capacity responds to LFC instructions; regulation energy is settled at the Resource's Settlement Point Price. [e2][e9][e4]
- **Key facts #3** (cites e5): - Implied ramp rate in MW per minute equals the regulation award divided by five. [e5]
- **Key facts #4** (cites e7): - ECRS provides backup to Reg-Up. [e7]
- **Key facts #5** (cites e8) FLAG number-not-in-quote: 2025: - 2025: ESRs provided 94% of Reg-Up and 86% of Reg-Down on average. [e8]
- **Say it like this #1** (cites e2, e6, e8): Regulation is the fast frequency-balancing service: resources follow ERCOT's LFC signal up or down. Batteries now supply most of it, and ERCOT may not substitute another ancillary service for it. [e2][e6][e8]
- **Common confusion #1** (cites e2, e13, e3): Regulation is not the same as RRS: ERCOT dispatches Reg-Up by an LFC signal, while RRS is used in response to a significant frequency deviation. [e2][e13] Reg-Up and Reg-Down are separate products, and Reg-Down capacity is the amount available below the Base Point. [e3]
- **Questions #2** (cites e1, e2, e3): Reg-Up is capacity that can respond to ERCOT signals within five seconds and is deployed by raising output (or cutting load). [e1][e2] Reg-Down is the capacity available below the Base Point that can be called on to change output to maintain frequency. [e3]
- **Questions #4** (cites e4): ERCOT settles energy provided by Reg-Up and Reg-Down at the resource's Settlement Point Price, and it is to minimize regulation energy in each SCED cycle. [e4]
- **Questions #6** (cites e8) FLAG number-not-in-quote: 2025: Mostly batteries: ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025 on average. [e8]
- **Link to ancillary-services** (cites e1): part-of Ancillary Services (AS): Regulation is one of the ancillary services; see that topic for the AS Plan, obligations and costs. [e1]
- **Link to rrs** (cites e13, e2): contrasts-with RRS (Responsive Reserve Service): RRS is a service used to restore or maintain frequency in response to a significant frequency deviation, while ERCOT dispatches Reg-Up by an LFC signal. [e13][e2]
- **Link to ecrs** (cites e7): related ECRS (ERCOT Contingency Reserve Service): ECRS provides backup to Reg-Up. [e7]
- **Link to energy-storage-resource** (cites e2, e8): related Energy Storage Resource (ESR): ESRs, in charge or discharge mode, supply most regulation. [e2][e8]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): ERCOT minimizes regulation energy in each SCED cycle. [e4]
- **Link to rtc-b** (cites e12): related RTC+B (Real-Time Co-optimization + Batteries): Since RTC, ERCOT also procures ancillary services in real time. [e12]
