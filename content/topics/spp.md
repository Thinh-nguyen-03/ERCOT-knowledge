---
id: spp
name: SPP (Settlement Point Price)
aliases: [SPP, Settlement Point Price, RTSPP, DASPP]
kind: metric
domain: pricing
level: 1
lenses: [analyst, trading, retail, congestion]
as_of: 2026-11-21
depth: deep
links:
  - to: lmp
    type: related
    note: The Settlement Point Price is calculated from LMP data. [e1]
  - to: settlement-point
    type: related
    note: A Settlement Point is a Resource Node, Load Zone or Hub, and each has its own Settlement Point Price. [e2]
  - to: resource-node
    type: related
    note: Resource Node prices are essentially LMPs, with a real-time adder in real time. [e3][e5]
  - to: load-zone
    type: related
    note: The real-time Load Zone price is based on state-estimated Load and the time-weighted average LMPs at buses in the zone. [e6]
  - to: trading-hub
    type: related
    note: Hub prices follow the methodology written into each Hub's definition. [e7]
  - to: dam
    type: related
    note: The Day-Ahead SPP is the DAM-side price. [e3]
  - to: rtm
    type: related
    note: The Real-Time SPP is the price for each 15-minute Settlement Interval. [e5]
  - to: negative-prices
    type: related
    note: The real-time SPP has an administrative floor. [e8]
  - to: sced
    type: related
    note: Real-Time SPPs are built from the LMPs of every SCED run in the 15-minute interval. [e13]
  - to: ordc
    type: related
    note: Before RTC an ORDC adder was added to energy prices; the IMM measured it at under $0.02/MWh for 2025. [e18][e19]
  - to: ruc
    type: related
    note: RUC-committed Resources are among the deployments counted in the Reliability Deployment Price Adder. [e20]
  - to: ptp-obligation
    type: related
    note: A PTP Obligation settles on the DASPP difference between sink and source. [e25]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Settlement Point Price"
    quote: "A price calculated for a Settlement Point for each Settlement Interval using LMP data and the formulas detailed in Section 4.6, DAM Settlement, and Section 6.6, Settlement Calculations for the Real-Time Energy Operations."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Settlement Point"
    quote: "A Resource Node, Load Zone, or Hub."
  - id: e3
    source: np-04
    locator: "Section 4.6.1.1"
    quote: "The DASPP for a Resource Node Settlement Point for an hour is the Locational Marginal Price (LMP) at that Resource Node for that hour as calculated in the Day-Ahead Market (DAM) process."
  - id: e4
    source: np-04
    locator: "Section 4.6.1.3"
    quote: "The DASPP for a Settlement Point at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5, Hubs."
  - id: e5
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Resource Node Settlement Point is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy. The Real-Time Settlement Point Price for a 15-minute Settlement Interval is calculated as follows:"
  - id: e6
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1)"
    quote: "The Real-Time Settlement Point Price for a Load Zone Settlement Point is based on the state-estimated Load in MW and the time-weighted average Real-Time LMPs at Electrical Buses that are included in the Load Zone."
  - id: e7
    source: np-06
    locator: "Section 6.6.1.3, paragraph (1)"
    quote: "The Real-Time Settlement Point Price at a Hub is determined according to the methodology included in the definition of that Hub in Section 3.5.2, Hub Definitions."
  - id: e8
    source: np-06
    locator: "Section 6.6.1, paragraph (1)"
    quote: "For each Security-Constrained Economic Dispatch (SCED) Locational Marginal Price (LMP) calculated at each Settlement Point in the SCED process, an administrative price floor of -$251/MWh will be applied to Real-Time Settlement Point Prices after adding the Real-Time Reliability Deployment Price Adders for Energy."
  - id: e9
    source: np-03
    locator: "Section 3.4, paragraph (1)"
    quote: "ERCOT shall calculate a Settlement Point Price for each Load Zone using the Load-weighted aggregated Shift Factors of the applicable energized power flow buses for each constraint. The Load-weighting must be determined using the Load distribution factors."
  - id: e10
    source: np-06
    locator: "Section 6.6.1, paragraph (1) and (1)(a)-(b)(i)"
    quote: >-
      ERCOT shall assign an LMP to de-energized Electrical Buses for use in the calculation of the Real-Time Settlement Point Prices by using heuristic rules applied in the following order:
      (a) Use an appropriate LMP predetermined by ERCOT as applicable to a specific Electrical Bus; or if not so specified
      (b) Use the following rules in order:
      (i) Use average LMP for Electrical Buses within the same station having the same voltage level as the de-energized Electrical Bus, if any exist.
  - id: e11
    source: imm-som-2025
    locator: "Chapter I.D, Shortage and Reliability Pricing"
    quote: "Since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder."
  - id: e14
    source: imm-som-2025
    locator: "Recommendation 2020-3 summary"
    quote: "Unlike generators, which settle at the nodal level and receive payments based on their specific locational marginal prices (LMPs), loads are billed at the load zone price. This price reflects a load-weighted average of nodal prices within the zone."
  - id: e12
    source: imm-som-2025
    locator: "Chapter I.C, Zonal Energy Prices"
    quote: "Continuing the trend from 2024, the West zone had the highest average price in 2025, followed by the South zone."
  - id: e13
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1), formula"
    quote: "RTSPP = Max (-$251, ([](RNWF _(y) * (RTLMP _(y) + RTRDPA _(y)))))"
  - id: e15
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1), variable table (y)"
    quote: "A SCED interval in the 15-minute Settlement Interval. The summation is over the total number of SCED runs that cover the 15-minute Settlement Interval."
  - id: e16
    source: np-06
    locator: "Section 6.6.1.1, paragraph (1), variable table (RNWF)"
    quote: "The weight used in the Resource Node Settlement Point Price calculation for the portion of the SCED interval y within the Settlement Interval."
  - id: e17
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1), variable table (SEL)"
    quote: "The Load value from State Estimator, including a calculated net Load value at each Private Use Network and adjustments to account for Distribution Generation Resource (DGR) and Distribution Energy Storage Resource (DESR) injections and withdrawals that are settled at a Resource Node, excluding Wholesale Storage Load (WSL) and Non-WSL Energy Storage Resource (ESR) Charging Load, for Electrical Bus b in the Load Zone, for the SCED interval y."
  - id: e18
    source: imm-som-2025
    locator: "page 30 (OCR), Chapter I.D, Shortage and Reliability Pricing, 1. ORDC"
    quote: "In ERCOT’s market design before RTC went live on December 5, 2025, ERCOT did this by adding an ORDC price adder to energy and reserve prices when reserves were low."
  - id: e19
    source: imm-som-2025
    locator: "page 30 (OCR), Chapter I.D, 1. ORDC"
    quote: "Overall, the ORDC contributed less than $0.02/MWh to the annual average real-time energy price."
  - id: e20
    source: np-06
    locator: "Section 6.5.7.3.1, paragraph (1)(a)-(d)"
    quote: "The following categories of reliability deployments are considered in the determination of the Real-Time Reliability Deployment Price Adder for Energy, and the Real-Time Reliability Deployment Price Adders for Ancillary Services: (a) RUC-committed Resources, except for those whose QSEs have opted out of RUC Settlement in accordance with paragraph (14) of Section 5.5.2, Reliability Unit Commitment (RUC) Process;"
  - id: e21
    source: imm-som-2025
    locator: "page 31 (OCR), Chapter I.D, 2. RDPA"
    quote: "The RDPA was active 71% more hours in 2025 than in 2024. The main driver of this increase was the large increase in RUC commitments from 2024 to 2025, as shown in Table 7. Despite the increase in hours when the RDPA was $0.01/MWh or greater, its overall effect on prices remained modest at $0.41 per MWh for the year."
  - id: e22
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter I.C, Table 1"
    quote: "Table 1: Average Annual Real-Time Energy Market Prices by Zone 2021 2022 2023 2024 2025 Energy Prices ($ per MWh) ERCOT $179.24 $76.41 $73.28 $32.41 $36.94 Houston $136.69 $82.47 $72.88 $30.24 $34.95 North $221.52 $77.30 $78.01 $30.42 $35.34 South $200.35 $74.39 $71.12 $34.66 $37.59 West $111.56 $66.62 $67.56 $35.88 $41.59"
  - id: e23
    source: imm-som-2025
    locator: "page 29 (OCR), Chapter I.C, text under Table 1"
    quote: "The West zone includes both the Panhandle, which has abundant wind and solar resources but is export-constrained, and the Permian Basin, which has seen rapid demand growth and is import-constrained. This duality explains why the West zone experienced the highest number of intervals with negative prices and the greatest frequency of price spikes of any load zone."
  - id: e24
    source: np-06
    locator: "Section 6.3, paragraphs (4) and (5)(a),(c)"
    quote: "For purposes of a price correction performed prior to 1600 on the second Business Day after the Operating Day, the impact of a price correction shall be considered significant, as that term is used in paragraph (4) above, for the Operating Day when: (a) The absolute value change to any single Real-Time Settlement Point Price at a Resource Node or Real-Time MCPC is greater than $0.05/MWh; (b) The price correction would require ERCOT to change more than 50 Real-Time Settlement Point Prices and/or Real-Time MCPCs; (c) The absolute value change to any Real-Time Settlement Point Price at a Load Zone or Hub is greater than $0.02/MWh; or (d) The estimated absolute total dollar impact for changes to Real-Time prices for energy metered is greater than $500."
  - id: e25
    source: np-07
    locator: "Section 7.9.1.1, paragraph (1)"
    quote: "Except as specified in paragraph (2) below, ERCOT shall pay or charge the owner of each Point-to-Point (PTP) Obligation based on the difference in the Day-Ahead Settlement Point Price between the sink Settlement Point and the source Settlement Point."
  - id: e26
    source: np-06
    locator: "Section 6.3, paragraph (7)"
    quote: "All Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final at 1600 of the second Business Day after the Operating Day."
  - id: e27
    source: np-06
    locator: "Section 6.3, paragraph (4)"
    quote: "ERCOT shall correct prices for an Operating Day when accurate prices can be determined, the impact of the price correction is determined to be significant, and one of the following conditions has been met: a market solution is determined to be invalid, invalid prices are identified in an otherwise valid market solution, the Base Points or Ancillary Service awards received by Market Participants are inconsistent with the Base Points or Ancillary Service awards of a valid market solution, or the Security-Constrained Economic Dispatch (SCED) process experiences a failure as described in Section 6.5.9.2, Failure of the SCED Process."
  - id: e28
    source: ercot-summer-2026-review
    locator: "Summer 2026 review, ESR offers slide, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e29
    source: np-04
    locator: "Section 4.6.1.2, variable table (DASL)"
    quote: "The DAM Shadow Price for the system power balance constraint for the hour."
  - id: e30
    source: np-04
    locator: "Section 4.6.1.2, variable table (DALZSF)"
    quote: "The DAM aggregated Shift Factor of a Load Zone for the constraint c for the hour."
  - id: e31
    source: imm-som-2025
    locator: "Appendix G, RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature."
  - id: e32
    source: np-06
    locator: "Section 6.6.1.2, paragraph (1), formula (DC Tie Load Zone)"
    quote: "For a DC Tie Load Zone: LZLMP _(y) = RTLMP _(b, y)"
  - id: e33
    source: np-04
    locator: "Section 4.6.1.2, paragraph (1), formula (Load Zones other than DC Tie)"
    quote: "DASPP = DASL - $\\begin{array}{r} \\Sigma \\\\ c \\end{array}$(DALZSF _(c) * DASP _(c))"
