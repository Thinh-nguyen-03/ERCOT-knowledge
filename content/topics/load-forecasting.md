---
id: load-forecasting
name: Load Forecasting
aliases: [load forecast, seven-day load forecast, 36-month load forecast, IHLF, MTLF, short-term load forecast]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: uplift
    type: related
    note: The IMM ties RENA uplift to differences between the Load distribution factors used in the DAM and actual real-time load distribution, and says NPRR 1004 (daily LDF from load forecast models) should reduce it. [e47][e48]
  - to: non-spin
    type: used-in
    note: ERCOT's 2026 AS methodology builds ECRS and Non-Spin requirements from historic 30-minute-ahead and 6-hour-ahead net load forecast errors. [e43]
  - to: ecrs
    type: used-in
    note: The IMM reports that ECRS minimums were initially computed using the 85th to 95th percentile of 30-minute-ahead intra-hour net load forecast error. [e46]
  - to: cdr-report
    type: related
    note: The IMM compares load forecasts published in the CDR and the LTLF in its chronology of forecast changes since December 2023. [e38]
  - to: sb6
    type: related
    note: PUCT rule 16 TAC §25.370 governs when large loads may be included in ERCOT load forecasts for transmission planning and resource adequacy. [e29]
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
  - id: e47
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "Differences between the load distribution factor (LDF) used in the DAM and the actual real-time load distribution (LDF contribution);"
  - id: e48
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "NPRR 1004, Load Distribution Factor Process Update, approved on August 11, 2020, is still pending implementation, but should reduce this uplift."
  - id: e49
    source: imm-som-2024
    locator: "page 96 (OCR), RENA evaluation"
    quote: "This change will introduce load forecast models to calculate daily LDF rather than the current seasonal LDF based on historical patterns."
  - id: e50
    source: imm-som-2024
    locator: "page 130 (OCR), H. Load Forecast, chronology"
    quote: "June 2021. The Texas Legislature passed SB 1281, which took effect in September 2021. SB 1281 introduced Section 37.056(c-1) of the Utilities Code, which required load forecasts to consider (1) historical load, (2) forecasted load, and (3) additional load seeking interconnection."
---

## Definition

Under the Protocols, ERCOT produces and uses Load forecasts to serve operations and planning objectives. [e1] The main products are an hourly Seven-Day Load Forecast by Weather Zone and Forecast Zone, a monthly 36-Month Load Forecast, and a rolling two-hour, five-minute Intra-Hour Load Forecast. [e2][e3][e7]

## How it works

Short-term operations. The Seven-Day Load Forecast predicts hourly Loads for the next 168 hours from current weather forecast parameters in each Weather Zone, because Day-Ahead operations require an accurate forecast of the Loads for which capacity must be secured. [e4] Its inputs are hourly forecasted weather parameters for the weather stations in the Weather Zones, updated at least once per hour, and training information from historic hourly integrated Weather Zone Loads. [e18] It must also have a self-training mode that lets ERCOT review historic Load data and retrain the algorithm. [e13] ERCOT reviews the result and may modify it with judgment before it is used in the Ancillary Service Capacity Monitor, DRUC, HRUC and resource adequacy reporting. [e5]

Where it is used. The RUC process lists the ERCOT system-wide hourly Load forecast, allocated over Load buses, among its factors. [e26] ERCOT initiates HRUC at least one hour before the Operating Hour to fine-tune commitments using updated Load forecasts and outage information. [e25] In Real-Time operations ERCOT posts updated system-wide Mid-Term Load Forecasts for all forecast models available to Operations, with an indicator of which forecast was in use. [e28] The State Estimator applies a Bus Load Forecast to the transmission buses, flagged with a low measurement confidence factor. [e27]

Study Areas. ERCOT develops Study Areas for Load forecasting and study purposes and provides the data to the market. [e23] It also posts an hourly Seven-Day Study Area Load Forecast, based on weather parameters in each Study Area, which does not change the Weather Zone or Forecast Zone values. [e24]

Longer term. The 36-Month Load Forecast gives daily minimum and maximum Load and is used in outage coordination and resource adequacy reporting. [e3] ERCOT prepares at least annually a forecast of hourly Loads for a minimum of ten years using an econometric forecast with weather conditions and demographic data. [e12] The 2025 forecast document describes econometric models of hourly load as a function of premises by customer class, weather variables and calendar variables, and a normal-weather summer peak formed by averaging the summer peaks from seventeen weather scenarios, which are built from actual weather for 2008 through 2024. [e8][e11][e15] That document designates the forecast using 2008 historical factors as the ERCOT 50th percentile forecast. [e36]

