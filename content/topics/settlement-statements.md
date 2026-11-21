---
id: settlement-statements
name: Settlement Statements & Timeline
aliases: [Settlement Statement, DAM Statement, RTM Initial Statement, RTM Final Statement, True-Up Statement, resettlement]
kind: concept
domain: congestion
level: 2
lenses: [analyst, retail, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: dam
    type: settles
    note: The DAM has its own Statement, produced on the second Business Day after the Operating Day. [e3]
  - to: rtm
    type: settles
    note: The RTM has Initial, Final, Resettlement and True-Up Statements. [e4][e5][e8][e6]
  - to: crr
    type: related
    note: CRR invoices and statements are not described in this topic.
  - to: uplift
    type: related
    note: A Settlement Statement breaks down administrative, miscellaneous and market charges. [e1]
  - to: credit-tpe
    type: related
    note: Invoice payment is due at 1700 on the second Bank Business Day after the invoice date; credit enforcement is not described here. [e11]
  - to: settlement-point
    type: related
    note: Statements are issued per Operating Day; how Settlement Point Prices feed the amounts is not described here. [e4]
  - to: qse
    type: related
    note: DAM and RTM Statements are posted to the MIS Certified Area. [e10]
  - to: ruc-make-whole
    type: related
    note: See the RUC make-whole topic for the RUC-specific settlement and dispute routes.
  - to: securitization
    type: related
    note: See the securitization topic for the separate Default Charge and Uplift Charge invoices.
  - to: crr-auction
    type: related
    note: CRR Auction, CARD and CRRBA invoices are disputable items alongside statements and the Default Uplift Invoice. [e52]
  - to: load-profiling
    type: related
    note: The True-Up Statement timing depends on usage data from ESI IDs with a BUSIDRRQ Load Profile Type code reaching the IDR Meter Data Threshold. [e6]
  - to: esi-id
    type: related
    note: The IDR Meter Data Threshold counts ESI IDs with a BUSIDRRQ Load Profile Type code. [e6]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Settlement Statement"
    quote: "A statement issued by ERCOT reflecting a breakdown of administrative, miscellaneous, and market charges for the applicable market services, as further described in Section 9.2, Settlement Statements for the Day-Ahead Market, and Section 9.5, Settlement Statements for Real-Time Market."
  - id: e2
    source: np-09
    locator: "Section 9.1.1, Settlement and Billing Process Overview, paragraph (1)"
    quote: "Settlement is the process used to resolve financial obligations between a Market Participant and ERCOT, including administrative and miscellaneous charges. Settlement also provides Transmission Billing Determinants to Transmission Service Providers (TSPs) and Distribution Service Providers (DSPs). The Settlement and billing timeline and process for the Day-Ahead Market (DAM) is separate from the Settlement and billing timeline and process for the Day-Ahead Reliability Unit Commitment (DRUC) process, the Adjustment Period, and Real-Time operations (after this referred to together in this Section as the Real-Time Market (RTM))."
  - id: e3
    source: np-09
    locator: "Section 9.2.4, DAM Statement"
    quote: "ERCOT shall produce a DAM Statement for each Statement Recipient for the given DAM on the second Business Day after the Operating Day."
  - id: e4
    source: np-09
    locator: "Section 9.5.4, RTM Initial Statement"
    quote: "ERCOT shall issue an RTM Initial Statement for each Statement Recipient for a given Operating Day on the fifth day after the Operating Day, unless that fifth day is not a Business Day. If the fifth day is not a Business Day, then ERCOT shall issue the RTM Initial Statement on the next Business Day after the fifth day. Notwithstanding the above, if the fifth day after the Operating Day is on or prior to the Business Day on which Real-Time prices are final pursuant to paragraph (7) of Section 6.3, Adjustment Period and Real-Time Operations Timeline, then ERCOT shall issue the RTM Initial Statement on the first Business Day after the Real-Time prices are final."
  - id: e5
    source: np-09
    locator: "Section 9.5.5, RTM Final Statement"
    quote: "ERCOT shall issue an RTM Final Statement for each Statement Recipient for a given Operating Day on the 55th day after the Operating Day, unless that 55th day is not a Business Day. If the 55th day is not a Business Day, then ERCOT shall issue the RTM Final Statement on the first Business Day after the 55th day."
  - id: e6
    source: np-09
    locator: "Section 9.5.8, RTM True-Up Statement, paragraph (2)"
    quote: "ERCOT shall issue RTM True-Up Statements 180 days following the Operating Day, if ERCOT has received and validated usage data from at least 99% of the total number of Electric Service Identifiers (ESI IDs) with a BUSIDRRQ Load Profile Type code and if ERCOT has received and validated usage data from at least 90% of the total number of ESI IDs with a BUSIDRRQ Load Profile Type code from each Meter Reading Entity (MRE) representing at least 20 Interval Data Recorder (IDR) ESI IDs (IDR Meter Data Threshold)."
  - id: e7
    source: np-09
    locator: "Section 9.5.8, RTM True-Up Statement, paragraph (2)"
    quote: "If the above conditions have not been met, then ERCOT shall issue RTM True-Up Statements as soon as the IDR Meter data becomes available for that Operating Day. If no RTM True-Up Statement has been issued 365 days after the Operating Day, then ERCOT shall issue a RTM True-Up Statement for that Operating Day."
  - id: e8
    source: np-09
    locator: "Section 9.5.6, RTM Resettlement Statement, paragraph (2)"
    quote: "ERCOT shall issue a RTM Resettlement Statement for a given Operating Day due to errors other than errors in prices when: (a) The total of all errors other than price errors results in an absolute value impact greater than 4% of the total RTM Statement amount for any single Statement Recipient for the Operating Day; (b) The impact to the Statement Recipient is greater than $400.00; and (c) The error is discovered, and a Market Notice of the error is provided to Market Participants, within one year of the Operating Day at issue."
  - id: e9
    source: np-09
    locator: "Section 9.2.5, DAM Resettlement Statement, paragraph (2)"
    quote: "ERCOT shall issue a DAM Resettlement Statement for a given Operating Day due to errors other than errors in prices when: (a) The total of all errors other than price errors results in an absolute value impact greater than 2% of the total DAM Statement amount for any single Statement Recipient for the Operating Day; (b) The impact to the Statement Recipient is greater than $200.00; and (c) The error is discovered, and a Market Notice of the error is provided to Market Participants, within one year of the Operating Day at issue."
  - id: e10
    source: np-09
    locator: "Section 9.6, Settlement Invoices for the Day-Ahead Market and Real-Time Market, paragraph (1)"
    quote: "ERCOT shall prepare Settlement Invoices on a net basis based on Day-Ahead Market (DAM) Statements, DAM Resettlement Statements, Real-Time Market (RTM) Initial Statements, RTM Final Statements, RTM True-Up Statements and RTM Resettlement Statements. ERCOT shall issue the Settlement Invoices on the same Business Day as the day that the DAM and RTM Statements are posted to the Market Information System (MIS) Certified Area."
  - id: e11
    source: np-09
    locator: "Section 9.7.1, Invoice Recipient Payment to ERCOT for the Settlement Invoices, paragraph (1)"
    quote: "The payment due date and time for the Settlement Invoice, with funds owed by an Invoice Recipient, is 1700 on the second Bank Business Day after the Settlement Invoice date, unless the second Bank Business Day is not a Business Day."
  - id: e12
    source: np-09
    locator: "Section 9.1.5, Settlement Payment Convention"
    quote: "A Settlement Statement or Invoice containing a negative amount represents a payment due by ERCOT to the Market Participant that received the Statement or Invoice. A Settlement Statement or Invoice containing a positive amount represents a payment due to ERCOT by the Market Participant that received the Statement or Invoice."
  - id: e13
    source: np-09
    locator: "Section 9.14.2, Notice of Dispute, paragraph (6)"
    quote: "The Settlement Statement Recipient is deemed to have validated each DAM Settlement or Resettlement Statement unless it has raised a Settlement and billing dispute or reported an exception within ten Business Days of the date on which ERCOT issued the Settlement or Resettlement Statement."
  - id: e14
    source: np-09
    locator: "Section 9.1.2, Settlement Calendar, paragraph (1)"
    quote: "ERCOT shall post and maintain on the ERCOT website a Settlement Calendar to denote, for each Operating Day, when: (a) Each scheduled Settlement Statement for the DAM will be issued under Section 9.2.4, DAM Statement, and Section 9.2.5, DAM Resettlement Statement; (b) Each scheduled Settlement Statement for the RTM will be issued under Section 9.5.4, RTM Initial Statement, Section 9.5.5, RTM Final Statement, Section 9.5.6, RTM Resettlement Statement, and Section 9.5.8, RTM True-Up Statement;"
  - id: e15
    source: np-09
    locator: "Section 9.2.2, Settlement Statements for the DAM, paragraph (2)"
    quote: "A Settlement Statement for the DAM can be: (a) A “DAM Statement,” which is the Settlement Statement issued for a particular DAM; (b) A “DAM Resettlement Statement,” which corrects a DAM Statement."
  - id: e16
    source: np-09
    locator: "Section 9.2.2, paragraph (7)"
    quote: "Settlement Statements for the DAM must break fees down by Charge Types into the appropriate one-hour Settlement Interval for that type."
  - id: e17
    source: np-09
    locator: "Section 9.5.3, Real-Time Market Settlement Charge Types, paragraph (8)"
    quote: "A Settlement Statement for the RTM must break the fees down by Charge Type into the appropriate 15-minute or one-hour Settlement Interval for that type."
  - id: e18
    source: np-09
    locator: "Section 9.2.5, DAM Resettlement Statement, paragraph (1)"
    quote: "ERCOT shall issue DAM Resettlement Statements for a given Operating Day if the ERCOT Board finds that the DAM Locational Marginal Prices (LMPs), Market Clearing Prices for Capacity (MCPCs), or Settlement Point Prices are significantly affected by a software or other error under Section 4.5.2, Communicating DAM Results. ERCOT shall also produce DAM Resettlement Statements required by resolution of Settlement and billing disputes and the correction of errors other than price errors pursuant to this Section. In addition, the ERCOT Board may, in its discretion, direct ERCOT to run a resettlement of any Operating Day, at any time, to address unusual circumstances."
  - id: e19
    source: np-09
    locator: "Section 9.2.5, paragraph (3)"
    quote: "ERCOT shall issue a DAM Resettlement Statement for an Operating Day if an error in the DAM Settlement, which does not otherwise meet the Protocol requirements for resettlement as specified in paragraphs (1) and (2) above, will prevent ERCOT from achieving revenue neutrality."
  - id: e20
    source: np-09
    locator: "Section 9.2.5, paragraph (4)"
    quote: "No later than 150 days after each affected Operating Day, ERCOT shall resettle Operating Days with errors, other than errors in prices, with cumulative impacts that do not meet the threshold described in paragraph (2) above if the cumulative effect of errors to a single Statement Recipient in the 150 day window results in an absolute value impact greater than 1% of the total DAM Statement amounts for any Statement Recipient for the affected Operating Days, if this impact to the Statement Recipient is greater than $5,000.00."
  - id: e21
    source: np-09
    locator: "Section 9.2.7, Confirmation of Statement for the DAM, paragraph (1)"
    quote: "Each Settlement Statement for the DAM is deemed to have been available on the posting date specified on the Settlement Calendar, unless ERCOT is notified to the contrary."
  - id: e22
    source: np-09
    locator: "Section 9.5.2, Settlement Statements for the RTM, paragraph (4)"
    quote: "To issue an RTM Settlement Statement, ERCOT may use estimated, disputed, or calculated meter data."
  - id: e23
    source: np-09
    locator: "Section 9.5.5, RTM Final Statement, paragraph (2)"
    quote: "An RTM Final Statement will reflect differences to financial records generated on the previous Settlement Statement for the given Operating Day."
  - id: e24
    source: np-09
    locator: "Section 9.5.6, RTM Resettlement Statement, paragraph (1)"
    quote: "Any resettlement occurring after an RTM True-Up Statement has been issued must meet the same Interval Data Recorder (IDR) Meter Data Threshold requirements defined in Section 9.5.8, RTM True-Up Statement, and is subject to the same limitations for filing a dispute. Despite the preceding sentence, the ERCOT Board may, in its discretion, direct ERCOT to run a resettlement of any Operating Day, at any time, to address unusual circumstances."
  - id: e25
    source: np-09
    locator: "Section 9.5.6, paragraph (4)"
    quote: "For any Settlement and billing disputes resolved prior to issuance of the RTM Final Statement, ERCOT shall effect the dispute’s resolution on the RTM Final Statement for that Operating Day. If a dispute is submitted by 15 Business Days after the issuance of the RTM Initial Statement for an Operating Day and is not resolved on the RTM Final Statement, ERCOT will affect the dispute’s resolution on an RTM Resettlement Statement for that Operating Day."
  - id: e26
    source: np-09
    locator: "Section 9.5.6, paragraph (5)"
    quote: "ERCOT must effect the resolution of any dispute submitted more than 15 Business Days after the issuance of the RTM Initial Statement on the next available Resettlement or RTM True-Up statement for that Operating Day. For Settlement and billing disputes resolved under Section 9.14, Settlement and Billing Dispute Process, and submitted at least 20 Business Days before the scheduled date for issuance of the RTM True-Up Statement, ERCOT will include adjustments relating to the dispute on the RTM True-Up Statement."
  - id: e27
    source: np-09
    locator: "Section 9.5.6, paragraph (6)"
    quote: "ERCOT may not issue an RTM Resettlement Statement less than 20 days before a scheduled RTM Final Statement or RTM True-Up Statement for the relevant Operating Day."
  - id: e28
    source: np-09
    locator: "Section 9.5.6, paragraph (9)"
    quote: "If ERCOT is required to issue a Resettlement Statement per this Section, but resettlement is not practicable due to system limitations, ERCOT shall make the adjustments through a separate Invoice that is produced outside of normal Settlement Invoices."
  - id: e29
    source: np-09
    locator: "Section 9.5.8, RTM True-Up Statement, paragraph (2), last sentence"
    quote: "If any RTM True-Up Statement issuance date does not fall on a Business Day, then the RTM True-Up Statement must be issued by the end of the next Business Day after the RTM True-Up Settlement date."
  - id: e30
    source: np-09
    locator: "Section 9.5.9, Notice of True-Up Settlement Timeline Changes for the Real-Time Market, paragraph (1)"
    quote: "If the IDR Meter Data Threshold has not been met by the 180^(th) day after the Operating Day (or, if the 180^(th) day is not a Business Day, by the next day thereafter that is a Business Day), then ERCOT shall send a Market Notice about the delay of any RTM True-Up Statement issuance indicating the IDR Meter Data Threshold has not been met."
  - id: e31
    source: np-09
    locator: "Section 9.5.11, Validation of the True-Up Statement for the Real-Time Market, paragraph (1)"
    quote: "The Statement Recipient is considered to have validated each RTM True-Up Statement unless it has filed a Settlement and billing dispute or reported an exception within ten Business Days after the RTM True-Up Statement has been posted on the MIS Certified Area."
  - id: e32
    source: np-09
    locator: "Section 9.6, Settlement Invoices for the DAM and RTM, paragraph (2)"
    quote: "Each Invoice Recipient shall pay any net debit and be entitled to receive any net credit shown on the Settlement Invoice on the payment due date, whether or not there is any Settlement and billing dispute regarding the amount of the debit or credit."
  - id: e33
    source: np-09
    locator: "Section 9.6, paragraph (4)"
    quote: "Settlement Invoice items must be grouped by DAM, DAM Resettlement, RTM Initial, RTM Final, RTM Resettlement, and RTM True-Up categories and must be sorted by Operating Day within each category."
  - id: e34
    source: np-09
    locator: "Section 9.7.2, ERCOT Payment to Invoice Recipients for the Settlement Invoices, paragraph (1)"
    quote: "Subject to the availability of funds as discussed in paragraph (2) below, ERCOT must pay Settlement Invoices with funds owed to an Invoice Recipient by 1700 on the next Bank Business Day after payments are due for that Settlement Invoice under Section 9.7.1, Invoice Recipient Payment to ERCOT for the Settlement Invoices, subject to ERCOT’s right to withhold payments for any reason set forth in these Protocols or as a matter of law, unless that next Bank Business Day is not a Business Day."
  - id: e35
    source: np-09
    locator: "Section 9.14.2, Notice of Dispute, paragraph (1)"
    quote: "A Settlement Statement Recipient may dispute items or calculations in the most recently issued Settlement Statement for an Operating Day, except as limited for RTM True-Up Statements in paragraph (3) below. The dispute will apply to the Operating Day in question, not to the associated Settlement Statement."
  - id: e36
    source: np-09
    locator: "Section 9.14.2, paragraph (2)"
    quote: "An Invoice Recipient may dispute elements of an Invoice that are not the result of a Settlement Statement that are contained on the Invoice. The Invoice Recipient must file the Invoice dispute within ten Business Days of the date on which ERCOT posted the Invoice."
  - id: e37
    source: np-09
    locator: "Section 9.14.2, paragraph (3)"
    quote: "With respect to an RTM True-Up Statement or any subsequent Resettlement Statement after ERCOT issued the True-Up Statement, ERCOT will consider only Settlement and billing disputes associated with incremental changes between the RTM True-Up Statement or Resettlement Statement, and the most recent previous Settlement Statement for that Operating Day. The Settlement Statement Recipient may recover only the amounts associated with the incremental monetary change between the prior statement and the statement from which the dispute arose. ERCOT shall reject late-filed Settlement and billing disputes. Once the deadline for filing a dispute has passed, the RTM True-Up Statement binds the Settlement Statement Recipient to which it relates unless ERCOT issues a subsequent Resettlement Statement pursuant to this Section."
  - id: e38
    source: np-09
    locator: "Section 9.14.2, paragraph (4)"
    quote: "ERCOT shall reject Settlement and billing disputes for a given Operating Day during the 20 Business Days before the scheduled date for issuance of the RTM True-Up Statement for that Operating Day."
  - id: e39
    source: np-09
    locator: "Section 9.14.2, paragraph (6)"
    quote: "Once the deadline for filing a dispute has passed, a DAM Statement binds the Settlement Statement Recipient to which it relates unless ERCOT issues a subsequent Resettlement Statement."
  - id: e40
    source: np-09
    locator: "Section 9.14.3, Contents of Notice, paragraphs (1)-(2)"
    quote: "ERCOT shall reject a dispute that does not contain the data elements listed in this Section. (2) ERCOT shall provide automatic field population techniques or drop-down boxes for appropriate data elements below. The notice of Settlement and billing dispute must state clearly: (a) Disputing Entity; (b) Dispute contact person(s); (c) Dispute contact information; (d) Operating Day or Invoice date in dispute; (e) Charge Type; (f) Time period in dispute; (g) Amount in dispute; (h) Settlement and billing dispute type; and (i) Reasons for the dispute."
  - id: e41
    source: np-09
    locator: "Section 9.14.4, ERCOT Processing of Disputes, paragraph (2)"
    quote: "If ERCOT requires additional data to resolve the dispute, ERCOT shall send the Settlement Statement Recipient or Invoice Recipient a list of the required additional data within seven Business Days of the date the dispute was filed. The Settlement Statement Recipient or Invoice Recipient shall respond with the entire set of required data within five Business Days of ERCOT’s request or by a date agreed upon by ERCOT and the Market Participant that is no later than eight Business Days prior to the posting of the True-Up Settlement Statement for the disputed Operating Day. If ERCOT does not receive the data within that time frame, ERCOT shall deny the dispute."
  - id: e42
    source: np-09
    locator: "Section 9.14.4, paragraph (5)"
    quote: "All complete disputes of the DAM received within ten Business Days after ERCOT posts that day’s DAM Settlement Statement shall be included in a Resettlement of the DAM Operating Day under Section 9.2.5, DAM Resettlement Statement."
  - id: e43
    source: np-09
    locator: "Section 9.14.4.1.3, Closed, paragraph (1)(a)"
    quote: "If, after 45 days from receiving notice of a denied dispute, the Settlement Statement Recipient or Invoice Recipient does not begin the ADR process, ERCOT will close the dispute."
  - id: e44
    source: np-09
    locator: "Section 9.14.4.2.1, Denied, paragraph (2)"
    quote: "If the Settlement Statement Recipient or Invoice Recipient is not satisfied with the outcome of a denied Settlement and billing dispute, the Settlement Statement Recipient or Invoice Recipient may proceed to ADR as described in Section 20, Alternative Dispute Resolution Procedure and Procedure for Return of Settlement Funds."
  - id: e45
    source: np-09
    locator: "Section 9.14.4.2.3, Granted with Exceptions, paragraph (1)"
    quote: "If the Settlement Statement or Invoice Recipient does not timely reject the dispute outcome, it shall be deemed accepted."
  - id: e46
    source: np-09
    locator: "Section 9.19, Partial Payments by Invoice Recipients, paragraph (1)(d)"
    quote: "If, after taking the actions set forth in paragraphs (a), (b) and (c) above, ERCOT still does not have sufficient funds to pay all amounts that it owes to Settlement Invoice Recipients in full, ERCOT shall deduct any applicable administrative fees as specified in Section 9.16, ERCOT System Administration and User Fees, payments for Reliability Must-Run (RMR) Services, and the Congestion Revenue Right (CRR) Balancing Account (CRRBA) from the amount received or collected and then reduce payments to all Settlement Invoice Recipients owed monies from ERCOT."
  - id: e47
    source: np-09
    locator: "Section 9.19, paragraph (1)(e)"
    quote: "If sufficient funds continue to be unavailable for ERCOT to pay all amounts in full to short-paid Entities for that Settlement Invoice and the short-paying Entity is not complying with a payment plan designed to enable ERCOT to pay all amounts in full to short-paid Entities, ERCOT shall uplift short-paid amounts through the Default Uplift process described below in Section 9.19.1 and Section 9.19.2, Payment Process for Default Uplift Invoices."
  - id: e48
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2, Settlement Statements and Invoices, paragraph (1)"
    quote: "The Real-Time Market (RTM), the Day-Ahead Market (DAM), and the Congestion Revenue Right (CRR) Auction are settled separately. Each type of Settlement has a unique set of statements and/or Invoices and settles according to a different timeline."
  - id: e49
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2.2, Day-Ahead Market Statements"
    quote: "In the case of a “No DAM” scenario, where DAM is not successfully executed for an Operating Day, DAM Statements will not be generated or posted for that Operating Day."
  - id: e50
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2.3.3, Default Uplift Invoice"
    quote: "The Default Uplift Invoicing process allocates DAM and/or RTM losses to QSEs and CRRAHs."
  - id: e51
    source: copmg-08
    locator: "Commercial Operations Market Guide Section 8.2.3.4, Miscellaneous Invoice, paragraph (1)"
    quote: "In the event that ERCOT cannot reasonably Invoice Market Participants via one of the other Protocol-defined Invoices, ERCOT may utilize the Miscellaneous Invoice."
  - id: e52
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.4, Dispute Items, paragraph (1)"
    quote: "(a) DAM Statement; (b) DAM Resettlement Statement; (c) RTM Initial Statement; (d) RTM Final Statement; (e) RTM True-Up Statement; (f) Any RTM Resettlement Statement issued after the RTM True-Up Statement; (g) Default Uplift Invoice; (h) CRR Auction Invoice; (i) CARD Invoice; and (j) CRRBA Invoice."
  - id: e53
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.3, Dispute Access, paragraph (1)"
    quote: "There are two methods available for filing a dispute, MIS Web Portal and Application Programmatic Interface (API)."
  - id: e54
    source: copmg-11
    locator: "Commercial Operations Market Guide Section 11.1.6, Dispute Reporting, paragraph (1)(a)"
    quote: "Market Participant Dispute Extract – This certified extract provides QSEs and CRR Account Holders with the current status of all of their Entity specific disputes that are not closed or withdrawn, as well as all disputes closed or withdrawn within the last 120 days."
---

## Definition

A Settlement Statement is the statement ERCOT issues showing a breakdown of administrative, miscellaneous and market charges for the applicable market services. [e1] There are separate statements for the Day-Ahead Market and the Real-Time Market, and their settlement and billing timelines are separate. [e2] The Commercial Operations Market Guide adds that the RTM, the DAM and the CRR Auction are settled separately, each with its own statements or invoices on a different timeline. [e48]

## How it works

**Calendar and access.** ERCOT posts a Settlement Calendar on its website showing, for each Operating Day, when each scheduled DAM and RTM statement will be issued. [e14] Statements are posted to the MIS Certified Area, and the recipient is responsible for accessing them. [e10] A DAM Statement is deemed available on its calendar date unless the recipient notifies ERCOT otherwise. [e21] If a DAM is not successfully executed for an Operating Day, no DAM Statement is generated for it. [e49]

**DAM statements.** The DAM gets a DAM Statement on the second Business Day after the Operating Day, and a DAM Resettlement Statement corrects it. [e3][e15] DAM statements break fees down by Charge Type into one-hour Settlement Intervals. [e16]

**RTM statements.** The RTM gets a series of statements for each Operating Day: an Initial Statement on the fifth day after the Operating Day (next Business Day if that is not one, or the first Business Day after Real-Time prices are final if the fifth day falls on or before that date), a Final Statement on the 55th day (first Business Day after if that is not one), and a True-Up Statement 180 days after the Operating Day if the IDR Meter Data Threshold is met. [e4][e5][e6] If the threshold is not met the True-Up comes when the data is available, and one is issued no later than 365 days after the Operating Day. [e7] If the True-Up date is not a Business Day it is issued by the end of the next Business Day. [e29] If the threshold is not met by the 180th day (or the next Business Day), ERCOT sends a Market Notice about the delay. [e30] RTM statements break fees down by Charge Type into 15-minute or one-hour intervals, and ERCOT may use estimated, disputed or calculated meter data to issue them. [e17][e22] Each later statement reflects differences against the previous statement for the Operating Day. [e23]

**Resettlement triggers (DAM).** ERCOT issues DAM Resettlement Statements if the Board finds DAM prices significantly affected by a software or other error, for resolved disputes and non-price error corrections, and the Board may direct a resettlement of any Operating Day at any time. [e18] A resettlement for non-price errors is triggered when the error exceeds 2% of the DAM Statement amount and $200 and is found and noticed within a year. [e9] A resettlement is also required if an error will prevent ERCOT from achieving revenue neutrality. [e19] Smaller errors are swept up within 150 days of each Operating Day if cumulative impact exceeds 1% of DAM Statement amounts and $5,000. [e20]

**Resettlement triggers (RTM).** A resettlement for non-price errors is triggered when the error exceeds 4% of the RTM Statement amount and $400, and is found and noticed within a year of the Operating Day. [e8] A resettlement after the True-Up must meet the same IDR Meter Data Threshold and is subject to the same dispute-filing limits, though the Board may direct a resettlement at any time. [e24] ERCOT may not issue an RTM Resettlement less than 20 days before a scheduled Final or True-Up Statement. [e27] If resettlement is not practicable due to system limitations, ERCOT makes the adjustments through a separate invoice outside the normal Settlement Invoices. [e28]

**Invoices and payment.** ERCOT issues Settlement Invoices on a net basis on the same Business Day the statements are posted, grouped by DAM, DAM Resettlement, RTM Initial, RTM Final, RTM Resettlement and RTM True-Up and sorted by Operating Day. [e10][e33] Amounts owed to ERCOT are due at 1700 on the second Bank Business Day after the invoice date. [e11] ERCOT pays amounts owed to a recipient by 1700 on the next Bank Business Day after the payments are due, subject to availability of funds and ERCOT's right to withhold payments for reasons in the Protocols or by law. [e34] A negative amount on a statement or invoice is a payment from ERCOT to the recipient; a positive amount is owed to ERCOT. [e12] Recipients pay any net debit whether or not there is a dispute. [e32]

**Short-pays.** If ERCOT still lacks funds after collection efforts, draws on Financial Security and offsets, it deducts certain fees, RMR payments and the CRRBA and reduces payments to all owed recipients pro rata for revenue neutrality. [e46] If funds remain unavailable and the short-payer is not on a payment plan, ERCOT uplifts the short-paid amounts through the Default Uplift process. [e47] The Guide says the Default Uplift process allocates DAM and/or RTM losses to QSEs and CRR Account Holders. [e50] ERCOT may use a Miscellaneous Invoice when it cannot reasonably invoice through another Protocol-defined invoice. [e51]

**Disputes.** A recipient may dispute items or calculations in the most recently issued statement for an Operating Day; the dispute applies to the Operating Day, not the statement. [e35] A dispute must state the disputing entity, contacts, Operating Day or invoice date, Charge Type, period, amount, type and reasons, or ERCOT rejects it. [e40] If ERCOT needs more data it must ask within seven Business Days, and the filer must respond within five Business Days (or an agreed date no later than eight Business Days before the True-Up posting), or ERCOT denies the dispute. [e41] An invoice recipient may dispute invoice elements not resulting from a statement within ten Business Days of posting. [e36] Statements bind the recipient once the dispute deadline has passed unless ERCOT issues a later resettlement. [e39][e37]

For RTM, disputes submitted within 15 Business Days of the Initial Statement are resolved on the Final Statement if possible and otherwise on a Resettlement; later disputes go to the next available Resettlement or True-Up, and disputes submitted at least 20 Business Days before the scheduled True-Up are included on it. [e25][e26] ERCOT rejects disputes during the 20 Business Days before the scheduled True-Up. [e38] After the True-Up, only incremental changes between the True-Up or later resettlement and the previous statement can be disputed and recovered, and late disputes are rejected. [e37] A recipient is deemed to have validated a True-Up Statement unless it files within ten Business Days. [e31] Complete DAM disputes received within ten Business Days of the DAM Statement go into a DAM Resettlement. [e42]

Resolutions: a denied dispute can go to ADR, and ERCOT closes it if ADR is not begun within 45 days of the denial notice. [e44][e43] A "Granted with Exceptions" outcome is deemed accepted if not timely rejected. [e45] Disputes can be filed through the MIS web portal or API. [e53] ERCOT's dispute extract gives QSEs and CRR Account Holders their open disputes and those closed or withdrawn in the last 120 days. [e54]

## ERCOT context

The RTM True-Up is tied to ERCOT receiving and validating usage data from a threshold share of ESI IDs, so its timing can move. [e6][e7] A recipient is deemed to have validated a DAM Statement unless it raises a dispute or exception within ten Business Days of issue. [e13] The Guide's list of disputable items runs from the DAM Statement through RTM Initial, Final, True-Up and later resettlement statements to the Default Uplift, CRR Auction, CARD and CRRBA invoices. [e52]

## Timeline

For an RTM Operating Day D, the Protocols count the Initial, Final and True-Up Statements in days after D and the dispute windows in Business Days: [e4][e5][e6]

- D+5: Initial Statement. [e4]
- Within 15 Business Days after Initial: disputes get resolved on the Final if possible. [e25]
- D+55: Final Statement. [e5]
- 20 Business Days before the True-Up: disputes rejected; disputes filed at least 20 Business Days before are included on the True-Up. [e38][e26]
- D+180: True-Up if the IDR Meter Data Threshold is met (otherwise when the data is available). [e6][e7]
- D+365: a True-Up must have been issued. [e7]
- Within one year of D: non-price errors must be found and noticed to trigger a resettlement. [e8]

## Key facts

- DAM Statement: second Business Day after the Operating Day. [e3]
- RTM Initial Statement: fifth day after the Operating Day, moved to the next Business Day if needed, or to the first Business Day after Real-Time prices are final if that is later. [e4]
- RTM Final Statement: 55th day after the Operating Day. [e5]
- RTM True-Up: 180 days after the Operating Day if the IDR Meter Data Threshold is met; no later than 365 days. [e6][e7]
- RTM resettlement threshold: 4% and $400; DAM: 2% and $200. [e8][e9]
- Payment is due 1700 on the second Bank Business Day after the invoice date. [e11]
- Dispute window to avoid being deemed to have validated a DAM statement: ten Business Days. [e13]
- RTM disputes are rejected in the 20 Business Days before the scheduled True-Up. [e38]

## Say it like this

A trade day is settled in stages: the DAM statement lands two Business Days later, the real-time initial statement about five days later, a final at day 55 and a true-up around day 180. Each stage can move your numbers, so we treat the early statements as provisional, and the dispute clocks run on Business Days.

## Common confusion

"Final" does not mean last. The RTM Final Statement is issued on the 55th day, but a True-Up Statement follows at 180 days or later. [e5][e6] Also, a negative statement amount means ERCOT pays you, not the other way round. [e12] And a dispute is about the Operating Day, not a single statement version, so filing against an old statement means ERCOT looks at the latest one. [e35]

## Questions

### When do I see settled numbers for a given Operating Day?

DAM: the second Business Day after. RTM: an Initial Statement on the fifth day, a Final on day 55, and a True-Up at 180 days. [e3][e4][e5][e6]

### What can delay the True-Up Statement?

The IDR Meter Data Threshold: usage data validated for at least 99% of ESI IDs with a BUSIDRRQ Load Profile Type and at least 90% from each qualifying Meter Reading Entity. If not met, ERCOT issues it when data is available, and in any case by 365 days. [e6][e7]

### What if I disagree with a statement?

Raise a dispute under Section 9.14; a DAM statement is deemed validated if you raise no dispute or exception within ten Business Days. [e13] RTM disputes filed within 15 Business Days of the Initial Statement aim for the Final Statement. [e25] The detailed dispute rules are in Section 9.14.

### Why might ERCOT reject my RTM dispute?

Disputes for an Operating Day are rejected during the 20 Business Days before its scheduled True-Up, and late-filed disputes are rejected generally. [e38][e37] The saved text gives the rule but not the reason.

### What if I only find an error eight months after the Operating Day?

A non-price-error resettlement requires the error to exceed the 4% and $400 RTM thresholds (2% and $200 for the DAM) and be found and noticed within one year of the Operating Day. [e8][e9] After the True-Up, a resettlement must also meet the IDR Meter Data Threshold and the same dispute limits. [e24]

### What if a counterparty short-pays an invoice?

ERCOT collects, draws on Financial Security and offsets, then reduces payments to all owed recipients pro rata and, if funds remain unavailable and the short-payer is not on a payment plan, uplifts the shortfall through the Default Uplift process. [e46][e47]

### Why do I owe the invoice amount even while my dispute is open?

The Protocols require each invoice recipient to pay any net debit on the due date whether or not there is a dispute, and to receive any net credit likewise. [e32]

## Scenarios

### A QSE sees a $50,000 error on an Operating Day found 120 days later. What happens?

- Under RTM rules a Resettlement is triggered if the error is over 4% of its RTM Statement amount and over $400, and was discovered and noticed within a year; otherwise the QSE can dispute. [e8][e35]
- If the QSE disputes after the Initial Statement but within 15 Business Days it would be handled on the Final; at 120 days the dispute goes to the next available Resettlement or the True-Up. [e25][e26]
- ERCOT may not issue the RTM Resettlement fewer than 20 days before the scheduled True-Up. [e27]

## Open items

- Resolved 2026-11-21: Section 9.14 dispute process, 9.19 short-pay handling, DAM and RTM resettlement triggers, invoice grouping and payment timing are now cited; the COPMG dispute and invoice descriptions are cited.
- Charge type lists (Sections 9.2.3 and 9.5.3) were not summarized.
- Default Uplift Invoice formulas (Section 9.19.1), partial payment payment-plan details beyond paragraphs (d)-(e), and the 5% hold of Financial Security were not summarized.
- Invoices for CRR auction, CARD and balancing account (Sections 9.8-9.13): the COPMG table gives timing (for example CRR Auction Invoice posted the first Business Day after the auction) but table cells could not be quoted cleanly, so they are referenced, not described.
- RTM price-error resettlement mechanics (Section 6.3 price correction) are not covered; only non-price-error thresholds are cited.
- Alternative Dispute Resolution procedure (Section 20) is not saved or summarized.
