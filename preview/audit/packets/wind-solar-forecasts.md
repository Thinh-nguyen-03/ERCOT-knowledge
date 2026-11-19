# Audit packet: Wind & Solar Forecasts (STWPF, STPPF) (wind-solar-forecasts)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Short-Term Wind Power Forecast (STWPF) · text copy line 2963

BEFORE: …a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource. Short-Term Wind Power Forecast (STWPF) 
QUOTE: An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each WGR that could be generated from all available units of that Resource.
AFTER:  Simple Transmission Outage (see Outage) Split Generation Resource (see Resource Attribute) Startup Cost All costs incurred by a Generation Resource in starting up and reaching Low Sustained Limit (LSL), as described in the Verifiable Cost Manual. The Startup Cost is in dollars per start. Startup Lo…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Short-Term PhotoVoltaic Power Forecast (STPPF) · text copy line 2959

BEFORE: …r decreasing, respectively, the amount of the commodity being made available. Shift Factor A measure of the flow on a particular Transmission Element due to a unit injection of power from a particular Electrical Bus to a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) 
QUOTE: An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource.
AFTER:  Short-Term Wind Power Forecast (STWPF) An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each WGR that could be generated from all available units of that Resource. Simple Transmission Outage (see Outage) Split Generation Resource (see Resource A…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Wind-powered Generation Resource Production Potential (WGRPP) · text copy line 3297

BEFORE: …) data, Resource-specific Extensible Markup Language (XML) data, or any of the operational voice data described in Nodal Operating Guide Section 7.1, ERCOT Wide Area Network. Wind-powered Generation Resource (WGR) (see Resource Category) Wind-powered Generation Resource Production Potential (WGRPP) 
QUOTE: The generation in MWh per hour from a WGR that could be generated from all available units of that Resource allocated from the 80% probability of exceedance of the Total ERCOT Wind Power Forecast (TEWPF).
AFTER:  X [Back to Top] Y [Back to Top] Z [Back to Top] 2.2 ACRONYMS AND ABBREVIATIONS 4-CP 4-Coincident Peak AAA American Arbitration Association AAN Advance Action Notice AASP Average Aggregated Set Point ACE Area Control Error ACH Automated Clearing House ACL Available Credit Limit ADR Alternative Dispu…

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of PhotoVoltaic Generation Resource Production Potential (PVGRPP) · text copy line 2006

BEFORE: …r months are December, January, and February. PhotoVoltaic (PV) Of or pertaining to a material or device in which electricity is generated as a result of exposure to light. PhotoVoltaic Generation Resource (PVGR) (see Resource Category) PhotoVoltaic Generation Resource Production Potential (PVGRPP) 
QUOTE: The generation in MWh per hour from a PVGR that could be generated from all available units of that Resource allocated from the 80% probability of exceedance of the Total ERCOT PhotoVoltaic Power Forecast (TEPPF).
AFTER:  Physical Responsive Capability (PRC) A representation of the total amount of frequency responsive Resource capability On-Line in Real-Time. Planned Outage (see Outage) Planning Reserve Margin (PRM) The net of total capacity for the Peak Load Season, less firm peak Load for the Peak Load Season, div…

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

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1) · text copy line 317 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …cillary Service Obligation based on the total DAM Ancillary Service procurement quantity, comprised of DAM Ancillary Service awards and Self-Arranged Ancillary Service Quantities for each service and for each hour of the Operating Day. 4.2.2 Wind-Powered Generation Resource Production Potential (1) 
QUOTE: ERCOT shall produce and update hourly a Short-Term Wind Power Forecast (STWPF) that provides a rolling 168-hour hourly forecast of wind production potential for each Wind-powered Generation Resource (WGR).
AFTER:  ERCOT shall produce and post to the ERCOT website every five minutes an Intra-Hour Wind Power Forecast (IHWPF) by wind region that provides a forecast of ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model. The posting shall indicate w…

### e12 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Intra-Hour Wind Power Forecast (IHWPF) · text copy line 1313

BEFORE: …nterval Data Recorder Mandatory Installation Requirements. Intra-Hour Load Forecast (IHLF) The Load forecast in five minute increments. Intra-Hour PhotoVoltaic Power Forecast (IHPPF) The forecast of PhotoVoltaic (PV) generation in MW in five minute increments. Intra-Hour Wind Power Forecast (IHWPF) 
QUOTE: The forecast of wind generation in MW in five minute increments.
AFTER:  Invoice A notice for payment or credit due rendered by ERCOT. Invoice Recipient A Market Participant that receives an Invoice from ERCOT. Isochronous Control Capable Resource A Resource that is capable of controlling frequency in isochronous control mode instead of droop control mode during a Black…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.13, Renewable Production Potential Forecasts, paragraph (2) · text copy line 6350 · heading above: 3.13 Renewable Production Potential Forecasts

BEFORE: …-----------------------------------------------------------------------------------------------------------------+ (2) ERCOT shall develop cost-effective tools or services to forecast energy production from Intermittent Renewable Resources (IRRs) with technical assistance from QSEs scheduling IRRs. 
QUOTE: ERCOT shall use its best efforts to develop accurate and unbiased forecasts, as limited by the availability of relevant explanatory data.
AFTER:  ERCOT shall post on the ERCOT website objective criteria and thresholds for unbiased, accurate forecasts within five Business Days of change. +------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: … Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF). ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. 
QUOTE: A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 introduction · text copy line 6600

