---
id: ptp-obligation
name: PTP Obligation
aliases: [PTP Obligation, Point-to-Point Obligation, PTP, PTP obligation bid, DAM PTP]
kind: product
domain: pricing
level: 1
lenses: [trading, congestion, analyst]
as_of: 2026-11-21
depth: deep
links:
  - to: crr
    type: is-a
    note: A PTP Obligation is a type of CRR that is evaluated in each CRR Auction and in the DAM. [e1]
  - to: dam
    type: part-of
    note: PTP Obligations are bid for and cleared in the DAM, then settled on the price difference between sink and source. [e2][e4]
  - to: congestion
    type: hedges
    note: The IMM describes a PTP as a scheduled flow from a source node to a sink node, valued on the price difference between those nodes. [e7]
  - to: dart-spread
    type: related
    note: A DAM-bought PTP pays the day-ahead spread and earns the real-time spread, so its profit is the difference. [e4][e5][e7]
  - to: virtual-bids
    type: contrasts-with
    note: Energy-only offers and bids may not be combined to mimic a PTP between electrically similar points. [e6]
  - to: settlement-point
    type: related
    note: Source and sink are Settlement Points. [e2]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Point-to-Point (PTP) Obligation"
    quote: "A type of CRR that entitles the holder to be charged or to receive compensation and is evaluated in each CRR Auction and DAM as the positive and negative power flows on all directional network elements created by the injection and withdrawal at the specified source and sink points of the quantity represented by the CRR bid or offer (MW)."
  - id: e2
    source: np-04
    locator: "Section 4.4.6, PTP Obligation Bids, paragraph (1)"
    quote: "A Point-to-Point (PTP) Obligation bid is a bid that specifies the source and sink, a range of hours, and a maximum price that the bidder is willing to pay (“Not-to-Exceed Price”)."
  - id: e3
    source: np-04
    locator: "Section 4.4.6, paragraph (2)"
    quote: "PTP Obligations that are bought in the Day-Ahead Market (DAM) must be settled based on the applicable Real-Time Settlement Point Prices."
  - id: e4
    source: np-04
    locator: "Section 4.6.3, Settlement for PTP Obligations Bought in DAM, paragraph (1)"
    quote: "ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e5
    source: np-07
    locator: "Section 7.9.2.1, Payments and Charges for PTP Obligations Settled in Real-Time, paragraph (2)"
    quote: "ERCOT shall pay or charge the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e6
    source: np-04
    locator: "Section 4.4.9.6.1, DAM Energy Bid Criteria, paragraph (3)"
    quote: "DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party."
  - id: e7
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, section D, Point-to-Point Obligations"
    quote: "A PTP represents a scheduled flow from a source node to a sink node. Its purchase cost equals the product of the day-ahead price difference between those nodes and the flow volume in MWh. The participant realizes its value in real time when the position is liquidated based on the real-time price difference between the same nodes."
  - id: e8
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, PTP Profitability"
    quote: "Figure 34 shows that PTPs remained profitable in 2025, receiving 10.9% more in real-time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024."
  - id: e9
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, 2. PTP Bid Volume"
    quote: "The volume of PTP bids39 has grown by 258% over the past decade, affecting both PTP profitability and day-ahead market performance."
  - id: e10
    source: imm-som-2025
    locator: "Recommendation 2020-4: Implement a Point-to-Point Obligation Bid Fee"
    quote: "Over the past decade, the day-ahead market has experienced numerous delays in solving and posting results. ERCOT has identified the large and growing volume of PTP obligation bids as a key contributor to these delays."
  - id: e11
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, 3. PTP Bid Fees"
    quote: "In Recommendation 2020-4, we recommend that ERCOT impose a small fee on PTP bids to discourage uncompetitive bids that are extremely unlikely to clear."
  - id: e12
    source: np-04
    locator: "Section 4.4.6, PTP Obligation Bids, paragraph (3)"
    quote: "A PTP Obligation with Links to an Option is held to be reflective of the Non-Opt-In Entity’s (NOIE’s) PTP Option if the source and sink pairs on both the NOIE’s PTP Obligation and the NOIE’s PTP Option are the same, and the MWs of the NOIE’s PTP Obligations are less than or equal to the number of MWs of the NOIE’s PTP Option. There shall be no payment for PTP Obligations with Links to an Option acquired in the DAM."
  - id: e13
    source: np-07
    locator: "Section 7.9.2.1, paragraph (1)"
    quote: "ERCOT shall pay the Qualified Scheduling Entity (QSE) of each cleared PTP Obligation with links to an Option the positive difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e14
    source: np-04
    locator: "Section 4.4.6.1, PTP Obligation Bid Criteria, paragraph (2)"
    quote: "If the PTP Obligation bid is for more than one PTP Obligation (which is one MW for one hour), the block bid must: (a) Include the same number of PTP Obligations in each hour of the block; (b) Be for PTP Obligations that have the same source and sink Settlement Points; and (c) Be for contiguous hours."
  - id: e15
    source: np-04
    locator: "Section 4.4.6.1, paragraphs (3) and (9)"
    quote: "A PTP Obligation bid shall not contain a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points."
  - id: e16
    source: np-02
    locator: "Section 2.1, definition of Electrically Similar Settlement Points"
    quote: "Two or more distinct Settlement Points that are either mapped to the same electrical location in a market model or are mapped to locations that are connected by a transmission element with a reactance of less than 0.0005 per unit."
  - id: e17
    source: np-04
    locator: "Section 4.4.6.1, paragraph (9)"
    quote: "The minimum amount for each PTP Obligation with Links to an Option is one-tenth of one MW. The minimum amount for each PTP Obligation bid is one MW."
  - id: e18
    source: np-04
    locator: "Section 4.4.6.1, paragraph (5) (text in effect; an NPRR918 replacement is shown as pending in the same section)"
    quote: "For each NOIE or QSE representing NOIEs that designated PTP Obligations with Links to an Option, the total of each hourly MW quantity designated to be settled in Real-Time as a PTP Option may not exceed the lesser of: (a) 110% of that NOIE’s peak Load forecast for the Operating Day; or (b) 125% of the NOIE’s hourly Load forecast for the Operating Day."
  - id: e19
    source: np-04
    locator: "Section 4.4.6.2, PTP Obligation Bid Validation, paragraph (1) (text in effect; an NPRR918 replacement is shown as pending)"
    quote: "A validated PTP Obligation bid is a bid that ERCOT has determined meets the criteria listed in Section 4.4.6.1, PTP Obligation Bid Criteria, with the exception of paragraphs (3), (4), (5) and (6). Bids that do not meet the criteria in paragraph (3) of Section 4.4.6.1 will not be awarded in the DAM."
  - id: e20
    source: np-04
    locator: "Section 4.4.6.2, paragraph (3)"
    quote: "As soon as practicable, ERCOT shall notify each QSE through the Messaging System of any of its PTP Obligation bids that are invalid. The QSE may correct and resubmit any invalid PTP Obligation bid within the appropriate market timeline."
  - id: e21
    source: np-04
    locator: "Section 4.4.6.3, paragraph (1)"
    quote: "A bid for a PTP Obligation with Links to an Option will not be considered eligible for award for an Operating Hour if it sources at a Resource Node where a Generation Resource or Energy Storage Resource (ESR) has a COP Resource Status of:"
  - id: e22
    source: np-04
    locator: "Section 4.4.6.3, paragraph (3)"
    quote: "In order for ERCOT to award a bid for a PTP Obligation with Links to an Option under this section for an upcoming year, by October 1 of the prior year a NOIE must have provided ERCOT with an attestation that the Generation Resource or ESR for the Resource Node where the bid is sourced is owned or controlled by the NOIE, or has a contractual commitment for capacity and/or energy with the NOIE."
  - id: e23
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (12)"
    quote: "PTP Obligation bids shall not be awarded where the DAM clearing price for the PTP Obligation is greater than the PTP Obligation bid price plus $0.01/MW per hour."
  - id: e24
    source: np-04
    locator: "Section 4.5.1, paragraph (4)(D) (DAM Clearing Process, block bids)"
    quote: "Block DAM Energy Bids, DAM Energy-Only Offers, and PTP Obligation bids – blocks will not be cleared unless the entire time and/or quantity block can be awarded. Because quantity block bids and offers cannot set the Settlement Point Price, a quantity block bid or offer may clear in a manner inconsistent with the bid or offer price for that block."
  - id: e25
    source: np-04
    locator: "Section 4.4.10, Credit Requirement for DAM Bids and Offers, paragraph (6)(d)(i)-(ii)"
    quote: "That have a bid price greater than zero, the sum of the quantity of the bid multiplied by the bid price, plus the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid."
  - id: e26
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(d)(ii)"
    quote: "That have a bid price less than or equal to zero, the u^(th) percentile of the hourly positive price difference between the source Real-Time Settlement Point Price minus the sink Real-Time Settlement Point Price over the previous 30 days multiplied by the quantity of the bid."
  - id: e27
    source: np-04
    locator: "Section 4.4.10, paragraph (6)(d)(iii)"
    quote: "Each tenth of a MW quantity (0.1 MW) of an expiring CRR for a Counter-Party can provide credit reduction for only one-tenth of a MW (0.1 MW) of a PTP Obligation bid for that Counter-Party."
  - id: e28
    source: np-04
    locator: "Section 4.4.10, paragraph (3)"
    quote: "ERCOT shall reject the QSE’s individual bids and offers whose credit exposure, as calculated in item (6) below, exceeds the Counter-Party’s credit limit for DAM participation as described in items (1) and (2) above, and shall notify the QSE through the MIS Certified Area as soon as practicable."
  - id: e29
    source: np-04
    locator: "Section 4.6.3, variable table, DAOBLPR"
    quote: "Day-Ahead Obligation Price per pair of source and sinkThe DAM clearing price of a PTP Obligation bid with the source j and the sink k, for the hour."
  - id: e30
    source: np-04
    locator: "Section 4.6.3, paragraph (1), formula"
    quote: "DARTOBLAMT _(q, (j, k)) = DAOBLPR _((j, k)) ^(*) RTOBL _(q, (j, k))"
  - id: e31
    source: np-07
    locator: "Section 7.9.2.1, paragraph (2), formula"
    quote: "RTOBLAMT _(q, (j, k)) = (-1) * RTOBLPR _((j, k)) * RTOBL _(q, (j, k))"
  - id: e32
    source: np-07
    locator: "Section 7.9.2.1, paragraph (3), definition of RTOBLPR"
    quote: "RTOBLPR _((j, k)) = [](RTSPP _(k, i) – RTSPP _(j, i)) / 4"
  - id: e33
    source: np-07
    locator: "Section 7.9.2.1, variable table, RTOBLPR"
    quote: "Real-Time Obligation Price—The Real-Time price of the PTP Obligation, for the hour."
  - id: e34
    source: np-07
    locator: "Section 7.9.2.1, paragraph (3)"
    quote: "In the event that ERCOT is unable to execute the DAM, ERCOT shall pay or charge the owner of each PTP Obligation based on the difference in Real-Time Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e35
    source: ercot-crr-handbook
    locator: "Section 2.6, CRR Hedge Types (Obligations and Options)"
    quote: "A PTP Obligation allows negative revenue values, meaning that it is possible for an AH to owe ERCOT money depending on the results in an applicable DAM."
  - id: e36
    source: ercot-crr-handbook
    locator: "Section 2.6, CRR Hedge Types (Obligations and Options)"
    quote: "A PTP Option, on the other hand, does not allow negative revenue values and therefore does not have the same DAM payout risk."
  - id: e37
    source: ref-ercot-crr-training
    locator: "Slide 29, Day Ahead Market PTP Obligations"
    quote: "• Purchased at DAM price spread • Settled at Real-Time price spread"
  - id: e38
    source: imm-som-2025
    locator: "page 77 (OCR), Figure 34: Point-to-Point Obligation Charges and Revenues 2021-2025 ($ Millions), Real-Time Revenue row"
    quote: "Real-Time Revenue $1,563 $2,162 $1,866 $1,799 $2,169"
  - id: e39
    source: imm-som-2025
    locator: "page 77 (OCR), Figure 34, Day-Ahead Charge row"
    quote: "Day-Ahead Charge $1,113. $1,798 $1,613 $1,674 $1,956"
  - id: e40
    source: imm-som-2025
    locator: "page 78 (OCR), Day-Ahead Market Performance, 2. PTP Bid Volume"
    quote: "Higher bid volumes lead to clearing prices that more closely reflect real-time congestion, reducing the net value of awarded PTPs and limiting opportunities for profit."
  - id: e41
    source: imm-som-2025
    locator: "page 78 (OCR), Day-Ahead Market Performance, 2. PTP Bid Volume"
    quote: "There were three late DAM publications in 2025, up from only one in 2024, but still few enough that they are not an immediate concern."
  - id: e42
    source: imm-som-2025
    locator: "page 79 (OCR), Day-Ahead Market Performance"
    quote: "ERCOT has sought to manage this situation by capping the volume of PTP bids each counterparty can submit. However, PTP traders can evade this cap by working across an arbitrary number of counterparties."
  - id: e43
    source: imm-som-2025
    locator: "page 79 (OCR), Day-Ahead Market Performance, 3. PTP Bid Fees"
    quote: "The Congestion Management Working Group (CMWG) is considering two options. The first would place a fee on all PTP obligation bids, while the second would charge a fee only on unawarded PTP bids that do not meet certain threshold criteria."
  - id: e44
    source: imm-som-2025
    locator: "page 79 (OCR), Day-Ahead Market Performance, 3. PTP Bid Fees"
    quote: "The fee should be small enough not to deter bids that have a reasonable probability of clearing and that therefore contribute liquidity to the day-ahead market and promote efficient price formation."
  - id: e45
    source: imm-som-2024
    locator: "page 80 (OCR), Day-Ahead Market Performance, PTP profitability (2024 report)"
    quote: "Figure 33 shows that PTPs remained profitable in 2024, paying 7.8% more in real-time than their day-ahead purchase cost."
  - id: e46
    source: imm-som-2023
    locator: "page 71 (OCR), Day-Ahead Market Performance, PTP obligations as hedges (2023 report)"
    quote: "PTP obligations are financial transactions purchased in the day-ahead market. Although PTP obligations do not themselves involve the direct supply of energy, a PTP obligation allows a participant to, in effect, buy the network flow from one location to another. When coupled with a self-committed generating resource, the PTP obligation allows a participant to serve its load while avoiding the associated real-time exposure."
  - id: e47
    source: imm-som-2023
    locator: "page 74 (OCR), Day-Ahead Market Performance, C. Point-to-Point Obligations (2023 report)"
    quote: "A participant that owns a CRR can use its CRR proceeds from the day-ahead market to buy a PTP obligation between the same two points to transfer its hedge to real-time."
  - id: e48
    source: np-04
    locator: "Section 4.5.1, paragraph (5) (DAM Clearing Process; text in effect refers to CRRs)"
    quote: "ERCOT shall determine the appropriate Load distribution factors to allocate offers, bids, and source and sink of CRRs at a Load Zone across the energized power flow buses that are modeled with Load in that Load Zone."
