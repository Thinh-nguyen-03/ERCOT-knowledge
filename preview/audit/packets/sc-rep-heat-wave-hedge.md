# Audit packet: Scenario: REP Hedging a Heat Wave (sc-rep-heat-wave-hedge)

kind scenario · domain cases · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Section F (Exposure of Load to Real-Time Prices), page 48 (OCR) · text copy line 2979

BEFORE: …Outcomes F. Exposure of Load to Real-Time Prices Although real-time prices play a critical role in sending investment signals in ERCOT's energyonly market, most load is not directly exposed to these prices. In 2024, only a relatively small share of total load was settled at real-time energy prices. 
QUOTE: Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market.
AFTER:  Figure 8 shows the percentage of load that was exposed to real-time prices based on ERCOT settlement data. Figure 8: Monthly Average Load Exposure, 2020-2024 70 Average Load (GW) 24% Average Load Exposure Percentage 21% 60 18% 50 15% 40 12% 30 9% 20 6% 10 3% 0 Load Exposure to Real-Time Price 80 0%…

### e3 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Section F, page 48 (OCR) · text copy line 3043

BEFORE: …0 6% 10 3% 0 Load Exposure to Real-Time Price 80 0% J F M A M J J A S O N D 2024 20 21 22 23 24 Annual Figure 8 shows that only 17% of the load was exposed to real-time prices on average in 2024, and the remainder of real-time load is hedged with positions from the day-ahead market, including PTPs. 
QUOTE: This type of forward hedging provides some protection against volatility and uncertainty associated with the real-time market, but it ultimately provides little protection against sustained elevations in prices because day-ahead prices in a well-performing market will tend to reflect the expected real-time prices.
AFTER:  For more on the convergence between day-ahead and real-time market pricing, see Chapter III. G. Impact of ECRS on Real-Time Market Prices The implementation of ECRS in June 2023 had a profound impact on the ERCOT wholesale market and is referenced throughout this report. The pricing impact of ECRS …

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, paragraph (1) · text copy line 5145 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone (1) 
QUOTE: The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:
AFTER:  (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (d) The amount of its Self-Sche…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, paragraph (1)(g) · text copy line 5159 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: … the QSE is the buyer; minus (d) The amount of its Self-Schedules with source specified at the Settlement Point; minus (e) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (f) The amount of its Energy Trades at the Settlement Point where the QSE is the seller; minus 
QUOTE: (g) Its AML at the Settlement Point excluding Non-WSL ESR Charging Load; plus
AFTER:  +----------------------------------------------------------------------------------------------------------------------------+ | [NPRR1188: Replace item (g) above with the following upon system implementation:] | | | | (g) Its AML at the Settlement Point excluding Non-WSL ESR Charging Load and CLR …

### e6 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4638

BEFORE: …arket awards. Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh. This spread is low compared to prior years because fewer price spikes occurred • 
QUOTE: The day-ahead market cleared 62% of real-time load in 2025.
AFTER:  This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load. Thermal resources not awarded through threepart offers risk not…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, 1. Day Ahead Market Volume (OCR) · text copy line 4736

BEFORE: …ther as a hedge or for speculative purposes. 1. Day Ahead Market Volume The day-ahead market clears offers and bids by matching supply and demand. In 2025, dayahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years. 
QUOTE: Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market.
AFTER:  Less than half of physical real-time generation in ERCOT is scheduled through the day-ahead market, so resources scheduled after the DAM must provide the remaining supply needed to satisfy real-time load, as shown in Figure 31. Figure 31 shows awards for three-part offers (i.e., three-part awards) …

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Day-Ahead Market Performance, A. Highlights · text copy line 4629

BEFORE: …ions and helping participants manage or arbitrage real-time price exposure. Until RTC was implemented, ancillary services awarded in the DAM implied a physical obligation to provide reserves. Otherwise, the DAM is a voluntary financial market that creates no physical obligations from market awards. 
QUOTE: Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh.
AFTER:  This spread is low compared to prior years because fewer price spikes occurred • The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market. • Three-part offers account for only 58% of …

### e9 · `puct-25-509` · tier 1 · PUCT Substantive Rule 16 TAC §25.509, Scarcity Pricing Mechanism for the ERCOT Power Region
locator: 16 TAC 25.509(b)(6)(B) · text copy line 52

BEFORE: …t a publicly accessible location on its website the updated value of the peaker net margin, in dollars per megawatt (MW). (6) System-Wide Offer Caps. (A) The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) 
QUOTE: The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers.
AFTER:  (C) The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants. (D) If the peaker net margin exceeds …

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Review of Real-Time Market Outcomes, price spikes · text copy line 1628

BEFORE: …ity was lower on both an absolute and percentage basis. This trend likely results from continued growth in installed solar and energy storage capacity, which contributes to high online reserves throughout the year. We further discuss the current surplus of operating reserves in ERCOT in Chapter II. 
QUOTE: As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day.
AFTER:  During this ramp-down period, SCED often dispatches quick-start natural gas plants or energy storage resources with high-priced energy offer curves, which results in frequent and predictable price spikes. Price spikes during this evening ramp accounted for 30% of all price spikes in 2025, up from 2…

### e11 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 4, Key Takeaway on 2026 peak load · text copy line 199

