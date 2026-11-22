# Audit packet: DGR & SODG (Distribution-Connected Generation) (dgr-sodg)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Distribution Generation Resource (DGR) · text copy line 2487

BEFORE: …eater than one MW that chooses to register as a Resource with ERCOT to participate in the ERCOT markets. Generation Resource A generator capable of providing energy or Ancillary Service to the ERCOT System and is registered with ERCOT as a Generation Resource. Distribution Generation Resource (DGR) 
QUOTE: A Generation Resource connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets.
AFTER:  Transmission Generation Resource (TGR) A Generation Resource connected to the ERCOT transmission system that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generat…

### e2 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Only Distribution Generator (SODG) · text copy line 2544

BEFORE: …y Generator (SOG)" upon system implementation.] ------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------ Settlement Only Distribution Generator (SODG) 
QUOTE: A generator that is connected to the Distribution System with a rating of: (1) One MW or less that chooses to register as an SODG; or (2) Greater than one and up to ten MW that is capable of providing a net export to the ERCOT System and does not register as a Distribution Generation Resource (DGR).
AFTER:  SODGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads. -----------------------------------------------…

### e3 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Only Generator (SOG) · text copy line 2534

BEFORE: …------------------------------------------------------------+ Provisional Controllable Load Resource (PCLR) A Controllable Load Resource (CLR) that is required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met. Settlement Only Generator (SOG) 
QUOTE: A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers.
AFTER:  These units are comprised of: ------------------------------------------------------------------------------------------------------ [NPRR995: Delete the above definition "Settlement Only Generator (SOG)" upon system implementation.] -----------------------------------------------------------------…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(2) · text copy line 5725 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …cribed in this subsection, with the following exceptions: (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site's total SOG nameplate capacity. (2) 
QUOTE: For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model.
AFTER:  For an SOTG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus as determined by ERCOT in review of the meter location of the SOTG in the Network Operations Model. SODG and SOTG sites will be represented as a single unit in the…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(1)(a)-(b) · text copy line 5719 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.3.8 Real-Time Payment or Charge for Energy from a Settlement Only Distribution Generator (SODG) or a Settlement Only Transmission Generator (SOTG) (1) 
QUOTE: The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions: (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site's total SOG nameplate capacity.
AFTER:  (2) For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model. For an SOTG, the price used as the basis for the 15-minute Real-Time price calculation is the…

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(6) · text copy line 5799 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …t that it relies on as a basis for any election under this paragraph. This election is valid through the earlier of December 31, 2029 or the date on which the election is revoked pursuant to paragraph (8) of this Section. On January 1, 2030, all SODGs and SOTGs will be subject to nodal pricing. (6) 
QUOTE: For any SODG or SOTG for which the applicable Resource Entity has elected to opt out of nodal pricing, ERCOT shall settle the output of the SODG or SOTG using the Load Zone Settlement Point Price for the duration of the opt-out period so long as the SODG or SOTG is not physically modified for any purpose, including to increase the capacity of the unit or change the fuel type of the unit, except as necessary for routine maintenance or repairs to address normal wear and tear.
AFTER:  (7) If at any time ERCOT determines that the SODG or SOTG fails to meet the opt-out conditions in paragraph (6) above, ERCOT shall settle the output of the SODG or SOTG at the applicable nodal price as soon as practicable after providing written notice to the affected Resource Entity. (8) A Resourc…

### e20 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.6(1), Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) (current text) · text copy line 4273 · heading above: 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs)

BEFORE: …ed with a Generation Resource may update the telemetered LSL of the ESR when self-charging (using output from the Generation Resource). The updated LSL shall be equal to the MW level of self-charge. 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) (1) 
QUOTE: As a condition for the interconnection of a DGR or DESR, the affected Resource Entity, after consultation with the relevant Distribution Service Provider (DSP), shall provide documentation from the DSP to ERCOT stating that the interconnecting distribution circuit will not be disconnected as part of an Energy Emergency Alert (EEA) Level 3, an under-frequency Load shedding event, or an under-voltage Load shedding event, unless required for DSP local system maintenance or during a DSP local system emergency.
AFTER:  (a) If a DSP subsequently determines that any circuit to which a DGR or DESR is interconnected will need to be disconnected during these Load shedding events, or that a DGR or DESR will need to be moved to a circuit that will be disconnected during these Load shedding events: (i) The DSP shall prom…

### e21 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.6(1)(a)(i)-(iii), current text · text copy line 4275 · heading above: 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs)

BEFORE: …ng that the interconnecting distribution circuit will not be disconnected as part of an Energy Emergency Alert (EEA) Level 3, an under-frequency Load shedding event, or an under-voltage Load shedding event, unless required for DSP local system maintenance or during a DSP local system emergency. (a) 
QUOTE: If a DSP subsequently determines that any circuit to which a DGR or DESR is interconnected will need to be disconnected during these Load shedding events, or that a DGR or DESR will need to be moved to a circuit that will be disconnected during these Load shedding events: (i) The DSP shall promptly notify the designated contact for the DGR or DESR; (ii) The Resource Entity shall promptly notify ERCOT of this fact via the Resource Registration process; and (iii) The DGR or DESR will immediately be disqualified from offering to provide any Ancillary Service.
AFTER:  (b) Upon receiving notification from the DSP that the DGR or DESR is no longer subject to disconnection during any of these Load shedding events, and that no known system limitations or changes have occurred that would inhibit the DGR or DESR from complying with Ancillary Service performance requir…

### e22 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.6(2), current text · text copy line 4322 · heading above: 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs)

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (2) 
QUOTE: For a proposed conversion of an existing Settlement Only Distribution Generator (SODG) to a DGR or DESR, the interconnecting DSP will evaluate the proposed conversion and will determine whether it is electrically and operationally feasible. If the interconnecting DSP determines that the conversion is not electrically or operationally feasible, the DSP may disallow the conversion.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e23 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.8.6(3) · text copy line 4331 · heading above: 3.8.6 Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs)

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (3) 
QUOTE: The Resource Node for a DGR or DESR shall be fixed at a single Electrical Bus in the ERCOT Network Operations Model.
AFTER:  (a) If a DSP determines that a topology change has altered, or is expected to alter, the electrical path connecting the DGR or DESR to the ERCOT Transmission Grid for a period longer than 60 days: (i) The DSP shall promptly notify the interconnecting Transmission Service Provider (TSP) and the desi…

