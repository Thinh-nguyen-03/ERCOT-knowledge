---
id: negative-prices
name: Negative Prices
aliases: [negative prices, negative LMP, negative SPP, prices below zero, Mitigated Offer Floor]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, congestion]
as_of: 2026-11-18
links:
  - to: lmp
    type: related
    note: The IMM reports negative real-time prices in midday solar hours and in the West zone. [e6][e7]
  - to: tax-credits-recs
    type: causes
    note: Federal production tax credits keep many wind and solar resources willing to produce when prices are negative. [e8]
  - to: congestion
    type: related
    note: The West zone, which includes export-constrained Panhandle wind and solar, had the most negative-price intervals in 2025, and batteries can often charge at prices below $0 when added load resolves congestion. [e7][e9]
  - to: battery-revenue-stack
    type: related
    note: Midday negative prices let batteries charge cheaply or be paid to consume. [e6]
  - to: offer-cap
    type: contrasts-with
    note: The offer cap limits prices on the high side, while the offer floor of -$250 per MWh limits offers on the low side. [e1]
  - to: sc-west-negative-north-spike
    type: example-of
    note: The West zone had the most negative-price intervals in 2025 while also having the most price spikes. [e7]
evidence:
  - id: e1
    source: np-04
    locator: "Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2)"
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh."
  - id: e2
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1)"
    quote: "Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor table"
    quote: "Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh"
  - id: e4
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)(b)(i), second step"
    quote: "Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor."
  - id: e5
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, Implied Heat Rate"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate."
  - id: e6
    source: imm-som-2025
    locator: "Energy Storage Resources chapter, ESR revenue and arbitrage"
    quote: "As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed."
  - id: e7
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, section C, Zonal Energy Prices"
    quote: "The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone."
  - id: e8
    source: imm-som-2025
    locator: "Executive Summary, Market Operations, bullets on offers at or below $0"
    quote: "35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits."
  - id: e9
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, 2. Congestion Management by ESRs"
    quote: "ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0."
  - id: e10
    source: imm-som-2025
    locator: "Energy Storage Resources chapter, Figure 19 discussion"
    quote: "Historically, ESRs could charge for free (i.e. at bids priced at $0 or less) during most charging periods, but this trend is changing rapidly. The share of bids priced at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025."
---

## Definition

A negative price is an energy price below $0 per MWh. ERCOT's rules allow Energy Offer Curves as low as -$250.00 per MWh, and the IMM reports hundreds of hours a year with prices at or below $0. [e1][e5]

## How it works

In the IMM's account, negative prices show up when midday solar surges and in the West zone. [e6][e7] Offers can go negative because the protocol range for an Energy Offer Curve starts at -$250.00 per MWh. [e1] In SCED Step 2, each Energy Offer Curve for On-Line Generation Resources is bounded at the lesser of the Step 1 Reference LMP or the appropriate Mitigated Offer Floor, and the floors are Resource-category specific, for example -$100/MWh for wind and -$50/MWh for PV. [e4][e2][e3]

Why would a generator offer below zero? The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025 (32% in 2024), mostly wind and solar that are incentivized to produce even when prices are negative because many receive federal production tax credits. [e8]

## ERCOT context

Location matters. In 2025 the West zone, which holds export-constrained Panhandle wind and solar and import-constrained Permian load, had both the most negative-price intervals and the most price spikes of any load zone. [e7] Growth in zero-marginal-cost wind and solar also pulls down the market's implied heat rate. [e5]

Batteries are one way negative prices are being absorbed. As midday solar has surged, real-time prices have dropped, sometimes to negative levels, which lets ESRs charge cheaply or be paid to consume energy that would otherwise be curtailed. [e6] At congested locations ESRs can often charge at prices below $0. [e9] The cheap-charging era is fading: the share of ESR bids to buy at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025. [e10]

## Key facts

- Energy Offer Curves may be offered down to -$250.00 per MWh. [e1]
- Mitigated Offer Floors by category include -$100/MWh for wind and -$50/MWh for PV. [e3]
- 35% of real-time generation capacity was offered at or below $0 in 2025 versus 32% in 2024. [e8]
- The West zone had the most negative-price intervals in 2025. [e7]
- ESR bids priced at or below $0 fell from 82% (2023) to 71% (2024) to 56% (2025). [e10]

## Say it like this

Negative prices happen when a lot of zero-cost wind and solar, often supported by tax credits, keeps producing at times and places where the grid cannot use it. They are most common in the West, and batteries can charge cheaply or be paid to consume when prices go negative. [e6][e7][e8]

## Common confusion

A negative price is not an error or a free-energy event. It is a legitimate outcome of offers that go as low as -$250 per MWh, and it is local: the same interval can show negative prices in the West and spikes elsewhere. [e1][e7] The Mitigated Offer Floor table sets category-specific minimums that SCED can apply to offers. [e2][e3]

## Questions

### Why do wind and solar offer below zero?

Many receive federal production tax credits, so they are incentivized to produce even when prices are negative. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025. [e8]

### Which zone sees the most negative prices, and why?

The West zone. The IMM says it includes the Panhandle, with abundant wind and solar but export-constrained, and the Permian Basin, with rapid demand growth and import-constrained, and this duality explains why it had both the most negative-price intervals and the most price spikes. [e7]

### How do batteries relate to negative prices?

They charge cheaply or even get paid to consume at negative prices. [e6] But the share of their charging bids at or below $0 has fallen to 56% in 2025. [e10]

## Open items

- Annual counts of negative-price intervals and hours by zone and hub are in IMM tables and figures that are garbled in the saved text; the OCR copies are not saved.
- The protocol sections read do not state a price floor for LMP or SPP itself; only the offer-curve range and Mitigated Offer Floors are sourced. Whether prices can fall below -$250 is not covered.
- The table of Mitigated Offer Floors also lists other categories (Nuclear and Hydro -$250, Coal/Lignite, CC, Gas -$20, QF -$50, ESR -$250, Other -$50), not all quoted here.
- Deeper pass: the effect of curtailment and Resource Node versus Hub price, the 2024 IMM negative-price discussion (Texas Panhandle), PTC economics (tax-credits-recs topic), and the role of RTC+B in price formation at negative prices.
