---
id: regulation
name: Regulation Up / Down
aliases: [Regulation, Reg-Up, Reg-Down, Regulation Service, Regulation Up Service, Regulation Down Service, RegUp, RegDn, LFC]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: asdc
    type: related
    note: The Reg-Up ASDC has a maximum demand price of VOLL plus 4,052 $/MWh and a minimum price of 250 $/MWh in the current Protocol text. [e24][e25]
  - to: prc
    type: related
    note: Reg-Up and Reg-Down capability is one of the items in ERCOT's Ancillary Services Capacity Monitor in real time. [e14]
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
  - id: e14
    source: np-06
    locator: "Section 6.5.7.5, paragraph (1)(h)-(k)"
    quote: >-
      (h) Reg-Up and Reg-Down capability (for ESRs, the SCED duration requirements of Reg-Up and Reg-Down are considered);
  - id: e15
    source: np-06
    locator: "Section 6.5.7.6, Load Frequency Control, paragraph (1)"
    quote: >-
      (1) The function of LFC is to maintain system frequency without a cost optimization function. ERCOT shall execute LFC every four seconds to reduce system frequency deviations from scheduled frequency by providing a control signal to each QSE that represents Resources providing Regulation Service, RRS, and ECRS.
  - id: e16
    source: np-03
    locator: "Section 3.17.1, Regulation Service, paragraph (2)"
    quote: >-
      (2) Regulation Down Service (Reg-Down) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency.
  - id: e17
    source: np-08
    locator: "Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (3)"
    quote: >-
      Resources providing Reg-Up or Reg-Down must be capable of delivering the full amount of regulating capacity offered to ERCOT within five minutes.
  - id: e18
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (4)"
    quote: >-
      (4) A Reg-Up and Reg-Down qualification test for each Resource is conducted during a continuous 60-minute period agreed on in advance by the QSE and ERCOT. QSEs may qualify a Resource to provide Reg-Up or Reg-Down, or both, in separate testing.
  - id: e19
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (4)(c)(i)-(iv)"
    quote: >-
      (i) During at least one five minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Generation/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance (GREDP/CLREDP/ESREDP) calculated in accordance with Section 8.1.1.4.1, Regulation Service and Generation Resource/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance, and Ancillary Service Capacity Performance Metrics, over the entire five minute interval must be less than or equal to 3.5%.
  - id: e20
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (4)(c)(iii)-(iv)"
    quote: >-
      (iv) For an ESR, in all other test sequence intervals, the Resource’s measured ESREDP must be less than or equal to 3.0% as calculated for the entire duration of each test interval.
  - id: e21
    source: ercot-as-methodology-2026
    locator: "Methodology, Regulation Service Requirement Details, Procedure (effective 1 January 2026)"
    quote: >-
      For determining the base Reg-Up requirements for a particular hour, ERCOT will calculate the 95^(th) percentile of the positive net load (load – wind – solar) forecast error for the same month of the previous two years. For determining the base Reg-Down requirements, ERCOT will calculate the 95^(th) percentile of the negative net load (load – wind – solar) forecast error for the same month of the previous two years.
  - id: e22
    source: ercot-as-methodology-2026
    locator: "Methodology, Regulation Service Requirement Details, Procedure (effective 1 January 2026)"
    quote: >-
      If it is determined that during the course of the year that the ERCOT monthly average for CPS1 score was less than 140% for a specific month, ERCOT will apply an extra 10% of both Reg-Up and Reg-Down for hours in which the CPS1 score was less than 140%.
  - id: e23
    source: ercot-as-methodology-2027
    locator: "Board presentation (September 2026), Key Takeaways"
    quote: >-
      For 2027, ERCOT is not proposing any change to the methodology for Regulation Service (Reg Up/Reg Down) and Responsive Reserve Service (RRS); their quantities reflect moving history forward.
  - id: e24
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), Max Demand Price table"
    quote: >-
      Reg-Up Max Demand Price $/MWh VOLL + 4,052
  - id: e25
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(b), minimum prices table"
    quote: >-
      Reg-Up Min Price $/MWh 250
  - id: e26
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (3), ESREDP"
    quote: >-
      ESREDP (%) = ABS[((ATPF – AEPFR)/(ASP)) – 1.0] * 100 ESREDP (MW) = ABS(ATPF – AEPFR – ASP)
  - id: e27
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (9)(a)"
    quote: >-
      (a) An ESR must have an ESREDP less than the greater of V% or W MW for 85% of the five-minute clock intervals in the month during which ESREDP was calculated.
  - id: e28
    source: np-08
    locator: "Section 8.1.1.4.1, paragraph (10)"
    quote: >-
      The GREDP/CLREDP/ESREDP performance criteria variables V, W, X, Y, and Z shall be posted to the ERCOT website no later than three Business Days after TAC approval.
  - id: e29
    source: np-08
    locator: "Section 8.1.1.3.1, Regulation Service Capacity Monitoring Criteria, paragraph (2)"
    quote: >-
      (2) For the Reg-Up and Reg-Down capability provided for a Resource to ERCOT by the Resource’s QSE, the amount of Reg-Up or Reg-Down reflected in that capability must be limited to the amount of Reg-Up or Reg-Down that can be sustained by the Resource for at least 30 minutes.
  - id: e30
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision, Regulation Service and RRS bullet (NPRR1282, PUCT approval 7/31/25)"
    quote: >-
      Regulation Service and RRS duration should be changed to 30 minutes: Based on ERCOT’s analysis, changing the duration requirement for Regulation Service and RRS from 15 minutes to 30 minutes is necessary to reduce the risk of ERCOT violating ERCOT’s obligation under NERC BAL-001, Real Power Balancing Control Performance, in the event that Security-Constrained Economic Dispatch (SCED) is not available due to unplanned events.
  - id: e31
    source: ercot-rtcb-battery
    locator: "Slide 23, ESR Participation in the DAM with the RTC+B Project, item 4"
    quote: >-
      Fast Responding Regulation Service (FRRS) is no longer a subset of Regulation.
  - id: e32
    source: imm-som-2025
    locator: "page 161 (OCR), Appendix I, Real-Time Co-Optimization, Figure A1 discussion"
    quote: >-
      Regulation service has the most expensive offers, consistent with its higher opportunity cost.
  - id: e33
    source: imm-som-2025
    locator: "page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions"
    quote: >-
      Regulation Up $11 Regulation Down $6
  - id: e34
    source: imm-som-2025
    locator: "page 62 (OCR), Figure 25 inset table, annual average DAM prices ($ per MWh)"
    quote: >-
      Reg-Down | $116.16 $9.64 $15.19 $3.90 $1.79
  - id: e35
    source: np-06
    locator: "Section 6.5.7.6.2.1, Deployment of Regulation Service, paragraph (4)(a)"
    quote: >-
      (a) Deployment or recall of a deployment must be accomplished through use of an automatic signal from ERCOT to each QSE provider of Reg-Up and Reg-Down.
  - id: e36
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: >-
      (1) Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment.
  - id: e37
    source: np-06
    locator: "Section 6.5.7.6.2.1, paragraph (10)"
    quote: >-
      (10) Upon the receipt of new Base Points and Ancillary Service awards from SCED, LFC will reset Regulation Service instructions to zero.
  - id: e38
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (5)"
    quote: >-
      (5) The maximum quantity of Reg-Up or Reg-Down that an individual Resource is qualified to provide is limited to the amount of Ancillary Service that can be sustained by the Resource for at least 30 minutes.
  - id: e39
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (4)(c)(ii)-(iii)"
    quote: >-
      (ii) Additionally, in all other test sequence intervals, the Resource’s measured GREDP/CLREDP/ESREDP must be less than or equal to 5% as calculated for the entire duration of each test interval.

      (iii) During at least one five-minute duration interval selected to evaluate each of the Reg-Up and Reg-Down amounts being tested, the Energy Storage Resource Energy Deployment Performance (ESREDP) calculated in accordance with Section 8.1.1.4.1, over the entire five minute interval must be less than or equal to 3.0%.
  - id: e40
    source: np-08
    locator: "Section 8.1.1.2.1.1, paragraph (4)(b)"
    quote: >-
      (b) For the 60-minute duration of the test, when market and reliability conditions allow, the ERCOT Control Area Operator shall send a random sequence of increasing ramp, hold, and decreasing ramp control signals to the QSE for a specific Resource.
