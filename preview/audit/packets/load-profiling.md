# Audit packet: Load Profiling (load-profiling)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Profile · text copy line 1391

BEFORE: …ry as backup regulation. LFC does include the deployment of Responsive Reserve (RRS) (manual) and ECRS from Generation Resources, CLRs, and ESRs. LFC does not include the deployment of ECRS or RRS by Load Resources when deployed as a block under Energy Emergency Alert (EEA) procedures. Load Profile 
QUOTE: A representation of the energy usage of a group of Customers, showing the Demand variation on an hourly or sub-hourly basis.
AFTER:  Load Profile ID The Load Profile designation string that contains, the Load Profile Type Code, the Weather Zone Code, the Meter Data Type Code, the Weather Sensitivity Code, and the Time-Of-Use Schedule Code. An example of all Load Profile IDs are located in the Load Profiling Guide, Appendix D, Pr…

### e2 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.1(1) · text copy line 73 · heading above: 18.1 Overview

BEFORE: …nsibilities 18-7 18.5.2 Market Participant Responsibilities 18-8 18.6 Installation and Use of Interval Data Recorders 18-8 18.6.1 Interval Data Recorder Mandatory Installation Requirements 18-8 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type 18-8 Load Profiling 18.1 Overview (1) 
QUOTE: The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process.
AFTER:  18.2 Methodology (1) A Load Profiling Methodology is the fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. All Load Profiles shall conform to the …

### e3 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.2.1(1) · text copy line 129 · heading above: 18.2.2.1 Load Profiles for Non-Interval Metered Loads Without an Unregistered Distributed Generator

BEFORE: …e Load research data available; and (i) Develop Load Profiles based on readily identifiable parameters that are not subject to frequent change. 18.2.2 Load Profiles for Non-Interval Metered Loads 18.2.2.1 Load Profiles for Non-Interval Metered Loads Without an Unregistered Distributed Generator (1) 
QUOTE: Load Profiles for non-interval metered Loads are created using statistical models developed from appropriate Load research sample data. These models are referred to as adjusted static. These model equations relate daily Settlement Interval Load patterns to relevant weather descriptors such as maximum and minimum dry-bulb temperature and humidity.
AFTER:  Other daily characteristics such as day-of-the-week and sunrise/sunset times are also employed. 18.2.2.2 Load Profiles for Non-Interval Metered Loads With an Unregistered Distributed Generator (1) Load Profiles for non-interval metered Loads that utilize UDGs (e.g., PhotoVoltaic (PV) or wind) will …

### e4 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.4.2(2)-(3) · text copy line 211 · heading above: 18.4.2 Load Profile ID Assignment

BEFORE: …nd expressed in clear, unambiguous language, and in a manner that will minimize Load Profile ID assignment disputes. 18.4.2 Load Profile ID Assignment (1) All Load Profile ID assignments shall conform with the valid combinations within the Load Profiling Guide Appendix D, Profile Decision Tree. (2) 
QUOTE: Should there be any change in Load Profile ID assignment to any ESI ID, it will be the responsibility of the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) to submit those changes to ERCOT.
AFTER:  (3) Competitive Retailers (CRs) may dispute a Load Profile ID assignment through the process described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure. (4) TSPs and/or DSPs shall change the assignment of a Load Profile ID based on a dispute outcome finding in favor of a CR. If…

### e5 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.4.4(1) · text copy line 243 · heading above: 18.4.4 Assignment of Weather Zones to Electric Service Identifiers

BEFORE: …ket Participant as having a potentially incorrect Load Profile ID assignment. Market Participants may dispute an assignment of a Load Profile ID as described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure. 18.4.4 Assignment of Weather Zones to Electric Service Identifiers (1) 
QUOTE: TSPs and /or DSPs will assign each ESI ID to a Weather Zone, based on service address ZIP code.
AFTER:  (2) ERCOT will post to the ERCOT website a mapping of a Weather Zone to appropriate Customer registration element used in assigning Weather Zones. 18.5 Additional Responsibilities (1) This Section addresses responsibilities for Load Profiling not specified in other sections of the Protocols. 18.5.1…

