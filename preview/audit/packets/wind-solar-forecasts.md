# Audit packet: Wind & Solar Forecasts (STWPF, STPPF) (wind-solar-forecasts)

kind concept · domain fundamentals · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Short-Term Wind Power Forecast (STWPF) · text copy line 2963

BEFORE: …a fixed reference Electrical Bus. Short-Term PhotoVoltaic Power Forecast (STPPF) An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each PVGR that could be generated from all available units of that Resource. Short-Term Wind Power Forecast (STWPF) 
QUOTE: An ERCOT produced hourly 50% probability of exceedance forecast of the generation in MWh per hour from each WGR that could be generated from all available units of that Resource.
AFTER:  Simple Transmission Outage (see Outage) Split Generation Resource (see Resource Attribute) Startup Cost All costs incurred by a Generation Resource in starting up and reaching Low Sustained Limit (LSL), as described in the Verifiable Cost Manual. The Startup Cost is in dollars per start. Startup Lo…

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

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1) · text copy line 317 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …ch hour of the Operating Day. 4.2.2 Wind-Powered Generation Resource Production Potential (1) ERCOT shall produce and update hourly a Short-Term Wind Power Forecast (STWPF) that provides a rolling 168-hour hourly forecast of wind production potential for each Wind-powered Generation Resource (WGR). 
QUOTE: ERCOT shall produce and post to the ERCOT website every five minutes an Intra-Hour Wind Power Forecast (IHWPF) by wind region that provides a forecast of ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model. The posting shall indicate which forecast model was being used by ERCOT for Generation To Be Dispatched (GTBD) calculation purposes.
AFTER:  ERCOT shall produce and update an hourly Total ERCOT Wind Power Forecast (TEWPF) providing a probability distribution of the hourly production potential from all wind-power in ERCOT for each of the next 168 hours. Each Generation Entity that owns a WGR shall install and telemeter to ERCOT the site-…

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1) · text copy line 317 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …IHWPF) by wind region that provides a forecast of ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model. The posting shall indicate which forecast model was being used by ERCOT for Generation To Be Dispatched (GTBD) calculation purposes. 
QUOTE: ERCOT shall produce and update an hourly Total ERCOT Wind Power Forecast (TEWPF) providing a probability distribution of the hourly production potential from all wind-power in ERCOT for each of the next 168 hours.
AFTER:  Each Generation Entity that owns a WGR shall install and telemeter to ERCOT the site-specific meteorological information that ERCOT determines is necessary to produce the STWPF and TEWPF forecasts. ERCOT shall establish procedures specifying the accuracy requirements of WGR meteorological informati…

### e18 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (1) · text copy line 317 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: … was being used by ERCOT for Generation To Be Dispatched (GTBD) calculation purposes. ERCOT shall produce and update an hourly Total ERCOT Wind Power Forecast (TEWPF) providing a probability distribution of the hourly production potential from all wind-power in ERCOT for each of the next 168 hours. 
QUOTE: Each Generation Entity that owns a WGR shall install and telemeter to ERCOT the site-specific meteorological information that ERCOT determines is necessary to produce the STWPF and TEWPF forecasts. ERCOT shall establish procedures specifying the accuracy requirements of WGR meteorological information telemetry.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraph (3) · text copy line 335 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (3) 
QUOTE: ERCOT shall produce the Wind-powered Generation Resource Production Potential (WGRPP) forecasts using the information provided by WGR owners including WGR availability, meteorological information, and Supervisory Control and Data Acquisition (SCADA).
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.2, Wind-Powered Generation Resource Production Potential, paragraphs (4) and (5) · text copy line 344 · heading above: 4.2.2 Wind-Powered Generation Resource Production Potential

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (4) 
QUOTE: Each hour, ERCOT shall provide, through the Messaging System, the STWPF and WGRPP forecasts for each WGR to the QSE that represents that WGR and shall post each STWPF and WGRPP forecast on the MIS Certified Area.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, paragraph (2) · text copy line 384 · heading above: 4.2.3 PhotoVoltaic Generation Resource Production Potential

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: ERCOT shall use the probabilistic TEPPF and select the forecast that the actual total ERCOT PVGR production is expected to exceed 50% of the time (50% probability of exceedance forecast). To produce the STPPF, ERCOT will allocate the TEPPF 50% probability of exceedance forecast to each PVGR such that the sum of the individual STPPF forecasts equal the TEPPF forecast.
AFTER:  The updated STPPF forecasts for each hour for each PVGR are to be used as input into each RUC process as per Section 5, Transmission Security Analysis and Reliability Unit Commitment. +------------------------------------------------------------------------------------------------------------------…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.13, Renewable Production Potential Forecasts, paragraph (2) · text copy line 6350 · heading above: 3.13 Renewable Production Potential Forecasts

