# Audit packet: Energy Storage Resource (ESR) (energy-storage-resource)

kind concept · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of High Sustained Limit (HSL) for an Energy Storage Resource (ESR) · text copy line 1188

BEFORE: …TE) (see Transmission Element) High Sustained Limit (HSL) High Sustained Limit (HSL) for an Energy Storage Resource (ESR) The limit established by the Qualified Scheduling Entity (QSE), expressed as a MW value that may be less than, equal to, or greater than zero, continuously updated in Real-Time. 
QUOTE: A positive HSL for an ESR describes the maximum sustained energy discharging capability of the ESR. A negative HSL for an ESR describes the minimum temporary energy charging capability of the ESR.
AFTER:  High Sustained Limit (HSL) for a Generation Resource The limit established by the Qualified Scheduling Entity (QSE), continuously updated in Real-Time, that describes the maximum sustained energy production capability of the Resource. High Sustained Limit (HSL) for a Load Resource The limit calcula…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.5, Energy Storage Resources, paragraph (1) · text copy line 4267 · heading above: 3.8.5 Energy Storage Resources

BEFORE: …ency set point specified in paragraph (3)(c) of Section 3.18, Resource Limits in Providing Ancillary Service, without corresponding RRS deployment by ERCOT. This provision applies only for the duration when RRS MW is deployed by automatic under-frequency relay action. 3.8.5 Energy Storage Resources 
QUOTE: (1) A QSE representing an ESR may update the telemetered HSL and/or LSL for the ESR in Real-Time to reflect state of charge limitations.
AFTER:  (2) A QSE representing an ESR co-located with a Generation Resource may update the telemetered LSL of the ESR when self-charging (using output from the Generation Resource). The updated LSL shall be equal to the MW level of self-charge. 3.8.6 Distribution Generation Resources (DGRs) and Distributio…

### e5 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 18, Energy Bid/Offer Curves (EB/OC), Current Operating Plan (COP), and Telemetry · text copy line 407 · heading above: 34.5 kV

BEFORE: …82: Ancillary Service Duration under Real-Time Co-Optimization were to be approved by PUC. 6. Also note the potential need for ESRs to resubmit forms to update each ESRs Response Reserve Service (RRS) % limit. PUBLIC 17 Energy Bid/Offer Curves (EB/OC), Current Operating Plan (COP), and Telemetry 1. 
QUOTE: EB/OC, COP information, and telemetry are provided for the ESR as a single device to cover the entire range from Low Sustained Limit (LSL) to High Sustained Limit (HSL); the maximum charging MW a negative number to maximum discharging MW positive number.
AFTER:  2. Continue to provide Hour Beginning State of Charge information for future hours in the COP for the ESR. 3. Telemetry is for the ESR as a single device. 4. All ERCOT systems including the Outage Scheduler, DAM, RT Market, RUC, and Settlements will "handle" the ESR as a single device. 5. The imple…

### e6 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 2 · text copy line 633 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …2) 1. EB/OCs for the ESR and the Ancillary Service offers are input data to SCED process. EB/OCs can be updated anytime. SCED uses the most recent EB/OC that is available in the database and the telemetered physical capability of the resource in determining awards (along with other information). 2. 
QUOTE: SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs.
AFTER:  3. The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is…

### e7 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 23, ESR Participation in the DAM with the RTC+B Project, item 2 · text copy line 610 · heading above: 8.1.1.2.1.3 (8)

BEFORE: ….1.1.3.3 (2) 4 hours 8.1.1.2.1.3 (8) 1 hour *Note FRRS is being eliminated with RTC. PUBLIC 22 ESR Participation in the DAM with the RTC+B Project 1. EB/OCs for the ESR is input to DAM. Resource-specific DAM energy sales and purchases that are cleared are cleared at the Resource Node of the ESR. 2. 
QUOTE: State of Charge (SOC) is not considered in the clearing for Energy and Ancillary Services in the DAM.
AFTER:  (If not careful, a QSE representing ESRs could "oversell" its capability in DAM. Financial Exposure is based on imbalance between DAM and Real-Time. [DAM Ancillary Service awards, Real-Time Ancillary Service awards, self-arrangement of Ancillary Services, and trades].) 3. The ESR will be awarded DA…

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.17.1, Regulation Service, paragraph (1) · text copy line 8096 · heading above: 3.17.1 Regulation Service

BEFORE: …vides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. The amount of Reg-Up capacity is the amount of capacity available from a Resource that may be called on to change output as necessary to maintain proper system frequency. 
QUOTE: A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output when deployed and decrease energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Up must be able to decrease Load when deployed and increase Load when recalled.
AFTER:  ERCOT dispatches Reg-Up by a Load Frequency Control (LFC) signal. (2) Regulation Down Service (Reg-Down) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. The amount of Reg-Down capacity is the amoun…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A, key insights on ancillary services in 2025 · text copy line 3787

BEFORE: …ot materially change. • May had the highest average AS procurement targets and the highest AS prices. NSRS prices were particularly high and were influenced by operator actions. • Energy storage resources continued to dominate most AS markets and increased their market share across all AS products. 
QUOTE: On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS.
AFTER:  • At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS. • The average load from CLRs in 2025 was only 240 MW, and they provided 9 MW of RRS, 11 MW of ECRS, and 5…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 716

BEFORE: …r capacity was commercialized in 2025, and annual solar generation increased by 49% compared to 2024. The share of total generation produced by solar resources increased from 10.4% in 2024 to 13.9% in 2025. Energy Storage Resource (ESR) capacity increased even more dramatically than solar capacity. 
QUOTE: The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024.
AFTER:  The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services. Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 202…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II, key insights on ESRs · text copy line 2195 · heading above: 6.2 GW of solar, 7.3 GW of ESRs, 1.2 GW of wind, and 280 MW of gas turbines. Of this

