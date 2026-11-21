---
id: three-part-supply-offer
name: Three-Part Supply Offer
aliases: [Three-Part Supply Offer, TPO, three-part offer, startup minimum-energy energy offer]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, structuring]
depth: deep
as_of: 2026-11-21
links:
  - to: energy-offer-curve
    type: composed-of
    note: The Energy Offer Curve is the third component of the Three-Part Supply Offer. [e1]
  - to: dam
    type: used-in
    note: The DAM uses all three parts of the offer. [e5]
  - to: ruc
    type: used-in
    note: RUC uses only the Startup and Minimum-Energy components to determine commitments. [e5]
  - to: sced
    type: used-in
    note: SCED may use the Energy Offer Curve in Real-Time Operations. [e5]
  - to: qse
    type: related
    note: A QSE makes the offer for a Generation Resource it represents. [e1]
  - to: cop
    type: related
    note: Energy Offer Curves are bounded in the DAM by the LSL and HSL of the Generation Resource specified in the COP. [e6]
  - to: ruc-make-whole
    type: related
    note: Make-Whole Payments are based on the Startup and Minimum-Energy Offers, limited by caps. [e17]
  - to: offer-cap
    type: related
    note: Energy Offer Curves must sit between -$250/MWh and the DASWCAP or RTSWCAP, depending on submission timing. [e26]
  - to: market-power-mitigation
    type: related
    note: Energy Offer Curves may be mitigated in SCED using a Mitigated Offer Cap and a Mitigated Offer Floor. [e5]
  - to: hsl-lsl
    type: related
    note: The Startup Offer ends at LSL and the Minimum-Energy Offer is for operating at LSL. [e8]
  - to: energy-storage-resource
    type: contrasts-with
    note: Startup Offers and Minimum-Energy Offers are not applicable to ESRs. [e8]
  - to: non-spin
    type: related
    note: An Off-Line Non-Spin Offer for an hour stops an energy-curve-only offer from being treated as self-committed. [e21]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Three-Part Supply Offer"
    quote: "An offer made by a QSE for a Generation Resource that it represents containing three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Startup Offer"
    quote: "An offer for all costs incurred by a Generation Resource in starting up and reaching Low Sustained Limit (LSL). The Startup Offer is in dollars per start."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.1, paragraph (1)"
    quote: "A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Minimum-Energy Offer"
    quote: "An offer for the costs incurred by a Resource in producing energy at the Resource’s LSL expressed in $/MWh."
  - id: e5
    source: np-04
    locator: "Section 4.4.9.1, paragraph (2)"
    quote: "The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. The RUC only uses the Startup Offer and the Minimum-Energy Offer components for determining RUC commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource’s energy payments. The Energy Offer Curve may also be used by SCED in Real-Time Operations."
  - id: e6
    source: np-04
    locator: "Section 4.4.9.3, paragraph (2)"
    quote: "A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry."
  - id: e7
    source: imm-som-2025
    locator: "Market operations discussion of RUC"
    quote: "ERCOT also applies a $250-per-MWh offer floor to RUC-committed units."
  - id: e8
    source: np-04
    locator: "Section 4.4.9.2, paragraph (1)"
    quote: "The Startup Offer component represents all costs incurred by a Generation Resource in starting up and reaching its LSL. The Minimum-Energy Offer component represents a proxy for the costs incurred by a Resource in producing energy at the Resource’s LSL. Startup Offers and Minimum-Energy Offers are not applicable to ESRs."
  - id: e9
    source: np-04
    locator: "Section 4.4.9.2.1, paragraph (1)(c)"
    quote: "(c) The Resource’s hot, intermediate, and cold Startup Offer in dollars;"
  - id: e10
    source: np-04
    locator: "Section 4.4.9.2.1, paragraph (2)"
    quote: "Valid Startup Offers and Minimum-Energy Offers (which must be part of a Three-Part Supply Offer) must be received before 1000 for the effective DAM and DRUC."
  - id: e11
    source: np-04
    locator: "Section 4.4.9.2.1, paragraph (4)"
    quote: "The Resource’s Startup Offer must not be greater than 200% of the Resource Category Generic Startup Cost for that type of Resource listed in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps, unless ERCOT has approved verifiable Resource-specific startup costs for that Resource, under Section 4.4.9.2.4, Verifiable Startup Offer and Minimum-Energy Offer Caps, in which case the Resource’s Startup Offer must not be greater than 200% of those approved verifiable Resource-specific Startup Costs."
  - id: e12
    source: np-04
    locator: "Section 4.4.9.2.1, paragraph (5)"
    quote: "The Resource’s Minimum-Energy Offer must not be greater than 200% of the Resource Category Generic Minimum-Energy Cost for that type of Resource listed in Section 4.4.9.2.3 unless ERCOT has approved verifiable Resource-specific minimum-energy costs for that Resource, under Section 4.4.9.2.4 in which case the Resource’s Minimum-Energy Offer must not be greater than 200% of those approved verifiable Resource-specific minimum-energy costs."
  - id: e13
    source: np-04
    locator: "Section 4.4.9.2.1, paragraph (3)"
    quote: "A QSE may update and submit a Startup Offer and/or Minimum-Energy Offer for a Resource during the Adjustment Period for any hours in which the Resource is not DAM- or RUC-committed before the offer is updated or submitted."
  - id: e14
    source: np-04
    locator: "Section 4.4.9.2.3, paragraph (2)(c)"
    quote: "(c) Combined-cycle greater than 90 MW = 8 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in Minimum-Energy Offer;"
  - id: e15
    source: np-04
    locator: "Section 4.4.9.2.3, paragraph (3)"
    quote: "The FIP and FOP used to calculate the Resource Category Minimum-Energy Generic Cap shall be the FIP or FOP for the Operating Day. In the event the Resource Category Minimum-Energy Generic Cap must be calculated before the FIP or FOP is available for the particular Operating Day, the FIP and FOP for the most recent preceding Operating Day shall be used."
  - id: e16
    source: np-04
    locator: "Section 4.4.9.2.4, paragraph (1)"
    quote: "Once verifiable Resource-specific startup costs and minimum-energy costs are established and approved by ERCOT in accordance with Section 5.6.1, Verifiable Costs, then they are used in place of generic costs as described in Section 4.4.9.2.3, Startup Offer and Minimum-Energy Offer Generic Caps. A QSE may file verifiable unit-specific costs for a Resource at any time, but it is not required to file those costs only because of a DAM commitment. The most recent approved verifiable costs on file must be used going forward."
  - id: e17
    source: np-05
    locator: "Section 5.6.1, paragraph (2)"
    quote: "Make-Whole Payments for a Resource are based on the Startup Offers and Minimum-Energy Offers for the Resource, limited by caps. Until ERCOT approves verifiable unit-specific costs for that Resource, the caps are the Resource Category Startup Generic Cap and the Resource Category Minimum-Energy Generic Cap. When ERCOT approves verifiable unit-specific costs for that Resource the caps are those verifiable unit-specific costs."
  - id: e18
    source: ercot-vcm
    locator: "Section 1 (policies), paragraph (3)"
    quote: "Verifiable Costs are used as a proxy for the costs a Resource incurs while operating. These costs are determined for, and allocated according to, the three discrete stages of the power generation cycle: startup to Low Sustained limit (LSL), operation at LSL, and operation above LSL."
  - id: e19
    source: ercot-vcm
    locator: "Section 3.2, paragraph (1)"
    quote: "Verifiable Startup Costs for a Resource represent a proxy for all of the costs incurred in order to bring a Resource online and make it available to produce power. Only the costs incurred from startup through Low Sustained Limit (LSL) and from breaker open to Shutdown are permissible startup costs."
  - id: e20
    source: ercot-vcm
    locator: "Section 1, paragraph (h)"
    quote: "ERCOT will not separately approve Verifiable Startup Costs and Verifiable Minimum Energy Costs. Both must be submitted and approved together."
  - id: e21
    source: np-04
    locator: "Section 4.4.9.1, paragraph (3)(a)"
    quote: "A QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for the DAM for any given hour will be considered by the DAM to be self-committed for that hour, as long as an Ancillary Service Offer for Off-Line Non-Spin Service was not also submitted for that hour."
  - id: e22
    source: np-04
    locator: "Section 4.4.9.1, paragraph (3)(b)"
    quote: "A Combined Cycle Generation Resource will be considered by the DAM to be self-committed if:"
  - id: e23
    source: np-04
    locator: "Section 4.4.9.1, paragraph (3)"
    quote: "A QSE that submits an Energy Offer Curve without also submitting a Startup Offer and a Minimum-Energy Offer is considered not to be offering the Resource into the RUC, but that does not prevent the Resource from being committed in the RUC process like any other Resource that does not submit an offer in the RUC."
  - id: e24
    source: np-04
    locator: "Section 4.4.9.3, paragraph (1)"
    quote: "The Energy Offer Curve represents the QSE’s willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations."
  - id: e25
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (1)(c)"
    quote: "A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;"
  - id: e26
    source: np-04
    locator: "Section 4.4.9.3.1, paragraph (2)"
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP."
  - id: e27
    source: np-04
    locator: "Section 4.4.9.3, paragraph (6)"
    quote: "For any Operating Hour that is a RUC-Committed Interval or a DAM-Committed Interval for a Resource, a QSE for that Resource may not change a Startup Offer or Minimum-Energy Offer."
  - id: e28
    source: np-04
    locator: "Section 4.4.9.3.3, paragraph (1)"
    quote: "The following Energy Offer Curve Cost Caps must be used for the purpose of make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments:"
  - id: e29
    source: np-04
    locator: "Section 4.4.9.3.3, paragraph (1)(c)"
    quote: "(c) Combined Cycle greater than 90 MW = 9 MMBtu/MWh * ((Percentage of FIP * FIP) + (Percentage of FOP * FOP))/100, as specified in the Energy Offer Curve;"
  - id: e30
    source: imm-som-2024
    locator: "Executive summary, RUC discussion (page ix)"
    quote: "Nodal Protocol Revision Request (NPRR) 1092, Reduce RUC Offer Floor and Limit RUC Opt-Out Provision was filed by the IMM and approved by the Board. The RUC offer floor was reduced to $250 per MWh but the RUC opt-out provision will be removed once ERCOT completes implementation."
  - id: e31
    source: imm-som-2025
    locator: "Offer stack discussion (energy offer floor for online NSRS)"
    quote: "The $75 level corresponds to the energy offer floor for capacity providing online Non-Spin Reserve Service (NSRS), which averaged approximately 1,000 MW throughout 2025."

  - id: e32
    source: np-04
    locator: "Section 4.4.9.2.3, paragraph (4)"
    quote: "Items (2)(c) and (2)(d) above are determined by capacity of largest simple-cycle combustion turbine in the train."
  - id: e33
    source: np-04
    locator: "Section 4.4.9.3.3, paragraph (3)"
    quote: "Items in paragraphs (1)(c) and (d) above are determined by capacity of largest simple-cycle combustion turbine in the train selected."