---

## Definition

Regulation Up Service (Reg-Up) is a service that provides capacity that can respond to signals from ERCOT within five seconds to respond to changes from scheduled system frequency. [e1] Regulation Down Service (Reg-Down) is defined in the Protocols in the same terms, and for a Generation Resource, Reg-Down capacity is the amount available below any Base Point but above the low limit of its frequency-responsive capacity. [e16][e3]

## How it works

ERCOT dispatches regulation by a Load Frequency Control (LFC) signal, sent through an automatic signal from ERCOT to each QSE provider. [e2][e35] A generator or an ESR in discharge mode providing Reg-Up raises output when deployed and lowers it when recalled, while a Load Resource or an ESR in charge mode providing Reg-Up cuts load when deployed and restores it when recalled. [e2] ERCOT executes LFC every four seconds, which resolves the apparent conflict with the five-second figure: five seconds is the response time the service must meet, and four seconds is how often the control signal is issued. [e15][e1][e9]

Regulation is deployed only for its own function: ERCOT may not substitute one ancillary service for another. [e6] ERCOT is to minimize regulation energy in each SCED cycle, and the energy delivered is settled at the resource's Settlement Point Price. [e4] For each resource providing regulation the implied ramp rate in MW per minute is the regulation award divided by five. [e5] When SCED issues new Base Points and awards, LFC resets regulation instructions to zero. [e37]



