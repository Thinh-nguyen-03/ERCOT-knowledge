---
id: basis-risk
name: Basis Risk
aliases: [basis risk, basis, locational basis risk, node-to-hub basis risk, locational risk]
kind: concept
domain: congestion
level: 2
lenses: [trading, congestion, portfolio, structuring]
as_of: 2026-11-22
depth: deep
basis: industry-reference
links:
  - to: congestion
    type: causes
    note: When transmission congestion occurs, differences in the cost of delivering electricity to different locations show up as different prices at each node, which is what creates locational basis. [e22]
  - to: crr
    type: hedges
    note: A CRR is a financial instrument that pays or charges congestion rents when the ERCOT Transmission Grid is congested; a PTP Obligation, for example, settles on the price difference between its sink and source Settlement Points. [e25][e26]
  - to: ptp-obligation
    type: hedges
    note: A PTP Obligation bought in the DAM is paid or charged the Real-Time price difference between its sink and source Settlement Points. [e28]
  - to: load-zone
    type: related
    note: ERCOT loads are billed at the load zone price, a load-weighted average of nodal prices, while generators settle at their own node. [e20]
  - to: trading-hub
    type: related
    note: Outside the ERCOT Hub Average, an ERCOT Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses in the Hub. [e21]
  - to: resource-node
    type: related
    note: The node is one of the three Settlement Point types in ERCOT, alongside the Load Zone and the Hub. [e19]
  - to: ppa-vppa
    type: related
    note: Basis risk is a major risk in virtual PPAs, which are typically settled at a trading hub while the generator is paid at its node. [e2][e7]
  - to: energy-storage-resource
    type: related
    note: Two publishers say pairing a renewable project with storage can reduce its basis risk by shifting sales to less congested hours. [e15][e16]
  - to: hb-west
    type: related
    note: The IMM says the West Zone is the largest contributor to intrazonal congestion costs, export constrained in the Panhandle and import constrained in the Permian Basin. [e24]
  - to: waha-hub
    type: example-of
    note: Gas basis is the location differential between Henry Hub and another hub; the IMM says Permian production and limited export capability have kept Waha gas prices low. [e6][e30]
