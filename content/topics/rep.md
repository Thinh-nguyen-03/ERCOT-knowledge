---
id: rep
name: REP (Retail Electric Provider)
aliases: [REP, Retail Electric Provider, POLR, REP of record, Option 1 REP, Option 2 REP, Option 3 REP]
kind: entity
domain: structure
level: 1
depth: deep
lenses: [retail, analyst, portfolio]
as_of: 2026-11-21
links:
  - to: lse
    type: is-a
    note: LSEs include Competitive Retailers, which includes REPs. [e13]
  - to: qse
    type: related
    note: A REP must have its QSE designation approved by ERCOT before enrolling customer ESI IDs. [e6]
  - to: retail-choice
    type: part-of
    note: REPs exist because Texas gave most retail customers a choice of provider from January 1, 2002. [e5]
  - to: tdsp
    type: contrasts-with
    note: After January 1, 2002 a transmission and distribution utility may not sell electricity except to buy for its own needs, and a REP may not own generation. [e2][e7]
  - to: esi-id
    type: related
    note: Each ESI ID has at most one REP of record at a time. [e8]
  - to: polr
    type: related
    note: A provider of last resort must offer the standard retail service package to any requesting customer and to customers of a REP that fails to serve them. [e34][e35]
  - to: mass-transition
    type: causes
    note: ERCOT initiates a Mass Transition of the ESI IDs of a breaching market participant that is also an LSE when its rights are revoked or agreements terminated. [e37]
  - to: credit-tpe
    type: related
    note: ERCOT must approve a REP's QSE designation before the CR enrolls Customer ESI IDs; see the topic for credit and TPE mechanics. [e6]
  - to: retail-hedging
    type: related
    note: Wholesale indexed products may not be offered to residential or small commercial customers. [e28]
  - to: retailer-defaults-2021
    type: related
    note: See the case topic for the 2021 retailer failures.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Retail Electric Provider (REP)"
    quote: "As defined in P.U.C. SUBST. R. 25.5, Definitions, an Entity that sells electric energy to retail Customers in Texas but does not own or operate generation assets and is not an MOU or EC."
  - id: e2
    source: puct-25-5
    locator: "Section 25.5, definition of Retail electric provider (REP)"
    quote: "A person that sells electric energy to retail customers in this state. A retail electric provider may not own or operate generation assets."
  - id: e3
    source: puct-25-107
    locator: "Section 25.107(a)(1)(A)"
    quote: "A person must obtain a REP certificate under this section before purchasing, taking title to, or reselling electricity to provide retail electric service."
  - id: e4
    source: puct-25-107
    locator: "Section 25.107(a)(1)(A)"
    quote: "A person may certify as an Option 1 REP, Option 2 REP, or Option 3 REP under this section."
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.102(a)"
    quote: "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice on and after January 1, 2002."
  - id: e6
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e7
    source: pura-39
    locator: "PURA Sec. 39.105(a)"
    quote: "After January 1, 2002, a transmission and distribution utility may not sell electricity or otherwise participate in the market for electricity except for the purpose of buying electricity to serve its own needs."
  - id: e8
    source: puct-25-5
    locator: "Section 25.5, definition of REP of record"
    quote: "There can be no more than one REP of record assigned to an ESI ID at any specific point in time."
  - id: e9
    source: pura-39
    locator: "PURA Sec. 39.352(b)"
    quote: "The commission shall issue a certificate to provide retail electric service to a person applying for certification who demonstrates:(1)  the financial and technical resources to provide continuous and reliable electric service to customers in the area for which the certification is sought;(2)  the managerial and technical ability to supply electricity at retail in accordance with customer contracts;(3)  the resources needed to meet the customer protection requirements of this title;  and(4)  ownership or lease of an office located within this state for the purpose of providing customer service, accepting service of process, and making available in that office books and records sufficient to establish the retail electric provider's compliance with the requirements of this subchapter."
  - id: e10
    source: pura-39
    locator: "PURA Sec. 39.106(a)-(c)"
    quote: "The commission shall designate retail electric providers in areas of the state in which customer choice is in effect to serve as providers of last resort."
  - id: e11
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Additionally, a REP must demonstrate certification by P.U.C. SUBST. R. 25.107, Certification of Retail Electric Providers (REPs), and comply with the remaining requirements of this Section."
  - id: e12
    source: puct-25-107
    locator: "Section 25.107(a)(1)(B)"
    quote: "A REP that outsources retail electric service functions is responsible for those functions in accordance with all applicable laws and commission rules for all activities conducted on its behalf by any third-party provider."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e15
    source: np-16
    locator: "Section 16.3(2)"
    quote: "All CRs must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, prior to commencing operations with ERCOT."
  - id: e16
    source: puct-25-107
    locator: "Section 25.107(c), definitions of Option 1, 2 and 3 REP"
    quote: "Option 1 REP -- A REP that provides its service offerings to any customer class based on geographic service area. Option 2 REP -- A REP that limits its service offerings to specifically identified customers, each of whom contracts for one megawatt or more of capacity. Option 3 REP -- A REP that sells electricity exclusively to a retail customer, other than a small commercial or residential customer, from a distributed generation facility owned by a power generation company (PGC) that has registered in accordance with §25.109 of this title (relating to Registration of Power Generation Companies and Self-Generators) located on the same geographic site as the customer."
  - id: e17
    source: puct-25-107
    locator: "Section 25.107(d), Option 2 application affidavits"
    quote: "An applicant for an Option 2 REP certificate must include a signed, notarized affidavit stating that it will only contract with customers to provide one megawatt or more of capacity. Within 30 days of conditional commission approval of the application and before an Option 2 REP begins serving a customer, the Option 2 REP must file with the commission a signed, notarized affidavit from each customer with which it has contracted to provide one megawatt or more of capacity. The affidavit may be submitted by the applicant while the application for an Option 2 REP certificate is pending. Each customer affidavit must state that the customer understands and accepts the REP’s ability to provide continuous and reliable electric service based on the applicant’s financial, managerial, and technical resources."
  - id: e18
    source: puct-25-107
    locator: "Section 25.107(f), Financial requirements"
    quote: "Financial requirements. An Option 1 REP must, on an ongoing basis, maintain compliance with paragraph (1) of this subsection and, as applicable, paragraph (2) and (3) of this subsection. This subsection does not apply to an Option 2 or Option 3 REP."
  - id: e19
    source: puct-25-107
    locator: "Section 25.107(f)(1)(A), guaranty agreement"
    quote: "A REP may maintain an executed version of the commission approved standard form irrevocable guaranty agreement. (i) The guarantor must be: (I) One or more affiliates of the REP; (II) A financial institution with an investment-grade credit rating; or (III) A provider of wholesale power supply for the REP, or a parent company, sister company, or subsidiary of a power provider with whom the REP has executed a power purchase agreement. (ii) The guarantor must have: (I) An investment-grade credit rating; or (II) Tangible net worth greater than or equal to $100 million, a minimum current ratio (defined as current assets divided by current liabilities) of 1.0, and a debt to total capitalization ratio not greater than 0.60, where all calculations exclude unrealized gains and losses resulting from valuing to market the power contracts and financial instruments used as supply hedges to serve load."
  - id: e20
    source: puct-25-107
    locator: "Section 25.107(f)(1)(B), stand-by letter of credit by ESI ID count (text effective 11/4/2026 per the footer)"
    quote: "A REP may maintain an irrevocable stand-by letter of credit with a face value as determined in clause (i) of this subparagraph, based on the number of electronic service identifiers (ESI IDs) the REP serves in the manner prescribed by clauses (ii) and (iii) of this subparagraph. Additionally, for the first 24 months a REP is serving load it must maintain not less than one million dollars in shareholders’ equity in accordance with clauses (iv) and (v) of this subparagraph (i) Number of ESI IDs Required Value of Letter of Credit < 50,000 $750,000 ≥ 50,000 $1,500,000"
  - id: e21
    source: puct-25-107
    locator: "Section 25.107(f)(1)(B)(iv)-(v), shareholders' equity for first 24 months"
    quote: "For the first 24 months a REP is serving load, a REP must not make any distribution or other payment to any shareholder, person, or other entity if, after giving effect to the distribution or other payment, the REP’s shareholders’ equity is less than one million dollars. Distributions or other payments include dividend distributions, redemptions and repurchases of equity securities, and loans. (v) After a REP has continuously served load for 24 months, a prescribed amount of maintained shareholders’ equity is no longer required."
  - id: e22
    source: puct-25-107
    locator: "Section 25.107(f)(2)(A)(ii), customer deposits coverage"
    quote: "For customer deposits, the escrow account, segregated cash account, or an irrevocable stand-by letter of credit must be adjusted, as necessary, to maintain a minimum of 100% coverage of the REP’s outstanding customer deposits held at the close of each calendar month."
  - id: e23
    source: puct-25-107
    locator: "Section 25.107(f)(3), Bankruptcy disclosure"
    quote: "Bankruptcy disclosure. If a REP files a petition for bankruptcy, is the subject of an involuntary bankruptcy proceeding, or in any other manner becomes insolvent, including being in default with the applicable independent organization or with a TDU: (A) The REP must notify the commission within three working days of this event and must file with the commission a summary of the nature of the event; and"
  - id: e24
    source: puct-25-471
    locator: "Section 25.471(a)(3), customer protection rules are minimum requirements"
    quote: "The rules in this subchapter are minimum, mandatory requirements that must be offered to or complied with for all customers unless otherwise specified. Except for the provisions of §25.495 of this title (relating to Unauthorized Change of Retail Electric Provider), §25.481 of this title (relating to Unauthorized Charges), §25.485(a)-(b) of this title (relating to Customer Access and Complaint Handling), and §25.499 (relating to Acknowledgement of Risk Requirements for Certain Commercial Contracts), a customer other than a residential or small commercial class customer, or a non-residential customer whose load is part of an aggregation in excess of 50 kilowatts, may agree to terms of service that reflect either a higher or lower level of customer protections than would otherwise apply under these rules."
  - id: e25
    source: puct-25-474
    locator: "Section 25.474(b), Purpose"
    quote: "A contested switch in providers shall be presumed to be unauthorized unless the REP provides proof, in accordance with the requirements of this section, of the applicant’s or customer’s authorization and verification."
  - id: e26
    source: puct-25-474
    locator: "Section 25.474(c), disclosures at initial REP selection"
    quote: "in the case of a switch request, the applicant’s right, pursuant to subsection (j) of this section, to review and rescind the terms of service within three federal business days, after receiving the terms of service, without penalty;"
  - id: e27
    source: puct-25-475
    locator: "Section 25.475, prohibited products"
    quote: "A REP, aggregator, or broker is prohibited from offering: (i) an indexed product to a residential or small commercial customer on or after February 1, 2022; or (ii) a wholesale indexed product to a residential or small commercial customer on or after September 1, 2021."
  - id: e28
    source: pura-39
    locator: "PURA Sec. 39.110(b)-(c), wholesale indexed products"
    quote: "(b) An aggregator, a broker, or a retail electric provider may not offer a wholesale indexed product to a residential or small commercial customer.(c) An aggregator, a broker, or a retail electric provider may enroll a customer other than a residential and small commercial customer in a wholesale indexed product only if the provider, aggregator, or broker obtains before the customer's enrollment an acknowledgment signed by the customer that the customer accepts the potential price risks associated with a wholesale indexed product."
  - id: e29
    source: pura-39
    locator: "PURA Sec. 39.110(a)"
    quote: "\"wholesale indexed product\" means a retail electric product in which the price a customer pays for electricity includes a direct pass-through of real-time settlement point prices determined by the independent organization certified under Section 39.151 for the ERCOT power region."
  - id: e30
    source: puct-25-478
    locator: "Section 25.478(e)(1), amount of deposit (residential)"
    quote: "The total of all deposits, initial and additional, required by a REP from any residential customer or applicant: (A) shall not exceed an amount equivalent to the greater of: (i) one-fifth of the customer’s estimated annual billing; or (ii) the sum of the estimated billings for the next two months."
  - id: e31
    source: pura-39
    locator: "PURA Sec. 39.101(h), extreme weather emergency"
    quote: "A retail electric provider, power generation company, aggregator, or other entity that provides retail electric service may not disconnect service to a residential customer during an extreme weather emergency or on a weekend day. The entity providing service shall defer collection of the full payment of bills that are due during an extreme weather emergency until after the emergency is over and shall work with customers to establish a pay schedule for deferred bills. For purposes of this subsection, \"extreme weather emergency\" means a period when:(1) the previous day's highest temperature did not exceed 32 degrees Fahrenheit and the temperature is predicted to remain at or below that level for the next 24 hours according to the nearest National Weather Service reports; or(2) the National Weather Service issues a heat advisory for any county in the relevant service territory, or when such an advisory has been issued on any one of the previous two calendar days."
  - id: e32
    source: puct-25-483
    locator: "Section 25.483(j), Disconnection during extreme weather"
    quote: "must not authorize a disconnection for nonpayment of electric service for any customer in a county in which an extreme weather emergency occurs. A REP must offer residential customers a deferred payment plan upon request by the customer that complies with the requirements of §25.480 of this title (relating to Bill Payment and Adjustments) for bills that become due during the weather emergency."
  - id: e33
    source: puct-25-498
    locator: "Section 25.498(a), Applicability"
    quote: "A REP may not offer prepaid service to residential or small commercial customers unless it complies with this section."
  - id: e34
    source: pura-39
    locator: "PURA Sec. 39.106(b)-(c), (g), provider of last resort"
    quote: "(b) A provider of last resort shall offer a standard retail service package for each class of customers designated by the commission at a fixed, nondiscountable rate approved by the commission.(c) A provider of last resort shall provide the standard retail service package to any requesting customer in the territory for which it is the provider of last resort."
  - id: e35
    source: pura-39
    locator: "PURA Sec. 39.106(g)"
    quote: "(g) In the event that a retail electric provider fails to serve any or all of its customers, the provider of last resort shall offer that customer the standard retail service package for that customer class with no interruption of service to any customer."
  - id: e36
    source: pura-39
    locator: "PURA Sec. 39.101(b)(9)"
    quote: "(9) to receive notice from the retail electric provider that serves the customer when the independent organization certified under Section 39.151 for the ERCOT power region issues an emergency energy alert."
  - id: e37
    source: np-16
    locator: "Section 16.11.6.1.6(3)(b), Mass Transition on revocation"
    quote: "(b) On revocation of some or all of the Market Participant’s rights or termination of the Market Participant’s agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant’s ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT."
