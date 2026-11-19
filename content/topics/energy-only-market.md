---
id: energy-only-market
name: Energy-Only Market Design
aliases: [energy-only market, energy only market, EOM, no capacity market]
kind: concept
domain: structure
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: ordc
    type: composed-of
    note: Until RTC went live on 5 December 2025 the shortage pricing in ERCOT came from operating reserve demand curves; with RTC, ancillary service demand curves define shortage pricing. [e12][e15][e16]
  - to: offer-cap
    type: related
    note: Under PUCT rule 25.509 the offer cap stays at the HCAP until peaker net margin passes three times CONE, then drops to the low cap; the Protocol table now lists a $5,000 day-ahead and a $2,000 real-time cap. [e8][e7][e17]
  - to: resource-adequacy
    type: related
    note: The IMM says meeting the 25.508 reliability standard through price signals alone would require an extraordinarily high VOLL. [e11]
  - to: pcm
    type: contrasts-with
    note: PURA limits any capacity-style credit program the PUCT might impose, including a $1 billion annual net cost cap. [e14]
  - to: ancillary-services
    type: affects
    note: The IMM warns that over-procuring ancillary services suppresses the shortage pricing an energy-only design relies on. [e13]
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
---

## Definition

An energy-only market relies mainly on expected shortage revenue in the energy and ancillary service markets to attract investment in new generation, with no separate capacity payment. [e1] ERCOT uses this design. It does not have a capacity market. [e2]

## How it works

Generators fund their fixed and capital costs from net revenue, which is what remains of energy and ancillary service revenue after short-run operating costs. In ERCOT, those net revenues are the main economic signal for building and retiring plants. Day-ahead and bilateral forward revenue ultimately reflects expected real-time prices. [e3]

The core of the design is shortage pricing. When supply is tight, prices rise to reflect the higher value of available generation, and those spikes are how generators recover fixed costs. [e4] In ERCOT, before RTC went live in December 2025, that shortage pricing came from operating reserve demand curves, which set prices when the market lacked enough resources to meet its full energy and ancillary service requirements. If too few resources were being sustained, the signal could be strengthened by raising the value the ORDC implied. [e12][e15] The ORDC adder was discontinued in December 2025 with RTC, and the IMM says a set of sloped ancillary service demand curves now defines shortage pricing in the day-ahead and real-time markets. [e15][e16]

The design has a built-in tension. To produce investment revenue, the market has to go short on capacity, so energy-only markets can struggle to meet a 1-in-10 reliability standard. [e1] The IMM says meeting such a standard through shortage prices alone needs a very high value of lost load (VOLL), and that this is why most RTOs have adopted capacity constructs. [e10]

There is also a brake on excess scarcity rent. The system-wide offer cap starts each year at the high cap (HCAP) and stays there until peaker net margin (PNM) passes three times CONE. [e8] The IMM puts the threshold at $315 per kW-year. Crossing it cuts the cap from $5,000 to $2,000 per MWh for the rest of that year, as the IMM describes it. [e7] That description does not mention the RTC split: the Protocol parameter table now lists the day-ahead cap at $5,000 and the real-time cap at $2,000 per MWh, and ERCOT says the SWCAP was reduced to $2,000 from $5,000 after RTC go-live on 12/5/2025. [e17][e18]

## ERCOT context

The IMM treats CONE as a long-run benchmark, not a target to hit every year. Lean years discourage entry, which tightens supply and raises scarcity revenue, which then brings back investment. [e6] In 2025, net revenue was $52.59 per kW-year for a CT and $82.96 per kW-year for a CC. Both were below the $140 per kW-year planning CONE set by the PUCT, and the IMM concluded that 2025 net revenues were not high enough to incentivize new investment. [e5]

Shortage pricing was much less prevalent in 2025. Higher operating reserves meant the ORDC (since discontinued with RTC) added only $0.02 per MWh to real-time prices, the lowest annual value since the ORDC began in 2014. [e9][e15] The PNM threshold has been crossed only once, on February 16, 2021, during Winter Storm Uri. [e7]

The IMM raises the question of whether the energy-only design can meet the PUCT's reliability standard. It says meeting the 25.508 standard through price signals alone would imply an extraordinarily high operational VOLL. It has asked the Commission to clarify whether the standard is binding or aspirational. [e11] The IMM also argues that procuring too many ancillary services injects non-price-setting energy and undermines the shortage pricing the design depends on. [e13] The Legislature has limited any move toward capacity credits: PURA caps the net cost of any such credit program at $1 billion a year, subject to adjustments. [e14]

