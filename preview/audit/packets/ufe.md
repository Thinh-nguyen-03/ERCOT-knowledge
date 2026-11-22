# Audit packet: UFE (Unaccounted-For Energy) (ufe)

kind metric · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.1, Calculation of ERCOT-Wide Unaccounted For Energy, paragraph (1) · text copy line 655 · heading above: 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy

BEFORE: …val is then allocated to positive Loads. For the purpose of the UFE calculation, scheduled flow out of ERCOT on a Direct Current Tie (DC Tie) will be deemed as Load, and scheduled flow into ERCOT on a DC Tie will be deemed as generation. 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy (1) 
QUOTE: The DAS will calculate ERCOT-wide UFE as the difference between the total ERCOT generation and the total Load, adjusted for losses in ERCOT during each Settlement Interval. UFE may be positive or negative in any single Settlement Interval.
AFTER:  UFE _(i) (MWh) = ERCOT Generation _(i) _(Total) - ERCOT Net Loss Adjusted Load _(i) _(Total) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e4 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (1) · text copy line 675 · heading above: 11.4.6.2 Allocation of Unaccounted For Energy

BEFORE: …or distribution and transmission losses. i Interval ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 11.4.6.2 Allocation of Unaccounted For Energy (1) 
QUOTE: ERCOT will allocate UFE to specific categories based upon adjusted Load Ratio Share. The adjusted Load Ratio Share will be determined using the following UFE category weighting factors: (a) 0.0 - Transmission voltage level IDR Non-Opt-In Entities (NOIEs); (b) 0.10 - Transmission voltage level IDR Premises; (c) 0.50 - Distribution voltage level IDR Premises; and (d) 1.00 - Distribution voltage level profiled Premises.
AFTER:  (2) The ERCOT DAS shall provide a mechanism to change the UFE category weighting factors for specific transition periods. 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories (1) For each Premise category, and for each Settlement interval, the UFE allocated to each UFE ca…

### e5 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.4, paragraph (1) · text copy line 737 · heading above: 11.4.6.4 Unaccounted For Energy Allocation to Load Serving Entities within Unaccounted For Energy Categories

BEFORE: …otal UFE allocation reference Load per interval per zone. -------------------------------------------------------------------------------------------------------------------------------- 11.4.6.4 Unaccounted For Energy Allocation to Load Serving Entities within Unaccounted For Energy Categories (1) 
QUOTE: The UFE allocated to each UFE category type is then allocated to the LSEs within each UFE category based upon each LSE's share of the total Load for the UFE category.
AFTER:  UFE _(PRiz) _(LSE) = UFE _(PRiz) * (Max (0, L _(PRiz LSE)) / L _(PRiz)) UFE _(IDRiz LSE) = UFE _(IDRiz) * (Max (0, L _(IDRiz LSE)) / L _(IDRiz)) UFE _(TRiz LSE) = UFE _(TRiz) * (Max (0, L _(TRiz LSE)) / L _(TRiz)) UFE _(TNOIEiz LSE) = UFE _(TNOIEiz) * (Max (0, L _(TNOIEiz LSE)) / L _(TNOIEiz)) The …

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Adjusted Metered Load (AML) · text copy line 41 · heading above: 2.1 DEFINITIONS

BEFORE: … involving manual intervention. Acquisition Transfer Effective Date The date on which the Acquisition Transfer of ESI IDs from the Losing CR to the Gaining CR takes place. This is the date on which the meter read is taken and is used in Acquisition Transfer transactions. Adjusted Metered Load (AML) 
QUOTE: Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports.
AFTER:  Adjusted Static Models Load Profiles that are generated from statistical models that are based on static historical Load data, and adjusted for conditions of the day (e.g., weather, Season, etc.). Adjustment Period For each Operating Hour, the time between 1800 in the Day-Ahead up to the start of t…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node, variable definitions (MEBR) · text copy line 4799 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node
FLAG pending-box: | | | | [NPRR1188: Replace the description above with the following upon system implementation:] | |
BEFORE: …-----------------------------------------------------------------------------------------------------------+ | | | | | [NPRR1188: Replace the description above with the following upon system implementation:] | | | | | | | | | | | | Calculated Metered Energy for Energy Storage Resource Load at Bus - 
QUOTE: The calculated Non-WSL ESR Charging Load, adjusted for UFE, for the 15-minute Settlement Interval represented as a negative value
AFTER: , for the QSE q, Resource r, at bus b. | | | | | +=============================================================================================================================================================================================================================================+ | | | | +--…

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node, variable definitions (MEBCL) · text copy line 4787 · heading above: 6.6.3.1 Real-Time Energy Imbalance Payment or Charge at a Resource Node
FLAG pending-box: | | [NPRR1188: Insert the variable "MEBCL _(q, r, b)" below upon system implementation:] | | | |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | | | | | MEBCL _(q, r, b) MWh Calculated Metered Energy for CLR Load at Bus-
QUOTE: The calculated CLR Load, adjusted for Unaccounted For Energy (UFE), for the 15-minute Settlement Interval represented as a negative value
AFTER: , for the QSE q, Resource r, at bus b. | | | | | | ------------------ ----- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- …

## Statements to check (new or changed since the last audit)

- **Link to load-ratio-share** (cites e4): related Load Ratio Share (LRS): UFE is allocated to UFE categories using an adjusted Load Ratio Share. [e4]
- **Link to lse** (cites e5): affects LSE (Load Serving Entity): The UFE allocated to each UFE category is then allocated to the LSEs in that category. [e5]
- **Link to settlement-statements** (cites e8): related Settlement Statements & Timeline: UFE is part of the load that gets settled, since Adjusted Metered Load is adjusted for it. [e8]
- **Link to load-profiling** (cites e4): related Load Profiling: Profiled Premises carry the highest UFE weighting. [e4]
- **Link to ams-meters** (cites e2): related AMS Smart Meter Data: The DAS calculates ERCOT-wide UFE from total generation and loss-adjusted Load. [e2]
- **Link to qse** (cites e8): related QSE (Qualified Scheduling Entity): Adjusted Metered Load is retail usage adjusted for UFE; QSE-level settlement of it was not sourced here. [e8]
- **Link to energy-storage-resource** (cites e27): related Energy Storage Resource (ESR): A pending revision (NPRR1188, not yet in force) would define Real-Time settlement metered energy at the bus for ESR Load as the calculated Non-WSL ESR charging Load adjusted for UFE. [e27]
- **Link to clr** (cites e28): related CLR (Controllable Load Resource): A pending revision (NPRR1188, not yet in force) would add a variable for calculated CLR Load adjusted for UFE in the Real-Time settlement metered energy at the bus. [e28]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) UFE is the gap between what generation put on the grid and what metered load plus losses accounts for. ERCOT spreads that gap back over load by category and then by LSE, so a retailer with a lot of profiled distribution-level load picks up more of it per MWh than one with large transmission-level load.