BEFORE: …eted because the net peak load hour has continued to shift into the evening. • Total energy storage capacity exceeded 17 GW, and average duration increased from 1.67 hours to 1.83 hours. The increase in average duration corresponds to ESR market participation shifting from AS to energy arbitrage. • 
QUOTE: Annual revenue per unit of ESR capacity declined by 37% in 2025 as revenues from providing AS fell by the same amount.
AFTER:  This revenue decline further explains why ESRs are shifting their business model to energy arbitrage because of strong competition in AS. • ESRs are offering more competitively. In 2025, 55% of energy offers were priced between $0-100 per MWh, up from 46% in 2024. Still, 18% of offers were submitte…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.1, ESR Fundamentals · text copy line 2819

BEFORE: …acity factor to describe this ratio across all hours while the capacity factor associated with peak load and net load captures this ratio only during these respective time frames. 20 | 2025 State of the Market Report / / Demand and Supply in ERCOT other power-to-gas systems, and other technologies. 
QUOTE: Because battery energy storage systems (BESSs) constitute virtually all ESRs in ERCOT, this report uses the term ESR interchangeably with batteries.
AFTER:  This section overviews ESR fundamentals and summarizes the rapid influx of ESR capacity into ERCOT in recent years. It also discusses the evolution of ESR participation in the energy market and the associated revenue trends. A detailed discussion of ESR participation in the ancillary services marke…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 719

BEFORE: …acity. The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024. The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services. 
QUOTE: Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation.
AFTER:  Changes in demand and supply have increased the average level of operating reserves in the ERCOT market, continuing a trend that started in 2022. Since then, the annual increase in supply has significantly outpaced increases in demand, resulting in a sharp decrease in the frequency of genuine short…

### e14 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 26, RUC with Implementation of RTC+B Project, item 2 · text copy line 674 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …Point Deviation calculation. PUBLIC 25 RUC with Implementation of RTC+B Project 1. DRUC and HRUC will be the tools to assess if enough capacity is available (and in the right locations) to ensure RTC SCED will have enough capacity (and State of Charge) to solve for energy and Ancillary Services. 2. 
QUOTE: Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed.
AFTER:  In other words, the RUC software will NOT RUC an ESR to come online. (ESRs should have a status of "ON", "ONOS" "ONTEST", "ONEMR", "ONHOLD" or "OUT." "OUT" should be used only if the resource is "broken.") 3. In evaluating the capability of the online Resources (and those shown off-line), the full …

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 717

BEFORE: …duced by solar resources increased from 10.4% in 2024 to 13.9% in 2025. Energy Storage Resource (ESR) capacity increased even more dramatically than solar capacity. The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024. 
QUOTE: The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services.
AFTER:  Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation. Changes in demand and supply …

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter III.A.2, Ancillary Services Prices · text copy line 3962

BEFORE: ….com/calendar/09192024TAC-Meeting 2025 State of the Market Report | 39 / / Ancillary Services 2. Ancillary Services Prices Figure 25 presents the monthly average DAM clearing prices for the five ancillary services in 2025, and the inset table shows the annual average prices for the last five years. 
QUOTE: Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter.
AFTER:  Until RTC was implemented, the entire AS plan was procured in the day-ahead market, often producing very high prices. The high prices shown for May in Figure 25 are an example. ERCOT operators increased an already high procurement target for NSRS in that month. Exercising their discretion, they inc…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.5.2, Operational Data Requirements, paragraphs (14)-(15) · text copy line 1266 · heading above: 6.5.5.2 Operational Data Requirements

BEFORE: …s in ambient conditions. (13) A QSE representing a Generation Resource other than a Combined Cycle Generation Resource may provide FRC telemetry for the Generation Resource only if the QSE or Resource Entity associated with that Generation Resource has first requested and obtained ERCOT's approval. 
QUOTE: (14) A QSE representing an ESR shall provide the following Real-Time telemetry data to ERCOT for each ESR: (a) Maximum State of Charge (MaxSOC), in MWh; (b) Minimum State of Charge (MinSOC), in MWh; (c) State of Charge (SOC), in MWh; (d) Maximum Operating Discharge Power Limit, in MW; and (e) Maximum Operating Charge Power Limit, in MW. (15) The QSE shall ensure that the SOC is greater than or equal to the MinSOC and less than or equal to the MaxSOC.
AFTER:  (16) In accordance with ERCOT Protocols, NERC Reliability Standards, and Governmental Authority requirements, ERCOT shall make the data specified in paragraph (14) available to any requesting TSP or DSP at the requesting TSP's or DSP's expense. +-----------------------------------------------------…

### e18 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of State of Charge (SOC) · text copy line 3006

BEFORE: …-------------------------------------------------------------------------------------------------------------+ State Estimator Bus An electrical node of common voltage at a substation that consists of one or more Electrical Buses tied together with closed breakers or switches. State of Charge (SOC) 
QUOTE: The stored energy in MWh, of an Energy Storage Resource (ESR), that can be injected into the grid at the Point of Interconnection (POI) or Point of Common Coupling (POCC).
AFTER:  Hour Beginning Planned SOC (HBSOC) The planned State of Charge, in MWh, at the beginning of an hour, as communicated to ERCOT by the Qualified Scheduling Entity (QSE) for the Resource. Maximum State of Charge (MaxSOC) The maximum amount of State of Charge, in MWh, of an ESR. Minimum State of Charge…

### e19 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Low Sustained Limit (LSL) for an Energy Storage Resource (ESR) · text copy line 1477

