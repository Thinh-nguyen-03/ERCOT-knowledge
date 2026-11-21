---
id: cdr-report
name: CDR Report
aliases: [CDR, Capacity Demand and Reserves report, Report on Capacity, Demand and Reserves]
kind: report
domain: structure
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: resource-adequacy
    type: measures
    note: The CDR is ERCOT's multi-year forward look at whether resources cover firm demand. [e3][e4]
  - to: mora-report
    type: contrasts-with
    note: The MORA evaluates resource adequacy for one upcoming month and models emergency risk, while the CDR looks years ahead with a deterministic view. [e11][e2][e6]
  - to: nodal-protocols
    type: related
    note: Protocol Section 3.2.6 requires the CDR twice a year and gives the Planning Reserve Margin, firm load and total capacity equations. [e1][e13][e15]
  - to: puct
    type: related
    note: PUCT rule 25.505 requires an annual resource adequacy report covering at least five years. [e3]
  - to: sb6
    type: related
    note: The December 2025 CDR includes reserve margin scenarios with preliminary Large Load curtailment assumptions starting for summer 2027. [e12][e20]
  - to: long-term-load-forecast
    type: related
    note: The CDR base scenario uses the ERCOT Adjusted Load Forecast. [e10]
  - to: texas-energy-fund
    type: related
    note: Two of the three alternative scenarios vary how much Texas Energy Fund project capacity is counted and when. [e21]
  - to: energy-storage-resource
    type: related
    note: Battery storage capacity enters the CDR through an ELCC that depends on duration, and batteries are the largest planned dispatchable addition. [e18][e23]
  - to: reliability-standard
    type: related
    note: The Protocols base the CDR's ELCC study on the PUCT Reliability Standard. [e16]
  - to: large-flexible-load
    type: related
    note: The CDR treats crypto mining as price-responsive and 85% curtailable in its SB 6 scenarios. [e20]
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.2.6(1), Report on Capacity, Demand and Reserves in the ERCOT Region"
    quote: "ERCOT shall prepare and publish the Report on Capacity, Demand and Reserves in the ERCOT Region (CDR) twice per year. ERCOT will target the posting of the preliminary CDR during the third week of each May and the final CDR during the third week of each December."
  - id: e2
    source: np-03
    locator: "Section 3.2.6(2)"
    quote: "Load and capacity forecasts shall be reported for at least the next five years beyond the year that the CDRs are published."
  - id: e3
    source: puct-25-505
    locator: "16 TAC §25.505(b), Resource adequacy reports"
    quote: "ERCOT must publish a resource adequacy report by December 31 of each year that projects, for at least the next five years, the capability of existing and planned electric generation resources and load resources to reliably meet the projected system demand in the ERCOT power region."
  - id: e4
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab"
    quote: "The main purpose of the CDR is to provide forecasted Planning Reserve Margins by season and year. The Planning Reserve Margin represents the percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply."
  - id: e5
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab"
    quote: "Note that the CDR is not intended for characterizing the risk of capacity scarcity conditions from a real-time operations perspective."
  - id: e6
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The CDR provides a deterministic view of future resource adequacy along with several alternative load and planned resource scenarios designed to capture a range of potential reserve margin outcomes."
  - id: e7
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: >-
      The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST).
  - id: e8
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The most impactful resource adequacy development since the May 2025 CDR release are provisions in Texas Senate Bill 6 (SB6), signed into law in June 2025, that establish new interconnection requirements for Large Loads and ERCOT authority to curtail Large Load consumption before and during declared grid emergencies."
  - id: e9
    source: ercot-cdr-2025-12
    locator: "Planning Reserve Margins for the Peak Load and Peak Net Load Hours"
    quote: "The lower and sharply downward trajectory of the Margins is due to (1) high load growth largely driven by new Loads reported by Transmission Service Providers, (2) a lower capacity contribution from wind and solar resources due to the use of Effective Load Carrying Capabilities, (3) fewer planned resources that result from applying additional eligibility criteria to be included in Planning Reserve Margins."
  - id: e10
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The base scenario in this CDR—using \"Protocol Prescribed\" capacity resources and the ERCOT Adjusted Load Forecast—indicates that summer and winter Planning Reserve Margins for 2026 through 2030 decrease significantly from year to year, and cross over to negative values in 2028 in line with the trends reported in the May 2025 CDR."
  - id: e11
    source: ercot-mora-2027-01
    locator: "Introduction"
    quote: "The MORA report adopts two approaches to evaluate resource adequacy for the upcoming assessment month: ● Determine the risk that ERCOT may face emergency conditions for the monthly peak load day — specifically, the chances, during a range of hours, that it may need to issue an Energy Emergency Alert (EEA) or begin to order controlled outages to maintain grid reliability."
  - id: e12
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "Although the CDR-related ERCOT Nodal Protocols—Specifically, Section 3.2.6.3, Firm Peak Load and Firm Peak Net Load Estimates—does not yet reflect rules for treatment of the SB6 Large Load provisions, this CDR nevertheless includes reserve margin scenarios reflecting assumptions for Large Load curtailment given future grid emergency conditions. These curtailment assumptions, starting for summer 2027, are necessarily preliminary and high-level"
  - id: e13
    source: np-03
    locator: "Section 3.2.6.1(1), Planning Reserve Margins"
    quote: "ERCOT shall calculate a Planning Reserve Margin (PRM) for each season of each future year reflecting Loads and resources for the forecasted peak Load hour and peak Net Load hour as follows:"
  - id: e14
    source: np-03
    locator: "Section 3.2.6.1(1), Planning Reserve Margins, equation"
    quote: "PRM _(h, s, i) = (TOTCAP _(h, s, i) – FIRMPKLD _(h, s, i)) / FIRMPKLD _(h, s, i)"
  - id: e15
    source: np-03
    locator: "Section 3.2.6.1(1), variable table, definition of s"
    quote: "Season. Summer Peak Load Season, Winter Peak Load Season, Spring (March, April, May), and Fall (October and November), for year i."
  - id: e16
    source: np-03
    locator: "Section 3.2.6.2(1)-(2), Effective Load Carrying Capability (ELCC) Studies"
    quote: "ERCOT shall conduct an Effective Load Carrying Capability (ELCC) study every three years or as necessary based on reviews of expected resource penetration and generation technology trends using Generator Interconnection or Modification (GIM) data. ERCOT shall provide the appropriate WMS working group with a draft ELCC report and subsequent review and comment period before finalizing the ELCC report. The ELCC reports shall be posted to the ERCOT website."
  - id: e17
    source: np-03
    locator: "Section 3.2.6.3(1), Firm Peak Load and Firm Peak Net Load Estimates, equation"
    quote: "FIRMPKLD _(h,) _(s, i) = TOTPKLD _(h,) _(s, i) – LRRRS _(h,) _(s, i) – LRECRS _(h, s, i) – LRNSRS­ _(h,) _(s, i) – ERS _(h,) _(s, i) – DVR _(s, i) – CLR _(h,) _(s, i)"
  - id: e18
    source: np-03
    locator: "Section 3.2.6.4(2), Total Capacity Estimates, definition of PLANTHERMCAP"
    quote: "New Thermal Generating Capacity—The amount of new thermal generating capacity available by the start of season s and year i that: (a) has a Texas Commission on Environmental Quality (TCEQ)-approved air permit, (b) has a federal Greenhouse Gas permit, if required, (c) has obtained water rights, contracts or groundwater supplies sufficient for the generation of electricity at the Resource, (d) has a signed Standard Generation Interconnection Agreement (SGIA), or a public, financially-binding agreement between the Resource owner and TSP under which generation interconnection facilities would be constructed; or for a Municipally Owned Utility (MOU) or Electric Cooperative (EC), a public commitment letter to construct a new Resource, (e) a written notice from the TSP that the Interconnecting Entity (IE) has provided notice to proceed with the construction of the interconnection, and (f) provided the TSP with sufficient financial security to fund the interconnection facilities. New, Thermal generating capacity is excluded if the GIM project status in the RIOO interconnection services system is set to “Cancelled” or “Inactive” or if the Resource was previously mothballed or retired and does not have an owner that intends to operate it."
  - id: e19
    source: ercot-cdr-2025-12
    locator: "Seasonal Summary tab, Load Forecast and Adjustments, summer 2026 peak Load hour column"
    quote: "95,419 (1,260) (935) (50) (300) (20) (2,750) (303) (1,162) 88,639"
  - id: e20
    source: ercot-cdr-2025-12
    locator: "Load-Resource Scenarios, Scenario Assumption Notes"
    quote: >-
      ● Data Centers - 100% curtailable to reflect ERCOT authority to mandate curtailment during energy emergency events ● Industrial - 85% curtailable ● Hydrogen - 85% curtailable ● Crypto currency mining - price-responsive, 85% curtailable ● Oil & Gas - non-curtailable to reflect designation as "critical natural gas facility" customers by the Railroad Commission of Texas under Tex. Admin. Code § 3.65, Critical Designation of Natural Gas Infrastructure.
  - id: e21
    source: ercot-cdr-2025-12
    locator: "Load-Resource Scenarios, Table 1: Summer Load and Resource Scenarios"
    quote: >-
      Scenario 2: Includes all Texas Energy Fund projects (regardless of Planning Guide Sec. 6.9(1) milestone conditions) Scenario 3: One-year TEF project delays for those meeting Planning Guide Sec. 6.9(1) conditions (excluding "brownfield" sites)
  - id: e22
    source: ercot-cdr-2025-12
    locator: "Load-Resource Scenarios, Table 1: Summer Load and Resource Scenarios, load scenarios"
    quote: >-
      Scenario 1: Base Case with Senate Bill 6 Large Load curtailment impact Scenario 2: Base Case with 25% decrease in Large Load + Senate Bill 6 Large Load curtailment impact Scenario 3: Base Case with TSP Provided Large Loads replacing ERCOT Adjusted Large Loads + Senate Bill 6 Large Load curtailment impact
  - id: e23
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Planned Resource Trends"
    quote: "Only those projects that have met the CDR eligibility criteria are included. Solar is expected to continue out-pacing the other resource types in terms of installed capacity growth, followed by Energy Storage Resources (battery energy storage)."
  - id: e24
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Planned Generation Capacity Additions by Summer Season table, Battery Energy Storage row"
    quote: "Battery Energy Storage 5,074 13,236 19,914 22,913 22,913"
  - id: e25
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, New TSP-Reported Loads table, cumulative MW for summer 2026 to summer 2030 (Contracted, TSP Officer Letter, Total)"
    quote: "4,894 2,733 7,627 8,654 7,420 16,074 15,336 16,792 32,128 17,130 21,233 38,362 19,560 28,223 47,783"
  - id: e26
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, New TSP-Reported Loads table, notes"
    quote: "** All planned loads documented in a TSP officer letter. (An officer letter is an attestation indicating confidence that loads are expected to be interconnected even though the interconnection agreement has not been signed yet.)"
  - id: e27
    source: ercot-cdr-2025-12
    locator: "Load-Resource Scenarios tab, summer reserve margins (%), first block of values (2026-2030, rows: Protocol-prescribed, Scenario 1, Scenario 2, Scenario 3)"
    quote: "18.3% 18.3% 18.3% 17.3% 11.4% 28.0% 30.8% 17.5% -1.3% 29.0% 35.0% 16.9% -5.8% 28.9% 35.5% 13.9% -12.7% 27.0% 35.0% 14.0%"
  - id: e28
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab, ELCC Background, How are ELCCs Estimated"
    quote: "3. The final step is to divide the perfect capacity added by the capacity of the resource type removed. The result is the ELCC percentage. ELCCs will aways be less than 100%."
  - id: e29
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab, ELCC Background, Key Attributes of ELCCs"
    quote: "ELCCs decline as more of the resource type is added to the resource portfolio. When there is not much of the resource type installed on the grid, its capacity yields a high ELCC."
  - id: e30
    source: ercot-cdr-2025-12
    locator: "CDR Report Background tab, ELCCs Values used in this CDR"
    quote: "Therefore, ELCCs for the winter evenings are used as proxies for the spring season, and summer afternoon ELCCs are used as proxies for the fall."
  - id: e31
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "This CDR reflects an early December 2025 snapshot of expected resources and loads based on prescriptive rules (ERCOT Protocols), load forecasting methodologies, and information from resource developers/owners and transmission companies."
  - id: e32
    source: ercot-resource-adequacy-dr-2026-04
    locator: "Board item 11.1, discussion of the proposed residential demand response program"
    quote: "Importantly, the 2025 CDR Report indicates that ERCOT’s projected reserve margin shortages already account for large load curtailments associated with SB6, which also indicates no overlap."
  - id: e33
    source: np-03
    locator: "Section 3.2.6.4(2), Total Capacity Estimates, equation"
    quote: >-
      TOTCAP _(h,) _(s, i) = INSTTHERMCAP _(s, i)+ PUNCAP _(p,) _(s, i) + WINDCAP _(p,) _(s, i, wr) + HYDROCAP _(p,) _(s, i) + SOLARCAP _(p,) _(s,) _(i, sr) + ESRCAP _(p, s, i) + RMRCAP _(s,) _(i) + DCTIECAP _(s) + PLANDCTIECAP _(s) + SWITCHCAP _(s, i) + MOTHCAP _(s, i) + PLANTHERMCAP _(s, i) + PLANWINDCAP _(p,) _(s, i, wr) + PLANSOLARCAP _(p,) _(s, i, sr) + PLANESRCAP _(p, s, i) – LTOUTAGE _(s, i) – UNSWITCH _(s, i) – RETCAPNSO _(s, i) – RETCAPUNC _(s, i)
