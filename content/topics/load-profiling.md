---
id: load-profiling
name: Load Profiling
aliases: [load profile, load profiling, profile ID, profiled load, adjusted static model, weather zone]
kind: concept
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: esi-id
    type: related
    note: Load Profile IDs are assigned to individual ESI IDs. [e4]
  - to: ams-meters
    type: contrasts-with
    note: Load Profiling is used when ERCOT does not receive 15-minute Settlement Interval consumption data. [e2]
  - to: lse
    type: related
    note: Aggregated profiled load is allocated to QSE and LSE settlement responsibilities. [e6]
  - to: tdsp
    type: related
    note: The TDSP assigns weather zones and submits load profile ID changes. [e5][e4]
  - to: rep
    type: related
    note: A competitive retailer may dispute a Load Profile ID assignment. [e10]
  - to: ufe
    type: related
    note: Load profile design aims to minimize its contribution to unaccounted for energy. [e7]
  - to: settlement-statements
    type: used-in
    note: Aggregated profiled load determines each QSE and LSE responsibility by Settlement Interval and Settlement Point. [e6]
  - to: market-information-system
    type: related
    note: ERCOT posts forecast and backcast Load Profiles to its website by 1000 CPT each Business Day. [e27]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Profile"
    quote: "A representation of the energy usage of a group of Customers, showing the Demand variation on an hourly or sub-hourly basis."
  - id: e2
    source: np-18
    locator: "Section 18.1(1)"
    quote: "The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process."
  - id: e3
    source: np-18
    locator: "Section 18.2.2.1(1)"
    quote: "Load Profiles for non-interval metered Loads are created using statistical models developed from appropriate Load research sample data. These models are referred to as adjusted static. These model equations relate daily Settlement Interval Load patterns to relevant weather descriptors such as maximum and minimum dry-bulb temperature and humidity."
  - id: e4
    source: np-18
    locator: "Section 18.4.2(2)-(3)"
    quote: "Should there be any change in Load Profile ID assignment to any ESI ID, it will be the responsibility of the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) to submit those changes to ERCOT."
  - id: e5
    source: np-18
    locator: "Section 18.4.4(1)"
    quote: "TSPs and /or DSPs will assign each ESI ID to a Weather Zone, based on service address ZIP code."
  - id: e6
    source: np-11
    locator: "Section 11.4, Load Data Aggregation, paragraph (1)"
    quote: "Data Aggregation is the process of netting, grouping and summing Load consumption data, applying appropriate profiles, Transmission Loss Factors (TLFs) and Distribution Loss Factors (DLFs) and calculating and allocating Unaccounted For Energy (UFE) to determine each Qualified Scheduling Entity (QSE) and/or Load Serving Entity (LSE) responsibility by Settlement Interval by Settlement Point and by other prescribed aggregation determinants."
  - id: e7
    source: np-18
    locator: "Section 18.2.1(1)(c)"
    quote: "Minimize the Load Profiles’ contribution to Unaccounted For Energy (UFE) over all Settlement Intervals, paying particular attention to higher cost periods;"
  - id: e8
    source: np-11
    locator: "Section 11.4.2(3), Non-Interval Missing Consumption Data Estimation"
    quote: "Profile application will take aggregated non-interval consumption data and apply the Load Profile in order to create interval consumption data. Profiled non-interval data is calculated by dividing the aggregated ESI ID’s total kWh for a specific time period (usually a month) by the profile class’ kWh for the same specific time period and scaling the Load Profile for that same specific Operating Day by the resulting value to provide the profiled non-interval consumption data."
  - id: e9
    source: np-18
    locator: "Section 18.2.3(1)"
    quote: "Load Profiles for Non-Metered Loads, e.g. streetlights, traffic signals, security lighting, billboards, and parking lots are created using engineering estimates based on known criteria, such as hours of operation, with appropriate variation in sunrise/sunset times."
  - id: e10
    source: np-18
    locator: "Section 18.4.2(3)"
    quote: "Competitive Retailers (CRs) may dispute a Load Profile ID assignment through the process described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure."
  - id: e11
    source: lpg-11
    locator: "Load Profiling Guide Section 11, Validation of Load Profile ID (November 1, 2023), paragraph (1)"
    quote: "A Load Profile ID is comprised of five components: (a) Load Profile Type; (b) Weather Zone; (c) Meter Data Type; (d) Weather sensitivity; and (e) Time Of Use Schedule (TOUS)."
  - id: e13
    source: lpg-11
    locator: "Load Profiling Guide Section 11.2.1(2)(a)(i), Business Load Profile Group Timeline"
    quote: "ERCOT shall determine the Load Profile Type for the Load Profile ID for each active and de-energized ESI ID based on the current Profile Decision Tree in Appendix D. ERCOT shall provide the TDSPs with a list of Business Load factor ESI IDs containing the current Load Profile Type and the recommended Load Profile Type for those ESI IDs where ERCOT recommends a change in Load Profile Type assignment. An electronic copy of each list shall be delivered to each TDSP no later than March 30."
  - id: e14
    source: lpg-11
    locator: "Load Profiling Guide Section 11.2.1(2)(a)(iv)"
    quote: "The TDSPs shall coordinate with ERCOT to submit the necessary Texas Standard Electronic Transaction (TX SET) transactions to update Load Profile ID assignments to be effective on the most current meter read date on or after April 15."
  - id: e16
    source: lpg-11
    locator: "Load Profiling Guide Section 11.2.1(2)(b)(i), Residential Load Profile Group Timeline"
    quote: "Every three years, ERCOT shall determine the Load Profile Type for the Load Profile ID for each active and de-energized Residential ESI ID based on the current Profile Decision Tree in Appendix D."
  - id: e17
    source: lpg-09
    locator: "Load Profiling Guide Section 9.1, Assignment of Load Profile IDs (June 1, 2018), paragraph (1)"
    quote: "Transmission and/or Distribution Service Providers (TDSPs) are responsible for initially assigning the Load Profile IDs of all Electric Service Identifiers (ESI IDs), as well as any changes in assignment. ERCOT is responsible for calculating the Load Profile Segment for the Load Profile ID as defined by the Annual Validation process in Section 11.2, Annual Validation of Load Profile Type."
  - id: e18
    source: lpg-09
    locator: "Load Profiling Guide Section 9.1.2, new Service Delivery Points"
    quote: "To assign the Load Profile Type for new ESI IDs, the TDSP shall assign the default Load Profile Segment designated in Appendix D, Profile Decision Tree, on the “Segment Assignment” worksheet."
  - id: e19
    source: lpg-09
    locator: "Load Profiling Guide Section 9.2.1.4, CR Requested Change from a Default Load Profile ID"
    quote: "After a new ESI ID has sufficient usage history, a CR may request a change from a default Load Profile ID using the ERCOT retail transaction issue resolution system. The requested Load Profile ID shall follow the guidelines for calculations contained in Appendix D, Profile Decision Tree. In the case of a Business ESI ID, the 12 months used in the calculations shall be the first 12 months of usage for the ESI ID. In the case of a residential ESI ID, the first consecutive seven months from October through April is all that is needed for the calculation of Winter Ratio."
  - id: e20
    source: lpg-09
    locator: "Load Profiling Guide Section 9.2(3), Processes to Change Load Profile ID Assignments"
    quote: "For any Load Profile ID assignments that are found to be in error by dispute, the effective date of change shall be retroactive to the meter read date when no profile segment assignment error existed; however, the effective date of the change shall not go any farther back than what would affect the True-Up Settlement."
  - id: e21
    source: lpg-09
    locator: "Load Profiling Guide Section 9.1.5, Distributed Generation"
    quote: "CRs seeking to have the profile segments for Photovoltaic, wind or other Distributed Generation (DG) assigned to one of their Residential (RES) or Business (BUS) ESI IDs shall follow the instructions on the “DG” tab of Appendix D, Profile Decision Tree."
  - id: e23
    source: lpg-06
    locator: "Load Profiling Guide Section 6.1, Current Methodologies (November 1, 2016), table"
    quote: "Interval Data Recorder (IDR) (Estimation) Proxy day Price-Responsive Other price-responsive To be determined"
  - id: e24
    source: np-18
    locator: "Section 18.2.2.2, Load Profiles for Non-Interval Metered Loads With an Unregistered Distributed Generator"
    quote: "Load Profiles for non-interval metered Loads that utilize UDGs (e.g., PhotoVoltaic (PV) or wind) will be created using a hybrid approach. At least a portion of the Load Profile will be based on Adjusted Static Models, while engineering estimates and/or generation models may be integrated as well or otherwise utilized."
  - id: e25
    source: np-18
    locator: "Section 18.2.4(1), Default Load Profiles for Interval Data Recorders"
    quote: "Default Load Profiles for IDRs will only be used when no historic Customer-specific interval data is available for Settlements. The Adjusted Static Model methodology will be used to create these Load Profiles."
  - id: e27
    source: np-18
    locator: "Section 18.3.3(2), Load Profiles posting"
    quote: "ERCOT will post to the ERCOT website by 1000 Central Prevailing Time (CPT) each Business Day, forecasted Load Profiles for the three following days for each Load Profile Type and Weather Zone. Backcast Load Profiles for each Load Profile Type and Weather Zone will be available by 1000 CPT of the second Business Day following the backcast day."
  - id: e28
    source: np-18
    locator: "Section 18.2.8(3), Adjustments and Changes to Load Profile Development"
    quote: "ERCOT shall give at least 150 days’ Notice to all Market Participants prior to market implementation of any change to the Load Profiling Methodology, existing Load Profiles, or when any additional Load Profiles are developed."
  - id: e30
    source: np-18
    locator: "Section 18.5.1(1), ERCOT Responsibilities"
    quote: "There may be extenuating circumstances including, but not limited to, prolonged widespread power outages that may necessitate ERCOT’s discretion for adjusting non-Interval Data Recorder (IDR) backcasted Load Profiles. If an event requires ERCOT to utilize this discretion, ERCOT shall send a Market Notice within three Business Days of making the adjustments and report its action(s) and reason(s) for doing so to the next meeting of the appropriate Technical Advisory Committee (TAC) subcommittee."
  - id: e31
    source: np-11
    locator: "Section 11.4.2(4), Non-Interval Missing Consumption Data Estimation"
    quote: "Any active ESI ID on the Operating Day being settled for which ERCOT does not have a meter read within 12 months of the Operating Day will not have a usage estimate applied to its Load Profile. That is, the estimate for these Customers will be their assigned profile without any scaling factor applied."
  - id: e33
    source: np-11
    locator: "Section 11.4.3(2)-(3), Interval Consumption Data Estimation"
    quote: "The NWS proxy day method will be used for estimating interval data for IDRs where the profile type code is BUSLRG or BUSLRGDG. (3) The WS proxy day method will be used for estimating interval data for IDRs where the profile type code is not BUSIDRRQ, BUSLRG, or BUSLRGDG."
  - id: e34
    source: np-11
    locator: "Section 11.4.3.1(1)(a), Weather Sensitive Proxy Day Method"
    quote: "To determine eligible proxy days, select all days (of matching weekday/weekend day type and time period) within five degrees of the maximum temperature of the target Operating Day based on the previous 365 days and then limit the selection to those days that have their maximum temperatures occurring within two hours of the maximum temperature hour of occurrence of the Operating Day."
  - id: e35
    source: np-11
    locator: "Section 11.4.3.1(1)(d)-(e), Weather Sensitive Proxy Day Method"
    quote: "A final ranking is performed with the temperature magnitude test weighted more heavily than the shape test. The weighting factors are 70% and 30%. (e) Select the top three ranked eligible days."
  - id: e36
    source: np-11
    locator: "Section 11.4.3.2(1)(a), Non-Weather Sensitive Proxy Day Method"
    quote: "Use the most recent proxy day for which data is available as the estimate for the target Operating Day. From historical ESI ID specific interval data, choose the most recent occurrence of the appropriate day of the week (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday) corresponding to the day of the week of the Operating Day (holidays are treated as Sundays) within the most recent 12 months of the Operating Day; or"
  - id: e37
    source: np-11
    locator: "Section 11.4.3.3(1), Interval Data Recorder Estimation Reporting"
    quote: "ERCOT shall produce a report detailing the proxy day selection list for both NWSIDR and WSIDR methodologies. This report will be made available to Market Participants on a daily basis."
  - id: e38
    source: np-11
    locator: "Section 11.4.4.2(1), Load Reduction for Excess PV (eligibility and window)"
    quote: "For ESI IDs with non-IDRs installed, AML shall be reduced for excess generation from ESI IDs with Unregistered Distributed Generators (UDGs) made up of PV generation behind the meter where there is a meter that measures excess energy flow into the ERCOT System in a separate register. Only ESI IDs that have been assigned a PV profile segment as specified in Load Profiling Guide Appendix D, Profile Decision Tree, shall be eligible for this reduction."
  - id: e39
    source: np-11
    locator: "Section 11.4.4.2(1), PV adjustment equation"
    quote: "PV_adjust _(i) = kWh_gen / (read_days * 16)"
  - id: e40
    source: np-11
    locator: "Section 11.4.4.2(1), PV adjustment window"
    quote: "Intervals beginning 1100 and ending 1500 Central Prevailing Time (CPT) (spanning (16) 15-minute intervals) shall be reduced by the following amount:"
  - id: e41
    source: np-11
    locator: "Section 11.4.4.2(2), wind adjustment"
    quote: "Intervals beginning 0800 and ending 2000 CPT (spanning (48) 15-minute intervals) shall be reduced by the following amount: Wind_adjust = kWh_gen * .65 / (read_days * 48) All other intervals in the day (the remaining 48 intervals) shall be reduced by the following amount: Wind_adjust = kWh_gen * .35 / ((read_days * 48) + DST adjust)"
  - id: e42
    source: np-11
    locator: "Section 11.4.4.2, variable definitions"
    quote: "Actual (measured) kWh flowing into the Distribution System (out-flow from the Premise)."
  - id: e43
    source: np-11
    locator: "Section 11.4.4.3(1), Load Reduction for Excess from Other Distributed Generators"
    quote: "All intervals in the meter read period shall be reduced by the following amount: DG_adjust _(i) = kWh_gen / read_ints"
  - id: e44
    source: np-11
    locator: "Section 11.4.4.3(2)"
    quote: "The energy reduction adjustment for ESI IDs, which have UDGs behind the meter and have an AMS integrated meter that measures the excess energy flow into the ERCOT System in 15-minute intervals, shall be determined using the actual 15-minute interval data, if available."
  - id: e45
    source: np-11
    locator: "Section 11.4.5(2), Adjustment of Consumption Data for Losses"
    quote: "Loads that are transmission connected or that are settled at transmission level will not be allocated distribution level losses. Intervals with negative Load will not be allocated distribution level losses."
  - id: e46
    source: np-11
    locator: "Section 11.4.3(1), Interval Consumption Data Estimation"
    quote: "ERCOT will estimate all ESI IDs with Interval Data Recorders (IDRs) for which consumption data has not been received for the Operating Day. The method for estimating interval data for ESI IDs with IDR Meters is a “Weather Response Informed Proxy Day” technique."
  - id: e12
    source: lpg-11
    locator: "Load Profiling Guide Section 11(2), Validation of Load Profile ID"
    quote: "ERCOT shall validate the first two components, the Load Profile Type and Weather Zone, at the following times: (a) As part of the initial assignment of Load Profile IDs for Opt-In Entities; (b) When Load Profile Segment definitions change; (c) One time per year during the Business Annual Validation process; and (d) At least one time every three years during the Residential Annual Validation process."
