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

### e16 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(A)-(B), System-Wide Offer Caps (copy effective 12/20/23) · text copy line 49

BEFORE: …umber of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP - POC >0. (5) Each day, ERCOT will post at a publicly accessible location on its website the updated value of the peaker net margin, in dollars per megawatt (MW). (6) System-Wide Offer Caps. (A) 
QUOTE: The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers.
AFTER:  (C) The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds …

### e17 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(C) · text copy line 55

BEFORE: …fer Caps. (A) The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers. (C) 
QUOTE: The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants.
AFTER:  (D) If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. In this event, ERCOT will continue to apply the operating reserve demand curve and …

### e18 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(D) · text copy line 62

BEFORE: … exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. 
QUOTE: In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year.
AFTER:  (7) Reimbursement for Operating Losses when the LCAP is in Effect. When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource. ERCOT must utilize existing …

### e19 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(7), Reimbursement for Operating Losses when the LCAP is in Effect · text copy line 67

BEFORE: …rating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year. (7) Reimbursement for Operating Losses when the LCAP is in Effect. 
QUOTE: When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource.
AFTER:  ERCOT must utilize existing settlement processes to the extent possible to verify the resource entity's costs for reimbursement. (c) Emergency Pricing Program (EPP). ERCOT will administer the EPP. The EPP will operate as follows. (1) Activation of the EPP. The EPP must be activated if the system-wi…

### e20 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(d), Review of System-Wide Offer Cap Programs · text copy line 172

BEFORE: …he real-time energy price, exclusive of any congestion, to determine the system-wide energy price, until any system and protocol changes are complete. ERCOT must issue a market notice when it transitions from a manual to an automated EPP activation process. Review of System-Wide Offer Cap Programs. 
QUOTE: Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program.
AFTER:  §25.509--2 effective 12/20/23 (P 54585) CHAPTER 25. SUBSTANTIVE RULES APPLICABLE TO ELECTRIC SERVICE PROVIDERS. Subchapter S. WHOLESALE MARKETS. (e) Development and Implementation. ERCOT must use a stakeholder process, in consultation with commission staff, to develop and implement rules that compl…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a) parameter table (np-04 edition effective 2026-08-01), PNM threshold · text copy line 2248 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------- ------------- --------------------------------------------- ECAP $/MWh 2,000 HCAP - DAM (DASWCAP) $/MWh 5,000 HCAP - RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 
QUOTE: PNM threshold $/MW-year 315,000
AFTER:  * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise directed by the ERCOT Board. ERCOT shall provide a Mark…

### e22 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a) parameter table, HCAP rows · text copy line 2242 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------- --------------------------------------------- ECAP $/MWh 2,000 
QUOTE: HCAP - DAM (DASWCAP) $/MWh 5,000 HCAP - RTM (RTSWCAP) $/MWh 2,000
AFTER:  LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000 * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise direct…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (1)(d), equation · text copy line 2267 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …ulated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price. (d) For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows: 
QUOTE: ∑((RTEP - POC) * (0.25)) for each Settlement Interval where (RTEP - POC) > 0
AFTER:  (2) By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website. (3) When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and…

### e24 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (3)(d) · text copy line 2279 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …he ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3). (c) For the Operating Day two days after the PNM threshold is exceeded (Day 3) and through the end of the calendar year, DAM and RTM will use the LCAP and ASDCs reflecting the updated VOLL. (d) 
QUOTE: On December 31, for Operating Day January 1, DASWCAP and the VOLL used to determine the ASDCs for the DAM and RTM will be reset to the HCAP for DAM for the new Resource adequacy cycle.
AFTER:  4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market (1) This Section describes the process for determining ASDCs for Reg-Up, Reg-Down, RRS, ECRS, and Non-Spin for the DAM and RTM. This section does not apply to ASDCs used in the RUC process. +------…

### e25 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11.1, paragraph (3)(b) · text copy line 2275 · heading above: 4.4.11.1 Scarcity Pricing Mechanism