evidence:
  - id: e1
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPAs that settle at the hub"
    quote: "As a result, merchant revenue received by the independent power producer from the actual sale of its power will not always line up perfectly with the floating amount it must pay under the VPPA. The difference between the hub price and the nodal price is called “basis risk.”"
  - id: e2
    source: ref-powermag-ppa
    locator: "Virtual PPAs section"
    quote: "Basis risk (also known as “locational basis risk” or “node-to-hub basis risk”) results from the fact that VPPAs are typically settled at a major trading hub remote from the generation project, while the generator/seller receives payment for wholesale market prices at a nodal delivery point."
  - id: e3
    source: ref-yale-ppa-risk
    locator: "Section on basis risk"
    quote: "Related to pricing risk, a growing concern in the world of virtual PPAs is “basis risk,” which refers to the level of correlation between market prices facing the renewable energy project and the off-taker."
  - id: e4
    source: ref-rmi-ppa-risk
    locator: "Basis Risk, Further Detail (p. 14)"
    quote: "Basis risk exists between the price at the generator’s location (i.e., the generation node) and the price the city pays for its own consumption at its load zone."
  - id: e5
    source: ref-rmi-ppa-risk
    locator: "Basis Risk, What It Is (p. 14)"
    quote: "This is the risk, primarily in VPPAs, that the relationship between the market price at the renewable generator’s location and the price the city pays for its electricity may change due to locational price differences."
  - id: e6
    source: ref-ferc-energy-primer
    locator: "Chapter 2 (Natural Gas), Hub Prices and Basis"
    quote: "Additionally, the difference between the Henry Hub price and another hub (or citygate) is called the location differential, or basis. Basis usually reflects the variable cost to transport natural gas between the Henry Hub and another hub. Basis can change, sometimes dramatically, depending on local market conditions, and can widen considerably when pipelines between two points are congested."
  - id: e7
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk"
    quote: "Electricity basis risk is the risk that the project owner takes by using the electricity prices at a “hub” for settling a VPPA while selling electricity from the project into the spot market at “node” prices."
  - id: e8
    source: ref-nrf-vppa-financing
    locator: "Section on basis or locational risk"
    quote: "Basis or locational risk is the possibility that there is a mismatch between the market energy price realized at a project’s actual delivery point (its bus bar) and the prevailing price at the agreed-upon trading point (which may be a regional hub or another node close to the project bus bar) specified in the virtual PPA."
  - id: e9
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk"
    quote: "However, settling at the hub introduces risk to the project. Hub settlement requires the project to purchase the same volume of energy at the hub as it sells at the node in order to manage settlements. If hub prices are greater than the node price, then the project suffers losses."
  - id: e10
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPAs that settle at the hub"
    quote: "If the hub price spikes, but the nodal price spikes to a lesser degree, then the independent power company will have to come out of pocket for that difference to satisfy its obligations under the VPPA."
  - id: e11
    source: ref-yale-ppa-risk
    locator: "Section on basis risk"
    quote: "Spikes of renewable electricity generation on a particularly windy or sunny day can lead to grid congestion, driving the nodal price of electricity down. This is of particular concern in areas like Southeastern California, or northwestern Texas, where high concentrations of solar or wind have regularly driven prices below zero."
  - id: e12
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk, example"
    quote: "Take an example: if a lot of wind projects with similar generation profiles are built close together in northwest Texas, there are likely to be congestion issues along the transmission lines during periods of heavy wind, driving node prices down."
  - id: e13
    source: ref-yale-ppa-risk
    locator: "Section on basis risk, mitigation paths"
    quote: "Hubs are regional aggregations of hundreds or thousands of nodes, and are thus less volatile, though they still may not be perfectly correlated with the retail price facing the off-taker. Settling at the hub has increasingly become the norm for large corporate off-taking agreements. However, by introducing price floors or by settling at the hub, the node-to-hub basis risk will fall on the project company, who will then seek to be compensated with a higher PPA price."
  - id: e14
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk"
    quote: "VPPAs are frequently hub-settled. Hubs are aggregations of nodes. Because hubs cover a broader geographical range than a single node, hub prices are less volatile than node prices and so settling VPPAs at hub prices is perceived to carry less risk."
  - id: e15
    source: ref-nrf-vppa-risks
    locator: "Section on battery storage"
    quote: "Battery storage can help mitigate basis risk. If a project can store electricity during times of high congestion and shift its electricity sales to times of lower congestion (i.e., times of higher node prices), the likelihood that the node price will be less than the hub price can be reduced."
  - id: e16
    source: ref-yale-ppa-risk
    locator: "Section on basis risk, mitigation paths"
    quote: "It is important to note that both of these strategies do not change the underlying basis risk of the project, but rather shift some of the risk onto the project company. One way to actually change the underlying basis risk of the project would be to pair solar or wind with storage."
  - id: e17
    source: ref-powermag-ppa
    locator: "Virtual PPAs section"
    quote: "Basis risk can be mitigated through a variety of techniques including tracking accounts, economic curtailment, reserves and holdbacks, and various non-speculative hedging arrangements."
  - id: e18
    source: ref-nrf-vppa-financing
    locator: "Section on basis or locational risk"
    quote: "In order to share this risk and structure a bankable project, some virtual PPAs provide for pricing adjustments (on a fixed or floating basis) or caps to limit the potential basis risk. Alternatively, some project owners (whether on their own initiative or as required by lenders) enter into ancillary agreements with third parties to hedge the basis risk."
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e20
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e21
    source: np-06
    locator: "Section 6.6.1.5, paragraph (2)"
    quote: "For each defined Hub except for the ERCOT Hub Average 345 kV Hub, the Hub LMP is the arithmetic average of the Real-Time LMPs of the Hub Buses included in the Hub."
  - id: e22
    source: imm-som-2025
    locator: "Executive Summary, Transmission Congestion"
    quote: "When transmission congestion occurs, differences in the cost of delivering electricity to different locations are reflected in the differing energy prices at each location or “node” on the network."
  - id: e23
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "The net effect of this congestion is lower nodal prices in regions with high renewable capacity and more frequent renewable resource curtailments."
  - id: e24
    source: imm-som-2025
    locator: "Chapter on Congestion, Figure 45 discussion"
    quote: "The West Zone is the largest contributor to intrazonal congestion costs because it is export constrained in the panhandle because of the abundance of renewables in the area and import constrained in the Permian Basin."
  - id: e25
    source: np-07
    locator: "Section 7.1, Function of Congestion Revenue Rights, paragraph (1)"
    quote: "A Congestion Revenue Right (CRR) is a financial instrument that entitles the CRR Owner to be charged or to receive compensation for congestion rents that arise when the ERCOT Transmission Grid is congested in the Day-Ahead Market (DAM) or in Real-Time. CRRs do not represent a right to receive, or obligation to deliver, physical energy."
  - id: e26
    source: np-07
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, paragraph (1)"
    quote: "ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point."
  - id: e27
    source: np-07
    locator: "Section 7.2, Characteristics of Congestion Revenue Rights, paragraph (1)(d)"
    quote: "A designated source (injection point) that is a Settlement Point and a designated sink (withdrawal point) that is a different Settlement Point, except for a Flowgate Right (FGR), which has a designated directional network element, or a bundle of directional network elements, instead."
  - id: e28
    source: np-07
    locator: "Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2)"
    quote: "ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e29
    source: ref-ercot-crr-training
    locator: "Slide 11, Congestion Revenue Rights: As a Financial Hedge"
    quote: "Price certainty - Locking in the cost of congestion at the cost of purchasing the CRR"
  - id: e30
    source: imm-som-2025
    locator: "Chapter on net revenue, section 2, Net Revenue by Location (text following Figure 55)"
    quote: "Historically, high natural gas production in the Permian Basin and limited export capability have resulted in low gas prices at the Waha location and, as a result, much higher net revenues for gas resources in this area."
  - id: e31
    source: ref-ferc-energy-primer
    locator: "Chapter on electricity markets, Financial Transmission Rights"
    quote: "FTRs allow customers to protect against the risk of congestion-driven price increases in the day-ahead market in the RTOs/ISOs."
  - id: e32
    source: ref-nrf-vppa-risks
    locator: "Section on curtailment"
    quote: "When hub prices are higher than node prices, a project could be incentivized to curtail, or scale back, its electricity output in order to avoid loss or seek out contractual mechanisms in the VPPA to mitigate basis risk. If a project curtails, then the corporate offtaker will receive fewer renewable energy credits or RECs."
  - id: e33
    source: imm-som-2025
    locator: "Executive Summary, Transmission Congestion"
    quote: "Congestion rent, which equals the difference between what consumers pay and generators receive, is based on locational price differences. The financial right to this congestion rent accrues to holders of CRRs."
  - id: e34
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPA structure (as-produced)"
    quote: "VPPAs are usually structured as “as-produced” contracts rather than fixed-volume contracts. As a result, if a project company fails to produce power during the price spike period, then the project company generally will not owe anything under the VPPA during that period."
  - id: e35
    source: ref-nrf-vppa-financing
    locator: "Section on basis or locational risk"
    quote: "Corporate offtakers and lenders tend to prefer to index the floating price component of the hedge settlement price at liquid, high-volume regional hubs. While this may ease the burden of analyzing historical and projected pricing trends, it also creates the risk that the revenue counted for purposes of calculating settlement payments does not correspond to reality."
  - id: e36
    source: ref-yale-ppa-risk
    locator: "Section on basis risk"
    quote: "However, the off-taker can end up paying more under the VPPA if, for example, nodal prices fall relative to the retail price."
  - id: e37
    source: ref-rmi-ppa-risk
    locator: "Basis Risk, Further Detail (p. 14)"
    quote: "Moreover, the effectiveness of this hedge can be eroded if the relationship between prices at different locations in the market changes over time."
  - id: e38
    source: ref-powermag-ppa
    locator: "Virtual PPAs section"
    quote: "Differences in prices between the trading hub and individual nodes creates a “mismatch” that presents additional credit risk of the generation seller."
  - id: e39
    source: np-07
    locator: "Section 7.9.1.1, Payments and Charges for PTP Obligations Settled in DAM, paragraph (2)"
    quote: "For PTP Obligations that have a positive value and sink at a Resource Node, the PTP Obligation payment may be reduced due to directional network elements that are oversold in previous Congestion Revenue Right (CRR) Auctions."
  - id: e40
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Basis'"
    quote: "The difference between the spot or cash price of a commodity and the price of the nearest futures contract for the same or a related commodity (typically calculated as cash minus futures). Basis is usually computed in relation to the futures contract next to expire and may reflect different time periods, product forms, grades, or locations."
  - id: e41
    source: ref-cftc-glossary
    locator: "CFTC Glossary, entry 'Basis Risk'"
    quote: "The risk associated with an unexpected widening or narrowing of the basis between the time a hedge position is established and the time that it is lifted."
  - id: e42
    source: ref-lbnl-ftr-basis
    locator: "Kim, Bolinger, Mills and Wiser (LBNL), The Energy Journal 44(6), section 1 Introduction, before Eq. 1"
    quote: "Congestion on the transmission network can create a contemporaneous difference in wholesale market prices between locations, called the “locational basis” or just the “basis” (Eq. 1)."
  - id: e43
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 1 Introduction, after Eq. 2"
    quote: "If the basis was guaranteed to be stable over time, then buyers and sellers could factor it into their contract price, leaving each indifferent as to the specific delivery or settlement point. In reality, however, the basis varies over time, in response to changes in transmission capacity, generator output, and load on either side of the constraint. The time-varying nature of the basis introduces “basis risk”—i.e., the risk that the basis could move in a way that adversely affects the buyer’s or seller’s economic position."
  - id: e44
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 1 Introduction, before Eq. 2"
    quote: "Rather than requiring transaction counterparties in different locations to have a physical connection or even a contract over a physical transmission line, wholesale markets enable a generator to sell its power at the generator node and the load to simultaneously purchase power at a different node (e.g., a more liquid trading hub), as if the two were physically connected. However, the basis between the two locations, arising from transmission congestion, makes this transaction incomplete. The gap between the revenue earned by the generator selling power at the generator node and the load buying the same amount of power with the same generation output profile at the hub is the generation-weighted basis (Eq. 2)."
  - id: e45
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 4.1 Evaluation of Basis across Technologies"
    quote: "A negative basis, most prevalent for wind plants in the panhandle of Texas and Oklahoma in SPP, indicates that production-weighted wholesale power prices are lower at plant nodes than at the nearest trading hubs."
  - id: e46
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 4.1 (text before Figure 5)"
    quote: "On average, a wind plant that contracted to sell power at a trading hub in the central U.S. between 2015-2019 lost $2-8/MWh due solely to the basis (i.e., assuming that congestion was not so severe as to prohibit delivery)."
  - id: e47
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 4.1 (text after Figure 5)"
    quote: "In MISO and SPP, uncertainty around the basis (i.e., basis risk) is highest for wind, whereas in ERCOT, wind’s basis risk is on par with that of gas-fired generators."
  - id: e48
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 5 Implications"
    quote: "Additionally, in ERCOT and MISO, the basis is generally positive for thermal generation. Positive basis suggests that plants tend to be located where prices are higher than they are at trading hubs."
  - id: e49
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 4.2 Residual Basis: Effectiveness of Fixed-Volume FTRs"
    quote: "On the other hand, the payout of the fixed-volume FTR does not match the generation-weighted basis of a wind plant, whose volume varies significantly throughout the year depending on the weather. While the fixed-volume FTR does reduce wind’s basis by $1–5/MWh, it still leaves wind generators with $1.8–3.5/MWh of residual basis on average. Similarly, the fixed-volume FTR is not as effective for combustion turbines with low capacity factors in ERCOT."
  - id: e50
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), footnote 1"
    quote: "The concept of an FTR goes by other names in different markets (including transmission congestion contracts and congestion revenue rights), though they mean the same thing."
  - id: e51
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 3 (end of Methods and Data)"
    quote: "Importantly, we do not attempt to examine the overall cost-effectiveness of FTRs, which would require consideration of both the FTR payout and the cost of procuring the FTR through an auction—the latter of which is obviously unknown for the alternative FTR designs that we evaluate."
  - id: e52
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), section 1 Introduction (scope)"
    quote: "The analysis focuses on three organized wholesale markets in the central United States: the Midcontinent Independent System Operator (MISO), the Southwest Power Pool (SPP), and the Electric Reliability Council of Texas (ERCOT). The analysis covers 2015-2019, a period of significant growth in wind energy across all three regions."
  - id: e53
    source: ref-psu-temporal-locational-risk
    locator: "Penn State EBF 301, Lesson 12, 'Temporal and Locational risks', Locational or Basis Risk"
    quote: >-
      Locational or "basis" risk pertains to volatility in the LMP across space (between two or more locations); Risk associated with variation of the transmission price between two nodes or zones. This is the same thing as variation in the difference between two LMPs or zonal prices. Locational risk is sometimes referred to as “basis risk” in the electricity industry.
  - id: e54
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (Bartlett, 2019), section 3, Bank Hedge"
    quote: "The project receives the electricity price at the node, where the power plant connects to the grid, but the counterparty usually requires that the contract settle at a larger trading hub, which often has a different price.13 This difference, known as basis risk, is the result of transmission congestion that constrains prices from equalizing across the grid."
  - id: e55
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), section 3, Bank Hedge"
    quote: "Although the project could potentially hedge basis risk by purchasing transmission rights, it is difficult to predict the amount of transmission rights that would be needed, and transmission rights have a typical term of only one or two years (Goggin et al. 2018)."
  - id: e56
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), section 3.5, Wind Hedging Structures: Risks to Counterparties"
    quote: "First, synthetic PPAs may settle at the node or the hub, and node-settled contracts shift basis risk from the project to the counterparty."
  - id: e57
    source: ref-resurety-basis-risk
    locator: "ReSurety blog, 'Basis risk can sink projects and PPAs', Background: hub + node structure"
    quote: "However, the developer doesn't actually sell power at the hub price, they sell it at the node price. So they are on the hook for any differences between the node and hub prices. The difference is called basis."
  - id: e58
    source: ref-resurety-basis-risk
    locator: "ReSurety blog, 'Basis risk can sink projects and PPAs', closing section"
    quote: "One option is to settle at the node, but this passes all risk to the buyer."
  - id: e59
    source: ref-resurety-basis-risk
    locator: "ReSurety blog, 'Basis risk can sink projects and PPAs', Background: hub + node structure"
    quote: "Groups of nodes are organized into hubs. Hubs are virtual trading points, where the price is the average of all the nodes within the hub."
  - id: e60
    source: ref-stoel-law-of-wind-ppa
    locator: "Stoel Rives, The Law of Wind, PPA chapter, IV.A Delivery Point"
    quote: "That said, the settlement under the VPPA is typically at a different point on the system (often a hub or collection of nodes), which exposes Seller to basis risk between the point of interconnection and hub as described further below."
  - id: e61
    source: ref-akin-ercot-hedge-slides
    locator: "Akin Gump corporate PPA webinar slides (2025), slide 20, Physically-Settled Hedge"
    quote: "Difference between the sale of Energy at the Node and purchase of Energy at the Hub (for delivery) is where the Basis Differential comes into play"
  - id: e62
    source: ref-eia-gas-basis-2020
    locator: "EIA Today in Energy, 'Natural gas price differentials to Henry Hub narrowed at most hubs in first half of 2020', first paragraph"
    quote: "The natural gas basis reflects the difference between the price of natural gas at the benchmark Henry Hub in Louisiana and the price of natural gas at another delivery point elsewhere in the country."
  - id: e63
    source: ref-eia-gas-basis-2020
    locator: "EIA Today in Energy (2020), paragraph on producing-area hubs"
    quote: "Natural gas hubs located in producing areas, such as the Waha Hub in West Texas and the Dominion South Hub in southwestern Pennsylvania, typically trade at a discount to Henry Hub. This discount widens when pipeline constraints limit natural gas takeaway capacity out of the region."
  - id: e64
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter 5, Natural Gas Basis Future"
    quote: "A basis swap contract or basis future is a financial instrument that provides payments calculated on the price difference between a month-ahead index at a given location and the Henry Hub LD1 settlement price."
  - id: e65
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), footnote 22"
    quote: "A gas-based hedge assumes that local gas-fired power plants will generally set the electricity price for the area; gas basis risk describes the potential discrepancy between the gas price at the trading hub and the local gas price. Although gas basis swaps could be used hedge this risk, they are traded for only a few years into the future (Aydin et al. 2017)."
  - id: e66
    source: ref-rff-merchant-hedges
    locator: "RFF Working Paper 19-06 (2019), footnote 25"
    quote: "The greater the residual risks that counterparties assume, the greater the discount they will likely apply to wind hedging prices."
  - id: e67
    source: ref-montel-forward-curves-hedging
    locator: "Montel, 'Hedging strategies using forward curves in power markets', execution risk paragraph"
    quote: "The basis risk should also be taken into account: the assumption that the spot price of delivery will not always perfectly align with the specific forward contract."
  - id: e68
    source: ref-lbnl-ftr-basis
    locator: "LBNL, The Energy Journal 44(6), abstract"
    quote: "Moreover, while most thermal generators can effectively hedge basis risk by purchasing conventional fixed-volume financial transmission rights (FTRs), these fixed-volume FTRs do not effectively hedge basis risk for variable wind generation."
