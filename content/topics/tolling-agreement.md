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
as_of: 2026-11-22
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
    note: The ERCOT Protocols use the two in one capitalized phrase, "Power Purchase or Tolling Agreement (PPA)", which Section 2 does not define. [e20][e21]
  - to: energy-storage-resource
    type: related
    note: Tolling is also applied to batteries, where the offtaker takes dispatch rights and market revenues for a fixed payment. [e16][e34][e35]
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
  - id: e31
    source: np-09
    locator: "Section 9.14.7, Disputes for RUC Make-Whole Payment for Fuel Costs, paragraph (1)"
    quote: "Power Purchase or Tolling Agreement (PPA) filed as documentation of proof of fuel costs will not be accepted unless the PPA was signed prior to July 16, 2008, and is not between Affiliates, subsidiaries, or partners."
  - id: e32
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, option valuation (inputs to a spread option)"
    quote: "the strike price of the option (or in the case of a tolling agreement, the cost of making the exchange in terms of operating and maintenance or other charges)"
  - id: e29
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, section 5.5 Spark Spread"
    quote: "The spark spread is calculated by subtracting the product of an assumed heat rate for a single or group of generation facilities and the price of natural gas from the price of power during the same period, and results in an effective margin that would be realized if one was to buy gas from the market, convert the gas to electricity at the stated heat rate (MMBtu / MWh) and sell the resulting electricity into the market at the market price."
  - id: e30
    source: ref-sfu-tolling-thesis
    locator: "Simon Fraser University MBA project, Chapter 5, variable list for the tolling spark spread figure"
    quote: "OV= Variable Operating and Maintenance Costs [$/MWh]"
  - id: e33
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC, Further Definition of Swap (Final Rule, 77 FR 48208, August 2012), section II.B.2, capacity contracts, transmission services agreements and tolling agreements"
    quote: "tolling agreements, as described by commenters, provide a purchaser the right to the capacity, energy, ancillary services and any other product derived from a specified generating unit, all based upon a delivered fuel price and agreed heat rate."
  - id: e34
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy, 'Part 1: The state of battery offtake and tolling agreements in ERCOT' (September 4, 2025), Tolling / PPA"
    quote: "The offtaker pays a fixed $/MW fee for full access to the battery’s capacity. The asset owner locks in stable revenue, while the offtaker manages all upside and downside from arbitrage and Ancillary Services."
  - id: e35
    source: ref-troutman-storage-offtake-tolling
    locator: "Troutman Pepper, 'Monetizing Opportunities in Energy Storage in a Post-IRA World' (May 8, 2023), transcript (AI-generated, per the firm's disclaimer), Vaughn Morrison at 02:00"
    quote: "Under that structure, the off-taker has authority to charge and discharge the battery and run it as they see fit within certain operating parameters, in exchange for a monthly tolling payment, typically often with some adjusters based on project performance."
  - id: e36
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (European battery optimizer), 'BESS revenue models: tolling, floor & fully merchant' (February 4, 2025), Tolling for battery storage"
    quote: "Tolling agreements for BESS grant the asset owner a pre-defined sum of guaranteed revenue, independent of the commercial result later achieved by an optimizer. The offtaker has the right to utilize the asset’s capacity in the markets as desired and put limitations on the toller."
  - id: e37
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), Tolling for battery storage, first sentence"
    quote: "A battery tolling agreement is a contract between an asset owner (toller) and a toll provider (offtaker) that combines revenue stability with risk mitigation."
  - id: e38
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), Tolling for battery storage, second paragraph"
    quote: "The toller is responsible for the technical setup and all administrative aspects and must guarantee asset availability. Meanwhile, the authority over asset use transfers to the toll provider along with the risk. Battery tolling agreements have neither upside nor downside potential and best suit those who seek a safety net with reliable revenues."
  - id: e39
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Tolling / PPA, physical and virtual tolls"
    quote: "A virtual tolling agreement is financial. The asset owner continues to operate the asset, but the offtaker takes on the market risk and return through a contractual swap or settlement mechanism."
  - id: e40
    source: ref-esig-storage-contracts
    locator: "ESIG workshop (2025), Aurora presentation, slide 6, contract design options to retain incentive compatibility"
    quote: "Virtual toll: benchmarked performance (perfentage-ofperfect)."
  - id: e41
    source: ref-esig-storage-contracts
    locator: "ESIG workshop (2025), Aurora presentation, slide 6, contract design options"
    quote: "Partial toll: where battery owner retains a share in market revenues."
  - id: e42
    source: ref-modo-contracting-strategies-docs
    locator: "Modo Energy, Contracting Strategies (dispatch model documentation, version Oct 2026), Tolling agreement"
    quote: "A tolling agreement provides a fixed capacity payment ($/MW/year) for all or part of the battery’s capacity."
  - id: e43
    source: ref-enspired-bess-revenue-models
    locator: "enspired Trading (2025), Hybrid BESS revenue models"
    quote: "In a hybrid setup, the battery capacity is segmented and individually contracted. For example, a 10 MW battery can have half its capacity tolled and the other half fully merchant (with or without floor, with or without cap)."
  - id: e44
    source: ref-entergy-toll-term-sheet
    locator: "Entergy Services, Appendix B-2, Term Sheet for Tolling Agreements, 2020 RFP for CCGT capacity and energy resources for Entergy Texas, Inc. (April 28, 2020), pricing and payments"
    quote: "the Capacity Payment (equal to the Capacity Rate multiplied by the UCAP Rating (as defined in item 12 below) for the Dependable Capacity Allocated To Buyer); the Variable Payment (equal to the Variable O&M Rate multiplied by the energy that is dispatched by or for and delivered to Buyer at the Electric Interconnection Point as provided herein); and the Start-up Payment (equal to the Start-up Charge multiplied by the number of Completed Starts). All payments will be monthly in arrears."
  - id: e45
    source: ref-entergy-toll-term-sheet
    locator: "Entergy term sheet (2020), item 28, Fuel Supply and Transport"
    quote: "Subject to the following paragraph and the other terms of this Term Sheet, Buyer will have sole responsibility for and bear the full costs (including any applicable fuel taxes) of the arrangement, procurement, transportation, nomination, delivery, and storage of fuel, up to each Gas Delivery Point, for the performance of fuel-conversion services by Seller under the Definitive Agreement (“Contract Gas”)."
  - id: e46
    source: ref-entergy-toll-term-sheet
    locator: "Entergy term sheet (2020), item 16, Dispatch Rights and Exclusivity, minimum dispatch levels"
    quote: "Buyer may elect, in its sole and absolution discretion, not to dispatch any of the capacity allocated to Buyer (i.e., 0 MW)."
  - id: e47
    source: ref-entergy-toll-term-sheet
    locator: "Entergy term sheet (2020), availability requirement"
    quote: "If the Monthly Availability for a month is below the applicable Monthly Availability Requirement, a discount will apply to the payments from Buyer to Seller in respect of such month (the “Capacity Payment Discount”)."
  - id: e48
    source: ref-pacificorp-tolling-agreement
    locator: "PacifiCorp RFP-2009 Tolling Agreement (form filed with the Utah PSC), Section 4.1.7"
    quote: "In addition to Buyer providing the applicable Fuel Supply Requirement to Seller, Buyer shall also pay the amounts specified in Section 5, and Seller shall then provide to Buyer without additional charge or expense all Net Energy and Ancillary Services that have been Scheduled by Buyer."
  - id: e49
    source: ref-pacificorp-tolling-agreement
    locator: "PacifiCorp RFP-2009 Tolling Agreement form, Section 4.1.2"
    quote: "Subject to Section 5.1, Buyer shall purchase the Contract Capacity of the Facility and pay a monthly Capacity Payment to Seller."
  - id: e50
    source: ref-pacificorp-tolling-agreement
    locator: "PacifiCorp RFP-2009 Tolling Agreement form, Section 5.1.2, Monthly Capacity Payment"
    quote: "Monthly Capacity Payment = (CC × 1000 × CPR × MAAF) - CPS, where: CC = the Contract Capacity; CPR = Capacity Payment Rate; CPS = Capacity Payment Shortfall, if any; and MAAF = Availability Adjustment Factor for that month, computed as follows:"
  - id: e51
    source: ref-rff-merchant-hedges
    locator: "Resources for the Future, Working Paper 19-06 (2019), section 3.1, footnote 7"
    quote: "If a project combines wind or solar with energy storage, a variation on a physical PPA, known as a tolling agreement, is also feasible. A tolling agreement, common in fossil-fuel power projects, allows the offtaker to decide when the project will dispatch electricity."
  - id: e52
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC, Further Definition of Swap (2012), section II.B.2, text after the tolling agreement description"
    quote: "Such agreements, contracts and transactions, may have features that will satisfy the ``forwards with embedded volumetric optionality'' interpretation discussed above, or, like full requirements contracts, may not contain embedded volumetric options and may satisfy other portions of the forward interpretations herein."
  - id: e53
    source: ref-cftc-swap-definition-2012
    locator: "CFTC and SEC, Further Definition of Swap (2012), section II.B.2.b(iii), commenter views on physical tolling agreements"
    quote: "One commenter, for example, characterized taking power produced pursuant to a physical tolling agreement--which can involve one party thereto providing fuel for a generation plant and having the exclusive right to take the power produced by that plant from the fuel provided--thus, in effect, ``renting'' the plant to the extent the plant is used to produce power from the fuel provided--as more akin to a lease than to an option."
  - id: e54
    source: ref-modo-ercot-offtake-tolling-2025
    locator: "Modo Energy (2025), Tolling / PPA, physical toll"
    quote: "A physical tolling agreement gives the offtaker direct dispatch rights over a specific battery or generation asset. The offtaker schedules, bids, and controls the physical asset, while the owner receives a fixed or structured payment regardless of how it is used."
