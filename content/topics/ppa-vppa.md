---
id: ppa-vppa
name: PPA & Virtual PPA
aliases: [PPA, power purchase agreement, VPPA, virtual PPA, financial PPA, synthetic PPA, physical PPA, contract for differences]
kind: product
domain: trading
level: 2
lenses: [trading, portfolio, structuring, retail]
as_of: 2026-11-21
depth: deep
basis: industry-reference
links:
  - to: basis-risk
    type: related
    note: Virtual PPAs are typically settled at a trading hub while the generator is paid at its node, which creates node-to-hub basis risk. [e30][e31]
  - to: shape-risk
    type: related
    note: Every hedge of this kind multiplies an hourly price difference by a volume, so the timing of output against prices drives the result. [e22]
  - to: volumetric-risk
    type: related
    note: "Hedges differ in the volume used: metered output in an as-generated VPPA, or a scheduled notional quantity in some VPPAs. [e21][e23]"
  - to: retail-hedging
    type: used-in
    note: The IMM says many ERCOT LSEs manage price exposure through owning generation, bilateral PPAs, futures or day-ahead purchases. [e37]
  - to: tax-credits-recs
    type: related
    note: RECs from the project are typically conveyed to the buyer in a financial PPA, though not always. [e19][e20]
  - to: negative-prices
    type: related
    note: Buyers seek floors because an uncapped obligation to pay the difference at negative prices can mean large settlement payments to the project. [e28][e29]
  - to: tolling-agreement
    type: contrasts-with
    note: The ERCOT Protocols use the one phrase "Power Purchase or Tolling Agreement (PPA)" for both kinds of contract. [e33]
  - to: winter-storm-uri
    type: related
    note: UT Austin says wind hedges could trigger payments when wholesale prices exceeded contract prices or output fell below contracted quantities during Uri. [e40]
  - to: trading-hub
    type: settles
    note: Hub settlement of VPPAs is frequent, and hubs are aggregations of nodes. [e30][e31]
  - to: sc-data-center-ppa
    type: example-of
    note: A data center using a VPPA still buys its own power, so an offline project leaves it paying spot prices with no offset. [e41][e8]
