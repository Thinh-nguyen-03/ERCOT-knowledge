# Audit packet: Three-Part Supply Offer (three-part-supply-offer)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Three-Part Supply Offer · text copy line 3126

BEFORE: …l standards that enable and facilitate the retail business processes in the deregulated Texas electric market. (2) The procedures used to transmit information pertaining to the Customer Registration Database are set forth in Section 19, Texas Standard Electronic Transaction. Three-Part Supply Offer 
QUOTE: An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  Time Of Use (TOU) Meter A programmable electronic device capable of measuring and recording electric energy in pre-specified time periods. For Load Profiling purposes TOU Metering does not include IDRs. Time Of Use Schedule (TOUS) A schedule identifying the Time Of Use period associated with each S…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Startup Offer · text copy line 2985

BEFORE: … Plan (COP) which occurs while the unit is ramping up to its scheduled MW output. A Startup Loading Failure ends when the Resource: (a) Achieves its LSL; (b) Is scheduled to go Off-Line; or (c) Ceases the attempt to start the Generation Resource and changes its Resource Status to OUT. Startup Offer 
QUOTE: An offer for all costs incurred by a Generation Resource in starting up and reaching Low Sustained Limit (LSL). The Startup Offer is in dollars per start.
AFTER:  State Estimator A computational algorithm that uses Real-Time inputs from the network's Supervisory Control and Data Acquisition (SCADA) system that measure the network's electrical parameters, including its topology, voltage, power flows, etc., to estimate electrical parameters (such as line flows…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (1) · text copy line 1262 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: … at its discretion, Dispatch RMR Units to restore the ERCOT Transmission Grid. (c) RMR offers shall be treated as if they were Resource offers for purposes of posting under Section 3.2.5, Publication of Resource and Load Information. 4.4.9 Energy Offers and Bids 4.4.9.1 Three-Part Supply Offers (1) 
QUOTE: A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process.
AFTER:  (2) The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. The RUC only uses the Startup Offer and the Minimum-Energy Offer components for determining RUC commitments, but the Energy Offer C…

### e4 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Minimum-Energy Offer · text copy line 1636

BEFORE: …ied as the MRE in ERCOT systems. Metering Facilities Revenue Quality Meters, instrument transformers, secondary circuitry, secondary devices, meter data servers, related communication Facilities and other related local equipment intended to supply ERCOT settlement quality data. Minimum-Energy Offer 
QUOTE: An offer for the costs incurred by a Resource in producing energy at the Resource's LSL expressed in $/MWh.
AFTER:  Minimum Point-to-Point (PTP) Option Bid Price A value of $0.010 representing the minimum price that can be submitted into the CRR Auction for a PTP Option bid. Minimum Reservation Price The lowest price that a seller is willing to accept. Mitigated Offer Cap (MOC) An upper limit on the price of an …

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (2) · text copy line 1264 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: … Energy Offers and Bids 4.4.9.1 Three-Part Supply Offers (1) A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process. (2) 
QUOTE: The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. The RUC only uses the Startup Offer and the Minimum-Energy Offer components for determining RUC commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource's energy payments. The Energy Offer Curve may also be used by SCED in Real-Time Operations.
AFTER:  (3) A QSE may submit an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer for the DAM and during the Adjustment Period, but only Three-Part Supply Offers are used in the RUC process. A QSE that submits an Energy Offer Curve without also submitting a Startup Offer…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (2) · text copy line 1406 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …proved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations. (2) 
QUOTE: A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry.
AFTER:  (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, …

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market operations discussion of RUC · text copy line 6410

BEFORE: …) to adjust real-time prices upward and preserve the shortage signals that would have existed without the out-of-market commitment. See Figure 6 in Chapter I.D.2 for more information on the frequency and magnitude of the RDPA for 2021-2025. 78 | 2025 State of the Market Report / / Market Operations 
QUOTE: ERCOT also applies a $250-per-MWh offer floor to RUC-committed units.
AFTER:  This high minimumoffer price reduces the likelihood that these resources will be economically dispatched or set the market clearing price, which limits their direct influence on real-time prices. Together, these tools limit the extent to which RUC suppresses prices. Make-Whole Payments, Clawbacks, …

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2, paragraph (1) · text copy line 1286 · heading above: 4.4.9.2 Startup Offer and Minimum-Energy Offer

BEFORE: … Process, other than HSL, are ignored. (4) For any hours in which the Resource is not RUC-committed, ERCOT shall consider all Three-Part Supply Offers in the RUC process until: (a) The QSE withdraws the offer; or (b) The offer expires by its terms. 4.4.9.2 Startup Offer and Minimum-Energy Offer (1) 
QUOTE: The Startup Offer component represents all costs incurred by a Generation Resource in starting up and reaching its LSL. The Minimum-Energy Offer component represents a proxy for the costs incurred by a Resource in producing energy at the Resource's LSL. Startup Offers and Minimum-Energy Offers are not applicable to ESRs.
AFTER:  4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria (1) Each Startup Offer and Minimum-Energy Offer must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) The Resource's hot…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.1, paragraph (1)(c) · text copy line 1296 · heading above: 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria

BEFORE: …ot applicable to ESRs. 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria (1) Each Startup Offer and Minimum-Energy Offer must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; 
QUOTE: (c) The Resource's hot, intermediate, and cold Startup Offer in dollars;
AFTER:  (d) The Resource's Minimum-Energy Offer in dollars per MWh; (e) The first and last hour of the Startup and Minimum-Energy Offers (f) The expiration time and date of the offer; (g) Percentage of the Fuel Index Price (FIP) to the extent that the startup and minimum energy will be supplied by gas to d…

### e10 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.1, paragraph (2) · text copy line 1308 · heading above: 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria

BEFORE: …(g) Percentage of the Fuel Index Price (FIP) to the extent that the startup and minimum energy will be supplied by gas to determine the offer cap; and (h) Percentage of the Fuel Oil Price (FOP) to the extent that the startup and minimum energy will be supplied by oil to determine the offer cap. (2) 
QUOTE: Valid Startup Offers and Minimum-Energy Offers (which must be part of a Three-Part Supply Offer) must be received before 1000 for the effective DAM and DRUC.
AFTER:  (3) A QSE may update and submit a Startup Offer and/or Minimum-Energy Offer for a Resource during the Adjustment Period for any hours in which the Resource is not DAM- or RUC-committed before the offer is updated or submitted. (4) The Resource's Startup Offer must not be greater than 200% of the Re…

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.1, paragraph (4) · text copy line 1312 · heading above: 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria

BEFORE: … Offer) must be received before 1000 for the effective DAM and DRUC. (3) A QSE may update and submit a Startup Offer and/or Minimum-Energy Offer for a Resource during the Adjustment Period for any hours in which the Resource is not DAM- or RUC-committed before the offer is updated or submitted. (4) 
QUOTE: The Resource's Startup Offer must not be greater than 200% of the Resource Category Generic Startup Cost for that type of Resource listed in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps, unless ERCOT has approved verifiable Resource-specific startup costs for that Resource, under Section 4.4.9.2.4, Verifiable Startup Offer and Minimum-Energy Offer Caps, in which case the Resource's Startup Offer must not be greater than 200% of those approved verifiable Resource-specific Startup Costs.
AFTER:  (5) The Resource's Minimum-Energy Offer must not be greater than 200% of the Resource Category Generic Minimum-Energy Cost for that type of Resource listed in Section 4.4.9.2.3 unless ERCOT has approved verifiable Resource-specific minimum-energy costs for that Resource, under Section 4.4.9.2.4 in …

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.1, paragraph (5) · text copy line 1314 · heading above: 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria

BEFORE: …RCOT has approved verifiable Resource-specific startup costs for that Resource, under Section 4.4.9.2.4, Verifiable Startup Offer and Minimum-Energy Offer Caps, in which case the Resource's Startup Offer must not be greater than 200% of those approved verifiable Resource-specific Startup Costs. (5) 
QUOTE: The Resource's Minimum-Energy Offer must not be greater than 200% of the Resource Category Generic Minimum-Energy Cost for that type of Resource listed in Section 4.4.9.2.3 unless ERCOT has approved verifiable Resource-specific minimum-energy costs for that Resource, under Section 4.4.9.2.4 in which case the Resource's Minimum-Energy Offer must not be greater than 200% of those approved verifiable Resource-specific minimum-energy costs.
AFTER:  (6) Prior to 1000 for the effective DAM, a QSE may submit and update a Three-Part Supply Offer for a Resource for any hours which were Weekly Reliability Unit Commitment (WRUC)-instructed. 4.4.9.2.2 Startup Offer and Minimum-Energy Offer Validation (1) A valid Startup Offer and Minimum-Energy Offer…

