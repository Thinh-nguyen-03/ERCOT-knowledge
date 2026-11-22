---
id: heat-rate-call-option
name: Heat Rate Call Option
aliases: [heat rate call option, HRCO, heat rate option, heat rate call, spark spread option]
kind: product
domain: trading
level: 2
depth: deep
basis: industry-reference
lenses: [trading, portfolio, structuring]
as_of: 2026-11-22
links:
  - to: spark-spread
    type: hedges
    note: An HRCO protects a gas project against tightening spark spreads, paid for by giving up the upside from widening spreads. [e9][e10]
  - to: heat-rate
    type: prerequisite-of
    note: The strike of a heat rate option is a fixed heat rate multiplied by a gas index. [e4][e5]
  - to: implied-heat-rate
    type: related
    note: The option is in the money when the market heat rate is above the deal heat rate. [e14]
  - to: tolling-agreement
    type: related
    note: The Fields Institute slides model a toll as a sum of daily payoffs of power minus heat rate times gas minus VOM, floored at zero; the SFU thesis likewise treats a toll as a strip of spread options. [e43][e44][e30]
  - to: natural-gas-price
    type: prerequisite-of
    note: The strike floats with a published natural gas index. [e5][e6]
  - to: basis-risk
    type: related
    note: HRCO payouts are notional and settle on published indices, not on the plant's actual operations or results. [e3][e17]
  - to: ordc
    type: related
    note: The IMM says shortage pricing produces hundreds of hours a year above gas plants' marginal cost; reasoning from that (the IMM does not discuss options), those are hours when a call struck at a gas-plant heat rate would be in the money. [e20]
  - to: hb-north
    type: related
    note: The ICE ERCOT heat-rate contract in the saved sources references the ERCOT Panhandle 345kV Hub, not North. [e18]
