---
id: lse
name: LSE (Load Serving Entity)
aliases: [LSE, Load Serving Entity, CR, Competitive Retailer, ELSE]
kind: entity
domain: structure
level: 1
lenses: [analyst, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: qse
    type: related
    note: Each LSE must designate a QSE to perform QSE functions for it. [e3]
  - to: rep
    type: is-a
    note: A REP is a Competitive Retailer, and Competitive Retailers are LSEs. [e1][e2]
  - to: noe
    type: related
    note: NOIEs that serve Load are LSEs. [e1]
  - to: esi-id
    type: related
    note: An ELSE assigns an ESI ID for each wholesale point of delivery. [e6]
  - to: retail-choice
    type: related
    note: LSEs include Competitive Retailers and NOIEs that serve Load. [e1]
  - to: tdsp
    type: contrasts-with
    note: TSPs and DSPs register with ERCOT as a TSP or DSP, which is separate from the LSE registration in Section 16.3. [e7][e4]
  - to: mass-transition
    type: related
    note: An LSE serving Load that fails to cure a QSE Affiliation Breach faces a Mass Transition of its ESI IDs. [e10]
  - to: load-ratio-share
    type: related
    note: ERCOT assigns Ancillary Service obligations to QSEs from their LSEs' Load Ratio Shares. [e22][e23]
  - to: polr
    type: related
    note: The Transition Process transfers large numbers of Customers from one CR to a Provider of Last Resort or designated CR, or between TDSPs. [e24]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "An Entity that sells energy to Customers or Wholesale Customers and that has registered as an LSE with ERCOT. LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e3
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e4
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Load Serving Entities (LSEs) provide electric service to Customers and Wholesale Customers. LSEs include Non-Opt-In Entities (NOIEs) that serve Load, Competitive Retailers (CRs) (which includes Retail Electric Providers (REPs)), and External Load Serving Entities (ELSEs). Each LSE must register with ERCOT."
  - id: e5
    source: np-16
    locator: "Section 16.3(2)"
    quote: "All CRs must participate in and successfully complete testing as described in Section 19.8, Retail Market Testing, prior to commencing operations with ERCOT."
  - id: e6
    source: np-16
    locator: "Section 16.3(5)"
    quote: "An ELSE shall assign an Electric Service Identifier (ESI ID) for each wholesale point of delivery as specified in these Protocols."
  - id: e7
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT."
  - id: e8
    source: np-16
    locator: "Section 16.3.1(1)(c)"
    quote: "Be capable of purchasing capacity and reserves, or other Ancillary Services, as may be required by ERCOT, or other Independent Organizations, to provide adequate electricity to all the applicant’s Customers."
  - id: e9
    source: np-16
    locator: "Section 16.3.1.1(2)"
    quote: "If an LSE fails to maintain a QSE as its representative, the LSE may be designated as an Emergency QSE as provided in Section 16.2.6.1, Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity."
  - id: e11
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e10
    source: np-16
    locator: "Section 16.2.6.1(5)"
    quote: "If the LSE fails to cure the QSE Affiliation Breach within the cure period set forth in the Standard Form Market Participant Agreement, and the LSE serves Load, ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s Electronic Service Identifiers (ESI IDs) pursuant to Section 15.1.3, Transition Process."
  - id: e12
    source: np-16
    locator: "Section 16.3(1), Registration of Load Serving Entities"
    quote: >-
      To become registered as an LSE, an Entity must execute a Standard Form Market Participant Agreement (using the form in Section 22, Attachment A, Standard Form Market Participant Agreement), designate LSE Authorized Representatives, contacts, and a User Security Administrator (USA) (per Section 23, Form B, Load Serving Entity (LSE) Application for Registration), and demonstrate to ERCOT’s reasonable satisfaction that it is capable of performing the functions of an LSE under these Protocols. Additionally, a REP must demonstrate certification by P.U.C. SUBST. R. 25.107, Certification of Retail Electric Providers (REPs), and comply with the remaining requirements of this Section.
  - id: e13
    source: np-16
    locator: "Section 16.3.1.1(1), Designation of a Qualified Scheduling Entity"
    quote: "Each applicant shall acknowledge that it bears sole responsibility for selecting and maintaining a QSE as its representative."
  - id: e14
    source: np-16
    locator: "Section 16.3.2.1(1) and 16.3.2.2(1)"
    quote: "Within three Business Days after receiving an LSE application, ERCOT shall issue the LSE applicant a written confirmation that ERCOT has received the LSE application."
  - id: e15
    source: np-16
    locator: "Section 16.3.2.2(1)-(2), Incomplete Load Serving Entity Applications"
    quote: "Not more than ten Business Days after receiving an LSE application, ERCOT shall notify the applicant in writing whether the application is complete."
  - id: e16
    source: np-16
    locator: "Section 16.3.2.3(1), ERCOT Approval or Rejection of Load Serving Entity Application"
    quote: "ERCOT may reject an LSE application within ten Business Days after the application has been deemed complete in accordance with this Section. If ERCOT does not reject the LSE application within ten Business Days after the application is deemed complete then the application is deemed approved."
  - id: e17
    source: np-16
    locator: "Section 16.3.2.3(2)-(3)"
    quote: "Not later than ten Business Days after receiving a rejection letter, the LSE applicant may challenge the rejection of its LSE application using the dispute resolution procedures set forth in Section 20, Alternative Dispute Resolution Procedure and for Return of Settlement Funds."
  - id: e18
    source: np-16
    locator: "Section 16.3.3(1) and (3), Changing QSE Designation"
    quote: "An LSE may change its designation of QSE with written notice to ERCOT no more than once in any consecutive three days."
  - id: e19
    source: np-16
    locator: "Section 16.3.3(3), Changing QSE Designation"
    quote: "The LSE shall submit updated QSE designation information to ERCOT no less than six days prior to the effective date."
  - id: e20
    source: np-16
    locator: "Section 16.2.6.1(2)-(3), Designation as an Emergency QSE or Virtual QSE"
    quote: "If a QSE has given Notice of its intent to terminate its relationship with an LSE or Resource Entity, that LSE or Resource Entity, must, by noon on the fourth Business Day after the termination notice date, either: (a) Designate a new QSE with such relationship to take effect on the Termination Date, or earlier if allowed by ERCOT; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, Registration and Qualification of Qualified Scheduling Entities, and operate as an Emergency QSE as described below."
  - id: e21
    source: np-16
    locator: "Section 16.2.6.1(7), Designation as an Emergency QSE or Virtual QSE"
    quote: "For any Operating Day in which an LSE or Resource Entity is not either represented by a QSE or qualified as an Emergency QSE, ERCOT may designate the LSE or Resource Entity as a Virtual QSE. ERCOT may authorize the Virtual QSE to access to the capabilities of the MIS. A Virtual QSE shall be liable for any and all charges associated with Initial, Final and True-Up Settlements as well as any Resettlements applying to dates during which the Virtual QSE represented ESI IDs or otherwise incurred charges pursuant to these Protocols, along with any and all costs incurred by ERCOT in collecting such amounts."
  - id: e22
    source: np-04
    locator: "Section 4.2.1.2(1), Ancillary Service Obligation Assignment and Notice"
    quote: "ERCOT shall assign part of the Ancillary Service Plan quantity, or total Ancillary Service procurement quantity, if different, by service, by hour, to each Qualified Scheduling Entity (QSE) based on its Load Serving Entity (LSE) Load Ratio Shares (LRSs) (including the shares for Direct Current Tie (DC Tie) exports) aggregated by hour to the QSE level."
  - id: e23
    source: np-02
    locator: "Section 2.1, definition of Load Ratio Share"
    quote: "The ratio of an Entity’s AML to total ERCOT AML for an interval."
  - id: e24
    source: rmg-07
    locator: "Section 7.11(1), Transition Process"
    quote: "During the course of business in the Texas retail electric market, circumstances may necessitate the expeditious transfer of large numbers of Customers from one Market Participant to another either from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in quantity, or within a time frame, identified by Applicable Legal Authority (ALA)."
  - id: e25
    source: rmg-07
    locator: "Section 7.11.1(4)(c), Mass Transition definitions"
    quote: "Mass Transition Date - Scheduled Meter Read Date (SMRD) will be equal to Calendar Day 0 plus two days and will be the date requested in the 814_03 transaction from ERCOT to the TDSP. POLRs will be responsible for ESI IDs no earlier than the Mass Transition Date."
  - id: e26
    source: np-02
    locator: "Section 2.1, definition of External Load Serving Entity (ELSE)"
    quote: "An Entity that is registered as an LSE and is either: (a) A distribution service provider (as that term is defined in P.U.C. Subst. R. 25.5, Definitions), which includes an electric utility, a Municipally Owned Utility (MOU), or an Electric Cooperative (EC) that has a legal duty to serve one or more Customers connected to the ERCOT System but that does not own or operate Facilities connecting Customers to the ERCOT System; or (b) The CFE."
  - id: e27
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE)"
    quote: "An EC or MOU that does not offer Customer Choice."
  - id: e28
    source: np-02
    locator: "Section 2.1, definition of Retail Electric Provider (REP)"
    quote: "As defined in P.U.C. SUBST. R. 25.5, Definitions, an Entity that sells electric energy to retail Customers in Texas but does not own or operate generation assets and is not an MOU or EC."
  - id: e29
    source: np-02
    locator: "Section 2.1, definition of Wholesale Customer"
    quote: "A NOIE receiving service at wholesale points of delivery from an LSE other than itself."
  - id: e30
    source: np-16
    locator: "Section 16.3(5), Registration of Load Serving Entities"
    quote: "An ESI ID shall not be assigned to any individual Customer behind an ELSE wholesale point of delivery."
  - id: e31
    source: np-03
    locator: "Section 3.6.1(4), Load Resource Participation"
    quote: "A QSE representing a Load Resource and submitting a bid to buy for participation in SCED, as described in Section 6.4.3.1, RTM Energy Bids, must represent the Load Serving Entity (LSE) serving the Load of the Load Resource."
  - id: e32
    source: np-16
    locator: "Section 16.3.4(1), Maintaining and Updating LSE Information"
    quote: "Each LSE must timely update information the LSE provided to ERCOT in the application process, and an LSE must promptly respond to any reasonable request by ERCOT for updated information regarding the LSE or the information provided to ERCOT by the LSE, including:"
  - id: e33
    source: np-16
    locator: "Section 16.2.6.2(1), Market Participation by an Emergency QSE or a Virtual QSE"
    quote: "An Emergency QSE or a Virtual QSE may only represent itself; it may not represent another legal Entity."
  - id: e34
    source: np-16
    locator: "Section 16.2.6.3(1), Requirement to Obtain New QSE or QSE Qualification"
    quote: "Within seven Business Days after receiving designation as an Emergency QSE, an Emergency QSE must either: (a) Designate a QSE that will represent the LSE or Resource Entity to ERCOT; or (b) Fulfill all QSE registration and qualification requirements."
  - id: e35
    source: np-16
    locator: "Section 16.2.6.1(3), Designation as an Emergency QSE or Virtual QSE"
    quote: "If ERCOT has given Notice of an LSE’s or Resource Entity’s QSE’s termination or suspension, that LSE or Resource Entity will be designated as a Virtual QSE for up to two Bank Business Days, during which time it must either: (a) Designate and begin operations with a new QSE; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, and operate as an Emergency QSE as described below. As provided in paragraph (2) of Section 16.2.5, Suspended or Terminated Qualified Scheduling Entity – Notification to LSEs and Resource Entities Represented, this option does not apply to an LSE or Resource Entity represented by a terminated or suspended QSE that is the same Entity as the terminated or suspended QSE."
