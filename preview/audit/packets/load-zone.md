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

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.1, paragraphs (1) and (2) · text copy line 2313 · heading above: 3.4.1 Load Zone Types

BEFORE: …h Electrical Bus. 3.4.1 Load Zone Types (1) The Load Zone types are: (a) The Competitive Load Zones; (b) The Non-Opt-In Entity (NOIE) Load Zones created pursuant to Section 3.4.3, NOIE Load Zones; and (c) The Direct Current Tie (DC Tie) Load Zones as defined in Section 3.4.4, DC Tie Load Zones. (2) 
QUOTE: The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications, less any Electrical Buses that are assigned to a NOIE Load Zone or a DC Tie Load Zone.
AFTER:  3.4.2 Load Zone Modifications (1) Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after t…

### e5 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.2, paragraph (1) · text copy line 2317 · heading above: 3.4.2 Load Zone Modifications

BEFORE: …e Load Zones. (2) The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications, less any Electrical Buses that are assigned to a NOIE Load Zone or a DC Tie Load Zone. 3.4.2 Load Zone Modifications (1) 
QUOTE: Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below.
AFTER:  DC Tie Load Zones are not subject to these requirements. (2) The addition of Load that is new to the ERCOT System to an existing Load Zone does not constitute a change to a Load Zone under this section. This provision includes the transfer of existing Load from a non-ERCOT Control Area into a Load …

### e6 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.3, paragraph (1)(a) · text copy line 2327 · heading above: 3.4.3 NOIE Load Zones

BEFORE: …ve year of the Load Zone change. The move to a Competitive Load Zone requires ERCOT Board approval and shall be effective no sooner than the first day of the PCRR Nomination Year. 3.4.3 NOIE Load Zones (1) The descriptions and conditions set forth below apply to Load Zones established by NOIEs: (a) 
QUOTE: There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, and Lower Colorado River Authority (LCRA);
AFTER:  (b) Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using "Cost-Allocation Load Zones," which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications. For these allocation purposes, any…

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

### e9 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.4, paragraph (1) · text copy line 2341 · heading above: 3.4.4 DC Tie Load Zones

BEFORE: …Load Zone that is an aggregation of NOIE systems of which less than all of the NOIEs opt into Customer Choice, each remaining NOIE in that NOIE Load Zone may choose to have its Load merged into the appropriate Competitive Load Zone(s) under the same four-year time frame. 3.4.4 DC Tie Load Zones (1) 
QUOTE: A DC Tie Load Zone contains only the Electrical Bus in the ERCOT Transmission Grid that connects the DC Tie and is used in the settlement of the DC Tie Load in that zone.
AFTER:  3.4.5 Additional Load Buses (1) ERCOT shall assign new Electrical Buses to a Load Zone and Cost Allocation Zone in accordance with the following rules; changes are effective immediately: (a) For each new Electrical Bus serving Load of a NOIE that is a part of a NOIE Load Zone, the new Electrical Bu…

### e10 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Recommendation 2020-3 summary · text copy line 9077

BEFORE: …ds while complying with HB 1500. We continue to recommend that ERCOT implement DRRS using the design principles outlined above. 2020-3: Reconfigure Load Zones to Reflect Prevailing Congestion Patterns Load zones are groups of load nodes in the ERCOT grid that experience similar congestion patterns. 
QUOTE: Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone.
AFTER:  By aggregating prices this way, the system shields loads from nodal price volatility and simplifies market settlements. Beyond simplifying settlements, load zone prices also provide important short- and long-term economic signals. When they accurately capture congestion patterns, they can inform co…

### e11 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter V.G, Load Zone Configuration · text copy line 5943

BEFORE: …icate congestion conditions to the market through price signals. By averaging nodal prices within each zone, they provide clear price signals that reflect persistent transmission constraints between regions, including signals that transmission investment may be needed when congestion costs persist. 
QUOTE: However, when a load zone contains substantial internal congestion, those costs are averaged across loads and are no longer clearly associated with specific transmission limitations.
AFTER:  As a result, the economic signal that would otherwise indicate the value of relieving congestion through transmission upgrades or reconfiguration is obscured, which reduces the effectiveness of zonal prices in guiding efficient planning and investment decisions. 1. The Case for Updating the Load Zo…

### e12 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I.C, Zonal Energy Prices · text copy line 1702

BEFORE: …GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#)%&, !#,%#) !#*%,& !)"%,& Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. 
QUOTE: The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained.
AFTER:  This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone. We expand in Chapter V on how the load zones in ERCOT have not been updated since 2003 and we recommend updating them to reflect ERCO…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.5, paragraph (1)(c) · text copy line 2351 · heading above: 3.4.5 Additional Load Buses