evidence:
  - id: e1
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (January 2024), Chapter 5, Contract Types, Option Contract"
    quote: "An option is an instrument that gives its holder the right, but not the obligation, to buy or sell an underlying physical or financial contract at a set price for a set time period. The right to buy the underlying contract is called a call option, and the right to sell is called a put option. The price paid to buy or sell the option is known simply as the option’s price or premium. The price at which the underlying contract may be bought or sold is the strike price."
  - id: e2
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper, 'Financial Hedges for United States Gas-Fired Power Generation Facilities' (June 2017), Heat Rate Call Options"
    quote: "Under a HRCO, the project receives fixed periodic cash payments from the HRCO counterparty and, in exchange, pays to the HRCO counterparty the excess of a market power price over a market gas price multiplied by an assumed heat rate and by an assumed quantity of power."
  - id: e3
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options, first sentences"
    quote: "Another financial hedge is the heat rate call option (HRCO). Like a revenue put, the payout on the HRCO is purely notional and is not tied to the actual operations or results of the power generation facility."
  - id: e4
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, Daily Heat Rate Option Confirmation (cash settled), Strike Price"
    quote: "Strike Price HR x Gas Index Heat Rate (“HR”) 11.00"
  - id: e5
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options, mechanics paragraph"
    quote: "The mechanics of the typical HRCO achieve this by giving the financial counterparty a daily financial option, calculated with respect to each hour in the following day that, upon exercise, requires the payment of a cash settlement amount equal to the product of (a)(i) a variable price power index at a predetermined location minus (ii) an amount equal to a variable natural gas index multiplied by the specified heat rate conversion factors of the project and (b) a base notional quantity of power."
  - id: e6
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, Cash Settlement Amount Details"
    quote: "In respect of each Calculation Period the sum of the Cash Settlement Amounts for each Settlement Period in such Calculation Period, where the Cash Settlement Amount for each Settlement Period is calculated as follows: Notional Quantity x Strike Price Differential"
  - id: e7
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (Chadbourne), 'Energy Hedges: What To Look For' (November 2015), Heat Rate Call Options"
    quote: "Each day on a day-ahead basis, the hedge provider — not the project owner — decides whether to consider the plant in operation solely for purposes of the hedge. The decision whether actually to run the plant is made by the project owner, but for purposes of determining whether a hedge payment will made, it is the option of the hedge provider to “call the hypothetical plant” from one hour to the next."
  - id: e8
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Heat Rate Call Options"
    quote: "First, in a heat rate call option, you do not make a big upfront payment at financial closing. Second, there are payments potentially in both directions."
  - id: e9
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options"
    quote: "The effect of the HRCO is similar to a revenue put in that the project is protected against tightening spark spreads. However, this protection is effectively paid for in an HRCO by the project giving up the potential upside that it would otherwise realize from widening spark spreads, rather than the upfront premium payment found in the revenue put."
  - id: e10
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Contrasts"
    quote: "Both products provide downside protection for project revenue. With a revenue put, the project has all the upside — the assumed excess revenue from physical sales — if market prices turn in the project’s favor. With a heat rate call option, the upside goes to the hedge provider."
  - id: e11
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Heat Rate Call Options"
    quote: "Heat rate call options settle on a monthly basis, and there is a payment by the hedge provider to the project or vice versa."
  - id: e12
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, Settlement Date(s)"
    quote: "In respect of each calendar month the Option Seller shall pay the Net Cash Settlement Amount to the Option Buyer on the tenth (10th) Business Day following the end of the calendar month that includes the relevant Calculation Period(s)"
  - id: e13
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides, 'Tolling Deals' (G. Swindle, 2013), slide 4, Basics of Tolling Deals: Deal Structure"
    quote: "The typical structure is: - Daily day-ahead manual exercise into a standard power buckets. - Monthly ”capacity payments” (as opposed to upfront premium). - Monthly settlement."
  - id: e14
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 11, Valuing Tolls: A Monthly Example, Relevant Data"
    quote: "This is higher than the deal heatrate H∗ = 11.0 - The option is in-the-money."
  - id: e15
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options, credit"
    quote: "Thus, because either party may owe a settlement payment, the HRCO is subject to two-way credit exposure, and each party may need to post collateral in favor of the other, depending on the mark-tomarket of the contract."
  - id: e16
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Contrasts (collateral)"
    quote: "With a heat rate call option, there are significant ongoing payments to be made by the project to the hedge provider, and those payments are typically made as an operating expense ahead of debt service. The hedge provider will require significant collateral to secure payment."
  - id: e17
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Contrasts (risks the hedge does not cover)"
    quote: "Everything about the plant, other than gas and electricity prices, is the project’s risk. If you have an assumed heat rate in the hedge and you are not operating efficiently enough to make it, then that is the project’s problem."
  - id: e18
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC contract specification, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Final Settlement"
    quote: "Final settlement will be determined by multiplying the actual heat rate entered into at the time of the transaction by the NYMEX Last Day Settlement Price for the relevant delivery month."
  - id: e19
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC contract specification, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Schedule"
    quote: "All off-peak hours for the applicable strip length referenced by the market for hours ending 0100-0600, 2300 and 2400 on business days and for hours ending 0100-2400 on weekends and NERC holidays"
  - id: e20
    source: imm-som-2025
    locator: "Chapter I, section 2, Implied Heat Rates, text after Figure 2"
    quote: "The growth of zero marginal cost generation such as wind and solar has resulted in hundreds of hours with prices at or below $0 per MWh, which lowers the market’s implied heat rate. Conversely, shortage pricing results in hundreds of hours per year with prices above the marginal cost of natural gas generators, which raises the market’s implied heat rate."
  - id: e21
    source: imm-som-2025
    locator: "Chapter I, section 4, Price Spike Impacts"
    quote: "For this analysis, price spikes are defined as 15-minute intervals when the load-weighted average energy price exceeds 18 million British thermal units (MMBtu) per MWh (i.e., an implied heat rate of 18) multiplied by the corresponding fuel index price (FIP)"
  - id: e22
    source: np-02
    locator: "Section 2.1, definition of Fuel Index Price (FIP)"
    quote: "The daily midpoint or average of the prices for natural gas fuel for the Katy area (Katy Hub), expressed in dollars per million British thermal units ($/MMBtu)."
  - id: e23
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 9, Power Market Mechanics: Options, Daily Options"
    quote: "A set of daily options usually exercising one business day before delivery. - These are usually financial settling on the spread between spot price and the strike: F (t, t) − K where t indexes the delivery day."
  - id: e24
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options, mechanics paragraph"
    quote: "The counterparty may choose to exercise the option for some, but not all, of the hours in the day, and the cash settlement amount also accounts for assumed fixed and variable costs of starting up and shutting down the plant during a day."
  - id: e25
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Heat Rate Call Options"
    quote: "If the hedge provider decides not to call the hypothetical plant, then there is no revenue for that hour for purposes of calculating the cash settlement amount. If the hedge provider decides to call the hypothetical plant for hedge calculation purposes, then the revenue for that hour may be positive or negative, depending on actual market prices and assumptions about the plant’s heat rate and operating costs."
  - id: e26
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, header"
    quote: "Heat Rate Option Transaction – Cash Settled Supplements ISDA Master Agreement dated July 5, 2007."
  - id: e27
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Documentation"
    quote: "There are three main documents: an ISDA master agreement, which is a pre-printed form that comes in a 1992 and a 2002 version and that has the common terms that apply to all hedges, a schedule that has modifications that the parties have agreed to make to the terms of the master agreement and a confirmation that has the economic terms of the transaction that are specific to the deal."
  - id: e28
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, Total Premium and Premium Payment Dates"
    quote: "Total Premium: USD 342,000.00 Premium Payment Dates: 05 April, 2012"
  - id: e29
    source: ref-nrf-energy-hedges
    locator: "Norton Rose Fulbright (2015), Heat Rate Call Options"
    quote: "Heat rate call options typically have a fixed revenue amount called the “option premium.” This fixed amount is compared to the “cash settlement amount” to determine which party makes payments for the relevant settlement period."
  - id: e30
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project (Powerex tolling), Chapter 5, option valuation"
    quote: "Given a tolling agreement typically provides the purchaser with operating control on an hourly or daily basis, the complete tolling contract can be considered a strip of consecutive European spread options."
  - id: e31
    source: ref-ice-ercot-heat-rate
    locator: "ICE OTC contract specification, ERCOT Panhandle Heat Rate 345kV Hub Off-Peak, Contract Size and Minimum Price Fluctuation"
    quote: "Contract Size 50 MW per hour Currency US $ and cents per MWH Minimum Price Fluctuation 0.001 per MMBTU/MWh"
  - id: e33
    source: ref-fpml-heat-rate-option
    locator: "FpML 5.6 example, Floating Price, Power Price"
    quote: "ELECTRICITY-CAISO-SP 15 EZ GEN HUB-DAY AHEAD"
  - id: e34
    source: ref-pillsbury-gas-hedges
    locator: "Pillsbury white paper (2017), Heat Rate Call Options, mechanics paragraph"
    quote: "If the net amount of the related option premium owed by the financial counterparty is greater than the aggregate cash settlement amount, the project receives a payment and realizes a gain. If the net amount is negative, the project must make a payment and realizes a loss."
  - id: e32
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 6, Linear Instruments: Heatrates"
    quote: "Power swaps often trade as heat-rates: - A power buy/sell is associated with a sell/buy of a specified volume of natural gas, both over the same delivery period."
  - id: e35
    source: ref-deng-exotic-electricity-options
    locator: "Deng, Johnson and Sogomonian, 'Exotic electricity options and the valuation of electricity generation and transmission assets', Decision Support Systems 30 (2001), section 2.1, Definition 1 (PDF text renders the opening parenthesis and quotation marks as odd characters)"
    quote: "A European spark spread call option written on fuel G at a fixed Žor AstrikeB . heat rate K H gives the option holder the right but not the obligation to pay K H times the unit price of fuel G at the option’s maturity T and receive the price of 1 unit of electricity."
  - id: e36
    source: ref-deng-exotic-electricity-options
    locator: "Deng et al. (2001), section 2.1, equation (2), payoff of the spark spread call (PDF text renders '=' as 's', the minus sign as 'y' and the opening parenthesis as 'Ž')"
    quote: "Then the payoff of the option at maturity time T is: C1 Ž S ET , SGT , K H , T . s max Ž S ET y K H SGT , 0 ."
  - id: e37
    source: ref-deng-exotic-electricity-options
    locator: "Deng et al. (2001), section 2.1, example after Definition 2"
    quote: "A power marketer in a region where the marginal generating fuel is natural gas would like to buy power at time T at a market implied heat rate not to exceed K H ."
  - id: e43
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 3, Basics of Tolling Deals: Deal Structure, The Basic Structure (formula line)"
    quote: "d(0, t) max (FP (t, t) − H∗ FG (t, t) − V , 0)"
  - id: e44
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 3, Basics of Tolling Deals: Deal Structure (definitions under the formula)"
    quote: "FP denotes the forward (or spot) price of power for a particular delivery bucket (e.g. 5x16) and FG denotes the price of natural gas; both are typically at liquid pricing hubs. - H∗ is the heatrate (conversion rate between gas and power). - V is VOM (variable operation and maintenance)."
  - id: e42
    source: ref-deng-exotic-electricity-options
    locator: "Deng et al. (2001), section 2.1, end of the power-marketer example"
    quote: "The power marketer can therefore achieve his goal by purchasing this spark spread call."
  - id: e38
    source: ref-rff-merchant-hedges
    locator: "Resources for the Future, Working Paper 19-06, 'Reducing Risk in Merchant Wind and Solar Projects through Financial Hedges', section 3.3 Natural Gas-Based Wind Hedge"
    quote: "To hedge against electricity price risk, the wind developer would sell a certain number of natural gas forward contracts based on the amount of electricity generation it wishes to hedge as well as the expected market heat rate (the ratio of electricity to natural gas prices)."
  - id: e39
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Premium', sense (1)"
    quote: "(1) The payment an option buyer makes to the option writer for granting an option contract;"
  - id: e40
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Option Writer'"
    quote: "The person who originates an option contract by promising to perform a certain obligation in return for the price or premium of the option. Also known as option grantor or option seller."
  - id: e41
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'In-The-Money'"
    quote: "A term used to describe an option contract that has a positive value if exercised."
