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

### e8 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.1, Congestion LMP Component · text copy line 39 · heading above: 3.1 Congestion LMP Component

BEFORE: …int, the Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component The LMPs at Electrical Buses are calculated as follows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ 
QUOTE: Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line.
AFTER:  Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of El…

### e9 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.1, Congestion LMP Component · text copy line 49 · heading above: 3.1 Congestion LMP Component

BEFORE: …ows: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$ Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. 
QUOTE: Note that the Shadow Prices for congested transmission lines are positive, otherwise they are equal zero. The Shift Factors for Electrical Buses on one side of transmission line are negative and for Electrical Buses on the other side of transmission line are positive.
AFTER:  The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. The congestion component of LMP represents a price incentive to generation units connected at …

### e10 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.3, Shift Factor Cutoff · text copy line 109 · heading above: 3.3 Shift Factor Cutoff

BEFORE: …ion of an expensive Resource with negative Shift Factor below cut off. The Shift Factor cutoff will cause mismatch between optimized line power flow and actual line power flow that will happen when dispatch Base Points are deployed. This mismatch can degrade the efficiency of congestion management. 
QUOTE: The Shift Factor cutoff can reduce volume of Shift Factor data and filter out numerical errors in calculating Shift Factors. Currently the default value of Shift Factor cut off is 0.0001) and is implemented at the Energy Management System (EMS) to reduce the amount of data transferred to MMS. Any threshold above that level will cause a distortion of congestion management process.
AFTER:  3.4 Methodology Outline The methodology for determination of maximal Shadow Prices for transmission constraints could be based on the following setting: (a) Determine Shift Factor efficiency threshold SF_(threshold)^(efficiency) (default x%) (b) Determine maximal LMP congestion component ΔLMP_(max)…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (7)(a)-(c) · text copy line 8407 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …======================================================================+ +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM;
AFTER:  (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and (c) The Resource has a Shift Factor on the import side of the con…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.1, threshold table (SFP4) · text copy line 8315 · heading above: 3.19.1 Constraint Competitiveness Test Definitions

BEFORE: …SFP3 Minimum Shift Factor threshold for a constraint to be eligible to be a Competitive Constraint as part of the SCED CCT process 2% DMEECP Threshold for the ECI Effective Capacity for a DME to determine if their Managed Capacity for an Entity is eligible to be mitigated as part of SCED Step 2 10% 
QUOTE: SFP4 Minimum Shift Factor threshold below which a Resource will not have mitigation applied in SCED Step 2 2%
AFTER:  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 3.19.2 Element Competitiveness Index Calculation (1) To compute the ECI on the import side, first determine the "ECI Ef…

### e13 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, variable definitions · text copy line 1483 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …straint c for the hour. DRF _(c) none Deration Factor per constraint-The deration factor of the constraint c for the hour, equal to the MW amount by which the constraint is oversold divided by the total MW amount of the positive impacts on the constraint of all CRRs existing prior to DAM execution. 
QUOTE: DAWASF _(j, c) none Day-Ahead Weighted Average Shift Factor at source per constraint-The Day-Ahead Shift Factor for the source Settlement Point and the directional network element for constraint c, in the hour.
AFTER:  DAWASF _(k, c) None Day-Ahead Weighted Average Shift Factor at sink per constraint-The Day-Ahead Shift Factor for the sink Settlement Point and the directional network element for constraint c, in the hour. DAOBLHVPR _((j, k)) $/MWh Day-Ahead Obligation Hedge Value Price per source and sink pair-Th…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, variable definitions · text copy line 2792 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …ASL $/MWh Day-Ahead System LambdaThe DAM Shadow Price for the system power balance constraint for the hour. DASP _(c) $/MWh Day-Ahead Shadow Price for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone 
QUOTE: The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour.
AFTER:  DASF _(pb, ,c) none Day-Ahead Shift factor of the power flow busThe DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour. DADF _(pb, c) none Day-Ahead Distribution factor per power flow bus for a constraintThe Load distribution factor for …

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable definitions · text copy line 2794 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: … for a binding transmission constraintThe DAM Shadow Price for the constraint c for the hour. DALZSF _(c) none Day-Ahead Shift factor of the Load Zone The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour. DASF _(pb, ,c) none Day-Ahead Shift factor of the power flow bus
QUOTE: The DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour.
AFTER:  DADF _(pb, c) none Day-Ahead Distribution factor per power flow bus for a constraintThe Load distribution factor for power flow bus pb in the Load Zone for the constraint c for the hour. DAL _(pb, c) MW Day-Ahead Load at power flow bus for a constraintThe DAM distributed load for power flow bus p…

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, variable definitions · text copy line 2796 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …or the constraint c for the hour. DASF _(pb, ,c) none Day-Ahead Shift factor of the power flow busThe DAM Shift Factor of a power flow bus pb that is a component of the Load Zone for the constraint c for the hour. DADF _(pb, c) none Day-Ahead Distribution factor per power flow bus for a constraint
QUOTE: The Load distribution factor for power flow bus pb in the Load Zone for the constraint c for the hour.
AFTER:  DAL _(pb, c) MW Day-Ahead Load at power flow bus for a constraintThe DAM distributed load for power flow bus pb in the Load Zone for the constraint c for the hour. b none An Electrical Bus that is assigned to the DC Tie Load Zone. pb none An energized power flow bus that is assigned to the Load Zo…

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.2, Communicating DAM Results, paragraph (7) (current text) · text copy line 2733 · heading above: 4.5.2 Communicating DAM Results

BEFORE: …cipants and the ERCOT Board finds that such prices should be corrected for an Operating Day. (d) In review of DAM LMPs, MCPCs, or Settlement Point Prices, the ERCOT Board may rely on the same reasons identified in paragraph (4) above to find that the prices should be corrected for an Operating Day. 
QUOTE: (7) As soon as practicable, but no later than 1330, ERCOT shall make available the Day-Ahead Shift Factors for binding constraints in the DAM and post to the Market Information System (MIS) Secure Area.
AFTER:  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1239: Replace paragraph (7) above with the following upon system implementation:] | | | | (7) As soon as practicabl…