BEFORE: …2026, of 91,134 MW. 3 Demand Response PUBLIC 7/22/2026 Actual Load vs. Estimated Crypto and 4CP Response 100,000 95,000 90,000 MW 85,000 80,000 75,000 70,000 65,000 60,000 55,000 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 Hour Actual Actual+Crypto Actual+Crypto+4CP Key Takeaway: 
QUOTE: On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours.
AFTER:  The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW. ERCOT estimates that the peak load would have been 94,861 MW if there was no reduction. 4 PUBLIC Net Load with Energy Storage Resource (ESR) Contribution…

### e12 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.1, ERCOT Creditworthiness Requirements for Counter-Parties, paragraph (1) · text copy line 1033 · heading above: 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties

BEFORE: …1, Credit Requirements for CRR Auction Participation. (3) The term "Ultimate Parent" in this Section is defined as the most distant parent that prepares consolidated financial statements within the hierarchical ownership structure. 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties (1) 
QUOTE: Each Counter-Party shall meet ERCOT's creditworthiness standards as provided in this Section. A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE).
AFTER:  Each Counter-Party shall maintain any required Financial Security in a form acceptable to ERCOT in its sole discretion. If at any time the Counter-Party does not meet ERCOT's creditworthiness requirements, then ERCOT may suspend the Counter-Party's rights under these Protocols until it meets those …

### e13 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.2, Real-Time Liability Estimate, paragraph (1) · text copy line 1649 · heading above: 16.11.4.3.2 Real-Time Liability Estimate

BEFORE: … Obligations Settled in DAM; (o) Section 7.9.1.2, Payments for PTP Options Settled in DAM; (p) Section 7.9.1.5, Payments and Charges for PTP Obligations with Refund Settled in DAM; and (q) Section 7.9.1.6, Payments for PTP Options with Refund Settled in DAM. 16.11.4.3.2 Real-Time Liability Estimate 
QUOTE: (1) ERCOT shall estimate RTL for an Operating Day as the sum of estimates for the following RTM Settlement charges and payments:
AFTER:  (a) Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node, using Real-Time Metered Generation (RTMG) as generation estimate; +--------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.2, paragraph (1)(b) · text copy line 1660 · heading above: 16.11.4.3.2 Real-Time Liability Estimate

BEFORE: …=======================================================================================================+ +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (b) Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, using 14-day or seven-day-old LRS for Load estimate;
AFTER:  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR829: Replace item (b) above with the following upon system implementation:] | | | …

### e15 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.1, paragraph (1) · text copy line 1033 · heading above: 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties

BEFORE: …worthiness standards as provided in this Section. A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE). Each Counter-Party shall maintain any required Financial Security in a form acceptable to ERCOT in its sole discretion. 
QUOTE: If at any time the Counter-Party does not meet ERCOT's creditworthiness requirements, then ERCOT may suspend the Counter-Party's rights under these Protocols until it meets those creditworthiness requirements.
AFTER:  ERCOT's failure to suspend the Counter-Party's rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a CRR Account Holder's ability to bid on future CRRs or a Qualified Scheduling Entity's (QSE's) ability to bid in the Day-Ahead …

### e16 · `ice-ercot-north-peak` · tier 2 · ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, contract specification
locator: Contract Specifications, Description · text copy line 10

BEFORE: …ICE Futures U.S. November 18, 2026 ERCOT North 345KV Real-Time Peak Fixed Price Future Contract Specifications Description 
QUOTE: A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A.
AFTER:  Contract Symbol ERN Settlement Method Cash settlement Contract Size 1 MW Currency USD Minimum Price Fluctuation The price quotation convention shall be One cent ($0.01) per MWh; minimum price fluctuation may vary by trade type. Please see Table in Resolution 1 to this Chapter 18. Listing Cycle Up t…

### e17 · `ice-ercot-north-peak` · tier 2 · ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, contract specification
locator: Contract Specifications, Reference Price A, c) Specified Price · text copy line 71

BEFORE: …r/html/real_time_spp ICE Help Desk: Atlanta + 1 770 738 2101, London + 44 (0)20 7488 5100 or ICEHelpdesk@ice.com Contract Specifications b) Ref Price A - Pricing Date Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date c) Ref Price A - Specified Price 
QUOTE: Average of SPPs for all hours ending 0700-2200 CPT
AFTER:  d) Ref Price A - Pricing calendar ERCOT e) Ref Price A - Delivery Date Contract Period Final Payment Date The sixth Clearing Organization business day following the Last Trading Day ICE Help Desk: Atlanta + 1 770 738 2101, London + 44 (0)20 7488 5100 or ICEHelpdesk@ice.com…

### e18 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.6.1.6(3)(b) · text copy line 2181 · heading above: 16.11.6.1.6 Revocation of a Market Participant’s Rights and Termination of Agreements

BEFORE: …er or not the Default occurred pursuant to the Market Participant's activities as an LSE), then: (a) Within 24 hours of receiving notice of the Payment Breach, the Market Participant shall provide to ERCOT all the information regarding its ESI IDs set forth in the ERCOT Retail Market Guide; and (b) 
QUOTE: On revocation of some or all of the Market Participant's rights or termination of the Market Participant's agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant's ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT.
AFTER:  (4) After revocation of its rights or termination of its Agreement with ERCOT, the Market Participant will remain liable for all charges or costs associated with any continued activity related to the Counter-Party's relationship with ERCOT and any expenses arising from the consequences of such term…

### e20 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.5, paragraph (4) · text copy line 2031 · heading above: 16.11.5 Monitoring of a Counter-Party’s Creditworthiness and Credit Exposure by ERCOT

