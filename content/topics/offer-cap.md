---
id: offer-cap
name: Offer Caps (HCAP / LCAP / SWCAP)
aliases: [HCAP, LCAP, SWCAP, system-wide offer cap, DASWCAP, RTSWCAP, ECAP, scarcity pricing mechanism, SPM, peaker net margin, PNM]
kind: rule
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: puct
    type: regulates
    note: PUCT rule 25.509 states the HCAP and LCAP levels and the peaker-net-margin trigger, and the PUCT reviews the cap programs every five years starting 2026. [e1][e2][e3][e12]
  - to: energy-offer-curve
    type: determines
    note: Energy offer curves must sit between -$250 per MWh and the applicable cap. [e10]
  - to: ordc
    type: related
    note: PUCT rule 25.509 says the ORDC and reliability deployment price adder continue when the cap drops to the LCAP, but the ORDC adder was replaced by ASDCs at RTC go-live; the RDPA remains. [e4][e22]
  - to: asdc
    type: related
    note: The VOLL used to build the DAM and RTM ancillary service demand curves is set to the HCAP for DAM. [e15]
  - to: eea
    type: related
    note: Read this for the EEA levels; this topic covers the separate price-based Emergency Pricing Program.
  - to: energy-only-market
    type: part-of
    note: The cap and the peaker net margin test are the scarcity-pricing guardrails of ERCOT's energy-only design.
  - to: winter-storm-uri
    type: example-of
    note: The peaker net margin threshold has been crossed once, in February 2021. [e9]
  - to: imm
    type: related
    note: The IMM State of the Market reports track the peaker net margin each year. [e9]
  - to: emergency-pricing-program
    type: related
    note: The EPP sets the cap to the ECAP after 12 hours at the HCAP in a rolling 24 hours; ERCOT says it has never been activated as of September 2026. [e7][e40]
  - to: rtc-b
    type: related
    note: The separate $2,000 real-time cap was written into NPRR1008, an RTC revision request the ERCOT Board approved on December 8, 2020, and took effect at RTC go-live. [e31][e32][e18]
  - to: credit-tpe
    type: affects
    note: ERCOT's September 2026 filing says the real-time cap is the ceiling on credit exposure ERCOT cannot prevent through ordinary credit administration. [e36]
  - to: ferc
    type: contrasts-with
    note: FERC's 2024 Energy Primer describes a $1,000 supply-offer cap in the FERC-regulated RTOs/ISOs, and says FERC regulates all RTOs/ISOs except ERCOT. [e45][e46]
