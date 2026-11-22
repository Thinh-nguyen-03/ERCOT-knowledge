# Audit packet: Load Forecasting (load-forecasting)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12, paragraph (1)(a) · text copy line 6288 · heading above: 3.12 Load Forecasting

BEFORE: …ed in Section 3.11.4, Regional Planning Group Project Review Process, at the appropriate time, subject to the confidentiality provisions of the generation interconnection procedure. 3.12 Load Forecasting (1) ERCOT shall produce and use Load forecasts to serve operations and planning objectives. (a) 
QUOTE: ERCOT shall update and post hourly on the ERCOT website, a "Seven-Day Load Forecast" as described in Section 3.12.1, Seven-Day Load Forecast, that provides forecasted hourly Load over the next 168 hours for each of the Weather Zones and for each of the Forecast Zones.
AFTER:  (b) ERCOT shall develop and post monthly on the Market Information System (MIS) Secure Area a "36-Month Load Forecast" that provides a daily minimum and maximum Load forecast for the next 36 months for the ERCOT Region, for each of the Weather Zones, and for each of the Forecast Zones. The 36-Month…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12, paragraph (1)(b) · text copy line 6290 · heading above: 3.12 Load Forecasting

BEFORE: …d planning objectives. (a) ERCOT shall update and post hourly on the ERCOT website, a "Seven-Day Load Forecast" as described in Section 3.12.1, Seven-Day Load Forecast, that provides forecasted hourly Load over the next 168 hours for each of the Weather Zones and for each of the Forecast Zones. (b) 
QUOTE: ERCOT shall develop and post monthly on the Market Information System (MIS) Secure Area a "36-Month Load Forecast" that provides a daily minimum and maximum Load forecast for the next 36 months for the ERCOT Region, for each of the Weather Zones, and for each of the Forecast Zones. The 36-Month Load Forecast is used in the Outage coordination process and for Resource adequacy reporting.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

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

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error · text copy line 6598

BEFORE: …e shortage pricing. C. Forecast Error Effective market operations must account for forecast error in demand and supply. The net demand forecast, defined as demand minus expected generation from intermittent renewable resources (IRRs), is a major determinant of thermal resource commitment decisions. 
QUOTE: An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC.
AFTER:  Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time. Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has im…

### e11 · `ercot-ltlf-2025` · tier 2 · 2025 ERCOT Long-Term Load Forecast Report (April 2025)
locator: Weather Zone Normal Weather Summer Peak Demand Forecast · text copy line 249

BEFORE: …e seventeen hourly weather load forecast scenarios were separated into individual calendar year forecasts (covering calendar years 2024-2033). The maximum forecasted hourly value occurring during the summer season (defined as June through September) was determined for each individual calendar year. 
QUOTE: The summer peak demand values from the seventeen weather scenarios for a particular calendar year are averaged to determine the normal weather forecasted summer peak value.
AFTER:  For example, to determine the normal weather forecasted summer peak value for calendar year 2025, take the highest forecasted value in months June through September from each of the seventeen weather load forecast scenarios for calendar year 2025 and average them. The forecasted summer peak demand …

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.2.6.3, Firm Peak Load and Firm Peak Net Load Estimates, paragraph (1) · text copy line 1990 · heading above: 3.2.6.3 Firm Peak Load and Firm Peak Net Load Estimates

BEFORE: …PVGRs, ESRs and Load forecasts for the next five future years. Each CDR will include the ELCCs associated with the resource mix and load forecast for the given forecast year, season, and CDR resource region (in the case of WGRs and PVGRs). 3.2.6.3 Firm Peak Load and Firm Peak Net Load Estimates (1) 
QUOTE: ERCOT shall prepare, at least annually, a forecast of total hourly Loads for a minimum of ten future years using an econometric forecast, taking into account econometric inputs, weather conditions, demographic data and other variables as deemed appropriate by ERCOT.
AFTER:  For the CDR, firm peak Load and firm peak Net Load estimates shall be determined by the following equation: FIRMPKLD _(h,) _(s, i) = TOTPKLD _(h,) _(s, i) - LRRRS _(h,) _(s, i) - LRECRS _(h, s, i) - LRNSRS _(h,) _(s, i) - ERS _(h,) _(s, i) - DVR _(s, i) - CLR _(h,) _(s, i) The above variables are d…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, Seven-Day Load Forecast, paragraph (1) · text copy line 6310 · heading above: 3.12.1 Seven-Day Load Forecast

BEFORE: …recast (1) ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone. Preparation for Day-Ahead Operations requires an accurate forecast of the Loads for which generation capacity must be secured. 
QUOTE: The Seven-Day Load Forecast must have a "self-training" mode that allows ERCOT to review historic Load data and provide the ability to retrain the Seven-Day Load Forecast algorithm.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy, 4. Long-Term Load Forecast · text copy line 8050

BEFORE: …ast ERCOT publishes the LTLF annually as its primary tool to project system load growth over a ten-year horizon. The LTLF provides detailed forecasts of future peak demand and energy consumption using econometric models informed by economic and demographic trends, weather data, and other variables. 
QUOTE: The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, and large loads.
AFTER:  ERCOT forecasts base load using traditional economic indicators such as population growth, housing stock, and employment data. It models other categories, including EVs and rooftop PV, based on adoption trends and historical patterns.70 Since the adoption of 16 TAC §25.370, large loads are now incl…

### e15 · `ercot-ltlf-2025` · tier 2 · 2025 ERCOT Long-Term Load Forecast Report (April 2025)
locator: 2025 LTLF Report, Weather Zone Normal Weather Hourly Forecast methodology · text copy line 231

BEFORE: …and 1/1/2034. Using 2008's weather as input into each weather zone's forecast model results in what is referred to as the 2008 weather load forecast scenario. The 2008 weather load forecast scenario is a forecast that assumes 2008's weather would occur for each forecasted calendar year (2025-2034). 
QUOTE: This process was completed for each of the historical weather years (2008-2024) individually and resulted in seventeen weather load forecast scenarios for each weather zone for each of the forecasted years (2025-2034).
AFTER:  It should be noted that the premise and economic forecasts are the same in each of these seventeen weather scenarios. Figure 7: ERCOT Weather Year Scenario Forecast [] Weather Zone Normal Weather Hourly Forecast The seventeen weather zone load forecast scenarios were used as the basis for creating …