---

## Definition

In the CFTC's glossary, basis is the difference between the cash (spot) price of a commodity and the price of the nearest futures contract, which may reflect differences in time, product, grade or location, and basis risk is the risk of an unexpected widening or narrowing of that basis between the time a hedge is put on and the time it is lifted. [e40][e41] In power markets the word is also used for a locational difference: LBNL calls the price difference between locations that congestion creates the "locational basis", and basis risk the risk that it moves against the buyer's or seller's position; Penn State likewise calls variation in the difference between two LMPs or zonal prices locational risk, which it says is "sometimes" called basis risk in the electricity industry. [e42][e43][e53]

In power contracts the sources describe it as the mismatch between the price a generator actually earns at its node and the price at the hub where its contract settles [e1][e2][e8][e57], or, from the buyer's side, between the generator's node and the price the buyer pays for its own power: its load zone price in RMI's guide, its retail price in Yale's. [e3][e4][e5] In natural gas, basis names the price differential between Henry Hub and another hub or delivery point. [e6][e62]

## How it works

A generator sells its physical output at its node and is paid the nodal price, while a hub-settled contract pays or charges it against the hub price, so the two cash flows do not always line up. [e1][e2][e7][e60] LBNL describes the same gap from the market's side: a generator sells at its node while the load buys at a different node such as a liquid hub, and the gap between the generator's revenue at its node and the cost of buying the same amount, with the same output profile, at the hub is the generation-weighted basis. [e44] Norton Rose Fulbright puts it in contract terms (hub settlement requires the project to buy at the hub the same volume it sells at the node), and Akin Gump's ERCOT hedge slides say the same of a physically settled hedge (sale at the node, purchase at the hub for delivery). [e9][e61]

