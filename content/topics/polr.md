---
id: polr
name: POLR (Provider of Last Resort)
aliases: [POLR, Provider of Last Resort, LSP, Large Service Provider, VREP, Voluntary Retail Electric Provider]
kind: rule
domain: structure
level: 2
lenses: [retail, analyst, portfolio]
depth: deep
as_of: 2026-11-21
links:
  - to: mass-transition
    type: related
    note: A mass transition moves ESI IDs from one competitive retailer to a POLR or designated CR (or between TDSPs), as identified by Applicable Legal Authority. [e5]
  - to: rep
    type: related
    note: The PUCT designates retail electric providers to serve as providers of last resort. [e1]
  - to: retail-choice
    type: part-of
    note: POLR applies in areas where customer choice is in effect. [e1]
  - to: puct
    type: related
    note: The PUCT designates POLR providers and sets requirements for POLR service in 16 TAC 25.43. [e1][e3]
  - to: esi-id
    type: related
    note: A mass transition moves ESI IDs to a POLR or designated CR. [e5]
  - to: retailer-defaults-2021
    type: related
    note: See the retailer-defaults-2021 topic for the 2021 retailer failures; in Griddy's February 2021 mass transition the PUCT found ERCOT transitioned 9,926 customers to POLRs. [e38]
  - to: noe
    type: related
    note: A municipally owned utility or electric cooperative that opts into customer choice designates its own POLR (or delegates to the PUCT). [e31][e32]
  - to: tx-set
    type: related
    note: The 814_14 Drop Enrollment Request goes from ERCOT to the POLR or designated CR in a mass transition. [e39]
  - to: qse
    type: related
    note: ERCOT may adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect load taken on in a mass transition. [e34]
