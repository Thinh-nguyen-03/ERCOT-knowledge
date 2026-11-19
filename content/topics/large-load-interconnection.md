---
id: large-load-interconnection
name: Large Load Interconnection & Batch Zero
aliases: [Batch Zero, Batch Zero Process, Large Load Interconnection, LLIS, PGRR145, NPRR1325, PGRR115, WLPUN, PCLR, SLLIA, 25.194]
kind: rule
domain: structure
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: sb6
    type: related
    note: 16 TAC §25.194 sets the standards for interconnecting a large load customer to the ERCOT system. [e9]
  - to: large-load-growth
    type: related
    note: ERCOT says each new large project could invalidate studies for projects farther along, causing costly restudies and delays. [e5]
  - to: long-term-load-forecast
    type: affects
    note: The PUCT approved ERCOT's request to adjust the long-term load forecast using the Option B methodology, which adjusts using Batch Zero Base Load per PGRR145. [e18][e26]
  - to: clr
    type: related
    note: Customers on the Provisional Controllable Load Resource (PCLR) pathway let ERCOT curtail their controllable load when transmission constraints arise in their area. [e8]
  - to: large-flexible-load
    type: contrasts-with
    note: Large flexible load is a PURA registration category for virtual currency mining facilities; Batch Zero evaluates Large Loads that meet Planning Guide Section 9.2 requirements. [e29][e2]
  - to: permian-transmission
    type: related
    note: ERCOT says the TSP studies supporting Batch Zero would be invalidated if the STEP 765 kV additions were delayed or denied. [e19]
  - to: resource-adequacy
    type: related
    note: The IMM argues a resource adequacy constraint should be applied in load interconnection. [e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Large Load"
    quote: "One or more Facilities at a single site with an aggregate peak Demand greater than or equal to 75 MW behind one or more common Points of Interconnection (POIs) or Service Delivery Points."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Batch Zero Process"
    quote: "A transitional interconnection process used to evaluate on a system-wide basis one or more Large Loads that meet the requirements set forth in Planning Guide Section 9.2, General Provisions."
  - id: e3
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.1(1), Introduction (July 11, 2026 version)"
    quote: "It documents the transition from a process that relied on individual Large Load interconnection studies to a new process referred to as the Batch Zero Process. The Batch Zero Process consists of a Batch Zero Interconnection Study and a Batch Zero Refinement Study."
  - id: e4
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Studied Load"
    quote: "A studied load may receive its full requested capacity, a partial allocation, or may need to wait until a subsequent batch, if the grid cannot accommodate it at the time."
  - id: e5
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Background"
    quote: "The addition of each new large project affected and could potentially invalidate studies for projects that were farther along in the connection process. The problem triggered costly restudies that delayed completion timelines."
  - id: e6
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), stakeholder process"
    quote: "As a result, ERCOT's Technical Advisory Committee, a body made up of industry stakeholders, unanimously recommended the new rules to ERCOT’s Board of Directors, which adopted them on June 2, 2026. The rules became final when the Public Utility Commission of Texas approved them on June 18, 2026."
  - id: e7
    source: ercot-pgrr145-puct-report
    locator: "PGRR145 PUCT Report, Effective Date row"
    quote: "Batch Zero and WLPUN: July 11, 2026"
  - id: e8
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), PCLR pathway"
    quote: "The customers agree to embed the controllable load into ERCOT’s dispatching system and let ERCOT curtail their power use when transmission constraints arise in their area. In exchange, the customers can access a portion of the grid ahead of a full transmission buildout."
  - id: e9
    source: puct-25-194
    locator: "16 TAC §25.194(a), Purpose and Scope; page footer 'effective 10/08/2026 (P-58481)'"
    quote: "Purpose and Scope. This section sets forth the standards and criteria for an electric utility, a municipally owned utility, and electric cooperative to interconnect a large load customer to the ERCOT system."
  - id: e10
    source: puct-25-194
    locator: "16 TAC §25.194, intermediate financial security"
    quote: "A large load customer must post financial security with the interconnecting DSP or the interconnecting TSP in the amount of $50,000 per MW of the requested peak demand for new interconnection requests or $50,000 per MW of the incremental increase in the peak demand for expanded interconnection requests."
  - id: e11
    source: puct-59142-good-cause-order
    locator: "Project 59142, Order Granting Good Cause Exceptions (filed Aug. 20, 2026), page 1"
    quote: "The Governor further directed that this verification and audit be completed before any additional data centers are approved to move forward. In response, ERCOT intends to temporarily pause its transitional Batch Zero interconnection study of loads that are 75 MW or more (Large Loads), including data centers and virtual currency mining facilities, until the verification and audit are complete."
  - id: e12
    source: ercot-senate-2026-07
    locator: "ERCOT Senate presentation (July 29, 2026), slide 10, Preliminary Overview of Batch Zero Eligibility (data as of July 28, 2026)"
    quote: "Approximately 205 GW of Large Load is eligible for inclusion in Batch Zero based on existing studies"
  - id: e13
    source: ercot-batch-zero-gen-assumptions
    locator: "Batch Zero Generation Assumption Discussion (RPG, Sept. 22, 2026), slide 2"
    quote: "As presented at the September Board meeting, the Batch Zero conditional base and studied load total ranges from around 100 GW in 2028 to around 192 GW in 2032"
  - id: e14
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Direction for Future Market Design"
    quote: "This suggests a resource adequacy constraint should be applied to the load interconnection process so that ERCOT does not approve an amount of new load that is physically infeasible."
  - id: e15
    source: ercot-large-load-qa
    locator: "Large Load Interconnection Process Q&A (Rev. 12.15.25), Overview"
    quote: "In March 2022, ERCOT issued Market Notice W-A032522-01, Interim Large Load Interconnection Process, informing Market Participants that it was implementing an interim interconnection process for large load customers requesting to interconnect within two years or less."
  - id: e16
    source: ercot-large-load-qa
    locator: "Large Load Interconnection Process Q&A (Rev. 12.15.25), Overview"
    quote: "On November 25, 2025, ERCOT issued Market Notice M-A052125-02, Partial Implementation Details of NPRR1234/PGRR115, Interconnection Requirements for Large Loads and Modeling Standards for Loads 25 MW or Greater, informing all Market Participants that the requirements in PGRR115 would be effective on December 15, 2025."
  - id: e17
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), What's next"
    quote: "Applications for the next batch study, Batch 1, will be accepted beginning in Summer 2027"
  - id: e18
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e19
    source: ercot-permian-geren-response
    locator: "ERCOT letter to Rep. Geren (Aug. 12, 2026), response 6"
    quote: "Therefore, all supporting studies provided by TSPs (more than 600 individual studies) would be invalidated if any of the STEP 765-kV additions were delayed or denied."
  - id: e20
    source: puct-25-194
    locator: "16 TAC §25.194, page footer"
    quote: "effective 10/08/2026 (P-58481)"
  - id: e21
    source: ercot-pgrr145-puct-report
    locator: "PGRR145 PUCT Report, Effective Date row"
    quote: "PCLR: Upon system implementation"
  - id: e22
    source: ercot-monthly-2026-06
    locator: "ERCOT Monthly, June 2026, ERCOT and the PUCT Clear Batch Zero Framework for Large Loads"
    quote: "The framework models roughly 450+ gigawatts (GW) of requested load and sorts each request into Base Load (mature, fully studied projects that receive their full allocation without the need for a restudy), Studied Load (projects ERCOT will study within Batch Zero to determine how much of that request can be reliably served by the grid), and Excluded Load (projects that have not advanced far enough in the process and will be deferred to a later batch)."
  - id: e23
    source: np-02
    locator: "Section 2.1, definition of Withdrawal-Limited Private Use Network (WLPUN)"
    quote: "A Private Use Network that contains both generation and at least one Large Load, with an established MW Withdrawal limit at a single Point of Interconnection (POI) determined by a system-wide interconnection study conducted by ERCOT."
  - id: e24
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), WLPUN pathway"
    quote: "The batch framework recognizes that contribution and allows their on-site generation to offset the amount of transmission capacity they require, making it easier to connect at higher load levels."
  - id: e25
    source: puct-59142-good-cause-order
    locator: "Project 59142, Order Granting Good Cause Exceptions (filed Aug. 20, 2026)"
    quote: "In accordance with 16 TAC § 25.3(b), the Commission grants ERCOT a good cause exception from the requirements of 16 TAC § 25.361(b)(16) that ERCOT (1) classify Large Loads by the August 7,2026 deadline in accordance with ERCOT Planning Guide §§ 9.3.1(2)(a); and (2) include in the August 1 and November 1, 2026 QSAs only those Large Loads that ERCOT has classified as base load under ERCOT Planning Guide § 9.2.1.1(1)."
  - id: e26
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "Option B Methodology. Adjustment using Batch Zero Base Load per Planning Guide Revision Request (PGRR) 145"
  - id: e27
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), pathways"
    quote: "Besides streamlining the study process, the Batch Zero framework introduces two new optional pathways for large customers who want to connect in ways designed to reduce pressure on the transmission grid. They are the Withdrawal-Limited Private Use Network (WLPUN) and the Provisional Controllable Load Resource (PCLR) pathways to connection."
  - id: e28
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), What is Batch Zero"
    quote: "The process is laid out in two new rules: Planning Guide Revision Request 145 (PGRR145) governs the application and study process; Nodal Protocol Revision Request 1325 (NPRR1325) covers broader market rules."
  - id: e29
    source: pura-39
    locator: "PURA §39.361(b), Large Flexible Load Registration"
    quote: "The commission by rule shall require a person operating a virtual currency mining facility who enters into an agreement for retail electric service in the ERCOT power region to register the facility receiving service as a large flexible load under this section if:(1)  the facility requires a total load of more than 75 megawatts; and(2)  the facility load is interruptible."
