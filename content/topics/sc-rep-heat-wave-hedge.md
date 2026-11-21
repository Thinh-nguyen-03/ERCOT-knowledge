---
id: sc-rep-heat-wave-hedge
name: "Scenario: REP Hedging a Heat Wave"
aliases: [REP heat wave hedge, retailer heat wave exposure, hedging summer load, heat wave case interview]
kind: scenario
domain: cases
level: 2
lenses: [retail, trading, portfolio, analyst]
as_of: 2026-11-21
depth: deep
links:
  - to: retail-hedging
    type: example-of
    note: The scenario applies the general ways LSEs manage price exposure, such as generation, PPAs, futures and the day-ahead market. [e2]
  - to: dam
    type: used-in
    note: Buying in the day-ahead market is one way LSEs manage price exposure; the day-ahead market cleared 62% of real-time load in 2025. [e2][e6]
  - to: rtm
    type: affects
    note: The QSE's Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price. [e4]
  - to: offer-cap
    type: related
    note: Since RTC go-live the sources show a $5,000/MWh day-ahead cap and a $2,000/MWh real-time cap, while PUCT rule 25.509 still states a $5,000 HCAP. [e9][e23][e24]
  - to: credit-tpe
    type: affects
    note: A Counter-Party must keep Financial Security at or above its Total Potential Exposure at all times. [e12]
  - to: mass-transition
    type: related
    note: If a breaching Market Participant that is also an LSE has its rights revoked, ERCOT initiates a Mass Transition of its ESI IDs. [e18]
  - to: net-load
    type: related
    note: Most 2025 price spikes came in the 7 to 9 p.m. peak net load hours. [e10]
  - to: load-zone
    type: settles
    note: The Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price and includes the QSE's AML there. [e4][e5]
  - to: exchanges-ice-nodal
    type: related
    note: ICE lists an ERCOT North 345KV Real-Time Peak Fixed Price Future, a monthly cash-settled contract on peak hourly ERCOT prices. [e25][e16]
  - to: volumetric-risk
    type: example-of
    note: A heat wave is a volume problem for a REP because load above its purchases settles at the real-time Load Zone price. [e4][e5]
