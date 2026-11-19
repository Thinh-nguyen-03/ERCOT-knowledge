---
id: rtc-b
name: RTC+B (Real-Time Co-optimization + Batteries)
aliases: [RTC+B, RTC, RTCB, Real-Time Co-optimization, Real-Time Co-optimization plus Batteries]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: asdc
    type: composed-of
    note: Under RTC, scarcity pricing and the value of reserves come from individual Ancillary Service Demand Curves inside the dispatch. [e3][e16]
  - to: ordc
    type: replaced
    note: Under RTC, scarcity pricing comes from ASDCs instead of the ORDC. [e3][e16]
  - to: sced
    type: affects
    note: SCED now awards energy and Ancillary Services together about every five minutes. [e2]
  - to: energy-storage-resource
    type: affects
    note: The "+B" part made SCED track each ESR's State of Charge so that energy and AS awards are feasible, per ERCOT's pre-go-live battery overview; the Protocols now list State of Charge among the bases for AS awards. [e7][e17]
  - to: dam
    type: affects
    note: Day-ahead AS awards became financial positions with imbalances settled in real time, and virtual AS positions were added. [e5]
  - to: ruc
    type: affects
    note: RUC volumes moved sharply after go-live, down 80% in the first winter and then higher in summer 2026. [e13][e14]
  - to: sc-battery-strategy
    type: related
    note: SCED now accounts for each ESR's State of Charge when awarding energy and AS, which bears on battery offer strategy. [e7][e17]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, introduction (p. A-2)"
    quote: "Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market. Ancillary service awards from the day-ahead market represented physical obligations to provide reserves in real time, and the market withheld these reserves from the capacity available for real-time energy. With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e3
    source: ercot-rtc-overview
    locator: "Slide 14"
    quote: "Instead of using the ORDC, under RTC, scarcity pricing and the value of reserves is set by individual ASDCs"
  - id: e4
    source: ercot-rtc-overview
    locator: "Slides 12-13, LMP example"
    quote: "This means the LMP goes to $40/MWh ($30/MWh for the energy from Gen 1 plus the $10/MWh of additional Ancillary Service cost)"
  - id: e5
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (p. iv)"
    quote: "With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves."
  - id: e6
    source: ercot-rtc-overview
    locator: "Slide 21"
    quote: "The current Supplemental Ancillary Services Market (SASM) process will be eliminated with the implementation of RTC"
  - id: e7
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2)"
    quote: "SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements."
  - id: e8
    source: ercot-rtc-update-2025-12
    locator: "Slide 4, RTC+B Market Trial Progression, footnote"
    quote: "Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration."
  - id: e9
    source: ercot-rtc-update-2025-12
    locator: "Slide 7, System Operations Summary (first 48-hours)"
    quote: "SCED was able to award energy and procure Ancillary Services at or above plan level during all intervals over the first 48 hours post deployment. Minimum PRC Total was 7,272 MW on 12/6/25 around 7:40 am."
  - id: e10
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, introduction (p. A-2)"
    quote: "Our summary of RTC outcomes thus far is that it is operating largely as expected without major dysfunctions. New efficiencies are evident in the frequency of AS awards shifting among resources within an operating hour, the real-time market’s ability to go short on AS during shortage conditions, and the reduction in out-of-market commitments through RUC. Despite these apparent improvements, we have observed issues that need to be resolved, particularly in the formulation of the ASDCs and duration constraints for AS, NSRS in particular."
  - id: e11
    source: imm-som-2025
    locator: "Appendix, B. Convergence between DAM and RT (p. A-5)"
    quote: "Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices."
  - id: e12
    source: ercot-summer-2026-review
    locator: "Slide 21, Energy Storage Capacity Offered in Real-Time Market, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e13
    source: imm-som-2025
    locator: "Appendix, F. Impact on RUC (p. A-10)"
    quote: "Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live."
  - id: e15
    source: ercot-summer-2026-review
    locator: "Slide 21, key takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e14
    source: ercot-summer-2026-review
    locator: "Slide 20, RUC Effective Resource-Hours"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e16
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, G. RDPA"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs."
  - id: e17
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: "Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment."
---

## Definition

RTC+B is the ERCOT market upgrade under which the real-time dispatch co-optimizes energy and ancillary services, instead of only the day-ahead market doing so as it did before December 5, 2025. [e1] SCED now manages energy, Ancillary Services, power balance and congestion together, setting Base Points, AS awards, LMPs and Real-Time MCPCs about every five minutes. [e2]

## How it works

Before RTC, day-ahead AS awards were physical obligations, and the real-time market held that reserved capacity back from energy dispatch. Under RTC, the real-time dispatch co-optimizes energy and ancillary services, making economic trade-offs between them. [e1]

Scarcity pricing moved inside the optimization. ERCOT's July 2025 overview, written before go-live, said that under RTC scarcity pricing and the value of reserves would be set by individual Ancillary Service Demand Curves (ASDCs) instead of the ORDC. [e3] After go-live the IMM reported that the ORDC price adder was replaced by a set of ASDCs, and the Protocols in force base AS awards on Resource capability and the ASDCs. [e16][e17] The same pre-go-live ERCOT deck says the cost of AS is factored directly into LMPs. In its example, reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP becomes $40/MWh: $30/MWh of energy plus $10/MWh of additional AS cost. [e4]

The day-ahead market still clears energy and AS, but day-ahead AS awards are now financial positions, and ERCOT settles imbalances on them in real time. Virtual AS positions were added as hedges on the real-time price of reserves. [e5] ERCOT's RTC overview said the Supplemental Ancillary Services Market (SASM) would be eliminated with the implementation of RTC. [e6]

