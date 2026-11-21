---
id: energy-only-market
name: Energy-Only Market Design
aliases: [energy-only market, energy only market, EOM, no capacity market]
kind: concept
domain: structure
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: ordc
    type: composed-of
    note: Until RTC went live in December 2025 the shortage pricing in ERCOT came from operating reserve demand curves, first added to real-time prices in summer 2014. [e12][e15][e28]
  - to: asdc
    type: composed-of
    note: With RTC, a set of sloped ancillary service demand curves defines shortage pricing in the day-ahead and real-time markets, per the IMM. [e16]
  - to: offer-cap
    type: related
    note: Under PUCT rule 25.509 the offer cap stays at the HCAP until peaker net margin passes three times CONE, then drops to the low cap; the Protocol table now lists a $5,000 day-ahead and a $2,000 real-time cap. [e8][e7][e17]
  - to: peaker-net-margin
    type: related
    note: PNM is the brake on scarcity rent; its threshold still uses the legacy CONE of $105 per kW-year, not the $140 planning CONE. [e30][e7]
  - to: resource-adequacy
    type: related
    note: The IMM says meeting the 25.508 reliability standard through price signals alone would require an extraordinarily high VOLL. [e11]
  - to: reliability-standard
    type: related
    note: The 25.508 standard sets a frequency criterion of 0.1 LOLE (one event in ten years), which PUCT staff reported the energy-only equilibrium modelled by E3 does not meet. [e42][e43]
  - to: pcm
    type: contrasts-with
    note: PURA limits any capacity-style credit program the PUCT might impose, including a $1 billion annual net cost cap; the IMM called the PCM a novel form of capacity market. [e14][e44]
  - to: ancillary-services
    type: affects
    note: The IMM warns that over-procuring ancillary services suppresses the shortage pricing an energy-only design relies on. [e13]
  - to: nodal-market
    type: related
    note: The energy-only rules (2006) predate the nodal market, which began on December 1, 2010. [e22][e25]
  - to: imm
    type: related
    note: The IMM's 2025 State of the Market report compares net revenue with the planning CONE to judge whether new investment is being incentivized. [e5]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, B.2 Resource Adequacy through Markets"
    quote: "Energy-Only Market. An energy-only market relies primarily on expected shortage revenue in the energy and ancillary services markets to motivate investment in new generation. Although the shortage pricing mechanism provides a clear and simple revenue signal to investors, it also requires the market to go short on capacity to enable such revenue opportunities. Accordingly, energy-only markets can struggle to satisfy a reliability standard, such as the 1-in-10 standard adopted by most RTOs in the US."
  - id: e2
    source: ferc-nerc-uri
    locator: "FERC-NERC February 2021 report, Description of Affected Electric Grid Entities, footnote 36"
    quote: "Unlike some ISOs/RTOs, ERCOT does not have a capacity market."
  - id: e3
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, C. Net Revenue Analysis"
    quote: "Net revenue is the key determinant of investment incentives because it is the earnings available to recover fixed and capital expenses, including a return on investment, after covering short-run operating costs. In ERCOT's energy-only market, net revenues from the energy and ancillary services markets are the primary economic signals for investment and retirement decisions for generation. Revenues may also come from the day-ahead market or forward bilateral contracts, but these ultimately reflect expectations of real-time energy and ancillary service prices. We calculate net revenue by subtracting a generating unit's variable production costs from its total potential revenue."
  - id: e4
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, B. Resource Adequacy Background"
    quote: "Shortage Pricing: In electricity markets, prices rise during periods of tight supply to reflect the higher value of available generation. These price spikes allow generators to recover fixed costs and incentivize new investment. In ERCOT's energy-only market, shortage pricing is the primary mechanism that drives revenue and signals investment decisions."
  - id: e5
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, D.2 CONE vs Net Revenue"
    quote: "Net revenues for a CT were $52.59 per kW-year and $82.96 per kW-year for a CC generator. Comparing 2025 net revenues with the planning CONE of $140 per kW-year, set by the PUCT, shows that 2025 net revenues were not high enough to incentivize new investment. CONE typically differs by technology, but we adopted the planning CONE for both technologies in this chart for simplicity. More importantly, years like 2024 and 2025 occur often and are not a threat to resource adequacy because one should expect tighter conditions to occur in other years that can produce revenues substantially above CONE. The years 2021 and 2023 are such examples."
  - id: e6
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, D.3 The Role of CONE for New Investment"
    quote: "CONE is not a target that market net revenues are expected to meet every year, but rather a longrun benchmark assessed over the life cycle of generating investments. Generators earn returns over many years, not annually, and periods of lower net revenues can naturally discourage new investment in the short term. When investment slows, tighter supply conditions increase the likelihood of scarcity, which raises net revenues through shortage pricing. Those higher-revenue periods then restore investment incentives, leading to additional entry and subsequent periods of lower net revenues. Viewed in this context, years with lower net revenues are not inherently problematic, but instead reflect the cyclical dynamics of an energy-only market balancing supply, demand, and investment over time."
  - id: e7
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, E. Peaker Net Margin"
    quote: "PNM is a simplified benchmark for the annual net revenue that a hypothetical gas peaking unit could earn in the ERCOT market. If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT's history, on February 16, 2021, during Winter Storm Uri."
  - id: e8
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(C), System-Wide Offer Caps"
    quote: "The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants."
  - id: e9
    source: imm-som-2025
    locator: "2025 State of the Market Report, Executive Summary, Real-time Market Performance"
    quote: "This increase in operating reserve levels has significantly reduced the prevalence of shortage pricing. For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014."
  - id: e10
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, B.2 (VOLL discussion)"
    quote: "Because energy-only markets rely heavily on shortage pricing to provide investment signals, the VOLL in these markets must be extremely high to satisfy a given reliability standard. Meeting such a standard solely through shortage prices requires a level of VOLL that is often difficult to implement in practice. This challenge explains why most RTOs have adopted capacity constructs, which make it easier to achieve the required level of reliability without relying entirely on very high shortage pricing."
  - id: e11
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, F (Reliability Standard Assessment)"
    quote: "As we have previously noted, meeting the reliability standard defined in 16 TAC §25.508 through price signals alone would imply an operational VOLL that is extraordinarily high for an energy-only market like ERCOT's. The final recommendations emerging from the RSA are not expected to rely exclusively on increasing VOLL. Instead, they are expected to evaluate a range of potential market design options. This context underscores how difficult it is to meet the reliability standard in an energy-only market like ERCOT. The Commission should clarify whether the reliability standard is intended to function as a binding requirement that the market must meet or as an aspirational benchmark against which alternative market design options are evaluated to improve reliability outcomes over time."
  - id: e12
    source: imm-som-2024
    locator: "2024 State of the Market Report, Resource Adequacy, introduction"
    quote: "In an energy-only market, the shortage pricing will be the result of operating reserve demand curves (ORDCs) that will set prices when the market does not have sufficient resources to satisfy the full market requirements for energy and ancillary services. If the market is not sustaining sufficient resources, the economic signals can be strengthened by increasing the aggregate value implied by the ORDC. The Commission implemented such changes at the start of 2022 and they have been extremely effective in increasing the markets' shortage revenues."
  - id: e13
    source: imm-som-2025
    locator: "2025 State of the Market Report, Ancillary Services, 3. The AS Methodology and the Energy-Only Market"
    quote: "ERCOT's energy-only market design must allow scarcity pricing to send market signals that incent investment in new generation. Procuring excessive volumes of ancillary services will inefficiently inject additional non-price-setting energy into the real-time market and reduce prices. Ultimately, it can undermine the ability of shortage pricing to provide efficient long-term signals for new investment."
  - id: e14
    source: pura-39
    locator: "PURA §39.1594(a)(1), Reliability Program"
    quote: "the commission may not require retail customers or load-serving entities in the ERCOT power region to purchase credits designed to support a required reserve margin or other capacity or reliability requirement unless the commission ensures that:(1)  the net cost to the ERCOT market of the credits does not exceed $1 billion annually, less the cost of any interim or bridge solutions that are lawfully implemented, except that the commission may adjust the limit:(A)  proportionally according to the highest net peak demand year-over-year with a base year of 2026; and(B)  for inflation with a base year of 2026;"
  - id: e15
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e16
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 48)"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e17
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e18
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e19
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter on RTO/ISO markets, introduction"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
  - id: e20
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), RTO/ISO Capacity Markets and Resource Adequacy"
    quote: "Most RTOs/ISOs run a capacity market that allows LSEs to satisfy their reserve obligation. The markets cover short-term capacity, such as a month, season or year. PJM and ISO-NE run capacity auctions up to three years prior to when the capacity is needed. The capacity markets are intended to provide more certainty for investment in new capacity resources while including an opportunity for all resources to recover their fixed costs over time."
  - id: e22
    source: imm-som-2010
    locator: "2010 State of the Market Report, Demand and Resource Adequacy, E. Effectiveness of the Scarcity Pricing Mechanism (p. 47)"
    quote: "The Public Utility Commission of Texas (\"PUCT\") adopted rules in 2006 that define the parameters of an energy-only market. These rules include a Scarcity Pricing Mechanism (\"SPM\") that relaxed the existing system-wide offer cap by gradually increasing it to $1,500 per MWh on March 1, 2007, $2,250 per MWh on March 1, 2008, and to $3,000 per MWh shortly after the implementation of the nodal market."
  - id: e23
    source: imm-som-2010
    locator: "2010 State of the Market Report, Demand and Resource Adequacy, E. Effectiveness of the Scarcity Pricing Mechanism (p. 47)"
    quote: "Unlike markets with a long-term capacity market where fixed capacity payments are made to resources across the entire year regardless of the relationship of supply and demand, the objective of the energy-only market design is to allow energy prices to rise significantly higher during legitimate shortage conditions (i.e., when the available supply is insufficient to simultaneously meet both energy and minimum operating reserve requirements) such that the appropriate price signal is provided for demand response and new investment when required. During non-shortage conditions (i.e., most of the time), the expectation of competitive energy market outcomes is no different in energy-only than in capacity markets."
  - id: e24
    source: imm-som-2010
    locator: "2010 State of the Market Report, Demand and Resource Adequacy, E. Effectiveness of the Scarcity Pricing Mechanism (p. 48)"
    quote: "Hence, in an energy-only market, expectations about both the magnitude of the energy price during shortage conditions and the frequency of shortage conditions are what will attract new investment when required. In other words, the higher the price during shortage conditions, the fewer shortage conditions that are required to provide the investment signal, and vice versa. While the magnitude of price expectations is determined by the PUCT energy-only market rules, it remains an empirical question whether the frequency of shortage conditions over time will be optimal such that the market equilibrium produces results that satisfy the reliability planning requirements (i.e., the maintenance of a minimum 13.75 percent planning reserve margin)."
  - id: e25
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary, Introduction (p. i)"
    quote: "The market outcomes during the eleven months of zonal market operation in 2010 were generally similar to those in 2009. The highlight of 2010 was the much anticipated implementation of ERCOT's nodal market on December 1, 2010."
  - id: e26
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary (p. ii)"
    quote: "Continued low natural gas prices and scarcity pricing deficiencies contributed to net revenues, as shown in Figure 33, that were insufficient to support new generation investment for any generation technology in any region of the ERCOT market."
  - id: e27
    source: imm-som-2020
    locator: "2020 State of the Market Report, Review of Real-Time Market Outcomes, footnote 9 (p. 14)"
    quote: "At the open meeting on September 12, 2013, the Commission directed ERCOT to move forward with implementing ORDC, including setting the Value of Lost Load at $9,000."
  - id: e28
    source: ercot-ordc-report-2022
    locator: "2022 Biennial ERCOT Report on the ORDC, 1.2 Initial ERCOT Implementation"
    quote: "ERCOT's initial ORDC implementation introduced separate price adders for on-line and off-line reserve categories to the five-minute Real-Time Market in summer 2014."
  - id: e29
    source: ercot-ordc-report-2022
    locator: "2022 Biennial ERCOT Report on the ORDC (October 31, 2022), 1.3 Subsequent ERCOT ORDC Adjustments"
    quote: "VOLL (which is set equal to SWCAP) changed twice, from $9,000/MWh down to the $2,000/MWh Low-System-Wide Offer Cap (LCAP) following Winter Storm Uri, then back up to $5,000/MWh on January 1 of this year. Finally, the minimum contingency level was increased from 2,000 MW to 3,000 MW on January 1 of this year."
  - id: e30
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, key insights, page 97 (OCR)"
    quote: "The planning Cost of New Entry has received renewed attention in ERCOT because it may affect the market design options that ERCOT proposes to meet the reliability standard in 2029 as part of its 2026 assessment. In 2024, the PUCT approved a CONE of $140 per kW-year while leaving the legacy CONE of $105 per kW-year in place to determine the peaker net margin threshold."
  - id: e31
    source: imm-som-2021
    locator: "2021 State of the Market Report, Resource Adequacy, net revenue discussion"
    quote: "Net revenues for combustion turbines rose to almost $700 per kW-year across all zones (net revenues would have ranged from $60 per kW-year to $78 per kW-year but for Winter Storm Uri); while"
  - id: e32
    source: imm-som-2022
    locator: "2022 State of the Market Report, Resource Adequacy, net revenue discussion"
    quote: "Even without the extreme prices experienced during Winter Storm Uri, the ERCOT market did provide net revenues above the CONE level needed to support new investment in 2022. This was primarily due to the ORDC changes implemented at the beginning of the year."
  - id: e33
    source: imm-som-2023
    locator: "2023 State of the Market Report, Resource Adequacy, net revenue discussion"
    quote: "The CONE values in 2023 were roughly the same as in 2022, with the CONE for these resources ranging from roughly $80 to $130 per kW-year. The figures show that the ERCOT markets provided net revenues substantially above CONE in 2023. For example, net revenues for: • Combustion turbines ranged from $224 per kW-year to $257 per kW-year; while • Combined-cycle units ranged from $228 per kW-year to $272 per kW-year."
  - id: e34
    source: imm-som-2020
    locator: "2020 State of the Market Report, Resource Adequacy, net revenue discussion"
    quote: "In 2020, the estimated CONE values for both types of resources increased, with the CONE values for natural gas combustion turbines ranging from $70 to $117 per kW-year. The ERCOT market did not provide net revenues above the CONE level needed to support new investment in 2020:"
  - id: e35
    source: imm-som-2024
    locator: "2024 State of the Market Report, Resource Adequacy, E. Peaker Net Margin, page 120 (OCR)"
    quote: "A resource owner is seeking an average net revenue across the investment horizon that will provide a positive return on the investment. This involves a mix of low and high net revenue years. If net revenue is too volatile over a period of years, even high net revenue years may not produce new investment due to perceived risk by the developer."
  - id: e36
    source: imm-board-2026-02
    locator: "IMM report to ERCOT Board Reliability and Markets Committee, February 9-10, 2026, slide 4 'Notes on RA Through Markets'"
    quote: "There has been a pattern of considering programs that price services outside the market (e.g. FFSS, ERS, RDR, Fwd Capacity Procurement). • These programs suppress price which inhibits the market's ability to signal relative shortage and incent new investment. • A market needs to experience and price shortages in order to provide the incentives for new investment."
  - id: e37
    source: imm-som-tac-2026-07
    locator: "IMM overview of the 2025 SOM to ERCOT TAC (August 13, 2026), slide 3"
    quote: "Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal"
  - id: e38
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(D), System-Wide Offer Caps"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year."
  - id: e39
    source: puct-25-509
    locator: "16 TAC §25.509(b)(2)-(4), Scarcity Pricing Mechanism"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh). (3) For the purpose of this section, the real-time energy price (RTEP) will be measured as an average system-wide price as determined by ERCOT. (4) Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP – POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP – POC >0."
  - id: e40
    source: puct-25-509
    locator: "16 TAC §25.509(d), Review of System-Wide Offer Cap Programs"
    quote: "Review of System-Wide Offer Cap Programs. Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program."
  - id: e41
    source: pura-39
    locator: "PURA §39.160(a)-(b), Wholesale Pricing Procedures"
    quote: "(a)  The commission by rule shall establish an emergency pricing program for the wholesale electric market.(b)  The emergency pricing program must take effect if the high system-wide offer cap has been in effect for 12 hours in a 24-hour period after initially reaching the high system-wide offer cap."
  - id: e42
    source: puct-25-508
    locator: "16 TAC §25.508(b)(1), Reliability standard for the ERCOT region"
    quote: "Frequency. The expected loss of load events for the ERCOT region must be equal to or less than one event per ten years on average, i.e., 0.1 loss of load expectation (LOLE)."
  - id: e43
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project No. 55000 (December 13, 2024), Review of ERCOT Assessment"
    quote: "E3 determined that a long-term equilibrium outcome with the current energy-only market design reaches an LOLE of 2.67 days per year. ERCOT included results from its Long-Term Reliability Assessment probabilistic modeling of a forecasted 2026 ERCOT system that showed an LOLE of 0.51 days per year, which is a more likely outcome for 2026 as it is based on an evaluation of the anticipated resource portfolio and load forecast"
  - id: e44
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project No. 55000 (December 13, 2024), Review of IMM Assessment"
    quote: "In its memo, the IMM stated that the PCM is a novel form of a capacity market because it is settled ex-post based on after-the-fact availability rather than ex-ante based on expected availability. The IMM also concluded that the PCM would provide a new source of revenue for generators that would increase ERCOT' s capacity margin, increase the costs to ERCOT's customers, but reduce shortage revenues."
  - id: e45
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project No. 55000 (December 13, 2024), Review of IMM Assessment, IMM conclusion 5"
    quote: "An advantage ofthe energy-only market is that the shortage revenue it provides to resources is accurately focused on resources that reduce the risk of or actual loss of load."
  - id: e46
    source: pura-39
    locator: "PURA §39.1594(b), Reliability Program"
    quote: "This section does not require the commission to adopt a reliability program that requires an entity to purchase capacity credits."
  - id: e47
    source: ercot-resource-adequacy-dr-2026-04
    locator: "ERCOT Board item 11.1 (April 20-21, 2026), CRA report, key findings"
    quote: "CRA's key findings are as follows: • ERCOT is facing near-term energy scarcity risks because projected load growth is outpacing the industry's ability to site, permit, build, and interconnect the new generation required to reliably serve the new loads."
