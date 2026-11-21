---
id: resource-adequacy
name: Resource Adequacy
aliases: [resource adequacy, RA, reliability standard, planning reserve margin, LOLE]
kind: concept
domain: reliability
level: 1
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: cdr-report
    type: measures
    note: The December 2025 CDR reports Planning Reserve Margins; the PUCT rule requires an annual resource adequacy report covering at least five years. [e8][e9][e7]
  - to: mora-report
    type: measures
    note: The MORA reports the hour with the highest EEA risk and its probability. [e15]
  - to: reliability-standard
    type: measures
    note: 16 TAC §25.508 sets the 0.1 LOLE, duration and magnitude criteria that the triennial assessment tests. [e3][e4]
  - to: energy-only-market
    type: related
    note: In ERCOT's energy-only market, shortage pricing is the main revenue signal for new investment. [e2]
  - to: pcm
    type: related
    note: PUCT staff recommended not moving forward with the PCM as designed, and the Commission adopted that recommendation on December 19, 2024. [e26][e29]
  - to: drrs
    type: related
    note: PURA §39.159(d) requires ERCOT to develop a dispatchable reliability reserve service procured day-ahead and in real time. [e30]
  - to: asdc
    type: affects
    note: Since RTC, the ASDCs define shortage pricing, and shortage pricing is the primary investment signal in ERCOT's energy-only market. [e12][e2]
  - to: peaker-net-margin
    type: related
    note: The PNM threshold still uses the legacy $105/kW-year CONE and has been reached only once, in February 2021. [e13][e44]
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
    locator: "16 TAC §25.508(b)(1)-(3)"
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
    locator: "Chapter II (Demand and Supply in ERCOT), F. Operating Reserve Margin"
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
  - id: e18
    source: puct-25-508
    locator: "16 TAC §25.508(a)(2), definition of Loss of load event"
    quote: "Loss of load event -- an occurrence when the system-wide firm load plus minimum operating reserves required to avoid an energy emergency alert level three event is greater than the available resource capacity to serve that load, resulting in involuntary load shed."
  - id: e19
    source: puct-25-508
    locator: "16 TAC §25.508(b)(3), last sentence"
    quote: "Beginning in 2024, on or before December 1 of each year, ERCOT must file the maximum number of megawatts of load shed that can be safely rotated during a loss of load event and a summary of the methodology used to calculate this value."
  - id: e20
    source: puct-25-508
    locator: "16 TAC §25.508(c)(3)(C)(ii)"
    quote: "the independent market monitor must conduct an independent review of ERCOT’s proposed recommended market design changes, including associated expected system costs for each proposed recommended change, and file its review no later than the deadline established in subparagraph (B) of this paragraph"
  - id: e21
    source: imm-som-2025
    locator: "Resource Adequacy chapter, F.3 2026 Reliability Standard Assessment (p. 105)"
    quote: "The 2026 RSA has already begun, and ERCOT is conducting the assessment based on modeling assumptions it filed in January 2026. Stakeholders and the PUC reviewed these assumptions in February and March of 2026, and PUC staff filed final recommendations in April 2026."
  - id: e22
    source: imm-som-2025
    locator: "Resource Adequacy chapter, D.1 Updates to CONE (p. 102)"
    quote: "Because the 2025 PJM CONE study produced an estimated value of approximately $220 per kW‑year, and because combustion turbine procurement costs are relatively uniform across U.S. markets, the accelerated ERCOT study could result in a CONE value above $200 per kW‑year."
  - id: e23
    source: imm-som-2025
    locator: "Resource Adequacy chapter, F.4 Additional Notes on the RSA (p. 106)"
    quote: "The Commission should clarify whether the reliability standard is intended to function as a binding requirement that the market must meet or as an aspirational benchmark against which alternative market design options are evaluated to improve reliability outcomes over time."
  - id: e24
    source: pura-39
    locator: "PURA §39.1594(a)(1), Reliability Program"
    quote: "the commission may not require retail customers or load-serving entities in the ERCOT power region to purchase credits designed to support a required reserve margin or other capacity or reliability requirement unless the commission ensures that:(1)  the net cost to the ERCOT market of the credits does not exceed $1 billion annually, less the cost of any interim or bridge solutions that are lawfully implemented"
  - id: e25
    source: pura-39
    locator: "PURA §39.1594(a)(10), Reliability Program"
    quote: "the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented"
  - id: e26
    source: puct-pcm-staff-rec
    locator: "Staff memo, December 13, 2024, Staff's Final Recommendation (p. 1)"
    quote: "After reviewing the ERCOT/E3 and IMM assessments, Staff recommends not moving forward with the PCM as currently designed."
  - id: e27
    source: puct-pcm-staff-rec
    locator: "Staff memo, December 13, 2024, Staff's Final Recommendation (p. 2)"
    quote: "The PCM, as designed, is anticipated to incentivize 780 MW of additional dispatchable generation relative to the energy-only market design, which would reduce the projected long-term equilibrium Loss of Load Expectation (LOLE) from 2.67 days per year to 2.18 days per year."
  - id: e28
    source: puct-pcm-staff-rec
    locator: "Staff memo, December 13, 2024, Staff's Final Recommendation (p. 3)"
    quote: "ERCOT indicated that its Long-Term Reliability Assessment shows a forecasted 2026 ERCOT system having an LOLE of 0.51 days per year."
  - id: e29
    source: puct-minutes-2024-12-19
    locator: "Open meeting minutes, December 19, 2024, Item 17"
    quote: "Project No. 55000 – Performance Credit Mechanism (PCM). (Discussion and possible action) Werner Roth and Chris Brown Action: Adopted Staff’s final recommendation on PCM."
  - id: e30
    source: pura-39
    locator: "PURA §39.159(d), Power Region Reliability and Dispatchable Generation"
    quote: "The commission shall require the independent organization certified under Section 39.151 for the ERCOT power region to develop and implement an ancillary services program to procure dispatchable reliability reserve services on a day-ahead and real-time basis to account for market uncertainty."
  - id: e31
    source: imm-som-2020
    locator: "2020 State of the Market Report, Executive Summary"
    quote: "Texas heads into the summer months of 2021 with a reserve margin of 15.5%, notably higher than the 12.6% reserve margin for 2020 and the 8.6% reserve margin from 2019. Most of the increase is due to new solar and wind resources, which should continue in the coming years."
  - id: e32
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary"
    quote: "ERCOT heads into the summer months of 2022 with a calculated reserve margin of 23.9%, notably higher than the 15.5% reserve margin for 2021, 12.6% for 2020 and the 8.6% reserve margin from 2019."
  - id: e33
    source: imm-som-2022
    locator: "2022 State of the Market Report, Executive Summary"
    quote: "ERCOT heads into the summer months of 2023 with a calculated reserve margin of 22.2% based on ERCOT’s Capacity, Demand Reserves report, comparable to 2022 and higher than 2021."
  - id: e34
    source: imm-som-2023
    locator: "2023 State of the Market Report, Executive Summary"
    quote: "The influx of new supply has outpaced the growth in demand, causing ERCOT’s estimated planning reserve margin for the summer of 2024 to rise to 29.4% compared to 22.2% in 2022 based on ERCOT’s Capacity, Demand and Reserves (CDR) report."
  - id: e35
    source: imm-som-2024
    locator: "2024 State of the Market Report, Resource Adequacy chapter, Planning Reserve Margin (before Figure 59)"
    quote: "While the December 2023 CDR projected reserve margins ranging from 27% to 51.7% five years out,57 the December 2024 CDR projects a much lower range of -32.4% to 9.6% over the same horizon.58 This dramatic decline is driven by two primary changes in the CDR methodology. First, the shift to using ELCC reduces the contribution of renewable resources during net peak load conditions, leading to lower counted capacity. Second, ERCOT now mandatorily includes TSP officer letter loads in its load forecast, significantly increasing the expected demand in future years."
  - id: e36
    source: ercot-cdr-2025-12
    locator: "CDR - Planning Reserve Margins for the Peak Load and Peak Net Load Hours"
    quote: "The lower and sharply downward trajectory of the Margins is due to (1) high load growth largely driven by new Loads reported by Transmission Service Providers, (2) a lower capacity contribution from wind and solar resources due to the use of Effective Load Carrying Capabilities, (3) fewer planned resources that result from applying additional eligibility criteria to be included in Planning Reserve Margins."
  - id: e37
    source: imm-som-2025
    locator: "Resource Adequacy chapter, G.3 Impact on Reserve Margin (p. 108)"
    quote: "We previously criticized how the CDR report portrayed the planning reserve margin because the protocol‑prescribed methodology did not fully reflect how system conditions would likely materialize in practice. The December 2025 CDR addressed this concern by including additional scenarios to account for large load curtailment under the new Senate Bill 6 framework."
  - id: e38
    source: imm-som-2021
    locator: "2021 State of the Market Report, Resource Adequacy, net revenues"
    quote: "Net revenues for combustion turbines rose to almost $700 per kW-year across all zones (net revenues would have ranged from $60 per kW-year to $78 per kW-year but for Winter Storm Uri); while"
  - id: e39
    source: imm-som-2022
    locator: "2022 State of the Market Report, Resource Adequacy, net revenues"
    quote: "Even without the extreme prices experienced during Winter Storm Uri, the ERCOT market did provide net revenues above the CONE level needed to support new investment in 2022. This was primarily due to the ORDC changes implemented at the beginning of the year."
  - id: e40
    source: imm-som-2023
    locator: "2023 State of the Market Report, Resource Adequacy, net revenues"
    quote: "Combustion turbines ranged from $224 per kW-year to $257 per kW-year; while"
  - id: e41
    source: imm-som-2024
    locator: "2024 State of the Market Report, Resource Adequacy, C.1 Interpreting Single-Year Net Revenues"
    quote: "In 2024, marginal gas generators did not earn enough to cover their annualized capital costs. The CONE for CTs ranged from $102 per MWh to $106 per MWh, while their net revenues averaged only $68 per MWh."
  - id: e42
    source: ercot-annual-report-2025
    locator: "2025 Annual Report, President and CEO letter (p. 5)"
    quote: "Today, 40 percent of the thermal generation fleet in ERCOT is more than 30 years old. As these units age and eventually retire, we must ensure adequate dispatchable capacity replaces them — particularly in an environment where wholesale prices, adjusted for inflation, have been low during the last two years."
  - id: e43
    source: ercot-resource-adequacy-dr-2026-04
    locator: "Board item 11.1 (April 2026), Key Takeaways slide"
    quote: "Consider value of promoting demand response as a near-term solution to emerging resource adequacy challenges."
  - id: e44
    source: imm-som-2025
    locator: "Resource Adequacy chapter, key insights bullets"
    quote: "The PNM did not reach the PNM threshold that would reduce the system-wide offer cap in ERCOT. The threshold has been reached only once in ERCOT’s history, in February 2021 during Winter Storm Uri."
  - id: e45
    source: puct-pcm-staff-rec
    locator: "Staff memo, December 13, 2024, introduction (p. 1)"
    quote: "the Commission selected the final PCM design parameters at its August 29,2024 open meeting."
  - id: e46
    source: ercot-cdr-2025-12
    locator: "Definitions, Effective Load Carrying Capability (ELCC)"
    quote: "The resource class (e.g., wind) is removed and substituted with capacity that has perfect availability until the target reliability level is again reached. The ELCC is the amount of perfect capacity added divided by the amount of the resource class capacity removed, expressed as a percentage."
