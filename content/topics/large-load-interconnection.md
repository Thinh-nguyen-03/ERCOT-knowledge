---
id: large-load-interconnection
name: Large Load Interconnection & Batch Zero
aliases: [Batch Zero, Batch Zero Process, Large Load Interconnection, LLIS, PGRR145, NPRR1325, PGRR115, WLPUN, PCLR, SLLIA, 25.194]
kind: rule
domain: structure
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
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
  - to: four-cp
    type: related
    note: The SLLIA must commit the customer to the large load minimum billing demand in 25.193, which the Project 58000 proposal (not adopted) would bill for a period of no less than 20 years. [e50][e67]
  - to: shift-factor
    type: used-in
    note: Under NPRR1325, SCED caps a PCLR's energy bid when its shift factor on a near-binding constraint is -2% or lower. [e53]
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
  - id: e30
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 3, Actions taken by ERCOT"
    quote: "August 3, 2026 – Issued a Market Notice pausing the Batch Zero study process and delaying final classification of all Large Loads."
  - id: e31
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 7, note"
    quote: "Final project inclusion / exclusion determination will be based on the results of the eligibility verification and audit and provided in December"
  - id: e32
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT Update filed Nov. 4, 2026 (Project 59142, item 78), Attachment A, Concluding the Verification Process"
    quote: "ERCOT must complete its review this month to file a report with the PUCT on December 10, 2026."
  - id: e33
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), Key Takeaways"
    quote: "204 projects (66.4 GW) met the qualifications to be conditionally included as base load;"
  - id: e34
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1), Eligibility Criteria for Inclusion of a Large Load as Base Load"
    quote: "A Large Load that meets one of the following requirements on or before July 10, 2026, will be modeled in the Batch Zero Process as base load according to paragraph (2) below and its Demand is not subject to further evaluation."
  - id: e35
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(a)-(c)"
    quote: "(a) A Large Load that achieved Initial Energization before March 25, 2022; (b) A Large Load that achieved Initial Energization between March 25, 2022, and July 10, 2026; (c) A Large Load that, on or before May 1, 2026, met the qualification requirements for inclusion in the quarterly stability assessment or was included in an interim voltage ride-through assessment;"
  - id: e36
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(d)"
    quote: "A Large Load included in the Permian Basin Reliability Plan Study completed by ERCOT in 2024 and approved by the PUCT in Project No. 55718,"
  - id: e37
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(e)(iii)"
    quote: "On or before July 24, 2026, the Interconnecting DSP or Interconnecting TSP has informed ERCOT that the ILLE has attested to the DSP or TSP that it has ordered all equipment with a lead time of at least 18 months and will take delivery sufficiently in advance of its requested Initial Energization date so the equipment can be installed by the ILLE’s requested Initial Energization date;"
  - id: e38
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(f)(iii)"
    quote: "On or before July 24, 2026, the Interconnecting DSP or Interconnecting TSP has informed ERCOT that the ILLE attested to the DSP or TSP that it has obtained all discretionary approvals required by the applicable municipality or governmental entity at the location where the ILLE is requesting interconnection."
  - id: e39
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(g)(i)"
    quote: "The Large Load is part of a proposed net metering arrangement for which an application was submitted to the PUCT pursuant to PURA, TEX. UTIL. CODE ANN § 39.169 on or before March 4, 2026;"
  - id: e40
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(e)(vi)(C)(4)"
    quote: "If the Large Load does not meet the qualifications of paragraphs (1), (2), or (3) above, then the Interconnecting DSP or Interconnecting TSP shall set the financial security requirement as $50,000 per MW peak Demand;"
  - id: e41
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.3.1(2)(a)(i), Batch Zero Process Overview and Timelines"
    quote: "If ERCOT’s classification determines that a Large Load submitted under Section 9.2.1.1 does not satisfy the base load eligibility criteria and will instead be classified under Section 9.2.1.2, the Interconnecting DSP or Interconnecting TSP, as applicable, shall notify the ILLE within two Business Days of receipt of ERCOT’s classification notice. If the ILLE believes the classification is based on incomplete or inaccurate information, the ILLE must notify ERCOT through its Interconnecting DSP or Interconnecting TSP no later than three Business Days after receiving notification. Upon receipt of such notice, ERCOT, the ILLE, and the Interconnecting DSP or Interconnecting TSP shall attempt to resolve the dispute within three Business Days."
  - id: e42
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.3.1(2)(a)(ii)-(iii)"
    quote: "The ILLE shall have seven Business Days from the date of notification to post the financial security required by paragraph (1)(c) of Section 9.2.1.2. The Interconnecting DSP or Interconnecting TSP, as applicable, must inform ERCOT within two Business Days of the ILLE posting the required financial security. (iii) Failure to post the required financial security within the period specified in paragraph (2)(a)(ii) shall result in the Large Load being excluded from the Batch Zero Interconnection Study."
  - id: e43
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.3.1(2)(b) and (d)"
    quote: "ERCOT shall provide the Batch Zero Interconnection Study report to all Interconnecting DSPs and Interconnecting TSPs on or before April 9, 2027."
  - id: e44
    source: puct-25-194
    locator: "16 TAC §25.194(d), intermediate agreement financial commitments, Study fee"
    quote: "A large load customer must pay a study fee of $100,000 to the interconnecting DSP or the interconnecting TSP for transmission studies performed by the interconnecting DSP, the interconnecting TSP, and ERCOT, as applicable."
  - id: e45
    source: puct-25-194
    locator: "16 TAC §25.194(d), return of intermediate financial security, Partial return"
    quote: "the interconnecting DSP or interconnecting TSP must subtract 20% of the financial security associated with the transmission capacity allocated by ERCOT to a large load customer that is included in an interconnection study, is allocated some portion of its requested peak demand, and"
  - id: e46
    source: puct-25-194
    locator: "16 TAC §25.194(d), return of intermediate financial security, Forfeiture"
    quote: "Forfeiture. A large load customer that does not withdraw its interconnection request before the deadline to execute a SLLIA and does not execute a SLLIA before the deadline set forth in subsection (f) of this section is deemed to have forfeited any financial security that the large load customer posted under an intermediate agreement."
  - id: e47
    source: puct-25-194
    locator: "16 TAC §25.194(f), SLLIA"
    quote: "Not later than 60 days after ERCOT issues a study report that allocates transmission capacity, the large load customer must execute and fund a SLLIA with the interconnecting DSP and, if different from the interconnecting DSP, the interconnecting TSP."
  - id: e48
    source: puct-25-194
    locator: "16 TAC §25.194(f), SLLIA financial security (p. 25.194-10)"
    quote: "A large load customer must post financial security with the interconnecting DSP or the interconnecting TSP in an amount that is the greater of: (I) $50,000 per MW of the contracted peak demand; or (II) the costs allocated to the large load customer for system upgrades as a result of a batch zero interconnection study or an interconnection study."
  - id: e49
    source: puct-25-194
    locator: "16 TAC §25.194(f), Return and forfeiture of financial security (C)"
    quote: "The interconnecting DSP or the interconnecting TSP must return 20% of the remaining balance of financial security when the large load customer energizes and the remainder ratably in 20% increments as the large load customer meets the milestones identified in the customer’s SLLIA for meeting its obligation to pay the large load minimum billing demand described in §25.193 of this title for the set period of time described in §25.193."
  - id: e50
    source: puct-25-194
    locator: "16 TAC §25.194(f), Large load minimum billing demand (D)"
    quote: "The SLLIA must include a term of acknowledgment and agreement that the large load customer will pay the large load minimum billing demand described in §25.193 of this title for the set period of time described in §25.193."
  - id: e51
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.3.2.2(1)(b)-(c), Treatment of WLPUNs in the Batch Zero Interconnection Study"
    quote: "(b) ERCOT shall determine the MW Withdrawal limit for each year by turning off the WLPUN generation and determining the peak Demand that may be reliably served. (c) The MW Withdrawal limit shall not decrease from one year to the next within the Batch Zero Interconnection Study scope."
  - id: e52
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.3.2.2(1)(d)"
    quote: "(i) The requested peak Demand; (ii) The established MW Withdrawal limit plus the aggregate real power rating of the WLPUN generation; and (iii) 90% of the load level that causes instability or cascading with all of the WLPUN generation off and with no contingency."
  - id: e53
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, new Section 4.4.9.4.4(1)(c), Adjusted Bid Caps"
    quote: "Where a PCLR has a Shift Factor equal to or less than -2% on the list identified in paragraph (c) above, the constraint contribution shall be calculated by multiplying the maximum Shadow Price of that constraint by the Shift Factor of the PCLR for each constraint identified in paragraph (c) above."
  - id: e54
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, new Section 6.5.7.11(1), PCLR Ramp Rate Requirements"
    quote: "Each Provisional Controllable Load Resource (PCLR) shall provide a down ramp rate that is limited to at least 10% per minute and no greater than 20% per minute of the difference between its Maximum Power Consumption (MPC) and its Low Power Consumption (LPC) at all times when consuming energy."
  - id: e55
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, new Section 23 Form W"
    quote: "A PCLR is a Controllable Load Resource (CLR) that may be approved to energize above the maximum Low Power Consumption determined in the Batch Zero Interconnection Study so long as it remains registered and qualified as a CLR."
  - id: e56
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, new Section 16.5.5(2), Provisional Controllable Load Resources"
    quote: "A Resource Entity that desires to de-register a Large Load as a PCLR prior to its end date shall provide ERCOT no less than 120 days’ written notice. Upon de-registration, the Large Load shall be limited to the maximum Low Power Consumption (LPC) amounts identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan until new interconnection studies have been performed according to applicable ERCOT Protocols and Guides."
  - id: e57
    source: ercot-nprr1325-puct-report
    locator: "NPRR1325 PUCT Report, new Section 23 Form W"
    quote: "PCLRs are not eligible to qualify to provide Ancillary Services to the ERCOT System."
  - id: e58
    source: ercot-pgrr145-puct-report
    locator: "PGRR145 PUCT Report, Estimated Impacts (PCLR)"
    quote: "Project Duration: 8 to 12 months"
  - id: e59
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 4"
    quote: "ERCOT provided provisional Batch Zero Large Load project classification (base, studied, excluded) to the Interconnecting TSPs on September 3, 2026."
  - id: e60
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 4"
    quote: "ERCOT has paused the energization of new Large Load data centers and crypto mining facilities until the completion of the verification and audit and community impact review."
  - id: e61
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT letter to PUCT, Project 59142 item 78 (filed 2026-11-04), p. 1"
    quote: "This additional exception concerns Large Loads that were submitted as energized loads under Planning Guide Section 9.2.1.1(1)(b), but that ERCOT determined had not energized by July 10, 2026."
  - id: e62
    source: ercot-senate-2026-07
    locator: "ERCOT Senate presentation (July 29, 2026), slide 10 (data as of July 28, 2026)"
    quote: "Not Included In Batch Zero – No Dynamic Model (47): These loads had one or more studies that made them eligible for inclusion but were removed when no dynamic model was submitted to ERCOT by July 10."
  - id: e64
    source: puct-25-194
    locator: "16 TAC §25.194(d), return of intermediate financial security, Partial return (continued, p. 25.194-7)"
    quote: "withdraws its interconnection request before the deadline to execute a SLLIA that is set forth in subsection (f) of this section."
  - id: e65
    source: ercot-planning-guide-09
    locator: "Planning Guide Section 9.2.1.1(1)(e)(i)"
    quote: "ERCOT has determined the Large Load has a complete and valid set of interconnection studies as described in Section 9.2.1.4, Evaluation of Existing Interconnection Studies for Large Loads;"
  - id: e63
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT update to PUCT, Project 59142 item 78, Attachment A, Emerging, Recurring Issues"
    quote: "Lack of documentation to establish affiliate relationships"
  - id: e66
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 4"
    quote: "ERCOT is still determining the impact to the Batch Zero Study timeline"
  - id: e67
    source: puct-58000-pfp
    locator: "PUCT Project 58000 Proposal for Publication, proposed large load minimum billing demand, paragraph (3) (p. 31)"
    quote: "A large load customer’s billing under this section must commence at the level of available service at the time it is available, irrespective of whether the large load customer has energized or is fully using available capacity, and for a period of no less than 20 years."
