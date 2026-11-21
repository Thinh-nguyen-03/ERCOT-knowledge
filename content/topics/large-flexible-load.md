---
id: large-flexible-load
name: Large Flexible Load (LFL)
aliases: [LFL, Large Flexible Load, large flexible load, Large Load, Large Computational Load]
kind: entity
domain: structure
level: 2
lenses: [analyst, trading, portfolio, structuring]
depth: deep
as_of: 2026-11-21
links:
  - to: sb6
    type: related
    note: See the sb6 topic for the SB 6 large-load provisions.
  - to: large-load-growth
    type: related
    note: Large flexible load is one component of ERCOT's load forecast alongside large loads. [e6]
  - to: large-load-interconnection
    type: related
    note: The Protocols define a Large Load and a Large Computational Load. [e4][e5]
  - to: texas-legislature
    type: related
    note: Large flexible load registration is a PURA requirement added by SB 1929 in 2023. [e9]
  - to: ers
    type: related
    note: Crypto-mining operations accounted for more than half of ERS capacity at the end of 2025. [e8]
  - to: puct
    type: related
    note: PURA directs the PUCT to write the registration rules and criteria. [e1][e3]
  - to: clr
    type: related
    note: Many crypto-mining LFLs have registered as CLRs, though many deregistered in 2025; a Large Load can also be registered as a Provisional CLR. [e15][e38][e37]
  - to: four-cp
    type: related
    note: The IMM says LFLs use 4CP response and, in its view, are well positioned to game the 4CP method. [e14][e21]
  - to: long-term-load-forecast
    type: related
    note: LFLs are a named component of ERCOT's load forecast. [e6][e27]
  - to: cdr-report
    type: related
    note: The CDR's Total Load includes a Large Flexible Loads forecast component. [e29]
