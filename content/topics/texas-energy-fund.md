---
id: texas-energy-fund
name: Texas Energy Fund
aliases: [TEF, Texas Energy Fund, SB 2627, Powering Texas Forward Act, completion bonus grant, Chapter 34 Utilities Code]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: puct
    type: related
    note: SB 2627 directed the Public Utility Commission of Texas to accept loan applications and approve or deny each one. [e9]
  - to: texas-legislature
    type: related
    note: SB 2627, the Powering Texas Forward Act, created the fund; the 89th Legislature then passed SB 2268 to adjust some caps, requirements and deadlines. [e17]
  - to: resource-adequacy
    type: related
    note: ERCOT's CDR has scenarios that vary the amount and timing of TEF project capacity. [e15]
  - to: cdr-report
    type: used-in
    note: The CDR's Scenario 2 assumes all TEF projects are in service on their reported dates. [e11]
  - to: energy-storage-resource
    type: contrasts-with
    note: Electric energy storage facilities are not eligible for the loan or the completion bonus grant. [e3][e6]
  - to: energy-only-market
    type: related
    note: Funded facilities must participate in the ERCOT wholesale electricity market. [e10]
  - to: net-load
    type: measures
    note: Completion bonus grant performance is assessed over the 100 hours of highest peak net load, defined as gross load minus wind, solar and storage injection. [e22]
  - to: hsl-lsl
    type: related
    note: Both the grant PRF and the loan PAF are ratios of a resource's real-time telemetered HSL to its obligated capacity. [e24][e42]
  - to: mora-report
    type: related
    note: ERCOT resource lists tag TEF projects by name, for example "(TEF)" after Cedar Bayou 5 and NRG THW GT 345. [e69]
  - to: weatherization
    type: related
    note: A completion bonus grant application must include a narrative on preparations for compliance with the PUCT weather emergency preparedness rule. [e75]
