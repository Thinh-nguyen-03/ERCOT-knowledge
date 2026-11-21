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

### e12 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 3.1, Congestion LMP Component · text copy line 41 · heading above: 3.1 Congestion LMP Component

BEFORE: …e Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: 
QUOTE: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line.
AFTER:  Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of El…

### e13 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 3.1 · text copy line 55 · heading above: 3.1 Congestion LMP Component

BEFORE: …ine are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. 
QUOTE: The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion.
AFTER:  Note that only marginal units (i.e. units that are able to move, not those dispatched at min/max dispatch limits to resolve other constraints or to provide energy to the system) can participate in resolving network congestion and determining the System Lambda for a particular iteration of SCED. The…

### e14 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 3.1 · text copy line 49 · heading above: 3.1 Congestion LMP Component

BEFORE: …ows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. 
QUOTE: Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero.
AFTER:  The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ an…

### e15 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 4.1, The Power Balance Penalty · text copy line 291 · heading above: 4.1 The Power Balance Penalty

BEFORE: …at the reference Electrical Bus. System Lambda, i.e. the Shadow Price for the Power Balance constraint, is equal to the change in the SCED objective function obtained by relaxing the Power Balance constraint by 1MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT. 
QUOTE: The Power Balance Penalty sets the maximum limit for this Shadow Price, i.e. Power Balance Penalty is the maximum cost paid for one addition/less MW of generation to meet the ERCOT system load constraint.
AFTER:  This section describes those factors that ERCOT considered in developing the amount of the Power Balance Penalty in $/MW versus the amount of the mismatch and provides the resulting Power Balance Penalty Price proposed for PUCT approval. The objective function for SCED is the sum of four components…

### e16 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 4.1 · text copy line 293 · heading above: 4.1 The Power Balance Penalty

BEFORE: …ss MW of generation to meet the ERCOT system load constraint. This section describes those factors that ERCOT considered in developing the amount of the Power Balance Penalty in $/MW versus the amount of the mismatch and provides the resulting Power Balance Penalty Price proposed for PUCT approval. 
QUOTE: The objective function for SCED is the sum of four components: (1) the cost of dispatching generation; (2) the cost of procuring Ancillary Services; (3) the penalty for violating Power Balance constraint; and (4) the penalty for violating network transmission constraints.
AFTER:  SCED economically dispatches Generation Resources and Energy Storage Resources (ESRs) and procures Ancillary Services by minimizing this objective function within the Resource physical limits and transmission limits. Since the Power Balance penalty is the maximum cost for meeting the Power Balance,…

### e17 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 22, Attachment P (December 5, 2025 edition), Section 4.1 · text copy line 295 · heading above: 4.1 The Power Balance Penalty

BEFORE: …ation Resources and ESRs becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and ESRs and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation. 
QUOTE: In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh.
AFTER:  Appendix 1: Day-Ahead Market Optimization Control Parameters The purpose of the Day-Ahead Market (DAM) is to economically co-optimize energy and Ancillary Service by simultaneously clearing offers and bids submitted by the Market Participants to maximize social welfare while observing the transmiss…

### e18 · `np-22p` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (effective 2025-04-01)
locator: Section 22, Attachment P (April 1, 2025 edition), Section 4.1 (pre-RTC text) · text copy line 369 · heading above: 4.1 The Power Balance Penalty

BEFORE: …patching the Generation Resources becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation. 
QUOTE: In the ERCOT design, SCED implements the Power Balance Penalty by a step function with up to 10 (Violation MW; Penalty $/MW) pairs. This curve determines the maximum System Lambda for a given amount of the Power Balance Constraint violation.
AFTER:  The following section describes the factors that ERCOT considered in developing the amount of the Power Balance Penalty in $/MWh of violation and provides the resulting Power Balance Penalty Curve. +----------------------------------------------------------------------------------------------------…

### e19 · `np-22p` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (effective 2025-04-01)
locator: Section 22, Attachment P (April 1, 2025 edition), Section 4.3, The ERCOT Power Balance Penalty Curve (pre-RTC) · text copy line 425 · heading above: 4.3 The ERCOT Power Balance Penalty Curve

BEFORE: …s shown in the table below. The SCED over-generation Power Balance Penalty curve will be set to System-Wide Offer Floor. ----------------------------------------------------------------------- MW Violation Penalty Value ($/MWh) ------------------------------------- --------------------------------- 
QUOTE: ≤ 5 250 5 < to ≤ 10 300 10 < to ≤ 20 400 20 < to ≤ 30 500 30 < to ≤ 40 1,000 40 < to ≤ 50 2,250 50 < to ≤ 100 4,500 > 100 HCAP plus 1
AFTER:  ----------------------------------------------------------------------- The SCED under-generation Power Balance Penalty curve will be capped at LCAP plus $1 per MWh whenever the SWCAP is set to the LCAP. SCED Over-generation Power Balance Penalty Curve ----------------------------------------------…

