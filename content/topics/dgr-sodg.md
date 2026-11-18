---
id: dgr-sodg
name: DGR & SODG (Distribution-Connected Generation)
aliases: [DGR, SODG, Distribution Generation Resource, Settlement Only Distribution Generator, distribution-connected generation]
kind: concept
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-types
    type: is-a
    note: A DGR is a Generation Resource; an SODG is a settlement-only generator. [e1][e3]
  - to: resource-entity
    type: related
    note: Resource Entities register these units with ERCOT. [e2]
  - to: tdsp
    type: related
    note: These units connect to the Distribution System rather than the ERCOT transmission system. [e1][e2]
  - to: settlement-point
    type: related
    note: SODG energy is paid at a nodal price at the bus mapped to its associated load unless it opts out. [e4]
  - to: load-zone
    type: related
    note: An SODG that opts out of nodal pricing or a site mostly storage is settled differently than at the bus price. [e4]
  - to: energy-storage-resource
    type: related
    note: Distribution-connected storage has parallel DESR definitions.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Distribution Generation Resource (DGR)"
    quote: "A Generation Resource connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Distribution Generator (SODG)"
    quote: "A generator that is connected to the Distribution System with a rating of: (1) One MW or less that chooses to register as an SODG; or (2) Greater than one and up to ten MW that is capable of providing a net export to the ERCOT System and does not register as a Distribution Generation Resource (DGR)."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Generator (SOG)"
    quote: "A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers."
  - id: e5
    source: np-02
    locator: "Section 2.1, SODG registration sentence"
    quote: "SODGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads."
  - id: e4
    source: np-06
    locator: "Section 6.6.3.8(2)"
    quote: "For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model."
  - id: e6
    source: np-06
    locator: "Section 6.6.3.8(1)"
    quote: "The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions:"
  - id: e7
    source: np-02
    locator: "Section 2.1, pending NPRR995 note after SODG definition"
    quote: "[NPRR995: Delete the above definition “Settlement Only Distribution Generator (SODG)” upon system implementation.]"
---

## Definition

A Distribution Generation Resource (DGR) is a Generation Resource connected to the Distribution System that is either greater than ten MW and not registered with the PUCT as a self-generator, or greater than one MW and chooses to register as a Generation Resource to participate in ERCOT markets. [e1] A Settlement Only Distribution Generator (SODG) is a distribution-connected generator rated one MW or less that chooses to register as an SODG, or greater than one and up to ten MW that can net export to ERCOT and does not register as a DGR. [e2]

## How it works

The difference is market participation. A DGR is a Generation Resource, while an SODG is settled for exported energy only and may not join the ancillary services market, RUC or SCED or make energy offers. [e1][e3] SODGs must be registered with ERCOT under Planning Guide 6.8.2 and are modeled in ERCOT systems for reliability. [e5]

For settlement, a QSE's payment or charge for SODG energy is based on a nodal energy price, with exceptions. [e6] For an SODG that price is the time-weighted price at the electrical bus associated with the mapped load in the Network Operations Model. [e4]

## ERCOT context

The SODG definition is marked for deletion under NPRR995 upon system implementation, so the SOG/SODG family is changing; this is pending, not yet in effect. [e7]

## Key facts

- DGR thresholds: over 10 MW and not a PUCT self-generator, or over 1 MW by choice. [e1]
- SODG: 1 MW or less by choice, or over 1 MW and up to 10 MW that can net export and does not register as a DGR. [e2]
- SODG settled for exported energy only; no energy offers, SCED or ancillary services. [e3]
- SODG energy paid at the nodal price at the bus mapped to the associated load. [e4]

## Say it like this

(Guidance) A DGR is distribution-connected generation that participates in the market as a Generation Resource; an SODG sits on the distribution system too but is just paid for what it exports.

## Common confusion

(Guidance) The names look alike but the market roles differ: only the DGR is a Resource that can offer. [e1][e3] The size line is not sharp: units between 1 and 10 MW can be either, depending on whether they register as a DGR. [e2]

## Questions

### When would a 5 MW distribution-connected plant be an SODG?

If it can net export to ERCOT and does not register as a DGR. [e2]

### Where is an SODG's energy priced?

At the electrical bus associated with the mapped load, subject to listed exceptions. [e4][e6]

## Open items

- Deeper pass: the SODG opt-out of nodal pricing and the ESS exception (6.6.3.8 paragraphs (1)(a), (1)(b), (5)); Load Zone price retention.
- Deeper pass: SODG telemetry exemption (10 MWh) is in a table row that could be pending; not cited.
- Deeper pass: DGR operational treatment (state estimator load adjustments, outage rules) and Distribution Energy Storage Resource parallel.
