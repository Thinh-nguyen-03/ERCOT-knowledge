---
id: sc-winter-cold-snap
name: "Scenario: Cold Snap Forecast Next Week"
aliases: [cold snap scenario, winter storm forecast case, winter risk interview question, arctic front next week]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: winter-storm-uri
    type: related
    note: February 2021 is the reference case, when 75% of unit outages, derates and failures to start across the ERCOT, SPP and MISO South event area came from freezing or fuel issues. [e1][e27]
  - to: winter-storm-jan-2026
    type: related
    note: Winter Storm Fern in January 2026 passed with no EEA and no systemwide outages, and the load forecast overestimated expected peak consumption on January 26 and 27. [e14][e17]
  - to: winter-storm-elliott
    type: related
    note: Before Elliott, 4 of 255 inspected resources had weather-related outages in December 2022, and ERCOT's internal load forecast models were too low for December 23 and 24. [e22][e25]
  - to: weatherization
    type: related
    note: Generators must finish winter preparation measures by December 1 each year. [e5]
  - to: ffss
    type: related
    note: Firm Fuel Supply Service keeps some units available through a gas curtailment and is prepared when ERCOT issues a winter weather Watch. [e7][e9]
  - to: operating-notices
    type: related
    note: Cold-weather OCNs, Advisories, Watches and Emergency Notices require QSEs to update COPs and outages for fuel and weather limits. [e10]
  - to: eea
    type: related
    note: EEA Level 1 is declared when PRC falls below 2,500 MW and is not projected to recover within 30 minutes without the EEA Level 1 actions. [e12]
  - to: natural-gas-price
    type: affects
    note: Demand for natural gas for heating is higher in winter, and gas accounts for a smaller share of Texas generation in winter than in summer. [e24]
  - to: mora-report
    type: related
    note: The January 2027 MORA puts the highest EEA risk at HE 8:00 a.m. [e20]
