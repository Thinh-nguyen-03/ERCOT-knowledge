---
id: rtc-b
name: RTC+B (Real-Time Co-optimization + Batteries)
aliases: [RTC+B, RTC, RTCB, Real-Time Co-optimization, Real-Time Co-optimization plus Batteries, PR447, ESR single model]
kind: rule
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: asdc
    type: composed-of
    note: Under RTC, the ORDC price adder was replaced by a set of ASDCs, built by disaggregating an Aggregate ORDC fitted to 2014-2025 data. [e16][e20][e21]
  - to: ordc
    type: replaced
    note: The IMM's quarterly report says that with RTC there is no longer an explicit shortage price adder; the energy price natively includes the ASDC shortage value. [e22]
  - to: sced
    type: affects
    note: SCED now awards energy and Ancillary Services together about every five minutes. [e2]
  - to: energy-storage-resource
    type: affects
    note: The Protocols in force have SCED account for each ESR's State of Charge so ESR Base Points and AS awards are feasible; RTC+B also brought the ESR single model. [e18][e24][e50]
  - to: dam
    type: affects
    note: Day-ahead AS awards became financial positions with imbalances settled in real time, and virtual AS positions were added. [e5][e19]
  - to: ruc
    type: affects
    note: RUC volumes fell 80% in the first winter after go-live, then summer 2026 RUC was 1,313 effective Resource-hours, mostly for capacity and AS. [e13][e45][e14]
  - to: non-spin
    type: affects
    note: The IMM says the real-time market procured nearly 1,400 MW of NSRS above plan on average and NSRS cleared about four times ECRS and eight times RRS. [e32][e33]
  - to: pcm
    type: prerequisite-of
    note: PURA 39.1594 bars a PCM-type credit program until ERCOT begins implementing real-time co-optimization. [e53]
  - to: offer-cap
    type: affects
    note: ERCOT notes the real-time SWCAP fell from $5,000/MWh to $2,000/MWh after RTC go-live. [e12]
  - to: sc-battery-strategy
    type: related
    note: SCED now accounts for each ESR's State of Charge when awarding energy and AS, and AS duration rules limit ESR awards. [e18][e31]
