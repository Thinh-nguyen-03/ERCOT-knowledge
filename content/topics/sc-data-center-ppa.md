---
id: sc-data-center-ppa
name: "Scenario: Data Center Wants a Solar VPPA"
aliases: [data center scenario, data center wants to connect, data center PPA case, large load customer case interview]
kind: scenario
domain: cases
level: 2
lenses: [structuring, analyst, retail, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: large-load-interconnection
    type: used-in
    note: A Large Load is a site with aggregate peak Demand of 75 MW or more, and a studied load may receive its full request, a partial allocation, or wait for a later batch. [e1][e9]
  - to: sb6
    type: regulates
    note: SB 6 requires the PUCT to set a 75 MW threshold and a study fee of at least $100,000, and lets the independent organization direct large loads with on-site backup generation to deploy it or curtail. [e3][e4][e6]
  - to: large-load-growth
    type: example-of
    note: Nearly 90% of the more than 438,000 MW of large-load requests in mid-2026 were data centers. [e11]
  - to: four-cp
    type: affects
    note: Transmission costs are allocated on 4CP load-ratio share, and a PUCT proposal would replace 4CP with 12CP and add a large-load minimum billing demand. [e19][e21][e30]
  - to: ppa-vppa
    type: related
    note: A financial (virtual) PPA has no physical delivery; the parties settle the difference between a strike price and the wholesale price. [e25][e26]
  - to: shape-risk
    type: related
    note: A data center using power around the clock may find a PPA's generation shape does not match its consumption. [e32]
  - to: basis-risk
    type: related
    note: VPPAs are typically settled at a trading hub remote from the project, while the load is billed at its load zone price. [e28][e16]
  - to: rep
    type: related
    note: A person must obtain a REP certificate before reselling electricity to provide retail electric service. [e18]
  - to: load-zone
    type: settles
    note: Loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e16]
  - to: large-flexible-load
    type: contrasts-with
    note: A Large Computational Load is a Large Load where at least half of demand is computational, such as data centers and crypto mining. [e2]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Large Load"
    quote: "One or more Facilities at a single site with an aggregate peak Demand greater than or equal to 75 MW behind one or more common Points of Interconnection (POIs) or Service Delivery Points."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Large Computational Load (LCL)"
    quote: "A Large Load in which 50% or greater of the Demand at the site consists of power electronic based load, specifically computational load, such as data centers and cryptocurrency mining facilities."
  - id: e3
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(c)"
    quote: "The commission shall establish a demand threshold of 75 megawatts unless the commission determines that a lower threshold is necessary to accomplish the purposes described by Subsection (b)."
  - id: e4
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(f)"
    quote: "The standards must set a flat study fee of at least $100,000 to be paid to the interconnecting electric utility or municipally owned utility for initial transmission screening studies for large loads subject to Subsection (c)."
  - id: e5
    source: puct-25-194
    locator: "16 TAC §25.194, intermediate financial security on a dollar per MW basis"
    quote: "A large load customer must post financial security with the interconnecting DSP or the interconnecting TSP in the amount of $50,000 per MW of the requested peak demand for new interconnection requests or $50,000 per MW of the incremental increase in the peak demand for expanded interconnection requests."
  - id: e6
    source: sb6-89r
    locator: "SB 6 Section 2, PURA §37.0561(e)"
    quote: "For the purposes of this subsection, \"on-site backup generating facilities\" means generation that is not capable of exporting energy to the ERCOT transmission grid and that, in the aggregate, can serve at least 50 percent of on-site demand. The independent organization shall establish a threshold before or during an energy emergency alert at which the organization may issue reasonable notice that large load customers with on-site backup generating facilities may be directed to either deploy the customer's on-site backup generating facilities or curtail load. After the independent organization deploys all available market services, except for frequency responsive services, the independent organization may direct the applicable electric utility or municipally owned utility to require the large load customer to either deploy the customer's on-site backup generating facilities or curtail load."
  - id: e7
    source: sb6-89r
    locator: "SB 6 Section 4, PURA §39.170(a)"
    quote: "The commission shall require the independent organization certified under Section 39.151 for the ERCOT power region to ensure that each electric cooperative, transmission and distribution utility, and municipally owned utility serving a transmission-voltage customer develops a protocol, including the installation of any necessary equipment or technology before the customer is interconnected, to allow the load to be curtailed during firm load shed. The electric cooperative, transmission and distribution utility, or municipally owned utility shall confer with the customer to the extent feasible to shed load in a coordinated manner. This subsection applies only to a load interconnected after December 31, 2025, that is not: (1) load operated by a critical load industrial customer, as defined by Section 17.002; or (2) designated as a critical natural gas facility under Section 38.074."
  - id: e8
    source: sb6-89r
    locator: "SB 6 Section 4, PURA §39.169(a)"
    quote: "A power generation company, municipally owned utility, or electric cooperative must submit a notice to the independent organization certified under Section 39.151 for the ERCOT power region before implementing a net metering arrangement between an operating facility registered with the independent organization as a stand-alone generation resource as of September 1, 2025, and a new large load customer as described by Section 37.0561(c)."
  - id: e9
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Studied Load"
    quote: "A studied load may receive its full requested capacity, a partial allocation, or may need to wait until a subsequent batch, if the grid cannot accommodate it at the time."
  - id: e10
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), commitment deadline"
    quote: "ERCOT understands that not all connection requests result in built projects. Therefore, developers will be presented with a commitment deadline currently planned for June 2027 for projects in Batch Zero to post financial security for their development and prove they have appropriate site control needed to build."
  - id: e11
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), Background"
    quote: "As of mid-2026, large users totaling more than 438,000 MW of proposed demand had entered ERCOT’s connection queue. Nearly 90% of those requests were from data centers."
  - id: e12
    source: ercot-ltlf-2026-adjust-proposal
    locator: "Proposal to Adjust the Load Forecast (Project 59772), page 1"
    quote: "The LTLF forecasts peak load is 278,003 megawatts (MW) in 2029 and 367,790 MW in 2032. In its April 15th filing, ERCOT indicated that it had concerns with using these values in the Reliability Assessment and any other transmission and resource adequacy analysis."
  - id: e13
    source: puct-59772-order
    locator: "Project 59772, Order Granting Adjustment Request (June 2026), page 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e14
    source: eia-tx-large-load
    locator: "Today in Energy, Data centers and cryptocurrency mining in Texas drive strong power demand growth"
    quote: "Historically, LFL customers have consumed about 65% of their total approved capacity."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary, Direction for Future Market Design"
    quote: "This suggests a resource adequacy constraint should be applied to the load interconnection process so that ERCOT does not approve an amount of new load that is physically infeasible."
  - id: e16
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e17
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e18
    source: puct-25-107
    locator: "Section 25.107(b)(1)(A)"
    quote: "A person must obtain a REP certificate under this section before purchasing, taking title to, or reselling electricity to provide retail electric service."
  - id: e19
    source: imm-som-2025
    locator: "Recommendation 2015-1, Transition Away from the 4CP Method, page 154 (OCR)"
    quote: "ERCOT allocates the costs of the transmission system to consumers using the 4CP method. Under this methodology, each consumer’s transmission tariff for the following year is based on its load-ratio share during the 15-minute intervals with the highest monthly system-wide demand from June through September"
  - id: e20
    source: ercot-summer-2026-review
    locator: "Slide 4, Key Takeaway on 2026 peak load"
    quote: "On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours. The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW."
  - id: e21
    source: puct-58000-pfp
    locator: "Project 58000, Proposal for Publication (for the July 9, 2026 open meeting), page 1"
    quote: "The proposal will restyle amended §25.192 to Transmission Service Rates, replace the four coincident peak (4CP) methodology with a 12 coincident peak (12CP) methodology for assigning transmission costs, codify using a 30-minute interval to measure 12CP"
  - id: e22
    source: ercot-fern-board-sysops
    locator: "Board item 9.3, Key Takeaways (February 2026)"
    quote: "Between January of 2025 and January of 2026 Data Centers’ growth in actual demand was 15.5%."
  - id: e23
    source: ercot-cdr-2025-12
    locator: "Findings & Discussion, Overview"
    quote: "The most impactful resource adequacy development since the May 2025 CDR release are provisions in Texas Senate Bill 6 (SB6), signed into law in June 2025, that establish new interconnection requirements for Large Loads and ERCOT authority to curtail Large Load consumption before and during declared grid emergencies."
  - id: e24
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), Key Takeaways"
    quote: "The verification and audit process will have a TBD impact on the Batch Zero process and timeline."
  - id: e25
    source: ref-epa-financial-ppa
    locator: "Financial PPA, opening section"
    quote: "A financial PPA is a financial arrangement between a renewable electricity generator (the seller) and a customer (the buyer) that enables both parties to hedge against electricity market price volatility. Unlike with a physical power purchase agreement (physical PPA), there is no physical delivery of power from the seller to the customer. Instead, the energy is delivered to the grid and the customer needs to purchase electricity independent of this financial arrangement."
  - id: e26
    source: ref-nrf-ercot-price-spikes
    locator: "Section on VPPAs as contracts for differences"
    quote: "To the extent the current market price of power under a VPPA exceeds the fixed “strike price” the offtaker has agreed to pay, then the independent power company must pay the excess to the offtaker for each megawatt hour of power produced by the project. To the extent the current market price of power produced by the project is lower than the fixed strike price, then for each megawatt hour of power, the offtaker must pay the difference to the independent power company, thereby providing a floor price the project will receive for its electricity."
  - id: e27
    source: ref-epa-financial-ppa
    locator: "Financial PPA, hedge discussion"
    quote: "A financial PPA can serve as a hedge against electricity price volatility for the customer. This benefit occurs when the price of the power that the financial PPA project sells into the wholesale electricity market is correlated with the price the customer is paying to purchase the electricity for its own operations."
  - id: e28
    source: ref-powermag-ppa
    locator: "Virtual PPAs section"
    quote: "Basis risk (also known as “locational basis risk” or “node-to-hub basis risk”) results from the fact that VPPAs are typically settled at a major trading hub remote from the generation project, while the generator/seller receives payment for wholesale market prices at a nodal delivery point."
  - id: e29
    source: ref-nrf-vppa-risks
    locator: "Section on electricity basis risk"
    quote: "VPPAs are frequently hub-settled. Hubs are aggregations of nodes."
  - id: e30
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.193(d)(3)"
    quote: "A large load customer’s billing under this section must commence at the level of available service at the time it is available, irrespective of whether the large load customer has energized or is fully using available capacity, and for a period of no less than 20 years."
  - id: e31
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed 25.193(d)(1)-(2)(A), Large load minimum billing demand"
    quote: "The minimum billing demand for a large load customer under paragraph (1) of this subsection must be the greater of: (A) the large load customer’s contracted peak demand, as defined in §25.194 of this title (relating to Large Load Interconnection Standards);"
  - id: e32
    source: ref-yale-ppa-risk
    locator: "Other risks, Shape Risk"
    quote: "Shape risk refers to the variable amount of power generated at different times (and at different prices). Companies with electricity usage spread out throughout the day and night (like a data center company) that are looking for a PPA to serve as a hedge against variable retail electricity prices might be concerned about the shape of the power generation under the PPA not matching the shape of their own electricity consumption."
  - id: e33
    source: ref-rmi-ppa-risk
    locator: "Shape Risk, Further Detail (p. 18)"
    quote: "Meanwhile, in a VPPA, if generation and consumption are not coincident (and they rarely are), changing wholesale energy prices throughout the day may lead to the VPPA revenues not fully offsetting the city’s energy costs."
  - id: e34
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, 3. Captured Prices for Wind and Solar"
    quote: "Figure 15 shows that the average captured energy price by renewable generation tends to decrease as installed renewable capacity increases. After years in which solar captured a premium relative to wind, the average captured price for solar at $21 per MWh was nearly at parity with wind at $19 per MWh. This trend is likely to continue as solar capacity increases and shifts peak net demand later to the evening, when wind generation tends to increase."
  - id: e35
    source: imm-som-2025
    locator: "Demand and Supply in ERCOT, Table 2 discussion"
    quote: "Consequently the solar capacity factor during the daily net peak net load interval has fallen each year since 2020, reaching just 1.7% in 2025. In contrast, wind maintained a capacity factor of 29.3% during the same interval, a slight increase from recent years."
  - id: e36
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, 4. Price Spike Impacts"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e37
    source: ercot-batch-zero-update-2026-09
    locator: "Batch Zero Update to the Board (Sept. 14-15, 2026), slide 4"
    quote: "ERCOT has paused the energization of new Large Load data centers and crypto mining facilities until the completion of the verification and audit and community impact review."
  - id: e38
    source: ercot-batch-zero-audit-2026-11
    locator: "ERCOT Update filed Nov. 4, 2026 (Project 59142, item 78), Attachment A, Concluding the Verification Process"
    quote: "ERCOT must complete its review this month to file a report with the PUCT on December 10, 2026."
  - id: e39
    source: puct-25-194
    locator: "16 TAC §25.194(f), SLLIA"
    quote: "Not later than 60 days after ERCOT issues a study report that allocates transmission capacity, the large load customer must execute and fund a SLLIA with the interconnecting DSP and, if different from the interconnecting DSP, the interconnecting TSP."
  - id: e40
    source: puct-25-194
    locator: "16 TAC §25.194(f), SLLIA financial security (p. 25.194-10)"
    quote: "A large load customer must post financial security with the interconnecting DSP or the interconnecting TSP in an amount that is the greater of: (I) $50,000 per MW of the contracted peak demand; or (II) the costs allocated to the large load customer for system upgrades as a result of a batch zero interconnection study or an interconnection study."
  - id: e41
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), PCLR pathway"
    quote: "The customers agree to embed the controllable load into ERCOT’s dispatching system and let ERCOT curtail their power use when transmission constraints arise in their area. In exchange, the customers can access a portion of the grid ahead of a full transmission buildout."
  - id: e42
    source: ercot-pgrr145-puct-report
    locator: "PGRR145 PUCT Report, Effective Date row"
    quote: "PCLR: Upon system implementation"
  - id: e43
    source: ercot-batch-zero-explainer
    locator: "Trending Topics: Batch Connection Process (June 18, 2026), WLPUN pathway"
    quote: "The batch framework recognizes that contribution and allows their on-site generation to offset the amount of transmission capacity they require, making it easier to connect at higher load levels."
  - id: e44
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed new 25.252(c)(2)(i)-(ii), Large Load Customer Tariffs"
    quote: "A large load customer must pay contribution in aid of construction for transmission interconnection costs and distribution interconnection costs. (ii) Contribution in aid of construction must be made in the form of a direct cash payment."
  - id: e45
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed new 25.252(c)(3), Large Load Customer Tariffs"
    quote: "Interconnection agreement. An interconnection agreement for service with a term of not less than 20 years and that complies with §25.194 of this title (relating to Large Load Interconnection Standards) is required."
  - id: e46
    source: puct-58000-pfp
    locator: "Project 58000 Proposal for Publication, proposed new 25.252(d)(2), TSP tariff requirements"
    quote: "Reallocation. Transmission capacity may be reallocated if a large load customer fails to meet the requirements described in this subsection."
  - id: e47
    source: ref-nrf-hedges-since-uri
    locator: "Section on the buyer's perspective during Uri"
    quote: "It has a virtual power purchase agreement with a solar project or wind farm to hedge its cost of electricity. If that plant was shut down during the storm, that energy purchaser ended up paying $9,000 a MWh for the electricity it needed, and it received $0 from the VPPA hedge it holds with a renewable plant."
  - id: e48
    source: ref-c2es-ppa
    locator: "Types of PPAs (p. 3)"
    quote: "Note that the customer still purchases electricity from its local provider, even though the customer is buying and selling renewable electricity in the market where the vPPA is located."
  - id: e49
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "The price of electricity spiked to $9,000 per MWh and stayed there by orders of the PUCT, which suspended some market price setting rules during the electricity blackouts."
  - id: e50
    source: sb6-89r
    locator: "SB 6 Section 4, PURA §39.169(b)"
    quote: "This section does not apply to a generation resource: (1) the registration for which included a co-located large load customer at the time of energization, regardless of whether the load was energized at a later date; or (2) a majority interest of which is owned indirectly or directly as of January 1, 2025, by a parent company of the customer that participates in the new net metering arrangement."
