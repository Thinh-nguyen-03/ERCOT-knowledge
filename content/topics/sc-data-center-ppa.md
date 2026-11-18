---
id: sc-data-center-ppa
name: "Scenario: Data Center Wants a Solar VPPA"
aliases: [data center scenario, data center wants to connect, data center PPA case, large load customer case interview]
kind: scenario
domain: cases
level: 2
lenses: [structuring, analyst, retail, portfolio]
as_of: 2026-11-18
links:
  - to: large-load-interconnection
    type: used-in
    note: A Large Load is a site with aggregate peak Demand of 75 MW or more, and a studied load may receive its full request, a partial allocation, or wait for a later batch. [e1][e9]
  - to: sb6
    type: regulates
    note: SB 6 requires the PUCT to set a 75 MW threshold and a study fee of at least $100,000, and lets the independent organization direct large loads to deploy backup generation or curtail. [e3][e4][e6]
  - to: long-term-load-forecast
    type: affects
    note: The preliminary 2026 LTLF peak load is 278,003 MW in 2029, and ERCOT said it had concerns with using these values. [e12]
  - to: large-load-growth
    type: example-of
    note: Nearly 90% of the more than 438,000 MW of large-load requests in mid-2026 were data centers. [e11]
  - to: four-cp
    type: affects
    note: Transmission costs are allocated on 4CP load-ratio share, and a PUCT proposal would replace 4CP with 12CP. [e19][e21]
  - to: ppa-vppa
    type: related
    note: The IMM lists bilateral PPAs among the ways LSEs manage price exposure; the saved sources do not describe VPPA terms. [e17]
  - to: rep
    type: related
    note: A person must obtain a REP certificate before reselling electricity to provide retail electric service. [e18]
  - to: load-zone
    type: settles
    note: Loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e16]
  - to: large-flexible-load
    type: contrasts-with
    note: A Large Computational Load is a Large Load where at least half of demand is computational, such as data centers and crypto mining. [e2]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Large Load"
    quote: "One or more Facilities at a single site with an aggregate peak Demand greater than or equal to 75 MW behind one or more common Points of Interconnection (POIs) or Service Delivery Points."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Large Computational Load (LCL)"
    quote: "A Large Load in which 50% or greater of the Demand at the site consists of power electronic based load, specifically computational load, such as data centers and cryptocurrency mining facilities."
  - id: e3
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(c)"
    quote: "The commission shall establish a demand threshold of 75 megawatts unless the commission determines that a lower threshold is necessary to accomplish the purposes described by Subsection (b)."
  - id: e4
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(f)"
    quote: "The standards must set a flat study fee of at least $100,000 to be paid to the interconnecting electric utility or municipally owned utility for initial transmission screening studies for large loads subject to Subsection (c)."
  - id: e5
    source: puct-25-194
    locator: "16 TAC §25.194, intermediate financial security on a dollar per MW basis"
    quote: "A large load customer must post financial security with the interconnecting DSP or the interconnecting TSP in the amount of $50,000 per MW of the requested peak demand for new interconnection requests or $50,000 per MW of the incremental increase in the peak demand for expanded interconnection requests."
  - id: e6
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(e)"
    quote: "After the independent organization deploys all available market services, except for frequency responsive services, the independent organization may direct the applicable electric utility or municipally owned utility to require the large load customer to either deploy the customer's on-site backup generating facilities or curtail load."
  - id: e7
    source: sb6-89r
    locator: "SB 6 Section 4, PURA §39.170(a)"
    quote: "The commission shall require the independent organization certified under Section 39.151 for the ERCOT power region to ensure that each electric cooperative, transmission and distribution utility, and municipally owned utility serving a transmission-voltage customer develops a protocol, including the installation of any necessary equipment or technology before the customer is interconnected, to allow the load to be curtailed during firm load shed."
  - id: e8
    source: sb6-89r
    locator: "SB 6 Section 4, PURA §39.169(a)"
    quote: "A power generation company, municipally owned utility, or electric cooperative must submit a notice to the independent organization certified under Section 39.151 for the ERCOT power region before implementing a net metering arrangement between an operating facility registered with the independent organization as a stand-alone generation resource as of September 1, 2025, and a new large load customer as described by Section 37.0561(c)."
  - id: e9
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Studied Load"
    quote: "A studied load may receive its full requested capacity, a partial allocation, or may need to wait until a subsequent batch, if the grid cannot accommodate it at the time."
  - id: e10
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), commitment deadline"
    quote: "ERCOT understands that not all connection requests result in built projects. Therefore, developers will be presented with a commitment deadline currently planned for June 2027 for projects in Batch Zero to post financial security for their development and prove they have appropriate site control needed to build."
  - id: e11
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Background"
    quote: "As of mid-2026, large users totaling more than 438,000 MW of proposed demand had entered ERCOT’s connection queue. Nearly 90% of those requests were from data centers."
  - id: e12
    source: ercot-ltlf-2026-adjust-proposal
    locator: "Proposal to Adjust the Load Forecast (Project 59772), page 1"
    quote: "The LTLF forecasts peak load is 278,003 megawatts (MW) in 2029 and 367,790 MW in 2032. In its April 15th filing, ERCOT indicated that it had concerns with using these values in the Reliability Assessment and any other transmission and resource adequacy analysis."
  - id: e13
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e14
    source: eia-tx-large-load
    locator: "Today in Energy, Data centers and cryptocurrency mining in Texas drive strong power demand growth"
    quote: "Historically, LFL customers have consumed about 65% of their total approved capacity."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary, Direction for Future Market Design"
    quote: "This suggests a resource adequacy constraint should be applied to the load interconnection process so that ERCOT does not approve an amount of new load that is physically infeasible."
  - id: e16
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e17
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e18
    source: puct-25-107
    locator: "Section 25.107(b)(1)(A)"
    quote: "A person must obtain a REP certificate under this section before purchasing, taking title to, or reselling electricity to provide retail electric service."
  - id: e19
    source: imm-som-2025
    locator: "Recommendation 2015-1, Transition Away from the 4CP Method, page 154 (OCR)"
    quote: "ERCOT allocates the costs of the transmission system to consumers using the 4CP method. Under this methodology, each consumer’s transmission tariff for the following year is based on its load-ratio share during the 15-minute intervals with the highest monthly system-wide demand from June through September"
  - id: e20
    source: ercot-summer-2026-review
    locator: "Slide 4, Key Takeaway on 2026 peak load"
    quote: "The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW."
  - id: e21
    source: puct-58000-pfp
    locator: "Project 58000, Proposal for Publication (for the July 9, 2026 open meeting), page 1"
    quote: "The proposal will restyle amended §25.192 to Transmission Service Rates, replace the four coincident peak (4CP) methodology with a 12 coincident peak (12CP) methodology for assigning transmission costs, codify using a 30-minute interval to measure 12CP"
  - id: e22
    source: ercot-fern-board-sysops
    locator: "Board item 9.3, Key Takeaways (February 2026)"
    quote: "Between January of 2025 and January of 2026 Data Centers’ growth in actual demand was 15.5%."
  - id: e23
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The most impactful resource adequacy development since the May 2025 CDR release are provisions in Texas Senate Bill 6 (SB6), signed into law in June 2025, that establish new interconnection requirements for Large Loads and ERCOT authority to curtail Large Load consumption before and during declared grid emergencies."
---