evidence:
  - id: e1
    source: ferc-nerc-uri
    locator: "Executive Summary, Key Findings and Causes (p. 15)"
    quote: "From February 8 through 20, in the Event Area, a total of 1,045 individual generating units-58 percent natural gas-fired, 27 percent wind, six percent coal, two percent solar, seven percent other fuels, and less than one percent nuclear-experienced 4,124 outages, derates or failures to start. Of those outages, derates, and failures to start, 75 percent were caused by either freezing issues (44.2 percent) or fuel issues (31.4 percent), as shown in Figure 3, below."
  - id: e2
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "Failures within the natural gas system exacerbated electricity problems. Natural gas production, storage, and distribution facilities failed to provide the full amount of fuel demanded by natural gas power plants."
  - id: e3
    source: ferc-nerc-uri
    locator: "Analysis section on manual firm load shed in ERCOT"
    quote: "By 7:00 p.m. on February 15, ERCOT had ordered 20,000 MW of manual firm load shed, which it sustained for nearly three days."
  - id: e4
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "According to PUCT data, natural gas prices, normally much less than $10/MMBTU, spiked to over $400/MMBTU at Texas trading hubs."
  - id: e5
    source: puct-25-55
    locator: "16 TAC 25.55(c)(1)"
    quote: "Winter season preparations. By December 1 each year, a generation entity must complete the following winter weather emergency preparation measures for each resource under its control."
  - id: e6
    source: np-02
    locator: "Section 2.1, definition of FFSS Obligation Period"
    quote: "The period from November 15 through March 15 for which a procured Resource is obligated to provide FFSS."
  - id: e7
    source: np-02
    locator: "Section 2.1, definition of Firm Fuel Supply Service (FFSS)"
    quote: "A service provided by certain Generation Resources in order to maintain Resource availability in the event of a natural gas curtailment or other fuel supply disruption."
  - id: e8
    source: np-03
    locator: "Section 3.14.5, Firm Fuel Supply Service, paragraph (3)"
    quote: "ERCOT must procure FFSS ahead of each FFSS Obligation Period to help maintain reliability during, or in preparation for, a natural gas curtailment or other fuel supply disruption. ERCOT may spend a maximum of $54 million in FFSS Procurement Costs during a single FFSS Obligation Period."
  - id: e9
    source: np-03
    locator: "Section 3.14.5, deployment paragraph (13)(a)"
    quote: "When ERCOT issues a Watch for winter weather, ERCOT will notify all Market Participants, including all QSEs representing FFSSRs, to begin preparation for potential FFSS deployment."
  - id: e10
    source: np-03
    locator: "Section 3.9.1, Current Operating Plan (COP) Criteria, paragraph (9)"
    quote: "(9) When ERCOT issues a communication in the form of an Operating Condition Notice (OCN), Advisory, Watch, or Emergency Notice due to forecasted or actual cold or hot weather, for each Generation Resource and Energy Storage Resource (ESR) a QSE represents, the QSE shall update the COP, Real-Time telemetry, and Outage or derate reporting to reflect any Resource-specific operating limitations based on: (i) capability and availability; (ii) fuel supply or inventory concerns, including fuel switching capabilities; or (iii) environmental constraints and the impact on the Generation Resource or ESR due to the weather conditions."
  - id: e11
    source: np-06
    locator: "Section 6.5.9.3.1, Operating Condition Notice, paragraph (3)"
    quote: "(3) Reasons for OCNs include, but are not limited to, unplanned transmission Outages, insufficient Resources to meet forecasted conditions, and weather-related concerns such as anticipated freezing temperatures, hurricanes, wet weather, and ice storms."
  - id: e12
    source: np-06
    locator: "Section 6.5.9.4.2, EEA Levels, paragraph (1)"
    quote: "(1) ERCOT will declare an EEA Level 1 when PRC falls below 2,500 MW and is not projected to be recovered above 2,500 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 1:"
  - id: e13
    source: ercot-fern-board-sysops
    locator: "Slide 3, Winter Storm Fern (heading)"
    quote: "Winter Storm Fern: January 23 – 27"
  - id: e14
    source: ercot-fern-post-event
    locator: "Summary, p. 1"
    quote: "The statewide grid performed well; ERCOT did not need to call for conservation, did not issue an Energy Emergency Alert (EEA), and there were no systemwide power outages."
  - id: e15
    source: ercot-fern-post-event
    locator: "Communicating with Texans, p. 3"
    quote: "On January 21, ERCOT issued a Weather Watch to alert Texans of expected extreme cold and higher electricity demand with the potential for lower reserves."
  - id: e16
    source: ercot-fern-board-sysops
    locator: "Slide 10, Load Forecast"
    quote: "The load forecast peak for Winter Storm Fern was 84,500 MW, which assumes no demand response."
  - id: e17
    source: ercot-fern-board-sysops
    locator: "Slide 10, Load Forecast, Key Takeaway"
    quote: "Key Takeaway: The load forecast overestimated expected peak consumption on Monday, January 26th and Tuesday, January 27th."
  - id: e18
    source: ercot-fern-board-sysops
    locator: "Slide 12, Historical Non-IRR Outage Data from Previous Winter Storms"
    quote: "Due to the low temperatures, the typical gas restrictions in North Texas were issued."
  - id: e19
    source: ercot-fern-board-sysops
    locator: "Slide 12, Historical Non-IRR Outage Data from Previous Winter Storms"
    quote: "ERCOT utilized the Firm Fuel Supply Service (FFSS) to keep units impacted by gas restrictions running (340 MW)."
  - id: e20
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights and Resource Adequacy Measures"
    quote: "The hour with the highest EEA risk is Hour Ending (HE) 8:00 a.m. Central Standard Time (CST), with a 3.20% probability that ERCOT would need to declare an EEA."
  - id: e21
    source: ercot-mora-2027-01
    locator: "Risk Outlook Highlights and Resource Adequacy Measures"
    quote: "Regarding historical January unplanned thermal outage trends, January 2026 was significantly higher than for January 2025 and moderately higher than for January 2024."
  - id: e22
    source: ercot-elliott-report
    locator: "Executive Summary"
    quote: "Prior to Elliott, ERCOT’s Weatherization & Inspection team examined 255 resources, only 4 of which experienced weather-related outages between December 22 nd to December 25th, 2022."
  - id: e23
    source: ercot-fern-board-sysops
    locator: "Slide 4, ESR SOC, Solar & Wind Generation during Winter Storm Fern"
    quote: "About 13.5GW of wind (nameplate) capacity was unavailable due to icing, but the actual lost generation was less due to reduced wind speeds."
  - id: e24
    source: eia-tx-gas-2021
    locator: "Today in Energy, March 12, 2021"
    quote: "Natural gas has generated as much as 61% of Texas's monthly net electricity generation during peak summer electricity demand. Natural gas accounts for a smaller share of the state's electricity generation during the winter because total electricity demand is lower and demand for natural gas for heating is higher."
  - id: e25
    source: ercot-elliott-report
    locator: "Section 3, Peak Demand: Forecast and Actual"
    quote: "As a result, the load forecasts produced by the internally-developed forecast models were obviously too low for the 23rd and 24th so ERCOT switched to the vendor-developed forecast models."
  - id: e26
    source: ercot-fern-post-event
    locator: "Report title, p. 1"
    quote: "Winter Storm Fern – January 2026"
  - id: e27
    source: ferc-nerc-uri
    locator: "Executive Summary, footnote 17"
    quote: "See Figure 1 below for map of the Event Area: ERCOT, SPP and MISO South."
  - id: "e28"
    source: "np-06"
    locator: "Section 6.5.9.4.2, paragraph (2)"
    quote: "(2) ERCOT may declare an EEA Level 2 when the clock-minute average system frequency falls below 59.91 Hz for 15 consecutive minutes. ERCOT will declare an EEA Level 2 when PRC falls below 2,000 MW and is not projected to be recovered above 2,000 MW within 30 minutes without the use of the following actions that are prescribed for EEA Level 2:"
  - id: "e29"
    source: "np-06"
    locator: "Section 6.5.9.4.2, paragraph (3)"
    quote: "(3) ERCOT may declare an EEA Level 3 when the clock-minute average system frequency falls below 59.91 Hz for 20 consecutive minutes or when steady-state frequency falls below 59.8 Hz. ERCOT will declare an EEA Level 3 when PRC cannot be maintained above 1,500 MW or when the clock-minute average system frequency falls below 59.91 Hz for 25 consecutive minutes."
  - id: "e30"
    source: "np-06"
    locator: "Section 6.5.9.3.1, paragraph (4)"
    quote: "Based on its assessment of the potential for adverse conditions, ERCOT may require information from QSEs representing Resources regarding the Resources’ fuel capabilities. Requests for this type of information shall be for a time period of no more than seven days from the date of the request."
  - id: "e31"
    source: "np-06"
    locator: "Section 6.5.9.3.2, Advisory, paragraph (2)(a)-(b)"
    quote: "(2) ERCOT shall issue an Advisory for reasons such as, but not limited to, the following: (a) When it recognizes that conditions are developing or have changed and more Ancillary Services will be needed to maintain current or near-term operating reliability; (b) When weather or ERCOT System conditions require more lead-time than the normal DAM allows;"
  - id: "e32"
    source: "np-06"
    locator: "Section 6.5.9.3.2, Advisory, paragraph (4)"
    quote: "(4) Although an Advisory is for information purposes, ERCOT may exercise its authority, in such circumstances, to increase Ancillary Service requirements above the quantities originally specified in the Day-Ahead in accordance with procedures."
  - id: "e33"
    source: "ercot-fern-outage-review"
    locator: "Part I, Wind and Solar Generation: common causes during Winter Storm Fern"
    quote: "Icing dominated renewable impacts, with faults and electrical issues also contributing. Total Number of Outages 107 Total MWh Lost ~610,000 MWh"
  - id: "e34"
    source: "ercot-fern-outage-review"
    locator: "Part I, Dispatchable Generation: common causes during Winter Storm Fern"
    quote: "Control-path, combustion systems, air inlets, and coal-path issues drove the largest dispatchable impacts. Total Number of Outages 76 Total MWh Lost ~156,000 MWh"
  - id: "e35"
    source: "ercot-fern-board-sysops"
    locator: "Slide 12, Historical Non-IRR Outage Data, bullets and Key Takeaway"
    quote: "Many generators reported their pipelines issuing Operational Flow Orders (OFOs). Key Takeaway: Non-IRR outages stayed at a consistent level across recent winter storms."
  - id: "e36"
    source: "ercot-fern-board-sysops"
    locator: "Slide 11, Estimated Demand Reductions for Customer Types"
    quote: "Oil & Gas began reducing ~4,200 MW overnight Friday into Saturday and remained reduced through the event. • Cryptocurrency mining began reducing ~4,100 MW Saturday."
  - id: "e37"
    source: "ercot-fern-board-sysops"
    locator: "Slide 11, Estimated Demand Reductions for Customer Types"
    quote: "Key Takeaway: Adding back load reduction values brings Monday morning peak to 84,558 MW."
  - id: "e38"
    source: "ercot-monthly-ops-2026-01"
    locator: "Slide 19, title"
    quote: "Day-Ahead Prices Exceeded Real-Time Prices in January due to Uncertainty around the Winter Weather (Winter Storm Fern)"
  - id: "e39"
    source: "imm-monthly-2026-09"
    locator: "Report 20-2 of 20, ERCOT-wide Avg. Energy Price - DA vs. RT table (DA then RT settlement point price, $/MWh), December 2025 to February 2026 rows"
    quote: "12 $ 35.76 $ 38.32 1 $ 95.47 $ 57.43 2 $ 20.39 $ 21.58"
  - id: "e40"
    source: "imm-som-2025"
    locator: "Appendix: Real-Time Co-Optimization, RUC statistics (p. A-9)"
    quote: "From December 5, 2025, through February 2026, 42% of all RUC commitments occurred during Winter Storm Fern, January 21 to 27."
  - id: "e41"
    source: "ercot-monthly-ops-2026-01"
    locator: "Slide 2, notifications"
    quote: "ERCOT issued an Advisory and Watch for extreme cold weather and the possibility of frozen precipitation Saturday January 24, 2026, through noon on Tuesday, January 27, 2026."
  - id: "e42"
    source: "puct-25-52"
    locator: "16 TAC 25.52, Reliability and Continuity of Service, prioritization of critical natural gas facilities"
    quote: "A critical natural gas facility is a critical load during an energy emergency. A utility must incorporate critical natural gas facilities into its loadshed and restoration planning."
  - id: "e43"
    source: "eia-gas-2025"
    locator: "EIA Today in Energy (January 9, 2026), second paragraph"
    quote: "Natural gas prices tend to be higher in winter months, when colder winter temperatures lead to more demand for natural gas, both directly for space heating and indirectly because natural gas is also the most prevalent source of electricity generation in the United States."
  - id: "e44"
    source: "ferc-nerc-uri"
    locator: "FERC-NERC Staff Report, Key Findings and Causes (Event Area: ERCOT, SPP and MISO South)"
    quote: "Natural gas fuel supply issues caused the majority, 87 percent, of the 31.4 percent of outages and derates due to fuel issues, and caused 27.3 percent of all outages, derates and failures to start during the Event."
  - id: "e45"
    source: "ferc-nerc-uri"
    locator: "FERC-NERC Staff Report on the February 2021 cold weather outages, Executive Summary"
    quote: "U.S. natural gas production in February 2021 experienced the largest monthly decline on record. 22 Between February 8 and 17, the total natural gas production in the U.S. Lower 48 fell by 28 percent. In the Event Area, Texas, Oklahoma, and Louisiana gas production at its lowest point of February 17 declined by an estimated 21 Bcf/d, exceeding a 50 percent decline when compared to average production in January 2021."
  - id: "e46"
    source: "puct-25-55"
    locator: "16 TAC 25.55(c)(3)(A)"
    quote: "No earlier than November 1 and no later than December 1 of each year, a generation entity must submit a declaration of winter weather preparedness for the upcoming winter season that:"
  - id: "e47"
    source: "puct-25-55"
    locator: "16 TAC 25.55(d)(2)(D)"
    quote: "A violation of this section is a Class A violation under §25.8(b)(3)(A) of this title (relating to Classification System for Violations of Statutes, Rules, and Orders Applicable to Electric Service Providers) and may be subject to a penalty not to exceed $1,000,000 per violation per day."
  - id: "e49"
    source: "ercot-mora-2027-01"
    locator: "Methodology notes, CAFOR reserve thresholds (January 2027 MORA)"
    quote: "The MORA uses CAFOR reserve thresholds of 2,500 and 1,500 MW to indicate, respectively, the risk that an Energy Emergency Alert and controlled outages may be triggered during the time of the forecasted monthly peak load day. These threshold levels are intended to be proxies to the 2,500 and 1,500 MW Physical Responsive Capability (PRC) thresholds. While PRC is a real-time capability measure for Resources that can quickly respond to system disturbance, ERCOT believes that the 2,500 and 1,500 MW CAFOR thresholds are appropriate indicators for the risk of Emergency Conditions given the uncertainties in predicting system conditions months in advance."
  - id: "e50"
    source: "ercot-eea-overview"
    locator: "Introduction"
    quote: "If operating reserves continue to drop, ERCOT begins emergency operations using three levels of Energy Emergency Alerts (EEAs). These levels provide access to resources only available during emergency conditions to protect the reliability of the electric system. ERCOT currently has about 2,500 MW of additional capacity available when it enters emergency conditions."
  - id: "e51"
    source: "np-03"
    locator: "Section 3.14.5, deployment paragraph (13)(b)"
    quote: "In anticipation of or in the event of a natural gas curtailment or other fuel supply disruption to an FFSSR, the QSE shall notify ERCOT as soon as practicable and may request approval to deploy FFSS to generate electricity. ERCOT shall evaluate system conditions and may approve the QSE’s request. The QSE shall not deploy the FFSS unless approved by ERCOT."
  - id: "e52"
    source: "imm-som-2025"
    locator: "Appendix: Real-Time Co-Optimization, day-ahead AS premium discussion"
    quote: "Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products."
  - id: e48
    source: ercot-ffss-summary-2026
    locator: "FFSS Procurement Summary, Categories 1 + 2, obligation period November 15, 2026 - March 15, 2027"
    quote: "Number of QSEs Offering: 7 MWs Procured: 3743.4 Projected Cost: $52,407,600.00"
  - id: e54
    source: ercot-ffss-summary-2026
    locator: "FFSS Procurement Summary, Categories 1 + 2, obligation period and resource counts"
    quote: "November 15, 2026 - March 15, 2027 Total Number of Generation Resources Offered: 33 Total Number of Generation Resources Procured: 32"
  - id: e55
    source: ercot-ffss-summary-2026
    locator: "FFSS Procurement Summary, Categories 1 + 2, reserve fuel types"
    quote: "Reserve Fuel Types Procured: Fuel Oil (31) Natural Gas (1)"