---

## Definition

A REP is an entity that sells electric energy to retail customers in Texas but does not own or operate generation assets and is not an MOU or EC. [e1] The PUCT's rule says the same: a REP sells to retail customers in the state and may not own or operate generation assets. [e2]

## How it works

**Two layers: PUCT certification and ERCOT registration.** A person must obtain a REP certificate from the PUCT before purchasing, taking title to, or reselling electricity to provide retail electric service, and may certify as an Option 1, Option 2 or Option 3 REP. [e3][e4] PURA's general certification test is that the applicant demonstrates financial and technical resources, managerial and technical ability, resources to meet customer protection requirements, and an office in Texas; the statute separately provides a narrower route for serving only customers of one megawatt or more who file affidavits (not quoted here). [e9] A REP that outsources functions remains responsible for them. [e12]

**The three certificate options.** In the PUCT's rule an Option 1 REP provides its offerings to any customer class based on geographic service area; an Option 2 REP limits its offerings to specifically identified customers, each contracting for one megawatt or more of capacity; an Option 3 REP sells exclusively to a retail customer other than a small commercial or residential customer, from a distributed generation facility owned by a registered power generation company on the same geographic site. [e16] An Option 2 applicant files a notarized affidavit that it will contract only for one megawatt or more, and must file a notarized affidavit from each customer, stating the customer understands and accepts the REP's ability to provide continuous and reliable service based on its financial, managerial and technical resources. [e17]

