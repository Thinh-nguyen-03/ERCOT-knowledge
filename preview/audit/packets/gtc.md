# Audit packet: GTC (Generic Transmission Constraint) (gtc)

kind concept · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Generic Transmission Constraint (GTC) · text copy line 1142

BEFORE: …(GSU) Transformer in a station with generation where the voltage is transformed from the voltage level of the generator terminals to a higher voltage. If the higher voltage is at or above 60 kV, the GSU may also be referred to as a Main Power Transformer (MPT). Generic Transmission Constraint (GTC) 
QUOTE: A transmission constraint made up of one or more grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT's powerflow and contingency analysis applications.
AFTER:  Generic Transmission Limit (GTL) The value of the transmission flow limit associated with a GTC. Generation To Be Dispatched (GTBD) A dynamically calculated system total generation MW requirement used by Security-Constrained Economic Dispatch (SCED) for resource dispatch, calculated every four seco…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Generic Transmission Limit (GTL) · text copy line 1146

BEFORE: …grouped Transmission Elements that is used to constrain flow between geographic areas of ERCOT for the purpose of managing stability, voltage, and other constraints that cannot otherwise be modeled directly in ERCOT's powerflow and contingency analysis applications. Generic Transmission Limit (GTL) 
QUOTE: The value of the transmission flow limit associated with a GTC.
AFTER:  Generation To Be Dispatched (GTBD) A dynamically calculated system total generation MW requirement used by Security-Constrained Economic Dispatch (SCED) for resource dispatch, calculated every four seconds. Good Utility Practice Any of the practices, methods, and acts engaged in, or approved by, a …

### e3 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (1) · text copy line 5906 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …etry measurements from a location not owned by that TSP or QSE if the location owner does not grant access to the TSP or QSE for the purpose of obtaining such measurements. ERCOT shall report such cases to the IMM. 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits (1) 
QUOTE: For the sole purpose of creating transmission flow constraints between areas of the ERCOT Transmission Grid in ERCOT applications that are unable to recognize non-thermal operating limits (such as system stability limits and voltage limits on Electrical Buses), ERCOT may create new Generic Transmission Constraints (GTCs) or modify existing GTCs for use in reliability and market analysis. GTCs created or modified as described in this Section shall be used in the SCED application. ERCOT shall not use GTCs in ERCOT applications to replace other constraints already capable of being directly modeled in the SCED application.
AFTER:  (2) During the ERCOT quarterly stability assessment, performed pursuant to Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, if ERCOT determines a GTC is necessary for a new Generation Resource, ESR, or SOTSG due to localized stability issues associated with the output of the inte…

### e4 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (7) · text copy line 5926 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …g Condition Notice (OCN) and post on the MIS Secure Area the new or modified GTC and its associated GTL(s), including the detailed information described in paragraphs (3) and (5) above. ERCOT shall include an explanation regarding why it did not post the GTC or modification on the previous day. (7) 
QUOTE: No later than 180 days after the effective date of a new GTC, ERCOT shall post a report listing alternatives for exiting the GTC to the MIS Secure Area. The listed alternatives may include but are not limited to the implementation or modification of a RAS or a transmission improvement project.
AFTER:  3.10.7.7 DC Tie Limits (1) ERCOT shall post DC Tie limits for each hour of the Operating Day to the MIS Secure Area no later than 0600 in the Day-Ahead before the Operating Day. ERCOT may update these limits as system conditions change. (2) DC Tie limits shall be based on expected system conditions…

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

### e9 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary / renewable congestion discussion · text copy line 2679 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …nce between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network. 
QUOTE: ERCOT had 26 active GTCs in 2025, compared to 18 in 2021.
AFTER:  3. Captured Prices for Wind and Solar The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments. Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the e…

### e10 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (2) · text copy line 5908 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …y existing GTCs for use in reliability and market analysis. GTCs created or modified as described in this Section shall be used in the SCED application. ERCOT shall not use GTCs in ERCOT applications to replace other constraints already capable of being directly modeled in the SCED application. (2) 
QUOTE: During the ERCOT quarterly stability assessment, performed pursuant to Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, if ERCOT determines a GTC is necessary for a new Generation Resource, ESR, or SOTSG due to localized stability issues associated with the output of the interconnecting Generation Resource, ESR, or SOTSG, the GTL for the GTC shall be set to the lowest non-zero limit for all system conditions outside those in which the limit is zero.
AFTER:  (3) Except as provided in paragraph (6) below, ERCOT shall post a description of each new or modified GTC to the MIS Secure Area as soon as possible, but no later than the day prior to the GTC or GTC modification becoming effective in any ERCOT application. Posting of each new or modified GTC shall…

