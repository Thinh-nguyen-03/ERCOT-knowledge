---
id: wind-solar-forecasts
name: Wind & Solar Forecasts (STWPF, STPPF)
aliases: [STWPF, STPPF, WGRPP, PVGRPP, Short-Term Wind Power Forecast, Short-Term PhotoVoltaic Power Forecast, renewable production potential, IHWPF, IHPPF, TEWPF, TEPPF]
kind: concept
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: wind-generation
    type: related
    note: Wind generation dominates total IRR forecast error variance. [e9]
  - to: solar-generation
    type: related
    note: The IMM says higher net load and solar forecast errors drove a 7.5% rise in NSRS volumes in its 2025 ancillary service discussion. [e10]
  - to: load-forecasting
    type: related
    note: Net demand is demand minus expected IRR generation, and the IMM reports net load forecast error alongside under-forecast IRR generation and over-forecast load. [e8][e9]
  - to: ruc
    type: used-in
    note: The STWPF and the renewable production potential forecasts are inputs to the Reliability Unit Commitment processes. [e5][e6]
  - to: ruc-make-whole
    type: used-in
    note: In the RUC capacity-short calculation an IRR's available capacity is the lesser of its COP HSL and its production potential at the time of RUC execution. [e23]
  - to: cop
    type: used-in
    note: For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF and STPPF. [e7]
  - to: net-load
    type: related
    note: The net demand forecast, demand minus expected IRR generation, is a major determinant of thermal commitment decisions. [e8]
  - to: ancillary-services
    type: related
    note: Net load and solar forecast errors drive the volumes of some ancillary services. [e10]
  - to: regulation
    type: related
    note: The base Reg-Up and Reg-Down requirement is set from the 95th percentile of net load forecast error for the same month of the previous two years. [e26]
  - to: non-spin
    type: related
    note: ERCOT's 2026 methodology uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors, with a solar adjustment, to size ECRS and Non-Spin. [e28]
  - to: sc-load-forecast-miss
    type: related
    note: The IMM says an under-forecast of net demand can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. [e30]
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
  - id: e14
    source: np-03
    locator: "Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8)"
    quote: "A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT."
  - id: e15
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, Figure 50 introduction"
    quote: "Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time."
  - id: e16
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1)"
    quote: "ERCOT shall produce and post to the ERCOT website every five minutes an Intra-Hour Wind Power Forecast (IHWPF) by wind region that provides a forecast of ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model. The posting shall indicate which forecast model was being used by ERCOT for Generation To Be Dispatched (GTBD) calculation purposes."
  - id: e17
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1)"
    quote: "ERCOT shall produce and update an hourly Total ERCOT Wind Power Forecast (TEWPF) providing a probability distribution of the hourly production potential from all wind-power in ERCOT for each of the next 168 hours."
  - id: e18
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1)"
    quote: "Each Generation Entity that owns a WGR shall install and telemeter to ERCOT the site-specific meteorological information that ERCOT determines is necessary to produce the STWPF and TEWPF forecasts. ERCOT shall establish procedures specifying the accuracy requirements of WGR meteorological information telemetry."
  - id: e19
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (3)"
    quote: "ERCOT shall produce the Wind-powered Generation Resource Production Potential (WGRPP) forecasts using the information provided by WGR owners including WGR availability, meteorological information, and Supervisory Control and Data Acquisition (SCADA)."
  - id: e20
    source: np-04
    locator: "Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraphs (4) and (5)"
    quote: "Each hour, ERCOT shall provide, through the Messaging System, the STWPF and WGRPP forecasts for each WGR to the QSE that represents that WGR and shall post each STWPF and WGRPP forecast on the MIS Certified Area."
  - id: e21
    source: np-04
    locator: "Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, paragraph (2)"
    quote: "ERCOT shall use the probabilistic TEPPF and select the forecast that the actual total ERCOT PVGR production is expected to exceed 50% of the time (50% probability of exceedance forecast). To produce the STPPF, ERCOT will allocate the TEPPF 50% probability of exceedance forecast to each PVGR such that the sum of the individual STPPF forecasts equal the TEPPF forecast."
  - id: e22
    source: np-03
    locator: "Section 3.13, Renewable Production Potential Forecasts, paragraph (2)"
    quote: "ERCOT shall post on the ERCOT website objective criteria and thresholds for unbiased, accurate forecasts within five Business Days of change."
  - id: e23
    source: np-05
    locator: "Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2)"
    quote: "In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution."
  - id: e24
    source: np-03
    locator: "Section 3.1.6.9, Withdrawal of Approval and Rescheduling of Approved Planned Outages of Resource Facilities, paragraph (7)"
    quote: "The preliminary OAE may not assume total renewable production lower than the sum of the selected Wind-powered Generation Resource Production Potential (WGRPP) and PhotoVoltaic Generation Resource Production Potential (PVGRPP) forecasts for each hour less any reasonably expected severe weather impacts."
  - id: e25
    source: np-04
    locator: "Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, paragraph (1)"
    quote: "ERCOT shall produce and post to the ERCOT website every five minutes an Intra-Hour PhotoVoltaic Power Forecast (IHPPF) by PhotoVoltaic region that provides a forecast of ERCOT-wide PhotoVoltaic production potential for each five-minute interval over the next two hours from each forecast model."
  - id: e26
    source: ercot-as-methodology-2026
    locator: "Regulation Service Requirement Details, Procedure"
    quote: "For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load – wind – solar) forecast error for the same month of the previous two years. For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load – wind – solar) forecast error for the same month of the previous two years."
  - id: e27
    source: ercot-as-methodology-2026
    locator: "Regulation Service Requirement Details, Procedure"
    quote: "Then, depending on the month of the year and the hour of the day, ERCOT will add incremental MWs that are derived using the wind and solar forecast error adjustment tables and associated increase in wind and solar generation capacity, to the values determined above."
  - id: e28
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years. ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT’s reliance on historical solar forecast errors alone creates a possibility of under-estimation of the total requirement of ECRS and NSRS. To address this ERCOT will include an adjustment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources."
  - id: e29
    source: imm-som-2025
    locator: "Ancillary Services, page 68 (OCR), procurement volume changes 2024 to 2025"
    quote: "Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error."
  - id: e30
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, page 104 (OCR)"
    quote: "An over- forecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC."
  - id: e31
    source: imm-som-2024
    locator: "Page 18 (OCR), discussion of solar forecast errors"
    quote: "Under-forecasting generation from renewables may result in inefficient economic outcomes, but over-forecasting can lead to reliability issues if thermal units are not committed in time to compensate. This dynamic is particularly challenging during hot summer evenings, when solar output declines rapidly and demand remains elevated."
  - id: e32
    source: imm-som-2025
    locator: "Market Operations, C. Forecast Error, page 105 (OCR)"
    quote: "Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain."
  - id: e33
    source: imm-som-2025
    locator: "Congestion, page 83 (OCR)"
    quote: "Overall, congestion was approximately 7% higher in the real-time market than in the day-ahead market, likely because of forecast error for load and renewable generation and differences in thermal resource commitments between day-ahead and real time."
  - id: e34
    source: imm-som-2025
    locator: "Ancillary Services, AS Methodology, page 69 (OCR)"
    quote: "Assessing the operational risk that NSRS is meant to manage based on the six hour-ahead forecast error for demand and generation from intermittent renewables. This parameter inflates the target level of the AS Plan by 57% more than our recommendation of one hour-ahead forecast error."
  - id: e35
    source: imm-som-2025
    locator: "Day-ahead market, Figure 31 introduction, page 74 (OCR)"
    quote: "Figure 31 shows awards for three-part offers (i.e., three-part awards) for thermal and intermittent renewable resources (IRR), thermal capacity self- scheduled in Current Operating Plans (COPs) prior to the day-ahead RUC process (DRUC), and the day-ahead forecast for renewable generation."
  - id: e37
    source: imm-som-2025
    locator: "Ancillary Services, AS Methodology, page 69 (OCR)"
    quote: "For example, the procurement target for Regulation is set according to the 95\" percentile of net load forecast error based on a five-minute look-ahead."
  - id: e36
    source: ercot-as-methodology-2026
    locator: "Introduction (document status)"
    quote: "ERCOT Board Recommended approval on 09/23/2025 PUC Approved on 11/06/2025 Effective Date of 01/01/2026"
