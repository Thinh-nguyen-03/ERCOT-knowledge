---
id: imm
name: Independent Market Monitor (Potomac Economics)
aliases: [IMM, Independent Market Monitor, market monitor, wholesale electric market monitor, Potomac Economics]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: puct
    type: related
    note: The IMM is the commission's wholesale market monitor and works under PUCT supervision, but enforcement stays with the PUCT. [e15]
  - to: ercot
    type: related
    note: ERCOT contracts for and funds the IMM, but the IMM is an office independent from ERCOT and not supervised by it, and ERCOT may not substantially modify its contract without a majority of commissioners. [e6][e7][e16]
  - to: state-of-market-report
    type: related
    note: PURA requires an annual IMM report identifying market design flaws, which the PUCT and ERCOT must review. [e18][e9][e10]
  - to: market-power-mitigation
    type: related
    note: The IMM monitors for market power abuse and in its 2025 report again recommended system-wide mitigation. [e3][e12]
  - to: energy-only-market
    type: related
    note: The IMM argues that programs pricing services outside the market suppress the shortage pricing an energy-only market needs. [e14][e30]
  - to: nprr
    type: affects
    note: The IMM files comments on revision requests, such as its February 2026 qualified support for NPRR1309. [e3][e27]
  - to: drrs
    type: related
    note: The IMM wants DRRS kept as a reserve product, not a resource adequacy tool, and opposes it if it adds to excessive reserve procurement. [e27][e28]
  - to: pcm
    type: related
    note: PURA gives the market monitor evaluation and investigation duties in any capacity-credit program, and the IMM estimated the PCM's net cost at about $1 billion a year in the short term. [e24][e25][e26]
  - to: resource-adequacy
    type: related
    note: Under the reliability standard rule, if ERCOT's assessment shows a reviewed system fails the standard, the IMM must independently review ERCOT's proposed market design changes and their expected costs. [e13]
  - to: uri-repricing
    type: related
    note: On March 1, 2021 the IMM recommended repricing February 15-20 day-ahead ancillary service prices to cap them at the $9,000 SWCAP. [e32]
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
    locator: "16 TAC §25.508(c)(3)(C)(i)-(ii), Commission review and determination"
    quote: "If the assessment shows that any reviewed system fails to meet the reliability standard described in subsection (b) of this section: (i) ERCOT must provide the commission with a summary explanation of any identified deficiencies and its supporting analysis. ERCOT must also provide the commission with a menu of proposed recommended market design changes, including a primary recommendation, that are intended to address the identified deficiencies. ERCOT must provide the commission with the expected system costs associated with each of its proposed recommended changes; (ii) the independent market monitor must conduct an independent review of ERCOT's proposed recommended market design changes, including associated expected system costs for each proposed recommended change, and file its review no later than the deadline established in subparagraph (B) of this paragraph;"
  - id: e14
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary (demand response)"
    quote: "ERCOT proposed a residential demand response program through NPRR 1296 that we find will undermine ERCOT's energy only market and its economic signals."
  - id: e15
    source: pura-39
    locator: "PURA §39.1515(d), Wholesale Electric Market Monitor"
    quote: "The market monitor shall operate under the supervision and oversight of the commission.  The commission shall retain all enforcement authority conferred under this title, and this section may not be construed to confer enforcement authority on the market monitor or to authorize the commission to delegate the commission's enforcement authority to the market monitor."
  - id: e16
    source: pura-39
    locator: "PURA §39.1515(a)-(b)"
    quote: "The independent organization may not substantially modify the market monitor's contract unless the modification is approved by a majority of the commissioners.(b)  The independent organization shall provide to the personnel of the market monitor:(1)  full access to the organization's main operations center and the organization's records that concern operations, settlement, and reliability; and(2)  other support and cooperation the commission determines is necessary for the market monitor to perform the market monitor's functions."
  - id: e17
    source: pura-39
    locator: "PURA §39.1515(e)"
    quote: "Rules governing ethical standards must include provisions designed to ensure that the personnel of the market monitor are professionally and financially independent from market participants.  The commission shall develop and implement policies that clearly separate the policymaking responsibilities of the commission and the monitoring, analysis, and reporting responsibilities of the market monitor."
  - id: e18
    source: pura-39
    locator: "PURA §39.1515(h)"
    quote: "(h)  The market monitor annually shall submit to the commission and the independent organization a report that identifies market design flaws and recommends methods to correct the flaws.  The commission and the independent organization shall review the report and evaluate whether changes to rules of the commission or the independent organization should be made."
  - id: e19
    source: pura-39
    locator: "PURA §39.1515, history note"
    quote: "Added by Acts 2005, 79th Leg., Ch. 797 (S.B. 408), Sec. 10, eff. September 1, 2005."
  - id: e20
    source: puct-25-365
    locator: "16 TAC §25.365(k), Reporting requirement"
    quote: "All reports prepared by the IMM shall reflect the IMM's independent analysis, findings, and expertise. The IMM shall provide periodic updates to market participants regarding the operation of the ERCOT wholesale market. In addition, the IMM shall prepare and submit to the commission the following reports: (1) Daily, monthly, and quarterly reports on prices and congestion;"
  - id: e21
    source: puct-25-365
    locator: "16 TAC §25.365(i)(1)(A)-(B), Ethics standards"
    quote: "During the period of a person's service with the IMM, the IMM director and an IMM employee shall not: (A) have a professional or financial interest in a market participant or an affiliate of a market participant; or own shares in a company that provides consulting services to a market participant; (B) serve as an officer, director, partner, owner, employee, attorney, or consultant for ERCOT or a market participant or an affiliate of a market participant;"
  - id: e22
    source: np-17
    locator: "Nodal Protocols Section 17.1, Overview"
    quote: "The Public Utility Commission of Texas (PUCT), with the assistance of the Independent Market Monitor (IMM) established in accordance with PUCT rules, has the ultimate responsibility for market oversight in ERCOT. ERCOT shall assist the PUCT and the IMM by performing the data collection functions specified in this Section."
  - id: e23
    source: np-17
    locator: "Nodal Protocols Section 17.3.1, Information System Data Collection and Retention"
    quote: "Data from source systems must be replicated near Real-Time and available for remote query by the PUCT Staff and the IMM until data is available in the Data Archive and Data Warehouse. The Data Warehouse and Data Archive must be designed to accommodate a remote query function by the PUCT Staff and the IMM at any time."
  - id: e24
    source: pura-39
    locator: "PURA §39.1594(a)(14) and (b), Reliability Program"
    quote: "(14)  the wholesale electric market monitor has the authority and necessary resources to investigate potential instances of market manipulation by program participants, including financial and physical actions, and recommend penalties to the commission.(b)  This section does not require the commission to adopt a reliability program that requires an entity to purchase capacity credits."
  - id: e25
    source: pura-39
    locator: "PURA §39.1594(f), Reliability Program"
    quote: "(f)  If the commission adopts a program described by Subsection (a), the wholesale electric market monitor described by Section 39.1515 biennially shall:(1)  evaluate the incremental reliability benefits of the program for consumers compared to the costs to consumers of the program and the costs in the energy and ancillary services markets; and(2)  report the results of each evaluation to the legislature."
  - id: e26
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project No. 55000 (December 13, 2024), Review of IMM Assessment, conclusion 1"
    quote: "1. The net costs of PCM in the short term are likely to be $1 billion per year because the IMM suggested the cost cap provision is likely to bind."
  - id: e27
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), introduction"
    quote: "NPRR1309 is the successor to NPRR1235, Dispatchable Reliability Reserve Service as a Stand-Alone Ancillary Service, which was the previous DRRS proposal sponsored by ERCOT. We commend ERCOT for addressing our major concerns with the NPRR1235 proposal and are pleased to offer our qualified support for NPRR1309."
  - id: e28
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments on NPRR1309 (February 3, 2026), section 3"
    quote: "We do not support NPRR1309 if it is only going to further exacerbate ERCOT's excessive procurement of operating reserves and the resulting interference with effective price formation."
  - id: e29
    source: imm-board-2026-02
    locator: "IMM report to ERCOT Board Reliability and Markets Committee (February 9-10, 2026), slide 2 'Non-Spinning Reserve Pricing in RTC'"
    quote: "The RTM clears surplus NSRS yet is producing a shortage price. • Is frequently clearing at price > other reserves. • Difficult to estimate annual excess cost due to potential seasonal effects. • Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well)."
  - id: e30
    source: imm-board-2026-02
    locator: "IMM report to ERCOT Board Reliability and Markets Committee (February 9-10, 2026), slide 4 'Notes on RA Through Markets'"
    quote: "There has been a pattern of considering programs that price services outside the market (e.g. FFSS, ERS, RDR, Fwd Capacity Procurement). • These programs suppress price which inhibits the market's ability to signal relative shortage and incent new investment."
  - id: e31
    source: imm-som-tac-2026-07
    locator: "IMM overview of the 2025 SOM to ERCOT TAC (August 13, 2026), slide 10"
    quote: "Since Winter Storm Uri, ERCOT has established a \"conservative operations\" policy to maintain a high level of reserves on the grid at all times"
  - id: e32
    source: imm-uri-letter-1
    locator: "IMM letter to PUCT, Project 51812 item 34 (March 1, 2021), Recommendation 1"
    quote: "Recommendation 1: For operating days February 15 through February 20, 2021, reprice all day-ahead ancillary services (AS) clearing prices to cap them at the System-Wide Offer Cap (SWCAP) of $9,000 per MWh."
  - id: e33
    source: ercot-nodal-guiding-principles
    locator: "Guiding Principles of the Nodal Market (non-binding), Guiding Principles list"
    quote: "Address recommendations of the Independent Market Monitor (IMM), PUCT or ERCOT Board"
  - id: e34
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary, Introduction"
    quote: "This report reviews and evaluates the outcomes of the ERCOT wholesale electricity markets in 2010, and is submitted to the Public Utility Commission of Texas (\"PUCT\") and the Electric Reliability Council of Texas (\"ERCOT\") pursuant to the requirement in Section 39.1515(h) of the Public Utility Regulatory Act."
