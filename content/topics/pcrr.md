---
id: pcrr
name: PCRR (Pre-Assigned CRR)
aliases: [PCRR, PCRRs, Pre-Assigned Congestion Revenue Right, Pre-Assigned CRR, NOIE allocation]
kind: product
domain: congestion
level: 2
lenses: [analyst, congestion, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: crr
    type: is-a
    note: ERCOT allocates a portion of available CRRs as PCRRs to NOIEs that meet the pre-September 1, 1999 ownership or contract test. [e1]
  - to: crr-auction
    type: related
    note: See the crr-auction topic for the auction route to CRRs.
  - to: congestion
    type: hedges
    note: The IMM says PCRR holders pay only a fraction of the auction value of comparable CRRs, reflecting legacy transmission access rights. [e7]
  - to: lse
    type: related
    note: A NOIE is an EC or MOU that does not offer Customer Choice. [e3]
  - to: load-zone
    type: related
    note: A NOIE serving Load in more than one Load Zone nominates PCRRs per zone. [e5]
  - to: four-cp
    type: related
    note: Where a portfolio supply contract does not describe the NOIE entitlement by resource, the PCRR allocation uses a 2003 4-CP ratio share. [e4]
  - to: ptp-obligation
    type: related
    note: PTP Obligation PCRRs are priced at 5%, 7.5% or 10% of a positive auction clearing price, depending on Resource type, and at 100% of a negative one. [e41]
  - to: sc-crr-valuation
    type: related
    note: PCRR allocations are tested for feasibility against 100% of the month's expected network topology, so they come before the auction capacity is set. [e31][e1]
  - to: rmr
    type: related
    note: A NOIE keeps PCRR eligibility for a Mothballed Generation Resource whether or not ERCOT determines it is necessary for RMR Service. [e22]
  - to: retail-choice
    type: related
    note: A NOIE is no longer eligible for PCRRs after it opts into competition, with an exception for STEC. [e26]
evidence:
  - id: e1
    source: np-07
    locator: "Section 7.4, paragraph (1)"
    quote: "ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources."
  - id: e2
    source: np-07
    locator: "Section 7.4, paragraph (2)"
    quote: "NOIEs are the only Entities eligible for an allocation of PCRRs."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE)"
    quote: "An EC or MOU that does not offer Customer Choice."
  - id: e4
    source: np-07
    locator: "Section 7.4.2.1, paragraph (3)(b)"
    quote: "If the portfolio supply contract does not specifically describe the NOIE capacity entitlement from each specific Generation Resource, the PCRR allocation amount shall be based on the NOIE’s 2003 4-Coincident Peak (4-CP) ratio share of each Generation Resource in the portfolio."
  - id: e5
    source: np-07
    locator: "Section 7.4.2.1, paragraph (4)"
    quote: "If a NOIE serves Load in more than one Load Zone, it shall nominate PCRRs to each Load Zone in an amount equal to the explicit contractual rights to each Load Zone, if any, or in proportion to the peak Load served in each relevant Load Zone, based on the aggregated monthly Load data from the corresponding prior 12 months."
  - id: e6
    source: np-07
    locator: "Section 7.4.2.1, paragraph (1)"
    quote: "PCRR allocations shall be limited to the Seasonal net max sustainable rating (MW) of eligible pre-September 1, 1999 Generation Resources, but shall in no event exceed the net max sustainable rating (MW) of these pre-September 1, 1999 Generation Resources as established by 2010 registration data."
  - id: e7
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, introduction to CRRs"
    quote: "Parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs, reflecting their legacy transmission access rights."
  - id: e8
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(a)"
    quote: "A PCRR nomination is a request for one-month strips of a NOIE-specified CRR type for amounts and blocks specified by the NOIE for each month of the PCRR Nomination Year as described in paragraph (c) below."
  - id: e9
    source: np-07
    locator: "Section 7.4.2.1, paragraph (1)"
    quote: "If a Generation Resource is repowered by the addition of new equipment, the PCRR MW amount is limited to the original specific turbine/generator set(s) from the pre-September 1, 1999 Generation Resource. New or upgraded components that increase the capacity of pre-September 1, 1999 Generation Resources are not eligible for increased PCRR MW amounts."
  - id: e10
    source: np-02
    locator: "Section 2.1, definition of PCRR Nomination Year"
    quote: "The calendar year that is three years after the year containing a PCRR nomination process."
  - id: e11
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(g)(iii), PCRR charges"
    quote: "For a NOIE that has chosen the refund option, the allocated number of PCRRs for Resources other than solid-fuel and combined-cycle Resources are provided at no charge."
  - id: e12
    source: np-07
    locator: "Section 7.4, paragraph (1), second sentence group"
    quote: "An existing Generation Resource that interconnected to the ERCOT Transmission Grid on or after June 1, 2021, pursuant to paragraph (3) of Section 1.6.5, Interconnection of New or Existing Generation, cannot qualify as a pre-September 1, 1999 Generation Resource for PCRR purposes."
  - id: e13
    source: np-07
    locator: "Section 7.4, paragraph (2)"
    quote: "NOIEs may designate an agent to manage their PCRRs, provided that ERCOT’s relationship is with the NOIE and that an agent shall be subject to all PCRR rules applicable to the NOIE. ERCOT will rely exclusively on documentation provided or confirmed by the NOIE to determine the continued eligibility for allocation of PCRRs."
  - id: e14
    source: np-07
    locator: "Section 7.4, paragraph (3)"
    quote: "ERCOT shall publish a list of NOIEs who are eligible for allocation of PCRRs on the ERCOT website. The list shall include each NOIE’s ownership and/or contractual amount of capacity related to pre-September 1, 1999 Generation Resources."
  - id: e15
    source: np-07
    locator: "Section 7.4.1.1, PCRR Criteria for NOIE Allocation Eligibility, paragraph (1)(a)"
    quote: "A Generation Resource owned by the NOIE nominating the PCRR(s) that meets the following: (i) The NOIE owned the Generation Resource prior to September 1, 1999 and has maintained uninterrupted ownership since September 1, 1999; (ii) The Generation Resource has remained in service on an uninterrupted basis except for Maintenance Outages, Forced Outages, Opportunity Outages or Planned Outages (including a Mothballed Generation Resource that operates under a Seasonal Operation Period) subsequent to September 1, 1999; and (iii) The NOIE utilizes the Generation Resource to meet its electric service obligations within its service territory in an amount at least equal to the nominated PCRR amount."
  - id: e16
    source: np-07
    locator: "Section 7.4.1.1, paragraph (1)(b)(ii)-(iii)"
    quote: "The contract term is greater than five years. Contracts with automatic renewal provisions (evergreen clauses), the operation of which extends beyond the term of the contract to more than the cumulative five years, shall meet this requirement, provided that the automatic renewal provision was in place prior to September 1, 1999;"
  - id: e17
    source: np-07
    locator: "Section 7.4.1.1, paragraph (1)(b)(iii)"
    quote: "The NOIE is entitled to capacity from specific Generation Resource(s) pursuant to the long-term contract; long-term contracts that are not backed by specific Generation Resources are not eligible for PCRRs;"
  - id: e18
    source: np-07
    locator: "Section 7.4.1.1, paragraph (1)(d), portfolio supply contracts"
    quote: "The 2003 4-CP ratio share shall be calculated as the 4-CP of each NOIE divided by the total 4-CP of all NOIEs who were supplied by that portfolio of Generation Resources in 2003. Each NOIE’s capacity entitlement shall be its 2003 4-CP ratio share multiplied by the net max sustainable rating from the 2010 registration data for each PCRR eligible Generation Resource in the portfolio."
  - id: e19
    source: np-07
    locator: "Section 7.4.1.1, paragraph (1)(e)"
    quote: "The Direct Current Tie (DC Tie) is considered a PCRR-eligible Generation Resource for contracts of Tex-La Electric Cooperative of Texas, Inc. with supply resources located outside the ERCOT Region that meet the requirements of paragraphs (b)(i)-(ii) and (iv)-(v) above."
  - id: e20
    source: np-07
    locator: "Section 7.4.1.2, NOIE Allocation Eligibility for PCRRs Impacted By Long-Term Outages, paragraph (1)"
    quote: "A NOIE maintains allocation eligibility for PCRRs associated with a pre-September 1, 1999 Generation Resource that may be out of service for greater than 12 consecutive months if the Generation Resource is out of service pursuant to a Forced Outage and the time necessary to address the relevant Outage extends beyond 12 months, provided that the NOIE must demonstrate to ERCOT’s satisfaction that the Outage continues to be necessary and does not require the Resource Entity to cease or suspend operation of the Generation Resource pursuant to Section 3.14.1.1, Notification of Suspension of Operations."
  - id: e21
    source: np-07
    locator: "Section 7.4.1.2, paragraph (1)(a)"
    quote: "For a PCRR Nomination Year in which a PCRR-eligible Generation Resource is expected to return to service after a long-term Forced Outage (greater than 12 consecutive months), the NOIE is only eligible to receive PCRRs for the months in which the Generation Resource is expected to be in service for the entirety of the month."
  - id: e22
    source: np-07
    locator: "Section 7.4.1.2, paragraph (2)"
    quote: "A NOIE maintains allocation eligibility for PCRRs associated with a pre-September 1, 1999 Generation Resource if the Generation Resource becomes a Mothballed Generation Resource pursuant to Section 3.14.1.1, Notification of Suspension of Operations, regardless of whether ERCOT determines that the Generation Resource is necessary for Reliability Must-Run (RMR) Service."
  - id: e23
    source: np-07
    locator: "Section 7.4.1.3.1, PCRR Disqualifying Events, paragraph (1)(b)"
    quote: "The Generation Resource is sold by the NOIE to another Entity, regardless of whether the NOIE later enters into a long-term supply contract with that Entity to serve the NOIE’s Load in its service territory. The selling of a Generation Resource shall include the transfer of ownership of the Generation Resource and/or the sale of the energy and/or capacity of the Generation Resource pursuant to a contractual agreement. However, a transfer of the Generation Resource to an Affiliate of the NOIE or to a generation and transmission Electric Cooperative (EC) for the benefit of the NOIE shall not serve as a disqualifying event as long as all other PCRR eligibility requirements remain in place."
  - id: e24
    source: np-07
    locator: "Section 7.4.1.3.1, paragraph (1)(a)"
    quote: "The Generation Resource is designated as decommissioned and retired pursuant to Section 3.14.1.1, Notification of Suspension of Operations, regardless of whether ERCOT determines that the Generation Resource is necessary for RMR Service."
  - id: e25
    source: np-07
    locator: "Section 7.4.1.3.1, paragraph (2)(c)"
    quote: "Any change in the designation of Generation Resources backing a long-term contract after September 1, 1999, shall disqualify the long-term contract."
  - id: e26
    source: np-07
    locator: "Section 7.4.1.3.1, paragraph (6)"
    quote: "A NOIE shall no longer be eligible for allocation of PCRRs after it opts into competition, with the exception of South Texas Electric Cooperative Inc. (STEC). STEC may be eligible for allocation of PCRRs for up to three years after the date it enters into competition."
  - id: e27
    source: np-07
    locator: "Section 7.4.1.3.2, Effect of PCRR Disqualification, paragraph (1)"
    quote: "Once a disqualifying event occurs under Section 7.4.1.3.1, PCRR Disqualifying Events, the PCRRs associated with the pre-September 1, 1999 Generation Resource shall be voided by ERCOT from the date of the disqualifying event. Further, the NOIE will no longer be eligible for allocation of future PCRRs associated with the pre-September 1, 1999 Generation Resource."
  - id: e28
    source: np-07
    locator: "Section 7.4.1.3.2, paragraph (2)(a)"
    quote: "(a) If the NOIE maintains PCRR-related CRRs in its CRR Account, then the CRRs associated with the PCRR allocation shall either: (i) Be voided by ERCOT at the time of the disqualifying event and ERCOT shall refund the NOIE the discounted purchase price of the CRR as soon as practicable; or (ii) Be retained by the NOIE and the NOIE pays ERCOT the price differential between the discounted CRR price and the full CRR Auction price in which the CRR was acquired."
  - id: e29
    source: np-07
    locator: "Section 7.4.1.3.2, paragraph (2)(c)"
    quote: "If the NOIE obtained PCRR-related CRRs through the Refund option (allocated at no charge), then ERCOT will void the CRRs at the time of the disqualifying event and no financial exchange is necessary."
  - id: e30
    source: np-07
    locator: "Section 7.4.2.1, paragraph (2)"
    quote: "PCRR nominations shall be based on forecasted peak Demand, subject to the relevant PCRR allocation MW capacity limit of the specific Generation Resources."
  - id: e31
    source: np-07
    locator: "Section 7.4.2.2, PCRR Allocations and Nominations, paragraph (1)(a)"
    quote: "The Simultaneous Feasibility Test (SFT) evaluation to determine the feasible PCRR allocation amount for each month being evaluated uses 100% of that month’s expected network topology, which may result in different amounts allocated in different months. If the SFT evaluation indicates that the nominated PCRR amounts are not feasible, then ERCOT shall proportionately reduce the requested PCRRs by their Impact Ratio on violated constraints. The “Impact Ratio” is the amount of a particular PCRR’s impact divided by the total impact of all PCRRs in the same direction on a violated constraint."
  - id: e32
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(a)"
    quote: "The price that a NOIE must pay for an allocated PCRR is based on the corresponding CRR clearing price in the CRR First Offering."
  - id: e33
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(c)"
    quote: "Nominations must be received at ERCOT no later than 30 Business Days prior to the commencement of the CRR Long-Term Auction Sequence. ERCOT shall allocate PCRRs to the NOIE no later than 25 Business Days prior to the CRR Long-Term Auction Sequence. There shall not be any PCRR nomination process leading up to the second CRR Long-Term Auction Sequence (if any) in a calendar year."
  - id: e34
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(d)"
    quote: "Prior to each CRR Monthly Auction, if there existed any PCRR nominations for the month being auctioned that ERCOT determined were not feasible at the time of the CRR Long-Term Auction Sequence in which they were originally considered, resulting in proportionally reduced PCRR allocations, then ERCOT shall re-evaluate the full nomination and allocate additional PCRRs, if feasible, up to the original nomination amount."
  - id: e35
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(e), refund or capacity option"
    quote: "A NOIE must designate whether to accept the refund option or the capacity option for its eligible non-solid fuel and non-combined-cycle Resources before the allocation of PCRRs. The designated option (refund or capacity) will be the same for every month of the allocation year for that Resource. A NOIE cannot designate a combination of both options for the same Resource in a given allocation year."
  - id: e36
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(e)"
    quote: "NOIEs, or a group of NOIEs linked by common pre-1999 power supply arrangements, which had a 2003 NOIE peak Load in excess of 2,300 MW must use the capacity option (ii) for their eligible non-solid-fuel and non-combined-cycle Resources."
  - id: e37
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(e)(i), refund option"
    quote: "The eligible NOIE shall refund to ERCOT any congestion revenues received above those congestion revenues flowing to the NOIE for its Output Schedule of the Resource at the PCRR source."
  - id: e38
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(e)(i), refund option"
    quote: "PCRRs allocated under the refund option are not transferable and may only be used by the NOIE to which they are allocated."
  - id: e39
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(e)(ii), capacity option"
    quote: "Capacity option – The eligible NOIE may nominate up to 100% of the lesser of the net unit capacity or contractual amount for those Resource amounts allowed pursuant to Section 7.4.2.1 at a capacity factor no greater than 40% over each calendar year."
  - id: e40
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(g)(i), PTP Option PCRR pricing"
    quote: "(A) Nuclear, coal, lignite or combined-cycle Resources: 10% of the applicable CRR Auction clearing prices; (B) Gas steam Resources: 15% of the applicable CRR Auction clearing prices; or (C) Hydro, wind, simple cycle, or other Resources not included in (A) or (B): 20% of the applicable CRR Auction clearing prices."
  - id: e41
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(g)(ii), PTP Obligation PCRR pricing"
    quote: "(A) Nuclear, coal, lignite or combined-cycle Resources: 5% of the applicable CRR Auction clearing price if it is positive; 100% of the applicable CRR Auction clearing price if it is negative; (B) Gas steam Resources: 7.5% of the applicable CRR Auction clearing price if such price is positive; 100% of the applicable CRR Auction clearing price if it is negative; or (C) Hydro, wind, simple cycle, or other Resources not included in (A) or (B): 10% of the applicable CRR Auction clearing prices if it is positive; 100% of the applicable CRR Auction clearing prices if it is negative."
  - id: e42
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(f)"
    quote: "The CRR type, either Point-to-Point (PTP) Option, PTP Obligation, or a combination, must be specified by the eligible NOIE before the PCRR allocation and is binding for purchase. Once the allocation process is complete, the eligible NOIE may not change the CRR type."
  - id: e43
    source: np-07
    locator: "Section 7.4.2.2, paragraph (1)(h)"
    quote: "PCRRs shall not be able to be bilaterally traded through ERCOT systems prior to the completion of the CRR Auction used to determine their value."
  - id: e44
    source: np-07
    locator: "Section 7.5.6.3, Charge of PCRRs Pertaining to a CRR Auction, paragraph (2)"
    quote: "PCRROPTAMT _(crrh, (j, k), a, tech) = PCRROPTF _(tech) * OPTPR _((j, k), a) * PCRROPT _(crrh, (j, k), a, tech)"
  - id: e45
    source: np-07
    locator: "Section 7.5.6.3, paragraph (1), variable table"
    quote: "PCRR PTP Obligation pricing Factor per resource technology—The pricing factor of pre-allocated PTP Obligations based on Resources of the technology tech. See item (1)(g)(ii) of Section 7.4.2.2, PCRR Allocations and Nominations."
  - id: e46
    source: np-07
    locator: "Section 7.5.6.3, paragraph (1)"
    quote: "For pre-assigned PTP Obligations allocated before each CRR Auction, ERCOT shall charge each CRR Account Holder. The charge for each source and sink pair for a given TOU period is calculated as follows:"
  - id: e47
    source: ercot-crr-handbook
    locator: "ERCOT CRR Market User Interface Handbook, CRR Non Opt-In Entity (NOIE) Qualification"
    quote: "On at least an annual basis, ERCOT staff will work with NOIEs to confirm and validate their eligibility for PCRR allocation."
  - id: e48
    source: ercot-crr-handbook
    locator: "CRR Handbook, typical timeline for an annual PCRR allocation"
    quote: "10 days after the end of the review period, the PCRR nomination window is opened and the NOIEs have 5 days to nominate PCRRs for the PCRR Nomination Year."
  - id: e49
    source: imm-som-2022
    locator: "page 91 (OCR), CRR Auction Revenues (2022 report)"
    quote: "The total PCRR discount increased from $76 million in 2021 to $84 million in 2022."
  - id: e50
    source: imm-som-2023
    locator: "page 91 (OCR), CRR Auction Revenues (2023 report)"
    quote: "We also show the amount of the discount provided to the PCRR recipients: the PCRR discount (“PCRR Intrazone Saved” and “PCRR Cross Zone Saved”’) is the difference between the auction value and the value charged to the purchaser."
  - id: e51
    source: imm-som-2023
    locator: "CRR Auction Revenues (2023 report)"
    quote: "Additionally, the total PCRR discount decreased slightly to $76 million in 2023."
  - id: e52
    source: imm-som-2025
    locator: "Transmission Congestion and CRRs, introduction to CRRs (2025 report)"
    quote: "In addition to auctioned CRRs, ERCOT allocates a subset known as Pre-Assigned Congestion Revenue Rights, or PCRRs, to Non-Opt-In Entities (NOIEs) based on generation ownership or contractual arrangements that predate retail competition."
  - id: e53
    source: np-07
    locator: "Section 7.5.6.3, paragraph (1), PCRR PTP Obligation charge formula"
    quote: "If OBLPR _((j, k), a) >0 PCRROBLAMT _(crrh, (j, k), a, tech) = PCRROBLF _(tech) * OBLPR _((j, k), a) * PCRROBL _(crrh, (j, k), a, tech) Otherwise PCRROBLAMT _(crrh, (j, k), a, tech) = OBLPR _((j, k),) _(a) * PCRROBL _(crrh, (j, k), a, tech)"