---

## Definition

A heat rate call option is a call option on power whose strike is a gas price index multiplied by a fixed heat rate: when exercised, the holder is paid the power price minus heat rate times the gas price, times a notional quantity. [e2][e4][e5][e6] An academic paper (Deng et al.) defines the same structure as a spark spread call with a fixed strike heat rate: the right, not the obligation, to pay the strike heat rate times the fuel price and receive the price of one unit of electricity. [e35][e36]

## How it works

An option gives its holder the right, but not the obligation, to buy at a strike price, and the buyer pays a premium for it. [e1] In a heat rate call the strike is not a fixed dollar amount but "HR x Gas Index", so it moves with gas. [e4][e5] The holder gains when power is priced above the strike heat rate times gas, that is, when the market heat rate (the ratio of the power price to the gas price) is above the deal heat rate; an option with a positive value if exercised is called in the money. [e36][e38][e14][e41]

In the project-finance version described by two law firms, a gas plant owner sells the option to a financial hedge provider. The project receives a fixed periodic amount (the option premium) and pays the hedge provider the excess of power over heat rate times gas, times a notional quantity, for the hours the provider calls. [e2][e29] That matches the CFTC's usage, in which the premium is the payment an option buyer makes to the option writer (also called the option seller). [e39][e40] In this version, Norton Rose Fulbright says there is no big upfront payment at financial closing, and both law firms describe payments that can flow either way (the FpML example confirmation, by contrast, has a single total premium; see Key facts). [e8][e2]

