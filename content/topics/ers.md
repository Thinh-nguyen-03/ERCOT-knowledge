---
id: ers
name: ERS (Emergency Response Service)
aliases: [ERS, Emergency Response Service, ERS-10, ERS-30, ERS Load, ERS Generator]
kind: product
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: eea
    type: related
    note: ERS exists to help prevent or alleviate an actual or anticipated EEA event, so read the EEA topic for the emergency levels. [e1]
  - to: qse
    type: prerequisite-of
    note: ERCOT charges each QSE for ERS based on its load ratio share, and an ERS resource must be represented by a QSE. [e8][e46]
  - to: prc
    type: related
    note: ERCOT may deploy ERS when Physical Responsive Capability falls below 3,000 MW and is not projected to recover within 30 minutes after Non-Spin deployment. [e6]
  - to: load-ratio-share
    type: related
    note: ERS capacity cost is allocated to each QSE by its load ratio share for the ERS Time Period, which is its total Load divided by total ERCOT Load. [e35]
  - to: ancillary-services
    type: contrasts-with
    note: The protocols state that ERS is not an Ancillary Service, and contracted ERS capacity may not be used to provide Ancillary Services during a contracted ERS Time Period. [e2][e27]
  - to: ffss
    type: related
    note: The IMM lists FFSS and ERS together among out-of-market products. [e13][e14]
  - to: imm
    type: related
    note: The IMM reports ERS procurement, deployments and criticism of out-of-market programs. [e9][e11]
  - to: rmr
    type: related
    note: A resource with an ERS obligation may propose to serve as an alternative to an RMR resource, and if selected its ERS obligation is modified or terminated. [e45]
  - to: clr
    type: contrasts-with
    note: The IMM says crypto mines that migrated from CLR registration into ERS are no longer price-responsive in SCED, and recommends changes that would push them back to CLR registration. [e41]
  - to: winter-storm-uri
    type: example-of
    note: In Winter Storm Uri in February 2021 the majority of the ERS fleet was deployed and exhausted within 12 hours of deployment. [e43]
