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
as_of: 2026-11-22
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
    note: Power swaps often trade as heat rates, pairing a power trade with a gas volume over the same delivery period, and ICE lists an ERCOT heat-rate contract. [e27][e24]
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
  - id: e38
    source: ref-montel-optimisation
    locator: "Montel blog (vendor), 'How to optimise generation portfolios across spot and forward power markets', Overview of timeframes"
    quote: "Day-ahead is more flexible, featuring oversight the day before the energy is delivered, which is more volatile than the forward market but less volatile than intraday, allowing trading minutes before delivery takes place."
  - id: e36
    source: imm-som-2025
    locator: "Chapter II, Day-Ahead Market Performance, B. Day-Ahead Energy Market Pricing (paragraph before Figure 30)"
    quote: "The average difference between day-ahead and real-time spot prices shows whether persistent, predictable differences exist that participants should arbitrage over time."
  - id: e37
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Physical Futures Contract (sentence continued across the page break to e35)"
    quote: "Because futures are interchangeable with one another"
  - id: e35
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Physical Futures Contract, continued on p. 123"
    quote: "and are traded on centralized exchanges, futures markets generally are more liquid than forward markets."
  - id: e7
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Examples of Contracts, Electricity Forward Contract"
    quote: "In the electric industry, the Edison Electric Institute (EEI) Master Power Purchase and Sale Agreement is a commonly used contract that can be employed for forward sales of power. Transacting parties may make a bilateral sale by agreeing to transaction-specific values for price, quantity, delivery location, and period of delivery, among other details pertinent to the negotiated transaction. The terms of the transaction are documented on a transaction-specific confirmation."
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
  - id: e39
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Contango'"
    quote: "Market situation in which prices in succeeding delivery months are progressively higher than in the nearest delivery month; the opposite of contango is backwardation."
  - id: e40
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Backwardation'"
    quote: "Market situation in which futures prices are progressively lower in the distant delivery months. For instance, if the gold quotation for January is $360.00 per ounce and that for June is $355.00 per ounce, the backwardation for five months against January is $5.00 per ounce. (Backwardation is the opposite of contango)."
  - id: e41
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Inverted Market'"
    quote: "A futures market in which the nearer months are selling at prices higher than the more distant months; a market displaying 'inverse carrying charges,' characteristic of markets with supply shortages."
  - id: e42
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Strip'"
    quote: "A sequence of futures contract months (e.g., the June, July, and August natural gas futures contracts) that can be executed as a single transaction."
  - id: e43
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Forward Contract'"
    quote: "A cash transaction common in many industries, including commodity merchandising, in which a commercial buyer and seller agree upon delivery of a specified quality and quantity of goods at a specified future date. Terms may be more 'personalized' than is the case with standardized futures contracts (i.e., delivery time and amount are as determined between seller and buyer). A price may be agreed upon in advance, or there may be agreement that the price will be determined at the time of delivery."
  - id: e44
    source: ref-pirrong-forward-curves
    locator: "Pirrong (University of Houston), 'Commodity forward curves: models and data', slide 'Commodity Forward Curves'"
    quote: "A forward curve is a locus of points relating the forward price to the associated delivery date"
  - id: e45
    source: ref-pirrong-forward-curves
    locator: "Pirrong slides, second 'Commodity Forward Curves' slide"
    quote: "Contango: forward prices are increasing with time to expiry, but do not necessarily cover carrying charges • Backwardation (“inverted market”): prices fall with time to expiration"
  - id: e46
    source: ref-pirrong-forward-curves
    locator: "Pirrong slides, 'Forward Curves' (power section)"
    quote: "But remember, a forward price is NOT a price forecast/expectation • Forward prices embed a risk adjustment • Indeed, in power this adjustment is very large"
  - id: e47
    source: ref-pirrong-forward-curves
    locator: "Pirrong slides, 'Sources of the Risk Premium'"
    quote: "Power prices can spike, imposing big losses on shorts: they demand a big premium to sell forward"
  - id: e48
    source: ref-pirrong-forward-curves
    locator: "Pirrong slides, 'Non-Storables'"
    quote: "Electricity – Very costly to store, although hydro introduces an element of storability into some markets"
  - id: e49
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', curve movements section"
    quote: "There are two main phenomena that appear in forward curves: the first is contango, where the spot price sits below the future price, which is a benefit for longer-term sellers looking to fix higher prices. The other is backwardation, in which future prices are lower than current prices."
  - id: e50
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', curve movements section"
    quote: "This is usually due to energy supply issues, pushing up the current price of energy."
  - id: e51
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', drivers paragraph"
    quote: "Seasonality is also a key market fundamental, resulting in premiums during high-demand periods such as winter."
  - id: e52
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', market behaviour paragraph"
    quote: "Liquidity, for example, can be lower in the case of long-term contracts, which makes it trickier to hedge against risk."
  - id: e53
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', liquidity paragraph"
    quote: "We can use liquidity on a monthly, quarterly and yearly basis to hedge risk over shorter and longer periods."
  - id: e54
    source: ref-nodal-exchange-specs
    locator: "Nodal Exchange contract specifications, PJM monthly day-ahead On-Peak contracts, Contract Size"
    quote: "1MW, with variable underlying megawatt hour (MWh). The Contract Size equals 1 MW multiplied by the number of On-Peak hours within the month traded. For example, in a month with 336 On-Peak hours, the Contract Size equals 336 MWh. The definition of On-Peak hours is Hour Ending (HE) 0800 - 2300 Monday through Friday, EPT, excluding NERC Holidays."
  - id: e55
    source: ref-nodal-exchange-specs
    locator: "Nodal Exchange contract specifications, PJM monthly day-ahead Off-Peak contracts, Contract Size"
    quote: "The definition of Off-Peak hours is Hour Ending (HE) 0100 - 0700 and HE 2400, Monday through Friday, EPT and all hours for Saturday, Sunday, and all NERC Holidays."
  - id: e56
    source: ref-nodal-exchange-specs
    locator: "Nodal Exchange contract specifications, PJM monthly contracts, Contract Series and Daily Settlement Price"
    quote: "Contract Series Up to 49 months Daily Settlement Price Determined by the Exchange based on exchange activity, other market data, and extrapolation to traded contracts, as appropriate"
  - id: e58
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, contract elements, Timeframe (p. 121)"
    quote: "Physical and financial electricity contracts may also specify peak or off-peak delivery, with the peak or off-peak hours defined by the contract and reflecting the North American Energy Standards Board (NAESB) contract definitions."
  - id: e59
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, contract elements, Timeframe (p. 121)"
    quote: "Monthly physical contracts are generally for delivery in equal parts per gas day over a month for natural gas and equal parts per hour for electricity."
  - id: e60
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (Bartlett, 2019), section 3, Electricity Forward Contract"
    quote: "Although the general structure is the same as that of a bank hedge, electricity forward contracts are done on a monthly rather than an hourly basis (although there are separate monthly prices for peak and offpeak) and there are additional complexities that the wind project developer would need to assess."
  - id: e61
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), section 3, Electricity Forward Contract"
    quote: "However, electricity forward contracts are traded liquidly for only one to two years into the future (Aydin et al. 2017)."
  - id: e62
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), section 3.3, Natural Gas Forward Contract"
    quote: "Unlike electricity forward markets, natural gas contracts at Henry Hub are traded out for 10 to 12 years, so natural gas hedges have the potential to combine competitive market pricing with a hedge of sufficient duration for project financiers. Similar to electricity forwards, natural gas forward contracts are on monthly basis, but without electricity’s peak/off-peak distinction."
  - id: e63
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), footnote 16"
    quote: "Trading of monthly futures contracts occurs on various exchanges for electricity at hubs in the wholesale markets (ERCOT, PJM, MISO, SPP, CAISO, NYISO, and ISO-NE). Although we discuss forward contracts, which are negotiable and traded over the counter, futures contracts are similar in design but have standardized terms and are traded on an exchange."
  - id: e64
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, discussion of price processes (Term Structure of Volatility)"
    quote: "The upward or downward trend of the forward price curve (higher or lower traded prices in distant years) is referred to as 'contango' and 'backwardation' respectively, the degree of which is determined partially by a convenience yield, expectations regarding long-term market fundamentals, and the risk-free rate of return."
  - id: e65
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 5, Power Market Mechanics: Linear Instruments, Texas (ERCOT)"
    quote: >-
      Texas (ERCOT): - Peak bucket is 5x16 (M-F 6AM to 10PM). - Offpeak (the ”offpeak wrap”) is the complement. - Standard contract size: 50MW.
  - id: e66
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Settlement Method and Contract Size"
    quote: "Settlement Method Cash settlement Contract Size 1 MW Currency USD"
  - id: e67
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North peak future, Reference Price A (a) Description"
    quote: "\"ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME\" means that the price for a Pricing Date will be that day's Specified Price per MWh of electricity for delivery on the Delivery Date, stated in U.S. Dollars, published by the ERCOT"
  - id: e68
    source: ref-pirrong-forward-curves
    locator: "Pirrong slides, 'Elementary Theory: Cash and Carry'"
    quote: "The simple theory of forward curves is that for storable commodities, forward prices should exceed nearby prices plus the cost of carrying inventory (interest, warehousing charges, insurance) to the expiration date"
