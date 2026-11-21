# Audit packet: COP (Current Operating Plan) (cop)

kind concept · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (1) · text copy line 4403 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 3.9 Current Operating Plan (COP) (1) 
QUOTE: Each Qualified Scheduling Entity (QSE) that represents a Resource must submit a Current Operating Plan (COP) under this Section.
AFTER:  (2) ERCOT shall use the information provided in the COP to calculate operating limits and Ancillary Service capabilities for each Resource for the Reliability Unit Commitment (RUC) processes. (3) ERCOT shall monitor the accuracy of each QSE's COP as outlined in Section 8, Performance Monitoring. (4…

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (2) · text copy line 4405 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------+ 3.9 Current Operating Plan (COP) (1) Each Qualified Scheduling Entity (QSE) that represents a Resource must submit a Current Operating Plan (COP) under this Section. (2) 
QUOTE: ERCOT shall use the information provided in the COP to calculate operating limits and Ancillary Service capabilities for each Resource for the Reliability Unit Commitment (RUC) processes.
AFTER:  (3) ERCOT shall monitor the accuracy of each QSE's COP as outlined in Section 8, Performance Monitoring. (4) A QSE must notify ERCOT that it plans to have a Resource On-Line by means of the COP using the Resource Status codes listed in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (C…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (5) · text copy line 4411 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …process committed the Resource for all RUC-Committed Intervals. A QSE may only use a RUC-committed Resource during that Resource's RUC-Committed Interval to meet the QSE's Ancillary Service Supply Responsibility if the Resource has been committed by the RUC process to provide Ancillary Service. (5) 
QUOTE: To reflect changes to a Resource's capability, each QSE shall report by exception, changes to the COP for all hours after the Operating Period through the rest of the Operating Day.
AFTER:  (6) When a QSE updates its COP to show changes in Resource Status, the QSE shall update for each On-Line Resource, either an Energy Offer Curve under Section 4.4.9, Energy Offers and Bids, or Output Schedule under Section 6.4.2, Output Schedules. (7) Each QSE, including QSEs representing Reliabilit…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (6) · text copy line 4413 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …ice Supply Responsibility if the Resource has been committed by the RUC process to provide Ancillary Service. (5) To reflect changes to a Resource's capability, each QSE shall report by exception, changes to the COP for all hours after the Operating Period through the rest of the Operating Day. (6) 
QUOTE: When a QSE updates its COP to show changes in Resource Status, the QSE shall update for each On-Line Resource, either an Energy Offer Curve under Section 4.4.9, Energy Offers and Bids, or Output Schedule under Section 6.4.2, Output Schedules.
AFTER:  (7) Each QSE, including QSEs representing Reliability Must-Run (RMR) Units, Firm Fuel Supply Service Resources (FFSSRs), or Black Start Resources, shall submit a revised COP reflecting changes in Resource availability as soon as reasonably practicable, but in no event later than 60 minutes after th…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …ffer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. 
QUOTE: The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP.
AFTER:  In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (2) · text copy line 1406 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: ….3 Energy Offer Curve (1) The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations. (2) A QSE may submit Resource-specific Energy Offer Curves to ERCOT. 
QUOTE: Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry.
AFTER:  (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, …

### e8 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (7) · text copy line 4415 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …ng Period through the rest of the Operating Day. (6) When a QSE updates its COP to show changes in Resource Status, the QSE shall update for each On-Line Resource, either an Energy Offer Curve under Section 4.4.9, Energy Offers and Bids, or Output Schedule under Section 6.4.2, Output Schedules. (7) 
QUOTE: Each QSE, including QSEs representing Reliability Must-Run (RMR) Units, Firm Fuel Supply Service Resources (FFSSRs), or Black Start Resources, shall submit a revised COP reflecting changes in Resource availability as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change.
AFTER:  (8) Each QSE representing a Qualifying Facility (QF) must submit a Low Sustained Limit (LSL) that represents the minimum energy available, in MW, from the unit for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts fo…

### e9 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (4) · text copy line 4409 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …ll monitor the accuracy of each QSE's COP as outlined in Section 8, Performance Monitoring. (4) A QSE must notify ERCOT that it plans to have a Resource On-Line by means of the COP using the Resource Status codes listed in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria. 
QUOTE: The QSE must show the Resource as On-Line with a Resource Status of ONRUC, indicating a RUC process committed the Resource for all RUC-Committed Intervals.
AFTER:  A QSE may only use a RUC-committed Resource during that Resource's RUC-Committed Interval to meet the QSE's Ancillary Service Supply Responsibility if the Resource has been committed by the RUC process to provide Ancillary Service. (5) To reflect changes to a Resource's capability, each QSE shall r…

### e10 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.2, Current Operating Plan (COP) Performance Requirements, paragraph (2) · text copy line 1223 · heading above: 8.1.2 Current Operating Plan (COP) Performance Requirements

BEFORE: …---------------------------------------------------------------------------------------------------------------------+ 8.1.2 Current Operating Plan (COP) Performance Requirements (1) Each QSE representing a Resource must submit a COP in accordance with Section 3.9, Current Operating Plan (COP). (2) 
QUOTE: For each QSE, ERCOT shall post for each month the number of Operating Hours during which a Reliability Unit Commitment (RUC)-committed QSE Resource, not Off-Line as the result of a Forced Outage, failed to be On-Line and released to SCED for deployment within the first 15 minutes of the RUC-Commitment Hour. QSEs shall have no more than three hours during an Operating Day and no more than 74 hours during a month that contains one or more of these events.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (3) · text copy line 4427 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …he QSE is excused from updating the COP only for so long as the undue threat to safety, undue risk of bodily harm, or undue damage to equipment exists. The time for updating the COP begins once the undue threat to safety, undue risk of bodily harm, or undue damage to equipment no longer exists. (3) 
QUOTE: Each QSE that represents a Resource shall update its COP to reflect the ability of the Resource to provide each Ancillary Service by product and sub-type.
AFTER:  Additionally, for a COP provided for an ESR, the QSE shall ensure that the Hour Beginning Planned State of Charge (HBSOC) for any two consecutive hours shall be feasible based on the ESR's maximum rate of charge or discharge. (4) Load Resource COP values may be adjusted to reflect Distribution Loss…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (3) · text copy line 4427 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: … time for updating the COP begins once the undue threat to safety, undue risk of bodily harm, or undue damage to equipment no longer exists. (3) Each QSE that represents a Resource shall update its COP to reflect the ability of the Resource to provide each Ancillary Service by product and sub-type. 
QUOTE: Additionally, for a COP provided for an ESR, the QSE shall ensure that the Hour Beginning Planned State of Charge (HBSOC) for any two consecutive hours shall be feasible based on the ESR's maximum rate of charge or discharge.
AFTER:  (4) Load Resource COP values may be adjusted to reflect Distribution Losses in accordance with Section 8.1.1.2, General Capacity Testing Requirements. (5) A COP must include the following for each Resource represented by the QSE: (a) The name of the Resource; (b) The expected Resource Status: (i) S…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (9) · text copy line 4419 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …ng Facility (QF) must submit a Low Sustained Limit (LSL) that represents the minimum energy available, in MW, from the unit for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts for changes in ambient conditions. (9) 
QUOTE: When ERCOT issues a communication in the form of an Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice due to forecasted or actual cold or hot weather, for each Generation Resource and Energy Storage Resource (ESR) a QSE represents, the QSE shall update the COP, Real-Time telemetry, and Outage or derate reporting to reflect any Resource-specific operating limitations based on: (i) capability and availability; (ii) fuel supply or inventory concerns, including fuel switching capabilities; or (iii) environmental constraints and the impact on the Generation Resource or ESR due to the weather conditions.
AFTER:  QSEs shall provide these updates in accordance with Sections 3.1.4, Communications Regarding Resource and Transmission Facility Outages; 3.10.7.5, Telemetry Requirements; 3.9, Current Operating Plan (COP); 3.9.1, Current Operating Plan (COP) Criteria; and Nodal Operating Guide Section 7.3, Telemetr…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (2) · text copy line 4425 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …nditions for each Resource for each hour in the next seven Operating Days. (2) Each QSE that represents a Resource shall update its COP reflecting changes in availability of any Resource as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change. 
QUOTE: Each QSE shall timely update its COP unless in the reasonable judgment of the QSE, such compliance would create an undue threat to safety, undue risk of bodily harm, or undue damage to equipment. The QSE is excused from updating the COP only for so long as the undue threat to safety, undue risk of bodily harm, or undue damage to equipment exists.
AFTER:  The time for updating the COP begins once the undue threat to safety, undue risk of bodily harm, or undue damage to equipment no longer exists. (3) Each QSE that represents a Resource shall update its COP to reflect the ability of the Resource to provide each Ancillary Service by product and sub-ty…

### e15 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (10) · text copy line 4583 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …he test. A QSE representing a Generation Resource that is not actively providing Ancillary Services may only use a Resource Status of STARTUP to indicate to ERCOT through telemetry that the Resource is operating in a start-up sequence requiring manual control and is not available for Dispatch. (10) 
QUOTE: If a QSE has not submitted a valid COP for any Generation Resource for any hour in the DAM or RUC Study Period, then the Generation Resource is considered to have a Resource Status as OUT thus not available for DAM awards or RUC commitments for those hours.
AFTER:  (11) If a COP is not available for any Resource for any hour from the current hour to the start of the DAM period or RUC study, then the Resource Status for those hours are considered equal to the last known Resource Status from a previous hour's COP or from telemetry as appropriate for that Resour…

### e16 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (12) · text copy line 4587 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …a COP is not available for any Resource for any hour from the current hour to the start of the DAM period or RUC study, then the Resource Status for those hours are considered equal to the last known Resource Status from a previous hour's COP or from telemetry as appropriate for that Resource. (12) 
QUOTE: A QSE representing a Resource may only use the Resource Status code of EMR for a Resource whose operation would have impacts that cannot be monetized and reflected through the Resource's Energy Offer Curve or recovered through the RUC make-whole process or if the Resource has been contracted by ERCOT under Section 3.14.1 or under paragraph (5) of Section 6.5.1.1.
AFTER:  If ERCOT chooses to commit an Off-Line unit with EMR Resource Status that has been contracted by ERCOT under Section 3.14.1 or under paragraph (5) of Section 6.5.1.1, the QSE shall change its Resource Status to ONRUC. Otherwise, the QSE shall change its Resource Status to ONEMR. (13) A QSE represen…

### e17 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (17) (ESR COP rules) · text copy line 4610 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …==+ +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (17) A QSE representing an ESR shall ensure that COP values for a given hour follow the following rules: 
QUOTE: (a) MinSOC is greater than or equal to the nameplate minimum MWh operating SOC limit; (b) MaxSOC is less than or equal to the nameplate maximum MWh operating SOC limit; and (c) HBSOC is a value between the corresponding COP values of MinSOC and MaxSOC.
AFTER:  (18) A QSE representing a Resource Entity with one or more ESRs in a Withdrawal-Limited Private Use Network (WLPUN) shall ensure that the sum of all of the ESRs' LSLs reflected in each COP or in telemetry submitted to ERCOT is not lower than the established MW Withdrawal limit for the WLPUN less th…

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(E) · text copy line 4447 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …Hour; (B) ON - On-Line Resource with Energy Offer Curve; (C) ONOS - On-Line Resource with Output Schedule; (D) ONTEST - On-Line blocked from Security-Constrained Economic Dispatch (SCED) for operations testing (while ONTEST, a Generation Resource may be shown on Outage in the Outage Scheduler); (E) 
QUOTE: ONEMR - On-Line EMR (available for commitment or dispatch only for ERCOT-declared Emergency Conditions; the QSE may appropriately set LSL and High Sustained Limit (HSL) to reflect operating limits);
AFTER:  (F) ONOPTOUT - On-Line and the hour is a RUC Buy-Back Hour; (G) SHUTDOWN - The Resource is On-Line and in a shutdown sequence, and is not eligible for an Ancillary Service award. This Resource Status is only to be used for Real-Time telemetry purposes; (H) STARTUP - The Resource is On-Line and in a…

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(I) · text copy line 4455 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …-Line and in a start-up sequence and is not eligible for an Ancillary Service award, unless coming On-Line in response to a manual deployment of ERCOT Contingency Reserve Service (ECRS) or Non-Spinning Reserve (Non-Spin). This Resource Status is only to be used for Real-Time telemetry purposes; (I) 
QUOTE: OFFQS - Off-Line but available for SCED deployment and to provide ECRS and Non-Spin, if qualified and capable. Only qualified Quick Start Generation Resources (QSGRs) may utilize this status;
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace item (I) above with the foll…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(ii)(B) · text copy line 4479 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …hronized to the ERCOT System that best describes the Resource's status. These Resource Statuses are to be used for COP and/or Real-Time telemetry purposes, as appropriate. (A) OUT - Off-Line and unavailable, or not connected to the ERCOT System and operating in a Private Microgrid Island (PMI); (B) 
QUOTE: OFF - Off-Line but available for commitment in the Day-Ahead Market (DAM), RUC, and providing Non-Spin, if qualified and capable;
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace item (B) above with the following upon system implementation and renumber accordingly:] | | | | (B) OFF - Off-Line but available f…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(ii)(A) · text copy line 4477 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …-----------------------------------------------+ (ii) Select one of the following for Off-Line Generation Resources not synchronized to the ERCOT System that best describes the Resource's status. These Resource Statuses are to be used for COP and/or Real-Time telemetry purposes, as appropriate. (A) 
QUOTE: OUT - Off-Line and unavailable, or not connected to the ERCOT System and operating in a Private Microgrid Island (PMI);
AFTER:  (B) OFF - Off-Line but available for commitment in the Day-Ahead Market (DAM), RUC, and providing Non-Spin, if qualified and capable; +-------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Repl…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(A) · text copy line 4439 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …The expected Resource Status: (i) Select one of the following for Generation Resources synchronized to the ERCOT System that best describes the Resource's status. Unless otherwise provided below, these Resource Statuses are to be used for COP and/or Real-Time telemetry purposes, as appropriate. (A) 
QUOTE: ONRUC - On-Line and the hour is a RUC-Committed Hour;
AFTER:  (B) ON - On-Line Resource with Energy Offer Curve; (C) ONOS - On-Line Resource with Output Schedule; (D) ONTEST - On-Line blocked from Security-Constrained Economic Dispatch (SCED) for operations testing (while ONTEST, a Generation Resource may be shown on Outage in the Outage Scheduler); (E) ONEMR…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (6) · text copy line 4556 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …); (ii) For ESRs, the LSL may be positive; (e) The High Emergency Limit (HEL); (f) The Low Emergency Limit (LEL); (g) Ancillary Service capability in MW for each product and sub-type; and (h) For ESRs: (i) Minimum State of Charge (MinSOC); (ii) Maximum State of Charge (MaxSOC); and (iii) HBSOC. (6) 
QUOTE: For Combined Cycle Generation Resources, the above items are required for each operating configuration. In each hour only one Combined Cycle Generation Resource in a Combined Cycle Train may be assigned one of the On-Line Resource Status codes described above.
AFTER:  (a) During a RUC study period, if a QSE's COP reports multiple Combined Cycle Generation Resources in a Combined Cycle Train to be On-Line for any hour, then until the QSE corrects its COP, the On-Line Combined Cycle Generation Resource with the largest HSL is considered to be On-Line and all other…