evidence:
  - id: e1
    source: pura-39
    locator: "PURA Sec. 39.106(a), (c)"
    quote: "The commission shall designate retail electric providers in areas of the state in which customer choice is in effect to serve as providers of last resort."
  - id: e2
    source: pura-39
    locator: "PURA Sec. 39.106(g)"
    quote: "In the event that a retail electric provider fails to serve any or all of its customers, the provider of last resort shall offer that customer the standard retail service package for that customer class with no interruption of service to any customer."
  - id: e3
    source: puct-25-43
    locator: "16 TAC 25.43(a), Purpose"
    quote: "This section establishes the requirements for Provider of Last Resort (POLR) service and ensures that it is available to any requesting retail customer and any retail customer who is transferred to another retail electric provider (REP) by the Electric Reliability Council of Texas (ERCOT) because the customer’s REP failed to provide service to the customer or failed to meet its obligations to the independent organization."
  - id: e4
    source: puct-25-43
    locator: "16 TAC 25.43(d)(1)-(4), POLR service"
    quote: "There are two types of POLR providers: VREPs and LSPs. (2) For the purpose of POLR service, there are four classes of customers: residential, small nonresidential, medium non-residential, and large non-residential."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Mass Transition"
    quote: "The transition of Electric Service Identifiers (ESI IDs) from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in a quantity or within a timeframe identified by Applicable Legal Authority."
  - id: e6
    source: puct-25-43
    locator: "16 TAC 25.43(m)(1), Rates applicable to POLR service"
    quote: "A VREP must provide service to customers using a market-based, month-to-month product."
  - id: e7
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A)(iii), LSP energy charge"
    quote: "Beginning on the 10th of each month, an LSP energy charge must be the average of the actual Real-Time Settlement Point Prices (RTSPPs) for the applicable load zone for the preceding calendar month (the historical average RTSPP) multiplied by the number of kWhs the customer used during that billing period and further multiplied by 120%."
  - id: e8
    source: puct-25-43
    locator: "16 TAC 25.43(g)(2) and (h)"
    quote: "POLR providers must serve two-year terms."
  - id: e9
    source: puct-25-43
    locator: "16 TAC 25.43(d)(4)"
    quote: "A POLR provider must offer a basic, standard retail service package to customers it is designated to serve, which is limited to: (A) Basic firm service; and (B)Call center facilities available for customer inquiries."
  - id: e10
    source: puct-25-43
    locator: "16 TAC 25.43(b), Application"
    quote: "This section does not apply when an electric cooperative or a municipally owned utility (MOU) designates a POLR provider for its certificated service area. However, this section is applicable when an electric cooperative delegates its authority to the commission in accordance with subsection (r) of this section to select a POLR provider for the electric cooperative’s service area."
  - id: e11
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A), LSP residential rate"
    quote: "Subparagraphs (A)-(C) of this paragraph establish the maximum rate for POLR service charged by an LSP. An LSP may charge a rate less than the maximum rate if it charges the lower rate to all customers in a mass transition that are in the same class and POLR area. (A) Residential customers. The LSP rate for the residential customer class must be determined by the following formula:"
  - id: e12
    source: puct-25-43
    locator: "16 TAC 25.43(c), definition of VREP"
    quote: "Voluntary retail electric provider (VREP) -- A REP that has volunteered to provide POLR service pursuant to subsection (i) of this section."
  - id: e13
    source: puct-25-43
    locator: "16 TAC 25.43(c), definition of LSP"
    quote: "Large service provider (LSP) -- A REP that is designated to provide POLR service pursuant to subsection (j) of this section."
  - id: e14
    source: pura-39
    locator: "PURA Sec. 39.106(b)"
    quote: "A provider of last resort shall offer a standard retail service package for each class of customers designated by the commission at a fixed, nondiscountable rate approved by the commission."
  - id: e15
    source: pura-39
    locator: "PURA Sec. 39.106(f)"
    quote: "In the event that no retail electric provider applies to be the provider of last resort for a given area of the state on reasonable terms and conditions, the commission may require a retail electric provider to become the provider of last resort as a condition of receiving or maintaining a certificate under Section 39.352."
  - id: e16
    source: puct-25-43
    locator: "16 TAC 25.43(h) and (h)(1), REP eligibility to serve as a POLR provider"
    quote: "In each even-numbered year, the commission will determine the eligibility of certified REPs to serve as POLR providers for a term scheduled to commence in January of the next year."
  - id: e17
    source: puct-25-43
    locator: "16 TAC 25.43(h)(1), REP eligibility to serve as a POLR provider"
    quote: "A REP must file, by July 10th of each evennumbered year, by service area, information on the classes of customers it provides service to, and for each customer class, the number of ESI IDs the REP serves and the retail sales in megawatt-hours for the annual period ending March 31 of the current year."
  - id: e18
    source: puct-25-43
    locator: "16 TAC 25.43(h)(2), REP eligibility to serve as a POLR provider"
    quote: "Eligibility to be designated as a POLR provider is specific to each POLR area and customer class. A REP is eligible to be designated a POLR provider for a particular customer class in a POLR area, unless:"
  - id: e19
    source: puct-25-43
    locator: "16 TAC 25.43(h)(2)(B), REP eligibility to serve as a POLR provider"
    quote: "The sum of the numeric portion of the REP’s percentage of ESI IDs served and percentage of retail sales by MWhs in the POLR area, for the particular class, is less than 1.0;"
  - id: e20
    source: puct-25-43
    locator: "16 TAC 25.43(h)(2)(D), REP eligibility to serve as a POLR provider"
    quote: "On the date of the commencement of the term, the REP or its predecessor will not have served customers in Texas for at least 18 months;"
  - id: e21
    source: puct-25-43
    locator: "16 TAC 25.43(i), VREP list"
    quote: "A REP may submit a request to be a VREP no earlier than June 1, and no later than July 31, of each even-numbered year unless otherwise determined by the executive director."
  - id: e22
    source: puct-25-43
    locator: "16 TAC 25.43(i), VREP list"
    quote: "This filing must include a description of the REP’s capabilities to serve additional customers as well as the REP’s current financial condition in enough detail to demonstrate that the REP is capable of absorbing a mass transition of customers without technically or financially distressing the REP and the specific information set out in this subsection."
  - id: e23
    source: puct-25-43
    locator: "16 TAC 25.43(i)(1), VREP list"
    quote: "A VREP must provide to the commission the name of the REP, the appropriate contact person with current contact information, which customer classes the REP is willing to serve within each POLR area, and the number of ESI IDs the REP is willing to serve by customer class and POLR area in each transition event."
  - id: e24
    source: puct-25-43
    locator: "16 TAC 25.43(j)(2), LSPs"
    quote: "In each POLR area, for each customer class, the commission will designate up to 15 LSPs. The eligible REPs that have the greatest market share based upon retail sales in megawatthours, by customer class and POLR area must be designated as LSPs. Commission staff will designate the LSPs by October 15th of each even-numbered year, based upon the data submitted to the commission under subsection (h) of this section. Designation as a VREP does not affect a REP’s eligibility to also serve as an LSP."
  - id: e25
    source: puct-25-43
    locator: "16 TAC 25.43(j)(4), LSPs"
    quote: "An LSP serving transitioned residential and small non-residential customers under a rate prescribed by subsection (m)(2) of this section must move such customers to a market-based month-to-month product, with pricing for such product to be effective no later than either the 61st day of service by the LSP or beginning with the customer’s next billing cycle date following the 60th day of service by the LSP."
  - id: e26
    source: puct-25-43
    locator: "16 TAC 25.43(j)(4)(B), LSPs"
    quote: "The LSP is not required to transfer to a market-based product any transitioned customer who is delinquent in payment of any charges for POLR service to such LSP as of the 60th day of service."
  - id: e27
    source: puct-25-43
    locator: "16 TAC 25.43(j)(5), LSPs"
    quote: "Upon a request from an LSP and a showing that the LSP will be unable to maintain its financial integrity if additional customers are transferred to it under this section, the commission may relieve an LSP from a transfer of additional customers."
  - id: e28
    source: puct-25-43
    locator: "16 TAC 25.43(k)(1), Designation of an LSP affiliate"
    quote: "An LSP may request the commission designate an LSP affiliate to provide POLR service on behalf of the LSP either with the LSP’s filing under subsection (h) of this section or as a separate filing in the current term project. The filing must be made at least 30 days prior to the date when the LSP affiliate is to begin providing POLR service on behalf of the LSP."
  - id: e29
    source: puct-25-43
    locator: "16 TAC 25.43(e)(3), Standards of service"
    quote: "An LSP that has received commission approval to designate one of its affiliates to provide POLR service on behalf of the LSP pursuant to subsection (k) of this section must retain responsibility for the provision of POLR service by the LSP affiliate and remains liable for violations of applicable laws and commission rules and all financial obligations of the LSP affiliate associated with the provisioning of POLR service on its behalf by the LSP affiliate."
  - id: e30
    source: puct-25-43
    locator: "16 TAC 25.43(l)(2), Mass transition of customers to POLR providers"
    quote: "If the number of ESI IDs exceeds the amount the VREPs are designated to serve, ERCOT must assign remaining ESI IDs to LSPs in a non-discriminatory fashion, in accordance with their percentage of market share based upon retail sales in megawatt-hours, on a random basis within a class and POLR area, except that a VREP that is also an LSP that volunteers to serve at least 1% of its market share for a class of customers in a POLR area must be exempt from the LSP allocation up to 1% of the class and POLR area."
  - id: e31
    source: pura-40
    locator: "PURA Sec. 40.053(c)"
    quote: "On its initiation of customer choice, a municipally owned utility may designate itself or one or more other entities as the provider or providers of last resort for customers within the municipally owned utility's certificated service area as that area existed on the date of the utility's initiation of customer choice."
  - id: e32
    source: pura-41
    locator: "PURA Sec. 41.053(c)"
    quote: "On its initiation of customer choice, an electric cooperative shall designate itself or another entity as the provider of last resort for retail customers within the electric cooperative's certificated service area and shall fulfill the role of default provider of last resort in the event no other entity is available to act in that capacity."
  - id: e33
    source: puct-25-43
    locator: "16 TAC 25.43(r), Electric cooperative delegation of authority"
    quote: "An electric cooperative that has adopted customer choice may select to delegate to the commission its authority to select POLR providers under PURA §41.053(c) in its certificated service area in accordance with this section."
  - id: e34
    source: np-16
    locator: "Section 16.11.4.3, definition of ILE"
    quote: "In the event of a Mass Transition necessitated by the default of a Counter-Party representing a QSE associated with an LSE, ERCOT may adjust the TPE of the Counter-Parties representing QSEs that are qualified as Providers of Last Resort (POLRs) to reflect the estimated Incremental Load Exposure (ILE) resulting from the Mass Transition."
  - id: e35
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A)(iii), LSP energy charge"
    quote: "The LSP energy charge must not exceed 160%of the preceding calendar month’s LSP energy charge. The applicable load zone will be the load zone located partially or wholly in the customer’s TDU service territory with the highest average under the historical average RTSPP calculation."
  - id: e36
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A)(ii), LSP customer charge"
    quote: "LSP customer charge must be $0.09 per kWh."
  - id: e37
    source: puct-25-43
    locator: "16 TAC 25.43(m)(2)(A)(i), Non-bypassable charges"
    quote: "Non-bypassable charges must be all TDU charges and credits for the appropriate customer class in the applicable service territory and other charges including ERCOT administrative charges, nodal fees or surcharges, reliability unit commitment (RUC) capacity short charges attributable to LSP load, and applicable taxes from various taxing or regulatory authorities, multiplied by the level of kWh and kW used, where appropriate."
  - id: e38
    source: puct-51859-griddy-order
    locator: "Order, Finding of Fact 34 (Mass Transition to Providers of Last Resort)"
    quote: >-
      Between February 26, 2021 and March 2,2021, following ERGOI's revocation of
      Griddy's market participant rights, ERCOT executed a mass transition of Griddy's
      customers to providers of last resort. In total, ERCOT transitioned 9,926 Griddy customers
      to providers of last resort.
  - id: e39
    source: np-19
    locator: "Section 19.3.1(22)(a), Drop Enrollment Request (814_14)"
    quote: "From ERCOT to the POLR or designated CR, is used in response to a Mass Transition."
  - id: e40
    source: puct-25-43
    locator: "16 TAC 25.43(e)(1), Standards of service"
    quote: "However, in lieu of providing terms of service to a transitioned customer under subsection (f) of this section and under a rate prescribed by subsection (m)(2) of this section an LSP may at its discretion serve the customer pursuant to a market-based month-tomonth product, provided it serves all transitioned customers in the same class and POLR area pursuant to the product."
  - id: e41
    source: puct-25-43
    locator: "16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (financial responsibility)"
    quote: "The POLR provider is financially responsible for all costs of providing electricity to customers from the time the transfer or initiation of service is complete until such time as the customer ceases taking service under this section."
  - id: e42
    source: puct-25-43
    locator: "16 TAC 25.43(l)(1), Mass transition of customers to POLR providers"
    quote: "ERCOT must first transfer customers to VREPs, up to the number of ESI IDs that each VREP has offered to serve for each customer class in the POLR area. ERCOT must use the VREP list to assign ESI IDs to the VREPs in a non-discriminatory manner, before assigning customers to the LSPs. A VREP must not be assigned more ESI IDs than it has indicated it is willing to serve pursuant to subsection (i) of this section."
  - id: e43
    source: puct-25-107
    locator: "16 TAC 25.107(k)(15), Revocation of a REP certificate (significant violations)"
    quote: "Failure to serve as a POLR if required to do so by the commission under §25.43 of this title;"
  - id: e44
    source: pura-39
    locator: "PURA Sec. 39.106(d)"
    quote: "The commission shall designate the provider or providers of last resort not later than June 1, 2001."
  - id: e45
    source: rmg-07
    locator: "Section 7.11.1.4.1.2(13), ERCOT Pre-Launch Responsibilities in a Mass Transition"
    quote: "Assign ESI IDs to the POLR(s) as directed by ALA and the POLR rule;"
  - id: e46
    source: puct-25-43
    locator: "16 TAC 25.43(m)(1), Rates applicable to POLR service"
    quote: "The VREP must use the same market-based, month-to-month product for all customers in a mass transition that are in the same class and POLR area."
  - id: e47
    source: rmg-07
    locator: "Section 7.11.1(1), Transition Process"
    quote: "Each opt-in Municipally Owned Utility (MOU) or opt-in Electric Cooperative (EC) without an affiliated POLR that has not delegated authority to designate POLRs to the Public Utility Commission of Texas (PUCT), as applicable to opt-in ECs, must provide its initial POLR allocation methodology to ERCOT no later than 30 days prior to the Customer Choice opt-in date using Section 9, Appendices, Appendix J7, Mass Transition Allocation Methodology."