---

## Definition

This scenario is about a data center that wants to connect to ERCOT and buy power for its load. In the Protocols a Large Load is one or more facilities at a single site with aggregate peak demand of 75 MW or more, and a Large Computational Load is a Large Load where at least half the demand is computational, such as data centers. [e1][e2]

## How it works

Step 1, the connection rules. SB 6 told the PUCT to set a 75 MW threshold for large load interconnection standards (unless it finds a lower threshold necessary) and a flat study fee of at least $100,000. [e3][e4] The PUCT rule requires intermediate financial security of $50,000 per MW of requested peak demand for new requests. [e5] Within 60 days of an ERCOT study report that allocates transmission capacity, the customer must sign and fund a SLLIA, with security of the greater of $50,000 per MW of contracted peak demand or its allocated system upgrade costs. [e39][e40] ERCOT now studies large loads together in batches: a studied load in Batch Zero may get its full request, a partial allocation, or have to wait, and projects face a commitment deadline, planned for June 2027 when ERCOT described the process in June 2026, to post financial security and prove site control. [e9][e10] ERCOT's September 2026 Board update says the verification and audit process will have a to-be-determined impact on the Batch Zero process and timeline, and that ERCOT had paused energization of new Large Load data centers and crypto mining facilities until the audit and community impact review are complete. [e24][e37] ERCOT's November 2026 filing says it must finish its review that month to report to the PUCT on December 10, 2026. [e38]