evidence:
  - id: e1
    source: puct-25-507
    locator: "16 TAC 25.507(b)"
    quote: "ERCOT must procure ERS, a special emergency response service to be deployed by ERCOT to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Emergency Response Service (ERS)"
    quote: "An emergency service consistent with P.U.C. SUBST. R. 25.507, Electric Reliability Council of Texas (ERCOT) Emergency Response Service (ERS), to be deployed by ERCOT to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event. ERS is not an Ancillary Service."
  - id: e3
    source: puct-25-507
    locator: "16 TAC 25.507(c)(2)"
    quote: "ERS resource -- A resource contracted to provide ERS that meets one of the following descriptions: (A) A load or aggregation of loads; or (B) A dispatchable generator that is not registered with ERCOT as a Generation Resource, or an aggregation of such generators."
  - id: e4
    source: np-03
    locator: "Section 3.14.3.1, Emergency Response Service Procurement, paragraph (1)"
    quote: "ERCOT shall issue Requests for Proposals to procure ERS for each Standard Contract Term. The ERS Standard Contract Terms are as follows: (a) December through March; (b) April and May; (c) June through September; and (d) October and November."
  - id: e5
    source: np-03
    locator: "Section 3.14.3.1, paragraph (2)"
    quote: "ERCOT shall procure ERS from one or more of the four following ERS service types: (a) Weather-Sensitive ERS-10 (b) Non-Weather-Sensitive ERS-10 (c) Weather-Sensitive ERS-30 (d) Non-Weather-Sensitive ERS-30"
  - id: e6
    source: np-06
    locator: "Section 6.5.9.4.1, General Procedures Prior to EEA Operations, paragraph (2)"
    quote: "When PRC falls below 3,000 MW and is not projected to be recovered above 3,000 MW within 30 minutes following the deployment of Non-Spin, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message."
  - id: e7
    source: puct-25-507
    locator: "16 TAC 25.507(b)(2)"
    quote: "ERCOT may spend a maximum of $75 million in a 12-month period on ERS, unless otherwise determined by the commission."
  - id: e8
    source: puct-25-507
    locator: "16 TAC 25.507(e)(2)"
    quote: "ERCOT must charge each QSE a charge for ERS based upon its load ratio share during the relevant ERS time period and ERS standard contract term."
  - id: e9
    source: imm-som-2024
    locator: "Reliability Programs, ERS"
    quote: "Industrial and commercial electricity consumers submit offers to provide ERS through a centralized auction, and ERCOT deploys ERS during Energy Emergency Alerts (EEAs) or when Physical Responsive Capability (PRC) falls below 3,000 MW. Since its inception, ERS has been deployed for nine events, most recently in September 2023. For the 2024 program year (December 2023 through November 2024), ERCOT procured an average of 1,147 MW per hour, an 18% increase from 2023, at an average clearing price of $7.36 per MWh, a 5% decrease from the prior year."
  - id: e10
    source: imm-som-2025
    locator: "Executive summary, load growth"
    quote: "By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity."
  - id: e11
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs"
    quote: "they compensate entities outside of the energy and ancillary service markets to provide additional supply or reduce demand during tight conditions. While they are generally motivated by improving reliability, these types of programs will sharply reduce the expected shortage revenues that investors need to justify new dispatchable generation and to retain higher-cost existing generation nearing retirement."
  - id: e13
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Emergency Response Service (ERS). Provides out of market revenue to increase supply or reduce demand curing winter conditions"
  - id: e14
    source: imm-som-2025
    locator: "Executive summary, out-of-market programs, list"
    quote: "Firm Fuel Supply Service (FFSS). The FFSS program provides an out-of-market payment for qualifying assets to provide electricity and reserves during anticipated tight winter conditions."
  - id: e12
    source: imm-som-2024
    locator: "Real-time market, RDPA discussion"
    quote: "there were no ERS deployments in 2024, but ERS deployments on September 6, 2023, contributed to reliability pricing over $1,000 per MWh for several intervals, where the RDPA never exceeded $175 per MWh in 2024."
  - id: e15
    source: puct-25-507
    locator: "16 TAC 25.507(b)(2)"
    quote: "During that 12-month period, ERCOT may exceed the $75 million maximum by up to an additional $25 million for ERS contract renewals under paragraph (d)(9) of this section during a period where ERS has been exhausted."
  - id: e16
    source: np-06
    locator: "Section 6.5.9.4.1, paragraph (3), pending NPRR1238 box"
    quote: "(3) When PRC falls below 3,000 MW and is not projected to be recovered above 3,000 MW within 30 minutes following the deployment of Non-Spin and all VECL, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message."
  - id: e17
    source: np-03
    locator: "Section 3.14.3, Emergency Response Service, paragraph (1)"
    quote: "ERCOT shall procure and deploy ERS with the goal of promoting reliability prior to and during energy emergencies."
  - id: e18
    source: np-03
    locator: "Section 3.14.3.1, paragraph (5)"
    quote: "In order to qualify as weather-sensitive, an ERS Load must meet one of the following criteria: (a) The ERS Load must consist exclusively of residential sites; or (b) The ERS Load must consist exclusively of non-residential sites and must qualify as weather-sensitive based on the accuracy of the regression baseline evaluation methodology as described in Section 8.1.3.1.1, Baselines for Emergency Response Service Loads, as an indicator of actual interval Load."
  - id: e19
    source: np-03
    locator: "Section 3.14.3.1, paragraph (8)"
    quote: "The minimum capacity offer for an ERS Load on the weather-sensitive baseline is one half (0.5) MW; all other ERS capacity offers will have a minimum amount that may be offered of one-tenth (0.1) MW. ERS Resources may be aggregated to reach this requirement."
  - id: e20
    source: np-03
    locator: "Section 3.14.3.1, paragraph (7)"
    quote: "A QSE may submit separate offers for an ERS Resource to provide any or all of the four ERS service types during the same or different ERS Time Periods in the same ERS Standard Contract Term, but ERCOT shall only award offers for one service type for each ERS Resource."
  - id: e21
    source: np-03
    locator: "Section 3.14.3.1, paragraph (17)(b)"
    quote: "ERS Resources shall be obligated for 24 hours of cumulative deployment time for any ERS Contract Period during the December through March ERS Standard Contract Term. The obligated cumulative deployment time for any ERS Contract Period during all other ERS Standard Contract Terms shall be 12 hours."
  - id: e22
    source: np-03
    locator: "Section 3.14.3.1, paragraph (15)(b)"
    quote: "If one or more ERS Resources’ obligations in a given ERS service type are exhausted pursuant to Section 3.14.3.3, the ERS Contract Period for that ERS service type shall terminate at the end of the Operating Day during which the exhaustion occurred."
  - id: e23
    source: np-03
    locator: "Section 3.14.3.1, paragraph (17)(d)(i)"
    quote: "During the offer submission process, QSEs shall designate on the ERS offer form, which is posted on the ERCOT website, whether an ERS Resource elects to participate in renewal ERS Contract Periods (“renewal opt-in”). Except as provided in paragraph (iv) below, this election is irrevocable once the ERS Resource has been committed for an ERS Standard Contract Term."
  - id: e24
    source: np-03
    locator: "Section 3.14.3.1, paragraph (11)(f)"
    quote: "Affirmation that no offered capacity from any site in an ERS Resource has been or will be committed to provide any other product, service, or program during any of the hours in the ERS Time Period in the Standard Contract Term for which the offer is submitted.  Such prohibited products, services, or programs include, but are not limited to, Ancillary Services, Security-Constrained Economic Dispatch (SCED), or TDSP standard offer programs."
  - id: e25
    source: np-03
    locator: "Section 3.14.3.1, paragraph (22)"
    quote: "Deployment of ERS Resources will not result in additional payments other than any payment for which the QSE may be eligible through Real-Time energy imbalance or other ERCOT Settlement process."
  - id: e26
    source: np-03
    locator: "Section 3.14.3.3, paragraph (4)(b)"
    quote: "An ERS Resource participating in ERS-10 must be capable of meeting its event performance obligations relevant to its assigned performance evaluation methodology within ten minutes of an ERCOT Dispatch Instruction to its QSE, and must be able to maintain such performance for the entire Sustained Response Period. An ERS Resource participating in ERS-30 must be capable of meeting its event performance obligations relevant to its assigned performance evaluation methodology within 30 minutes of an ERCOT Dispatch Instruction to its QSE, and must be able to maintain such performance for the entire Sustained Response Period."
  - id: e27
    source: np-03
    locator: "Section 3.14.3.3, paragraph (5)"
    quote: "The contracted capacity of ERS Resources may not be used to provide Ancillary Services during a contracted ERS Time Period. Nothing herein shall be construed to limit passive (voluntary) Load response, provided the ERS Resource meets its performance and availability requirements, as described in Section 8.1.3.1, Performance Criteria for Emergency Response Service Resources."
  - id: e28
    source: np-03
    locator: "Section 3.14.3.3, paragraph (4)(e)"
    quote: "An ERS Resource deployed for ERS must be able to return to a condition such that it is capable of meeting its ERS performance requirements within ten hours following a release Dispatch Instruction."
  - id: e29
    source: np-03
    locator: "Section 3.14.3.2, Emergency Response Service Self-Provision, paragraph (1)"
    quote: "QSEs may self-provide ERS. A QSE electing to self-provide all or part of its ERS obligation shall provide ERCOT with the following, while adhering to a schedule published by ERCOT:"
  - id: e30
    source: np-22q
    locator: "Attachment Q, B. ERS Capacity Demand Curve"
    quote: "ERCOT will develop a capacity demand curve for each ERS Time Period, and all ERS products will be procured together within the limits of that curve. ERCOT shall maximize the MW procured subject to the expenditure limit for the relevant Time Period."
  - id: e31
    source: np-22q
    locator: "Attachment Q (dated December 5, 2025), C. ERS Offer Cap"
    quote: "The ERS offer cap establishes a maximum possible procurement price of $80/MW/hr for every ERS Time Period during the ERS program year. ERCOT will automatically reject any offers above the offer cap."
  - id: e32
    source: np-22q
    locator: "Attachment Q, D. ERS Expenditure Limit"
    quote: "ERCOT will allocate the $75 million available expenditure within its ERS program year, which starts with the December through March ERS Standard Contract Term and ends with the October through November ERS Standard Contract Term."
  - id: e33
    source: np-22q
    locator: "Attachment Q, D. ERS Expenditure Limit"
    quote: "ERCOT will assign a high (H), moderate (M), or low (L) risk designation to each ERS Time Period and will assign a risk-weighting factor (a value from 1 to 100 with 1 being the lowest risk value and 100 being the highest risk value) for each risk designation."
  - id: e34
    source: np-22q
    locator: "Attachment Q, E. Capacity Inflection Point"
    quote: "The capacity inflection point establishes the point on the capacity demand curve where capacity can only be procured at an offer price less than the ERS Time Period offer cap while respecting the expenditure limit for that ERS Time Period."
  - id: e47
    source: np-22q
    locator: "Attachment Q, E. Capacity Inflection Point, formula"
    quote: "CapInflectionPoint_(TP) = ExpenditureLimit_(TP) ÷ [# hrs_(TP)×OfferCap]"
  - id: e48
    source: np-22q
    locator: "Attachment Q, F. Clearing Price"
    quote: "The highest offer accepted for an ERS Time Period from will set the clearing price for all ERS Resources cleared in that ERS Time Period. All ERS service types specified in the Protocols will be procured using a common ERS capacity demand curve for each ERS Time Period and the highest offer accepted for an ERS Time Period will set the clearing price for all ERS service types."
  - id: e49
    source: np-22q
    locator: "Attachment Q, F. Clearing Price"
    quote: "If the procurement of all offers at the same price for an ERS Time Period would exceed the ERS Expenditure Limit for that ERS Time Period, ERCOT shall consider each such offer in an order established at random."
  - id: e50
    source: np-22q
    locator: "Attachment Q, D. ERS Expenditure Limit"
    quote: "Any funds remaining at the end of an ERS program year will not be carried forward into a new ERS program year."
  - id: e35
    source: np-06
    locator: "Section 6.6.11.2, Emergency Response Service Capacity Charge, paragraph (1)"
    quote: "ERCOT shall allocate costs for an ERS service type and ERS Contract Period based on the LRS of each QSE during each ERS Time Period in an ERS Contract Period. A QSE’s LRS for an ERS Time Period shall be the QSE’s total Load for the ERS Time Period divided by the total ERCOT Load in the ERS Time Period."
  - id: e36
    source: puct-25-507
    locator: "16 TAC 25.507(e)(1)"
    quote: "ERCOT must make a payment to each QSE representing an ERS resource on an as-bid basis, a market clearing price mechanism, or such other mechanism as ERCOT deems appropriate, subject to modifications determined by ERCOT based on the ERS resource’s availability during an ERS standard contract term and the ERS resource’s performance in any deployment event."
  - id: e37
    source: np-08
    locator: "Section 8.1.3.3.1, Suspension of Qualification of Non-Weather-Sensitive ERS Resources, paragraph (1)"
    quote: "If a QSE’s portfolio-level availability factor and event performance factors as calculated in Section 8.1.3.3.3, Performance Criteria for Qualified Scheduling Entities Representing Non Weather-Sensitive Emergency Response Service Resources, both equal or exceed 0.95, the QSE will be deemed to have met its ERS performance requirements for the ERS Contract Period, and the QSE and its ERS Resources are not subject to suspension."
  - id: e38
    source: np-08
    locator: "Section 8.1.3.1.4, Event Performance Criteria, paragraph (3)(a)"
    quote: "The ramp period for ERS Resources in ERS-10 is ten minutes. The ramp period for ERS Resources in ERS-30 is 30 minutes."
  - id: e39
    source: np-08
    locator: "Section 8.1.3.1.4, paragraph (3)(c)(i)"
    quote: "The ERSEPF is computed as the time-weighted arithmetic average of the EIPFs for the Sustained Response Period."
  - id: e40
    source: np-08
    locator: "Section 8.1.3.1.4, paragraph (1)"
    quote: "No later than 45 days after the end of an ERS Standard Contract Term in which one or more ERS deployment events occurred, ERCOT shall provide each QSE representing ERS Resources with an event performance report containing the results of ERCOT’s evaluation of the event(s)."
  - id: e41
    source: imm-som-2025
    locator: "page 54 (OCR), Demand and Supply in ERCOT, 4. Emergency Reserve Service"
    quote: "For the 2025 program year (December 2024 through November 2025), ERCOT procured an average of 1,666 MW per hour, a 45% increase from 2024, at an average clearing price of $4.36 per MWh, a 41% decrease from the prior year. The increase in ERS procurement volume and the decrease in the ERS clearing price likely reflect the influx of cryptocurrency mining facilities into the program."
  - id: e42
    source: imm-som-2025
    locator: "page 54 (OCR), Demand and Supply in ERCOT, 4. Emergency Reserve Service"
    quote: "First, cryptocurrency mines that were previously registered as CLRs have migrated to the ERS program and are no longer price-responsive in SCED. Second, because cryptocurrency mines are fundamentally price sensitive, allowing them to provide ERS essentially pays them to do what they would already do, i.e., curtail when system conditions are tight and energy prices are high. We recommend that ERCOT change ERS eligibility or performance criteria to shift cryptocurrency mines out of the program and incentivize them to register as CLRs."
  - id: e43
    source: imm-som-2021
    locator: "page 68 (OCR), Reliability Programs"
    quote: "During Winter Storm Uri in February 2021, the majority of the ERS fleet was deployed and exhausted within 12 hours of deployment."
  - id: e44
    source: imm-som-2022
    locator: "page 65 (OCR), Reliability Programs"
    quote: "In October 2021, the Commission directed ERCOT to change the deployment of ERS and this was enacted in protocols via NPRR1106."
  - id: e45
    source: puct-25-507
    locator: "16 TAC 25.507(d)(11)"
    quote: "A resource with a pre-existing obligation to provide ERS may submit a proposal to serve as an alternative to a resource subject to reliability must-run (RMR) service for the same period."
  - id: e46
    source: puct-25-507
    locator: "16 TAC 25.507(d)(1)-(2)"
    quote: "An ERS resource must be represented by a qualified scheduling entity (QSE). (2) Offers must be submitted to ERCOT through a QSE."
  - id: e51
    source: imm-som-2023
    locator: "page 67 (OCR), Reliability Programs"
    quote: "ERS was deployed twice in 2023 — once on August 17 and again on September 6 when ERCOT’s PRC dropped below 3,000 MW."
  - id: e52
    source: imm-som-2025
    locator: "page 49 (OCR), shortage conditions"
    quote: "In addition, ERCOT has not deployed ERS system wide since September 6, 2023, which was the result of transmission-related contingencies rather than insufficient capacity."
  - id: e53
    source: ercot-resource-adequacy-dr-2026-04
    locator: "Item 11.1, resource adequacy and demand response presentation (April 2026), ERS discussion"
    quote: "ERCOT has identified instances where extremely price-responsive ERS Resources self-deploy in response to high prices. If not addressed, this behavior could undermine the utility of the ERS product to the ERCOT system and drive ERS prices to inefficiently low levels."
  - id: e54
    source: ercot-ers-rfp-2026-12
    locator: "Section 2.2, Term of Service"
    quote: "This RFP seeks participants for Non-Weather-Sensitive ERS-30, Weather-Sensitive ERS-30, Non-Weather-Sensitive ERS-10 and Weather-Sensitive ERS-10 for the Standard Contract Term (SCT) beginning at Hour Ending 01:00 on December 1, 2026, through Hour Ending 24:00 on March 31, 2027."
  - id: e55
    source: ercot-ers-rfp-2026-12
    locator: "Cover page and Section 2.3.5, Offer and Pricing Information"
    quote: "Provide a single Hourly Capacity Price offer ($ per MW per Hour) for each Time Period within the Standard Contract Term. You may submit separate price offers for different Time Periods. Offers may not be “linked;” ERCOT will evaluate offers for each Time Period separately."
  - id: e56
    source: puct-25-507
    locator: "16 TAC 25.507(g), Reporting"
    quote: "ERCOT must review the effectiveness and benefits of ERS and report its findings to the commission annually by April 15 of each calendar year."
  - id: e57
    source: puct-25-507
    locator: "16 TAC 25.507(d)(8)"
    quote: "Deployment of an ERS resource must be limited to the number of hours for which the service was contracted, up to a maximum of 24 cumulative hours in an ERS contract period."
  - id: e58
    source: puct-25-507
    locator: "16 TAC 25.507(f)(2)"
    quote: "ERCOT must establish criteria for reducing a QSE’s payment, suspending a QSE from participation in ERS, or both, for failure to meet its ERS obligations, and must also establish criteria for subsequent reinstatement."
  - id: e60
    source: np-22q
    locator: "Attachment Q, G. ERS Capacity Provided Through ERS Self-Provision"
    quote: "For any ERS self-provision, ERCOT will reduce the Time Period expenditure limit for any offers to self-provide part or all of a QSE’s ERS Obligation by the clearing price for ERS."
  - id: e59
    source: np-03
    locator: "Section 3.14.3.3, paragraph (1)"
    quote: "If ERCOT deploys ERS, any ERS Resource that is contractually committed to provide the ERS service type deployed during the ERS Time Period that includes all or any part of the first interval of the Sustained Response Period must deploy."
