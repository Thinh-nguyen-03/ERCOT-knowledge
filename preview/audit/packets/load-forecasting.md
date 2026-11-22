# Audit packet: Load Forecasting (load-forecasting)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, Seven-Day Load Forecast, paragraph (1) · text copy line 6310 · heading above: 3.12.1 Seven-Day Load Forecast

BEFORE: …----------------------------------------------------------------------------------------------------+ (2) ERCOT shall produce and post to the ERCOT website an Intra-Hour Load Forecast (IHLF) that provides a rolling two hour five minute forecast of ERCOT-wide Load. 3.12.1 Seven-Day Load Forecast (1) 
QUOTE: ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone. Preparation for Day-Ahead Operations requires an accurate forecast of the Loads for which generation capacity must be secured.
AFTER:  The Seven-Day Load Forecast must have a "self-training" mode that allows ERCOT to review historic Load data and provide the ability to retrain the Seven-Day Load Forecast algorithm. +--------------------------------------------------------------------------------------------------------------------…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, paragraph (3) · text copy line 6327 · heading above: 3.12.1 Seven-Day Load Forecast

BEFORE: …------------+ (2) The inputs for the Seven-Day Load Forecast are as follows: (a) Hourly forecasted weather parameters for the weather stations within the Weather Zones, which are updated at least once per hour; and (b) Training information based on historic hourly integrated Weather Zone Loads. (3) 
QUOTE: ERCOT shall review the forecast suggested by Seven-Day Load Forecast and shall use its judgment, if necessary, to modify the result prior to implementation in the Ancillary Service Capacity Monitor, Day-Ahead Reliability Unit Commitment (DRUC), Hour-Ahead Reliability Unit Commitment (HRUC), and Resource adequacy reporting.
AFTER:  3.12.2 Study Areas (1) ERCOT shall develop and use Study Areas for Load forecasting and study purposes, and will provide the Load forecast data to the market. A list of Study Areas shall be available on the ERCOT website. 3.12.3 Seven-Day Study Area Load Forecast (1) ERCOT shall develop and post ho…

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 discussion · text copy line 6614

BEFORE: …25 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain. 
QUOTE: By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load.
AFTER:  IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar. Despite this growth in solar resources, wind generation continues to dominat…

### e8 · `ercot-ltlf-2025` · tier 2 · 2025 ERCOT Long-Term Load Forecast Report (April 2025)
locator: Base Economic Load Forecast, introduction · text copy line 15

BEFORE: …Forecast (LFL), Large Load Contracts, and Large Load Officer Letters. The LTDEF uses the waterfall method to combine each forecast to create the ERCOT Net Forecast. This document will break down how each forecast is derived and the impact to the system outlook and peaks. Base Economic Load Forecast 
QUOTE: This forecast is based on a set of econometric models describing the hourly load in the region as a function of the number of premises in various customer classes (e.g., residential, business, and industrial), weather variables (e.g., various temperature values), and calendar variables (e.g., day of week and holidays) to create the base load forecast.
AFTER:  The premise forecasts that drive growth in the base forecast are created using a set of econometric autoregressive models (AR1) and are based on certain economic (e.g., non-farm payroll employment, housing stock, and population) data. A county-level forecast of economic and demographic data was obt…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy, 4. Long-Term Load Forecast · text copy line 8047

BEFORE: …oad and generation growth. These scenarios include a base case in Scenario 1, a higher reserve margin case in Scenario 2 with lower load growth and higher generation growth, and a lower reserve margin case in Scenario 3 with higher load growth and lower generation growth. 4. Long-Term Load Forecast 
QUOTE: ERCOT publishes the LTLF annually as its primary tool to project system load growth over a ten-year horizon.
AFTER:  The LTLF provides detailed forecasts of future peak demand and energy consumption using econometric models informed by economic and demographic trends, weather data, and other variables. The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy, 4. Long-Term Load Forecast · text copy line 8050

BEFORE: …ast ERCOT publishes the LTLF annually as its primary tool to project system load growth over a ten-year horizon. The LTLF provides detailed forecasts of future peak demand and energy consumption using econometric models informed by economic and demographic trends, weather data, and other variables. 
QUOTE: The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, and large loads.
AFTER:  ERCOT forecasts base load using traditional economic indicators such as population growth, housing stock, and employment data. It models other categories, including EVs and rooftop PV, based on adoption trends and historical patterns.70 Since the adoption of 16 TAC §25.370, large loads are now incl…

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 introduction · text copy line 6600

BEFORE: …), is a major determinant of thermal resource commitment decisions. An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. 
QUOTE: Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time.
AFTER:  Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. Ho…

### e29 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(c), Criteria for inclusion in ERCOT load forecast (effective 3/1/2026) · text copy line 29

BEFORE: …quacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title (relating to Large Load Interconnection Standards) and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title. 
QUOTE: ERCOT must not include a large load customer's forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title.
AFTER:  (d) Submission of forecasted load data to ERCOT. A DSP may submit load data to ERCOT only for a large load customer that is located or seeks interconnection at a location that is in the DSP's certificated service area. At the time that a DSP submits its load data to ERCOT through a mechanism design…

### e38 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 131 (OCR), H. Load Forecast, chronology · text copy line 8344 · heading above: 1.2 GW of Controllable Load Resources (CLRs). Combined, these resources total 11.7 GW of

