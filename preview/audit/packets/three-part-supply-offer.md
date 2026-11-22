# Audit packet: Three-Part Supply Offer (three-part-supply-offer)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Three-Part Supply Offer · text copy line 3126

BEFORE: …l standards that enable and facilitate the retail business processes in the deregulated Texas electric market. (2) The procedures used to transmit information pertaining to the Customer Registration Database are set forth in Section 19, Texas Standard Electronic Transaction. Three-Part Supply Offer 
QUOTE: An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  Time Of Use (TOU) Meter A programmable electronic device capable of measuring and recording electric energy in pre-specified time periods. For Load Profiling purposes TOU Metering does not include IDRs. Time Of Use Schedule (TOUS) A schedule identifying the Time Of Use period associated with each S…

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

### e8 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.2, paragraph (1) · text copy line 1286 · heading above: 4.4.9.2 Startup Offer and Minimum-Energy Offer

BEFORE: … Process, other than HSL, are ignored. (4) For any hours in which the Resource is not RUC-committed, ERCOT shall consider all Three-Part Supply Offers in the RUC process until: (a) The QSE withdraws the offer; or (b) The offer expires by its terms. 4.4.9.2 Startup Offer and Minimum-Energy Offer (1) 
QUOTE: The Startup Offer component represents all costs incurred by a Generation Resource in starting up and reaching its LSL. The Minimum-Energy Offer component represents a proxy for the costs incurred by a Resource in producing energy at the Resource's LSL. Startup Offers and Minimum-Energy Offers are not applicable to ESRs.
AFTER:  4.4.9.2.1 Startup Offer and Minimum-Energy Offer Criteria (1) Each Startup Offer and Minimum-Energy Offer must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) The Resource's hot…

### e17 · `np-05` · tier 1 · ERCOT Nodal Protocols, Section 5: Transmission Security Analysis and Reliability Unit Commitment (effective 2026-08-01)
locator: Section 5.6.1, paragraph (2) · text copy line 465 · heading above: 5.6.1 Verifiable Costs

BEFORE: … responsibility, in which case both the QSE and Resource Entity shall submit an affidavit to ERCOT stating this arrangement. Notwithstanding the foregoing, QSEs that submit Power Purchase or Tolling Agreements (PPAs) do not have the option of allowing Resource Entities to file verifiable costs. (2) 
QUOTE: Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs.
AFTER:  A QSE or Resource Entity may file verifiable unit-specific costs for a Resource at any time, but it must file those costs no later than 30 days after five Reliability Unit Commitment (RUC) events for that Resource in a calendar year. A RUC event begins when a Resource receives a RUC instruction to …

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, paragraph (3)(a) · text copy line 1268 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …s an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer is considered not to be offering the Resource into the RUC, but that does not prevent the Resource from being committed in the RUC process like any other Resource that does not submit an offer in the RUC. (a) 
QUOTE: A QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for any given hour will be considered by the DAM to be self-committed for that hour, as long as an Ancillary Service Offer for Off-Line Non-Spin Service was not also submitted for that hour.
AFTER:  (b) A Combined Cycle Generation Resource will be considered by the DAM to be self-committed if: (i) Its QSE submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for that Combined Cycle Generation Resource and no other Combined Cycle Generation Resource within…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …rves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) 
QUOTE: An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP.
AFTER:  After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message. (3) The minimum amount per Resource for each Energy Offer Curve that may be offered is one MW. 4.4.9.3.2 Energy Offer Curve…

## Statements to check (new or changed since the last audit)

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