### e11 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (3) · text copy line 5910 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: … for a new Generation Resource, ESR, or SOTSG due to localized stability issues associated with the output of the interconnecting Generation Resource, ESR, or SOTSG, the GTL for the GTC shall be set to the lowest non-zero limit for all system conditions outside those in which the limit is zero. (3) 
QUOTE: Except as provided in paragraph (6) below, ERCOT shall post a description of each new or modified GTC to the MIS Secure Area as soon as possible, but no later than the day prior to the GTC or GTC modification becoming effective in any ERCOT application.
AFTER:  Posting of each new or modified GTC shall include: (a) The description of the new or modified GTC including the GTL or description of the data and studies used to calculate the GTL associated with each new or modified GTC; (b) The effective date of the new or modified GTC; (c) The identity of all c…

### e12 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (3)(d) · text copy line 5918 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …ing the defined interface where applicable; and (d) Detailed information on the development of each GTC, including the defined constraint or interface where applicable; and data and studies used for development of each new or modified GTC, including the GTL associated with each new or modified GTC. 
QUOTE: This information shall be redacted or omitted to protect the confidentiality of certain stability-related GTCs.
AFTER:  (4) Market Participants may review and comment on each new or modified GTC. Within seven days following receipt of any comments, ERCOT shall post the comments to the MIS Secure Area as part of the information related to the subject GTC. ERCOT shall review any comments and may modify any part of a g…

### e13 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (4) · text copy line 5920 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …he defined constraint or interface where applicable; and data and studies used for development of each new or modified GTC, including the GTL associated with each new or modified GTC. This information shall be redacted or omitted to protect the confidentiality of certain stability-related GTCs. (4) 
QUOTE: Market Participants may review and comment on each new or modified GTC. Within seven days following receipt of any comments, ERCOT shall post the comments to the MIS Secure Area as part of the information related to the subject GTC. ERCOT shall review any comments and may modify any part of a given GTC in response to any comments received.
AFTER:  (5) Anticipated GTLs, except those determined pursuant to paragraph (6) below, shall be posted to the MIS Secure Area no later than one day before the Operating Day. (6) If an unexpected change to ERCOT System conditions requires the creation of a new GTC or the modification of an existing GTC to m…

### e14 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (5) · text copy line 5922 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: …each new or modified GTC. Within seven days following receipt of any comments, ERCOT shall post the comments to the MIS Secure Area as part of the information related to the subject GTC. ERCOT shall review any comments and may modify any part of a given GTC in response to any comments received. (5) 
QUOTE: Anticipated GTLs, except those determined pursuant to paragraph (6) below, shall be posted to the MIS Secure Area no later than one day before the Operating Day.
AFTER:  (6) If an unexpected change to ERCOT System conditions requires the creation of a new GTC or the modification of an existing GTC to manage ERCOT System reliability, and the GTC has not been posted pursuant to paragraph (3) above, ERCOT shall issue an Operating Condition Notice (OCN) and post on the…

### e15 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.10.7.6, paragraph (6) · text copy line 5924 · heading above: 3.10.7.6 Use of Generic Transmission Constraints and Generic Transmission Limits

BEFORE: … to the subject GTC. ERCOT shall review any comments and may modify any part of a given GTC in response to any comments received. (5) Anticipated GTLs, except those determined pursuant to paragraph (6) below, shall be posted to the MIS Secure Area no later than one day before the Operating Day. (6) 
QUOTE: If an unexpected change to ERCOT System conditions requires the creation of a new GTC or the modification of an existing GTC to manage ERCOT System reliability, and the GTC has not been posted pursuant to paragraph (3) above, ERCOT shall issue an Operating Condition Notice (OCN) and post on the MIS Secure Area the new or modified GTC and its associated GTL(s), including the detailed information described in paragraphs (3) and (5) above.
AFTER:  ERCOT shall include an explanation regarding why it did not post the GTC or modification on the previous day. (7) No later than 180 days after the effective date of a new GTC, ERCOT shall post a report listing alternatives for exiting the GTC to the MIS Secure Area. The listed alternatives may incl…

### e16 · `ercot-planning-guide-05` · tier 1 · ERCOT Planning Guide Section 5, Generator Interconnection or Modification (effective 2026-08-01)
locator: Planning Guide Section 5.3.5, ERCOT Quarterly Stability Assessment, paragraph (1) · text copy line 585 · heading above: 5.3.5 ERCOT Quarterly Stability Assessment

BEFORE: …-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 5.3.5 ERCOT Quarterly Stability Assessment (1) 
QUOTE: ERCOT shall conduct a stability assessment every three months to assess the impact of planned large generators and Large Loads subject to the requirements of Section 9.2.1, Applicability of the Batch Zero Process, connecting to the ERCOT System.
AFTER:  (a) For large generators with planned Initial Synchronization in the period under study, the assessment shall derive the conditions to be studied with consideration given to the results of the FIS stability studies. (b) For new Large Loads and Load modifications subject to the requirements of Secti…

