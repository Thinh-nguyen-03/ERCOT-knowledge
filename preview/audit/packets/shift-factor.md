# Audit packet: Shift Factors (shift-factor)

kind metric · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Shift Factor · text copy line 2955

BEFORE: … RTM True-Up Statement. Shadow Price A price for a commodity that measures the marginal value of this commodity; that is, the rate at which system costs could be decreased or increased by slightly increasing or decreasing, respectively, the amount of the commodity being made available. Shift Factor 
QUOTE: A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus.
AFTER:  Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource. Short-Term Wind Power Forecast (STWPF) An ERCOT produced hourly 50% prob…

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, Load Zones, paragraph (1) · text copy line 2299 · heading above: 3.4 Load Zones

BEFORE: …intain a record of all work approved in accordance with Section 3.3, Management of Changes to ERCOT Transmission Grid, and shall publish, and update monthly, information on the MIS Secure Area regarding each new Transmission Element to be installed on the ERCOT Transmission Grid. 3.4 Load Zones (1) 
QUOTE: ERCOT shall assign every power flow bus to a Load Zone for Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors.
AFTER:  (2) ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The …

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.13, hourly MIS Secure Area postings, paragraph (3)(b)-(c) · text copy line 1588 · heading above: 6.5.7.1.13 Data Inputs and Outputs for the Real-Time Sequence and SCED

BEFORE: …s; (ii) Overloads; (iii) System security violations; and (iv) Base Points. (3) Every hour, ERCOT shall post on the MIS Secure Area the following information: (a) Status of all breakers and switches used in the NSA except breakers and switches connecting Resources to the ERCOT Transmission Grid; (b) 
QUOTE: All binding transmission constraints and the contingency or overloaded element pairs that caused such constraint; and (c) Shift Factors, including Private Use Network Settlement Points, by Resource Node, Hub, Load Zone, and DC Tie.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1239 and NPRR1249: Replace applicable portions of paragraph (3) above with the following upon system implement…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.5.2.1, North 345 kV Hub, paragraph (2) · text copy line 2542 · heading above: 3.5.2.1 North 345 kV Hub (North 345)