---

## Definition

A Load Profile represents the energy usage of a group of customers, showing demand variation on an hourly or sub-hourly basis. [e1]

## How it works

The retail market requires 15-minute settlement intervals. Load profiling is a cost-effective way to estimate and allocate 15-minute load for ESI IDs when ERCOT does not receive 15-minute consumption data. [e2] The Load Profiling Guide's methodology table pairs each load type with a method: non-interval metered loads with adjusted static models, non-interval loads with distributed generation with adjusted static models and engineering estimates, non-metered loads with engineering estimates, and IDR estimation with proxy day; "other price-responsive" load is listed as "to be determined" in the version saved (dated November 1, 2016). [e23]

For non-interval metered loads, profiles come from statistical "adjusted static" models built from load research samples and tied to weather descriptors such as temperature and humidity. [e3] Where a premise has an unregistered distributed generator (PV or wind), the profile is a hybrid: at least part adjusted static, with engineering estimates and/or generation models possibly integrated. [e24] Non-metered loads such as streetlights use engineering estimates. [e9] Default profiles for IDRs are used only when no historic customer-specific interval data is available, and are built with the adjusted static method. [e25]

Each day ERCOT posts forecast profiles for the next three days and backcast profiles by 1000 CPT, for each Load Profile Type and Weather Zone: forecasts by 1000 CPT each Business Day, backcasts by 1000 CPT of the second Business Day after the backcast day. [e27] In extenuating circumstances such as prolonged widespread outages, ERCOT may use discretion to adjust non-IDR backcasted profiles, but must send a Market Notice within three Business Days and report to the next TAC subcommittee meeting. [e30] Changes to methodology or profiles require at least 150 days' Notice to Market Participants. [e28]