### e13 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.1, paragraph (3) · text copy line 1310 · heading above: 4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria

BEFORE: …age of the Fuel Oil Price (FOP) to the extent that the startup and minimum energy will be supplied by oil to determine the offer cap. (2) Valid Startup Offers and Minimum-Energy Offers (which must be part of a Three-Part Supply Offer) must be received before 1000 for the effective DAM and DRUC. (3) 
QUOTE: A QSE may update and submit a Startup Offer and/or Minimum-Energy Offer for a Resource during the Adjustment Period for any hours in which the Resource is not DAM- or RUC-committed before the offer is updated or submitted.
AFTER:  (4) The Resource's Startup Offer must not be greater than 200% of the Resource Category Generic Startup Cost for that type of Resource listed in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps, unless ERCOT has approved verifiable Resource-specific startup costs for that Reso…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.3, paragraph (2)(c) · text copy line 1368 · heading above: 4.4.9.2.3 Startup Offer and Minimum-Energy Offer Generic Caps

BEFORE: …----------------------------------------------------------------------------------- (2) The Resource Category Minimum-Energy Generic Cap is the cost per MWh of energy for a Resource to produce energy at the Resource's LSL and is as follows: (a) Hydro = $10.00/MWh; (b) Coal and lignite = $18.00/MWh; 
QUOTE: (c) Combined-cycle greater than 90 MW = 8 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in Minimum-Energy Offer;
AFTER:  (d) Combined-cycle less than or equal to 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in Minimum-Energy Offer; (e) Gas steam supercritical boiler = 14 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in Minimum-…

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.3, paragraph (3) · text copy line 1394 · heading above: 4.4.9.2.3 Startup Offer and Minimum-Energy Offer Generic Caps

BEFORE: … of FOP * FOP))/100, as specified in the Minimum-Energy Offer; (k) RMR Resource = RMR contract estimated fuel cost using its contract I/O curve at its LSL times FIP; (l) Nuclear = Not Applicable; (m) Wind generation Resources = $0; (n) PVGRs = $0; and (o) Other Resources not defined above = $0. (3) 
QUOTE: The FIP and FOP used to calculate the Resource Category Minimum-Energy Generic Cap shall be the FIP or FOP for the Operating Day. In the event the Resource Category Minimum-Energy Generic Cap must be calculated before the FIP or FOP is available for the particular Operating Day, the FIP and FOP for the most recent preceding Operating Day shall be used.
AFTER:  Once the FIP and FOP are available for a particular Operating Day, those values shall be used in the calculations. If the percentage fuel mix is not specified for Resource categories having the option to specify the fuel mix, then the minimum of FIP or FOP shall be used. (4) Items (2)(c) and (2)(d)…

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2.4, paragraph (1) · text copy line 1400 · heading above: 4.4.9.2.4 Verifiable Startup Offer and Minimum-Energy Offer Caps

BEFORE: …for Resource categories having the option to specify the fuel mix, then the minimum of FIP or FOP shall be used. (4) Items (2)(c) and (2)(d) above are determined by capacity of largest simple-cycle combustion turbine in the train. 4.4.9.2.4 Verifiable Startup Offer and Minimum-Energy Offer Caps (1) 
QUOTE: Once verifiable Resource-specific startup costs and minimum-energy costs are established and approved by ERCOT in accordance with Section 5.6.1, Verifiable Costs, then they are used in place of generic costs as described in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps. A QSE may file verifiable unit-specific costs for a Resource at any time, but it is not required to file those costs only because of a DAM commitment. The most recent approved verifiable costs on file must be used going forward.
AFTER:  4.4.9.3 Energy Offer Curve (1) The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations. (2) A QSE may submit Resource-specific Energy Offer Curves to E…

