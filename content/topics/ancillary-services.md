---
id: ancillary-services
name: Ancillary Services (AS)
aliases: [AS, ancillary services, Reg-Up, Reg-Down, RRS, ECRS, Non-Spin, NSRS, AS Plan, AS Obligation]
kind: concept
domain: reliability
level: 1
lenses: [analyst, trading, portfolio, structuring]
depth: deep
as_of: 2026-11-21
links:
  - to: regulation
    type: composed-of
    note: Regulation Up is capacity that can respond to signals from ERCOT within five seconds to changes from scheduled system frequency. [e2]
  - to: rrs
    type: composed-of
    note: RRS is the automatically self-deployed service that restores or maintains frequency after a significant deviation. [e3]
  - to: ecrs
    type: composed-of
    note: ECRS is capacity sustained for two consecutive hours, used for depleted RRS, backup regulation and energy to avoid or during an EEA. [e4]
  - to: non-spin
    type: composed-of
    note: Non-Spin is capacity that can be synchronized and ramped within 30 minutes. [e5]
  - to: asdc
    type: determines
    note: ERCOT builds an ancillary service demand curve for each service from the AS Plan. [e9]
  - to: rtc-b
    type: related
    note: RTC changed day-ahead AS awards from physical obligations to financial positions. [e11]
  - to: eea
    type: related
    note: ECRS provides energy to avoid getting into or during an Energy Emergency Alert. [e4]
  - to: energy-storage-resource
    type: related
    note: ESRs supply most regulation and large shares of the other services. [e13]
  - to: ordc
    type: related
    note: The IMM says the individual up-reserve ASDCs, aggregated, conform to the Aggregate Operating Reserve Demand Curve (AORDC), a fixed curve defined to 10,000 MW. [e41]
  - to: non-spin
    type: composed-of
    note: Non-Spin must be able to run at its specified output for at least four consecutive hours. [e28]
  - to: reliability-standard
    type: related
    note: ERCOT's NPRR1282 analysis ties Regulation and RRS duration to NERC BAL-001 performance when SCED is unavailable. [e32]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Ancillary Service"
    quote: "A service necessary to support the transmission of energy to Loads while maintaining reliable operation of the Transmission Service Provider’s (TSP’s) transmission system using Good Utility Practice."
  - id: e2
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (1)"
    quote: "Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency."
  - id: e3
    source: np-03
    locator: "Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2)"
    quote: "(1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases."
  - id: e4
    source: np-03
    locator: "Section 3.17.4, ERCOT Contingency Reserve Service, paragraph (1)"
    quote: "(1) ERCOT Contingency Reserve Service (ECRS) is a service that is provided using capacity that can be sustained at a specified level for two consecutive hours and is used to restore or maintain the frequency of the ERCOT System: (a) In response to significant depletion of RRS; (b) As backup Regulation Service; and (c) By providing energy to avoid getting into or during an Energy Emergency Alert (EEA)."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Non-Spinning Reserve (Non-Spin)"
    quote: "An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours."
  - id: e6
    source: np-04
    locator: "Section 4.2.1.1, Ancillary Service Plan, paragraph (1)"
    quote: "(1) ERCOT shall analyze the expected Load conditions for the Operating Day and develop an Ancillary Service Plan that identifies the Ancillary Service MW necessary for each hour of the Operating Day. The MW of each Ancillary Service required may vary from hour to hour depending on ERCOT System conditions. ERCOT must post the Ancillary Service Plan to the ERCOT website by 0600 of the Day-Ahead."
  - id: e7
    source: np-04
    locator: "Section 4.2.1.2, Ancillary Service Obligation Assignment and Notice, paragraph (1)"
    quote: "(1) ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level."
  - id: e8
    source: imm-som-2025
    locator: "Chapter III, Ancillary Services, A. Summary of Ancillary Services Results in 2025"
    quote: "Using excessively conservative parameters in its AS Methodology, the volume of reserves set by ERCOT’s AS Plan is 140% larger than a 1-in-10 reliability standard for load shed would require."
  - id: e9
    source: np-04
    locator: "Section 4.4.12, paragraphs (4)-(5)"
    quote: "(4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market"
    quote: "Consumers pay the cost of AS procured through the market. Specifically, ERCOT allocates procurement costs to Load Serving Entities (LSEs) based on their real-time adjusted metered load."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market"
    quote: "Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Figure 1 discussion (all-in cost)"
    quote: "Ancillary services costs were $0.39 per MWh of load in 2025, a 60% decrease from 2024 and the lowest since 2020."
  - id: e13
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e14
    source: imm-som-2024
    locator: "Executive Summary, ancillary services"
    quote: "Ancillary services costs dropped to $0.98 per MWh of load from $3.74 per MWh in 2023."
  - id: e15
    source: np-06
    locator: "Section 6.5.7.3, paragraph (1)"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e16
    source: ercot-as-methodology-2026
    locator: "Cover page"
    quote: "ERCOT Board Recommended approval on 09/23/2025 PUC Approved on 11/06/2025 Effective Date of 01/01/2026"
  - id: e17
    source: ercot-as-methodology-2026
    locator: "Introduction"
    quote: "The Ancillary Service requirements are determined annually and will be posted to the Market Information System (MIS) by December 20^(th) for the upcoming year."
  - id: e18
    source: ercot-as-methodology-2026
    locator: "Regulation Service Requirement Details, Summary"
    quote: "The Regulation Service requirements are calculated with the expectation that sufficient Regulation Service will be available to cover the 95^(th) percentile of deployed regulation or net load variability. An adjustment may also be made based on historic CPS1 performance."
  - id: e19
    source: ercot-as-methodology-2026
    locator: "Regulation Service Requirement Details, Procedure"
    quote: "For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load – wind – solar) forecast error for the same month of the previous two years."
  - id: e20
    source: ercot-as-methodology-2026
    locator: "Responsive Reserve (RRS) Requirement Details"
    quote: "These RRS amounts will be published by month in six separate blocks covering four-hour intervals. These amounts will be based on expected diurnal load, solar, and wind patterns for the month, will cover 70% of historic system inertia conditions for each block of hours for the month, and will use the equivalency ratio for RRS between Load Resources and Generation Resources to establish the conditions for each block of hours."
  - id: e21
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "The engine will consume the risk and 60% of the historically available capacity for night hours (HE23-HE5) and 25% of the historically available capacity in day hours (HE6-HE22) as inputs, run a monte carlo optimization to compute a combined ECRS and NSRS requirement for each month and hour based on a convergence criteria."
  - id: e22
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years."
  - id: e23
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "Following this posting, ERCOT will monitor the weather and net load forecast (i.e. load, wind and solar forecasts) near Real-Time and may procure up to an additional 1,000 MW of Non-Spin for Operating Hours that are (a) identified as having an increased potential of high forecast variability, (b) there is a risk that the actual net load during these Operating Hours could be higher than forecast (after making appropriate forecast model selection) and (c) the expected available capacity and expected reserves including the posted minimum Non-Spin requirements during these Operating Hours is not sufficient to cover the projected net load forecast uncertainty risk."
  - id: e24
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "The minimum amount of Non-Spin procured from SCED dispatchable Resources in any hour shall not be less than lower of ERCOT’s Most Severe Single Contingency (MSSC) value and the Non-Spin requirement for that hour."
  - id: e25
    source: np-03
    locator: "Section 3.16, paragraph (2)(c)"
    quote: "(c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW."
  - id: e26
    source: np-03
    locator: "Section 3.16, paragraph (3)"
    quote: "ERCOT shall post on the ERCOT website the ERCOT Methodologies for Determining Minimum Ancillary Service Requirements approved by the ERCOT Board. Any such recommendations require approval by the Public Utility Commission of Texas (PUCT) prior to implementation."
  - id: e27
    source: np-03
    locator: "Section 3.16, paragraph (7)"
    quote: "Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing ECRS. The amount of Load Resources excluding CLRs that may or may not be on high-set under-frequency relays providing ECRS is limited to 50% of the total ERCOT ECRS requirement."
  - id: e28
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(a)"
    quote: "(a) Generation Resources, whether On-Line or Off-Line, capable of: (i) Being synchronized and ramped to a specified output level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours;"
  - id: e29
    source: np-03
    locator: "Section 3.18, paragraph (1)"
    quote: "For Generation Resources, Energy Storage Resources (ESRs), and Load Resources the High Sustained Limit (HSL) must be greater than or equal to the Low Sustained Limit (LSL) and the sum of the Resource-specific awards for Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS), Regulation Up Service (Reg-Up), Regulation Down Service (Reg-Down), and Non-Spinning Reserve (Non-Spin)."
  - id: e30
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision and Market Impacts"
    quote: "ECRS duration should be changed to one hour: Based on the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute ahead net load, and the need for a margin to account for increases in forecast errors that can be expected with growth in solar Resources, changing from a two-hour duration requirement to a one-hour duration requirement for ECRS is sufficient."
  - id: e31
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision and Market Impacts"
    quote: "Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours."
  - id: e32
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision and Market Impacts"
    quote: "Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT’s analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT’s obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events."
  - id: e33
    source: ercot-nprr1282-puct-report
    locator: "Effective Date row"
    quote: "Upon system implementation of PR447, Real-Time Co-Optimization (RTC)"
  - id: e34
    source: ercot-nprr1282-puct-report
    locator: "PUCT Decision row"
    quote: "On 7/31/25, the PUCT approved NPRR1282 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e35
    source: imm-som-2025
    locator: "Appendix, Table A1: Duration Requirements for Energy and AS in RTM (page A-3 (OCR))"
    quote: "Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours"
  - id: e36
    source: imm-som-2025
    locator: "Chapter III.A.2, Figure 25 inset table, NSRS row (page 62 (OCR))"
    quote: "NSRS $81.56 $23.24 $15.53 $7.13 $3.65"
  - id: e37
    source: imm-som-2025
    locator: "Chapter III.A.2, Figure 25 inset table, ECRS row (page 62 (OCR))"
    quote: "ECRS - - $73.18 $9.56 $2.65"
  - id: e38
    source: imm-som-2025
    locator: "Chapter III.A.2, Figure 25 inset table, Responsive row (page 62 (OCR))"
    quote: "Responsive] $300.87 $20.79 $21.04 $5.52 $2.74"
  - id: e39
    source: imm-som-2025
    locator: "Chapter III, Ancillary Services, page 63 (OCR)"
    quote: "In 2025, NSRS was the most expensive ancillary service on average for the first time."
  - id: e40
    source: imm-som-2025
    locator: "Chapter III.A.2, Ancillary Services Prices (page 62 (OCR))"
    quote: "Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter."
  - id: e41
    source: imm-som-2025
    locator: "Appendix, section on AS shortages (page A-7 (OCR))"
    quote: "The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC. The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW."
  - id: e42
    source: imm-som-2025
    locator: "Appendix, section on AS shortages (page A-7 (OCR))"
    quote: "This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4."
  - id: e43
    source: imm-som-2025
    locator: "Appendix, Table A3 discussion (page A-6 (OCR))"
    quote: "NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern."
  - id: e44
    source: np-08
    locator: "Section 8.1.1.2.1.7, paragraph (3)"
    quote: "The amount of ECRS provided by individual Generation Resources and Load Resources is limited to ten times its telemetered emergency ramp rate. Each Resource providing ECRS must be capable of ramping the Resource’s Ancillary Service award for ECRS within ten minutes of the notice to deploy ECRS, and must be able to maintain the awarded level of deployment for at least one hour."
  - id: e45
    source: imm-som-2024
    locator: "Ancillary Services Prices (OCR)"
    quote: "most notably for ECRS, which dropped from $76.77 per MWh to $9.62 per MWh."
  - id: e46
    source: ercot-as-methodology-2027
    locator: "Board item 18 (September 14-15, 2026), Key Takeaways"
    quote: "For 2027, ERCOT is not proposing any change to the methodology for Regulation Service (Reg Up/Reg Down) and Responsive Reserve Service (RRS); their quantities reflect moving history forward."
  - id: e47
    source: ercot-as-methodology-2027
    locator: "Board item 18, summary of proposed changes"
    quote: "Parameters are updated to be 50% of historically available capacity for online and offline Generation Resources and 60% of historically available capacity for Energy Storage Resources (ESRs) with four-hour sustainable duration. Night hours remain unchanged at 60% for all risk credit categories."
  - id: e48
    source: ercot-as-methodology-2027
    locator: "Board item 18, summary of proposed changes"
    quote: "Change to the convergence criteria in the model to reduce from declaration of Watch (3,000 MW) threshold down to a declaration of EEA1 (2,500 MW) threshold."
  - id: e49
    source: ercot-as-methodology-2026
    locator: "Responsive Reserve (RRS) Requirement Details"
    quote: "The minimum level of RRS procured from Resources providing RRS using Primary Frequency Response shall be determined for each month by ERCOT through the use of studies and shall not be less than 1,377 MWs."

  - id: e50
    source: np-03
    locator: "Section 3.16, paragraph (2)"
    quote: "ERCOT shall, at least annually, determine with supporting data, the methodology for determining the quantity requirements for each Ancillary Service needed for reliability, including:"
  - id: e51
    source: np-03
    locator: "Section 3.16, paragraph (3)"
    quote: "The ERCOT Board shall review and recommend approval of ERCOT’s methodology for determining the minimum Ancillary Service requirements"
  - id: e52
    source: ercot-as-methodology-2026
    locator: "ECRS and Non-Spin Requirement Details, Procedure"
    quote: "there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher"
  - id: e53
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision and Market Impacts"
    quote: "However, this duration recommendation may need to be revisited if there are concerns with frequency event recovery and violations of North American Electric Reliability Corporation (NERC) Standard BAL-002"
  - id: e54
    source: imm-som-2025
    locator: "Chapter III, Ancillary Services, page 63 (OCR)"
    quote: "This outcome is inconsistent with expectations for a well-functioning market"
  - id: e55
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(a)(ii), pending NPRR1309 replacement"
    quote: "(ii) Running at a specified output level for at least two consecutive hours;"
  - id: e56
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(b)"
    quote: "CLRs qualified for Dispatch by Security-Constrained Economic Dispatch (SCED) and capable of:"
