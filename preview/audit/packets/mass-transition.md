# Audit packet: Mass Transition (mass-transition)

kind concept · domain structure · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Mass Transition · text copy line 1598

BEFORE: …minated due to a triggering event that disables all, or a significant portion of, the necessary data and/or infrastructure for operations of those systems and markets. Such triggering events may include, but are not limited to, Blackouts, Partial Blackouts, and Force Majeure Events. Mass Transition 
QUOTE: The transition of Electric Service Identifiers (ESI IDs) from one Competitive Retailer (CR) to a Provider of Last Resort (POLR) or designated CR, or from one Transmission and/or Distribution Service Provider (TDSP) to another TDSP, in a quantity or within a timeframe identified by Applicable Legal Authority.
AFTER:  Mass Transition Decision Parameters associated with a Mass Transition event that dictate the parties involved and the Mass Transition Effective Date. Mass Transition Decision parameters include designation of the Losing CR, the Gaining CR, the preliminary list of transitioning ESI IDs, and the Mass…

### e2 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3(1) · text copy line 305 · heading above: 15.1.3 Transition Process

BEFORE: …ed for the evaluation. 15.1.2 Response from ERCOT to Drop to Affiliate Retail Electric Provider Request (1) ERCOT will send a reject response using the 814_11, Drop Response, within one Retail Business Day to the current CR notifying the CR that the request is invalid. 15.1.3 Transition Process (1) 
QUOTE: Certain circumstances may arise during the course of business in the Texas retail electric market that may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes.
AFTER:  15.1.3.1 Mass Transition Process (1) In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP. The 814_03 transaction shall contain…

### e3 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.1(1) · text copy line 309 · heading above: 15.1.3.1 Mass Transition Process

