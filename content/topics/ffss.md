---
id: ffss
name: FFSS (Firm Fuel Supply Service)
aliases: [FFSS, Firm Fuel Supply Service, FFSSR, firm fuel]
kind: product
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: winter-storm-uri
    type: example-of
    note: The IMM says FFSS was implemented in 2022 in response to fuel supply disruptions during Winter Storm Uri. [e8]
  - to: ers
    type: related
    note: The IMM lists FFSS and ERS together among out-of-market products. [e16][e17]
  - to: ordc
    type: affects
    note: The IMM's 2024 report said FFSS deployment removed capacity from the online reserves used for the ORDC adder, which was discontinued with RTC. [e10][e15]
  - to: uplift
    type: related
    note: FFSS payments are an uplift item, and the IMM reports FFSS uplift for 2025. [e9]
  - to: rmr
    type: related
    note: RMR is another reliability contract product; see the RMR topic.
  - to: weatherization
    type: related
    note: SB 3 directs the PUC to ensure that winter resource capability qualifications for a service described by PURA 39.159(b) include fuel storage, dual fuel or fuel supply arrangements. [e11]
  - to: natural-gas-price
    type: related
    note: FFSS exists to maintain availability in a natural gas curtailment or other fuel supply disruption. [e1]
  - to: ruc
    type: related
    note: If ERCOT issues an FFSS Verbal Dispatch Instruction for an Operating Hour in which a RUC instruction was also issued, ERCOT treats the RUC instruction as cancelled for Settlement. [e38]
  - to: load-ratio-share
    type: related
    note: The PUCT rule has ERCOT charge each LSE for FFSS procurement costs by its load ratio share during the obligation period. [e51]
  - to: winter-storm-elliott
    type: related
    note: The IMM says FFSS was first deployed during Winter Storm Elliott in late December 2022. [e73]
  - to: puct
    type: related
    note: The PUCT rule for FFSS, 16 TAC 25.520, is shown in the saved copy as effective 2/25/2026. [e18]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Firm Fuel Supply Service (FFSS)"
    quote: "A service provided by certain Generation Resources in order to maintain Resource availability in the event of a natural gas curtailment or other fuel supply disruption."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of FFSS Obligation Period"
    quote: "The period from November 15 through March 15 for which a procured Resource is obligated to provide FFSS."
  - id: e3
    source: np-03
    locator: "Section 3.14.5, paragraph (3)"
    quote: "ERCOT must procure FFSS ahead of each FFSS Obligation Period to help maintain reliability during, or in preparation for, a natural gas curtailment or other fuel supply disruption. ERCOT may spend a maximum of $54 million in FFSS Procurement Costs during a single FFSS Obligation Period."
  - id: e4
    source: np-03
    locator: "Section 3.14.5, paragraph (4)"
    quote: "ERCOT must allocate a combined amount of at least 70% of the $54 million budget to procure Generation Resources under the on-site FFSS category and the resource-controlled FFSS category, unless insufficient offers were submitted for Generation Resources under those categories."
  - id: e5
    source: np-03
    locator: "Section 3.14.5, paragraph (6) variable table, FFSSDH"
    quote: "The deployment hours shall be set at 48 hours per deployment."
  - id: e6
    source: np-03
    locator: "Section 3.14.5, deployment paragraph (13)(a)"
    quote: "When ERCOT issues a Watch for winter weather, ERCOT will notify all Market Participants, including all QSEs representing FFSSRs, to begin preparation for potential FFSS deployment."
  - id: e7
    source: np-03
    locator: "Section 3.14.5, deployment paragraph (13)(b)"
    quote: "In anticipation of or in the event of a natural gas curtailment or other fuel supply disruption to an FFSSR, the QSE shall notify ERCOT as soon as practicable and may request approval to deploy FFSS to generate electricity. ERCOT shall evaluate system conditions and may approve the QSE’s request. The QSE shall not deploy the FFSS unless approved by ERCOT."
  - id: e8
    source: imm-som-2024
    locator: "Recommendation, Align FFSS Pricing and Deployment Practices with Market Operations"
    quote: "The Firm Fuel Supply Service (FFSS) was implemented in 2022 in response to widespread generation shortfalls caused by fuel supply disruptions during Winter Storm Uri."
  - id: e9
    source: imm-som-2025
    locator: "Executive summary, all-in price and uplift"
    quote: "Uplift associated with FFSS increased 36% from $33.8 million in 2024 to $45.9 million in 2025."
  - id: e10
    source: imm-som-2024
    locator: "Recommendation, Align FFSS Pricing and Deployment Practices with Market Operations"
    quote: "Second, when FFSSRs are deployed, ERCOT removes their capacity from the calculation of online reserves used to determine the ORDC price adder. This artificial reduction in reported reserves raises scarcity prices even when physical capacity remains available."
  - id: e11
    source: sb3-87r
    locator: "PURA Sec. 39.159(c)(2) as added by SB 3"
    quote: "winter resource capability qualifications for a service described by Subsection (b) include on-site fuel storage, dual fuel capability, or fuel supply arrangements to ensure winter performance for several days; and"
  - id: e15
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e16
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Firm Fuel Supply Service (FFSS). The FFSS program provides an out-of-market payment for qualifying assets to provide electricity and reserves during anticipated tight winter conditions."
  - id: e17
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Emergency Response Service (ERS). Provides out of market revenue to increase supply or reduce demand curing winter conditions"
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy / Market Operations chapter, section G, Firm Fuel Supply Service, item 1"
    quote: "In the 2024-2025 contract period, ERCOT procured 4,195 MW across 32 dualfuel resources and one natural gas resource. The offer cap was set at $12,240 per MW based on a Fuel Oil Index price of $17 per MMBtu, a heat rate of 15 MMBtu per MWh, and a 48-hour obligation period."
  - id: e13
    source: imm-som-2025
    locator: "Section G, Firm Fuel Supply Service, item 1 (deployments in 2025)"
    quote: "In 2025, ERCOT deployed FFSS over three consecutive days in February. During that time, 4 FFSS Resources (FFSSRs) were deployed for a maximum of 470 MW, as shown in Table 10."
  - id: e14
    source: imm-som-2024
    locator: "Recommendation, Align FFSS Pricing and Deployment Practices with Market Operations"
    quote: "FFSSRs can be deployed during declared winter weather watches; however, the specific criteria for deployment beyond this trigger remain unclear and are left to operator discretion. ERCOT deployed FFSSRs over five consecutive days in January 2024 during a winter weather watch due to concerns about potential fuel supply disruptions."
  - id: e18
    source: puct-25-520
    locator: "16 TAC 25.520(a), Purpose (copy shows effective 2/25/2026)"
    quote: "Purpose. The purpose of this section is to promote reliability through the procurement of FFSS for deployment during, or in preparation for, a natural gas curtailment or other fuel supply disruption during extreme cold weather conditions."
  - id: e19
    source: puct-25-520
    locator: "16 TAC 25.520(c)(1), On-site FFSS category"
    quote: "On-site FFSS category. An FFSS resource that provides on-site FFSS must successfully demonstrate dual fuel capability, have the ability to establish and burn an alternative on-site stored fuel, and have on-site fuel storage capability."
  - id: e20
    source: puct-25-520
    locator: "16 TAC 25.520(c)(2), Resource-controlled FFSS category"
    quote: "Resource-controlled FFSS category. An FFSS resource that provides resource-controlled FFSS must have an on-site natural gas or fuel oil storage capability or off-site natural gas storage where the resource or QSE owns and controls both the natural gas storage facility and the pipeline to deliver the required amount of reserved natural gas to the resource from the storage facility."
  - id: e21
    source: puct-25-520
    locator: "16 TAC 25.520(c)(3), Contractual off-site FFSS category"
    quote: "Contractual off-site FFSS category. An FFSS resource that provides contractual off-site FFSS must have a firm gas storage agreement with a storage provider for firm storage of the natural gas at the storage facility and have a firm transportation agreement with a natural gas pipeline that is a critical natural gas facility, as defined in §25.52 of this title (relating to Reliability and Continuity of Service) for firm transportation of the natural gas from the storage facility to the FFSS resource."
  - id: e22
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (1)(d)"
    quote: "A Generation Resource may participate as an FFSSR under only one of paragraphs (a), (b), or (c) above."
  - id: e23
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (5)"
    quote: "A QSE representing a Generation Resource that will be offered to provide FFSS as a primary Generation Resource or an alternate Generation Resource must annually demonstrate each offered Generation Resource’s capability to use reserved fuel sources identified in paragraphs (1)(a) through (1)(c) above and sustain its output for 60 minutes at the MW value equal to the QSE’s desired level of FFSS qualification for the Resource. The maximum MW of FFSS that can be offered for the designated Resource by the QSE must be limited to the average Real-Time net real power (in MW) telemetered for the Resource during the demonstration period."
  - id: e24
    source: np-03
    locator: "Section 3.14.5, paragraph (2)"
    quote: "ERCOT shall issue an RFP by August 1 of each year soliciting offers from QSEs for Generation Resources to provide FFSS. The RFP shall require offers to be submitted on or before September 1 of each year."
  - id: e25
    source: np-03
    locator: "Section 3.14.5, paragraph (9)(d)"
    quote: "ERCOT will issue FFSS awards by September 30 and will post the awards to the MIS Certified Area for each QSE that is awarded an FFSS obligation."
  - id: e26
    source: np-03
    locator: "Section 3.14.5, paragraph (9)(i)(iv)"
    quote: "An offer to provide FFSS is an offer to supply an awarded amount of capacity, maintain a sufficient amount of reserved fuel to meet at least one deployment at the awarded level for the duration requirement specified in the RFP, and to designate a specific number of emissions hours that will be reserved for the awarded FFSSR in meeting its obligation to perform for at least three deployments during the FFSS Obligation Period, while operating at awarded MW level."
  - id: e27
    source: np-03
    locator: "Section 3.14.5, paragraph (6), equation"
    quote: "FFSSOCAP _(c, p) = FFSSDH * FFSSPFP _(c, p) * FFSSHR _(c, p)"
  - id: e28
    source: np-03
    locator: "Section 3.14.5, paragraph (6)(a)"
    quote: "The FFSS projected fuel price (FFSSPFP) for Resources under the on-site FFSS category must be based on the projected index price of fuel oil for the upcoming FFSS Obligation Period, as described in paragraph (11) below, plus a fuel adder of $0.05 per gallon."
  - id: e29
    source: np-03
    locator: "Section 3.14.5, paragraph (6)(c)"
    quote: "The FFSS projected fuel price (FFSSPFP) for Resources under the contractual off-site FFSS category must be based on the projected index price of natural gas for the upcoming FFSS Obligation Period, and as described in paragraph (11) below, plus a fuel adder of $0.5/MMBtu."
  - id: e30
    source: np-03
    locator: "Section 3.14.5, paragraph (7)"
    quote: "ERCOT must establish a single market clearing price mechanism for Resources eligible to provide FFSS under the on-site FFSS category and the Resource controlled FFSS category. ERCOT must establish a separate market clearing price mechanism for Resources eligible to provide FFSS under the contractual off-site FFSS category."
  - id: e31
    source: np-03
    locator: "Section 3.14.5, paragraph (13)(d)"
    quote: "ERCOT may issue an FFSS VDI without a request from the QSE, however ERCOT shall not issue an FFSS VDI without evidence of an impending or actual fuel supply disruption affecting the FFSSR."
  - id: e32
    source: np-03
    locator: "Section 3.14.5, paragraph (13)(f)"
    quote: "The FFSSR shall continuously deploy FFSS to generate electricity until the earlier of (i) the exhaustion of the fuel reserved to generate at the FFSS MW award level for the duration requirement specified in the RFP, including any fuel that was restocked following approval or instruction from ERCOT, (ii) the fuel supply disruption no longer exists, or (iii) ERCOT determines the FFSS deployment is no longer needed."
  - id: e33
    source: np-03
    locator: "Section 3.14.5, paragraph (13)(g)"
    quote: "The QSE for the FFSSR is responsible for communicating with the ERCOT control room the anticipated exhaustion of the reserved fuel at least six hours before that anticipated exhaustion and upon the exhaustion of that fuel."
  - id: e34
    source: np-03
    locator: "Section 3.14.5, paragraph (15)"
    quote: "Following final approval from ERCOT, a QSE must restock their fuel reserve, using existing fuel inventories or new fuel purchases, to restore their ability to generate at the FFSS MW award level for the specified duration requirement."
  - id: e35
    source: np-03
    locator: "Section 3.14.5, paragraph (17)"
    quote: "An FFSS Offer Submission Form may have up to three alternate Generation Resources per primary Resource offering to provide FFSS."
  - id: e36
    source: np-06
    locator: "Section 6.6.14.2, Firm Fuel Supply Service Hourly Standby Fee Payment and Fuel Replacement Cost Recovery, paragraph (1)"
    quote: "ERCOT shall pay the FFSS Hourly Standby Fee to the QSE representing the primary Generation Resource. This standby fee is determined through a competitive bidding process, with an adjustment for reliability based on an Hourly Rolling Equivalent Availability Factor, as well as adjustments for capacity and deployment."
  - id: e37
    source: np-06
    locator: "Section 6.6.14.2, paragraph (5), standby fee equation"
    quote: "FFSSSBF _(q, r, h) = FFSSAWARD _(q, r, h) * FFSSCRF _(q, r, h) * FFSSARF _(q, r, h) * (1 - FFSSDRP _(q, r, h))"
  - id: e38
    source: np-03
    locator: "Section 3.14.5, paragraph (23)"
    quote: "If ERCOT issues an FFSS VDI to an FFSSR for the same Operating Hour where a RUC instruction was issued, then for Settlement purposes ERCOT will consider the RUC instruction as cancelled."
  - id: e39
    source: np-06
    locator: "Section 6.6.14.2, paragraph (5), availability reduction factor"
    quote: "If (FFSSHREAF _(q, r, h) ≥ 0.90) Then: FFSSARF _(q, r, h) = 1 Otherwise: FFSSARF _(q, r, h) = Max (0, 1 - (0.90 - FFSSHREAF _(q, r, h)) * 2)"
  - id: e40
    source: np-06
    locator: "Section 6.6.14.2, paragraph (5), variable table, FFSSHREAF"
    quote: "Firm Fuel Supply Service Hourly Rolling Equivalent Availability Factor per QSE per Resource by hour—The equivalent availability factor assigned to the primary Generation Resource r represented by QSE q over 1,452 hours, for the hour."
  - id: e41
    source: np-06
    locator: "Section 6.6.14.1, paragraph (3)"
    quote: "The Firm Fuel Supply Service Fuel Replacement Cost shall only represent the replacement fuel costs not recovered during the FFSS deployment period through Day-Ahead energy sales and Real-Time energy imbalance settlement revenues related to the Resource with the FFSS award."
  - id: e42
    source: np-06
    locator: "Section 6.6.14.1, paragraph (4)(b)"
    quote: "The Fuel Oil Index Price (FOP) for the Operating Day the QSE received approval to restock fuel, which includes $0.05/gallon to cover the cost of transportation."
  - id: e43
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (9)"
    quote: "If the FFSSR is not available for the hours for which ERCOT has issued a Watch for winter weather, ERCOT shall claw back and/or withhold the FFSS Hourly Standby Fee for a number of days as calculated below, unless the FFSSR exhausted the fuel reserved to generate at the FFSS MW award level for the duration requirement specified in the RFP, including any fuel that was restocked following final approval or instruction from ERCOT, or the FFSSR exhausted emission hours allocated for the FFSSR, as specified in the FFSS Offer Submission Form."
  - id: e44
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (9), equation"
    quote: "FFSSDCB _(q, r) = Min(FFSSUFDW _(q, r) * 2, 1) * 90"
  - id: e45
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (10)"
    quote: "If the FFSSR fails to come On-Line or stay On-Line during an FFSS deployment due to a fuel-related issue, ERCOT shall claw back and/or withhold the FFSS Hourly Standby Fee for 90 days. A QSE representing an FFSSR may coordinate with ERCOT and seek approval to take the FFSSR Off-Line for no more than four hours to perform critical maintenance associated with consuming the reserved fuel. If the QSE coordinates with ERCOT and receives approval to take the FFSSR unit Off-Line and brings the FFSSR back On-Line within four hours or less, this shall not count as failure to stay On-Line for the purpose of this paragraph."
  - id: e46
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (13)"
    quote: "If the FFSSR fails to come On-Line or stay On-Line during an FFSS deployment due to a non-fuel related issue, ERCOT shall claw back and/or withhold the FFSS Hourly Standby Fee for 15 days."
  - id: e47
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (16)"
    quote: "Notwithstanding paragraphs (9) through (15) above, if the FFSSR is otherwise available but fails to come On-Line or is forced Off-Line due to a transmission system outage or transmission system limitation that would prevent the unit from being deployed to LSL, ERCOT shall not claw back the FFSS Hourly Standby Fee."
  - id: e48
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (18)(a)"
    quote: "ERCOT shall decertify a primary Generation Resource or any alternate Generation Resource that was an FFSSR for any of the following: (a) Failure to come On-Line or stay On-Line during an FFSS deployment due to a fuel-related issue for two or more deployments;"
  - id: e49
    source: np-08
    locator: "Section 8.1.1.2.1.6, paragraph (18)(c)"
    quote: "(c) Failure to maintain an Hourly Rolling Equivalent Availability Factor greater than or equal to 50%."
  - id: e50
    source: puct-25-520
    locator: "16 TAC 25.520(b)(8), Definitions"
    quote: "Procurement costs -- The standby payments to FFSS resources for an FFSS obligation period."
  - id: e51
    source: puct-25-520
    locator: "16 TAC 25.520(g)(3), FFSS payment and charges"
    quote: "ERCOT must charge each load serving entity (LSE) for FFSS procurement costs based upon the LSE’s load ratio share during the relevant FFSS obligation period."
  - id: e52
    source: puct-25-520
    locator: "16 TAC 25.520(g)(4)"
    quote: "Non-procurement costs may be charged to an LSE based on the LSE’s load ratio share during the FFSS resource’s deployment."
  - id: e53
    source: puct-25-520
    locator: "16 TAC 25.520(b)(6), Definitions"
    quote: "Non-procurement costs -- The fuel restocking payments to FFSS resources following a deployment during the FFSS obligation period."
  - id: e54
    source: imm-som-2025
    locator: "page 114 (OCR), Market Operations, G.3 FFSS Rulemaking"
    quote: "Unlike some ERCOT reliability services that begin with a PUCT rulemaking and are later implemented in the nodal protocols, the FFSS program began in the nodal protocols and did not receive a rulemaking until February 2026."
  - id: e55
    source: imm-som-2025
    locator: "page 114 (OCR), Market Operations, G.3 FFSS Rulemaking"
    quote: "This rulemaking significantly departs from the current administration of the program and may adversely affect market efficiency and the reliability benefits that this program provides."
  - id: e56
    source: imm-som-2025
    locator: "page 113 (OCR), Market Operations, G.1 FFSS Deployments in 2025"
    quote: "FFSS deployments were highest on February 19, 2025, coinciding with the highest real-time electricity prices observed during the event. Despite this increase in FFSS activity, the maximum ORDC price remained below $62 per MWh."
  - id: e57
    source: imm-som-2024
    locator: "page 111 (OCR), FFSS deployments in 2024"
    quote: "In 2024, FFSS was deployed across five consecutive days from January 13-17. Over that time, 10 different FFSS Resources (FFSSRs) were deployed for a maximum of 916 MW, as shown in Table 8."
  - id: e58
    source: imm-som-2022
    locator: "page 141 (OCR), Appendix, Firm Fuel Supply Service (FFSS)"
    quote: "Approved on March 31, 2022, NPRR1120, Create Firm Fuel Supply Service, created this new reliability service, to be procured via request for proposal (RFP)."
  - id: e59
    source: imm-som-2022
    locator: "page 141 (OCR), Appendix, FFSS procurement results for November 15, 2022 through March 15, 2023"
    quote: "All 19 Generation Resources were awarded at a clearing price of $6.19/MW/hr ($18,000/MW);"
  - id: e60
    source: imm-som-2022
    locator: "page 142 (OCR), Appendix"
    quote: "At noon on December 21, 2022, a Public Notice was issued instructing Qualified Scheduling Entities (QSEs) to prepare for potential FFSS deployments. Later that same day, the first FFSS deployment instructions were issued."
  - id: e61
    source: imm-som-2025
    locator: "Section G, Firm Fuel Supply Service"
    quote: "In July 2023, ERCOT expanded FFSS to include certain gas-fired generation resources with owned natural gas stored offsite and backed by firm transportation and storage agreements."
  - id: e62
    source: ercot-ffss-summary-2025
    locator: "Firm Fuel Supply Service Procurement Summary, November 15, 2025 - March 15, 2026"
    quote: "Number of QSEs Offering: 6 MW Procured: 4250.4* Projected Cost: $52,076,304.00"
  - id: e63
    source: ercot-ffss-summary-2026
    locator: "Firm Fuel Supply Service Procurement Summary Categories 1 + 2, November 15, 2026 - March 15, 2027"
    quote: "Number of QSEs Offering: 7 MWs Procured: 3743.4 Projected Cost: $52,407,600.00"
  - id: e64
    source: ercot-ffss-summary-2026
    locator: "Firm Fuel Supply Service Procurement Summary Category 3, November 15, 2026 - March 15, 2027"
    quote: "Note: No resources that met the Category 3 FFSS Resource requirements were procured."
  - id: e65
    source: puct-ffss-memo-2025
    locator: "Project No. 56000, Staff memo of July 3, 2025, Staff Recommendations, Budget"
    quote: "Staff recommends keeping the overall budget the same as the first three contract periods. Using a cost cap like the Emergency Response Service program also provides cost certainty to load serving entities."
  - id: e66
    source: puct-ffss-memo-2025
    locator: "Project No. 56000, Staff memo of July 3, 2025, Staff Recommendations, Offer Cap"
    quote: "An offer cap helps mitigate possible market power abuse that could result in very high prices and gives ERCOT flexibility to procure more MW."
  - id: e67
    source: puct-ffss-memo-2025
    locator: "Project No. 56000, Staff memo of July 3, 2025, Appendix, NPRR1118"
    quote: "Decreases the number of FFSS obligation periods awarded in an FFSS procurement from two to one."
  - id: e68
    source: puct-ffss-memo-2025
    locator: "Project No. 56000, Staff memo of July 3, 2025, Appendix, NPRR1141"
    quote: "Provides equity and clarity surrounding the hourly standby fee claw backs for FFSS during a Watch for winter weather using a linear curve approach."
  - id: e69
    source: ercot-ffss-expectations
    locator: "FFSS Capability Demonstration and Qualification (version 3, 7/27/2026)"
    quote: "For Resources demonstrating capability through a previous deployment, the previous deployment must be within the testing period which covers one year prior to the deadline to inform ERCOT of the FFSS capability demonstration; the deadline to inform ERCOT is August 15."
  - id: e70
    source: ercot-ffss-expectations
    locator: "Activities During the FFSS Obligation Period, Deployment"
    quote: "Telemeter on average an HSL greater than or equal to the awarded FFSS MW value"
  - id: e71
    source: np-06
    locator: "Section 6.6.14.2, paragraph (5), capacity reduction factor"
    quote: "If (FFSSTCAP _(q, r, h) ≥ FFSSACAP _(q, r, h)) Then: FFSSCRF _(q, r, h) = 1 Otherwise: FFSSCRF _(q, r, h) = Max (0, 1 – 2 * (FFSSACAP _(q, r, h) – FFSSTCAP _(q, r, h)) / FFSSACAP _(q, r, h))"
  - id: e72
    source: np-06
    locator: "Section 6.6.14.2, paragraph (5), award amount"
    quote: "FFSSAWARD _(q, r, h) = FFSSPR _(q, r, h) * FFSSACAP _(q, r, h)"
  - id: e73
    source: imm-som-2022
    locator: "page 105 (OCR), Winter Storm Elliott discussion"
    quote: "FFSS was deployed for the first time during Winter Storm Elliott in late December 2022 for four days, which are shown on Table 7."