---

## Definition

Resource adequacy means having enough generation and demand-side resources to meet expected demand and ancillary services under both normal and extreme conditions. [e1] In ERCOT's energy-only market, shortage pricing is the main mechanism that pays for capacity and signals when to invest. [e2]

## How it works

ERCOT has a formal reliability standard, adopted in 16 TAC §25.508. A loss of load event is defined as a time when firm load plus the minimum operating reserves needed to avoid EEA3 exceeds available resource capacity, so that load is involuntarily shed. [e18] Expected loss-of-load events must average no more than one per ten years (0.1 LOLE). The longest expected event must be under 12 hours, with a 1.00% exceedance tolerance, and the expected highest level of load shed in an event must be less than the maximum amount ERCOT determines can be safely rotated, also with a 1.00% exceedance tolerance. [e3] Since 2024 ERCOT must file that safely-rotatable MW figure and its method by December 1 each year. [e19]

Starting January 1, 2026, ERCOT must assess at least every three years whether the system meets the standard and is likely to keep meeting it for the next three years. [e4] If a reviewed system fails, ERCOT must give the Commission a menu of market design changes, including a primary recommendation. [e5] The IMM must then independently review those proposals and their expected system costs. [e20]

The market signal comes from scarcity prices. Since RTC, sloped Ancillary Service Demand Curves define shortage pricing in the day-ahead and real-time markets. [e12] The IMM compares net revenues with the cost of new entry (CONE). [e14] The PUCT approved a planning CONE of $140/kW-year in July 2024 and kept the legacy $105/kW-year for the peaker net margin threshold. [e13] The IMM reports that an accelerated ERCOT CONE study by Brattle, run alongside the 2026 assessment, could produce a value above $200/kW-year, because the 2025 PJM study came in at about $220/kW-year. [e22]

