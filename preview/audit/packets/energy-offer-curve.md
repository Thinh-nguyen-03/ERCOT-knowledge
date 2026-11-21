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

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(c) · text copy line 1430 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …ffer Curve is submitted in a subsequent Adjustment Period. 4.4.9.3.1 Energy Offer Curve Criteria (1) Each Energy Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) 
QUOTE: A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;
AFTER:  (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (4) · text copy line 1410 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …f the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry. (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) 
QUOTE: For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, except for the percentage of FIP and percentage of FOP
AFTER: , and SCED will use the latest updated Energy Offer Curve available in the system. The QSE must provide a brief freeform reason at the time of the submission of the Energy Offer Curve if submitted after the end of the Adjustment Period. For the percentage FIP and percentage of FOP within the Energy …

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, Three-Part Supply Offers, paragraph (1) · text copy line 1262 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …may, at its discretion, Dispatch RMR Units to restore the ERCOT Transmission Grid. (c) RMR offers shall be treated as if they were Resource offers for purposes of posting under Section 3.2.5, Publication of Resource and Load Information. 4.4.9 Energy Offers and Bids 4.4.9.1 Three-Part Supply Offers 
QUOTE: (1) A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process. (2) The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. Th…

### e10 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (4), later sentences · text copy line 1410 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …e selected by the QSE. (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, except for the percentage of FIP and percentage of FOP, and SCED will use the latest updated Energy Offer Curve available in the system. 
QUOTE: The QSE must provide a brief freeform reason at the time of the submission of the Energy Offer Curve if submitted after the end of the Adjustment Period. For the percentage FIP and percentage of FOP within the Energy Offer Curve, submissions and updates must be received by ERCOT's systems in the Adjustment Period. If a new Energy Offer Curve is not deemed to be valid, then the most recent valid Energy Offer Curve available in the system at the time of SCED execution will be used and ERCOT will notify the QSE that the invalid Energy Offer Curve was rejected. Once an Operating Hour ends, an Energy Offer Curve for that hour cannot be submitted, updated, or canceled.
AFTER:  (5) A QSE may withdraw an Energy Offer Curve if: (a) An Output Schedule is submitted for all intervals for which an Energy Offer Curve is withdrawn; or (b) The Resource is forced Off-Line and notifies ERCOT of the Forced Outage by changing the Resource Status appropriately and updating its COP. (6)…

### e11 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (3) · text copy line 1408 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …) A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry. 
QUOTE: (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE.
AFTER:  (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, except for the percentage of FIP and percentage of FOP, and SCED will use the latest updated Energy Offer Curve available in the system. The QSE must provide a…

### e12 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (7) · text copy line 1420 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …ff-Line and notifies ERCOT of the Forced Outage by changing the Resource Status appropriately and updating its COP. (6) For any Operating Hour that is a RUC-Committed Interval or a DAM-Committed Interval for a Resource, a QSE for that Resource may not change a Startup Offer or Minimum-Energy Offer. 
QUOTE: (7) If a valid Energy Offer Curve or an Output Schedule does not exist for a Resource that has a status of On-Line at the end of the Adjustment Period, then ERCOT shall notify the QSE and set the Output Schedule equal to the then current telemetered output of the Resource until an Output Schedule or Energy Offer Curve is submitted in a subsequent Adjustment Period.
AFTER:  4.4.9.3.1 Energy Offer Curve Criteria (1) Each Energy Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) A monotonically non-decreasing offer curve for both price …

### e13 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(f) · text copy line 1436 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …onically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity; (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; 
QUOTE: (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers);
AFTER:  (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) An Energy Offer Curve must be within the range of -$250.00 per MWh and eit…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(g) · text copy line 1438 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …pairs at the same price or quantity; (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); 
QUOTE: (g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and
AFTER:  (h) Reason for update of the offer, if submitting after the end of the Adjustment Period. (2) An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 143…

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

### e17 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.3, paragraph (1)(k)-(p) · text copy line 1478 · heading above: 4.4.9.3.3 Energy Offer Curve Cost Caps

BEFORE: …ple Cycle less than or equal to 90 MW = 15 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (j) Reciprocating Engines = 16 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; 
QUOTE: (k) Hydro = $10.00/MWh; (l) Other = DASWCAP or RTSWCAP; (m) RMR Resource = effective Value of Lost Load (VOLL); (n) Wind Generation Resources = $0.00/MWh; (o) PhotoVoltaic Generation Resource (PVGR) = $0.00/MWh; and (p) ESR = $0.00/MWh.
AFTER:  (2) ERCOT shall produce an annual report each April that provides the amount of DAM and RUC Make-Whole Payments during the previous calendar year for Resources categorized as Other, per item (1)(l) above, as a percentage of the total amount of DAM and RUC Make-Whole Payments made during the previou…

### e18 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.3, paragraph (4) · text copy line 1494 · heading above: 4.4.9.3.3 Energy Offer Curve Cost Caps

BEFORE: …. If there are no Make-Whole Payments for Resources categorized as Other for a given calendar year, then ERCOT will not be required to produce the annual report. (3) Items in paragraphs (1)(c) and (d) above are determined by capacity of largest simple-cycle combustion turbine in the train selected. 
QUOTE: (4) The FIP and FOP used to calculate the Energy Offer Curve Cap for Make-Whole Payment calculation purposes shall be the FIP or FOP for the Operating Day. In the event the Energy Offer Curve Cap for Make-Whole Payment calculation purposes must be calculated before the FIP or FOP is available for the particular Operating Day, the FIP and FOP for the most recent preceding Operating Day shall be used. Once the FIP and FOP are available for a particular Operating Day, those values shall be used in the calculations. If the percentage fuel mix is not specified or if no Energy Offer Curve exists, then the minimum of FIP or FOP shall be used.
AFTER:  (5) During an Emergency Offer Cap (ECAP) Effective Period, for purposes of calculating the Energy Offer Curve Cost Caps, the DASWCAP shall be set to the DASWCAP that was used to clear the DAM, and the VOLL shall be set to the maximum value VOLL that was effective for the Operating Day. 4.4.9.4 Miti…

### e19 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1) · text copy line 1509 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ted Offer Cap, Mitigated Offer Floor, and Adjusted Bid Caps | +=====================================================================================================+ +-----------------------------------------------------------------------------------------------------+ 4.4.9.4.1 Mitigated Offer Cap 
QUOTE: (1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]
AFTER:  Where, If a QSE has submitted an Energy Offer Curve on behalf of a Generation Resource and the Generation Resource has approved verifiable costs, then FPRC _(q, r) = Max(WAFP _(q, r, h), FIP + FA _(q, r)) * RTPERFIP _(q, r) / 100 + FOP * RTPERFOP _(q, r) / 100 If a QSE has not submitted an Energy O…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable GIHR · text copy line 1530 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | GIHR _(q, r) | MMBtu/MWh | 
QUOTE: Generic Incremental Heat Rate-The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable IHR · text copy line 1532 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | IHR _(q, r) | MMBtu/MWh | 
QUOTE: Verifiable Incremental Heat Rate per Resource-The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process.
AFTER:  Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. | +------------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variables FA and OM · text copy line 1552 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | FA _(q, r) | $/MMBtu | 
QUOTE: Fuel Adder-The fuel adder is the average cost above the index price Resource r has paid to obtain fuel. Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information.
AFTER:  | +------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, variable WAFP · text copy line 1556 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | WAFP _(q, r, h) | $/MMBtu | 
QUOTE: Weighted Average Fuel Price-The volume-weighted average intraday, same-day and spot fuel price, the projected incremental fuel consistent with a fuel supply contract(s), or a combination of these two prices, submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day, as described in paragraph (1)(e) below.
AFTER:  | | | | | | | | +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | | | | | [NPRR1279: Repl…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, NPRR1279 pending box · text copy line 1559 · heading above: 4.4.9.4.1 Mitigated Offer Cap
FLAG pending-box: | | | | [NPRR1279: Replace the definition above with the following on April 1, 2027:] | |
BEFORE: …h (1)(e) below. | | | | | | | | +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | | | | | 
QUOTE: [NPRR1279: Replace the definition above with the following on April 1, 2027:]
AFTER:  | | | | | | | | | | | | Weighted Average Fuel Price-The volume-weighted average intraday, same-day and spot price of fuel submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day, as described in paragraph (1)(e) below. | | | | | +==========…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(c) · text copy line 1576 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …. The MOC curve may be modified by ERCOT to ensure that the Resource is Dispatched by SCED to help resolve transmission congestion in Real-Time or to allow the Resource to be Dispatched by SCED after other Resources. Any modification to the MOC curve by ERCOT shall be communicated by Market Notice. 
QUOTE: (c) Notwithstanding the MOC calculation described in paragraph (1) above, the MOC for ESRs shall be set at the RTSWCAP. No later than December 31, 2023, ERCOT and stakeholders shall submit a report to TAC that includes a recommendation to continue the existing approach or a proposal to implement an alternative approach to determine the MOC for ESRs.
AFTER:  (d) For Quick Start Generation Resources (QSGRs) the MOC shall be adjusted in accordance with Verifiable Cost Manual Appendix 7, Calculation of the Variable O&M Value and Incremental Heat Rate used in Real Time Mitigation for Quick Start Generation Resources (QSGRs). (e) For hydro Generation Resour…

### e26 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(f)(i) · text copy line 1584 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …ro Generating Resources. (f) During the Adjustment Period, a QSE representing a Resource may submit Exceptional Fuel Cost as a volume-weighted average fuel price for use in the MOC calculation for that Resource. To qualify as Exceptional Fuel Cost, the submission must meet the following conditions: 
QUOTE: (i) For all Resources, the weighted average fuel price must exceed FIP for the applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder. For Resources without approved verifiable costs, the fuel adder will be set to the default value assigned to Resources with approved verifiable costs, as defined in the Verifiable Cost Manual. The threshold parameter value in this paragraph shall be recommended by the Wholesale Market Subcommittee (WMS) and approved by the TAC.
AFTER:  ERCOT shall update the threshold value on the first day of the month following TAC approval unless otherwise directed by the TAC. ERCOT shall provide a Market Notice prior to implementation of a revised parameter value. (ii) Fixed cost (fees, penalties and similar non-gas costs) may not be included…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.1, paragraph (1)(f)(iv) · text copy line 1596 · heading above: 4.4.9.4.1 Mitigated Offer Cap

BEFORE: …mental fuel price for a Resource with a fuel supply contract(s) that also has submitted an Energy Offer Curve for the Operating Hour where the Energy Offer Curve is calculated as the incremental heat rate times the incremental fuel price plus O&M cost; or (C) A combination of the above two options. 
QUOTE: (iv) A weighted average fuel price based on actual fuel purchases must be included in the calculation of the weighted average fuel price in paragraph (1) above. These must account for at least 10% of the total fuel volume burned by the applicable Resource for the hour
AFTER:  for which the weighted average fuel price is computed. A projected incremental fuel price must be consistent with the terms of the fuel supply contract(s). A weighted average fuel price based on a combination of the options in paragraph (iii) above must meet the requirements described for each of t…

### e28 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1) · text copy line 1652 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …--------------------------------------------------------- [NPRR1279: Delete paragraphs (n) and (o) above on April 1, 2027.] ----------------------------------------------------------------------- ----------------------------------------------------------------------- 4.4.9.4.2 Mitigated Offer Floor 
QUOTE: (1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is:
AFTER:  -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Tu…

### e29 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.4.2, Mitigated Offer Floor table · text copy line 1657 · heading above: 4.4.9.4.2 Mitigated Offer Floor

BEFORE: …6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is: -------------------------------------------------------------------------- Resource Category Mitigated Offer Floor -------------------------------------- ----------------------------------- 
QUOTE: Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh
AFTER:  -------------------------------------------------------------------------- 4.4.9.4.3 Mitigated Offer Cap for RMR Resources (1) For each RMR Unit contracted by ERCOT under Section 3.14.1, Reliability Must Run, in consideration of the Shadow Price caps of the transmission constraints which the RMR Un…

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

### e32 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4) · text copy line 1798 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …st monitor cumulative deployment of Regulation Services and ensure that Regulation Services deployment is minimized over time. (3) In the Generation To Be Dispatched (GTBD) determined by LFC, ERCOT shall subtract the sum of the telemetered net real power consumption from all CLRs available to SCED. 
QUOTE: (4) For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available capacity of all committed Generation Resources by creating proxy Energy Offer Curves for certain Resources as follows:
AFTER:  (a) Non-IRRs without Energy Offer Curves (i) ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below for: (A) Each non-IRR for which its QSE has submitted an Output Schedule instead of an Energy Offer Curve. -----------------------------------------------------…

### e33 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4)(a)(i)(A), Output Schedule proxy · text copy line 1804 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …wards, ERCOT shall use the available capacity of all committed Generation Resources by creating proxy Energy Offer Curves for certain Resources as follows: (a) Non-IRRs without Energy Offer Curves (i) ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below for: 
QUOTE: (A) Each non-IRR for which its QSE has submitted an Output Schedule instead of an Energy Offer Curve. ----------------------------------------------------------------------- MW Price (per MWh) ------------------------------------------ ---------------------------- HSL RTSWCAP Output Schedule MW plus 1 MW RTSWCAP minus $0.01 Output Schedule MW -$249.99 LSL -$250.00
AFTER:  ----------------------------------------------------------------------- (b) Non-IRRs without full-range Energy Offer Curves (i) For each non-IRR for which its QSE has submitted an Energy Offer Curve that does not cover the full range of the Resource's available capacity, ERCOT shall create a proxy …

### e34 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4)(b)(i), partial curve · text copy line 1820 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …) ------------------------------------------ ---------------------------- HSL RTSWCAP Output Schedule MW plus 1 MW RTSWCAP minus $0.01 Output Schedule MW -$249.99 LSL -$250.00 ----------------------------------------------------------------------- (b) Non-IRRs without full-range Energy Offer Curves 
QUOTE: (i) For each non-IRR for which its QSE has submitted an Energy Offer Curve that does not cover the full range of the Resource's available capacity, ERCOT shall create a proxy Energy Offer Curve that extends the submitted Energy Offer Curve to use the entire available capacity of the Resource above the highest point on the Energy Offer Curve to the Resource's HSL and the offer floor from the lowest point on the Energy Offer Curve to its LSL, using these points:
AFTER:  ---------------------------------------------------------------------------------------------------------------------------------- MW Price (per MWh) --------------------------------------------------------------- ------------------------------------------------------------------ HSL (if more than …

### e35 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (4)(c)(i), IRR without a curve · text copy line 1836 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …fer Curve Energy Offer Curve 1 MW below lowest MW in Energy Offer Curve (if more than LSL) -$249.99 LSL (if less than lowest MW in Energy Offer Curve) -$250.00 ---------------------------------------------------------------------------------------------------------------------------------- (c) IRRs 
QUOTE: (i) For each IRR that has not submitted an Energy Offer Curve, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below: ----------------------------------------------------------------------- MW Price (per MWh) ------------------------------------------ ---------------------------- HSL $1,500 HSL minus 1 MW -$249.99 LSL -$250.00
AFTER:  ----------------------------------------------------------------------- (ii) For each IRR for which its QSE has submitted an Energy Offer Curve that does not cover the full range of the IRR's available capacity, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described…

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

### e38 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (11) · text copy line 2194

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (11) Energy Offer Curves that were constructed in whole or in part with proxy Energy Offer Curves shall be so marked in all ERCOT postings or references to the energy offer.
AFTER:  (12) SCED will enforce Resource-specific Ancillary Service constraints to ensure that Ancillary Service awards are aligned with a Resource's qualifications and telemetered Ancillary Service capabilities. (a) A scaling factor of 5/7 shall be used for Reg-Up award when ensuring that the SCED Base Poi…

### e39 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual, Section 1.5, paragraph (2) · text copy line 303 · heading above: 1.5 An Introduction to Verifiable Costs

BEFORE: …z) "Variable costs" are costs that are not fixed costs as defined in paragraph (5) of Protocol Section 5.6, RUC Cost Eligibility. 1.5 An Introduction to Verifiable Costs (1) This section of ERCOT's Verifiable Cost Manual provides an introduction to Verifiable Costs and explains what they represent. 
QUOTE: (2) Verifiable Costs are a significant component in the Texas Nodal Market. They are used by ERCOT in various calculations and internal processes, including the replacement of generic generator-specific cost caps and to provide Qualified Scheduling Entities (QSEs) with forms of cost recovery that would otherwise be unavailable.
AFTER:  (3) Verifiable Costs are used as a proxy for the costs a Resource incurs while operating. These costs are determined for, and allocated according to, the three discrete stages of the power generation cycle: startup to Low Sustained limit (LSL), operation at LSL, and operation above LSL. While Verif…

### e40 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual, Section 5.1, paragraph (1) · text copy line 847 · heading above: 5.1 Submitting Data for Mitigated Offers

BEFORE: …f ERCOT's Verifiable Cost Manual pertains to the use of Verifiable Costs for the purpose of calculating Mitigated Offer Caps (MOC). It describes the policies and procedures relating to the submission of Verifiable Incremental Heat Rate and Variable O&M data. 5.1 Submitting Data for Mitigated Offers 
QUOTE: (1) Filing Entities may submit two types of resource-specific Verifiable Cost data for inclusion in the calculation of Mitigated Offer Caps: Verifiable O&M data and Verifiable Incremental Heat Rate (IHR) data.
AFTER:  Submission of this data, for use in calculating Mitigated Offer Caps, is optional, except for Resources under a Reliability-Must-Run (RMR) contract which must submit to ERCOT an Incremental Heat Rate Curve calculated in a manner as described in Section 6, Verifiable Heat Rates, of this Manual. A Fi…

### e41 · `ercot-vcm` · tier 1 · ERCOT Verifiable Cost Manual (effective 2026-12-01)
locator: Verifiable Cost Manual, Section 5.1, paragraph (1) · text copy line 847 · heading above: 5.1 Submitting Data for Mitigated Offers

BEFORE: …ble Incremental Heat Rate and Variable O&M data. 5.1 Submitting Data for Mitigated Offers (1) Filing Entities may submit two types of resource-specific Verifiable Cost data for inclusion in the calculation of Mitigated Offer Caps: Verifiable O&M data and Verifiable Incremental Heat Rate (IHR) data. 
QUOTE: Submission of this data, for use in calculating Mitigated Offer Caps, is optional, except for Resources under a Reliability-Must-Run (RMR) contract which must submit to ERCOT an Incremental Heat Rate Curve calculated in a manner as described in Section 6, Verifiable Heat Rates, of this Manual.
AFTER:  A Filing Entity that submits Variable O&M Cost data for use in calculating Mitigated Offers must also submit IHR Curve data. However, a Filing Entity may submit IHR Curve data without submitting corresponding VOM data. To be verified by ERCOT, submitted data must also comply with the relevant requi…

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, C.2 Evaluation of Potential Economic Withholding (page 140 OCR) · text copy line 8508

BEFORE: …ers. Outage rates for large suppliers at all load levels modestly exceeded those for small suppliers but remained low enough to raise no competitiveness concerns. 2. Evaluation of Potential Economic Withholding This subsection evaluates potential economic withholding by calculating an "output gap". 
QUOTE: The output gap is the quantity of energy not produced by online resources even though producing that output would be economic by a substantial margin at the real-time energy price. A participant can economically withhold resources, as measured by the output gap, by raising a resource's energy offers to reduce its dispatch level.
AFTER:  The output gap includes resources that are committed and producing at less than full output. It also includes energy not produced from a committed resource if the offer price exceeds both (a) 118 | 2025 State of the Market Report / / Analysis of Competitive Performance the mitigated offer price and…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, C.2 (pages 140-141 OCR) · text copy line 8522

BEFORE: …to reduce its dispatch level. The output gap includes resources that are committed and producing at less than full output. It also includes energy not produced from a committed resource if the offer price exceeds both (a) 118 | 2025 State of the Market Report / / Analysis of Competitive Performance 
QUOTE: the mitigated offer price and (b) the LMP plus the lesser of $10/MWh or 15%. The mitigated offer cap serves as a proxy for the resource's marginal production cost of energy.
AFTER:  Figure 62 shows the average output gap levels, measured as the difference between a unit's operating level and the output level it would have delivered over an hour if it had been offered to the market based on a proxy for a competitive offer (i.e., the unit's mitigated offers), with a few changes.…

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, C.2 (page 141 OCR) · text copy line 8532

BEFORE: …on, we remove fuel adders because they represent fixed costs. Finally, we include quick-start units if they were in quick-start mode and available for real-time dispatch. Figure 62 the average positive output gap by load level and, for reference, the percentage of hours in each load-level category. 
QUOTE: In 2025, over 80% of hours exhibited an output gap, indicating a potential attempt to exercise market power through economic withholding. At higher load levels, an extremely small percentage of generating capacity exhibited an output gap for a large percentage of the time. An even smaller percentage of generating capacity exhibited an output gap at lower load levels. The quantities withheld implied by the output gap were relatively low, even in the upper quartile of net load hours. These results show that potential economic withholding in the real-time energy market was low overall, but not trivial, in 2025.
AFTER:  While the ERCOT market may have performed competitively in general, the level of market power and the moderate evidence of potential economic withholding are cause for concern. Anticipated increases in system load over the coming years can result in more frequent structural market power and stronge…

### e45 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Competition and Market Power (OCR) · text copy line 983

BEFORE: …rally positive competitive environment. Analysis of potential physical withholding indicates that large suppliers continue to have lower unavailability rates than smaller suppliers, even at higher load levels. This provides additional evidence of positive competitive conditions in the ERCOT market. 
QUOTE: Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation.
AFTER:  With extreme projected load growth in the ERCOT footprint, the market could become structurally uncompetitive during high-load periods within a few years. If even 20 GW of new net load appears, a small fraction of the projected load growth, the operating margin will diminish significantly. This cou…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Analysis of Competitive Performance, D. Voluntary Mitigation Plans (page 142 OCR) · ocr copy line 6135, OCR page 142

BEFORE: …Mitigation Plans The PUCT has discretion to approve VMPs filed by market participants.*° Before September 1, 2023, a market participant's adherence to a PUCT-approved VMP constituted an absolute defense against an allegation of market power abuse with respect to the behaviors addressed by the plan. 
QUOTE: However, House Bill 1500, passed during the 88" Legislative Session and effective September 1, 2023, modified the statutory requirements for VMPs. Adherence to a VMP no longer constitutes an absolute defense against allegations of market power abuse with respect to the behaviors addressed by the VMP; instead, it must be considered in determining whether a violation occurred and, if so, the penalty to assess.
AFTER: *! VMPs should promote competitive outcomes and prevent abuse of market power through economic withholding in the ERCOT real-time energy market. Forward energy markets (e.g., the ERCOT day-ahead market) do not require the same restrictions, but prices in those markets reflect expectations for real-t…

## Statements to check (new or changed since the last audit)

- **How it works #3** (cites e13, e14, e5, e11): Each curve states the selling QSE, the Resource, the curve, first and last hour, expiration, an inclusive or exclusive designation relative to other DAM offers (in Real-Time, curves are always inclusive with Ancillary Service Offers), and the percentages of FIP and FOP above LSL, which may not sum above 100%. [e13][e14][e5] Curves stay active until the offer expiration time the QSE selected. [e11]
- **How it works #4** (cites e15): The price must be within -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on submission timing. No curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP, and after 1430 ERCOT cancels any curve with a price above the RTSWCAP and notifies the QSE. [e15]
- **How it works #5** (cites e7, e10, e12): A QSE may submit or change curve information for any Operating Hour at any time before SCED executes, except for the percentage of FIP and percentage of FOP. [e7] A reason is required if the submission is after the end of the Adjustment Period, FIP and FOP percentages must reach ERCOT in the Adjustment Period, an invalid new curve is rejected and the latest valid curve is used, and once the Operating Hour ends the curve for that hour cannot be submitted, updated or canceled. [e10] If an On-Line Resource has neither a valid curve nor an Output Schedule at the end of the Adjustment Period, ERCOT notifies the QSE and sets the Output Schedule equal to the then current telemetered output. [e12]
- **How it works #7** (cites e4, e30, e31): SCED evaluates the curves, along with other offers and bids, to set dispatch by maximizing bid-based revenues minus offer-based costs subject to power balance and network constraints. [e4] It uses a two-step method. Step one runs SCED with the full network model observing only Competitive Constraints to determine Reference LMPs. [e30] Step two produces Base Points, awards, Shadow Prices and prices subject to all constraints; each curve is bounded at the lesser of the Reference LMP or the Mitigated Offer Floor, and a curve subject to mitigation under Section 3.19.4 is capped at the greater of the Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Resource's MOC at the LSL, or the appropriate MOC. [e31]
- **How it works #9** (cites e19, e20, e40, e21, e22, e41, e39): Energy Offer Curves may be subject to mitigation in Real-Time operations using a MOC; for Generation Resources ERCOT builds an incremental MOC curve. [e19] The formula and its variables are under Formula below. The generic incremental heat rate is 10.5 for Resources with a Commercial Operations Date on or before January 1, 2004, and 14.5 for later ones. [e20] Filing Entities may submit two types of resource-specific Verifiable Cost data for the MOC, Verifiable O&M data and Verifiable Incremental Heat Rate data; the MOC formula uses the approved verifiable incremental heat rate curve and the variable O&M cost above LSL. [e40][e21][e22] In the Verifiable Cost Manual, submitting data for Mitigated Offer Caps is optional, except for Resources under an RMR contract, which must submit an Incremental Heat Rate Curve. [e41] ERCOT's manual describes Verifiable Costs as a proxy for the costs a Resource incurs while operating. [e39]
- **How it works #10** (cites e25): The MOC for ESRs is set at the RTSWCAP, notwithstanding the formula, and the Protocol text records a deadline of December 31, 2023 for a report to TAC on whether to continue that approach. [e25]
- **How it works #11** (cites e26, e27, e24): Exceptional Fuel Cost: a QSE may submit a volume-weighted average fuel price during the Adjustment Period for use in the MOC, but it must exceed FIP for the day plus a $1/MMBtu threshold parameter plus the applicable fuel adder, and the actual-purchase component must account for at least 10% of the fuel the Resource burned that hour. [e26][e27] The Protocols show a pending NPRR1279 replacement of the weighted-average-fuel-price definition and paragraph (f), dated April 1, 2027; it is not described here as in force. [e24]
- **How it works #13** (cites e28, e29): Curves may also be mitigated in the RTM with a Mitigated Offer Floor. [e28] The floors are: Nuclear and Hydro -$250/MWh; Coal and Lignite, Combined Cycle, and Gas/Oil Steam and Combustion Turbine -$20/MWh; Qualifying Facility, PV and Other -$50/MWh; Wind -$100/MWh; ESR -$250/MWh. [e29]
- **How it works #15** (cites e16, e17, e18): A separate set of caps applies to make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments and Voltage Support Service Payments: for example nuclear $15.00/MWh, coal and lignite $18.00/MWh, and heat-rate-based caps for gas technologies. [e16] Hydro is $10.00/MWh, Other is the DASWCAP or RTSWCAP, RMR is the effective VOLL, and Wind, PVGR and ESR are $0.00/MWh. [e17] FIP and FOP for the cap are those for the Operating Day, or the most recent preceding day if not yet available, and the minimum of FIP or FOP is used if the fuel mix is not specified or no curve exists. [e18]
- **How it works #17** (cites e32, e33, e34, e35, e36, e37, e38): To use the available capacity of all committed Generation Resources, ERCOT creates proxy Energy Offer Curves for certain Resources. [e32] A non-IRR that submitted an Output Schedule instead of a curve gets a proxy running from -$250.00 at LSL up to the RTSWCAP at HSL. [e33] A non-IRR curve that does not cover the full range is extended to HSL at the highest offered price and to the LSL at the offer floor. [e34] An IRR with no curve gets a proxy with $1,500 at HSL. [e35] A RUC-committed Resource with no curve gets a proxy at $250 from zero to HSL, and one with a curve gets the greater of $250 or its submitted curve. [e36][e37] Curves built wholly or partly from proxies are marked as such in ERCOT postings. [e38]
- **ERCOT context #2** (cites e42, e43, e44, e45): The IMM measures potential economic withholding with an "output gap": energy not produced by online resources although producing would be economic by a substantial margin at the real-time energy price, which a participant can create by raising offers to reduce dispatch. [e42] The IMM treats the mitigated offer cap as a proxy for the resource's marginal production cost, and counts output not produced when the offer exceeds both the mitigated offer price and the LMP plus the lesser of $10/MWh or 15%. [e43] For 2025 the IMM found over 80% of hours exhibited an output gap, but the quantities were relatively low, and it called potential withholding low overall but not trivial. [e44] The IMM continues to recommend system-wide market power mitigation. [e45]
- **ERCOT context #3** (cites e46): House Bill 1500 (88th Legislature, effective September 1, 2023) changed Voluntary Mitigation Plans so that adherence is no longer an absolute defense against market power abuse allegations but must be considered in determining whether a violation occurred and any penalty. [e46]
- **Formula #1** (cites e19, e20, e21, e22, e23): MOC(q, r, h) = Max[ GIHR * Max(FIP, WAFP), (IHR * FPRC + OM) ], per Resource per hour. In words: GIHR is the generic incremental heat rate; FIP is the natural gas fuel index price; WAFP is the weighted average fuel price a QSE may submit for the hour (volume-weighted intraday, same-day and spot fuel price, or projected incremental fuel consistent with a contract); IHR is the Resource's approved verifiable incremental heat rate curve; FPRC is the fuel price calculated from the Resource's fuel mix (using Max(WAFP, FIP + fuel adder) weighted by the gas percentage plus FOP weighted by the oil percentage); and OM is variable O&M above LSL including emissions, as approved. [e19][e20][e21][e22][e23]
- **Key facts #2** (cites e15): - Price range -$250/MWh to the DASWCAP or RTSWCAP; RTSWCAP ceiling after 1430 in the Day-Ahead. [e15]
- **Key facts #6** (cites e19, e28, e25): - Real-time mitigation uses a Mitigated Offer Cap and a Mitigated Offer Floor; the ESR MOC is the RTSWCAP. [e19][e28][e25]
- **Key facts #7** (cites e20): - Generic incremental heat rate in the MOC is 10.5 (COD on or before January 1, 2004) or 14.5 (later). [e20]
- **Say it like this #1** (cites e4, e31): The energy offer curve is the generator's price ladder: how much it will produce at each price. SCED evaluates that ladder, along with other offers and bids, to decide dispatch, and where a constraint is non-competitive the ladder is capped by a cost-based mitigated offer cap. [e4][e31]
- **Common confusion #3** (cites e19, e16): - Mitigated Offer Cap versus Energy Offer Curve Cost Cap: the MOC limits offers in Real-Time SCED mitigation, while the Cost Caps are used to compute make-whole and similar payments. [e19][e16]
- **Questions #8** (cites e32, e33, e34): So that SCED can use the available capacity of all committed Generation Resources, for example when a QSE submits only an Output Schedule or a curve that does not cover the full range. [e32][e33][e34]
- **Questions #10** (cites e31, e19, e42): In Real-Time, where mitigation applies, the curve can be capped at the Mitigated Offer Cap built from the Resource's heat rate, fuel and O&M costs. [e31][e19] The IMM watches for this through the output gap. [e42]
- **Questions #12** (cites e16, e17): The Protocols list Energy Offer Curve Cost Caps by technology specifically for make-whole and related payments, such as nuclear at $15.00/MWh or wind at $0.00/MWh. [e16][e17]
- **Questions #14** (cites e12): ERCOT notifies the QSE and sets the Output Schedule equal to the current telemetered output until a curve or schedule is submitted. [e12]
- **Link to three-part-supply-offer** (cites e9): part-of Three-Part Supply Offer: The Energy Offer Curve is one of the three parts of a Three-Part Supply Offer, with the Startup Offer and the Minimum-Energy Offer. [e9]
- **Link to sced** (cites e4, e30, e31): used-in SCED (Security-Constrained Economic Dispatch): SCED evaluates Energy Offer Curves to set dispatch, in a two-step process that mitigates offers to resolve Non-Competitive Constraints. [e4][e30][e31]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The DAM uses Energy Offer Curves, bounded by the Resource's LSL and HSL from the COP. [e3]
- **Link to base-point** (cites e4): determines Base Point: SCED evaluates Energy Offer Curves to determine Resource Dispatch Instructions. [e4]
- **Link to offer-cap** (cites e15): related Offer Caps (HCAP / LCAP / SWCAP): Energy Offer Curves must be within -$250 per MWh and the DASWCAP or RTSWCAP, depending on submission timing. [e15]
- **Link to cop** (cites e3): related COP (Current Operating Plan): The DAM curve is bounded by limits from the COP. [e3]
- **Link to market-power-mitigation** (cites e19, e28): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The Mitigated Offer Cap and Mitigated Offer Floor limit Energy Offer Curves in Real-Time under SCED. [e19][e28]
- **Link to ruc-make-whole** (cites e16): related RUC Make-Whole & Clawback: The Energy Offer Curve Cost Caps are used for make-whole Settlements. [e16]
- **Link to ruc** (cites e36, e37): related RUC (Reliability Unit Commitment: DRUC/HRUC): ERCOT builds proxy Energy Offer Curves for RUC-committed Resources. [e36][e37]

