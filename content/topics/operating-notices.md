---
id: operating-notices
name: Operating Notices (OCN, Advisory, Watch, Emergency)
aliases: [OCN, Operating Condition Notice, Advisory, Watch, Emergency Notice, operating notices, grid notices]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
links:
  - to: eea
    type: related
    note: An Emergency Notice declares an Emergency Condition, and the EEA is the procedure for operating through it. [e1][e8]
  - to: prc
    type: related
    note: ERCOT uses PRC and system frequency to determine the Emergency Notice and EEA levels. [e9]
  - to: nodal-protocols
    type: part-of
    note: The notices are defined in Section 6.5.9.3 of the Nodal Protocols. [e2]
  - to: qse
    type: related
    note: QSEs must pass notices on to the Market Participants they represent and update resource data in weather-driven notices. [e5][e7][e10]
  - to: load-shed
    type: related
    note: A Watch directs TSPs and DSPs to prepare for load shedding. [e6]
  - to: weather-load
    type: related
    note: Weather conditions are among the stated reasons for OCNs. [e4]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Operating Condition Notice (OCN)"
    quote: "The first of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition."
  - id: e2
    source: np-06
    locator: "Section 6.5.9.3, Communication Prior to and During Emergency Conditions, paragraph (2)"
    quote: "(2) The type of communication ERCOT issues is determined primarily on the basis of the time available for the market to respond before an Emergency Condition occurs. The timing of these communications could range from days in advance to immediate. If there is insufficient time to allow the market to react, ERCOT may bypass one or more of the communication steps."
  - id: e3
    source: np-06
    locator: "Section 6.5.9.3.1, Operating Condition Notice, paragraph (1)"
    quote: "(1) ERCOT will issue an Operating Condition Notice (OCN) to inform Market Participants of a possible future need for more Resources due to conditions that could affect ERCOT System reliability. OCNs are for informational purposes only, and ERCOT exercises no additional operational authority with the issuance of this type of notice, but may solicit additional information from QSEs in order to determine whether the issuance of an Advisory, Watch, or Emergency Notice is warranted."
  - id: e4
    source: np-06
    locator: "Section 6.5.9.3.1, paragraph (3)"
    quote: "(3) Reasons for OCNs include, but are not limited to, unplanned transmission Outages, insufficient Resources to meet forecasted conditions, and weather-related concerns such as anticipated freezing temperatures, hurricanes, wet weather, and ice storms."
  - id: e5
    source: np-06
    locator: "Section 6.5.9.3.2, Advisory, paragraph (3)"
    quote: "(3) The Advisory must communicate existing constraints. ERCOT shall notify TSPs and QSEs of the Advisory, and QSEs shall notify appropriate Resources and Load Serving Entities (LSEs)."
  - id: e6
    source: np-06
    locator: "Section 6.5.9.3.3, Watch, paragraph (3)"
    quote: "(3) ERCOT shall post the Watch message electronically to the ERCOT website and shall provide verbal notice via the TO Hotline and the QSE Hotline. Corrective actions identified by ERCOT must be communicated through Dispatch Instructions to all TSPs, DSPs and QSEs required to implement the corrective action. Each QSE shall immediately notify the Market Participants that it represents of the Watch."
  - id: e7
    source: np-06
    locator: "Section 6.5.9.3.2, Advisory, paragraph (2)(a)-(b)"
    quote: "(2) ERCOT shall issue an Advisory for reasons such as, but not limited to, the following: (a) When it recognizes that conditions are developing or have changed and more Ancillary Services will be needed to maintain current or near-term operating reliability; (b) When weather or ERCOT System conditions require more lead-time than the normal DAM allows;"
  - id: e8
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (2)"
    quote: "(2) ERCOT shall issue an Emergency Notice for one or both of the following reasons: (a) ERCOT cannot maintain minimum reliability standards (for reasons including fuel shortages) during the Operating Period using every Resource practicably obtainable from the market; or (b) Immediate action cannot be taken to avoid or relieve a Transmission Element operating above its Emergency Rating."
  - id: e9
    source: np-06
    locator: "Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (1)(f)"
    quote: "(f) ERCOT shall use the PRC and system frequency to determine the appropriate Emergency Notice and EEA levels."
  - id: e10
    source: np-03
    locator: "Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (9)"
    quote: "(9) When ERCOT issues a communication in the form of an Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice due to forecasted or actual cold or hot weather, for each Generation Resource and Energy Storage Resource (ESR) a QSE represents, the QSE shall update the COP, Real-Time telemetry, and Outage or derate reporting to reflect any Resource-specific operating limitations based on: (i) capability and availability; (ii) fuel supply or inventory concerns, including fuel switching capabilities; or (iii) environmental constraints and the impact on the Generation Resource or ESR due to the weather conditions."
  - id: e11
    source: np-06
    locator: "Section 6.5.9.3.3, Watch, paragraph (2)(a)-(b)"
    quote: "(2) ERCOT shall issue a Watch when ERCOT determines that: (a) Market-based congestion management techniques embedded in SCED as specified in these Protocols will not be adequate to resolve transmission security violations; (b) Forced Outages or other abnormal operating conditions have occurred, or may occur that require operations with active violations of security criteria as defined in the Operating Guides unless a CMP exists;"
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Emergency Notice"
    quote: "The communication issued by ERCOT to declare that ERCOT is operating in an Emergency Condition."
  - id: e13
    source: np-06
    locator: "Section 6.5.9.3, paragraph (4)"
    quote: "The communications must specify the severity of the situation, the area affected, the areas potentially affected, and the anticipated duration of the Emergency Condition."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Advisory"
    quote: "The second of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition."
  - id: e15
    source: np-02
    locator: "Section 2.1, definition of Watch"
    quote: "The third of three levels of communication issued by ERCOT in anticipation of a possible Emergency Condition."
