---
id: market-information-system
name: MIS (Market Information System) & Public Data
aliases: [MIS, Market Information System, MIS Secure Area, MIS Certified Area]
kind: concept
domain: structure
level: 2
lenses: [analyst, retail, trading]
as_of: 2026-11-18
links:
  - to: sixty-day-disclosure
    type: related
    note: Data the Protocols require on the ERCOT website must be made available on a non-discriminatory basis. [e6]
  - to: settlement-statements
    type: related
    note: Settlement-related invoices are posted to the MIS Certified Area. [e7]
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
    note: ERCOT posts TSP and DSP load with loss and UFE allocations to the MIS Secure Area. [e8]
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
    quote: "ERCOT shall post information to the Market Information System (MIS) as directed throughout these Protocols."
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
---

## Definition

The Market Information System (MIS) is an electronic communications interface established and maintained by ERCOT that lets Market Participants access certain information through authenticated credentials. [e1]

## How it works

The MIS has two restricted areas. The Secure Area is available only to registered Market Participants, and the Certified Area only to a specific Market Participant. [e2][e10] ERCOT posts to the MIS as directed by the Protocols. [e4] The restricted areas can carry ERCOT Critical Energy Infrastructure Information (ECEII) where the Protocols require it, and then only authorized individuals with ECEII-eligible credentials may access it. [e5]

ERCOT can also post to the Certified Area information a Market Participant requests but the Protocols do not require, if the request is reasonable. [e9]

## ERCOT context

Examples from the Protocols: Securitization Default Charge invoices are posted to the MIS Certified Area, and TSP and DSP load with loss and UFE allocations goes to the MIS Secure Area. [e7][e8] Public data is different: items the Protocols require on the ERCOT website must be available on a non-discriminatory basis. [e6]

## Key facts

- The MIS has a Secure Area (registered Market Participants) and a Certified Area (a specific Market Participant). [e2][e10]
- Access uses authenticated credentials. [e1]
- ECEII on the MIS needs ECEII-eligible credentials. [e5]
- Data required on the public website must be non-discriminatory in availability. [e6]

## Say it like this

(Guidance) The MIS is ERCOT's login-gated portal for market participants, with a shared secure area and a participant-specific certified area. The public website carries the open data.

## Common confusion

The MIS is not the same as the public ERCOT website: the website has public and restricted areas, and the MIS is the credentialed channel. [e1][e11] Also the Certified Area is one participant's own data, while the Secure Area is for registered participants generally. [e2][e10]

## Questions

### What is the difference between the MIS Secure and Certified Areas?

Secure Area: available only to registered Market Participants. Certified Area: available only to a specific Market Participant. [e2][e10]

### Where do invoices go?

The Securitization Default Charge invoice is posted on the MIS Certified Area. [e7]

## Open items

- Deeper pass: the full list of posting requirements ERCOT maintains (Section 12.2(4)) was not reviewed, and Section 12.3 administrative and design requirements were not summarized.
- Deeper pass: the public ERCOT website data portals (names, data products) are not in the saved sources.
