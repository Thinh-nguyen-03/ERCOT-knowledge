---
id: load-forecasting
name: Load Forecasting
aliases: [load forecast, seven-day load forecast, 36-month load forecast, IHLF, MTLF, short-term load forecast]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: weather-load
    type: related
    note: Weather parameters are the main input to the Seven-Day Load Forecast. [e4]
  - to: long-term-load-forecast
    type: related
    note: The long-term forecast is ERCOT's annual ten-year forecast built with econometric models. [e8][e9]
  - to: wind-solar-forecasts
    type: related
    note: The IMM discusses net load forecast error alongside under-forecast IRR generation and over-forecast load. [e6]
  - to: net-load
    type: related
    note: The IMM reports that the average net load forecast error, measured eight hours ahead of real-time, fell to about 452 MW in 2025. [e6][e17]
  - to: ruc
    type: used-in
    note: The load forecast is used in DRUC and HRUC after ERCOT's review. [e5]
  - to: large-load-growth
    type: related
    note: Large loads are one of five components of the long-term forecast. [e14]
  - to: sc-load-forecast-miss
    type: related
    note: A forecast-miss scenario exercises the over-forecast bias the IMM reports. [e6]
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.12, Load Forecasting, paragraph (1)"
    quote: "ERCOT shall produce and use Load forecasts to serve operations and planning objectives."
  - id: e2
    source: np-03
    locator: "Section 3.12, paragraph (1)(a)"
    quote: "ERCOT shall update and post hourly on the ERCOT website, a “Seven-Day Load Forecast” as described in Section 3.12.1, Seven-Day Load Forecast, that provides forecasted hourly Load over the next 168 hours for each of the Weather Zones and for each of the Forecast Zones."
  - id: e3
    source: np-03
    locator: "Section 3.12, paragraph (1)(b)"
    quote: "ERCOT shall develop and post monthly on the Market Information System (MIS) Secure Area a “36-Month Load Forecast” that provides a daily minimum and maximum Load forecast for the next 36 months for the ERCOT Region, for each of the Weather Zones, and for each of the Forecast Zones. The 36-Month Load Forecast is used in the Outage coordination process and for Resource adequacy reporting."
  - id: e4
    source: np-03
    locator: "Section 3.12.1, Seven-Day Load Forecast, paragraph (1)"
    quote: "ERCOT shall use the Seven-Day Load Forecast to predict hourly Loads for the next 168 hours based on current weather forecast parameters within each Weather Zone. Preparation for Day-Ahead Operations requires an accurate forecast of the Loads for which generation capacity must be secured."
  - id: e5
    source: np-03
    locator: "Section 3.12.1, paragraph (3)"
    quote: "ERCOT shall review the forecast suggested by Seven-Day Load Forecast and shall use its judgment, if necessary, to modify the result prior to implementation in the Ancillary Service Capacity Monitor, Day-Ahead Reliability Unit Commitment (DRUC), Hour-Ahead Reliability Unit Commitment (HRUC), and Resource adequacy reporting."
  - id: e6
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 discussion"
    quote: "By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load."
  - id: e7
    source: np-03
    locator: "Section 3.12, paragraph (2)"
    quote: "ERCOT shall produce and post to the ERCOT website an Intra-Hour Load Forecast (IHLF) that provides a rolling two hour five minute forecast of ERCOT-wide Load."
  - id: e8
    source: ercot-ltlf-2025
    locator: "Base Economic Load Forecast, introduction"
    quote: "This forecast is based on a set of econometric models describing the hourly load in the region as a function of the number of premises in various customer classes (e.g., residential, business, and industrial), weather variables (e.g., various temperature values), and calendar variables (e.g., day of week and holidays) to create the base load forecast."
  - id: e9
    source: imm-som-2025
    locator: "Resource Adequacy, 4. Long-Term Load Forecast"
    quote: "ERCOT publishes the LTLF annually as its primary tool to project system load growth over a ten-year horizon."
  - id: e10
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error"
    quote: "An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC."
  - id: e11
    source: ercot-ltlf-2025
    locator: "Weather Zone Normal Weather Summer Peak Demand Forecast"
    quote: "The summer peak demand values from the seventeen weather scenarios for a particular calendar year are averaged to determine the normal weather forecasted summer peak value."
  - id: e12
    source: np-03
    locator: "Section 3.2.6.3, Firm Peak Load and Firm Peak Net Load Estimates, paragraph (1)"
    quote: "ERCOT shall prepare, at least annually, a forecast of total hourly Loads for a minimum of ten future years using an econometric forecast, taking into account econometric inputs, weather conditions, demographic data and other variables as deemed appropriate by ERCOT."
  - id: e13
    source: np-03
    locator: "Section 3.12.1, Seven-Day Load Forecast, paragraph (1)"
    quote: "The Seven-Day Load Forecast must have a “self-training” mode that allows ERCOT to review historic Load data and provide the ability to retrain the Seven-Day Load Forecast algorithm."
  - id: e14
    source: imm-som-2025
    locator: "Resource Adequacy, 4. Long-Term Load Forecast"
    quote: "The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, and large loads."
  - id: e15
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report, Weather Zone Normal Weather Hourly Forecast methodology"
    quote: "This process was completed for each of the historical weather years (2008-2024) individually and resulted in seventeen weather load forecast scenarios for each weather zone for each of the forecasted years (2025-2034)."
  - id: e16
    source: np-02
    locator: "Section 2.1, definition of Net Load"
    quote: "The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period."
  - id: e17
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 introduction"
    quote: "Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time."
  - id: e18
    source: np-03
    locator: "Section 3.12.1, Seven-Day Load Forecast, paragraph (2)"
    quote: "The inputs for the Seven-Day Load Forecast are as follows: (a) Hourly forecasted weather parameters for the weather stations within the Weather Zones, which are updated at least once per hour; and (b) Training information based on historic hourly integrated Weather Zone Loads."
  - id: e19
    source: np-03
    locator: "Section 3.12.1, pending NPRR975 insertion box, paragraph (a)"
    quote: "(a) ERCOT will use a variety of Load forecast models and will select the Load forecast model that best fits the expected conditions for each hour of the next 168 hours as the Seven-Day Load Forecast for that hour and may update this selection as expected conditions change."
  - id: e20
    source: np-03
    locator: "Section 3.12.1, pending NPRR975 insertion box, paragraph (b)"
    quote: "(b) If the selected forecast used at the time of the Day-Ahead Reliability Unit Commitment (DRUC) for the peak Demand hour of any of the next seven days is above or below the average of the forecast models for that hour by the greater of 2000 MW or 4% of the average of the forecast models for that hour, ERCOT shall produce and post to the ERCOT website an explanation of why the outlier Load forecast model was selected for that hour."
  - id: e21
    source: np-03
    locator: "Section 3.12, pending NPRR1004 and NPRR1240 insertion box, paragraph (c)"
    quote: "(c) ERCOT shall generate and post daily on the ERCOT website Load distribution factors that provide hourly distribution for non-Private Use Network Loads by means of the Mid-Term Load Forecast (MTLF)."
  - id: e22
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (5) (current text)"
    quote: "The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions."
  - id: e23
    source: np-03
    locator: "Section 3.12.2, Study Areas, paragraph (1)"
    quote: "ERCOT shall develop and use Study Areas for Load forecasting and study purposes, and will provide the Load forecast data to the market. A list of Study Areas shall be available on the ERCOT website."
  - id: e24
    source: np-03
    locator: "Section 3.12.3, Seven-Day Study Area Load Forecast, paragraph (1)"
    quote: "ERCOT shall develop and post hourly on the ERCOT website a “Seven-Day Study Area Load Forecast” to predict the hourly Loads for the next 168 hours based on current weather forecast parameters within each Study Area."
  - id: e25
    source: np-05
    locator: "Section 5.1, Introduction, paragraph (5)"
    quote: "ERCOT must initiate the HRUC process at least one hour before the Operating Hour to fine-tune the Resource commitments using updated Load forecasts and updated Outage information."
  - id: e26
    source: np-05
    locator: "Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (19)(a)"
    quote: "ERCOT System-wide hourly Load forecast allocated appropriately over Load buses;"
  - id: e27
    source: np-06
    locator: "Section 6.5.7.1.3, Bus Load Forecast, paragraph (1)"
    quote: "Once the Updated Network Model is created, the transmission Electrical Buses in the model will have a Bus Load Forecast applied. The forecasted Load must be denoted with a low State Estimator measurement confidence factor."
  - id: e28
    source: np-06
    locator: "Section 6.3.2, Activities for Real-Time Operations, paragraph (3)(b)"
    quote: "Updated system-wide Mid-Term Load Forecasts (MTLFs) for all forecast models available to ERCOT Operations, as well as an indicator for which forecast was in use by ERCOT at the time of publication;"
  - id: e29
    source: puct-25-370
    locator: "16 TAC \u00a725.370(c), Criteria for inclusion in ERCOT load forecast (effective 3/1/2026)"
    quote: "ERCOT must not include a large load customer’s forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title."
  - id: e30
    source: puct-25-370
    locator: "16 TAC \u00a725.370(e)(2)(B), Adjustments to load data"
    quote: "The commission may approve ERCOT’s request to adjust the load data if the adjustment is supported by actual historical realization rates or other objective, credible, independent information."
  - id: e31
    source: puct-25-370
    locator: "16 TAC \u00a725.370(e)(4), Annual assessment"
    quote: "ERCOT must file an annual assessment with the commission that: (A) compares past forecasts to actual outcomes; (B) identifies sources of error; and (C) provides recommendations for improvement in the forecasting process."
  - id: e32
    source: puct-25-370
    locator: "16 TAC \u00a725.370(e)(3), Use of load forecasts"
    quote: "ERCOT may use different forecasts to accommodate differences in study scope, time horizon, scenarios, and modeling details in developing its transmission planning and resource adequacy reports."
  - id: e33
    source: ercot-ltlf-2026-prelim
    locator: "Preliminary LTLF for 2026-2032, filing letter, paragraph 1"
    quote: "As shown in Table 1 below, the forecast projects approximately 278,003 megawatts (MW) of total demand in the ERCOT Region by 2029 and 367,790 MW by 2032. For comparison, the ERCOT Region's current all-time peak demand is 85,508 MW."
  - id: e34
    source: ercot-ltlf-2026-prelim
    locator: "Preliminary LTLF filing letter, discussion of the 2026 peak"
    quote: "ERCOT currently projects that summer 2026 peak load will fall within a range of approximately 90,500 MW to 98,000 MW, compared with the preliminary LTLF's forecasted peak demand of approximately 112,000 MW for summer 2026"
  - id: e35
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT proposal to adjust the 2026 LTLF, Section II"
    quote: "ERCOT proposes two options to adjust the LTLF: one adjustment option using a historical realization rate and the other option using the forecast developed in the Large Load Batch Zero process."
  - id: e36
    source: ercot-ltlf-2025
    locator: "ERCOT Normal Weather (50th percentile) Hourly Forecast"
    quote: "the forecast using historical factors from 2008 was deemed the ERCOT 50^(th) percentile forecast."
  - id: e37
    source: ercot-ltlf-2025
    locator: "Appendix A, Peak Demand and Energy Forecast Summary (2025 LTLF, April 2025)"
    quote: "2025 85,759 486 2026 94,650 558"
  - id: e38
    source: imm-som-2024
    locator: "page 131 (OCR), H. Load Forecast, chronology"
    quote: "July 2024. ERCOT published its revised 2024 LTLF report, whose forecast includes officer letter loads. It projects a peak demand of 148 GW in 2030, up from 86.5 GW and 82.8 GW projected by the December 2023 CDR and May 2024 CDR reports, respectively."
  - id: e39
    source: imm-som-2024
    locator: "page 129 (OCR), H. Load Forecast"
    quote: "Historically, peak demand in ERCOT grew at a steady pace, increasing from 74.7 GW in 2019 to 85.6 GW in 2024, for an average annual growth rate of 2.76%."
  - id: e40
    source: imm-som-2025
    locator: "page 105 (OCR), C. Forecast Error"
    quote: "IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar."
  - id: e41
    source: imm-som-2025
    locator: "page 105 (OCR), C. Forecast Error"
    quote: "Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error."
  - id: e42
    source: imm-som-2021
    locator: "page 34 (OCR), reliability and operating reserves discussion"
    quote: "Adjusted selection of forecast to more frequently rely on the highest load forecast and the lowest wind and solar forecasts."
  - id: e43
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin methodology, probabilistic risk accounting (effective 2026-01-01)"
    quote: "Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years."
  - id: e44
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin methodology, near-Real-Time procurement"
    quote: "ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Operating Hours that are (a) identified as having an increased potential of high forecast variability,"
  - id: e45
    source: imm-som-2024
    locator: "page 83 (OCR), Ancillary Service Plan"
    quote: "For January through May of 2023, the NSRS methodology used the ten hour-ahead forecast error, but the six hour-ahead forecast error was used for the remainder of 2023 and all of 2024."
  - id: e46
    source: imm-som-2023
    locator: "page 78 (OCR), ECRS requirements"
    quote: "ERCOT initially computed minimum requirements for ECRS as the sum of the capacity needed to recover frequency following a large unit trip and the 85th to 95th percentile of 30-minute ahead intra-hour net load forecast error."
