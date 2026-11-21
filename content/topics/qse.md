---
id: qse
name: QSE (Qualified Scheduling Entity)
aliases: [QSE, Qualified Scheduling Entity, Virtual QSE, Emergency QSE, Subordinate QSE, Data Agent-Only QSE]
kind: entity
domain: structure
level: 1
depth: deep
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-21
links:
  - to: lse
    type: related
    note: Every LSE must designate a QSE to perform QSE functions on its behalf, and bears sole responsibility for selecting and maintaining it. [e4][e29]
  - to: resource-entity
    type: related
    note: Resource Entities are also represented by a QSE, and the QSE definition names them alongside LSEs. [e1]
  - to: rep
    type: related
    note: ERCOT must approve the LSE's QSE designation before a Competitive Retailer (which includes REPs) enrolls customer ESI IDs. [e5][e13]
  - to: ercot
    type: related
    note: ERCOT qualifies QSEs and settles payments and charges with them. [e1]
  - to: credit-tpe
    type: prerequisite-of
    note: A Counter-Party must keep Financial Security at or above its Total Potential Exposure, and ERCOT may suspend a QSE's ability to bid in the DAM if it does not. [e30]
  - to: mass-transition
    type: causes
    note: An Emergency QSE that is an LSE and fails the seven-Business-Day requirement triggers a Mass Transition of its ESI IDs. [e38]
  - to: cop
    type: used-in
    note: A QSE that represents a Resource must update its COP within 60 minutes of a change in availability. [e33]
  - to: sced
    type: used-in
    note: Each QSE must forward valid Dispatch Instructions to the Resource or identify a reason for non-compliance. [e34]
  - to: ancillary-services
    type: settles
    note: ERCOT pays each QSE for Ancillary Service Capacity procured in the DAM and each QSE pays for its share. [e35]
  - to: ruc-make-whole
    type: related
    note: The IMM reports that RUC make-whole costs are first allocated to capacity-short QSEs. [e9]
  - to: retailer-defaults-2021
    type: related
    note: See the case topic for retailer default events.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Qualified Scheduling Entity (QSE)"
    quote: "A Market Participant that is qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for Resource Entities and Load Serving Entities (LSEs) and for settling payments and charges with ERCOT."
  - id: e2
    source: puct-25-5
    locator: "Section 25.5, definition of Qualified scheduling entity"
    quote: "to submit balanced schedules and ancillary services bids and settle payments with ERCOT."
  - id: e3
    source: np-16
    locator: "Section 16.2.1(1)(k)"
    quote: "Be financially responsible for payment of Settlement charges for those Entities it represents under these Protocols;"
  - id: e4
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e5
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "The acknowledgement of the LSE’s QSE designation must be approved by ERCOT prior to a CR’s enrollment of Customer ESI IDs or prior to NOIE or ELSE registration of a wholesale point of delivery."
  - id: e6
    source: np-16
    locator: "Section 16.2.1(3)"
    quote: "(3) A QSE must be able to demonstrate to ERCOT’s reasonable satisfaction that it does not pose an Unreasonable Financial Risk. Unreasonable Financial Risk as used in Section 16, Registration and Qualification of Market Participants, is a risk of financial default posed to ERCOT or its Market Participants by participation of an Entity or its Principals in the ERCOT market."
  - id: e7
    source: np-16
    locator: "Section 16.2.6.1(1)"
    quote: "A “Virtual QSE” is defined as an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE."
  - id: e8
    source: np-16
    locator: "Section 16.2.6.1(3)"
    quote: "If ERCOT has given Notice of an LSE’s or Resource Entity’s QSE’s termination or suspension, that LSE or Resource Entity will be designated as a Virtual QSE for up to two Bank Business Days, during which time it must either: (a) Designate and begin operations with a new QSE; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, and operate as an Emergency QSE as described below."
  - id: e9
    source: imm-som-2025
    locator: "RUC make-whole cost allocation discussion"
    quote: "ERCOT first allocates make-whole payment costs to Qualified Scheduling Entities (QSEs) that do not provide enough capacity to cover their real-time obligations and are therefore capacity short."
  - id: e10
    source: np-02
    locator: "Section 2.1, definition of Counter-Party"
    quote: "A single Entity that is a QSE and/or a CRR Account Holder. A Counter-Party includes all registrations as a QSE, all subordinate QSEs, and all CRR Account Holders by the same Entity."
  - id: e11
    source: imm-som-2025
    locator: "QSE Operation Planning"
    quote: "The Current Operating Plan (COP) is the mechanism QSEs use to communicate the expected status of their resources to ERCOT."
  - id: e12
    source: np-16
    locator: "Section 16.2.1(1)(n)"
    quote: "Demonstrate to ERCOT’s reasonable satisfaction that the Entity can maintain a 24-hour, seven-day-per-week control or operations center with qualified personnel for the purposes of communicating with ERCOT relating to Day-Ahead and Operating Day exchange of market and operational obligations. This requirement applies to QSEs that are WAN Participants."
  - id: e13
    source: np-02
    locator: "Section 2.1, definition of Load Serving Entity (LSE)"
    quote: "LSEs include Competitive Retailers (which includes REPs) and NOIEs that serve Load and ELSEs."
  - id: e14
    source: np-16
    locator: "Section 16.2.6.1(3)(b)"
    quote: "this option does not apply to an LSE or Resource Entity represented by a terminated or suspended QSE that is the same Entity as the terminated or suspended QSE."
  - id: e15
    source: np-16
    locator: "Section 16.2.1(3), Unreasonable Financial Risk indicators"
    quote: "Indicators of Unreasonable Financial Risk may include, but are not limited to: past market manipulation, trading violations, or other finance-related violations based upon a final adjudication in state or federal regulatory or legal proceedings; financial defaults in ERCOT or other energy markets resulting in losses or uplifts; indications of imminent bankruptcy or insolvency, or other past civil judgement or criminal conviction that reflects problematic behavior on the part of the Entity or its Principals."
  - id: e16
    source: np-16
    locator: "Section 16.2.1(6), notice of material change"
    quote: "(6) A QSE shall promptly notify ERCOT of any change that a reasonable examiner may deem material to the QSE’s ability to continue to meet the requirements set forth in this Section, and any material change in the information provided by the QSE to ERCOT that may adversely affect the reliability or safety of the ERCOT System or the financial security of ERCOT. This includes any changes in the Principals of the QSE. If the QSE fails to so notify ERCOT of such change within two Business Days after becoming aware of the change, then ERCOT may, after providing notice to each Entity represented by the QSE, refuse to allow the QSE to perform as a QSE and take any other action ERCOT deems appropriate, in its sole discretion, to prevent ERCOT or Market Participants from bearing potential or actual risks, financial or otherwise, arising from those changes, and in accordance with these Protocols."
  - id: e17
    source: np-16
    locator: "Section 16.2.1(7)-(8), Subordinate QSEs"
    quote: "(7) Subject to the following provisions of this paragraph, a QSE may partition itself into any number of subordinate QSEs (“Subordinate QSEs”). If a single Entity requests to partition itself into more than four Subordinate QSEs, ERCOT may implement the request subject to ERCOT’s reasonable determination that the additional requested Subordinate QSEs will not be likely to overburden ERCOT’s staffing or systems. ERCOT shall adopt an implementation plan allowing phased-in registration for these additional Subordinate QSEs in order to mitigate system or staffing impacts. However, ERCOT may not unreasonably delay that registration. (8) Each Subordinate QSE must be treated as an individual QSE for all purposes including communications and control functions except for liability, financial security, and financial liability requirements under this Section. That liability, financial security, and financial liability is cumulative for all Subordinate QSEs for the single Entity signing the QSE Agreement."
  - id: e18
    source: np-16
    locator: "Section 16.2.1.2(2), Data Agent-Only QSEs"
    quote: "(2) An Entity is eligible to register as a Data Agent-Only QSE and maintain that registration if it: (a) Meets all the eligibility criteria to qualify as a QSE under paragraph (1) of Section 16.2.1, Criteria for Qualification as a Qualified Scheduling Entity, except for items (b), (c), (h), (j), (m), and (n); (b) Is not also registered as a Congestion Revenue Right (CRR) Account Holder; (c) Does not participate in the Day-Ahead Market (DAM) or Real-Time Market (RTM); (d) Does not participate in the ERS market; (e) Does not have decision making authority over the Resources for which the Entity provides agency services;"
  - id: e19
    source: np-16
    locator: "Section 16.2.2(1), QSE Application Process"
    quote: "The application must be submitted at least 60 days before the proposed date of commencement of service."
  - id: e20
    source: np-16
    locator: "Section 16.2.2.3(1), ERCOT Approval or Rejection"
    quote: "(1) ERCOT will approve or reject a QSE application within 60 days after the application has been deemed complete as provided for in Section 16.2.2.2, Incomplete QSE Applications, unless ERCOT determines that additional time is needed to complete its review of the application. ERCOT will notify the applicant when additional time is needed to complete its review and will provide a date by which ERCOT expects to complete its review."
  - id: e21
    source: np-16
    locator: "Section 16.2.3.2(1)-(2), QSE Service Termination notice"
    quote: "(1) If a QSE intends to terminate representation of a Resource Entity that owns or controls a Resource that is in the ERCOT Network Operations Model (other than a Resource Entity serving as its own QSE, in which case this Section does not apply), the QSE shall provide, no less than 45 days before the specified effective termination date (“Termination Date”), written notice to ERCOT and the Resource. (2) If a QSE intends to terminate representation of a Load Serving Entity (LSE) or a Resource Entity that does not own or control a Resource that is in the ERCOT Network Operations Model (other than an LSE or Resource Entity serving as its own QSE, in which case this Section does not apply), the QSE shall provide, no less than 12 Business Days before the specified effective Termination Date, written notice to ERCOT and the LSE or Resource Entity."
  - id: e22
    source: np-16
    locator: "Section 16.2.3.2(3)"
    quote: "(3) Effective at 2400 on the Termination Date specified by the QSE, the QSE may no longer provide QSE services for or represent the terminated LSE or Resource. The QSE is responsible for settlement obligations that the QSE has incurred on behalf of the terminated LSE or Resource before the termination. The QSE must participate in Real-Time Operations through the Termination Date and provide updates pursuant to these Protocols for the Operating Day which is the Termination Date. Notwithstanding the foregoing, if, before the Termination Date, the LSE/Resource: (a) Affiliates itself with a new QSE, or (b) Fulfills ERCOT’s creditworthiness requirements in order to become an Emergency QSE, the QSE that provided notice of the intent to terminate representation of the LSE/ Resource will no longer be responsible for the terminated LSE/Resource upon the effective date of the new QSE’s representation of that LSE/Resource, or the LSE/Resource qualifying as an Emergency QSE."
  - id: e23
    source: np-16
    locator: "Section 16.2.6.1(2)"
    quote: "(2) If a QSE has given Notice of its intent to terminate its relationship with an LSE or Resource Entity, that LSE or Resource Entity, must, by noon on the fourth Business Day after the termination notice date, either: (a) Designate a new QSE with such relationship to take effect on the Termination Date, or earlier if allowed by ERCOT; or (b) Satisfy all necessary creditworthiness requirements for QSEs as described in Section 16.2, Registration and Qualification of Qualified Scheduling Entities, and operate as an Emergency QSE as described below."
  - id: e24
    source: np-16
    locator: "Section 16.2.6.1(7), Virtual QSE liability"
    quote: "(7) For any Operating Day in which an LSE or Resource Entity is not either represented by a QSE or qualified as an Emergency QSE, ERCOT may designate the LSE or Resource Entity as a Virtual QSE. ERCOT may authorize the Virtual QSE to access to the capabilities of the MIS. A Virtual QSE shall be liable for any and all charges associated with Initial, Final and True-Up Settlements as well as any Resettlements applying to dates during which the Virtual QSE represented ESI IDs or otherwise incurred charges pursuant to these Protocols, along with any and all costs incurred by ERCOT in collecting such amounts."
  - id: e25
    source: np-16
    locator: "Section 16.2.6.2(1)-(3), market participation by Emergency or Virtual QSE"
    quote: "(1) An Emergency QSE or a Virtual QSE may only represent itself; it may not represent another legal Entity. (2) An Emergency QSE or a Virtual QSE that is also an LSE may only submit the following transactions, and may do so only to the extent that the transactions are intended to serve the Load of the Emergency QSE’s or Virtual QSE’s Customers: (a) Energy Trades in which the Emergency QSE or the Virtual QSE is the buyer; (b) Capacity Trades in which the Emergency QSE or the Virtual QSE is the buyer; (c) Ancillary Service Trades in which the Emergency QSE or the Virtual QSE is the buyer; and (d) DAM Energy Bids. (3) An Emergency QSE or a Virtual QSE that is also a Resource Entity may only submit transactions that are directly attributable to and wholly provided by the Resource Entity’s Resource(s)."
  - id: e26
    source: np-16
    locator: "Section 16.2.6.3(1)"
    quote: "(1) Within seven Business Days after receiving designation as an Emergency QSE, an Emergency QSE must either: (a) Designate a QSE that will represent the LSE or Resource Entity to ERCOT; or (b) Fulfill all QSE registration and qualification requirements. After completing the requirements in item (b), ERCOT may redesignate the Emergency QSE as a QSE."
  - id: e27
    source: np-16
    locator: "Section 16.2.7, Acceleration"
    quote: "(1) Upon termination of a QSE’s rights as a QSE and the Standard Form Market Participant Agreement or any other Agreement(s) between ERCOT and the QSE, all sums owed to ERCOT are immediately accelerated and are immediately due and owing in full. At that time, ERCOT may immediately draw upon any security or other collateral pledged to ERCOT and may offset or recoup all amounts due to ERCOT to satisfy those due and owing amounts."
  - id: e28
    source: np-16
    locator: "Section 16.3.3(1)-(3), Changing QSE Designation (LSE)"
    quote: "(1) An LSE may change its designation of QSE with written notice to ERCOT no more than once in any consecutive three days. (2) If an LSE’s representation by a QSE will terminate or the LSE intends to be represented by a different QSE, the LSE shall provide the name of the newly designated QSE to ERCOT along with a written statement from the designated QSE acknowledging the QSE’s agreement to accept responsibility for the LSE’s transactions under these Protocols. ERCOT shall notify the LSE of approval or disapproval as soon as practicable after receipt of the designation. (3) The LSE shall submit updated QSE designation information to ERCOT no less than six days prior to the effective date."
  - id: e29
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each applicant shall acknowledge that it bears sole responsibility for selecting and maintaining a QSE as its representative."
  - id: e30
    source: np-16
    locator: "Section 16.11.1(1), Creditworthiness Requirements for Counter-Parties"
    quote: "A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE). Each Counter-Party shall maintain any required Financial Security in a form acceptable to ERCOT in its sole discretion. If at any time the Counter-Party does not meet ERCOT’s creditworthiness requirements, then ERCOT may suspend the Counter-Party’s rights under these Protocols until it meets those creditworthiness requirements. ERCOT’s failure to suspend the Counter-Party’s rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a CRR Account Holder’s ability to bid on future CRRs or a Qualified Scheduling Entity’s (QSE’s) ability to bid in the Day-Ahead Market (DAM)."
  - id: e31
    source: ercot-credit-faqs
    locator: "ERCOT Credit FAQs, consequences of paying an invoice or collateral request late"
    quote: "Payments for invoices, collateral and escrow requests that are received beyond the due date and time will be deemed late and subject to enforcement levels in accordance with Section 16.11.6 Payment Breach and Late Payments by Market Participants. The TPE will be increased by 110% for the first instance of late payment over a rolling 12-month period; and 115% and 120% for the second and third instances, respectively. Also for the third instance, the TPE can only be covered by cash collateral. If payment is not received on the following day, a breach notice will be sent and the Counter-Party will be given one business day to cure the breach. If payment is not received on the due date of the breach notice, the Counter-Party will be terminated."
  - id: e32
    source: np-16
    locator: "Section 16.11.6.1.6(3), Revocation of a Market Participant's Rights and Termination of Agreements"
    quote: "(3) If a breaching Market Participant is also an LSE (whether or not the Default occurred pursuant to the Market Participant’s activities as an LSE), then: (a) Within 24 hours of receiving notice of the Payment Breach, the Market Participant shall provide to ERCOT all the information regarding its ESI IDs set forth in the ERCOT Retail Market Guide; and (b) On revocation of some or all of the Market Participant’s rights or termination of the Market Participant’s agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant’s ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT."
  - id: e33
    source: np-03
    locator: "Section 3.9.1(2), Current Operating Plan (COP) Criteria"
    quote: "(2) Each QSE that represents a Resource shall update its COP reflecting changes in availability of any Resource as soon as reasonably practicable, but in no event later than 60 minutes after the event that caused the change."
  - id: e34
    source: np-06
    locator: "Section 6.5.7.8(2), Dispatch Procedures"
    quote: "(2) Each QSE shall immediately forward any valid Dispatch Instruction to the appropriate Resource or group of Resources or identify a reason for non-compliance with the Dispatch Instruction to ERCOT in accordance with Section 6.5.7.9, Compliance with Dispatch Instructions."
  - id: e35
    source: np-04
    locator: "Section 4.6.4(1), Settlement of Ancillary Services Procured in the DAM"
    quote: "(1) ERCOT shall pay each QSE providing Ancillary Services procured in the DAM the amount of Ancillary Service Capacity in MW procured from the QSE multiplied by the MCPC for the Ancillary Service provided, expressed in $/MW. Each QSE shall pay for its share of each Ancillary Service procured by ERCOT in the DAM."
  - id: e36
    source: np-16
    locator: "Section 16.2.1(1)(r)"
    quote: "(r) If a QSE seeks to register as its own Counter-Party, it must complete and submit to ERCOT Section 23, Form U, Counter-Party Credit Application Form."
  - id: e37
    source: np-16
    locator: "Section 16.2.5(1), Suspended or Terminated QSE notification"
    quote: "(1) If ERCOT suspends a QSE or terminates the QSE’s Standard Form Market Participant Agreement for Default, ERCOT shall notify the affected LSEs and Resource Entities that the QSE has been suspended or terminated and the effective date of such suspension or termination."
  - id: e38
    source: np-16
    locator: "Section 16.2.6.3(2)"
    quote: "(2) If an Emergency QSE that is an LSE fails to meet at least one of the requirements listed above within the allotted time, then ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s ESI IDs pursuant to Section 15.1.3, Transition Process."
  - id: e39
    source: np-16
    locator: "Section 16.2.6.1(6), Resource Entity QSE Affiliation Breach"
    quote: "(6) If a Resource Entity fails to meet the requirements of one of the options set forth in paragraph (2) or (3) above within the requisite timeframe, it shall constitute a QSE Affiliation Breach under the Resource Entity’s Standard Form Market Participant Agreement, provided that ERCOT may allow the Resource Entity additional time, as determined by ERCOT staff, to meet the requirements."
  - id: e40
    source: np-16
    locator: "Section 16.2.6.1(5), QSE Affiliation Breach (LSE)"
    quote: "(5) If the LSE fails to meet the requirements of one of the above options in the timeframe set forth above, it shall constitute a QSE Affiliation Breach under the LSE’s Standard Form Market Participant Agreement. If the LSE fails to cure the QSE Affiliation Breach within the cure period set forth in the Standard Form Market Participant Agreement, and the LSE serves Load, ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE’s Electronic Service Identifiers (ESI IDs) pursuant to Section 15.1.3, Transition Process."
