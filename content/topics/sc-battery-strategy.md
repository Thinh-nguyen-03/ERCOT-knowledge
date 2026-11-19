---
id: sc-battery-strategy
name: "Scenario: Bidding a Battery After RTC+B"
aliases: [battery strategy after RTC+B, bidding a battery, ESR bidding strategy, storage optimization ERCOT]
kind: scenario
domain: cases
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: rtc-b
    type: used-in
    note: RTC+B's first Operating Day was 12/5/2025, and SCED now limits ESR awards by SOC, ramp rates and duration requirements. [e15][e12]
  - to: energy-storage-resource
    type: used-in
    note: SCED now tracks each ESR's state of charge inside the optimization. [e1]
  - to: battery-revenue-stack
    type: related
    note: ESR revenue has shifted from AS toward energy arbitrage. [e7]
  - to: ancillary-services
    type: related
    note: In 2025 ESRs provided on average 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
  - to: asdc
    type: affects
    note: Under RTC, sloped ASDCs define shortage pricing in the day-ahead and real-time markets. [e24]
  - to: dam
    type: related
    note: The DAM does not model SOC, so an ESR can oversell its capability there. [e2]
  - to: offer-cap
    type: related
    note: ERCOT says the share of ESR capacity offered within $100/MWh of the SWCAP rose slightly in summer 2026, largely due to the lower $2,000/MWh Real-Time SWCAP. [e11]
  - to: net-load
    type: affects
    note: Evening net peaks drained ESR state of charge throughout summer 2026. [e17]
  - to: ruc
    type: related
    note: RUC uses the SOC that QSEs report in their COPs, and ESRs are not seen as OFF and so are not available to be RUCed. [e19][e21]