BEFORE: …SDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner: (a) On the Operating Day that the PNM exceeds the PNM threshold, the HCAP will remain in effect for the balance of the day and for the Operating Day thereafter (Days 1 and 2). (b) 
QUOTE: On the Operating Day after the PNM exceeds the PNM threshold (Day 2) prior to the execution of DAM, ERCOT shall send a Market Notice that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will both be changed to LCAP, effective for the following Operating Day (Day 3).
AFTER:  (c) For the Operating Day two days after the PNM threshold is exceeded (Day 3) and through the end of the calendar year, DAM and RTM will use the LCAP and ASDCs reflecting the updated VOLL. (d) On December 31, for Operating Day January 1, DASWCAP and the VOLL used to determine the ASDCs for the DAM…

### e26 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Fuel Index Price (FIP) · text copy line 1103

BEFORE: …cy Response includes, but may not be limited to, capacity from duct firing, auxiliary boilers, and other methods that do not immediately respond, arrest, or stabilize frequency excursions following a disturbance without secondary frequency response or instructions from ERCOT. Fuel Index Price (FIP) 
QUOTE: The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu).
AFTER:  ERCOT shall issue a Market Notice disclosing the name of the ERCOT-selected source for the average daily index prices used to calculate FIP. In the event that the ERCOT-selected source becomes unavailable, or ERCOT determines that the source has become unsuitable for the intended purpose, ERCOT may…

### e27 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(3) · text copy line 37

BEFORE: …ERCOT will administer the SPM. The SPM will operate as follows: (1) The SPM will operate on a calendar year basis. (2) For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh). (3) 
QUOTE: For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT.
AFTER:  (4) Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP - POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP - POC >0. (5) Each day, ERCOT will post at a publicly accessible location on its we…

### e28 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 122 (OCR), Resource Adequacy, Peaker Net Margin in 2021 · text copy line 4855

BEFORE: …TAC § 25.505, the system-wide offer cap is set equal to the high system-wide offer cap (HCAP) at the beginning of each calendar year and maintained at this level until the PNM during a calendar year exceeds a threshold of three times the annual cost of new entry of new generation plants ($315,000). 
QUOTE: This figure shows that the $315,000 PNM threshold was exceeded for the first time in ERCOT's history during the ERCOT operating day of February 16, 2021.
AFTER:  Once the peaker net margin threshold is achieved, the system-wide offer cap is set at the low system-wide offer (LCAP) for the remainder of the calendar year. The LCAP is set at the greater of either $2,000 per MWh and $2,000 per MW per hour or 50 times the natural gas price index value determined …

### e29 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 122 (OCR), Resource Adequacy, Peaker Net Margin in 2021 · text copy line 4858

BEFORE: …hows that the $315,000 PNM threshold was exceeded for the first time in ERCOT's history during the ERCOT operating day of February 16, 2021. Once the peaker net margin threshold is achieved, the system-wide offer cap is set at the low system-wide offer (LCAP) for the remainder of the calendar year. 
QUOTE: The LCAP is set at the greater of either $2,000 per MWh and $2,000 per MW per hour or 50 times the natural gas price index value determined by ERCOT. However, the exceptionally high natural gas prices $400/MMBtu during Winter Storm Uri (up to $400/MMBtu or more than 100 times normal levels) caused the LCAP rise to more than double the HCAP.
AFTER:  Therefore, the Commission suspended use of the 87 The proxy combustion turbine in the Peaker Net Margin calculation assumes a heat rate of 10 MMBtu per MWh and includes no other variable operating costs or startup costs. 94 | 2021 State of the Market Report / / Resource Adequacy LCAP on March 3 to …

### e30 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 123 (OCR), Resource Adequacy, Peaker Net Margin in 2021 · text copy line 4875

BEFORE: …an double the HCAP. Therefore, the Commission suspended use of the 87 The proxy combustion turbine in the Peaker Net Margin calculation assumes a heat rate of 10 MMBtu per MWh and includes no other variable operating costs or startup costs. 94 | 2021 State of the Market Report / / Resource Adequacy 
QUOTE: LCAP on March 3 to avoid outcomes contrary to the purpose of the rule, which was to protect consumers from sustained high prices in years with exceptional generator revenues.
AFTER: 88 Once the natural gas prices had stabilized and the LCAP was no longer expected to exceed the HCAP, and the Commission reinstituted the application of the LCAP.89 Figure 61: Peaker Net Margin The Commission made an additional change to the LCAP in PUC Project No. 51871, Review of the ERCOT Scarcit…

