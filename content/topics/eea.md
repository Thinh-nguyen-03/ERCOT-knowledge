---
id: eea
name: EEA (Energy Emergency Alert) Levels
aliases: [EEA, EEA1, EEA2, EEA3, Energy Emergency Alert, emergency operations]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, retail]
depth: deep
as_of: 2026-11-21
links:
  - to: prc
    type: measures
    note: PRC, the frequency-responsive capability on line, is one of the triggers for EEA Levels 1 to 3. [e3][e5][e6]
  - to: load-shed
    type: causes
    note: EEA Level 3 is where ERCOT directs transmission owners to shed firm load. [e7]
  - to: ordc
    type: related
    note: See the ORDC topic for how reserve shortage was priced before RTC retired the ORDC adder; this topic covers the EEA procedure.
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
  - to: energy-storage-resource
    type: related
    note: Under the Protocols each ESR must suspend charging when EEA Level 1 applies, with listed exceptions. [e14]
  - to: ers
    type: related
    note: ERCOT may deploy ERS-10 and ERS-30 when PRC is below 3,000 MW after Non-Spin, and Level 1 includes deploying undeployed ERS. [e26][e4]
  - to: operating-notices
    type: related
    note: A Watch is the third of three levels of communication issued in anticipation of an Emergency Condition, and does not place ERCOT in one. [e27][e28]
  - to: summer-2023
    type: example-of
    note: ERCOT moved from EEA2 to EEA1 on September 6, 2023 after a frequency decline. [e46]
  - to: non-spin
    type: related
    note: ERS deployment under the pre-EEA rule follows Non-Spin deployment. [e26]
  - to: ancillary-services
    type: related
    note: ERCOT's 2027 AS methodology proposal would lower the ECRS/Non-Spin convergence threshold from Watch (3,000 MW) to EEA1 (2,500 MW). [e49]
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
  - id: e15
    source: np-06
    locator: "Section 6.5.9.4, paragraph (8)"
    quote: "ERCOT may immediately implement EEA Level 2 when clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT may immediately implement EEA Level 3 any time the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz for any duration of time. ERCOT shall immediately implement EEA Level 3 any time the steady-state frequency is below 59.5 Hz for any duration."
  - id: e16
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(a)"
    quote: "(a) ERCOT shall take the following steps to maintain steady state system frequency near 60 Hz and maintain PRC above 2,000 MW:"
  - id: e17
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (1)(a)(v)"
    quote: "(v) At ERCOT’s discretion, manually deploy, through ICCP, available RRS and ECRS capacity from Generation Resources having a Resource Status of ONSC and awarded RRS or ECRS."
  - id: e18
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)"
    quote: "(a) In addition to the measures associated with EEA Level 1, ERCOT shall take the following steps to maintain steady state system frequency at a minimum of 59.91 Hz and maintain PRC above 1,500 MW:"
  - id: e19
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)(i)"
    quote: "(i) Instruct TSPs and DSPs or their agents to reduce Customer Load by using existing, in-service distribution voltage reduction measures that have not already been implemented."
  - id: e20
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)(iv)"
    quote: "(iv) Load Resources providing ECRS that are not controlled by high-set under-frequency relays shall be deployed prior to deployment of those that have armed under-frequency relays."
  - id: e21
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (2)(a)(iv)(A)"
    quote: "Instruct QSEs to deploy ECRS that is supplied from Load Resources (controlled by high-set under-frequency relays) that are only providing ECRS and then instruct QSEs to deploy Load Resources (controlled by high-set under-frequency relays) providing ECRS and RRS."
  - id: e22
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(a)"
    quote: "(a) Instruct ESRs to suspend charging. For ESRs, ERCOT shall issue the suspension instruction via a SCED Base Point instruction, or, if otherwise necessary, via a manual Dispatch Instruction."
  - id: e23
    source: np-06
    locator: "Section 6.5.9.4.2, paragraph (3)(c)"
    quote: "(c) Implement any appropriate measures associated with EEA Levels 1 and 2 that have not already been implemented."
  - id: e24
    source: np-06
    locator: "Section 6.5.9.4, paragraph (9)"
    quote: "Percentages for EEA Level 3 Load shedding will be based on the previous year’s TSP peak Loads, as reported to ERCOT, and must be reviewed by ERCOT and modified annually as required."
  - id: e25
    source: np-06
    locator: "Section 6.5.9.4.1, paragraph (1)(a)-(b)"
    quote: "(a) Provide Dispatch Instructions to QSEs for specific Resources to operate at an Emergency Base Point to maximize Resource deployment so as to increase PRC levels on other Resources; (b) Commit specific available Resources as necessary that can respond in the timeframe of the emergency. Such commitments will be settled using the HRUC process;"
  - id: e26
    source: np-06
    locator: "Section 6.5.9.4.1, paragraph (2)"
    quote: "When PRC falls below 3,000 MW and is not projected to be recovered above 3,000 MW within 30 minutes following the deployment of Non-Spin, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message."
  - id: e27
    source: np-06
    locator: "Section 6.5.9.3.3, paragraph (1)"
    quote: "A Watch is the third of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition."
  - id: e28
    source: nog-04
    locator: "Section 4.2.3, paragraph (4)"
    quote: "When a Watch is issued, it does not place ERCOT in an Emergency Condition."
  - id: e29
    source: nog-04
    locator: "Section 4.2.4, paragraph (3)"
    quote: "When an Emergency Notice is issued, ERCOT is operating in an Emergency Condition."
  - id: e30
    source: nog-04
    locator: "Section 4.5.3, paragraph (7)(a)-(b)"
    quote: "(a) Load interrupted manually by SCADA will be shed without delay upon receipt of a Load shed instruction and in a time period not to exceed 30 minutes after receipt of the Load shed instruction for each Entity’s portion of every Load shed instruction. SCADA-controlled Load shed is preferred to be utilized by the TO and/or TDSP(s) before non-SCADA-controlled Load shed when executing a Load shed instruction; (b) If sufficient amounts of SCADA-controlled Load are not available to fulfill an Entity’s manual Load shed instruction, the TO and/or TDSP(s) shall complete, if applicable, the remaining manual Load shed through non-SCADA-controlled Load shed methods without delay upon receipt of a Load shed instruction and in a time period not to exceed one hour after receipt of the Load shed instruction."
  - id: e31
    source: nog-04
    locator: "Section 4.5.3, paragraph (8)"
    quote: "Each TSP, or its designated agent, will provide ERCOT a status report of Load shed progress within 30 minutes of the time of ERCOT’s instruction or upon ERCOT’s request."
  - id: e32
    source: nog-04
    locator: "Section 4.5.3.4, paragraph (2)"
    quote: "Load shed obligation percentages for ERCOT EEA Level 3 Load shedding will be determined by calculating each TO’s Load as a percentage of the ERCOT System summer and winter peak 15 minute Demand interval."
  - id: e33
    source: nog-04
    locator: "Section 4.5.3.4, paragraph (3)"
    quote: "The summer Load shed table will be used during a hot weather Load shed event and the winter Load shed table will be used during a cold weather Load shed event. ERCOT will determine, in its sole discretion, whether an EEA event will be treated as a hot weather or cold weather Load shed event based on the weather conditions."
  - id: e34
    source: nog-04
    locator: "Section 4.5.3.5, paragraph (1)(a)-(c)"
    quote: "(a) Continue EEA until sufficient Resources are available to ERCOT to eliminate the shortfall and restore adequate reserves; (b) Restore full reserve requirements (normally 2300 MW); (c) Terminate the levels in reverse order, where practical;"
  - id: e35
    source: nog-04
    locator: "Section 4.8, paragraph (1)"
    quote: "If PRC drops below 3,000 MW, and all available Non-Spinning Reserve (Non-Spin) has been deployed, this process may be used."
  - id: e36
    source: nog-02
    locator: "Section 2.6.1, paragraph (1)"
    quote: "At least 25% of the ERCOT System Load shall be equipped at all times with provisions for automatic Under-Frequency Load Shedding (UFLS) as described in this paragraph, unless provisions specified in Section 4.5.3.3, EEA Levels, are required to meet ERCOT operating instructions for manual Load shed."
  - id: e37
    source: nog-02
    locator: "Section 2.6.1, Table 1: Standard UFLS Stages"
    quote: "59.3 Hz At least 5% of the TO Load At least six cycles but no more than 30 cycles 59.1 Hz A total of at least 10% of the TO Load At least six cycles but no more than 30 cycles 58.9 Hz A total of at least 15% of the TO Load At least six cycles but no more than 30 cycles 58.7 Hz A total of at least 20% of the TO Load At least six cycles but no more than 30 cycles 58.5 Hz A total of at least 25% of the TO Load At least six cycles but no more than 30 cycles"
  - id: e38
    source: ercot-eea-overview
    locator: "EEA levels and actions, Level 1 column (January 2026)"
    quote: "Importing available generation from neighboring electric grids: up to 1,220 MW Switchable generation that can serve multiple electric grids: up to 2,184 MW"
  - id: e39
    source: ercot-eea-overview
    locator: "EEA levels and actions, Level 2 column (January 2026)"
    quote: "Deploying operating reserves carried by Load Resources (some large industrial customers who are paid to reduce their power): up to 1,000 MW Load management programs from transmission companies: 70-300MW, depending on the season Voltage reduction by transmission companies: 1,200-1,300 MW, depending on the season"
  - id: e40
    source: ercot-eea-overview
    locator: "EEA levels and actions, footnote"
    quote: "These capacity figures are planning estimates; actual availability will vary based on resource-specific circumstances at the time of the energy emergency."
  - id: e41
    source: ercot-eea-overview
    locator: "EEA levels and actions, Level 3 column (January 2026)"
    quote: "If operating reserves drop below 1,500 MW, or the grid’s frequency level drops below 59.8 Hz for any period of time,"
  - id: e42
    source: ercot-eea2-2023-report
    locator: "Section II, Emergency Event Overview"
    quote: "On September 6, 2023, from approximately 7:10 p.m. until approximately 7:25 p.m., ERCOT observed a decline in the system frequency from 60 Hz to 59.77 Hz, which is outside the target range of 59.9 to 60.1 Hz."
  - id: e43
    source: ercot-eea2-2023-report
    locator: "Chronology, September 6, 2023"
    quote: "Advisory issued due to Physical Responsive Capability (PRC, i.e., the total amount of frequency responsive Resource capability On-Line in Real-Time) falling below 3,000 MW."
  - id: e44
    source: ercot-eea2-2023-report
    locator: "Chronology, September 6, 2023"
    quote: "7:28 p.m.: 1,593 MW of Load Resources deployed."
  - id: e45
    source: ercot-eea2-2023-report
    locator: "Section II, Emergency Event Overview"
    quote: "At 7:37 p.m., system frequency was restored to 60 Hzthrough these actions, and no additional measures, including firm load-shedding, were necessary."
  - id: e46
    source: ercot-eea2-2023-report
    locator: "Section II, Emergency Event Overview"
    quote: "At 8:27 p.m., the ERCOT System moved from EEA2 up to EEA1, and at 8:37 p.m., the ERCOT System exited EEA1 and returned to normal operations."
  - id: e47
    source: ercot-eea2-2023-report
    locator: "Section II, Emergency Event Overview"
    quote: "ERCOT had also already deployed Emergency Response Service (ERS) and requested that Transmission Operators (TOs) implement distribution voltage reduction measures, if available."
  - id: e48
    source: imm-som-2023
    locator: "Reliability Unit Commitment / manual actions discussion (OCR)"
    quote: "Reliability concerns associated with a severe violation on September 6, 2023, prompted ERCOT to curtail 1,500 MW of generation, including 1,300 MW of wind. These curtailments occurred simultaneously with rising demand and resulted in the system frequency falling below 59.91 hertz for 15 consecutive minutes"
  - id: e49
    source: ercot-as-methodology-2027
    locator: "Board item 18, summary of proposed changes"
    quote: "Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold."