### e17 · `nog-11` · tier 1 · ERCOT Nodal Operating Guides, Section 11: Constraint Management Plans and Remedial Action Schemes (current 2026)
locator: Nodal Operating Guides Section 11.8, Extended Action Plans (EAPs), paragraph (2)(e) · text copy line 436 · heading above: 11.8 Extended Action Plans (EAPs)

BEFORE: …oes not result in radial Load; (c) Does not negatively impact current or scheduled Transmission Facility Outages; (d) Does not create new binding thermal constraints or voltage violations, or increase flow on any existing binding constraint by more than 2% for 69 kV and 1% for 115 kV and above; (e) 
QUOTE: Does not negatively impact any Generic Transmission Constraints (GTCs), decrease Generic Transmission Limits (GTLs), or create new instability situations;
AFTER:  (f) Provides more than $1 million savings to total production cost or total congestion cost with the EAP action in place compared to generation re-Dispatch alone. This can be established either by using annual production cost model simulation or other methods acceptable to ERCOT; (g) Limits the act…

### e18 · `np-22p` · tier 1 · ERCOT Nodal Protocols, Section 22 Attachment P: Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints (effective 2025-04-01)
locator: Methodology for Setting Maximum Shadow Prices (Protocols Section 22 Attachment P), Section 3.5 · text copy line 150 · heading above: 3.5 Generic Values for the Transmission Network System-Wide Shadow Price Caps in SCED

BEFORE: …or transmission constraints: SP_(max)^( _(max)^(cong_(threshold)^(efficiency))) (d) Determine Shift Factor cutoff threshold SF_(threshold)^(cutoff) (default z%) (e) Evaluate settings on variety of SCED save cases. 3.5 Generic Values for the Transmission Network System-Wide Shadow Price Caps in SCED 
QUOTE: The Generic Transmission Shadow Price Caps noted below will be used in SCED unless ERCOT determines that a constraint is irresolvable by SCED.
AFTER:  The methodology for determining and resolving an insecure state within SCED (i.e. SCED Irresolvable) is defined in Section 6.5.7.1.10, Network Security Analysis Processor and Security Violation Alarm, whereas the subsequent trigger condition for the determination of that constraint's Shadow Price C…

### e19 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: Transmission Congestion and CRRs, Violated Constraints (2022 report) · text copy line 3686

BEFORE: …nded to reflect the reduced reliability that occurs when a constraint is irresolvable. See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 70 OBDRR037, Power Balance Penalty and Shadow Price Cap Updates to Align with PUCT Approved High System-Wide Offer Cap, 
QUOTE: reduced the shadow price cap for base-case constraints from $9,251 per MW to $5,251 per MW effective April 1, 2022.
AFTER:  2022 State of the Market Report | 59 / / Transmission Congestion and CRRs Figure 35: Overload Distribution of Violated Constraints Figure 35 shows that number of SCED intervals at the various violated constraint percentages is roughly the same in 2021 and 2022. Over 30% of the constraints in 2022 w…

### e20 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 32 (OCR), Increasing Generic Transmission Constraints (2021 report) · text copy line 1605

BEFORE: …er challenge brought about by the increase in inverter-based generation (including wind, solar, and energy storage) is the increased prevalence of GTCs. The flows over most transmission facilities are limited by thermal limitations because increased flows increase the temperature of the facilities. 
QUOTE: GTCs are not typical thermals constraints and are used to limit overall flows over a path to maintain the stability of the system. They are harder to manage than thermal constraints and are sometimes not well known prior to committing a resource.
AFTER:  GTCs have increased significantly over the last few years with the expansion of inverter-based generation, with congestion on these constraints growing from $190 million in real-time congestion in 2020 to $400 million in 2021. NPRR1070, Planning Criteria for GTC Exit Solutions, is currently pending…

### e21 · `imm-som-2021` · tier 2 · 2021 State of the Market Report for the ERCOT Electricity Markets (published 2022)
locator: page 32 (OCR), Increasing Generic Transmission Constraints (2021 report) · text copy line 1609

BEFORE: …ed flows increase the temperature of the facilities. GTCs are not typical thermals constraints and are used to limit overall flows over a path to maintain the stability of the system. They are harder to manage than thermal constraints and are sometimes not well known prior to committing a resource. 
QUOTE: GTCs have increased significantly over the last few years with the expansion of inverter-based generation, with congestion on these constraints growing from $190 million in real-time congestion in 2020 to $400 million in 2021.
AFTER:  NPRR1070, Planning Criteria for GTC Exit Solutions, is currently pending, and the Commission rulemaking to implement SB1281 has recently been opened to improve economic transmission planning criteria.33 These two items should help develop solutions to the proliferation of GTCs. System Inertia. A fi…