Several publishers say the project bears this node-to-hub mismatch under hub settlement. [e9][e13][e38][e57][e60] Two say the side carrying the risk loses when the node price falls relative to the price on the other side: the project when the hub is above its node (Norton Rose Fulbright), the buyer when the node falls relative to its retail price (Yale). [e9][e10][e36]

Hubs are aggregations of nodes; ReSurety describes a hub price as the average of the nodes in it. [e13][e14][e59] Two publishers say that because a hub covers a wider area, its price is less volatile than a single node's, so hub settlement is seen as less risky for the buyer. [e13][e14] The settlement point decides who carries the risk: settling at the hub puts the node-to-hub risk on the project, and settling at the node shifts it to the buyer. [e9][e13][e56][e58] Two publishers say the party that takes on more risk prices it in: Yale says the project then seeks a higher PPA price, and RFF that counterparties assuming more residual risk will likely apply a greater discount to hedge prices. [e13][e66]

The sources agree that congestion is the cause in power. LBNL and RFF say the locational basis comes from transmission congestion that keeps prices from equalizing across the grid. [e42][e54] Yale and Norton Rose Fulbright give the renewable case: heavy wind or sun where many projects sit close together congests the lines and drives the node price down. [e11][e12] Basis risk exists because this difference changes over time: LBNL says a stable basis could simply be priced into the contract, but it varies with transmission capacity, generator output and load, which is the same idea as the CFTC's "unexpected widening or narrowing" of the basis during a hedge. [e43][e41] The FERC primer and EIA describe the gas version in similar terms: FERC says gas basis usually reflects the variable cost of transport between Henry Hub and another hub and can widen considerably when pipelines are congested, and EIA that producing-area hubs such as Waha typically trade at a discount to Henry Hub that widens when pipeline constraints limit takeaway capacity. [e6][e63]