## Definition

This scenario is about a data center that wants to connect to ERCOT and buy power for its load. In the Protocols a Large Load is one or more facilities at a single site with aggregate peak demand of 75 MW or more, and a Large Computational Load is a Large Load where at least half the demand is computational, such as data centers. [e1][e2]

## How it works

Step 1, the connection rules. SB 6 told the PUCT to set a 75 MW threshold for large load interconnection standards and a flat study fee of at least $100,000. [e3][e4] The PUCT rule requires financial security of $50,000 per MW of requested peak demand for new requests. [e5] ERCOT now studies large loads together in batches: a studied load in Batch Zero may get its full request, a partial allocation, or have to wait, and projects face a commitment deadline, currently planned for June 2027, to post financial security and prove site control. [e9][e10]

Step 2, the operating conditions. Under SB 6, after ERCOT deploys all available market services except frequency responsive ones, the independent organization may direct the utility to require the large load customer to deploy its on-site backup generation or curtail load. [e6] New transmission-voltage loads must also have equipment installed so they can be curtailed during firm load shed. [e7] If the data center plans a net metering arrangement with an existing stand-alone generation resource, the generation company, municipally owned utility or cooperative must notify ERCOT before implementing it. [e8] ERCOT's December 2025 CDR called these SB 6 provisions the most impactful resource adequacy development since May 2025. [e23]

Step 3, the forecast context. More than 438,000 MW of large-user requests were in ERCOT's queue by mid-2026, nearly 90% of them data centers. [e11] The preliminary 2026 long-term forecast reached 278,003 MW in 2029, which ERCOT itself had concerns about using, and the PUCT approved ERCOT's request to adjust the LTLF using the Option B methodology. [e12][e13] History suggests discounting requests: EIA reports that large flexible load (LFL) customers have consumed about 65% of their approved capacity. [e14]

