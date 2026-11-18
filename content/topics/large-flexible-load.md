---
id: large-flexible-load
name: Large Flexible Load (LFL)
aliases: [LFL, Large Flexible Load, large flexible load, Large Load, Large Computational Load]
kind: entity
domain: structure
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: sb6
    type: related
    note: See the sb6 topic for the SB 6 large-load provisions.
  - to: large-load-growth
    type: related
    note: Large flexible load is one component of ERCOT's load forecast alongside large loads. [e6]
  - to: large-load-interconnection
    type: related
    note: The Protocols define a Large Load and a Large Computational Load. [e4][e5]
  - to: texas-legislature
    type: related
    note: Large flexible load registration is a PURA requirement added by SB 1929 in 2023. [e9]
  - to: ers
    type: related
    note: Crypto-mining operations accounted for more than half of ERS capacity at the end of 2025. [e8]
  - to: puct
    type: related
    note: PURA directs the PUCT to write the registration rules and criteria. [e1][e3]
evidence:
  - id: e1
    source: pura-39
    locator: "PURA §39.361(b), Large Flexible Load Registration"
    quote: "The commission by rule shall require a person operating a virtual currency mining facility who enters into an agreement for retail electric service in the ERCOT power region to register the facility receiving service as a large flexible load under this section if:(1)  the facility requires a total load of more than 75 megawatts; and(2)  the facility load is interruptible."
  - id: e2
    source: pura-39
    locator: "PURA §39.361(c), Large Flexible Load Registration"
    quote: "The rules must require a person described by Subsection (b) to:(1)  register the large flexible load with the commission not later than one business day after the date the agreement begins; and(2)  provide the commission with:(A)  the location of the facility; and(B)  the anticipated demand from the facility for the five-year period beginning on the date of the registration."
  - id: e3
    source: pura-39
    locator: "PURA §39.361(d)(1)"
    quote: "adopt criteria for determining whether a load is interruptible for the purposes of this section based on whether it is possible for the facility operator to choose to interrupt the load"
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Large Load"
    quote: "One or more Facilities at a single site with an aggregate peak Demand greater than or equal to 75 MW behind one or more common Points of Interconnection (POIs) or Service Delivery Points."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Large Computational Load (LCL)"
    quote: "A Large Load in which 50% or greater of the Demand at the site consists of power electronic based load, specifically computational load, such as data centers and cryptocurrency mining facilities."
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, Long-Term Load Forecast"
    quote: >-
      The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, and large loads.
  - id: e7
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary"
    quote: "Aggregate demand for crypto-currency mining was approximately 4,600 MW in 2025."
  - id: e8
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary"
    quote: "By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity."
  - id: e9
    source: pura-39
    locator: "PURA §39.361, history note"
    quote: "Added by Acts 2023, 88th Leg., R.S., Ch. 463 (S.B. 1929), Sec. 1, eff. September 1, 2023."
---

## Definition

Under PURA, a large flexible load is a facility operated by a virtual currency mining operator, with an agreement for retail electric service in ERCOT, that requires a total load of more than 75 megawatts and whose load is interruptible. The PUCT must by rule require such a facility to be registered as a large flexible load. [e1]

## How it works

The registration rules must require the operator to register the facility with the commission no later than one business day after the retail agreement begins, and to give the commission the facility's location and its anticipated demand for the five years from registration. [e2] The PUCT must adopt criteria for deciding whether a load is interruptible, based on whether the facility operator can choose to interrupt it. [e3] The statute was added in 2023 by SB 1929. [e9]

Separately, the ERCOT Protocols define a Large Load as one or more facilities at a single site with an aggregate peak Demand of at least 75 MW behind one or more common points of interconnection or service delivery points. [e4] A Large Computational Load is a Large Load where 50% or more of site Demand is power electronic based computational load, such as data centers and cryptocurrency mining facilities. [e5]

## ERCOT context

The IMM's 2025 report says aggregate crypto-currency mining demand was about 4,600 MW in 2025, and that by the end of 2025 such operations accounted for more than half of all ERS capacity. [e7][e8] ERCOT's long-term load forecast treats large flexible loads as one of five major components, next to base economic load, EV load, rooftop PV and large loads. [e6]

## Key facts

- PURA §39.361: virtual currency mining facility over 75 MW with interruptible load must register as an LFL. [e1]
- Registration is due within one business day after the retail agreement begins. [e2]
- The Protocols' Large Load threshold: aggregate peak Demand of at least 75 MW at a site. [e4]
- A Large Computational Load is a Large Load that is at least 50% computational power-electronic load. [e5]
- 2025: crypto-currency mining demand about 4,600 MW. [e7]

## Say it like this

(Guidance) A large flexible load is a big, interruptible load, in practice a crypto-mining facility, that has to register with the PUCT. It sits beside the broader Large Load category the Protocols use for interconnection.

## Common confusion

(Guidance) "Large Flexible Load" is a PURA registration category for virtual currency mining facilities above 75 MW with interruptible load. [e1] "Large Load" and "Large Computational Load" are the Protocol terms, with a 75 MW site threshold, and they are not limited to flexible or crypto loads. [e4][e5] The saved np-02 does not define "Large Flexible Load".

## Questions

### What makes a load an LFL under PURA?

It is a virtual currency mining facility under a retail electric service agreement in ERCOT, requiring more than 75 MW, with interruptible load. [e1]

### How is a Large Computational Load different from a Large Load?

It is a Large Load where 50% or more of site Demand is power-electronic computational load such as data centers and crypto mining. [e4][e5]

### Why does the IMM's 2025 report matter for LFLs?

It reports about 4,600 MW of crypto-mining demand in 2025 and that crypto operations were more than half of ERS capacity by year end. [e7][e8]

## Open items

- Deeper pass: PUCT rule text implementing §39.361 (not saved); how ERCOT registers and treats LFLs and Controllable Load Resources in Protocols (np-16 PCLR registration).
- Deeper pass: SB 6 interconnection standards and curtailment rules for large loads.
- np-02 contains no "Large Flexible Load" definition; the definition here is statutory.