evidence:
  - id: e1
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(A)"
    quote: "The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers."
  - id: e2
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(B)"
    quote: "The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e3
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(C)"
    quote: "The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants."
  - id: e4
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year."
  - id: e5
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c)"
    quote: "(b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price."
  - id: e6
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(f)"
    quote: "(f) For the PNM process described above, ERCOT shall set the PNM threshold at three times the cost of new entry of new generation plants."
  - id: e7
    source: puct-25-509
    locator: "16 TAC 25.509(c)(1), Activation of the EPP"
    quote: "The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period."
  - id: e8
    source: puct-25-509
    locator: "16 TAC 25.509(c)(2)"
    quote: "While the EPP is active, the system-wide offer cap will be set to the ECAP for both energy and ancillary service offers. The ECAP will be set equal to the value of the LCAP."
  - id: e9
    source: imm-som-2025
    locator: "Chapter on Resource Adequacy, section E, Peaker Net Margin"
    quote: "If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT’s history, on February 16, 2021, during Winter Storm Uri."
  - id: e10
    source: np-04
    locator: "Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2)"
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP."
  - id: e11
    source: puct-25-509
    locator: "16 TAC 25.509(b)(7)"
    quote: "When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource."
  - id: e12
    source: puct-25-509
    locator: "16 TAC 25.509(d)"
    quote: "Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "In 2024, the PUCT approved a CONE of $140 per kW-year while leaving the legacy CONE of $105 per kW-year in place to determine the peaker net margin threshold."
  - id: e14
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024."
  - id: e15
    source: np-04
    locator: "Section 4.4.11, Day-Ahead and Real-Time System-Wide Offer Caps, paragraph (1)(a)"
    quote: "(1) The DASWCAP and RTSWCAP shall be determined in accordance with the Public Utility Commission of Texas (PUCT) rules. The methodology for determining the DASWCAP and RTSWCAP is as follows: (a) The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM."
  - id: e16
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e17
    source: np-04
    locator: "Section 4.4.11, parameter table footnote"
    quote: "The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise directed by the ERCOT Board."
  - id: e18
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e19
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, slide 21 key takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e20
    source: np-04
    locator: "Section 4.4.7.2.1, Resource-Specific Ancillary Service Offer Criteria, paragraph (3)"
    quote: "No Resource-Specific Ancillary Service Offer received before 1000 in the Day-Ahead may contain a price exceeding the Day-Ahead System-Wide Offer Cap (DASWCAP) (in $/MW). No Resource-Specific Ancillary Service Offer received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP (in $/MW)."
  - id: e21
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(d)"
    quote: "(d) For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows: ∑((RTEP – POC) * (0.25)) for each Settlement Interval where (RTEP – POC) > 0"
  - id: e22
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature."
  - id: e23
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)"
    quote: "If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change."
  - id: e24
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (3)"
    quote: "(3) When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner:"
  - id: e25
    source: np-04-2025-02
    locator: "Superseded edition effective 2025-02-01, Section 4.4.11, System-Wide Offer Caps, parameter table (text then in force)"
    quote: "HCAP $/MWh 5,000 PNM threshold $/MW-year 315,000"
  - id: e26
    source: np-04-2025-02
    locator: "Superseded edition effective 2025-02-01, pending box after Section 4.4.11"
    quote: "[NPRR1008 and NPRR1216: Replace applicable portions of Section 4.4.11 above with the following upon system implementation of NPRR1216; or upon system implementation of the Real-Time Co-Optimization (RTC) project for NPRR1008:]"
  - id: e27
    source: np-04-2025-02
    locator: "Superseded edition effective 2025-02-01, pending box after Section 4.4.11, parameter table row"
    quote: "HCAP – RTM (RTSWCAP) $/MWh 2,000"
  - id: e28
    source: puct-51812-lcap-order
    locator: "PUCT Project No. 51812, Order Reinstating Low System-Wide Offer Cap (March 3, 2021), p. 1"
    quote: "On February 16, 2021, in response to significant market anomalies, the Commission found good cause to suspend, and issued an order suspending, the use of the low system-wide offer cap (LCAP) until after the Commission's next regularly scheduled open meeting. The Commission ordered ERCOT to use the high system-wide offer cap (HCAP) until the LCAP is reinstated."
  - id: e29
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary, Real-time Energy Pricing Outcomes"
    quote: "In February 2021, the LCAP was defined as the greater of either $2,000 per MWh or 50 times the natural gas price (also known as the fuel index price or FIP). Natural gas index prices reached values over $400 per MMBtu during the load shed event, compared to around $3 per MMBtu on average during previous years. As a result, the LCAP (50 times FIP, or up to $20,000) exceeded the HCAP of $9,000."
  - id: e30
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary, footnote 17"
    quote: "See Review of the ERCOT Scarcity Pricing Mechanism, Project No. 51871, (Jun. 24, 2021), when the Commission directed the elimination of the provision that tied the value of the LCAP to the natural gas price index and replaced it with a provision that ensures resource entities are able to recover their actual marginal costs when the LCAP is in effect; and Review of 25.505, Project No. 52631, (Dec. 2, 2021), which set the high system-wide offer cap at $5,000 per MWh effective January 1, 2022."
  - id: e31
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Board Report, Board Decision row"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1008 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e32
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Board Report, proposed Section 4.4.11 parameter table"
    quote: "HCAP – DAM (DASWCAP) $/MWh 9,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e33
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Board Report, Effective Date row"
    quote: "Upon system implementation of the Real-Time Co-Optimization (RTC) Project"
  - id: e34
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), p. 2"
    quote: "ERCOT recommends that the current approach, in which the SWCAP in RTM is set at $2,000 and the SWCAP in DAM is set at the effective VOLL, be maintained. The use of different offer caps for DAM and RTM was a deliberate design decision reflected in design principles for RTC+B"
  - id: e35
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(b), pp. 2-3"
    quote: "In the RTM, the energy component of Locational Marginal Prices (LMPs) can exceed $2,000 due to the Ancillary Service Demand Curves (ASDCs). Allowing QSEs to submit higher energy bids into the DAM allows Market Participants to more effectively hedge when they expect scarcity conditions in Real-Time."
  - id: e36
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(b), p. 3"
    quote: "The SWCAP in the RTM accordingly acts as the ceiling on the exposure that ERCOT cannot prevent through ordinary credit administration and that, in a default, would be uplifted to the market."
  - id: e37
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 4, p. 9"
    quote: "The amounts are per megawatt of Real-Time-exposed load and are provided to show proportionality, not to forecast any particular Market Participant' s exposure. These make clear that at the current $2,000 SWCAP in the RTM, a four-day event accrues roughly $192,000 of exposure per exposed megawatt, converging the RTM SWCAP upward to the $5,000 DAM SWCAP level, which would raise that to approximately $480,000, a 150% increase, before any change in Market Participant behavior."
  - id: e38
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, Table 1 (example 96-hour scarcity event), p. 3"
    quote: "$5,000 (= current DAM SWCAP) $480,000 +150% $9,000 (pre-WS Uri SWCAP) $864,000 +350%"
  - id: e39
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, Question 1(b) as posed by Commission Staff, p. 2"
    quote: "With the implementation of RTC+B, there is a difference between the day ahead (DAM) and real-time (RTM) system offer caps for both energy and AS."
  - id: e40
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 2, p. 5"
    quote: "The conditions required by PURA § 39.160 and 16 TAC § 25.509(d) to trigger activation of the EPP have not occurred since the adoption of the program"
  - id: e41
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 2, p. 5"
    quote: "The Commission approved these Revision Requests on September 26,2024 and ERCOT implemented Phase 1 of these Revision Requests on December 5,2025. Phase 2 is in the queue for future implementation."
  - id: e42
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 2, p. 6"
    quote: "Because that trigger is established by statute in PURA §39.160(b), changing the EPP trigger to activate more or less frequently under different conditions would require new legislation."
  - id: e43
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(c), p. 4"
    quote: "Because the PNM-related CONE value of $105 per kW-year is now dated at more than a decade old and because the same factors that led to the increase in the planning CONE also affect the PNM, ERCOT recommends that the Commission should reevaluate the value of CONE used to calculate the PNM threshold."
  - id: e44
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(a), p. 1"
    quote: "ERCOT does not have a position at this time whether the LCAP and HCAP should be changed but supports the performance of a holistic evaluation of whether those offer caps should be updated."
  - id: e45
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Electricity Markets chapter, Offer Caps"
    quote: "Offer Caps Each RTO/ISO caps a resource’s supply offer at $1,000. If a resource's costs exceed $1,000, they may request authority to offer at a higher price that reflects their verified costs. Offers up to $2,000 may be used by the RTO/ISO to set the locational marginal price."
  - id: e46
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Electricity Markets chapter, RTO/ISO section"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
  - id: e47
    source: np-04
    locator: "Section 4.4.11.1(3)(a)-(c), Scarcity Pricing Mechanism"
    quote: "(a) On the Operating Day that the PNM exceeds the PNM threshold, the HCAP will remain in effect for the balance of the day and for the Operating Day thereafter (Days 1 and 2). (b) On the Operating Day after the PNM exceeds the PNM threshold (Day 2) prior to the execution of DAM, ERCOT shall send a Market Notice that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3)."
  - id: e48
    source: np-04
    locator: "Section 4.4.11(1)(a)(i)(A)-(B), EPP duration"
    quote: "(A) 24 hours after the initial setting of these values to ECAP; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while the EPP was active. If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions."
  - id: e49
    source: imm-som-2011
    locator: "2011 State of the Market Report, Resource Adequacy discussion of summer 2011 RMR units"
    quote: "In order for this capacity to have the least amount of impact on market based price formation, the energy provided from these units was offered for dispatch at the system wide offer cap of $3,000 per MWh."
  - id: e50
    source: imm-som-2020
    locator: "2020 State of the Market Report, Appendix, discussion of Figure A6 (p. A-12)"
    quote: "The higher prices in 2019 illustrate the effects of the changes to the shortage pricing mechanism over the past decade, most importantly the increase of the System Wide Offer Cap to $9,000/MWh, the implementation of the Operating Reserve Demand Curve and subsequent changes to its parameters, and the implementation of the Reliability Deployment Adder."
  - id: e51
    source: imm-som-2023
    locator: "2023 State of the Market Report, Appendix: Introduction, EPP rule (p. A-11)"
    quote: "Ultimately, the rule the PUCT adopted (1) sets the EPP cap equal to $2,000 per MWh for energy and ancillary services, which is the value of the low system-wide offer cap;"
  - id: e52
    source: puct-25-509
    locator: "16 TAC §25.509, page footer"
    quote: "effective 12/20/23 (P 54585)"
  - id: e53
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(a), p. 2"
    quote: "The current values were implemented in 2021 and based on the significant changes to both the ERCOT market, such as the implementation ofthe Emergency Pricing Program (EPP), Real-Time Co-optimization Plus Batteries (RTC+B), and new Ancillary Services and reliability services, and to the grid, with the changes to the Resource portfolio mix and shifting peak demand times, an update may be merited depending on the results of the holistic evaluation."
  - id: e54
    source: puct-25-509
    locator: "16 TAC §25.509(b)(4)"
    quote: "Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP – POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP – POC >0."
  - id: e55
    source: puct-25-509
    locator: "16 TAC §25.509(b)(2)"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT."
  - id: e56
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 4, p. 9"
    quote: "ERCOT recommends that the Commission incorporate the stress-testing framework and credit-related ERCOT Protocols, including Protocols § 16.11 and the Total Potential Exposure (TPE) calculation, as a companion consideration of any SWCAP program change contemplated in the quinquennial review."
  - id: e57
    source: puct-51812-lcap-order
    locator: "PUCT Project No. 51812, Order Reinstating Low System-Wide Offer Cap, p. 2"
    quote: "Accordingly, the Commission terminates the suspension of the use of the LCAP and orders ERCOT to resume application of the LCAP when administering the scarcity pricing mechanism as provided by Commission rule. Signed at Austin, Texas the 3rd day of March 2021."