Pending changes (not the rule in force; they appear as pending boxes in the Protocols). NPRR975 (np-03 3.12.1) would have ERCOT use a variety of Load forecast models and select, for each of the next 168 hours, the model that best fits expected conditions. [e19] The same box would require a posted explanation when the selected forecast used at DRUC for the peak Demand hour of any of the next seven days differs from the average of the forecast models by more than the greater of 2000 MW or 4%. [e20] NPRR1004 and NPRR1240 (np-03 3.12) would have ERCOT post Load distribution factors daily, derived from the Mid-Term Load Forecast. [e21] The current np-04 4.5.1(5) text says the non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions. [e22]

## ERCOT context

Forecast accuracy affects commitment. The IMM defines net demand as demand minus expected IRR generation and says an over-forecast of net demand can lead to sub-optimal commitment, and an under-forecast can leave real-time shortfalls that are often addressed through RUC. [e10] The IMM reports that the average net load forecast error (measured eight hours ahead of real-time) fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, and that accuracy for net load and IRR generation has improved meaningfully since the second half of 2022. [e6][e17][e41] Forecasts still systematically over-forecast load and under-forecast IRR generation, with IRR under-forecast by only 89 MW on average in 2025, while forecast variance has grown with installed solar. [e6][e40]

Forecast error feeds ancillary service sizing. ERCOT's 2026 methodology accounts for risk using historic 30-minute-ahead and 6-hour-ahead net load forecast errors and forced outages over the previous four years, and ERCOT may procure up to an additional 1,000 MW of Non-Spin for hours it identifies as having high forecast variability. [e43][e44] The IMM's earlier reports say ECRS minimums were first computed using the 85th to 95th percentile of 30-minute-ahead intra-hour net load forecast error [e46], and that NSRS used the ten-hour-ahead forecast error from January through May 2023 and the six-hour-ahead error afterward. [e45]

Operator posture. The IMM's 2021 report says that after the June 2021 conservation appeal ERCOT adopted a more conservative operating posture, including adjusting its selection of forecast to rely more frequently on the highest load forecast and the lowest wind and solar forecasts. [e42]

Long-term and large loads. The IMM says ERCOT's peak demand grew from 74.7 GW in 2019 to 85.6 GW in 2024 (2.76% a year), while recent forecasts diverged sharply: its chronology notes a July 2024 LTLF including officer letter loads that projected 148 GW in 2030, against 86.5 GW and 82.8 GW in the December 2023 and May 2024 CDRs. [e39][e38] PUCT rule 16 TAC §25.370, effective 3/1/2026, says ERCOT must not include a large load customer's forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the customer executed an interconnection agreement and provided the required disclosures and financial commitments. [e29] The rule is limited to those transmission planning and resource adequacy forecasts; it does not address the Seven-Day Load Forecast. [e29][e32] ERCOT may adjust DSP-provided load data only with the DSP's agreement for error corrections or withdrawals, or with PUCT approval supported by actual historical realization rates or other objective, credible, independent information. [e30] It must also file an annual assessment comparing past forecasts to actual outcomes, identifying error sources and recommending improvements. [e31]

In its preliminary LTLF for 2026-2032 ERCOT projected approximately 278,003 MW of total demand by 2029 and 367,790 MW by 2032, against an all-time peak of 85,508 MW. [e33] ERCOT then said it expected summer 2026 peak load of approximately 90,500 to 98,000 MW against about 112,000 MW in the preliminary LTLF, and proposed two ways to adjust the LTLF: a historical realization rate or the forecast from the Large Load Batch Zero process. [e34][e35]

## Key facts

- Seven-Day Load Forecast: hourly, 168 hours, by Weather Zone and Forecast Zone, posted hourly; weather inputs updated at least hourly. [e2][e4][e18]
- 36-Month Load Forecast: monthly, daily min and max Load. [e3]
- Intra-Hour Load Forecast: rolling two hours in five-minute increments, ERCOT-wide. [e7]
- ERCOT may modify the Seven-Day result with judgment before use in DRUC, HRUC and the AS Capacity Monitor. [e5]
- 2025 average net load forecast error about 452 MW, measured eight hours ahead of real-time (IMM). [e6][e17]
- Long-term forecasts use seventeen weather-year scenarios (2008-2024) in the 2025 document. [e11][e15]
- 2025 LTLF (April 2025): summer peak 85,759 MW for 2025 and 94,650 MW for 2026 (Appendix A). [e37]
- Preliminary 2026 LTLF: 367,790 MW by 2032 versus an 85,508 MW record. [e33]

## Timeline

