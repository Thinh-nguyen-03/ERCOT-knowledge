---
id: winter-storm-elliott
name: Winter Storm Elliott (Dec 2022)
aliases: [Winter Storm Elliott, Elliott, December 2022 cold weather event, Winter Storm Elliot]
kind: event
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: winter-storm-uri
    type: contrasts-with
    note: ERCOT says Elliott was the coldest event in 15 years after Uri but had far fewer cold-weather generation outages. [e14][e8]
  - to: ffss
    type: related
    note: Elliott was the first deployment of FFSS, which ERCOT says backfilled capacity lost to gas restrictions. [e6][e5]
  - to: weatherization
    type: related
    note: ERCOT says PUCT-led winterization likely helped generator performance, while noting a subset of generators still had cold-weather outages. [e8]
  - to: large-flexible-load
    type: related
    note: Registered large flexible loads cut consumption from 1,530 MW to 130 MW during the peak. [e9]
  - to: load-forecasting
    type: related
    note: A software change made ERCOT's own load forecast double count the holiday demand reduction. [e10]
  - to: energy-storage-resource
    type: related
    note: Batteries carried large shares of Regulation Up and RRS during the event. [e11]
  - to: non-spin
    type: related
    note: ERCOT deployed offline Non-Spin from 6:50 to 10:00 am on December 23, with a maximum of 3,222 MW. [e21]
  - to: prc
    type: related
    note: Minimum PRC during Elliott was 4,052 MW at about 8:33 PM on December 23, above the 2,300 MW EEA 1 level. [e19]
  - to: operating-notices
    type: related
    note: ERCOT issued an OCN on December 16, an Advisory on December 19 and a Watch on December 21, 2022 for the cold weather event. [e26]
  - to: dart-spread
    type: related
    note: ERCOT says real-time prices were much greater than day-ahead on December 23, and day-ahead much greater than real-time on December 24. [e24]
  - to: peaker-net-margin
    type: related
    note: The IMM attributes a large portion of 2022's high winter PNM accumulation to Elliott on December 23, 2022. [e12]
