---
id: ordc
name: ORDC (Operating Reserve Demand Curve)
aliases: [ORDC, Operating Reserve Demand Curve, ORDC adder, ORDC price adder]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: asdc
    type: contrasts-with
    note: When RTC went live, the ORDC price adder was replaced by a set of ASDCs. [e9]
  - to: rtc-b
    type: related
    note: Before RTC, scarcity was reflected through a process outside the optimization, and at RTC go-live the ORDC price adder was replaced by ASDCs. [e4][e9]
  - to: energy-only-market
    type: part-of
    note: In ERCOT's energy-only design, raising the value implied by the ORDC was the lever used to strengthen shortage revenues. [e7]
  - to: resource-adequacy
    type: affects
    note: The IMM says the value implied by the ORDC can be raised to strengthen economic signals when the market is not sustaining enough resources, and by 2025 the ORDC raised real-time energy prices by only $0.02 per MWh. [e7][e8]
  - to: offer-cap
    type: related
    note: The PUCT scarcity pricing rule still says the ORDC and RDPA keep applying for the rest of a year in which the cap drops to LCAP. [e12]
  - to: prc
    type: related
    note: The ORDC adder depended on the level of available operating reserves, and shortage pricing was computed outside the dispatch model. [e5]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Chapter I.D.1, ORDC (p. 7)"
    quote: "The ORDC reflects the relationship between operating reserves and the probability of load shed; as operating reserves decrease, the likelihood of involuntary load shed increases. The ORDC magnitude is scaled to the Value of Lost Load (VOLL)."
  - id: e2
    source: imm-som-2025
    locator: "Chapter I.D.1, ORDC (p. 8)"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e3
    source: imm-som-2025
    locator: "Chapter I, all-in price discussion (p. 2)"
    quote: "The Operating Reserve Demand Curve (ORDC) Adder, implemented in 2014 and discontinued in December 2025 with the introduction of RTC, reflects increasing reliability risks when reserves begin to run short; and"
  - id: e4
    source: ercot-rtc-overview
    locator: "Slide 9 (Fall 2024 education deck)"
    quote: "Today’s market is designed to reflect scarcity through a process that is outside of the optimization"
  - id: e5
    source: imm-som-2024
    locator: "Executive Summary, Shortage Pricing and Procurement Methodology for AS under RTC"
    quote: "The day-ahead market always procures the full volume of reserves defined by the AS Plan, and the real-time market treats these reserves as inaccessible unless they are manually released to the dispatch model. Shortage pricing is then determined by the ORDC outside of the dispatch model based on the level of available operating reserves."
  - id: e6
    source: imm-som-2024
    locator: "Chapter I.C.1, ORDC (p. 6)"
    quote: "The most recent change to the ORDC was implemented in November 2023, when ERCOT implemented a multi-step ORDC price floor, the chosen “bridge solution” to increase the incentive to build new dispatchable generation until a reliability program could be implemented. In 2024, this price floor was binding for 247 SCED intervals and resulted in $11 million in additional revenue."
  - id: e7
    source: imm-som-2024
    locator: "Resource Adequacy chapter, market-based approaches (p. 77)"
    quote: "If the market is not sustaining sufficient resources, the economic signals can be strengthened by increasing the aggregate value implied by the ORDC. The Commission implemented such changes at the start of 2022 and they have been extremely effective in increasing the markets’ shortage revenues."
  - id: e8
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance (p. iii)"
    quote: "For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014."
  - id: e9
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature."
  - id: e10
    source: imm-som-2025
    locator: "Chapter I.D.1, ORDC (p. 8)"
    quote: "In 2025, the ORDC was active for only 57 hours,4 just over one-third of the previous year's total and less than 8% of the annual average for 2021-2024, as shown in Figure 5."
  - id: e11
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC."
  - id: e12
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(D)"
    quote: "In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year."
  - id: e13
    source: puct-25-505
    locator: "16 TAC §25.505(e)"
    quote: "Operating Reserve Demand Curve (ORDC) report. ERCOT must publish, by November 1 of every even numbered year, a report analyzing the efficacy, utilization, related costs, and contribution of the ORDC to grid reliability in the ERCOT power region."
  - id: e14
    source: np-04
    locator: "Section 4.4.12(6)(a), Determination of Ancillary Service Demand Curves"
    quote: "For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below:"
  - id: e15
    source: np-04
    locator: "Section 4.4.12(6)(a), formula"
    quote: "(0.5*(1 − pnorm(RTOLCAP − 3000, 0.5 * μ, 0.707 * σ)) + 0.5*(1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ)))*(VOLL − min(System Lambda, 250))"
  - id: e16
    source: np-04
    locator: "Section 4.4.12, paragraph (5)"
    quote: "(5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
  - id: e17
    source: np-04
    locator: "Section 4.4.12(6)(a), variable definitions table"
    quote: "RTOLCAP MWh Real-Time On-Line Reserve Capacity – The Real-Time reserve capacity of On-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 RTOFFCAP MWh Real-Time Off-Line Reserve Capacity – The Real-Time reserve capacity of Off-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 μ None The mean value of the shifted LOLP distribution as published for Summer 2026 σ None The standard deviation of the shifted LOLP distribution as published for Summer 2026"
---

## Definition

The ORDC was ERCOT's pre-RTC way of pricing reserve scarcity. It linked the level of operating reserves to the probability of load shed and was scaled to the Value of Lost Load (VOLL). [e1] Until RTC went live on December 5, 2025, ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e2]