---

## Definition

ERS is a special emergency service that ERCOT procures and deploys to help prevent or alleviate an actual or anticipated Energy Emergency Alert (EEA) event. [e1] The protocols define it as an emergency service and state that it is not an Ancillary Service. [e2] The Protocols give the goal as promoting reliability prior to and during energy emergencies. [e17]

## How it works

**Who can provide it.** An ERS resource is either a load (or an aggregation of loads) or a dispatchable generator that is not registered as a Generation Resource. [e3] It must be represented by a QSE, and offers go to ERCOT through a QSE. [e46] A weather-sensitive ERS Load must be either exclusively residential sites or exclusively non-residential sites that qualify under the regression baseline evaluation. [e18] The minimum offer is 0.5 MW for an ERS Load on the weather-sensitive baseline and 0.1 MW for all other ERS capacity offers, and ERS Resources may be aggregated to reach it. [e19]

**What is bought.** ERCOT issues requests for proposals for four standard contract terms (December through March, April and May, June through September, October and November) and buys from four service types: weather-sensitive or non-weather-sensitive, each as ERS-10 or ERS-30. [e4][e5] A QSE may offer one resource into any or all four service types, but ERCOT awards only one service type per ERS Resource. [e20] The December 2026 RFP, for example, covers December 1, 2026 through March 31, 2027, and asks for a single hourly capacity price in $ per MW per hour for each Time Period, with Time Periods evaluated separately and not linked. [e54][e55] The ERS-10 or ERS-30 number is the response time: ten minutes or 30 minutes from the ERCOT Dispatch Instruction, held for the entire Sustained Response Period. [e26] The ramp periods are likewise ten minutes for ERS-10 and 30 minutes for ERS-30. [e38]