---

## Definition

The system-wide offer cap is the upper limit on the price of energy and ancillary service offers. [e10][e20] PUCT rule 25.509 states a high cap (HCAP) of $5,000 per MWh and a low cap (LCAP) of $2,000 per MWh, with the same dollar values per MW per hour for ancillary service offers. [e1][e2] The Protocols apply the high cap as two values: a Day-Ahead System-Wide Offer Cap (DASWCAP) and a Real-Time System-Wide Offer Cap (RTSWCAP), each set equal to the "respective" HCAP. [e15] The Protocol parameter table lists the day-ahead HCAP (DASWCAP) at $5,000 per MWh and the real-time HCAP (RTSWCAP) at $2,000 per MWh. [e16]

## How it works

Under the PUCT rule, the cap starts each calendar year at the HCAP and stays there until the peaker net margin for that year exceeds a threshold of three times the cost of new entry of new generation plants. [e3] If the threshold is crossed, the cap drops to the LCAP for the rest of that calendar year, and energy prices (excluding congestion) cannot exceed the LCAP plus $1. [e4] The rule text also says ERCOT keeps applying the operating reserve demand curve and the reliability deployment price adder for the rest of that year [e4]; since RTC went live the ORDC adder has been replaced by ancillary service demand curves, while the reliability deployment price adder remains. [e22]

