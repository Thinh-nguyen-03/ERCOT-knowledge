---
id: prc
name: PRC (Physical Responsive Capability)
aliases: [PRC, Physical Responsive Capability, physical responsive capability, operating reserves]
kind: metric
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: eea
    type: determines
    note: PRC and system frequency determine the Emergency Notice and EEA level. [e5]
  - to: operating-notices
    type: determines
    note: A Watch can be issued for PRC below 3,000 MW. [e6]
  - to: ordc
    type: related
    note: See the ORDC topic for how reserve levels were turned into price adders before the ORDC adder was replaced by a set of ASDCs. [e12]
  - to: rrs
    type: related
    note: Section 3.16 sets a minimum capacity for RRS provided using Primary Frequency Response. [e8]
  - to: energy-storage-resource
    type: related
    note: ESR capacity capable of primary frequency response counts toward PRC. [e3]
  - to: load-shed
    type: related
    note: At EEA Level 3 ERCOT directs firm load shed to recover 1,500 MW of PRC. [e7]
  - to: asdc
    type: related
    note: The ASDC disaggregation sets a Minimum Contingency Level of 3,000 MW of reserves, the same number as the Watch threshold. [e26]
  - to: mora-report
    type: related
    note: The MORA uses CAFOR thresholds of 2,500 and 1,500 MW as proxies for the PRC thresholds. [e27]
  - to: ancillary-services
    type: related
    note: The AS Methodology sizes ECRS and Non-Spin against a 1-in-10 chance of reserves falling below the Watch threshold of PRC = 3,000 MW. [e24]
  - to: ecrs
    type: related
    note: At EEA Level 2, ERCOT instructs QSEs to deploy ECRS and RRS from Load Resources, and RRS and ECRS from ONSC Generation Resources can be deployed manually at Level 1. [e21][e19]
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
  - id: e12
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs."
  - id: e13
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1), lead-in"
    quote: >-
      Every ten seconds, ERCOT shall calculate the following and provide Real-Time summaries to ERCOT Operators and all Market Participants using ICCP and postings on the ERCOT website showing the Real-Time total system amount of:
  - id: e14
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC1"
    quote: >-
      PRC₁ = Min(Max((RDF*FRCHL – FRCO)_(i) , 0.0) , 0.2*RDF*FRCHL_(i)), where the included On-Line Generation Resources do not include WGRs, nuclear Generation Resources, or Generation Resources with an output less than or equal to 95% of telemetered LSL or with a telemetered status of ONTEST, ONHOLD, STARTUP, or SHUTDOWN.
  - id: e15
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC2"
    quote: >-
      PRC₂ = Min(Max((RDF_(W)*HSL – Actual Net Telemetered Output)_(i) , 0.0) , 0.2*RDF_(W)*HSL_(i)), where the included On-Line WGRs only include WGRs that are Primary Frequency Response-capable.
  - id: e16
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC5"
    quote: >-
      PRC₅ = Min(Max((LRDF_1*Actual Net Telemetered Consumption – LPC)_(i), 0.0), (0.2 * LRDF_1 * Actual Net Telemetered Consumption)) from all CLRs active in SCED with an Ancillary Service Resource award
  - id: e17
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC7"
    quote: >-
      PRC₇ = (Capacity from Resources capable of providing FFR)_(i)
  - id: e18
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC8"
    quote: >-
      PRC₈ = Min(X% of MDRR, HSL-Net MW, the capacity that can be sustained for 45 minutes per the State of Charge Excludes ESR capacity used to provide FFR.
  - id: e19
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(a), EEA Level 1 steps"
    quote: >-
      (a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW:
  - id: e20
    source: np-06
    locator: "Section 6.5.9.4.1, paragraph (4)"
    quote: >-
      (4) When a Watch is issued for PRC below 3,000 MW, QSEs shall suspend any ongoing ERCOT-required Resource performance testing.
  - id: e21
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2), EEA Level 2"
    quote: >-
      (2) ERCOT may declare an EEA Level 2 when the clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2:
  - id: e22
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3), EEA Level 3 lead-in"
    quote: >-
      (3) ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes.
  - id: e23
    source: np-06
    locator: "Section 6.5.9.4, paragraph (10)"
    quote: >-
      After PRC is restored to at least 3,000 MW or the Emergency Condition has ended, whichever is later, and ERCOT has determined that system conditions have improved such that the chance of re-entering into an EEA Level 2 or 3 is low, ERCOT shall restore control to the post-contingency flow to within the Emergency Rating for these constraints that utilized the 15-Minute Rating in SCED.
  - id: e24
    source: ercot-as-methodology-2026
    locator: "Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026)"
    quote: >-
      The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load – wind – solar) forecast and conventional resource availability.
  - id: e25
    source: ercot-as-methodology-2027
    locator: "Board presentation (September 2026), The Target Reserve Level (Watch vs. EEA1), Bottom line"
    quote: >-
      Of the three parameters, the target reserve level (ZZ) is the one ERCOT is proposing to change for 2027 — moving from a criterion of avoiding a Watch (3,000 MW) toward avoiding EEA1 (2,500 MW) based on feedback during last year’s approval.
  - id: e26
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), variable table (MCL)"
    quote: >-
      Minimum Contingency Level – the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW.
  - id: e27
    source: ercot-mora-2027-01
    locator: "Methodology notes, CAFOR reserve thresholds (January 2027 MORA)"
    quote: >-
      The MORA uses CAFOR reserve thresholds of 2,500 and 1,500 MW to indicate, respectively, the risk that an Energy Emergency Alert and controlled outages may be triggered during the time of the forecasted monthly peak load day. These threshold levels are intended to be proxies to the 2,500 and 1,500 MW Physical Responsive Capability (PRC) thresholds. While PRC is a real-time capability measure for Resources that can quickly respond to system disturbance, ERCOT believes that the 2,500 and 1,500 MW CAFOR thresholds are appropriate indicators for the risk of Emergency Conditions given the uncertainties in predicting system conditions months in advance.
  - id: e28
    source: np-02
    locator: "Section 2.1, definition of Frequency Responsive Capacity (FRC)"
    quote: >-
      The telemetered portion of the total MW output of a Generation Resource or Energy Storage Resource (ESR) that represents the fraction of the capacity that is capable of providing Primary Frequency Response.
  - id: e29
    source: np-02
    locator: "Section 2.1, definition of Maximum Droop Response Range (MDRR)"
    quote: >-
      The MDRR for a Generation Resource is its High Sustained Limit (HSL), for a Controllable Load Resource (CLR) is its Maximum Power Consumption (MPC), and for an Energy Storage Resource (ESR) is the difference between its HSL and Low Sustained Limit (LSL).
  - id: e30
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), variable table (X)"
    quote: >-
      Percent threshold based on the Governor droop setting of ESRs
  - id: e31
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), pending box [NPRR1029: Insert the formula PRC9 ...]"
    quote: >-
      PRC₉ = Min(X% of MDRR, HSL-Net MW, the sum of the MW headroom available from the intermittent renewable generation component and the MW capacity that can be sustained for 45 minutes per the ESS State of Charge)
  - id: e32
    source: imm-som-tac-2026-07
    locator: "Slide 9, ERCOT has argued that PRC is an inappropriate metric for assessing reliability"
    quote: >-
      PRC includes capacity from out-of-market reliability actions
  - id: e33
    source: imm-som-tac-2026-07
    locator: "Slide 9, ERCOT has argued that PRC is an inappropriate metric for assessing reliability"
    quote: >-
      PRC measures the instantaneous volume of reserves available to the grid in the event of a contingency.
  - id: e34
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), PRC4"
    quote: >-
      PRC₄ = (Min(Max((Actual Net Telemetered Consumption – LPC), 0.0), ECRS and RRS Ancillary Service Resource award * 1.5) from all Load Resources controlled by high-set under-frequency relays with an ECRS and/or RRS Ancillary Service Resource award)_(i)
  - id: e35
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), variable table (RDF)"
    quote: "The currently approved Reserve Discount Factor"
  - id: e36
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), variable table (LRDF_1)"
    quote: "The currently approved Load Resource Reserve Discount Factor for CLRs awarded an Ancillary Service Resource award"
  - id: e37
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), variable table (FRCHL)"
    quote: "Telemetered High limit of the FRC for the Resource"
  - id: e38
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(p), variable table (FRCO)"
    quote: "Telemetered output of FRC portion of the Resource"