evidence:
  - id: e1
    source: pura-39
    locator: "PURA §39.361(b), Large Flexible Load Registration"
    quote: "The commission by rule shall require a person operating a virtual currency mining facility who enters into an agreement for retail electric service in the ERCOT power region to register the facility receiving service as a large flexible load under this section if:(1)  the facility requires a total load of more than 75 megawatts; and(2)  the facility load is interruptible."
  - id: e2
    source: pura-39
    locator: "PURA §39.361(c), Large Flexible Load Registration"
    quote: "The rules must require a person described by Subsection (b) to:(1)  register the large flexible load with the commission not later than one business day after the date the agreement begins; and(2)  provide the commission with:(A)  the location of the facility; and(B)  the anticipated demand from the facility for the five-year period beginning on the date of the registration."
  - id: e3
    source: pura-39
    locator: "PURA §39.361(d)(1)"
    quote: "adopt criteria for determining whether a load is interruptible for the purposes of this section based on whether it is possible for the facility operator to choose to interrupt the load"
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Large Load"
    quote: "One or more Facilities at a single site with an aggregate peak Demand greater than or equal to 75 MW behind one or more common Points of Interconnection (POIs) or Service Delivery Points."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Large Computational Load (LCL)"
    quote: "A Large Load in which 50% or greater of the Demand at the site consists of power electronic based load, specifically computational load, such as data centers and cryptocurrency mining facilities."
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, Long-Term Load Forecast"
    quote: >-
      The forecast includes five major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, and large loads.
  - id: e7
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary"
    quote: "Aggregate demand for crypto-currency mining was approximately 4,600 MW in 2025."
  - id: e8
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary"
    quote: "By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity."
  - id: e9
    source: pura-39
    locator: "PURA §39.361, history note"
    quote: "Added by Acts 2023, 88th Leg., R.S., Ch. 463 (S.B. 1929), Sec. 1, eff. September 1, 2023."
  - id: e10
    source: ercot-cdr-2025-12
    locator: "Glossary, Large Flexible Load (LFL)"
    quote: "A Large Load (as defined below) that can come online quickly and is very responsive to real time prices. An LFL is typically a crypto-currency mining site."
  - id: e11
    source: pura-39
    locator: "PURA §39.361(a)(2), definition of virtual currency mining facility"
    quote: "means a facility that uses electronic equipment to add virtual currency transactions to a distributed ledger."
  - id: e12
    source: pura-39
    locator: "PURA §39.361(d)(2) and (e)"
    quote: "establish a method to ensure compliance with this section.(e)  The commission may share with an independent organization certified under Section 39.151 registration information received under this section."
  - id: e13
    source: imm-som-2024
    locator: "Chapter on Demand and Supply in ERCOT, Large Flexible Loads, page 27"
    quote: "Large Flexible Loads (LFLs) are characterized by their significant size, typically ranging from tens to hundreds of MWs per interconnection, and their ability to adjust consumption based on market conditions."
  - id: e14
    source: imm-som-2024
    locator: "Large Flexible Loads, page 27"
    quote: "The two primary types of demand response used by LFLs are price response, which involves reducing consumption to avoid high energy prices, and Four Coincident Peak (4CP) response, which involves reducing consumption during system peak intervals to manage transmission cost exposure."
  - id: e15
    source: imm-som-2024
    locator: "Large Flexible Loads, page 27"
    quote: "The vast majority of LFLs in ERCOT are cryptocurrency mines."
  - id: e16
    source: imm-som-2024
    locator: "Large Flexible Loads, page 27"
    quote: "By spring 2023, more than 2,000 MW of LFL capacity had already been identified. By the end of 2024, that number had grown to over 3,600 MW of noncoincident demand and more than 3,200 MW of simultaneous demand, as shown in Figure 24."
  - id: e17
    source: imm-som-2024
    locator: "Large Flexible Loads, page 28 (end of 2024 characteristics)"
    quote: "Approximately 30% of LFLs are co-located with generation."
  - id: e18
    source: imm-som-2024
    locator: "Large Flexible Loads, page 28 (end of 2024 characteristics)"
    quote: "More than half of LFL capacity is located in the West load zone, followed by the North and South zones."
  - id: e19
    source: imm-som-2024
    locator: "Self-curtailment, page 33"
    quote: "The data indicate that LFLs reduce their consumption by as much as 75% when system lambda exceeds $1,000 per MWh."
  - id: e20
    source: imm-som-2024
    locator: "Self-curtailment, page 34"
    quote: "ERCOT estimates that about 2,500 MW of load was reduced during 4CP intervals in 2024, roughly 1,000 MW less than in 2023"
  - id: e21
    source: imm-som-2024
    locator: "Transmission cost allocation discussion (IMM view)"
    quote: "This misalignment is further exacerbated by the growth of LFLs, the majority of which are located in West Texas. These customers are well positioned to game the 4CP methodology by strategically curtailing their demand during intervals they anticipate could set a coincident peak."
  - id: e22
    source: imm-som-2025
    locator: "Self-curtailment, page 31 (IMM recommendation)"
    quote: "For price-based curtailment outside of SCED, economic dispatch does not capture sudden drops in load. As this type of curtailment has grown, ERCOT has needed additional reserves to maintain the real-time balance between supply and demand. To address this issue, ERCOT should encourage more flexible loads to register as CLRs so that their load can be curtailed directly through SCED."
  - id: e23
    source: imm-som-2025
    locator: "ERS discussion, Demand Response (IMM view)"
    quote: "First, cryptocurrency mines that were previously registered as CLRs have migrated to the ERS program and are no longer price-responsive in SCED. Second, because cryptocurrency mines are fundamentally price sensitive, allowing them to provide ERS essentially pays them to do what they would already do, i.e., curtail when system conditions are tight and energy prices are high."
  - id: e24
    source: imm-som-2025
    locator: "ERS discussion, Demand Response (IMM recommendation)"
    quote: "We recommend that ERCOT change ERS eligibility or performance criteria to shift cryptocurrency mines out of the program and incentivize them to register as CLRs."
  - id: e25
    source: imm-som-2025
    locator: "ERS discussion, Demand Response"
    quote: "when cryptocurrency mining already accounted for almost 56% of total ERS volume"
  - id: e26
    source: imm-som-2023
    locator: "Executive summary, Unregistered Flexible Loads (IMM 2023)"
    quote: "Unregistered flexible loads (e.g., data centers and crypto-currency mines) represent a significant concern, as these resources are increasingly interconnecting behind-the-meter and are often price-responsive outside of SCED. These loads should have incentives to register with ERCOT and participate in energy and ancillary services markets."
  - id: e27
    source: imm-som-2024
    locator: "Long-Term Load Forecast discussion"
    quote: "The forecast includes six major components: base economic load, large flexible loads (LFLs), electric vehicle (EV) load, rooftop photovoltaic (PV) generation, contracted large industrial loads, and officer letter loads."
  - id: e28
    source: imm-som-2025
    locator: "Long-Term Load Forecast discussion"
    quote: "Since the adoption of 16 TAC §25.370, large loads are now included in the LTLF and other ERCOT load forecast reports based on milestones these loads have reached in their development process, replacing the previous method of including both loads for which an interconnection agreement had been signed and loads for which an officer of the TDSP attested to the intention of the load energizing according to a provided schedule."
  - id: e29
    source: ercot-cdr-2025-12
    locator: "Reserve Margin table note"
    quote: "Total Load consists of the following forecast components: Base Economic, Electric Vehicle Forecast, Large Flexible Loads forecast, and ERCOT Adjustments to Transmission Service Provider (TSP) forecasts."
  - id: e30
    source: imm-som-2025
    locator: "Controllable Load Resources, page 29"
    quote: "This decrease is even more noteworthy because the maximum load from cryptocurrency operations increased by more than 900 MW from 2024 to 2025."
  - id: e31
    source: imm-som-2025
    locator: "Controllable Load Resources, page 29"
    quote: "Cryptocurrency mines are particularly sensitive to electricity prices, which comprise most of the marginal costs of mining cryptocurrency."
  - id: e32
    source: puct-25-194
    locator: "16 TAC Section 25.194(b)(1), Applicability"
    quote: >-
      This section applies to a large load customer that has not energized as of the effective date of this section and that seeks:
      (A) a new interconnection at a single site that is equal to or exceeds 75 megawatts (MW);
      (B) an expanded interconnection at a single site that equals or exceeds 75 MW for the first time; or
      (C) an expanded interconnection at a single site that exceeds 75 MW and is expanding by 75 MW or more; or
      (D) to co-locate with a generation resource.
  - id: e37
    source: np-02
    locator: "Section 2.1, definition of Provisional Controllable Load Resource (PCLR)"
    quote: "A Controllable Load Resource (CLR) that is required to maintain registration and qualification as a CLR until defined exit or de-registration criteria are met."
  - id: e38
    source: imm-som-2024
    locator: "Large Flexible Loads, page 28 (end of 2024 characteristics)"
    quote: "A substantial percentage of LFL capacity has been registered as Load Resources, though the exact percentage has varied as LFLs have changed ownership and resource status."
  - id: e33
    source: imm-som-2024
    locator: "Executive summary, load growth (IMM 2024)"
    quote: "existing cryptocurrency mining enterprises may convert to conventional data center operations if cryptocurrency prices decline or electricity prices rise. This shift would reduce the system’s demand-side flexibility and increase the need for generation to maintain reliability."