---

## Definition

Firm Fuel Supply Service (FFSS) is a service provided by certain Generation Resources to maintain Resource availability in the event of a natural gas curtailment or other fuel supply disruption. [e1] A resource procured for the service is obligated to provide it from November 15 through March 15. [e2]

## How it works

**Procurement calendar.** ERCOT issues an RFP by August 1 each year, offers are due on or before September 1, and awards are issued by September 30. [e24][e25] ERCOT procures FFSS ahead of each obligation period, with a maximum of $54 million in procurement costs for a single obligation period, and at least 70% of that budget goes to the on-site and resource-controlled categories unless offers fall short. [e3][e4] An offer is an offer to supply the awarded capacity, hold enough reserved fuel for at least one deployment, and reserve emissions hours for at least three deployments in the obligation period. [e26]

**Three categories.** The PUCT rule, shown in the saved copy as effective 2/25/2026, defines three ways to qualify. On-site FFSS needs demonstrated dual fuel capability, the ability to burn alternative on-site stored fuel, and on-site fuel storage. [e19] Resource-controlled FFSS needs on-site gas or fuel oil storage, or off-site gas storage where the resource or QSE owns and controls both the storage facility and the pipeline delivering to the resource. [e20] Contractual off-site FFSS needs a firm gas storage agreement and a firm transportation agreement with a pipeline that is a critical natural gas facility. [e21] The Protocols add that a resource may take part under only one category. [e22] The IMM says that in July 2023 ERCOT expanded FFSS to include certain gas-fired resources with owned natural gas stored offsite and backed by firm transportation and storage agreements. [e61]