### e24 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (6)(a) · text copy line 4558 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …rge (MaxSOC); and (iii) HBSOC. (6) For Combined Cycle Generation Resources, the above items are required for each operating configuration. In each hour only one Combined Cycle Generation Resource in a Combined Cycle Train may be assigned one of the On-Line Resource Status codes described above. (a) 
QUOTE: During a RUC study period, if a QSE's COP reports multiple Combined Cycle Generation Resources in a Combined Cycle Train to be On-Line for any hour, then until the QSE corrects its COP, the On-Line Combined Cycle Generation Resource with the largest HSL is considered to be On-Line and all other Combined Cycle Generation Resources in the Combined Cycle Train are considered to be Off-Line.
AFTER:  Furthermore, until the QSE corrects its COP, the Off-Line Combined Cycle Generation Resources as designated through the application of this process are ineligible for RUC commitment or de-commitment Dispatch Instructions. (b) For any hour in which QSE-submitted COP entries are used to determine the…

### e25 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …t for a Combined Cycle Generation Resource shall be determined by the positive transition cost from the On-Line Combined Cycle Generation Resource within the Combine Cycle Train or from a shutdown condition, whichever ERCOT determines to be appropriate. (7) ERCOT may accept COPs only from QSEs. (8) 
QUOTE: For the first 168 hours of the COP, ERCOT will update the HSL values for Wind-powered Generation Resources (WGRs) with the most recently updated Short-Term Wind Power Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF).
AFTER:  ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most re…