### e18 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.1, Congestion LMP Component · text copy line 85 · heading above: 3.2 Network Congestion Efficiency

BEFORE: …d (10%) are not efficient in network congestion. The LMP congestion component is the main incentive controlling generating unit dispatch. It is determined by Shift Factors and Shadow Prices for transmission constraints: $\Delta LMP_{EB}^{cong} = \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$. 
QUOTE: Generating units with small Shift Factors (i.e. below Shift Factor threshold) will not be as effective in resolving constraints as will generation units with higher shift factors on the constraint. If there are no efficient generating units then the Shadow Price must be increased to get enough contribution from inefficient units. Therefore, high Shadow Prices indicate inefficient congestion management.
AFTER:  The maximal value of LMP congestion component ΔLMP_(max)^(cong) directly limits the transmission congestion costs: $C_{\cos t}^{cong} = \sum_{unit}^{\sum}{\Delta LMP_{\max}^{cong_{unit}^{opt}}}$. The efficiency of a generating unit contribution can be determined by maximal value of LMP congestion c…

### e19 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.3, Shift Factor Cutoff · text copy line 107 · heading above: 3.3 Shift Factor Cutoff

BEFORE: …s with a Shift Factor above the cut off will have to be moved more to account for the increase in overload caused by increasing generation of an inexpensive Resource with positive Shift Factor below cut off and decreasing generation of an expensive Resource with negative Shift Factor below cut off. 
QUOTE: The Shift Factor cutoff will cause mismatch between optimized line power flow and actual line power flow that will happen when dispatch Base Points are deployed. This mismatch can degrade the efficiency of congestion management.
AFTER:  The Shift Factor cutoff can reduce volume of Shift Factor data and filter out numerical errors in calculating Shift Factors. Currently the default value of Shift Factor cut off is 0.0001) and is implemented at the Energy Management System (EMS) to reduce the amount of data transferred to MMS. Any t…

