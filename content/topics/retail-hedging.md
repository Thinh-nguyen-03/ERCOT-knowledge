---
id: retail-hedging
name: Retail Load Hedging
aliases: [retail hedging, load hedging, LSE hedging]
kind: concept
domain: trading
level: 2
lenses: [retail, portfolio, trading]
depth: deep
as_of: 2026-11-21
links:
  - to: rep
    type: related
    note: REPs are the retailers whose exposure to wholesale prices was tested in February 2021. [e5]
  - to: lse
    type: related
    note: The IMM describes how load-serving entities manage real-time price exposure. [e1]
  - to: ptp-obligation
    type: hedges
    note: The IMM lists PTPs among the day-ahead market positions that hedge real-time load. [e2]
  - to: dam
    type: related
    note: Day-ahead purchases are one way LSEs cover real-time price exposure. [e1]
  - to: winter-storm-uri
    type: example-of
    note: Inadequately hedged retailers were among the financial losers of the event. [e6]
  - to: ppa-vppa
    type: related
    note: The IMM lists bilateral PPAs as one of the ways LSEs manage price exposure. [e1]
  - to: volumetric-risk
    type: related
    note: ERCOT settles each QSE's real-time imbalance on the net of its supply-side amounts and its AML (Adjusted Metered Load), so a fixed-volume hedge leaves the load-volume difference at the real-time price. [e11][e12][e38]
  - to: shape-risk
    type: related
    note: ERCOT's CRR auction includes 5x16 blocks for hours ending 0700-2200 on weekdays, and the ICE peak future averages SPPs for hours ending 0700-2200 CPT; both are fixed hour blocks. [e24][e25]
  - to: basis-risk
    type: related
    note: In ERCOT's own LSE training example a hub purchase left a real-time charge at the load zone, so the hedge did not fully cover the load. [e15]
  - to: exchanges-ice-nodal
    type: related
    note: See that topic for the ICE ERCOT North futures; the IMM lists participating in futures markets among the ways LSEs manage price exposure. [e1]
  - to: retailer-defaults-2021
    type: related
    note: Three retailers filed for bankruptcy and had certificates revoked after February 2021. [e22]
  - to: mass-transition
    type: related
    note: Customers of the failed retailers were moved to other retailers through ERCOT's mass transition process. [e22]
  - to: sc-rep-heat-wave-hedge
    type: related
    note: The scenario applies the day-ahead, bilateral and futures hedging routes to a REP in a heat wave. [e1]
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
  - id: e9
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Market Products for Hedging Wholesale Market Costs, slide 14"
    quote: "Tools for Hedging Wholesale Market Costs Day Ahead Market • Energy • Congestion • Capacity Bilateral Trades • Energy • Capacity • Ancillary Service Congestion Revenue Rights • Congestion"
  - id: e10
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Real-Time Energy Settlement slide"
    quote: "Real-Time Energy Imbalance = (-1) SUPPLIES – OBLIGATIONS * RTSPP RTSPP = Real-Time Settlement Point Price"
  - id: e11
    source: np-06
    locator: "Section 6.6.3.2, Real-Time Energy Imbalance Payment or Charge at a Load Zone, paragraph (1)(a)-(c)"
    quote: "The payment or charge to each QSE for Energy Imbalance Service is calculated based on the Real-Time Settlement Point Price for the following amounts at a particular Load Zone Settlement Point: (a) The amount of its Self-Schedules with sink specified at the Settlement Point; plus (b) The amount of its DAM Energy Bids cleared in the DAM at the Settlement Point; plus (c) The amount of its Energy Trades at the Settlement Point where the QSE is the buyer; minus"
  - id: e12
    source: np-06
    locator: "Section 6.6.3.2, paragraph (1)(g)"
    quote: "Its AML at the Settlement Point excluding Non-WSL ESR Charging Load; plus"
  - id: e13
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Example 1: Baseline Energy Costs"
    quote: "Example 1: Baseline Energy Costs Friendly Power, LLP Does not hedge for Hour 1200 • 100 MW load in West Load Zone • Buys all energy in Real-Time • Real-Time Price = $40"
  - id: e14
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Example 2: Hedging Energy Costs with DAM"
    quote: "Friendly Power, LLP DAM Award for Hour 1200 • 100 MW Energy Purchase • West Load Zone Charge = 100 MW * $50/MWh = $5000 per hour"
  - id: e15
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Example 3: Hedging Energy Costs with Trade, Scorecard"
    quote: "Example 3: Scorecard Type of Settlement Result Day-Ahead Market DAM Energy Purchase N/A Real-Time Real-Time Energy Imbalance Net ERCOT Settlement Energy Trade Cost to LSE for Energy Traded NET Cost $500.00 $500.00 $5500.00 $6000.00"
  - id: e16
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Example 3: Hedging Energy Costs with Trade"
    quote: "Example 3: Hedging Energy Costs with Trade Friendly Power, LLP Energy Trade for Hour 1200 • 100 MW Energy Purchase • For delivery to West Hub Cost = 100 MW * $55/MWh = $5500 per hour"
  - id: e17
    source: ref-ercot-lse-201
    locator: "LSE 201 (ERCOT training), Credit in Day-Ahead Market slide"
    quote: "Credit in Day-Ahead Market Transaction Credit Requirement Energy Bid Volume * Bid Price PTP Obligation Bid Volume * (Bid Price + Historical RT exposure)"
  - id: e18
    source: imm-som-2023
    locator: "Section G (Exposure of Load to Real-Time Prices), page 54 (OCR)"
    quote: "Unfortunately, we do not have information on the bilateral contracts held by ERCOT’s LSEs. Therefore, Figure 11 below shows the percentage of load exposed to real-time energy prices in 2023 based only on settlements through the ERCOT markets."
  - id: e19
    source: imm-som-2023
    locator: "Section G (Exposure of Load to Real-Time Prices), page 55 (OCR)"
    quote: "This figure shows that less than 20% of the load is exposed to real-time prices on average. This may underestimate loads’ true exposure because purchases in the day-ahead market would reduce the load exposure shown in this figure. In reality, day-ahead purchases provide very little protection for load because day-ahead prices in a well-performing market will reflect the expected real-time prices."
  - id: e20
    source: imm-som-2021
    locator: "Chapter on day-ahead market performance, page 75 (OCR), discussion of Figure 30"
    quote: "When measured at this level, the percentage of real-time load hedged dropped slightly to 80% in 2021, slightly down from 85% seen in 2020."
  - id: e21
    source: imm-som-2023
    locator: "Chapter on day-ahead market performance, page 72 (OCR), discussion of Figure 23"
    quote: "When measured at this level, the percentage of real-time load hedged dropped to 67% in 2023, down from 76% in 2022."
  - id: e22
    source: ut-uri-timeline
    locator: "Section 3.4, Financial Fallout"
    quote: "Griddy Energy LLC, Entrust Energy Inc., and Power of Texas Holdings Inc. have each filed for bankruptcy.123,124,125 Their certificates to serve customers in the ERCOT market were revoked, and their customers were moved to other retailers through ERCOT’s “mass transition event” process."
  - id: e23
    source: ut-uri-timeline
    locator: "Section 3.4, Financial Fallout"
    quote: "Regulators and policy makers have very limited information about contracts and hedging relationships among participants in the State’s electricity and natural gas industries. This is particularly true for financial transactions negotiated outside of ERCOT’s formal day-ahead and real-time markets for energy and ancillary services."
  - id: e24
    source: np-07
    locator: "Section 7.3, Types of Congestion Revenue Rights to Be Auctioned, paragraph (5)(a)"
    quote: "5x16 blocks for hours ending 0700-2200, Monday through Friday (excluding North American Electric Reliability Corporation (NERC) holidays), in one-month strips;"
  - id: e25
    source: ice-ercot-north-peak
    locator: "Reference Price A, c) Specified Price"
    quote: "Average of SPPs for all hours ending 0700-2200 CPT"
  - id: e26
    source: imm-som-2021
    locator: "Executive Summary, Winter Storm Uri, page 7 (OCR)"
    quote: "The extended shortage pricing created extreme financial outcomes for some market participants. This was particularly true for those exposed to day-ahead or real-time prices due to insufficient coverage through financial contracts or generators unable to operate during the storm to hedge this exposure."
  - id: e27
    source: puct-25-475
    locator: "16 TAC §25.475(b)(5), definition of Fixed rate product (rule version effective 01/06/2022)"
    quote: "Fixed rate product -- A retail electric product with a term of at least three months for which the price (including all recurring charges and ancillary service charges) for each billing period of the contract term is the same throughout the contract term, except that the price may vary from the disclosed amount solely to reflect actual changes in TDU charges, changes to the Electric Reliability Council of Texas (ERCOT) or Texas Regional Entity, Inc. administrative fees charged to loads or changes resulting from federal, state or local laws that impose new or modified fees or costs on a REP that are beyond the REP’s control."
  - id: e28
    source: puct-25-475
    locator: "16 TAC §25.475(b)(5), definition of Fixed rate product, last sentence"
    quote: "The price may not vary from the disclosed amount to reflect changes in ancillary service charges unless the commission expressly designates a specific type of ancillary service product as incurring charges beyond the REP’s control for a customer’s existing contract."
  - id: e29
    source: puct-25-475
    locator: "16 TAC §25.475(b)(6), definition of Indexed product"
    quote: "Indexed product -- A retail electric product for which the price, including recurring charges, can vary according to a pre-defined pricing formula that is based on publicly available indices or information and is disclosed to the customer, and to reflect actual changes in TDU charges, changes to the ERCOT or Texas Regional Entity administrative fees charged to loads or changes resulting from federal, state or local laws or regulatory actions that impose new or modified fees or costs on a REP that are beyond the REPs control."
  - id: e30
    source: puct-25-475
    locator: "16 TAC §25.475(b)(12), definition of Wholesale Indexed Product"
    quote: "Wholesale Indexed Product -- A retail electric product in which the price a customer pays for electricity includes a direct pass-through of real-time settlement point prices determined by the independent organization certified under the Public Utility Regulatory Act (PURA) §39.151 for the ERCOT power region."
  - id: e31
    source: puct-25-475
    locator: "16 TAC §25.475, prohibition on offering indexed products"
    quote: "A REP, aggregator, or broker is prohibited from offering: (i) an indexed product to a residential or small commercial customer on or after February 1, 2022; or (ii) a wholesale indexed product to a residential or small commercial customer on or after September 1, 2021."
  - id: e32
    source: pura-39
    locator: "PURA §39.110(b)-(c), Wholesale Indexed Products Prohibited"
    quote: "An aggregator, a broker, or a retail electric provider may not offer a wholesale indexed product to a residential or small commercial customer.(c)  An aggregator, a broker, or a retail electric provider may enroll a customer other than a residential and small commercial customer in a wholesale indexed product only if the provider, aggregator, or broker obtains before the customer's enrollment an acknowledgment signed by the customer that the customer accepts the potential price risks associated with a wholesale indexed product."
  - id: e33
    source: pura-39
    locator: "PURA §39.110, session-law note following the section"
    quote: "Added by Acts 2021, 87th Leg., R.S., Ch. 132 (H.B. 16), Sec. 1, eff. September 1, 2021."
  - id: e34
    source: puct-25-107
    locator: "16 TAC §25.107(f)(1)(A)(ii)(II), access to capital, guarantor tests (version effective 11/4/2026)"
    quote: "Tangible net worth greater than or equal to $100 million, a minimum current ratio (defined as current assets divided by current liabilities) of 1.0, and a debt to total capitalization ratio not greater than 0.60, where all calculations exclude unrealized gains and losses resulting from valuing to market the power contracts and financial instruments used as supply hedges to serve load."
  - id: e35
    source: imm-som-2022
    locator: "Appendix, Figure A7 discussion, page 162 (OCR)"
    quote: "The highest portions of load potentially exposed to real-time prices in 2022 occurred at the end of the year in October, November, and December, likely due to higher real-time price expectations for January and February for potential cold weather."
  - id: e36
    source: imm-som-2022
    locator: "Chapter on day-ahead market performance, page 72 (OCR), discussion of Figure 22"
    quote: "When measured at this level, the percentage of real-time load hedged dropped slightly to 76% in 2022, down from 80% in 2021."
  - id: e37
    source: imm-som-2023
    locator: "Section G (Exposure of Load to Real-Time Prices), page 54 (OCR)"
    quote: "Load is not fully exposed to these real-time prices to the extent that load-serving entities (LSEs) may own generation or bilaterally contract for supply ahead of the real-time market."
  - id: e38
    source: np-02
    locator: "Section 2.2, Acronyms and Abbreviations, AML"
    quote: "AML Adjusted Metered Load"
