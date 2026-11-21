---
id: rtm
name: Real-Time Market (RTM)
aliases: [RTM, Real-Time Market, real-time, balancing market]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, congestion, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: dam
    type: contrasts-with
    note: DAM energy settlements use a one-hour Settlement Interval, while real time settles on 15-minute intervals. [e19][e7]
  - to: sced
    type: composed-of
    note: SCED produces the Base Points, Ancillary Service awards, LMPs and MCPCs that the RTM runs on about every five minutes. [e5]
  - to: spp
    type: determines
    note: Real-Time Settlement Point Prices are built from SCED LMPs plus the reliability deployment adder, with a floor of -$251/MWh. [e8][e9]
  - to: lmp
    type: used-in
    note: The Resource Node settlement price is the time-weighted average of LMPs plus the adder. [e8]
  - to: rtc-b
    type: related
    note: Real-time co-optimization was implemented in December 2025 and means energy and ancillary services are procured together in real time. [e11][e17]
  - to: base-point
    type: related
    note: The SCED process produces Base Points (and Ancillary Service awards) for Resources. [e4]
  - to: ordc
    type: related
    note: The IMM measured the real-time price effect of ORDC shortage pricing at $0.02/MWh in 2025. [e13]
  - to: settlement-statements
    type: settles
    note: Related topic for real-time settlement statements.
  - to: ruc
    type: related
    note: RUC-committed Resources are counted in the Real-Time Reliability Deployment Price Adder, except those whose QSE opted out of RUC Settlement. [e30]
  - to: settlement-point
    type: related
    note: Real-time Energy Imbalance Service at a Resource Node is calculated at that Resource Node Settlement Point. [e16][e24]
  - to: cop
    type: related
    note: A QSE must update the COP within 60 minutes after a Forced Outage. [e23]
  - to: asdc
    type: related
    note: Real-time Ancillary Service awards depend on Resource capability and ASDCs. [e22]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Real-Time Market (RTM)"
    quote: "A Real-Time, co-optimized market in the Operating Day for Ancillary Service capacity and energy."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Operating Day"
    quote: "The day, including hours ending 0100 to 2400, during which energy flows."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Adjustment Period"
    quote: "For each Operating Hour, the time between 1800 in the Day-Ahead up to the start of the hour before that Operating Hour."
  - id: e4
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (3)"
    quote: "During Real-Time operations, ERCOT dispatches Resources under normal system conditions and behavior based on economics and reliability to match system Load with On-Line generation while observing Resource and transmission constraints. The Security-Constrained Economic Dispatch (SCED) process produces Base Points and Ancillary Service awards for Resources."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e6
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (2)"
    quote: "The Adjustment Period provides each Qualified Scheduling Entity (QSE) the opportunity to adjust its trades, Self-Schedules, and Resource commitments as more accurate information becomes available under Section 6.4, Adjustment Period."
  - id: e7
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (4)"
    quote: "Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval, using the Locational Marginal Prices (LMPs) from all of the executions of SCED in the Settlement Interval."
  - id: e8
    source: np-06
    locator: "Section 6.6.1.1, Real-Time Settlement Point Price for a Resource Node"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy."
  - id: e9
    source: np-06
    locator: "Section 6.6.1, Real-Time Settlement Point Prices, paragraph (1)"
    quote: "For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e10
    source: np-06
    locator: "Section 6.3, Adjustment Period and Real-Time Operations Timeline, paragraph (7)"
    quote: "All Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final at 1600 of the second Business Day after the Operating Day."
  - id: e11
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance"
    quote: "With RTC, the real-time market simultaneously procures energy and ancillary services."
  - id: e12
    source: imm-som-2025
    locator: "Executive Summary, Review of Market Performance"
    quote: "The real-time market is the most consequential because it coordinates real-time power flows to maintain system reliability and sets expectations for the forward markets."
  - id: e13
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance"
    quote: "For example, the shortage pricing produced by the operating reserve demand curve (ORDC) raised real-time energy prices by only $0.02 per MWh, the lowest annual value since ERCOT implemented the ORDC in 2014."
  - id: e14
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, price spikes"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e15
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, price spikes"
    quote: "Figure 4 shows that price spikes were 40% less frequent in 2025 than in 2024."
  - id: e16
    source: np-06
    locator: "Section 6.6.3.1, Real-Time Energy Imbalance Payment or Charge at a Resource Node"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Resource Node Settlement Point:"
  - id: e19
    source: np-06
    locator: "Section 6.1, Introduction, paragraph (4)"
    quote: "In contrast, the Day-Ahead Market (DAM) energy settlements will use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval, and DAM Ancillary Service Settlements will use DAM MCPCs for a one-hour Settlement Interval."
  - id: e18
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature."
  - id: e17
    source: imm-som-2025
    locator: "Executive Summary, Ancillary Services"
    quote: "The most noteworthy development for ancillary services was the implementation of RTC in December."
  - id: e20
    source: np-06
    locator: "Section 6.3, paragraph (2)"
    quote: "Activities for the Adjustment Period begin at 1800 in the Day-Ahead and end one full hour before the start of the Operating Hour."
  - id: e21
    source: np-06
    locator: "Section 6.4.9.1, paragraph (2)"
    quote: "QSEs may update their Ancillary Service Offers in Real-Time. SCED shall use the latest updated Ancillary Service Offers available to it at the time of the SCED execution."
  - id: e22
    source: np-06
    locator: "Section 6.4.9.1.1, paragraph (1)"
    quote: "Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment."
  - id: e23
    source: np-06
    locator: "Section 6.4.8, Notification of Forced Outage of a Resource, paragraph (3)"
    quote: "In the event of a Forced Outage, the QSE must update the Resource’s COP as soon as practicable but no longer than 60 minutes after the Forced Outage occurs."
  - id: e24
    source: np-06
    locator: "Section 6.6.3.1, paragraph (1), items (b)-(g)"
    quote: "The amount of its Self-Schedules with sink specified at the Settlement Point; plus (c) The amount of its Day-Ahead Market (DAM) Energy Bids cleared in the DAM at the Settlement Point; plus (d) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus (e) The amount of its Self-Schedules with source specified at the Settlement Point; minus (f) The amount of its energy offers cleared in the DAM at the Settlement Point; minus (g) The amount of its Energy Trades at the Settlement Point where the QSE is the seller."
  - id: e25
    source: np-06
    locator: "Section 6.3, paragraph (3)"
    quote: "ERCOT shall monitor Real-Time Locational Marginal Prices (LMPs), Real-Time Market (RTM) Clearing Prices for Capacity (MCPCs), and Real-Time Settlement Point Prices, including Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, and Real-Time Reliability Deployment Price Adders for Ancillary Service, for errors and if there are conditions that cause the price to be questionable, as soon as practicable, ERCOT shall notify all Market Participants that the Real-Time LMPs, Real-Time MCPCs, and Real-Time Settlement Point Prices are under investigation."
  - id: e26
    source: np-06
    locator: "Section 6.3, paragraph (7)(b)"
    quote: "ERCOT shall seek ERCOT Board review of prices if the change in RTM Settlement Statement(s) would result in the absolute value impact to any single Counter-Party, based on the sum of all original RTM Settlement Statement amounts of Market Participants assigned to the Counter-Party, to be greater than: (i) 2% and also greater than $20,000; or (ii) 20% and also greater than $2,000."
  - id: e27
    source: np-06
    locator: "Section 6.3, paragraph (7)(a)"
    quote: "it shall notify Market Participants and describe the need for such correction as soon as practicable but no later than 30 days after the Operating Day. Failure to notify Market Participants within this timeline precludes the ERCOT Board from reviewing such prices."
  - id: e28
    source: imm-som-2025
    locator: "page 29 (OCR), Section C, Zonal Energy Prices, Table 1"
    quote: "ERCOT $179.24 $76.41 $73.28 $32.41 $36.94"
  - id: e29
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, real-time hub price slide, key takeaway"
    quote: "Real-Time prices were lower in summer 2026 than 2024 and 2025 due to higher supply particularly during day light hours."
  - id: e30
    source: np-06
    locator: "Section 6.5.7.3.1, paragraph (1)(a)-(d)"
    quote: "The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process; (b) RMR Resources that are On-Line, including capacity secured to prevent an Emergency Condition pursuant to paragraph (4) of Section 6.5.1.1, ERCOT Control Area Authority; (c) Deployed Load Resources other than CLRs; (d) Deployed ERS;"
  - id: e31
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, congestion rent slide, key takeaway"
    quote: "Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation."
  - id: e32
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, Energy Storage offers slide, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e33
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board report, Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e34
    source: np-06
    locator: "Section 6.3, paragraph (4), price correction conditions"
    quote: "ERCOT shall correct prices for an Operating Day when accurate prices can be determined, the impact of the price correction is determined to be significant, and one of the following conditions has been met:"
  - id: e35
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board report, Effective Date"
    quote: "Upon system implementation of the Real-Time Co-Optimization (RTC) Project"
  - id: e36
    source: np-06
    locator: "Section 6.6.3.1, paragraph (1)(a) (current text; NPRR1188 would replace it upon system implementation)"
    quote: "(a) The energy produced by all its Generation Resources, consumed as WSL, or consumed as Non-WSL ESR Charging Load at the Settlement Point; plus"
