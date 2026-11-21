---
id: basis-risk
name: Basis Risk
aliases: [basis risk, basis, locational basis risk, node-to-hub basis risk, locational risk]
kind: concept
domain: congestion
level: 2
lenses: [trading, congestion, portfolio, structuring]
as_of: 2026-11-21
depth: deep
basis: industry-reference
links:
  - to: congestion
    type: causes
    note: When transmission congestion occurs, differences in the cost of delivering electricity to different locations show up as different prices at each node, which is what creates locational basis. [e22]
  - to: crr
    type: hedges
    note: A CRR is a financial instrument that pays or charges congestion rents when the ERCOT Transmission Grid is congested, settled on the price difference between a sink and a source Settlement Point. [e25][e26]
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
    note: Two publishers say pairing a renewable project with storage can change its underlying basis risk by shifting sales to less congested hours. [e15][e16]
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
    quote: "When hub prices are higher than node prices, a project could be incentivized to curtail, or scale back, its electricity output in order to avoid loss or seek out contractual mechanisms in the VPPA to mitigate basis risk."
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
---

## Definition

Basis risk is the risk that the price at one location moves differently from the price at the location a contract or hedge is tied to. In power contracts the sources describe it as the mismatch between the price a generator actually earns at its node and the price at the hub (or other point) where its contract settles [e1][e2][e8], or, from the buyer's side, between the generator's node and the price the buyer pays at its own load zone. [e4][e5] In natural gas the same word, basis, names the price differential between Henry Hub and another hub. [e6]

## How it works

A generator sells its physical output at its node and is paid the nodal price, while a hub-settled contract pays or charges it against the hub price, so the two cash flows do not always line up. [e1][e2][e7] To make the contract work, the project in effect buys at the hub the same volume it sells at the node; when the hub price is above the node price, the project loses the difference. [e9][e10]

Hubs are aggregations of nodes. Two publishers say that because a hub covers a wider area, its price is less volatile than a single node's, which is why hub settlement is preferred. [e13][e14][e35] Settling at the hub does not remove basis risk; it moves the node-to-hub part of it onto the project, which then asks for a higher contract price. [e13][e16]

Congestion is the usual driver. When many projects with similar output sit close together, heavy wind or sun congests the lines out of the area and drives the node price down relative to the hub. [e11][e12] The FERC primer describes the gas version the same way: basis normally reflects transport cost and can widen sharply when pipelines between two points are congested. [e6]

Basis risk is the same structure seen from two sides. For the project in a hub-settled deal it is node versus hub. [e7][e9] For a buyer using a virtual PPA as a hedge it is the correlation between the project's price and the buyer's own price; when the two stop moving together the hedge erodes. [e3][e5]

## ERCOT context

ERCOT has three kinds of Settlement Point: a Resource Node, a Load Zone, or a Hub. [e19] Generators settle at their own node's LMP, while loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e20] Except for the ERCOT Hub Average 345 kV Hub, a Hub's real-time LMP is the arithmetic average of the LMPs of its Hub Buses. [e21] So a generator paid at its node and a contract written at a hub or load zone are, by construction, priced at different Settlement Points.

The IMM explains locational price differences in ERCOT as the result of transmission congestion. [e22] It says congestion lowers nodal prices in regions with high renewable capacity [e23], and that the West Zone is the largest contributor to intrazonal congestion costs: export constrained in the Panhandle, import constrained in the Permian Basin. [e24]

ERCOT's own instruments for price differences between two Settlement Points are CRRs and PTP Obligations. A CRR has a source Settlement Point and a different sink Settlement Point (Flowgate Rights excepted) and is purely financial. [e25][e27] A PTP Obligation settled in the DAM pays or charges the Day-Ahead price difference between sink and source; one bought in the DAM is settled on the Real-Time difference. [e26][e28] ERCOT's training material presents a CRR as a hedge that locks in the cost of congestion at the CRR's purchase price, and the FERC primer describes the equivalent FTRs elsewhere as protection against congestion-driven day-ahead price increases. [e29][e31] The IMM says the financial right to congestion rent accrues to CRR holders. [e33]

Gas basis matters to ERCOT generators too: the IMM says Permian production and limited export capability have historically kept Waha gas prices low, giving gas units in that area much higher net revenues. [e30]

## Key facts

- Basis risk is also called locational (basis) risk or node-to-hub basis risk. [e2][e8][e13]
- Virtual PPAs are typically or frequently settled at a hub while the generator is paid at its node. [e2][e14]
- Under hub settlement the project carries the node-to-hub basis risk and loses when the hub price is above its node price. [e9][e10][e13]
- Hub settlement shifts node-to-hub basis risk to the project; it does not change the underlying risk. [e9][e13][e16]
- ERCOT Settlement Points are Resource Nodes, Load Zones and Hubs. [e19]
- ERCOT generators settle at nodal LMPs; loads at the load-weighted load zone price. [e20]
- A DAM PTP Obligation settles on the sink-minus-source price difference. [e26][e28]

## Formula

Basis as a price is the difference between the prices at two locations. The sources state it as hub price minus nodal price for a hub-settled power contract [e1][e2], and as the difference between the Henry Hub price and another hub's price in gas. [e6]

For a generator with a hub-settled contract, the hourly basis exposure is the volume it must buy at the hub times (hub price minus node price): it pays when the hub is above the node. [e9][e10][e13]