BEFORE: … cost-effective tools or services to forecast energy production from Intermittent Renewable Resources (IRRs) with technical assistance from QSEs scheduling IRRs. ERCOT shall use its best efforts to develop accurate and unbiased forecasts, as limited by the availability of relevant explanatory data. 
QUOTE: ERCOT shall post on the ERCOT website objective criteria and thresholds for unbiased, accurate forecasts within five Business Days of change.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e23 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.7.4.1.1, Capacity Shortfall Ratio Share, paragraph (2) · text copy line 1634 · heading above: 5.7.4.1.1 Capacity Shortfall Ratio Share

BEFORE: …y Emergency Alert (EEA) condition and that is shown as On-Line in its COP; or (d) If the Settlement Interval is a RUCAC-Interval, the Combined Cycle Generation Resource that was QSE-committed at the time the RUCAC was issued, excluding the condition for SWGRs as describe in paragraph (c) above. (2) 
QUOTE: In calculating the amount short for each QSE, the available capacity of an IRR when determining responsibility for the corresponding RUC charges shall be the lesser of the HSL value, as reflected in the COP, and the Wind-powered Generation Resource Production Potential (WGRPP), as described in Section 4.2.2, Wind-Powered Generation Resource Production Potential, for a Wind-powered Generation Resource (WGR), or the PhotoVoltaic Generation Resource Production Potential (PVGRPP), as described in Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, for a PhotoVoltaic Generation Resource (PVGR), at the time of RUC execution.
AFTER:  For an IRR, the RCAPSNAP variable used below shall be equal to the minimum of the WGRPP or PVGRPP described above and the HSL value as reflected in the QSE's COP, at the time of the RUC execution. (3) In calculating the amount short for each QSE, the QSE must be given a capacity credit for non-Inte…

### e24 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.1.6.9, Withdrawal of Approval and Rescheduling of Approved Planned Outages of Resource Facilities, paragraph (7) · text copy line 1381 · heading above: 3.1.6.9 Withdrawal of Approval and Rescheduling of Approved Planned Outages of Resource Facilities

BEFORE: … AAN increases, ERCOT shall update the AAN and may repeat the process described in this section. For any subsequent iterations of this process, ERCOT shall issue the updated AAN with as much lead time as is practical prior to starting any subsequent OAE, but with a minimum of two hours' notice. (7) 
QUOTE: The preliminary OAE may not assume total renewable production lower than the sum of the selected Wind-powered Generation Resource Production Potential (WGRPP) and PhotoVoltaic Generation Resource Production Potential (PVGRPP) forecasts for each hour less any reasonably expected severe weather impacts.
AFTER:  The available capacity in ERCOT's planning assessment must include targeted reserve levels and include forecasted capacity available through DC Tie imports or curtailment of DC Tie exports, forecasted capacity provided from Settlement Only Distributed Generators (SODGs) and Settlement Only Transmis…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.2.3, PhotoVoltaic Generation Resource Production Potential, paragraph (1) · text copy line 375 · heading above: 4.2.3 PhotoVoltaic Generation Resource Production Potential

