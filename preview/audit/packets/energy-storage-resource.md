# Audit packet: Energy Storage Resource (ESR) (energy-storage-resource)

kind concept · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Energy Storage Resource (ESR) under Resource · text copy line 2450

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Energy Storage Resource (ESR) 
QUOTE: An Energy Storage System (ESS) registered with ERCOT for the purpose of providing energy and/or Ancillary Service to the ERCOT System.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Energy Storage System (ESS) · text copy line 888

BEFORE: …) and through trades and the amount of delivery of that energy in the Real-Time Market (RTM). Energy Offer Curve A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. Energy Storage Resource (ESR) (see Resource) Energy Storage System (ESS) 
QUOTE: A facility, process, or device(s) that receives electric energy and stores it, in any form, for the purpose of later releasing electrical energy.
AFTER:  Energy Trade A QSE-to-QSE financial transaction that transfers responsibility for energy between a buyer and a seller at a Settlement Point. Entity Any natural person, partnership, municipal corporation, cooperative corporation, association, governmental subdivision, or public or private organizati…

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

## Statements to check

- **Definition #1** (cites e1, e2): An Energy Storage Resource (ESR) is an energy storage system registered with ERCOT for the purpose of providing energy and/or ancillary service to the ERCOT System. [e1] An energy storage system is a facility or device that receives electric energy and stores it for later release. [e2]
- **How it works #1** (cites e3, e5, e4): An ESR is one resource that both charges and discharges. Its High Sustained Limit is positive when describing maximum sustained discharge and negative when describing the minimum temporary charging capability. [e3] ERCOT's single-model approach has bid/offer curves, the Current Operating Plan and telemetry for the ESR as a single device across the whole range from maximum charging (negative MW) to maximum discharging (positive MW). [e5] A QSE can update the telemetered HSL and LSL in Real-Time to reflect state of charge limits. [e4]
- **How it works #2** (cites e8, e6, e7, e14) FLAG number-not-in-quote: 2025: For ancillary services, an ESR in discharge mode provides Reg-Up by raising output, while an ESR in charge mode provides it by cutting load. [e8] ERCOT's July 2025 RTC+B battery overview says that with RTC+B, SCED accounts for state of charge in its optimization so awards are feasible for their duration requirements, and it will not violate telemetered minimum and maximum SOC. [e6] The day-ahead market does not consider SOC in clearing energy and ancillary services. [e7] The same overview says ESRs will not be seen as off-line in RUC and so are not available to be RUCed. [e14]
- **ERCOT context #1** (cites e12, e10, e13, e9): The IMM says batteries make up virtually all ESRs in ERCOT, and ESR capacity grew to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% on 2024. [e12][e10] Aggregate ESR output at the hourly peak was almost 2,400 MW in 2025 versus 820 MW in 2024, reflecting a major role serving load in the evening solar down-ramp. [e13] ESRs provided 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin on average in 2025. [e9]
- **ERCOT context #2** (cites e11, e15, e16): As supply grew, revenue per unit of ESR capacity fell by 37% in 2025 because AS revenues fell by the same amount, which the IMM links to a shift toward energy arbitrage. [e11][e15] The IMM says AS prices fell across all products from 2024 to 2025, partly because of ESR growth. [e16]
- **Key facts #1** (cites e1): - An ESR is registered to provide energy and/or ancillary service. [e1]
- **Key facts #2** (cites e10): - ESR capacity was more than 17,000 MW and 31,500 MWh at the end of 2025. [e10]
- **Key facts #3** (cites e9) FLAG number-not-in-quote: 2025: - On average in 2025 ESRs provided 94% of Reg-Up and 86% of Reg-Down, per the IMM. [e9]
- **Key facts #4** (cites e11): - Revenue per MW of ESR capacity fell 37% in 2025. [e11]
- **Key facts #5** (cites e6, e7): - SCED tracks ESR state of charge after RTC+B; the DAM does not. [e6][e7]
- **Say it like this #1** (cites e5, e9, e13, e16): An ESR is a battery modelled as one resource that can be a generator or a load, bounded by its state of charge. In 2025 it supplied most regulation and large shares of the other ancillary services, and it plays a major role serving evening load, and the IMM says the growth in ESR capacity partly caused AS prices to fall. [e5][e9][e13][e16]
- **Common confusion #1** (cites e5, e6, e10): An ESR is not a generator plus a separate load: the single-model approach treats it as one device with one curve across charging and discharging. [e5] ESR capacity in MW is also not energy: duration and state of charge limit how long it can sustain MW awards. [e6][e10]
- **Questions #2** (cites e6): After RTC+B, SCED includes state of charge accounting so awards can be sustained for their duration, and will not violate the telemetered min and max SOC. [e6]
- **Questions #4** (cites e11, e16): Revenue per unit of ESR capacity fell 37% as AS revenues fell by the same amount, and the IMM says the continued growth in ESR capacity and AS provision by ESRs partly caused AS prices to fall. [e11][e16]
- **Questions #6** (cites e14): ERCOT's RTC+B material says ESRs will not be seen as off-line and so are not available to be RUCed. [e14]
- **Link to ancillary-services** (cites e9): related Ancillary Services (AS): ESRs supply most regulation and large shares of the other ancillary services. [e9]
- **Link to regulation** (cites e8): related Regulation Up / Down: An ESR in discharge mode or charge mode can provide Reg-Up under the protocol's performance requirements. [e8]
- **Link to rtc-b** (cites e5, e6): related RTC+B (Real-Time Co-optimization + Batteries): The "+B" in RTC+B changes how ESRs are modelled, offered and dispatched after RTC. [e5][e6]
- **Link to sced** (cites e6): related SCED (Security-Constrained Economic Dispatch): SCED accounts for state of charge inside its optimization after RTC+B. [e6]
- **Link to battery-revenue-stack** (cites e15): related Battery Revenue Stack: The IMM links ESR capacity growth to a shift toward earning more revenue from energy arbitrage than from ancillary services. [e15]