---

## Definition

An energy-only market relies mainly on expected shortage revenue in the energy and ancillary service markets to attract investment in new generation, with no separate capacity payment. [e1] ERCOT uses this design. It does not have a capacity market. [e2] FERC regulates all RTOs/ISOs except ERCOT, and FERC staff note that most RTOs/ISOs run a capacity market that lets LSEs meet their reserve obligation. [e19][e20]

## How it works

Generators fund their fixed and capital costs from net revenue, which is what remains of energy and ancillary service revenue after short-run operating costs. In ERCOT, those net revenues are the main economic signal for building and retiring plants. Day-ahead and bilateral forward revenue ultimately reflects expected real-time prices. [e3]

The core of the design is shortage pricing. When supply is tight, prices rise to reflect the higher value of available generation, and those spikes are how generators recover fixed costs. [e4] As the IMM described it in its 2010 report, the objective is to let energy prices rise far higher during legitimate shortages, when supply cannot meet both energy and minimum operating reserve requirements; outside shortages (most of the time), competitive outcomes are expected to look the same as in a capacity market. [e23] Investment then depends on two expectations: how high prices go in a shortage and how often shortages happen. The higher the shortage price, the fewer shortages are needed to give the same signal. [e24]

In ERCOT, before RTC went live in December 2025, that shortage pricing came from operating reserve demand curves, which set prices when the market lacked enough resources to meet its full energy and ancillary service requirements. If too few resources were being sustained, the signal could be strengthened by raising the value the ORDC implied. [e12][e15] The ORDC adder was discontinued in December 2025 with RTC, and the IMM says a set of sloped ancillary service demand curves now defines shortage pricing in the day-ahead and real-time markets. [e15][e16]

