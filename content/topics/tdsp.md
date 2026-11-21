---
id: tdsp
name: TDSP (Transmission & Distribution Service Provider)
aliases: [TDSP, TSP, DSP, TDU, Transmission and Distribution Utility, wires company]
kind: entity
domain: structure
level: 1
depth: deep
lenses: [analyst, retail, congestion]
as_of: 2026-11-21
links:
  - to: rep
    type: contrasts-with
    note: A TDU may not sell electricity, while a REP sells at retail but may not own generation. [e6][e7]
  - to: lse
    type: contrasts-with
    note: TSPs and DSPs register with ERCOT as a TSP or DSP, under a registration section separate from the LSE registration. [e4]
  - to: noe
    type: related
    note: MOUs and ECs are included in the registration requirement for TSPs and DSPs, though the PUCT TDU definition excludes them. [e4][e5]
  - to: esi-id
    type: related
    note: A DSP owns or operates the Distribution System that delivers energy to Customers. [e3]
  - to: ams-meters
    type: related
    note: PURA assigns metering to the TDU in the default case, and PUCT rule 25.130 applies to all electric utilities including TDUs. [e8][e31]
  - to: retail-choice
    type: part-of
    note: From January 1, 2002 a TDU must provide transmission or distribution service to REPs and others on comparable terms. [e9]
  - to: four-cp
    type: related
    note: A TSP's transmission rate is its cost of service divided by the average of ERCOT coincident peak demand for June to September (4CP), and each DSP is charged on its 4CP demand. [e15]
  - to: large-load-interconnection
    type: related
    note: PURA requires the PUCT's SB 6 large load standards to set a flat study fee of at least $100,000 payable to the interconnecting utility for initial transmission screening studies. [e42]
  - to: mass-transition
    type: related
    note: A Mass Transition includes moving ESI IDs from one TDSP to another. [e13]
  - to: load-shed
    type: related
    note: PURA directs the PUCT to require TDUs (and cooperatives and municipally owned utilities) providing transmission service in ERCOT to submit critical load designations and a load shedding plan. [e44]
  - to: sb6
    type: related
    note: SB 6 directs the PUCT to evaluate the 4CP method used to charge transmission costs to distribution providers. [e51]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Transmission and/or Distribution Service Provider (TDSP)"
    quote: "An Entity that is a TSP, a DSP or both, or an Entity that has been selected to own and operate Transmission Facilities and has a PUCT approved code of conduct in accordance with P.U.C. SUBST. R. 25.272, Code of Conduct for Electric Utilities and Their Affiliates."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Transmission Service Provider (TSP)"
    quote: "An Entity under the jurisdiction of the PUCT that owns or operates Transmission Facilities used for the transmission of electricity and provides Transmission Service in the ERCOT Transmission Grid."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Distribution Service Provider (DSP)"
    quote: "An Entity that owns or operates a Distribution System for the delivery of energy from the ERCOT Transmission Grid to Customers."
  - id: e4
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT. To register as a TSP or DSP, an Entity must comply with the backup plan requirements in the Operating Guides, execute a Standard Form Market Participant Agreement (using the form provided in Section 22, Attachment A, Standard Form Market Participant Agreement), designate TSP or DSP Authorized Representatives, contacts, and a User Security Administrator (USA) (per Section 23, Form J, Transmission and/or Distribution Service Provider Application for Registration), and be capable of performing the functions of a TSP or DSP, as applicable, as described in these Protocols."
  - id: e5
    source: puct-25-5
    locator: "Section 25.5, definition of Transmission and distribution utility (TDU)"
    quote: "but does not include a municipally owned utility or an electric cooperative. The TDU may be a single utility or may be separate transmission and distribution utilities."
  - id: e6
    source: pura-39
    locator: "PURA Sec. 39.105(a)"
    quote: "After January 1, 2002, a transmission and distribution utility may not sell electricity or otherwise participate in the market for electricity except for the purpose of buying electricity to serve its own needs."
  - id: e7
    source: puct-25-5
    locator: "Section 25.5, definition of Retail electric provider (REP)"
    quote: "A person that sells electric energy to retail customers in this state. A retail electric provider may not own or operate generation assets."
  - id: e8
    source: pura-39
    locator: "PURA Sec. 39.107(a)"
    quote: "On introduction of customer choice in a service area, metering services for the area shall continue to be provided by the transmission and distribution utility affiliate of the electric utility that was serving the area before the introduction of customer choice. Metering services provided to commercial and industrial customers that are required by the independent system operator to have an interval data recorder meter may be provided on a competitive basis."
  - id: e9
    source: pura-39
    locator: "PURA Sec. 39.203(a)"
    quote: "In addition, on and after January 1, 2002, a transmission and distribution utility shall provide transmission or distribution service, or both, at retail to an electric utility, a retail electric provider, a municipally owned utility, an electric cooperative, or an end-use customer at rates, terms of access, and conditions that are comparable to those that apply to the transmission and distribution utility and its affiliates."
  - id: e10
    source: np-16
    locator: "Section 16.4(2)"
    quote: "DSPs operating within portions of Texas in areas where Customer Choice is in effect (including opt-in MOUs and opt-in co-ops) must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, before starting operations with ERCOT."
  - id: e11
    source: np-02
    locator: "Section 2.1, definition of Transmission Operator (TO)"
    quote: "A Transmission and/or Distribution Service Provider (TDSP) designated by itself or another TDSP for purposes of communicating with ERCOT and taking action to preserve reliability of a particular portion of the ERCOT System, as provided in the ERCOT Protocols or Other Binding Documents."
  - id: e12
    source: np-02
    locator: "Section 2.1, definition of Substantiated Load"
    quote: "Load submitted by a Transmission and/or Distribution Service Provider (TDSP) for planning purposes that is substantiated by any of the following: (a) An executed interconnection or other agreement; (b) An independent third-party load forecast that has been deemed credible by ERCOT and that may include load for which a TDSP has yet to sign an interconnection agreement; or (c) A letter from a TDSP officer attesting to such load, which may include load for which a TDSP has yet to sign an interconnection agreement."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Mass Transition"
    quote: "The transition of Electric Service Identifiers (ESI IDs) from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in a quantity or within a timeframe identified by Applicable Legal Authority."
  - id: e14
    source: puct-25-192
    locator: "16 TAC §25.192(a), Tariffs (version effective 12/20/22)"
    quote: "(a) Tariffs. Each transmission service provider (TSP) shall file a tariff for transmission service to establish its rates and other terms and conditions and shall apply its tariffs and rates on a non-discriminatory basis. The tariff shall apply to all distribution service providers (DSPs) and any entity scheduling the export of power from the Electric Reliability Council of Texas (ERCOT) region. The tariff shall not apply to any entity engaging in wholesale storage as described by §25.501(m) of this title (relating to Wholesale Market Design for the Electric Reliability Council of Texas) (storage entity)."
  - id: e15
    source: puct-25-192
    locator: "16 TAC §25.192(b)(1), Charges for transmission service delivered within ERCOT"
    quote: "(1) A TSP’s transmission rate shall be calculated as its commission-approved transmission cost of service divided by the average of ERCOT coincident peak demand for the months of June, July, August and September (4CP), excluding the portion of coincident peak demand attributable to wholesale storage load. A TSP’s transmission rate shall remain in effect until the commission approves a new rate. The TSP’s annual rate shall be converted to a monthly rate. The monthly transmission service charge to be paid by each DSP is the product of each TSP’s monthly rate as specified in its tariff and the DSP’s previous year’s average of the 4CP demand that is coincident with the ERCOT 4CP."
  - id: e16
    source: puct-25-192
    locator: "16 TAC §25.192(c)(1)(A), Transmission cost of service"
    quote: "(A) power lines, substations, reactive devices, and associated facilities, operated at 60 kilovolts or above, including radial lines operated at or above 60 kilovolts, except the step-up transformers and a protective device associated with the interconnection from a generating station to the transmission network;"
  - id: e17
    source: puct-25-192
    locator: "16 TAC §25.192, Billing units paragraph (subsection lettering is garbled in the saved text)"
    quote: "No later than December 1 of each year, ERCOT shall determine and file with the commission the current year’s average 4CP demand for each DSP, or the DSP’s agent for transmission service billing purposes, as appropriate, excluding the portion of coincident peak demand attributable to wholesale storage load. This demand shall be used to bill transmission service for the next year."
  - id: e18
    source: puct-25-193
    locator: "16 TAC §25.193(a), Application"
    quote: "The provisions of this section apply to all investor-owned distribution service providers (DSPs) providing distribution service within the Electric Reliability Council of Texas (ERCOT) region to retail electric providers and other customers of the distribution system."
  - id: e19
    source: puct-25-193
    locator: "16 TAC §25.193(b)(1), TCRF authorized"
    quote: "(1) A DSP subject to this section that is billed for transmission service by a transmission service provider (TSP) pursuant to §25.192 of this title (relating to Transmission Service Rates) shall be allowed to include within its tariff a TCRF clause that authorizes the DSP to charge or credit its customers for the amount of wholesale transmission cost changes approved or allowed by the commission to the extent that such costs vary from the transmission service cost utilized to fix the base rates of the DSP. The DSP shall update its TCRF twice per year on March 1 and September 1 to pass through the wholesale transmission cost changes billed by a TSP."
  - id: e20
    source: puct-25-193
    locator: "16 TAC §25.193(c), TCRF Formula, variable definitions"
    quote: "NWTRi is the new wholesale transmission rate of a TSP, approved by the commission by order or pursuant to commission rules, since the DSP’s last rate case; BWTRi is the base wholesale transmission rate of the TSP represented in the NWTRi, used to develop the retail transmission charges of the DSP in the DSP’s last rate case; NLi is the DSP’s individual 4CP load component of the total ERCOT 4CP load information used to develop the NWTRi;"
  - id: e21
    source: puct-25-193
    locator: "16 TAC §25.193(c), TCRF Formula, variable ALLOC"
    quote: "ALLOC is the class allocator approved by the commission to allocate the transmission revenue requirement among classes in the DSP’s last rate case, unless otherwise ordered by the commission"
  - id: e22
    source: puct-25-193
    locator: "16 TAC §25.193(b)(2), cap on TCRF recovery"
    quote: "In no event shall a DSP’s TCRF clause result in the DSP recovering more than its actual cost of wholesale transmission service included in the TCRF."
  - id: e23
    source: puct-25-195
    locator: "16 TAC §25.195(d), Transmission service provider responsibilities"
    quote: "The TSP must plan, construct, operate, and maintain its transmission system in accordance with good utility practice to provide transmission service customers with transmission service over its transmission system in accordance with Division 1 of this subchapter"
  - id: e24
    source: puct-25-195
    locator: "16 TAC §25.195(c), Interconnection agreement"
    quote: "As a condition of obtaining transmission service, a transmission service customer that owns electrical facilities in the ERCOT region must execute an interconnection agreement with the TSP to which it is physically interconnected."
  - id: e25
    source: puct-25-195
    locator: "16 TAC §25.195(e), Construction of new facilities"
    quote: "If new transmission facilities or interconnections between TSPs are needed to provide transmission service in response to a request for such service, the TSPs must construct or acquire transmission facilities necessary to provide the transmission service in accordance with good utility practice, unless ERCOT identifies an alternative means of providing the transmission service that is less costly, is operationally sound, and is as effective as the new transmission facilities would be at providing the requested transmission service."
  - id: e26
    source: puct-25-195
    locator: "16 TAC §25.195(f), deposit or security"
    quote: "An affected TSP may require the transmission service customer to pay a reasonable deposit or provide another means of security, to cover the costs of planning, licensing, and constructing any new transmission facilities that will be required in order to provide the requested service."
  - id: e27
    source: puct-25-272
    locator: "16 TAC §25.272(a), Purpose"
    quote: "The provisions of this section establish safeguards to govern the interaction between utilities and their affiliates, both during the transition to and after the introduction of competition, to avoid potential market-power abuses and cross-subsidization between regulated and unregulated activities."
  - id: e28
    source: puct-25-272
    locator: "16 TAC §25.272(d), Separation of a utility from its affiliates"
    quote: "A utility shall be a separate, independent entity from any competitive affiliate. Sharing of employees, facilities, or other resources. Except as otherwise allowed in (2) paragraphs (3), (4), (5), or (7) of this subsection, a utility shall not share employees, facilities, or other resources with its competitive affiliates unless the utility can prove to the commission prior to such sharing that the sharing will not compromise the public interest."
  - id: e29
    source: puct-25-272
    locator: "16 TAC §25.272(c)(4), Corporate support services"
    quote: "Examples of services that may not be shared include engineering, purchasing of electric transmission facilities and service, transmission and distribution system operations, and marketing, unless such services are provided by a utility, or a separate affiliate created to perform such services, exclusively to affiliated regulated utilities and only for provision of regulated utility services."
  - id: e30
    source: puct-25-272
    locator: "16 TAC §25.272(c)(3), Confidential information"
    quote: "Confidential information includes but is not limited to information relating to the interconnection of customers to a utility’s transmission or distribution systems, proprietary customer information, trade secrets, competitive information relating to internal manufacturing processes, and information about a utility’s transmission or distribution system, operations, or plans for expansion."
  - id: e31
    source: puct-25-130
    locator: "16 TAC §25.130(b), Applicability"
    quote: "(b) Applicability. This section is applicable to all electric utilities, including transmission and distribution utilities. Any requirement applicable to an electric utility in this section that relates to retail electric providers (REPs) or REPs of record is applicable only to electric utilities operating in areas open to customer choice."
  - id: e32
    source: puct-25-130
    locator: "16 TAC §25.130(c)(5), Web portal definition"
    quote: "Web portal --The website made available on the internet in compliance with this section by an electric utility or a group of electric utilities through which secure, read-only access to AMS usage data is made available to the customer, the customer’s REP of record, and entities authorized by the customer."
  - id: e33
    source: puct-25-130
    locator: "16 TAC §25.130(d)(1), Deployment and use of advanced meters"
    quote: "(1) Deployment and use of an AMS by an electric utility is voluntary unless otherwise ordered by the commission. However, deployment and use of an AMS for which an electric utility seeks a surcharge for cost recovery must be consistent with this section"
  - id: e34
    source: puct-25-211
    locator: "16 TAC §25.211(a), Application (distributed generation interconnection)"
    quote: "Unless the context indicates otherwise, this section and §25.212 of this title (relating to Technical Requirements for Interconnection and Parallel Operation of On-Site Distributed Generation) apply to an electric utility for all purposes except to the extent preempted by federal law. The only part of this section that applies to electric cooperatives is subsection (o) of this section."
  - id: e35
    source: pura-35
    locator: "PURA Sec. 35.004(a)-(b), Provision of Transmission Service"
    quote: "(a) An electric utility or transmission and distribution utility that owns or operates transmission facilities shall provide wholesale transmission service at rates and terms, including terms of access, that are comparable to the rates and terms of the utility's own use of its system.(b) The commission shall ensure that an electric utility or transmission and distribution utility provides nondiscriminatory access to wholesale transmission service for qualifying facilities, exempt wholesale generators, power marketers, power generation companies, retail electric providers, and other electric utilities or transmission and distribution utilities."
  - id: e36
    source: pura-35
    locator: "PURA Sec. 35.004(c), cost recovery for third-party transmission service"
    quote: "(c) When an electric utility, electric cooperative, or transmission and distribution utility provides wholesale transmission service within ERCOT at the request of a third party, the commission shall ensure that the utility recovers the utility's reasonable costs in providing wholesale transmission services necessary for the transaction from the entity for which the transmission is provided so that the utility's other customers do not bear the costs of the service."
  - id: e37
    source: pura-36
    locator: "PURA Sec. 36.003(a)-(b), Just and Reasonable Rates"
    quote: "(a) The regulatory authority shall ensure that each rate an electric utility or two or more electric utilities jointly make, demand, or receive is just and reasonable.(b) A rate may not be unreasonably preferential, prejudicial, or discriminatory but must be sufficient, equitable, and consistent in application to each class of consumer."
  - id: e38
    source: pura-36
    locator: "PURA Sec. 36.051, Establishing Overall Revenues"
    quote: "In establishing an electric utility's rates, the regulatory authority shall establish the utility's overall revenues at an amount that will permit the utility a reasonable opportunity to earn a reasonable return on the utility's invested capital used and useful in providing service to the public in excess of the utility's reasonable and necessary operating expenses."
  - id: e39
    source: pura-36
    locator: "PURA Sec. 36.210(a), Periodic Rate Adjustments"
    quote: "The commission, on the petition of an electric utility, may approve a tariff or rate schedule in which a nonfuel rate may be periodically adjusted upward or downward, based on changes in the parts of the utility's invested capital, as described by Section 36.053, that are categorized or functionalized as distribution plant, distribution-related intangible plant, and distribution-related communication equipment and networks in accordance with commission rules adopted after consideration of the uniform system of accounts prescribed by the Federal Energy Regulatory Commission."
  - id: e40
    source: pura-36
    locator: "PURA Sec. 36.210(b)-(c), Periodic Rate Adjustments"
    quote: "(b) An electric utility in the ERCOT power region, or an unbundled electric utility outside the ERCOT power region in whose service area retail competition is available, that requests a periodic rate adjustment under this section shall:(1) except as provided by Subsection (f)(3) and to the extent possible, implement simultaneously all nonfuel rates to be adjusted in a 12-month period that are charged by the utility to retail electric providers; and(2) provide notice to retail electric providers of the approved rates not later than the 45th day before the date the rates take effect.(c) A periodic rate adjustment approved under this section may not be used to adjust the portion of a nonfuel rate relating to the generation of electricity."
  - id: e41
    source: pura-37
    locator: "PURA Sec. 37.051(a), Certificate Required"
    quote: "(a) An electric utility may not directly or indirectly provide service to the public under a franchise or permit unless the utility first obtains from the commission a certificate that states that the public convenience and necessity requires or will require the installation, operation, or extension of the service."
  - id: e42
    source: pura-37
    locator: "PURA Sec. 37.0561(f), Planning for and interconnection of large loads"
    quote: "(f) The standards must set a flat study fee of at least $100,000 to be paid to the interconnecting electric utility or municipally owned utility for initial transmission screening studies for large loads subject to Subsection (c)."
  - id: e43
    source: pura-38
    locator: "PURA Sec. 38.005(a), Electric Service Reliability Measures"
    quote: "(a) The commission shall implement service quality and reliability standards relating to the delivery of electricity to retail customers by electric utilities and transmission and distribution utilities. The commission by rule shall develop reliability standards, including:(1) the system-average interruption frequency index (SAIFI);(2) the system-average interruption duration index (SAIDI);(3) achievement of average response time for customer service requests or inquiries; or(4) other standards that the commission finds reasonable and appropriate."
  - id: e44
    source: pura-38
    locator: "PURA Sec. 38.076(c)(2), Involuntary and Voluntary Load Shedding"
    quote: "(2) require electric cooperatives, municipally owned utilities, and transmission and distribution utilities providing transmission service in the ERCOT power region to submit to the commission and the independent organization certified under Section 39.151 for the region:(A) customers or circuits the cooperative or utility has designated as critical load; and(B) a plan for participating in load shedding in response to an involuntary load shedding event described by Subsection (a)."
  - id: e45
    source: pura-38
    locator: "PURA Sec. 38.079(a)-(b), Transmission and Distribution System Resiliency Plan"
    quote: "(b) An electric utility may file, in a manner authorized by commission rule, a plan to enhance the resiliency of the utility's transmission and distribution system through at least one of the following methods:(1) hardening electrical transmission and distribution facilities;(2) modernizing electrical transmission and distribution facilities;(3) undergrounding certain electrical distribution lines;(4) lightning mitigation measures;(5) flood mitigation measures;(6) information technology;(7) cybersecurity measures;(8) physical security measures;(9) vegetation management; or(10) wildfire mitigation and response."
  - id: e46
    source: pura-38
    locator: "PURA Sec. 38.079(e), plan decision deadline"
    quote: "(e) The commission shall issue an order to approve, modify, or deny a plan filed under Subsection (b) and any associated rider described by Subsection (i) not later than the 180th day after the plan is filed with the commission. The commission may approve a plan only if the commission determines that approving the plan is in the public interest."
  - id: e47
    source: pura-38
    locator: "PURA Sec. 38.080(b), Wildfire Mitigation Plan"
    quote: "(b) An electric utility, municipally owned utility, or electric cooperative that owns a transmission or distribution facility in a wildfire risk area shall file with the commission a wildfire mitigation plan that includes the following:"
  - id: e48
    source: puct-25-5
    locator: "16 TAC §25.5(138), definition of Transmission and distribution utility (TDU)"
    quote: "Transmission and distribution utility (TDU) -- A person or river authority that owns, or operates for compensation in this state equipment or facilities to transmit or distribute electricity, except for facilities necessary to interconnect a generation facility with the transmission or distribution network, a facility not dedicated to public use, or a facility otherwise excluded from the definition of “electric utility”, in a qualifying power region certified under PURA §39.152, but does not include a municipally owned utility or an electric cooperative. The TDU may be a single utility or may be separate transmission and distribution utilities."
  - id: e49
    source: puct-25-5
    locator: "16 TAC §25.5(142), definition of Transmission service provider (TSP)"
    quote: "Transmission service provider (TSP) -- An electric utility, municipally-owned utility, or electric cooperative that owns or operates facilities used for the transmission of electricity."
  - id: e50
    source: ercot-resource-adequacy-dr-2026-04
    locator: "ERCOT demand response report, Table 11, Summer and Winter TDSP Load Management programs"
    quote: "Table 11: Summer and Winter TDSP Load Management programs Operational Hours Estimated Demand Savings (MW) Capacity* MW TDSP Program Duration AEP Texas** June 1-September 30 1-7pm* 20.7-40.3 35 CenterPoint June 1-November 30 24/7 138 137 Oncor June 1-November 30 24/7 101.9 106 TNMP June 1-September 30 1-7pm* 8.5 9"
  - id: e51
    source: sb6-89r
    locator: "SB 6 (2025), Section 6(a)(1) (.alt.txt)"
    quote: "(1) whether the current four coincident peak methodology used to calculate wholesale transmission rates ensures that all loads appropriately contribute to the recovery of an electric cooperative's, electric utility's, or municipally owned utility's costs to provide access to the transmission system; (2) whether alternative methods to calculate wholesale transmission rates would more appropriately assign the cost of providing access to and wholesale service from the transmission system, such as consideration of multiple seasonal peak demands, demand during different length daily intervals, or peak energy intervals;"
  - id: e52
    source: sb6-89r
    locator: "SB 6 (2025), Section 6(c) (.alt.txt)"
    quote: "(c) The Public Utility Commission of Texas shall begin the evaluation required under Subsection (a) of this section not later than the 90th day after the effective date of this Act. After completion of the evaluation project and not later than December 31, 2026, the commission shall amend commission rules to ensure that wholesale transmission charges appropriately assign costs for transmission investment."
  - id: e53
    source: puct-25-192
    locator: "16 TAC §25.192(c), Transmission cost of service"
    quote: "Transmission cost of service. The transmission cost of service for each TSP shall be based on the expenses in Federal Energy Regulatory Commission (FERC) expense accounts 560-573 (or accounts with similar contents or amounts functionalized to the transmission function) plus the depreciation, federal income tax, and other associated taxes, and the commission-allowed rate of return based on FERC plant accounts 350-359 (or accounts with similar contents or amounts functionalized to the transmission function), less accumulated depreciation and accumulated deferred federal income taxes, as applicable."
  - id: e54
    source: puct-25-193
    locator: "16 TAC §25.193(c), TCRF Formula, equation as saved (garbled layout)"
    quote: "{[∑ ( NWTRi * NLi ) − ∑ ( BWTRi * NLi )] * 1 / 2 * ALLOC} + ADJ BD"
  - id: e55
    source: puct-25-193
    locator: "16 TAC §25.193(c), TCRF Formula, ADJ definition"
    quote: "ADJ = adjustment to Rate Class TCRF; EXPp = transmission expenses not included in base rates for period p;"
  - id: e56
    source: puct-25-193
    locator: "16 TAC §25.193(c), TCRF Formula, BD definition"
    quote: "BD is each class’s billing determinant (kilowatt-hour (kWh), or kilowatt (kW), or kilovolt-ampere (kVa)) for the previous March 1 through August 31 period for the March 1 TCRF update, and for the previous September 1 through February 28 period for the September 1 TCRF update."