---

## Definition

In the IMM's description, retail hedging is how load-serving entities manage their exposure to real-time energy prices: by owning generation, entering bilateral power purchase agreements (PPAs), participating in futures markets, or procuring energy in the day-ahead market. [e1]

## How it works

**What an LSE has to cover.** ERCOT's training for Load Serving Entities lists the tools for hedging wholesale market costs: the Day Ahead Market (energy, congestion, capacity), bilateral trades (energy, capacity, ancillary service) and Congestion Revenue Rights (congestion). [e9]

**What is left unhedged is settled at real time.** In the LSE training, real-time energy imbalance is the negative of supplies minus obligations, times the real-time settlement point price. [e10] In the Protocols, a QSE's Energy Imbalance at a Load Zone is priced at the Real-Time Settlement Point Price on a net of amounts that includes its Self-Schedules, its cleared DAM Energy Bids and its Energy Trades as buyer, against offsets that include its AML (Adjusted Metered Load, excluding Non-WSL ESR Charging Load). [e11][e12][e38] So load that is covered by a day-ahead award or a bilateral buy is settled in real time only on the difference. The IMM notes that load is not fully exposed to real-time prices to the extent LSEs own generation or bilaterally contract for supply ahead of the real-time market. [e37]

**Worked example from ERCOT training (illustrative numbers, Load Zone West, one hour, 100 MW).** [e13][e14][e16]
- No hedge: the load buys all energy in real time at $40. [e13]
- Day-ahead hedge: a 100 MW DAM award at the load zone costs $50/MWh, a charge of $5,000 per hour. [e14]
- Bilateral trade at the hub: a 100 MW purchase for delivery to West Hub at $55/MWh costs $5,500 per hour, and the scorecard shows a net real-time settlement of $500 and a net cost of $6,000 for the hour. [e16][e15] The training example thereby shows a hub hedge leaving a location difference to the load zone; the numbers are the course's, not market data.

