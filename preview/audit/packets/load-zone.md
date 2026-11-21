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
QUOTE: Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below. DC Tie Load Zones are not subject to these requirements.
AFTER:  (2) The addition of Load that is new to the ERCOT System to an existing Load Zone does not constitute a change to a Load Zone under this section. This provision includes the transfer of existing Load from a non-ERCOT Control Area into a Load Zone in the ERCOT System. Adding Load that is new to the …

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

### e18 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.2, paragraph (2) · text copy line 2319 · heading above: 3.4.2 Load Zone Modifications

BEFORE: …ph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below. DC Tie Load Zones are not subject to these requirements. (2) 
QUOTE: The addition of Load that is new to the ERCOT System to an existing Load Zone does not constitute a change to a Load Zone under this section.
AFTER:  This provision includes the transfer of existing Load from a non-ERCOT Control Area into a Load Zone in the ERCOT System. Adding Load that is new to the ERCOT System to an existing Load Zone does not require ERCOT Board approval, and no notice period is required prior to adding such Load to an exis…

### e19 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.2, paragraph (3) · text copy line 2321 · heading above: 3.4.2 Load Zone Modifications

BEFORE: …udes the transfer of existing Load from a non-ERCOT Control Area into a Load Zone in the ERCOT System. Adding Load that is new to the ERCOT System to an existing Load Zone does not require ERCOT Board approval, and no notice period is required prior to adding such Load to an existing Load Zone. (3) 
QUOTE: A NOIE that was included in the establishment of an automatic pre-assigned NOIE Load Zone under paragraph (1)(c) of Section 3.4.3 may elect to be assigned to an appropriate Competitive Load Zone after giving notice of termination of its power supply arrangement if a request to be assigned to a Competitive Load Zone was given to ERCOT at least 90 days prior to the start of the Pre-Assigned Congestion Revenue Right (PCRR) nomination window for the effective year of the Load Zone change.
AFTER:  The move to a Competitive Load Zone requires ERCOT Board approval and shall be effective no sooner than the first day of the PCRR Nomination Year. 3.4.3 NOIE Load Zones (1) The descriptions and conditions set forth below apply to Load Zones established by NOIEs: (a) There are four NOIE Load Zones t…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.3, paragraph (1)(d) and (f) · text copy line 2333 · heading above: 3.4.3 NOIE Load Zones

BEFORE: …ss of 2,300 MW. A NOIE that is a member of this separate NOIE Load Zone and that has given notice of termination of its pre-1999 power supply arrangement may elect to be assigned to an appropriate Competitive Load Zone. Such an election shall be subject to the approval process in Section 3.4.2; (d) 
QUOTE: NOIEs may participate in only one NOIE Load Zone, and all Loads served by that NOIE must be contained within that Load Zone;
AFTER:  (e) Except as specified otherwise in this subsection, Load Zones established by NOIEs will be treated the same as other Load Zones, including a 48-month notice requirement for ERCOT Board approval of any changes to Load Zones. However, the addition of Load that is new to the ERCOT System, including…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.3, paragraph (1)(f) · text copy line 2337 · heading above: 3.4.3 NOIE Load Zones

BEFORE: …tice requirement for ERCOT Board approval of any changes to Load Zones. However, the addition of Load that is new to the ERCOT System, including the transfer of existing Load from a non-ERCOT Control Area, into an existing NOIE Load Zone is not a change to a Load Zone under these Protocols; and (f) 
QUOTE: Four years after a NOIE offers its Customers retail choice, the NOIE's Load must be merged into the appropriate Competitive Load Zone(s).
AFTER:  For a Load Zone that is an aggregation of NOIE systems of which less than all of the NOIEs opt into Customer Choice, each remaining NOIE in that NOIE Load Zone may choose to have its Load merged into the appropriate Competitive Load Zone(s) under the same four-year time frame. 3.4.4 DC Tie Load Zon…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.5, paragraph (1), (a) and (b) · text copy line 2345 · heading above: 3.4.5 Additional Load Buses