---

## Definition

The Short-Term Wind Power Forecast (STWPF) and Short-Term PhotoVoltaic Power Forecast (STPPF) are ERCOT-produced hourly 50% probability of exceedance forecasts of the generation in MWh per hour that each WGR or PVGR could produce from all its available units. [e1][e2] The related Production Potential values (WGRPP, PVGRPP) are allocated from the 80% probability of exceedance of the total ERCOT forecast. [e3][e4]

## How it works

**The chain, step by step.** Each hour ERCOT produces and updates a Total ERCOT Wind Power Forecast (TEWPF), a probability distribution of hourly wind production potential for each of the next 168 hours. [e17] ERCOT picks the 50% probability of exceedance case from that distribution, meaning the level actual total WGR production is expected to exceed 50% of the time, and allocates it to each WGR so that the individual STWPF values sum to the TEWPF value. [e5] The result is a rolling 168-hour hourly STWPF for each wind Resource. [e11] PV works the same way: a TEPPF distribution, a 50% probability of exceedance case, allocated across PVGRs to give the STPPF. [e21] The 80% exceedance Production Potential (WGRPP, PVGRPP) is a separate allocation, made from the 80% probability of exceedance case of the total forecast rather than the 50% case. [e3][e4]

**Inputs.** WGRPP forecasts are produced from information provided by WGR owners, including availability, meteorological information and SCADA. [e19] Under the current Section 4.2.2 text, each Generation Entity that owns a WGR must install and telemeter to ERCOT the site-specific meteorological information ERCOT determines is necessary, and ERCOT sets procedures for the accuracy of that telemetry. [e18]