evidence:
  - id: e1
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, introduction (p. A-2)"
    quote: "Co-optimization is a market-model feature that can simultaneously schedule energy and a set of operating reserve products, i.e., ancillary services, and make economic trade-offs among them. In ERCOT prior to December 5, 2025, co-optimization between energy and operating reserves was only incorporated into the day-ahead market. Ancillary service awards from the day-ahead market represented physical obligations to provide reserves in real time, and the market withheld these reserves from the capacity available for real-time energy. With the implementation of RTC, the real-time market dispatch now co-optimizes energy and ancillary services."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "The SCED process is designed to simultaneously manage energy, Ancillary Services, the system power balance and network congestion through Resource Base Points, Ancillary Service awards, and the calculation of LMPs and Real-Time MCPCs approximately every five minutes, or more frequently if necessary."
  - id: e4
    source: ercot-rtc-overview
    locator: "Slides 12-13, LMP example (ERCOT education deck, July 2025, before go-live)"
    quote: "This means the LMP goes to $40/MWh ($30/MWh for the energy from Gen 1 plus the $10/MWh of additional Ancillary Service cost)"
  - id: e5
    source: imm-som-2025
    locator: "Executive Summary, Forward Markets (p. iv)"
    quote: "With the implementation of RTC, dayahead ancillary service awards no longer represent physical obligations to provide reserves in real time. Instead, energy and ancillary services in the day-ahead market are now strictly financial positions, and ERCOT settles imbalances on those positions in real time. Another new day-ahead market feature implemented with RTC is virtual ancillary service positions, which are financial hedges on the real-time price for reserves."
  - id: e6
    source: ercot-rtc-overview
    locator: "Slide 21 (ERCOT education deck, July 2025, before go-live)"
    quote: "The current Supplemental Ancillary Services Market (SASM) process will be eliminated with the implementation of RTC"
  - id: e8
    source: ercot-rtc-update-2025-12
    locator: "Slide 4, RTC+B Market Trial Progression, footnote"
    quote: "Go-Live date reflects 12/5/2025 as first Operating Day where 12/4/2025 is planned software migration."
  - id: e9
    source: ercot-rtc-update-2025-12
    locator: "Slide 7, System Operations Summary (first 48-hours)"
    quote: "SCED was able to award energy and procure Ancillary Services at or above plan level during all intervals over the first 48 hours post deployment. Minimum PRC Total was 7,272 MW on 12/6/25 around 7:40 am."
  - id: e10
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, introduction (p. A-2)"
    quote: "Our summary of RTC outcomes thus far is that it is operating largely as expected without major dysfunctions. New efficiencies are evident in the frequency of AS awards shifting among resources within an operating hour, the real-time market’s ability to go short on AS during shortage conditions, and the reduction in out-of-market commitments through RUC. Despite these apparent improvements, we have observed issues that need to be resolved, particularly in the formulation of the ASDCs and duration constraints for AS, NSRS in particular."
  - id: e11
    source: imm-som-2025
    locator: "Appendix, B. Convergence between DAM and RT (p. A-5)"
    quote: "Virtual offers for AS were not introduced to the day-ahead market until December 6, so physical-resource offers drove the elevated prices."
  - id: e12
    source: ercot-summer-2026-review
    locator: "Slide 21, Energy Storage Capacity Offered in Real-Time Market, note 1"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e13
    source: imm-som-2025
    locator: "Appendix, F. Impact on RUC (p. A-10)"
    quote: "Compared to the same period a year before RTC go-live, December 5, 2024, through February 2025, RUC commitments fell by 80% after go-live."
  - id: e14
    source: ercot-summer-2026-review
    locator: "Slide 20, RUC Effective Resource-Hours"
    quote: "RUC activity in summer 2026 was substantially higher than the previous two summers and was largely attributed to addressing capacity needs, particularly to ensure sufficient Ancillary Service quantities."
  - id: e15
    source: ercot-summer-2026-review
    locator: "Slide 21, key takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e16
    source: imm-som-2025
    locator: "Appendix: Real-Time Co-Optimization, G. RDPA"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs."
  - id: e17
    source: np-06
    locator: "Section 6.4.9.1.1, Ancillary Service Awards, paragraph (1)"
    quote: "Ancillary Service awards will be based on Resource capability (qualification, operating limits, Ancillary Service limits, ramp rates, State of Charge (SOC), SOC limits, etc.) and Ancillary Service Demand Curves (ASDCs) regardless of the quantity of Ancillary Service under deployment."
  - id: e18
    source: np-06
    locator: "Section 6.5.7.3, Security Constrained Economic Dispatch, paragraph (1)"
    quote: "In addition, the SCED process accounts for each ESR’s State of Charge (SOC) and SOC operating limits. This is to ensure that the SCED process will issue ESR Base Points and Ancillary Services that are feasible taking into account SCED duration requirements for energy and Ancillary Services and also that do not violate the ESR’s Minimum State of Charge (MinSOC) and Maximum State of Charge (MaxSOC) limits."
  - id: e19
    source: np-06
    locator: "Section 6.7.2.1, Real-Time Ancillary Service Imbalance Payment or Charge, paragraph (1)(a)"
    quote: "Ancillary Service Imbalance payment or charges based on Real-Time Ancillary Service prices with an imbalance quantity determined by: (i) The Real-Time Ancillary Service awarded; minus (ii) The amount of Day-Ahead Market (DAM) Ancillary Service awards cleared in the DAM; minus (iii) The amount of DAM Self Arranged Ancillary Services; plus (iv) The amount of Ancillary Service Trades where the QSE is the buyer; minus (v) The amount of Ancillary Service Trades where the QSE is the seller."
  - id: e20
    source: np-04
    locator: "Section 4.4.12, Determination of Ancillary Service Demand Curves for the DAM and RTM, paragraphs (4)-(5) (current text, not the NPRR1309 boxes)"
    quote: "(4) For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down. (5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
  - id: e21
    source: np-04
    locator: "Section 4.4.12, paragraph (6)"
    quote: "ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through August 31, 2025 as follows:"
  - id: e22
    source: imm-quarterly-fy2026-q3
    locator: "IMM Quarterly Report FY2025-2026 Q3 (reported 07/28/2026), page 4, ORDC Reserve Adders"
    quote: "With implementation of RTC, there is no longer an explicit shortage price adder calculated or produced by the market software. The energy price natively includes any shortage value produced by the ASDC via co-optimization."
  - id: e23
    source: ercot-nprr1010-board-report
    locator: "NPRR1010 Board Report (RTC – NP 6: Adjustment Period and Real-Time Operations), Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1010 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e24
    source: ercot-nprr1014-board-report
    locator: "NPRR1014 Board Report (BESTF-4 Energy Storage Resource Single Model), Revision Description"
    quote: "This Nodal Protocol Revision Request (NPRR) enables the integration of Energy Storage Resources (ESRs) into the ERCOT core systems as a single-model Resource, replacing the existing “combination model” paradigm in which ESRs are treated as two Resources: a Generation Resource and a Controllable Load Resource."
  - id: e25
    source: imm-som-2021
    locator: "2021 State of the Market Report, Executive Summary, market reform discussion"
    quote: "This Commission-approved project was delayed in 2021 and is now on hold until at least mid-2023 due to resource constraints caused by the market reform efforts described below."
  - id: e26
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report (RTC+B Three Parameters Policy Issues), Revision Description"
    quote: "This Nodal Protocol Revision Request (NPRR) determines and codifies a group of policy changes that were deferred from the original RTC-related Protocols developed in 2020."
  - id: e27
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report, PUCT Decision"
    quote: "On 5/15/25, the PUCT approved NPRR1269 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e28
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report (Ancillary Service Duration under Real-Time Co-Optimization), Revision Description"
    quote: "Updates duration requirements for Regulation Service and Responsive Reserve (RRS) to thirty minutes; and"
  - id: e29
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report, Revision Description"
    quote: "Updates duration requirement for ERCOT Contingency Reserve Service (ECRS) to one hour."
  - id: e30
    source: ercot-nprr1282-puct-report
    locator: "NPRR1282 PUCT Report, PUCT Decision"
    quote: "On 7/31/25, the PUCT approved NPRR1282 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e31
    source: imm-som-2025
    locator: "Appendix, Table A1: Duration Requirements for Energy and AS in RTM, page 161 (OCR)"
    quote: "Energy 5 mins RegUp 30 mins RRS 30 mins ECRS 1 hour NSRS 4 hours"
  - id: e32
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages, Figure A4 discussion (p. A-8)"
    quote: "From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average."
  - id: e33
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-9)"
    quote: "Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1."
  - id: e34
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-8)"
    quote: "In our updated Recommendation 2024-1, we recommend that ERCOT reformulate the ASDCs based on the marginal reliability value of each product. This reformulation would produce ASDCs that scale according to the AS Plan for each product and eliminate the possibility that the real-time market over-procures reserves relative to the AS Plan."
  - id: e35
    source: imm-som-2025
    locator: "Appendix, C. AS Position Switching during sunrise/sunset (p. A-6)"
    quote: "These data show that more than 10% of total AS awards commonly shift across resources within a single SCED interval, particularly for faster responding reserves like RegUp and RegDn."
  - id: e36
    source: imm-som-2025
    locator: "Appendix, Table A3: Frequency, Magnitude, and Pricing of AS Shortages, Dec. 5, 2025 to Feb. 2026 (columns: hours, average MW, average MCPC $/MWh), page 165 (OCR)"
    quote: "ECRS 4.0 214.6 78.0 NSRS 25.9 702.2 22.5 REGDN - - REGUP - - RRS 1.6 35.2 131.6"
  - id: e37
    source: imm-som-2025
    locator: "Appendix, Table A2: Convergence in Energy and AS Prices (labelled 'December 5, 2026, through February 2026' in the report; the period is December 5, 2025 to February 2026), page 163 (OCR)"
    quote: "Energy $50.21 $37.03 36 Responsive $3.30 $0.41 698 NSRS $3.94 $1.10 257 Reg Up $3.57 $1.20 197 Reg Down $1.79 $1.13 59 ECRS $3.67 $0.71 420"
  - id: e38
    source: imm-som-2025
    locator: "Appendix, B. Convergence between DAM and RT (p. A-5)"
    quote: "Excluding RegDown, elevated dayahead market prices on December 5, 2025, and during Winter Storm Fern on January 21-27, 2026, account for 57-75% of the average day-ahead market premium for energy and up-reserve products."
  - id: e39
    source: imm-som-2025
    locator: "Appendix, F. Impact on RUC (p. A-10)"
    quote: "From December 5, 2025, through February 2026, 42% of all RUC commitments occurred during Winter Storm Fern, January 21 to 27."
  - id: e40
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The RDPA process now produces separate price adders for energy and each AS product. The real-time market is run in two instances: one based on realized operating conditions and one counterfactual, as if no reliability actions had been taken. The AS RDPA is the difference in MCPCs for each AS product between these two runs."
  - id: e41
    source: imm-board-2026-02
    locator: "IMM report to ERCOT Board R&M Committee (Feb. 9-10, 2026), slide 2, Non-Spinning Reserve Pricing in RTC"
    quote: "The RTM clears surplus NSRS yet is producing a shortage price."
  - id: e42
    source: imm-som-tac-2026-07
    locator: "IMM overview of the 2025 SOM to TAC (Aug. 13, 2026), slide 3"
    quote: "Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal"
  - id: e43
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, Sept. 14-15, 2026), market outcomes summary slide"
    quote: "Real-time co-optimization helped to lower ancillary service costs and market congestion"
  - id: e44
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, Congestion Rent slide (August data through 8/15)"
    quote: "Real-Time Congestion Rent in the summer of 2026 was 10% lower than in summer 2025, primarily due to sufficient dispatchable capacity and generation. RTC played a role in lowering congestion rents in summer 2026 compared to summer 2025."
  - id: e45
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, slide 20, RUC Effective Resource-Hours (August data through 8/15)"
    quote: "There were 1,313 total Reliability Unit Commitment (RUC) effective Resource-hours in summer 2026. This was higher than the 872 effective Resource-hours in the summer of 2025 and the 148 effective Resource-hours in the summer of 2024."
  - id: e46
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, Ancillary Service Shortage Incidence slide"
    quote: "There were no shortages of Reg-Up, Reg-Down and RRS this summer. Non-Spin and ECRS met the plan in nearly all intervals."
  - id: e47
    source: ercot-monthly-ops-2026-10
    locator: "ERCOT Monthly Operational Overview, October 2026, RUC slide"
    quote: "There were 165.6 RUC total effective Resource-hours in October. 164.7 hours (99.4%) were committed to address capacity concerns and 0.9 (0.6%) were committed to alleviate congestion."
  - id: e48
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, Non-Spin procurement takeaway"
    quote: "In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, offsetting a decline in the Plan from 86 to 66 GWh/day."
  - id: e49
    source: ercot-rtc-update-2025-12
    locator: "Slide 7, System Operations Summary (first 48-hours)"
    quote: "On 12/6/25 at 16:43, the available headroom not carrying reserves was insufficient to meet the 30 minute ahead forecasted Net Load. 1,415 MWs of offline Non-Spin was deployed."
  - id: e50
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance (p. ii)"
    quote: "As part of the RTC project, ERCOT also implemented the single-model for ESRs"
  - id: e51
    source: imm-som-2025
    locator: "Appendix, F. Impact on RUC (p. A-9)"
    quote: "As part of the RTC project, ERCOT also incorporated co-optimization between energy and AS into the RUC process so it could shift AS awards among resources and produce more efficient commitment solutions."
  - id: e52
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(d)"
    quote: "Any Electrical Bus LMP above the effective Value of Lost Load (VOLL) shall be set equal to the greater of the effective VOLL or the initial LMP minus the positive difference between System Lambda and the effective VOLL."
  - id: e53
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(10)"
    quote: "the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented;"
  - id: e54
    source: imm-som-2025
    locator: "Executive Summary, Real-time Market Performance (p. ii)"
    quote: "The most noteworthy ERCOT real-time market development in 2025 was the long-awaited introduction of real-time co-optimization (RTC), a major market upgrade that began in January 2019."
  - id: e55
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-9)"
    quote: "We continue to recommend (see Recommendation 2024-2) reducing the duration requirement for NSRS to one hour to reflect the short-term reliability risks it is designed to address and to produce pricing that reflects the relative reliability value of each AS product."
  - id: e56
    source: np-06
    locator: "Section 6.5.7.3, paragraph (14)(d)"
    quote: "The System Lambda and the Real-Time MCPCs from SCED Step 2 shall also be capped at the effective VOLL."
  - id: e58
    source: imm-som-2025
    locator: "Appendix, A. Real-Time AS Offers, after Table A1 (p. A-3)"
    quote: "These duration constraints introduce some imbalance risk for ESRs that sell reserves in the dayahead market."
  - id: e59
    source: ercot-monthly-ops-2026-10
    locator: "ERCOT Monthly Operational Overview, October 2026, Ancillary Service prices slide, note 1"
    quote: "Starting with the introduction of the RTC+B program in December 2025, there are now MCPCs for all Ancillary Services in the Real-Time Market (RTM)."
  - id: e60
    source: ercot-nprr1014-board-report
    locator: "NPRR1014 Board Report, Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1014 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e57
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "This outcome is a consequence of Commission policy that the individual ASDCs for the up-reserve products,94 when aggregated together into one demand curve, should conform to the Aggregate Operating Reserve Demand Curve (AORDC)."
  - id: e61
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4."
  - id: e62
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-8)"
    quote: "Two factors related to the implementation of RTC have reinforced this trend: 1) the extension of the ASDC for NSRS with the excess volume from the AORDC, and 2) the 4-hour duration constraint for NSRS."
  - id: e63
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-8)"
    quote: "The duration constraint, on the other hand, limits the supply of ESR capacity that can provide NSRS and increases the opportunity cost for ESRs to provide NSRS compared to other AS products with lower duration requirements."
