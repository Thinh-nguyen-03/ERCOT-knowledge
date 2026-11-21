---
id: ordc
name: ORDC (Operating Reserve Demand Curve)
aliases: [ORDC, Operating Reserve Demand Curve, ORDC adder, ORDC price adder]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: peaker-net-margin
    type: affects
    note: ERCOT's 2024 ORDC report puts the On-Line reserve adder's share of PNM accumulation at 27.24% in 2022, falling to 1.99% for January-September 2024. [e33]
  - to: load-forecasting
    type: related
    note: The ORDC's loss-of-load probability came from the gap between hour-ahead forecast reserves and real-time reserves, which ERCOT attributes to net load forecast error and other factors. [e21][e22]
  - to: ecrs
    type: related
    note: ERCOT's 2024 report says ECRS, launched June 10, 2023, shifted reserves on-line and helped reduce the frequency and size of ORDC adders. [e34]
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
  - id: e18
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2, Initial ERCOT Implementation"
    quote: "ERCOT's initial ORDC implementation introduced separate price adders for On-Line and Off-Line reserve categories to the five-minute Real-Time Market (RTM) in summer 2014. The Real-Time OnLine Reserve Price Adder (RTORPA) is associated with Real-Time On-Line Capacity (RTOLCAP), which encompasses all reserves that can be made available to the system within 30 minutes. The Real-Time Off-Line Reserve Price Adder (RTOFFPA) is associated with Real-Time Off-Line Capacity (RTOFFCAP), which refers to reserves that require between 30 minutes and one hour to be made available."
  - id: e19
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2"
    quote: "Both adders are calculated in terms of VOLL and the probability of reserves falling below the minimum contingency level (PBMCL), where VOLL is equal to the System-Wide Offer Cap (SWCAP), and PBMCL is derived from LOLP and the Minimum Contingency Level (MCL)."
  - id: e20
    source: ercot-ordc-methodology-2016
    locator: "ORDC Methodology OBD (Board item, June 2016), Attachment A, Section 2, Methodology for Implementing ORDC"
    quote: "For each execution of SCED, the System Lambda of the power balance constraint will be determined and the ORDC will be constructed as probability of reserves falling below the minimum contingency level (PBMCL) multiplied by the difference between Value of Lost Load (VOLL) and System Lambda. This approach is needed with the current rules in order to ensure that power balance is given the highest priority and can result in a reserve price that is near zero with an energy price near SWCAP under scarcity conditions."
  - id: e21
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2 (PBMCL)"
    quote: "PBMCL is a shifted version of ERCOT's empirically-determined LOLP normal distribution. LOLP, which represents the probability of a Real-Time reserve shortfall, is determined by comparing the Hour-Ahead forecasted level of reserves to the level of reserves realized in Real-Time."
  - id: e22
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.1, ORDC Theory"
    quote: "Due to net load forecast error and other factors, there is uncertainty in the level of operating reserves that will be available in the near-term operational timeframe of the next 30 minutes to one hour."
  - id: e23
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2"
    quote: "The extra term is calculated using a shortened PBMCL curve that captures reserve uncertainty over the first half of the upcoming operating hour, with Mu scaled by one-half and Sigma scaled by 0.707."
  - id: e24
    source: ercot-ordc-methodology-2016
    locator: "ORDC Methodology OBD (2016), Attachment A, Section 2.3, Determination of Price Adders"
    quote: "Where v represents the net value of Load curtailment and is calculated as the VOLL minus the SCED System Lambda. System Lambda is subtracted from VOLL to reflect the scarcity value of the marginal dispatch capacity and to ensure that the final cost of energy does not go above the VOLL."
  - id: e25
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2"
    quote: "First, Protocols limit the sum of System Lambda and all price adders to SWCAP. Thus, RTORPA can only reach SWCAP if System Lambda is zero."
  - id: e26
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.3, Subsequent ERCOT ORDC Adjustments"
    quote: "There have been significant administrative changes to ERCOT ORDC parameters since the initial implementation of ORDC in June 2014, as illustrated below. In March 2019, the Mu, the mean value of the LOLP distribution, was administratively shifted upward by 0.25 times Sigma, then by an additional 0.25 times Sigma in March 2020."
  - id: e27
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.3 (pp. 8-9)"
    quote: "Offer Cap (LCAP) following Winter Storm Uri, then back up to the new HCAP of $5,000/MWh on January 1, 2022. Finally, the MCL was increased from 2,000 MW to 3,000 MW on January 1, 2022."
  - id: e28
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Executive Summary, price-adder floors"
    quote: "A price floor of $20/MWh will be applied to the RTORPA when the calculated RTOLCAP is at or less than 6,500 MW. o A price floor of $10/MWh will be applied to the calculation of the RTORPA when the calculated RTOLCAP is at or less than 7,000 MW but greater than 6,500 MW."
  - id: e29
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, cover letter"
    quote: "the Commission discussed and adopted a multi-step price-adder floor for the ORDC as a bridge mechanism to help to incentivize existing dispatchable generation to remain in the market until the Performance Credit Mechanism (PCM) is implemented. ERCOT implemented the multi-step price floor beginning on November 1,2023."
  - id: e30
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Executive Summary, price-adder floors"
    quote: "However, during the intervals in which the price-adder floors were in effect, approximately 85% of generation output was from dispatchable Resources, as shown in the graphic below."
  - id: e31
    source: ercot-ordc-methodology-2016
    locator: "ORDC Methodology OBD (2016), Attachment A, Section 4, Parameters for Implementing ORDC (table)"
    quote: "VOLL Value of Lost Load X Minimum contingency reserve level Unit $/MWh MW Value 9000 2000"
  - id: e32
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Executive Summary table, time-weighted RTORPA and share of all-in price"
    quote: "2022 $5.18/MWh 7.97% 2023 $0.92/MWh 1.81 % 2024 (Jan- Sep) $0.23/MWh 1.81 %"
  - id: e33
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Executive Summary, RTORPA contribution to PNM (table)"
    quote: "The table below compares RTPORA contributions to PNM since 2022. In general, the RTORPA played a more modest role in contributing to system-wide prices compared to the other factors noted previously. 2022 27.24% 2023 3.02% 2024 (Jan- Sep) 1.99%"
  - id: e34
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Executive Summary, key results"
    quote: "In terms of the ORDC's utilization, higher overall reserve levels and the transition from some Off-Line reserves to On-Line reserves contributed to a reduction in the frequency and magnitude of ORDC price adders, which are tied to scarcity."
  - id: e35
    source: ercot-ordc-report-2022
    locator: "2022 Biennial ERCOT Report on the ORDC (October 31, 2022), Executive Summary, key observations"
    quote: "Efficacy: Changes to the ORDC for 2022 have resulted in higher price signals during periods of lower reserves, to encourage response from the market when there is greater risk to grid reliability. Additionally, prices to incent self-commitment of generation resources are being observed at higher reserve levels, as compared to previous study periods."
  - id: e36
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 3, p. 7"
    quote: "In accordance with a prior Commission directive, the ASDCs in RTC+B were designed to replicate the pricing outcomes of the ORDC."
  - id: e37
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 3, p. 7"
    quote: "At the August 20,2026 Open Meeting during discussion of Project No. 34677, the Commission agreed with Commission Staff' s recommendation that the underlying design of ASDCs is no longer required to adhere to the prior directive."
  - id: e38
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 3, p. 7"
    quote: "ERCOT's forthcoming biennial report on the ORDC performed pursuant to 16 TAC § 25.505(e) will also analyze the efficacy, utilization, related costs, and contribution ofthe ASDCs so far to grid reliability in the ERCOT Region. ERCOT's report will likely support the need to review and alter the ASDCs' design."
  - id: e39
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 1(a), p. 2"
    quote: "If a rulemaking is initiated to amend 16 TAC § 25.509, ERCOT would recommend that the sentence in subsection (b)(6)(D) referring to the Operating Reserve Demand Curve (ORDC) be amended to remove that reference. With the launch of RTC+B on December 5,2025, the ORDC is no longer used in the ERCOT market."
  - id: e40
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.1, ORDC Theory"
    quote: "The ORDC is a market-based construct for valuing operating reserves according to their scarcity. As initially described by Dr. William Hogan in Public Utility Commission of Texas (PUCT) Project No. 40000, the ORDC is based on the following principles:"
  - id: e41
    source: ercot-ordc-report-2024
    locator: "2024 Biennial ERCOT Report on the ORDC, Section 1.2 (PBMCL and MCL)"
    quote: "Note that while the MCL described above in Section 1.1 matches the reserve level at which ERCOT will begin instructing firm load shed, ERCOT's MCL was initially set to 2,000 MW to address concerns related to long-term resource adequacy and to ensure that prices were sufficiently strong when the ERCOT system went into declared emergency conditions but not yet requesting firm load shed."