---

## Definition

A PCRR is a CRR that ERCOT allocates, rather than auctions, to a Non-Opt-In Entity that owned a specific Generation Resource before September 1, 1999 or has a pre-September 1, 1999 long-term (over five years) contract for annual capacity and energy from specific Generation Resources. [e1] NOIEs are the only entities eligible. [e2]

## How it works

**Who and what qualifies.** A NOIE is an electric cooperative or municipally owned utility that does not offer Customer Choice. [e3] A NOIE may designate an agent to manage its PCRRs, but ERCOT's relationship is with the NOIE, and ERCOT relies exclusively on documentation provided or confirmed by the NOIE to determine continued eligibility. [e13] ERCOT publishes a list of eligible NOIEs including each one's ownership or contractual capacity from pre-September 1, 1999 Resources. [e14] An existing Generation Resource that interconnected on or after June 1, 2021 under paragraph (3) of Section 1.6.5 cannot qualify as a pre-September 1, 1999 Resource for PCRR purposes. [e12]

For an owned Resource, the NOIE must have owned it before September 1, 1999 with uninterrupted ownership, the Resource must have stayed in service except for Maintenance, Forced, Opportunity or Planned Outages (including a Mothballed Resource operating under a Seasonal Operation Period), and the NOIE must use it to meet service obligations in its territory at least equal to the nominated PCRR amount. [e15] For a contract, the term must exceed five years (evergreen clauses count only if in place before September 1, 1999), and the NOIE must be entitled to capacity from specific Resources: contracts not backed by specific Resources are not eligible. [e16][e17] For a portfolio supply contract that does not describe each NOIE's entitlement by Resource, each NOIE is allocated by its 2003 4-CP ratio share, calculated as its 4-CP divided by the total 4-CP of all NOIEs supplied by the portfolio in 2003, multiplied by the 2010 registration-data net max sustainable rating of each eligible Resource. [e4][e18] The DC Tie is treated as a PCRR-eligible Resource for the contracts of Tex-La Electric Cooperative of Texas, Inc. with supply resources outside ERCOT that meet the contract tests. [e19]