In the protocols the peaker net margin is calculated in dollars per MW on a cumulative basis over all past intervals in the year (see Formula). [e21] The protocols set the PNM threshold at three times the cost of new entry of new generation plants. [e6] When the PNM exceeds the threshold, the DASWCAP and the VOLL used for the DAM and RTM ancillary service demand curves are both changed to the LCAP for the rest of the calendar year. [e24] The switch is not immediate: the HCAP stays in effect for the rest of the day the threshold is crossed and the next Operating Day (Days 1 and 2); on Day 2, before the DAM runs, ERCOT sends a Market Notice that the LCAP takes effect on Day 3. [e47]

A second, separate mechanism is the Emergency Pricing Program: the PUCT rule says it must be activated if the system-wide energy price has been at the HCAP for 12 hours within a rolling 24-hour period. [e7] The Protocols state the test as the sum of the RTM System Lambda and the Real-Time Reliability Deployment Price Adder for Energy being at or above the HCAP for DAM for 12 hours within a rolling 24 hours, after which the DASWCAP and the VOLL used for the ancillary service demand curves are set to the ECAP. [e23] Under the PUCT rule, while the program is active the cap is set to the ECAP, which equals the LCAP value. [e8] The ECAP period lasts until the later of 24 hours after the switch to ECAP or 24 hours after ERCOT exits EEA conditions if it was in EEA while the EPP was active, extended again if ERCOT re-enters EEA within 24 hours. [e48]