The design has a built-in tension. To produce investment revenue, the market has to go short on capacity, so energy-only markets can struggle to meet a 1-in-10 reliability standard. [e1] The IMM says meeting such a standard through shortage prices alone needs a very high value of lost load (VOLL), and that this is why most RTOs have adopted capacity constructs. [e10] In FERC staff's description, capacity markets are meant to give more certainty for investment in new capacity while letting all resources recover fixed costs over time. [e20]

There is also a brake on excess scarcity rent. The system-wide offer cap starts each year at the high cap (HCAP) and stays there until peaker net margin (PNM) passes three times CONE. [e8] If it does, the cap is set to the low cap (LCAP) for the rest of the calendar year; ERCOT keeps applying the ORDC and reliability deployment price adder, but energy prices, excluding congestion, may not exceed the LCAP plus $1. [e38] The IMM puts the threshold at $315 per kW-year and describes the cut as $5,000 to $2,000 per MWh. [e7] That description does not mention the RTC split: the Protocol parameter table now lists the day-ahead cap at $5,000 and the real-time cap at $2,000 per MWh, and ERCOT says the SWCAP was reduced to $2,000 from $5,000 after RTC go-live on 12/5/2025. [e17][e18] A second brake comes from statute: the emergency pricing program must take effect if the HCAP has been in effect for 12 hours in a 24-hour period. [e41]

