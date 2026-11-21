---
id: ufe
name: UFE (Unaccounted-For Energy)
aliases: [UFE, Unaccounted For Energy, Unaccounted-For Energy]
kind: metric
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: load-ratio-share
    type: related
    note: UFE is allocated to UFE categories using an adjusted Load Ratio Share. [e4]
  - to: lse
    type: affects
    note: The UFE allocated to each UFE category is then allocated to the LSEs in that category. [e5]
  - to: settlement-statements
    type: related
    note: UFE is part of the load that gets settled, since Adjusted Metered Load is adjusted for it. [e8]
  - to: load-profiling
    type: related
    note: Profiled Premises carry the highest UFE weighting. [e4]
  - to: ams-meters
    type: related
    note: The DAS calculates ERCOT-wide UFE from total generation and loss-adjusted Load. [e2]
  - to: qse
    type: related
    note: Adjusted Metered Load is retail usage adjusted for UFE; QSE-level settlement of it was not sourced here. [e8]
  - to: energy-storage-resource
    type: related
    note: A pending revision (NPRR1188, not yet in force) would define Real-Time settlement metered energy at the bus for ESR Load as the calculated Non-WSL ESR charging Load adjusted for UFE. [e27]
  - to: clr
    type: related
    note: A pending revision (NPRR1188, not yet in force) would add a variable for calculated CLR Load adjusted for UFE in the Real-Time settlement metered energy at the bus. [e28]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Unaccounted for Energy (UFE)"
    quote: "The difference between total Load for each Settlement Interval, adjusted for applicable Distribution Losses and Transmission Losses, and total ERCOT generation."
  - id: e2
    source: np-11
    locator: "Section 11.4.6.1, Calculation of ERCOT-Wide Unaccounted For Energy, paragraph (1)"
    quote: "The DAS will calculate ERCOT-wide UFE as the difference between the total ERCOT generation and the total Load, adjusted for losses in ERCOT during each Settlement Interval. UFE may be positive or negative in any single Settlement Interval."
  - id: e3
    source: np-11
    locator: "Section 11.4.6, Unaccounted for Energy Calculation and Allocation, paragraph (1)"
    quote: "The calculated UFE for each Settlement Interval is then allocated to positive Loads. For the purpose of the UFE calculation, scheduled flow out of ERCOT on a Direct Current Tie (DC Tie) will be deemed as Load, and scheduled flow into ERCOT on a DC Tie will be deemed as generation."
  - id: e4
    source: np-11
    locator: "Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (1)"
    quote: "ERCOT will allocate UFE to specific categories based upon adjusted Load Ratio Share. The adjusted Load Ratio Share will be determined using the following UFE category weighting factors: (a) 0.0 - Transmission voltage level IDR Non-Opt-In Entities (NOIEs); (b) 0.10 - Transmission voltage level IDR Premises; (c) 0.50 - Distribution voltage level IDR Premises; and (d) 1.00 - Distribution voltage level profiled Premises."
  - id: e5
    source: np-11
    locator: "Section 11.4.6.4, paragraph (1)"
    quote: "The UFE allocated to each UFE category type is then allocated to the LSEs within each UFE category based upon each LSE’s share of the total Load for the UFE category."
  - id: e6
    source: np-11
    locator: "Section 11.6.1, Overview, paragraph (1)"
    quote: "ERCOT will provide an annual Unaccounted For Energy (UFE) analysis report consisting of UFE data analysis from the preceding calendar year. This report will be based on final Settlement data and will be posted to the ERCOT website by April 30^(th)."
  - id: e7
    source: np-11
    locator: "Section 11.6.1, Overview, paragraph (2)"
    quote: "ERCOT currently has one UFE zone for Settlement purposes, which encompasses all of ERCOT."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Adjusted Metered Load (AML)"
    quote: "Retail Load usage data that has been adjusted for Unaccounted for Energy (UFE), Transmission Losses, Distribution Losses, and Direct Current Tie (DC Tie) exports."
  - id: e9
    source: np-11
    locator: "Section 11.4.6.1, Calculation of ERCOT-Wide Unaccounted For Energy, formula and variable definitions"
    quote: "UFE _(i) (MWh) = ERCOT Generation _(i) _(Total) – ERCOT Net Loss Adjusted Load _(i) _(Total)"
  - id: e10
    source: np-11
    locator: "Section 11.4.6.1, variable definitions"
    quote: "ERCOT Generation _(i) _(Total)               MWh    Total ERCOT internal generation plus sum of approved ERCOT DC Tie imports."
  - id: e11
    source: np-11
    locator: "Section 11.4.6.1, variable definitions"
    quote: "ERCOT Net Loss Adjusted Load _(i) _(Total)   MWh    Total ERCOT load plus Block Load Transfer (BLT) exports plus sum of approved DC Tie exports, adjusted for distribution and transmission losses."
  - id: e12
    source: np-11
    locator: "Section 11.4.6.2, Allocation of Unaccounted For Energy, paragraph (2)"
    quote: "The ERCOT DAS shall provide a mechanism to change the UFE category weighting factors for specific transition periods."
  - id: e13
    source: np-11
    locator: "Section 11.4.6.3, Allocation to UFE Categories, paragraph (1)"
    quote: "UFE _(PRiz) = UFE _(iz) * [(f _(PRiz) * L _(PRiz)) / L _(UFEiz)]"
  - id: e14
    source: np-11
    locator: "Section 11.4.6.3, paragraph (1)"
    quote: "L _(UFEiz) = f _(PRiz) * L _(PRiz) + f _(IDRiz) * L _(IDRiz) + f _(TRiz) * L _(TRiz) + f _(TNOIEiz) * L _(TNOIEiz)"
  - id: e15
    source: np-11
    locator: "Section 11.4.6.3, variable definitions"
    quote: "L _(UFEiz)               Adjusted total UFE allocation reference Load per interval per zone."
  - id: e16
    source: np-11
    locator: "Section 11.4.6.3, variable definitions"
    quote: "f _(PRiz)                Adjustment percentage for profiled Premises per interval per zone."
  - id: e17
    source: np-11
    locator: "Section 11.4.6.4, paragraph (1)"
    quote: "UFE _(PRiz) _(LSE) = UFE _(PRiz) * (Max (0, L _(PRiz LSE)) / L _(PRiz))"
  - id: e18
    source: np-11
    locator: "Section 11.6.1, Overview, paragraph (1)(b)"
    quote: "Establish a task force for further UFE investigation that may include the establishment of UFE analysis zones. UFE analysis zones will not be used for Settlement purposes until adopted as UFE Settlement zones."
  - id: e19
    source: np-11
    locator: "Section 11.6.2, Annual Unaccounted For Energy Analysis Report, paragraph (1)"
    quote: "The annual UFE analysis report will contain both ERCOT-wide and UFE allocation category quantities as follows:"
  - id: e20
    source: np-11
    locator: "Section 11.6.2, paragraph (1)(a)-(e)"
    quote: "(a) Total UFE MWhs; (b) Total UFE cost; (c) Percent of total UFE to ERCOT Load;"
  - id: e21
    source: np-04
    locator: "Section 4.4.4, DC Tie Schedules, paragraph (4)"
    quote: "A QSE that is an exporter from ERCOT through a DC Tie in a Settlement Interval under an approved e-Tag must be treated as a Load at the DC Tie Settlement Point for that Settlement Interval and is responsible for allocated Transmission Losses, Unaccounted for Energy (UFE), System Administration Fee, and any other applicable ERCOT fees."
  - id: e22
    source: np-06
    locator: "Section 6.6.2.2, QSE Load Ratio Share for a 15-Minute Settlement Interval, paragraph (1)"
    quote: "LRS _(q) = (max(0,[]RTAML _(q, p))) / RTAMLTOT"
  - id: e23
    source: np-09
    locator: "Section 9.16.1, ERCOT System Administration Fee, paragraph (3)"
    quote: "ESACAMT _(q) = LAFF * max(0,[]RTAML _(q, p))"
  - id: e24
    source: np-02
    locator: "Section 2.1, definition of Data Aggregation"
    quote: "The process of netting, grouping, and summing Load consumption data, applying appropriate profiles, Transmission Loss Factors (TLFs), and Distribution Loss Factors (DLFs) and calculating and allocating UFE to determine each QSE and/or Load Serving Entity’s (LSE’s) responsibility by Settlement Interval by Load Zone and by other prescribed aggregation determinants."
  - id: e25
    source: np-06
    locator: "Section 6.6.2.1, ERCOT Total Adjusted Metered Load for a 15-Minute Settlement Interval, variable definitions"
    quote: "RTAML _(q, p)   MWh    Real-Time Adjusted Metered Load per Qualified Scheduling Entity (QSE) per Settlement Point—The sum of the AML at the Electrical Buses that are included in Settlement Point p, represented by Qualified Scheduling Entity (QSE) q, for the 15-minute Settlement Interval."
  - id: e26
    source: np-06
    locator: "Section 6.5.9.5 (BLT of Load), paragraph (c)(iii)"
    quote: "Responsible for Unaccounted For Energy (UFE) allocations and Transmission Losses consistent with similarly situated NOIE metering points; and"
  - id: e27
    source: np-06
    locator: "Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node, variable definitions (MEBR)"
    quote: "The calculated Non-WSL ESR Charging Load, adjusted for UFE, for the 15-minute Settlement Interval represented as a negative value"
  - id: e28
    source: np-06
    locator: "Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node, variable definitions (MEBCL)"
    quote: "The calculated CLR Load, adjusted for Unaccounted For Energy (UFE), for the 15-minute Settlement Interval represented as a negative value"