---

## Definition

The ORDC was ERCOT's pre-RTC way of pricing reserve scarcity. It linked the level of operating reserves to the probability of load shed and was scaled to the Value of Lost Load (VOLL). [e1] Until RTC went live on December 5, 2025, ERCOT added an ORDC price adder to energy and reserve prices when reserves were low. [e2] ERCOT's 2024 report calls it a market-based construct for valuing operating reserves according to their scarcity, first described by Dr. William Hogan in PUCT Project No. 40000. [e40]

## How it works

This section describes the design before December 5, 2025. Day-ahead procurement covered the full AS Plan, and the real-time market could not use those reserves unless they were manually released to dispatch. The ORDC then set shortage pricing outside the dispatch model, based on how many operating reserves were available, as the IMM's 2024 report summarized it. [e5] ERCOT described this as reflecting scarcity "through a process that is outside of the optimization". [e4]

Two adders. From summer 2014 ERCOT computed separate adders in the five-minute real-time market: the Real-Time On-Line Reserve Price Adder (RTORPA), tied to on-line capacity (RTOLCAP, reserves available within 30 minutes), and the Real-Time Off-Line Reserve Price Adder (RTOFFPA), tied to off-line capacity (RTOFFCAP, reserves needing 30 minutes to an hour). [e18] Both were computed from VOLL, which was set equal to the system-wide offer cap, and from PBMCL, the probability of reserves falling below the minimum contingency level (MCL). [e19]

