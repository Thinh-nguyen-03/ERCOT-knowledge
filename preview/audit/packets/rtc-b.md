# Audit packet: RTC+B (Real-Time Co-optimization + Batteries) (rtc-b)

kind rule · domain reliability · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e2 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …- LDL Low Dispatch Limit. POWERTELEM Net real power flow provided via telemetry. NORMRAMPUP Normal Ramp Rate up, as telemetered by the QSE. LSLTELEM LSL provided via telemetry. ----------------------------------------------------------------------- 6.5.7.3 Security Constrained Economic Dispatch (1) 
QUOTE: The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary.
AFTER:  The SCED process uses a two-step methodology that applies mitigation to offers for energy prospectively to resolve Non-Competitive Constraints for the current Operating Hour. The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM…

### e5 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Forward Markets (p. iv) · text copy line 811

BEFORE: … that ERCOT adjust the AS methodology to reflect a reasonable characterization of the operational risks these products are meant to manage. Forward Markets The day-ahead and CRR markets functioned as expected in 2025. The day-ahead market cleared at a modest premium to the real-time market in 2025. 
QUOTE: With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves.
AFTER:  These virtual offers are expected to improve the liquidity of day-ahead ancillary service market and promote better convergence with the realtime market. Participation of physical generation resources in the day-ahead market continues to be low relative to real-time load. Some of this low participa…

### e12 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 21, Energy Storage Capacity Offered in Real-Time Market, note 1 · text copy line 1345

BEFORE: …16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacity Above SWCAP -$100/MWh Note: 1. The data is based on the 20:00 SCED interval snapshot. 
QUOTE: SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025.
AFTER:  2. 2026 data runs through 8/15 Key Takeaway: The total amount of Energy Storage Resource (ESR) capacity offered into the market increased substantially in 2026. The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 c…

### e13 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, F. Impact on RUC (p. A-10) · text copy line 9731

BEFORE: …te of the Market Report | A-9 / / Appendix: Real-Time Co-Optimization • For December 2025, approximately 54% of RUC commitments occurred in the four days before go-live. • From December 5, 2025, through February 2026, 42% of all RUC commitments occurred during Winter Storm Fern, January 21 to 27. • 
QUOTE: Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live.
AFTER:  G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs. The Reliability Deployment Price Adder, which accounts f…

### e14 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Slide 20, RUC Effective Resource-Hours · text copy line 1280

BEFORE: … Congestion Jul 2026 Aug Opt-Out Congestion "Effective Resource-hours" excludes any period during a RUC-instructed hour when the committed Resource was starting up, shutting down, off-line, or otherwise not available for dispatch by SCED. * August data for each year goes through 8/15. Key Takeaway: 
QUOTE: RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities.
AFTER:  20 Energy Storage Capacity Offered in Real-Time Market Continues to Increase 25000 18% 16% 20000 ESR Capacity (MW) PUBLIC 14% 12% 15000 10% 8% 10000 6% 4% 5000 2% 0 Jun Jul 2024 Capacity Below SWCAP -$100/MWh Aug Jun Jul Aug 2025 Capacity Above SWCAP -$100/MWh Jun Jul Aug 0% 2026 Percent of Capacit…

### e16 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix: Real-Time Co-Optimization, G. RDPA · text copy line 9736

BEFORE: …nter Storm Fern, January 21 to 27. • Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live. G. RDPA Before RTC, two distinct prices were added to the LMP to determine settlement prices in the ERCOT real-time market. 
QUOTE: The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs.
AFTER:  The Reliability Deployment Price Adder, which accounts for the price suppression effects of out-of-market actions by ERCOT operators, remains after RTC is implemented but includes a new feature. The RDPA process now produces separate price adders for energy and each AS product. The real-time market…

### e18 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1) · text copy line 1779 · heading above: 6.5.7.3 Security Constrained Economic Dispatch

