---
id: sixty-day-disclosure
name: 60-Day Disclosure Reports
aliases: [60-day disclosure, 60 day disclosure, 60-Day SCED Disclosure, 60-Day DAM Disclosure]
kind: report
domain: structure
level: 2
lenses: [analyst, trading]
depth: deep
as_of: 2026-11-21
links:
  - to: stakeholder-process
    type: related
    note: Rule 25.506 requires ERCOT to use a stakeholder process, in consultation with PUCT staff, to develop and implement the rules. [e28]
  - to: puct
    type: related
    note: The disclosure timing comes from PUCT Substantive Rule 25.506. [e1][e3]
  - to: sced
    type: related
    note: The Protocols require posting each Resource's Energy Offer Curve for each SCED execution 60 days prior to the current Operating Day. [e6]
  - to: dam
    type: related
    note: The Protocols require posting DAM offer data 60 days after the Operating Day. [e7]
  - to: market-information-system
    type: related
    note: The PUCT rule requires ERCOT to post the information at a publicly accessible location on its website; the current Protocol text posts the 60-day State Estimator data to the MIS Secure Area. [e1][e30]
  - to: imm
    type: related
    note: Entity-specific offer data is posted 60 calendar days after the day it is accumulated. [e3]
  - to: energy-offer-curve
    type: related
    note: Generation Resource Energy Offer Curves are among the items posted at 60 days, as submitted, as extended with proxy logic and as mitigated. [e6][e14]
  - to: three-part-supply-offer
    type: related
    note: DAM Three-Part Supply Offers, including Startup Offer and Minimum-Energy Offer, are posted 60 days after the Operating Day. [e19]
  - to: energy-storage-resource
    type: related
    note: ESR Energy Bid/Offer Curves and State of Charge snapshots are among the 60-day postings. [e16][e17]
  - to: offer-cap
    type: related
    note: The 50-times-gas-price-index test triggers a seven-day posting of the high-priced part of offers. [e10][e11]
  - to: settlement-statements
    type: related
    note: The RTM Final Statement issues on the 55th day after the Operating Day, five days before the 60-day postings. [e33]
  - to: market-power-mitigation
    type: related
    note: The 60-day postings include the Energy Offer Curve as mitigated and extended for use in SCED. [e14]