### e22 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 86 (OCR), Real-time congestion (2022 report) · text copy line 3500

BEFORE: …sing load level. • On average, nine constraints were identified for the higher load levels, down from approximately twelve in 2021. Figure 32: Frequency of Binding and Active Constraints by System Load Level Table 4 shows the individual GTCs and the number of binding intervals during 2021 and 2022. 
QUOTE: The number of GTC binding intervals in 2022 was nearly identical to the number in 2021 and the associated congestion represented 23% of real-time congestion rent.
AFTER:  GTCs are used to ensure that the generation dispatch does not violate a transient or voltage stability condition. Certain GTC limits are determined in real-time using the Voltage Stability Assessment Tool (VSAT) or the Transient Stability Assessment Tool (TSAT). These tools are used continuously to…

### e23 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 86 (OCR), Real-time congestion (2023 report) · text copy line 3811

BEFORE: …increase from 75% in 2022 and 70% in 2021. • Consistent with previous years, the average number of active constraints generally decreased with increasing load level. • On average, eleven constraints were identified for the higher load levels (greater than 60 GW), up from approximately nine in 2022. 
QUOTE: Roughly 11% of real-time congestion was associated with GTCs.
AFTER:  GTCs are used to ensure that the generation dispatch does not violate a transient or voltage stability condition. Certain GTC limits are determined in real-time using the Voltage Stability Assessment Tool (VSAT) or the Transient Stability Assessment Tool (TSAT). These tools are used continuously to…

### e24 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 86 (OCR), Real-time congestion (2023 report) · text copy line 3812

BEFORE: …ge, eleven constraints were identified for the higher load levels (greater than 60 GW), up from approximately nine in 2022. Roughly 11% of real-time congestion was associated with GTCs. GTCs are used to ensure that the generation dispatch does not violate a transient or voltage stability condition. 
QUOTE: Certain GTC limits are determined in real-time using the Voltage Stability Assessment Tool (VSAT) or the Transient Stability Assessment Tool (TSAT). These tools are used continuously to evaluate the East Texas, North to Houston, the Rio Grande Valley Import, and Panhandle limits, and provide a more accurate real-time limit than could be achieved through offline studies.
AFTER:  Because GTCs play an important role in driving congestion in ERCOT, it is important to show the frequency and trends in binding GTCs. To that end, Figure 33 shows the aggregate number of hours in which GTCs were binding from 2011 to 2023. 64 Figure 33: GTC Binding Constraint Hours 64 Table A4: Gene…

### e25 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 87 (OCR), Real-time congestion (2023 report) · text copy line 3839

BEFORE: …nding hours in prior years. ERCOT has been working on getting better data for the full range of inverter technologies, which will allow all GTC limits to be calculated in real time rather than using more conservative offline studies. This should result in less congestion and generation curtailment. 
QUOTE: Apart from the North to Houston, Rio Grande Valley Import, and East Texas constraints, all GTCs resulted from issues identified in the generation interconnection process.
AFTER:  As more renewable resources and ESRs enter the ERCOT market, the benefits of these dynamic VSAT and TSAT models will grow. 2. Real-time Constraints and Congested Areas Our review of real-time congestion is based on its economic value, calculated by multiplying the shadow price of each constraint by…

### e26 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023) · ocr copy line 8113, OCR page 187

BEFORE: …dual GTCs and the number of binding hours during 2022 and 2023. Table A4: Generic Transmission Constraints # of Binding # of Binding Generic Transmission Constraint Effective Date Hours in 2022 _ Hours in 2023 North to Houston December 1, 2010 54.4 234 Rio Grande Valley Import December 1, 2010 - 03 
QUOTE: Panhandle July 31, 2015 783.0 670.8
AFTER:  Red Tap August 29, 2016 - - North Edinburg - Lobo August 24. 2017 1,830.4 1,948.3 Nelson Sharpe - Rio Hondo October 30. 2017 1,318.6 361.2 East Texas November 2. 2017 114.7 68.2 Treadwell May 18, 2018 249.7 311.2 McCamey March 26, 2018 264 57.3 Raymondville - Rio Hondo May 2. 2019 52.0 43.9 Bearkat…

### e27 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023) · ocr copy line 8115, OCR page 187

