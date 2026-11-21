---
id: market-information-system
name: MIS (Market Information System) & Public Data
aliases: [MIS, Market Information System, MIS Secure Area, MIS Certified Area]
kind: concept
domain: structure
level: 2
lenses: [analyst, retail, trading]
depth: deep
as_of: 2026-11-21
links:
  - to: sixty-day-disclosure
    type: related
    note: Data the Protocols require on the ERCOT website must be made available on a non-discriminatory basis. [e6]
  - to: settlement-statements
    type: related
    note: The Securitization Default Charge Invoice, one settlement-related invoice, is posted to the MIS Certified Area. [e7]
  - to: ercot
    type: related
    note: ERCOT creates and maintains the MIS. [e3]
  - to: nodal-protocols
    type: related
    note: The Protocols say what ERCOT posts to the MIS. [e4]
  - to: qse
    type: related
    note: Market Participants access the MIS with authenticated credentials. [e1]
  - to: ufe
    type: related
    note: Under the current text of Section 11.5.1.2, ERCOT posts TSP and DSP load with loss and UFE allocations to the MIS Secure Area; a pending NPRR1239 replacement would move that posting to the ERCOT website. [e8][e37][e38]
  - to: puct
    type: related
    note: PUCT rule 25.506 sets the public posting timelines (two days aggregated, 60 days entity-specific) for resource and load information. [e19][e20]
  - to: sced
    type: related
    note: ERCOT posts information derived from each SCED execution on its website two days after the Operating Day. [e35]
  - to: trading-hub
    type: related
    note: The ERCOT website's Real-Time LMP display for Load Zones and Trading Hubs shows LMP values without the Real-Time price adders. [e34]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Market Information System (MIS)"
    quote: "An electronic communications interface established and maintained by ERCOT that enables Market Participants, as a group or individually, to access certain information through the use of authenticated credentials."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Market Information System (MIS) Secure Area"
    quote: "The portion of the MIS that is available only to registered Market Participants."
  - id: e3
    source: np-12
    locator: "Section 12.1, Overview, paragraph (1)"
    quote: "ERCOT shall create and maintain an electronic ERCOT Market Information System (MIS). The purpose of the MIS is to provide certain information available only to applicable Entities in the MIS Secure Area and to provide certain information available only to an individual Market Participant in the MIS Certified Area."
  - id: e4
    source: np-12
    locator: "Section 12.2, ERCOT Responsibilities, paragraph (1)"
    quote: "ERCOT shall post information to the Market Information System (MIS) as directed throughout these Protocols. With the exception of information requested by a Market Participant in accordance with paragraph (3) below, ERCOT may not use the MIS to post information beyond that specifically required in these Protocols or market guides as described in paragraph (2) of Section 1.1, Summary of the ERCOT Protocols Document."
  - id: e5
    source: np-12
    locator: "Section 12.1, paragraph (2)"
    quote: "The MIS Secure and Certified Areas provide restricted access to ERCOT Critical Energy Infrastructure Information (ECEII), to the extent that the Protocols or any Other Binding Document requires such information to be posted thereon. All ECEII posted on the MIS Secure or Certified Area shall be subject to the restrictions in Section 1.3.2, ERCOT Critical Energy Infrastructure Information. ECEII posted on the MIS Secure or Certified Area may be accessed only by those authorized individuals with ECEII-eligible credentials."
  - id: e6
    source: np-12
    locator: "Section 12.4, ERCOT Website, paragraph (1)"
    quote: "Data, extracts, and reports required by the Protocols to be published on the ERCOT website must be made available on a non-discriminatory basis."
  - id: e7
    source: np-26
    locator: "Section 26.3, Securitization Default Charge Invoices, paragraph (3)"
    quote: "ERCOT shall post the Securitization Default Charge Invoice on the MIS Certified Area."
  - id: e8
    source: np-11
    locator: "Section 11.5.1.2, TSP and/or DSP Load Data Posting/Availability, paragraph (1)"
    quote: "ERCOT will post TSP and/or DSP Load plus allocation of Distribution Losses, Transmission Losses, and UFE, by TSP and/or DSP, to the MIS Secure Area."
  - id: e9
    source: np-12
    locator: "Section 12.2, paragraph (3)"
    quote: "To the extent a request is reasonable, in ERCOT’s sole discretion, ERCOT shall post to the MIS Certified Area information that is requested by a Market Participant but not required to be posted by these Protocols."
  - id: e10
    source: np-02
    locator: "Section 2.1, definition of Market Information System (MIS) Certified Area"
    quote: "The portion of the MIS that is available only to a specific Market Participant."
  - id: e11
    source: np-12
    locator: "Section 12.1, paragraph (3)"
    quote: "ERCOT shall also create and maintain an Internet website with public and restricted areas."
  - id: e12
    source: np-12
    locator: "Section 12.2(2), ERCOT Responsibilities"
    quote: "ERCOT may use the ERCOT website to communicate information that is not posted to the MIS."
  - id: e13
    source: np-12
    locator: "Section 12.2(4), ERCOT Responsibilities"
    quote: "ERCOT shall create and maintain a list of all of the posting requirements contained in these Protocols or market guides as described in paragraph (2) of Section 1.1. This list and changes thereto shall be posted to the ERCOT website."
  - id: e14
    source: np-12
    locator: "Section 12.2(6), ERCOT Responsibilities"
    quote: "ERCOT shall use the MIS, as necessary, to post information that meets requirements to disseminate information under North American Electric Reliability Corporation (NERC) Reliability Standards.  Information posted pursuant to this paragraph shall be added to the list described in paragraph (4) above. ERCOT shall notify Market Participants via a Market Notice when such information is posted."
  - id: e15
    source: np-12
    locator: "Section 12.3(1)(a)-(b), MIS Administrative and Design Requirements"
    quote: "ERCOT shall ensure that all Market Participants have access to the ERCOT MIS on a nondiscriminatory basis. (b) The MIS must, at a minimum, provide all information required under any regulations of the Public Utility Commission of Texas (PUCT) or other Governmental Authorities."
  - id: e16
    source: np-12
    locator: "Section 12.3(1)(e)-(g), MIS Administrative and Design Requirements"
    quote: "The MIS must include security measures to safeguard ERCOT Critical Energy Infrastructure Information (ECEII) and protect the confidentiality of Protected Information as required by these Protocols. (f) The MIS must comply with industry standards for commercial websites, including query and search functionality. (g) The MIS must provide easy navigation based on the posting list described in paragraph (4) of Section 12.2, ERCOT Responsibilities, above for document retrieval."
  - id: e17
    source: np-12
    locator: "Section 12.4(1), ERCOT Website"
    quote: "The Market Information System (MIS) or a link to the MIS must be available from the ERCOT website. ERCOT may use the ERCOT website to communicate information that is not posted to the MIS."
  - id: e18
    source: puct-25-506
    locator: "16 TAC Section 25.506(a), General Requirements (effective 05/28/25 per the saved copy)"
    quote: "To increase the transparency of the ERCOT-administered markets, ERCOT must post the information required in this section at a publicly accessible location on its website. In no event will ERCOT disclose competitively sensitive consumption data. The information released must be made available to all market participants."
  - id: e19
    source: puct-25-506
    locator: "16 TAC Section 25.506(b), aggregated information"
    quote: "ERCOT will post the following information in aggregated form, for each settlement interval and for each area where available, two calendar days after the day for which the information is accumulated: (1) quantities and prices of offers for energy and each type of ancillary capacity service, in the form of supply curves;"
  - id: e20
    source: puct-25-506
    locator: "16 TAC Section 25.506(c), entity-specific information"
    quote: "ERCOT will post the following information in entity-specific form, for each settlement interval, 60 calendar days after the day for which the information is accumulated, except where inapplicable or otherwise prescribed."
  - id: e21
    source: puct-25-506
    locator: "16 TAC Section 25.506(c)(1)"
    quote: "Offer curves (prices and quantities) for each type of ancillary service and for energy in the real time market, except that, for the highest-priced offer selected or dispatched for each interval on an ERCOT-wide basis, ERCOT will post the offer price and the name of the entity submitting the offer three calendar days after the day for which the information is accumulated."
  - id: e22
    source: puct-25-506
    locator: "16 TAC Section 25.506(c)(2)"
    quote: "If the clearing prices for energy or any ancillary service exceeds a calculated value that is equal to 50 times a natural gas price index selected by ERCOT for each operating day, expressed in dollars per megawatt-hour (MWh) or dollars per megawatt per hour, during any interval, the portion of every market participant’s price-quantity offer pairs for balancing energy service and each other ancillary service that is at or above a calculated value that is equal to 50 times a natural gas price index selected by ERCOT for each operating day, expressed in dollars per MWh or dollars per megawatt per hour, for that service and that interval must be posted seven calendar days after the day for which the offer is submitted."
  - id: e23
    source: puct-25-506
    locator: "16 TAC Section 25.506(c)(5), State Estimator data"
    quote: "For each hour, transmission flows, voltages, transformer flows, voltages and tap positions (i.e., State Estimator data). Notwithstanding the provisions of this paragraph and the provisions of paragraphs (1) through (4) of this subsection, ERCOT must release relevant State Estimator data earlier than 60 days after the day for which the information is accumulated if, in its sole discretion, it determines the release is necessary to provide a complete and timely explanation and analysis of unexpected market operations and results or system events, including but not limited to pricing anomalies, recurring transmission congestion, and system disturbances."
  - id: e24
    source: puct-25-506
    locator: "16 TAC Section 25.506(d)(3), forced outages and derates"
    quote: "Not later than the third business day after a forced outage or forced derate under paragraph (1) of this subsection ends, ERCOT must post the information received under paragraph (2) of this subsection, in resource-specific form, for each operating day."
  - id: e25
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2(3), Settlement Statements and Invoices (August 1, 2026)"
    quote: "The QSE Settlement Statements and Invoices and the CRRAH Statements and Invoices are available on the Market Information System (MIS) Certified Area. Statements and Invoices are ‘MIS Certified’ meaning they are Market Participant specific and have data proprietary to individual Entities. Therefore, these files are only available to those Entities owning the data and having a matching Data Universal Numbering System (DUNS) Number."
  - id: e26
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2(4)"
    quote: "Market Participants must have access to the ERCOT MIS appropriate roles in order to retrieve data via the MIS and/or Application Programmatic Interface (API). MIS access must be obtained from your Entity’s User Security Administrator (USA) and must contain the role of QSE Extracts (for QSEs) or CRR Extracts (for CRRs) in order to view and download statements, Invoices and/or related Settlement extracts."
  - id: e27
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2(5)"
    quote: "Invoices, statements and extracts are also available via the API. To download the information from the API, utilize the report type IDs as listed in the ERCOT Market Information List (EMIL), along with the GetReport functionality on the API."
  - id: e28
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2(6)"
    quote: "In addition to statements and Invoices, the Settlements Calendar which provides statement, Invoice and dispute posting information details, is provided as an extract and can be found on the ERCOT website."
  - id: e29
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2(7)"
    quote: "When viewing QSE/CRRAH Settlement Statements, a negative amount represents a payment due to the QSE/CRRAH and a positive amount represents a payment due to ERCOT."
  - id: e30
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.3(1), Dispute Access (August 1, 2026)"
    quote: "There are two methods available for filing a dispute, MIS Web Portal and Application Programmatic Interface (API)."
  - id: e31
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.3(1)(a)"
    quote: "The web portal user interface utilizes the Market Participant MIS access credentials for authentication."
  - id: e32
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.6(1), Dispute Reporting"
    quote: "ERCOT will post a summary level dispute report and a Market Participant specific dispute extract on the MIS Certified Area."
  - id: e33
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.6(1)(a)"
    quote: "This certified extract provides QSEs and CRR Account Holders with the current status of all of their Entity specific disputes that are not closed or withdrawn, as well as all disputes closed or withdrawn within the last 120 days."
  - id: e34
    source: ercot-hubs-load-zones-page
    locator: "ERCOT website, Real-Time LMPs for Load Zones and Trading Hubs display (page captured Nov 18, 2026)"
    quote: "LMP values do not include the Real-Time price adders."
  - id: e35
    source: np-03
    locator: "Section 3.2.5(1), Publication of Resource and Load Information"
    quote: "Two days after the applicable Operating Day, ERCOT shall post on the ERCOT website for the ERCOT System and, if applicable, for each Disclosure Area, the information derived from each execution of SCED. The Disclosure Area is the 2003 ERCOT CMZs. Posting requirements will be applicable to Generation Resources, ESRs, and Controllable Load Resources (CLRs) physically located in the defined Disclosure Area. This information shall not be posted if the posting of the information would reveal any individual Market Participant’s Protected Information."
  - id: e36
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.1.5(d), Content of Communication"
    quote: "When and where the Invoice will be posted. Ad hoc Invoices are normally posted on the Market Information System (MIS) Certified Area."
  - id: e37
    source: np-11
    locator: "Section 11.5.1.2, pending NPRR1239 box after paragraph (3)"
    quote: "[NPRR1239: Replace paragraphs (1)-(3) above with the following upon system implementation:]"
  - id: e38
    source: np-11
    locator: "Section 11.5.1.2, text of the pending NPRR1239 replacement, paragraph (1)"
    quote: "ERCOT shall post on the ERCOT website the following information, consistent with the requirements in Section 1.3, Confidentiality:"