---

## Definition

A Three-Part Supply Offer is an offer made by a QSE for a Generation Resource it represents, with three components: a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve. [e1]

## How it works

The Startup Offer covers all costs a Generation Resource incurs in starting up and reaching its Low Sustained Limit (LSL), expressed in dollars per start. [e2] The Protocols describe the Minimum-Energy Offer as a proxy for the costs of producing energy at the LSL, in $/MWh. [e4][e8] Startup Offers and Minimum-Energy Offers are not applicable to ESRs. [e8] The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and quantity in the DAM, or its willingness to be dispatched by SCED in Real-Time Operations. [e24] ERCOT must validate each component before it can be used in any ERCOT process. [e3]

Different processes use different parts. The DAM uses all three parts and also accepts Energy Offer Curves submitted alone. RUC uses only the Startup and Minimum-Energy components to decide commitments, but the Energy Offer Curve may be used in Settlement to claw back some or all of a RUC-committed Resource's energy payments. SCED may use the Energy Offer Curve in real time. [e5]

**Offer criteria and timing.** A Startup Offer is submitted as separate hot, intermediate and cold amounts in dollars. [e9] Valid Startup and Minimum-Energy Offers must be received before 1000 for the effective DAM and DRUC. [e10] During the Adjustment Period a QSE may update them for hours in which the Resource is not DAM- or RUC-committed. [e13] For any Operating Hour that is a RUC-Committed Interval or a DAM-Committed Interval, the QSE may not change the Startup Offer or Minimum-Energy Offer. [e27]