evidence:
  - id: e1
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 2"
    quote: "SCED incorporates SOC accounting within the optimization. This is to ensure that awards to ESRs are feasible and that there is sufficient energy to sustain the MW awards for energy (Base Points) and Ancillary Services for their respective SCED duration requirements. SCED will not violate the telemetered minimum and maximum SOC values for ESRs."
  - id: e2
    source: ercot-rtcb-battery
    locator: "Slide 23, ESR Participation in the DAM with the RTC+B Project, item 2"
    quote: "State of Charge (SOC) is not considered in the clearing for Energy and Ancillary Services in the DAM. (If not careful, a QSE representing ESRs could “oversell” its capability in DAM."
  - id: e3
    source: imm-som-2025
    locator: "page 161 (OCR), Appendix, Table A1: Duration Requirements for Energy and AS in RTM"
    quote: "Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours"
  - id: e4
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, after Table A1 (p. A-3)"
    quote: "At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to increase to reflect the higher risk and lower benefit of selling AS there."
  - id: e5
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (p. iv)"
    quote: "With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e6
    source: imm-som-2025
    locator: "Chapter II, key insights on ESRs"
    quote: "Annual revenue per unit of ESR capacity declined by 37% in 2025 as revenues from providing AS fell by the same amount."
  - id: e7
    source: imm-som-2025
    locator: "Executive Summary"
    quote: "The increase in ESR capacity corresponds with a shift toward ESRs earning more of their revenue from energy arbitrage than from providing ancillary services."
  - id: e8
    source: imm-som-2025
    locator: "Chapter III.A.2, Ancillary Services Prices"
    quote: "Prices fell across all AS products from 2024 to 2025. This decrease was partly caused by the continued growth in ESR capacity and the increase in AS provision by ESRs, which we discuss later in this chapter."
  - id: e9
    source: imm-som-2025
    locator: "Chapter II.E.1, ESR Fundamentals"
    quote: "Because the market software does not optimize intertemporally and instead optimizes only one five-minute interval at a time, ESR owners must offer strategically to manage their SOC and maximize value. These strategies can introduce market inefficiencies."
  - id: e10
    source: imm-som-2025
    locator: "Chapter II.E.4, ESR Aggregate Offers"
    quote: "ESRs still submit a substantial percentage of offers priced at the System-Wide Offer Cap (SWCAP), 18% in 2025 compared to 32% in 2024. This tendency can be partially attributed to SOC management. ESRs must maintain sufficient SOC to satisfy their AS obligations, even if they use some capacity for energy arbitrage."
  - id: e11
    source: ercot-summer-2026-review
    locator: "Slide 21, Energy Storage Capacity Offered in Real-Time Market, Key Takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e12
    source: ercot-rtcb-battery
    locator: "Slide 24, Real-Time Market With the Implementation of the RTC+B Project (1 of 2), item 3"
    quote: "The awards for each Resource are limited based on the Resource’s qualification, telemetered physical capabilities, SoC information, ramp rates, and duration requirements for each Ancillary Service type. This is different from today where it is the QSE’s responsibility to ensure sufficient SoC is reserved to cover their Ancillary Service Responsibility and duration requirements. Multiple Ancillary Service types and energy can be awarded to an ESR in a SCED execution."
  - id: e13
    source: ercot-rtcb-battery
    locator: "Slide 21, Telemetry with the Implementation of the RTC+B Project (2 of 2), item 5"
    quote: "With the implementation of NPRR 1014, the Base Point Deviation (BPD) calculation from the past is replaced with the Set Point Deviation (SPD) calculation and the tolerances for ESRs are smaller (3% or 3 MW)."
  - id: e14
    source: ercot-rtcb-battery
    locator: "Slide 19, Single Model ESR: Energy Bid/Offer Curve (EB/OC)"
    quote: "Single EB/OC curve shall be monotonically nondecreasing from maximum charging MW (negative) to maximum discharging MW."
  - id: e15
    source: ercot-rtc-update-2025-12
    locator: "Slide 4, RTC+B Market Trial Progression, footnote"
    quote: "Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration."
  - id: e16
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e17
    source: ercot-summer-2026-review
    locator: "Key Takeaways slide"
    quote: "Energy Storage Resources (ESRs) were helpful to serve record net loads, and as a result, ESR State of Charge (SOC) exhaustion in the evenings was a pattern throughout the summer."
  - id: e18
    source: imm-som-2025
    locator: "Chapter III.C.1, ECRS and NSRS Provision by ESRs"
    quote: "The ECRS duration requirement was two hours until RTC was implemented, at which point it to one hour according to NPRR 1282."
  - id: e19
    source: ercot-rtcb-battery
    locator: "Slides 26-27, RUC with Implementation of RTC+B Project, items 2 and 4"
    quote: "The RUC software will use the Hour Beginning SoC (HB SoC) provided by the QSEs in their COPS for each ESR to appropriately limit the possible use/capability of each ESR."
  - id: e20
    source: imm-som-2025
    locator: "Energy Storage Resources chapter, ESR revenue and arbitrage"
    quote: "As solar generation has surged during the midday hours, real-time prices have dropped correspondingly, sometimes even to negative prices. This has allowed batteries to charge inexpensively or even get paid to consume energy that would otherwise be curtailed."
  - id: e21
    source: ercot-rtcb-battery
    locator: "Slide 26, RUC with Implementation of RTC+B Project, item 2"
    quote: "Similar to today, ESRs will NOT be seen as OFF and are therefore NOT available to be RUCed."
  - id: e22
    source: imm-som-2025
    locator: "Chapter II.E.1, ESR Fundamentals"
    quote: "The National Renewable Energy Lab (NREL) cites a roundtrip efficiency of 85% in its 2024 Annual Technology Baseline."
  - id: e23
    source: imm-som-2025
    locator: "Market Operations chapter, 2. COP State of Charge Error"
    quote: "Figure 52 indicates that, on average, aggregate COP SOC is overestimated by approximately 874 MWh, and the magnitude of the overestimate has increased over time. The variance of COP SOC error has also increased, corresponding to the large increase in installed ESR capacity. This COP SOC inaccuracy has been suggested as one factor leading to the large increase in commitments through RUC from 2024 to 2025."
  - id: e24
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 48)"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e25
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(B)"
    quote: "The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
---

## Definition

This scenario is about how a battery owner chooses between energy and ancillary services, and how to manage state of charge, now that RTC+B (first Operating Day 12/5/2025) has SCED track each ESR's SOC so that its energy and AS awards can actually be sustained. [e15][e1]

## How it works

The physical side moved into SCED. SCED now does SOC accounting and will not breach an ESR's telemetered minimum and maximum SOC. [e1] Awards are limited by qualification, telemetry, SOC, ramp rates and AS duration requirements, and one SCED run can award several AS types plus energy to the same ESR. Before RTC+B, the QSE had to hold back enough SOC itself. [e12] The real-time duration requirements are 5 minutes for energy, 30 minutes for RegUp and RRS, 1 hour for ECRS and 4 hours for NSRS. [e3] The ECRS requirement fell from two hours to one under NPRR 1282. [e18]

The financial side is still yours. The DAM does not consider SOC when it clears energy and AS, so a QSE can oversell an ESR day-ahead. [e2] Day-ahead energy and AS awards are financial positions, and imbalances settle at real-time prices. [e5] Because RTC lets AS providers sell straight into real time, the IMM expected ESR AS offer prices in the DAM to increase to reflect higher risk and lower benefit. [e4]

Offers still have to manage time. SCED optimizes one five-minute interval at a time, so ESR owners must offer strategically to save SOC for higher-value intervals. [e9] Each ESR submits a single bid/offer curve that must be monotonically nondecreasing from maximum charging MW to maximum discharging MW. [e14] Performance is checked more tightly: Set Point Deviation tolerances for ESRs are 3% or 3 MW. [e13]