---

## Definition

This scenario asks what drives ERCOT's risk when a cold snap is forecast a week out. The reference case is February 2021, when 75% of the outages, derates and failures to start in the FERC-NERC report's event area (ERCOT, SPP and MISO South together, not ERCOT alone) were caused by freezing or fuel issues. [e1][e27]

## How it works

Step 1, in February 2021 supply was the problem and gas was a weak link. In that event natural gas production, storage and distribution failed to deliver the full fuel demanded by gas plants, and Texas hub gas prices spiked to over $400/MMBtu. [e2][e4] Demand for natural gas for heating is also higher in winter. [e24]

Step 2, check what preparation the rules require. Generators must complete winter weather emergency preparation measures by December 1 each year. [e5] ERCOT procures Firm Fuel Supply Service ahead of each November 15 to March 15 obligation period to keep some units available through a gas curtailment, with a budget cap of $54 million per period. [e6][e7][e8]

Step 3, watch ERCOT's notices. OCNs can be issued for weather concerns such as anticipated freezing temperatures and ice storms. [e11] When ERCOT issues an OCN, Advisory, Watch or Emergency Notice for forecast cold, QSEs must update COPs, telemetry and outage reports for weather, fuel supply and fuel switching limits. [e10] A winter weather Watch also starts FFSS deployment preparation. [e9]

