---
id: long-term-load-forecast
name: ERCOT Long-Term Load Forecast
aliases: [LTLF, LTDEF, Long-Term Demand and Energy Forecast, ERCOT Adjusted Load Forecast, 2026 LTLF, Project 59772]
kind: report
domain: fundamentals
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: large-load-growth
    type: measures
    note: ERCOT's preliminary 2026 forecast says the vast majority of its 2029 and 2032 load is attributable to Large Loads from TDSP submissions. [e21]
  - to: large-load-interconnection
    type: related
    note: The PUCT approved the Option B methodology, which is adjustment using Batch Zero Base Load rather than historical realization rates. [e11][e23]
  - to: sb6
    type: related
    note: 16 TAC §25.370 governs when large loads enter the forecast; see the sb6 topic for the statute. [e6]
  - to: cdr-report
    type: used-in
    note: The December 2025 CDR uses the ERCOT Adjusted Forecast prepared in March-April 2025. [e17]
  - to: resource-adequacy
    type: affects
    note: The IMM says accurate projections of future load growth are critical to interpreting resource adequacy calculations. [e24]
  - to: large-flexible-load
    type: part-of
    note: The 2025 forecast includes a separate large flexible load component. [e1]
evidence:
  - id: e1
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report (April 8, 2025), Executive Summary"
    quote: "The LTDEF is comprised of six forecast components: Economic Base Load Forecast, Electric Vehicle Forecast (EV), Behind the Meter Rooftop Photovoltaic Forecast (PV), Large-Flexible Load Forecast (LFL), Large Load Contracts, and Large Load Officer Letters."
  - id: e2
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, 4. Long-Term Load Forecast"
    quote: "ERCOT publishes the LTLF annually as its primary tool to project system load growth over a ten-year horizon."
  - id: e3
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report, Waterfall Methodology"
    quote: "Net Forecast = Base Economic Forecast + EV Forecast + LFL Forecast + Adjusted Contracts + Adjusted Officer Letters – PV Forecast"
  - id: e4
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report, ERCOT's Adjustment to Large Load Forecast, Definitions"
    quote: "Assumes 180 Day Delay to ramp schedules of Contracts and Officer Letter Large Load additions with Data Center Large Load additions reduced to 49.8% then Officer Letter Large Load additions reduced to 55.4%."
  - id: e5
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report, Appendix A, Peak Demand and Energy Forecast Summary table"
    quote: "Year Summer Peak Demand (MW) Energy (TWh) ----------------------- ------------------------- ----------------------- 2025 85,759 486 2026 94,650 558 2027 104,295 648 2028 121,543 795 2029 128,851 889 2030 138,944 984 2031 144,522 1,038"
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, 4. Long-Term Load Forecast"
    quote: "Since the adoption of 16 TAC §25.370, large loads are now included in the LTLF and other ERCOT load forecast reports based on milestones these loads have reached in their development process, replacing the previous method of including both loads for which an interconnection agreement had been signed and loads for which an officer of the TDSP attested to the intention of the load energizing according to a provided schedule."
  - id: e7
    source: ercot-ltlf-2026-prelim
    locator: "ERCOT letter filing Preliminary LTLF 2026-2032, Project 58777 (April 15, 2026), page 1"
    quote: "As shown in Table 1 below, the forecast projects approximately 278,003 megawatts (MW) of total demand in the ERCOT Region by 2029 and 367,790 MW by 2032."
  - id: e8
    source: ercot-ltlf-2026-prelim
    locator: "ERCOT letter filing Preliminary LTLF, Project 58777 (April 15, 2026), page 2"
    quote: "Among other information that may warrant consideration, ERCOT currently projects that summer 2026 peak load will fall within a range of approximately 90,500 MW to 98,000 MW, compared with the preliminary LTLF's forecasted peak demand of approximately 112,000 MW for summer 2026, as noted in slide 7 of Attachment A."
  - id: e9
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust LTLF, Project 59772 (May 18, 2026), II.A Historical Realization Rate option"
    quote: "Use of this adjustment option would result in a 32% reduction to all computational Large Loads in the LTLF, which would result in overall adjustments to the LTLF shown below in Table 1:"
  - id: e10
    source: ercot-ltlf-2026-adjust-proposal
    locator: "ERCOT Proposal to Adjust LTLF, Project 59772 (May 18, 2026), III. Conclusion"
    quote: "ERCOT recommends that the Commission approve an adjustment to the LTLF using the Batch Zero load forecast."
  - id: e11
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e12
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026, PUCT Adopts New Basis for ERCOT's Long-Term Load Forecast"
    quote: "The adjusted load forecast value will not be known until mid-August, when Batch Zero classifications are issued, which will delay some downstream reports, most notably the triennial reliability assessment."
  - id: e13
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Sept. 2026), peak demand slide"
    quote: "On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19."
  - id: e14
    source: ercot-permian-geren-response
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 2"
    quote: "ERCOT’s most recent econometric load forecast shows that base load plus mid-size loads will result in approximately 110 GW of load in 2032. That 110 GW figure does not include any large loads currently in the Batch process."
  - id: e15
    source: ercot-batch-zero-gen-assumptions
    locator: "Batch Zero Generation Assumption Discussion (RPG, Sept. 22, 2026), slide 2"
    quote: "The total load forecast may potentially reach 200 GW for 2028 and 300 GW for 2032"
  - id: e16
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Direction for Future Market Design"
    quote: "The projected load for 2030 (base and adjusted forecast) is between 138 GW and 148 GW with a high scenario value of up to 209 GW."
  - id: e17
    source: ercot-cdr-2025-12
    locator: "CDR December 2025, CDR Load Forecast"
    quote: "This CDR is based on the ERCOT Adjusted Forecast prepared in March-April 2025."
  - id: e18
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026, PUCT Adopts New Basis for ERCOT's Long-Term Load Forecast"
    quote: "In a paired action (Project No. 55999), the Commission granted ERCOT good-cause exceptions to forgo the May 2026 Capacity, Demand, and Reserves (CDR) report and the 2026 Regional Transmission Plan (RTP)."
  - id: e19
    source: ercot-permian-geren-response
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 2"
    quote: "ERCOT currently expects to have a final forecast that includes the Batch loads by the end of this year."
  - id: e20
    source: ercot-ltlf-2026-prelim
    locator: "ERCOT letter filing Preliminary LTLF 2026-2032, Project 58777 (April 15, 2026), page 2"
    quote: "However, ERCOT has concerns with using the preliminary load forecast values for the Reliability Assessment and any other transmission and resource adequacy analysis."
  - id: e21
    source: ercot-ltlf-2026-prelim
    locator: "ERCOT letter filing Preliminary LTLF 2026-2032, Project 58777 (April 15, 2026), page 1"
    quote: "The vast majority of the load forecast for 2029 and 2032 is attributable to Large Loads that were identified in Transmission and/or Distribution Service Provider (TDSP) load submissions based on criteria established in the 2026 Regional Transmission Plan (R-TP) Compliance Plan required by 16 Texas Administrative Code (TAC) § 25.370(g)."
  - id: e22
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026, PUCT Adopts New Basis for ERCOT's Long-Term Load Forecast"
    quote: "At its June 18 open meeting, the PUCT adopted the recommended approach and directed ERCOT to base the adjusted forecast on the Batch Zero Base Load number rather than the historical-realization estimate."
  - id: e23
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "In its filing, ERCOT proposed two options for adjusting the load forecast: Option A Methodology. Adjustment using historical realization rates: and Option B Methodology. Adjustment using Batch Zero Base Load per Planning Guide Revision Request (PGRR) 145."
  - id: e24
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, load growth discussion"
    quote: "One half of the RA concern is load growth. Having accurate projections of future load growth is critical to interpreting RA calculations."
  - id: e25
    source: ercot-ltlf-2025
    locator: "2025 LTLF Report (April 8, 2025), Executive Summary"
    quote: "The 2025 Long-Term Demand and Energy Forecast (LTDEF) for the ERCOT region is presented in this report, which includes information about the methodology, assumptions, and data used to create the forecast."
  - id: e26
    source: ercot-ltlf-good-cause-2026-11
    locator: "ERCOT Motion for Good Cause Exception Regarding 2027 Magnitude, Project 58777 (filed November 6, 2026), section II"
    quote: "Due to the ongoing work to finalize the Batch Zero load values, ERCOT does not yet have a final load forecast, including an official peak load forecast for winter 2026-2027."
