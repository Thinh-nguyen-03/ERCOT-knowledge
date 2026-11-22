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

### e9 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.1, Calculation of ERCOT-Wide Unaccounted For Energy, formula and variable definitions · text copy line 657 · heading above: 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy

BEFORE: ….4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy (1) The DAS will calculate ERCOT-wide UFE as the difference between the total ERCOT generation and the total Load, adjusted for losses in ERCOT during each Settlement Interval. UFE may be positive or negative in any single Settlement Interval. 
QUOTE: UFE _(i) (MWh) = ERCOT Generation _(i) _(Total) - ERCOT Net Loss Adjusted Load _(i) _(Total)
AFTER:  The above variables are defined as follows: ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Description -------------------------------…

### e10 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.1, variable definitions · text copy line 666 · heading above: 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy

BEFORE: …------------------------- Variable Unit Description -------------------------------------------- ------ ------------------------------------------------------------------------------------------------------------------------------------------------- UFE _(i) MWh Total ERCOT system UFE per interval. 
QUOTE: ERCOT Generation _(i) _(Total) MWh Total ERCOT internal generation plus sum of approved ERCOT DC Tie imports.
AFTER:  ERCOT Net Loss Adjusted Load _(i) _(Total) MWh Total ERCOT load plus Block Load Transfer (BLT) exports plus sum of approved DC Tie exports, adjusted for distribution and transmission losses. i Interval -------------------------------------------------------------------------------------------------…

### e11 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.1, variable definitions · text copy line 668 · heading above: 11.4.6.1 Calculation of ERCOT-Wide Unaccounted For Energy

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------- UFE _(i) MWh Total ERCOT system UFE per interval. ERCOT Generation _(i) _(Total) MWh Total ERCOT internal generation plus sum of approved ERCOT DC Tie imports. 
QUOTE: ERCOT Net Loss Adjusted Load _(i) _(Total) MWh Total ERCOT load plus Block Load Transfer (BLT) exports plus sum of approved DC Tie exports, adjusted for distribution and transmission losses.
AFTER:  i Interval ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 11.4.6.2 Allocation of Unaccounted For Energy (1) ERCOT will allocate UFE to specific cate…

### e12 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (2) · text copy line 685 · heading above: 11.4.6.2 Allocation of Unaccounted For Energy

BEFORE: …termined using the following UFE category weighting factors: (a) 0.0 - Transmission voltage level IDR Non-Opt-In Entities (NOIEs); (b) 0.10 - Transmission voltage level IDR Premises; (c) 0.50 - Distribution voltage level IDR Premises; and (d) 1.00 - Distribution voltage level profiled Premises. (2) 
QUOTE: The ERCOT DAS shall provide a mechanism to change the UFE category weighting factors for specific transition periods.
AFTER:  11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories (1) For each Premise category, and for each Settlement interval, the UFE allocated to each UFE category is calculated as follows: UFE _(PRiz) = UFE _(iz) * [(f _(PRiz) * L _(PRiz)) / L _(UFEiz)] UFE _(IDRiz) = UFE _(iz)…

### e13 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.3, Allocation to UFE Categories, paragraph (1) · text copy line 691 · heading above: 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories

BEFORE: …a mechanism to change the UFE category weighting factors for specific transition periods. 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories (1) For each Premise category, and for each Settlement interval, the UFE allocated to each UFE category is calculated as follows: 
QUOTE: UFE _(PRiz) = UFE _(iz) * [(f _(PRiz) * L _(PRiz)) / L _(UFEiz)]
AFTER:  UFE _(IDRiz) = UFE _(iz) * [(f _(IDRiz) * L _(IDRiz)) / L _(UFEiz)] UFE _(TRiz) = UFE _(iz) * [(f _(TRiz) * L _(TRiz)) / L _(UFEiz)] UFE _(TNOIEiz) = UFE _(iz) * [(f _(TNOIEiz) * L _(TNOIEiz)) / L _(UFEiz)] L _(UFEiz) = f _(PRiz) * L _(PRiz) + f _(IDRiz) * L _(IDRiz) + f _(TRiz) * L _(TRiz) + f _(T…

### e14 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.3, paragraph (1) · text copy line 699 · heading above: 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories

BEFORE: …y is calculated as follows: UFE _(PRiz) = UFE _(iz) * [(f _(PRiz) * L _(PRiz)) / L _(UFEiz)] UFE _(IDRiz) = UFE _(iz) * [(f _(IDRiz) * L _(IDRiz)) / L _(UFEiz)] UFE _(TRiz) = UFE _(iz) * [(f _(TRiz) * L _(TRiz)) / L _(UFEiz)] UFE _(TNOIEiz) = UFE _(iz) * [(f _(TNOIEiz) * L _(TNOIEiz)) / L _(UFEiz)] 
QUOTE: L _(UFEiz) = f _(PRiz) * L _(PRiz) + f _(IDRiz) * L _(IDRiz) + f _(TRiz) * L _(TRiz) + f _(TNOIEiz) * L _(TNOIEiz)
AFTER:  The above variables are defined as follows: -------------------------------------------------------------------------------------------------------------------------------- Variable Unit Description ---------------- ------- ---------------------------------------------------------------------------…

### e15 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.3, variable definitions · text copy line 732 · heading above: 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories

BEFORE: …iled Premises per interval per zone. f _(IDRiz) Adjustment percentage for IDR Premises per interval per zone. f _(TRiz) Adjustment percentage for transmission Premises per interval per zone. f _(TNOIEiz) Adjustment percentage for transmission voltage level non-opt-in Premises per interval per zone. 
QUOTE: L _(UFEiz) Adjusted total UFE allocation reference Load per interval per zone.
AFTER:  -------------------------------------------------------------------------------------------------------------------------------- 11.4.6.4 Unaccounted For Energy Allocation to Load Serving Entities within Unaccounted For Energy Categories (1) The UFE allocated to each UFE category type is then alloc…

### e16 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.3, variable definitions · text copy line 724 · heading above: 11.4.6.3 Unaccounted For Energy Allocation to Unaccounted For Energy Categories

BEFORE: … _(IDRiz) Aggregate Load of all IDR category - adjusted for losses per interval per zone. L _(TRiz) Aggregate Load of transmission category - adjusted for losses per interval per zone. L _(TNOIEiz) Aggregate Load of transmission level non opt-in category - adjusted for losses per interval per zone. 
QUOTE: f _(PRiz) Adjustment percentage for profiled Premises per interval per zone.
AFTER:  f _(IDRiz) Adjustment percentage for IDR Premises per interval per zone. f _(TRiz) Adjustment percentage for transmission Premises per interval per zone. f _(TNOIEiz) Adjustment percentage for transmission voltage level non-opt-in Premises per interval per zone. L _(UFEiz) Adjusted total UFE alloca…

### e17 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.6.4, paragraph (1) · text copy line 739 · heading above: 11.4.6.4 Unaccounted For Energy Allocation to Load Serving Entities within Unaccounted For Energy Categories

BEFORE: …------------------- 11.4.6.4 Unaccounted For Energy Allocation to Load Serving Entities within Unaccounted For Energy Categories (1) The UFE allocated to each UFE category type is then allocated to the LSEs within each UFE category based upon each LSE's share of the total Load for the UFE category. 
QUOTE: UFE _(PRiz) _(LSE) = UFE _(PRiz) * (Max (0, L _(PRiz LSE)) / L _(PRiz))
AFTER:  UFE _(IDRiz LSE) = UFE _(IDRiz) * (Max (0, L _(IDRiz LSE)) / L _(IDRiz)) UFE _(TRiz LSE) = UFE _(TRiz) * (Max (0, L _(TRiz LSE)) / L _(TRiz)) UFE _(TNOIEiz LSE) = UFE _(TNOIEiz) * (Max (0, L _(TNOIEiz LSE)) / L _(TNOIEiz)) The above variables are defined as follows: --------------------------------…

### e18 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.6.1, Overview, paragraph (1)(b) · text copy line 883 · heading above: 11.6.1 Overview

BEFORE: …is report consisting of UFE data analysis from the preceding calendar year. This report will be based on final Settlement data and will be posted to the ERCOT website by April 30^(th). The appropriate Technical Advisory Committee (TAC) Subcommittee may: (a) Request interim UFE analysis reports; (b) 
QUOTE: Establish a task force for further UFE investigation that may include the establishment of UFE analysis zones. UFE analysis zones will not be used for Settlement purposes until adopted as UFE Settlement zones.
AFTER:  Before adoption as UFE Settlement zones the following will be considered, at a minimum: (i) Cost-benefit analysis; (ii) Installation requirements for Revenue Quality Meters; (iii) Impact on the Settlement system; (iv) Impact on Market Participant systems; and (v) Cost of UFE to Market Participants;…

### e19 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.6.2, Annual Unaccounted For Energy Analysis Report, paragraph (1) · text copy line 901 · heading above: 11.6.2 Annual Unaccounted For Energy Analysis Report

BEFORE: …o Market Participants; and (c) Identify factors that are contributing to UFE and work with the appropriate Entities to rectify problems causing UFE. (2) ERCOT currently has one UFE zone for Settlement purposes, which encompasses all of ERCOT. 11.6.2 Annual Unaccounted For Energy Analysis Report (1) 
QUOTE: The annual UFE analysis report will contain both ERCOT-wide and UFE allocation category quantities as follows:
AFTER:  (a) Total UFE MWhs; (b) Total UFE cost; (c) Percent of total UFE to ERCOT Load; (d) Percent of total UFE cost; and (e) Notice of any factors that may be contributing to UFE.…

### e20 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.6.2, paragraph (1)(a)-(e) · text copy line 903 · heading above: 11.6.2 Annual Unaccounted For Energy Analysis Report

BEFORE: …ties to rectify problems causing UFE. (2) ERCOT currently has one UFE zone for Settlement purposes, which encompasses all of ERCOT. 11.6.2 Annual Unaccounted For Energy Analysis Report (1) The annual UFE analysis report will contain both ERCOT-wide and UFE allocation category quantities as follows: 
QUOTE: (a) Total UFE MWhs; (b) Total UFE cost; (c) Percent of total UFE to ERCOT Load;
AFTER:  (d) Percent of total UFE cost; and (e) Notice of any factors that may be contributing to UFE.…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.4, DC Tie Schedules, paragraph (4) · text copy line 640 · heading above: 4.4.4 DC Tie Schedules

BEFORE: …napshot are considered in the Adjustment Period snapshot in accordance with the market timeline. (3) A QSE that is an importer into ERCOT through a DC Tie in a Settlement Interval under an approved e-Tag must be treated as a Resource at that DC Tie Settlement Point for that Settlement Interval. (4) 
QUOTE: A QSE that is an exporter from ERCOT through a DC Tie in a Settlement Interval under an approved e-Tag must be treated as a Load at the DC Tie Settlement Point for that Settlement Interval and is responsible for allocated Transmission Losses, Unaccounted for Energy (UFE), System Administration Fee, and any other applicable ERCOT fees.
AFTER:  (5) ERCOT shall approve any e-Tag that does not exceed the available physical capacity of the DC Tie and any limits supplied the non-ERCOT Control Area for the time period for which the e-Tag is requested unless a DC Tie Curtailment Notice is in effect for the particular DC Tie for which the e-Tag …

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval, paragraph (1) · text copy line 4409 · heading above: 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------- 6.6.2.2 QSE Load Ratio Share for a 15-Minute Settlement Interval (1) Each QSE's Load Ratio Share (LRS) for a 15-minute Settlement Interval is calculated as follows: 
QUOTE: LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT
AFTER:  The above variables are defined as follows: -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Variable Unit Descriptio…

### e23 · `np-09` · tier 1 · ERCOT Nodal Protocols, Section 9: Settlement and Billing (effective 2026-08-01)
locator: Section 9.16.1, ERCOT System Administration Fee, paragraph (3) · text copy line 1488 · heading above: 9.16.1 ERCOT System Administration Fee

BEFORE: …llowing PUCT approval of a change in the ERCOT System Administration fee, ERCOT shall post the changed fee and effective date on the ERCOT website. (3) Each QSE shall pay the ERCOT System Administration fee. The ERCOT System Administration fee is for each 15-minute Settlement Interval for each QSE. 
QUOTE: ESACAMT _(q) = LAFF * max(0,[]RTAML _(q, p))
AFTER:  The above variables are defined as follows: +---------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | Variable | Unit | Definition | +…

### e24 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Data Aggregation · text copy line 545

BEFORE: …dize the reliability or integrity of the ERCOT System or ERCOT's ability to perform the functions of an independent organization under the Public Utility Regulatory Act (PURA). D [Back to Top] Data Agent-Only Qualified Scheduling Entity (QSE) (see Qualified Scheduling Entity (QSE)) Data Aggregation 
QUOTE: The process of netting, grouping, and summing Load consumption data, applying appropriate profiles, Transmission Loss Factors (TLFs), and Distribution Loss Factors (DLFs) and calculating and allocating UFE to determine each QSE and/or Load Serving Entity's (LSE's) responsibility by Settlement Interval by Load Zone and by other prescribed aggregation determinants.
AFTER:  Data Aggregation System (DAS) The database and communication system that collects meter data from TSPs, DSPs and ERCOT Polled Settlement (EPS) Meters. The system performs aggregation functions to Load data in order to satisfy certain objectives, such as providing TSPs with Load share data to use in…