---

## Definition

An Energy Emergency Alert is the orderly, predetermined ERCOT procedure for maximizing the use of available resources and, only if necessary, curtailing load during an Emergency Condition, while keeping service as continuous as possible and protecting the integrity of the ERCOT System. [e1] There are three levels. [e12]

## How it works

The Protocols tie each level to physical responsive capability (PRC) and, for Levels 2 and 3, also to system frequency. ERCOT declares Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the Level 1 actions. [e3] It declares Level 2 when PRC falls below 2,000 MW on the same test, and may declare it when clock-minute average frequency stays below 59.91 Hz for 15 consecutive minutes. [e5] It declares Level 3 when PRC cannot be maintained above 1,500 MW or when clock-minute average frequency is below 59.91 Hz for 25 consecutive minutes, and may declare it at 20 minutes or when steady-state frequency falls below 59.8 Hz. [e6] Section 6.5.9.4(8) adds that ERCOT may implement Level 3 when steady-state frequency is below 59.8 Hz for any duration and shall implement it immediately any time steady-state frequency is below 59.5 Hz for any duration. [e15]

The actions escalate. Level 1 is aimed at keeping steady-state frequency near 60 Hz and PRC above 2,000 MW. [e16] Its steps include using unused DC Tie import capacity, directing resources scheduled to go offline to stay on, and deploying undeployed ERS-10 and ERS-30. [e4] At ERCOT's discretion it may also manually deploy RRS and ECRS from Generation Resources in ONSC status through ICCP. [e17] Each ESR must also suspend charging until the EEA is recalled, with exceptions such as a current instruction to charge or actively providing Primary Frequency Response. [e14]

