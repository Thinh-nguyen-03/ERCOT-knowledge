# Audit packet: Heat Rate (heat-rate)

kind metric · domain fundamentals · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, variable table (GIHR) · text copy line 1530 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | 
QUOTE: GIHR _(q, r) | MMBtu/MWh | Generic Incremental Heat Rate-The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, variable table (IHR) · text copy line 1532 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | IHR _(q, r) | MMBtu/MWh | 
QUOTE: Verifiable Incremental Heat Rate per Resource-The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1(1), Mitigated Offer Cap formula · text copy line 1511 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: 
QUOTE: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]
AFTER:  Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 If a QSE has not submitted an Energy O…

### e4 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC §25.509(b)(2) · text copy line 34

BEFORE: …emand response and is registered with ERCOT as a load resource. (6) Resource entity -- an entity that is a generation entity or a load entity. (b) Scarcity Pricing Mechanism (SPM). ERCOT will administer the SPM. The SPM will operate as follows: (1) The SPM will operate on a calendar year basis. (2) 
QUOTE: For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh).
AFTER:  (3) For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT. (4) Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP - POC) * (number of minutes in a settlement interval / …

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, Peaker Net Margin · text copy line 7702

BEFORE: …ceeded only once in ERCOT's history, on February 16, 2021, during Winter Storm Uri. Figure 57 shows the PNM values for the past seven years. ERCOT's PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. 
QUOTE: Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates.
AFTER: 64 As discussed earlier, the value for CONE used to calculate the peaker net margin threshold is still the legacy value of $105 per kW-year, as illustrated in Figure 57. 64 Based on §25.509(b)(2): https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.509/25.509.pdf 2025 S…

### e6 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Resource Adequacy chapter, footnote 48 (net revenue assumptions) · text copy line 7612

BEFORE: …o. Figure 56: Combustion Turbine (CT) and Combined Cycle (CC) Net Revenues, 2020-2024 Net Revenues ($ per kW-year) $1,000 Reserves Energy Sales $900 $800 $700 $600 $500 $400 $300 $200 $100 $0 Estimated CT CONE Estimated CC CONE 2020 2021 2022 2023 2024 2020 2021 2022 2023 2024 Combustion Turbine 48 
QUOTE: For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs.
AFTER:  A total outage rate (planned and forced) of 10% was assumed for each technology. It does not include: 1) start-up and minimum energy costs; or 2) ramping restrictions that can prevent generators from profiting during brief price spikes. 80 | 2024 State of the Market Report / Combined Cycle / Resour…

### e7 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Resource Adequacy chapter, footnote 51 · text copy line 7708

BEFORE: …ely high net revenue years may produce excess cost without an investment 50 https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf 51 In ERCOT, most coal is imported from the Powder River Basin (PRB), where the average coal price in 2024 was about $0.80 per MMBtu. 
QUOTE: The average heat rate of coal-fired power plants has remained relatively stable over the past decade, increasing slightly from 10.4 MMBtu per MWh in 2013 to 10.7 MMBtu per MWh in 2023 as the national fleet continues to age.
AFTER:  Based on a 10.7 MMBtu per MWh heat rate and $0.80 per MMBtu fuel cost. See https://www.eia.gov/electricity/annual/html/epa0801.html and https://www.eia.gov/coal/markets/#tabs-prices-2. 82 | 2024 State of the Market Report / / Resource Adequacy response to the price signal. To manage this dynamic, E…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 2. Implied Heat Rates · text copy line 1418

