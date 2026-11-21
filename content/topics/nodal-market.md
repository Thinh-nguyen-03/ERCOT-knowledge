---
id: nodal-market
name: Nodal Market
aliases: [nodal market, Texas Nodal Market, nodal design, LMP market, nodal pricing]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, congestion, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: lmp
    type: composed-of
    note: Resource prices in the nodal market are LMPs that come out of security-constrained economic dispatch. [e1]
  - to: load-zone
    type: composed-of
    note: Load is settled at the load-weighted average price of its load zone, not at its own node. [e6]
  - to: settlement-point
    type: composed-of
    note: Every Settlement Point is a Resource Node, a Load Zone or a Hub. [e5]
  - to: sced
    type: composed-of
    note: SCED determines Ancillary Service awards and Base Point instructions, and LMPs are produced by the DAM or SCED. [e11][e4]
  - to: dam
    type: composed-of
    note: PUCT rules require ERCOT to run a voluntary day-ahead energy market. [e8]
  - to: crr
    type: composed-of
    note: ERCOT provides CRRs, not physical transmission rights, and auctions them in a simultaneous combinatorial auction. [e9]
  - to: trading-hub
    type: composed-of
    note: Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10]
  - to: congestion
    type: related
    note: Congestion rents on a scheduled transaction are the difference between the resource's nodal LMP and the load zone price. [e2]
  - to: rtc-b
    type: related
    note: RTC went live on December 5, 2025, and the PUCT rule already required simultaneous optimization of ancillary capacity services priced at their shadow prices. [e34][e30]
  - to: clr
    type: related
    note: CLRs are still dispatched and settled at zonal prices; the IMM reports NPRR 1188's nodal pricing for CLRs is scheduled for January 2027. [e14][e35]
  - to: ferc
    type: contrasts-with
    note: FERC's 2024 Energy Primer says FERC regulates all RTOs/ISOs except ERCOT; ERCOT's design rule is PUCT rule 25.501. [e32][e1]
  - to: nodal-protocols
    type: related
    note: ERCOT's guiding principles for proposals that change the Nodal Market start with improving price signals and dispatch efficiency. [e33]
