---
id: large-load-growth
name: Large Load Growth (Data Centers, Crypto, Industrial)
aliases: [large load growth, data center load, data centers, crypto mining load, Large Load queue, large load interconnection queue]
kind: concept
domain: fundamentals
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
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
  - to: load-forecasting
    type: affects
    note: Under 16 TAC 25.370 (effective March 1, 2026), a large load is to enter ERCOT's planning forecasts only after it signs a 25.194 interconnection agreement with the required disclosures and financial commitments; the 2026 forecast used alternative gating criteria until new planning cases are built in 2027. [e22][e39]
  - to: reliability-standard
    type: affects
    note: ERCOT asked to delay the 2027 reliability-standard magnitude filing because Batch Zero load values, and so the load forecast, were not final. [e31]
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
  - id: e19
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, resource adequacy discussion (p. viii)"
    quote: "The projected load for 2030 (base and adjusted forecast) is between 138 GW and 148 GW with a high scenario value of up to 209 GW. For context, the 138 GW and 148 GW projections reflect increases of 62% to 74% over current peak load over a five year period."
  - id: e20
    source: imm-som-2025
    locator: "2025 State of the Market Report, Chapter VII, H. Load Forecast"
    quote: "The preliminary forecast projects a peak demand of 367,790 MW in the ERCOT Region by 2032, which would more than quadruple ERCOT’s highest recorded peak demand of 85,508 MW."
  - id: e21
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, resource adequacy discussion (p. ix)"
    quote: "This suggests a resource adequacy constraint should be applied to the load interconnection process so that ERCOT does not approve an amount of new load that is physically infeasible."
  - id: e22
    source: puct-25-370
    locator: "16 TAC 25.370(c), Criteria for inclusion in ERCOT load forecast (effective 3/1/2026)"
    quote: "ERCOT must not include a large load customer’s forecasted demand in a load forecast used for identifying transmission planning needs or performing resource adequacy assessments unless the large load customer executed an interconnection agreement as required under §25.194 of this Title and provided all of the disclosures and financial commitments required for such an agreement under §25.194 of this Title."
  - id: e23
    source: puct-25-370
    locator: "16 TAC 25.370(e)(2)(B), Adjustments to load data"
    quote: "The commission may approve ERCOT’s request to adjust the load data if the adjustment is supported by actual historical realization rates or other objective, credible, independent information."
  - id: e24
    source: eia-tx-large-load
    locator: "EIA Today in Energy (October 3, 2024)"
    quote: "Historically, LFL customers have consumed about 65% of their total approved capacity."
  - id: e25
    source: ercot-senate-2026-07
    locator: "ERCOT Senate presentation (July 29, 2026), slide 10, Preliminary Overview of Batch Zero Eligibility (data as of July 28, 2026)"
    quote: "Approximately 205 GW of Large Load is eligible for inclusion in Batch Zero based on existing studies"
  - id: e26
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (September 14-15, 2026), Key Takeaways"
    quote: "ERCOT has provided conditional classification for all Batch Zero Large Loads: • 204 projects (66.4 GW) met the qualifications to be conditionally included as base load; • 158 projects (127.9 GW) met the qualifications to be conditionally included as studied load."
  - id: e27
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (September 14-15, 2026), slide 6, Overview of Conditional Batch Zero Eligibility"
    quote: "This chart omits excluded load (302.2 GW, 373 projects)"
  - id: e28
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (September 14-15, 2026), slide 3, Governor Abbott's August 3 directive"
    quote: "Paused approvals to energize data centers or virtual currency mining facilities (crypto facilities) that are 75 MW or greater."
  - id: e29
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (September 14-15, 2026), slide 3"
    quote: "Governor Abbott directed the Commission and ERCOT to complete “a comprehensive verification and audit” of all data centers advancing through the interconnection process before allowing those loads to proceed."
  - id: e30
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT update to PUCT, Project 59142 item 78 (filed 2026-11-04), Attachment B, Data Center State and Community Impact RFI, Executive Summary (preliminary as of 11/5)"
    quote: "433 of 465 loads (93%) submitted the RFI, covering -177 GW (-97%) of requested interconnection capacity."
  - id: e31
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT motion for good cause exception, Project 58777 item 42 (filed 2026-11-06), Section II"
    quote: "Due to the ongoing work to finalize the Batch Zero load values, ERCOT does not yet have a final load forecast, including an official peak load forecast for winter 2026-2027."
  - id: e32
    source: ercot-interconnection-update-2026-09
    locator: "Interconnection and Grid Analysis Update to the Board (Sept. 14-15, 2026), slide 5, Oscillations and Modeling"
    quote: "TAC endorsed PGRR 144 in August and is up for Board consideration in September."
  - id: e33
    source: ercot-interconnection-update-2026-09
    locator: "Interconnection and Grid Analysis Update to the Board (Sept. 14-15, 2026), slide 5, Oscillations"
    quote: "ERCOT plans to submit NOGRR in September or October."
  - id: e34
    source: ercot-interconnection-update-2026-09
    locator: "Interconnection and Grid Analysis Update to the Board (Sept. 14-15, 2026), Key Takeaways"
    quote: "Solar and Battery still represent the majority of interconnection requests, however, Gas generation interconnection requests are up 23% (now 80 GW) since the June Board update."
  - id: e35
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT update to PUCT, Project 59142 item 78, Attachment B, Executive Summary (preliminary as of 11/5)"
    quote: "Large Loads represent -94% of requested interconnection capacity (-166 GW)."
  - id: e36
    source: ercot-large-load-update-2026-04
    locator: "ERCOT Large Load Update to Senate Business & Commerce (April 1, 2026), slide 9, Related PUCT Activities"
    quote: "After 2026, only Large Loads that have executed an interconnection agreement that satisfies the requirements in PUC Project 58481 will be included in the Large Load forecast."
  - id: e37
    source: puct-25-370
    locator: "16 TAC 25.370, Effective date subsection (final page)"
    quote: "ERCOT must use load data submitted for the 2026 RTP in its transmission planning studies or resource adequacy assessments, including Regional Planning Group project submissions until ERCOT constructs new planning cases with the load data submitted by DSPs using the criteria in subsection (c) of this section."
  - id: e38
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (September 14-15, 2026), slide 4"
    quote: "ERCOT provided provisional Batch Zero Large Load project classification (base, studied, excluded) to the Interconnecting TSPs on September 3, 2026."
  - id: e39
    source: ercot-large-load-update-2026-04
    locator: "ERCOT Large Load Update to Senate Business & Commerce (April 1, 2026), slide 9, Related PUCT Activities"
    quote: "Establishes alternative gating criteria for Large Loads to be included in the 2026 Large Load Forecast, which is used in planning assessments until new cases are constructed in 2027 using new rule criteria."