---

## Definition

Under PURA, a large flexible load is a facility operated by a virtual currency mining operator, with an agreement for retail electric service in ERCOT, that requires a total load of more than 75 megawatts and whose load is interruptible. The PUCT must by rule require such a facility to be registered as a large flexible load. [e1]

## How it works

The registration rules must require the operator to register the facility with the commission no later than one business day after the retail agreement begins, and to give the commission the facility's location and its anticipated demand for the five years from registration. [e2] The PUCT must adopt criteria for deciding whether a load is interruptible, based on whether the facility operator can choose to interrupt it, and establish a method to ensure compliance. [e3][e12] A "virtual currency mining facility" under the section means a facility that uses electronic equipment to add virtual currency transactions to a distributed ledger. [e11] The commission may share registration information with the ERCOT-certified independent organization. [e12] The statute was added in 2023 by SB 1929. [e9]

Separately, the ERCOT Protocols define a Large Load as one or more facilities at a single site with an aggregate peak Demand of at least 75 MW behind one or more common points of interconnection or service delivery points. [e4] A Large Computational Load is a Large Load where 50% or more of site Demand is power electronic based computational load, such as data centers and cryptocurrency mining facilities. [e5] PUCT's large load interconnection rule (16 TAC §25.194) applies to a large load customer not yet energized that seeks a new interconnection of at least 75 MW at a single site, an expansion that first reaches 75 MW or adds 75 MW or more, or to co-locate with a generation resource. [e32]