**Exclusivity.** A QSE must affirm that no offered capacity from any site has been or will be committed to any other product, service or program in the same hours, and the list expressly includes Ancillary Services, SCED and TDSP standard offer programs. [e24] The same rule appears from the other direction: contracted ERS capacity may not be used for Ancillary Services during a contracted ERS Time Period, without limiting passive (voluntary) Load response if the resource still meets its performance and availability requirements. [e27]

**Procurement mechanics (Attachment Q).** ERCOT builds a capacity demand curve for each ERS Time Period, procures all ERS products together within the limits of that curve, and maximizes MW procured subject to the Time Period's expenditure limit. [e30] The ERS offer cap in the December 5, 2025 version of Attachment Q is $80/MW/hr for every Time Period in the program year, and offers above it are rejected automatically. [e31] The $75 million is allocated across the program year, which runs from the December through March term to the October through November term. [e32] ERCOT assigns each Time Period a high, moderate or low risk designation and a risk-weighting factor from 1 to 100. [e33] The capacity inflection point is where capacity can only be procured below the offer cap while respecting the expenditure limit. [e34] The highest accepted offer for a Time Period sets one clearing price for every ERS service type in that Time Period, and if offers at the same price would exceed the limit they are considered in random order. [e48][e49] Funds not used by the end of a program year are not carried forward. [e50]