Basis risk is the same structure seen from two sides. For the project in a hub-settled deal it is node versus hub. [e2][e7][e9] For a buyer using a virtual PPA as a hedge it is the correlation between the project's price and the buyer's own price; when the two stop moving together the hedge erodes. [e3][e5]

Three different spreads are called "basis", and they should not be mixed up. The futures meaning is cash (spot) price minus the nearest futures price [e40]; Montel, a European energy publisher, uses it in this sense for power forwards: the risk that the spot price at delivery does not line up with the forward contract. [e67] The locational power meaning is the difference between two LMPs: node versus hub, or between nodes or zones. [e42][e53] The gas meaning is the differential between Henry Hub and another delivery point, which FERC says is also traded as a basis swap or basis future paying on the difference between a location's month-ahead index and the Henry Hub settlement price. [e62][e64] RFF adds that a gas-based hedge for a power project carries gas basis risk, between the hub gas price and the local gas price. [e65]

## ERCOT context

ERCOT has three kinds of Settlement Point: a Resource Node, a Load Zone, or a Hub. [e19] Generators settle at their own node's LMP, while loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e20] Except for the ERCOT Hub Average 345 kV Hub, a Hub's real-time LMP is the arithmetic average of the LMPs of its Hub Buses. [e21] So a generator paid at its node and a contract written at a hub or load zone are, by construction, priced at different Settlement Points.

