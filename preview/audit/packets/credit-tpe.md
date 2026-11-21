# Audit packet: Credit, Collateral & TPE (credit-tpe)

kind concept · domain congestion · level 2

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Counter-Party · text copy line 485

BEFORE: …R) (see Resource) Cost Allocation Zone One of the four zones in effect during the 2003 ERCOT market as they are changed pursuant to Section 3.4.2, Load Zone Modifications. A Cost Allocation Zone may be used by ERCOT to uplift certain costs to a QSE's Load regardless of NOIE Load Zone. Counter-Party 
QUOTE: A single Entity that is a QSE and/or a CRR Account Holder. A Counter-Party includes all registrations as a QSE, all subordinate QSEs, and all CRR Account Holders by the same Entity.
AFTER:  Credible Single Contingency (1) The Forced Outage of any single Transmission Facility or, during a single fault, the Forced Outage of multiple Transmission Facilities (single fault multiple element); (2) The Forced Outage of a double-circuit transmission line in excess of 0.5 miles in length; (3) T…

### e2 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.1, ERCOT Creditworthiness Requirements for Counter-Parties, paragraph (1) · text copy line 1033 · heading above: 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties

BEFORE: …1, Credit Requirements for CRR Auction Participation. (3) The term "Ultimate Parent" in this Section is defined as the most distant parent that prepares consolidated financial statements within the hierarchical ownership structure. 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties (1) 
QUOTE: Each Counter-Party shall meet ERCOT's creditworthiness standards as provided in this Section. A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE).
AFTER:  Each Counter-Party shall maintain any required Financial Security in a form acceptable to ERCOT in its sole discretion. If at any time the Counter-Party does not meet ERCOT's creditworthiness requirements, then ERCOT may suspend the Counter-Party's rights under these Protocols until it meets those …

### e5 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.5, Monitoring of a Counter-Party’s Creditworthiness and Credit Exposure by ERCOT, paragraph (2) · text copy line 2017 · heading above: 16.11.5 Monitoring of a Counter-Party’s Creditworthiness and Credit Exposure by ERCOT

BEFORE: … Income (or Profit and Loss); and (iii) Statement of Cash Flows. (d) Notice of a material change. A Counter-Party shall inform ERCOT within one Business Day if it has experienced a material change in its operations, financial condition or prospects that might adversely affect the Counter-Party. (2) 
QUOTE: A Counter-Party is responsible at all times for maintaining: (a) Financial Security in an amount equal to or greater than that Counter-Party's: (i) TPES; plus (ii) Net Positive Exposure of approved CRR Bilateral Trades; plus (iii) ACL locked for CRR Auction, if any; and (b) Remainder Collateral in an amount equal to or greater than that Counter-Party's TPEA.
AFTER:  (3) ERCOT shall promptly notify each Counter-Party of the need to increase its Financial Security and allow the Counter-Party time, as defined in paragraph (6)(a) below, to provide additional Financial Security to maintain compliance with this Section. (4) When either the Counter-Party's TPEA or TP…

### e9 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.1, paragraph (2) · text copy line 1035 · heading above: 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties

BEFORE: …o suspend the Counter-Party's rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a CRR Account Holder's ability to bid on future CRRs or a Qualified Scheduling Entity's (QSE's) ability to bid in the Day-Ahead Market (DAM). (2) 
QUOTE: Notwithstanding the provisions in paragraph (1) above, ERCOT may draw on Financial Security if necessary to pay short-pays of Securitization Default Charge Invoices or Securitization Uplift Charge Initial Invoices if the respective escrow deposits are insufficient to cover the short-pays.
AFTER:  16.11.1.1 Review of Counter-Party Eligibility (1) At any time, ERCOT may conduct a review to determine if a Counter-Party continues to satisfy all requirements set forth in Section 16, Registration and Qualification of Market Participants. (2) ERCOT's review under this Section may be triggered by n…

### e11 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.11.1, paragraph (1) · text copy line 1033 · heading above: 16.11.1 ERCOT Creditworthiness Requirements for Counter-Parties

BEFORE: …ain any required Financial Security in a form acceptable to ERCOT in its sole discretion. If at any time the Counter-Party does not meet ERCOT's creditworthiness requirements, then ERCOT may suspend the Counter-Party's rights under these Protocols until it meets those creditworthiness requirements. 
QUOTE: ERCOT's failure to suspend the Counter-Party's rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a CRR Account Holder's ability to bid on future CRRs or a Qualified Scheduling Entity's (QSE's) ability to bid in the Day-Ahead Market (DAM).
AFTER:  (2) Notwithstanding the provisions in paragraph (1) above, ERCOT may draw on Financial Security if necessary to pay short-pays of Securitization Default Charge Invoices or Securitization Uplift Charge Initial Invoices if the respective escrow deposits are insufficient to cover the short-pays. 16.11…

## Statements to check (new or changed since the last audit)

- **Link to qse** (cites e1): related QSE (Qualified Scheduling Entity): A Counter-Party is an Entity that is a QSE and/or a CRR Account Holder. [e1]
- **Link to crr** (cites e1, e5): related CRR (Congestion Revenue Right): CRR Account Holders are Counter-Parties and CRR auction credit is locked against their exposure. [e1][e5]
- **Link to dam** (cites e11): related Day-Ahead Market (DAM): ERCOT's suspension rights for unmet credit requirements are stated to include a QSE's ability to bid in the DAM. [e11]
- **Link to securitization** (cites e9): related Post-Uri Securitization: ERCOT may draw on Financial Security to cover short-paid securitization invoices when escrow deposits are insufficient. [e9]
- **Link to settlement-statements** (cites e2): related Settlement Statements & Timeline: A Counter-Party must keep Financial Security at or above its Total Potential Exposure. [e2]
- **Link to retailer-defaults-2021** (cites e2) FLAG number-not-in-quote: 2021: related Griddy & Brazos: 2021 Defaults: Counter-Party creditworthiness standards apply to every QSE and CRR Account Holder. [e2]

## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) (Guidance) ERCOT measures each Counter-Party's exposure as TPE, recalculates TPEA and TPES daily, and requires Financial Security at or above it. Fall short and ERCOT may suspend the Counter-Party's rights, which can include DAM and CRR bidding.

