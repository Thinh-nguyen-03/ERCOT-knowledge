---
id: resource-adequacy
name: Resource Adequacy
aliases: [resource adequacy, RA, reliability standard, planning reserve margin, LOLE]
kind: concept
domain: reliability
level: 1
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: cdr-report
    type: measures
    note: The December 2025 CDR reports Planning Reserve Margins; the PUCT rule requires an annual resource adequacy report covering at least five years. [e8][e9][e7]
  - to: mora-report
    type: measures
    note: The MORA reports the hour with the highest EEA risk and its probability. [e15]
  - to: energy-only-market
    type: related
    note: In ERCOT's energy-only market, shortage pricing is the main revenue signal for new investment. [e2]
  - to: asdc
    type: affects
    note: Since RTC, the ASDCs define shortage pricing, and shortage pricing is the primary investment signal in ERCOT's energy-only market. [e12][e2]
  - to: texas-energy-fund
    type: affects
    note: The December 2025 CDR's bookend reserve margin scenarios vary the amount and timing of TEF project capacity. [e10]
  - to: large-load-growth
    type: affects
    note: The December 2025 CDR scenarios vary large-load size and SB 6 curtailment assumptions, which move the reserve margin outlook. [e10]
  - to: prc
    type: measures
    note: The IMM reports PRC as an operating reserve margin and says no hours below 3,000 MW have been observed since 2023. [e11]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Resource Adequacy chapter, A. Summary (p. 97)"
    quote: "It refers to the availability of sufficient generation and demand-side resources to meet expected electricity demand and ancillary services under normal and extreme conditions."
  - id: e2
    source: imm-som-2025
    locator: "Resource Adequacy chapter, B. Background (p. 98)"
    quote: "In ERCOT’s energy-only market, shortage pricing is the primary mechanism that drives revenue and signals investment decisions."
  - id: e3
    source: puct-25-508
    locator: "16 TAC §25.508(b)(1)-(2)"
    quote: "Frequency. The expected loss of load events for the ERCOT region must be equal to or less than one event per ten years on average, i.e., 0.1 loss of load expectation (LOLE). (2) Duration. The maximum expected length of a loss of load event for the ERCOT region, measured in hours, must be less than 12 hours, with a 1.00 percent exceedance tolerance. (3) Magnitude. The expected highest level of load shed during a loss of load event for the ERCOT region, measured as the average lost load for a given hour, must be less than the maximum number of megawatts of load shed that can be safely rotated during a loss of load event, as determined by ERCOT, in consultation with commission staff and the transmission operators, with a 1.00 percent exceedance tolerance."
  - id: e4
    source: puct-25-508
    locator: "16 TAC §25.508(c)"
    quote: "Beginning January 1, 2026, ERCOT must initiate an assessment to determine whether the bulk power system for the ERCOT region is meeting the reliability standard and is likely to continue to meet the reliability standard for the three years following the date of assessment. The assessment must be conducted at least once every three years."
  - id: e5
    source: puct-25-508
    locator: "16 TAC §25.508(c)(3)(C)(i)"
    quote: "ERCOT must also provide the commission with a menu of proposed recommended market design changes, including a primary recommendation, that are intended to address the identified deficiencies."
  - id: e6
    source: imm-som-2025
    locator: "Resource Adequacy chapter, F.3 2026 Reliability Standard Assessment (p. 105)"
    quote: "The RSA schedule requires ERCOT to file its reliability assessment results in August 2026, along with market design options if the model outputs suggest that ERCOT is unlikely to meet the reliability standard in 2029."
  - id: e7
    source: puct-25-505
    locator: "16 TAC §25.505(b)"
    quote: "ERCOT must publish a resource adequacy report by December 31 of each year that projects, for at least the next five years, the capability of existing and planned electric generation resources and load resources to reliably meet the projected system demand in the ERCOT power region."
  - id: e8
    source: ercot-cdr-2025-12
    locator: "CDR Report Background"
    quote: "The Planning Reserve Margin represents the percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply."
  - id: e9
    source: ercot-cdr-2025-12
    locator: "CDR - Findings & Discussion, Overview"
    quote: >-
      The base scenario in this CDR—using "Protocol Prescribed" capacity resources and the ERCOT Adjusted Load Forecast—indicates
      that summer and winter Planning Reserve Margins for 2026 through 2030 decrease significantly from year to year, and cross over to
      negative values in 2028 in line with the trends reported in the May 2025 CDR. The base scenario's summer 2026 Planning Reserve
      Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour
      (Hour Ending 9:00 p.m. CST).
  - id: e10
    source: ercot-cdr-2025-12
    locator: "CDR - Findings & Discussion, Overview"
    quote: "In addition to capturing potential Large Load curtailment impacts resulting from Texas Senate Bill 6 provisions, two of the three scenarios define reserve margin bookends by varying the magnitude of Large Loads along with the amount and timing of Texas Energy Fund (TEF) project capacity reflected in the ERCOT interconnection queue."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.F, Operating Reserve Margin"
    quote: "In 2025, PRC was below 6,500 MW for only 102 hours. The frequency of PRC below 3,000 MW also dropped sharply. It averaged 82 hours from 2016 through 2021, but no such hours have been observed since 2023."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 48)"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, D.1 Updates to CONE (p. 102)"
    quote: "In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold."
  - id: e14
    source: imm-som-2025
    locator: "Resource Adequacy chapter, D.2 CONE vs Net Revenue (p. 103)"
    quote: "Net revenues for a CT were $52.59 per kW-year and $82.96 per kW-year for a CC generator. Comparing 2025 net revenues with the planning CONE of $140 per kW-year, set by the PUCT, shows that 2025 net revenues were not high enough to incentivize new investment."
  - id: e15
    source: ercot-mora-2027-01
    locator: "Monthly Outlook, Risk Outlook Highlights"
    quote: "The hour with the highest EEA risk is Hour Ending (HE) 8:00 a.m. Central Standard Time (CST), with a 3.20% probability that ERCOT would need to declare an EEA."
  - id: e16
    source: imm-som-2025
    locator: "Resource Adequacy chapter, F.4 Additional Notes on the RSA (p. 106)"
    quote: "As we have previously noted, meeting the reliability standard defined in 16 TAC §25.508 through price signals alone would imply an operational VOLL that is extraordinarily high for an energy-only market like ERCOT’s."
  - id: e17
    source: imm-som-2025
    locator: "Resource Adequacy chapter, D.2 CONE vs Net Revenue (p. 103)"
    quote: "More importantly, years like 2024 and 2025 occur often and are not a threat to resource adequacy because one should expect tighter conditions to occur in other years that can produce revenues substantially above CONE. The years 2021 and 2023 are such examples."