---
## Definition

Large load growth is the wave of new Large Loads connecting to ERCOT. A Large Load is a site with aggregate peak Demand of 75 MW or more. [e1] A Large Computational Load is a Large Load where at least half the Demand is computational load such as data centers and crypto mining, and data centers are about 87% to 90% of the queue. [e2][e6][e8] ERCOT says data centers, crypto operations and large industrial plants are asking to connect at a rate never seen before. [e3]

## How it works

Requested MW are not the same as consumed MW. For data centers that came online in 2022 through 2024, average peak consumption per site was 49.8% of the MW they had requested. [e9] EIA (October 2024) said large flexible loads had historically consumed about 65% of their approved capacity. [e24] Crypto mining load was about 4,600 MW of demand in 2025. [e12] On the record peak day, 22 July 2026, the maximum reduction from cryptomining loads was about 3,299 MW and ERCOT estimated the maximum 4CP reduction at about 492 MW. [e11]

Forecasting now has a gate, phased in. Under 16 TAC 25.370 (effective March 1, 2026), ERCOT may not put a large load's forecast demand into planning or resource adequacy forecasts unless the customer has signed a 25.194 interconnection agreement with the required disclosures and financial commitments. [e22] The rule's effective-date clause keeps ERCOT on the load data submitted for the 2026 RTP until it builds new planning cases using those criteria. [e37] ERCOT told the Senate in April 2026 that the 2026 Large Load Forecast uses alternative gating criteria until new cases are constructed in 2027, and that after 2026 only Large Loads with such interconnection agreements will be included in the Large Load forecast. [e39][e36] Any other ERCOT haircut to DSP-submitted data needs PUCT approval, supported by historical realization rates or other objective, credible, independent information. [e23]

The growth also brings operating risks that ERCOT is addressing one rule at a time. Ride-through requirements for Large Computational Loads (NOGRR 282/NPRR 1308) were approved by the PUCT in July and took effect August 1, per ERCOT's September 2026 update. [e17] A further limit of 10 MW per 5 seconds on Large Load power swings is only a draft NOGRR, which ERCOT planned to submit in September or October 2026, so it is proposed and not in effect. [e13][e33] PGRR 144 (model quality requirements for Large Loads) was endorsed by TAC in August 2026 and was up for Board consideration in September. [e32]

