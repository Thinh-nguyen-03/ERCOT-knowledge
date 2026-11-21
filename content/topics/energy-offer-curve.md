---
id: energy-offer-curve
name: Energy Offer Curve
aliases: [Energy Offer Curve, EOC, offer curve, supply curve offer]
kind: concept
domain: pricing
level: 1
depth: deep
lenses: [analyst, trading, structuring]
as_of: 2026-11-21
links:
  - to: three-part-supply-offer
    type: part-of
    note: The Energy Offer Curve is one of the three parts of a Three-Part Supply Offer, with the Startup Offer and the Minimum-Energy Offer. [e9]
  - to: sced
    type: used-in
    note: SCED evaluates Energy Offer Curves to set dispatch, in a two-step process that mitigates offers to resolve Non-Competitive Constraints. [e4][e30][e31]
  - to: dam
    type: used-in
    note: The DAM uses Energy Offer Curves, bounded by the Resource's LSL and HSL from the COP. [e3]
  - to: base-point
    type: determines
    note: SCED evaluates Energy Offer Curves to determine Resource Dispatch Instructions. [e4]
  - to: offer-cap
    type: related
    note: Energy Offer Curves must be within -$250 per MWh and the DASWCAP or RTSWCAP, depending on submission timing. [e15]
  - to: cop
    type: related
    note: The DAM curve is bounded by limits from the COP. [e3]
  - to: market-power-mitigation
    type: related
    note: The Mitigated Offer Cap and Mitigated Offer Floor limit Energy Offer Curves in Real-Time under SCED. [e19][e28]
  - to: ruc-make-whole
    type: related
    note: The Energy Offer Curve Cost Caps are used for make-whole Settlements. [e16]
  - to: ruc
    type: related
    note: ERCOT builds proxy Energy Offer Curves for RUC-committed Resources. [e36][e37]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Energy Offer Curve"
    quote: "A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity."
  - id: e2
    source: np-04
    locator: "Section 4.4.9.3, paragraph (1)"
    quote: "The Energy Offer Curve represents the QSE’s willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e4
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e5
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(c)"
    quote: "A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;"
  - id: e6
    source: np-06
    locator: "Section 6.4.3, paragraph (1)"
    quote: "A QSE that represents a Resource, other than a Reliability Must-Run (RMR) Unit, must submit and maintain an Energy Offer Curve, an Energy Bid/Offer Curve, or an Output Schedule for the Resource for all times when the Resource is On-Line."
  - id: e8
    source: imm-som-2025
    locator: "Congestion chapter, introduction"
    quote: "which schedules generation to meet demand based on each generator’s energy offer curve and its corresponding"
  - id: e7
    source: np-04
    locator: "Section 4.4.9.3, paragraph (4)"
    quote: "For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, except for the percentage of FIP and percentage of FOP"
  - id: e9
    source: np-04
    locator: "Section 4.4.9.1, Three-Part Supply Offers, paragraph (1)"
    quote: "(1) A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve."
  - id: e10
    source: np-04
    locator: "Section 4.4.9.3, paragraph (4), later sentences"
    quote: "The QSE must provide a brief freeform reason at the time of the submission of the Energy Offer Curve if submitted after the end of the Adjustment Period. For the percentage FIP and percentage of FOP within the Energy Offer Curve, submissions and updates must be received by ERCOT’s systems in the Adjustment Period. If a new Energy Offer Curve is not deemed to be valid, then the most recent valid Energy Offer Curve available in the system at the time of SCED execution will be used and ERCOT will notify the QSE that the invalid Energy Offer Curve was rejected. Once an Operating Hour ends, an Energy Offer Curve for that hour cannot be submitted, updated, or canceled."
  - id: e11
    source: np-04
    locator: "Section 4.4.9.3, paragraph (3)"
    quote: "(3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE."
  - id: e12
    source: np-04
    locator: "Section 4.4.9.3, paragraph (7)"
    quote: "(7) If a valid Energy Offer Curve or an Output Schedule does not exist for a Resource that has a status of On-Line at the end of the Adjustment Period, then ERCOT shall notify the QSE and set the Output Schedule equal to the then current telemetered output of the Resource until an Output Schedule or Energy Offer Curve is submitted in a subsequent Adjustment Period."
  - id: e13
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(f)"
    quote: "(f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers);"
  - id: e14
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(g)"
    quote: "(g) Percentage of FIP and percentage of FOP for generation above LSL subject to the sum of the percentages not exceeding 100%; and"
  - id: e15
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (2)"
    quote: "(2) An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. After 1430 in the Day-Ahead, ERCOT shall cancel any Energy Offer Curve containing a price exceeding the RTSWCAP and notify the QSE of the expiration via an electronic message."
  - id: e16
    source: np-04
    locator: "Section 4.4.9.3.3, Energy Offer Curve Cost Caps, paragraph (1)(a)-(d)"
    quote: "(1) The following Energy Offer Curve Cost Caps must be used for the purpose of make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments: (a) Nuclear = $15.00/MWh; (b) Coal and Lignite = $18.00/MWh; (c) Combined Cycle greater than 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve; (d) Combined Cycle less than or equal to 90 MW = 10 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve;"
  - id: e17
    source: np-04
    locator: "Section 4.4.9.3.3, paragraph (1)(k)-(p)"
    quote: "(k) Hydro = $10.00/MWh; (l) Other = DASWCAP or RTSWCAP; (m) RMR Resource = effective Value of Lost Load (VOLL); (n) Wind Generation Resources = $0.00/MWh; (o) PhotoVoltaic Generation Resource (PVGR) = $0.00/MWh; and (p) ESR = $0.00/MWh."
  - id: e18
    source: np-04
    locator: "Section 4.4.9.3.3, paragraph (4)"
    quote: "(4) The FIP and FOP used to calculate the Energy Offer Curve Cap for Make-Whole Payment calculation purposes shall be the FIP or FOP for the Operating Day. In the event the Energy Offer Curve Cap for Make-Whole Payment calculation purposes must be calculated before the FIP or FOP is available for the particular Operating Day, the FIP and FOP for the most recent preceding Operating Day shall be used. Once the FIP and FOP are available for a particular Operating Day, those values shall be used in the calculations. If the percentage fuel mix is not specified or if no Energy Offer Curve exists, then the minimum of FIP or FOP shall be used."
  - id: e19
    source: np-04
    locator: "Section 4.4.9.4.1, Mitigated Offer Cap, paragraph (1)"
    quote: "(1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in Real-Time operations under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Cap (MOC). For Generation Resources, ERCOT shall construct an incremental MOC curve in accordance with Section 6.5.7.3 such that each point on the MOC curve is calculated as follows: MOC _(q, r, h) = Max [GIHR _(q, r) * Max(FIP, WAFP _(q, r, h)), (IHR _(q, r) * FPRC _(q, r) + OM _(q, r))]"
  - id: e20
    source: np-04
    locator: "Section 4.4.9.4.1, variable GIHR"
    quote: "Generic Incremental Heat Rate—The generic, single-value, incremental heat rate. For Generation Resources with a Commercial Operations Date on or before January 1, 2004, the generic incremental heat rate shall be set to 10.5. For Generation Resources that have a Commercial Operations Date after January 1, 2004, this value shall be set to 14.5."
  - id: e21
    source: np-04
    locator: "Section 4.4.9.4.1, variable IHR"
    quote: "Verifiable Incremental Heat Rate per Resource—The verifiable incremental heat rate curve for Resource r, as approved in the verifiable cost process."
  - id: e22
    source: np-04
    locator: "Section 4.4.9.4.1, variables FA and OM"
    quote: "Fuel Adder—The fuel adder is the average cost above the index price Resource r has paid to obtain fuel. Where for a Combined Cycle Train, the Resource r is a Combined Cycle Generation Resource within the Combined Cycle Train. See the Verifiable Cost Manual for additional information."
  - id: e23
    source: np-04
    locator: "Section 4.4.9.4.1, variable WAFP"
    quote: "Weighted Average Fuel Price—The volume-weighted average intraday, same-day and spot fuel price, the projected incremental fuel consistent with a fuel supply contract(s), or a combination of these two prices, submitted to ERCOT during the Adjustment Period for a specific Resource and specific hour within the Operating Day, as described in paragraph (1)(e) below."
  - id: e24
    source: np-04
    locator: "Section 4.4.9.4.1, NPRR1279 pending box"
    quote: "[NPRR1279: Replace the definition above with the following on April 1, 2027:]"
  - id: e25
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(c)"
    quote: "(c) Notwithstanding the MOC calculation described in paragraph (1) above, the MOC for ESRs shall be set at the RTSWCAP. No later than December 31, 2023, ERCOT and stakeholders shall submit a report to TAC that includes a recommendation to continue the existing approach or a proposal to implement an alternative approach to determine the MOC for ESRs."
  - id: e26
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(f)(i)"
    quote: "(i) For all Resources, the weighted average fuel price must exceed FIP for the applicable Operating Day, plus a threshold parameter value of $1/MMBtu, plus the applicable fuel adder. For Resources without approved verifiable costs, the fuel adder will be set to the default value assigned to Resources with approved verifiable costs, as defined in the Verifiable Cost Manual. The threshold parameter value in this paragraph shall be recommended by the Wholesale Market Subcommittee (WMS) and approved by the TAC."
  - id: e27
    source: np-04
    locator: "Section 4.4.9.4.1, paragraph (1)(f)(iv)"
    quote: "(iv) A weighted average fuel price based on actual fuel purchases must be included in the calculation of the weighted average fuel price in paragraph (1) above. These must account for at least 10% of the total fuel volume burned by the applicable Resource for the hour"
  - id: e28
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor, paragraph (1)"
    quote: "(1) Energy Offer Curves and Energy Bid/Offer Curves may be subject to mitigation in the RTM under Section 6.5.7.3, Security Constrained Economic Dispatch, using a Mitigated Offer Floor. The Mitigated Offer Floor is:"
  - id: e29
    source: np-04
    locator: "Section 4.4.9.4.2, Mitigated Offer Floor table"
    quote: "Nuclear and Hydro -$250/MWh Coal and Lignite -$20/MWh Combined Cycle -$20/MWh Gas/Oil Steam and Combustion Turbine -$20/MWh Qualifying Facility (QF) -$50/MWh Wind -$100/MWh PhotoVoltaic (PV) -$50/MWh ESR -$250/MWh Other -$50/MWh"
  - id: e30
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(a), two-step SCED, step 1"
    quote: "(a) The first step is to execute the SCED process to determine Reference LMPs. In this step, ERCOT executes SCED using the full Network Operations Model while only observing limits of Competitive Constraints in addition to power balance and Ancillary Service constraints. Energy Offer Curves for all On-Line Generation Resources, Energy Bid/Offer Curves for all On-Line ESRs, and RTM Energy Bids from available CLRs, whether submitted by QSEs or created by ERCOT under this Section, are used in the SCED to determine “Reference LMPs.”"
  - id: e31
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(b)(i), step 2"
    quote: "(i) Use Energy Offer Curves for all On-Line Generation Resources, whether submitted by QSEs or created by ERCOT. Each Energy Offer Curve must be bounded at the lesser of the Reference LMP (from Step 1) or the appropriate Mitigated Offer Floor. In addition, each Energy Offer Curve subject to mitigation under the criteria described in Section 3.19.4, Security-Constrained Economic Dispatch Constraint Competitiveness Test, must be capped at the greater of the Reference LMP (from Step 1) at the Resource Node plus a variable not to exceed 0.01 multiplied by the value of the Resource’s Mitigated Offer Cap (MOC) curve at the LSL or the appropriate MOC;"
  - id: e32
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)"
    quote: "(4) For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available capacity of all committed Generation Resources by creating proxy Energy Offer Curves for certain Resources as follows:"
  - id: e33
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)(a)(i)(A), Output Schedule proxy"
    quote: "(A) Each non-IRR for which its QSE has submitted an Output Schedule instead of an Energy Offer Curve. ----------------------------------------------------------------------- MW Price (per MWh) ------------------------------------------ ---------------------------- HSL RTSWCAP Output Schedule MW plus 1 MW RTSWCAP minus $0.01 Output Schedule MW -$249.99 LSL -$250.00"
  - id: e34
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)(b)(i), partial curve"
    quote: "(i) For each non-IRR for which its QSE has submitted an Energy Offer Curve that does not cover the full range of the Resource’s available capacity, ERCOT shall create a proxy Energy Offer Curve that extends the submitted Energy Offer Curve to use the entire available capacity of the Resource above the highest point on the Energy Offer Curve to the Resource’s HSL and the offer floor from the lowest point on the Energy Offer Curve to its LSL, using these points:"
  - id: e35
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)(c)(i), IRR without a curve"
    quote: "(i) For each IRR that has not submitted an Energy Offer Curve, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below: ----------------------------------------------------------------------- MW Price (per MWh) ------------------------------------------ ---------------------------- HSL $1,500 HSL minus 1 MW -$249.99 LSL -$250.00"
  - id: e36
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)(d)(i), RUC-committed Resource without a curve"
    quote: "(i) For each RUC-committed Resource that has not submitted an Energy Offer Curve, ERCOT shall create a proxy Energy Offer Curve as described below: ----------------------------------------------------------------------- MW Price (per MWh) --------------------------------------- ------------------------------- HSL $250 Zero $250"
  - id: e37
    source: np-06
    locator: "Section 6.5.7.3, paragraph (4)(d)(ii), RUC-committed Resource with a curve"
    quote: "(ii) For each RUC-committed Resource that has submitted an Energy Offer Curve, ERCOT shall create a monotonically non-decreasing proxy Energy Offer Curve as described below: --------------------------------------------------------------------------------------------------------------------------------------------------- MW Price (per MWh) ----------------------------------------------------- --------------------------------------------------------------------------------------------- HSL (if more than highest MW in Energy Offer Curve) Greater of $250 or price associated with the highest MW in QSE submitted Energy Offer Curve Energy Offer Curve Greater of $250 or the QSE submitted Energy Offer Curve Zero Greater of $250 or the first price point of the QSE submitted Energy Offer Curve"
  - id: e38
    source: np-06
    locator: "Section 6.5.7.3, paragraph (11)"
    quote: "(11) Energy Offer Curves that were constructed in whole or in part with proxy Energy Offer Curves shall be so marked in all ERCOT postings or references to the energy offer."
  - id: e39
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 1.5, paragraph (2)"
    quote: "(2) Verifiable Costs are a significant component in the Texas Nodal Market. They are used by ERCOT in various calculations and internal processes, including the replacement of generic generator-specific cost caps and to provide Qualified Scheduling Entities (QSEs) with forms of cost recovery that would otherwise be unavailable."
  - id: e40
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 5.1, paragraph (1)"
    quote: "(1) Filing Entities may submit two types of resource-specific Verifiable Cost data for inclusion in the calculation of Mitigated Offer Caps: Verifiable O&M data and Verifiable Incremental Heat Rate (IHR) data."
  - id: e41
    source: ercot-vcm
    locator: "Verifiable Cost Manual, Section 5.1, paragraph (1)"
    quote: "Submission of this data, for use in calculating Mitigated Offer Caps, is optional, except for Resources under a Reliability-Must-Run (RMR) contract which must submit to ERCOT an Incremental Heat Rate Curve calculated in a manner as described in Section 6, Verifiable Heat Rates, of this Manual."
  - id: e42
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, C.2 Evaluation of Potential Economic Withholding (page 140 OCR)"
    quote: "The output gap is the quantity of energy not produced by online resources even though producing that output would be economic by a substantial margin at the real-time energy price. A participant can economically withhold resources, as measured by the output gap, by raising a resource’s energy offers to reduce its dispatch level."
  - id: e43
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, C.2 (pages 140-141 OCR)"
    quote: "the mitigated offer price and (b) the LMP plus the lesser of $10/MWh or 15%. The mitigated offer cap serves as a proxy for the resource’s marginal production cost of energy."
  - id: e44
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, C.2 (page 141 OCR)"
    quote: "In 2025, over 80% of hours exhibited an output gap, indicating a potential attempt to exercise market power through economic withholding. At higher load levels, an extremely small percentage of generating capacity exhibited an output gap for a large percentage of the time. An even smaller percentage of generating capacity exhibited an output gap at lower load levels. The quantities withheld implied by the output gap were relatively low, even in the upper quartile of net load hours. These results show that potential economic withholding in the real-time energy market was low overall, but not trivial, in 2025."
  - id: e45
    source: imm-som-2025
    locator: "Executive Summary, Competition and Market Power (OCR)"
    quote: "Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation."
  - id: e46
    source: imm-som-2025
    locator: "Analysis of Competitive Performance, D. Voluntary Mitigation Plans (page 142 OCR)"
    quote: "However, House Bill 1500, passed during the 88\" Legislative Session and effective September 1, 2023, modified the statutory requirements for VMPs. Adherence to a VMP no longer constitutes an absolute defense against allegations of market power abuse with respect to the behaviors addressed by the VMP; instead, it must be considered in determining whether a violation occurred and, if so, the penalty to assess."
