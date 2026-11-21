---
id: virtual-bids
name: Virtuals (Energy-Only Offers & Bids)
aliases: [virtual bids, virtual offers, virtuals, DAM Energy-Only Offer, DAM Energy Bid, energy-only offer]
kind: product
domain: pricing
level: 1
lenses: [trading, analyst]
depth: deep
as_of: 2026-11-21
links:
  - to: dam
    type: part-of
    note: Both instruments may be made only in the DAM, and both are submitted by 1000 for the effective DAM. [e1][e14][e15][e5]
  - to: dart-spread
    type: related
    note: The IMM describes virtual bids and offers as location-specific transactions, and says market participants arbitrage predictable differences between day-ahead and real-time prices. [e7][e12]
  - to: ptp-obligation
    type: related
    note: A QSE may not combine energy-only offers, energy bids and PTP Obligation bids to create the net effect of a PTP between electrically similar points. [e4]
  - to: three-part-supply-offer
    type: contrasts-with
    note: A Three-Part Supply Offer is Resource-specific, while a DAM Energy-Only Offer Curve is not. [e1]
  - to: settlement-point
    type: related
    note: Each offer and bid is at a specific Settlement Point, and the payment or charge for cleared quantities is calculated from that point's Day-Ahead Settlement Point Price. [e1][e2][e16][e17]
  - to: qse
    type: related
    note: Only a QSE can submit these offers and bids. [e15][e5]
  - to: ruc
    type: related
    note: Virtual offers have no Resource and no Startup Offer, so they are separate from the three-part offers RUC uses for commitments. [e1]
  - to: ancillary-services
    type: related
    note: Since December 6, 2025 the DAM has also allowed virtual AS positions, which are strictly financial positions. [e11]
  - to: rtc-b
    type: related
    note: With RTC the IMM says day-ahead AS awards function as financial positions like energy awards. [e37]
  - to: credit-tpe
    type: related
    note: A QSE's DAM bids and offers must fit within the Counter-Party's credit limit for DAM participation. [e23]
  - to: trading-hub
    type: related
    note: Hubs are one of the Settlement Point types at which DAM bids and offers settle in Real-Time as imbalance. [e9]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Day-Ahead Market (DAM) Energy-Only Offer"
    quote: "A QSE’s willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. DAM Energy-Only Offer Curves are not Resource-specific."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Day-Ahead Market (DAM) Energy Bid"
    quote: "A proposal to buy energy in the DAM at a Settlement Point at a monotonically non-increasing price with increasing quantity."
  - id: e3
    source: np-04
    locator: "Section 4.4.9.5.1, DAM Energy-Only Offer Curve Criteria, paragraph (2)"
    quote: "A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh."
  - id: e13
    source: np-04
    locator: "Section 4.4.9.5.1, paragraph (3)"
    quote: "The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW."
  - id: e4
    source: np-04
    locator: "Section 4.4.9.5.1, paragraph (4)"
    quote: "DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party."
  - id: e5
    source: np-04
    locator: "Section 4.4.9.6, DAM Energy Bids, paragraph (1)"
    quote: "A QSE must submit any DAM Energy Bids by 1000 for the effective DAM."
  - id: e15
    source: np-04
    locator: "Section 4.4.9.5, DAM Energy-Only Offer Curves, paragraph (1)"
    quote: "A QSE must submit any DAM Energy-Only Offer Curves by 1000 for the effective DAM."
  - id: e14
    source: np-04
    locator: "Section 4.4.9.6, paragraph (2)"
    quote: "A DAM Energy Bid represents the QSE’s willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM."
  - id: e6
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment, paragraph (1)"
    quote: "The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves."
  - id: e7
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section C, Day-Ahead Market Activity"
    quote: "an energy-only, or virtual, bid or offer, which is a locationspecific transaction submitted either as a hedge or for speculative purposes."
  - id: e8
    source: np-04
    locator: "Section 4.6.2.2, Day-Ahead Energy Charge, paragraph (1)"
    quote: "The Day-Ahead Energy Charge is made for all cleared DAM Energy Bids or cleared purchases from the bid portion of Energy Bid/Offer Curves."
  - id: e9
    source: np-06
    locator: "Section 6.6.3.3, Real-Time Energy Imbalance Payment or Charge at a Hub, paragraph (1)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Hub Settlement Point: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (d) The amount of its Self-Schedules with source specified at the Settlement Point; minus (e) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (f) The amount of its Energy Trades at the Settlement Point where the QSE is the seller."
  - id: e10
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section C, 1. Day Ahead Market Volume"
    quote: "In 2025, dayahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years."
  - id: e11
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT"
    quote: "Since December 6, 2025, the day-ahead market has also allowed transactions in virtual AS, i.e., strictly financial positions that are not associated with any physical resources."
  - id: e12
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing"
    quote: "These conditions allow market participants to arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence."
  - id: e16
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment, paragraph (1), formula"
    quote: "The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p)"
  - id: e17
    source: np-04
    locator: "Section 4.6.2.2, Day-Ahead Energy Charge, paragraph (1), formula"
    quote: "This charge to each QSE for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAEPAMT _(q, p) = DASPP _(p) * DAEP _(q, p)"
  - id: e18
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section B, Day-Ahead Energy Market Pricing"
    quote: "Price convergence between the day-ahead and real-time markets is important because it leads to more efficient commitment of resources for use in real-time."
  - id: e19
    source: np-04
    locator: "Section 4.4.9.5.1, paragraph (1)(c)(iii)"
    quote: "(iii) If a curve, a monotonically non-decreasing energy offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;"
  - id: e20
    source: np-04
    locator: "Section 4.4.9.6.1, paragraph (1)(c)(iii)"
    quote: "(iii) If a curve, a monotonically non-increasing energy bid curve for price (in $/MWh) and monotonically increasing for quantity (in MW) with no more than 10 price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity."
  - id: e21
    source: np-04
    locator: "Section 4.4.9.6.1, paragraph (2)"
    quote: "The minimum amount for each DAM Energy Bid that may be bid is one MW."
  - id: e22
    source: np-04
    locator: "Section 4.4.9.5.2, paragraph (2)"
    quote: "ERCOT shall notify the QSE submitting a DAM Energy-Only Offer Curve by the Messaging System if the offer was rejected or was considered invalid for any reason, with the exception of paragraph (4) of Section 4.4.9.5.1. The QSE may then resubmit the offer within the appropriate market timeline."
  - id: e23
    source: np-04
    locator: "Section 4.4.10, paragraph (1)"
    quote: "Each QSE’s ability to bid and offer in the DAM is subject to credit exposure from the QSE’s bids and offers being within the credit limit for DAM participation established for the entire Counter-Party of which the QSE is part, as specified in item (1) of Section 16.11.4.6.2, Credit Requirements for DAM Participation, and taking into account the credit exposure of accepted DAM bid and offers of the Counter-Party’s other QSEs."
  - id: e24
    source: np-04
    locator: "Section 4.4.10, paragraph (2)"
    quote: "DAM bids and offers of all QSEs of the Counter-Party are accepted in the order submitted while ensuring that the credit exposure from accepted bids and offers do not exceed the Counter-Party’s credit limit for DAM participation."
  - id: e25
    source: np-04
    locator: "Section 4.4.10, paragraph (3)"
    quote: "ERCOT shall reject the QSE’s individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party’s credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable."
  - id: e26
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(a)(i)"
    quote: "If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is less than or equal to zero, the bid exposure price for that quantity will equal zero."
  - id: e27
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(a)(ii)"
    quote: "If the price of the DAM Energy Bid or the price on the bid portion of an Energy Bid/Offer Curve is greater than zero, the bid exposure price for that quantity will equal the greater of zero or the sum of (A) and (B):"
  - id: e28
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(a)(ii)(A)-(B)"
    quote: "(A) The lesser of: (1) The d^(th) percentile of the Day-Ahead Settlement Point Price (DASPP) for the hour over the previous 30 days; and (2) The bid price. (B) The value e1 multiplied by (bid price minus (A)) when the bid price is greater than (A)."
  - id: e29
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(b)(ii)"
    quote: "That has an offer price that is greater than the a^(th) percentile of the DASPP for the hour over the previous 30 days, credit exposure will be increased by the product of the quantity of the offer multiplied by the dp^(th) percentile of the hourly difference between Real-Time Settlement Point Price and DASPP (where any negative differences are set to zero) over the previous 30 days for the hour multiplied by e3."
  - id: e30
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(i)"
    quote: "The value of each exposure adjustment e1, e2, and e3 is a value between zero and one, rounded to the nearest hundredth decimal place, set by ERCOT by Counter-Party."
  - id: e31
    source: np-04
    locator: "Section 4.4.10, paragraph (8)"
    quote: "Beginning no later than 0800 and ending at 0945 each Business Day, ERCOT shall post to the MIS Certified Area, approximately every 15 minutes, each active Counter-Party’s remaining Available Credit Limit (ACL) for that day’s DAM and the time at which the report was run."
  - id: e32
    source: np-06
    locator: "Section 6.6.3.1, paragraph (1)(b)-(g)"
    quote: "(b) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (c) The amount of its Day-Ahead Market (DAM) Energy Bids cleared in the DAM at the Settlement Point; plus (d) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (e) The amount of its Self-Schedules with source specified at the Settlement Point; minus (f) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (g) The amount of its Energy Trades at the Settlement Point where the QSE is the seller."
  - id: e33
    source: np-06
    locator: "Section 6.6.3.2, paragraph (1)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:"
  - id: e34
    source: imm-som-2024
    locator: "Day-Ahead Market Performance, section C, 1. Day Ahead Market Volume (page 38 (OCR))"
    quote: "In 2024, the volume of day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 61% of real-time load, in line with recent years."
  - id: e35
    source: imm-som-2023
    locator: "Day-Ahead Market Performance, Day Ahead Market Volume (OCR)"
    quote: "of generator-specific offers (also known as three-part offers) and virtual energy offers was 59% of real-time load in 2023, remaining at the volume observed in 2022."
  - id: e36
    source: imm-som-2025
    locator: "Executive summary, RTC discussion (OCR)"
    quote: "Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves."
  - id: e37
    source: imm-som-2025
    locator: "Appendix, section B, Convergence between DAM and RT (page A-4 (OCR))"
    quote: "In the previous market design, AS awards from the day-ahead market effectively created a physical obligation to provide reserves in real time. With the implementation of RTC, AS awards in the day-ahead market now function as financial positions, like energy awards."
  - id: e38
    source: imm-som-2025
    locator: "Appendix, Table A2 (page 163 (OCR))"
    quote: "Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420"
  - id: e39
    source: imm-som-2025
    locator: "Appendix, section B, after Table A2 (OCR)"
    quote: "Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices."