---

## Definition

The CDR is ERCOT's Report on Capacity, Demand and Reserves in the ERCOT Region. Its main purpose is to provide forecasted Planning Reserve Margins by season and year, where the Planning Reserve Margin is the percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply. [e4]

## How it works

The Protocols require ERCOT to publish the CDR twice a year, with a preliminary version targeted for the third week of May and a final version for the third week of December. [e1] Forecasts must cover at least the next five years beyond the publication year. [e2] PUCT rule 25.505 separately requires an annual resource adequacy report by December 31 that projects at least five years of capability against projected demand. [e3]

The CDR gives a deterministic view of future resource adequacy alongside several alternative load and planned-resource scenarios designed to capture a range of potential reserve margin outcomes. [e6] The December 2025 edition describes itself as an early-December 2025 snapshot built on prescriptive rules in the Protocols, load forecasting methodologies and information from developers, owners and transmission companies. [e31] It is a planning tool: ERCOT notes it is not intended to characterize the risk of capacity scarcity from a real-time operations perspective. [e5]

## Formula

Section 3.2.6.1 has ERCOT calculate a Planning Reserve Margin for each season of each future year, reflecting Loads and resources for the forecasted peak Load hour and the peak Net Load hour. [e13] The equation is PRM = (TOTCAP - FIRMPKLD) / FIRMPKLD, where TOTCAP is total capacity available for that hour, season and year and FIRMPKLD is firm peak load for the same hour, season and year. [e14] The seasons are the Summer Peak Load Season, the Winter Peak Load Season, Spring (March, April, May) and Fall (October and November). [e15]