BEFORE: …priate Competitive Load Zone(s) under the same four-year time frame. 3.4.4 DC Tie Load Zones (1) A DC Tie Load Zone contains only the Electrical Bus in the ERCOT Transmission Grid that connects the DC Tie and is used in the settlement of the DC Tie Load in that zone. 3.4.5 Additional Load Buses (1) 
QUOTE: ERCOT shall assign new Electrical Buses to a Load Zone and Cost Allocation Zone in accordance with the following rules; changes are effective immediately:
AFTER:  (a) For each new Electrical Bus serving Load of a NOIE that is a part of a NOIE Load Zone, the new Electrical Bus will be assigned to that NOIE Load Zone; (b) For each new Electrical Bus not covered in paragraph (a) above, connected via Transmission Facilities to Electrical Buses all located within…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.4.5, paragraph (1)(a)-(b) · text copy line 2347 · heading above: 3.4.5 Additional Load Buses

BEFORE: …OT Transmission Grid that connects the DC Tie and is used in the settlement of the DC Tie Load in that zone. 3.4.5 Additional Load Buses (1) ERCOT shall assign new Electrical Buses to a Load Zone and Cost Allocation Zone in accordance with the following rules; changes are effective immediately: (a) 
QUOTE: For each new Electrical Bus serving Load of a NOIE that is a part of a NOIE Load Zone, the new Electrical Bus will be assigned to that NOIE Load Zone; (b) For each new Electrical Bus not covered in paragraph (a) above, connected via Transmission Facilities to Electrical Buses all located within the same Competitive Load Zone, the new Electrical Bus will be assigned to that Competitive Load Zone;
AFTER:  (c) For each new Electrical Bus not covered in paragraphs (a) or (b) above, ERCOT shall simulate LMPs for the annual peak hour of the system with the new Electrical Bus incorporated into the model. ERCOT shall assign that new Electrical Bus to the Competitive Load Zone with the closest matching zon…

### e24 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1) · text copy line 3795 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.1.2 Real-Time Settlement Point Price for a Load Zone (1) 
QUOTE: The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone.
AFTER:  The Real-Time Settlement Point Price for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y…

### e25 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (1), formula for DC Tie Load Zone · text copy line 3803 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …rice for a Load Zone Settlement Point for a 15-minute Settlement Interval is calculated as follows: RTSPP = Max (-$251, (([]TLMP _(y) * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y) * SEL _(b, y)) / []SEL _(b, y) 
QUOTE: For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y)
AFTER:  Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y)= TLMP _(y) / []TLMP _(y) (2) For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrate…

### e26 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.2, paragraph (2) · text copy line 3813 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: … * LZLMP _(y)) / []TLMP _(y)) + RTRDP) For all Load Zones except Direct Current Tie (DC Tie) Load Zones: LZLMP _(y) = [] (RTLMP _(b, y) * SEL _(b, y)) / []SEL _(b, y) For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y) Where: RTRDP = [](RNWF _(y) * RTRDPA _(y)) RNWF _(y)= TLMP _(y) / []TLMP _(y) (2) 
QUOTE: For all Settlement calculations in which a 15-minute Real-Time Settlement Point Price for a Load Zone is required in order to perform Settlement for a 15-minute quantity that is represented as one value (the integrated value for the 15-minute interval) but varies with each SCED interval within the 15-minute Settlement Interval, an energy-weighted Real-Time Settlement Point Price shall be used and is calculated as follows:
AFTER:  RTSPPEW = Max [-$251, ([][](RTLMP _(b, y) * LZWF _(b, y)) + RTRDP)] For all Load Zones except DC Tie Load Zones: LZWF _(b, y) = (SEL _(b, y) * TLMP _(y)) / [[][](SEL _(b, y) * TLMP _(y))] For a DC Tie Load Zone: LZWF _(b, y) = (SEL _(b, y) * TLMP _(y)) / [[][](SEL _(b, y) * TLMP _(y))] SEL _(b, y) …

### e27 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.5.1, paragraph (5) (DAM Clearing Process; text in effect refers to CRRs) · text copy line 2596 · heading above: 4.5.1 DAM Clearing Process