The buyer is not always a hedge provider facing a generator. Deng et al. describe a power marketer that wants to buy power at a market implied heat rate no higher than a set level and does so by buying a spark spread call; in the project hedge the generator is the seller. [e37][e42][e5][e7]

Exercise is daily and day-ahead. The hedge provider decides each day, hour by hour for the next day, whether to treat the hypothetical plant as running for hedge purposes; the owner still decides whether the real plant runs. [e7][e5] The provider can call some hours and not others, and the hourly amount reflects assumed plant costs: Pillsbury says the cash settlement accounts for assumed fixed and variable start-up and shut-down costs, and Norton Rose Fulbright says an hour's revenue depends on market prices and assumptions about the plant's heat rate and operating costs. [e24][e25] The Fields slides describe daily power options and tolls the same way: exercised one business day before delivery, settled financially, with monthly settlement. [e23][e13]

Settlement is monthly. The Norton Rose Fulbright article says HRCOs settle monthly, and the FpML example confirmation aggregates daily amounts into a monthly net cash settlement paid on the tenth business day after the month. [e11][e12]

The payout is notional. It is calculated from published indices and assumptions about a hypothetical plant, not from the real plant's operations, so plant performance, outages and costs other than gas and power prices stay with the project. [e3][e17][e25]

## Formula

