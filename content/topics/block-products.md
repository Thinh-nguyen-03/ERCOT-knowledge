---
id: block-products
name: Block Products (5x16, 2x16, 7x8, ATC)
aliases: [5x16, 2x16, 7x8, ATC, 7x24, peak, off-peak, time-of-use blocks, TOU blocks]
kind: product
domain: trading
level: 1
lenses: [trading, portfolio, structuring, congestion]
as_of: 2026-11-21
depth: deep
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
    note: The ICE contracts reference the ERCOT North 345KV Hub real-time price. [e8][e3][e4]
  - to: trading-hub
    type: related
    note: The ICE reference price is the ERCOT North 345KV Hub real-time price published by ERCOT. [e8]
  - to: shape-risk
    type: related
    note: A block covers only the hours defined for it, so hours outside the block are not covered by it. [e1]
  - to: ptp-obligation
    type: related
    note: The Protocols evaluate a PTP Obligation hourly, which is why a CRR block must carry the same MW in each hour. [e19][e1]
  - to: settlement-point
    type: related
    note: A CRR block is bid between a source Settlement Point and a sink Settlement Point. [e20]
  - to: heat-rate-call-option
    type: related
    note: ICE also lists an ERCOT heat rate contract with an off-peak schedule that mirrors the off-peak hours above. [e26]
  - to: forward-curve
    type: related
    note: Monthly peak and off-peak futures are the exchange instruments that price ERCOT North block hours forward. [e3][e4][e23]
  - to: qse
    type: related
    note: ERCOT's training material describes bilateral trades as QSE-to-QSE transactions that transfer settlement responsibility. [e31]
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
  - id: e8
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Reference Price A, (a) Description"
    quote: "\"ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME\" means that the price for a Pricing Date will be that day's Specified Price per MWh of electricity for delivery on the Delivery Date, stated in U.S. Dollars, published by the ERCOT"
  - id: e9
    source: ice-ercot-north-offpeak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, Description"
    quote: "A monthly cash settled Exchange Futures Contract based upon the mathematical average of daily prices calculated by averaging the off-peak hourly electricity prices published by ERCOT for the location specified in Reference Price A."
  - id: e10
    source: ice-ercot-north-offpeak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, Reference Price A (a)"
    quote: "ELECTRICITY-ERCOT-NORTH 345KV HUB-REAL TIME"
  - id: e11
    source: np-02
    locator: "Section 2.1, definition of On-Peak Hours"
    quote: "Hours ending in 0700 to 2200 CPT from Monday through Friday excluding NERC holidays."
  - id: e12
    source: ref-ercot-crr-training
    locator: "CRR Auction, 7x24 Block Bids in Monthly Auctions (ERCOT training, 2020 edition)"
    quote: "Treated as single bid across all three Time-of-Use blocks"
  - id: e13
    source: ref-ercot-crr-training
    locator: "CRR Auction, 7x24 example (ERCOT training, 2020 edition)"
    quote: "Month of February has total of 672 hours, including • 224 Off Peak hours • 128 Peak Weekend hours • 320 Peak Weekday hours"
  - id: e14
    source: ref-ercot-crr-training
    locator: "CRR Auction, 7x24 example (ERCOT training, 2020 edition)"
    quote: "The three time-of-use Clearing Prices for CRR A-B are: • $2 Off Peak • $3 Peak Weekend • $8 Peak Weekday"
  - id: e15
    source: ref-ercot-crr-training
    locator: "CRR Auction, 7x24 example (ERCOT training, 2020 edition)"
    quote: "Weighted average price for the three time-of-use periods is (224x$2 + 128x$3 + 320x$8) / 672 = $5.048"
  - id: e16
    source: ref-ercot-crr-training
    locator: "CRR Auction, 7x24 example (ERCOT training, 2020 edition)"
    quote: "Bid price was $6, so 7x24 Bid is awarded"
  - id: e17
    source: ref-ercot-crr-training
    locator: "CRR Auction, No 7x24 Block Bids in Long Term Auction Sequences (ERCOT training, 2020 edition)"
    quote: "No 7x24 Block Bids in Long Term Auction Sequences"
  - id: e18
    source: ref-ercot-crr-training
    locator: "CRR Auction Settlements example (ERCOT training, 2020 edition)"
    quote: "CRRAH1 is awarded on a PTP Option bid: 20 MWs • Peak WD (5x16) • Price of $5/MW • 320 hr in February"
  - id: e33
    source: ref-ercot-crr-training
    locator: "CRR Auction Settlements example (ERCOT training, 2020 edition)"
    quote: "For entire TOU block: $100 * 320 = $32,000"
  - id: e19
    source: np-07
    locator: "Section 7.3, paragraph (3)"
    quote: "PTP Obligations are evaluated hourly in each CRR Auction as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW)."
  - id: e20
    source: np-07
    locator: "Section 7.5.2.3, CRR Auction Bid Criteria, paragraph (1)(d)"
    quote: "The month or strip of consecutive months for which the block of CRRs is being bid, including time-of-use designation, which may include a 7x24 block in a CRR Monthly Auction but not in a CRR Auction held as part of a CRR Long-Term Auction Sequence;"
  - id: e21
    source: np-07
    locator: "Section 7.5.2.1, CRR Auction Offer Criteria, paragraph (1)(d)"
    quote: "The month, or strip of consecutive months, for which the block of CRRs is being offered, including time-of-use designation except that a 7x24 offer may not be designated;"
  - id: e22
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future (spec dated November 18, 2026), Contract Specifications"
    quote: "Cash settlement Contract Size 1 MW"
  - id: e23
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future (spec dated November 18, 2026), Contract Specifications"
    quote: "Listing Cycle Up to 50 consecutive monthly Contract Periods Last Trading Day The last Business Day of the Contract Period Final Settlement Average of Reference Price A Prices"
  - id: e24
    source: ice-ercot-north-peak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Peak Fixed Price Future, Final Payment Date"
    quote: "The sixth Clearing Organization business day following the Last Trading Day"
  - id: e25
    source: ice-ercot-north-offpeak
    locator: "ICE Futures U.S., ERCOT North 345KV Real-Time Off-Peak Fixed Price Future, Contract Specifications"
    quote: "Listing Cycle Up to 50 consecutive monthly Contract Periods Last Trading Day The last Business Day of the Contract Period"
  - id: e26
    source: ref-ice-ercot-heat-rate
    locator: "ICE ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract specification (dated November 21, 2026), Schedule"
    quote: "All off-peak hours for the applicable strip length referenced by the market for hours ending 0100-0600, 2300 and 2400 on business days and for hours ending 0100-2400 on weekends and NERC holidays"
  - id: e27
    source: ref-ice-ercot-heat-rate
    locator: "ICE ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract specification, Contract Size"
    quote: "Contract Size 50 MW per hour"
  - id: e28
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (January 2024), electricity contracts"
    quote: "Physical and financial electricity contracts may also specify peak or off-peak delivery, with the peak or off-peak hours defined by the contract and reflecting the North American Energy Standards Board (NAESB) contract definitions."
  - id: e29
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (January 2024), Financial Transmission Rights, Peak Type"
    quote: "FTRs can be purchased for either 16-hour on-peak blocks, 8-hour offpeak blocks or around-the-clock. Only PJM offers all three peak-type products."
  - id: e30
    source: ref-ercot-forward-markets-101
    locator: "Forward Markets 101 (2026), CRR Auction slide, Time-of-Use Blocks"
    quote: "Off-Peak (0100 – 0600) Peak Weekday (0700 – 2200) Peak Weekend (0700 – 2200) Off-Peak (2300 – 0000)"
  - id: e31
    source: ref-ercot-forward-markets-101
    locator: "Forward Markets 101 (2026), Bilateral Trades slide"
    quote: "Decentralized Forward Market • QSE-to-QSE transactions • Transfers settlement responsibility"