## ERCOT context

The queue figure changes with every update, so always quote it with its date. It was about 239 GW in December 2025 [e4], and the same 239,000 MW, across about 400 requests, in February 2026. [e5] It was about 410 GW as of March 26, 2026 [e6], more than 438,000 MW as of mid-2026 per a June 18 explainer [e7], and about 474 GW as of June 2026 per ERCOT's July 29 Senate deck. [e8] Data centers made up about 87% to 90% of the queue. [e6][e8]

Batch Zero is shrinking the number that counts. ERCOT's preliminary screen (data as of July 28, 2026) found about 205 GW eligible for Batch Zero based on existing studies. [e25] Its conditional classification, sent to TSPs on September 3, 2026, put 204 projects (66.4 GW) in base load and 158 projects (127.9 GW) in studied load, and excluded 302.2 GW across 373 projects. [e38][e26][e27] After Governor Abbott's August 3, 2026 directive for a comprehensive verification and audit of data centers, ERCOT paused approvals to energize data centers and crypto facilities of 75 MW or more. [e29][e28] In its data center RFI (preliminary, November 5, 2026), 433 of 465 loads responded, covering about 177 GW, of which Large Loads were about 166 GW. [e30][e35] As of November 6, 2026, ERCOT said it had no final load forecast because Batch Zero load values were not final. [e31]

Forecasts are far below the queue but still large. The IMM cites projected 2030 load of 138 GW to 148 GW (base and adjusted), with a high scenario up to 209 GW. [e19] It also reports a preliminary forecast of 367,790 MW peak by 2032, more than four times the 85,508 MW record it cites. [e20] The IMM's view (a recommendation, not a rule) is that a resource adequacy constraint should be applied to load interconnection so ERCOT does not approve physically infeasible load. [e21]

Actual operations in 2025-2026 looked much calmer than the queue. The IMM found that ERCOT could serve several GW of extra large load with shortage frequency similar to before 2022. [e10] ERCOT said solar growth outpaced large load additions in summer 2026. [e15] Looking ahead, ERCOT warned in September 2026 that the generation in the queue would not cover the Batch Zero study load in some conditions, for example with no solar. [e18] Gas interconnection requests rose 23% to 80 GW between the June and September 2026 Board updates. [e34] Locally, ERCOT has flagged a Far West Texas load shed risk on low-wind nights. [e16]

## Key facts

- December 2025: about 239 GW seeking interconnection, with more than three times as many Large Load requests as in 2024. [e4]
- March 26, 2026: about 410 GW, about 87% data centers. [e6]
- June 2026: about 474 GW, about 90% data centers. [e8]
- September 3, 2026 conditional Batch Zero classification: 66.4 GW base (204 projects), 127.9 GW studied (158 projects), 302.2 GW excluded (373 projects). [e38][e26][e27]
- 2022-2024 data centers: peak use averaged 49.8% of requested MW. [e9]
- 22 July 2026 peak: up to about 3,299 MW of crypto reduction and an estimated maximum 4CP reduction of about 492 MW. [e11]
- Forecast gate: signed 25.194 interconnection agreement required (rule effective March 1, 2026; the 2026 forecast used alternative gating criteria until new cases in 2027). [e22][e39]

## Timeline

- October 3, 2024: EIA expects ERCOT large flexible load demand of 54 billion kWh in 2025, up almost 60% from its expected 2024 demand. [e14]
- 2025: crypto mining demand is about 4,600 MW (IMM). [e12]
- December 2025: the queue is about 239 GW. [e4]
- February 2026: about 400 requests totalling 239,000 MW. [e5]
- February 23, 2026: ERCOT flags a Far West Texas local load shed risk. [e16]
- March 1, 2026: 25.370 forecasting rule takes effect; its interconnection-agreement criteria apply once new planning cases are built (2027 per ERCOT). [e22][e37][e39]
- March 26, 2026: the queue is about 410 GW. [e6]
- Mid-2026 (June 18 explainer): more than 438,000 MW. [e7]
- June 2026 (July 29 Senate deck): about 474 GW. [e8]
- July 28, 2026: about 205 GW preliminarily eligible for Batch Zero. [e25]
- August 1, 2026: Large Computational Load ride-through rules take effect. [e17]
- August 3, 2026: Governor's directive; ERCOT pauses energization approvals for data centers and crypto of 75 MW or more. [e29][e28]
- September 2026: conditional Batch Zero classification (66.4 GW base, 127.9 GW studied); ERCOT drafts a 10 MW per 5 seconds variation limit (proposed). [e26][e13] It also says queued generation is insufficient for Batch Zero load under some conditions. [e18]
- November 5-6, 2026: preliminary RFI results (about 177 GW responding); ERCOT says it has no final load forecast pending Batch Zero. [e30][e31]