---

## Definition

Under the Protocols, ERCOT produces and uses Load forecasts to serve operations and planning objectives. [e1] The main products are an hourly Seven-Day Load Forecast by Weather Zone and Forecast Zone, a monthly 36-Month Load Forecast, and a rolling two-hour, five-minute Intra-Hour Load Forecast. [e2][e3][e7]

## How it works

The Seven-Day Load Forecast predicts hourly Loads for the next 168 hours from current weather forecast parameters in each Weather Zone, because Day-Ahead operations require an accurate forecast of the Loads for which capacity must be secured. [e4] ERCOT reviews the result and may modify it with judgment before it is used in the Ancillary Service Capacity Monitor, DRUC, HRUC and resource adequacy reporting. [e5] The 36-Month Load Forecast gives daily minimum and maximum Load and is used in outage coordination and resource adequacy reporting. [e3]

For the long term, ERCOT prepares at least annually a forecast of hourly Loads for a minimum of ten years using an econometric forecast with weather conditions and demographic data. [e12] The 2025 forecast document describes econometric models of hourly load as a function of premises by customer class, weather variables and calendar variables, and a normal-weather summer peak formed by averaging the summer peaks from seventeen weather scenarios, which are built from actual weather for 2008 through 2024. [e8][e11][e15]

## ERCOT context

