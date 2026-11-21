---
id: tolling-agreement
name: Tolling Agreement
aliases: [tolling agreement, toll, tolling contract, tolling arrangement, tolling deal, battery toll, storage toll, tolling fee]
kind: product
domain: trading
level: 2
depth: deep
basis: industry-reference
lenses: [trading, portfolio, structuring]
as_of: 2026-11-21
links:
  - to: spark-spread
    type: related
    note: The toller takes the spark spread; the plant owner trades off the ability to make money on it in exchange for capacity payments. [e5][e11]
  - to: heat-rate-call-option
    type: related
    note: A toll's value is analysed as a strip of daily or hourly spread options on power against heat rate times gas. [e12][e13]
  - to: heat-rate
    type: related
    note: The plant owner is responsible for the plant's heat rate and availability under a toll. [e5]
  - to: ppa-vppa
    type: related
    note: The ERCOT Protocols group the two under one defined phrase, "Power Purchase or Tolling Agreement (PPA)". [e20][e21]
  - to: energy-storage-resource
    type: related
    note: Tolling can also be applied to batteries, where the offtaker takes dispatch rights and market revenues for a fixed price. [e3][e16]
  - to: battery-revenue-stack
    type: contrasts-with
    note: Under a full battery toll, energy and ancillary service revenues pass to the offtaker in exchange for a fixed payment. [e17][e16]
  - to: asset-optimization
    type: related
    note: LBNL lists fixed delivery obligations under tolls among dispatch strategies that pull PV-plus-storage operation away from market-value optimization. [e22]
  - to: qse
    type: related
    note: Under Protocol Section 5.6.1, QSEs that submit Power Purchase or Tolling Agreements cannot let Resource Entities file verifiable costs. [e20]