---

## Definition

The Independent Market Monitor (IMM) is the entity selected to monitor ERCOT's wholesale electric market under PURA §39.1515 and PUCT rule 25.365. [e1] Potomac Economics fills this role and files the annual State of the Market report with the PUCT. [e10]

## How it works

ERCOT must contract with an entity the PUCT selects to act as the commission's wholesale electric market monitor. The monitor's statutory jobs are to detect and prevent market manipulation, recommend ways to make the wholesale market more efficient, and give independent analysis of material proposed market changes. The PUCT may not stop the monitor from speaking to or advising the Legislature. [e2]

The PUCT rule sets two objectives: detect and prevent manipulation and market power abuse, and evaluate the market's operations, current rules and proposed rule changes, with recommendations to improve efficiency. [e3] To do this, the IMM can require ERCOT and market participants to submit any information it considers necessary, and they must respond completely, accurately and on time. [e5] ERCOT must give the IMM's staff full access to its main operations center and its operations, settlement and reliability records. [e16] The Protocols put the PUCT, assisted by the IMM, in charge of market oversight, with ERCOT doing the data collection; source-system data must be replicated near real time for remote query by PUCT staff and the IMM. [e22][e23]

The IMM has no enforcement power. Its authority covers monitoring, analysis and reporting. [e4] It must report all potential market manipulation and all discovered or potential rule violations in writing, directly to the commission and its staff. [e8] The commission retains all enforcement authority. [e15]