The IMM explains locational price differences in ERCOT as the result of transmission congestion. [e22] It says congestion lowers nodal prices in regions with high renewable capacity [e23], and that the West Zone is the largest contributor to intrazonal congestion costs: export constrained in the Panhandle, import constrained in the Permian Basin. [e24]

ERCOT's own instruments for price differences between two Settlement Points are CRRs and PTP Obligations. A CRR has a source Settlement Point and a different sink Settlement Point (Flowgate Rights excepted) and is purely financial. [e25][e27] A PTP Obligation settled in the DAM pays or charges the Day-Ahead price difference between sink and source (a positive-value one that sinks at a Resource Node may be paid less if network elements were oversold in earlier CRR Auctions); one bought in the DAM is settled on the Real-Time difference. [e26][e39][e28] ERCOT's training material presents a CRR as a hedge that locks in the cost of congestion at the CRR's purchase price, and the FERC primer describes the equivalent FTRs elsewhere as protection against congestion-driven day-ahead price increases. [e29][e31] The IMM says the financial right to congestion rent accrues to CRR holders. [e33]

LBNL's study covers MISO, SPP and ERCOT for 2015-2019, and it says FTRs go by other names in other markets, including congestion revenue rights, the instrument ERCOT's Protocols define. [e52][e50][e25] It found that in ERCOT, unlike MISO and SPP, wind's basis risk was on par with that of gas-fired generators, and that in ERCOT and MISO the basis was generally positive for thermal plants, meaning they tend to sit where prices are above the hub. [e47][e48] Across the three markets, a fixed-volume FTR nearly matches a steady generator's basis but not a wind plant's varying output; it reduced wind's basis by $1-5/MWh but left $1.8-3.5/MWh on average, and in ERCOT it was also less effective for low-capacity-factor combustion turbines. [e68][e49] LBNL did not count the auction cost of the FTRs. [e51]

Gas basis matters to ERCOT generators too: the IMM says Permian production and limited export capability have historically kept Waha gas prices low, giving gas units in that area much higher net revenues. [e30]

## Key facts