Level 2 adds steps to hold frequency at a minimum of 59.91 Hz and PRC above 1,500 MW. [e18] They include using distribution voltage reduction measures not already implemented, [e19] and instructing QSEs to deploy ECRS or RRS supplied from Load Resources. [e2] Load Resources providing ECRS that are not controlled by high-set under-frequency relays are deployed before those with armed relays, [e20] and ERCOT first deploys ECRS from relay-controlled Load Resources that provide only ECRS, then those providing ECRS and RRS. [e21] Level 3 adds directing transmission owners to shed firm load in 100 MW blocks to hold frequency at a minimum of 59.91 Hz and recover 1,500 MW of PRC within 30 minutes, [e7] and instructing ESRs to suspend charging, by a SCED Base Point instruction or if necessary a manual Dispatch Instruction. [e22] At Level 3 ERCOT also implements any Level 1 and 2 measures not already implemented. [e23]

Levels do not always happen in order: some steps do not apply when there are transmission security violations, and there may be too little time to implement every level in sequence. [e8] ERCOT keeps the EEA in place until enough offers are received and deployed to remove the conditions and normal SCED operation returns; intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA no longer needed. [e10] The Operating Guides add that ERCOT continues the EEA until sufficient Resources are available to eliminate the shortfall and restore adequate reserves, restores full reserve requirements (normally 2300 MW), and terminates levels in reverse order where practical. [e34]