---

## Definition

An LSE is an Entity that sells energy to Customers or Wholesale Customers and has registered as an LSE with ERCOT. [e1] LSEs include Competitive Retailers (which includes REPs), NOIEs that serve Load, and ELSEs. [e1]

## How it works

Every LSE must register with ERCOT. [e4] Registration under Section 16.3 covers three groups: NOIEs that serve Load, Competitive Retailers (including REPs), and External Load Serving Entities. [e4] An applicant must be capable of purchasing capacity and reserves or other Ancillary Services required by ERCOT to provide adequate electricity to all its Customers. [e8]

### Registration steps and timelines

To register, an Entity executes a Standard Form Market Participant Agreement, designates LSE Authorized Representatives, contacts and a User Security Administrator on the Form B application, and shows ERCOT it can perform the LSE functions; a REP must also demonstrate certification under P.U.C. SUBST. R. 25.107. [e12] All CRs must also complete Retail Market Testing before commencing operations with ERCOT. [e5]

Application clock (ERCOT returns without review any application lacking the proper fee, and the rest of the Section then does not apply [e14]): ERCOT confirms receipt within three Business Days [e14]; it tells the applicant within ten Business Days whether the application is complete [e15]; and it may reject within ten Business Days after the application is deemed complete, otherwise the application is deemed approved. [e16] A rejected applicant may challenge not later than ten Business Days after receiving the rejection letter using Section 20 dispute resolution. [e17]