---

## Definition

Ancillary services are the services necessary to support the transmission of energy to load while maintaining reliable operation of the transmission system. [e1] In ERCOT they are procured as reserve capacity: Regulation Up and Down, Responsive Reserve (RRS), ERCOT Contingency Reserve Service (ECRS) and Non-Spinning Reserve (Non-Spin). [e2][e3][e4][e5][e9]

## How it works

Each day ERCOT analyzes expected load for the Operating Day and develops an Ancillary Service Plan listing the MW of each service needed in each hour. The quantities can vary by hour with system conditions, and ERCOT must post the plan by 0600 of the Day-Ahead. [e6] The plan is then split among QSEs: ERCOT assigns each QSE a share by service and by hour, based on its load ratio share, and that share is its Ancillary Service Obligation. [e7]

The services differ mainly by speed and duration. Reg-Up responds to ERCOT signals within five seconds to changes from scheduled system frequency. [e2] RRS is automatically self-deployed to restore or maintain frequency after a significant deviation. [e3] ECRS is described in the saved Protocol text (Section 3.17.4) as capacity sustained for two consecutive hours, used when RRS is depleted, as backup regulation, and to supply energy to avoid or during an EEA; [e4] the saved Operating-day performance text (np-08 Section 8.1.1.2.1.7) instead requires ECRS Resources to maintain the awarded level for at least one hour (see Duration, below). [e44] Non-Spin is provided by Off-Line Generation Resources (or Load Resources that can be interrupted) that can be synchronized and ramped to a specified output within 30 minutes and operate at it for at least four consecutive hours. [e5] Section 3.17.3(1)(a) lists On-Line or Off-Line Generation Resources on those terms, [e28] and the same list also covers CLRs and other Resource types. [e56] Pending NPRR1309 text would change that four-hour requirement to two hours upon system implementation. [e55]

