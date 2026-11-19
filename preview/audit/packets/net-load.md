# Audit packet: Net Load (net-load)

kind metric · domain fundamentals · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Net Load · text copy line 1792

BEFORE: …pability The maximum sustained capability of a Resource as demonstrated by performance testing. Net Generation Gross generation less station auxiliary Load or other internal unit power requirements metered at or adjusted to the POI with the ERCOT Transmission Grid at the common switchyard. Net Load 
QUOTE: The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period.
AFTER:  Network Operations Model A representation of the ERCOT System providing the complete physical network definition, characteristics, ratings, and operational limits of all elements of the ERCOT Transmission Grid and other information from Transmission Service Providers (TSPs), Resource Entities, and …

### e2 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 3. Prices by Time of Day · text copy line 1550

BEFORE: …rough September, when demand and prices are typically highest. Figure 3: Prices by Time of Day May-September 2021-2025 !##" !"#A%&#'E))'*H',#A'-./M !#"" !'#" !'"" !&#" %"%$ %"%% %"%& %"%' %"%# !&"" !%#" !%"" !$#" !$"" !#" !" $ % & ' # ( ) * + $" $$ $% $& $' $# $( $) $* $+ %" %$ %% %& %' 12PA'45S75& 
QUOTE: The price trends from 2021 to 2025 show that the period when system conditions are tightest has shifted from the firm peak load hour, usually around 4 to 5 p.m., to the later evening hours (7 to 9 p.m.). This later period, called the net load peak, is calculated by subtracting renewable generation from total demand, because solar generation has ramped down while wind generation is beginning to ramp up.
AFTER:  The shift in peak prices to the peak net load hours demonstrates the growing impact of solar generation. During this solar down-ramp, ESRs increasingly provide energy, causing peak prices to occur later in the evening. Peak prices were relatively lower in 2025 than in 2024 because scarcity conditio…

### e3 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Executive Summary, implications of the changing resource mix · text copy line 1177

BEFORE: …lawback, was implemented by the PUCT on March 1, 2024. 2024 State of the Market Report | ix / / Executive Summary As the resource mix in ERCOT continues to shift, this transformation will carry several implications for market performance and reliability:  Shift of Peak Net Load into Evening Hours: 
QUOTE: Peak net load refers to the peak of system demand net of renewable generation. As more solar is added to the grid, these hours are increasingly shifting later in the day. By 2028, the peak net load hour is expected to occur in the late evening, when solar output is minimal or zero, but demand is still high.
AFTER:   Changing Capacity Factors During Peak Net Load: Historically, solar resources have aligned well with peak demand, particularly in the afternoon. As the net load peak moves into the evening, solar's contribution during these evening hours falls to zero. Meanwhile, wind resources, which typically b…

### e4 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Demand and Supply in ERCOT, discussion of Figure 17 · text copy line 3803

BEFORE: …24. Figure 17: Top and Bottom Deciles (Hours) of Net Load, 2020-2024 90 2020 2021 2022 2023 2024 80 Net Load (GW) 70 60 50 40 30 20 10 0 Hours 20 Capacity factor is the ratio of a resource's energy output to its maximum capability. 2024 State of the Market Report | 19 / / Demand and Supply in ERCOT 
QUOTE: Figure 17 shows that in 2024, the peak net load was 69.6 GW, about 10 GW lower than in 2023 and 5 GW lower than in 2022. This decline was driven by a sharp increase in solar capacity and milder summer weather.
AFTER:  However, 2024 is expected to be an exception. As the peak net load hour continues to shift later into the evening, when solar output falls off, peak net load is likely to rise rapidly in the coming years. D. Imports to ERCOT The ERCOT region is connected to neighboring systems through several direc…

### e5 · `ercot-cdr-2025-12` · tier 2 · Report on the Capacity, Demand and Reserves (CDR) in the ERCOT Region, 2026-2030 (December 2025)
locator: Executive Summary bullets · text copy line 140

BEFORE: …ing "Protocol Prescribed" capacity resources and the ERCOT Adjusted Load Forecast-indicates that summer and winter Planning Reserve Margins for 2026 through 2030 decrease significantly from year to year, and cross over to negative values in 2028 in line with the trends reported in the May 2025 CDR. 
QUOTE: The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST).
AFTER:  ● This CDR includes three alternative Planning Reserve Margin scenarios in addition to the base scenario. In addition to capturing potential Large Load curtailment impacts resulting from Texas Senate Bill 6 provisions, two of the three scenarios define reserve margin bookends by varying the magnitu…

### e6 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 5, Net Load with Energy Storage Resource (ESR) Contribution · text copy line 210

