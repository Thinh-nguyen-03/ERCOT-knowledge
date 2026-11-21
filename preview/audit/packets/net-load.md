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

### e16 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: 2022 State of the Market Report, Demand and Supply in ERCOT, discussion of Figure 19 · text copy line 2716

BEFORE: …ape of the remaining load they must serve. This also has important implications for resource adequacy in ERCOT. Figure 19 shows net load in the highest and lowest hours in 2022. Figure 19: Top and Bottom Deciles (Hours) of Net Load 32 | 2022 State of the Market Report / / Demand and Supply in ERCOT 
QUOTE: Figure 19 shows the peak net load was 74.5 GW and the 95th percentile was 61.5 GW in 2022. These net load values across the highest 440 net load hours reflect a 14% increase from 2021. This continues a trend of increasing load that must be served by non-renewable resources. The minimum net load dropped from roughly 15 GW in 2016 to about 10.4 GW in 2022.
AFTER:  This reflects the sizable increase in wind and solar output in off-peak hours in recent years. Although less load must be served by baseload resources in these hours (such as nuclear and coal), we believe the increases in real-time prices and net revenues discussed earlier in the report provide suf…

### e17 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: 2023 State of the Market Report, Demand and Supply in ERCOT, discussion of Figure 20 · text copy line 3040 · heading above: 5.8 GW of newly installed solar capacity entered the market with an effective peak serving

BEFORE: …portant implications for other types of resources by changing the shape of the remaining load they must serve. This also has important implications for resource adequacy in ERCOT. Figure 20 shows net load in the highest and lowest hours in 2023. Figure 20: Top and Bottom Deciles (Hours) of Net Load 
QUOTE: Figure 20 shows the peak net load was 79.3 GW in 2023 with the 95th percentile of peak net load at 67.6 GW. The net load values across the highest 440 net load hours reflect a 9% increase from 2022. This continues a trend of increasing load that must be served by non-renewable resources. The minimum net load dropped from roughly 15 GW in 2022 to about 12 GW in 2023.
AFTER:  This reflects the sizable increase in wind and solar output in off-peak hours in recent years. Although less load must be served by baseload resources in these hours (such as nuclear and coal), we believe the increases in real-time prices and net revenues discussed earlier in the report provide suf…

### e18 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 42 (OCR), Table 2: Aggregate Capacity Factor of Wind and Solar Generation 2021-2025 (columns: wind overall, daily peak load, daily net peak load; solar overall, daily peak load, daily net peak load) · ocr copy line 1747, OCR page 42 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years. Table 2: Aggregate Capacity Factor of Wind and Solar Generation 2021-2025 Daily Peak Daily Net Daily Peak _ Daily Net Y Il Il ear Overa Load Peak Load Overa Load Peak Load 
QUOTE: 2021 33.0% 30.6% 25.6% 23.1% 41.2% 31.1%
AFTER:  2022 33.6% 31.3% 27.6% 23.9% 41.4% 214% 2023 31.7% 28.5% 26.7% 22.6% 40.4% 10.1% 2024 31.4% 29.0% 27.8% 22.2% 42.5% 3.9% 2025 31.6% 28.5% 29.3% 23.8% 48.4% 1.7% E. Energy Storage Resources Energy storage resources are technologies that consume and store energy for later use. ESRs include pumped hyd…

### e19 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 42 (OCR), Table 2, rows 2023-2025 · ocr copy line 1749, OCR page 42 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …interval, a slight increase from recent years. Table 2: Aggregate Capacity Factor of Wind and Solar Generation 2021-2025 Daily Peak Daily Net Daily Peak _ Daily Net Y Il Il ear Overa Load Peak Load Overa Load Peak Load 2021 33.0% 30.6% 25.6% 23.1% 41.2% 31.1% 2022 33.6% 31.3% 27.6% 23.9% 41.4% 214% 
QUOTE: 2023 31.7% 28.5% 26.7% 22.6% 40.4% 10.1% 2024 31.4% 29.0% 27.8% 22.2% 42.5% 3.9% 2025 31.6% 28.5% 29.3% 23.8% 48.4% 1.7%
AFTER:  E. Energy Storage Resources Energy storage resources are technologies that consume and store energy for later use. ESRs include pumped hydro storage systems, compressed air energy storage (CAES), hydrogen and 8 The capacity factor is the ratio of a resource's energy output to its maximum capability…