A regulation provider must be qualified. Each Resource takes a test during a continuous 60-minute period agreed in advance, and can qualify for Reg-Up, Reg-Down or both in separate tests. [e18] Resources must be able to deliver the full regulating capacity offered within five minutes. [e17] During the test the Resource's energy deployment performance error (GREDP, CLREDP or ESREDP) must be at or below 3.5% in at least one five-minute interval selected to evaluate each Reg-Up and Reg-Down amount tested, and at or below 5% in all other test intervals. [e19][e39] For an ESR the Protocols add an ESREDP limit of 3.0%, both in at least one such interval and in all other test sequence intervals. [e39][e20]

The maximum Reg-Up or Reg-Down a Resource is qualified to provide is limited to what it can sustain for at least 30 minutes, and the same 30-minute limit applies to the capability the QSE reports to ERCOT. [e38][e29] ERCOT's analysis behind NPRR1282, approved by the PUCT on 31 July 2025, concluded the Regulation and RRS duration requirement should go from 15 to 30 minutes to reduce the risk of ERCOT violating NERC BAL-001 if SCED is not available. [e30]

## Formula

Performance after the fact is measured with the Energy Deployment Performance error. For an ESR, ESREDP (%) is the absolute value of (average telemetered power flow minus the average estimated primary frequency response, divided by the average set point, minus 1) times 100; in MW it is the absolute value of telemetered flow minus estimated primary frequency response minus set point. [e26] An ESR must have ESREDP below the greater of V% or W MW in 85% of the five-minute clock intervals in the month during which ESREDP was calculated, and the values of V and W are posted on the ERCOT website within three Business Days of TAC approval. [e27][e28]

## ERCOT context

Regulation is the product batteries dominate: in 2025 ESRs on average provided 94% of Reg-Up and 86% of Reg-Down. [e8] The IMM reports that Reg-Up and Reg-Down procurement volumes increased by 7.4% and 3.3% respectively from 2024 to 2025, because of higher five-minute net load forecast error. [e11]

ERCOT sizes regulation from history: base Reg-Up is the 95th percentile of positive net load forecast error and base Reg-Down the 95th percentile of negative error, for the same month of the previous two years, under the methodology effective 1 January 2026. [e21] If a monthly average CPS1 score is below 140%, ERCOT adds an extra 10% of both Reg-Up and Reg-Down in hours where the score was below 140%. [e22] For 2027 ERCOT is not proposing any change to the Regulation methodology; its September 2026 Board recommendation says quantities reflect moving history forward. [e23]

The IMM calls the December 2025 RTC go-live the most noteworthy 2025 development for ancillary services; since then ERCOT also procures ancillary services in real time and day-ahead awards are a financial rather than physical obligation. [e10][e12] Under RTC, awards are based on Resource capability including state of charge and on ASDCs. [e36] The Reg-Up ASDC has a maximum demand price of VOLL plus 4,052 $/MWh and a minimum price of 250 $/MWh in the current text. [e24][e25] ERCOT monitors ESR Reg-Up and Reg-Down capability considering the SCED duration requirements. [e14] ERCOT's July 2025 RTC+B battery overview says Fast Responding Regulation Service (FRRS) is no longer a subset of Regulation. [e31]

