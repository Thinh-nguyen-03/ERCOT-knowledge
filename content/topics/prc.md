---
id: prc
name: PRC (Physical Responsive Capability)
aliases: [PRC, Physical Responsive Capability, physical responsive capability, operating reserves]
kind: metric
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: eea
    type: determines
    note: PRC and system frequency determine the Emergency Notice and EEA level. [e5]
  - to: operating-notices
    type: determines
    note: A Watch can be issued for PRC below 3,000 MW. [e6]
  - to: ordc
    type: related
    note: See the ORDC topic for how reserve levels are turned into price adders.
  - to: rrs
    type: related
    note: PRC includes RRS-type frequency-responsive capability; a minimum PFR-based RRS quantity is set in Section 3.16. [e8]
  - to: energy-storage-resource
    type: related
    note: ESR capacity capable of primary frequency response counts toward PRC. [e3]
  - to: load-shed
    type: related
    note: At EEA Level 3 ERCOT directs firm load shed to recover 1,500 MW of PRC. [e7]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Physical Responsive Capability (PRC)"
    quote: "A representation of the total amount of frequency responsive Resource capability On-Line in Real-Time."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC formula"
    quote: "PRC = PRC₁ + PRC₂ + PRC₃+ PRC₄ + PRC₅ + PRC₆ + PRC₇ + PRC₈"
  - id: e3
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC variable table"
    quote: "ESR capacity capable of providing Primary Frequency Response"
  - id: e4
    source: np-06
    locator: "Section 6.5.7.5, paragraph (4)"
    quote: "(4) ERCOT shall display on the ERCOT website and update every ten seconds a rolling view of the ERCOT-wide PRC, as defined in paragraph (1)(p) above, for the current Operating Day."
  - id: e5
    source: np-06
    locator: "Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (1)(f)"
    quote: "(f) ERCOT shall use the PRC and system frequency to determine the appropriate Emergency Notice and EEA levels."
  - id: e6
    source: np-06
    locator: "Section 6.5.9.4.1, paragraph (3)"
    quote: "(3) When a Watch is issued for PRC below 3,000 MW and ERCOT expects system conditions to deteriorate to the extent that an EEA Level 2 or 3 may be experienced, ERCOT shall evaluate constraints active in SCED and determine which constraints have the potential to limit generation output."
  - id: e7
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (3)(b)"
    quote: "(b) Direct all TOs to shed firm Load, in 100 MW blocks, distributed as documented in the Operating Guides in order to maintain a steady state system frequency at a minimum of 59.91 Hz and to recover 1,500 MW of PRC within 30 minutes."
  - id: e8
    source: np-03
    locator: "Section 3.16, paragraph (2)(c)"
    quote: "(c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW."
  - id: e9
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (1)"
    quote: "(1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:"
  - id: e10
    source: np-06
    locator: "Section 6.5.7.5, paragraphs (2)-(3), Reserve Discount Factors"
    quote: "(2) The Load Resource Reserve Discount Factors (RDFs) for CLRs (LRDF_1 and LRDF_2) shall be subject to review and approval by TAC. (3) The RDFs used in the PRC calculation shall be posted to the ERCOT website no later than three Business Days after approval."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.D, AS Methodology, bullet on one-in-ten standard"
    quote: "Setting operating reserve targets to meet a one-in-ten standard for the probability of entering a “Watch,” defined as reserves dropping below 3,000 MW, rather than for the probability of firm load shed, defined as reserves dropping below 1,500 MW."
---

## Definition

Physical Responsive Capability (PRC) is a representation of the total amount of frequency responsive resource capability on-line in Real-Time. [e1]

## How it works

ERCOT computes an ERCOT-wide PRC as the sum of eight components, one of which is ESR capacity capable of providing primary frequency response. [e2][e3] Reserve Discount Factors are used in the PRC calculation, and the Load Resource factors for CLRs are subject to TAC review and approval. [e10]

ERCOT displays the rolling ERCOT-wide PRC on its website and updates it every ten seconds for the current Operating Day. [e4]

## ERCOT context

PRC is the measure the Protocols use to decide when conditions are an emergency: ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA level. [e5] A Watch is tied to PRC below 3,000 MW, EEA Level 1 is declared when PRC falls below 2,500 MW and is not projected to recover within 30 minutes, and at EEA Level 3 firm load shed is directed to recover 1,500 MW of PRC. [e6][e9][e7] The IMM uses the same lines when it speaks of "reserves": a Watch is reserves below 3,000 MW and firm load shed risk is reserves below 1,500 MW. [e11]

## Key facts

- PRC is the total frequency-responsive resource capability on-line in Real-Time. [e1]
- The ERCOT-wide PRC is a sum of eight components, including ESR capacity capable of providing primary frequency response. [e2][e3]
- ERCOT posts a rolling PRC view updated every ten seconds. [e4]
- EEA Level 1: PRC below 2,500 MW and not projected to recover within 30 minutes. [e9]
- Watch for PRC below 3,000 MW (Section 6.5.9.4.1); load shed at Level 3 aims to recover 1,500 MW of PRC. [e6][e7]

## Say it like this

PRC is ERCOT's live count of how much frequency-responsive capacity is actually on line to catch a drop in supply. The emergency steps, from a Watch at 3,000 MW to load shed around 1,500 MW, are keyed to that number. [e1][e6][e7]

## Common confusion

PRC is not the same as total reserve capacity or ancillary service awards. It measures what is physically on line and frequency responsive, with reserve discount factors applied in the calculation, so it can differ from awarded MW. [e1][e10] ERCOT's public EEA overview speaks of "operating reserves" in the same threshold positions; the Protocols write them as PRC. [e9]

## Questions

### What thresholds are keyed to PRC?

A Watch can be issued for PRC below 3,000 MW, EEA Level 1 is declared for PRC below 2,500 MW and not projected to recover within 30 minutes, and Level 3 load shed aims to recover 1,500 MW of PRC. [e6][e9][e7]

### Where can you see PRC?

On the ERCOT website, as a rolling ERCOT-wide view updated every ten seconds. [e4]

### Does a battery count toward PRC?

ESR capacity capable of providing primary frequency response is a PRC component. [e3]

## Open items

- Deeper pass: each PRC component's formula, including the 20% caps, the reserve discount factors' current values, and the ESR 45-minute state of charge limit in PRC8.
- The pending PRC9 term for DC-coupled resources (NPRR1029) is not covered.
- How PRC relates to the "operating reserves" figures ERCOT publishes on its dashboards is not covered by the saved sources.