### e25 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.2.1, ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval, variable definitions · text copy line 4398 · heading above: 6.6.2.1 ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- RTAMLTOT MWh Real-Time Adjusted Metered Load Total-The total AML in ERCOT, for the 15-minute Settlement Interval. 
QUOTE: RTAML _(q, p) MWh Real-Time Adjusted Metered Load per Qualified Scheduling Entity (QSE) per Settlement Point-The sum of the AML at the Electrical Buses that are included in Settlement Point p, represented by Qualified Scheduling Entity (QSE) q, for the 15-minute Settlement Interval.
AFTER:  q none A QSE. The summation is over all of the QSEs with metered readings in that interval. p none A Settlement Point. The summation is over all of the Settlement Points. --------------------------------------------------------------------------------------------------------------------------------…

### e26 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.5 (BLT of Load), paragraph (c)(iii) · text copy line 3630 · heading above: 6.5.9.5 Block Load Transfers between ERCOT and Non-ERCOT Control Areas

BEFORE: …i) Treated as non-competitive wholesale Load in the Load Zone containing the ERCOT breaker or switch that initiated the BLT; (ii) Registered in accordance with Section 6.5.9.5.1, Registration and Posting of BLT Points, by the TSP in the ERCOT Control Area responsible for implementing the BLT; (iii) 
QUOTE: Responsible for Unaccounted For Energy (UFE) allocations and Transmission Losses consistent with similarly situated NOIE metering points; and
AFTER:  (iv) Permitted only if the BLT will not jeopardize the reliability of the ERCOT System. Under an Emergency Notice, BLTs that have been implemented may be curtailed or terminated by ERCOT to maintain the reliability of the ERCOT System. (d) BLTs of Load from the ERCOT Control Area are: (i) Treated a…

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