BEFORE: …Ancillary Service Quantities will first be used to meet the ASDCs, and the remaining Ancillary Service needs are met from Ancillary Service Offers, as long as the costs do not exceed the ASDC value. ERCOT may not buy more of one Ancillary Service in place of the quantity of a different service. (5) 
QUOTE: ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone. The non-Private Use Network Load distribution factors are based on historical State Estimator hourly distribution using a proxy day methodology representing anticipated weather conditions.
AFTER:  The Private Use Network Load distribution factors are based on an estimated Load value considering historical net consumption at all Private Use Networks. If ERCOT decides, in its sole discretion, to change the Load distribution factors for reasons such as anticipated weather events or holidays, ER…

### e28 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.1.4, Load Zone LMPs, variable table, SEL · text copy line 3899 · heading above: 6.6.1.4 Load Zone LMPs

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | SEL _(b, y) | MW | State Estimator Load at bus per SCED interval
QUOTE: The Load from the State Estimator, including a calculated net Load value at each Private Use Network and adjustments to account for DGR and DESR injections and withdrawals that are settled at a Resource Node, excluding WSL and Non-WSL ESR Charging Load for Electrical Bus b in the Load Zone, for the SCED interval y.
AFTER:  | | | | | | | | +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e29 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1: Average Annual Real-Time Energy Market Prices by Zone, Houston row ($ per MWh, 2021 to 2025) · ocr copy line 1115, OCR page 29

BEFORE: …er slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 
QUOTE: Houston $136.69 $82.47 $72.88 $30.24 $34.95
AFTER:  North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant…

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, North row · ocr copy line 1116, OCR page 29

BEFORE: …in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 
QUOTE: North $221.52 $77.30 $78.01 $30.42 $35.34
AFTER:  South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-co…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, South row · ocr copy line 1117, OCR page 29

BEFORE: …s and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 
QUOTE: South $200.35 $74.39 $71.12 $34.66 $37.59
AFTER:  West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which ha…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, West row · ocr copy line 1118, OCR page 29

BEFORE: …hrough DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 
QUOTE: West $111.56 $66.62 $67.56 $35.88 $41.59
AFTER:  Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Table 1, ERCOT row and note · ocr copy line 1114, OCR page 29

BEFORE: …each zone for 2021-2025. These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties. Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) 
QUOTE: ERCOT $179.24 $76.41 $73.28 $32.41 $36.94
AFTER:  Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59 Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone. The West zone inc…

### e34 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 29 (OCR), Chapter II.C, Zonal Energy Prices, introduction to Table 1 · text copy line 1653

BEFORE: …urces in energy markets has played a central role in this shift. C. Zonal Energy Prices Congestion causes the cost to serve load to vary by location, resulting in differences in electricity prices between Load Zones. Table 1 lists the annual load-weighted average prices for each zone for 2021-2025. 
QUOTE: These prices differ slightly from the all-in costs discussed in Section B.1 because they exclude imports and exports to and from the ERCOT grid through DC ties.
AFTER:  Table 1: Average Annual Real-Time Energy Market Prices by Zone !"!# 'E)*H,-.*/M)N-OP-4)*-RST8 '9W;< P#=>?!% BCDNECE !"#$%$& cC*ET !(("%,( GCDET !(++%#, S)NE !"""%,$ !"!! !"!$ !"!% !"!C P=@?%# !'(%)* !**%#+ !*)%#& !$$%$( P=$?!A !*(%'' !*'%+" !*"%"( !$*%,$ P$!?%# !#+%() !#+%)( !#)%$$ !#,%'' P$@?>% !#…

### e35 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 94 (OCR), Chapter V.G.2, Congestion Impact, Figure 45 discussion · text copy line 6021

BEFORE: … Zonal Congestion Cost 2016-2025 !""#A%C'("A%C)("*+,-.("C/+"-CM1C2.%%.(",3 !'(#"" !'(""" !C"" -./00N2/34 5/S07/3 8/.79 W/S79 ;407 !%"" !$"" !#"" !" #"'% #"') #"'C #"'* #"#" #"#' #"## #"#H #"#$ #"#, Figure 45 shows that a growing share of congestion costs materializes as intrazonal congestion costs. 
QUOTE: In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024.
AFTER:  The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. Congestion costs within the West increased by 27% between 2024 and 2025. Next, we…

### e36 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 94 (OCR), Chapter V.G.2, Figure 45 discussion · text copy line 6024