**Contract periods and obligations.** Resources are obligated for 24 hours of cumulative deployment time in each Contract Period of the December through March term and 12 hours in each Contract Period of every other term. [e21] When a service type's obligations are exhausted, that Contract Period ends at the end of the Operating Day of exhaustion. [e22] ERCOT may then renew the obligations of resources that opted in during the offer process, and that election is irrevocable once committed, except that a QSE may revoke it by the end of the second Business Day of a renewal Contract Period (paragraph (iv)). [e23][e15] Deployment is also limited by the PUCT rule to the contracted hours, up to a maximum of 24 cumulative hours in an ERS contract period. [e57]

**Deployment.** When PRC falls below 3,000 MW and is not projected to recover above 3,000 MW within 30 minutes following the deployment of Non-Spin, ERCOT may deploy available contracted ERS-10 and ERS-30 via an XML message. [e6] A pending change (NPRR1238, to take effect upon system implementation) would change the 30-minute test to run from the deployment of Non-Spin and all VECL. [e16] After release, a deployed resource must be able to return to a condition capable of meeting its performance requirements within ten hours. [e28] The IMM's 2022 report says the PRC-based deployment trigger came from a PUCT direction in October 2021, enacted in the Protocols as NPRR1106. [e44]

**Self-provision.** A QSE may self-provide all or part of its ERS obligation on a schedule ERCOT publishes, and ERCOT reduces the Time Period expenditure limit by the clearing price for those self-provision offers. [e29][e60]