- Basis risk is also called locational (basis) risk or node-to-hub basis risk. [e2][e8][e13]
- Virtual PPAs are typically or frequently settled at a hub while the generator is paid at its node. [e2][e14]
- Under hub settlement the project carries the node-to-hub basis risk. [e9][e13][e38]
- Whoever carries the risk loses when the node price falls relative to the other price: the project against the hub (Norton Rose Fulbright), the buyer against its retail price (Yale). [e9][e10][e36]
- ERCOT Settlement Points are Resource Nodes, Load Zones and Hubs. [e19]
- ERCOT generators settle at nodal LMPs; loads at the load-weighted load zone price. [e20]
- A DAM PTP Obligation settles on the sink-minus-source price difference. [e26][e28]
- CFTC: basis is typically calculated as cash minus futures; basis risk is an unexpected widening or narrowing of the basis while a hedge is on. [e40][e41]
- LBNL (MISO, SPP and ERCOT, 2015-2019): a wind plant contracted to sell at a hub in the central U.S. lost $2-8/MWh on average from basis alone, assuming congestion did not prevent delivery. This is a three-market figure, not an ERCOT-only one. [e46][e52]
- LBNL: in ERCOT, wind's basis risk was on par with gas-fired generators' (study period 2015-2019). [e47][e52]
- Node-settled contracts move basis risk from the project to the buyer. [e56][e58]

## Formula

Basis as a price is a difference between two prices, and the sign convention differs by source. [e40][e42]

- Futures (CFTC): basis = cash (spot) price - nearest futures price. [e40]
- Locational power basis (LBNL): node price minus hub price at the same time, so a negative basis means the plant's node is below the hub. [e42][e45] Norton Rose Fulbright speaks of "the difference between the hub price and the nodal price" without fixing a sign. [e1]
- Generation-weighted basis (LBNL): the gap between what the generator earns selling its output at its node and what the same amount, with the same output profile, costs at the hub; in effect the node-minus-hub difference weighted by the plant's generation. This is the amount a hub-settled seller is exposed to. [e44][e9]
- Gas basis: the difference between the Henry Hub price and the price at another delivery point; a basis future pays on the difference between a location's month-ahead index and the Henry Hub LD1 settlement price. [e6][e62][e64]

## Example

Suppose (illustrative, made-up numbers) a 100 MW West Texas wind project has a hub-settled virtual PPA. In one hour it produces 100 MWh, the hub price is $60/MWh and its node price is $40/MWh because the area is congested. The project earns 100 × $40 = $4,000 selling at its node but is settled against 100 × $60 = $6,000 at the hub, so basis costs it 100 × ($60 − $40) = $2,000 for that hour. If instead the node were $65 and the hub $60, basis would add 100 × $5 = $500.

## Say it like this

(Guidance) Basis risk is the gap between where you get paid and where your hedge settles. In ERCOT a renewable project is paid at its own node, so a hub-settled contract leaves it exposed whenever congestion pushes its node below the hub.

## Common confusion

(Guidance) Basis risk is general industry usage and is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

The sources do not all define it the same way. Norton Rose Fulbright and POWER Magazine frame it from the project's side, as node versus the hub where the contract settles. [e2][e7] RMI and Yale frame it from the buyer's side, as the generator's node versus the buyer's own load zone or retail price, and Yale describes it as a matter of correlation. [e3][e4] Norton Rose Fulbright's 2019 article even calls the price difference itself "basis risk". [e1] Read which two prices a speaker means.

Settling at the hub reduces the buyer's basis risk but not the project's: Yale says the risk is shifted, not removed. [e13][e16]

Gas basis and power basis are different spreads. Gas basis is a hub-to-hub differential driven by pipeline transport; power basis in ERCOT comes from transmission congestion between Settlement Points. [e6][e22]

A futures glossary's "basis" is cash minus futures, a difference in time and contract as well as place, while in power "basis" often means the locational difference, which LBNL signs as node minus hub at the same moment. [e40][e42] Ask which one is meant, and which way round it is signed. [e45][e1]

## Questions

### Why do buyers and lenders prefer to settle a virtual PPA at a hub?

Hubs aggregate many nodes, so hub prices are less volatile than a single node's and hub settlement is seen as lower risk. [e13][e14] Norton Rose Fulbright adds that corporate offtakers and lenders prefer liquid, high-volume hubs, and that this may ease the analysis of price trends. [e35] The cost is that the node-to-hub basis risk falls on the project. [e9][e13]

### Why is basis risk especially relevant for West Texas renewables?

Clustered wind or solar congests the export lines in high-output hours and drives node prices down. [e11][e12] The IMM says congestion lowers nodal prices in high-renewable regions and that the West Zone, export constrained in the Panhandle, is the largest contributor to intrazonal congestion costs. [e23][e24]

### What can a project do about basis risk?

Norton Rose Fulbright lists pricing adjustments or caps in the contract and ancillary basis hedges with third parties; POWER Magazine lists tracking accounts, economic curtailment, reserves and holdbacks, and non-speculative hedges. [e17][e18] Two publishers add that storage can reduce basis risk by shifting sales to less congested hours. [e15][e16] Norton Rose Fulbright notes that when the hub is above the node a project may curtail to avoid the loss, which leaves the buyer with fewer RECs. [e32]

### What if a hub-settled project is offline when the hub price spikes?