BEFORE: … be a non-negative number in MW. Low Sustained Limit (LSL) Low Sustained Limit (LSL) for an Energy Storage Resource (ESR) The limit established by the Qualified Scheduling Entity (QSE), expressed as a MW value that may be less than, equal to, or greater than zero, continuously updated in Real-Time. 
QUOTE: A negative LSL for an ESR describes the maximum sustained energy charging capability of the ESR. A positive LSL for an ESR describes the minimum temporary energy discharging capability of the ESR.
AFTER:  Low Sustained Limit (LSL) for a Generation Resource The limit established by the Qualified Scheduling Entity (QSE), continuously updatable in Real-Time, that describes the minimum sustained energy production capability of a Resource. Low Sustained Limit (LSL) for a Load Resource The limit calculate…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.5, Energy Storage Resources, paragraph (2) · text copy line 4269 · heading above: 3.8.5 Energy Storage Resources

BEFORE: …eployment by ERCOT. This provision applies only for the duration when RRS MW is deployed by automatic under-frequency relay action. 3.8.5 Energy Storage Resources (1) A QSE representing an ESR may update the telemetered HSL and/or LSL for the ESR in Real-Time to reflect state of charge limitations. 
QUOTE: (2) A QSE representing an ESR co-located with a Generation Resource may update the telemetered LSL of the ESR when self-charging (using output from the Generation Resource). The updated LSL shall be equal to the MW level of self-charge.
AFTER:  3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) (1) As a condition for the interconnection of a DGR or DESR, the affected Resource Entity, after consultation with the relevant Distribution Service Provider (DSP), shall provide documentation from the …

### e21 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.5, ESR Set Point Deviation Charge for Over Performance, paragraphs (1)-(2) · text copy line 6719 · heading above: 6.6.5.5 Energy Storage Resource Set Point Deviation Charge for Over Performance

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.5.5 Energy Storage Resource Set Point Deviation Charge for Over Performance 
QUOTE: (1) ERCOT shall charge a QSE for an ESR a Set Point Deviation Charge for over-performance if the telemetered generation or consumption exceeds the specified tolerance. (2) The tolerance is the greater of 3% of the AASP for the ESR in the Settlement Interval, or three MW above the AASP for the ESR in the Settlement Interval.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1014 and NPRR1029: Replace applicable portions of paragraph (2) above w…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.5.5.1, ESR Set Point Deviation Charge for Under Performance, paragraphs (1)-(2) · text copy line 6815 · heading above: 6.6.5.5.1 Energy Storage Resource Set Point Deviation Charge for Under Performance

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.5.5.1 Energy Storage Resource Set Point Deviation Charge for Under Performance 
QUOTE: (1) ERCOT shall charge a QSE for an ESR a Set Point Deviation Charge for under-performance if the telemetered generation or consumption is below the specified tolerance. (2) The tolerance is the lesser of 3% of the AASP for the ESR in the Settlement Interval, or three MW below the AASP for the ESR in the Settlement Interval.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1014 and NPRR1029: Replace applicable portions of paragraph (2) above w…

### e23 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3 · text copy line 638 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs. 3. 
QUOTE: The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements.
AFTER:  Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution. 4. QSE management of Ancillary Service responsibility across their portfolio no longer exists. PUBLIC 24 Real-Time Market With the Implementation of the RTC+B Project (2 of 2) 1. 6.6.5.5 ESR Set Point Deviatio…

### e24 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 11, High Level Scope of +B, items 1-2 · text copy line 228

BEFORE: …o reflect scarcity, but with RTCB it occurs within the optimization Energy & Ancillary Service Offers Base Points LMPs Telemetry Form Settlement Point Prices SCED PUBLIC Constraints Ancillary Service Awards Ancillary Service Demand Curves (ASDCs) Ancillary Service Prices 10 High Level Scope of "+B" 
QUOTE: 1. NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024)
AFTER:  3. NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024) 4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optim…

### e25 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 11, High Level Scope of +B, items 3-5 · text copy line 231

