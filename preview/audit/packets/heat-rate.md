# Audit packet: Heat Rate (heat-rate)

kind metric · domain fundamentals · level 1

## Evidence (quote, where it sits in the source, and the text around it)

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

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 2. Implied Heat Rates · text copy line 1418

BEFORE: …erence in system lambda output by SCED with and without any reliability actions. Source for these numbers: https://interchange.puc.texas.gov/Documents/56000_10_1516314.PDF 2025 State of the Market Report | 3 / / Review of Real-Time Market Outcomes even at current electricity and natural-gas prices. 
QUOTE: We calculate it by dividing the power price by the fuel price to derive the heat rate that equates revenue from selling electricity with the cost of buying gas. Accordingly, a high implied heat rate signals a less competitive market where even inefficient units can profit, while a low implied heat rate indicates a more competitive market where only the most efficient generators are in the money.
AFTER:  Figure 2 shows the implied marginal heat rates for each month of 2025 and annually for 2021-2025. !"#$B&'()GHIB-G$(.&G/(MG/&(N))2/P4)R67 Figure 2: Monthly and Annual Implied Heat Rates 2021-2025 %" %! 898W 8988 898; 898< 898= >G/PHG$(?G@(AHBB&(NC(#&H())2/P7 345%! 3"5S. 3A5AA 3#57! 3%5!8 & ( ( & * A…

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

### e27 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), Appendix 6, Calculation and Application of Proxy Heat Rate · text copy line 2599

BEFORE: … O&M costs at minimum energy Verifiable Emission Costs at Minimum Energy = The allowable costs of acquiring emission credits required to operate Resource at minimum energy and defined in Equation 5 above. Appendix 6: Calculation and Application of Proxy Heat Rate and the Value of X for the Resource 
QUOTE: Proxy Heat Rate Monthly (PHRM) (MMBtu/MWh) = Average (based on values for one standard deviation from the Arithmetic Mean) ERCOT Day-Ahead Hub Price (in period) (DASPP _(ERCOT345BUS) )/Average Fuel Price Index (AVGFIP)($/MMBtu) for the same period. The PHR shall be based on the 12 month rolling average of the PHRM values.
AFTER:  The value of X for the Resource (VOXR) = Fuel Adder (FA) / Average Fuel Price Index (AVGFIP) ($/MMBtu) (in period). The PHR is used to estimate the payments received in Real Time by Resources ramping from breaker close to LSL (see Section 14, Appendices, Appendix 5, Specification of Relevant Equati…

### e28 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), Appendix 6, use of the PHR · text copy line 2601

BEFORE: …ub Price (in period) (DASPP _(ERCOT345BUS) )/Average Fuel Price Index (AVGFIP)($/MMBtu) for the same period. The PHR shall be based on the 12 month rolling average of the PHRM values. The value of X for the Resource (VOXR) = Fuel Adder (FA) / Average Fuel Price Index (AVGFIP) ($/MMBtu) (in period). 
QUOTE: The PHR is used to estimate the payments received in Real Time by Resources ramping from breaker close to LSL (see Section 14, Appendices, Appendix 5, Specification of Relevant Equations, for additional details). These estimated payments are removed from the RUC Guarantee indirectly by subtracting the product of the PHR and average generation (from breaker close to LSL) from the Resource's approved fuel rate, which is used to establish the RUC Guarantee.
AFTER:  The value of X for the Resource (VOXR) is used to compensate Resources for the actual cost of transporting and purchasing spot fuel. VOXR = Fuel Adder ($/MMBtu) / Average Fuel Index Price (AVGFIP) ($/MMBtu) (in a 15 day period - see item 2 below). For additional information on the fuel adder, see S…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1(1), FPRC formula and Fuel Adder definition · text copy line 1517 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …n the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then 
QUOTE: FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100
AFTER:  If a QSE has not submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * GASPEROL _(q, r) / 100 + FOP * OILPEROL _(q, r) / 100 + (SFP + FA _(q, r)) * SFPEROL _(q, r) / …

### e30 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1(1), Mitigated Offer Cap · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap (1) 
QUOTE: Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC).
AFTER:  For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))] Where, If a QSE has …

### e34 · `ref-eia-spark-spread-2013` · tier 2 · An introduction to spark spreads (Today in Energy) (2013)
locator: EIA Today in Energy, An introduction to spark spreads (February 8, 2013) · text copy line 75

BEFORE: …rk spread reflects low average power prices (because of an abundance of low-cost hydropower, particularly in the late spring and early summer). Note that spark spreads are not reported if they have negative values. Spark spread calculation. Spark spreads are calculated using the following equation: 
QUOTE: Spark spread ($/MWh) = power price ($/MWh) - [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)] A key component of the spark spread equation is the heat rate, or measure of efficiency, of a generating unit. Those marketing the output of a unit will use the unit's tested heat rate to assess its profitability. Market participants and observers rely on a generic benchmark to assess overall market conditions. EIA's new daily price table shows the spark spread using a benchmark heat rate of 7,000 Btu/kilowatthour (kWh), which represents a fairly new and efficient natural gas combined-cycle generator.
AFTER:  One kWh has a heat content of 3,412 Btu. A generator that uses 7,000 Btu to produce one kWh has a conversion efficiency slightly below 50% (see chart below). Less efficient units have higher heat rates, and therefore require more natural gas to produce a kWh of electricity. A combined-cycle unit, w…