## Formula

Profiled non-interval data. For non-interval data, profile application takes an ESI ID's aggregated usage for a period, usually a month, divides it by the profile class's usage for the same period, and scales the day's load profile by the result. [e8] In the Protocol's equation, PND is profiled non-interval data, CP is the class profile and LP is the daily load profile interval data set. For an active ESI ID with no meter read within 12 months of the Operating Day, no usage scaling is applied: the estimate is its assigned profile unscaled. [e31]

Excess generation adjustments for behind-the-meter distributed generation (non-IDR ESI IDs with a separate register measuring excess flow into ERCOT). The Adjusted Metered Load of an eligible ESI ID with PV is reduced for excess generation, and only ESI IDs assigned a PV profile segment qualify. [e38] The reduction applies to the 16 fifteen-minute intervals from 1100 to 1500 CPT. [e40] It is kWh_gen divided by read_days times 16, where kWh_gen is the measured kWh flowing into the Distribution System (out-flow from the premise) and read_days is the days in the meter read period. [e39][e42] For wind, intervals from 0800 to 2000 CPT (48 intervals) are reduced using 65% of kWh_gen, and the remaining 48 intervals using 35% of kWh_gen, each spread over read_days times 48 (plus a daylight saving adjustment in the second). [e41] For other DG, all intervals in the read period are reduced by kWh_gen divided by the number of 15-minute intervals in the read period. [e43] Where an AMS integrated meter (or MOU/EC non-BUSIDRRQ IDR for PV and wind) measures excess flow in 15-minute intervals, the actual interval data is used if available. [e44]