## Formula

Net revenue = total potential revenue from energy and ancillary services minus variable production costs. Investors compare it against CONE over the life of the plant, not year by year. [e3][e6]

Peaker net margin (16 TAC §25.509(b)): each day the peaking operating cost (POC) is 10 times ERCOT's natural gas price index, in $/MWh. From January 1, PNM accumulates (RTEP − POC) × (minutes in the settlement interval / 60) for every settlement interval in which the average system-wide real-time energy price (RTEP) exceeds POC. [e39] When the calendar-year total passes three times CONE, the cap drops to the LCAP. [e8][e38] The threshold uses the legacy CONE of $105 per kW-year, which gives the $315 per kW-year (315,000 $/MW-year) threshold. [e30][e7][e17]

## ERCOT context

The IMM treats CONE as a long-run benchmark, not a target to hit every year. Lean years discourage entry, which tightens supply and raises scarcity revenue, which then brings back investment. [e6] In 2025, net revenue was $52.59 per kW-year for a CT and $82.96 per kW-year for a CC. Both were below the $140 per kW-year planning CONE set by the PUCT, and the IMM concluded that 2025 net revenues were not high enough to incentivize new investment. [e5] The IMM also warns that volatility itself is a cost: a developer wants a positive average return across low and high years, and if net revenue swings too much even high years may not produce new investment. [e35]