evidence:
  - id: e1
    source: puct-25-506
    locator: "Section 25.506(a), General Requirements"
    quote: "To increase the transparency of the ERCOT-administered markets, ERCOT must post the information required in this section at a publicly accessible location on its website. In no event will ERCOT disclose competitively sensitive consumption data."
  - id: e2
    source: puct-25-506
    locator: "Section 25.506(b)"
    quote: "ERCOT will post the following information in aggregated form, for each settlement interval and for each area where available, two calendar days after the day for which the information is accumulated: (1) quantities and prices of offers for energy and each type of ancillary capacity service, in the form of supply curves; (2) self-arranged energy and ancillary capacity services, for each type of service; (3) actual resource output; (4) load and resource output for all entities that dynamically schedule their resources; (5) actual load; and (6) energy bid curves, cleared energy bids, and cleared load."
  - id: e3
    source: puct-25-506
    locator: "Section 25.506(c)"
    quote: "ERCOT will post the following information in entity-specific form, for each settlement interval, 60 calendar days after the day for which the information is accumulated, except where inapplicable or otherwise prescribed. Resource-specific offer information must be linked to the name of the resource (or identified as a virtual offer), the name of the entity submitting the information, and the name of the entity controlling the resource."
  - id: e4
    source: puct-25-506
    locator: "Section 25.506(c)(1)"
    quote: "Offer curves (prices and quantities) for each type of ancillary service and for energy in the real time market, except that, for the highest-priced offer selected or dispatched for each interval on an ERCOT-wide basis, ERCOT will post the offer price and the name of the entity submitting the offer three calendar days after the day for which the information is accumulated."
  - id: e5
    source: puct-25-506
    locator: "Section 25.506(c)(5)"
    quote: "For each hour, transmission flows, voltages, transformer flows, voltages and tap positions (i.e., State Estimator data). Notwithstanding the provisions of this paragraph and the provisions of paragraphs (1) through (4) of this subsection, ERCOT must release relevant State Estimator data earlier than 60 days after the day for which the information is accumulated if, in its sole discretion, it determines the release is necessary to provide a complete and timely explanation and analysis of unexpected market operations and results or system events, including but not limited to pricing anomalies, recurring transmission congestion, and system disturbances."
  - id: e6
    source: np-03
    locator: "Section 3.2.5, Publication of Resource and Load Information, paragraph (4)(a)"
    quote: "ERCOT shall post on the ERCOT website the following information for each Resource for each execution of SCED 60 days prior to the current Operating Day: (a) The Generation Resource name and the Generation Resource’s Energy Offer Curve (prices and quantities):"
  - id: e7
    source: np-03
    locator: "Section 3.2.5, paragraph (12)"
    quote: "ERCOT shall post on the ERCOT website the following information from the DAM for each hourly Settlement Interval for the applicable Operating Day 60 days prior to the current Operating Day:"
  - id: e8
    source: np-03
    locator: "Section 3.2.5, paragraph (1)"
    quote: "Two days after the applicable Operating Day, ERCOT shall post on the ERCOT website for the ERCOT System and, if applicable, for each Disclosure Area, the information derived from each execution of SCED."
  - id: e9
    source: puct-25-506
    locator: "Section 25.506(c)(3)"
    quote: "Other resource-specific information, as well as self-arranged energy and ancillary capacity services, and actual resource output, for each type of service and for each resource at each settlement point."
  - id: e10
    source: puct-25-506
    locator: "Section 25.506(c)(2)"
    quote: "If the clearing prices for energy or any ancillary service exceeds a calculated value that is equal to 50 times a natural gas price index selected by ERCOT for each operating day, expressed in dollars per megawatt-hour (MWh) or dollars per megawatt per hour, during any interval, the portion of every market participant’s price-quantity offer pairs for balancing energy service and each other ancillary service that is at or above a calculated value that is equal to 50 times a natural gas price index selected by ERCOT for each operating day, expressed in dollars per MWh or dollars per megawatt per hour, for that service and that interval must be posted seven calendar days after the day for which the offer is submitted."
  - id: e11
    source: np-03
    locator: "Section 3.2.5(6), Publication of Resource and Load Information"
    quote: "If any Real-Time Locational Marginal Price (LMP) exceeds 50 times the Fuel Index Price (FIP) during any SCED interval for the applicable Operating Day, ERCOT shall post on the ERCOT website the portion of any Generation Resource’s as-submitted and as-mitigated and extended Energy Offer Curve or any ESR’s as-submitted and as-mitigated and extended Energy Bid/Offer Curve that is at or above 50 times the FIP for that SCED interval seven days after the applicable Operating Day."
  - id: e12
    source: np-03
    locator: "Section 3.2.5(8), Publication of Resource and Load Information"
    quote: "ERCOT shall post on the ERCOT website the offer price and the name of the Entity submitting the offer for the highest-priced offer selected or Dispatched by SCED three days after the end of the applicable Operating Day. If multiple Entities submitted the highest-priced offers selected, all Entities shall be identified on the ERCOT website."
  - id: e13
    source: np-03
    locator: "Section 3.2.5(11), Publication of Resource and Load Information"
    quote: >-
      ERCOT shall post on the ERCOT website for each Operating Day the following information for each Resource:

      (a) The Resource name;

      (b) The name of the Resource Entity;

      (c) Except for Load Resources that are not SCED qualified, the name of the Decision Making Entity (DME) controlling the Resource, as reflected in the Managed Capacity Declaration submitted by the Resource Entity in accordance with Section 3.6.2, Decision Making Entity for a Resource; and

      (d) Flag for Reliability Must-Run (RMR) Resources.
  - id: e14
    source: np-03
    locator: "Section 3.2.5(4)(a)(i)-(iii), Publication of Resource and Load Information"
    quote: >-
      (i) As submitted;

      (ii) As submitted and extended (or truncated) with proxy Energy Offer Curve logic by ERCOT to fit to the operational HSL and LSL values that are available for dispatch by SCED; and

      (iii) As mitigated and extended for use in SCED;
  - id: e15
    source: np-03
    locator: "Section 3.2.5(4)(d)-(e), Publication of Resource and Load Information"
    quote: >-
      The Generation Resource name and the Generation Resource’s Output Schedule;

      (e) The Generation Resource name and actual metered Generation Resource net output;
  - id: e16
    source: np-03
    locator: "Section 3.2.5(4)(i), Publication of Resource and Load Information"
    quote: "The ESR name and the ESR’s Energy Bid/Offer Curve (prices and quantities):"
  - id: e17
    source: np-03
    locator: "Section 3.2.5(4)(j)(ix)-(xi), Publication of Resource and Load Information"
    quote: >-
      (ix) The telemetered State of Charge in MWh;

      (x) The telemetered Minimum State of Charge (MinSOC) in MWh; and

      (xi) The telemetered Maximum State of Charge (MaxSOC) in MWh.
  - id: e18
    source: np-03
    locator: "Section 3.2.5(5), Publication of Resource and Load Information"
    quote: "ERCOT shall post on the ERCOT website for each Resource for each Operating Hour 60 days prior to the current Operating Day a count of the number of times for each Ancillary Service that the Resource’s Ancillary Service Offer quantity or price was updated within the Operating Period."
  - id: e19
    source: np-03
    locator: "Section 3.2.5(12)(a)-(b), Publication of Resource and Load Information"
    quote: >-
      The Generation Resource name and the Generation Resource’s Three-Part Supply Offer (prices and quantities), including Startup Offer and Minimum-Energy Offer, available for the DAM;

      (b) For each Settlement Point, individual DAM Energy-Only Offer Curves available for the DAM and the name of the QSE submitting the offer;
  - id: e20
    source: np-03
    locator: "Section 3.2.5(12)(e)-(f), Publication of Resource and Load Information"
    quote: >-
      For each Settlement Point, individual DAM Energy Bids available for the DAM and the name of the QSE submitting the bid;

      (f) For each Settlement Point, individual PTP Obligation bids available to the DAM that sink at the Settlement Point and the QSE submitting the bid;
  - id: e21
    source: np-03
    locator: "Section 3.2.5(12)(i)-(j), Publication of Resource and Load Information"
    quote: >-
      The award for each Three-Part Supply Offer from the DAM and the name of the QSE receiving the award;

      (j) For each Settlement Point, the award of each DAM Energy-Only Offer from the DAM and the name of the QSE receiving the award;
  - id: e22
    source: np-03
    locator: "Section 3.2.5(12)(l), Publication of Resource and Load Information"
    quote: "For each Settlement Point, the award of each PTP Obligation bid from the DAM that sinks at the Settlement Point, including whether or not the PTP Obligation bid was linked to an Option, and the QSE submitting the bid;"
  - id: e23
    source: np-03
    locator: "Section 3.2.5(12), pending box (NPRR1188)"
    quote: "[NPRR1188: Insert items (m) and (n) below upon system implementation and renumber accordingly:]"
  - id: e24
    source: np-03
    locator: "Section 3.2.5(1), Publication of Resource and Load Information"
    quote: "The Disclosure Area is the 2003 ERCOT CMZs. Posting requirements will be applicable to Generation Resources, ESRs, and Controllable Load Resources (CLRs) physically located in the defined Disclosure Area. This information shall not be posted if the posting of the information would reveal any individual Market Participant’s Protected Information."
  - id: e25
    source: puct-25-506
    locator: "Section 25.506(a), General Requirements"
    quote: "The information released must be made available to all market participants."
  - id: e26
    source: puct-25-506
    locator: "Section 25.506(d)(3), Reporting on forced generation outages and derates"
    quote: "Not later than the third business day after a forced outage or forced derate under paragraph (1) of this subsection ends, ERCOT must post the information received under paragraph (2) of this subsection, in resource-specific form, for each operating day."
  - id: e27
    source: puct-25-506
    locator: "Section 25.506(c), intro"
    quote: "If there are multiple offers for the resource, ERCOT must post the specified information for each offer for the resource, including the name of the entity submitting the offer and the name of the entity controlling the resource."
  - id: e28
    source: puct-25-506
    locator: "Section 25.506(e), Development and implementation"
    quote: "ERCOT must use a stakeholder process, in consultation with commission staff, to develop and implement rules that comply with this section."
  - id: e29
    source: puct-25-506
    locator: "Section 25.506(c)(5)"
    quote: "ERCOT’s release of data in this event must be limited to intervals associated with the unexpected market or system event as determined by ERCOT. The data released must be made available simultaneously to all market participants."
  - id: e30
    source: np-06
    locator: "Section 6.5.7.1.13(4), Data Inputs and Outputs for the Real-Time Sequence and SCED"
    quote: "Sixty days after the applicable Operating Day, ERCOT shall post on the MIS Secure Area, the following information:"
  - id: e31
    source: np-06
    locator: "Section 6.5.7.1.13(8), Data Inputs and Outputs for the Real-Time Sequence and SCED"
    quote: "Sixty days after the applicable Operating Day, ERCOT shall post to the ERCOT website the summary LDL and HDL report from paragraph (7) above and include instances of manual overrides of HDL or LDL, including the name of the Generation Resource or ESR and the type of override."
  - id: e32
    source: np-06
    locator: "Section 6.4.9.1.1(7), Ancillary Service Awards"
    quote: "Sixty days after the applicable Operating Day, ERCOT shall post to the ERCOT website the instances of ERCOT Operator reduction of Ancillary Services capability, including the name of the Resource, the type and reduced MW by Ancillary Service, and the reason for the reduction."
  - id: e33
    source: np-09
    locator: "Section 9.5.5(1), RTM Final Statement"
    quote: "ERCOT shall issue an RTM Final Statement for each Statement Recipient for a given Operating Day on the 55th day after the Operating Day, unless that 55th day is not a Business Day. If the 55th day is not a Business Day, then ERCOT shall issue the RTM Final Statement on the first Business Day after the 55th day."
  - id: e34
    source: np-12
    locator: "Section 12.2(4), ERCOT Responsibilities"
    quote: "ERCOT shall create and maintain a list of all of the posting requirements contained in these Protocols or market guides as described in paragraph (2) of Section 1.1. This list and changes thereto shall be posted to the ERCOT website."
  - id: e35
    source: np-12
    locator: "Section 12.4(1), ERCOT Website"
    quote: "Data, extracts, and reports required by the Protocols to be published on the ERCOT website must be made available on a non-discriminatory basis."
  - id: e36
    source: np-12
    locator: "Section 12.2(3), ERCOT Responsibilities"
    quote: "To the extent a request is reasonable, in ERCOT’s sole discretion, ERCOT shall post to the MIS Certified Area information that is requested by a Market Participant but not required to be posted by these Protocols."
  - id: e37
    source: np-09
    locator: "Section 9.14.2(5), Notice of Dispute (information made available under Section 1.3.3)"
    quote: "However, to the extent a disputing party claims that the Settlement or billing dispute relates to information made available under Section 1.3.3, Expiration of Confidentiality, the disputing party must register the Settlement and billing dispute with ERCOT by electronic means within 60 days after the date the information became available."
  - id: e38
    source: np-06
    locator: "Section 6.5.7.1.13, pending box (NPRR1239)"
    quote: "[NPRR1239: Replace paragraph (4) above with the following upon system implementation:]"
  - id: e40
    source: np-06
    locator: "Section 6.5.7.1.13, pending NPRR1239 replacement text for paragraph (4)"
    quote: "(4) Sixty days after the applicable Operating Day, ERCOT shall post on the ERCOT website, the following information:"
  - id: e39
    source: np-03
    locator: "Section 3.2.5(10), Publication of Resource and Load Information"
    quote: "ERCOT shall post on the ERCOT website the offer price and the name of the Entity submitting the offer for the highest-priced Ancillary Service Offer selected in the DAM or RTM for each Ancillary Service three days after the end of the applicable Operating Day."