### e16 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Net Load · text copy line 1792

BEFORE: …pability The maximum sustained capability of a Resource as demonstrated by performance testing. Net Generation Gross generation less station auxiliary Load or other internal unit power requirements metered at or adjusted to the POI with the ERCOT Transmission Grid at the common switchyard. Net Load 
QUOTE: The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period.
AFTER:  Network Operations Model A representation of the ERCOT System providing the complete physical network definition, characteristics, ratings, and operational limits of all elements of the ERCOT Transmission Grid and other information from Transmission Service Providers (TSPs), Resource Entities, and …

### e17 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 introduction · text copy line 6600

BEFORE: …), is a major determinant of thermal resource commitment decisions. An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. 
QUOTE: Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time.
AFTER:  Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. Ho…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, Seven-Day Load Forecast, paragraph (2) · text copy line 6321 · heading above: 3.12.1 Seven-Day Load Forecast

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: The inputs for the Seven-Day Load Forecast are as follows: (a) Hourly forecasted weather parameters for the weather stations within the Weather Zones, which are updated at least once per hour; and (b) Training information based on historic hourly integrated Weather Zone Loads.
AFTER:  (3) ERCOT shall review the forecast suggested by Seven-Day Load Forecast and shall use its judgment, if necessary, to modify the result prior to implementation in the Ancillary Service Capacity Monitor, Day-Ahead Reliability Unit Commitment (DRUC), Hour-Ahead Reliability Unit Commitment (HRUC), and…

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, pending NPRR975 insertion box, paragraph (a) · text copy line 6315 · heading above: 3.12.1 Seven-Day Load Forecast
FLAG pending-box: | [NPRR975: Insert paragraphs (a) and (b) below upon system implementation:] |
BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR975: Insert paragraphs (a) and (b) below upon system implementation:] | | | | 
QUOTE: (a) ERCOT will use a variety of Load forecast models and will select the Load forecast model that best fits the expected conditions for each hour of the next 168 hours as the Seven-Day Load Forecast for that hour and may update this selection as expected conditions change.
AFTER:  | | | | (b) If the selected forecast used at the time of the Day-Ahead Reliability Unit Commitment (DRUC) for the peak Demand hour of any of the next seven days is above or below the average of the forecast models for that hour by the greater of 2000 MW or 4% of the average of the forecast models f…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.1, pending NPRR975 insertion box, paragraph (b) · text copy line 6317 · heading above: 3.12.1 Seven-Day Load Forecast
FLAG pending-box: | [NPRR975: Insert paragraphs (a) and (b) below upon system implementation:] |
BEFORE: …ntation:] | | | | (a) ERCOT will use a variety of Load forecast models and will select the Load forecast model that best fits the expected conditions for each hour of the next 168 hours as the Seven-Day Load Forecast for that hour and may update this selection as expected conditions change. | | | | 
QUOTE: (b) If the selected forecast used at the time of the Day-Ahead Reliability Unit Commitment (DRUC) for the peak Demand hour of any of the next seven days is above or below the average of the forecast models for that hour by the greater of 2000 MW or 4% of the average of the forecast models for that hour, ERCOT shall produce and post to the ERCOT website an explanation of why the outlier Load forecast model was selected for that hour.
AFTER:  | +========================================================================================================================================================================================================================================================================================================…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12, pending NPRR1004 and NPRR1240 insertion box, paragraph (c) · text copy line 6302 · heading above: 3.12 Load Forecasting
FLAG pending-box: | [NPRR1004 and NPRR1240: Insert applicable portions of paragraph (c) below upon system implementation:] |
BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1004 and NPRR1240: Insert applicable portions of paragraph (c) below upon system implementation:] | | | | 
QUOTE: (c) ERCOT shall generate and post daily on the ERCOT website Load distribution factors that provide hourly distribution for non-Private Use Network Loads by means of the Mid-Term Load Forecast (MTLF).
AFTER:  Private Use Network Loads will be generated separately. If ERCOT decides, in its sole discretion, to change the Load distribution factors for reasons such as anticipated weather events or holidays, ERCOT shall select representative conditions as an input reasonably reflecting the anticipated Load i…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, DAM Clearing Process, paragraph (5) (current text) · text copy line 2596 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …more of one Ancillary Service in place of the quantity of a different service. (5) ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone. 
QUOTE: The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions.
AFTER:  The Private Use Network Load distribution factors are based on an estimated Load value considering historical net consumption at all Private Use Networks. If ERCOT decides, in its sole discretion, to change the Load distribution factors for reasons such as anticipated weather events or holidays, ER…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.2, Study Areas, paragraph (1) · text copy line 6331 · heading above: 3.12.2 Study Areas

BEFORE: …en-Day Load Forecast and shall use its judgment, if necessary, to modify the result prior to implementation in the Ancillary Service Capacity Monitor, Day-Ahead Reliability Unit Commitment (DRUC), Hour-Ahead Reliability Unit Commitment (HRUC), and Resource adequacy reporting. 3.12.2 Study Areas (1) 
QUOTE: ERCOT shall develop and use Study Areas for Load forecasting and study purposes, and will provide the Load forecast data to the market. A list of Study Areas shall be available on the ERCOT website.
AFTER:  3.12.3 Seven-Day Study Area Load Forecast (1) ERCOT shall develop and post hourly on the ERCOT website a "Seven-Day Study Area Load Forecast" to predict the hourly Loads for the next 168 hours based on current weather forecast parameters within each Study Area. (a) The forecast referenced in paragr…

### e24 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.12.3, Seven-Day Study Area Load Forecast, paragraph (1) · text copy line 6335 · heading above: 3.12.3 Seven-Day Study Area Load Forecast