---

## Definition

RTC+B is the ERCOT market upgrade under which the real-time dispatch co-optimizes energy and ancillary services, instead of only the day-ahead market doing so as it did before December 5, 2025. [e1] SCED now manages energy, Ancillary Services, power balance and congestion together, setting Base Points, AS awards, LMPs and Real-Time MCPCs about every five minutes. [e2] The "+B" part covers batteries: SCED accounts for each ESR's State of Charge, and the project brought in the single model for ESRs. [e18][e50]

## How it works

Before RTC, day-ahead AS awards were physical obligations, and the real-time market held that reserved capacity back from energy dispatch. Under RTC, the real-time dispatch co-optimizes energy and ancillary services, making economic trade-offs between them. [e1] AS awards follow Resource capability (including SOC and SOC limits) and the ASDCs, regardless of how much AS is being deployed. [e17]

Scarcity pricing moved inside the optimization. The IMM reports that the ORDC price adder was replaced by a set of ASDCs. [e16] Its quarterly report adds that there is no longer an explicit shortage adder; the energy price natively includes any shortage value from the ASDCs through co-optimization. [e22] The Protocols in force cap Electrical Bus LMPs, System Lambda and Real-Time MCPCs from SCED Step 2 at the effective VOLL. [e52][e56] ERCOT's July 2025 education deck (before go-live) illustrated how AS cost enters the LMP: reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP becomes $40/MWh, $30 of energy plus $10 of additional AS cost. [e4] The Reliability Deployment Price Adder remains, but it now produces separate adders for energy and each AS product, each the difference between a realized run and a counterfactual run without reliability actions. [e40]

