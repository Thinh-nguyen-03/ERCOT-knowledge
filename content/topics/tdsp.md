---
id: tdsp
name: TDSP (Transmission & Distribution Service Provider)
aliases: [TDSP, TSP, DSP, TDU, Transmission and Distribution Utility, wires company]
kind: entity
domain: structure
level: 1
lenses: [analyst, retail, congestion]
as_of: 2026-11-18
links:
  - to: rep
    type: contrasts-with
    note: A TDU may not sell electricity, while a REP sells at retail but may not own generation. [e6][e7]
  - to: lse
    type: contrasts-with
    note: TSPs and DSPs register separately from LSEs. [e4]
  - to: noe
    type: related
    note: MOUs and ECs are included in the registration requirement for TSPs and DSPs, though the PUCT TDU definition excludes them. [e4][e5]
  - to: esi-id
    type: related
    note: The TDSP delivers energy to Customers; the ESI ID identifies the delivery point.
  - to: ams-meters
    type: related
    note: PURA assigns metering to the TDU in the default case. [e8]
  - to: retail-choice
    type: part-of
    note: Open-access wires service is what lets customers choose a REP. [e9]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Transmission and/or Distribution Service Provider (TDSP)"
    quote: "An Entity that is a TSP, a DSP or both, or an Entity that has been selected to own and operate Transmission Facilities and has a PUCT approved code of conduct in accordance with P.U.C. SUBST. R. 25.272, Code of Conduct for Electric Utilities and Their Affiliates."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Transmission Service Provider (TSP)"
    quote: "An Entity under the jurisdiction of the PUCT that owns or operates Transmission Facilities used for the transmission of electricity and provides Transmission Service in the ERCOT Transmission Grid."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Distribution Service Provider (DSP)"
    quote: "An Entity that owns or operates a Distribution System for the delivery of energy from the ERCOT Transmission Grid to Customers."
  - id: e4
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT."
  - id: e5
    source: puct-25-5
    locator: "Section 25.5, definition of Transmission and distribution utility (TDU)"
    quote: "but does not include a municipally owned utility or an electric cooperative. The TDU may be a single utility or may be separate transmission and distribution utilities."
  - id: e6
    source: pura-39
    locator: "PURA Sec. 39.105(a)"
    quote: "After January 1, 2002, a transmission and distribution utility may not sell electricity or otherwise participate in the market for electricity except for the purpose of buying electricity to serve its own needs."
  - id: e7
    source: puct-25-5
    locator: "Section 25.5, definition of Retail electric provider (REP)"
    quote: "A person that sells electric energy to retail customers in this state. A retail electric provider may not own or operate generation assets."
  - id: e8
    source: pura-39
    locator: "PURA Sec. 39.107(a)"
    quote: "On introduction of customer choice in a service area, metering services for the area shall continue to be provided by the transmission and distribution utility affiliate of the electric utility that was serving the area before the introduction of customer choice."
  - id: e9
    source: pura-39
    locator: "PURA Sec. 39.203(a)"
    quote: "In addition, on and after January 1, 2002, a transmission and distribution utility shall provide transmission or distribution service, or both, at retail to an electric utility, a retail electric provider, a municipally owned utility, an electric cooperative, or an end-use customer at rates, terms of access, and conditions that are comparable to those that apply to the transmission and distribution utility and its affiliates."
  - id: e10
    source: np-16
    locator: "Section 16.4(2)"
    quote: "DSPs operating within portions of Texas in areas where Customer Choice is in effect (including opt-in MOUs and opt-in co-ops) must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, before starting operations with ERCOT."
---

## Definition

A TDSP is an Entity that is a TSP, a DSP or both, or an Entity selected to own and operate Transmission Facilities that has a PUCT-approved code of conduct. [e1] A TSP owns or operates Transmission Facilities and provides Transmission Service in the ERCOT Transmission Grid, and a DSP owns or operates a Distribution System that delivers energy from the ERCOT Transmission Grid to Customers. [e2][e3]

## How it works

Each TSP and DSP in the ERCOT Region, including MOUs and ECs, must register with ERCOT. Registration means complying with Operating Guide backup plan requirements, signing a Standard Form Market Participant Agreement, designating authorized representatives, contacts and a User Security Administrator, and being capable of performing TSP or DSP functions. [e4]

DSPs in areas where Customer Choice is in effect, including opt-in MOUs and opt-in co-ops, must complete Retail Market Testing before starting operations with ERCOT. [e10]

Under PURA, a transmission and distribution utility must provide transmission or distribution service at retail to REPs, utilities and end-use customers on rates, terms and conditions comparable to those applying to the utility and its affiliates. [e9]

## ERCOT context

The "TDU" in PUCT rules is the regulated wires company in a certified power region; the PUCT definition excludes MOUs and ECs, and says a TDU may be one utility or separate transmission and distribution utilities. [e5] The ERCOT term TDSP is wider because ERCOT's registration requirement reaches MOUs and ECs that operate transmission or distribution. [e4]

Since January 1, 2002 a TDU may not sell electricity or otherwise participate in the electricity market except to buy electricity for its own needs. [e6] In customer-choice areas, metering stays with the TDU affiliate of the electric utility that served the area before choice began, with a competitive exception for interval-data-recorder customers that PURA describes. [e8]

## Key facts

- TDSP = TSP, DSP, or both. [e1]
- TSPs and DSPs, including MOUs and ECs in the ERCOT Region, must register with ERCOT. [e4]
- A TDU may not sell electricity after January 1, 2002 (other than buying for its own needs). [e6]
- TDUs must provide open-access retail transmission and distribution service on comparable terms. [e9]
- DSPs in customer-choice areas must complete Retail Market Testing. [e10]

## Say it like this

(Guidance) The TDSP owns and runs the poles and wires. It delivers power for any retailer on comparable terms and does not sell the power itself.

## Common confusion

(Guidance) TDU (a PUCT/PURA term) and TDSP (an ERCOT Protocol term) overlap but are not identical: the PUCT TDU definition excludes MOUs and ECs, while ERCOT registration of TSPs and DSPs includes them. [e4][e5] TDSPs are also not retailers and not QSEs.

## Questions

### Why can't a TDU just sell power to its customers?

PURA bars a transmission and distribution utility from selling electricity or otherwise participating in the electricity market, other than buying electricity to serve its own needs, after January 1, 2002. [e6] Retail sales belong to REPs and other competitive retailers. [e7]

### What do TSP and DSP each do?

A TSP owns or operates Transmission Facilities and provides Transmission Service; a DSP owns or operates the Distribution System that delivers energy from the transmission grid to Customers. [e2][e3]

## Open items

- Transmission cost allocation, TDSP tariff rates and the 4CP mechanism were not covered; see the four-cp topic.
- Names and number of TDSPs in ERCOT (for example the largest operators) were not looked up in the sources.
- TDSP duties in retail transactions (switching, meter data, outage handling) were not sourced here.