---

## Definition

A tolling agreement is a contract in which one party (the toller) supplies the fuel, usually natural gas, to another party's power plant and takes the electricity, which it then markets, in exchange for paying the plant owner a fee. [e1][e2][e25] The CFTC, summarizing how commenters described them in its 2012 swap-definition rule, says tolling agreements give a purchaser the right to the capacity, energy, ancillary services and other products of a specified generating unit, all based on a delivered fuel price and an agreed heat rate. [e33]

## How it works

The toller takes the market risk and the owner takes the plant risk. The SFU thesis says a toll typically assigns completion and performance risk to the developer or contractor and operating and gas and power price risk to the marketer. [e4] The Oil & Gas Journal article says plant sponsors give up the ability to make money on the spark spread and become responsible for the plant's performance, including its heat rate and availability. [e5]

The owner is paid mainly in fixed amounts. The Oil & Gas Journal article describes capacity payments made whether or not the plant runs, plus operating and maintenance payments and a start payment, and an Entergy model term sheet (a 2020 RFP form) sets out the same three: a Capacity Payment, a Variable Payment of a Variable O&M Rate times the energy dispatched by or for the Buyer, and a Start-up Payment per completed start, all paid monthly in arrears. [e5][e6][e44] A PacifiCorp form agreement likewise has the Buyer pay a monthly Capacity Payment. [e49] Separately, the SFU thesis calls the monthly capacity charges "option premium costs", and the Fields slides describe monthly capacity payments rather than an upfront premium. [e7][e8] TotalEnergies describes the owner's position as stable revenue from fixed fees without exposure to gas or power price swings. [e18][e2]