For each hour h that the holder calls: payoff = notional MWh x (power index price - heat rate x gas index price). [e5][e6]

- Power index: a variable power price index at a predetermined location (the FpML example uses a CAISO SP15 generation hub day-ahead price). [e5][e33]
- Heat rate: the specified heat rate of the project (11.00 in the FpML example). [e5][e4]
- Gas index: a variable natural gas index price. [e5][e4]
- Monthly net settlement: in the project hedge, the option premium is compared with the sum of these cash settlement amounts to decide who pays. [e29][e34]

Deng et al. write the payoff of a single European spark spread call at maturity as max(electricity spot price - strike heat rate x fuel spot price, 0) per unit of electricity: the holder receives the spread only when it is positive. [e36][e35] The project hedge is not exactly this floored form: the provider elects day-ahead which hours to call, and Norton Rose Fulbright says that for a called hour the revenue may be positive or negative, depending on actual market prices and the assumptions about the plant's heat rate and operating costs. [e7][e25]

Sources differ on operating costs. The Fields slides' toll formula (a toll, not an HRCO) deducts VOM (V) inside the max as well; Deng's payoff and Pillsbury's cash settlement formula have no VOM term, though Pillsbury says the cash settlement amount also accounts for assumed fixed and variable start-up and shut-down costs. [e43][e44][e36][e5][e24]

## ERCOT context

ERCOT's own gas reference, the Fuel Index Price, is the daily Katy Hub price in $/MMBtu; an ERCOT heat rate strike may use another index, so check the confirmation. [e22][e5]

The saved ICE specification for an ERCOT heat rate product is a linear contract, not an option: the ERCOT Panhandle 345kV Hub off-peak heat rate contract is traded as a heat rate and settles at that heat rate times the NYMEX last-day gas settlement price. [e18][e32] It covers off-peak hours ending 0100-0600, 2300 and 2400 on business days and all hours on weekends and NERC holidays, with a 50 MW per hour contract size and a price increment of 0.001 MMBtu/MWh. [e19][e31]

The IMM's 2025 real-time figures bear on when a call at a gas-plant heat rate pays (this is reasoning from IMM data; the IMM does not discuss heat rate options): shortage pricing produces hundreds of hours a year above gas plants' marginal cost, when such a call is in the money, while wind and solar create hundreds of hours at or below $0 per MWh, when it pays nothing. [e20] For its price-spike analysis, the IMM defines a price spike as an interval when the energy price exceeds an implied heat rate of 18 times the FIP. [e21]

## Key facts

- The project receives a fixed periodic option premium, not an upfront payment; payments can go either way. [e2][e8]
- The hedge provider elects day-ahead which hours to call. [e7][e5]
- The strike is a fixed heat rate times a fuel price (11.00 times the gas index in the FpML example; K_H times the fuel price in Deng et al.). [e4][e35]
- Monthly settlement. [e11][e12]
- Two-way credit exposure; each side may post collateral, and the hedge provider typically requires significant collateral from the project. [e15][e16]
- The upside from wide spreads goes to the hedge provider. [e9][e10]
- ICE ERCOT Panhandle heat rate off-peak: 50 MW per hour; settles at heat rate times NYMEX last-day settlement. [e31][e18]
- Documentation: hedges use an ISDA master agreement, a schedule and a confirmation; the FpML example is a confirmation supplementing an ISDA Master Agreement. [e27][e26]
- Premium timing differs between sources: the law firms describe a fixed periodic premium to the project, while the FpML example confirmation shows one total premium of USD 342,000 on a single payment date. [e2][e29][e28]

## Example