## Key facts

- RTC+B first Operating Day: 12/5/2025. [e15]
- Real-time duration requirements: energy 5 minutes, RegUp 30 minutes, RRS 30 minutes, ECRS 1 hour, NSRS 4 hours. [e3]
- ESR revenue per unit of capacity fell 37% in 2025 as AS revenue fell by the same amount. [e6]
- In 2025 ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS and 24% of NSRS. [e16]
- 18% of ESR offers were at the SWCAP in 2025, down from 32% in 2024, partly to protect SOC. [e10]
- The Real-Time SWCAP is $2,000/MWh after RTC+B (per ERCOT; the PUCT rule text still states a $5,000 HCAP), and more ESR capacity is offered within $100/MWh of it. [e11][e25]

## Scenarios

### You run a 100 MW / 200 MWh battery in ERCOT. How do you bid it now that RTC+B is live?

- Start with where the money is. AS prices fell across all products in 2025, partly because of ESR growth, and ESR revenue has shifted toward energy arbitrage. [e8][e7]
- Charge when solar pushes midday prices low or negative; discharge into the evening ramp. [e20]
- Plan for the evening net peak. In summer 2026 ESR SOC exhaustion in the evenings was a pattern throughout the summer, so SOC is scarce in the late evening. [e17]
- Let SCED handle feasibility in real time: it will only award energy and AS that your SOC can sustain for each product's duration. [e1][e12]
- Match products to duration. At 100 MW, a 1-hour ECRS duration needs about 100 MWh, while a 4-hour NSRS duration would need about 400 MWh, more than the 200 MWh battery holds. [e3]
- Be careful day-ahead. The DAM ignores SOC, so selling more than you can deliver leaves you buying back at real-time prices. [e2][e5]
- Consider skipping DAM AS sales. RTC lets AS providers sell AS directly into real time, and the IMM expected ESR day-ahead AS offer prices to increase to reflect the higher risk and lower benefit of selling AS there. [e4]
- Shape the offer curve. SCED looks one interval ahead only, so price discharge high enough to keep energy for the peak; remember the Real-Time SWCAP is now $2,000/MWh. [e9][e11]
- Keep the COP SOC accurate. RUC uses it to limit what each ESR can do, and the IMM reports aggregate COP SOC overestimated by about 874 MWh on average, which has been suggested as one factor in the jump in RUC commitments from 2024 to 2025. [e19][e23]
- Suppose (illustrative): you charge 200 MWh at $5/MWh and, using the 85% round-trip efficiency the IMM cites from NREL, discharge about 170 MWh at $120/MWh. [e22] The spread earns about $20,400 minus $1,000 of charging cost, roughly $19,400 for the day, compared with whatever AS would have paid for the same capacity.

## Questions

### What is the single biggest change for batteries in RTC+B?

SCED now tracks SOC and sizes awards so they can be sustained, instead of the QSE having to hold back SOC for its AS responsibility. [e1][e12]

### Why might a battery still offer near the cap?

To protect SOC for later intervals and AS obligations. The IMM ties SWCAP-priced offers partly to SOC management, and ERCOT links the rise in offers near the cap in 2026 to the lower $2,000/MWh cap. [e10][e11]

### Can ERCOT RUC a battery?

No. ESRs are not seen as off, so they are not available to be RUCed. [e21] RUC instead uses the hour-beginning SOC the QSE reports in its COP to limit what each ESR can do. [e19]

### Will AS still pay for storage?

Revenue per unit of capacity fell 37% in 2025 as AS revenue fell, and ESRs are moving toward arbitrage. [e6][e7]

## Say it like this

(Guidance) After RTC+B, ERCOT's dispatch makes sure a battery's awards fit its state of charge, so my job is the economics: decide day by day how much energy to save for the evening peak and how much capacity to sell as reserves. I avoid overselling in the day-ahead market, because it ignores state of charge and I would have to buy back any shortfall at real-time prices.

## Common confusion

(Guidance) RTC+B does not make SOC management disappear. SCED stops infeasible awards in each interval, but it does not plan across intervals, so saving energy for later is still the owner's job. [e1][e9] Also, the DAM still ignores SOC. [e2]

## Open items

- The sources do not give a full post-RTC (2026) ESR revenue split between energy and AS; the 37% decline and shift to arbitrage are 2025 figures.
- The 85% round-trip efficiency is an NREL figure quoted by the IMM, not an ERCOT fleet measurement.
- Deeper pass: the RUC capacity-short calculation for ESRs under RTC+B (NPRR 1236) is not covered here.
- Deeper pass: NPRR 1309 would cut the NSRS duration to two hours when DRRS is implemented; timing is not settled in the sources.
- No source describes a recommended split of a battery between DAM and real-time AS sales.
