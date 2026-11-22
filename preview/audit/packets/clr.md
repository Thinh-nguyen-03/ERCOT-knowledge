# Audit packet: CLR (Controllable Load Resource) (clr)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Controllable Load Resource (CLR) · text copy line 2517

BEFORE: …n "Aggregate Load Resource (ALR)" upon system implementation.] ----------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- Controllable Load Resource (CLR) 
QUOTE: A Load Resource capable of controllably reducing or increasing consumption under Dispatch control by ERCOT.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1188: Insert the definition "Aggregate Load Resource (ALR)" below upon system …

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Resource · text copy line 2503

BEFORE: …nnected to the ERCOT transmission system that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets. Load Resource 
QUOTE: A Load capable of providing Ancillary Service to the ERCOT System and/or energy in the form of Demand response and registered with ERCOT as a Load Resource.
AFTER:  Aggregate Load Resource (ALR) A Controllable Load Resource (CLR) that is an aggregation of individual metered sites, each of which has less than ten MW of Demand response capability and all of which are located within a single Load Zone. -------------------------------------------------------------…

### e3 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Controllable Load Resources, Demand and Supply in ERCOT · text copy line 3288

BEFORE: … SCED, self-curtailment based on economic incentives, and reliability programs administered by ERCOT and transmission and distribution service providers (TDSPs). We cover the participation of load resources in the ancillary services markets in detail in Chapter III.C. 1. Controllable Load Resources 
QUOTE: The participation model of controllable load resources (CLRs) in SCED was implemented in 2014. It allows loads that can respond to 5-minute dispatch instructions to submit bids to buy electricity at specified price-quantity pairs. ERCOT can then dispatch them down when the clearing price exceeds those bids.
AFTER:  A few years ago, a substantial volume of load, predominantly cryptocurrency mines, began participating in the market as CLRs. In 2025, all 12 registered CLRs are cryptocurrency mines.12 The monthly average volume of demand from CLRs for 2023-2025 is shown in Figure 21 below. &"! Figure 21: Monthly …

### e4 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Controllable Load Resources · text copy line 3292

BEFORE: …nute dispatch instructions to submit bids to buy electricity at specified price-quantity pairs. ERCOT can then dispatch them down when the clearing price exceeds those bids. A few years ago, a substantial volume of load, predominantly cryptocurrency mines, began participating in the market as CLRs. 
QUOTE: In 2025, all 12 registered CLRs are cryptocurrency mines.
AFTER: 12 The monthly average volume of demand from CLRs for 2023-2025 is shown in Figure 21 below. &"! Figure 21: Monthly Average Aggregate Load for CLRs 2023-2025 !"#A%C#'()*')+%,'-.LM &!! %"! %!! A"! A!! #"! #!! "! ! D ( F*F D D * + , J . D ( F*F D D * + , J . D ( F*F D D * + , J . A!A% A!A& A!A" Figure…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive summary, 2025 · text copy line 2221 · heading above: 6.2 GW of solar, 7.3 GW of ESRs, 1.2 GW of wind, and 280 MW of gas turbines. Of this

BEFORE: …ly in ERCOT • Supply margins have grown substantially - the number of hours when PRC was less than 6.5 GW has fallen sharply and PRC has not dropped below 3 GW since 2023. The operating reserve margin increased mostly because of the rapid entry of renewable resources and energy storage resources. • 
QUOTE: The monthly average aggregate load from controllable load resources dropped to 240 MW in 2025. CLRs still consist entirely of cryptocurrency mines. Many of these mines deregistered as CLRs and migrated to ERCOT's Emergency Reserve Service, where they now account for 64% of ERS volume.
AFTER:  • Aggregate demand from cryptocurrency mines in ERCOT is 4.6 GW. We support measures that incentivize these price-responsive loads to register as CLRs, including NPRR 1188, which will introduce nodal pricing for CLRs, and NPRR 1244, which allows loads to register as CLRs even if they cannot provide…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.1(1), Set Point Deviation Charge · text copy line 6152 · heading above: 6.6.5.1 Resource Set Point Deviation Charge

