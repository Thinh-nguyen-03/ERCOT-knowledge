---
id: imm
name: Independent Market Monitor (Potomac Economics)
aliases: [IMM, Independent Market Monitor, market monitor, wholesale electric market monitor, Potomac Economics]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: puct
    type: related
    note: The IMM is the commission's wholesale market monitor and works under PUCT supervision, but enforcement stays with the PUCT. [e4]
  - to: ercot
    type: related
    note: ERCOT contracts for and funds the IMM, but the IMM is an office independent from ERCOT and not supervised by it. [e6][e7]
  - to: state-of-market-report
    type: related
    note: The annual State of the Market report is the IMM's main required report on competitiveness and market design. [e9][e10]
  - to: market-power-mitigation
    type: related
    note: The IMM tests for market power and in its 2025 report again recommended system-wide mitigation. [e12]
  - to: energy-only-market
    type: related
    note: The IMM often judges proposals by whether they weaken the price signals of ERCOT's energy-only design. [e14]
  - to: nprr
    type: affects
    note: The IMM analyzes proposed rule changes for manipulation opportunities and inefficiencies and comments on them. [e3]
  - to: resource-adequacy
    type: related
    note: Under the reliability standard rule, the IMM must independently review ERCOT's proposed market design fixes and their costs. [e13]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Independent Market Monitor (IMM)"
    quote: "The Entity selected to monitor the wholesale electric market pursuant to the Public Utility Regulatory Act (PURA), TEX. UTIL. CODE ANN. § 39.1515 (Vernon 1998 & Supp. 2007) and P.U.C SUBST. R. 25.365, Independent Market Monitor."
  - id: e2
    source: pura-39
    locator: "PURA §39.1515(a), Wholesale Electric Market Monitor"
    quote: "An independent organization certified under Section 39.151 shall contract with an entity selected by the commission to act as the commission's wholesale electric market monitor to detect and prevent market manipulation strategies, recommend measures to enhance the efficiency of the wholesale market, and provide independent analysis of any material changes proposed to the wholesale market.  The commission may not restrict the market monitor from appearing or speaking before or providing analysis to the legislature."
  - id: e3
    source: puct-25-365
    locator: "16 TAC §25.365(c), Objectives of market monitoring"
    quote: "The IMM shall monitor wholesale market activities so as to: (1) Detect and prevent market manipulation strategies and market power abuses; and (2) Evaluate the operations of the wholesale market and the current market rules and proposed changes to the market rules, and recommend measures to enhance market efficiency."
  - id: e4
    source: puct-25-365
    locator: "16 TAC §25.365(e)(1), Authority of the IMM"
    quote: "The IMM has the authority to conduct monitoring, analysis, reporting, and related activities but has no enforcement authority."
  - id: e5
    source: puct-25-365
    locator: "16 TAC §25.365(e)(3), Authority of the IMM"
    quote: "The IMM has the authority to require submission of any information and data it considers necessary to fulfill its monitoring and investigative responsibilities by ERCOT and by market participants. Market participants and ERCOT shall provide complete, accurate, and timely responses to all IMM requests for documents, data, information, and other materials."
  - id: e6
    source: puct-25-365
    locator: "16 TAC §25.365(f), Selection of the IMM"
    quote: "ERCOT and the commission shall contract with an entity selected by the commission to act as the commission's wholesale market monitor. The IMM shall be established as an office independent from ERCOT, and is not subject to the supervision of ERCOT with respect to its monitoring and investigative activities."
  - id: e7
    source: puct-25-365
    locator: "16 TAC §25.365(g)(1), Funding of the IMM"
    quote: "ERCOT shall fund the operations of the IMM using money from the rate authorized by PURA §39.151."
  - id: e8
    source: pura-39
    locator: "PURA §39.1515(f)"
    quote: "The market monitor immediately shall report in writing directly to the commission and commission staff all potential market manipulations and all discovered or potential violations of commission rules or rules of the independent organization."
  - id: e9
    source: puct-25-365
    locator: "16 TAC §25.365(k)(2), Reporting requirement"
    quote: "An annual report on the state of the market, which will include an assessment of the competitiveness of the market; an assessment of the efficiency of ERCOT's management of the balancing energy, ancillary services, and congestion rights markets; an evaluation of the effectiveness of congestion management by ERCOT; an evaluation of whether there are inappropriate incentives, flaws, inefficiencies, and opportunities for manipulation in the market design; and any recommendations for improving the market design; and"
  - id: e10
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, first paragraph"
    quote: "In our role as the Independent Market Monitor (IMM), Potomac Economics provides this 2025 State of the Market Report to the Public Utility Commission of Texas (PUCT). This report presents our assessment of the outcomes of the wholesale electricity market in the Electric Reliability Council of Texas (ERCOT). We also recommend changes to improve the competitive performance and operation of the ERCOT markets."
  - id: e11
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Competition and Market Power"
    quote: "The percentage of top-quartile net load hours with a pivotal supplier declined from over 90% in 2022 to 35% in 2025. This positive development is due in large part to milder weather and a large influx of energy storage resources held by smaller participants."
  - id: e12
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Competition and Market Power"
    quote: "Despite the positive evidence of competitive conditions in the ERCOT market, we continue to recommend system-wide market power mitigation. With extreme projected load growth in the ERCOT footprint, the market could become structurally uncompetitive during high-load periods within a few years."
  - id: e13
    source: puct-25-508
    locator: "16 TAC §25.508(c)(3)(C)(ii), Commission review and determination"
    quote: "the independent market monitor must conduct an independent review of ERCOT's proposed recommended market design changes, including associated expected system costs for each proposed recommended change, and file its review no later than the deadline established in subparagraph (B) of this paragraph;"
  - id: e14
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary (demand response)"
    quote: "ERCOT proposed a residential demand response program through NPRR 1296 that we find will undermine ERCOT's energy only market and its economic signals."