## Example

Suppose (illustrative, made-up numbers) a 100 MW West Texas wind project has a hub-settled virtual PPA. In one hour it produces 100 MWh, the hub price is $60/MWh and its node price is $40/MWh because the area is congested. The project earns 100 × $40 = $4,000 selling at its node but is settled against 100 × $60 = $6,000 at the hub, so basis costs it 100 × ($60 − $40) = $2,000 for that hour. If instead the node were $65 and the hub $60, basis would add 100 × $5 = $500.

## Say it like this

(Guidance) Basis risk is the gap between where you get paid and where your hedge settles. In ERCOT a renewable project is paid at its own node, so a hub-settled contract leaves it exposed whenever congestion pushes its node below the hub.

## Common confusion

(Guidance) Basis risk is general industry usage and is not defined in the ERCOT Protocols, PUCT rules or IMM reports saved here.

The sources do not all define it the same way. Norton Rose Fulbright and POWER Magazine frame it from the project's side, as node versus the hub where the contract settles. [e2][e7] RMI and Yale frame it from the buyer's side, as the generator's node versus the buyer's own load zone or retail price, and Yale describes it as a matter of correlation. [e3][e4] Norton Rose Fulbright's 2019 article even calls the price difference itself "basis risk". [e1] Read which two prices a speaker means.

Settling at the hub reduces the buyer's basis risk but not the project's: Yale says the risk is shifted, not removed. [e13][e16]

Gas basis and power basis are different spreads. Gas basis is a hub-to-hub differential driven by pipeline transport; power basis in ERCOT comes from transmission congestion between Settlement Points. [e6][e22]

## Questions

### Why do buyers and lenders prefer to settle a virtual PPA at a hub?

Hubs aggregate many nodes, so hub prices are less volatile than a single node's and hub settlement is seen as lower risk. [e13][e14] Norton Rose Fulbright adds that corporate offtakers and lenders like liquid, high-volume hubs because they ease the analysis of price trends. [e35] The cost is that the node-to-hub basis risk falls on the project. [e13]

### Why is basis risk especially relevant for West Texas renewables?

Clustered wind or solar congests the export lines in high-output hours and drives node prices down. [e11][e12] The IMM says congestion lowers nodal prices in high-renewable regions and that the West Zone, export constrained in the Panhandle, is the largest contributor to intrazonal congestion costs. [e23][e24]

### What can a project do about basis risk?

The sources list pricing adjustments or caps in the contract, ancillary basis hedges with third parties, tracking accounts, economic curtailment, and reserves and holdbacks. [e17][e18] Two publishers add that storage can shift sales to less congested hours and so change the underlying risk. [e15][e16] When the hub is above the node, a project may also curtail to avoid selling at a loss, which costs the buyer RECs. [e32]

### What if a hub-settled project is offline when the hub price spikes?

Under an as-produced VPPA it generally owes nothing for hours it does not produce, because the volume is the project's output. [e34] The basis loss arises when it does produce and the hub rises more than its node, since it must cover the difference. [e10]

### How could an ERCOT generator use CRRs or PTP Obligations against node-to-hub basis?

A CRR or PTP Obligation runs from a source Settlement Point to a different sink Settlement Point and pays or charges the sink-minus-source price difference, so a position from the project's node to the hub moves in the direction of the basis loss. [e26][e27] It settles on DAM prices, or on Real-Time prices for a PTP bought in the DAM, which may not match how the VPPA settles. [e26][e28] Whether such a position fully offsets a given contract is not stated in the sources (see Open items).

### Why does the buyer care about basis if it never takes the power?

A virtual PPA hedges the buyer only if the project's price and the price the buyer pays move together. If the project's node falls while the buyer's own price rises, the buyer pays more under the contract and the hedge erodes. [e3][e5]

## Scenarios

### A Panhandle wind farm has a hub-settled VPPA. A week of heavy wind congests the export lines. What happens?

- Node prices in the area fall with congestion. [e11][e23]
- The project still settles at the hub, so it effectively buys at the hub what it sells at its node and loses the hub-minus-node spread on every MWh. [e9]
- It may curtail to stop the loss, which reduces the buyer's RECs, or rely on contract tools such as tracking accounts, caps or a basis hedge. [e32][e17][e18]
- A CRR or PTP Obligation from its node to the hub would have paid on that spread, at DAM or real-time prices depending on the instrument. [e26][e28]

## Open items

- Single-source, not cross-checked (Norton Rose Fulbright, 2020): in August 2019 the ERCOT North hub spiked to $9,000/MWh while node prices were about $1,000/MWh, implying a $2.4 million one-hour loss for a 300 MW hub-settled project. ERCOT facts need a tier 1-2 source; none found.
- Single-source, not cross-checked (RMI): the City of Houston agreed to pay the basis between its load zone and a West Texas project's node in a 50 MW PPA signed in 2017.
- No saved source says how well a node-to-hub CRR or PTP Obligation offsets a hub-settled VPPA in practice (DAM versus real-time settlement, MW shape, auction cost).
- No IMM figure on average node-to-hub spreads for renewable nodes was found; the IMM reports congestion and captured prices, not basis by project.
- Norton Rose Fulbright says hub settlement "is perceived" to carry less risk, and Yale that hubs "may not be perfectly correlated" with the buyer's price: no source quantifies hub-to-load-zone basis in ERCOT.
