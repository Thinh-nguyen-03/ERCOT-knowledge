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

### e16 · `eia-glossary-heat-rate` · tier 2 · EIA Glossary: Heat rate
locator: Glossary entry, Heat rate · text copy line 38

BEFORE: …ducation - News - Search Glossary This page has no sub-navigation. Skip to page content. A B C D E F G H I J K L M N O P Q R S T U V W XYZ Search glossary terms: Browse terms related to these fuel groups:alternative fuels|coal|electricity|natural gas|nuclear|petroleum|renewable Heat rate Heat rate: 
QUOTE: A measure of generating station thermal efficiency commonly stated as Btu per kilowatthour. Note: Heat rates can be expressed as either gross or net heat rates, depending whether the electricity output is gross or net generation. Heat rates are typically expressed as net heat rates.
AFTER:  Top - About EIA - Open Data - Legacy - Contact Us U.S. Energy Information Administration 1000 Independence Ave., SW Washington, DC 20585 Policies Privacy/Security Copyright & Reuse Accessibility Information Quality Freedom of Information Act (FOIA) Related Sites usa.gov U.S. Department of Energy St…

### e18 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.1 Verifiable Heat Rate Policies, (1)-(2) · text copy line 881 · heading above: 6.1 Verifiable Heat Rate Policies

BEFORE: …------------------------------ ------------------------------------------------------------------------------- 6 VERIFIABLE HEAT RATES (1) This section of ERCOT's Verifiable Cost Manual describes the policies and procedures for submitting Heat Rate information. 6.1 Verifiable Heat Rate Policies (1) 
QUOTE: Heat rate curve data is utilized within the Nodal Verifiable Cost Process because it can be used, in conjunction with the market price of fuel, to provide a proxy for the actual fuel costs of operating a Resource. (2) In the ERCOT Nodal market, there are two types of Resource-specific Heat Rate Curve data that Filing Entities may submit: Incremental Heat Rate and Average Heat Rate data. Average Heat Rate data must be submitted with Verifiable Minimum Energy Cost submissions. Incremental Heat Rate data may be included with data submitted for use in calculating Mitigated Offer Caps. ERCOT, however, will not approve any submitted heat rate data unless the Filing Entity also develops and submits Resource-specific heat-input versus power-output curves (I/O Curves).
AFTER:  That is because ERCOT uses I/O Curves as a basis for verifying heat rate curves. (3) The first of the aforementioned curves, the Incremental Heat Rate (IHR) Curve, is defined as the first derivative of the I/O Curve. It provides the amount of thermal energy used by a Resource to achieve an incremen…

### e19 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.1 Verifiable Heat Rate Policies, (3) · text copy line 885 · heading above: 6.1 Verifiable Heat Rate Policies

BEFORE: …lculating Mitigated Offer Caps. ERCOT, however, will not approve any submitted heat rate data unless the Filing Entity also develops and submits Resource-specific heat-input versus power-output curves (I/O Curves). That is because ERCOT uses I/O Curves as a basis for verifying heat rate curves. (3) 
QUOTE: The first of the aforementioned curves, the Incremental Heat Rate (IHR) Curve, is defined as the first derivative of the I/O Curve. It provides the amount of thermal energy used by a Resource to achieve an incremental change in electrical energy output (i.e., the amount of thermal energy used to produce an additional unit of output). The second, the Average Heat Rate (AHR) Curve provides the average amount of energy used by a Resource to provide each unit of power output. The AHR Curve is determined by dividing input in fuel by the power it generates for various levels of generation.
AFTER:  6.2 Submission of Heat Rate Curve Data (1) All Heat Rate Curves and Heat Rate data must be submitted in terms of Net Output. Filing Entities have two options for submitting Heat Rate Curves and Heat Rate data: submit the results of tests actually performed on the generating unit or submit the manuf…

### e20 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.2.1 Input-Output Curve, (1)(d) · text copy line 901 · heading above: 6.2.1 Input-Output Curve

