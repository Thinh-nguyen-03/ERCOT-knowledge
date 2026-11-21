---
id: negative-prices
name: Negative Prices
aliases: [negative prices, negative LMP, negative SPP, prices below zero, Mitigated Offer Floor]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, congestion]
as_of: 2026-11-21
depth: deep
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
  - to: hb-west
    type: related
    note: The IMM's negative-price findings are about the West zone, and ERCOT also settles a West 345 kV Hub price with the same -$251 floor in its formula. [e20][e18][e26]
  - to: load-zone
    type: related
    note: The West load zone combines the curtailed Panhandle and the import-constrained Permian Basin. [e20][e7]
  - to: wind-generation
    type: related
    note: The IMM reports roughly 4.7% of wind generation curtailed in 2025. [e28]
  - to: solar-generation
    type: related
    note: The IMM reports roughly 6% of solar generation curtailed in 2025, and solar surges drive midday price drops. [e29][e6]
  - to: spp
    type: related
    note: Real-Time Settlement Point Prices have an administrative floor of -$251/MWh. [e16]
  - to: sced
    type: related
    note: SCED Step 2 bounds offers at the lesser of the Reference LMP or the Mitigated Offer Floor. [e4]
  - to: energy-storage-resource
    type: related
    note: The ESR Mitigated Offer Floor is -$250/MWh and ESR bid/offer curves are bounded the same way. [e12][e14]
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
  - id: e11
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor table, first rows"
    quote: "Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh"
  - id: e12
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor table, last rows"
    quote: "ESR -$250/MWh Other -$50/MWh"
  - id: e13
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)(b)(i), second step (sentence after the bounding rule)"
    quote: "In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource’s Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;"
  - id: e14
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)(b)(ii), second step"
    quote: "Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor."
  - id: e15
    source: np-22p-2025-12
    locator: "Attachment P (edition dated December 5, 2025), Section 4.1, The Power Balance Penalty"
    quote: "The SCED over-generation Power Balance Penalty Price is -$250/MWh."
  - id: e16
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e17
    source: np-06
    locator: "Section 6.6.1.1, formula for a Resource Node"
    quote: "RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))"
  - id: e18
    source: np-03
    locator: "Section 3.5.2.4, paragraph (4), West 345 kV Hub real-time formula"
    quote: "RTSPP _(West345) = Max [-$251, (RTRDP +"
  - id: e19
    source: np-06
    locator: "Section 6.6.1.2, formula for a Load Zone"
    quote: "RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP)"
  - id: e20
    source: imm-som-2024
    locator: "page 43 (OCR), Chapter II, Zonal Energy Prices (2024 report)"
    quote: "The West had the highest number of prices below $0, largely due to high wind and solar output that could not be delivered because of transmission congestion, both within the zone and on export paths to other regions."
  - id: e21
    source: imm-som-2023
    locator: "Appendix, Real-Time Price Analysis, page 158 (OCR) (2023 report)"
    quote: "Negative ERCOT-wide prices may occur when wind is the marginal generation."
  - id: e22
    source: imm-som-2023
    locator: "Appendix, Real-Time Price Analysis, page 158 (OCR) (2023 report)"
    quote: "In 2023, there were 139 hours with ERCOT-wide prices at or below zero, an increase from 110 hours in 2022."
  - id: e23
    source: imm-som-2022
    locator: "Appendix, Real-Time Price Analysis, page A-20, page 165 (OCR) (2022 report)"
    quote: "In 2022, there were 110 hours with ERCOT-wide prices at or below zero, a decrease from the 176 hours in 2021."
  - id: e24
    source: fed-pl-119-21
    locator: "Public Law 119-21 (July 4, 2025), Sec. 70512(a), amending 26 USC 45Y(d) (clean electricity production credit)"
    quote: "``(4) Termination for wind and solar facilities.-- ``(A) In general.--This section shall not apply with respect to any applicable facility placed in service after December 31, 2027. ``(B) Applicable facility.--For purposes of this paragraph, the term `applicable facility' means a qualified facility which-- ``(i) uses wind to produce electricity"
  - id: e25
    source: fed-pl-119-21
    locator: "Public Law 119-21, Sec. 70512(l)(4), effective date of the wind and solar termination"
    quote: "Termination for wind and solar facilities.--The amendments made by subsection (a) shall apply to facilities the construction of which begins after the date which is 12 months after the date of enactment of this Act."
  - id: e26
    source: np-03
    locator: "Section 3.5.2.4, paragraph (3) and (4), West 345 kV Hub formulas (same floor in each Hub definition)"
    quote: "RTSPP _(West345) = RTSPP _(ERCOT345Bus), if HB _(West345)=0"
  - id: e27
    source: np-14
    locator: "Section 14.3.2, Attributes of Renewable Energy Credits and Compliance Premiums, paragraph (1)"
    quote: "A REC or Compliance Premium is a tradable instrument that represents all of the renewable attributes associated with one MWh of production from a certified renewable generator."
  - id: e28
    source: imm-som-2025
    locator: "page 39 (OCR), Chapter I.D.1, Production and Curtailment"
    quote: "Roughly 4.7% of wind generation was curtailed in 2025, consistent with the trend over the last five years."
  - id: e29
    source: imm-som-2025
    locator: "page 40 (OCR), Chapter I.D.1, Production and Curtailment"
    quote: "Roughly 6% of solar generation was curtailed in 2025, similar to 2024 levels."
  - id: e30
    source: imm-som-2025
    locator: "page 93 (OCR), Chapter V.G.1, The Case for Updating the Load Zones in ERCOT"
    quote: "the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation."

  - id: e32
    source: imm-som-2025
    locator: "page 30 (OCR), Chapter II.D, Shortage and Reliability Pricing"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."

