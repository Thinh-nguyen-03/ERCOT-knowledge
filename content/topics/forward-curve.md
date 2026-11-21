---
id: forward-curve
name: Forward Curve
aliases: [forward curve, forward price curve, futures curve, forward strip, term structure of prices]
kind: concept
domain: trading
level: 2
depth: deep
basis: industry-reference
lenses: [analyst, trading, portfolio, retail, structuring]
as_of: 2026-11-21
links:
  - to: block-products
    type: composed-of
    note: Power forward and swap prices are quoted by delivery month and time-of-day bucket, such as ERCOT's 5x16 peak and the off-peak complement. [e15][e16]
  - to: exchanges-ice-nodal
    type: related
    note: ICE lists ERCOT North peak futures for up to 50 consecutive monthly contract periods, which gives an exchange-traded ERCOT forward curve. [e17][e18]
  - to: dam
    type: related
    note: ERCOT's training describes the Day-Ahead Market as the centralized forward market, conducted daily and facilitated by ERCOT. [e21]
  - to: rtm
    type: determines
    note: The IMM says real-time prices shape price expectations in the day-ahead and bilateral forward markets. [e19]
  - to: dart-spread
    type: measures
    note: The IMM uses the convergence of day-ahead (forward) prices with real-time prices as a primary indicator of forward market performance. [e20]
  - to: retail-hedging
    type: used-in
    note: Hedging is transacting at a known price now to avoid transacting at an unknown price later. [e23]
  - to: heat-rate-call-option
    type: used-in
    note: Option moneyness is judged against the forward price curve at expiry. [e25][e26]
  - to: spark-spread
    type: related
    note: A forward spark spread or forward heat rate combines the power and gas forward curves for the same delivery period. [e27][e24]
  - to: natural-gas-price
    type: related
    note: The NYMEX natural gas futures contract trades more than eight years out, though only the first few years trade actively. [e1]