---

## Definition

A forward curve is the set of prices at which a commodity can be bought or sold today for delivery in each future period: each monthly contract that trades has a price, and together those prices form the forward (or futures) curve. [e1][e2][e3] Pirrong's lecture slides put it the same way: a forward curve relates the forward price to its delivery date. [e44]

## How it works

Standardized forwards, futures and swaps trade for each month, years into the future, and the curve is read from their prices. [e1] A forward contract is an agreement to receive or deliver a commodity at a specified future time; the CFTC adds that its terms can be more personalized than a standardized futures contract. It can be settled physically, or financially (a swap), in which case the parties exchange the gain or loss in cash. [e4][e43][e5] Futures are standardized forwards traded on an exchange, and FERC says they are generally more liquid than forwards; RFF likewise describes the monthly power futures traded at hubs in ERCOT and other U.S. markets as similar in design to forwards but with standardized terms and exchange trading. [e6][e35][e63] For bilateral power forwards, the EEI Master Power Purchase and Sale Agreement is commonly used, with price, quantity, location and delivery period set in a confirmation. [e7]

Forward prices are updated every trading day: the SFU thesis says a new forward curve is created each day that power and gas trade, with distant months moving closer to the spot market over time, and FERC says daily settlement prices are used to revalue positions to current market prices. [e8][e33] Positions are marked to market: revalued each day at current prices, comparing the market price of undelivered volumes with the trade price. [e28][e29][e33]