BEFORE: …. In 2025, roughly 9% of congestion costs were interzonal, down from 11% in 2024. The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin. 
QUOTE: Congestion costs within the West increased by 27% between 2024 and 2025.
AFTER:  Next, we discuss a methodology to define load-zone boundaries based on geographic coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new load zones based on geographic coordinates and historical price data.47 W…

### e37 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 93 (OCR), Chapter V.G.1, The Case for Updating the Load Zones in ERCOT · text copy line 5959

BEFORE: …erlying differences in system conditions. The growing divergence in load and generation patterns in ERCOT led us to Recommendation 2020-3, that ERCOT should update the load zone configuration and introduce new load zones to recognize key transmission constraints and minimize intra-zonal congestion. 
QUOTE: A regular process for updating ERCOT's load zone configuration is critical for zonal pricing to send efficient signals to load for consumption and investment. This is especially important because ERCOT's topology will continue to become more complex, while any approved load zone configuration will take effect four years after approval.
AFTER:  2. Congestion Impact Load zones group areas with broadly similar transmission and congestion characteristics so that congestion pricing occurs primarily between zones rather than within them. When congestion is reflected in price differences across load zones, zonal prices provide clear and efficie…

### e38 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 94 (OCR), Chapter V.G.3, Methodology for Defining Load Zones · text copy line 6030

BEFORE: …coordinates and historical pricing outcomes. 3. Methodology for Defining Load Zones Our methodology groups substation-level load nodes into new load zones based on geographic coordinates and historical price data.47 We chose these metrics to define load zones by proximity and congestion conditions. 
QUOTE: We evaluated a 7-load-zone configuration using data from January 2022 through December 2025.
AFTER:  Figure 46 illustrates the resulting distribution of load nodes within the proposed 7-load-zone configuration. 47 The methodology uses k-means clustering refers to a machine learning algorithm used to group data into clusters based on their similarities. This algorithm incorporates geographic proxim…

### e39 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 95 (OCR), Table 6: Real-Time Congestion Rent ($MM) for the 7-Load-Zone Configuration, column headings · ocr copy line 4147, OCR page 95

BEFORE: …trazonal congestion compared to the current load zone map. It also produces more congestion rent between zones because price disparities efficiently reflect geographic differences in the cost of serving load across the grid. Table 6: Real-Time Congestion Rent ($MM) for the 7-Load-Zone Configuration 
QUOTE: Cross Zone Coast North South SouthCentral SouthWest FarWest Panhandle
AFTER:  $ Millions 2021 $392.9 $297.3 $282.5 $271.8 $232.9 $127.1 $139.7 $230.3 2022 $959.1 $377.4 $224.2 $332.6 $206.1 $190.2 $263.3 $212.7 2023 $580.9 $229.8 $245.1 $228.3 $222.6 $168.7 $350.6 $311.5 2024 $513.1 $92.0 $173.3 $254.2 $164.0 $162.2 $277.8 $305.1 2025 $646.3 $206.4 $335.4 $191.8 $171.6 $194.…

### e40 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 153 (OCR), Recommendation 2020-3 · text copy line 9113

BEFORE: …cost units often must serve because the region is import-constrained. Both areas face the same zonal price for settlement despite their very different cost and congestion profiles. We recommend that ERCOT re-evaluate the current load zone configuration to reflect these evolving congestion patterns. 
QUOTE: Because of the CRR auction design, any change to the configuration must take effect at least four years after approval.
AFTER:  In Chapter V.G, we present a potential methodology to reconfigure load zones that would better align settlement prices with actual system conditions. To date, ERCOT has not indicated that it intends to revisit or revise the current load zone structure. 2020-4: Implement a Point-to-Point Obligation …

### e41 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 153 (OCR), Recommendation 2020-3 · text copy line 9116

BEFORE: …evolving congestion patterns. Because of the CRR auction design, any change to the configuration must take effect at least four years after approval. In Chapter V.G, we present a potential methodology to reconfigure load zones that would better align settlement prices with actual system conditions. 
QUOTE: To date, ERCOT has not indicated that it intends to revisit or revise the current load zone structure.
AFTER:  2020-4: Implement a Point-to-Point Obligation Bid Fee Point-to-point (PTP) obligations are financial instruments that allow market participants to take positions on congestion between the day-ahead and real-time markets. Market participants submit PTP bids into the day-ahead market, and the market …

