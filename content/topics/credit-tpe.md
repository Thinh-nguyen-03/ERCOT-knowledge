---
id: credit-tpe
name: Credit, Collateral & TPE
aliases: [credit, collateral, TPE, Total Potential Exposure, Financial Security, TPEA, TPES, EAL, ACL]
kind: concept
domain: congestion
level: 2
lenses: [analyst, trading, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: qse
    type: related
    note: A Counter-Party is an Entity that is a QSE and/or a CRR Account Holder. [e1]
  - to: crr
    type: related
    note: CRR Account Holders are Counter-Parties and CRR auction credit is locked against their exposure. [e1][e5]
  - to: dam
    type: related
    note: ERCOT's suspension rights for unmet credit requirements are stated to include a QSE's ability to bid in the DAM, and DAM bids are limited to the Counter-Party's ACLD. [e11][e36]
  - to: securitization
    type: related
    note: ERCOT may draw on Financial Security to cover short-paid securitization invoices when escrow deposits are insufficient. [e9][e56]
  - to: settlement-statements
    type: related
    note: A Counter-Party must keep Financial Security at or above its Total Potential Exposure, and EAL is built from settled and unsettled amounts due to or from ERCOT. [e2][e20]
  - to: retailer-defaults-2021
    type: related
    note: The IMM says short payments during Winter Storm Uri exceeded $3 billion, and after Uri ERCOT eliminated unsecured credit limits through NPRR 1112. [e60][e58]
  - to: crr-auction
    type: related
    note: A Counter-Party's CRR auction credit limit is the lesser of its ACLC-based limit and any self-imposed limit, and the auction cannot award bids beyond it. [e37][e38]
  - to: ptp-obligation
    type: related
    note: DAM PTP obligation bids count toward the DAM credit exposure checked against the ACLD. [e36]
  - to: uplift
    type: related
    note: PUL, potential uplift, is part of TPEA for Counter-Parties that represent Entities to which a short payment will be uplifted. [e18][e21]
  - to: load-ratio-share
    type: related
    note: Uncollected defaults reach other participants through uplift allocation, which the IMM tied to unsecured credit limits in the 2021 event. [e58]
  - to: mass-transition
    type: related
    note: A Counter-Party's EAL can include an Incremental Load Exposure adjustment for POLR-qualified QSEs when another Counter-Party defaults and a Mass Transition occurs. [e19]
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
  - id: e12
    source: np-16
    locator: "Section 16.11, paragraph (2), definition of Remainder Collateral"
    quote: "The term “Remainder Collateral” in this Section means the Financial Security minus Total Potential Exposure Secured (TPES) minus Net Positive Exposure of approved Congestion Revenue Right (CRR) Bilateral Trades minus Available Credit Limit (ACL) locked for CRR Auction, calculated in accordance with paragraph (3) of Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation."
  - id: e13
    source: np-16
    locator: "Section 16.11.3, paragraph (1)(a)(iii), Letters of credit"
    quote: "Letters of credit must be issued by a bank or other financial institution that is acceptable to ERCOT, with a minimum rating of A- with S&P and Fitch and A3 with Moody’s. No letters of credit will be accepted from banks which are rated below A-/A3 by one or more rating agencies."
  - id: e14
    source: np-16
    locator: "Section 16.11.3, paragraph (1)(a)(iv)(A)"
    quote: "Each letter of credit issuer limit is also subject to an overall limit of $750 million per issuer."
  - id: e15
    source: np-16
    locator: "Section 16.11.4.1, paragraph (2), TPEA and TPES equations"
    quote: "TPEA = Max [0, MCE, Max [0, ((1-TOA) * EAL _(q) + TOA * EAL _(t) + EAL _(a))]] + PUL TPES = Max [0, FCE _(a)] + IA"
  - id: e16
    source: np-16
    locator: "Section 16.11.4.1, paragraph (2), variable table, PUL"
    quote: "Potential Uplift—Potential uplift to the Counter-Party, to the extent and in the proportion that the Counter-Party represents Entities to which an uplift of a short payment will be made pursuant to Section 9.19, Partial Payments by Invoice Recipients. It is calculated as the sum of: (a) Amounts expected to be uplifted within one year of the date of the calculation; and (b) the lesser of: (i) 25% of amounts expected to be uplifted beyond one year of the date of the calculation; or (ii) five years’ worth of uplift charges."
  - id: e17
    source: np-16
    locator: "Section 16.11.4.1, paragraph (2), parameter table"
    quote: "nm None 50 cif Percentage 9%"
  - id: e18
    source: np-16
    locator: "Section 16.11.4.1, paragraph (2), variable table, IMCE"
    quote: "IMCE = TOA * (DASWCAP * nm * cif%)"
  - id: e19
    source: np-16
    locator: "Section 16.11.4.3, Determination of Counter-Party Estimated Aggregate Liability, paragraph (1), variable table, ILE"
    quote: "Incremental Load Exposure—In the event of a Mass Transition necessitated by the default of a Counter-Party representing a QSE associated with an LSE, ERCOT may adjust the TPE of the Counter-Parties representing QSEs that are qualified as Providers of Last Resort (POLRs) to reflect the estimated Incremental Load Exposure (ILE) resulting from the Mass Transition."
  - id: e20
    source: np-16
    locator: "Section 16.11.4.3, paragraph (1), equation for EAL (QSE with Load or generation)"
    quote: "EAL _(q) = Max [IEL during the first 40-day period only beginning on the date that the Counter-Party commences activity in ERCOT markets, Max [ Max (RFAF * RTLE) during the previous lrqrtle days, RTLF] + DFAF * DALE + Max [RTLCNS, Max {URTA during the previous lrqurta days}] + OUT _(q) + ILE _(q)"
  - id: e21
    source: np-16
    locator: "Section 16.11.4.3, paragraph (1), variable table, RTLE"
    quote: "Real-Time Liability Extrapolated—M1 multiplied by the sum of the net amount, with zero substituted for missing values, due to or from ERCOT by the Counter-Party in the 14 most recent Operating Days for which RTM Initial Statements are produced for Counter-Parties according to the ERCOT Settlement Calendar divided by 14."
  - id: e22
    source: np-16
    locator: "Section 16.11.4.3, paragraph (1), variable table, DALE"
    quote: "Average Daily Day-Ahead Liability Extrapolated—M1 multiplied by the sum of the net amount, with zero substituted for missing values, due to or from ERCOT by the Counter-Party in the seven most recent Operating Days for which DAM Settlement Statements are produced for Counter-Parties according to the ERCOT Settlement Calendar divided by seven."
  - id: e23
    source: np-16
    locator: "Section 16.11.4.2, Determination of Counter-Party Initial Estimated Liability, paragraph (2)"
    quote: "IEL = DEL * Max [0.2, RTEFL] * RTAEP * (M1 + M2)"
  - id: e24
    source: np-16
    locator: "Section 16.11.4.2, paragraph (2), variable table, RTAEP"
    quote: "Average Settlement Point Price for the “ERCOT 345” as defined in Section 3.5.2.5, ERCOT Hub Average 345 kV Hub (ERCOT 345), based upon the previous seven days’ average Real-Time Settlement Point Prices."
  - id: e25
    source: np-16
    locator: "Section 16.11.4.5, Determination of the Counter-Party Future Credit Exposure, paragraph (1)"
    quote: "FCE _(a) = FCEOBL _(a) + FCEOPT _(a)"
  - id: e26
    source: np-16
    locator: "Section 16.11.4.5, paragraph (2), variable table, PWA"
    quote: "The portfolio weighted adder calculated as the 100^(th) percentile of a volume weighted average rolling consecutive DAM settled price for all CRR Account Holders represented by the Counter-Party as CRR Owner of record at ERCOT based on volumes owned for the month m, over a period that represents a month for each product type (18 days for 5*16, 8 days for 2*16, 28 days for 7*8)."
  - id: e27
    source: np-16
    locator: "Section 16.11.4.3.3, Forward Adjustment Factors, paragraph (1)"
    quote: "Forward adjustment factors are used to adjust TPEA based on electricity futures prices."
  - id: e28
    source: np-16
    locator: "Section 16.11.4.3.3, paragraph (1)(f)-(g)"
    quote: "(f) Real-Time Forward Adjustment Factor (RFAF): RFAF = PRFAP/HRSAP (g) Day-Ahead Forward Adjustment Factor (DFAF): DFAF = PDFAP/HDSAP"
  - id: e29
    source: np-16
    locator: "Section 16.11.4.6, Determination of Counter-Party Available Credit Limits, paragraph (1)(a)"
    quote: "ACLC for each Counter-Party equal to the maximum of zero and the net of its: (i) Secured Financial Security; minus (ii) (1+ACLIRF) * TPES; minus (iii) Net Positive Exposure of approved CRR Bilateral Trades; minus (iv) Maximum of: (A) Zero; and (B) ((1+ACLIRF) * TPEA)."
  - id: e30
    source: np-16
    locator: "Section 16.11.4.6, paragraph (1)(b)"
    quote: "ACLD for each Counter-Party equal to the maximum of zero and its: (i) Remainder Collateral; minus (ii) ACLIRF * TPES; minus (iii) (1+ACLIRF) * TPEA."
  - id: e31
    source: np-16
    locator: "Section 16.11.4.6, parameter table"
    quote: "ACLIRF Percentage 10% — ACL Incremental Risk Factor."
  - id: e32
    source: np-16
    locator: "Section 16.11.4.6.2, Credit Requirements for DAM Participation, paragraphs (1) and (3)"
    quote: "ERCOT shall impose a credit limit of the ACLD on each Counter-Party participating in the DAM."
  - id: e33
    source: np-16
    locator: "Section 16.11.4.6.2, paragraph (3)"
    quote: "A new credit limit will be sent to each Counter-Party participating in the DAM daily."
  - id: e34
    source: np-16
    locator: "Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation, paragraph (3)"
    quote: "ERCOT shall assign the ACL locked for CRR Auction for each Counter-Party participating in any CRR Auction as the lower of the Counter-Party’s: (a) Requested credit limit, as described in paragraph (1) above; (b) ACLC, calculated in accordance with paragraph (1)(a) of Section 16.11.4.6, Determination of Counter-Party Available Credit Limits, at the time of the closure of the CRR bid submission window; or (c) Pre-auction screening credit exposure amount, calculated in accordance with paragraph (2) of Section 7.5.5.3, Auction Process."
  - id: e35
    source: np-07
    locator: "Section 7.5.5.1, Creditworthiness, paragraph (1)"
    quote: "The CRR Auction system prevents a CRR Account Holder from being awarded bids and offers that exceed the lesser of the CRR Account Holder’s self-imposed credit limit or the credit limit as prescribed in Section 16.11.4.6.1, Credit Requirements for CRR Auction Participation."
  - id: e36
    source: np-04
    locator: "Section 4.4.10, Credit Requirement for DAM Bids and Offers, paragraphs (2)-(3)"
    quote: "DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party’s credit limit for DAM participation."
  - id: e37
    source: np-07
    locator: "Section 7.5.5.3, Auction Process, paragraph (2)"
    quote: "The calculated exposure for the pre-auction screening for each Counter-Party is the sum of the credit exposure for PTP Obligation bids, PTP Obligation offers, and PTP Option bids for that Counter-Party. PTP Option offers have zero credit exposure."
  - id: e38
    source: np-04
    locator: "Section 4.4.10, paragraph (3)"
    quote: "ERCOT shall reject the QSE’s individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party’s credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable."
  - id: e39
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(a)(i)"
    quote: "If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is less than or equal to zero, the bid exposure price for that quantity will equal zero."
  - id: e40
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(i)"
    quote: "ERCOT must re-examine DAM credit parameters immediately if Counter-Party exceeds 90% of its Available Credit Limit (ACL) available to DAM."
  - id: e41
    source: np-16
    locator: "Section 16.11.5, paragraph (5)"
    quote: "ERCOT may suspend a Counter-Party when: (a) That Counter-Party’s TPES as defined in Section 16.11.4, equals or exceeds 100% of its Financial Security; or (b) That Counter-Party’s TPEA as defined in Section 16.11.4 equals or exceeds 100% of its Remainder Collateral."
  - id: e42
    source: np-16
    locator: "Section 16.11.5, paragraph (6)(a)(i)"
    quote: "Until 1500 on the second Bank Business Day from the date on which ERCOT delivered the Notice to increase its Financial Security if ERCOT delivered its Notice before 1500; or"
  - id: e43
    source: np-16
    locator: "Section 16.11.5, paragraph (6)(c)-(d)"
    quote: "ERCOT is not required to make any payment to that Counter-Party unless and until the Counter-Party increases its Financial Security."
  - id: e44
    source: np-16
    locator: "Section 16.11.5, paragraph (6)(d)"
    quote: "ERCOT may reject any bids or offers in a CRR Auction from the Counter-Party until it has increased its Financial Security. ERCOT may reject any bids or offers from the Counter-Party in the DAM until it has increased its Financial Security."
  - id: e45
    source: np-16
    locator: "Section 16.11.5, paragraph (6)(b)"
    quote: "At the same time ERCOT notifies the Counter-Party that is the QSE, ERCOT may notify each LSE and Resource represented by the Counter-Party that the LSE or Resource may be required to designate a new QSE if its current QSE fails to increase its Financial Security."
  - id: e46
    source: np-16
    locator: "Section 16.11.6, Payment Breach and Late Payments by Market Participants, paragraph (3)"
    quote: "The failure of a Market Participant to pay when due any payment or Financial Security obligation owed to ERCOT or its designee, if applicable, under any Agreement with ERCOT, is a Late Payment and constitutes an event of Payment Breach."
  - id: e47
    source: np-16
    locator: "Section 16.11.6.2.5, Level I Enforcement, paragraph (1)(b)"
    quote: "If the Market Participant has already provided Financial Security, the Market Participant shall increase its Financial Security, within two Bank Business Days, to an amount at or above 110% of its TPE or any other liability to ERCOT that the Market Participant has or is expected to have for activity in the ERCOT Region, whichever applies."
  - id: e48
    source: np-16
    locator: "Section 16.11.6.2.6, Level II Enforcement, paragraph (1)"
    quote: "Under Level II Enforcement, ERCOT shall notify the Market Participant that the Market Participant shall provide Financial Security, within two Bank Business Days, in the form of a cash deposit or letter of credit, as chosen by ERCOT at its sole discretion, at 115% of the Market Participant’s TPE or for any other liability to ERCOT that the Market Participant has or is expected to have for activity in the ERCOT Region."
  - id: e49
    source: np-16
    locator: "Section 16.11.6.2.7, Level III Enforcement, paragraph (1)"
    quote: "Under Level III Enforcement, ERCOT shall notify the Market Participant that the Market Participant shall provide Financial Security within two Bank Business Days at 120% of the Market Participant’s TPE or for any other liability to ERCOT that the Market Participant has or is expected to have for activity in the ERCOT Region. Required Financial Security in excess of TPE must be in the form of a cash deposit."
  - id: e50
    source: np-16
    locator: "Section 16.11.6.2.7, paragraph (2)"
    quote: "Increased Financial Security requirements under this Section remain in effect for a minimum of 90 days and remain in effect thereafter until ERCOT, at its sole discretion, determines to reduce such Financial Security requirements to the normally applicable levels."
  - id: e51
    source: np-16
    locator: "Section 16.11.6.2.4, Fourth Late Payment in Any Rolling 12-Month Period, paragraph (1)"
    quote: "For the fourth Late Payment resulting from a Payment Breach in any rolling 12-month period, ERCOT shall take action under Section 16.11.6.1.6, Revocation of a Market Participant’s Rights and Termination of Agreements."
  - id: e52
    source: np-16
    locator: "Section 16.11.6.1.2, ERCOT May Draw On, Hold or Distribute Funds, paragraph (1)"
    quote: "Upon a Payment Breach, ERCOT, at its option, without notice to the Market Participant and in its sole discretion, may immediately, or at any time before the Market Participant pays the past due amount in full, including amounts due under Section 16.11.6.1.3, Aggregate Amount Owed by Breaching Market Participant Immediately Due, draw on, hold or distribute to other Market Participants any Financial Security or other funds of the Market Participant in ERCOT’s possession."
  - id: e53
    source: np-16
    locator: "Section 16.11.6.1.4, Repossession of CRRs by ERCOT, paragraph (1) (current text; NPRR1023 box would replace it)"
    quote: "ERCOT, at its sole discretion, may repossess CRRs held by a Market Participant with a Payment Breach or other Default."
  - id: e54
    source: np-16
    locator: "Section 16.11.7, Release of Market Participant’s Financial Security Requirement, paragraph (2)"
    quote: "Required Financial Security for potential future obligations of a terminated Market Participant will be the maximum of the Counter-Party’s TPE, as applicable, or $5,000."
  - id: e55
    source: np-16
    locator: "Section 16.11.8, Acceleration, paragraph (1)"
    quote: "Upon termination of a Market Participant’s rights as a Market Participant and any other agreement(s) between ERCOT and the Market Participant, all sums owed to ERCOT are immediately accelerated and are immediately due and owing in full."
  - id: e56
    source: np-26
    locator: "Section 26.3.1.2, Insufficient Payments by Invoice Recipients for Securitization Default Charge Invoices, paragraph (1)(b)"
    quote: "If available Securitization Default Charge escrow deposits are insufficient to cover the short-paid amount, ERCOT will utilize Financial Security held with respect to other ERCOT market activities as determined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure. ERCOT may not utilize Securitization Uplift Charge escrow deposits to cover short-pays of Securitization Default Charges."
  - id: e57
    source: np-26
    locator: "Section 26.5.2, ERCOT Securitization Default Charge Credit Requirements for Counter-Parties, paragraph (1)"
    quote: "A Counter-Party must, at all times, maintain its Securitization Default Charge escrow deposit at or above the amount of its Securitization Default Charge Credit Exposure (SDCCE)."
  - id: e58
    source: imm-som-2023
    locator: "page 73 (OCR), Day-Ahead Market Performance, collateral requirements"
    quote: "After the 2021 winter storm event, there were payment defaults by Counter-Parties with Unsecured Credit Limits, thereby increasing the potential default uplift amounts to other Market Participants. In response to this, ERCOT implemented NPRR 1112 on October 1, 2023, to eliminate all Unsecured Credit Limits and guarantee amounts in the ERCOT credit system."
  - id: e59
    source: imm-som-2024
    locator: "page 79 (OCR), Day-Ahead Market Performance, 3. Collateral Requirements"
    quote: "The average daily collateral total in 2024 was approximately $6.85 billion, marking an 11% decrease from 2023 and breaking the upward trend in ERCOT market collateral levels that had persisted since Winter Storm Uri in 2021. Much of this decline can be attributed to NPRR 1112, which disallows unsecured credit limits and guarantee amounts to be counted as collateral and requires market participants to fully collateralize their obligations with secured instruments such as letters of credit, cash deposits, or surety bonds."
  - id: e60
    source: imm-som-2021
    locator: "page 77 (OCR), Day-Ahead Market Performance, collateral requirements"
    quote: "(amounts owed but not paid) during the storm exceeded $3 billion, with several retail electric providers exiting the market and one electric cooperative seeking bankruptcy protection."
  - id: e61
    source: imm-som-2025
    locator: "page 76 (OCR), Day-Ahead Market Performance, 3. Collateral Requirements"
    quote: "ERCOT quantifies collateral requirements by Total Potential Exposure (TPE), which has two components. The first, TPEA (TPE-Any), is based on variation in wholesale prices and increases when prices are high. The second, TPES (TPE-Secured), is based on exposure to positional risk from CRRs."
  - id: e62
    source: imm-som-2025
    locator: "page 76 (OCR), Day-Ahead Market Performance, 3. Collateral Requirements, discussion of Figure 33"
    quote: "Figure 33 shows that over the last two years, TPES has been the larger component of TPE by a significant margin on average. Both years had relatively low wholesale energy prices and high CRR market participation."
  - id: e63
    source: imm-som-2025
    locator: "page 76 (OCR), Day-Ahead Market Performance, discussion of Figure 33"
    quote: "Taken together, TPE was almost the same in 2025 as in 2024. Similarly, the total collateral ERCOT held, which amounted to $6.86 billion in 2025, was nearly unchanged in nominal terms from 2024."
  - id: e64
    source: imm-som-2023
    locator: "page 73 (OCR), Day-Ahead Market Performance, collateral requirements"
    quote: "The average daily collateral total in 2023 was approximately $7.7 billion, nearly 20% higher than the average daily collateral total in 2022."
  - id: e65
    source: imm-som-2022
    locator: "page 73 (OCR), Day-Ahead Market Performance, collateral requirements"
    quote: "Though daily collateral totals in 2022 never exceeded the maximums seen in 2021 due to Winter Storm Uri, the average daily collateral total in 2022 was nearly 27% higher than 2020."
  - id: e66
    source: ercot-credit-faqs
    locator: "ERCOT Market Credit FAQs, What types of financial security/collateral are acceptable"
    quote: "Three types of financial security/collateral are acceptable: Cash, Letters of Credit and Surety Bonds."
  - id: e67
    source: ercot-credit-faqs
    locator: "ERCOT Market Credit FAQs, What are the consequences of paying an invoice or collateral request late?"
    quote: "The TPE will be increased by 110% for the first instance of late payment over a rolling 12-month period; and 115% and 120% for the second and third instances, respectively. Also for the third instance, the TPE can only be covered by cash collateral."
  - id: e68
    source: ercot-credit-faqs
    locator: "ERCOT Market Credit FAQs, What is the process for returning excess cash collateral? (bulleted note)"
    quote: "Excess collateral is defined as the total Financial Security (Cash, Letters of Credit and Surety Bond) less the sum of 1) TPEA, 2) TPES and 3) CRR Locked ACL."
  - id: e69
    source: ercot-credit-faqs
    locator: "ERCOT Market Credit FAQs, credit notifications table, Bi-monthly e-Factor updates"
    quote: "e-Factors for each Counter-Party are calculated and set every two weeks. e-Factors affect the calculated exposure of a Counter-Party’s bids and offers in the Day Ahead market and consequently the amount of Available Credit Limit a Counter-Party should have for its bids and offers to be accepted."
  - id: e70
    source: np-16
    locator: "Section 16.11.4.7, Credit Monitoring and Management Reports, paragraph (1)"
    quote: "ERCOT shall post twice each Business Day on the Market Information System (MIS) Certified Area each active Counter-Party’s credit monitoring and management related reports as listed below."
  - id: e71
    source: np-16
    locator: "Section 16.11.7 (pending NPRR1023 box, Section 16.11.8 insert; not yet in effect)"
    quote: "ERCOT may at its sole discretion initiate conversion of letters of credit, or surety bonds held as Financial Security to cash collateral."
---

## Definition

ERCOT requires each Counter-Party, meaning an Entity that is a QSE and/or a CRR Account Holder, to maintain Financial Security at or above its Total Potential Exposure (TPE). [e1][e2] TPE is the sum of "Total Potential Exposure Any" (TPEA), the positive net exposure not included in TPES, and TPES, the positive net exposure for Future Credit Exposure and the Independent Amount. [e3] The IMM describes TPEA as based on variation in wholesale prices (rising when prices are high) and TPES as based on exposure to positional risk from CRRs. [e61]

## How it works

**What counts as collateral.** Financial Security can be an unconditional, irrevocable letter of credit naming ERCOT as beneficiary, a surety bond, or cash collateral. [e8][e66] Letters of credit must come from banks rated at least A- (S&P and Fitch) or A3 (Moody's), and each issuer is subject to an overall limit of $750 million. [e13][e14] The IMM says ERCOT eliminated Unsecured Credit Limits and guarantee amounts through NPRR 1112 on October 1, 2023, so obligations must be covered by secured instruments. [e58][e59]

**The requirement.** ERCOT monitors and calculates each Counter-Party's TPEA and TPES daily. [e4] A Counter-Party must hold Financial Security at least equal to TPES plus the net positive exposure of approved CRR bilateral trades plus any credit limit locked for a CRR auction, and Remainder Collateral at least equal to TPEA. [e5] Remainder Collateral is Financial Security minus TPES, minus net positive exposure of approved CRR bilateral trades, minus the ACL locked for the CRR auction. [e12] ERCOT may also set a different TPEA or TPES if it judges the calculated value does not match the Counter-Party's financial risk. [e10]

**Warning, suspension and cure.** When TPEA or TPES reaches 90% of its requirement, ERCOT uses reasonable efforts to send a warning. [e6] ERCOT may suspend a Counter-Party when TPES equals or exceeds 100% of its Financial Security, or TPEA equals or exceeds 100% of its Remainder Collateral. [e41] The cure deadline is set in Bank Business Days: for a notice delivered before 1500, until 1500 on the second Bank Business Day. [e42] Until the Counter-Party increases its Financial Security, ERCOT need not pay it, and may reject its bids and offers in CRR auctions and the DAM. [e43][e44] ERCOT may also notify each LSE and Resource represented by the QSE that it may have to designate a new QSE. [e45] A suspension can include a CRR Account Holder's ability to bid on future CRRs or a QSE's ability to bid in the DAM. [e11]

**Late payments and enforcement.** A failure to pay when due, including a Financial Security obligation, is a Late Payment and constitutes a Payment Breach. [e46] In the Protocols, enforcement escalates with each late payment in a rolling 12 months: Level I requires Financial Security at or above 110% of TPE within two Bank Business Days, Level II requires 115% in cash or a letter of credit, and Level III requires 120% with the excess over TPE in cash and remains in effect at least 90 days. [e47][e48][e49][e50] The fourth late payment leads to revocation of rights and termination of agreements. [e51] ERCOT's FAQ summarizes this as 110%, 115% and 120% of TPE on the first, second and third late payments, with the third covered only by cash, and notes the Protocols control if they differ. [e67] On a Payment Breach ERCOT may immediately draw on, hold or distribute the Market Participant's Financial Security. [e52] It may also repossess CRRs held by a Market Participant with a Payment Breach (this paragraph is shown with a pending NPRR1023 replacement). [e53]

A pending change (NPRR1023, to take effect upon system implementation) would add a Section 16.11.8 under which ERCOT may at its sole discretion initiate conversion of letters of credit or surety bonds held as Financial Security to cash collateral. [e71]

**After termination.** ERCOT retains Financial Security for potential future obligations of a terminated Market Participant, set at the larger of its TPE or $5,000. [e54] On termination all sums owed to ERCOT are accelerated and ERCOT may draw on Financial Security to offset them. [e55]

## Formula

**TPE.** In the Protocols: [e15]

`TPEA = Max [0, MCE, Max [0, ((1-TOA) * EAL_q + TOA * EAL_t + EAL_a)]] + PUL` and `TPES = Max [0, FCE_a] + IA` [e15]

- EAL is Estimated Aggregate Liability, with separate terms for QSEs that represent Load or generation (q), QSEs that represent neither (t, trade-only) and CRR Account Holders (a); TOA is the Trade-Only Activity switch. [e15]
- PUL is potential uplift: amounts expected to be uplifted within a year, plus the lesser of 25% of amounts expected beyond a year or five years' worth of uplift charges. [e16]
- MCE is the Minimum Current Exposure floor, with an initial value IMCE = TOA * (DASWCAP * nm * cif%); the parameter table lists nm = 50 and cif = 9%. [e18][e17]
- FCE is Future Credit Exposure for CRRs, and IA is the Independent Amount. [e3]

**EAL for a QSE with Load or generation.** The Protocols' equation takes the Initial Estimated Liability for the first 40 days of market activity, otherwise the larger of the highest Real-Time Liability Extrapolated over a look-back (scaled by RFAF) and Real-Time Liability Forward, plus DFAF times the Day-Ahead Liability Extrapolated, plus the larger of the Real-Time Liability Completed and Not Settled and the highest Unbilled Real-Time Amount, plus Outstanding Unpaid Transactions and Incremental Load Exposure. [e20] RTLE is the multiplier M1 times the net amount due to or from ERCOT over the 14 most recent Operating Days with RTM Initial Statements, divided by 14; DALE is the same idea over seven DAM statement days. [e21][e22]

**Initial Estimated Liability.** For a Counter-Party whose QSEs represent only Load, IEL = DEL * Max[0.2, RTEFL] * RTAEP * (M1 + M2), where RTAEP is the previous seven days' average Real-Time price at ERCOT 345 (Hub Average 345 kV). [e23][e24]

**Forward adjustment.** ERCOT uses electricity futures prices to adjust TPEA: RFAF = PRFAP/HRSAP and DFAF = PDFAP/HDSAP, ratios of projected forward average prices to historic settled average prices. [e27][e28]

**FCE.** FCE = FCEOBL + FCEOPT, the future credit exposure of the CRR Account Holders' PTP Obligations and PTP Options. [e25] The PTP Obligation component uses the portfolio weighted adder, the 100th percentile of a volume-weighted rolling DAM settled price over a product-specific period. [e26]

**Available credit limits.** ACLC (CRR auction) = max(0, secured Financial Security - (1+ACLIRF)*TPES - net positive exposure of approved CRR bilateral trades - max(0, (1+ACLIRF)*TPEA)). [e29] ACLD (DAM) = max(0, Remainder Collateral - ACLIRF*TPES - (1+ACLIRF)*TPEA). [e30] The parameter table shows ACLIRF at 10%. [e31]

## Example

Suppose a Counter-Party has TPEA of $4 million, TPES of $10 million, no CRR bilateral trades or locked auction limit, and posts $15 million of Financial Security. Remainder Collateral is $15 million - $10 million = $5 million, which exceeds TPEA of $4 million, so it meets both requirements under paragraph (2). Its ACLD would be max(0, $5 million - 0.10 x $10 million - 1.10 x $4 million) = max(0, $5 million - $1 million - $4.4 million) = $0, so it could not bid further in the DAM even though it is compliant. [e5][e12][e30][e31]

## ERCOT context

Credit is tied directly to market access. Suspension of rights can include a CRR Account Holder's ability to bid on future CRRs or a QSE's ability to bid in the DAM. [e11] The DAM check works through the ACLD: ERCOT imposes a credit limit of the ACLD on each Counter-Party participating in the DAM, accepts bids and offers in the order submitted while exposure stays within that limit, rejects bids that exceed it, and sends a new limit daily. [e32][e36][e38][e33] A bid priced at or below zero gets a zero bid exposure price. [e39] ERCOT must re-examine DAM credit parameters immediately if a Counter-Party exceeds 90% of its ACL available to DAM. [e40] The FAQ notes that e-Factors affecting DAM bid exposure are calculated and set every two weeks. [e69] ERCOT posts the credit monitoring reports twice each Business Day. [e70]

For CRRs, a Counter-Party's auction credit limit is the lesser of its ACLC-based limit and any self-imposed limit, and the auction system cannot award bids beyond it; PTP Option offers carry zero credit exposure in the pre-auction screening. [e34][e35][e37]

The same Financial Security also backs other obligations: ERCOT may draw on it to pay short-paid Securitization Default Charge or Uplift Charge invoices if the escrow deposits are not enough, but Securitization Uplift Charge escrow cannot be used for short-pays of Securitization Default Charges. [e9][e56] Securitization Default Charge escrow is separately held at or above the Securitization Default Charge Credit Exposure. [e57]

**What the IMM reports.** The IMM says collateral surged after Winter Storm Uri: short payments exceeded $3 billion, with several retail electric providers exiting the market and one electric cooperative seeking bankruptcy protection. [e60] Average daily collateral in 2022 was nearly 27% higher than 2020, and in 2023 about $7.7 billion, nearly 20% higher than 2022. [e65][e64] In 2024 the average fell 11% to about $6.85 billion, which the IMM largely attributes to NPRR 1112. [e59] In 2025 total collateral held was $6.86 billion, nearly unchanged from 2024, and TPE was almost the same; over 2024 and 2025 TPES has been the larger component, in years of low energy prices and high CRR participation. [e63][e62]

## Key facts

- Counter-Parties must maintain Financial Security at or above TPE at all times. [e2]
- TPE = TPEA + TPES. [e3]
- ERCOT recalculates TPEA and TPES daily. [e4]
- When TPEA or TPES reaches 90% of its requirement, ERCOT uses reasonable efforts to issue a warning; at 100% ERCOT may suspend. [e6][e41]
- Late payment enforcement: 110% (Level I), 115% (Level II), 120% (Level III) of TPE; a fourth late payment in a rolling 12 months leads to revocation. [e47][e48][e49][e51]
- Unsecured Credit Limits were eliminated October 1, 2023 (NPRR 1112, per the IMM). [e58]
- Total collateral held was $6.86 billion in 2025 (IMM). [e63]

## Timeline

- 2021: Winter Storm Uri short payments exceed $3 billion (IMM). [e60]
- October 1, 2023: NPRR 1112 eliminates Unsecured Credit Limits and guarantee amounts (IMM). [e58]
- 2024: average daily collateral falls about 11% to about $6.85 billion. [e59]
- 2025: total collateral $6.86 billion, nearly unchanged. [e63]

## Say it like this

(Guidance) ERCOT measures each Counter-Party's exposure as TPE, recalculates TPEA and TPES daily, and requires Financial Security at or above it, with Remainder Collateral covering TPEA. Fall short and ERCOT may suspend the Counter-Party's rights, which can include DAM and CRR bidding. [e2][e4][e5][e11]

## Common confusion

TPE is the sum of TPEA and TPES [e3]; Section 16.11.1 states the requirement as Financial Security at or above TPE, and Section 16.11.5 spells out the requirement as Financial Security (against TPES and CRR items) and Remainder Collateral (against TPEA). [e2][e5] "Counter-Party" is the entity level, not each individual QSE registration. [e1] Being compliant with TPE is not the same as having room to bid: the ACLD and ACLC subtract an additional 10% risk factor. [e30][e29][e31] And "excess collateral" in the FAQ is defined as Financial Security less TPEA, TPES and the CRR locked ACL. [e68]

## Questions

### What is TPE?

The sum of TPEA and TPES, each a positive net exposure of the Counter-Party. A Counter-Party must keep Financial Security at or above it. [e2][e3]

### What can ERCOT do if a Counter-Party falls short?

It may suspend the Counter-Party's rights under the Protocols (which can include DAM and CRR bidding), withhold payments and reject its bids and offers until it posts more Financial Security. [e7][e11][e43][e44]

### How often is exposure recalculated?

Daily, for both TPEA and TPES. [e4]

### How is the amount a Counter-Party can bid in the DAM set?

It is the ACLD: Remainder Collateral minus ACLIRF times TPES minus (1 + ACLIRF) times TPEA, floored at zero, with ACLIRF listed at 10%. [e30][e31]

### Why did collateral requirements rise after Winter Storm Uri, and why did they fall in 2024?

The IMM ties the 2021 surge to the storm's price extremes and defaults, with short payments over $3 billion, and says 2022 and 2023 averages kept rising; in 2024 the average fell about 11%, which the IMM largely attributes to NPRR 1112, which stopped unsecured credit limits and guarantees counting as collateral. [e60][e65][e64][e59]

### What if a QSE's late payments keep recurring?

The enforcement levels escalate to 110%, 115% and 120% of TPE with the third requiring cash for the excess, and a fourth late payment in a rolling 12 months leads to action under Section 16.11.6.1.6, revocation of rights and termination of agreements. [e47][e48][e49][e51]

### Why does potential uplift appear in TPEA?

PUL adds the potential uplift to a Counter-Party that represents Entities to which a short payment will be uplifted, so a Counter-Party carries exposure for defaults it could be asked to share. [e16]

## Scenarios

### A REP posts collateral just above TPE ahead of a hot week. What can go wrong?

- TPEA rises as prices rise, since the IMM describes TPEA as based on variation in wholesale prices. [e61]
- At 90% of its requirement ERCOT uses reasonable efforts to warn; at 100% ERCOT may suspend. [e6][e41]
- It must cure by 1500 on the second Bank Business Day after a notice delivered before 1500. [e42]
- If it pays or posts late, Level I enforcement requires 110% of TPE. [e46][e47]

## Open items

- Resolved 2026-11-21: the EAL, IEL, FCE, ACL formulas, ACL for DAM and CRR, suspension and enforcement levels, and IMM collateral history are now sourced. Not fully covered: the complete EAL parameter table (M1d, M2, look-back days), the DAM credit parameter table (d, ep1 and related percentiles) and the full MCE equation, which are in table or equation text not quoted here.
- Unsecured credit limits by rating are not in the saved Section 16.11 text; the IMM says NPRR 1112 eliminated them effective October 1, 2023. The saved np-16 was not searched for any residual unsecured provision beyond that.
- The Section 16.11.6.1.4 and 16.11.7 text appears with pending NPRR1023 replacement boxes (repossession and liquidation of CRRs, conversion of letters of credit and surety bonds to cash); those changes are pending as of the saved text.
- NPRR1188 changes to the MCE and RTL variables (CLR and WSL treatment) appear in pending boxes in 16.11.4; not described here.
- The IMM figures for 2021 to 2023 collateral are given only as averages or comparisons; Figures 32 and 33 values are charts and are not quoted.
- Securitization Uplift Charge escrow (np-27 Section 27.5) was only touched on through np-26; its LASUCCE calculation was not read.