Step 2, the connection options. Batch Zero offers two optional pathways. Under the PCLR pathway the customer lets ERCOT curtail its controllable load when local transmission constraints arise, in exchange for earlier access to part of the grid; that pathway takes effect only upon system implementation. [e41][e42] Under the WLPUN pathway on-site generation offsets the transmission capacity the site needs, making it easier to connect at higher load levels. [e43]

Step 3, the operating conditions. Under SB 6, if the data center has on-site backup generation (non-exporting generation able to serve at least 50 percent of on-site demand), then after ERCOT deploys all available market services except frequency responsive ones, the independent organization may direct the utility to require it to deploy that backup generation or curtail load. [e6] Separately, utilities serving transmission-voltage customers must have a protocol, including any necessary equipment installed before interconnection, so the load can be curtailed during firm load shed; this applies to loads interconnected after December 31, 2025, other than critical load industrial customers and critical natural gas facilities. [e7] If the data center plans a net metering arrangement with an operating facility registered as a stand-alone generation resource as of September 1, 2025, the generation company, municipally owned utility or cooperative must notify ERCOT before implementing it, unless the generator's registration already included a co-located large load or a parent company of the customer has owned a majority interest in it since January 1, 2025. [e8][e50] ERCOT's December 2025 CDR called the SB 6 provisions on Large Load interconnection requirements and ERCOT authority to curtail Large Load consumption before and during declared grid emergencies the most impactful resource adequacy development since the May 2025 CDR. [e23]

