---
id: regulation
name: Regulation Up / Down
aliases: [Regulation, Reg-Up, Reg-Down, Regulation Service, Regulation Up Service, Regulation Down Service, RegUp, RegDn, LFC]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ancillary-services
    type: part-of
    note: Regulation is one of the ancillary services; see that topic for the AS Plan, obligations and costs. [e1]
  - to: rrs
    type: contrasts-with
    note: RRS is a service used to restore or maintain frequency in response to a significant frequency deviation, while ERCOT dispatches Reg-Up by an LFC signal. [e13][e2]
  - to: ecrs
    type: related
    note: ECRS provides backup to Reg-Up. [e7]
  - to: energy-storage-resource
    type: related
    note: ESRs, in charge or discharge mode, supply most regulation. [e2][e8]
  - to: sced
    type: related
    note: ERCOT minimizes regulation energy in each SCED cycle. [e4]
  - to: rtc-b
    type: related
    note: Since RTC, ERCOT also procures ancillary services in real time. [e12]
evidence:
  - id: e1
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (1)"
    quote: "(1) Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency."
  - id: e2
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (1)"
    quote: "A Generation Resource or Energy Storage Resource (ESR) in discharge mode providing Reg-Up must be able to increase energy output when deployed and decrease energy output when recalled. A Load Resource or ESR in charge mode providing Reg-Up must be able to decrease Load when deployed and increase Load when recalled. ERCOT dispatches Reg-Up by a Load Frequency Control (LFC) signal."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Regulation Down Service (Reg-Down)"
    quote: "Such capacity is the amount available below any Base Point but above the low limit in MW of the Generation Resource’s capacity that is frequency responsive and may be called on to change output as necessary throughout the range of capacity available to maintain proper system frequency."
  - id: e4
    source: np-06
    locator: "Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (4)(b)-(c)"
    quote: "(b) ERCOT shall minimize Reg-Up and Reg-Down energy as much as practicable in each SCED cycle. (c) ERCOT shall settle energy provided by Reg-Up and Reg-Down at the Resource’s Settlement Point Price."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (6)"
    quote: "(6) For each Resource providing Reg-Up or Reg-Down, the implied ramp rate in MW per minute is the total amount of Regulation Service awarded divided by five."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.6.2, LFC Deployment, paragraph (1)"
    quote: "(1) ERCOT may deploy Regulation Service, RRS, ECRS, and Non-Spin only as prescribed by their respective specific functions to maintain frequency and system security. ERCOT may not substitute one Ancillary Service for another."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (1)(c)"
    quote: "(c) Provide backup to Reg-Up; and"
  - id: e8
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "On average, ESRs provided 94% of RegUp, 86% of Reg-Down, 51% of RRS, 42% of ECRS, and 24% of NSRS."
  - id: e9
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of Regulation"
    quote: "Regulation reserves include capacity that responds to Load Frequency Control (LFC), which sends instructions every four seconds to increase or decrease generation or demand as needed to balance generation and load from moment to moment and maintain system frequency."
  - id: e10
    source: imm-som-2025
    locator: "Executive Summary, Ancillary Services"
    quote: "The most noteworthy development for ancillary services was the implementation of RTC in December."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.A.1, Ancillary Services Procurement Targets"
    quote: "Reg-Up and Reg-Down volumes increased by 7.4% and 3.3%, respectively, because of higher five-minute net load forecast error."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market"
    quote: "Before ERCOT implemented RTC in December 2025, ancillary services were only sold in the day-ahead market, where they represented a physical obligation to provide reserves in real time. Since ERCOT implemented RTC, it has also procured ancillary services in real-time, and day-ahead AS awards have represented a financial rather than physical obligation."
  - id: e13
    source: np-03
    locator: "Section 3.17.2, Responsive Reserve Service, paragraph (1)"
    quote: "(1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation."
---

## Definition

Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. [e1] Regulation Down (Reg-Down) is the matching capacity below a Generation Resource's Base Point, down to its low limit, that may be called on to change output to maintain system frequency. [e3]

## How it works

ERCOT dispatches regulation by a Load Frequency Control (LFC) signal. A generator or an ESR in discharge mode providing Reg-Up raises output when deployed and lowers it when recalled, while a Load Resource or an ESR in charge mode providing Reg-Up cuts load when deployed and restores it when recalled. [e2] The IMM describes the LFC signal as going out every four seconds. [e9]

Regulation is deployed only for its own function: ERCOT may not substitute one ancillary service for another. [e6] ERCOT is to minimize regulation energy in each SCED cycle, and the energy delivered is settled at the resource's Settlement Point Price. [e4] For each resource providing regulation the implied ramp rate in MW per minute is the regulation award divided by five. [e5]

## ERCOT context

Regulation is the product batteries dominate: in 2025 ESRs on average provided 94% of Reg-Up and 86% of Reg-Down. [e8] Regulation volumes in the 2025 AS Plan rose, by 7.4% for Reg-Up and 3.3% for Reg-Down, because of higher five-minute net load forecast error. [e11] The most noteworthy 2025 development for ancillary services was RTC going live in December, after which ERCOT also procures ancillary services in real time. [e10][e12]

## Key facts

- Reg-Up provides capacity that can respond to ERCOT signals within five seconds. [e1]
- ERCOT dispatches Reg-Up by an LFC signal, and regulation capacity responds to LFC instructions; regulation energy is settled at the Resource's Settlement Point Price. [e2][e9][e4]
- Implied ramp rate in MW per minute equals the regulation award divided by five. [e5]
- ECRS provides backup to Reg-Up. [e7]
- 2025: ESRs provided 94% of Reg-Up and 86% of Reg-Down on average. [e8]

## Say it like this

Regulation is the fast frequency-balancing service: resources follow ERCOT's LFC signal up or down. Batteries now supply most of it, and ERCOT may not substitute another ancillary service for it. [e2][e6][e8]

## Common confusion

Regulation is not the same as RRS: ERCOT dispatches Reg-Up by an LFC signal, while RRS is used in response to a significant frequency deviation. [e2][e13] Reg-Up and Reg-Down are separate products, and Reg-Down capacity is the amount available below the Base Point. [e3]

## Questions

### What is the difference between Reg-Up and Reg-Down?

Reg-Up is capacity that can respond to ERCOT signals within five seconds and is deployed by raising output (or cutting load). [e1][e2] Reg-Down is the capacity available below the Base Point that can be called on to change output to maintain frequency. [e3]

### How is regulation energy paid?

ERCOT settles energy provided by Reg-Up and Reg-Down at the resource's Settlement Point Price, and it is to minimize regulation energy in each SCED cycle. [e4]

### Who provides regulation in ERCOT today?

Mostly batteries: ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025 on average. [e8]

## Open items

- The protocol says response within five seconds, while the IMM describes a four-second LFC signal; not reconciled (also noted under ancillary-services).
- Deeper pass: regulation qualification and testing (Section 8.1.1.2.1.1), the performance metrics for regulation deployment (Section 8.1.1.4.1) and regulation clearing prices.
- Deeper pass: how RTC changes regulation pricing (AS co-optimized in SCED) and the DAM award as a financial position.