**Limits on the amount.** Amounts are capped by the Seasonal net max sustainable rating of eligible Resources and never above the 2010 registration-data rating. [e6] A repowered unit is limited to the original turbine/generator sets. [e9] Nominations are based on forecasted peak Demand, subject to the Resource capacity limit. [e30] A NOIE serving several Load Zones nominates per zone, by contract rights or in proportion to peak Load served. [e5]

**Outages and mothballing.** A NOIE keeps eligibility for a Resource out of service more than 12 consecutive months under a Forced Outage if it demonstrates the Outage continues to be necessary and does not require the Resource Entity to cease or suspend operation. [e20] In a Nomination Year in which such a Resource is expected to return, it is eligible only for months it is expected to be in service for the entire month. [e21] A Mothballed Generation Resource also keeps eligibility, whether or not ERCOT determines it is necessary for RMR Service. [e22]

**Disqualification.** PCRRs for a Resource are lost if it is retired and decommissioned, or if the NOIE sells it, including by selling its energy or capacity by contract; a transfer to an Affiliate or to a generation and transmission cooperative for the NOIE's benefit is not disqualifying if all other requirements remain. [e24][e23] Any change after September 1, 1999 in the Resources designated to back a long-term contract disqualifies it. [e25] A NOIE is no longer eligible after it opts into competition, except South Texas Electric Cooperative, which may be eligible for up to three years after entering competition. [e26] When a disqualifying event occurs, the PCRRs for the Resource are voided from the date of the event and future allocations end. [e27] If it occurs during the term of allocated PCRRs and the NOIE still holds the CRRs, they are either voided with a refund of the discounted purchase price, or retained with the NOIE paying the price differential to the full auction price; refund-option PCRRs (allocated at no charge) are voided with no financial exchange. [e28][e29]

