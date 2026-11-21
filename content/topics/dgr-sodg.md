---
id: dgr-sodg
name: DGR & SODG (Distribution-Connected Generation)
aliases: [DGR, SODG, Distribution Generation Resource, Settlement Only Distribution Generator, distribution-connected generation]
kind: concept
domain: structure
level: 2
lenses: [analyst, trading, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: resource-types
    type: is-a
    note: A DGR is a Generation Resource; an SODG is a distribution-connected generator that does not register as a DGR (or is 1 MW or less by choice). [e1][e2]
  - to: resource-entity
    type: related
    note: Resource Entities register these units with ERCOT. [e2]
  - to: tdsp
    type: related
    note: These units connect to the Distribution System rather than the ERCOT transmission system. [e1][e2]
  - to: settlement-point
    type: related
    note: SODG energy is paid on a nodal price at the bus mapped to its associated load, with listed exceptions including an opt-out. [e4][e8]
  - to: load-zone
    type: related
    note: An SODG that opted out of nodal pricing is settled at the Load Zone Settlement Point Price while the opt-out lasts; the saved current text does not say how sites with more than 50% energy storage are priced. [e8][e12]
  - to: energy-storage-resource
    type: related
    note: Distribution-connected storage has parallel DESR definitions.
  - to: ufe
    type: related
    note: Load is not netted for registered distribution-connected sources, so TSP load data must exclude their impact in planning models. [e25]
  - to: sced
    type: related
    note: A DGR can participate in SCED as a Generation Resource, while the settlement-only categories cannot. [e1][e3]
  - to: ancillary-services
    type: related
    note: Under current text, a DGR or DESR on a circuit that will be disconnected in specified load-shed events is disqualified from offering Ancillary Service. [e21]
  - to: puct
    type: related
    note: The PUCT's rule on interconnection of on-site distributed generation limits the capacity interconnected at the point of common coupling under that section to ten MW. [e27]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Distribution Generation Resource (DGR)"
    quote: "A Generation Resource connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Generation Resource to participate in the ERCOT markets."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Distribution Generator (SODG)"
    quote: "A generator that is connected to the Distribution System with a rating of: (1) One MW or less that chooses to register as an SODG; or (2) Greater than one and up to ten MW that is capable of providing a net export to the ERCOT System and does not register as a Distribution Generation Resource (DGR)."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Generator (SOG)"
    quote: "A generator that is settled for exported energy only, but may not participate in the Ancillary Services market, Reliability Unit Commitment (RUC), Security-Constrained Economic Dispatch (SCED), or make energy offers."
  - id: e5
    source: np-02
    locator: "Section 2.1, SODG registration sentence"
    quote: "SODGs must be registered with ERCOT in accordance with Planning Guide Section 6.8.2, Resource Registration Process, and will be modeled in ERCOT systems for reliability in accordance with Section 3.10.7.2, Modeling of Resources and Transmission Loads."
  - id: e4
    source: np-06
    locator: "Section 6.6.3.8(2)"
    quote: "For an SODG, the price used as the basis for the 15-minute Real-Time price calculation is the time-weighted price at the Electrical Bus associated with this mapped Load in the Network Operations Model."
  - id: e6
    source: np-06
    locator: "Section 6.6.3.8(1)"
    quote: "The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions:"
  - id: e8
    source: np-06
    locator: "Section 6.6.3.8(1)(a)-(b)"
    quote: >-
      The payment or charge to each QSE for energy from an SODG or an SOTG shall be based on an identified nodal energy price, RTESOGPR, as described in this subsection, with the following exceptions:
      (a) An SODG or SOTG that has opted out of nodal pricing as described in paragraph (5) below; or
      (b) Any site with one or more ESS SODGs or SOTGs where the ESS capacity constitutes more than 50% of the site’s total SOG nameplate capacity.
  - id: e7
    source: np-02
    locator: "Section 2.1, pending NPRR995 note after SODG definition"
    quote: "[NPRR995: Delete the above definition “Settlement Only Distribution Generator (SODG)” upon system implementation.]"
  - id: e9
    source: np-06
    locator: "Section 6.6.3.8(2), last sentence"
    quote: "SODG and SOTG sites will be represented as a single unit in the ERCOT Settlement system."
  - id: e10
    source: np-06
    locator: "Section 6.6.3.8(5), Real-Time Payment or Charge for Energy from an SODG or SOTG (opt-out of nodal pricing)"
    quote: "Notwithstanding anything else in this Section except paragraphs (6) and (7) below, a Resource Entity may opt out of nodal pricing and continue Load Zone Settlement for any SODG or SOTG if, by January 1, 2019, the SODG or SOTG was operational or was subject to a Power Purchase or Tolling Agreement (PPA) or Transmission and/or Distribution Service Provider (TDSP) interconnection agreement, or had an executed agreement with a developer. By December 31, 2019, the Resource Entity must submit a properly completed Section 23, Form N, Pricing Election for Settlement Only Distribution Generators and Settlement Only Transmission Generators."
  - id: e11
    source: np-06
    locator: "Section 6.6.3.8(5), later sentences"
    quote: "Any SODG or SOTG relying on a PPA or TDSP interconnection agreement or agreement with a developer must also have achieved Initial Synchronization for the full Resource capacity before June 1, 2020 to be eligible to opt out of nodal pricing. A Resource Entity must provide ERCOT documented proof of any PPA, TDSP interconnection agreement, or developer agreement that it relies on as a basis for any election under this paragraph. This election is valid through the earlier of December 31, 2029 or the date on which the election is revoked pursuant to paragraph (8) of this Section. On January 1, 2030, all SODGs and SOTGs will be subject to nodal pricing."
  - id: e12
    source: np-06
    locator: "Section 6.6.3.8(6)"
    quote: "For any SODG or SOTG for which the applicable Resource Entity has elected to opt out of nodal pricing, ERCOT shall settle the output of the SODG or SOTG using the Load Zone Settlement Point Price for the duration of the opt-out period so long as the SODG or SOTG is not physically modified for any purpose, including to increase the capacity of the unit or change the fuel type of the unit, except as necessary for routine maintenance or repairs to address normal wear and tear."
  - id: e13
    source: np-06
    locator: "Section 6.6.3.8(8)"
    quote: "A Resource Entity that has opted out of nodal pricing for one or more SODGs or SOTGs pursuant to paragraph (5) of this Section may withdraw that election and begin receiving applicable nodal pricing for one or more such generators by submitting a properly completed election form (Section 23, Form N). An election of nodal pricing is irrevocable."
  - id: e14
    source: np-06
    locator: "Section 6.6.3.8(3), variable MEBSOGNET"
    quote: "The net sum for all Settlement Meters for SODG or SOTG site gsc represented by QSE q. A positive value indicates an injection of power to the ERCOT System."
  - id: e15
    source: np-06
    locator: "Section 6.6.3.8(3), zero net metered energy"
    quote: "If MEBSOGNET _(q, gsc) = 0 for a 15-minute Settlement Interval, then The Load is included in the Real-Time AML per QSE and is included in the Real-Time energy imbalance payment or charge at a Load Zone."
  - id: e16
    source: np-06
    locator: "Section 6.6.3.8(3), variable RTESOGPR"
    quote: "The Real-Time price at Electrical Bus b for the Settlement Meter for the SODG or SOTG site for the 15-minute Settlement Interval."
  - id: e17
    source: np-06
    locator: "Section 6.6.3.8(3), variable SDWF"
    quote: "The weight used in the SODG or SOTG price calculation for the portion of the SCED interval y within the Settlement Interval."
  - id: e18
    source: np-06
    locator: "Section 6.6.3.8(3), variable RTRDP"
    quote: "The Real-Time price for the 15-minute Settlement Interval, reflecting the impact of reliability deployments on energy prices that is calculated from the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Settlement Only Transmission Generator (SOTG)"
    quote: "A generator that is connected to the ERCOT transmission system with a rating of ten MW or less and is registered with the Public Utility Commission of Texas (PUCT) as a power generation company."
  - id: e20
    source: np-03
    locator: "Section 3.8.6(1), Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) (current text)"
    quote: "As a condition for the interconnection of a DGR or DESR, the affected Resource Entity, after consultation with the relevant Distribution Service Provider (DSP), shall provide documentation from the DSP to ERCOT stating that the interconnecting distribution circuit will not be disconnected as part of an Energy Emergency Alert (EEA) Level 3, an under-frequency Load shedding event, or an under-voltage Load shedding event, unless required for DSP local system maintenance or during a DSP local system emergency."
  - id: e21
    source: np-03
    locator: "Section 3.8.6(1)(a)(i)-(iii), current text"
    quote: >-
      If a DSP subsequently determines that any circuit to which a DGR or DESR is interconnected will need to be disconnected during these Load shedding events, or that a DGR or DESR will need to be moved to a circuit that will be disconnected during these Load shedding events:
      (i) The DSP shall promptly notify the designated contact for the DGR or DESR;
      (ii) The Resource Entity shall promptly notify ERCOT of this fact via the Resource Registration process; and
      (iii) The DGR or DESR will immediately be disqualified from offering to provide any Ancillary Service.
  - id: e22
    source: np-03
    locator: "Section 3.8.6(2), current text"
    quote: "For a proposed conversion of an existing Settlement Only Distribution Generator (SODG) to a DGR or DESR, the interconnecting DSP will evaluate the proposed conversion and will determine whether it is electrically and operationally feasible. If the interconnecting DSP determines that the conversion is not electrically or operationally feasible, the DSP may disallow the conversion."
  - id: e23
    source: np-03
    locator: "Section 3.8.6(3)"
    quote: "The Resource Node for a DGR or DESR shall be fixed at a single Electrical Bus in the ERCOT Network Operations Model."
  - id: e24
    source: np-03
    locator: "Section 3.1.6.14, Distribution Facility Outages Impacting DGRs and DESRs"
    quote: "ERCOT may not reject a DGR or DESR Outage taken due to a DSP system outage, nor may ERCOT require the DSP to reschedule the outage. However, ERCOT may consult with the DSP about rescheduling the outage."
  - id: e25
    source: pg-06
    locator: "Planning Guide Section 6.3(3)(b), steady-state base cases"
    quote: "Each TSP, or its Designated Agent, shall not include the impact of energy sources connected to the Distribution System that are registered with ERCOT and required to provide telemetry including, but not limited to, Distribution Generation Resources (DGRs), Distribution Energy Storage Resources (DESRs), or Settlement Only Distribution Generators (SODGs) in its submitted Load data as negative loads or as embedded reductions in the submitted load forecast."
  - id: e26
    source: np-02
    locator: "Section 2.1, definition of Distribution Energy Storage Resource (DESR)"
    quote: "An Energy Storage Resource (ESR) connected to the Distribution System that is either: (1) Greater than ten MW and not registered with the Public Utility Commission of Texas (PUCT) as a self-generator; or (2) Greater than one MW that chooses to register as a Resource with ERCOT to participate in the ERCOT markets."
  - id: e27
    source: puct-25-211
    locator: "16 TAC Section 25.211(c)(5), definition of Facility"
    quote: "An electrical generating installation consisting of one or more on-site distributed generation units, including a distributed natural gas generation facility. The total capacity of the installation’s on-site distributed generation units may exceed ten megawatts (MW); however, no more than ten MW of the installation’s capacity will be interconnected at any point in time at the point of common coupling under this section."
  - id: e28
    source: puct-25-211
    locator: "16 TAC Section 25.211(b), Purpose"
    quote: "Sales of power by on-site distributed generation and natural gas distributed generation in the intrastate wholesale market are subject to §§25.191-25.203 of this title (relating to Open-Access Comparable Transmission Service for Electrical Utilities in the Electric Reliability Council of Texas)."
  - id: e29
    source: np-06
    locator: "Section 6.6.3.8(3), equation for RTESOGPR (current text)"
    quote: "RTESOGPR _(b) = Max [-$251, []((SDWF _(y) * RTLMP _(b, y)) + RTRDP)]"
  - id: e30
    source: np-06
    locator: "Section 6.6.3.8(3), variable RTLMP"
    quote: "The Real-Time LMP at Electrical Bus b, for the SCED interval y."
  - id: e31
    source: np-02
    locator: "Section 2.1, pending NPRR995 note after SOG definition"
    quote: "[NPRR995: Delete the above definition “Settlement Only Generator (SOG)” upon system implementation.]"
---

## Definition

A Distribution Generation Resource (DGR) is a Generation Resource connected to the Distribution System that is either greater than ten MW and not registered with the PUCT as a self-generator, or greater than one MW and chooses to register as a Generation Resource to participate in ERCOT markets. [e1] A Settlement Only Distribution Generator (SODG) is a distribution-connected generator rated one MW or less that chooses to register as an SODG, or greater than one and up to ten MW that can net export to ERCOT and does not register as a DGR. [e2]

## How it works

The difference is market participation. A DGR is a Generation Resource. [e1] The Protocols' Settlement Only Generator (SOG) definition describes a generator settled for exported energy only that may not join the ancillary services market, RUC or SCED or make energy offers. [e3] SODGs must be registered with ERCOT under Planning Guide 6.8.2 and are modeled in ERCOT systems for reliability. [e5] A Settlement Only Transmission Generator (SOTG), by contrast, is connected to the transmission system, rated ten MW or less and registered with the PUCT as a power generation company. [e19] The Distribution Energy Storage Resource (DESR) is the storage parallel to the DGR, with the same ten MW and one MW tests. [e26] On the PUCT side, the on-site distributed generation interconnection rule says sales of power by on-site distributed generation in the intrastate wholesale market are subject to the open-access transmission service rules for ERCOT electrical utilities (§§25.191-25.203). [e28]

Interconnection conditions for DGRs and DESRs (current text): the Resource Entity must provide documentation from the DSP stating that the interconnecting distribution circuit will not be disconnected as part of an EEA Level 3, an under-frequency load shedding event or an under-voltage load shedding event, unless required for DSP local system maintenance or a DSP local system emergency. [e20] If a DSP later determines the circuit will need to be disconnected in those events, the DSP notifies the designated contact, the Resource Entity notifies ERCOT via Resource Registration, and the DGR or DESR is immediately disqualified from offering any Ancillary Service. [e21] The Resource Node for a DGR or DESR is fixed at a single Electrical Bus in the Network Operations Model. [e23] A DSP may disallow a proposed conversion of an SODG to a DGR or DESR that it finds not electrically or operationally feasible. [e22]

Operations and planning: a DSP planned outage on a distribution facility that affects a DGR or DESR is reflected by the Resource Entity as a Planned or Maintenance Outage, and ERCOT may not reject it or require the DSP to reschedule it. [e24] In planning base cases, TSPs must not net the impact of registered, telemetered distribution-connected sources (DGRs, DESRs, SODGs) into their submitted Load data as negative loads or embedded reductions in the load forecast. [e25]

## Formula

SODG settlement, Section 6.6.3.8 (current text). The payment or charge to each QSE for SODG energy is based on a nodal energy price, RTESOGPR, with exceptions. [e6] For an SODG the price is the time-weighted price at the Electrical Bus associated with the mapped Load in the Network Operations Model, and an SODG site is represented as a single unit in settlement. [e4][e9]

The site's net metered energy, MEBSOGNET, is the net sum for all Settlement Meters at the site; a positive value is injection to ERCOT. [e14] If it equals zero in a 15-minute Settlement Interval, the Load is included in the Real-Time AML per QSE and in the Real-Time energy imbalance payment or charge at a Load Zone. [e15] Otherwise the payment or charge is based on RTESOGPR, defined as the Real-Time price at the Electrical Bus for the site's Settlement Meter. [e16]

The variable list shows that the price is built from SCED intervals: the Real-Time LMP at the bus for each SCED interval, weighted by SDWF (the weight for the portion of the SCED interval within the Settlement Interval), together with a Real-Time Reliability Deployment Price for Energy. [e17][e18][e30] The equation also wraps that sum in a floor, RTESOGPR = Max [-$251, ...], so the price cannot fall below -$251 per MWh. [e29] The full equation is not reproduced here; read it from Protocol Section 6.6.3.8(3).

Opt-out and nodal pricing. A Resource Entity may opt out of nodal pricing and keep Load Zone Settlement for an SODG if, by January 1, 2019, the unit was operational or subject to a PPA or TDSP interconnection agreement or had an executed developer agreement, and it filed Form N by December 31, 2019. [e10] Units relying on those agreements must also have achieved Initial Synchronization for full capacity before June 1, 2020, and the election is valid through the earlier of December 31, 2029 or revocation; on January 1, 2030 all SODGs and SOTGs are subject to nodal pricing. [e11] While opted out, ERCOT settles the output at the Load Zone Settlement Point Price as long as the unit is not physically modified, except for routine maintenance or repairs. [e12] An election of nodal pricing is irrevocable. [e13]

## ERCOT context

The SODG definition is marked for deletion under NPRR995 upon system implementation, so that definition is expected to change; this is pending, not yet in effect. [e7] The Settlement Only Generator (SOG) definition carries the same NPRR995 deletion note. [e31] The settlement paragraph 6.6.3.8, the DGR and DESR interconnection condition in 3.8.6(1) (NPRR1171 and NPRR1213) and the conversion text in 3.8.6(2) (NPRR995 and NPRR1171) are likewise shown in the saved Protocols with pending replacements, so the details above are current text only.

## Key facts

- DGR thresholds: over 10 MW and not a PUCT self-generator, or over 1 MW by choice. [e1]
- SODG: 1 MW or less by choice, or over 1 MW and up to 10 MW that can net export and does not register as a DGR. [e2]
- Settlement Only Generators (SOG) are settled for exported energy only, with no energy offers, SCED, RUC or ancillary services. [e3]
- SODG energy is paid at the nodal price at the bus mapped to the associated load, subject to listed exceptions (for example an opt-out). [e4][e6]
- The SODG/SOTG opt-out from nodal pricing ends no later than December 31, 2029; from January 1, 2030 all SODGs and SOTGs are subject to nodal pricing. [e11]
- Under the current text of 3.8.6(1)(a), a DGR or DESR whose circuit will be disconnected in specified load-shed events is immediately disqualified from offering Ancillary Service; NPRR1171 and NPRR1213 are pending replacements for paragraph (1). [e21]

## Say it like this

(Guidance) A DGR is distribution-connected generation that participates in the market as a Generation Resource; an SODG sits on the distribution system too but does not register as a DGR (or is 1 MW or less by choice); its energy is settled at a nodal energy price. [e2][e6] Legacy SODGs that opted out are settled at the Load Zone price until the opt-out ends. [e11][e12]

## Common confusion

(Guidance) The names look alike but the market roles differ: a DGR is a Generation Resource, while the settlement-only (SOG) category cannot make energy offers. [e1][e3] The size line is not sharp: units between 1 and 10 MW can be either, depending on whether they register as a DGR. [e2] An SODG is on the distribution system; an SOTG is on the transmission system. [e2][e19]

## Questions

### When would a 5 MW distribution-connected plant be an SODG?

If it can net export to ERCOT and does not register as a DGR. [e2]

### Where is an SODG's energy priced?

At the electrical bus associated with the mapped load, subject to listed exceptions. [e4][e8]

### Why would some SODGs still be settled at the Load Zone price?

Those that elected to opt out of nodal pricing, under the conditions on dates, agreements and synchronization, are settled at the Load Zone Settlement Point Price while the opt-out lasts and the unit is not physically modified. [e10][e11][e12]

### What if an opted-out SODG adds capacity or changes fuel?

The opt-out settlement at Load Zone price applies only so long as the unit is not physically modified for any purpose, including increased capacity or changed fuel type; if ERCOT determines the conditions are not met it settles the output at the applicable nodal price as soon as practicable after written notice. [e12]

### What happens to a DGR's Ancillary Service eligibility if its circuit becomes subject to load shed?

Under the current text of 3.8.6(1)(a), it is immediately disqualified from offering any Ancillary Service once the DSP's determination is notified and the Resource Entity informs ERCOT (paragraph (1) has pending replacements). [e21]

### Why does the Planning Guide tell TSPs not to net DGRs and SODGs in load data?

The Planning Guide says registered, telemetered distribution-connected sources must not be included in submitted Load as negative loads or embedded reductions; the sources themselves are modeled through registration. [e25]

## Open items

- np-02 lays out the SODG definition under the SOG definition, but the quoted SOG text does not itself say SODGs are SOGs; the no-offers/no-SCED restriction is cited to the SOG definition only.
- The treatment of sites where energy storage is more than 50% of site SOG nameplate (6.6.3.8(1)(b)) is not stated in the current text; NPRR995 (pending, with SODESS and SOTESS definitions) appears to restructure it and is not cited here.
- SODG telemetry exemption (10 MWh) is in a table row that could be pending; not cited.
- The Section 23 Form N election and the Resource Registration Glossary are not saved sources.
- PUCT 25.211 and 25.212 (on-site DG interconnection) are saved, but how they connect to the ERCOT DGR and SODG categories is not stated in those rules; only the 10 MW point-of-common-coupling limit is cited.
- Resolved 2026-11-21: SODG opt-out (6.6.3.8(5)-(8)), DGR operational treatment in np-03 3.8.6 and 3.1.6.14.