**Option 1 financial requirements.** The ongoing financial requirements apply to Option 1 REPs and not to Option 2 or 3. [e18] An Option 1 REP must show access to capital through either a commission-approved irrevocable guaranty agreement, from an affiliate, an investment-grade financial institution or a power supplier, with the guarantor holding an investment-grade rating or meeting tangible net worth, current ratio and debt-to-capitalization tests, [e19] or an irrevocable stand-by letter of credit sized by the number of ESI IDs served: $750,000 below 50,000 ESI IDs and $1,500,000 at 50,000 or more, in the rule text saved here (the footer reads "effective 11/4/2026"). [e20] The letter-of-credit option comes with a shareholders' equity condition: for its first 24 months serving load, a REP may not make a distribution that leaves shareholders' equity below one million dollars, and the prescribed equity requirement lapses after 24 continuous months of serving load. [e21] A REP certified to collect customer deposits must keep them covered at 100% at each calendar month close by an escrow account, segregated cash account or letter of credit. [e22] A REP must notify the PUCT within three working days of a bankruptcy filing, an involuntary bankruptcy proceeding or other insolvency, including default with the independent organization or a TDU. [e23]

**At ERCOT.** A REP is a Competitive Retailer and so an LSE, and it must demonstrate PUCT certification under Section 25.107. [e13][e11] It must have a QSE, and ERCOT must approve the QSE designation before the CR enrolls Customer ESI IDs. [e6] All CRs must complete Retail Market Testing before commencing operations with ERCOT. [e15] Each ESI ID has at most one REP of record at a time. [e8]