ERCOT measures adequacy through planning reports. A resource adequacy report covering at least five years must be published by December 31 each year. [e7] The CDR's Planning Reserve Margin is the share of resource capacity above firm demand that is available to cover uncertainty. [e8] For wind, solar and storage, the CDR counts capacity by ELCC: the amount of perfect capacity that replaces a removed resource class while holding the reliability target, divided by the class capacity removed. [e46] The MORA reports the probability that ERCOT would need to declare an EEA in its highest-risk hour. [e15]

## ERCOT context

The planning view and the operating view point in different directions. The December 2025 CDR base scenario shows Planning Reserve Margins falling each year and turning negative in 2028. Summer 2026 starts at 18.3% for the peak load hour and 20.9% for the peak net load hour. [e9] ERCOT attributes the steep decline to high load growth driven by TSP-reported loads, lower ELCC-based credit for wind and solar, and stricter eligibility criteria for planned resources. [e36] Its alternative scenarios vary SB 6 large-load curtailment, large-load growth, and the amount and timing of Texas Energy Fund capacity. [e10] The IMM, which had criticized the protocol-prescribed method, says the December 2025 CDR addressed its concern by adding those SB 6 curtailment scenarios. [e37] In real-time operations, the IMM reports that PRC was below 6,500 MW for only 102 hours in 2025 and has not fallen below 3,000 MW since 2023. [e11]