Liquidity is concentrated at the front. FERC notes that NYMEX gas futures trade more than eight years out but only the first few years trade actively; the SFU thesis says more volume trades in near months and weeks, giving better price discovery there; the Fields slides note that 5-7 year tolls lie well outside the window in which individual months trade. [e1][e11][e12] Montel says liquidity can be lower for long-term contracts, making them harder to hedge. [e52] RFF, citing a 2017 study, puts a number on it for U.S. power: electricity forwards trade liquidly only one to two years out, while Henry Hub gas contracts trade out 10 to 12 years. FERC's 2024 primer says NYMEX gas trades more than eight years out, with only the first few years active. [e61][e62][e1]

The sources do not agree on how far forward prices are forecasts. The New Zealand regulator calls them the consensus view of future prices, reflecting expected demand and generation costs. [e13][e3] The SFU thesis says forward prices are based on predicted spot prices but adjusted for risk tolerance and net expense. [e2] Pirrong's slides go further: a forward price is not a price forecast or expectation, it embeds a risk adjustment, and in power that adjustment is very large. Among the possible sources of that premium his slides list a "Keynes-type story": power prices can spike, imposing big losses on sellers (shorts), who demand a big premium to sell forward. [e46][e47] The common ground is that forward prices start from expected spot conditions; SFU and Pirrong add a risk adjustment that the New Zealand article does not mention. [e2][e46][e13]

