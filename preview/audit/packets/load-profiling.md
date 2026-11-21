# Audit packet: Load Profiling (load-profiling)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

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

### e11 · `lpg-11` · tier 1 · ERCOT Load Profiling Guide, Section 11: Validation of Load Profile ID
locator: Load Profiling Guide Section 11, Validation of Load Profile ID (November 1, 2023), paragraph (1) · text copy line 37 · heading above: 11.3.8 Comparison of Weather Sensitivity Code to Meter Data Type Code 11-7

BEFORE: …e 11-6 11.3.5 Validation of Service Address Zone Improvement Plan Code 11-6 11.3.6 Validation of Weather Zone Code 11-6 11.3.7 Comparison of Meter Data Type Code to Profile Type Code 11-7 11.3.8 Comparison of Weather Sensitivity Code to Meter Data Type Code 11-7 11 VALIDATION OF LOAD PROFILE ID (1) 
QUOTE: A Load Profile ID is comprised of five components: (a) Load Profile Type; (b) Weather Zone; (c) Meter Data Type; (d) Weather sensitivity; and (e) Time Of Use Schedule (TOUS).
AFTER:  (2) ERCOT shall validate the first two components, the Load Profile Type and Weather Zone, at the following times: (a) As part of the initial assignment of Load Profile IDs for Opt-In Entities; (b) When Load Profile Segment definitions change; (c) One time per year during the Business Annual Valida…

### e13 · `lpg-11` · tier 1 · ERCOT Load Profiling Guide, Section 11: Validation of Load Profile ID
locator: Load Profiling Guide Section 11.2.1(2)(a)(i), Business Load Profile Group Timeline · text copy line 107 · heading above: 11.2.1 Annual Validation of Load Profile Type Assignment for RES and BUS Load Factor Electric Service Identifiers

BEFORE: … Advisory Committee (TAC) subcommittee. ERCOT shall utilize the historical usage and Demand data in its systems to derive usage time period values for each active and de-energized ESI ID for the time period specified in Appendix D, Profile Decision Tree. (a) Business Load Profile Group Timeline (i) 
QUOTE: ERCOT shall determine the Load Profile Type for the Load Profile ID for each active and de-energized ESI ID based on the current Profile Decision Tree in Appendix D. ERCOT shall provide the TDSPs with a list of Business Load factor ESI IDs containing the current Load Profile Type and the recommended Load Profile Type for those ESI IDs where ERCOT recommends a change in Load Profile Type assignment. An electronic copy of each list shall be delivered to each TDSP no later than March 30.
AFTER:  (ii) For each ESI ID contained in the lists, the TDSPs shall review the recommended Load Profile Segment assignment and determine whether the recommended change is consistent with the TDSP tariffs, the applicable Retail Electric Provider (REP) billing requirements, and whether the ESI ID is active …

### e14 · `lpg-11` · tier 1 · ERCOT Load Profiling Guide, Section 11: Validation of Load Profile ID
locator: Load Profiling Guide Section 11.2.1(2)(a)(iv) · text copy line 113 · heading above: 11.2.1 Annual Validation of Load Profile Type Assignment for RES and BUS Load Factor Electric Service Identifiers

BEFORE: …Rs) and the Retail Market Subcommittee (RMS) by April 15 announcing these lists are available to the CR of record. Upon request, ERCOT shall make available to the current CR of record the list of those ESI IDs that are expected to have a Load Profile ID change as a result of Annual Validation. (iv) 
QUOTE: The TDSPs shall coordinate with ERCOT to submit the necessary Texas Standard Electronic Transaction (TX SET) transactions to update Load Profile ID assignments to be effective on the most current meter read date on or after April 15.
AFTER:  (v) TDSPs are responsible for verifying that TX SET transactions related to Annual Validation have been successfully accepted into ERCOT's systems by monitoring the appropriate response transactions. The TDSPs and ERCOT shall work together to have TX SET transactions successfully completed by Septe…

### e16 · `lpg-11` · tier 1 · ERCOT Load Profiling Guide, Section 11: Validation of Load Profile ID
locator: Load Profiling Guide Section 11.2.1(2)(b)(i), Residential Load Profile Group Timeline · text copy line 123 · heading above: 11.2.1 Annual Validation of Load Profile Type Assignment for RES and BUS Load Factor Electric Service Identifiers

BEFORE: …least 99.0% of the finalized list of changes is resolved to their mutual satisfaction. (vii) ERCOT and the TDSPs shall provide regular updates on the progress of Annual Validation as needed, or at a minimum during the regularly scheduled RMS meetings. (b) Residential Load Profile Group Timeline (i) 
QUOTE: Every three years, ERCOT shall determine the Load Profile Type for the Load Profile ID for each active and de-energized Residential ESI ID based on the current Profile Decision Tree in Appendix D.
AFTER:  ERCOT shall provide the TDSPs with a list of Residential ESI IDs containing the current Load Profile Type and the recommended Load Profile Type for those ESI IDs where ERCOT recommends a change in Load Profile Type assignment. An electronic copy of each list shall be delivered to each TDSP no later…