---

## Definition

The Real-Time Market is the co-optimized market in the Operating Day for Ancillary Service capacity and energy. [e1] The Operating Day is the day, hours ending 0100 to 2400, during which energy flows. [e2]

## How it works

Before the Operating Hour there is an Adjustment Period, running from 1800 in the Day-Ahead up to the start of the hour before that Operating Hour. [e3] In it, QSEs can adjust their trades, Self-Schedules and Resource commitments as better information arrives. [e6]

In real time ERCOT dispatches Resources on economics and reliability to match Load with On-Line generation within Resource and transmission limits, and the SCED process produces Base Points and Ancillary Service awards. [e4] SCED manages energy, Ancillary Services, system power balance and congestion together, calculating LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. [e5]

Settlement uses Real-Time Settlement Point Prices for a 15-minute Settlement Interval, built from the LMPs of all SCED executions in that interval. [e7] A Resource Node price is the time-weighted average of the LMPs plus the Real-Time Reliability Deployment Price Adder for Energy, and a price floor of -$251/MWh applies after the adder. [e8][e9] Energy Imbalance Service is paid or charged at the Real-Time Settlement Point Price. [e16] Real-time prices are final at 1600 of the second Business Day after the Operating Day. [e10]

### Adjustment Period and real-time inputs

Adjustment Period activities begin at 1800 in the Day-Ahead and end one full hour before the Operating Hour starts. [e20] QSEs may update Ancillary Service Offers in real time, and SCED uses the latest available at execution. [e21] Real-time Ancillary Service awards rest on Resource capability (including SOC and SOC limits) and the ASDCs, regardless of the quantity under deployment. [e22] After a Forced Outage the QSE must update the COP as soon as practicable and within 60 minutes. [e23]