The Energy Offer Curve must be a monotonically non-decreasing price and quantity curve of no more than ten price/quantity pairs, with no more than two consecutive pairs at the same price or quantity. [e25] It must fall within -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, and no curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP. [e26] Energy Offer Curves are bounded in the DAM by the LSL and HSL specified in the COP, and in SCED by the LSL and HSL shown by telemetry. [e6]

**Caps on the startup and minimum-energy components.** A Startup Offer may not exceed 200% of the Resource Category Generic Startup Cost for that Resource type, unless ERCOT has approved verifiable Resource-specific startup costs, in which case the limit is 200% of those approved costs. [e11] The Minimum-Energy Offer has the same 200% limit against the generic or verifiable minimum-energy cost. [e12]

**Verifiable costs.** Once ERCOT approves verifiable Resource-specific startup and minimum-energy costs under Section 5.6.1, they replace the generic costs; a QSE may file at any time and need not file only because of a DAM commitment, and the most recent approved costs on file must be used going forward. [e16] Make-Whole Payments are based on the Startup and Minimum-Energy Offers, limited by caps: the generic caps until ERCOT approves verifiable unit-specific costs, and those verifiable costs afterwards. [e17] ERCOT's Verifiable Cost Manual describes Verifiable Costs as a proxy for operating costs across three stages: startup to LSL, operation at LSL, and operation above LSL. [e18] Only costs incurred from startup through LSL and from breaker open to Shutdown are permissible startup costs. [e19] ERCOT will not separately approve Verifiable Startup Costs and Verifiable Minimum Energy Costs; both must be submitted and approved together. [e20]