BEFORE: …om comparable units, modified by available actual unit test data (b) The actual data for the total heat (or fuel) I/O curve must include minimum and maximum load points and at least two intermediate load points (c) I/O curves are to be fitted from data using either manual or computer techniques (d) 
QUOTE: Submitted I/O Curves are to be defined by the third-order equation: y = A + Bx + Cx2 + Dx3 where: (i) x = Output in MW; y = Input in MMBtu/hr; and A-D = coefficients that define the equation;
AFTER:  (ii) All values (y, x, A, B, C, D) must be provided to ERCOT; and (iii) All coefficients (A, B, C, D) must be nonzero. (e) If during the construction of the I/O Curve a Resource believes the Second-Order equation (i.e. d = 0) better defines the curve for this specific Resource, the Filing Entity mu…

### e21 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.2.2 Incremental Heat Rate Curve, (1)(b)-(e) · text copy line 921 · heading above: 6.2.2 Incremental Heat Rate Curve

BEFORE: …been proven in sufficient detail. (g) ERCOT will verify this I/O Curve and will use it a basis for verifying the IHR and AHR Curves. 6.2.2 Incremental Heat Rate Curve (1) All submitted IHR Curve data must: (a) Be determined, either mathematically, or directly from the relevant Resource's I/O Curve; 
QUOTE: (b) Provide a monotonic, non-decreasing function; (c) Be submitted in terms of MMBtu/MWh; (d) Consist of at least 2, but no more than 10, pairs of IHR (MMBtu/MWh) and Output (MW) points; and (e) Be defined as the I/O Curve's first derivative: IHR = dy/dx = B + 2Cx +3Dx2, unless it's based on a second order equation as described in paragraph (e) of Section 6.2.1, Input-Output Curve, above.
AFTER:  (i) Where: x = Output in MW; y = Input in MMBtu/MWh; and B-D = coefficients that define the equation (ii) All values (dy/dx, x, B, C, D) must be provided to ERCOT (2) If a generator does not have a monotonic and non-decreasing IHR, a Filing Entity must instead submit both of the following: (a) Thei…

### e22 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.2.3 Average Heat Rate Curve, (1)(d) · text copy line 951 · heading above: 6.2.3 Average Heat Rate Curve

BEFORE: …st meet the same guidelines as described herein. 6.2.3 Average Heat Rate Curve (1) All submitted AHR Curve data must: (a) Be determined, either mathematically or graphically, directly from the relevant Resource's I/O Curve; (b) Be submitted in terms of MMBtu/MWh; (c) and Output (MW) points; and (d) 
QUOTE: Be defined as the I/O Curve divided by the output (x): AHR = y/x = (A + Bx + Cx2 + Dx3) / x where:
AFTER:  (i) x = Output in MW; y = Input in MMBtu/MWh; and A-D = coefficients that define the equation; and (ii) All values (y/x, x, A, B, C, D) must be provided to ERCOT. 7 This section intentionally left blank 8 FORCED OUTAGES AND CANCELLATION OF A RUC-COMMITTED RESOURCE 8.1 Forced Outages of a RUC-Commit…

### e23 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 6.2 Submission of Heat Rate Curve Data, (1) · text copy line 889 · heading above: 6.2 Submission of Heat Rate Curve Data

BEFORE: …. The second, the Average Heat Rate (AHR) Curve provides the average amount of energy used by a Resource to provide each unit of power output. The AHR Curve is determined by dividing input in fuel by the power it generates for various levels of generation. 6.2 Submission of Heat Rate Curve Data (1) 
QUOTE: All Heat Rate Curves and Heat Rate data must be submitted in terms of Net Output. Filing Entities have two options for submitting Heat Rate Curves and Heat Rate data: submit the results of tests actually performed on the generating unit or submit the manufacturer suggested Heat Rate values. If a Filing Entity has reason to believe that the physical characteristics of a generator have changed so that previously submitted Heat Rate Curves overstate fuel consumption or under state efficiency, the Filing Entity must notify ERCOT and must submit updated Heat Rate data.
AFTER:  Finally, submitted data relating to these curves must comply with the relevant requirements set forth below in order to be approved by ERCOT. 6.2.1 Input-Output Curve (1) For each Resource for which Heat Rate Curve data are submitted, the Filing Entity shall submit to ERCOT the I/O Curve in accorda…

### e24 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 2.1 Generally Applicable Rules, (g) · text copy line 363 · heading above: 2.1 Generally Applicable Rules