---

## Definition

A Settlement Point Price (SPP) is the price calculated for a Settlement Point for each Settlement Interval, using LMP data and the formulas in Section 4.6 (DAM Settlement) and Section 6.6 (Real-Time settlement calculations). [e1] A Settlement Point is a Resource Node, a Load Zone or a Hub. [e2]

## How it works

Day-ahead. The DASPP at a Resource Node for an hour is the LMP at that node from the DAM process. [e3] For a Load Zone, ERCOT calculates the day-ahead price from Load-weighted aggregated Shift Factors of the energized power flow buses for each constraint, with the weighting based on Load distribution factors. [e9] For a Hub, the DASPP follows the methodology in that Hub's definition. [e4]

Real time. The Resource Node price is the time-weighted average of the sum of the Real-Time LMPs and the Real-Time Reliability Deployment Price Adder for Energy, calculated for each 15-minute Settlement Interval. [e5] The Load Zone price is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6] The Hub price again follows the Hub's own definition in Section 3.5.2. [e7]

Two protocol rules shape the real-time number after the LMP is known. First, an administrative price floor of -$251/MWh is applied after the Reliability Deployment Price Adders for Energy are added. [e8] Second, ERCOT assigns an LMP to de-energized Electrical Buses by heuristic rules applied in order: an LMP predetermined by ERCOT for that bus if there is one, otherwise (first) the average LMP of buses in the same station at the same voltage level. [e10]