**Retail products decide what price risk the REP carries (PUCT rule 16 TAC §25.475 on REP requirements for residential and small commercial customers, version effective 6 January 2022).** A fixed rate product has a term of at least three months with the same price in each billing period, except for pass-through of TDU charges, ERCOT or Texas Regional Entity administrative fees and new fees imposed by law that are beyond the REP's control. [e27] The price may not vary to reflect ancillary service charges unless the commission expressly designates a specific type of ancillary service product as beyond the REP's control for a customer's existing contract. [e28] An indexed product's price varies by a disclosed formula based on publicly available indices or information, plus the same pass-through items. [e29] A wholesale indexed product passes through real-time settlement point prices directly. [e30]

**Wholesale indexed products are restricted.** A REP, aggregator or broker is prohibited from offering a wholesale indexed product to a residential or small commercial customer on or after 1 September 2021, and an indexed product to such customers on or after 1 February 2022. [e31] PURA §39.110(b) says a REP, aggregator or broker may not offer a wholesale indexed product to a residential or small commercial customer, and §39.110(c) allows enrolling a customer other than residential and small commercial in a wholesale indexed product only with a signed acknowledgment that the customer accepts the potential price risks. [e32] That section was added by HB 16, effective 1 September 2021. [e33]

**Credit for hedging in the DAM.** In ERCOT's LSE training (February 2024), the day-ahead credit requirement for an energy bid is volume times bid price and for a PTP obligation bid is volume times (bid price plus historical real-time exposure). [e17]