evidence:
  - id: e1
    source: ercot-elliott-report
    locator: "Section 1, Executive Summary (p. 1)"
    quote: "Due to the extended cold weather, ERCOT surpassed the previous peak demand record reaching 74,100 MW on December 23rd, 2022. However, the generation capacity was more than sufficient in meeting this record. Instantaneous Physical Responsive Capability (PRC), which indicates the amount of operating reserves, never fell below 4,052 MW during the storm. ERCOT does not declare a Level 1 Energy Emergency Alert (EEA) until PRC falls below 2,300 MW."
  - id: e2
    source: ercot-elliott-report
    locator: "Section 8, Generation and Transmission Outages (p. 11)"
    quote: "At the beginning of the day on December 22 nd, there were 11,988 MW of pre-existing generation outages and derates. Most of these outages were forced rather than planned. The maximum outage and derate capacity of 19,885 MW occurred on December 23rd at 08:00. The majority of this increase was due to an increase in gas resource outages."
  - id: e3
    source: ercot-elliott-report
    locator: "Section 8, Generation and Transmission Outages (p. 16)"
    quote: "Total outages during Elliott peaked at close to 20,000 MW; outages reported as cold weather- or fuel-related made up approximately 4,500 MW of that. Before Winter Storm Elliott, ERCOT inspected 255 resources for winter weather readiness. Of those inspected sites, four were subsequently found to have weather-related outages or derates during the cold weather period (all of which were gas generators)."
  - id: e4
    source: ercot-elliott-report
    locator: "Section 10.1, System-Wide Pricing (p. 19)"
    quote: "The highest real-time system-wide prices occurred on December 23rd, reaching its peak of $4,466.79/MWh during the SCED execution on December 23rd 06:52."
  - id: e5
    source: ercot-elliott-report
    locator: "Section 6, Natural Gas Restrictions (p. 10)"
    quote: "However, gas restrictions were not a significant issue during this cold weather period, in part because Firm Fuel Supply Service was used to backfill capacity that was otherwise unavailable due to these gas restrictions."
  - id: e6
    source: imm-som-2022
    locator: "Reliability Commitments, D. Firm Fuel Supply Service (p. 75)"
    quote: "FFSS was deployed for the first time during Winter Storm Elliott in late December 2022 for four days, which are shown on Table 7."
  - id: e7
    source: imm-som-2022
    locator: "Reliability Commitments, Table 7 discussion"
    quote: "Table 7 indicates that while there were shortage conditions on December 23, 2022, expected reserve levels and pricing outcomes do not reflect the need for the FFSS on the other three days. Since utilizing Fuel Supply Resources (FFSRs) is costly, we encourage ERCOT to develop clear procedures for deploying FFSS capacity, including a forecasted shortage of capacity or unresolvable transmission constraint."
  - id: e8
    source: ercot-elliott-report
    locator: "Section 14, Conclusions and Lessons Learned (p. 30)"
    quote: "Despite this, the ERCOT grid did not experience the level of generation outages as was observed during Winter Storm Uri and maintained adequate reserves throughout the cold weather period. This likely indicates that winterization efforts led by the PUCT and implemented by generation owners have had a positive impact on the ability of generators to perform under extreme cold conditions. Nevertheless, despite these efforts, a subset of generators did have cold weather-related outages. ERCOT will continue investigating the specific issues that caused these outages and report any findings to stakeholders, as appropriate."
  - id: e9
    source: ercot-elliott-report
    locator: "Section 12, Large Flexible Load Performance (p. 24)"
    quote: "During Winter Storm Elliot, Large-Flexible-Loads (LFLs) registered with ERCOT, which consist of loads such as Bitcoin mining facilities and other datacenters, curtailed their consumption from 1,530 MW to 130 MW (a 91.5% reduction) during the peak demand."
  - id: e10
    source: ercot-elliott-report
    locator: "Section 3, Peak Demand: Forecast and Actual (p. 2)"
    quote: "The new version contained a change in the way the software applies holidays to the forecast. This resulted in the forecast models double counting the typical reduction in load typically experienced due to holidays. As a result, the load forecasts produced by the internally-developed forecast models were obviously too low for the 23rd and 24th so ERCOT switched to the vendor-developed forecast models."
  - id: e11
    source: ercot-elliott-report
    locator: "Section 11.3, Energy Storage (p. 22)"
    quote: "ESRs were carrying roughly 45-55% of total RRS-Primary Frequency Response (PFR) and up to 88% of Regulation Up."
  - id: e12
    source: imm-som-2022
    locator: "Appendix, Peaker Net Margin discussion (p. A-3)"
    quote: "A large portion of this high winter PNM accumulation was due to record winter demand during Winter Storm Elliot on December 23, 2022, and tight system conditions on February 24, 2022, when net load was high."
  - id: e13
    source: ercot-elliott-report
    locator: "Section 10.3, Day-Ahead Prices (p. 21)"
    quote: "The DAM Hub Average Settlement Point Price (DASPP) was the highest during the morning of December 24th, reaching a peak of $2,539.16/MWh during hour ending 08."
  - id: e14
    source: ercot-elliott-report
    locator: "Section 9, Winter Storm Elliott vs. Winter Storm Uri (p. 19)"
    quote: "From a system-wide perspective, ERCOT tracks a load-weighted system temperature. Winter Storm Elliott was the coldest in the last 15 years, except for Winter Storm Uri."
  - id: e15
    source: ercot-elliott-report
    locator: "Section 1, Executive Summary (p. 1)"
    quote: "The Cold Weather event that occurred from December 22 nd to December 25th, 2022, was precipitated by severe winter weather"
  - id: e16
    source: ercot-elliott-report
    locator: "Page 9, text introducing the chart of generation used during the peak demand"
    quote: "The instantaneous peak demand of 74,100 MW occurred on December 23 rd at 7:30 am."
  - id: e17
    source: ercot-elliott-report
    locator: "Section 14, Conclusions and Lessons Learned (p. 30)"
    quote: "In fact, temperatures were colder than when ERCOT entered Energy Emergency Alert (EEA) on February 15, 2021, and load was more than 4,000 MW higher at the peak on December 23, 2022."
  - id: e18
    source: ercot-elliott-report
    locator: "Section 5, Committed Capacity and Generation Used by Fuel Type (p. 7)"
    quote: "Over 72 GW of capacity was committed for the evening of December 23 rd. Most of this capacity was self-committed by market participants. Online reserves remained high throughout Winter Storm Elliott."
  - id: e19
    source: ercot-elliott-report
    locator: "Section 5, Committed Capacity and Generation Used by Fuel Type (pp. 7-8)"
    quote: "4,052 MW was observed on December 23 rd at approximately 8:33 PM. PRC remained well above the EEA Level 1 criteria of 2,300 MW."
  - id: e20
    source: ercot-elliott-report
    locator: "Section 5, text on generation during the peak demand (p. 9)"
    quote: "During the peak demand on December 23rd, ERCOT was importing approximately 1,139 MW through DC Ties."
  - id: e21
    source: ercot-elliott-report
    locator: "Section 11.2, Deployment of Non-Spin (p. 21)"
    quote: "Offline Non-Spin Reserve was deployed between 6:50 am to 10:00 am on December 23rd due to the projected ramping capability of available resources being below the forecasted load ramp. The maximum deployment was 3,222 MW."
  - id: e22
    source: ercot-elliott-report
    locator: "Section 11.1, Deployment of Responsive Reserve Service (p. 21)"
    quote: "Responsive Reserve Service was not deployed during this winter storm."
  - id: e23
    source: ercot-elliott-report
    locator: "Section 10.1, System-Wide Pricing (pp. 19-20)"
    quote: "Excluding December 23 rd, the peak total Real-Time system-wide price was $155.24/MWh from the SCED execution"
  - id: e24
    source: ercot-elliott-report
    locator: "Section 10.2, Hub Average and Hub Bus Average Settlement Point Prices (p. 20)"
    quote: "The real-time prices were much greater than dayahead prices on December 23 rd. In contrast, day-ahead prices were much greater than Real-Time prices on December 24th."
  - id: e25
    source: ercot-elliott-report
    locator: "Section 7, RUC and FFSS Summary (p. 11)"
    quote: "FFSS is a new service starting this winter season. Generators providing FFSS are required to have 48 hours of stored fuel. This service was beneficial in replacing generation capacity unavailable due to gas restrictions."
  - id: e26
    source: ercot-elliott-report
    locator: "Section 13.1, Operations Outreach, notice table (p. 25)"
    quote: "12/16/2022 OCN issued for the predicted extreme cold 8:59 weather event for the ERCOT Region Thursday morning, December 22, 2022, through Monday, December 26, 2022. 12/19/2022 Advisory issued for the predicted extreme cold 13:26 weather event for the ERCOT Region Thursday morning, December 22, 2022, through Monday, December 26, 2022. 12/21/2022 At 10:00, Watch issued for the predicted"
  - id: e27
    source: imm-som-2022
    locator: "Appendix, Firm Fuel Supply Service (p. A-3)"
    quote: "At noon on December 21, 2022, a Public Notice was issued instructing Qualified Scheduling Entities (QSEs) to prepare for potential FFSS deployments. Later that same day, the first FFSS deployment instructions were issued. Between approximately noon on December 22, 2022, and noon on December 25, 8 Resources had active FFSS deployments."
  - id: e28
    source: ercot-elliott-board
    locator: "Slide 12, Natural Gas Limitations, FFSS deployment table, first two rows"
    quote: "Operating Day Number of Resource Deployed Total FFSS Deployed in MW (Based on FFSS Awards) 12/22/22 4 758 12/23/22 8 949"
  - id: e29
    source: imm-som-2022
    locator: "Reliability Commitments, Table 7: Firm Fuel Supply Service Deployments, page 106 (OCR), row 12/23/2022 (columns Day, Firm Fuel Supply Service MWs, Average RT Price, and a fourth column)"
    quote: "12/23/2022 948.5 $557.53 4,247"
  - id: e30
    source: imm-som-2022
    locator: "Reliability Commitments, Table 7: Firm Fuel Supply Service Deployments, page 106 (OCR), row 12/22/2022"
    quote: "12/22/2022 757.5 $18.03 15,492"
  - id: e31
    source: imm-som-2022
    locator: "Appendix, Firm Fuel Supply Service procurement results for November 15, 2022 to March 15, 2023"
    quote: "A total of 2940.5 MW of FFSS capacity was procured; and"
  - id: e32
    source: imm-som-2022
    locator: "Appendix, Firm Fuel Supply Service procurement results for November 15, 2022 to March 15, 2023"
    quote: "All 19 Generation Resources were awarded at a clearing price of $6.19/MW/hr ($18,000/MW);"
  - id: e33
    source: ercot-elliott-board
    locator: "Slide 13, TCEQ Enforcement Discretion and DOE Order"
    quote: "12/21/22: ERCOT requested and TCEQ granted emission enforcement discretion – 12/25/22: TCEQ enforcement discretion ended at noon"
  - id: e34
    source: ercot-elliott-board
    locator: "Slide 13, TCEQ Enforcement Discretion and DOE Order"
    quote: "12/23/22: ERCOT requested and DOE issued 202(c) order to allow generation emission exceedances – DOE Order was not used since ERCOT did not declare an Emergency Condition"
  - id: e35
    source: ercot-elliott-report
    locator: "Section 1, Executive Summary (p. 1)"
    quote: "The Secretary of Energy granted ERCOT’s request and issued an order on December 23, 2022. The order allowed certain identified units to exceed permitted limitations in the event ERCOT declared an EEA Level 2 or 3."
  - id: e36
    source: ercot-elliott-board
    locator: "Slide 9, Forced Generation Outages by Fuel Type - RFI Response Summary"
    quote: "Key Takeaway: Weather-related outages were not insignificant, illustrating value of the PUC’s additional Phase 2 weatherization standards that will be effective next winter. ERCOT is investigating root causes of these outages."
  - id: e37
    source: puct-25-55
    locator: "16 TAC §25.55(c)(1)(B), winter season preparations (p. 25.55-2)"
    quote: "Beginning in 2023, implement weather emergency preparation measures by December 1 each year, in addition to the weather emergency preparation measures"
  - id: e38
    source: puct-25-55
    locator: "16 TAC §25.55(c)(1)(B), continued (p. 25.55-3)"
    quote: "required by subparagraph (A) of this paragraph, that could reasonably be expected to ensure sustained operation of the resource at the 95th percentile minimum average 72-hour wind chill temperature reported in ERCOT’s historical weather study, required under subsection (i) of this section, for the weather zone in which the resource is located."
  - id: e39
    source: ercot-elliott-report
    locator: "Section 14, Conclusions and Lessons Learned (pp. 30-31)"
    quote: "1. Reduce forecast errors from the alternative load forecasting source by procuring a new external load forecast, 2. Develop an innovative process for developing load forecast models specifically designed for extreme cold weather, 3. Reduce weather forecast error by procuring additional raw weather forecasting models; and 4. Improve the forecasting software upgrade testing process, including updating testing procedures to include holiday and other outlier phenomena."
  - id: e40
    source: ercot-elliott-board
    locator: "Slide 5, Load Forecast"
    quote: "The under-forecast had no impact on reliability because we intentionally prepared for higher demand than what the forecast models were projecting"
  - id: e41
    source: ercot-elliott-report
    locator: "Section 12, Large Flexible Load Performance (p. 24)"
    quote: "Additionally, they provided 75 MW of RRS throughout the event. Of the approximately 20 known LFL sites, all curtailed their load to some extent. Several responded by shutting off completely for the entirety of the event, while most sites curtailed when prices rose above the $70/MWh to $110/MWh range."
  - id: e42
    source: ercot-elliott-report
    locator: "Section 9, Winter Storm Elliott vs. Winter Storm Uri (p. 19)"
    quote: "The low temperature of 15 degrees in Houston on the morning of December 23 rd was several degrees below the minimum temperatures from February 2011 and was only two degrees warmer than the February 2021 winter storm. Dallas, on the other hand, was 13 degrees warmer than the peak cold in February 2021."
  - id: e43
    source: ercot-elliott-report
    locator: "Section 9, comparison table, Peak Demand (MW) row (p. 18)"
    quote: "Elliot Uri 74,100 MW (Instantaneous 69,812 (Hourly Actual) 12/23/2022 HE08) 76,819 (Hourly Back-cast)"
  - id: e44
    source: ercot-elliott-board
    locator: "Slide 3, Operational Highlights, 12/22/2022 HE22 box"
    quote: "Set new all-time Winter Demand Record 73,658 MW"
  - id: e45
    source: ercot-elliott-board
    locator: "Slide 3, Operational Highlights, 12/23/2022 HE9 box"
    quote: "Set new all-time Winter Demand Record 73,910 MW"
  - id: e46
    source: imm-som-2023
    locator: "Executive Summary, Demand for and Supply of Electricity"
    quote: "The winter record was set in 2022 of 78.3 GW on December 23, 2022, and subsequently broken on January 16, 2024, with a winter peak load of 78.5 GW."
  - id: e47
    source: imm-som-2023
    locator: "Executive Summary, Recommendation 2023-4, FFSS"
    quote: "First, the capacity of the deployed FFSSRs is removed from reserves when calculating ORDC adders. This can cause the market to set inefficiently high prices through the ORDC when the system is not short of reserves."
  - id: e48
    source: imm-som-2023
    locator: "Executive Summary, Recommendation 2023-4, FFSS"
    quote: "FFSS was deployed three times in 2023 during the first obligation period in the winter of 2022/2023. During these instances, we identified that operating reserve levels (8,000 to 9,000 MW) and pricing outcomes (roughly $40 per MWh) did not reflect the need for FFSS."
  - id: e49
    source: ercot-ffss-summary-2025
    locator: "FFSS Procurement Summary, November 15, 2025 - March 15, 2026"
    quote: "Number of QSEs Offering: 6 MW Procured: 4250.4* Projected Cost: $52,076,304.00"
  - id: e50
    source: ercot-elliott-report
    locator: "Section 8, Generation and Transmission Outages (p. 18)"
    quote: "The transmission outages did not have a significant impact on the system during Winter Storm Elliott. The maximum resource curtailment caused by transmission constraints was below 500 MW, and it came down to 0 MW by December 24th."
  - id: e51
    source: ercot-elliott-report
    locator: "Section 6, Natural Gas Restrictions (p. 10)"
    quote: "Several pipeline operators issued Operational Flow Orders (OFO) to prevent shippers from moving additional gas beyond contract maximums during the cold weather."
