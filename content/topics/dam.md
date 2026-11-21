---
id: dam
name: Day-Ahead Market (DAM)
aliases: [DAM, Day-Ahead Market, day-ahead]
kind: concept
domain: pricing
level: 1
depth: deep
lenses: [analyst, trading, portfolio, congestion, retail]
as_of: 2026-11-21
links:
  - to: rtm
    type: contrasts-with
    note: The RTM settles on 15-minute intervals, while the DAM settles on one-hour intervals from the DAM clearing. [e3]
  - to: ptp-obligation
    type: composed-of
    note: PTP Obligation bids are cleared in the DAM and settled on the Settlement Point Price difference between sink and source. [e10]
  - to: virtual-bids
    type: related
    note: DAM Energy Bids and DAM Energy-Only Offer Curves are instruments in the DAM. [e7][e22]
  - to: three-part-supply-offer
    type: related
    note: Three-Part Supply Offers are one of the offer types the DAM clears, and the IMM reports how little of the DAM energy they represent. [e16]
  - to: spp
    type: determines
    note: DAM Settlement Point Prices come from DAM LMPs and are final at 1000 of the second Business Day after the Operating Day. [e3][e8][e11]
  - to: dart-spread
    type: related
    note: The IMM reports the average DAM price premium and average absolute price difference for 2025. [e13]
  - to: settlement-statements
    type: settles
    note: Related topic for DAM settlement statements and invoices.
  - to: ancillary-services
    type: related
    note: The DAM co-optimizes Ancillary Service capacity with energy, and since RTC the awards are financial positions. [e1][e15]
  - to: ruc-make-whole
    type: related
    note: A DAM-committed generator with a cleared Three-Part Supply Offer can receive a Day-Ahead Make-Whole Payment. [e29]
  - to: offer-cap
    type: related
    note: DAM Energy-Only Offer Curves are limited to the range of -$250 per MWh to the DASWCAP. [e23]
  - to: crr
    type: related
    note: The DAM clearing runs a Simultaneous Feasibility Test that evaluates all CRRs for feasibility. [e20]
  - to: rtc-b
    type: related
    note: NPRR1008 updated Day-Ahead Operations for the implementation of RTC, and the IMM says RTC made DAM awards strictly financial positions. [e49][e15]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Day-Ahead Market (DAM)"
    quote: "A daily, co-optimized market in the Day-Ahead for Ancillary Service capacity, certain CRRs, and forward financial energy transactions."
  - id: e2
    source: np-04
    locator: "Section 4.1, Introduction, paragraph (1)"
    quote: "The Day-Ahead Market (DAM) is a daily, co-optimized market in the Day-Ahead for forward financial energy, Ancillary Services, and congestion transactions."
  - id: e3
    source: np-04
    locator: "Section 4.1, Introduction, paragraph (3)"
    quote: "DAM energy settlements use DAM Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a one-hour Settlement Interval using the Locational Marginal Prices (LMPs) from DAM. In contrast, the Real-Time energy settlements use Real-Time Settlement Point Prices that are calculated for Resource Nodes, Load Zones, and Hubs for a 15-minute Settlement Interval."
  - id: e4
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (1)"
    quote: "At 1000 in the Day-Ahead, ERCOT shall start the Day-Ahead Market (DAM) clearing process."
  - id: e5
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (4)"
    quote: "The DAM uses a multi-hour mixed integer programming algorithm to maximize bid-based revenues, including revenues based on Ancillary Service Demand Curves (ASDCs), minus the offer-based costs over the Operating Day, subject to security and other constraints."
  - id: e6
    source: np-04
    locator: "Section 4.5.2, Communicating DAM Results, paragraph (1)"
    quote: "As soon as practicable, but no later than 1330 in the Day-Ahead, ERCOT shall notify the parties to each cleared DAM transaction (e.g., the buyer and the seller) of the results of the DAM as follows:"
  - id: e7
    source: np-04
    locator: "Section 4.4.9.6, DAM Energy Bids, paragraph (1)"
    quote: "A QSE must submit any DAM Energy Bids by 1000 for the effective DAM."
  - id: e8
    source: np-04
    locator: "Section 4.6.1.1, Day-Ahead Settlement Point Prices for Resource Nodes"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e9
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment"
    quote: "The Day-Ahead Energy Payment is made for all cleared offers to sell energy in the DAM, whether through Three-Part Supply Offers, DAM Energy-Only Offer Curves, or cleared sales from the offer portion of Energy Bid/Offer Curves."
  - id: e10
    source: np-04
    locator: "Section 4.6.3, Settlement for PTP Obligations Bought in DAM"
    quote: "ERCOT shall pay or charge a QSE for a cleared PTP Obligation bid the difference in the DAM Settlement Point Prices between the sink Settlement Point and the source Settlement Point."
  - id: e11
    source: np-04
    locator: "Section 4.5.2, Communicating DAM Results, paragraph (6)"
    quote: "All DAM LMPs, MCPCs, and Settlement Point Prices are final at 1000 of the second Business Day after the Operating Day."
  - id: e12
    source: np-04
    locator: "Section 4.1.2, Day-Ahead Process and Timing Deviations, paragraph (2)"
    quote: "Subject to the principles set forth in paragraph (3) below, ERCOT may omit any procedure or take any manual action necessary to ensure, to the greatest extent practicable, that the DAM clearing process completes by 1900 in the Day-Ahead."
  - id: e13
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The average price premium in the day-ahead market was $1.17 per MWh, while the average absolute price difference was only $12 per MWh."
  - id: e14
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "The day-ahead market cleared 62% of real-time load in 2025."
  - id: e15
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets"
    quote: "Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time."
  - id: e16
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights"
    quote: "Three-part offers account for only 58% of the energy sold in the day-ahead market and serve only 36% of real-time load."
  - id: e17
    source: puct-25-501
    locator: "16 TAC §25.501(c), Day-ahead energy market"
    quote: "Day-ahead energy market. ERCOT shall operate a voluntary day-ahead energy market, either directly or through contract."
  - id: e18
    source: np-04
    locator: "Section 4.1, Introduction, paragraph (2)"
    quote: "(2) Participation in the DAM is voluntary."
  - id: e19
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (1)"
    quote: "If the processing of DAM bids and offers after 0900 is significantly delayed or impacted by a failure of ERCOT software or systems that directly impacts the DAM, ERCOT shall post a Notice as soon as practicable on the ERCOT website, in accordance with paragraph (1) of Section 4.1.2, Day-Ahead Process and Timing Deviations, extending the start time of the execution of the DAM clearing process by an amount of time at least as long as the duration of the processing delay plus ten minutes. In no event shall the extension exceed more than one hour from when the processing delay is resolved."
  - id: e20
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (2)"
    quote: "(2) ERCOT shall complete a Day-Ahead Simultaneous Feasibility Test (SFT). This test uses the Day-Ahead Updated Network Model topology and evaluates all Congestion Revenue Rights (CRRs) for feasibility to determine hourly oversold quantities."
  - id: e21
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (4)(a)-(b)"
    quote: "(a) The bid-based revenues include revenues from ASDCs, DAM Energy Bids, bid portions of Energy Bid/Offer Curves, and Point-to-Point (PTP) Obligation bids."
  - id: e54
    source: np-04
    locator: "Section 4.5.1, DAM Clearing Process, paragraph (4)(b)"
    quote: "(b) The offer-based costs include costs from the Startup Offer, Minimum Energy Offer, and Energy Offer Curve of any Resource that submitted a Three-Part Supply Offer, DAM Energy-Only Offers, offer portions of Energy Bid/Offer Curves, Ancillary Service Only Offers, and Ancillary Service Offers."
  - id: e22
    source: np-04
    locator: "Section 4.4.9.5, DAM Energy-Only Offer Curves, paragraphs (2)-(3)"
    quote: "(2) The DAM Energy-Only Offer Curve represents the QSE’s willingness to sell energy at or above a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy-Only Offer Curve may be offered only in the DAM. (3) DAM Energy-Only Offer Curves are not Resource-specific."
  - id: e23
    source: np-04
    locator: "Section 4.4.9.5.1, paragraphs (2)-(3)"
    quote: "(2) A DAM Energy-Only Offer Curve must be within the range of -$250.00 per MWh and the DASWCAP in dollars per MWh. (3) The minimum amount for each DAM Energy-Only Offer Curve that may be offered is one MW."
  - id: e24
    source: np-04
    locator: "Section 4.4.9.6, paragraph (2)"
    quote: "(2) A DAM Energy Bid represents the QSE’s willingness to buy energy at or below a certain price and at a certain quantity at a specific Settlement Point in the DAM. A DAM Energy Bid may be made only in the DAM."
  - id: e25
    source: np-04
    locator: "Section 4.4.9.5.1, paragraph (4)"
    quote: "(4) DAM Energy-Only Offers, DAM Energy Bids, and/or PTP Obligation bids shall not be submitted in combination to create the net effect of a single PTP Obligation containing a source Settlement Point and a sink Settlement Point that are Electrically Similar Settlement Points for the QSE or for any combination of QSEs within the same Counter-Party."
  - id: e26
    source: np-04
    locator: "Section 4.6.2.1, Day-Ahead Energy Payment, formula"
    quote: "The payment to each Qualified Scheduling Entity (QSE) for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAESAMT _(q, p) = (-1) * DASPP _(p) * DAES _(q, p)"
  - id: e27
    source: np-04
    locator: "Section 4.6.2.1, variable DAES"
    quote: "The total amount of energy represented by QSE q’s cleared Three-Part Supply Offers in the DAM, cleared DAM Energy-Only Offer Curves, and cleared sales from the offer portion of Energy Bid/Offer Curves at Settlement Point p, for the hour."
  - id: e28
    source: np-04
    locator: "Section 4.6.2.2, Day-Ahead Energy Charge"
    quote: "(1) The Day-Ahead Energy Charge is made for all cleared DAM Energy Bids or cleared purchases from the bid portion of Energy Bid/Offer Curves. This charge to each QSE for each Settlement Point for a given hour of the Operating Day is calculated as follows: DAEPAMT _(q, p) = DASPP _(p) * DAEP _(q, p)"
  - id: e29
    source: np-04
    locator: "Section 4.6.2.3, Day-Ahead Make-Whole Settlements, paragraph (4)"
    quote: "(3) A QSE that has a Three-Part Supply Offer cleared in the DAM is eligible for Day-Ahead Make-Whole Payment energy cost compensation in a DAM-committed Operating Hour, if, for the Resource associated with the offer the generator’s breakers were closed, as indicated by a telemetered Resource Status of On-Line, for at least one minute during the DAM-committed Operating Hour. (4) The Day-Ahead Make-Whole Payment guarantees the QSE that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost calculated based on the Startup Cap, the Minimum Energy Cap, and the Energy Offer Curve capped by the Energy Offer Curve Cap defined under Section 4.4.9.3.3, Energy Offer Curve Cost Caps."
  - id: e30
    source: np-04
    locator: "Section 4.6.2.3, paragraph (7)"
    quote: "(7) An Energy Storage Resource (ESR) is not eligible for Day-Ahead Make-Whole Payment."
  - id: e31
    source: np-04
    locator: "Section 4.6.2.3, paragraph (2)"
    quote: "(2) Notwithstanding the eligibility criteria described in paragraph (1) above, a Resource will not be eligible for Day-Ahead Make-Whole Payment Startup Cost compensation if the Resource was considered by the DAM as not having a cost to start due to the DAM commitment period being contiguous with a self-committed hour, as described in Section 4.4.9.1, Three-Part Supply Offers."
  - id: e32
    source: np-04
    locator: "Section 4.1.2, paragraph (3)(b)"
    quote: "(b) ERCOT will seek to minimize impacts to Market Participants and will only remove transactions from the DAM as a last resort; when ERCOT believes a QSE’s transactions need to be removed, either in whole or in part, in order to complete the DAM clearing process, ERCOT will prioritize the removal in reverse order based on submittal time, where the QSE’s most recently submitted transactions are prioritized before the removal of the earliest submitted transactions; however, the number of transactions removed will be at ERCOT’s discretion, subject to the principles set forth in this paragraph;"
  - id: e33
    source: np-04
    locator: "Section 4.1.2, paragraph (5)"
    quote: "(5) If ERCOT is unable to execute the Day-Ahead process prior to 1900 in the Day-Ahead, ERCOT may abort all or part of the Day-Ahead process and require all schedules and trades to be submitted in the Adjustment Period. In that event, ERCOT shall issue a Watch"
  - id: e34
    source: np-04
    locator: "Section 4.5.2, paragraph (4)"
    quote: "(4) ERCOT shall correct prices for an Operating Day when a market solution is determined to be invalid or invalid prices are identified in an otherwise valid market solution, accurate prices can be determined, and the impact of the price correction is significant."
  - id: e35
    source: np-04
    locator: "Section 4.5.2, paragraph (5)"
    quote: "(5) For purposes of a price correction performed prior to 1000 on the second Business Day after the Operating Day, the impact of a price correction is considered significant, as that term is used in paragraph (4) above, for the Operating Day when: (a) The absolute value change to any single DAM Settlement Point Price at a Resource Node or Day-Ahead MCPC is greater than $0.05/MWh; (b) The price correction would require ERCOT to change more than ten DAM Settlement Point Prices and Day-Ahead MCPCs; or (c) The absolute value change to any DAM Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh."
  - id: e36
    source: np-04
    locator: "Section 4.5.2, paragraph (6)(a)"
    quote: "(a) However, after DAM LMPs, MCPCs, and Settlement Point Prices are final, if ERCOT determines that prices qualify for a correction pursuant to paragraph (4) above and that ERCOT will seek ERCOT Board review of such prices, it shall notify Market Participants and describe the need for such correction as soon as practicable but no later than 30 days after the Operating Day."
  - id: e37
    source: np-04
    locator: "Section 4.5.2, paragraph (2)(b)-(d)"
    quote: "(2) As soon as practicable, but no later than 1330, ERCOT shall post on the ERCOT website the hourly: (a) Day-Ahead MCPC for each type of Ancillary Service for each hour of the Operating Day; (b) DASPPs for each Settlement Point for each hour of the Operating Day; (c) Day-Ahead hourly LMPs for each Electrical Bus for each hour of the Operating Day; (d) Shadow Prices for every binding constraint for each hour of the Operating Day;"
  - id: e38
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)"
    quote: "(a) The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM. These caps shall be maintained at these levels until either of the following criteria are met:"
  - id: e39
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(ii)"
    quote: "(ii) If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism."
  - id: e40
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (page 72 OCR)"
    quote: "Until RTC was implemented, ancillary services awarded in the DAM implied a physical obligation to provide reserves. Otherwise, the DAM is a voluntary financial market that creates no physical obligations from market awards."
  - id: e41
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (OCR)"
    quote: "The day-ahead market cleared 62% of real-time load in 2025. This is in line with recent years in ERCOT, but other RTOs in the US clear more than 90% in the day-ahead market."
  - id: e42
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, C.1 Day Ahead Market Volume (page 74 OCR)"
    quote: "Less than half of physical real-time generation in ERCOT is scheduled through the day-ahead market, so resources scheduled after the DAM must provide the remaining supply needed to satisfy real-time load, as shown in Figure 31."
  - id: e43
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (OCR)"
    quote: "Point-to-point obligations remained profitable in 2025, paying 10.9% more in real time than their day-ahead purchase cost. This ended a multi-year trend of declining PTP profitability."
  - id: e44
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (OCR)"
    quote: "The volume of PTP bids has grown by 258% over the last decade. This increase lengthens the time ERCOT needs to solve the DAM optimization."
  - id: e45
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (OCR)"
    quote: "Some of this low participation may reflect participants’ response to the imbalance risk of taking day-ahead forward positions, particularly for intermittent resources and duration-limited energy storage resources. If changes in weather conditions or a depleted state of charge prevent these resources from delivering on their day-ahead positions, they must buy back the position at the real-time price."
  - id: e46
    source: imm-som-2025
    locator: "Day-Ahead Market Performance, A. Highlights (OCR)"
    quote: "Thermal resources not awarded through three- part offers risk not recovering their start-up and minimum generation costs. Most renewables intentionally do not submit three-part offers because of their zero marginal cost of production and uncertainty in their forecast."
  - id: e47
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (OCR)"
    quote: "Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves."
  - id: e48
    source: imm-som-2025
    locator: "Executive Summary, Ancillary Services (OCR)"
    quote: "The most noteworthy development for ancillary services was the implementation of RTC in December."
  - id: e49
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Revision Description"
    quote: "This NPRR updates Day-Ahead Operations in the Protocols to address changes associated with the implementation of RTC."
  - id: e50
    source: ercot-nprr1008-board-report
    locator: "NPRR1008, Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1008 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e51
    source: ref-ercot-forward-markets-101
    locator: "ERCOT Forward Markets 101 training deck (tier 2), scenario: How's it settled? (energy offer)"
    quote: "Paid 60 MW at the DAM Energy Price Charged 10 MW at the Real-Time Energy Price"
  - id: e53
    source: np-04
    locator: "Section 4.4.9.5, paragraph (1)"
    quote: "(1) A QSE must submit any DAM Energy-Only Offer Curves by 1000 for the effective DAM."