BEFORE: …or greater than that Counter-Party's TPEA. (3) ERCOT shall promptly notify each Counter-Party of the need to increase its Financial Security and allow the Counter-Party time, as defined in paragraph (6)(a) below, to provide additional Financial Security to maintain compliance with this Section. (4) 
QUOTE: When either the Counter-Party's TPEA or TPES as defined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure, reaches 90% of its requirement, ERCOT shall use reasonable efforts to electronically issue a warning to the Counter-Party's Authorized Representative and credit contact advising the Counter-Party that it should consider increasing its Financial Security.
AFTER:  However, failure to issue that warning does not prevent ERCOT from exercising any of its other rights under this Section. (5) ERCOT may suspend a Counter-Party when: (a) That Counter-Party's TPES as defined in Section 16.11.4, equals or exceeds 100% of its Financial Security; or (b) That Counter-Pa…

### e22 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.2, paragraph (1)(a)-(c) · text copy line 5147 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …---------------------------------- 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone (1) The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point: 
QUOTE: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus
AFTER:  (d) The amount of its Self-Schedules with source specified at the Settlement Point; minus (e) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (f) The amount of its Energy Trades at the Settlement Point where the QSE is the seller; minus (g) Its AML at the Settlemen…

### e23 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.11, parameter table (Parameter / Unit / Current Value) · text copy line 2240 · heading above: 4.4.11 Day-Ahead and Real-Time System-Wide Offer Caps

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------- --------------------------------------------- 
QUOTE: ECAP $/MWh 2,000 HCAP - DAM (DASWCAP) $/MWh 5,000 HCAP - RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000
AFTER:  * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise directed by the ERCOT Board. ERCOT shall provide a Mark…

### e24 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e25 · `ice-ercot-north-peak` · tier 2 · ICE ERCOT North 345KV Real-Time Peak Fixed Price Future, contract specification
locator: Contract title · text copy line 4

BEFORE: …ICE Futures U.S. November 18, 2026 
QUOTE: ERCOT North 345KV Real-Time Peak Fixed Price Future
AFTER:  Contract Specifications Description A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A. Contract Symbol ERN Settlement Meth…

### e26 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.1(2), Determination of Total Potential Exposure for a Counter-Party · text copy line 1139 · heading above: 16.11.4.1 Determination of Total Potential Exposure for a Counter-Party

BEFORE: …s the sum of its "Total Potential Exposure Any" (TPEA) and TPES: (a) TPEA is the positive net exposure of the Counter-Party not included in TPES. (b) TPES is the positive net exposure of the Counter-Party for Future Credit Exposure (FCE) and the Independent Amount (IA). (2) For all Counter-Parties: 
QUOTE: TPEA = Max [0, MCE, Max [0, ((1-TOA) * EAL _(q) + TOA * EAL _(t) + EAL _(a))]] + PUL
AFTER:  TPES = Max [0, FCE _(a)] + IA The above variables are defined as follows: +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e27 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3, Determination of Counter-Party Estimated Aggregate Liability, variable table, RTLE · text copy line 1456 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | RTLE | $ | 
QUOTE: Real-Time Liability Extrapolated-M1 multiplied by the sum of the net amount, with zero substituted for missing values, due to or from ERCOT by the Counter-Party in the 14 most recent Operating Days for which RTM Initial Statements are produced for Counter-Parties according to the ERCOT Settlement Calendar divided by 14.
AFTER:  | +-----------+------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e28 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3, variable table, M1 · text copy line 1526 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | M1 | | 
QUOTE: M1 = M1a + M1b-Multiplier for DALE and RTLE. Provides for forward risk during a Counter-Party termination upon default based upon the sum of the time period required for any termination upon default (M1a) and the time period required for a Mass Transition only (M1b). The M1a component is applicable to all Counter-Parties. The M1b component is applicable only to Counter-Parties representing any QSE associated with a LSE.
AFTER:  | | | | | | | | M1a = Time period required for any termination from an Operating Day. | | | | | | | | M1a is comprised of a fixed value (M1d), representing days from issuance of a collateral call to termination, and a calendar day-specific variable value. For any Operating Day, M1a is equal to the …

### e29 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3, variable table, lrqrtle · text copy line 1552 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | lrqrtle | Days | 
QUOTE: Look-back period for RTM to find the maximum of RTLE for all QSEs represented by the Counter-Party if any of the QSEs represented by the Counter-Party represent either Load or generation.
AFTER:  | +-----------+------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e30 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3, parameter table (current values) · text copy line 1584 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+---------------------------------------------------+ | 
QUOTE: lrqrtle | Days | 40 from May 16 through Sep 15 (summer months)
AFTER:  | | | | | | | | 20 from Sep 16 through May 15 (non-summer months) | +--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e31 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.3, Forward Adjustment Factors, paragraph (1) · text copy line 1705 · heading above: 16.11.4.3.3 Forward Adjustment Factors

BEFORE: …=============================================================================+ +-------------------------------------------------------------------------------------------+ (l) Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time. 16.11.4.3.3 Forward Adjustment Factors (1) 
QUOTE: Forward adjustment factors are used to adjust TPEA based on electricity futures prices.
AFTER:  (a) Futures Weekly Average Price (FWAP): FWAP_(w) = (1/nfwh) * $\sum_{fwh = 1}^{nfwh}{}$$\sum_{fwh = 1}^{nfwh}\lbrack$FHP _(fwh, rhub)] (b) Projected Real-Time Forward Average Price (PRFAP): PRFAP = $\sum_{w = 1}^{3}\lbrack$RWF _(w) * FWAP _(w)] (c) Projected Day-Ahead Forward Average Price (PDFAP)…

