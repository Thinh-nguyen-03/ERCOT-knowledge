# Audit packet: Load Profiling (load-profiling)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.1(1) · text copy line 73 · heading above: 18.1 Overview

BEFORE: …nsibilities 18-7 18.5.2 Market Participant Responsibilities 18-8 18.6 Installation and Use of Interval Data Recorders 18-8 18.6.1 Interval Data Recorder Mandatory Installation Requirements 18-8 18.7 Transition of Interval Data Recorder Meter to AMS Profile Type 18-8 Load Profiling 18.1 Overview (1) 
QUOTE: The ERCOT retail market requires a 15-minute Settlement Interval. Load Profiling provides a cost-effective way of estimating and allocating 15-minute Load for Electric Service Identifiers (ESI IDs). This Section details how Load Profiling will be implemented in ERCOT when ERCOT does not receive 15-minute Settlement Interval consumption data and enables the accounting of energy usage in the market Settlement process.
AFTER:  18.2 Methodology (1) A Load Profiling Methodology is the fundamental basis on which Load Profiles are created. The implementation of a Load Profiling Methodology may require statistical Sampling, engineering methods, econometric modeling, or other approaches. All Load Profiles shall conform to the …

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

### e10 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.4.2(3) · text copy line 213 · heading above: 18.4.2 Load Profile ID Assignment

BEFORE: …ns within the Load Profiling Guide Appendix D, Profile Decision Tree. (2) Should there be any change in Load Profile ID assignment to any ESI ID, it will be the responsibility of the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) to submit those changes to ERCOT. (3) 
QUOTE: Competitive Retailers (CRs) may dispute a Load Profile ID assignment through the process described in Load Profiling Guide Section 14, Load Profile ID Dispute Procedure.
AFTER:  (4) TSPs and/or DSPs shall change the assignment of a Load Profile ID based on a dispute outcome finding in favor of a CR. If required to change an assignment, TSPs and/or DSPs must correct the assignment in their system and the ERCOT Customer registration system within three Business Days. 18.4.3 …

### e27 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.3.3(2), Load Profiles posting · text copy line 197 · heading above: 18.3.3 Load Profiles

BEFORE: …oad Profile data from the Load Profile creation process, in accordance with Section 18.2.6, Daily Profile Creation Process, to the ERCOT website and through the common application program interface (API). Load Profile data will be made available to Market Participants for a period of two years. (2) 
QUOTE: ERCOT will post to the ERCOT website by 1000 Central Prevailing Time (CPT) each Business Day, forecasted Load Profiles for the three following days for each Load Profile Type and Weather Zone. Backcast Load Profiles for each Load Profile Type and Weather Zone will be available by 1000 CPT of the second Business Day following the backcast day.
AFTER:  No data will be provided that will allow identification of individual Customers. 18.4 Assignment of Load Profile ID (1) Each Electric Service Identifier (ESI ID) is required to be associated with an appropriate Load Profile ID. Upon request, ERCOT and the appropriate Technical Advisory Committee (T…

## Statements to check (new or changed since the last audit)

- **Link to esi-id** (cites e4): related ESI ID: Load Profile IDs are assigned to individual ESI IDs. [e4]
- **Link to ams-meters** (cites e2): contrasts-with AMS Smart Meter Data: Load Profiling is used when ERCOT does not receive 15-minute Settlement Interval consumption data. [e2]
- **Link to lse** (cites e6): related LSE (Load Serving Entity): Aggregated profiled load is allocated to QSE and LSE settlement responsibilities. [e6]
- **Link to tdsp** (cites e5, e4): related TDSP (Transmission & Distribution Service Provider): The TDSP assigns weather zones and submits load profile ID changes. [e5][e4]
- **Link to rep** (cites e10): related REP (Retail Electric Provider): A competitive retailer may dispute a Load Profile ID assignment. [e10]
- **Link to ufe** (cites e7): related UFE (Unaccounted-For Energy): Load profile design aims to minimize its contribution to unaccounted for energy. [e7]
- **Link to settlement-statements** (cites e6): used-in Settlement Statements & Timeline: Aggregated profiled load determines each QSE and LSE responsibility by Settlement Interval and Settlement Point. [e6]
- **Link to market-information-system** (cites e27): related MIS (Market Information System) & Public Data: ERCOT posts forecast Load Profiles to its website by 1000 CPT each Business Day, and backcast Load Profiles by 1000 CPT of the second Business Day after the backcast day. [e27]

