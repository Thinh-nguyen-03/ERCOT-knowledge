---
id: exchanges-ice-nodal
name: ICE & Nodal Exchange
aliases: [ICE, ICE Futures U.S., ICE ERCOT futures, ERN, NEB, Nodal Exchange, ICE OTC, NGX]
kind: entity
domain: trading
level: 2
lenses: [trading, portfolio, structuring]
depth: deep
as_of: 2026-11-21
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
    note: The IMM lists participating in futures markets among the ways LSEs manage price exposure. [e20]
  - to: forward-curve
    type: related
    note: Monthly exchange contracts out to 50 consecutive periods are the kind of listed price points a forward curve is built from. [e5]
  - to: heat-rate
    type: related
    note: The ICE Panhandle heat rate contract settles on an agreed heat rate times the NYMEX last-day settlement price. [e14]
  - to: implied-heat-rate
    type: related
    note: Heat rate contracts price power as a multiple of the gas price, the same ratio the IMM tracks as implied heat rate. [e14]
  - to: crr
    type: contrasts-with
    note: The ICE peak hours match the CRR 5x16 block hours, but ICE futures are exchange contracts and CRRs are auctioned by ERCOT. [e10][e13][e17]
  - to: dam
    type: contrasts-with
    note: The IMM names the day-ahead and CRR markets as ERCOT's two forward markets; the ICE contracts are not among them. [e19]
  - to: ppa-vppa
    type: related
    note: The IMM lists bilateral PPAs and futures as separate hedging routes for LSEs. [e20]
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
  - id: e10
    source: ice-ercot-north-peak
    locator: "Reference Price A, b) Pricing Date"
    quote: "Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date"
  - id: e11
    source: ice-ercot-north-peak
    locator: "Reference Price A, c) Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e12
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Final Settlement"
    quote: "Final Settlement Average of Reference Price A Prices"
  - id: e13
    source: ice-ercot-north-offpeak
    locator: "Reference Price A, c) Specified Price"
    quote: "For each Monday through Friday, excluding NERC holidays, the average of SPPs for all hours ending 0100-0600, 2300-2400 CPT; for each Saturday, Sunday, and NERC holiday, the average of SPPs for all hours ending 0100-2400 CPT"
  - id: e14
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Final Settlement"
    quote: "Final settlement will be determined by multiplying the actual heat rate entered into at the time of the transaction by the NYMEX Last Day Settlement Price for the relevant delivery month."
  - id: e15
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, header, Contract Size and Listing Cycle"
    quote: "ICE OTC November 21, 2026 ERCOT Panhandle Heat Rate 345kV Hub Off-Peak Contract Specifications"
  - id: e16
    source: ref-ice-ercot-heat-rate
    locator: "Contract Specifications, Daily Settlement and Payment Dates"
    quote: "Payment due on the 20th of the month following the Delivery Period by wire transfer of Federal Funds, unless otherwise stated by a master agreement between the Buyer and Seller."
  - id: e17
    source: np-07
    locator: "Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, paragraph (5)(a)"
    quote: "5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips;"
  - id: e18
    source: ref-ice-ercot-heat-rate
    locator: "Contract Specifications, Last Trading Day and Daily Settlement"
    quote: "Daily settlement will be determined by NGX using price data from a number of sources including, spot, forward and derivative markets for both physical and financial products"
  - id: e19
    source: imm-som-2025
    locator: "Executive Summary, page 12 (OCR)"
    quote: "ERCOT operates three distinct wholesale markets: the real-time market and two forward markets—the day-ahead market, which allows market participants to take financial positions on energy and ancillary services, and the CRR market, a series of auctions in which market participants can bid for the right to revenues derived from congestion rent."
  - id: e20
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e21
    source: ref-ferc-energy-primer
    locator: "Chapter 5, Trading and Capital Markets, Contract Types: Cash Settled Energy Futures"
    quote: "Cash Settled Energy Futures: After passage of the Dodd-Frank Act,220 many financially settled energy contracts traded on electronic brokerage platforms are cleared cash, settled energy futures contracts."
  - id: e22
    source: ref-ferc-energy-primer
    locator: "Chapter 5, Trading and Capital Markets, Exchanges and electronic brokerage platforms"
    quote: "ICE also offers natural gas and electricity contracts (both in cash-settled energy futures and physical OTC contracts), as well as emissions allowances. Nodal Exchange offers locational (nodal) futures contracts to market participants in the organized electricity markets, as well as electricity contracts for forward months at RTO hubs, zones, and nodes."
  - id: e23
    source: ref-ferc-energy-primer
    locator: "Chapter 5, Trading and Capital Markets, Contract Types: Futures (page break)"
    quote: "and are traded on centralized exchanges, futures markets generally are more liquid than forward markets."
  - id: e24
    source: ref-ferc-energy-primer
    locator: "Chapter 5, Trading and Capital Markets, Margin"
    quote: "Margin is collateral contributed as a percentage of the current market value of a commodity contract. Margin allows market participants to trade without having to pay cash for the full value of the trade."
  - id: e25
    source: ref-ferc-energy-primer
    locator: "Chapter 5, Trading and Capital Markets, Over-the-Counter Markets"
    quote: "OTC transactions are not required to be standardized; they range from complicated negotiations for one-off structured contracts to standardized contracts traded through an electronic brokerage platform. The ability to tailor a contract to the exact needs of the counterparties is one of the chief benefits of OTC markets."
  - id: e26
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 (July 2026), Bilateral Trades slide"
    quote: "Bilateral Trades Decentralized Forward Market • QSE-to-QSE transactions • Transfers settlement responsibility"
  - id: e27
    source: ice-ercot-north-offpeak
    locator: "Contract Specifications, Contract Symbol"
    quote: "Contract Symbol NEB Settlement Method Cash settlement Contract Size 1 MW Currency USD"
  - id: e28
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 (July 2026), Day-Ahead Market slide"
    quote: "Centralized Forward Market • Conducted daily • Facilitated by ERCOT"
  - id: e29
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, page 72 (OCR)"
    quote: "Only a small share of the power produced in ERCOT is settled in the real-time market. However, real-time energy prices shape price expectations in the day-ahead and bilateral forward markets."
  - id: e30
    source: np-02
    locator: "Section 2.1, definition of On-Peak Hours"
    quote: "Hours ending in 0700 to 2200 CPT from Monday through Friday excluding NERC holidays."
  - id: e31
    source: ut-uri-timeline
    locator: "Section 3, economic impacts, footnote 134 (p. 65)"
    quote: "A commitment might result from the sale of energy through a purchased power agreement (PPA), some other out-of-market bilateral contract between a generator and a counterparty, the sale of generation through a nonERCOT market such as the Intercontinental Exchange (ICE), or an award in ERCOT’s formal day-ahead market."
