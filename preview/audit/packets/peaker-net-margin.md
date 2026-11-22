# Audit packet: Peaker Net Margin (PNM) (peaker-net-margin)

kind metric · domain reliability · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(4) · text copy line 40

BEFORE: … operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh). (3) For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT. (4) 
QUOTE: Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP - POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP - POC >0.
AFTER:  (5) Each day, ERCOT will post at a publicly accessible location on its website the updated value of the peaker net margin, in dollars per megawatt (MW). (6) System-Wide Offer Caps. (A) The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour fo…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c) · text copy line 2261 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …e submission. 4.4.11.1 Scarcity Pricing Mechanism (1) ERCOT shall operate the scarcity pricing mechanism in accordance with the PUCT Substantive Rules. The methodology for determining the scarcity pricing mechanism is as follows: (a) The scarcity pricing mechanism operates on a calendar year basis. 
QUOTE: (b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price.
AFTER:  (d) For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows: ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0 (2) By the end of the next Business Day following the applicable Operating Day, E…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (3)(a) · text copy line 2271 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …for all past intervals in the year as follows: ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0 (2) By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website. (3) 
QUOTE: When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner: (a) On the Operating Day that the PNM exceeds the PNM threshold, the HCAP will remain in effect for the balance of the day and for the Operating Day thereafter (Days 1 and 2).
AFTER:  (b) On the Operating Day after the PNM exceeds the PNM threshold (Day 2) prior to the execution of DAM, ERCOT shall send a Market Notice that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3). (c) For…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, Net revenue overview · text copy line 7408

BEFORE: …y to reflect the higher value of available generation. These price spikes allow generators to recover fixed costs and incentivize new investment. In ERCOT's energy-only market, shortage pricing is the primary mechanism that drives revenue and signals investment decisions. • Peaker Net Margin (PNM): 
QUOTE: PNM estimates the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. Comparing PNM with CONE helps market participants determine whether revenues are sufficient to support new generation or whether additional incentives may be needed before they decide to invest in new generation.
AFTER:  1. Key Reports ERCOT communicates future resource adequacy expectations through several reports that give market participants insight into conditions over different timeframes. • The Monthly Outlook for Resource Adequacy (MORA) provides a short-term assessment of expected supply and demand conditio…

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, section E, Peaker Net Margin · text copy line 7696

BEFORE: …s are not inherently problematic, but instead reflect the cyclical dynamics of an energy-only market balancing supply, demand, and investment over time. E. Peaker Net Margin PNM is a simplified benchmark for the annual net revenue that a hypothetical gas peaking unit could earn in the ERCOT market. 
QUOTE: If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT's history, on February 16, 2021, during Winter Storm Uri.
AFTER:  Figure 57 shows the PNM values for the past seven years. ERCOT's PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and exclude…

### e10 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(D) · text copy line 60

BEFORE: …our for ancillary service offers. (C) The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants. (D) 
QUOTE: If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year.
AFTER:  In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year. (7) Reimburseme…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, section E, Peaker Net Margin · text copy line 7702

BEFORE: …e rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT's history, on February 16, 2021, during Winter Storm Uri. Figure 57 shows the PNM values for the past seven years. 
QUOTE: ERCOT's PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates.
AFTER: 64 As discussed earlier, the value for CONE used to calculate the peaker net margin threshold is still the legacy value of $105 per kW-year, as illustrated in Figure 57. 64 Based on §25.509(b)(2): https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.509/25.509.pdf 2025 S…

### e15 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(c)(1) · text copy line 78

BEFORE: …e real-time energy price for the resource. ERCOT must utilize existing settlement processes to the extent possible to verify the resource entity's costs for reimbursement. (c) Emergency Pricing Program (EPP). ERCOT will administer the EPP. The EPP will operate as follows. (1) Activation of the EPP. 
QUOTE: The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period.
AFTER:  §25.509--1 effective 12/20/23 (P 54585) CHAPTER 25. SUBSTANTIVE RULES APPLICABLE TO ELECTRIC SERVICE PROVIDERS. Subchapter S. WHOLESALE MARKETS. (2) (3) (4) (5) (6) (7) (d) Emergency Offer Cap (ECAP). While the EPP is active, the system-wide offer cap will be set to the ECAP for both energy and anc…

### e18 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(D) · text copy line 62

BEFORE: … exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. 
QUOTE: In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year.
AFTER:  (7) Reimbursement for Operating Losses when the LCAP is in Effect. When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource. ERCOT must utilize existing …

### e26 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Fuel Index Price (FIP) · text copy line 1103

BEFORE: …cy Response includes, but may not be limited to, capacity from duct firing, auxiliary boilers, and other methods that do not immediately respond, arrest, or stabilize frequency excursions following a disturbance without secondary frequency response or instructions from ERCOT. Fuel Index Price (FIP) 
QUOTE: The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu).
AFTER:  ERCOT shall issue a Market Notice disclosing the name of the ERCOT-selected source for the average daily index prices used to calculate FIP. In the event that the ERCOT-selected source becomes unavailable, or ERCOT determines that the source has become unsuitable for the intended purpose, ERCOT may…