evidence:
  - id: e1
    source: pura-34
    locator: "Utilities Code Sec. 34.0102(a)"
    quote: "The fund is a special fund in the state treasury outside the general revenue fund to be administered and used by the commission for the purposes authorized by this chapter."
  - id: e2
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(a)"
    quote: "The commission may use money in the fund without further appropriation to provide loans to finance upgrades to existing dispatchable electric generating facilities providing power for the ERCOT power region that result in a net increase of at least 100 megawatts of capacity for each facility or the construction of dispatchable electric generating facilities providing power for the ERCOT power region that each have a generation capacity of at least 100 megawatts."
  - id: e3
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(a)"
    quote: "An electric energy storage facility is not eligible for a loan under this section."
  - id: e4
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(f)"
    quote: "A loan provided under this section must:(1) have a term of 20 years;(2) be payable ratably starting on the third anniversary of the estimated commercial operation date of the facility for which the loan was provided, as stated in the loan application; and(3) bear an interest rate of three percent."
  - id: e5
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(b)(2)"
    quote: "in an amount that does not exceed 60 percent of the estimated cost of the facility to be constructed;"
  - id: e6
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(a)"
    quote: "The commission shall provide, using money available in the fund for the purpose without further appropriation, a completion bonus grant for the construction of dispatchable electric generating facilities in the ERCOT power region. For the purposes of this section, a generating facility is considered to be dispatchable if the facility's output can be controlled primarily by forces under human control. An electric energy storage facility is not eligible for a grant under this section."
  - id: e7
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(f)"
    quote: "Unless the commission determines that extenuating circumstances justify extending the deadlines provided by this subsection, the commission may not provide a grant under this section of more than:(1) $120,000 per megawatt of capacity provided by a facility that is interconnected in the ERCOT power region before June 1, 2026; or(2) $80,000 per megawatt of capacity provided by a facility that is interconnected in the ERCOT power region on or after June 1, 2026, and before June 1, 2029."
  - id: e8
    source: pura-34
    locator: "Utilities Code Sec. 34.0106(e)"
    quote: "The commission may provide from the fund:(1) for grants under Section 34.0103, not more than $1 billion;(2) for loans and grants under Sections 34.0104 and 34.0105, not more than $7.2 billion; and(3) for grants or loans under Subchapter B, not more than $1.8 billion."
  - id: e9
    source: sb2627-88r
    locator: "SECTION 5"
    quote: "Not later than June 1, 2024, the Public Utility Commission of Texas shall begin accepting loan applications for loans authorized by Subchapter A, Chapter 34, Utilities Code, as added by this Act. Not later than December 31, 2025, the Public Utility Commission of Texas shall approve or deny each loan application and disburse initial loan funds for each approved applicant."
  - id: e10
    source: pura-34
    locator: "Utilities Code Sec. 34.0106(d)"
    quote: "Each facility for which a loan or grant is provided under Section 34.0104 or 34.0105 must participate in the ERCOT wholesale electricity market."
  - id: e11
    source: ercot-cdr-2025-12
    locator: "Scenario assumptions, resource capacity"
    quote: "For the Scenario 2 resource capacity assumption, all TEF projects are assumed to be in-service as of their current reported projected Commercial Operations Dates regardless of whether all criteria for CDR planned resource eligibility are met."
  - id: e12
    source: sb2627-88r
    locator: "SB 2627 as enacted, Sec. 34.0104(d) (superseded by SB 2268)"
    quote: "Outstanding loans provided under this section and grants provided under Section 34.0105, considered together, may not support the addition or construction of more than 10,000 megawatts of generation capacity."
  - id: e13
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(i)"
    quote: "The commission by rule shall establish performance standards for grant recipients based on reliability metrics, appropriate for the types of facilities for which grants may be provided, for performance during the 100 hours with the least quantity of operating reserves for each year."
  - id: e14
    source: ercot-cdr-2025-12
    locator: "Scenario assumptions, brownfield sites"
    quote: "For the Scenario 3 resource capacity assumption, brownfield sites refer to TEF projects being developed at existing power plant sites and are therefore expected to be less likely to experience construction delays than projects at new construction sites."
  - id: e15
    source: ercot-cdr-2025-12
    locator: "Scenario overview"
    quote: "two of the three scenarios define reserve margin bookends by varying the magnitude of Large Loads along with the amount and timing of Texas Energy Fund (TEF) project capacity reflected in the ERCOT interconnection queue."
  - id: e17
    source: puct-tef-faq
    locator: "Overview of the Texas Energy Fund"
    quote: "The Texas Legislature passed Senate Bill 2627, the Powering Texas Forward Act, to create the TxEF, which Texans approved through a constitutional election on November 7, 2023. The 89th Texas Legislature then passed Senate Bill 2268 to adjust certain financing requirements, programmatic caps, and deadlines for loans and grants awarded from the TxEF."
  - id: e16
    source: sb2627-88r
    locator: "Caption"
    quote: "relating to funding mechanisms to support the construction, maintenance, modernization, and operation of electric generating facilities."
  - id: e18
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(d), as amended by SB 2268"
    quote: "Outstanding loans provided under this section may not support the addition or construction of more than 10,000 megawatts of generation capacity."
  - id: e19
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(d-1), added by SB 2268"
    quote: "Grants provided under this section may not support the construction of more than 10,000 megawatts of generation capacity."
  - id: e20
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(l), as amended by SB 2268"
    quote: "The commission may disburse the initial funds for a loan under this section after December 31, 2025, if the commission determines that market factors necessitate an extension of the deadline for disbursement of initial funds.  An applicant may request disbursement of initial funds after December 31, 2025.  The commission shall approve or deny the request on a case-by-case basis."
  - id: e21
    source: pura-34
    locator: "Utilities Code Sec. 34.0104, source note"
    quote: "Amended by: Acts 2025, 89th Leg., R.S., Ch. 337 (S.B. 2268), Sec. 2, eff. June 12, 2025."
  - id: e22
    source: puct-25-511
    locator: "16 TAC 25.511(b)(1), Definitions, Assessed hours (rule effective 5/15/2024)"
    quote: "Assessed hours -- the 100 hours during the test period with the least quantity of operating reserves, as determined by the highest values of peak net load, where peak net load is calculated as gross load minus wind, solar, and storage injection."
  - id: e23
    source: puct-25-511
    locator: "16 TAC 25.511(b)(2), Availability reliability factor (ARF)"
    quote: "The ARF is computed as the proportion of time that each generation resource was available (i.e., not in a planned outage) during the assessed hours."
  - id: e24
    source: puct-25-511
    locator: "16 TAC 25.511(b)(4), Performance reliability factor (PRF)"
    quote: "The PRF is computed as the average ratio of each generation resource’s RT high sustainable limit (HSL) and its obligated capacity over the assessed hours. Intervals that occurred during an approved planned outage of a generation resource are excluded."
  - id: e25
    source: puct-25-511
    locator: "16 TAC 25.511(b)(5), Test period"
    quote: "Test period -- the one-year period starting on June 1 of one year and ending on May 31 of the following year."
  - id: e26
    source: puct-25-511
    locator: "16 TAC 25.511(f)(1), Grant payment process"
    quote: "A grant payment is one-tenth of an applicant’s total completion bonus grant award, subject to the performance standards and discount methodology prescribed under subsections (g) and (h) of this section."
  - id: e27
    source: puct-25-511
    locator: "16 TAC 25.511(g), Performance standards"
    quote: "ERCOT, in consultation with commission staff, must select a reference group comprising at least 30 resources randomly sampled from all dispatchable, interconnected, thermal generation resources with a nameplate capacity of at least 50 MW that were first interconnected to the ERCOT region on or after January 1, 2004."
  - id: e28
    source: puct-25-511
    locator: "16 TAC 25.511(g)(1)-(2), Performance standards"
    quote: "Optimal performance standard is determined by the 90th percentile of PRF scores achieved by resources in the reference group during the assessed hours. (2) Median performance standard is determined by the 50th percentile of PRF scores achieved by resources in the reference group during the assessed hours."
  - id: e29
    source: puct-25-511
    locator: "16 TAC 25.511(h)(1)(A)-(C), Discount or withholding of payment"
    quote: "The TEF administrator will not apply any discount to a grant payment if the generation resource meets or exceeds the optimal PRF performance standard established under subsection (g)(1) of this section and achieves an ARF of between 0.9 and one."
  - id: e30
    source: puct-25-511
    locator: "16 TAC 25.511(h)(1)(C), Discount or withholding of payment"
    quote: "The TEF administrator will withhold a grant payment if the PRF of the generation resource is equal to or below the median performance standard established under subsection (g)(2) of this section, or if the generation resource’s calculation according to the formula in this subsection returns a value less than or equal to zero."
  - id: e31
    source: puct-25-511
    locator: "16 TAC 25.511(h), Grant payment discount formula, variable definitions"
    quote: "Where δ is equal to one-tenth of the applicant’s completion bonus grant award based on the applicant’s notice of eligibility, PRF50 denotes the median performance standard, and PRF90 denotes the optimal performance standard."
  - id: e32
    source: puct-25-511
    locator: "16 TAC 25.511(h)(2), Example"
    quote: "Example. An applicant would receive the following grant payments for hypothetical test periods 1, 2, and 3 based on a $12,000,000 completion bonus grant award described in a notice of eligibility for a 100 MW generation resource interconnected on March 1, 2026."
  - id: e33
    source: puct-25-511
    locator: "16 TAC 25.511(h)(2), Example, Test Period 1"
    quote: "Test Period 1 -- The generation resource achieved a PRF of 92 and an ARF of 1.0. Its PRF is above the median value (PRF50 = 90) but below the optimal performance standard (PRF90 = 98)."
  - id: e34
    source: puct-25-511
    locator: "16 TAC 25.511(h)(2), Example, Test Period 3"
    quote: "Test Period 3 - The generation resource achieved a PRF of 96 and an ARF of 0.80. Its PRF is equal to the optimal performance standard (PRF90 = 96), but its payment will be discounted as a result of its ARF being less than 0.9."
  - id: e35
    source: puct-25-511
    locator: "16 TAC 25.511(f)(2), Grant payment process"
    quote: "No later than 45 days following the end of each test period, ERCOT must determine and provide to the TEF administrator the assessed hours, the median and optimal performance levels of the generation resources in the reference group, the PRF and ARF for each generation resource in an electric generating facility under this section, and the amount of payment each eligible applicant is entitled to for that test period, based on the performance of each of its generation resources."
  - id: e36
    source: puct-25-511
    locator: "16 TAC 25.511(d)(1), Eligibility application"
    quote: "No earlier than January 1, 2025, and no later than 180 days after the interconnection date of the electric generating facility for which an applicant requests a completion bonus grant award, an applicant must submit an electronic application in the form and manner prescribed by the commission."
  - id: e37
    source: puct-25-511
    locator: "16 TAC 25.511(d)(2)(B)"
    quote: "For the ten successive test periods following a qualifying electric generating facility’s interconnection date, an eligible applicant is authorized to receive an annual completion bonus grant payment for each test period in which its generation resource or resources meet the performance standard established in this section."
  - id: e38
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(g)-(h)"
    quote: "The commission shall provide for the proceeds of each grant awarded under this section to be disbursed to the grant recipient by equal annual payments over a 10-year period that begins on the first anniversary of the commercial operations date of the facility for which the grant is provided."
  - id: e39
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(g)"
    quote: "Unless the commission determines that extenuating circumstances justify extending the deadline provided by this subsection, the commission may not provide a grant under this section for a facility that is interconnected in the ERCOT power region on or after June 1, 2029."
  - id: e40
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(c)"
    quote: "The commission may provide a grant under this section only for construction of a facility that:(1) will have a generation capacity of at least 100 megawatts; and(2) does not meet the planning model requirements necessary to be included in the Capacity Demand and Reserves Report of the independent organization certified under Section 39.151 for the ERCOT power region before June 1, 2023."
  - id: e41
    source: puct-25-510
    locator: "16 TAC 25.510(f)(1)(A), Credit agreement, Performance covenant (amendment effective 10/02/24)"
    quote: "Performance covenant -- each generation resource in an electric generating facility that is financed by a loan under this section must maintain a PAF of at least 85 percent and a POF no greater than 15 percent, evaluated monthly, over the trailing 12-month period, throughout the term of the loan."
  - id: e42
    source: puct-25-510
    locator: "16 TAC 25.510(b)(4), 12-Month performance availability factor (PAF)"
    quote: "The PAF is computed as the average ratio of each generation resource’s RT high sustainable limit (HSL) and its obligated capacity over a 12-month measurement period, expressed as a percentage."
  - id: e43
    source: puct-25-510
    locator: "16 TAC 25.510(f)(1)(C), Other capital contributions"
    quote: "The TEF administrator will verify the borrower’s ability, or the ability of the borrower’s corporate sponsor, to fund the required commitment of the balance of no less than 40 percent of the construction and commissioning costs."
  - id: e44
    source: puct-25-510
    locator: "16 TAC 25.510, Deposits, paragraph (1)"
    quote: "The borrower must deposit in an escrow account held by the Texas Comptroller of Public Accounts or provide in a standby letter of credit an amount equal to three percent of the estimated cost of the project for which the loan is provided."
  - id: e45
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(h)(1)"
    quote: "shall authorize the loan recipient to withdraw the deposit from the escrow account if the facility for which the loan was provided is interconnected in the ERCOT power region before the fourth anniversary of the date the initial loan funds were disbursed; or"
  - id: e46
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(j)"
    quote: "The comptroller shall deposit to the credit of the fund any escrow funds described by Subsection (g) that the commission may not authorize to be withdrawn by a loan recipient."
  - id: e47
    source: pura-34
    locator: "Utilities Code Sec. 34.0106(a)-(b)"
    quote: "If the commission has more than four pending applications for loans to be made from the fund on the date the commission awards a loan, the amount of the loan awarded may not exceed 25 percent of the fund balance on that date.(b) The commission may not provide a loan or a grant under this chapter:(1) for a facility that will be used primarily to serve an industrial load or private use network; or(2) for the construction or operation of a natural gas transmission pipeline."
  - id: e48
    source: puct-25-510
    locator: "16 TAC 25.510(c)(2)(C), Eligibility"
    quote: "the portion of new nameplate capacity that will serve the industrial load or PUN must be less than 50 percent of the facility’s total new nameplate capacity, and the remainder of new capacity serving the ERCOT market must be greater than 100 MW."
  - id: e49
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(e)"
    quote: "An electric utility other than a river authority may not receive a loan under this section."
  - id: e50
    source: pura-34
    locator: "Utilities Code Sec. 34.0101 and source note"
    quote: "\"Fund\" means the Texas energy fund established by Section 49-q, Article III, Texas Constitution.(3) \"Trust company\" means the Texas Treasury Safekeeping Trust Company. Added by Acts 2023, 88th Leg., R.S., Ch. 465 (S.B. 2627), Sec. 2, eff. November 7, 2023."
  - id: e51
    source: pura-34
    locator: "Utilities Code Sec. 34.0109(a)"
    quote: "The advisory committee is composed of the following six members:(1) three members of the senate appointed by the lieutenant governor"
  - id: e52
    source: pura-34
    locator: "Utilities Code Sec. 34.0109(f), (i)"
    quote: "The advisory committee:(1) may provide comments and recommendations to the commission for the commission to use in adopting rules regarding the use of the fund or on any other matter; and(2) shall review the overall operation, function, and structure of the fund at least semiannually."
  - id: e53
    source: pura-34
    locator: "Utilities Code Sec. 34.0204, Texas Backup Power Packages"
    quote: "(3) is capable of operating for at least 48 continuous hours without refueling or connecting to a separate power source;(4) is designed so that one or more Texas backup power packages can be aggregated on-site to serve not more than 2.5 megawatts of load at the host facility;"
  - id: e54
    source: pura-34
    locator: "Utilities Code Sec. 34.0205(b)"
    quote: "The amount of a grant provided under this subchapter may not exceed $500 per kilowatt of capacity."
  - id: e55
    source: puct-tef-faq
    locator: "What are the different TxEF programs? (FAQ last updated November 4, 2026)"
    quote: "The TxEF is made up of four programs that provide loan and grant opportunities for electric generation projects inside and outside the ERCOT power region: 1) the In-ERCOT Generation Loan Program; 2) the Completion Bonus Grant Program; 3) the Outside ERCOT Grant Program; and 4) the Texas Backup Power Package Program."
  - id: e56
    source: puct-tef-faq
    locator: "In-ERCOT Generation Loan Program"
    quote: "On March 21, 2024, the PUCT adopted 16 TAC §25.510, which establishes the Loan Program application process, project eligibility requirements, evaluation criteria, and loan terms. The PUCT began accepting Loan Program applications on June 1, 2024, and closed the submission period on July 27, 2024."
  - id: e57
    source: puct-tef-faq
    locator: "Completion Bonus Grant Program"
    quote: "On April 25, 2024, the PUCT adopted 16 TAC §25.511, which establishes the CBG Program application process, project eligibility requirements, and evaluation criteria. The PUCT began accepting CBG Program applications on January 1, 2025, and continues to accept new applications."
  - id: e58
    source: puct-tef-faq
    locator: "Outside ERCOT Grant Program"
    quote: "On February 13, 2025, the PUCT adopted 16 TAC §25.512, which establishes the OEGP application process, project eligibility requirements, and evaluation criteria. The PUCT began accepting OEGP applications on May 28, 2025, and continues to accept new applications."
  - id: e59
    source: puct-tef-faq
    locator: "Texas Backup Power Package Program"
    quote: "On May 7, 2026, the PUCT adopted 16 TAC §25.513, which establishes the TBPP Program application process, project eligibility requirements, and evaluation criteria. The PUCT will begin accepting TBPP applications in 2027."
  - id: e60
    source: puct-tef-faq
    locator: "Title"
    quote: "Texas Energy Fund Frequently Asked Questions Last Updated November 4, 2026"
  - id: e61
    source: puct-tef-fifth-grant
    locator: "PUCT news release, June 23, 2026, paragraph 1"
    quote: "The Public Utility Commission of Texas (PUCT) today entered into the fifth agreement under the Texas Energy Fund (TxEF) Completion Bonus Grant (CBG) Program, with Tejas Power Generation, LLC, a subsidiary of Shell Energy North America (US) L.P. The grant is for its 146-megawatt (MW) expansion to the Friendswood Energy Center in southwest Houston"
  - id: e62
    source: puct-tef-fifth-grant
    locator: "PUCT news release, June 23, 2026, paragraph 3"
    quote: "The expanded facility connected to ERCOT’s Houston Load Zone on May 21, 2026."
  - id: e63
    source: puct-tef-fifth-grant
    locator: "PUCT news release, June 23, 2026, paragraph 4"
    quote: "Under this agreement, Tejas Power Generation can receive a maximum total grant award of $17.52 million, in annual payments up to $1.75 million per year, over a 10-year period."
  - id: e64
    source: puct-tef-fifth-grant
    locator: "PUCT news release, June 23, 2026, paragraph 5"
    quote: "Payments are contingent upon the new unit’s performance. ERCOT will measure performance over an annual “test period” and compare it to the performance of a reference group of non-grant recipient generation resources in the ERCOT region. Friendswood Energy Center’s first test period runs from June 1, 2026, through May 31, 2027, after which Tejas Power Generation may receive its first grant payment."
  - id: e65
    source: puct-tef-fifth-grant
    locator: "PUCT news release, June 23, 2026, paragraph 3"
    quote: "The expansion at Friendswood Energy Center, a natural gas-fired combustion turbine facility, builds on the site’s existing capacity to provide additional dispatchable energy to respond to Texas’ increasing electrical demand, including during extreme weather conditions."
  - id: e66
    source: sb2268-89r
    locator: "SB 2268 (89th Leg.), SECTION 5"
    quote: "Section 34.0104(b-1), Utilities Code, as added by this Act, applies to a loan the application for which was submitted under Section 34.0104, Utilities Code, to the Public Utility Commission of Texas before the effective date of this Act if the application is pending before the commission on the effective date of this Act."
  - id: e67
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(b-1)(1)"
    quote: "a construction loan provided to a municipally owned utility, or an instrumentality of a municipal corporation established for the benefit of a municipally owned utility, may be in the form of a public security, as defined by Section 1201.002, Government Code, issued by the loan applicant if the public security is payable on a parity basis with other debt of the loan applicant secured by a senior lien on net revenues of the facility or the loan applicant's utility system; and"
  - id: e68
    source: ercot-cdr-2025-12
    locator: "Table 1, Summer Load and Resource Scenarios, Total Capacity rows"
    quote: "Scenario 2: Includes all Texas Energy Fund projects (regardless of Planning Guide Sec. 6.9(1) milestone conditions) Scenario 3: One-year TEF project delays for those meeting Planning Guide Sec. 6.9(1) conditions (excluding \"brownfield\" sites)"
  - id: e69
    source: ercot-cdr-2025-12
    locator: "Resource list (unit names tagged \"(TEF)\")"
    quote: "BASRANCH (TEF) CEDAR BAYOU 5 (TEF) CEDARVALE GAS COYOTE SPRINGS AGR1 ENCHANTED ROCK NEWPP NRG THW GT 345 (TEF) PIN PEAKING ENERGY CENTER 1 (TEF) PIN PEAKING ENERGY CENTER 2 (TEF)"
  - id: e70
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(m)"
    quote: "(m) This section expires September 1, 2050."
  - id: e71
    source: pura-34
    locator: "Utilities Code Sec. 34.0105(j)"
    quote: "(j) This section expires December 1, 2040."
  - id: e72
    source: pura-34
    locator: "Utilities Code Sec. 34.0109(i)"
    quote: "Unless continued in existence as provided by that chapter, the advisory committee is abolished September 1, 2035."
  - id: e73
    source: pura-34
    locator: "Utilities Code Sec. 34.0109(a)(2)"
    quote: "(2) three members of the house of representatives appointed by the speaker of the house of representatives, including:"
  - id: e74
    source: puct-25-510
    locator: "16 TAC 25.510(i)(1), Deposits"
    quote: "The borrower must deposit the required funds or provide the standby letter of credit before the initial loan amount is disbursed."
  - id: e75
    source: puct-25-511
    locator: "16 TAC 25.511(d)(1)(N), Eligibility application contents"
    quote: "a narrative explanation of the applicant’s preparations for compliance with §25.55 of this title (relating to Weather Emergency Preparedness)."
  - id: e76
    source: pura-34
    locator: "Utilities Code Sec. 34.0104(b-1)(2)"
    quote: "a construction loan provided to an electric cooperative may be secured by a senior lien on substantially all electric system assets of the electric cooperative, including the facility for which the loan is provided, payable on a parity basis with other debt of the loan applicant secured by a senior lien."
  - id: e77
    source: puct-tef-faq
    locator: "Outside ERCOT Grant Program"
    quote: "The Outside ERCOT Grant Program (OEGP) provides funding to existing transmission and distribution infrastructure and existing electric generating facilities in Texas outside of the ERCOT power region."
  - id: e78
    source: puct-tef-faq
    locator: "Texas Backup Power Package Program"
    quote: "The Texas Backup Power Package (TBPP) Program will provide grants and loans to qualifying entities to design, procure, install, and operate backup power packages at critical facilities that support community health, safety, and well-being."
  - id: e79
    source: puct-25-511
    locator: "16 TAC 25.511(h)(2), Example, Test Period 1 result"
    quote: ")] ($1,200,000) = $525,000 4 4 98 − 90 Test Period 2 -- The generation resource achieved a PRF of 85 and an ARF of 1.0."
  - id: e80
    source: puct-25-511
    locator: "16 TAC 25.511(h)(2), Example, Test Period 3 result"
    quote: "[1 − 10(1 − 0.80)2 ]($1,200,000) = $720,000"