Net revenue has swung widely by year, per the IMM's reports (CONE ranges are the IMM's estimates for each year): [e26][e31][e33][e5]

- 2010: net revenues were insufficient to support new investment for any technology in any region, which the IMM put down to low gas prices and scarcity pricing deficiencies. [e26]
- 2020: net revenues did not reach the CONE level; CT CONE was estimated at $70 to $117 per kW-year. [e34]
- 2021: CT net revenue rose to almost $700 per kW-year because of Uri; without Uri it would have been $60 to $78. [e31]
- 2022: net revenue was above CONE even without Uri, mainly because of the ORDC changes made at the start of the year. [e32]
- 2023: CT net revenue was $224 to $257 and CC $228 to $272 per kW-year, against CONE of roughly $80 to $130. [e33]
- 2025: CT $52.59 and CC $82.96 per kW-year against the $140 planning CONE. [e5]

Shortage pricing was much less prevalent in 2025. Higher operating reserves meant the ORDC (since discontinued with RTC) added only $0.02 per MWh to real-time prices, the lowest annual value since the ORDC began in 2014. [e9][e15] In August 2026 the IMM told TAC that shortage pricing via the ASDCs had been minimal since RTC began in December 2025. [e37] The PNM threshold has been crossed only once, on February 16, 2021, during Winter Storm Uri. [e7]