The day-ahead market still clears energy and AS, but day-ahead AS awards are now financial positions, and ERCOT settles imbalances on them in real time. Virtual AS positions were added as hedges on the real-time price of reserves. [e5] ERCOT's pre-go-live overview said the Supplemental Ancillary Services Market (SASM) would be eliminated with RTC. [e6] RUC also co-optimizes energy and AS now, so it can shift AS awards among resources. [e51]

For batteries, the Protocols in force have SCED account for each ESR's SOC and SOC limits so that ESR Base Points and AS awards are feasible given the SCED duration requirements and do not breach MinSOC or MaxSOC. [e18] The single-model change (NPRR1014) replaced treating an ESR as two Resources, a Generation Resource plus a Controllable Load Resource, with one Resource. [e24] The IMM lists the real-time duration requirements as 5 minutes for energy, 30 minutes for Reg-Up and RRS, 1 hour for ECRS and 4 hours for NSRS. [e31]

## Formula

Real-time AS imbalance quantity for a QSE (np-06 Section 6.7.2.1): RT AS awarded - DAM AS awards - DAM Self-Arranged AS + AS Trades bought - AS Trades sold, settled at Real-Time AS prices. [e19] In words, a day-ahead AS sale is a financial position; if the QSE's real-time award differs from its day-ahead position, the difference settles at the Real-Time AS price: a shortfall is in effect bought back, and a larger real-time award is paid. [e5][e19]