## How it works

This section describes the design before December 5, 2025. Day-ahead procurement covered the full AS Plan, and the real-time market could not use those reserves unless they were manually released to dispatch. The ORDC then set shortage pricing outside the dispatch model, based on how many operating reserves were available. [e5] ERCOT described this as reflecting scarcity "through a process that is outside of the optimization". [e4] RTC went live on December 5, 2025. [e2]

As reserves fall, the chance of load shed rises. The ORDC turned that probability, valued at VOLL, into a price adder. [e1][e2]

The curve was changed over time. The IMM reports that the Commission raised the value implied by the ORDC at the start of 2022, which greatly increased shortage revenues. [e7] In November 2023 ERCOT added a multi-step ORDC price floor as a "bridge solution" to encourage new dispatchable generation. [e6]

## ERCOT context

The ORDC adder started in 2014 and ended in December 2025 when RTC was introduced. [e3] Under RTC, the ORDC price adder was replaced by a set of ASDCs. [e9] The ORDC still shapes the new curves. The Aggregate ORDC (AORDC) used to build the ASDCs is a fixed curve made from the pricing outcomes the ORDC produced before RTC. [e11] The current protocols build the AORDC from historical SCED intervals by computing historical reserve pricing outcomes with a fixed expression and fitting a regression to them. [e14][e15]

In its final years the ORDC added almost nothing to prices. In 2025 it raised real-time energy prices by only about $0.02/MWh, the lowest annual value since 2014. [e8] It was active for only 57 hours in 2025. [e10]

Some PUCT rules still refer to the ORDC. §25.509 says that if the cap drops to LCAP, ERCOT keeps applying the ORDC and RDPA for the rest of the year. [e12] §25.505 still requires an ORDC report by November 1 of every even-numbered year. [e13]

## Formula

The current protocols (np-04 §4.4.12) compute "historical reserve pricing outcomes" for the AORDC regression with this expression. RTOLCAP is the real-time reserve capacity of on-line Resources, RTOFFCAP is the real-time reserve capacity of off-line Resources, and μ and σ are the mean and standard deviation of the shifted LOLP distribution. [e14][e15][e17]

`(0.5*(1 − pnorm(RTOLCAP − 3000, 0.5*μ, 0.707*σ)) + 0.5*(1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ))) * (VOLL − min(System Lambda, 250))` [e15]

## Key facts

- The ORDC adder was in place from 2014 until December 2025. [e3]
- 2025: the ORDC raised real-time energy prices by about $0.02/MWh and was active for 57 hours. [e8][e10]
- November 2023: a multi-step ORDC price floor was added. In 2024 it bound in 247 SCED intervals and added $11 million of revenue. [e6]
- Start of 2022: the Commission raised the value implied by the ORDC. [e7]
- Since RTC: the ORDC adder has been replaced by ASDCs, and the AORDC is based on the ORDC's historical pricing. [e9][e11]

## Say it like this

(Guidance) The ORDC was a price adder ERCOT put on top of energy prices when reserves got thin, scaled to the value of lost load. Since RTC+B it no longer exists as an adder, but its historical pricing outcomes live on in the aggregate curve (AORDC) that is split into the new Ancillary Service Demand Curves. [e1][e9][e11][e16]

## Common confusion

(Guidance) The ORDC and the RDPA were two separate adders. The ORDC priced scarce reserves, and the RDPA corrected for out-of-market reliability actions. RTC removed the ORDC but kept the RDPA in a new form. [e9] Also, "the ORDC is gone" does not mean its values are gone: the AORDC is a fixed curve formulated from the ORDC's pricing outcomes before RTC [e11], and it is disaggregated into the ASDCs for Reg-Up, RRS, ECRS and Non-Spin. [e16]

## Questions

### What was the ORDC trying to capture?

It priced the reliability value of reserves. As reserves fall, the probability of load shed rises, and the ORDC turned that probability, scaled to VOLL, into a price adder on energy and reserve prices. [e1][e2]

### How much did the ORDC matter in 2025?

Very little. In 2025 the ORDC was active for only 57 hours and raised average real-time energy prices by about $0.02/MWh. [e8][e10]

### Is the ORDC still in effect after RTC?

Not as a price adder. It was replaced by ASDCs. [e9] Its historical outcomes were used to formulate the Aggregate ORDC that is split into the ASDCs, and some PUCT rules still mention the ORDC. [e11][e16][e12][e13]

## Open items

- The pre-RTC ORDC formula (reserve price adder = LOLP × (VOLL − System Lambda), with on-line and off-line components, and the 2022 and November 2023 parameter changes) is not in the current protocols. The np-04 expression above is presented only as a way to reconstruct historical pricing for the AORDC. Its exact match to the retired ORDC formula is not stated.
- The 2025 IMM report gives the ORDC's 2025 impact as "only $0.02 per MWh" in the executive summary and "less than $0.02/MWh" in Chapter I. These are close but worded differently.
- Neither the IMM's 2024 report nor the saved sources give the specific parameters of the start-of-2022 Commission changes (for example, VOLL and the minimum contingency level at the time).
- §25.509 and §25.505 still refer to the ORDC after RTC replaced it. The saved sources do not show whether the PUCT has updated these rules or how the November 2026 even-year ORDC report requirement is being handled.
- The ERCOT 2024 Biennial ORDC report is cited by the IMM but is not saved as a source.