Where the probability came from. ERCOT says net load forecast error and other factors make the reserves available over the next 30 minutes to one hour uncertain. [e22] The loss-of-load probability (LOLP) was estimated by comparing hour-ahead forecast reserves with reserves realized in real time; PBMCL is that LOLP distribution shifted by the MCL. [e21] The on-line adder had an extra term for the first half of the hour, using a shortened curve with Mu scaled by one-half and Sigma by 0.707. [e23]

Price ceiling. The adder was built on VOLL minus System Lambda, so that the final energy price would not exceed VOLL. [e20][e24] ERCOT notes that the Protocols limited System Lambda plus all adders to the SWCAP, so RTORPA could reach the SWCAP only when System Lambda was zero. [e25]

## Formula

Pre-RTC adder (2016 methodology OBD, as described in prose): for each SCED run the ORDC is PBMCL multiplied by (VOLL − System Lambda). [e20] Here v = VOLL − System Lambda is "the net value of Load curtailment". [e24] RTORPA adds to the off-line term an extra term for the first 30 minutes, computed with Mu × 0.5 and Sigma × 0.707. [e23] Parameters in the 2016 methodology: VOLL $9,000/MWh and minimum contingency level X of 2,000 MW. [e31]

Post-RTC reconstruction (np-04 §4.4.12): the current protocols compute "historical reserve pricing outcomes" for the AORDC regression with the expression below, where RTOLCAP and RTOFFCAP are the real-time on-line and off-line reserve capacities for SCED intervals from June 1, 2014 through August 31, 2025, and μ and σ are the mean and standard deviation of the shifted LOLP distribution published for Summer 2026. [e14][e15][e17]

`(0.5*(1 − pnorm(RTOLCAP − 3000, 0.5*μ, 0.707*σ)) + 0.5*(1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ))) * (VOLL − min(System Lambda, 250))` [e15]

The 3,000 is the MCL in MW since 2022, and the 0.5 and 0.707 scaling matches the on-line term described in ERCOT's 2024 report. [e27][e23] One difference from the 2016 text: the reconstruction subtracts min(System Lambda, 250) rather than System Lambda. [e15][e24]

## ERCOT context