Expected conditions in the delivery period shape the curve. Two publishers say forward prices carry a premium for expected high-demand periods: the Fields slides attribute the seasonality of a PJM forward curve (higher in summer and, to a lesser extent, winter) to expected higher loads pushing clearing prices up the supply stack, and Montel, writing about European markets, says seasonality produces premiums in high-demand periods such as winter. [e14][e51] The New Zealand regulator lists seasonal climate expectations (El Niño or La Niña) as a factor. [e30]

The overall slope has names. The CFTC defines contango as prices in succeeding delivery months progressively higher than the nearest month, and backwardation as futures prices progressively lower in distant months; Pirrong, Montel and the SFU thesis describe the same upward and downward curves. [e39][e40][e45][e49][e64] The sources compare against slightly different points: the CFTC against the nearest delivery month, Montel against the spot or current price. [e39][e49] On causes, the CFTC calls an inverted (backwardated) market characteristic of supply shortages and Montel says backwardation is usually due to supply issues pushing up the current price. [e41][e50] SFU says the slope depends partly on convenience yield, expectations about long-term fundamentals and the risk-free rate, and Pirrong that contango need not cover carrying charges. [e64][e45]

Two sources agree that the near end of the curve is the more volatile: the SFU thesis says volatility is extremely high in the real-time, next-day and balance-of-week portions and falls for distant months, and the New Zealand regulator says hydro storage makes short-dated prices potentially more volatile than long-dated ones (a hydro-specific reason). [e9][e10] A vendor blog on European markets (Montel) links volatility to the lower liquidity of the forward market, but the same blog also says day-ahead is more volatile than the forward market, so it does not establish a disagreement. [e31][e38]

Power curves are quoted by delivery bucket as well as by month. RFF says electricity forwards are monthly, with separate monthly prices for peak and off-peak, while gas forwards are monthly without that distinction. [e60][e62] FERC says power contracts may specify peak or off-peak delivery, with the hours defined by the contract and reflecting NAESB definitions, and that monthly physical power contracts are generally delivered in equal parts per hour. [e58][e59] Fixed-price power swaps settle on the monthly average spot price for a prescribed bucket, and the ICE ERCOT North peak future settles on the monthly average of peak hourly prices. [e15][e16]

The exchange contracts show what a bucket is. Nodal Exchange's monthly PJM contracts are 1 MW for each hour of the bucket, so the MWh size varies with the number of on-peak (or off-peak) hours in the month; on-peak is hours ending 0800-2300 EPT Monday to Friday excluding NERC holidays, and off-peak is hours ending 0100-0700 and 2400 on weekdays plus all hours of weekends and NERC holidays. [e54][e55] The Fields slides likewise define the off-peak "wrap" as the complement of the peak bucket. [e65] ICE's ERCOT North peak future is also 1 MW. [e66] The peak hours are set contract by contract, as FERC says, so check the specification. [e58][e18][e54]

Longer periods are built from months. The CFTC defines a strip as a sequence of futures contract months that can be executed as a single transaction, and Montel says liquidity is used on a monthly, quarterly and yearly basis to hedge shorter and longer periods. [e42][e53] Nodal Exchange lists its PJM monthly contracts up to 49 months out, and ICE lists its ERCOT North peak future up to 50 consecutive months. [e56][e17] Power also trades in heat-rate terms: the Fields slides say power swaps often trade as heat rates, a power trade paired with an offsetting gas volume over the same period, and ICE lists an ERCOT heat-rate contract whose final settlement is the traded heat rate times the NYMEX last-day gas settlement price. [e27][e24]

## ERCOT context

ERCOT's own training calls the Day-Ahead Market a centralized forward market, conducted daily and facilitated by ERCOT, and bilateral trades a decentralized forward market of QSE-to-QSE transactions that transfer settlement responsibility. [e21][e22] The IMM also refers to bilateral forward markets in ERCOT, and on exchanges ICE lists the ERCOT North 345KV real-time peak future for up to 50 consecutive monthly contract periods, and an ERCOT Panhandle heat-rate contract for up to 72 monthly periods. [e19][e17][e34]

