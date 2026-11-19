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

## Statements to check

- **Definition #1** (cites e1, e2): A Distribution Generation Resource (DGR) is a Generation Resource connected to the Distribution System that is either greater than ten MW and not registered with the PUCT as a self-generator, or greater than one MW and chooses to register as a Generation Resource to participate in ERCOT markets. [e1] A Settlement Only Distribution Generator (SODG) is a distribution-connected generator rated one MW or less that chooses to register as an SODG, or greater than one and up to ten MW that can net export to ERCOT and does not register as a DGR. [e2]
- **How it works #1** (cites e1, e3, e5): The difference is market participation. A DGR is a Generation Resource. [e1] The Protocols' Settlement Only Generator (SOG) definition describes a generator settled for exported energy only that may not join the ancillary services market, RUC or SCED or make energy offers. [e3] SODGs must be registered with ERCOT under Planning Guide 6.8.2 and are modeled in ERCOT systems for reliability. [e5]
- **How it works #2** (cites e6, e4): For settlement, a QSE's payment or charge for SODG energy is based on a nodal energy price, with exceptions. [e6] For an SODG that price is the time-weighted price at the electrical bus associated with the mapped load in the Network Operations Model. [e4]
- **ERCOT context #1** (cites e7): The SODG definition is marked for deletion under NPRR995 upon system implementation, so that definition is expected to change; this is pending, not yet in effect. [e7]
- **Key facts #1** (cites e1) FLAG number-not-in-quote: 10 MW, 1 MW: - DGR thresholds: over 10 MW and not a PUCT self-generator, or over 1 MW by choice. [e1]
- **Key facts #2** (cites e2) FLAG number-not-in-quote: 1 MW, 10 MW: - SODG: 1 MW or less by choice, or over 1 MW and up to 10 MW that can net export and does not register as a DGR. [e2]
- **Key facts #3** (cites e3): - Settlement Only Generators (SOG) are settled for exported energy only, with no energy offers, SCED, RUC or ancillary services. [e3]
- **Key facts #4** (cites e4): - SODG energy paid at the nodal price at the bus mapped to the associated load. [e4]
- **Common confusion #1** (cites e1, e3, e2) FLAG number-not-in-quote: 10 MW: (Guidance) The names look alike but the market roles differ: a DGR is a Generation Resource, while the settlement-only (SOG) category cannot make energy offers. [e1][e3] The size line is not sharp: units between 1 and 10 MW can be either, depending on whether they register as a DGR. [e2]
- **Questions #2** (cites e2): If it can net export to ERCOT and does not register as a DGR. [e2]
- **Questions #4** (cites e4, e8): At the electrical bus associated with the mapped load, subject to listed exceptions. [e4][e8]
- **Link to resource-types** (cites e1, e2) FLAG number-not-in-quote: 1 MW: is-a Resource Types (Generation, Load, ESR, SOG): A DGR is a Generation Resource; an SODG is a distribution-connected generator that does not register as a DGR (or is 1 MW or less by choice). [e1][e2]
- **Link to resource-entity** (cites e2): related Resource Entity: Resource Entities register these units with ERCOT. [e2]
- **Link to tdsp** (cites e1, e2): related TDSP (Transmission & Distribution Service Provider): These units connect to the Distribution System rather than the ERCOT transmission system. [e1][e2]
- **Link to settlement-point** (cites e4, e8): related Settlement Point: SODG energy is paid on a nodal price at the bus mapped to its associated load, with listed exceptions including an opt-out. [e4][e8]
- **Link to load-zone** (cites e8): related Load Zone: Exceptions to nodal SODG pricing include an opt-out and sites where energy storage is more than 50% of nameplate; the quote does not say how those are priced. [e8]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) A DGR is distribution-connected generation that participates in the market as a Generation Resource; an SODG sits on the distribution system too but is just paid for what it exports.