---

## Definition

The IMM describes the long-term load forecast (LTLF) as ERCOT's primary annual tool for projecting system load growth over a ten-year horizon. [e2] The saved 2025 report's Appendix A table itself lists the years 2025 to 2031. [e5] The 2025 edition is called the Long-Term Demand and Energy Forecast (LTDEF). [e25] It was built from six parts: base economic load, EVs, rooftop PV, large flexible load, Large Load Contracts and Large Load Officer Letters. [e1]

## How it works

The 2025 forecast stacks its parts in a "waterfall": base economic + EV + LFL + adjusted contracts + adjusted officer letters, minus PV. [e3] ERCOT did not take TSP-reported large loads at face value. It delayed their ramp schedules by 180 days, cut data center additions to 49.8% and cut officer-letter additions to 55.4%. [e4] Appendix A of the 2025 report lists a 2031 summer peak of 144,522 MW; the table does not say whether it is the ERCOT Adjusted or the TSP Provided case. [e5]

For 2026 the rules changed. Under 16 TAC §25.370, large loads enter the LTLF according to development milestones they have reached. Before, the forecast counted any load with a signed interconnection agreement or an officer letter. [e6] ERCOT can ask the PUCT to adjust the forecast, and it did so in 2026. [e10][e11]

## ERCOT context