BEFORE: …nd Resource adequacy reporting. 3.12.2 Study Areas (1) ERCOT shall develop and use Study Areas for Load forecasting and study purposes, and will provide the Load forecast data to the market. A list of Study Areas shall be available on the ERCOT website. 3.12.3 Seven-Day Study Area Load Forecast (1) 
QUOTE: ERCOT shall develop and post hourly on the ERCOT website a "Seven-Day Study Area Load Forecast" to predict the hourly Loads for the next 168 hours based on current weather forecast parameters within each Study Area.
AFTER:  (a) The forecast referenced in paragraph (1) above will not affect the values within the "Seven-Day Load Forecast" by Weather Zone and/or Forecast Zone. 3.13 Renewable Production Potential Forecasts (1) ERCOT shall produce forecasts of Renewable Production Potential (RPP) for Wind-powered Generatio…

### e25 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.1, Introduction, paragraph (5) · text copy line 103 · heading above: 5.1 Introduction

BEFORE: …um energy and Startup Costs, submitted before the DAM by Qualified Scheduling Entities (QSEs) that were considered in the DAM but not awarded in the DAM. A QSE may not submit a Three-Part Supply Offer to be considered in the DRUC unless the offer was also submitted for consideration in the DAM. (5) 
QUOTE: ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information.
AFTER:  (6) The RUC Study Period for DRUC is the next Operating Day. The RUC Study Period for HRUC is the balance of the current Operating Day plus the next Operating Day if the DRUC for the Operating Day has been solved. (7) HRUC may decommit Resources only to maintain the reliability of the ERCOT System.…

### e26 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (19)(a) · text copy line 382 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (19) Factors included in the RUC process are: (a) 
QUOTE: ERCOT System-wide hourly Load forecast allocated appropriately over Load buses;
AFTER:  (b) ERCOT's Ancillary Service Plans in the form of ASDCs; (c) Transmission constraints - Transfer limits on energy flows through the electricity network; (i) Thermal constraints - protect transmission facilities against thermal overload; (ii) Generic constraints - protect the transmission system ag…

### e27 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.1.3, Bus Load Forecast, paragraph (1) · text copy line 1385 · heading above: 6.5.7.1.3 Bus Load Forecast

BEFORE: …perations Model. 6.5.7.1.2 Network Topology Builder (1) The Network Topology Builder creates the Updated Network Model based on the observed topology of the ERCOT Transmission Grid. The Updated Network Model is then used as the basis for the State Estimator solution. 6.5.7.1.3 Bus Load Forecast (1) 
QUOTE: Once the Updated Network Model is created, the transmission Electrical Buses in the model will have a Bus Load Forecast applied. The forecasted Load must be denoted with a low State Estimator measurement confidence factor.
AFTER:  The State Estimator must use the forecasted Load coupled with the remaining telemetry of line flows and voltages to estimate the actual Load on each Electrical Bus. 6.5.7.1.4 State Estimator (1) The State Estimator must use the Bus Load Forecast and the remaining telemetry information of line flows…

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3.2, Activities for Real-Time Operations, paragraph (3)(b) · text copy line 651 · heading above: 6.3.2 Activities for Real-Time Operations

BEFORE: …changes, in the status of Transmission Facilities as recorded in the Outage Scheduler for the remaining hours of the current Operating Day and all hours of the next Operating Day; and (ii) Any conditions such as adverse weather conditions as determined from the ERCOT-designated weather service; (b) 
QUOTE: Updated system-wide Mid-Term Load Forecasts (MTLFs) for all forecast models available to ERCOT Operations, as well as an indicator for which forecast was in use by ERCOT at the time of publication;
AFTER:  (c) The quantities of RMR Services deployed by ERCOT for each previous hour of the current Operating Day; and (d) Total ERCOT System Demand, from Real-Time operations, integrated over each Settlement Interval. (4) No later than 0600, ERCOT shall post on the ERCOT website the actual system Load by W…

### e29 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(c), Criteria for inclusion in ERCOT load forecast (effective 3/1/2026) · text copy line 29

BEFORE: …quacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title (relating to Large Load Interconnection Standards) and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title. 
QUOTE: ERCOT must not include a large load customer's forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title.
AFTER:  (d) Submission of forecasted load data to ERCOT. A DSP may submit load data to ERCOT only for a large load customer that is located or seeks interconnection at a location that is in the DSP's certificated service area. At the time that a DSP submits its load data to ERCOT through a mechanism design…

### e30 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(e)(2)(B), Adjustments to load data · text copy line 100

BEFORE: …, ERCOT must request commission approval under subsection (e)(2)(B) of this section. (B) ERCOT, in consultation with commission staff, must request commission approval to adjust the load data provided by DSPs under this section for any adjustment not made under subsection (e)(2)(A) of this section. 
QUOTE: The commission may approve ERCOT's request to adjust the load data if the adjustment is supported by actual historical realization rates or other objective, credible, independent information.
AFTER:  ERCOT must file its request with the commission and publish market notice of the requested adjustment not less than 30 days before the commission's consideration at an open meeting. The commission may, at its discretion, consider the matter at an earlier open meeting. ERCOT's filed request must pro…

### e31 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(e)(4), Annual assessment · text copy line 113

BEFORE: …equest, unless the commission establishes a different deadline. Use of load forecasts. ERCOT may use different forecasts to accommodate differences in study scope, time horizon, scenarios, and modeling details in developing its transmission planning and resource adequacy reports. Annual assessment. 
QUOTE: ERCOT must file an annual assessment with the commission that: (A) compares past forecasts to actual outcomes; (B) identifies sources of error; and (C) provides recommendations for improvement in the forecasting process.
AFTER:  (f) Confidential information. Customer-specific or competitively sensitive information obtained under this section is confidential and not subject to disclosure under Chapter 552 of the Texas Government Code. (g) ERCOT compliance. ERCOT must develop the necessary protocols to ensure its transmissio…

### e32 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(e)(3), Use of load forecasts · text copy line 110