**Short horizon.** Besides the hourly Resource-level forecasts, ERCOT posts every five minutes an Intra-Hour Wind Power Forecast (IHWPF) by wind region, covering ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model, and says which model it is using for Generation To Be Dispatched (GTBD) purposes. [e16] The Protocols define the IHWPF as the forecast of wind generation in MW in five minute increments. [e12] Section 4.2.3 sets the same structure for PV with an Intra-Hour PhotoVoltaic Power Forecast (IHPPF). [e25]

**Delivery.** Each hour ERCOT sends the STWPF and WGRPP for each WGR to the representing QSE through the Messaging System and posts them on the MIS Certified Area. [e20]

**Where they enter the market processes.** [e5][e6][e7][e23][e24]
- RUC: the updated STWPF for each hour for each WGR is an input into each RUC process. [e5] Section 3.13 says the Renewable Production Potential forecasts are an input to DRUC and HRUC. [e6]
- COP: for the first 168 hours ERCOT updates wind and solar HSL values with the latest STWPF or STPPF. [e7] A QSE may override, but only downward or equal: the submitted HSL must be less than or equal to the latest ERCOT forecast amount for that Resource. [e14]
- RUC settlement: when allocating the capacity-short charge, an IRR's available capacity is the lesser of its COP HSL and its WGRPP or PVGRPP at the time of RUC execution. [e23]
- Outage coordination: the preliminary OAE may not assume total renewable production lower than the sum of the selected WGRPP and PVGRPP forecasts for each hour, less any reasonably expected severe weather impacts. [e24]
- Day-ahead picture: the IMM's day-ahead supply chart (Figure 31) includes "the day-ahead forecast for renewable generation" alongside three-part awards and thermal self-commitments (the IMM's description of its chart, not a Protocol rule). [e35]