---

## Definition

The 60-day disclosures are the entity-specific market data ERCOT posts 60 calendar days after the day the information is accumulated, under PUCT Substantive Rule 25.506 and Protocol Section 3.2.5. [e3][e6][e7]

## How it works

The rule has two tiers. Aggregated information, such as supply curves, actual output and actual load, is posted two calendar days after the day. [e2] Entity-specific information, with resource-specific offer information linked to the resource, submitting entity and controlling entity names, is posted 60 calendar days after. [e3] Where a resource has multiple offers, ERCOT posts the information for each offer with the submitting and controlling entity names. [e27] The Protocols mirror this: information derived from each SCED execution for the ERCOT System and each Disclosure Area is posted two days after the Operating Day, and resource-level SCED data and DAM data are posted 60 days prior to the current Operating Day. [e8][e6][e7]

The two-day tier has its own limits. The Disclosure Area is the 2003 ERCOT CMZs, and the information is not posted if posting would reveal an individual Market Participant's Protected Information. [e24] All information released must be available to all market participants. [e25]

What the 60-day SCED postings contain (Section 3.2.5(4)). For each Resource and each SCED execution, ERCOT posts the Generation Resource name and its Energy Offer Curve in three forms: as submitted; as submitted and extended or truncated with proxy Energy Offer Curve logic to fit the operational HSL and LSL; and as mitigated and extended for use in SCED. [e6][e14] It also posts the Generation Resource Output Schedule and actual metered net output, [e15] the ESR name and Energy Bid/Offer Curve, [e16] and ESR snapshots including telemetered State of Charge, MinSOC and MaxSOC. [e17] A count of how many times each Resource's Ancillary Service offer quantity or price was updated within the Operating Period is also posted at 60 days. [e18]