On prices and cost, the IMM's Figure 25 inset table reports annual average prices for Reg-Down of $116.16, $9.64, $15.19, $3.90 and $1.79 per MWh for 2021 to 2025 (OCR reading), and 2025 regulation charges of $11 million for Reg-Up and $6 million for Reg-Down. [e34][e33] The IMM says regulation has the most expensive offers in the real-time market (average offers, 5 December 2025 through February 2026), consistent with its higher opportunity cost. [e32]

## Key facts

- Reg-Up provides capacity that can respond to ERCOT signals within five seconds; LFC runs every four seconds. [e1][e15]
- ERCOT dispatches Reg-Up by an LFC signal; regulation energy is settled at the Resource's Settlement Point Price. [e2][e4]
- Implied ramp rate in MW per minute equals the regulation award divided by five. [e5]
- Qualification: 60-minute test, full capacity deliverable within five minutes, ESREDP at or below 3.0% in the evaluated and all other test intervals for an ESR. [e18][e17][e39][e20]
- Qualified and reported quantity is limited to what can be sustained for at least 30 minutes. [e38][e29]
- ECRS provides backup to Reg-Up. [e7]
- 2025: ESRs provided 94% of Reg-Up and 86% of Reg-Down on average; Reg-Down's 2025 annual average price was $1.79/MWh per the IMM's Figure 25 inset (OCR). [e8][e34]

## Say it like this

Regulation is the fast frequency-balancing service: resources follow ERCOT's LFC signal up or down. Batteries now supply most of it, and ERCOT may not substitute another ancillary service for it. [e2][e6][e8]

## Common confusion

Regulation is not the same as RRS: ERCOT dispatches Reg-Up by an LFC signal, while RRS is used in response to a significant frequency deviation. [e2][e13] Reg-Up and Reg-Down are separate products, and for a Generation Resource, Reg-Down capacity is the amount available below the Base Point. [e3] The five-second response requirement and the four-second LFC cycle are different things. [e1][e15]

## Questions

### What is the difference between Reg-Up and Reg-Down?

Reg-Up is capacity that can respond to ERCOT signals within five seconds and is deployed by raising output (or cutting load). [e1][e2] Reg-Down is, for a Generation Resource, the capacity available below the Base Point (above its low limit) that can be called on to change output to maintain frequency. [e3]

### How is regulation energy paid?

ERCOT settles energy provided by Reg-Up and Reg-Down at the resource's Settlement Point Price, and it is to minimize regulation energy in each SCED cycle. [e4]

### Who provides regulation in ERCOT today?

Mostly batteries: ESRs provided 94% of Reg-Up and 86% of Reg-Down in 2025 on average. [e8]

### How does a battery qualify for regulation?

It passes a 60-minute test where, when market and reliability conditions allow, ERCOT sends a random sequence of ramp-up, hold and ramp-down signals, delivers the full amount within five minutes, and keeps ESREDP at or below 3.0% in the evaluated interval and in all other test intervals. [e18][e40][e17][e39][e20]

### Why does ERCOT add extra regulation when CPS1 is low?

The AS Methodology says that when the monthly average CPS1 score is under 140%, ERCOT applies an extra 10% of both Reg-Up and Reg-Down in the hours where the score was under 140%. (Guidance: the extra quantity is a margin against poor control performance.) [e22]

### What if SCED were unavailable?

ERCOT's NPRR1282 analysis says the Regulation and RRS duration requirement should be changed from 15 to 30 minutes to reduce the risk of violating NERC BAL-001 if SCED is not available. [e30]

## Open items

- Resolved 2026-11-21: the five-second response requirement and the four-second LFC cycle are different parameters (response time versus signal frequency). [e15][e1]
- Regulation clearing prices for 2025: the OCR Figure 25 table row for Reg-Up is garbled (the 2025 value reads "-$2.97" beside legend text), so only the Reg-Down row is quoted; verify against the PDF figure.
- The values of V and W (ESREDP criteria) and X, Y, Z are posted on the ERCOT website and are not in the saved sources.
- Real-time Reg-Up and Reg-Down clearing prices (MCPCs) since RTC go-live are not quoted; the IMM's Appendix I figures were not legible enough to cite.
