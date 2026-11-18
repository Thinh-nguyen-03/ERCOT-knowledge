---
id: sixty-day-disclosure
name: 60-Day Disclosure Reports
aliases: [60-day disclosure, 60 day disclosure, 60-Day SCED Disclosure, 60-Day DAM Disclosure]
kind: report
domain: structure
level: 2
lenses: [analyst, trading]
as_of: 2026-11-18
links:
  - to: puct
    type: related
    note: The disclosure timing comes from PUCT Substantive Rule 25.506. [e1][e3]
  - to: sced
    type: related
    note: The Protocols require posting SCED offer and bid data 60 days after the Operating Day. [e6]
  - to: dam
    type: related
    note: The Protocols require posting DAM offer data 60 days after the Operating Day. [e7]
  - to: market-information-system
    type: related
    note: These postings go on the public ERCOT website, which is separate from the MIS secure and certified areas. [e1]
  - to: imm
    type: related
    note: Entity-specific offer data posted after the delay is the basis for after-the-fact analysis of market behavior.
  - to: energy-offer-curve
    type: related
    note: Generation Resource Energy Offer Curves are among the items posted at 60 days. [e6]
evidence:
  - id: e1
    source: puct-25-506
    locator: "Section 25.506(a), General Requirements"
    quote: "To increase the transparency of the ERCOT-administered markets, ERCOT must post the information required in this section at a publicly accessible location on its website. In no event will ERCOT disclose competitively sensitive consumption data."
  - id: e2
    source: puct-25-506
    locator: "Section 25.506(b)"
    quote: "ERCOT will post the following information in aggregated form, for each settlement interval and for each area where available, two calendar days after the day for which the information is accumulated:"
  - id: e3
    source: puct-25-506
    locator: "Section 25.506(c)"
    quote: "ERCOT will post the following information in entity-specific form, for each settlement interval, 60 calendar days after the day for which the information is accumulated, except where inapplicable or otherwise prescribed."
  - id: e4
    source: puct-25-506
    locator: "Section 25.506(c)(1)"
    quote: "Offer curves (prices and quantities) for each type of ancillary service and for energy in the real time market, except that, for the highest-priced offer selected or dispatched for each interval on an ERCOT-wide basis, ERCOT will post the offer price and the name of the entity submitting the offer three calendar days after the day for which the information is accumulated."
  - id: e5
    source: puct-25-506
    locator: "Section 25.506(c)(5)"
    quote: "For each hour, transmission flows, voltages, transformer flows, voltages and tap positions (i.e., State Estimator data)."
  - id: e6
    source: np-03
    locator: "Section 3.2.5, Publication of Resource and Load Information, paragraph (4)"
    quote: "ERCOT shall post on the ERCOT website the following information for each Resource for each execution of SCED 60 days prior to the current Operating Day:"
  - id: e7
    source: np-03
    locator: "Section 3.2.5, paragraph (12)"
    quote: "ERCOT shall post on the ERCOT website the following information from the DAM for each hourly Settlement Interval for the applicable Operating Day 60 days prior to the current Operating Day:"
  - id: e8
    source: np-03
    locator: "Section 3.2.5, paragraph (1)"
    quote: "Two days after the applicable Operating Day, ERCOT shall post on the ERCOT website for the ERCOT System and, if applicable, for each Disclosure Area, the information derived from each execution of SCED."
---

## Definition

The 60-day disclosures are the entity-specific market data ERCOT posts publicly 60 calendar days after the day the information is accumulated, under PUCT Substantive Rule 25.506 and Protocol Section 3.2.5. [e3][e6][e7]

## How it works

The rule has two tiers. Aggregated information, such as supply curves, actual output and actual load, is posted two calendar days after the day. [e2] Entity-specific information, with resource and entity names attached, is posted 60 calendar days after. [e3] The Protocols mirror this: SCED-derived aggregate data is posted two days after the Operating Day, and resource-level SCED data and DAM data are posted 60 days prior to the current Operating Day. [e8][e6][e7]

## ERCOT context

The 60-day lag exists inside a rule written to increase market transparency while never disclosing competitively sensitive consumption data. [e1] The 60-day set includes real-time and ancillary service offer curves, other resource-specific information, and hourly State Estimator data. [e4][e5] Not everything waits: the highest-priced offer selected or dispatched in each interval, with the offering entity's name, is posted after three calendar days. [e4]

The State Estimator data can be released sooner than 60 days when ERCOT decides this is necessary to explain unexpected market or system events, such as pricing anomalies. [e5]

## Key facts

- Aggregated data: two calendar days after the day. [e2]
- Entity-specific data: 60 calendar days after the day, unless otherwise prescribed. [e3]
- The highest-priced offer in each interval and its entity name: three calendar days. [e4]
- Protocol 3.2.5 requires 60-day postings of SCED resource data and DAM data. [e6][e7]

## Say it like this

(Guidance) ERCOT shows the market its aggregate offer and load data within two days, but names who offered what only after 60 days. That is why analysts reconstruct competitors' behavior after the fact.

## Common confusion

"60-day" does not mean data arrives 60 days after settlement or invoices; the clock runs from the day the information is accumulated (the Operating Day). [e3][e6] Not every posting waits 60 days. [e2][e4]

## Questions

### What is the difference between the two-day and the 60-day postings?

Two-day postings are aggregated (curves, output, load). The 60-day postings are entity-specific, with names. [e2][e3]

### Can anything entity-specific come out earlier?

Yes: the highest-priced offer each interval (three days), and State Estimator data when ERCOT finds it necessary for explaining unexpected events. [e4][e5]

## Open items

- Deeper pass: the full item lists under Section 3.2.5(4) and (12) (offer curves, Three-Part Supply Offers, DAM bids, awards) were only partly read, and the pending NPRR1188 replacement text in that section was not described.
- Deeper pass: the exact names, file formats and web locations of the published reports are not in the saved sources.
- The seven-calendar-day posting of offers above 50 times a natural gas price index (Section 25.506(c)(2)) was not quoted.