The preliminary 2026 LTLF, filed April 15, 2026, showed about 278,003 MW in 2029 and 367,790 MW by 2032. [e7] ERCOT said it had concerns with using the preliminary values for the Reliability Assessment and other planning analysis. [e20] It expected the summer 2026 peak to be about 90,500 to 98,000 MW, while the preliminary LTLF said about 112,000 MW. [e8] ERCOT's September 2026 summer review reports that on July 22, 2026 ERCOT set an all-time demand record of 91,134 MW. [e13]

ERCOT offered two fixes. Option A cut computational large loads by 32% based on historical realization. Option B used Batch Zero Base Load, and ERCOT recommended using the Batch Zero forecast. [e9][e23][e10] The PUCT approved Option B. [e11] ERCOT's June 2026 newsletter said the adjusted value would not be known until mid-August, when Batch Zero classifications were to be issued, and that this would delay some downstream reports. [e12] The PUCT also let ERCOT skip the May 2026 CDR and the 2026 RTP. [e18] In August 2026, ERCOT said base load plus mid-size loads alone came to about 110 GW in 2032, before adding any Batch loads. [e14] It expected a final forecast with Batch loads by the end of 2026. [e19] On November 6, 2026 ERCOT told the PUCT that, because of ongoing work to finalize the Batch Zero load values, it did not yet have a final load forecast. [e26]

## Key facts

- 2025 LTLF (April 2025): Appendix A lists a 2031 summer peak of 144,522 MW (the table does not label the case). [e5]
- 2025 haircuts on large loads: 180-day delay, data centers to 49.8%, officer letters to 55.4%. [e4]
- Preliminary 2026 LTLF (April 15, 2026): 278,003 MW in 2029 and 367,790 MW in 2032. [e7]
- Decided (June 2026): adjust using Option B, Batch Zero base load. [e11]
- Pending: the final adjusted 2026 values. ERCOT expected them by the end of 2026, as of August 12, 2026. [e19] As of November 6, 2026 ERCOT said it did not yet have a final load forecast. [e26]

## Timeline