Losses. Distribution losses are not allocated to transmission-connected or transmission-settled loads or to negative-load intervals. [e45]

## ERCOT context

Each ESI ID is assigned a Weather Zone by TDSPs based on service address ZIP code, and TDSPs submit any Load Profile ID change to ERCOT. [e5][e4] Profile design is meant, among other goals, to minimize its contribution to UFE over all settlement intervals. [e7]

A Load Profile ID has five components: Load Profile Type, Weather Zone, Meter Data Type, Weather sensitivity and Time Of Use Schedule. [e11] TDSPs initially assign Load Profile IDs and any changes; ERCOT calculates the Load Profile Segment through annual validation. [e17] New ESI IDs get the default segment from the Profile Decision Tree. [e18] A CR may later request a change from the default after enough usage history: for a business ESI ID the first 12 months of usage, for a residential ESI ID the first consecutive seven months from October through April (to compute the Winter Ratio). [e19] CRs may dispute an assignment, and a dispute found in the CR's favor is retroactive to the meter read date when no error existed, but not further back than what would affect True-Up Settlement. [e10][e20] CRs seeking distributed generation segments for residential or business ESI IDs follow the DG tab of the Profile Decision Tree. [e21]

Validation. ERCOT validates the Load Profile Type and Weather Zone at initial opt-in assignment, when segment definitions change, once per year for the Business process, and at least once every three years for the Residential process. [e12] In the business timeline, ERCOT determines the profile type for each active and de-energized ESI ID from the Profile Decision Tree and delivers the lists to TDSPs by March 30. [e13] TDSPs submit the TX SET updates effective on the most current meter read date on or after April 15. [e14] The residential process runs every three years. [e16]

