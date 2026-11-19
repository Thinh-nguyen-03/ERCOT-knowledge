# Audit packet: Energy Offer Curve (energy-offer-curve)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Energy Offer Curve · text copy line 882

BEFORE: …possible continuity of service and maintaining the integrity of the ERCOT System. Energy Imbalance Service The difference between the amount of energy cleared in the Day-Ahead Market (DAM) and through trades and the amount of delivery of that energy in the Real-Time Market (RTM). Energy Offer Curve 
QUOTE: A proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity.
AFTER:  Energy Storage Resource (ESR) (see Resource) Energy Storage System (ESS) A facility, process, or device(s) that receives electric energy and stores it, in any form, for the purpose of later releasing electrical energy. Energy Trade A QSE-to-QSE financial transaction that transfers responsibility fo…

### e2 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (1) · text copy line 1404 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: … and Minimum-Energy Offer Generic Caps. A QSE may file verifiable unit-specific costs for a Resource at any time, but it is not required to file those costs only because of a DAM commitment. The most recent approved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) 
QUOTE: The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations.
AFTER:  (2) A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetr…

### e3 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (2) · text copy line 1406 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …proved verifiable costs on file must be used going forward. 4.4.9.3 Energy Offer Curve (1) The Energy Offer Curve represents the QSE's willingness to sell energy at or above a certain price and at a certain quantity in the DAM or its willingness to be dispatched by SCED in Real-Time Operations. (2) 
QUOTE: A QSE may submit Resource-specific Energy Offer Curves to ERCOT. Such Energy Offer Curves will be bounded in the DAM for each Operating Hour by the LSL and HSL of the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry.
AFTER:  (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution, …

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e5 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3.1, paragraph (1)(c) · text copy line 1430 · heading above: 4.4.9.3.1 Energy Offer Curve Criteria

BEFORE: …ffer Curve is submitted in a subsequent Adjustment Period. 4.4.9.3.1 Energy Offer Curve Criteria (1) Each Energy Offer Curve must be reported by a QSE and must include the following information: (a) The selling QSE; (b) The Resource represented by the QSE from which the offer would be supplied; (c) 
QUOTE: A monotonically non-decreasing offer curve for both price (in $/MWh) and quantity (in MW) with no more than ten price/quantity pairs and no more than two consecutive price/quantity pairs at the same price or quantity;
AFTER:  (d) The first and last hour of the Offer; (e) The expiration time and date of the offer; (f) Inclusive or exclusive designation relative to other DAM offers (for Real-Time, Energy Offer Curves are always considered to be inclusive with Ancillary Service Offers); (g) Percentage of FIP and percentage…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.4.3, paragraph (1) · text copy line 711 · heading above: 6.4.2 Output Schedules

BEFORE: …les during the Adjustment Period. (4) A detailed explanation of Ancillary Service Trade criteria and validations performed by ERCOT is provided in Section 4.4.7.3, Ancillary Service Trades. A QSE may submit and update Ancillary Service Trades during the Adjustment Period. 6.4.2 Output Schedules (1) 
QUOTE: A QSE that represents a Resource, other than a Reliability Must-Run (RMR) Unit, must submit and maintain an Energy Offer Curve, an Energy Bid/Offer Curve, or an Output Schedule for the Resource for all times when the Resource is On-Line.
AFTER:  (2) The entry of an Energy Offer Curve or Energy Bid/Offer Curve for a Resource automatically nullifies the Output Schedule for that Resource and prohibits entry of future Output Schedules for that Resource for the time during which the Energy Offer Curve or Energy Bid/Offer Curve is in effect. (3)…

### e8 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Congestion chapter, introduction · text copy line 5083

BEFORE: …ower flows on the transmission network efficiently. The markets manage congestion by coordinating generation dispatch so the resulting power flows do not exceed the operating limits of the transmission infrastructure. This coordination occurs through the real-time market dispatch model, i.e., SCED, 
QUOTE: which schedules generation to meet demand based on each generator's energy offer curve and its corresponding
AFTER:  impact on transmission constraints. This market dispatch produces a set of locational prices that vary across the network and congestion costs collected from participants. Key insights on transmission and congestion in ERCOT in 2025 include: • Day-ahead congestion in ERCOT increased 26% in 2025, en…

### e7 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.3, paragraph (4) · text copy line 1410 · heading above: 4.4.9.3 Energy Offer Curve

BEFORE: …f the Generation Resource specified in the COP, and bounded in SCED by the LSL and HSL of the Generation Resource as shown by telemetry. (3) Energy Offer Curves remain active for the offered period until automatically inactivated by the software at the offer expiration time selected by the QSE. (4) 
QUOTE: For any Operating Hour, the QSE for a Resource may submit or change Energy Offer Curve information at any time prior to SCED execution
AFTER: , except for the percentage of FIP and percentage of FOP, and SCED will use the latest updated Energy Offer Curve available in the system. The QSE must provide a brief freeform reason at the time of the submission of the Energy Offer Curve if submitted after the end of the Adjustment Period. For the…

### e9 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.9.1, Three-Part Supply Offers, paragraph (1) · text copy line 1262 · heading above: 4.4.9.1 Three-Part Supply Offers

BEFORE: …may, at its discretion, Dispatch RMR Units to restore the ERCOT Transmission Grid. (c) RMR offers shall be treated as if they were Resource offers for purposes of posting under Section 3.2.5, Publication of Resource and Load Information. 4.4.9 Energy Offers and Bids 4.4.9.1 Three-Part Supply Offers 
QUOTE: (1) A Three-Part Supply Offer consists of a Startup Offer, a Minimum-Energy Offer, and an Energy Offer Curve.
AFTER:  ERCOT must validate each Startup Offer, Minimum-Energy Offer, and Energy Offer Curve before it can be used in any ERCOT process. (2) The DAM uses all three parts of the Three-Part Supply Offer and also uses Energy Offer Curves submitted without a Startup Offer and without a Minimum-Energy Offer. Th…

## Statements to check

- **Definition #1** (cites e1): An Energy Offer Curve is a proposal to sell energy at a Settlement Point at a monotonically non-decreasing price with increasing quantity. [e1]
- **How it works #1** (cites e2, e5, e3): The curve represents the QSE's willingness to sell energy at or above a given price and quantity in the DAM, or its willingness to be dispatched by SCED in real time. [e2] A curve must be monotonically non-decreasing in both price and quantity, with no more than ten price/quantity pairs and no more than two consecutive pairs at the same price or quantity. [e5] A Resource-specific curve is bounded by the Generation Resource's LSL and HSL: in the DAM the limits specified in the COP, in SCED the limits shown by telemetry. [e3]
- **How it works #2** (cites e7, e4): A QSE may change its curve for any Operating Hour at any time before SCED executes. [e7] SCED then evaluates the curves, along with other offers and bids, to set dispatch by maximizing bid-based revenues minus offer-based costs subject to power balance and network constraints. [e4]
- **ERCOT context #1** (cites e6, e8): A QSE representing a Resource, other than an RMR Unit, must keep an Energy Offer Curve, an Energy Bid/Offer Curve or an Output Schedule in place whenever the Resource is On-Line. [e6] The IMM describes SCED as scheduling generation to meet demand based on each generator's energy offer curve. [e8]
- **Key facts #1** (cites e5): - Curve must be monotonically non-decreasing, up to ten price/quantity pairs. [e5]
- **Key facts #2** (cites e3): - Bounded by LSL and HSL: COP values in the DAM, telemetry in SCED. [e3]
- **Key facts #3** (cites e7): - Can be changed any time before SCED execution for the hour. [e7]
- **Key facts #4** (cites e4): - SCED uses the curves to maximize bid-based revenues minus offer-based costs. [e4]
- **Say it like this #1** (cites e4): The energy offer curve is the generator's price ladder: how much it will produce at each price. SCED evaluates that ladder, along with other offers and bids, to decide dispatch. [e4]
- **Common confusion #1** (cites e9): - Energy Offer Curve versus Three-Part Supply Offer: a Three-Part Supply Offer has three parts, the Startup Offer, the Minimum-Energy Offer and the Energy Offer Curve, so the curve is only one of them. [e9]
- **Common confusion #2** (cites e6): - Offer curve versus Output Schedule: an On-Line Resource must have an Energy Offer Curve, an Energy Bid/Offer Curve or an Output Schedule, so the Output Schedule is the alternative to an offer curve. [e6]
- **Questions #2** (cites e5): Monotonically non-decreasing in price and quantity, with at most ten price/quantity pairs. [e5]
- **Questions #4** (cites e3): The Resource's LSL and HSL as shown by telemetry. [e3]
- **Questions #6** (cites e7): At any time before SCED executes for that Operating Hour. [e7]
- **Link to three-part-supply-offer** (cites e9): part-of Three-Part Supply Offer: The Energy Offer Curve is one of the three parts of a Three-Part Supply Offer, with the Startup Offer and the Minimum-Energy Offer. [e9]
- **Link to sced** (cites e4): used-in SCED (Security-Constrained Economic Dispatch): SCED evaluates Energy Offer Curves to set dispatch. [e4]
- **Link to dam** (cites e3): used-in Day-Ahead Market (DAM): The DAM uses Energy Offer Curves, bounded by the Resource's LSL and HSL. [e3]
- **Link to base-point** (cites e4): determines Base Point: SCED evaluates Energy Offer Curves to determine Resource Dispatch Instructions. [e4]
- **Link to cop** (cites e3): related COP (Current Operating Plan): The DAM curve is bounded by limits from the COP. [e3]
