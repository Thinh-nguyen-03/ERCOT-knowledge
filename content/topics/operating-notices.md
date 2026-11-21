---
id: operating-notices
name: Operating Notices (OCN, Advisory, Watch, Emergency)
aliases: [OCN, Operating Condition Notice, Advisory, Watch, Emergency Notice, operating notices, grid notices]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: eea
    type: related
    note: An Emergency Notice declares an Emergency Condition, and ERCOT uses PRC and system frequency to determine both the Emergency Notice and EEA levels. [e12][e9]
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
    note: On a Watch, each TSP or DSP must identify and prepare to implement actions, including preparing for Load shedding. [e16]
  - to: weather-load
    type: related
    note: Weather conditions are among the stated reasons for OCNs. [e4]
  - to: ancillary-services
    type: related
    note: ERCOT may raise ancillary service requirements above the day-ahead quantities when it issues an Advisory. [e22]
  - to: energy-storage-resource
    type: related
    note: On an Emergency Notice caused by a transmission problem, ERCOT may instruct an ESR QSE to suspend charging. [e27]
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
  - id: e16
    source: np-06
    locator: "Section 6.5.9.3.3, Watch, paragraph (3)"
    quote: "To minimize the effects on the ERCOT System, each TSP or DSP shall identify and prepare to implement actions, including restoration of transmission lines as appropriate and preparing for Load shedding."
  - id: e17
    source: np-02
    locator: "Section 2.1, definition of Energy Emergency Alert (EEA)"
    quote: "An orderly, predetermined procedure for maximizing use of available Resources and, only if necessary, curtailing load during an Emergency Condition while providing for the maximum possible continuity of service and maintaining the integrity of the ERCOT System."
  - id: e18
    source: np-06
    locator: "Section 6.5.9.3.1.1, Advance Action Notice, paragraph (1)"
    quote: >-
      (1) ERCOT may issue an AAN in anticipation of a possible Emergency Condition. Any AAN will identify actions ERCOT expects to take to address the possible Emergency Condition unless the need for ERCOT action is alleviated by QSE and/or TSP actions taken, or by other system developments that occur, before a time stated in the AAN.
  - id: e19
    source: np-06
    locator: "Section 6.5.9.3.1.1, paragraph (2)"
    quote: >-
      (2) An AAN may not require action on the part of any Market Participant but may include additional information so that Market Participants can modify their plans in such a way that mitigates the need for ERCOT to take additional actions.
  - id: e20
    source: np-06
    locator: "Section 6.5.9.3.1, Operating Condition Notice, paragraph (2)"
    quote: >-
      (2) When time permits, ERCOT will issue an OCN before issuing an Advisory, Watch, or Emergency Notice. However, issuance of an OCN may not require action on the part of any Market Participant, but rather serves as a notice to Market Participants that some attention to the changing conditions may be warranted.
  - id: e21
    source: np-06
    locator: "Section 6.5.9.3.1, paragraph (4)"
    quote: >-
      Based on its assessment of the potential for adverse conditions, ERCOT may require information from QSEs representing Resources regarding the Resources’ fuel capabilities. Requests for this type of information shall be for a time period of no more than seven days from the date of the request.
  - id: e22
    source: np-06
    locator: "Section 6.5.9.3.2, Advisory, paragraph (4)"
    quote: >-
      (4) Although an Advisory is for information purposes, ERCOT may exercise its authority, in such circumstances, to increase Ancillary Service requirements above the quantities originally specified in the Day-Ahead in accordance with procedures.
  - id: e23
    source: np-06
    locator: "Section 6.5.9.3.2, Advisory, paragraph (2)(c)-(d)"
    quote: >-
      (c) When communications or other controls are significantly limited; or (d) When ERCOT Transmission Grid conditions are such that operations within security criteria as defined in the Operating Guides are not likely or possible because of Forced Outages or other conditions unless a Constraint Management Plan (CMP) exists.
  - id: e24
    source: np-06
    locator: "Section 6.5.9.3.3, Watch, paragraph (2)(c)-(e)"
    quote: >-
      (c) ERCOT varies from timing requirements or omits one or more Day-Ahead or Adjustment Period and Real-Time procedures; (d) ERCOT varies from timing requirements or omits one or more scheduling procedures in the Real-Time process; or (e) The SCED process fails to reach a solution, whether or not ERCOT is using one of the measures specified in paragraph (4) of Section 6.5.9.2, Failure of the SCED Process.
  - id: e25
    source: np-06
    locator: "Section 6.5.9.3.3, Watch, paragraph (3)"
    quote: >-
      ERCOT may instruct TSPs or DSPs to reconfigure ERCOT System elements as necessary to improve the reliability of the ERCOT System. On notice of a Watch, each QSE, TSP, and DSP shall prepare for an Emergency Condition in case conditions worsen.
  - id: e26
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (4)"
    quote: >-
      (4) ERCOT is considered to be in an Emergency Condition whenever ERCOT Transmission Grid status is such that a violation of security criteria, as defined in the Operating Guides, presents the threat of uncontrolled separation or cascading Outages and/or large-scale service disruption to Load (other than Load being served from a radial transmission line) and/or overload of a Transmission Element, and no timely solution is obtainable through SCED or CMPs.
  - id: e27
    source: np-06
    locator: "Section 6.5.9.3.4, Emergency Notice, paragraph (5)"
    quote: >-
      In addition, ERCOT may instruct any QSE representing an ESR to suspend ESR charging if ERCOT determines that a Load reduction by the ESR is capable of mitigating the transmission problem. An ESR co-located behind a Point of Interconnection (POI) with onsite generation that is incapable of exporting additional power to the ERCOT System may continue to charge as long as maximum output to the ERCOT System is maintained.
  - id: e28
    source: nog-04
    locator: "Section 4.2.1, Operating Condition Notice, paragraph (3)"
    quote: >-
      When an OCN is issued, it does not place ERCOT in an Emergency Condition.
  - id: e29
    source: nog-04
    locator: "Section 4.2.3, Watch, paragraph (1)"
    quote: >-
      (1) A Watch may be issued by ERCOT in accordance with Protocol Section 6.5.9.3.3, Watch, when it recognizes that conditions have developed such that an Emergency Condition may be imminent.
  - id: e30
    source: nog-04
    locator: "Section 4.2.3, Watch, paragraph (3)"
    quote: >-
      (3) When a post-contingency overload of an element cannot be rectified, including through the use of CMPs, ERCOT shall issue a Watch.
  - id: e31
    source: nog-04
    locator: "Section 4.2.1, OCN, paragraph (2)"
    quote: >-
      (2) ERCOT may require information from Qualified Scheduling Entities (QSEs) and Transmission Operators (TOs). Typical information requested may include, but is not limited to: (a) Resource fuel capabilities; (b) Resource condition details; and (c) Actual weather conditions.
  - id: e32
    source: nog-04
    locator: "Section 4.1, Introduction, paragraph (3)"
    quote: >-
      These communications will be issued by ERCOT to inform all TOs and QSEs of the current operating situation. TOs will notify their represented Transmission Service Providers (TSPs) and Load Serving Entities (LSEs). QSEs will in turn notify the appropriate Resources, Retail Electric Providers (REPs) and LSEs.
  - id: e33
    source: np-06
    locator: "Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (4)"
    quote: >-
      (4) When a Watch is issued for PRC below 3,000 MW, QSEs shall suspend any ongoing ERCOT-required Resource performance testing.
  - id: e34
    source: nog-04
    locator: "Section 4.2.2, Advisory, paragraph (1)"
    quote: >-
      (1) An Advisory will be issued by ERCOT in accordance with Protocol Section 6.5.9.3.2, Advisory, when it recognizes that conditions are developing or have changed such that QSE and/or TO actions may be prudent in anticipation of possible Emergency Conditions.