IDR ESI IDs with missing data are estimated, not profiled. ERCOT uses a "Weather Response Informed Proxy Day" technique. [e46] The non-weather-sensitive proxy day method applies to IDRs with profile type BUSLRG or BUSLRGDG; the weather-sensitive method applies to IDRs whose profile type is not BUSIDRRQ, BUSLRG or BUSLRGDG. [e33] For weather-sensitive IDRs, eligible proxy days are matching weekday/weekend days within five degrees of the target day's maximum temperature over the previous 365 days, with the maximum temperature occurring within two hours of the target day's peak hour. [e34] The final ranking weights a temperature magnitude test 70% and a shape test 30%, and the top three ranked days are selected. [e35] For non-weather-sensitive IDRs, ERCOT uses the most recent matching day of the week (holidays treated as Sundays) within the most recent 12 months. [e36] ERCOT produces a daily report of the proxy day selection list for both methods. [e37]

## Key facts

- 15-minute settlement interval drives the need for profiles. [e2]
- Non-interval loads use adjusted static models relating load to weather. [e3]
- Non-metered loads use engineering estimates. [e9]
- TDSPs assign Weather Zones by ZIP code. [e5]
- Business Load Profile Types are validated each year and residential at least every three years. [e12]
- ERCOT posts forecast profiles three days ahead and backcast profiles by 1000 CPT of the second Business Day after the day. [e27]
- Changes to load profiling methodology need at least 150 days' Notice. [e28]