### e26 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (8) · text copy line 4572 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: … Forecast (STWPF), and the HSL values for PhotoVoltaic Generation Resources (PVGRs) with the most recently updated Short-Term PhotoVoltaic Power Forecast (STPPF). ERCOT will notify the QSE via an Extensible Markup Language (XML) message each time COP HSL values are updated with the forecast values. 
QUOTE: A QSE representing a WGR may override the STWPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STWPF provided by ERCOT; a QSE representing a PVGR may override the STPPF HSL value but must submit an HSL value that is less than or equal to the amount for that Resource from the most recent STPPF provided by ERCOT.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.2, paragraphs (1) and (2), Current Operating Plan Validation · text copy line 4620 · heading above: 3.9.2 Current Operating Plan Validation

BEFORE: … of all of the ESRs' LSLs reflected in each COP or in telemetry submitted to ERCOT is not lower than the established MW Withdrawal limit for the WLPUN less the sum of the expected consumption of the Large Load and any auxiliary or other load in the WLPUN. 3.9.2 Current Operating Plan Validation (1) 
QUOTE: ERCOT shall verify that each COP, on its submission, complies with the criteria described in Section 3.9.1, Current Operating Plan (COP) Criteria. ERCOT shall notify the QSE by means of the Messaging System if the QSE's COP fails to comply with the criteria described in Section 3.9.1 and this Section 3.9.2 for any reason. The QSE must then resubmit the COP within the appropriate market timeline.
AFTER:  (2) ERCOT may reject a COP that does not meet the criteria described in Section 3.9.1. (3) ERCOT systems must be able to detect a change in status of a Resource shown in the COP and must provide notice to ERCOT operators of changes that a QSE makes to its COP. (4) A QSE representing a Resource that…

