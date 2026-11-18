---
id: eea
name: EEA (Energy Emergency Alert) Levels
aliases: [EEA, EEA1, EEA2, EEA3, Energy Emergency Alert, emergency operations]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
links:
  - to: prc
    type: measures
    note: PRC, the frequency-responsive capability on line, is one of the triggers for EEA Levels 1 to 3. [e3][e5][e6]
  - to: load-shed
    type: causes
    note: EEA Level 3 is where ERCOT directs transmission owners to shed firm load. [e7]
  - to: ordc
    type: related
    note: See the ORDC topic for how reserve shortage is priced; this topic covers the EEA procedure.
  - to: offer-cap
    type: related
    note: The PUCT scarcity pricing rule defines emergency operations as ERCOT entering any EEA level. [e11]
  - to: rrs
    type: related
    note: Load Resources providing RRS are deployed during EEA Level 2. [e2]
  - to: ecrs
    type: related
    note: Load Resources providing ECRS can be deployed at EEA Level 2. [e2]
  - to: winter-storm-uri
    type: example-of
    note: February 2021 is the largest of the controlled-outage events in ERCOT's overview list. [e9]
  - to: nodal-protocols
    type: part-of
    note: The EEA levels are set out in Section 6.5.9.4.2 of the Nodal Protocols. [e3]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Energy Emergency Alert (EEA)"
    quote: "An orderly, predetermined procedure for maximizing use of available Resources and, only if necessary, curtailing load during an Emergency Condition while providing for the maximum possible continuity of service and maintaining the integrity of the ERCOT System."
  - id: e2
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)(iii)"
    quote: "(iii) Instruct QSEs to deploy ECRS or RRS (controlled by high-set under-frequency relays) supplied from Load Resources."
  - id: e3
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (1)"
    quote: "(1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:"
  - id: e4
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(a)(ii)-(iv)"
    quote: "(ii) Use available DC Tie import capacity that is not already being used; (iii) Issue a Dispatch Instruction for Resources to remain On-Line which, before start of emergency, were scheduled to come Off-Line; (iv) Instruct QSEs to deploy undeployed ERS-10 and ERS-30;"
  - id: e5
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)"
    quote: "(2) ERCOT may declare an EEA Level 2 when the clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2:"
  - id: e6
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)"
    quote: "(3) ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes."
  - id: e7
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(b)"
    quote: "(b) Direct all TOs to shed firm Load, in 100 MW blocks, distributed as documented in the Operating Guides in order to maintain a steady state system frequency at a minimum of 59.91 Hz and to recover 1,500 MW of PRC within 30 minutes."
  - id: e8
    source: np-06
    locator: "Section 6.5.9.4, paragraph (7)"
    quote: "(7) Some of the EEA steps are not applicable if transmission security violations exist. There may be insufficient time to implement all EEA levels in sequence, however, to the extent practicable, ERCOT shall use Ancillary Service capabilities of Resources in the market to maintain or restore reliability."
  - id: e9
    source: ercot-eea-overview
    locator: "Controlled outages box, history list"
    quote: "December 22, 1989: 500 MW April 17, 2006: 1,000 MW February 2, 2011: 4,000 MW February 15-18, 2021: 20,000 MW"
  - id: e10
    source: np-06
    locator: "Section 6.5.9.4.3, Restoration of Market Operations, paragraph (1)"
    quote: "(1) ERCOT shall continue the EEA until sufficient offers are received and deployed by ERCOT to eliminate the conditions requiring the EEA and normal SCED operations are restored. After restoring RRS, ERCOT shall restore curtailed DC Tie Load. Intermittent solutions of SCED do not set new LMPs until ERCOT declares that the EEA is no longer needed."
  - id: e11
    source: puct-25-509
    locator: "16 TAC 25.509(a)(1)"
    quote: "Emergency operations -- ERCOT entering into any level of Energy Emergency Alert."
  - id: e12
    source: ercot-eea-overview
    locator: "Introduction"
    quote: "If operating reserves continue to drop, ERCOT begins emergency operations using three levels of Energy Emergency Alerts (EEAs). These levels provide access to resources only available during emergency conditions to protect the reliability of the electric system. ERCOT currently has about 2,500 MW of additional capacity available when it enters emergency conditions."
  - id: e13
    source: ercot-eea-overview
    locator: "Controlled outages box"
    quote: "Each utility is responsible for deciding how to decrease demand in their respective service area(s). ERCOT provides an amount, in megawatts, by which each utility is required to reduce demand, based on their percentage of historic peak demand."
  - id: e14
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(b)(ii)"
    quote: "(ii) Ensure that each of its ESRs suspends charging until the EEA is recalled, except under the following circumstances: (A) The ESR has a current SCED Base Point Instruction, LFC Dispatch Instruction, or manual Dispatch Instruction to charge the ESR; (B) The ESR is actively providing Primary Frequency Response; or"
---

## Definition