**Before the levels.** Ahead of declaring Level 1 ERCOT may, consistent with Good Utility Practice, instruct Resources to an Emergency Base Point and commit specific Resources settled through the HRUC process. [e25] When PRC is below 3,000 MW and not projected to recover within 30 minutes after Non-Spin deployment, ERCOT may deploy contracted ERS-10 and ERS-30 via XML message. [e26] A Watch is the third of three levels of communication issued in anticipation of a possible Emergency Condition, [e27] and issuing a Watch does not place ERCOT in an Emergency Condition, whereas issuing an Emergency Notice means ERCOT is operating in one. [e28][e29] The Operating Guides' scarcity-conditions section says the manual RRS/ECRS deployment process there may be used if PRC drops below 3,000 MW and all available Non-Spin has been deployed. [e35]

**Load shed mechanics.** Load interrupted manually by SCADA must be shed without delay and within 30 minutes of the instruction; if SCADA-controlled load is insufficient, the remaining manual shed through non-SCADA methods must be completed within one hour. [e30] Each TSP reports Load shed progress within 30 minutes of the instruction or on request. [e31] Each TO's obligation percentage is its Load as a share of the ERCOT System summer and winter peak 15-minute Demand interval, [e32] and ERCOT decides in its sole discretion whether an event is hot weather (summer table) or cold weather (winter table). [e33] Percentages are based on the previous year's TSP peak Loads and reviewed annually. [e24] Separately from manual shed, at least 25% of ERCOT System Load must be equipped for automatic Under-Frequency Load Shedding; the standard stages start at 59.3 Hz with at least 5% of TO Load and reach at least 25% at 58.5 Hz. [e36][e37]