BEFORE: …), is a major determinant of thermal resource commitment decisions. An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. 
QUOTE: Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time.
AFTER:  Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. Ho…

## Statements to check

- **Definition #1** (cites e1, e2, e3, e4): The Short-Term Wind Power Forecast (STWPF) and Short-Term PhotoVoltaic Power Forecast (STPPF) are ERCOT-produced hourly 50% probability of exceedance forecasts of the generation in MWh per hour that each WGR or PVGR could produce from all its available units. [e1][e2] The related Production Potential values (WGRPP, PVGRPP) are allocated from the 80% probability of exceedance of the total ERCOT forecast. [e3][e4]
- **How it works #1** (cites e11, e5, e12): ERCOT produces the STWPF hourly as a rolling 168-hour forecast for each wind Resource. [e11] It starts from a probabilistic Total ERCOT Wind Power Forecast, picks the 50% probability of exceedance case (the level actual production is expected to exceed 50% of the time) and allocates it to each Resource so the individual forecasts sum to the total. [e5] The Protocols also define an Intra-Hour Wind Power Forecast as the forecast of wind generation in MW in five-minute increments. [e12]
- **How it works #2** (cites e6, e5, e7, e13): The forecasts feed operations. They are inputs to the Day-Ahead and Hour-Ahead Reliability Unit Commitment, and the STWPF is used in each RUC process. [e6][e5] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF or STPPF. [e7] Protocols require ERCOT to use best efforts to develop accurate and unbiased forecasts, limited by the available data. [e13]
- **ERCOT context #1** (cites e8, e9, e15): The IMM treats forecast error as a market operations issue: the net demand forecast (demand minus expected IRR generation) is a major determinant of thermal commitment. [e8] Accuracy has improved: in the IMM's Figure 50 analysis of net load forecast errors eight hours ahead of real-time, the average error was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024, and IRR generation was under-forecast by only 89 MW on average. [e9][e15] Bias remains: forecasts systematically under-forecast IRR generation and over-forecast load, and wind dominates IRR forecast error variance. [e9]
- **ERCOT context #2** (cites e10) FLAG number-not-in-quote: 2025: Forecast error shows up in ancillary service procurement: the IMM says that in its 2025 ancillary service procurement discussion NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors. [e10]
- **Key facts #1** (cites e1, e2, e3, e4): - STWPF and STPPF are hourly 50% probability of exceedance forecasts per Resource; WGRPP and PVGRPP are based on 80% probability of exceedance. [e1][e2][e3][e4]
- **Key facts #2** (cites e11): - The STWPF is a rolling 168-hour forecast updated hourly. [e11]
- **Key facts #3** (cites e9, e15): - 2025 average net load forecast error: about 452 MW (eight hours ahead of real-time); IRR under-forecast: 89 MW on average (IMM). [e9][e15]
- **Key facts #4** (cites e9): - Wind dominates IRR forecast error variance. [e9]
- **Key facts #5** (cites e7): - COP HSL values for the first 168 hours are updated with the latest STWPF/STPPF. [e7]
- **Say it like this #1** (cites e1, e3, e9): (Guidance) ERCOT's wind and solar forecasts are median (50% exceedance) forecasts by Resource, used to set expected output for commitment and the COP, with an 80% exceedance version (a lower output level) for production potential. [e1][e3] The IMM says accuracy has improved on average, while wind dominates the forecast error variance. [e9]
- **Common confusion #1** (cites e14, e1, e3): (Guidance) STWPF/STPPF are forecasts of what a Resource could produce given available units and weather; they are not a QSE's schedule. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL no higher than the latest STWPF amount for that Resource, and the same holds for a PVGR and the STPPF. [e14] Do not confuse the 50% exceedance forecast with the 80% exceedance production-potential value. [e1][e3]
- **Questions #2** (cites e5): ERCOT selects the forecast that actual total ERCOT WGR production is expected to exceed 50% of the time. [e5]
- **Questions #4** (cites e6, e7): As RUC inputs (DRUC, HRUC) and to update COP HSL values for the first 168 hours. [e6][e7]
- **Questions #6** (cites e9): IRR generation was under-forecast by only 89 MW on average in 2025, with net load error about 452 MW, though wind keeps dominating the variance. [e9]
- **Link to wind-generation** (cites e9): related Wind Generation: Wind generation dominates total IRR forecast error variance. [e9]
- **Link to solar-generation** (cites e10) FLAG number-not-in-quote: 2025: related Solar Generation: The IMM says higher net load and solar forecast errors drove a 7.5% rise in NSRS volumes in its 2025 ancillary service discussion. [e10]
- **Link to load-forecasting** (cites e8, e9): related Load Forecasting: Net demand is demand minus expected IRR generation, and the IMM reports net load forecast error alongside under-forecast IRR generation and over-forecast load. [e8][e9]
- **Link to ruc** (cites e5, e6): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): The STWPF and the renewable production potential forecasts are inputs to the Reliability Unit Commitment processes. [e5][e6]
- **Link to cop** (cites e7): used-in COP (Current Operating Plan): For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the latest STWPF and STPPF. [e7]
- **Link to net-load** (cites e8): related Net Load: The net demand forecast, demand minus expected IRR generation, is a major determinant of thermal commitment decisions. [e8]
- **Link to ancillary-services** (cites e10): related Ancillary Services (AS): Net load and solar forecast errors drive the volumes of some ancillary services. [e10]