**Does day-ahead cover reduce exposure?** The IMM says it reduces volatility and uncertainty but gives little protection against sustained price elevations, because day-ahead prices in a well-performing market tend to reflect expected real-time prices. [e3] The IMM said in its 2023 report that day-ahead purchases provide very little protection for load for the same reason. [e19]

## ERCOT context

**How much load is exposed.** The IMM measures load exposure from ERCOT settlement data only. In 2023 it said it had no information on the bilateral contracts held by LSEs, so its exposure figure was based only on ERCOT-market settlements, and that less than 20% of load was exposed to real-time prices on average. [e18][e19] In 2024 only 17% of load was exposed on average, and the remainder of real-time load was hedged with day-ahead positions including PTPs. [e2] The IMM's 2021 report says its exposure determination is based solely on ERCOT-administered markets and excludes bilateral and OTC index purchases. [e4]

**A different measure: the share of real-time load hedged day-ahead.** The IMM also reports the percentage of real-time load hedged through day-ahead energy purchases or PTP obligations, measured at the counterparty level: 85% in 2020, 80% in 2021, 76% in 2022 and 67% in 2023. [e20][e36][e21] These are different measures from the exposure figures above and should not be mixed.

**Seasonality.** The IMM expects hedging activity to rise in the months with the highest likelihood of extreme weather and shortage conditions. [e7] In its 2022 report the highest exposed portions occurred in October to December, which it attributed to higher real-time price expectations for January and February cold weather. [e35]