evidence:
  - id: e1
    source: ref-powermag-ppa
    locator: "Introduction"
    quote: "The PPA, the long-term contract between a power generator selling electrical power to an electricity purchaser or offtaker, has been and remains the mainstay of competitive power markets and forms the lynchpin for the financing of power generation projects."
  - id: e2
    source: ref-epex-wind-hedging
    locator: "General Introduction and Problem Definition"
    quote: "A Power Purchase Agreement (PPA) is a legal contract between a power producer and a power purchaser. The agreement typically outlines the terms of the sale of power, including pricing, delivery, and payment."
  - id: e3
    source: ref-ornl-ppa
    locator: "Introduction, p. 1"
    quote: "A power purchase agreement (PPA) is a contract between a renewable energy developer and an electricity consumer, often called an “offtaker.”"
  - id: e4
    source: ref-epa-financial-ppa
    locator: "Financial PPA, opening section"
    quote: "A financial PPA is a financial arrangement between a renewable electricity generator (the seller) and a customer (the buyer) that enables both parties to hedge against electricity market price volatility. Unlike with a physical power purchase agreement (physical PPA), there is no physical delivery of power from the seller to the customer. Instead, the energy is delivered to the grid and the customer needs to purchase electricity independent of this financial arrangement."
  - id: e5
    source: ref-nrf-vppa-financing
    locator: "Introduction"
    quote: "A virtual PPA is a power contract under which the electricity generator sells its electricity in the spot market and then exchanges the floating revenue it receives for fixed payments from a corporate offtaker. This is in contrast with a more traditional PPA where there is physical delivery of electricity to the offtaker."
  - id: e6
    source: ref-epa-financial-ppa
    locator: "Financial PPA, opening section"
    quote: "Financial PPAs are also sometimes known as “virtual” or “synthetic” PPAs, a contract for differences, or a fixed-for-floating swap."
  - id: e7
    source: ref-c2es-ppa
    locator: "Types of PPAs (p. 3)"
    quote: "There are two types of PPAs: physical and virtual (also called a financial or synthetic PPA)."
  - id: e8
    source: ref-epa-green-power-glossary
    locator: "Glossary, Financial power purchase agreement (PPA)"
    quote: "A contract in which a generator and purchaser agree upon a predetermined reference electricity price (also called a “strike price”), but the power is sold into the local wholesale electricity market near the generator rather than directly to the power purchaser. The generator and the purchaser compensate each other on the difference between the previously agreed-upon reference electricity price and wholesale market prices, providing both with stable income and expense."
  - id: e9
    source: ref-epa-financial-ppa
    locator: "Financial PPA, illustration of settlement"
    quote: "To illustrate how this works, imagine two parties enter into a financial PPA with a strike price of 10 cents/kWh. The renewable electricity generator owes the customer the difference when the wholesale price is above 10 cents/kWh, and the customer owes the renewable electricity generator the difference when the wholesale price is below 10 cents/kWh. At the close of each settlement period—typically monthly—the customer receives from (or sends to) the renewable electricity generator the net difference in price per kilowatt-hour between the strike price and wholesale market price."
  - id: e10
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPAs as contracts for differences"
    quote: "To the extent the current market price of power under a VPPA exceeds the fixed “strike price” the offtaker has agreed to pay, then the independent power company must pay the excess to the offtaker for each megawatt hour of power produced by the project. To the extent the current market price of power produced by the project is lower than the fixed strike price, then for each megawatt hour of power, the offtaker must pay the difference to the independent power company, thereby providing a floor price the project will receive for its electricity."
  - id: e11
    source: ref-yale-vppa
    locator: "Section on how a VPPA works"
    quote: "For instance, should the floating market price that developers receive for the sale of their energy on the wholesale electricity market fall below the fixed price delineated in the VPPA, the buyer pays the difference to the developer through monthly or quarterly financial settlements."
  - id: e12
    source: ref-nrf-vppa-risks
    locator: "Section on VPPA structure"
    quote: "The VPPA typically settles monthly."
  - id: e13
    source: ref-epa-green-power-glossary
    locator: "Glossary, Physical power purchase agreement (PPA)"
    quote: "Physical PPAs, which are usually 10- to 20-year agreements, define all of the commercial terms for the sale of renewable electricity between the two parties, including when the project will begin commercial operation, schedule for delivery of electricity, penalties for underdelivery, payment terms and termination."
  - id: e14
    source: ref-epa-green-power-glossary
    locator: "Glossary, Physical power purchase agreement (PPA)"
    quote: "Physical PPAs by non-utility consumers are generally only allowed in competitive electricity markets, and the renewable energy generator and customers must be located in the same power market to allow for physical delivery of electricity."
  - id: e15
    source: ref-yale-vppa
    locator: "Section comparing physical and virtual PPAs"
    quote: "Moreover, with PPPAs, developers and buyers must be located in the same electricity market – i.e. projects must be located near the corporations’ facilities – to allow for the physical transfer of power to buyers’ facilities."
  - id: e16
    source: ref-ornl-ppa
    locator: "Virtual PPAs section"
    quote: "In a virtual PPA, the offtaker and the generation project do not need to be in the same market."
  - id: e17
    source: ref-c2es-ppa
    locator: "Types of PPAs (p. 3)"
    quote: "Note that the customer still purchases electricity from its local provider, even though the customer is buying and selling renewable electricity in the market where the vPPA is located."
  - id: e18
    source: ref-epa-financial-ppa
    locator: "Financial PPA, hedge discussion"
    quote: "A financial PPA can serve as a hedge against electricity price volatility for the customer. This benefit occurs when the price of the power that the financial PPA project sells into the wholesale electricity market is correlated with the price the customer is paying to purchase the electricity for its own operations."
  - id: e19
    source: ref-epa-financial-ppa
    locator: "Financial PPA, opening section"
    quote: "Typically, the renewable energy certificates (RECs), generated by the renewable electricity generator, are contractually conveyed to the customer in the financial PPA."
  - id: e20
    source: ref-epa-financial-ppa
    locator: "Financial PPA, REC ownership"
    quote: "Since RECs are treated differently in each financial PPA, it is important that the customer understand REC ownership in their particular contract. The project’s RECs may not be conveyed to the customer and may instead be sold by the project owner into the compliance market."
  - id: e21
    source: ref-nrf-hedges-since-uri
    locator: "Three flavors of hedge"
    quote: "In an as-generated contract, also called a VPPA or virtual power purchase agreement, the price difference in an hour is multiplied by whatever power was actually generated in that hour. It uses the metered generation."
  - id: e22
    source: ref-nrf-hedges-since-uri
    locator: "Three flavors of hedge"
    quote: "Most hedges are settled on an hourly basis. Most compare the spot market price for electricity that hour to an agreed-upon fixed price. One price is subtracted from the other, and the difference is multiplied by a volume of power for that hour."
  - id: e23
    source: ref-nrf-vppa-financing
    locator: "Section on cash flows under a typical virtual PPA"
    quote: "It is worth noting that, unlike energy payments made under traditional PPAs, payments under a virtual PPA are often calculated based on a scheduled notional quantity of electricity instead of actual output."
  - id: e24
    source: ref-epa-financial-ppa
    locator: "Financial PPA, opening section"
    quote: "Rather, a financial PPA is a hedge arrangement that offers buyers cost predictability for their electricity use and promotes growth in the renewable energy sector by offering project developers long-term contracts with predictable revenues—a key element to attracting project financing and investment."
  - id: e25
    source: ref-nrf-vppa-risks
    locator: "Section on VPPA structure"
    quote: "For a developer or sponsor, entering into a VPPA helps to put a floor under the electricity price for a project, which is a key step toward project financing."
  - id: e26
    source: ref-powermag-ppa
    locator: "Traditional PPAs section"
    quote: "Traditional PPAs are typically for terms of 20 years to 35 years, during which time the offtaker buys physical energy and may also purchase environmental attributes, as well as capacity and ancillary services associated with the energy."
  - id: e27
    source: ref-nrf-vppa-financing
    locator: "Section on price escalation"
    quote: "Project owners often prevail in these debates, as the shorter term of most virtual PPAs (ranging from 10 to 15 years) makes price escalation more palatable for offtakers not locked into a 20-year commitment."
  - id: e28
    source: ref-yale-ppa-risk
    locator: "Section on pricing risk"
    quote: "An increasing number of corporates have sought protection from negative wholesale revenues with a $0 price floor for their PPAs. However, the use of price floors shift down-side price risk to the project company."
  - id: e29
    source: ref-nrf-vppa-financing
    locator: "Section on negative price risk"
    quote: "If a virtual PPA provides that the corporate purchaser is unconditionally obligated to pay the absolute difference between real-time market rates and the fixed price, it might be obligated to cover a hefty, unexpected settlement payment to the project owner."
  - id: e30
    source: ref-powermag-ppa
    locator: "Virtual PPAs section"
    quote: "Basis risk (also known as “locational basis risk” or “node-to-hub basis risk”) results from the fact that VPPAs are typically settled at a major trading hub remote from the generation project, while the generator/seller receives payment for wholesale market prices at a nodal delivery point."
  - id: e31
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk"
    quote: "VPPAs are frequently hub-settled. Hubs are aggregations of nodes."
  - id: e32
    source: ref-ornl-ppa
    locator: "Sleeved PPA, p. 2"
    quote: "A Sleeved PPA is a type of offsite physical PPA where the local utility company acts as an intermediary between the offtaker and the developer (Figure 3). The utility takes electricity directly from the developer and bundles it with the offtaker’s delivered energy for a fee, usually called a sleeving fee."
  - id: e33
    source: np-05
    locator: "Section 5.6.1, Verifiable Costs, paragraph (1)"
    quote: "Notwithstanding the foregoing, QSEs that submit Power Purchase or Tolling Agreements (PPAs) do not have the option of allowing Resource Entities to file verifiable costs."
  - id: e34
    source: np-06
    locator: "Section 6.6.3.8, Real-Time Payment or Charge for Energy from a SODG or SOTG, paragraph (5)"
    quote: "Notwithstanding anything else in this Section except paragraphs (6) and (7) below, a Resource Entity may opt out of nodal pricing and continue Load Zone Settlement for any SODG or SOTG if, by January 1, 2019, the SODG or SOTG was operational or was subject to a Power Purchase or Tolling Agreement (PPA) or Transmission and/or Distribution Service Provider (TDSP) interconnection agreement, or had an executed agreement with a developer."
  - id: e35
    source: puct-25-107
    locator: "16 TAC §25.107(f)(1)(A)(i)(III), access to capital, guarantor eligibility"
    quote: "A provider of wholesale power supply for the REP, or a parent company, sister company, or subsidiary of a power provider with whom the REP has executed a power purchase agreement."
  - id: e36
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e37
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e38
    source: ut-uri-timeline
    locator: "Section 3, economic impacts, footnote 134 (p. 65)"
    quote: "A commitment might result from the sale of energy through a purchased power agreement (PPA), some other out-of-market bilateral contract between a generator and a counterparty, the sale of generation through a nonERCOT market such as the Intercontinental Exchange (ICE), or an award in ERCOT’s formal day-ahead market."
  - id: e39
    source: ut-uri-timeline
    locator: "Section 3, economic impacts (p. 65)"
    quote: "Many generators, however, have locked-in a price for their generation through a contract or exchange, thus limiting its profit potential."
  - id: e40
    source: ut-uri-timeline
    locator: "Section 3, economic impacts (p. 66)"
    quote: "Wind generation owners often receive revenue through financial hedges. Wholesale market prices in excess of contract prices and/or wind generation below contracted quantities may trigger a payment to a counter-party (often a financial institution)."
  - id: e41
    source: ref-nrf-hedges-since-uri
    locator: "Section on the buyer's perspective during Uri"
    quote: "It has a virtual power purchase agreement with a solar project or wind farm to hedge its cost of electricity. If that plant was shut down during the storm, that energy purchaser ended up paying $9,000 a MWh for the electricity it needed, and it received $0 from the VPPA hedge it holds with a renewable plant."
  - id: e42
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "The price of electricity spiked to $9,000 per MWh and stayed there by orders of the PUCT, which suspended some market price setting rules during the electricity blackouts."
  - id: e43
    source: imm-som-2025
    locator: "Executive Summary, Market Operations, bullets on offers at or below $0"
    quote: "35% of real-time generation capacity was offered at less than or equal to $0 in 2025 compared to 32% in 2024. These offers are primarily associated with wind and solar resources that are incentivized to produce even when prices are negative because many receive federal production tax credits."
  - id: e44
    source: ref-epa-vppa-webinar
    locator: "Slide 24, Challenges and Risks of VPPAs"
    quote: "Effectiveness of hedge is contingent on correlation between power markets"
  - id: e45
    source: ref-yale-vppa
    locator: "Section on physical PPAs"
    quote: "In contrast to a Virtual PPA, electricity under a PPPA is physically transferred from renewable energy developers to buyers through an intermediary utility company, which receives a management (or “sleeving”) fee from the buyer for maintenance and execution."
  - id: e46
    source: ref-rmi-ppa-risk
    locator: "Volume Risk, Further Detail (p. 22)"
    quote: "Since the value of a VPPA to a city in any given period is the product of the energy generated and the difference between the market and VPPA prices, any variability in the former causes uncertainty to the project’s value."
