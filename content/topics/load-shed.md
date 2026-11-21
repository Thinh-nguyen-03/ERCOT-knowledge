---
id: load-shed
name: Load Shed / Rotating Outages
aliases: [load shed, controlled outages, rotating outages, rolling blackouts, firm load shed, manual load shed, UFLS, under-frequency load shed]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: eea
    type: part-of
    note: Directing firm load shed is one of the measures ERCOT may take at EEA Level 3; see that topic for the levels and triggers. [e1]
  - to: prc
    type: related
    note: The firm load shed direction at Level 3 aims to recover 1,500 MW of PRC within 30 minutes. [e1]
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
    note: The IMM says the ORDC reflects the relationship between operating reserves and the probability of load shed, and that the ORDC adder was discontinued in December 2025 with the introduction of RTC; see that topic. [e14][e15]
  - to: ancillary-services
    type: related
    note: ERCOT may deploy ECRS and RRS from Load Resources at EEA Level 2, before firm load shed is directed at Level 3. [e30]
  - to: energy-storage-resource
    type: related
    note: At EEA Level 3 ERCOT can instruct ESRs to suspend charging as a measure alongside firm load shed. [e29]
  - to: weather-load
    type: related
    note: ERCOT chooses the summer or winter load shed table according to whether it treats the event as hot or cold weather. [e22]
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
  - id: e14
    source: imm-som-2025
    locator: "Chapter I.D.1, ORDC (p. 7)"
    quote: "The ORDC reflects the relationship between operating reserves and the probability of load shed; as operating reserves decrease, the likelihood of involuntary load shed increases."
  - id: e15
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e16
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (3), lead-in"
    quote: "Upon declaration of an EEA Level 3, ERCOT shall take any of the following measures as necessary to recover frequency or PRC to the minimum required levels:"
  - id: e13
    source: ferc-nerc-uri
    locator: "Executive Summary, The February 2021 Cold Weather Outages in Texas and the South Central United States"
    quote: "The Event was the fourth cold-weather-related event in the last ten years to jeopardize BES reliability, 5 and with a combined 23,418 MW of manual firm load shed, 6 the largest controlled firm load shed event in U.S. history."
  - id: e17
    source: nog-02
    locator: "Section 2.6.1, Automatic Firm Load Shedding, paragraph (1)"
    quote: >-
      (1) At least 25% of the ERCOT System Load shall be equipped at all times with provisions for automatic Under-Frequency Load Shedding (UFLS) as described in this paragraph, unless provisions specified in Section 4.5.3.3, EEA Levels, are required to meet ERCOT operating instructions for manual Load shed.
  - id: e18
    source: nog-02
    locator: "Section 2.6.1, Table 1: Standard UFLS Stages"
    quote: >-
      59.3 Hz At least 5% of the TO Load At least six cycles but no more than 30 cycles 59.1 Hz A total of at least 10% of the TO Load At least six cycles but no more than 30 cycles 58.9 Hz A total of at least 15% of the TO Load At least six cycles but no more than 30 cycles 58.7 Hz A total of at least 20% of the TO Load At least six cycles but no more than 30 cycles 58.5 Hz A total of at least 25% of the TO Load At least six cycles but no more than 30 cycles
  - id: e19
    source: nog-02
    locator: "Section 2.6.1, Table 2: Supplemental/Anti-Stall UFLS Stages"
    quote: >-
      59.5 Hz At least 1.5% of the TO Load 90 seconds 59.5 Hz A total of at least 3.0% of the TO Load 120 seconds 59.5 Hz A total of at least 4.5% of the TO Load 150 seconds
  - id: e20
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(b)(i)(B)"
    quote: >-
      (B) Manually shed Load that is armed to deploy as part of the 58.5 Hz, 58.7 Hz, and anti-stall UFLS stages, such that the UFLS Load falls below the TO’s 25% Load relief obligation, as described in Nodal Operating Guide Section 2.6.1, in order to meet ERCOT operating instructions for manual Load shed if all Load identified for manual Load shed and the Load identified in paragraph (A) above has been shed.
  - id: e21
    source: nog-04
    locator: "Section 4.5.3.4, Load Shed Obligation, paragraph (2)"
    quote: >-
      (2) Load shed obligation percentages for ERCOT EEA Level 3 Load shedding will be determined by calculating each TO’s Load as a percentage of the ERCOT System summer and winter peak 15 minute Demand interval.
  - id: e22
    source: nog-04
    locator: "Section 4.5.3.4, paragraph (3)"
    quote: >-
      (3) The summer Load shed table will be used during a hot weather Load shed event and the winter Load shed table will be used during a cold weather Load shed event. ERCOT will determine, in its sole discretion, whether an EEA event will be treated as a hot weather or cold weather Load shed event based on the weather conditions.
  - id: e23
    source: nog-04
    locator: "Section 4.5.3.4, paragraph (5)"
    quote: >-
      (5) Each TO shall coordinate with each TDSP it represents to: (a) Minimize overlap of circuits that are designated for manual firm Load shed with circuits that serve designated critical loads; and (b) Minimize overlap of circuits that are designated for manual firm Load shed with circuits that are utilized for UFLS and Under-Voltage Load Shed (UVLS).
  - id: e24
    source: nog-04
    locator: "Section 4.5.3.5, EEA Termination, paragraphs (1)(e) and (2)(d)"
    quote: >-
      (e) Maintain a stable ERCOT System frequency when restoring Load.
  - id: e25
    source: nog-04
    locator: "Section 4.5.3.5, EEA Termination, paragraph (2)"
    quote: >-
      (d) Loads will be restored when specifically authorized by the ERCOT.
  - id: e26
    source: np-06
    locator: "Section 6.5.9.4.3, Restoration of Market Operations, paragraph (1)"
    quote: >-
      (1) ERCOT shall continue the EEA until sufficient offers are received and deployed by ERCOT to eliminate the conditions requiring the EEA and normal SCED operations are restored. After restoring RRS, ERCOT shall restore curtailed DC Tie Load. Intermittent solutions of SCED do not set new LMPs until ERCOT declares that the EEA is no longer needed.
  - id: e27
    source: puct-25-53
    locator: "16 TAC 25.53, Electric Service Emergency Operations Plans, annexes to be included (subsection (e)(1)(B))"
    quote: >-
      A load shed annex that must include: (i) procedures for controlled shedding of load; (ii) priorities for restoring shed load to service; and
  - id: e28
    source: puct-25-52
    locator: "16 TAC 25.52, Reliability and Continuity of Service, prioritization of critical natural gas facilities"
    quote: >-
      A critical natural gas facility is a critical load during an energy emergency. A utility must incorporate critical natural gas facilities into its loadshed and restoration planning.
  - id: e29
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(a)"
    quote: >-
      (a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwise necessary, via a manual Dispatch Instruction.
  - id: e30
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)(iii)"
    quote: >-
      (iii) Instruct QSEs to deploy ECRS or RRS (controlled by high-set under-frequency relays) supplied from Load Resources. ERCOT may deploy ECRS or RRS from Load Resources simultaneously or separately.
  - id: e31
    source: ferc-nerc-uri
    locator: "Section on Difficulties in Rotating Firm Load Shed, February 15-16"
    quote: >-
      ERCOT operators needed to protect at least 25 percent of load beyond the 14-28 percent of manual load shed ordered on February 15-16 and the identified critical loads from manual load shed.
  - id: e32
    source: ferc-nerc-uri
    locator: "Executive Summary / Section on Event timeline, ERCOT firm load shed"
    quote: >-
      ERCOT was forced to order an unprecedented 20,000 MW of firm load shed, more than twice the amount of load shed during the 2011 event, and to maintain firm load shed for nearly three days.
  - id: e33
    source: ferc-nerc-uri
    locator: "Executive Summary, The February 2021 Cold Weather Outages in Texas and the South Central United States"
    quote: >-
      More than 4.5 million people in Texas lost power during the Event, and some went without power for as long as four days, while exposed to below-freezing temperatures for over six days.
  - id: e34
    source: np-06
    locator: "Section 6.5.9.4, Energy Emergency Alert, paragraph (8)"
    quote: >-
      ERCOT shall immediately implement EEA Level 3 any time the steady-state frequency is below 59.5 Hz for any duration.
  - id: e35
    source: np-06
    locator: "Section 6.5.9.4, paragraph (9)"
    quote: >-
      (9) Percentages for EEA Level 3 Load shedding will be based on the previous year’s TSP peak Loads, as reported to ERCOT, and must be reviewed by ERCOT and modified annually as required.
  - id: e36
    source: np-04
    locator: "Section 4.4.12, paragraph (6)(b), AORDC curve"
    quote: >-
      AORDC = (𝟏 − pnorm(reserve level − 3000, μ*, σ*)) ∗ 𝑽𝑶𝑳𝑳
  - id: e37
    source: nog-02
    locator: "Section 2.6.1, paragraph (3)"
    quote: >-
      A TO may not meet the Load relief requirements of the supplemental anti-stall UFLS stages by utilizing Load that the TO needs to meet the 59.3 Hz standard UFLS stages.
  - id: e38
    source: nog-04
    locator: "Section 4.5.3, Implementation, paragraph (7)(a)-(b)"
    quote: >-
      (a) Load interrupted manually by SCADA will be shed without delay upon receipt of a Load shed instruction and in a time period not to exceed 30 minutes after receipt of the Load shed instruction for each Entity’s portion of every Load shed instruction. SCADA-controlled Load shed is preferred to be utilized by the TO and/or TDSP(s) before non-SCADA-controlled Load shed when executing a Load shed instruction; (b) If sufficient amounts of SCADA-controlled Load are not available to fulfill an Entity’s manual Load shed instruction, the TO and/or TDSP(s) shall complete, if applicable, the remaining manual Load shed through non-SCADA-controlled Load shed methods without delay upon receipt of a Load shed instruction and in a time period not to exceed one hour after receipt of the Load shed instruction.
  - id: e39
    source: nog-04
    locator: "Section 4.5.3, Implementation, paragraph (8)"
    quote: >-
      (8) Each TSP, or its designated agent, will provide ERCOT a status report of Load shed progress within 30 minutes of the time of ERCOT’s instruction or upon ERCOT’s request.