### e42 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 152-153 (OCR), Recommendation 2020-3 · text copy line 9088

BEFORE: … other long-term infrastructure decisions, such as transmission planning. ERCOT's current four load zones - West, North, South, and Houston - were established in 2003. At that time, the geographic distribution of load and generation, as well as the generation mix, differed substantially from today. 
QUOTE: Industrial load has grown substantially in West Texas, driven by electrification of oil-and-gas operations and data center development, and residential load has shifted away from historical population centers.
AFTER:  Moreover, renewable resources located far from load centers increasingly serve load. These shifts make it increasingly important to re-evaluate whether the current load zone boundaries still reflect meaningful economic and operational groupings. One indication that the current load zone groupings n…

### e43 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 153 (OCR), Recommendation 2020-3 · text copy line 9109

BEFORE: …ewable generation frequently creates a local surplus and causes curtailment. In contrast, the Permian Basin, which is in the same load zone, faces significantly higher nodal prices driven by oil and gas-related demand that higher-cost units often must serve because the region is import-constrained. 
QUOTE: Both areas face the same zonal price for settlement despite their very different cost and congestion profiles.
AFTER:  We recommend that ERCOT re-evaluate the current load zone configuration to reflect these evolving congestion patterns. Because of the CRR auction design, any change to the configuration must take effect at least four years after approval. In Chapter V.G, we present a potential methodology to reconf…

### e44 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 97 (OCR), Chapter IV, Load Zone Configuration (2024 report) · text copy line 6379