The toller gets a dispatch option and a physical position. It can choose day to day, even hour to hour, whether to run the plant and sell its power; the Fields slides describe daily day-ahead exercise into standard power buckets with monthly settlement. [e11][e8] Resources for the Future, in a note on wind or solar projects with storage, also says a toll (which it calls common in fossil-fuel projects) lets the offtaker decide when the project dispatches. [e51] The contract forms show the same allocation: the Entergy term sheet lets the Buyer choose not to dispatch at all (0 MW) and makes the Buyer solely responsible for procuring and delivering fuel up to the gas delivery point, subject to the term sheet's other provisions; the PacifiCorp form has the Buyer supply the fuel, pay the Section 5 amounts, and receive the energy and ancillary services it schedules without additional charge. [e46][e45][e48] The Oil & Gas Journal says the toll serves the tolling party as a physical asset hedge for its trading positions, and TotalEnergies says the toller uses plants without investing in building or maintaining them. [e19][e26]

The owner's performance is enforced by contract. Sponsors face penalties for not meeting the toller's expectations, such as late construction, and availability may be guaranteed with liquidated damages depending on how the toll is structured. [e6][e24] In the forms, availability feeds into payment: the PacifiCorp monthly capacity payment is multiplied by an availability adjustment factor, and the Entergy term sheet discounts the capacity payment when monthly availability falls below its requirement. [e50][e47]

Tolls are valued as options. Because the toller controls dispatch hourly or daily, the SFU thesis treats a toll as a strip of European spread options, and the Fields slides value each delivery day as the larger of zero and power minus heat rate times gas minus VOM. [e12][e13] More volatile power and gas prices raise the option (extrinsic or "volatility") value. [e27][e28]

The main purpose, for the owner, is financing. The Fields slides say the primary purpose is to annuitize the value of an asset to be bought or built in order to borrow, and the SFU thesis describes the toll as a long-term offtake agreement on which the developer finances construction. [e9][e10]