BEFORE: …gregate meter values and the relative percentages of fuel consumption during the relevant stage of the generation cycle (startup, operation at Low Sustained Limit (LSL), and operation above LSL). (f) All references to Heat Rate Curves and Heat Rate data within this document refer to Net Output. (g) 
QUOTE: For use in Real Time Mitigation, Filing Entities have the option of submitting, but none are required to submit, Incremental Heat Rate (IHR) curves, with the exception of RMR Resources which are required to submit IHR curves, the incremental Operations & Maintenance (O&M) costs of generating power at greater than LSL output.
AFTER:  Submission of this information is also optional for QSEs that have received RUC commitments. (h) ERCOT will not separately approve Verifiable Startup Costs and Verifiable Minimum Energy Costs. Both must be submitted and approved together. (i) If fuel consumption rates vary by season, Filing Entitie…

### e25 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), 2.1 Generally Applicable Rules, (r) · text copy line 385 · heading above: 2.1 Generally Applicable Rules

BEFORE: …OT may share Resource-specific Heat Rate and O&M data with its Planning group for the purpose of performing economic planning studies. ERCOT will share this information on a "need to know" basis and will continue to treat the information as Protected Information pursuant to the ERCOT Protocols. (r) 
QUOTE: Although ERCOT requires the submission of parameters (i.e. heat rates, fuel, emission and O&M rates, etc.) on a seasonal basis, if they change by season, ERCOT will utilize summer parameters for all seasons.
AFTER:  2.2 [RESERVED] 2.3 Additional Rules for Combined Cycle Plants (1) In addition, the following apply specifically to combined cycle units: (a) Verifiable Costs will only be verified for CCP configurations that are registered with ERCOT. If a Filing Entity wishes to submit Verifiable Cost data for a C…

### e26 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual (version effective December 1, 2026), Section 3 fuel adder, paragraph (1) · text copy line 700 · heading above: 3.4 Additional Rules for Submitting Fuel Costs

BEFORE: … rates if ERCOT determines that they do not represent a Resource's true startup fuel consumption or that they have not been proven in sufficient detail. (f) Historical fuel consumption rates must be based on documented metered reads when available. 3.4 Additional Rules for Submitting Fuel Costs (1) 
QUOTE: All Resources that have been approved for Verifiable Costs will receive a default fuel adder of $0.50/MMBtu, unless the Filing Entity elects to submit an actual fuel adder ($/MMBtu) for each Resource for verification and approval by ERCOT.
AFTER:  An actual fuel adder can be an "Actual Natural Gas Fuel Adder" (ANGFA) for natural gas Resources, or an "Actual Coal Fuel Adder" (ACFA) for coal-fired or lignite-fired Resources. For coal-fired or lignite-fired Resources with ACFAs ($/MMBtu), the applicable methodology to calculate the ACFA is desc…

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

### e31 · `eia-faq-heat-rate` · tier 2 · EIA FAQ: What is the efficiency of different types of power plants?
locator: FAQ: What is the efficiency of different types of power plants?, second and third paragraphs · text copy line 32

BEFORE: …tric generators and power plants that convert fuel into heat and then into electricity. The heat rate is the amount of energy used by an electrical generator or power plant to generate one kilowatthour (kWh) of electricity. We express heat rates in British thermal units (Btu) per net kWh generated. 
QUOTE: Net generation is the amount of electricity a power plant supplies to the power transmission line connected to the power plant. Net generation accounts for all the electricity the power plant consumes to operate the plant's equipment and generators, such as fuel feeding systems, boiler water pumps, cooling equipment, and pollution control devices. To express the efficiency of a generator or power plant as a percentage, divide the equivalent Btu content of a kWh of electricity (3,412 Btu) by the heat rate. For example, if the heat rate is 10,500 Btu, the efficiency is 33%. If the heat rate is 7,500 Btu, the efficiency is 45%.
AFTER:  In 2023, we changed our methodology for estimating energy consumption for generating electricity with renewable energy sources (geothermal, hydro, solar, and wind energy). You can read more about the change in the Monthly Energy Review (MER): Changes to the MER and Appendix E: Alternative Measures …