---

## Definition

The Independent Market Monitor (IMM) is the entity selected to monitor ERCOT's wholesale electric market under PURA §39.1515 and PUCT rule 25.365. [e1] Potomac Economics fills this role and files the annual State of the Market report with the PUCT. [e10]

## How it works

ERCOT must contract with an entity the PUCT selects to act as the commission's wholesale electric market monitor. The monitor's statutory jobs are to detect and prevent market manipulation, recommend ways to make the wholesale market more efficient, and give independent analysis of material proposed market changes. The PUCT may not stop the monitor from speaking to or advising the Legislature. [e2]

The PUCT rule sets two objectives: detect and prevent manipulation and market power abuse, and evaluate the market's operations, current rules and proposed rule changes, with recommendations to improve efficiency. [e3] To do this, the IMM can require ERCOT and market participants to submit any information it considers necessary, and they must respond completely, accurately and on time. [e5]

The IMM has no enforcement power. Its authority covers monitoring, analysis and reporting. [e4] It must report all potential market manipulation and all discovered or potential rule violations in writing, directly to the commission and its staff, and the commission decides on enforcement. [e8]

Its required reporting includes an annual State of the Market report. That report assesses competitiveness, how efficiently ERCOT manages the energy, ancillary service and congestion rights markets, and how effective its congestion management is. It also looks for flaws, inefficiencies and manipulation opportunities in the market design, and recommends improvements. [e9]

## ERCOT context

The IMM's independence is structural. It is an office independent from ERCOT and is not supervised by ERCOT in its monitoring and investigations, even though ERCOT contracts for it [e6] and funds it from the fee authorized under PURA §39.151. [e7]

The IMM also has a formal role in resource adequacy. If ERCOT's reliability assessment shows the system failing the reliability standard, the IMM must independently review ERCOT's proposed market design changes and their expected costs. [e13]

In its 2025 report the IMM found the share of top-quartile net load hours with a pivotal supplier had fallen from over 90% in 2022 to 35% in 2025. It credited milder weather and a large influx of storage held by smaller participants. [e11] Even so, it again recommended system-wide market power mitigation, warning that load growth could make the market structurally uncompetitive at high load within a few years. [e12] It also argued that the NPRR 1296 residential demand response proposal would undermine ERCOT's energy-only market and its price signals. [e14]

## Key facts

- Legal basis: PURA §39.1515 and PUCT rule 25.365. [e1]
- No enforcement authority. Monitoring, analysis and reporting only. [e4]
- Reports potential manipulation and rule violations directly to the commission in writing, immediately. [e8]
- Funded by ERCOT out of the fee authorized under PURA §39.151, but not supervised by ERCOT. [e7][e6]
- Pivotal-supplier hours (top-quartile net load) fell from over 90% in 2022 to 35% in 2025, per the 2025 SOM. [e11]
- Required to review ERCOT's proposed market design fixes if the system fails the reliability standard. [e13]

## Say it like this

(Guidance) The IMM, Potomac Economics, is the PUCT's independent market watchdog. It has full access to ERCOT data and can demand information from participants, but it cannot penalize anyone: it reports to the commission, which enforces. Its State of the Market report is the best single read on how the market performed and where the monitor thinks the design is broken.

## Common confusion

(Guidance) The IMM is not part of ERCOT and is not the enforcer. ERCOT funds the IMM but does not supervise its monitoring. [e6][e7] Penalties come from the PUCT. [e4] Also, the IMM's recommendations are not rules. They carry weight with the PUCT, but they only take effect if the commission or ERCOT adopts them.

## Questions

### Can the IMM fine a generator for economic withholding?

No. The IMM has no enforcement authority. [e4] It must report potential manipulation and violations to the commission in writing, and enforcement is up to the commission. [e8]

### How is the IMM kept independent if ERCOT pays for it?

The rule makes the IMM an office independent from ERCOT that is not subject to ERCOT's supervision for monitoring and investigations, even though ERCOT funds it from the fee authorized under §39.151. [e6][e7] The PUCT also cannot restrict the monitor from speaking to the Legislature. [e2]

### What did the IMM conclude about competition in 2025?

Pivotal-supplier conditions in top-quartile net load hours fell to 35% in 2025, down from over 90% in 2022. Despite that, the IMM still recommends system-wide market power mitigation because of projected load growth. [e11][e12]

## Scenarios

### ERCOT proposes a new paid demand response program. What should a market analyst expect from the IMM?

- An assessment of how the program affects price formation. In 2025 the IMM said NPRR 1296 would undermine the energy-only market and its economic signals. [e14]
- The IMM's role is to analyze proposed rule changes and recommend efficiency improvements, so its comments feed the PUCT's decision but do not bind it. [e3][e4]

## Open items

- No saved source says when Potomac Economics was first selected as the ERCOT IMM, or the length of its contract.
- 25.365 also covers IMM ethics standards, staff qualifications and liability. These are not summarized here.
- PURA §39.1594 gives the market monitor roles in any capacity-credit reliability program. That belongs in the PCM topic.