When the cap is at the LCAP, ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e11] In the protocols, an energy offer curve must fall between -$250 per MWh and the day-ahead or real-time cap, depending on when it was submitted; an energy offer curve received after 1430 in the Day-Ahead cannot exceed the RTSWCAP. [e10] Resource-specific ancillary service offers follow the same split: those received before 1000 in the Day-Ahead are capped at the DASWCAP and those received after 1430 at the RTSWCAP. [e20] Commission Staff's review question, as quoted in ERCOT's filing, describes the day-ahead/real-time difference as applying to both energy and AS. [e39]

The Protocols say both caps are determined under PUCT rules, and they set the VOLL used for the DAM and RTM ancillary service demand curves to the HCAP for DAM. [e15] The "current values" in the Section 4.4.11 table (ECAP, DASWCAP, RTSWCAP, LCAP and the PNM threshold of $315,000 per MW-year) are recommended by TAC and approved by the ERCOT Board. [e16][e17]

## Formula

Peaker net margin (np-04 §4.4.11.1(1)(d)): PNM = ∑((RTEP – POC) × 0.25) for each Settlement Interval where (RTEP – POC) > 0, accumulated in dollars per MW over all past intervals in the current year. [e21] RTEP is the real-time energy price, measured as the ERCOT Hub Average 345 kV Hub price; POC is the Peaking Operating Cost, ten times the effective daily FIP (fuel index price), in dollars per MWh; [e5] (The knowledge base's own reading, not a source statement: comparing this with the PUCT rule's "number of minutes in a settlement interval / 60 minutes per hour" term, 0.25 corresponds to a 15-minute settlement interval.) The cap switches when PNM exceeds the threshold of three times CONE, listed as $315,000 per MW-year. [e6][e16] The PUCT rule writes the same sum with "number of minutes in a settlement interval / 60 minutes per hour" in place of 0.25 and a POC of 10 times the natural gas price index. [e54][e55]

## ERCOT context

