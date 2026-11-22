---
id: ppa-vppa
name: PPA & Virtual PPA
aliases: [PPA, power purchase agreement, VPPA, virtual PPA, financial PPA, synthetic PPA, physical PPA, contract for differences]
kind: product
domain: trading
level: 2
lenses: [trading, portfolio, structuring, retail]
as_of: 2026-11-22
depth: deep
basis: industry-reference
links:
  - to: basis-risk
    type: related
    note: Virtual PPAs are typically settled at a trading hub while the generator is paid at its node, which creates node-to-hub basis risk. [e30][e31]
  - to: shape-risk
    type: related
    note: Norton Rose Fulbright and LevelTen both describe the price difference being multiplied by a volume for each hour (LevelTen's typical calculation interval), so the hour-by-hour pattern of output and prices matters. [e22][e52]
  - to: volumetric-risk
    type: related
    note: "Hedges differ in the volume used: metered output in an as-generated VPPA, a modelled proxy volume, or (Norton Rose Fulbright) a scheduled notional quantity. [e21][e75][e76][e23]"
  - to: retail-hedging
    type: used-in
    note: The IMM says many ERCOT LSEs manage price exposure through owning generation, bilateral PPAs, futures or day-ahead purchases. [e37]
  - to: tax-credits-recs
    type: related
    note: RECs from the project are typically conveyed to the buyer in a financial PPA, though not always. [e19][e20]
  - to: negative-prices
    type: related
    note: Buyers seek floors because an uncapped obligation to pay the difference at negative prices can mean large settlement payments to the project; Stoel Rives and LevelTen describe the two usual clause types. [e28][e29][e64][e66]
  - to: tolling-agreement
    type: contrasts-with
    note: The ERCOT Protocols use the one phrase "Power Purchase or Tolling Agreement (PPA)" for both kinds of contract. [e33]
  - to: winter-storm-uri
    type: related
    note: UT Austin says wind hedges could trigger payments when wholesale prices exceeded contract prices or output fell below contracted quantities during Uri. [e40]
  - to: trading-hub
    type: settles
    note: Hub settlement of VPPAs is frequent, and hubs are aggregations of nodes. [e30][e31][e62]
  - to: sc-data-center-ppa
    type: example-of
    note: A data center using a VPPA still buys its own power; Norton Rose Fulbright says one whose project shut down during Uri paid $9,000/MWh and received nothing from the VPPA. [e41][e8]
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
  - id: e47
    source: ref-epa-financial-ppa
    locator: "Financial PPA, How Do Financial PPAs Work?"
    quote: "Thereafter, any monetary difference between the strike price and wholesale market price is exchanged between the two parties, such that the seller in net always receives the strike price for its sales of electricity."
  - id: e48
    source: ref-ornl-ppa
    locator: "Introduction, p. 1"
    quote: "Physical PPA contracts are typically long-term and can range from 10 to 25 years"
  - id: e49
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPAs as contracts for differences"
    quote: "Typically a VPPA is a contract for differences with a “strike price” per megawatt hours."
  - id: e50
    source: ref-akin-ppa-swaps
    locator: "What is a VPPA? (p. 2)"
    quote: "In a basic VPPA, Seller and Buyer financially settle using the formula: Fixed Price minus Floating Price. Fixed Price is a set “$[x]/MWh” price, as agreed between Seller and Buyer. Floating Price is typically equal to the real time or day-ahead wholesale market price (locational marginal price (LMP)) at a specific Hub or Node. If the Floating Price is greater than the Fixed Price, Seller will owe the difference to Buyer. If the Floating Price is less than the Fixed Price, Buyer will owe the difference to Seller."
  - id: e51
    source: ref-levelten-vppa-terms
    locator: "Settlement Amount, sample legalese"
    quote: "For each Settlement Period, an aggregate amount equal to: (a) the Fixed Price Payment, defined as the amount equal to the sum of the product of (i) Trade Quantity and (ii) the Fixed Price for each Calculation Interval during each Settlement Period, minus (b) the Floating Price Payment, defined as the amount equal to the sum of the product of (i) the Trade Quantity and (ii) the Market Price, for each Calculation Interval during such Settlement Period. If the Settlement Amount is greater than zero, the Settlement Amount shall be payable by Buyer to Seller. If the Settlement Amount is less than zero, the absolute value of the Settlement Amount shall be payable by Seller to Buyer."
  - id: e52
    source: ref-levelten-vppa-terms
    locator: "Calculation Interval, what it means"
    quote: "The Calculation Interval is the time period over which your Market Price is calculated and multiplied by your Trade Quantity, typically on an hourly basis."
  - id: e53
    source: ref-levelten-vppa-terms
    locator: "Settlement Amount, what it means"
    quote: "This is the dollar amount at the end of each Settlement Period-typically each calendar month-that is either owed to you, the Buyer, or that you owe to the Seller."
  - id: e54
    source: ref-ornl-renewable-contracting-vt6
    locator: "Slide: Claims and Post-Contract, VPPA terms (adapted from LevelTen)"
    quote: "Calculation Interval The time period used to measure and settle delivered quantities; typically, hourly"
  - id: e55
    source: ref-ornl-ppa
    locator: "Virtual (Financial) PPAs, p. 2"
    quote: "If the developer sells their electricity for more than the fixed rate, the offtaker receives the extra revenue. If the energy sells for less than the fixed rate, the offtaker pays extra to cover the difference. These balancing payments guarantee the developer always receives the agreed upon fixed rate for their generated electricity."
  - id: e56
    source: ref-stoel-law-of-wind-ppa
    locator: "XII. Basic Structure of Hedge Arrangement"
    quote: "If, at the time the energy is produced, the market price at the point of interconnection with the transmission grid (or at an agreed-upon pricing node on such transmission grid) exceeds the strike price, then the wind plant owner pays the hedge counterparty an amount equal to the difference between such market price and the strike price. Conversely, if the market price is lower than the strike price, the hedge counterparty pays the wind plant owner the difference between the market price and the strike price."
  - id: e57
    source: ref-stoel-law-of-wind-ppa
    locator: "Delivery Point (VPPA)"
    quote: "In a VPPA, energy is not actually delivered to the offtaker. Instead, energy is typically sold into the energy market with which the project is interconnected at such point of interconnection. That said, the settlement under the VPPA is typically at a different point on the system (often a hub or collection of nodes), which exposes Seller to basis risk between the point of interconnection and hub as described further below."
  - id: e58
    source: ref-resurety-basis-risk
    locator: "Background: the hub + node structure"
    quote: "However, the developer doesn't actually sell power at the hub price, they sell it at the node price. So they are on the hook for any differences between the node and hub prices."
  - id: e59
    source: ref-resurety-basis-risk
    locator: "Real world example, closing paragraphs"
    quote: "One option is to settle at the node, but this passes all risk to the buyer."
  - id: e60
    source: ref-rff-merchant-hedges
    locator: "3.5 Wind Hedging Structures: Risks to Counterparties (p. 16)"
    quote: "First, synthetic PPAs may settle at the node or the hub, and node-settled contracts shift basis risk from the project to the counterparty."
  - id: e61
    source: ref-rff-merchant-hedges
    locator: "3.1 Synthetic PPA, footnote 15"
    quote: "A majority of wind synthetic PPAs settle at the hub (Davies et al. 2018), leaving the project with basis risk."
  - id: e62
    source: ref-ornl-renewable-contracting-vt6
    locator: "Slide: Pricing Considerations: Hubs vs Nodes"
    quote: "▪ Hub Price ▪ Average of nodal price = less volatility ▪ Traded in the liquid market ▪ Typical in VPPA contracts"
  - id: e63
    source: ref-levelten-vppa-terms
    locator: "Settlement Point, what it means"
    quote: "A hub doesn't physically exist; it is the average of hundreds of different locational marginal prices. This allows the pricing to be more stable. Settling at a hub, rather than the interconnection point of the project, will typically provide your company more stability in the Market Price."
  - id: e64
    source: ref-levelten-vppa-terms
    locator: "Market Price, what it means (negative prices)"
    quote: "The first we refer to as a Non-Settlement Threshold. In the event that the Market Price for energy reaches zero or is negative, no money exchanges hands-not even the agreed-upon Fixed Price-until the Market Price rises above zero again, at which point the contract resumes. In exchange, no RECs are delivered to you during this period."
  - id: e65
    source: ref-levelten-vppa-terms
    locator: "Market Price, what it means (negative prices)"
    quote: "Sometimes a Zero Dollar Price Floor is more appropriate. Rather than stopping the contract when the Market Price hits zero or goes negative, you as buyer still agree to pay the Fixed Price and you still receive your RECs. However, you have established a floor for your Market Price and are not responsible for the additional cost of a negative Market Price."
  - id: e66
    source: ref-stoel-law-of-wind-ppa
    locator: "Pricing, 4. Fixed for Floating Pricing"
    quote: "In addition, the offtaker will typically want to limit its exposure to negative floating prices. This is often accomplished by setting a negative LMP floor price, below which either the project is deemed to have no metered quantity or the floating price is replaced by an agreed-upon minimum price when calculating the settlement amount. For a wind project, either the floor price or the payment mechanism must be set to include the value of the lost production tax credits calculated on an after-tax basis."
  - id: e67
    source: ref-ornl-renewable-contracting-vt6
    locator: "Slide: Mitigating Risk"
    quote: "▪ Floors and Ceilings (Collars) ▪ $0 floor to limit exposure = reduced downside risk $$ ▪ “No settlement” during curtailment"
  - id: e68
    source: ref-rff-merchant-hedges
    locator: "3.5 Wind Hedging Structures: Risks to Counterparties (p. 16)"
    quote: "The project would wish to generate even when wholesale prices are negative, to the detriment of the counterparty."
  - id: e69
    source: ref-stoel-law-of-wind-ppa
    locator: "Pricing, 4. Fixed for Floating Pricing"
    quote: "Variations of this structure include determining which market the seller will participate in (day-ahead or real-time), establishing a minimum floating price and mechanisms to share upside floating prices or extreme basis events."
  - id: e70
    source: ref-akin-ercot-hedge-slides
    locator: "Slide 12, Key Commercial Issues"
    quote: "Price risk and potential liability in downside case/options to limit exposure, including collars and revenue sharing arrangements"
  - id: e71
    source: ref-akin-ppa-swaps
    locator: "Why is VPPA a Swap? (p. 2)"
    quote: "Accordingly, a VPPA meets the definition in 7 U.S.C.A. § 1a(47)(A)(iii), and therefore, should be classified as a swap."
  - id: e72
    source: ref-akin-ppa-swaps
    locator: "What is a Swap? (p. 1)"
    quote: "If the agreement, contract, or transaction is a swap, participants are required to adhere to certain obligations such as documentation, reporting, and recordkeeping."
  - id: e73
    source: ref-yale-vppa
    locator: "Section on Dodd-Frank"
    quote: "As VPPAs are intimately affected by power markets , they are considered to be derivative agreements, and companies engaged in such contracts must therefore record on a quarterly basis power market prices and the corresponding settlements attached to the initial contract."
  - id: e74
    source: ref-cftc-glossary
    locator: "Glossary, Swap"
    quote: "The Commissions in 2012 adopted rules and interpretations to clarify that a few types of transactions in particular are swaps. These include foreign currency options, commodity options, non-deliverable forwards in foreign exchange, cross-currency swaps, forward rate agreements, contracts for differences, options to enter into swaps and forward swaps."
  - id: e75
    source: ref-leveltenproxy-generation
    locator: "Traditional VPPAs"
    quote: "In a traditional VPPA (aka \"unit contingent\" or \"as generated\"), the Trade Quantity is equal to the amount of energy the facility delivers to the grid, as measured by an electrical meter at the Point of Interconnection (POI). By settling at the POI on an \"as generated\" basis, the buyer exposes itself to operational risks in the form of undelivered RECs, unexpected settlement pricing, or both."
  - id: e76
    source: ref-leveltenproxy-generation
    locator: "How Does Proxy Generation Work?"
    quote: "In Proxy Gen VPPAs, the Trade Quantity is based on the amount of energy that should have been delivered to the grid had the plant been operated according to ideal equipment efficiency factors and operational best practices. Again, this is different than a traditional \"as generated\" VPPA where the Trade Quantity is directly related to the actual delivered energy. ProxyGen VPPAs therefore place the operational risk entirely onto the seller, which helps ensure that each Party's financial incentives remain properly aligned."
  - id: e77
    source: ref-nrf-hedges-since-uri
    locator: "Three flavors of hedge"
    quote: "In a proxy generation contract, the price difference is multiplied by the amount of power the project could or should have produced in that hour given the fuel resource observed."
  - id: e78
    source: ref-rff-texas-hedges
    locator: "Monetizing and Hedging Renewable Power; Table 1 discussion"
    quote: "For a project with a physical or virtual PPA, the high price would have had no effect on energy revenue, as floating wholesale prices were swapped for the fixed PPA price."
  - id: e79
    source: ref-rff-merchant-hedges
    locator: "3.1 Synthetic PPA (p. 8)"
    quote: "In addition, the quantity of electricity in a synthetic PPA is a percentage of the actual electricity generation, removing the project’s volume, shape, and curtailment risks that exist in bank hedges."
  - id: e80
    source: ref-rff-merchant-hedges
    locator: "3.1 Synthetic PPA (p. 9)"
    quote: "generated and the contract settles at the node, a synthetic PPA would replicate the financial characteristics of a traditional PPA, albeit for a generally shorter duration (12 to 13 years for a synthetic PPA versus 15 to 25 years for a traditional PPA)."
  - id: e81
    source: ref-levelten-vppa-terms
    locator: "Trade Quantity, sample legalese"
    quote: "For each Calculation Interval, the Buyer's Share times the amount of Energy, in MWh, generated by the Facility and delivered to the Interconnection Point."
  - id: e82
    source: ref-nrf-ercot-price-spikes
    locator: "Section on node-settled VPPAs"
    quote: "Some VPPAs settle at a node on the power grid. Because projects sell the physical output in fact at the node for the nodal price, the merchant revenues earned by any project with such a VPPA will generally align with the floating price under the VPPA."
  - id: e83
    source: ref-akin-ercot-hedge-slides
    locator: "Slide 19, Financially-Settled Hedge"
    quote: "Financially-Settled Hedges involve the sale of Energy at the Node and a settlement at the Hub between the Hedge Provider and the Project Company for the difference"
  - id: e84
    source: ref-pexapark-ppa-glossary
    locator: "Glossary, Financial PPA"
    quote: "It’s a common structure in the US, but not very advanced in Europe asit is considered a derivative and has a different accounting treatment under the International Financial Reporting Standards (IFRS) than a physical PPA."
  - id: e85
    source: ref-akin-ppa-swaps
    locator: "What Do Dissenters Say? (p. 2)"
    quote: "Some have argued that since RECs are also transferred in a VPPA from Seller to Buyer, along with the financial risk, the transaction does not meet the definition in 7 U.S.C.A. § 1a(47)(A)(iii) because the transaction conveys an ownership interest in RECs, and therefore, it is not a swap."
  - id: e86
    source: ref-leveltenproxy-generation
    locator: "Traditional VPPAs"
    quote: "In addition to mismanagement by the seller, transmission constraints or system emergencies might cause the grid operator to \"curtail\" the facility (i.e., temporarily disconnect the facility from the grid), which would also reduce the Trade Quantity."
  - id: e87
    source: ref-ornl-renewable-contracting-vt6
    locator: "Slide: Mitigating Risk"
    quote: "▪ Proxy Generation ▪ Consumer compensated based on calculated generation ▪ Reduced curtailment and availability risk"
  - id: e88
    source: ref-nrf-vppa-risks
    locator: "Section on imbalance-charge risk"
    quote: "Physical power is sold in real-time markets. However, VPPAs may settle at day-ahead market prices by scheduling sales on an hourly basis in advance."
  - id: e89
    source: ref-rff-texas-hedges
    locator: "Monetizing and Hedging Renewable Power"
    quote: "Unlike a physical PPA, which delivers power directly to the buyer, a virtual PPA is a type of financial hedge because the power is not delivered to the corporation. However, the revenue effect is the same for virtual and physical PPAs: the wind project receives a fixed price for the energy it produces."
  - id: e90
    source: ref-nrf-vppa-risks
    locator: "Section on VPPA structure"
    quote: "In some cases, the VPPA will be a “contract for differences” where the project company and corporate offtaker split the wholesale revenues to the extent they exceed the fixed price payments."
  - id: e91
    source: ref-resurety-basis-risk
    locator: "Background: the hub + node structure"
    quote: "Most power purchase agreements (PPAs), where corporates or utilities agree to long-term contracts to buy power, are settled at the hub."
  - id: e92
    source: ref-resurety-basis-risk
    locator: "Background: the hub + node structure"
    quote: "Every month, the contract is settled by calculating how much money the developer would have made from selling their power to the grid at the hub price, how much money the developer is guaranteed by the PPA signed with a corporate or utility buyer, and “settling” the difference."
---

## Definition

A power purchase agreement (PPA) is a contract between a power producer and a purchaser (the "offtaker") for the sale of power, setting terms such as price, delivery and payment; POWER Magazine and ORNL describe it as long-term. [e1][e2][e3][e48] In a physical PPA the power is delivered to the buyer. In a virtual PPA (also called a financial or synthetic PPA) nothing is delivered: the generator sells its output into the wholesale market, and the two parties swap the floating market revenue for a fixed price. [e4][e5][e7][e89]

## How it works

**Physical PPA.** The buyer takes delivery of the power. EPA's glossary says physical PPAs by non-utility buyers are generally allowed only in competitive markets, and that the generator and buyer must be in the same power market; Yale says the same about location. [e14][e15] A sleeved PPA is an offsite physical PPA in which a utility acts as intermediary: it takes the project's power, delivers it with the buyer's other energy, and charges a sleeving fee. [e32][e45]

**Virtual PPA.** The parties agree a fixed "strike" price. The project sells its power into the wholesale market near the generator, and the two sides settle the difference between the strike and the market price. [e8][e9] When the market price is above the strike, the generator pays the buyer the excess; when it is below, the buyer pays the generator, so the generator in net receives the strike price. EPA, ORNL, Norton Rose Fulbright, Akin Gump and Stoel Rives all describe it this way; Yale describes the below-strike case. [e9][e10][e11][e47][e50][e55][e56] The buyer and project need not be in the same market, and the buyer keeps buying its own power from its local supplier. [e16][e17][e4] The sources call this structure a contract for differences or a fixed-for-floating swap. [e6][e8]

**Settlement interval and period.** EPA, Norton Rose Fulbright, ReSurety and Yale say virtual PPAs typically settle monthly (Yale: monthly or quarterly), while Norton Rose Fulbright's 2022 article says most hedges are settled on an hourly basis. [e9][e12][e92][e11][e22] LevelTen's sample VPPA terms show how the two fit: the price difference is calculated and multiplied by the volume for each calculation interval, typically an hour, and those amounts are summed into one settlement amount per settlement period, typically a calendar month. ORNL's DOE training, which adapts LevelTen's term list, also gives the calculation interval as typically hourly. [e51][e52][e53][e54]

**Floating price: hub or node, day-ahead or real-time.** Akin Gump says the floating price is typically the real-time or day-ahead LMP at a specific hub or node; Stoel Rives lists the choice of day-ahead or real-time market as one of the contract variations, and Norton Rose Fulbright says VPPAs may settle at day-ahead prices although physical power is sold in real time. [e50][e69][e88] The project is still paid at its own node: Akin Gump describes a sale of energy at the node and a hedge settlement at the hub, and ReSurety says the developer sells at the node price and so is "on the hook" for any node-to-hub difference. [e83][e58]

**Who carries basis.** In a hub-settled VPPA the project carries the node-to-hub basis risk (POWER Magazine, Stoel Rives, ReSurety, RFF). [e30][e57][e58][e61] In a node-settled VPPA that risk passes to the buyer: RFF says node-settled contracts shift basis risk from the project to the counterparty, ReSurety that node settlement "passes all risk to the buyer", and Norton Rose Fulbright that a node-settled project's merchant revenue generally aligns with the floating price. [e60][e59][e82] Hub settlement is the common case: ORNL calls hub prices less volatile and typical in VPPA contracts, LevelTen says a hub gives the buyer a more stable market price, and RFF and ReSurety say most wind synthetic PPAs and most PPAs are hub-settled. [e62][e63][e61][e91]

**Volume.** In an as-generated contract the hourly difference is multiplied by the metered output: Norton Rose Fulbright, LevelTen and RFF describe the VPPA volume as the project's actual (or a share of its actual) generation, and RMI describes a VPPA's value in a period as the energy generated times the price difference. [e21][e75][e81][e79][e46] RFF says this removes the project's volume, shape and curtailment risks. [e79] A proxy-generation VPPA instead uses the output the project should have produced given the measured wind or sun (LevelTen, Norton Rose Fulbright, ORNL). [e76][e77][e87] Norton Rose Fulbright's 2017 article also says VPPA payments are often based on a scheduled notional quantity rather than actual output; LevelTen and RFF do not describe VPPAs that way (see Open items and Volumetric Risk). [e23][e81][e79]

**Negative prices and curtailment.** Buyers commonly limit their exposure to negative floating prices. Stoel Rives and LevelTen describe the same two clause types: below a floor, either the volume is treated as zero (LevelTen's "Non-Settlement Threshold", under which no money changes hands and no RECs are delivered) or the floating price is replaced by an agreed minimum (LevelTen's "Zero Dollar Price Floor", under which the buyer still pays the fixed price and receives RECs). [e66][e64][e65] ORNL's DOE training lists a $0 floor and "no settlement" during curtailment as risk mitigants. [e67] Stoel Rives adds that for a wind project the floor or payment mechanism must include the after-tax value of lost production tax credits, and RFF that a project would wish to generate even at negative prices, to the counterparty's detriment. [e66][e68] Under an as-generated contract, LevelTen says curtailment for transmission constraints or system emergencies reduces the trade quantity, and ORNL says proxy generation reduces curtailment and availability risk for the buyer. [e86][e87]

**Why parties sign.** For the developer, the fixed price gives predictable revenue and a floor under its price, which EPA and Norton Rose Fulbright both call key to project financing. [e24][e25] For the buyer, the contract is a hedge only if the project's market price moves with the price the buyer pays for its own power. [e18][e44]

**RECs.** RECs are typically conveyed to the buyer in a financial PPA, but not always; the project may sell them instead. [e19][e20]

**Regulatory treatment (views).** Yale says VPPAs are considered derivative agreements with recordkeeping duties, and Akin Gump argues a VPPA should be classified as a swap, which brings documentation, reporting and recordkeeping obligations; Akin Gump notes that some argue the REC transfer takes it outside the swap definition. [e73][e71][e72][e85] The CFTC glossary says the 2012 CFTC-SEC rules clarified that contracts for differences are swaps; it does not name VPPAs. [e74] Pexapark (writing on Europe) says a financial PPA is considered a derivative with different accounting treatment from a physical PPA. [e84]

## ERCOT context

The ERCOT Protocols use the phrase "Power Purchase or Tolling Agreement (PPA)". In RUC cost recovery, QSEs that submit such agreements cannot let Resource Entities file verifiable costs. [e33] For settlement-only distribution and transmission generators, a Resource Entity could opt out of nodal pricing and keep Load Zone Settlement if, by January 1, 2019, the unit was operational, subject to a PPA or interconnection agreement, or had an executed agreement with a developer. [e34]

PUCT rules recognise PPAs in retail supply: a REP's guarantor for access to capital may be its wholesale power supplier, or an affiliate of a power provider with whom the REP has executed a power purchase agreement. [e35]

The IMM lists bilateral PPAs among the ways ERCOT LSEs manage price exposure, alongside owning generation, futures and day-ahead purchases. [e37] UT Austin's Uri report lists a PPA as one way a generator takes on a delivery commitment, with other bilateral contracts, ICE sales and day-ahead awards. [e38]

Because ERCOT generators settle at their own node's LMP and loads at the load zone price [e36], a virtual PPA written at a hub or zone leaves a locational gap on both sides (see Basis Risk).

During Winter Storm Uri prices sat at $9,000/MWh by PUCT order. [e42] UT Austin says many generators had locked in a price by contract, limiting their gain, and that wind owners with financial hedges could owe payments when market prices exceeded contract prices or output fell below contracted quantities. [e39][e40] Two commentary publishers describe the as-generated PPA side: RFF says that for a project with a physical or virtual PPA the high price had no effect on energy revenue, because the floating price was swapped for the fixed price, and Norton Rose Fulbright gives the case of a VPPA buyer whose project shut down, which paid $9,000/MWh for its own power and received nothing from the VPPA. [e78][e41]

The IMM says 35% of real-time generation capacity was offered at or below $0 in 2025, mostly wind and solar that keep producing at negative prices because of production tax credits. [e43] That is the situation in which buyers seek floors on the floating price. [e28][e29][e66]

## Key facts

- A virtual PPA has no physical delivery; the buyer buys its power separately. [e4][e5][e17]
- Other names: financial PPA, synthetic PPA, contract for differences, fixed-for-floating swap. [e6][e7]
- Market above strike: the generator pays the buyer; below strike: the buyer pays the generator. [e9][e10][e50][e55]
- The difference is typically calculated hourly and paid monthly. [e51][e52][e53][e54]
- Physical PPAs generally require the buyer and project to be in the same market; virtual PPAs do not. [e14][e16]
- Hub settlement is common and leaves basis risk with the project; node settlement moves it to the buyer. [e57][e58][e59][e60][e62]
- Negative-price clauses either zero the settled volume below a floor or replace the floating price with a minimum. [e64][e65][e66]
- Contract terms differ by source: physical PPAs 10-20 years (EPA), traditional utility PPAs 20-35 years (POWER), most VPPAs 10-15 years (Norton Rose Fulbright), synthetic PPAs 12-13 years against 15-25 for traditional PPAs (RFF). [e13][e26][e27][e80]
- The ERCOT Protocols use "Power Purchase or Tolling Agreement (PPA)" as one term. [e33][e34]

## Formula

LevelTen's sample terms and Akin Gump give the same settlement formula. For each calculation interval (LevelTen: typically an hour), the fixed-price payment is volume × fixed price and the floating-price payment is volume × market price; the settlement amount for the period (typically a month) is the sum of fixed-price payments minus the sum of floating-price payments. A positive amount is paid by the buyer to the seller; a negative amount by the seller to the buyer. [e50][e51][e52][e53]

Written as one line: Settlement (buyer pays seller if positive) = Σ over intervals of volume × (fixed price − market price). EPA and Norton Rose Fulbright state the same sign from the other side: market above strike, the generator pays. [e9][e10][e51]

The volume is metered output in an as-generated contract [e21][e81][e46], modelled output in a proxy-generation contract [e76][e77]; Norton Rose Fulbright also describes VPPAs settled on a scheduled notional quantity. [e23][e81] Where a negative-price floor applies, the volume is set to zero or the market price is replaced by the floor in the intervals below it. [e64][e65][e66]

## Example

Suppose (illustrative, made-up numbers) a buyer signs a hub-settled virtual PPA at a $40/MWh strike with a solar project. In a month the project produces 10,000 MWh. In hours covering 6,000 MWh the hub price averages $30, so the buyer owes 6,000 × ($40 − $30) = $60,000. In hours covering 4,000 MWh the price averages $70, so the project owes 4,000 × ($70 − $40) = $120,000. Net for the month, the project pays the buyer $60,000. The buyer separately pays its own retailer for the power it actually used.

Suppose further, illustratively, 500 MWh of that output came in hours at −$20. Without a floor the buyer owes 500 × ($40 − (−$20)) = $30,000 for those hours. With a $0 price floor it owes 500 × $40 = $20,000; under a non-settlement threshold it owes nothing for those hours and gets no RECs for them.

## Say it like this

(Guidance) A virtual PPA is a financial swap: the project sells its power to the grid at market prices and the buyer guarantees it a fixed price by paying or receiving the difference, usually calculated hourly and paid monthly. It hedges the buyer only if the hub price moves with what the buyer pays for its own power, and with hub settlement the project keeps the node-to-hub gap.

## Common confusion

(Guidance) PPA and virtual PPA are general industry usage and are not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here; the Protocols use "Power Purchase or Tolling Agreement (PPA)" without defining it. [e33]

"Contract for differences" is used two ways. EPA and Norton Rose Fulbright's 2019 article use it for the standard VPPA swap. [e6][e49] Norton Rose Fulbright's 2020 article uses it for a variant in which the parties split upside above the fixed price. [e90] Stoel Rives and Akin Gump also mention upside or revenue-sharing mechanisms as variations. [e69][e70]

POWER Magazine's description of who pays when, and one sentence of Stoel Rives's credit-support section, state the direction backwards; both contradict their own other passages and the other sources (see Open items). Rely on the consistent statement: market above strike, generator pays. [e9][e10][e50][e56]

"Monthly" and "hourly" settlement are not in conflict in LevelTen's terms: hourly is the calculation interval, monthly the settlement period. [e51][e52][e53]

A virtual PPA does not supply the buyer. The buyer still buys all its power from its own supplier. [e4][e17]

## Questions

### What is the difference between a physical and a virtual PPA?

In a physical PPA power is delivered to the buyer, which generally needs a competitive market and a project in the same market. [e14][e15] In a virtual PPA nothing is delivered: the project sells into the wholesale market and the parties settle the difference from a fixed price, so the project can be in a different market. [e5][e8][e16] RFF says the revenue effect for the project is the same: a fixed price for the energy it produces. [e89]

### Who pays whom in a virtual PPA?

When the market price is above the strike, the generator pays the buyer the difference; when it is below, the buyer pays the generator. The generator in effect earns the strike. [e9][e10][e11][e50][e55]

### Why does it matter whether a VPPA settles at the hub or the node?

The project is always paid its own nodal price. With hub settlement the project carries any node-to-hub difference; with node settlement that risk moves to the buyer. [e58][e57][e59][e60] Buyers favour hubs because hub prices are averages of many nodes and more stable. [e62][e63]

### Why would a developer accept a fixed price and give up upside?

EPA calls long-term contracts with predictable revenues a key element in attracting financing, and Norton Rose Fulbright calls the price floor a key step toward project financing. [e24][e25]

### Why might a virtual PPA fail as a hedge for the buyer?

The hedge works only if the project's market price is correlated with the price the buyer pays. [e18][e44] Under as-generated settlement the buyer carries the project's volume and timing, and LevelTen says curtailment also reduces the trade quantity. [e79][e46][e86] Norton Rose Fulbright's Uri example shows the extreme case: an offline project paid nothing while the buyer paid $9,000/MWh for its own power. [e41]

### What happened to VPPA buyers whose projects went offline during Uri?

Norton Rose Fulbright gives the example of a data center whose VPPA project shut down: it paid $9,000/MWh for its power and received nothing from the VPPA. [e41] UT Austin confirms the $9,000/MWh price was held by PUCT order. [e42] RFF adds that for a project that kept running, a VPPA left energy revenue unchanged by the high price. [e78]

### How do VPPAs deal with negative prices?

If the buyer must pay the full difference between the strike and a negative market price, it can owe large, unexpected payments, so buyers seek floors; Yale says $0 floors shift downside risk to the project. [e28][e29] Stoel Rives and LevelTen describe the two clause types: no settled volume below the floor, or a floor on the floating price. [e66][e64][e65] In ERCOT, the IMM says much wind and solar capacity is offered at or below $0 because of production tax credits. [e43]

### Is a VPPA a swap?

Akin Gump argues it is, and Yale says VPPAs are considered derivative agreements with recordkeeping duties; Akin Gump notes that some disagree because RECs are transferred. [e71][e73][e85] The CFTC glossary says contracts for differences were clarified as swaps in 2012, but it does not mention VPPAs, so this is the law firms' and Yale's reading. [e74]

## Scenarios

### A data center in Houston signs a hub-settled VPPA with a West Texas wind farm. What does it still need to arrange?

- Its actual power supply from its own retailer, because a VPPA delivers nothing. [e4][e17]
- An understanding of correlation: the hedge only works if the hub price tracks what it pays at its own load zone. [e18][e36]
- Clarity on REC ownership and on the volume used for settlement (metered output, proxy generation or a notional quantity). [e20][e21][e76][e23]
- A negative-price clause (floor or non-settlement threshold) and a curtailment clause. [e64][e65][e66][e67]
- Knowing that, with hub settlement, the wind farm and not the data center carries the node-to-hub gap. [e57][e58]

## Open items

- POWER Magazine says "If the agreed strike price is higher than the market price for the settlement period, the generator pays the offtaker the difference", which contradicts its own next sentence and EPA and Norton Rose Fulbright. Treated as a source error; not used.
- Stoel Rives's credit-support section says "the offtaker pays the seller when an agreed-upon market price exceeds the fixed price", which contradicts its own Section XII and all other sources. Treated as a source error; not used.
- Partly cross-checked: Norton Rose Fulbright 2020, Stoel Rives and Akin Gump all mention upside- or revenue-sharing variants. Single-publisher (Norton Rose Fulbright 2020): such a variant has a lower fixed price.
- Single-publisher (Norton Rose Fulbright 2020): buyers prefer day-ahead settlement and developers real-time. That the floating price may be either is cross-checked (Akin Gump, Stoel Rives, LevelTen). No ERCOT tier 1-2 source on how ERCOT VPPAs settle.
- Settlement interval and period: resolved on 2026-11-22 from LevelTen's sample terms (hourly calculation, monthly settlement). ORNL's slide supports the hourly interval but is adapted from LevelTen, so it is not an independent second publisher. Yale's "monthly or quarterly" is the only mention of quarterly.
- Sources differ on the volume in a VPPA: Norton Rose Fulbright 2017 says payments are often based on a scheduled notional quantity; LevelTen and RFF describe the VPPA volume as actual generation and treat fixed volumes as a separate structure (RFF: bank hedge).
- Swap status: Akin Gump and Yale say VPPAs are swaps or derivatives; the CFTC glossary covers contracts for differences generally. No saved CFTC text names VPPAs.
- Term length conflict: EPA says physical PPAs usually 10-20 years, ORNL 10-25, POWER traditional PPAs 20-35, Norton Rose Fulbright most VPPAs 10-15 and hedges 5-15, RFF synthetic PPAs 12-13 and traditional PPAs 15-25, Yale quotes an executive saying typically 20. No common figure.
- No tier 1-2 source gives the size or share of the ERCOT VPPA market; Norton Rose Fulbright says most VPPAs are in deregulated markets such as ERCOT, but that is one publisher.
