---
id: load-shed
name: Load Shed / Rotating Outages
aliases: [load shed, controlled outages, rotating outages, rolling blackouts, firm load shed, manual load shed, UFLS, under-frequency load shed]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-18
links:
  - to: eea
    type: part-of
    note: Firm load shed is an EEA Level 3 step; see that topic for the levels and triggers. [e1]
  - to: prc
    type: related
    note: Level 3 load shed aims to recover 1,500 MW of PRC within 30 minutes. [e1]
  - to: tdsp
    type: related
    note: Transmission and distribution service providers implement the outages ERCOT orders. [e2]
  - to: winter-storm-uri
    type: example-of
    note: ERCOT shed 20,000 MW of firm load at the worst point of the February 2021 event. [e7]
  - to: operating-notices
    type: related
    note: An Emergency Notice allows ERCOT to instruct TSPs or DSPs to drop load when the cause is a transmission problem. [e5]
  - to: ordc
    type: related
    note: ORDC builds the probability of load shed into reserve prices; see that topic.
evidence:
  - id: e1
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (3)(b)"
    quote: "(b) Direct all TOs to shed firm Load, in 100 MW blocks, distributed as documented in the Operating Guides in order to maintain a steady state system frequency at a minimum of 59.91 Hz and to recover 1,500 MW of PRC within 30 minutes."
  - id: e2
    source: ercot-eea-overview
    locator: "Controlled outages box"
    quote: "Controlled outages are electric service interruptions, ordered by ERCOT but implemented by transmission and distribution service providers, to quickly reduce electric demand, balance the grid, and prevent an uncontrolled system-wide outage. They are used as a last resort to bring operating reserves back to a safe level and maintain system frequency."
  - id: e3
    source: ercot-eea-overview
    locator: "Controlled outages box"
    quote: "Each utility is responsible for deciding how to decrease demand in their respective service area(s). ERCOT provides an amount, in megawatts, by which each utility is required to reduce demand, based on their percentage of historic peak demand. Once ERCOT orders the outages to begin, these utilities then manage the outage on their local system. ERCOT does not have oversight into these outage plans."
  - id: e4
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(b)(i)(A)"
    quote: "(A) Manually shed Load connected to under-frequency relays and/or under-voltage relays pursuant to an ERCOT Load shed directive issued during EEA Level 3 so long as the TO has determined that system conditions warrant utilizing Load connected to under-frequency and/or under-voltage relays and each affected TO continues to comply with its Under-Frequency Load Shed (UFLS) obligation as described in Nodal Operating Guide Section 2.6.1, Automatic Firm Load Shedding, and its Load shed obligation as described in Nodal Operating Guide Section 4.5.3.4, Load Shed Obligation."
  - id: e5
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (5)"
    quote: "If the Emergency Condition is the result of a transmission problem, ERCOT shall act immediately to return the ERCOT System to a reliable condition, including instructing any QSE representing a Resource to change the Resource’s output, curtailing any remaining DC Tie Load, and instructing TSPs or DSPs to drop Load."
  - id: e6
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (6)"
    quote: "(6) In the event that Load is curtailed or Load Resource(s) or ERS Resource(s) are deployed due to a transmission problem as described in paragraph (5) above, ERCOT shall post within one day an operations message to the ERCOT website listing the event’s date, start and end time, MW quantity of Load curtailment or deployment instruction, and the substation(s) or geographic area in which the event occurred."
  - id: e7
    source: ferc-nerc-uri
    locator: "Executive Summary, ERCOT Interconnection"
    quote: "ERCOT ultimately had to shed 20,000 MW of firm load at the worst point of the Event"
  - id: e8
    source: ferc-nerc-uri
    locator: "Executive Summary, footnote 6"
    quote: "Manual firm load shed, often referred to as rolling or rotating blackouts, is when BES operators order a percentage of the demand or load to be temporarily disconnected, to avoid system instability or other system emergencies."
  - id: e9
    source: ferc-nerc-uri
    locator: "Section on Difficulties in Rotating Firm Load Shed and Avoiding Overlap of Automatic Load Shed/UFLS"
    quote: "The combined magnitude and duration of manual firm load shed needed to maintain BES reliability in ERCOT caused electric service providers (TOPs, TOs and DPs) to have difficulties in rotating the manual load shed and required operators to implement controlled outages of electric circuits normally reserved for automatic load shed (e.g., underfrequency load shed/UFLS)."
  - id: e10
    source: ferc-nerc-uri
    locator: "Section on Difficulties in Rotating Firm Load Shed, February 15"
    quote: "In ERCOT, at least 25 percent of the load is to be reserved for automatic load shedding (and this does not include critical loads protected from manual load shedding, such as hospitals, police stations, etc.)."
  - id: e11
    source: ercot-eea-overview
    locator: "Controlled outages box, history list"
    quote: "December 22, 1989: 500 MW April 17, 2006: 1,000 MW February 2, 2011: 4,000 MW February 15-18, 2021: 20,000 MW"
  - id: e12
    source: ferc-nerc-uri
    locator: "Executive Summary, ERCOT Interconnection, February 15"
    quote: "At first ERCOT was able to recover its frequency to normal levels through deployment of load management measures, but it continued to suffer generating unit outages and needed to order its first 1,000 MW of load shed at 1:20 a.m."