BEFORE: …may necessitate the transition of ESI IDs from one CR to a Provider of Last Resort (POLR) or designated CR, or from one TDSP to another TDSP in quantities and on a time frame that is not completely supported by standard market transactions or business processes. 15.1.3.1 Mass Transition Process (1) 
QUOTE: In a Mass Transition event, ERCOT shall submit the 814_03, Enrollment Notification Request, requesting a meter read for the associated ESI IDs, for a date two days after the date ERCOT initiates such transactions to the TDSP.
AFTER:  The 814_03 transaction shall contain a request for historical usage and the requested date for the meter read date to transfer the ESI IDs. If an actual meter read cannot be obtained by the date requested in the 814_03 transaction, then the meter read may be estimated by the TDSP. (See Retail Marke…

### e4 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.1(2) · text copy line 311 · heading above: 15.1.3.1 Mass Transition Process

BEFORE: …, Appendices, Appendix F2, Timeline for Initiation of a Mass Transition on a Business Day not Prior to a Weekend or ERCOT Holiday.) (2) The TDSP shall respond to the 814_03 transaction within two Retail Business Days with an 814_04, Enrollment Notification Response, and an 867_02, Historical Usage. 
QUOTE: Within one Retail Business Day of receiving the 814_04 transaction, ERCOT will send an 814_11, Drop Response, to the transitioning CR and forward an 814_14, Drop Enrollment Request, with the scheduled meter read date, to the POLR(s) or designated CR.
AFTER:  The TDSP shall submit an 867_04, Initial Meter Read, with a meter read date equal to the scheduled meter read date in the 814_04 transaction, which will also be known as the transition date. (See Retail Market Guide Section 9, Appendix D1, Transaction Timing Matrix, for specific transaction timings…

### e5 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.1(3) · text copy line 313 · heading above: 15.1.3.1 Mass Transition Process

BEFORE: …SP shall submit an 867_04, Initial Meter Read, with a meter read date equal to the scheduled meter read date in the 814_04 transaction, which will also be known as the transition date. (See Retail Market Guide Section 9, Appendix D1, Transaction Timing Matrix, for specific transaction timings.) (3) 
QUOTE: ERCOT shall identify and monitor transitioned ESI IDs for a period of 60 days from the Mass Transition Date, as defined in the Retail Market Guide. Identification of the transitioned ESI ID shall terminate either upon the first completed switch, move in, move out, or at the end of the 60 day period, whichever occurs first.
AFTER:  (4) For a detailed outline of the business process and responsibilities of all Entities involved in a Mass Transition event, refer to the Retail Market Guide Section 7, Market Processes. 15.1.3.2 Acquisition Transfer Process (1) In an Acquisition Transfer event, ERCOT shall submit the 814_03, Enrol…

### e6 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.2.6.3(2) · text copy line 624 · heading above: 16.2.6.3 Requirement to Obtain New Qualified Scheduling Entity or Qualified Scheduling Entity Qualification

BEFORE: …on as an Emergency QSE, an Emergency QSE must either: (a) Designate a QSE that will represent the LSE or Resource Entity to ERCOT; or (b) Fulfill all QSE registration and qualification requirements. After completing the requirements in item (b), ERCOT may redesignate the Emergency QSE as a QSE. (2) 
QUOTE: If an Emergency QSE that is an LSE fails to meet at least one of the requirements listed above within the allotted time, then ERCOT shall, after notice as specified in Retail Market Guide Section 7.11, Transition Process, initiate a Mass Transition of the LSE's ESI IDs pursuant to Section 15.1.3, Transition Process.
AFTER:  If an Emergency QSE that is a Resource Entity fails to meet at least one of the requirements listed above within the allotted time, ERCOT may allow the Resource Entity additional time, as determined by ERCOT staff, to meet the requirements. 16.2.7 Acceleration (1) Upon termination of a QSE's rights…

### e7 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.6.1.6(3)(b) · text copy line 2181 · heading above: 16.11.6.1.6 Revocation of a Market Participant’s Rights and Termination of Agreements

BEFORE: …er or not the Default occurred pursuant to the Market Participant's activities as an LSE), then: (a) Within 24 hours of receiving notice of the Payment Breach, the Market Participant shall provide to ERCOT all the information regarding its ESI IDs set forth in the ERCOT Retail Market Guide; and (b) 
QUOTE: On revocation of some or all of the Market Participant's rights or termination of the Market Participant's agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant's ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT.
AFTER:  (4) After revocation of its rights or termination of its Agreement with ERCOT, the Market Participant will remain liable for all charges or costs associated with any continued activity related to the Counter-Party's relationship with ERCOT and any expenses arising from the consequences of such term…

### e8 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.4.3, definition of ILE · text copy line 1522 · heading above: 16.11.4.3 Determination of Counter-Party Estimated Aggregate Liability

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | ILE _(q) | $ | Incremental Load Exposure-
QUOTE: In the event of a Mass Transition necessitated by the default of a Counter-Party representing a QSE associated with an LSE, ERCOT may adjust the TPE of the Counter-Parties representing QSEs that are qualified as Providers of Last Resort (POLRs) to reflect the estimated Incremental Load Exposure (ILE) resulting from the Mass Transition.
AFTER:  The adjustment will be based on the POLR's pro rata share of the defaulting Counter-Party's RTLE, based on the total estimated Electric Service Identifiers (ESI IDs) to be transitioned. ERCOT will communicate any such adjustment to the Authorized Representative of each Counter-Party who is a POLR w…

### e9 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.3(1) · text copy line 327 · heading above: 15.1.3.3 Customer Billing Contact Information

BEFORE: …saction Timing Matrix, for specific transaction timings. (3) For a detailed outline of the business process and responsibilities of all Entities involved in an Acquisition Transfer event, refer to the Retail Market Guide Section 7, Market Processes. 15.1.3.3 Customer Billing Contact Information (1) 
QUOTE: All CRs participating in the Texas retail electric market shall provide, in accordance with the Retail Market Guide, current Customer billing contact information to ERCOT for use in the event of a Mass Transition.
AFTER:  ERCOT shall retain the Customer data from the most recent submission, to be used in lieu of data from the exiting CR, in instances where the exiting CR does not provide data. When a Mass Transition occurs, ERCOT shall provide the Gaining CRs with available Customer billing contact information for t…

### e10 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.2.6.3(1) · text copy line 618 · heading above: 16.2.6.3 Requirement to Obtain New Qualified Scheduling Entity or Qualified Scheduling Entity Qualification

BEFORE: …) An Emergency QSE or a Virtual QSE that is also a Resource Entity may only submit transactions that are directly attributable to and wholly provided by the Resource Entity's Resource(s). 16.2.6.3 Requirement to Obtain New Qualified Scheduling Entity or Qualified Scheduling Entity Qualification (1) 
QUOTE: Within seven Business Days after receiving designation as an Emergency QSE, an Emergency QSE must either: (a) Designate a QSE that will represent the LSE or Resource Entity to ERCOT; or (b) Fulfill all QSE registration and qualification requirements.
AFTER:  After completing the requirements in item (b), ERCOT may redesignate the Emergency QSE as a QSE. (2) If an Emergency QSE that is an LSE fails to meet at least one of the requirements listed above within the allotted time, then ERCOT shall, after notice as specified in Retail Market Guide Section 7.…

