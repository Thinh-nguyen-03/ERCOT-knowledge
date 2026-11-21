---
id: asdc
name: ASDC (Ancillary Service Demand Curves)
aliases: [ASDC, ASDCs, Ancillary Service Demand Curve, AS demand curves, AORDC, Aggregate ORDC]
kind: rule
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: ordc
    type: replaced
    note: Under RTC, ASDCs replaced the ORDC price adder as the source of scarcity pricing. [e3][e17]
  - to: rtc-b
    type: part-of
    note: ASDCs are what lets RTC's real-time dispatch trade off energy against reserves and go short on AS. [e2][e3]
  - to: ancillary-services
    type: determines
    note: ASDCs set how much each AS product is worth in DAM and RTM clearing, product by product. [e1][e4]
  - to: non-spin
    type: affects
    note: Leftover AORDC volume is assigned to the Non-Spin curve, so the market buys Non-Spin above plan. [e9][e13]
  - to: ruc
    type: related
    note: The protocol bases the $15 ASDC floor on ERCOT's assessment of the need for a floor price on the ASDC for RUC; the IMM says ERCOT added it to avoid shortages that would prompt RUC. [e10][e14]
  - to: offer-cap
    type: related
    note: The VOLL used to build the ASDCs is set to the day-ahead HCAP. [e11][e12]
  - to: sced
    type: used-in
    note: SCED maximizes bid-based revenues minus offer-based costs subject to the ASDCs. [e2]
  - to: drrs
    type: related
    note: Approved-but-pending NPRR1309 text adds a DRRS ASDC with a $10 per MW per hour floor and a $0.01/MWh minimum price. [e46][e47]
  - to: dam
    type: used-in
    note: The DAM starts from the same ASDCs as the RTM and ERCOT must post them by 0600 of the Day-Ahead. [e4][e25]
  - to: imm
    type: related
    note: The IMM recommends cutting the ASDCs loose from the AORDC and stopping the Non-Spin curve at the AS Plan. [e15][e42]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Ancillary Service Demand Curve (ASDC)"
    quote: "A curve that reflects the value of each Ancillary Service product by price/quantity pairs for each hour of the Operating Day."
  - id: e2
    source: np-06
    locator: "Section 6.5.7.3(1), Security Constrained Economic Dispatch"
    quote: "The SCED process evaluates Energy Offer Curves, Energy Bid/Offer Curves, Ancillary Service Offers, Output Schedules, and RTM Energy Bids to determine Resource Dispatch Instructions and Ancillary Service awards by maximizing bid-based revenues minus offer-based costs, subject to power balance, Ancillary Service Demand Curves (ASDCs), and network constraints."
  - id: e3
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 48)"
    quote: "With RTC, a set of sloped ancillary service demand curves (ASDCs) defines shortage pricing in the day-ahead and real-time markets. These ASDCs are intended to reflect the marginal reliability value of reserves and define the penalty price when the market goes short on them."
  - id: e4
    source: np-04
    locator: "Section 4.4.12(3), Determination of Ancillary Service Demand Curves"
    quote: "The DAM shall use the same ASDCs as the RTM, as an initial condition."
  - id: e5
    source: np-04
    locator: "Section 4.4.12(4)"
    quote: "For Reg-Down, the ASDC shall be a constant value equal to VOLL for the full range of the Ancillary Service Plan for Reg-Down."
  - id: e6
    source: np-04
    locator: "Section 4.4.12(5)"
    quote: "To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
  - id: e7
    source: np-04
    locator: "Section 4.4.12(7)(a), variable table (MCL)"
    quote: "Minimum Contingency Level – the minimum amount of reserves that ERCOT considers necessary to avoid a system-wide failure. This value is set at 3,000 MW."
  - id: e8
    source: np-04
    locator: "Section 4.4.12(7)(a), pricing table for quantities up to the MCL"
    quote: "Reg-Up Max Demand Price $/MWh VOLL + 4,052 RRS Max Demand Price $/MWh VOLL + 2,051 ECRS Max Demand Price $/MWh VOLL + 50 Non-Spin Max Demand Price $/MWh VOLL"
  - id: e9
    source: np-04
    locator: "Section 4.4.12(7)(b)(iii)-(iv) (current text)"
    quote: "(iii) Third, assign the remaining 1 MW segments of the AORDC to ECRS and Non-Spin alternately, until the requirements for both products have been met; and (iv) Assign any remaining 1 MW segments of the AORDC priced above $0.01/MWh to Non-Spin."
  - id: e10
    source: np-04
    locator: "Section 4.4.12(9)"
    quote: "All ASDCs will have a floor price, based on ERCOT’s assessment of the need for a floor price on the ASDC for RUC, such that no values on the curve for any Ancillary Service fall below $15 per MW per hour for the portion of the ASDC that corresponds to the Ancillary Service Plan."
  - id: e11
    source: np-04
    locator: "Section 4.4.11(1)(a), Day-Ahead and Real-Time System-Wide Offer Caps"
    quote: "Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM."
  - id: e12
    source: np-04
    locator: "Section 4.4.11, parameter table"
    quote: "HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000"
  - id: e13
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "The AORDC is defined to 10,000 MW, but for much of the year, the sum of the AS Plan for all four up-reserve products is less than 10,000 MW. To satisfy the constraint that the ASDCs conform to the ASDC when the AS Plan is less than 10,000 MW, one or more of the ASDCs has to be extended to include the excess volume. This excess volume is currently assigned to the ASDC for NSRS, which causes the real-time market to procure excess NSRS as illustrated in Figure A4."
  - id: e14
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 49)"
    quote: "To avoid this outcome, because many stakeholders are averse to RUC, ERCOT imposed a $15 per MWh floor on any shortages of AS in the day-ahead and real-time markets through NPRR 1269."
  - id: e15
    source: imm-som-2025
    locator: "Recommendations, 2024-1a (p. 125)"
    quote: "Accordingly, we recommend removing the requirement for the ASDCs to aggregate to the AORDC and constructing each ASDC individually to reflect the reliability value of the corresponding reserve product."
  - id: e17
    source: imm-som-2025
    locator: "Appendix, G. RDPA (p. A-10)"
    quote: "The ORDC price adder, which reflected the value of reserves under shortage conditions, was replaced by a set of ASDCs."
  - id: e18
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "The AORDC is a fixed curve that was formulated based on empirical pricing outcomes produced by the ORDC before the implementation of RTC."
  - id: e19
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 49)"
    quote: "In practice, this excessively conservative operating reserve policy will increase consumer costs while suppressing the price signals needed to maintain resource adequacy."
  - id: e20
    source: imm-som-2025
    locator: "Chapter III, The AS Methodology and the Energy-Only Market (p. 49)"
    quote: "ERCOT argues that this price floor reduces the likelihood of real-time shortages of ancillary services that would prompt operators to commit resources through RUC."
  - id: e21
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-8)"
    quote: "Since RTC go-live, NSRS has consistently been more expensive than ECRS and RRS."
  - id: e22
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-8)"
    quote: "The duration constraint, on the other hand, limits the supply of ESR capacity that can provide NSRS and increases the opportunity cost for ESRs to provide NSRS compared to other AS products with lower duration requirements."
  - id: e16
    source: imm-som-2025
    locator: "Appendix, E. NSRS relative Pricing (p. A-8)"
    quote: "Two factors related to the implementation of RTC have reinforced this trend: 1) the extension of the ASDC for NSRS with the excess volume from the AORDC, and 2) the 4-hour duration constraint for NSRS."
  - id: e23
    source: np-04
    locator: "Section 4.4.11(1)(a)(i), Emergency Pricing Program trigger"
    quote: "If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change."
  - id: e24
    source: np-04
    locator: "Section 4.4.11(1)(a)(ii), Peaker Net Margin threshold"
    quote: "If the Peaker Net Margin (PNM) exceeds the PNM threshold per MW-year during a year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall be set per the schedule in Section 4.4.11.1, Scarcity Pricing Mechanism."
  - id: e25
    source: np-04
    locator: "Section 4.2.1.1(6), Ancillary Service Plan"
    quote: "ERCOT must post the ASDCs to the ERCOT website by 0600 of the Day-Ahead. If ERCOT changes the Ancillary Service Plan per Section 6.4.9.1.2, Changes to Operating Day Ancillary Service Plan, the ASDCs reflecting the change to the Ancillary Service Plan will be posted to the ERCOT website."
  - id: e26
    source: np-04
    locator: "Section 4.4.12(6)(a), historical reserve pricing formula"
    quote: "(0.5*(1 − pnorm(RTOLCAP − 3000, 0.5 * μ, 0.707 * σ)) + 0.5*(1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ)))*(VOLL − min(System Lambda, 250))"
  - id: e27
    source: np-04
    locator: "Section 4.4.12(6), data period and variable table"
    quote: "RTOLCAP MWh Real-Time On-Line Reserve Capacity – The Real-Time reserve capacity of On-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 RTOFFCAP MWh Real-Time Off-Line Reserve Capacity – The Real-Time reserve capacity of Off-Line Resources available for the SCED intervals beginning June 1, 2014 through August 31, 2025 μ None The mean value of the shifted LOLP distribution as published for Summer 2026 σ None The standard deviation of the shifted LOLP distribution as published for Summer 2026"
  - id: e28
    source: np-04
    locator: "Section 4.4.12(6)"
    quote: "ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through August 31, 2025 as follows: (a) For all SCED intervals where the sum of RTOLCAP and RTOFFCAP is less than 10,000 MW, use the RTOLCAP and RTOFFCAP values to calculate historical reserve pricing outcomes, which are used in the regression analysis described in paragraph (b) below:"
  - id: e29
    source: np-04
    locator: "Section 4.4.12(6)(c)"
    quote: "Calculate points on the regression curve in 1 MW increments for any observed reserve level >= 3,000 MW and price >$0.01/MWh. These points form the AORDC."
  - id: e30
    source: np-04
    locator: "Section 4.4.12(7)(a), fixed parameters table"
    quote: "RUPCT % 90 RRSPCTMAX % 90 ECRSPCTMAX % 30 ECRSMWMIN MW 40 NSMWMIN MW 10"
  - id: e31
    source: np-04
    locator: "Section 4.4.12(7)(b)(i)-(ii) and minimum price table"
    quote: "(i) First, extract evenly spaced 1 MW AORDC segments extending from the MCL to the minimum Reg-Up price. These segments form the nonlinear portion of the Reg-Up ASDC; (ii) Second, extract evenly spaced 1 MW AORDC segments extending from MCL to the minimum RRS price. These segments form the nonlinear portion of the RRS ASDC;"
  - id: e32
    source: np-04
    locator: "Section 4.4.12(7)(b), minimum prices table (current)"
    quote: "Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100"
  - id: e33
    source: np-04
    locator: "Section 4.4.12(8)"
    quote: "Each ASDC will be represented by a linear approximation to the corresponding part of the AORDC."
  - id: e34
    source: np-05
    locator: "Section 5.5.2(2), Reliability Unit Commitment (RUC) Process"
    quote: "ERCOT shall create an ASDC for each Ancillary Service for use in RUC. The ASDCs for each Ancillary Service for use in RUC shall be substantively the same as the ASDCs defined in Section 4.4.12, Determination of Ancillary Service Demand Curves for the Day-Ahead Market and Real-Time Market. Specific to RUC, the ASDC for Non-Spinning Reserve (Non-Spin) shall not extend beyond the Ancillary Service Plan for Non-Spin for the relevant Operating Hour. ERCOT shall post the ASDCs for RUC to the ERCOT website following each execution of the RUC process."
  - id: e35
    source: np-06
    locator: "Section 6.5.7.3(5)(c)(i), Security Constrained Economic Dispatch (proxy Ancillary Service Offer price floors)"
    quote: "(c) The proxy Ancillary Service Offer price floors for each SCED-interval shall be derived from the effective ASDCs and Ancillary Service Plan using the following logic: (i) The proxy Ancillary Service Offer price floor for Reg-Up is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for Reg-Up that intersects with a quantity that is 95% of the Ancillary Service Plan for Reg-Up."
  - id: e36
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report, PUCT Decision"
    quote: "On 5/15/25, the PUCT approved NPRR1269 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization."
  - id: e37
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report, Comments Received (TCPA 3/4/25)"
    quote: "Proposed additional revisions to the 3/3/25 ERCOT comments to carry the proposed $15 per MW per hour floor from RUC into the DAM and RTM as well"
  - id: e38
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report, Comments Received (Joint Consumers 3/25/25)"
    quote: "Expressed concern that NPRR1269 proposes a fundamental, premature and arbitrary shift in RTC design before its implementation and proposed a compromise to modify the proposed floor price from $15 to $0 for monitoring throughout 2026"
  - id: e39
    source: ercot-nprr1269-puct-report
    locator: "NPRR1269 PUCT Report, ERCOT Board Decision"
    quote: "On 4/8/25, the ERCOT Board voted to recommend approval of NPRR1269 as recommended by TAC in the 3/26/25 TAC Report. There was one opposing vote."
  - id: e40
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Board Report, Section 4.4.12(5) as approved in 2020"
    quote: "ERCOT shall develop the AORDC from historical data from the period of June 1, 2014 through December 31, 2023 as follows:"
  - id: e41
    source: ercot-nprr1008-board-report
    locator: "NPRR1008 Board Report, Board Decision"
    quote: "On 12/8/20, the ERCOT Board approved NPRR1008 as recommended by TAC in the 11/18/20 TAC Report."
  - id: e42
    source: imm-board-2026-02
    locator: "IMM Report to the Board, slide 2, Non-Spinning Reserve Pricing in RTC (February 9-10, 2026)"
    quote: "The RTM clears surplus NSRS yet is producing a shortage price."
  - id: e43
    source: imm-board-2026-02
    locator: "IMM Report to the Board, slide 2 (February 9-10, 2026)"
    quote: "Recommend stop ASDC at the AS Plan, then reformulate ASDC (including other improvements as well)."
  - id: e44
    source: puct-59550-ercot-comments
    locator: "ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17)"
    quote: "The ASDCs were implemented as part of the launch of RTC+B beginning December 5, 2025.10 In accordance with a prior Commission directive, the ASDCs in RTC+B were designed to replicate the pricing outcomes of the ORDC.11"
  - id: e45
    source: puct-59550-ercot-comments
    locator: "ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17)"
    quote: "At the August 20,2026 Open Meeting during discussion of Project No. 34677, the Commission agreed with Commission Staff' s recommendation that the underlying design of ASDCs is no longer required to adhere to the prior directive."
  - id: e46
    source: np-04
    locator: "Section 4.4.12, pending box [NPRR1309: Replace paragraph (9) above ... upon system implementation]"
    quote: "The DRRS ASDC will have a floor price of $10 per MW per hour, applied in the DAM and RTM, for the portion of the DRRS ASDC that corresponds to the Ancillary Service Plan for DRRS."
  - id: e47
    source: ercot-nprr1309-puct-report
    locator: "NPRR1309 PUCT Report, approved language for Section 4.4.12(7)(b), minimum prices table"
    quote: "Reg-Up Min Price $/MWh 250 RRS Min Price $/MWh 100 ECRS Min Price $/MWh 15 Non-Spin Min Price $/MWh 5 DRRS Min Price $/MWh 0.01"
  - id: e56
    source: np-04
    locator: "Section 4.4.12(7)(a)"
    quote: "Using the required percentage of Reg-Up, the maximum percentages of RRS and ECRS, and the minimum quantities of required Non-Spin and ECRS, the quantities of each Ancillary Service product procured until the Minimum Contingency Level (MCL) is satisfied are calculated as follows:"
  - id: e48
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages, page 165 (OCR), p. A-7, Table A3"
    quote: "NSRS had the most frequent shortages and the lowest penalty price. Approximately 45% of the volume of NSRS shortages occurred during Winter Storm Fern."
  - id: e49
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages, page 165 (OCR), p. A-7, Table A3 (December 5, 2025, through February 2026)"
    quote: "Table A3: Frequency, Magnitude, and Pricing of AS Shortages December 5, 2025, through February 2026 RTC Ancillary Service Shortages Ancillary # of Average Average MCPC Service Hours MW ($ per MWh) ECRS 4.0 214.6 78.0 NSRS 25.9 702.2 22.5 REGDN - - REGUP - - RRS 1.6 35.2 131.6"
  - id: e50
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-8), after Figure A4"
    quote: "From December 5, 2025, through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan, on average."
  - id: e51
    source: imm-som-2025
    locator: "Executive Summary, resource adequacy discussion (p. xi)"
    quote: "Additionally, the VOLL underlying the ASDCs is substantially less than the VOLL implied by a 1-in-10 reliability standard. Even if deep shortages are capped at $5000, the lower segments of the ASDCs that price shallow shortages (which are by far the most frequent) could be based on a much higher VOLL. We recommend $35 to $40K per MWh based on recent studies."
  - id: e52
    source: imm-quarterly-fy2026-q3
    locator: "IMM Quarterly Report FY2025-26 Q3, Daily ORDC Reserve/Reliability Adders, ORDC Reserve Adders"
    quote: "With implementation of RTC, there is no longer an explicit shortage price adder calculated or produced by the market software. The energy price natively includes any shortage value produced by the ASDC via co-optimization."
  - id: e53
    source: imm-som-tac-2026-07
    locator: "IMM presentation to TAC (August 13, 2026), slide 3, Summary of market pricing trends"
    quote: "Since the implementation of Real-Time Co-Optimization in December 2025, shortage pricing via the Ancillary Service Demand Curves (ASDCs) has been minimal"
  - id: e54
    source: ercot-as-methodology-2027
    locator: "2027 AS Methodology Board item 18 (September 14-15, 2026), RUC look-ahead slide"
    quote: "Some RUCs are avoidable with better inputs, especially how battery state of charge is represented, and through stronger AS Demand Curves (ASDCs) that encourage resources to self-commit — but not all."
  - id: e55
    source: imm-som-2025
    locator: "Recommendations, 2024-1a (p. 125)"
    quote: "ERCOT lists “ASDC Review” as its top priority in its inventory of RTC Issues to Consider in 2026."
  - id: e57
    source: np-04
    locator: "Section 4.4.12(6)(b), AORDC regression curve"
    quote: "Using the results of paragraph (a) above, use regression methods to fit the following curve to the average reserve pricing outcomes for the various MW reserve levels: AORDC = (𝟏 − pnorm(reserve level − 3000, μ*, σ*)) ∗ 𝑽𝑶𝑳𝑳"
  - id: e62
    source: np-04
    locator: "Section 4.4.12(6)(b), variable table (μ*, σ*)"
    quote: "μ* None The mean value used for the calculation of the AORDC as determined using the regression fit method described above. σ* None The standard deviation used for the calculation of the AORDC as determined using the regression fit method described above."
  - id: e58
    source: np-04
    locator: "Section 4.4.12(7)(a), MCL allocation cases"
    quote: "If, RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ + NSMWMIN < MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRSPCTMAX * ECRSREQ RRSMW = RRSPCTMAX * RRSREQ NSMW = MCL – RUMW – RRSMW – ECRSMW Else, if RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSMWMIN + NSMWMIN > MCL: RUMW = RUPCT * RUREQ ECRSMW = ECRSMWMIN RRSMW = RRSPCTMAX * RRSREQ – (RRSPCTMAX * RRSREQ + RUPCT * RUREQ – (MCL – ECRSMWMIN – NSMWMIN)) NSMW = NSMWMIN Otherwise, if RUPCT * RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ + NSMWMIN > MCL: RUMW = RUPCT * RUREQ RRSMW = RRSPCTMAX * RRSREQ – 0.5(RUPCT*RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ – (MCL – NSMWMIN)) ECRSMW = ECRSPCTMAX * ECRSREQ – 0.5(RUPCT*RUREQ + RRSPCTMAX * RRSREQ + ECRSPCTMAX * ECRSREQ – (MCL – NSMWMIN)) NSMW = NSMWMIN"
  - id: e59
    source: np-06
    locator: "Section 6.5.7.3(5), proxy Ancillary Service Offers"
    quote: "For use as SCED inputs for determining energy dispatch and Ancillary Service awards, ERCOT shall use the available Ancillary Service MW capacity of all Resources by creating a proxy Ancillary Service Offer for qualified Resources as follows:"
  - id: e63
    source: np-06
    locator: "Section 6.5.7.3(5)(c)(ii), proxy Ancillary Service Offer price floor for RRS"
    quote: "(ii) The proxy Ancillary Service Offer price floor for RRS is equal to the lesser of the values below minus $0.01 per MW per hour: (A) $2,000 per MW per hour; or (B) The point on the ASDC for RRS that intersects with a quantity that is 95% of the Ancillary Service Plan for RRS."
  - id: e64
    source: np-06
    locator: "Section 6.5.7.3(5)(b), proxy offer price for Resources that are not RUC-committed"
    quote: "For Resources that are not RUC-committed, the price in the proxy Ancillary Service Offer shall be set to:"
  - id: e60
    source: puct-59550-ercot-comments
    locator: "ERCOT comments, Project 59550, Section E, Question 3 (filed 2026-09-17)"
    quote: "ERCOT's report will likely support the need to review and alter the ASDCs' design."
  - id: e61
    source: imm-som-2025
    locator: "Appendix, D. AS Shortages (p. A-7)"
    quote: "Shortage conditions have been infrequent since go-live."
