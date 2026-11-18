---
id: ers
name: ERS (Emergency Response Service)
aliases: [ERS, Emergency Response Service, ERS-10, ERS-30, ERS Load, ERS Generator]
kind: product
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
links:
  - to: eea
    type: related
    note: ERS exists to help prevent or alleviate an actual or anticipated EEA event, so read the EEA topic for the emergency levels. [e1]
  - to: qse
    type: prerequisite-of
    note: ERCOT charges each QSE for ERS based on its load ratio share. [e8]
  - to: prc
    type: related
    note: ERCOT may deploy ERS when Physical Responsive Capability falls below 3,000 MW and is not projected to recover within 30 minutes after Non-Spin deployment. [e6]
  - to: load-ratio-share
    type: related
    note: ERS costs are charged to QSEs by load ratio share. [e8]
  - to: ancillary-services
    type: contrasts-with
    note: The protocols state that ERS is not an Ancillary Service. [e2]
  - to: ffss
    type: related
    note: The IMM lists FFSS and ERS together among out-of-market products. [e13][e14]
  - to: imm
    type: related
    note: The IMM reports ERS procurement, deployments and criticism of out-of-market programs. [e9][e11]
evidence:
  - id: e1
    source: puct-25-507
    locator: "16 TAC 25.507(b)"
    quote: "ERCOT must procure ERS, a special emergency response service to be deployed by ERCOT to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Emergency Response Service (ERS)"
    quote: "An emergency service consistent with P.U.C. SUBST. R. 25.507, Electric Reliability Council of Texas (ERCOT) Emergency Response Service (ERS), to be deployed by ERCOT to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event. ERS is not an Ancillary Service."
  - id: e3
    source: puct-25-507
    locator: "16 TAC 25.507(c)(2)"
    quote: "ERS resource -- A resource contracted to provide ERS that meets one of the following descriptions: (A) A load or aggregation of loads; or (B) A dispatchable generator that is not registered with ERCOT as a Generation Resource, or an aggregation of such generators."
  - id: e4
    source: np-03
    locator: "Section 3.14.3.1, Emergency Response Service Procurement, paragraph (1)"
    quote: "ERCOT shall issue Requests for Proposals to procure ERS for each Standard Contract Term. The ERS Standard Contract Terms are as follows: (a) December through March; (b) April and May; (c) June through September; and (d) October and November."
  - id: e5
    source: np-03
    locator: "Section 3.14.3.1, paragraph (2)"
    quote: "ERCOT shall procure ERS from one or more of the four following ERS service types: (a) Weather-Sensitive ERS-10 (b) Non-Weather-Sensitive ERS-10 (c) Weather-Sensitive ERS-30 (d) Non-Weather-Sensitive ERS-30"
  - id: e6
    source: np-06
    locator: "Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (2)"
    quote: "When PRC falls below 3,000 MW and is not projected to be recovered above 3,000 MW within 30 minutes following the deployment of Non-Spin, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message."
  - id: e7
    source: puct-25-507
    locator: "16 TAC 25.507(b)(2)"
    quote: "ERCOT may spend a maximum of $75 million in a 12-month period on ERS, unless otherwise determined by the commission."
  - id: e8
    source: puct-25-507
    locator: "16 TAC 25.507(e)(2)"
    quote: "ERCOT must charge each QSE a charge for ERS based upon its load ratio share during the relevant ERS time period and ERS standard contract term."
  - id: e9
    source: imm-som-2024
    locator: "Reliability Programs, ERS"
    quote: "Industrial and commercial electricity consumers submit offers to provide ERS through a centralized auction, and ERCOT deploys ERS during Energy Emergency Alerts (EEAs) or when Physical Responsive Capability (PRC) falls below 3,000 MW. Since its inception, ERS has been deployed for nine events, most recently in September 2023. For the 2024 program year (December 2023 through November 2024), ERCOT procured an average of 1,147 MW per hour, an 18% increase from 2023, at an average clearing price of $7.36 per MWh, a 5% decrease from the prior year."
  - id: e10
    source: imm-som-2025
    locator: "Executive summary, load growth"
    quote: "By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity."
  - id: e11
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs"
    quote: "they compensate entities outside of the energy and ancillary service markets to provide additional supply or reduce demand during tight conditions. While they are generally motivated by improving reliability, these types of programs will sharply reduce the expected shortage revenues that investors need to justify new dispatchable generation and to retain higher-cost existing generation nearing retirement."
  - id: e13
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Emergency Response Service (ERS). Provides out of market revenue to increase supply or reduce demand curing winter conditions"
  - id: e14
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Firm Fuel Supply Service (FFSS). The FFSS program provides an out-of-market payment for qualifying assets to provide electricity and reserves during anticipated tight winter conditions."
  - id: e12
    source: imm-som-2024
    locator: "Real-time market, RDPA discussion"
    quote: "there were no ERS deployments in 2024, but ERS deployments on September 6, 2023, contributed to reliability pricing over $1,000 per MWh for several intervals, where the RDPA never exceeded $175 per MWh in 2024."