How LFLs behave. The IMM's 2024 report describes LFLs as typically tens to hundreds of MW per interconnection, able to adjust consumption based on market conditions, with two main kinds of demand response: price response and 4CP response. [e13][e14] The IMM says the vast majority of LFLs in ERCOT are cryptocurrency mines, and that crypto operations can rapidly adjust load and are very sensitive to the price of electricity. [e15] The IMM's 2025 report adds that electricity prices make up most of the marginal costs of mining cryptocurrency. [e31]

## ERCOT context

The IMM's 2025 report says aggregate crypto-currency mining demand was about 4,600 MW in 2025, and that by the end of 2025 such operations accounted for more than half of all ERS capacity. [e7][e8] Its 2024 report counted LFL capacity of more than 2,000 MW by spring 2023 and over 3,600 MW of non-coincident demand (more than 3,200 MW simultaneous) by the end of 2024. [e16] As of end-2024, the IMM reports approximately 30% of LFLs co-located with generation, more than half of capacity in the West load zone, and a substantial but varying percentage registered as Load Resources. [e17][e18][e38] The IMM's 2024 data show LFLs reducing consumption by as much as 75% when system lambda exceeds $1,000 per MWh. [e19] The IMM says that for 2024 ERCOT estimated about 2,500 MW of load reduction during 4CP intervals, roughly 1,000 MW less than in 2023. [e20]

Registered or not. The IMM's 2023 report called unregistered flexible loads, often behind the meter and price-responsive outside SCED, a significant concern and recommended incentives for them to register. [e26] In 2025 the IMM reports that although maximum crypto load grew by more than 900 MW from 2024 to 2025, many mines deregistered as CLRs and moved to ERS. [e30][e5] The IMM calls the ERS migration problematic, since ex-CLRs are no longer price-responsive in SCED and, in its view, ERS pays mines to do what they would do anyway; it recommends changing ERS eligibility or performance criteria. [e23][e24] The IMM also says price-based curtailment outside SCED is not captured by economic dispatch, so ERCOT has needed additional reserves, and it recommends encouraging flexible loads to register as CLRs. [e22] Crypto's share of ERS was almost 56% when ERCOT began reporting in summer 2025. [e25]

On 4CP, the IMM's 2024 report says the growth of LFLs, most located in West Texas, worsens the misalignment of the 4CP transmission cost method, and that these customers are well positioned to game it by curtailing when they anticipate a coincident peak. [e21] That is the IMM's characterization.

Forecasting. ERCOT's long-term load forecast treats large flexible loads as one of its major components: five in the IMM's 2025 description (base economic, LFLs, EV, rooftop PV, large loads), and six in the IMM's 2024 description (adding contracted large industrial loads and officer letter loads). [e6][e27] The IMM's 2025 report says that since 16 TAC §25.370 large loads are included in the forecast based on development milestones, replacing the earlier method that included loads with a signed interconnection agreement or an officer letter. [e28] ERCOT's December 2025 CDR includes a Large Flexible Loads forecast among the components of Total Load. [e29]