### Imbalance settlement at a Resource Node

Energy Imbalance Service at a Resource Node is priced at the RTSPP on the QSE's net position: its Resource output and certain charging consumption, plus Self-Schedules sinking there, DAM Energy Bids cleared and Energy Trades bought, minus Self-Schedules sourcing there, DAM energy offers cleared and Energy Trades sold. [e16][e36][e24] DAM Energy Bids and offers cleared at the Settlement Point therefore enter the real-time imbalance calculation at that same Settlement Point. [e24]

### Reliability deployments in the adder

The Real-Time Reliability Deployment Price Adder for Energy considers RUC-committed Resources (except those whose QSEs opted out of RUC Settlement), On-Line RMR Resources, deployed Load Resources other than CLRs and deployed ERS, among other categories. [e30]

### Price errors and corrections

ERCOT monitors real-time prices and notifies Market Participants when they are under investigation. [e25] Prices are final at 1600 on the second Business Day after the Operating Day. [e10] ERCOT shall correct prices for an Operating Day when accurate prices can be determined, the impact is significant, and one of the listed conditions is met. [e34] If ERCOT determines prices qualify for correction and will seek Board review, it must notify Market Participants no later than 30 days after the Operating Day, or the Board cannot review them. [e27] ERCOT shall seek Board review if the change would shift any single Counter-Party's RTM Settlement Statements by more than 2% and $20,000, or more than 20% and $2,000. [e26]

## ERCOT context

The IMM calls the real-time market the most consequential of the markets because it coordinates real-time power flows and sets expectations for the forward markets. [e12] The IMM calls the implementation of RTC in December the most noteworthy development for ancillary services in its 2025 report, and with RTC the real-time market simultaneously procures energy and ancillary services. [e17][e11] The ORDC price adder was replaced by a set of Ancillary Service Demand Curves under RTC. [e18]