Norton Rose Fulbright says that under an as-produced VPPA it generally owes nothing for hours it does not produce, and that the loss arises when it does produce and the hub spikes more than its node, since it must cover the difference. [e34][e10]

### How could an ERCOT generator use CRRs or PTP Obligations against node-to-hub basis?

A CRR runs from a source Settlement Point to a different sink Settlement Point (Flowgate Rights excepted), and a PTP Obligation pays or charges the sink-minus-source price difference. [e27][e26] Reading those definitions together (the knowledge base's own reasoning, not a source statement), a PTP Obligation sourced at the project's node and sinking at the hub is paid when the hub is above the node, the case in which a hub-settled project loses on basis. It settles on DAM prices, or on Real-Time prices for a PTP bought in the DAM, which may not match how the VPPA settles. [e26][e28] LBNL, which counts CRRs as FTRs, found that a fixed-volume FTR nearly hedges a steady thermal plant but leaves a wind plant with residual basis, because the plant's output varies and the FTR's volume does not; its figures ignore the auction cost. [e50][e68][e49][e51] RFF adds that it is hard to know how many transmission rights a project would need and that they typically run only one or two years. [e55]

### Why does the buyer care about basis if it never takes the power?

A virtual PPA hedges the buyer only if the project's price and the price the buyer pays move together. Yale says the buyer can end up paying more if nodal prices fall relative to its retail price, and RMI that the hedge erodes if the relationship between prices at different locations changes. [e36][e37]

### What does "basis" mean to a futures trader, a gas trader and a power trader?

To the CFTC it is cash minus the nearest futures price. [e40] In gas it is the differential between Henry Hub and another delivery point, traded as basis swaps or futures. [e62][e64] In power it is often the locational difference between two LMPs, such as a generator's node and a hub. [e42][e53] Basis risk in each case is the risk that this difference moves unexpectedly while a hedge is on. [e41][e43]

### Why not just settle the VPPA at the node?

Node settlement removes basis risk from the project but shifts it to the buyer. [e56][e58] Buyers and lenders tend to prefer liquid hubs, and the party left holding the risk wants to be paid for it in the price. [e35][e13][e66]

## Scenarios

### A Panhandle wind farm has a hub-settled VPPA. A week of heavy wind congests the export lines. What happens?

- Node prices in the area fall with congestion. [e11][e23]
- The project still settles at the hub, so it carries the node-to-hub gap and, Norton Rose Fulbright says, loses when hub prices are above its node price. [e9][e38]
- It may curtail to stop the loss, which reduces the buyer's RECs, or rely on contract tools such as tracking accounts, caps or a basis hedge. [e32][e17][e18]
- A PTP Obligation from its node to the hub would be paid the sink-minus-source difference, at DAM or Real-Time prices depending on the instrument, having cost its purchase price. [e26][e28][e29]

## Open items

- Single-source, not cross-checked (Norton Rose Fulbright, 2020): in August 2019 the ERCOT North hub spiked to $9,000/MWh while node prices were about $1,000/MWh, implying a $2.4 million one-hour loss for a 300 MW hub-settled project. ERCOT facts need a tier 1-2 source; none found.
- Single-source, not cross-checked (RMI): the City of Houston agreed to pay the basis between its load zone and a West Texas project's node in a 50 MW PPA signed in 2017.
- Resolved 2026-11-22: the Norton Rose Fulbright "same volume at the hub" mechanism is now cross-checked with LBNL's generation-weighted basis (tier 2) and Akin Gump's physically settled hedge slide. The shift of risk to the project under hub settlement and to the buyer under node settlement is cross-checked (Yale, NRF, RFF, ReSurety), as is pricing the risk in (Yale, RFF).
- Single-source, not cross-checked (Yale): hub settlement or price floors shift the risk without changing the project's underlying basis risk, and storage is a way to change it. Norton Rose Fulbright supports only the storage half (storage can help mitigate basis risk).
- Partly answered: LBNL (MISO, SPP, ERCOT, 2015-2019) measures how well fixed-volume FTRs hedge generators' basis, but ignores auction cost and FTR funding shortfalls. No saved source tests an ERCOT CRR or PTP Obligation against a hub-settled VPPA (DAM versus real-time settlement, as-produced volume).
- Single-source, not cross-checked (RFF): transmission rights typically run only one or two years and have not supported wind project financing.
- No ERCOT-only figure for average node-to-hub basis at renewable nodes was found. LBNL's $2-8/MWh is for wind across MISO, SPP and ERCOT (2015-2019); the IMM reports congestion and captured prices, not basis by project.
- Sign convention: LBNL states locational basis as node minus hub; the commercial sources do not fix a sign. No ERCOT document defines a "basis" sign.
- Norton Rose Fulbright says hub settlement "is perceived" to carry less risk, and Yale that hubs "may not be perfectly correlated" with the buyer's price: no source quantifies hub-to-load-zone basis in ERCOT.