---

## Definition

An Energy Offer Curve is a proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. [e1]

## How it works

The curve represents the QSE's willingness to sell energy at or above a given price and quantity in the DAM, or its willingness to be dispatched by SCED in real time. [e2] A curve must be monotonically non-decreasing in both price and quantity, with no more than ten price/quantity pairs and no more than two consecutive pairs at the same price or quantity. [e5] A Resource-specific curve is bounded by the Generation Resource's LSL and HSL: in the DAM the limits specified in the COP, in SCED the limits shown by telemetry. [e3]

### Submission rules

Each curve states the selling QSE, the Resource, the curve, first and last hour, expiration, an inclusive or exclusive designation relative to other DAM offers (in Real-Time, curves are always inclusive with Ancillary Service Offers), and the percentages of FIP and FOP above LSL, which may not sum above 100%. [e13][e14][e5] Curves stay active until the offer expiration time the QSE selected. [e11]

The price must be within -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on submission timing. No curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP, and after 1430 ERCOT cancels any curve with a price above the RTSWCAP and notifies the QSE. [e15]

A QSE may submit or change curve information for any Operating Hour at any time before SCED executes, except for the percentage of FIP and percentage of FOP. [e7] A reason is required if the submission is after the end of the Adjustment Period, FIP and FOP percentages must reach ERCOT in the Adjustment Period, an invalid new curve is rejected and the latest valid curve is used, and once the Operating Hour ends the curve for that hour cannot be submitted, updated or canceled. [e10] If an On-Line Resource has neither a valid curve nor an Output Schedule at the end of the Adjustment Period, ERCOT notifies the QSE and sets the Output Schedule equal to the then current telemetered output. [e12]