---

## Definition

A Provider of Last Resort (POLR) is a retail electric provider the PUCT designates, in areas where customer choice is in effect, to serve as providers of last resort. [e1] The PUCT rule says that service is available to any requesting customer and to customers transferred because their REP failed. [e3] PURA says that if a REP fails to serve its customers, the POLR must offer the standard retail service package with no interruption of service. [e2]

## How it works

PUCT rule 25.43 makes POLR service available to any requesting retail customer and to customers ERCOT transfers because their REP failed to provide service or meet its obligations to ERCOT. [e3] There are two types of POLR providers, VREPs and LSPs. A VREP is a REP that has volunteered to provide POLR service, and an LSP is a REP designated to provide it. [e4][e12][e13] There are four customer classes: residential, small non-residential, medium non-residential and large non-residential. [e4] A POLR provider offers a basic standard service package, limited to basic firm service and call center facilities. [e9] PURA says the standard package is offered at a fixed, nondiscountable rate approved by the commission. [e14] If no REP applies to be POLR for an area on reasonable terms, PURA lets the PUCT require a REP to become the POLR as a condition of receiving or maintaining a certificate under Section 39.352. [e15] POLR providers serve two-year terms. [e8]

Selection cycle (even-numbered years). The PUCT determines the eligibility of certified REPs in each even-numbered year for a term scheduled to commence in January of the next year. [e16] A REP files by July 10 of each even-numbered year, by service area, the customer classes it serves and, for each, its ESI ID count and retail MWh for the annual period ending March 31 of that year. [e17] Eligibility is specific to each POLR area and customer class. [e18] Among the grounds for ineligibility: the sum of the REP's percentage of ESI IDs and percentage of retail MWh in the POLR area for the class is less than 1.0, [e19] and the REP or its predecessor will not have served customers in Texas for at least 18 months on the date the term starts. [e20] These are two of several listed conditions, not the full list.