evidence:
  - id: e1
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR), discussion of Figure 8"
    quote: "Figure 8 shows that only 17% of the load was exposed to real-time prices on average in 2024, and the remainder of real-time load is hedged with positions from the day-ahead market, including PTPs."
  - id: e2
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e3
    source: imm-som-2024
    locator: "Section F, page 48 (OCR)"
    quote: "This type of forward hedging provides some protection against volatility and uncertainty associated with the real-time market, but it ultimately provides little protection against sustained elevations in prices because day-ahead prices in a well-performing market will tend to reflect the expected real-time prices."
  - id: e4
    source: np-06
    locator: "Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, paragraph (1)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point:"
  - id: e5
    source: np-06
    locator: "Section 6.6.3.2, paragraph (1)(g)"
    quote: "(g) Its AML at the Settlement Point excluding Non-WSL ESR Charging Load; plus"
  - id: e6
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The day-ahead market cleared 62% of real-time load in 2025."
  - id: e7
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, 1. Day Ahead Market Volume (OCR)"
    quote: "Participants also use PTP obligations scheduled in the day-ahead market to hedge congestion and to hedge exposure to real-time prices from transactions outside the ERCOT wholesale market."
  - id: e8
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "Key insights from about the ERCOT day-ahead market in 2025 include: • The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh."
  - id: e9
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(B)"
    quote: "The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e10
    source: imm-som-2025
    locator: "Review of Real-Time Market Outcomes, price spikes"
    quote: "As in 2024, most price spikes in 2025 occurred during the peak net load hours between 7 and 9 p.m., when solar production across the state ramped down for the day."
  - id: e11
    source: ercot-summer-2026-review
    locator: "Slide 4, Key Takeaway on 2026 peak load"
    quote: "On 7/22/2026, ERCOT set the all-time demand record at 91,134 MW during HE19. Demand response was observed during the peak hours."
  - id: e12
    source: np-16
    locator: "Section 16.11.1, ERCOT Creditworthiness Requirements for Counter-Parties, paragraph (1)"
    quote: "Each Counter-Party shall meet ERCOT’s creditworthiness standards as provided in this Section. A Counter-Party must, at all times, maintain its Financial Security at or above the amount of its Total Potential Exposure (TPE)."
  - id: e13
    source: np-16
    locator: "Section 16.11.4.3.2, Real-Time Liability Estimate, paragraph (1)"
    quote: "(1) ERCOT shall estimate RTL for an Operating Day as the sum of estimates for the following RTM Settlement charges and payments:"
  - id: e14
    source: np-16
    locator: "Section 16.11.4.3.2, paragraph (1)(b)"
    quote: "(b) Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, using 14-day or seven-day-old LRS for Load estimate;"
  - id: e15
    source: np-16
    locator: "Section 16.11.1, paragraph (1)"
    quote: "If at any time the Counter-Party does not meet ERCOT’s creditworthiness requirements, then ERCOT may suspend the Counter-Party’s rights under these Protocols until it meets those creditworthiness requirements."
  - id: e16
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Description"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e17
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Reference Price A, c) Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e18
    source: np-16
    locator: "Section 16.11.6.1.6(3)(b)"
    quote: "On revocation of some or all of the Market Participant’s rights or termination of the Market Participant’s agreements and on notice to the Market Participant and the Public Utility Commission of Texas (PUCT), ERCOT shall initiate a Mass Transition of the Market Participant’s ESI IDs pursuant to Section 15.1.3.1, Mass Transition Process, without the necessity of obtaining any order from or other action by the PUCT."
  - id: e19
    source: imm-som-2021
    locator: "Load exposure to real-time prices discussion"
    quote: "Unhedged loads would be vulnerable to any shortage conditions that may occur during the year, and it is therefore expected that hedging activity would increase during months with the highest likelihood of extreme weather and shortage conditions"
  - id: e20
    source: np-16
    locator: "Section 16.11.5, paragraph (4)"
    quote: "When either the Counter-Party’s TPEA or TPES as defined in Section 16.11.4, Determination and Monitoring of Counter-Party Credit Exposure, reaches 90% of its requirement, ERCOT shall use reasonable efforts to electronically issue a warning to the Counter-Party’s Authorized Representative and credit contact advising the Counter-Party that it should consider increasing its Financial Security."
  - id: e21
    source: ice-ercot-north-peak
    locator: "Contract Specifications, Reference Price A, b) Pricing Date"
    quote: "Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date"
  - id: e22
    source: np-06
    locator: "Section 6.6.3.2, paragraph (1)(a)-(c)"
    quote: "(a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus"
  - id: e23
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e24
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e25
    source: ice-ercot-north-peak
    locator: "Contract title"
    quote: "ERCOT North 345KV Real-Time Peak Fixed Price Future"
  - id: e26
    source: np-16
    locator: "Section 16.11.4.1(2), Determination of Total Potential Exposure for a Counter-Party"
    quote: "TPEA = Max [0, MCE, Max [0, ((1-TOA) * EAL _(q) + TOA * EAL _(t) + EAL _(a))]] + PUL"
  - id: e27
    source: np-16
    locator: "Section 16.11.4.3, Determination of Counter-Party Estimated Aggregate Liability, variable table, RTLE"
    quote: "Real-Time Liability Extrapolated—M1 multiplied by the sum of the net amount, with zero substituted for missing values, due to or from ERCOT by the Counter-Party in the 14 most recent Operating Days for which RTM Initial Statements are produced for Counter-Parties according to the ERCOT Settlement Calendar divided by 14."
  - id: e28
    source: np-16
    locator: "Section 16.11.4.3, variable table, M1"
    quote: "M1 = M1a + M1b—Multiplier for DALE and RTLE. Provides for forward risk during a Counter-Party termination upon default based upon the sum of the time period required for any termination upon default (M1a) and the time period required for a Mass Transition only (M1b). The M1a component is applicable to all Counter-Parties. The M1b component is applicable only to Counter-Parties representing any QSE associated with a LSE."
  - id: e29
    source: np-16
    locator: "Section 16.11.4.3, variable table, lrqrtle"
    quote: "Look-back period for RTM to find the maximum of RTLE for all QSEs represented by the Counter-Party if any of the QSEs represented by the Counter-Party represent either Load or generation."
  - id: e30
    source: np-16
    locator: "Section 16.11.4.3, parameter table (current values)"
    quote: "lrqrtle | Days | 40 from May 16 through Sep 15 (summer months)"
  - id: e31
    source: np-16
    locator: "Section 16.11.4.3.3, Forward Adjustment Factors, paragraph (1)"
    quote: "Forward adjustment factors are used to adjust TPEA based on electricity futures prices."
  - id: e32
    source: np-16
    locator: "Section 16.11.4.3.3, variable table, PRFAP"
    quote: "The average RTM price per MWh projected forward based on futures market prices."
  - id: e33
    source: np-16
    locator: "Section 16.11.5(6)(a)(i), Monitoring of a Counter-Party's Creditworthiness and Credit Exposure by ERCOT"
    quote: "Until 1500 on the second Bank Business Day from the date on which ERCOT delivered the Notice to increase its Financial Security if ERCOT delivered its Notice before 1500; or"
  - id: e34
    source: np-04
    locator: "Section 4.4.10, Credit Requirement for DAM Bids and Offers, paragraph (3)"
    quote: "ERCOT shall reject the QSE’s individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party’s credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable."
  - id: e35
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), pp. 2-3"
    quote: "In the RTM, the energy component of Locational Marginal Prices (LMPs) can exceed $2,000 due to the Ancillary Service Demand Curves (ASDCs). Allowing QSEs to submit higher energy bids into the DAM allows Market Participants to more effectively hedge when they expect scarcity conditions in Real-Time."
  - id: e36
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments, response to Question 4, p. 9"
    quote: "These make clear that at the current $2,000 SWCAP in the RTM, a four-day event accrues roughly $192,000 of exposure per exposed megawatt, converging the RTM SWCAP upward to the $5,000 DAM SWCAP level, which would raise that to approximately $480,000, a 150% increase, before any change in Market Participant behavior."
  - id: e37
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), response to Question 1(b), p. 2"
    quote: "ERCOT recommends that the current approach, in which the SWCAP in RTM is set at $2,000 and the SWCAP in DAM is set at the effective VOLL, be maintained. The use of different offer caps for DAM and RTM was a deliberate design decision reflected in design principles for RTC+B"
  - id: e38
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), real-time prices slide, Key Takeaway"
    quote: "Real-Time prices were lower in summer 2026 than 2024 and 2025 due to higher supply particularly during day light hours."
  - id: e39
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, net load hour slide, Key Takeaway"
    quote: "Due to increasing solar and load, the net load hour has shifted from HE 21 to HE 22 in the months of June and July."
  - id: e40
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, slide 4, Key Takeaway on 2026 peak load"
    quote: "The maximum reduction from cryptomining loads was about 3,299 MW and the estimated maximum Four Coincident Peak (4CP) reduction was about 492 MW. ERCOT estimates that the peak load would have been 94,861 MW if there was no reduction."
  - id: e41
    source: imm-som-2021
    locator: "Executive Summary, Winter Storm Uri"
    quote: "The extended shortage pricing created extreme financial outcomes for some market participants. This was particularly true for those exposed to day-ahead or real-time prices due to insufficient coverage through financial contracts or generators unable to operate during the storm to hedge this exposure."
  - id: e42
    source: imm-som-2023
    locator: "Executive Summary, Weather and demand discussion"
    quote: "We measure the impact weather has on electricity use by quantifying heating and cooling degree days – the amount by which the average daily temperatures are above or below 65 °F. Residential and commercial demand rises quickly as the number of cooling degree days grows because of the demand for air conditioning."
  - id: e43
    source: np-04
    locator: "Section 4.4.9.6, DAM Energy Bids, paragraph (1)"
    quote: "A QSE must submit any DAM Energy Bids by 1000 for the effective DAM."
  - id: e44
    source: imm-som-2025
    locator: "Market Operations chapter, net load forecast error (Figure 50 discussion)"
    quote: "By 2025, the average net load forecast error had declined to about 452 MW, down from more than 1,000 MW in 2023 and 2024. Yet forecasts continue to systematically under-forecast IRR generation and over-forecast load."
  - id: e45
    source: ercot-credit-faqs
    locator: "ERCOT Credit FAQs, consequences of paying an invoice or collateral request late"
    quote: "The TPE will be increased by 110% for the first instance of late payment over a rolling 12-month period; and 115% and 120% for the second and third instances, respectively."