### e20 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 28 (OCR), Review of Real-Time Market Outcomes, 4. Price Spike Impacts · ocr copy line 1091, OCR page 28

BEFORE: …ad hours between 7 and 9 p.m., when solar production across the state ramped down for the day. During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes. 
QUOTE: Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 22% in 2024. Price spikes also occurred relatively frequently during the morning ramp hours, 1.e., between 6 a.m. and 8 a.m., but they accounted for only 7.5% of the total in 2025, down from 8.9% in 2024.
AFTER:  Conversely, the share of price spikes that occurred during the middle of the day, when solar production peaks, i.e., between 9 a.m. and 2 p.m., dropped from 9.3% in 2024 to 2.7% in 2025. 6 | 2025 State of the Market Report ===== page 29 (OCR) ===== Review of Real-Time Market Outcomes The increase i…

### e21 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ERCOT Methodologies for Determining Minimum Ancillary Service Requirements (2026), Non-Spin section · text copy line 65

BEFORE: …ss of generating capacity, to compensate for Load forecast and/or forecast uncertainty on days in which large amounts of reserve are not available online, to address the risk of net load ramp, or when there is a limited amount of capacity available for Security-Constrained Economic Dispatch (SCED). 
QUOTE: The periods when load is increasing and wind and/or solar are decreasing requires other generation resources to increase output or come online quickly to compensate for the sudden net load increases. As a result, net load ramp risk should be accounted for in the determination of Non-Spin requirements.
AFTER:  While net load forecast analysis may cover reserves required for forecast uncertainty, it may not necessarily cover exposure to the loss of generation and net load ramp risk. Due to this risk, it may be necessary for ERCOT to have additional reserves available to protect against forecast uncertaint…

### e22 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ERCOT AS Methodology (2026), ECRS and Non-Spin, Procedure · text copy line 71

BEFORE: … Resources. Procedure A diagram of a probabilistic methodology used to calculate ECRS and NSRS requirements is shown below. The methodology utilizes an accounting of risk for which ECRS and NSRS are needed and accounting of historic excess capacity that may have available to respond to these risks. 
QUOTE: Risks accounting includes 30minte ahead and 6 hour ahead historic net load forecast errors and historic rolling 6 hour ahead forced outages of conventional Resources from the previous four years.
AFTER:  ERCOT continues to see significant growth in installed solar capacity from one year to the next; an increase in solar capacity also tends to increase the MW quantity of error in its forecast. Hence, ERCOT's reliance on historical solar forecast errors alone creates a possibility of under-estimation…

### e23 · `ercot-as-methodology-2026` · tier 1 · ERCOT Methodologies for Determining Minimum Ancillary Service Requirements, 2026 (effective 2026-01-01)
locator: ERCOT AS Methodology (2026), Regulation Service section · text copy line 37

BEFORE: …tes of Regulation Service usage to perform evaluation and determine the required quantities for this service. Regulation Service is deployed in order to correct actual frequency to scheduled frequency and to ensure North American Electric Reliability Corporation (NERC) requirements are met. Summary 
QUOTE: The Regulation Service requirements are calculated with the expectation that sufficient Regulation Service will be available to cover the 95^(th) percentile of deployed regulation or net load variability.
AFTER:  An adjustment may also be made based on historic CPS1 performance. Procedure To evaluate Regulation Service requirements, ERCOT will collect historical Resource Registration information, CPS1 data, Regulation Service deployment data, and ERCOT system load data. For determining the base Reg-Up requi…