---

## Definition

The Day-Ahead Market is a daily, co-optimized market run the day before the Operating Day for forward financial energy, Ancillary Services, and congestion transactions. [e1][e2] Participation is voluntary. [e18] PUCT rule 25.501 requires ERCOT to operate a voluntary day-ahead energy market. [e17]

## How it works

### Timeline

A QSE must submit DAM Energy Bids and DAM Energy-Only Offer Curves by 1000 in the Day-Ahead, and ERCOT starts the DAM clearing process at 1000. [e7][e53][e4] If processing of bids and offers after 0900 is significantly delayed or impacted by a failure of ERCOT software or systems that directly impacts the DAM, ERCOT posts a Notice extending the start time by at least the duration of the delay plus ten minutes, and the extension may not exceed one hour from when the delay is resolved. [e19] ERCOT must notify the parties to each cleared transaction of the results no later than 1330 in the Day-Ahead. [e6]

### What clears and how

ERCOT first completes a Day-Ahead Simultaneous Feasibility Test, which uses the Day-Ahead Updated Network Model topology and evaluates all CRRs for feasibility to determine hourly oversold quantities. [e20] The clearing is a multi-hour mixed integer program that maximizes bid-based revenues minus offer-based costs over the Operating Day, subject to security and other constraints. [e5] Bid-based revenues include ASDC revenues, DAM Energy Bids, the bid portions of Energy Bid/Offer Curves, and PTP Obligation bids. [e21] Offer-based costs include the Startup Offer, Minimum Energy Offer and Energy Offer Curve of any Resource with a Three-Part Supply Offer, DAM Energy-Only Offers, offer portions of Energy Bid/Offer Curves, Ancillary Service Only Offers and Ancillary Service Offers. [e54]