---

## Definition

A Point-to-Point (PTP) Obligation is a type of CRR that entitles the holder to be charged or to receive compensation, based on the power flows created by an injection at a source and a withdrawal at a sink. [e1] A PTP Obligation bid specifies the source and sink, a range of hours, and a maximum price the bidder will pay, the Not-to-Exceed Price. [e2]

## How it works

A QSE buys PTP Obligations in the DAM by submitting bids. [e2][e3] A bid must come from a QSE and, per Section 4.4.6.1, names the source and sink Settlement Points, the first and last hour, the MW quantity and the Not-to-Exceed Price in dollars per MW per hour. A block bid for more than one PTP Obligation (one MW for one hour) must have the same MW in each hour, the same source and sink, and contiguous hours. [e14] The minimum amount for each PTP Obligation bid is one MW. [e17]

Clearing: ERCOT does not award a PTP Obligation bid where the DAM clearing price for the PTP Obligation is greater than the bid price plus $0.01/MW per hour. [e23] Block bids are all-or-nothing, so a block can clear at a price inconsistent with its bid price because quantity blocks cannot set the Settlement Point Price. [e24] A load zone can be a source or sink; ERCOT spreads Load Zone source and sink quantities across the energized power flow buses modeled with Load in that zone using Load distribution factors (the text in effect speaks of CRRs generally). [e48]