BEFORE: …ards Ancillary Service Demand Curves (ASDCs) Ancillary Service Prices 10 High Level Scope of "+B" 1. NPRR 1014: BESTF-4 Energy Storage Resource Single Model (Approved December 2020) 2. NPRR 1204: Considerations of State of Charge with Real-Time CoOptimization Implementation (Approved February 2024) 
QUOTE: 3. NPRR 1236: RTC+B Modifications to RUC Capacity Short Calculations (Approved November 2024) 4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optimization (Approved at the ERCOT Board of Directors June 24, 2025)
AFTER:  6. Not part of RTC+B Project. (On the back burner. "Way back" burner.) NPRR 1029: BESTF-6 DC-Coupled Resources (Approved December 2020) PUBLIC 11 NPRR 1014: Energy Storage Resource (ESR) Single Model • Registration, Qualification and Modeling (An ESR is represented (as it is) - as one physical Reso…

### e26 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 11, High Level Scope of +B, item 6 · text copy line 238

BEFORE: …ions (Approved November 2024) 4. NPRR 1246: Energy Storage Resource Terminology Alignment for the Single-Model Era (Approved March 2025) [NOGRR 268, OBDRR 052, PGRR 118] 5. NPRR 1282: Ancillary Service Duration under Real-Time Co-Optimization (Approved at the ERCOT Board of Directors June 24, 2025) 
QUOTE: 6. Not part of RTC+B Project. (On the back burner. "Way back" burner.) NPRR 1029: BESTF-6 DC-Coupled Resources (Approved December 2020)
AFTER:  PUBLIC 11 NPRR 1014: Energy Storage Resource (ESR) Single Model • Registration, Qualification and Modeling (An ESR is represented (as it is) - as one physical Resource) • Single set of telemetry • Single "energy bid/offer curve" submittal (covering both the charging and discharging MW range) and Si…

### e27 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.2, Responsive Reserve Qualification, paragraph (2) · text copy line 340 · heading above: 8.1.1.2.1.2 Responsive Reserve Qualification

BEFORE: …e Qualification (1) RRS may be provided by: (a) On-Line Generation Resource capacity; (b) Resources capable of providing FFR; (c) Generation Resources operating in the synchronous condenser fast-response mode; (d) Load Resources controlled by high-set under-frequency relays; (e) CLRs; and (f) ESRs. 
QUOTE: (2) The amount of RRS provided by individual Generation Resources, CLRs, or ESRs is limited by the ERCOT-calculated maximum MW amount of RRS for the Generation Resource, CLR, or ESR subject to its verified droop performance as described in the Nodal Operating Guide. The default value for any newly qualified Generation Resource, CLR, or ESR shall be 20% of its Maximum Droop Response Range (MDRR).
AFTER:  A Private Use Network with a registered Resource may use the gross HSL for qualification and establishing a limit on the amount of RRS capacity that the Resource within the Private Use Network can provide. (3) A QSE's Load Resource must be loaded and capable of unloading the scheduled amount of RRS…

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.4.2, EEA Levels, paragraph (3)(a) · text copy line 3589 · heading above: 6.5.9.4.2 EEA Levels

BEFORE: …when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes. Upon declaration of an EEA Level 3, ERCOT shall take any of the following measures as necessary to recover frequency or PRC to the minimum required levels: 
QUOTE: (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwise necessary, via a manual Dispatch Instruction. An ESR shall suspend charging unless it is providing Primary Frequency Response, has received a charging instruction via SCED Base Point, or is carrying Reg-Down and has received a charging instruction from LFC.
AFTER:  However, an ESR co-located behind a POI with onsite generation that is incapable of exporting additional power to the ERCOT System may continue to charge as long as maximum output to the ERCOT System is maintained. +-----------------------------------------------------------------------------------…

### e29 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.3.4, Emergency Notice, paragraph (5) · text copy line 3380 · heading above: 6.5.9.3.4 Emergency Notice

BEFORE: … Condition is the result of a transmission problem, ERCOT shall act immediately to return the ERCOT System to a reliable condition, including instructing any QSE representing a Resource to change the Resource's output, curtailing any remaining DC Tie Load, and instructing TSPs or DSPs to drop Load. 
QUOTE: In addition, ERCOT may instruct any QSE representing an ESR to suspend ESR charging if ERCOT determines that a Load reduction by the ESR is capable of mitigating the transmission problem.
AFTER:  An ESR co-located behind a Point of Interconnection (POI) with onsite generation that is incapable of exporting additional power to the ERCOT System may continue to charge as long as maximum output to the ERCOT System is maintained. (6) In the event that Load is curtailed or Load Resource(s) or ERS…

### e30 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.6, DGRs and DESRs, paragraph (1)(a) · text copy line 4275 · heading above: 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs)

BEFORE: …tating that the interconnecting distribution circuit will not be disconnected as part of an Energy Emergency Alert (EEA) Level 3, an under-frequency Load shedding event, or an under-voltage Load shedding event, unless required for DSP local system maintenance or during a DSP local system emergency. 
QUOTE: (a) If a DSP subsequently determines that any circuit to which a DGR or DESR is interconnected will need to be disconnected during these Load shedding events, or that a DGR or DESR will need to be moved to a circuit that will be disconnected during these Load shedding events: (i) The DSP shall promptly notify the designated contact for the DGR or DESR; (ii) The Resource Entity shall promptly notify ERCOT of this fact via the Resource Registration process; and (iii) The DGR or DESR will immediately be disqualified from offering to provide any Ancillary Service.
AFTER:  (b) Upon receiving notification from the DSP that the DGR or DESR is no longer subject to disconnection during any of these Load shedding events, and that no known system limitations or changes have occurred that would inhibit the DGR or DESR from complying with Ancillary Service performance requir…

### e31 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Self-Limiting Facility · text copy line 2810

BEFORE: …-------------------------------------+ Self-Arranged Ancillary Service Quantity The quantity of an Ancillary Service that a Qualified Scheduling Entity (QSE) secures for itself in the Day-Ahead Market (DAM) using Resources represented by that QSE and Ancillary Service Trades. Self-Limiting Facility 
QUOTE: A modeled generation station that includes one or more Generation Resources, and/or Energy Storage Resources (ESRs) with an established limit on the total MW Injection that is less than the total nameplate capacity of all Resource(s) within the Facility.
AFTER:  A Facility with one or more ESRs may also have an established limit on the MW Withdrawal that is less than the total nameplate MW Withdrawal rating of all ESR(s) within the facility. +-------------------------------------------------------------------------------------------------------------------…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 43 (OCR), Chapter II.E.1, ESR Fundamentals · text copy line 2829

BEFORE: …tion of ESR participation in the energy market and the associated revenue trends. A detailed discussion of ESR participation in the ancillary services markets is included in Chapter III.C.1. 1. ESR Fundamentals ESRs have operating characteristics that distinguish them from traditional generation: • 
QUOTE: They are duration limited - ESRs are limited by their state of charge (SOC), which is the amount of energy stored at a given time. The average duration of batteries in ERCOT at the end of 2025 was 1.83 hours, up from 1.67 hours in 2024.
AFTER:  This limitation affects how ESRs participate in the energy and operating reserve markets. • They are a net load to the grid - Although ESRs operate as both generation and load, they are a net load on the system. ESRs must consume energy to charge before they can discharge, and losses occur througho…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 43 (OCR), Chapter II.E.1, ESR Fundamentals · text copy line 2853

BEFORE: …cillary services such as regulation or responsive reserves to manage fluctuations in load or renewable generation. • They are driven by opportunity cost - The charging/discharging cycle and duration limits create unique economics for ESRs. ESRs must optimize these cycles to maximize their revenues. 
QUOTE: Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value.
AFTER:  These strategies can introduce market inefficiencies. A Multi-Interval Real-Time Market (MIRTM) would allow SCED to optimize ESR charging and discharging over time and reduce the need for ESRs to do so themselves. We have recommended that ERCOT consider implementing a MIRTM since our 2022 State of …

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 44 (OCR), Chapter II.E.3, ESR Revenue Trends · text copy line 2941

BEFORE: …d in Figure 17 generally supports this expectation, with some exceptions. Events such as Winter Storm Uri in 2021 and the artificial scarcity caused by the implementation of ECRS in 2023 created revenue spikes that obscure year-over-year trends in revenue per kilowatt (kW) and total revenue growth. 
QUOTE: Annual revenue per unit of ESR capacity declined significantly in 2025, falling by almost 37% from 2024 after normalization for the larger volume of ESR capacity in the market. This decline occurred even though total net ESR revenue increased by about 8%, driven mainly by the
AFTER:  22 | 2025 State of the Market Report / / Demand and Supply in ERCOT substantial expansion of ESR capacity. Net energy revenue rose by 57% after accounting for charging costs. However, ancillary services revenue fell by more than 37% because the additional ESR capacity increased ancillary services s…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 45 (OCR), Chapter II.E.3, ESR Revenue Trends · text copy line 2951

BEFORE: …lmost 37% from 2024 after normalization for the larger volume of ESR capacity in the market. This decline occurred even though total net ESR revenue increased by about 8%, driven mainly by the 22 | 2025 State of the Market Report / / Demand and Supply in ERCOT substantial expansion of ESR capacity. 
QUOTE: Net energy revenue rose by 57% after accounting for charging costs. However, ancillary services revenue fell by more than 37% because the additional ESR capacity increased ancillary services supply and reduced prices.
AFTER:  *+,-./.0N. 20.34R,-./.0N. S7389:;<.=,2+-,-./.0N. !)"" !&#" !&"" !#"" !%'" !E"" !%&" !&"" !A" !%"" !#" !" !" &"&% &"&& &"&E &"&# !"#$%&'E)*+,-.+.)/)MN)+23+4)#+RST8#9 W";%&+,-.+.)/)MN)+23+<'&&'"M=9 !'"" Figure 17: Total and Normalized ESR Revenue 2021-2025 &"&) 4. ESR Participation in Energy Markets …

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 45 (OCR), Chapter II.E.4, ESR Participation in Energy Markets · text copy line 3003

BEFORE: … *+,-./.0N. 20.34R,-./.0N. S7389:;<.=,2+-,-./.0N. !)"" !&#" !&"" !#"" !%'" !E"" !%&" !&"" !A" !%"" !#" !" !" &"&% &"&& &"&E &"&# !"#$%&'E)*+,-.+.)/)MN)+23+4)#+RST8#9 W";%&+,-.+.)/)MN)+23+<'&&'"M=9 !'"" Figure 17: Total and Normalized ESR Revenue 2021-2025 &"&) 4. ESR Participation in Energy Markets 
QUOTE: Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024.
AFTER:  Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high. The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. As solar generation…