---

## Definition

A Large Load is one or more facilities at a single site with aggregate peak Demand of at least 75 MW behind common points of interconnection. [e1] The Batch Zero Process is a transitional interconnection process that evaluates qualifying Large Loads together, on a system-wide basis, rather than one at a time. [e2][e3]

## How it works

Planning Guide Section 9 records the move from individual Large Load interconnection studies to the Batch Zero Process. Batch Zero has two parts: a Batch Zero Interconnection Study and a Batch Zero Refinement Study. [e3] ERCOT made the change because each new large project could invalidate studies for projects further along in the queue, which caused costly restudies and delays. [e5]

Each request is sorted into base load, studied load or excluded load. Base load is a mature project that gets its full allocation without a restudy. Excluded load is deferred to a later batch. [e22] A studied load may get its full request, part of it, or be told to wait for a later batch if the grid cannot take it yet. [e4] There are two optional pathways. [e27] The first is the Withdrawal-Limited Private Use Network (WLPUN): a private network with both generation and a Large Load, whose withdrawal limit at its point of interconnection is set by ERCOT's system-wide study. [e23] The second is the Provisional Controllable Load Resource (PCLR). A PCLR site lets ERCOT curtail it when local transmission constraints bind, and in return it gets some grid access before the full transmission build-out. [e8]