**Qualification and testing.** Every year a QSE must show each offered primary and alternate resource can use its reserved fuel and sustain output for 60 minutes at the MW level it wants to qualify, and the most that can be offered is the average Real-Time net real power telemetered during that demonstration. [e23] ERCOT's guidance says a previous deployment can be used if it falls in the one-year testing period, with an August 15 deadline to inform ERCOT. [e69] An offer form may name up to three alternate resources per primary resource. [e35]

**Offer cap.** ERCOT sets an administrative offer cap for each category before each obligation period. In the Protocols it equals deployment hours times the projected fuel price times the category heat rate. [e27] Deployment hours are set at 48 hours per deployment. [e5] The projected fuel price is a projected fuel oil index price plus $0.05 per gallon for on-site resources, and a projected natural gas index price plus $0.5/MMBtu for contractual off-site resources. [e28][e29] The 2024-2025 cap of $12,240 per MW came from a $17 per MMBtu fuel oil index, a heat rate of 15 MMBtu per MWh and 48 hours. [e12]

**Clearing.** ERCOT must run one market clearing price mechanism for the on-site and resource-controlled categories and a separate one for the contractual off-site category. [e30]

**Deployment.** When ERCOT issues a Watch for winter weather it tells market participants, including QSEs with FFSS resources, to begin preparation. [e6] If a gas curtailment or other fuel disruption is anticipated or happens, the QSE notifies ERCOT and asks to deploy; the QSE may not deploy FFSS unless ERCOT approves. [e7] ERCOT may also issue the instruction without a QSE request, but not without evidence of an impending or actual fuel supply disruption affecting the resource. [e31] A deployed resource keeps generating until the earlier of exhausting its reserved fuel (including approved restocked fuel), the disruption ending, or ERCOT deciding the deployment is no longer needed. [e32] The QSE must tell the control room at least six hours before it expects to exhaust reserved fuel and again on exhaustion. [e33] ERCOT's guidance adds that a deployed resource should telemeter on average an HSL at or above the awarded FFSS MW. [e70] If an FFSS instruction and a RUC instruction cover the same Operating Hour, the RUC instruction is treated as cancelled for Settlement. [e38]