---

## Definition

Physical Responsive Capability (PRC) is a representation of the total amount of frequency responsive resource capability on-line in Real-Time. [e1]

## How it works

Every ten seconds ERCOT calculates real-time system totals for ancillary service capability and awards, and the ERCOT-wide PRC is one of the items in that list. [e13] PRC is the sum of eight components, one of which is ESR capacity capable of providing primary frequency response. [e2][e3] Reserve Discount Factors are used in the calculation, and the Load Resource factors for CLRs are subject to TAC review and approval. [e10]

ERCOT displays the rolling ERCOT-wide PRC on its website and updates it every ten seconds for the current Operating Day. [e4]

## Formula

The Protocols give the PRC formula in Section 6.5.7.5, paragraph (1)(p). The text below describes each component from the variable list and the quoted formulas; in these formulas RDF is the currently approved Reserve Discount Factor, RDF_W the one for wind, LRDF_1 and LRDF_2 the Load Resource factors for CLRs with and without an ancillary service award, FRCHL the telemetered high limit of the frequency responsive capacity (FRC), and FRCO its telemetered output. FRC is the telemetered portion of a Generation Resource's or ESR's output that represents capacity capable of providing Primary Frequency Response. [e2][e14][e28][e35][e36][e37][e38]

- PRC1 is on-line generation: for each included resource, the discounted FRC high limit minus the output of the FRC portion, floored at zero and capped at 20% of the discounted FRC high limit. The included resources exclude WGRs, nuclear units, units with output at or below 95% of telemetered LSL, and units with a telemetered status of ONTEST, ONHOLD, STARTUP or SHUTDOWN. [e14]
- PRC2 is on-line wind: the discounted HSL minus actual net output, floored at zero and capped at 20% of the discounted HSL, counting only WGRs that are Primary Frequency Response-capable. [e15]
- PRC4 is Load Resources controlled by high-set under-frequency relays with an ECRS and/or RRS award: consumption above the low power consumption (LPC), capped at 1.5 times the award. [e34]
- PRC5 is CLRs active in SCED with an ancillary service award: discounted consumption minus LPC, floored at zero and capped at 20% of the discounted consumption. [e16]
- PRC7 is capacity from resources capable of Fast Frequency Response (FFR). [e17]
- PRC8 is ESR capacity: the minimum of X% of the Maximum Droop Response Range (MDRR), the HSL-net MW, and the capacity that can be sustained for 45 minutes per the State of Charge, excluding ESR capacity used to provide FFR. [e18] X is a percentage threshold based on the Governor droop setting of ESRs. [e30] For an ESR the MDRR is the difference between its HSL and LSL. [e29]
- Pending, not in force: NPRR1029 would add a PRC9 term for DC-coupled resources, again using a 45-minute State of Charge limit. [e31]