---

## Definition

Winter Storm Elliott was the cold weather event of December 22 to 25, 2022 in which, according to ERCOT's report, demand surpassed the previous peak demand record, reaching 74,100 MW on December 23, 2022, while keeping operating reserves (PRC) above 4,052 MW, well above the 2,300 MW level at which ERCOT declares EEA 1. [e15][e1] ERCOT's Board deck calls the hourly peaks new all-time winter demand records. [e44][e45]

## How it works

On ERCOT's load-weighted system temperature, Elliott was the coldest event in 15 years except Uri, yet supply held up much better. [e14][e8] ERCOT says temperatures were colder than when it entered EEA on February 15, 2021, and load at the December 23 peak was more than 4,000 MW higher. [e17] Generation outages and derates rose from 11,988 MW at the start of December 22 to a maximum of 19,885 MW at 08:00 on December 23, mostly from more gas resource outages. [e2] Of the close to 20,000 MW of outages at the peak, about 4,500 MW were reported as cold-weather or fuel related; of 255 resources ERCOT had inspected beforehand, four had weather-related outages, all gas generators. [e3]

Market participants kept the lights on mostly by themselves: over 72 GW was committed for the evening of December 23, most of it self-committed. [e18] ERCOT deployed offline Non-Spin from 6:50 to 10:00 am on December 23 (maximum 3,222 MW) because projected ramping capability was below the forecast load ramp, and did not deploy RRS at all. [e21][e22] Minimum PRC was 4,052 MW at about 8:33 PM on December 23. [e19] At the peak ERCOT was importing about 1,139 MW over the DC Ties. [e20]