---

## Definition

This scenario is about a retailer's exposure to real-time prices when a heat wave pushes its load above what it bought ahead. In 2024 the IMM found that only 17% of load was exposed to real-time prices on average, with the rest hedged by day-ahead positions including PTPs. [e1]

## How it works

Step 1, find the open position. The QSE's Energy Imbalance charge at a Load Zone is calculated at the Real-Time Settlement Point Price on amounts that include its Self-Schedules, DAM Energy Bids cleared and Energy Trades as buyer, less (among other terms) its AML at the Settlement Point. [e4][e22][e5] Load above those purchases is therefore left to settle at the real-time price. Heat drives the volume: the IMM measures weather's effect with cooling degree days and says residential and commercial demand rises quickly as they grow, because of air conditioning. [e42]

Step 2, size the price risk. Offer caps differ by market since RTC go-live: the Protocol parameter table lists a day-ahead HCAP (DASWCAP) of $5,000/MWh and a real-time HCAP (RTSWCAP) of $2,000/MWh, ERCOT says the SWCAP was reduced to $2,000/MWh from $5,000/MWh after RTC go-live on 12/5/2025, and PUCT rule 25.509 still states a $5,000 HCAP. [e23][e24][e9] ERCOT notes that the real-time energy component of LMPs can still exceed $2,000 because of the ASDCs, and recommends keeping the $2,000 real-time cap with the day-ahead cap at the effective VOLL. [e35][e37] In 2025 most price spikes came in the 7 to 9 p.m. peak net load hours as solar ramped down, and in June and July 2026 ERCOT saw the net load hour shift from HE 21 to HE 22. [e10][e39] ERCOT set an all-time demand record of 91,134 MW on July 22, 2026, and estimates it would have been 94,861 MW without the observed crypto and 4CP reductions. [e11][e40]