### e17 · `lpg-09` · tier 1 · ERCOT Load Profiling Guide, Section 9: Load Profile IDs
locator: Load Profiling Guide Section 9.1, Assignment of Load Profile IDs (June 1, 2018), paragraph (1) · text copy line 43 · heading above: 9.1 Assignment of Load Profile IDs

BEFORE: …sion and/or Distribution Service Provider Tariff Change 9-4 9.2.1.2 Recognized Error in Current Assignment 9-4 9.2.1.3 Load Profile ID Changes Resulting from Meter Type Changes 9-4 9.2.1.4 CR Requested Change from a Default Load Profile ID 9-6 LOAD PROFILE IDS 9.1 Assignment of Load Profile IDs (1) 
QUOTE: Transmission and/or Distribution Service Providers (TDSPs) are responsible for initially assigning the Load Profile IDs of all Electric Service Identifiers (ESI IDs), as well as any changes in assignment. ERCOT is responsible for calculating the Load Profile Segment for the Load Profile ID as defined by the Annual Validation process in Section 11.2, Annual Validation of Load Profile Type.
AFTER:  The Profile Decision Tree is a dynamic Microsoft Office Excel© file (see Appendix D, Profile Decision Tree) that contains the directions to use when assigning Load Profile IDs to ESI IDs. 9.1.1 Profile Decision Tree Revision and Approval Process (1) All revisions to Appendix D, Profile Decision Tre…

### e18 · `lpg-09` · tier 1 · ERCOT Load Profiling Guide, Section 9: Load Profile IDs
locator: Load Profiling Guide Section 9.1.2, new Service Delivery Points · text copy line 63 · heading above: 9.1.2 Assignment of Load Profile IDs for New Service Delivery Points

BEFORE: …rmining Load Profile ID assignments. 9.1.2 Assignment of Load Profile IDs for New Service Delivery Points (1) TDSPs shall create and submit ESI IDs as new Service Delivery Points (SDPs) are established. It is the responsibility of the TDSP to make the Load Profile ID assignment for each new ESI ID. 
QUOTE: To assign the Load Profile Type for new ESI IDs, the TDSP shall assign the default Load Profile Segment designated in Appendix D, Profile Decision Tree, on the "Segment Assignment" worksheet.
AFTER:  9.1.3 Assignment of Load Profile IDs for New Electric Service Identifiers Resulting from a Mass Transition (1) When a Mass Transition involves moving SDPs from one TDSP to another, the gaining TDSP creates and submits ESI IDs for all gained SDPs. To assign the Load Profile ID for new ESI IDs, the g…

### e19 · `lpg-09` · tier 1 · ERCOT Load Profiling Guide, Section 9: Load Profile IDs
locator: Load Profiling Guide Section 9.2.1.4, CR Requested Change from a Default Load Profile ID · text copy line 141 · heading above: 9.2.1.4 CR Requested Change from a Default Load Profile ID

BEFORE: …er normal Demand meter installations, the TDSP has until the second regularly scheduled meter read date after receipt of the CR's request to install the requested meter type at the Premise and submit the Load Profile ID change to ERCOT. 9.2.1.4 CR Requested Change from a Default Load Profile ID (1) 
QUOTE: After a new ESI ID has sufficient usage history, a CR may request a change from a default Load Profile ID using the ERCOT retail transaction issue resolution system. The requested Load Profile ID shall follow the guidelines for calculations contained in Appendix D, Profile Decision Tree. In the case of a Business ESI ID, the 12 months used in the calculations shall be the first 12 months of usage for the ESI ID. In the case of a residential ESI ID, the first consecutive seven months from October through April is all that is needed for the calculation of Winter Ratio.
AFTER:  Once the Winter Ratio is known then the CR may request a change from the default Load Profile ID. After ERCOT has validated the CR's calculated Load Profile ID change request, ERCOT will then submit the request to the appropriate TDSP. The TDSP will verify that the change is consistent with their t…

### e20 · `lpg-09` · tier 1 · ERCOT Load Profiling Guide, Section 9: Load Profile IDs
locator: Load Profiling Guide Section 9.2(3), Processes to Change Load Profile ID Assignments · text copy line 101 · heading above: 9.2 Processes to Change Load Profile ID Assignments

BEFORE: …Load Profile ID change. For Load Profile ID changes that result from Annual Validation, a TDSP tariff change, a meter type change, or a CR request to change a default Load Profile ID when adequate data becomes available, the TDSP shall submit the change after said meter read has been sent to ERCOT. 
QUOTE: For any Load Profile ID assignments that are found to be in error by dispute, the effective date of change shall be retroactive to the meter read date when no profile segment assignment error existed; however, the effective date of the change shall not go any farther back than what would affect the True-Up Settlement.
AFTER:  9.2.1 Load Profile ID Changes Initiated By Transmission and/or Distribution Service Providers 9.2.1.1 Load Profile ID Change Related to a Transmission and/or Distribution Service Provider Tariff Change (1) When a Premise changes between residential and business TDSP tariffs, or when a meter type ch…

### e21 · `lpg-09` · tier 1 · ERCOT Load Profiling Guide, Section 9: Load Profile IDs
locator: Load Profiling Guide Section 9.1.5, Distributed Generation · text copy line 77 · heading above: 9.1.5 Assignment of Load Profile IDs for Distributed Generation

