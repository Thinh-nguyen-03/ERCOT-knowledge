---
id: dam
name: Day-Ahead Market (DAM)
aliases: [DAM, Day-Ahead Market, day-ahead]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, congestion, retail]
as_of: 2026-11-18
links:
  - to: rtm
    type: contrasts-with
    note: The RTM settles on 15-minute intervals from SCED prices, while the DAM settles on one-hour intervals from the DAM clearing. [e3]
  - to: ptp-obligation
    type: composed-of
    note: PTP Obligation bids are cleared in the DAM and settled on the Settlement Point Price difference between sink and source. [e10]
  - to: virtual-bids
    type: related
    note: DAM Energy Bids and DAM Energy-Only Offer Curves are instruments in the DAM. [e7][e9]
  - to: three-part-supply-offer
    type: related
    note: Three-Part Supply Offers are one of the offer types the DAM clears, and the IMM reports how little of the DAM energy they represent. [e16]
  - to: spp
    type: determines
    note: DAM Settlement Point Prices come from DAM LMPs and are final at 1000 of the second Business Day after the Operating Day. [e8][e11]
  - to: dart-spread
    type: related
    note: The IMM reports the average DAM price premium and average absolute price difference for 2025. [e13]
  - to: settlement-statements
    type: settles
    note: Related topic for DAM settlement statements and invoices.
  - to: ancillary-services
    type: related
    note: The DAM co-optimizes Ancillary Service capacity with energy, and since RTC the awards are financial positions. [e1][e15]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Day-Ahead Market (DAM)"
    quote: "A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions."
  - id: e2
    source: np-04
    locator: "Section 4.1, Introduction, paragraphs (1)-(2)"
    quote: "The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions."
  - id: e3
    source: np-04
    locator: "Section 4.1, Introduction, paragraph (3)"
    quote: "DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval."
  - id: e4
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (1)"
    quote: "At 1000 in the Day-Ahead, ERCOT shall start the Day-Ahead Market (DAM) clearing process."
  - id: e5
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (4)"
    quote: "The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand Curves (ASDCs), minus the offer-based costs over the Operating Day, subject to security and other constraints."
  - id: e6
    source: np-04
    locator: "Section 4.5.2, Communicating DAM Results, paragraph (1)"
    quote: "As soon as practicable, but no later than 1330 in the Day-Ahead, ERCOT shall notify the parties to each cleared DAM transaction (e.g., the buyer and the seller) of the results of the DAM as follows:"
  - id: e7
    source: np-04
    locator: "Section 4.4.9.6, DAM Energy Bids, paragraphs (1)-(2)"
    quote: "A QSE must submit any DAM Energy Bids by 1000 for the effective DAM."
  - id: e8
    source: np-04
    locator: "Section 4.6.1.1, Day-Ahead Settlement Point Prices for Resource Nodes"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e9
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment"
    quote: "The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves."
  - id: e10
    source: np-04
    locator: "Section 4.6.3, Settlement for PTP Obligations Bought in DAM"
    quote: "ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e11
    source: np-04
    locator: "Section 4.5.2, Communicating DAM Results, paragraph (6)"
    quote: "All DAM LMPs, MCPCs, and Settlement Point Prices are final at 1000 of the second Business Day after the Operating Day."
  - id: e12
    source: np-04
    locator: "Section 4.1.2, Day-Ahead Process and Timing Deviations, paragraph (2)"
    quote: "ERCOT may omit any procedure or take any manual action necessary to ensure, to the greatest extent practicable, that the DAM clearing process completes by 1900 in the Day-Ahead."
  - id: e13
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh."
  - id: e14
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The day-ahead market cleared 62% of real-time load in 2025."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets"
    quote: "Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e17
    source: puct-25-501
    locator: "16 TAC §25.501(c), Day-ahead energy market"
    quote: "Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract."
  - id: e16
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load."
---

## Definition

The Day-Ahead Market is a daily, co-optimized market run the day before the Operating Day for forward financial energy, Ancillary Services, and congestion transactions. [e1][e2] PUCT rule 25.501 requires ERCOT to operate a voluntary day-ahead energy market. [e17]

## How it works

A QSE must submit DAM Energy Bids by 1000 in the Day-Ahead, and ERCOT starts the DAM clearing process at 1000. [e7][e4] The DAM clearing is a multi-hour mixed integer program that maximizes bid-based revenues minus offer-based costs over the Operating Day, subject to security and other constraints. [e5] ERCOT must notify the parties to each cleared transaction of the results no later than 1330 in the Day-Ahead. [e6]

Settlement uses DAM Settlement Point Prices for a one-hour Settlement Interval, built from DAM LMPs. [e3] A Resource Node's DAM price is simply its DAM LMP for the hour. [e8] Sellers whose energy offers clear receive the Day-Ahead Energy Payment, and a cleared PTP Obligation bid is paid or charged the sink-minus-source price difference. [e9][e10]

ERCOT can intervene to make sure the DAM finishes. It may omit a procedure or take a manual action so that clearing completes by 1900 in the Day-Ahead. [e12] DAM prices become final at 1000 of the second Business Day after the Operating Day. [e11]

## ERCOT context

The IMM's 2025 report says that with RTC, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. [e15]

The DAM cleared 62% of real-time load in 2025, and three-part offers were 58% of DAM energy sold and served 36% of real-time load. [e14][e16] The IMM reports a $1.17/MWh average DAM price premium and a $12/MWh average absolute price difference for 2025. [e13]

## Key facts

- PUCT rule 25.501 calls for a voluntary day-ahead energy market. [e17]
- DAM Energy Bids are due by 1000 in the Day-Ahead; clearing starts at 1000. [e7][e4]
- Results are communicated no later than 1330 in the Day-Ahead. [e6]
- DAM settles hourly, versus 15-minute intervals in real time. [e3]
- DAM prices are final at 1000 of the second Business Day after the Operating Day. [e11]
- 2025: DAM cleared 62% of real-time load; average DAM premium $1.17/MWh. [e14][e13]

## Say it like this

The day-ahead market is ERCOT's voluntary forward market where energy, ancillary services and PTP congestion positions are cleared the day before, on hourly prices. It lets you lock in a price and a congestion position, and whatever you do not take there is settled at real-time prices.

## Common confusion

The DAM is financial, not a physical commitment: a DAM energy award is settled against real-time prices, with imbalances settled in real time. [e15]
## Questions

### What is cleared in the DAM and when?

Energy offers and bids, Ancillary Service capacity and PTP Obligation bids are cleared together. [e1][e2][e5] DAM Energy Bids are due by 1000, clearing starts at 1000, and results go out by 1330. [e7][e4][e6]

### How does DAM settlement differ from real-time settlement?

The DAM uses one-hour Settlement Intervals with DAM Settlement Point Prices, while real time uses 15-minute intervals. [e3] Real-time prices are the ones that settle any imbalance against a DAM position. [e15]

### Did the DAM clear at a premium or a discount in 2025?

At a modest premium: the IMM reports an average premium of $1.17/MWh and an average absolute difference of $12/MWh. [e13]

## Open items

- The DAM timeline figure in Section 4.1.1 is an image and could not be quoted; the 1000, 1330 and 1900 times come from the text of Sections 4.4, 4.5 and 4.1.2.
- Credit limits for DAM bids and offers (Section 4.4.10) were not summarized here.
- Pending NPRR1188 changes to DAM energy bid curves (box in Section 4.5.1) are not described as current rules.