## Key facts

- PURA §39.361: virtual currency mining facility over 75 MW with interruptible load must register as an LFL. [e1]
- Registration is due within one business day after the retail agreement begins. [e2]
- The Protocols' Large Load threshold: aggregate peak Demand of at least 75 MW at a site. [e4]
- A Large Computational Load is a Large Load that is at least 50% computational power-electronic load. [e5]
- 2025: crypto-currency mining demand about 4,600 MW (IMM). [e7]
- End of 2024: over 3,600 MW non-coincident and more than 3,200 MW simultaneous LFL demand (IMM). [e16]
- LFLs reduce consumption by as much as 75% when system lambda exceeds $1,000 per MWh (IMM, 2022-2024 data). [e19]

## Say it like this

(Guidance) A large flexible load is a big, interruptible load, in practice a crypto-mining facility, that has to register with the PUCT. It sits beside the broader Large Load category the Protocols use for interconnection. The IMM's view is that these loads should be dispatchable CLRs rather than hidden price responders. [e22][e26]

## Common confusion

(Guidance) "Large Flexible Load" is a PURA registration category for virtual currency mining facilities above 75 MW with interruptible load. [e1] "Large Load" and "Large Computational Load" are the Protocol terms, with a 75 MW site threshold, and they are not limited to flexible or crypto loads. [e4][e5] The saved np-02 does not define "Large Flexible Load". ERCOT's December 2025 CDR glossary uses the term in a different, looser sense: a Large Load that can come online quickly and is very responsive to real time prices, typically a crypto-currency mining site. [e10] Also do not confuse registering with the PUCT as an LFL with registering with ERCOT as a Load Resource or CLR; the first is the PURA requirement, the second is the ERCOT market registration. [e1][e38]

## Questions

### What makes a load an LFL under PURA?

It is a virtual currency mining facility under a retail electric service agreement in ERCOT, requiring more than 75 MW, with interruptible load. [e1]

### How is a Large Computational Load different from a Large Load?

It is a Large Load where 50% or more of site Demand is power-electronic computational load such as data centers and crypto mining. [e4][e5]

### Why does the IMM's 2025 report matter for LFLs?

It reports about 4,600 MW of crypto-mining demand in 2025 and that crypto operations were more than half of ERS capacity by year end. [e7][e8]

### Why does the IMM want LFLs to register as CLRs instead of self-curtailing?

The IMM says price-based curtailment outside SCED is not captured by economic dispatch, so ERCOT has needed additional reserves; curtailment through SCED as a CLR would let ERCOT see it directly. [e22]

### What if crypto prices fall and an LFL converts to a data center?

The IMM's 2024 report says existing cryptocurrency mining enterprises may convert to conventional data center operations if cryptocurrency prices decline or electricity prices rise, which would reduce the system's demand-side flexibility and increase the need for generation. [e33]

### How does an LFL show up in ERCOT's forecasts?

As a named component of ERCOT's long-term load forecast and of Total Load in the CDR. [e6][e29]

## Open items

- PUCT rule text implementing §39.361 (to register LFLs with the commission) is not a saved source; the statute is quoted, not the rule.
- The IMM figures for LFL demand come from different measures (non-coincident, simultaneous, annual aggregate crypto demand) and years; they are not directly comparable.
- 16 TAC §25.205 (net metering arrangements with large loads) and §25.370 (large load forecasting) are referenced by the IMM but are not saved sources.
- SB 6 curtailment and demand-reduction mechanisms for large loads are covered in the sb6 topic, not here.
- Resolved 2026-11-21: PCLR registration (np-02 definition; np-16 16.5.5 is cited on the clr topic) and 2023-2025 IMM LFL material added.
