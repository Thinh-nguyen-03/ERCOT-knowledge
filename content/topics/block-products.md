---
id: block-products
name: Block Products (5x16, 2x16, 7x8, ATC)
aliases: [5x16, 2x16, 7x8, ATC, 7x24, peak, off-peak, time-of-use blocks, TOU blocks]
kind: product
domain: trading
level: 1
lenses: [trading, portfolio, structuring, congestion]
as_of: 2026-11-18
links:
  - to: crr-auction
    type: used-in
    note: CRRs are auctioned in 5x16, 2x16 and 7x8 TOU blocks. [e1]
  - to: crr
    type: used-in
    note: Each CRR auction bid must name a TOU block. [e2]
  - to: exchanges-ice-nodal
    type: used-in
    note: ICE lists monthly ERCOT North futures for a peak block and an off-peak block. [e3][e4]
  - to: hb-north
    type: related
    note: The ICE contracts reference the ERCOT North 345KV Hub real-time price. [e3][e4]
  - to: trading-hub
    type: related
    note: ICE reference prices are published ERCOT hub settlement prices.
  - to: shape-risk
    type: related
    note: A fixed-price block covers only the hours in the block, so load outside it carries shape exposure.
evidence:
  - id: e1
    source: np-07
    locator: "Section 7.3, paragraph (5)"
    quote: "CRRs must be auctioned in the following Time Of Use (TOU) blocks (having the same MW amount for each hour within the block): (a) 5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips; (b) 2x16 blocks for hours ending 0700-2200, Saturday and Sunday, and NERC holidays in one-month strips; and (c) 7x8 blocks for hours ending 0100-0600 and hours ending 2300-2400 Sunday through Saturday, in one-month strips."
  - id: e2
    source: np-07
    locator: "Section 7.3, paragraph (6)"
    quote: "CRR Auction bids and Pre-Assigned Congestion Revenue Right (PCRR) nominations must specify a TOU block."
  - id: e3
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Description and Reference Price A"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e4
    source: ice-ercot-north-offpeak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, Reference Price A (c)"
    quote: "For each Monday through Friday, excluding NERC holidays, the average of SPPs for all hours ending 0100-0600, 2300-2400 CPT; for each Saturday, Sunday, and NERC holiday, the average of SPPs for all hours ending 0100-2400 CPT"
  - id: e5
    source: ice-ercot-north-peak
    locator: "Reference Price A (c) Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e6
    source: np-07
    locator: "Section 7.3, paragraph (7)"
    quote: "For the CRR Monthly Auction only, a single block bid may be submitted for all hours in a calendar month, which represents a linked-offer for all three TOU blocks described above in paragraph (5)."
  - id: e7
    source: ice-ercot-north-peak
    locator: "Reference Price A (b) Pricing Date"
    quote: "Each Monday through Friday, excluding NERC holidays, that prices are reported for the Delivery Date"
---

## Definition

In ERCOT a block product is a time-of-use (TOU) strip with the same MW in each hour of the block. The Protocols auction CRRs in three one-month blocks: 5x16 (hours ending 0700-2200, Monday through Friday, excluding NERC holidays), 2x16 (hours ending 0700-2200, Saturday, Sunday and NERC holidays) and 7x8 (hours ending 0100-0600 and 2300-2400, every day). [e1]

## How it works

The notation is days times hours: 5x16 is five weekdays of 16 hours, 2x16 is the weekend and holiday days of the same 16 hours, and 7x8 is the eight overnight hours on all seven days. The Protocols define the hour ranges directly. [e1] Every CRR auction bid or PCRR nomination must name one of these TOU blocks. [e2] In the CRR Monthly Auction only, one bid can cover all hours of the month as a linked offer across the three blocks, which is how a 7x24 (around-the-clock) position is expressed. [e6]

ICE uses the same split for its ERCOT North monthly futures. The peak future settles on the average of the peak hourly prices, with the specified price being the average of settlement point prices for hours ending 0700-2200 CPT. [e3][e5] The off-peak future averages hours ending 0100-0600 and 2300-2400 on weekdays and all hours on Saturdays, Sundays and NERC holidays. [e4]

## ERCOT context

The CRR auction rules and the ICE contracts line up on hours: the 0700-2200 window is the peak block, and the remaining hours form the off-peak block (the CRR rules split it into 2x16 and 7x8). [e1][e5][e4] The saved ICE specifications do not use the label "5x16" themselves. The peak future's pricing dates are Monday through Friday excluding NERC holidays. [e7]

## Key facts

- CRR TOU blocks are 5x16, 2x16 and 7x8, each in one-month strips. [e1]
- CRR bids and PCRR nominations must specify a TOU block. [e2]
- ICE's ERCOT North peak and off-peak futures are monthly and cash settled, referencing the ERCOT North 345KV Hub real-time price. [e3][e4]
- The peak average uses hours ending 0700-2200 CPT. [e5]
- A single-month block bid is allowed only in the CRR Monthly Auction. [e6]

## Say it like this

(Guidance) ERCOT's standard blocks split the week into the 16 daytime hours on weekdays (5x16), the same hours on weekends and holidays (2x16), and the eight overnight hours every day (7x8). Strips of these are how CRRs are sold, and ICE's peak and off-peak monthly futures follow the same hour windows.

## Common confusion

Off-peak is not one block in the CRR rules: it is the 2x16 weekend and holiday block plus the 7x8 overnight block, while ICE's off-peak future bundles those hours into one contract price. [e1][e4] Also 7x24 is not an auctioned block on its own; it is only a linked monthly bid. [e6]

## Questions

### What hours are in a 5x16 block?

Hours ending 0700-2200, Monday through Friday, excluding NERC holidays. [e1]

### What does the ICE ERCOT North peak future settle against?

The average of the daily peak-hour prices published by ERCOT for the ERCOT North 345KV Hub real-time price, using hours ending 0700-2200 CPT. [e3][e5]

### How is a 7x24 position bought in a CRR auction?

Only through a single block bid in the CRR Monthly Auction, which links the three TOU blocks. [e6]

## Open items

- ATC as a term for bilateral or exchange trading is not defined in the saved sources; only the CRR 7x24 linked bid is sourced.
- The saved ICE specifications do not use the labels 5x16 or 7x8, so the mapping of ICE peak to 5x16 is an inference from the hour windows.
- Deeper pass: bilateral block contract terms (such as ISDA or EEI contract specifics) are not in the saved sources.