---

## Definition

The Texas Energy Fund is a special fund in the state treasury, outside general revenue, administered by the commission for the purposes authorized by Chapter 34 of the Utilities Code; the fund itself is established by Section 49-q, Article III of the Texas Constitution. [e1][e50] SB 2627, the Powering Texas Forward Act, created it, and Texans approved it at the November 7, 2023 constitutional election. [e17] The bill is described as funding mechanisms to support the construction, maintenance, modernization and operation of electric generating facilities. [e16] In ERCOT it funds low-interest loans and completion bonus grants for dispatchable generation; the PUCT runs it as four programs (In-ERCOT loans, completion bonus grants, Outside ERCOT grants and Texas Backup Power Packages). [e2][e6][e55]

## How it works

Loans. Under Chapter 34 (current text, retrieved 2026-11-19), loans can finance upgrades to existing dispatchable facilities that add at least 100 MW, or construction of dispatchable facilities of at least 100 MW. [e2] A loan has a 20-year term, ratable payments starting on the third anniversary of the estimated commercial operation date, and a three percent interest rate; a construction loan may cover up to 60 percent of the estimated cost. [e4][e5] Energy storage facilities are not eligible, an electric utility other than a river authority may not borrow, and no loan or grant may go to a facility used primarily to serve an industrial load or private use network, or to a gas transmission pipeline. [e3][e49][e47] The PUCT rule allows a facility serving an industrial load or PUN only if that share is under 50 percent of new nameplate capacity and more than 100 MW serves the ERCOT market. [e48]