- June 2021: SB 1281 (effective September 2021) added Utilities Code Section 37.056(c-1), requiring load forecasts to consider historical load, forecasted load and additional load seeking interconnection (IMM chronology). [e50]
- July 2021 onward: the IMM says ERCOT relied more frequently on the highest load forecast and lowest wind and solar forecasts. [e42]
- July 2024: revised 2024 LTLF includes officer letter loads (148 GW in 2030). [e38]
- April 2025: LTLF with 2025 summer peak 85,759 MW. [e37]
- March 1, 2026: 16 TAC §25.370 effective. [e29]
- 2026: preliminary LTLF 367,790 MW by 2032 and ERCOT's proposed adjustment options. [e33][e35]

## Say it like this

(Guidance) ERCOT runs several load forecasts on different horizons, with weather as the main short-term driver, and ERCOT can use judgment to modify the Seven-Day result. [e4][e5] The practical risk is bias: the IMM says forecasts continue to over-forecast load, and that over-forecasting net demand can lead to sub-optimal commitment. [e6][e10]

## Common confusion

(Guidance) Net Load is Load minus wind and PV generation [e16], and the IMM ties commitment risk to the net demand forecast rather than load alone. [e10] Also keep the short-term operational forecast separate from the long-term (LTLF) forecast used for planning, and from the large-load forecasting criteria, which apply to planning and resource adequacy forecasts. [e12][e29] Do not compare the 452 MW figure (eight hours ahead, net load, 2025) with a five-minute or 30-minute-ahead error without checking the horizon. [e17]

## Questions

### What are the inputs to the Seven-Day Load Forecast?

Hourly forecasted weather parameters for stations in the Weather Zones (updated at least hourly) and training information from historic hourly integrated Weather Zone Loads; it must also have a self-training mode. [e18][e13]

### Why does forecast bias matter for the market?

Over-forecasting net demand can lead to sub-optimal commitment, while under-forecasting can lead to real-time shortfalls addressed through RUC. [e10]

### How did forecast accuracy change by 2025?

Per the IMM, the average net load forecast error (eight hours ahead of real-time) fell to about 452 MW from more than 1,000 MW in 2023 and 2024. [e6][e17]

### Why does ERCOT review and sometimes modify the Seven-Day forecast?

The Protocol says ERCOT reviews the suggested forecast and uses its judgment, if necessary, to modify it before use in the AS Capacity Monitor, DRUC, HRUC and resource adequacy reporting. [e5] The saved sources do not give ERCOT's reasons.

### What if the large-load forecast is too high?

The IMM says an over-forecast of net demand can lead to sub-optimal commitment, though that discussion concerns net demand forecasts in operations. [e10] For planning forecasts, ERCOT proposed in 2026 to adjust the preliminary LTLF, saying that supply chain constraints bring into question the likelihood of the realization timeline for the provided load values. [e35][e34]

### Why do Load distribution factors matter to prices?

The IMM lists differences between the LDF used in the DAM and the actual real-time load distribution as one source of RENA uplift. [e47] It says NPRR 1004, still pending implementation in its 2024 report, should reduce this uplift by using load forecast models to calculate a daily LDF instead of the current seasonal LDF. [e48][e49]

### How does forecast error enter ancillary service requirements?

ERCOT's 2026 methodology uses historic 30-minute-ahead and 6-hour-ahead net load forecast errors in its risk accounting for ECRS and Non-Spin, with an adjustment for expected growth in solar forecast error. [e43]

## Scenarios

### Hot-day load comes in well below the Seven-Day Forecast. What does the market do?

- The IMM says an over-forecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. [e10]
- The Seven-Day forecast feeds DRUC and HRUC, so a high forecast can lead to commitments the load did not need. [e5][e25]
- (Guidance) Check which MTLF model ERCOT was using, since ERCOT posts that indicator. [e28]

## Open items

- How ERCOT selects among models in the Seven-Day Load Forecast is described only in NPRR975 pending-box language (cited above as pending); the model-selection practice actually in force was not found.
- Mid-Term Load Forecast and Load distribution factor details come from pending NPRR1004/NPRR1240 language; the saved np-04 current text describes a proxy-day method.
- Whether the PUCT approved either of ERCOT's 2026 adjustment options for the LTLF was not found in the saved sources.
- Forecast error by horizon beyond the IMM's eight-hours-ahead net load measure (2022-2025) and the 30-minute and 6-hour measures named in the AS methodology was not found; no source quantifies day-ahead load forecast error (MAPE).
- The IMM (2024 report) describes the current LDF as seasonal and based on historical patterns, while np-04 4.5.1(5) describes a proxy-day method from State Estimator hourly distribution; the sources were not reconciled.
- The IMM 2024 Table 9 (forecast comparison) is garbled in the OCR copy and was not quoted.