**Customer protection rules that shape REP behavior.** The items below summarize PUCT customer protection rules and PURA provisions. [e24]


- The PUCT's customer protection rules are minimum, mandatory requirements; customers other than residential, small commercial, or non-residential customers aggregated above 50 kilowatts may agree to higher or lower protection, except under the listed sections (unauthorized change of REP, unauthorized charges, certain customer access and complaint handling provisions, and acknowledgment of risk for certain commercial contracts). [e24]
- A contested switch is presumed unauthorized unless the REP proves the customer's authorization and verification. [e25] A switch applicant has three federal business days to review and rescind the terms of service without penalty. [e26]
- A REP may not offer a wholesale indexed product (a retail product with direct pass-through of real-time settlement point prices) to a residential or small commercial customer; for other customers it must first obtain a signed acknowledgment of price risk. [e29][e28] The PUCT's disclosure rule separately prohibits offering any indexed product to residential or small commercial customers on or after February 1, 2022, and a wholesale indexed product on or after September 1, 2021. [e27]
- Residential deposits in total may not exceed the greater of one-fifth of the customer's estimated annual billing or the sum of the estimated billings for the next two months. [e30]
- PURA bars disconnecting a residential customer during an extreme weather emergency or on a weekend day, and requires deferring collection of bills due during the emergency; the statute defines the emergency by freezing temperatures or a National Weather Service heat advisory. [e31] The PUCT's rule on disconnection for nonpayment during extreme weather applies to any customer in a county where an emergency occurs and requires a deferred payment plan on request for residential customers. [e32]
- A REP may not offer prepaid service to residential or small commercial customers unless it complies with the prepaid rule. [e33]
- PURA entitles a customer to notice from the REP when ERCOT issues an emergency energy alert. [e36]