Step 3, list the hedging tools. The IMM says LSEs manage price exposure by owning generation, signing bilateral PPAs, using futures, or buying in the day-ahead market. [e2] The day-ahead market cleared 62% of real-time load in 2025, and PTP obligations are also used to hedge real-time exposure from transactions outside the ERCOT market. [e6][e7] DAM Energy Bids must be in by 1000 for the effective DAM, and ERCOT says the higher day-ahead cap lets participants hedge more effectively when they expect real-time scarcity. [e43][e35] On the exchange side, ICE lists a monthly cash-settled ERCOT North 345KV Real-Time Peak Fixed Price Future, priced on the average of SPPs for hours ending 0700-2200. [e25][e16][e17]

Step 4, know the limits of buying day-ahead. The IMM says day-ahead prices in a well-performing market tend to reflect expected real-time prices, so forward hedging gives some protection against real-time volatility but little against sustained elevated prices. [e3] In 2025 the average day-ahead premium was $1.17 per MWh, but the average absolute day-ahead to real-time difference was $12 per MWh. [e8] DAM bids are also credit-limited: ERCOT rejects individual bids whose credit exposure exceeds the Counter-Party's DAM credit limit. [e34]

Step 5, check credit. The QSE's Counter-Party must keep Financial Security at or above its Total Potential Exposure at all times. [e12] ERCOT's real-time liability estimate includes the Load Zone imbalance charge, estimated from 14-day or seven-day-old Load Ratio Share. [e13][e14] ERCOT warns at 90% of the requirement, may suspend a Counter-Party that does not meet the requirement, and, for a breaching participant that is an LSE, initiates a Mass Transition of its ESI IDs on revocation. [e20][e15][e18] If a call is made, the Counter-Party has until 1500 on the second Bank Business Day when ERCOT's notice went out before 1500. [e33]

## Formula

TPEA, the main collateral number for a REP's QSE, is the larger of zero, the Minimum Current Exposure (MCE), and the Estimated Aggregate Liability (EAL) terms, plus Potential Uplift (PUL). [e26]

Within EAL, the real-time piece is RTLE: M1 times the average daily net amount due to or from ERCOT over the 14 most recent Operating Days with RTM Initial Statements. [e27] M1 is a number of days of forward risk: the time to terminate a defaulting Counter-Party (M1a) plus, for a Counter-Party with a QSE serving an LSE, the time for a Mass Transition (M1b). [e28] EAL takes the maximum of RTLE (scaled by the forward adjustment factor) over a look-back period, which is 40 days from May 16 through September 15. [e29][e30]

The forward adjustment factor scales TPEA with electricity futures prices: RFAF is the projected real-time forward average price, built from futures for the next three weeks, divided by the historic real-time settled average price. [e31][e32]

## Key facts