### e25 · `pg-06` · tier 1 · ERCOT Planning Guide, Section 6: Data/Modeling (current 2026)
locator: Planning Guide Section 6.3(3)(b), steady-state base cases · text copy line 107 · heading above: 6.1 Steady-State Model Development

BEFORE: …Management System (NMMS), ERCOT and TSPs shall create steady-state models that represent current and planned system conditions from the following data elements: (a) Each TSP, or its Designated Agent, shall provide its respective transmission network steady-state model data, including load data. (b) 
QUOTE: Each TSP, or its Designated Agent, shall not include the impact of energy sources connected to the Distribution System that are registered with ERCOT and required to provide telemetry including, but not limited to, Distribution Generation Resources (DGRs), Distribution Energy Storage Resources (DESRs), or Settlement Only Distribution Generators (SODGs) in its submitted Load data as negative loads or as embedded reductions in the submitted load forecast.
AFTER:  (c) Each TSP, or its Designated Agent, shall include the impact of energy sources connected to the Distribution System that are not registered with ERCOT in its submitted Load data. The methodology used shall be consistent across all TSPs and described in the ERCOT Steady State Working Group Proced…

### e27 · `puct-25-211` · tier 1 · PUCT Substantive Rule 16 TAC §25.211, Interconnection of On-Site Distributed Generation
locator: 16 TAC Section 25.211(c)(5), definition of Facility · text copy line 51