### Instruments

A DAM Energy-Only Offer Curve is the QSE's willingness to sell energy at or above a price and quantity at a specific Settlement Point; it may be offered only in the DAM and is not Resource-specific. [e22] It must be within the range of -$250 per MWh to the DASWCAP, and the minimum amount is one MW. [e23] The DASWCAP is set equal to the High System-Wide Offer Cap (HCAP) and stays there until one of two criteria is met, one of which is the Peaker Net Margin exceeding its per-MW-year threshold, after which the DASWCAP is set per the Scarcity Pricing Mechanism schedule in Section 4.4.11.1. [e38][e39] A DAM Energy Bid is the willingness to buy at or below a price at a Settlement Point, and may be made only in the DAM. [e24] Energy-Only Offers, Energy Bids and PTP Obligation bids may not be combined to create the net effect of a single PTP Obligation between Electrically Similar Settlement Points for the QSE or any QSEs in the same Counter-Party. [e25]

### Settlement and prices

Settlement uses DAM Settlement Point Prices for a one-hour Settlement Interval, built from DAM LMPs. [e3] A Resource Node's DAM price is simply its DAM LMP for the hour. [e8] Sellers whose energy offers clear receive the Day-Ahead Energy Payment, and a cleared PTP Obligation bid is paid or charged the sink-minus-source price difference. [e9][e10] Cleared DAM Energy Bids are charged the Day-Ahead Energy Charge. [e28] Because DAM energy is a financial position, ERCOT's training deck shows a QSE awarded 60 MW of energy offer that provides only 50 MW being paid at the DAM price for 60 MW and charged the Real-Time price for the 10 MW shortfall. [e51]