ASDCs (np-04 Section 4.4.12, current text): Reg-Down's ASDC is a constant equal to VOLL across its AS Plan. Reg-Up, RRS, ECRS and Non-Spin get their curves by building one Aggregate ORDC (AORDC) and disaggregating it by product. [e20] The AORDC is fitted to historical reserve pricing from June 1, 2014 through August 31, 2025. [e21] The IMM says Commission policy requires the up-reserve ASDCs, summed, to conform to the AORDC. [e57] (Pending NPRR1309 boxes in the same section would add DRRS; they are not in force.) [e20]

## ERCOT context

RTC+B went live with 12/5/2025 as the first Operating Day, after the software migration on 12/4/2025. [e8] Over the first 48 hours ERCOT reported that SCED awarded energy and procured AS at or above plan in every interval, with minimum PRC of 7,272 MW on 12/6/25. [e9] That afternoon, available headroom not carrying reserves fell short of the 30-minute-ahead net load forecast and ERCOT deployed 1,415 MW of offline Non-Spin. [e49]

The IMM's review of RTC outcomes from December 5, 2025 through February 2026 found RTC "operating largely as expected", with gains in AS awards moving between resources within the hour, the market's ability to go short on AS, and fewer RUC commitments. It also flagged problems with how the ASDCs are built and with AS duration constraints, especially for Non-Spin (NSRS). [e10] More than 10% of total AS awards commonly shift across resources within a single SCED interval at sunrise and sunset. [e35] AS shortages were infrequent: NSRS was short for 25.9 hours (average 702.2 MW, average MCPC $22.50/MWh), ECRS for 4.0 hours and RRS for 1.6 hours, with no Reg-Up or Reg-Down shortages. [e36]

