# Audit packet: Energy Offer Curve (energy-offer-curve)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (2) · text copy line 1406 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …proved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations. (2) 
QUOTE: A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry.
AFTER:  (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, …

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, Three-Part Supply Offers, paragraph (1) · text copy line 1262 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …may, at its discretion, Dispatch RMR Units to restore the ERCOT Transmission Grid. (c) RMR offers shall be treated as if they were Resource offers for purposes of posting under Section 3.2.5, Publication of Resource and Load Information. 4.4.9 Energy Offers and Bids 4.4.9.1 Three-Part Supply Offers 
QUOTE: (1) A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process. (2) The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. Th…

### e15 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (2) · text copy line 1442 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …r Curves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. 
QUOTE: (2) An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message.
AFTER:  (3) The minimum amount per Resource for each Energy Offer Curve that may be offered is one MW. 4.4.9.3.2 Energy Offer Curve Validation (1) A valid Energy Offer Curve is an offer curve that ERCOT has determined meets the criteria listed in Section 4.4.9.3.1, Energy Offer Curve Criteria, and the Ener…

### e16 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.3, Energy Offer Curve Cost Caps, paragraph (1)(a)-(d) · text copy line 1456 · heading above: 4.4.9.3.3 Energy Offer Curve Cost Caps

BEFORE: …son. The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate Energy Offer Curves and continuously display on the MIS Certified Area information that allows any QSE to view its valid Energy Offer Curves. 4.4.9.3.3 Energy Offer Curve Cost Caps 
QUOTE: (1) The following Energy Offer Curve Cost Caps must be used for the purpose of make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments: (a) Nuclear = $15.00/MWh; (b) Coal and Lignite = $18.00/MWh; (c) Combined Cycle greater than 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (d) Combined Cycle less than or equal to 90 MW = 10 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve;
AFTER:  (e) Gas - Steam Supercritical Boiler = 10.5 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (f) Gas Steam Reheat Boiler = 11.5 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer C…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ted Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap 
QUOTE: (1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]
AFTER:  Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 If a QSE has not submitted an Energy O…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …--------------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor 
QUOTE: (1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is:
AFTER:  -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Tu…

### e30 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(a), two-step SCED, step 1 · text copy line 2229

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (14) The two-step SCED methodology referenced in paragraph (1) above is: 
QUOTE: (a) The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints. Energy Offer Curves for all On-Line Generation Resources, Energy Bid/Offer Curves for all On-Line ESRs, and RTM Energy Bids from available CLRs, whether submitted by QSEs or created by ERCOT under this Section, are used in the SCED to determine "Reference LMPs."
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e31 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (14)(b)(i), step 2 · text copy line 2240

BEFORE: …-------------+ (b) The second step is to execute the SCED process to produce Base Points, Ancillary Service awards, Shadow Prices, Real-Time MCPCs, and LMPs, subject to security constraints (including Competitive and Non-Competitive Constraints) and other Resource constraints. The second step must: 
QUOTE: (i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource's Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;
AFTER:  (ii) Use Energy Bid/Offer Curves for all On-Line ESRs, whether submitted by QSEs or created by ERCOT. Each Energy Bid/Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. The offer portion of each Energy Bid/Offer Curve subject to mi…

### e36 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4)(d)(i), RUC-committed Resource without a curve · text copy line 1864 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …Curve 1 MW below lowest MW in Energy Offer Curve (if more than LSL) -$249.99 LSL (if less than lowest MW in Energy Offer Curve) -$250.00 -------------------------------------------------------------------------------------------------------------------------------------- (d) RUC-committed Resources 
QUOTE: (i) For each RUC-committed Resource that has not submitted an Energy Offer Curve, ERCOT shall create a proxy Energy Offer Curve as described below: ----------------------------------------------------------------------- MW Price (per MWh) --------------------------------------- ------------------------------- HSL $250 Zero $250
AFTER:  ----------------------------------------------------------------------- (ii) For each RUC-committed Resource that has submitted an Energy Offer Curve, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below: -----------------------------------------------------…

### e37 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4)(d)(ii), RUC-committed Resource with a curve · text copy line 1874 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: … proxy Energy Offer Curve as described below: ----------------------------------------------------------------------- MW Price (per MWh) --------------------------------------- ------------------------------- HSL $250 Zero $250 ----------------------------------------------------------------------- 
QUOTE: (ii) For each RUC-committed Resource that has submitted an Energy Offer Curve, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below: --------------------------------------------------------------------------------------------------------------------------------------------------- MW Price (per MWh) ----------------------------------------------------- --------------------------------------------------------------------------------------------- HSL (if more than highest MW in Energy Offer Curve) Greater of $250 or price associated with the highest MW in QSE submitted Energy Offer Curve Energy Offer Curve Greater of $250 or the QSE submitted Energy Offer Curve Zero Greater of $250 or the first price point of the QSE submitted Energy Offer Curve
AFTER:  --------------------------------------------------------------------------------------------------------------------------------------------------- +------------------------------------------------------------------------------------------------------------------------------------------------------…

## Statements to check (new or changed since the last audit)

- **Link to three-part-supply-offer** (cites e9): part-of Three-Part Supply Offer: The Energy Offer Curve is one of the three parts of a Three-Part Supply Offer, with the Startup Offer and the Minimum-Energy Offer. [e9]
- **Link to sced** (cites e4, e30, e31): used-in SCED (Security-Constrained Economic Dispatch): SCED evaluates Energy Offer Curves to set dispatch, in a two-step process that mitigates offers to resolve Non-Competitive Constraints. [e4][e30][e31]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The DAM uses Energy Offer Curves, bounded by the Resource's LSL and HSL from the COP. [e3]
- **Link to base-point** (cites e4): determines Base Point: SCED evaluates Energy Offer Curves to determine Resource Dispatch Instructions. [e4]
- **Link to offer-cap** (cites e15): related Offer Caps (HCAP / LCAP / SWCAP): Energy Offer Curves must be within -$250 per MWh and the DASWCAP or RTSWCAP, depending on submission timing. [e15]
- **Link to cop** (cites e3): related COP (Current Operating Plan): The DAM curve is bounded by limits from the COP. [e3]
- **Link to market-power-mitigation** (cites e19, e28): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The Mitigated Offer Cap and Mitigated Offer Floor limit Energy Offer Curves in Real-Time under SCED. [e19][e28]
- **Link to ruc-make-whole** (cites e16): related RUC Make-Whole & Clawback: The Energy Offer Curve Cost Caps are used for make-whole Settlements. [e16]
- **Link to ruc** (cites e36, e37): related RUC (Reliability Unit Commitment: DRUC/HRUC): ERCOT builds proxy Energy Offer Curves for RUC-committed Resources. [e36][e37]

