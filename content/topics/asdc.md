---
id: asdc
name: ASDC (Ancillary Service Demand Curves)
aliases: [ASDC, ASDCs, Ancillary Service Demand Curve, AS demand curves, AORDC, Aggregate ORDC]
kind: rule
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
    note: The $15 floor on ASDCs is based on ERCOT's view of what is needed to avoid RUC for reserves. [e10][e14]
  - to: offer-cap
    type: related
    note: The VOLL used to build the ASDCs is set to the day-ahead HCAP. [e11][e12]
  - to: sced
    type: used-in
    note: SCED maximizes bid-based revenues minus offer-based costs subject to the ASDCs. [e2]
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
    quote: "HCAP – DAM (DASWCAP)                                                                                                                                                                                                                                                                                                                                                         $/MWh         5,000"
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
---

## Definition

An Ancillary Service Demand Curve (ASDC) is a set of price/quantity pairs that gives the value of one AS product for each hour of the Operating Day. [e1] Since RTC, these sloped curves define shortage pricing in both the day-ahead and real-time markets. They set the penalty price the market pays when it goes short on a reserve product. [e3]

## How it works

In real time, SCED picks energy dispatch and AS awards by maximizing bid-based revenues minus offer-based costs, subject to the ASDCs as well as power balance and network limits. [e2] The curves are meant to reflect the marginal reliability value of reserves, and they set the penalty price when the market goes short on a product. [e3] The DAM starts from the same ASDCs as the RTM. [e4]

Reg-Down has its own simple curve: a constant price equal to VOLL across its full AS Plan quantity. [e5] For the four up-reserve products (Reg-Up, RRS, ECRS, Non-Spin), ERCOT first builds one Aggregate ORDC (AORDC) and then splits it into separate curves. [e6]

The protocols define a Minimum Contingency Level (MCL) of 3,000 MW. [e7] For quantities up to the MCL, the maximum demand prices are Reg-Up at VOLL + 4,052, RRS at VOLL + 2,051, ECRS at VOLL + 50, and Non-Spin at VOLL. [e8] In the later steps of the split, remaining 1 MW segments of the AORDC go to ECRS and Non-Spin alternately until both requirements are met, and any remaining segments priced above $0.01/MWh go to Non-Spin. [e9]

Every ASDC has a floor of $15 per MW per hour over the part of the curve that matches the AS Plan. ERCOT set this floor based on its view of what is needed to avoid using RUC for reserves. [e10] The VOLL used to build the curves is set to the day-ahead HCAP. [e11] The protocol table lists the day-ahead HCAP at $5,000/MWh (the real-time cap is listed at $2,000; see the offer-cap topic). [e12]

## ERCOT context

The aggregation rule has visible effects. The AORDC runs to 10,000 MW, but the combined AS Plan for the four up-reserves is often smaller. The leftover volume is added to the Non-Spin (NSRS) curve, so the real-time market buys more NSRS than the plan calls for. [e13]

ERCOT added the $15/MWh floor on AS shortages through NPRR 1269, and ERCOT argues it reduces the likelihood of real-time AS shortages that would prompt RUC commitments. [e14][e20] The IMM calls the resulting reserve policy excessively conservative and says it suppresses price signals. [e19] It recommends dropping the rule that the ASDCs must add up to the AORDC and instead building each curve from the reliability value of its own product. [e15]

## Key facts

- Minimum Contingency Level (MCL): 3,000 MW. [e7]
- Maximum demand prices (for quantities up to the MCL): Reg-Up VOLL + 4,052; RRS VOLL + 2,051; ECRS VOLL + 50; Non-Spin VOLL. [e8]
- Reg-Down ASDC: flat at VOLL across its AS Plan quantity. [e5]
- ASDC floor: $15 per MW per hour over the AS Plan portion (NPRR 1269). [e10][e14]
- VOLL for ASDCs equals the day-ahead HCAP, listed at $5,000/MWh in the protocol table. [e11][e12]
- AORDC length: 10,000 MW. Excess volume goes to Non-Spin. [e13]

## Say it like this

(Guidance) Since RTC+B, each reserve product has its own demand curve that tells the dispatch how much it is worth paying to hold that reserve. When reserves get scarce, the market can go short at the curve price. The curves are cut from one aggregate curve based on the old ORDC, which is why Non-Spin often ends up over-procured.

## Common confusion

(Guidance) The AORDC is not the old ORDC adder still running: the adder was replaced by the ASDCs, and the AORDC is a fixed curve formulated from the pricing outcomes the ORDC produced before RTC. [e17][e18] ERCOT builds it and then splits it into product-specific ASDCs. [e6] The ASDC prices are not offer caps either. The highest ASDC prices for the up-reserves sit above VOLL (Non-Spin at VOLL), which itself is tied to the day-ahead HCAP. [e8][e11]

## Questions

### Why does Reg-Up have the highest ASDC price?

The protocols price quantities up to the MCL at VOLL + 4,052 for Reg-Up, above RRS (VOLL + 2,051), ECRS (VOLL + 50) and Non-Spin (VOLL). [e8]

### Why does ERCOT buy more Non-Spin than its AS Plan?

The up-reserve ASDCs must add up to a 10,000 MW AORDC. When the AS Plan is smaller than that, the extra volume is assigned to the Non-Spin curve, so SCED buys NSRS above plan. [e13][e9]

### What is the $15 ASDC floor and why is it controversial?

No point on any ASDC can fall below $15 per MW per hour over the AS Plan quantity. [e10] ERCOT introduced it through NPRR 1269 to avoid shortages that would lead operators to use RUC. The IMM calls it part of an excessively conservative reserve policy that suppresses price signals. [e14][e19]

### What does the IMM want changed?

It wants to drop the requirement that the ASDCs add up to the AORDC and build each ASDC from the reliability value of its own product. [e15]

## Scenarios

### Your battery desk sees Non-Spin clearing above ECRS in real time. Why?

- The IMM reports NSRS has consistently been more expensive than ECRS and RRS since RTC go-live. [e21]
- The Non-Spin ASDC is extended with the AORDC volume left over beyond the AS Plan, which raises demand for Non-Spin. [e13][e16]
- The IMM also cites the 4-hour NSRS duration constraint, which limits the ESR capacity that can provide NSRS and raises ESRs' opportunity cost. [e16][e22]

## Open items

- The saved sources do not give the fitted AORDC parameters (μ*, σ*) or the actual curve points ERCOT published. np-04 gives the method but not the resulting values.
- The real-time SWCAP seems to differ between sources. The np-04 parameter table shows "HCAP – RTM (RTSWCAP)" at $2,000 and ERCOT's summer 2026 review says the RT SWCAP fell to $2,000 at RTC go-live. 16 TAC §25.509 (effective 12/20/23) sets HCAP at $5,000/MWh and $5,000/MW-h for AS. How the PUCT rule and the protocol values fit together is not explained in the saved sources.
- The ASDC floor is "$15 per MW per hour" in np-04 §4.4.12(9) but "$15 per MWh" in the IMM text. The units are worded differently.
- Pending NPRR1309 would add a DRRS ASDC, new minimum prices (ECRS $15, Non-Spin $5, DRRS $0.01) and a $10 DRRS floor. It is not in effect, and the saved sources do not give an implementation date.
- How the ASDCs used in RUC differ from DAM/RTM ASDCs: np-04 §4.4.12 says it does not apply to RUC ASDCs, and RUC ASDCs were not traced here.
- The outcome of ERCOT's "ASDC Review" (named by the IMM as ERCOT's top 2026 RTC issue) is not in the saved sources.