evidence:
  - id: e1
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal, 'Merchant plant tolling contracts divide risk' (November 15, 2000)"
    quote: "Under a tolling agreement, the tolling party supplies the fuel to a power plant operator and receives the electricity as the product, which it then markets."
  - id: e2
    source: ref-totalenergies-tolling
    locator: "TotalEnergies, 'What is tolling?' (January 19, 2026), What is a tolling agreement?"
    quote: "It allows a company that owns raw materials (such as natural gas) to ask another company, which owns a power plant, to convert that gas into electricity. The company supplying the gas retains ownership of the electricity produced and pays a conversion fee—called a ‘tolling fee’."
  - id: e3
    source: ref-totalenergies-tolling
    locator: "TotalEnergies, 'What is tolling?' (2026), What is a tolling agreement?"
    quote: "Tolling is an intermediate solution between producing in-house and completely outsourcing production. This system can also be applied to other means of production or storage, such as batteries (BESS)."
  - id: e4
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project (Powerex tolling), Chapter 4 Tolling, Introduction"
    quote: "Briefly, a tolling arrangement for a proposed or new generating facility typically assigns the completion and performance risks of the facility to the developer 1 contractor, and the operating and market (gas and power price) risks to the gas and power marketer."
  - id: e5
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal (2000), paragraph on project sponsors"
    quote: "Project sponsors reduce their risk but they also trade off the ability to make money on the spark spread. They become responsible for development and subsequent performance of the plant processing the fuel, including its heat rate and availability, in exchange for capacity payments whether or not the plant operates."
  - id: e6
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal (2000), paragraph after capacity payments"
    quote: "They also receive operating and maintenance payments and a start payment for ramping up the turbine. Project sponsors are also subject to various penalties for not meeting expectations of the tolling party, including not constructing the facility on time."
  - id: e7
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, Selected Tolling Analysis Methods, Introduction"
    quote: "Tolling agreements can involve significant financial obligations in the form of monthly capacity charges (option premium costs), fixed operating and maintenance costs, and fixed gas transportation and power transmission costs."
  - id: e8
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides, 'Tolling Deals' (G. Swindle, 2013), slide 4, Basics of Tolling Deals: Deal Structure"
    quote: "The typical structure is: - Daily day-ahead manual exercise into a standard power buckets. - Monthly ”capacity payments” (as opposed to upfront premium). - Monthly settlement."
  - id: e9
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 4, Basics of Tolling Deals: Deal Structure"
    quote: "The primary purpose of a toll is to annuitize the value of either a soon to be purchased asset or a soon to be built asset in order to facilitate borrowing."
  - id: e10
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 4, section 4.2 Description"
    quote: "The tolling arrangement serves as a long-term off-take agreement for the developer, who must finance the development and construction stages of the project on the strength of a longterm (20+ year) agreement from a third party to bear the price risk associated with the purchase and sale of gas and power."
  - id: e11
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 4, section 4.2 Description"
    quote: "The tolling arrangement also represents a form of real option, whereby the operator and dispatcher may choose from day to day, and even hour to hour whether or not to operate the plant and sell the generated power into the market."
  - id: e12
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, option valuation"
    quote: "Given a tolling agreement typically provides the purchaser with operating control on an hourly or daily basis, the complete tolling contract can be considered a strip of consecutive European spread options."
  - id: e13
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 3, Basics of Tolling Deals: Deal Structure"
    quote: "FP denotes the forward (or spot) price of power for a particular delivery bucket (e.g. 5x16) and FG denotes the price of natural gas; both are typically at liquid pricing hubs. - H∗ is the heatrate (conversion rate between gas and power). - V is VOM (variable operation and maintenance)."
  - id: e14
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 25, Daily Tolls: Working Problem"
    quote: "Most tolls trade for tenors of 5-7 years. - This is well outside the liquidity window at which individual contract months trade."
  - id: e15
    source: ref-esig-storage-contracts
    locator: "ESIG Forecasting & Markets Workshop (June 25, 2025), Aurora Energy Research presentation, slide 6, Tolling agreements: Fixed price"
    quote: "Under a toll, the offtaker assumes market price risk, in exchange for a fixed payment. Incentive alignment management is critical."
  - id: e16
    source: ref-esig-storage-contracts
    locator: "ESIG workshop (2025), Aurora presentation, slide 5, table of battery offtake structures, row Tolling agreements (battery receives / offtaker receives)"
    quote: "Pre-determined contract price Asset dispatch rights; market energy and Ancillary Service revenues"
  - id: e17
    source: ref-esig-storage-contracts
    locator: "ESIG workshop (2025), Aurora presentation, slide 6"
    quote: "Under a “full” tolling agreement, market revenues are passed through to the offtaker, in exchange for a fixed payment."
  - id: e18
    source: ref-totalenergies-tolling
    locator: "TotalEnergies, 'What is tolling?' (2026), benefits of the TTEPH agreement"
    quote: "TTEPH (which owns the plants): the guarantee of stable revenues, as it receives fixed fees without being exposed to fluctuations in gas or electricity prices."
  - id: e19
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal (2000), paragraph on the tolling party"
    quote: "For the tolling party, the agreement serves as a physical asset hedge to cover electricity trading positions."
  - id: e20
    source: np-05
    locator: "Section 5.6.1, Verifiable Costs, paragraph (1)"
    quote: "Notwithstanding the foregoing, QSEs that submit Power Purchase or Tolling Agreements (PPAs) do not have the option of allowing Resource Entities to file verifiable costs."
  - id: e21
    source: np-06
    locator: "Section 6.6.3.8, Real-Time Payment or Charge for Energy from a Settlement Only Distribution Generator (SODG) or a Settlement Only Transmission Generator (SOTG), paragraph (5)"
    quote: "Notwithstanding anything else in this Section except paragraphs (6) and (7) below, a Resource Entity may opt out of nodal pricing and continue Load Zone Settlement for any SODG or SOTG if, by January 1, 2019, the SODG or SOTG was operational or was subject to a Power Purchase or Tolling Agreement (PPA) or Transmission and/or Distribution Service Provider (TDSP) interconnection agreement, or had an executed agreement with a developer."
  - id: e22
    source: ref-lbnl-hybrids-2026
    locator: "LBNL, Identifying Barriers to Solar and Storage Hybrids, Year 1 Briefing (May 2026), barriers to increasing PV+S market value"
    quote: "Dispatch strategies tied to out-of-market considerations including fixed delivery obligations under tolls, PPAs, REC markets or state incentive programs"
  - id: e23
    source: ref-lbnl-hybrids-2026
    locator: "LBNL Year 1 Briefing (2026), regional net value discussion"
    quote: "This analysis does not account for potential additional revenue from RECs, tolling agreements, or state incentive programs that may underwrite these projects."
  - id: e24
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 4, plant availability"
    quote: "Plant availability may be guaranteed with associated liquidated damages for non-performance depending upon the complexity or simplicity of the tolling agreement."
  - id: e25
    source: ref-fields-tolling-slides
    locator: "Fields Institute lecture slides (2013), slide 3, Basics of Tolling Deals: Deal Structure"
    quote: "Tolling deal is a derivative rendition of a power generator. - Typically the fuel is natural gas."
  - id: e26
    source: ref-totalenergies-tolling
    locator: "TotalEnergies, 'What is tolling?' (2026), benefits of the TTEPH agreement"
    quote: "TotalEnergies and EPH: the use of power plants without having to invest in their construction or maintenance."
  - id: e27
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 4, section 4.2 Description"
    quote: "Naturally, the more volatile the price of the two underlying commodities, the greater the likelihood that positive spark spreads will be observed, leading to greater extrinsic value."
  - id: e28
    source: ref-ogj-tolling
    locator: "Oil & Gas Journal (2000), paragraph on volatility value"
    quote: "At the same time, merchant plants can be used to extract the \"volatility value\", or upside, potentially present in volatile gas and power markets, said Feldman."
  - id: e29
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread"
    quote: "The spark spread is calculated by subtracting the product of an assumed heat rate for a single or group of generation facilities and the price of natural gas from the price of power during the same period, and results in an effective margin that would be realized if one was to buy gas from the market, convert the gas to electricity at the stated heat rate (MMBtu / MWh) and sell the resulting electricity into the market at the market price."
  - id: e30
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, variable list for the tolling spark spread figure"
    quote: "OV= Variable Operating and Maintenance Costs [$/MWh]"