Price formation uses an ancillary service demand curve for each service. Reg-Down has a constant demand curve equal to VOLL over the full range of the plan, while the curves for Reg-Up, RRS, ECRS and Non-Spin come from an aggregate ORDC that is split into individual curves. [e9] The IMM says that aggregate curve (the AORDC) is a fixed curve formulated from empirical pricing outcomes of the ORDC before RTC, defined to 10,000 MW; when the sum of the four up-reserve products in the AS Plan is below 10,000 MW, the excess volume is currently assigned to the NSRS demand curve, so the real-time market procures excess NSRS. [e41][e42]

A Resource's awards are limited by its capability: its HSL must be at least its LSL and the sum of its Resource-specific awards for RRS, ECRS, Reg-Up, Reg-Down and Non-Spin. [e29]

**How ERCOT sets the quantities.** Protocol Section 3.16 requires ERCOT to determine, at least annually, the methodology for each service's quantity, [e50] the ERCOT Board reviews and recommends approval of it, [e51] and any such recommendation requires PUCT approval before implementation. [e26] The 2026 methodology was recommended by the Board on 09/23/2025, approved by the PUC on 11/06/2025 and effective 01/01/2026; requirements are determined annually and posted to the MIS by December 20 for the upcoming year. [e16][e17]
- Regulation: sized to cover the 95th percentile of deployed regulation or net load variability, with a possible adjustment for historic CPS1 performance. [e18] The base Reg-Up for an hour is the 95th percentile of the positive net load (load minus wind minus solar) forecast error for the same month of the previous two years. [e19]
- RRS: amounts are published by month in six blocks of four-hour intervals, based on expected diurnal load, solar and wind patterns, covering 70% of historic system inertia conditions for each block. [e20] The minimum RRS from Resources providing Primary Frequency Response is set monthly by ERCOT and may not be less than 1,377 MW in the 2026 methodology, [e49] above the 1,150 MW floor in the Protocol text. [e25]
- ECRS and Non-Spin: a probabilistic model takes the risk (30-minute-ahead and six-hour-ahead historic net load forecast errors and rolling six-hour-ahead forced outages of conventional Resources over the previous four years) [e22] and, as credits, 60% of historically available capacity at night (HE23-HE5) and 25% in day hours (HE6-HE22), and runs a Monte Carlo optimization to compute a combined ECRS and NSRS requirement per month and hour. [e21] ERCOT may also procure up to an additional 1,000 MW of Non-Spin for hours it identifies as at risk of high forecast variability. [e23] The minimum Non-Spin procured from SCED-dispatchable Resources in any hour may not be less than the lower of the Most Severe Single Contingency and that hour's Non-Spin requirement. [e24]