---
## Definition

An Ancillary Service Demand Curve (ASDC) is a set of price/quantity pairs that gives the value of one AS product for each hour of the Operating Day. [e1] Since RTC, these sloped curves define shortage pricing in both the day-ahead and real-time markets. They set the penalty price the market pays when it goes short on a reserve product. [e3]

## How it works

In real time, SCED picks energy dispatch and AS awards by maximizing bid-based revenues minus offer-based costs, subject to the ASDCs as well as power balance and network limits. [e2] The curves are meant to reflect the marginal reliability value of reserves, and they set the penalty price when the market goes short on a product. [e3] The DAM starts from the same ASDCs as the RTM. [e4] ERCOT must post the ASDCs by 0600 of the Day-Ahead, and reposts them if it changes the Operating Day AS Plan. [e25]

Reg-Down has its own simple curve: a constant price equal to VOLL across its full AS Plan quantity. [e5] For the four up-reserve products (Reg-Up, RRS, ECRS, Non-Spin), ERCOT first builds one Aggregate ORDC (AORDC) and then splits it into separate curves. [e6]

The protocols define a Minimum Contingency Level (MCL) of 3,000 MW. [e7] For quantities up to the MCL, the maximum demand prices are Reg-Up at VOLL + 4,052, RRS at VOLL + 2,051, ECRS at VOLL + 50, and Non-Spin at VOLL. [e8] Beyond the MCL, Reg-Up takes evenly spaced 1 MW segments of the AORDC from the MCL down to the Reg-Up minimum price, then RRS does the same down to its minimum price. [e31] The current minimum prices are $250/MWh for Reg-Up and $100/MWh for RRS. [e32] The remaining 1 MW segments go to ECRS and Non-Spin alternately until both requirements are met, and any remaining segments priced above $0.01/MWh go to Non-Spin. [e9] Each ASDC is then represented by a linear approximation to its part of the AORDC. [e33]

