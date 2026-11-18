---
id: rtm
name: Real-Time Market (RTM)
aliases: [RTM, Real-Time Market, real-time, balancing market]
kind: concept
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, congestion, retail]
as_of: 2026-11-18
links:
  - to: dam
    type: contrasts-with
    note: The DAM is the forward financial market, settled hourly, while real time settles on 15-minute intervals. [e7]
  - to: sced
    type: composed-of
    note: SCED produces the Base Points, Ancillary Service awards, LMPs and MCPCs that the RTM runs on about every five minutes. [e5][e6]
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
    note: Base Points are the SCED output that tells each Resource where to operate. [e4]
  - to: ordc
    type: related
    note: The IMM measured the real-time price effect of ORDC shortage pricing at $0.02/MWh in 2025. [e13]
  - to: settlement-statements
    type: settles
    note: Real-time settlement runs on RTM Initial, Final, Resettlement and True-Up Statements.
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
  - id: e17
    source: imm-som-2025
    locator: "Executive Summary, Ancillary Services"
    quote: "The most noteworthy development for ancillary services was the implementation of RTC in December."
---

## Definition

The Real-Time Market is the co-optimized market in the Operating Day for Ancillary Service capacity and energy. [e1] The Operating Day is the day, hours ending 0100 to 2400, during which energy flows. [e2]

## How it works

Before the Operating Hour there is an Adjustment Period, running from 1800 in the Day-Ahead up to the start of the hour before that Operating Hour. [e3] In it, QSEs can adjust their trades, Self-Schedules and Resource commitments as better information arrives. [e6]

In real time ERCOT dispatches Resources on economics and reliability to match Load with On-Line generation within Resource and transmission limits, and the SCED process produces Base Points and Ancillary Service awards. [e4] SCED manages energy, Ancillary Services, system power balance and congestion together, calculating LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. [e5]

Settlement uses Real-Time Settlement Point Prices for a 15-minute Settlement Interval, built from the LMPs of all SCED executions in that interval. [e7] A Resource Node price is the time-weighted average of the LMPs plus the Real-Time Reliability Deployment Price Adder for Energy, and a price floor of -$251/MWh applies after the adder. [e8][e9] Energy Imbalance Service is paid or charged at the Real-Time Settlement Point Price. [e16] Real-time prices are final at 1600 of the second Business Day after the Operating Day. [e10]

## ERCOT context

The IMM calls the real-time market the most consequential of the markets because it coordinates real-time power flows and sets expectations for the forward markets. [e12] The big 2025 change was RTC, implemented in December 2025: with RTC the real-time market simultaneously procures energy and ancillary services. [e17][e11]

2025 outcomes per the IMM: price spikes were 40% less frequent than in 2024, and most occurred between 7 and 9 p.m. as solar ramped down. [e15][e14] ORDC shortage pricing added only $0.02/MWh to real-time energy prices, the lowest since the ORDC began in 2014. [e13]

## Key facts

- Real-time settles on 15-minute Settlement Intervals using SCED LMPs. [e7]
- SCED runs approximately every five minutes, or more often if necessary. [e5]
- The Real-Time Settlement Point Price has an administrative floor of -$251/MWh. [e9]
- Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e10]
- The Adjustment Period runs from 1800 in the Day-Ahead to the start of the hour before the Operating Hour. [e3]
- 2025: price spikes were 40% less frequent than in 2024. [e15]

## Say it like this

Real time is where physical dispatch happens: SCED sets prices and dispatch about every five minutes, and 15-minute settlement prices are built from those results. Anything you did not lock in day-ahead gets settled at these prices.

## Common confusion

The five-minute SCED prices are not what you are settled on. Settlement is on 15-minute Settlement Point Prices that combine all SCED runs in the interval and add the reliability deployment adder. [e7][e8] The DAM, by contrast, settles hourly. (See the dam topic.)

## Questions

### How often does SCED run and what does it produce?

About every five minutes, or more often if necessary. It produces Base Points, Ancillary Service awards, LMPs and Real-Time MCPCs. [e5]

### What is the Adjustment Period for?

It lets QSEs adjust trades, Self-Schedules and Resource commitments as more accurate information becomes available. [e6] It starts at 1800 in the Day-Ahead. [e3]

### What changed in real time in December 2025?

RTC was implemented, and the real-time market now simultaneously procures energy and ancillary services. [e17][e11]

## Open items

- The Section 6.2/6.3 timeline tables and figure could not be quoted cleanly (table cells); the 1800 and 1600 anchors come from definitions and paragraph (7) of Section 6.3.
- Real-time reliability deployment price adders (Section 6.5.7.3.1) were not explained here.
- The IMM text cited says RTC was implemented "in December" (2025 report); the specific go-live day was not quoted here.