### e32 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.3, variable table, PRFAP · text copy line 1740 · heading above: 16.11.4.3.3 Forward Adjustment Factors

BEFORE: …==============================================================================================================================================================================================================================================+ | PRFAP | $/MWh | Projected Real-Time Forward Average Price
QUOTE: The average RTM price per MWh projected forward based on futures market prices.
AFTER:  | +----------------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e33 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.5(6)(a)(i), Monitoring of a Counter-Party's Creditworthiness and Credit Exposure by ERCOT · text copy line 2045 · heading above: 16.11.5 Monitoring of a Counter-Party’s Creditworthiness and Credit Exposure by ERCOT

BEFORE: …nancial Security in amounts equal to or greater than its TPES or Remainder Collateral in amounts equal to or greater than its TPEA, each as defined in Section 16.11.4: (a) ERCOT shall promptly notify the Counter-Party of the amount by which its Financial Security must be increased and allow it: (i) 
QUOTE: Until 1500 on the second Bank Business Day from the date on which ERCOT delivered the Notice to increase its Financial Security if ERCOT delivered its Notice before 1500; or
AFTER:  (ii) Until 1700 on the second Bank Business Day from the date on which ERCOT delivered Notification to increase its Financial Security if ERCOT delivered its Notice after 1500 but prior to 1700. ERCOT shall notify the QSE's Authorized Representative(s) and Credit Contact if it has not received the …

### e34 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.10, Credit Requirement for DAM Bids and Offers, paragraph (3) · text copy line 1921 · heading above: 4.4.10 Credit Requirement for DAM Bids and Offers

BEFORE: …accepted DAM bid and offers of the Counter-Party's other QSEs. (2) DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party's credit limit for DAM participation. (3) 
QUOTE: ERCOT shall reject the QSE's individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party's credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable.
AFTER:  (4) The QSE may revise and resubmit such rejected bids and offers described in item (3) above, provided that the resubmitted bids and offers are valid and within the Counter-Party's credit limit for DAM participation adjusted for all accepted DAM bids and offers of the Counter-Party's QSE's limit a…

### e35 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), pp. 2-3 · text copy line 123

BEFORE: …www.ercot.com/files/docs/2023/09/01/2_refresher-on-real-time-co- optimization-key-principles-rtcbtf-090823_v2.pptx. 2ofll a power balance penalty curve in market clearing, there was a concern that if a QSE expected scarcity conditions in Real-Time they could not reflect this in DAM bids and offers. 
QUOTE: In the RTM, the energy component of Locational Marginal Prices (LMPs) can exceed $2,000 due to the Ancillary Service Demand Curves (ASDCs). Allowing QSEs to submit higher energy bids into the DAM allows Market Participants to more effectively hedge when they expect scarcity conditions in Real-Time.
AFTER:  Beyond the ability to hedge and indicate anticipated high-pricing days in the RTM, the DAM and RTM differential also has a fundamental role as the single most important control on uncollateralizeable credit exposure in the market. The reason lies in where credit constraints can and cannot bind. A M…

### e36 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: PUCT Project No. 59550, ERCOT comments, response to Question 4, p. 9 · text copy line 446 · heading above: 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed

BEFORE: … scarcity window offour days (i.e., 96 hours), which is in line with the approximately 104-hour emergency period experienced during WS Uri. The amounts are per megawatt of Real-Time-exposed load and are provided to show proportionality, not to forecast any particular Market Participant' s exposure. 
QUOTE: These make clear that at the current $2,000 SWCAP in the RTM, a four-day event accrues roughly $192,000 of exposure per exposed megawatt, converging the RTM SWCAP upward to the $5,000 DAM SWCAP level, which would raise that to approximately $480,000, a 150% increase, before any change in Market Participant behavior.
AFTER:  Extending the EPP duration window produces the same proportional effect through the duration term. Neither lever is offset elsewhere in the market design, which is why the credit impact is inherent rather than contingent. ERCOT recommends that the Commission incorporate the stress-testing framework…

### e37 · `puct-59550-ercot-comments` · tier 2 · ERCOT comments, PUCT Project 59550 (quinquennial review of system-wide offer cap programs) (filed 2026-09-17, a party filing)
locator: PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), p. 2 · text copy line 107

BEFORE: …alendar year." B. Ouestion 1(b): With the implementation of RTC+B, there is a difference between the day ahead (DAM) and real-time (RTM) system offer caps for both energy and AS. The DAM offer cap is $5,000 per MWh per hour, and the RTM offer cap is $2,000/MWh. Should this difference continue? Why? 
QUOTE: ERCOT recommends that the current approach, in which the SWCAP in RTM is set at $2,000 and the SWCAP in DAM is set at the effective VOLL, be maintained. The use of different offer caps for DAM and RTM was a deliberate design decision reflected in design principles for RTC+B
AFTER: .2 Given the voluntary nature of DAM (willing buyer and willing seller) and the lack of 1 See generally, Triennial Reliability Assessmentfor the ERCOT Region under § 25 . 508, Project No . 58777 . 2 See RTC+B Key Principle (KP) 1.2 - System-Wide Offer Cap and Power Balance Penalty Price, described i…