---

## Definition

The IMM describes an energy-only, or virtual, bid or offer as a location-specific transaction submitted as a hedge or for speculative purposes. [e7] In the Protocols the instruments at a Settlement Point in the DAM are the DAM Energy-Only Offer (a QSE's willingness to sell energy at or above a price at a specific Settlement Point in the DAM) [e1] and the DAM Energy Bid (a proposal to buy energy in the DAM at a Settlement Point). [e2][e14] The saved Protocol text does not itself say that every DAM Energy Bid is a virtual.

## How it works

Both instruments can be made only in the DAM, and a QSE must submit them by 1000 for the effective DAM. [e1][e15][e5] Unlike a Three-Part Supply Offer, a DAM Energy-Only Offer Curve is not tied to a Resource. [e1] An offer curve must fall between -$250.00 per MWh and the DAM system-wide offer cap, with a minimum of one MW. [e3][e13] An offer curve is monotonically non-decreasing in price and quantity with at most ten price/quantity pairs and no more than two consecutive pairs at the same price or quantity. [e19] A bid curve is monotonically non-increasing in price and increasing in quantity, with the same limits on pairs, and a DAM Energy Bid has a one MW minimum. [e20][e21] If ERCOT rejects an offer as invalid it notifies the QSE through the Messaging System and the QSE may resubmit within the market timeline, except where the offer breaks the rule against combining virtuals into a synthetic PTP. [e22]

A cleared offer is paid, and a cleared bid is charged, based on the Day-Ahead Settlement Point Price at its Settlement Point. [e6][e8][e16][e17] The position does not stay in the DAM: the cleared quantities enter the QSE's Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price. At a Hub the amounts are DAM Energy Bids cleared (added) and energy offers cleared (subtracted), alongside self-schedules and energy trades. [e9] The Resource Node calculation lists the same DAM cleared bids and offers, [e32] and the Load Zone calculation is built the same way (the Load Zone text is quoted only by its header here). [e33] The cleared quantity is therefore paid or charged at the Day-Ahead Settlement Point Price in the DAM and again, in the imbalance calculation, at the Real-Time Settlement Point Price. [e16][e17][e9]

There is a guard against disguising a congestion position: energy-only offers, energy bids and PTP Obligation bids may not be combined to create the net effect of one PTP Obligation between electrically similar Settlement Points. [e4]

**Credit for DAM bids and offers.** A QSE's ability to bid and offer in the DAM is subject to its credit exposure being within the credit limit for DAM participation set for the whole Counter-Party, taking into account the other QSEs' accepted bids and offers. [e23] Bids and offers of all of a Counter-Party's QSEs are accepted in the order submitted so long as accepted exposure does not exceed that limit. [e24] ERCOT rejects an individual bid or offer whose exposure exceeds the limit and notifies the QSE through the MIS Certified Area. [e25]

Bid exposure: a DAM Energy Bid priced at or below zero has a bid exposure price of zero. [e26] For a bid priced above zero, the exposure price is the greater of zero or the sum of (A) the lesser of the d-th percentile of the Day-Ahead Settlement Point Price for the hour over the previous 30 days and the bid price, and (B) a factor e1 times the amount by which the bid price exceeds (A). [e27][e28] Exposure is the quantity of the bid times that bid exposure price. [e27] Offer exposure: for a DAM Energy-Only Offer priced above the a-th percentile of the hourly DASPP over the previous 30 days, exposure is increased by the offer quantity times the dp-th percentile of the positive hourly difference between Real-Time and Day-Ahead Settlement Point Prices over the previous 30 days times e3. [e29] The exposure adjustment values e1, e2 and e3 are each between zero and one, rounded to the nearest hundredth, and set by ERCOT by Counter-Party. [e30] The percentile parameters a, d and dp are not given as numbers in the saved text. During the morning each Business Day, from no later than 0800 to 0945, ERCOT posts each active Counter-Party's remaining Available Credit Limit for that day's DAM approximately every 15 minutes. [e31]

## ERCOT context

Day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 59% of real-time load in 2023 (as the IMM's 2023 report states, remaining at the 2022 volume), 61% in 2024 and 62% in 2025, which the IMM calls in line with recent years. [e35][e34][e10] The IMM says market participants can arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence. [e12]

Since December 6, 2025, the DAM has also allowed virtual Ancillary Service positions, which are strictly financial positions not associated with any physical resources. [e11] The IMM describes these as financial hedges on the real-time price for reserves. [e36] With the implementation of RTC, the IMM says day-ahead AS awards no longer create a physical obligation to provide reserves in real time but function as financial positions, like energy awards. [e37] In the IMM's Table A2 (labelled "December 5, 2026, through February 2026" in the OCR, which appears to be a typo for 2025), the day-ahead average price was $50.21 per MWh for energy against $37.03 in real time, a 36% DART premium; for ECRS the day-ahead average was $3.67 against $0.71 in real time, a 420% premium. [e38] The IMM says virtual offers for AS were not introduced until December 6, so physical-resource offers drove the elevated prices on RTC go-live day. [e39]

## Key facts

- DAM Energy-Only Offers are not Resource-specific; both offers and bids are DAM-only and due by 1000. [e1][e15][e5]
- Offer curves must lie between -$250.00 per MWh and the DASWCAP, with a one MW minimum. [e3][e13]
- Cleared offers are paid and cleared bids are charged using the Day-Ahead Settlement Point Price. [e6][e8][e16][e17]
- Virtuals may not be combined with PTP Obligation bids to replicate a PTP between electrically similar points. [e4]
- A bid priced at or below zero carries zero bid exposure price in the DAM credit calculation. [e26]
- Day-ahead purchases through generator-specific and virtual offers: 59% of real-time load in 2023, 61% in 2024, 62% in 2025. [e35][e34][e10]
- Virtual AS positions have been allowed in the DAM since December 6, 2025. [e11]

## Say it like this

A virtual is the IMM's term for an energy-only bid or offer at a Settlement Point, which is not tied to a Resource. The cleared quantity settles at the day-ahead price and then enters the real-time imbalance calculation at the real-time price, so the position earns or loses the difference between the two. The IMM links arbitrage of day-ahead versus real-time differences to price convergence. [e12]

## Common confusion

Virtuals are not PTP Obligations. A virtual is a single-location energy position at one Settlement Point. [e1][e2] A PTP Obligation bid names a source and a sink (see the PTP Obligation topic). The IMM also uses "virtual" for the new day-ahead Ancillary Service positions, which are a separate product from energy virtuals. [e11] A virtual is also not exempt from credit: DAM bids and offers are tested against the Counter-Party's DAM credit limit. [e23]

## Questions

### What is the difference between a DAM Energy-Only Offer and a Three-Part Supply Offer?

An Energy-Only Offer is a willingness to sell at a Settlement Point and is not Resource-specific. [e1] A Three-Part Supply Offer is tied to a Resource (see the Three-Part Supply Offer topic). In the DAM, payment goes to either kind of cleared sale. [e6]

### How does a virtual position close out?

It is cleared in the DAM at its Settlement Point, and the cleared quantity then enters the Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price, as the Hub and Resource Node texts show. [e6][e9][e32]

### Why might the IMM care about virtual activity?

Because market participants can arbitrage predictable day-ahead and real-time differences, resulting in price convergence, and the IMM says convergence leads to more efficient commitment of resources for use in real-time. [e12][e18]

### Why do virtual AS positions exist under RTC?

Under RTC day-ahead AS awards are financial positions like energy awards, and the IMM expects virtual AS positions in day-ahead clearing to lead to greater convergence between day-ahead and real-time AS prices. [e37][e11]

### What happens if a QSE's virtual bids exceed its Counter-Party's DAM credit limit?

Bids and offers are accepted in the order submitted until the limit would be exceeded; ERCOT rejects an individual bid or offer whose exposure exceeds the limit and notifies the QSE. [e24][e25]

### What if a QSE tries to build a PTP out of two virtuals?

The Protocols prohibit combining energy-only offers, energy bids and PTP Obligation bids to create the net effect of a single PTP between electrically similar Settlement Points, for the QSE or any combination of QSEs in the same Counter-Party. [e4]

## Open items

- The protocols saved here never use the word "virtual"; the term comes from the IMM report. [e7]
- The saved sources do not say whether every DAM Energy Bid is a virtual: the protocol definition of a DAM Energy Bid does not mention who may submit it or why.
- The Load Zone imbalance quantity list (np-06 Section 6.6.3.2) was cited only by its header; the Resource Node and Hub lists are quoted.
- The credit percentile parameters (a, d, dp) and the default values for e1 to e3 (paragraph (10)) were not read into this entry.
- IMM profitability of virtuals and volume by Settlement Point: the saved IMM text gives only the share of real-time load; no table of virtual volumes or profits was found.
- Virtual AS rules under RTC: np-04 Section 4.4.7 as saved does not use the word "virtual" and describes Ancillary Service Only Offers (priced at $0 or more per MW up to the DASWCAP, minimum 0.1 MW); how these relate to the IMM's virtual AS positions is not stated in the saved text.
- Table A2 period: the OCR header reads "December 5, 2026, through February 2026"; the text beside it refers to December 5, 2025 and January 2026, so the year looks like an OCR or typographical error.
