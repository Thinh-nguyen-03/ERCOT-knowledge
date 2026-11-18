---
id: resource-types
name: Resource Types (Generation, Load, ESR, SOG)
aliases: [Resource, Generation Resource, GR, Load Resource, ESR, SOG, Settlement Only Generator]
kind: concept
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: resource-entity
    type: related
    note: A Resource Entity owns or controls these Resources. [e7]
  - to: clr
    type: related
    note: A CLR is a Load Resource that can be dispatched up or down. [e4]
  - to: dgr-sodg
    type: related
    note: A DGR is a Generation Resource connected to the Distribution System; an SODG is a generator connected to the Distribution System with a defined rating. [e5][e6]
  - to: energy-storage-resource
    type: related
    note: ESRs are registered to provide energy and/or ancillary service. [e2]
  - to: sced
    type: used-in
    note: SOGs may not participate in SCED, RUC or make energy offers. [e8]
  - to: ancillary-services
    type: related
    note: Generation Resources, Load Resources and ESRs can provide ancillary service. [e2][e3][e9]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Resource"
    quote: "The term is used to refer to an Energy Storage Resource (ESR), a Generation Resource, or a Load Resource. The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG) or an Emergency Response Service (ERS) Resource."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Energy Storage Resource (ESR)"
    quote: "An Energy Storage System (ESS) registered with ERCOT for the purpose of providing energy and/or Ancillary Service to the ERCOT System."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Generation Resource"
    quote: "A generator capable of providing energy or Ancillary Service to the ERCOT System and is registered with ERCOT as a Generation Resource."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Load Resource"
    quote: "A Load capable of providing Ancillary Service to the ERCOT System and/or energy in the form of Demand response and registered with ERCOT as a Load Resource."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Controllable Load Resource (CLR)"
    quote: "A Load Resource capable of controllably reducing or increasing consumption under Dispatch control by ERCOT."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Generator (SOG)"
    quote: "A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Distribution Generation Resource (DGR)"
    quote: "A Generation Resource connected to the Distribution System that is either:"
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Distribution Generator (SODG)"
    quote: "A generator that is connected to the Distribution System with a rating of:"
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Resource Entity"
    quote: "An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity."
  - id: e10
    source: np-02
    locator: "Section 2.1, pending NPRR995 replacement of definition of Resource"
    quote: "The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG), Settlement Only Energy Storage System (SOESS), or an Emergency Response Service (ERS) Resource."
  - id: e11
    source: np-02
    locator: "Section 2.1, pending NPRR995 note after SOG definition"
    quote: "[NPRR995: Delete the above definition “Settlement Only Generator (SOG)” upon system implementation.]"
---

## Definition

In the Protocols, a "Resource" means an Energy Storage Resource, a Generation Resource or a Load Resource. Used alone, the term does not include a Settlement Only Generator or an Emergency Response Service Resource. [e1]

## How it works

- A Generation Resource is a generator capable of providing energy or ancillary service and registered as a Generation Resource. [e3]
- An ESR is an energy storage system registered to provide energy and/or ancillary service. [e2]
- A Load Resource is a load capable of providing ancillary service and/or energy as demand response, registered as a Load Resource. [e9] A Controllable Load Resource is one that can reduce or increase consumption under ERCOT dispatch control. [e4]
- A Settlement Only Generator is settled for exported energy only and may not participate in the ancillary services market, RUC, SCED or make energy offers. [e8]

Resource Entities own or control these types. [e7]

## ERCOT context

Distribution-connected generation has its own split: a Distribution Generation Resource is a Generation Resource connected to the Distribution System, while a Settlement Only Distribution Generator is a generator connected to the Distribution System with a defined rating. [e5][e6] The size tests are in the dgr-sodg topic.

Pending change: NPRR995 would, upon system implementation, add a Settlement Only Energy Storage System to the list excluded from the bare term "Resource" and would delete the SOG definition, among others. [e10][e11] This is not yet in effect.

## Key facts

- "Resource" = ESR, Generation Resource or Load Resource; SOGs and ERS Resources are excluded. [e1]
- Generation Resources and ESRs can provide energy and/or ancillary service. [e3][e2]
- A CLR can be dispatched by ERCOT to reduce or increase consumption. [e4]
- SOGs are settlement-only and cannot make energy offers or join SCED. [e8]

## Say it like this

(Guidance) ERCOT sorts market assets into Generation Resources, Load Resources and storage that are dispatched, and settlement-only generators that are just paid for exports. Which bucket you sit in decides what you can offer.

## Common confusion

(Guidance) "Resource" in the Protocols is narrower than "any generator": a SOG is not a Resource. [e1] A battery can be a Resource (ESR) rather than a Generation Resource. [e2]

## Questions

### What is the difference between a Generation Resource and a SOG?

A Generation Resource can provide energy or ancillary service and is registered as such; a SOG is settled for exported energy only and cannot make energy offers or join SCED, RUC or the ancillary services market. [e3][e8]

### What makes a Load Resource "controllable"?

It can reduce or increase consumption under ERCOT's dispatch control. [e4]

## Open items

- Deeper pass: DC-Coupled Resource and the ESR categories (DESR, TESR) with thresholds; Transmission Generation Resource definitions.
- Deeper pass: pending NPRR995 SOESS/SODESS/SOTESS definitions once implemented.
- Deeper pass: registration thresholds (10 MW, 1 MW) and the self-generator carve-outs; Aggregate Load Resource and its change under NPRR1188.