---

## Definition

A QSE is a Market Participant that ERCOT has qualified to communicate with ERCOT on behalf of Resource Entities and Load Serving Entities and to settle payments and charges with ERCOT. [e1] The PUCT's rule describes the same role as submitting balanced schedules and ancillary services bids and settling payments with ERCOT. [e2]

## How it works

**Representation.** Resource Entities and LSEs communicate with ERCOT and settle charges through a QSE. [e1] An LSE applicant must designate the QSE that will perform QSE functions on its behalf, and acknowledges that it bears sole responsibility for selecting and maintaining a QSE. [e4][e29] ERCOT must approve that designation before a Competitive Retailer enrolls customer ESI IDs, or before a NOIE or ELSE registers a wholesale point of delivery. [e5] An LSE may change its QSE designation by written notice no more than once in any consecutive three days, and must submit the updated designation no less than six days before the effective date. [e28]

**Day-to-day duties named in the Protocols.** A QSE that represents a Resource must update its Current Operating Plan as soon as reasonably practicable and no later than 60 minutes after the event that changed availability. [e33] A QSE must forward a valid Dispatch Instruction to the Resource or group of Resources, or identify a reason for non-compliance to ERCOT. [e34] In the DAM, ERCOT pays each QSE providing procured Ancillary Services the MW procured multiplied by the MCPC, and each QSE pays for its share of each Ancillary Service procured. [e35]