BEFORE: …ONE 345 NORTH 65 TRCNR 345 NORTH 66 TRSES 345 NORTH 67 TOKSW 345 NORTH 68 VENSW 345 NORTH 69 WLVEE 345 NORTH 70 W_DENT 345 NORTH 71 WTRML 345 NORTH 72 WCSWS 345 NORTH 73 WEBBS 345 NORTH 74 WHTNY 345 NORTH 75 WCPP 345 NORTH ------------------------------------------------------------------------ (2) 
QUOTE: The North 345 kV Hub Price uses the aggregated Shift Factors of the Hub Buses for each hour of the Settlement Interval of the Day-Ahead Market (DAM) in the Day-Ahead
AFTER:  and is the simple average of the time-weighted Hub Bus prices for each 15-minute Settlement Interval in Real-Time, for each Hub Bus included in this Hub. (3) The Day-Ahead Settlement Point Price of the Hub for a given Operating Hour is calculated as follows: DASPP _(North345) = DASL - $\begin{array…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, threshold table (SFP3) · text copy line 8311 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: … of a constraint for the Long-Term CCT process 2000 SFP2 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the Long-Term CCT process 2% ECIT2 Maximum competitive threshold for ECI on the import side of a constraint for the SCED CCT process 2300 
QUOTE: SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2%
AFTER:  DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10% SFP4 Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2 2% -----------------------…

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (2)(c) · text copy line 8379 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …ng all Available Capacity for a Resource on the import side, except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME. If the constraint cannot be resolved, then the DME will be marked as the pivotal player for resolving the constraint; (c) 
QUOTE: There are negative Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that have an absolute value greater than or equal to SFP3; and
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1182: Replace paragraph (c…

### e7 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, pending NPRR1182 replacement box for paragraph (2)(c) · text copy line 8384 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test
FLAG pending-box: | [NPRR1182: Replace paragraph (c) above with the following upon system implementation:] |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1182: Replace paragraph (c) above with the following upon system implementation:] | | | | 
QUOTE: (c) There are Shift Factors corresponding to Electrical Buses with Available Capacity for a Resource that can help resolve the constraint by increasing power injection or reducing power withdrawal that have an absolute value greater than or equal to SFP3; and
AFTER:  | +=======================================================================================================================================================================================================================================================================+ +------------------------------…

## Statements to check

- **Definition #1** (cites e1): A shift factor measures the flow on a particular Transmission Element caused by a unit injection of power at one Electrical Bus, withdrawn at a fixed reference Electrical Bus. [e1]
- **How it works #1** (cites e2, e4): Shift factors apply to each constraint at the bus level. Load Zone prices for DAM and CRR Settlement purposes are built from those bus-level values: ERCOT calculates a Load Zone Settlement Point Price from the Load-weighted aggregated shift factors of the zone's power flow buses for each constraint, with the Load distribution factors supplying the weights. [e2] The North 345 kV Hub Price likewise uses the aggregated shift factors of the Hub Buses for each hour of the DAM. [e4]
- **How it works #2** (cites e3): ERCOT posts the inputs. Every hour it posts the binding transmission constraints with the contingency and overloaded element pairs behind them, and the shift factors by Resource Node, Hub, Load Zone and DC Tie. [e3]
- **ERCOT context #1** (cites e5, e6, e7): Shift factors also enter the competitiveness screen for constraints. A constraint can only be classed as competitive in the SCED test if, among other conditions, buses with available Resource capacity have negative shift factors whose absolute value is at least the SFP3 threshold, which is set at 2%. [e5][e6] Those are the current text's terms; a pending revision (NPRR1182) would rewrite it to cover shift factors that can help resolve the constraint by raising injection or cutting withdrawal. [e7]
- **Key facts #1** (cites e1): - A shift factor is defined per Transmission Element, from a bus to a fixed reference bus. [e1]
- **Key facts #2** (cites e2): - For DAM and CRR Settlement purposes, Load Zone prices use Load-weighted aggregated shift factors for each constraint. [e2]
- **Key facts #3** (cites e3): - ERCOT posts shift factors hourly by Resource Node, Hub, Load Zone and DC Tie. [e3]
- **Key facts #4** (cites e5): - The minimum shift factor threshold for the SCED competitiveness test is 2%. [e5]
- **Common confusion #1** (cites e1, e2): A shift factor is not a price and not a limit; it is a sensitivity measured to a fixed reference bus. [e1] It also is not the same as a Load distribution factor, which supplies weights for aggregating bus-level values into a zone. [e2]
- **Questions #2** (cites e1) FLAG number-not-in-quote: 10%, 0.10: By the definition, a unit injection at that bus, taken from the fixed reference bus, changes the flow on that element by 10% of the injection. The 0.10 figure is illustrative. [e1]
- **Questions #4** (cites e2): It aggregates the shift factors of the zone's energized power flow buses for each constraint, weighting by Load distribution factors. [e2]
- **Questions #6** (cites e3): ERCOT posts them hourly, by Resource Node, Hub, Load Zone and DC Tie, on the MIS Secure Area. [e3]
- **Link to shadow-price** (cites e1): related Shadow Price: A shift factor measures the flow on a Transmission Element from a unit injection at a bus, which is a different quantity from the constraint's shadow price. [e1]
- **Link to binding-constraint** (cites e3): related Binding Constraint: ERCOT posts shift factors alongside the binding constraints they apply to. [e3]
- **Link to congestion** (cites e3): related Transmission Congestion: ERCOT posts shift factors by Resource Node, Hub, Load Zone and DC Tie on the MIS Secure Area. [e3]
- **Link to load-zone** (cites e2): used-in Load Zone: For DAM and CRR Settlement purposes, Load Zone prices are built from Load-weighted aggregated shift factors of the zone's power flow buses. [e2]
- **Link to trading-hub** (cites e4): used-in Trading Hubs: The North 345 kV Hub Price uses the aggregated shift factors of the Hub Buses. [e4]
- **Link to gtc** (cites e5): related GTC (Generic Transmission Constraint): The SCED competitiveness test for constraints uses a 2% minimum shift factor threshold. [e5]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A shift factor tells you how many MW of a given line's flow one more MW at a bus would cause. It is the sensitivity that links a binding constraint to the price at each location.