### e17 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.1, paragraph (2) · text copy line 465 · heading above: 5.6.1 Verifiable Costs

BEFORE: … responsibility, in which case both the QSE and Resource Entity shall submit an affidavit to ERCOT stating this arrangement. Notwithstanding the foregoing, QSEs that submit Power Purchase or Tolling Agreements (PPAs) do not have the option of allowing Resource Entities to file verifiable costs. (2) 
QUOTE: Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs.
AFTER:  A QSE or Resource Entity may file verifiable unit-specific costs for a Resource at any time, but it must file those costs no later than 30 days after five Reliability Unit Commitment (RUC) events for that Resource in a calendar year. A RUC event begins when a Resource receives a RUC instruction to …

### e18 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Section 1 (policies), paragraph (3) · text copy line 305 · heading above: 1.5 An Introduction to Verifiable Costs

BEFORE: …cant component in the Texas Nodal Market. They are used by ERCOT in various calculations and internal processes, including the replacement of generic generator-specific cost caps and to provide Qualified Scheduling Entities (QSEs) with forms of cost recovery that would otherwise be unavailable. (3) 
QUOTE: Verifiable Costs are used as a proxy for the costs a Resource incurs while operating. These costs are determined for, and allocated according to, the three discrete stages of the power generation cycle: startup to Low Sustained limit (LSL), operation at LSL, and operation above LSL.
AFTER:  While Verifiable Costs are calculated uniquely for each of these stages, Verifiable Costs in all stages are a function of two types of costs: Fuel Costs and Operation and Maintenance (O&M) costs. (4) The Fuel Cost component of Verifiable Costs is intended to capture the fuel costs a Resource incurs…

### e19 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Section 3.2, paragraph (1) · text copy line 676 · heading above: 3.2 Submitting Startup Costs

BEFORE: …s. (4) Fuel consumed from breaker open to Shutdown may be included as a Verifiable Startup Cost. (5) For additional information on how to calculate the Verifiable Startup Costs, please refer to Section 14, Appendices, Appendix 5, Specification of Relevant Equations. 3.2 Submitting Startup Costs (1) 
QUOTE: Verifiable Startup Costs for a Resource represent a proxy for all of the costs incurred in order to bring a Resource online and make it available to produce power. Only the costs incurred from startup through Low Sustained Limit (LSL) and from breaker open to Shutdown are permissible startup costs.
AFTER:  (2) The nature of the data that a Filing Entity may submit is set forth in this manual and also within Protocol Section 5.6.1.1, Verifiable Startup Costs. 3.3 Startup Fuel Consumption (1) Fuel consumed during a startup is defined as the fuel consumed from first fire through LSL plus the fuel consum…

### e20 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Section 1, paragraph (h) · text copy line 365 · heading above: 2.1 Generally Applicable Rules