Revenues were weak in 2024 and 2025. The IMM estimates 2025 net revenues of $52.59/kW-year for a CT and $82.96/kW-year for a CC, below the $140 planning CONE. [e14] The IMM's view is that years like 2024 and 2025 occur often and are not a threat to resource adequacy, because tighter years such as 2021 and 2023 can produce revenues substantially above CONE. [e17] ERCOT's CEO takes a more worried tone: 40% of ERCOT's thermal fleet is over 30 years old, and he says replacement dispatchable capacity must be ensured while inflation-adjusted wholesale prices have been low for two years. [e42] In April 2026 ERCOT staff asked its Board to consider demand response as a near-term answer to emerging resource adequacy challenges. [e43]

Capacity payments are constrained by statute. PURA §39.1594 bars the Commission from requiring LSEs to buy reserve-margin credits unless, among other conditions, their net cost stays within $1 billion a year (less any bridge solutions) [e24] and ERCOT has begun implementing real-time co-optimization before the program starts. [e25] Under that law, PUCT staff recommended not moving forward with the Performance Credit Mechanism as designed [e26], and the Commission adopted the staff recommendation on December 19, 2024. [e29] Staff cited the ERCOT/E3 finding that the PCM would add only 780 MW of dispatchable capacity and move the long-run equilibrium LOLE from 2.67 to 2.18 days per year. [e27] Separately, PURA §39.159(d) requires a dispatchable reliability reserve service procured day-ahead and in real time. [e30]