Settlement has two legs. First the DAM leg: ERCOT pays or charges a QSE for a cleared PTP Obligation bid the difference in DAM Settlement Point Prices between sink and source. [e4] The Day-Ahead Obligation Price in the formula is the DAM clearing price of the PTP Obligation bid for that source and sink and hour, and the DAM amount is that price times the MW. [e29][e30] Second the real-time leg: ERCOT pays or charges the QSE of each PTP Obligation acquired in the DAM the difference in Real-Time Settlement Point Prices between sink and source. [e5][e3] The real-time amount is the Real-Time Obligation Price times the MW, multiplied by (-1). [e31] The ERCOT training deck summarises it as purchased at the DAM price spread and settled at the Real-Time price spread. [e37]

The IMM's plain statement of the economics: the purchase cost is the day-ahead price difference times the flow volume in MWh, and its value is realized in real time when the position is liquidated at the real-time price difference between the same nodes. [e7] Because the real-time leg carries a (-1) factor in the Protocol formula while the IMM says the holder realizes the real-time spread, the two legs net to the real-time spread less the day-ahead spread; the sign convention of the "pay or charge" wording is not stated in so many words in the Protocols. [e31][e7]

## Formula

Day-ahead leg (Protocol Section 4.6.3): the DAM amount for a QSE, source j and sink k for the hour is DAOBLPR times RTOBL, with DAOBLPR being the DAM Settlement Point Price at the sink minus the DAM Settlement Point Price at the source. [e30][e4] RTOBL is the total MW of the QSE's PTP Obligation bids cleared in the DAM and settled in real time for that pair and hour, and the net hourly total for a QSE is the sum over all its source and sink pairs. [e30]