BEFORE: …nute period. 4.2.3 PhotoVoltaic Generation Resource Production Potential (1) ERCOT shall produce and update hourly a Short-Term PhotoVoltaic Power Forecast (STPPF) that provides a rolling 168-hour hourly forecast of PhotoVoltaic production potential for each PhotoVoltaic Generation Resource (PVGR). 
QUOTE: ERCOT shall produce and post to the ERCOT website every five minutes an Intra-Hour PhotoVoltaic Power Forecast (IHPPF) by PhotoVoltaic region that provides a forecast of ERCOT-wide PhotoVoltaic production potential for each five-minute interval over the next two hours from each forecast model.
AFTER:  The posting shall indicate which forecast model was being used by ERCOT for GTBD calculation purposes. ERCOT shall produce and update an hourly Total ERCOT PhotoVoltaic Power Forecast (TEPPF) providing a probability distribution of the hourly production potential from all PhotoVoltaic Generation Re…

### e26 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Regulation Service Requirement Details, Procedure · text copy line 41

BEFORE: …d regulation or net load variability. An adjustment may also be made based on historic CPS1 performance. Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. 
QUOTE: For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load - wind - solar) forecast error for the same month of the previous two years. For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load - wind - solar) forecast error for the same month of the previous two years.
AFTER:  To better reflect balancing needs within the hours, the net load variability may be updated to account for accumulated Area Control Error (ACE). In order to consider the increased amount of wind and solar penetration, ERCOT will calculate the increase in installed wind and solar generation capacity…

### e27 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Regulation Service Requirement Details, Procedure · text copy line 43

BEFORE: …ct balancing needs within the hours, the net load variability may be updated to account for accumulated Area Control Error (ACE). In order to consider the increased amount of wind and solar penetration, ERCOT will calculate the increase in installed wind and solar generation capacity, respectively. 
QUOTE: Then, depending on the month of the year and the hour of the day, ERCOT will add incremental MWs that are derived using the wind and solar forecast error adjustment tables and associated increase in wind and solar generation capacity, to the values determined above.
AFTER:  The wind and solar forecast error adjustment tables for incremental MWs for Reg-Up and Reg-Down come from the study ERCOT performs annually, using similar techniques as the 2008 GE wind study, but using actual wind and solar data respectively. The increase in wind (or solar) generation capacity wil…

### e28 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ECRS and Non-Spin Requirement Details, Procedure · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years. ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation of the total requirement of ECRS and NSRS. To address this ERCOT will include an adjustment for expected increase in solar forecast error due to expected increase in installed capacity of solar Resources.
AFTER:  Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes. The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of …

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services, page 68 (OCR), procurement volume changes 2024 to 2025 · text copy line 3885

BEFORE: …ubsequent years and remained roughly the same from 2024 to 2025. 31 Despite the consistent total volume of ancillary services, procurement volumes changed notably across products: • ECRS volume decreased by over 19% because of the removal of the "adjustment for risk coverage" during sunset hours. • 
QUOTE: Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error.
AFTER:  • NSRS volumes rose by 7.5%, driven by higher net load and solar forecast errors. Our section on ERCOT's AS Methodology provides more detail on this topic. Figure 24: Average Ancillary Service Capacity by Month !"#A%%&'()*+',A#+)-+./A'+M+"1)234R "!#!!! +#!!! U9:;<4:=>9 OMUM J , U9?@A; U9?@3<B4 CaUM…

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, page 104 (OCR) · ocr copy line 4509, OCR page 104

BEFORE: …e shortage pricing. C. Forecast Error Effective market operations must account for forecast error in demand and supply. The net demand forecast, defined as demand minus expected generation from intermittent renewable resources (IRRs), is a major determinant of thermal resource commitment decisions. 
QUOTE: An over- forecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC.
AFTER:  Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time. Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 s 2 3,000 verage = 2,000 £ 5 1,000 2 0 S J £ s -1,000 a = -2,000 3 -3,000 a) = -4,000 = = -5,000 Zz 2022 H2 2023 2024 2025 82 | 2025 Sta…

### e31 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Page 18 (OCR), discussion of solar forecast errors · text copy line 1200