Its required reporting includes daily, monthly and quarterly reports on prices and congestion, periodic updates to market participants, and an annual State of the Market report, all of which must reflect the IMM's independent analysis. [e20] The annual report assesses competitiveness, how efficiently ERCOT manages the balancing energy, ancillary service and congestion rights markets, and how effective its congestion management is. It also looks for flaws, inefficiencies and manipulation opportunities in the market design, and recommends improvements. [e9] PURA adds that the PUCT and ERCOT must review the annual report and evaluate whether their rules should change. [e18]

## ERCOT context

The IMM's independence is structural. It is an office independent from ERCOT and is not supervised by ERCOT in its monitoring and investigations, even though ERCOT contracts for it [e6] and funds it from the fee authorized under PURA §39.151. [e7] ERCOT cannot substantially modify the IMM's contract without approval from a majority of the commissioners. [e16] The PUCT's ethics rules must keep IMM staff professionally and financially independent from market participants, and the PUCT must keep its own policymaking separate from the IMM's monitoring role. [e17] While serving, the IMM director and staff may not hold an interest in, or work for, ERCOT or a market participant. [e21]

The IMM also has formal roles in resource adequacy. If ERCOT's assessment shows a reviewed system failing the reliability standard, the IMM must independently review ERCOT's proposed market design changes and their expected costs. [e13] If the PUCT ever adopts a capacity-credit program under PURA §39.1594, the monitor must have authority to investigate manipulation by program participants and recommend penalties, and must evaluate the program's reliability benefits against its costs every two years and report to the Legislature. [e24][e25] In its December 2024 assessment of the PCM, as summarized by PUCT staff, the IMM expected net costs of about $1 billion a year in the short term because the cost cap would likely bind. [e26]