BEFORE: …one A Self-Schedule. ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.5 Set Point Deviation Charge 6.6.5.1 Resource Set Point Deviation Charge (1) 
QUOTE: A QSE for a Generation Resource, ESR, or Controllable Load Resource (CLR) shall pay a Set Point Deviation Charge if the Resource did not follow Updated Desired Set Points (UDSPs) within defined tolerances, except when the UDSPs violate the Resource Parameters.
AFTER:  (2) The desired output from a Generation Resource, ESR, or CLR during a 15-minute Settlement Interval is calculated as follows: AASP _(q, r, p, i) = []AVGSP5M _(q, r, p, i, y) / 3 The above variables are defined as follows: ---------------------------------------------------------------------------…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Controllable Load Resources, discussion of RTC · text copy line 3392

BEFORE: …ute over exclusive rights to operate CLRs and the implementation of RTC. The patent 2025 State of the Market Report | 29 / / Demand and Supply in ERCOT dispute was resolved in April 2025, allowing cryptocurrency facilities to license the relevant patents at no cost and register and operate as CLRs. 
QUOTE: RTC allows CLRs to sell ancillary services in real-time with less risk of exposure to excessively high energy prices.
AFTER:  Before RTC, if a CLR received an AS award in the day-ahead market, it had to run in real-time according to the volume of the award. With RTC, CLRs can sell out of their day-ahead positions or forego the day-ahead market entirely and only sell AS in real-time when energy prices are favorable. Anothe…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive summary, 2025 · text copy line 2228 · heading above: 6.2 GW of solar, 7.3 GW of ESRs, 1.2 GW of wind, and 280 MW of gas turbines. Of this

BEFORE: …e load resources dropped to 240 MW in 2025. CLRs still consist entirely of cryptocurrency mines. Many of these mines deregistered as CLRs and migrated to ERCOT's Emergency Reserve Service, where they now account for 64% of ERS volume. • Aggregate demand from cryptocurrency mines in ERCOT is 4.6 GW. 
QUOTE: We support measures that incentivize these price-responsive loads to register as CLRs, including NPRR 1188, which will introduce nodal pricing for CLRs, and NPRR 1244, which allows loads to register as CLRs even if they cannot provide primary frequency response. Both NPRRs are scheduled for implementation in January 2027.
AFTER:  • ERCOT proposed a residential demand response program through NPRR 1296 that we find will undermine ERCOT's energy only market and its economic signals. Despite the significant subsidy needed to overcome residential consumers' limited price sensitivity, a resident may receive only up to $4 per mon…

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Resource Entity · text copy line 2654

BEFORE: …The date on which ERCOT declares that a Resource has completed all qualification testing administered by ERCOT as part of the Resource Interconnection process so that a Resource is approved for participation in ERCOT market operations. Resource Connectivity Node (see Electrical Bus) Resource Entity 
QUOTE: An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR995: Replace the above definition "Resource E…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.6.1(1)(a)(i)-(iii), Load Resource Participation · text copy line 4014 · heading above: 3.6.1 Load Resource Participation

BEFORE: …cluded in each Hub Bus. 3.5.3.2 Calculation of Hub Prices (1) ERCOT shall calculate Hub prices for each Settlement Interval as identified in the description of each Hub. 3.6 Load Participation 3.6.1 Load Resource Participation (1) A Load Resource may participate by providing: (a) Ancillary Service: 
QUOTE: (i) Regulation Up Service (Reg-Up) Service as a Controllable Load Resource (CLR) capable of providing Primary Frequency Response; (ii) Regulation Down Service (Reg-Down) Service as a CLR capable of providing Primary Frequency Response; (iii) Responsive Reserve (RRS) as a CLR qualified for Security-Constrained Economic Dispatch (SCED) Dispatch and capable of providing Primary Frequency Response, or as a Load Resource controlled by high-set under-frequency relay;
AFTER:  (iv) ERCOT Contingency Reserve Service (ECRS) as a CLR qualified for SCED Dispatch and capable of providing Primary Frequency Response, or as a Load Resource that may or may not be controlled by high-set under-frequency relay; +-----------------------------------------------------------------------…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.6.1(1)(a)(v)-(vi), (1)(b) · text copy line 4029 · heading above: 3.6.1 Load Resource Participation

