# Audit packet: GTC (Generic Transmission Constraint) (gtc)

kind concept · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (1) · text copy line 5906 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …etry measurements from a location not owned by that TSP or QSE if the location owner does not grant access to the TSP or QSE for the purpose of obtaining such measurements. ERCOT shall report such cases to the IMM. 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits (1) 
QUOTE: For the sole purpose of creating transmission flow constraints between areas of the ERCOT Transmission Grid in ERCOT applications that are unable to recognize non-thermal operating limits (such as system stability limits and voltage limits on Electrical Buses), ERCOT may create new Generic Transmission Constraints (GTCs) or modify existing GTCs for use in reliability and market analysis. GTCs created or modified as described in this Section shall be used in the SCED application. ERCOT shall not use GTCs in ERCOT applications to replace other constraints already capable of being directly modeled in the SCED application.
AFTER:  (2) During the ERCOT quarterly stability assessment, performed pursuant to Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, if ERCOT determines a GTC is necessary for a new Generation Resource, ESR, or SOTSG due to localized stability issues associated with the output of the inte…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Generic Transmission Constraints · text copy line 5193

BEFORE: …Elements. ERCOT uses GTCs to constrain flow between geographic areas to manage stability, voltage, and other constraints that its power flow and contingency analyses cannot model directly and that are based on offline studies (i.e., Real-Time Contingency Analysis (RTCA) will not indicate concerns). 
QUOTE: GTCs manage grid stability across geographic regions rather than enforce thermal transmission limits for specific transmission paths. They are especially relevant in areas with significant renewable generation, which are often far from load centers and can contribute to system stability concerns.
AFTER:  C. Day-Ahead Congestion The day-ahead market produces financially binding schedules for supply, demand, and point-topoint (PTP) transactions that reflect transmission system limits. When these limits bind, congestion increases dispatch costs and causes energy prices to vary across locations in the …

### e6 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: Transmission Congestion and CRRs, Day-Ahead Congestion · text copy line 5542

BEFORE: …s and can contribute to system stability concerns. The data in Figure 37 also shows that day-ahead congestion declined throughout 2024, continuing a downward trend that began after a peak in 2022. This suggests improving transmission conditions or more effective congestion management in the market. 
QUOTE: The figure also indicates that roughly 12% of the total congestion value in the day-ahead market during 2024 was attributable to GTCs.
AFTER:  B. Real-Time Congestion While the expected costs of congestion are reflected in the day-ahead market, physical congestion occurs only in the real-time market, and ERCOT operators manage power flows across the network as physical constraints become binding in real time. Unexpected changes in system …

### e7 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Transmission Congestion and CRRs, Violated Constraints · text copy line 5379

BEFORE: …t locations that affect the violated constraint. The 2025 shadow price caps were: 41 • $5,251 per MW for base-case (non-contingency) constraints or voltage violations, • $4,500 per MW for 345 kV constraints, • $3,500 per MW for 138 kV constraints, and • $2,800 per MW for 69 kV thermal violations. • 
QUOTE: ERCOT treats GTCs as base-case stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW.
AFTER:  See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report / / Transmission Congestion and CRRs At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on basecase constraints in response to IMM recommen…

### e8 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Competitive Constraint · text copy line 1813

BEFORE: …-----------------+ Network Security Analysis A processor used by ERCOT to monitor Transmission Elements in the ERCOT Transmission Grid for limit violations and to verify Electrical Bus voltage limits to be within a percentage tolerance as outlined in the Operating Guides. Non-Competitive Constraint 
QUOTE: A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests.
AFTER:  Non-Frequency Responsive Capacity (NFRC) The telemetered portion of a Generation Resource's High Sustained Limit (HSL) that represents the sustainable non-Dispatched power augmentation capability from duct firing, inlet air cooling, auxiliary boilers, or other methods which does not immediately res…

### e16 · `ercot-planning-guide-05` · tier 1 · ERCOT Planning Guide Section 5, Generator Interconnection or Modification (effective 2026-08-01)
locator: Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, paragraph (1) · text copy line 585 · heading above: 5.3.5 ERCOT Quarterly Stability Assessment

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.3.5 ERCOT Quarterly Stability Assessment (1) 
QUOTE: ERCOT shall conduct a stability assessment every three months to assess the impact of planned large generators and Large Loads subject to the requirements of Section 9.2.1, Applicability of the Batch Zero Process, connecting to the ERCOT System.
AFTER:  (a) For large generators with planned Initial Synchronization in the period under study, the assessment shall derive the conditions to be studied with consideration given to the results of the FIS stability studies. (b) For new Large Loads and Load modifications subject to the requirements of Secti…

### e34 · `ercot-rtp-765-comparison` · tier 2 · 2024 Regional Transmission Plan 345-kV Plan and Texas 765-kV Strategic Transmission Expansion Plan Comparison (2025-01-27)
locator: 2024 RTP 345-kV Plan and Texas 765-kV STEP Comparison, stability analysis · text copy line 155

BEFORE: …r both Generation Resources and large loads. • ERCOT conducted a stability analysis to examine the system's ability to return to normal operating conditions after sudden changes or disturbances (e.g., line trip). The analysis evaluated the potential impact to the West Texas Export and McCamey GTCs. 
QUOTE: The study results indicate that the TX 765-kV STEP would increase the West Texas Export stability constraint limit from 12.7 GW to 16.2 GW, compared to only 15.8 GW with the 345-kV option.
AFTER:  No stability limits were identified for the McCamey area stability constraint with the implementation of both the options. Additionally, the study results showed that bypassing all series capacitors had no impact on stability limits, suggesting that both options make certain series capacitor(s) in …

## Statements to check (new or changed since the last audit)

- **Link to congestion** (cites e6): related Transmission Congestion: GTCs account for a measurable share of day-ahead congestion value. [e6]
- **Link to binding-constraint** (cites e3, e8): related Binding Constraint: A GTC is a transmission constraint used in the SCED application, and a Non-Competitive Constraint can be associated with a GTC. [e3][e8]
- **Link to shadow-price** (cites e7) FLAG number-not-in-quote: 2025: related Shadow Price: In 2025 ERCOT applied a $5,251 per MW shadow price cap to GTCs as base-case stability constraints. [e7]
- **Link to wind-generation** (cites e5): related Wind Generation: The IMM says GTCs are especially relevant in areas with significant renewable generation, which are often far from load centers. [e5]
- **Link to crez** (cites e5): related CREZ (Competitive Renewable Energy Zones): The IMM says GTCs are especially relevant in areas with significant renewable generation; the source does not name CREZ here. [e5]
- **Link to sced** (cites e3) FLAG number-not-in-quote: 3.10, 7.6: used-in SCED (Security-Constrained Economic Dispatch): GTCs created under Section 3.10.7.6 are used in the SCED application. [e3]
- **Link to permian-transmission** (cites e34) FLAG number-not-in-quote: 765 kV, 2024: related Permian Basin Load & 765 kV Plan: ERCOT's 2024 RTP comparison estimated the West Texas Export stability constraint limit would rise from 12.7 GW to 16.2 GW with the 765-kV STEP (an estimate for future conditions). [e34]
- **Link to large-load-interconnection** (cites e16): related Large Load Interconnection & Batch Zero: The quarterly stability assessment, which sets GTLs for new generation, also covers planned Large Loads subject to the Batch Zero rules. [e16]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A GTC is a modeled stand-in for a stability or voltage limit that ERCOT's normal analysis cannot see, applied as a flow limit between areas (the IMM says limits are set before the operating day, though some are determined in real time with stability tools). The IMM ties them to areas with significant renewable generation far from load.