---

## Definition

A TDSP is an Entity that is a TSP, a DSP or both, or an Entity selected to own and operate Transmission Facilities that has a PUCT-approved code of conduct. [e1] A TSP owns or operates Transmission Facilities and provides Transmission Service in the ERCOT Transmission Grid, and a DSP owns or operates a Distribution System that delivers energy from the ERCOT Transmission Grid to Customers. [e2][e3]

## How it works

Each TSP and DSP in the ERCOT Region, including MOUs and ECs, must register with ERCOT. Registration means complying with Operating Guide backup plan requirements, signing a Standard Form Market Participant Agreement, designating authorized representatives, contacts and a User Security Administrator, and being capable of performing TSP or DSP functions. [e4]

DSPs in areas where Customer Choice is in effect, including opt-in MOUs and opt-in co-ops, must complete Retail Market Testing before starting operations with ERCOT. [e10]

Under PURA, a transmission and distribution utility must provide transmission or distribution service at retail to an electric utility, a REP, a municipally owned utility, an electric cooperative or an end-use customer, on rates, terms and conditions comparable to those applying to the utility and its affiliates. [e9] PURA also requires a utility that owns or operates transmission to provide wholesale transmission service on comparable terms and the PUCT to ensure nondiscriminatory access for qualifying facilities, exempt wholesale generators, power marketers, power generation companies, REPs and other utilities. [e35]