evidence:
  - id: e1
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (January 2024), Chapter 5, sidebar 'Forward and Futures Curves' (p. 124)"
    quote: "Standardized forwards, futures, and swaps are traded for every month, years into the future. The NYMEX natural gas futures contract, for example, is traded more than eight years into the future although only the first few years are actively traded. Each of the monthly contracts for which trading occurs has a price. Together, the prices for future contract months create a trajectory of prices known as the forward or futures curve."
  - id: e2
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project (Powerex tolling), Chapter 3, trading concepts (forward contracts and swaps)"
    quote: "Determining the price for forward contracts involves looking at the forward price curves. These show the price that would be paid today for delivery and payment of the good for dates in the future. The prices need to be adjusted to incorporate risk tolerance and the net expense of the good based on predicted spot prices."
  - id: e3
    source: ref-nzea-forward-curve
    locator: "New Zealand Electricity Authority (a foreign regulator; ASX New Zealand futures), 'Accuracy of the forward price curve'"
    quote: "The trading of electricity futures provides a ‘forward price curve’. This curve represents the futures market’s aggregate view of the wholesale price of electricity at given periods of time in the future."
  - id: e4
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Contract Types, Physical Forward Contract"
    quote: "A forward contract is an agreement between two parties to receive or deliver a commodity at a specified time in the future. A forward contract is often used for physical delivery. The buyer pays an agreed-upon forward purchase price and the seller delivers the natural gas or electricity on the designated date. The product is physically settled with delivery."
  - id: e5
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Contract Types, Financial Forward Contract"
    quote: "Forward contracts may also be financially settled when no delivery of a commodity takes place, also known as a swap contract. A financially settled contract, also referred to as cash settled, has the parties paying and receiving in cash the loss or gain based on the price of the underlying product."
  - id: e6
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Contract Types, Physical Futures Contract"
    quote: "A futures contract is a standardized forward contract that is traded on an exchange, such as CME’s NYMEX"
  - id: e35
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Physical Futures Contract, continued on p. 123"
    quote: "and are traded on centralized exchanges, futures markets generally are more liquid than forward markets."
  - id: e7
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Examples of Contracts, Electricity Forward Contract"
    quote: "In the electric industry, the Edison Electric Institute (EEI) Master Power Purchase and Sale Agreement is a commonly used contract that can be employed for forward sales of power. Transacting parties may make a bilateral sale by agreeing to transaction-specific values for price, quantity, delivery location, and period of delivery, among other details pertinent to the negotiated transaction."
  - id: e8
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, discussion of price processes (forward price curves)"
    quote: "Each day that power and gas are traded, a new forward price curve for each commodity is created. These forward price curves evolve over time, with previously distant delivery months getting progressively closer to the current day, or spot market."
  - id: e9
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, discussion of price processes (Term Structure of Volatility)"
    quote: "This availability of market and fundamental information, combined with the existence of a 'real-time' (next hour) power market to balance generation with actual loads, leads to extremely high price volatilities in the real-time, next day, and balance-of-week portions of the forward price curve and increasingly lower volatilities as the prices of distant months, quarters and years are observed through trading volumes."
  - id: e10
    source: ref-nzea-forward-market
    locator: "New Zealand Electricity Authority (a foreign regulator), 'The forward electricity market explained', What influences forward prices?"
    quote: "Hydro storage, as explained in our article on how hydro storage impacts spot prices, tends to heavily impact short-dated future prices, making them potentially more volatile than long-dated future prices."
  - id: e11
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, discussion of price processes"
    quote: "Also, greater volumes of energy are traded in near months and weeks than in distant periods, leading to increased price discovery and detailed reactions to conditions in the near months and weeks."
  - id: e12
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides, 'Tolling Deals' (G. Swindle, 2013), slide 25, Daily Tolls: Working Problem"
    quote: "Most tolls trade for tenors of 5-7 years. - This is well outside the liquidity window at which individual contract months trade."
  - id: e13
    source: ref-nzea-forward-market
    locator: "New Zealand Electricity Authority (a foreign regulator), 'The forward electricity market explained', How are forward prices determined?"
    quote: "Forward prices reflect expectations of future electricity demand and generation costs. These prices are determined by market buyers and sellers and therefore represent the consensus view of future prices."
  - id: e14
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 7, Power Market Mechanics: Linear Instruments: Heatrates (PJM forward curve)"
    quote: "The seasonality in both arises from (well-founded) expectations that loads will be higher in summer and to a lesser extent winter months. - This forces expected clearing prices higher up the stack into more expensive units."
  - id: e15
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 5, Power Market Mechanics: Linear Instruments"
    quote: "Fixed price swaps settle on the monthly average realized spot price for a prescribed bucket."
  - id: e16
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Description"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e17
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Listing Cycle"
    quote: "Listing Cycle Up to 50 consecutive monthly Contract Periods"
  - id: e18
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North peak future, Reference Price A (b) Pricing Date and (c) Specified Price"
    quote: "Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date c) Ref Price A - Specified Price Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e19
    source: imm-som-2025
    locator: "Chapter I, Review of Real-Time Market Outcomes, A. Real-Time Market Highlights"
    quote: "Only a small share of the power produced in ERCOT is settled in the real-time market. However, real-time energy prices shape price expectations in the day-ahead and bilateral forward markets. Real-time prices are, therefore, the principal driver of prices in the markets where most transactions occur and inform long-term investment and retirement decisions."
  - id: e20
    source: imm-som-2025
    locator: "Chapter II, Day-Ahead Market Performance, B. Day-Ahead Energy Market Pricing"
    quote: "A primary indicator of forward market performance is the extent to which forward prices converge with real-time prices. Prices should converge when: (1) barriers to purchases and sales in either market are low, (2) sufficient information is available for market participants to develop accurate expectations of real-time prices, and (3) both markets accurately reflect the physical limitations of the transmission network."
  - id: e21
    source: ref-ercot-forward-markets-101
    locator: "ERCOT training, Forward Markets 101 (2026), slide 16, Day-Ahead Market"
    quote: "Centralized Forward Market • Conducted daily • Facilitated by ERCOT"
  - id: e22
    source: ref-ercot-forward-markets-101
    locator: "ERCOT training, Forward Markets 101 (2026), slide 31, Bilateral Trades"
    quote: "Decentralized Forward Market • QSE-to-QSE transactions • Transfers settlement responsibility"
  - id: e23
    source: ref-ercot-forward-markets-101
    locator: "ERCOT training, Forward Markets 101 (2026), slide 12, Hedging and Price Certainty"
    quote: "Hedging is transacting at a known price now … … to protect from having to transact at an unknown price later."
  - id: e24
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Listing Cycle and Final Settlement"
    quote: "Final settlement will be determined by multiplying the actual heat rate entered into at the time of the transaction by the NYMEX Last Day Settlement Price for the relevant delivery month."
  - id: e25
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, option valuation (intrinsic and extrinsic value)"
    quote: "An 'at-the-money' option has a strike price equal to the forward price curve at the time of expiry."
  - id: e26
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 11, Valuing Tolls: A Monthly Example, Relevant Data"
    quote: "This is higher than the deal heatrate H∗ = 11.0 - The option is in-the-money."
  - id: e27
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 6, Linear Instruments: Heatrates"
    quote: "Power swaps often trade as heat-rates: - A power buy/sell is associated with a sell/buy of a specified volume of natural gas, both over the same delivery period."
  - id: e28
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Mark-to-Market"
    quote: "Mark-to-Market is an accounting methodology that provides a daily update of the value of a portfolio of market positions, all revalued to current market prices."
  - id: e29
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 3, trading concepts (mark-to-market)"
    quote: "This is the measure of realized and unrealized profits and losses (P&L) of the contract by calculating the realized income from the delivered position of the contract, and comparing the market price for the undelivered portions of the contract to the prior trade price."
  - id: e30
    source: ref-nzea-forward-market
    locator: "New Zealand Electricity Authority (a foreign regulator), 'The forward electricity market explained', What influences forward prices?"
    quote: "Other factors which can impact forward prices are seasonal climate expectations, namely the possibility of either an El Niño or its sister La Niña."
  - id: e31
    source: ref-montel-optimisation
    locator: "Montel blog (vendor), 'How to optimise generation portfolios across spot and forward power markets' (2025), How liquidity, volatility, and depth differ"
    quote: "Volatility in the energy market tends to be directly related to lower liquidity, which is a common characteristic of the forward market, with price swings a frequent occurrence."
  - id: e32
    source: imm-som-2024
    locator: "Chapter on market power, Evaluation of supplier conduct (introduction to withholding analysis)"
    quote: "Because forward prices are highly correlated with spot prices, price increases in the real-time energy market can also increase a supplier’s profits in the bilateral energy market."
  - id: e33
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, daily settlement prices"
    quote: "Daily settlement prices are used to revalue traders’ positions to the current market price for accounting and for margin calculations."
  - id: e34
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Listing Cycle"
    quote: "Up to 72 consecutive monthly Contract Periods"