**Payment, charges and performance.** The PUCT rule has ERCOT pay each QSE as-bid, by market clearing price or another mechanism, adjusted for availability and event performance. [e36] Deployment itself brings no additional ERS payment beyond whatever the QSE earns through Real-Time energy imbalance or other Settlement. [e25] The charge is allocated by load ratio share, where a QSE's share for a Time Period is its total Load divided by total ERCOT Load in that Time Period. [e35] Performance is measured from 15-minute interval data: the event performance factor is the time-weighted average of interval performance factors over the Sustained Response Period. [e39] A QSE whose portfolio availability and event performance factors both equal or exceed 0.95 is deemed to have met its requirements for the Contract Period and is not subject to suspension. [e37] ERCOT must send each QSE an event performance report within 45 days after the end of a term in which a deployment occurred. [e40] ERCOT must report on ERS effectiveness to the PUCT each year by April 15. [e56]

## Formula

The Protocols give two simple formulas in Attachment Q, both in words below. The expenditure limit for a Time Period is the funds determined for allocation in the program year multiplied by that Time Period's allocation factor, which is its risk-weighting factor times its number of hours times the offer cap, divided by the sum of the same product over all Time Periods. [e32][e33] The capacity inflection point for each Time Period is then its expenditure limit divided by the number of hours in the Time Period times the offer cap: [e47]