BEFORE: …all follow the instructions on the Oil & Gas tab of Appendix D, Profile Decision Tree. (2) ERCOT shall review all assignments of the BUSOGFLT Profile Type on an annual basis, per Section 11.3.1, Validation of BUSOGFLT Profile Type. 9.1.5 Assignment of Load Profile IDs for Distributed Generation (1) 
QUOTE: CRs seeking to have the profile segments for Photovoltaic, wind or other Distributed Generation (DG) assigned to one of their Residential (RES) or Business (BUS) ESI IDs shall follow the instructions on the "DG" tab of Appendix D, Profile Decision Tree.
AFTER:  (2) ERCOT shall review all assignments of the Load Profile Segments for Photovoltaic, wind, and other DG on an annual basis, per Section 11.3.3, Validation of Profile Segments for Distributed Generation. 9.1.6 kVA Metered Loads (1) Any TDSP that routinely measures kVA Demand instead of kW Demand sh…

### e23 · `lpg-06` · tier 1 · ERCOT Load Profiling Guide, Section 6: Load Profiling Methodology
locator: Load Profiling Guide Section 6.1, Current Methodologies (November 1, 2016), table · text copy line 28 · heading above: 6.1 Current Methodologies

BEFORE: …------ -------------------------------------------------- Type of Load Load Profiling Methodology Non-Price-Responsive Non-interval metered Adjusted Static Models Non-interval metered with Distributed Generation (DG) Adjusted Static Models and Engineering Estimates Non-metered Engineering Estimates 
QUOTE: Interval Data Recorder (IDR) (Estimation) Proxy day Price-Responsive Other price-responsive To be determined
AFTER:  ------------------------------------------------------- --------------------------------------------------…

### e24 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.2.2, Load Profiles for Non-Interval Metered Loads With an Unregistered Distributed Generator · text copy line 133 · heading above: 18.2.2.2 Load Profiles for Non-Interval Metered Loads With an Unregistered Distributed Generator

BEFORE: …atterns to relevant weather descriptors such as maximum and minimum dry-bulb temperature and humidity. Other daily characteristics such as day-of-the-week and sunrise/sunset times are also employed. 18.2.2.2 Load Profiles for Non-Interval Metered Loads With an Unregistered Distributed Generator (1) 
QUOTE: Load Profiles for non-interval metered Loads that utilize UDGs (e.g., PhotoVoltaic (PV) or wind) will be created using a hybrid approach. At least a portion of the Load Profile will be based on Adjusted Static Models, while engineering estimates and/or generation models may be integrated as well or otherwise utilized.
AFTER:  18.2.3 Load Profiles for Non-Metered Loads (1) Load Profiles for Non-Metered Loads, e.g. streetlights, traffic signals, security lighting, billboards, and parking lots are created using engineering estimates based on known criteria, such as hours of operation, with appropriate variation in sunrise/…

### e25 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.4(1), Default Load Profiles for Interval Data Recorders · text copy line 141 · heading above: 18.2.4 Default Load Profiles for Interval Data Recorders

BEFORE: …ropriate variation in sunrise/sunset times. Transmission Service Providers (TSPs) and/or Distribution Service Providers (DSPs) are responsible for providing monthly consumption (kWh) for non-metered Electric Service Identifiers (ESI IDs). 18.2.4 Default Load Profiles for Interval Data Recorders (1) 
QUOTE: Default Load Profiles for IDRs will only be used when no historic Customer-specific interval data is available for Settlements. The Adjusted Static Model methodology will be used to create these Load Profiles.
AFTER:  (2) For details on the method to estimate IDR data for Settlement purposes, refer to Section 11, Data Acquisition and Aggregation. 18.2.5 Identification of Weather Zones and Load Profile Types (1) ERCOT, in coordination with the appropriate Technical Advisory Committee (TAC) subcommittee, will iden…

### e27 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.3.3(2), Load Profiles posting · text copy line 197 · heading above: 18.3.3 Load Profiles