**Qualification.** One requirement is that the entity be financially responsible for Settlement charges for the entities it represents. [e3] A QSE must demonstrate to ERCOT's reasonable satisfaction that it does not pose an "Unreasonable Financial Risk", a risk of financial default posed to ERCOT or its Market Participants. [e6] The Protocols say indicators may include, but are not limited to, past market manipulation, trading violations or other finance-related violations based on a final adjudication, financial defaults in ERCOT or other energy markets resulting in losses or uplifts, and indications of imminent bankruptcy or insolvency. [e15] QSEs that are WAN Participants must show they can maintain a 24-hour, seven-day-per-week control or operations center for Day-Ahead and Operating Day communication with ERCOT. [e12] A QSE that seeks to be its own Counter-Party must submit a Counter-Party Credit Application Form. [e36] A QSE must notify ERCOT of material changes, including changes in its Principals; if it does not within two Business Days of becoming aware, ERCOT may, after notice to each represented Entity, refuse to allow it to perform as a QSE. [e16]

**Application timeline.** An application must be submitted at least 60 days before the proposed commencement of service. [e19] ERCOT approves or rejects within 60 days after the application is deemed complete, unless it determines more time is needed and tells the applicant the date it expects to finish. [e20]

**Subordinate QSEs and the Counter-Party.** A QSE may partition itself into any number of Subordinate QSEs, though a request for more than four is subject to ERCOT's determination that it will not overburden its staffing or systems. [e17] Each Subordinate QSE is treated as an individual QSE for all purposes except liability, financial security and financial liability, which are cumulative for the single Entity signing the QSE Agreement. [e17] The Protocols define a Counter-Party as a single Entity that is a QSE and/or a CRR Account Holder, including all its QSE registrations, subordinate QSEs and CRR Account Holder registrations. [e10]