`CapInflectionPoint_(TP) = ExpenditureLimit_(TP) ÷ [# hrs_(TP)×OfferCap]` [e47]

Read it as: the MW that could be bought for every hour of the Time Period at the offer cap and still stay within the Time Period's budget. [e34]

## ERCOT context

The IMM describes ERS as an auction in which industrial and commercial consumers offer to be curtailed. For the 2024 program year ERCOT procured an average of 1,147 MW per hour at an average clearing price of $7.36 per MWh. [e9] For the 2025 program year (December 2024 through November 2025) the average was 1,666 MW per hour, up 45%, at $4.36 per MWh, down 41%, and the IMM says this likely reflects the influx of cryptocurrency mining facilities. [e41] By the end of 2025, cryptocurrency mining operations accounted for more than half of all ERS capacity. [e10]

The IMM gives two reasons that is a problem: crypto mines that were registered as CLRs have migrated to ERS and are no longer price-responsive in SCED, and paying a price-sensitive load to curtail pays it to do what it would already do. The IMM recommends changing ERS eligibility or performance criteria to shift crypto mines out and encourage CLR registration. [e42] ERCOT staff raised a related concern in April 2026: extremely price-responsive ERS Resources self-deploy in response to high prices, which could undermine the product and drive ERS prices to inefficiently low levels. [e53]

ERS deployments: the IMM counts nine events since inception, the most recent in September 2023. [e9] That year ERS was deployed on August 17 and September 6 when PRC fell below 3,000 MW. [e51] There were no ERS deployments in 2024. [e12] The IMM's 2025 report says ERCOT has not deployed ERS system wide since September 6, 2023, a deployment it attributes to transmission-related contingencies rather than insufficient capacity. [e52] In Winter Storm Uri the majority of the ERS fleet was deployed and exhausted within 12 hours. [e43]

The IMM lists ERS among out-of-market products and argues that such programs compensate entities outside the energy and ancillary service markets, which will sharply reduce the expected shortage revenues that investors need. [e11][e13]

## Key facts

- ERS is not an Ancillary Service; it is deployed to prevent or alleviate an EEA event. [e2]
- Four standard contract terms and four service types (weather-sensitive or not, ERS-10 or ERS-30). [e4][e5]
- Spending cap: $75 million in a 12-month period unless the PUCT decides otherwise, plus up to $25 million for renewals when ERS has been exhausted. [e7][e15]
- Offer cap in Attachment Q (December 5, 2025 version): $80/MW/hr. [e31]
- Obligated deployment time per Contract Period: 24 hours in the December through March term, 12 hours in the other terms. [e21]
- Deployment may follow PRC below 3,000 MW and Non-Spin deployment. [e6]
- 2024 program year: average 1,147 MW per hour at $7.36 per MWh; 2025 program year: average 1,666 MW per hour at $4.36 per MWh. [e9][e41]
- Last system-wide deployment per the IMM: September 6, 2023. [e52]

## Timeline