## Say it like this

(Guidance) Where ERCOT does not receive 15-minute consumption data, it applies a Load Profile and scales it to the ESI ID's usage. [e2][e8] For non-interval metered Loads the profile comes from weather-related models. [e3] Profiled load then goes into Data Aggregation, which determines each QSE and LSE's responsibility by Settlement Interval. [e6]

## Common confusion

(Guidance) A profile is not that customer's own interval data: it is a class shape scaled to the ESI ID's usage. [e8] Load Profiling is implemented for cases where ERCOT does not receive 15-minute Settlement Interval consumption data. [e2] Also, an IDR with missing data is not profiled by scaling a class shape; it is estimated from proxy days. [e46] The Load Profile ID is also more than a shape: it has five components, of which ERCOT validates the first two (type and Weather Zone). [e11][e12]

## Questions

### Why does ERCOT need profiles at all?

Settlement is in 15-minute intervals, and where ERCOT does not receive 15-minute consumption data, profiles estimate it. [e2]

### How is a profile scaled to a customer?

Aggregated usage for a period is divided by the profile class's usage over the same period, and the day's profile is scaled by that ratio. [e8]

### Why does a wrong Load Profile ID matter, and how is it fixed?

The profile drives estimated interval load in settlement; the TDSP submits assignment changes and a CR may dispute an assignment. [e4][e10] A dispute found in the CR's favor is made retroactive to the last meter read without an error, but not further back than what would affect True-Up Settlement. [e20]

### What if a behind-the-meter solar ESI ID has no interval meter?

For non-IDR ESI IDs with a separate register measuring excess flow into ERCOT and a PV profile segment, AML is reduced by the measured outflow spread over the 1100-1500 CPT intervals; if an AMS integrated meter measures excess flow in 15-minute intervals, actual interval data is used if available. [e38][e39][e40][e44]

### Why does ERCOT weight temperature magnitude more than shape when choosing proxy days?

The Protocol sets the weights at 70% for the temperature magnitude test and 30% for the shape test; it does not state its reason. [e35]

### What if a premise has no meter read in 12 months?

Its usage estimate is not scaled: the estimate is its assigned profile without a scaling factor. [e31]

## Open items

- The Profile Decision Tree (Load Profiling Guide Appendix D) and profile type definitions (e.g., BUSIDRRQ, BUSLRG) are not saved sources, so the decision rules between profile types are not stated.
- The saved Load Profiling Guide Section 6 is dated November 1, 2016, Section 9 June 1, 2018 and Section 11 November 1, 2023; later revisions are not checked.
- The Load Profiling Guide's own wording on the "other price-responsive" methodology ("To be determined") is as of the saved 2016 version.
- Resolved 2026-11-21: Load Profile ID assignment and validation cycles (np-18 18.4; lpg-09; lpg-11), IDR estimation (np-11 11.4.3) and DG excess generation adjustments (np-11 11.4.4.2-11.4.4.3).
