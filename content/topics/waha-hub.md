---
id: waha-hub
name: Waha Gas Hub
aliases: [Waha, Waha hub, Waha gas price, West Texas gas]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
    note: The IMM's 2025 report ties the wider hub gap to the Permian Basin import constraint and expects the gap to narrow as work on "these projects" concludes. [e3]
  - to: market-power-mitigation
    type: related
    note: The Mitigated Offer Cap formula uses the larger of FIP and the Resource's weighted average fuel price in its heat-rate term. [e24]
  - to: offer-cap
    type: related
    note: The IMM says ERCOT may select the natural gas price index used to calculate the PNM threshold and the LCAP. [e15]
  - to: winter-storm-uri
    type: related
    note: The IMM says February 2021 gas price increases across all indices were unprecedented during Winter Storm Uri. [e22]
  - to: implied-heat-rate
    type: related
    note: Implied heat rate divides a power price by a gas price, so the choice of Katy or Waha changes the answer for West-zone units; see that topic.
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
  - id: e9
    source: eia-waha-2024
    locator: "In-brief analysis, February 3, 2025, third paragraph"
    quote: "Spot natural gas prices at the Henry Hub in Erath, Louisiana, which serves as the U.S. benchmark, averaged $2.22/MMBtu in 2024, the lowest average annual price in inflation-adjusted dollars ever reported."
  - id: e10
    source: eia-gas-2025
    locator: "In-brief analysis, January 9, 2026, first paragraph"
    quote: "In 2025, the wholesale U.S. natural gas spot price at the national benchmark Henry Hub in Louisiana averaged $3.52 per million British thermal units (MMBtu), based on data from LSEG Data."
  - id: e11
    source: ref-ferc-energy-primer
    locator: "Chapter 1, Natural Gas, pipeline constraints (2024 Energy Primer)"
    quote: "Conversely, since 2018, natural gas production has outpaced pipeline capacity in the Permian Basin, the second largest shale gas-producing region in the U.S., due to associated natural gas production rising with increasing crude oil production."
  - id: e12
    source: ref-ferc-energy-primer
    locator: "Chapter 1, Natural Gas, pipeline constraints"
    quote: "The lack of available infrastructure to transport the abundant natural gas to high-demand regions has frequently contributed to prices at the local Waha Hub falling below prices at the Henry Hub."
  - id: e13
    source: ref-ferc-energy-primer
    locator: "Chapter 1, Natural Gas, pipeline constraints"
    quote: "The additional pipeline capacity in 2021 increased the amount of natural gas flowing out of the basin into nearby consuming regions and narrowed the price difference between the Waha Hub and the Henry Hub."
  - id: e14
    source: ref-ferc-energy-primer
    locator: "Chapter 1, Natural Gas, pipeline constraints"
    quote: "Kinder Morgan Energy Partners’ Permian Highway Pipeline and WhiteWater’s Whistler Pipeline, and one interstate pipeline project, Summit Midstream Partners’ Double E Pipeline came online in 2021."
  - id: e15
    source: imm-som-2021
    locator: "page 204 (OCR), Appendix, A. Locational Variations in Net Revenues in the West Zone, footnote 115"
    quote: "Effective December 12, 2019, the Katy Hub replaced Houston Ship Channel as the reference for the Fuel Index Price (FIP) for natural gas in ERCOT’s systems. See NPRR952, Use of Katy Hub for the Fuel Index Price. ERCOT has the flexibility to select an appropriate natural gas price index for the purposes of calculating the Peaker Net Margin (PNM) threshold and the Low System-Wide Offer CAP (LCAP)."
  - id: e16
    source: imm-som-2021
    locator: "page 117 (OCR), Resource Adequacy, net revenue of new resources"
    quote: "In 2021, we saw the continuing trend of the separation in natural gas prices between the Waha and Katy locations lessen versus the last couple of years."
  - id: e17
    source: imm-som-2021
    locator: "page 117 (OCR), Resource Adequacy, net revenue of new resources"
    quote: "This analysis shows that the new resources would produce net revenue ranging from $770 to $850 per KW-year at the Waha location, compared to net revenues of $700 to $800 per KW-year at Katy, based on 2021 revenues."
  - id: e18
    source: imm-som-2022
    locator: "page 109 (OCR), Resource Adequacy, net revenue of new resources"
    quote: "In 2022, we saw that the separation in natural gas prices return between the Waha and Katy locations, after being less of a factor in 2021."
  - id: e19
    source: imm-som-2022
    locator: "page 110 (OCR), Resource Adequacy, net revenue of new resources"
    quote: "This analysis shows that the new resources would produce net revenue ranging from $150 to $200 per KW-year at the Waha location, compared to net revenues of $130 to $180 per KW-year at Katy, based on 2022 revenues."
  - id: e20
    source: imm-som-2023
    locator: "page 110 (OCR), Resource Adequacy, net revenue of new resources"
    quote: "This analysis shows that the new resources would produce net revenue roughly 10% higher at the Waha location than at Katy based on 2023 revenues."
  - id: e21
    source: imm-som-2023
    locator: "page 203 (OCR), Appendix, A. Locational Variations in Net Revenues in the West Zone"
    quote: "Waha prices in 2023 dipped below $0 multiple times and were once again more volatile than Katy."
  - id: e22
    source: imm-som-2021
    locator: "page 204 (OCR), Appendix, A. Locational Variations in Net Revenues in the West Zone"
    quote: "In 2021, the rise in natural gas prices in February, across all indices, was unprecedented during the freezing conditions of Winter Storm Uri."
  - id: e23
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "ERCOT shall issue a Market Notice disclosing the name of the ERCOT-selected source for the average daily index prices used to calculate FIP."
  - id: e24
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) formula"
    quote: "MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e25
    source: np-04
    locator: "Section 4.4.9.4.1, variable definitions (WAFP)"
    quote: "Weighted Average Fuel Price—The volume-weighted average intraday, same-day and spot fuel price, the projected incremental fuel consistent with a fuel supply contract(s), or a combination of these two prices, submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day"
  - id: e26
    source: np-04
    locator: "Section 4.4.9.4.1, variable definitions (FA)"
    quote: "Fuel Adder—The fuel adder is the average cost above the index price Resource r has paid to obtain fuel."
  - id: e27
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1), FPRC formula"
    quote: "FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100"
  - id: e28
    source: np-04
    locator: "Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (1)(g)"
    quote: "Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and"
  - id: e29
    source: imm-som-2021
    locator: "page 204 (OCR), Appendix, A. Locational Variations in Net Revenues in the West Zone"
    quote: "Waha prices dipped below $0 multiple times throughout 2021, and were more volatile than Katy."
  - id: e30
    source: imm-som-2022
    locator: "page 192 (OCR), Appendix, A. Locational Variations in Net Revenues in the West Zone"
    quote: "Waha prices in 2022 dipped below $0 multiple times and were again more volatile than Katy."
