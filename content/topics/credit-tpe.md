---
id: credit-tpe
name: Credit, Collateral & TPE
aliases: [credit, collateral, TPE, Total Potential Exposure, Financial Security, TPEA, TPES]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-18
links:
  - to: qse
    type: related
    note: A Counter-Party is an Entity that is a QSE and/or a CRR Account Holder. [e1]
  - to: crr
    type: related
    note: CRR Account Holders are Counter-Parties and CRR auction credit is locked against their exposure. [e1][e5]
  - to: dam
    type: related
    note: ERCOT's suspension rights for unmet credit requirements are stated to include a QSE's ability to bid in the DAM. [e11]
  - to: securitization
    type: related
    note: ERCOT may draw on Financial Security to cover short-paid securitization invoices when escrow deposits are insufficient. [e9]
  - to: settlement-statements
    type: related
    note: A Counter-Party must keep Financial Security at or above its Total Potential Exposure. [e2]
  - to: retailer-defaults-2021
    type: related
    note: Counter-Party creditworthiness standards apply to every QSE and CRR Account Holder. [e2]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Counter-Party"
    quote: "A single Entity that is a QSE and/or a CRR Account Holder. A Counter-Party includes all registrations as a QSE, all subordinate QSEs, and all CRR Account Holders by the same Entity."
  - id: e2
    source: np-16
    locator: "Section 16.11.1, ERCOT Creditworthiness Requirements for Counter-Parties, paragraph (1)"
    quote: "Each Counter-Party shall meet ERCOT’s creditworthiness standards as provided in this Section. A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE)."
  - id: e3
    source: np-16
    locator: "Section 16.11.4.1, Determination of Total Potential Exposure for a Counter-Party, paragraph (1)"
    quote: "A Counter-Party’s TPE is the sum of its “Total Potential Exposure Any” (TPEA) and TPES: (a) TPEA is the positive net exposure of the Counter-Party not included in TPES. (b) TPES is the positive net exposure of the Counter-Party for Future Credit Exposure (FCE) and the Independent Amount (IA)."
  - id: e4
    source: np-16
    locator: "Section 16.11.4, paragraph (4)"
    quote: "ERCOT shall monitor and calculate each Counter-Party’s TPEA and TPES daily."
  - id: e5
    source: np-16
    locator: "Section 16.11.5, Monitoring of a Counter-Party’s Creditworthiness and Credit Exposure by ERCOT, paragraph (2)"
    quote: "A Counter-Party is responsible at all times for maintaining: (a) Financial Security in an amount equal to or greater than that Counter-Party’s: (i) TPES; plus (ii) Net Positive Exposure of approved CRR Bilateral Trades; plus (iii) ACL locked for CRR Auction, if any; and (b) Remainder Collateral in an amount equal to or greater than that Counter-Party’s TPEA."
  - id: e6
    source: np-16
    locator: "Section 16.11.5, paragraph (4)"
    quote: "When either the Counter-Party’s TPEA or TPES as defined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure, reaches 90% of its requirement, ERCOT shall use reasonable efforts to electronically issue a warning to the Counter-Party’s Authorized Representative and credit contact advising the Counter-Party that it should consider increasing its Financial Security."
  - id: e7
    source: np-16
    locator: "Section 16.11.1, paragraph (1)"
    quote: "If at any time the Counter-Party does not meet ERCOT’s creditworthiness requirements, then ERCOT may suspend the Counter-Party’s rights under these Protocols until it meets those creditworthiness requirements."
  - id: e8
    source: np-16
    locator: "Section 16.11.3, Alternative Means of Satisfying ERCOT Creditworthiness Requirements, paragraph (1)(a)"
    quote: "The Counter-Party may give an unconditional, irrevocable letter of credit naming ERCOT as the beneficiary."
  - id: e9
    source: np-16
    locator: "Section 16.11.1, paragraph (2)"
    quote: "Notwithstanding the provisions in paragraph (1) above, ERCOT may draw on Financial Security if necessary to pay short-pays of Securitization Default Charge Invoices or Securitization Uplift Charge Initial Invoices if the respective escrow deposits are insufficient to cover the short-pays."
  - id: e10
    source: np-16
    locator: "Section 16.11.4.1, paragraph (3)"
    quote: "If ERCOT, in its sole discretion, determines that the TPEA or the TPES for a Counter-Party calculated under paragraphs (1) or (2) above does not adequately match the financial risk created by that Counter-Party’s activities under these Protocols, then ERCOT may set a different TPEA or TPES for that Counter-Party."
  - id: e11
    source: np-16
    locator: "Section 16.11.1, paragraph (1)"
    quote: "ERCOT’s failure to suspend the Counter-Party’s rights on any particular occasion does not prevent ERCOT from suspending those rights on any subsequent occasion, including a CRR Account Holder’s ability to bid on future CRRs or a Qualified Scheduling Entity’s (QSE’s) ability to bid in the Day-Ahead Market (DAM)."