The PUCT's interconnection standards in 16 TAC §25.194 set the rules for utilities connecting a large load customer in ERCOT. [e9] One of those rules is $50,000 per MW of financial security, posted with the utility, for a new request or for an expansion's added MW. [e10]

## ERCOT context

Batch Zero was preceded by an interim process started in March 2022 [e15] and by the PGRR115 requirements, which ERCOT said would be effective on December 15, 2025. [e16] The Batch Zero rules (PGRR145 and NPRR1325) [e28] were adopted by the ERCOT Board on June 2, 2026 and approved by the PUCT on June 18, 2026. [e6] Batch Zero and the WLPUN pathway took effect on July 11, 2026. [e7] In August 2026 ERCOT said it intends to temporarily pause the Batch Zero study until a verification and audit of data centers, directed by the Governor, was complete. [e11]

The sizes involved are very large and depend on the date. As of July 28, 2026, ERCOT's preliminary overview put about 205 GW of Large Load as eligible for Batch Zero based on existing studies. [e12] By September 2026, ERCOT said the conditional base and studied load totalled about 100 GW in 2028, rising to about 192 GW in 2032. [e13] The IMM's 2025 report argues that a resource adequacy constraint should be applied in load interconnection, so that ERCOT does not approve more new load than is physically feasible. [e14]

## Key facts