**Restocking and fuel cost recovery.** After final approval from ERCOT, the QSE must restock reserved fuel from existing inventory or new purchases. [e34] The Fuel Replacement Cost covers only replacement fuel costs not already recovered through Day-Ahead energy sales and Real-Time energy imbalance revenues from that resource. [e41] If the fuel is replaced from existing inventory, the cost may be based on new purchases or on the Fuel Oil Index Price for the approval day, which includes $0.05 per gallon for transportation. [e42]

**Payment and charges.** ERCOT pays the hourly standby fee to the QSE of the primary resource, set through competitive bidding and adjusted for reliability, capacity and deployment. [e36] The PUCT rule has ERCOT charge each LSE for procurement costs (the standby payments) by load ratio share during the obligation period, and allows non-procurement costs (fuel restocking payments) to be charged by load ratio share during the deployment. [e51][e50][e52][e53]

## Formula

Hourly standby fee for a primary resource (np-06 Section 6.6.14.2, paragraph (5)): [e37]

`FFSSSBF = FFSSAWARD * FFSSCRF * FFSSARF * (1 - FFSSDRP)` [e37]

- FFSSAWARD is the award amount: the standby price in the award times the awarded capacity. [e72]
- FFSSCRF is the capacity reduction factor: 1 if tested capacity is at least awarded capacity, otherwise one minus twice the shortfall as a share of awarded capacity, floored at zero. [e71]
- FFSSARF is the availability reduction factor: 1 if the hourly rolling equivalent availability factor is at least 0.90, otherwise one minus twice the shortfall below 0.90, floored at zero. [e39]
- FFSSHREAF, the rolling availability factor, is measured over 1,452 hours. [e40]
- FFSSDRP is the share of the standby fee subject to clawback under the performance rules in Section 8.1.1.2.1.6. [e43]

