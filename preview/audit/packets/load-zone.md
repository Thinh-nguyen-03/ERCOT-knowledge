# Audit packet: Load Zone (load-zone)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Load Zone · text copy line 1429

BEFORE: …ERCOT AML for an interval. Load Resource (see Resource) Load Serving Entity (LSE) An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs. Load Zone (1) 
QUOTE: In the Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Auction, a group of power flow buses assigned to the same zone under Section 3.4, Load Zones. Every power flow bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes.
AFTER:  (2) In the Real-Time Market (RTM), a group of Electrical Buses assigned to the same zone under Section 3.4. Every Electrical Bus in ERCOT with a Load must be assigned to a Load Zone for Settlement purposes. (3) A Non-Opt-In Entity (NOIE) Load Zone is a type of Load Zone. Load Zone LMP (see Location…

### e2 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, paragraph (1) · text copy line 2299 · heading above: 3.4 Load Zones

BEFORE: …intain a record of all work approved in accordance with Section 3.3, Management of Changes to ERCOT Transmission Grid, and shall publish, and update monthly, information on the MIS Secure Area regarding each new Transmission Element to be installed on the ERCOT Transmission Grid. 3.4 Load Zones (1) 
QUOTE: ERCOT shall assign every power flow bus to a Load Zone for Day-Ahead Market (DAM) and Congestion Revenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors.
AFTER:  (2) ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The …

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4, paragraph (2) · text copy line 2301 · heading above: 3.4 Load Zones

BEFORE: …evenue Right (CRR) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors. (2) 
QUOTE: ERCOT shall assign every Electrical Bus to a Load Zone for Real-Time Market (RTM) Settlement purposes. ERCOT shall calculate a Settlement Point Price for each Load Zone as the Load-weighted average of the Locational Marginal Prices (LMPs) at all Electrical Buses assigned to that Load Zone. The Load-weighting must be determined using the Load, if any, from the State Estimator at each Electrical Bus.
AFTER:  3.4.1 Load Zone Types (1) The Load Zone types are: (a) The Competitive Load Zones; (b) The Non-Opt-In Entity (NOIE) Load Zones created pursuant to Section 3.4.3, NOIE Load Zones; and (c) The Direct Current Tie (DC Tie) Load Zones as defined in Section 3.4.4, DC Tie Load Zones. (2) The Competitive L…

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I, Congestion section · text copy line 894

BEFORE: … constraints. The drop in constraint violations is also influenced by the increasing role ESRs play in congestion relief. ESRs are particularly effective at managing congestion when they are located at key locations where they can influence power flows in both directions by charging or discharging. 
QUOTE: Congestion within load zones continues to outpace congestion between load zones. Load zones are aggregations of load nodes on the system that experience similar congestion patterns. ERCOT established its current four load zones - West, North, South, and Houston - in 2003.
AFTER:  At that time, the geographic distribution of load and generation, as well as the generation mix, was very different. Industrial load has grown substantially in West Texas, driven by electrification of oil and gas operations and data center development, and residential load has sprawled far from his…

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Point · text copy line 2911

BEFORE: …---------------------------------------------+ Settlement Only Generator (SOG) (see Resource) Settlement Only Distribution Generator (SODG) (see Resource) Settlement Only Transmission Generator (SOTG) (see Resource) Settlement Only Transmission Self-Generator (SOTSG) (see Resource) Settlement Point 
QUOTE: A Resource Node, Load Zone, or Hub.
AFTER:  Settlement Point Price A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations. Settlement Quality Meter Data Data that has been edite…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-3 summary · text copy line 9077

BEFORE: …ds while complying with HB 1500. We continue to recommend that ERCOT implement DRRS using the design principles outlined above. 2020-3: Reconfigure Load Zones to Reflect Prevailing Congestion Patterns Load zones are groups of load nodes in the ERCOT grid that experience similar congestion patterns. 
QUOTE: Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone.
AFTER:  By aggregating prices this way, the system shields loads from nodal price volatility and simplifies market settlements. Beyond simplifying settlements, load zone prices also provide important short- and long-term economic signals. When they accurately capture congestion patterns, they can inform co…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained.
AFTER:  This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone. We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCO…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.3, paragraph (1)(b) · text copy line 2329 · heading above: 3.4.3 NOIE Load Zones

BEFORE: …nd conditions set forth below apply to Load Zones established by NOIEs: (a) There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, and Lower Colorado River Authority (LCRA); (b) 
QUOTE: Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using "Cost-Allocation Load Zones," which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications
AFTER: . For these allocation purposes, any NOIE Load Zone is considered to be located entirely within the 2003 ERCOT Congestion Management Zone (CMZ) that represented the largest Load for that NOIE or group of NOIEs in 2003; (c) A separate NOIE Load Zone is made up of a group of NOIEs that are parties to …

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.5, paragraph (2) · text copy line 3917 · heading above: 6.6.1.5 Hub LMPs

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.6.1.5 Hub LMPs (1) The Hub LMPs shall be posted on the ERCOT website. (2) 
QUOTE: For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub.
AFTER:  The Hub LMP for a SCED Interval is calculated as follows: HUBLMP _(Hub, y) = [](HUBDF _(hb, Hub) * RTHBP _(hb, Hub, y)), if HB _(Hub) ≠ 0 HUBLMP _(Hub, y) = HUBLMP_(ERCOT345Bus), if HB _(Hub) = 0 Where: RTHBP _(hb, Hub, y) = [](HBDF _(b, hb, Hub) * RTLMP _(b, hb, Hub, y)) HUBDF _(hb, Hub) = 1 / HB …

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.2, paragraph (3) · text copy line 2321 · heading above: 3.4.2 Load Zone Modifications

BEFORE: …udes the transfer of existing Load from a non-ERCOT Control Area into a Load Zone in the ERCOT System. Adding Load that is new to the ERCOT System to an existing Load Zone does not require ERCOT Board approval, and no notice period is required prior to adding such Load to an existing Load Zone. (3) 
QUOTE: A NOIE that was included in the establishment of an automatic pre-assigned NOIE Load Zone under paragraph (1)(c) of Section 3.4.3 may elect to be assigned to an appropriate Competitive Load Zone after giving notice of termination of its power supply arrangement if a request to be assigned to a Competitive Load Zone was given to ERCOT at least 90 days prior to the start of the Pre-Assigned Congestion Revenue Right (PCRR) nomination window for the effective year of the Load Zone change. The move to a Competitive Load Zone requires ERCOT Board approval and shall be effective no sooner than the first day of the PCRR Nomination Year.
AFTER:  3.4.3 NOIE Load Zones (1) The descriptions and conditions set forth below apply to Load Zones established by NOIEs: (a) There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, an…

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, paragraph (5) (DAM Clearing Process; text in effect refers to CRRs) · text copy line 2596 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …Ancillary Service Quantities will first be used to meet the ASDCs, and the remaining Ancillary Service needs are met from Ancillary Service Offers, as long as the costs do not exceed the ASDC value. ERCOT may not buy more of one Ancillary Service in place of the quantity of a different service. (5) 
QUOTE: ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone. The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions.
AFTER:  The Private Use Network Load distribution factors are based on an estimated Load value considering historical net consumption at all Private Use Networks. If ERCOT decides, in its sole discretion, to change the Load distribution factors for reasons such as anticipated weather events or holidays, ER…

### e46 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1704

BEFORE: …he trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. 
QUOTE: This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone.
AFTER:  We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCOT's current, more complex topology. D. Shortage and Reliability Pricing Before RTC was implemented, ERCOT's market design featured two distinct price adders, the ORDC…

## Statements to check (new or changed since the last audit)

- **Link to settlement-point** (cites e8): is-a Settlement Point: A Load Zone is one of the three kinds of Settlement Point. [e8]
- **Link to spp** (cites e2, e3): determines SPP (Settlement Point Price): Each Load Zone has a Settlement Point Price calculated as a load-weighted price. [e2][e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Load Zone prices are built from bus-level LMPs. [e3]
- **Link to trading-hub** (cites e16, e3): contrasts-with Trading Hubs: For each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of its Hub Buses, while a Load Zone price is weighted by Load. [e16][e3]
- **Link to congestion** (cites e7): related Transmission Congestion: Zones are meant to group areas with similar congestion, and the IMM says intrazonal congestion now exceeds interzonal congestion. [e7]
- **Link to load-ratio-share** (cites e14): related Load Ratio Share (LRS): Zonal Load Ratio Share cost allocation uses the four 2003 zones as Cost-Allocation Load Zones. [e14]
- **Link to lse** (cites e10): related LSE (Load Serving Entity): Loads are billed at the load zone price. [e10]
- **Link to crr** (cites e1): related CRR (Congestion Revenue Right): Load Zones are also used for Congestion Revenue Right Settlement, as a zone of power flow buses. [e1]
- **Link to ptp-obligation** (cites e27): related PTP Obligation: In the Day-Ahead, Load distribution factors allocate offers, bids, and the source and sink of CRRs at a Load Zone across the zone's buses (the saved Protocol text in effect names CRRs, not PTP Obligations). [e27]
- **Link to shift-factor** (cites e2): related Shift Factors: The day-ahead Load Zone price uses Load-weighted aggregated Shift Factors. [e2]
- **Link to pcrr** (cites e19): related PCRR (Pre-Assigned CRR): A NOIE's move to a Competitive Load Zone is tied to the PCRR nomination window timing. [e19]
- **Link to hb-west** (cites e12): related HB_WEST (West Hub): The IMM's West Zone findings concern the Load Zone, not the West Hub. [e12]
- **Link to negative-prices** (cites e46) FLAG number-not-in-quote: 2025: related Negative Prices: The IMM says the West zone had the most negative-price intervals in 2025. [e46]