### e24 · `ercot-cdr-2025-12` · tier 2 · Report on the Capacity, Demand and Reserves (CDR) in the ERCOT Region, 2026-2030 (December 2025)
locator: December 2025 CDR, ELCC/resource definitions appendix, ECRS description · text copy line 114100

BEFORE: … restoring frequency to its scheduled value to return the system to normal; (b) Provide energy or continued Load interruption to avoid or during the implementation of an Energy Emergency Alert (EEA); (c) Provide backup regulation; and (d) Be sustained at a specified level for two consecutive hours. 
QUOTE: ECRS was developed to address net load ramps and take advantage of Energy Storage Resources with maximum durations of at least two hours.
AFTER:  Forecast Zone The CDR report uses Forecast Zones to identify the geographical location of generation resources. Forecast Zones generally have the same boundaries as the 2003 Congestion Management Zones with the following exceptions: A) Panhandle Zone for resources in the Texas Panhandle counties an…

### e25 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Competition and Market Power · text copy line 973

BEFORE: …te of the Market Report | vii / / Executive Summary Competition and Market Power We evaluate market power from two perspectives: structural (does market power exist) and behavioral (have attempts been made to exercise it). There has been a downtrend in uncompetitive hours over the last three years. 
QUOTE: The percentage of top-quartile net load hours with a pivotal supplier declined from over 90% in 2022 to 35% in 2025. This positive development is due in large part to milder weather and a large influx of energy storage resources held by smaller participants.
AFTER:  Potential economic withholding, measured by the output gap, occurs frequently but has a relatively low impact. Along with the declining frequency of uncompetitive hours, this reflects a generally positive competitive environment. Analysis of potential physical withholding indicates that large suppl…

### e26 · `ercot-cdr-2025-12` · tier 2 · Report on the Capacity, Demand and Reserves (CDR) in the ERCOT Region, 2026-2030 (December 2025)
locator: December 2025 CDR, Planning Reserve Margins for the Peak Load and Peak Net Load Hours · text copy line 283

BEFORE: …eserve Margins for the Peak Load and Peak Net Load Hours ● The following charts show the summer and winter Planning Reserve Margin trends for the scenario based on the ERCOT Adjusted Load Forecast and Protocol-prescribed resource capacity. Trends are shown for the peak Load and peak Net Load hours. 
QUOTE: For the winter, both peak Load and peak Net Load Margins enter negative territory beginning winter 2028/29.
AFTER:  The lower and sharply downward trajectory of the Margins is due to (1) high load growth largely driven by new Loads reported by Transmission Service Providers, (2) a lower capacity contribution from wind and solar resources due to the use of Effective Load Carrying Capabilities, (3) fewer planned r…

### e27 · `ercot-monthly-ops-2026-10` · tier 2 · ERCOT Monthly Operational Overview, 2026-10 (2026-10)
locator: Monthly Operational Overview (October 2026), slide 8, Net Load Forecast Performance · text copy line 304

BEFORE: …d on the maximum net system hourly value from the October 2026 Demand and Energy report. **Based on the minimum net system 15-minute interval value from the October 2026 Demand and Energy report. Data for latest two months are based on preliminary settlements. 7 PUBLIC Net Load Forecast Performance 
QUOTE: Day Ahead Net Load Forecast - Mean Absolute Forecast Error Day Ahead Net Load Forecast MAE (MW) KPI Goal (4,000 MW)
AFTER:  4,500 4,000 3,500 3,000 2,500 2,000 1,500 1,000 500 0 8 PUBLIC Loads Approved to Energize - Observations • Of the 9,456 MW that have received Approval to Energize, ERCOT has observed a non-simultaneous monthly peak consumption of 5,115 MW in October 2026, which is a large increase since September 2…

### e28 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 8: Net Load HE 17-22 for Summers 2024-2026, footnote · text copy line 349