---

## Definition

A negative price is an energy price below $0 per MWh. ERCOT's rules allow Energy Offer Curves as low as -$250.00 per MWh, and the IMM reports hundreds of hours a year with prices at or below $0. [e1][e5]

## How it works

In the IMM's account, negative prices show up when midday solar surges and in the West zone. [e6][e7] The IMM's earlier reports add that negative ERCOT-wide prices may occur when wind is the marginal generation. [e21]

Where offers can go. An Energy Offer Curve must be within the range of -$250.00 per MWh and the applicable cap. [e1] In SCED Step 2, each Energy Offer Curve for On-Line Generation Resources is bounded at the lesser of the Step 1 Reference LMP or the appropriate Mitigated Offer Floor. [e4] ESR Energy Bid/Offer Curves are bounded the same way. [e14] The Mitigated Offer Floors are Resource-category specific: Nuclear and Hydro -$250/MWh, Coal and Lignite -$20/MWh, Combined Cycle -$20/MWh, Gas/Oil Steam and Combustion Turbine -$20/MWh, Qualifying Facility -$50/MWh, Wind -$100/MWh, PhotoVoltaic -$50/MWh, ESR -$250/MWh and Other -$50/MWh. [e11][e3][e12] Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM using a Mitigated Offer Floor. [e2] Offer curves that fail the constraint competitiveness test are also capped, at the greater of the Reference LMP at the Resource Node plus a small variable times the MOC curve value at LSL, or the appropriate MOC; that cap limits high offers, not negative ones. [e13]

Where prices can go. The administrative floor on Real-Time Settlement Point Prices is -$251/MWh, applied after adding the Real-Time Reliability Deployment Price Adders for Energy. [e16] The floor appears in the Resource Node, Load Zone and Hub formulas alike. [e17][e19][e18] Separately, Attachment P (edition dated December 5, 2025) sets the SCED over-generation Power Balance Penalty Price at -$250/MWh. [e15] The saved Protocol text does not explain why the settlement floor is $1 below those two numbers.

Why a generator would offer below zero. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025 (32% in 2024), mostly wind and solar that are incentivized to produce even when prices are negative because many receive federal production tax credits. [e8]

## ERCOT context

Location matters. In 2025 the West zone, which holds export-constrained Panhandle wind and solar and import-constrained Permian load, had both the most negative-price intervals and the most price spikes of any load zone. [e7] The IMM's 2024 report said the West had the highest number of prices below $0, largely because wind and solar output could not be delivered through transmission congestion within the zone and on export paths. [e20] The IMM says the Texas Panhandle is export constrained, leading to frequent curtailment of abundant wind generation. [e30] The IMM reports roughly 4.7% of wind generation and roughly 6% of solar generation curtailed in 2025. [e28][e29]

Counts. ERCOT-wide hours at or below zero: 176 in 2021 and 110 in 2022 (IMM 2022 report), and 139 in 2023 (IMM 2023 report). [e23][e22] The saved sources give no ERCOT-wide count for 2024 or 2025; the IMM says only "hundreds of hours" with prices at or below $0, which also lowers the market's implied heat rate. [e5]

Resource Node versus Hub versus Zone. Because the floor applies in each Settlement Point formula and each is an average of bus LMPs (Hub equal-weighted, Load Zone Load-weighted), a very negative node price is diluted in a hub or zone price. [e17][e19][e18] The IMM's West-zone statements are about the zone, so a West wind generator's own node price can be lower than the zone price. [e7]

Why tax credits matter. Under Public Law 119-21, the 45Y credit does not apply to wind and solar applicable facilities placed in service after December 31, 2027, and the termination amendments apply to facilities whose construction begins more than 12 months after enactment (July 4, 2025). [e24][e25] See the tax-credits-recs topic for the detail. The saved Protocols describe RECs as tradable instruments representing the renewable attributes of one MWh from a certified renewable generator, which may trade separately from energy, but they do not say that RECs drive offer prices. [e27]