## Formula

Real-time Resource Node price, per 15-minute Settlement Interval: RTSPP = Max (-$251, (sum over SCED intervals y of RNWF(y) x (RTLMP(y) + RTRDPA(y)))). [e13] RTLMP is the Real-Time LMP at the Settlement Point for SCED interval y, RTRDPA is the Reliability Deployment Price Adder for Energy for that interval, and RNWF is the weight for the portion of the SCED interval inside the Settlement Interval, equal to that portion's duration divided by the sum of durations. [e16][e5] The sum runs over all SCED runs covering the 15-minute interval. [e15]

Real-time Load Zone price: the same -$251 floor applies to the time-weighted Load Zone LMP plus the Real-Time Reliability Deployment Price for Energy (RTRDP). [e6][e8] The Load Zone LMP for a SCED interval weights each bus LMP by State Estimator Load at that bus. [e6] That Load value includes a calculated net Load at each Private Use Network and DGR/DESR adjustments, and excludes Wholesale Storage Load and Non-WSL ESR charging Load. [e17] For a DC Tie Load Zone the Load Zone LMP is simply the bus LMP. [e32]

Day-ahead Load Zone price: built from Day-Ahead System Lambda (the DAM Shadow Price for the system power balance constraint) less, summed over constraints c, the constraint's Shadow Price times the Load Zone's aggregated Shift Factor (DASPP = DASL minus the sum of DALZSF x DASP). [e33][e29][e30][e9] The weights come from Load distribution factors over energized power flow buses. [e9]

