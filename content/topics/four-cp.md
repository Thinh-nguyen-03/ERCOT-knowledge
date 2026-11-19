---
id: four-cp
name: 4CP Transmission Charges
aliases: [4CP, four coincident peak, 4CP response, 12CP, coincident peak, TCOS, TCRF, transmission cost recovery, Project 58000, Project 58484]
kind: rule
domain: congestion
level: 2
lenses: [analyst, retail, portfolio, structuring]
as_of: 2026-11-18
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
---

## Definition

4CP is the method ERCOT-region transmission costs are allocated today: a TSP's rate is its approved transmission cost of service divided by the average ERCOT coincident peak demand in June, July, August and September, and each distribution service provider pays that rate times its own previous-year average demand in those four intervals. [e1] Wholesale transmission in ERCOT is priced on a postage stamp basis under PURA. [e2]

## How it works

Each summer month has one coincident peak interval; the IMM describes these as the highest 15-minute system load intervals in each month from June through September. Under the rule, each distribution service provider's average demand in those four intervals in the previous year sets its monthly transmission charge. [e3][e1] Distribution providers pass changes in the wholesale transmission costs billed by TSPs through to their customers with a Transmission Cost Recovery Factor (TCRF), updated on March 1 and September 1. [e4]

By reducing demand during these intervals, entities can lower their share of transmission charges ("4CP response"). [e3] The IMM puts transmission charges at $8 to $9 per MWh in inflation-adjusted terms since 2021, and ERCOT estimated load fell about 1,500 MW in the August 2025 4CP interval. [e3][e5] On 7/22/2026, the all-time demand record day, ERCOT estimated a maximum 4CP reduction of about 492 MW, and a separately reported maximum reduction from cryptomining loads of about 3,299 MW. [e6]

## ERCOT context

4CP is under active revision. SB 6 (June 2025) ordered the PUCT to evaluate whether 4CP still assigns transmission costs appropriately and to amend its rules by December 31, 2026. [e9][e7][e8] A March 2026 Staff draft report recommended a coincident peak method with more CPs and a longer measurement interval. [e10] A proposal for publication was set for consideration at the PUCT's July 9, 2026 open meeting that would replace 4CP with 12CP measured in 30-minute intervals; it is a proposal, not an adopted rule. [e11][e12]

The IMM argues 4CP response suppresses prices and weakens scarcity pricing when the peak intervals no longer match system scarcity. [e15] It recommends annual load ratio share allocation, or a hybrid with floating coincident peaks of one hour. [e13]

## Key facts

- Current rule: TSP rate = transmission cost of service / average ERCOT 4CP demand (June to September), excluding wholesale storage load. [e1]
- 4CP response: about 1,500 MW in the August 2025 interval; about 492 MW estimated on July 22, 2026. [e5][e6]
- Statutory deadline: PUCT must amend its rules by December 31, 2026. [e8]
- Proposed (not adopted): 12CP, using the monthly peak 30-minute interval in each month from October 1 to September 30. [e12][e14]
- Retail pass-through: TCRF updates on March 1 and September 1. [e4]

## Timeline

- 2025-06: The 89th Legislature passes SB 6, whose Section 6 orders the 4CP review. [e9][e7]
- 2026-03-16: PUCT Staff files the Project 58484 draft report recommending more CPs and a longer interval (draft). [e10]
- 2026-07-09: Proposal for publication in Project 58000 to replace 4CP with 12CP, prepared for consideration at the PUCT open meeting on that date (proposed). [e11][e12]
- 2026-07-22: ERCOT's all-time demand record (91,134 MW); estimated maximum 4CP reduction about 492 MW. [e6]
- 2026-12-31: SB 6 deadline for the PUCT to amend its wholesale transmission rules. [e8]

## Say it like this

(Guidance) Today, each distribution provider's wholesale transmission charge for the next year is set by its demand in four summer peak intervals, and the IMM says entities that cut demand in those intervals lower their share, so flexible loads curtail at those moments. [e3][e17] SB 6 ordered the PUCT to evaluate 4CP and amend its transmission cost rules by the end of 2026, and the current proposal moves to twelve monthly 30-minute peaks. [e1][e8][e12]

## Common confusion

(Guidance) 4CP is a transmission cost allocation rule, not an energy price or a reliability program; 4CP response is cutting load to cut transmission charges, not responding to scarcity, and the IMM says the two can diverge. [e15] The 12CP change is proposed in Project 58000, not adopted; the March 2026 Project 58484 report is a Staff draft. [e11][e10]

## Questions

### How is a TSP's transmission rate set under 4CP?

It is the TSP's approved transmission cost of service divided by average ERCOT coincident peak demand over June to September, excluding wholesale storage load. Each DSP pays the monthly rate times its previous-year average 4CP demand. [e1]

### Why does the IMM want to move away from 4CP?

It says 4CP response can suppress prices and reduce generator revenues when the peak intervals no longer reflect scarcity. [e15] It supports annual load ratio share allocation or a hybrid with floating one-hour coincident peaks. [e13]

### What has changed since SB 6?

SB 6 required the PUCT to evaluate 4CP and amend its rules by December 31, 2026. [e7][e8] Staff's March 2026 draft recommended more CPs and longer intervals, and the July 2026 proposal for publication would adopt 12CP with 30-minute intervals. [e10][e12]

## Open items

- Whether the PUCT has adopted the Project 58000 rule (and its effective date and transition) is not in the saved sources; comments were due August 11, 2026.
- Staff's final recommendations section in the Project 58484 draft report is blank ("LEFT INTENTIONALLY BLANK IN THIS DRAFT REPORT").
- How ERCOT protocols (np-09 or np-13) measure the 4CP intervals was not traced; 25.192 says measurement follows commission-approved protocols.
- The 15-minute interval length for 4CP is stated by the IMM, not quoted from rule text.
- Deeper pass: the Project 58000 large-load minimum billing demand, block load transfer and interconnection-fee offset provisions, and new 25.252.
- Deeper pass: the draft report's history (1996 access fee/impact fee, SB 7 postage stamp) and its analysis of net load versus 4CP intervals.