The IMM reports that the peaker net margin has crossed the threshold only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 the peaker net margin reached almost $79 per kW, about 21% lower than in 2024, well short of the $315 per kW-year trigger. [e14][e9] The trigger still uses the legacy cost of new entry of $105 per kW-year, even though the PUCT approved a $140 per kW-year CONE in 2024. [e13] In its September 2026 filing ERCOT recommended that the Commission re-evaluate the PNM CONE, calling the $105 value more than a decade old. [e43]

Why the real-time cap is $2,000. The separate real-time value was written into NPRR1008, one of the RTC revision requests, whose Section 4.4.11 table listed DASWCAP at $9,000 and RTSWCAP at $2,000; the ERCOT Board approved it on December 8, 2020, effective upon implementation of the RTC project. [e31][e32][e33] ERCOT's summer 2026 review says the SWCAP was reduced to $2,000/MWh from $5,000/MWh after RTC go-live on 12/5/2025. [e18][e19] In its September 2026 comments in the PUCT's offer-cap review (Project 59550), ERCOT called the different caps "a deliberate design decision" in the RTC+B design principles and asked that they be kept. [e34] ERCOT's stated reasons: real-time LMPs' energy component can exceed $2,000 because of the ASDCs, while a higher DAM cap lets participants hedge expected real-time scarcity; and the real-time cap is the ceiling on exposure that ERCOT cannot control through ordinary credit administration and that would be uplifted in a default. [e35][e36] In an illustrative four-day (96-hour) scarcity event, ERCOT put the exposure at roughly $192,000 per MW of real-time-exposed load at the $2,000 cap and about $480,000 at $5,000; it says the figures show proportionality and are not a forecast of any participant's exposure. [e37] The PUCT rule text in the saved sources still states a single HCAP of $5,000 per MWh. [e2] ERCOT also said the current cap values were implemented in 2021 and that, given the EPP, RTC+B, new ancillary services and the changing resource mix, an update may be merited depending on the evaluation. [e53]

