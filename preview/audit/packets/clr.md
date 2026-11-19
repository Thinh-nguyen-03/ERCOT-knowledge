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

## Statements to check

- **Definition #1** (cites e1, e2): A Controllable Load Resource is a Load Resource capable of controllably reducing or increasing consumption under ERCOT's Dispatch control. [e1] A Load Resource is a load capable of providing ancillary service and/or energy as demand response, registered with ERCOT. [e2]
- **How it works #1** (cites e3, e6): The CLR participation model in SCED was implemented in 2014. It lets loads that can respond to 5-minute dispatch instructions submit bids to buy electricity at price-quantity pairs, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3] A CLR's QSE pays a Set Point Deviation Charge if the Resource does not follow its dispatch set points within tolerances. [e6]
- **ERCOT context #1** (cites e4, e5, e7, e8): In 2025 all 12 registered CLRs were cryptocurrency mines. [e4] The IMM reports that average CLR load fell to 240 MW in 2025 as many mines deregistered and moved to the Emergency Reserve Service, where they now account for 64% of ERS volume. [e5] The IMM notes that RTC lets CLRs sell ancillary services in real time with less exposure to high energy prices. [e7] It supports NPRR 1188 (nodal pricing for CLRs) and NPRR 1244 (registration without primary frequency response), both scheduled for January 2027 implementation, as of its 2025 report. [e8]
- **Key facts #1** (cites e3): - CLR participation in SCED dates from 2014. [e3]
- **Key facts #2** (cites e4): - 12 registered CLRs in 2025, all crypto mines. [e4]
- **Key facts #3** (cites e5): - Average CLR load: 240 MW in 2025. [e5]
- **Key facts #4** (cites e8): - NPRR 1188 and NPRR 1244 were scheduled for January 2027. [e8]
- **Say it like this #1** (cites e4, e5): (Guidance) A CLR is a load that ERCOT can dispatch down in SCED against its own bid curve. As of 2025 that was entirely crypto miners, and many had moved to ERS. [e4][e5]
- **Common confusion #1** (cites e2, e1): (Guidance) A CLR is not any demand response: a Load Resource only needs to be able to provide ancillary service or energy as demand response, while a CLR is dispatchable by ERCOT. [e2][e1]
- **Questions #2** (cites e4): In 2025, all 12 registered CLRs were cryptocurrency mines. [e4]
- **Questions #4** (cites e5): Many mines deregistered as CLRs and moved to ERS. [e5]
- **Questions #6** (cites e8): NPRR 1188 and NPRR 1244, scheduled by the IMM's account for January 2027. [e8]
- **Link to resource-types** (cites e1, e2): is-a Resource Types (Generation, Load, ESR, SOG): A CLR is a Load Resource, one of the Resource types. [e1][e2]
- **Link to sced** (cites e3): used-in SCED (Security-Constrained Economic Dispatch): CLRs can submit bids to buy electricity in SCED, and ERCOT can dispatch them down when the clearing price exceeds those bids. [e3]
- **Link to ers** (cites e5): contrasts-with ERS (Emergency Response Service): Many crypto mines left CLR status for ERS in 2025. [e5]
- **Link to rtc-b** (cites e7): related RTC+B (Real-Time Co-optimization + Batteries): RTC lets CLRs sell ancillary services in real time with less exposure to high energy prices. [e7]
- **Link to large-flexible-load** (cites e4, e5): related Large Flexible Load (LFL): Large price-responsive loads such as crypto mines are the CLR population in the IMM's account. [e4][e5]
- **Link to resource-entity** (cites e9): related Resource Entity: A Load Resource is owned or controlled by a Resource Entity. [e9]