### e20 · `np-22p` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (effective 2025-04-01)
locator: Section 22, Attachment P (April 1, 2025 edition), pending box above Section 4.1 replacement · text copy line 372 · heading above: 4.1 The Power Balance Penalty
FLAG pending-box: | [OBDRR020 and NPRR1246: Replace Section 4.1 above with the following upon system implementation of the Real-Time Co-Optimization (RTC) project:] |
BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: [OBDRR020 and NPRR1246: Replace Section 4.1 above with the following upon system implementation of the Real-Time Co-Optimization (RTC) project:]
AFTER:  | | | | The Power Balance constraint is the balance between the ERCOT System Load and the amount of generation that is dispatched by SCED to meet that load. This Shadow Price for this constraint, also called System Lambda (λ), is the cost of providing one MWh of energy at the reference Electrical B…

### e21 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Demand and Supply in ERCOT, Large Flexible Load self-curtailment (Figure 28, 2022-2024 data) · text copy line 4646 · heading above: 26.26 Much of this load can be attributed to CLRs carrying ancillary services.

BEFORE: …educes consumption during system peaks to lower its share of transmission cost allocation. Self-curtailment through price response has grown significantly with the rise of demand from LFLs. To illustrate this trend, Figure 28 shows the aggregate load from LFLs28 as a function of system-wide prices. 
QUOTE: The data indicate that LFLs reduce their consumption by as much as 75% when system lambda exceeds $1,000 per MWh.
AFTER:  Self-curtailment as price response from LFLs is a relatively recent trend. Historically, the more consequential form of self-curtailment has been 4CP response. Under this mechanism, transmission costs are allocated to load serving entities based on their load ratio share during the highest 15-minut…

### e22 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Section on ECRS deployment practice, excess cost of ECRS deployment (Figure 8) · text copy line 2052

BEFORE: …nsfers them to online resources. In fact, deploying ECRS often increases available reserves by preventing storage resources from having to discharge to satisfy demand. We then simulated each event assuming full release of ECRS capacity to SCED and compared the outcomes with the actual SCED results. 
QUOTE: We calculated excess cost as the difference between the original and simulated results, measured as system lambda multiplied by load.
AFTER:  Figure 8 presents the estimated excess costs for each identified event. Figure 8: Excess Cost of ECRS Deployment Practice in 2025 !"#A%CD()#AD*+,,%-%./%DM1D2+33+).#4 !#" 5..S73D()#AD*+,,%-%./% 898: !D#> 898; !?#".. 898< !@".. !D& !DB !DA !D# !D" !& !B !A !# !" (F* +,J .F/ MN/ .FO (3* (34 M35 S,N 78…

### e23 · `ercot-nprr1290-prs-report` · tier 1 · NPRR1290 PRS Report (2025-08-13)
locator: NPRR1290 PRS Report (2025-08-13), Revision Description, item 3 · text copy line 94

BEFORE: …C+B, ERCOT has identified instances in which that information is still useful and necessary. | | | | | | | | | | 3. Under Section 3.1.6.9, following receipt of an Outage Schedule Adjustment (OSA) for a Resource, a "QSE must update the Resource's Energy Offer Curve to $4,500/MWh for all MW level..." 
QUOTE: Under RTC+B, with the Real-Time System-Wide Offer Cap (RTSWCAP) at $2,000/MWh, a QSE will not be able to comply with this requirement.
AFTER:  As such, ERCOT is proposing to change the "$4,500/MWh" requirement to RTSWCAP until NPRR930 can be implemented, after which the OSA Energy Curve Offer process will be automated within ERCOT's systems and the submission validation rules for a QSE will not apply. | | | | | | | | | | 4. In reviewing S…