## Formula

The generic Minimum-Energy cap for gas-fired categories is a heat-rate-times-fuel-price formula. For the Combined-cycle greater than 90 MW category it is 8 MMBtu/MWh times the fuel price, where the fuel price is the QSE's specified percentage of the Fuel Index Price (FIP) times FIP plus its specified percentage of the Fuel Oil Price (FOP) times FOP, divided by 100. [e14] Other gas categories use different MMBtu/MWh values in the same expression, and the combined-cycle size category is determined by the capacity of the largest simple-cycle combustion turbine in the train. [e14][e32] ERCOT uses the FIP and FOP for the Operating Day; if the cap must be calculated before they are available, it uses the most recent preceding Operating Day's values, and replaces them once the Operating Day's values are available. [e15]

The Energy Offer Curve Cost Caps (used for make-whole Settlements, Real-Time High Dispatch Limit Override Energy Payments, Real-Time Constraint Management Plan Cost Recovery Payments, and Voltage Support Service Payments) use the same form with different heat rates for the gas-fired categories (other categories use fixed values or other rules); for example the Combined Cycle greater than 90 MW category uses 9 MMBtu/MWh, with the size category again determined by the largest simple-cycle combustion turbine in the train. [e28][e29][e33]

## ERCOT context

Self-commitment in the DAM: a QSE that submits an Energy Offer Curve without a Startup Offer and a Minimum-Energy Offer for an hour is treated by the DAM as self-committed for that hour, as long as an Off-Line Non-Spin Ancillary Service Offer was not also submitted for that hour. [e21] A Combined Cycle Generation Resource is treated as self-committed under a parallel condition, which the Protocol states in two parts about the offers made for Resources within the Combined Cycle Train. [e22] A curve-only offer is considered not to be offering the Resource into RUC, but the Resource can still be RUC-committed like any other Resource with no RUC offer. [e23]