### e6 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4, Load Data Aggregation, paragraph (1) · text copy line 375 · heading above: 11.4 Load Data Aggregation

BEFORE: …Guide as they relate to the variance. 11.3.3 Alternative Dispute Resolution (1) An LSE, MRE, TSP or DSP may seek correction of ESI ID service history/usage information and resettlement pursuant to the provisions of Section 20, Alternative Dispute Resolution Procedure. 11.4 Load Data Aggregation (1) 
QUOTE: Data Aggregation is the process of netting, grouping and summing Load consumption data, applying appropriate profiles, Transmission Loss Factors (TLFs) and Distribution Loss Factors (DLFs) and calculating and allocating Unaccounted For Energy (UFE) to determine each Qualified Scheduling Entity (QSE) and/or Load Serving Entity (LSE) responsibility by Settlement Interval by Settlement Point and by other prescribed aggregation determinants.
AFTER:  The process of aggregating Load data provides the determinants that allow the Settlement to occur. 11.4.1 Estimation of Missing Data (1) The Data Aggregation System (DAS) will perform estimation of missing interval and non-interval retail Load meter consumption data for use in Settlement when actua…

### e7 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.1(1)(c) · text copy line 111 · heading above: 18.2.1 Guidelines for Development of Load Profiles

BEFORE: …pment of Load Profiles (1) In developing Load Profiles, ERCOT shall strive to achieve an optimal combination of the following: (a) Give no unfair advantage to any Entity; (b) Maximize usability by minimizing the total number of Load Profiles without compromising accuracy and cost effectiveness; (c) 
QUOTE: Minimize the Load Profiles' contribution to Unaccounted For Energy (UFE) over all Settlement Intervals, paying particular attention to higher cost periods;
AFTER:  (d) Reflect reasonably homogenous groups, with respect to Load shape and likely supply costs; (e) Develop Load Profiles that are distinctly different; (f) Develop Load Profiles for areas with incomplete Load data utilizing data from other sources, taking into account similarities and differences in…

### e8 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.2(3), Non-Interval Missing Consumption Data Estimation · text copy line 415 · heading above: 11.4.2 Non-Interval Missing Consumption Data Estimation

BEFORE: …ervice Provider (DSP); (h) Read start date (reading from date); and (i) Read stop date (reading to date). (2) Estimates of missing data are based on Profile ID, which includes: (a) Load Profile Type; (b) Weather Zone; (c) Meter type; (d) Weather sensitivity; and (e) Time Of Use Schedule (TOUS). (3) 
QUOTE: Profile application will take aggregated non-interval consumption data and apply the Load Profile in order to create interval consumption data. Profiled non-interval data is calculated by dividing the aggregated ESI ID's total kWh for a specific time period (usually a month) by the profile class' kWh for the same specific time period and scaling the Load Profile for that same specific Operating Day by the resulting value to provide the profiled non-interval consumption data.
AFTER:  PND _(Operating Day) = (ΣActual KWH _(Specific Time Period) / ΣCP KWH _(Specific Time Period)) * LP _(Operating Day) The above variables are defined as follows: ----------------------------------------------------------------------- Variable Unit Description ---------- ------- ---------------------…

### e9 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.3(1) · text copy line 137 · heading above: 18.2.3 Load Profiles for Non-Metered Loads

BEFORE: …., PhotoVoltaic (PV) or wind) will be created using a hybrid approach. At least a portion of the Load Profile will be based on Adjusted Static Models, while engineering estimates and/or generation models may be integrated as well or otherwise utilized. 18.2.3 Load Profiles for Non-Metered Loads (1) 
QUOTE: Load Profiles for Non-Metered Loads, e.g. streetlights, traffic signals, security lighting, billboards, and parking lots are created using engineering estimates based on known criteria, such as hours of operation, with appropriate variation in sunrise/sunset times.
AFTER:  Transmission Service Providers (TSPs) and/or Distribution Service Providers (DSPs) are responsible for providing monthly consumption (kWh) for non-metered Electric Service Identifiers (ESI IDs). 18.2.4 Default Load Profiles for Interval Data Recorders (1) Default Load Profiles for IDRs will only be…