---

## Definition

A power purchase agreement (PPA) is a contract between a power producer and a purchaser (the "offtaker") for the sale of power, setting terms such as price, delivery and payment; the sources describe it as long-term. [e1][e2][e3] In a physical PPA the power is delivered to the buyer. In a virtual PPA (also called a financial or synthetic PPA) nothing is delivered: the generator sells its output into the wholesale market, and the two parties swap the floating market revenue for a fixed price. [e4][e5][e7]

## How it works

**Physical PPA.** The buyer takes delivery of the power. EPA's glossary says physical PPAs by non-utility buyers are generally allowed only in competitive markets, and that the generator and buyer must be in the same power market; Yale says the same about location. [e14][e15] A sleeved PPA is an offsite physical PPA in which a utility or other intermediary takes the project's power, delivers it with the buyer's other energy, and charges a sleeving fee. [e32][e45]

**Virtual PPA.** The parties agree a fixed "strike" price. The project sells its power into the wholesale market near the generator, and the two sides settle the difference between the strike and the market price. [e8][e9] When the market price is above the strike, the generator pays the buyer the excess; when it is below, the buyer pays the generator, so the generator in effect receives the strike price. [e9][e10][e11] The buyer and project need not be in the same market, and the buyer keeps buying its own power from its local supplier. [e16][e17][e4] The sources call this structure a contract for differences or a fixed-for-floating swap. [e6][e8]