**Accuracy duty.** ERCOT must use best efforts to develop accurate and unbiased forecasts, limited by available explanatory data, and must post objective criteria and thresholds for unbiased, accurate forecasts within five Business Days of a change. [e13][e22]

## ERCOT context

The IMM treats forecast error as a market operations issue: the net demand forecast (demand minus expected IRR generation) is a major determinant of thermal commitment. [e8] An over-forecast of net demand can lead to sub-optimal commitment, and an under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC (IMM). [e30]

Accuracy has improved. The IMM says forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, though structural biases and growing variability remain. [e32] In its Figure 50 analysis of net load forecast errors eight hours ahead of real-time, the average error was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024, and IRR generation was under-forecast by only 89 MW on average. [e9][e15] Forecasts still systematically under-forecast IRR generation and over-forecast load, and wind dominates IRR forecast error variance. [e9]

The IMM's 2024 report ties the solar side to the evening: it says under-forecasting renewables may cause inefficient outcomes, while over-forecasting can cause reliability issues if thermal units are not committed in time, which is particularly challenging on hot summer evenings when solar output falls rapidly and demand stays elevated. [e31]

Forecast error also reaches prices and reserves. The IMM says real-time congestion was approximately 7% higher than day-ahead congestion in 2025, likely because of forecast error for load and renewable generation and differences in thermal commitments. [e33] In ancillary services, the IMM says Reg-Up and Reg-Down volumes rose 7.4% and 3.3% from 2024 to 2025 because of higher five-minute net load forecast error, and NSRS volumes rose 7.5%, driven by higher net load and solar forecast errors. [e29][e10]

## Formula

The forecast chain is not an equation in the Protocols, but the allocation rule is: ERCOT allocates the TEWPF 50% probability of exceedance forecast to each WGR such that the sum of the individual STWPF forecasts equals the TEWPF forecast, and the PV rule mirrors it. [e5][e21]