### The TSP: transmission service and rates

Each TSP must file a tariff for transmission service establishing its rates and terms and apply it on a non-discriminatory basis. The tariff applies to all DSPs and to any entity scheduling the export of power from ERCOT, but not to an entity engaging in wholesale storage as described in §25.501(m). [e14] A TSP's transmission cost of service is based on FERC expense accounts 560-573 and plant accounts 350-359 (or accounts with similar contents or amounts functionalized to transmission), plus depreciation, taxes and the commission-allowed return, less accumulated depreciation and deferred taxes. [e53] The rule deems certain facilities to be transmission facilities, including lines, substations and reactive devices operated at 60 kilovolts or above except step-up transformers and a protective device at the generating-station interconnection. [e16]

Responsibilities in the transmission service terms rule: the TSP must plan, construct, operate and maintain its system in accordance with good utility practice. [e23] A transmission service customer owning electrical facilities in ERCOT must execute an interconnection agreement with the TSP it is physically interconnected to. [e24] If new facilities are needed, the TSPs must construct or acquire them unless ERCOT identifies a less costly, operationally sound and equally effective alternative. [e25] A TSP may require a reasonable deposit or other security for the costs of planning, licensing and constructing new facilities. [e26] PURA says that when a utility provides wholesale transmission within ERCOT at a third party's request, the PUCT must ensure the utility recovers its reasonable costs from that third party so other customers do not bear them. [e36]