Step 4, know the emergency steps. ERCOT declares EEA Level 1 when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the EEA Level 1 actions. [e12] In February 2021 ERCOT had ordered 20,000 MW of manual firm load shed by 7:00 p.m. on February 15 and held it for nearly three days. [e3]

Step 5, use the recent storms as calibration. During Winter Storm Fern (January 23-27, 2026) ERCOT issued a Weather Watch on January 21, issued no EEA and had no systemwide outages. [e26][e13][e15][e14] Gas restrictions still appeared in North Texas, FFSS kept 340 MW of gas-restricted units running, and about 13.5 GW of wind nameplate was unavailable due to icing. [e18][e19][e23] The Fern load forecast peak was 84,500 MW (assuming no demand response), and the forecast overestimated expected peak consumption on January 26 and 27, while in Elliott (December 2022) ERCOT's internally developed load forecasts were too low for the 23rd and 24th. [e16][e17][e22][e25]

## Key facts

- February 2021, across the ERCOT, SPP and MISO South event area: 75% of outages, derates and failures to start were from freezing (44.2%) or fuel (31.4%) issues. [e1][e27]
- February 2021: 20,000 MW of manual firm load shed ordered by 7:00 p.m. on February 15. [e3]
- Winter preparation deadline: December 1 each year. [e5]
- FFSS obligation period: November 15 to March 15; budget up to $54 million per period. [e6][e8]
- EEA Level 1 trigger: PRC below 2,500 MW and not projected to recover within 30 minutes without the EEA Level 1 actions. [e12]
- January 2027 MORA: highest EEA risk at HE 8:00 a.m., with a 3.20% probability of an EEA. [e20]