### e28 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.2, paragraph (4) · text copy line 4626 · heading above: 3.9.2 Current Operating Plan Validation

BEFORE: …n the appropriate market timeline. (2) ERCOT may reject a COP that does not meet the criteria described in Section 3.9.1. (3) ERCOT systems must be able to detect a change in status of a Resource shown in the COP and must provide notice to ERCOT operators of changes that a QSE makes to its COP. (4) 
QUOTE: A QSE representing a Resource that has an Energy Offer Curve valid for an hour of the COP may not designate a Resource Status of ONOS for that hour for that Resource.
AFTER:  3.10 Network Operations Modeling and Telemetry (1) ERCOT shall use the physical characteristics, ratings, and operational limits of all Transmission Elements of the ERCOT Transmission Grid and other information from the Transmission Service Providers (TSPs) and Resource Entities to specify limits w…

### e30 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (8) · text copy line 4417 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: …enting Reliability Must-Run (RMR) Units, Firm Fuel Supply Service Resources (FFSSRs), or Black Start Resources, shall submit a revised COP reflecting changes in Resource availability as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change. (8) 
QUOTE: Each QSE representing a Qualifying Facility (QF) must submit a Low Sustained Limit (LSL) that represents the minimum energy available, in MW, from the unit for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin that accounts for changes in ambient conditions.
AFTER:  (9) When ERCOT issues a communication in the form of an Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice due to forecasted or actual cold or hot weather, for each Generation Resource and Energy Storage Resource (ESR) a QSE represents, the QSE shall update the COP, Real-Time te…