## ERCOT context

PRC is the measure the Protocols use to decide when conditions are an emergency: ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA level. [e5] A Watch is tied to PRC below 3,000 MW, EEA Level 1 is declared when PRC falls below 2,500 MW and is not projected to recover within 30 minutes, and at EEA Level 3 firm load shed is directed to recover 1,500 MW of PRC. [e6][e9][e7] The IMM uses the same lines when it speaks of "reserves": a Watch is reserves below 3,000 MW and firm load shed risk is reserves below 1,500 MW. [e11]

The full ladder is: Watch below 3,000 MW (when a Watch is issued for PRC below 3,000 MW, QSEs suspend ongoing ERCOT-required Resource performance testing); Level 1 below 2,500 MW, with steps taken to keep PRC above 2,000 MW; Level 2 below 2,000 MW and not projected to recover within 30 minutes; and Level 3 when PRC cannot be maintained above 1,500 MW. [e20][e9][e19][e21][e22] Frequency can trigger levels too: Level 2 may be declared at clock-minute average frequency below 59.91 Hz for 15 consecutive minutes, and Level 3 at the same frequency for 20 minutes or at steady-state frequency below 59.8 Hz. [e21][e22]

During EEA Level 2 or 3, for constraints for which ERCOT used the 15-Minute Rating in SCED, ERCOT restores control of post-contingency flow to within the Emergency Rating only after PRC is back to at least 3,000 MW or the Emergency Condition has ended, whichever is later, and ERCOT has determined the chance of re-entering Level 2 or 3 is low. [e23]

The same numbers shape planning. ERCOT's AS Methodology effective 1 January 2026 sizes ECRS and Non-Spin so that there is a 1 in 10-year probability of reserves dropping below the sum of procured Reg-Up and RRS or the Watch threshold (PRC = 3,000 MW), whichever is higher. [e24] For 2027 ERCOT staff proposed moving the target reserve level from avoiding a Watch (3,000 MW) toward avoiding EEA1 (2,500 MW), as presented to the Board in September 2026. [e25] The ASDC disaggregation defines a Minimum Contingency Level of 3,000 MW. [e26] The MORA uses CAFOR thresholds of 2,500 and 1,500 MW as proxies for the PRC thresholds, because PRC is a real-time measure that is hard to forecast months ahead. [e27]