### e37 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 21, Telemetry with the Implementation of the RTC+B Project (2 of 2), items 1-2 · text copy line 509 · heading above: 34.5 kV

BEFORE: …discharge, negative for charge) Min SOC (MWh) Gross (MVAr) Max Operating Discharge Power Limit (MW) Net MW (positive for discharge, negative for charge) Max Operating Charge Power Limit (MW) Net MVar HSL LSL (can be negative) PUBLIC 20 Telemetry with the Implementation of the RTC+B Project (2 of 2) 
QUOTE: 1. Net MW telemetry of the ESR, when it is charging or when it receives a Base Point of zero, should NOT include internal losses in the Battery (electro-chemical) and inverter. 2. Net MW (charging or discharging) represents the ESR response to its Updated Desired Set Point (UDSP) (plus any frequency response) at the Point Of Interconnection.
AFTER:  Thus, the Net MW telemetry when the ESR is discharging includes the internal losses in the battery (electro-chemical) and inverter. 3. The Gross MW telemetry is the actual charging or discharging MW as measured at the modeled terminals of the ESR and includes all internal losses in the battery (ele…

### e38 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 25, Real-Time Market With the Implementation of the RTC+B Project (2 of 2), Key Takeaway · text copy line 662 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ent Interval, or three MW above the AASP for the ESR in the Settlement Interval. 2. 6.6.5.5.1 ESR Set Point Deviation Charge for Under Performance The tolerance is the lesser of 3% of the AASP for the ESR in the Settlement Interval, or three MW below the AASP for the ESR in the Settlement Interval. 
QUOTE: Key Takeaway: The Set Point Deviation calculation implemented with the RTC+B Project is less tolerant than the current Base Point Deviation calculation.
AFTER:  PUBLIC 25 RUC with Implementation of RTC+B Project 1. DRUC and HRUC will be the tools to assess if enough capacity is available (and in the right locations) to ensure RTC SCED will have enough capacity (and State of Charge) to solve for energy and Ancillary Services. 2. Similar to today, ESRs will …

### e39 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 27, RUC with Implementation of RTC+B Project: Continued, item 4 · text copy line 691 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …software. In other words, with the RTC+B implementation the RUC software will not assume Ancillary Services are carried by any particular Resource and will consider all possibilities of where to carry Ancillary Services for future hours. PUBLIC 26 RUC with Implementation of RTC+B Project: Continued 
QUOTE: 4. The RUC software will use the Hour Beginning SoC (HB SoC) provided by the QSEs in their COPS for each ESR to appropriately limit the possible use/capability of each ESR.
AFTER:  5. The RUC process self-schedules ESRs to their HB SoC. The process of self-scheduling evaluates the change in the COP submitted HB SoC (change in stored energy SoC) across two consecutive hours and determines the best use of that change in energy - combination of charging or discharging the ESR as…

### e40 · `ercot-nprr1282-puct-report` · tier 1 · NPRR1282 PUCT Report (ancillary service duration under Real-Time Co-optimization) (PUCT approved 2025-07-31)
locator: Justification of Reason for Revision, RUC bullet (NPRR1282; PUCT approval 7/31/25) · text copy line 68

BEFORE: …ined Economic Dispatch (SCED) is not available due to unplanned events. | | | | | | | | | | - Reliability Unit Commitment (RUC): RUC studies should use a one-hour duration for all Ancillary Service types, excluding Fast Frequency Response (FFR) which should continue to require a 15-minute duration. 
QUOTE: A one-hour duration for RUC studies is appropriate to both respect an Energy Storage Resource's (ESR's) minimum and maximum State of Charge (SOC) values from the Current Operating Plan (COP) and as a deployment duration for use with deployment factors.
AFTER:  | | +----------------------------------------------------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e41 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1) · text copy line 900 · heading above: 6.4.9.1.1 Ancillary Service Awards