### The DSP: wires charges and the TCRF

DSPs pay transmission charges based on 4CP: see Formula below. [e15] The TCRF is the pass-through. A DSP that is billed for transmission service under §25.192 may include in its tariff a Transmission Cost Recovery Factor clause to charge or credit customers for wholesale transmission cost changes approved by the PUCT, to the extent they vary from the cost used to set base rates, and must update the TCRF twice a year on March 1 and September 1. [e19] This applies to investor-owned DSPs providing service in ERCOT to REPs and other customers of the distribution system. [e18] A TCRF cannot make the DSP recover more than its actual cost of wholesale transmission service included in the TCRF. [e22]

### Distribution rates

PURA requires rates to be just and reasonable and not unreasonably preferential, prejudicial or discriminatory. [e37] The regulatory authority sets overall revenues to give the utility a reasonable opportunity to earn a reasonable return on invested capital used and useful in service, above reasonable and necessary operating expenses. [e38] The PUCT may approve a tariff in which a nonfuel rate is periodically adjusted based on changes in distribution-related invested capital, which may not be used to adjust the generation portion of a nonfuel rate. [e39][e40] An ERCOT-area utility requesting such an adjustment must provide REPs notice of the approved rates not later than the 45th day before they take effect. [e40]

## ERCOT context