## ERCOT context

The settlement price is a different object from the LMP: the IMM notes generators settle at the nodal level while loads are billed at the load zone price, a load-weighted average of nodal prices in the zone. [e14] On shortage pricing, the IMM notes that since RTC was implemented, shortage pricing has been incorporated into the price of energy rather than functioning as a separate adder. [e11] The Reliability Deployment Price Adder for Energy is still part of the real-time SPP formula in the current protocol text. [e5]

For outcomes, the IMM reports that in 2025 the West zone had the highest average price, followed by the South zone. [e12]

### Real-time price corrections and finality

ERCOT corrects prices for an Operating Day only when accurate prices can be determined, the impact is significant and a listed condition (invalid solution, invalid prices, inconsistent Base Points or awards, or a SCED failure) is met. [e27] Before 1600 on the second Business Day after the Operating Day, a change is significant if, among other tests, any Resource Node price or MCPC changes by more than $0.05/MWh, any Load Zone or Hub price changes by more than $0.02/MWh, or more than 50 prices change. [e24] After that time prices are final, subject to Board review. [e26]

### RTC and the adder

The Reliability Deployment Price Adder counts RUC-committed Resources (except those whose QSEs opted out of RUC Settlement) among its deployment categories. [e20] The IMM says RTC replaced the ORDC adder with Ancillary Service Demand Curves, while the Reliability Deployment Price Adder remains with a new feature. [e31] Real-time shortage pricing now sits inside the energy price. [e11]

## Timeline

- December 5, 2025: RTC went live, ending the ORDC price adder design (IMM). [e18]
- After RTC go-live, the System-Wide Offer Cap was reduced to $2000/MWh from $5000/MWh (ERCOT summer 2026 review). [e28]

## Key facts