The offer cap equation is `FFSSOCAP = FFSSDH * FFSSPFP * FFSSHR`, hours per deployment times projected fuel price times heat rate. [e27]

Clawback during a Watch: if the resource is not available during hours for which ERCOT issued a Watch for winter weather, ERCOT claws back or withholds the standby fee for a number of days, with an exception if the resource exhausted its reserved fuel or emission hours. [e43] The day count is the unavailable share of the Watch duration times two, capped at one, times 90. [e44]

## ERCOT context

The IMM says FFSS was implemented in 2022 in response to fuel supply disruptions during Winter Storm Uri. [e8] The IMM's 2022 report says NPRR1120, approved March 31, 2022, created the service. [e58] For the first obligation period (November 15, 2022 through March 15, 2023) all 19 resources were awarded at a clearing price of $6.19/MW/hr ($18,000/MW). [e59] The first deployment instructions came on December 21, 2022, during Winter Storm Elliott. [e60][e73] SB 3 separately directs the PUC to ensure that winter resource capability qualifications for a service described in PURA 39.159(b) include on-site fuel storage, dual fuel capability or fuel supply arrangements. [e11]

Procurement history from the saved sources: in the 2024-2025 contract period ERCOT procured 4,195 MW; the offer cap was $12,240 per MW. [e12] For November 15, 2025 through March 15, 2026 the ERCOT procurement summary shows 4250.4 MW procured (updated January 10, 2026 per its footnote) and a projected cost of $52,076,304. [e62] For November 15, 2026 through March 15, 2027 the Category 1 and 2 summary shows 3743.4 MW procured at a projected cost of $52,407,600, and a note that no Category 3 resources were procured. [e63][e64] FFSS uplift rose from $33.8 million in 2024 to $45.9 million in 2025. [e9]