The IMM's main complaint is Non-Spin. Because the up-reserve ASDCs must sum to the AORDC, excess volume is put on the NSRS curve, and ERCOT procured nearly 1,400 MW of NSRS above plan on average (December 5, 2025 through February 2026). [e57][e61][e32] NSRS cleared about four times ECRS and eight times RRS, in line with the duration ratios. [e33] The IMM recommends reformulating the ASDCs on each product's marginal reliability value (Recommendation 2024-1) and cutting NSRS duration to one hour (Recommendation 2024-2). [e34][e55] In February 2026 it told the Board that the real-time market clears surplus NSRS yet produces a shortage price. [e41] By August 2026 it said shortage pricing via the ASDCs had been minimal since go-live. [e42] These are IMM recommendations, not adopted rules.

Day-ahead AS prices ran well above real time early on: for December 5, 2025 through February 2026 the IMM reports average day-ahead/real-time prices of $3.30/$0.41 for RRS and $3.94/$1.10 for NSRS, and $50.21/$37.03 for energy. [e37] It attributes 57-75% of the premium for energy and up-reserves to December 5 and Winter Storm Fern (January 21-27, 2026), noting virtual AS offers only started December 6. [e38][e11]

RUC changed by period. RUC commitments fell 80% against the year-earlier period, though 42% of the post-go-live winter commitments came during Winter Storm Fern. [e13][e39] Summer 2026 then had 1,313 effective RUC Resource-hours, against 872 in summer 2025 and 148 in summer 2024 (June through August 15 of each year), mostly to secure AS quantities. [e45][e14] In October 2026, 99.4% of 165.6 RUC hours were for capacity. [e47] ERCOT's summer review says RTC helped lower AS costs and congestion, and reports real-time congestion rent 10% below summer 2025, primarily due to sufficient dispatchable capacity and generation, with RTC playing a role. [e43][e44] In summer 2026 there were no Reg-Up, Reg-Down or RRS shortages, and ERCOT procured Non-Spin above plan (about 48 GWh/day in July and August) when cost-effective. [e46][e48]