---

## Definition

Unaccounted for Energy (UFE) is the difference between total Load for each Settlement Interval, adjusted for applicable Distribution Losses and Transmission Losses, and total ERCOT generation. [e1]

## How it works

ERCOT calculates one ERCOT-wide UFE number for each Settlement Interval as total ERCOT generation minus total loss-adjusted Load, and it can be positive or negative in any interval. [e2] For this calculation, scheduled flow out of ERCOT on a DC Tie counts as Load and scheduled flow in counts as generation. [e3] The inputs are defined in words: generation is internal generation plus approved DC Tie imports [e10], and loss-adjusted Load is total ERCOT load plus Block Load Transfer exports plus approved DC Tie exports, adjusted for distribution and transmission losses. [e11]

The calculated UFE is then allocated to positive Loads. [e3] Step one goes to UFE categories using an adjusted Load Ratio Share with category weights: 0.0 for transmission-voltage IDR NOIEs, 0.10 for transmission-voltage IDR Premises, 0.50 for distribution-voltage IDR Premises and 1.00 for distribution-voltage profiled Premises. [e4] The Protocols also require a mechanism to change those weights for specific transition periods. [e12]

Step two, within each category, allocates the category's UFE to the LSEs by each LSE's share of the category's Load. [e5]

## Formula