---

## Definition

Controlled outages, also called load shed, are electric service interruptions ordered by ERCOT but implemented by transmission and distribution service providers, to quickly reduce demand, balance the grid and prevent an uncontrolled system-wide outage. [e2] Manual firm load shed is often called rolling or rotating blackouts: operators order a percentage of load temporarily disconnected to avoid system instability or other emergencies. [e8]

## How it works

Load shed is a last resort used to bring operating reserves back to a safe level and hold frequency. [e2] In the Protocols, upon declaring an EEA Level 3 ERCOT shall take any of a list of measures as necessary to recover frequency or PRC. [e16] One of them is to direct all transmission owners to shed firm load in 100 MW blocks, to hold steady-state frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes. [e1] Another is to instruct ESRs to suspend charging. [e29] Before Level 3, at Level 2, ERCOT may already deploy ECRS or RRS from Load Resources. [e30] ERCOT must also implement Level 3 immediately whenever steady-state frequency is below 59.5 Hz for any duration. [e34]

Who sheds how much: ERCOT gives each utility a megawatt reduction amount based on its share of historic peak demand; each utility decides how to meet it and manages the outage locally, and ERCOT has no oversight of those plans. [e3] The Operating Guides set the Level 3 obligation percentages by calculating each TO's load as a percentage of the ERCOT system summer and winter peak 15-minute Demand interval. [e21] The Protocols say the percentages are based on the previous year's TSP peak loads and are reviewed and modified annually. [e35] ERCOT uses the summer table for a hot weather load shed event and the winter table for a cold weather one, deciding in its sole discretion which applies. [e22]