An Energy Emergency Alert is the orderly, predetermined ERCOT procedure for maximizing the use of available resources and, only if necessary, curtailing load during an Emergency Condition, while keeping service as continuous as possible and protecting the integrity of the ERCOT System. [e1] There are three levels. [e12]

## How it works

The Protocols tie each level to physical responsive capability (PRC) and, for Levels 2 and 3, also to system frequency. ERCOT declares Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the Level 1 actions. [e3] It declares Level 2 when PRC falls below 2,000 MW on the same test, and may declare it when clock-minute average frequency stays below 59.91 Hz for 15 consecutive minutes. [e5] It declares Level 3 when PRC cannot be maintained above 1,500 MW or when clock-minute average frequency is below 59.91 Hz for 25 consecutive minutes, and may declare it at 20 minutes or when steady-state frequency falls below 59.8 Hz. [e6]

The actions escalate. Level 1 steps include using unused DC Tie import capacity, directing resources scheduled to go offline to stay on, and deploying undeployed ERS-10 and ERS-30. [e4] Each ESR must also suspend charging until the EEA is recalled, with exceptions such as a current instruction to charge or actively providing Primary Frequency Response. [e14] Level 2 adds instructing QSEs to deploy ECRS or RRS supplied by Load Resources. [e2] Level 3 adds directing transmission owners to shed firm load in 100 MW blocks to hold frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes. [e7]

Levels do not always happen in order: some steps do not apply when there are transmission security violations, and there may be too little time to implement every level in sequence. [e8] ERCOT keeps the EEA in place until enough offers are received and deployed to remove the conditions and normal SCED operation returns; intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA no longer needed. [e10]

## ERCOT context

For load shed, ERCOT gives each utility a megawatt reduction amount based on its percentage of historic peak demand, and each utility decides how to meet it. [e13] ERCOT's own overview lists four controlled-outage events: 500 MW in December 1989, 1,000 MW in April 2006, 4,000 MW in February 2011 and 20,000 MW in February 2021. [e9] The PUCT's scarcity pricing rule defines "emergency operations" as ERCOT entering any level of EEA, [e11]

## Key facts

- EEA Level 1 trigger: PRC below 2,500 MW and not projected to recover above 2,500 MW within 30 minutes. [e3]
- EEA Level 2 trigger: PRC below 2,000 MW on the same 30-minute test, or frequency below 59.91 Hz for 15 consecutive minutes. [e5]
- EEA Level 3 trigger: PRC cannot be held above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes (may declare at 20 minutes, or steady-state frequency below 59.8 Hz). [e6]
- Level 3 load shed is directed to transmission owners in 100 MW blocks. [e7]
- ERCOT says it has about 2,500 MW of additional capacity available when it enters emergency conditions. [e12]
- The 2021 controlled outage reached 20,000 MW; the 2011 event reached 4,000 MW. [e9]

## Say it like this

An EEA is ERCOT's three-step emergency ladder, keyed to how much responsive capacity is left on the system and to frequency. Level 3 is the one where firm load is shed, and the protocol says the levels do not have to be reached in sequence. [e6][e8]

## Common confusion

An EEA is not the same as load shed: Levels 1 and 2 use extra supply and demand-side tools, and firm load shed is a Level 3 measure. [e7] The Protocols also include "may declare" frequency paths at 15 minutes (Level 2) and 20 minutes (Level 3), alongside the PRC tests. [e5][e6]

## Questions

### What triggers each EEA level?

Level 1 is PRC below 2,500 MW and not expected to recover within 30 minutes; Level 2 is PRC below 2,000 MW on the same test, or frequency below 59.91 Hz for 15 minutes; Level 3 is PRC that cannot be kept above 1,500 MW, or frequency below 59.91 Hz for 25 minutes. [e3][e5][e6]

### What does ERCOT do at each level?

At Level 1 it uses spare DC Tie imports, keeps resources on-line that were due to go offline, and deploys ERS, and ESRs suspend charging. [e4][e14] Level 2 adds Load Resource deployment of ECRS and RRS. [e2] Level 3 adds firm load shed in 100 MW blocks. [e7]

### Can ERCOT skip levels?

Yes. The Protocols say there may be insufficient time to implement every level in sequence, and some steps are not applicable if transmission security violations exist. [e8]

### What happens to prices during an EEA?

Intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA is no longer needed. [e10] For the separate cap-related effects, see the offer cap topic. [e11]

## Open items

- ERCOT's public overview gives different wording for the Level 3 frequency trigger (below 59.8 Hz for any period) than the Protocols' 59.91 Hz for 25 consecutive minutes; the Protocols' text is used above and the overview was not quoted for thresholds.
- No source in the saved set gives a complete list of EEA declarations since 2021, so none is stated here.
- MW capacity estimates for each tool (imports, switchable generation, Load Resources, voltage reduction) appear in ERCOT's overview as planning estimates but were not quoted because the table is split across columns.
- The ORDC-to-EEA relationship (reserve price adders before an EEA) was not sourced in this topic; see the ORDC topic.