## ERCOT context

REPs exist because retail customers in Texas, other than customers of non-opted-in cooperatives and municipally owned utilities, have had customer choice since January 1, 2002. [e5] After that date a transmission and distribution utility may not sell electricity except to buy for its own needs. [e7]

PURA requires the PUCT to designate REPs as providers of last resort in areas where customer choice is in effect. [e10] A provider of last resort offers a standard retail service package at a fixed, nondiscountable rate approved by the commission to any requesting customer, [e34] and if a REP fails to serve any or all of its customers, the provider of last resort offers them that package with no interruption of service. [e35]

Where a breaching market participant is also an LSE, on revocation of some or all of its rights or termination of its agreements, and on notice to the participant and the PUCT, ERCOT shall initiate a Mass Transition of its ESI IDs without needing a PUCT order. [e37]

## Key facts

- REP certificate from the PUCT is required before buying and reselling electricity at retail; there are Option 1, 2 and 3 certification routes. [e3][e4]
- Customer choice began on January 1, 2002 for most retail customers. [e5]
- A REP may not own or operate generation assets. [e2]
- One REP of record per ESI ID at a time. [e8]
- PURA requires an in-state office as a certification condition. [e9]
- Option 1 REP letter of credit in the saved rule text: $750,000 under 50,000 ESI IDs, $1,500,000 at 50,000 or more. [e20]
- Wholesale indexed products are barred for residential and small commercial customers. [e28]