PUCT staff's July 2025 memo recommended keeping the same $54 million cost cap, noting a cost cap like ERS gives load serving entities cost certainty, and keeping an offer cap because it helps mitigate possible market power abuse. [e65][e66]

Deployments, per the IMM: five consecutive days in January 2024 (10 resources, maximum 916 MW), and three consecutive days in February 2025 (four resources, maximum 470 MW). [e57][e13] The IMM is critical of deployment practice. It says the criteria for deployment beyond a winter weather watch remain unclear and are left to operator discretion, and (in its 2024 report) that deployed FFSS resources were removed from the online reserves used for the ORDC adder, which raised scarcity prices even when physical capacity remained. [e14][e10] The ORDC adder was discontinued in December 2025 with RTC, so that specific effect is historical. [e15] For February 2025 the IMM says the highest FFSS deployment day coincided with the highest real-time prices, yet the maximum ORDC price stayed below $62 per MWh. [e56] The IMM also says the FFSS program did not receive a rulemaking until February 2026 and that the rulemaking significantly departs from current administration of the program and may harm market efficiency and the reliability benefits. [e54][e55]

## Key facts

- Obligation period is November 15 through March 15. [e2]
- Budget: a maximum of $54 million in procurement costs per obligation period. [e3]
- Deployment hours: 48 hours per deployment. [e5]
- 2024-2025 procurement: 4,195 MW; offer cap $12,240 per MW. [e12]
- Clawback is 90 days of the standby fee for fuel-related failures to come on or stay on-line in a deployment, and 15 days for non-fuel-related ones, unless a transmission outage or limitation prevented deployment to LSL; an ERCOT-approved Off-Line period of up to four hours for critical fuel-related maintenance does not count as failing to stay On-Line. [e45][e46][e47]
- Grounds for decertification include fuel-related failure to come On-Line or stay On-Line in two or more deployments, and failure to maintain an hourly rolling equivalent availability factor of at least 50%. [e48][e49]
- FFSS uplift: $45.9 million in 2025, up from $33.8 million in 2024. [e9]