In practice the IMM weighs in on proposed changes in several forums: revision request comments, Board and TAC presentations, its annual report and letters to the PUCT. Some examples from the saved sources: [e27][e29][e31][e14][e32]

- On NPRR1309 (DRRS), in February 2026 it offered qualified support, crediting ERCOT with addressing its concerns about the earlier NPRR1235, but said it would not support NPRR1309 if it only added to excessive reserve procurement. [e27][e28]
- At the ERCOT Board's Reliability and Markets Committee in February 2026, it said the real-time market was clearing surplus Non-Spin yet producing a shortage price, and recommended stopping the ASDC at the AS Plan and then reformulating the ASDCs. [e29]
- At TAC in August 2026, it criticized ERCOT's "conservative operations" policy since Uri of keeping a high level of reserves at all times. [e31]
- In its 2025 report it argued that the NPRR 1296 residential demand response proposal would undermine ERCOT's energy-only market and its price signals. [e14]
- On March 1, 2021, after Uri, it recommended that the PUCT reprice February 15-20 day-ahead ancillary service prices to cap them at the $9,000 SWCAP. [e32]

ERCOT's own non-binding guiding principles for the nodal market list addressing IMM, PUCT or Board recommendations as a goal a revision request should strive for. [e33]

On competition, the IMM's 2025 report found the share of top-quartile net load hours with a pivotal supplier had fallen from over 90% in 2022 to 35% in 2025. It credited milder weather and a large influx of storage held by smaller participants. [e11] Even so, it again recommended system-wide market power mitigation, warning that load growth could make the market structurally uncompetitive at high load within a few years. [e12]

## Timeline

- September 1, 2005: PURA §39.1515 (wholesale electric market monitor) took effect, added by S.B. 408. [e19]
- 2010: the IMM's State of the Market report was submitted under PURA §39.1515(h). [e34]
- March 1, 2021: IMM letter recommending repricing of Uri-period day-ahead ancillary service prices. [e32]
- December 2024: IMM assessment of the PCM summarized by PUCT staff. [e26]
- February 2026: IMM comments on NPRR1309 and report to the Board's Reliability and Markets Committee. [e27][e29]
- August 13, 2026: IMM presentation of its 2025 State of the Market report to TAC. [e31]

## Key facts

- Legal basis: PURA §39.1515 (in effect since September 1, 2005) and PUCT rule 25.365. [e1][e19]
- No enforcement authority. Monitoring, analysis and reporting only. [e4]
- Reports potential manipulation and rule violations directly to the commission in writing, immediately. [e8]
- Funded by ERCOT out of the fee authorized under PURA §39.151, but not supervised by ERCOT; contract changes need a majority of commissioners. [e7][e6][e16]
- Reports: daily, monthly and quarterly price and congestion reports, plus the annual State of the Market report. [e20][e9]
- Pivotal-supplier hours (top-quartile net load) fell from over 90% in 2022 to 35% in 2025, per the 2025 SOM. [e11]
- Required to review ERCOT's proposed market design fixes if the system fails the reliability standard. [e13]