---

## Definition

Waha is the natural gas pricing hub in West Texas near Permian Basin production, used to gauge gas pricing in West Texas and southeastern New Mexico. [e1]

## How it works

Changes in prices at natural gas hubs tend to be reflected in movements in prices at nearby power market hubs or zones. [e8] Most natural gas at U.S. trading hubs is priced relative to Henry Hub. [e5] EIA says Permian production has grown more rapidly than pipeline takeaway capacity, so Waha prices are typically lower than those at other hubs, sometimes turning negative. [e1] FERC's 2024 Energy Primer adds that since 2018 natural gas production has outpaced pipeline capacity in the Permian, which it ties to associated gas rising with crude oil production, and that the lack of transport infrastructure has frequently contributed to Waha prices falling below Henry Hub. [e11][e12]

EIA reported that Waha traded below zero on 42% of trading days in 2024, and that the Matterhorn Express Pipeline (2.5 Bcf/d, in service October 2024) helped clear part of the bottleneck; since mid-November 2024 the Waha price had been above zero as of EIA's February 2025 article. [e2] For scale, EIA reports the Henry Hub benchmark averaged $2.22/MMBtu in 2024 and $3.52/MMBtu in 2025. [e9][e10] The saved sources do not give Waha's own average price for either year.

Pipeline additions have narrowed the gap before: FERC's primer says the Permian Highway, Whistler and Double E pipelines came online in 2021 and narrowed the price difference between Waha and Henry Hub. [e14][e13] The IMM's 2021 report likewise says the Waha-Katy separation lessened in 2021, and its 2022 report says it returned in 2022. [e16][e18]