The reliability standard is where the design is under most pressure. Rule 25.508 requires expected loss of load events of no more than one in ten years on average (0.1 LOLE). [e42] In December 2024 PUCT staff reported that E3's long-term equilibrium for the current energy-only design reached an LOLE of 2.67 days per year, while ERCOT's modelling of the forecasted 2026 system showed 0.51 days per year, which staff called the more likely 2026 outcome. [e43] The IMM says meeting the 25.508 standard through price signals alone would imply an extraordinarily high operational VOLL, and it has asked the Commission to clarify whether the standard is binding or aspirational. [e11]

Views differ on whether the market is short or long. A CRA report presented to the ERCOT Board in April 2026 found that ERCOT faces near-term energy scarcity risks because load growth is outpacing the industry's ability to build and interconnect new generation. [e47] The IMM, by contrast, argues that out-of-market and over-procured reserves suppress the shortage pricing the design depends on: in February 2026 it told the Board that programs pricing services outside the market (FFSS, ERS, RDR, forward capacity procurement) suppress price and that a market needs to experience and price shortages to attract investment. [e13][e36]

The Legislature has limited any move toward capacity credits: PURA caps the net cost of any such credit program at $1 billion a year, subject to adjustments, and says the PUCT is not required to adopt a capacity-credit program at all. [e14][e46] The IMM called the PCM a novel form of capacity market, settled after the fact on actual availability, and concluded it would raise ERCOT's capacity margin and customer costs while reducing shortage revenues. [e44] It also argued that an advantage of the energy-only market is that shortage revenue goes to the resources that actually reduce the risk of load loss. [e45]