Allocation to categories (Section 11.4.6.3): each category's UFE is total UFE for the interval and zone multiplied by that category's weighted share, for example for the profile category UFE_PR = UFE x (f_PR x L_PR) / L_UFE. [e13] Here f is the adjustment percentage for the category [e16] (the Protocol text does not say in so many words that f is the weighting factor of Section 11.4.6.2; this entry reads them as the same, which is an inference), L is the category's aggregate loss-adjusted Load, and L_UFE, the adjusted total UFE allocation reference Load, is the sum of f x L across the four categories. [e14][e15] On that reading, a category with weight 0.0 gets no UFE, and a category with weight 1.00 is charged in proportion to its full Load. [e4]

Allocation to LSEs (Section 11.4.6.4): the LSE's share of the category's UFE is the category UFE multiplied by Max(0, the LSE's loss-adjusted Load in the category) divided by the category's aggregate Load. [e17] The Max(0, ...) means an LSE with negative Load in a category is treated as zero in the numerator; the allocation is to positive Loads. [e17][e3]

## ERCOT context

UFE ends up inside the load that is settled: Adjusted Metered Load is retail usage adjusted for UFE, losses and DC Tie exports. [e8] The Data Aggregation process is the Protocol-defined step that calculates and allocates UFE to determine each QSE's and LSE's responsibility by Settlement Interval and Load Zone. [e24] The QSE-level AML is the base for Load Ratio Share [e25][e22] and for the ERCOT System Administration Fee, which charges each QSE a rate times its AML. [e23] So UFE reaches dollars through the AML that is billed under those load-based charges; no saved source describes a separate UFE charge type. (Reading of the Protocol text, not a statement from a source.)

Some participants outside retail load carry UFE too. A QSE exporting over a DC Tie under an approved e-Tag is treated as Load at the DC Tie Settlement Point and is responsible for allocated Transmission Losses, UFE, the System Administration Fee and other applicable fees. [e21] Block Load Transfers of Load to the ERCOT Control Area are responsible for UFE allocations consistent with similarly situated NOIE metering points. [e26]

ERCOT currently uses a single UFE zone for Settlement covering all of ERCOT. [e7] The appropriate TAC subcommittee may form a task force that may establish UFE analysis zones, which are not used for Settlement until adopted as UFE Settlement zones. [e18]

ERCOT publishes an annual UFE analysis report on the prior calendar year, based on final Settlement data, by April 30. [e6] The report contains ERCOT-wide and UFE allocation category quantities, including total UFE MWh and total UFE cost. [e19][e20]

## Key facts

- UFE is generation minus loss-adjusted Load, per Settlement Interval, and can be positive or negative. [e2][e9]
- Generation includes approved DC Tie imports; loss-adjusted Load includes BLT exports and approved DC Tie exports. [e10][e11]
- Category weights are 0.0, 0.10, 0.50 and 1.00, rising from transmission-voltage NOIEs to distribution-voltage profiled Premises. [e4]
- There is one UFE zone for Settlement, covering all of ERCOT. [e7]
- An annual UFE analysis report is posted by April 30 each year, with total UFE MWh and total UFE cost among its contents. [e6][e19][e20]
- DC Tie exporters are treated as Load and are responsible for UFE. [e21]

## Say it like this

(Guidance) UFE is the gap between what generation put on the grid and what metered load plus losses accounts for. ERCOT spreads that gap back over load by category and then by LSE, so a retailer with a lot of profiled distribution-level load picks up more of it per MWh than one with large transmission-level load.

## Common confusion

UFE is not the same as transmission or distribution losses: losses are removed first, and UFE is what remains after them. [e1] UFE may be positive or negative in any single Settlement Interval. [e2] The category weights are not charges per MWh in dollars; they only set each category's share of the interval's UFE MWh. [e13]

## Questions

### How does ERCOT calculate UFE?

For each Settlement Interval, total ERCOT generation (including approved DC Tie imports) minus total loss-adjusted Load (including BLT exports and approved DC Tie exports). [e9][e10][e11]

### Who bears UFE?

It is allocated to positive Loads by UFE category using weighting factors, then to LSEs by their share of the category's Load. Profiled distribution-voltage Premises carry the full 1.00 weight. [e3][e4][e5]

### Why do profiled Premises carry more UFE than IDR Premises?

The Protocol sets the category weights at 1.00 for distribution-voltage profiled Premises, 0.50 for distribution-voltage IDR and 0.10 for transmission-voltage IDR, so for equal Load a profiled Premise draws a larger share of each interval's UFE. [e4][e13] The saved sources give the weights but not the reasoning behind them.

### What if UFE is negative in an interval?

The Protocol says UFE may be positive or negative in any single interval, so the same allocation formulas apply to a negative amount, which then goes back to Loads as a credit in MWh. [e2][e13] (The credit reading is an inference from the formula, not a quoted statement.)

### Why does a QSE exporting on a DC Tie care about UFE?

It is treated as Load at the DC Tie Settlement Point and is responsible for allocated UFE along with losses and the System Administration Fee. [e21]

### How many UFE zones does ERCOT use?

One, covering all of ERCOT. A task force could study analysis zones, but they would not be used for Settlement until adopted. [e7][e18]

## Open items

- No saved source gives UFE volumes or dollar cost by year; the IMM reports do not discuss UFE, and neither the annual UFE analysis report (Section 11.6.2) nor any settlement-statement layout that shows UFE is saved. (Checked np-09 and copmg-08 on 2026-11-21: neither mentions UFE.)
- No saved source names a UFE-specific settlement charge type; the link from UFE to dollars above runs through Adjusted Metered Load and is a reading of the Protocols.
- The reasoning behind the category weights (0.0, 0.10, 0.50, 1.00) is not in the saved sources.
- np-02 words the definition as the difference between Load and generation (Load first), while np-11 Section 11.4.6.1 writes the formula as generation minus Load; this entry follows the np-11 formula, so a positive UFE means generation exceeded loss-adjusted Load. The sign convention is the only difference.