The ICE ERCOT North peak contract covers Monday through Friday, excluding NERC holidays, for hours ending 0700-2200 CPT, and settles on the monthly average of ERCOT-published real-time prices at the North 345 kV Hub. [e18][e16][e67] The Fields slides (2013) describe the ERCOT peak bucket as 5x16, Monday to Friday 6AM to 10PM, with off-peak as the complement and a 50 MW standard swap size; the ICE future is 1 MW. [e65][e66]

The IMM says only a small share of ERCOT power is settled in real time, but real-time prices shape expectations in the day-ahead and bilateral forward markets and are the principal driver of prices where most transactions occur. [e19] It treats convergence of forward (day-ahead) prices with real-time prices as a primary indicator of forward market performance. [e20] Because forward prices are highly correlated with spot prices, the IMM notes that raising real-time prices can also raise a supplier's profits in the bilateral market. [e32]

## Key facts

- The NYMEX natural gas futures contract trades more than eight years ahead, but only the first few years trade actively (FERC, 2024). [e1]
- ICE ERCOT North 345KV real-time peak future: up to 50 consecutive monthly contract periods. [e17]
- ICE ERCOT Panhandle heat rate off-peak contract: up to 72 consecutive monthly contract periods; final settlement is the traded heat rate times the NYMEX last-day settlement price. [e34][e24]
- ICE ERCOT North peak hours: hours ending 0700-2200 CPT, Monday-Friday excluding NERC holidays. [e18]
- Futures are generally more liquid than forwards because they are interchangeable and exchange-traded. [e37][e35]
- Contango: later delivery months progressively higher than the nearest; backwardation: distant months progressively lower (CFTC). [e39][e40]
- RFF: electricity forwards are monthly, with separate monthly peak and off-peak prices, and gas forwards are monthly without that split; FERC says power contracts may specify peak or off-peak delivery. [e60][e62][e58]
- Nodal Exchange's PJM monthly contracts are 1 MW for each hour of the bucket (so the MWh size varies with the month's hours), and ICE's ERCOT North peak future has a contract size of 1 MW. [e54][e66]
- A strip is a sequence of contract months executed as a single transaction (CFTC). [e42]

## Example

Suppose (illustrative, made-up numbers) North Hub peak forwards are $45 for May, $95 for August and $50 for November. A retailer that buys 10 MW of August peak at $95 has fixed that month's price. If the August price later marks at $110, the position gains $15/MWh on paper before delivery; if real-time August peak prices average $80, the hedge settles at a loss against spot but the retailer paid the price it planned for.

## Say it like this

(Guidance) "The forward curve is today's price for each future delivery month: the market's tradable view, not a forecast you can ignore. Liquidity is at the front; far-dated months trade thinly, so ask whether a price is a trade or a mark."

## Common confusion

(Guidance) Forward curve is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

(Guidance) Forward curve versus forecast: a forward price is a tradable price. The New Zealand regulator calls it the market's consensus view; SFU says it is adjusted for risk; Pirrong says it is not a forecast at all and that the risk premium in power is very large. Do not read a forward price as an expected spot price without saying so. [e13][e2][e46]

(Guidance) A posted settlement price is not always a trade. Nodal Exchange's daily settlement price is set from exchange activity, other market data and extrapolation to traded contracts. [e56]

(Guidance) Contango and backwardation are about the slope of the curve, but the sources measure it from different points: the nearest delivery month (CFTC) or the spot price (Montel). [e39][e49] Pirrong's cost-of-carry explanation of slope is stated for storable commodities, and he classes electricity as very costly to store (hydro aside); reasoning from that, carrying costs do not explain a power curve's slope. [e68][e45][e48]

(Guidance) "Peak" is defined by each contract. Fields gives ERCOT peak as 6AM to 10PM weekdays and ICE as hours ending 0700-2200 CPT; if "hour ending 0700" means the hour from 6AM to 7AM, these describe the same 16 hours, but no saved source states that convention, so read the specification. [e65][e18][e58]

(Guidance) The IMM's "forward prices" in its convergence analysis are day-ahead prices, not the monthly curve. [e20]