Every ASDC has a floor of $15 per MW per hour over the part of the curve that matches the AS Plan. The protocol says the floor is based on ERCOT's assessment of the need for a floor price on the ASDC for RUC. [e10] The VOLL used to build the curves is set to the day-ahead HCAP by default. [e11] It changes in two cases: when the Emergency Pricing Program is activated (prices at or above the day-ahead HCAP for 12 hours within a rolling 24-hour period), the VOLL is set to ECAP [e23]; and when the Peaker Net Margin exceeds its threshold during a year, the VOLL follows the schedule in Section 4.4.11.1. [e24] The protocol table lists the day-ahead HCAP at $5,000/MWh (the real-time cap is listed at $2,000; see the offer-cap topic). [e12]

RUC uses its own set of ASDCs. They must be substantively the same as the DAM/RTM curves, with one exception: in RUC the Non-Spin ASDC does not extend beyond the Non-Spin AS Plan for the hour. ERCOT posts the RUC ASDCs after each RUC run. [e34]

The ASDCs also set the price floor on the proxy AS offers SCED creates from the available AS capacity of qualified Resources; for Resources that are not RUC-committed, the proxy offer price is at least that floor. [e59][e64] For Reg-Up, the floor is the lesser of $2,000 per MW per hour or the ASDC price at 95% of the Reg-Up AS Plan, minus $0.01 per MW per hour. [e35] The RRS floor is set the same way. [e63]