**Data Agent-Only QSEs.** An entity may register as a Data Agent-Only QSE if, among other conditions, it is not also a CRR Account Holder, does not participate in the DAM, RTM or ERS market, and has no decision-making authority over the Resources for which it provides agency services. [e18]

**When a QSE leaves or fails.** A "Virtual QSE" is an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE. [e7]

**QSE-initiated termination.** If a QSE intends to stop representing a Resource Entity that owns or controls a Resource in the Network Operations Model, it must give ERCOT and the Resource written notice at least 45 days before the Termination Date; for an LSE, or a Resource Entity without such a Resource, the notice is at least 12 Business Days. Neither applies where the entity serves as its own QSE. [e21] The terminating QSE stops representing the entity at 2400 on the Termination Date and remains responsible for settlement obligations it incurred before then, but is released earlier if the entity affiliates with a new QSE or qualifies as an Emergency QSE before that date. [e22] By noon on the fourth Business Day after the termination notice date the LSE or Resource Entity must designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE. [e23]

**ERCOT-initiated suspension or termination.** If ERCOT suspends a QSE or terminates its Standard Form Market Participant Agreement for Default, ERCOT notifies the affected LSEs and Resource Entities. [e37] Those entities are designated a Virtual QSE for up to two Bank Business Days, in which they must designate and start operating with a new QSE, or meet QSE creditworthiness requirements and operate as an Emergency QSE; the Emergency QSE option does not apply to an entity represented by a terminated or suspended QSE that is the same Entity as that QSE. [e7][e8][e14]

