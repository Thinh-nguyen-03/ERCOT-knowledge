# Audit packet: System Lambda (system-lambda)

kind metric · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of System Lambda · text copy line 3094

BEFORE: …ng depending on its settings. Synchroscope A piece of equipment that is used to monitor voltage waveforms from the two sides of an open circuit breaker or disconnect switch to ensure that the voltage magnitude, frequency and phase angle are close enough to close the breaker or switch. System Lambda 
QUOTE: The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT.
AFTER:  System Operator An Entity that supervises the collective Transmission Facilities of a power region. This Entity is charged with coordination of market transactions, system-wide transmission planning, and network reliability. T [Back to Top] TSP and DSP Metered Entity An Entity that meets the requir…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Shadow Price · text copy line 2951

BEFORE: …ment Statement using corrected Settlement data, in accordance with Section 9.5.6, RTM Resettlement Statement. Real-Time Market (RTM) True-Up Statement The RTM Settlement Statement issued 180 days following the Operating Day, as further described in Section 9.5.8, RTM True-Up Statement. Shadow Price 
QUOTE: A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available.
AFTER:  Shift Factor A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the genera…

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, item (d) on VOLL · text copy line 2266

BEFORE: … the limiting element (or identified operator-entered constraint with operator's comments describing the reason and the Resource-specific impacts for any manual overrides). ERCOT shall provide the summary to Market Participants on the MIS Secure Area and to the Independent Market Monitor (IMM). (d) 
QUOTE: Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL. ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website.
AFTER:  (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding projection of the Base Points, Ancillary Service awards, MCPCs, Resource Node LMPs, Real-Time Reliability Deployment Price Adders, Hub LMPs, a…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.11, paragraph (3) · text copy line 1474 · heading above: 6.5.7.1.11 Transmission Network and Power Balance Constraint Management

BEFORE: …ce Constraints, ERCOT shall establish a maximum Shadow Price for each network constraint as part of the definition of contingencies. The cost calculated by SCED to resolve an additional MW of congestion on the network constraint is limited to the maximum Shadow Price for the network constraint. (3) 
QUOTE: Pursuant to Section 22, Attachment P, ERCOT shall establish a maximum Shadow Price for the power balance constraint. The cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint.
AFTER:  (4) If ERCOT determines that rating(s) in the Network Operations Model or configuration of the Transmission Facilities are not correct, then the TSP will provide the appropriate data submittals to ERCOT to correct the problem upon notification by ERCOT. +--------------------------------------------…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3.1, item (o) · text copy line 2466 · heading above: 6.5.7.3.1 Determination of Real-Time Reliability Deployment Price Adders

BEFORE: …rform mitigation on the submitted Energy Offer Curves using the LMPs from the previous step as the reference LMP. (n) Perform a SCED with the changes to the inputs in items (a) through (k) above, considering both Competitive and Non-Competitive Constraints and the mitigated Energy Offer Curves. (o) 
QUOTE: The Real-Time Reliability Deployment Price Adder for Energy is equal to the positive difference between the System Lambda from item (n) above and the System Lambda of the second step in the two-step SCED process described in paragraph (14)(b) of Section 6.5.7.3, Security Constrained Economic Dispatch, except when ERCOT is directing firm Load shed during EEA Level 3.
AFTER:  When ERCOT is directing firm Load shed during EEA Level 3 to either maintain sufficient PRC or stabilize grid frequency, as described in paragraph (3) of Section 6.5.9.4.2, the Real-Time Reliability Deployment Price Adder for Energy is the VOLL used to determine the ASDCs for the RTM minus the Syst…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable table for Load Zone DASPP · text copy line 2788 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …------------------------------------------------- DASPP $/MWh Day-Ahead Settlement Point PriceThe DAM Settlement Point Price at the Load Zone, for the hour. DALMP _(b) $/MWh Day-Ahead Locational Marginal Price per busThe DAM LMP at Electrical Bus b for the hour. DASL $/MWh Day-Ahead System Lambda
QUOTE: The DAM Shadow Price for the system power balance constraint for the hour.
AFTER:  DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour. DASF _(pb, ,c) none Day-Ah…

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1)(a)-(b)(iii), de-energized Electrical Buses · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …ty-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy. 
QUOTE: ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specified (b) Use the following rules in order: (i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist. (ii) Use average LMP for all Electrical Buses within the same station, if any exist. (iii) Use System Lambda.
AFTER:  6.6.1.1 Real-Time Settlement Point Price for a Resource Node (1) The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Pr…

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a)(i) · text copy line 2217 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …TSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM. These caps shall be maintained at these levels until either of the following criteria are met: (i) 
QUOTE: If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change.
AFTER:  Security-Constrained Economic Dispatch (SCED)-level data, time-weight averaged to a 15-minute Settlement Interval equivalent, will be used to make this determination. The EPP will remain active until the later of the following, at which point the ECAP Effective Period will end at the beginning of t…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, ESR congestion management discussion (Figure 39) · text copy line 5448

BEFORE: … that reflect the value of serving load subject to binding transmission constraints. 2025 State of the Market Report | 63 / / Transmission Congestion and CRRs Figure 39 illustrates this trend by showing the annual total base points awarded to ESRs that help manage congestion as generators or loads. 
QUOTE: For ESRs acting as generators, we aggregate base points awarded at an LMP greater than the system lambda, indicating that energy injections at that location help manage congestion.
AFTER:  For ESRs acting as loads, we aggregate base points awarded at an LMP less than zero, meaning ESR load provides enough value in resolving congestion that the system pays them to charge. Figure 39 shows that both trends have increased at an accelerating rate over the last five years. Figure 39: Annua…

### e11 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point Price · text copy line 2915

BEFORE: …nly Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point A Resource Node, Load Zone, or Hub. Settlement Point Price 
QUOTE: A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations.
AFTER:  Settlement Quality Meter Data Data that has been edited, validated, and is appropriate for ERCOT to use for Settlement and billing purposes. Settlement Statement A statement issued by ERCOT reflecting a breakdown of administrative, miscellaneous, and market charges for the applicable market service…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, footnote on the reliability adder · text copy line 1406

BEFORE: … fuel price for the marginal generation technology, which in ERCOT is usually natural gas. To assess the competitiveness of the real-time power market at prevailing fuel costs, we calculate an implied heat rate, a market-based indicator of the fuel efficiency a gas generator would need to break 2 3 
QUOTE: The reliability adder uses the dispatch software to simulate the system lambda without RUCs, deployed load capacity, or certain other reliability actions. The adder is the difference in system lambda output by SCED with and without any reliability actions.
AFTER:  Source for these numbers: https://interchange.puc.texas.gov/Documents/56000_10_1516314.PDF 2025 State of the Market Report | 3 / / Review of Real-Time Market Outcomes even at current electricity and natural-gas prices. We calculate it by dividing the power price by the fuel price to derive the heat…

## Statements to check

- **Definition #1** (cites e1): System Lambda is the cost of providing one MWh of energy at the reference Electrical Bus. It is the Shadow Price for the power balance constraint, equal to the change in the objective function from relaxing that constraint by one MW, and it is the energy component of LMP at each Settlement Point in ERCOT. [e1]
- **How it works #1** (cites e2, e1): A Shadow Price measures the marginal value of a commodity: the rate at which system costs would fall or rise if slightly more or less of it were available. [e2] System Lambda is that price for the power balance constraint, and the definition calls it the energy component of LMP. [e1][e2]
- **How it works #2** (cites e3, e4): In real time, the System Lambda from SCED Step 2 is capped at the effective Value of Lost Load. [e3] Where an Electrical Bus LMP is above the effective VOLL, it is reset to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. ERCOT posts both capped and uncapped values of System Lambda to its website. [e3] Separately, the cost SCED calculates to resolve one more MW on the power balance constraint is limited to a maximum Shadow Price for that constraint set under Section 22, Attachment P. [e4]
- **How it works #3** (cites e6): In the day-ahead, the Settlement Point Price formulas for Load Zones carry a system-wide term (the day-ahead counterpart of System Lambda), defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- **ERCOT context #1** (cites e5, e10): System Lambda shows up in several price rules, not only as an LMP component. The Real-Time Reliability Deployment Price Adder for Energy is the positive difference between the System Lambda from the SCED run in item (n) of Section 6.5.7.3.1 and the Step 2 System Lambda, with an exception when ERCOT is directing firm Load shed during EEA Level 3. [e5] The IMM describes the same adder as the difference in system lambda output by SCED with and without any reliability actions. [e10]
- **ERCOT context #2** (cites e7, e8): It is also a fallback price: when ERCOT must assign an LMP to a de-energized Electrical Bus, the last rule in the order is to use System Lambda, after a predetermined LMP, same-station same-voltage averages and same-station averages. [e7] And the Emergency Pricing Program test adds the RTM System Lambda to the reliability deployment adder and compares the sum to the HCAP for DAM, with activation when it is at or above the HCAP for a total of 12 hours within a rolling 24-hour period. [e8]
- **Key facts #1** (cites e1): - System Lambda is the Shadow Price for the power balance constraint and the energy component of LMP at each Settlement Point. [e1]
- **Key facts #2** (cites e3): - Real-time System Lambda and MCPCs from SCED Step 2 are capped at the effective VOLL; ERCOT posts capped and uncapped values. [e3]
- **Key facts #3** (cites e5): - The Real-Time Reliability Deployment Price Adder for Energy is built from the difference between two System Lambda values. [e5]
- **Key facts #4** (cites e6): - Day-ahead Load Zone Settlement Point Price formulas use a system-wide term defined as the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- **Key facts #5** (cites e8): - The Emergency Pricing Program activation test uses the sum of the RTM System Lambda and the reliability deployment adder. [e8]
- **Common confusion #1** (cites e1, e11, e5): (Guidance) System Lambda is not the Settlement Point Price: it is one component of LMP, and Settlement Point Prices are calculated from LMP data. [e1][e11] Also, in the real-time reliability adder the same term appears twice, once from the item (n) SCED run and once from Step 2, so the adder is a difference, not a level. [e5]
- **Questions #2** (cites e1): The cost of one more MWh of energy at the reference Electrical Bus, equal to the Shadow Price on the power balance constraint, and the energy component of LMP at each Settlement Point. [e1]
- **Questions #4** (cites e5, e7, e8): It is the input to the Real-Time Reliability Deployment Price Adder for Energy, which is the difference between two System Lambda values. [e5] It is the final fallback LMP for de-energized buses, and the sum of RTM System Lambda and the adder is the test for activating the Emergency Pricing Program. [e7][e8]
- **Questions #6** (cites e3, e4): Yes. System Lambda from SCED Step 2 is capped at the effective VOLL. [e3] Separately, SCED's cost to resolve one MW on the power balance constraint is limited to a maximum Shadow Price for that constraint. [e4]
- **Link to lmp** (cites e1): part-of LMP (Locational Marginal Price): System Lambda is the energy component of LMP at each Settlement Point. [e1]
- **Link to shadow-price** (cites e1, e2): is-a Shadow Price: System Lambda is the Shadow Price for the power balance constraint. [e1][e2]
- **Link to sced** (cites e3): related SCED (Security-Constrained Economic Dispatch): The System Lambda from SCED Step 2 is capped at the effective VOLL. [e3]
- **Link to dam** (cites e6): related Day-Ahead Market (DAM): The day-ahead counterpart is the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- **Link to offer-cap** (cites e8): related Offer Caps (HCAP / LCAP / SWCAP): The real-time System Lambda plus the reliability deployment adder is the test that can activate the Emergency Pricing Program. [e8]
- **Link to congestion** (cites e9): related Transmission Congestion: For ESRs acting as generators, the IMM counts base points awarded at an LMP above the system lambda as a sign that injections at that location help manage congestion. [e9]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) System Lambda is the marginal cost of one more MWh of energy at the reference bus, and it is the energy component of the LMP at each Settlement Point.