BEFORE: …duction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW. ERCOT estimates that the peak load would have been 94,861 MW if there was no reduction. 4 PUBLIC Net Load with Energy Storage Resource (ESR) Contribution Key Takeaway: 
QUOTE: 12 of the top 20 Hourly Net Load Hours have been from 2026. The Peak Net Load typically occurs in HE 20:00 - 21:00 and occur most often during the Summer.
AFTER:  5 Summer Thermal Forced Outage Comparison PUBLIC 20000 20000 18000 18000 16000 16000 14000 14000 12000 12000 10000 10000 8000 8000 6000 6000 4000 4000 2000 2000 0 6/1 6/2 6/3 6/4 6/5 6/6 6/7 6/8 6/9 6/10 6/11 6/12 6/13 6/14 6/15 6/16 6/17 6/18 6/19 6/20 6/21 6/22 6/23 6/24 6/26 6/27 6/28 6/29 6/30 …

### e7 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide: Net Load HE 17-22 for Summers 2024-2026 · text copy line 507

BEFORE: …Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load (June 2024) (June 2025) (June 2026) (July 2024) (July 2025) (July 2026) (August 2024) (August 2025) (August 2026) HE 17 HE 18 HE 19 HE 20 HE 21 HE 22 Key Takeaway: 
QUOTE: Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July.
AFTER:  *2026 data period is 6/1 - 8/15 8 Three Lowest State of Charge (SOC)% Days 2025 vs 2026 85 SOC % = 15.63 SOC % = 12.81 SOC % = 16.17 SOC % = 9.05 SOC % = 8.23 SOC % = 6.20 20 80 18 75 17 70 65 60 65 65 62 61 15 68 13 64 11 11 60 9 10 8 55 50 15 69 14 73 53 6.1 5.2 5.2 3 51 5.5 6.3 51 4.5 5 5 3 3 PR…

### e8 · `sb3-87r` · tier 1 · SB 3 (87th Legislature, 2021), enrolled: weather preparedness
locator: SB 3 (87R), Section 18, new PURA §39.159(b)(5) (bill line number appears in the text) · text copy line 5757

BEFORE: …le power production in the power region; (4)AAdevelops 8 appropriate qualification and 9 performance requirements for providing services under Subdivision 10 (3), including appropriate penalties for failure to provide the 11 services; and 12 (5)AAsizes the services procured under Subdivision (3) 13 
QUOTE: to prevent prolonged rotating outages due to net load variability 14 in high demand and low supply scenarios.
AFTER:  (c)AAThe commission shall ensure that: 15 (1)AAresources that provide services under Subsection 16 17 (b) are dispatchable and able to meet continuous operating 18 requirements for the season in which the service is procured; 19 (2)AAwinter resource capability qualifications for a 20 service descri…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, net load forecast error (Figure 50 discussion) · text copy line 6614

BEFORE: …25 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain. 
QUOTE: By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load.
AFTER:  IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar. Despite this growth in solar resources, wind generation continues to dominat…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Ancillary Services chapter, AS Methodology discussion · text copy line 4446

BEFORE: …eded to maintain system reliability. Historically, the ERCOT AS Methodology was based on a combination of NERC requirements and statistical parameters meant to quantify the reliability risks ancillary services are meant to 46 | 2025 State of the Market Report / / Ancillary Services protect against. 
QUOTE: For example, the procurement target for Regulation is set according to the 95th percentile of net load forecast error based on a five-minute look-ahead.
AFTER:  This deterministic statistical approach works reasonably well for a product like Regulation, which is meant to account for forecast errors over a relatively short time horizon and variability between regular runs of the real-time market clearing process. For ancillary services meant to address risk…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Demand and Supply in ERCOT, Table 2 discussion · text copy line 2739 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …th daily peak load.8 As shown in Table 2, wind resources had a 28.5% capacity factor during daily peak load intervals in 2025, compared to over 48% for solar. However, as solar output has increased, it has shifted the timing of peak net load into later in the evening when solar production declines. 
QUOTE: Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years.
AFTER:  Table 2: Aggregate Capacity Factor of Wind and Solar Generation 2021-2025 !"#$ %&"$#DD P4P5 P4PP P4P6 P4P; P4P: 66748 66798 657Y8 657;8 65798 !"#$ (#)D*+,"#-+ .L#0 64798 65768 P>7:8 P=748 P>7:8 (#)D*+N"O+ ,"#-+.L#0 P:798 PY798 P97Y8 PY7>8 P=768 %&"$#DD P6758 P67=8 PP798 PP7P8 P67>8 %&'() (#)D*+,"#-…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, 4. Price Spike Impacts · text copy line 1628

BEFORE: …ity was lower on both an absolute and percentage basis. This trend likely results from continued growth in installed solar and energy storage capacity, which contributes to high online reserves throughout the year. We further discuss the current surplus of operating reserves in ERCOT in Chapter II. 
QUOTE: As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day.
AFTER:  During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes. Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 2…