BEFORE: …11 7/12 7/13 7/14 7/15 7/16 7/17 7/18 7/19 7/21 7/22 7/23 7/24 7/25 7/26 7/27 7/28 7/29 7/30 7/31 8/1 8/2 8/3 8/4 8/5 8/6 8/7 8/8 8/9 8/10 8/11 8/12 8/13 8/15 8/16 8/17 MW 2025/2026 Summer Thermal Forced Outage Comparison 2025 Ext Planned Outage MW 2025 Forced Outage MW 2026 Ext Planned Outage MW 0 
QUOTE: *2026 data period is 6/1 - 8/15
AFTER:  2026 Forced Outage MW Key Takeaway: Summer 2026 has generally had lower forced outages than summer 2025. 6 Historic Summer Thermal Forced Outage Comparison Summer Thermal Forced Outage (% of Installed Capacity) 25% 20% 15% 10% 5% 0% 6/1 6/2 6/3 6/4 6/5 6/6 6/8 6/9 6/10 6/11 6/12 6/13 6/15 6/16 6/17…

### e29 · `ercot-cdr-2025-12` · tier 2 · Report on the Capacity, Demand and Reserves (CDR) in the ERCOT Region, 2026-2030 (December 2025)
locator: December 2025 CDR, Definitions, Net Load / Peak Net Load · text copy line 114147

BEFORE: …is not available for operations during the summer Peak Load Season (June, July, August and September) or winter Peak Load Season (December, January and February). Seasons Summer months are June, July, August, and September; winter months are December, January, and February. Net Load / Peak Net Load 
QUOTE: The Load for a given period minus generation from PhotoVoltaic Generation Resources (PVGRs) and Wind Generation Resources (WGRs) for the same period. The peak Net Load is the highest value for the given period.
AFTER:  Private Use Networks (PUNs) An electric network connected to the ERCOT transmission grid that contains load that is not directly metered by ERCOT (i.e., load that is typically netted with internal generation). The Capacity from Private Use Networks forecast estimate in the Seasonal Summary tab is b…

## Statements to check (new or changed since the last audit)