VREPs. A REP may request to be a VREP from June 1 through July 31 of each even-numbered year, unless the executive director sets otherwise. [e21] The filing must show the REP can absorb a mass transition without technical or financial distress, [e22] and state which classes it will serve in each POLR area and how many ESI IDs it will take in each transition event. [e23]

LSPs. For each customer class in each POLR area the PUCT designates up to 15 LSPs, the eligible REPs with the greatest retail MWh market share, and staff designates them by October 15 of each even-numbered year. Being a VREP does not affect eligibility to be an LSP. [e24] An LSP may ask the PUCT to designate an affiliate to provide POLR service on its behalf, with a filing at least 30 days before the affiliate begins. [e28] The LSP remains responsible and liable for the affiliate's POLR service. [e29] An LSP can ask the PUCT to be relieved of further transfers if it shows it cannot maintain its financial integrity. [e27]

Who gets which customers in a mass transition. ERCOT transfers customers first to VREPs, up to the number each volunteered, using the VREP list in a non-discriminatory manner, and never more than a VREP said it would serve. [e42] If ESI IDs exceed what VREPs are designated to serve, ERCOT assigns the rest to LSPs by their share of retail MWh on a random basis within a class and POLR area; a VREP that is also an LSP and volunteers at least 1% of its market share is exempt from the LSP allocation up to 1% of the class and POLR area. [e30] The Retail Market Guide lists "assign ESI IDs to the POLR(s) as directed by ALA and the POLR rule" among ERCOT's pre-launch responsibilities. [e45]

