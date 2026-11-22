# Audit packet: Wind & Solar Forecasts (STWPF, STPPF) (wind-solar-forecasts)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (2) · text copy line 326 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: ERCOT shall use the probabilistic TEWPF and select the forecast that the actual total ERCOT WGR production is expected to exceed 50% of the time (50% probability of exceedance forecast). To produce the STWPF, ERCOT will allocate the TEWPF 50% probability of exceedance forecast to each WGR such that the sum of the individual STWPF forecasts equal the TEWPF forecast. The updated STWPF forecasts for each hour for each WGR are to be used as input into each Reliability Unit Commitment (RUC) process as per Section 5, Transmission Security Analysis and Reliability Unit Commitment.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.13, Renewable Production Potential Forecasts, paragraph (1) · text copy line 6341 · heading above: 3.13 Renewable Production Potential Forecasts

BEFORE: …oads for the next 168 hours based on current weather forecast parameters within each Study Area. (a) The forecast referenced in paragraph (1) above will not affect the values within the "Seven-Day Load Forecast" by Weather Zone and/or Forecast Zone. 3.13 Renewable Production Potential Forecasts (1) 
QUOTE: ERCOT shall produce forecasts of Renewable Production Potential (RPP) for Wind-powered Generation Resources (WGRs) and PhotoVoltaic Generation Resources (PVGRs) to be used as an input into the Day-Ahead Reliability Unit Commitment (DRUC) and Hour-Ahead Reliability Unit Commitment (HRUC).
AFTER:  ERCOT shall produce the forecasts using information provided by WGR/PVGR Entities, meteorological information, and Supervisory Control and Data Acquisition (SCADA). WGR and PVGR Entities shall install telemetry at their respective Resources and transmit the ERCOT-specified site-specific meteorologi…

### e7 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …t for a Combined Cycle Generation Resource shall be determined by the positive transition cost from the On-Line Combined Cycle Generation Resource within the Combine Cycle Train or from a shutdown condition, whichever ERCOT determines to be appropriate. (7) ERCOT may accept COPs only from QSEs. (8) 
QUOTE: For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF).
AFTER:  ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most re…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error · text copy line 6596

BEFORE: …hapter III.E. Stakeholders support these initiatives in hopes of reducing the heavy-handed use of RUC, but in practice, the initiatives distort market outcomes and undermine genuine shortage pricing. C. Forecast Error Effective market operations must account for forecast error in demand and supply. 
QUOTE: The net demand forecast, defined as demand minus expected generation from intermittent renewable resources (IRRs), is a major determinant of thermal resource commitment decisions.
AFTER:  An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. Figure 50 illustrates the distribution of net load forecast errors …

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 discussion · text copy line 6614

BEFORE: …25 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain. 
QUOTE: By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load. IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar. Despite this growth in solar resources, wind generation continues to dominate total IRR forecast error variance because of its higher volatility and lower predictability.
AFTER:  D. QSE Operation Planning The Current Operating Plan (COP) is the mechanism QSEs use to communicate the expected status of their resources to ERCOT. QSEs update COPs continuously for each operating hour. Two COP elements are especially important for the RUC process: the hourly schedules for resourc…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services, NSRS volumes · text copy line 3890

BEFORE: …procurement volumes changed notably across products: • ECRS volume decreased by over 19% because of the removal of the "adjustment for risk coverage" during sunset hours. • Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error. • 
QUOTE: NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors.
AFTER:  Our section on ERCOT's AS Methodology provides more detail on this topic. Figure 24: Average Ancillary Service Capacity by Month !"#A%%&'()*+',A#+)-+./A'+M+"1)234R "!#!!! +#!!! U9:;<4:=>9 OMUM J , U9?@A; U9?@3<B4 CaUM *#!!! F#!!! E#!!! D#!!! C#!!! %#!!! A#!!! "#!!! ! , . / . , A!AD / M N O 3 A" AA …