Gas: several pipelines issued Operational Flow Orders to stop shippers moving gas beyond contract maximums. [e51] ERCOT says gas restrictions were not a significant issue, in part because FFSS backfilled capacity that was otherwise unavailable due to those restrictions. [e5] FFSS, new that winter, required 48 hours of stored fuel. [e25] The IMM says the first FFSS deployment instructions were issued on December 21 and 8 Resources had active deployments between about noon December 22 and noon December 25. [e27] On the demand side, registered large flexible loads cut consumption from 1,530 MW to 130 MW during the peak, most curtailing when prices rose above the $70 to $110/MWh range, and batteries carried up to 88% of Regulation Up. [e9][e41][e11]

## ERCOT context

Prices: real-time system-wide prices peaked at $4,466.79/MWh in the SCED run at 06:52 on December 23; excluding December 23 the peak was $155.24/MWh. [e4][e23] Day-ahead hub average prices peaked at $2,539.16/MWh in hour ending 08 on December 24. [e13] ERCOT notes real-time was much higher than day-ahead on December 23 and the reverse on December 24. [e24] The IMM says a large portion of the high winter peaker net margin accumulation in 2022 was due to record winter demand during Elliott on December 23, 2022 and tight conditions on February 24, 2022. [e12]

FFSS costs and criticism: for the first obligation period (November 15, 2022 to March 15, 2023) 2,940.5 MW was procured, with all 19 resources awarded at $18,000/MW. [e31][e32] In the IMM's Table 7 the average real-time price on the four FFSS days ranged from $18.03 (December 22, 757.5 MW deployed) to $557.53 (December 23, 948.5 MW). [e30][e29] ERCOT's Board deck gives 949 MW across 8 resources for December 23. [e28] The IMM saw shortage conditions on December 23 but said reserve levels and prices did not show a need for FFSS on the other three days, and asked ERCOT to set clear deployment procedures. [e7] It later added that removing deployed FFSS capacity from reserves in the ORDC calculation can produce inefficiently high prices when the system is not short. [e47] The IMM also found three further FFSS deployments in early 2023 that it says reserves of 8,000 to 9,000 MW and prices of roughly $40 per MWh did not justify. [e48] For 2025-26 ERCOT procured 4,250.4 MW of FFSS at a projected cost of $52,076,304. [e49]

