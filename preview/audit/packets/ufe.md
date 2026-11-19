# Audit packet: UFE (Unaccounted-For Energy) (ufe)

kind metric · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Unaccounted for Energy (UFE) · text copy line 3212

BEFORE: …smission Facilities. Transmission Service Provider (TSP) An Entity under the jurisdiction of the PUCT that owns or operates Transmission Facilities used for the transmission of electricity and provides Transmission Service in the ERCOT Transmission Grid. U [Back to Top] Unaccounted for Energy (UFE) 
QUOTE: The difference between total Load for each Settlement Interval, adjusted for applicable Distribution Losses and Transmission Losses, and total ERCOT generation.
AFTER:  Unit Reactive Limit (URL) The maximum quantity of Reactive Power that a Generation Resource or Energy Storage Resource (ESR) is capable of providing at a 0.95 power factor at its maximum real power capability. Unsubstantiated Load Load submitted by a Transmission and/or Distribution Service Provide…

### e2 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.1, Calculation of ERCOT-Wide Unaccounted For Energy, paragraph (1) · text copy line 655 · heading above: 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy

BEFORE: …val is then allocated to positive Loads. For the purpose of the UFE calculation, scheduled flow out of ERCOT on a Direct Current Tie (DC Tie) will be deemed as Load, and scheduled flow into ERCOT on a DC Tie will be deemed as generation. 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy (1) 
QUOTE: The DAS will calculate ERCOT-wide UFE as the difference between the total ERCOT generation and the total Load, adjusted for losses in ERCOT during each Settlement Interval. UFE may be positive or negative in any single Settlement Interval.
AFTER:  UFE _(i) (MWh) = ERCOT Generation _(i) _(Total) - ERCOT Net Loss Adjusted Load _(i) _(Total) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e3 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6, Unaccounted for Energy Calculation and Allocation, paragraph (1) · text copy line 651 · heading above: 11.4.6 Unaccounted for Energy Calculation and Allocation

BEFORE: …ated retail Load group for UFE. The Data Aggregation process will calculate the difference between net loss adjusted Load for the entire ERCOT System, which has been adjusted for Distribution Losses and Transmission Losses, and the total system Load (generation) in order to determine the total UFE. 
QUOTE: The calculated UFE for each Settlement Interval is then allocated to positive Loads. For the purpose of the UFE calculation, scheduled flow out of ERCOT on a Direct Current Tie (DC Tie) will be deemed as Load, and scheduled flow into ERCOT on a DC Tie will be deemed as generation.
AFTER:  11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy (1) The DAS will calculate ERCOT-wide UFE as the difference between the total ERCOT generation and the total Load, adjusted for losses in ERCOT during each Settlement Interval. UFE may be positive or negative in any single Settlement Interva…

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

### e6 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.6.1, Overview, paragraph (1) · text copy line 879 · heading above: 11.6.1 Overview

BEFORE: …------------------------------------------+ (2) ERCOT will make the aforementioned data for each Settlement run type available to Market Participants via the MIS Certified Area within 48 hours of finalizing the data for Settlement statements. 11.6 Unaccounted For Energy Analysis 11.6.1 Overview (1) 
QUOTE: ERCOT will provide an annual Unaccounted For Energy (UFE) analysis report consisting of UFE data analysis from the preceding calendar year. This report will be based on final Settlement data and will be posted to the ERCOT website by April 30^(th).
AFTER:  The appropriate Technical Advisory Committee (TAC) Subcommittee may: (a) Request interim UFE analysis reports; (b) Establish a task force for further UFE investigation that may include the establishment of UFE analysis zones. UFE analysis zones will not be used for Settlement purposes until adopted…

### e7 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.6.1, Overview, paragraph (2) · text copy line 897 · heading above: 11.6.1 Overview

BEFORE: …on requirements for Revenue Quality Meters; (iii) Impact on the Settlement system; (iv) Impact on Market Participant systems; and (v) Cost of UFE to Market Participants; and (c) Identify factors that are contributing to UFE and work with the appropriate Entities to rectify problems causing UFE. (2) 
QUOTE: ERCOT currently has one UFE zone for Settlement purposes, which encompasses all of ERCOT.
AFTER:  11.6.2 Annual Unaccounted For Energy Analysis Report (1) The annual UFE analysis report will contain both ERCOT-wide and UFE allocation category quantities as follows: (a) Total UFE MWhs; (b) Total UFE cost; (c) Percent of total UFE to ERCOT Load; (d) Percent of total UFE cost; and (e) Notice of an…

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Adjusted Metered Load (AML) · text copy line 41 · heading above: 2.1 DEFINITIONS

