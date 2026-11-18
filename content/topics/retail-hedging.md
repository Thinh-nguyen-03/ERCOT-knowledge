---
id: retail-hedging
name: Retail Load Hedging
aliases: [retail hedging, load hedging, LSE hedging]
kind: concept
domain: trading
level: 2
lenses: [retail, portfolio, trading]
as_of: 2026-11-18
links:
  - to: rep
    type: related
    note: REPs are the retailers whose exposure to wholesale prices was tested in February 2021. [e5]
  - to: lse
    type: related
    note: The IMM describes how load-serving entities manage real-time price exposure. [e1]
  - to: ptp-obligation
    type: hedges
    note: PTP obligations scheduled in the day-ahead market are one of the positions that hedge real-time load. [e2]
  - to: dam
    type: related
    note: Day-ahead purchases are one way LSEs cover real-time price exposure. [e1]
  - to: winter-storm-uri
    type: example-of
    note: Inadequately hedged retailers were among the financial losers of the event. [e6]
  - to: crr
    type: related
    note: A CRR entitles the holder to be charged or to receive congestion rent when the grid is congested, which is a different risk from the energy price level. [e8]
evidence:
  - id: e1
    source: imm-som-2024
    locator: "Section F (Exposure of Load to Real-Time Prices), page 48 (OCR)"
    quote: "Instead, many load-serving entities (LSEs) manage price exposure through a variety of mechanisms, including owning generation, entering into bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy through the day-ahead market."
  - id: e2
    source: imm-som-2024
    locator: "Section F, page 48 (OCR), discussion of Figure 8"
    quote: "Figure 8 shows that only 17% of the load was exposed to real-time prices on average in 2024, and the remainder of real-time load is hedged with positions from the day-ahead market, including PTPs."
  - id: e3
    source: imm-som-2024
    locator: "Section F, page 48 (OCR)"
    quote: "This type of forward hedging provides some protection against volatility and uncertainty associated with the real-time market, but it ultimately provides little protection against sustained elevations in prices because day-ahead prices in a well-performing market will tend to reflect the expected real-time prices."
  - id: e4
    source: imm-som-2021
    locator: "Load exposure to real-time prices discussion"
    quote: "This determination of exposure is based solely on ERCOT-administered markets and does not include any bilateral or over-the-counter (OTC) index purchases."
  - id: e5
    source: ut-uri-timeline
    locator: "Section 3.4, Financial Fallout"
    quote: "The financial impacts on electricity retailers depend upon the degree to which their price risk was hedged and how service outages affected their obligations to provide energy during the event."
  - id: e6
    source: ut-uri-timeline
    locator: "Summary of financial losers"
    quote: "and load serving-entities (retail electric providers, municipal utility systems, and rural electric cooperatives) who were inadequately hedged."
  - id: e7
    source: imm-som-2021
    locator: "Load exposure to real-time prices discussion"
    quote: "Unhedged loads would be vulnerable to any shortage conditions that may occur during the year, and it is therefore expected that hedging activity would increase during months with the highest likelihood of extreme weather and shortage conditions"
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Congestion Revenue Right (CRR)"
    quote: "A financial instrument that entitles the holder to be charged or to receive compensation (i.e., congestion rent), depending on the instrument, when the ERCOT Transmission Grid is congested in the DAM or in Real-Time."
---

## Definition

In the IMM's description, retail hedging is how load-serving entities manage their exposure to real-time energy prices: by owning generation, entering bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy in the day-ahead market. [e1]

## How it works

Most load is not settled at real-time prices. The IMM reports that on average only 17% of load was exposed to real-time prices in 2024, with the rest of real-time load hedged by day-ahead market positions, including PTP obligations. [e2]

In its 2021 report the IMM's exposure measure was based solely on ERCOT-administered markets and did not include bilateral or over-the-counter index purchases. [e4] The saved 2024 text does not restate that method, so check whether the 17% figure uses the same basis.

## ERCOT context

The IMM cautions that day-ahead forward hedging protects against volatility and uncertainty but gives little protection against sustained high prices, because day-ahead prices in a well-performing market tend to reflect expected real-time prices. [e3]

In the February 2021 event, retailers' outcomes depended on how well their price risk was hedged and on how outages affected their obligations to provide energy. [e5] Load-serving entities that were inadequately hedged were named among the financial losers. [e6]

## Key facts

- 2024: on average 17% of load was exposed to real-time prices (IMM). [e2]
- Hedging tools the IMM lists for LSEs: owning generation, bilateral PPAs, futures, and day-ahead purchases. [e1]
- The IMM expects hedging activity to rise in months with the highest likelihood of extreme weather and shortage conditions. [e7]
- The IMM's 2021 exposure estimate excluded bilateral and OTC index purchases. [e4]

## Say it like this

A retailer's hedge is whatever covers its load against real-time prices: owned generation, bilateral PPAs, futures, or day-ahead positions. Day-ahead cover smooths volatility, but it does not shield against a sustained price rise.

## Common confusion

A CRR entitles the holder to be charged or paid congestion rent when the grid is congested [e8], which is different from covering the energy price level. A day-ahead purchase moves price risk forward but, per the IMM, does not remove the risk of generally high prices. [e3]

## Questions

### What share of ERCOT load was exposed to real-time prices in 2024?

On average 17%; the rest was hedged with day-ahead positions, including PTPs. [e2]

### Why does day-ahead hedging give limited protection in a scarcity year?

Day-ahead prices tend to reflect expected real-time prices, so locking them in protects against volatility but not against sustained elevations. [e3]

### What determined which retailers suffered most in February 2021?

How much of their price risk was hedged, and how outages affected their obligation to provide energy. [e5]

## Open items

- Deeper pass: no saved source describes retail supply contracts (fixed-price, index, load-following), shape or volumetric risk, or REP hedging policies; a retailer risk-management reference or REP filings would be needed.
- No saved source defines "retail hedging" as a term; the Definition paraphrases the IMM description of how LSEs manage price exposure.
- Whether PUCT REP financial or credit rules (puct-25-107, np-16) impose any hedging requirement was searched for and not found.