evidence:
  - id: e1
    source: puct-25-501
    locator: "16 TAC §25.501(f), Nodal energy prices for resources"
    quote: "Nodal energy prices for resources. ERCOT shall use nodal energy prices for resources. Nodal energy prices for resources shall be the locational marginal prices, consistent with subsection (e) of this section, resulting from security-constrained, economic dispatch."
  - id: e2
    source: puct-25-501
    locator: "16 TAC §25.501(e)(2), Congestion pricing"
    quote: "ERCOT shall settle each resource imbalance at its nodal locational marginal price (LMP) calculated pursuant to subsection (f) of this section; each load imbalance at its zonal price calculated pursuant to subsection (h) of this section; and congestion rents on each scheduled transaction for a resource and load pair at the difference between the nodal LMP at the resource injection location calculated pursuant to subsection (f) of this section and the zonal price at the load withdrawal location calculated pursuant to subsection (h) of this section."
  - id: e3
    source: puct-25-501
    locator: "16 TAC §25.501(a), General"
    quote: "Except as otherwise directed by the commission, ERCOT shall determine the market clearing prices of energy and other ancillary services that it procures through auctions and the congestion rents that it charges or credits, using economic concepts and principles such as: shadow price of a constraint, marginal cost pricing, and maximizing the sum of consumer and producer surplus."
  - id: e4
    source: np-02
    locator: "Section 2.1, definition of Locational Marginal Price (LMP)"
    quote: "The offer and/or bid-based marginal cost of serving the next increment of Load at an Electrical Bus, which marginal cost is produced by the DAM process or by the SCED process."
  - id: e5
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "Settlement Point A Resource Node, Load Zone, or Hub."
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, Transmission Congestion and CRRs, 1. Locational Marginal Prices"
    quote: "In ERCOT's design, LMPs are calculated at individual generation and load nodes, but load is settled at the load-weighted average price of its load zone. Zonal settlement smooths short-term volatility and facilitates hedging, but it also means some congestion costs are averaged across customers. As a result, LMPs' effectiveness in conveying accurate signals depends on how well load zones align with persistent transmission constraints, directly linking locational pricing to transmission planning and zone design."
  - id: e7
    source: imm-som-2025
    locator: "2025 State of the Market Report, Transmission Congestion and CRRs, G. Load Zone Configuration"
    quote: "ERCOT established the four current load zones in 2003: North, West, South, and Houston. Load zones aggregate nodal prices to settle load and communicate congestion conditions to the market through price signals."
  - id: e8
    source: puct-25-501
    locator: "16 TAC §25.501(c), Day-ahead energy market"
    quote: "Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract."
  - id: e9
    source: puct-25-501
    locator: "16 TAC §25.501(i), Congestion rights"
    quote: "ERCOT shall provide congestion revenue rights (CRRs), but shall not provide physical transmission rights. ERCOT shall auction all CRRs, using a simultaneous combinatorial auction, except as otherwise ordered by the commission for any preassigned CRRs approved by the commission."
  - id: e10
    source: puct-25-501
    locator: "16 TAC §25.501(g), Energy trading hubs"
    quote: "Energy trading hubs. ERCOT shall provide information for energy trading hubs by aggregating nodes and calculating an average price for each aggregation, for each financial settlement interval."
  - id: e11
    source: np-02
    locator: "Section 2.1, definition of Security-Constrained Economic Dispatch (SCED)"
    quote: "A process for determining Ancillary Service awards and Base Point instructions for Resources using Energy Offer Curves, Energy Bid/Offer Curves, Real-Time Market (RTM) Energy Bids, Ancillary Service Offers and Ancillary Service Demand Curves (ASDCs)."
  - id: e12
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Review of Market Performance"
    quote: "ERCOT operates three distinct wholesale markets: the real-time market and two forward markets—the day-ahead market, which allows market participants to take financial positions on energy and ancillary services, and the CRR market, a series of auctions in which market participants can bid for the right to revenues derived from congestion rent. The real-time market is the most consequential because it coordinates real-time power flows to maintain system reliability and sets expectations for the forward markets."
  - id: e13
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Transmission Congestion"
    quote: "Despite the increase in congestion costs, the prevalence of transmission constraints being violated because they were too expensive to resolve dropped to its lowest level since the ERCOT nodal market was implemented."
  - id: e14
    source: imm-som-2025
    locator: "2025 State of the Market Report, Demand Response (controllable load resources)"
    quote: "Currently, CLRs are dispatched and settled using zonal prices. This creates an economic challenge for CLRs at nodes with structurally low energy costs, such as those in the Panhandle near large volumes of renewable generation, where the zonal price is often higher than the cost of serving their load."
  - id: e15
    source: imm-som-2025
    locator: "2025 State of the Market Report, Demand Response (controllable load resources), sentence before e14"
    quote: "Another major improvement is NPRR 1188, which the PUCT approved in November 2024 and13 which will introduce nodal pricing for CLRs."
  - id: e16
    source: np-02
    locator: "Section 2.1, pending-change box for NPRR1188 (Energy Bid Curve definition)"
    quote: "[NPRR1188: Insert the following definition “Energy Bid Curve” upon system implementation:]"
  - id: e17
    source: np-02
    locator: "Section 2.1, definition of Load Zone, paragraph (3)"
    quote: "(3) A Non-Opt-In Entity (NOIE) Load Zone is a type of Load Zone."
  - id: e18
    source: ercot-nodal-go-live-plan
    locator: "Nodal Program Update to the ERCOT Board (19 October 2010), slide: TAC Certification of Full Nodal Systems for Go-Live"
    quote: "TAC voted to certify the Full Nodal systems for a December 1, 2010 Go-Live"
  - id: e19
    source: ercot-nodal-go-live-plan
    locator: "Nodal Program Update to the ERCOT Board (19 October 2010), slide: System Cut-Over / Go-Live"
    quote: "November 30th – Execute DAM for December 1 (the first Operating Day to be binding with Nodal settlement)"
  - id: e20
    source: imm-som-2011
    locator: "2011 State of the Market Report, Executive Summary, introduction (p. i)"
    quote: "ERCOT transitioned from the zonal market design that had been in place since 2001 and implemented the nodal market design on December 1, 2010. Thus, this is the first annual report that contains an entire year of nodal market operations."
  - id: e21
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary, introduction"
    quote: "The market outcomes during the eleven months of zonal market operation in 2010 were generally similar to those in 2009. The highlight of 2010 was the much anticipated implementation of ERCOT’s nodal market on December 1, 2010."
  - id: e22
    source: imm-som-2010
    locator: "2010 State of the Market Report, Transmission and Congestion, introduction (p. 57)"
    quote: "Under ERCOT’s zonal market design, constraints on the transmission network are managed in two ways. First, ERCOT is made up of zones with the constraints between the zones managed through the balancing energy market. The balancing energy market model increases energy production in one zone and reduces it in another zone to manage the flows between the two zones when the interface constraint is binding, i.e., when there is interzonal congestion. Second, all other constraints not defined as zonal constraints (i.e., local congestion) are managed through the redispatch of individual generating resources."
  - id: e23
    source: imm-som-2010
    locator: "2010 State of the Market Report, Transmission and Congestion, A. Electricity Flows between Zones"
    quote: "To manage interzonal congestion, SPD uses a simplified network model with four zone-based locations and five transmission interfaces. These five transmission interfaces, referred to as Commercially Significant Constraints (“CSCs”), are simplified representations of groups of transmission elements."
  - id: e24
    source: imm-som-2011
    locator: "2011 State of the Market Report, III. Transmission and Congestion, introduction"
    quote: "Although zonal congestion management instructions were bid-based, because all generators located within in a zone were assumed to have the same ability to affect the flows across a zonal constraint, the result was significant operational inefficiency and uncertainty. All other constraints were managed by paying generators to either increase or decrease their output from their scheduled level. Because the money to make these payments to generators was collected from all loads in ERCOT, generators had no incentive to take into account the state of the transmission system when scheduling their output."
  - id: e25
    source: imm-som-2011
    locator: "2011 State of the Market Report, III. Transmission and Congestion, introduction"
    quote: "The nodal market provides many improvements, including unit-specific offers and shift factors, simultaneous resolution of all transmission congestion, actual output instead of schedule-based dispatch, and 5-minute instead of 15-minute dispatch, among others."
  - id: e26
    source: imm-som-2011
    locator: "2011 State of the Market Report, III. Transmission and Congestion, CRR discussion"
    quote: "In the zonal market only the costs associated with managing congestion on the commercially significant constraints could be hedged. All other congestion costs were uplifted to all loads."
  - id: e27
    source: imm-som-2010
    locator: "2010 State of the Market Report, Review of Market Outcomes (p. 13)"
    quote: "One of the fundamental improvements brought about by the implementation of ERCOT’s nodal market design is the establishment of a centralized day-ahead market."
  - id: e28
    source: imm-som-2011
    locator: "2011 State of the Market Report, Executive Summary bullets (p. i)"
    quote: "More reliable and efficient shortage pricing mechanisms than existed in the zonal market allowed energy prices to rise automatically up to the system-wide offer cap during periods of operating reserve shortages."
  - id: e29
    source: puct-25-501
    locator: "16 TAC §25.501(h), Zonal energy prices for loads"
    quote: "ERCOT shall maintain stable zones and shall notify market participants in advance of zonal boundary changes in order that the market participants will have an appropriate amount of time to adjust to the changes."
  - id: e30
    source: puct-25-501
    locator: "16 TAC §25.501(k), Simultaneous optimization of ancillary capacity services"
    quote: "For ancillary capacity services that it competitively procures in the day-ahead or operating day, ERCOT shall use simultaneous optimization and shall set prices for each service to the corresponding shadow price."
  - id: e31
    source: puct-25-501
    locator: "16 TAC §25.501(i), Congestion rights, last sentence"
    quote: "CRRs shall not be subject to “use-it-or-lose-it” or “schedule-it-or-lose-it” restrictions and shall be tradable."
  - id: e32
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Electricity Markets chapter, RTO/ISO section"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
  - id: e33
    source: ercot-nodal-guiding-principles
    locator: "Guiding Principles of the Nodal Market, Purpose"
    quote: "This non-binding document provides general principles of the future Nodal Market design that may be used by entities to help develop their proposed Nodal Protocol Revision Request (NPRR) or market change proposal."
  - id: e34
    source: imm-som-2025
    locator: "Chapter I.D.1, ORDC (p. 8)"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e35
    source: imm-som-2025
    locator: "Demand Response chapter, footnote 13 on NPRR 1188"
    quote: "Although NPRR 1188 was approved in November 2024, its implementation is not complete yet. According to ERCOT project management, NPRR 1188 will be implemented in January 2027"
  - id: e36
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary, expected benefits of the nodal market"
    quote: "Figure 43 demonstrates the improved utilization of the West to North interface observed during market trials; an increase from 64 percent to 83 percent."