Emergency permissions: ERCOT obtained TCEQ enforcement discretion on December 21, which ended at noon on December 25, and DOE issued a 202(c) order on December 23 that applied only if ERCOT declared EEA 2 or 3; ERCOT says the order was not used because it declared no Emergency Condition. [e33][e35][e34]

What changed: ERCOT concluded that PUCT-led winterization likely improved generator performance, though some generators still had cold-weather outages that it would investigate. [e8] Its Board deck said the weather-related outages illustrated the value of the PUC's Phase 2 weatherization standards effective the next winter. [e36] 16 TAC 25.55 requires, beginning in 2023, measures by December 1 each year for sustained operation at the 95th percentile minimum average 72-hour wind chill from ERCOT's historical weather study for the resource's weather zone. [e37][e38] On forecasting, a software update made ERCOT's own models double count the holiday reduction in demand, so it switched to vendor models, and it listed four corrective actions. [e10][e39]

## Key facts

- Peak demand: 74,100 MW, an instantaneous figure, at 7:30 am on December 23, 2022 (ERCOT report). [e1][e16]
- Board deck winter records: 73,658 MW (December 22, HE22) and 73,910 MW (December 23, HE9). [e44][e45] The IMM's 2023 report instead puts the December 23, 2022 winter record at 78.3 GW, broken on January 16, 2024 at 78.5 GW. [e46]
- ERCOT's comparison table puts Uri's peak at 69,812 MW hourly actual and 76,819 MW hourly back-cast, against Elliott's 74,100 MW instantaneous. [e43]
- PRC never fell below 4,052 MW (about 8:33 PM December 23), above the 2,300 MW EEA 1 level. [e1][e19]
- Maximum outages and derates: 19,885 MW at 08:00 on December 23; about 4,500 MW were cold-weather or fuel related. [e2][e3]
- Peak real-time system-wide price: $4,466.79/MWh at 06:52 on December 23; day-ahead hub average peak $2,539.16/MWh, December 24 HE08. [e4][e13]
- Offline Non-Spin deployed 6:50-10:00 am December 23, max 3,222 MW; RRS not deployed. [e21][e22]
- FFSS deployed for the first time, for four days; 2,940.5 MW procured for 2022-23. [e6][e31]
- Maximum resource curtailment from transmission constraints was below 500 MW. [e50]