- Settlement Points are Resource Nodes, Load Zones and Hubs. [e2]
- The Day-Ahead SPP at a Resource Node equals the DAM LMP there. [e3]
- The Real-Time SPP is calculated per 15-minute Settlement Interval from Real-Time LMPs plus the Reliability Deployment Price Adder for Energy. [e5]
- Real-Time SPPs have an administrative floor of -$251/MWh. [e8]
- In 2025 the West zone had the highest average zonal price, then South (IMM). [e12]
- Annual average real-time energy prices (IMM, load-weighted, excluding DC tie imports and exports): ERCOT $36.94/MWh in 2025, $32.41 in 2024, $73.28 in 2023; West $41.59 in 2025. [e22]
- 2025: the ORDC added under $0.02/MWh to the average real-time energy price, and the RDPA added $0.41/MWh. [e19][e21]
- Real-time prices are final at 1600 on the second Business Day after the Operating Day. [e26]

## Say it like this

The SPP is the price that actually settles: it is built from LMPs but computed at a Resource Node, Load Zone or Hub, hourly in the day-ahead and per 15 minutes in real time. Generators see node prices, loads see zone averages, and hubs follow their own definitions.

## Common confusion

- SPP versus LMP: the LMP is a bus-level SCED or DAM output, while the SPP is the settled price at a Settlement Point. [e1]
- Day-ahead versus real-time Load Zone method: the day-ahead price uses shift-factor aggregation with load distribution factors, while the real-time price is the load-weighted average of bus LMPs using State Estimator Load. [e9][e6]
- Real-time shortage pricing no longer comes from a separate ORDC adder in the current text; do not describe the current real-time SPP as LMP plus ORDC. [e11]

## Questions

### What is the difference between an LMP and a Settlement Point Price?

The LMP is the bus-level marginal cost from DAM or SCED. The SPP is calculated for a Resource Node, Load Zone or Hub from LMP data using the Section 4.6 and 6.6 formulas. [e1] A Resource Node's day-ahead SPP is simply its LMP, while its real-time SPP also includes the reliability deployment adder. [e3][e5]

### How is a real-time Load Zone price calculated?

It is based on state-estimated Load in MW and the time-weighted average Real-Time LMPs at the Electrical Buses in the zone. [e6]

### Why did the West zone price highest in 2025?

The IMM says the West zone includes the export-constrained Panhandle and the import-constrained Permian Basin, which explains its many negative-price intervals and frequent spikes. [e23][e12]

### Why did the RDPA add so little in 2025 even though it was active more often?

It was active 71% more hours than in 2024, driven by more RUC commitments, but added only $0.41/MWh for the year, which the IMM reads as a lack of genuine scarcity. [e21]

### What if a real-time SPP is wrong?

ERCOT corrects it only if accurate prices can be determined, the impact is significant and a listed condition is met; prices are final at 1600 on the second Business Day after the Operating Day, subject to Board review. [e27][e26]

### Which price settles a PTP Obligation?

The Day-Ahead Settlement Point Price difference between sink and source. [e25]

### What is the lowest a real-time SPP can be?

The protocol sets an administrative floor of -$251/MWh, applied after adding the Reliability Deployment Price Adders for Energy. [e8]

## Example

Suppose a Resource Node has two SCED runs in a 15-minute interval: one covering 600 seconds at an LMP of $20 and one covering 300 seconds at $50, with no adder. The weights are 600/900 and 300/900, so the RTSPP is (2/3 x 20) + (1/3 x 50) = $30/MWh. [e13][e16]

## Open items

- Annual average Hub prices (North, South, Houston, West): the IMM reports saved here give zone averages in tables whose numbers are garbled in the text extraction, so I did not cite dollar levels.
- Day-ahead Hub formula (the DASPP for a Hub uses each Hub definition in Section 3.5.2) and the full day-ahead Load Zone equation text: equation images garble in the extraction, so the DAM Load Zone price is described from its variable list.
- Annual average Hub prices were still not sourced as numbers; Table 1 gives zones only.
- A plain-language statement of how the ORDC adder was removed in the protocol: the current np-06 text contains no ORDC adder; the removal is sourced only through the IMM's statement about RTC.