### The QSE relationship

An LSE does not interface with ERCOT alone: it must designate a QSE to perform QSE functions on its behalf, and it bears sole responsibility for selecting and maintaining that QSE. [e3][e13] ERCOT must approve the designation before a CR enrolls Customer ESI IDs. [e11] An LSE may change its QSE designation on written notice no more than once in any consecutive three days, and it must submit the updated designation no less than six days before the effective date. [e18][e19]

### When the LSE loses its QSE

If a QSE gives notice of terminating its relationship with an LSE, the LSE must by noon on the fourth Business Day after the notice either designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE. [e20] If ERCOT gives notice of the QSE's termination or suspension, the LSE is designated a Virtual QSE for up to two Bank Business Days, during which it must either designate and begin operations with a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE; the second option does not apply where the LSE is the same Entity as the terminated or suspended QSE. [e35] ERCOT may designate an LSE with no QSE for an Operating Day as a Virtual QSE, which is liable for all Initial, Final and True-Up Settlement charges and Resettlements for the period it represented ESI IDs. [e21] An LSE that fails to maintain a QSE may be designated an Emergency QSE. [e9] Emergency and Virtual QSEs may only represent themselves. [e33] An Emergency QSE has seven Business Days to designate a QSE or complete QSE qualification. [e34]