BEFORE: …Table A4: Generic Transmission Constraints # of Binding # of Binding Generic Transmission Constraint Effective Date Hours in 2022 _ Hours in 2023 North to Houston December 1, 2010 54.4 234 Rio Grande Valley Import December 1, 2010 - 03 Panhandle July 31, 2015 783.0 670.8 Red Tap August 29, 2016 - - 
QUOTE: North Edinburg - Lobo August 24. 2017 1,830.4 1,948.3
AFTER:  Nelson Sharpe - Rio Hondo October 30. 2017 1,318.6 361.2 East Texas November 2. 2017 114.7 68.2 Treadwell May 18, 2018 249.7 311.2 McCamey March 26, 2018 264 57.3 Raymondville - Rio Hondo May 2. 2019 52.0 43.9 Bearkat November 20. 2019 579.0 1,081.7 West Texas Export October 1, 2020 977.0 6344 Zapa…

### e28 · `imm-som-2023` · tier 2 · 2023 State of the Market Report for the ERCOT Electricity Markets (published 2024)
locator: page 187 (OCR), Appendix Table A4: Generic Transmission Constraints (binding hours 2022 and 2023), total row · ocr copy line 8130, OCR page 187

BEFORE: …0 1,081.7 West Texas Export October 1, 2020 977.0 6344 Zapata - Starr Novemeber 5, 2020 - 3.7 Valley Export Novemeber 5, 2020 258.1 551.1 Culberson March 4. 2021 103.1 - Wiliamson-Burnet May 6, 2021 17 4.0 Wharton County May 5, 2022 7.8 93 Hamilton August 3. 2022 - 22.2 Kinney November 1, 2023 NA - 
QUOTE: Total Hours 6,355.9 5,791.0
AFTER:  5. Irresolvable Constraints As shown in Table A5, 13 element combinations were deemed irresolvable in 2023 and had a shadow price cap imposed according to the irresolvable constraint methodology. Shadow price caps are based on a reviewed methodology,'® and are intended to reflect the level of reduc…

### e29 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 88 (OCR), Types and Frequency of Constraints in 2024 · text copy line 5621

BEFORE: …and Frequency of Constraints in 2024 There are thousands of transmission constraints associated with physical elements in the ERCOT transmission network. To make the dispatch problem solved by SCED more computationally tractable, ERCOT only activates a subset of these constraints at any given time. 
QUOTE: In addition to GTCs, the limits of which are set prior to the operating day, ERCOT also activates constraints based on the Real-Time Contingency Analysis (RTCA) process that runs on an ongoing basis.
AFTER:  The RTCA evaluates network flows under many contingency scenarios and is used to determine when a constraint is at risk of being violated and needs to be activated in SCED. Constraints are considered binding when dispatch costs are incurred to maintain transmission flows below the constraint limit,…

### e30 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 82 (OCR), Day-Ahead Congestion (2025 report) · text copy line 5207

BEFORE: …stem stability. It calculates day-ahead congestion values as the product of power flows over each constraint and the constraint's shadow price, which reflects that constraint's marginal economic cost. Figure 36 presents congestion values within and across zones, including congestion linked to GTCs. 
QUOTE: It shows that day-ahead congestion increased by 26% from 2024 to 2025, ending the recent trend of declining annual congestion cost. Congestion costs increased in all four zones, across zones, and for GTCs.
AFTER:  The largest drivers of the cost increase were congestion in the West and North zones. Congestion in the North zone corresponds to the large increase in RUC commitments to manage congestion. 60 | 2025 State of the Market Report / / Transmission Congestion and CRRs Figure 36: Value of Day-Ahead Conge…

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: page 85 (OCR), shadow price caps and NPRR 1230 · ocr copy line 3667, OCR page 85

BEFORE: … stability constraints (for voltage or transient conditions) with a shadow price cap of $5,251 per MW. 41 See Methodology for Setting Maximum Shadow Prices for Network and Power Balance Constraints. 62 | 2025 State of the Market Report a ===== page 85 (OCR) ===== Bs Transmission Congestion and CRRs 
QUOTE: At the end of 2024, ERCOT implemented NPRR 1230 to increase the shadow price cap on base- case constraints in response to IMM recommendation 2023-1.
AFTER:  The higher shadow price cap allows SCED to produce more expensive dispatch solutions to avoid violating these constraints. Figure 38 shows the distribution of violated constraints by overload percentage since 2021. Figure 38: Overload Distribution of Violated Constraints 1,400 B More than 15% 0 ty)…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Renewable congestion discussion (2025 report), Generic Transmission Constraints · text copy line 2676 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …onstraints. This geographic dynamic contributes to congestion in two distinct ways. First, the geography of renewable generation potential concentrates capacity in the same regions, directly causing congestion as large volumes of renewable generation are injected into the same areas of the network. 
QUOTE: Second, the distance between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network.
AFTER:  ERCOT had 26 active GTCs in 2025, compared to 18 in 2021. 3. Captured Prices for Wind and Solar The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments. Figure 15 shows the captured energy price, which is the …