BEFORE: …=====================================================================================================================+ +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (v) Non-Spinning Reserve (Non-Spin) as a CLR qualified for SCED Dispatch or as a Load Resource that is not a CLR and that is not controlled by under-frequency relay; and (vi) A Load Resource that is not a CLR cannot simultaneously provide Non-Spin and RRS in Real-Time; (b) Energy in the form of Demand response from a CLR in Real-Time via SCED;
AFTER:  (c) Emergency Response Service (ERS) for hours in which the Load Resource has a Resource Status of OUTL; and (d) Voluntary Load response in Real-Time. (2) Except for voluntary Load response and ERS, loads participating in any ERCOT market must be registered as a Load Resource and are subject to qua…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.6.1(4)-(5), Load Resource Participation (paragraph (5) as currently in force, before the NPRR1188 replacement) · text copy line 4043 · heading above: 3.6.1 Load Resource Participation

BEFORE: …s participating in any ERCOT market must be registered as a Load Resource and are subject to qualification testing administered by ERCOT. (3) All ERCOT Settlements resulting from Load Resource participation are made only with the Qualified Scheduling Entity (QSE) representing the Load Resource. (4) 
QUOTE: A QSE representing a Load Resource and submitting a bid to buy for participation in SCED, as described in Section 6.4.3.1, RTM Energy Bids, must represent the Load Serving Entity (LSE) serving the Load of the Load Resource. If the Load Resource is an Aggregate Load Resource (ALR), the QSE must represent the LSE serving the Load of all sites within the ALR. (5) The Settlement Point for a CLR is its Load Zone Settlement Point.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1188: Replace paragraph (5) above with the following upon system implementation:] | | | | (5) The Settlement Point for a CLR tha…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.6.1(2), Load Resource Participation · text copy line 4039 · heading above: 3.6.1 Load Resource Participation