## Timeline

- December 16, 2022, 8:59: OCN for the extreme cold expected December 22 to 26; December 19, 13:26: Advisory; December 21, 10:00: Watch. [e26]
- December 21, 2022: TCEQ grants emission enforcement discretion at ERCOT's request. [e33]
- December 21, 2022, noon: notice to QSEs to prepare for FFSS deployment; the first FFSS deployment instructions follow later that day (IMM). [e27]
- December 22, 2022: the event window opens (December 22 to 25) [e15]; at the beginning of the day 11,988 MW of outages and derates were already in place. [e2]
- December 22, 2022, about noon to December 25, about noon: 8 Resources have active FFSS deployments (IMM). [e27]
- December 22, 2022, HE22: new winter demand record of 73,658 MW (Board deck). [e44]
- December 23, 2022, 6:50 am to 10:00 am: offline Non-Spin deployed, maximum 3,222 MW. [e21]
- December 23, 2022, 06:52: real-time system-wide price peaks at $4,466.79/MWh. [e4]
- December 23, 2022, 7:30 am: instantaneous peak demand of 74,100 MW; HE9 hourly record of 73,910 MW (Board deck). [e16][e45]
- December 23, 2022, 08:00: outages and derates peak at 19,885 MW. [e2]
- December 23, 2022: DOE issues a 202(c) order (usable only in EEA 2 or 3; not used). [e35][e34]
- December 23, 2022, about 8:33 PM: minimum PRC of 4,052 MW. [e19]
- December 24, 2022, hour ending 08: day-ahead hub average price peaks at $2,539.16/MWh. [e13]
- December 25, 2022, noon: TCEQ enforcement discretion ends. [e33]