(Guidance) Forward versus futures: a futures contract is a standardized forward traded on an exchange. [e6]

## Questions

### Why is the front of the curve more reliable than the back?

More volume trades in the near months, giving better price discovery, while only the first few years of even the deepest gas contract trade actively. [e11][e1] The Fields slides add that 5-7 year tolls lie well outside the window in which individual contract months trade. [e12]

### What drives the ERCOT forward curve?

The IMM says real-time prices shape expectations in the day-ahead and bilateral forward markets. [e19] More generally, forward prices reflect expectations of demand and generation costs. [e13] In the Fields slides' PJM example, expected higher summer and winter loads push forward prices up the stack in those months; no saved source describes the seasonal shape of the ERCOT curve. [e14]

### What do contango and backwardation mean, and what causes backwardation?

Contango is a curve where later delivery months are progressively higher than the nearest; backwardation is one where distant months are progressively lower. [e39][e40] The CFTC calls an inverted market characteristic of supply shortages, and Montel says backwardation is usually due to supply issues pushing up the current price. [e41][e50]

### How is a power forward quoted?

By hub, month and bucket: separate monthly prices for peak and off-peak, with the peak hours defined in the contract. [e60][e58] Nodal Exchange's PJM contracts are 1 MW for each hour of the bucket and ICE's ERCOT North peak future is 1 MW, and longer periods can be traded as a strip of months. [e54][e66][e42]

### What if the forward price turns out far from the realized spot price?

A hedge at the forward price still delivers the price that was fixed; the position's mark changes daily until delivery. [e23][e28] The IMM says persistent, predictable day-ahead to real-time differences are something participants should arbitrage over time. [e36]

### How do you build a forward spark spread or heat rate?

Use the power and gas forward prices for the same delivery period; the Fields slides say power swaps often trade directly in heat-rate terms, and ICE lists an ERCOT heat-rate contract. [e27][e24]

### Why might a 7-year toll be hard to hedge off the curve?

Most tolls run 5-7 years, which the Fields slides say is well outside the window where individual months trade. [e12]

## Scenarios

### A data-center buyer wants a 2030 North Hub price. What do you tell them?

- ICE lists the North peak future for up to 50 monthly periods, so a 2030 price may be listed but is likely far less liquid than the front months. [e17][e11]
- Explain the price is a market view adjusted for risk, not a forecast. [e2][e13]
- Quote by bucket (peak and off-peak), since contracts settle by bucket. [e15][e16]

## Open items

- Single-source, not cross-checked: the New Zealand regulator found its near-term forward curve an unbiased estimator of spot prices with a persistent bias further out (New Zealand ASX data only).
- Resolved 2026-11-22: contango and backwardation are now defined by the CFTC (tier 2), with Pirrong, Montel and SFU agreeing. Only SFU names convenience yield and the risk-free rate as drivers (single-source).
- Not a conflict, but unresolved for ERCOT: the Fields slides give 50MW as the standard swap size for ERCOT; the exchange contracts (ICE ERCOT North, Nodal Exchange PJM) are 1 MW. No saved source gives a standard ERCOT OTC size.
- Partly resolved: a premium in expected high-demand seasons is now cross-checked (Fields for PJM, Montel for European markets). The summer-and-winter shape is still Fields-only, and no saved source describes the shape of the ERCOT curve.
- Disagreement: the New Zealand regulator calls forward prices the consensus view of future prices; Pirrong says a forward price is not a forecast and carries a very large risk premium in power; SFU sits between (risk-adjusted). No saved source measures the ERCOT forward risk premium.
- Single-source, not cross-checked (RFF, citing a 2017 study, U.S. generally): electricity forwards trade liquidly only one to two years out. No saved source gives the liquid tenor of ERCOT power forwards, and none publishes an ERCOT forward curve.
- Single-source, not cross-checked (Fields): the off-peak wrap is often traded as 2x16 and 7x8, which are highly illiquid.
- Montel (vendor, European markets) is internally inconsistent on whether forward or day-ahead prices are more volatile; not used as a counter-position.