---

## Definition

A tolling agreement is a contract in which one party (the toller) supplies the fuel, usually natural gas, to another party's power plant and takes the electricity, which it then markets, in exchange for paying the plant owner a fee. [e1][e2][e25]

## How it works

The toller takes the market risk and the owner takes the plant risk. The SFU thesis says a toll typically assigns completion and performance risk to the developer or contractor and operating and gas and power price risk to the marketer. [e4] The Oil & Gas Journal article says plant sponsors give up the ability to make money on the spark spread and become responsible for the plant's performance, including its heat rate and availability. [e5]

The owner is paid mainly in fixed amounts. The sources describe capacity payments made whether or not the plant runs, plus operating and maintenance payments and a start payment; the SFU thesis calls the monthly capacity charges "option premium costs", and the Fields slides describe monthly capacity payments rather than an upfront premium. [e5][e6][e7][e8] TotalEnergies describes the owner's position as stable revenue from fixed fees without exposure to gas or power price swings. [e18][e2]

The toller gets a dispatch option and a physical position. It can choose day to day, even hour to hour, whether to run the plant and sell its power; the Fields slides describe daily day-ahead exercise into standard power buckets with monthly settlement. [e11][e8] The Oil & Gas Journal says the toll serves the tolling party as a physical asset hedge for its trading positions, and TotalEnergies says the toller uses plants without investing in building or maintaining them. [e19][e26]

The owner's performance is enforced by contract. Sponsors face penalties for not meeting the toller's expectations, such as late construction, and availability may be guaranteed with liquidated damages depending on how the toll is structured. [e6][e24]

Tolls are valued as options. Because the toller controls dispatch hourly or daily, the SFU thesis treats a toll as a strip of European spread options, and the Fields slides value each delivery day as the larger of zero and power minus heat rate times gas minus VOM. [e12][e13] More volatile power and gas prices raise the option (extrinsic or "volatility") value. [e27][e28]

The main purpose, for the owner, is financing. The Fields slides say the primary purpose is to annuitize the value of an asset to be bought or built in order to borrow, and the SFU thesis describes the toll as a long-term offtake agreement on which the developer finances construction. [e9][e10]

The same structure is used for batteries. TotalEnergies says tolling can apply to batteries, and an Aurora Energy Research presentation to ESIG describes battery tolls where the battery owner receives a pre-determined contract price and the offtaker receives dispatch rights and energy and ancillary service revenues. [e3][e16][e17][e15]

## Formula

Toll value per delivery day d (Fields Institute form): payoff = max(power price - heat rate x gas price - VOM, 0), summed over the days and buckets of each month and multiplied by the contracted quantity. [e13][e8] The SFU thesis gives the same structure as a strip of spread options on power and gas at the plant's heat rate, with the operating cost as the strike. [e12][e7]

- Power price: forward or spot price for a delivery bucket such as 5x16, usually at a liquid hub (Fields); the market price of power in the same period (SFU). [e13][e29]
- Heat rate: the conversion rate between gas and power. [e13][e29]
- VOM: variable operation and maintenance, in $/MWh. [e13][e30]
- Against this, the toller pays fixed monthly capacity charges. [e7][e8]

## ERCOT context

The ERCOT Protocols use the phrase "Power Purchase or Tolling Agreement (PPA)" as one defined term, without defining a toll separately. [e20][e21] Two current uses: under Section 5.6.1, QSEs that submit Power Purchase or Tolling Agreements cannot let Resource Entities file verifiable costs for RUC; under Section 6.6.3.8, an SODG or SOTG subject to such an agreement by January 1, 2019 could qualify to opt out of nodal pricing and keep Load Zone settlement. [e20][e21]