ERCOT posts, no later than 1330, the hourly DASPPs, the Day-Ahead hourly LMPs for each Electrical Bus, and Shadow Prices for every binding constraint, among other items. [e37]

### Make-whole

A QSE with a cleared Three-Part Supply Offer is eligible for Day-Ahead Make-Whole payments under conditions in Section 4.6.2.3. [e29] The payment guarantees that the total payment received from the DAM for a DAM-committed Resource is not less than the total cost based on the Startup Cap, the Minimum Energy Cap and the Energy Offer Curve capped by the Energy Offer Curve Cap. [e29] A Resource is not eligible for startup cost compensation if the DAM treated it as having no cost to start because the commitment period is contiguous with a self-committed hour, and an ESR is not eligible for Day-Ahead Make-Whole Payment. [e31][e30]

### When ERCOT intervenes

Subject to principles in the same section, ERCOT may omit a procedure or take a manual action so that clearing completes by 1900 in the Day-Ahead. [e12] ERCOT is to remove transactions only as a last resort, removing a QSE's most recently submitted transactions first, though the number removed is at ERCOT's discretion. [e32] If ERCOT cannot execute the Day-Ahead process before 1900, it may abort all or part of it, require all schedules and trades in the Adjustment Period, and must issue a Watch. [e33]