Forecast accuracy affects commitment. The IMM says an over-forecast of net demand can lead to sub-optimal commitment, and an under-forecast can leave real-time shortfalls that are often addressed through RUC. [e10] The IMM reports that the average net load forecast error (measured eight hours ahead of real-time) fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, but forecasts still systematically over-forecast load and under-forecast renewable output. [e6][e17] The IMM calls the LTLF ERCOT's primary tool for projecting load growth over ten years. [e9]

## Key facts

- Seven-Day Load Forecast: hourly, 168 hours, by Weather Zone and Forecast Zone, posted hourly. [e2][e4]
- 36-Month Load Forecast: monthly, daily min and max Load. [e3]
- Intra-Hour Load Forecast: rolling two hours in five-minute increments, ERCOT-wide. [e7]
- 2025 average net load forecast error about 452 MW, measured eight hours ahead of real-time; forecasts continue to over-forecast load (IMM). [e6][e17]
- Long-term forecasts use seventeen weather-year scenarios (2008-2024) in the 2025 document. [e11][e15]

## Say it like this

(Guidance) ERCOT runs several load forecasts on different horizons, with weather as the main short-term driver, and ERCOT can use judgment to modify the Seven-Day result. [e4][e5] The practical risk is bias: the IMM says forecasts continue to over-forecast load, and that over-forecasting net demand can lead to sub-optimal commitment. [e6][e10]