BEFORE: …ffers and validations performed by ERCOT is in Section 4.4.7.2, Ancillary Service Offers. (2) QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution. 6.4.9.1.1 Ancillary Service Awards 
QUOTE: (1) Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
AFTER:  (2) QSEs representing Resources that are qualified to provide an Ancillary Service must submit valid Ancillary Service Offers for use in Real-Time clearing. QSEs shall submit Resource-specific telemetry indicating the Resource's ability to provide Ancillary Service in Real-Time. (3) QSEs representi…

### e42 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, paragraph (1)(p), PRC8 · text copy line 2722 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ PRC7 = (Capacity from Resources capable of providing FFR)_(i) 
QUOTE: PRC8 = Min(X% of MDRR, HSL-Net MW, the capacity that can be sustained for 45 minutes per the State of Charge Excludes ESR capacity used to provide FFR.
AFTER:  +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1029: Insert the formula "PRC9" below upon system implementation:] | | | | PR…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 149 (OCR), Recommendations, 2024-2 · text copy line 8927

BEFORE: …title of this recommendation has since been updated to reflect ERCOT's reduction of the ECRS duration requirement to one hour when it implemented RTC, consistent with our recommendation. ERCOT still maintains a four-hour duration requirement 126 | 2025 State of the Market Report / / Recommendations 
QUOTE: for NSRS for energy storage resources, which must maintain a state of charge four times their NSRS obligation. For example, a 10 MW NSRS award would require 40 MWh of stored capacity.
AFTER:  We recommend reducing the NSRS duration requirement to one hour for two reasons: First, requiring ESRs to maintain four hours of state of charge to provide operating reserves limits their ability to supply reserves, increasing the likelihood of shortages of both energy and ancillary services. This …

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 168 (OCR), Appendix I.G, RDPA · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
AFTER:  The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. The RDPA process now produces separate price adders for energy and each AS product. The real-time market…

### e45 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Maximum Droop Response Range (MDRR) · text copy line 1612

BEFORE: …aken and is used in Mass Transition transactions. Master Qualified Scheduling Entity (QSE) (see Qualified Scheduling Entity (QSE)) Maximum Droop Response Range (MDRR) This value reflects the total capability of a Resource to respond to system frequency deviations based on its droop characteristics. 
QUOTE: The MDRR for a Generation Resource is its High Sustained Limit (HSL), for a Controllable Load Resource (CLR) is its Maximum Power Consumption (MPC), and for an Energy Storage Resource (ESR) is the difference between its HSL and Low Sustained Limit (LSL).
AFTER:  This capability will be used to determine the maximum Responsive Reserve (RRS) using Primary Frequency Response that a Resource can be awarded in Day-Ahead Market (DAM) or Real-Time. Maximum Power Consumption (MPC) For a Load Resource, the limit established by the QSE, continuously updated in Real-…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 62-63 (OCR), Chapter III.B, AS Prices · text copy line 4060

BEFORE: …#eIA !Ge%> !#egI !DeIg !#e%> !% !A !# !" EF* +,J .F/ MN/ .FO E3* E34 M3R S,N 7U9 :;< =,U #"#> 3. AS Prices under RTC High NSRS prices also occurred in December, likely because of uncertainty about RTC. Looking at hourly day-ahead market prices for NSRS for the month of December, 15 of the 24 highest
QUOTE: priced hours occurred on the RTC go-live date, December 5, 2025.
AFTER:  The day-ahead market that day did not include virtual bids for AS, so the high prices reflect elevated offers from physical resources. AS prices normalized again a few days after RTC go-live. In 2025, NSRS was the most expensive ancillary service on average for the first time. This outcome is incon…

### e47 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (4)(c)(iv) · text copy line 318 · heading above: 8.1.1.2.1.1 Regulation Service Qualification

BEFORE: …t one five-minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Energy Storage Resource Energy Deployment Performance (ESREDP) calculated in accordance with Section 8.1.1.4.1, over the entire five minute interval must be less than or equal to 3.0%. 
QUOTE: (iv) For an ESR, in all other test sequence intervals, the Resource's measured ESREDP must be less than or equal to 3.0% as calculated for the entire duration of each test interval.
AFTER:  (d) On successful demonstration of the above test criteria, ERCOT shall qualify that the Resource is capable of providing Regulation Service and shall provide a copy of the certificate to the QSE and the Resource. (5) The maximum quantity of Reg-Up or Reg-Down that an individual Resource is qualifi…

### e48 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.5, PRC variable table, PRC8 · text copy line 2777 · heading above: 6.5.7.5 Ancillary Services Capacity Monitor
FLAG pending-box: | | | | [NPRR1244: Replace the description above with the following upon system implementation:] | |
BEFORE: … of providing FFR | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | PRC8 | MW | 
QUOTE: ESR capacity capable of providing Primary Frequency Response
AFTER:  | +---------------------------------------------------------------------------------------------------------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------+ | +----------------------------…

### e49 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 149 (OCR), Recommendations, 2024-2 · text copy line 8932