**February 2021.** Retailers' outcomes depended on how well their price risk was hedged and how outages affected their obligations to provide energy. [e5] The IMM said extreme financial outcomes fell particularly on those exposed to day-ahead or real-time prices because of insufficient coverage through financial contracts. [e26] LSEs that were inadequately hedged were named among the financial losers. [e6] Griddy Energy, Entrust Energy and Power of Texas filed for bankruptcy, had their certificates to serve customers revoked, and their customers were moved to other retailers through the mass transition process (as of the UT report). [e22] The UT report also said regulators had very limited information about contracts and hedging relationships, particularly for transactions outside ERCOT's day-ahead and real-time markets. [e23]

**REP rules.** The PUCT's REP financial rule (16 TAC §25.107, version effective 4 November 2026) contains no hedging requirement in the text read; it mentions supply hedges only when it says a guarantor's financial ratios exclude unrealized gains and losses from valuing to market the power contracts and financial instruments used as supply hedges to serve load. [e34]

## Timeline

- February 2021: Winter Storm Uri; inadequately hedged LSEs among the financial losers. [e6]
- 1 September 2021: wholesale indexed products barred for residential and small commercial customers (PURA §39.110, added by HB 16; also 16 TAC §25.475). [e33][e31]
- 1 February 2022: indexed products barred for residential and small commercial customers under 16 TAC §25.475. [e31]
- 2020 to 2023: IMM's measure of real-time load hedged day-ahead fell from 85% to 67%. [e20][e36][e21]
- 2024: 17% of load exposed to real-time prices on average (IMM, ERCOT settlement data). [e2]

## Key facts

- 2024: on average 17% of load was exposed to real-time prices (IMM). [e2]
- Hedging tools the IMM lists for LSEs: owning generation, bilateral PPAs, futures, and day-ahead purchases. [e1]
- The IMM expects hedging activity to rise in months with the highest likelihood of extreme weather and shortage conditions. [e7]
- The IMM's exposure estimates are based on ERCOT-administered markets and exclude bilateral and OTC index purchases (2021 report; the 2023 report says it has no data on LSEs' bilateral contracts). [e4][e18]
- Share of real-time load hedged day-ahead (IMM, counterparty level): 85% (2020), 80% (2021), 76% (2022), 67% (2023). [e20][e36][e21]
- Wholesale indexed products may not be offered to residential or small commercial customers on or after 1 September 2021. [e31]
- The retail fixed rate product allows price changes only for the pass-through items in the rule. [e27]

## Say it like this

(Guidance) A retailer's hedge is whatever covers its load against real-time prices: owned generation, bilateral PPAs, futures, or day-ahead positions. Day-ahead cover smooths volatility, but it does not shield against a sustained price rise. Exposure shares in the IMM report are measured from ERCOT settlement data, so they leave out bilateral hedges the IMM has no information on.