---

## Definition

A Large Load is one or more facilities at a single site with aggregate peak Demand of at least 75 MW behind common points of interconnection. [e1] The Batch Zero Process is a transitional interconnection process that evaluates qualifying Large Loads together, on a system-wide basis, rather than one at a time. [e2][e3]

## How it works

Planning Guide Section 9 records the move from individual Large Load interconnection studies to the Batch Zero Process. Batch Zero has two parts: a Batch Zero Interconnection Study and a Batch Zero Refinement Study. [e3] ERCOT made the change because each new large project could invalidate studies for projects further along in the queue, which caused costly restudies and delays. [e5]

Each request is sorted into base load, studied load or excluded load. Base load is a mature project that gets its full allocation without a restudy. Excluded load is deferred to a later batch. [e22] A studied load may get its full request, part of it, or be told to wait for a later batch if the grid cannot take it yet. [e4] There are two optional pathways. [e27] The first is the Withdrawal-Limited Private Use Network (WLPUN): a private network with both generation and a Large Load, whose withdrawal limit at its point of interconnection is set by ERCOT's system-wide study. [e23] The second is the Provisional Controllable Load Resource (PCLR). A PCLR site lets ERCOT curtail it when local transmission constraints bind, and in return it gets some grid access before the full transmission build-out. [e8]