- Threshold: 75 MW aggregate peak Demand at a single site. [e1]
- Three classifications: base load, studied load, excluded load. A studied load may get full, partial or no allocation in Batch Zero. [e22][e4]
- Decided: ERCOT Board adoption on June 2, 2026; PUCT approval on June 18, 2026. [e6]
- Batch Zero and WLPUN effective July 11, 2026. The PCLR pathway takes effect "upon system implementation", so it is still pending. [e7][e21]
- §25.194 sets security of $50,000 per MW of requested peak demand. [e10]
- Pending: ERCOT said in August 2026 that it intends to pause the Batch Zero study until a verification and audit is complete. [e11]
- Batch 1 applications are planned to open in summer 2027 (as stated June 18, 2026). [e17]

## Timeline

- March 2022: ERCOT starts an interim large load interconnection process for loads asking to connect within two years. [e15]
- December 15, 2025: the PGRR115 requirements take effect (announced November 25, 2025). [e16]
- June 2, 2026: the ERCOT Board adopts the Batch Zero rules, after TAC recommended them unanimously. [e6]
- June 18, 2026: the PUCT approves the rules, making them final. [e6]
- July 11, 2026: Batch Zero and WLPUN take effect. [e7]
- July 28, 2026 (data date): about 205 GW is shown as eligible for Batch Zero based on existing studies. [e12]
- August 2026: ERCOT plans to pause the Batch Zero study until the Governor-directed verification and audit is done. The PUCT grants good cause exceptions, including from the August 7, 2026 deadline to classify Large Loads. [e25]
- September 2026: the conditional base and studied load is about 100 GW in 2028 and about 192 GW in 2032. [e13]
- October 8, 2026: §25.194 is in effect (the rule pages carry "effective 10/08/2026"). [e20]
- Summer 2027 (planned as of June 2026): Batch 1 applications open. [e17]

## Say it like this

(Guidance) ERCOT no longer studies big data centers one at a time. It studies every qualifying request together in "Batch Zero" and gives each project a MW allocation the grid can support. The rules were final in June 2026, but in August 2026 ERCOT said it intends to pause the study for an audit, so allocations and the transmission plan that follows are still pending. [e6][e11]

## Common confusion

(Guidance) Queue size, the Batch Zero eligible amount and the Batch Zero allocated amount are three different numbers. The queue is everything requested. About 205 GW was eligible as of July 2026 [e12], and the conditional base plus studied load was about 100 to 192 GW over 2028 to 2032 as of September 2026. [e13] Also, a PCLR is not the same as an ordinary CLR. It is a pathway for getting interconnected, and it takes effect only after system implementation. [e8][e21]

## Questions

### Why did ERCOT move to a batch study?

Studying projects one at a time meant every new project could invalidate earlier studies, which triggered restudies and delays. [e5] A batch study looks at all eligible loads together and allocates capacity the grid can support. [e2][e4]

### What is the status of Batch Zero as of late 2026?

The rules were approved by the PUCT on June 18, 2026 and took effect on July 11, 2026. [e6][e7] In August 2026 ERCOT said it would pause the study for a verification and audit, and the PUCT granted a good cause exception from the August 7, 2026 deadline to classify Large Loads. [e11][e25]

### How can a data center connect faster than the queue allows?

It can use one of two optional pathways. [e27] A WLPUN lets on-site generation offset the transmission capacity the site needs. A PCLR lets ERCOT curtail the site during local constraints in exchange for earlier access. [e24][e8] The PCLR pathway is not yet in effect. [e21]

## Open items

- The date the Batch Zero pause ends and the audit results: not in the saved sources (latest is the order filed August 20, 2026).
- The adoption date of §25.194 is not stated in the saved rule text. Only the page footer "effective 10/08/2026" is there. The April 2026 ERCOT update describes the proposal published March 12, 2026.
- Deeper pass: the seven base-load eligibility paths (Planning Guide 9.2.1.1), the reclassification dispute window, the SLLIA terms, refund and forfeiture rules in §25.194, and WLPUN withdrawal limits.
- Deeper pass: the NPRR1325 Protocol changes (PCLR registration in Section 16.5.5, adjusted bid caps, SCED changes).
- Explainer timing (June 18, 2026) says a commitment deadline in Q2 2027, allocations in spring 2027 and a final transmission plan in fall 2027. These dates came before the August pause and may have moved.