---

## Definition

Resource adequacy means having enough generation and demand-side resources to meet expected demand and ancillary services under both normal and extreme conditions. [e1] In ERCOT's energy-only market, shortage pricing is the main mechanism that pays for capacity and signals when to invest. [e2]

## How it works

ERCOT has a formal reliability standard. Expected loss-of-load events for the ERCOT region must average no more than one per ten years (0.1 LOLE). The longest expected event must be under 12 hours, with a 1.00% exceedance tolerance, and the expected highest level of load shed in an event must be less than the maximum amount ERCOT determines can be safely rotated, also with a 1.00% exceedance tolerance. [e3] Starting January 1, 2026, ERCOT must assess at least every three years whether the system meets the standard and is likely to keep meeting it for the next three years. [e4] If it does not, ERCOT must give the Commission a menu of market design changes, including a primary recommendation. [e5]

The market signal comes from scarcity prices. Since RTC, sloped Ancillary Service Demand Curves define shortage pricing in the day-ahead and real-time markets. [e12] The IMM compares net revenues with the cost of new entry (CONE). [e14] The PUCT approved a planning CONE of $140/kW-year in July 2024 and kept the legacy $105/kW-year for the peaker net margin threshold. [e13]

ERCOT measures adequacy through planning reports. A resource adequacy report covering at least five years must be published by December 31 each year. [e7] The CDR's Planning Reserve Margin is the share of resource capacity above firm demand that is available to cover uncertainty. [e8] The MORA reports the probability that ERCOT would need to declare an EEA in its highest-risk hour. [e15]

## ERCOT context

The planning view and the operating view point in different directions. The December 2025 CDR base scenario shows Planning Reserve Margins falling each year and turning negative in 2028. Summer 2026 starts at 18.3% for the peak load hour and 20.9% for the peak net load hour. [e9] Its alternative scenarios vary SB 6 large-load curtailment, large-load growth, and the amount and timing of Texas Energy Fund capacity. [e10] In real-time operations, however, the IMM reports that PRC was below 6,500 MW for only 102 hours in 2025 and has not fallen below 3,000 MW since 2023. [e11]