BEFORE: …he recommended adjustment to the load data, and the specific reasoning behind the requested adjustment. Public comment related to the requested adjustment must be filed not later than 14 days after ERCOT's filed request, unless the commission establishes a different deadline. Use of load forecasts. 
QUOTE: ERCOT may use different forecasts to accommodate differences in study scope, time horizon, scenarios, and modeling details in developing its transmission planning and resource adequacy reports.
AFTER:  Annual assessment. ERCOT must file an annual assessment with the commission that: (A) compares past forecasts to actual outcomes; (B) identifies sources of error; and (C) provides recommendations for improvement in the forecasting process. (f) Confidential information. Customer-specific or competit…

### e33 · `ercot-ltlf-2026-prelim` · tier 2 · Preliminary Long-Term Load Forecast for 2026-2032 (PUCT Project 58777 filing) (2026-04-15)
locator: Preliminary LTLF for 2026-2032, filing letter, paragraph 1 · text copy line 28

BEFORE: …ary Long-Term Load Forecast for Years 2026 - 2032 Dear Chairman and Commissioners: Electric Reliability Council of Texas, Inc. (ERCOT) files the preliminary Long-Term Load Forecast (LTLF) for years 2026 through 2032, with additional information provided in the presentation included as Attachment A. 
QUOTE: As shown in Table 1 below, the forecast projects approximately 278,003 megawatts (MW) of total demand in the ERCOT Region by 2029 and 367,790 MW by 2032. For comparison, the ERCOT Region's current all-time peak demand is 85,508 MW.
AFTER: 1 The vast majority of the load forecast for 2029 and 2032 is attributable to Large Loads that were identified in Transmission and/or Distribution Service Provider (TDSP) load submissions based on criteria established in the 2026 Regional Transmission Plan (R-TP) Compliance Plan required by 16 Texas…

### e34 · `ercot-ltlf-2026-prelim` · tier 2 · Preliminary Long-Term Load Forecast for 2026-2032 (PUCT Project 58777 filing) (2026-04-15)
locator: Preliminary LTLF filing letter, discussion of the 2026 peak · text copy line 150

BEFORE: … enacted 16 TAC § 25.370(e)(2)(B). That provision authorizes the Commission to approve an ERCOT-requested adjustment "if the adjustment is supported by actual historical realization rates or other objective, credible, independent information." Among other information that may warrant consideration, 
QUOTE: ERCOT currently projects that summer 2026 peak load will fall within a range of approximately 90,500 MW to 98,000 MW, compared with the preliminary LTLF's forecasted peak demand of approximately 112,000 MW for summer 2026
AFTER: , as noted in slide 7 of Attachment A. 2 See ERCOT's Final Recommendation of Modeling Assumptions and CONE Study for the 2026 Reliability Assessment at Attachment A pgs. 6-7 (Mar. 23,2026). 2 of 3 ERCOT appreciates the opportunity to provide this information for the Commission' s consideration and s…

### e35 · `ercot-ltlf-2026-adjust-proposal` · tier 2 · ERCOT Proposal to Adjust the Load Forecast (PUCT Project 59772) (May 2026)
locator: ERCOT proposal to adjust the 2026 LTLF, Section II · text copy line 119

BEFORE: …elihood of the realization timeline for the provided load forecast values, ERCOT requests that the process in 16 TAC § 25.370(e)(2)(B) be used to adjust the LTLF to a more realistic forecast. After consulting with Commission Staff and some Transmission and/or Distribution Service Providers (TDSPs), 
QUOTE: ERCOT proposes two options to adjust the LTLF: one adjustment option using a historical realization rate and the other option using the forecast developed in the Large Load Batch Zero process.
AFTER:  As described in greater detail below, ERCOT recommends that the Batch Zero load forecast option be used to adjust the LTLF, including for use as the load forecast input for the 2026 Triennial Reliability Assessment modeling. 2 of 9 A. Adjustment Option Using Historical Realization Rate One option t…

### e36 · `ercot-ltlf-2025` · tier 2 · 2025 ERCOT Long-Term Load Forecast Report (April 2025)
locator: ERCOT Normal Weather (50th percentile) Hourly Forecast · text copy line 275

BEFORE: …cial ERCOT coincident forecast, an analysis was performed on these seventeen different hourly coincident forecasts. The distribution of ERCOT summer peak demand was determined. Seeing that it is very difficult to determine how weather conditions will align or not at the time of ERCOT's summer peak, 
QUOTE: the forecast using historical factors from 2008 was deemed the ERCOT 50^(th) percentile forecast.
AFTER:  Using the 2008 historical factors resulted in the least amount of diversity between weather zone demand and ERCOT-wide demand at the time of ERCOT's summer peak. As shown in Figure 7: ERCOT summer coincident peak shifts from 5:00 PM to 10:00 PM starting in 2034. Load Forecast Scenarios (ERCOT syste…

### e37 · `ercot-ltlf-2025` · tier 2 · 2025 ERCOT Long-Term Load Forecast Report (April 2025)
locator: Appendix A, Peak Demand and Energy Forecast Summary (2025 LTLF, April 2025) · text copy line 344

BEFORE: … programs may do to influence demand when prices are high. Appendix A Peak Demand and Energy Forecast Summary ------------------------------------------------------------------------- Year Summer Peak Demand (MW) Energy (TWh) ----------------------- ------------------------- ----------------------- 
QUOTE: 2025 85,759 486 2026 94,650 558
AFTER:  2027 104,295 648 2028 121,543 795 2029 128,851 889 2030 138,944 984 2031 144,522 1,038 ------------------------------------------------------------------------- [1] See ERCOT Nodal Protocols, Section 2. [2] See ERCOT Nodal Protocols, Section 18.6.1. [3] https://www.ercot.com/files/docs/2022/10/13/2…

### e38 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 131 (OCR), H. Load Forecast, chronology · text copy line 8344 · heading above: 1.2 GW of Controllable Load Resources (CLRs). Combined, these resources total 11.7 GW of