## Formula

Step 1, historical pricing. For every SCED interval in the data window where on-line plus off-line reserves (RTOLCAP + RTOFFCAP) were under 10,000 MW [e28], ERCOT computes a reserve pricing outcome as (0.5 × (1 − pnorm(RTOLCAP − 3000, 0.5μ, 0.707σ)) + 0.5 × (1 − pnorm(RTOLCAP + RTOFFCAP − 3000, μ, σ))) × (VOLL − min(System Lambda, 250)). [e26] RTOLCAP and RTOFFCAP are the real-time reserve capacity of on-line and off-line Resources; μ and σ are the mean and standard deviation of the shifted loss-of-load-probability (LOLP) distribution as published for Summer 2026. [e27] The data window runs from June 1, 2014 through August 31, 2025. [e28]

Step 2, the fitted curve. A regression fits AORDC = (1 − pnorm(reserve level − 3000, μ*, σ*)) × VOLL to the average pricing outcomes at each reserve level, where μ* and σ* are the fitted mean and standard deviation. [e57][e62] Points are calculated in 1 MW steps for reserve levels at or above 3,000 MW and prices above $0.01/MWh. [e29]

Step 3, the split up to the MCL. The first 3,000 MW (the MCL) is shared out using a fixed percentage of the Reg-Up AS Plan, maximum percentages of the RRS and ECRS plans, and minimum MW for ECRS and Non-Spin. [e56][e7] The current parameter values are RUPCT (Reg-Up share) 90%, RRSPCTMAX 90%, ECRSPCTMAX 30%, ECRSMWMIN 40 MW and NSMWMIN 10 MW. [e30] The protocol computes the MCL shares in three cases, checked in this order. If the full shares (RUPCT × Reg-Up plan + RRSPCTMAX × RRS plan + ECRSPCTMAX × ECRS plan) plus NSMWMIN are below the MCL, Reg-Up, RRS and ECRS take their full shares and Non-Spin takes the rest of the MCL (MCL − Reg-Up − RRS − ECRS). Else, if the Reg-Up and RRS shares plus ECRSMWMIN plus NSMWMIN exceed the MCL, Reg-Up keeps its share, ECRS and Non-Spin get their minimums, and RRS is cut by the excess over (MCL − ECRSMWMIN − NSMWMIN). Otherwise (the full shares plus NSMWMIN exceed the MCL), Reg-Up keeps its share, Non-Spin gets NSMWMIN, and RRS and ECRS are each cut by half of the excess over (MCL − NSMWMIN). [e58] That first block of each product is priced at the maximum demand prices listed above. [e8]