**Limits on Virtual and Emergency QSEs.** For any Operating Day in which an LSE or Resource Entity has neither a QSE nor Emergency QSE qualification, ERCOT may designate it a Virtual QSE, which is liable for charges in Initial, Final and True-Up Settlements and any Resettlements, plus ERCOT's collection costs. [e24] An Emergency or Virtual QSE may only represent itself. An LSE in that position may only submit buyer-side Energy, Capacity and Ancillary Service Trades and DAM Energy Bids to serve its own Customers' Load; a Resource Entity may only submit transactions directly attributable to and wholly provided by its own Resources. [e25]

**Seven-Business-Day deadline.** Within seven Business Days after designation as an Emergency QSE it must designate a QSE to represent it, or fulfil all QSE registration and qualification requirements, after which ERCOT may redesignate it as a QSE. [e26] If an Emergency QSE that is an LSE fails to do so, ERCOT shall initiate a Mass Transition of its ESI IDs after notice as specified in the Retail Market Guide. [e38] If a Resource Entity fails, ERCOT may allow additional time. [e39]

**Acceleration.** On termination of a QSE's rights and its agreements with ERCOT, all sums owed to ERCOT are immediately due, and ERCOT may draw on pledged security and offset or recoup amounts due. [e27]

## ERCOT context