## Key facts

- ERCOT has no capacity market. [e2]
- 2025 net revenue: CT $52.59/kW-yr, CC $82.96/kW-yr, against a $140/kW-yr planning CONE (IMM 2025 SOM). [e5]
- 2025 ORDC adder: $0.02/MWh, the lowest since the ORDC began in 2014; the ORDC adder was discontinued in December 2025 with RTC. [e9][e15]
- PNM threshold: three times CONE ($315/kW-yr, per the IMM). Crossing it moves the cap from $5,000 to $2,000/MWh for the rest of the year, per the IMM. [e7][e8] After RTC go-live the Protocol table lists a $5,000 day-ahead and a $2,000 real-time cap. [e17][e18]
- The PNM threshold has been exceeded only once, on February 16, 2021 (Uri). [e7]
- ORDC changes the Commission made at the start of 2022 sharply increased shortage revenues, per the IMM's 2024 report (the ORDC adder has since been replaced by ASDCs). [e12][e15][e16]
- Any PUCT-required capacity or reliability credit program is capped at $1 billion a year in net cost, subject to adjustment. [e14]

## Formula

Net revenue = total potential revenue from energy and ancillary services minus variable production costs. Investors compare it against CONE over the life of the plant, not year by year. [e3][e6]

## Say it like this

(Guidance) ERCOT does not pay for capacity. Generators earn their fixed costs back mostly in a few tight hours when shortage pricing kicks in, so investment depends on expected scarcity, not a guaranteed payment. That makes revenue lumpy: one soft year does not mean the design has failed, but it does fuel the debate over whether price signals alone can deliver the reliability standard.

## Common confusion

(Guidance) "Energy-only" does not mean only energy is sold. Ancillary service revenue is part of the investment signal. [e3] It also does not mean prices are uncapped: the offer cap and the PNM mechanism limit scarcity rent. [e7][e8] And low net revenue in a given year is not by itself proof of market failure. [e6]

## Questions

### How does a new peaker get paid in ERCOT without a capacity market?

From net revenue in the energy and ancillary service markets, which comes mainly from shortage pricing during tight hours. [e3][e4] Forward contracts help, but their value reflects expected real-time prices. [e3]

### Were 2025 revenues enough to justify building a new gas plant?

The IMM said no. CT net revenue was $52.59 per kW-year and CC net revenue was $82.96 per kW-year, both well below the $140 per kW-year planning CONE. [e5] The IMM also stressed that tighter years such as 2021 and 2023 can produce revenues well above CONE, so one year is not decisive. [e5][e6]

### Why can an energy-only market struggle to meet a 1-in-10 standard?

Because its investment revenue depends on the market actually going short. To reach a strict standard through prices alone, VOLL has to be extremely high. [e1][e10]

### What happens if peaker net margin gets too high?

Per PUCT rule 25.509 and the IMM's 2025 report, once PNM passes three times CONE in a calendar year, the offer cap moves from the $5,000 high cap to the $2,000 low cap for the rest of that year. [e7][e8] Since RTC go-live the Protocol table lists a $5,000 day-ahead cap and a $2,000 real-time cap, so the real-time cap is already $2,000 before any PNM trigger. [e17][e18]

## Scenarios

### A developer says ERCOT is "broken" because 2025 CT net revenue was far below CONE.

- Agree on the number: 2025 CT net revenue was $52.59 per kW-year against $140 per kW-year planning CONE. [e5]
- Push back on the conclusion: the IMM sees CONE as a long-run benchmark and expects lean years to be followed by tighter, higher-revenue ones. [e6]
- Note the real risk: the reliability standard may be hard to meet through prices alone, and the PUCT has been asked to clarify how binding it is. [e11]

## Open items

- The PNM-trigger description (cap falls from $5,000 to $2,000) comes from the PUCT rule and the IMM's 2025 report; the saved sources do not explain how the trigger interacts with the separate day-ahead and real-time caps listed in the Protocol table after RTC.
- No saved source gives the current VOLL or ORDC parameters. See the ordc topic.
- The IMM 2025 report says ERCOT's accelerated CONE study could produce a value above $200 per kW-year. No final value appears in the saved sources.
- No saved source explains the historical reasons ERCOT chose an energy-only design.