---

## Definition

ICE Futures U.S. lists monthly cash-settled futures on ERCOT power, including the ERCOT North 345KV Real-Time Peak and Off-Peak Fixed Price Futures. Each is based on the average of daily prices built from the hourly electricity prices ERCOT publishes for the reference location. [e9][e1][e2]

## How it works

**Contract terms (saved specifications dated 18 November 2026).** The contract settles in cash against the "ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME" price published by ERCOT. [e3] The size is 1 MW, the price is quoted in US dollars per MWh with a one-cent price quotation convention (the specification says minimum price fluctuation may vary by trade type), and up to 50 consecutive monthly contract periods can be listed. [e4][e3][e8][e5] Trading ends on the last business day of the contract period, and the final payment date is the sixth clearing organization business day after that. [e6][e7] The final settlement is the average of the Reference Price A prices. [e12]

**Peak versus off-peak.** The peak contract (symbol ERN) prices each Monday through Friday, excluding NERC holidays, and the daily price is the average of the settlement point prices for hours ending 0700-2200 CPT. [e4][e10][e11] The off-peak contract (symbol NEB) uses, for each weekday excluding NERC holidays, the average of the SPPs for hours ending 0100-0600 and 2300-2400 CPT, and for each Saturday, Sunday and NERC holiday the average for all hours ending 0100-2400 CPT. [e27][e13] The Protocols' definition of On-Peak Hours (hours ending 0700 to 2200 CPT, Monday through Friday excluding NERC holidays) and the CRR auction's 5x16 block use the same hours. [e30][e17]

**Monthly price from daily prices.** The Description says the contract is based on the mathematical average of daily prices, each calculated by averaging the peak (or off-peak) hourly prices ERCOT publishes for the reference location. [e1][e2] The Reference Price description says the price for a Pricing Date is that day's Specified Price per MWh for the Delivery Date, published by ERCOT. [e3]

**A second type: OTC heat rate contract.** ICE also publishes an OTC (not futures) specification for an ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract. [e15] Its final settlement is the heat rate agreed at the time of the transaction multiplied by the NYMEX last-day settlement price for the delivery month, and payment is due on the 20th of the month after the delivery period unless a master agreement says otherwise. [e14][e16] Daily settlement of that contract is determined by NGX from price data across spot, forward and derivative markets. [e18]

**What an exchange is, in general (FERC staff primer, tier 2, not ERCOT-specific).** FERC's staff primer says many financially settled energy contracts traded on electronic brokerage platforms are, after Dodd-Frank, cleared cash-settled energy futures contracts. [e21] It says futures markets generally are more liquid than forward markets because futures are traded on centralized exchanges. [e23] It describes margin as collateral posted as a percentage of the current market value of a contract, which lets participants trade without paying cash for the full value. [e24] It also describes OTC markets as bilateral, where tailoring a contract to the counterparties' needs is a chief benefit. [e25]

## ERCOT context