BEFORE: …o power balance, Ancillary Service Demand Curves (ASDCs), and network constraints. The SCED process uses the Resource Status provided by SCADA telemetry under Section 6.5.5.2, Operational Data Requirements, and validated by the Real-Time Sequence, instead of the Resource Status provided by the COP. 
QUOTE: In addition, the SCED process accounts for each ESR's State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR's Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) limits.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------…

### e19 · `np-06` · tier 1 · ERCOT Nodal Protocols, Section 6: Adjustment Period and Real-Time Operations (effective 2026-11-06)
locator: Section 6.7.2.1, Real-Time Ancillary Service Imbalance Payment or Charge, paragraph (1)(a) · text copy line 9969 · heading above: 6.7.2.1 Real-Time Ancillary Service Imbalance Payment or Charge

BEFORE: …--------------------------------------------------------------------------------------+ 6.7.2 Real-Time Ancillary Service Charges and Payments 6.7.2.1 Real-Time Ancillary Service Imbalance Payment or Charge (1) The payments or charges to each QSE for Real-Time Ancillary Services are as follows: (a) 
QUOTE: Ancillary Service Imbalance payment or charges based on Real-Time Ancillary Service prices with an imbalance quantity determined by: (i) The Real-Time Ancillary Service awarded; minus (ii) The amount of Day-Ahead Market (DAM) Ancillary Service awards cleared in the DAM; minus (iii) The amount of DAM Self Arranged Ancillary Services; plus (iv) The amount of Ancillary Service Trades where the QSE is the buyer; minus (v) The amount of Ancillary Service Trades where the QSE is the seller.
AFTER:  (b) Charges for Ancillary Service Only Offers purchased in the DAM. (c) Charges for any Ancillary Service trade overage per paragraph (7) of Section 4.4.7.1, Self-Arranged Ancillary Service Quantities. 6.7.2.2 Regulation Up Service Payments and Charges (1) Reg-Up Imbalance Payment or Charge: RTRUIM…