### e31 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 115 (OCR), Resource Adequacy, Peaker Net Margin in 2022 · text copy line 4780

BEFORE: …TAC § 25.505, the system-wide offer cap is set equal to the high system-wide offer cap (HCAP) at the beginning of each calendar year and maintained at this level until the PNM during a calendar year exceeds a threshold of three times the annual cost of new entry of new generation plants ($315,000). 
QUOTE: This figure shows that PNM results in 2022 were higher than any other year except 2021, but still nowhere near reaching the $315,000 PNM threshold.
AFTER:  That threshold was exceeded for the first and only time in ERCOT's history during the ERCOT operating day of February 16, 2021. 86 The relatively high PNM results in 2022 were likely due to a combination of hotter temperatures that increased summer loads and changes to the ORDC. Also of note was th…

### e32 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 115 (OCR), Resource Adequacy, Peaker Net Margin in 2022 · text copy line 4785

BEFORE: …,000 PNM threshold. That threshold was exceeded for the first and only time in ERCOT's history during the ERCOT operating day of February 16, 2021. 86 The relatively high PNM results in 2022 were likely due to a combination of hotter temperatures that increased summer loads and changes to the ORDC. 
QUOTE: Also of note was the PNM accumulation of $32k/MW-yr in the winter months (includes January, February, and December) of 2022.
AFTER:  Aside from the winter of 2021, this is the highest recorded winter PNM total and is almost one third of the current CONE. A large portion of this high winter PNM accumulation was due to record winter demand during Winter Storm Elliot on December 23, 2022, and tight system conditions on February 24,…

### e33 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 115 (OCR), Resource Adequacy, Shortage Pricing and the Peaker Net Margin in 2023 · text copy line 5061

BEFORE: …nd a selection of historical years. Figure 49: Peaker Net Margin $769K $707K $350,000 2021 Peaker Net Margin Threshold (3xCONE) Peaker Net Margin ($/MW) $300,000 $250,000 2023 $200,000 2022 2019 $150,000 Cost of New Entry $100,000 2018 2020 $50,000 $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 
QUOTE: This figure shows that PNM results in 2023 were higher than any other year except 2021, totaling approximately $263,968, but still well below the $315,000 PNM threshold.
AFTER:  The PNM threshold was exceeded for the first and only time in ERCOT's history during the ERCOT operating day of February 16, 2021. 89 The relatively high PNM results in 2023 were largely due to the impact of the implementation of ECRS on real-time energy prices, as the first spike in the metric occ…

### e34 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 115 (OCR), Resource Adequacy, Shortage Pricing and the Peaker Net Margin in 2023 · text copy line 5064

BEFORE: … figure shows that PNM results in 2023 were higher than any other year except 2021, totaling approximately $263,968, but still well below the $315,000 PNM threshold. The PNM threshold was exceeded for the first and only time in ERCOT's history during the ERCOT operating day of February 16, 2021. 89 
QUOTE: The relatively high PNM results in 2023 were largely due to the impact of the implementation of ECRS on real-time energy prices, as the first spike in the metric occurred in mid-June immediately after ECRS was introduced.
AFTER:  Most subsequent increases were also due to the effects of the increased sequestering of resources providing 10-minute reserves from the real-time energy market. Absent these inefficient price effects, the PNM in 2023 would have been well-below 2019 and 2022, which both exhibited much more frequent …

### e35 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 121 (OCR), Resource Adequacy, E. Peaker Net Margin · text copy line 7772

BEFORE: …argin ($ Thousands/MWh) $800 2021 $700 $600 $500 $400 Peaker Net Margin Threshold (3xCONE) $300 2023 $200 2022 2019 2024 2018 2020 Cost of New Entry $100 $0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec It is important to note that our net revenue calculation differs from ERCOT's PNM methodology. 
QUOTE: In our analysis, we assume a heat rate of 10.5 MMBtu per MWh, include variable O&M costs of $4 per MWh, and apply a total outage rate of 10%, which we believe reflects a more realistic estimate of generator performance and costs.
AFTER:  By contrast, ERCOT's PNM calculation uses a simplified approach with a 10.0 MMBtu per MWh heat rate and excludes both 52 https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.509/25.509.pdf 53 The proxy combustion turbine in the Peaker Net Margin calculation assumes a he…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 119 (OCR), Resource Adequacy, key points · text copy line 7349