### Price corrections and finality

ERCOT corrects prices for an Operating Day when a market solution is invalid or invalid prices are identified, accurate prices can be determined, and the impact is significant. [e34] For a correction before 1000 on the second Business Day, "significant" means a change greater than $0.05/MWh to any single Resource Node DAM SPP or Day-Ahead MCPC, more than ten prices to change, or a change greater than $0.02/MWh to any Load Zone or Hub DAM SPP. [e35] All DAM LMPs, MCPCs and SPPs are final at 1000 of the second Business Day after the Operating Day. [e11] After that, if ERCOT will seek ERCOT Board review it must notify Market Participants no later than 30 days after the Operating Day, and failure to do so precludes Board review. [e36]

## ERCOT context

The IMM's 2025 report says that with RTC, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. [e15] The IMM adds that before RTC, ancillary services awarded in the DAM implied a physical obligation, while otherwise the DAM is a voluntary financial market creating no physical obligations. [e40] It also describes virtual ancillary service positions as a new DAM feature implemented with RTC. [e47]

The DAM cleared 62% of real-time load in 2025, which the IMM says is in line with recent years while other US RTOs clear more than 90% in the day-ahead market. [e14][e41] Three-part offers were 58% of DAM energy sold and served 36% of real-time load. [e16] The IMM says less than half of physical real-time generation is scheduled through the DAM. [e42] It notes thermal resources not awarded through three-part offers risk not recovering start-up and minimum generation costs, and that most renewables intentionally do not submit three-part offers. [e46]