Batteries are one way negative prices are being absorbed. As midday solar has surged, real-time prices have dropped, sometimes to negative levels, which lets ESRs charge cheaply or be paid to consume energy that would otherwise be curtailed. [e6] At congested locations ESRs can often charge at prices below $0. [e9] The cheap-charging era is fading: the share of ESR bids to buy at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025. [e10]

Market design. The IMM says that with RTC, in service since December 5, 2025, the real-time market simultaneously procures energy and ancillary services (see the lmp topic); the saved sources do not describe RTC's effect on negative prices. [e32]

## Key facts

- Energy Offer Curves may be offered down to -$250.00 per MWh. [e1]
- Mitigated Offer Floors: Wind -$100/MWh, PV -$50/MWh, Coal/Lignite, CC and Gas/Oil Steam/CT -$20/MWh, QF and Other -$50/MWh, Nuclear/Hydro and ESR -$250/MWh. [e3][e11][e12]
- Real-Time Settlement Point Price floor: -$251/MWh. [e16]
- SCED over-generation Power Balance Penalty Price: -$250/MWh (December 5, 2025 edition of Attachment P). [e15]
- 35% of real-time generation capacity was offered at or below $0 in 2025 versus 32% in 2024. [e8]
- The West zone had the most negative-price intervals in 2025. [e7]
- ERCOT-wide hours at or below zero: 176 (2021), 110 (2022), 139 (2023). [e23][e22]
- ESR bids priced at or below $0 fell from 82% (2023) to 71% (2024) to 56% (2025). [e10]

## Say it like this

Negative prices happen when a lot of zero-cost wind and solar, often supported by tax credits, keeps producing at times and places where the grid cannot use it. They are most common in the West, and batteries can charge cheaply or be paid to consume when prices go negative. [e6][e7][e8]

## Common confusion

A negative price is not an error or a free-energy event. It is a legitimate outcome of offers that go as low as -$250 per MWh, and it is local: the same interval can show negative prices in the West and spikes elsewhere. [e1][e7] The Mitigated Offer Floor table sets category-specific minimums that SCED can apply to offers. [e2][e3] The -$251 settlement floor is a floor on Real-Time Settlement Point Prices, not on offers. [e16][e1] Negative-price hours counted ERCOT-wide (2021 to 2023) are not the same as West-zone intervals. [e22][e7]

## Questions

### Why do wind and solar offer below zero?

Many receive federal production tax credits, so they are incentivized to produce even when prices are negative. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025. [e8]

### Which zone sees the most negative prices, and why?

The West zone. The IMM says it includes the Panhandle, with abundant wind and solar but export-constrained, and the Permian Basin, with rapid demand growth and import-constrained, and this duality explains why it had both the most negative-price intervals and the most price spikes. [e7]

### How do batteries relate to negative prices?

They charge cheaply or even get paid to consume at negative prices. [e6] But the share of their charging bids at or below $0 has fallen to 56% in 2025. [e10]

### How negative can a price get?

Offers may be as low as -$250.00 per MWh, the Real-Time Settlement Point Price has an administrative floor of -$251/MWh after adding reliability deployment adders, and SCED's over-generation penalty is -$250/MWh. [e1][e16][e15]

### Why would a wind plant offer at -$100 or -$50 and not lower?

The Mitigated Offer Floor for wind is -$100/MWh and for PV -$50/MWh, and Step 2 bounds offer curves at the lesser of the Reference LMP or the floor. [e3][e4] (The saved sources do not say why those floor values were chosen.)

### What if the production tax credit ends for new wind and solar?

Public Law 119-21 provides that the 45Y credit does not apply to wind and solar facilities placed in service after December 31, 2027, and says its amendments apply only to facilities whose construction begins more than 12 months after enactment, so the 45Y credit would not be available to facilities covered by that termination; the saved sources do not say how many existing resources that affects. The IMM cites federal production tax credits as the incentive behind negative offers. [e24][e25][e8]

### Why is the Hub price less negative than a West node?

Hub and Load Zone prices are averages across many bus LMPs, so a node with severe congestion is averaged with others. [e18][e19] The IMM says the West Panhandle often sees curtailment while the Permian is import constrained. [e30][e7]

## Open items

- Resolved 2026-11-21: Mitigated Offer Floor table now quoted in full; hours at or below zero ERCOT-wide for 2021-2023 now cited.
- ERCOT-wide hours or intervals at or below zero for 2024 and 2025, and West zone interval counts by year, are not in the saved sources (the IMM text says "hundreds of hours").
- The saved sources do not explain why the settlement floor is -$251 while the offer range and over-generation penalty are -$250.
- Whether RECs affect offer prices is not stated in the saved Protocols; only the PTC link is cited (IMM).
- The role of RTC+B in price formation at negative prices (for example how ESR bids and ancillary service co-optimization change them) is not covered in the saved sources read here.
- No source quantifies how often Resource Node prices fall below Hub or Load Zone prices in the same interval.