## ERCOT context

For load shed, ERCOT gives each utility a megawatt reduction amount based on its percentage of historic peak demand, and each utility decides how to meet it. [e13] ERCOT's own overview lists four controlled-outage events: 500 MW in December 1989, 1,000 MW in April 2006, 4,000 MW in February 2011 and 20,000 MW in February 2021. [e9] The PUCT's scarcity pricing rule defines "emergency operations" as ERCOT entering any level of EEA. [e11]

ERCOT's January 2026 overview gives planning estimates of the tools: imports up to 1,220 MW and switchable generation up to 2,184 MW (Level 1 column); Load Resource reserves up to 1,000 MW, transmission load management programs 70-300 MW and voltage reduction 1,200-1,300 MW depending on the season (Level 2 column). [e38][e39] It states these are planning estimates and actual availability varies with circumstances at the time. [e40] Its Level 3 column describes operating reserves below 1,500 MW or frequency below 59.8 Hz for any period of time; this matches the Protocols' 59.8 Hz steady-state path rather than the 25-minute 59.91 Hz path. [e41][e15]

ERCOT's 2027 AS methodology proposal (a Board item, September 14-15, 2026, requiring PUCT approval whose outcome is not in the saved sources) would change the ECRS/Non-Spin model's convergence criterion from a Watch (3,000 MW) threshold to an EEA1 (2,500 MW) threshold. [e49]

## Timeline

- December 22, 1989, April 17, 2006, February 2, 2011 and February 15-18, 2021: ERCOT-initiated controlled outages of 500, 1,000, 4,000 and 20,000 MW. [e9]
- September 6, 2023: system frequency fell from 60 Hz to 59.77 Hz between about 7:10 and 7:25 p.m.; ERCOT had already deployed ERS and requested distribution voltage reduction; Load Resources (1,593 MW) were deployed after the EEA2 declaration; frequency was restored by 7:37 p.m. without firm load shed; the system moved to EEA1 at 8:27 p.m. and exited at 8:37 p.m. [e42][e47][e44][e45][e46]

## Key facts

- EEA Level 1 trigger: PRC below 2,500 MW and not projected to recover above 2,500 MW within 30 minutes. [e3]
- EEA Level 2 trigger: PRC below 2,000 MW on the same 30-minute test; ERCOT may also declare it when clock-minute average frequency is below 59.91 Hz for 15 consecutive minutes. [e5]
- EEA Level 3 trigger: PRC cannot be held above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes (may declare at 20 minutes, or steady-state frequency below 59.8 Hz); steady-state below 59.5 Hz requires immediate Level 3. [e6][e15]
- Level 3 load shed is directed to transmission owners in 100 MW blocks; manual SCADA shed within 30 minutes. [e7][e30]
- EEA termination: restore full reserve requirements (normally 2300 MW) per the Operating Guides. [e34]
- ERCOT says it has about 2,500 MW of additional capacity available when it enters emergency conditions. [e12]
- The 2021 controlled outage reached 20,000 MW; the 2011 event reached 4,000 MW. [e9]

## Say it like this

An EEA is ERCOT's three-step emergency ladder, keyed to how much responsive capacity is left on the system and to frequency. Level 3 is the one where firm load is shed, and the protocol says the levels do not have to be reached in sequence. [e6][e7][e8]

## Common confusion

An EEA is not the same as load shed: Levels 1 and 2 use extra supply and demand-side tools, and firm load shed is a Level 3 measure. [e7] A Watch is also not an EEA: a Watch does not place ERCOT in an Emergency Condition. [e28] The Protocols include "may declare" frequency paths at 15 minutes (Level 2) and 20 minutes (Level 3), alongside the PRC tests. [e5][e6] Automatic UFLS is a separate protection from manually directed Level 3 shed. [e36][e7]

## Questions

### What triggers each EEA level?