---

## Definition

A forward curve is the set of prices at which a commodity can be bought or sold today for delivery in each future period: each monthly contract that trades has a price, and together those prices form the forward (or futures) curve. [e1][e2][e3]

## How it works

Standardized forwards, futures and swaps trade for each month, years into the future, and the curve is read from their prices. [e1] A forward contract is an agreement to receive or deliver a commodity at a specified future time; it can be settled physically, or financially (a swap), in which case the parties exchange the gain or loss in cash. [e4][e5] Futures are standardized forwards traded on an exchange and are generally more liquid than forwards. [e6][e35] For bilateral power forwards, the EEI Master Power Purchase and Sale Agreement is commonly used, with price, quantity, location and delivery period set in a confirmation. [e7]

The curve moves every trading day. A new curve is formed each day, and distant months roll closer to the spot market as time passes. [e8] Positions are marked to market: revalued each day at current prices, comparing the market price of undelivered volumes with the trade price. [e28][e29][e33]

Liquidity is concentrated at the front. FERC notes that NYMEX gas futures trade more than eight years out but only the first few years trade actively; the SFU thesis says more volume trades in near months and weeks, giving better price discovery there; the Fields slides note that 5-7 year tolls lie well outside the window in which individual months trade. [e1][e11][e12]

The sources say forward prices reflect what the market expects spot prices to be. The New Zealand regulator calls them the consensus view of future prices, reflecting expected demand and generation costs; the SFU thesis says forward prices are based on predicted spot prices adjusted for risk tolerance and net expense. [e13][e3][e2] Expected seasonal conditions show up in the shape: in the Fields example, the forward curve is higher in summer and to a lesser extent winter because higher expected loads push clearing prices up the supply stack, and the New Zealand regulator lists seasonal climate expectations as a driver. [e14][e30]

Sources disagree on where the curve is most volatile. The SFU thesis says volatility is highest in the real-time, next-day and balance-of-week portions and falls for distant months, and the New Zealand regulator says short-dated prices are potentially more volatile than long-dated ones; a vendor blog (Montel) instead links higher volatility to the lower liquidity of the forward market. [e9][e10][e31]

Power curves are quoted by delivery bucket as well as by month. Fixed-price power swaps settle on the monthly average spot price for a prescribed bucket, and the ICE ERCOT North peak future settles on the monthly average of peak hourly prices. [e15][e16] Power swaps also trade in heat-rate terms, paired with an offsetting gas volume over the same period, which gives a forward heat-rate curve. [e27][e24]

## ERCOT context

ERCOT's own training calls the Day-Ahead Market a centralized forward market, conducted daily and facilitated by ERCOT, and bilateral trades a decentralized forward market of QSE-to-QSE transactions that transfer settlement responsibility. [e21][e22] Longer-dated ERCOT curves come from exchanges and bilateral markets: ICE lists the ERCOT North 345KV real-time peak future for up to 50 consecutive monthly contract periods, and an ERCOT Panhandle heat-rate contract for up to 72 monthly periods. [e17][e34]