Revenues were weak in 2025. Net revenues were $52.59/kW-year for a CT and $82.96/kW-year for a CC, below the $140 planning CONE. [e14] The IMM adds that years like 2024 and 2025 occur often and are not a threat to resource adequacy, because tighter years such as 2021 and 2023 can produce revenues substantially above CONE. [e17] The 2026 Reliability Standard Assessment was scheduled to file results in August 2026, with market design options if ERCOT looked unlikely to meet the standard in 2029. [e6] The IMM warns that meeting the standard through prices alone would need an extraordinarily high operational VOLL. [e16]

## Key facts

- Reliability standard (16 TAC §25.508): 0.1 LOLE; maximum event duration under 12 hours with 1.00% exceedance tolerance; expected highest load shed below the maximum that can be safely rotated. [e3]
- Assessments must start from January 1, 2026 and be repeated at least every three years. [e4]
- December 2025 CDR base case, summer 2026: 18.3% reserve margin at peak load and 20.9% at peak net load, turning negative in 2028. [e9]
- Planning CONE: $140/kW-year (approved July 2024). The PNM threshold still uses $105/kW-year. [e13]
- 2025 net revenue: CT $52.59/kW-year; CC $82.96/kW-year. [e14]
- January 2027 MORA: highest EEA risk is 3.20% at HE 8:00 a.m. CST. [e15]

## Say it like this

(Guidance) ERCOT now has a formal reliability target of one loss-of-load event in ten years and must check every three years whether the market is delivering it. The planning reports show reserve margins falling significantly year to year, while real-time reserves have been ample. That gap is the core of the current resource adequacy debate.

## Common confusion

(Guidance) The CDR's Planning Reserve Margin is a percentage of resource capacity above firm demand, not a measure of real-time scarcity. PRC is the operating-side measure, and the two have pointed in different directions recently. [e8][e11] Also, the "1-in-10" standard is an LOLE target, not a reserve-margin target. [e3]

## Questions

### What is ERCOT's reliability standard?

16 TAC §25.508 requires expected loss-of-load events of no more than one per ten years on average (0.1 LOLE), with the maximum expected event length under 12 hours at a 1.00% exceedance tolerance, and the expected highest load shed in an event below the maximum ERCOT determines can be safely rotated. [e3]

### What happens if ERCOT fails the standard?

ERCOT must give the Commission a menu of market design changes with a primary recommendation. [e5] For the 2026 assessment, results and options were due in August 2026, judged against 2029. [e6]

### Does a negative CDR reserve margin in 2028 mean blackouts are coming?

Not on its own. The CDR base case turns negative in 2028 [e9], but the CDR's scenarios vary large-load curtailment and TEF capacity [e10]. The IMM points to ample operating reserves in 2025 [e11]. Treat it as a planning warning built on the assumptions behind it.

### Were 2025 revenues enough to build new gas plants?

No, according to the IMM. CT and CC net revenues of $52.59 and $82.96 per kW-year were below the $140 planning CONE. [e14] The IMM also says such years are not a threat to resource adequacy, because tighter years such as 2021 and 2023 can produce revenues substantially above CONE. [e17]

## Scenarios

### A client asks whether ERCOT will add a capacity market because reserve margins go negative.

- The formal path is the reliability standard assessment. If ERCOT does not meet the standard, it must propose market design changes. [e5]
- The IMM says meeting the standard through price signals alone would imply an extraordinarily high operational VOLL for an energy-only market. [e16] What ERCOT's market design options will contain is not in the saved sources.

## Open items

- The results of the 2026 Reliability Standard Assessment (due August 2026) and the IMM's September 2026 review are not in the saved sources.
- The PCM (HB 1500's $1 billion net cost cap) and DRRS requirements are in hb1500-88r, but the PDF text has line numbers mixed into the sentences, so no clean verbatim quote could be taken. The same problem affects sb2627-88r (Texas Energy Fund loan terms).
- The maximum MW of load that can be safely rotated (the magnitude criterion, filed yearly since 2024) is not given in the saved sources.
- The IMM says MORA reports implied a roughly 49% minimum annual LOLP for 2025, which it calls "implausibly high". This conflicts with ERCOT's probabilistic outlook. The latest MORA (January 2027) reports a 3.20% peak-hour EEA probability, which is not directly comparable.
- The CDR's ELCC values for wind, solar and storage and the exact capacity numbers per resource type were not extracted (the file is large).
- Whether the Commission treats the reliability standard as binding or aspirational is unresolved. The IMM asks the Commission to clarify.