BEFORE: …erm transmission planning and resource adequacy forecasts. December 2023. ERCOT published its December 2023 CDR. This report does not include officer letter loads as the RFI process was not yet complete. May 2024. ERCOT published its May 2024 CDR, which also does not include officer letter loads.67 
QUOTE: July 2024. ERCOT published its revised 2024 LTLF report, whose forecast includes officer letter loads. It projects a peak demand of 148 GW in 2030, up from 86.5 GW and 82.8 GW projected by the December 2023 CDR and May 2024 CDR reports, respectively.
AFTER:  November 2024. ERCOT issued its annual RFI to TSPs. January 2025. NPRR 1180 and PGRR 107 are approved by the PUCT. The most significant distinction between the originally introduced version and the approved version is the clarification made by HB 5066, discussed earlier. February 2025. ERCOT publis…

### e43 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin methodology, probabilistic risk accounting (effective 2026-01-01) · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years.
AFTER:  ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation…

### e46 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 78 (OCR), ECRS requirements · text copy line 3519

BEFORE: …-spinning reserves greater than or equal to the largest online generation unit 2023 State of the Market Report | 45 / / Day-Ahead Market Performance during on-peak hours. The decrease in requirements that occurred when ECRS was implemented was much smaller than the ECRS quantities procured. • ECRS. 
QUOTE: ERCOT initially computed minimum requirements for ECRS as the sum of the capacity needed to recover frequency following a large unit trip and the 85th to 95th percentile of 30-minute ahead intra-hour net load forecast error.
AFTER:  60 This produced requirements that averaged 1,930 MW in all hours and 2,400 MW in peak hours. • Total Requirements. The changes described above caused the total ancillary services to rise by 8.9% on average from 2022 to 2023, and 14.9% in peak hours. The increase was even sharper for total 10-minut…

### e47 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 96 (OCR), RENA evaluation · text copy line 6251

BEFORE: …nue-neutral, which means payments equal charges. In general, RENA uplift occurs when there are differences in power flow modeling between the day-ahead and real-time markets, including:  Transmission network modeling inconsistencies between the day-ahead and real-time market (model differences);  
QUOTE: Differences between the load distribution factor (LDF) used in the DAM and the actual real-time load distribution (LDF contribution);
AFTER:   Day-ahead PTP obligations linked to options36 settlements (CRR uplift);  Extra congestion rent that accrued when real-time transmission constraints were violated (overflow credit); and  Other factors, including the price floor in the real-time market at -$251 per MWh (Other). Figure 46 provides…

### e48 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 96 (OCR), RENA evaluation · text copy line 6276

BEFORE: …, accounting for $55 million in RENA uplift. It is a non-trivial task to maintain accurate and consistent LDFs across all markets, particularly in areas with large amounts of localized load growth. To the extent ERCOT is unable to predict accurate LDFs across all markets, RENA impacts will persist. 
QUOTE: NPRR 1004, Load Distribution Factor Process Update, approved on August 11, 2020, is still pending implementation, but should reduce this uplift.
AFTER: 37 This change will introduce load forecast models to calculate daily LDF rather than the current seasonal LDF based on historical patterns. 36 A PTP obligation linked to an option (PTPLO) is a type of CRR that entitles a NOIE's PTP Obligation in the day-ahead market to reflect the NOIE's PTP Option…

## Statements to check (new or changed since the last audit)

- **Link to weather-load** (cites e4): related Weather-Driven Load (CDD / HDD): Weather parameters are the main input to the Seven-Day Load Forecast. [e4]
- **Link to long-term-load-forecast** (cites e8, e9): related ERCOT Long-Term Load Forecast: The long-term forecast is ERCOT's annual ten-year forecast built with econometric models. [e8][e9]
- **Link to wind-solar-forecasts** (cites e6): related Wind & Solar Forecasts (STWPF, STPPF): The IMM discusses net load forecast error alongside under-forecast IRR generation and over-forecast load. [e6]
- **Link to net-load** (cites e6, e17): related Net Load: The IMM reports that the average net load forecast error, measured eight hours ahead of real-time, fell to about 452 MW in 2025. [e6][e17]
- **Link to ruc** (cites e5): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): The load forecast is used in DRUC and HRUC after ERCOT's review. [e5]
- **Link to large-load-growth** (cites e14): related Large Load Growth (Data Centers, Crypto, Industrial): Large loads are one of five components of the long-term forecast. [e14]
- **Link to sc-load-forecast-miss** (cites e6) FLAG number-not-in-quote: 3 GW: related Scenario: Your Load Forecast Missed by 3 GW: A forecast-miss scenario exercises the over-forecast bias the IMM reports. [e6]
- **Link to uplift** (cites e47, e48): related Uplift: The IMM ties RENA uplift to differences between the Load distribution factors used in the DAM and actual real-time load distribution, and says NPRR 1004 (daily LDF from load forecast models) should reduce it. [e47][e48]
- **Link to non-spin** (cites e43) FLAG number-not-in-quote: 2026: used-in Non-Spinning Reserve: ERCOT's 2026 AS methodology builds ECRS and Non-Spin requirements from historic 30-minute-ahead and 6-hour-ahead net load forecast errors. [e43]
- **Link to ecrs** (cites e46): used-in ECRS (ERCOT Contingency Reserve Service): The IMM reports that ECRS minimums were initially computed as the sum of the capacity needed to recover frequency after a large unit trip and the 85th to 95th percentile of 30-minute-ahead intra-hour net load forecast error. [e46]
- **Link to cdr-report** (cites e38): related CDR Report: The IMM compares load forecasts published in the CDR and the LTLF in its chronology of forecast changes since December 2023. [e38]
- **Link to sb6** (cites e29) FLAG number-not-in-quote: 2025, 25.370: related SB 6 (2025) Large Load Legislation: PUCT rule 16 TAC §25.370 governs when large loads may be included in ERCOT load forecasts for transmission planning and resource adequacy. [e29]