BEFORE: …erm transmission planning and resource adequacy forecasts. December 2023. ERCOT published its December 2023 CDR. This report does not include officer letter loads as the RFI process was not yet complete. May 2024. ERCOT published its May 2024 CDR, which also does not include officer letter loads.67 
QUOTE: July 2024. ERCOT published its revised 2024 LTLF report, whose forecast includes officer letter loads. It projects a peak demand of 148 GW in 2030, up from 86.5 GW and 82.8 GW projected by the December 2023 CDR and May 2024 CDR reports, respectively.
AFTER:  November 2024. ERCOT issued its annual RFI to TSPs. January 2025. NPRR 1180 and PGRR 107 are approved by the PUCT. The most significant distinction between the originally introduced version and the approved version is the clarification made by HB 5066, discussed earlier. February 2025. ERCOT publis…

### e39 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 129 (OCR), H. Load Forecast · text copy line 8172 · heading above: 1.2 GW of Controllable Load Resources (CLRs). Combined, these resources total 11.7 GW of

BEFORE: …eflect uncertainty around the largest drivers of future demand will provide even more accurate and valuable projections. H. Load Forecast ERCOT's load forecasts have changed dramatically over the past two years, reflecting new policies, evolving methodologies, and a rapidly shifting load landscape. 
QUOTE: Historically, peak demand in ERCOT grew at a steady pace, increasing from 74.7 GW in 2019 to 85.6 GW in 2024, for an average annual growth rate of 2.76%.
AFTER: 61 However, recent forecasts have diverged sharply from this trend, with ERCOT projecting much higher levels of future demand. This section reviews the sequence of peak load forecasts ERCOT has published in the past two years, 60 https://www.ercot.com/files/docs/2024/01/18/2024_LTLF_Report.docx 61 h…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 105 (OCR), C. Forecast Error · text copy line 6617

BEFORE: … in average error. However, some structural biases and growing variability remain. By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load. 
QUOTE: IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar.
AFTER:  Despite this growth in solar resources, wind generation continues to dominate total IRR forecast error variance because of its higher volatility and lower predictability. D. QSE Operation Planning The Current Operating Plan (COP) is the mechanism QSEs use to communicate the expected status of their…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 105 (OCR), C. Forecast Error · text copy line 6612

BEFORE: …al commitments and real-time shortfalls that are often addressed through RUC. Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time. Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations 
QUOTE: Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error.
AFTER:  However, some structural biases and growing variability remain. By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load. IRR generation its…

### e42 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 34 (OCR), reliability and operating reserves discussion · text copy line 1741

BEFORE: …500 MW (or 7,500 MW) of dispatchable reserves in real-time. ERCOT previously targeted lower reserve levels in the range of 3,600-5,700 MW; • Issued RUC instructions earlier in the operating day, committing more longer-lead time resources as well as relying less on market participant response; and • 
QUOTE: Adjusted selection of forecast to more frequently rely on the highest load forecast and the lowest wind and solar forecasts.
AFTER:  The results of the changes, in combination with the 2022 ORDC adjustment,39 are that the pricing outcomes have grown disconnected from the actual operational conditions. This is discussed in more detail in the RUC section of this report. This is problematic because the 37 https://www.ercot.com/news…

### e43 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin methodology, probabilistic risk accounting (effective 2026-01-01) · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years.
AFTER:  ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation…

### e44 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin methodology, near-Real-Time procurement · text copy line 81

BEFORE: …rns; will cover 70% of historic system inertia conditions for each hour for the month and will include an adjustment to account for Regulation Up requirement in the hour. ERCOT will post the monthly amounts for ECRS and Non-Spin requirements for the upcoming year on the MIS. Following this posting, 
QUOTE: ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Operating Hours that are (a) identified as having an increased potential of high forecast variability,
AFTER:  (b) there is a risk that the actual net load during these Operating Hours could be higher than forecast (after making appropriate forecast model selection) and (c) the expected available capacity and expected reserves including the posted minimum Non-Spin requirements during these Operating Hours i…

### e45 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 83 (OCR), Ancillary Service Plan · text copy line 5234

BEFORE: …nual volume of AS procured has increased substantially over the last five years, though it decreased by approximately 2.3% from 2023 to 2024, mainly due to the following changes to the AS Methodology:  The floor on RRS volumes for peak hours was reduced from 2,800 MW in 2023 to 2,300 MW in 2024.  
QUOTE: For January through May of 2023, the NSRS methodology used the ten hour-ahead forecast error, but the six hour-ahead forecast error was used for the remainder of 2023 and all of 2024.
AFTER:  The month with the largest average volume in the AS Plan in 2024 was May, which is driven by volatility in the net load forecast. Figure 35: Average Ancillary Service Capacity by Month Ancillary Service Requirement (MW) 10,000 9,000 Responsive Non-Spin F J Reg-Up Reg-Down ECRS 8,000 7,000 6,000 5,0…

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

### e49 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 96 (OCR), RENA evaluation · text copy line 6277

BEFORE: …areas with large amounts of localized load growth. To the extent ERCOT is unable to predict accurate LDFs across all markets, RENA impacts will persist. NPRR 1004, Load Distribution Factor Process Update, approved on August 11, 2020, is still pending implementation, but should reduce this uplift.37 
QUOTE: This change will introduce load forecast models to calculate daily LDF rather than the current seasonal LDF based on historical patterns.
AFTER:  36 A PTP obligation linked to an option (PTPLO) is a type of CRR that entitles a NOIE's PTP Obligation in the day-ahead market to reflect the NOIE's PTP Option that it acquired in the CRR auction or allocation. Qualified PTPLOs are modeled as obligations but settled as if they were options. 37 NPRR…

### e50 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 130 (OCR), H. Load Forecast, chronology · text copy line 8299 · heading above: 1.2 GW of Controllable Load Resources (CLRs). Combined, these resources total 11.7 GW of