The IMM says meeting the standard through prices alone would need an extraordinarily high operational VOLL [e16], and it asks the Commission to clarify whether the standard is a binding requirement or an aspirational benchmark. [e23]

## Key facts

- Reliability standard (16 TAC §25.508): 0.1 LOLE; maximum event duration under 12 hours with 1.00% exceedance tolerance; expected highest load shed below the maximum that can be safely rotated. [e3]
- Assessments must start from January 1, 2026 and be repeated at least every three years. [e4]
- December 2025 CDR base case, summer 2026: 18.3% reserve margin at peak load and 20.9% at peak net load, turning negative in 2028. [e9]
- The December 2024 CDR's five-year range was -32.4% to 9.6%, against 27% to 51.7% in the December 2023 CDR; the IMM attributes the drop to ELCC and mandatory inclusion of TSP officer-letter loads. [e35]
- Planning CONE: $140/kW-year (approved July 2024). The PNM threshold still uses $105/kW-year. [e13]
- 2025 net revenue: CT $52.59/kW-year; CC $82.96/kW-year. [e14]
- PCM: PUCT staff (December 13, 2024 memo) cited ERCOT's Long-Term Reliability Assessment showing a forecast 2026 LOLE of 0.51 days per year, versus the 0.1 standard. [e28]
- January 2027 MORA: highest EEA risk is 3.20% at HE 8:00 a.m. CST. [e15]

## Timeline