### e10 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.4.2(3) · text copy line 213 · heading above: 18.4.2 Load Profile ID Assignment

BEFORE: …ns within the Load Profiling Guide Appendix D, Profile Decision Tree. (2) Should there be any change in Load Profile ID assignment to any ESI ID, it will be the responsibility of the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) to submit those changes to ERCOT. (3) 
QUOTE: Competitive Retailers (CRs) may dispute a Load Profile ID assignment through the process described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure.
AFTER:  (4) TSPs and/or DSPs shall change the assignment of a Load Profile ID based on a dispute outcome finding in favor of a CR. If required to change an assignment, TSPs and/or DSPs must correct the assignment in their system and the ERCOT Customer registration system within three Business Days. 18.4.3 …

## Statements to check

- **Definition #1** (cites e1): A Load Profile represents the energy usage of a group of customers, showing demand variation on an hourly or sub-hourly basis. [e1]
- **How it works #1** (cites e2, e3, e9): The retail market requires 15-minute settlement intervals. Load profiling is a cost-effective way to estimate and allocate 15-minute load for ESI IDs when ERCOT does not receive 15-minute consumption data. [e2] For non-interval metered loads, profiles come from statistical "adjusted static" models built from load research samples and tied to weather descriptors such as temperature and humidity. [e3] Non-metered loads such as streetlights use engineering estimates. [e9]
- **How it works #2** (cites e8, e6): Profile application takes an ESI ID's aggregated usage for a period, usually a month, divides it by the profile class's usage for the same period, and scales the daily load profile by the result to produce interval data. [e8] These intervals feed Data Aggregation, which applies profiles, loss factors and unaccounted-for-energy allocation to determine QSE and LSE responsibility by settlement interval and settlement point. [e6]
- **ERCOT context #1** (cites e5, e4, e7): Each ESI ID is assigned a Weather Zone by TDSPs based on service address ZIP code, and TDSPs submit any Load Profile ID change to ERCOT. [e5][e4] Profile design is meant, among other goals, to minimize its contribution to UFE over all settlement intervals. [e7]
- **Key facts #1** (cites e2): - 15-minute settlement interval drives the need for profiles. [e2]
- **Key facts #2** (cites e3): - Non-interval loads use adjusted static models relating load to weather. [e3]
- **Key facts #3** (cites e9): - Non-metered loads use engineering estimates. [e9]
- **Key facts #4** (cites e5): - TDSPs assign Weather Zones by ZIP code. [e5]
- **Common confusion #1** (cites e8, e2): (Guidance) A profile is not that customer's own interval data: it is a class shape scaled to the ESI ID's usage. [e8] It is also not used where actual interval data is received. [e2]
- **Questions #2** (cites e2): Settlement is in 15-minute intervals, and where ERCOT does not receive 15-minute consumption data, profiles estimate it. [e2]
- **Questions #4** (cites e8): Aggregated usage for a period is divided by the profile class's usage over the same period, and the day's profile is scaled by that ratio. [e8]
- **Link to esi-id** (cites e4): related ESI ID: Load Profile IDs are assigned to individual ESI IDs. [e4]
- **Link to ams-meters** (cites e2): contrasts-with AMS Smart Meter Data: Advanced meters supply actual 15-minute intervals; profiles fill in where those are not received. [e2]
- **Link to lse** (cites e6): related LSE (Load Serving Entity): Aggregated profiled load is allocated to QSE and LSE settlement responsibilities. [e6]
- **Link to tdsp** (cites e5, e4): related TDSP (Transmission & Distribution Service Provider): The TDSP assigns weather zones and submits load profile ID changes. [e5][e4]
- **Link to rep** (cites e10): related REP (Retail Electric Provider): A competitive retailer may dispute a Load Profile ID assignment. [e10]
- **Link to ufe** (cites e7): related UFE (Unaccounted-For Energy): Load profile design aims to minimize its contribution to unaccounted for energy. [e7]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) For customers without interval meters, ERCOT builds a 15-minute load shape from a weather-driven profile and scales it to the customer's metered usage. Profiled load then rolls up to each retailer's settlement position.