**Duration.** NPRR1282 changed duration requirements for Real-Time Co-optimization (RTC): ECRS from two hours to one hour, [e30] Regulation and RRS from 15 to 30 minutes, [e32] with Non-Spin staying at not less than four hours. [e31] The PUCT approved it on 7/31/25 and it takes effect upon system implementation of RTC (PR447). [e34][e33] The IMM's Table A1 shows the RTM duration requirements: energy 5 minutes, Reg-Up 30 minutes, RRS 30 minutes, ECRS 1 hour, NSRS 4 hours. [e35]

**Who can provide what.** Load Resources excluding CLRs can provide no more than 50% of the total ERCOT ECRS requirement. [e27] ECRS from a Resource is limited to ten times its telemetered emergency ramp rate and it must ramp within ten minutes and maintain the awarded level for at least one hour. [e44]

## ERCOT context

The IMM says consumers pay the cost of AS procured through the market, and ERCOT allocates the cost to LSEs on real-time adjusted metered load. [e10] Real-Time Co-Optimization (RTC) changed the day-ahead role: before RTC went live in December 2025 AS were sold only day-ahead as a physical obligation, and now they are also procured in real time while day-ahead awards are financial. [e11]

Costs have fallen: AS cost was $0.98 per MWh of load in 2024, down from $3.74 in 2023, and $0.39 per MWh in 2025, a 60% decrease from 2024. [e14][e12] In 2025 batteries averaged 94% of Reg-Up, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of Non-Spin. [e13] The IMM also argues ERCOT over-procures: its 2025 report says the AS Plan is 140% larger than a 1-in-10 load shed reliability standard would require. [e8]