### How SCED uses it, and where mitigation bites

SCED evaluates the curves, along with other offers and bids, to set dispatch by maximizing bid-based revenues minus offer-based costs subject to power balance and network constraints. [e4] It uses a two-step method. Step one runs SCED with the full network model observing only Competitive Constraints to determine Reference LMPs. [e30] Step two produces Base Points, awards, Shadow Prices and prices subject to all constraints; each curve is bounded at the lesser of the Reference LMP or the Mitigated Offer Floor, and a curve subject to mitigation under Section 3.19.4 is capped at the greater of the Reference LMP at the Resource Node plus a variable not exceeding 0.01 times the Resource's MOC at the LSL, or the appropriate MOC. [e31]

### Mitigated Offer Cap (MOC)

Energy Offer Curves may be subject to mitigation in Real-Time operations using a MOC; for Generation Resources ERCOT builds an incremental MOC curve. [e19] The formula and its variables are under Formula below. The generic incremental heat rate is 10.5 for Resources with a Commercial Operations Date on or before January 1, 2004, and 14.5 for later ones. [e20] Filing Entities may submit two types of resource-specific Verifiable Cost data for the MOC, Verifiable O&M data and Verifiable Incremental Heat Rate data; the MOC formula uses the approved verifiable incremental heat rate curve and the variable O&M cost above LSL. [e40][e21][e22] In the Verifiable Cost Manual, submitting data for Mitigated Offer Caps is optional, except for Resources under an RMR contract, which must submit an Incremental Heat Rate Curve. [e41] ERCOT's manual describes Verifiable Costs as a proxy for the costs a Resource incurs while operating. [e39]