## ERCOT context

ERCOT's own Fuel Index Price is based on Katy Hub gas, not Waha. [e6] The IMM says that since December 12, 2019 the Katy Hub replaced Houston Ship Channel as the FIP reference (NPRR952), and that ERCOT has flexibility to select the index used for the PNM threshold and LCAP. [e15] ERCOT must issue a Market Notice naming its selected source for the daily index prices used to calculate FIP. [e23] The IMM therefore treats the two hubs separately when it calculates net revenue by location: Katy prices for the Houston zone and Waha prices for the West zone. [e4]

Where FIP enters offers. Offer curves carry a percentage of FIP and FOP for generation above LSL. [e28] The Mitigated Offer Cap for a Generation Resource takes the larger of two terms, the first being the generic incremental heat rate times the greater of FIP and the Resource's weighted average fuel price (WAFP), and the fuel price calculated for the second term is likewise the greater of WAFP or FIP plus a fuel adder. [e24][e27] WAFP is the volume-weighted average intraday, same-day and spot fuel price, or the projected incremental fuel consistent with a fuel supply contract, submitted to ERCOT in the Adjustment Period, and the fuel adder is the average cost above the index price the Resource has paid to obtain fuel. [e25][e26] (Reading of the formula: because FIP, a Katy price, sets a floor in these terms, a unit buying gas below Katy would not see that discount reflected in the formula's fuel price; the sources do not discuss this case.)

Net revenue effect. The IMM says low Waha gas prices have historically produced much higher net revenues for gas resources in the West, and that the hub price gap widened in 2024 and 2025 as West zone congestion costs rose. The 2025 report attributes the 2025 widening to the Permian Basin import constraint and expects the gap to narrow as work on "these projects" concludes; the 2024 report tied the 2024 widening to transmission upgrades and maintenance in the West zone. [e3][e7] The IMM also says Waha prices dipped below $0 multiple times in 2021, 2022 and 2023 and were more volatile than Katy. [e29][e30][e21]

## Timeline

- 2018 onward: Permian natural gas production outpaces pipeline capacity (FERC). [e11]
- December 12, 2019: Katy Hub replaces Houston Ship Channel as the FIP reference (NPRR952, per the IMM). [e15]
- 2021: Permian Highway, Whistler and Double E pipelines come online, narrowing the Waha-Henry gap; the IMM says the Waha-Katy separation lessened in 2021. IMM net revenue estimate for two new gas resources, based on 2021 revenues: $770 to $850 per kW-year at Waha versus $700 to $800 at Katy. [e14][e13][e16][e17]
- 2022: the IMM says the Waha-Katy separation returned; $150 to $200 per kW-year at Waha versus $130 to $180 at Katy, based on 2022 revenues. [e18][e19]
- 2023: the IMM says net revenue roughly 10% higher at Waha than Katy, based on 2023 revenues. [e20]
- 2024: Waha traded below zero on 42% of trading days (EIA); Matterhorn Express enters service in October 2024; the IMM says the Waha-Katy gap widened with West zone congestion costs. [e2][e7]
- 2025: the IMM says the gap widened because the Permian import constraint substantially increased congestion costs. [e3]

## Key facts