## Key facts

- First Operating Day: 12/5/2025; software migration on 12/4/2025. [e8]
- Real-time dispatch runs about every five minutes and clears energy and AS together. [e2]
- Durations in RTM (per the IMM): energy 5 min, Reg-Up and RRS 30 min, ECRS 1 hour, NSRS 4 hours; the 30-minute and 1-hour values came from NPRR1282, approved by the PUCT on 7/31/25. [e31][e28][e29][e30]
- Virtual AS offers started in the DAM on December 6, 2025. [e11]
- ERCOT noted that the Real-Time SWCAP was reduced from $5,000/MWh to $2,000/MWh after RTC go-live on 12/5/2025. [e12][e15]
- RUC: down 80% in the first winter against a year earlier; 1,313 effective Resource-hours in summer 2026 (through 8/15). [e13][e45]
- NSRS: nearly 1,400 MW procured above plan on average, December 2025 to February 2026 (IMM). [e32]
- LMP, System Lambda and Real-Time MCPCs from SCED Step 2 are capped at the effective VOLL. [e52][e56]

## Timeline

- January 2019: per the IMM, the RTC upgrade began. [e54]
- December 8, 2020: ERCOT Board approves the core RTC NPRRs (for example NPRR1010) and NPRR1014, the ESR single model. [e23][e60][e24]
- 2021: the project is delayed and put on hold until at least mid-2023, per the IMM. [e25]
- May 15, 2025: PUCT approves NPRR1269, the policy items deferred from the 2020 RTC Protocols. [e26][e27]
- July 31, 2025: PUCT approves NPRR1282, the RTC AS durations. [e30]
- 12/4/2025: RTC+B software migration. 12/5/2025: first Operating Day. [e8]
- December 6, 2025: virtual AS offers first allowed in the day-ahead market. [e11]
- January 21-27, 2026: Winter Storm Fern accounts for 42% of RUC commitments in the first post-go-live winter. [e39]
- February 9-10, 2026: IMM tells the Board that NSRS clears surplus yet produces a shortage price. [e41]
- Summer 2026: ERCOT reports RUC higher than the two previous summers, mostly for AS needs, and lower AS costs and congestion. [e14][e43]
- October 2026: 99.4% of RUC hours are for capacity. [e47]

## Say it like this

(Guidance) Since RTC+B went live on December 5, 2025, ERCOT's real-time market picks who provides energy and who holds reserves every five minutes, and a day-ahead AS sale is now just a financial position that settles against real-time AS prices. Scarcity now shows up through AS demand curves inside the energy price rather than as an ORDC adder, and the IMM's main open issue is how those curves treat Non-Spin. [e8][e5][e19][e22][e10]

## Common confusion

(Guidance) RTC did not make the day-ahead market go away. The DAM still clears AS, but those awards are now financial and settle against real-time AS prices. [e5][e19] Also, "RTC" and "+B" are two pieces of one project: co-optimization is the pricing and dispatch change, and the battery part is the ESR single model plus SOC accounting inside SCED. [e50][e18]

(Guidance) Do not read the IMM's NSRS recommendations (reformulate ASDCs, one-hour NSRS) as adopted rules; they are recommendations. [e34][e55] And the Protocols' pending NPRR1309 DRRS language in Section 4.4.12 is not yet in effect. [e20]