## Say it like this

(Guidance) Elliott was the coldest test since Uri and set new winter demand records, but outages peaked at close to 20,000 MW while PRC never fell below 4,052 MW, against the 2,300 MW EEA 1 trigger, so ERCOT never declared an emergency. [e45][e3][e1] ERCOT credits winterization and the first use of FFSS; the price spike was brief, $4,466.79/MWh at 06:52 on December 23, and the IMM questioned whether FFSS was needed on three of its four deployment days. [e8][e5][e4][e7]

## Common confusion

(Guidance) ERCOT's report says PRC never fell below 4,052 MW, above the 2,300 MW EEA 1 trigger. [e1] "Fewer outages" does not mean none: about 4,500 MW were weather or fuel related, and ERCOT says a subset of generators still had cold-weather outages. [e3][e8] The DOE 202(c) order existed but was never used, because it applied only in EEA 2 or 3. [e35][e34] Note the different peak figures across ERCOT and IMM documents (see Open items).

## Questions

### Why did Elliott go so differently from Uri?

ERCOT's report says the grid did not see Uri-level generation outages and kept adequate reserves, and that PUCT-led winterization likely helped. [e8] FFSS also backfilled capacity lost to gas restrictions. [e5] Elliott was also shorter (December 22 to 25) and, outside Houston, less extreme than February 2021; Dallas was 13 degrees warmer than its February 2021 low. [e15][e42]