BEFORE: …r the purpose of receiving or exporting electric power from or to the company's utility system. (4) Distributed natural gas generation facility -- A facility installed on the customer's side of the meter that uses natural gas to generate not more than 2,000 kilowatts of electricity. (5) Facility -- 
QUOTE: An electrical generating installation consisting of one or more on-site distributed generation units, including a distributed natural gas generation facility. The total capacity of the installation's on-site distributed generation units may exceed ten megawatts (MW); however, no more than ten MW of the installation's capacity will be interconnected at any point in time at the point of common coupling under this section.
AFTER:  (6) Interconnection -- The physical connection of distributed generation to the utility system in accordance with the requirements of this section so that parallel operation can occur. (7) Interconnection agreement -- The form of agreement prescribed in subsection (p) of this section. The interconn…

## Statements to check (new or changed since the last audit)

- **How it works #2** (cites e20, e21, e23, e22): Interconnection conditions for DGRs and DESRs (current text): the Resource Entity must provide documentation from the DSP stating that the interconnecting distribution circuit will not be disconnected as part of an EEA Level 3, an under-frequency load shedding event or an under-voltage load shedding event, unless required for DSP local system maintenance or a DSP local system emergency. [e20] If a DSP later determines the circuit will need to be disconnected in those events, the DSP notifies the designated contact, the Resource Entity notifies ERCOT via Resource Registration, and the DGR or DESR is immediately disqualified from offering any Ancillary Service. [e21] The Resource Node for a DGR or DESR is fixed at a single Electrical Bus in the Network Operations Model. [e23] A DSP may disallow a proposed conversion of an SODG to a DGR or DESR that it finds not electrically or operationally feasible. [e22]
- **Key facts #6** (cites e21) FLAG number-not-in-quote: 3.8: - Under the current text of 3.8.6(1)(a), a DGR or DESR whose circuit will be disconnected in specified load-shed events is immediately disqualified from offering Ancillary Service; NPRR1171 and NPRR1213 are pending replacements for paragraph (1). [e21]
- **Questions #10** (cites e21) FLAG number-not-in-quote: 3.8: Under the current text of 3.8.6(1)(a), it is immediately disqualified from offering any Ancillary Service once the DSP's determination is notified and the Resource Entity informs ERCOT (paragraph (1) has pending replacements). [e21]
- **Link to resource-types** (cites e1, e2) FLAG number-not-in-quote: 1 MW: is-a Resource Types (Generation, Load, ESR, SOG): A DGR is a Generation Resource; an SODG is a distribution-connected generator that does not register as a DGR (or is 1 MW or less by choice). [e1][e2]
- **Link to resource-entity** (cites e2): related Resource Entity: Resource Entities register these units with ERCOT. [e2]
- **Link to tdsp** (cites e1, e2): related TDSP (Transmission & Distribution Service Provider): These units connect to the Distribution System rather than the ERCOT transmission system. [e1][e2]
- **Link to settlement-point** (cites e4, e8): related Settlement Point: SODG energy is paid on a nodal price at the bus mapped to its associated load, with listed exceptions including an opt-out. [e4][e8]
- **Link to load-zone** (cites e8, e12): related Load Zone: An SODG that opted out of nodal pricing is settled at the Load Zone Settlement Point Price while the opt-out lasts; the saved current text does not say how sites with more than 50% energy storage are priced. [e8][e12]
- **Link to ufe** (cites e25): related UFE (Unaccounted-For Energy): Load is not netted for registered distribution-connected sources, so TSP load data must exclude their impact in planning models. [e25]
- **Link to sced** (cites e1, e3): related SCED (Security-Constrained Economic Dispatch): A DGR can participate in SCED as a Generation Resource, while the settlement-only categories cannot. [e1][e3]
- **Link to ancillary-services** (cites e21): related Ancillary Services (AS): Under current text, a DGR or DESR on a circuit that will be disconnected in specified load-shed events is disqualified from offering Ancillary Service. [e21]
- **Link to puct** (cites e27): related PUCT (Public Utility Commission of Texas): The PUCT's rule on interconnection of on-site distributed generation limits the capacity interconnected at the point of common coupling under that section to ten MW. [e27]