---

## Definition

Controlled outages, also called load shed, are electric service interruptions ordered by ERCOT but implemented by transmission and distribution service providers, to quickly reduce demand, balance the grid and prevent an uncontrolled system-wide outage. [e2] Manual firm load shed is often called rolling or rotating blackouts: operators order a percentage of load temporarily disconnected to avoid system instability or other emergencies. [e8]

## How it works

Load shed is a last resort used to bring operating reserves back to a safe level and hold frequency. [e2] In the Protocols it is an EEA Level 3 step: ERCOT directs all transmission owners to shed firm load in 100 MW blocks, to hold steady-state frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes. [e1]

ERCOT gives each utility a megawatt reduction amount based on its share of historic peak demand; each utility decides how to meet it and manages the outage locally, and ERCOT has no oversight of those plans. [e3] Transmission owners may use load on under-frequency or under-voltage relays for manual shed during Level 3 only if they keep meeting their automatic UFLS obligation. [e4] ERCOT can also instruct TSPs or DSPs to drop load when an Emergency Condition comes from a transmission problem, and must post an operations message within one day with the event's date, times, MW and location. [e5][e6]

## ERCOT context

ERCOT's overview lists four controlled-outage events since it was established: 500 MW in 1989, 1,000 MW in 2006, 4,000 MW in 2011 and 20,000 MW in February 2021. [e11] In February 2021 ERCOT ordered its first 1,000 MW at 1:20 a.m. on February 15 and ended up shedding 20,000 MW at the worst point. [e12][e7]

The FERC and NERC report found that the size and duration of the shed made rotation hard and pushed operators into circuits normally reserved for automatic under-frequency load shed. In ERCOT at least 25 percent of load is reserved for automatic shed, not counting critical loads such as hospitals. [e9][e10]

## Key facts

- Firm load shed is directed in 100 MW blocks at EEA Level 3. [e1]
- ERCOT sets each utility's required MW reduction by its share of historic peak demand; utilities choose how to do it. [e3]
- ERCOT must post within one day an operations message on any load curtailment due to a transmission problem. [e6]
- Peak controlled outage in February 2021: 20,000 MW, the largest of four events listed by ERCOT. [e11][e7]
- At least 25 percent of ERCOT load is reserved for automatic load shedding. [e10]

## Say it like this

Load shed is ERCOT's last-resort tool: when reserves run too low it orders utilities to cut a set number of megawatts, and the utilities decide whose power to turn off. It is the Level 3 step of the emergency alert ladder, not the first thing ERCOT reaches for. [e1][e2][e3]

## Common confusion

Load shed is not the same as an EEA: EEA Levels 1 and 2 use supply and demand-side tools, and firm load shed begins at Level 3. [e1] "Controlled outages", "rotating outages" and "load shed" refer to the same thing in ERCOT's usage. [e2][e8] A Load Resource being deployed (for example under RRS) is also not firm load shed. [e6]

## Questions

### Who decides which customers lose power?

ERCOT sets the megawatts each utility must reduce, based on historic peak demand share, and each utility decides how to do it in its own area. [e3]

### Why was rotation difficult in February 2021?

The combined size and duration of the shed made it hard to rotate, so operators had to use circuits normally reserved for under-frequency load shed, while ERCOT also has to keep at least 25 percent of load reserved for automatic shed. [e9][e10]

### How much was shed in 2021?

ERCOT shed 20,000 MW at the worst point; the combined firm load shed across the affected regions was larger. [e7] ERCOT's own overview lists it as the largest of four controlled-outage events. [e11]

## Scenarios

### Frequency is falling and PRC cannot be held above 1,500 MW. What does ERCOT do?

- At EEA Level 3 it directs all TOs to shed firm load in 100 MW blocks to hold 59.91 Hz and recover 1,500 MW of PRC within 30 minutes. [e1]
- Utilities carry out the shed using their local plans, using under-frequency relay load only within their UFLS obligations. [e3][e4]

## Open items

- The FERC and NERC report's combined 23,418 MW figure (all footprints) was read but is not cited here; no source for a combined total beyond the ERCOT 20,000 MW.
- Deeper pass: the Operating Guide load shed tables, the Load Shed Obligation (Section 4.5.3.4), critical load definitions and the exemption of critical loads, and the PUCT rules on rotating outages.
- Deeper pass: restoration of load after shed and the settlement treatment (e.g., prices during shed) are not covered here.
- Deeper pass: how ORDC and VOLL reflect the probability of load shed in scarcity pricing.
