---
id: large-load-growth
name: Large Load Growth (Data Centers, Crypto, Industrial)
aliases: [large load growth, data center load, data centers, crypto mining load, Large Load queue, large load interconnection queue]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: large-load-interconnection
    type: related
    note: The interconnection rules covered in that topic apply to Large Loads, which the Protocols define as sites with aggregate peak Demand of 75 MW or more. [e1]
  - to: long-term-load-forecast
    type: affects
    note: The long-term forecast has to decide how much of the requested large load to count, given realization like the 49.8% observed for data centers. [e9]
  - to: large-flexible-load
    type: composed-of
    note: Crypto mining was about 4,600 MW of demand in 2025, and those loads responded at the 2026 peak. [e12][e11]
  - to: sb6
    type: related
    note: See the sb6 topic for the statute on large load interconnection and curtailment.
  - to: resource-adequacy
    type: affects
    note: The IMM finds the system can serve several GW of additional large-load demand while keeping operating reserves and shortage frequency comparable to before 2022. [e10]
  - to: permian-transmission
    type: related
    note: ERCOT has flagged a Far West Texas local load shed risk during low wind conditions at night. [e16]
  - to: four-cp
    type: related
    note: ERCOT estimated the maximum 4CP reduction at about 492 MW on the 22 July 2026 record day. [e11]
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
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Background"
    quote: "Data centers, cryptocurrency operations, and large industrial plants are requesting to connect to the ERCOT grid at a rate never seen before."
  - id: e4
    source: ercot-constraints-needs-2025
    locator: "2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025), Key Takeaways"
    quote: "ERCOT is tracking more than three times as many Large Load interconnection requests compared to 2024. The total load seeking interconnection is approximately 239 GW."
  - id: e5
    source: ercot-annual-report-2025
    locator: "2025 ERCOT Annual Report (March 2026), Large Load Interconnection Process"
    quote: "In February 2026, ERCOT’s Large Load Interconnection queue contained approximately 400 individual requests, totaling 239,000 MW, equivalent to 2.8 times the ERCOT record system peak."
  - id: e6
    source: ercot-large-load-update-2026-04
    locator: "ERCOT Large Load Update to Senate Business & Commerce (April 1, 2026), slide 3 (as of March 26, 2026)"
    quote: "ERCOT is tracking approximately 410 GW of Large Loads seeking interconnection of which ~87% are data centers."
  - id: e7
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Background"
    quote: "As of mid-2026, large users totaling more than 438,000 MW of proposed demand had entered ERCOT’s connection queue. Nearly 90% of those requests were from data centers."
  - id: e8
    source: ercot-senate-2026-07
    locator: "ERCOT Senate presentation (July 29, 2026), slide 6, Large Load Interconnection Requests (as of June 2026)"
    quote: "ERCOT is tracking approximately 474 GW of Large Loads seeking interconnection, of which ~90% are data centers."
  - id: e9
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report (April 8, 2025), ERCOT's Adjustment to Large Load Forecast"
    quote: "The next adjustment was applied to Data Centers. ERCOT studied requested MWs versus the peak consumption by Data Center site for Data Centers with in-service dates in 2022 through 2024. The average peak consumption per site was 49.8% of the requested MW."
  - id: e10
    source: imm-som-2025
    locator: "2025 State of the Market Report, Demand and Supply, Potential Impacts of Load Growth"
    quote: "However, our analysis of operating reserves in ERCOT indicates that the system can serve several GW of additional demand from large loads while maintaining operating reserves and a frequency of shortage conditions comparable to those prevalent before 2022."
  - id: e11
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Sept. 2026), peak demand slide"
    quote: "On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours. The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW."
  - id: e12
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary"
    quote: "Aggregate demand for crypto-currency mining was approximately 4,600 MW in 2025."
  - id: e13
    source: ercot-interconnection-update-2026-09
    locator: "Interconnection and Grid Analysis Update to the Board (Sept. 14-15, 2026), slide 6"
    quote: "Consequently, ERCOT’s draft NOGRR, Large Load MW Variation Requirements, will recommend a limit of 10 MW per 5 seconds for power variation in Large Loads."
  - id: e14
    source: eia-tx-large-load
    locator: "EIA Today in Energy (October 3, 2024)"
    quote: "In our latest Short-Term Energy Outlook (STEO), we expect electricity demand from customers identified by ERCOT as large flexible load (LFL) will total 54 billion kilowatthours (kWh) in 2025, up almost 60% from expected demand in 2024."
  - id: e15
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Sept. 2026), Key Takeaways"
    quote: "Solar growth outpacing large load additions helped make the daytime hours this summer uneventful."
  - id: e16
    source: ercot-permian-geren-response
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 5, quoting Market Notice of Feb. 23, 2026"
    quote: "ERCOT has identified an emerging reliability risk in Far West Texas of local load shed potentially being needed in the area during low wind conditions at night, especially during transmission and thermal resource outages."
  - id: e17
    source: ercot-interconnection-update-2026-09
    locator: "Interconnection and Grid Analysis Update to the Board (Sept. 14-15, 2026), slide 5, Ride-Through status"
    quote: "NOGRR 282/ NPRR 1308: Implement ride-through requirements for Large Computational Loads. The PUCT approved NOGRR 282/ NPRR 1308 in July, effective on August 1."
  - id: e18
    source: ercot-batch-zero-gen-assumptions
    locator: "Batch Zero Generation Assumption Discussion (RPG, Sept. 22, 2026), slide 2"
    quote: "The total available generation in the interconnection queue will not be sufficient to meet the anticipated load in the Batch Zero Interconnection Study under certain system conditions (e.g., no solar)"