BEFORE: …cause it may affect the market design options that ERCOT proposes to meet the reliability standard in 2029 as part of its 2026 assessment. In 2024, the PUCT approved a CONE of $140 per kW-year while leaving the legacy CONE of $105 per kW-year in place to determine the peaker net margin threshold. • 
QUOTE: Net revenues in 2024 and 2025 were significantly lower than in previous years. Years with lower net revenues occur often and are not a threat to resource adequacy.
AFTER:  • The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024. The PNM did not reach the PNM threshold that would reduce the system-wide offer cap in ERCOT. The threshold has been reached only once in ERCOT's history, in February 2021 during Winter Storm Uri. • …

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 122 (OCR), Resource Adequacy, 2. Net Revenue by Location · text copy line 7524

BEFORE: …ces). Figure 55 shows a wide gap in net revenues between the West and Houston. Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area. 
QUOTE: The price gap between the two hubs widened in 2025 because the import constraint in the Permian Basin substantially increased congestion costs in the region.
AFTER:  As work on these projects concludes, we expect the gap between the two hubs to narrow again. 100 | 2025 State of the Market Report / / Resource Adequacy Figure 55: Net Revenues by Location 2025 $C! $%! #! "! /(W;F*H<(, =F0;<,. /(W;<,.9 />?T. S(TN0 -.*H S(FH5 8N,5N,9T. 4(0H5 /(N*HNT S(FH5.N*H 4(0H52…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 123 (OCR), Resource Adequacy, Figure 55 discussion · text copy line 7591