For solar-plus-storage, LBNL lists fixed delivery obligations under tolls and PPAs among the reasons empirical dispatch falls short of market-value-optimized dispatch, and notes its value analysis excludes revenue from tolling agreements that may underwrite projects. [e22][e23]

## Key facts

- Tenor: the Fields slides say most (gas) tolls trade for 5-7 years; the SFU thesis describes a long-term (20+ year) offtake agreement for a new plant. The sources differ. [e14][e10]
- Owner payments: capacity payments whether or not the plant runs, plus O&M and start payments (Oil & Gas Journal); monthly capacity charges (SFU, Fields). [e5][e6][e7][e8]
- Exercise and settlement: daily day-ahead exercise, monthly settlement (Fields); hour-to-hour dispatch choice (SFU). [e8][e11]
- Battery tolls: the offtaker takes dispatch rights and market revenues for a fixed price. [e16][e17][e3]
- ERCOT Protocols: "Power Purchase or Tolling Agreement (PPA)" appears in Sections 5.6.1 and 6.6.3.8. [e20][e21]

## Example

Suppose (illustrative, made-up numbers) a toller pays $8/kW-month in capacity charges for a 500 MW combined cycle at a 7.0 heat rate and $3 VOM. That is $4 million a month whatever happens. In a 5x16 hour with power at $60 and gas at $3, the toller runs the plant and earns 60 - 21 - 3 = $36/MWh; at $20 power it leaves the plant off. The toller profits only if the hours it runs earn more than the fixed capacity charge.

## Say it like this

(Guidance) "In a toll, the marketer rents the plant: it pays fixed capacity charges, supplies the gas, calls the plant when the spark spread pays, and keeps the power. The owner gets a steady payment to finance the plant and keeps the risk of the plant itself."

## Common confusion

(Guidance) Tolling agreement is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here, which only use the combined phrase "Power Purchase or Tolling Agreement (PPA)". [e20]

(Guidance) Toll versus PPA: in a toll the buyer supplies the fuel and takes the dispatch decision and price risk; the owner keeps plant performance risk. [e1][e4]

(Guidance) Toll versus heat rate call option: both pay power minus heat rate times gas, but a toll usually involves the toller supplying fuel and taking the physical output, while an HRCO is financial. [e1][e12]

## Questions

### Why would a plant owner sign a toll and give up the spark spread?

To get fixed capacity payments that support financing; the Fields slides say the primary purpose is to annuitize the asset's value to facilitate borrowing. [e5][e9]

### Who bears the risk of a bad heat rate or an outage?

The owner: it is responsible for the plant's performance, including heat rate and availability, and availability may be backed by liquidated damages. [e5][e24]

### How do you value a toll?

As a strip of daily or hourly spread options on power against heat rate times gas, less VOM, set against the capacity charges. [e12][e13][e7]

### Why are tolls more valuable when prices are volatile?

More volatility raises the chance of positive spark spreads, which raises the option's extrinsic value. [e27][e28]

### What does a battery toll give the offtaker?

Dispatch rights and the energy and ancillary service revenues, in exchange for a fixed payment to the battery owner. [e16][e17]

## Scenarios

### An ERCOT battery developer is offered a seven-year toll. What changes for the developer?

- It gives up energy and ancillary service revenues to the offtaker for a fixed payment, removing market price exposure. [e17][e15]
- It keeps responsibility for the asset's performance, as plant owners do under tolls generally. [e4][e5]
- LBNL warns that fixed delivery obligations under tolls can pull dispatch away from market-value optimization. [e22]

## Open items

- ERCOT-specific, tier 3 only (ESIG/Aurora): battery value in ERCOT is concentrated in very few months, which drives demand for tolls; battery tolls are present in ERCOT, MISO and CAISO with typical tenors of 5-7 years. Needs a tier 1-2 source.
- Single-source, not cross-checked (ESIG/Aurora): a 100% toll leaves the battery owner no economic link to market outcomes; mitigations include partial tolls and "virtual" (percentage-of-perfect) tolls.
- Single-source, not cross-checked (SFU): simple tolls (owner keeps operating risk, premium paid) versus complex tolls (purchaser takes owner-like risks); blended VOM and FOM of $US 2-4/MWh.
- Sources disagree on tenor (Fields 5-7 years versus SFU 20+ years for new-build offtake); not resolved.
- No saved tier 1-2 source describes the size or terms of ERCOT gas or storage tolls.