---

## Definition

ERCOT requires each Counter-Party, meaning an Entity that is a QSE and/or a CRR Account Holder, to maintain Financial Security at or above its Total Potential Exposure (TPE). [e1][e2] TPE is the sum of "Total Potential Exposure Any" (TPEA), the positive net exposure not included in TPES, and TPES, the positive net exposure for Future Credit Exposure and the Independent Amount. [e3]

## How it works

ERCOT monitors and calculates each Counter-Party's TPEA and TPES daily. [e4] A Counter-Party must hold Financial Security at least equal to TPES plus the net positive exposure of approved CRR bilateral trades plus any credit limit locked for a CRR auction, and Remainder Collateral at least equal to TPEA. [e5] Financial Security can be, for example, an unconditional, irrevocable letter of credit naming ERCOT as beneficiary. [e8]

When either TPEA or TPES reaches 90% of its requirement, ERCOT uses reasonable efforts to send a warning. [e6] If a Counter-Party does not meet the requirements, ERCOT may suspend its rights under the Protocols. [e7] ERCOT can also set a different TPEA or TPES if it judges the calculated one does not match the Counter-Party's financial risk. [e10]

## ERCOT context

Credit is tied directly to market access. Suspension of rights can include a CRR Account Holder's ability to bid on future CRRs or a QSE's ability to bid in the DAM. [e11] The same Financial Security also backs other obligations: ERCOT may draw on it to pay short-paid Securitization Default Charge or Uplift Charge invoices if the escrow deposits are not enough. [e9]

## Key facts

- Counter-Parties must maintain Financial Security at or above TPE at all times. [e2]
- TPE = TPEA + TPES. [e3]
- ERCOT recalculates TPEA and TPES daily. [e4]
- A warning goes out at 90% of the requirement. [e6]
- ERCOT may suspend a Counter-Party's rights if it falls short, and the Protocols name DAM bidding and CRR bidding as examples of what suspension can include. [e7][e11]

## Say it like this

(Guidance) ERCOT sizes each QSE's or CRR holder's likely unpaid obligations as TPE and requires collateral against it every day. Fall short and ERCOT can cut off DAM and CRR participation.

## Common confusion

TPE is not a single collateral amount held by ERCOT; it is an exposure measure, and the collateral requirement is split between Financial Security (against TPES and CRR items) and Remainder Collateral (against TPEA). [e3][e5] "Counter-Party" is the entity level, not each individual QSE registration. [e1]

## Questions

### What is TPE?

The sum of TPEA and TPES, each a positive net exposure of the Counter-Party. A Counter-Party must keep Financial Security at or above it. [e2][e3]

### What can ERCOT do if a Counter-Party falls short?

It may suspend the Counter-Party's rights under the Protocols, which can include a QSE's DAM bidding and a CRR Account Holder's CRR bidding. [e7][e11]

### How often is exposure recalculated?

Daily, for both TPEA and TPES. [e4]

## Open items

- Deeper pass: the Estimated Aggregate Liability, Initial Estimated Liability, Future Credit Exposure and Available Credit Limit formulas (Section 16.11.4.2 onward) were not summarized.
- Deeper pass: unsecured credit limits by rating, letter of credit issuer limits and the enforcement levels (Level I 110% of TPE, etc.) were not quoted.
- Deeper pass: no saved source gives aggregate collateral held by ERCOT; the IMM reports do not discuss credit.