Base load is defined by seven eligibility paths, each to be met on or before July 10, 2026; a base load is modeled without further evaluation of its Demand. [e34] Three paths are about status: energized before March 25, 2022, energized between March 25, 2022 and July 10, 2026, or qualified for the quarterly stability assessment (or an interim voltage ride-through assessment) by May 1, 2026. [e35] A fourth covers loads in the 2024 Permian Basin Reliability Plan study. [e36] Two more are for not-yet-energized loads that ERCOT finds have a complete and valid set of interconnection studies plus a list of attested commitments, such as having ordered all equipment with a lead time of 18 months or more, or holding all discretionary local approvals. [e65][e37][e38] The last covers net metering arrangements applied for at the PUCT by March 4, 2026. [e39] For the not-yet-energized path in 9.2.1.1(1)(e), the system-upgrade security is $50,000 per MW of peak Demand when none of the rule's three other methods (RPG-project cost share, legacy LLIS cost, or a TSP study showing no upgrades, which sets $0) applies. [e40]

If ERCOT reclassifies a submitted base load as studied load, the TSP or DSP has two Business Days to tell the customer, the customer has three Business Days to dispute, and the parties have three Business Days to resolve it. [e41] If the reclassification stands, the customer has seven Business Days to post the studied-load security or is excluded. [e42] The rule set the Batch Zero study report date at April 9, 2027. [e43]