The "+B" part changes how batteries are handled. ERCOT's July 2025 battery overview, written before go-live, said SCED incorporates State of Charge (SOC) accounting so that an ESR's energy and AS awards can be sustained for their duration requirements. [e7] The Protocols in force list State of Charge and SOC limits among the Resource capabilities that AS awards are based on. [e17]

## ERCOT context

RTC+B went live with 12/5/2025 as the first Operating Day, after the software migration on 12/4/2025. [e8] Over the first 48 hours ERCOT reported that SCED awarded energy and procured AS at or above plan in every interval, with minimum PRC of 7,272 MW on 12/6/25. [e9]

The IMM's review of RTC outcomes so far found RTC "operating largely as expected". It saw gains in AS awards moving between resources within the hour, the market's ability to go short on AS, and fewer RUC commitments. It also flagged problems with how the ASDCs are built and with AS duration constraints, especially for Non-Spin (NSRS). [e10]

RUC results changed sharply from one period to the next. The IMM found RUC commitments fell 80% after go-live compared with the same period a year before (December 5, 2024 through February 2025). [e13] In summer 2026, however, ERCOT reported RUC activity well above the two previous summers, mostly to make sure enough AS quantity was available. [e14]

## Key facts

- First Operating Day: 12/5/2025; software migration on 12/4/2025. [e8]
- Real-time dispatch runs about every five minutes and clears energy and AS together. [e2]
- Virtual AS offers were not introduced to the day-ahead market until December 6; the IMM says physical-resource offers drove the elevated day-ahead prices on December 5, 2025. [e11]
- ERCOT noted that the SWCAP was reduced from $5,000/MWh to $2,000/MWh after RTC go-live on 12/5/2025, and calls the $2,000 the lower Real-Time SWCAP introduced with RTC+B. [e12][e15]
- RUC commitments fell 80% after go-live compared with the same period a year before (December 5, 2024 through February 2025 baseline). [e13]
- Minimum PRC in the first 48 hours was 7,272 MW (12/6/25). [e9]

## Timeline

- 12/4/2025: RTC+B software migration. 12/5/2025: first Operating Day. [e8]
- December 6, 2025: virtual AS offers first allowed in the day-ahead market. [e11]
- After go-live: IMM finds RTC operating largely as expected; RUC commitments down 80% against the year-earlier period. [e10][e13]
- Summer 2026: ERCOT reports RUC activity higher than the two previous summers, mostly for AS needs. [e14]

## Say it like this

(Guidance) Since RTC+B went live, ERCOT's real-time market picks who provides energy and who holds reserves every five minutes, rather than locking reserves in the day before. Scarcity now shows up as AS demand-curve prices inside the dispatch rather than as a separate ORDC adder on top of energy prices.

## Common confusion

(Guidance) RTC did not make the day-ahead market go away. The DAM still clears AS, but those awards are now financial and settle against real-time AS prices. [e5] Also, "RTC" and "+B" are two pieces of one project: co-optimization is the pricing and dispatch change, and the battery part is SOC accounting for ESRs inside SCED, as ERCOT's pre-go-live battery overview described it. [e7]

## Questions

### What does "co-optimize" mean and what changed on December 5, 2025?

Co-optimization means scheduling energy and reserves at the same time and trading one off against the other. Before December 5, 2025, ERCOT did this only in the day-ahead market. Since then the real-time dispatch does it too. [e1]

### Why can LMPs be higher under RTC even when energy offers are unchanged?

ERCOT's education deck (July 2025, before go-live) says that under RTC the cost of AS is factored directly into LMPs. In its example, reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP goes to $40/MWh: $30/MWh of energy plus $10/MWh of additional AS cost. [e4]

### What happens to a day-ahead AS award in real time now?

It is a financial position. ERCOT settles imbalances on those positions in real time. [e5]

### How has RTC affected RUC?

It depends on which period you look at. The IMM found RUC commitments fell 80% in the first winter after go-live. [e13] ERCOT's summer 2026 review found RUC activity higher than in the two previous summers, mostly to secure AS quantities. [e14]

## Scenarios

### A trader sees a real-time price spike with no ORDC adder posted. Is something broken?

- No. The ORDC price adder was replaced by a set of ASDCs with RTC, and ERCOT's pre-go-live deck said scarcity pricing and the value of reserves would be set by the ASDCs, with the cost of AS factored into LMPs. [e16][e3][e4]
- Look at the real-time AS prices and any AS shortfalls in that interval to see what drove the spike. [e2]

## Open items

- ERCOT's protocol-violation filings and the defect fixes after go-live (five protocol violations were flagged in December 2025) are not described in detail in the saved sources.
- The IMM's executive summary says RTC was "a major market upgrade that began in January 2019". The context suggests this is when the project started, not when it went live; the sources do not say so outright.
- No saved source gives a full-year (2026) quantified estimate of RTC's savings. The only savings figures are from the IMM's 2018 study of 2017 data, cited in ERCOT's education deck.
- The sources do not explain why RUC activity rose in summer 2026 after falling in the first winter (for example, ERCOT operating policy versus system conditions), beyond ERCOT's statement that it was mostly for AS quantities.
- The summer 2026 review says the real-time SWCAP fell to $2,000/MWh with RTC. 16 TAC §25.509 (effective 12/20/23) still sets HCAP at $5,000. See the offer-cap topic for how the two fit together.