The PUCT definition of "TDU" covers a person or river authority that owns or operates for compensation in this state equipment or facilities to transmit or distribute electricity, in a qualifying power region, with exclusions for generator interconnection facilities and facilities not dedicated to public use, and it excludes a municipally owned utility or an electric cooperative. It may be a single utility or separate transmission and distribution utilities. [e48][e5] The PUCT's TSP definition is broader: an electric utility, municipally-owned utility or electric cooperative that owns or operates facilities used for transmission. [e49] ERCOT's registration requirement for TSPs and DSPs expressly includes MOUs and ECs that operate transmission or distribution. [e4]

Since January 1, 2002 a TDU may not sell electricity or otherwise participate in the electricity market except to buy electricity for its own needs. [e6] In customer-choice areas, metering stays with the TDU affiliate of the electric utility that served the area before choice began, with a competitive exception for interval-data-recorder customers that PURA describes. [e8]

### Separation from affiliates (code of conduct)

PUCT rule 25.272 sets safeguards on interaction between utilities and their affiliates to avoid market-power abuses and cross-subsidization between regulated and unregulated activities. [e27] A utility must be a separate, independent entity from any competitive affiliate, and may not share employees, facilities or other resources with competitive affiliates unless it proves to the PUCT beforehand that the sharing will not compromise the public interest, subject to the exceptions in the rule's other paragraphs. [e28] The rule's examples of services that may not be shared include engineering, purchasing of electric transmission facilities and service, transmission and distribution system operations, and marketing, unless the services are provided exclusively to affiliated regulated utilities and only for regulated utility services. [e29] Confidential information includes information relating to the interconnection of customers to a utility's transmission or distribution systems and information about the utility's system, operations or plans for expansion. [e30] The saved version of §25.272 is marked effective 6/26/14. [e27]