The same structure is used for batteries: the owner sells the right to operate the battery for a fixed payment. For a physical battery toll, Modo Energy (writing about ERCOT), Troutman Pepper (a US law firm) and an Aurora Energy Research presentation to ESIG agree that the offtaker gets the right to charge, discharge and bid the battery and takes the energy and ancillary service revenues, while the owner receives a fixed or pre-determined payment; Troutman adds that the monthly payment often has adjusters based on project performance. [e34][e54][e35][e16][e17] enspired, a European optimizer, describes battery tolls the same way, and TotalEnergies says tolling can also be applied to batteries. [e36][e3]

Battery tolls come in variants. Modo and Aurora both describe a virtual toll, but differently: Modo says it is financial, with the owner still operating the asset while the offtaker takes the market risk and return through a swap or settlement; Aurora describes it as benchmarked performance (percentage-of-perfect). [e39][e40] A toll can also cover only part of a battery: Aurora lists partial tolls in which the owner keeps a share of market revenues, Modo's model allows a toll on all or part of the capacity, and enspired gives the example of half a battery tolled and half merchant. [e41][e42][e43]

## Formula

Toll value per delivery day d (Fields Institute form): payoff = max(power price - heat rate x gas price - VOM, 0), summed over the days and buckets of each month and multiplied by the contracted quantity. [e13][e8] The SFU thesis gives the same structure as a strip of spread options on power and gas at the plant's heat rate, with the operating and maintenance or other charges as the strike. [e12][e32]

- Power price: forward or spot price for a delivery bucket such as 5x16, usually at a liquid hub (Fields); the market price of power in the same period (SFU). [e13][e29]
- Heat rate: the conversion rate between gas and power. [e13][e29]
- VOM: variable operation and maintenance, in $/MWh. [e13][e30]
- Against this, the toller pays fixed monthly capacity charges. [e7][e8]

## ERCOT context

The ERCOT Protocols use the phrase "Power Purchase or Tolling Agreement (PPA)" as one capitalized phrase with a single acronym; Section 2 (Definitions and Acronyms) has no entry defining it or a toll separately. [e20][e21] Uses include: under Section 5.6.1, QSEs that submit Power Purchase or Tolling Agreements cannot let Resource Entities file verifiable costs for RUC; under Section 6.6.3.8, an SODG or SOTG subject to such an agreement by January 1, 2019 could qualify to opt out of nodal pricing and keep Load Zone settlement; and under Section 9.14.7, a PPA filed as proof of fuel costs in a RUC make-whole fuel dispute is accepted only if signed before July 16, 2008 and not between Affiliates, subsidiaries or partners. [e20][e21][e31]

In a national study of solar-plus-storage (not ERCOT-specific), LBNL lists dispatch tied to fixed delivery obligations under tolls and PPAs among the barriers that limit market value, and notes its value analysis excludes revenue from tolling agreements that may underwrite projects. [e22][e23]

## Key facts

- Tenor: the Fields slides say most (gas) tolls trade for 5-7 years; the SFU thesis describes a long-term (20+ year) offtake agreement for a proposed or new plant. They describe different contexts (traded tolls versus new-build offtake), so the figures are not directly in conflict. [e14][e10][e4]
- Owner payments: capacity payments whether or not the plant runs, plus O&M and start payments (Oil & Gas Journal); monthly capacity charges (SFU, Fields). [e5][e6][e7][e8]
- Exercise and settlement: daily day-ahead exercise, monthly settlement (Fields); hour-to-hour dispatch choice (SFU). [e8][e11]
- Battery tolls: the offtaker takes dispatch rights and the energy and ancillary service revenues for a fixed payment to the owner. [e16][e17][e34][e35]
- ERCOT Protocols: "Power Purchase or Tolling Agreement (PPA)" appears in Sections 5.6.1, 6.6.3.8 and 9.14.7, among others. [e20][e21][e31]
- Owner payments in two utility contract forms: capacity, variable O&M and start-up payments, monthly in arrears (Entergy 2020 term sheet); a monthly capacity payment scaled by availability (PacifiCorp form). [e44][e49][e50]
- US commodity regulation: in its 2012 swap-definition rule the CFTC said tolling agreements may have features that fit its forward-contract interpretations (including forwards with embedded volumetric optionality); it did not classify them categorically. [e52]

## Example