---

## Definition

ERCOT issues three levels of communication in anticipation of a possible Emergency Condition, in rising order: the Operating Condition Notice (OCN), the Advisory and the Watch. [e1][e14][e15] The Emergency Notice is the communication issued to declare that ERCOT is operating in an Emergency Condition. [e12]

## How it works

The type of communication depends mainly on how much time the market has to respond before an Emergency Condition. Lead times range from days to immediate, and ERCOT may skip steps if there is not enough time. [e2] Each communication must specify severity, the area affected, areas potentially affected and the anticipated duration. [e13] When time permits ERCOT will issue an OCN before an Advisory, Watch or Emergency Notice. [e20]

**OCN.** An OCN is informational only and gives ERCOT no extra operational authority; its reasons include unplanned transmission outages, insufficient resources for forecast conditions and weather concerns. [e3][e4] It may require no action by any Market Participant but signals that attention to changing conditions may be warranted. [e20] Issuing an OCN does not place ERCOT in an Emergency Condition. [e28] Based on its assessment ERCOT may require fuel capability information from QSEs, covering no more than seven days from the request. [e21] The Operating Guides add typical information requests: fuel capabilities, resource condition details and actual weather. [e31]

**Advance Action Notice (AAN).** ERCOT may also issue an AAN in anticipation of a possible Emergency Condition; it identifies actions ERCOT expects to take unless QSE or TSP actions or other developments alleviate the need before a time stated in the AAN, and it may not require action by any Market Participant. [e18][e19]

**Advisory.** An Advisory is issued, for example, when more ancillary services will be needed, weather requires more lead time than the DAM allows, communications or controls are significantly limited, or security-criteria operation is unlikely because of Forced Outages unless a CMP exists. [e7][e23] ERCOT notifies TSPs and QSEs, and QSEs notify resources and LSEs. [e5] Although informational, ERCOT may use an Advisory to increase ancillary service requirements above the quantities originally specified in the Day-Ahead. [e22] The Operating Guides say an Advisory is issued when conditions are developing such that QSE and/or TO actions may be prudent. [e34]

