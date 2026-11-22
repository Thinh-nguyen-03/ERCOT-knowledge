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

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph on VOLL cap, item (d) · text copy line 2266

BEFORE: … the limiting element (or identified operator-entered constraint with operator's comments describing the reason and the Resource-specific impacts for any manual overrides). ERCOT shall provide the summary to Market Participants on the MIS Secure Area and to the Independent Market Monitor (IMM). (d) 
QUOTE: Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL. All other Electrical Bus LMPs below the effective VOLL remain unchanged. These adjustments shall be applied to Electrical Bus LMPs prior to calculating Real-Time Settlement Point LMPs, Real-Time Settlement Point Prices, and Real-Time prices for energy metered. The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL.
AFTER:  ERCOT shall post both the capped and uncapped values for Electrical Bus LMPs, System Lambda, and Real-Time MCPCs to the ERCOT website. (15) For each SCED process, in addition to the binding Base Points, Ancillary Service awards, Real-Time MCPCs, and LMPs, ERCOT shall calculate a non-binding project…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1, paragraph (1) · text copy line 3689 · heading above: 6.6.1 Real-Time Settlement Point Prices

BEFORE: …all Market Participants are described in the Operating Guides. 6.6 Settlement Calculations for the Real-Time Energy Operations 6.6.1 Real-Time Settlement Point Prices (1) Real-Time energy Settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs. 
QUOTE: For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy.
AFTER:  ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order: (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specifie…

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

### e14 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P (edition dated December 5, 2025), Section 3.1, Congestion LMP Component · text copy line 35 · heading above: 3.1 Congestion LMP Component

BEFORE: …e value applicable to all constraints, or may be values unique to subsets of the full constraint set. For the Power Balance constraint, the Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component 
QUOTE: The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$
AFTER:  Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. Note that the Shadow Prices for congested transmission lines are positive, othe…

### e15 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P, Section 3.1, definitions under the LMP formula · text copy line 49 · heading above: 3.1 Congestion LMP Component

BEFORE: …ows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. 
QUOTE: Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive.
AFTER:  The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at …

### e16 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P, Section 3.1 · text copy line 55 · heading above: 3.1 Congestion LMP Component

BEFORE: …ine are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. 
QUOTE: The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion.
AFTER:  Note that only marginal units (i.e. units that are able to move, not those dispatched at min/max dispatch limits to resolve other constraints or to provide energy to the system) can participate in resolving network congestion and determining the System Lambda for a particular iteration of SCED. The…

### e17 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P, Section 1 (Purpose) · text copy line 15

BEFORE: …the ERCOT system. In this case, the cost calculated by SCED to resolve either the addition or reduction of one MW of dispatched generation on the power balance constraint is limited to the maximum Shadow Price for the power balance constraint, which is also referred to as the Power Balance Penalty. 
QUOTE: The maximum Shadow Prices for the transmission network constraints and the power balance constraint directly determine the Locational Marginal Prices (LMPs) for the ERCOT Real-Time Market (RTM) in the cases of constraint violations.
AFTER:  This Attachment describes: - the PUCT-approved methodology that the ERCOT staff will use for determining the maximum system-wide Shadow Prices for transmission network constraints and for the power balance constraint, and - the PUCT-approved Shadow Price caps and their effective date. 2. Background…

### e19 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Attachment P, Section 4.1, The Power Balance Penalty · text copy line 295 · heading above: 4.1 The Power Balance Penalty

BEFORE: …ation Resources and ESRs becomes higher than the cost of violating the Power Balance constraint, SCED ceases the re-dispatch of the Generation Resources and ESRs and the objective function is minimized with the Power Balance penalty determined by MW amount of the Power Balance constraint violation. 
QUOTE: In the ERCOT design, SCED implements the under-generation Power Balance Penalty Price as a single value equal to the effective Value of Lost Load (VOLL) plus the effective Real-Time System-Wide Offer Cap (RTSWCAP) plus $4,052.01/MWh. This value determines the maximum System Lambda for a given amount of the Power Balance Constraint violation within the optimization. The SCED over-generation Power Balance Penalty Price is -$250/MWh.
AFTER:  Appendix 1: Day-Ahead Market Optimization Control Parameters The purpose of the Day-Ahead Market (DAM) is to economically co-optimize energy and Ancillary Service by simultaneously clearing offers and bids submitted by the Market Participants to maximize social welfare while observing the transmiss…

### e21 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 30 (OCR), Chapter II.D, Shortage and Reliability Pricing · text copy line 1725

BEFORE: …hed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL). Shortage pricing is efficient when the product of VOLL and the probability of load shed is built into energy and reserve prices during 2025 State of the Market Report | 7 / / Review of Real-Time Market Outcomes shortages. 
QUOTE: In ERCOT's market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low.
AFTER:  In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5. This decline continues a multi-year trend that reflects the significant increase in installed generation capacity in ERCOT, p…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.4, Load Zone LMPs, paragraph (1) · text copy line 3876 · heading above: 6.6.1.4 Load Zone LMPs

BEFORE: …6.1.3 Real-Time Settlement Point Price for a Hub (1) The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions. 6.6.1.4 Load Zone LMPs (1) The Load Zone LMPs shall be posted on the ERCOT website. 
QUOTE: The Load Zone LMP is based on the state-estimated Loads in MW and the Real-Time LMPs at the Electrical Buses included in the Load Zone.
AFTER:  The Load Zone LMP for a Load Zone for a SCED interval is calculated as follows: LZLMP _(y) = [] (RTLMP _(b, y) * LZWF _(b, y)) For all Load Zones except DC Tie Load Zones: LZWF _(b, y) = SEL _(b, y) / ([]SEL _(b, y)) For a DC Tie Load Zone: LZWF _(b, y) = [Max (0.001, SEL _(b, y))] / [Max (0.001, S…

### e23 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, Hub LMPs, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 81 (OCR), Chapter V.B.1, Locational Marginal Prices · text copy line 5151

BEFORE: …. By embedding transmission constraints into prices, LMPs play a central role in guiding efficient operational and investment decisions. Higher prices in constrained areas signal the value of generation that can relieve congestion, while lower prices in unconstrained areas reflect relative surplus. 
QUOTE: In ERCOT's design, LMPs are calculated at individual generation and load nodes, but load is settled at the load-weighted average price of its load zone.
AFTER:  Zonal settlement smooths short-term volatility and facilitates hedging, but it also means some congestion costs are averaged across customers. As a result, LMPs' effectiveness in conveying accurate signals depends on how well load zones align with persistent transmission constraints, directly linki…

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e14, e15, e16) FLAG number-not-in-quote: 2025: The congestion term. ERCOT's Attachment P (edition dated December 5, 2025) gives the bus LMP as System Lambda minus the sum, over transmission lines, of the bus Shift Factor times the line's Shadow Price. [e14] Shadow Prices on congested lines are positive and zero otherwise, and Shift Factors are negative on one side of a line and positive on the other, so the congestion component can be positive or negative at a bus. [e15] That congestion component is a price incentive for units at the bus to raise or lower output to manage congestion. [e16]
- **Formula #1** (cites e14, e15) FLAG number-not-in-quote: 3.1: Bus LMP (Attachment P, Section 3.1): LMP at Electrical Bus EB equals lambda (System Lambda, the Shadow Price of the power balance constraint) minus the sum over lines of SF (the Shift Factor of bus EB for the line) times SP (the Shadow Price of the line). [e14] The SP term is zero for a line that is not congested. [e15]
- **ERCOT context #1** (cites e10, e21, e6, e8): Real-time LMPs in ERCOT now come out of a SCED that also procures Ancillary Services: the IMM reports that with real-time co-optimization (RTC) the real-time market simultaneously procures energy and ancillary services. [e10] The IMM says RTC went live on December 5, 2025, and before that ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e21] There is a cap at the effective Value of Lost Load: any Electrical Bus LMP above it is reset, and System Lambda and Real-Time MCPCs from SCED Step 2 are also capped. [e6] A separate administrative floor of -$251/MWh applies to Real-Time Settlement Point Prices, after adding the Real-Time Reliability Deployment Price Adders for Energy. [e8]
- **Key facts #3** (cites e14) FLAG number-not-in-quote: 2025: - Bus LMP = System Lambda minus the sum of Shift Factor times Shadow Price over lines (Attachment P, December 5, 2025 edition). [e14]
- **Key facts #5** (cites e6): - Electrical Bus LMPs above the effective VOLL are adjusted down before Real-Time Settlement Point prices are calculated. [e6]
- **Common confusion #2** (cites e2, e14): - LMP versus System Lambda: System Lambda is only the energy component; the LMP at a given bus also includes the congestion component from Shadow Prices and Shift Factors. [e2][e14]
- **Common confusion #4** (cites e6, e8): - LMP caps: the VOLL cap applies to Electrical Bus LMPs and System Lambda, while the -$251 floor applies to Settlement Point Prices. [e6][e8]
- **Questions #2** (cites e2, e14, e15): System Lambda is the energy component, and the Attachment P formula subtracts, for each congested line, the bus Shift Factor times the line Shadow Price. [e2][e14] The congestion term can be positive or negative at a given bus. [e15]
- **Questions #8** (cites e17, e11): When constraints are violated, the maximum Shadow Prices for network and power balance constraints directly determine the real-time LMPs. [e17] The IMM adds that the cap sets the shadow price that determines congestion prices at the locations affecting the violated constraint. [e11]
- **Link to spp** (cites e12): determines SPP (Settlement Point Price): Settlement Point Prices are calculated from LMP data. [e12]
- **Link to system-lambda** (cites e2): composed-of System Lambda: System Lambda is the energy component of the LMP at each Settlement Point. [e2]
- **Link to shadow-price** (cites e11): composed-of Shadow Price: The IMM says that when a violated constraint hits its shadow price cap, the shadow price set determines congestion prices at locations that affect it. [e11]
- **Link to sced** (cites e4): related SCED (Security-Constrained Economic Dispatch): SCED is the real-time process that produces Real-Time LMPs. [e4]
- **Link to dam** (cites e1): related Day-Ahead Market (DAM): The DAM process produces Day-Ahead LMPs. [e1]
- **Link to congestion** (cites e11): related Transmission Congestion: The IMM says the shadow price set for a violated constraint (by the shadow price cap) determines congestion prices at locations that affect it. [e11]
- **Link to resource-node** (cites e13): related Resource Node: The day-ahead Settlement Point Price at a Resource Node is the LMP at that node. [e13]
- **Link to shift-factor** (cites e14): composed-of Shift Factors: The Attachment P formula multiplies each Shadow Price by the bus Shift Factor to get the congestion component. [e14]
- **Link to binding-constraint** (cites e15): related Binding Constraint: Only constraints with positive Shadow Prices (congested lines) add a congestion term to the LMP. [e15]
- **Link to load-zone** (cites e22, e29): related Load Zone: The Load Zone LMP is based on state-estimated Loads and the bus LMPs in the zone, and the IMM describes load as settled at the load-weighted average price of its load zone. [e22][e29]
- **Link to trading-hub** (cites e23): related Trading Hubs: The Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses. [e23]
- **Link to negative-prices** (cites e8, e19): related Negative Prices: Real-Time Settlement Point Prices have an administrative floor of -$251/MWh, and the SCED over-generation Power Balance Penalty Price is -$250/MWh. [e8][e19]
- **Link to rtc-b** (cites e21): related RTC+B (Real-Time Co-optimization + Batteries): The IMM says RTC went live on December 5, 2025, and that before then ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e21]