Real-time leg (Protocol Section 7.9.2.1): RTOBLAMT = (-1) * RTOBLPR * RTOBL, where RTOBLPR is the Real-Time Obligation Price for the hour. [e31][e33] RTOBLPR is built from the sink minus source Real-Time Settlement Point Prices of the 15-minute Settlement Intervals i in the hour, divided by 4 (that is, the average of the four 15-minute spreads). [e32]

## ERCOT context

The IMM reports that PTPs remained profitable in 2025, receiving 10.9% more in real time than their day-ahead purchase cost, up from a 7.5% profit margin in 2024, which ended a multi-year trend of declining profitability. [e8] The IMM's Figure 34 (OCR, in $ millions, years 2021 to 2025 in order) shows 2025 day-ahead charges of $1,956 and real-time revenue of $2,169. [e39][e38] The IMM's 2024 report gave the 2024 margin as 7.8% (see Open items). [e45]

The IMM says higher bid volumes lead to clearing prices that more closely reflect real-time congestion, which reduces the net value of awarded PTPs and limits profit. [e40] PTP bid volume has grown 258% over the past decade (IMM 2025). [e9] ERCOT has identified that volume as a key contributor to day-ahead delays in solving and posting results. [e10] In 2025 there were three late DAM publications, up from one in 2024, which the IMM does not regard as an immediate concern. [e41] ERCOT has tried to manage volume by capping the PTP bids each counterparty can submit, and the IMM says traders can evade the cap by working across many counterparties. [e42]