BEFORE: …oad Profile data from the Load Profile creation process, in accordance with Section 18.2.6, Daily Profile Creation Process, to the ERCOT website and through the common application program interface (API). Load Profile data will be made available to Market Participants for a period of two years. (2) 
QUOTE: ERCOT will post to the ERCOT website by 1000 Central Prevailing Time (CPT) each Business Day, forecasted Load Profiles for the three following days for each Load Profile Type and Weather Zone. Backcast Load Profiles for each Load Profile Type and Weather Zone will be available by 1000 CPT of the second Business Day following the backcast day.
AFTER:  No data will be provided that will allow identification of individual Customers. 18.4 Assignment of Load Profile ID (1) Each Electric Service Identifier (ESI ID) is required to be associated with an appropriate Load Profile ID. Upon request, ERCOT and the appropriate Technical Advisory Committee (T…

### e28 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.2.8(3), Adjustments and Changes to Load Profile Development · text copy line 163 · heading above: 18.2.8 Adjustments and Changes to Load Profile Development

BEFORE: … Procedure (2) Section 9.18, Profile Development Cost Recovery Fee for a Non-ERCOT Sponsored Load Profile Segment, describes the process for compensating the originator of a Load Profile Segment change request by Retail Electric Providers (REPs) wishing to subscribe to the Load Profile Segment. (3) 
QUOTE: ERCOT shall give at least 150 days' Notice to all Market Participants prior to market implementation of any change to the Load Profiling Methodology, existing Load Profiles, or when any additional Load Profiles are developed.
AFTER:  This Notice shall include a Load Profile change implementation timeline, which specifies dates on which key events during the Load Profile change process will take place. Upon any change in Load Profile Types, TSPs and/or DSPs shall send any revised Load Profile ID assignments required by the chang…

### e30 · `np-18` · tier 1 · ERCOT Nodal Protocols, Section 18: Load Profiling (effective 2026-06-01)
locator: Section 18.5.1(1), ERCOT Responsibilities · text copy line 253 · heading above: 18.5.1 ERCOT Responsibilities

BEFORE: …assigning Weather Zones. 18.5 Additional Responsibilities (1) This Section addresses responsibilities for Load Profiling not specified in other sections of the Protocols. 18.5.1 ERCOT Responsibilities (1) ERCOT will develop, administer, and maintain Load Profiles in accordance with these Protocols. 
QUOTE: There may be extenuating circumstances including, but not limited to, prolonged widespread power outages that may necessitate ERCOT's discretion for adjusting non-Interval Data Recorder (IDR) backcasted Load Profiles. If an event requires ERCOT to utilize this discretion, ERCOT shall send a Market Notice within three Business Days of making the adjustments and report its action(s) and reason(s) for doing so to the next meeting of the appropriate Technical Advisory Committee (TAC) subcommittee.
AFTER:  (2) Any disputes related to the accuracy, appropriateness, or adjustment of Load Profiles shall be handled in accordance with Section 9.14, Settlement and Billing Dispute Process. 18.5.2 Market Participant Responsibilities (1) Market Participants shall use the appropriate TAC subcommittee as a foru…

### e31 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.2(4), Non-Interval Missing Consumption Data Estimation · text copy line 431 · heading above: 11.4.2 Non-Interval Missing Consumption Data Estimation

BEFORE: …---------------------------- Variable Unit Description ---------- ------- ---------------------------------------------------- PND Profiled non-interval data. CP Class profile. LP kWh Load Profile (daily interval data set). ----------------------------------------------------------------------- (4) 
QUOTE: Any active ESI ID on the Operating Day being settled for which ERCOT does not have a meter read within 12 months of the Operating Day will not have a usage estimate applied to its Load Profile. That is, the estimate for these Customers will be their assigned profile without any scaling factor applied.
AFTER:  11.4.3 Interval Consumption Data Estimation (1) ERCOT will estimate all ESI IDs with Interval Data Recorders (IDRs) for which consumption data has not been received for the Operating Day. The method for estimating interval data for ESI IDs with IDR Meters is a "Weather Response Informed Proxy Day" …

### e33 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3(2)-(3), Interval Consumption Data Estimation · text copy line 437 · heading above: 11.4.3 Interval Consumption Data Estimation

BEFORE: …s with IDR Meters into a Weather Sensitive (WS) group and a Non-Weather Sensitive (NWS) group determines the proxy day method used for estimation purposes. The proxy day estimation method for each group captures the factors that best predict the ESI ID-specific Load shape for the Operating Day. (2) 
QUOTE: The NWS proxy day method will be used for estimating interval data for IDRs where the profile type code is BUSLRG or BUSLRGDG. (3) The WS proxy day method will be used for estimating interval data for IDRs where the profile type code is not BUSIDRRQ, BUSLRG, or BUSLRGDG.
AFTER:  11.4.3.1 Weather Sensitive Proxy Day Method (1) For ESI IDs estimated as Weather Sensitive IDR (WSIDR), ERCOT will use this WS proxy day method. ESI IDs within the same Weather Zone will be grouped together. The proxy days will be the same for all ESI IDs within each of the Weather Zones. This meth…

### e34 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3.1(1)(a), Weather Sensitive Proxy Day Method · text copy line 445 · heading above: 11.4.3.1 Weather Sensitive Proxy Day Method

BEFORE: …ay Method (1) For ESI IDs estimated as Weather Sensitive IDR (WSIDR), ERCOT will use this WS proxy day method. ESI IDs within the same Weather Zone will be grouped together. The proxy days will be the same for all ESI IDs within each of the Weather Zones. This method incorporates the following: (a) 
QUOTE: To determine eligible proxy days, select all days (of matching weekday/weekend day type and time period) within five degrees of the maximum temperature of the target Operating Day based on the previous 365 days and then limit the selection to those days that have their maximum temperatures occurring within two hours of the maximum temperature hour of occurrence of the Operating Day.
AFTER:  The maximum temperature separation criterion provides initial assurance that the eligible day will have a similar diurnal temperature pattern as the target Settlement Operating Day. (b) Perform two tests on each potential proxy day identified in item (a) above: (i) Temperature magnitude test sums t…

### e35 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3.1(1)(d)-(e), Weather Sensitive Proxy Day Method · text copy line 455 · heading above: 11.4.3.1 Weather Sensitive Proxy Day Method

BEFORE: …rom hour to hour during the day and sums the squared differences between the corresponding values of the target Operating Day and the potential proxy day. (c) Each potential proxy day for each test described in item (b) above is ranked in ascending order based on the sum of squared differences. (d) 
QUOTE: A final ranking is performed with the temperature magnitude test weighted more heavily than the shape test. The weighting factors are 70% and 30%. (e) Select the top three ranked eligible days.
AFTER:  (f) For each ESI ID, do the following: (i) Use the top ranked proxy day for the target Operating Day, if available; (ii) If the top ranked proxy day data is not available, use the second ranked proxy day data as the estimate; (iii) If the second ranked proxy day data is not available, use the third…

### e36 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3.2(1)(a), Non-Weather Sensitive Proxy Day Method · text copy line 473 · heading above: 11.4.3.2 Non-Weather Sensitive Proxy Day Method

BEFORE: …f no data is available for any of the proxy days selected, then default to the NWS proxy day method. 11.4.3.2 Non-Weather Sensitive Proxy Day Method (1) For ESI IDs estimated as Non-Weather Sensitive IDR (NWSIDR), ERCOT will use this NWS proxy day method. This method incorporates the following: (a) 
QUOTE: Use the most recent proxy day for which data is available as the estimate for the target Operating Day. From historical ESI ID specific interval data, choose the most recent occurrence of the appropriate day of the week (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday) corresponding to the day of the week of the Operating Day (holidays are treated as Sundays) within the most recent 12 months of the Operating Day; or
AFTER:  (b) If there is no historic interval data available according to item (a) above, the IDR data will be estimated using the default profile assigned to the ESI ID for the Operating Day. If non-interval consumption data with a meter read within 12 months of the Operating Day is available, and if the E…

### e37 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3.3(1), Interval Data Recorder Estimation Reporting · text copy line 479 · heading above: 11.4.3.3 Interval Data Recorder Estimation Reporting

BEFORE: …if the ESI ID was profiled with a non-interval meter data type code within 90 days of the Operating Day, the default profile shall be estimated and/or scaled in accordance with Section 11.4.2, Non-Interval Missing Consumption Data Estimation. 11.4.3.3 Interval Data Recorder Estimation Reporting (1) 
QUOTE: ERCOT shall produce a report detailing the proxy day selection list for both NWSIDR and WSIDR methodologies. This report will be made available to Market Participants on a daily basis.
AFTER:  11.4.4 Data Aggregation Processing for Actual Data (1) The DAS will apply backcasted profiles to aggregated actual non-interval consumption data for use in Settlement when actual meter consumption data is available. IDR ESI IDs for which actual data exists will be used directly in the Data Aggregat…

### e38 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2(1), Load Reduction for Excess PV (eligibility and window) · text copy line 527 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: …le (daily interval data set). ----------------------------------------------------------------------- 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation (1) Adjusted Metered Load (AML) for ESI IDs with PhotoVoltaic (PV) generation shall be adjusted as follows: 
QUOTE: For ESI IDs with non-IDRs installed, AML shall be reduced for excess generation from ESI IDs with Unregistered Distributed Generators (UDGs) made up of PV generation behind the meter where there is a meter that measures excess energy flow into the ERCOT System in a separate register. Only ESI IDs that have been assigned a PV profile segment as specified in Load Profiling Guide Appendix D, Profile Decision Tree, shall be eligible for this reduction.
AFTER:  Intervals beginning 1100 and ending 1500 Central Prevailing Time (CPT) (spanning (16) 15-minute intervals) shall be reduced by the following amount: PV_adjust _(i) = kWh_gen / (read_days * 16) The above variables are defined as follows: --------------------------------------------------------------…

### e39 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2(1), PV adjustment equation · text copy line 531 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: … have been assigned a PV profile segment as specified in Load Profiling Guide Appendix D, Profile Decision Tree, shall be eligible for this reduction. Intervals beginning 1100 and ending 1500 Central Prevailing Time (CPT) (spanning (16) 15-minute intervals) shall be reduced by the following amount: 
QUOTE: PV_adjust _(i) = kWh_gen / (read_days * 16)
AFTER:  The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------ Variable Unit Description ---------------- ------- -----------------------------------------------------------------------------------------…

### e40 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2(1), PV adjustment window · text copy line 529 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: …V generation behind the meter where there is a meter that measures excess energy flow into the ERCOT System in a separate register. Only ESI IDs that have been assigned a PV profile segment as specified in Load Profiling Guide Appendix D, Profile Decision Tree, shall be eligible for this reduction. 
QUOTE: Intervals beginning 1100 and ending 1500 Central Prevailing Time (CPT) (spanning (16) 15-minute intervals) shall be reduced by the following amount:
AFTER:  PV_adjust _(i) = kWh_gen / (read_days * 16) The above variables are defined as follows: ------------------------------------------------------------------------------------------------------------------ Variable Unit Description ---------------- ------- ---------------------------------------------…

### e41 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2(2), wind adjustment · text copy line 549 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: …DG made up of wind generation behind the meter where there is a meter that measures excess energy flow into the ERCOT System in a separate register. Only ESI IDs that have been assigned a wind profile segment as specified in the Load Profiling Guide Appendix D, shall be eligible for this reduction. 
QUOTE: Intervals beginning 0800 and ending 2000 CPT (spanning (48) 15-minute intervals) shall be reduced by the following amount: Wind_adjust = kWh_gen * .65 / (read_days * 48) All other intervals in the day (the remaining 48 intervals) shall be reduced by the following amount: Wind_adjust = kWh_gen * .35 / ((read_days * 48) + DST adjust)
AFTER:  Where: ------------------------------------------------------------------------------------------------------------------- Variable Unit Description ----------------- ------- ----------------------------------------------------------------------------------------- wind_adjust_(i) kWh Reduction for …

### e42 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.2, variable definitions · text copy line 540 · heading above: 11.4.4.2 Load Reduction for Excess PhotoVoltaic and Wind Distributed Renewable Generation

BEFORE: …---------------------------------------------------------------------------- Variable Unit Description ---------------- ------- ----------------------------------------------------------------------------------------- PV_adjust _(i) kWh Reduction for PV excess generation for interval i. kWh_gen kWh 
QUOTE: Actual (measured) kWh flowing into the Distribution System (out-flow from the Premise).
AFTER:  read_days days Number of days in meter read period. ------------------------------------------------------------------------------------------------------------------ (2) AML for ESI IDs with wind generation shall be adjusted as follows: For ESI IDs with non-IDRs installed, AML shall be reduced for…

### e43 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.3(1), Load Reduction for Excess from Other Distributed Generators · text copy line 579 · heading above: 11.4.4.3 Load Reduction for Excess from Other Distributed Generators

BEFORE: …Ds with UDGs behind the meter where there is a meter that measures excess energy flow into the ERCOT System in a separate register. Only ESI IDs that have been assigned a DG profile segment as specified in Load Profiling Guide Appendix D, Profile Decision Tree, shall be eligible for this reduction. 
QUOTE: All intervals in the meter read period shall be reduced by the following amount: DG_adjust _(i) = kWh_gen / read_ints
AFTER:  The above variables are defined as follows: ---------------------------------------------------------------------------------------------------------------------- Variable Unit Description ---------------- ----------- ---------------------------------------------------------------------------------…

### e44 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.4.3(2) · text copy line 595 · heading above: 11.4.4.3 Load Reduction for Excess from Other Distributed Generators

BEFORE: … kWh_gen kWh Actual (measured) kWh flowing into the Distribution System (out-flow from the Premise). read_ints Intervals Number of 15-minute intervals in the meter read period. ---------------------------------------------------------------------------------------------------------------------- (2) 
QUOTE: The energy reduction adjustment for ESI IDs, which have UDGs behind the meter and have an AMS integrated meter that measures the excess energy flow into the ERCOT System in 15-minute intervals, shall be determined using the actual 15-minute interval data, if available.
AFTER:  11.4.5 Adjustment of Consumption Data for Losses (1) The ERCOT DAS shall adjust consumption data for Transmission Losses and Distribution Losses. The sources of data used in this process are: (a) Profiled estimated non-interval data; (b) Estimated proxy day interval data; (c) Profiled actual non-in…

### e45 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.5(2), Adjustment of Consumption Data for Losses · text copy line 613 · heading above: 11.4.5 Adjustment of Consumption Data for Losses

BEFORE: …; (e) DLFs; and (f) TLFs (average ERCOT-wide). (2) ERCOT will apply DLFs to aggregate levels of Load data in accordance with Section 13, Transmission and Distribution Losses. Aggregated Loads will be adjusted for Distribution Losses based upon DLF code correlated to the DLF for each TSP and/or DSP. 
QUOTE: Loads that are transmission connected or that are settled at transmission level will not be allocated distribution level losses. Intervals with negative Load will not be allocated distribution level losses.
AFTER:  NDLAL _(i) _(Aggregated Group) = Max (0, L _(i Aggregated Group)) * 1 / (1- DLF _(i Aggregated Group)) The above variables are defined as follows: ------------------------------------------------------------------------- Variable Unit Description ------------ ------- -------------------------------…

### e46 · `np-11` · tier 1 · ERCOT Nodal Protocols, Section 11: Data Acquisition and Aggregation (effective 2026-06-01)
locator: Section 11.4.3(1), Interval Consumption Data Estimation · text copy line 435 · heading above: 11.4.3 Interval Consumption Data Estimation

BEFORE: …d for which ERCOT does not have a meter read within 12 months of the Operating Day will not have a usage estimate applied to its Load Profile. That is, the estimate for these Customers will be their assigned profile without any scaling factor applied. 11.4.3 Interval Consumption Data Estimation (1) 
QUOTE: ERCOT will estimate all ESI IDs with Interval Data Recorders (IDRs) for which consumption data has not been received for the Operating Day. The method for estimating interval data for ESI IDs with IDR Meters is a "Weather Response Informed Proxy Day" technique.
AFTER:  This approach seeks to increase estimation accuracy by segmenting ESI IDs with IDR Meters into two groups based on a known indicator of Load (i.e., weather). The classification of ESI IDs with IDR Meters into a Weather Sensitive (WS) group and a Non-Weather Sensitive (NWS) group determines the prox…

### e12 · `lpg-11` · tier 1 · ERCOT Load Profiling Guide, Section 11: Validation of Load Profile ID
locator: Load Profiling Guide Section 11(2), Validation of Load Profile ID · text copy line 49 · heading above: 11.3.8 Comparison of Weather Sensitivity Code to Meter Data Type Code 11-7

BEFORE: …ode 11-7 11.3.8 Comparison of Weather Sensitivity Code to Meter Data Type Code 11-7 11 VALIDATION OF LOAD PROFILE ID (1) A Load Profile ID is comprised of five components: (a) Load Profile Type; (b) Weather Zone; (c) Meter Data Type; (d) Weather sensitivity; and (e) Time Of Use Schedule (TOUS). (2) 
QUOTE: ERCOT shall validate the first two components, the Load Profile Type and Weather Zone, at the following times: (a) As part of the initial assignment of Load Profile IDs for Opt-In Entities; (b) When Load Profile Segment definitions change; (c) One time per year during the Business Annual Validation process; and (d) At least one time every three years during the Residential Annual Validation process.
AFTER:  (3) At the start of the validation process, the Transmission and/or Distribution Service Provider (TDSP) shall be asked by ERCOT to confirm contact information for the primary and backup TDSP contact persons. ERCOT shall provide the TDSP contact information on an ERCOT contact person. (4) Electroni…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e23) FLAG number-not-in-quote: 2016: The retail market requires 15-minute settlement intervals. Load profiling is a cost-effective way to estimate and allocate 15-minute load for ESI IDs when ERCOT does not receive 15-minute consumption data. [e2] The Load Profiling Guide's methodology table pairs each load type with a method: non-interval metered loads with adjusted static models, non-interval loads with distributed generation with adjusted static models and engineering estimates, non-metered loads with engineering estimates, and IDR estimation with proxy day; "other price-responsive" load is listed as "to be determined" in the version saved (dated November 1, 2016). [e23]
- **How it works #2** (cites e3, e24, e9, e25): For non-interval metered loads, profiles come from statistical "adjusted static" models built from load research samples and tied to weather descriptors such as temperature and humidity. [e3] Where a premise has an unregistered distributed generator (PV or wind), the profile is a hybrid: at least part adjusted static, with engineering estimates and/or generation models possibly integrated. [e24] Non-metered loads such as streetlights use engineering estimates. [e9] Default profiles for IDRs are used only when no historic customer-specific interval data is available, and are built with the adjusted static method. [e25]
- **How it works #3** (cites e27, e30, e28): Each day ERCOT posts forecast profiles for the next three days and backcast profiles by 1000 CPT, for each Load Profile Type and Weather Zone: forecasts by 1000 CPT each Business Day, backcasts by 1000 CPT of the second Business Day after the backcast day. [e27] In extenuating circumstances such as prolonged widespread outages, ERCOT may use discretion to adjust non-IDR backcasted profiles, but must send a Market Notice within three Business Days and report to the next TAC subcommittee meeting. [e30] Changes to methodology or profiles require at least 150 days' Notice to Market Participants. [e28]
- **Formula #1** (cites e8, e31): Profiled non-interval data. For non-interval data, profile application takes an ESI ID's aggregated usage for a period, usually a month, divides it by the profile class's usage for the same period, and scales the day's load profile by the result. [e8] In the Protocol's equation, PND is profiled non-interval data, CP is the class profile and LP is the daily load profile interval data set. For an active ESI ID with no meter read within 12 months of the Operating Day, no usage scaling is applied: the estimate is its assigned profile unscaled. [e31]
- **Formula #2** (cites e38, e40, e39, e42, e41, e43, e44) FLAG number-not-in-quote: 65%, 35%: Excess generation adjustments for behind-the-meter distributed generation (non-IDR ESI IDs with a separate register measuring excess flow into ERCOT). The Adjusted Metered Load of an eligible ESI ID with PV is reduced for excess generation, and only ESI IDs assigned a PV profile segment qualify. [e38] The reduction applies to the 16 fifteen-minute intervals from 1100 to 1500 CPT. [e40] It is kWh_gen divided by read_days times 16, where kWh_gen is the measured kWh flowing into the Distribution System (out-flow from the premise) and read_days is the days in the meter read period. [e39][e42] For wind, intervals from 0800 to 2000 CPT (48 intervals) are reduced using 65% of kWh_gen, and the remaining 48 intervals using 35% of kWh_gen, each spread over read_days times 48 (plus a daylight saving adjustment in the second). [e41] For other DG, all intervals in the read period are reduced by kWh_gen divided by the number of 15-minute intervals in the read period. [e43] Where an AMS integrated meter (or MOU/EC non-BUSIDRRQ IDR for PV and wind) measures excess flow in 15-minute intervals, the actual interval data is used if available. [e44]
- **Formula #3** (cites e45): Losses. Distribution losses are not allocated to transmission-connected or transmission-settled loads or to negative-load intervals. [e45]
- **ERCOT context #2** (cites e11, e17, e18, e19, e10, e20, e21): A Load Profile ID has five components: Load Profile Type, Weather Zone, Meter Data Type, Weather sensitivity and Time Of Use Schedule. [e11] TDSPs initially assign Load Profile IDs and any changes; ERCOT calculates the Load Profile Segment through annual validation. [e17] New ESI IDs get the default segment from the Profile Decision Tree. [e18] A CR may later request a change from the default after enough usage history: for a business ESI ID the first 12 months of usage, for a residential ESI ID the first consecutive seven months from October through April (to compute the Winter Ratio). [e19] CRs may dispute an assignment, and a dispute found in the CR's favor is retroactive to the meter read date when no error existed, but not further back than what would affect True-Up Settlement. [e10][e20] CRs seeking distributed generation segments for residential or business ESI IDs follow the DG tab of the Profile Decision Tree. [e21]
- **ERCOT context #3** (cites e12, e13, e14, e16): Validation. ERCOT validates the Load Profile Type and Weather Zone at initial opt-in assignment, when segment definitions change, once per year for the Business process, and at least once every three years for the Residential process. [e12] In the business timeline, ERCOT determines the profile type for each active and de-energized ESI ID from the Profile Decision Tree and delivers the lists to TDSPs by March 30. [e13] TDSPs submit the TX SET updates effective on the most current meter read date on or after April 15. [e14] The residential process runs every three years. [e16]
- **ERCOT context #4** (cites e46, e33, e34, e35, e36, e37): IDR ESI IDs with missing data are estimated, not profiled. ERCOT uses a "Weather Response Informed Proxy Day" technique. [e46] The non-weather-sensitive proxy day method applies to IDRs with profile type BUSLRG or BUSLRGDG; the weather-sensitive method applies to IDRs whose profile type is not BUSIDRRQ, BUSLRG or BUSLRGDG. [e33] For weather-sensitive IDRs, eligible proxy days are matching weekday/weekend days within five degrees of the target day's maximum temperature over the previous 365 days, with the maximum temperature occurring within two hours of the target day's peak hour. [e34] The final ranking weights a temperature magnitude test 70% and a shape test 30%, and the top three ranked days are selected. [e35] For non-weather-sensitive IDRs, ERCOT uses the most recent matching day of the week (holidays treated as Sundays) within the most recent 12 months. [e36] ERCOT produces a daily report of the proxy day selection list for both methods. [e37]
- **Key facts #5** (cites e12): - Business Load Profile Types are validated each year and residential at least every three years. [e12]
- **Key facts #6** (cites e27): - ERCOT posts forecast profiles three days ahead and backcast profiles by 1000 CPT of the second Business Day after the day. [e27]
- **Key facts #7** (cites e28): - Changes to load profiling methodology need at least 150 days' Notice. [e28]
- **Common confusion #1** (cites e8, e2, e46, e11, e12): (Guidance) A profile is not that customer's own interval data: it is a class shape scaled to the ESI ID's usage. [e8] Load Profiling is implemented for cases where ERCOT does not receive 15-minute Settlement Interval consumption data. [e2] Also, an IDR with missing data is not profiled by scaling a class shape; it is estimated from proxy days. [e46] The Load Profile ID is also more than a shape: it has five components, of which ERCOT validates the first two (type and Weather Zone). [e11][e12]
- **Questions #6** (cites e4, e10, e20): The profile drives estimated interval load in settlement; the TDSP submits assignment changes and a CR may dispute an assignment. [e4][e10] A dispute found in the CR's favor is made retroactive to the last meter read without an error, but not further back than what would affect True-Up Settlement. [e20]
- **Questions #8** (cites e38, e39, e40, e44): For non-IDR ESI IDs with a separate register measuring excess flow into ERCOT and a PV profile segment, AML is reduced by the measured outflow spread over the 1100-1500 CPT intervals; if an AMS integrated meter measures excess flow in 15-minute intervals, actual interval data is used if available. [e38][e39][e40][e44]
- **Questions #10** (cites e35): The Protocol sets the weights at 70% for the temperature magnitude test and 30% for the shape test; it does not state its reason. [e35]
- **Questions #12** (cites e31): Its usage estimate is not scaled: the estimate is its assigned profile without a scaling factor. [e31]
- **Link to esi-id** (cites e4): related ESI ID: Load Profile IDs are assigned to individual ESI IDs. [e4]
- **Link to ams-meters** (cites e2): contrasts-with AMS Smart Meter Data: Load Profiling is used when ERCOT does not receive 15-minute Settlement Interval consumption data. [e2]
- **Link to lse** (cites e6): related LSE (Load Serving Entity): Aggregated profiled load is allocated to QSE and LSE settlement responsibilities. [e6]
- **Link to tdsp** (cites e5, e4): related TDSP (Transmission & Distribution Service Provider): The TDSP assigns weather zones and submits load profile ID changes. [e5][e4]
- **Link to rep** (cites e10): related REP (Retail Electric Provider): A competitive retailer may dispute a Load Profile ID assignment. [e10]
- **Link to ufe** (cites e7): related UFE (Unaccounted-For Energy): Load profile design aims to minimize its contribution to unaccounted for energy. [e7]
- **Link to settlement-statements** (cites e6): used-in Settlement Statements & Timeline: Aggregated profiled load determines each QSE and LSE responsibility by Settlement Interval and Settlement Point. [e6]
- **Link to market-information-system** (cites e27): related MIS (Market Information System) & Public Data: ERCOT posts forecast and backcast Load Profiles to its website by 1000 CPT each Business Day. [e27]