Step 4, the forecast context. More than 438,000 MW of large-user requests were in ERCOT's queue by mid-2026, nearly 90% of them data centers. [e11] ERCOT's 2026 long-term load forecast (LTLF) reached 278,003 MW in 2029, which ERCOT itself had concerns about using, and the PUCT approved ERCOT's request to adjust the LTLF using the Option B methodology. [e12][e13] For comparison, EIA reports that large flexible load (LFL) customers have historically consumed about 65% of their total approved capacity. [e14]

Step 5, buying the power. A person must hold a REP certificate before reselling electricity to provide retail electric service, and load is billed at the load zone price, a load-weighted average of nodal prices. [e18][e16] LSEs manage price exposure with owned generation, bilateral PPAs, futures or day-ahead purchases. [e17] A solar VPPA does not deliver power: the EPA describes a financial PPA as having no physical delivery, so the customer still buys its electricity separately. [e25][e48] Under a VPPA the project pays the offtaker when the market price is above the strike price and the offtaker pays the project when it is below, per MWh produced. [e26] VPPAs are typically settled at a trading hub, not at the project's node. [e28][e29]

Step 6, the wires bill. ERCOT allocates transmission costs on each customer's load-ratio share in the four summer peak intervals (4CP), and a PUCT proposal would replace 4CP with 12CP. [e19][e21] The same July 2026 proposal (not adopted in the saved sources) would set a large load's minimum billing demand at no less than its contracted peak demand, start billing at the level of available service whether or not the site has energized, run it for at least 20 years, require a 20-year interconnection agreement and require cash contribution in aid of construction for interconnection costs. [e31][e30][e45][e44] It would also let transmission capacity be reallocated if a large load fails the reservation requirements. [e46]