Under the Operating Guides, load shed by SCADA must be executed without delay and within 30 minutes of the instruction, and any remainder by non-SCADA methods within one hour; each TSP reports load shed progress to ERCOT within 30 minutes of the instruction or on request. [e38][e39] Transmission owners and TDSPs may manually shed load connected to under-frequency or under-voltage relays under an ERCOT Level 3 directive so long as the TO has determined system conditions warrant it and each affected TO keeps complying with its UFLS and load shed obligations. [e4] If all load identified for manual shed has been shed, they may also shed load armed for the 58.5 Hz, 58.7 Hz and anti-stall UFLS stages, even if that takes UFLS load below the TO's 25% relief obligation. [e20] ERCOT can also instruct TSPs or DSPs to drop load when an Emergency Condition comes from a transmission problem, and must post an operations message within one day with the event's date, times, MW and location. [e5][e6]

## Formula

There is no single formula for the manual shed; the quantities are the TO percentages above. Automatic shed is a table of frequency stages. At least 25% of ERCOT system load must be equipped at all times with automatic under-frequency load shedding (UFLS), unless Level 3 provisions are needed to meet ERCOT operating instructions for manual shed. [e17] The standard stages are: 59.3 Hz, at least 5% of TO load; 59.1 Hz, a total of at least 10%; 58.9 Hz, 15%; 58.7 Hz, 20%; and 58.5 Hz, 25%, each with a delay of at least six and no more than 30 cycles. [e18] Three supplemental anti-stall stages at 59.5 Hz require at least 1.5%, 3.0% and 4.5% of TO load, with delays of 90, 120 and 150 seconds. [e19] A TO may use load it would otherwise use for the 59.1 to 58.5 Hz stages to meet the anti-stall stages, but not load needed for the 59.3 Hz stage. [e37]