A WLPUN's MW Withdrawal limit is found by turning its generation off and finding the peak Demand the grid can reliably serve; the limit cannot fall from one year to the next. [e51] Its allocated peak Demand each year is the lowest of its request, the withdrawal limit plus its generation rating, and 90% of the load level that causes instability or cascading with its generation off. [e52] The PCLR provisions take effect only upon system implementation, so the following PCLR rules are not yet in force. [e21] A PCLR is a CLR allowed to energize above its maximum Low Power Consumption while it stays registered and qualified. [e55] It may not provide Ancillary Services, must ramp down at 10% to 20% per minute of its MPC-to-LPC range, and needs 120 days' notice to de-register, after which it falls back to its maximum LPC. [e57][e54][e56] In SCED, NPRR1325 caps a PCLR's energy bid when it has a shift factor of -2% or lower on a constraint that recently bound near its maximum shadow price. [e53]

The PUCT's interconnection standards in 16 TAC §25.194 set the rules for utilities connecting a large load customer in ERCOT. [e9] Before a request is studied, the customer signs an intermediate agreement, pays a $100,000 study fee, and posts $50,000 per MW of requested peak demand (or of an expansion's added MW). [e44][e10] Within 60 days of a study report that allocates capacity, it must execute and fund a standard large load interconnection agreement (SLLIA). [e47] SLLIA security is the greater of $50,000 per MW of contracted peak demand or the system-upgrade costs allocated to it. [e48] If it receives a partial allocation and withdraws before the SLLIA deadline, the utility keeps 20% of the security tied to the allocated capacity; if it neither withdraws nor signs by the deadline, it forfeits the intermediate security. [e45][e64][e46] After energization, security comes back 20% at a time as the customer meets SLLIA milestones for paying the large load minimum billing demand. [e49][e50]

## ERCOT context