## Say it like this

(Guidance) ERCOT's large load queue is several times its record peak, and it is mostly data centers. [e5][e8] History says only part of the requested MW actually shows up and runs, and the March 2026 rule will let only loads with signed interconnection agreements count in planning forecasts once new planning cases are built. [e9][e22][e39] Batch Zero has already cut the study set to about 194 GW of base and studied load (66.4 GW plus 127.9 GW, this knowledge base's own sum of ERCOT's conditional figures), and the real questions are how much of that gets built and whether generation and transmission can keep up. [e26][e18]

## Common confusion

(Guidance) Queue GW is not forecast GW, and neither is metered load. Queue totals depend on the date: about 239 GW in December 2025 and about 474 GW in June 2026. [e4][e8] Even the June 2026 sources differ, at more than 438 GW versus about 474 GW, possibly because of different cut-off dates (the sources do not say). [e7][e8] Realized load has historically been a fraction of requested MW. [e9][e24] The Batch Zero numbers (base, studied, excluded) are a fourth measure again, and they were conditional pending the audit. [e26]

## Questions

### How big is ERCOT's large load queue?

It depends on the date. It was about 239 GW in December 2025 and February 2026 [e4][e5], about 410 GW as of March 26, 2026 [e6], and about 474 GW as of June 2026. [e8] About 87% to 90% is data centers. [e6][e8]

### Does the queue mean ERCOT is short of supply today?

Not on the IMM's 2025 evidence. It found ERCOT could serve several GW more large load with shortage frequency like the years before 2022. [e10] ERCOT said solar growth outpaced large load additions in summer 2026. [e15]

### How did large loads behave at the 2026 peak?

On 22 July 2026 the maximum reduction from cryptomining loads was about 3,299 MW and ERCOT estimated the maximum 4CP reduction at about 492 MW. [e11]

### Why doesn't ERCOT just forecast the whole queue?

The rule forbids it: under 25.370 a large load enters planning and resource adequacy forecasts only with a signed 25.194 interconnection agreement and the required financial commitments, although the 2026 forecast used alternative gating criteria until new cases are built in 2027. [e22][e39] History also argues against it, with data centers using about half their requested MW at peak. [e9]

### What if Batch Zero's studied load all shows up by 2032?

ERCOT said in September 2026 that queued generation would not cover the Batch Zero study load in some conditions, such as no solar. [e18] The IMM argues new load should be deferred when it exceeds what the system can physically serve. [e21]

### Why did ERCOT stop energizing new data centers in August 2026?

The Governor's August 3 directive required a comprehensive verification and audit before data centers proceed, so ERCOT paused energization approvals for data centers and crypto facilities of 75 MW or more. [e29][e28]

## Open items

- Two June 2026 queue figures differ (more than 438,000 MW versus about 474 GW). The sources do not reconcile them, though the cut-off dates probably differ.
- The same 239 GW / 239,000 MW total appears with two dates: the December 2025 Constraints and Needs report [e4] and "In February 2026" in the 2025 Annual Report [e5], while the April 1, 2026 Senate update shows about 410 GW as of March 26, 2026 [e6]. The sources do not explain whether the queue was flat from December to February or the Annual Report reused an earlier figure.
- The September 2026 Batch Zero update gives studied load as 127.9 GW in its key takeaways but 125.4 GW on its chart; the difference is not explained.
- No saved source gives actual energized large-load MW (as opposed to requested MW) for 2026.
- Breakdown of the queue by TSP and by in-service year: charts in ercot-large-load-update-2026-04 are still not readable as text.
- Results of the Batch Zero verification audit and the Community Impact report (both due December 10, 2026), and the final 2027 forecast, are not yet saved.
- The oscillation NOGRR filing and the Board outcome for PGRR144 (September 2026) are not in the saved sources.