If the LSE fails to meet these requirements and does not cure the resulting QSE Affiliation Breach, and it serves Load, ERCOT shall after notice initiate a Mass Transition of the LSE's ESI IDs. [e10]

## ERCOT context

"Competitive Retailer" is itself a defined term: a REP, or an MOU or EC that offers Customer Choice and sells at retail. [e2] A REP is an Entity selling to retail Customers in Texas that does not own or operate generation assets and is not an MOU or EC. [e28] A NOIE is an EC or MOU that does not offer Customer Choice, and a Wholesale Customer is a NOIE served at wholesale points of delivery by an LSE other than itself. [e27][e29] An ELSE is an LSE that is either a distribution service provider with a legal duty to serve Customers connected to the ERCOT System without owning or operating the connecting Facilities, or the CFE. [e26] An ELSE assigns an ESI ID for each wholesale point of delivery, and none is assigned to an individual Customer behind it. [e6][e30]

The LSE label is also how load shows up in market rules. ERCOT assigns Ancillary Service obligations to each QSE from the QSE's LSE Load Ratio Shares, where Load Ratio Share is an Entity's AML relative to total ERCOT AML for the interval. [e22][e23] A QSE bidding a Load Resource to buy in SCED must represent the LSE serving that Load Resource's Load. [e31]

The Retail Market Guide's Transition Process applies when circumstances may necessitate the expeditious transfer of large numbers of Customers from one CR to a Provider of Last Resort or designated CR, or from one TDSP to another, in a quantity or time frame identified by Applicable Legal Authority. [e24] The Mass Transition Date is Calendar Day 0 plus two days (the date requested in ERCOT's 814_03), and POLRs are responsible for ESI IDs no earlier than that date. [e25]

Each LSE must keep its application information current, such as addresses, affiliates and representatives. [e32]

## Key facts