BEFORE: …-- -- -- -- -- 85.4 127.9 138.0 -- -- -- -- -- -- 128.3 138.4 -- -- 115.9 126.6 1. Load Forecast Chronology We begin by presenting a chronology that illustrates how ERCOT's forecasts have diverged over time as different data, methodological aspects, and observation have been incorporated over time. 
QUOTE: June 2021. The Texas Legislature passed SB 1281, which took effect in September 2021. SB 1281 introduced Section 37.056(c-1) of the Utilities Code, which required load forecasts to consider (1) historical load, (2) forecasted load, and (3) additional load seeking interconnection.
AFTER: 62 December 2022. The PUCT, who had organized the implementation of SB 1281 under Project 53403 earlier that year, implemented 16 TAC §25.101(b)(3)(A)(ii)(II) which requires that loads in the load forecast be substantiated by quantifiable evidence of projected load growth.63 In the order adopting th…

### e51 · `ercot-ltlf-2026-adjust-proposal` · tier 2 · ERCOT Proposal to Adjust the Load Forecast (PUCT Project 59772) (May 2026)
locator: ERCOT proposal to adjust the 2026 LTLF, Section II · text copy line 112

BEFORE: …a, methodology, and calculations used for the proposed adjustment and the specific reasoning for the request. Unless the Commission establishes a different deadline, public comment on ERCOT's request is due 14 days after ERCOT's filing. II. PROPOSED ADJUSTMENT TO PRELIMINARY LONG-TERM LOAD FORECAST 
QUOTE: Due to the unprecedented scale of the load included in the LTLF and known supply chain constraints extending through the medium term which bring into question the likelihood of the realization timeline for the provided load forecast values, ERCOT requests that the process in 16 TAC § 25.370(e)(2)(B) be used to adjust the LTLF to a more realistic forecast.
AFTER:  After consulting with Commission Staff and some Transmission and/or Distribution Service Providers (TDSPs), ERCOT proposes two options to adjust the LTLF: one adjustment option using a historical realization rate and the other option using the forecast developed in the Large Load Batch Zero process…

### e52 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin methodology, near-Real-Time procurement, conditions (b) and (c) · text copy line 81

BEFORE: … MIS. Following this posting, ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Operating Hours that are (a) identified as having an increased potential of high forecast variability, 
QUOTE: (b) there is a risk that the actual net load during these Operating Hours could be higher than forecast (after making appropriate forecast model selection) and (c) the expected available capacity and expected reserves including the posted minimum Non-Spin requirements during these Operating Hours is not sufficient to cover the projected net load forecast uncertainty risk.
AFTER:  The minimum amount of Non-Spin procured from SCED dispatchable Resources in any hour shall not be less than lower of ERCOT's Most Severe Single Contingency (MSSC) value and the Non-Spin requirement for that hour.…

### e53 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin methodology, probabilistic risk accounting, solar adjustment · text copy line 71

BEFORE: …n installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation of the total requirement of ECRS and NSRS. 
QUOTE: To address this ERCOT will include an adjustment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources.
AFTER:  Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes. The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of …

### e54 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370(e)(2)(A), Adjustments to load data · text copy line 90

BEFORE: … with this section and validate the accuracy of load data submitted by a DSP. If the accuracy of load data submitted by a DSP cannot be validated, ERCOT may exclude the data from the load forecast developed by ERCOT in accordance with subsection (e)(2) of this section. Adjustments to load data. (A) 
QUOTE: ERCOT may make adjustments to the load data provided by the DSP under this section to correct errors in load data or to account for the withdrawal or cancellation of a large load customer's request for interconnection if the DSP agrees with the adjustments.
AFTER:  Commission approval is not required for any mutually agreed adjustment to correct errors in load data or to account for the withdrawal or cancellation of a large load customer's request for interconnection. For any adjustment that a DSP does not agree to, ERCOT must request commission approval unde…

### e55 · `ercot-ltlf-2026-prelim` · tier 2 · Preliminary Long-Term Load Forecast for 2026-2032 (PUCT Project 58777 filing) (2026-04-15)
locator: Preliminary LTLF for 2026-2032, filing letter, paragraph 1 (footnote text) · text copy line 31

BEFORE: …information provided in the presentation included as Attachment A. As shown in Table 1 below, the forecast projects approximately 278,003 megawatts (MW) of total demand in the ERCOT Region by 2029 and 367,790 MW by 2032. For comparison, the ERCOT Region's current all-time peak demand is 85,508 MW.1 
QUOTE: The vast majority of the load forecast for 2029 and 2032 is attributable to Large Loads that were identified in Transmission and/or Distribution Service Provider (TDSP) load submissions
AFTER:  based on criteria established in the 2026 Regional Transmission Plan (R-TP) Compliance Plan required by 16 Texas Administrative Code (TAC) § 25.370(g). 1 This peak demand record occurred on August 10, 2023. Electric Reliability Council of Texas, Inc. Austin Taylor 8000 Metropolis Dr. Bldg. E, Suite…

### e56 · `puct-25-370` · tier 1 · PUCT Substantive Rule 16 TAC §25.370, ERCOT Large Load Forecasting Criteria
locator: 16 TAC §25.370, Effective date subsection (final page) · text copy line 197

