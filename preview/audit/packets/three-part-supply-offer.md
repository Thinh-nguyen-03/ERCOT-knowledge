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

## Statements to check

- **Definition #1** (cites e1): A Three-Part Supply Offer is an offer made by a QSE for a Generation Resource it represents, with three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. [e1]
- **How it works #1** (cites e2, e4, e3): The Startup Offer covers all costs a Generation Resource incurs in starting up and reaching its Low Sustained Limit (LSL), expressed in dollars per start. [e2] The Minimum-Energy Offer covers the cost of producing energy at the LSL, in $/MWh. [e4] ERCOT must validate each component before it can be used in any ERCOT process. [e3]
- **How it works #2** (cites e5): Different processes use different parts. The DAM uses all three parts and also accepts Energy Offer Curves submitted alone. RUC uses only the Startup and Minimum-Energy components to decide commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource's energy payments. SCED may use the Energy Offer Curve in real time. [e5]
- **ERCOT context #1** (cites e5, e7): The three components are used differently by each process: the DAM uses all three, RUC uses only the Startup and Minimum-Energy Offers for commitments, and SCED may use the Energy Offer Curve in real time. [e5] The IMM notes that ERCOT also applies a $250-per-MWh offer floor to RUC-committed units. [e7]
- **Key facts #1** (cites e1): - Three parts: Startup Offer, Minimum-Energy Offer, Energy Offer Curve. [e1]
- **Key facts #2** (cites e2, e4): - Startup Offer is in dollars per start; Minimum-Energy Offer is in $/MWh at LSL. [e2][e4]
- **Key facts #3** (cites e5): - RUC uses only the Startup and Minimum-Energy Offers for commitment decisions. [e5]
- **Key facts #4** (cites e3): - ERCOT must validate each component before use. [e3]
- **Common confusion #1** (cites e1, e5): - Three-Part Offer versus Energy Offer Curve: the curve is only one of the three parts, and the DAM also accepts a curve without the other two. [e1][e5]
- **Common confusion #2** (cites e5): - The DAM also uses Energy Offer Curves submitted without a Startup Offer and Minimum-Energy Offer, while RUC uses only the Startup and Minimum-Energy components for commitments. [e5]
- **Questions #2** (cites e1): Startup Offer, Minimum-Energy Offer, and Energy Offer Curve. [e1]
- **Questions #4** (cites e5): Only the Startup Offer and Minimum-Energy Offer for commitments; the energy curve may be used in Settlement to claw back energy payments. [e5]
- **Questions #6** (cites e2): All costs incurred in starting up and reaching LSL, in dollars per start. [e2]
- **Link to energy-offer-curve** (cites e1): composed-of Energy Offer Curve: The Energy Offer Curve is the third component of the Three-Part Supply Offer. [e1]
- **Link to dam** (cites e5): used-in Day-Ahead Market (DAM): The DAM uses all three parts of the offer. [e5]
- **Link to ruc** (cites e5): used-in RUC (Reliability Unit Commitment: DRUC/HRUC): RUC uses only the Startup and Minimum-Energy components to determine commitments. [e5]
- **Link to sced** (cites e5): used-in SCED (Security-Constrained Economic Dispatch): SCED may use the Energy Offer Curve in Real-Time Operations. [e5]
- **Link to qse** (cites e1): related QSE (Qualified Scheduling Entity): A QSE makes the offer for a Generation Resource it represents. [e1]
- **Link to cop** (cites e6): related COP (Current Operating Plan): Energy Offer Curves are bounded in the DAM by the LSL and HSL of the Generation Resource specified in the COP. [e6]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A three-part offer tells ERCOT what it costs to start the unit, what it costs to run it at minimum, and what each additional MWh costs. RUC uses the first two to decide commitments, the day-ahead market uses all three, and SCED may use the energy curve.