## Common confusion

(Guidance) Net Load is Load minus wind and PV generation [e16], and the IMM ties commitment risk to the net demand forecast rather than load alone. [e10] Also keep the short-term operational forecast separate from the long-term (LTLF) forecast used for planning. [e12]

## Questions

### What are the inputs to the Seven-Day Load Forecast?

Current weather forecast parameters in each Weather Zone; the Protocols also say it must have a self-training mode on historic Load data. [e4][e13]

### Why does forecast bias matter for the market?

Over-forecasting net demand can lead to sub-optimal commitment, while under-forecasting can lead to real-time shortfalls addressed through RUC. [e10]

### How did forecast accuracy change by 2025?

Per the IMM, the average net load forecast error (eight hours ahead of real-time) fell to about 452 MW from more than 1,000 MW in 2023 and 2024. [e6][e17]

## Open items

- Deeper pass: how ERCOT's Seven-Day Load Forecast selects among models (the model-selection and 2000 MW or 4% outlier-explanation rule sits in pending NPRR975 box language, not cited here).
- Deeper pass: Load distribution factors and Mid-Term Load Forecast (pending NPRR1004/1240 language), Study Area forecasts, forecast error metrics by horizon.
- Deeper pass: large-load adjustments to the forecast (ercot-ltlf-2026-adjust-proposal, SB 6 inputs); see long-term-load-forecast.