On the price floors in the offer-related rules: the IMM reported that NPRR 1092 reduced the RUC offer floor to $250 per MWh, and its 2025 report says ERCOT applies a $250-per-MWh offer floor to RUC-committed units. [e30][e7] The IMM's 2025 report also describes a $75 level as the energy offer floor for capacity providing online Non-Spin Reserve Service, which averaged approximately 1,000 MW in 2025. [e31]

## Key facts

- Three parts: Startup Offer, Minimum-Energy Offer, Energy Offer Curve. [e1]
- Startup Offer is in dollars per start; Minimum-Energy Offer is in $/MWh at LSL. [e2][e4]
- Startup and Minimum-Energy Offers must be received before 1000 for the effective DAM and DRUC. [e10]
- Both are capped at 200% of the generic or approved verifiable cost. [e11][e12]
- RUC uses only the Startup and Minimum-Energy Offers for commitment decisions. [e5]
- Energy Offer Curves: at most ten price/quantity pairs, within -$250/MWh and the DASWCAP or RTSWCAP. [e25][e26]
- ERCOT must validate each component before use. [e3]

## Say it like this

A three-part offer tells ERCOT what it costs to start the unit, what it costs to run it at minimum, and what each additional MWh costs. RUC uses the first two to decide commitments, the day-ahead market uses all three, and SCED may use the energy curve. The startup and minimum-energy pieces are capped, so what a unit can claim in make-whole depends on generic or approved verifiable costs.

## Common confusion

- Three-Part Offer versus Energy Offer Curve: the curve is only one of the three parts, and the DAM also accepts a curve without the other two. [e1][e5]
- An energy-curve-only DAM offer is not "no offer": the DAM treats it as self-committed for that hour (unless an Off-Line Non-Spin offer was also submitted), and the Resource is not offering into RUC but can still be RUC-committed. [e21][e23]
- Verifiable costs do not replace the offer: the offer is still capped at 200% of the generic or verifiable cost. [e11][e12][e16]

## Questions

### What are the three parts?

Startup Offer, Minimum-Energy Offer, and Energy Offer Curve. [e1]

### Which parts does RUC use?

Only the Startup Offer and Minimum-Energy Offer for commitments; the energy curve may be used in Settlement to claw back energy payments. [e5]

### What does the Startup Offer cover?

All costs incurred in starting up and reaching LSL, in dollars per start, submitted for hot, intermediate and cold starts. [e2][e9]

### Why would a QSE file verifiable costs?

Make-Whole Payments are limited by caps, and until ERCOT approves verifiable unit-specific costs the caps are the generic ones; once approved, the verifiable costs are the caps, and the Startup and Minimum-Energy Offers are limited to 200% of them. [e17][e11][e12]

### What happens if a QSE submits only an energy curve for the DAM?

The DAM treats the Resource as self-committed for that hour unless an Off-Line Non-Spin Offer was also submitted for it, and the Resource is not offering into RUC. [e21][e23]

### Why do Startup and Minimum-Energy Offers not apply to batteries?

The Protocols state they are not applicable to ESRs, so an ESR's offer is an Energy Offer Curve; the Protocol text does not give the reason. [e8]

## Scenarios

### A gas unit's startup cost rises. What limits its Startup Offer?

- The offer may not exceed 200% of the generic startup cost, or of ERCOT-approved verifiable startup costs if those exist. [e11]
- Verifiable startup costs must be submitted for hot, intermediate and cold starts and approved together with minimum-energy costs. [e20]
- ERCOT uses approved costs prospectively once approved. [e16]

## Open items

- The Protocol states no rationale for excluding ESRs from Startup and Minimum-Energy Offers; not sourced.
- Combined Cycle self-commitment conditions are in Section 4.4.9.1(3)(b) as a two-part test; the second condition (no Off-Line Non-Spin offer for any Resource in the train) was quoted only partially and the first condition is not restated here.
- IMM discussion of the NSRS offer floor beyond the $75 figure, and any current rationale for the $250 RUC floor, are not in the saved text beyond the statements above.
- Generic Startup Cap dollar table (Section 4.4.9.2.3(1)) is a table and was not quoted.