The ICE ERCOT North peak contract covers Monday through Friday, excluding NERC holidays, for hours ending 0700-2200 CPT, and settles on the monthly average of ERCOT-published real-time prices at that hub. [e18][e16]

The IMM says only a small share of ERCOT power is settled in real time, but real-time prices shape expectations in the day-ahead and bilateral forward markets and are the principal driver of prices where most transactions occur. [e19] It treats convergence of forward (day-ahead) prices with real-time prices as a primary indicator of forward market performance. [e20] Because forward prices are highly correlated with spot prices, the IMM notes that raising real-time prices can also raise a supplier's profits in the bilateral market. [e32]

## Key facts

- The NYMEX natural gas futures contract trades more than eight years ahead, but only the first few years trade actively (FERC, 2024). [e1]
- ICE ERCOT North 345KV real-time peak future: up to 50 consecutive monthly contract periods. [e17]
- ICE ERCOT Panhandle heat rate off-peak contract: up to 72 consecutive monthly contract periods; final settlement is the traded heat rate times the NYMEX last-day settlement price. [e34][e24]
- ICE ERCOT North peak hours: hours ending 0700-2200 CPT, Monday-Friday excluding NERC holidays. [e18]
- Futures are generally more liquid than forwards because they are interchangeable and exchange-traded. [e35]

## Example

Suppose (illustrative, made-up numbers) North Hub peak forwards are $45 for May, $95 for August and $50 for November. A retailer that buys 10 MW of August peak at $95 has fixed that month's price. If the August price later marks at $110, the position gains $15/MWh on paper before delivery; if real-time August peak prices average $80, the hedge settles at a loss against spot but the retailer paid the price it planned for.

## Say it like this

(Guidance) "The forward curve is today's price for each future delivery month: the market's tradable view, not a forecast you can ignore. In ERCOT the liquid part is North Hub peak and off-peak months; past a few years you are mostly looking at marks, not trades."

## Common confusion

(Guidance) Forward curve is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

(Guidance) Forward curve versus forecast: a forward price is a tradable price that the sources say reflects expected spot prices, adjusted for risk; it is not a fundamental model output. [e2][e13]

(Guidance) The IMM's "forward prices" in its convergence analysis are day-ahead prices, not the monthly curve. [e20]

(Guidance) Forward versus futures: a futures contract is a standardized forward traded on an exchange. [e6]

## Questions

### Why is the front of the curve more reliable than the back?

More volume trades in the near months, giving better price discovery, while only the first few years of even the deepest gas contract trade actively. [e11][e1] Far-dated prices are therefore often marks rather than trades. [e12]

### What drives the ERCOT forward curve?

The IMM says real-time prices shape expectations in the day-ahead and bilateral forward markets. [e19] More generally, forward prices reflect expectations of demand and generation costs. [e13] Expected summer and winter loads push forward prices up the stack in those months. [e14]

### What if the forward price turns out far from the realized spot price?

A hedge at the forward price still delivers the price that was fixed; the position's mark changes daily until delivery. [e23][e28] The IMM treats persistent day-ahead to real-time gaps as something participants should arbitrage. [e20]

### How do you build a forward spark spread or heat rate?

Use the power and gas forward prices for the same delivery period; power swaps are often traded directly in heat-rate terms, and ICE lists an ERCOT heat-rate contract. [e27][e24]

### Why might a 7-year toll be hard to hedge off the curve?

Most tolls run 5-7 years, which the Fields slides say is well outside the window where individual months trade. [e12]

## Scenarios

### A data-center buyer wants a 2030 North Hub price. What do you tell them?

- ICE lists the North peak future for up to 50 monthly periods, so a 2030 price may be listed but is likely far less liquid than the front months. [e17][e11]
- Explain the price is a market view adjusted for risk, not a forecast. [e2][e13]
- Quote by bucket (peak and off-peak), since contracts settle by bucket. [e15][e16]

## Open items

- Single-source, not cross-checked: the New Zealand regulator found its near-term forward curve an unbiased estimator of spot prices with a persistent bias further out (New Zealand ASX data only).
- Single-source, not cross-checked: SFU defines contango and backwardation as upward and downward forward curves, driven partly by convenience yield, expectations and the risk-free rate.
- Disagreement: the Fields slides give a 50MW standard OTC contract size for ERCOT; the ICE ERCOT North future is 1 MW. Both may be true for different products; not resolved.
- No saved source publishes an ERCOT forward curve or gives the liquid tenor of ERCOT power forwards.