**Settlement.** EPA, Norton Rose Fulbright and Yale say virtual PPAs typically settle monthly (Yale: monthly or quarterly). [e9][e12][e11] Norton Rose Fulbright's 2022 article says most hedges are calculated hour by hour: the hourly price difference times a volume for that hour. [e22] These fit together as an hourly calculation paid out each period, though no single source says so in one place.

**Volume.** In an as-generated contract (Norton Rose Fulbright's term for a VPPA) the hourly difference is multiplied by the metered output; RMI likewise describes a VPPA's value in a period as the energy generated times the difference between the market and VPPA prices. [e21][e46] A separate Norton Rose Fulbright article says VPPA payments are often based on a scheduled notional quantity rather than actual output. [e23] Which volume applies is a contract term; see Volumetric Risk.

**Why parties sign.** For the developer, the fixed price gives predictable revenue and a floor under its price, which EPA and Norton Rose Fulbright both call key to project financing. [e24][e25] For the buyer, the contract is a hedge only if the project's market price moves with the price the buyer pays for its own power. [e18][e44]

**RECs.** RECs are typically conveyed to the buyer in a financial PPA, but not always; the project may sell them instead. [e19][e20]

## ERCOT context

The ERCOT Protocols use the defined phrase "Power Purchase or Tolling Agreement (PPA)". In RUC cost recovery, QSEs that submit such agreements cannot let Resource Entities file verifiable costs. [e33] For settlement-only distribution and transmission generators, a Resource Entity could opt out of nodal pricing and keep Load Zone Settlement if, by January 1, 2019, the unit was operational, subject to a PPA or interconnection agreement, or had an executed agreement with a developer. [e34]

PUCT rules recognise PPAs in retail supply: a REP's guarantor for access to capital may be its wholesale power supplier, or an affiliate of a power provider with whom the REP has executed a power purchase agreement. [e35]

The IMM lists bilateral PPAs among the ways ERCOT LSEs manage price exposure, alongside owning generation, futures and day-ahead purchases. [e37] UT Austin's Uri report lists a PPA as one way a generator takes on a delivery commitment, with other bilateral contracts, ICE sales and day-ahead awards. [e38]

Because ERCOT generators settle at their own node's LMP and loads at the load zone price [e36], a virtual PPA written at a hub or zone leaves a locational gap on both sides (see Basis Risk).

During Winter Storm Uri prices sat at $9,000/MWh by PUCT order. [e42] UT Austin says many generators had locked in a price by contract, limiting their gain, and that wind owners with financial hedges could owe payments when market prices exceeded contract prices or output fell below contracted quantities. [e39][e40]

The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025, mostly wind and solar that keep producing at negative prices because of production tax credits. [e43] That is the situation in which buyers seek floors on the floating price. [e28][e29]

## Key facts

- A virtual PPA has no physical delivery; the buyer buys its power separately. [e4][e5][e17]
- Other names: financial PPA, synthetic PPA, contract for differences, fixed-for-floating swap. [e6][e7]
- Market above strike: the generator pays the buyer; below strike: the buyer pays the generator. [e9][e10]
- Settlement is typically monthly. [e9][e12]
- Physical PPAs generally require the buyer and project to be in the same market; virtual PPAs do not. [e14][e16]
- Contract terms differ by source: physical PPAs 10-20 years (EPA), traditional utility PPAs 20-35 years (POWER), most VPPAs 10-15 years (Norton Rose Fulbright). [e13][e26][e27]
- The ERCOT Protocols use "Power Purchase or Tolling Agreement (PPA)" as one term. [e33][e34]

## Formula

For each hour (or interval), the settlement amount is (market price − strike price) × volume. [e22][e9] A positive result is paid by the generator to the buyer; a negative one by the buyer to the generator. [e9][e10] The volume is metered output in an as-generated contract, or a contracted quantity in other structures. [e21][e23]

## Example

Suppose (illustrative, made-up numbers) a buyer signs a virtual PPA at a $40/MWh strike with a solar project. In a month the project produces 10,000 MWh. In hours covering 6,000 MWh the market price averages $30, so the buyer owes 6,000 × ($40 − $30) = $60,000. In hours covering 4,000 MWh the price averages $70, so the project owes 4,000 × ($70 − $40) = $120,000. Net for the month, the project pays the buyer $60,000. The buyer separately pays its own retailer for the power it actually used.

## Say it like this

(Guidance) A virtual PPA is a financial swap: the project sells its power to the grid at market prices and the buyer guarantees it a fixed price by paying or receiving the difference. It hedges the buyer only if the project's price moves with what the buyer pays for its own power.

## Common confusion

(Guidance) PPA and virtual PPA are general industry usage and are not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here; the Protocols use "Power Purchase or Tolling Agreement (PPA)" without defining it. [e33]

"Contract for differences" is used two ways. EPA and Norton Rose Fulbright's 2019 article use it for the standard VPPA swap. [e6][e10] Norton Rose Fulbright's 2020 article uses it for a variant in which the parties split upside above the fixed price (see Open items).

POWER Magazine's description of who pays when contradicts itself and the other sources (see Open items). Rely on EPA and Norton Rose Fulbright: market above strike, generator pays. [e9][e10]

A virtual PPA does not supply the buyer. The buyer still buys all its power from its own supplier. [e4][e17]

## Questions

### What is the difference between a physical and a virtual PPA?

In a physical PPA power is delivered to the buyer, which generally needs a competitive market and a project in the same market. [e14][e15] In a virtual PPA nothing is delivered: the project sells into the wholesale market and the parties settle the difference from a fixed price, so the project can be in a different market. [e5][e8][e16]

### Who pays whom in a virtual PPA?

When the market price is above the strike, the generator pays the buyer the difference; when it is below, the buyer pays the generator. The generator in effect earns the strike. [e9][e10][e11]

### Why would a developer accept a fixed price and give up upside?

Predictable long-term revenue and a price floor are what make the project financeable. [e24][e25]

### Why might a virtual PPA fail as a hedge for the buyer?

The hedge works only if the project's market price is correlated with the price the buyer pays. [e18][e44] Hub settlement, timing of output and volume shortfalls can all break that link (see the basis, shape and volumetric risk topics). [e30][e22]

### What happened to VPPA buyers whose projects went offline during Uri?

Norton Rose Fulbright gives the example of a data center whose VPPA project shut down: it paid $9,000/MWh for its power and received nothing from the VPPA. [e41] UT Austin confirms the $9,000/MWh price was held by PUCT order. [e42]

### Why do buyers ask for price floors?

If the buyer must pay the full difference between the strike and a negative market price, it can owe large, unexpected payments; a $0 floor protects it but shifts downside risk to the project. [e28][e29] In ERCOT, the IMM says much wind and solar capacity is offered at or below $0 because of production tax credits. [e43]

## Scenarios

### A data center in Houston signs a hub-settled VPPA with a West Texas wind farm. What does it still need to arrange?

- Its actual power supply from its own retailer, because a VPPA delivers nothing. [e4][e17]
- An understanding of correlation: the hedge only works if the hub price tracks what it pays at its own load zone. [e18][e36]
- Clarity on REC ownership and on the volume used for settlement (metered output or a notional quantity). [e20][e21][e23]
- A view on negative prices and whether to seek a floor. [e28][e29]

## Open items

- POWER Magazine says "If the agreed strike price is higher than the market price for the settlement period, the generator pays the offtaker the difference", which contradicts its own next sentence and EPA and Norton Rose Fulbright. Treated as a source error; not used.
- Single-publisher (Norton Rose Fulbright 2020): some VPPAs are a "contract for differences" in which the parties split wholesale revenue above the fixed price, with a lower fixed price. Not cross-checked.
- Single-publisher (Norton Rose Fulbright 2020): VPPAs may settle on day-ahead or real-time prices; buyers prefer day-ahead and developers real-time. No ERCOT tier 1-2 source on how ERCOT VPPAs settle.
- Single-publisher (Yale): VPPAs are treated as derivatives under Dodd-Frank with reporting duties. Not cross-checked.
- Term length conflict: EPA says physical PPAs usually 10-20 years, ORNL 10-25, POWER traditional PPAs 20-35, Norton Rose Fulbright most VPPAs 10-15 and hedges 5-15, Yale quotes an executive saying typically 20. No common figure.
- No tier 1-2 source gives the size or share of the ERCOT VPPA market; Norton Rose Fulbright says most VPPAs are in deregulated markets such as ERCOT, but that is one publisher.