### e33 · `ercot-constraints-needs-2025` · tier 2 · 2025 Report on Existing and Potential Electric System Constraints and Needs (December 2025)
locator: Report on Existing and Potential Electric System Constraints and Needs, December 2025, Top 10 constraints Oct. 2024 to Sep. 2025 (real-time data), constraint 4 · text copy line 209

BEFORE: …eeds based on the resiliency criteria. 4 Map Monitored Element of Constraint Congestion Rent* 1 Koch Tap - Vealmoor 138kV $211M Top 10 constraints on the ERCOT System 2 Hargrove - Twin Buttes 138kV $176M Oct. 2024 to Sep. 2025, based on real-time data 3 Odessa EHV Switch Yarbrough Sub 138kV $151M 4 
QUOTE: West Texas Export Interface $127M
AFTER:  5 Longshore Switch - Consavvy Switch 345kV $102M 6 Laredo VFT North - Las Cruces 138kV $64M 7 Bell County - Salado Switch 138kV $64M 8 Knapp - Scurry Chevron 138kV $57M 9 Haine Drive - La Palma 138kV $54M 10 Polecat Creek Switch - Wrage Ranch Pod 138kV $52M Outage Related? Planned and Forced Outage…

### e34 · `ercot-rtp-765-comparison` · tier 2 · 2024 Regional Transmission Plan 345-kV Plan and Texas 765-kV Strategic Transmission Expansion Plan Comparison (2025-01-27)
locator: 2024 RTP 345-kV Plan and Texas 765-kV STEP Comparison, stability analysis · text copy line 155

BEFORE: …r both Generation Resources and large loads. • ERCOT conducted a stability analysis to examine the system's ability to return to normal operating conditions after sudden changes or disturbances (e.g., line trip). The analysis evaluated the potential impact to the West Texas Export and McCamey GTCs. 
QUOTE: The study results indicate that the TX 765-kV STEP would increase the West Texas Export stability constraint limit from 12.7 GW to 16.2 GW, compared to only 15.8 GW with the 345-kV option.
AFTER:  No stability limits were identified for the McCamey area stability constraint with the implementation of both the options. Additionally, the study results showed that bypassing all series capacitors had no impact on stability limits, suggesting that both options make certain series capacitor(s) in …

### e35 · `imm-som-2022` · tier 2 · 2022 State of the Market Report for the ERCOT Electricity Markets (published 2023)
locator: page 34 (OCR), Increasing Generic Transmission Constraints (2022 report) · ocr copy line 1353, OCR page 34

BEFORE: …e harder to manage than thermal constraints and their limits are sometimes not well known prior to committing a resource, resulting in divergence between market outcomes and reliability needs. GTCs have increased significantly over the last few years with the expansion of inverter-based generation. 
QUOTE: Real-time congestion rent on these constraints has grown from $400 million in real- time congestion in 2021 to $640 million in 2022.
AFTER:  NPRR1070, Planning Criteria for GTC Exit Solutions, is currently pending in ERCOT's stakeholder process, and the Commission rulemaking to implement SB1281 has recently been completed to improve economic transmission planning criteria.7! These two items should help develop solutions to the prolifera…

### e36 · `imm-som-2024` · tier 2 · 2024 State of the Market Report for the ERCOT Electricity Markets (published 2025)
locator: page 88 (OCR), Transmission Congestion and CRRs, Real-Time Congestion (2024 report) · ocr copy line 3857, OCR page 88