## Say it like this

(Guidance) A REP is the certified retailer that sells power to Texas customers who have choice; it needs a PUCT certificate and a QSE designation approved by ERCOT. By rule it cannot own generation, and the customer protection rules limit how it can price and collect from residential and small commercial customers.

## Common confusion

(Guidance) A REP is not a utility: a transmission and distribution utility may not sell electricity except to buy for its own needs. [e7] A REP is also not the only retailer: MOUs and ECs that offer Customer Choice are Competitive Retailers too. [e14] The three REP "options" are certificate types, not product tiers: they turn on the customers served and the financial showing required. [e16][e18]

## Questions

### Can a REP own power plants?

No. The PUCT definition says a REP may not own or operate generation assets. [e2]

### What does a REP need before it can serve customers?

A PUCT REP certificate, ERCOT registration as an LSE, a QSE whose designation ERCOT has approved, and completion of Retail Market Testing as a CR. [e3][e11][e6][e15]

### What is the difference between an Option 1 and an Option 2 REP?

An Option 1 REP serves any customer class in its geographic service area; an Option 2 REP serves only specifically identified customers of one megawatt or more of capacity. [e16] Option 1 REPs carry the ongoing financial requirements; Option 2 and 3 REPs do not. [e18]

### Why can a REP not sell a real-time price pass-through to a household?

PURA bars offering a wholesale indexed product, which passes real-time settlement point prices through to the customer, to residential or small commercial customers. [e29][e28] For other customers the statute requires a signed price-risk acknowledgment first. [e28]

### What if a REP stops serving its customers?

PURA says the provider of last resort offers those customers the standard retail service package with no interruption of service. [e35]

## Scenarios

### A REP's ERCOT rights are revoked after a payment default. What happens to its customers?

- Where the breaching participant is also an LSE, on revocation of rights or termination of agreements and on notice to it and the PUCT, ERCOT initiates a Mass Transition of its ESI IDs without a PUCT order. [e37]
- Customers of a failed REP are offered the provider of last resort's standard retail service package with no interruption of service. [e35]

## Open items

- Resolved 2026-11-21: Option 1/2/3 distinctions and Option 1 financial requirements are now summarized from the saved 25.107 text. That text carries an "effective 11/4/2026" footer; whether the letter-of-credit amounts differ from earlier versions cannot be checked from the saved sources.
- Bills (25.479), bill payment and adjustments (25.480, including late fees and deferred payment plans) and the Your Rights as a Customer content are not summarized here.
- The history of provider of last resort designations and the 2021 retailer failures is not covered; see the case topic.
- Number of REPs certified or active in ERCOT was not found in the saved sources.