---

## Definition

The nodal market is ERCOT's wholesale design in which resources are priced at nodal locational marginal prices (LMPs) produced by security-constrained economic dispatch. [e1] An LMP is the offer- and bid-based marginal cost of serving the next increment of load at an electrical bus, as calculated by the DAM or SCED. [e4]

## How it works

PUCT rule 25.501 sets the design. ERCOT must price energy, ancillary services and congestion using economic principles such as the shadow price of a constraint, marginal cost pricing, and maximizing the sum of consumer and producer surplus. [e3] Resources are settled at their nodal LMP, and load at its zonal price. A resource-to-load scheduled transaction pays congestion equal to the difference between the resource's nodal LMP and the load zone price. [e2]

Prices settle at Settlement Points, and each Settlement Point is a Resource Node, a Load Zone or a Hub. [e5] Hubs are averages of nodal prices that ERCOT publishes for each settlement interval. [e10] LMPs are calculated at individual generation and load nodes, but load pays the load-weighted average price of its zone. That smooths volatility and makes hedging easier, but it averages some congestion costs across customers. [e6]

The market runs in layers. Real-time prices come from SCED, which sets base points and ancillary service awards from offers, bids and ancillary service demand curves. [e11][e4] The rules also require a voluntary day-ahead energy market [e8], and CRRs, which ERCOT auctions in a simultaneous combinatorial auction instead of offering physical transmission rights. [e9] The IMM describes these as three markets: real-time, plus the day-ahead and CRR forward markets. The real-time market is the most consequential, because it coordinates power flows and sets expectations for the forward markets. [e12]