## ERCOT context

ERCOT's overview lists four controlled-outage events: 500 MW in 1989, 1,000 MW in 2006, 4,000 MW in 2011 and 20,000 MW in February 2021. [e11] In the early hours of 15 February 2021 ERCOT ordered its first 1,000 MW of load shed at 1:20 a.m. and ended up shedding 20,000 MW at the worst point. [e12][e7] FERC and NERC say ERCOT maintained firm load shed for nearly three days, and that more than 4.5 million people in Texas lost power in the Event, some for as long as four days. [e32][e33]

The FERC and NERC report found that the size and duration of the shed made rotation hard and pushed operators into circuits normally reserved for automatic under-frequency load shed. In ERCOT at least 25 percent of load is reserved for automatic shed, not counting critical loads such as hospitals. [e9][e10] The report says operators needed to protect at least 25 percent of load beyond the 14-28 percent of manual shed ordered on February 15-16 and the identified critical loads. [e31]

Critical loads: each TO must coordinate with each TDSP to minimize overlap of manual-shed circuits with circuits serving designated critical loads and with UFLS and UVLS circuits. [e23] Under the PUCT's reliability rule, a utility must incorporate critical natural gas facilities, which are critical loads during an energy emergency, into its load-shed and restoration planning. [e28] The PUCT's emergency operations plan rule requires transmission and distribution utilities, municipally owned utilities and cooperatives to include a load shed annex covering procedures for controlled shedding and priorities for restoring shed load. [e27]

Restoration: ERCOT continues the EEA until sufficient offers are received and deployed and normal SCED operations are restored; intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA no longer needed. [e26] When terminating, ERCOT must maintain a stable frequency when restoring load, and loads are restored only when specifically authorized by ERCOT. [e24][e25]

Scarcity pricing: the IMM says the ORDC reflects the relationship between operating reserves and the probability of load shed, and that the ORDC adder was discontinued in December 2025 with RTC. [e14][e15] In the Protocols the aggregate ORDC curve is fitted as (1 minus a normal cumulative probability at the reserve level less 3,000 MW) times VOLL. [e36]

## Key facts

