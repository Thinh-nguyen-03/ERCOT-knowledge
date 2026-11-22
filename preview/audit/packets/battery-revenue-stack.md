# Audit packet: Battery Revenue Stack (battery-revenue-stack)

kind concept · domain reliability · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary · text copy line 717

BEFORE: …duced by solar resources increased from 10.4% in 2024 to 13.9% in 2025. Energy Storage Resource (ESR) capacity increased even more dramatically than solar capacity. The installed capacity of ESRs increased to more than 17,000 MW and 31,500 MWh by the end of 2025, up almost 80% from the end of 2024. 
QUOTE: The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services.
AFTER:  Based on hourly average ESR behavior across 2025, the hourly peak of aggregate ESR output was almost 2,400 MW, compared to only 820 MW in 2024. This increase corresponds to the major role that ESRs play in serving load during the evening down ramp for solar generation. Changes in demand and supply …

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter II.E.4, ESR Participation in Energy Markets · text copy line 3003

BEFORE: … *+,-./.0N. 20.34R,-./.0N. S7389:;<.=,2+-,-./.0N. !)"" !&#" !&"" !#"" !%'" !E"" !%&" !&"" !A" !%"" !#" !" !" &"&% &"&& &"&E &"&# !"#$%&'E)*+,-.+.)/)MN)+23+4)#+RST8#9 W";%&+,-.+.)/)MN)+23+<'&&'"M=9 !'"" Figure 17: Total and Normalized ESR Revenue 2021-2025 &"&) 4. ESR Participation in Energy Markets 
QUOTE: Prior to 2024, ESRs participated in the wholesale market primarily through ancillary services because they can respond quickly to fluctuations in supply and demand. As ESRs saturated the market for several AS products, they began shifting toward energy arbitrage in 2024. Energy arbitrage is the practice of buying electricity when prices are low and selling it back to the grid when prices are high.
AFTER:  The continued rapid influx of solar generation into the ERCOT market has also facilitated ESR growth by enabling low-cost charging throughout the day. As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has a…

### e9 · `ercot-rtcb-battery` · tier 2 · RTC+B Battery Overview (July 2025)
locator: Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3 · text copy line 638 · heading above: 8.1.1.2.1.3 (8)

BEFORE: …ization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs. 3. 
QUOTE: The awards for each Resource are limited based on the Resource's qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE's responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements. Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution.
AFTER:  4. QSE management of Ancillary Service responsibility across their portfolio no longer exists. PUBLIC 24 Real-Time Market With the Implementation of the RTC+B Project (2 of 2) 1. 6.6.5.5 ESR Set Point Deviation Charge for Over Performance The tolerance is the greater of 3% of the Average Aggregated…

### e12 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, slide 21 · text copy line 1349

BEFORE: …te: 1. The data is based on the 20:00 SCED interval snapshot. SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025. 2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. 
QUOTE: The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B.
AFTER:  21 PUBLIC ESR contribution to Ancillary Services continues to increase ESR AS Contribution in DAM 100 90 80 70 60 % 50 40 30 20 10 0 ESR AS Contribution in RTM 100 80 % 60 40 20 0 Jun Jul Aug 2024 REGUP Jun Jul Aug 2025 REGDN RRS Jun Jul 2026 ECRS Aug 2026-Jun REGUP REGDN 2026-Jul RRS 2026-Aug ECRS…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V, Congestion Management by ESRs · text copy line 5435

BEFORE: … growing participation of energy storage resources (ESRs) in the real-time energy market. As the ancillary services market has become saturated, a larger share of ESR revenue has depended on energy arbitrage, accelerating this shift toward real-time market activity. 2. Congestion Management by ESRs 
QUOTE: ESRs are particularly well suited to help resolve congestion because they can act as both supply and demand. When increasing load at a particular location can resolve congestion, ESRs can often charge at prices below $0.
AFTER:  Conversely, when increasing supply at a particular location can resolve congestion, ESRs can discharge and earn higher prices that reflect the value of serving load subject to binding transmission constraints. 2025 State of the Market Report | 63 / / Transmission Congestion and CRRs Figure 39 illus…

### e25 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.3.3, Non-Spinning Reserve Capacity Monitoring Criteria, paragraph (2) · text copy line 836 · heading above: 8.1.1.3.3 Non-Spinning Reserve Capacity Monitoring Criteria

BEFORE: …he actual generation or Load, the Ancillary Service award for Non-Spin, the HSL/Maximum Power Consumption (MPC), the LSL/LPC, ramp rates, and the Resource's qualification to provide Non-Spin. ERCOT shall also monitor Non-Spin available from and awarded to qualified Resources with an OFF status. (2) 
QUOTE: For the Non-Spin capability provided for a Resource to ERCOT by the Resource's QSE, the amount of Non-Spin reflected in that capability must be limited to the amount of Non-Spin that can be sustained by the Resource for at least four consecutive hours.
AFTER:  +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (2) abov…

### e27 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Pending box [NPRR1309: Insert Section 8.1.1.2.1.8 upon system implementation], DRRS Qualification, paragraph (5) · text copy line 774 · heading above: 8.1.1.2.1.7 ERCOT Contingency Reserve Service Qualification
FLAG pending-box: | [NPRR1309: Insert Section 8.1.1.2.1.8 below upon system implementation:] |
BEFORE: …'s response as described under Section 8.1.1.4.5, Dispatchable Reliability Reserve Service Energy Deployment Criteria. ERCOT shall evaluate the response of the Resource given the current operating conditions of the ERCOT System and determine the Resource's qualification to provide DRRS. | | | | (5) 
QUOTE: For Resources seeking to qualify to provide DRRS, the Resource must be capable of operating at its HSL for at least four consecutive hours. The amount of DRRS for which the Resource is qualified is limited to the amount of capacity that can be ramped within two hours.
AFTER:  Additionally, the maximum quantity of DRRS that an individual Resource is qualified to provide is limited to the amount of DRRS that can be sustained by the Resource for at least four hours. | +=========================================================================================================…

