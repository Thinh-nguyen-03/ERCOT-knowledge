# Audit packet: LMP (Locational Marginal Price) (lmp)

kind metric · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Locational Marginal Price (LMP) · text copy line 1439

BEFORE: …trical Buses assigned to the same zone under Section 3.4. Every Electrical Bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes. (3) A Non-Opt-In Entity (NOIE) Load Zone is a type of Load Zone. Load Zone LMP (see Locational Marginal Price) Locational Marginal Price (LMP) 
QUOTE: The offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process.
AFTER:  Hub LMP The price calculated for a Hub for each SCED interval according to the formula in Section 6.6.1.5, Hub LMPs, using LMPs at the Electrical Buses included in the Hub. Load Zone LMP The price calculated for a Load Zone for each SCED interval according to the formula in Section 6.6.1.4, Load Zo…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of System Lambda · text copy line 3094

BEFORE: …ng depending on its settings. Synchroscope A piece of equipment that is used to monitor voltage waveforms from the two sides of an open circuit breaker or disconnect switch to ensure that the voltage magnitude, frequency and phase angle are close enough to close the breaker or switch. System Lambda 
QUOTE: The cost of providing one MWh of energy at the reference Electrical Bus, i.e. the Shadow Price for the power balance constraint, which is equal to the change in the objective function obtained by relaxing the power balance constraint by one MW. The System Lambda is the energy component of LMP at each Settlement Point in ERCOT.
AFTER:  System Operator An Entity that supervises the collective Transmission Facilities of a power region. This Entity is charged with coordination of market transactions, system-wide transmission planning, and network reliability. T [Back to Top] TSP and DSP Metered Entity An Entity that meets the requir…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Shadow Price · text copy line 2951

BEFORE: …ment Statement using corrected Settlement data, in accordance with Section 9.5.6, RTM Resettlement Statement. Real-Time Market (RTM) True-Up Statement The RTM Settlement Statement issued 180 days following the Operating Day, as further described in Section 9.5.8, RTM True-Up Statement. Shadow Price 
QUOTE: A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available.
AFTER:  Shift Factor A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the genera…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph on the two-step methodology, item (b) · text copy line 2238

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (b) 
QUOTE: The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints.
AFTER:  The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Cu…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph on VOLL cap, item (d) · text copy line 2266

BEFORE: … the limiting element (or identified operator-entered constraint with operator's comments describing the reason and the Resource-specific impacts for any manual overrides). ERCOT shall provide the summary to Market Participants on the MIS Secure Area and to the Independent Market Monitor (IMM). (d) 
QUOTE: Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL.
AFTER:  ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website. (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding project…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable table for Load Zone DASPP · text copy line 2788 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …------------------------------------------------- DASPP $/MWh Day-Ahead Settlement Point PriceThe DAM Settlement Point Price at the Load Zone, for the hour. DALMP _(b) $/MWh Day-Ahead Locational Marginal Price per busThe DAM LMP at Electrical Bus b for the hour. DASL $/MWh Day-Ahead System Lambda
QUOTE: The DAM Shadow Price for the system power balance constraint for the hour.
AFTER:  DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour. DASF _(pb, ,c) none Day-Ah…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …all Market Participants are described in the Operating Guides. 6.6 Settlement Calculations for the Real-Time Energy Operations 6.6.1 Real-Time Settlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. 
QUOTE: For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definitions of Hub LMP and Load Zone LMP · text copy line 1447

BEFORE: …crement of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process. Hub LMP The price calculated for a Hub for each SCED interval according to the formula in Section 6.6.1.5, Hub LMPs, using LMPs at the Electrical Buses included in the Hub. Load Zone LMP 
QUOTE: The price calculated for a Load Zone for each SCED interval according to the formula in Section 6.6.1.4, Load Zone LMPs, using State Estimator Load data and LMPs at the Electrical Buses included in the Load Zone.
AFTER:  Lone Star Infrastructure Protection Act (LSIPA) Affiliate An Entity that, directly or indirectly, through one or more intermediaries, controls, is controlled by, or is under common control with the LSIPA Designated Company. For purposes of this definition, "controls," "controlled by," or "under com…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance · text copy line 741

BEFORE: …er flows to maintain system reliability and sets expectations for the forward markets. Real-time Market Performance The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019. 
QUOTE: With RTC, the real-time market simultaneously procures energy and ancillary services.
AFTER:  Previously, the day-ahead market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT. Now, ancillary service awards can be adjusted in real-time to reflect change…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, 1. Violated Constraints · text copy line 5352

BEFORE: …edirecting the flow of energy around a binding constraint. A constraint is violated when market dispatch flows exceed its transmission limit. Such violations impose reliability costs or risks on the system, which ERCOT embeds in the shadow price caps it uses to dispatch the system and set prices.41 
QUOTE: When the marginal cost of procuring relief through market dispatch exceeds the reliability cost of violating the constraint, the shadow price caps will: a) prevent the market from incurring additional dispatch costs; and b) set the shadow price for the constraint, which determines congestion prices at locations that affect the violated constraint.
AFTER:  The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • ERCOT treats GTCs as base-case stability constra…

### e12 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point Price · text copy line 2915

BEFORE: …nly Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point A Resource Node, Load Zone, or Hub. Settlement Point Price 
QUOTE: A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations.
AFTER:  Settlement Quality Meter Data Data that has been edited, validated, and is appropriate for ERCOT to use for Settlement and billing purposes. Settlement Statement A statement issued by ERCOT reflecting a breakdown of administrative, miscellaneous, and market charges for the applicable market service…

