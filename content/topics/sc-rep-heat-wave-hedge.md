---
id: sc-rep-heat-wave-hedge
name: "Scenario: REP Hedging a Heat Wave"
aliases: [REP heat wave hedge, retailer heat wave exposure, hedging summer load, heat wave case interview]
kind: scenario
domain: cases
level: 2
lenses: [retail, trading, portfolio, analyst]
as_of: 2026-11-18
links:
  - to: retail-hedging
    type: example-of
    note: The scenario applies the general ways LSEs manage price exposure, such as generation, PPAs, futures and the day-ahead market. [e2]
  - to: dam
    type: used-in
    note: Day-ahead purchases are the main ERCOT-administered hedge; the day-ahead market cleared 62% of real-time load in 2025. [e6]
  - to: rtm
    type: affects
    note: Any load not bought ahead settles at the real-time Load Zone price.
  - to: offer-cap
    type: related
    note: The HCAP of $5,000 per MWh bounds how high energy offers can go in a scarcity hour. [e9]
  - to: credit-tpe
    type: affects
    note: A REP's QSE must keep Financial Security at or above its Total Potential Exposure, which rises with real-time liabilities. [e12]
  - to: mass-transition
    type: related
    note: If a Market Participant's rights are revoked, ERCOT moves its ESI IDs to other retailers through a Mass Transition. [e18]
  - to: net-load
    type: related
    note: Most 2025 price spikes came in the 7 to 9 p.m. net load peak, which is where the open position matters most. [e10]
  - to: load-zone
    type: settles
    note: Load is charged at the Load Zone Settlement Point Price for its Adjusted Metered Load. [e4]
  - to: exchanges-ice-nodal
    type: related
    note: ICE lists a monthly ERCOT North 345 kV real-time peak futures contract that can be used for a fixed-price hedge. [e16]
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
    quote: "The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh."
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
---

## Definition

This scenario is about a retailer's exposure to real-time prices when a heat wave pushes its load above what it bought ahead. In 2024 the IMM found that only 17% of load was exposed to real-time prices on average, with the rest hedged by day-ahead positions including PTPs. [e1]

## How it works

Step 1, find the open position. The REP's QSE is charged or paid at the real-time Load Zone Settlement Point Price for its Adjusted Metered Load net of what it bought day-ahead, self-scheduled or bought in Energy Trades. [e4][e5] Load that shows up above those purchases settles at the real-time price.

Step 2, size the price risk. Energy offers can go up to the HCAP of $5,000 per MWh. [e9] In 2025 most price spikes came in the 7 to 9 p.m. net load peak as solar ramped down, so the evening hours matter more than the afternoon load peak. [e10] Heat-driven load can be large: ERCOT set an all-time demand record of 91,134 MW on July 22, 2026. [e11]

Step 3, list the hedging tools. The IMM says LSEs manage price exposure by owning generation, signing bilateral PPAs, using futures, or buying in the day-ahead market. [e2] The day-ahead market cleared 62% of real-time load in 2025, and PTP obligations are also used to hedge real-time exposure from transactions outside the ERCOT market. [e6][e7] On the exchange side, ICE lists a monthly cash-settled ERCOT North 345 kV real-time peak future, priced on the average of SPPs for hours ending 0700-2200. [e16][e17]

Step 4, know the limits of buying day-ahead. Day-ahead prices tend to reflect expected real-time prices, so buying day-ahead protects against volatility but not against a sustained rise in prices. [e3] In 2025 the average day-ahead premium was $1.17 per MWh, but the average absolute day-ahead to real-time difference was $12 per MWh. [e8]

Step 5, check credit. The QSE's Counter-Party must keep Financial Security at or above its Total Potential Exposure at all times. [e12] ERCOT's real-time liability estimate includes the Load Zone imbalance charge, estimated from 14-day or seven-day-old Load Ratio Share. [e13][e14] ERCOT warns at 90% of the requirement, may suspend a Counter-Party that does not meet the requirement, and after revocation moves the participant's ESI IDs through a Mass Transition. [e20][e15][e18]

## Key facts