The IMM suggests (opinion) that low physical participation may reflect the imbalance risk of day-ahead positions, particularly for intermittent resources and duration-limited ESRs, which must buy back the position at the real-time price if they cannot deliver. [e45]

For 2025 the IMM reports a $1.17/MWh average DAM premium and a $12/MWh average absolute price difference. [e13] PTP obligations paid 10.9% more in real time than their day-ahead purchase cost in 2025, and PTP bid volume has grown 258% over the last decade, which lengthens DAM solve time. [e43][e44]

## Formula

Day-Ahead Energy Payment per QSE per Settlement Point per hour: DAESAMT = (-1) * DASPP * DAES. DASPP is the DAM Settlement Point Price at the Settlement Point for the hour, and DAES is the total energy of the QSE's cleared Three-Part Supply Offers, cleared DAM Energy-Only Offer Curves and cleared sales from the offer portion of Energy Bid/Offer Curves at that point for the hour. [e26][e27]

Day-Ahead Energy Charge per QSE per Settlement Point per hour: DAEPAMT = DASPP * DAEP, where DAEP is the QSE's cleared purchases (DAM Energy Bids and the bid portion of Energy Bid/Offer Curves) at that point. [e28]

## Timeline

- 2020-12-08: the ERCOT Board approved NPRR1008, RTC - NP 4: Day-Ahead Operations, which updates the Day-Ahead Operations section for changes associated with the implementation of RTC. [e50][e49]
- December 2025: the IMM's 2025 report says RTC was implemented in December. [e48]