Loan terms in the PUCT rule (16 TAC 25.510, amendment effective 10/02/24): the TEF administrator verifies that the borrower can fund the balance of no less than 40 percent of construction and commissioning costs, and the borrower posts three percent of estimated project cost in escrow with the Comptroller or as a standby letter of credit before the initial loan amount is disbursed. [e43][e44][e74] For new construction, the deposit is returned if the facility interconnects before the fourth anniversary of initial disbursement; escrow the commission may not release goes to the fund. [e45][e46] Each funded resource must keep a 12-month performance availability factor (PAF) of at least 85 percent and a planned outage factor of no more than 15 percent, checked monthly, for the whole 20-year term. [e41][e42] If more than four loan applications are pending when a loan is awarded, that loan may not exceed 25 percent of the fund balance. [e47]

Completion bonus grants are paid on construction of dispatchable generation in the ERCOT region, based on megawatts provided, for facilities of at least 100 MW that were not in the CDR planning model before June 1, 2023. [e6][e40] The statutory cap is $120,000 per MW for facilities interconnected before June 1, 2026, and $80,000 per MW for those interconnected on or after June 1, 2026 and before June 1, 2029, unless the commission extends deadlines for extenuating circumstances; no grant goes to a facility interconnected on or after June 1, 2029 on the same condition. [e7][e39] The grant is paid in equal annual payments over 10 years starting on the first anniversary of commercial operations, each subject to withholding or discount for performance; the rule authorizes a payment for each of the ten successive test periods after interconnection in which the resource meets the performance standard. [e38][e37] Under the PUCT rule, an application may be filed from January 1, 2025 and no later than 180 days after the facility's interconnection date. [e36]