Step 4, buying the power. A person must hold a REP certificate to resell electricity for retail service, and load is billed at the load zone price, a load-weighted average of nodal prices. [e18][e16] LSEs manage price exposure with owned generation, bilateral PPAs, futures or day-ahead purchases. [e17] Transmission costs are a separate line: ERCOT allocates them on each customer's load-ratio share in the four summer peak intervals (4CP), and a PUCT proposal would replace 4CP with 12CP. [e19][e21]

## Key facts

- Large Load threshold: 75 MW at a single site. [e1][e3]
- SB 6 minimum screening study fee: $100,000. [e4]
- PUCT financial security: $50,000 per MW of requested peak demand for new requests. [e5]
- Large-user requests: more than 438,000 MW by mid-2026, nearly 90% data centers. [e11]
- Data center actual demand grew 15.5% between January 2025 and January 2026. [e22]
- Summer 2026 peak: estimated maximum 4CP reduction about 492 MW; crypto reduction about 3,299 MW. [e20]

## Say it like this

(Guidance) "Getting connected is now a batch process with real money up front, and the data center should expect curtailment obligations in emergencies and possibly only a partial allocation of what it asked for. On the supply side it buys through a REP at its load zone price, so any PPA has to be judged against that zone price and its own load shape, and transmission charges are a separate line that may move away from 4CP."

## Common confusion

(Guidance) A large load request is not a forecast of load. ERCOT said it had concerns about using its preliminary LTLF values, and EIA notes that large flexible load customers historically used about 65% of approved capacity. [e12][e14] Another confusion is assuming a renewable PPA removes price risk: the load is still billed at the load zone price. [e16]

## Questions

### What does SB 6 require of a new data center in an emergency?

After the independent organization deploys all available market services except frequency responsive ones, it may direct the utility to require the large load customer to deploy on-site backup generation or curtail load, and new transmission-voltage loads must be equipped to be curtailed during firm load shed. [e6][e7]

### Why might the data center not get the full capacity it asks for?

In Batch Zero a studied load may receive its full request, a partial allocation, or wait for a later batch if the grid cannot accommodate it at the time. [e9] The IMM also argues for a resource adequacy constraint on load interconnection so ERCOT does not approve physically infeasible load. [e15]

### Why does 4CP matter to a data center?

Transmission charges are based on the customer's load-ratio share in the four summer peak intervals, so cutting load in those intervals cuts the bill; ERCOT estimated about 492 MW of 4CP reduction at the summer 2026 peak. [e19][e20] The PUCT has proposed moving to 12CP, so the value of that strategy may change. [e21]

## Scenarios

### A developer wants a 500 MW data center in ERCOT, with power bought under a solar VPPA. What do you check and what do you tell them?

- (Reasoning) Split the answer into connection, operations, forecast credibility and power cost.
- Connection: the site is a Large Load (75 MW or more), pays at least a $100,000 study fee and must post $50,000 per MW of security. [e1][e4][e5]
- Suppose (illustrative) the full 500 MW is requested: security at $50,000 per MW is 500 x 50,000 = $25 million.
- Allocation risk: Batch Zero may give full, partial or no allocation this round, and projects must post security and show site control by a commitment deadline currently planned for June 2027. [e9][e10]
- Operations: under SB 6 the independent organization may direct the utility to require the site to run backup generation or curtail, and new transmission-voltage loads must be curtailable in firm load shed. [e6][e7]
- Co-location: a net metering arrangement with an existing stand-alone generation resource requires a notice to ERCOT before it is implemented. [e8]
- Power cost: the load buys through a REP and is billed at the load zone price. [e18][e16]
- (Reasoning) Check how the PPA's generation profile and settlement point line up with the data center's load shape at its load zone.
- Transmission: 4CP charges are based on summer peak intervals, and a PUCT proposal would move to 12CP. [e19][e21]
- For the analyst view, treat queue-based numbers with caution: ERCOT said it had concerns with the preliminary LTLF values and the PUCT approved an adjustment (Option B). [e12][e13]

## Open items

- No saved source describes PPA or VPPA contract structures (settlement point, shape, basis, credit terms); the VPPA part of the answer is reasoning only.
- The PCLR and WLPUN connection pathways are in the Batch Zero sources but their effect on a data center's allocation is not covered here.
- Whether the PUCT has adopted the 12CP proposal in Project 58000 was not found in the saved sources; only the proposal for publication is saved.
- The Large Load Demand Management Service rule (Project 58482) was a proposal, not adopted, in the saved sources.
- Deeper pass: retail tariff terms for large loads under proposed §25.252 and minimum billing demand under §25.193.