## Key facts

- PUCT rule 25.501 calls for a voluntary day-ahead energy market. [e17]
- DAM Energy Bids and Energy-Only Offer Curves are due by 1000 in the Day-Ahead; clearing starts at 1000. [e7][e53][e4]
- Results are communicated no later than 1330 in the Day-Ahead. [e6]
- DAM settles hourly, versus 15-minute intervals in real time. [e3]
- DAM prices are final at 1000 of the second Business Day after the Operating Day. [e11]
- 2025: DAM cleared 62% of real-time load; average DAM premium $1.17/MWh. [e14][e13]

## Say it like this

The day-ahead market is ERCOT's voluntary forward market where energy, ancillary services and PTP congestion positions are cleared the day before, on hourly prices. It lets you lock in a price and a congestion position, and whatever you do not take there is settled at real-time prices.

## Common confusion

- The DAM is financial, not a physical commitment: the IMM says energy and ancillary services in the day-ahead market are strictly financial positions, with imbalances settled in real time. [e15]
- DAM versus RUC: the Day-Ahead Make-Whole Payment applies only under its own eligibility conditions, for example a cleared Three-Part Supply Offer with the generator's breakers closed for at least one minute in the DAM-committed Operating Hour. [e29][e31]

## Questions

### What is cleared in the DAM and when?

Energy offers and bids, Ancillary Service capacity and PTP Obligation bids are cleared together. [e1][e2][e5] DAM Energy Bids are due by 1000, clearing starts at 1000, and results go out by 1330. [e7][e4][e6]

### How does DAM settlement differ from real-time settlement?

The DAM uses one-hour Settlement Intervals with DAM Settlement Point Prices, while real time uses 15-minute intervals. [e3] Real-time prices are the ones that settle any imbalance against a DAM position. [e15]

### Did the DAM clear at a premium or a discount in 2025?

At a modest premium: the IMM reports an average premium of $1.17/MWh and an average absolute difference of $12/MWh. [e13]

### Why does the DAM clear only about 62% of real-time load, and why might participants stay out?

The IMM reports 62% in 2025, with less than half of physical real-time generation scheduled through the DAM. [e14][e42] The IMM's view is that part of the reason is imbalance risk for intermittent and duration-limited storage resources. [e45]

### What if ERCOT cannot finish the DAM by 1900?

It may omit procedures or take manual actions, removing transactions only as a last resort and starting with a QSE's most recent submissions. [e12][e32] If it still cannot execute, it may abort all or part of the process, require schedules and trades in the Adjustment Period, and issue a Watch. [e33]

### Why can a Day-Ahead price change after it is posted?

ERCOT corrects prices when a solution or prices are invalid and the impact is significant, with thresholds such as $0.05/MWh at a Resource Node. [e34][e35] Prices are final at 1000 on the second Business Day, but Board review is possible if ERCOT gave notice within 30 days. [e11][e36]

### Why would a generator with a cleared offer still not be paid make-whole?

ESRs are not eligible, and a Resource whose commitment is contiguous with a self-committed hour is not eligible for startup compensation. [e30][e31]

## Scenarios

### A QSE holds a 60 MW cleared energy offer but delivers only 50 MW.

- It is paid for 60 MW at the DAM price and charged the real-time price for the 10 MW shortfall, per ERCOT's training scenario. [e51]

## Open items

- The DAM timeline figure in Section 4.1.1 is an image and could not be quoted; the 1000, 1330 and 1900 times come from the text of Sections 4.4, 4.5 and 4.1.2.
- Credit limits for DAM bids and offers (Section 4.4.10) were not summarized here.
- Pending NPRR1188 changes (adding Energy Bid Curves to DAM bid revenue and results, boxes in Sections 4.5.1 and 4.5.2) are not described as current rules; their go-live status is not in the saved sources.
- The exact RTC go-live date: the saved IMM 2025 report says "in December" only; the saved sources do not give the day in the text quoted here.
- How day-ahead Ancillary Service Only offers settle against real-time prices after RTC (Section 4.6.4 and NP 6) was not worked through.