BEFORE: …erence in system lambda output by SCED with and without any reliability actions. Source for these numbers: https://interchange.puc.texas.gov/Documents/56000_10_1516314.PDF 2025 State of the Market Report | 3 / / Review of Real-Time Market Outcomes even at current electricity and natural-gas prices. 
QUOTE: We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money.
AFTER:  Figure 2 shows the implied marginal heat rates for each month of 2025 and annually for 2021-2025. !"#$B&'()GHIB-G$(.&G/(MG/&(N))2/P4)R67 Figure 2: Monthly and Annual Implied Heat Rates 2021-2025 %" %! 898W 8988 898; 898< 898= >G/PHG$(?G@(AHBB&(NC(#&H())2/P7 345%! 3"5S. 3A5AA 3#57! 3%5!8 & ( ( & * A…

### e9 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Review of Real-Time Market Outcomes, price spike analysis (Figure 3) · text copy line 2438

BEFORE: …ignificant effect of ECRS implementation artificially increasing the prevalence of shortage pricing. 3. Price Spike Impacts To better observe the effect of the highest-priced hours on the average real-time energy price, Figure 3 shows the frequency of real-time energy price spikes in 2023 and 2024. 
QUOTE: For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price is greater than 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the prevailing fuel index price (FIP) which produces an energy price spike threshold in $ per MWh. Prices at this level typically exceed the marginal costs of virtually all on-line generators.
AFTER:  The figure also shows the portion of the average energy price in the month that is attributable to the price spikes. Figure 3: Impact of Price Spikes on Real-Time Energy Price, 2023-2024 $300 875 Impact of Price Spikes on Average Price Average Price of NonSpike Intervals Number of Price Spikes 750 …

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, E. Aggregated Offer Curves · text copy line 1969

BEFORE: …o $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits. 2025 State of the Market Report | 9 / / Review of Real-Time Market Outcomes • 
QUOTE: 28% of capacity was priced between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet.
AFTER:  • Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024. The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025. Figure 7: Aggregated Generation Offer St…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, 1. FFSS Deployments in 2025 · text copy line 7069

BEFORE: …tion resources with owned natural gas stored offsite and backed by firm transportation and storage agreements.58 The FFSS program has a fixed budget of $54 million. 1. FFSS Deployments in 2025 To date, ERCOT has issued four RFPs for FFSS, each with an obligation period from November 15 to March 15. 
QUOTE: In the 2024-2025 contract period, ERCOT procured 4,195 MW across 32 dualfuel resources and one natural gas resource. The offer cap was set at $12,240 per MW based on a Fuel Oil Index price of $17 per MMBtu, a heat rate of 15 MMBtu per MWh, and a 48-hour obligation period.
AFTER:  The same parameters were proposed for the 2025-2026 contract period.59 57 58 59 NPRR 1120: https://www.ercot.com/mktrules/issues/NPRR1120 NPRR 1169: https://www.ercot.com/mktrules/issues/NPRR1169 PUCT Report on FFSS: https://interchange.puc.texas.gov/Documents/56000_10_1516314.PDF 90 | 2025 State o…

### e12 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Fuel Index Price (FIP) · text copy line 1103

BEFORE: …cy Response includes, but may not be limited to, capacity from duct firing, auxiliary boilers, and other methods that do not immediately respond, arrest, or stabilize frequency excursions following a disturbance without secondary frequency response or instructions from ERCOT. Fuel Index Price (FIP) 
QUOTE: The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu).
AFTER:  ERCOT shall issue a Market Notice disclosing the name of the ERCOT-selected source for the average daily index prices used to calculate FIP. In the event that the ERCOT-selected source becomes unavailable, or ERCOT determines that the source has become unsuitable for the intended purpose, ERCOT may…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 2. Implied Heat Rates · text copy line 1498

BEFORE: … month of 2025 and annually for 2021-2025. !"#$B&'()GHIB-G$(.&G/(MG/&(N))2/P4)R67 Figure 2: Monthly and Annual Implied Heat Rates 2021-2025 %" %! 898W 8988 898; 898< 898= >G/PHG$(?G@(AHBB&(NC(#&H())2/P7 345%! 3"5S. 3A5AA 3#57! 3%5!8 & ( ( & * A" A! #" #! " ! D F & A!A" F + , J A# AA A% A. A" F//MNO 
QUOTE: The average implied heat rate for 2025 was almost 28% lower than in 2024 and was the lowest annual average of the last five years. This value is now in line with the marginal heat rate of natural gas power plants in the ERCOT market.
AFTER:  In recent years, the prevalence and impact of price spikes, shown in Figure 4, elevated the implied marginal heat rate. Those spikes had a larger effect in 2023 and 2024 relative to fuel prices than in 2025. Over time, however, some factors have weakened the link between natural gas and electricity…

### e15 · `eia-faq-heat-rate` · tier 2 · EIA FAQ: What is the efficiency of different types of power plants?
locator: FAQ: What is the efficiency of different types of power plants?, first paragraph · text copy line 32

BEFORE: …ion U.S. Energy Information Administration - EIA - Independent Statistics and Analysis Menu - Statistics - Analysis - Tools - Education - News - Search Frequently Asked Questions (FAQs) This page has no sub-navigation. Skip to page content. What is the efficiency of different types of power plants? 
QUOTE: Heat rate is one measure of the efficiency of electric generators and power plants that convert fuel into heat and then into electricity. The heat rate is the amount of energy used by an electrical generator or power plant to generate one kilowatthour (kWh) of electricity. We express heat rates in British thermal units (Btu) per net kWh generated.
AFTER:  Net generation is the amount of electricity a power plant supplies to the power transmission line connected to the power plant. Net generation accounts for all the electricity the power plant consumes to operate the plant's equipment and generators, such as fuel feeding systems, boiler water pumps,…

### e16 · `eia-glossary-heat-rate` · tier 2 · EIA Glossary: Heat rate
locator: Glossary entry, Heat rate · text copy line 38

BEFORE: …ducation - News - Search Glossary This page has no sub-navigation. Skip to page content. A B C D E F G H I J K L M N O P Q R S T U V W XYZ Search glossary terms: Browse terms related to these fuel groups:alternative fuels|coal|electricity|natural gas|nuclear|petroleum|renewable Heat rate Heat rate: 
QUOTE: A measure of generating station thermal efficiency commonly stated as Btu per kilowatthour.
AFTER:  Note: Heat rates can be expressed as either gross or net heat rates, depending whether the electricity output is gross or net generation. Heat rates are typically expressed as net heat rates. Top - About EIA - Open Data - Legacy - Contact Us U.S. Energy Information Administration 1000 Independence …

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 2. Implied Heat Rates · text copy line 1504

BEFORE: …t years, the prevalence and impact of price spikes, shown in Figure 4, elevated the implied marginal heat rate. Those spikes had a larger effect in 2023 and 2024 relative to fuel prices than in 2025. Over time, however, some factors have weakened the link between natural gas and electricity prices. 
QUOTE: The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market's implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market's implied heat rate.
AFTER:  3. Prices by Time of Day While Figure 1 shows monthly variation in the all-in cost of energy, Figure 3 illustrates how real-time energy prices vary by time of day. Specifically, Figure 3 shows load-weighted 4 | 2025 State of the Market Report / / Review of Real-Time Market Outcomes settlement point…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 1. Real-Time Market Prices · text copy line 1368

BEFORE: … with no adders or uplift, and corresponded to a 61% increase in the average daily index price for natural gas. Gas and energy prices are expected to correlate in a well-functioning, competitive market because suppliers have an incentive to offer energy according to the marginal cost of generation. 
QUOTE: Fuel costs represent the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT.
AFTER:  Figure 1 provides additional insights: • Ancillary services costs were $0.39 per MWh of load in 2025, a 60% decrease from 2024 and the lowest since 2020. We analyze this in greater detail in Chapter III.A. • The ORDC adder contributed $0.02 per MWh to the all-in cost of energy in 2025, a 93% reduct…

## Statements to check

- **Definition #1** (cites e15, e16, e1, e12, e3): Heat rate is the amount of energy used by a generator or power plant to generate one kilowatthour of electricity, expressed by EIA in Btu per net kWh generated; it is a measure of thermal efficiency. [e15][e16] ERCOT rules and IMM reports express a generator's heat rate in MMBtu per MWh and multiply it by a fuel price in $/MMBtu to get a fuel cost in $/MWh; for example, the Protocols' Generic Incremental Heat Rate is a single-value incremental heat rate in MMBtu/MWh. [e1][e12][e3]
- **How it works #1** (cites e3, e12, e2, e1): A heat rate turns a fuel price into a marginal cost. In the Mitigated Offer Cap formula, ERCOT multiplies a generic incremental heat rate (GIHR) by the higher of the Fuel Index Price or a weighted average fuel price, or uses the resource's verifiable incremental heat rate (IHR) times a fuel price plus O&M, whichever is greater. [e3] The FIP is a daily Katy Hub natural gas price in $/MMBtu. [e12] The verifiable IHR is a curve for each resource approved through the verifiable cost process, while the GIHR is set at 10.5 for resources in commercial operation on or before January 1, 2004 and 14.5 for later ones. [e2][e1]
- **How it works #2** (cites e14, e10): Fuel costs are the largest component of marginal production cost for most generators, and natural gas is the most widely used fuel in ERCOT, according to the IMM. [e14] The IMM says the price band from zero to 10 times the FIP covers the incremental fuel price of the vast majority of the ERCOT fleet; 28% of capacity was offered in that band in 2025. [e10]
- **ERCOT context #1** (cites e4, e6, e9, e11): Heat rates appear as fixed parameters in several rules and analyses. [e4][e6][e9][e11]
- **ERCOT context #2** (cites e4, e5) FLAG number-not-in-quote: 25.509: - PUCT rule 25.509 sets the daily peaking operating cost at 10 times the natural gas price index, and the IMM says ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate. [e4][e5]
- **ERCOT context #3** (cites e6) FLAG number-not-in-quote: 2024: - The IMM's own net revenue analysis (2024 report) assumes 7 MMBtu per MWh for a combined-cycle unit and 10.5 MMBtu per MWh for a gas turbine. [e6]
- **ERCOT context #4** (cites e9) FLAG number-not-in-quote: 2024: - For its price spike analysis in the 2024 report, the IMM defines a price spike as a 15-minute interval with a load-weighted average energy price above 18 MMBtu per MWh times the FIP, a level that typically exceeds the marginal cost of virtually all online generators. [e9]
- **ERCOT context #5** (cites e11): - The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate with a $17 per MMBtu fuel oil price and a 48-hour obligation. [e11]
- **ERCOT context #6** (cites e8, e13): The market-wide counterpart is the implied heat rate, the power price divided by the gas price. [e8] The IMM says the 2025 average implied heat rate was in line with the marginal heat rate of ERCOT gas plants. [e13]
- **Key facts #1** (cites e1): - Generic Incremental Heat Rate in the Mitigated Offer Cap: 10.5 MMBtu/MWh for COD on or before January 1, 2004; 14.5 after. [e1]
- **Key facts #2** (cites e4, e5): - PNM peaking operating cost: 10 times the gas price index, i.e. a 10.0 MMBtu per MWh heat rate. [e4][e5]
- **Key facts #3** (cites e6) FLAG number-not-in-quote: 2024: - IMM net revenue assumptions (2024 report): 7 MMBtu/MWh combined cycle, 10.5 MMBtu/MWh gas turbine, $4/MWh variable O&M. [e6]
- **Key facts #4** (cites e9) FLAG number-not-in-quote: 2024: - IMM price spike threshold (2024 report): 18 times FIP. [e9]
- **Key facts #5** (cites e11): - FFSS 2024-2025 offer cap: $12,240 per MW from $17/MMBtu, 15 MMBtu/MWh and 48 hours. [e11]
- **Key facts #6** (cites e7): - U.S. coal fleet average heat rate: 10.4 MMBtu/MWh in 2013 to 10.7 in 2023 (national figure cited by the IMM). [e7]
- **Formula #1** (cites e11, e3): The FFSS cap shows the arithmetic directly: fuel price ($17 per MMBtu) times heat rate (15 MMBtu per MWh) times the 48-hour obligation gives the $12,240 per MW cap. [e11] The same structure, heat rate times a fuel price, sits inside the Mitigated Offer Cap formula. [e3]
- **Common confusion #1** (cites e8, e17, e1): (Guidance) A unit's physical heat rate and the market's implied heat rate are different things: the implied heat rate is just the power price divided by the gas price, and the IMM says it is lowered by hours at or below $0 and raised by shortage pricing. [e8][e17] Also, the 10.5 and 14.5 GIHR values in the Mitigated Offer Cap are parameters the Protocols set by Commercial Operations Date; the sources do not say they are measured heat rates of actual units. [e1]
- **Questions #2** (cites e3, e12): It multiplies the heat rate in MMBtu/MWh by a fuel price in $/MMBtu, such as the Katy Hub FIP, as in the Mitigated Offer Cap formula. [e3][e12]
- **Questions #4** (cites e4, e5): 10 MMBtu/MWh: the rule sets the peaking operating cost at 10 times the gas price index. [e4][e5]
- **Questions #6** (cites e6) FLAG number-not-in-quote: 2024: 7 MMBtu/MWh for a combined cycle and 10.5 MMBtu/MWh for a gas turbine, plus $4/MWh variable O&M, in its 2024 net revenue analysis. [e6]
- **Questions #8** (cites e11): In FFSS: the 2024-2025 offer cap was built from a 15 MMBtu/MWh heat rate, a $17/MMBtu fuel oil price and a 48-hour obligation. [e11]
- **Scenarios #2** (cites e3, e6): - Multiply its heat rate by tonight's gas price and add variable O&M, then compare with the expected power price. [e3][e6]
- **Scenarios #3** (cites e9): - If power is above 18 times the FIP, the IMM would count it as a price spike, above the marginal cost of virtually all online units. [e9]
- **Link to implied-heat-rate** (cites e8): contrasts-with Implied Market Heat Rate: The IMM's implied heat rate is the power price divided by the gas price, a market indicator rather than a unit's physical efficiency. [e8]
- **Link to natural-gas-price** (cites e12, e3): related Natural Gas Prices (Henry Hub): ERCOT multiplies heat rates by the Fuel Index Price, a Katy Hub gas index in $/MMBtu. [e12][e3]
- **Link to market-power-mitigation** (cites e3): used-in Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Mitigated Offer Caps are built from a generic or verifiable incremental heat rate times a fuel price. [e3]
- **Link to ffss** (cites e11): used-in FFSS (Firm Fuel Supply Service): The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate. [e11]
- **Link to offer-cap** (cites e4, e5) FLAG number-not-in-quote: 25.509: used-in Offer Caps (HCAP / LCAP / SWCAP): PUCT rule 25.509 sets a daily peaking operating cost of 10 times the natural gas price index, and ERCOT's peaker net margin uses a 10.0 MMBtu per MWh heat rate. [e4][e5]
- **Link to spark-spread** (cites e3): prerequisite-of Spark Spread: The Mitigated Offer Cap formula multiplies a heat rate by a fuel price, the same fuel-cost arithmetic a spark spread builds on. [e3]
- **Link to merit-order** (cites e10): determines Merit Order / Supply Stack: The IMM says the 0 to 10 times FIP price band covers the incremental fuel price of most of the ERCOT fleet. [e10]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) (Illustrative) Suppose gas is $3.00/MMBtu. A combined cycle at the IMM's assumed 7 MMBtu/MWh has a fuel cost of 7 × 3.00 = $21/MWh; a gas turbine at 10.5 MMBtu/MWh has 10.5 × 3.00 = $31.50/MWh. Add the IMM's assumed $4/MWh variable O&M and you get $25 and $35.50. If real-time power is $30/MWh, the combined cycle covers its marginal cost and the gas turbine does not. The IMM's price spike threshold at that gas price would be 18 × 3.00 = $54/MWh.
- (Say it like this) (Guidance) Heat rate is how many MMBtu of fuel a plant burns per MWh, so heat rate times the gas price is the plant's fuel cost per MWh. ERCOT's rules plug fixed heat rates into mitigated offer caps, the peaker net margin and FFSS caps, so knowing the standard numbers lets you rebuild those caps in your head.

