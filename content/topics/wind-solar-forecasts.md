---
id: wind-solar-forecasts
name: Wind & Solar Forecasts (STWPF, STPPF)
aliases: [STWPF, STPPF, WGRPP, PVGRPP, Short-Term Wind Power Forecast, Short-Term PhotoVoltaic Power Forecast, renewable production potential, IHWPF, IHPPF]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: wind-generation
    type: related
    note: Wind generation dominates total IRR forecast error variance. [e9]
  - to: solar-generation
    type: related
    note: Solar forecast errors raised NSRS volumes in 2025 per the IMM. [e10]
  - to: load-forecasting
    type: related
    note: Net load forecast error combines load and renewable forecast errors. [e9]
  - to: ruc
    type: used-in
    note: The STWPF and the renewable production potential forecasts are inputs to the Reliability Unit Commitment processes. [e5][e6]
  - to: cop
    type: used-in
    note: For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF and STPPF. [e7]
  - to: net-load
    type: related
    note: Net load forecasts determine thermal commitment and depend on expected renewable output. [e8]
  - to: ancillary-services
    type: related
    note: Net load and solar forecast errors drive the volumes of some ancillary services. [e10]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Short-Term Wind Power Forecast (STWPF)"
    quote: "An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each WGR that could be generated from all available units of that Resource."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Short-Term PhotoVoltaic Power Forecast (STPPF)"
    quote: "An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Wind-powered Generation Resource Production Potential (WGRPP)"
    quote: "The generation in MWh per hour from a WGR that could be generated from all available units of that Resource allocated from the 80% probability of exceedance of the Total ERCOT Wind Power Forecast (TEWPF)."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of PhotoVoltaic Generation Resource Production Potential (PVGRPP)"
    quote: "The generation in MWh per hour from a PVGR that could be generated from all available units of that Resource allocated from the 80% probability of exceedance of the Total ERCOT PhotoVoltaic Power Forecast (TEPPF)."
  - id: e5
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (2)"
    quote: "ERCOT shall use the probabilistic TEWPF and select the forecast that the actual total ERCOT WGR production is expected to exceed 50% of the time (50% probability of exceedance forecast). To produce the STWPF, ERCOT will allocate the TEWPF 50% probability of exceedance forecast to each WGR such that the sum of the individual STWPF forecasts equal the TEWPF forecast. The updated STWPF forecasts for each hour for each WGR are to be used as input into each Reliability Unit Commitment (RUC) process as per Section 5, Transmission Security Analysis and Reliability Unit Commitment."
  - id: e6
    source: np-03
    locator: "Section 3.13, Renewable Production Potential Forecasts, paragraph (1)"
    quote: "ERCOT shall produce forecasts of Renewable Production Potential (RPP) for Wind-powered Generation Resources (WGRs) and PhotoVoltaic Generation Resources (PVGRs) to be used as an input into the Day-Ahead Reliability Unit Commitment (DRUC) and Hour-Ahead Reliability Unit Commitment (HRUC)."
  - id: e7
    source: np-03
    locator: "Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8)"
    quote: "For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF)."
  - id: e8
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error"
    quote: "The net demand forecast, defined as demand minus expected generation from intermittent renewable resources (IRRs), is a major determinant of thermal resource commitment decisions."
  - id: e9
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 discussion"
    quote: "By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load. IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar. Despite this growth in solar resources, wind generation continues to dominate total IRR forecast error variance because of its higher volatility and lower predictability."
  - id: e10
    source: imm-som-2025
    locator: "Ancillary Services, NSRS volumes"
    quote: "NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors."
  - id: e11
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1)"
    quote: "ERCOT shall produce and update hourly a Short-Term Wind Power Forecast (STWPF) that provides a rolling 168-hour hourly forecast of wind production potential for each Wind-powered Generation Resource (WGR)."
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Intra-Hour Wind Power Forecast (IHWPF)"
    quote: "The forecast of wind generation in MW in five minute increments."
  - id: e13
    source: np-03
    locator: "Section 3.13, Renewable Production Potential Forecasts, paragraph (2)"
    quote: "ERCOT shall use its best efforts to develop accurate and unbiased forecasts, as limited by the availability of relevant explanatory data."
