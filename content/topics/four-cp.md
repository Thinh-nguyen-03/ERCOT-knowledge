---
id: four-cp
name: 4CP Transmission Charges
aliases: [4CP, four coincident peak, 4CP response, 12CP, coincident peak, TCOS, TCRF, transmission cost recovery, Project 58000, Project 58484]
kind: rule
domain: congestion
level: 2
lenses: [analyst, retail, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: tdsp
    type: related
    note: A TSP's transmission rate is calculated on 4CP demand and charged to each DSP, and DSPs update their TCRF to pass through wholesale transmission cost changes. [e1][e4]
  - to: puct
    type: regulates
    note: The 4CP method is in PUCT rule 16 TAC 25.192, and a proposal for publication would replace it with 12CP (proposed, not adopted). [e1][e11][e12]
  - to: sb6
    type: causes
    note: SB 6 Section 6 ordered the PUCT to evaluate 4CP and amend its rules by December 31, 2026. [e7][e8]
  - to: large-flexible-load
    type: related
    note: The IMM says operationally flexible loads, such as cryptocurrency mines, can shift a disproportionate share of transmission costs onto other consumers under 4CP. [e17]
  - to: load-ratio-share
    type: contrasts-with
    note: The IMM recommends allocating transmission costs on an annual load ratio share basis instead of 4CP. [e13]
  - to: permian-transmission
    type: related
    note: The IMM says the Permian Basin Reliability Plan further exacerbates the misalignment between the 4CP method and today's transmission needs. [e16][e18]
  - to: large-load-interconnection
    type: related
    note: The proposed rule would bill large loads subject to 25.194 on a minimum billing demand for at least 20 years and use their interconnection fees to offset TSP revenue requirements. [e35][e37][e39]
  - to: net-load
    type: related
    note: PUCT Staff's draft report finds prices peak with net load around HE 20, later than the gross load peak that 4CP rewards cutting. [e31]
  - to: settlement-statements
    type: related
    note: ERCOT computes the 4CP billing determinants from Settlement data and posts them by December 1 each year. [e19]
  - to: summer-2026
    type: related
    note: ERCOT's summer 2026 review reports an estimated maximum 4CP reduction of about 492 MW on 7/22/2026, the day of the all-time demand record. [e6]
evidence:
  - id: e1
    source: puct-25-192
    locator: "16 TAC 25.192(b)(1)"
    quote: "A TSP’s transmission rate shall be calculated as its commission-approved transmission cost of service divided by the average of ERCOT coincident peak demand for the months of June, July, August and September (4CP), excluding the portion of coincident peak demand attributable to wholesale storage load. A TSP’s transmission rate shall remain in effect until the commission approves a new rate. The TSP’s annual rate shall be converted to a monthly rate. The monthly transmission service charge to be paid by each DSP is the product of each TSP’s monthly rate as specified in its tariff and the DSP’s previous year’s average of the 4CP demand that is coincident with the ERCOT 4CP."
  - id: e2
    source: pura-35
    locator: "PURA Sec. 35.004(d)"
    quote: "The commission shall price wholesale transmission services within ERCOT based on the postage stamp method of pricing under which a transmission-owning utility's rate is based on the ERCOT utilities' combined annual costs of transmission, other than costs described by Subsections (d-2) and (d-3), divided by the total demand placed on the combined transmission systems of all such transmission-owning utilities within a power region."
  - id: e3
    source: imm-som-2025
    locator: "Chapter II, Demand Response Capability, 3. 4CP Response"
    quote: "The 4CP mechanism allocates transmission costs to load serving entities based on their load ratio share during the highest 15-minute system load intervals in each of the four months from June through September. By reducing demand during these intervals, entities can lower their share of transmission charges, which have ranged from $8 to $9 per MWh in inflation-adjusted terms since 2021."
  - id: e4
    source: puct-25-193
    locator: "16 TAC 25.193(b)(1)"
    quote: "The DSP shall update its TCRF twice per year on March 1 and September 1 to pass through the wholesale transmission cost changes billed by a TSP."
  - id: e5
    source: imm-som-2025
    locator: "Chapter II, Demand Response Capability, 3. 4CP Response"
    quote: "ERCOT estimates that load fell by about 1,500 MW during the 4CP interval for August 2025."
  - id: e6
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 4"
    quote: "Key Takeaway: On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours. The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW."
  - id: e7
    source: sb6-89r
    locator: "SB 6 (89th Legislature), SECTION 6(a)(1)"
    quote: "The Public Utility Commission of Texas shall evaluate whether the existing methodology used to charge wholesale transmission costs to distribution providers under Section 35.004(d), Utilities Code, continues to appropriately assign costs for transmission investment. The commission shall also evaluate: (1)  whether the current four coincident peak methodology used to calculate wholesale transmission rates ensures that all loads appropriately contribute to the recovery of an electric cooperative's, electric utility's, or municipally owned utility's costs to provide access to the transmission system;"
  - id: e8
    source: sb6-89r
    locator: "SB 6 (89th Legislature), SECTION 6(c)"
    quote: "After completion of the evaluation project and not later than December 31, 2026, the commission shall amend commission rules to ensure that wholesale transmission charges appropriately assign costs for transmission investment."
  - id: e9
    source: imm-som-2025
    locator: "Chapter V.F.3, SB 6 – Transmission Cost Recovery"
    quote: "Recognizing the need to review the 4CP methodology, the 89th Texas Legislature passed SB 6 in June 2025."
  - id: e10
    source: puct-58484-draft-report
    locator: "Project 58484 Staff memo and draft report (filed 2026-03-16), draft recommendations 1-2"
    quote: "Change the methodology for assessing wholesale transmission costs on distribution service providers to a coincident peak (CP) methodology with a greater number of CPs. 2. Lengthen the interval over which a coincident peak period is measured."
  - id: e11
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, title page"
    quote: "PROPOSAL FOR PUBLICATION OF AMENDMENTS TO §25.192 and §25.193 and NEW §25.252 FOR CONSIDERATION AT THE JULY 9, 2026 OPEN MEETING"
  - id: e12
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, preamble p. 1"
    quote: "replace the four coincident peak (4CP) methodology with a 12 coincident peak (12CP) methodology for assigning transmission costs, codify using a 30-minute interval to measure 12CP"
  - id: e13
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "We support allocating transmission costs on an annual load ratio share basis. Alternatively, in our Commentary on Transmission Cost Allocation P-58484, we proposed a hybrid methodology that would allocate a portion of T-COS based on a predetermined number of floating coincident peaks during the year and increase the duration of the coincident peaks to one hour rather than fifteen minutes."
  - id: e14
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.192 definitions"
    quote: "ERCOT 12CP intervals -- The set of 12 30-minute intervals composed of the ERCOT system monthly peak demand interval for each of the 12 calendar months from October 1 of one year through September 30 of the subsequent year, inclusive."
  - id: e15
    source: imm-som-2025
    locator: "Chapter II, Demand Response Capability, 3. 4CP Response"
    quote: "4CP response is associated with several adverse market outcomes. Load reductions during peak intervals can suppress prices and reduce generator revenues, particularly when those intervals no longer correspond to system scarcity. As a result, 4CP response can weaken scarcity pricing and erode the revenue signals needed to support long-term resource adequacy."
  - id: e16
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "The Permian Basin Reliability Plan further exacerbates this misalignment."
  - id: e17
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "Because 4CP charges are based solely on contribution to peak demand, operationally flexible loads, such as cryptocurrency mines, can shift a disproportionate share of transmission costs onto other consumers."
  - id: e18
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "Because the 4CP method is based solely on system-wide summer peaks, it does not reflect the complex, locationspecific drivers of today’s transmission needs."
  - id: e19
    source: np-09
    locator: "Section 9.17.1(1), Billing Determinant Data Elements"
    quote: "ERCOT shall calculate and provide to Market Participants on the ERCOT website the following data elements annually to be used by TSPs and DSPs as billing determinants for transmission access service. This data must be provided by December 1 of each year."
  - id: e20
    source: np-09
    locator: "Section 9.17.1(2)-(3), Billing Determinant Data Elements"
    quote: "(2) ERCOT average 4-CP is defined as the average of the coincidental MW peaks occurring during the months of June, July, August, and September. (3) Coincidental MW peak is defined as the highest monthly Settlement Interval 15-minute MW peak for the entire ERCOT Transmission Grid as calculated per the following formula:"
  - id: e21
    source: pura-35
    locator: "PURA Sec. 35.004(c-1)"
    quote: "The commission by rule shall ensure that a large load customer who is subject to the standards adopted under Section 37.0561 contributes to the recovery of the interconnecting electric utility's costs to interconnect the large load to the utility's system."
  - id: e22
    source: sb6-89r
    locator: "SB 6 (89th Legislature), SECTION 6(a)(2)"
    quote: "(2)  whether alternative methods to calculate wholesale transmission rates would more appropriately assign the cost of providing access to and wholesale service from the transmission system, such as consideration of multiple seasonal peak demands, demand during different length daily intervals, or peak energy intervals; and"
  - id: e23
    source: puct-58484-draft-report
    locator: "Project 58484 Staff memo (March 16, 2026), p. 1"
    quote: "Commission Staff opened Project No. 58484, Evaluation qf Transmission Cost Recovery, on August 1, 2025 to fulfill the requirements in Section 6 of Senate Bill 6,"
  - id: e24
    source: puct-58484-draft-report
    locator: "Project 58484 Staff memo (March 16, 2026), p. 1"
    quote: "Comments are due by April 13, 2026."
  - id: e25
    source: puct-58484-draft-report
    locator: "Project 58484 Staff memo (March 16, 2026), draft recommendation 6"
    quote: "Require large load customers to pay a minimum demand charge that is based on the large load customer's contracted peak demand for a 10 to 15 year period."
  - id: e26
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, shortcomings of the existing 4CP methodology, item (3)"
    quote: "The use of 15-minute intervals to establish the peak period in each month likely provides too \"sharp\" of a price signal in too narrow a timeframe, thereby over-valuing the amount of peak demand reduction or avoidance achieved in relation to the transmission costs avoided."
  - id: e27
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, strengths of the existing 4CP methodology, item (2)"
    quote: "Wholesale 4CP rate design allows revenue and rate stability, with 4CP values fluctuating less than 3% per year on average."
  - id: e28
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, history of wholesale transmission pricing (p. 2)"
    quote: "The first part of the new rate, an \"access fee,\" collected 70% of the total transmission cost of service (TCOS) in the ERCOT region and was based on the ERCOT-wide postage stamp rate. The remaining 30% was an \"impact fee\" based on the vector-absolute \"megawatt-mile\" methodology."
  - id: e29
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, history of wholesale transmission pricing (pp. 2-3)"
    quote: "amended PURA § 35.004 to require the Commission to price ERCOT wholesale transmission rates based entirely on the postage stamp methodology."
  - id: e30
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, history of wholesale transmission pricing (p. 3)"
    quote: "The rate calculation was identical to that described in the previous \"access fee,\" this time including 100% of the TCOS in the ERCOT region."
  - id: e31
    source: puct-58484-draft-report
    locator: "Project 58484 Staff draft report, load, net load and price analysis (p. 6, Figure 6, 2023-2024 data)"
    quote: "On average, across all seasons, the ERCOT system load peaks during Hour Ending (HE) 18-or 6:00 p.m.-(with an average value ofnearly 59,000 MW), whileboth netload and real-time energy prices tend to peak later during HE 20 (with average values of approximately 43,500 MW and $134, respectively)."
  - id: e32
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, preamble p. 1"
    quote: "require non-opt-in-entity distribution service providers (DSPs) to provide ERCOT access to settlement-quality meter data for each large load customer in its service territory, require block load transfers to pay transmission costs, require interconnection fees paid under §25.194 relating to Large Load Interconnection Standards and financial security forfeited under §25.194 to be used to offset the TSP’s revenue requirement,"
  - id: e33
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.192 definitions, DSP 12CP load"
    quote: "DSP 12 coincident peak (12CP) load -- The average of the 12 demand values of a DSP that are coincident with the ERCOT 12CP intervals determined from the total demand of all customers within the ERCOT region connected to a DSP, including load served at transmission voltage, and block load transfers, but excluding export flows and wholesale storage load."
  - id: e34
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.193(d)(1)-(2)(A), Large load minimum billing demand"
    quote: "The minimum billing demand for a large load customer under paragraph (1) of this subsection must be the greater of: (A) the large load customer’s contracted peak demand, as defined in §25.194 of this title (relating to Large Load Interconnection Standards);"
  - id: e35
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.193(d)(2)(B)-(C) (p. 31)"
    quote: "the highest non-coincident peak demand placed by the large load customer on the system in the past year; or (C) the large load customer’s 12CP demand consistent with the most recent ERCOT 12CP intervals, as defined in §25.192 of this title (relating to Transmission Service Rates)."
  - id: e36
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.193(d)(3)"
    quote: "A large load customer’s billing under this section must commence at the level of available service at the time it is available, irrespective of whether the large load customer has energized or is fully using available capacity, and for a period of no less than 20 years."
  - id: e37
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.192(k)(1), Interconnection fee"
    quote: "In all proceedings to adjust rates under this section, TSPs must apply all interconnection fee amounts received as an offset to the TSP’s transmission revenue requirement."
  - id: e38
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, request for comments (p. 5)"
    quote: "Comments must be filed by August 11, 2026."
  - id: e39
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed new 25.252(c)(2)-(3), Large Load Customer Tariffs"
    quote: "Interconnection agreement. An interconnection agreement for service with a term of not less than 20 years and that complies with §25.194 of this title (relating to Large Load Interconnection Standards) is required."
  - id: e40
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, questions for comment, question 4 (p. 6)"
    quote: "Should separate rate treatment be applied to a large computational load, defined as an entity that is subject to §25.194 of this title (relating to Large Load Interconnection Standards) and in which 50% or greater of the demand at the site consists of power electronic based load, specifically computational load, such as data centers and cryptocurrency mining facilities?"
  - id: e41
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.192 transition requirements (p. 26)"
    quote: "Each TSP must submit a compliance filing to update its tariff within 30 days of adoption of this section."
  - id: e42
    source: imm-som-2024
    locator: "Chapter II, Demand and Supply in ERCOT, 4CP response (p. 33)"
    quote: "ERCOT estimates that about 2,500 MW of load was reduced during 4CP intervals in 2024, roughly 1,000 MW less than in 2023."
  - id: e43
    source: imm-som-2025
    locator: "Recommendations, 2015-1: Transition Away from the 4CP Method of Allocating Transmission Costs"
    quote: "Approved in 1996, the 4CP method was intended to allocate transmission costs to those who contributed most to system-wide peak demand."
  - id: e44
    source: imm-som-2025
    locator: "Chapter V.F.2, Correlation with Peak Demand (pp. 69-70, Figure 44, 2021-2025)"
    quote: "Although Figure 44 shows some correlation between the two, it is not strong enough to justify allocating transmission costs on that basis, especially given the impact that forecasted transmission costs will have on ratepayer electricity bills."
  - id: e46
    source: imm-som-2024
    locator: "Chapter II, Demand and Supply in ERCOT, 4CP response (p. 33)"
    quote: "lower their share of transmission charges, which were approximately $10 per MWh in 2024."
  - id: e45
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed new 25.252(c)(2), Contribution in aid of construction"
    quote: "A large load customer must pay contribution in aid of construction for transmission interconnection costs and distribution interconnection costs."
---
## Definition

4CP is the method ERCOT-region transmission costs are allocated today: a TSP's rate is its approved transmission cost of service divided by the average ERCOT coincident peak demand in June, July, August and September, and each distribution service provider pays that rate times its own previous-year average demand in those four intervals. [e1] Wholesale transmission in ERCOT is priced on a postage stamp basis under PURA. [e2]

## How it works

Each summer month has one coincident peak. The Protocols define it as the highest monthly Settlement Interval 15-minute MW peak for the whole ERCOT Transmission Grid, and the ERCOT average 4CP is the average of the June to September peaks. [e20] ERCOT calculates each DSP's 4CP and the ERCOT average 4CP from Settlement data and posts these billing determinants by December 1 each year. [e19] Each DSP's average demand in those four intervals then sets its monthly transmission charge, excluding wholesale storage load. [e1] Distribution providers pass changes in the wholesale transmission costs billed by TSPs through to their customers with a Transmission Cost Recovery Factor (TCRF), updated on March 1 and September 1. [e4]

By reducing demand during these intervals, entities can lower their share of transmission charges ("4CP response"). [e3] The IMM puts transmission charges at $8 to $9 per MWh in inflation-adjusted terms since 2021 (its 2024 report gave about $10 per MWh for 2024). [e3][e46] ERCOT estimated about 2,500 MW of 4CP load reduction in 2024 (roughly 1,000 MW less than in 2023) and about 1,500 MW in the August 2025 4CP interval, per the IMM. [e42][e5] On 7/22/2026, the all-time demand record day, ERCOT estimated a maximum 4CP reduction of about 492 MW, and a separately reported maximum reduction from cryptomining loads of about 3,299 MW. [e6]

## Formula

Current rule (16 TAC 25.192, in effect): TSP annual rate = commission-approved transmission cost of service ÷ ERCOT average 4CP demand (June to September, excluding wholesale storage load); monthly DSP charge = TSP monthly rate × the DSP's previous-year average 4CP demand. [e1] Each coincident peak is a 15-minute Settlement Interval. [e20]

Proposed rule (Project 58000, not adopted): replace the four summer peaks with 12CP, the system monthly peak 30-minute interval in each of the 12 months from October 1 to September 30. [e12][e14] A DSP's 12CP load would include transmission-voltage load and block load transfers but exclude export flows and wholesale storage load. [e33] For large loads, the DSP's 12CP value would be raised to each customer's minimum billing demand (below). [e34]

## ERCOT context

4CP dates from the mid-1990s. The IMM says the method was approved in 1996. [e43] PUCT Staff's history describes the first ERCOT-wide rate as 70% "access fee" on a postage stamp basis and 30% "impact fee" on a megawatt-mile basis. [e28] SB 7 (1999) then required pricing based entirely on the postage stamp method, and the rate became the old access-fee formula applied to 100% of TCOS. [e29][e30]

4CP is under active revision. SB 6 (June 2025) ordered the PUCT to evaluate whether 4CP still assigns transmission costs appropriately, including alternatives such as multiple seasonal peaks or different interval lengths, and to amend its rules by December 31, 2026. [e9][e7][e22][e8] Staff opened Project 58484 on August 1, 2025. [e23] Its March 2026 draft report (comments due April 13, 2026) recommended a coincident peak method with more CPs and a longer measurement interval, and a minimum demand charge for large loads based on contracted peak demand for 10 to 15 years. [e10][e24][e25] Staff's draft credits 4CP with stable rates (4CP values moving less than 3% a year on average) but says 15-minute intervals give too sharp a signal. [e27][e26] Its analysis of 2023-2024 data finds system load peaking around HE 18 while net load and real-time prices peak around HE 20. [e31]

The proposal for publication in Project 58000 was prepared for the PUCT's July 9, 2026 open meeting, with comments due August 11, 2026. [e11][e38] Beyond 12CP, it would require block load transfers to pay transmission costs, make interconnection fees and forfeited financial security under 25.194 offset TSP revenue requirements, and require non-opt-in DSPs to give ERCOT settlement-quality meter data for each large load. [e32][e37] Large loads would be billed on a minimum billing demand: the greatest of contracted peak demand, the highest non-coincident peak in the past year, or 12CP demand. [e34][e35] Billing would start when service is available, whether or not the customer has energized, for at least 20 years. [e36] New 25.252 would require large loads to pay contribution in aid of construction and to sign interconnection agreements of at least 20 years. [e45][e39] The PUCT also asked whether large computational loads should get separate rate treatment; that is a question for comment, not a proposal. [e40] PURA already requires large loads to contribute to the cost of interconnecting them. [e21] If the rule is adopted, each TSP must file a tariff compliance update within 30 days. [e41]

The IMM argues 4CP response suppresses prices and weakens scarcity pricing when the peak intervals no longer match system scarcity. [e15] It also says the correlation between congestion costs and peak demand over 2021-2025 is too weak to justify allocating on peak. [e44] It recommends annual load ratio share allocation, or a hybrid with floating coincident peaks of one hour. [e13]

## Key facts

- Current rule: TSP rate = transmission cost of service / average ERCOT 4CP demand (June to September), excluding wholesale storage load. [e1]
- Interval: highest monthly 15-minute Settlement Interval peak; determinants posted by December 1. [e20][e19]
- 4CP response: about 2,500 MW in 2024; about 1,500 MW in the August 2025 interval; about 492 MW estimated on July 22, 2026. [e42][e5][e6]
- Statutory deadline: PUCT must amend its rules by December 31, 2026. [e8]
- Proposed (not adopted): 12CP, monthly peak 30-minute intervals from October 1 to September 30; large-load minimum billing demand for at least 20 years. [e12][e14][e36]
- Staff draft (March 2026): more CPs, longer intervals, large-load minimum demand for 10 to 15 years. [e10][e25]
- Retail pass-through: TCRF updates on March 1 and September 1. [e4]

## Timeline

- 1996: 4CP method approved (per the IMM), initially as part of a 70% access fee / 30% impact fee rate. [e43][e28]
- 1999: SB 7 requires postage stamp pricing for all ERCOT wholesale transmission; 100% of TCOS goes through the access-fee formula. [e29][e30]
- 2025-06: The 89th Legislature passes SB 6, whose Section 6 orders the 4CP review. [e9][e7]
- 2025-08-01: Staff opens Project 58484. [e23]
- 2026-03-16: PUCT Staff files the Project 58484 draft report recommending more CPs and a longer interval (draft); comments due 2026-04-13. [e10][e24]
- 2026-07-09: Proposal for publication in Project 58000 to replace 4CP with 12CP, prepared for consideration at the PUCT open meeting on that date (proposed). [e11][e12]
- 2026-07-22: ERCOT's all-time demand record (91,134 MW); estimated maximum 4CP reduction about 492 MW. [e6]
- 2026-08-11: comment deadline on the Project 58000 proposal. [e38]
- 2026-12-31: SB 6 deadline for the PUCT to amend its wholesale transmission rules. [e8]

## Say it like this

(Guidance) Today, each distribution provider's wholesale transmission charge for the next year is set by its demand in four summer 15-minute peak intervals, so flexible loads curtail at those moments to shrink their share. [e1][e20][e3] SB 6 ordered the PUCT to fix the method by the end of 2026; the July 2026 proposal moves to twelve monthly 30-minute peaks and bills large loads on at least their contracted demand for 20 years, but it is still a proposal. [e8][e12][e36]

## Common confusion

(Guidance) 4CP is a transmission cost allocation rule, not an energy price or a reliability program; 4CP response is cutting load to cut transmission charges, not responding to scarcity, and the IMM says the two can diverge. [e15] The 12CP change is proposed in Project 58000, not adopted; the March 2026 Project 58484 report is a Staff draft. [e11][e10] Note the two different large-load terms: Staff's draft said 10 to 15 years, the proposal for publication says no less than 20 years. [e25][e36]

## Questions

### How is a TSP's transmission rate set under 4CP?

It is the TSP's approved transmission cost of service divided by average ERCOT coincident peak demand over June to September, excluding wholesale storage load. Each DSP pays the monthly rate times its previous-year average 4CP demand. [e1] Each peak is the highest 15-minute Settlement Interval of the month, and ERCOT publishes the determinants by December 1. [e20][e19]

### Why does the IMM want to move away from 4CP?

It says 4CP response can suppress prices and reduce generator revenues when the peak intervals no longer reflect scarcity, and that peak demand only weakly correlates with congestion costs. [e15][e44] It supports annual load ratio share allocation or a hybrid with floating one-hour coincident peaks. [e13]

### What has changed since SB 6?

SB 6 required the PUCT to evaluate 4CP and amend its rules by December 31, 2026. [e7][e8] Staff's March 2026 draft recommended more CPs and longer intervals, and the July 2026 proposal for publication would adopt 12CP with 30-minute intervals plus a large-load minimum billing demand. [e10][e12][e34]

### Why might a longer interval and more peaks reduce 4CP response?

Staff's draft says 15-minute intervals give too sharp a signal in too narrow a window and over-value peak avoidance relative to the transmission cost avoided. [e26] Twelve 30-minute monthly peaks would spread cost responsibility over more, longer intervals. [e14]

### What if a data center reserves 300 MW but only energizes half of it?

Under the proposal (not adopted), its minimum billing demand would be the greatest of its contracted peak demand, its highest non-coincident peak in the past year, or its 12CP demand, and billing would start at the level of available service whether or not it has energized. [e34][e35][e36] Under today's 4CP rule it pays on its actual demand in the four summer intervals. [e1]

### Why do prices and 4CP intervals no longer line up?

Staff's analysis of 2023-2024 data finds system load peaks around HE 18 while net load and real-time prices peak around HE 20. [e31] So load cut at the gross peak may not be load cut when scarcity is highest. [e15]

## Scenarios

### A crypto miner asks what 12CP means for its transmission bill.

- Today it can cut load in four summer intervals to reduce its share. [e3][e17]
- Under the proposal, it would need to avoid twelve monthly 30-minute peaks, and as a 25.194 large load it would be billed at least on its contracted peak demand. [e14][e34]
- The PUCT has asked whether large computational loads should get separate rate treatment, which is still open. [e40]

## Open items

- Whether the PUCT has adopted the Project 58000 rule (and its effective date and transition) is not in the saved sources; comments were due August 11, 2026. No adoption order is saved.
- Staff's final recommendations section in the Project 58484 draft report is blank ("LEFT INTENTIONALLY BLANK IN THIS DRAFT REPORT"); no final report is saved.
- Resolved 2026-11-21: the 15-minute interval is in np-09 §9.17.1(3).
- The IMM gives transmission charges as $8 to $9/MWh (inflation-adjusted, since 2021) in its 2025 report and about $10/MWh for 2024 in its 2024 report; the basis differs and neither gives the current TCOS total.
- The draft report text reads "SB 78" in its 1999 history paragraph next to a footnote 8 that names SB 7 (76th Legislature); treated here as SB 7 with a footnote marker.
