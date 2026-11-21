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

### e5 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, SODG registration sentence · text copy line 2550

BEFORE: … generator that is connected to the Distribution System with a rating of: (1) One MW or less that chooses to register as an SODG; or (2) Greater than one and up to ten MW that is capable of providing a net export to the ERCOT System and does not register as a Distribution Generation Resource (DGR). 
QUOTE: SODGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads.
AFTER:  -------------------------------------------------------------------------------------------------------------------- [NPRR995: Delete the above definition "Settlement Only Distribution Generator (SODG)" upon system implementation.] -------------------------------------------------------------------…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(2) · text copy line 5725 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …cribed in this subsection, with the following exceptions: (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site's total SOG nameplate capacity. (2) 
QUOTE: For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model.
AFTER:  For an SOTG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus as determined by ERCOT in review of the meter location of the SOTG in the Network Operations Model. SODG and SOTG sites will be represented as a single unit in the…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(1) · text copy line 5719 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.3.8 Real-Time Payment or Charge for Energy from a Settlement Only Distribution Generator (SODG) or a Settlement Only Transmission Generator (SOTG) (1) 
QUOTE: The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions:
AFTER:  (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site's total SOG nameplate capacity. (2) For an SODG, the price used as the basis for the 15-minut…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(1)(a)-(b) · text copy line 5719 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …------------------------------------------------------------------------------------------------------------------------------------------------ 6.6.3.8 Real-Time Payment or Charge for Energy from a Settlement Only Distribution Generator (SODG) or a Settlement Only Transmission Generator (SOTG) (1) 
QUOTE: The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions: (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site's total SOG nameplate capacity.
AFTER:  (2) For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model. For an SOTG, the price used as the basis for the 15-minute Real-Time price calculation is the…

### e7 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, pending NPRR995 note after SODG definition · text copy line 2553

BEFORE: … Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads. -------------------------------------------------------------------------------------------------------------------- 
QUOTE: [NPRR995: Delete the above definition "Settlement Only Distribution Generator (SODG)" upon system implementation.]
AFTER:  -------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------- Settlement Only Transmission Generator (SOTG) A generator that is…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(2), last sentence · text copy line 5179 · heading above: 6.6.3.2 Real-Time Energy Imbalance Payment or Charge at a Load Zone

BEFORE: …-------------------------------------+ (j) The aggregated generation of its Energy Storage System (ESS) SODGs and SOTGs at sites where the ESS capacity constitutes more than 50% of the total SODG or SOTG nameplate capacity, as confirmed by an affidavit submitted by the Resource Entity for the site. 
QUOTE: SODG and SOTG sites will be represented as a single unit in the ERCOT Settlement system.
AFTER:  (2) The payment or charge to each QSE for Energy Imbalance Service at a Load Zone for a given 15-minute Settlement Interval is calculated as follows: RTEIAMT _(q, p) = (-1) * {[RTSPP _(p) * [(SSSK _(q, p) * 1⁄4) + (DAEP _(q, p) * 1⁄4) + (RTQQEP _(q, p) * 1⁄4) - (SSSR _(q, p) * 1⁄4) - (DAES _(q, p) …

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(5), Real-Time Payment or Charge for Energy from an SODG or SOTG (opt-out of nodal pricing) · text copy line 5797 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …minute Settlement Interval. q none A QSE. gsc none A generation site code. ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- (5) 
QUOTE: Notwithstanding anything else in this Section except paragraphs (6) and (7) below, a Resource Entity may opt out of nodal pricing and continue Load Zone Settlement for any SODG or SOTG if, by January 1, 2019, the SODG or SOTG was operational or was subject to a Power Purchase or Tolling Agreement (PPA) or Transmission and/or Distribution Service Provider (TDSP) interconnection agreement, or had an executed agreement with a developer. By December 31, 2019, the Resource Entity must submit a properly completed Section 23, Form N, Pricing Election for Settlement Only Distribution Generators and Settlement Only Transmission Generators.
AFTER:  Any SODG or SOTG relying on a PPA or TDSP interconnection agreement or agreement with a developer must also have achieved Initial Synchronization for the full Resource capacity before June 1, 2020 to be eligible to opt out of nodal pricing. A Resource Entity must provide ERCOT documented proof of a…

### e11 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(5), later sentences · text copy line 5797 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: … Service Provider (TDSP) interconnection agreement, or had an executed agreement with a developer. By December 31, 2019, the Resource Entity must submit a properly completed Section 23, Form N, Pricing Election for Settlement Only Distribution Generators and Settlement Only Transmission Generators. 
QUOTE: Any SODG or SOTG relying on a PPA or TDSP interconnection agreement or agreement with a developer must also have achieved Initial Synchronization for the full Resource capacity before June 1, 2020 to be eligible to opt out of nodal pricing. A Resource Entity must provide ERCOT documented proof of any PPA, TDSP interconnection agreement, or developer agreement that it relies on as a basis for any election under this paragraph. This election is valid through the earlier of December 31, 2029 or the date on which the election is revoked pursuant to paragraph (8) of this Section. On January 1, 2030, all SODGs and SOTGs will be subject to nodal pricing.
AFTER:  (6) For any SODG or SOTG for which the applicable Resource Entity has elected to opt out of nodal pricing, ERCOT shall settle the output of the SODG or SOTG using the Load Zone Settlement Point Price for the duration of the opt-out period so long as the SODG or SOTG is not physically modified for a…

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(6) · text copy line 5799 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …t that it relies on as a basis for any election under this paragraph. This election is valid through the earlier of December 31, 2029 or the date on which the election is revoked pursuant to paragraph (8) of this Section. On January 1, 2030, all SODGs and SOTGs will be subject to nodal pricing. (6) 
QUOTE: For any SODG or SOTG for which the applicable Resource Entity has elected to opt out of nodal pricing, ERCOT shall settle the output of the SODG or SOTG using the Load Zone Settlement Point Price for the duration of the opt-out period so long as the SODG or SOTG is not physically modified for any purpose, including to increase the capacity of the unit or change the fuel type of the unit, except as necessary for routine maintenance or repairs to address normal wear and tear.
AFTER:  (7) If at any time ERCOT determines that the SODG or SOTG fails to meet the opt-out conditions in paragraph (6) above, ERCOT shall settle the output of the SODG or SOTG at the applicable nodal price as soon as practicable after providing written notice to the affected Resource Entity. (8) A Resourc…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(8) · text copy line 5803 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …and tear. (7) If at any time ERCOT determines that the SODG or SOTG fails to meet the opt-out conditions in paragraph (6) above, ERCOT shall settle the output of the SODG or SOTG at the applicable nodal price as soon as practicable after providing written notice to the affected Resource Entity. (8) 
QUOTE: A Resource Entity that has opted out of nodal pricing for one or more SODGs or SOTGs pursuant to paragraph (5) of this Section may withdraw that election and begin receiving applicable nodal pricing for one or more such generators by submitting a properly completed election form (Section 23, Form N). An election of nodal pricing is irrevocable.
AFTER:  ERCOT will effectuate the transition of an SODG or SOTG to nodal pricing in ERCOT Settlement systems as soon as practicable. +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(3), variable MEBSOGNET · text copy line 5758 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …erval. RTESOGPR _(b) $/MWh Real-Time Price for the Energy Metered for each SODG or SOTG Site The Real-Time price at Electrical Bus b for the Settlement Meter for the SODG or SOTG site for the 15-minute Settlement Interval. MEBSOGNET _(q, gsc) MWh Net Metered energy at gsc for an SODG or SOTG Site 
QUOTE: The net sum for all Settlement Meters for SODG or SOTG site gsc represented by QSE q. A positive value indicates an injection of power to the ERCOT System.
AFTER:  MEBSOG _(q,) _(gsc, b) MWh Metered energy at bus for an SODG or SOTG Site The metered energy by the Settlement Meter(s) at Electrical Bus b for SODG or SOTG site gsc represented by QSE q. A positive value represents energy produced, and a negative value represents energy consumed. RTRDP $/MWh Real…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(3), zero net metered energy · text copy line 5731 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …he Network Operations Model. SODG and SOTG sites will be represented as a single unit in the ERCOT Settlement system. (3) For an SODG or an SOTG, the total payment or charge for each 15-minute Settlement Interval shall be calculated as follows: MEBSOGNET _(q,) _(gsc) = Max(0, []MEBSOG _(q, gsc, b)) 
QUOTE: If MEBSOGNET _(q, gsc) = 0 for a 15-minute Settlement Interval, then The Load is included in the Real-Time AML per QSE and is included in the Real-Time energy imbalance payment or charge at a Load Zone.
AFTER:  Otherwise, when MEBSOGNET _(q, gsc) > 0 for a 15-minute Settlement Interval, then RTESOGSAMT _(q,) _(gsc) = (-1) * [[]( RTESOGPR _(b) * MEBSOG _(q, gsc, b))] Where the price for the SOTG or SODG is determined as follows: RTESOGPR _(b) = Max [-$251, []((SDWF _(y) * RTLMP _(b, y)) + RTRDP)] Where: RT…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(3), variable RTESOGPR · text copy line 5756 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …--------------------------------------- RTESOGSAMT _(q, gsc) $ Real-Time Energy for SODG and SOTG Site Amount -The total payment or charge to QSE q for SODG or SOTG site gsc for the 15-minute Settlement Interval. RTESOGPR _(b) $/MWh Real-Time Price for the Energy Metered for each SODG or SOTG Site 
QUOTE: The Real-Time price at Electrical Bus b for the Settlement Meter for the SODG or SOTG site for the 15-minute Settlement Interval.
AFTER:  MEBSOGNET _(q, gsc) MWh Net Metered energy at gsc for an SODG or SOTG Site The net sum for all Settlement Meters for SODG or SOTG site gsc represented by QSE q. A positive value indicates an injection of power to the ERCOT System. MEBSOG _(q,) _(gsc, b) MWh Metered energy at bus for an SODG or SOT…

### e17 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(3), variable SDWF · text copy line 5766 · heading above: 6.6.3.7 Real-Time High Dispatch Limit Override Energy Charge

BEFORE: …eliability Deployment Price Adder for Energy. RTRDPA _(y) $/MWh Real-Time Reliability Deployment Price Adder for Energy The Real-Time price adder that captures the impact of reliability deployments on energy prices for the SCED interval y. SDWF _(y) None SCED Duration Weighting Factor per interval
QUOTE: The weight used in the SODG or SOTG price calculation for the portion of the SCED interval y within the Settlement Interval.
AFTER:  RTLMP _(b, y) $/MWh Real-Time Locational Marginal Price at bus per intervalThe Real-Time LMP at Electrical Bus b, for the SCED interval y. TLMP _(y) second Duration of SCED interval per intervalThe duration of the SCED interval y within the Settlement Interval. gsc none A generation site code. b …

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.3.8(3), variable RTRDP · text copy line 3844 · heading above: 6.6.1.2 Real-Time Settlement Point Price for a Load Zone

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | RTRDP | $/MWh | Real-Time Reliability Deployment Price for Energy
QUOTE: The Real-Time price for the 15-minute Settlement Interval, reflecting the impact of reliability deployments on energy prices that is calculated from the Real-Time Reliability Deployment Price Adder for Energy.
AFTER:  | +---------------+--------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Settlement Only Transmission Generator (SOTG) · text copy line 2560

BEFORE: …em implementation.] -------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------- Settlement Only Transmission Generator (SOTG) 
QUOTE: A generator that is connected to the ERCOT transmission system with a rating of ten MW or less and is registered with the Public Utility Commission of Texas (PUCT) as a power generation company.
AFTER:  SOTGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and may be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads. ------------------------------------------------…

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

### e24 · `np-03` · tier 1 · ERCOT Nodal Protocols, Section 3: Management Activities for the ERCOT System (effective 2026-11-06)
locator: Section 3.1.6.14, Distribution Facility Outages Impacting DGRs and DESRs · text copy line 1494 · heading above: 3.1.6.14 Distribution Facility Outages Impacting Distribution Generation Resources and Distribution Energy Storage Resources

BEFORE: …r QSE) if the DSP plans to take an outage on any distribution facility that will impact the operation of a DGR or DESR. The Resource Entity for the DGR or DESR shall submit a Planned or Maintenance Resource Outage, as appropriate, to reflect the unavailability of the Resource due to the DSP outage. 
QUOTE: ERCOT may not reject a DGR or DESR Outage taken due to a DSP system outage, nor may ERCOT require the DSP to reschedule the outage. However, ERCOT may consult with the DSP about rescheduling the outage.
AFTER:  3.1.7 Reliability Resource Outages (1) ERCOT shall evaluate requests for approval of an Outage of a Reliability Resource to determine if any one or a combination of proposed Outages may cause ERCOT to violate applicable reliability standards or exceed the RPOL. ERCOT's evaluations shall take into c…

### e25 · `pg-06` · tier 1 · ERCOT Planning Guide, Section 6: Data/Modeling (current 2026)
locator: Planning Guide Section 6.3(3)(b), steady-state base cases · text copy line 107 · heading above: 6.1 Steady-State Model Development

BEFORE: …Management System (NMMS), ERCOT and TSPs shall create steady-state models that represent current and planned system conditions from the following data elements: (a) Each TSP, or its Designated Agent, shall provide its respective transmission network steady-state model data, including load data. (b) 
QUOTE: Each TSP, or its Designated Agent, shall not include the impact of energy sources connected to the Distribution System that are registered with ERCOT and required to provide telemetry including, but not limited to, Distribution Generation Resources (DGRs), Distribution Energy Storage Resources (DESRs), or Settlement Only Distribution Generators (SODGs) in its submitted Load data as negative loads or as embedded reductions in the submitted load forecast.
AFTER:  (c) Each TSP, or its Designated Agent, shall include the impact of energy sources connected to the Distribution System that are not registered with ERCOT in its submitted Load data. The methodology used shall be consistent across all TSPs and described in the ERCOT Steady State Working Group Proced…

### e26 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Distribution Energy Storage Resource (DESR) · text copy line 2467

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Distribution Energy Storage Resource (DESR) 
QUOTE: An Energy Storage Resource (ESR) connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Resource with ERCOT to participate in the ERCOT markets.
AFTER:  Transmission Energy Storage Resource (TESR) An Energy Storage Resource (ESR) connected to the ERCOT transmission system that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to regis…

### e27 · `puct-25-211` · tier 1 · PUCT Substantive Rule 16 TAC §25.211, Interconnection of On-Site Distributed Generation
locator: 16 TAC Section 25.211(c)(5), definition of Facility · text copy line 51

BEFORE: …r the purpose of receiving or exporting electric power from or to the company's utility system. (4) Distributed natural gas generation facility -- A facility installed on the customer's side of the meter that uses natural gas to generate not more than 2,000 kilowatts of electricity. (5) Facility -- 
QUOTE: An electrical generating installation consisting of one or more on-site distributed generation units, including a distributed natural gas generation facility. The total capacity of the installation's on-site distributed generation units may exceed ten megawatts (MW); however, no more than ten MW of the installation's capacity will be interconnected at any point in time at the point of common coupling under this section.
AFTER:  (6) Interconnection -- The physical connection of distributed generation to the utility system in accordance with the requirements of this section so that parallel operation can occur. (7) Interconnection agreement -- The form of agreement prescribed in subsection (p) of this section. The interconn…

### e28 · `puct-25-211` · tier 1 · PUCT Substantive Rule 16 TAC §25.211, Interconnection of On-Site Distributed Generation
locator: 16 TAC Section 25.211(b), Purpose · text copy line 30

BEFORE: …tion includes stating the terms and conditions that govern the interconnection and parallel operation of both on-site distributed generation in order to implement Public Utility Regulatory Act (PURA) §39.101(b)(3) and a natural gas distributed generation facility in order to implement PURA §35.036. 
QUOTE: Sales of power by on-site distributed generation and natural gas distributed generation in the intrastate wholesale market are subject to §§25.191-25.203 of this title (relating to Open-Access Comparable Transmission Service for Electrical Utilities in the Electric Reliability Council of Texas).
AFTER:  (c) Definitions. The following words and terms when used in this section and §25.212 of this title shall have the following meanings, unless the context indicates otherwise: (1) Application for interconnection and parallel operation or application -- The form of application prescribed in subsection…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e1, e3, e5, e19, e26, e28): The difference is market participation. A DGR is a Generation Resource. [e1] The Protocols' Settlement Only Generator (SOG) definition describes a generator settled for exported energy only that may not join the ancillary services market, RUC or SCED or make energy offers. [e3] SODGs must be registered with ERCOT under Planning Guide 6.8.2 and are modeled in ERCOT systems for reliability. [e5] A Settlement Only Transmission Generator (SOTG), by contrast, is connected to the transmission system, rated ten MW or less and registered with the PUCT as a power generation company. [e19] The Distribution Energy Storage Resource (DESR) is the storage parallel to the DGR, with the same ten MW and one MW tests. [e26] On the PUCT side, the on-site distributed generation interconnection rule says sales of power by on-site distributed generation in the intrastate wholesale market are subject to the open-access transmission service rules for ERCOT electrical utilities (§§25.191-25.203). [e28]
- **How it works #2** (cites e20, e21, e23, e22): Interconnection conditions for DGRs and DESRs (current text): the Resource Entity must provide documentation from the DSP stating that the interconnecting distribution circuit will not be disconnected as part of an EEA Level 3, an under-frequency load shedding event or an under-voltage load shedding event, unless required for DSP local system maintenance or a DSP local system emergency. [e20] If a DSP later determines the circuit will need to be disconnected in those events, the DSP notifies the designated contact, the Resource Entity notifies ERCOT via Resource Registration, and the DGR or DESR is immediately disqualified from offering any Ancillary Service. [e21] The Resource Node for a DGR or DESR is fixed at a single Electrical Bus in the Network Operations Model. [e23] A DSP may disallow a proposed conversion of an SODG to a DGR or DESR that it finds not electrically or operationally feasible. [e22]
- **How it works #3** (cites e24, e25): Operations and planning: a DSP planned outage on a distribution facility that affects a DGR or DESR is reflected by the Resource Entity as a Planned or Maintenance Outage, and ERCOT may not reject it or require the DSP to reschedule it. [e24] In planning base cases, TSPs must not net the impact of registered, telemetered distribution-connected sources (DGRs, DESRs, SODGs) into their submitted Load data as negative loads or embedded reductions in the load forecast. [e25]
- **Formula #1** (cites e6, e4, e9) FLAG number-not-in-quote: 6.6, 3.8: SODG settlement, Section 6.6.3.8 (current text). The payment or charge to each QSE for SODG energy is based on a nodal energy price, RTESOGPR, with exceptions. [e6] For an SODG the price is the time-weighted price at the Electrical Bus associated with the mapped Load in the Network Operations Model, and an SODG site is represented as a single unit in settlement. [e4][e9]
- **Formula #2** (cites e14, e15, e16): The site's net metered energy, MEBSOGNET, is the net sum for all Settlement Meters at the site; a positive value is injection to ERCOT. [e14] If it equals zero in a 15-minute Settlement Interval, the Load is included in the Real-Time AML per QSE and in the Real-Time energy imbalance payment or charge at a Load Zone. [e15] Otherwise the amount is computed from the metered energy at each bus and the Real-Time price at that bus, defined as the Real-Time price at the Electrical Bus for the site's Settlement Meter. [e16]
- **Formula #3** (cites e17, e18) FLAG number-not-in-quote: 6.6, 3.8: The variable list shows that the price is built from SCED intervals: the Real-Time LMP at the bus for each SCED interval, weighted by SDWF (the weight for the portion of the SCED interval within the Settlement Interval), together with a Real-Time Reliability Deployment Price for Energy. [e17][e18] The equation itself is not reproduced here; read it from Protocol Section 6.6.3.8(3).
- **Formula #4** (cites e10, e11, e12, e13): Opt-out and nodal pricing. A Resource Entity may opt out of nodal pricing and keep Load Zone Settlement for an SODG if, by January 1, 2019, the unit was operational or subject to a PPA or TDSP interconnection agreement or had an executed developer agreement, and it filed Form N by December 31, 2019. [e10] Units relying on those agreements must also have achieved Initial Synchronization for full capacity before June 1, 2020, and the election is valid through the earlier of December 31, 2029 or revocation; on January 1, 2030 all SODGs and SOTGs are subject to nodal pricing. [e11] While opted out, ERCOT settles the output at the Load Zone Settlement Point Price as long as the unit is not physically modified, except for routine maintenance or repairs. [e12] An election of nodal pricing is irrevocable. [e13]
- **ERCOT context #1** (cites e7) FLAG number-not-in-quote: 6.6, 3.8: The SODG definition is marked for deletion under NPRR995 upon system implementation, so that definition is expected to change; this is pending, not yet in effect. [e7] The settlement paragraph 6.6.3.8 and the DGR conversion text in 3.8.6(2) are likewise shown in the saved Protocols with pending NPRR995 and NPRR1171 replacements, so the details above are current text only.
- **Key facts #5** (cites e11): - The SODG/SOTG opt-out from nodal pricing ends no later than December 31, 2029; from January 1, 2030 all SODGs and SOTGs are subject to nodal pricing. [e11]
- **Key facts #6** (cites e21): - A DGR or DESR whose circuit will be disconnected in specified load-shed events is immediately disqualified from offering Ancillary Service. [e21]
- **Say it like this #1** (cites e2, e6, e11, e12) FLAG number-not-in-quote: 1 MW: (Guidance) A DGR is distribution-connected generation that participates in the market as a Generation Resource; an SODG sits on the distribution system too but does not register as a DGR (or is 1 MW or less by choice); its energy is settled at a nodal energy price. [e2][e6] Legacy SODGs that opted out are settled at the Load Zone price until the opt-out ends. [e11][e12]
- **Common confusion #1** (cites e1, e3, e2, e19) FLAG number-not-in-quote: 10 MW: (Guidance) The names look alike but the market roles differ: a DGR is a Generation Resource, while the settlement-only (SOG) category cannot make energy offers. [e1][e3] The size line is not sharp: units between 1 and 10 MW can be either, depending on whether they register as a DGR. [e2] An SODG is on the distribution system; an SOTG is on the transmission system. [e2][e19]
- **Questions #6** (cites e10, e11, e12): Those that elected to opt out of nodal pricing, under the conditions on dates, agreements and synchronization, are settled at the Load Zone Settlement Point Price while the opt-out lasts and the unit is not physically modified. [e10][e11][e12]
- **Questions #8** (cites e12): The opt-out settlement at Load Zone price applies only so long as the unit is not physically modified for any purpose, including increased capacity or changed fuel type; if ERCOT determines the conditions are not met it settles the output at the applicable nodal price as soon as practicable after written notice. [e12]
- **Questions #10** (cites e21): It is immediately disqualified from offering any Ancillary Service once the DSP's determination is notified and the Resource Entity informs ERCOT. [e21]
- **Questions #12** (cites e25): The Planning Guide says registered, telemetered distribution-connected sources must not be included in submitted Load as negative loads or embedded reductions; the sources themselves are modeled through registration. [e25]
- **Link to resource-types** (cites e1, e2) FLAG number-not-in-quote: 1 MW: is-a Resource Types (Generation, Load, ESR, SOG): A DGR is a Generation Resource; an SODG is a distribution-connected generator that does not register as a DGR (or is 1 MW or less by choice). [e1][e2]
- **Link to resource-entity** (cites e2): related Resource Entity: Resource Entities register these units with ERCOT. [e2]
- **Link to tdsp** (cites e1, e2): related TDSP (Transmission & Distribution Service Provider): These units connect to the Distribution System rather than the ERCOT transmission system. [e1][e2]
- **Link to settlement-point** (cites e4, e8): related Settlement Point: SODG energy is paid on a nodal price at the bus mapped to its associated load, with listed exceptions including an opt-out. [e4][e8]
- **Link to load-zone** (cites e8, e12): related Load Zone: An SODG that opted out of nodal pricing is settled at the Load Zone Settlement Point Price while the opt-out lasts; the saved current text does not say how sites with more than 50% energy storage are priced. [e8][e12]
- **Link to ufe** (cites e25): related UFE (Unaccounted-For Energy): Load is not netted for registered distribution-connected sources, so TSP load data must exclude their impact in planning models. [e25]
- **Link to sced** (cites e1, e3): related SCED (Security-Constrained Economic Dispatch): A DGR can participate in SCED as a Generation Resource, while the settlement-only categories cannot. [e1][e3]
- **Link to ancillary-services** (cites e21): related Ancillary Services (AS): A DGR or DESR on a circuit that will be disconnected in specified load-shed events is disqualified from offering Ancillary Service. [e21]
- **Link to puct** (cites e27): related PUCT (Public Utility Commission of Texas): The PUCT's rule on interconnection of on-site distributed generation limits the capacity interconnected at the point of common coupling under that section to ten MW. [e27]

