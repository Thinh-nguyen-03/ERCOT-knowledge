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

### e7 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4, paragraph (1) · text copy line 2472 · heading above: 6.5.7.4 Base Points

BEFORE: … determine the ASDCs minus the MCPC for that Ancillary Service. 6.5.7.4 Base Points (1) ERCOT shall issue a Base Point for each On-Line Generation Resource, each On-Line ESR, and each On-Line CLR on completion of each SCED execution. The Base Point set by SCED must observe a Resource's HDL and LDL. 
QUOTE: Base Points are automatically superseded on receipt of a new Base Point from ERCOT regardless of the status of any current ramping activity of a Resource. ERCOT shall provide each Base Point using Dispatch Instructions issued over Inter-Control Center Communications Protocol (ICCP) data link to the QSE representing each Resource that include the following information:
AFTER:  (a) Resource identifier that is the subject of the Dispatch Instruction; (b) MW output for Generation Resource, MW output or MW consumption for ESR, and MW consumption for CLR; (c) Time of the Dispatch Instruction; (d) Flag indicating SCED has dispatched a Generation Resource, ESR, or CLR below HDL…

### e8 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4, paragraph (1)(b) · text copy line 2476 · heading above: 6.5.7.4 Base Points

BEFORE: … Resource. ERCOT shall provide each Base Point using Dispatch Instructions issued over Inter-Control Center Communications Protocol (ICCP) data link to the QSE representing each Resource that include the following information: (a) Resource identifier that is the subject of the Dispatch Instruction; 
QUOTE: (b) MW output for Generation Resource, MW output or MW consumption for ESR, and MW consumption for CLR;
AFTER:  (c) Time of the Dispatch Instruction; (d) Flag indicating SCED has dispatched a Generation Resource, ESR, or CLR below HDL used by SCED or an IRR has been instructed not to exceed its Base Point; +------------------------------------------------------------------------------------------------------…

### e9 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4.1, Updated Desired Set Points, paragraph (1) · text copy line 2502 · heading above: 6.5.7.4.1 Updated Desired Set Points

BEFORE: …---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 6.5.7.4.1 Updated Desired Set Points 
QUOTE: (1) Each Resource shall follow ERCOT-issued Updated Desired Set Points (UDSPs), unless otherwise instructed by ERCOT. ERCOT-issued UDSPs shall not include expected Primary Frequency Response.
AFTER:  (2) A UDSP is the sum of a calculated MW value representing the expected MW output (positive or negative) of a Resource ramping to a SCED Base Point and the Resource-specific Regulation Service instruction from ERCOT. (3) LFC shall send Resource-specific UDSP to QSEs every four seconds. (4) Resourc…

### e10 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4.1, paragraph (2) · text copy line 2504 · heading above: 6.5.7.4.1 Updated Desired Set Points

BEFORE: …---------------------------------------------------------------------+ 6.5.7.4.1 Updated Desired Set Points (1) Each Resource shall follow ERCOT-issued Updated Desired Set Points (UDSPs), unless otherwise instructed by ERCOT. ERCOT-issued UDSPs shall not include expected Primary Frequency Response. 
QUOTE: (2) A UDSP is the sum of a calculated MW value representing the expected MW output (positive or negative) of a Resource ramping to a SCED Base Point and the Resource-specific Regulation Service instruction from ERCOT.
AFTER:  (3) LFC shall send Resource-specific UDSP to QSEs every four seconds. (4) Resources, excluding non-CLRs, that have been awarded RRS as FFR-capable Resources or are telemetering a Resource Status of ONSC, will all have manual deployment instructions and expected deployments triggered automatically b…

### e11 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4.1, paragraphs (3) · text copy line 2506 · heading above: 6.5.7.4.1 Updated Desired Set Points

BEFORE: … ERCOT. ERCOT-issued UDSPs shall not include expected Primary Frequency Response. (2) A UDSP is the sum of a calculated MW value representing the expected MW output (positive or negative) of a Resource ramping to a SCED Base Point and the Resource-specific Regulation Service instruction from ERCOT. 
QUOTE: (3) LFC shall send Resource-specific UDSP to QSEs every four seconds.
AFTER:  (4) Resources, excluding non-CLRs, that have been awarded RRS as FFR-capable Resources or are telemetering a Resource Status of ONSC, will all have manual deployment instructions and expected deployments triggered automatically by frequency deviations included in the UDSP value provided to the QSE …