The IMM reports that RUC make-whole costs are allocated first to QSEs that are capacity short against their real-time obligations. [e9] QSEs communicate resource status to ERCOT through the Current Operating Plan. [e11]

Credit and payment discipline sits behind the QSE role. A Counter-Party must keep Financial Security at or above its Total Potential Exposure; if it does not, ERCOT may suspend its rights, including a QSE's ability to bid in the DAM. [e30] ERCOT's Credit FAQs (informational; the Protocols control where they conflict) describe escalating consequences for late payment: TPE increased by 110% for the first late payment in a rolling 12 months, 115% and 120% for the second and third, with a breach notice, one business day to cure and termination if not cured. [e31] If ERCOT revokes rights or terminates a market participant's agreements and that participant is also an LSE, ERCOT initiates a Mass Transition of its ESI IDs without needing a PUCT order. [e32]

## Key facts

- QSE qualification is done by ERCOT under Section 16 of the Protocols. [e1]
- A QSE is financially responsible for Settlement charges of the entities it represents. [e3]
- ERCOT approval of an LSE's QSE designation is a precondition to enrolling customers (CRs) or registering a wholesale delivery point (NOIEs, ELSEs). [e4][e5]
- Termination notice by a QSE: at least 45 days for a Resource Entity with a Resource in the Network Operations Model; at least 12 Business Days for an LSE or other Resource Entity. [e21]
- After ERCOT gives notice that a represented entity's QSE is terminated or suspended, the entity becomes a Virtual QSE for up to two Bank Business Days. [e8]
- Emergency QSE: seven Business Days to name a QSE or become fully qualified. [e26]
- Subordinate QSEs are separate for operations but cumulative for liability and financial security. [e17]