The ORDC adder started in 2014 and ended in December 2025 when RTC was introduced. [e3] Under RTC, the ORDC price adder was replaced by a set of ASDCs. [e9] The Aggregate ORDC (AORDC) used to build the ASDCs is a fixed curve made from the pricing outcomes the ORDC produced before RTC. [e11] ERCOT told the PUCT in September 2026 that the ASDCs were designed to replicate the ORDC's pricing outcomes under a prior Commission directive, and that at its August 20, 2026 open meeting the Commission agreed the ASDC design no longer has to follow that directive. [e36][e37]

How the curve was changed. ERCOT shifted Mu upward by 0.25 Sigma in March 2019 and by another 0.25 Sigma in March 2020. [e26] After Winter Storm Uri VOLL followed the cap down to the $2,000 LCAP, then rose to the new $5,000 HCAP on January 1, 2022, when the MCL also rose from 2,000 MW to 3,000 MW. [e27] The IMM says the Commission's start-of-2022 changes were extremely effective in raising shortage revenues. [e7] ERCOT's 2022 report found that the 2022 changes produced higher price signals at low reserves and self-commitment prices at higher reserve levels. [e35] From November 1, 2023 a multi-step floor applied: RTORPA of at least $20/MWh when RTOLCAP was at or below 6,500 MW, and $10/MWh between 6,500 and 7,000 MW. [e28] The Commission adopted it as a bridge to keep existing dispatchable generation in the market until the PCM is implemented. [e29] ERCOT reported that about 85% of generation output in floor intervals came from dispatchable Resources. [e30]

Fading impact. ERCOT's 2024 report gives the time-weighted RTORPA as $5.18/MWh in 2022, $0.92/MWh in 2023 and $0.23/MWh for January-September 2024. [e32] Its share of PNM accumulation fell from 27.24% in 2022 to 3.02% in 2023 and 1.99% in January-September 2024. [e33] ERCOT attributes the lower adders to higher reserves and a shift from off-line to on-line reserves. [e34] In 2025 the IMM says the ORDC raised real-time energy prices by only about $0.02/MWh, the lowest annual value since 2014, and was active for only 57 hours. [e8][e10]

Rules still on the books. §25.509 says that if the cap drops to LCAP, ERCOT keeps applying the ORDC and RDPA for the rest of the year. [e12] ERCOT has asked the PUCT, if it amends §25.509, to delete that reference because the ORDC is no longer used. [e39] §25.505 still requires an ORDC report by November 1 of every even-numbered year [e13]; ERCOT says its forthcoming report under that rule will analyze the ASDCs and will likely support reviewing their design. [e38]

## Timeline

