# Audit packet: ORDC (Operating Reserve Demand Curve) (ordc)

kind rule · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e4 · `ercot-rtc-overview` · tier 2 · Real-Time Co-Optimization Overview (July 2025)
locator: Slide 9 (Fall 2024 education deck) · text copy line 175

BEFORE: … $/MWh 300 50 150 20 10 80 MW MW 300 200 Ancillary Service offer $10/MWh 400 $60/MWh $10/MWh 150 250 50 Ancillary Service offer $20/MWh By awarding the Ancillary Services to another Resource, overall costs are reduced. ERCOT Public 7 What components of the market are changing with RTC? ERCOT Public 
QUOTE: Today's market is designed to reflect scarcity through a process that is outside of the optimization
AFTER:  Currently Energy Offers Telemetry SecurityConstrained Economic Dispatch (SCED) Base Points Locational Marginal Prices (LMPs) Constraints Operating Reserve Demand Curve (ORDC) ERCOT Public Reserve Pricing Price Adders Combined to form Settlement Point Prices 9 The ORDC sets the value of ERCOT System…

### e5 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Executive Summary, Shortage Pricing and Procurement Methodology for AS under RTC · text copy line 1373

BEFORE: …e market design improvements in the following subsections. Shortage Pricing and Procurement Methodology for AS under RTC In the current market design, ancillary services are procured in the day-ahead market according to a fixed Ancillary Service (AS) Plan that sets reserve quantities for each hour. 
QUOTE: The day-ahead market always procures the full volume of reserves defined by the AS Plan, and the real-time market treats these reserves as inaccessible unless they are manually released to the dispatch model. Shortage pricing is then determined by the ORDC outside of the dispatch model based on the level of available operating reserves.
AFTER:  Real-time co-optimization (RTC), set to be implemented in December 2025, will improve many of the issues we raised regarding market performance and operational risks. RTC allows the real-time market to simultaneously schedule energy and operating reserves. A critical aspect of the logic of RTC is t…

### e7 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Resource Adequacy chapter, market-based approaches (p. 77) · text copy line 7393

BEFORE: …, and (4) market power mitigation measures. In an energy-only market, the shortage pricing will be the result of operating reserve demand curves (ORDCs) that will set prices when the market does not have sufficient resources to satisfy the full market requirements for energy and ancillary services. 
QUOTE: If the market is not sustaining sufficient resources, the economic signals can be strengthened by increasing the aggregate value implied by the ORDC. The Commission implemented such changes at the start of 2022 and they have been extremely effective in increasing the markets' shortage revenues.
AFTER:  Note that spot market shortage pricing is an important element of market design even in instances where there is a capacity construct as well. Shortage pricing values additional supply at the marginal value it contributes to reliability and signals both performance and new investment. When a system…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance (p. iii) · text copy line 764

BEFORE: … key trend in 2025 was the continued increase in operating reserves levels in the market. This trend began in 2022 when the entry of new solar and energy storage resources increased considerably. This increase in operating reserve levels has significantly reduced the prevalence of shortage pricing. 
QUOTE: For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014.
AFTER:  The supply expansion also reduced the all-in price of electricity in the real-time market. The allin price of electricity includes all costs to load that transact through the ERCOT wholesale market, i.e., the cost of energy, reserves, and any uplift costs. Energy is the main component of the all-in…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, G. RDPA (p. A-10) · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature.
AFTER:  The RDPA process now produces separate price adders for energy and each AS product. The real-time market is run in two instances: one based on realized operating conditions and one counterfactual, as if no reliability actions had been taken. The AS RDPA is the difference in MCPCs for each AS produc…

### e12 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC §25.509(b)(6)(D) · text copy line 62

BEFORE: … exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. 
QUOTE: In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year.
AFTER:  Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year. (7) Reimbursement for Operating Losses when the LCAP is in Effect. When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual margin…

### e21 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, Section 1.2 (PBMCL) · text copy line 753 · heading above: 1.81 %

BEFORE: … bates 6 ( Jan . 22 , 2013 ) ( see attachment I mproved Electricity Scarcity Pricing and Operating Reserves, William W. Hogan , Ph . D .). 8 Available on ERCOT's website at: https://www.ercot.com/mktrules/obd/obdlist. © 2024 ERCOT All rights reserved. 000013 7 2024 Biennial ERCOT Report on the ORDC 
QUOTE: PBMCL is a shifted version of ERCOT's empirically-determined LOLP normal distribution. LOLP, which represents the probability of a Real-Time reserve shortfall, is determined by comparing the Hour-Ahead forecasted level of reserves to the level of reserves realized in Real-Time.
AFTER:  The gap between these values, termed the reserve error, is assumed to follow a normal distribution characterized by a mean (Mu or p) and a standard deviation (Sigma or a). Once per season, ERCOT determines the LOLP distribution by compiling empirical reserve error data going back to the start of th…

### e22 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, Section 1.1, ORDC Theory · text copy line 717 · heading above: 1.81 %

BEFORE: …just the minimum of contingency operating reserves, then prices should rise to the VOLL. At any other level of operating reserves, set to protect the system for possible events in the immediate future, the value of an increment of operating reserves should reflect the probability of loss of load."7 
QUOTE: Due to net load forecast error and other factors, there is uncertainty in the level of operating reserves that will be available in the near-term operational timeframe of the next 30 minutes to one hour.
AFTER:  Therefore, there is a probability, referred to as the Loss of Load Probability (LOLP), that operating reserves will fall to the level that would require involuntary load curtailment within that timeframe. Thus, when there is involuntary load curtailment, the ORDC should theoretically rise to VOLL. …