Firm peak load starts from the firm load forecast (TOTPKLD) and subtracts the Load Resources providing RRS, ECRS and Non-Spin, Emergency Response Service, Distribution Voltage Reduction and Controllable Load Resources not already counted. [e17] In the December 2025 CDR's Seasonal Summary, the summer 2026 peak Load hour starts at 95,419 MW of seasonal load under normal weather and reaches 88,639 MW of firm peak load after the adjustments shown (rooftop PV, the Load Resource and ERS lines, TDSP load management and distribution voltage reduction). [e19]

Total capacity is built from installed thermal capacity, Private Use Network capacity, wind, solar and storage multiplied by their ELCCs, hydro, RMR, DC Tie, switchable and mothballed capacity and planned capacity, less long-term outages and pending or unconfirmed retirements. [e33] A planned thermal unit counts only if it has the air permit, a federal greenhouse gas permit if required, water supply, a signed interconnection agreement (or equivalent public financially binding agreement), the TSP's written notice that notice to proceed has been given, and sufficient financial security. [e18] The same definition excludes capacity whose project status is "Cancelled" or "Inactive" and a previously mothballed or retired Resource without an owner that intends to operate it. [e18]

ELCC (Effective Load Carrying Capability) is how wind, solar and storage are counted. The Protocols require an ELCC study every three years or as necessary, with a draft reviewed by the WMS working group and the final posted on the ERCOT website. [e16] The CDR explains that a resource type's ELCC is the perfect capacity that can replace it at the same reliability level divided by the capacity removed, and is always below 100%. [e28] ELCCs decline as more of a resource type is added. [e29] For spring and fall the CDR uses winter-evening and summer-afternoon ELCCs as proxies. [e30]