BEFORE: … involving manual intervention. Acquisition Transfer Effective Date The date on which the Acquisition Transfer of ESI IDs from the Losing CR to the Gaining CR takes place. This is the date on which the meter read is taken and is used in Acquisition Transfer transactions. Adjusted Metered Load (AML) 
QUOTE: Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports.
AFTER:  Adjusted Static Models Load Profiles that are generated from statistical models that are based on static historical Load data, and adjusted for conditions of the day (e.g., weather, Season, etc.). Adjustment Period For each Operating Hour, the time between 1800 in the Day-Ahead up to the start of t…

## Statements to check

- **Definition #1** (cites e1): Unaccounted for Energy (UFE) is the difference between total Load for each Settlement Interval, adjusted for applicable Distribution Losses and Transmission Losses, and total ERCOT generation. [e1]
- **How it works #1** (cites e2, e3): ERCOT calculates one ERCOT-wide UFE number for each Settlement Interval as total ERCOT generation minus total loss-adjusted Load, and it can be positive or negative in any interval. [e2] For this calculation, scheduled flow out of ERCOT on a DC Tie counts as Load and scheduled flow in counts as generation. [e3]
- **How it works #2** (cites e3, e4, e5): The calculated UFE is then allocated to positive Loads. [e3] It goes first to UFE categories using an adjusted Load Ratio Share with category weights: 0.0 for transmission-voltage IDR NOIEs, 0.10 for transmission-voltage IDR Premises, 0.50 for distribution-voltage IDR Premises and 1.00 for distribution-voltage profiled Premises. [e4] Within each category it is allocated to the LSEs by each LSE's share of the category's Load. [e5]
- **ERCOT context #1** (cites e8, e7): UFE ends up inside the load that is settled: Adjusted Metered Load is retail usage adjusted for UFE, losses and DC Tie exports. [e8] ERCOT currently uses a single UFE zone for Settlement that covers all of ERCOT. [e7]
- **ERCOT context #2** (cites e6): ERCOT publishes an annual UFE analysis report on the prior calendar year, based on final Settlement data, by April 30. [e6]
- **Key facts #1** (cites e2): - UFE is generation minus loss-adjusted Load, per Settlement Interval, and can be positive or negative. [e2]
- **Key facts #2** (cites e4): - Category weights are 0.0, 0.10, 0.50 and 1.00, rising from transmission-voltage NOIEs to distribution-voltage profiled Premises. [e4]
- **Key facts #3** (cites e7): - There is one UFE zone for Settlement, covering all of ERCOT. [e7]
- **Key facts #4** (cites e6): - An annual UFE analysis report is posted by April 30 each year. [e6]
- **Common confusion #1** (cites e1, e2): UFE is not the same as transmission or distribution losses: losses are removed first, and UFE is what remains after them. [e1] UFE may be positive or negative in any single Settlement Interval. [e2]
- **Questions #2** (cites e2, e3): For each Settlement Interval, total ERCOT generation minus total loss-adjusted Load, with DC Tie exports counted as Load and imports as generation. [e2][e3]
- **Questions #4** (cites e3, e4, e5): It is allocated to positive Loads by UFE category using weighting factors, then to LSEs by their share of the category's Load. Profiled distribution-voltage Premises carry the full 1.00 weight. [e3][e4][e5]
- **Questions #6** (cites e7): One, covering all of ERCOT. [e7]
- **Link to load-ratio-share** (cites e4): related Load Ratio Share (LRS): UFE is allocated to UFE categories using an adjusted Load Ratio Share. [e4]
- **Link to lse** (cites e5): affects LSE (Load Serving Entity): The UFE allocated to each UFE category is then allocated to the LSEs in that category. [e5]
- **Link to settlement-statements** (cites e8): related Settlement Statements & Timeline: UFE is part of the load that gets settled, since Adjusted Metered Load is adjusted for it. [e8]
- **Link to load-profiling** (cites e4): related Load Profiling: Profiled Premises carry the highest UFE weighting. [e4]
- **Link to ams-meters** (cites e2): related AMS Smart Meter Data: The DAS calculates ERCOT-wide UFE from total generation and loss-adjusted Load. [e2]
- **Link to qse** (cites e8): related QSE (Qualified Scheduling Entity): Adjusted Metered Load is retail usage adjusted for UFE; QSE-level settlement of it was not sourced here. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) UFE is the gap between what generation put on the grid and what metered load plus losses accounts for. ERCOT spreads that gap back over load by category and then by LSE, so a retailer with a lot of profiled load picks up more of it.