### e32 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table (FA) · text copy line 1552 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | FA _(q, r) | $/MMBtu | 
QUOTE: Fuel Adder-The fuel adder is the average cost above the index price Resource r has paid to obtain fuel.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information. | +------------------+-----------+------------------------------------------------------------------------------------…

### e33 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable table (OM) · text copy line 1554 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | OM _(q, r) | $/MWh | 
QUOTE: Variable Operations and Maintenance Cost above LSL-The O&M cost for Resource r to operate above LSL, including an adjustment for emissions costs, as approved in the verifiable cost process.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information. | +------------------+-----------+------------------------------------------------------------------------------------…

### e34 · `ref-eia-spark-spread-2013` · tier 2 · An introduction to spark spreads (Today in Energy) (2013)
locator: EIA Today in Energy, An introduction to spark spreads (February 8, 2013) · text copy line 75

BEFORE: …rk spread reflects low average power prices (because of an abundance of low-cost hydropower, particularly in the late spring and early summer). Note that spark spreads are not reported if they have negative values. Spark spread calculation. Spark spreads are calculated using the following equation: 
QUOTE: Spark spread ($/MWh) = power price ($/MWh) - [natural gas price ($/mmBtu) * heat rate (mmBtu/MWh)] A key component of the spark spread equation is the heat rate, or measure of efficiency, of a generating unit. Those marketing the output of a unit will use the unit's tested heat rate to assess its profitability. Market participants and observers rely on a generic benchmark to assess overall market conditions. EIA's new daily price table shows the spark spread using a benchmark heat rate of 7,000 Btu/kilowatthour (kWh), which represents a fairly new and efficient natural gas combined-cycle generator.
AFTER:  One kWh has a heat content of 3,412 Btu. A generator that uses 7,000 Btu to produce one kWh has a conversion efficiency slightly below 50% (see chart below). Less efficient units have higher heat rates, and therefore require more natural gas to produce a kWh of electricity. A combined-cycle unit, w…

### e35 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: 2023 State of the Market Report, Resource Adequacy, net revenue assumptions footnote · text copy line 4645

BEFORE: …plementation. Absent these effects, their net revenues would have been very close to their respective CONE values, with net revenues decreasing approximately 30% from 2022 levels. This is not surprising because 2022 exhibited much higher true shortage pricing derived from the ORDC than did 2023. 83 
QUOTE: For purposes of this analysis, we used the following assumptions: heat rates of 7 MMBtu per MWh for a combined-cycle unit, 10.5 MMBtu per MWh for a gas turbine, and $4 per MWh in variable operating and maintenance costs. A total outage rate (planned and forced) of 10% was assumed for each technology.
AFTER:  It does not include: 1) start-up and minimum energy costs; or 2) ramping restrictions that can prevent generators from profiting during brief price spikes. 76 | 2023 State of the Market Report / Resource Adequacy $700 $600 ECRS Effects Energy Reserves $500 $400 $300 $200 Estimated Cost of New Entry…

### e36 · `imm-som-2020` · tier 2 · 2020 State of the Market Report for the ERCOT Electricity Markets (published 2021)
locator: 2020 State of the Market Report, Resource Adequacy, footnote 43 (p. 81) · text copy line 4091