## Common confusion

A CRR entitles the holder to be charged or paid congestion rent when the grid is congested [e8], which is different from covering the energy price level. A day-ahead purchase moves price risk forward but, per the IMM, does not remove the risk of generally high prices. [e3] Do not read the IMM's 17% (share exposed to real-time prices, 2024) as the share of load that is hedged with bilateral contracts: the IMM bases it on ERCOT settlement data. [e2][e18] And do not put the exposure percentage next to the "load hedged" percentage: they are separate measures. [e20][e21]

## Questions

### What share of ERCOT load was exposed to real-time prices in 2024?

On average 17%; the rest was hedged with day-ahead positions, including PTPs. [e2]

### Why does day-ahead hedging give limited protection in a scarcity year?

Day-ahead prices tend to reflect expected real-time prices, so locking them in protects against volatility but not against sustained elevations. [e3][e19]

### What determined which retailers suffered most in February 2021?

How much of their price risk was hedged, and how outages affected their obligation to provide energy. [e5]

### Why can't the IMM say how hedged retailers really are?

It says it does not have information on the bilateral contracts LSEs hold, so its exposure figure uses only ERCOT-market settlements. [e18] The UT report likewise said regulators had very limited information about hedging relationships outside ERCOT's formal markets. [e23]

### What if a retailer hedges at a hub but its customers settle at the load zone?

In ERCOT's LSE training example, a 100 MW trade at West Hub left a net real-time settlement of $500 for the hour, so the total cost was $6,000 versus $5,000 for a day-ahead award at the load zone. [e15][e14] The point of the example is that a hub hedge does not cover the hub-to-load-zone price difference.

### Why can't a REP simply pass wholesale prices through to residential customers?

PURA §39.110 and 16 TAC §25.475 prohibit offering wholesale indexed products to residential or small commercial customers, and §25.475 also prohibits indexed products to them from 1 February 2022. [e32][e31] A REP selling a fixed rate product may not change the price for ancillary service charges unless the commission designates them as beyond the REP's control. [e28]

### Does the PUCT require REPs to hedge?

Not in the saved text of 16 TAC §25.107 as read; it sets access-to-capital and customer deposit requirements and mentions supply hedges only in its guarantor ratio calculation. [e34]

## Scenarios

### A REP sells a fixed rate product and real-time prices spike in a heat wave

- The REP cannot pass the cost through: a fixed rate product's price may vary only for the listed pass-throughs, and not for ancillary service charges unless the commission designates them. [e27][e28]
- Load covered by DAM awards or trades is settled in real time only on the difference between its supply-side amounts and its AML (Adjusted Metered Load). [e10][e11][e12][e38]
- A day-ahead hedge gives little protection against sustained elevations in prices, because day-ahead prices in a well-performing market tend to reflect expected real-time prices (IMM). [e3]
- Hedging activity is expected to be higher in months with extreme weather likelihood. [e7]

## Open items

- Resolved 2026-11-21: the IMM's 2021-2022 exposure measure excludes bilateral and OTC index purchases (e4); the 2023 report says it has no data on LSEs' bilateral contracts (e18). The 2024 text says Figure 8 is "based on ERCOT settlement data", which is consistent with the same basis but does not repeat the bilateral exclusion.
- No saved source describes REP hedging policies, hedge ratios or typical retail hedge portfolios; the retail contract types are described only through the PUCT definitions.
- IMM 2025 load exposure or load-hedged percentage: not found in the saved 2025 OCR text.
- No saved source defines "retail hedging" as a term; the Definition paraphrases the IMM description of how LSEs manage price exposure.
- Whether PUCT REP financial or credit rules impose a hedging requirement: 16 TAC §25.107 (effective 4 November 2026) and §25.478 (customer credit and deposits) were read and none was found; §25.478 concerns residential customer credit and deposits only.
- Shape and volume mismatch for retail load: covered in the industry-reference topics shape-risk and volumetric-risk; this topic relies only on tier 1-2 quotes.
- The 2021 IMM hedged-load percentage for 2020 (85%) is quoted only as the comparison year in the 2021 report.