### e13 · `ercot-mora-2027-01` · tier 2 · Monthly Outlook for Resource Adequacy (MORA), January 2027 (posted 2026-11-06)
locator: Battery Energy Storage System (BESS) Output Sub-model description · text copy line 16378

BEFORE: … PRRM. The sub-model uses net load "look-ahead" functionality to build the daily BESS charge/discharge schedule. This entails (1) ranking all the forecasted net load hours during a given scheduling period from highest to lowest, and (2) determining the highest net load hour for a scheduling period. 
QUOTE: The daily scheduling period for non-winter months is all 24 hours, while the winter months have two daily scheduling periods, hours 1-10 and 11-24, reflecting bimodal morning and evening high net load periods, respectively.
AFTER:  The sub-model then determines the fleet's operational state for each hour. The four operational states are charge, discharge, top-off, and idle. (The top-off state reflects an extra charging window just before the peak load for hours that aren't already charging. It's purpose is to ensure that the …

### e14 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Key Takeaways slide · text copy line 24

BEFORE: …ide an Operational and Market review of Summer 2026 • For information only No action is requested of the ERCOT Board; for discussion Key Takeaways • Solar growth outpacing large load additions helped make the daytime hours this summer uneventful. A new all-time demand record was set on July 22nd. • 
QUOTE: Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer.
AFTER:  • Both Energy and Ancillary Service costs were close to or slightly lower than Summer 2025 and Summer 2024. • Overall, Operations and Market outcomes met reliability needs. Dan Woodfin Vice President, System Operations Keith Collins Vice President, Commercial Operations Board of Directors Meeting S…

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations, C. Forecast Error, Figure 50 introduction · text copy line 6600

BEFORE: …), is a major determinant of thermal resource commitment decisions. An overforecast of net demand can lead to sub-optimal commitment decisions that reduce market efficiency. An under-forecast can lead to insufficient thermal commitments and real-time shortfalls that are often addressed through RUC. 
QUOTE: Figure 50 illustrates the distribution of net load forecast errors eight hours ahead of real-time.
AFTER:  Figure 50: Distribution of Net Load Forecast Error H2 2022-2025 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. Ho…

## Statements to check