## ERCOT context

Zonal settlement for load trades signal accuracy for smoother prices, and the quality of the signal depends on the zones. [e6] The IMM says ERCOT set the four current load zones in 2003: North, West, South and Houston. [e7] The Protocols also define a Non-Opt-In Entity (NOIE) Load Zone as a type of Load Zone. [e17] The IMM argues that LMP signals are only as accurate as the match between load zones and persistent transmission constraints. [e6]

The zonal layer has real costs. The IMM's 2025 report says controllable load resources are dispatched and settled at zonal prices, which hurts CLRs at low-cost nodes, such as in the Panhandle, where the zonal price is often above their actual cost of service. [e14] NPRR 1188, approved by the PUCT in November 2024, will introduce nodal pricing for CLRs [e15]; in the November 2026 Protocols an NPRR1188 definition (Energy Bid Curve) is still marked for insertion "upon system implementation". [e16] On the operations side, the IMM reported that in 2025 the rate of transmission constraints violated because they were too expensive to resolve fell to its lowest level since the nodal market was implemented. [e13]

On timing, the saved source is a pre-launch plan: an October 19, 2010 program update to the ERCOT Board says TAC voted to certify the Full Nodal systems for a December 1, 2010 go-live, and planned December 1 as the first Operating Day binding with nodal settlement. [e18][e19]