---

## Definition

The Market Information System (MIS) is an electronic communications interface established and maintained by ERCOT that lets Market Participants access certain information through authenticated credentials. [e1]

## How it works

The MIS has two restricted areas. The Secure Area is available only to registered Market Participants, and the Certified Area only to a specific Market Participant. [e2][e10] ERCOT posts to the MIS as directed by the Protocols and, apart from information requested by a Market Participant, may not use the MIS to post information beyond what the Protocols or market guides specifically require. [e4] The restricted areas can carry ERCOT Critical Energy Infrastructure Information (ECEII) where the Protocols require it, and then only authorized individuals with ECEII-eligible credentials may access it. [e5]

ERCOT can also post to the Certified Area information a Market Participant requests but the Protocols do not require, to the extent the request is reasonable, in ERCOT's sole discretion. [e9] ERCOT may use its website to communicate information not posted to the MIS. [e12] ERCOT must maintain a list of all posting requirements in the Protocols and market guides and post that list and its changes on the website. [e13] Where information must be disseminated under NERC Reliability Standards, ERCOT uses the MIS as necessary, adds it to the posting list, and notifies Market Participants by Market Notice. [e14]

Design requirements (Protocols 12.3, current text): ERCOT must give all Market Participants access to the MIS on a nondiscriminatory basis, and the MIS must at a minimum provide all information required by PUCT or other governmental regulations. [e15] It must include security measures for ECEII and Protected Information, follow industry standards for commercial websites including query and search, and give easy navigation based on the posting list. [e16]