- **Definition #1** (cites e1, e3): In the ERCOT Protocols, Net Load is the Load for a given period minus generation from solar (PVGRs) and wind (WGRs) for the same period. [e1] Peak net load is the highest value of that quantity over a period, which the IMM describes as the peak of system demand net of renewable generation. [e3]
- **How it works #1** (cites e1, e3, e2): Net load is Load minus solar and wind generation for the same period, so it is the demand left over after those Resources. [e1] Because solar output falls in the evening while demand stays high, the hour of highest net load lands later than the hour of highest gross load. [e3] The IMM reports that the tightest hours have moved from the firm peak load hour around 4 to 5 p.m. to 7 to 9 p.m., the net load peak. [e2]
- **How it works #2** (cites e5, e6, e7) FLAG number-not-in-quote: 2025: ERCOT's planning reports now track both peaks. The December 2025 CDR's base case gives summer 2026 reserve margins of 18.3% at the peak Load hour (hour ending 5 p.m. Central Standard Time) and 20.9% at the peak Net Load hour (hour ending 9 p.m. CST). [e5] ERCOT's summer 2026 review says the peak net load typically falls in HE 20-21, and that in June and July the net load hour moved from HE 21 to HE 22. [e6][e7]
- **How it works #3** (cites e13): In winter the pattern is different: ERCOT's MORA battery model uses two scheduling windows in winter months because of bimodal morning and evening high net load periods. [e13]
- **ERCOT context #1** (cites e12, e11): Price spikes cluster at the net peak. Most real-time price spikes in 2025 occurred during the 7 to 9 p.m. peak net load hours as solar ramped down. [e12] At the daily net peak interval, solar's capacity factor fell to 1.7% in 2025 while wind's held at 29.3%. [e11]
- **ERCOT context #2** (cites e10, e15, e9, e8) FLAG number-not-in-quote: 2021, 39.159: Net load drives operations and procurement. As the IMM describes the AS methodology, the Regulation procurement target is set from the 95th percentile of net load forecast error on a five-minute look-ahead. [e10] Separately, the IMM measures net load forecast errors eight hours ahead of real time and says the average error fell to about 452 MW in 2025 [e15] from more than 1,000 MW in 2023 and 2024, but forecasts still under-forecast renewable output and over-forecast load. [e9] An SB 3 (2021) provision, new PURA §39.159(b)(5), refers to preventing prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e8]
- **ERCOT context #3** (cites e14) FLAG number-not-in-quote: 2026: Storage serves the net peak: ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a pattern through the summer. [e14]
- **Key facts #1** (cites e1): - Protocol definition: Load minus PVGR and WGR generation for the same period. [e1]
- **Key facts #2** (cites e4): - 2024 peak net load was 69.6 GW, about 10 GW lower than 2023 and 5 GW lower than 2022 (IMM). [e4]
- **Key facts #3** (cites e5) FLAG number-not-in-quote: 2025: - December 2025 CDR base scenario for summer 2026: 18.3% reserve margin at peak Load hour (HE 5 p.m. CST) and 20.9% at peak Net Load hour (HE 9 p.m. CST). [e5]
- **Key facts #4** (cites e6): - 12 of the top 20 hourly net load hours were in 2026, as of ERCOT's September 2026 review. [e6]
- **Key facts #5** (cites e9, e15): - 2025 average net load forecast error, measured by the IMM eight hours ahead of real time, was about 452 MW. [e9][e15]
- **Key facts #6** (cites e3): - The IMM expected the peak net load hour to be in the late evening by 2028. [e3]
- **Common confusion #1** (cites e5, e1, e6): (Guidance) Peak load and peak net load are different hours with different reserve margins; the CDR reports both. [e5] Also, the Protocol definition subtracts only solar and wind, not storage discharge; ERCOT's summer review separately shows storage's contribution against net load. [e1][e6]
- **Questions #2** (cites e2, e12, e11): Because the system is tightest when solar has ramped down but demand is still high, and the IMM shows the tight hours and price spikes moved to 7-9 p.m. [e2][e12] Solar contributes almost nothing at that interval (1.7% capacity factor in 2025). [e11]
- **Questions #4** (cites e1): Load for a period minus generation from PhotoVoltaic Generation Resources and Wind Generation Resources for the same period. [e1]
- **Questions #6** (cites e10, e9, e15): It sets the Regulation procurement target (95th percentile of five-minute net load forecast error); that is a five-minute look-ahead measure. [e10] On a different horizon, eight hours ahead of real time, the IMM puts the 2025 average net load forecast error at about 452 MW. [e9][e15]
- **Questions #8** (cites e4): Low: 69.6 GW, about 10 GW lower than 2023, which the IMM attributes to a sharp increase in solar capacity and milder summer weather. [e4]
- **Scenarios #2** (cites e1, e11): - Look at the net peak, not the gross peak: low wind means less is subtracted from load, and solar is gone after sunset. [e1][e11]
- **Scenarios #3** (cites e6, e7): - ERCOT's 2026 review says the peak net load usually falls in HE 20-21 and moved to HE 22 in June and July. [e6][e7]
- **Link to evening-ramp** (cites e2): related Evening Ramp / Duck Curve: The IMM ties the shift of tight hours to the evening to the solar down-ramp, which is when net load peaks. [e2]
- **Link to solar-generation** (cites e1, e11): affects Solar Generation: Solar output is subtracted from load, and its capacity factor at the net peak interval fell to 1.7% in 2025. [e1][e11]
- **Link to wind-generation** (cites e1, e11): affects Wind Generation: Wind output is subtracted from load and held a 29.3% capacity factor at the net peak interval in 2025. [e1][e11]
- **Link to load-forecasting** (cites e9, e15): related Load Forecasting: The IMM reports that the average net load forecast error, measured eight hours ahead of real time, fell to about 452 MW in 2025. [e9][e15]
- **Link to energy-storage-resource** (cites e14) FLAG number-not-in-quote: 2026: related Energy Storage Resource (ESR): ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a recurring pattern. [e14]
- **Link to cdr-report** (cites e5): used-in CDR Report: The CDR reports reserve margins for both the peak Load hour and the peak Net Load hour. [e5]
- **Link to ancillary-services** (cites e10): related Ancillary Services (AS): Regulation targets are set from the 95th percentile of five-minute net load forecast error. [e10]
- **Link to resource-adequacy** (cites e8) FLAG number-not-in-quote: 39.159: related Resource Adequacy: SB 3 (new PURA §39.159(b)(5)) refers to preventing prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) (Illustrative) Suppose at 5 p.m. load is 85 GW, solar is 20 GW and wind is 10 GW: net load is 85 - 20 - 10 = 55 GW. Suppose at 9 p.m. load is 80 GW, solar is 0 GW and wind is 14 GW: net load is 80 - 0 - 14 = 66 GW. Gross load peaked at 5 p.m., but the rest of the fleet faced its heaviest requirement at 9 p.m.
- (Say it like this) (Guidance) Net load is demand after you take out wind and solar, so it is the part the dispatchable fleet and batteries actually have to serve. In ERCOT the net peak now comes after sunset, and that is where the price spikes and the reliability risk have moved.

