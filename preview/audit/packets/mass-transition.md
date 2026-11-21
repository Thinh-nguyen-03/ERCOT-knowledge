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

### e11 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.6.1.6(3) · text copy line 2177 · heading above: 16.11.6.1.6 Revocation of a Market Participant’s Rights and Termination of Agreements

BEFORE: …icipant's agreements, then the provisions of Section 16.2.5, Suspended or Terminated Qualified Scheduling Entity - Notification to LSEs and Resource Entities Represented, and Section 16.2.6.1, Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity, apply. (3) 
QUOTE: If a breaching Market Participant is also an LSE
AFTER:  (whether or not the Default occurred pursuant to the Market Participant's activities as an LSE), then: (a) Within 24 hours of receiving notice of the Payment Breach, the Market Participant shall provide to ERCOT all the information regarding its ESI IDs set forth in the ERCOT Retail Market Guide; a…

### e12 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1(4)(b)-(c), Mass Transition timeline definitions · text copy line 1898 · heading above: 7.11 Transition Process

BEFORE: …ne, the following definitions shall apply: (a) Notification Date - Date on which ERCOT sends the initial Mass Transition Market Notice to affected parties informing them that a Mass Transition will occur as a result of a Market Participant default, also known as the pre-Launch stage in the process. 
QUOTE: (b) Calendar Day 0 - Date that ERCOT sends 814_03, Enrollment Notification Request. This can be on the Notification Date. (c) Mass Transition Date - Scheduled Meter Read Date (SMRD) will be equal to Calendar Day 0 plus two days and will be the date requested in the 814_03 transaction from ERCOT to the TDSP. POLRs will be responsible for ESI IDs no earlier than the Mass Transition Date.
AFTER:  (5) The processes described in this Section presume that a Mass Transition Decision to transfer the ESI IDs has already been made by ERCOT as a result of a Market Participant's default of the Standard Form Market Participant Agreement with ERCOT. (6) ERCOT may coordinate periodic testing with Marke…

### e13 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1(5) · text copy line 1902 · heading above: 7.11 Transition Process

BEFORE: …be on the Notification Date. (c) Mass Transition Date - Scheduled Meter Read Date (SMRD) will be equal to Calendar Day 0 plus two days and will be the date requested in the 814_03 transaction from ERCOT to the TDSP. POLRs will be responsible for ESI IDs no earlier than the Mass Transition Date. (5) 
QUOTE: The processes described in this Section presume that a Mass Transition Decision to transfer the ESI IDs has already been made by ERCOT as a result of a Market Participant's default of the Standard Form Market Participant Agreement with ERCOT.
AFTER:  (6) ERCOT may coordinate periodic testing with Market Participants of Mass Transition processes as defined in this Section and Section 11, Solution to Stacking. 7.11.1.1 Mass Transition Initiation 7.11.1.1.1 Mass Transition Initiation (1) If ERCOT has reason to expect that it may be necessary to in…

### e14 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (events requiring a mass transition) · text copy line 1039

BEFORE: … and service area in accordance with §25.478(e) of this title, at the time of the transition. §25.43--12 effective date 11/23/2022 (P 53820) CHAPTER 25. SUBSTANTIVE PROVIDERS. RULES APPLICABLE TO ELECTRIC SERVICE Subchapter B. CUSTOMER SERVICE AND PROTECTION. (10) (11) (12) (13) (14) (15) (16) (17) 
QUOTE: On the occurrence of one or more of the following events, ERCOT must initiate a mass transition to POLR providers, of all of the customers served by a REP: (A) Termination of the Load Serving Entity (LSE) or Qualified Scheduling Entity (QSE) Agreement for a REP with ERCOT; (B) Issuance of a commission order recognizing that a REP is in default under the TDU Tariff for Retail Delivery Service;
AFTER:  (C) Issuance of a commission order de-certifying a REP; (D) Issuance of a commission order requiring a mass transition to POLR providers; (E) Issuance of a judicial order requiring a mass transition to POLR providers; and (F) At the request of a REP, for the mass transition of all of that REP's cus…

### e15 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.1.1(4), Mass Transition Initiation · text copy line 1926 · heading above: 7.11.1.1.1 Mass Transition Initiation

BEFORE: … for the initial Mass Transition project coordination call, which will be scheduled for the same or the next Business Day. If the Mass Transition is initiated on a Business Day prior to a weekend or ERCOT holiday the initial project coordination call must be scheduled for the same Business Day. (4) 
QUOTE: The same day as and following the initial Mass Transition Market Notice to affected parties, ERCOT will provide a Mass Transition Market Notice to Transition/Acquisition contacts for Load Serving Entities (LSEs) and TDSPs, and the Retail Market Subcommittee (RMS) e-mail ListServ.
AFTER:  This Market Notice shall include: (a) Confirmation of a Mass Transition event; (b) The name and DUNS # of the Losing CR; (c) The total number of ESI IDs of the Losing CR; (d) The estimated Load of the Losing CR; and (e) The Mass Transition Date. (5) Should issues arise that are not addressed in thi…

### e16 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.1.1(3), Mass Transition Initiation · text copy line 1914 · heading above: 7.11.1.1.1 Mass Transition Initiation

BEFORE: …o Mass Transition is necessary, and preliminary notice has been provided to potentially affected parties in accordance with paragraph (1) above, ERCOT shall then notify PUCT and OPUC Staff and the potentially affected TDSPs and POLRs that the Mass Transition will not occur on that Business Day. (3) 
QUOTE: Upon confirmation that a Mass Transition will occur, ERCOT shall provide an initial Mass Transition Market Notice to affected TDSPs, POLRs, the Losing CR, and appropriate PUCT and OPUC Staff.
AFTER:  If a Mass Transition is initiated on a Business Day prior to a weekend or ERCOT holiday, the initial Mass Transition project coordination call will be scheduled for that Business Day. See Section 9, Appendices, Appendix F2, Timeline for Initiation of a Mass Transition. The initial Mass Transition M…

### e17 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.2(2)(a)(i), pending transactions that would give the Losing CR responsibility for an ESI ID · text copy line 1956 · heading above: 7.11.1.2 Handling Pending Texas Standard Electronic Transactions During a Mass Transition

BEFORE: …n Response, or 814_28 transaction, Completed Unexecutable; and (e) Cancel Pending - A status as ERCOT indicating ERCOT has sent a response driven cancel to the TDSP and has not received a response. (2) For Pending Transactions that will result in the Losing CR having responsibilities for an ESI ID: 
QUOTE: (a) Pending Transaction has a scheduled date that is prior to or equal to Calendar Day 0: (i) Switch: Allowed to complete and ERCOT sends the 814_03, Enrollment Notification Request, with the Mass Transition, indicator;
AFTER:  (ii) Move in: Allowed to complete and ERCOT sends the 814_03 transaction; (iii) Move out to Continuous Service Agreement (CSA): Allowed to complete and ERCOT sends the 814_03 transaction; or (iv) Acquisition Order: Allowed to complete and ERCOT sends the 814_03 transaction with the Mass Transition …

### e18 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.2(2)(b)(i), pending transactions that would give the Losing CR responsibility for an ESI ID · text copy line 1966 · heading above: 7.11.1.2 Handling Pending Texas Standard Electronic Transactions During a Mass Transition

BEFORE: …in: Allowed to complete and ERCOT sends the 814_03 transaction; (iii) Move out to Continuous Service Agreement (CSA): Allowed to complete and ERCOT sends the 814_03 transaction; or (iv) Acquisition Order: Allowed to complete and ERCOT sends the 814_03 transaction with the Mass Transition indicator. 
QUOTE: (b) Pending Transaction has a scheduled date that is greater than Calendar Day 0 or is not yet scheduled (In Review or Permit Pending): (i) Switch: Cancelled and ERCOT will not send an 814_03 transaction;
AFTER:  (ii) Move in: Cancelled by ERCOT and POLR and/or designated CR is responsible for submitting a move in for the Mass Transition Date or any future date that is the same Requested Date as the initial Move-In Request. The POLR or designated CR is not required to use a Requested Date that is prior to t…

### e19 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.4.1.2(6), ERCOT Pre-Launch Responsibilities in a Mass Transition · text copy line 2034 · heading above: 7.11.1.4.1.2 ERCOT Pre-Launch Responsibilities in a Mass Transition

BEFORE: …ffected parties in the Mass Transition project; or (b) If all ESI IDs associated with the Mass Transition will be allocated among Large Service Providers (LSPs) and VREPs, then ERCOT will include affected parties in the Mass Transition project. (5) Determine the Mass Transition Launch timeline; (6) 
QUOTE: Determine the Mass Transition completion date to be no more than five days after ERCOT generates and the TDSP receives the 814_03, Enrollment Notification Request, with the Mass Transition indicator, for all affected ESI IDs;
AFTER:  (7) Designate the ERCOT Mass Transition project lead; (8) Schedule and conduct Mass Transition project coordination calls with affected parties; (9) Complete and disseminate required Mass Transition Market Notices; (10) Delete or disable CSAs to prevent the Losing CR from becoming the Retail Electr…

### e20 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (switch requests) · text copy line 1059

BEFORE: … process in this section as a means to cease providing service to some customers, while retaining other customers. A REP's improper use of the mass transition process may lead to de-certification of the REP. ERCOT may provide procedures for the mass transition process, consistent with this section. 
QUOTE: A mass transition under this section must not override or supersede a switch request made by a customer to switch an ESI ID to a new REP of choice, if the request was made before a mass transition is initiated. If a switch request has been made but is scheduled for any date after the next available switch date, the switch must be made on the next available switch date.
AFTER:  ERCOT must identify customers who are mass transitioned for a period of 60 calendar days. The identification must terminate at the first completed switch or at the end of the 60-day period, whichever is first. If necessary, ERCOT system changes or new transactions must be implemented no later than …

### e21 · `ercot-griddy-notice` · tier 2 · ERCOT Market Notice M-G022621-01: Mass Transition of Griddy Energy LLC (2021-02-26)
locator: Market Notice M-G022621-01, Long Description · text copy line 9

BEFORE: …--------------------------------------- NOTICE DATE: February 26, 2021 NOTICE TYPE: M-G022621-01 Informational: Mass Transition Event SHORT DESCRIPTION: Market Participant Mass Transition Event INTENDED AUDIENCE: RMS and Affected Market Participants DAY AFFECTED: February 26, 2021 LONG DESCRIPTION: 
QUOTE: On Friday, February 26, 2021, ERCOT revoked all rights of GRIDDY ENERGY LLC to conduct activity under the ERCOT Protocols due to a Payment Breach.
AFTER:  ERCOT Protocol Section 16.11.6.1.6(3)(b) provides that "On revocation of some or all of the Market Participant's rights...ERCOT shall initiate a Mass Transition of the Market Participant's ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process." Pursuant to Protocol Section 15.1.3.1, Mass Tr…

### e22 · `ercot-griddy-notice` · tier 2 · ERCOT Market Notice M-G022621-01: Mass Transition of Griddy Energy LLC (2021-02-26)
locator: Market Notice M-G022621-01, Long Description · text copy line 9

BEFORE: … Retail Market Guide (RMG) Section 7.11, Mass Customer Transition Process, ERCOT began the Mass Transition of GRIDDY ENERGY LLC (LSE) customers on Friday, February 26, 2021. All of GRIDDY ENERGY LLC (LSE) ESI IDs will be gained by one or more POLRs, as allocated by the PUCT Mass Transition process. 
QUOTE: The size of the associated combined 30 day Average Daily Load is approximately 1,065 MWHs and the number of ESI IDs involved is approximately 10,127.
AFTER:  ERCOT has been working closely with PUCT staff and Affected Market Participants to ensure an efficient and effective transfer of Customers to designated POLRs. CONTACT: If you have any questions, please contact your ERCOT Account Manager. You may also call the general ERCOT Client Services phone nu…

### e23 · `puct-51859-griddy-order` · tier 1 · PUCT Docket 51859, Order revoking Griddy Energy's REP certificate (2022)
locator: Order, Finding of Fact 34 (Mass Transition to Providers of Last Resort) · text copy line 304

BEFORE: …for the Southern District of Texas.5 33. On August 26, 2021, ERCOT filed an amended proof of claim in the bankruptcy court alleging that the balance owed by Griddy to ERCOT pursuant to its obligations under the ERCOT Nodal Protocols is $29,913,799.84. Mass Transition to Providers of Last Resort 34. 
QUOTE: Between February 26, 2021 and March 2,2021, following ERGOI's revocation of Griddy's market participant rights, ERCOT executed a mass transition of Griddy's customers to providers of last resort. In total, ERCOT transitioned 9,926 Griddy customers to providers of last resort.
AFTER:  Financial Obliwations to Customers 35. On January 10,2017 in Docket No. 46342, when approving Griddy's application for a REP certificate, the Commission authorized Griddy to collect customer deposits and advance payments after providing the Commission with an irrevocable stand-by letter of credit w…

### e24 · `puct-51859-griddy-order` · tier 1 · PUCT Docket 51859, Order revoking Griddy Energy's REP certificate (2022)
locator: Order, Conclusion of Law on 16 TAC 25.107(f)(4)(F)(i) · text copy line 597

BEFORE: …red to provide and maintain an irrevocable stand-by letter of credit payable to the Commission in an amount sufficient to cover 100% of the REP's outstanding customer deposits and residential advance payments held at the close of each month for the purpose of maintaining certification as a REP. 23. 
QUOTE: Under 16 TAC § 25.107(f)(4)(F)(i), the Commission's executive director or the executive director's designee may draw on a REP's irrevocable stand-by letter of credit if ERCOT performs a mass transition of the REP's customers.
AFTER:  24. Under 16 TAC § 25.107(f)(6)(A), the proceeds from Griddy's irrevocable stand-by letter of credit may be used to satisfy certain obligations, in the order of priority established in the rule. 25. All funds from Griddy's irrevocable stand-by letter of credit provided under 16 TAC § 25.107(f)(1)(B…

### e25 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.6.8, Move Out Date After Mass Transition Drop Date · text copy line 615 · heading above: 15.1.6.8 Move Out Date After Mass Transition Drop Date

BEFORE: …on the scheduled meter read date of the move out, ERCOT cancels the move out. 15.1.6.8 Move Out Date After Mass Transition Drop Date (1) ERCOT performs evaluations two Retail Business Days prior to all move out scheduled meter read dates or upon the receipt of the TDSP response, whichever is later. 
QUOTE: If the move out scheduled meter read date is after a Mass Transition drop scheduled meter read date, both processes will run concurrently and both processes will be allowed to complete. If the submitting CR is not scheduled to be the CR of Record on the scheduled meter read date of the move out, ERCOT cancels the move out.
AFTER:  15.1.6.9 Multiple Switches (1) ERCOT performs evaluations two Retail Business Days prior to all switch scheduled meter read dates or upon the receipt of the TDSP response, whichever is later. If there is another switch with a scheduled meter read date after or prior to the switch scheduled meter re…

### e26 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.6.5, Move In Date After Mass Transition Drop Date · text copy line 603 · heading above: 15.1.6.5 Move In Date After Mass Transition Drop Date

BEFORE: …processes will run concurrently and both processes will be allowed to complete. 15.1.6.5 Move In Date After Mass Transition Drop Date (1) ERCOT performs evaluations two Retail Business Days prior to all move in scheduled meter read dates or upon the receipt of the TDSP response, whichever is later. 
QUOTE: If the move in scheduled meter read date is after a Mass Transition drop scheduled meter read date, both processes will run concurrently and both processes will be allowed to complete.
AFTER:  15.1.6.6 Move Out Date Prior to or Equal to Switch Date (1) ERCOT performs evaluations two Retail Business Days prior to all move out scheduled meter read dates or upon the receipt of the TDSP response, whichever is later. If there is a switch with a scheduled meter read date after or equal to the …

### e27 · `np-15` · tier 1 · ERCOT Nodal Protocols, Section 15: Customer Registration (effective 2026-08-01)
locator: Section 15.1.3.3(1), Customer Billing Contact Information · text copy line 327 · heading above: 15.1.3.3 Customer Billing Contact Information

BEFORE: … Guide Section 7, Market Processes. 15.1.3.3 Customer Billing Contact Information (1) All CRs participating in the Texas retail electric market shall provide, in accordance with the Retail Market Guide, current Customer billing contact information to ERCOT for use in the event of a Mass Transition. 
QUOTE: ERCOT shall retain the Customer data from the most recent submission, to be used in lieu of data from the exiting CR, in instances where the exiting CR does not provide data.
AFTER:  When a Mass Transition occurs, ERCOT shall provide the Gaining CRs with available Customer billing contact information for the ESI IDs the Gaining CRs will be obtaining through the Mass Transition event. During a Mass Transition event, ERCOT shall also provide the TDSPs with available Customer cont…

### e28 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (deposits) · text copy line 901

BEFORE: …rvice and the transfer to the POLR provider is complete. (4) The POLR provider is financially responsible for all costs of providing electricity to customers from the time the transfer or initiation of service is complete until such time as the customer ceases taking service under this section. (5) 
QUOTE: A defaulting REP whose customers are subject to a mass transition event must return the customers' deposits within seven calendar days of the initiation of the transition.
AFTER:  (6) ERCOT must create a single standard file format and a standard set of customer billing contact data elements that, in the event of a mass transition, must be used by the exiting REP and the POLRs to send and receive customer billing contact information. The process, as developed by ERCOT must b…

### e29 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (financial responsibility) · text copy line 892

BEFORE: …permitted under this title. (2) The POLR provider is responsible for obtaining resources and services needed to serve a customer once it has been notified that it is serving that customer. The customer is responsible for charges for service under this section at the rate in effect at that time. (3) 
QUOTE: If a REP terminates service to a customer, or transitions a customer to a POLR provider, the REP is financially responsible for the resources and services used to serve the customer until it notifies the independent organization of the termination or transition of the service and the transfer to the POLR provider is complete.
AFTER:  (4) The POLR provider is financially responsible for all costs of providing electricity to customers from the time the transfer or initiation of service is complete until such time as the customer ceases taking service under this section. (5) A defaulting REP whose customers are subject to a mass t…

### e30 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(l), Mass transition of customers to POLR providers · text copy line 620

BEFORE: … to reassume provisioning of POLR service from the LSP affiliate by filing a reversion notice with the commission and notifying ERCOT at least 30 days in advance. Mass transition of customers to POLR providers. The transfer of customers to POLR providers must be consistent with this subsection. (1) 
QUOTE: ERCOT must first transfer customers to VREPs, up to the number of ESI IDs that each VREP has offered to serve for each customer class in the POLR area.
AFTER:  ERCOT must use the VREP list to assign ESI IDs to the VREPs in a non-discriminatory manner, before assigning customers to the LSPs. A VREP must not be assigned more ESI IDs than it has indicated it is willing to serve pursuant to subsection (i) of this section. To ensure non-discriminatory assignme…

### e31 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (improper use) · text copy line 1055

BEFORE: …uance of a commission order de-certifying a REP; (D) Issuance of a commission order requiring a mass transition to POLR providers; (E) Issuance of a judicial order requiring a mass transition to POLR providers; and (F) At the request of a REP, for the mass transition of all of that REP's customers. 
QUOTE: A REP must not use the mass transition process in this section as a means to cease providing service to some customers, while retaining other customers. A REP's improper use of the mass transition process may lead to de-certification of the REP.
AFTER:  ERCOT may provide procedures for the mass transition process, consistent with this section. A mass transition under this section must not override or supersede a switch request made by a customer to switch an ESI ID to a new REP of choice, if the request was made before a mass transition is initiat…

### e32 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1(1), Transition Process · text copy line 1888 · heading above: 7.11 Transition Process

BEFORE: …r administering and managing transition events. 7.11.1 Transition Process of Competitive Retailer's Electric Service Identifiers to Provider of Last Resort or Designated Competitive Retailer Pursuant to P.U.C. SUBST. R. 25.43, Provider of Last Resort (POLR), or CR Voluntarily Leaving the Market (1) 
QUOTE: Each opt-in Municipally Owned Utility (MOU) or opt-in Electric Cooperative (EC) without an affiliated POLR that has not delegated authority to designate POLRs to the Public Utility Commission of Texas (PUCT), as applicable to opt-in ECs, must provide its initial POLR allocation methodology to ERCOT no later than 30 days prior to the Customer Choice opt-in date using Section 9, Appendices, Appendix J7, Mass Transition Allocation Methodology.
AFTER:  Should the opt-in MOU or opt-in EC determine the allocation methodology must be changed at any time, such updates must be provided to ERCOT no later than 30 days prior to its Mass Transition Effective Date or at a time prior to the initiation of a Mass Transition as defined in Section 7.11.1.1, Mas…

### e33 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1(3), Transition Process · text copy line 1892 · heading above: 7.11 Transition Process

BEFORE: …ered year using Section 9, Appendix J8, Attestation to Confirm Mass Transition Allocation Methodology. (2) Market Participants that wish to transfer Customers for reasons other than P.U.C. SUBST. R. 25.43, Provider of Last Resort (POLR), should contact ERCOT Client Relations and the PUCT Staff. (3) 
QUOTE: Per Protocol Section 16.1.1, Re-Registration as a Market Participant, any Market Participant that has had its Customers dropped via the Mass Transition process must provide to ERCOT a new Data Universal Numbering System (DUNS) Number (DUNS #) to re-register as a Market Participant with ERCOT.
AFTER:  (4) For the purpose of a Mass Transition and the associated timeline, the following definitions shall apply: (a) Notification Date - Date on which ERCOT sends the initial Mass Transition Market Notice to affected parties informing them that a Mass Transition will occur as a result of a Market Parti…

### e34 · `puct-25-43` · tier 1 · PUCT Substantive Rule 16 TAC §25.43, Provider of Last Resort (POLR)
locator: 16 TAC 25.43(p), REP obligations in a transition of customers to POLR service (out-of-cycle meter read) · text copy line 1072

BEFORE: …f-cycle meter read pursuant to paragraph (16) of this subsection. In the event of a transition to a POLR provider or away from a POLR provider to a REP of choice, the switch notification notice detailed in §25.474(l) of this title (relating to Selection of Retail Electric Provider) is not required. 
QUOTE: In a mass transition event, the ERCOT initiated transactions must request an out-of-cycle meter read for the associated ESI IDs for a date two calendar days after the calendar date ERCOT initiates such transactions to the TDU. If an ESI ID does not have the capability to be read in a fashion other than a physical meter read, the out-of-cycle meter read may be estimated.
AFTER:  An estimated meter read for the purpose of a mass transition to a POLR provider must not be considered a break in a series of consecutive months of estimates, but must not be considered a month in a series of consecutive estimates performed by the TDU. A TDU must create a regulatory asset for the T…

### e35 · `rmg-09f2` · tier 1 · ERCOT Retail Market Guide, Appendix F2: Timeline for Initiation of a Mass Transition (current 2026)
locator: Appendix F2, Timeline for Initiation of a Mass Transition (dated May 1, 2019) · text copy line 23

BEFORE: … of a Mass Transition May 1, 2019 Appendix F2 Timeline for Initiation of a Mass Transition Reference: Section 7.11.1.1.1, Mass Transition Initiation CR = Competitive Retailer TDSP = Transmission and/or Distribution Service Provider POLR = Provider of Last Resort ESI ID = Electric Service Identifier 
QUOTE: When feasible, ERCOT shall adhere to the timelines outlined below. However, ERCOT reserves the right to initiate the Mass Transition process as directed by Applicable Legal Authority (ALA) or ERCOT Legal.
AFTER:  All efforts shall be made by ERCOT to provide the greatest possible lead time for the notification, ESI ID lists, initial project coordination call and transaction processing. Refer to Protocol Section 19, Texas Standard Electronic Transaction, for complete transaction names. Refer to Section 11, S…

### e36 · `rmg-07` · tier 1 · ERCOT Retail Market Guide, Section 7: Market Processes (current 2026)
locator: Section 7.11.1.1.1(3), Mass Transition Initiation · text copy line 1914 · heading above: 7.11.1.1.1 Mass Transition Initiation

BEFORE: … the potentially affected TDSPs and POLRs that the Mass Transition will not occur on that Business Day. (3) Upon confirmation that a Mass Transition will occur, ERCOT shall provide an initial Mass Transition Market Notice to affected TDSPs, POLRs, the Losing CR, and appropriate PUCT and OPUC Staff. 
QUOTE: If a Mass Transition is initiated on a Business Day prior to a weekend or ERCOT holiday, the initial Mass Transition project coordination call will be scheduled for that Business Day.
AFTER:  See Section 9, Appendices, Appendix F2, Timeline for Initiation of a Mass Transition. The initial Mass Transition Market Notice shall include: (a) Confirmation of a Mass Transition event; (b) The total number of ESI IDs of the Losing CR; (c) The estimated Load of the Losing CR; (d) The Mass Transit…

## Statements to check (new or changed since the last audit)

- **How it works #1** (cites e2, e13): The Protocols provide it for circumstances where standard market transactions and processes do not fully support moving ESI IDs in that quantity or timeframe. [e2] The Retail Market Guide process presumes that ERCOT has already made the decision to transfer the ESI IDs because of a Market Participant's default of the Standard Form Market Participant Agreement. [e13]
- **How it works #2** (cites e16, e15, e12, e19): Notice and timeline. When ERCOT confirms that a Mass Transition will occur, it gives an initial Mass Transition Market Notice to the affected TDSPs, POLRs, the Losing CR and PUCT and OPUC Staff. [e16] The same day, ERCOT sends a Market Notice to LSE and TDSP Transition/Acquisition contacts and the Retail Market Subcommittee (RMS) e-mail ListServ. [e15] The Retail Market Guide calls the day ERCOT sends the 814_03 "Calendar Day 0"; the Mass Transition Date is the scheduled meter read date, Calendar Day 0 plus two days, and POLRs are responsible for ESI IDs no earlier than the Mass Transition Date. [e12] ERCOT determines a completion date no more than five days after it generates, and the TDSP receives, the 814_03 for all affected ESI IDs. [e19]
- **How it works #3** (cites e3, e34, e4, e5): Transactions. ERCOT submits an 814_03 Enrollment Notification Request asking for a meter read two days after it initiates the transactions to the TDSP. [e3] The PUCT rule says the same, as a meter read two calendar days after the date ERCOT initiates the transactions; where an ESI ID cannot be read other than by a physical meter read, the read may be estimated. [e34] ERCOT then sends an 814_11 Drop Response to the transitioning CR and an 814_14 Drop Enrollment Request to the POLR or designated CR. [e4] ERCOT monitors transitioned ESI IDs for 60 days from the Mass Transition Date, ending earlier on the first completed switch, move in or move out. [e5]
- **How it works #4** (cites e17, e18, e20, e26, e25): Transactions already in flight. Under the Retail Market Guide, for pending transactions that would leave the Losing CR responsible for an ESI ID, a switch scheduled on or before Calendar Day 0 is allowed to complete and ERCOT sends the 814_03 with the Mass Transition indicator. [e17] A switch scheduled after Calendar Day 0, or not yet scheduled, is cancelled and ERCOT does not send an 814_03. [e18] The PUCT rule separately says a mass transition must not override a switch request a customer made before the transition was initiated; if that switch was scheduled after the next available switch date, it is made on the next available switch date. [e20] Move-in and move-out dates that fall after the Mass Transition drop date: the move-in and the mass transition run concurrently and both complete [e26]; for a move-out both also complete, but if the submitting CR is not scheduled to be CR of Record on the move-out's scheduled meter read date, ERCOT cancels the move-out. [e25]
- **How it works #5** (cites e9, e27): Customer data. Every CR must give ERCOT current customer billing contact information for use in a mass transition. [e9] ERCOT keeps the most recent submission and uses it in place of data from the exiting CR where that CR does not provide data. [e27]
- **ERCOT context #1** (cites e10, e6, e11, e7, e14, e8): Triggers. ERCOT initiates a mass transition of an LSE's ESI IDs when an Emergency QSE that is an LSE fails, within the allotted time, to designate a QSE or fulfill QSE registration and qualification requirements [e10][e6], and also, where a breaching Market Participant is also an LSE, on revocation of some or all of its rights or termination of its agreements, on notice to the Market Participant and the PUCT and without the need for a PUCT order. [e11][e7] The PUCT's POLR rule separately lists events requiring ERCOT to initiate a mass transition of all of a REP's customers, among them termination of the REP's LSE or QSE Agreement with ERCOT and a commission order recognizing the REP is in default under the TDU Tariff for Retail Delivery Service. [e14] ERCOT may also adjust the credit exposure of Counter-Parties for QSEs that are POLRs to reflect the load they would take on. [e8]
- **ERCOT context #2** (cites e30, e32): Who receives the ESI IDs. The PUCT rule has ERCOT transfer customers first to VREPs, up to the number of ESI IDs each VREP has offered to serve for each class in the POLR area. [e30] The polr topic covers how remaining ESI IDs go to LSPs. For opt-in MOUs and ECs without an affiliated POLR that have not delegated POLR designation to the PUCT, the Retail Market Guide requires the MOU or EC to give ERCOT its own POLR allocation methodology no later than 30 days before its Customer Choice opt-in date. [e32]
- **ERCOT context #3** (cites e28, e29, e33, e31): Consequences for the exiting retailer. The defaulting REP must return customer deposits within seven calendar days of the initiation of the transition. [e28] The REP stays financially responsible for resources and services used to serve the customer until it notifies the independent organization and the transfer to the POLR provider is complete. [e29] A Market Participant whose Customers were dropped through the Mass Transition process must give ERCOT a new DUNS number to re-register. [e33] A REP must not use the mass transition process to drop some customers while keeping others, and improper use may lead to de-certification. [e31]
- **ERCOT context #4** (cites e21, e7, e22, e23, e24): Real case: Griddy. ERCOT's market notice says it revoked all rights of Griddy Energy LLC on February 26, 2021 because of a Payment Breach and began the mass transition that day; the Protocol provision it relies on is the revocation trigger above. [e21][e7] The notice put the size at approximately 10,127 ESI IDs and a combined 30-day Average Daily Load of approximately 1,065 MWh. [e22] In its later order, the PUCT found ERCOT transitioned 9,926 Griddy customers to POLRs between February 26 and March 2, 2021. [e23] The two figures differ in what they count (ESI IDs in the notice, customers in the order) and in date, so do not treat them as one number. The PUCT order also notes the executive director may draw on a REP's letter of credit if ERCOT performs a mass transition of the REP's customers. [e24]
- **Timeline #1** (cites e35) FLAG number-not-in-quote: 2019: - 2019-05-01: the date shown on Retail Market Guide Appendix F2, "Timeline for Initiation of a Mass Transition", which says ERCOT will adhere to its timelines when feasible but reserves the right to initiate as directed by Applicable Legal Authority or ERCOT Legal; the appendix text in the saved copy does not include the timeline table itself. [e35]
- **Timeline #2** (cites e21): - 2021-02-26: ERCOT revokes Griddy's rights and starts a mass transition. [e21]
- **Timeline #3** (cites e23): - 2021-02-26 to 2021-03-02: ERCOT transitions Griddy's customers to POLRs (PUCT finding). [e23]
- **Key facts #2** (cites e12): - Calendar Day 0 is the day ERCOT sends the 814_03; the Mass Transition Date is Day 0 plus two days. [e12]
- **Key facts #3** (cites e5): - ERCOT monitors transitioned ESI IDs for up to 60 days from the Mass Transition Date. [e5]
- **Key facts #5** (cites e30): - Customers go first to VREPs, then to LSPs. [e30]
- **Key facts #6** (cites e22, e23): - Griddy 2021: about 10,127 ESI IDs in the ERCOT notice, 9,926 customers in the PUCT order. [e22][e23]
- **Say it like this #1** (cites e1, e6, e7, e12): (Guidance) A mass transition is the Protocol process for moving ESI IDs in bulk from one CR to a provider of last resort or designated CR. [e1] ERCOT starts it when a retailer's market participation is terminated or its QSE arrangement fails, and the customers land on a POLR on a fixed two-day meter read schedule. [e6][e7][e12]
- **Common confusion #1** (cites e2, e1, e20): (Guidance) It is not an ordinary switch: it runs on a special process because standard market transactions do not completely support moving ESI IDs in that quantity or timeframe. [e2] It also is not limited to retailer failure: the definition includes TDSP-to-TDSP transitions. [e1] A customer's pre-existing switch request is not simply wiped out; the PUCT rule says a mass transition must not override a switch made before it was initiated. [e20]
- **Questions #2** (cites e10, e6, e11, e7, e14): An Emergency QSE that is an LSE failing within the allotted time to designate a QSE or fulfill QSE registration and qualification requirements, or revocation of rights or termination of agreements of a breaching Market Participant that is also an LSE. [e10][e6][e11][e7] The PUCT rule adds, among others, termination of the REP's LSE or QSE Agreement with ERCOT and a commission order recognizing a TDU Tariff default. [e14]
- **Questions #4** (cites e1, e30): A Provider of Last Resort or a designated CR. [e1] Under the PUCT rule, VREPs are used first, up to what each offered to serve. [e30]
- **Questions #6** (cites e3, e12, e34): The Protocols fix it: the 814_03 requests a meter read two days after initiation, and that date becomes the transition date at which responsibility passes. [e3][e12] The TDSP may estimate the read if an actual read cannot be obtained by that date. [e34]
- **Questions #8** (cites e20, e17, e18): The PUCT rule says the mass transition must not override that switch; if it was scheduled after the next available switch date, it is made on the next available switch date. [e20] In the Retail Market Guide, a pending switch scheduled on or before Calendar Day 0 is allowed to complete, while one scheduled later or not yet scheduled is cancelled. [e17][e18] These two statements are written differently; read them together with the current Retail Market Guide and PUCT rule.
- **Questions #10** (cites e25): Both processes run concurrently and complete, but ERCOT cancels the move-out if the submitting CR will not be CR of Record on its scheduled meter read date. [e25]
- **Questions #12** (cites e21, e23): ERCOT revoked Griddy's rights on February 26, 2021 and started a mass transition that day; the PUCT later found 9,926 customers were transitioned to POLRs by March 2, 2021. [e21][e23]
- **Scenarios #2** (cites e11, e7, e14): - It treats the termination as a trigger for a mass transition. [e11][e7][e14]
- **Scenarios #3** (cites e16, e36): - It sends the initial Market Notice to TDSPs, POLRs, the Losing CR and PUCT and OPUC Staff, and, if the transition is initiated on a Business Day before a weekend or ERCOT holiday, the initial project coordination call is scheduled for that Business Day. [e16][e36]
- **Scenarios #4** (cites e3, e12): - It sends the 814_03 on Calendar Day 0 asking for a meter read on Day 0 plus two days. [e3][e12]
- **Scenarios #5** (cites e5): - ERCOT keeps identifying the transitioned ESI IDs for up to 60 days. [e5]
- **Link to polr** (cites e1): related POLR (Provider of Last Resort): A mass transition can move ESI IDs from a Competitive Retailer to a Provider of Last Resort. [e1]
- **Link to rep** (cites e1): related REP (Retail Electric Provider): The exiting and gaining parties are competitive retailers. [e1]
- **Link to esi-id** (cites e1): composed-of ESI ID: A mass transition moves ESI IDs in a quantity or timeframe identified by Applicable Legal Authority. [e1]
- **Link to tx-set** (cites e3, e4): used-in TX SET (Texas Standard Electronic Transactions): The process runs on TX SET transactions such as the 814_03 and 814_14. [e3][e4]
- **Link to qse** (cites e6): related QSE (Qualified Scheduling Entity): ERCOT initiates a mass transition of an LSE's ESI IDs if its Emergency QSE fails to meet the requirements within the allotted time. [e6]
- **Link to retailer-defaults-2021** (cites e21): related Griddy & Brazos: 2021 Defaults: See the retailer-defaults-2021 topic for the 2021 retailer failures; Griddy's mass transition began on February 26, 2021. [e21]
- **Link to stakeholder-process** (cites e15): related Stakeholder Process (TAC, PRS, WMS, ROS, Board): The Retail Market Subcommittee (RMS) e-mail ListServ receives the second Mass Transition Market Notice. [e15]