**Nomination and allocation.** A PCRR nomination is a request for one-month strips of a NOIE-specified CRR type for each month of the PCRR Nomination Year, the third calendar year after the nomination process. [e8][e10] The NOIE must specify PTP Option, PTP Obligation or a combination before allocation, and may not change it afterwards. [e42] Nominations are due at least 30 Business Days before the first Long-Term Auction Sequence of the year, ERCOT allocates at least 25 Business Days before it, and there is no PCRR nomination for a second sequence in the year. [e33] ERCOT tests nominations with the SFT using 100% of each month's expected network topology; if infeasible, it proportionately reduces requests by their Impact Ratio on violated constraints. [e31] Before each Monthly Auction, ERCOT re-evaluates any reduced nominations for the month and allocates more, if feasible, up to the original amount. [e34] PCRRs cannot be bilaterally traded through ERCOT systems before completion of the auction used to determine their value. [e43]

**Refund versus capacity option.** For eligible non-solid-fuel and non-combined-cycle Resources the NOIE must choose before allocation either the refund option or the capacity option, for every month of the allocation year, not a combination. [e35] A NOIE or group with 2003 peak Load above 2,300 MW must use the capacity option for those Resources. [e36] Under the refund option the NOIE refunds congestion revenues received above those flowing to it for its Output Schedule of the Resource at the PCRR source, and such PCRRs are not transferable. [e37][e38] Under the capacity option the NOIE may nominate up to 100% of the lesser of net unit capacity or contractual amount at a capacity factor no greater than 40% over each calendar year. [e39]