Level 1 is PRC below 2,500 MW and not expected to recover within 30 minutes; Level 2 is PRC below 2,000 MW on the same test (ERCOT may also declare it at frequency below 59.91 Hz for 15 minutes); Level 3 is PRC that cannot be kept above 1,500 MW, or frequency below 59.91 Hz for 25 consecutive minutes. [e3][e5][e6]

### What does ERCOT do at each level?

At Level 1 it uses spare DC Tie imports, keeps resources on-line that were due to go offline, and deploys ERS, and ESRs suspend charging. [e4][e14] Level 2 adds voltage reduction and Load Resource deployment of ECRS and RRS. [e19][e2] Level 3 adds firm load shed in 100 MW blocks. [e7]

### Can ERCOT skip levels?

Yes. The Protocols say there may be insufficient time to implement every level in sequence, and some steps are not applicable if transmission security violations exist. [e8] Frequency alone can trigger Level 3: steady-state below 59.5 Hz requires immediate implementation. [e15]

### What happens to prices during an EEA?

Intermittent SCED solutions do not set new LMPs until ERCOT declares the EEA is no longer needed. [e10] For the separate cap-related effects, see the offer cap topic. [e11]

### Why does the order of Load Resource deployment at Level 2 matter?

The Protocol sets a sequence: Load Resources providing ECRS without armed under-frequency relays go first, then relay-controlled ECRS-only Load Resources, then those providing ECRS and RRS. [e20][e21] The Protocol text does not state the reason for the ordering.

### What if frequency falls quickly before PRC thresholds are hit?

ERCOT can use the frequency paths: Level 2 may be implemented at 59.91 Hz for 15 consecutive minutes, Level 3 at 59.91 Hz for 20 minutes or steady-state below 59.8 Hz, and Level 3 must be immediate below 59.5 Hz steady-state. [e15]

### Why did the September 6, 2023 EEA2 end without load shed?

ERCOT's report says the frequency was restored to 60 Hz by 7:37 p.m. through the deployed ancillary services, ERS, voltage reduction, load management and Load Resource deployment, so no additional measures including firm load shed were needed. [e45][e47][e44]

## Scenarios

### Frequency falls to 59.77 Hz on a hot September evening with PRC below 3,000 MW. What does the record of September 6, 2023 show?

- An Advisory was issued when PRC fell below 3,000 MW; frequency fell from 60 Hz to 59.77 Hz. [e43][e42]
- ERCOT had already deployed ERS and asked for distribution voltage reduction; Load Resources (1,593 MW) were deployed after the EEA2 declaration. [e47][e44]
- Frequency was restored to 60 Hz by 7:37 p.m., with no firm load shed; the system moved to EEA1 at 8:27 p.m. and exited at 8:37 p.m. [e45][e46]
- The IMM's 2023 report links the event to ERCOT's curtailment of 1,500 MW of generation (including 1,300 MW of wind) for a severe violation. [e48]

## Open items

- Resolved 2026-11-21: ERCOT's overview Level 3 wording (frequency below 59.8 Hz for any period) corresponds to the Protocols' Section 6.5.9.4(8) steady-state 59.8 Hz path; the overview does not mention the 59.5 Hz immediate path or the 25-minute 59.91 Hz path.
- Resolved 2026-11-21: the MW planning estimates for imports, switchable generation, Load Resources, load management and voltage reduction are taken from the text of ERCOT's January 2026 overview. The overview's Level 1 and 2 column layout was inferred from the order of the extracted text.
- No source in the saved set gives a complete list of EEA declarations since 2021, so none is stated here beyond the September 6, 2023 EEA2.
- The Operating Guides' termination text ("normally 2300 MW") differs from the Level 1 trigger (2,500 MW); the saved sources do not explain the relationship.
- The Protocols do not state why ESRs suspend charging at Level 1; no source rationale was found.
- The ORDC-to-EEA relationship (reserve price adders before an EEA) was not sourced in this topic; see the ORDC topic.
- The ECRS/Non-Spin methodology uses Watch or EEA1 thresholds in its model; how ERCOT's Watch (3,000 MW PRC in the AS methodology) relates to the Protocol Watch criteria in Section 6.5.9.3.3 (which lists conditions without a PRC number) is not stated in the saved sources.