### e33 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, Executive Summary, RTORPA contribution to PNM (table) · text copy line 560 · heading above: 1.81 %

BEFORE: …ved. 000010 4 2024 Biennial ERCOT Report on the ORDC 2022 $5.18/MWh 7.97% 2023 $0.92/MWh 1.81 % 2024 (Jan- Sep) $0.23/MWh 1.81 % • In terms of ORDC-related costs, the RTORPA contributions to Peaker Net Margin (PNM) accumulations in 2023 and 2024, through September 2024, were lower compared to 2022. 
QUOTE: The table below compares RTPORA contributions to PNM since 2022. In general, the RTORPA played a more modest role in contributing to system-wide prices compared to the other factors noted previously. 2022 27.24% 2023 3.02% 2024 (Jan- Sep) 1.99%
AFTER:  Implementation of RTC+B Program: • With the implementation of the RTC+B Program expected in December 2025, the value of reserves will be determined by a set of ASDCs whose shape and magnitude will be designed to replicate, as closely as possible, historical pricing outcomes of the ORDC, particularl…

### e34 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, Executive Summary, key results · text copy line 417

BEFORE: …esources On-Line. This incentive further contributed to increased levels of self-commitment based on expected future prices and the risk of not running on peak summer days. This behavior impacted the composition of On-Line and Off-Line reserves with an increase in the quantity of On-Line reserves.4 
QUOTE: In terms of the ORDC's utilization, higher overall reserve levels and the transition from some Off-Line reserves to On-Line reserves contributed to a reduction in the frequency and magnitude of ORDC price adders, which are tied to scarcity.
AFTER:  Real-Time On-Line Reserve Price Adders were observed at higher levels of Physical Responsive Capability (PRC) stemming from the change in the composition of reserves. The ORDC price adders were a smaller component of system-wide prices overall in 2023 and 2024 compared to the previous study period …

### e43 · `ercot-ordc-report-2024` · tier 2 · 2024 Biennial ERCOT Report on the Operating Reserve Demand Curve (2024-10-31)
locator: 2024 Biennial ERCOT Report on the ORDC, Executive Summary, key results (ECRS) · text copy line 410

BEFORE: …prices and significantly reduced the need for Reliability Unit Commitment (RUC) compared to previous years. The table below illustrates the decrease in RUC since 2022. • :% i DIRnrg. a•1•.: [*IITiih ·,il El,yEMZNITEEERf~IF~lo, 2022 7,922 2,329,709 2023 2,500 523,247 2024 (Jan-Sep) 1,213 367,373 • • 
QUOTE: The ERCOT Contingency Reserve Service (ECRS) was introduced on June 10,2023. ECRS is a service which is predominantly provided by On-Line Resources.3 Having an ECRS Supply Responsibility provides a strong incentive to a Qualified Scheduling Entity (QSE) to have Resources On-Line. This incentive further contributed to increased levels of self-commitment based on expected future prices and the risk of not running on peak summer days. This behavior impacted the composition of On-Line and Off-Line reserves with an increase in the quantity of On-Line reserves.4
AFTER:  In terms of the ORDC's utilization, higher overall reserve levels and the transition from some Off-Line reserves to On-Line reserves contributed to a reduction in the frequency and magnitude of ORDC price adders, which are tied to scarcity. Real-Time On-Line Reserve Price Adders were observed at hi…

## Statements to check (new or changed since the last audit)

- **Link to asdc** (cites e9): contrasts-with ASDC (Ancillary Service Demand Curves): When RTC went live, the ORDC price adder was replaced by a set of ASDCs. [e9]
- **Link to rtc-b** (cites e4, e9): related RTC+B (Real-Time Co-optimization + Batteries): Before RTC, scarcity was reflected through a process outside the optimization, and at RTC go-live the ORDC price adder was replaced by ASDCs. [e4][e9]
- **Link to energy-only-market** (cites e7): part-of Energy-Only Market Design: In ERCOT's energy-only design, raising the value implied by the ORDC was the lever used to strengthen shortage revenues. [e7]
- **Link to resource-adequacy** (cites e7, e8) FLAG number-not-in-quote: 2025: affects Resource Adequacy: The IMM says the value implied by the ORDC can be raised to strengthen economic signals when the market is not sustaining enough resources, and by 2025 the ORDC raised real-time energy prices by only $0.02 per MWh. [e7][e8]
- **Link to offer-cap** (cites e12): related Offer Caps (HCAP / LCAP / SWCAP): The PUCT scarcity pricing rule still says the ORDC and RDPA keep applying for the rest of a year in which the cap drops to LCAP. [e12]
- **Link to prc** (cites e5): related PRC (Physical Responsive Capability): The ORDC adder depended on the level of available operating reserves, and shortage pricing was computed outside the dispatch model. [e5]
- **Link to peaker-net-margin** (cites e33): affects Peaker Net Margin (PNM): ERCOT's 2024 ORDC report puts the On-Line reserve adder's share of PNM accumulation at 27.24% in 2022, falling to 1.99% for January-September 2024. [e33]
- **Link to load-forecasting** (cites e21, e22): related Load Forecasting: The ORDC's loss-of-load probability came from the gap between hour-ahead forecast reserves and real-time reserves, which ERCOT attributes to net load forecast error and other factors. [e21][e22]
- **Link to ecrs** (cites e43, e34) FLAG number-not-in-quote: 2024: related ECRS (ERCOT Contingency Reserve Service): ERCOT's 2024 report says ECRS, introduced June 10, 2023, is mostly provided by On-Line Resources and gave QSEs an incentive to keep Resources On-Line, increasing On-Line reserves; that shift from Off-Line to On-Line reserves, with higher overall reserves, helped reduce the frequency and size of ORDC adders. [e43][e34]