## Say it like this

(Guidance) The IMM, Potomac Economics, is the PUCT's independent market watchdog. It can demand information from ERCOT and participants, but it cannot penalize anyone: it reports to the commission, which enforces. Its State of the Market report is the best single read on how the market performed and where the monitor thinks the design is broken.

(Guidance) When you quote the IMM, say it is the IMM's view. Its positions (against over-procured reserves, out-of-market programs and the PCM; for system-wide mitigation) are recommendations, and ERCOT and the PUCT often take a different line.

## Common confusion

(Guidance) The IMM is not part of ERCOT and is not the enforcer. ERCOT funds the IMM but does not supervise its monitoring. [e6][e7] Penalties come from the PUCT, which retains all enforcement authority. [e15] Also, the IMM recommends measures to enhance market efficiency but has no authority to enforce them. [e3][e4]

(Guidance) The IMM's annual report is not only a statistics report. By statute it must identify market design flaws and recommend fixes, so much of it is argument. [e18]

## Questions

### Can the IMM fine a generator for economic withholding?

No. The IMM has no enforcement authority. [e4] It must report potential manipulation and violations to the commission in writing, and the commission retains all enforcement authority. [e8][e15]

### How is the IMM kept independent if ERCOT pays for it?

The rule makes the IMM an office independent from ERCOT that is not subject to ERCOT's supervision for monitoring and investigations, even though ERCOT funds it from the fee authorized under §39.151. [e6][e7] ERCOT cannot substantially change the IMM's contract without a majority of commissioners, and the PUCT cannot restrict the monitor from speaking to the Legislature. [e16][e2]

### What did the IMM conclude about competition in 2025?

Pivotal-supplier conditions in top-quartile net load hours fell to 35% in 2025, down from over 90% in 2022. Despite that, the IMM still recommends system-wide market power mitigation because of projected load growth. [e11][e12]

### Why does the IMM keep criticizing ERCOT's reserve procurement?

Because it sees over-procurement as suppressing prices. It told the Board in February 2026 that programs pricing services outside the market suppress the market's ability to signal shortage and attract investment, and its NPRR1309 comments object to anything that adds to excessive reserve procurement. [e30][e28]

### What if ERCOT's 2026 reliability assessment shows the system fails the standard?

ERCOT must give the PUCT a menu of market design changes with a primary recommendation and their expected costs, and the IMM must file an independent review of those proposals and costs. [e13]

### Where does an analyst find the IMM's views besides the annual report?

In its daily, monthly and quarterly price and congestion reports, and in its comments on revision requests and presentations to the ERCOT Board and TAC. [e20][e27][e29][e31]

## Scenarios

### ERCOT proposes a new paid demand response program. What should a market analyst expect from the IMM?

- An assessment of how the program affects price formation. In its 2025 State of the Market report the IMM said NPRR 1296 would undermine the energy-only market and its economic signals. [e14]
- The IMM's role is to analyze proposed rule changes and recommend efficiency improvements, so its comments feed the PUCT's decision but do not bind it. [e3][e4]

### A trader spots a suspicious pattern of offers by a competitor. Who acts?

- The IMM can question the participant and require data, but it cannot penalize. [e5][e4]
- It must report potential manipulation in writing to the commission, which holds enforcement authority. [e8][e15]

## Open items

- No saved source says when Potomac Economics was first selected as the ERCOT IMM, or the length of its contract.
- 25.365 also covers IMM staff qualifications, confidentiality and liability. These are not summarized here.
- The PUCT's final decision on the IMM's NPRR1309 and ASDC recommendations is not in the saved sources used here.
- The IMM's budget and staffing level are not in the saved sources.