BEFORE: …al Bus will be assigned to that NOIE Load Zone; (b) For each new Electrical Bus not covered in paragraph (a) above, connected via Transmission Facilities to Electrical Buses all located within the same Competitive Load Zone, the new Electrical Bus will be assigned to that Competitive Load Zone; (c) 
QUOTE: For each new Electrical Bus not covered in paragraphs (a) or (b) above, ERCOT shall simulate LMPs for the annual peak hour of the system with the new Electrical Bus incorporated into the model. ERCOT shall assign that new Electrical Bus to the Competitive Load Zone with the closest matching zonal Settlement Point Price to the new Electrical Bus's LMP
AFTER: ; (d) For each new Electrical Bus covered in paragraph (a) above and connected via Transmission Facilities to Electrical Buses all located within the same Cost Allocation Zone, then the new Electrical Bus will be assigned to that Cost Allocation Zone; (e) For each new Electrical Bus covered in parag…

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

### e15 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Chapter I, Congestion section · text copy line 902

BEFORE: …tial load has sprawled far from historical population centers. Moreover, renewable resources located far from load centers increasingly serve load. As these patterns shift, ERCOT should re-evaluate whether the current load zone boundaries still reflect meaningful economic and operational groupings. 
QUOTE: We continue to recommend that ERCOT revise the prevailing load zone configuration to reflect these evolving congestion patterns.
AFTER:  Market Operations Taken together, the ERCOT wholesale markets coordinate the provision of energy and reserves from resources to maintain reliability and provide long-term economic signals governing new investment and retirement decisions. Ideally, the markets should procure and dispatch all resourc…

### e17 · `ercot-hubs-load-zones-page` · tier 2 · ERCOT Hubs and Load Zones display (settlement point names)
locator: ERCOT display "Real-Time LMPs for Load Zones and Trading Hubs", Settlement Point column (snapshot of a live page; the prices are those at retrieval and are not the point of the quote) · alt copy line 12

BEFORE: …TRDPA + LMP HB_BUSAVG | 36.16 | -2.54 | 36.58 | -2.49 HB_HOUSTON | 36.02 | -2.69 | 36.44 | -2.64 HB_HUBAVG | 37.44 | -2.01 | 37.86 | -1.96 HB_NORTH | 34.32 | -3.30 | 34.74 | -3.25 HB_PAN | 33.70 | -3.74 | 34.12 | -3.69 HB_SOUTH | 37.76 | -1.90 | 38.18 | -1.85 HB_WEST | 41.67 | -0.13 | 42.09 | -0.08 
QUOTE: LZ_AEN | 37.40 | -2.06 | 37.82 | -2.01 LZ_CPS | 38.17 | -1.72 | 38.59 | -1.67 LZ_HOUSTON | 36.10 | -2.65 | 36.52 | -2.60 LZ_LCRA | 37.72 | -1.92 | 38.14 | -1.87 LZ_NORTH | 34.44 | -3.41 | 34.86 | -3.36 LZ_RAYBN | 34.25 | -3.49 | 34.67 | -3.44 LZ_SOUTH | 37.80 | -1.88 | 38.22 | -1.83 LZ_WEST | 50.55 | 3.89 | 50.97 | 3.94
AFTER: …

## Statements to check