BEFORE: …rtainty and volatility caused by congestion, making it easier for loads to hedge their positions and manage their cash flow. However, for zonal pricing to send efficient signals to load for consumption and investment, it is crucial that the load zones accurately reflect the topology of the network. 
QUOTE: That is why the IMM recommended in the 2020 SOM that ERCOT update the configuration of load zones and introduce new load zones to recognize key transmission constraints and minimize intra-zonal congestion.
AFTER:  The case for improving the current load zone configuration has grown stronger in recent years. Renewable development, especially solar, has expanded rapidly, while new patterns of load growth have become increasingly misaligned with the existing load zone map. The Permian Basin, a major hub for oil…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e24, e28, e25): Real-time price. In real time, the Load Zone Settlement Point Price is the Load-weighted average of the LMPs at all Electrical Buses assigned to the zone, with the weights taken from State Estimator Load at each bus. [e3][e24] The weight is each bus's State Estimator Load; the Protocol defines that Load as including a calculated net Load at each Private Use Network and adjustments for distribution generation and storage injections and withdrawals settled at a Resource Node, excluding wholesale storage and non-wholesale-storage ESR charging Load (a pending change, NPRR1188, would also exclude certain Controllable Load Resource Load). [e28] For a DC Tie Load Zone the zone LMP is simply the LMP at its one bus. [e25]
- **How it works #2** (cites e26): Energy-weighted price. Where a 15-minute quantity is represented as one value but varies within the interval, Settlement uses an energy-weighted Real-Time Settlement Point Price rather than the simple time-weighted one. [e26]
- **How it works #3** (cites e2, e27): Day-ahead price. In the day-ahead, ERCOT calculates the zone price using Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint, with weights from Load distribution factors. [e2] The distribution factors allocate bids and offers and source and sink quantities at a Load Zone across the power flow buses modeled with Load; the non-Private Use Network factors come from historical State Estimator hourly distribution using a proxy day for anticipated weather. [e27]
- **How it works #4** (cites e4, e9, e6, e20, e21): Zone types. The Protocols refer to Competitive Load Zones, NOIE Load Zones, and DC Tie Load Zones. [e4] The Competitive Load Zones are the four zones in effect during the 2003 ERCOT market, unless changed, less any buses assigned to a NOIE or DC Tie Load Zone. [e4] A DC Tie Load Zone holds only the one Electrical Bus connecting the DC Tie. [e9] The four NOIE Load Zones approved before nodal implementation are Austin Energy, City Public Service, Rayburn Country Electric Cooperative and LCRA. [e6] A NOIE may participate in only one NOIE Load Zone, with all its Loads inside that zone. [e20] Four years after a NOIE offers retail choice its Load must be merged into the appropriate Competitive Load Zone(s). [e21]
- **How it works #5** (cites e5, e18, e19): Changes are slow. Competitive and NOIE Load Zones can be added, deleted or changed only with ERCOT Board approval, and approved changes take effect 48 months after the end of the month of approval, with listed exceptions; DC Tie Load Zones are not subject to these requirements. [e5] Adding Load that is new to the ERCOT System to an existing Load Zone is not a change to the zone. [e18] A NOIE in a pre-assigned NOIE Load Zone may elect to move to a Competitive Load Zone if it asks at least 90 days before the PCRR nomination window for the effective year. [e19]
- **How it works #6** (cites e22, e23, e13): New buses. New Electrical Buses are assigned to a Load Zone and Cost Allocation Zone with changes effective immediately. [e22] A bus serving a NOIE in a NOIE zone goes to that zone, and a bus connected only to buses in one Competitive Load Zone goes to that zone. [e23] Any other new bus is assigned to the Competitive Load Zone whose zonal price best matches a simulated annual-peak-hour LMP at that bus. [e13]
- **ERCOT context #2** (cites e29, e30, e31, e32, e33, e34, e12) FLAG number-not-in-quote: 2021, 2025: Zone price levels. The IMM's Table 1 gives load-weighted average annual real-time prices by zone, in $ per MWh, for 2021 to 2025 in order. Houston: $136.69, $82.47, $72.88, $30.24, $34.95. [e29] North: $221.52, $77.30, $78.01, $30.42, $35.34. [e30] South: $200.35, $74.39, $71.12, $34.66, $37.59. [e31] West: $111.56, $66.62, $67.56, $35.88, $41.59. [e32] ERCOT: $179.24, $76.41, $73.28, $32.41, $36.94. [e33] These prices exclude imports and exports through DC ties. [e34] The IMM notes the West zone had the highest average price in 2025, followed by South. [e12]
- **ERCOT context #3** (cites e7, e35, e36, e11, e12, e43, e42, e15, e44): Why the zones are criticised. The IMM says congestion within load zones continues to outpace congestion between load zones. [e7] In 2025 roughly 9% of congestion costs were interzonal, down from 11% in 2024, and congestion within the West increased by 27% between 2024 and 2025. [e35][e36] When a zone has substantial internal congestion, its cost is averaged across loads and no longer tied to specific transmission limits. [e11] The IMM notes that the West zone includes both the export-constrained Panhandle and the import-constrained Permian Basin, which face the same zonal price despite very different cost and congestion profiles. [e12][e43] It says industrial load in West Texas has grown from oil-and-gas electrification and data centers. [e42] It continues to recommend (Recommendation 2020-3, first made in its 2020 report) that ERCOT revise the load zone configuration. [e15][e44]
- **ERCOT context #4** (cites e38, e39, e40, e37, e41): The IMM's proposal. The IMM evaluated a 7-load-zone configuration using January 2022 to December 2025 data, with zones named Coast, North, South, SouthCentral, SouthWest, FarWest and Panhandle in its Table 6, and says it would significantly reduce intrazonal congestion. [e38][e39] (That is an IMM analysis, not an ERCOT or Board action.) Timing: any change must take effect at least four years after approval because of the CRR auction design. [e40][e37] To date, in the IMM's 2025 report, ERCOT has not indicated that it intends to revisit the current zone structure. [e41]
- **Timeline #1** (cites e4, e14): - 2003: the four zones in effect in the 2003 ERCOT market become the Competitive Load Zones (and the Cost-Allocation Load Zones) unless changed under Section 3.4.2. [e4][e14]
- **Timeline #2** (cites e44): - 2020: the IMM first recommends reconfiguring the load zones (Recommendation 2020-3, referencing its 2020 State of the Market report). [e44]
- **Timeline #3** (cites e38, e41) FLAG number-not-in-quote: 2024: - 2024 and 2025 reports: the IMM repeats the recommendation; the 2025 report adds the 7-zone analysis and says ERCOT has not indicated it will revisit the structure. [e38][e41]
- **Key facts #7** (cites e29, e30, e31, e32) FLAG number-not-in-quote: 2025: - 2025 average real-time zone prices ($/MWh): West $41.59, South $37.59, North $35.34, Houston $34.95. [e29][e30][e31][e32]
- **Common confusion #5** (cites e18, e5): - Adding new load inside a zone is not a zone change; redrawing the zone is. [e18][e5]
- **Questions #2** (cites e3, e24): As the Load-weighted average of LMPs at all Electrical Buses in the zone, with Load from the State Estimator at each bus. [e3][e24]
- **Questions #4** (cites e7, e11, e12, e43): It says intrazonal congestion continues to outpace interzonal congestion, and that internal zone congestion is averaged across loads, obscuring transmission limitations. [e7][e11] The IMM notes that the West zone includes both the Panhandle and the Permian Basin, which face the same zonal price. [e12][e43]
- **Questions #6** (cites e5, e40): No. Board approval is needed and changes take effect 48 months after the end of the month of approval. [e5] The IMM links the four-year lag to the CRR auction design. [e40]
- **Questions #8** (cites e37, e5): Any zone configuration approved today would take effect four years later, while the IMM says ERCOT's topology keeps getting more complex, so the IMM argues for a regular update process. [e37][e5]
- **Questions #10** (cites e9, e25): A zone containing only the Electrical Bus that connects the DC Tie, used to settle DC Tie Load. [e9] Its zone LMP is that bus's LMP. [e25]
- **Questions #12** (cites e23, e13, e22): A new bus connected only to buses within one Competitive Load Zone joins that zone. Otherwise ERCOT simulates an annual-peak-hour LMP and assigns the bus to the Competitive Load Zone whose zonal price is closest, effective immediately. [e23][e13][e22]
- **Scenarios #2** (cites e10): - The load settles at the zone price, a load-weighted average, while the generator settles at its own nodal price. [e10]
- **Scenarios #3** (cites e43): - The IMM says the Panhandle and the Permian Basin share the West zone price despite different cost and congestion profiles. [e43]
- **Link to settlement-point** (cites e8): is-a Settlement Point: A Load Zone is one of the three kinds of Settlement Point. [e8]
- **Link to spp** (cites e2, e3): determines SPP (Settlement Point Price): Each Load Zone has a Settlement Point Price calculated as a load-weighted price. [e2][e3]
- **Link to lmp** (cites e3): related LMP (Locational Marginal Price): Load Zone prices are built from bus-level LMPs. [e3]
- **Link to trading-hub** (cites e16, e3): contrasts-with Trading Hubs: For each Hub except the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of its Hub Buses, while a Load Zone price is weighted by Load. [e16][e3]
- **Link to congestion** (cites e7): related Transmission Congestion: Zones are meant to group areas with similar congestion, and the IMM says intrazonal congestion now exceeds interzonal congestion. [e7]
- **Link to load-ratio-share** (cites e14): related Load Ratio Share (LRS): Zonal Load Ratio Share cost allocation uses the four 2003 zones as Cost-Allocation Load Zones. [e14]
- **Link to lse** (cites e10): related LSE (Load Serving Entity): Loads are billed at the load zone price. [e10]
- **Link to crr** (cites e1): related CRR (Congestion Revenue Right): Load Zones are also used for Congestion Revenue Right Settlement, as a zone of power flow buses. [e1]
- **Link to ptp-obligation** (cites e27): related PTP Obligation: A Load Zone can be the source or sink of a PTP, with Load distribution factors spreading the quantity across the zone's buses. [e27]
- **Link to shift-factor** (cites e2): related Shift Factors: The day-ahead Load Zone price uses Load-weighted aggregated Shift Factors. [e2]
- **Link to pcrr** (cites e19): related PCRR (Pre-Assigned CRR): A NOIE's move to a Competitive Load Zone is tied to the PCRR nomination window timing. [e19]
- **Link to hb-west** (cites e12): related HB_WEST (West Hub): The IMM's West Zone findings concern the Load Zone, not the West Hub. [e12]
- **Link to negative-prices** (cites e12) FLAG number-not-in-quote: 2025: related Negative Prices: The IMM says the West zone had the most negative-price intervals in 2025. [e12]