The IMM recommends a small fee on PTP bids (Recommendation 2020-4) to discourage uncompetitive bids that are extremely unlikely to clear, small enough not to deter bids with a reasonable chance of clearing. [e11][e44] In its 2025 report the IMM says the Congestion Management Working Group (CMWG) is considering two options: a fee on all PTP obligation bids, or a fee only on unawarded bids that fail threshold criteria. [e43]

Who uses PTPs: the IMM's 2023 report says a PTP lets a participant buy the network flow between two locations, and combined with a self-committed generator it lets the participant serve load while avoiding real-time exposure. [e46] A CRR owner can use its CRR proceeds from the DAM to buy a PTP between the same two points to carry its hedge into real time. [e47]

## PTP Obligations with Links to an Option (NOIEs)

A PTP Obligation with Links to an Option is reflective of a NOIE's PTP Option if the source and sink pairs of the obligation and the option are the same and the obligation MW do not exceed the option MW; no payment is made for such obligations acquired in the DAM. [e12] They are settled as if they were a PTP Option. [e13] In real time ERCOT pays the QSE only the positive difference between sink and source Real-Time Settlement Point Prices for them. [e13] The minimum amount for each is one-tenth of one MW. [e17] The hourly MW designated to settle as a PTP Option may not exceed the lesser of 110% of the NOIE's peak Load forecast for the Operating Day or 125% of its hourly Load forecast (current text; NPRR918 replacement wording is shown as pending). [e18]

