# Audit packet: Negative Prices (negative-prices)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh.
AFTER:  No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amoun…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …----------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor.
AFTER:  The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh G…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table · text copy line 1667 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …-------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh 
QUOTE: Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh
AFTER:  ESR -$250/MWh Other -$50/MWh -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1)(b)(i), second step · text copy line 2240

BEFORE: …s, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. 
QUOTE: Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor.
AFTER:  In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, Implied Heat Rate · text copy line 1504

BEFORE: …t years, the prevalence and impact of price spikes, shown in Figure 4, elevated the implied marginal heat rate. Those spikes had a larger effect in 2023 and 2024 relative to fuel prices than in 2025. Over time, however, some factors have weakened the link between natural gas and electricity prices. 
QUOTE: The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market's implied heat rate.
AFTER:  Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market's implied heat rate. 3. Prices by Time of Day While Figure 1 shows monthly variation in the all-in cost of energy, Figure 3 illustrates how real-…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Energy Storage Resources chapter, ESR revenue and arbitrage · text copy line 3008

BEFORE: … arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high. The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. 
QUOTE: As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed.
AFTER:  ESR Net Injection of Power Figure 18 shows the growth in hourly net energy injections from ESRs from 2023 through 2025. A positive injection value indicates aggregate discharging to the grid, and a negative value indicates aggregate charging. The figure shows a dramatic year-by-year increase in ESR…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, section C, Zonal Energy Prices · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Market Operations, bullets on offers at or below $0 · text copy line 1955

BEFORE: …al changes in how the aggregate offer stacks are formulated. The figure shows: • 22% of real-time generation capacity was not dispatchable because it was below generators' Low Sustained Limit (LSL) in 2025, compared to 27% in 2024. This trend indicates lower committed thermal capacity on average. • 
QUOTE: 35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits.
AFTER:  2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT gene…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, 2. Congestion Management by ESRs · text copy line 5435

BEFORE: … growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity. 2. Congestion Management by ESRs 
QUOTE: ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0.
AFTER:  Conversely, when increasing supply at a particular location can resolve congestion, ESRs can discharge and earn higher prices that reflect the value of serving load subject to binding transmission constraints. 2025 State of the Market Report | 63 / / Transmission Congestion and CRRs Figure 39 illus…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Energy Storage Resources chapter, Figure 19 discussion · text copy line 3123

BEFORE: …r ESRs to Buy or Sell Energy 2021-2025 )#>>> :3;D>>> ;">>><;D>>> (#>>> ;">><;">>> ;><;">> D#>>> =>3;> C#>>> B#>>> $#>>> "#>>> > $>$" $>$$ $>$B $>$C *+,-./01+O1345560, $>$D $>$" $>$$ $>$B $>$C $>$D 7./01+O138+9, Figure 19 also shows the aggregated bid curves for ESRs to purchase energy for charging. 
QUOTE: Historically, ESRs could charge for free (i.e. at bids priced at $0 or less) during most charging periods, but this trend is changing rapidly. The share of bids priced at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025.
AFTER:  ESR capacity offering to buy energy far exceeds the capacity offering to sell. This likely reflects that ancillary services, such as up-reserves, commit much of the ESR discharging capacity and make it unavailable to SCED. F. Operating Reserve Margin In evaluating the current supply and demand cond…

## Statements to check

