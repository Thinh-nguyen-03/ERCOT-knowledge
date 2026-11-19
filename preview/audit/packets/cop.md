# Audit packet: COP (Current Operating Plan) (cop)

kind concept · domain pricing · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Current Operating Plan (COP) · text copy line 515

BEFORE: … Critical Load Industrial Customers, Critical Load Public Safety Customers, Critical Care Residential Customers, and Chronic Condition Residential Customers, or as a critical load under any other category identified under Public Utility Commission of Texas (PUCT) Rules. Current Operating Plan (COP) 
QUOTE: A plan by a Qualified Scheduling Entity (QSE) reflecting anticipated operating conditions for each of the Resources that it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status, and Ancillary Service capabilities.
AFTER:  Customer An Entity that purchases electricity for its consumption. Customer Choice The freedom of a retail Customer to purchase electric services, either individually or on an aggregated basis with other retail Customers, from the provider or providers of the Customer's choice and to choose among v…

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

## Statements to check

- **Definition #1** (cites e1): The Current Operating Plan (COP) is a QSE's plan reflecting anticipated operating conditions for each Resource it represents for each hour in the next seven Operating Days, including Resource operational data, Resource Status and Ancillary Service capabilities. [e1]
- **How it works #1** (cites e2, e3, e4, e8, e5): Every QSE that represents a Resource must submit a COP. [e2] ERCOT uses the information to calculate operating limits and Ancillary Service capabilities for each Resource for the RUC processes. [e3] QSEs report changes by exception for all hours after the Operating Period through the rest of the Operating Day, [e4] and must submit a revised COP no later than 60 minutes after an event that changes Resource availability. [e8] When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule for each On-Line Resource. [e5]
- **ERCOT context #1** (cites e6, e7): The COP is a planning and commitment input, not the real-time dispatch input: SCED uses telemetered Resource Status validated by the Real-Time Sequence instead of the COP Resource Status. [e6] The COP still matters for pricing because the day-ahead Energy Offer Curve is bounded by the LSL and HSL specified in the COP. [e7]
- **Key facts #1** (cites e1): - Covers each hour in the next seven Operating Days. [e1]
- **Key facts #2** (cites e2): - Must be submitted by each QSE that represents a Resource. [e2]
- **Key facts #3** (cites e3): - Used by ERCOT for RUC operating limits and Ancillary Service capabilities. [e3]
- **Key facts #4** (cites e8): - Revisions are due as soon as reasonably practicable and within 60 minutes of the event. [e8]
- **Key facts #5** (cites e6): - SCED uses telemetry, not COP Resource Status. [e6]
- **Common confusion #1** (cites e5): - COP versus offers: the COP states status and capability; prices live in the offer. A status change in the COP requires a matching offer update. [e5]
- **Common confusion #2** (cites e6): - COP versus real-time status: SCED does not read the COP status. [e6]
- **Questions #2** (cites e1): Seven Operating Days, hour by hour. [e1]
- **Questions #4** (cites e6): Not for Resource Status: it uses telemetry instead. [e6]
- **Questions #6** (cites e8): As soon as reasonably practicable, and within 60 minutes of the event. [e8]
- **Link to qse** (cites e2): related QSE (Qualified Scheduling Entity): Each QSE representing a Resource must submit a COP. [e2]
- **Link to ruc** (cites e3): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): ERCOT uses COP data to calculate operating limits and Ancillary Service capabilities for RUC. [e3]
- **Link to energy-offer-curve** (cites e5): related Energy Offer Curve: When a COP changes Resource Status, the QSE must update the Energy Offer Curve or Output Schedule. [e5]
- **Link to sced** (cites e6): contrasts-with SCED (Security-Constrained Economic Dispatch): SCED uses telemetered Resource Status instead of the COP Resource Status. [e6]
- **Link to hsl-lsl** (cites e7): related HSL / LSL: The DAM offer curve is bounded by the LSL and HSL specified in the COP. [e7]
- **Link to three-part-supply-offer** (cites e7): related Three-Part Supply Offer: Day-ahead offers are bounded by COP limits. [e7]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The COP is the QSE's rolling seven-day plan for each unit: whether it is on, its limits and what ancillary services it can provide. ERCOT uses it for commitment and day-ahead; real-time dispatch runs off telemetry.