### e20 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, variable definitions · text copy line 1481 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …or the hour. OBLDRPR _((j, k)) $/MW per hour Obligation Deration Price per source and sink pair-The deration price of a PTP Obligation with the source j and the sink k, for the hour. DASP _(c) $/MW per hour Day-Ahead Shadow Price per constraint-The DAM Shadow Price of the constraint c for the hour. 
QUOTE: DRF _(c) none Deration Factor per constraint-The deration factor of the constraint c for the hour, equal to the MW amount by which the constraint is oversold divided by the total MW amount of the positive impacts on the constraint of all CRRs existing prior to DAM execution.
AFTER:  DAWASF _(j, c) none Day-Ahead Weighted Average Shift Factor at source per constraint-The Day-Ahead Shift Factor for the source Settlement Point and the directional network element for constraint c, in the hour. DAWASF _(k, c) None Day-Ahead Weighted Average Shift Factor at sink per constraint-The D…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (7)(b) · text copy line 8409 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (a) A constraint has been determined to be a Non-Competitive Constraint by either the SCED CCT or the IMM; 
QUOTE: (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and
AFTER:  (c) The Resource has a Shift Factor on the import side of the constraint with an absolute value greater than SFP4; (8) Once mitigation has been applied to a Resource for a SCED interval, it shall remain applied for the remainder of the Operating Hour regardless of the conditions listed in paragraph…

### e22 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.1, Congestion LMP Component · text copy line 37 · heading above: 3.1 Congestion LMP Component

BEFORE: …unique to subsets of the full constraint set. For the Power Balance constraint, the Shadow Price Cap is a single value. 3. Elements for Methodology for Setting the Network Transmission System-Wide Shadow Price Caps 3.1 Congestion LMP Component The LMPs at Electrical Buses are calculated as follows: 
QUOTE: $LMP_{EB} = \lambda - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$
AFTER:  Where: LMP_(EB) is LMP at Electrical Bus EB λ is System Lambda (Shadow Price of power balance) SF_(EB)^(line) is Shift Factor for Electrical Bus EB for transmission line SP ^(line) is Shadow Price for transmission line. Note that the Shadow Prices for congested transmission lines are positive, othe…

### e23 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.1, Congestion LMP Component · text copy line 55 · heading above: 3.1 Congestion LMP Component

BEFORE: …ine are negative and for Electrical Buses on the other side of transmission line are positive. The congestion component of Electrical Bus LMP is: $$\Delta LMP_{EB}^{cong} = - \sum_{line}^{}{SF_{EB}^{line} \cdot SP_{\ }^{line}}$$ and it can be positive or negative depending on sign of Shift Factors. 
QUOTE: The congestion component of LMP represents a price incentive to generation units connected at that Electrical Bus to increase or decrease power output to manage network congestion.
AFTER:  Note that only marginal units (i.e. units that are able to move, not those dispatched at min/max dispatch limits to resolve other constraints or to provide energy to the system) can participate in resolving network congestion and determining the System Lambda for a particular iteration of SCED. The…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, paragraph (1) · text copy line 2765 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …. 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c)) Where: 
QUOTE: DALZSF _(c) = $\begin{array}{r} \Sigma \\ pb \end{array}$ (DADF _(pb, c) * DASF _(pb, c))
AFTER:  DADF _(pb, c) = DAL _(pb, c) / ($\begin{array}{r} \Sigma \\ pb \end{array}$ DAL _(pb, c)) For a DC Tie Load Zone: DASPP = DALMP _(b) The above variables are defined as follows: --------------------------------------------------------------------------------------------------------------------------…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.6.1.2, Day-Ahead Settlement Point Prices for Load Zones, paragraph (1) · text copy line 2758 · heading above: 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones

BEFORE: …P) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process. 4.6.1.2 Day-Ahead Settlement Point Prices for Load Zones (1) The DASPP for a Load Zone Settlement Point for an hour is calculated as follows: For all Load Zones except Direct Current Tie (DC Tie) Load Zones: 
QUOTE: DASPP = DASL - $\begin{array}{r} \Sigma \\ c \end{array}$(DALZSF _(c) * DASP _(c))
AFTER:  Where: DALZSF _(c) = $\begin{array}{r} \Sigma \\ pb \end{array}$ (DADF _(pb, c) * DASF _(pb, c)) DADF _(pb, c) = DAL _(pb, c) / ($\begin{array}{r} \Sigma \\ pb \end{array}$ DAL _(pb, c)) For a DC Tie Load Zone: DASPP = DALMP _(b) The above variables are defined as follows: -------------------------…