### e35 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 121 (OCR), Resource Adequacy, E. Peaker Net Margin · text copy line 7772

BEFORE: …argin ($ Thousands/MWh) $800 2021 $700 $600 $500 $400 Peaker Net Margin Threshold (3xCONE) $300 2023 $200 2022 2019 2024 2018 2020 Cost of New Entry $100 $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec It is important to note that our net revenue calculation differs from ERCOT's PNM methodology. 
QUOTE: In our analysis, we assume a heat rate of 10.5 MMBtu per MWh, include variable O&M costs of $4 per MWh, and apply a total outage rate of 10%, which we believe reflects a more realistic estimate of generator performance and costs.
AFTER:  By contrast, ERCOT's PNM calculation uses a simplified approach with a 10.0 MMBtu per MWh heat rate and excludes both 52 https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.509/25.509.pdf 53 The proxy combustion turbine in the Peaker Net Margin calculation assumes a he…

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I, all-in price discussion (p. 2) · text copy line 1339

BEFORE: …ses referred to as uplift. The all-in price metric includes the load-weighted average real-time market prices across all zones plus ancillary service and uplift costs, divided by realtime load to show costs on a per MWh basis.1 Energy prices include nodal energy prices and the two price adders: • 1 
QUOTE: The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and
AFTER:  For this analysis "uplift" includes: Reliability Adder Imbalance Settlement, ORDC Adder Imbalance Settlement, Revenue Neutrality Allocation, Emergency Energy Charges, Base Point Deviation Payments, ERS Settlement, Black Start Service Settlement, Block Load Transfer Settlement, Firm Fuel Service Set…

## Statements to check (new or changed since the last audit)

- **Link to offer-cap** (cites e7, e10): determines Offer Caps (HCAP / LCAP / SWCAP): When PNM exceeds the threshold, the system-wide offer cap drops from the HCAP to the LCAP for the rest of the calendar year. [e7][e10]
- **Link to puct** (cites e1, e10) FLAG number-not-in-quote: 25.509: regulates PUCT (Public Utility Commission of Texas): The PUCT's rule 25.509 defines the PNM formula and sets the system-wide offer cap to the LCAP if PNM exceeds the threshold. [e1][e10]
- **Link to emergency-pricing-program** (cites e1, e15): contrasts-with Emergency Pricing Program: The Emergency Pricing Program is triggered by hours at the cap in a rolling 24 hours, while PNM is a cumulative annual measure. [e1][e15]
- **Link to resource-adequacy** (cites e8): used-in Resource Adequacy: The IMM uses PNM compared with the cost of new entry as a benchmark for whether market revenues support new generation. [e8]
- **Link to energy-only-market** (cites e9): part-of Energy-Only Market Design: The PNM threshold mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. [e9]
- **Link to winter-storm-uri** (cites e9): example-of Winter Storm Uri (Feb 2021): The threshold has been reached only once, in February 2021 during Winter Storm Uri. [e9]
- **Link to state-of-market-report** (cites e8): related IMM State of the Market Report: The IMM State of the Market report discusses PNM in its Resource Adequacy chapter. [e8]
- **Link to ordc** (cites e18, e44): related ORDC (Operating Reserve Demand Curve): When the PNM switch moves the cap to the LCAP, the PUCT rule says ERCOT continues to apply the operating reserve demand curve and the reliability deployment price adder for the rest of that year; the IMM says the ORDC adder was discontinued in December 2025 with RTC. [e18][e44]
- **Link to asdc** (cites e7): affects ASDC (Ancillary Service Demand Curves): When PNM exceeds the threshold, the VOLL used to determine the ASDCs for the DAM and RTM is changed to the LCAP along with the day-ahead cap. [e7]
- **Link to heat-rate** (cites e11, e35): related Heat Rate: ERCOT's PNM uses a fixed 10.0 MMBtu per MWh heat rate and ten times the daily gas index, while the IMM's net revenue analysis uses 10.5 MMBtu per MWh. [e11][e35]
- **Link to natural-gas-price** (cites e3, e26): related Natural Gas Prices (Henry Hub): The peaking operating cost is ten times the Fuel Index Price, the daily Katy Hub gas price. [e3][e26]
- **Link to spark-spread** (cites e1, e3): related Spark Spread: PNM is a spark-spread-like measure with a fixed 10 heat rate and the Hub Average 345 kV Hub price. [e1][e3]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Example) Suppose gas is $4/MMBtu, so POC is $40/MWh. An interval at $140/MWh adds (140 - 40) x 0.25 = $25/MW; an interval at $30/MWh adds nothing.

