---
id: exchanges-ice-nodal
name: ICE & Nodal Exchange
aliases: [ICE, ICE Futures U.S., ICE ERCOT futures, ERN, NEB, Nodal Exchange]
kind: entity
domain: trading
level: 2
lenses: [trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: block-products
    type: related
    note: The ICE ERCOT North contracts come as a peak and an off-peak monthly block. [e1][e2]
  - to: hb-north
    type: related
    note: The ICE ERCOT North peak contract settles on the ERCOT North 345KV Hub real-time price. [e3]
  - to: trading-hub
    type: related
    note: ICE's reference price is an ERCOT-published hub settlement price. [e3]
  - to: rtm
    type: determines
    note: The peak contract settles against the real-time price published by ERCOT for the North 345KV Hub. [e3]
  - to: dart-spread
    type: related
    note: ICE futures settle against real-time prices rather than day-ahead prices, so they bear on how forwards compare with real-time outcomes. [e3]
  - to: retail-hedging
    type: related
    note: The ICE contracts are named Fixed Price Futures and settle in cash against the real-time price. [e9][e3]
evidence:
  - id: e1
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Description"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e2
    source: ice-ercot-north-offpeak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, Description"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the off-peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e3
    source: ice-ercot-north-peak
    locator: "Reference Price A, (a) Description"
    quote: "\"ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME\" means that the price for a Pricing Date will be that day's Specified Price per MWh of electricity for delivery on the Delivery Date, stated in U.S. Dollars, published by the ERCOT"
  - id: e4
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Contract Size"
    quote: "Contract Symbol ERN Settlement Method Cash settlement Contract Size 1 MW Currency USD"
  - id: e5
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Listing Cycle"
    quote: "Listing Cycle Up to 50 consecutive monthly Contract Periods"
  - id: e6
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Last Trading Day"
    quote: "Last Trading Day The last Business Day of the Contract Period"
  - id: e7
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Final Payment Date"
    quote: "Final Payment Date The sixth Clearing Organization business day following the Last Trading Day"
  - id: e8
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Minimum Price Fluctuation"
    quote: "The price quotation convention shall be One cent ($0.01) per MWh; minimum price fluctuation may vary by trade type."
  - id: e9
    source: ice-ercot-north-peak
    locator: "Contract Specifications, header and Contract Symbol"
    quote: "ICE Futures U.S. November 18, 2026 ERCOT North 345KV Real-Time Peak Fixed Price Future Contract Specifications"
---

## Definition

ICE Futures U.S. lists monthly cash-settled futures on ERCOT power, including the ERCOT North 345KV Real-Time Peak and Off-Peak Fixed Price Futures. Each is based on the average of daily prices built from the hourly electricity prices ERCOT publishes for the reference location. [e9][e1][e2]

## How it works

The contract settles in cash against the "ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME" price published by ERCOT. [e3] The size is 1 MW, the price is quoted in US dollars per MWh with a one-cent price quotation convention (the specification says minimum price fluctuation may vary by trade type), and up to 50 consecutive monthly contract periods can be listed. [e4][e3][e8][e5] Trading ends on the last business day of the contract period, and the final payment date is the sixth clearing organization business day after that. [e6][e7]

The peak contract averages the peak hourly prices and the off-peak contract averages the off-peak hourly prices; the specific hours are in the block-products topic. [e1][e2]

## ERCOT context

The saved ICE peak specification shows that the ERCOT North 345KV Hub real-time price is the underlying for this exchange-traded power future, which settle in cash on a monthly average of the published prices. [e1][e3] The saved sources contain no information on Nodal Exchange.

## Key facts

- ICE Futures U.S. is the listing exchange for the contracts in the saved specifications. [e9]
- Contract size is 1 MW. [e4]
- Listing cycle is up to 50 consecutive monthly contract periods. [e5]
- Last trading day is the last business day of the contract period. [e6]
- Final payment is the sixth clearing organization business day after the last trading day. [e7]

## Say it like this

(Guidance) ICE lists monthly cash-settled ERCOT North power futures, peak and off-peak, that settle against ERCOT's real-time hub prices. They give market participants a standardized way to lock in a monthly price without a bilateral contract.

## Common confusion

These ICE futures settle on real-time prices, not day-ahead prices. [e3] They are listed by ICE Futures U.S., not by ERCOT; the specification refers to hourly prices published by ERCOT. [e9][e1]

## Questions

### What does the ICE ERCOT North peak future settle against?

A monthly average of ERCOT-published peak hourly prices at the ERCOT North 345KV Hub real-time price. [e1][e3]

### How far out can the contracts be listed?

Up to 50 consecutive monthly contract periods. [e5]

## Open items

- Nodal Exchange: no saved source describes it. Needed: a Nodal Exchange contract specification or rulebook for ERCOT products.
- Deeper pass: ICE ERCOT day-ahead, hub-zone and other contracts (only the North real-time peak and off-peak specs are saved), and the clearing organization.
- Deeper pass: volumes, open interest and liquidity are not in the saved sources.