## Say it like this

(Guidance) A QSE is the qualified middleman between ERCOT and the generators and retailers it represents: it submits schedules and ancillary service bids and settles payments with ERCOT. [e2] Because a QSE must be financially responsible for the Settlement charges of the entities it represents [e3], ERCOT tests whether it poses an Unreasonable Financial Risk [e6] and monitors its credit against Total Potential Exposure. [e30]

## Common confusion

(Guidance) A QSE is not a retailer and not a generator; it is the entity that interfaces with ERCOT for them. A REP is a Competitive Retailer, which is a kind of LSE [e13], and each LSE applicant must designate a QSE. [e4][e5] Do not confuse a QSE with a Counter-Party: a Counter-Party is a single Entity that is a QSE and/or a CRR Account Holder and includes all of that Entity's QSE registrations. [e10] Also keep "Emergency QSE" (an LSE or Resource Entity that meets QSE creditworthiness requirements, for itself only) apart from "Virtual QSE" (a temporary ERCOT designation). [e25][e7]

## Questions

### Why does every LSE need a QSE?

The Protocols require each LSE applicant to designate a QSE that will perform QSE functions for it. [e4] ERCOT must approve that designation before a CR enrolls customer ESI IDs. [e5] The QSE is the party qualified to communicate with ERCOT and settle charges with ERCOT. [e1]