BEFORE: … Heat Rate (IHR) curves, with the exception of RMR Resources which are required to submit IHR curves, the incremental Operations & Maintenance (O&M) costs of generating power at greater than LSL output. Submission of this information is also optional for QSEs that have received RUC commitments. (h) 
QUOTE: ERCOT will not separately approve Verifiable Startup Costs and Verifiable Minimum Energy Costs. Both must be submitted and approved together.
AFTER:  (i) If fuel consumption rates vary by season, Filing Entities must submit such seasonal costs in accordance with the procedure described herein. (j) All submissions of Verifiable Cost data must include an affidavit that avers to the data's accuracy and authenticity and that is signed by an officer …

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (3)(a) · text copy line 1268 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …s an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer is considered not to be offering the Resource into the RUC, but that does not prevent the Resource from being committed in the RUC process like any other Resource that does not submit an offer in the RUC. (a) 
QUOTE: A QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for any given hour will be considered by the DAM to be self-committed for that hour, as long as an Ancillary Service Offer for Off-Line Non-Spin Service was not also submitted for that hour.
AFTER:  (b) A Combined Cycle Generation Resource will be considered by the DAM to be self-committed if: (i) Its QSE submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for that Combined Cycle Generation Resource and no other Combined Cycle Generation Resource within…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (3)(b) · text copy line 1270 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: … A QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for any given hour will be considered by the DAM to be self-committed for that hour, as long as an Ancillary Service Offer for Off-Line Non-Spin Service was not also submitted for that hour. (b) 
QUOTE: A Combined Cycle Generation Resource will be considered by the DAM to be self-committed if:
AFTER:  (i) Its QSE submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for that Combined Cycle Generation Resource and no other Combined Cycle Generation Resource within the Combined Cycle Train; and (ii) Its QSE submits no Ancillary Service Offer for Off-Line Non-…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (3) · text copy line 1266 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …yments. The Energy Offer Curve may also be used by SCED in Real-Time Operations. (3) A QSE may submit an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer for the DAM and during the Adjustment Period, but only Three-Part Supply Offers are used in the RUC process. 
QUOTE: A QSE that submits an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer is considered not to be offering the Resource into the RUC, but that does not prevent the Resource from being committed in the RUC process like any other Resource that does not submit an offer in the RUC.
AFTER:  (a) A QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for any given hour will be considered by the DAM to be self-committed for that hour, as long as an Ancillary Service Offer for Off-Line Non-Spin Service was not also submitted for that hour. …

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (1) · text copy line 1404 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: … and Minimum-Energy Offer Generic Caps. A QSE may file verifiable unit-specific costs for a Resource at any time, but it is not required to file those costs only because of a DAM commitment. The most recent approved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) 
QUOTE: The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations.
AFTER:  (2) A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetr…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(c) · text copy line 1430 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …ffer Curve is submitted in a subsequent Adjustment Period. 4.4.9.3.1 Energy Offer Curve Criteria (1) Each Energy Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) 
QUOTE: A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;
AFTER:  (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP.
AFTER:  After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amount per Resource for each Energy Offer Curve that may be offered is one MW. 4.4.9.3.2 Energy Offer Curve…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (6) · text copy line 1418 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …(5) A QSE may withdraw an Energy Offer Curve if: (a) An Output Schedule is submitted for all intervals for which an Energy Offer Curve is withdrawn; or (b) The Resource is forced Off-Line and notifies ERCOT of the Forced Outage by changing the Resource Status appropriately and updating its COP. (6) 
QUOTE: For any Operating Hour that is a RUC-Committed Interval or a DAM-Committed Interval for a Resource, a QSE for that Resource may not change a Startup Offer or Minimum-Energy Offer.
AFTER:  (7) If a valid Energy Offer Curve or an Output Schedule does not exist for a Resource that has a status of On-Line at the end of the Adjustment Period, then ERCOT shall notify the QSE and set the Output Schedule equal to the then current telemetered output of the Resource until an Output Schedule o…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.3, paragraph (1) · text copy line 1456 · heading above: 4.4.9.3.3 Energy Offer Curve Cost Caps

BEFORE: … The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate Energy Offer Curves and continuously display on the MIS Certified Area information that allows any QSE to view its valid Energy Offer Curves. 4.4.9.3.3 Energy Offer Curve Cost Caps (1) 
QUOTE: The following Energy Offer Curve Cost Caps must be used for the purpose of make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments:
AFTER:  (a) Nuclear = $15.00/MWh; (b) Coal and Lignite = $18.00/MWh; (c) Combined Cycle greater than 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (d) Combined Cycle less than or equal to 90 MW = 10 MMBtu/MWh * ((Percentage of FIP…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.3, paragraph (1)(c) · text copy line 1462 · heading above: 4.4.9.3.3 Energy Offer Curve Cost Caps

BEFORE: …nergy Offer Curve Cost Caps must be used for the purpose of make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments: (a) Nuclear = $15.00/MWh; (b) Coal and Lignite = $18.00/MWh; 
QUOTE: (c) Combined Cycle greater than 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve;
AFTER:  (d) Combined Cycle less than or equal to 90 MW = 10 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (e) Gas - Steam Supercritical Boiler = 10.5 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in t…

### e30 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Executive summary, RUC discussion (page ix) · text copy line 1160

BEFORE: …nts for installation by 2028. Development of Renewable Resources and Energy Storage, 2019-2028 160 Installed Capacity (GW) 140 120 100 ESR - Projected Solar - Projected Wind - Projected ESR - Existing Solar - Existing Wind - Existing 80 60 40 20 0 2019 1 2020 2021 2022 2023 2024 2025 2026 2027 2028 
QUOTE: Nodal Protocol Revision Request (NPRR) 1092, Reduce RUC Offer Floor and Limit RUC Opt-Out Provision was filed by the IMM and approved by the Board. The RUC offer floor was reduced to $250 per MWh but the RUC opt-out provision will be removed once ERCOT completes implementation.
AFTER:  NPRR 1172, Fuel Adder Definition, Mitigated Offer Caps, and RUC Clawback, was implemented by the PUCT on March 1, 2024. 2024 State of the Market Report | ix / / Executive Summary As the resource mix in ERCOT continues to shift, this transformation will carry several implications for market performa…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Offer stack discussion (energy offer floor for online NSRS) · text copy line 1976

BEFORE: …ed between zero and 10 times the daily natural gas price (known as the FIP) in 2025 compared to 23% in 2024. This range represents the incremental fuel price for the vast majority of the ERCOT generation fleet. • Roughly 15% of capacity was offered above this level in 2025, compared to 19% in 2024. 
QUOTE: The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025.
AFTER:  Figure 7: Aggregated Generation Offer Stack - Annual, Peak and Net Peak Load !""#$#%C'#(#$)G+,(C-).)/+G0C1'O3 ""! "!! *! F! (! ?"!!!@ABCH7 ?(C@?"!!! ?a"!EFd7e0>W0?(C ?!@?a"!EFd7e fg! KOLWL09A9 '! C! B! A! #! "! ! #!#B #!#C HII-.L0HNOP.4O05SSOP #!#B #!#C 7O.809W.;0<W-P #!#B #!#C 7O.80=O>09W.;0<W-P F…

## Statements to check

- **Definition #1** (cites e1): A Three-Part Supply Offer is an offer made by a QSE for a Generation Resource it represents, with three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. [e1]
- **How it works #1** (cites e2, e4, e8, e24, e3): The Startup Offer covers all costs a Generation Resource incurs in starting up and reaching its Low Sustained Limit (LSL), expressed in dollars per start. [e2] The Protocols describe the Minimum-Energy Offer as a proxy for the costs of producing energy at the LSL, in $/MWh. [e4][e8] Startup Offers and Minimum-Energy Offers are not applicable to ESRs. [e8] The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and quantity in the DAM, or its willingness to be dispatched by SCED in Real-Time Operations. [e24] ERCOT must validate each component before it can be used in any ERCOT process. [e3]
- **How it works #2** (cites e5): Different processes use different parts. The DAM uses all three parts and also accepts Energy Offer Curves submitted alone. RUC uses only the Startup and Minimum-Energy components to decide commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource's energy payments. SCED may use the Energy Offer Curve in real time. [e5]
- **How it works #3** (cites e9, e10, e13, e27): **Offer criteria and timing.** A Startup Offer is submitted as separate hot, intermediate and cold amounts in dollars. [e9] Valid Startup and Minimum-Energy Offers must be received before 1000 for the effective DAM and DRUC. [e10] During the Adjustment Period a QSE may update them for hours in which the Resource is not DAM- or RUC-committed. [e13] For any Operating Hour that is a RUC-Committed Interval or a DAM-Committed Interval, the QSE may not change the Startup Offer or Minimum-Energy Offer. [e27]
- **How it works #4** (cites e25, e26, e6): The Energy Offer Curve must be a monotonically non-decreasing price and quantity curve of no more than ten price/quantity pairs, with no more than two consecutive pairs at the same price or quantity. [e25] It must fall within -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, and no curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. [e26] Energy Offer Curves are bounded in the DAM by the LSL and HSL specified in the COP, and in SCED by the LSL and HSL shown by telemetry. [e6]
- **How it works #5** (cites e11, e12): **Caps on the startup and minimum-energy components.** A Startup Offer may not exceed 200% of the Resource Category Generic Startup Cost for that Resource type, unless ERCOT has approved verifiable Resource-specific startup costs, in which case the limit is 200% of those approved costs. [e11] The Minimum-Energy Offer has the same 200% limit against the generic or verifiable minimum-energy cost. [e12]
- **How it works #6** (cites e16, e17, e18, e19, e20): **Verifiable costs.** Once ERCOT approves verifiable Resource-specific startup and minimum-energy costs under Section 5.6.1, they replace the generic costs; a QSE may file at any time and need not file only because of a DAM commitment, and the most recent approved costs on file must be used going forward. [e16] Make-Whole Payments are based on the Startup and Minimum-Energy Offers, limited by caps: the generic caps until ERCOT approves verifiable unit-specific costs, and those verifiable costs afterwards. [e17] ERCOT's Verifiable Cost Manual describes Verifiable Costs as a proxy for operating costs across three stages: startup to LSL, operation at LSL, and operation above LSL. [e18] Only costs incurred from startup through LSL and from breaker open to Shutdown are permissible startup costs. [e19] ERCOT will not separately approve Verifiable Startup Costs and Verifiable Minimum Energy Costs; both must be submitted and approved together. [e20]
- **Formula #1** (cites e14, e15): The generic Minimum-Energy cap for most gas Resources is a heat-rate-times-fuel-price formula. For a combined-cycle Resource greater than 90 MW it is 8 MMBtu/MWh times the fuel price, where the fuel price is the QSE's specified percentage of the Fuel Index Price (FIP) times FIP plus its specified percentage of the Fuel Oil Price (FOP) times FOP, divided by 100. [e14] Other categories use different MMBtu/MWh values in the same expression. [e14] ERCOT uses the FIP and FOP for the Operating Day; if the cap must be calculated before they are available, it uses the most recent preceding Operating Day's values, and replaces them once the Operating Day's values are available. [e15]
- **Formula #2** (cites e28, e29): The Energy Offer Curve Cost Caps (used for make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments) use the same form with different heat rates; for example a combined cycle greater than 90 MW uses 9 MMBtu/MWh. [e28][e29]
- **ERCOT context #1** (cites e21, e22, e23): Self-commitment in the DAM: a QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for an hour is treated by the DAM as self-committed for that hour, as long as an Off-Line Non-Spin Ancillary Service Offer was not also submitted for that hour. [e21] A Combined Cycle Generation Resource is treated as self-committed under a parallel condition, which the Protocol states in two parts about the offers made for Resources within the Combined Cycle Train. [e22] A curve-only offer is considered not to be offering the Resource into RUC, but the Resource can still be RUC-committed like any other Resource with no RUC offer. [e23]
- **ERCOT context #2** (cites e30, e7, e31): On the price floors in the offer-related rules: the IMM reported that NPRR 1092 reduced the RUC offer floor to $250 per MWh, and its 2025 report says ERCOT applies a $250-per-MWh offer floor to RUC-committed units. [e30][e7] The IMM's 2025 report also describes a $75 level as the energy offer floor for capacity providing online Non-Spin Reserve Service, which averaged approximately 1,000 MW in 2025. [e31]
- **Key facts #1** (cites e1): - Three parts: Startup Offer, Minimum-Energy Offer, Energy Offer Curve. [e1]
- **Key facts #2** (cites e2, e4): - Startup Offer is in dollars per start; Minimum-Energy Offer is in $/MWh at LSL. [e2][e4]
- **Key facts #3** (cites e10): - Startup and Minimum-Energy Offers must be received before 1000 for the effective DAM and DRUC. [e10]
- **Key facts #4** (cites e11, e12): - Both are capped at 200% of the generic or approved verifiable cost. [e11][e12]
- **Key facts #5** (cites e5): - RUC uses only the Startup and Minimum-Energy Offers for commitment decisions. [e5]
- **Key facts #6** (cites e25, e26): - Energy Offer Curves: at most ten price/quantity pairs, within -$250/MWh and the DASWCAP or RTSWCAP. [e25][e26]
- **Key facts #7** (cites e3): - ERCOT must validate each component before use. [e3]
- **Common confusion #1** (cites e1, e5): - Three-Part Offer versus Energy Offer Curve: the curve is only one of the three parts, and the DAM also accepts a curve without the other two. [e1][e5]
- **Common confusion #2** (cites e21, e23): - An energy-curve-only DAM offer is not "no offer": the DAM treats it as self-committed for that hour (unless an Off-Line Non-Spin offer was also submitted), and the Resource is not offering into RUC but can still be RUC-committed. [e21][e23]
- **Common confusion #3** (cites e11, e12, e16): - Verifiable costs do not replace the offer: the offer is still capped at 200% of the generic or verifiable cost. [e11][e12][e16]
- **Questions #2** (cites e1): Startup Offer, Minimum-Energy Offer, and Energy Offer Curve. [e1]
- **Questions #4** (cites e5): Only the Startup Offer and Minimum-Energy Offer for commitments; the energy curve may be used in Settlement to claw back energy payments. [e5]
- **Questions #6** (cites e2, e9): All costs incurred in starting up and reaching LSL, in dollars per start, submitted for hot, intermediate and cold starts. [e2][e9]
- **Questions #8** (cites e17, e11, e12): Make-Whole Payments are limited by caps, and until ERCOT approves verifiable unit-specific costs the caps are the generic ones; once approved, the verifiable costs are the caps, and the Startup and Minimum-Energy Offers are limited to 200% of them. [e17][e11][e12]
- **Questions #10** (cites e21, e23): The DAM treats the Resource as self-committed for that hour unless an Off-Line Non-Spin Offer was also submitted for it, and the Resource is not offering into RUC. [e21][e23]
- **Questions #12** (cites e8): The Protocols state they are not applicable to ESRs, so an ESR's offer is an Energy Offer Curve; the Protocol text does not give the reason. [e8]
- **Scenarios #2** (cites e11): - The offer may not exceed 200% of the generic startup cost, or of ERCOT-approved verifiable startup costs if those exist. [e11]
- **Scenarios #3** (cites e20): - Verifiable startup costs must be submitted for hot, intermediate and cold starts and approved together with minimum-energy costs. [e20]
- **Scenarios #4** (cites e16): - ERCOT uses approved costs prospectively once approved. [e16]
- **Link to energy-offer-curve** (cites e1): composed-of Energy Offer Curve: The Energy Offer Curve is the third component of the Three-Part Supply Offer. [e1]
- **Link to dam** (cites e5): used-in Day-Ahead Market (DAM): The DAM uses all three parts of the offer. [e5]
- **Link to ruc** (cites e5): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses only the Startup and Minimum-Energy components to determine commitments. [e5]
- **Link to sced** (cites e5): used-in SCED (Security-Constrained Economic Dispatch): SCED may use the Energy Offer Curve in Real-Time Operations. [e5]
- **Link to qse** (cites e1): related QSE (Qualified Scheduling Entity): A QSE makes the offer for a Generation Resource it represents. [e1]
- **Link to cop** (cites e6): related COP (Current Operating Plan): Energy Offer Curves are bounded in the DAM by the LSL and HSL of the Generation Resource specified in the COP. [e6]
- **Link to ruc-make-whole** (cites e17): related RUC Make-Whole & Clawback: Make-Whole Payments are based on the Startup and Minimum-Energy Offers, limited by caps. [e17]
- **Link to offer-cap** (cites e26): related Offer Caps (HCAP / LCAP / SWCAP): Energy Offer Curves must sit between -$250/MWh and the DASWCAP or RTSWCAP, depending on submission timing. [e26]
- **Link to market-power-mitigation** (cites e5): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): Energy Offer Curves may be mitigated in SCED using a Mitigated Offer Cap and a Mitigated Offer Floor. [e5]
- **Link to hsl-lsl** (cites e8): related HSL / LSL: The Startup Offer ends at LSL and the Minimum-Energy Offer is for operating at LSL. [e8]
- **Link to energy-storage-resource** (cites e8): contrasts-with Energy Storage Resource (ESR): Startup Offers and Minimum-Energy Offers are not applicable to ESRs. [e8]
- **Link to non-spin** (cites e21): related Non-Spinning Reserve: An Off-Line Non-Spin Offer for an hour stops an energy-curve-only offer from being treated as self-committed. [e21]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A three-part offer tells ERCOT what it costs to start the unit, what it costs to run it at minimum, and what each additional MWh costs. RUC uses the first two to decide commitments, the day-ahead market uses all three, and SCED may use the energy curve. The startup and minimum-energy pieces are capped, so what a unit can claim in make-whole depends on generic or approved verifiable costs.