## Key facts

- Large Load threshold: 75 MW at a single site. [e1][e3]
- SB 6 minimum screening study fee: $100,000. [e4]
- PUCT intermediate financial security: $50,000 per MW of requested peak demand for new requests; SLLIA security is the greater of $50,000 per MW of contracted peak or allocated upgrade costs. [e5][e40]
- Large-user requests: more than 438,000 MW by mid-2026, nearly 90% data centers. [e11]
- As of September 2026, ERCOT had paused energization of new Large Load data centers pending the verification and audit; ERCOT's report to the PUCT is due December 10, 2026. [e37][e38]
- Data center actual demand grew 15.5% between January 2025 and January 2026. [e22]
- Solar's capacity factor in the 2025 net peak interval was 1.7%, and its 2025 captured price was $21/MWh. [e35][e34]
- Summer 2026 peak: estimated maximum 4CP reduction about 492 MW; crypto reduction about 3,299 MW. [e20]

## Say it like this

(Guidance) "Getting connected is now a batch process with real money up front and a pause on new data center energization while ERCOT audits Batch Zero, and the data center should expect curtailment obligations in emergencies and possibly only a partial allocation of what it asked for. On the supply side, a solar VPPA is a financial swap, not power: the site still buys at its load zone price around the clock, so the VPPA hedges only the hours and the location it covers, and the transmission bill is a separate line that may move to a 20-year minimum billing demand."