Suppose (illustrative, made-up numbers) a toller pays $8/kW-month in capacity charges for a 500 MW combined cycle at a 7.0 heat rate and $3 VOM. That is $4 million a month whatever happens. In a 5x16 hour with power at $60 and gas at $3, the toller runs the plant and earns 60 - 21 - 3 = $36/MWh; at $20 power it leaves the plant off. The toller profits only if the hours it runs earn more than the fixed capacity charge.

## Say it like this

(Guidance) "In a toll, the marketer rents the plant: it pays fixed capacity charges, supplies the gas, calls the plant when the spark spread pays, and keeps the power. The owner gets a steady payment to finance the plant and keeps the risk of the plant itself."

## Common confusion

(Guidance) Tolling agreement is general industry usage; it is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here, which only use the combined phrase "Power Purchase or Tolling Agreement (PPA)". [e20]

(Guidance) Toll versus PPA: in a toll the buyer supplies the fuel and takes the dispatch decision and price risk; the owner keeps plant performance risk. [e1][e4]

(Guidance) Who is the "toller"? The gas-plant sources use the term for the party that supplies the fuel and takes the power (the Oil & Gas Journal's "tolling party"), but enspired calls the battery asset owner the "toller" and the offtaker the "toll provider". Check which side a document means. [e1][e37]

(Guidance) Physical or financial? A CFTC rulemaking reports one commenter's view that taking power under a physical toll, where one party provides fuel and has the exclusive right to the power, is in effect renting the plant and more like a lease than an option; that is a commenter's view, not a CFTC finding. [e53]

(Guidance) Toll versus heat rate call option: the payoff of both is power minus heat rate times gas. The Oil & Gas Journal and TotalEnergies describe tolls in which the toller supplies the fuel and takes the electricity, while the Fields slides call a toll a derivative rendition of a power generator, so check whether a given toll is physical or financial. [e1][e2][e25]

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

The right to charge, discharge and bid the battery and the energy and ancillary service revenues that come with it, in exchange for a fixed payment to the owner (Modo, Troutman Pepper, Aurora). [e34][e35][e16] The owner keeps responsibility for the asset: enspired says the owner must guarantee availability, and Troutman says payments often adjust for project performance. [e38][e35]

## Scenarios

### An ERCOT battery developer is offered a seven-year toll. What changes for the developer?

- It gives up energy and ancillary service revenues to the offtaker for a fixed payment, removing market price exposure. [e17][e15][e34]
- It can toll only part of the battery and keep the rest merchant. [e41][e42]
- It keeps responsibility for the asset's performance, as plant owners do under tolls generally. [e4][e5]
- LBNL's national study lists dispatch tied to fixed delivery obligations under tolls among the barriers to market value. [e22]

## Open items

- ERCOT-specific, tier 3 only (ESIG/Aurora; Modo Energy): Aurora says battery value in ERCOT is concentrated in very few months, which drives demand for tolls, and that battery tolls are present in ERCOT, MISO and CAISO with typical tenors of 5-7 years; Modo (September 2025) counts five operating ERCOT batteries under known tolling agreements and seven more expected by the end of 2026. Needs a tier 1-2 source.
- Resolved 2026-11-22: battery-toll dispatch rights and energy and AS revenues to the offtaker (now Modo, Troutman Pepper and Aurora); partial tolls (Aurora, Modo, enspired); existence of virtual tolls (Modo, Aurora).
- Single-source, not cross-checked (ESIG/Aurora): a 100% toll leaves the owner no ongoing incentive to maximize revenues. enspired and Modo say only that the owner has no upside or downside from the market under a toll.
- Sources differ on what a virtual toll is: financial swap or settlement with the owner still operating (Modo); benchmarked percentage-of-perfect performance (Aurora). GridBeyond's offer of physical and virtual (synthetic) tolls is reported by GridBeyond and pv magazine, counted here as one voice and not used as a cross-check.
- Single-source, not cross-checked (Troutman Pepper, AI-generated transcript): tolls are mainly found in bilateral markets with utility offtakers, and true physically settled tolls in organized markets are the exception.
- Single-source, not cross-checked (SFU): simple tolls (owner keeps operating risk, premium paid) versus complex tolls (purchaser takes owner-like risks); blended VOM and FOM of $US 2-4/MWh.
- Tenor: Fields (5-7 years, traded gas tolls) and SFU (20+ years, new-build offtake) describe different contexts; no saved source gives a typical tenor for ERCOT gas tolls.
- No saved tier 1-2 source describes the size or terms of ERCOT gas or storage tolls.