---

## Definition

In the ERCOT CRR auction, a block is a time-of-use (TOU) block having the same MW amount for each hour within the block. The Protocols auction CRRs in three one-month blocks: 5x16 (hours ending 0700-2200, Monday through Friday, excluding NERC holidays), 2x16 (hours ending 0700-2200, Saturday, Sunday and NERC holidays) and 7x8 (hours ending 0100-0600 and 2300-2400, every day). [e1] The Protocols also define "On-Peak Hours" as hours ending 0700 to 2200 CPT, Monday through Friday, excluding NERC holidays. [e11]

## How it works

The notation is days times hours: 5x16 is five weekdays of 16 hours, 2x16 is the weekend and holiday days of the same 16 hours, and 7x8 is the eight overnight hours on all seven days. The Protocols define the hour ranges directly. [e1] ERCOT's Forward Markets 101 training shows the same blocks as off-peak 0100-0600, peak weekday 0700-2200, peak weekend 0700-2200 and off-peak 2300-0000. [e30] Every CRR auction bid or PCRR nomination must name one of these TOU blocks. [e2] Because a PTP Obligation is evaluated hourly, the block's single MW amount applies to every hour in it. [e19][e1]

A 7x24 (around-the-clock) position is not a fourth auctioned block. In the CRR Monthly Auction only, one bid can cover all hours of the month as a linked offer across the three blocks. [e6] The bid criteria allow a 7x24 block in a CRR Monthly Auction but not in a CRR Auction held as part of a CRR Long-Term Auction Sequence (ERCOT's training slide carries the same rule), and the offer criteria say a 7x24 offer may not be designated. [e20][e17][e21] ERCOT's (2020 edition) training treats a 7x24 block bid as a single bid across all three TOU blocks and shows a worked example: with February's 672 hours split into 224 off-peak, 128 peak weekend and 320 peak weekday hours, and TOU clearing prices of $2, $3 and $8, the hour-weighted average is $5.048, so a $6 bid is awarded. [e12][e13][e14][e15][e16]

ICE uses the same split for its ERCOT North monthly futures. The peak future settles on the average of the peak hourly prices, with the specified price being the average of settlement point prices for hours ending 0700-2200 CPT. [e3][e5] The off-peak future averages hours ending 0100-0600 and 2300-2400 on weekdays and all hours on Saturdays, Sundays and NERC holidays. [e4]

## ERCOT context

The CRR auction rules and the ICE contracts line up on hours: the 0700-2200 window on weekdays (excluding NERC holidays) is the peak block, and the remaining hours form the off-peak block (the CRR rules split it into 2x16 and 7x8). [e1][e5][e4] The ICE peak window and pricing days match the Protocol definition of On-Peak Hours. [e5][e7][e11] The saved ICE specifications do not use the label "5x16" themselves; 5x16, 2x16 and 7x8 are the Protocols' CRR block names. [e1]

ICE contract mechanics (specifications dated November 18, 2026): the peak future is cash settled, with a contract size of 1 MW, listed for up to 50 consecutive monthly periods, last trading on the last Business Day of the Contract Period and final settlement at the average of the Reference Price A prices. [e22][e23] Final payment falls on the sixth Clearing Organization business day following the last trading day. [e24] The off-peak future's listing cycle and last trading day are the same. [e25]

Heat rate contracts use block hours too. ICE's ERCOT Panhandle Heat Rate 345kV Hub Off-Peak contract (specification dated November 21, 2026) has a contract size of 50 MW per hour and a schedule of all off-peak hours: hours ending 0100-0600, 2300 and 2400 on business days and 0100-2400 on weekends and NERC holidays. [e27][e26]

Beyond ERCOT's own definitions, FERC's primer says electricity contracts may specify peak or off-peak delivery, with the hours defined by the contract and reflecting NAESB contract definitions. [e28] In ERCOT's training, bilateral trades are described as a decentralized forward market of QSE-to-QSE transactions that transfer settlement responsibility. [e31] FERC's primer, writing about financial transmission rights in other RTOs, says FTRs can be bought as 16-hour on-peak blocks, 8-hour off-peak blocks or around-the-clock, and that only PJM offers all three. [e29]

Settlement of an awarded block is simple multiplication. ERCOT's training example prices a 20 MW Peak WD (5x16) PTP Option at $5/MW for 320 hours in February: $100 per hour, or $32,000 for the entire TOU block. [e18][e33]

## Key facts

- CRR TOU blocks are 5x16, 2x16 and 7x8, each in one-month strips. [e1]
- CRR bids and PCRR nominations must specify a TOU block. [e2]
- 7x24 exists only as a linked bid in the CRR Monthly Auction, not in Long-Term Auction Sequences. [e6][e20]
- Protocol "On-Peak Hours": hours ending 0700 to 2200 CPT, Monday through Friday, excluding NERC holidays. [e11]
- ICE's ERCOT North peak and off-peak futures are monthly and cash settled, referencing the ERCOT North 345KV Hub real-time price; contract size 1 MW. [e8][e3][e9][e10][e22]
- The peak average uses hours ending 0700-2200 CPT. [e5]
- ICE's ERCOT Panhandle heat rate contract (off-peak) is sized at 50 MW per hour. [e27]

## Say it like this

(Guidance) ERCOT's standard blocks split the week into the 16 hours ending 0700-2200 on weekdays (5x16), the same hours on weekends and holidays (2x16), and the eight hours ending 0100-0600 and 2300-2400 every day (7x8). [e1] Blocks of these are how CRRs are auctioned [e1], and ICE's peak future averages the 0700-2200 hours [e5] while its off-peak future averages the remaining hours. [e4]

## Common confusion

Off-peak is not one block in the CRR rules: it is the 2x16 weekend and holiday block plus the 7x8 overnight block, while ICE's off-peak future bundles those hours into one contract price. [e1][e4] Also 7x24 is not an auctioned block on its own; it is only a linked monthly bid. [e6] Finally, 5x16 and "peak" are the same weekday hours but 5x16 excludes the weekend 16-hour block, which is why ICE's peak contract is a weekday product. [e1][e7]

## Questions

### What hours are in a 5x16 block?

Hours ending 0700-2200, Monday through Friday, excluding NERC holidays. [e1]

### What does the ICE ERCOT North peak future settle against?

The average of the daily peak-hour prices published by ERCOT for the ERCOT North 345KV Hub real-time price, using hours ending 0700-2200 CPT. [e8][e3][e5]

### How is a 7x24 position bought in a CRR auction?

Only through a single block bid in the CRR Monthly Auction, which links the three TOU blocks. [e6]

### Why can't a 7x24 bid be placed in a Long-Term Auction Sequence?

The Protocols say a 7x24 block may be included in a CRR Monthly Auction but not in a CRR Auction held as part of a CRR Long-Term Auction Sequence; the saved sources do not give the reason. [e20]

### Is a 7x24 bid awarded if one block's price is above my bid?

(Guidance, from ERCOT's training example) It is judged against the hour-weighted average of the three TOU clearing prices, not each block separately: in the example a $6 bid cleared against a $5.048 weighted average. [e15][e16]

### What if you want to hedge weekend hours with an ICE future?

(Guidance) The peak future prices only Monday through Friday excluding NERC holidays, so weekend hours fall in the off-peak future, which averages all hours on Saturdays, Sundays and NERC holidays. [e7][e4]

## Scenarios

### You bid 20 MW of a PTP Option in the 5x16 block for February at $5/MW and win it

- The 5x16 block is hours ending 0700-2200 on weekdays, so the block covers 320 hours in the training example's February. [e1][e18]
- Payment is $5 times 20 MW per hour, or $100 per hour, and $32,000 for the block (ERCOT training example). [e18][e33]

## Open items

- ATC as a term for bilateral or exchange trading is not defined in the saved sources; only the CRR 7x24 linked bid is sourced.
- Resolved 2026-11-21: the ICE peak window equals the Protocol definition of On-Peak Hours; the labels 5x16 and 7x8 remain Protocol CRR block names that the saved ICE specifications do not use.
- The ERCOT Forward Markets 101 slide shows the overnight off-peak block as "2300 - 0000", while Protocol Section 7.3 says hours ending 2300-2400; the sources use different notations for the same hours.
- The ERCOT CRR training material is a 2020 edition; its worked examples were not checked against later Protocol revisions (Protocol text on 7x24 bids was checked).
- Deeper pass: bilateral block contract terms (such as ISDA, EEI or NAESB contract specifics beyond the FERC primer's one-sentence reference) are not in the saved sources.
- NPRR1288 appears in the saved Section 7.5.2 text as a pending replacement of bid and offer paragraphs (d); the replacement is not cited here and its effect on block rules is not stated beyond what the pending box shows.