- **Definition #1** (cites e1, e3): A Load Zone is a group of power flow buses (in the DAM and CRR Auction) or Electrical Buses (in the Real-Time Market) assigned to the same zone under Protocol Section 3.4, and every bus in ERCOT with Load must be assigned to one for Settlement. [e1][e3]
- **How it works #1** (cites e3, e2): In real time, the Load Zone Settlement Point Price is the Load-weighted average of the LMPs at all Electrical Buses assigned to the zone, with the weights taken from State Estimator Load at each bus. [e3] In the day-ahead, ERCOT calculates the zone price using Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint, with weights from Load distribution factors. [e2]
- **How it works #2** (cites e4, e9, e6): The Protocols refer to Competitive Load Zones, NOIE Load Zones, and DC Tie Load Zones. [e4] The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market, unless changed, less any buses assigned to a NOIE or DC Tie Load Zone. [e4] A DC Tie Load Zone holds only the one Electrical Bus connecting the DC Tie. [e9] The four NOIE Load Zones approved before nodal implementation are Austin Energy, City Public Service, Rayburn Country Electric Cooperative and LCRA. [e6]
- **How it works #3** (cites e5, e13): Changes are slow. Competitive and NOIE Load Zones can be added, deleted or changed only with ERCOT Board approval, and approved changes take effect 48 months after the end of the month of approval, with listed exceptions. [e5] A new Electrical Bus not covered by the earlier paragraphs is assigned to the Competitive Load Zone whose zonal price best matches a simulated annual-peak-hour LMP at that bus. [e13]
- **ERCOT context #1** (cites e7, e10): The IMM names the four current load zones as West, North, South and Houston, established in 2003. [e7] Loads settle at the zone price, a load-weighted average of nodal prices, while generators settle at their own nodal prices. [e10]
- **ERCOT context #2** (cites e7, e11, e12, e15): The IMM says congestion within load zones continues to outpace congestion between load zones. [e7] When a zone has substantial internal congestion, its cost is averaged across loads and no longer tied to specific transmission limits. [e11] The IMM notes that the West zone includes both the export-constrained Panhandle and the import-constrained Permian Basin. [e12] It continues to recommend that ERCOT revise the load zone configuration to reflect evolving congestion patterns. [e15]
- **Key facts #1** (cites e1): - Every bus with Load must be assigned to a Load Zone for Settlement. [e1]
- **Key facts #2** (cites e3): - Real-time Load Zone SPP is the State Estimator Load-weighted average of Electrical Bus LMPs. [e3]
- **Key facts #3** (cites e5): - Zone changes require ERCOT Board approval and take effect 48 months after the end of the approval month (with exceptions). [e5]
- **Key facts #4** (cites e4, e7): - The four Competitive Load Zones date from the 2003 market; the IMM names them West, North, South and Houston. [e4][e7]
- **Key facts #5** (cites e6): - There are four NOIE Load Zones approved before nodal start-up. [e6]
- **Key facts #6** (cites e9): - A DC Tie Load Zone contains only the one Electrical Bus connecting the DC Tie. [e9]
- **Key facts #7** (cites e17): - ERCOT's real-time price display lists eight Load Zone Settlement Points by the names LZ_AEN, LZ_CPS, LZ_HOUSTON, LZ_LCRA, LZ_NORTH, LZ_RAYBN, LZ_SOUTH and LZ_WEST. [e17]
- **Say it like this #1** (cites e4, e7, e12): A load zone is a group of buses that settle load at one load-weighted average price. ERCOT has used the same four competitive zones since 2003 [e4][e7], and the IMM's view is that congestion inside zones now outpaces congestion between them [e7], with the West zone combining very different areas [e12].
- **Common confusion #1** (cites e3, e16): - Load Zone versus Hub: a zone price is weighted by Load, while, for each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of its Hub Buses' Real-Time LMPs. [e3][e16]
- **Common confusion #2** (cites e4): - The protocol text refers to Competitive, NOIE and DC Tie Load Zones and does not use the LZ_ names. [e4]
- **Common confusion #3** (cites e14): - NOIE Load Zones and Competitive Load Zones are both Load Zones, but the Cost-Allocation Load Zones used for LRS allocation are the four 2003 zones. [e14]
- **Common confusion #4** (cites e10): - Generators do not settle at the Load Zone price; the IMM says they settle at the nodal level at their own locational marginal prices. [e10]
- **Questions #2** (cites e3): As the Load-weighted average of LMPs at all Electrical Buses in the zone, with Load from the State Estimator at each bus. [e3]
- **Questions #4** (cites e7, e11, e12): It says intrazonal congestion continues to outpace interzonal congestion, and that internal zone congestion is averaged across loads, obscuring transmission limitations. [e7][e11] The IMM notes that the West zone includes both the Panhandle and the Permian Basin. [e12]
- **Questions #6** (cites e5): No. Board approval is needed and changes take effect 48 months after the end of the month of approval. [e5]
- **Questions #8** (cites e9): A zone containing only the Electrical Bus that connects the DC Tie, used to settle DC Tie Load. [e9]
- **Link to settlement-point** (cites e8): is-a Settlement Point: A Load Zone is one of the three kinds of Settlement Point. [e8]
- **Link to spp** (cites e2, e3): determines SPP (Settlement Point Price): Each Load Zone has a Settlement Point Price calculated as a load-weighted price. [e2][e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Load Zone prices are built from bus-level LMPs. [e3]
- **Link to trading-hub** (cites e16, e3): contrasts-with Trading Hubs: For each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of its Hub Buses, while a Load Zone price is weighted by Load. [e16][e3]
- **Link to congestion** (cites e7): related Transmission Congestion: Zones are meant to group areas with similar congestion, and the IMM says intrazonal congestion now exceeds interzonal congestion. [e7]
- **Link to load-ratio-share** (cites e14): related Load Ratio Share (LRS): Zonal Load Ratio Share cost allocation uses the four 2003 zones as Cost-Allocation Load Zones. [e14]
- **Link to lse** (cites e10): related LSE (Load Serving Entity): Loads are billed at the load zone price. [e10]
- **Link to crr** (cites e1): related CRR (Congestion Revenue Right): Load Zones are also used for Congestion Revenue Right Settlement, as a zone of power flow buses. [e1]