BEFORE: …nificantly impact total solar output. However, the rapid growth of solar as a share of the overall generation mix means that forecasting errors now have greater absolute consequences for system reliability. Indeed, forecast errors for intermittent renewables directly impact thermal unit commitment. 
QUOTE: Under-forecasting generation from renewables may result in inefficient economic outcomes, but over-forecasting can lead to reliability issues if thermal units are not committed in time to compensate. This dynamic is particularly challenging during hot summer evenings, when solar output declines rapidly and demand remains elevated.
AFTER:  ESRs are well-suited to manage this kind of reliability risk. They can quickly ramp up output to meet demand during brief shortfalls or bridge the evening transition between declining solar and ramping wind. However, ERCOT's current dispatch engine, Security-Constrained Economic Dispatch (SCED), op…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, page 105 (OCR) · text copy line 6612

BEFORE: …al commitments and real-time shortfalls that are often addressed through RUC. Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time. Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations 
QUOTE: Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain.
AFTER:  By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load. IRR generation itself was under-forecast by only 89 MW on average in 2025, indicat…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Congestion, page 83 (OCR) · text copy line 5283

BEFORE: …net load forecast errors, forced outages, and other deviations from expected conditions. Figure 37 summarizes monthly real-time congestion for 2025 and annual values from 2021 through 2025. This figure shows that real-time congestion in 2025 followed trends similar to those in the day-ahead market. 
QUOTE: Overall, congestion was approximately 7% higher in the real-time market than in the day-ahead market, likely because of forecast error for load and renewable generation and differences in thermal resource commitments between day-ahead and real time.
AFTER:  2025 State of the Market Report | 61 / / Transmission Congestion and CRRs Figure 37: Value of Real-Time Congestion by Zone !(%""" RST8 JVO8W /V;8W <VOT8VN Z;VTT>?VNS @AHBCAZBa34OS !D#" !D"" !C#" !D%#"" !D%""" !C%#"" !C"" !C%""" !A#" !A%#"" !A"" !A%""" !#" !#"" !" !" F G H , H F F , J . / M C"C# !""…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services, AS Methodology, page 69 (OCR) · text copy line 4477

BEFORE: …rve targets to meet a one-in-ten standard for the probability of entering a "Watch," defined as reserves dropping below 3,000 MW, rather than for the probability of firm load shed, defined as reserves dropping below 1,500 MW. This parameter increases the AS Plan target level by approximately 43%. • 
QUOTE: Assessing the operational risk that NSRS is meant to manage based on the six hour-ahead forecast error for demand and generation from intermittent renewables. This parameter inflates the target level of the AS Plan by 57% more than our recommendation of one hour-ahead forecast error.
AFTER:  • Accrediting the available headroom of ESRs for NSRS based on the power output they can sustain for four hours rather than our recommendation of one hour. This parameter inflates the target level of the AS Plan by another 29%. Together, these inputs yield the proposed AS Methodology, which procure…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-ahead market, Figure 31 introduction, page 74 (OCR) · ocr copy line 3222, OCR page 74 · heading above: 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0 5.5

BEFORE: … real-time prices from transactions outside the ERCOT wholesale market. Less than half of physical real-time generation in ERCOT is scheduled through the day-ahead market, so resources scheduled after the DAM must provide the remaining supply needed to satisfy real-time load, as shown in Figure 31. 
QUOTE: Figure 31 shows awards for three-part offers (i.e., three-part awards) for thermal and intermittent renewable resources (IRR), thermal capacity self- scheduled in Current Operating Plans (COPs) prior to the day-ahead RUC process (DRUC), and the day-ahead forecast for renewable generation.
AFTER:  Figure 31: Day-Ahead Schedule/Forecast of Physical Generation GaThree-Part Awards (non-IRR) G0Three-Part Awards (IRR) HSelf Commit GzIncremental Renewable Forecast @eRT Load 80 = o 70 & 3 60 Ey oO 50 z 3 40 Capacity/ 3 Forecast o before z 30 DRUC 2 20 < Capacity f Pp a 10 physically scheduled 0 in …

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services, AS Methodology, page 69 (OCR) · ocr copy line 2994, OCR page 69 · heading above: 0.0 0%

BEFORE: …m reliability. Historically, the ERCOT AS Methodology was based on a combination of NERC requirements and statistical parameters meant to quantify the reliability risks ancillary services are meant to 46 | 2025 State of the Market Report ===== page 69 (OCR) ===== Ancillary Services protect against. 
QUOTE: For example, the procurement target for Regulation is set according to the 95" percentile of net load forecast error based on a five-minute look-ahead.
AFTER:  This deterministic statistical approach works reasonably well for a product like Regulation, which is meant to account for forecast errors over a relatively short time horizon and variability between regular runs of the real-time market clearing process. For ancillary services meant to address risk…

### e36 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: Introduction (document status) · text copy line 3

BEFORE: …ERCOT Methodologies for Determining Minimum Ancillary Service Requirements 
QUOTE: ERCOT Board Recommended approval on 09/23/2025
AFTER:  PUC Approved on 11/06/2025 Effective Date of 01/01/2026 TABLE OF CONTENTS Introduction 2 Regulation Service Requirement Details 3 Responsive Reserve (RRS) Requirement Details 4 ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin) Requirement Details 5 Introduction Paragraph …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e17, e5, e11, e21, e3, e4): **The chain, step by step.** Each hour ERCOT produces and updates a Total ERCOT Wind Power Forecast (TEWPF), a probability distribution of hourly wind production potential for each of the next 168 hours. [e17] ERCOT picks the 50% probability of exceedance case from that distribution, meaning the level actual total WGR production is expected to exceed 50% of the time, and allocates it to each WGR so that the individual STWPF values sum to the TEWPF value. [e5] The result is a rolling 168-hour hourly STWPF for each wind Resource. [e11] PV works the same way: a TEPPF distribution, a 50% probability of exceedance case, allocated across PVGRs to give the STPPF. [e21] The 80% exceedance Production Potential (WGRPP, PVGRPP) is a separate, lower, allocation from the same total forecast. [e3][e4]
- **How it works #2** (cites e19, e18) FLAG number-not-in-quote: 4.2: **Inputs.** WGRPP forecasts are produced from information provided by WGR owners, including availability, meteorological information and SCADA. [e19] Under the current Section 4.2.2 text, each Generation Entity that owns a WGR must install and telemeter to ERCOT the site-specific meteorological information ERCOT determines is necessary, and ERCOT sets procedures for the accuracy of that telemetry. [e18]
- **How it works #3** (cites e16, e12, e25) FLAG number-not-in-quote: 4.2: **Short horizon.** Besides the hourly Resource-level forecasts, ERCOT posts every five minutes an Intra-Hour Wind Power Forecast (IHWPF) by wind region, covering ERCOT-wide wind production potential for each five-minute interval over the next two hours from each forecast model, and says which model it is using for Generation To Be Dispatched (GTBD) purposes. [e16] The Protocols define the IHWPF as the forecast of wind generation in MW in five minute increments. [e12] Section 4.2.3 sets the same structure for PV with an Intra-Hour PhotoVoltaic Power Forecast (IHPPF). [e25]
- **How it works #4** (cites e20): **Delivery.** Each hour ERCOT sends the STWPF and WGRPP for each WGR to the representing QSE through the Messaging System and posts them on the MIS Certified Area. [e20]
- **How it works #5** (cites e5, e6, e7, e23, e24): **Where they enter the market processes.** [e5][e6][e7][e23][e24]
- **How it works #6** (cites e5, e6) FLAG number-not-in-quote: 3.13: - RUC: the updated STWPF for each hour for each WGR is an input into each RUC process. [e5] Section 3.13 says the Renewable Production Potential forecasts are an input to DRUC and HRUC. [e6]
- **How it works #7** (cites e7, e14): - COP: for the first 168 hours ERCOT updates wind and solar HSL values with the latest STWPF or STPPF. [e7] A QSE may override, but only downward or equal: the submitted HSL must be less than or equal to the latest ERCOT forecast amount for that Resource. [e14]
- **How it works #8** (cites e23): - RUC settlement: when allocating the capacity-short charge, an IRR's available capacity is the lesser of its COP HSL and its WGRPP or PVGRPP at the time of RUC execution. [e23]
- **How it works #9** (cites e24): - Outage coordination: the preliminary OAE may not assume total renewable production lower than the sum of the selected WGRPP and PVGRPP forecasts for each hour, less any reasonably expected severe weather impacts. [e24]
- **How it works #10** (cites e35): - Day-ahead picture: the IMM's day-ahead supply chart (Figure 31) includes "the day-ahead forecast for renewable generation" alongside three-part awards and thermal self-commitments (the IMM's description of its chart, not a Protocol rule). [e35]
- **How it works #11** (cites e13, e22): **Accuracy duty.** ERCOT must use best efforts to develop accurate and unbiased forecasts, limited by available explanatory data, and must post objective criteria and thresholds for unbiased, accurate forecasts within five Business Days of a change. [e13][e22]
- **ERCOT context #1** (cites e8, e30): The IMM treats forecast error as a market operations issue: the net demand forecast (demand minus expected IRR generation) is a major determinant of thermal commitment. [e8] An over-forecast of net demand can lead to sub-optimal commitment, and an under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC (IMM). [e30]
- **ERCOT context #2** (cites e32, e9, e15): Accuracy has improved. The IMM says forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, though structural biases and growing variability remain. [e32] In its Figure 50 analysis of net load forecast errors eight hours ahead of real-time, the average error was about 452 MW in 2025, down from more than 1,000 MW in 2023 and 2024, and IRR generation was under-forecast by only 89 MW on average. [e9][e15] Forecasts still systematically under-forecast IRR generation and over-forecast load, and wind dominates IRR forecast error variance. [e9]
- **ERCOT context #3** (cites e31) FLAG number-not-in-quote: 2024: The IMM's 2024 report ties the solar side to the evening: it says under-forecasting renewables may cause inefficient outcomes, while over-forecasting can cause reliability issues if thermal units are not committed in time, which is particularly challenging on hot summer evenings when solar output falls rapidly and demand stays elevated. [e31]
- **ERCOT context #4** (cites e33, e29, e10) FLAG number-not-in-quote: 2025, 2024: Forecast error also reaches prices and reserves. The IMM says real-time congestion was approximately 7% higher than day-ahead congestion in 2025, likely because of forecast error for load and renewable generation and differences in thermal commitments. [e33] In ancillary services, the IMM says Reg-Up and Reg-Down volumes rose 7.4% and 3.3% from 2024 to 2025 because of higher five-minute net load forecast error, and NSRS volumes rose 7.5%, driven by higher net load and solar forecast errors. [e29][e10]
- **Formula #1** (cites e5, e21): The forecast chain is not an equation in the Protocols, but the allocation rule is: ERCOT allocates the TEWPF 50% probability of exceedance forecast to each WGR such that the sum of the individual STWPF forecasts equals the TEWPF forecast, and the PV rule mirrors it. [e5][e21]
- **Formula #2** (cites e36) FLAG number-not-in-quote: 2026: How forecast error enters reserve sizing (ERCOT's methodology effective 1 January 2026, Board-recommended 23 September 2025): [e36]
- **Formula #3** (cites e26, e36): - Regulation: base Reg-Up is the 95th percentile of the positive net load (load minus wind minus solar) forecast error for the same month of the previous two years; base Reg-Down uses the 95th percentile of the negative error. [e26][e36]
- **Formula #4** (cites e27): - ERCOT then adds incremental MW from wind and solar forecast error adjustment tables, scaled by the increase in installed capacity, by month and hour. [e27]
- **Formula #5** (cites e28): - ECRS and Non-Spin: the risk accounting uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors plus forced outages, with an added adjustment for the expected growth in solar forecast error as installed solar grows. [e28]
- **Key facts #2** (cites e11, e16): - The STWPF is a rolling 168-hour forecast updated hourly; the IHWPF is posted every five minutes for the next two hours. [e11][e16]
- **Key facts #3** (cites e7, e14): - COP HSL values for the first 168 hours are updated with the latest STWPF/STPPF; a QSE override cannot exceed the latest forecast. [e7][e14]
- **Key facts #6** (cites e26) FLAG number-not-in-quote: 2026: - Reg-Up base requirement: 95th percentile of positive net load forecast error, same month of the previous two years (2026 methodology). [e26]
- **Key facts #7** (cites e34) FLAG number-not-in-quote: 2026: - The IMM objected to the 2026 NSRS design: it says using six-hour-ahead forecast error inflates the AS Plan target by 57% more than its recommended one-hour-ahead error (IMM view, not ERCOT's). [e34]
- **Say it like this #1** (cites e1, e3, e9, e26): (Guidance) ERCOT's wind and solar forecasts are median (50% exceedance) forecasts by Resource, used to set expected output for commitment and the COP, with a more conservative 80% exceedance version for production potential. [e1][e3] The IMM says accuracy has improved on average, while wind dominates the forecast error variance and the sizing of reserves leans on historical forecast error. [e9][e26]
- **Common confusion #1** (cites e14, e1, e3, e15, e37, e28) FLAG number-not-in-quote: 452 MW: (Guidance) STWPF/STPPF are forecasts of what a Resource could produce given available units and weather; they are not a QSE's schedule. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL no higher than the latest STWPF amount for that Resource, and the same holds for a PVGR and the STPPF. [e14] Do not confuse the 50% exceedance forecast with the 80% exceedance production-potential value. [e1][e3] Also keep the horizons apart: the IMM's 452 MW figure is eight hours ahead, the Reg-Up requirement uses a five-minute look-ahead in the IMM's description, and ERCOT's ECRS/NSRS method uses 30-minute and 6-hour errors. [e15][e37][e28]
- **Questions #2** (cites e5): ERCOT selects the forecast that actual total ERCOT WGR production is expected to exceed 50% of the time, then allocates it to each WGR so the individual forecasts sum to the total. [e5]
- **Questions #4** (cites e6, e7, e23, e24): As RUC inputs (DRUC, HRUC), to update COP HSL values for the first 168 hours, in the RUC capacity-short calculation for IRRs, and as a floor on renewable production assumed in the preliminary OAE. [e6][e7][e23][e24]
- **Questions #6** (cites e9, e15): IRR generation was under-forecast by only 89 MW on average in 2025, with net load error about 452 MW eight hours ahead, though wind keeps dominating the variance. [e9][e15]
- **Questions #8** (cites e28, e9): ERCOT's methodology says an increase in solar capacity tends to increase the MW quantity of forecast error, so relying on historical solar errors alone could under-estimate ECRS and NSRS; it adds an adjustment for the expected growth. [e28] The IMM separately reports that forecast variance has increased with the expansion of IRR capacity, particularly solar. [e9]
- **Questions #10** (cites e31): The IMM says over-forecasting can cause reliability issues if thermal units are not committed in time, and that this is particularly challenging on hot summer evenings when solar output falls rapidly and demand stays elevated. [e31]
- **Questions #12** (cites e14): It cannot raise its COP HSL above the latest STWPF amount; overrides may only be less than or equal to it. [e14]
- **Scenarios #2** (cites e21): - The updated STPPF feeds each RUC process, so an over-forecast of solar means less thermal commitment than needed. [e21]
- **Scenarios #3** (cites e30): - The IMM says an under-forecast of net demand can lead to insufficient thermal commitments and real-time shortfalls often addressed through RUC; an over-forecast of IRR output has the same direction of effect on net demand. [e30]
- **Scenarios #4** (cites e23): - In RUC settlement, the IRR's capacity counted toward its QSE's position is the lesser of its COP HSL and its production potential at RUC execution. [e23]
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