## Timeline

- 2006: the PUCT adopted rules defining the parameters of an energy-only market, including a Scarcity Pricing Mechanism that raised the offer cap to $1,500/MWh on March 1, 2007 and $2,250/MWh on March 1, 2008. [e22]
- December 1, 2010: the nodal market began, after eleven months of zonal operation in 2010; the offer cap rose to $3,000/MWh shortly after. [e25][e22]
- September 12, 2013: the Commission directed ERCOT to implement the ORDC with VOLL at $9,000. [e27]
- Summer 2014: ORDC on-line and off-line reserve price adders added to the five-minute real-time market. [e28]
- February 16, 2021: PNM crossed three times CONE during Uri, the only time it has. [e7]
- After Uri: VOLL (equal to the SWCAP) fell from $9,000 to the $2,000 LCAP; on January 1, 2022 it returned to $5,000 and the minimum contingency level rose from 2,000 to 3,000 MW. [e29]
- 2022: the IMM says these ORDC changes lifted net revenues above CONE even without Uri. [e32][e12]
- 2024: the PUCT approved a $140 per kW-year planning CONE, leaving the $105 legacy CONE for the PNM threshold. [e30]
- December 2024: PUCT staff reported the E3 and IMM assessments of the PCM. [e43][e44]
- December 5, 2025: RTC go-live; the ORDC adder ended, ASDCs took over shortage pricing, and the real-time SWCAP went to $2,000. [e15][e16][e18]
- January 1, 2026: the PUCT's five-yearly review of the system-wide offer cap programs begins under 25.509(d). [e40]

## Key facts

- ERCOT has no capacity market; FERC regulates all RTOs/ISOs except ERCOT. [e2][e19]
- 2025 net revenue: CT $52.59/kW-yr, CC $82.96/kW-yr, against a $140/kW-yr planning CONE (IMM 2025 SOM). [e5]
- 2023 net revenue: CT $224-$257/kW-yr, CC $228-$272/kW-yr (IMM 2023 SOM). [e33]
- 2025 ORDC adder: $0.02/MWh, the lowest since the ORDC began in 2014; the ORDC adder was discontinued in December 2025 with RTC. [e9][e15]
- PNM threshold: three times the legacy $105 CONE = $315/kW-yr. Crossing it moves the cap to the LCAP for the rest of the year. [e7][e8][e30] After RTC go-live the Protocol table lists a $5,000 day-ahead and a $2,000 real-time cap. [e17][e18]
- The PNM threshold has been exceeded only once, on February 16, 2021 (Uri). [e7]
- Reliability standard frequency criterion: 0.1 LOLE; E3's energy-only equilibrium (December 2024): 2.67 days per year. [e42][e43]
- Any PUCT-required capacity or reliability credit program is capped at $1 billion a year in net cost, subject to adjustment. [e14]

## Say it like this

(Guidance) ERCOT does not pay for capacity. Generators earn their fixed costs back mostly in a few tight hours when shortage pricing kicks in, so investment depends on expected scarcity, not a guaranteed payment. That makes revenue lumpy: one soft year does not mean the design has failed, but it does fuel the debate over whether price signals alone can deliver the reliability standard.

(Guidance) If asked where the debate stands: the IMM defends shortage pricing and blames over-procured reserves and out-of-market programs for weak signals; ERCOT and its consultants stress near-term scarcity from load growth; the PUCT sits between them with a 0.1 LOLE standard and a $1 billion statutory cap on any capacity-credit program. [e36][e47][e42][e14]

## Common confusion

(Guidance) "Energy-only" does not mean only energy is sold. Ancillary service revenue is part of the investment signal. [e3] It also does not mean prices are uncapped: the offer cap and the PNM mechanism limit scarcity rent. [e7][e8] And low net revenue in a given year is not by itself proof of market failure. [e6]