## Statements to check

- **Definition #1** (cites e1): A Mass Transition is the transition of ESI IDs from one Competitive Retailer to a Provider of Last Resort or designated CR, or from one TDSP to another, in a quantity or timeframe identified by Applicable Legal Authority. [e1]
- **How it works #1** (cites e2, e3, e4, e5): The Protocols provide it for circumstances where standard market transactions and processes do not fully support moving ESI IDs in that quantity or timeframe. [e2] ERCOT submits an 814_03 Enrollment Notification Request asking for a meter read two days after it initiates the transactions to the TDSP. [e3] ERCOT then sends an 814_11 Drop Response to the transitioning CR and an 814_14 Drop Enrollment Request to the POLR or designated CR. [e4] ERCOT monitors transitioned ESI IDs for 60 days, ending earlier on the first completed switch, move in or move out. [e5]
- **How it works #2** (cites e9): To prepare, every CR must give ERCOT current customer billing contact information for use in a mass transition. [e9]
- **ERCOT context #1** (cites e10, e6, e7, e8): ERCOT initiates a mass transition of an LSE's ESI IDs when an Emergency QSE that is an LSE fails, within the allotted time, to designate a QSE or fulfill QSE registration and qualification requirements [e10][e6], and also on revocation or termination of a defaulting Market Participant's rights or agreements, without a PUCT order. [e6][e7] ERCOT may also adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect the load they would take on. [e8]
- **Key facts #1** (cites e1): - Applies to moving ESI IDs between CRs (to a POLR or designated CR) or between TDSPs. [e1]
- **Key facts #2** (cites e3): - 814_03 meter read requested for two days after initiation. [e3]
- **Key facts #3** (cites e5): - ERCOT monitors transitioned ESI IDs for up to 60 days. [e5]
- **Key facts #4** (cites e7): - ERCOT can initiate one without a PUCT order on revocation or termination of a defaulting Market Participant. [e7]
- **Common confusion #1** (cites e2, e1): (Guidance) It is not an ordinary switch: it runs on a special process because standard market transactions do not completely support moving ESI IDs in that quantity or timeframe. [e2] It also is not limited to retailer failure: the definition includes TDSP-to-TDSP transitions. [e1]
- **Questions #2** (cites e10, e6, e7): An Emergency QSE that is an LSE failing within the allotted time to designate a QSE or fulfill QSE registration and qualification requirements, or revocation or termination of a defaulting Market Participant's rights or agreements. [e10][e6][e7]
- **Questions #4** (cites e1): A Provider of Last Resort or a designated CR. [e1]
- **Link to polr** (cites e1): related POLR (Provider of Last Resort): A mass transition can move ESI IDs from a Competitive Retailer to a Provider of Last Resort. [e1]
- **Link to rep** (cites e1): related REP (Retail Electric Provider): The exiting and gaining parties are competitive retailers. [e1]
- **Link to esi-id** (cites e1): composed-of ESI ID: A mass transition moves ESI IDs in a quantity or timeframe identified by Applicable Legal Authority. [e1]
- **Link to tx-set** (cites e3, e4): used-in TX SET (Texas Standard Electronic Transactions): The process runs on TX SET transactions such as the 814_03 and 814_14. [e3][e4]
- **Link to qse** (cites e6): related QSE (Qualified Scheduling Entity): ERCOT initiates a mass transition of an LSE's ESI IDs if its Emergency QSE fails to meet the requirements within the allotted time. [e6]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) A mass transition is how ERCOT moves a failed retailer's customers, in bulk, to a provider of last resort or designated retailer. It is built into the default and QSE-loss rules.

