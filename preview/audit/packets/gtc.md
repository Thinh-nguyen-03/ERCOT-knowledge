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

### e9 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Non-Competitive Constraint · text copy line 1813

BEFORE: …-----------------+ Network Security Analysis A processor used by ERCOT to monitor Transmission Elements in the ERCOT Transmission Grid for limit violations and to verify Electrical Bus voltage limits to be within a percentage tolerance as outlined in the Operating Guides. Non-Competitive Constraint 
QUOTE: A contingency and limiting Transmission Element pair or group of Transmission Elements associated with a GTC that is not determined to be a Competitive Constraint under the process defined in Section 3.19, Constraint Competitiveness Tests.
AFTER:  Non-Frequency Responsive Capacity (NFRC) The telemetered portion of a Generation Resource's High Sustained Limit (HSL) that represents the sustainable non-Dispatched power augmentation capability from duct firing, inlet air cooling, auxiliary boilers, or other methods which does not immediately res…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary / renewable congestion discussion · text copy line 2679 · heading above: 1.2 GW of wind, and 280 MW of combustion turbines. Since 2021, most new capacity has come

BEFORE: …nce between renewable generation and load creates stability issues on the network. ERCOT manages these issues through Generic Transmission Constraints (GTC), which function similarly to conventional transmission constraints by limiting the flow of power across defined interfaces within the network. 
QUOTE: ERCOT had 26 active GTCs in 2025, compared to 18 in 2021.
AFTER:  3. Captured Prices for Wind and Solar The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments. Figure 15 shows the captured energy price, which is the weighted-average energy price paid to generators for the e…

## Statements to check

- **Definition #1** (cites e1, e2): A Generic Transmission Constraint is a transmission constraint made up of one or more grouped Transmission Elements, used to constrain flow between geographic areas of ERCOT to manage stability, voltage and other limits that cannot be modeled directly in ERCOT's powerflow and contingency analysis applications. [e1] The Generic Transmission Limit (GTL) is the flow limit value associated with a GTC. [e2]
- **How it works #1** (cites e3, e5): ERCOT may create or modify GTCs only to create flow constraints between areas in applications that cannot recognize non-thermal limits such as stability or bus voltage limits. These GTCs are used in SCED, and ERCOT may not use a GTC to replace a constraint that SCED can already model directly. [e3] The IMM describes them as managing stability across regions rather than enforcing thermal limits on specific paths. [e5]
- **How it works #2** (cites e4): Within 180 days of a new GTC taking effect, ERCOT must post a report of alternatives for exiting it, which may include a RAS or a transmission improvement project. [e4]
- **ERCOT context #1** (cites e5, e8, e6, e7): The IMM links GTCs to renewable-heavy regions far from load. [e5] It counted 26 active GTCs in 2025 against 18 in 2021. [e8] In 2024 roughly 12% of day-ahead congestion value came from GTCs. [e6] For pricing, ERCOT treats GTCs as base-case stability constraints with a $5,251 per MW shadow price cap (2025). [e7]
- **Key facts #1** (cites e1): - GTC = grouped Transmission Elements limiting flow between areas, for stability and voltage. [e1]
- **Key facts #2** (cites e2): - GTL = the flow limit value of a GTC. [e2]
- **Key facts #3** (cites e3): - GTCs are used in SCED and may not replace constraints SCED can model directly. [e3]
- **Key facts #4** (cites e4): - 180-day exit-alternatives report for new GTCs. [e4]
- **Key facts #5** (cites e8): - Active GTCs: 26 in 2025 versus 18 in 2021. [e8]
- **Key facts #6** (cites e6): - About 12% of 2024 day-ahead congestion value was attributable to GTCs. [e6]
- **Common confusion #1** (cites e1, e5, e2): GTCs are not thermal line ratings; they are applied as flow limits between areas. [e1][e5] Also, the GTL is the number, while the GTC is the constraint. [e2]
- **Questions #2** (cites e1, e3): Some stability and voltage limits cannot be modeled directly in its powerflow and contingency applications, so ERCOT uses grouped elements with a limit to represent them. [e1][e3]
- **Questions #4** (cites e6): The IMM attributed roughly 12% of 2024 day-ahead congestion value to GTCs. [e6]
- **Questions #6** (cites e4): Post a report listing alternatives for exiting it no later than 180 days after it takes effect. [e4]
- **Link to congestion** (cites e6): related Transmission Congestion: GTCs account for a measurable share of day-ahead congestion value. [e6]
- **Link to binding-constraint** (cites e3, e9): related Binding Constraint: A GTC is a transmission constraint used in the SCED application, and a Non-Competitive Constraint can be associated with a GTC. [e3][e9]
- **Link to shadow-price** (cites e7) FLAG number-not-in-quote: 2025: related Shadow Price: In 2025 ERCOT applied a $5,251 per MW shadow price cap to GTCs as base-case stability constraints. [e7]
- **Link to wind-generation** (cites e5): related Wind Generation: The IMM says GTCs are especially relevant in areas with significant renewable generation, which are often far from load centers. [e5]
- **Link to crez** (cites e5): related CREZ (Competitive Renewable Energy Zones): The IMM says GTCs are especially relevant in areas with significant renewable generation; the source does not name CREZ here. [e5]
- **Link to sced** (cites e3) FLAG number-not-in-quote: 3.10, 7.6: used-in SCED (Security-Constrained Economic Dispatch): GTCs created under Section 3.10.7.6 are used in the SCED application. [e3]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) A GTC is a modeled stand-in for a stability or voltage limit that ERCOT's normal analysis cannot see, applied as a flow limit between areas. The IMM ties them to areas with significant renewable generation far from load.