## Common confusion

(Guidance) A large load request is not a forecast of load. ERCOT said it had concerns about using its LTLF values, and EIA notes that large flexible load customers historically used about 65% of approved capacity. [e12][e14] Another confusion is assuming a renewable PPA removes price risk: the load is still billed at the load zone price, the VPPA is typically settled at a hub, and the hedge only works to the extent the project's market price tracks what the customer pays. [e16][e28][e27] Finally, the 12CP and minimum billing demand terms are a proposal for publication, not an adopted rule. [e21]

## Questions

### What does SB 6 require of a new data center in an emergency?

If the data center has on-site backup generation that can serve at least 50 percent of its demand, then after the independent organization deploys all available market services except frequency responsive ones, it may direct the utility to require the customer to deploy that backup generation or curtail load. [e6] Transmission-voltage loads interconnected after December 31, 2025 (other than critical load industrial customers and critical natural gas facilities) must be set up so they can be curtailed during firm load shed. [e6][e7]

### Why might the data center not get the full capacity it asks for?

In Batch Zero a studied load may receive its full request, a partial allocation, or wait for a later batch if the grid cannot accommodate it at the time. [e9] The IMM also argues for a resource adequacy constraint on load interconnection so ERCOT does not approve physically infeasible load. [e15] The PCLR pathway, once implemented, trades curtailment during local constraints for earlier partial access. [e41][e42]

### Why does 4CP matter to a data center?

Transmission charges are based on the customer's load-ratio share in the four summer peak intervals, so cutting load in those intervals cuts the bill; ERCOT estimated about 492 MW of 4CP reduction at the summer 2026 peak. [e19][e20] A PUCT proposal for publication would move to 12CP, so the value of that strategy may change. [e21]

### Why does a solar VPPA hedge a 24x7 data center poorly?

The Yale Clean Energy Forum names data centers as the classic case where a PPA's generation shape does not match round-the-clock consumption, and RMI notes that when generation and consumption are not coincident the VPPA revenues may not offset energy costs. [e32][e33] In ERCOT, most 2025 price spikes came in the peak net load hours between 7 and 9 p.m., as solar ramped down; solar's capacity factor in the daily peak net load interval was just 1.7% in 2025, and its 2025 captured price was only $21/MWh. [e36][e35][e34] (Reasoning) So the solar VPPA pays out least in the hours the data center's load zone bill is highest.

### What if the PUCT adopts the July 2026 transmission proposal as written?

The data center's minimum billing demand would be at least its contracted peak demand, billing would start when service is available even if the site is not energized, and it would last at least 20 years. [e31][e30] (Reasoning) That turns an oversized interconnection request into a long fixed cost, so the developer should not ask for more MW than it will use. The proposal was not adopted in the saved sources. [e21]