What the 60-day DAM postings contain (Section 3.2.5(12)). For each hourly Settlement Interval, ERCOT posts the Generation Resource's Three-Part Supply Offer including Startup Offer and Minimum-Energy Offer, and the individual DAM Energy-Only Offer Curves with the QSE name. [e19] It also posts individual DAM Energy Bids and PTP Obligation bids with the QSE, [e20] the awards of Three-Part Supply Offers and Energy-Only Offers with the QSE receiving them, [e21] and the award of each PTP Obligation bid, including whether it was linked to an Option. [e22]

Other 60-day items elsewhere in the Protocols: the hourly State Estimator data (posted to the MIS Secure Area under Section 6.5.7.1.13(4)), [e30] the summary LDL and HDL report with instances of manual overrides, [e31] and instances of ERCOT Operator reduction of Ancillary Services capability. [e32]

## ERCOT context

The 60-day lag exists inside a rule written to increase market transparency while never disclosing competitively sensitive consumption data. [e1] The 60-day set includes real-time and ancillary service offer curves, other resource-specific information, and hourly State Estimator data. [e4][e9][e5] Not everything waits.

Shorter clocks. The highest-priced offer selected or dispatched in each interval, with the offering entity's name, is posted after three calendar days, [e4] and the Protocols name the highest-priced SCED offer, and the highest-priced Ancillary Service offer, at three days. [e12][e39] If prices exceed 50 times a gas price index (the PUCT rule) or the Fuel Index Price (the Protocol), the part of offers at or above that level is posted after seven days. [e10][e11] Forced outage and derate information is posted not later than the third business day after the forced outage or derate ends. [e26]