### e38 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review (Board, 2026-09-14/15), real-time prices slide, Key Takeaway · text copy line 795 · heading above: 4.5 5

BEFORE: …25 2026 40 30 20 10 0 Jan Feb Mar Apr May Jun Jul Aug Peaker Net Margin 120 100 Peaker Net Margin (Thousand $/MW-year) PUBLIC 8/15/24: $ 63,822 80 60 40 8/15/25: $ 46,472 8/15/26: $ 43,111 20 0 Jan Feb Mar Apr May 2024 Jun 2025 Jul 2026 Aug Sep Oct Nov Dec *2026 data runs through 8/15 Key Takeaway: 
QUOTE: Real-Time prices were lower in summer 2026 than 2024 and 2025 due to higher supply particularly during day light hours.
AFTER:  Lower prices also mean that Peaker Net Margin is lower in 2026 relative to the previous two years. 14 Solar and Energy Storage Resources capacity continues to increase PUBLIC Hourly Average Total COP Online HSL 45 40 35 30 25 20 15 10 5 0 GW GW Summer 2024 40 35 30 25 20 15 10 5 0 Summer 2025 1 3 5…

### e39 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, net load hour slide, Key Takeaway · text copy line 507

BEFORE: …Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load Average Net Load (June 2024) (June 2025) (June 2026) (July 2024) (July 2025) (July 2026) (August 2024) (August 2025) (August 2026) HE 17 HE 18 HE 19 HE 20 HE 21 HE 22 Key Takeaway: 
QUOTE: Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July.
AFTER:  *2026 data period is 6/1 - 8/15 8 Three Lowest State of Charge (SOC)% Days 2025 vs 2026 85 SOC % = 15.63 SOC % = 12.81 SOC % = 16.17 SOC % = 9.05 SOC % = 8.23 SOC % = 6.20 20 80 18 75 17 70 65 60 65 65 62 61 15 68 13 64 11 11 60 9 10 8 55 50 15 69 14 73 53 6.1 5.2 5.2 3 51 5.5 6.3 51 4.5 5 5 3 3 PR…

### e40 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, slide 4, Key Takeaway on 2026 peak load · text copy line 200

BEFORE: … 85,000 80,000 75,000 70,000 65,000 60,000 55,000 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 Hour Actual Actual+Crypto Actual+Crypto+4CP Key Takeaway: On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours. 
QUOTE: The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW. ERCOT estimates that the peak load would have been 94,861 MW if there was no reduction.
AFTER:  4 PUBLIC Net Load with Energy Storage Resource (ESR) Contribution Key Takeaway: 12 of the top 20 Hourly Net Load Hours have been from 2026. The Peak Net Load typically occurs in HE 20:00 - 21:00 and occur most often during the Summer. 5 Summer Thermal Forced Outage Comparison PUBLIC 20000 20000 180…

### e41 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: Executive Summary, Winter Storm Uri · text copy line 375

BEFORE: …utages caused a severe supply/demand imbalance and required ERCOT to order curtailment of load to maintain the operation of the bulk electric system and prevent widespread collapse. • Energy prices in the day-ahead market and real-time market remained at or near the offer cap for most of this time. 
QUOTE: The extended shortage pricing created extreme financial outcomes for some market participants. This was particularly true for those exposed to day-ahead or real-time prices due to insufficient coverage through financial contracts or generators unable to operate during the storm to hedge this exposure.
AFTER:  2021 State of the Market Report | i / / Executive Summary • The total value of electricity during this event was $59 billion.1 Since many utilities supply some or all of their needs from owned or purchased generation, the net purchases of energy and ancillary services from ERCOT during the event wa…

### e42 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: Executive Summary, Weather and demand discussion · text copy line 555

BEFORE: …on average as the Texas economy continued to grow. Load in West Texas continues to grow much faster than the average (up 15.5% on average in 2023). This trend in recent years has been driven by expanding oil and natural gas production activity. Weather impacts on demand were mixed across all zones. 
QUOTE: We measure the impact weather has on electricity use by quantifying heating and cooling degree days - the amount by which the average daily temperatures are above or below 65 °F. Residential and commercial demand rises quickly as the number of cooling degree days grows because of the demand for air conditioning.
AFTER:  1 Nodal Protocol Revision Request (NPRR) 1092, Reduce RUC Offer Floor and Limit RUC Opt-Out Provision was filed by the IMM and approved by the Board. The RUC offer floor was reduced to $250 per MWh but the RUC opt-out provision will be removed once ERCOT completes implementation. NPRR 1172, Fuel Ad…

### e43 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.6, DAM Energy Bids, paragraph (1) · text copy line 1776 · heading above: 4.4.9.6 DAM Energy Bids

BEFORE: ….4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline. (3) ERCOT shall continuously validate DAM Energy-Only Offers and continuously display on the MIS Certified Area information that allows any QSE to view its valid DAM Energy-Only Offers. 4.4.9.6 DAM Energy Bids (1) 
QUOTE: A QSE must submit any DAM Energy Bids by 1000 for the effective DAM.
AFTER:  (2) A DAM Energy Bid represents the QSE's willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM. 4.4.9.6.1 DAM Energy Bid Criteria (1) Each DAM Energy Bid must be reported by a QSE and …

### e44 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Market Operations chapter, net load forecast error (Figure 50 discussion) · text copy line 6614