### e24 · `np-22p` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (effective 2025-04-01)
locator: Section 22, Attachment P (April 1, 2025 edition), pending replacement of Section 4.1 · text copy line 378 · heading above: 4.1 The Power Balance Penalty
FLAG pending-box: | [OBDRR020 and NPRR1246: Replace Section 4.1 above with the following upon system implementation of the Real-Time Co-Optimization (RTC) project:] |
BEFORE: …sources and ESRs becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and ESRs and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation. | | | | 
QUOTE: In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $0.01/MWh.
AFTER:  This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh. | +===============================================================================================…

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e3, e4): In real time, the System Lambda from SCED Step 2 is capped at the effective Value of Lost Load. [e3] Where an Electrical Bus LMP is above the effective VOLL, it is reset to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. ERCOT posts both capped and uncapped values of System Lambda to its website. [e3] Separately, the cost SCED calculates to resolve one more MW on the power balance constraint is limited to a maximum Shadow Price for that constraint set under Section 22, Attachment P. [e4]
- **Formula #1** (cites e12, e14, e13): Attachment P gives the Electrical Bus LMP as System Lambda minus a sum over transmission lines: LMP at bus EB = λ − Σ over lines of (Shift Factor of bus EB for the line × Shadow Price of the line), where λ is System Lambda (the Shadow Price of power balance), SF is the Shift Factor for the bus and line, and SP is the Shadow Price for the transmission line. [e12] The Shadow Prices for congested transmission lines are positive, otherwise zero. [e14] The congestion component of LMP represents a price incentive to generation units at that bus to increase or decrease output to manage network congestion. [e13] Put plainly: with no binding network constraint, every bus LMP equals System Lambda; with constraints, bus LMPs differ from System Lambda by the congestion component. [e12][e14]
- **Formula #2** (cites e15, e16): The maximum System Lambda is set by the power balance penalty: the Power Balance Penalty sets the maximum limit for this Shadow Price, that is the maximum cost paid for one additional or one fewer MW of generation to meet the system load constraint. [e15] The SCED objective function is the sum of the cost of dispatching generation, the cost of procuring Ancillary Services, the penalty for violating the power balance constraint and the penalty for violating network transmission constraints. [e16]
- **Timeline #1** (cites e18, e19) FLAG number-not-in-quote: 2025, 4.3, 5 MW: - Pre-RTC (Attachment P, April 1, 2025 edition): SCED implemented the Power Balance Penalty as a step function with up to 10 (violation MW; penalty $/MW) pairs that determined the maximum System Lambda for a given amount of violation. [e18] The under-generation curve in Section 4.3 of that edition ran from 250 $/MWh for violations of 5 MW or less, through 300, 400, 500, 1,000, 2,250 and 4,500 $/MWh at higher violation bands, to HCAP plus 1 above 100 MW. [e19]
- **Timeline #2** (cites e20, e24) FLAG number-not-in-quote: 2025: - April 1, 2025 edition also carried a pending box: OBDRR020 and NPRR1246 would replace Section 4.1 upon system implementation of RTC. [e20] The pending text in that edition set the under-generation penalty at VOLL plus RTSWCAP plus $0.01/MWh. [e24] (The December 5, 2025 edition, below, shows a different adder.)
- **Timeline #3** (cites e17) FLAG number-not-in-quote: 2025: - December 5, 2025 edition (current in the saved sources): the under-generation Power Balance Penalty Price is a single value equal to the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh, which determines the maximum System Lambda; the over-generation penalty price is -$250/MWh. [e17]
- **Timeline #4** (cites e23) FLAG number-not-in-quote: 2025: - In 2025 ERCOT noted RTSWCAP at $2,000/MWh under RTC+B. [e23]
- **ERCOT context #1** (cites e5, e10): System Lambda shows up in several price rules, not only as an LMP component. The Real-Time Reliability Deployment Price Adder for Energy is the positive difference between the System Lambda from the SCED run in item (n) of Section 6.5.7.3.1 and the Step 2 System Lambda, with an exception when ERCOT is directing firm Load shed during EEA Level 3. [e5] The IMM describes the same adder as the difference in system lambda output by SCED with and without any reliability actions. [e10]
- **ERCOT context #2** (cites e7, e8): It is also a fallback price: when ERCOT must assign an LMP to a de-energized Electrical Bus, the last rule in the order is to use System Lambda, after a predetermined LMP, same-station same-voltage averages and same-station averages. [e7] And the Emergency Pricing Program test adds the RTM System Lambda to the reliability deployment adder and compares the sum to the HCAP for DAM, with activation when it is at or above the HCAP for a total of 12 hours within a rolling 24-hour period. [e8]
- **ERCOT context #3** (cites e9, e22, e21) FLAG number-not-in-quote: 2024: Practice: the IMM uses system lambda as a benchmark in two ways. It counts ESR base points awarded at an LMP above system lambda as a sign that injections there help manage congestion, [e9] and it measured the excess cost of ECRS deployment practice as system lambda multiplied by load. [e22] For demand behavior, the IMM reported in its 2024 State of the Market Report that large flexible loads reduce their consumption by as much as 75% when system lambda exceeds $1,000 per MWh. [e21]
- **Key facts #2** (cites e12): - Bus LMP = System Lambda minus the sum of Shift Factor times line Shadow Price over transmission lines. [e12]
- **Key facts #3** (cites e3): - Real-time System Lambda and MCPCs from SCED Step 2 are capped at the effective VOLL; ERCOT posts capped and uncapped values. [e3]
- **Key facts #4** (cites e17) FLAG number-not-in-quote: 2025: - The December 5, 2025 Attachment P sets the under-generation Power Balance Penalty Price at effective VOLL plus effective RTSWCAP plus $4,052.01/MWh and the over-generation price at -$250/MWh. [e17]
- **Common confusion #1** (cites e1, e11, e5, e3, e17): (Guidance) System Lambda is not the Settlement Point Price: it is one component of LMP, and Settlement Point Prices are calculated from LMP data. [e1][e11] Also, in the real-time reliability adder the same term appears twice, once from the item (n) SCED run and once from Step 2, so the adder is a difference, not a level. [e5] And the cap on System Lambda from the power balance penalty is a different thing from the VOLL cap applied to Step 2 System Lambda. [e3][e17]
- **Questions #4** (cites e5, e7, e8): It is the input to the Real-Time Reliability Deployment Price Adder for Energy, which is the difference between two System Lambda values. [e5] It is the final fallback LMP for de-energized buses, and the sum of RTM System Lambda and the adder is the test for activating the Emergency Pricing Program. [e7][e8]
- **Questions #6** (cites e3, e4, e17) FLAG number-not-in-quote: 2025: Yes. System Lambda from SCED Step 2 is capped at the effective VOLL. [e3] Separately, SCED's cost to resolve one MW on the power balance constraint is limited to a maximum Shadow Price for that constraint. [e4] In the December 2025 Attachment P, that limit is the effective VOLL plus the effective RTSWCAP plus $4,052.01/MWh for under-generation. [e17]
- **Questions #8** (cites e15, e16): The Power Balance Penalty is the maximum cost paid for one more or one fewer MW of generation to meet the system load constraint, so it sets the maximum limit of System Lambda. [e15] When re-dispatching costs more than violating the constraint, SCED stops re-dispatching and the objective is minimized with the penalty. [e16]
- **Questions #10** (cites e12, e14): Every Shadow Price on congested lines would be zero, so by the Attachment P formula the congestion component is zero and each bus LMP equals System Lambda. [e12][e14]
- **Questions #12** (cites e18, e19, e17) FLAG number-not-in-quote: 2025: Before RTC the penalty was a step function of up to 10 pairs, rising with the MW of violation. [e18][e19] The December 2025 edition replaces it with a single value built from VOLL, RTSWCAP and an adder. [e17]
- **Link to lmp** (cites e1): part-of LMP (Locational Marginal Price): System Lambda is the energy component of LMP at each Settlement Point. [e1]
- **Link to shadow-price** (cites e1, e2): is-a Shadow Price: System Lambda is the Shadow Price for the power balance constraint. [e1][e2]
- **Link to sced** (cites e3): related SCED (Security-Constrained Economic Dispatch): The System Lambda from SCED Step 2 is capped at the effective VOLL. [e3]
- **Link to dam** (cites e6): related Day-Ahead Market (DAM): The day-ahead counterpart is the DAM Shadow Price for the system power balance constraint for the hour. [e6]
- **Link to offer-cap** (cites e8): related Offer Caps (HCAP / LCAP / SWCAP): The real-time System Lambda plus the reliability deployment adder is the test that can activate the Emergency Pricing Program. [e8]
- **Link to congestion** (cites e9): related Transmission Congestion: For ESRs acting as generators, the IMM counts base points awarded at an LMP above the system lambda as a sign that injections at that location help manage congestion. [e9]
- **Link to shift-factor** (cites e12): used-in Shift Factors: Electrical Bus LMP is System Lambda minus the sum over lines of Shift Factor times line Shadow Price. [e12]
- **Link to rtc-b** (cites e17, e20) FLAG number-not-in-quote: 2025: related RTC+B (Real-Time Co-optimization + Batteries): The power balance penalty methodology was replaced upon RTC implementation; the December 2025 edition states the current single-value penalty. [e17][e20]
- **Link to emergency-pricing-program** (cites e8): used-in Emergency Pricing Program: RTM System Lambda plus the reliability deployment adder is the activation test input. [e8]
- **Link to large-flexible-load** (cites e21): related Large Flexible Load (LFL): The IMM reports large flexible loads reducing consumption as system lambda rises above $1,000 per MWh. [e21]
- **Link to binding-constraint** (cites e12, e14): related Binding Constraint: Congestion enters LMP through positive Shadow Prices on congested transmission lines, separately from System Lambda. [e12][e14]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) System Lambda is the marginal cost of one more MWh of energy at the reference bus, and it is the energy component of the LMP at each Settlement Point. Congestion moves individual bus prices away from it, and scarcity pricing is limited by the power balance penalty that caps it.