- PUCT Project No. 40000: Hogan describes the ORDC principles. [e40]
- June 2014: ORDC implemented, with on-line and off-line adders in the five-minute RTM. [e26][e18]
- 2016 methodology: VOLL $9,000/MWh, MCL 2,000 MW. [e31]
- March 2019 and March 2020: Mu shifted up by 0.25 Sigma each time. [e26]
- After Winter Storm Uri (2021): VOLL falls to the $2,000 LCAP. [e27]
- January 1, 2022: VOLL and HCAP set at $5,000/MWh; MCL raised to 3,000 MW. [e27]
- October 31, 2022: ERCOT's first biennial ORDC report. [e35]
- November 1, 2023: multi-step RTORPA floor ($20 and $10/MWh) takes effect. [e28][e29]
- December 5, 2025: RTC go-live; the ORDC adder is replaced by ASDCs. [e2][e9]
- August 20, 2026: the Commission agrees ASDCs no longer have to replicate ORDC outcomes (per ERCOT's filing). [e37]

## Key facts

- The ORDC adder was in place from 2014 until December 2025. [e3]
- VOLL equalled the SWCAP; on-line reserves = available within 30 minutes, off-line = 30 to 60 minutes. [e18][e19]
- MCL: 2,000 MW originally, 3,000 MW from January 1, 2022. [e27]
- Price floor from November 1, 2023: $20/MWh at RTOLCAP of 6,500 MW or less; $10/MWh above 6,500 up to 7,000 MW. [e28] In 2024 it bound in 247 SCED intervals and added $11 million (IMM). [e6]
- Time-weighted RTORPA (ERCOT): $5.18/MWh in 2022, $0.92 in 2023, $0.23 in January-September 2024. [e32]
- 2025: the ORDC raised real-time energy prices by about $0.02/MWh and was active for 57 hours (IMM). [e8][e10]
- Since RTC: the ORDC adder has been replaced by ASDCs, and the AORDC is based on the ORDC's historical pricing. [e9][e11]

## Say it like this

(Guidance) The ORDC was a price adder ERCOT put on top of energy prices when reserves got thin: the probability of running short, times the value of lost load less the energy price. Since RTC+B it no longer exists as an adder, but its historical pricing outcomes live on in the aggregate curve (AORDC) that is split into the new Ancillary Service Demand Curves. [e1][e9][e11][e16][e20]

## Common confusion

(Guidance) The ORDC and the RDPA were two separate adders. The ORDC priced scarce reserves, and the RDPA corrected for out-of-market reliability actions. RTC removed the ORDC but kept the RDPA in a new form. [e9] Also, "the ORDC is gone" does not mean its values are gone: the AORDC is a fixed curve formulated from the ORDC's pricing outcomes before RTC [e11], and it is disaggregated into the ASDCs for Reg-Up, RRS, ECRS and Non-Spin. [e16] The MCL is not simply the load-shed point: ERCOT says that although the MCL concept matches the reserve level where firm load shed begins, it set the MCL at 2,000 MW to address long-term resource adequacy and keep prices strong in declared emergencies before load shed. [e41][e27]

## Questions

### What was the ORDC trying to capture?

It priced the reliability value of reserves. As reserves fall, the probability of load shed rises, and the ORDC turned that probability, scaled to VOLL, into a price adder on energy and reserve prices. [e1][e2]

### Why subtract System Lambda from VOLL?

The 2016 methodology says it reflects the scarcity value of the marginal dispatch capacity and keeps the final energy price from going above VOLL. [e24] The same text notes this can give a reserve price near zero with an energy price near the SWCAP under scarcity. [e20][e25]

### Why did on-line reserves get a higher adder than off-line ones?

On-line reserves can respond within 30 minutes, so RTORPA had an extra term covering the first half of the hour, computed with a shortened curve. [e18][e23]

### What if the PUCT had not raised the ORDC after Uri?

The sources only show the effect of the change: ERCOT found higher price signals at low reserves in 2022, and the IMM says the 2022 changes were extremely effective at raising shortage revenues. [e35][e7] The RTORPA was $5.18/MWh time-weighted in 2022 and made up 27.24% of PNM accumulation that year. [e32][e33]

### How much did the ORDC matter in 2025?

Very little. In 2025 the ORDC was active for only 57 hours and raised average real-time energy prices by about $0.02/MWh. [e8][e10]

### Is the ORDC still in effect after RTC?

Not as a price adder. It was replaced by ASDCs. [e9] Its historical outcomes were used to formulate the Aggregate ORDC that is split into the ASDCs, and some PUCT rules still mention the ORDC. [e11][e16][e12][e13] Since August 2026 the ASDCs no longer have to replicate the ORDC's outcomes, according to ERCOT. [e37]

## Scenarios

### An analyst back-tests 2022-2024 scarcity revenue and sees adders shrinking. Why?

- ERCOT points to higher reserve levels and a move of reserves from off-line to on-line, which cut the frequency and size of adders. [e34]
- RTORPA fell from $5.18/MWh in 2022 to $0.23/MWh in January-September 2024, even with the price floor in place from November 2023. [e32][e28]

## Open items

- Resolved 2026-11-21: the pre-RTC formula (PBMCL × (VOLL − System Lambda), with the 0.5/0.707 first-half-hour scaling) is now cited from the 2016 methodology OBD and ERCOT's 2024 report. Still open: the exact current (2025) version of the OBD is not saved, and the reason the np-04 reconstruction uses min(System Lambda, 250) is not stated.
- The 2025 IMM report gives the ORDC's 2025 impact as "only $0.02 per MWh" in the executive summary and "less than $0.02/MWh" in Chapter I.
- ERCOT's 2024 table shows the same 1.81% all-in share for 2023 and January-September 2024 despite different RTORPA values; the extracted table may be garbled, so the percentages are not used.
- No saved source gives the date of Hogan's Project 40000 description beyond a January 2013 filing date in a footnote, or the PUCT order that adopted the ORDC.
- The 2026 biennial report (due November 1, 2026) is not saved; whether it was filed and what it found is unknown.