BEFORE: …25 82 | 2025 State of the Market Report / / Market Operations Figure 50 shows that forecast accuracy for net load and IRR generation has improved meaningfully since the second half of 2022, with substantial reductions in average error. However, some structural biases and growing variability remain. 
QUOTE: By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load.
AFTER:  IRR generation itself was under-forecast by only 89 MW on average in 2025, indicating improved accuracy. However, forecast variance has increased alongside the rapid expansion of installed IRR capacity, particularly solar. Despite this growth in solar resources, wind generation continues to dominat…

### e45 · `ercot-credit-faqs` · tier 2 · ERCOT Credit FAQs (2025-12)
locator: ERCOT Credit FAQs, consequences of paying an invoice or collateral request late · text copy line 153

BEFORE: …ces of paying an invoice or collateral request late? Payments for invoices, collateral and escrow requests that are received beyond the due date and time will be deemed late and subject to enforcement levels in accordance with Section 16.11.6 Payment Breach and Late Payments by Market Participants. 
QUOTE: The TPE will be increased by 110% for the first instance of late payment over a rolling 12-month period; and 115% and 120% for the second and third instances, respectively.
AFTER:  Also for the third instance, the TPE can only be covered by cash collateral. If payment is not received on the following day, a breach notice will be sent and the Counter-Party will be given one business day to cure the breach. If payment is not received on the due date of the breach notice, the Co…

### e46 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.3, Forward Adjustment Factors, paragraph (1)(f) · text copy line 1727 · heading above: 16.11.4.3.3 Forward Adjustment Factors