### e31 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.4, QSE Security Sequence Responsibilities, paragraph (1)(e) · text copy line 209 · heading above: 5.4 QSE Security Sequence Responsibilities

BEFORE: …e Trades, and Direct Current Tie (DC Tie) Schedules corresponding to Electronic Tags (e-Tags) before 1430 in the Day-Ahead for the DRUC and by the end of the Adjustment Period for each HRUC; if the QSE wants those Energy Trades and DC Tie Schedules included in the calculation of RUC Settlement; (e) 
QUOTE: Submit an updated COP before 1430 in the Day-Ahead; and
AFTER:  (f) Acknowledge receipt of Resource commitment or decommitment Dispatch Instructions by submitting an updated COP. 5.4.1 Ancillary Service Positions (1) A QSE's Ancillary Service Position is the net amount of Ancillary Service capacity to which the QSE has financially committed in the ERCOT market,…

### e32 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.5.2, Reliability Unit Commitment (RUC) Process, paragraph (4) · text copy line 298 · heading above: 5.5.2 Reliability Unit Commitment (RUC) Process

BEFORE: …loyments Factors that are projected to be used in the RUC process for that Operating Day; and (c) Following each month, ERCOT shall post the average, minimum, and maximum Ancillary Service Deployment Factors used in the RUC process by type of Ancillary Service and hour of the day for the month. (4) 
QUOTE: For all hours of the RUC Study Period within the RUC process, Quick Start Generation Resources (QSGRs) with a COP Resource Status of OFFQS shall be considered as On-Line with Low Sustained Limit (LSL) at zero MW.
AFTER:  QSGRs with a Resource Status of OFFQS shall only be committed by ERCOT through a RUC instruction in instances when a reliability issue would not otherwise be managed through Dispatch Instructions from Security-Constrained Economic Dispatch (SCED). (5) In addition to On-Line qualified Generation Res…

### e33 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9, paragraph (3) · text copy line 4407 · heading above: 3.9 Current Operating Plan (COP)