The IMM, in an August 2026 presentation to TAC, describes PRC as measuring the instantaneous volume of reserves available to the grid in the event of a contingency, and lists arguments ERCOT has made for why PRC is not a sufficient measure of reliability, one of which is that PRC includes capacity from out-of-market reliability actions. [e33][e32] These are ERCOT's arguments as summarised by the IMM, not the IMM's own finding.

## Key facts

- PRC is the total frequency-responsive resource capability on-line in Real-Time. [e1]
- The ERCOT-wide PRC is a sum of eight components, including ESR capacity capable of providing primary frequency response. [e2][e3]
- ERCOT posts a rolling PRC view updated every ten seconds. [e4]
- EEA Level 1: PRC below 2,500 MW and not projected to recover within 30 minutes. [e9]
- EEA Level 2: PRC below 2,000 MW and not projected to recover within 30 minutes. [e21]
- EEA Level 3: PRC cannot be maintained above 1,500 MW. [e22]
- Watch for PRC below 3,000 MW (Section 6.5.9.4.1); load shed at Level 3 aims to recover 1,500 MW of PRC. [e6][e7]
- PRC8 counts ESR capacity only to the extent it can be sustained for 45 minutes per State of Charge. [e18]
- PRC1, PRC2 and PRC5 are each capped at 20% of the discounted capability. [e14][e15][e16]

## Say it like this

PRC is ERCOT's measure of the total frequency-responsive Resource capability on-line in Real-Time. [e1] The emergency steps, from a Watch at 3,000 MW through EEA Levels at 2,500, 2,000 and 1,500 MW, are keyed to that number. [e1][e6][e9][e21][e22]

## Common confusion

Do not read PRC as a plain count of total capacity. The Protocols define it as frequency responsive Resource capability on-line in Real-Time, discount factors apply and caps limit several components. [e1][e10][e14] PRC is also not the same as the MORA's CAFOR, which is a forecast proxy for the same thresholds. [e27]

## Questions

### What thresholds are keyed to PRC?

A Watch can be issued for PRC below 3,000 MW, EEA Level 1 is declared for PRC below 2,500 MW and not projected to recover within 30 minutes, Level 2 below 2,000 MW on the same test, and Level 3 when PRC cannot be maintained above 1,500 MW, where firm load shed aims to recover 1,500 MW of PRC. [e6][e9][e21][e22][e7]

### Where can you see PRC?

On the ERCOT website, as a rolling ERCOT-wide view updated every ten seconds. [e4]

### Does a battery count toward PRC?

ESR capacity capable of providing primary frequency response is a PRC component, limited by the lesser of X% of its MDRR, its HSL-net MW and the capacity that can be sustained for 45 minutes per State of Charge. [e3][e18]

### Why is a wind farm's contribution to PRC capped?

(Guidance on a sourced formula.) The PRC2 term floors the discounted headroom at zero and caps it at 20% of the discounted HSL, and counts only wind units capable of Primary Frequency Response, so wind adds only a limited slice of its output headroom. [e15]

### What if PRC is falling but frequency is normal?

Levels are set by PRC, not only by frequency: ERCOT declares Level 1 at PRC below 2,500 MW without recovery in 30 minutes, and Level 3 when PRC cannot be maintained above 1,500 MW, regardless of the 59.91 Hz criteria, which are alternative triggers. [e9][e22]

## Open items

- The values of the Reserve Discount Factors (RDF, RDF_W, LRDF_1, LRDF_2) are posted on the ERCOT website after TAC approval and are not in the saved sources. [e10]
- The value of X in PRC8 and the PRC3 (synchronous condenser) and PRC6 (CLRs without an award) terms are not described above beyond the variable list; PRC6 mirrors PRC5 for CLRs without an award per the variable table.
- NPRR1029 (PRC9, DC-coupled resources) is pending and is described only from the Protocol pending box.
- How the PRC figure on ERCOT dashboards relates to published "operating reserves" figures is not covered by the saved sources.
- Whether the 2027 AS Methodology change to a 2,500 MW target (proposed September 2026) was approved by the PUCT is not in the saved sources.