- Only 17% of load was exposed to real-time prices on average in 2024. [e1]
- The day-ahead market cleared 62% of real-time load in 2025. [e6]
- The 2025 average day-ahead premium was $1.17 per MWh; the average absolute DA/RT difference was $12 per MWh. [e8]
- HCAP: $5,000 per MWh for energy offers. [e9]
- All-time demand record: 91,134 MW on July 22, 2026, HE19. [e11]
- ERCOT issues a credit warning when TPEA or TPES reaches 90% of the requirement. [e20]

## Say it like this

(Guidance) "Our risk in a heat wave is the load we did not buy ahead, because it settles at the real-time zonal price, and the worst hours are now the evening net-load peak. We close most of the gap in the day-ahead market or with bilateral or futures hedges, and we make sure our collateral can carry the larger real-time liability ERCOT will estimate."

## Common confusion

(Guidance) A day-ahead purchase fixes the price for the volume bought; it does not fix the price if the heat wave lasts long enough to lift day-ahead prices too. [e3] Another confusion is treating collateral as a back-office issue: higher load and prices raise the REP's estimated real-time liability, so a hedge that works on paper can still trigger a collateral call. [e13][e14]

## Questions

### Why is a REP's heat-wave risk mostly volume, not price?

Because the REP pays the real-time Load Zone price on its actual Adjusted Metered Load net of what it bought ahead, every MWh above the hedge is bought at whatever real-time prints. [e4][e5] A fixed-price hedge sized to normal weather leaves the extra heat-driven load open.

### Is buying everything day-ahead a full hedge?

No. It removes day-ahead to real-time volatility for the volume bought, but day-ahead prices tend to track expected real-time prices, so it gives little protection against a sustained rise. [e3] It also only covers the volume you forecast.

### What happens to the REP's collateral during the heat wave?

Its QSE's Total Potential Exposure rises with estimated real-time liabilities, which ERCOT estimates using recent Load Ratio Share. [e13][e14] The Counter-Party must keep Financial Security at or above TPE; ERCOT warns at 90% and may suspend rights if the requirement is not met. [e12][e20][e15]

### When should hedging activity rise?

The IMM expected hedging to increase in the months with the highest chance of extreme weather and shortage conditions, because unhedged loads are exposed to those shortages. [e19]

## Scenarios

### A heat wave is forecast for next week and your REP's load could run well above your hedges. How do you hedge, and what can go wrong?

- (Reasoning) Start by measuring the open position by hour: forecast load at the Load Zone minus day-ahead, bilateral and futures cover, with extra attention to the evening hours.
- Anything unhedged is settled at the real-time Load Zone price on Adjusted Metered Load. [e4][e5]
- The riskiest hours are the net-load peak: most 2025 price spikes came between 7 and 9 p.m. [e10]
- The tools the sources name are owned generation, bilateral PPAs, futures and day-ahead purchases; PTPs can hedge exposure from transactions outside the ERCOT market. [e2][e7]
- For a fixed-price block, the ICE ERCOT North real-time peak future settles monthly on the average of SPPs for hours ending 0700-2200 on weekdays, so it averages the evening spike hours with the rest of the peak block. [e16][e17][e21]
- (Reasoning) A hub-based future leaves basis between the hub and your Load Zone, and it fixes a flat volume, so it does not follow the heat-driven shape of your load.
- Buying day-ahead locks the volume bought but day-ahead prices move up with expected real-time prices, so a hedge bought after the forecast is out costs more. [e3]
- Suppose (illustrative) 500 MW of load is unhedged for three evening hours and real-time averages $2,000 per MWh: the cost is 500 x 3 x 2,000 = $3 million, against about $150,000 at $100 per MWh.
- Check collateral: TPE includes the estimated real-time liability, and ERCOT warns at 90% and may suspend a Counter-Party that falls short. [e13][e20][e15]
- (Reasoning) Close with a plan: hedge the forecast volume ahead of the event, keep a buffer for forecast error in the evening hours, and pre-arrange extra collateral rather than waiting for the call.

## Open items

- No saved source describes retail product structures (fixed-price, index, pass-through) or how retail contracts shift volume risk to customers.
- No source covers options, heat rate calls, weather derivatives or load-following contracts as REP hedges; these are left out.
- The ICE contract specification does not give liquidity, margin or how the contract is used by retailers.
- No 2025 figure for the share of load exposed to real-time prices was found in imm-som-2025; the 17% figure is for 2024.
- Deeper pass: the exact TPE formulas (table rows in np-16 Section 16.11.4.3) and how a heat wave changes TPE in practice.