Award eligibility: such a bid is ineligible for an Operating Hour if it sources at a Resource Node where a Generation Resource or ESR has a COP Resource Status of OUT, or OFF without the valid offers listed in the Protocol. [e21] For an upcoming year, the NOIE must have given ERCOT by October 1 of the prior year an attestation that the Resource is owned or controlled by the NOIE or has a contractual commitment with it. [e22]

## Bid validation and credit

A validated bid meets the Section 4.4.6.1 criteria except paragraphs (3), (4), (5) and (6), and bids that fail paragraph (3), the ban on electrically similar source and sink points, will not be awarded. [e19][e15] Electrically Similar Settlement Points are mapped to the same electrical location or connected by a transmission element with reactance under 0.0005 per unit. [e16] ERCOT notifies the QSE of invalid bids and the QSE may correct and resubmit within the market timeline. [e20]

DAM credit: ERCOT rejects individual bids whose credit exposure exceeds the Counter-Party's DAM credit limit. [e28] For a PTP Obligation bid with a price above zero, exposure is quantity times bid price plus the u-th percentile of the hourly positive source-minus-sink real-time price difference over the previous 30 days times quantity; for a bid price at or below zero, only the percentile term applies. [e25][e26] Expiring CRRs can reduce exposure, 0.1 MW of expiring CRR for 0.1 MW of PTP bid. [e27]

## Key facts

- A PTP Obligation can produce a charge or a payment; the CRR Handbook says a holder may owe ERCOT money, unlike a PTP Option. [e1][e35][e36]
- DAM leg: sink minus source DAM Settlement Point Price times MW. Real-time leg: (-1) times the average of the four 15-minute sink-minus-source real-time spreads times MW. [e30][e31][e32]
- Minimum PTP Obligation bid is 1 MW; with Links to an Option it is 0.1 MW. [e17]
- Bids are not awarded where the clearing price exceeds the bid price plus $0.01/MW per hour. [e23]
- 2025: PTPs received 10.9% more in real time than their day-ahead cost; 2024 margin 7.5% per the 2025 report. [e8]
- PTP bid volume up 258% over the past decade (IMM 2025). [e9]
- The IMM's Recommendation 2020-4 is a small fee on PTP bids; CMWG options were under discussion in the 2025 report. [e11][e43]

## Example

Suppose a QSE buys 10 MW for one hour from A to B and the DAM clears the spread at $4. By the IMM's description the cost is $4 times 10 MWh, or $40, and if the average real-time spread comes out at $7 the position is liquidated for $70, a $30 gain. If real time came out at $2 it would lose $20. [e7] (Illustrative numbers.)

## Say it like this

A PTP Obligation is a day-ahead position between two points: you pay the day-ahead price spread and collect the real-time spread, so you are really trading whether congestion between the points is larger in real time than the day-ahead market priced it. [e7][e37] It was profitable in 2025 in aggregate, and the growing number of bids is a key contributor to day-ahead delays. [e8][e10]

## Common confusion

A PTP Obligation can lose money: it can produce a charge as well as a payment, whereas a PTP Option does not allow negative revenue. [e1][e35][e36] Do not confuse it with a virtual: a PTP is a two-location spread, while energy-only offers and energy bids are separate DAM instruments that may not be combined to create the net effect of one PTP between electrically similar Settlement Points. [e2][e6] A PTP Obligation with Links to an Option is modeled as an obligation but settles like an option. [e12][e13] A PTP Obligation bought in the DAM is not the same as a CRR bought in an auction, though a CRR owner can use CRR proceeds to buy a PTP on the same path. [e47]