The MOC for ESRs is set at the RTSWCAP, notwithstanding the formula, and the Protocol text records a deadline of December 31, 2023 for a report to TAC on whether to continue that approach. [e25]

Exceptional Fuel Cost: a QSE may submit a volume-weighted average fuel price during the Adjustment Period for use in the MOC, but it must exceed FIP for the day plus a $1/MMBtu threshold parameter plus the applicable fuel adder, and the actual-purchase component must account for at least 10% of the fuel the Resource burned that hour. [e26][e27] The Protocols show a pending NPRR1279 replacement of the weighted-average-fuel-price definition and paragraph (f), dated April 1, 2027; it is not described here as in force. [e24]

### Mitigated Offer Floor

Curves may also be mitigated in the RTM with a Mitigated Offer Floor. [e28] The floors are: Nuclear and Hydro -$250/MWh; Coal and Lignite, Combined Cycle, and Gas/Oil Steam and Combustion Turbine -$20/MWh; Qualifying Facility, PV and Other -$50/MWh; Wind -$100/MWh; ESR -$250/MWh. [e29]

### Energy Offer Curve Cost Caps (make-whole)

A separate set of caps applies to make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments and Voltage Support Service Payments: for example nuclear $15.00/MWh, coal and lignite $18.00/MWh, and heat-rate-based caps for gas technologies. [e16] Hydro is $10.00/MWh, Other is the DASWCAP or RTSWCAP, RMR is the effective VOLL, and Wind, PVGR and ESR are $0.00/MWh. [e17] FIP and FOP for the cap are those for the Operating Day, or the most recent preceding day if not yet available, and the minimum of FIP or FOP is used if the fuel mix is not specified or no curve exists. [e18]