BEFORE: … Entity (QSE) that represents a Resource must submit a Current Operating Plan (COP) under this Section. (2) ERCOT shall use the information provided in the COP to calculate operating limits and Ancillary Service capabilities for each Resource for the Reliability Unit Commitment (RUC) processes. (3) 
QUOTE: ERCOT shall monitor the accuracy of each QSE's COP as outlined in Section 8, Performance Monitoring.
AFTER:  (4) A QSE must notify ERCOT that it plans to have a Resource On-Line by means of the COP using the Resource Status codes listed in paragraph (5)(b)(i) of Section 3.9.1, Current Operating Plan (COP) Criteria. The QSE must show the Resource as On-Line with a Resource Status of ONRUC, indicating a RUC…

### e34 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(G), SHUTDOWN · text copy line 4451 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …Outage in the Outage Scheduler); (E) ONEMR - On-Line EMR (available for commitment or dispatch only for ERCOT-declared Emergency Conditions; the QSE may appropriately set LSL and High Sustained Limit (HSL) to reflect operating limits); (F) ONOPTOUT - On-Line and the hour is a RUC Buy-Back Hour; (G) 
QUOTE: SHUTDOWN - The Resource is On-Line and in a shutdown sequence, and is not eligible for an Ancillary Service award. This Resource Status is only to be used for Real-Time telemetry purposes;
AFTER:  (H) STARTUP - The Resource is On-Line and in a start-up sequence and is not eligible for an Ancillary Service award, unless coming On-Line in response to a manual deployment of ERCOT Contingency Reserve Service (ECRS) or Non-Spinning Reserve (Non-Spin). This Resource Status is only to be used for R…

### e35 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(b)(i)(K), ONHOLD · text copy line 4466 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …ailable to provide Responsive Reserve (RRS) and ECRS, if qualified and capable, and for commitment by RUC, but is unavailable for Dispatch by SCED. For SCED, Resource Base Points will be set equal to the telemetered net real power of the Resource available at the time of the SCED execution; and (K) 
QUOTE: ONHOLD - Resource is On-Line but temporarily unavailable for Dispatch by SCED or Ancillary Service awards. This Resource Status is only to be used for Real-Time telemetry purposes.
AFTER:  For SCED, Resource Base Points will be set equal to the telemetered net real power of the Resource available at the time of the SCED execution. +----------------------------------------------------------------------------------------------------------------------------------------------------------…

### e36 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.9.1, paragraph (5)(e) to (g) · text copy line 4542 · heading above: 3.9.1 Current Operating Plan (COP) Criteria