## ERCOT context

In the December 2025 CDR, the base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (HE 5:00 p.m. CST) and 20.9% for the peak Net Load hour (HE 9:00 p.m. CST). [e7] The report says the base scenario's summer and winter margins for 2026 through 2030 decrease significantly from year to year and cross over to negative values in 2028. [e10] The three drivers it gives are high load growth largely from new Loads reported by TSPs, lower wind and solar capacity contributions from using ELCCs, and fewer planned resources passing additional eligibility criteria. [e9]

The load growth is large. The cumulative new TSP-reported loads added to the April 2025 ERCOT Adjusted Load Forecast total 7,627 MW for summer 2026 and 47,783 MW for summer 2030 (contracted plus TSP officer-letter loads, in the table's column order). [e25] Contracted loads are those with signed interconnection agreements reported by the TSPs; officer-letter loads are documented in an attestation that interconnection is expected although no agreement is signed yet. [e26]

Among planned resources, the CDR lists battery storage additions in summer-season MW of 5,074 (2026), 13,236 (2027), 19,914 (2028) and 22,913 (2029 and 2030), counting only projects that met the CDR eligibility criteria. [e24][e23]

The report calls SB 6 the most impactful resource adequacy development since the May 2025 CDR: it set new interconnection requirements for Large Loads and gave ERCOT authority to curtail Large Load consumption before and during declared grid emergencies. [e8]

## Timeline

- May 2025: preliminary CDR (the December 2025 report says its base trends are "in line with" those in it). [e10]
- June 2025: SB 6 signed into law; the December 2025 CDR calls it the most impactful development since the May 2025 release. [e8]
- December 2025: the CDR adds scenarios with Large Load curtailment assumptions starting for summer 2027, although Protocol Section 3.2.6.3 did not yet reflect SB 6 rules. [e12]

## Key facts

- Published twice a year: preliminary in May, final in December (targets). [e1]
- Covers at least five years beyond the publication year. [e2]
- PRM = (total capacity - firm peak load) / firm peak load, calculated for the peak Load hour and the peak Net Load hour of each season and year. [e13][e14]
- December 2025 CDR base scenario, summer 2026: 18.3% (peak Load hour) and 20.9% (peak Net Load hour). [e7]
- Base scenario margins turn negative in 2028 (December 2025 CDR). [e10]
- Scenarios 1 to 3 all include SB 6 Large Load curtailment: Scenario 2 cuts Large Load by 25% and counts all TEF projects; Scenario 3 uses TSP-provided Large Loads and delays TEF projects by one year. [e22][e21]
- Deterministic by design; not a real-time scarcity risk measure. [e5][e6]

## Say it like this

(Guidance) The CDR is ERCOT's multi-year look at whether expected resources cover forecast firm demand, shown as planning reserve margins by season. It is a rules-based planning snapshot, so treat its negative later-year base-case margins as a signal about the trend, not a forecast of outages.

## Common confusion

(Guidance) The CDR is not the MORA. The CDR gives forecast margins by season and year for at least five years, and the MORA evaluates resource adequacy for one upcoming month and the risk of emergency conditions. [e2][e4][e11] The CDR margin is a planning margin against firm electricity demand, and ERCOT notes the CDR is not intended for characterizing real-time capacity scarcity risk. [e4][e5]

(Guidance) "The CDR already includes SB 6 curtailment" is only half right. The report says Protocol Section 3.2.6.3 did not yet reflect SB 6 rules and that its curtailment assumptions sit in the alternative scenarios, starting for summer 2027, while the base scenario uses Protocol Prescribed resources. [e12][e10] An April 2026 ERCOT Board discussion item states that the CDR's projected shortages already account for SB 6 large load curtailments. [e32]

## Questions

### What is a Planning Reserve Margin?

The percentage of resource capacity, in excess of firm electricity demand, available to cover uncertainty in future demand, generator availability and new resource supply. [e4] The Protocols compute it as total capacity minus firm peak load, divided by firm peak load. [e14]

### Why did the December 2025 CDR show margins falling over time?

The report cites high load growth largely from new Loads reported by TSPs, lower wind and solar contributions from ELCCs, and fewer planned resources meeting eligibility criteria. [e9]

### How often is the CDR published?

Twice a year per the Protocols, with May (preliminary) and December (final) targets. [e1]

### Why does a solar plant add much less to the CDR than its nameplate?

Wind, solar and storage are counted at their ELCC, not nameplate: the ELCC is below 100% by construction and falls as more of the resource type is added. [e28][e29] The CDR gives solar as the example: more solar pushes risk into the evening when solar output drops. [e29]

### Why does the CDR report two margins per season?

The Protocols have ERCOT calculate the PRM for both the forecasted peak Load hour and the peak Net Load hour. [e13] For summer 2026 the base scenario gives 18.3% for the peak Load hour (HE 5:00 p.m.) and 20.9% for the peak Net Load hour (HE 9:00 p.m.). [e7]

### What if a planned gas plant has an air permit but no financial security posted with the TSP?

It does not count in the Protocol-prescribed capacity: the planned thermal definition requires the TSP's notice to proceed and sufficient financial security, along with the permits, water and interconnection agreement. [e18] Scenario 2 is the exception: it includes all Texas Energy Fund projects regardless of the Planning Guide Sec. 6.9(1) milestone conditions. [e21]

### What if large loads are 25% lower than the Adjusted Forecast, or the TSP-reported loads all arrive?

Scenario 2 and Scenario 3 are those bookends, both with SB 6 curtailment. [e22] Using the first block of margins in the scenarios tab, summer peak Load hour margins for 2030 are 35.0% under Scenario 2 and 14.0% under Scenario 3, against -12.7% for the Protocol-prescribed case with no curtailment. [e27]

## Scenarios

### A client reads "reserve margin turns negative in 2028" and asks if ERCOT will run short of power.

- The base scenario uses Protocol Prescribed resources and the ERCOT Adjusted Load Forecast and goes negative in 2028. [e10]
- That base case has no SB 6 curtailment, while Scenarios 1 to 3 include it and show positive margins in the first block of values in the scenarios tab (for example 28.0%, 30.8% and 17.5% for summer 2027 peak Load hour). [e12][e27]
- The CDR is not meant to characterize real-time scarcity risk; for next-month emergency risk point to the MORA. [e5][e11]

## Open items

- ELCC values themselves (the ELCC tab numbers) were not extracted; only the method and proxies are quoted.
- The Load-Resource Scenarios numbers come from a PDF-derived text where table columns are separated; the mapping of the first value block to summer peak Load hour (2026-2030) and the row order (Protocol-prescribed, Scenarios 1-3) follows the table layout and the base values in the report's findings, and should be checked against the workbook.
- The winter scenario margins and the Net Load hour scenario margins were not quoted.
- The Protocol-prescribed row and the CDR's treatment of Large Loads in the base scenario conflict in tone with the April 2026 Board item (see Common confusion); which description reflects the base case for later CDRs is not settled in the saved sources.
- The dollar-per-kW or reliability-standard link to a reserve margin target is not covered; the Protocols tie the ELCC study to the PUCT Reliability Standard, but no CDR target margin was found.