BEFORE: …city. We recommend reducing the NSRS duration requirement to one hour for two reasons: First, requiring ESRs to maintain four hours of state of charge to provide operating reserves limits their ability to supply reserves, increasing the likelihood of shortages of both energy and ancillary services. 
QUOTE: This occurs because a four-hour obligation produces an opportunity cost for selling reserves that is four times the prevailing energy price
AFTER:  - a resource that can discharge 4 MW of energy for an hour can only sell 1 MW of reserves (so it can inject 4 MWh over 4 hours). Since this tradeoff for thermal units is 1-to-1, this obligation will encourage the real-time market to procure reserves from thermal units and schedule storage resources…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e19, e5, e4, e20): An ESR is one resource that both charges and discharges. Its High Sustained Limit is positive when describing maximum sustained discharge and negative when describing the minimum temporary charging capability. [e3] The Low Sustained Limit works the other way: a negative LSL is the maximum sustained charging capability and a positive LSL the minimum temporary discharging capability. [e19] ERCOT's single-model approach has bid/offer curves, the Current Operating Plan and telemetry for the ESR as a single device across the whole range from maximum charging (negative MW) to maximum discharging (positive MW). [e5] A QSE can update the telemetered HSL and LSL in Real-Time to reflect state of charge limits, and a QSE for an ESR co-located with a Generation Resource may set the LSL to the MW level of self-charge when charging from that generator. [e4][e20]
- **How it works #2** (cites e18, e17, e37) FLAG number-not-in-quote: 2025: State of charge (SOC) is the stored energy in MWh that can be injected at the POI or POCC. [e18] The QSE must telemeter maximum SOC, minimum SOC, SOC, and the maximum operating discharge and charge power limits, and must ensure SOC stays between the minimum and maximum. [e17] Telemetered net MW does not include internal battery and inverter losses when the ESR is charging or has a zero Base Point, according to ERCOT's July 2025 RTC+B overview. [e37]
- **How it works #3** (cites e8, e41, e6, e23, e7, e14, e39) FLAG number-not-in-quote: 2025: For ancillary services, an ESR in discharge mode provides Reg-Up by raising output, while an ESR in charge mode provides it by cutting load. [e8] Under RTC, ancillary service awards are based on Resource capability including state of charge and SOC limits, and ERCOT's July 2025 RTC+B overview says SCED accounts for state of charge in its optimization so awards are feasible for their duration requirements and it will not violate telemetered minimum and maximum SOC. [e41][e6] The same overview says that is different from before, when the QSE had to reserve sufficient SoC to cover its ancillary service duration requirements. [e23] The day-ahead market does not consider SOC in clearing energy and ancillary services. [e7] The same overview says ESRs will not be seen as off-line in RUC and so are not available to be RUCed; RUC uses the hour-beginning SoC in the COP to limit each ESR. [e14][e39]
- **How it works #4** (cites e27, e45, e47, e40): **Qualification and limits.** An ESR providing RRS is limited by an ERCOT-calculated maximum MW subject to verified droop performance; the default for a newly qualified ESR is 20% of its Maximum Droop Response Range, which for an ESR is the difference between HSL and LSL. [e27][e45] Regulation qualification includes a test in which, for an ESR, the measured ESREDP in all other test sequence intervals must be at or below 3.0% for the entire duration of each test interval. [e47] The NPRR1282 PUCT report says a one-hour duration for RUC studies is appropriate to respect an ESR's minimum and maximum SOC values from the COP and as a deployment duration for use with deployment factors. [e40]
- **How it works #5** (cites e21, e22, e38, e31) FLAG number-not-in-quote: 6.6, 5.5, 2025: **Set Point Deviation.** ERCOT charges a QSE for over-performance when an ESR's telemetered generation or consumption exceeds a tolerance of the greater of 3% of the AASP (Average Aggregated Set Point) for the ESR or three MW above the AASP, and for under-performance when it falls below a tolerance of the lesser of 3% of the AASP or three MW below it. [e21][e22] A pending NPRR1014/NPRR1029 box in Section 6.6.5.5 would add conditions on DC-Coupled Resources to the over-performance tolerance upon system implementation; this topic does not describe it. ERCOT's July 2025 overview says the Set Point Deviation calculation implemented with RTC+B is less tolerant than the current Base Point Deviation calculation. [e38] Self-Limiting Facilities, which cap total MW injection below nameplate, are defined separately. [e31]
- **How it works #6** (cites e28, e29, e30, e48, e42): **Emergency operations.** At EEA Level 3 ERCOT can instruct ESRs to suspend charging, by SCED Base Point or manual Dispatch Instruction, and an ESR must suspend unless it is providing Primary Frequency Response, has a SCED charging instruction, or is carrying Reg-Down with an LFC charging instruction; the Protocols add that an ESR co-located behind a POI with onsite generation that cannot export additional power to ERCOT may continue to charge as long as maximum output to ERCOT is maintained. [e28] When an Emergency Condition is the result of a transmission problem, ERCOT may instruct an ESR QSE to suspend charging if ERCOT determines the Load reduction by the ESR is capable of mitigating it (the same co-located exception applies). [e29] A DGR or DESR whose circuit becomes subject to disconnection in load shedding is immediately disqualified from offering ancillary service. [e30] ESR capacity capable of primary frequency response counts toward PRC through the PRC8 term, the minimum of X% of MDRR, HSL-Net MW and the capacity that can be sustained for 45 minutes per the State of Charge. [e48][e42]
- **ERCOT context #1** (cites e12, e10, e32, e13, e9): The IMM says batteries make up virtually all ESRs in ERCOT, and ESR capacity grew to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% on 2024. [e12][e10] The IMM puts average battery duration at 1.83 hours at the end of 2025, up from 1.67 hours in 2024. [e32] Aggregate ESR output at the hourly peak was almost 2,400 MW in 2025 versus 820 MW in 2024, reflecting a major role serving load in the evening solar down-ramp. [e13] ESRs provided 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin on average in 2025. [e9]
- **ERCOT context #2** (cites e34, e35, e11, e36, e15, e16): As supply grew, revenue per unit of ESR capacity fell by almost 37% in 2025 even though total net ESR revenue rose about 8%; net energy revenue rose 57% while AS revenue fell by more than 37%. [e34][e35][e11] The IMM says ESRs began shifting toward energy arbitrage in 2024 as AS saturated, and that AS prices fell across all products from 2024 to 2025, partly because of ESR growth. [e36][e15][e16]
- **ERCOT context #3** (cites e33): The IMM also argues that, because the market software optimizes one five-minute interval at a time, ESR owners must offer strategically to manage SOC. [e33] It recommends a multi-interval real-time market; that recommendation is the IMM's, not ERCOT's. [e33]
- **Timeline #1** (cites e24): - December 2020: NPRR1014 (ESR single model) approved; February 2024: NPRR1204 (state of charge with RTC) approved. [e24]
- **Timeline #2** (cites e25): - November 2024: NPRR1236 (RUC capacity short calculations) approved; March 2025: NPRR1246 (terminology) approved; 24 June 2025: ERCOT Board approved NPRR1282 (AS duration under RTC). [e25]
- **Timeline #3** (cites e26) FLAG number-not-in-quote: 2025: - NPRR1029 (DC-coupled resources, approved December 2020) was described in July 2025 as not part of the RTC+B project. [e26]
- **Timeline #4** (cites e46): - 5 December 2025: RTC go-live. [e46]
- **Key facts #4** (cites e34): - The IMM says annual revenue per unit of ESR capacity fell by almost 37% in 2025 after normalization for the larger volume of capacity. [e34]
- **Key facts #6** (cites e21, e22): - Set Point Deviation tolerance for an ESR is the greater of 3% of AASP or three MW above (over-performance) and the lesser of 3% of AASP or three MW below (under-performance). [e21][e22]
- **Key facts #7** (cites e27): - The default RRS limit for a newly qualified ESR is 20% of its MDRR. [e27]
- **Common confusion #1** (cites e5, e6, e10, e19): An ESR is not a generator plus a separate load: the single-model approach treats it as one device with one curve across charging and discharging. [e5] ESR capacity in MW is also not energy: duration and state of charge limit how long it can sustain MW awards. [e6][e10] And a positive LSL is not an error: it means a minimum temporary discharge. [e19]
- **Questions #4** (cites e34, e35, e16): Revenue per unit of ESR capacity fell almost 37% as AS revenues fell by more than 37%, and the IMM says the continued growth in ESR capacity and AS provision by ESRs partly caused AS prices to fall. [e34][e35][e16]
- **Questions #8** (cites e28): ERCOT can instruct it to suspend charging; it must stop unless it is providing Primary Frequency Response, has a SCED charging Base Point, or is carrying Reg-Down with an LFC charge instruction, and an ESR co-located behind a POI with onsite generation that cannot export additional power may continue to charge as long as maximum output to ERCOT is maintained. [e28]
- **Questions #10** (cites e38, e21, e22) FLAG number-not-in-quote: 2025: ERCOT's July 2025 overview says the Set Point Deviation calculation implemented with RTC+B is less tolerant than the current Base Point Deviation calculation. The ESR tolerance is the greater of 3% of AASP or three MW above AASP for over-performance and the lesser of 3% of AASP or three MW below AASP for under-performance. [e38][e21][e22]
- **Questions #12** (cites e43, e49): The IMM says ERCOT maintains a four-hour NSRS duration requirement under which an ESR must hold a state of charge four times its NSRS obligation (a 10 MW award would require 40 MWh), and argues this produces an opportunity cost for selling reserves that is four times the prevailing energy price; the argument is the IMM's view. [e43][e49]
- **Link to ancillary-services** (cites e9): related Ancillary Services (AS): ESRs supply most regulation and large shares of the other ancillary services. [e9]
- **Link to regulation** (cites e8): related Regulation Up / Down: An ESR in discharge mode or charge mode can provide Reg-Up under the protocol's performance requirements. [e8]
- **Link to rtc-b** (cites e5, e6): related RTC+B (Real-Time Co-optimization + Batteries): The "+B" in RTC+B changes how ESRs are modelled, offered and dispatched after RTC. [e5][e6]
- **Link to sced** (cites e6): related SCED (Security-Constrained Economic Dispatch): SCED accounts for state of charge inside its optimization after RTC+B. [e6]
- **Link to battery-revenue-stack** (cites e15): related Battery Revenue Stack: The IMM links ESR capacity growth to a shift toward earning more revenue from energy arbitrage than from ancillary services. [e15]
- **Link to prc** (cites e48, e42): related PRC (Physical Responsive Capability): ESR capacity capable of primary frequency response counts toward PRC as the PRC8 term, which is the minimum of X% of MDRR, HSL-Net MW and the capacity that can be sustained for 45 minutes per the State of Charge. [e48][e42]
- **Link to non-spin** (cites e43): related Non-Spinning Reserve: The four-hour Non-Spin duration means an ESR must hold four times its award in stored energy, according to the IMM. [e43]
- **Link to ruc** (cites e39, e14): related RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses each ESR's hour-beginning State of Charge from the COP, and ESRs are not seen as off-line so cannot be RUCed. [e39][e14]
- **Link to load-shed** (cites e30, e28): related Load Shed / Rotating Outages: A DESR on a circuit subject to load shed is disqualified from offering ancillary service, and ESRs must suspend charging at EEA Level 3. [e30][e28]
- **Link to ordc** (cites e44): related ORDC (Operating Reserve Demand Curve): The IMM says the ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs with RTC. [e44]