### e23 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2) · text copy line 1634 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …y Emergency Alert (EEA) condition and that is shown as On-Line in its COP; or (d) If the Settlement Interval is a RUCAC-Interval, the Combined Cycle Generation Resource that was QSE-committed at the time the RUCAC was issued, excluding the condition for SWGRs as describe in paragraph (c) above. (2) 
QUOTE: In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution.
AFTER:  For an IRR, the RCAPSNAP variable used below shall be equal to the minimum of the WGRPP or PVGRPP described above and the HSL value as reflected in the QSE's COP, at the time of the RUC execution. (3) In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Inte…

### e26 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Regulation Service Requirement Details, Procedure · text copy line 41

BEFORE: …d regulation or net load variability. An adjustment may also be made based on historic CPS1 performance. Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. 
QUOTE: For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load - wind - solar) forecast error for the same month of the previous two years. For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load - wind - solar) forecast error for the same month of the previous two years.
AFTER:  To better reflect balancing needs within the hours, the net load variability may be updated to account for accumulated Area Control Error (ACE). In order to consider the increased amount of wind and solar penetration, ERCOT will calculate the increase in installed wind and solar generation capacity…

### e28 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years. ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation of the total requirement of ECRS and NSRS. To address this ERCOT will include an adjustment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources.
AFTER:  Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes. The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of …

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, page 104 (OCR) · ocr copy line 4509, OCR page 104

BEFORE: …e shortage pricing. C. Forecast Error Effective market operations must account for forecast error in demand and supply. The net demand forecast, defined as demand minus expected generation from intermittent renewable resources (IRRs), is a major determinant of thermal resource commitment decisions. 
QUOTE: An over- forecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC.
AFTER:  Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time. Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 s 2 3,000 verage = 2,000 £ 5 1,000 2 0 S J £ s -1,000 a = -2,000 3 -3,000 a) = -4,000 = = -5,000 Zz 2022 H2 2023 2024 2025 82 | 2025 Sta…

## Statements to check (new or changed since the last audit)

- **Link to wind-generation** (cites e9): related Wind Generation: Wind generation dominates total IRR forecast error variance. [e9]
- **Link to solar-generation** (cites e10) FLAG number-not-in-quote: 2025: related Solar Generation: The IMM says higher net load and solar forecast errors drove a 7.5% rise in NSRS volumes in its 2025 ancillary service discussion. [e10]
- **Link to load-forecasting** (cites e8, e9): related Load Forecasting: Net demand is demand minus expected IRR generation, and the IMM reports net load forecast error alongside under-forecast IRR generation and over-forecast load. [e8][e9]
- **Link to ruc** (cites e5, e6): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): The STWPF and the renewable production potential forecasts are inputs to the Reliability Unit Commitment processes. [e5][e6]
- **Link to ruc-make-whole** (cites e23): used-in RUC Make-Whole & Clawback: In the RUC capacity-short calculation an IRR's available capacity is the lesser of its COP HSL and its production potential at the time of RUC execution. [e23]
- **Link to cop** (cites e7): used-in COP (Current Operating Plan): For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF and STPPF. [e7]
- **Link to net-load** (cites e8): related Net Load: The net demand forecast, demand minus expected IRR generation, is a major determinant of thermal commitment decisions. [e8]
- **Link to ancillary-services** (cites e10): related Ancillary Services (AS): Net load and solar forecast errors drive the volumes of some ancillary services. [e10]
- **Link to regulation** (cites e26): related Regulation Up / Down: The base Reg-Up and Reg-Down requirement is set from the 95th percentile of net load forecast error for the same month of the previous two years. [e26]
- **Link to non-spin** (cites e28) FLAG number-not-in-quote: 2026: related Non-Spinning Reserve: ERCOT's 2026 methodology uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors, with a solar adjustment, to size ECRS and Non-Spin. [e28]
- **Link to sc-load-forecast-miss** (cites e30) FLAG number-not-in-quote: 3 GW: related Scenario: Your Load Forecast Missed by 3 GW: The IMM says an under-forecast of net demand can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. [e30]