- **Definition #1** (cites e1, e29, e3) FLAG number-not-in-quote: 2025: In the ERCOT Protocols, Net Load is the Load for a given period minus generation from solar (PVGRs) and wind (WGRs) for the same period. [e1] The December 2025 CDR uses the same definition and defines the peak Net Load as the highest value for the given period. [e29] The IMM describes peak net load as the peak of system demand net of renewable generation. [e3]
- **How it works #2** (cites e5, e26, e6, e7, e28) FLAG number-not-in-quote: 2025: ERCOT's planning reports now track both peaks. The December 2025 CDR's base case gives summer 2026 reserve margins of 18.3% at the peak Load hour (hour ending 5 p.m. Central Standard Time) and 20.9% at the peak Net Load hour (hour ending 9 p.m. CST). [e5] For winter, the same CDR says both the peak Load and peak Net Load margins turn negative from winter 2028/29. [e26] ERCOT's summer 2026 review says the peak net load typically falls in HE 20-21 [e6], and that the hour of highest average net load in June and July moved from HE 21 to HE 22, based on 2026 data from June 1 to August 15. [e7][e28]
- **How it works #4** (cites e23, e21, e22, e24) FLAG number-not-in-quote: 2026: Net load sizes reserves. Regulation requirements are set to cover the 95th percentile of deployed regulation or net load variability, per ERCOT's 2026 methodology. [e23] ERCOT says periods when load rises while wind or solar fall need other generation to ramp or start quickly, so net load ramp risk is accounted for in Non-Spin requirements. [e21] The ECRS and Non-Spin risk calculation uses 30-minute-ahead and 6-hour-ahead historic net load forecast errors and 6-hour-ahead forced outages from the previous four years. [e22] The CDR says ECRS itself was developed to address net load ramps. [e24]
- **ERCOT context #1** (cites e12, e20): Price spikes cluster at the net peak. Most real-time price spikes in 2025 occurred during the 7 to 9 p.m. peak net load hours as solar ramped down. [e12] The IMM counts spikes during this evening ramp at 30% of all 2025 spikes (22% in 2024), against 7.5% in the 6 to 8 a.m. morning ramp (8.9% in 2024). [e20]
- **ERCOT context #2** (cites e18, e19, e11): Solar has stopped helping at the net peak. In the IMM's Table 2, solar's capacity factor at the daily net peak interval was 31.1% in 2021, 10.1% in 2023, 3.9% in 2024 and 1.7% in 2025, while wind's was 25.6% in 2021 and 29.3% in 2025. [e18][e19][e11]
- **ERCOT context #3** (cites e16, e17, e4): Peak net load by year (IMM): 74.5 GW in 2022 (95th percentile 61.5 GW) [e16], 79.3 GW in 2023 (95th percentile 67.6 GW) [e17], and 69.6 GW in 2024, about 10 GW below 2023, which the IMM attributes to a sharp increase in solar capacity and milder summer weather. [e4] At the other end, the IMM reports minimum net load of about 10.4 GW in 2022 (down from roughly 15 GW in 2016) and about 12 GW in 2023; its 2023 report gives the 2022 starting point as roughly 15 GW, so the two reports disagree on 2022. [e16][e17]
- **ERCOT context #4** (cites e15, e9, e27, e8) FLAG number-not-in-quote: 2021, 39.159: Forecast error. The IMM measures net load forecast errors eight hours ahead of real time [e15] and says the average error fell to about 452 MW in 2025 from more than 1,000 MW in 2023 and 2024, but forecasts still under-forecast renewable output and over-forecast load. [e9] ERCOT's monthly operations report tracks day-ahead net load forecast mean absolute error against a KPI goal of 4,000 MW. [e27] An SB 3 (2021) provision, new PURA §39.159(b)(5), refers to preventing prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e8]
- **ERCOT context #5** (cites e25): Market power. The IMM tests structural market power in the top quartile of net load hours; the share of those hours with a pivotal supplier fell from over 90% in 2022 to 35% in 2025, which it attributes largely to milder weather and storage held by smaller participants. [e25]
- **Timeline #1** (cites e18): - 2021: solar capacity factor at the daily net peak interval is 31.1% (IMM). [e18]
- **Timeline #2** (cites e16): - 2022: peak net load 74.5 GW (IMM). [e16]
- **Timeline #3** (cites e17, e19): - 2023: peak net load 79.3 GW; solar at the net peak falls to 10.1%. [e17][e19]
- **Timeline #4** (cites e4): - 2024: peak net load 69.6 GW, about 10 GW below 2023. [e4]
- **Timeline #5** (cites e19, e20, e9): - 2025: solar at the net peak 1.7%; evening ramp has 30% of price spikes; average 8-hour-ahead net load forecast error about 452 MW. [e19][e20][e9]
- **Timeline #6** (cites e6, e7): - Summer 2026: 12 of the top 20 hourly net load hours are from 2026; the June-July peak hour moves to HE 22. [e6][e7]
- **Key facts #2** (cites e16, e17, e4): - Peak net load: 74.5 GW (2022), 79.3 GW (2023), 69.6 GW (2024), all per the IMM. [e16][e17][e4]
- **Key facts #6** (cites e23) FLAG number-not-in-quote: 2026: - Regulation covers the 95th percentile of deployed regulation or net load variability (ERCOT 2026 methodology). [e23]
- **Common confusion #1** (cites e5, e1, e6, e15, e10, e22) FLAG number-not-in-quote: 452 MW: (Guidance) Peak load and peak net load are different hours with different reserve margins; the CDR reports both. [e5] Also, the Protocol definition subtracts only solar and wind, not storage discharge; ERCOT's summer review separately shows storage's contribution against net load. [e1][e6] Forecast-error figures need their horizon: the IMM's 452 MW is eight hours ahead, Regulation uses a five-minute look-ahead, and ECRS/Non-Spin use 30-minute and 6-hour errors. [e15][e10][e22]
- **Questions #6** (cites e10, e23, e22, e9, e15): It sets the Regulation procurement target (95th percentile of five-minute net load forecast error, as the IMM describes it). [e10][e23] ECRS and Non-Spin sizing uses 30-minute and 6-hour-ahead net load forecast errors. [e22] On a different horizon, eight hours ahead of real time, the IMM puts the 2025 average net load forecast error at about 452 MW. [e9][e15]
- **Questions #8** (cites e4, e17): Low: 69.6 GW, about 10 GW lower than 2023's 79.3 GW, which the IMM attributes to a sharp increase in solar capacity and milder summer weather. [e4][e17]
- **Questions #10** (cites e1, e18, e19, e21): Solar output is subtracted from load, so more solar lowers midday net load but does little after sunset: its capacity factor at the net peak fell from 31.1% in 2021 to 1.7% in 2025. [e1][e18][e19] ERCOT says the rising-load, falling-renewables period needs other generation to ramp or start quickly. [e21]
- **Questions #12** (cites e1, e11, e12): Less is subtracted from load, so net load is higher; wind averaged a 29.3% capacity factor at the 2025 net peak, so a low-wind evening removes a large part of that offset. [e1][e11] That is when the IMM sees most price spikes. [e12]
- **Scenarios #4** (cites e20): - Evening-ramp spikes were 30% of all 2025 spikes, so price risk sits in the ramp as well as the peak hour. [e20]
- **Link to evening-ramp** (cites e2): related Evening Ramp / Duck Curve: The IMM ties the shift of tight hours to the evening to the solar down-ramp, which is when net load peaks. [e2]
- **Link to solar-generation** (cites e1, e11): affects Solar Generation: Solar output is subtracted from load, and its capacity factor at the net peak interval fell to 1.7% in 2025. [e1][e11]
- **Link to wind-generation** (cites e1, e11): affects Wind Generation: Wind output is subtracted from load and held a 29.3% capacity factor at the net peak interval in 2025. [e1][e11]
- **Link to load-forecasting** (cites e9, e15): related Load Forecasting: The IMM reports that the average net load forecast error, measured eight hours ahead of real time, fell to about 452 MW in 2025. [e9][e15]
- **Link to energy-storage-resource** (cites e14) FLAG number-not-in-quote: 2026: related Energy Storage Resource (ESR): ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a recurring pattern. [e14]
- **Link to cdr-report** (cites e5): used-in CDR Report: The CDR reports reserve margins for both the peak Load hour and the peak Net Load hour. [e5]
- **Link to ancillary-services** (cites e10): related Ancillary Services (AS): Regulation targets are set from the 95th percentile of five-minute net load forecast error. [e10]
- **Link to resource-adequacy** (cites e8) FLAG number-not-in-quote: 39.159: related Resource Adequacy: SB 3 (new PURA §39.159(b)(5)) refers to preventing prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e8]
- **Link to ecrs** (cites e24, e22): related ECRS (ERCOT Contingency Reserve Service): ERCOT's CDR glossary says ECRS was developed to address net load ramps; ECRS and Non-Spin sizing uses 30-minute and 6-hour-ahead net load forecast errors. [e24][e22]
- **Link to non-spin** (cites e21) FLAG number-not-in-quote: 2026: related Non-Spinning Reserve: ERCOT's 2026 AS methodology says net load ramp risk should be accounted for in setting Non-Spin requirements. [e21]
- **Link to market-power-mitigation** (cites e25): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The IMM measures structural market power in top-quartile net load hours; the share with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e25]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) (Illustrative) Suppose at 5 p.m. load is 85 GW, solar is 20 GW and wind is 10 GW: net load is 85 - 20 - 10 = 55 GW. Suppose at 9 p.m. load is 80 GW, solar is 0 GW and wind is 14 GW: net load is 80 - 0 - 14 = 66 GW. Gross load peaked at 5 p.m., but the rest of the fleet faced its heaviest requirement at 9 p.m.
- (Say it like this) (Guidance) Net load is demand after you take out wind and solar, so it is the part the dispatchable fleet and batteries actually have to serve. In ERCOT the net peak now comes after sunset, and that is where the price spikes, the reserve sizing and the reliability risk have moved.