Practice. For settlement, QSE and CRRAH statements and invoices sit in the MIS Certified Area and are available only to the entities owning the data with a matching DUNS Number. [e25] A user needs the appropriate MIS role from the entity's User Security Administrator, including QSE Extracts (for QSEs) or CRR Extracts (for CRRs) to view and download statements, invoices and settlement extracts. [e26] The same statements, invoices and extracts are also available via the API, using the report type IDs in the ERCOT Market Information List (EMIL) with the GetReport function. [e27] The Settlements Calendar is posted as an extract on the ERCOT website. [e28] On a QSE or CRRAH statement a negative amount is a payment due to the QSE/CRRAH and a positive amount is due to ERCOT. [e29] Ad hoc invoices are normally posted on the MIS Certified Area. [e36]

Disputes. Settlement disputes can be filed through the MIS web portal, which authenticates with the Market Participant's MIS credentials, or through the API. [e30][e31] ERCOT posts a summary dispute report and a Market Participant-specific dispute extract on the MIS Certified Area; the extract shows all non-closed, non-withdrawn disputes plus those closed or withdrawn within the last 120 days. [e32][e33]

## ERCOT context

Examples from the Protocols: Securitization Default Charge invoices are posted to the MIS Certified Area, and, in the current text of Section 11.5.1.2, TSP and DSP load with loss and UFE allocations goes to the MIS Secure Area. [e7][e8] A pending NPRR1239 box would replace those paragraphs upon system implementation [e37] with text under which ERCOT posts that information on the ERCOT website. [e38] Public data is different: items the Protocols require on the ERCOT website must be available on a non-discriminatory basis. [e6]