---

## Definition

ERCOT issues three levels of communication in anticipation of a possible Emergency Condition, in rising order: the Operating Condition Notice (OCN), the Advisory and the Watch. [e1][e14][e15] The Emergency Notice is the communication issued to declare that ERCOT is operating in an Emergency Condition. [e12]

## How it works

The type of communication depends mainly on how much time the market has to respond before an Emergency Condition. Lead times range from days to immediate, and ERCOT may skip steps if there is not enough time. [e2] Each communication must specify severity, the area affected, areas potentially affected and the anticipated duration. [e13]

An OCN is informational only and gives ERCOT no extra operational authority; its reasons include unplanned transmission outages, insufficient resources for forecast conditions and weather concerns. [e3][e4] An Advisory is issued, for example, when more ancillary services will be needed or weather requires more lead time than the DAM allows; ERCOT notifies TSPs and QSEs, and QSEs notify resources and LSEs. [e7][e5] A Watch is issued when, for example, SCED's market-based congestion management will not resolve transmission security violations or forced outages require operating with active security violations. [e11] ERCOT posts it on its website and by hotline, and each QSE must immediately notify the Market Participants it represents. [e6]

An Emergency Notice is issued when ERCOT cannot maintain minimum reliability standards with every practicably obtainable resource, or cannot take immediate action to relieve a Transmission Element above its Emergency Rating. [e8]

## ERCOT context

The notices tie to resource obligations: when ERCOT issues any of the four due to forecast or actual cold or hot weather, QSEs must update the COP, telemetry and outage or derate reporting for each generation resource and ESR to reflect operating limits. [e10] ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA levels, so the notices sit on the same ladder as the EEA. [e9]

## Key facts

- Four communications: OCN, Advisory, Watch (three levels in anticipation) and Emergency Notice. [e1][e14][e15][e12]
- An OCN is for information only; ERCOT exercises no additional operational authority with it. [e3]
- ERCOT can bypass steps when time is short. [e2]
- A Watch is posted to the website and by TO and QSE hotline. [e6]
- Weather-driven notices require QSEs to update COP, telemetry and derate reporting for resources. [e10]

## Say it like this

ERCOT escalates in steps: an OCN is a heads-up, an Advisory says more reserves or lead time are needed, a Watch says normal market tools may not solve a security problem, and an Emergency Notice says ERCOT is in an Emergency Condition. It can skip steps if time is short. [e3][e7][e11][e12][e2]

## Common confusion

An Emergency Notice is not an EEA level. The EEA is the orderly procedure for maximizing resources and, only if necessary, curtailing load, and ERCOT uses PRC and frequency to pick both the Emergency Notice and the EEA level. [e9] A Watch is also not an EEA; it is the third of the three pre-emergency communications. [e15] See the PRC topic for how PRC thresholds relate to a Watch.

## Questions

### What are the three levels before an emergency?

OCN, Advisory and Watch, then the Emergency Notice when ERCOT is operating in an Emergency Condition. [e1][e14][e15][e12]

### Does an OCN change what ERCOT can do?

No. OCNs are informational only and ERCOT exercises no additional operational authority, though it may ask QSEs for more information. [e3]

### What must QSEs do when a weather notice goes out?

Update the COP, telemetry and outage or derate reporting for each generation resource and ESR to reflect operating limits, and for Advisories and Watches pass the notice to those they represent. [e10][e5][e6]

## Open items

- The "Advance Action Notice" (Section 6.5.9.3.1.1) was not read or cited; its relationship to the OCN is not covered here.
- Deeper pass: the remaining Watch reasons (items (c)-(e)), the Emergency Notice actions in paragraphs (4)-(6), and the Operating Guide detail on notices and weather preparations.
- Deeper pass: how often each notice has been issued (history) and how market participants react; not in the saved sources checked.