BEFORE: … foreign commercial bank, with a credit rating of at least "A-" by Standard & Poor's or "A3" by Moody's Investor Service; or (C) corporate or parental guaranty, only if the corporation or parent has a credit rating equivalent of BBB-/Baa3 or higher from Standard & Poor's or Moody's. Effective date. 
QUOTE: ERCOT must use load data submitted for the 2026 RTP in its transmission planning studies or resource adequacy assessments, including Regional Planning Group project submissions until ERCOT constructs new planning cases with the load data submitted by DSPs using the criteria in subsection (c) of this section.
AFTER:  For all transmission planning studies and resource adequacy assessments that are conducted before the implementation of any protocols or compliance plan adopted under subsection (g) of this section, ERCOT must continue to use its load forecast practices in effect immediately prior to the effective …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e4, e18, e13, e5): Short-term operations. The Seven-Day Load Forecast predicts hourly Loads for the next 168 hours from current weather forecast parameters in each Weather Zone, because Day-Ahead operations require an accurate forecast of the Loads for which capacity must be secured. [e4] Its inputs are hourly forecasted weather parameters for the weather stations in the Weather Zones, updated at least once per hour, and training information from historic hourly integrated Weather Zone Loads. [e18] It must also have a self-training mode that lets ERCOT review historic Load data and retrain the algorithm. [e13] ERCOT reviews the result and may modify it with judgment before it is used in the Ancillary Service Capacity Monitor, DRUC, HRUC and resource adequacy reporting. [e5]
- **How it works #2** (cites e26, e25, e28, e27): Where it is used. The RUC process lists the ERCOT system-wide hourly Load forecast, allocated over Load buses, among its factors. [e26] ERCOT initiates HRUC at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and outage information. [e25] In Real-Time operations ERCOT posts updated system-wide Mid-Term Load Forecasts for all forecast models available to Operations, with an indicator of which forecast was in use. [e28] The State Estimator applies a Bus Load Forecast to the transmission buses, flagged with a low measurement confidence factor. [e27]
- **How it works #3** (cites e23, e24): Study Areas. ERCOT develops Study Areas for Load forecasting and study purposes and provides the data to the market. [e23] It also posts an hourly Seven-Day Study Area Load Forecast, based on weather parameters in each Study Area, which does not change the Weather Zone or Forecast Zone values. [e24]
- **How it works #4** (cites e3, e12, e8, e11, e15, e36): Longer term. The 36-Month Load Forecast gives daily minimum and maximum Load and is used in outage coordination and resource adequacy reporting. [e3] ERCOT prepares at least annually a forecast of hourly Loads for a minimum of ten years using an econometric forecast with weather conditions and demographic data. [e12] The 2025 forecast document describes econometric models of hourly load as a function of premises by customer class, weather variables and calendar variables, and a normal-weather summer peak formed by averaging the summer peaks from seventeen weather scenarios, which are built from actual weather for 2008 through 2024. [e8][e11][e15] That document designates the forecast using 2008 historical factors as the ERCOT 50th percentile forecast. [e36]
- **How it works #5** (cites e19, e20, e21, e22) FLAG number-not-in-quote: 3.12: Pending changes (not the rule in force; they appear as pending boxes in the Protocols). NPRR975 (np-03 3.12.1) would have ERCOT use a variety of Load forecast models and select, for each of the next 168 hours, the model that best fits expected conditions. [e19] The same box would require a posted explanation when the selected forecast used at DRUC for the peak Demand hour of any of the next seven days is above or below the average of the forecast models for that hour by the greater of 2000 MW or 4% of that average. [e20] NPRR1004 and NPRR1240 (np-03 3.12) would have ERCOT post Load distribution factors daily, derived from the Mid-Term Load Forecast. [e21] The current np-04 4.5.1(5) text says the non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions. [e22]
- **ERCOT context #1** (cites e10, e6, e17, e41, e40): Forecast accuracy affects commitment. The IMM defines net demand as demand minus expected IRR generation and says an over-forecast of net demand can lead to sub-optimal commitment, and an under-forecast can leave real-time shortfalls that are often addressed through RUC. [e10] The IMM reports that the average net load forecast error (measured eight hours ahead of real-time) fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, and that accuracy for net load and IRR generation has improved meaningfully since the second half of 2022. [e6][e17][e41] Forecasts still systematically over-forecast load and under-forecast IRR generation, with IRR under-forecast by only 89 MW on average in 2025, while forecast variance has grown with installed solar. [e6][e40]
- **ERCOT context #2** (cites e43, e44, e52, e46, e45) FLAG number-not-in-quote: 2026: Forecast error feeds ancillary service sizing. ERCOT's 2026 methodology accounts for risk using historic 30-minute-ahead and 6-hour-ahead net load forecast errors and forced outages over the previous four years, and ERCOT may procure up to an additional 1,000 MW of Non-Spin near Real-Time for Operating Hours that it identifies as having an increased potential of high forecast variability and a risk that actual net load could be higher than forecast, and where expected capacity and reserves (including the posted minimum Non-Spin requirements) are not sufficient to cover the projected net load forecast uncertainty risk. [e43][e44][e52] The IMM's earlier reports say ECRS minimums were first computed as the sum of the capacity needed to recover frequency after a large unit trip and the 85th to 95th percentile of 30-minute-ahead intra-hour net load forecast error [e46], and that NSRS used the ten-hour-ahead forecast error from January through May 2023 and the six-hour-ahead error afterward. [e45]
- **ERCOT context #3** (cites e42) FLAG number-not-in-quote: 2021: Operator posture. The IMM's 2021 report says that after the June 2021 conservation appeal ERCOT adopted a more conservative operating posture, including adjusting its selection of forecast to rely more frequently on the highest load forecast and the lowest wind and solar forecasts. [e42]
- **ERCOT context #4** (cites e39, e38, e29, e56, e32, e54, e30, e31) FLAG number-not-in-quote: 25.370: Long-term and large loads. The IMM says ERCOT's peak demand grew from 74.7 GW in 2019 to 85.6 GW in 2024 (2.76% a year), while recent forecasts diverged sharply: its chronology notes a July 2024 LTLF including officer letter loads that projected 148 GW in 2030, against 86.5 GW and 82.8 GW in the December 2023 and May 2024 CDRs. [e39][e38] PUCT rule 16 TAC §25.370, effective 3/1/2026, says ERCOT must not include a large load customer's forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the customer executed an interconnection agreement and provided the required disclosures and financial commitments. [e29] Its effective-date clause has ERCOT keep using the load data submitted for the 2026 RTP until it constructs new planning cases using those criteria, so the criteria are phased in. [e56] By its terms the criterion applies to load forecasts used for transmission planning needs and resource adequacy assessments [e29], and the rule lets ERCOT use different forecasts for different study scopes and horizons [e32]; no saved source says it applies to the Seven-Day Load Forecast. ERCOT may adjust DSP-provided load data to correct errors or account for withdrawn or cancelled interconnection requests if the DSP agrees [e54]; any other adjustment needs PUCT approval, which the Commission may give if the adjustment is supported by actual historical realization rates or other objective, credible, independent information. [e30] It must also file an annual assessment comparing past forecasts to actual outcomes, identifying error sources and recommending improvements. [e31]
- **ERCOT context #5** (cites e33, e55, e34, e35): In its preliminary LTLF for 2026-2032 ERCOT projected approximately 278,003 MW of total demand by 2029 and 367,790 MW by 2032, against an all-time peak of 85,508 MW; the filing says the vast majority of the 2029 and 2032 figures is attributable to Large Loads identified in TDSP load submissions. [e33][e55] The same filing says ERCOT currently expected summer 2026 peak load of approximately 90,500 to 98,000 MW against about 112,000 MW in the preliminary LTLF, and proposed two ways to adjust the LTLF: a historical realization rate or the forecast from the Large Load Batch Zero process. [e34][e35]
- **Key facts #1** (cites e2, e4, e18): - Seven-Day Load Forecast: hourly, 168 hours, by Weather Zone and Forecast Zone, posted hourly; weather inputs updated at least hourly. [e2][e4][e18]
- **Key facts #4** (cites e5): - ERCOT may modify the Seven-Day result with judgment before use in DRUC, HRUC and the AS Capacity Monitor. [e5]
- **Key facts #5** (cites e6, e17): - 2025 average net load forecast error about 452 MW, measured eight hours ahead of real-time (IMM). [e6][e17]
- **Key facts #7** (cites e37): - 2025 LTLF (April 2025): summer peak 85,759 MW for 2025 and 94,650 MW for 2026 (Appendix A). [e37]
- **Key facts #8** (cites e33, e55) FLAG number-not-in-quote: 2026: - Preliminary 2026 LTLF: 367,790 MW by 2032 versus an 85,508 MW record; the vast majority is Large Loads identified in TDSP submissions. [e33][e55]
- **Timeline #1** (cites e50): - June 2021: SB 1281 (effective September 2021) added Utilities Code Section 37.056(c-1), requiring load forecasts to consider historical load, forecasted load and additional load seeking interconnection (IMM chronology). [e50]
- **Timeline #2** (cites e42) FLAG number-not-in-quote: 2021: - July 2021 onward: the IMM says ERCOT relied more frequently on the highest load forecast and lowest wind and solar forecasts. [e42]
- **Timeline #3** (cites e38): - July 2024: revised 2024 LTLF includes officer letter loads (148 GW in 2030). [e38]
- **Timeline #4** (cites e37): - April 2025: LTLF with 2025 summer peak 85,759 MW. [e37]
- **Timeline #5** (cites e29, e56) FLAG number-not-in-quote: 25.370: - March 1, 2026: 16 TAC §25.370 effective; its subsection (c) criteria apply to planning cases ERCOT constructs after that (phased in). [e29][e56]
- **Timeline #6** (cites e33, e35) FLAG number-not-in-quote: 2026: - 2026: preliminary LTLF 367,790 MW by 2032 and ERCOT's proposed adjustment options. [e33][e35]
- **Common confusion #1** (cites e16, e10, e12, e29, e17) FLAG number-not-in-quote: 452 MW, 2025: (Guidance) Net Load is Load minus wind and PV generation [e16], and the IMM ties commitment risk to the net demand forecast rather than load alone. [e10] Also keep the short-term operational forecast separate from the long-term (LTLF) forecast used for planning, and from the large-load forecasting criteria, which apply to planning and resource adequacy forecasts. [e12][e29] Do not compare the 452 MW figure (eight hours ahead, net load, 2025) with a five-minute or 30-minute-ahead error without checking the horizon. [e17]
- **Questions #2** (cites e18, e13): Hourly forecasted weather parameters for stations in the Weather Zones (updated at least hourly) and training information from historic hourly integrated Weather Zone Loads; it must also have a self-training mode. [e18][e13]
- **Questions #8** (cites e5): The Protocol says ERCOT reviews the suggested forecast and uses its judgment, if necessary, to modify it before use in the AS Capacity Monitor, DRUC, HRUC and resource adequacy reporting. [e5] The saved sources do not give ERCOT's reasons.
- **Questions #10** (cites e10, e51, e35) FLAG number-not-in-quote: 2026: The IMM says an over-forecast of net demand can lead to sub-optimal commitment, though that discussion concerns net demand forecasts in operations. [e10] For planning forecasts, ERCOT proposed in 2026 to adjust the preliminary LTLF, saying that the scale of the load in the LTLF and known supply chain constraints bring into question the likelihood of the realization timeline for the provided load forecast values. [e51][e35]
- **Questions #12** (cites e47, e48, e49) FLAG number-not-in-quote: 2024: The IMM lists differences between the LDF used in the DAM and the actual real-time load distribution as one source of RENA uplift. [e47] It says NPRR 1004, still pending implementation in its 2024 report, should reduce this uplift by using load forecast models to calculate a daily LDF instead of the current seasonal LDF. [e48][e49]
- **Questions #14** (cites e43, e53) FLAG number-not-in-quote: 2026: ERCOT's 2026 methodology uses historic 30-minute-ahead and 6-hour-ahead net load forecast errors in its risk accounting for ECRS and Non-Spin, with an adjustment for expected increase in solar forecast error due to expected growth in installed solar capacity. [e43][e53]
- **Scenarios #2** (cites e10): - The IMM says an over-forecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. [e10]
- **Scenarios #3** (cites e5, e25): - The Seven-Day forecast feeds DRUC and HRUC, so a high forecast can lead to commitments the load did not need (an inference from the IMM statement above and these Protocol uses, not a quoted statement). [e5][e25]
- **Scenarios #4** (cites e28): - (Guidance) Check which MTLF model ERCOT was using, since ERCOT posts that indicator. [e28]
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