---

## Definition

ERS is a special emergency service that ERCOT procures and deploys to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event. [e1] The protocols define it as an emergency service and state that it is not an Ancillary Service. [e2]

## How it works

An ERS resource is either a load (or an aggregation of loads) or a dispatchable generator that is not registered as a Generation Resource. [e3] ERCOT issues requests for proposals for four standard contract terms (December through March, April and May, June through September, October and November) and buys from four service types: weather-sensitive or non-weather-sensitive, each as ERS-10 or ERS-30. [e4][e5]

Deployment is a late-stage step. When Physical Responsive Capability (PRC) falls below 3,000 MW and is not projected to recover above 3,000 MW within 30 minutes of Non-Spin deployment, ERCOT may deploy contracted ERS-10 and ERS-30 by XML message. [e6] ERCOT may spend at most $75 million in a 12-month period on ERS unless the PUCT decides otherwise, and the cost is charged to QSEs by load ratio share. [e7][e8]

## ERCOT context

The IMM describes ERS as an auction in which industrial and commercial consumers offer to be curtailed, and reports it was deployed for nine events up to September 2023. For the 2024 program year ERCOT procured an average of 1,147 MW per hour at an average clearing price of $7.36 per MWh. [e9] There were no ERS deployments in 2024. [e12] By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity. [e10]

The IMM lists ERS among a group of out-of-market products and argues that such programs compensate entities outside the energy and ancillary service markets, which will sharply reduce the expected shortage revenues that investors need. [e11][e13]

## Key facts

- ERS is not an Ancillary Service; it is deployed to prevent or alleviate an EEA event. [e2]
- Four standard contract terms and four service types (weather-sensitive or not, ERS-10 or ERS-30). [e4][e5]
- Spending cap: $75 million in a 12-month period unless the PUCT decides otherwise. [e7]
- Deployment may follow PRC below 3,000 MW and Non-Spin deployment. [e6]
- 2024 program year: an average of 1,147 MW per hour procured at an average of $7.36 per MWh. [e9]

## Say it like this

ERS is a pay-to-curtail emergency product: ERCOT contracts loads and unregistered dispatchable generators for set contract terms and calls on them late in a tightening event, before or during an EEA. It sits outside the ancillary service market, and the cost is spread to load.

## Common confusion

ERS is not a normal ancillary service, and the protocols say so. [e2] ERCOT calls contracted ERS by XML message, and the cost is charged to QSEs by load ratio share. [e6][e8]

## Questions

### What triggers an ERS deployment?

ERCOT may deploy ERS when PRC is below 3,000 MW and not projected to recover above 3,000 MW within 30 minutes after Non-Spin deployment. [e6] The purpose is to prevent or alleviate an actual or anticipated EEA event. [e1]

### Who pays for ERS?

ERCOT charges each QSE based on its load ratio share during the relevant ERS time period and contract term, within a $75 million 12-month spending cap unless the PUCT decides otherwise. [e8][e7]

### Why does the IMM criticise out-of-market programs like ERS?

The IMM argues programs like ERS compensate entities outside the energy and ancillary service markets to add supply or reduce demand in tight conditions, which will sharply reduce the expected shortage revenues investors need to build or keep dispatchable generation. [e11][e13]

## Open items

- Deeper pass: ERS offer, qualification and performance rules (baselines, payment reductions, self-provision) in Sections 3.14.3.2 to 3.14.3.4 and 8.1.3 of the protocols were not read in detail.
- Deeper pass: pending NPRR1238 would change the deployment paragraph in the protocol; it is not described here.
- Deeper pass: the ERS clearing-price methodology (Attachment Q) and the annual ERS report to the PUCT (due April 15 under 25.507(g)) were not sourced for results.
- The 2025 program-year ERS MW and price were not found in the saved sources; only the 2024 program year is given.
- The IMM 2025 text spells the program "Emergency Reserve Service" in one place; this topic follows the rule and protocol name.