BEFORE: …) The HSL; (i) For Load Resources other than CLRs, the HSL should equal the expected power consumption; (ii) For ESRs, the HSL may be negative; (d) The LSL; (i) For Load Resources other than CLRs, the LSL should equal the expected Low Power Consumption (LPC); (ii) For ESRs, the LSL may be positive; 
QUOTE: (e) The High Emergency Limit (HEL); (f) The Low Emergency Limit (LEL); (g) Ancillary Service capability in MW for each product and sub-type; and
AFTER:  (h) For ESRs: (i) Minimum State of Charge (MinSOC); (ii) Maximum State of Charge (MaxSOC); and (iii) HBSOC. (6) For Combined Cycle Generation Resources, the above items are required for each operating configuration. In each hour only one Combined Cycle Generation Resource in a Combined Cycle Train …

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e3, e4, e8, e14, e5): Every QSE that represents a Resource must submit a COP. [e2] ERCOT uses the information to calculate operating limits and Ancillary Service capabilities for each Resource for the RUC processes. [e3] QSEs report changes by exception for all hours after the Operating Period through the rest of the Operating Day, [e4] and must submit a revised COP no later than 60 minutes after an event that changes Resource availability. [e8] The 60-minute duty has one exception: a QSE is excused from timely updates only while compliance would create an undue threat to safety, undue risk of bodily harm or undue damage to equipment. [e14] When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule for each On-Line Resource. [e5]
- **How it works #2** (cites e11, e36, e12, e17) FLAG number-not-in-quote: 3.9: What the COP must contain (Section 3.9.1): the COP must show each Resource's ability to provide each Ancillary Service by product and sub-type, [e11] and the list of required items in paragraph (5) includes the High Emergency Limit, the Low Emergency Limit and Ancillary Service capability in MW for each product and sub-type (see the Key facts below for the status codes). [e36] For an ESR, the QSE must also keep the Hour Beginning Planned State of Charge (HBSOC) for any two consecutive hours feasible given the ESR's maximum rate of charge or discharge, [e12] and the COP values for an hour must follow three rules: MinSOC at or above the nameplate minimum, MaxSOC at or below the nameplate maximum, and HBSOC between MinSOC and MaxSOC. [e17]
- **How it works #3** (cites e30, e25, e26, e23, e24): Resource-class specifics: for a Qualifying Facility, the LSL must represent the minimum energy available for economic dispatch based on the minimum stable steam delivery to the thermal host plus a justifiable reliability margin. [e30] For the first 168 hours of the COP, ERCOT updates wind and solar HSL values with the most recent short-term forecasts; a QSE may override but must submit an HSL no higher than the most recent ERCOT forecast for that Resource. [e25][e26] For Combined Cycle Resources the items are required for each operating configuration, and only one Combined Cycle Generation Resource in a Train may be assigned an On-Line status in each hour. [e23] If a COP shows several as On-Line during a RUC study period, ERCOT treats the one with the largest HSL as On-Line and the rest as Off-Line until the QSE corrects the COP. [e24]
- **How it works #4** (cites e27, e28): Validation (Section 3.9.2): ERCOT verifies each COP on submission and notifies the QSE through the Messaging System if it fails the criteria; the QSE must then resubmit within the appropriate market timeline. [e27] A Resource with a valid Energy Offer Curve in an hour may not be given a Resource Status of ONOS for that hour. [e28]
- **ERCOT context #1** (cites e6, e7, e15): For Resource Status, SCED does not use the COP: SCED uses telemetered Resource Status validated by the Real-Time Sequence instead of the COP Resource Status. [e6] The COP still matters in the day-ahead market because a Generation Resource's Energy Offer Curve is bounded in the DAM by the LSL and HSL specified in the COP. [e7] If no valid COP exists for a Generation Resource for an hour in the DAM or RUC study period, the Resource is treated as OUT and is not available for DAM awards or RUC commitments for those hours. [e15]
- **ERCOT context #2** (cites e31, e9, e32): RUC links: a QSE during the RUC Security Sequence must submit an updated COP before 1430 in the Day-Ahead, [e31] and a QSE must show a Resource committed by RUC for all RUC-Committed Intervals as On-Line with a Resource Status of ONRUC. [e9] For RUC, a Quick Start Generation Resource with a COP status of OFFQS is considered On-Line with LSL at zero MW. [e32]
- **ERCOT context #3** (cites e13): Weather: when ERCOT issues an OCN, Advisory, Watch or Emergency Notice for forecast or actual cold or hot weather, the QSE must update the COP, telemetry and outage or derate reporting for each Generation Resource and ESR it represents to reflect Resource-specific limits on capability, fuel supply or environmental constraints. [e13]
- **ERCOT context #4** (cites e33, e10) FLAG number-not-in-quote: 8.1: Accuracy monitoring: ERCOT monitors the accuracy of each QSE's COP as outlined in Section 8, Performance Monitoring. [e33] Under Section 8.1.2, COP Performance Requirements, ERCOT posts monthly, for each QSE, the Operating Hours in which a RUC-committed Resource not Off-Line from a Forced Outage failed to be On-Line and released to SCED within the first 15 minutes of the RUC-Commitment Hour; QSEs shall have no more than three such hours in an Operating Day and no more than 74 hours in a month that contains one or more of these events. [e10]
- **Key facts #4** (cites e8, e14): - Revisions are due as soon as reasonably practicable and within 60 minutes of the event, except while compliance would create an undue safety or equipment threat. [e8][e14]
- **Key facts #6** (cites e22): - Generation status codes in the COP include ONRUC (On-Line and the hour is a RUC-Committed Hour). [e22]
- **Key facts #7** (cites e20, e21): - OFF means Off-Line but available for commitment in the DAM and RUC and for Non-Spin if qualified and capable; OUT means Off-Line and unavailable, or not connected and operating in a Private Microgrid Island. [e20][e21]
- **Key facts #8** (cites e19): - OFFQS is limited to qualified Quick Start Generation Resources: Off-Line but available for SCED deployment and to provide ECRS and Non-Spin if qualified and capable. [e19] (A pending NPRR1309 box in np-03 would add DRRS to that status upon system implementation; it is not the rule yet.)
- **Key facts #9** (cites e18): - ONEMR: On-Line EMR, available for commitment or dispatch only for ERCOT-declared Emergency Conditions; the QSE may set LSL and HSL to reflect operating limits. [e18]
- **Key facts #10** (cites e16): - EMR may only be used where the operation has impacts that cannot be monetized in the offer or recovered through RUC make-whole, or the Resource is contracted by ERCOT under Section 3.14.1 or paragraph (5) of Section 6.5.1.1. [e16]
- **Key facts #11** (cites e10): - Monthly RUC-commitment performance limits: no more than three hours per Operating Day and no more than 74 hours per month with events. [e10]
- **Common confusion #3** (cites e34, e35): - COP versus telemetry: the generation status list says its codes are used for COP and/or Real-Time telemetry purposes as appropriate, but SHUTDOWN and ONHOLD are each stated to be only for Real-Time telemetry purposes. [e34][e35]
- **Common confusion #4** (cites e22): - ONRUC versus ON: ONRUC marks hours where RUC committed the Resource; ON is an On-Line Resource with an Energy Offer Curve. [e22]
- **Questions #6** (cites e8, e14): As soon as reasonably practicable, and within 60 minutes of the event, unless complying would create an undue threat to safety, risk of bodily harm or damage to equipment. [e8][e14]
- **Questions #8** (cites e15, e6): Because the day-ahead and RUC processes rely on it. With no valid COP for an hour in the DAM or RUC study period, the Generation Resource is treated as OUT and cannot receive DAM awards or RUC commitments for those hours. [e15][e6]
- **Questions #10** (cites e23, e24): Only one Combined Cycle Generation Resource in a Train may carry an On-Line status in an hour. [e23] In a RUC study period, ERCOT treats the one with the largest HSL as On-Line and the others as Off-Line until the QSE corrects it. [e24]
- **Questions #12** (cites e25, e26): ERCOT updates the HSL with the short-term forecast for the first 168 hours, and the QSE may override, but only to a value at or below the most recent ERCOT forecast. [e25][e26]
- **Questions #14** (cites e33, e10) FLAG number-not-in-quote: 8.1: ERCOT monitors it under Section 8 [e33]; one measure in Section 8.1.2 is the monthly count of hours when a RUC-committed Resource failed to be On-Line and released to SCED within the first 15 minutes of the RUC-Commitment Hour, with limits of three hours per Operating Day and 74 hours per month with events. [e10]
- **Scenarios #2** (cites e13): - Update the COP, telemetry and outage or derate reporting for each Generation Resource and ESR to reflect Resource-specific limits on capability, fuel supply and environmental constraints. [e13]
- **Scenarios #3** (cites e8): - Keep revising within 60 minutes of any change in availability. [e8]
- **Link to qse** (cites e2): related QSE (Qualified Scheduling Entity): Each QSE representing a Resource must submit a COP. [e2]
- **Link to ruc** (cites e3): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): ERCOT uses COP data to calculate operating limits and Ancillary Service capabilities for RUC. [e3]
- **Link to energy-offer-curve** (cites e5): related Energy Offer Curve: When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule. [e5]
- **Link to sced** (cites e6): contrasts-with SCED (Security-Constrained Economic Dispatch): SCED uses telemetered Resource Status instead of the COP Resource Status. [e6]
- **Link to hsl-lsl** (cites e7): related HSL / LSL: The DAM offer curve is bounded by the LSL and HSL specified in the COP. [e7]
- **Link to three-part-supply-offer** (cites e7): related Three-Part Supply Offer: A Generation Resource's day-ahead Energy Offer Curve is bounded by the LSL and HSL specified in the COP. [e7]
- **Link to dam** (cites e15): used-in Day-Ahead Market (DAM): A missing valid COP makes a Generation Resource OUT, so it is not available for DAM awards or RUC commitments for those hours. [e15]
- **Link to energy-storage-resource** (cites e12, e17): related Energy Storage Resource (ESR): An ESR's COP carries MinSOC, MaxSOC and HBSOC, which must follow stated consistency rules. [e12][e17]
- **Link to rmr** (cites e16): related RMR (Reliability Must-Run) & Must-Run Alternatives: The EMR status is for Resources whose operation cannot be monetized in the offer or that ERCOT contracted under Section 3.14.1 or paragraph (5) of Section 6.5.1.1. [e16]
- **Link to operating-notices** (cites e13): related Operating Notices (OCN, Advisory, Watch, Emergency): An OCN, Advisory, Watch or Emergency Notice for weather triggers a duty to update the COP for Resource-specific limits. [e13]
- **Link to ancillary-services** (cites e11): related Ancillary Services (AS): The COP must show each Resource's ability to provide each Ancillary Service by product and sub-type. [e11]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The COP is the QSE's rolling seven-day plan for each unit: whether it is on, its limits and what ancillary services it can provide. ERCOT uses it for commitment and day-ahead; real-time dispatch runs off telemetry. A bad or missing COP can make a unit invisible to the DAM and RUC, so keeping it current is part of being a QSE.

