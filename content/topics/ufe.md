---
id: ufe
name: UFE (Unaccounted-For Energy)
aliases: [UFE, Unaccounted For Energy, Unaccounted-For Energy]
kind: metric
domain: congestion
level: 2
lenses: [analyst, retail, portfolio]
as_of: 2026-11-18
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
    note: Metered interval data feeds data aggregation, where UFE is calculated. [e2]
  - to: qse
    type: related
    note: Load is settled at the QSE level, and UFE is part of the load a QSE is settled on. [e8]
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
---

## Definition

Unaccounted for Energy (UFE) is the difference between total Load for each Settlement Interval, adjusted for applicable Distribution Losses and Transmission Losses, and total ERCOT generation. [e1]

## How it works

ERCOT calculates one ERCOT-wide UFE number for each Settlement Interval as total ERCOT generation minus total loss-adjusted Load, and it can be positive or negative in any interval. [e2] For this calculation, scheduled flow out of ERCOT on a DC Tie counts as Load and scheduled flow in counts as generation. [e3]

The calculated UFE is then allocated to positive Loads. [e3] It goes first to UFE categories using an adjusted Load Ratio Share with category weights: 0.0 for transmission-voltage IDR NOIEs, 0.10 for transmission-voltage IDR Premises, 0.50 for distribution-voltage IDR Premises and 1.00 for distribution-voltage profiled Premises. [e4] Within each category it is allocated to the LSEs by each LSE's share of the category's Load. [e5]

## ERCOT context

UFE ends up inside the load that is settled: Adjusted Metered Load is retail usage adjusted for UFE, losses and DC Tie exports. [e8] ERCOT currently uses a single UFE zone for Settlement that covers all of ERCOT. [e7]

ERCOT publishes an annual UFE analysis report on the prior calendar year, based on final Settlement data, by April 30. [e6]

## Key facts

- UFE is generation minus loss-adjusted Load, per Settlement Interval, and can be positive or negative. [e2]
- Category weights are 0.0, 0.10, 0.50 and 1.00, rising from transmission-voltage NOIEs to distribution-voltage profiled Premises. [e4]
- There is one UFE zone for Settlement, covering all of ERCOT. [e7]
- An annual UFE analysis report is posted by April 30 each year. [e6]

## Say it like this

(Guidance) UFE is the gap between what generation put on the grid and what metered load plus losses accounts for. ERCOT spreads that gap back over load by category and then by LSE, so a retailer with a lot of profiled load picks up more of it.

## Common confusion

UFE is not the same as transmission or distribution losses: losses are removed first, and UFE is what remains after them. [e1] A negative UFE interval is possible, so it is not always a cost. [e2]

## Questions

### How does ERCOT calculate UFE?

For each Settlement Interval, total ERCOT generation minus total loss-adjusted Load, with DC Tie exports counted as Load and imports as generation. [e2][e3]

### Who bears UFE?

It is allocated to positive Loads by UFE category using weighting factors, then to LSEs by their share of the category's Load. Profiled distribution-voltage Premises carry the full 1.00 weight. [e3][e4][e5]

### How many UFE zones does ERCOT use?

One, covering all of ERCOT. [e7]

## Open items

- Deeper pass: the allocation formulas in Sections 11.4.6.3 and 11.4.6.4 (including the Max(0, ...) treatment) were not summarized.
- Deeper pass: no saved source gives UFE volumes or dollar cost by year; the IMM reports do not discuss UFE. The annual UFE analysis report itself is not in the saved sources.
- Deeper pass: how UFE is settled in dollars (which settlement charge types carry it) was not checked.
