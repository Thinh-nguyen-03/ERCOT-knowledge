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

### e5 · `ercot-cdr-2025-12` · tier 2 · Report on the Capacity, Demand and Reserves (CDR) in the ERCOT Region, 2026-2030 (December 2025)
locator: Executive Summary bullets · text copy line 140

BEFORE: …ing "Protocol Prescribed" capacity resources and the ERCOT Adjusted Load Forecast-indicates that summer and winter Planning Reserve Margins for 2026 through 2030 decrease significantly from year to year, and cross over to negative values in 2028 in line with the trends reported in the May 2025 CDR. 
QUOTE: The base scenario's summer 2026 Planning Reserve Margins are 18.3% for the peak Load hour (Hour Ending 5:00 p.m. Central Standard Time) and 20.9% for the peak Net Load hour (Hour Ending 9:00 p.m. CST).
AFTER:  ● This CDR includes three alternative Planning Reserve Margin scenarios in addition to the base scenario. In addition to capturing potential Large Load curtailment impacts resulting from Texas Senate Bill 6 provisions, two of the three scenarios define reserve margin bookends by varying the magnitu…

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

### e30 · `sb3-87r` · tier 1 · SB 3 (87th Legislature, 2021), enrolled: weather preparedness
locator: SB 3 (87R), Section 18, new PURA §39.159(b), lead-in · alt copy line 811 · heading above: 39.151 for the ERCOT power region shall provide staff as necessary

BEFORE: …s Code, is amended by adding Sections 39.159 and 39.160 to read as follows: Sec. 39.159. DISPATCHABLE GENERATION. (a) For the purposes of this section, a generation facility is considered to be non-dispatchable if the facility's output is controlled primarily by forces outside of human control. (b) 
QUOTE: The commission shall ensure that the independent organization certified under Section 39.151 for the ERCOT power region:
AFTER:  (1) establishes requirements to meet the reliability needs of the power region; (2) periodically, but at least annually, determines the quantity and characteristics of ancillary or reliability services necessary to ensure appropriate reliability during extreme heat and extreme cold weather conditio…

### e31 · `sb3-87r` · tier 1 · SB 3 (87th Legislature, 2021), enrolled: weather preparedness
locator: SB 3 (87R), Section 18, new PURA §39.159(b)(5) · text copy line 5753

BEFORE: …eather conditions and during times of low 7 non-dispatchable power production in the power region; (4)AAdevelops 8 appropriate qualification and 9 performance requirements for providing services under Subdivision 10 (3), including appropriate penalties for failure to provide the 11 services; and 12 
QUOTE: (5)AAsizes the services procured under Subdivision (3)
AFTER:  13 to prevent prolonged rotating outages due to net load variability 14 in high demand and low supply scenarios. (c)AAThe commission shall ensure that: 15 (1)AAresources that provide services under Subsection 16 17 (b) are dispatchable and able to meet continuous operating 18 requirements for the s…

## Statements to check (new or changed since the last audit)

- **Link to evening-ramp** (cites e2): related Evening Ramp / Duck Curve: The IMM ties the shift of tight hours to the evening to the solar down-ramp, which is when net load peaks. [e2]
- **Link to solar-generation** (cites e1, e11): affects Solar Generation: Solar output is subtracted from load, and its capacity factor at the net peak interval fell to 1.7% in 2025. [e1][e11]
- **Link to wind-generation** (cites e1, e11): affects Wind Generation: Wind output is subtracted from load and held a 29.3% capacity factor at the net peak interval in 2025. [e1][e11]
- **Link to load-forecasting** (cites e9, e15): related Load Forecasting: The IMM reports that the average net load forecast error, measured eight hours ahead of real time, fell to about 452 MW in 2025. [e9][e15]
- **Link to energy-storage-resource** (cites e14) FLAG number-not-in-quote: 2026: related Energy Storage Resource (ESR): ERCOT says ESRs helped serve record net loads in summer 2026, with evening state-of-charge exhaustion a recurring pattern. [e14]
- **Link to cdr-report** (cites e5): used-in CDR Report: The CDR reports reserve margins for both the peak Load hour and the peak Net Load hour. [e5]
- **Link to ancillary-services** (cites e10, e23) FLAG number-not-in-quote: 2026: related Ancillary Services (AS): The IMM says the Regulation procurement target is set according to the 95th percentile of net load forecast error on a five-minute look-ahead; ERCOT's 2026 methodology words it as covering the 95th percentile of deployed regulation or net load variability. [e10][e23]
- **Link to resource-adequacy** (cites e30, e31, e8) FLAG number-not-in-quote: 39.159: related Resource Adequacy: SB 3 (new PURA §39.159(b)(5)) has the commission ensure ERCOT sizes the services procured under subdivision (3) to prevent prolonged rotating outages due to net load variability in high demand and low supply scenarios. [e30][e31][e8]
- **Link to ecrs** (cites e24, e22): related ECRS (ERCOT Contingency Reserve Service): ERCOT's CDR glossary says ECRS was developed to address net load ramps; ECRS and Non-Spin sizing uses 30-minute and 6-hour-ahead net load forecast errors. [e24][e22]
- **Link to non-spin** (cites e21) FLAG number-not-in-quote: 2026: related Non-Spinning Reserve: ERCOT's 2026 AS methodology says net load ramp risk should be accounted for in setting Non-Spin requirements. [e21]
- **Link to market-power-mitigation** (cites e25): related Market Power Mitigation (Competitiveness Tests, Mitigated Offer Caps): The IMM measures structural market power in top-quartile net load hours; the share with a pivotal supplier fell from over 90% in 2022 to 35% in 2025. [e25]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) (Illustrative) Suppose at 5 p.m. load is 85 GW, solar is 20 GW and wind is 10 GW: net load is 85 - 20 - 10 = 55 GW. Suppose at 9 p.m. load is 80 GW, solar is 0 GW and wind is 14 GW: net load is 80 - 0 - 14 = 66 GW. Gross load peaked at 5 p.m., but the rest of the fleet faced its heaviest requirement at 9 p.m.
- (Say it like this) (Guidance) Net load is demand after you take out wind and solar, so it is the part the dispatchable fleet and batteries actually have to serve. In ERCOT the net peak now comes after sunset, and that is where the price spikes, the reserve sizing and the reliability risk have moved.