- Only 17% of load was exposed to real-time prices on average in 2024. [e1]
- The day-ahead market cleared 62% of real-time load in 2025. [e6]
- The 2025 average day-ahead premium was $1.17 per MWh; the average absolute DA/RT difference was $12 per MWh. [e8]
- Offer caps: $5,000/MWh day-ahead and $2,000/MWh real-time in the Protocol table and per ERCOT since RTC go-live on 12/5/2025; PUCT rule 25.509 still states a $5,000 HCAP. [e23][e24][e9]
- ERCOT (September 2026): at the $2,000 real-time cap, a four-day scarcity event accrues roughly $192,000 of exposure per exposed MW. [e36]
- All-time demand record: 91,134 MW on July 22, 2026, HE19. [e11]
- Summer 2026 real-time prices were lower than in 2024 and 2025 because of higher supply, especially in daylight hours. [e38]
- RTLE look-back for TPE: 40 days from May 16 through September 15. [e30]
- ERCOT issues a credit warning when TPEA or TPES reaches 90% of the requirement; a late payment raises TPE to 110% for the first instance in a rolling 12 months. [e20][e45]

## Say it like this

(Guidance) "Our risk in a heat wave is the load we did not buy ahead, because it settles at the real-time zonal price, and the worst hours are now the evening net-load peak. We close most of the gap in the day-ahead market or with bilateral or futures hedges, and we make sure our collateral can carry the larger real-time liability ERCOT will estimate."

(Guidance) For the credit follow-up: "ERCOT's exposure formula looks back at our last two weeks of real-time bills and scales them by forward prices, so the collateral call lands during the heat wave, not after it."

(Guidance) The two channels to name: high real-time bills enter the 14-day average and stay in the summer look-back maximum, and rising forward prices push the forward adjustment factor up before the bills arrive. [e27][e30][e31]

## Common confusion

(Guidance) A day-ahead purchase fixes the price for the volume bought; it does not fix the price if the heat wave lasts long enough to lift day-ahead prices too. [e3] Another confusion is treating collateral as a back-office issue: ERCOT estimates real-time liability from RTM charges including the Load Zone imbalance charge, and warns the Counter-Party when exposure reaches 90% of its requirement. [e13][e14][e20]

(Guidance) "Record load" is not the same as "record prices". Summer 2026 set a demand record, yet ERCOT reports lower real-time prices than in 2024 and 2025 because of higher supply. [e11][e38] Size the hedge to the net-load hours, not the gross peak. [e39]

(Guidance) The $2,000 real-time cap is not a hard ceiling on what a REP pays: ERCOT says the energy component of LMPs can exceed it through the ASDCs. [e35]

## Questions

### Why is a REP's heat-wave risk mostly volume, not price?

Because the REP pays the real-time Load Zone price on its actual Adjusted Metered Load net of what it bought ahead, every MWh above the hedge is bought at whatever real-time prints. [e4][e5] A fixed-price hedge sized to normal weather leaves the extra heat-driven load open.

### Is buying everything day-ahead a full hedge?

No. The IMM says it gives some protection against real-time volatility, but because day-ahead prices in a well-performing market tend to reflect expected real-time prices, it gives little protection against sustained elevated prices. [e3] It also only covers the volume you forecast.

### What happens to the REP's collateral during the heat wave?

ERCOT estimates real-time liability for an Operating Day from RTM charges, including the Load Zone imbalance charge using 14-day or seven-day-old LRS for the load estimate. [e13][e14] The Counter-Party must keep Financial Security at or above TPE; ERCOT warns at 90% and may suspend rights if the requirement is not met. [e12][e20][e15]

### Why does the collateral requirement keep rising after the heat wave breaks?

RTLE averages the last 14 Operating Days with RTM Initial Statements, and EAL uses the maximum RTLE over the look-back, which is 40 days in summer, so expensive days keep counting after prices fall. [e27][e29][e30] (Reasoning) The requirement therefore lags the event, and a REP should plan collateral for weeks, not days.

### What if forward prices jump before the heat wave arrives?

The Real-Time Forward Adjustment Factor scales TPEA by projected forward prices from electricity futures relative to historic settled prices, so a jump in futures raises the requirement before any high real-time bill is settled. [e31][e32]

### What if the REP's hedge is its own gas plant and it trips?

The IMM's Uri finding is that extreme outcomes hit those exposed to day-ahead or real-time prices because of insufficient financial coverage or generators unable to operate to hedge the exposure. [e41] (Reasoning) A physical hedge only works if the unit runs, so the open position in a trip is the plant's output, not just the weather-driven extra load.