## Questions

### How is a DAM PTP Obligation settled?

In two legs. The QSE is paid or charged the DAM sink-minus-source price difference, and then paid or charged the real-time sink-minus-source difference. [e4][e5] The IMM describes the cost as the day-ahead price difference times the volume, with value realized in real time at the real-time difference. [e7]

### Why does the IMM want a PTP bid fee?

Because PTP bid volume has grown a lot and ERCOT sees it as a key contributor to DAM delays, and the fee is meant to discourage uncompetitive bids that are extremely unlikely to clear. [e9][e10][e11] The IMM says the per-counterparty volume cap can be evaded across counterparties. [e42]

### Why has PTP profitability declined as more participants bid?

The IMM says higher bid volumes make day-ahead clearing prices reflect real-time congestion more closely, which reduces the net value of awarded PTPs. [e40] Profit still rose to 10.9% in 2025 from 7.5% in 2024, ending the multi-year decline. [e8]

### What if ERCOT cannot run the DAM?

PTP Obligation owners are paid or charged based on the real-time sink-minus-source price difference, so the day-ahead leg drops out. [e34]

### What is the difference between a PTP Obligation and a PTP Option?

An obligation can produce a charge, so the holder may owe ERCOT money, while an option does not allow negative revenue. [e35][e36]

### Why can a PTP bid with a high Not-to-Exceed Price still not clear?

It is not awarded if the clearing price exceeds its bid price plus $0.01/MW per hour, and a block bid clears only if the whole block can be awarded. [e23][e24]

### How do credit limits affect PTP bidding?

Each PTP bid adds credit exposure that must fit within the Counter-Party's DAM credit limit, otherwise ERCOT rejects it. The exposure rises with bid price and with the 30-day historical positive source-minus-sink real-time spread, and expiring CRRs on the same path reduce it. [e25][e26][e27][e28]

## Scenarios

### A load-serving QSE with a CRR from a Resource Node to a Load Zone wants the hedge to cover real time

- The IMM says a CRR owner can use its CRR proceeds from the DAM to buy a PTP between the same two points, carrying the hedge into real time. [e47]
- The bid can be offset against expiring CRRs for credit, up to the CRR quantity on the same source and sink and hour. [e27]

### A NOIE wants a PTP Obligation to settle like its PTP Option

- Source and sink must match the option, MW must not exceed the option MW, and the bid is capped at the lesser of 110% of peak Load forecast or 125% of hourly Load forecast. [e12][e18]
- The Resource at the source must meet the COP status test and the NOIE must have filed its attestation by October 1 of the prior year. [e21][e22]

## Open items

- Conflict between IMM reports: the 2024 report gives the 2024 PTP margin as 7.8% (paying 7.8% more in real time than day-ahead cost); the 2025 report gives 7.5% for 2024. The cause (restated data or revision) is not stated in the saved text. The 2025 figure is used above. [e45][e8]
- The Protocols give the formulas but no sentence stating the sign convention of "pay or charge" for the DAM and real-time legs; the net reading above rests on the IMM's description. [e30][e31][e7]
- np-04 Section 4.4.6(2) says DAM-bought PTP Obligations "must be settled based on the applicable Real-Time Settlement Point Prices" while Section 4.6.3 gives a DAM price-difference amount; the two reflect the two legs, but the reconciliation is not stated in the saved text. [e3][e4]
- The Figure 34 OCR for 2021 shows "$1,113." with a stray period; treat the 2021 figure as uncertain. Only 2025 values are used above. [e39]
- Status of the PTP bid fee NPRR after the CMWG options discussion (IMM 2025 report cites an ERCOT presentation dated 2026-04-10, not saved): not found. [e43]
- The per-counterparty PTP bid cap the IMM mentions is not located in the saved Protocol text (np-04 Section 4.4.6.1 has no cap); the cap's source and level are not sourced.
- DAM credit parameters (u-th percentile, reduction factor bd%) are shown as symbols in the Protocols; current values are not in the saved sources.