**Watch.** ERCOT shall issue a Watch when it determines that (a) SCED's market-based congestion management will not resolve transmission security violations, (b) Forced Outages or abnormal conditions require operating with active security violations unless a CMP exists, (c) or (d) it varies from or omits timing requirements for Day-Ahead, Adjustment Period, Real-Time or scheduling procedures, or (e) SCED fails to reach a solution. [e11][e24] The Operating Guides add that a Watch is issued when a post-contingency overload cannot be rectified, including through CMPs, and that a Watch may be issued when an Emergency Condition may be imminent. [e30][e29] ERCOT posts it on its website and by hotline, and each QSE must immediately notify the Market Participants it represents. [e6] ERCOT may instruct TSPs or DSPs to reconfigure system elements, and each QSE, TSP and DSP must prepare for an Emergency Condition in case conditions worsen. [e25] When a Watch is issued for PRC below 3,000 MW, QSEs suspend ongoing ERCOT-required Resource performance testing. [e33]

**Emergency Notice.** An Emergency Notice is issued when ERCOT cannot maintain minimum reliability standards with every practicably obtainable resource, or cannot take immediate action to relieve a Transmission Element above its Emergency Rating. [e8] ERCOT is in an Emergency Condition whenever a violation of security criteria threatens uncontrolled separation, cascading outages, large-scale load disruption (other than load on a radial line) or overload of a Transmission Element and no timely solution is available through SCED or CMPs. [e26] If it results from a transmission problem, ERCOT acts immediately, including instructing TSPs or DSPs to drop load, and may instruct an ESR QSE to suspend charging if that load reduction could mitigate the problem. [e5][e27]

## ERCOT context

The notices tie to resource obligations: when ERCOT issues any of the four due to forecast or actual cold or hot weather, QSEs must update the COP, telemetry and outage or derate reporting for each generation resource and ESR to reflect operating limits. [e10] ERCOT uses PRC and system frequency to determine the appropriate Emergency Notice and EEA levels. [e9] Downward, the Operating Guides say ERCOT notifies TOs and QSEs, TOs notify TSPs and LSEs, and QSEs notify resources, REPs and LSEs. [e32]

## Key facts

- Four communications: OCN, Advisory, Watch (three levels in anticipation) and Emergency Notice. [e1][e14][e15][e12]
- An OCN is for information only; ERCOT exercises no additional operational authority with it, and it does not place ERCOT in an Emergency Condition. [e3][e28]
- ERCOT can bypass steps when time is short. [e2]
- A Watch is posted to the website and by TO and QSE hotline. [e6]
- Weather-driven notices require QSEs to update COP, telemetry and derate reporting for resources. [e10]
- An Advisory can lead ERCOT to raise ancillary service requirements above day-ahead quantities. [e22]
- Fuel capability requests last no more than seven days from the request. [e21]

## Say it like this

ERCOT escalates in steps: an OCN is a heads-up, an Advisory says more reserves or lead time are needed, a Watch says normal market tools may not solve a security problem, and an Emergency Notice says ERCOT is in an Emergency Condition. It can skip steps if time is short. [e3][e7][e11][e12][e2]

## Common confusion

An Emergency Notice is not an EEA level. The EEA is the orderly procedure for maximizing resources and, only if necessary, curtailing load. [e17] ERCOT uses PRC and frequency to pick both the Emergency Notice and the EEA level. [e9] A Watch is also not an EEA; it is the third of the three pre-emergency communications. [e15] And an OCN, Advisory or Watch does not itself place ERCOT in an Emergency Condition; the Operating Guides say so for an OCN, Advisory and Watch. [e28]

## Questions

### What are the three levels before an emergency?

OCN, Advisory and Watch, then the Emergency Notice when ERCOT is operating in an Emergency Condition. [e1][e14][e15][e12]

### Does an OCN change what ERCOT can do?

No. OCNs are informational only and ERCOT exercises no additional operational authority, though it may ask QSEs for more information. [e3]

### What must QSEs do when a weather notice goes out?

Update the COP, telemetry and outage or derate reporting for each generation resource and ESR to reflect operating limits, and for Advisories and Watches pass the notice to those they represent. [e10][e5][e6]

### Why might ERCOT skip straight to a Watch or Emergency Notice?

The type of communication depends mainly on the time the market has to respond, and ERCOT may bypass steps if there is insufficient time. [e2]

### What if the SCED process fails to solve?

That is one of the Watch triggers: a Watch is issued when SCED fails to reach a solution. [e24]

### Why does an Advisory matter to the market even though it is informational?

ERCOT may use it to raise ancillary service requirements above the day-ahead quantities, which changes what the market must supply. [e22]

### What changes for a generator's QSE when a Watch is posted for PRC below 3,000 MW?

Ongoing ERCOT-required resource performance testing must be suspended, and the QSE must also notify the Market Participants it represents. [e33][e6]

## Open items

- Resolved 2026-11-21: the Advance Action Notice (Section 6.5.9.3.1.1) is now covered above. [e18]
- How often each notice has been issued (history) and how market participants react are not in the saved sources checked.
- The Operating Guide weather-preparation detail (NOG Section 4 and PUCT 16 TAC 25.55) was not read in depth for this entry.
- The ERCOT Operating Guides pre-EEA ERS deployment at PRC below 3,000 MW is covered in the EEA topic, not here.