## Say it like this

(Guidance) "Winter risk in ERCOT is mostly a supply question: whether gas keeps flowing to the plants and whether units and wind turbines freeze, with the morning peak as the tightest hour. The rules include a December 1 winter-preparation deadline, firm fuel service and COP updates when cold-weather notices are issued, and Winter Storm Fern got through with no EEA, but gas restrictions and icing still showed up and the load forecast itself can be wrong in either direction."

## Common confusion

(Guidance) The risk is not just high demand. In February 2021 the main cause of outages across the ERCOT, SPP and MISO South event area was freezing and fuel problems on the supply side. [e1][e27] Another mistake is treating the load forecast as fixed: the Fern forecast overestimated peak consumption on January 26-27 and Elliott's internal forecasts were too low on December 23-24. [e17][e25] Finally, the ERCOT "Weather Watch" sent to the public and the protocol Watch that triggers FFSS preparation should be checked against the actual notice text rather than assumed to be the same thing.

## Questions

### What would you check first when a cold snap is a week out?

The gas side and the outage side: whether gas restrictions are likely, how much FFSS capacity is available, and what ERCOT notices say. [e18][e19][e9] Then the hour profile: the January 2027 MORA puts the highest EEA risk at HE 8:00 a.m. [e20]

### What winter rules exist now?

