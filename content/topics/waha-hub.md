---
id: waha-hub
name: Waha Gas Hub
aliases: [Waha, Waha hub, Waha gas price, West Texas gas]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: natural-gas-price
    type: contrasts-with
    note: ERCOT's Fuel Index Price is a Katy Hub price, while Waha is the West Texas hub that trades lower. [e6][e1]
  - to: hb-west
    type: related
    note: The IMM reflects Waha gas prices in its West zone net-revenue calculations. [e4]
  - to: heat-rate
    type: related
    note: See that topic for how a heat rate is applied to a fuel price.
  - to: peaker-net-margin
    type: related
    note: The IMM shows gas-unit net revenues by location, using Katy prices for Houston and Waha prices for the West zone. [e4]
  - to: congestion
    type: related
    note: The IMM says congestion in the West zone widened the gap between the Katy and Waha hubs in 2024 and 2025. [e3][e7]
  - to: permian-transmission
    type: related
    note: The IMM expects the hub gap to narrow as transmission work in the Permian Basin concludes. [e3]
evidence:
  - id: e1
    source: eia-gas-hubs
    locator: "Key pricing hubs, South Central region, Waha"
    quote: "The Waha natural gas pricing hub is in West Texas near Permian Basin production activities and helps natural gas market participants get a sense of pricing in West Texas and southeastern New Mexico. The Permian Basin produced 19% of total U.S. natural gas in 2023, with most coming from associated gas from crude oil wells. Because natural gas production in the Permian Basin has increased more rapidly than natural gas pipeline takeaway capacity, Waha prices are typically lower than those at other hubs, sometimes turning negative."
  - id: e2
    source: eia-waha-2024
    locator: "In-brief analysis, February 3, 2025, second paragraph"
    quote: "In West Texas, prices at the Waha Hub near Permian Basin production activities traded below zero for 42% of trading days in 2024 as natural gas production from the Permian Basin outpaced available pipeline takeaway capacity. The Matterhorn Express Pipeline, capable of carrying 2.5 billion cubic feet per day from the Permian Basin to demand centers on the Texas coast, entered service in October 2024 and helped clear some of the regional production bottleneck. Since mid-November the price at the Waha Hub has been more than zero."
  - id: e3
    source: imm-som-2025
    locator: "Chapter on net revenue, section 2, Net Revenue by Location (text following Figure 55)"
    quote: "Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region. As work on these projects concludes, we expect the gap between the two hubs to narrow again."
  - id: e4
    source: imm-som-2025
    locator: "Chapter on net revenue, section 2, Net Revenue by Location"
    quote: "Because natural gas prices can vary widely by location, the figure shows revenues for natural gas units in the Houston zone (reflecting Katy hub prices) and the West zone (reflecting Waha hub prices)."
  - id: e5
    source: eia-gas-hubs
    locator: "Key pricing hubs, South Central region, Henry Hub"
    quote: "Most natural gas at U.S. trading hubs is priced relative to Henry Hub"
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e7
    source: imm-som-2024
    locator: "Chapter on net revenue, section 2, Net Revenue by Location (text following Figure 55)"
    quote: "The price gap between the two hubs widened in 2024, driven by transmission upgrades and maintenance in the West zone that substantially increased congestion costs in the region."
  - id: e8
    source: eia-gas-hubs
    locator: "Introduction to pricing hubs"
    quote: "Changes in prices at natural gas hubs tend to be reflected in movements in prices at nearby power market hubs or zones."
---

## Definition

Waha is the natural gas pricing hub in West Texas near Permian Basin production, used to gauge gas pricing in West Texas and southeastern New Mexico. [e1]

## How it works

Changes in prices at natural gas hubs tend to be reflected in movements in prices at nearby power market hubs or zones. [e8] Most natural gas at U.S. trading hubs is priced relative to Henry Hub. [e5] EIA says Permian production has grown more rapidly than pipeline takeaway capacity, so Waha prices are typically lower than those at other hubs, sometimes turning negative. [e1]

EIA reported that Waha traded below zero on 42% of trading days in 2024, and that the Matterhorn Express Pipeline (2.5 Bcf/d, in service October 2024) helped clear part of the bottleneck. [e2]

## ERCOT context

ERCOT's own Fuel Index Price is based on Katy Hub gas, not Waha. [e6] The IMM therefore treats the two hubs separately when it calculates net revenue by location: Katy prices for the Houston zone and Waha prices for the West zone. [e4]

The IMM says low Waha gas prices have historically produced much higher net revenues for gas resources in the West, and that the hub price gap widened in 2024 and 2025 as West zone congestion costs rose. It expects the gap to narrow as the related transmission work concludes. [e3][e7]

## Key facts

- Waha is in West Texas near Permian Basin production. [e1]
- Waha traded below zero on 42% of trading days in 2024 (EIA). [e2]
- The Permian Basin produced 19% of total U.S. natural gas in 2023. [e1]
- ERCOT's FIP uses Katy Hub prices. [e6]
- The IMM expected the Katy-Waha gap to narrow again after the transmission work ends (2025 report). [e3]

## Say it like this

(Guidance) Waha is the West Texas gas hub, and it often trades well below Katy because Permian gas has had limited ways out. In ERCOT that matters for West-zone gas generators, whose gas cost can be below what the Katy-based FIP implies.

## Common confusion

Waha is not ERCOT's Fuel Index Price: the FIP is a Katy Hub index. [e6] Waha is also not Henry Hub, the benchmark most hubs are priced against. [e5]

## Questions

### Why does Waha trade below other hubs?

Permian production, much of it associated gas from oil wells, has grown faster than takeaway pipeline capacity, so local gas is discounted and sometimes negative. [e1]

### Why does the IMM use Waha for the West zone?

Gas prices vary by location, so the IMM uses Katy for the Houston zone and Waha for the West zone when comparing net revenue for gas units. [e4]

### Did anything improve Waha prices recently?

EIA notes the Matterhorn Express Pipeline entered service in October 2024 and that Waha had stayed above zero since mid-November 2024 as of its February 2025 article. [e2]

## Open items

- Deeper pass: no saved source gives Waha price levels or Katy-Waha basis in $/MMBtu for 2025 or 2026.
- Deeper pass: the link between Waha prices and West-zone or HB West power prices is not quantified in the saved sources.
- The saved sources do not say which ERCOT-selected source provides the FIP index prices.