- **How it works #1** (cites e2, e3, e10, e11): ERCOT calculates one ERCOT-wide UFE number for each Settlement Interval as total ERCOT generation minus total loss-adjusted Load, and it can be positive or negative in any interval. [e2] For this calculation, scheduled flow out of ERCOT on a DC Tie counts as Load and scheduled flow in counts as generation. [e3] The inputs are defined in words: generation is internal generation plus approved DC Tie imports [e10], and loss-adjusted Load is total ERCOT load plus Block Load Transfer exports plus approved DC Tie exports, adjusted for distribution and transmission losses. [e11]
- **How it works #2** (cites e3, e4, e12): The calculated UFE is then allocated to positive Loads. [e3] Step one goes to UFE categories using an adjusted Load Ratio Share with category weights: 0.0 for transmission-voltage IDR NOIEs, 0.10 for transmission-voltage IDR Premises, 0.50 for distribution-voltage IDR Premises and 1.00 for distribution-voltage profiled Premises. [e4] The Protocols also require a mechanism to change those weights for specific transition periods. [e12]
- **How it works #3** (cites e5): Step two, within each category, allocates the category's UFE to the LSEs by each LSE's share of the category's Load. [e5]
- **Formula #1** (cites e13, e16, e14, e15, e4) FLAG number-not-in-quote: 6.3, 6.2: Allocation to categories (Section 11.4.6.3): each category's UFE is total UFE for the interval and zone multiplied by that category's weighted share, for example for the profile category UFE_PR = UFE x (f_PR x L_PR) / L_UFE. [e13] Here f is the adjustment percentage for the category [e16] (the Protocol text does not say in so many words that f is the weighting factor of Section 11.4.6.2; this entry reads them as the same, which is an inference), L is the category's aggregate loss-adjusted Load, and L_UFE, the adjusted total UFE allocation reference Load, is the sum of f x L across the four categories. [e14][e15] On that reading, a category with weight 0.0 gets no UFE, and a category with weight 1.00 is charged in proportion to its full Load. [e4]
- **Formula #2** (cites e17, e3) FLAG number-not-in-quote: 11.4, 6.4: Allocation to LSEs (Section 11.4.6.4): the LSE's share of the category's UFE is the category UFE multiplied by Max(0, the LSE's loss-adjusted Load in the category) divided by the category's aggregate Load. [e17] The Max(0, ...) means an LSE with negative Load in a category is treated as zero in the numerator; the allocation is to positive Loads. [e17][e3]
- **ERCOT context #1** (cites e8, e24, e25, e22, e23): UFE ends up inside the load that is settled: Adjusted Metered Load is retail usage adjusted for UFE, losses and DC Tie exports. [e8] The Data Aggregation process is the Protocol-defined step that calculates and allocates UFE to determine each QSE's and LSE's responsibility by Settlement Interval and Load Zone. [e24] The QSE-level AML is the base for Load Ratio Share [e25][e22] and for the ERCOT System Administration Fee, which charges each QSE a rate times its AML. [e23] So UFE reaches dollars through the AML that is billed under those load-based charges; no saved source describes a separate UFE charge type. (Reading of the Protocol text, not a statement from a source.)
- **ERCOT context #2** (cites e21, e26): Some participants outside retail load carry UFE too. A QSE exporting over a DC Tie under an approved e-Tag is treated as Load at the DC Tie Settlement Point and is responsible for allocated Transmission Losses, UFE, the System Administration Fee and other applicable fees. [e21] Block Load Transfers of Load to the ERCOT Control Area are responsible for UFE allocations consistent with similarly situated NOIE metering points. [e26]
- **ERCOT context #3** (cites e7, e18): ERCOT currently uses a single UFE zone for Settlement covering all of ERCOT. [e7] The appropriate TAC subcommittee may form a task force that may establish UFE analysis zones, which are not used for Settlement until adopted as UFE Settlement zones. [e18]
- **ERCOT context #4** (cites e6, e19, e20): ERCOT publishes an annual UFE analysis report on the prior calendar year, based on final Settlement data, by April 30. [e6] The report contains ERCOT-wide and UFE allocation category quantities, including total UFE MWh and total UFE cost. [e19][e20]
- **Key facts #1** (cites e2, e9): - UFE is generation minus loss-adjusted Load, per Settlement Interval, and can be positive or negative. [e2][e9]
- **Key facts #2** (cites e10, e11): - Generation includes approved DC Tie imports; loss-adjusted Load includes BLT exports and approved DC Tie exports. [e10][e11]
- **Key facts #5** (cites e6, e19, e20): - An annual UFE analysis report is posted by April 30 each year, with total UFE MWh and total UFE cost among its contents. [e6][e19][e20]
- **Key facts #6** (cites e21): - DC Tie exporters are treated as Load and are responsible for UFE. [e21]
- **Common confusion #1** (cites e1, e2, e13): UFE is not the same as transmission or distribution losses: losses are removed first, and UFE is what remains after them. [e1] UFE may be positive or negative in any single Settlement Interval. [e2] The category weights are not charges per MWh in dollars; they only set each category's share of the interval's UFE MWh. [e13]
- **Questions #2** (cites e9, e10, e11): For each Settlement Interval, total ERCOT generation (including approved DC Tie imports) minus total loss-adjusted Load (including BLT exports and approved DC Tie exports). [e9][e10][e11]
- **Questions #6** (cites e4, e13): The Protocol sets the category weights at 1.00 for distribution-voltage profiled Premises, 0.50 for distribution-voltage IDR and 0.10 for transmission-voltage IDR, so for equal Load a profiled Premise draws a larger share of each interval's UFE. [e4][e13] The saved sources give the weights but not the reasoning behind them.
- **Questions #8** (cites e2, e13): The Protocol says UFE may be positive or negative in any single interval, so the same allocation formulas apply to a negative amount, which then goes back to Loads as a credit in MWh. [e2][e13] (The credit reading is an inference from the formula, not a quoted statement.)
- **Questions #10** (cites e21): It is treated as Load at the DC Tie Settlement Point and is responsible for allocated UFE along with losses and the System Administration Fee. [e21]
- **Questions #12** (cites e7, e18): One, covering all of ERCOT. A task force could study analysis zones, but they would not be used for Settlement until adopted. [e7][e18]
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