Suppose (illustrative, made-up numbers) a project sells a 100 MW heat rate call at 7.0 on North Hub versus a gas index of $3.00, so the strike is $21/MWh. In an hour the provider called day-ahead, the hub price is $200, so the project owes 100 x (200 - 21) = $17,900 for that hour, which it covers from its own power sales if the plant actually ran. In an hour the provider did not call (it expected about $15), nothing is owed. Over the month, the project nets these amounts against the fixed option premium it receives.

## Say it like this

(Guidance) "A heat rate call pays the holder power minus heat rate times gas for the hours it exercises. A generator sells one to lock in a fixed premium for its spark spread, and gives the upside in scarcity hours to the buyer."

## Common confusion

(Guidance) Heat rate call option is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

(Guidance) HRCO versus revenue put: both protect a project's downside. In a revenue put the project pays a premium up front and keeps the upside; in an HRCO it receives a fixed premium and gives up the upside. [e9][e10]

(Guidance) HRCO versus heat rate future or swap: the ICE ERCOT contract is linear: it applies the traded heat rate to every scheduled off-peak hour and settles at that heat rate times the NYMEX gas price for the month, while an option pays only when exercised. [e18][e19][e1]

(Guidance) The heat rate in the hedge is assumed: if the real plant is less efficient, the shortfall is the project's. [e17]

## Questions

### Who holds the option in a project HRCO, and who decides when the plant runs?

The hedge provider holds it and calls the hypothetical plant day-ahead, hour by hour. The project owner decides whether the real plant runs. [e7][e5] The project, as writer, is the one paid the premium. [e2][e39]

### Who else buys a heat rate call?

Deng et al. give the example of a power marketer that buys a spark spread call to cap the heat rate at which it buys power. [e37][e42] This is one paper's illustration; no saved source says how common such buyers are.

### Why might a lender prefer a revenue put to an HRCO?

With an HRCO the project may owe significant ongoing payments, made ahead of debt service, and the provider requires significant collateral; the revenue put has a one-off upfront premium and the upside stays with the project. [e16][e10]

### What if the plant trips during a price spike the provider has called?

The payout is notional and still owed; plant outages are the project's risk, so it must pay without the matching power revenue. [e3][e17]

### How do you judge whether a heat rate call is in the money?

Compare the market heat rate (power divided by gas) with the strike heat rate; above it, the call has a positive value if exercised, that is, it is in the money. [e38][e14][e36][e41]

### Why are ERCOT shortage hours central to valuing an HRCO?

The IMM says shortage pricing gives hundreds of hours a year above gas plants' marginal cost; those are hours when a call struck at a gas-plant heat rate is in the money, while hours at or below $0 pay nothing (reasoning from the IMM figures). [e20]

## Scenarios

### A developer of an ERCOT combined cycle is offered an HRCO hedge at a 7.0 heat rate. What do you check?

- The heat rate versus the plant's real efficiency, since any shortfall stays with the project. [e17]
- The power and gas indices and locations, because the payout is notional on indices. [e5][e3]
- The collateral and payment priority, given two-way credit exposure. [e15][e16]
- That the upside in ERCOT shortage hours goes to the provider. [e10][e20]

## Open items

- Single-source, not cross-checked (Norton Rose Fulbright only): banks appear to prefer revenue puts; Panda used HRCOs in several term loan B financings; a few HRCOs involve physical delivery.
- Single-source, not cross-checked (Pillsbury only, and ERCOT-specific so it would need a tier 1-2 source): the Panda Temple I combined cycle in ERCOT used revenue puts and filed for bankruptcy in April 2017.
- Sources differ on premium timing: the law-firm articles describe a fixed periodic premium paid to the project; the FpML example confirmation shows a single total premium of USD 342,000 with one payment date. [e28]
- No saved tier 1-2 source describes HRCO use in ERCOT or traded ERCOT heat rate option prices.
- Single-source, not cross-checked (Fields only): there are no quoted markets for heat rate options, so correlations are estimated.
- Checked 2026-11-22: Penn State EBF 301 Lesson 12 covers spark spreads and one-way contracts for differences but not heat rate options, so it adds no cross-check here. The FERC primer gives general option terms only (e1).