- Directing firm load shed in 100 MW blocks is one of the measures ERCOT may take at EEA Level 3. [e16][e1]
- ERCOT sets each utility's required MW reduction by its share of historic peak demand; utilities choose how to do it. [e3]
- ERCOT must post within one day an operations message on any load curtailment due to a transmission problem. [e6]
- Peak controlled outage in February 2021: 20,000 MW, the largest of four events listed by ERCOT. [e11][e7]
- At least 25 percent of ERCOT load is reserved for automatic load shedding. [e10][e17]
- SCADA-controlled load shed must be completed within 30 minutes of the instruction, non-SCADA within one hour. [e38]
- Standard UFLS stages run from 59.3 Hz (5% of TO load) to 58.5 Hz (25%). [e18]

## Say it like this

Load shed is ERCOT's last-resort tool: when reserves run too low it orders utilities to cut a set number of megawatts, and the utilities decide whose power to turn off. Firm load shed is among the EEA Level 3 measures, and ERCOT's overview calls controlled outages a last resort. [e16][e1][e2][e3]

## Common confusion

Load shed is not the same as an EEA: the Protocols list directing TOs to shed firm Load among the measures ERCOT may take upon declaring EEA Level 3. [e16][e1] "Controlled outages", "rotating outages" and "load shed" are used for the same thing in these sources. [e2][e8] Manual firm load shed ordered by ERCOT is also not the automatic under-frequency load shed that relays perform at set frequencies. [e1][e18]

## Questions

### Who decides which customers lose power?

ERCOT sets the megawatts each utility must reduce, based on historic peak demand share, and each utility decides how to do it in its own area. [e3]

### Why was rotation difficult in February 2021?

The combined size and duration of the shed made it hard to rotate, so operators had to use circuits normally reserved for under-frequency load shed, while ERCOT also has to keep at least 25 percent of load reserved for automatic shed. [e9][e10]

### How much was shed in 2021?

ERCOT shed 20,000 MW at the worst point; the FERC and NERC report puts the combined manual firm load shed across the affected regions at 23,418 MW. [e7][e13] ERCOT's own overview lists it as the largest of four controlled-outage events. [e11]

### What if frequency keeps falling after manual shed?

Automatic UFLS stages trip load from 59.3 Hz down to 58.5 Hz, reaching at least 25% of TO load. [e18] If all designated manual-shed load has been shed, TOs may also use load armed for the lower UFLS stages even if it takes UFLS load below the 25% obligation. [e20]

### Why do TOs avoid overlapping manual-shed and UFLS circuits?

The Operating Guides require TOs to minimize that overlap, and FERC and NERC found in 2021 that using UFLS circuits for manual shed made them unavailable if frequency dropped and UFLS was needed. [e23][e9]

### Why do hot and cold events use different tables?

The obligations are computed from summer and winter peak demand, and ERCOT chooses the table by weather condition and keeps it for the whole event. [e21][e22]

## Scenarios

### Frequency is falling and PRC cannot be held above 1,500 MW. What does ERCOT do?

- Upon declaring EEA Level 3, ERCOT may direct all TOs to shed firm load in 100 MW blocks to hold 59.91 Hz and recover 1,500 MW of PRC. [e16][e1]
- Utilities carry out the shed using their local plans, using under-frequency relay load only within their UFLS obligations. [e3][e4]

## Open items

- The actual summer and winter Load shed obligation table percentages by TO are posted on the ERCOT website and are not in the saved sources.
- The definition of critical loads in 16 TAC 25.52 is split by a page break in the saved text and was not quoted in full; the NOG critical-load restoration list was not quoted.
- The 2021 shed quantities differ by source and basis: 20,000 MW (ERCOT, at the worst point) versus 23,418 MW (combined across regions in the FERC and NERC report). Both are kept with their basis.
- Settlement of load shed hours (prices during shed beyond the SCED LMP statement) and the VOLL value in force are not covered.
- Whether the PUCT's rotating-outage rules beyond 25.52 and 25.53 add requirements is not covered.