ERCOT must release relevant State Estimator data earlier than 60 days if, in its sole discretion, it determines the release is necessary to explain unexpected market operations or system events, including pricing anomalies. [e5] That release is limited to the intervals associated with the event and made available simultaneously to all market participants. [e29]

Resource identity postings. Section 3.2.5(11) has ERCOT post on its website, for each Operating Day, each Resource's name, the Resource Entity name and, except for Load Resources that are not SCED qualified, the name of the Decision Making Entity controlling it, plus a flag for Reliability Must-Run Resources; that paragraph states no 60-day delay. [e13]

Pending changes (not in force). A pending NPRR1188 box in Section 3.2.5(12) would insert further items (m) and (n) into the 60-day DAM list upon system implementation; it is not current rule. [e23] A pending NPRR1239 box would replace the State Estimator paragraph upon system implementation, and its replacement text says ERCOT posts it on the ERCOT website rather than the MIS Secure Area. [e38][e40]

Where it is posted. The PUCT rule requires ERCOT to use a stakeholder process, in consultation with commission staff, to develop and implement rules that comply with it. [e28] ERCOT must keep a list of all posting requirements in the Protocols and market guides on its website, [e34] and must make data required to be published on the website available on a non-discriminatory basis. [e35] On request, ERCOT may post to the MIS Certified Area information that is not required to be posted if the request is reasonable in ERCOT's sole discretion. [e36]

## Timeline