Public posting timelines come from the PUCT's rule 25.506, which says ERCOT must post the information it requires at a publicly accessible location on its website, never disclosing competitively sensitive consumption data, and make the information available to all market participants. [e18] The saved copy shows an effective date of 05/28/25. Aggregated information, starting with the quantities and prices of offers for energy and each type of ancillary capacity service in the form of supply curves, is posted two calendar days after the day. [e19] Entity-specific information is posted 60 calendar days after the day, except where otherwise prescribed. [e20] Exceptions to the 60 days: the highest-priced offer selected or dispatched in each interval ERCOT-wide is posted with the offering entity's name three calendar days after the day, [e21] and, when clearing prices exceed 50 times a gas price index, the offer pairs at or above that level are posted seven calendar days after the day. [e22] State Estimator data (transmission flows, voltages and tap positions for each hour) is among the 60-day items, but ERCOT must release relevant data earlier if, in its sole discretion, that is necessary to explain unexpected market operations or system events. [e23] Forced outages and derates (of generation resources and energy storage resources) are posted in resource-specific form not later than the third business day after the outage or derate ends. [e24]

The Protocols' own SCED posting rule (Section 3.2.5) has ERCOT post on its website, two days after the Operating Day, information derived from each SCED execution, and not post it if it would reveal an individual Market Participant's Protected Information. [e35]