### e26 · `np-07` · tier 1 · ERCOT Nodal Protocols, Section 7: Congestion Revenue Rights (effective 2025-12-05)
locator: Section 7.9.1.1, price used to calculate the derated amount · text copy line 1442 · heading above: 7.9.1.1 Payments and Charges for PTP Obligations Settled in DAM

BEFORE: …OBLTP _(o, (j, k)) = DAOBLPR _((j, k)) * DAOBL _(o, (j, k)) The price based on the difference of the Settlement Point Prices: DAOBLPR _((j, k)) = DASPP _(k) - DASPP _(j) The derated amount: DAOBLDA _(o, (j, k)) = OBLDRPR _((j, k)) * DAOBL _(o, (j, k)) The price used to calculate the derated amount: 
QUOTE: OBLDRPR _((j, k)) = [](Max (0, DAWASF _(j, c) - DAWASF _(k, c)) * DASP _(c) * DRF_(c))
AFTER:  The hedge value: DAOBLHV _(o, (j, k)) = DAOBLHVPR _((j, k)) * DAOBL _(o, (j, k)) The price of the hedge value: If the source, j, is a Load Zone or Hub and the sink, k, is a Resource Node, DAOBLHVPR _((j, k)) = Max (0, MAXRESPR _(k) - DASPP _(j)) If the source, j, is a Resource Node and the sink, k,…

### e27 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.3, Shift Factor Cutoff, note · text copy line 101 · heading above: 3.3 Shift Factor Cutoff

