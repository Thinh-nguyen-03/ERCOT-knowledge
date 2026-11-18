---
id: resource-entity
name: Resource Entity
aliases: [Resource Entity, RE, resource owner, resource-owning Market Participant]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: qse
    type: related
    note: A Resource Entity that is represented by a QSE keeps that relationship or must replace it; Virtual and Emergency QSE rules exist for the gap. [e4]
  - to: resource-types
    type: composed-of
    note: The Resource types a Resource Entity may own or control are Generation Resources, ESRs, Load Resources and SOGs. [e1]
  - to: lse
    type: contrasts-with
    note: LSEs sit on the load side; Resource Entities sit on the supply side, but both can be Virtual QSEs when their QSE leaves. [e4]
  - to: clr
    type: related
    note: A Load Resource, including a CLR, is owned or controlled by a Resource Entity. [e1]
  - to: dgr-sodg
    type: related
    note: Distribution-connected generators are registered through the Resource Entity process. [e2]
  - to: energy-storage-resource
    type: related
    note: An ESR is one of the Resource types a Resource Entity can own or control. [e1]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Resource Entity"
    quote: "An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity."
  - id: e2
    source: np-16
    locator: "Section 16.5(1)"
    quote: "A Resource Entity owns or controls a Generation Resource, Energy Storage Resource (ESR), Settlement Only Generator (SOG), or Load Resource connected to the ERCOT System. Each Resource Entity operating in the ERCOT Region must register with ERCOT."
  - id: e3
    source: np-16
    locator: "Section 16.5(1)"
    quote: "To become registered as a Resource Entity, an Entity must execute a Standard Form Market Participant Agreement (using the form in Section 22, Attachment A, Standard Form Market Participant Agreement), designate Resource Entity Authorized Representatives, contacts, and a User Security Administrator (USA) (per the Application for Registration as a Resource Entity), and demonstrate to ERCOT’s reasonable satisfaction that it is capable of performing the functions of a Resource Entity under these Protocols."
  - id: e4
    source: np-16
    locator: "Section 16.2.6.1(1)"
    quote: "A “Virtual QSE” is defined as an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE."
  - id: e5
    source: np-16
    locator: "Section 16.5(2)"
    quote: "Prior to commissioning, Resources Entities will regularly update the data necessary for modeling."
  - id: e6
    source: np-16
    locator: "Section 16.2.6.3(2)"
    quote: "If an Emergency QSE that is a Resource Entity fails to meet at least one of the requirements listed above within the allotted time, ERCOT may allow the Resource Entity additional time, as determined by ERCOT staff, to meet the requirements."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Resource"
    quote: "The term is used to refer to an Energy Storage Resource (ESR), a Generation Resource, or a Load Resource. The term “Resource” used by itself in these Protocols does not include a Settlement Only Generator (SOG) or an Emergency Response Service (ERS) Resource."
---

## Definition

A Resource Entity is an Entity that owns or controls a Generation Resource, an Energy Storage Resource, a Settlement Only Generator or a Load Resource and is registered with ERCOT as a Resource Entity. [e1]

## How it works

Every Resource Entity operating in the ERCOT Region must register with ERCOT. [e2] To register it must execute the Standard Form Market Participant Agreement, name its Authorized Representatives, contacts and a User Security Administrator, and show ERCOT it can perform the functions of a Resource Entity under the Protocols. [e3] Before commissioning, Resource Entities regularly update the data ERCOT needs for modeling. [e5]

A Resource Entity is the owner/controller role. Market transactions run through a QSE, and the protocols have fallbacks when a QSE leaves: a Resource Entity without a QSE or Emergency QSE status can be designated by ERCOT as a Virtual QSE to temporarily perform QSE responsibilities. [e4] If an Emergency QSE that is a Resource Entity cannot meet the requirements in time, ERCOT may give it more time. [e6]

## ERCOT context

The word "Resource" used alone in the Protocols covers ESRs, Generation Resources and Load Resources, but not Settlement Only Generators or ERS Resources, even though a Resource Entity can own a SOG. [e7][e1] So the "Resource Entity" label is wider than the "Resource" label.

## Key facts

- Owns or controls a Generation Resource, ESR, SOG or Load Resource. [e1]
- Must register with ERCOT, with a Standard Form Market Participant Agreement. [e2][e3]
- Can be designated a Virtual QSE by ERCOT if it has no QSE or Emergency QSE status. [e4]
- ERCOT may give an Emergency QSE that is a Resource Entity extra time to fix its QSE arrangements. [e6]

## Say it like this

(Guidance) A Resource Entity is the registered owner or controller of the plants, batteries or controllable loads. It registers with ERCOT and trades through a QSE.

## Common confusion

(Guidance) Resource Entity is a registered Market Participant role; a Resource is the physical unit. [e1][e7] Resource Entity is also not a QSE, although a Resource Entity can serve as its own QSE and Virtual or Emergency QSE rules can make it act as one. [e4]

## Questions

### What happens when a Resource Entity's QSE terminates?

The Resource Entity can be designated a Virtual QSE by ERCOT to temporarily perform QSE responsibilities. [e4] If it ends up as an Emergency QSE and cannot meet the requirements in time, ERCOT may allow additional time. [e6]

### Why isn't an SOG a "Resource" if the Resource Entity owns it?

The Protocols use "Resource" alone to mean ESR, Generation Resource or Load Resource and exclude SOGs and ERS Resources, but a Resource Entity definition names SOGs among what it owns or controls. [e7][e1]

## Open items

- Deeper pass: the Resource Registration data and Planning Guide 6.8.2 process, SGIA review and commissioning steps.
- Deeper pass: the QSE representation and termination rules for Resource Entities in 16.2.
- NPRR995 is pending and would add the Settlement Only Energy Storage System to the Resource Entity definition; not covered here.
