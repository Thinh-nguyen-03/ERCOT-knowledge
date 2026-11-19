---
id: virtual-bids
name: Virtuals (Energy-Only Offers & Bids)
aliases: [virtual bids, virtual offers, virtuals, DAM Energy-Only Offer, DAM Energy Bid, energy-only offer]
kind: product
domain: pricing
level: 1
lenses: [trading, analyst]
as_of: 2026-11-18
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
---

## Definition

The IMM describes an energy-only, or virtual, bid or offer as a location-specific transaction submitted as a hedge or for speculative purposes. [e7] In the Protocols the instruments at a Settlement Point in the DAM are the DAM Energy-Only Offer (a QSE's willingness to sell energy at or above a price at a specific Settlement Point in the DAM) [e1] and the DAM Energy Bid (a proposal to buy energy at a Settlement Point in the DAM). [e2][e14] The saved Protocol text does not itself say that every DAM Energy Bid is a virtual.

## How it works

Both instruments can be made only in the DAM, and a QSE must submit them by 1000 for the effective DAM. [e1][e15][e5] Unlike a Three-Part Supply Offer, a DAM Energy-Only Offer Curve is not tied to a Resource. [e1] An offer curve must fall between -$250.00 per MWh and the DAM system-wide offer cap, with a minimum of one MW. [e3][e13]

A cleared offer is paid, and a cleared bid is charged, based on the Day-Ahead Settlement Point Price at its Settlement Point. [e6][e8][e16][e17] The position does not stay in the DAM: at a Hub, for example, the amounts of DAM Energy Bids and energy offers cleared in the DAM are included in the QSE's Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price. [e9] At a Hub, the cleared quantity is therefore paid or charged at the Day-Ahead Settlement Point Price in the DAM and again, in the imbalance calculation, at the Real-Time Settlement Point Price. [e16][e17][e9]

There is a guard against disguising a congestion position: energy-only offers, energy bids and PTP Obligation bids may not be combined to create the net effect of one PTP Obligation between electrically similar Settlement Points. [e4]

## ERCOT context

In 2025 day-ahead energy purchased through generator-specific offers and virtual energy offers equaled 62% of real-time load, in line with recent years. [e10] The IMM says market participants can arbitrage predictable differences between day-ahead and real-time prices, resulting in price convergence. [e12]

Since December 6, 2025, the DAM has also allowed virtual Ancillary Service positions, which are strictly financial positions not associated with any physical resources. [e11]

## Key facts

- DAM Energy-Only Offers are not Resource-specific; both offers and bids are DAM-only and due by 1000. [e1][e15][e5]
- Offer curves must lie between -$250.00 per MWh and the DASWCAP, with a one MW minimum. [e3][e13]
- Cleared offers are paid and cleared bids are charged using the Day-Ahead Settlement Point Price. [e6][e8][e16][e17]
- Virtuals may not be combined with PTP Obligation bids to replicate a PTP between electrically similar points. [e4]
- Virtual AS positions have been allowed in the DAM since December 6, 2025. [e11]

## Say it like this

A virtual is the IMM's term for an energy-only bid or offer at a Settlement Point, which is not tied to a Resource. At a Hub, the Protocol text shows the DAM-cleared quantity also entering the real-time imbalance calculation at the real-time price. The IMM links arbitrage of day-ahead versus real-time differences to price convergence. [e12]

## Common confusion

Virtuals are not PTP Obligations. A virtual is a single-location energy position at one Settlement Point. [e1][e2] A PTP Obligation bid names a source and a sink (see the PTP Obligation topic). The IMM also uses "virtual" for the new day-ahead Ancillary Service positions, which are a separate product from energy virtuals. [e11]

## Questions

### What is the difference between a DAM Energy-Only Offer and a Three-Part Supply Offer?

An Energy-Only Offer is a willingness to sell at a Settlement Point and is not Resource-specific. [e1] A Three-Part Supply Offer is tied to a Resource (see the Three-Part Supply Offer topic). In the DAM, payment goes to either kind of cleared sale. [e6]

### How does a virtual position close out?

It is cleared in the DAM at its Settlement Point, and the cleared quantity then enters the Real-Time Energy Imbalance calculation at the Real-Time Settlement Point Price, as the Hub text shows. [e6][e9]

### Why might the IMM care about virtual activity?

Because market participants can arbitrage predictable day-ahead and real-time differences, resulting in price convergence, and the IMM says convergence leads to more efficient commitment of resources for use in real-time. [e12][e18]

## Open items

- The protocols saved here never use the word "virtual"; the term comes from the IMM report. [e7]
- The saved sources do not say whether every DAM Energy Bid is a virtual: the IMM calls an energy-only (virtual) bid or offer a location-specific transaction, while the protocol definition of a DAM Energy Bid does not mention who may submit it or why.
- Deeper pass: the real-time energy imbalance treatment at Resource Nodes and Load Zones (np-06 Sections 6.6.3.1 and 6.6.3.2), and how DAM-cleared energy-only offers at a Resource Node are settled.
- Deeper pass: credit requirements for DAM bids and offers (np-04 Section 4.4.10), and any caps on volumes.
- Deeper pass: IMM figures on virtual volume and profitability, and 2024 comparisons; the saved IMM text only gives the 62% total. Table numbers need the OCR copies, which are not saved.
- Deeper pass: virtual AS rules under RTC (np-04 Section 4.4.7).