### What was the main forecasting lesson?

A software update made ERCOT's internal load forecast models double count the usual holiday demand reduction, so forecasts were too low. [e10] ERCOT told its Board the under-forecast had no reliability impact because it prepared for higher demand than the models projected, and it committed to four corrective actions including a new external forecast and better upgrade testing. [e40][e39]

### What did the IMM criticize about FFSS during Elliott?

It said reserve levels and prices did not show a need for FFSS on three of the four deployment days and asked ERCOT to set clear deployment procedures, since FFSS is costly. [e7] It also argues that removing deployed FFSS capacity from ORDC reserves can create inefficiently high prices when the system is not short. [e47]

### Why did real-time prices spike on the morning of December 23 but not afterwards?

ERCOT deployed offline Non-Spin from 6:50 am because projected ramping capability was below the forecast load ramp, and the price peaked at 06:52; outside December 23 the highest real-time system-wide price was $155.24/MWh. [e21][e4][e23] (Guidance) The spike was a morning ramp problem during the coldest hours, not a sustained shortage.

### What if ERCOT had declared EEA 2 during Elliott?

DOE's 202(c) order of December 23 would have let certain identified units exceed their permit limits, since it applied in EEA Level 2 or 3. [e35] ERCOT never got near: PRC stayed at or above 4,052 MW. [e19]

### How did flexible demand behave?

Registered large flexible loads cut from 1,530 MW to 130 MW at the peak and provided 75 MW of RRS; most curtailed once prices rose above $70 to $110/MWh. [e9][e41]

## Scenarios

### A day-ahead buyer covered December 24, 2022 at the DAM price. How did that work out?

- ERCOT says day-ahead prices were much greater than real-time on December 24, with the DAM hub average peaking at $2,539.16/MWh in HE08. [e24][e13]
- Outside December 23 the real-time system-wide price never exceeded $155.24/MWh. [e23]
- (Guidance) Buying day-ahead after a scare day locks in fear premium; the real-time outcome depended on supply holding, which it did.

## Open items

- Record scope and size: the IMM 2023 report says the winter record was 78.3 GW on December 23, 2022 (broken January 16, 2024 at 78.5 GW); ERCOT's Board deck gives new all-time winter records of 73,658 MW and 73,910 MW and its report gives 74,100 MW instantaneous; the IMM 2022 report says only that the new 2022 winter record was "near" the 74,820 MW 2019 summer record. The 78.3 GW figure is not explained in the saved sources. All figures left with their sources.
- ERCOT's comparison table gives Uri's peak as 69,812 MW hourly actual and 76,819 MW hourly back-cast; the back-cast method is not described.
- Adequacy wording: ERCOT's Board deck says ERCOT "had adequate generation throughout Winter Storm Elliott"; the IMM 2022 report says "there were shortage conditions on December 23, 2022". Possibly different meanings of shortage; not resolved.
- Board deck date: sources.yaml lists 2023-02-21 but the deck's cover says "February 28, 2023".
- LFL peak response: the ERCOT report says LFLs cut from 1,530 MW to 130 MW; the Board deck says the response "totaled ~1,400 MW". Consistent in size but stated differently.
- The fourth column of the IMM's Table 7 (values 15,492; 4,247; 7,956; 6,878) has a header that is illegible in the OCR copy ("... Minimum"); it is not described here.
- FFSS deployment MW: the IMM gives 757.5 and 948.5 MW; the ERCOT Board deck gives 758 and 949 MW (rounded). Consistent.
- RFI results by fuel type are only in a chart; no quotable MW by fuel. The outcome of ERCOT's root-cause investigation is not in the saved sources.
- NERC/FERC review of Elliott is not saved.
- The IMM 2023 report says FFSS was deployed three more times in 2023 during the 2022/2023 obligation period; dates were in a garbled table and not checked.