Pricing. A VREP must use a market-based, month-to-month product and the same product for all customers in a mass transition in the same class and POLR area. [e6][e46] The rule sets a maximum rate for POLR service charged by an LSP, with a formula for the residential class. [e11] Under it the LSP rate is a sum of non-bypassable charges, an LSP customer charge and an LSP energy charge divided by kWh used. [e11] Non-bypassable charges include TDU charges and credits, ERCOT administrative charges, nodal fees or surcharges, RUC capacity short charges attributable to LSP load and taxes. [e37] The rule states the LSP customer charge as $0.09 per kWh. [e36] Beginning on the 10th of each month, the LSP energy charge is the preceding month's average real-time SPP for the load zone, applied to the customer's kWh and multiplied by 120%. [e7] That energy charge must not exceed 160% of the preceding month's LSP energy charge, and the applicable load zone is the one in the customer's TDU territory with the highest historical average RTSPP. [e35] An LSP may instead serve transitioned customers on a market-based month-to-month product if it does so for all transitioned customers in the same class and POLR area. [e40]

Moving off the POLR rate. An LSP must move transitioned residential and small non-residential customers to a market-based month-to-month product no later than the 61st day of service (or the next billing cycle after day 60), [e25] except that it is not required to move a customer delinquent in POLR charges as of day 60. [e26] The POLR provider is financially responsible for the costs of providing electricity to customers from when the transfer is complete until the customer stops taking service under the rule. [e41]