## Key facts

- Resources are priced at nodal LMPs from security-constrained economic dispatch (rule 25.501(f)). [e1]
- Load imbalances settle at zonal prices, and resource-to-load schedules pay the nodal-to-zonal price difference as congestion. [e2]
- Settlement Point types: Resource Node, Load Zone, Hub. [e5]
- Four current load zones, set in 2003 (per the IMM): North, West, South, Houston. [e7] NOIE Load Zones are also a type of Load Zone. [e17]
- CRRs are financial rights sold in a simultaneous combinatorial auction. ERCOT offers no physical transmission rights. [e9]
- 2025: constraint violations hit their lowest level since nodal implementation (IMM). [e13]
- Planned nodal go-live, per an October 2010 Board update: December 1, 2010 (a pre-launch plan). [e18]

## Say it like this

(Guidance) In ERCOT every generator is paid the price at its own node, and that price includes the cost of transmission congestion, while load pays an average price across its load zone. That gives generators sharp location signals and gives retail load a smoother, easier-to-hedge price, at the cost of averaging some congestion inside each zone.

## Common confusion

(Guidance) "Nodal" does not mean everyone settles at a node. Resources do, but load settles at the load zone price. [e2][e6] Hubs are not physical locations. They are averages of nodal prices. [e10] And CRRs are financial instruments, not rights to physically use transmission. [e9]

## Questions

### If ERCOT is nodal, why do most retail loads see zonal prices?

The PUCT rule settles resources at nodal LMPs and loads at zonal prices, and load zones aggregate nodal prices. [e2][e7] The IMM notes that zonal settlement smooths volatility and helps hedging, but it averages some congestion across customers. [e6]

### What determines an LMP in ERCOT?

It is the offer- and bid-based marginal cost of serving the next increment of load at an electrical bus, produced by the DAM or by SCED. [e4] The rule ties prices to shadow prices of constraints and marginal cost pricing. [e3]

### Why might a large controllable load prefer nodal settlement?

Per the IMM's 2025 report, CLRs are dispatched and settled at zonal prices until NPRR 1188's nodal pricing for CLRs is implemented. [e14][e15][e16] At low-cost nodes, such as in the Panhandle, the zonal price is often above the cost of serving their load. [e14]

### Which ERCOT market matters most?

The IMM calls the real-time market the most consequential: it coordinates real-time power flows and sets expectations for the day-ahead and CRR markets. [e12]

## Scenarios

### A retailer serving load in the West zone asks why its cost differs from the nodal price at a nearby wind farm.

- The wind farm is paid its nodal LMP, while the retailer's load settles at the West load zone price. [e2]
- Some congestion costs are averaged across customers in the zone, and the IMM says LMP signals work only as well as zones align with persistent constraints. [e6]

## Open items

- Nodal go-live date: the only saved source is a pre-launch plan (October 19, 2010 Board update) giving a planned go-live of December 1, 2010 [e18][e19]. No saved source confirms after the fact that the launch happened on that date; np-02 defines a "Texas Nodal Market Implementation Date" without stating it, and the IMM 2024 report says "since the nodal market began in 2011", which may refer to the first full year of data.
- No saved source describes the zonal market that came before nodal, or why ERCOT switched.
- The status of NPRR 1188 (nodal pricing for CLRs, PUCT-approved in November 2024 per IMM 2025) was not confirmed as implemented.