The saved sources show mandatory winter preparation by December 1, Firm Fuel Supply Service procured for each November 15 to March 15 period, and QSE duty to update COPs for fuel limits when ERCOT issues cold-weather notices. [e5][e6][e10]

### Did the changes work in January 2026?

Fern passed with no conservation call, no EEA and no systemwide outages, though the saved sources do not attribute that outcome to specific rule changes. [e14] It still had North Texas gas restrictions and about 13.5 GW of wind nameplate lost to icing, and January 2026 unplanned thermal outages were significantly higher than January 2025. [e18][e23][e21]

## Scenarios

### A strong arctic front is forecast for next week. Your manager asks what could go wrong in ERCOT and what you would watch.

- (Reasoning) Frame it as supply risk first, demand second, and price third.
- Gas supply is the first risk: in 2021 gas production, storage and distribution failed to deliver full fuel to gas plants. [e2]
- Unit freezing and fuel together caused 75% of 2021 outages, derates and failures to start across the ERCOT, SPP and MISO South event area. [e1][e27]
- Check readiness: winter preparation was due December 1, and FFSS is procured for the November 15 to March 15 period. [e5][e6]
- Watch ERCOT's notices (OCN, Advisory, Watch and Emergency Notice); a winter weather Watch triggers FFSS preparation and cold-weather notices require COP updates for fuel limits. [e9][e10]
- Watch reserves against the EEA trigger: EEA Level 1 comes when PRC falls below 2,500 MW and is not projected to recover above 2,500 MW within 30 minutes without the EEA Level 1 actions. [e12]
- Watch the morning hours: the January 2027 MORA puts the highest EEA risk at HE 8:00 a.m. [e20]
- Treat the load forecast as uncertain both ways: Fern's forecast overestimated expected peak consumption on January 26-27 (forecast peak 84,500 MW), and Elliott's internal forecasts were too low on December 23-24. [e16][e17][e25]
- Expect wind icing: about 13.5 GW of wind nameplate was unavailable during Fern. [e23]
- (Reasoning) Close with positions: confirm hedges for the morning and evening peaks, check gas supply and fuel-switching at any owned units, and agree in advance what notice level changes the plan.

## Open items

- No saved source gives a full list of the post-2021 changes with dates in one place; the scenario cites each rule separately.
- No source describes how forward or day-ahead prices typically react to a cold-weather forecast; price behaviour before an event is left out.
- Whether the ERCOT public "Weather Watch" is the same as the Protocol Section 6.5.9.3.3 Watch was not confirmed in the sources.
- Deeper pass: the Fern outage review (ercot-fern-outage-review) gives MWh lost by cause per asset class; chart-derived numbers were not used.
- Deeper pass: gas-electric coordination (pipeline OFOs, critical gas facility designation) is mentioned in sources but not covered here.