Prices by product (the IMM's Figure 25 inset, annual average DAM prices, $ per MWh, 2021 to 2025, read from the OCR copy): Responsive $300.87, $20.79, $21.04, $5.52, $2.74; NSRS $81.56, $23.24, $15.53, $7.13, $3.65; ECRS (no value shown for 2021 and 2022) $73.18, $9.56 and $2.65 for 2023, 2024 and 2025. [e38][e36][e37] The IMM says prices fell across all AS products from 2024 to 2025, partly from growth in ESR capacity and AS provision by ESRs. [e40] In 2025 NSRS was the most expensive ancillary service on average for the first time. [e39] Since RTC go-live shortages have been infrequent, NSRS had the most frequent shortages and the lowest penalty price, and about 45% of the volume of NSRS shortages occurred during Winter Storm Fern. [e43]

Looking ahead: ERCOT's 2027 methodology item for the Board meeting of September 14-15, 2026 (a proposal requiring PUCT approval, whose outcome is not in the saved sources) proposes no change for Regulation and RRS, [e46] and for ECRS and Non-Spin proposes a daytime risk credit of 50% for online and offline Generation Resources and 60% for ESRs with four-hour sustainable duration (night credits unchanged at 60%) [e47] and a lower convergence threshold: EEA1 (2,500 MW) instead of Watch (3,000 MW). [e48]

## Key facts

- Reg-Up responds to ERCOT signals within five seconds. [e2]
- Non-Spin: ramp within 30 minutes and run for at least four consecutive hours. [e28]
- RTM duration requirements per the IMM: 5 minutes energy, 30 minutes Reg-Up and RRS, 1 hour ECRS, 4 hours NSRS. [e35]
- The AS Plan is posted by 0600 on the Day-Ahead; annual requirements are posted by December 20. [e6][e17]
- AS cost fell from $3.74 per MWh of load in 2023 to $0.98 in 2024 and $0.39 in 2025. [e14][e12]
- ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025. [e13]
- RTC went live in December 2025; day-ahead AS awards are now financial. [e11]
- NSRS was the most expensive AS on average in 2025. [e39]

## Say it like this

Ancillary services are the reserve products ERCOT procures to support reliable operation, from Reg-Up that responds within five seconds to Non-Spin that ramps within 30 minutes. Batteries now supply most of the fast products, costs to load have fallen sharply since 2023, and the quantities come from an annual methodology the Board and PUCT approve. [e2][e5][e13][e14][e12][e26]

## Common confusion

Ancillary services are capacity products, not energy: awards reserve headroom rather than delivering MWh, though ECRS can supply energy to avoid or during an EEA [e4] and RRS is deployed through real power increases or decreases by Resources. [e3] Before December 2025 a day-ahead AS award was a physical obligation, and now it is a financial position. [e11] "AS Obligation" is also not the same as an award: the obligation is a QSE's allocated share of ERCOT's need. [e7] The AS Plan (what ERCOT needs) is not the methodology (how the annual quantities are derived): the methodology is determined and approved annually, [e50][e51] the quantities it produces are posted by December 20, [e17] while the Plan is posted for each Operating Day. [e6]

## Questions

### Name the ancillary services and how fast each responds.

Reg-Up responds within five seconds. [e2] RRS is automatically self-deployed after a significant frequency deviation. [e3] ECRS must ramp within ten minutes of the notice to deploy and hold the award for at least one hour. [e44] Non-Spin ramps within 30 minutes. [e5]

### Who pays for ancillary services?

According to the IMM, ERCOT allocates procurement costs to LSEs by real-time adjusted metered load, and QSEs also carry an obligation share based on load ratio share. [e10][e7]

### How did RTC change ancillary services?

Before December 2025, AS were bought only day-ahead and day-ahead awards were physical obligations. Now ERCOT also procures them in real time and day-ahead awards are financial. [e11]

### Why did ancillary service costs fall?

The IMM reports AS costs of $3.74 per MWh of load in 2023, $0.98 in 2024 and $0.39 in 2025. [e14][e12] The IMM says prices fell across all products from 2024 to 2025, partly because of continued growth in ESR capacity and the increase in AS provision by ESRs. [e40] The ECRS price also dropped sharply from 2023 to 2024. [e45]

### How does ERCOT decide how much ECRS and Non-Spin to buy?

A Monte Carlo model nets historic headroom credits against net-load forecast and outage risk and solves for a 1-in-10-year probability that reserves drop below the higher of Reg-Up plus RRS or the Watch threshold of 3,000 MW in the 2026 methodology. [e21][e52] ERCOT's 2027 proposal lowers that threshold to EEA1 at 2,500 MW. [e48]

### Why was the ECRS duration cut from two hours to one?

ERCOT's analysis said the length of historical ECRS risk-relevant deployments, sustained under-forecast error in 30-minute-ahead net load and a margin for solar forecast growth made one hour sufficient, with the caveat that it may need revisiting if there are frequency-recovery or BAL-002 concerns. [e30][e53]

### Why was NSRS the most expensive AS in 2025, and what if an AS shortage occurs?

The IMM calls the 2025 outcome inconsistent with expectations for a well-functioning market, [e54] and ties excess NSRS procurement to the way excess aggregate-curve volume is assigned to the NSRS demand curve. [e39][e42] Shortages since RTC are infrequent, and NSRS has the lowest penalty price. [e43]

## Scenarios

### A battery owner asks whether to put capacity into Reg-Up or into energy arbitrage.

- Batteries already supplied 94% of Reg-Up on average in 2025. [e13]
- Costs of AS to load fell about 60% from 2024 to 2025. [e12]
- Since RTC, ERCOT also procures AS in real time [e11], and SCED determines Ancillary Service awards together with Resource Dispatch Instructions. [e15]
- Awards must fit under the Resource's HSL together with its other awards, and the RTM duration requirement for Reg-Up is 30 minutes. [e29][e35]

## Open items

- Pending NPRR1309 text would change the Non-Spin duration in Section 3.17.3(1)(a)(ii) from four to two consecutive hours upon system implementation; the four-hour text above is the text in effect in the saved Protocols. [e55]
- The Dispatchable Reliability Reserve Service (DRRS) appears in pending NPRR1309 text only and is not covered here.
- Conflict in the saved Protocols on ECRS duration: np-03 Section 3.17.4 says two consecutive hours, while np-08 Section 8.1.1.2.1.7 and Section 8.1.1.3.4 say one hour, and NPRR1282 (effective upon RTC implementation) changes ECRS to one hour. The saved np-03 text appears not to carry the NPRR1282 change; confirm against the current Protocols.
- The minimum Primary Frequency Response RRS quantity appears as 1,150 MW in np-03 Section 3.16(2)(c) and as 1,377 MW in the 2026 and 2027 AS methodology documents (the 2026 methodology says "shall not be less than 1,377 MWs"); the saved sources do not explain how the two relate.
- The 2024 IMM report gives the ECRS annual average price as $76.77 (2023) and $9.62 (2024), while the 2025 IMM report's table gives $73.18 and $9.56 for the same years; the sources do not explain the difference.
- The 2027 AS methodology is a Board item dated September 14-15, 2026; whether the Board recommended it and the PUCT approved it is not in the saved sources.
- The IMM Figure 25 OCR shows the 2025 Reg-Up price as "-$2.97"; this is likely an OCR artefact and Reg-Up annual prices were not cited.
- Whether Reg-Up's actual deployment signal interval is four seconds or five seconds (the protocol says response within five seconds; Section 3.17.4 describes a four-second signal for ECRS energy deployment) was not reconciled.