- April 8, 2025: ERCOT publishes the 2025 LTLF, with a 2031 summer peak of 144,522 MW. [e5]
- December 2025: the CDR uses the ERCOT Adjusted Forecast from March-April 2025. [e17]
- April 15, 2026: the preliminary 2026 LTLF shows 278,003 MW (2029) and 367,790 MW (2032). ERCOT voices concerns about using it for planning analysis and gives a summer 2026 range of 90,500 to 98,000 MW. [e7][e20][e8]
- May 18, 2026: ERCOT proposes Option A (a 32% computational-load cut) or Option B (Batch Zero), and recommends Option B. [e9][e10]
- June 18, 2026 (open meeting): the PUCT adopts the Batch Zero Base Load approach (Option B). [e22][e11] In a paired action it also excuses the May 2026 CDR and the 2026 RTP. [e18]
- July 22, 2026: the actual peak sets a record at 91,134 MW. [e13]
- August 12, 2026: ERCOT says base plus mid-size loads come to about 110 GW in 2032, with the final forecast including Batch loads expected by year end. [e14][e19]
- September 22, 2026: an ERCOT slide on Batch Zero study generation assumptions says the total load forecast "may potentially reach" 200 GW for 2028 and 300 GW for 2032. [e15]
- November 6, 2026: ERCOT tells the PUCT it does not yet have a final load forecast, because work to finalize the Batch Zero load values is ongoing. [e26]

## Say it like this

(Guidance) ERCOT's preliminary 2026 forecast reached about 367,790 MW by 2032, mostly large loads taken from TDSP submissions, and ERCOT said it had concerns about using it. The PUCT directed ERCOT to base the adjusted forecast on the Batch Zero Base Load number, and as of November 6, 2026 ERCOT said it did not yet have a final load forecast. [e7][e21][e20][e22][e26]

## Common confusion

(Guidance) The "forecast peak" depends on which forecast and which date you mean. The 2025 report's Appendix A lists 144,522 MW for 2031. [e5] The IMM's 2025 report cites 138 to 148 GW for 2030, with a high scenario up to 209 GW. [e16] The preliminary 2026 LTLF showed 367,790 MW for 2032. [e7] ERCOT's September 2026 view was "potentially" 300 GW for 2032. [e15] None of these is the final adjusted 2026 LTLF, which ERCOT said it did not yet have as of November 6, 2026. [e26]

## Questions

### Why did ERCOT ask to adjust its own forecast in 2026?

The preliminary LTLF reached 367,790 MW by 2032, with the vast majority attributable to Large Loads from TDSP submissions. [e7][e21] ERCOT said it had concerns with using the preliminary values for the Reliability Assessment and other planning analysis, and noted that its own summer 2026 outlook was 90,500 to 98,000 MW against the forecast's 112,000 MW. [e20][e8]

### What did the PUCT decide?

It approved Option B, which adjusts the forecast with Batch Zero Base Load instead of a 32% historical-realization cut. [e9][e23][e11] In June 2026 the adjusted values were expected to wait on Batch Zero classifications in mid-August [e12]; on November 6, 2026 ERCOT said it still had no final load forecast. [e26]

### How did the summer 2026 actual compare?

The record peak was 91,134 MW on July 22, 2026. [e13] That is inside ERCOT's April range of 90,500 to 98,000 MW and well below the preliminary LTLF's roughly 112,000 MW. [e8]

## Open items

- The final adjusted 2026 LTLF values are not in the saved sources. ERCOT expected them by the end of 2026 (August statement) [e19], and on November 6, 2026 said it did not yet have a final load forecast because Batch Zero load values were still being finalized [e26]. No saved source gives a date for the final forecast.
- The text of 16 TAC §25.370 is not saved; its rules are described here from IMM and ERCOT summaries.
- The 2025 LTLF report's peak figures sit in figures and an appendix table. Its "ERCOT Adjusted" versus "TSP Provided" peak values by year were not extractable beyond Appendix A.
- Deeper pass: the 2026 RTP Compliance Plan criteria (January 22, 2026) and the 2025 forecast revision under Project 55999 (June 2025).