The IMM's load-weighted annual average real-time energy price for ERCOT was $36.94/MWh in 2025, against $32.41 in 2024 and $73.28 in 2023. [e28] ERCOT's summer 2026 review says real-time prices were lower in summer 2026 than in 2024 and 2025 because of higher supply, particularly in daylight hours, and that real-time congestion rent was 10% lower than in summer 2025. [e29][e31] A footnote in that review, on real-time ESR offers, says SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025; it does not address the day-ahead cap (see the offer-cap topic). [e32]

2025 outcomes per the IMM: price spikes were 40% less frequent than in 2024, and most occurred between 7 and 9 p.m. as solar ramped down. [e15][e14] ORDC shortage pricing added only $0.02/MWh to real-time energy prices, the lowest since the ORDC began in 2014; the ORDC adder has since been replaced under RTC. [e13][e18]

## Timeline

- December 8, 2020: the Board approved NPRR1010 (Adjustment Period and Real-Time Operations changes for RTC), effective upon system implementation of the RTC Project. [e33][e35]
- December 2025: RTC implemented, so the real-time market procures energy and ancillary services together. [e17][e11]

## Key facts

- Real-time settles on 15-minute Settlement Intervals using SCED LMPs. [e7]
- SCED runs approximately every five minutes, or more often if necessary. [e5]
- The Real-Time Settlement Point Price has an administrative floor of -$251/MWh. [e9]
- Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e10]
- The Adjustment Period runs from 1800 in the Day-Ahead to the start of the hour before the Operating Hour. [e3]
- 2025: price spikes were 40% less frequent than in 2024. [e15]
- ERCOT must notify the market no later than 30 days after the Operating Day for the Board to review prices, and shall seek Board review if the impact on a Counter-Party exceeds 2% and $20,000, or 20% and $2,000. [e27][e26]
- IMM 2025 average real-time energy price for ERCOT: $36.94/MWh. [e28]

## Say it like this

Real time is where physical dispatch happens: SCED sets prices and dispatch about every five minutes, and 15-minute settlement prices are built from those results. Anything you did not lock in day-ahead gets settled at these prices.

## Common confusion

The five-minute SCED prices are not what you are settled on. Settlement is on 15-minute Settlement Point Prices that combine all SCED runs in the interval and add the reliability deployment adder. [e7][e8] The DAM, by contrast, settles on a one-hour Settlement Interval. [e19] (See the dam topic.)

## Questions

### How often does SCED run and what does it produce?

About every five minutes, or more often if necessary. It produces Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs. [e5]

### What is the Adjustment Period for?

It lets QSEs adjust trades, Self-Schedules and Resource commitments as more accurate information becomes available. [e6] It starts at 1800 in the Day-Ahead. [e3]

### Why can a price still change after the interval?

Prices are final at 1600 on the second Business Day after the Operating Day, but a price that qualifies for correction can go to the Board if ERCOT notifies the market within 30 days; ERCOT shall seek Board review if the impact on a Counter-Party passes the thresholds (2% and $20,000, or 20% and $2,000). [e10][e34][e27][e26]

### What if a QSE's Resource trips offline in real time?

The QSE must update the COP within 60 minutes after the Forced Outage. [e23] Separately, its Energy Imbalance Service at the Resource Node is priced at the RTSPP on its net position, where its Resource output is netted against its Self-Schedules, DAM and Energy Trade positions at that Settlement Point. [e24]

### What changed in real time in December 2025?

RTC was implemented, and the real-time market now simultaneously procures energy and ancillary services. [e17][e11]

## Open items

- The Section 6.3.1/6.3.2 timeline tables could not be quoted cleanly (table cells); the 1800 and 1600 anchors come from Section 6.3 paragraphs (2) and (7).
- Resolved 2026-11-21: RTC go-live was December 5, 2025 (IMM, quoted in the sced topic).
- Section 6.5.7.3.1 paragraph (1)(a) refers to paragraph (14) of Section 5.5.2 for the RUC opt-out, but in the saved np-05 the opt-out rule is paragraph (21); the cross-reference looks stale. Not resolved.
- The formula-level detail of the reliability deployment price adder (how its value is calculated) was not read.
