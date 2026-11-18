---
id: settlement-statements
name: Settlement Statements & Timeline
aliases: [Settlement Statement, DAM Statement, RTM Initial Statement, RTM Final Statement, True-Up Statement, resettlement]
kind: concept
domain: congestion
level: 2
lenses: [analyst, retail, trading, portfolio]
as_of: 2026-11-18
links:
  - to: dam
    type: settles
    note: The DAM has its own Statement, produced on the second Business Day after the Operating Day. [e3]
  - to: rtm
    type: settles
    note: The RTM has Initial, Final, Resettlement and True-Up Statements. [e4][e5][e6]
  - to: crr
    type: related
    note: CRR auction, auction revenue distribution and balancing account amounts have their own invoices in Section 9.
  - to: uplift
    type: related
    note: Uplift and other charges appear as charge types on the statements.
  - to: credit-tpe
    type: related
    note: A short-paying Invoice Recipient's Financial Security can be enforced to cover the short-pay.
  - to: settlement-point
    type: related
    note: Statement amounts are built from Settlement Point Prices for the Operating Day.
  - to: qse
    type: related
    note: Statements and invoices are posted to the MIS Certified Area. [e10]
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
    quote: "ERCOT shall issue an RTM Initial Statement for each Statement Recipient for a given Operating Day on the fifth day after the Operating Day, unless that fifth day is not a Business Day. If the fifth day is not a Business Day, then ERCOT shall issue the RTM Initial Statement on the next Business Day after the fifth day."
  - id: e5
    source: np-09
    locator: "Section 9.5.5, RTM Final Statement"
    quote: "ERCOT shall issue an RTM Final Statement for each Statement Recipient for a given Operating Day on the 55th day after the Operating Day, unless that 55th day is not a Business Day."
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
    quote: "ERCOT shall post and maintain on the ERCOT website a Settlement Calendar to denote, for each Operating Day, when:"
---

## Definition

A Settlement Statement is the statement ERCOT issues showing a breakdown of administrative, miscellaneous and market charges for the applicable market services. [e1] There are separate statements for the Day-Ahead Market and the Real-Time Market, and their settlement and billing timelines are separate. [e2]

## How it works

ERCOT posts a Settlement Calendar on its website showing, for each Operating Day, when each scheduled statement will be issued. [e14] Statements are posted to the MIS Certified Area. [e10]

The DAM gets a DAM Statement on the second Business Day after the Operating Day. [e3] The RTM gets a series of statements for each Operating Day: an Initial Statement on the fifth day after the Operating Day (next Business Day if that is not one), a Final Statement on the 55th day, and a True-Up Statement 180 days after the Operating Day if the IDR Meter Data Threshold is met. [e4][e5][e6] If the threshold is not met the True-Up comes when the data is available, and one is issued no later than 365 days after the Operating Day. [e7]

Resettlement statements correct earlier ones. A resettlement for non-price errors is triggered when the error exceeds 4% of the RTM Statement amount and $400 (2% and $200 for the DAM), and is found and noticed within a year of the Operating Day. [e8][e9]

ERCOT then issues Settlement Invoices on a net basis on the same Business Day the statements are posted. [e10] Amounts owed to ERCOT are due at 1700 on the second Bank Business Day after the invoice date. [e11] A negative amount on a statement or invoice is a payment from ERCOT to the recipient; a positive amount is owed to ERCOT. [e12]

## ERCOT context

The RTM True-Up is tied to ERCOT receiving and validating usage data from a threshold share of ESI IDs, so its timing can move. [e6][e7] A recipient is deemed to have validated a DAM Statement unless it raises a dispute or exception within ten Business Days of issue. [e13]

## Key facts

- DAM Statement: second Business Day after the Operating Day. [e3]
- RTM Initial Statement: fifth day after the Operating Day, moved to the next Business Day if needed. [e4]
- RTM Final Statement: 55th day after the Operating Day. [e5]
- RTM True-Up: 180 days after the Operating Day if the IDR Meter Data Threshold is met; no later than 365 days. [e6][e7]
- RTM resettlement threshold: 4% and $400; DAM: 2% and $200. [e8][e9]
- Payment is due 1700 on the second Bank Business Day after the invoice date. [e11]
- Dispute window to avoid being deemed to have validated a DAM statement: ten Business Days. [e13]

## Say it like this

A trade day is settled in stages: the DAM statement lands two Business Days later, the real-time initial statement about five days later, a final at day 55 and a true-up around day 180. Each stage can move your numbers, so we treat the early statements as provisional.

## Common confusion

"Final" does not mean last. The RTM Final Statement is issued on the 55th day, but a True-Up Statement follows at 180 days or later. [e5][e6] Also, a negative statement amount means ERCOT pays you, not the other way round. [e12]

## Questions

### When do I see settled numbers for a given Operating Day?

DAM: the second Business Day after. RTM: an Initial Statement on the fifth day, a Final on day 55, and a True-Up at 180 days. [e3][e4][e5][e6]

### What can delay the True-Up Statement?

The IDR Meter Data Threshold: usage data validated for at least 99% of ESI IDs with a BUSIDRRQ Load Profile Type and at least 90% from each qualifying Meter Reading Entity. If not met, ERCOT issues it when data is available, and in any case by 365 days. [e6][e7]

### What if I disagree with a statement?

Raise a dispute under Section 9.14; a DAM statement is deemed validated if you raise no dispute or exception within ten Business Days. [e13] The detailed dispute rules are in Section 9.14.

## Open items

- Charge type lists (Sections 9.2.3 and 9.5.3) were not summarized.
- RTM Statement dispute windows and the 20-Business-Day blackout before the True-Up (Section 9.14.2) were not cited here except the DAM validation window.
- Invoices for CRR auction, CARD and balancing account (Sections 9.8-9.13) are only referenced, not described.
- Payment details for ERCOT paying recipients (Section 9.7.2) and partial payment handling were not summarized.