### Roles in the ERCOT Protocols and other rules

A Transmission Operator is a TDSP designated by itself or another TDSP to communicate with ERCOT and take action to preserve reliability of a particular portion of the ERCOT System. [e11] For planning, ERCOT's Substantiated Load is load submitted by a TDSP that is backed by an executed interconnection or other agreement, a credible third-party forecast, or a letter from a TDSP officer attesting to the load. [e12] A Mass Transition covers moving ESI IDs between CRs or from one TDSP to another in a quantity or timeframe identified by Applicable Legal Authority. [e13]

PUCT rule 25.130 on advanced metering applies to all electric utilities including TDUs, with REP-related requirements applying only in customer-choice areas, and deployment is voluntary unless the PUCT orders otherwise, although deployment for which a surcharge is sought must be consistent with the rule. [e31][e33] The rule's web portal gives the customer, the REP of record and authorized entities secure, read-only access to AMS usage data. [e32] PUCT rule 25.211 on on-site distributed generation interconnection applies to an electric utility for all purposes except to the extent preempted by federal law, and the only part of it that applies to electric cooperatives is subsection (o). [e34]

Reliability and resiliency duties under PURA: the PUCT must implement service quality and reliability standards for delivery by electric utilities and TDUs, including SAIFI and SAIDI. [e43] PURA directs the PUCT by rule to require TDUs providing transmission service in ERCOT (along with electric cooperatives and municipally owned utilities) to submit to the PUCT and ERCOT their designated critical load customers or circuits and a plan for participating in involuntary load shedding. [e44] An electric utility may file a resiliency plan with measures such as hardening, undergrounding, vegetation management and wildfire mitigation, and the PUCT must decide within 180 days of filing and may approve only if in the public interest. [e45][e46] A utility that owns transmission or distribution in a wildfire risk area must file a wildfire mitigation plan. [e47]

