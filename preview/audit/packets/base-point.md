# Audit packet: Base Point (base-point)

kind concept · domain pricing · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Base Point · text copy line 225 · heading above: 2.1 DEFINITIONS

BEFORE: … any general arrangement for the benefit of creditors; (c) Has a liquidator, administrator, receiver, trustee, conservator, or similar official appointed with respect to it or any substantial portion of its property or assets; or (d) Is generally unable to pay its debts as they fall due. Base Point 
QUOTE: The MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process.
AFTER:  Batch Zero Process A transitional interconnection process used to evaluate on a system-wide basis one or more Large Loads that meet the requirements set forth in Planning Guide Section 9.2, General Provisions. Batch Zero Interconnection Study A singular, system-wide interconnection study conducted …

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4, paragraph (1) · text copy line 2472 · heading above: 6.5.7.4 Base Points

BEFORE: …evel 3 to either maintain sufficient PRC or stabilize grid frequency, as described in paragraph (3) of Section 6.5.9.4.2, the Real-Time Reliability Deployment Price Adder for Ancillary Service is the VOLL used to determine the ASDCs minus the MCPC for that Ancillary Service. 6.5.7.4 Base Points (1) 
QUOTE: ERCOT shall issue a Base Point for each On-Line Generation Resource, each On-Line ESR, and each On-Line CLR on completion of each SCED execution. The Base Point set by SCED must observe a Resource's HDL and LDL.
AFTER:  Base Points are automatically superseded on receipt of a new Base Point from ERCOT regardless of the status of any current ramping activity of a Resource. ERCOT shall provide each Base Point using Dispatch Instructions issued over Inter-Control Center Communications Protocol (ICCP) data link to the…

### e3 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …e awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary. The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. 
QUOTE: The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints.
AFTER:  The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SO…

### e4 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.3, paragraph (4)(c) · text copy line 452 · heading above: 6.3 Adjustment Period and Real-Time Operations Timeline

BEFORE: …t correcting the Real-Time Settlement Point Prices will affect the Base Points, or correcting Real-Time MCPCs will affect Ancillary Service awards, then ERCOT shall correct the prices before the prices are considered final and settle the SCED executions as failed in accordance with Section 6.5.9.2. 
QUOTE: (c) For Settlement purposes, if the Base Points are inconsistent with the Real-Time LMPs, ignoring the Real-Time Reliability Deployment Price Adder for Energy, or Ancillary Service awards are inconsistent with the Real-Time MCPCs, ignoring the Real-Time Reliability Deployment Price Adder for Ancillary Service, averaged over the 15-minute Settlement Interval, then ERCOT shall consider the relevant Settlement Interval(s) in accordance with Section 6.6.9, Emergency Operations Settlement.
AFTER:  (7) All Real-Time LMPs, Real-Time Settlement Point Prices, Real-Time prices for energy metered, Real-Time Reliability Deployment Price Adders for Energy, Real-Time MCPCs, and Real-Time Reliability Deployment Price Adders for Ancillary Service are final at 1600 of the second Business Day after the O…

### e5 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.1.2, Centralized Dispatch, paragraph (1) · text copy line 1020 · heading above: 6.5.1.2 Centralized Dispatch

BEFORE: …rates that any payments made to accelerate the Commercial Operations Date is justifiable and reasonable, and that, absent the payments, the acceleration would not have occurred otherwise. (j) An Entity cannot be compelled to enter into a contract under this Section. 6.5.1.2 Centralized Dispatch (1) 
QUOTE: ERCOT shall centrally Dispatch Resources and Transmission Facilities under these Protocols, including deploying energy by establishing Base Points, and Emergency Base Points, and by deploying Regulation Service, ERCOT Contingency Reserve Service (ECRS), and Non-Spinning Reserve (Non-Spin) to ensure operational security.
AFTER:  Responsive Reserve (RRS) shall be self-deployed in response to frequency deviations or as specified in Nodal Operating Guide Section 4.8, Responsive Reserve Service and ERCOT Contingency Reserve Service During Scarcity Conditions. (2) ERCOT shall verify that either an Energy Offer Curve or Energy B…

### e6 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

## Statements to check

- **Definition #1** (cites e1): A Base Point is the MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process. [e1]
- **How it works #1** (cites e2, e6, e3): ERCOT issues a Base Point for each On-Line Generation Resource, ESR and CLR on completion of each SCED execution, and the Base Point must observe the Resource's HDL and LDL. [e2] SCED runs approximately every five minutes, or more frequently if necessary, setting Base Points and calculating LMPs together. [e6] To get there it evaluates Energy Offer Curves and other offers and bids, maximizing bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e3]
- **ERCOT context #1** (cites e5, e4): Base Points are how ERCOT deploys energy: the Protocols describe central dispatch as including deploying energy by establishing Base Points and Emergency Base Points. [e5] For Settlement, if Base Points are inconsistent with the Real-Time LMPs (ignoring the Real-Time Reliability Deployment Price Adder for Energy) averaged over the 15-minute Settlement Interval, ERCOT considers that Settlement Interval under Section 6.6.9, Emergency Operations Settlement. [e4]
- **Key facts #1** (cites e1): - A Base Point is the SCED output MW level for a Resource. [e1]
- **Key facts #2** (cites e2): - Issued for each On-Line Generation Resource, ESR and CLR after each SCED execution. [e2]
- **Key facts #3** (cites e6): - SCED runs approximately every five minutes or more often. [e6]
- **Key facts #4** (cites e2): - Must observe the Resource's HDL and LDL. [e2]
- **Common confusion #1** (cites e3, e1): - Base Point versus offer curve: the offer curve is the input from the QSE and the Base Point is the output from SCED. [e3][e1]
- **Common confusion #2** (cites e5): - Base Point versus Emergency Base Point: the Protocols distinguish the two. [e5]
- **Questions #2** (cites e2, e6): ERCOT, through SCED, after each execution, roughly every five minutes. [e2][e6]
- **Questions #4** (cites e2): The Resource's HDL and LDL. [e2]
- **Link to sced** (cites e1, e2): determines SCED (Security-Constrained Economic Dispatch): SCED produces a Base Point for each On-Line Resource on every execution. [e1][e2]
- **Link to energy-offer-curve** (cites e3): related Energy Offer Curve: Base Points come from SCED's evaluation of Energy Offer Curves. [e3]
- **Link to hsl-lsl** (cites e2): related HSL / LSL: The Base Point must observe the Resource's HDL and LDL. [e2]
- **Link to lmp** (cites e4): related LMP (Locational Marginal Price): The Protocols send Settlement Intervals where Base Points are inconsistent with the Real-Time LMPs to Emergency Operations Settlement. [e4]
- **Link to qse** (cites e2): related QSE (Qualified Scheduling Entity): Base Points are sent to the QSE representing each Resource. [e2]
- **Link to rtm** (cites e5): related Real-Time Market (RTM): Base Points are the real-time energy dispatch signal. [e5]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The base point is the MW target SCED gives each online resource every few minutes, derived from offers, limits and network constraints.