Step 4, beyond the MCL: the segment assignment described under How it works, ending with any leftover segments above $0.01/MWh going to Non-Spin. [e9][e31]

## ERCOT context

The IMM's 2025 report describes visible effects of the aggregation rule. The AORDC runs to 10,000 MW, but for much of the year the combined AS Plan for the four up-reserves is smaller. The leftover volume is currently added to the Non-Spin (NSRS) curve, so the real-time market buys more NSRS than the plan calls for. [e13] From December 5, 2025 through February 2026, ERCOT procured nearly 1,400 MW of NSRS above the NSRS plan on average, per the IMM. [e50] In February 2026 the IMM told the Board that the RTM clears surplus NSRS yet produces a shortage price, and recommended stopping the ASDC at the AS Plan and then reformulating the ASDCs. [e42][e43]

The IMM says shortage conditions have been infrequent since go-live. [e61] Over December 5, 2025 through February 2026, the IMM counts about 25.9 hours of NSRS shortage (average 702.2 MW, average MCPC $22.5/MWh), 4.0 hours of ECRS shortage (average 214.6 MW, $78.0/MWh) and 1.6 hours of RRS shortage (average 35.2 MW, $131.6/MWh), with none for Reg-Up or Reg-Down. [e49] NSRS had the most frequent shortages and the lowest penalty price, and about 45% of the NSRS shortage volume fell in Winter Storm Fern. [e48] In August 2026 the IMM told TAC that ASDC shortage pricing since RTC go-live has been minimal. [e53] There is no separate adder to track any more: the IMM notes the energy price natively includes any shortage value the ASDC produces through co-optimization. [e52]