### e12 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.4.1, paragraph (5) · text copy line 2510 · heading above: 6.5.7.4.1 Updated Desired Set Points

BEFORE: …deployment instructions and expected deployments triggered automatically by frequency deviations included in the UDSP value provided to the QSE for the Resource. These deployment components of UDSP will reflect the latest Ancillary Service awards and are separate from the ramping component of UDSP. 
QUOTE: (5) When ERCOT System frequency experiences a 0.05 Hz or greater deviation from scheduled frequency, and a Resource is ramping to a SCED Base Point in a manner directionally opposite to system frequency, the ramping component of the Resource's UDSP will be temporarily held constant and flagged accordingly.
AFTER:  6.5.7.5 Ancillary Services Capacity Monitor (1) Every ten seconds, ERCOT shall calculate the following and provide Real-Time summaries to ERCOT Operators and all Market Participants using ICCP and postings on the ERCOT website showing the Real-Time total system amount of: (a) RRS capability from: (…

### e13 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9, Emergency Operations, paragraph (1) · text copy line 3205 · heading above: 6.5.9 Emergency Operations

BEFORE: …he Resource(s) was required to complete actions; and (i) Other information relevant to that Dispatch Instruction. (3) Following receipt by the QSE of the VDI confirmation issued by ERCOT, the QSE shall provide ERCOT with electronic acknowledgement of the VDI confirmation. 6.5.9 Emergency Operations 
QUOTE: (1) ERCOT, based on ERCOT System reliability needs, may issue a Dispatch Instruction requiring a Resource to move to a specific output level ("Emergency Base Point").
AFTER:  (2) A QF may only be ordered Off-Line in the case of an ERCOT-declared Emergency Condition with imminent threat to the reliability of the ERCOT System. ERCOT may only Dispatch a QF below its LSL when ERCOT has declared an Emergency Condition and the QF is the only Resource that can provide the nece…

### e14 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.1, Emergency and Short Supply Operation, paragraph (2) · text copy line 3227 · heading above: 6.5.9.1 Emergency and Short Supply Operation

BEFORE: …he frequency control system; (c) Criteria for determining and maintaining system voltages within acceptable limits; (d) Criteria for maximum acceptable transmission equipment loading levels; and (e) Criteria for determining when ERCOT is subject to unacceptable risk of widespread cascading Outages. 
QUOTE: (2) ERCOT shall, to the fullest extent practicable, utilize the Day-Ahead process, the Adjustment Period process, and the Real-Time process before ordering Resources to specific output levels with Emergency Base Point instructions.
AFTER:  It is anticipated that, with effective and timely communication, the market-based tools available to ERCOT will avert most threats to the reliability of the ERCOT System. However, these Protocols do not preclude ERCOT from taking any action to preserve the integrity of the ERCOT System. 6.5.9.2 Fai…

### e15 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.6.9, Emergency Operations Settlement, paragraph (1) · text copy line 8332 · heading above: 6.6.9 Emergency Operations Settlement

BEFORE: …6.6.2.4, QSE Load Ratio Share for an Operating Hour. q none A QSE. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 6.6.9 Emergency Operations Settlement 
QUOTE: (1) Due to Emergency Conditions or Watches, additional compensation for each Generation Resource or ESR for which ERCOT provides an Emergency Base Point may be awarded to the QSE representing the Generation Resource or ESR. If the Resource was instructed to increase generation at a Settlement Point price that is lower than the price based on their Energy Offer Curve or Energy Bid/Offer Curve, or if the Resource was instructed to increase withdrawal at a Settlement Point price that is higher than the price based on their Energy Bid/Offer Curve, ERCOT shall pay the QSE additional compensation for the change from the SCED Base Point immediately before the Emergency Condition or Watch, per paragraph (1) in Section 6.6.9.1, Payment for Emergency Operations Settlement. The Energy Offer Curve and Energy/Bid Offer Curve shall be capped by the Mitigated Offer Cap (MOC).
AFTER:  (2) In accordance with paragraph (8) of Section 8.1.1.2, General Capacity Testing Requirements, QSEs that receive a VDI to operate the designated Generation Resource for an unannounced Generation Resource test may be considered for additional compensation utilizing the formula as stated in paragrap…

### e16 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.9.2, Failure of the SCED Process, paragraph (4)(b)-(c) · text copy line 3241 · heading above: 6.5.9.2 Failure of the SCED Process

BEFORE: …Market Suspension and Market Restart Settlement, will supersede the provisions set forth in paragraph (2) above. (4) Once ERCOT issues a Watch for a SCED process failure, ERCOT may use any of the following measures: (a) ERCOT may direct the SCED process to relax the active transmission constraints; 
QUOTE: (b) ERCOT may issue Emergency Base Points for Resources; (c) ERCOT may manually issue Emergency Base Points for a Resource and must communicate the Resource name, MW output requested, and start time and duration of the Dispatch Instruction to the QSE representing the Resource;
AFTER:  (d) ERCOT may issue an instruction to hold the previous interval; and (e) A QF, a hydro Generation Resource, or a nuclear-powered Resource may be instructed by ERCOT to operate below its LSL only after all other Resource options have been exhausted. (5) The Watch continues until the SCED process ca…

### e17 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (1), GREDP · text copy line 872 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …sections below. Failure to meet these requirements will be reported to the Reliability Monitor as non-compliance. 8.1.1.4.1 Regulation Service and Generation Resource/Controllable Load Resource/Energy Storage Resource Energy Deployment Performance, and Ancillary Service Capacity Performance Metrics 
QUOTE: (1) ERCOT shall compute the GREDP for each Generation Resource that is On-Line and released to SCED for Base Point Dispatch Instructions. The GREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows:
AFTER:  GREDP (%) = ABS[((ATG - AEPFR)/(ASP)) - 1.0] * 100 GREDP (MW) = ABS(ATG - AEPFR - ASP) Where: ATG = Average Telemetered Generation = the average telemetered generation of the Generation Resource or for the aggregate of the IRRs within an IRR Group for the five-minute clock interval ∆frequency is ac…

### e18 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (1), GREDP formula and variable ASP · text copy line 874 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …erformance, and Ancillary Service Capacity Performance Metrics (1) ERCOT shall compute the GREDP for each Generation Resource that is On-Line and released to SCED for Base Point Dispatch Instructions. The GREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows: 
QUOTE: GREDP (%) = ABS[((ATG - AEPFR)/(ASP)) - 1.0] * 100 GREDP (MW) = ABS(ATG - AEPFR - ASP) Where: ATG = Average Telemetered Generation = the average telemetered generation of the Generation Resource or for the aggregate of the IRRs within an IRR Group for the five-minute clock interval
AFTER:  ∆frequency is actual frequency minus 60 Hz EPFR = Estimated Primary Frequency Response (MW) = if │∆frequency│≤ Governor Dead-Band then EPFR = zero, if not then if ∆frequency > zero, EPFR = (∆frequency - Governor Dead-Band)/((droop value * 60) - Governor Dead-Band) * HSL * -1, if not then if ∆freque…

### e19 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (4)(e) · text copy line 932 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: … the CLR had a Resource Status of ONL; (c) The percentage of the monthly five-minute clock intervals during which the ESR had a Resource Status of ON; (d) The percentage of the monthly five-minute clock intervals during which the Generation Resource, IRR, ESR, or CLR was awarded Regulation Service; 
QUOTE: (e) The percentage of the monthly five-minute clock intervals during which the Generation Resource or the IRR Group was released to SCED that the GREDP was less than 2.5% and the percentage of the monthly five-minute clock intervals during which the Generation Resource or the IRR Group was released to SCED that the GREDP was less than 2.5 MW;
AFTER:  (f) The percentage of the monthly five-minute clock intervals during which the CLR had a Resource Status of ONL that the CLREDP was less than 2.5% and the percentage of the monthly five-minute clock intervals during which the CLR had a Resource Status of ONL that the CLREDP was less than 2.5 MW; (g…

### e20 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (5)(a)-(b) · text copy line 968 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …The percent of the monthly five-minute clock intervals during which the ESR was awarded Regulation Service that the ESREDP was greater than 5.0% and the percentage of the monthly five-minute clock intervals during which the ESR was awarded Regulation Service that the ESREDP was greater than 5.0 MW. 
QUOTE: (5) ERCOT shall calculate the GREDP/CLREDP/ESREDP under normal operating conditions. ERCOT shall not consider five-minute clock intervals during which any of the following events has occurred: (a) The five-minute intervals within the 20-minute period following an event in which ERCOT has experienced a Forced Outage causing an ERCOT frequency deviation of greater than 0.05 Hz; (b) Five-minute clock intervals in which ERCOT has issued Emergency Base Points to the QSE;
AFTER:  (c) The five-minute clock intervals following a documented Forced Derate or Startup Loading Failure of a Generation Resource, ESR, or any member IRR of an IRR Group. Upon request of the Reliability Monitor or ERCOT, the QSE shall provide the following documentation regarding each Forced Derate or S…

### e21 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (6)(a) · text copy line 1003 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …-------------------------------------------------------------------------------------------------+ (6) All Generation Resources, excluding IRRs, shall meet the following GREDP criteria for each month. ERCOT will report non-compliance of the following performance criteria to the Reliability Monitor: 
QUOTE: (a) A Generation Resource, excluding an IRR, must have a GREDP less than the greater of X% or Y MW for 85% of the five-minute clock intervals in the month during which GREDP was calculated.
AFTER:  (b) Additionally, all Generation Resources, excluding IRRs, will also be measured for performance specifically during intervals in which ERCOT has declared EEA Level 1 or greater. These Resources must meet the following GREDP criteria for the time window that includes all five-minute clock interval…

### e22 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (5)(f) · text copy line 986 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: …n 8.1.1.1, Ancillary Service Qualification and Testing, or the five-minute clock intervals during general capacity testing requirements as outlined in Section 8.1.1.2, General Capacity Testing Requirements; (e) The five-minute clock intervals where the telemetered Resource Status is set to STARTUP; 
QUOTE: (f) The five-minute clock intervals where a Generation Resource's ASP is below the average telemetered LSL;
AFTER:  (g) Certain other periods of abnormal operations as determined by ERCOT in its sole discretion; (h) For a CLR, the five-minute clock intervals in which the computed Base Points are equal to the snapshot of its telemetered power consumption; (i) For intervals where both the primary and backup Wide A…

### e23 · `np-08` · tier 1 · ERCOT Nodal Protocols, Section 8: Performance Monitoring (effective 2026-11-06)
locator: Section 8.1.1.4.1, paragraph (3), ESREDP · text copy line 904 · heading above: 8.1.1.4 Ancillary Service and Energy Deployment Compliance Criteria

BEFORE: … droop = 0.05, the Governor Dead-Band (Hz) and Resource HSL (MW) provided by the Resource Entity, and the frequency deviation (Hz) from 60 Hz and averaged for the five-minute clock interval ASP = Average Set Point = the time-weighted average of the Resource's UDSP for the five-minute clock interval 
QUOTE: (3) ERCOT shall compute the ESREDP for ESRs. The ESREDP is calculated for each five-minute clock interval as a percentage and in MWs as follows:
AFTER:  ESREDP (%) = ABS[((ATPF - AEPFR)/(ASP)) - 1.0] * 100 ESREDP (MW) = ABS(ATPF - AEPFR - ASP) Where: ATPF = Average Telemetered Power Flow = the average telemetered power flow of the Energy Storage Resource for the five-minute clock interval. ASP = Average Set Point = the time-weighted average of UDSP…

## Statements to check

- **Definition #1** (cites e1): A Base Point is the MW output level for a Resource produced by the Security-Constrained Economic Dispatch (SCED) process. [e1]
- **How it works #1** (cites e2, e6, e3): ERCOT issues a Base Point for each On-Line Generation Resource, ESR and CLR on completion of each SCED execution, and the Base Point must observe the Resource's HDL and LDL. [e2] SCED runs approximately every five minutes, or more frequently if necessary, setting Base Points and calculating LMPs together. [e6] To get there it evaluates Energy Offer Curves and other offers and bids, maximizing bid-based revenues minus offer-based costs subject to power balance, ASDCs and network constraints. [e3]
- **How it works #2** (cites e7, e8): Base Points are delivered as Dispatch Instructions over the ICCP data link to the QSE representing each Resource. A new Base Point automatically supersedes the previous one regardless of any ramping still under way. [e7] The instruction carries the Resource identifier, the time, and the MW target, which is MW output for a Generation Resource, MW output or MW consumption for an ESR, and MW consumption for a CLR. [e7][e8]
- **How it works #4** (cites e9, e10, e11, e12): A Resource does not simply jump to its Base Point. Each Resource follows ERCOT-issued Updated Desired Set Points (UDSPs) unless ERCOT instructs otherwise, and UDSPs do not include expected Primary Frequency Response. [e9] A UDSP is the sum of a calculated MW value for the expected output of the Resource ramping to its SCED Base Point and the Resource-specific Regulation Service instruction. [e10] Load Frequency Control sends the Resource-specific UDSP to QSEs every four seconds. [e11] When system frequency deviates 0.05 Hz or more from scheduled and a Resource is ramping to a Base Point in the direction opposite to system frequency, the ramping component of its UDSP is temporarily held constant and flagged. [e12]
- **ERCOT context #1** (cites e5, e4): Base Points are how ERCOT deploys energy: the Protocols describe central dispatch as including deploying energy by establishing Base Points and Emergency Base Points. [e5] For Settlement, if Base Points are inconsistent with the Real-Time LMPs (ignoring the Real-Time Reliability Deployment Price Adder for Energy) averaged over the 15-minute Settlement Interval, ERCOT considers that Settlement Interval under Section 6.6.9, Emergency Operations Settlement. [e4]
- **ERCOT context #3** (cites e13, e14, e16): Separately from SCED, ERCOT, based on system reliability needs, may issue a Dispatch Instruction requiring a Resource to move to a specific output level, called an "Emergency Base Point". [e13] The Protocols say ERCOT shall, to the fullest extent practicable, use the Day-Ahead, Adjustment Period and Real-Time processes before ordering Resources to specific output levels with Emergency Base Point instructions. [e14] After ERCOT issues a Watch for a SCED process failure, it may issue Emergency Base Points for Resources, and when it does so manually it must tell the QSE the Resource name, MW output requested, and start time and duration. [e16]
- **ERCOT context #4** (cites e15): Emergency Base Points can trigger extra pay. Under Section 6.6.9, where a Generation Resource or ESR gets an Emergency Base Point during Emergency Conditions or Watches and is instructed to increase generation at a price below its offer curve price, ERCOT pays the QSE additional compensation for the change from the SCED Base Point immediately before, and the offer curve is capped by the Mitigated Offer Cap. [e15]
- **ERCOT context #6** (cites e17, e23) FLAG number-not-in-quote: 8.1, 1.4: Section 8.1.1.4.1 measures how well a Resource follows its set point, not the raw Base Point. ERCOT computes the Generation Resource Energy Deployment Performance (GREDP) for each Generation Resource that is On-Line and released to SCED for Base Point Dispatch Instructions, for each five-minute clock interval. [e17] ESRs have an equivalent measure, the ESREDP. [e23]
- **Formula #1** (cites e18): GREDP (%) = ABS[((ATG - AEPFR)/(ASP)) - 1.0] * 100, and GREDP (MW) = ABS(ATG - AEPFR - ASP). In words: ATG is the average telemetered generation of the Resource (or the aggregate of an IRR Group) for the five-minute clock interval, AEPFR is the average Estimated Primary Frequency Response, and ASP is the time-weighted average of the Resource's UDSP for the interval. [e18]
- **Key facts #1** (cites e1): - A Base Point is the SCED output MW level for a Resource. [e1]
- **Key facts #2** (cites e2): - Issued for each On-Line Generation Resource, ESR and CLR after each SCED execution. [e2]
- **Key facts #3** (cites e6): - SCED runs approximately every five minutes or more often. [e6]
- **Key facts #4** (cites e2): - Must observe the Resource's HDL and LDL. [e2]
- **Key facts #5** (cites e7): - A new Base Point supersedes the prior one regardless of current ramping. [e7]
- **Key facts #6** (cites e11): - UDSPs are sent to QSEs every four seconds. [e11]
- **Key facts #7** (cites e19): - ERCOT posts, per month, the percentage of intervals in which a Generation Resource or IRR Group released to SCED had a GREDP under 2.5% and under 2.5 MW. [e19]
- **Key facts #8** (cites e20): - ERCOT does not count five-minute intervals in which it has issued Emergency Base Points to the QSE when it calculates GREDP, CLREDP and ESREDP. [e20]
- **Key facts #9** (cites e22): - Intervals where a Generation Resource's ASP is below the average telemetered LSL are also excluded. [e22]
- **Key facts #10** (cites e21): - A non-IRR Generation Resource must have a GREDP less than the greater of X% or Y MW for 85% of the five-minute intervals in the month in which GREDP was calculated. [e21]
- **Common confusion #1** (cites e3, e1): - Base Point versus offer curve: the offer curve is the input from the QSE and the Base Point is the output from SCED. [e3][e1]
- **Common confusion #2** (cites e13, e14): - Base Point versus Emergency Base Point: the Emergency Base Point is a manual reliability instruction to move to a specific output level, outside the SCED price-setting process. [e13][e14]
- **Common confusion #3** (cites e10): - Base Point versus UDSP: the UDSP is the ramping value toward the Base Point plus the Regulation Service instruction, so it is not the same number. [e10]
- **Common confusion #4** (cites e18): - Deviation is measured against the average set point (ASP), not against the Base Point itself. [e18]
- **Questions #2** (cites e2, e6): ERCOT, through SCED, after each execution, roughly every five minutes. [e2][e6]
- **Questions #4** (cites e2): The Resource's HDL and LDL. [e2]
- **Questions #6** (cites e10, e11): The Base Point is SCED's MW target. The UDSP is the sum of the expected output of the Resource ramping to that Base Point and its Regulation Service instruction, and LFC sends it every four seconds. [e10][e11]
- **Questions #8** (cites e13, e14, e15): They are reliability-driven instructions to move to a specific output level, and ERCOT is to use the market processes first as far as practicable. [e13][e14] Because they can push a Resource off its offer-curve economics, Section 6.6.9 can pay additional compensation, with the offer capped at the MOC. [e15]
- **Questions #10** (cites e16): ERCOT issues a Watch and may issue Emergency Base Points, manually if necessary. [e16]
- **Questions #12** (cites e18, e20): By GREDP per five-minute interval against the Resource's average set point, with intervals under Emergency Base Points excluded. [e18][e20]
- **Link to sced** (cites e1, e2): determines SCED (Security-Constrained Economic Dispatch): SCED produces a Base Point for each On-Line Resource on every execution. [e1][e2]
- **Link to energy-offer-curve** (cites e3): related Energy Offer Curve: Base Points come from SCED's evaluation of Energy Offer Curves. [e3]
- **Link to hsl-lsl** (cites e2): related HSL / LSL: The Base Point must observe the Resource's HDL and LDL. [e2]
- **Link to lmp** (cites e4): related LMP (Locational Marginal Price): The Protocols send Settlement Intervals where Base Points are inconsistent with the Real-Time LMPs to Emergency Operations Settlement. [e4]
- **Link to qse** (cites e7): related QSE (Qualified Scheduling Entity): Base Points are sent to the QSE representing each Resource. [e7]
- **Link to rtm** (cites e5): related Real-Time Market (RTM): Base Points are the real-time energy dispatch signal. [e5]
## Uncited guidance text (check for new facts, numbers, dates, names)

- (Say it like this) The base point is the MW target SCED gives each online resource every few minutes, derived from offers, limits and network constraints. The resource actually chases an updated desired set point that ramps toward it, and ERCOT scores how closely it tracks that set point.