---

## Definition

The Short-Term Wind Power Forecast (STWPF) and Short-Term PhotoVoltaic Power Forecast (STPPF) are ERCOT-produced hourly 50% probability of exceedance forecasts of the generation in MWh per hour that each WGR or PVGR could produce from all its available units. [e1][e2] The related Production Potential values (WGRPP, PVGRPP) are allocated from the 80% probability of exceedance of the total ERCOT forecast. [e3][e4]

## How it works

ERCOT produces the STWPF hourly as a rolling 168-hour forecast for each wind Resource. [e11] It starts from a probabilistic Total ERCOT Wind Power Forecast, picks the 50% probability of exceedance case (the level actual production is expected to exceed 50% of the time) and allocates it to each Resource so the individual forecasts sum to the total. [e5] ERCOT also publishes an Intra-Hour Wind Power Forecast, defined as the forecast of wind generation in MW in five-minute increments. [e12]

The forecasts feed operations. They are inputs to the Day-Ahead and Hour-Ahead Reliability Unit Commitment, and the STWPF is used in each RUC process. [e6][e5] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF or STPPF. [e7] Protocols require ERCOT to use best efforts to develop accurate and unbiased forecasts, limited by the available data. [e13]

## ERCOT context

The IMM treats forecast error as a market operations issue: the net demand forecast (demand minus expected IRR generation) is a major determinant of thermal commitment. [e8] Accuracy has improved: average net load forecast error was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024, and IRR generation was under-forecast by only 89 MW on average. [e9] Bias remains: forecasts systematically under-forecast IRR generation and over-forecast load, and wind dominates IRR forecast error variance. [e9]

Forecast error shows up in ancillary service procurement: the IMM says NSRS volumes rose 7.5% in 2025, driven by higher net load and solar forecast errors. [e10]

## Key facts

- STWPF and STPPF are hourly 50% probability of exceedance forecasts per Resource; WGRPP and PVGRPP are based on 80% probability of exceedance. [e1][e2][e3][e4]
- The STWPF is a rolling 168-hour forecast updated hourly. [e11]
- 2025 average net load forecast error: about 452 MW; IRR under-forecast: 89 MW on average (IMM). [e9]
- Wind dominates IRR forecast error variance. [e9]
- COP HSL values for the first 168 hours are updated with the latest STWPF/STPPF. [e7]

## Say it like this

(Guidance) ERCOT's wind and solar forecasts are median (50% exceedance) forecasts by Resource, used to set expected output for commitment and the COP, with a more conservative 80% exceedance version for production potential. [e1][e3] The forecast is good on average but wind remains the main source of error. [e9]

## Common confusion

(Guidance) STWPF/STPPF are forecasts of what a Resource could produce given available units and weather; they are not a QSE's schedule. A QSE may override the HSL but only downward from the latest forecast value. [e7] Do not confuse the 50% exceedance forecast with the 80% exceedance production-potential value. [e1][e3]

## Questions

### What does "50% probability of exceedance" mean in the STWPF?

ERCOT selects the forecast that actual total ERCOT WGR production is expected to exceed 50% of the time. [e5]

### Where are these forecasts used?

As RUC inputs (DRUC, HRUC) and to update COP HSL values for the first 168 hours. [e6][e7]

### How accurate are ERCOT's renewable forecasts per the IMM?

IRR generation was under-forecast by only 89 MW on average in 2025, with net load error about 452 MW, though wind keeps dominating the variance. [e9]

## Open items

- Deeper pass: the Total ERCOT Wind/PV Power Forecast (TEWPF/TEPPF) methodology, forecast model selection and vendor details were not found beyond what is cited.
- Deeper pass: DC-Coupled Resource treatment is in pending NPRR language (NPRR1029) and was not used here.
- The QSE override rule is cited from COP paragraph (8) in np-03; it is simplified in Common confusion (the Protocol text also covers the PVGR case).
- No source gave forecast error by hour of day for solar, or bias statistics for wind alone.