## Questions

### What does "co-optimize" mean and what changed on December 5, 2025?

Co-optimization means scheduling energy and reserves at the same time and trading one off against the other. Before December 5, 2025, ERCOT did this only in the day-ahead market. Since then the real-time dispatch does it too. [e1]

### Why can LMPs be higher under RTC even when energy offers are unchanged?

The energy price now natively includes any shortage value from the ASDCs. [e22] ERCOT's pre-go-live education deck gives an example: reallocating AS to reach cheaper energy from Gen 1 raises AS cost, and the LMP goes to $40/MWh, $30 of energy plus $10 of AS cost. [e4]

### What happens to a day-ahead AS award in real time now?

It is a financial position. The imbalance is RT award minus DAM award minus self-arranged AS, adjusted for trades, settled at Real-Time AS prices. [e5][e19]

### Why does Non-Spin price so high under RTC?

The IMM gives two reasons: the NSRS demand curve is extended with the AORDC's excess volume, and the 4-hour duration limits ESR supply and raises their opportunity cost. [e62][e63][e32][e33] Its fixes are to reformulate the ASDCs and cut NSRS duration to one hour. [e34][e55]

### How has RTC affected RUC?

It depends on the period. The IMM found RUC commitments fell 80% in the first winter after go-live, with 42% of them during Winter Storm Fern. [e13][e39] ERCOT's summer 2026 review found 1,313 effective RUC Resource-hours, mostly to secure AS quantities. [e45][e14]

### What if a battery sells ECRS day-ahead and its SOC runs low in real time?

SCED will only award ESR AS that is feasible given SOC and the duration requirement, one hour for ECRS. [e18][e31] The QSE then buys back the shortfall at the real-time MCPC as an AS imbalance. [e19] The IMM says these duration constraints add imbalance risk for ESRs selling reserves day-ahead. [e58]

### Why was the IMM worried that day-ahead AS was overpriced?

From December 5, 2025 through February 2026, day-ahead AS averaged far above real time, for example RRS $3.30 against $0.41. [e37] The IMM ties most of the premium to December 5 and Winter Storm Fern, before virtual AS offers were available, and expected it to fall in 2026. [e38][e11]

## Scenarios

### A trader sees a real-time price spike with no ORDC adder posted. Is something broken?

- No. With RTC there is no explicit shortage adder; any ASDC shortage value is inside the energy price. [e22][e16]
- Look at the Real-Time MCPCs and any AS shortfalls in that interval; since RTC+B there are Real-Time MCPCs for all AS. [e59][e36]
- Check whether an AS RDPA applied, since RDPA now runs separately for energy and each AS. [e40]

## Open items

- ERCOT's protocol-violation filings and the defect fixes after go-live (five protocol violations were flagged in December 2025) are not described in detail in the saved sources.
- No saved post-go-live source states that SASM was eliminated; only ERCOT's July 2025 deck says it would be. (The saved Protocol files contain no SASM provisions, but absence cannot be quoted.)
- No saved source gives a full-year (2026) quantified estimate of RTC's savings. ERCOT's summer 2026 review says RTC helped lower AS costs and congestion but does not quantify RTC's share.
- The sources do not explain in detail why RUC rose in summer 2026 after falling in the first winter, beyond ERCOT's statement that it was mostly for AS quantities. The IMM (August 2026) attributes high reserves to ERCOT's conservative operations and AS Methodology; that is the IMM's view.
- The summer 2026 review says the real-time SWCAP fell to $2,000/MWh with RTC, while np-04 Section 4.4.11 sets the DASWCAP and RTSWCAP equal to the respective HCAP. See the offer-cap topic for how the PUCT rule values fit together.
- NPRR1290 (gap resolutions for RTC+B) appears here only as a PRS report (recommended approval August 13, 2025); its Board and PUCT outcome is not in the saved sources.
- The PUCT approval dates of the 2020 RTC NPRRs (NPRR1008, 1010, 1013, 1014) are not in the saved Board reports.