PURA Chapter 37 provides that an electric utility may not provide service to the public under a franchise or permit unless it first obtains a certificate of convenience and necessity from the PUCT; whether each TDSP type is an "electric utility" for this purpose is not shown in the saved text. [e41]

Examples of TDSPs: a table in ERCOT's April 2026 Board material (sourced to its 2025 Demand Response Report) lists TDSP load management programs for AEP Texas, CenterPoint, Oncor and TNMP. [e50]

## Formula

Transmission service charge to a DSP: a TSP's annual transmission rate is its commission-approved transmission cost of service divided by the average of ERCOT coincident peak demand for June, July, August and September (4CP), excluding coincident peak demand attributable to wholesale storage load, converted to a monthly rate; each DSP's monthly charge is the TSP's monthly rate times the DSP's previous year's average 4CP demand coincident with the ERCOT 4CP. [e15] The rate stays in effect until the PUCT approves a new one. [e15] ERCOT files each DSP's current-year average 4CP demand with the PUCT no later than December 1, and it is used to bill transmission service for the next year. [e17]

TCRF: the TCRF for each class is computed with a formula. As the saved text reads, the expression is {[sum over i of (NWTRi x NLi) minus sum over i of (BWTRi x NLi)] x 1/2 x ALLOC} + ADJ, with BD on the line below it; the layout is garbled, so whether BD divides the whole expression is not stated here. [e54] NWTRi is the new wholesale transmission rate of a TSP approved since the DSP's last rate case; BWTRi is the base wholesale transmission rate used to develop the DSP's retail transmission charges in its last rate case; NLi is the DSP's 4CP load component used to develop NWTRi. [e20] ALLOC is the class allocator approved in the DSP's last rate case, unless the PUCT orders otherwise. [e21] ADJ is the adjustment to the Rate Class TCRF, built from transmission expenses not included in base rates (EXPp) and TCRF revenue (REVp) by period. [e55] BD is each class's billing determinant (kWh, kW or kVA) for the previous March 1 through August 31 period for the March 1 update and the previous September 1 through February 28 period for the September 1 update. [e56]