The 2026 five-year review. The PUCT reviews each system-wide offer cap program starting January 1, 2026, and every five years after that. [e12] In that review ERCOT took no position on whether the LCAP and HCAP should change, but supported a holistic evaluation. [e44] ERCOT said the Emergency Pricing Program's trigger conditions have not occurred since the program was adopted [e40], and that because the trigger is set in PURA §39.160(b), changing it would require new legislation. [e42] According to ERCOT's filing, the PUCT approved NPRR1216 and its companion revision requests (the EPP's Protocol implementation) on September 26, 2024, and ERCOT implemented Phase 1 on December 5, 2025, with Phase 2 still queued. [e41]

Outside ERCOT. FERC's 2024 Energy Primer says each FERC-regulated RTO/ISO caps supply offers at $1,000, with cost-verified offers up to $2,000 allowed to set LMP, and that FERC regulates all RTOs/ISOs except ERCOT. [e45][e46]

## Timeline

- 2011: the system-wide offer cap was $3,000 per MWh (IMM 2011 report, on RMR units offered at the cap that summer). [e49]
- Before 2021: the cap was raised to $9,000/MWh; the IMM's 2020 report names this as a main change of the past decade but the saved text gives no date. [e50]
- December 8, 2020: ERCOT Board approves NPRR1008 (RTC), whose table lists DASWCAP $9,000 and RTSWCAP $2,000, effective on RTC implementation. [e31][e32][e33]
- February 2021: LCAP is the greater of $2,000 or 50 times FIP; gas above $400/MMBtu pushes it above the $9,000 HCAP. [e29]
- February 16, 2021: the PNM threshold is crossed; the same day the PUCT suspends the LCAP and orders ERCOT to use the HCAP. [e9][e28]
- March 3, 2021: the PUCT reinstates the LCAP (Project 51812). [e28][e57]
- June 24, 2021: in Project 51871 the PUCT directs elimination of the gas-index link to the LCAP and adds actual-marginal-cost recovery when the LCAP is in effect (IMM). [e30]
- December 2, 2021: Project 52631 sets the HCAP at $5,000 per MWh effective January 1, 2022 (IMM). [e30]
- December 2023: the PUCT adopts the EPP, with the ECAP equal to the $2,000 LCAP; rule 25.509 as saved is effective 12/20/23 (Project 54585). [e51][e52]
- September 26, 2024: the PUCT approves NPRR1216 and related revision requests implementing the EPP (per ERCOT's 2026 filing). [e41]
- February 1, 2025 edition of the Protocols (pre-RTC): the table in force lists a single $5,000 HCAP, and the $2,000 RTSWCAP row sits in a pending NPRR1008/NPRR1216 box. [e25][e26][e27]
- December 5, 2025: RTC+B go-live; the real-time cap becomes $2,000 while the day-ahead cap stays $5,000; EPP Phase 1 is implemented (per ERCOT's 2026 filing). [e18][e16][e41]
- September 17, 2026: ERCOT files comments in Project 59550, the first five-year review, supporting the split caps. [e34][e12]

## Key facts

- LCAP is $2,000 per MWh for energy and $2,000 per MW per hour for ancillary services. [e1]
- PUCT rule: HCAP is $5,000 per MWh for energy and $5,000 per MW per hour for ancillary services. [e2]
- Protocol table "current values": DASWCAP $5,000/MWh, RTSWCAP $2,000/MWh, ECAP and LCAP $2,000/MWh, PNM threshold $315,000/MW-year. [e16]
- ERCOT's summer 2026 review: the SWCAP was reduced to $2,000/MWh from $5,000/MWh after RTC go-live on 12/5/2025; the same slide calls it the lower Real-Time System Wide Offer Cap. [e18][e19]
- The trigger for dropping to the LCAP is a peaker net margin above three times the cost of new entry, which the IMM puts at $315 per kW-year. [e3][e9]
- The Emergency Pricing Program starts after 12 hours at the HCAP in a rolling 24 hours (PUCT rule), and sets the cap to the ECAP, equal to the LCAP value. [e7][e8]
- The calendar-year reset: the cap returns to the HCAP at the start of each calendar year. [e3]
- The threshold has been exceeded once, on February 16, 2021. [e9]
- ERCOT's Table 1 (September 2026): per MW of real-time-exposed load in an example 96-hour scarcity event, $480,000 at a $5,000 cap and $864,000 at the pre-Uri $9,000 cap. [e38]

## Say it like this

(Guidance) ERCOT's high offer cap is $5,000 per MWh in the PUCT rule and for day-ahead offers, but since real-time co-optimization went live in December 2025 the real-time cap is $2,000. [e2][e16][e18] The cap falls to the $2,000 low cap for the rest of the year only if a notional peaking plant earns more than a set net margin in that year. [e4] That has happened once, in Winter Storm Uri. [e9]

(Guidance) The split was designed in: ERCOT says real-time prices can still go above $2,000 through the reserve demand curves, and the lower real-time cap limits the exposure no credit rule can stop. [e35][e36]

## Common confusion

(Guidance) The HCAP, the LCAP and the ECAP are all "the system-wide offer cap" at different times, not three separate caps in force at once. A different point: the day-ahead and real-time caps are separate parameters, and the Protocols currently list them at $5,000 and $2,000 at the same time, so "the cap is $5,000" is true day-ahead but not in real time. [e16] A $2,000 real-time offer cap is also not a $2,000 price cap: ERCOT says the energy component of real-time LMPs can exceed $2,000 because of the ASDCs. [e35] The peaker net margin test is on an annual calendar-year basis, whereas the Emergency Pricing Program looks at a rolling 24-hour window. [e3][e7]

## Questions

### What are the HCAP and LCAP, and what makes the cap switch?

PUCT rule 25.509 states an HCAP of $5,000 per MWh and an LCAP of $2,000 per MWh, with the same figures per MW per hour for ancillary services; since RTC go-live the real-time cap has been $2,000 (see the next question). [e1][e2][e18] The cap starts each year at the HCAP and moves to the LCAP for the rest of the year if peaker net margin exceeds three times the cost of new entry. [e3][e4]

### Is the ERCOT offer cap $5,000 or $2,000 today?

It depends on the market and the source. The Protocol parameter table lists the day-ahead HCAP (DASWCAP) at $5,000/MWh and the real-time HCAP (RTSWCAP) at $2,000/MWh, and ERCOT's summer 2026 review says the cap was reduced to $2,000 after RTC go-live on 12/5/2025. [e16][e18] The PUCT rule text in the saved sources still states an HCAP of $5,000. [e2]

### Why is the real-time cap lower than the day-ahead cap?

It was built into the RTC design: NPRR1008, approved by the ERCOT Board in December 2020, already listed a $2,000 RTSWCAP. [e31][e32] ERCOT argued in September 2026 that the DAM cap lets participants hedge expected scarcity, since real-time LMPs can exceed $2,000 through the ASDCs, and that the real-time cap bounds exposure that would be uplifted in a default. [e35][e36]

### What if the real-time cap were raised back to $5,000?

ERCOT's illustration: a four-day (96-hour) event would accrue about $480,000 per MW of real-time-exposed load instead of about $192,000, a 150% increase, before any change in behaviour; ERCOT says the figures show proportionality, not a forecast. [e37] ERCOT recommended that the Commission consider its stress-testing framework and the credit-related Protocols, including the TPE calculation, alongside any offer-cap change in the review. [e56]

### How is the peaker net margin built?

It sums, across settlement intervals, the amount by which the real-time energy price exceeds the Peaking Operating Cost. The protocol prices POC at ten times the effective daily fuel index price and measures the real-time price with the ERCOT Hub Average 345 kV Hub price. [e5][e21]

### Has the cap ever dropped to the LCAP?

The threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri, according to the IMM. [e9] But the PUCT suspended the LCAP that same day, because the LCAP was then tied to gas prices and would have exceeded the $9,000 HCAP, and reinstated it on March 3, 2021. [e28][e29][e57] In 2025 the peaker net margin reached almost $79 per kW, far below the trigger. [e14][e9]

### What happens to scarcity pricing when the cap drops to the LCAP?

Energy prices excluding congestion cannot exceed the LCAP plus $1. [e4] The PUCT rule says the operating reserve demand curve and reliability deployment price adder stay in force, but since RTC the ORDC adder has been replaced by ancillary service demand curves while the reliability deployment price adder remains. [e4][e22] ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e11]

## Scenarios

### Mid-year, the PNM crosses the threshold on a Tuesday. When do offers face the LCAP?

- Tuesday (Day 1) and Wednesday (Day 2) stay at the HCAP; on Wednesday before the DAM, ERCOT sends a Market Notice. [e47]
- From Thursday (Day 3) through December 31 the DAM and RTM use the LCAP, with ASDCs built on the updated VOLL; January 1 resets to the HCAP. [e47][e3]

## Open items

- Resolved 2026-11-21: the $2,000 RTSWCAP came from NPRR1008 (ERCOT Board approval 12/8/2020, effective on RTC implementation) and took effect at RTC go-live on 12/5/2025. [e31][e32][e18] Still open: no saved source shows the PUCT's approval of NPRR1008 or an amendment of 25.509 to state a separate real-time value; the rule text as saved still says one HCAP of $5,000.
- ERCOT's 2026 filing says "the current values were implemented in 2021" [e53]; the IMM 2021 report dates the $5,000 HCAP to a December 2, 2021 decision effective January 1, 2022. [e30] The difference is likely decision date versus effective date, but neither source says so.
- The date and decision that raised the cap from $3,000 (2011) to $9,000 are not in the saved text. [e49][e50]
- How the EPP trigger (HCAP for DAM, $5,000) can be reached when real-time offers are capped at $2,000 is not explained in any saved source; ERCOT only says the trigger has not been met. [e23][e40]
- No saved source says what NPRR1216 Phase 2 contains or when it is scheduled.