The saved ICE specifications show the ERCOT North 345KV Hub real-time price is the underlying for the exchange-traded power future, which settles in cash on a monthly average of the published prices. [e1][e3] ERCOT itself runs the day-ahead and CRR forward markets (the IMM's description); the ICE contracts sit outside them, and ERCOT's own training describes the DAM as a centralized forward market facilitated by ERCOT and bilateral trades as a decentralized forward market of QSE-to-QSE transactions. [e19][e28][e26]

The UT Austin report on Winter Storm Uri lists ICE as a "nonERCOT market" through which generation may be sold, alongside PPAs, other bilateral contracts and ERCOT day-ahead awards. [e31] Real-time prices are the reference point for all of these. The IMM says only a small share of power is settled in real time, but real-time prices shape price expectations in the day-ahead and bilateral forward markets. [e29] The ICE contracts reference the real-time hub price directly. [e3]

For market participants, the IMM lists participating in futures markets among the ways LSEs manage price exposure, alongside owning generation, bilateral PPAs and day-ahead purchases. [e20]

FERC's primer says Nodal Exchange offers locational (nodal) futures contracts to market participants in the organized electricity markets, as well as electricity contracts for forward months at RTO hubs, zones and nodes; it does not say which ERCOT products Nodal Exchange lists. [e22]

## Key facts

- ICE Futures U.S. is the listing exchange for the contracts in the saved futures specifications; the heat rate specification is headed "ICE OTC". [e9][e15]
- Contract size is 1 MW (futures). [e4]
- Listing cycle is up to 50 consecutive monthly contract periods (futures). [e5]
- Last trading day is the last business day of the contract period. [e6]
- Final payment is the sixth clearing organization business day after the last trading day. [e7]
- ERN (peak) averages hours ending 0700-2200 CPT on weekdays excluding NERC holidays; NEB (off-peak) covers hours ending 0100-0600 and 2300-2400 on weekdays and all hours on weekends and NERC holidays. [e4][e11][e27][e13]
- The heat rate OTC contract settles at an agreed heat rate times the NYMEX last-day settlement price. [e14]

## Say it like this

(Guidance) ICE lists monthly cash-settled ERCOT North power futures, peak and off-peak, that settle against ERCOT's real-time hub prices. They give market participants a standardized way to lock in a monthly price without a bilateral contract. ICE also has an OTC heat rate contract that prices power as a multiple of the gas settlement price.

## Common confusion

These ICE futures settle on real-time prices, not day-ahead prices. [e3] They are listed by ICE Futures U.S., not by ERCOT; the specification refers to hourly prices published by ERCOT. [e9][e1] Do not confuse the ICE peak and off-peak futures (cash-settled on the hub price) with the heat rate contract, which is OTC and settles on a heat rate times a NYMEX gas price. [e14] Do not confuse exchange futures with ERCOT's CRRs: both use similar peak hours, but the CRR is a right auctioned by ERCOT. [e17][e19]

## Questions

### What does the ICE ERCOT North peak future settle against?

A monthly average of ERCOT-published peak hourly prices at the ERCOT North 345KV Hub real-time price, using hours ending 0700-2200 CPT on weekdays excluding NERC holidays. [e1][e3][e10][e11]

### How far out can the contracts be listed?

Up to 50 consecutive monthly contract periods. [e5]

### Which hours does the off-peak contract cover?

Weekdays excluding NERC holidays: hours ending 0100-0600 and 2300-2400 CPT; Saturdays, Sundays and NERC holidays: all hours ending 0100-2400. [e13]

### Why might a retailer use an exchange future rather than a bilateral forward?

FERC's primer says futures markets generally are more liquid than forward markets because the contracts are standardized and traded on centralized exchanges, while OTC contracts allow tailoring to the counterparties' needs. [e23][e25] The cost of the exchange route is margin: collateral posted as a percentage of the contract's current market value. [e24]

### What if a hedger holds a peak future but is exposed to day-ahead prices?

The future settles against the real-time price, so it does not lock in the day-ahead price. [e3] The IMM says real-time prices shape day-ahead and bilateral forward price expectations, which is why the two are linked but not identical. [e29]

### How is the heat rate contract different from the ERN future?

The ERN future settles in cash on the average of ERCOT hub prices. [e1] The heat rate contract settles on the agreed heat rate times the NYMEX last-day settlement price for the delivery month, and is specified as OTC with payment on the 20th of the following month. [e14][e16][e15]

## Open items

- Nodal Exchange: no saved source describes its ERCOT products. The FERC primer (tier 2) describes it generically. Needed: a Nodal Exchange contract specification or rulebook for ERCOT products.
- Deeper pass: ICE ERCOT day-ahead, hub-zone and other contracts are still not saved (only the North real-time peak and off-peak futures and the Panhandle off-peak heat rate OTC specification), and the clearing organization is not named in the saved specifications ("Clearing Organization" only).
- Volumes, open interest and liquidity for ERCOT contracts are not in the saved sources. The FERC primer's liquidity statement is general to futures, not ERCOT.
- The ICE spec does not state how many hours a 1 MW contract covers per delivery period (per hour vs. per block), so no worked payoff arithmetic is given.
- Margin levels and clearing house rules for the ERCOT contracts: not in saved sources.
- Resolved 2026-11-21: peak/off-peak hours and Reference Price definitions added from the two ICE specifications and np-07 Section 7.3; np-07 7.3 covers CRR blocks only and does not mention ICE.