### What does on-site generation buy the developer?

Under the WLPUN pathway it offsets the transmission capacity the site needs. [e43] Under SB 6, qualifying backup generation also gives the independent organization the option to direct the site to run it instead of curtailing in an emergency. [e6] A net metering arrangement with an existing stand-alone generator needs prior notice to ERCOT, subject to the statute's exceptions. [e8][e50]

## Scenarios

### A developer wants a 500 MW data center in ERCOT, with power bought under a solar VPPA. What do you check and what do you tell them?

- (Reasoning) Split the answer into connection, operations, forecast credibility, power cost and wires cost.
- Connection: the site is a Large Load (75 MW or more), pays at least a $100,000 study fee and must post intermediate financial security of $50,000 per MW. [e1][e4][e5]
- Suppose (illustrative) the full 500 MW is requested: security at $50,000 per MW is 500 x 50,000 = $25 million.
- Allocation risk: Batch Zero may give full, partial or no allocation this round, and projects must post security and show site control by a commitment deadline that was planned for June 2027 as of June 2026; ERCOT has since said the verification and audit will have a to-be-determined impact on the timeline. [e9][e10][e24]
- Timing risk: as of September 2026 ERCOT had paused energization of new Large Load data centers until the audit and community impact review are complete. [e37]
- Operations: under SB 6, if the site has qualifying on-site backup generation, the independent organization may direct the utility to require it to run that generation or curtail; and a transmission-voltage load interconnected after December 31, 2025 must be curtailable in firm load shed. [e6][e7]
- Co-location: a net metering arrangement with an existing stand-alone generation resource requires a notice to ERCOT before it is implemented, with exceptions for a resource whose registration already included a co-located large load or that a parent company of the customer has majority-owned since January 1, 2025. [e8][e50]
- Power cost: whoever resells electricity to the site for retail service needs a REP certificate, and the load is billed at the load zone price. [e18][e16]
- The VPPA: it is a financial contract for differences with no delivery, typically hub-settled, so the site still buys its power at the load zone. [e25][e26][e28][e16]
- (Reasoning) Check how the PPA's generation profile and settlement point line up with the data center's load shape at its load zone; a flat round-the-clock load needs a plan for the evening and night hours the solar project does not cover.
- Transmission: 4CP charges are based on summer peak intervals, and a PUCT proposal would move to 12CP with a large-load minimum billing demand for at least 20 years. [e19][e21][e30]
- For the analyst view, treat queue-based numbers with caution: ERCOT said it had concerns with the LTLF values and the PUCT approved an adjustment (Option B). [e12][e13]

### Variant: a winter evening shortage hits while the solar project produces nothing. What does the data center's VPPA do?

- The VPPA pays per MWh the project produces, so with no output it pays nothing. [e26]
- Norton Rose Fulbright illustrates this with a hypothetical Winter Storm Uri example: if a data center's VPPA plant was shut down during the storm, the data center paid $9,000/MWh for the power it needed and received $0 from the hedge. [e47] UT Austin's review confirms prices sat at $9,000/MWh by PUCT order during the blackouts. [e49]
- (Reasoning) A data center that cannot curtail is exposed to the full load zone price in those hours unless its retail contract or other hedges cover them; the solar VPPA is not a reliability or shortage hedge.

## Open items

- Resolved 2026-11-21: VPPA structure (contract for differences, hub settlement, no delivery) is now cited from EPA (tier 2) and industry references; credit terms, collateral and termination clauses of VPPAs are still not covered by any saved source.
- Resolved 2026-11-21 (as proposal only): proposed §25.252 tariff terms and proposed §25.193 minimum billing demand are cited from the Project 58000 proposal for publication; whether the PUCT adopted them is not in the saved sources.
- The full WLPUN and PCLR rules are in large-load-interconnection; the PCLR effective date beyond "upon system implementation" is not in the saved sources.
- Whether ERCOT has lifted the September 2026 pause on energizing new Large Load data centers, and what its December 10, 2026 report found, is not in the saved sources.
- The Large Load Demand Management Service rule (Project 58482) was a proposal, not adopted, in the saved sources.