For public price displays, ERCOT's Real-Time LMP page for Load Zones and Trading Hubs states that its LMP values do not include the Real-Time price adders. [e34]

## Key facts

- The MIS has a Secure Area (registered Market Participants) and a Certified Area (a specific Market Participant). [e2][e10]
- Access uses authenticated credentials. [e1]
- ECEII on the MIS needs ECEII-eligible credentials. [e5]
- Data required on the public website must be non-discriminatory in availability. [e6]
- PUCT 25.506: aggregated data two calendar days after the day; entity-specific data 60 calendar days after the day, with listed exceptions. [e19][e20]
- Statements and invoices are MIS Certified: only the entity owning the data, with a matching DUNS Number, can see them. [e25]
- Dispute extracts show open disputes plus disputes closed or withdrawn within the last 120 days. [e33]

## Say it like this

(Guidance) The MIS is ERCOT's login-gated portal for market participants, with a shared secure area and a participant-specific certified area. The public website carries the open data, on the timelines set by PUCT rule 25.506. [e18][e19][e20]

## Common confusion

The MIS is not the same as the public ERCOT website: the website has public and restricted areas, and the MIS is the credentialed channel. [e1][e11] The website must provide the MIS or a link to it. [e17] Also the Certified Area is one participant's own data, while the Secure Area is for registered participants generally. [e2][e10] Do not mix the two public timelines: the 60-day disclosure is entity-specific, while aggregated data is posted at two days. [e19][e20]

## Questions

### What is the difference between the MIS Secure and Certified Areas?

Secure Area: available only to registered Market Participants. Certified Area: available only to a specific Market Participant. [e2][e10]

### Where do invoices go?

The Securitization Default Charge invoice is posted on the MIS Certified Area. [e7] QSE and CRRAH statements and invoices are also in the Certified Area. [e25]

### Why can't ERCOT post anything it likes to the MIS?

The Protocols limit MIS postings to what the Protocols or market guides specifically require, with the exception of information a Market Participant requests and ERCOT agrees, in its sole discretion, to post to the Certified Area as reasonable. [e4][e9] Other information can go on the website. [e12]

### What if a market-moving event needs data released before the 60-day delay?

For State Estimator data, ERCOT must release relevant data earlier than 60 days if, in its sole discretion, release is necessary to explain unexpected market operations or system events. [e23]

### How would an analyst get a QSE's settlement statement programmatically?

Through the MIS with the QSE Extracts role, or through the API using the EMIL report type IDs with GetReport. [e26][e27]

### Why is competitively sensitive data kept out of the public postings?

PUCT rule 25.506 says in no event will ERCOT disclose competitively sensitive consumption data, and entity-specific information is posted 60 calendar days after the day except where inapplicable or otherwise prescribed. [e18][e20]

## Open items

- Section 12.3(1)(c)-(d) and Section 12.2(7) appear in the saved Protocols with pending NPRR1239 and NPRR244 boxes (shifting certain requirements to the ERCOT website and adding business procedure postings); the pending text is not cited.
- The public ERCOT website data portal names and the full EMIL list are not in the saved sources, apart from the Real-Time LMP display page capture.
- The 25.506(c)(5) State Estimator release is stated in PUCT rule and is not checked against the Protocol posting list.
- Resolved 2026-11-21: Section 12.2(4) posting list requirement, Section 12.3 design requirements, and settlement statement and dispute access in the Commercial Operations Market Guide.