- Two days after the Operating Day: aggregated offer, output and load information under the PUCT rule, and information derived from each SCED execution under the Protocols. [e2][e8]
- Three days: highest-priced offer or bid and the offering entity. [e4][e12][e39]
- Seven days: portions of offers at or above 50 times the gas index or Fuel Index Price, when the price test is met. [e10][e11]
- 55th day (or the first Business Day after it): RTM Final Statement issues, about five days before the 60-day postings; the saved sources do not say the 60-day lag was set to follow it. [e33]
- 60 days: entity-specific offers, bids, awards and State Estimator data. [e3][e6][e7][e5]
- Within 60 days of the date information became available under Section 1.3.3: deadline to register a settlement or billing dispute that relates to that information. [e37]

## Key facts

- Aggregated data: two calendar days after the day. [e2]
- Entity-specific data: 60 calendar days after the day, unless otherwise prescribed. [e3]
- The highest-priced offer in each interval and its entity name: three calendar days. [e4]
- Portions of offers at or above 50 times the index: seven days. [e10][e11]
- Protocol 3.2.5 requires 60-day postings of SCED resource data and DAM data. [e6][e7]
- Energy Offer Curves are posted as submitted, as proxy-extended and as mitigated. [e14]

## Say it like this

(Guidance) ERCOT shows the market its aggregate offer and load data within two days, but names who offered what mostly only after 60 days. That is why analysts reconstruct competitors' behavior after the fact.

## Common confusion

"60-day" does not mean data arrives 60 days after settlement or invoices; the clock runs from the day the information is accumulated (the Operating Day). [e3][e6] Not every posting waits 60 days. [e2][e4] The PUCT rule's 50-times-gas-index test and the Protocol's 50-times-Fuel-Index-Price test are separate texts and both appear above. [e10][e11]

## Questions

### What is the difference between the two-day and the 60-day postings?

Two-day postings are aggregated (curves, output, load). The 60-day postings are entity-specific, with names. [e2][e3]

### Can anything entity-specific come out earlier?

Yes: the highest-priced offer each interval (three days) and portions of offers at or above 50 times the index when prices spike (seven days); separately, State Estimator data (system data, not offers) can be released earlier when ERCOT finds it necessary for explaining unexpected events. [e4][e10][e5]

### Why do offers show up three versions on the 60-day report?

Section 3.2.5(4)(a) lists the Energy Offer Curve as submitted, as extended or truncated with proxy logic to fit the operational HSL and LSL, and as mitigated and extended for use in SCED. [e14] The third form is the curve as mitigated and extended for use in SCED. [e14]

### What if someone's Protected Information would be revealed by a two-day posting?

Under Section 3.2.5(1), the two-day information is not posted if posting would reveal an individual Market Participant's Protected Information. [e24]

### Why wait 60 days at all?

The saved sources do not give the reason for 60 days; they only state the rule's purpose (transparency) and its limit (no competitively sensitive consumption data). [e1] The lag sits after the RTM Final Statement on day 55. [e33]

## Scenarios

### An analyst wants a competitor's DAM offers from last August. What can they get?

- Individual DAM Energy-Only Offer Curves with the QSE name, Three-Part Supply Offers by Generation Resource, and DAM awards, 60 days after each Operating Day. [e19][e21]
- Individual Energy Bids and PTP Obligation bids with the QSE. [e20]
- Entity-specific DAM offers and bids come at the 60-day point. Earlier, the saved sources show only aggregated data (two days) and the limited items described above (highest-priced offers at three days, high-priced portions of offers at seven days). [e3][e2][e8][e4][e10][e11]

## Open items

- Section 3.2.5(4) and (12) were read in full; the pending NPRR1188 replacement text for CLR energy bid curves is only flagged, not quoted in full (it sits in table cells).
- The exact names, file formats and web locations of the published reports are not in the saved sources; Protocol Section 12.2(4) says ERCOT keeps a list of posting requirements on its website but the list itself is not saved.
- The saved sources do not say why 60 days was chosen.
- The PUCT rule copy shows an effective date of 05/028/25 (P-57603) as printed; the date appears mistyped in the source.
- Resolved 2026-11-21: the seven-calendar-day posting of offers above 50 times a gas price index (Section 25.506(c)(2)) is now quoted.