## Timeline

- March 31, 2022: NPRR1120 approved, creating FFSS (per the IMM). [e58]
- December 21, 2022: first FFSS deployment instructions issued, during Winter Storm Elliott. [e60][e73]
- July 2023: FFSS expanded to certain gas-fired resources with offsite gas storage backed by firm transportation and storage agreements (per the IMM). [e61]
- NPRR1118 (effective 08/01/2024 per the PUCT staff memo's appendix): decreased the number of obligation periods awarded in one procurement from two to one. [e67]
- NPRR1141 (approved 05/15/2025, effective 06/01/2025 per the PUCT staff memo): standby fee clawbacks during a winter weather Watch use a linear curve approach. [e68]
- February 2026: PUCT rulemaking for 16 TAC 25.520 (per the IMM; saved rule copy shows effective 2/25/2026). [e54][e18]

## Say it like this

FFSS is a winter insurance payment: ERCOT pays selected generators a standby fee to hold backup fuel so they can keep running if gas is curtailed, and the fee is clawed back if they fail to show up. The IMM's complaint is that deployment criteria beyond a winter weather watch are unclear and left to operator discretion. [e43][e14]

## Common confusion

FFSS pays for fuel readiness in a fixed winter window and is deployed only with ERCOT approval, so it is a paid, contracted service and not the same thing as the weatherization rules (see that topic). [e2][e7] It is also not ERS: ERS is a separate emergency service (see the ers topic), whereas FFSS is provided by Generation Resources to maintain availability in a fuel disruption. [e1] The standby fee (paid for being ready) and the fuel replacement cost (paid after a deployment burns fuel) are separate payments. [e36][e41]

## Questions

### When is FFSS in force, and how much can ERCOT spend?

The obligation period runs from November 15 through March 15, and ERCOT may spend a maximum of $54 million in procurement costs per period. [e2][e3]

### How is the FFSS offer cap built?

Deployment hours times projected fuel price times category heat rate. The hours are 48 per deployment, the fuel price is a projected oil index price (on-site and resource-controlled) or a projected gas index price (contractual off-site), with the Protocols' fuel adders applying to the on-site and contractual off-site categories. [e27][e5][e28][e29]

### What does the IMM say is wrong with FFSS deployment?

The IMM says deployment criteria beyond a winter weather watch are unclear and left to operator discretion, and, in its 2024 report, deploying FFSS resources removed their capacity from the online reserves used for the ORDC adder, which raised scarcity prices. That adder has since been discontinued with RTC. [e14][e10][e15]

### Was FFSS deployed recently?

According to the IMM, ERCOT deployed it over three consecutive days in February 2025 with four resources for a maximum of 470 MW, and over five consecutive days in January 2024 during a winter weather watch. [e13][e57][e14]

### Why does ERCOT claw back standby fees, and how much?

The standby fee pays for availability, so ERCOT claws it back if a resource is unavailable during a winter weather Watch or fails to come On-Line or stay On-Line in a deployment: 90 days for fuel-related failures and 15 days for non-fuel-related failures, with no clawback if a transmission outage or limitation prevented deployment to LSL. [e43][e45][e46][e47]

### What if a resource exhausts its reserved fuel during a deployment?

The deployment ends for that resource, the QSE tells the control room at least six hours ahead, and an exhausted resource is not penalised for unavailability during the Watch because the clawback rule excepts resources that exhausted reserved fuel. [e32][e33][e43]

### Why might FFSS procurement MW fall while the budget stays at $54 million?

The budget cap is fixed, so the MW procured depends on the offers: the 2026-2027 summary shows 3743.4 MW procured against 4250.4 MW for 2025-2026, with projected costs of $52.4 million and $52.1 million respectively. [e3][e62][e63] The saved sources do not explain the cause.

## Open items

- Resolved 2026-11-21: categories, qualification and testing (np-08 8.1.1.2.1.6), clawback and decertification, standby fee and fuel replacement formulas (np-06 6.6.14) and the PUCT rule are now covered. Not covered: the full text of paragraphs (6)-(8) and (19)-(26) of Section 8.1.1.2.1.6 (testing capacity, Force Majeure reports).
- The PUCT 25.520 offer cap says fuel price is a projected fuel oil or natural gas price; the Protocols add fuel adders and name Nymex Heating Oil Futures and Henry Hub futures as index sources, while the July 2025 PUCT staff memo footnote describes the fuel oil price as based on an EIA Gulf Coast ultra-low sulfur diesel spot price. The saved sources do not reconcile these.
- The 2025-2026 and 2026-2027 offer caps and clearing prices are in table cells in the ERCOT procurement summaries; the 2026-2027 summary shows a $14,000.00 cleared standby price but its layout is ambiguous, so it is not quoted.
- Actual FFSS cost, clawbacks and deployments for the 2025-2026 winter (including Winter Storm Fern, January 2026) were not found in the saved sources.
- The SB 3 passage quoted does not name FFSS; the link between PURA 39.159 and FFSS is not stated in the saved sources.