---

## Definition

Large load growth is the wave of new Large Loads connecting to ERCOT. A Large Load is a site with aggregate peak Demand of 75 MW or more. [e1] A Large Computational Load is a Large Load where at least half the Demand is computational load such as data centers and crypto mining, and data centers are about 87% to 90% of the queue. [e2][e6][e8] ERCOT says data centers, crypto operations and large industrial plants are asking to connect at a rate never seen before. [e3]

## How it works

Requested MW are not the same as consumed MW. For data centers that came online in 2022 through 2024, average peak consumption per site was 49.8% of the MW they had requested. [e9] Crypto mining load was about 4,600 MW of demand in 2025. [e12] On the record peak day, 22 July 2026, the maximum reduction from cryptomining loads was about 3,299 MW and ERCOT estimated the maximum 4CP reduction at about 492 MW. [e11]

The growth also brings operating risks that ERCOT is addressing one rule at a time. Ride-through requirements for Large Computational Loads (NOGRR 282/NPRR 1308) were approved by the PUCT in July and took effect August 1, per ERCOT's September 2026 update. [e17] A further limit of 10 MW per 5 seconds on Large Load power swings is only a draft NOGRR, so it is proposed and not in effect. [e13]

## ERCOT context

The queue figure changes with every update, so always quote it with its date. It was about 239 GW in December 2025 [e4], and the same 239,000 MW, across about 400 requests, in February 2026. [e5] It was about 410 GW as of March 26, 2026 [e6], more than 438,000 MW as of mid-2026 per a June 18 explainer [e7], and about 474 GW as of June 2026 per ERCOT's July 29 Senate deck. [e8] Data centers made up about 87% to 90% of the queue. [e6][e8]

Actual operations in 2025-2026 looked much calmer than the queue. The IMM found that ERCOT could serve several GW of extra large load with shortage frequency similar to before 2022. [e10] ERCOT said solar growth outpaced large load additions in summer 2026. [e15] Looking ahead, ERCOT warned in September 2026 that the generation in the queue would not cover the Batch Zero study load in some conditions, for example with no solar. [e18] Locally, it has flagged a Far West Texas load shed risk on low-wind nights. [e16]

## Key facts

- December 2025: about 239 GW seeking interconnection, with more than three times as many Large Load requests as in 2024. [e4]
- March 26, 2026: about 410 GW, about 87% data centers. [e6]
- June 2026: about 474 GW, about 90% data centers. [e8]
- 2022-2024 data centers: peak use averaged 49.8% of requested MW. [e9]
- 22 July 2026 peak: up to about 3,299 MW of crypto reduction and an estimated maximum 4CP reduction of about 492 MW. [e11]

## Timeline

- October 3, 2024: EIA expects ERCOT large flexible load demand of 54 billion kWh in 2025, up almost 60% from its expected 2024 demand. [e14]
- 2025: crypto mining demand is about 4,600 MW (IMM). [e12]
- December 2025: the queue is about 239 GW. [e4]
- February 2026: about 400 requests totalling 239,000 MW. [e5]
- February 23, 2026: ERCOT flags a Far West Texas local load shed risk. [e16]
- March 26, 2026: the queue is about 410 GW. [e6]
- Mid-2026 (June 18 explainer): more than 438,000 MW. [e7]
- June 2026 (July 29 Senate deck): about 474 GW. [e8]
- August 1, 2026: Large Computational Load ride-through rules take effect. [e17]
- September 2026: ERCOT drafts a 10 MW per 5 seconds variation limit (proposed). [e13] It also says queued generation is insufficient for Batch Zero load under some conditions. [e18]

## Say it like this

(Guidance) ERCOT's large load queue is several times its record peak, and it is mostly data centers. History says only part of the requested MW actually shows up and runs. The near-term grid has handled it so far. The real questions are how much of the queue gets built, and whether generation and transmission can keep up.

## Common confusion

(Guidance) Queue GW is not forecast GW, and neither is metered load. Queue totals depend on the date: about 239 GW in December 2025 and about 474 GW in June 2026. [e4][e8] Even the June 2026 sources differ, at more than 438 GW versus about 474 GW, possibly because of different cut-off dates (the sources do not say). [e7][e8] Realized load has historically been a fraction of requested MW. [e9]

## Questions

### How big is ERCOT's large load queue?

It depends on the date. It was about 239 GW in December 2025 and February 2026 [e4][e5], about 410 GW as of March 26, 2026 [e6], and about 474 GW as of June 2026. [e8] About 87% to 90% is data centers. [e6][e8]

### Does the queue mean ERCOT is short of supply today?

Not on the IMM's 2025 evidence. It found ERCOT could serve several GW more large load with shortage frequency like the years before 2022. [e10] ERCOT said solar growth outpaced large load additions in summer 2026. [e15]

### How did large loads behave at the 2026 peak?

On 22 July 2026 the maximum reduction from cryptomining loads was about 3,299 MW and ERCOT estimated the maximum 4CP reduction at about 492 MW. [e11]

## Open items

- Two June 2026 queue figures differ (more than 438,000 MW versus about 474 GW). The sources do not reconcile them, though the cut-off dates probably differ.
- No saved source gives actual energized large-load MW (as opposed to requested MW) for 2026.
- Deeper pass: breakdown of the queue by TSP, by in-service year and by load type (charts in ercot-large-load-update-2026-04 are not readable as text); the oscillation NOGRR once it is filed; PGRR144 model quality requirements (TAC endorsed August 2026).