### What happens if a QSE is suspended or terminated?

Once ERCOT has given notice of the termination or suspension, each affected LSE or Resource Entity is designated a Virtual QSE for up to two Bank Business Days. It must then designate a new QSE or satisfy QSE creditworthiness requirements and operate as an Emergency QSE, except that the Emergency QSE option does not apply where the represented entity is the same Entity as the QSE. [e7][e8][e14]

### What is "Unreasonable Financial Risk"?

It is the risk of financial default posed to ERCOT or its Market Participants by an Entity or its Principals participating in the market, and a QSE must be able to demonstrate to ERCOT's reasonable satisfaction that it does not pose it. [e6]

### Why does a terminating QSE stay on the hook after it gives notice?

The termination takes effect at 2400 on the Termination Date, and the QSE remains responsible for settlement obligations it incurred before then and must keep participating in Real-Time Operations through that date. [e22] The notice period is long for a Resource that is in the Network Operations Model (45 days) and shorter for an LSE (12 Business Days). [e21]

### What if an LSE's QSE leaves and the LSE does nothing?

By noon on the fourth Business Day after the notice it must name a new QSE or qualify as an Emergency QSE. [e23] Failing that is a QSE Affiliation Breach, and if the LSE serves Load and does not cure it, ERCOT initiates a Mass Transition of its ESI IDs. [e40]

### Can a Subordinate QSE ring-fence the parent's credit exposure?

No. Each Subordinate QSE is treated as an individual QSE except for liability, financial security and financial liability, which are cumulative for the single Entity signing the QSE Agreement. [e17]

## Scenarios

### A REP's QSE is terminated for default. What happens to the REP's customers?

- ERCOT notifies the affected LSEs of the suspension or termination and its effective date. [e37]
- The REP (an LSE) is a Virtual QSE for up to two Bank Business Days, and must designate a new QSE or satisfy creditworthiness and operate as an Emergency QSE; the Emergency QSE option does not apply where the REP is the same Entity as the terminated or suspended QSE. [e8]
- If it becomes an Emergency QSE, it may only represent itself and only submit buyer-side trades and DAM Energy Bids to serve its Customers' Load. [e25]
- Within seven Business Days of Emergency QSE designation it must name a QSE or become fully qualified; if not, ERCOT initiates a Mass Transition of its ESI IDs. [e26][e38]

## Open items

- Resolved 2026-11-21: Data Agent-Only QSE variants (Section 16.2.1.2) are now summarized. The ERS-only QSE exemption (Section 16.17) is still not described.
- Specific QSE credit limits, collateral formulas and Total Potential Exposure mechanics are not covered here; see the credit-tpe topic.
- The exact number of QSEs registered in ERCOT was not found in the sources reviewed.
- The application fee amount and the QSE background-check fee were not found in the saved sources.