### Proxy curves ERCOT creates

To use the available capacity of all committed Generation Resources, ERCOT creates proxy Energy Offer Curves for certain Resources. [e32] A non-IRR that submitted an Output Schedule instead of a curve gets a proxy running from -$250.00 at LSL up to the RTSWCAP at HSL. [e33] A non-IRR curve that does not cover the full range is extended to HSL at the highest offered price and to the LSL at the offer floor. [e34] An IRR with no curve gets a proxy with $1,500 at HSL. [e35] A RUC-committed Resource with no curve gets a proxy at $250 from zero to HSL, and one with a curve gets the greater of $250 or its submitted curve. [e36][e37] Curves built wholly or partly from proxies are marked as such in ERCOT postings. [e38]

## ERCOT context

A QSE representing a Resource, other than an RMR Unit, must keep an Energy Offer Curve, an Energy Bid/Offer Curve or an Output Schedule in place whenever the Resource is On-Line. [e6] The IMM describes SCED as scheduling generation to meet demand based on each generator's energy offer curve. [e8]

The IMM measures potential economic withholding with an "output gap": energy not produced by online resources although producing would be economic by a substantial margin at the real-time energy price, which a participant can create by raising offers to reduce dispatch. [e42] The IMM treats the mitigated offer cap as a proxy for the resource's marginal production cost, and counts output not produced when the offer exceeds both the mitigated offer price and the LMP plus the lesser of $10/MWh or 15%. [e43] For 2025 the IMM found over 80% of hours exhibited an output gap, but the quantities were relatively low, and it called potential withholding low overall but not trivial. [e44] The IMM continues to recommend system-wide market power mitigation. [e45]