**Price.** The price a NOIE pays for an allocated PCRR is based on the corresponding CRR clearing price in the CRR First Offering. [e32] After the allocation process and subsequent auction, PCRRs (other than refund-option PCRRs for Resources other than solid-fuel and combined-cycle Resources, which are at no charge) are priced as a percentage of the auction clearing price: PTP Options at 10% (nuclear, coal, lignite, combined-cycle), 15% (gas steam) or 20% (hydro, wind, simple cycle and others). [e40][e11] PTP Obligations are at 5%, 7.5% or 10% for the same classes if the clearing price is positive and 100% if it is negative. [e41]

## Formula

For PCRR PTP Obligations the charge per source-sink pair for the TOU period is: if the auction clearing price OBLPR is positive, PCRROBLAMT = PCRROBLF x OBLPR x PCRROBL; otherwise PCRROBLAMT = OBLPR x PCRROBL. [e53] PCRROBLF is the pricing factor for pre-allocated PTP Obligations by Resource technology, set in Section 7.4.2.2(1)(g)(ii) (the 5%, 7.5% and 10% figures above). [e45][e41] For PTP Options the charge is PCRROPTAMT = PCRROPTF x OPTPR x PCRROPT, where OPTPR is the auction clearing price of the PTP Option and PCRROPT is the allocated MW. [e44] The Protocols say ERCOT charges each CRR Account Holder for pre-assigned PTP Obligations allocated before each auction. [e46]