BEFORE: …rall congestion was approximately 3% higher in the real-time market than in the day-ahead market, corresponding with higher real-time congestion across zones and within the Houston and North 2024 State of the Market Report | 49 Lo ===== page 88 (OCR) ===== ee Transmission Congestion and CRRs zones. 
QUOTE: There was also approximately 22% more congestion associated with GTCs in the real- time market, likely a result of forecast error for generation from renewables.
AFTER:  Several new transmission components were energized in the South Zone in 2024 that contributed to the decrease in intra-zonal congestion compared to 2023. 1. Types and Frequency of Constraints in 2024 There are thousands of transmission constraints associated with physical elements in the ERCOT tran…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e3, e5, e29): **What a GTC may do.** ERCOT may create or modify GTCs only to create flow constraints between areas in applications that cannot recognize non-thermal limits such as stability or bus voltage limits. These GTCs are used in SCED, and ERCOT may not use a GTC to replace a constraint that SCED can already model directly. [e3] The IMM describes them as managing stability across regions rather than enforcing thermal limits on specific paths. [e5] The IMM also says GTC limits are set before the operating day, whereas other constraints are activated through the Real-Time Contingency Analysis process that runs continuously. [e29]
- **How it works #2** (cites e10, e16, e24, e25) FLAG number-not-in-quote: 2023: **How the limit is set.** In the quarterly stability assessment, if ERCOT finds a GTC is necessary for a new Generation Resource, ESR or SOTSG because of localized stability issues from its output, the GTL is set to the lowest non-zero limit for all system conditions outside those in which the limit is zero. [e10] The Planning Guide requires ERCOT to run that stability assessment every three months, covering planned large generators and Large Loads subject to the Batch Zero requirements. [e16] The IMM says certain GTC limits (East Texas, North to Houston, Rio Grande Valley Import and Panhandle in its 2023 report) are determined in real time using the Voltage Stability Assessment Tool or the Transient Stability Assessment Tool, giving a more accurate limit than offline studies. [e24] It says ERCOT has been working to get better inverter data so all GTC limits can be calculated in real time, which it expects to mean less congestion and curtailment. [e25]
- **How it works #3** (cites e11, e13, e12, e14, e15): **Posting and comment.** Except for unexpected changes, ERCOT posts a description of each new or modified GTC on the MIS Secure Area no later than the day before it becomes effective in any ERCOT application. [e11] Market Participants may review and comment; ERCOT posts comments within seven days of receipt and may modify a GTC in response. [e13] Some information is redacted or omitted to protect the confidentiality of certain stability-related GTCs. [e12] Anticipated GTLs are posted no later than one day before the Operating Day. [e14] If an unexpected change in conditions requires a new or modified GTC that was not posted ahead, ERCOT issues an Operating Condition Notice and posts the GTC, its GTLs and an explanation of why it did not post the previous day. [e15]
- **How it works #4** (cites e4): **Exit.** Within 180 days of a new GTC taking effect, ERCOT must post a report of alternatives for exiting it, which may include a RAS or a transmission improvement project. [e4]
- **ERCOT context #1** (cites e5, e32, e9): The IMM links GTCs to renewable-heavy regions far from load, and describes the stability issues created by distance between renewable generation and load as managed through GTCs. [e5][e32] It counted 26 active GTCs in 2025 against 18 in 2021. [e9]
- **ERCOT context #2** (cites e21, e35, e22, e23, e6, e36, e30, e28, e26, e27) FLAG number-not-in-quote: 2023: **Congestion by year (IMM).** The IMM reported congestion on GTCs growing from $190 million in real-time congestion in 2020 to $400 million in 2021, and to $640 million in 2022. [e21][e35] It said GTC binding intervals in 2022 were nearly identical to 2021 and represented 23% of real-time congestion rent. [e22] In 2023 roughly 11% of real-time congestion was associated with GTCs. [e23] In 2024 roughly 12% of day-ahead congestion value was attributable to GTCs [e6], and the IMM reported approximately 22% more GTC congestion in the real-time market than the prior year, likely a result of forecast error for renewable generation. [e36] For 2025 the IMM said day-ahead congestion rose 26% and costs increased for GTCs, without a GTC-only figure in the text read. [e30] The IMM's 2023 Table A4 (OCR) lists total GTC binding hours of 6,355.9 in 2022 and 5,791.0 in 2023, including Panhandle at 783.0 and 670.8 hours and North Edinburg - Lobo at 1,830.4 and 1,948.3. [e28][e26][e27]
- **ERCOT context #3** (cites e25, e33) FLAG number-not-in-quote: 2023, 2025, 2024: **Where.** In its 2023 report the IMM said that, apart from the North to Houston, Rio Grande Valley Import and East Texas constraints, all GTCs resulted from issues identified in the generation interconnection process. [e25] ERCOT's December 2025 constraints report ranks the West Texas Export Interface fourth among the top 10 constraints for October 2024 to September 2025 at $127 million of congestion rent on real-time data. [e33]
- **ERCOT context #4** (cites e7, e19, e18, e31) FLAG number-not-in-quote: 2025: **Pricing.** GTCs are treated as base-case stability constraints with a shadow price cap; the IMM reports $5,251 per MW in 2025 and that the base-case cap was cut from $9,251 to $5,251 per MW effective April 1, 2022. [e7][e19] ERCOT's methodology says the generic shadow price caps are used in SCED unless ERCOT determines a constraint is irresolvable by SCED. [e18] NPRR 1230, implemented at the end of 2024 per the IMM, created a process to increase the base-case shadow price cap. [e31]
- **ERCOT context #5** (cites e17): **Interaction with other rules.** Before approving an Extended Action Plan for economic reasons, ERCOT must verify that it does not negatively impact any GTC, decrease a GTL or create new instability situations. [e17]
- **ERCOT context #6** (cites e34) FLAG number-not-in-quote: 2024: **West Texas outlook.** ERCOT's 2024 RTP comparison estimated that the 765-kV STEP would raise the West Texas Export stability constraint limit from 12.7 GW to 16.2 GW, versus 15.8 GW with the 345-kV option; these are estimated values for future system conditions. [e34]
- **Timeline #1** (cites e26, e27): - 31 July 2015: Panhandle GTC effective; 24 August 2017: North Edinburg - Lobo effective (IMM Table A4, OCR). [e26][e27]
- **Timeline #2** (cites e21, e35): - 2020 to 2022: GTC real-time congestion $190 million, $400 million, $640 million (IMM). [e21][e35]
- **Timeline #3** (cites e19): - 1 April 2022: base-case shadow price cap cut from $9,251 to $5,251 per MW. [e19]
- **Timeline #4** (cites e31): - End of 2024: NPRR 1230 implemented to raise base-case shadow price caps in response to IMM recommendation 2023-1. [e31]
- **Timeline #5** (cites e9): - 2025: 26 active GTCs, up from 18 in 2021. [e9]
- **Key facts #4** (cites e11, e15): - New GTCs are posted no later than the day before they take effect, unless an unexpected change requires an OCN. [e11][e15]
- **Key facts #8** (cites e7) FLAG number-not-in-quote: 2025: - 2025 shadow price cap on GTCs (base-case): $5,251 per MW. [e7]
- **Common confusion #1** (cites e1, e5, e2, e29): GTCs are not thermal line ratings; they are applied as flow limits between areas to manage stability. [e1][e5] The GTL is the number, while the GTC is the constraint. [e2] A GTC is also not the same as a constraint SCED picks up through real-time contingency analysis: its limit is set ahead of the day, from studies. [e29]
- **Questions #4** (cites e21, e35, e23, e6) FLAG number-not-in-quote: 2023: It varies by year. The IMM reported real-time GTC congestion of $400 million in 2021 and $640 million in 2022, roughly 11% of real-time congestion in 2023, and roughly 12% of day-ahead congestion value in 2024. [e21][e35][e23][e6]
- **Questions #6** (cites e11, e15, e13, e4): Post it to the MIS Secure Area no later than the day before it takes effect (an OCN and explanation if it is unexpected), accept and post comments, and post a report of exit alternatives no later than 180 days after the effective date. [e11][e15][e13][e4]
- **Questions #8** (cites e10, e25): If the quarterly stability assessment finds that localized stability issues from the new Resource's output make a GTC necessary, the GTL is set to the lowest non-zero limit for all conditions outside those in which the limit is zero. [e10] The IMM says apart from three named constraints all GTCs resulted from issues identified in the generation interconnection process. [e25]
- **Questions #10** (cites e15): ERCOT issues an OCN and posts the new or modified GTC and GTLs with an explanation of why it was not posted the previous day. [e15]
- **Questions #12** (cites e20) FLAG number-not-in-quote: 2021: In its 2021 report the IMM said GTCs limit overall flows over a path to maintain stability, are harder to manage than thermal constraints and are sometimes not well known before committing a resource. [e20]
- **Link to congestion** (cites e6): related Transmission Congestion: GTCs account for a measurable share of day-ahead congestion value. [e6]
- **Link to binding-constraint** (cites e3, e8): related Binding Constraint: A GTC is a transmission constraint used in the SCED application, and a Non-Competitive Constraint can be associated with a GTC. [e3][e8]
- **Link to shadow-price** (cites e7) FLAG number-not-in-quote: 2025: related Shadow Price: In 2025 ERCOT applied a $5,251 per MW shadow price cap to GTCs as base-case stability constraints. [e7]
- **Link to wind-generation** (cites e5): related Wind Generation: The IMM says GTCs are especially relevant in areas with significant renewable generation, which are often far from load centers. [e5]
- **Link to crez** (cites e5): related CREZ (Competitive Renewable Energy Zones): The IMM says GTCs are especially relevant in areas with significant renewable generation; the source does not name CREZ here. [e5]
- **Link to sced** (cites e3) FLAG number-not-in-quote: 3.10, 7.6: used-in SCED (Security-Constrained Economic Dispatch): GTCs created under Section 3.10.7.6 are used in the SCED application. [e3]
- **Link to permian-transmission** (cites e34) FLAG number-not-in-quote: 765 kV, 2024: related Permian Basin Load & 765 kV Plan: ERCOT's 2024 RTP comparison estimated the West Texas Export stability constraint limit would rise from 12.7 GW to 16.2 GW with the 765-kV STEP (an estimate for future conditions). [e34]
- **Link to large-load-interconnection** (cites e16): related Large Load Interconnection & Batch Zero: The quarterly stability assessment, which sets GTLs for new generation, also covers planned Large Loads subject to the Batch Zero rules. [e16]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A GTC is a modeled stand-in for a stability or voltage limit that ERCOT's normal analysis cannot see, applied as a flow limit between areas and set from stability studies before the operating day. The IMM ties them to areas with significant renewable generation far from load.