Grant performance. The commission must set performance standards for the 100 hours with the least operating reserves each year. [e13] The PUCT rule defines those "assessed hours" as the 100 hours in the June-to-May test period with the highest peak net load (gross load minus wind, solar and storage injection). [e22][e25] ERCOT computes each resource's performance reliability factor (PRF), the average ratio of its real-time telemetered HSL to its obligated capacity, and its availability reliability factor (ARF), the share of assessed hours it was not in a planned outage. [e24][e23] The PRF is compared with a reference group of at least 30 randomly sampled non-grant thermal resources of at least 50 MW first interconnected on or after January 1, 2004; the 90th percentile sets the optimal standard and the 50th percentile the median standard. [e27][e28] ERCOT must report these values and the payment amount within 45 days after each test period. [e35]

## Formula

Annual completion bonus grant payment per generation resource, 16 TAC 25.511(h) (the rule's equation is an image; described here from its variable list and worked example). [e31][e33][e34]
- δ: one-tenth of the total award in the notice of eligibility. [e31][e26]
- PRF50 and PRF90: the median and optimal performance standards from the reference group. [e31][e28]
- If PRF ≤ PRF50: payment is zero (withheld). [e30]
- If PRF50 < PRF < PRF90: payment = [1 - 10(1 - ARF)²] × [1/4 + 3/4 × (PRF - PRF50)/(PRF90 - PRF50)] × δ. [e33][e31]
- If PRF ≥ PRF90: payment = [1 - 10(1 - ARF)²] × δ, which is the full δ when ARF is 1. [e34][e31] The rule text separately says no discount applies at or above PRF90 with an ARF between 0.9 and one. [e29] Read literally, the formula would still reduce the payment for an ARF between 0.9 and 1 (for example to 0.9 × δ at ARF 0.9; the knowledge base's arithmetic); the saved rule does not reconcile the two, so treat the 0.9-1 band as an open point.
- A result at or below zero means the payment is withheld. [e30]

## Example

The rule's own example: a $12,000,000 award for a 100 MW resource interconnected March 1, 2026, so δ = $1,200,000. [e32][e31] Test period 1: PRF 92, ARF 1.0, PRF50 90, PRF90 98; (92 - 90)/(98 - 90) = 0.25, so payment = (0.25 + 0.75 × 0.25) × $1,200,000 = $525,000. [e33][e79] Test period 3: PRF 96 equals PRF90, but ARF is 0.80, so payment = [1 - 10 × 0.2²] × $1,200,000 = 0.6 × $1,200,000 = $720,000. [e34][e80]

## ERCOT context

The statute limits the fund: not more than $1 billion for grants under Section 34.0103, not more than $7.2 billion for loans and grants under Sections 34.0104 and 34.0105, and not more than $1.8 billion for grants or loans under Subchapter B. [e8] Each funded facility must participate in the ERCOT wholesale market. [e10] SB 2627 required the PUCT to start accepting loan applications by June 1, 2024 and to approve or deny each and disburse initial loan funds by December 31, 2025. [e9] The PUCT's FAQ says the loan application window ran June 1 to July 27, 2024, and the completion bonus grant program has accepted applications since January 1, 2025 and still does. [e56][e57]

The 89th Legislature passed SB 2268 to adjust certain financing requirements, programmatic caps and deadlines. [e17] Its main changes, effective June 12, 2025: SB 2627 as enacted said outstanding loans and completion bonus grants, considered together, could not support more than 10,000 MW; the current text applies a 10,000 MW ceiling to outstanding loans and a separate 10,000 MW ceiling to completion bonus grants. [e12][e18][e19][e21] The commission may now disburse initial loan funds after December 31, 2025 if it determines that market factors necessitate an extension, deciding requests case by case. [e20] SB 2268 also lets a municipally owned utility's construction loan take the form of a public security payable on parity with its other senior-lien debt and lets an electric cooperative's construction loan be secured by a senior lien on substantially all its electric system assets; the municipal provision also applies to loan applications submitted before, and still pending on, its effective date. [e67][e76][e66]

A grant in practice: on June 23, 2026 the PUCT signed its fifth completion bonus grant agreement, with Tejas Power Generation (a Shell Energy North America subsidiary) for a 146 MW gas-fired combustion turbine expansion at Friendswood Energy Center, which connected to the Houston Load Zone on May 21, 2026. [e61][e65][e62] The maximum award is $17.52 million, paid up to $1.75 million a year over 10 years, with the first test period June 1, 2026 to May 31, 2027. [e63][e64] That maximum equals 146 MW at the $120,000/MW cap for facilities interconnected before June 1, 2026 (146 × $120,000 = $17.52 million). [e7][e62][e63]

ERCOT's December 2025 CDR varies the amount and timing of TEF project capacity in two of its three alternative scenarios: Scenario 2 includes all TEF projects regardless of Planning Guide 6.9(1) milestone conditions, and Scenario 3 applies one-year delays to TEF projects meeting those conditions, excluding brownfield sites. [e15][e68] Brownfield sites at existing plants are expected to be less likely to be delayed. [e14] ERCOT's resource lists tag TEF projects by name, for example Cedar Bayou 5, NRG THW GT 345 and PIN Peaking Energy Center 1 and 2. [e69]

Oversight: a six-member Texas Energy Fund Advisory Committee, three senators appointed by the lieutenant governor and three house members appointed by the speaker, may comment and make recommendations to the commission and must review the fund's operation, function and structure at least semiannually. [e51][e73][e52]

## Key facts

- Loans (current Chapter 34): 20-year term, three percent interest, up to 60 percent of estimated facility cost for construction; three percent escrow or letter of credit; borrower funds at least 40 percent. [e4][e5][e44][e43]
- Loan performance covenant (PUCT rule): PAF at least 85 percent and POF no more than 15 percent, trailing 12 months, checked monthly. [e41]
- Completion bonus grants (current Chapter 34): up to $120,000 per MW (interconnected before June 1, 2026) or $80,000 per MW (June 1, 2026 to before June 1, 2029), paid over 10 years. [e7][e38]
- Grant performance: 100 highest peak-net-load hours per June-May test period; withheld at or below the reference group median PRF; full at or above the 90th percentile with ARF 0.9-1. [e22][e25][e30][e29]
- Fund ceilings (current Chapter 34): $1 billion, $7.2 billion and $1.8 billion for its three purposes. [e8]
- Capacity ceilings since SB 2268 (effective June 12, 2025): 10,000 MW for outstanding loans and 10,000 MW for completion bonus grants; SB 2627 as enacted had one combined 10,000 MW ceiling. [e18][e19][e21][e12]
- Backup power packages (Subchapter B): at least 48 hours without refuelling, up to 2.5 MW per host facility, grants capped at $500 per kW. [e53][e54]
- Sunset dates in the statute: the loan section expires September 1, 2050, the grant section December 1, 2040, and the advisory committee is abolished September 1, 2035 unless continued. [e70][e71][e72]

## Timeline

- November 7, 2023: constitutional amendment election approves the fund; Chapter 34 takes effect. [e17][e50]
- March 21, 2024: PUCT adopts 16 TAC 25.510 (loan program). [e56]
- April 25, 2024: PUCT adopts 16 TAC 25.511 (completion bonus grants). [e57]
- June 1 - July 27, 2024: loan program application window. [e56][e9]
- January 1, 2025: completion bonus grant applications open. [e57][e36]
- February 13, 2025: PUCT adopts 16 TAC 25.512 (Outside ERCOT grants); applications open May 28, 2025. [e58]
- June 12, 2025: SB 2268 changes take effect (separate 10,000 MW ceilings, later loan disbursement, MOU and co-op security). [e21][e18][e19][e20][e67][e76]
- December 31, 2025: SB 2627's deadline for loan decisions and initial disbursement; disbursement after it is now allowed case by case. [e9][e20]
- May 7, 2026: PUCT adopts 16 TAC 25.513 (backup power packages); applications to open in 2027. [e59]
- May 21, 2026: Friendswood expansion connects; June 23, 2026: fifth completion bonus grant agreement signed. [e62][e61]
- June 1, 2026: grant cap steps down from $120,000/MW to $80,000/MW for later interconnections. [e7]
- June 1, 2026 - May 31, 2027: first test period for the Friendswood grant. [e64]
- November 4, 2026: latest update of the PUCT TxEF FAQ in the saved sources. [e60]
- June 1, 2029: grant eligibility ends for later interconnections unless the commission extends for extenuating circumstances. [e39]

## Say it like this

(Guidance) The Texas Energy Fund offers three percent, 20-year loans for dispatchable plants of at least 100 MW, plus per-MW completion bonuses for dispatchable plants built in ERCOT, with a 10,000 MW ceiling on loans and a separate 10,000 MW ceiling on grants. [e2][e4][e7][e18][e19] The grant is paid out over ten years and only if the unit performs in the 100 tightest net-load hours each year, so it rewards availability when the grid needs it. [e38][e22][e30]

## Common confusion

(Guidance) TEF money is not a market payment or a capacity market: it is a state loan and grant program run by the commission from a special state fund. [e1][e2] Its in-ERCOT loans and completion bonus grants do not fund energy storage facilities. [e3][e6] The $7.2 billion and 10,000 MW figures are ceilings, not amounts awarded. [e8][e18][e19]

(Guidance) The grant's per-MW figure is a maximum award, not a guaranteed payment: each annual tenth can be discounted or withheld on performance. [e7][e26][e30] The loan PAF and the grant PRF use the same HSL-to-obligated-capacity idea but over different windows: the PAF over a rolling 12 months, the PRF over 100 assessed hours. [e42][e24]

## Questions

### What does the Texas Energy Fund finance in ERCOT?

Low-interest loans for new or upgraded dispatchable generation of at least 100 MW, and completion bonus grants for dispatchable generation built in the ERCOT region. [e2][e6] Outside ERCOT it funds existing transmission and distribution infrastructure and existing generating facilities, and the backup power package program will fund packages at critical facilities. [e55][e77][e53][e78]

### What are the loan terms?

Twenty years, ratable payments starting at the third anniversary of the estimated commercial operation date, three percent interest, and up to 60 percent of estimated cost for construction loans. [e4][e5] The borrower posts a three percent deposit and must meet an 85 percent PAF covenant for the term. [e44][e41]

### How is a completion bonus grant payment calculated?

Each year's payment is one-tenth of the award, paid in full if the resource's PRF is at or above the reference group's 90th percentile and its ARF is 0.9 to one, scaled down between the 50th and 90th percentiles, cut further for low availability, and withheld at or below the median. [e26][e29][e30][e31]

### Why measure grant performance in the 100 highest net-load hours?

The statute tells the commission to set standards for the 100 hours with the least operating reserves each year, and the rule identifies them by the highest peak net load, so the grant pays for being available when wind, solar and storage leave the most load for other resources. [e13][e22]

### What if a plant interconnects on June 2, 2026 instead of May 21?

Its cap falls from $120,000 to $80,000 per MW unless the commission finds extenuating circumstances; for a 146 MW unit that would be $11.68 million instead of $17.52 million by simple arithmetic. [e7][e61][e63]

### How does ERCOT use TEF in its reliability reports?

The December 2025 CDR varies the amount and timing of TEF project capacity in two scenarios: one counts all TEF projects regardless of milestone conditions and assumes their reported dates, the other delays non-brownfield TEF projects by a year. [e15][e11][e68]

### What changed with SB 2268?

Separate 10,000 MW ceilings for loans and for grants, permission to disburse initial loan funds after December 31, 2025 case by case, and alternative security for MOU and co-op construction loans. [e18][e19][e20][e67][e76]

## Open items

- Individual loan awards (borrowers, amounts, status) and the first four completion bonus grant agreements are not in the saved sources; only the fifth grant (Friendswood) and the "(TEF)" tags in ERCOT resource lists are.
- The fund balance and appropriation size were not found. HB 1500 (88th Legislature) contains no Texas Energy Fund text in the saved copy.
- The constitutional amendment text (Section 49-q, Article III) is not saved; only the PURA cross-reference and the PUCT FAQ's election date are.
- Whether the commission has actually extended any loan disbursement past December 31, 2025, or extended the completion bonus interconnection deadlines, is not in the saved sources.
- The statute (34.0104(g)) speaks of an escrow deposit; the PUCT rule also allows a standby letter of credit. The saved sources do not say whether the rule was amended after SB 2268; 25.510 is the version marked amendment effective 10/02/24 and 25.511 the version effective 5/15/2024.
- The 25.511 grant payment formula is an equation image in the saved text; it is described here from the variable list and the rule's worked example, which reproduce consistently.
- "The commission" in Chapter 34 is read as the PUCT based on SB 2627 SECTION 5 and the PUCT FAQ; the chapter's own definition of commission was not quoted.
- The Texas Backup Power Package rule (16 TAC 25.513) and Outside ERCOT grant rule (25.512) are not saved; only the FAQ describes them.