- Summer 2019 to summer 2021: IMM-reported reserve margins rose from 8.6% (2019) to 12.6% (2020) and 15.5% (2021), mostly from new solar and wind. [e31]
- 2021: Winter Storm Uri lifted CT net revenues to almost $700/kW-year across all zones; without Uri they would have been $60-78/kW-year (IMM). [e38] February 2021 is the only time the PNM threshold has been reached. [e44]
- Summer 2022: calculated reserve margin 23.9% (IMM 2021 report). [e32]
- 2022: net revenues exceeded CONE even without Uri-type prices, which the IMM attributes mainly to ORDC changes made at the start of the year. [e39]
- Summer 2023: reserve margin 22.2% per the CDR (IMM 2022 report). [e33]
- September 1, 2023: PURA §39.1594 (HB 1500) set the conditions, including the $1 billion net cost limit, for any reserve-credit program. [e24]
- 2023: CT net revenues of $224-257/kW-year, well above CONE (IMM). [e40] Summer 2024 planning reserve margin estimated at 29.4%. [e34]
- July 2024: PUCT approved the $140/kW-year planning CONE. [e13] August 29, 2024: Commission selected the final PCM design parameters. [e45]
- December 2024: CDR five-year reserve range fell to -32.4% to 9.6%. [e35] December 19, 2024: Commission adopted staff's recommendation not to move forward with the PCM as designed. [e26][e29]
- 2024: CT net revenues averaged $68 against a CONE of $102-106 (the IMM's 2024 text states these "per MWh"; its figure axis is $ per kW-year). [e41]
- December 2025: CDR base case shows negative reserve margins from 2028. [e9]
- January to April 2026: ERCOT filed RSA modeling assumptions; stakeholders and the PUC reviewed them; PUC staff filed final recommendations. [e21]
- August 2026: ERCOT RSA results due, with market design options if 2029 looks short; IMM review scheduled for September 2026 (schedule subject to change). [e6]

## Say it like this

(Guidance) ERCOT now has a formal reliability target of one loss-of-load event in ten years and must check every three years whether the market is delivering it. The planning reports show reserve margins falling fast, partly because of load growth and partly because the CDR now counts wind and solar by ELCC, while real-time reserves have been ample. A capacity-credit program was considered and shelved in December 2024, so the 2026 assessment is the formal route to any new design. [e3][e29]

## Common confusion

(Guidance) The CDR's Planning Reserve Margin is a percentage of resource capacity above firm demand, not a measure of real-time scarcity. PRC is the operating-side measure, and the two have pointed in different directions recently. [e8][e11] The "1-in-10" standard is an LOLE target, not a reserve-margin target. [e3] A big drop in the CDR margin between editions is not all new risk: methodology changes (ELCC, officer-letter loads) explain much of the December 2024 drop, according to the IMM. [e35] And the PCM equilibrium LOLE of 2.67 days per year is a long-run study system, not a forecast of 2026. [e27][e28]

## Questions

### What is ERCOT's reliability standard?

16 TAC §25.508 requires expected loss-of-load events of no more than one per ten years on average (0.1 LOLE), with the maximum expected event length under 12 hours at a 1.00% exceedance tolerance, and the expected highest load shed in an event below the maximum ERCOT determines can be safely rotated. [e3]

### What happens if ERCOT fails the standard?

ERCOT must give the Commission a menu of market design changes with a primary recommendation [e5], and the IMM must independently review them with their costs. [e20] For the 2026 assessment, results and options were due in August 2026, judged against 2029. [e6]

### Does a negative CDR reserve margin in 2028 mean blackouts are coming?

Not on its own. The CDR base case turns negative in 2028 [e9], but ERCOT itself attributes the decline partly to TSP-reported loads and ELCC accounting [e36], and the CDR's scenarios vary large-load curtailment and TEF capacity [e10]. The IMM points to ample operating reserves in 2025. [e11] Treat it as a planning warning built on its assumptions.

### Were 2025 revenues enough to build new gas plants?

No, according to the IMM. CT and CC net revenues of $52.59 and $82.96 per kW-year were below the $140 planning CONE. [e14] The IMM also says such years are not a threat to resource adequacy, because tighter years such as 2021 and 2023 can produce revenues substantially above CONE. [e17]

### Why did the PUCT not adopt the PCM?

Staff recommended not moving forward because, with the chosen design, ERCOT/E3 found the PCM would add only 780 MW of dispatchable generation and cut long-run LOLE from 2.67 to 2.18 days per year. [e27][e26] The Commission adopted that recommendation on December 19, 2024. [e29] Any such program is bounded by PURA §39.1594's $1 billion net cost limit. [e24]

### Why did CDR reserve margins collapse between December 2023 and December 2024?

The IMM says the five-year range fell from 27-51.7% to -32.4-9.6% mainly because ERCOT switched to ELCC for renewables and began mandatorily including TSP officer-letter loads in its forecast. [e35]

### What if the next CONE study comes in above $200/kW-year?

The IMM says the accelerated Brattle study could produce a CONE above $200 [e22]. (Reasoning) A higher benchmark would widen the gap against 2024-2025 net revenues and make any cost-based design option look more expensive. The saved sources do not give the study's result.

## Scenarios

### A client asks whether ERCOT will add a capacity market because reserve margins go negative.

- The formal path is the reliability standard assessment. If ERCOT does not meet the standard, it must propose market design changes, which the IMM reviews. [e5][e20]
- A capacity-credit program already faced a statutory screen: under PURA §39.1594 net cost must stay within $1 billion a year, and the PCM was shelved in December 2024. [e24][e29]
- The IMM says meeting the standard through price signals alone would imply an extraordinarily high operational VOLL for an energy-only market [e16], and it asks the Commission to say whether the standard is binding. [e23]
- What ERCOT's market design options contain is not in the saved sources.

## Open items

- The results of the 2026 Reliability Standard Assessment (due August 2026), the IMM's September 2026 review, and the PUCT's final decisions are not in the saved sources.
- The maximum MW of load that can be safely rotated (filed yearly since 2024 under §25.508(b)(3)) is not given in the saved sources.
- The IMM says MORA reports implied a roughly 49% minimum annual LOLP for 2025, which it calls "implausibly high". This conflicts with ERCOT's probabilistic outlook. The latest MORA (January 2027) reports a 3.20% peak-hour EEA probability, which is not directly comparable.
- The CDR's ELCC percentages for wind, solar and storage were not extracted as clean numbers (table text garbled).
- The IMM's 2024 report states CT and CC CONE and net revenue in "$ per MWh" in its text, while its figure is labelled $ per kW-year; likely a unit slip, not resolved here.
- The result of the accelerated Brattle CONE study is not in the saved sources.
- Whether the Commission treats the reliability standard as binding or aspirational is unresolved. The IMM asks the Commission to clarify. [e23]