- LSEs include CRs (which includes REPs), NOIEs that serve Load, and ELSEs. [e1]
- Each LSE must register with ERCOT. [e4]
- ERCOT's application clock: 3 Business Days to acknowledge, 10 to say complete, 10 after completion to reject or the application is deemed approved. [e14][e15][e16]
- All CRs must complete Retail Market Testing before commencing operations with ERCOT. [e5]
- TSPs and DSPs register with ERCOT as a TSP or DSP, under Section 16.4 rather than the LSE registration in Section 16.3. [e7][e4]
- Failure to cure a QSE Affiliation Breach by an LSE serving Load leads to a Mass Transition of its ESI IDs. [e10]
- A Virtual QSE is liable for Initial, Final, True-Up and Resettlement charges. [e21]

## Say it like this

(Guidance) "LSE" is the ERCOT registration label for an Entity that sells energy to Customers or Wholesale Customers: retailers, non-opt-in entities that serve Load, and external load serving entities. [e1] It has to register with ERCOT [e4] and designate a QSE. [e3]

## Common confusion

(Guidance) LSE is broader than REP. A REP is one kind of Competitive Retailer, and Competitive Retailers are one kind of LSE. [e1][e2] TSPs and DSPs register as such with ERCOT under Section 16.4, and Section 16.3 lists NOIEs, CRs and ELSEs as the LSE types. [e7][e4] An ELSE can itself be a distribution service provider, so "DSP" and "LSE" are not exclusive labels in every case. [e26]

## Questions

### What kinds of entities are LSEs?

Competitive Retailers (including REPs), NOIEs that serve Load, and External Load Serving Entities. [e1][e4]

### What does an LSE need before it can enroll customers?

It must register with ERCOT, designate a QSE, and have ERCOT approve that designation before a CR enrolls Customer ESI IDs. [e4][e3][e11] A CR must also complete Retail Market Testing. [e5]

### Why does ERCOT require an LSE to have a QSE at all?

The Protocols require each LSE applicant to designate the QSE that will perform QSE functions on the LSE's behalf, and the LSE bears sole responsibility for selecting and maintaining it. [e3][e13] The Protocols quoted here do not give ERCOT's reason. Without a QSE, the LSE may be made a Virtual QSE liable for settlement charges. [e21] Without one, the LSE may be made a Virtual QSE liable for settlement charges. [e21]

### What if a REP's QSE gives notice of termination?

If the QSE has given notice of its intent to terminate, the REP must by noon on the fourth Business Day after the notice date designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE. [e20] If it fails to meet the requirements, does not cure the resulting QSE Affiliation Breach and serves Load, ERCOT shall, after notice, initiate a Mass Transition of its ESI IDs. [e10]

### Why is the Virtual QSE liable for charges even though it was a stop-gap?

The Protocols make a Virtual QSE liable for all Initial, Final and True-Up Settlements and Resettlements covering dates it represented ESI IDs, plus ERCOT's collection costs. [e21]

### Can an LSE switch QSEs whenever it wants?

No: written notice no more than once in any consecutive three days, with updated information at least six days before the effective date. [e18][e19]

## Scenarios

### A REP's QSE defaults. What happens to the REP's customers?

- If the QSE gave notice of termination, the REP, as an LSE, must by noon on the fourth Business Day after the notice date designate a new QSE or satisfy creditworthiness requirements and operate as an Emergency QSE. [e20] If ERCOT gave notice of the QSE's termination or suspension, the REP is designated a Virtual QSE for up to two Bank Business Days, during which it must designate a new QSE or operate as an Emergency QSE (the latter not available where the REP is the same Entity as the QSE). [e35]
- If it fails and does not cure, ERCOT shall initiate a Mass Transition of the REP's ESI IDs after notice. [e10]
- The Mass Transition Date is Calendar Day 0 plus two days, and POLRs take responsibility no earlier than that date. [e25]

## Open items

- How an LSE's load is represented in settlement beyond Ancillary Service obligations (load zones, profiling) was not covered here.
- The CFE is referenced in the ELSE definition; the Protocol definition of CFE was not quoted.
- The Section 16.3.2.3 rejection grounds and fee schedule were not quoted.