BEFORE: …old and maximal LMP congestion component as follows: SP_(max)^( _(max)^(cong_(threshold)^(efficiency))). The maximal unit power output adjustment ΔP_(max)^(cong) will be determined by condition: OfferPr ice_(unit)(P_(unit) - ΔP_(max)^(cong_(EB)_(threshold)^(efficency)_(max)) 3.3 Shift Factor Cutoff 
QUOTE: Note: This Shift Factor cutoff is not related to above Shift Factor efficiency threshold used for determination of maximal Shadow Price.
AFTER:  Some generating units (Generation Resources and Energy Storage Resources (ESRs) can be excluded from network congestion management by ignoring their contribution in line power flows. Note that this exclusion cannot be performed physically, i.e. all units will always contribute to line power flows a…

### e28 · `np-22p-2025-12` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (current edition) (effective 2025-12-05)
locator: Section 3.3, Shift Factor Cutoff · text copy line 105 · heading above: 3.3 Shift Factor Cutoff

BEFORE: …oring their contribution in line power flows. Note that this exclusion cannot be performed physically, i.e. all units will always contribute to line power flows according to their Shift Factors. Therefore, the Shift Factor cutoff introduces an additional approximation into line power flow modeling. 
QUOTE: Since the effect of the Shift Factors below the cut off on the overload are ignored in the optimization
AFTER: , any Shift Factor cutoff will cause additional re-dispatch of the remaining generating units (Generation Resources and ESRs) participating in the management of congestion on the constraint. I.e. Generation Resources and ESRs with a Shift Factor above the cut off will have to be moved more to accoun…

### e29 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.19.4, paragraph (7)(c) · text copy line 8411 · heading above: 3.19.4 Security-Constrained Economic Dispatch Constraint Competitiveness Test

BEFORE: …e a Non-Competitive Constraint by either the SCED CCT or the IMM; (b) The DME for the Resource is either identified as a pivotal player for the constraint as described in paragraph (4) above or has a percentage of ECI Effective Capacity on the import side for the constraint greater than DMEECP; and 
QUOTE: (c) The Resource has a Shift Factor on the import side of the constraint with an absolute value greater than SFP4;
AFTER:  (8) Once mitigation has been applied to a Resource for a SCED interval, it shall remain applied for the remainder of the Operating Hour regardless of the conditions listed in paragraph (7) above. 3.20 Identification of Chronic Congestion (1) A constraint that has been binding in Real-Time on three …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e8, e9): Shift factors apply to each constraint at the bus level. In the LMP calculation they are the weights on the constraint shadow prices: the LMP at an Electrical Bus is System Lambda minus, for each constraint, the bus's shift factor multiplied by that constraint's shadow price. [e8] Shadow prices on congested lines are positive and otherwise zero, and buses on one side of a line have negative shift factors while buses on the other side have positive ones. [e9] The sign of the shift factor therefore decides whether congestion on a line lowers or raises the price at a bus. (The formula is in the Formula section.)
- **How it works #2** (cites e15, e16, e14, e2, e4): Zone and hub prices are built from the bus-level values. In the Day-Ahead Market, ERCOT computes a Load Zone's aggregated shift factor for a constraint from the shift factors of the zone's power flow buses [e15], weighted by Load distribution factors [e16], and the Load Zone's shift factor is used in the Settlement Point Price. [e14] For DAM and CRR Settlement purposes the Load-weighting must be determined using the Load distribution factors. [e2] The North 345 kV Hub Price likewise uses the aggregated shift factors of the Hub Buses for each hour of the DAM. [e4]
- **How it works #3** (cites e3, e17): ERCOT posts the inputs. Every hour it posts the binding transmission constraints with the contingency and overloaded element pairs behind them, and the shift factors by Resource Node, Hub, Load Zone and DC Tie. [e3] For the DAM, ERCOT makes the Day-Ahead Shift Factors for binding constraints available as soon as practicable, but no later than 1330; the current text posts them to the MIS Secure Area. [e17]
- **Formula #1** (cites e22, e8, e23): The LMP at Electrical Bus EB is System Lambda minus the sum, over transmission lines, of the bus's shift factor for the line times the line's shadow price. The methodology writes it as LMP = lambda minus the sum of SF times SP [e22]; in the words of its variable list: LMP is the LMP at Electrical Bus EB, lambda is System Lambda (the shadow price of power balance), SF is the shift factor for the bus and line, and SP is the shadow price for the line. [e8] The shift-factor-weighted term is the congestion component of the bus LMP; the methodology says it is a price incentive to generation at that bus to increase or decrease output to manage congestion. [e22][e23]
- **Formula #2** (cites e14, e15, e16, e24, e25): For a Day-Ahead Load Zone, the DASPP is the Day-Ahead System Lambda minus the sum over constraints of the Load Zone's aggregated shift factor times the constraint's DAM shadow price; the zone's aggregated shift factor is the sum over its power flow buses of the Load distribution factor times the bus shift factor. [e14][e15][e16][e24][e25]
- **Formula #3** (cites e26, e13, e20): In CRR settlement, the deration price for a PTP Obligation is given by a formula (the summation operator is not legible in the saved text, where it shows as "[]") whose terms are the larger of zero and the source Day-Ahead Weighted Average Shift Factor minus the sink one, multiplied by the constraint's Day-Ahead shadow price and the deration factor. [e26][e13][e20]
- **ERCOT context #2** (cites e11, e21, e29, e12): The same threshold idea limits mitigation. Mitigation in SCED Step 2 is applied only when the constraint is non-competitive (by the SCED test or the IMM), the Resource's DME is a pivotal player or holds enough import-side ECI Effective Capacity, and the Resource's shift factor on the import side exceeds SFP4 in absolute value. [e11][e21][e29] (Pending NPRR1182 would also exclude Controllable Load Resources from this paragraph; that is not yet in force.) SFP4 is 2%, the "minimum Shift Factor threshold below which a Resource will not have mitigation applied". [e12]
- **ERCOT context #3** (cites e18, e28, e10, e19): Shift factors also tell you why shadow prices get large. The shadow-price-cap methodology says units with small shift factors are less effective at resolving a constraint, so if no efficient units exist the shadow price must rise to draw enough output from inefficient ones, and high shadow prices therefore indicate inefficient congestion management. [e18] It also describes a separate shift factor cutoff: the effect of shift factors below the cutoff is ignored in the optimization [e28], the default is 0.0001, it is applied in the EMS to cut data volume and filter numerical error [e10], and it creates a mismatch between optimized and actual line flows that can degrade congestion management. [e19]
- **Key facts #2** (cites e8): - Bus LMP = System Lambda minus the sum of (shift factor x shadow price) over constraints. [e8]
- **Key facts #5** (cites e17): - Day-Ahead Shift Factors for binding constraints are due no later than 1330 (current text: MIS Secure Area). [e17]
- **Key facts #6** (cites e5, e12): - SFP3 (competitive-constraint eligibility) and SFP4 (mitigation applicability) are both 2%. [e5][e12]
- **Key facts #7** (cites e10) FLAG number-not-in-quote: 2025: - The EMS shift factor cutoff default is 0.0001, per the December 5, 2025 version of the shadow-price-cap methodology (Attachment P). [e10]
- **Common confusion #1** (cites e1, e2, e16, e27, e10, e5, e12): A shift factor is not a price and not a limit; it is a sensitivity measured to a fixed reference bus. [e1] It also is not the same as a Load distribution factor, which supplies weights for aggregating bus-level values into a zone. [e2][e16] The EMS shift factor cutoff (0.0001 default) is a different thing from the SFP3 and SFP4 competitiveness and mitigation thresholds (2%); the methodology itself says its cutoff is not related to its shadow-price efficiency threshold. [e27][e10][e5][e12]
- **Questions #4** (cites e2, e14, e15, e16): It aggregates the shift factors of the zone's power flow buses for each constraint, weighting by Load distribution factors, and uses the result with the shadow prices in the zone price formula. [e2][e14][e15][e16]
- **Questions #6** (cites e8, e9): Shadow prices on congested lines are positive, but shift factors are negative on one side of the line and positive on the other. Since bus LMP subtracts shift factor times shadow price from System Lambda, a negative shift factor adds to the price and a positive one subtracts. [e8][e9]
- **Questions #8** (cites e29, e12, e18): Mitigation in SCED Step 2 requires a Resource shift factor on the import side above SFP4, which is 2%; below that the Resource is not mitigated. [e29][e12] Small shift factors also mean a Resource is not very effective at resolving the constraint. [e18]
- **Questions #10** (cites e18): The methodology says the shadow price must then be increased to get enough contribution from inefficient units. [e18]
- **Questions #12** (cites e3, e17): ERCOT posts them hourly, by Resource Node, Hub, Load Zone and DC Tie, on the MIS Secure Area; Day-Ahead values follow the DAM by 1330. [e3][e17]
- **Link to shadow-price** (cites e1): related Shadow Price: A shift factor measures the flow on a Transmission Element from a unit injection at a bus, which is a different quantity from the constraint's shadow price. [e1]
- **Link to binding-constraint** (cites e3): related Binding Constraint: ERCOT posts shift factors alongside the binding constraints they apply to. [e3]
- **Link to congestion** (cites e3): related Transmission Congestion: ERCOT posts shift factors by Resource Node, Hub, Load Zone and DC Tie on the MIS Secure Area. [e3]
- **Link to load-zone** (cites e2): used-in Load Zone: For DAM and CRR Settlement purposes, Load Zone prices are built from Load-weighted aggregated shift factors of the zone's power flow buses. [e2]
- **Link to trading-hub** (cites e4): used-in Trading Hubs: The North 345 kV Hub Price uses the aggregated shift factors of the Hub Buses. [e4]
- **Link to gtc** (cites e5): related GTC (Generic Transmission Constraint): The SCED competitiveness test for constraints uses a 2% minimum shift factor threshold. [e5]
- **Link to lmp** (cites e8): determines LMP (Locational Marginal Price): At an Electrical Bus, LMP is System Lambda minus the sum over constraints of shift factor times shadow price. [e8]
- **Link to system-lambda** (cites e8): related System Lambda: System Lambda is the shadow price of the power balance constraint and the first term of the bus LMP formula. [e8]
- **Link to crr** (cites e13): used-in CRR (Congestion Revenue Right): CRR Settlement uses Day-Ahead Weighted Average Shift Factors at source and sink in the deration of PTP Obligations. [e13]
- **Link to market-power-mitigation** (cites e11, e12, e29): used-in Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): SCED Step 2 mitigation applies only to a Resource whose Shift Factor on the import side of a non-competitive constraint exceeds SFP4 (2%). [e11][e12][e29]
- **Link to sced** (cites e10): used-in SCED (Security-Constrained Economic Dispatch): SCED applies a Shift Factor cutoff (default 0.0001 per the shadow-price-cap methodology) when modeling line flows. [e10]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) A shift factor tells you how many MW of a given line's flow one more MW at a bus would cause. Multiply it by the constraint's shadow price and you get the congestion piece of the LMP at that bus, which is why the same binding line can push one side of the system up and the other side down.