### e29 · `ercot-monthly-2026-06` · tier 2 · ERCOT Monthly, June 2026 (2026-07-10)
locator: ERCOT Monthly, June 2026 (published 2026-07-10), DRRS item · text copy line 208

BEFORE: …independent generator and cooperative segments, several of whom argued DRRS should advance a broader reliability standard rather than only address day-today operational uncertainty. With the Board's adoption complete, DRRS now advances to the PUCT for review and ratification before it takes effect. 
QUOTE: Design and pricing refinements for energy storage resource participation in DRRS continued at the Protocol Revision Subcommittee (PRS) on June 10, where ERCOT filed NPRR1340 with companion NOGRR288 to carry the storage discussion forward.
AFTER:  New Ride-Through Standard Requiring Large Loads to Stay On Through Grid Disturbances Approved by PUCT On June 2, the ERCOT Board of Directors adopted NOGRR282 and NPRR1308, which establish frequency and voltage ride-through requirements for large computational loads. The two revision requests were …

### e37 · `puct-pcm-staff-rec` · tier 2 · PUCT Project 55000, Staff Recommendation on the Performance Credit Mechanism (December 2024)
locator: Project 55000, Staff Recommendation (December 2024), summary of ERCOT/E3 assessment, p. 6 · text copy line 300 · heading above: 0.52 days per year with the addition of the PCM)

BEFORE: …n variability is limited by the $1 billion gross cost cap.16 Resource margins for various resource classes are generally similar between the energy-only and PCM market designs. o For dispatchable resources, the PCM revenues are largely offset by decreases in energy and ancillary service revenues. o 
QUOTE: The only resource classes that see a change of greater than one percent of expected revenues are battery storage and wind. Battery storage sees a 29% increase in margins under PCM while wind resources see a 1.2% reduction in margins.
AFTER:  16 ERCOT/E3 Assessment at 42. Project No. 55000 o Staff Recommendation Page 6 of 9 The selected PCM decreases the volatility of natural gas CT margins slightly relative to the energy-only equilibrium case, but this decrease is limited due to the cost limitations of the PCM design. • The seasonal ri…

### e38 · `puct-pcm-staff-rec` · tier 2 · PUCT Project 55000, Staff Recommendation on the Performance Credit Mechanism (December 2024)
locator: Project 55000, Staff Recommendation, Staff's Final Recommendation, p. 2 · text copy line 72

BEFORE: … Project No. 55000, Item 46, Revised IMM Evaluation of PCM (IMM Assessment). Project No. 55000 Staff Recommendation Page 2 of 9 Staff's Final Recommendation Staff appreciates the work ofERCOT, E3, the IMM, and the entire stakeholder community for their work on the PCM over the past couple of years. 
QUOTE: After reviewing the ERCOT/E3 and IMM assessments, Staff recommends not moving forward with the PCM as currently designed.
AFTER:  Using the chosen design parameters, the PCM results in minimal additional resource adequacy value. The ERCOT/E3 assessment showed that, while the PCM would improve the resource adequacy picture in ERCOT, the additional capacity that would be incentivized is minimal. • The PCM, as designed, is antic…

## Statements to check (new or changed since the last audit)

- **Link to energy-storage-resource** (cites e1): related Energy Storage Resource (ESR): The ESR topic covers what a battery is in ERCOT; this one covers how it earns money. [e1]
- **Link to ancillary-services** (cites e5): part-of Ancillary Services (AS): Ancillary service revenue was the main ESR income until saturation pushed batteries toward energy arbitrage. [e5]
- **Link to rtc-b** (cites e9): affects RTC+B (Real-Time Co-optimization + Batteries): ERCOT's pre-go-live RTC+B overview said SCED can award energy and several AS types to one ESR in the same run, limited by state of charge. [e9]
- **Link to negative-prices** (cites e5, e13): related Negative Prices: Energy arbitrage means buying when prices are low, and ESRs can often charge at prices below $0 where added load resolves congestion. [e5][e13]
- **Link to offer-cap** (cites e12): related Offer Caps (HCAP / LCAP / SWCAP): ERCOT links a higher share of ESR offers near the cap in summer 2026 to the lower $2,000/MWh real-time cap under RTC+B. [e12]
- **Link to drrs** (cites e27, e29) FLAG number-not-in-quote: 2026: related DRRS (Dispatchable Reliability Reserve Service): Under pending NPRR1309 a DRRS provider must run at HSL for four consecutive hours, and ERCOT filed NPRR1340 in June 2026 to carry the storage participation discussion forward. [e27][e29]
- **Link to pcm** (cites e37, e38): related PCM (Performance Credit Mechanism): PUCT staff reported E3's finding that battery storage margins would rise 29% under the PCM, but recommended not moving forward with the PCM as designed. [e37][e38]
- **Link to non-spin** (cites e25): related Non-Spinning Reserve: Non-Spin capability must be sustainable for four consecutive hours today, which limits how much Non-Spin a battery can carry per MWh. [e25]

