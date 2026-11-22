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

## Statements to check (new or changed since the last audit)

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