Batch Zero was preceded by an interim process started in March 2022 [e15] and by the PGRR115 requirements, which ERCOT said would be effective on December 15, 2025. [e16] The Batch Zero rules (PGRR145 and NPRR1325) [e28] were adopted by the ERCOT Board on June 2, 2026 and approved by the PUCT on June 18, 2026. [e6] Batch Zero and the WLPUN pathway took effect on July 11, 2026. [e7] The PUCT's August 20, 2026 order says ERCOT intends to temporarily pause the Batch Zero study until a verification and audit of data centers, directed by the Governor, is complete. [e11] ERCOT's September 2026 Board update lists, among its actions, issuing a Market Notice on August 3, 2026 that paused the Batch Zero study process and delayed final classification of all Large Loads. [e30] The same update says the final decision on which projects are included or excluded will follow the eligibility verification and audit and be provided in December. [e31] ERCOT gave provisional base, studied and excluded classifications to TSPs on September 3, 2026, and paused energization of new Large Load data centers and crypto facilities until the audit and community impact review are complete. [e59][e60] In its November 4, 2026 filing ERCOT said it must complete its review that month to file a report with the PUCT on December 10, 2026. [e32] Common problems it found include missing documentation of affiliate relationships. [e63] It also said it would seek a good cause exception for loads submitted as energized under path (b) that had not energized by July 10, 2026. [e61]

The sizes involved are very large and depend on the date. As of July 28, 2026, ERCOT's preliminary overview put about 205 GW of Large Load as eligible for Batch Zero based on existing studies. [e12] By September 2026, ERCOT said the conditional base and studied load totalled about 100 GW in 2028, rising to about 192 GW in 2032. [e13] The September Board update counts 204 projects (66.4 GW) as conditionally included as base load. [e33] In the July 28 preliminary data, 47 projects with otherwise qualifying studies were removed for not submitting a dynamic model by July 10. [e62] The IMM's 2025 report argues that a resource adequacy constraint should be applied in load interconnection, so that ERCOT does not approve more new load than is physically feasible. [e14]

## Key facts

- Threshold: 75 MW aggregate peak Demand at a single site. [e1]
- Three classifications: base load, studied load, excluded load. A studied load may get full, partial or no allocation in Batch Zero. [e22][e4]
- Decided: ERCOT Board adoption on June 2, 2026; PUCT approval on June 18, 2026. [e6]
- Batch Zero and WLPUN effective July 11, 2026. The PCLR pathway takes effect "upon system implementation" (estimated 8 to 12 months of project work), so it is still pending. [e7][e21][e58]
- Base load: seven eligibility paths, each met by July 10, 2026. [e34]
- §25.194: $100,000 study fee; SLLIA within 60 days of an allocation; SLLIA security the greater of $50,000 per MW or allocated upgrade costs; 20% retained on withdrawal after a partial allocation (before the SLLIA deadline). [e44][e47][e48][e45][e64]
- §25.194 sets intermediate financial security of $50,000 per MW of requested peak demand (or of the added MW for an expansion). [e10]
- Paused: the PUCT's August 2026 order says ERCOT intends to pause the Batch Zero study until a verification and audit is complete [e11]; ERCOT's September 2026 Board update says a Market Notice of August 3, 2026 paused the study process. [e30] As of ERCOT's November 4, 2026 filing, its report to the PUCT is due December 10, 2026. [e32]
- Batch 1 applications are planned to open in summer 2027 (as stated June 18, 2026). [e17]

## Timeline

- March 2022: ERCOT starts an interim large load interconnection process for loads asking to connect within two years. [e15]
- December 15, 2025: the PGRR115 requirements take effect (announced November 25, 2025). [e16]
- June 2, 2026: the ERCOT Board adopts the Batch Zero rules, after TAC recommended them unanimously. [e6]
- June 18, 2026: the PUCT approves the rules, making them final. [e6]
- July 11, 2026: Batch Zero and WLPUN take effect. [e7]
- July 10, 2026: deadline for base-load eligibility. [e34] July 24, 2026: TSP/DSP submission deadline. [e37]
- July 28, 2026 (data date): about 205 GW is shown as eligible for Batch Zero based on existing studies. [e12]
- August 3, 2026: per ERCOT's September Board update, a Market Notice pauses the Batch Zero study process and delays final classification of all Large Loads. [e30]
- August 2026: ERCOT plans to pause the Batch Zero study until the Governor-directed verification and audit is done. The PUCT grants good cause exceptions, including from the August 7, 2026 deadline to classify Large Loads. [e11][e25]
- September 3, 2026: provisional classifications sent to TSPs (the rule had required August 7; the PUCT granted an exception). [e59][e25]
- September 2026: the conditional base and studied load is about 100 GW in 2028 and about 192 GW in 2032. [e13]
- October 8, 2026: §25.194 is in effect (the rule pages carry "effective 10/08/2026"). [e20]
- November 2026: ERCOT says it must complete its verification review this month to file a report with the PUCT on December 10, 2026. [e32]
- April 9, 2027: Batch Zero study report date in PGRR145; in September 2026 ERCOT said it was still determining the impact to the study timeline. [e43][e66]
- Summer 2027 (planned as of June 2026): Batch 1 applications open. [e17]

