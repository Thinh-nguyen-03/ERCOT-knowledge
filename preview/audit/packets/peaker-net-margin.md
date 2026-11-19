# Audit packet: Peaker Net Margin (PNM) (peaker-net-margin)

kind metric · domain reliability · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(4) · text copy line 40

BEFORE: … operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh). (3) For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT. (4) 
QUOTE: Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP - POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP - POC >0.
AFTER:  (5) Each day, ERCOT will post at a publicly accessible location on its website the updated value of the peaker net margin, in dollars per megawatt (MW). (6) System-Wide Offer Caps. (A) The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour fo…

### e2 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(2) · text copy line 34

BEFORE: …emand response and is registered with ERCOT as a load resource. (6) Resource entity -- an entity that is a generation entity or a load entity. (b) Scarcity Pricing Mechanism (SPM). ERCOT will administer the SPM. The SPM will operate as follows: (1) The SPM will operate on a calendar year basis. (2) 
QUOTE: For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh).
AFTER:  (3) For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT. (4) Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP - POC) * (number of minutes in a settlement interval / …

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c) · text copy line 2261 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …e submission. 4.4.11.1 Scarcity Pricing Mechanism (1) ERCOT shall operate the scarcity pricing mechanism in accordance with the PUCT Substantive Rules. The methodology for determining the scarcity pricing mechanism is as follows: (a) The scarcity pricing mechanism operates on a calendar year basis. 
QUOTE: (b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price.
AFTER:  (d) For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows: ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0 (2) By the end of the next Business Day following the applicable Operating Day, E…

### e4 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (1)(d) · text copy line 2265 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …ar year basis. (b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price. (d) 
QUOTE: For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows:
AFTER:  ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0 (2) By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website. (3) When the calculated PNM exceeds PNM threshold …

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (2) · text copy line 2269 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …rgy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price. (d) For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows: ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0 (2) 
QUOTE: By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website.
AFTER:  (3) When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner: (a) On the Operating Day that the PNM exceeds the PNM threshold, the…

### e6 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(f) · text copy line 2233 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …he EPP. The report shall also include the number of Resources for which Qualified Scheduling Entities (QSEs) filed for cost recovery and the total dollar amount of costs submitted and costs recovered, including fuel type, MW per hour, and number of Resources associated with the recovered costs. (f) 
QUOTE: For the PNM process described above, ERCOT shall set the PNM threshold at three times the cost of new entry of new generation plants.
AFTER:  The above parameters are defined as follows: --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

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

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, executive-summary bullets on net revenue · text copy line 7354

BEFORE: …a CONE of $140 per kW-year while leaving the legacy CONE of $105 per kW-year in place to determine the peaker net margin threshold. • Net revenues in 2024 and 2025 were significantly lower than in previous years. Years with lower net revenues occur often and are not a threat to resource adequacy. • 
QUOTE: The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024. The PNM did not reach the PNM threshold that would reduce the system-wide offer cap in ERCOT.
AFTER:  The threshold has been reached only once in ERCOT's history, in February 2021 during Winter Storm Uri. • ERCOT is currently conducting its 2026 Reliability Standard Assessment. The assessment evaluates whether ERCOT meets the standard in 2026 and models whether the ERCOT power system is likely to m…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Resource Adequacy chapter, Cost of New Entry · text copy line 7616

BEFORE: …ntaining system reliability. 2025 State of the Market Report | 101 / / Resource Adequacy For more than a decade prior to 2024, ERCOT used a CONE value of $105 per kW-year as an input to planning and reliability studies and as the basis for the peaker net margin threshold in scarcity pricing design. 
QUOTE: In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold.
AFTER:  In parallel with ERCOT's 2026 Reliability Standard Assessment (RSA), ERCOT is conducting an additional review of CONE to align cost assumptions with potential reliability pathways. Although CONE is not a direct input to the RSA, ERCOT has noted that certain recommendations for achieving the standar…

### e15 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(c)(1) · text copy line 78

BEFORE: …e real-time energy price for the resource. ERCOT must utilize existing settlement processes to the extent possible to verify the resource entity's costs for reimbursement. (c) Emergency Pricing Program (EPP). ERCOT will administer the EPP. The EPP will operate as follows. (1) Activation of the EPP. 
QUOTE: The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period.
AFTER:  §25.509--1 effective 12/20/23 (P 54585) CHAPTER 25. SUBSTANTIVE RULES APPLICABLE TO ELECTRIC SERVICE PROVIDERS. Subchapter S. WHOLESALE MARKETS. (2) (3) (4) (5) (6) (7) (d) Emergency Offer Cap (ECAP). While the EPP is active, the system-wide offer cap will be set to the ECAP for both energy and anc…

### e14 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (3)(c) · text copy line 2277 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …2). (b) On the Operating Day after the PNM exceeds the PNM threshold (Day 2) prior to the execution of DAM, ERCOT shall send a Market Notice that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3). (c) 
QUOTE: For the Operating Day two days after the PNM threshold is exceeded (Day 3) and through the end of the calendar year, DAM and RTM will use the LCAP and ASDCs reflecting the updated VOLL.
AFTER:  (d) On December 31, for Operating Day January 1, DASWCAP and the VOLL used to determine the ASDCs for the DAM and RTM will be reset to the HCAP for DAM for the new Resource adequacy cycle. 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market (1) This…

## Statements to check

- **Definition #1** (cites e1, e8): Peaker net margin (PNM) is a running calendar-year sum of how much the real-time energy price exceeds a notional peaking plant's operating cost, calculated for each settlement interval when the price is above that cost. [e1] The IMM describes it as an estimate of the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. [e8]
- **How it works #1** (cites e2, e3, e4, e5): The peaking operating cost (POC) for each day is ten times the daily natural gas price index (the protocol calls it the effective daily fuel index price, FIP). [e2][e3] The real-time energy price in the test is the ERCOT Hub Average 345 kV Hub price, and PNM accumulates in dollars per MW across all past intervals in the year. [e3][e4] ERCOT posts the updated PNM and current day-ahead cap on its website by the end of the next business day. [e5]
- **How it works #2** (cites e6, e9, e10, e7, e14): The threshold is three times the cost of new entry, which the IMM puts at $315 per kW-year. [e6][e9] If PNM exceeds it, the system-wide offer cap drops to the LCAP for the rest of the calendar year: the HCAP stays for the day of the crossing and the next Operating Day, with the LCAP effective from Day 3. [e10][e7][e14]
- **ERCOT context #1** (cites e9, e12, e11): The IMM says the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 PNM reached almost $79 per kW, about 21% below 2024, and did not reach the threshold. [e12] The IMM stresses that PNM is not a true net revenue measure: it uses protocol-specified values, a 10.0 MMBtu per MWh heat rate, and excludes variable O&M costs and outage rates. [e11]
- **ERCOT context #2** (cites e13, e8) FLAG number-not-in-quote: $140: The threshold is still based on the legacy cost of new entry of $105 per kW-year; in July 2024 the PUCT approved $140 per kW-year for planning purposes but kept $105 for the PNM threshold. [e13] Comparing PNM with CONE is the IMM's check on whether market revenues are enough to support new generation. [e8]
- **Key facts #1** (cites e2, e3): - POC is ten times the daily gas price index; RTEP is the Hub Average 345 kV Hub price. [e2][e3]
- **Key facts #2** (cites e6, e9): - PNM threshold is three times CONE, which the IMM states as $315 per kW-year. [e6][e9]
- **Key facts #3** (cites e10, e7, e14): - When exceeded, the cap falls to the LCAP for the rest of the calendar year, effective Day 3. [e10][e7][e14]
- **Key facts #4** (cites e9): - Only once in ERCOT's history (February 16, 2021). [e9]
- **Key facts #5** (cites e12): - 2025 PNM: almost $79 per kW, roughly 21% lower than 2024. [e12]
- **Common confusion #1** (cites e11, e1, e15): PNM is not the same as the net revenue the IMM reports for real units, because it uses fixed protocol values and ignores variable O&M and outages. [e11] It also resets each calendar year, so it is different from the Emergency Pricing Program's rolling 24-hour trigger. [e1][e15]
- **Questions #2** (cites e1, e3, e4): For each settlement interval where the Hub Average 345 kV price exceeds the POC (ten times the daily gas index), the difference times the interval length is added to a cumulative annual total in dollars per MW. [e1][e3][e4]
- **Questions #4** (cites e10, e7): The cap goes to the LCAP for the rest of the calendar year, after the HCAP stays for the day of the crossing and the next Operating Day. [e10][e7]
- **Questions #6** (cites e13, e9) FLAG number-not-in-quote: $140: The PUCT retained the legacy $105 per kW-year CONE for the PNM threshold when it approved $140 for planning in July 2024; three times $105 is $315. [e13][e9]
- **Link to offer-cap** (cites e7, e10): determines Offer Caps (HCAP / LCAP / SWCAP): When PNM exceeds the threshold, the system-wide offer cap drops from the HCAP to the LCAP for the rest of the calendar year. [e7][e10]
- **Link to puct** (cites e1, e10) FLAG number-not-in-quote: 25.509: regulates PUCT (Public Utility Commission of Texas): The PUCT's rule 25.509 defines the PNM formula and sets the system-wide offer cap to the LCAP if PNM exceeds the threshold. [e1][e10]
- **Link to emergency-pricing-program** (cites e1, e15): contrasts-with Emergency Pricing Program: The Emergency Pricing Program is triggered by hours at the cap in a rolling 24 hours, while PNM is a cumulative annual measure. [e1][e15]
- **Link to resource-adequacy** (cites e8): used-in Resource Adequacy: The IMM uses PNM compared with the cost of new entry as a benchmark for whether market revenues support new generation. [e8]
- **Link to energy-only-market** (cites e9): part-of Energy-Only Market Design: The PNM threshold mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. [e9]
- **Link to winter-storm-uri** (cites e9): example-of Winter Storm Uri (Feb 2021): The threshold has been reached only once, in February 2021 during Winter Storm Uri. [e9]
- **Link to state-of-market-report** (cites e8): related IMM State of the Market Report: The IMM State of the Market report discusses PNM in its Resource Adequacy chapter. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) Peaker net margin tracks, year to date, how much a hypothetical gas peaker would have earned above its fuel cost. If it passes three times the cost of new entry, ERCOT drops the price cap for the rest of the year; that has happened once, in Winter Storm Uri.