### e13 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.1 · text copy line 2750 · heading above: 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes

BEFORE: …----------------+ 4.6 DAM Settlement 4.6.1 Day-Ahead Settlement Point Prices (1) The Day-Ahead Settlement Point Price (DASPP) calculations are described in this Section for Resource Nodes, Load Zones, Hubs, and logical Resource Nodes. 4.6.1.1 Day-Ahead Settlement Point Prices for Resource Nodes (1) 
QUOTE: The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process.
AFTER:  4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: D…

## Statements to check

- **Definition #1** (cites e1): An LMP is the offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus. It is produced either by the Day-Ahead Market (DAM) process or by the SCED process. [e1]
- **How it works #1** (cites e2, e3, e5, e11): The LMP is built at the bus level. Its energy component is System Lambda, the Shadow Price of the power balance constraint, meaning the change in the objective function from relaxing that constraint by one MW. [e2] A Shadow Price in general measures the marginal value of a commodity, the rate at which system costs would fall or rise if slightly more or less of it were available. [e3] The protocol text says System Lambda is the energy component of LMP at each Settlement Point. [e2] SCED produces Shadow Prices and LMPs in the same step, [e5] and the IMM says the shadow price of a violated constraint determines congestion prices at the locations that affect that constraint. [e11]
- **How it works #2** (cites e4, e5, e7): In real time, SCED runs approximately every five minutes, or more frequently if necessary, and calculates LMPs and Real-Time MCPCs alongside Base Points and Ancillary Service awards. [e4] SCED's second step produces Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs and LMPs, subject to security constraints and other Resource constraints. [e5] In the day-ahead, np-04 uses a matching system-wide term: the DAM Shadow Price for the system power balance constraint for the hour. [e7]
- **How it works #3** (cites e12, e9): LMPs are not what settles directly for most participants. Settlement Point Prices are calculated using LMP data. [e12] The Load Zone LMP is calculated for each SCED interval using State Estimator Load data and the LMPs at the Electrical Buses in the zone. [e9]
- **ERCOT context #1** (cites e10, e6, e8): Real-time LMPs in ERCOT now come out of a SCED that also procures Ancillary Services: the IMM reports that with real-time co-optimization (RTC) the real-time market simultaneously procures energy and ancillary services. [e10] There is a cap at the effective Value of Lost Load: any Electrical Bus LMP above it is reset, and System Lambda and Real-Time MCPCs from SCED Step 2 are also capped. [e6] A separate administrative floor of -$251/MWh applies to Real-Time Settlement Point Prices, after adding the Real-Time Reliability Deployment Price Adders for Energy. [e8]
- **Key facts #1** (cites e1): - LMP is a bus-level price, produced by either the DAM process or the SCED process. [e1]
- **Key facts #2** (cites e2): - System Lambda is the energy component of LMP at each Settlement Point. [e2]
- **Key facts #3** (cites e4): - SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]
- **Key facts #4** (cites e6): - Electrical Bus LMPs above the effective VOLL are adjusted down before Real-Time Settlement Point prices are calculated. [e6]
- **Key facts #5** (cites e8): - Real-Time Settlement Point Prices have an administrative floor of -$251/MWh. [e8]
- **Common confusion #1** (cites e12): - LMP versus Settlement Point Price: the LMP is the bus-level output of DAM or SCED, while the Settlement Point Price is the price actually used in Settlement, calculated from LMP data by formula. [e12] See the spp topic.
- **Common confusion #2** (cites e2, e11): - LMP versus System Lambda: System Lambda is only the energy component; the LMP at a given bus also reflects congestion, since the shadow price of a constraint sets congestion prices at the locations it affects. [e2][e11]
- **Common confusion #3** (cites e8): - The Real-Time Settlement Point Price includes the Reliability Deployment Price Adder for Energy; the LMP alone does not. [e8]
- **Questions #2** (cites e2, e5): The protocol text identifies System Lambda as the energy component of LMP at each Settlement Point. [e2] System Lambda is the Shadow Price on the power balance constraint. [e2] The location-specific differences come from the Shadow Prices of binding constraints produced in the same optimization. [e5]
- **Questions #4** (cites e4): SCED calculates LMPs approximately every five minutes, or more frequently if necessary. [e4]
- **Questions #6** (cites e12, e8): Settlement Point Prices are calculated from LMP data with formulas, and real-time prices add the Reliability Deployment Price Adder for Energy and are floored at -$251/MWh. [e12][e8]
- **Link to spp** (cites e12): determines SPP (Settlement Point Price): Settlement Point Prices are calculated from LMP data. [e12]
- **Link to system-lambda** (cites e2): composed-of System Lambda: System Lambda is the energy component of the LMP at each Settlement Point. [e2]
- **Link to shadow-price** (cites e11): composed-of Shadow Price: The shadow price of a constraint determines congestion prices at locations that affect it, per the IMM. [e11]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): SCED is the real-time process that produces Real-Time LMPs. [e4]
- **Link to dam** (cites e1): related Day-Ahead Market (DAM): The DAM process produces Day-Ahead LMPs. [e1]
- **Link to congestion** (cites e11): related Transmission Congestion: The IMM says the shadow price of a violated constraint determines congestion prices at locations that affect it. [e11]
- **Link to resource-node** (cites e13): related Resource Node: The day-ahead Settlement Point Price at a Resource Node is the LMP at that node. [e13]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) An LMP is the marginal cost of serving one more MW at a specific bus: a system-wide energy price plus whatever the binding transmission constraints add or subtract at that location. ERCOT computes them every five minutes in real time and hourly in the day-ahead, and settlement prices are built from them.