House Bill 1500 (88th Legislature, effective September 1, 2023) changed Voluntary Mitigation Plans so that adherence is no longer an absolute defense against market power abuse allegations but must be considered in determining whether a violation occurred and any penalty. [e46]

## Formula

MOC(q, r, h) = Max[ GIHR * Max(FIP, WAFP), (IHR * FPRC + OM) ], per Resource per hour. In words: GIHR is the generic incremental heat rate; FIP is the natural gas fuel index price; WAFP is the weighted average fuel price a QSE may submit for the hour (volume-weighted intraday, same-day and spot fuel price, or projected incremental fuel consistent with a contract); IHR is the Resource's approved verifiable incremental heat rate curve; FPRC is the fuel price calculated from the Resource's fuel mix (using Max(WAFP, FIP + fuel adder) weighted by the gas percentage plus FOP weighted by the oil percentage); and OM is variable O&M above LSL including emissions, as approved. [e19][e20][e21][e22][e23]

## Key facts

- Curve must be monotonically non-decreasing, up to ten price/quantity pairs. [e5]
- Price range -$250/MWh to the DASWCAP or RTSWCAP; RTSWCAP ceiling after 1430 in the Day-Ahead. [e15]
- Bounded by LSL and HSL: COP values in the DAM, telemetry in SCED. [e3]
- Can be changed any time before SCED execution for the hour, except the percentage of FIP and percentage of FOP. [e7]
- SCED uses the curves to maximize bid-based revenues minus offer-based costs. [e4]
- Real-time mitigation uses a Mitigated Offer Cap and a Mitigated Offer Floor; the ESR MOC is the RTSWCAP. [e19][e28][e25]
- Generic incremental heat rate in the MOC is 10.5 (COD on or before January 1, 2004) or 14.5 (later). [e20]