## ERCOT context

The Protocols define a mass transition as the transition of ESI IDs from one competitive retailer to a POLR or designated CR (or between TDSPs), in a quantity or timeframe identified by Applicable Legal Authority. [e5] The PUCT designates POLR providers and sets requirements for POLR service. [e1][e3] ERCOT may adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect the load they would take on in a mass transition. [e34] For the first-hand 2021 case, the PUCT found ERCOT transitioned 9,926 Griddy customers to POLRs between February 26 and March 2, 2021. [e38] Failure to serve as a POLR if required by the PUCT under 25.43 is listed among significant violations that can support revocation of a REP certificate. [e43]

Cooperatives and municipal utilities. The PUCT's 25.43 selection rules do not apply when a co-op or muni designates its own POLR provider for its territory, [e10] and a cooperative may delegate its authority to select POLR providers to the PUCT under subsection (r). [e33] PURA says a municipally owned utility on initiating customer choice may designate itself or others as POLR [e31] and an electric cooperative shall designate itself or another entity. [e32] The Retail Market Guide requires an opt-in MOU or EC without an affiliated POLR that has not delegated to the PUCT to give ERCOT its POLR allocation methodology; see the mass-transition topic. [e47]

## Timeline

- 2001-06-01: PURA required the PUCT to designate providers of last resort by this date. [e44]
- Even-numbered years: VREP requests June 1 to July 31; REP eligibility filings by July 10; LSP designations by October 15; two-year terms start the following January. [e21][e17][e24][e16][e8]

## Key facts