### e20 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, Determination of Ancillary Service Demand Curves for the DAM and RTM, paragraphs (4)-(5) (current text, not the NPRR1309 boxes) · text copy line 2296 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …Day-Ahead and Real-Time System-Wide Offer Caps, and Section 4.4.11.1, Scarcity Pricing Mechanism. (3) The DAM shall use the same ASDCs as the RTM, as an initial condition. Specific to the DAM, the ASDCs will be adjusted, as needed, to account for negative Self-Arranged Ancillary Service Quantities. 
QUOTE: (4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services.
AFTER:  +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR1309: Replace paragraph (5) above with the follo…

### e21 · `np-04` · tier 1 · ERCOT Nodal Protocols, Section 4: Day-Ahead Operations (effective 2026-08-01)
locator: Section 4.4.12, paragraph (6) · text copy line 2307 · heading above: 4.4.12 Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market

BEFORE: …==================================================+ +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ (6) 
QUOTE: ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through August 31, 2025 as follows:
AFTER:  (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below: (0.5*(1 - pnorm(RTOLCAP - 3000, 0.5 * μ, 0.707 *…

### e22 · `imm-quarterly-fy2026-q3` · tier 2 · IMM Quarterly Report, FY2025-26 Q3 (July 2026)
locator: IMM Quarterly Report FY2025-2026 Q3 (reported 07/28/2026), page 4, ORDC Reserve Adders · text copy line 597

BEFORE: …_________________________________________________________________________________________________________________________________________________________________________________________________________________ Daily ORDC Reserve/Reliability Adders Average Values in FY2025-2026Q3 ORDC Reserve Adders 
QUOTE: With implementation of RTC, there is no longer an explicit shortage price adder calculated or produced by the market software. The energy price natively includes any shortage value produced by the ASDC via co-optimization.
AFTER:  As such, there is no information available to produce this chart going forward. Reliability Adders Month MAR APR MAY 16 17 18 $30 $27 $24 Adder ($/MWh) $21 $18 $15 $12 $9 $6 $3 $0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 19 20 21 22 23 24 25 26 27 28 29 30 31 Day of Month ERCOT IMM | Potomac Economics, …

### e24 · `ercot-nprr1014-board-report` · tier 1 · NPRR1014 Board Report (Energy Storage Resource Single Model) (Board approved 2020-12-08)
locator: NPRR1014 Board Report (BESTF-4 Energy Storage Resource Single Model), Revision Description · text copy line 146

BEFORE: …--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------+ | Revision Description | | 
QUOTE: This Nodal Protocol Revision Request (NPRR) enables the integration of Energy Storage Resources (ESRs) into the ERCOT core systems as a single-model Resource, replacing the existing "combination model" paradigm in which ESRs are treated as two Resources: a Generation Resource and a Controllable Load Resource.
AFTER:  This NPRR will be developed concurrently and implemented simultaneously with the NPRRs associated with Real-Time Co-optimization of energy and Ancillary Services (RTC) and with the upgrade to the ERCOT Energy Management System (EMS). | | | | | | | | | | The Key Topics and Concepts (KTCs) that form …

### e31 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, Table A1: Duration Requirements for Energy and AS in RTM, page 161 (OCR) · ocr copy line 6885, OCR page 161

BEFORE: …ket. One feature is that SCED now explicitly accounts for ESR SOC in its energy and AS awards. Together with the duration requirements for energy and AS shown in Table A1, this SOC accounting limits the real-time awards that ESRs can receive. Table A1: Duration Requirements for Energy and AS in RTM 
QUOTE: Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours
AFTER:  These duration constraints introduce some imbalance risk for ESRs that sell reserves in the day- ahead market. At the same time, RTC allows AS providers to forego the day-ahead market and sell AS directly into the real-time market. Thus, ESR AS offers in the day-ahead market would be expected to in…

### e32 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, D. AS Shortages, Figure A4 discussion (p. A-8) · text copy line 9666

BEFORE: …s currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4. 94 That is, everything except for Reg-Down 2025 State of the Market Report | A-7 / / Appendix: Real-Time Co-Optimization Figure A4: Illustration of Extended ASDC for NSRS 
QUOTE: From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average.
AFTER:  Thus, this extension of the ASDC for NSRS effectively increases demand for NSRS in the real-time market dispatch model. As discussed in the AS Methodology section, the NSRS plan is already vastly oversized, yet the ERCOT real-time market is designed to procure even more. In our updated Recommendati…

### e33 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Appendix, E. NSRS relative Pricing (p. A-9) · text copy line 9697

BEFORE: …pendix: Real-Time Co-Optimization time market and can be seen by comparing the distribution of clearing prices for NSRS to the clearing prices for the other AS products, as shown in Figure A5. Figure A5: Distribution of NSRS MCPC Relative to Other Up-Reserves December 5, 2025, through February 2026 
QUOTE: Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1.
AFTER:  The average ratio of clearing prices between NSRS and Reg-Up is lower because Reg-Up offers are generally priced higher than NSRS offers, as shown in Figure A3. We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reli…

### e45 · `ercot-summer-2026-review` · tier 2 · Summer 2026 Operational and Market Review (September 2026)
locator: Summer 2026 Operational and Market Review, slide 20, RUC Effective Resource-Hours (August data through 8/15) · text copy line 1227

BEFORE: …26 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025. 19 RUC Effective Resource-Hours are higher in summer 2026, primarily to ensure sufficient Ancillary Services 
QUOTE: There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effective Resource-hours in the summer of 2024.
AFTER:  In summer 2026, 17% of RUC effective Resource-hours were nominally attributed to congestion. In 2025, that number was 100%. Effective Resource-Hours PUBLIC 450 400 350 300 250 200 150 100 50 0 Jun Jul 2024 Non-Opt-Out Capacity Aug Jun Opt-Out Capacity Jul 2025 Aug Jun Non-Opt-Out Congestion Jul 202…

### e50 · `imm-som-2025` · tier 2 · 2025 State of the Market Report for the ERCOT Electricity Markets (published 2026)
locator: Executive Summary, Real-time Market Performance (p. ii) · text copy line 745

BEFORE: …ad market alone procured ancillary services, and qualified scheduling entities (QSEs) could adjust those positions only within their resource portfolios or through bilateral trades reported to ERCOT. Now, ancillary service awards can be adjusted in real-time to reflect changes in system conditions. 
QUOTE: As part of the RTC project, ERCOT also implemented the single-model for ESRs
AFTER: , which improves the real-time market's coordination of energy and ii | 2025 State of the Market Report / / Executive Summary reserve awards for ESRs. Both changes should improve market performance and economic efficiency. Since ERCOT implemented RTC, the real-time market has functioned as expected …

### e53 · `pura-39` · tier 1 · Texas Utilities Code (PURA) Chapter 39, Restructuring of Electric Utility Industry
locator: PURA Sec. 39.1594(a)(10) · text copy line 131

BEFORE: …de clearing price is established for the program and does not differentiate payments or credit values based on locational constraints;(9) any market changes implemented as a bridge solution for the program are removed not later than the first anniversary of the date the program was implemented;(10) 
QUOTE: the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented;
AFTER: (11) all elements of the program are initially implemented on a single starting date;(12) the terms of the program and any associated market rules do not assign costs, credit, or collateral for the program in a manner that provides a cost advantage to load-serving entities who own, or whose affiliat…

## Statements to check (new or changed since the last audit)

- **Link to asdc** (cites e16, e20, e21): composed-of ASDC (Ancillary Service Demand Curves): Under RTC, the ORDC price adder was replaced by a set of ASDCs, built by disaggregating an Aggregate ORDC fitted to 2014-2025 data. [e16][e20][e21]
- **Link to ordc** (cites e22): replaced ORDC (Operating Reserve Demand Curve): The IMM's quarterly report says that with RTC there is no longer an explicit shortage price adder; the energy price natively includes the ASDC shortage value. [e22]
- **Link to sced** (cites e2): affects SCED (Security-Constrained Economic Dispatch): SCED now awards energy and Ancillary Services together about every five minutes. [e2]
- **Link to energy-storage-resource** (cites e18, e24, e50): affects Energy Storage Resource (ESR): The Protocols in force have SCED account for each ESR's State of Charge so ESR Base Points and AS awards are feasible; RTC+B also brought the ESR single model. [e18][e24][e50]
- **Link to dam** (cites e5, e19): affects Day-Ahead Market (DAM): Day-ahead AS awards became financial positions with imbalances settled in real time, and virtual AS positions were added. [e5][e19]
- **Link to ruc** (cites e13, e45, e14): affects RUC (Reliability Unit Commitment: DRUC/HRUC): RUC volumes fell 80% in the first winter after go-live, then summer 2026 RUC was 1,313 effective Resource-hours, mostly for capacity and AS. [e13][e45][e14]
- **Link to non-spin** (cites e32, e33): affects Non-Spinning Reserve: The IMM says the real-time market procured nearly 1,400 MW of NSRS above plan on average and NSRS cleared about four times ECRS and eight times RRS. [e32][e33]
- **Link to pcm** (cites e53) FLAG number-not-in-quote: 39.1594: prerequisite-of PCM (Performance Credit Mechanism): PURA 39.1594 bars a PCM-type credit program until ERCOT begins implementing real-time co-optimization. [e53]
- **Link to offer-cap** (cites e12): affects Offer Caps (HCAP / LCAP / SWCAP): ERCOT notes the real-time SWCAP fell from $5,000/MWh to $2,000/MWh after RTC go-live. [e12]
- **Link to sc-battery-strategy** (cites e18, e31): related Scenario: Bidding a Battery After RTC+B: SCED now accounts for each ESR's State of Charge when awarding energy and AS, and AS duration rules limit ESR awards. [e18][e31]