### e36 · `imm-som-2020` · tier 2 · 2020 State of the Market Report for the ERCOT Electricity Markets (published 2021)
locator: 2020 State of the Market Report, Resource Adequacy, footnote 43 (p. 81) · text copy line 4091

BEFORE: …the system-wide offer cap. However, as of the end of 2020, PNM had not approached levels that would dictate a reduction in the system wide offer cap, even after 2019, when it reached the highest level to date. The PNM outcomes in 2020, significantly lower than 2019, only reinforce that position. 43 
QUOTE: The proxy combustion turbine in the Peaker Net Margin calculation assumes a heat rate of 10 MMBtu per MWh and includes no other variable operating costs or startup costs.
AFTER:  2020 State of the Market Report | 81 / / Resource Adequacy Figure 47: Peaker Net Margin 3. Changes to the ORDC The Commission directed a significant change to the ORDC in 2019. The Commission considered proposals modifying various defining aspects of the ORDC, including shifting the LOLP portion of…

## Statements to check (new or changed since the last audit)

- **Link to implied-heat-rate** (cites e8): contrasts-with Implied Market Heat Rate: The IMM's implied heat rate is the power price divided by the gas price, a market indicator rather than a unit's physical efficiency. [e8]
- **Link to natural-gas-price** (cites e12, e3, e29): related Natural Gas Prices (Henry Hub): ERCOT multiplies heat rates by the Fuel Index Price, a Katy Hub gas index in $/MMBtu, plus a fuel adder for units with verifiable costs. [e12][e3][e29]
- **Link to market-power-mitigation** (cites e3, e30): used-in Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Mitigated Offer Caps are built from a generic or verifiable incremental heat rate times a fuel price. [e3][e30]
- **Link to ffss** (cites e11): used-in FFSS (Firm Fuel Supply Service): The 2024-2025 FFSS offer cap used a 15 MMBtu per MWh heat rate. [e11]
- **Link to offer-cap** (cites e4, e5) FLAG number-not-in-quote: 25.509: used-in Offer Caps (HCAP / LCAP / SWCAP): PUCT rule 25.509 sets a daily peaking operating cost of 10 times the natural gas price index, and ERCOT's peaker net margin uses a 10.0 MMBtu per MWh heat rate. [e4][e5]
- **Link to peaker-net-margin** (cites e36, e5): used-in Peaker Net Margin (PNM): The PNM proxy combustion turbine assumes a 10 MMBtu per MWh heat rate and no other variable operating or startup costs. [e36][e5]
- **Link to spark-spread** (cites e34) FLAG number-not-in-quote: 2013: prerequisite-of Spark Spread: EIA's spark spread is the power price minus the gas price times a heat rate; EIA's 2013 article used a 7,000 Btu/kWh benchmark. [e34]
- **Link to ruc-make-whole** (cites e27, e28): used-in RUC Make-Whole & Clawback: ERCOT's proxy heat rate (day-ahead hub price over an average fuel price index) is used to estimate real-time payments that are removed from the RUC guarantee. [e27][e28]
- **Link to merit-order** (cites e10): determines Merit Order / Supply Stack: The IMM says the 0 to 10 times FIP price band covers the incremental fuel price of most of the ERCOT fleet. [e10]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) (Illustrative) Suppose gas is $3.00/MMBtu. A combined cycle at the IMM's assumed 7 MMBtu/MWh has a fuel cost of 7 × 3.00 = $21/MWh; a gas turbine at 10.5 MMBtu/MWh has 10.5 × 3.00 = $31.50/MWh. Add the IMM's assumed $4/MWh variable O&M and you get $25 and $35.50. If real-time power is $30/MWh, the combined cycle covers its marginal cost and the gas turbine does not. The IMM's price spike threshold at that gas price would be 18 × 3.00 = $54/MWh.
- (Example) (Illustrative) Suppose a unit's I/O curve is y = 200 + 7x + 0.01x² (MMBtu/hr, x in MW, D = 0). At 100 MW, fuel input is 200 + 700 + 100 = 1,000 MMBtu/hr, so the average heat rate is 10.0 MMBtu/MWh, while the incremental heat rate is 7 + 0.02 × 100 = 9.0 MMBtu/MWh. The fixed term A raises the average above the incremental rate at low output; the MOC's verifiable term uses the incremental rate.
- (Say it like this) (Guidance) Heat rate is how many MMBtu of fuel a plant burns per MWh, so heat rate times the gas price is the plant's fuel cost per MWh. ERCOT's rules plug fixed heat rates into mitigated offer caps, the peaker net margin and FFSS caps, so knowing the standard numbers lets you rebuild those caps in your head.
- (Say it like this) (Guidance) For dispatch and offers, think incremental heat rate (the cost of the next MW); for verifiable minimum energy costs, ERCOT asks for the average heat rate.