## ERCOT context

The IMM says ERCOT allocates PCRRs to NOIEs based on generation ownership or contractual arrangements that predate retail competition, and that holders pay only a fraction of the auction value of comparable CRRs. [e52][e7] The IMM measures the discount as the difference between the auction value and the value charged to the purchaser. [e50] It reported a total PCRR discount of $76 million in 2021 and $84 million in 2022, and said it decreased slightly to $76 million in 2023. [e49][e51] ERCOT's CRR handbook says ERCOT works with NOIEs at least annually to confirm and validate eligibility, and describes a typical annual cycle in which the nomination window opens 10 days after the review period and lasts 5 days. [e47][e48]

## Key facts

- Only NOIEs can receive PCRRs. [e2]
- Basis: pre-September 1, 1999 ownership or long-term contract (over five years) for specific Generation Resources. [e1]
- Allocation is capped by the 2010 registration-data net max sustainable rating. [e6]
- Nomination Year is three years after the nomination process. [e10]
- Option PCRR prices: 10%, 15% or 20% of the auction clearing price by Resource type; Obligation: 5%, 7.5% or 10% when positive, 100% when negative. [e40][e41]
- Refund option: no charge for non-solid-fuel, non-combined-cycle Resources, with a refund of congestion revenue above the Output Schedule value; capacity option: capacity factor no greater than 40% a year. [e11][e37][e39]
- IMM: PCRR discount $84 million in 2022 and $76 million in 2023. [e49][e51]