## Say it like this

(Guidance) ERCOT no longer studies big data centers one at a time. It studies every qualifying request together in "Batch Zero" and gives each project a MW allocation the grid can support. The rules were final in June 2026, but the study was paused in August 2026 for a verification and audit, so allocations and the transmission plan that follows are still pending. [e6][e11][e30]

## Common confusion

(Guidance) Queue size, the Batch Zero eligible amount and the conditionally classified base plus studied amount are three different numbers, and none of them is a final allocation. The queue is everything requested. About 205 GW was eligible as of July 2026 [e12], and the conditional base plus studied load was about 100 to 192 GW over 2028 to 2032 as of September 2026. [e13] Also, a PCLR is not the same as an ordinary CLR. It is a pathway for getting interconnected, and it takes effect only after system implementation. [e8][e21]

## Questions

### Why did ERCOT move to a batch study?

Studying projects one at a time meant every new project could invalidate earlier studies, which triggered restudies and delays. [e5] A batch study looks at all eligible loads together and allocates capacity the grid can support. [e2][e4]

### What is the status of Batch Zero as of late 2026?

The rules were approved by the PUCT on June 18, 2026 and took effect on July 11, 2026. [e6][e7] In August 2026 the study was paused for a verification and audit, and the PUCT granted a good cause exception from the August 7, 2026 deadline to classify Large Loads. [e11][e30][e25] As of November 2026, ERCOT's verification report to the PUCT is due December 10, 2026, and final inclusion decisions were expected in December. [e32][e31]

### How can a data center connect faster than the queue allows?

It can use one of two optional pathways. [e27] A WLPUN lets on-site generation offset the transmission capacity the site needs. A PCLR lets ERCOT curtail the site during local constraints in exchange for earlier access. [e24][e8] The PCLR pathway is not yet in effect. [e21]

### What happens if a data center gets only part of its request and walks away?

If it withdraws before the SLLIA deadline, §25.194 has the utility first collect any outstanding costs, then keep 20% of the security tied to the allocated capacity and return the rest. [e45][e64] If it neither withdraws nor signs a SLLIA within the deadline, it forfeits the intermediate security. [e46][e47]

### Why can't a WLPUN simply build enough generation to serve any load?

Its allocation is capped at the lowest of its request, its withdrawal limit plus generation rating, and 90% of the load level that causes instability with its generation off. [e52] So grid stability, not just on-site megawatts, limits it. [e51]

### What if ERCOT reclassifies your base load as studied load?

You get a short dispute window (notice within two Business Days, three to dispute, three to resolve), and if it stands you must post studied-load security within seven Business Days or be excluded. [e41][e42]

## Open items

- The date the Batch Zero pause ends and the audit results: not in the saved sources (latest is ERCOT's filing of November 4, 2026, which gives a December 10, 2026 report date). ERCOT's September 2026 Board update says the effect on the study timeline is still to be determined.
- The September 2026 Board update gives the conditional studied load as 127.9 GW (158 projects) in its Key Takeaways but 125.4 GW on its chart; the studied figure is therefore not stated in this topic.
- The adoption date of §25.194 is not stated in the saved rule text. Only the page footer "effective 10/08/2026" is there. The April 2026 ERCOT update describes the proposal published March 12, 2026.
- Resolved 2026-11-21: base-load paths, the dispute window, SLLIA terms, refund and forfeiture, WLPUN limits and the NPRR1325 PCLR rules are now covered.
- §25.194 refers to a large load minimum billing demand "described in §25.193", but the saved 25.193 is the current rule; the minimum billing demand terms exist only in the Project 58000 proposal (not adopted). How SLLIAs handle this until 25.193 is amended is not stated.
- ERCOT's April 2026 Senate slide described the March 2026 25.194 proposal as having a nonrefundable "interconnection fee ($50,000/MW)", and the Project 58000 proposal refers to "interconnection fees paid under §25.194"; the saved effective 25.194 text contains no interconnection fee, only study fee and financial security. Not reconciled.
- The good cause exceptions ERCOT planned to file for the December 17, 2026 open meeting and their outcome are not saved.
- Explainer timing (June 18, 2026) says a commitment deadline in Q2 2027, allocations in spring 2027 and a final transmission plan in fall 2027. These dates came before the August pause and may have moved.