BEFORE: …t a CLR cannot simultaneously provide Non-Spin and RRS in Real-Time; (b) Energy in the form of Demand response from a CLR in Real-Time via SCED; (c) Emergency Response Service (ERS) for hours in which the Load Resource has a Resource Status of OUTL; and (d) Voluntary Load response in Real-Time. (2) 
QUOTE: Except for voluntary Load response and ERS, loads participating in any ERCOT market must be registered as a Load Resource and are subject to qualification testing administered by ERCOT.
AFTER:  (3) All ERCOT Settlements resulting from Load Resource participation are made only with the Qualified Scheduling Entity (QSE) representing the Load Resource. (4) A QSE representing a Load Resource and submitting a bid to buy for participation in SCED, as described in Section 6.4.3.1, RTM Energy Bid…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (10) as proposed to be replaced by NPRR1188 (pending box, upon system implementation) · text copy line 2190
FLAG pending-box: | [NPRR1188: Replace paragraph (10) above with the following upon system implementation:] |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1188: Replace paragraph (10) above with the following upon system implementation:] | | | | (10) 
QUOTE: A CLR may consume energy only when dispatched by SCED to do so. A CLR may telemeter a status of OUTL only if the Resource is Off-Line and unavailable with its energy consumption at zero. In instances when the CLR is unable to follow SCED Dispatch Instructions but still consumes energy, the CLR must submit a Resource Status of ONHOLD.
AFTER:  Under all telemetered statuses, including OUTL, the remaining telemetry quantities submitted by the QSE shall represent the operating conditions of the CLR that can be verified by ERCOT. A QSE representing a CLR with a telemetered status of OUTL or ONHOLD is still obligated to provide any applicabl…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.3(1)-(2), Controllable Load Resource Set Point Deviation Charge for Over Consumption · text copy line 6454 · heading above: 6.6.5.3 Controllable Load Resource Set Point Deviation Charge for Over Consumption

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.5.3 Controllable Load Resource Set Point Deviation Charge for Over Consumption (1) 
QUOTE: ERCOT shall charge a QSE of a CLR, for over-consumption that exceeds the following tolerance. The tolerance is the greater of: (a) XO% of the AASP in the Settlement Interval; or (b) YO MW above the AASP in the Settlement Interval. (2) The CLR Set Point Deviation Charge for over-consumption variables XO and YO shall be subject to review and approval by the Technical Advisory Committee (TAC) and shall be posted to the ERCOT website no later than three Business Days after TAC approval.
AFTER:  (3) The charge to each QSE for non-excused over-consumption for each CLR, during a 15-minute Settlement Interval is calculated as follows: SPDAMT _(q, r, p, i) = -1 * Min (PRZ1, RTSPP _(p, i)) * Min (1, KP1) * OCONSM _(q, r, p, i) Where: OCONSM _(q, r, p, i) = Max [0, (ATPC _(q, r, p, i) - 1⁄4* Max…

### e20 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.3(3), variable PRZ1 · text copy line 6491 · heading above: 6.6.5.3 Controllable Load Resource Set Point Deviation Charge for Over Consumption

BEFORE: …ettlement Point per Controllable Load Resource-The amount over-consumed by the Controllable Load Resource r represented by QSE q at Settlement Point p for the 15-minute Settlement Interval i. KP1 none The coefficient applied to the Settlement Point Price for over-consumption charge, 1.0. PRZ1 $/MWh 
QUOTE: The price to use for the charge calculation when RTSPP is greater than -$20, -$20/MWh.
AFTER:  KLR1 none The percentage tolerance for over-consumption of a Controllable Load Resource, XO%. QLR1 MW The MW tolerance for over-consumption of a Controllable Load Resource, YO MW. q none A QSE. p none A Settlement Point. r none A Controllable Load Resource. i none A 15-minute Settlement Interval. y…

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.3.1(1)-(2), Controllable Load Resource Set Point Deviation Charge for Under Consumption · text copy line 6510 · heading above: 6.6.5.3.1 Controllable Load Resource Set Point Deviation Charge for Under Consumption

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.5.3.1 Controllable Load Resource Set Point Deviation Charge for Under Consumption (1) 
QUOTE: ERCOT shall charge a QSE for a CLR, for under-consumption if the average telemetered power consumption is below than the lesser of: (a) [100-XU]% of the AASP in the Settlement Interval; or (b) The AASP in the Settlement Interval minus YU MW.
AFTER:  (2) The CLR Set Point Deviation Charge for under-consumption variables XU and YU shall be subject to review and approval by TAC and shall be posted to the ERCOT website no later than three Business Days after TAC approval. (3) The charge to each QSE for non-excused under-consumption of each CLR, du…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.3.1(3), variable PRZ2 · text copy line 6545 · heading above: 6.6.5.3.1 Controllable Load Resource Set Point Deviation Charge for Under Consumption

BEFORE: …5-minute Settlement Interval i. UCONSM _(q, r, p, i) MWh Under-Consumption Volumes per QSE per Settlement Point per Controllable Load Resource-The amount under-consumed by the Controllable Load Resource r represented by QSE q at Settlement Point p for the 15-minute Settlement Interval i. PRZ2 $/MWh 
QUOTE: The price to use for the Set Point Deviation Charge for under-consumption calculation when RTSPP is less than $20/MWh, $20/MWh.
AFTER:  KLR2 The percentage tolerance for under-consumption of a Controllable Load Resource, XU%. QLR2 MW The MW tolerance for under-consumption of a Controllable Load Resource, YU MW. q none A QSE. p none A Settlement Point. r none A Controllable Load Resource. i none A 15-minute Settlement Interval. y no…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.1(2), variable AASP · text copy line 6163 · heading above: 6.6.5.1 Resource Set Point Deviation Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- AASP _(q, r, p, i) MW 
QUOTE: Average Aggregated Set Point per QSE per Settlement Point per Resource-The average of the Average Five Minute Clock Interval Set Point (AVGSP5M) of Resource r represented by QSE q at Settlement Point p, for the 15-minute Settlement Interval i.
AFTER:  Where for a Combined Cycle Train, AASP is calculated for the Combined Cycle Train considering all UDSPs to any Combined Cycle Generation Resources within the Combined Cycle Train. AVGSP5M _(q, r, p, i, y) MW Average Five Minute Clock Interval Set Point per QSE per Settlement Point per Resource -The…

### e24 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Aggregate Load Resource (ALR) · text copy line 2507

BEFORE: …than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets. Load Resource A Load capable of providing Ancillary Service to the ERCOT System and/or energy in the form of Demand response and registered with ERCOT as a Load Resource. Aggregate Load Resource (ALR) 
QUOTE: A Controllable Load Resource (CLR) that is an aggregation of individual metered sites, each of which has less than ten MW of Demand response capability and all of which are located within a single Load Zone.
AFTER:  ----------------------------------------------------------------------------------------------------- [NPRR1188: Delete the above definition "Aggregate Load Resource (ALR)" upon system implementation.] -------------------------------------------------------------------------------------------------…

### e25 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Provisional Controllable Load Resource (PCLR) · text copy line 2530

BEFORE: …======================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Provisional Controllable Load Resource (PCLR) 
QUOTE: A Controllable Load Resource (CLR) that is required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met.
AFTER:  Settlement Only Generator (SOG) A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers. These units are comprised of: --------------------…

### e26 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.5.5(2), Provisional Controllable Load Resources (PCLRs) · text copy line 883 · heading above: 16.5.5 Provisional Controllable Load Resources (PCLRs)

BEFORE: …tity election to change the Large Load's registration status. After the end date, the PCLR's existing registration shall remain unchanged until the Resource Entity elects to modify the Resource registration for the Large Load. A PCLR may convert to another type of Load Resource or to firm Load. (2) 
QUOTE: A Resource Entity that desires to de-register a Large Load as a PCLR prior to its end date shall provide ERCOT no less than 120 days' written notice. Upon de-registration, the Large Load shall be limited to the maximum Low Power Consumption (LPC) amounts identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan (LCP) until new interconnection studies have been performed according to applicable ERCOT Protocols and Guides.
AFTER:  (3) If ownership of a Large Load registered as a PCLR is transferred to another Entity, the acquiring Entity shall be bound by all obligations applicable to the PCLR under these Protocols and Guides. The acquiring Entity shall notify ERCOT and submit an updated, signed, and notarized Part A or Part…

### e27 · `ercot-nprr1325-puct-report` · tier 1 · NPRR1325 PUCT Report (Batch Zero large load interconnection study) (2026-06-18)
locator: NPRR1325 PUCT Report, Effective Date · text copy line 14

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------+ | Effective Date | | 
QUOTE: Upon implementation of Planning Guide Revision Request (PGRR) 145, Batch Zero Process for Large Load Interconnections
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `ercot-nprr1325-puct-report` · tier 1 · NPRR1325 PUCT Report (Batch Zero large load interconnection study) (2026-06-18)
locator: NPRR1325 PUCT Report, PUCT Decision · text copy line 94

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------+ | PUCT Decision | | 
QUOTE: On 6/18/26, the PUCT approved NPRR1325 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e29 · `ercot-nprr1325-puct-report` · tier 1 · NPRR1325 PUCT Report (Batch Zero large load interconnection study) (2026-06-18)
locator: NPRR1325 PUCT Report, proposed Section 4.4.9.4.4, Adjusted Bid Caps, paragraph (1)(c) · text copy line 897 · heading above: 4.4.9.4.4 Adjusted Bid Caps

BEFORE: …pare the transmission constraint list generated in paragraph (a) above from the previous SCED run against all active constraints in the current run. (c) For any active transmission constraint in the current SCED which matches the list identified in paragraph (a) above, all PCLRs will be considered: 
QUOTE: (i) Where a PCLR has a Shift Factor equal to or less than -2% on the list identified in paragraph (c) above, the constraint contribution shall be calculated by multiplying the maximum Shadow Price of that constraint by the Shift Factor of the PCLR for each constraint identified in paragraph (c) above. (A) If no such constraints exist, or where the PCLR has a Shift Factor greater than -2%, no Adjusted Bid Cap (ABC) will be applied. (B) Otherwise, the Adjusted Bid Cap (ABC) used in Step 2 of the two-step SCED process as described in paragraph (14)(b)(iv) of Section 6.5.7.3 will be set at the lowest absolute value of these constraint contributions plus the System Lambda of the first step in the two-step SCED process described in paragraph (14)(a) of Section 6.5.7.3 minus $0.01/MWh.
AFTER:  6.5.7.3 Security Constrained Economic Dispatch (1) The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately …

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Controllable Load Resources, page 30 · text copy line 3398

BEFORE: …ard. With RTC, CLRs can sell out of their day-ahead positions or forego the day-ahead market entirely and only sell AS in real-time when energy prices are favorable. Another major improvement is NPRR 1188, which the PUCT approved in November 2024 and13 which will introduce nodal pricing for CLRs.14 
QUOTE: Currently, CLRs are dispatched and settled using zonal prices. This creates an economic challenge for CLRs at nodes with structurally low energy costs, such as those in the Panhandle near large volumes of renewable generation, where the zonal price is often higher than the cost of serving their load.
AFTER:  A related rule change also approved in November 2024,15 NPRR 1244, will allow loads to register as CLRs even if they cannot provide primary frequency response (PFR). This change expands participation to wholesale consumers that SCED can dispatch, improving reliability and real-time price formation …

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on Controllable Load Resources, footnotes 14-15 (page 30) · text copy line 3427

BEFORE: …s are examples of price responsive load in ERCOT, but we have limited visibility into price response outside of SCED. For example, how much cryptocurrency demand is economical at different electricity prices? What we do know is that 13 14 15 NPRR 1188: https://www.ercot.com/mktrules/issues/NPRR1188 
QUOTE: Although NPRR 1188 was approved in November 2024, its implementation is not complete yet. According to ERCOT project management, NPRR 1188 will be implemented in January 2027:
AFTER:  https://www.ercot.com/files/docs/2022/01/27/Revision_Requests_2026_04_14.xlsx NPRR 1244 is slated for implementation at the same time as NPRR 1188 in January 2027: https://www.ercot.com/mktrules/issues/NPRR1244 30 | 2025 State of the Market Report / / Demand and Supply in ERCOT cryptocurrency mines…

### e39 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, pending NPRR1188 note after ALR definition · text copy line 2510

BEFORE: …able Load Resource (CLR) that is an aggregation of individual metered sites, each of which has less than ten MW of Demand response capability and all of which are located within a single Load Zone. ----------------------------------------------------------------------------------------------------- 
QUOTE: [NPRR1188: Delete the above definition "Aggregate Load Resource (ALR)" upon system implementation.]
AFTER:  ----------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- Controllable Load Resource (CLR) A Load Resource capable of controllably reducing or increasing…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e11, e12, e24, e39): The CLR participation model in SCED was implemented in 2014. It lets loads that can respond to 5-minute dispatch instructions submit bids to buy electricity at price-quantity pairs, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3] The Protocols let a Load Resource provide energy as demand response from a CLR in Real-Time via SCED. [e11] A QSE that submits a bid to buy for a Load Resource must represent the LSE serving that Load; for an Aggregate Load Resource it must represent the LSE serving all sites in the ALR. [e12] An ALR is a CLR that aggregates individual metered sites, each with less than ten MW of demand response capability, all in a single Load Zone. [e24] NPRR1188 is pending and would delete this ALR definition upon system implementation, so this is current text only. [e39]
- **How it works #2** (cites e10, e11, e13): Ancillary services: a Load Resource can provide Reg-Up and Reg-Down as a CLR capable of Primary Frequency Response, and RRS as a CLR qualified for SCED dispatch and capable of Primary Frequency Response (or as a Load Resource controlled by high-set under-frequency relay). [e10] Non-Spin can be provided as a CLR qualified for SCED Dispatch, and a Load Resource that is not a CLR cannot provide Non-Spin and RRS simultaneously in Real-Time. [e11] Except for voluntary Load response and ERS, loads participating in any ERCOT market must be registered as a Load Resource and pass ERCOT qualification testing. [e13]
- **Formula #1** (cites e19, e23, e20): Set Point Deviation Charge, over-consumption. ERCOT charges the QSE of a CLR for over-consumption above a tolerance equal to the greater of XO% of the AASP or YO MW above the AASP in the Settlement Interval. [e19] AASP is the average of the Average Five Minute Clock Interval Set Points (AVGSP5M) of the Resource for the 15-minute Settlement Interval. [e23] XO and YO are set by TAC review and approval and posted to the ERCOT website no later than three Business Days after TAC approval. [e19] The charge calculation uses the Real-Time Settlement Point Price (RTSPP) together with a reference price, PRZ1, which is the price to use when RTSPP is greater than -$20, namely -$20/MWh. [e20] The saved text gives the formula as an equation with variables; the sign convention should be read from the Protocol itself.
- **Formula #2** (cites e21, e22): Set Point Deviation Charge, under-consumption. ERCOT charges when average telemetered consumption is below the lesser of [100-XU]% of the AASP or the AASP minus YU MW. [e21] The price variable PRZ2 is the price to use when RTSPP is less than $20/MWh, namely $20/MWh. [e22]
- **ERCOT context #3** (cites e34, e12, e8, e37, e18) FLAG number-not-in-quote: 3.6, 2025: The IMM says that currently CLRs are dispatched and settled at zonal prices, which creates an economic challenge for CLRs at structurally low-cost nodes such as the Panhandle. [e34] Protocol Section 3.6.1(5) currently gives the CLR its Load Zone Settlement Point. [e12] The IMM supports NPRR 1188 (nodal pricing for CLRs) and NPRR 1244 (registration without primary frequency response), both scheduled for January 2027 implementation per its 2025 report. [e8] A footnote in that report says NPRR 1188 was approved in November 2024 but not yet implemented, and that ERCOT project management expects implementation in January 2027. [e37] NPRR1188 is a pending replacement in the Protocol text: it would let a CLR consume only when dispatched by SCED, restrict OUTL to a CLR that is Off-Line with zero consumption, and require status ONHOLD when the CLR cannot follow Dispatch but still consumes. [e18]
- **ERCOT context #4** (cites e25, e26, e28, e27, e29): The Protocols define a Provisional CLR (PCLR) as a CLR required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met. [e25] A Resource Entity wishing to de-register a Large Load as a PCLR before its end date must give ERCOT at least 120 days' written notice, and the Large Load is then limited to the maximum LPC identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan until new studies are done. [e26] The PUCT approved NPRR1325 on 6/18/26, effective upon implementation of PGRR 145 (Batch Zero Process), so it is not in force until then. [e28][e27] The NPRR1325 language in the PUCT report (not yet in force) adds an Adjusted Bid Cap for PCLRs in Step 2 of two-step SCED: where a PCLR has a Shift Factor of -2% or lower on a matching constraint, the cap is the lowest absolute constraint contribution plus the first-step System Lambda minus $0.01/MWh, and where no such constraint exists or the PCLR's Shift Factor is greater than -2%, no cap applies. [e29]
- **Questions #10** (cites e6, e19, e21, e20, e22): Its QSE pays a Set Point Deviation Charge if it does not follow the set points within tolerance, unless the set points violate Resource Parameters. [e6] Over-consumption above the tolerance and under-consumption below it are each charged, using the reference prices PRZ1 (-$20/MWh) and PRZ2 ($20/MWh) with the RTSPP. [e19][e21][e20][e22]
- **Link to resource-types** (cites e1, e2): is-a Resource Types (Generation, Load, ESR, SOG): A CLR is a Load Resource, one of the Resource types. [e1][e2]
- **Link to sced** (cites e3): used-in SCED (Security-Constrained Economic Dispatch): CLRs can submit bids to buy electricity in SCED, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3]
- **Link to ers** (cites e5): contrasts-with ERS (Emergency Response Service): Many crypto mines left CLR status for ERS in 2025 (the IMM's report calls it the "Emergency Reserve Service"). [e5]
- **Link to rtc-b** (cites e7): related RTC+B (Real-Time Co-optimization + Batteries): RTC lets CLRs sell ancillary services in real time with less exposure to high energy prices. [e7]
- **Link to large-flexible-load** (cites e4, e5): related Large Flexible Load (LFL): Large price-responsive loads such as crypto mines are the CLR population in the IMM's account. [e4][e5]
- **Link to resource-entity** (cites e9): related Resource Entity: A Load Resource is owned or controlled by a Resource Entity. [e9]
- **Link to ancillary-services** (cites e10, e11): used-in Ancillary Services (AS): A CLR can provide Reg-Up, Reg-Down, RRS and Non-Spin when qualified. [e10][e11]
- **Link to settlement-point** (cites e12): related Settlement Point: The Protocols currently give a CLR its Load Zone Settlement Point. [e12]
- **Link to large-load-interconnection** (cites e25, e26): related Large Load Interconnection & Batch Zero: A Provisional CLR is a CLR that must keep its registration until defined exit criteria are met; on early de-registration a Large Load is limited to the maximum LPC in the Batch Zero Interconnection Study. [e25][e26]
- **Link to nprr** (cites e28, e27): related NPRR (Nodal Protocol Revision Request): NPRR1325 was approved by the PUCT on 6/18/26, effective upon PGRR145 implementation. [e28][e27]