How forecast error enters reserve sizing (ERCOT's methodology effective 1 January 2026, Board-recommended 23 September 2025): [e36]
- Regulation: base Reg-Up is the 95th percentile of the positive net load (load minus wind minus solar) forecast error for the same month of the previous two years; base Reg-Down uses the 95th percentile of the negative error. [e26][e36]
- ERCOT then adds incremental MW from wind and solar forecast error adjustment tables, scaled by the increase in installed capacity, by month and hour. [e27]
- ECRS and Non-Spin: the risk accounting uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors plus forced outages, with an added adjustment for the expected growth in solar forecast error as installed solar grows. [e28]

## Key facts

- STWPF and STPPF are hourly 50% probability of exceedance forecasts per Resource; WGRPP and PVGRPP are based on 80% probability of exceedance. [e1][e2][e3][e4]
- The STWPF is a rolling 168-hour forecast updated hourly; the IHWPF is posted every five minutes for the next two hours. [e11][e16]
- COP HSL values for the first 168 hours are updated with the latest STWPF/STPPF; a QSE override cannot exceed the latest forecast. [e7][e14]
- 2025 average net load forecast error: about 452 MW (eight hours ahead of real-time); IRR under-forecast: 89 MW on average (IMM). [e9][e15]
- Wind dominates IRR forecast error variance. [e9]
- Reg-Up base requirement: 95th percentile of positive net load forecast error, same month of the previous two years (2026 methodology). [e26]
- The IMM objected to the 2026 NSRS design: it says using six-hour-ahead forecast error inflates the AS Plan target by 57% more than its recommended one-hour-ahead error (IMM view, not ERCOT's). [e34]

## Say it like this

(Guidance) ERCOT's wind and solar forecasts are median (50% exceedance) forecasts by Resource, used to set expected output for commitment and the COP, with a more conservative 80% exceedance version for production potential. [e1][e3] The IMM says accuracy has improved on average, while wind dominates the forecast error variance and the sizing of reserves leans on historical forecast error. [e9][e26]

## Common confusion

(Guidance) STWPF/STPPF are forecasts of what a Resource could produce given available units and weather; they are not a QSE's schedule. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL no higher than the latest STWPF amount for that Resource, and the same holds for a PVGR and the STPPF. [e14] Do not confuse the 50% exceedance forecast with the 80% exceedance production-potential value. [e1][e3] Also keep the horizons apart: the IMM's 452 MW figure is eight hours ahead, the Reg-Up requirement uses a five-minute look-ahead in the IMM's description, and ERCOT's ECRS/NSRS method uses 30-minute and 6-hour errors. [e15][e37][e28]

## Questions

### What does "50% probability of exceedance" mean in the STWPF?

ERCOT selects the forecast that actual total ERCOT WGR production is expected to exceed 50% of the time, then allocates it to each WGR so the individual forecasts sum to the total. [e5]

### Where are these forecasts used?

As RUC inputs (DRUC, HRUC), to update COP HSL values for the first 168 hours, in the RUC capacity-short calculation for IRRs, and as a floor on renewable production assumed in the preliminary OAE. [e6][e7][e23][e24]

### How accurate are ERCOT's renewable forecasts per the IMM?

IRR generation was under-forecast by only 89 MW on average in 2025, with net load error about 452 MW eight hours ahead, though wind keeps dominating the variance. [e9][e15]

### Why does a growing solar fleet raise reserve requirements even if percentage forecast accuracy holds?

ERCOT's methodology says an increase in solar capacity tends to increase the MW quantity of forecast error, so relying on historical solar errors alone could under-estimate ECRS and NSRS; it adds an adjustment for the expected growth. [e28] The IMM separately reports that forecast variance has increased with the expansion of IRR capacity, particularly solar. [e9]

### Why does an over-forecast of renewables matter more on a summer evening?

The IMM says over-forecasting can cause reliability issues if thermal units are not committed in time, and that this is particularly challenging on hot summer evenings when solar output falls rapidly and demand stays elevated. [e31]

### What if a QSE thinks its wind farm will produce more than the STWPF?

It cannot raise its COP HSL above the latest STWPF amount; overrides may only be less than or equal to it. [e14]

## Scenarios

### A cloudy afternoon: the solar forecast was too high at the RUC run

- The updated STPPF feeds each RUC process. [e21] The IMM's 2024 report says over-forecasting renewable generation can lead to reliability issues if thermal units are not committed in time to compensate. [e31]
- The IMM says an under-forecast of net demand can lead to insufficient thermal commitments and real-time shortfalls often addressed through RUC. [e30] Net demand is demand minus expected IRR generation [e8], so by the knowledge base's own arithmetic an over-forecast of IRR output, with demand unchanged, understates net demand.
- In RUC settlement, the IRR's capacity counted toward its QSE's position is the lesser of its COP HSL and its production potential at RUC execution. [e23]

## Open items

- Deeper pass: the TEWPF/TEPPF model methodology, model selection and vendor details are not in the saved sources (Protocols say only that ERCOT uses "each forecast model" and posts which one populates the COP).
- DC-Coupled Resource treatment of STWPF/STPPF sits in pending NPRR1029 replacement text in np-03 and np-04; deliberately not used. The np-04 paragraphs quoted here are the current text, which refers to Generation Entities rather than Resource Entities.
- The same COP paragraph (8) has separate override rules for DC-Coupled Resources; they sit in pending-style language not used here.
- No source gave forecast error by hour of day for solar, or bias statistics for wind alone. The IMM's Figure 50 values for 2021 to 2022 and the 2023/2024 exact averages ("more than 1,000 MW") are not given more precisely.
- The ERCOT monthly operations report for October 2026 charts day-ahead net load forecast mean absolute error against a 4,000 MW KPI goal, but the saved text has no extractable monthly values, so no figure is cited.
- Resolved 2026-11-21: the five-minute Intra-Hour forecast, TEWPF, and RUC capacity-short use of production potential were added from np-03/np-04/np-05.