(Guidance) There are two CONE numbers. The $140 per kW-year planning CONE is what the IMM compares net revenue with; the $105 legacy CONE still sets the $315 PNM threshold. [e30][e5]

## Questions

### How does a new peaker get paid in ERCOT without a capacity market?

From net revenue in the energy and ancillary service markets, which comes mainly from shortage pricing during tight hours. [e3][e4] Forward contracts help, but their value reflects expected real-time prices. [e3]

### Were 2025 revenues enough to justify building a new gas plant?

The IMM said no. CT net revenue was $52.59 per kW-year and CC net revenue was $82.96 per kW-year, both well below the $140 per kW-year planning CONE. [e5] The IMM also stressed that tighter years such as 2021 and 2023 can produce revenues well above CONE, so one year is not decisive. [e5][e6]

### Why can an energy-only market struggle to meet a 1-in-10 standard?

Because its investment revenue depends on the market actually going short. To reach a strict standard through prices alone, VOLL has to be extremely high. [e1][e10] In the IMM's 2010 framing, the PUCT rules fix how high shortage prices go, but whether shortages happen often enough to meet the reliability requirement is an empirical question. [e24]

### What happens if peaker net margin gets too high?

Per PUCT rule 25.509 and the IMM's 2025 report, once PNM passes three times CONE in a calendar year, the offer cap moves to the low cap for the rest of that year, and energy prices excluding congestion are held to the LCAP plus $1. [e7][e8][e38] Since RTC go-live the Protocol table lists a $5,000 day-ahead cap and a $2,000 real-time cap, so the real-time cap is already $2,000 before any PNM trigger. [e17][e18]

### Why does the IMM object to more reserves and out-of-market programs?

Because they take away the shortages that pay for investment. The IMM says excessive ancillary service procurement injects non-price-setting energy and lowers prices, and that programs pricing services outside the market suppress the signal of relative shortage. [e13][e36]

### What if the PUCT adopted a capacity-credit program like the PCM?

PURA would cap its net cost at $1 billion a year (adjustable for peak demand and inflation from a 2026 base). [e14] The IMM expected a program like the PCM to raise the capacity margin and customer costs while reducing shortage revenues. [e44]

### When did ERCOT's energy-only rules and nodal market start?

The PUCT adopted the energy-only rules in 2006, and the nodal market began on December 1, 2010, replacing the zonal market. [e22][e25]

## Scenarios

### A developer says ERCOT is "broken" because 2025 CT net revenue was far below CONE.

- Agree on the number: 2025 CT net revenue was $52.59 per kW-year against $140 per kW-year planning CONE. [e5]
- Push back on the conclusion: the IMM sees CONE as a long-run benchmark and expects lean years to be followed by tighter, higher-revenue ones; 2023 CT net revenue was $224 to $257 per kW-year. [e6][e33]
- Note the real risk: the IMM says the reliability standard is difficult to meet in an energy-only market through prices alone, and it has asked the PUCT to clarify how binding the standard is. [e11] It also warns that volatility can deter investment even in high years. [e35]

### PNM is approaching $315 per kW-year in August. What should a trader watch?

- If PNM crosses the threshold, the offer cap drops to the LCAP for the rest of the calendar year. [e38]
- Check which cap is actually binding: since RTC the real-time cap is already $2,000 while the day-ahead cap is $5,000 in the Protocol table. [e17][e18]

## Open items

- The saved sources do not explain how the 25.509 PNM trigger (whose text, effective 12/20/23, lists a single $5,000 HCAP) interacts with the separate day-ahead ($5,000) and real-time ($2,000) caps in the Protocol table after RTC.
- No saved source gives the current VOLL or ASDC parameters (the 2022 ORDC report said VOLL equalled the $5,000 SWCAP at that time). See the ordc and asdc topics.
- The IMM 2025 report says ERCOT's accelerated CONE study could produce a value above $200 per kW-year. No final value appears in the saved sources.
- The saved sources say the PUCT adopted energy-only rules in 2006 but do not explain why Texas chose an energy-only design rather than a capacity market.
- The date the offer cap rose from $3,000 to $9,000 is not in the saved sources.
- The outcome of the PUCT's PCM decision after the December 2024 staff recommendation is not covered here; see the pcm topic.