## Key facts

- TDSP = TSP, DSP, or both. [e1]
- TSPs and DSPs, including MOUs and ECs in the ERCOT Region, must register with ERCOT. [e4]
- A TDU may not sell electricity after January 1, 2002 (other than buying for its own needs). [e6]
- TDUs must provide transmission or distribution service to REPs and others on comparable terms. [e9]
- DSPs in customer-choice areas must complete Retail Market Testing. [e10]
- Transmission charges to DSPs are based on the average 4CP demand for June to September of the previous year. [e15]
- A DSP's TCRF is updated twice a year, March 1 and September 1. [e19]

## Say it like this

(Guidance) The TDSP owns and runs the poles and wires. It delivers power for any retailer on comparable terms and does not sell the power itself. Its transmission bill to the grid is set by its share of the four summer coincident peaks, and it passes changes through to retailers' customers in a TCRF.

## Common confusion

(Guidance) TDU (a PUCT/PURA term) and TDSP (an ERCOT Protocol term) overlap but are not identical: the PUCT TDU definition excludes MOUs and ECs, while ERCOT registration of TSPs and DSPs includes them. [e4][e5] A TDU may not sell electricity, so it is not a retailer. [e6] TSP and DSP are also different roles: the TSP charges the DSP for transmission, and the DSP's TCRF passes it on. [e15][e19]

## Questions

### Why can't a TDU just sell power to its customers?

PURA bars a transmission and distribution utility from selling electricity or otherwise participating in the electricity market, other than buying electricity to serve its own needs, after January 1, 2002. [e6] Retail sales belong to REPs and other competitive retailers. [e7]

### What do TSP and DSP each do?

A TSP owns or operates Transmission Facilities and provides Transmission Service; a DSP owns or operates the Distribution System that delivers energy from the transmission grid to Customers. [e2][e3]

### How does a DSP get billed for transmission, and why does it matter to a retailer?

The TSP's monthly rate times the DSP's previous year's average 4CP demand. [e15] The DSP passes cost changes to customers through its TCRF, and the section covers distribution service to REPs and other customers of the distribution system. [e19][e18]

### Why does the code of conduct exist?

To avoid potential market-power abuses and cross-subsidization between regulated and unregulated activities, which is why a utility must be separate from competitive affiliates and sharing of employees, facilities or resources is restricted. [e27][e28]

### What if a transmission service request needs new facilities?

The TSP must construct or acquire the needed facilities unless ERCOT identifies a less costly, operationally sound and equally effective alternative, and it may require a deposit or security. [e25][e26]

### What if the PUCT changes the 4CP method?

SB 6 directs the PUCT to evaluate whether the current 4CP methodology ensures all loads appropriately contribute, and by December 31, 2026 to amend its rules so wholesale transmission charges appropriately assign costs. The saved sources do not say what the outcome is. [e51][e52]

### Who submits the load that ERCOT uses in planning?

TDSPs submit load for planning; ERCOT treats it as Substantiated Load only if backed by an executed agreement, a credible third-party forecast or an officer's letter. [e12]

## Scenarios

### A large load customer asks the TDSP to interconnect.

- PURA Sec. 37.0561(f) requires the PUCT's large load interconnection standards to set a flat study fee of at least $100,000 payable to the interconnecting utility for initial transmission screening studies for large loads subject to subsection (c); the saved sources do not show the adopted standards. [e42]
- If the customer is a transmission service customer owning electrical facilities in ERCOT, it must execute an interconnection agreement with the TSP. [e24]
- The TSP may require a deposit or other security for new facilities. [e26]

## Open items

- SB 6's four-coincident-peak evaluation and the December 31, 2026 rule deadline are in the bill text; the saved sources do not show what the PUCT decided, so §25.192 here is the version marked effective 12/20/22 and may be amended. 
- Names and number of TDSPs in ERCOT: only a table of TDSP load management programs names AEP Texas, CenterPoint, Oncor and TNMP; no saved source gives the full TDSP list or their service areas.
- TDSP duties in retail transactions (switching, meter data, outage handling) are not covered by the saved PUCT retail rules or Protocols text beyond metering; TX SET and the retail market guides are not saved.
- The §25.192 cost-of-service text and the 4CP billing paragraph have garbled subsection lettering in the saved copy; paragraphs are cited by heading.
- The TCRF equation layout is garbled in the saved text (where BD sits relative to the rest is not legible); the variable definitions are quoted. The saved §25.193 text carries an effective date of 10/25/10; later amendments were not checked.