- February 2021: Winter Storm Uri; the majority of the ERS fleet was deployed and exhausted within 12 hours. [e43]
- October 2021: the PUCT directed ERCOT to change ERS deployment, enacted via NPRR1106 (per the IMM's 2022 report). [e44]
- 2023: ERS deployed on August 17 and September 6. [e51]
- 2024: no ERS deployments in the calendar year. [e12]
- December 2025 version of Attachment Q: offer cap of $80/MW/hr. [e31]
- December 1, 2026 to March 31, 2027: the term covered by the RFP issued in the saved RFP document. [e54]

## Say it like this

(Guidance) ERS is an emergency product: ERCOT contracts loads and dispatchable generators not registered as Generation Resources for set contract terms [e3][e4] and may deploy them when PRC is low, to help prevent or alleviate an EEA event. [e1][e6] It is not an Ancillary Service, it clears at one price per Time Period, and the cost is charged to QSEs by load ratio share. [e2][e48][e35]

## Common confusion

ERS is not a normal ancillary service, and the protocols say so. [e2] The "10" and "30" are response times, not MW or hours. [e26] ERS capacity is exclusive: the contracted capacity cannot also be committed to other products or programs in the same hours. [e24] And a deployment does not pay extra: deployment brings no additional ERS payment. [e25]

## Questions

### What triggers an ERS deployment?

ERCOT may deploy ERS when PRC is below 3,000 MW and not projected to recover above 3,000 MW within 30 minutes after Non-Spin deployment. [e6] The purpose is to prevent or alleviate an actual or anticipated EEA event. [e1]

### Who pays for ERS, and how is it split?

ERCOT charges each QSE based on its load ratio share, which is its total Load divided by total ERCOT Load in the Time Period. [e8][e35] The total is within a $75 million 12-month spending cap unless the PUCT decides otherwise (with up to $25 million more allowed for renewals when ERS has been exhausted). [e7][e15]

### How does ERCOT decide the clearing price?

It builds a demand curve per Time Period capped by an offer cap and a budget for that Time Period, and the highest accepted offer sets one price for all four service types. [e30][e31][e48] The budget is allocated across Time Periods using a risk-weighting factor. [e33]

### Why does the IMM criticise out-of-market programs like ERS?

The IMM argues programs like ERS compensate entities outside the energy and ancillary service markets to add supply or reduce demand in tight conditions, which will sharply reduce the expected shortage revenues investors need to build or keep dispatchable generation. [e11][e13]

### Why is crypto mining participation in ERS a concern?

The IMM says crypto mines that migrated from CLR registration are no longer price-responsive in SCED, and that paying them to curtail essentially pays them to do what they would already do. [e42] ERCOT staff separately flagged self-deployment by price-responsive ERS Resources as a risk to the product and to ERS prices. [e53]

### What happens when ERS obligations are used up in a contract period?

The Contract Period for that service type ends at the end of the Operating Day of exhaustion, and ERCOT can renew obligations for resources that opted in, within the extra $25 million the PUCT rule allows for renewals when ERS has been exhausted. [e22][e23][e15]

### What if an ERS portfolio misses its performance factor?

If portfolio availability and event performance factors are both at least 0.95 the QSE is not subject to suspension. [e37] Otherwise ERCOT may reduce payments or suspend the QSE under Section 8.1.3.3, and the PUCT rule requires ERCOT to set criteria for payment reductions and suspension. [e37][e58]

## Scenarios

### PRC drops below 3,000 MW in an August evening and Non-Spin is already deployed. What happens to ERS?

- ERCOT may deploy contracted ERS-10 and ERS-30 by XML message. [e6]
- Each resource contracted for the deployed service type in a Time Period covering the first interval of the Sustained Response Period must deploy. [e59]
- ERS-10 resources must perform within ten minutes and ERS-30 within 30 minutes, and hold for the whole Sustained Response Period. [e26]
- The QSE earns its ERS capacity payment but no extra deployment payment. [e25]

## Open items

- Resolved 2026-11-21: Sections 3.14.3.1 to 3.14.3.4, Attachment Q and 25.507 procurement, payment and performance mechanics are now covered. Not covered: the baseline methodologies in 8.1.3.1.1 and the full test rules in 8.1.3.2.
- The Attachment Q Table A and the RFP Appendix A table (offer cap, inflection point and expenditure limit per Time Period for the 2026-27 winter term) are images in the saved text, so the actual per-Time-Period numbers cannot be quoted.
- The clearing prices and MW for the 2026 program year (December 2025 to November 2026) are not in the saved sources.
- The ERS payment formula in np-06 Section 6.6.11.1 is garbled in the text copy, so it is described only through 25.507(e)(1).
- The IMM 2025 text spells the program "Emergency Reserve Service" in one place; this topic follows the rule and protocol name.
- The saved RFP gives the QSE offer price as a single hourly price per Time Period; whether the 2025 or 2026 clearing prices moved with the $80 offer cap is not sourced.