## Say it like this

PCRRs are legacy congestion hedges given to co-ops and municipal utilities for plants and contracts that predate the market. They are priced at a small percentage of the auction clearing price, and the NOIE chooses between a refund option and a capacity option for most non-coal, non-nuclear, non-combined-cycle units.

## Common confusion

PCRRs are allocated rather than bought in the auction, but whether they are free depends on the option: the IMM says holders pay a fraction of comparable auction value [e7], while the Protocols say refund-option PCRRs for Resources other than solid-fuel and combined-cycle Resources are provided at no charge. [e11] They are also unrelated to retail electric providers: only NOIEs qualify. [e2][e3] The 4-CP ratio is a 2003 share used to split a portfolio contract, not a current 4CP charge. [e4][e18]

## Questions

### Who qualifies for PCRRs?

NOIEs with pre-September 1, 1999 generation ownership or qualifying long-term contracts for specific resources. [e1][e2]

### Can a new plant earn PCRRs?

Not on new capacity: eligibility rests on pre-September 1, 1999 ownership or contracts, [e1] and new or upgraded components that increase the capacity of those resources are not eligible for increased PCRR MW amounts. [e9] A Resource that interconnected on or after June 1, 2021 under paragraph (3) of Section 1.6.5 cannot qualify. [e12]