BEFORE: …H.0.N*H -.*H '(F*H(, -.*H ! '(F*H(, !"#$%"&"'(")$*+$,"-$./0N"2-3 %!! -<,9 Figure 55 also shows net revenues for wind and solar generation at multiple locations. The profitability of these resources depends primarily on local wind or solar penetration and market prices during periods of high output. 
QUOTE: In 2025, net revenues for wind and solar were lower than net revenues for gas-fired technologies in all areas.
AFTER:  D. Cost of New Entry CONE represents the estimated annualized revenue requirement for a marginal new generating resource, typically a gas-fired unit, to recover capital and fixed operating costs over the resource's economic life. The reference technology reflects the type and configuration of gener…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 123 (OCR), Resource Adequacy, D. Cost of New Entry · text copy line 7594

BEFORE: …ation at multiple locations. The profitability of these resources depends primarily on local wind or solar penetration and market prices during periods of high output. In 2025, net revenues for wind and solar were lower than net revenues for gas-fired technologies in all areas. D. Cost of New Entry 
QUOTE: CONE represents the estimated annualized revenue requirement for a marginal new generating resource, typically a gas-fired unit, to recover capital and fixed operating costs over the resource's economic life.
AFTER:  The reference technology reflects the type and configuration of generation that a merchant investor would most likely develop in response to market price signals. Functionally, CONE serves as a levelized capacity cost benchmark, expressed on a per-kW-year basis, that captures the amortized cost of …

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 122 (OCR), Resource Adequacy, Peaker Net Margin and Shortage Pricing · text copy line 7511

BEFORE: …ing mechanism play a crucial role in shaping net revenue and investment signals in the electricity market. The PNM estimates the annual net revenue a peaking unit could earn from the energy and ancillary service markets and serves as a benchmark for whether market conditions support new investment. 
QUOTE: If the PNM approaches or exceeds the CONE, it suggests that market revenues are sufficient to support new generation for that year.
AFTER:  Shortage pricing supports revenue by raising energy prices when operating reserves fall below predefined thresholds, ensuring that generators are compensated for providing reliability during shortage conditions. The Reliability Deployment Price Adder (RDPA) also raises energy prices by accounting f…

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 124 (OCR), Resource Adequacy, Updates to CONE · text copy line 7620

BEFORE: …scarcity pricing design. In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold. 
QUOTE: In parallel with ERCOT's 2026 Reliability Standard Assessment (RSA), ERCOT is conducting an additional review of CONE to align cost assumptions with potential reliability pathways.
AFTER:  Although CONE is not a direct input to the RSA, ERCOT has noted that certain recommendations for achieving the standard may depend on CONE, which makes an updated assessment appropriate. To support this effort, ERCOT engaged the Brattle Group to perform an accelerated CONE study informed by Brattle…

### e42 · `ercot-nprr1216-puct-report` · tier 1 · NPRR1216 PUCT Report (implementation of Emergency Pricing Program) (PUCT approved 2024-09-26)
locator: NPRR1216 PUCT report (Board approval September 26, 2024), proposed Section 4.4.11 language, paragraph (1)(a)(ii) · text copy line 319 · heading above: 4.4.11 System-Wide Offer Caps

BEFORE: …; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while ECAP was in effect. If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions. (ii) 
QUOTE: If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, on the next Operating Day, the SWCAP shall be set to the Low System-Wide Offer Cap (LCAP) for the remainder of that year. At the beginning of the next calendar year, the SWCAP shall be reset to the HCAP.
AFTER:  This transition process is further described in Section 4.4.11.1, Scarcity Pricing Mechanism. (b) ERCOT shall issue operations notices when the ECAP Effective Period begins and ends. Such notices shall respectively state the date and time of the initiation and cessation of the ECAP Effective Period…

### e43 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, paragraph (1)(a)(ii) · text copy line 2223 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while the EPP was active. If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions. (ii) 
QUOTE: If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism.
AFTER:  (b) ERCOT shall issue operations notices when the ECAP Effective Period begins and ends. Such notices shall respectively state the date and time of the initiation and cessation of the ECAP Effective Period. (c) ERCOT will post on the ERCOT website the cumulative number of hours in which the sum of …

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I, all-in price discussion (p. 2) · text copy line 1339

BEFORE: …ses referred to as uplift. The all-in price metric includes the load-weighted average real-time market prices across all zones plus ancillary service and uplift costs, divided by realtime load to show costs on a per MWh basis.1 Energy prices include nodal energy prices and the two price adders: • 1 
QUOTE: The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and
AFTER:  For this analysis "uplift" includes: Reliability Adder Imbalance Settlement, ORDC Adder Imbalance Settlement, Revenue Neutrality Allocation, Emergency Energy Charges, Base Point Deviation Payments, ERS Settlement, Black Start Service Settlement, Block Load Transfer Settlement, Firm Fuel Service Set…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e3, e26, e27, e17): **Inputs.** The peaking operating cost (POC) for each day is ten times the daily natural gas price index (the protocol calls it the effective daily fuel index price, FIP). [e2][e3] The FIP is the daily midpoint or average of natural gas prices for the Katy area (Katy Hub), in $/MMBtu. [e26] The real-time energy price in the test is the ERCOT Hub Average 345 kV Hub price in the protocol; the PUCT rule words it as an average system-wide price as determined by ERCOT. [e3][e27] The mechanism runs on a calendar-year basis. [e17]
- **How it works #2** (cites e4, e23, e5): **Accumulation.** PNM accumulates in dollars per MW on a cumulative basis across all past intervals in the year. [e4] In the Protocols each qualifying 15-minute interval adds (RTEP minus POC) times 0.25, counting only intervals where RTEP exceeds POC. [e23] ERCOT posts the updated PNM and current day-ahead cap on its website by the end of the next business day. [e5]
- **How it works #3** (cites e6, e21, e17, e43, e10, e7, e25, e14, e24): **Threshold and trigger.** ERCOT sets the PNM threshold at three times the cost of new entry, and the Protocol parameter table lists it as 315,000 $/MW-year. [e6][e21] The system-wide offer cap starts each calendar year at the HCAP and stays there until PNM exceeds the threshold. [e17] The Protocol's statement of the trigger covers the DASWCAP and the VOLL used to set the ASDCs for the DAM and RTM. [e43] If it does, the cap is set to the LCAP for the rest of the calendar year. [e10] In the Protocols the sequence is: the HCAP stays in effect for the day PNM crosses and the next Operating Day (Days 1 and 2), ERCOT sends a Market Notice on Day 2 before the DAM that the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM will be changed to the LCAP, and the LCAP applies from Day 3 to year end. [e7][e25][e14] On December 31 the DASWCAP and VOLL reset to the HCAP for the next January 1. [e24]
- **How it works #4** (cites e18, e19): **What the LCAP regime does.** The rule says that when the cap is the LCAP, ERCOT keeps applying the operating reserve demand curve and the reliability deployment price adder, but energy prices exclusive of congestion will not exceed the LCAP plus $1 for the rest of the year. [e18] ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e19]
- **How it works #5** (cites e16, e22) FLAG number-not-in-quote: 2026: **Cap values.** In the PUCT rule (copy effective 12/20/23) the LCAP is $2,000 per MWh (and per MW per hour for ancillary service offers) and the HCAP is $5,000 per MWh (and per MW per hour). [e16] The saved np-04 (edition effective 2026-08-01) parameter table lists the day-ahead HCAP at $5,000/MWh and the real-time HCAP (RTSWCAP) at $2,000/MWh. [e22]
- **Formula #1** (cites e4, e23): PNM for the current year, in $ per MW, in the Protocols: [e4][e23]
- **Formula #2** (cites e23): `PNM = ∑((RTEP – POC) * (0.25)) for each Settlement Interval where (RTEP – POC) > 0` [e23]
- **Formula #3** (cites e3): - RTEP is the Real-Time Energy Price, measured as the ERCOT Hub Average 345 kV Hub price. [e3]
- **Formula #4** (cites e3): - POC is the Peaking Operating Cost, ten times the effective daily FIP, in dollars per MWh. [e3]
- **Formula #5** (cites e23, e1): - 0.25 converts a 15-minute Settlement Interval to hours; the PUCT rule writes the same factor as minutes in the interval divided by 60. [e23][e1]
- **Formula #6** (cites e1): - Only intervals where RTEP exceeds POC count, so PNM only ever rises during the year. [e1]
- **ERCOT context #1** (cites e9, e12, e11, e35): The IMM says the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 PNM reached almost $79 per kW, about 21% below 2024, and did not reach the threshold. [e12] The IMM stresses that PNM is not a true net revenue measure: it uses protocol-specified values, a 10.0 MMBtu per MWh heat rate, and excludes variable O&M costs and outage rates. [e11] By contrast, its own net revenue analysis assumes 10.5 MMBtu per MWh, $4 per MWh variable O&M and a 10% outage rate. [e35]
- **ERCOT context #2** (cites e13, e39, e8, e40, e41) FLAG number-not-in-quote: $140: The threshold is still based on the legacy cost of new entry of $105 per kW-year; in July 2024 the PUCT approved $140 per kW-year for planning purposes but kept $105 for the PNM threshold. [e13] The IMM defines CONE as the estimated annualized revenue requirement for a marginal new generating resource, typically gas-fired, to recover capital and fixed operating costs. [e39] Comparing PNM with CONE is the IMM's check on whether market revenues are enough to support new generation, and the IMM says that if PNM approaches or exceeds CONE, market revenues are sufficient for that year. [e8][e40] ERCOT is separately reviewing CONE alongside its 2026 Reliability Standard Assessment. [e41]
- **ERCOT context #3** (cites e28, e31, e32, e33, e34, e36, e37, e38): Year by year, from the IMM reports: 2021 crossed the $315,000 threshold on February 16. [e28] In 2022 PNM was higher than any other year except 2021 but nowhere near the threshold, with $32k/MW-yr accumulated in the winter months. [e31][e32] In 2023 PNM was about $263,968, again the highest since 2021 but well below the threshold, and the IMM attributes it largely to ECRS implementation affecting real-time prices. [e33][e34] The IMM says net revenues in 2024 and 2025 were significantly lower than in previous years and that low-revenue years occur often and are not a threat to resource adequacy. [e36] In 2025 the IMM also saw a wide West versus Houston gap in gas unit net revenues, driven by Permian import-constrained congestion. [e37] Wind and solar net revenues were lower than gas-fired technologies in all areas in 2025. [e38]
- **Timeline #1** (cites e28, e29): - February 16, 2021: PNM threshold exceeded for the first and only time; the LCAP in effect then was the greater of $2,000 or 50 times the natural gas price index, and the IMM says the gas price (up to $400/MMBtu) pushed it to more than double the HCAP. [e28][e29]
- **Timeline #2** (cites e30) FLAG number-not-in-quote: 2021: - March 3, 2021: the IMM says the Commission suspended use of the LCAP to avoid outcomes contrary to the rule's purpose. [e30]
- **Timeline #3** (cites e13) FLAG number-not-in-quote: $140: - July 2024: PUCT approves a planning CONE of $140 per kW-year but keeps the $105 value for the PNM threshold. [e13]
- **Timeline #4** (cites e42, e25) FLAG number-not-in-quote: 2024: - September 26, 2024: Board approval of NPRR1216 (per its report); its proposed language would set the SWCAP to the LCAP on the next Operating Day after the threshold is exceeded, instead of from Day 3 as in the Protocols saved here. The saved np-04 still shows the Day 3 schedule, so this is pending or not yet reflected. [e42][e25]
- **Timeline #5** (cites e44): - December 2025: RTC go-live; the IMM says the ORDC adder was discontinued then. [e44]
- **Timeline #6** (cites e20): - January 1, 2026: PUCT review of the system-wide offer cap programs begins, repeating every five years. [e20]
- **Key facts #5** (cites e33): - 2023 PNM: approximately $263,968 (per MW-year), below the $315,000 threshold. [e33]
- **Key facts #7** (cites e24): - The reset to the HCAP happens on December 31 for Operating Day January 1. [e24]
- **Common confusion #1** (cites e11, e1, e15, e13) FLAG number-not-in-quote: $140: PNM is not the same as the net revenue the IMM reports for real units, because it uses fixed protocol values and ignores variable O&M and outages. [e11] It also resets each calendar year, so it is different from the Emergency Pricing Program's rolling 24-hour trigger. [e1][e15] The threshold uses the legacy $105 per kW-year CONE, not the $140 planning CONE. [e13]
- **Questions #2** (cites e1, e3, e4, e23): For each settlement interval where the Hub Average 345 kV price exceeds the POC (ten times the daily gas index), the difference times the interval length (0.25 hour in the Protocols) is added to a cumulative annual total in dollars per MW. [e1][e3][e4][e23]
- **Questions #4** (cites e10, e7, e18, e19): The cap goes to the LCAP for the rest of the calendar year, after the HCAP stays for the day of the crossing and the next Operating Day. [e10][e7] Energy prices excluding congestion will not exceed the LCAP plus $1, and resources are reimbursed for marginal costs above the larger of the LCAP or their real-time price. [e18][e19]
- **Questions #8** (cites e33, e34): The IMM reports 2023 PNM of approximately $263,968, below the $315,000 threshold, and attributes the high 2023 value largely to ECRS implementation affecting real-time prices. [e33][e34]
- **Questions #10** (cites e2, e29, e30, e16) FLAG number-not-in-quote: 2021: Because POC is ten times the daily gas index, a gas price spike raises the hurdle the real-time price must clear. [e2] In 2021 the IMM says the LCAP at the time was tied to 50 times the gas index and rose to more than double the HCAP, and the Commission suspended it on March 3. [e29][e30] The LCAP in the saved rule is a fixed $2,000. [e16]
- **Questions #12** (cites e36): The IMM says years with lower net revenues occur often and are not a threat to resource adequacy, as part of the cycle in an energy-only market. [e36]
- **Scenarios #2** (cites e2) FLAG number-not-in-quote: $5, $50: - (Illustration.) POC is 10 x $5 = $50/MWh. [e2]
- **Scenarios #3** (cites e23) FLAG number-not-in-quote: $100, $50, $12.50, 1,600, $20,000: - Each qualifying 15-minute interval adds ($100 - $50) x 0.25 = $12.50/MW, so 400 hours (1,600 intervals) add $20,000/MW. [e23]
- **Scenarios #4** (cites e21): - That is far below the $315,000 per MW-year threshold. [e21]
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