According to the IMM, ERCOT added the $15/MWh floor on AS shortages through NPRR 1269, and ERCOT argues it reduces the likelihood of real-time AS shortages that would prompt RUC commitments. [e14][e20] The IMM calls the resulting reserve policy excessively conservative and says it suppresses price signals. [e19] It recommends dropping the rule that the ASDCs must add up to the AORDC and instead building each curve from the reliability value of its own product. [e15] It also argues the VOLL behind the ASDCs is well below what a 1-in-10 standard implies and recommends $35,000 to $40,000 per MWh for the lower segments that price shallow shortages. [e51]

ERCOT's 2026 statements point toward a redesign. ERCOT staff told the Board in September 2026 that some RUCs could be avoided through stronger ASDCs that encourage self-commitment. [e54] In its September 17, 2026 comments in the offer-cap review (Project 59550), ERCOT says the ASDCs were designed to replicate ORDC pricing outcomes under a prior Commission directive, and that on August 20, 2026 the Commission agreed with Staff that the ASDC design no longer has to follow that directive. [e44][e45] The IMM reports that ERCOT lists "ASDC Review" as its top RTC issue for 2026. [e55]

## Timeline

- December 8, 2020: ERCOT Board approves NPRR1008 (RTC Day-Ahead Operations), whose Section 4.4.12 text set up the AORDC. [e41][e40] That 2020 text specified a data window of June 1, 2014 through December 31, 2023 for the AORDC. [e40]
- April 8, 2025: ERCOT Board recommends NPRR1269 (one opposing vote). [e39] During review, TCPA proposed carrying the $15 floor from RUC into the DAM and RTM, and Joint Consumers proposed $0 instead, for monitoring through 2026. [e37][e38]
- May 15, 2025: PUCT approves NPRR1269. [e36]
- December 5, 2025: ASDCs go live with RTC+B (per ERCOT's 2026 comments). [e44]
- February 9-10, 2026: IMM recommends to the Board stopping the ASDC at the AS Plan and reformulating the curves (a recommendation, not adopted). [e43]
- August 20, 2026: the Commission agrees the ASDC design no longer has to replicate the ORDC (as reported in ERCOT's comments). [e45]
- Pending: NPRR1309 (DRRS) would add a DRRS ASDC with a $10 per MW per hour floor and new minimum prices (ECRS $15, Non-Spin $5, DRRS $0.01/MWh). This language sits in "upon system implementation" boxes and is not in effect. [e46][e47]

## Key facts

- Minimum Contingency Level (MCL): 3,000 MW. [e7]
- Maximum demand prices (for quantities up to the MCL): Reg-Up VOLL + 4,052; RRS VOLL + 2,051; ECRS VOLL + 50; Non-Spin VOLL. [e8]
- Minimum prices beyond the MCL (current): Reg-Up $250/MWh, RRS $100/MWh. [e32]
- Reg-Down ASDC: flat at VOLL across its AS Plan quantity. [e5]
- ASDC floor: $15 per MW per hour over the AS Plan portion (NPRR 1269). [e10][e14]
- VOLL for ASDCs equals the day-ahead HCAP, listed at $5,000/MWh in the protocol table, unless the Emergency Pricing Program or the Peaker Net Margin threshold has been triggered. [e11][e12][e23][e24]
- AORDC data window: June 1, 2014 through August 31, 2025; LOLP parameters as published for Summer 2026. [e27][e28]
- AORDC length: 10,000 MW. Excess volume goes to Non-Spin (IMM 2025 report); nearly 1,400 MW of NSRS above plan on average, December 5, 2025 through February 2026. [e13][e50]
- Posting: DAM/RTM ASDCs by 0600 of the Day-Ahead; RUC ASDCs after each RUC run. [e25][e34]

## Say it like this

(Guidance) Since RTC+B, each reserve product has its own demand curve that tells the dispatch how much it is worth paying to hold that reserve. When reserves get scarce, the market can go short at the curve price, and that value shows up inside the energy price rather than as a separate adder. The curves are cut from one aggregate curve based on the old ORDC, which is why Non-Spin often ends up over-procured, and the PUCT has now said the design no longer has to copy the ORDC.

## Common confusion

(Guidance) The AORDC is not the old ORDC adder still running: the adder was replaced by the ASDCs, and the AORDC is a fixed curve formulated from the pricing outcomes the ORDC produced before RTC. [e17][e18] ERCOT builds it and then splits it into product-specific ASDCs. [e6] The ASDC prices are not offer caps either. The highest ASDC prices for the up-reserves sit above VOLL (Non-Spin at VOLL), which itself is set to the day-ahead HCAP in normal conditions. [e8][e11]

(Guidance) Keep three "floors" apart: the $15 ASDC floor (a demand-curve price over the AS Plan quantity) [e10]; the proxy AS offer floor (a supply-side floor on the proxy AS offers SCED creates from Resources' available AS capacity, at most $2,000 per MW per hour minus $0.01) [e59][e35]; and the pending $10 DRRS floor, which is approved text not yet implemented. [e46]

## Questions

### Why does Reg-Up have the highest ASDC price?

The protocols price quantities up to the MCL at VOLL + 4,052 for Reg-Up, above RRS (VOLL + 2,051), ECRS (VOLL + 50) and Non-Spin (VOLL). [e8] Beyond the MCL, Reg-Up also takes its AORDC segments first and has the highest minimum price ($250/MWh against $100 for RRS). [e31][e32]

### Why does ERCOT buy more Non-Spin than its AS Plan?

The up-reserve ASDCs must add up to a 10,000 MW AORDC. When the AS Plan is smaller than that, the extra volume is assigned to the Non-Spin curve, so SCED buys NSRS above plan. [e13][e9] The IMM measured nearly 1,400 MW above plan on average in the first months of RTC. [e50] RUC is different: its Non-Spin ASDC stops at the Non-Spin AS Plan. [e34]

### What is the $15 ASDC floor and why is it controversial?

No point on any ASDC can fall below $15 per MW per hour over the AS Plan quantity. [e10] According to the IMM, ERCOT introduced it through NPRR 1269 to avoid shortages that would lead operators to use RUC, and the IMM calls it part of an excessively conservative reserve policy that suppresses price signals. [e14][e19] In the stakeholder process TCPA proposed carrying the floor from RUC into the DAM and RTM, while Joint Consumers wanted $0 for monitoring through 2026; the PUCT approved NPRR1269 on May 15, 2025. [e37][e38][e36]

### What does the IMM want changed?

It wants to drop the requirement that the ASDCs add up to the AORDC and build each ASDC from the reliability value of its own product. [e15] As a near-term step it told the Board in February 2026 to stop the ASDC at the AS Plan. [e43] It also recommends a much higher VOLL ($35,000 to $40,000 per MWh) for the segments that price shallow shortages. [e51]

### Why can't you see the ASDC "adder" in the price data any more?

Under RTC there is no explicit shortage adder; the energy price natively includes any shortage value produced by the ASDCs through co-optimization. [e52] To see scarcity you look at AS shortages and MCPCs instead, which the IMM reports have been infrequent since go-live (Table A3 covers December 5, 2025 through February 2026). [e61][e49]

### What if the PUCT lets ERCOT redesign the curves away from the ORDC shape?

That is now possible: ERCOT reports that on August 20, 2026 the Commission agreed the ASDCs no longer have to replicate the ORDC, and ERCOT says its forthcoming biennial ORDC report will likely support the need to review and alter the ASDC design. [e45][e60] ERCOT staff see stronger ASDCs as one way to avoid some RUCs by encouraging self-commitment. [e54] No redesign has been filed or approved in the saved sources.

## Scenarios

### Your battery desk sees Non-Spin clearing above ECRS in real time. Why?

- The IMM reports NSRS has consistently been more expensive than ECRS and RRS since RTC go-live. [e21]
- The Non-Spin ASDC is extended with the AORDC volume left over beyond the AS Plan, which raises demand for Non-Spin. [e13][e16]
- The IMM also cites the 4-hour NSRS duration constraint, which limits the ESR capacity that can provide NSRS and raises ESRs' opportunity cost. [e16][e22]
- The IMM's February 2026 Board slide calls this a shortage price while the RTM clears surplus NSRS. [e42]

## Open items

- The saved sources do not give the fitted AORDC parameters (μ*, σ*), the Summer 2026 μ and σ values, or the actual curve points ERCOT published. np-04 gives the method but not the resulting values.
- The real-time SWCAP seems to differ between sources. The np-04 parameter table shows "HCAP – RTM (RTSWCAP)" at $2,000 and ERCOT's summer 2026 review says the RT SWCAP fell to $2,000 at RTC go-live. 16 TAC §25.509 (effective 12/20/23) sets HCAP at $5,000/MWh and $5,000/MW-h for AS. How the PUCT rule and the protocol values fit together is not explained in the saved sources.
- The ASDC floor is "$15 per MW per hour" in np-04 §4.4.12(9) but "$15 per MWh" in the IMM text. The units are worded differently.
- Which revision request replaced the 2020 "highest price portion" disaggregation with the current MCL-based method is not documented. The NPRR1269 report lists NPRR1268 ("RTC – Modification of Ancillary Service Demand Curves") as also revising 4.4.12, and the IMM says NPRR1268 was IMM-sponsored, but no NPRR1268 report is saved.
- NPRR1309's DRRS ASDC changes are approved text pending system implementation; the saved sources do not give an implementation date (see drrs).
- Resolved 2026-11-21: RUC ASDCs are set by np-05 §5.5.2(2) (substantively the same as DAM/RTM, Non-Spin capped at the AS Plan).
- The outcome of ERCOT's "ASDC Review" and any ASDC redesign following the August 20, 2026 Commission discussion are not in the saved sources; ERCOT's biennial ORDC/ASDC report under §25.505(e) is not saved.