- Waha is in West Texas near Permian Basin production. [e1]
- Waha traded below zero on 42% of trading days in 2024 (EIA). [e2]
- The Permian Basin produced 19% of total U.S. natural gas in 2023. [e1]
- ERCOT's FIP uses Katy Hub prices (since December 12, 2019, per the IMM). [e6][e15]
- IMM net revenue for two new gas resources, Waha versus Katy: $770 to $850 versus $700 to $800 per kW-year (2021), $150 to $200 versus $130 to $180 (2022), roughly 10% higher at Waha (2023). [e17][e19][e20]
- The IMM expected the Katy-Waha gap to narrow again as work on "these projects" concludes (2025 report; projects not named in that text). [e3]

## Say it like this

(Guidance) Waha is the West Texas gas hub, and EIA says its prices are typically lower than other hubs because Permian production has grown faster than takeaway capacity. [e1] In ERCOT, the IMM uses Waha prices for West-zone gas units and Katy prices for Houston, while ERCOT's FIP and offer-mitigation formulas run on Katy. [e4][e6]

## Common confusion

Waha is not ERCOT's Fuel Index Price: the FIP is a Katy Hub index. [e6] Waha is also not Henry Hub, the benchmark most hubs are priced against. [e5] A cheap-gas West zone does not mean low West power prices: the IMM says West net revenues for gas units were much higher, with congestion costs also rising in the West. [e3] The IMM's net revenue comparison is a modeled estimate for new gas resources, not a measure of Waha-to-power price pass-through. [e17]

## Questions

### Why does Waha trade below other hubs?

Permian production, much of it associated gas from oil wells, has grown faster than takeaway pipeline capacity, so local gas is discounted and sometimes negative. [e1][e11]

### Why does the IMM use Waha for the West zone?

Gas prices vary by location, so the IMM uses Katy for the Houston zone and Waha for the West zone when comparing net revenue for gas units. [e4]

### Did anything improve Waha prices recently?

EIA notes the Matterhorn Express Pipeline entered service in October 2024 and that Waha had stayed above zero since mid-November 2024 as of its February 2025 article. [e2]

### Why is ERCOT's FIP a Katy price rather than Waha, and what would change if it were Waha?

NPRR952 made Katy the FIP reference effective December 12, 2019, replacing Houston Ship Channel. [e15] The saved sources do not give the reasoning. FIP feeds the percentage-of-FIP offer inputs and the mitigated offer cap formulas, so a different index would change those inputs. [e28][e24]

### What if Waha goes negative: do West-zone gas units get paid to run?

The sources do not say how a negative Waha price flows into West-zone power prices. The IMM notes Waha prices dipped below $0 several times in 2021, 2022 and 2023 and were more volatile than Katy. [e29][e30][e21] Its net revenue comparison is for modeled new units and is not a statement about operating decisions.

### How did the Waha-Katy gap affect net revenue over time?

The IMM's modeled new-unit net revenue was higher at Waha than Katy in each of 2021, 2022 and 2023 (about 10% higher in 2023). [e17][e19][e20] In 2024 and 2025 the IMM says the gap in net revenues between West and Houston was wide, widening with West zone congestion. [e3][e7]

## Open items

- No saved source gives Waha price levels or Katy-Waha basis in $/MMBtu for 2025 or 2026. EIA gives Henry Hub averages ($2.22 in 2024, $3.52 in 2025) and Waha's 42% negative-price days for 2024 only.
- The link between Waha prices and West-zone or HB West power prices is described only qualitatively (IMM net revenue by location, congestion); no saved source quantifies it.
- The saved sources do not say which ERCOT-selected source provides the FIP index prices; the Protocols say only that ERCOT issues a Market Notice naming it.
- The reasoning behind NPRR952 (Katy replacing Houston Ship Channel) is not in the saved sources.
- The IMM 2024 and 2025 net revenue by location figure (Figure 55) values are in a chart; the text does not give dollar amounts for Waha versus Katy in those years.
- EIA's January 2026 article's table of hub averages (which may include Waha) did not extract; Waha's 2025 average is not available.