- PURA requires the PUCT to designate POLRs where customer choice is in effect. [e1]
- Two POLR types (VREP, LSP) and four customer classes. [e4]
- POLR providers serve two-year terms; up to 15 LSPs per class and POLR area. [e8][e24]
- VREPs are used first in a mass transition; LSPs take the rest by market share. [e42][e30]
- Residential customers: the LSP energy charge is the preceding month's average real-time SPP for the load zone times the customer's kWh, multiplied by 120%, capped at 160% of the prior month's LSP energy charge. [e7][e35]
- A VREP serves on a market-based, month-to-month product. [e6]

## Say it like this

(Guidance) The POLR is the retailer of last resort that picks up customers when their REP fails, so no one loses service. The PUCT designates volunteers and the largest retailers every two years, and ERCOT moves the customers through a mass transition, volunteers first.

## Common confusion

POLR is not the same as mass transition: the POLR is the receiving provider and mass transition is the process that moves the ESI IDs. [e5] The PUCT's selection rules do not apply where an electric cooperative or municipally owned utility designates its own POLR provider, unless a cooperative delegates that authority to the PUCT. [e10] A VREP is also not a "volunteer to be dropped in": it states in advance how many ESI IDs it will take per class and area, and ERCOT cannot assign more. [e23][e42]

## Questions

### Who ends up serving customers when their REP fails?

A POLR provider: customers are transferred by ERCOT to a VREP or LSP, with no interruption of service. [e2][e3] VREPs are filled first up to what they offered. [e42]

### How is the LSP's residential rate set?

By the 16 TAC 25.43(m)(2) formula, which sets a maximum rate. For residential customers, the energy charge is the preceding month's average real-time SPP for the load zone, applied to the customer's kWh and multiplied by 120%, and it may not exceed 160% of the prior month's LSP energy charge. [e11][e7][e35]

### Why do LSPs have to move customers to a market product after about 60 days?

The rule requires an LSP to move transitioned residential and small non-residential customers to a market-based month-to-month product by the 61st day of service (or the next billing cycle after day 60), except delinquent customers. [e25][e26] The saved sources do not give the policy reason.

### What if a REP that is a POLR cannot take more customers?

An LSP can ask the PUCT to be relieved of further transfers by showing it cannot maintain its financial integrity. [e27]

### Which REPs can be an LSP?

A REP must first be eligible; for example, it is not eligible if its combined ESI ID and MWh share in the POLR area for the class is less than 1.0 (among other tests). The PUCT then designates up to 15 LSPs with the greatest MWh market share per class and POLR area. [e19][e24]

## Scenarios

### A mid-size REP is terminated by ERCOT. How do its customers get placed?

- ERCOT starts a mass transition (see the mass-transition topic for the triggers).
- ERCOT assigns ESI IDs (as directed by the POLR rule) to VREPs first, up to each VREP's stated number and in a non-discriminatory order. [e42]
- Remaining ESI IDs go to LSPs by retail MWh share within the class and POLR area. [e30]
- Customers pay the LSP maximum rate unless the LSP serves them on a market product, and must move to a market product by about day 61. [e11][e40][e25]

## Open items

- The saved 16 TAC 25.43 copy carries an effective date of 11/23/2022 (P 53820); later amendments, if any, are not in the saved copy.
- The LSP customer charge in the rule is written as "$0.09 per kWh"; whether that is a per-kWh or per-customer-per-month figure is not clarified in the saved text.
- The small and medium non-residential LSP energy charge (125%) and large non-residential formula (demand charge) were seen but not quoted here.
- The affiliate designation path (k)(3)-(4), ERCOT/TDU challenges (h)(5) and (i)(5), and the 60-day notice requirements (t) were not described.
- Why the PUCT chose 120% (residential) and 160% cap is not stated in the saved sources.
- Resolved 2026-11-21: VREP and LSP selection timeline and affiliate designation; mass transition mechanics are in the mass-transition topic; the 2021 Griddy case is cited above.