BEFORE: …the system-wide offer cap. However, as of the end of 2020, PNM had not approached levels that would dictate a reduction in the system wide offer cap, even after 2019, when it reached the highest level to date. The PNM outcomes in 2020, significantly lower than 2019, only reinforce that position. 43 
QUOTE: The proxy combustion turbine in the Peaker Net Margin calculation assumes a heat rate of 10 MMBtu per MWh and includes no other variable operating costs or startup costs.
AFTER:  2020 State of the Market Report | 81 / / Resource Adequacy Figure 47: Peaker Net Margin 3. Changes to the ORDC The Commission directed a significant change to the ORDC in 2019. The Commission considered proposals modifying various defining aspects of the ORDC, including shifting the LOLP portion of…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e30, e12, e2, e1): A heat rate turns a fuel price into a marginal cost. In the Mitigated Offer Cap formula, ERCOT multiplies a generic incremental heat rate (GIHR) by the higher of the Fuel Index Price or a weighted average fuel price, or uses the resource's verifiable incremental heat rate (IHR) times a fuel price plus O&M, whichever is greater. [e3] The MOC is what ERCOT uses when it mitigates energy offer curves in real-time SCED. [e30] The FIP is a daily Katy Hub natural gas price in $/MMBtu. [e12] The verifiable IHR is a curve for each resource approved through the verifiable cost process, while the GIHR is set at 10.5 for resources in commercial operation on or before January 1, 2004 and 14.5 for later ones. [e2][e1]
- **How it works #2** (cites e19, e18): ERCOT distinguishes two heat rates, both derived from a unit's input-output (I/O) curve. The incremental heat rate is the fuel needed for one more unit of output (the first derivative of the I/O curve). The average heat rate is total fuel input divided by output at a given level. [e19] Heat rate data are used in the verifiable cost process because, combined with the market price of fuel, they give a proxy for a resource's actual fuel cost; ERCOT will not approve heat rate data without a resource-specific I/O curve. [e18]
- **How it works #3** (cites e31, e16, e23): Heat rates are measured on net output. EIA defines net generation as what the plant supplies to the transmission line after its own use for fuel handling, pumps, cooling and pollution control, and notes that heat rates are typically expressed as net. [e31][e16] The Verifiable Cost Manual likewise requires all heat rate data in terms of net output, from actual unit tests or manufacturer values. [e23]
- **Formula #1** (cites e31) FLAG number-not-in-quote: 1,000, 10.5: Efficiency (EIA): efficiency (%) = 3,412 Btu per kWh divided by the heat rate in Btu/kWh. A 10,500 Btu/kWh heat rate is 33% efficient and a 7,500 Btu/kWh heat rate is 45%. [e31] (Knowledge base's own unit conversion, not from the source: 1 MMBtu/MWh equals 1,000 Btu/kWh, so 10.5 MMBtu/MWh is the same as 10,500 Btu/kWh.)
- **Formula #2** (cites e20, e21, e22) FLAG number-not-in-quote: 2026, 10 MW: I/O curve (Verifiable Cost Manual, version effective December 1, 2026): fuel input y (MMBtu/hr) = A + Bx + Cx² + Dx³, where x is output in MW and A-D are fitted coefficients. [e20] The incremental heat rate is IHR = dy/dx = B + 2Cx + 3Dx²; it must be non-decreasing, in MMBtu/MWh, with 2 to 10 MW/IHR points. [e21] The average heat rate is AHR = y/x = (A + Bx + Cx² + Dx³)/x. [e22]
- **Formula #3** (cites e3, e29, e32, e26, e33) FLAG number-not-in-quote: 4.4, 9.4, 2026: Mitigated Offer Cap (Protocols 4.4.9.4.1): MOC = the greater of GIHR × max(FIP, WAFP) and IHR × FPRC + OM. [e3] For a resource with verifiable costs that has submitted an energy offer curve, the fuel price FPRC = max(WAFP, FIP + fuel adder) × gas share + fuel oil price × oil share. [e29] The fuel adder is the average cost above the index the resource has paid for fuel, with a default of $0.50/MMBtu unless the filing entity submits an actual fuel adder for ERCOT verification and approval (Verifiable Cost Manual, version effective December 1, 2026); OM is the verifiable variable O&M above LSL, including an emissions adjustment. [e32][e26][e33]
- **Formula #4** (cites e11): FFSS cap: the IMM says the $12,240 per MW offer cap for the 2024-2025 contract period was based on a $17 per MMBtu Fuel Oil Index price, a 15 MMBtu per MWh heat rate and a 48-hour obligation period. [e11] (Knowledge base's own arithmetic, not stated by the source: $17 × 15 × 48 = $12,240.)
- **Formula #5** (cites e34): Spark spread (EIA): power price minus gas price times heat rate. [e34]
- **Formula #6** (cites e27, e28): Proxy heat rate (Verifiable Cost Manual Appendix 6): the monthly value PHRM (MMBtu/MWh) is the average ERCOT Day-Ahead hub price (DASPP at ERCOT345BUS, averaged "based on values for one standard deviation from the Arithmetic Mean") divided by the Average Fuel Price Index (AVGFIP, $/MMBtu) for the same period, and the PHR is the 12-month rolling average of the PHRM values. [e27] It is used to estimate real-time payments to resources ramping from breaker close to LSL; those payments are removed from the RUC guarantee indirectly, by subtracting the PHR times average generation (breaker close to LSL) from the resource's approved fuel rate. [e28]
- **ERCOT context #2** (cites e4, e5, e36) FLAG number-not-in-quote: 25.509, 2020: - PUCT rule 25.509 sets the daily peaking operating cost at 10 times the natural gas price index, and the IMM says ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate, excluding variable O&M and outage rates. [e4][e5] The IMM's 2020 report adds that the PNM proxy CT includes no startup costs either. [e36]
- **ERCOT context #3** (cites e6, e35) FLAG number-not-in-quote: 2023, 2024: - The IMM's own net revenue analysis (2023 and 2024 reports) assumes 7 MMBtu per MWh for a combined-cycle unit and 10.5 MMBtu per MWh for a gas turbine, $4 per MWh variable O&M, and (2023 report) a 10% total outage rate. [e6][e35]
- **ERCOT context #6** (cites e34) FLAG number-not-in-quote: 2013: - In a 2013 article, EIA's daily price table used a benchmark heat rate of 7,000 Btu/kWh for the spark spread, which it described as a fairly new, efficient combined cycle; it notes that those marketing a unit's output use its tested heat rate instead. [e34]
- **ERCOT context #7** (cites e24, e25, e23): Some practical details of ERCOT's verifiable cost process: submitting IHR curves for real-time mitigation is optional except for RMR resources [e24]; parameters are submitted by season, but if they vary ERCOT uses the summer values for all seasons [e25]; and a resource whose heat rate curves come to overstate fuel use must notify ERCOT and resubmit. [e23]
- **Key facts #3** (cites e6, e35) FLAG number-not-in-quote: 2023, 2024: - IMM net revenue assumptions (2023 and 2024 reports): 7 MMBtu/MWh combined cycle, 10.5 MMBtu/MWh gas turbine, $4/MWh variable O&M. [e6][e35]
- **Key facts #6** (cites e26): - Default fuel adder for resources with verifiable costs: $0.50/MMBtu. [e26]
- **Key facts #7** (cites e31): - EIA conversion: 3,412 Btu per kWh; 10,500 Btu/kWh = 33% efficient. [e31]
- **Common confusion #2** (cites e19, e22, e18): (Guidance) Average and incremental heat rates are not interchangeable. The incremental rate is the slope of the I/O curve; the average rate also spreads the I/O curve's fixed term over output, and ERCOT requires average heat rate data with minimum energy cost filings. [e19][e22][e18]
- **Questions #6** (cites e6, e35) FLAG number-not-in-quote: 2023, 2024: 7 MMBtu/MWh for a combined cycle and 10.5 MMBtu/MWh for a gas turbine, plus $4/MWh variable O&M, in its 2023 and 2024 net revenue analyses. [e6][e35]
- **Questions #10** (cites e18, e21, e22): Because it uses the I/O curve to verify both the incremental and average heat rate curves; the IHR must be its first derivative and the AHR the curve divided by output. [e18][e21][e22]
- **Questions #12** (cites e3, e29): The MOC uses the higher of the FIP and the unit's weighted average fuel price (WAFP) submitted for that hour, and for verifiable-cost units the higher of WAFP and FIP plus the fuel adder, so its cap can rise with its actual fuel cost. [e3][e29]
- **Questions #14** (cites e34) FLAG number-not-in-quote: 2013: EIA's 2013 introduction to spark spreads used a 7,000 Btu/kWh benchmark to represent a fairly new, efficient combined cycle; it is a market-wide indicator, while a unit's owner uses its tested heat rate. [e34]
- **Scenarios #5** (cites e23): - The saved rule requires the filing entity to notify ERCOT and submit updated heat rate data when the generator's physical characteristics have changed so that previously submitted curves overstate fuel consumption or understate efficiency. [e23] A degraded unit is the reverse case (curves that now understate fuel use), which the saved text does not spell out, so check with ERCOT.
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