### When should hedging activity rise?

The IMM expected hedging to increase in the months with the highest chance of extreme weather and shortage conditions, because unhedged loads are exposed to those shortages. [e19]

### How big can a multi-day exposure get?

ERCOT's own illustration: at the $2,000 real-time cap a four-day event accrues roughly $192,000 of exposure per exposed MW, and about $480,000 at $5,000. [e36]

## Scenarios

### A heat wave is forecast for next week and your REP's load could run well above your hedges. How do you hedge, and what can go wrong?

- (Reasoning) Start by measuring the open position by hour: forecast load at the Load Zone minus day-ahead, bilateral and futures cover, with extra attention to the evening hours.
- Anything unhedged is settled at the real-time Load Zone price on Adjusted Metered Load. [e4][e5]
- The riskiest hours are the net-load peak: most 2025 price spikes came between 7 and 9 p.m., and in June and July 2026 the net load hour moved to HE 22. [e10][e39]
- The tools the sources name are owned generation, bilateral PPAs, futures and day-ahead purchases; PTPs can hedge exposure from transactions outside the ERCOT market. [e2][e7]
- For a fixed-price block, the ICE ERCOT North 345KV real-time peak future [e25] settles monthly on the average of SPPs for hours ending 0700-2200 on weekdays, so it averages the evening spike hours with the rest of the peak block. [e16][e17][e21]
- (Reasoning) A hub-based future leaves basis between the hub and your Load Zone, and it fixes a flat volume, so it does not follow the heat-driven shape of your load.
- Buying day-ahead locks the price for the volume bought, but the IMM says day-ahead prices in a well-performing market tend to reflect expected real-time prices, so it gives little protection against sustained elevated prices. [e3] Bids must be in by 1000, and any whose credit exposure exceeds the DAM credit limit are rejected. [e43][e34]
- Suppose (illustrative) 500 MW of load is unhedged for three evening hours and real-time averages $2,000 per MWh: the cost is 500 x 3 x 2,000 = $3 million, against about $150,000 at $100 per MWh.
- Check collateral: ERCOT estimates real-time liability from RTM charges including the Load Zone imbalance charge, warns at 90% of the requirement, and may suspend a Counter-Party that falls short. [e13][e20][e15] The forward adjustment factor can raise TPEA as soon as futures move. [e31]
- Forecast error is part of the volume risk: the IMM puts the 2025 average net load forecast error at about 452 MW and says forecasts systematically under-forecast IRR generation and over-forecast load. [e44]
- (Reasoning) Close with a plan: hedge the forecast volume ahead of the event, keep a buffer for forecast error in the evening hours, and pre-arrange extra collateral rather than waiting for the call.

### Variant: the heat wave comes, but prices stay low. Was the hedge a mistake?

- Summer 2026 set an all-time demand record, yet ERCOT reports real-time prices were lower than in 2024 and 2025 because of higher supply, particularly in daylight hours. [e11][e38]
- (Reasoning) A hedge bought at a premium that expires out of the money is the cost of insurance, not a mistake; judge it against the exposure it removed, such as ERCOT's $192,000 per MW four-day illustration at the real-time cap. [e36]
- (Reasoning) The lesson for sizing is the hours: hedge the evening net-load hours more heavily than the midday gross peak.
- Suppose (illustrative) the REP paid a $5 per MWh premium on 200 MW for 16 peak hours over five days: 200 x 16 x 5 x 5 = $80,000, which is the price of avoiding the tail described above.

## Open items

- No saved source describes retail product structures (fixed-price, index, pass-through) or how retail contracts shift volume risk to customers.
- No source covers options, heat rate calls, weather derivatives or load-following contracts as REP hedges; these are left out.
- The ICE contract specification does not give liquidity, margin or how the contract is used by retailers.
- No 2025 figure for the share of load exposed to real-time prices was found in imm-som-2025; the 17% figure is for 2024.
- Partly resolved 2026-11-21: the EAL, RTLE, M1 and forward adjustment factor definitions in np-16 Section 16.11.4 are now summarized; the MCE formula terms (T1-T6 multipliers) and the current value of M1b were not worked through, and no source shows a worked TPE change during an actual heat wave.
- PUCT rule 25.509 (effective 12/20/23) still states a $5,000 HCAP while the Protocols and ERCOT apply $2,000 in real time; the Project 59550 outcome is not in the saved sources.