## Say it like this

The energy offer curve is the generator's price ladder: how much it will produce at each price. SCED evaluates that ladder, along with other offers and bids, to decide dispatch, and where a constraint is non-competitive the ladder is capped by a cost-based mitigated offer cap. [e4][e31]

## Common confusion

- Energy Offer Curve versus Three-Part Supply Offer: a Three-Part Supply Offer has three parts, the Startup Offer, the Minimum-Energy Offer and the Energy Offer Curve, so the curve is only one of them. [e9]
- Offer curve versus Output Schedule: an On-Line Resource must have an Energy Offer Curve, an Energy Bid/Offer Curve or an Output Schedule, so the Output Schedule is the alternative to an offer curve. [e6]
- Mitigated Offer Cap versus Energy Offer Curve Cost Cap: the MOC limits offers in Real-Time SCED mitigation, while the Cost Caps are used to compute make-whole and similar payments. [e19][e16]

## Questions

### What shape must an offer curve have?

Monotonically non-decreasing in price and quantity, with at most ten price/quantity pairs. [e5]

### What bounds the curve in SCED?

In SCED, the Resource's LSL and HSL as shown by telemetry (in the DAM, as specified in the COP). [e3]

### Until when can a QSE change its curve?

At any time before SCED executes for that Operating Hour, except for the percentage of FIP and percentage of FOP. [e7]

### Why does ERCOT create proxy offer curves?

So that SCED can use the available capacity of all committed Generation Resources, for example when a QSE submits only an Output Schedule or a curve that does not cover the full range. [e32][e33][e34]

### What if a QSE offers far above its cost?

In Real-Time, where mitigation applies, the curve can be capped at the Mitigated Offer Cap built from the Resource's heat rate, fuel and O&M costs. [e31][e19] The IMM watches for this through the output gap. [e42]

### Why do make-whole payments use a different cap from SCED mitigation?

The Protocols list Energy Offer Curve Cost Caps by technology specifically for make-whole and related payments, such as nuclear at $15.00/MWh or wind at $0.00/MWh. [e16][e17]

### What if a QSE has no curve at the end of the Adjustment Period for an On-Line Resource?

ERCOT notifies the QSE and sets the Output Schedule equal to the current telemetered output until a curve or schedule is submitted. [e12]

## Open items

- The Section 3.19.4 constraint competitiveness test that decides when a curve is mitigated (NP 3) was not worked through here.
- The values of the proxy curves for combined-cycle and switchable Resource cases (np-06 6.5.7.3 (4)(d)(iii)-(viii)) were not summarized; some are pending NPRR boxes.
- NPRR1279 (effective April 1, 2027 per the Protocol box) changes the Exceptional Fuel Cost rules; not yet in force as of 2026-11-21.
- The saved ercot-vcm is dated December 1, 2026, later than as_of; treat its content as the manual's current published version, and confirm its effective date.
- The IMM's views on offer behaviour in the DAM (as opposed to real time) were not found in the saved IMM text beyond three-part offer participation.