BEFORE: …}\lbrack$DWF _(w) * FWAP _(w)] (d) Historic Real-Time Settled Average Price (HRSAP): HRSAP = (1/nhrh) * $\sum_{hrh = 1}^{nhrh}{\sum_{i = 1}^{4}\lbrack}$RTSPP _(hrh, i, rhub)]/4 (e) Historic Day-Ahead Settled Average Price (HDSAP): HDSAP = (1/nhdh) * $\sum_{hdh = 1}^{nhdh}\lbrack$DASPP _(hdh, rhub)] 
QUOTE: (f) Real-Time Forward Adjustment Factor (RFAF): RFAF = PRFAP/HRSAP
AFTER:  (g) Day-Ahead Forward Adjustment Factor (DFAF): DFAF = PDFAP/HDSAP The above variables are defined as follows: +----------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e47 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3.3, variable table, w · text copy line 1744 · heading above: 16.11.4.3.3 Forward Adjustment Factors

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | w | None | 
QUOTE: One of the three consecutive forward weeks beginning with the current Operating Day.
AFTER:  | +----------------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e48 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3(1), Determination of Counter-Party Estimated Aggregate Liability, EAL formula for a Counter-Party whose QSEs represent Load or generation · text copy line 1429 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …e Liability (1) After a Counter-Party commences activity in ERCOT markets, ERCOT shall monitor and calculate the Counter-Party's EAL based on the formulas below. EAL _(q) = Max [IEL during the first 40-day period only beginning on the date that the Counter-Party commences activity in ERCOT markets, 
QUOTE: Max [ Max (RFAF * RTLE) during the previous lrqrtle days, RTLF] + DFAF * DALE
AFTER:  + Max [RTLCNS, Max {URTA during the previous lrqurta days}] + OUT _(q) + ILE _(q) EAL _(t) = Max [Max (RFAF * RTLE) during the previous lrt days, RTLF] + DFAF * DALE + Max [RTLCNS, Max {URTA during the previous lrt days}] + OUT _(t) EAL _(a) = OUT _(a) ERCOT may adjust the number of days used in de…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e4, e22, e5, e42): Step 1, find the open position. The QSE's Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price on amounts that include its Self-Schedules, DAM Energy Bids cleared and Energy Trades as buyer, less (among other terms) its AML at the Settlement Point. [e4][e22][e5] Load above those purchases is therefore left to settle at the real-time price. Heat drives the volume: the IMM measures weather's effect with cooling degree days and says residential and commercial demand rises quickly as they grow, because of air conditioning. [e42]
- **How it works #2** (cites e23, e24, e9, e35, e37, e10, e39, e11, e40) FLAG number-not-in-quote: 25.509: Step 2, size the price risk. Offer caps differ by market since RTC go-live: the Protocol parameter table lists a day-ahead HCAP (DASWCAP) of $5,000/MWh and a real-time HCAP (RTSWCAP) of $2,000/MWh, ERCOT says the SWCAP was reduced to $2,000/MWh from $5,000/MWh after RTC go-live on 12/5/2025, and PUCT rule 25.509 still states a $5,000 HCAP. [e23][e24][e9] ERCOT notes that the real-time energy component of LMPs can still exceed $2,000 because of the ASDCs, and recommends keeping the $2,000 real-time cap with the day-ahead cap at the effective VOLL. [e35][e37] In 2025 most price spikes came in the 7 to 9 p.m. peak net load hours as solar ramped down, and in June and July 2026 ERCOT saw the net load hour shift from HE 21 to HE 22. [e10][e39] ERCOT set an all-time demand record of 91,134 MW on July 22, 2026, and estimates it would have been 94,861 MW without the observed crypto and 4CP reductions. [e11][e40]
- **How it works #3** (cites e2, e6, e7, e43, e35, e25, e16, e17): Step 3, list the hedging tools. The IMM says LSEs manage price exposure by owning generation, signing bilateral PPAs, using futures, or buying in the day-ahead market. [e2] The day-ahead market cleared 62% of real-time load in 2025, and PTP obligations are also used to hedge real-time exposure from transactions outside the ERCOT market. [e6][e7] DAM Energy Bids must be in by 1000 for the effective DAM, and ERCOT says the higher day-ahead cap lets participants hedge more effectively when they expect real-time scarcity. [e43][e35] On the exchange side, ICE lists a monthly cash-settled ERCOT North 345KV Real-Time Peak Fixed Price Future, priced on the average of SPPs for hours ending 0700-2200. [e25][e16][e17]
- **How it works #4** (cites e3, e8, e34): Step 4, know the limits of buying day-ahead. The IMM says day-ahead prices in a well-performing market tend to reflect expected real-time prices, so forward hedging gives some protection against real-time volatility but little against sustained elevated prices. [e3] In 2025 the average day-ahead premium was $1.17 per MWh, but the average absolute day-ahead to real-time difference was $12 per MWh. [e8] DAM bids are also credit-limited: ERCOT rejects individual bids whose credit exposure exceeds the Counter-Party's DAM credit limit. [e34]
- **How it works #5** (cites e12, e13, e14, e20, e15, e18, e33): Step 5, check credit. The QSE's Counter-Party must keep Financial Security at or above its Total Potential Exposure at all times. [e12] ERCOT's real-time liability estimate includes the Load Zone imbalance charge, estimated from 14-day or seven-day-old Load Ratio Share. [e13][e14] ERCOT warns at 90% of the requirement, may suspend a Counter-Party that does not meet the requirement, and, for a breaching participant that is an LSE, initiates a Mass Transition of its ESI IDs on revocation. [e20][e15][e18] If a call is made, the Counter-Party has until 1500 on the second Bank Business Day when ERCOT's notice went out before 1500. [e33]
- **Formula #1** (cites e26): TPEA is the larger of zero, the Minimum Current Exposure (MCE), and the Estimated Aggregate Liability (EAL) terms, plus Potential Uplift (PUL). [e26]
- **Formula #2** (cites e27, e28, e48, e29, e30): Within EAL, the real-time piece is RTLE: M1 times the average daily net amount due to or from ERCOT over the 14 most recent Operating Days with RTM Initial Statements. [e27] M1 is a number of days of forward risk: the time to terminate a defaulting Counter-Party (M1a) plus, for a Counter-Party with a QSE serving an LSE, the time for a Mass Transition (M1b). [e28] For a Counter-Party whose QSEs represent Load or generation, EAL's real-time term is the larger of RTLF and the maximum of RFAF times RTLE over the look-back period, and EAL then adds a day-ahead term (DFAF times DALE) and other terms. [e48][e29] The look-back is 40 days from May 16 through September 15. [e30]
- **Formula #3** (cites e31, e32, e46, e47): The forward adjustment factor scales TPEA with electricity futures prices: RFAF is the projected real-time forward average price, built from futures for the next three weeks, divided by the historic real-time settled average price. [e31][e32][e46][e47]
- **Key facts #5** (cites e36) FLAG number-not-in-quote: 2026: - ERCOT's illustration (Project 59550 comments, September 2026): at the $2,000 real-time cap, an illustrative four-day scarcity event accrues roughly $192,000 of exposure per exposed MW. [e36]
- **Key facts #7** (cites e38): - Summer 2026 real-time prices were lower than in 2024 and 2025 because of higher supply, especially in daylight hours. [e38]
- **Key facts #8** (cites e30): - RTLE look-back for TPE: 40 days from May 16 through September 15. [e30]
- **Key facts #9** (cites e20, e45): - ERCOT issues a credit warning when TPEA or TPES reaches 90% of the requirement; a late payment raises TPE to 110% for the first instance in a rolling 12 months. [e20][e45]
- **Say it like this #3** (cites e27, e30, e31): (Guidance) The two channels to name: high real-time bills enter the 14-day average and stay in the summer look-back maximum, and rising forward prices push the forward adjustment factor up before the bills arrive. [e27][e30][e31]
- **Common confusion #2** (cites e11, e38, e39): (Guidance) "Record load" is not the same as "record prices". Summer 2026 set a demand record, yet ERCOT reports lower real-time prices than in 2024 and 2025 because of higher supply. [e11][e38] Size the hedge to the net-load hours, not the gross peak. [e39]
- **Common confusion #3** (cites e35): (Guidance) The $2,000 real-time cap is not a hard ceiling on what a REP pays: ERCOT says the energy component of LMPs can exceed it through the ASDCs. [e35]
- **Questions #8** (cites e27, e29, e30): RTLE averages the last 14 Operating Days with RTM Initial Statements, and EAL uses the maximum RTLE over the look-back, which is 40 days in summer, so expensive days keep counting after prices fall. [e27][e29][e30] (Reasoning) The requirement therefore lags the event, and a REP should plan collateral for weeks, not days.
- **Questions #10** (cites e31, e32): The Real-Time Forward Adjustment Factor scales TPEA by projected forward prices from electricity futures relative to historic settled prices, so a jump in futures raises the requirement before any high real-time bill is settled. [e31][e32]
- **Questions #12** (cites e41): The IMM's Uri finding is that extreme outcomes hit those exposed to day-ahead or real-time prices because of insufficient financial coverage or generators unable to operate to hedge the exposure. [e41] (Reasoning) A physical hedge only works if the unit runs, so the open position in a trip is the plant's output, not just the weather-driven extra load.
- **Questions #16** (cites e36): ERCOT's own illustration: at the $2,000 real-time cap a four-day event accrues roughly $192,000 of exposure per exposed MW, and about $480,000 at $5,000. [e36]
- **Scenarios #4** (cites e10, e39) FLAG number-not-in-quote: 2026: - The riskiest hours are the net-load peak: most 2025 price spikes came between 7 and 9 p.m., and in June and July 2026 the net load hour moved to HE 22. [e10][e39]
- **Scenarios #8** (cites e3, e43, e34): - Buying day-ahead locks the price for the volume bought, but the IMM says day-ahead prices in a well-performing market tend to reflect expected real-time prices, so it gives little protection against sustained elevated prices. [e3] Bids must be in by 1000, and any whose credit exposure exceeds the DAM credit limit are rejected. [e43][e34]
- **Scenarios #10** (cites e13, e20, e15, e31): - Check collateral: ERCOT estimates real-time liability from RTM charges including the Load Zone imbalance charge, warns at 90% of the requirement, and may suspend a Counter-Party that falls short. [e13][e20][e15] The forward adjustment factor can raise TPEA as soon as futures move. [e31]
- **Scenarios #11** (cites e44): - Forecast error is part of the volume risk: the IMM puts the 2025 average net load forecast error at about 452 MW and says forecasts systematically under-forecast IRR generation and over-forecast load. [e44]
- **Scenarios #14** (cites e11, e38): - Summer 2026 set an all-time demand record, yet ERCOT reports real-time prices were lower than in 2024 and 2025 because of higher supply, particularly in daylight hours. [e11][e38]
- **Scenarios #15** (cites e36): - (Reasoning) A hedge bought at a premium that expires out of the money is the cost of insurance, not a mistake; judge it against the exposure it removed, such as ERCOT's $192,000 per MW four-day illustration at the real-time cap. [e36]
- **Link to retail-hedging** (cites e2): example-of Retail Load Hedging: The scenario applies the general ways LSEs manage price exposure, such as generation, PPAs, futures and the day-ahead market. [e2]
- **Link to dam** (cites e2, e6): used-in Day-Ahead Market (DAM): Buying in the day-ahead market is one way LSEs manage price exposure; the day-ahead market cleared 62% of real-time load in 2025. [e2][e6]
- **Link to rtm** (cites e4): affects Real-Time Market (RTM): The QSE's Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price. [e4]
- **Link to offer-cap** (cites e9, e23, e24) FLAG number-not-in-quote: 25.509: related Offer Caps (HCAP / LCAP / SWCAP): Since RTC go-live the sources show a $5,000/MWh day-ahead cap and a $2,000/MWh real-time cap, while PUCT rule 25.509 still states a $5,000 HCAP. [e9][e23][e24]
- **Link to credit-tpe** (cites e12): affects Credit, Collateral & TPE: A Counter-Party must keep Financial Security at or above its Total Potential Exposure at all times. [e12]
- **Link to mass-transition** (cites e18): related Mass Transition: If a breaching Market Participant that is also an LSE has its rights revoked, ERCOT initiates a Mass Transition of its ESI IDs. [e18]
- **Link to net-load** (cites e10): related Net Load: Most 2025 price spikes came in the 7 to 9 p.m. peak net load hours. [e10]
- **Link to load-zone** (cites e4, e5): settles Load Zone: The Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price and includes the QSE's AML there. [e4][e5]
- **Link to exchanges-ice-nodal** (cites e25, e16): related ICE & Nodal Exchange: ICE lists an ERCOT North 345KV Real-Time Peak Fixed Price Future, a monthly cash-settled contract on peak hourly ERCOT prices. [e25][e16]
- **Link to volumetric-risk** (cites e4, e5): example-of Volumetric Risk: A heat wave is a volume problem for a REP because load above its purchases settles at the real-time Load Zone price. [e4][e5]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) "Our risk in a heat wave is the load we did not buy ahead, because it settles at the real-time zonal price, and the worst hours are now the evening net-load peak. We close most of the gap in the day-ahead market or with bilateral or futures hedges, and we make sure our collateral can carry the larger real-time liability ERCOT will estimate."
- (Say it like this) (Guidance) For the credit follow-up: "ERCOT's exposure formula looks back at our last two weeks of real-time bills and scales them by forward prices, so the collateral call lands during the heat wave, not after it."
- (Scenarios) - (Reasoning) Start by measuring the open position by hour: forecast load at the Load Zone minus day-ahead, bilateral and futures cover, with extra attention to the evening hours.
- (Scenarios) - (Reasoning) A hub-based future leaves basis between the hub and your Load Zone, and it fixes a flat volume, so it does not follow the heat-driven shape of your load.
- (Scenarios) - Suppose (illustrative) 500 MW of load is unhedged for three evening hours and real-time averages $2,000 per MWh: the cost is 500 x 3 x 2,000 = $3 million, against about $150,000 at $100 per MWh.
- (Scenarios) - (Reasoning) Close with a plan: hedge the forecast volume ahead of the event, keep a buffer for forecast error in the evening hours, and pre-arrange extra collateral rather than waiting for the call.
- (Scenarios) - (Reasoning) The lesson for sizing is the hours: hedge the evening net-load hours more heavily than the midday gross peak.
- (Scenarios) - Suppose (illustrative) the REP paid a $5 per MWh premium on 200 MW for 16 peak hours over five days: 200 x 16 x 5 x 5 = $80,000, which is the price of avoiding the tail described above.