- **Definition #1** (cites e1, e5): A negative price is an energy price below $0 per MWh. ERCOT's rules allow Energy Offer Curves as low as -$250.00 per MWh, and the IMM reports hundreds of hours a year with prices at or below $0. [e1][e5]
- **How it works #1** (cites e6, e7, e1, e4, e2, e3): In the IMM's account, negative prices show up when midday solar surges and in the West zone. [e6][e7] Offers can go negative because the protocol range for an Energy Offer Curve starts at -$250.00 per MWh. [e1] In SCED Step 2, each Energy Offer Curve subject to mitigation is bounded at the lesser of the Step 1 Reference LMP or the appropriate Mitigated Offer Floor, and the floors are Resource-category specific, for example -$100/MWh for wind and -$50/MWh for PV. [e4][e2][e3]
- **How it works #2** (cites e8): Why would a generator offer below zero? The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025 (32% in 2024), mostly wind and solar that are incentivized to produce even when prices are negative because many receive federal production tax credits. [e8]
- **ERCOT context #1** (cites e7, e5) FLAG number-not-in-quote: 2025: Location matters. In 2025 the West zone, which holds export-constrained Panhandle wind and solar and import-constrained Permian load, had both the most negative-price intervals and the most price spikes of any load zone. [e7] Growth in zero-marginal-cost wind and solar also pulls down the market's implied heat rate. [e5]
- **ERCOT context #2** (cites e6, e9, e10): Batteries are one way negative prices are being absorbed. As midday solar has surged, real-time prices have dropped, sometimes to negative levels, which lets ESRs charge cheaply or be paid to consume energy that would otherwise be curtailed. [e6] At congested locations ESRs can often charge at prices below $0. [e9] The cheap-charging era is fading: the share of ESR bids to buy at or below $0 fell from 82% in 2023 to 71% in 2024 and 56% in 2025. [e10]
- **Key facts #1** (cites e1): - Energy Offer Curves may be offered down to -$250.00 per MWh. [e1]
- **Key facts #2** (cites e3): - Mitigated Offer Floors by category include -$100/MWh for wind and -$50/MWh for PV. [e3]
- **Key facts #3** (cites e8): - 35% of real-time generation capacity was offered at or below $0 in 2025 versus 32% in 2024. [e8]
- **Key facts #4** (cites e7) FLAG number-not-in-quote: 2025: - The West zone had the most negative-price intervals in 2025. [e7]
- **Key facts #5** (cites e10): - ESR bids priced at or below $0 fell from 82% (2023) to 71% (2024) to 56% (2025). [e10]
- **Say it like this #1** (cites e6): Negative prices happen when a lot of zero-cost wind and solar, often supported by tax credits, keeps producing at times and places where the grid cannot use it. They are most common in the West, and batteries can charge cheaply or be paid to consume when prices go negative. [e6]
- **Common confusion #1** (cites e1, e7, e2, e3): A negative price is not an error or a free-energy event. It is a legitimate outcome of offers that go as low as -$250 per MWh, and it is local: the same interval can show negative prices in the West and spikes elsewhere. [e1][e7] The Mitigated Offer Floor table sets category-specific minimums that SCED can apply to offers. [e2][e3]
- **Questions #2** (cites e8): Many receive federal production tax credits, so they are incentivized to produce even when prices are negative. The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025. [e8]
- **Questions #4** (cites e7): The West zone. The IMM says it includes the Panhandle, with abundant wind and solar but export-constrained, and the Permian Basin, with rapid demand growth and import-constrained, and this duality explains why it had both the most negative-price intervals and the most price spikes. [e7]
- **Questions #6** (cites e6, e10): They charge cheaply or even get paid to consume at negative prices. [e6] But the share of their charging bids at or below $0 has fallen to 56% in 2025. [e10]
- **Link to lmp** (cites e6, e7): related LMP (Locational Marginal Price): The IMM reports negative real-time prices in midday solar hours and in the West zone. [e6][e7]
- **Link to tax-credits-recs** (cites e8): causes PTC / ITC & RECs: Federal production tax credits keep many wind and solar resources willing to produce when prices are negative. [e8]
- **Link to congestion** (cites e7, e9) FLAG number-not-in-quote: 2025: related Transmission Congestion: The West zone, which includes export-constrained Panhandle wind and solar, had the most negative-price intervals in 2025, and batteries can often charge at prices below $0 when added load resolves congestion. [e7][e9]
- **Link to battery-revenue-stack** (cites e6): related Battery Revenue Stack: Midday negative prices let batteries charge cheaply or be paid to consume. [e6]
- **Link to offer-cap** (cites e1): contrasts-with Offer Caps (HCAP / LCAP / SWCAP): The offer cap limits prices on the high side, while the offer floor of -$250 per MWh limits offers on the low side. [e1]
- **Link to sc-west-negative-north-spike** (cites e7) FLAG number-not-in-quote: 2025: example-of Scenario: West Negative While North Spikes: The West zone had the most negative-price intervals in 2025 while also having the most price spikes. [e7]