### Why might a NOIE's PCRR nomination be cut, and can it come back?

If the SFT finds the nomination infeasible, ERCOT reduces it in proportion to each PCRR's Impact Ratio on the violated constraints; before each Monthly Auction ERCOT re-evaluates and allocates more, if feasible, up to the original nomination. [e31][e34]

### What is the difference between the refund and capacity options?

Refund option: the NOIE refunds congestion revenue above the value flowing to it for its Output Schedule at the PCRR source and the PCRRs are non-transferable; capacity option: up to 100% of capacity at a capacity factor no greater than 40% over each calendar year. [e37][e38][e39] A NOIE with 2003 peak Load above 2,300 MW must use the capacity option for those Resources. [e36]

### What if a NOIE sells a PCRR-backing plant to a third party?

It is a disqualifying event: PCRRs for that Resource are voided from that date and future allocations end, unless the transfer is to an Affiliate or a generation and transmission cooperative for the NOIE's benefit and everything else stays in place. [e23][e27] If the NOIE still holds the CRRs it either has them voided with a refund of the discounted price or keeps them and pays the price differential to the full auction price. [e28]

### What if a NOIE opts into retail competition?

It loses eligibility, except STEC, which may stay eligible for up to three years after entering competition. [e26]

### Why do PCRR holders pay only a fraction of auction value?

The IMM says it reflects their legacy transmission access rights. [e7] The sources do not explain how the specific percentages (5% to 20%) were derived.

## Scenarios

### A co-op's gas steam unit is on a 14-month Forced Outage. Does it keep its PCRRs?

- It can keep eligibility if the outage extends beyond 12 months and the co-op demonstrates to ERCOT's satisfaction that the Outage continues to be necessary and does not require the Resource Entity to cease or suspend operation. [e20]
- For the Nomination Year in which it is expected to return, it is eligible only for months in which the unit is expected to be in service for the entire month. [e21]

## Open items

- Handbook timing: the CRR handbook places PCRR eligibility forms in July approximately 18 months ahead of the PCRR Nomination Year; this was not reconciled against the np-02 definition of the PCRR Nomination Year (three years after the year of the nomination process) and the nomination timing in 7.4.2.2(1)(c) ahead of the first Long-Term Auction Sequence.
- The saved sources do not give the rationale for the 40% capacity factor, the 2,300 MW threshold or the pricing percentages, only the rules themselves.
- IMM discount for 2024 and 2025 ("PCRR Saved") was not found in the saved text; the 2021 figure comes from the 2022 report.
- PCRR revenue treatment in auction revenue distribution (7.5.7) is covered in the crr-auction topic.
- Whether NPRR1288 (IMM: approved November 2025, removing multi-month blocks) changes PCRR nomination wording is not in the saved sources; the PCRR text above is the np-07 snapshot.
