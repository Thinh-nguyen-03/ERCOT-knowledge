---
id: noe
name: "NOIE (Non-Opt-In Entity: Munis & Co-ops)"
aliases: [NOIE, NOE, Non-Opt-In Entity, MOU, EC, muni, co-op, municipally owned utility, electric cooperative]
kind: entity
domain: structure
level: 2
lenses: [analyst, congestion, retail]
depth: deep
as_of: 2026-11-21
links:
  - to: lse
    type: part-of
    note: NOIEs that serve Load are LSEs. [e4]
  - to: retail-choice
    type: contrasts-with
    note: NOIEs are the MOUs and ECs that do not offer Customer Choice. [e1][e5]
  - to: tdsp
    type: related
    note: MOUs and ECs operating as a TSP or DSP in the ERCOT Region must register as a TSP or DSP. [e14]
  - to: crr
    type: related
    note: NOIEs have special CRR products and allocations. [e9][e10]
  - to: pcrr
    type: related
    note: The IMM says ERCOT allocates PCRRs to NOIEs, and that parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs. [e10]
  - to: load-zone
    type: related
    note: Protocols let a NOIE or group of NOIEs establish a NOIE Load Zone, and four were approved before the Texas Nodal Market Implementation Date. [e8][e25]
  - to: polr
    type: related
    note: A municipal utility or co-op that opts into customer choice designates its own provider of last resort, or may delegate that to the PUCT. [e46][e47]
  - to: texas-legislature
    type: related
    note: PURA Chapters 40 and 41 let a muni's governing body or a co-op's board decide when or if to offer customer choice. [e17][e18]
  - to: mass-transition
    type: related
    note: The Retail Market Guide says allocation of ESI IDs in a Mass Transition may follow different processes depending on the MOU/EC's retail processing specifications. [e24]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE)"
    quote: "An EC or MOU that does not offer Customer Choice."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Municipally Owned Utility (MOU)"
    quote: "A utility owned, operated, and controlled by a nonprofit corporation, the directors of which are appointed by one or more municipalities, or a utility owned, operated, or controlled by a municipality."
  - id: e3
    source: np-02
    locator: "Section 2.1, definition of Competitive Retailer (CR)"
    quote: "A Municipally Owned Utility (MOU) or an Electric Cooperative (EC) that offers Customer Choice and sells electric energy at retail in the restructured electric power market in Texas, or a Retail Electric Provider (REP)."
  - id: e4
    source: np-16
    locator: "Section 16.3(1)"
    quote: "Load Serving Entities (LSEs) provide electric service to Customers and Wholesale Customers. LSEs include Non-Opt-In Entities (NOIEs) that serve Load, Competitive Retailers (CRs) (which includes Retail Electric Providers (REPs)), and External Load Serving Entities (ELSEs). Each LSE must register with ERCOT."
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.102(a)"
    quote: "Each retail customer in this state, except retail customers of electric cooperatives and municipally owned utilities that have not opted for customer choice, shall have customer choice on and after January 1, 2002."
  - id: e6
    source: np-16
    locator: "Section 16.6(1)-(2)"
    quote: "Each Municipally Owned Utility (MOU) and Electric Cooperative (EC) shall register with ERCOT and sign the Agreements that apply to the functions it performs in the ERCOT Region, regardless of whether planning to be a Non-Opt-In Entity (NOIE) or a Competitive Retailer (CR)."
  - id: e7
    source: np-16
    locator: "Section 16.6(2)-(3)"
    quote: "If an MOU or EC decides to register an affiliate as a CR, it must notify ERCOT of its intentions six months prior to opting in."
  - id: e8
    source: np-02
    locator: "Section 2.1, definition of Non-Opt-In Entity (NOIE) Load Zone"
    quote: "A Load Zone established by a NOIE or a group of NOIEs using a one-time NOIE election."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of Point-to-Point (PTP) Obligation with Links to an Option"
    quote: "A type of CRR that entitles a Non-Opt-In Entity’s (NOIE’s) PTP Obligation bought in the DAM to be reflective of the NOIE’s PTP Option."
  - id: e10
    source: imm-som-2025
    locator: "CRR discussion of PCRRs"
    quote: "In addition to auctioned CRRs, ERCOT allocates a subset known as Pre-Assigned Congestion Revenue Rights, or PCRRs, to Non-Opt-In Entities (NOIEs) based on generation ownership or contractual arrangements that predate retail competition. Parties receiving PCRRs pay only a fraction of the auction value of comparable CRRs, reflecting their legacy transmission access rights."
  - id: e11
    source: np-16
    locator: "Section 16.6(3)"
    quote: "Each MOU and EC shall assign an Electric Service Identifier (ESI ID) to each NOIE wholesale point of delivery as specified in these Protocols. The ESI IDs must be assigned to a Load Serving Entity (LSE)."
  - id: e12
    source: pura-39
    locator: "PURA Sec. 39.105(b)"
    quote: "A person or retail electric utility may not provide, furnish, or make available electric service at retail within the certificated service area of an electric cooperative that has not adopted customer choice or a municipally owned utility that has not adopted customer choice. However, this subsection does not prohibit the provision of electric service in multiply certificated service areas to customers of any other retail electric utility."
  - id: e13
    source: np-16
    locator: "Section 16.2.3(1)(c)"
    quote: "If applicable, a QSE offering services in a Non-Opt-In Entity (NOIE) service territory must obtain written authorization from the NOIE, and submit such authorization to ERCOT; and"
  - id: e14
    source: np-16
    locator: "Section 16.4(1)"
    quote: "Each Entity operating as a Transmission Service Provider (TSP) or Distribution Service Provider (DSP) within the ERCOT Region, including Municipally Owned Utilities (MOUs) and Electric Cooperatives (ECs), shall register as a TSP or DSP, or both, as applicable, with ERCOT."
  - id: e15
    source: np-16
    locator: "Section 16.3.1.1(1)"
    quote: "Each LSE applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the LSE."
  - id: e16
    source: puct-25-5
    locator: "Section 25.5, definition of Transmission and distribution utility (TDU)"
    quote: "but does not include a municipally owned utility or an electric cooperative. The TDU may be a single utility or may be separate transmission and distribution utilities."
  - id: e17
    source: pura-40
    locator: "PURA Sec. 40.051(b)"
    quote: "Municipally owned utilities may choose to participate in customer choice at any time on or after January 1, 2002, by adoption of an appropriate resolution of the municipal governing body or a body vested with power to manage and operate the municipally owned utility.  The decision to participate in customer choice by the adoption of a resolution is irrevocable."
  - id: e18
    source: pura-41
    locator: "PURA Sec. 41.051(b)"
    quote: "Electric cooperatives that choose to participate in customer choice may do so at any time on or after January 1, 2002, by adoption of an appropriate resolution of the board of directors.  The decision to participate in customer choice by the adoption of a resolution may be revoked only if no customer has opted for choice within four years of the resolution's adoption."
  - id: e19
    source: pura-40
    locator: "PURA Sec. 40.052(a)-(b)"
    quote: "A municipally owned utility that has not chosen to participate in customer choice may not offer electric energy at unregulated prices directly to retail customers outside its certificated retail service area."
  - id: e20
    source: pura-40
    locator: "PURA Sec. 40.052(b)"
    quote: "A municipally owned utility under Subsection (a) retains the right to offer and provide a full range of customer service and pricing programs to the customers within its certificated area and to purchase and sell electric energy at wholesale without geographic restriction."
  - id: e21
    source: pura-41
    locator: "PURA Sec. 41.052(a)"
    quote: "An electric cooperative that chooses not to participate in customer choice may not offer electric energy at unregulated prices directly to retail customers outside its certificated retail service area."
  - id: e22
    source: rmg-08
    locator: "Section 8.1(4)(c), Retail Market Guide (December 1, 2025)"
    quote: "In an IOU TDSP territory, the PUCT Customer protection rules apply. However, in an MOU/EC territory, the specific MOU/EC utility service rules apply, which in many cases are different from the PUCT Customer protection rules such as the due date of the bill;"
  - id: e23
    source: rmg-08
    locator: "Section 8.1(3), Retail Market Guide (December 1, 2025)"
    quote: "For current tariff information, refer to P.U.C. SUBST. R. 25.215, Terms and Conditions of Access by a Competitive Retailer to the Delivery System of a Municipally Owned Utility or Electric Cooperative that has Implemented Customer Choice, for Nueces Electric Cooperative (NEC)/EC or P.U.C. SUBST. R. 25.219, Terms and Conditions of Access by a Competitive Retailer to the Delivery System of a Municipally Owned Utility or Electric Cooperative that Implements Customer Choice after May 1, 2023, for Lubbock Power & Light (LP&L)/MOU and P.U.C. SUBST. R. 25.214(d), Figure: 16, on the Public Utility Commission of Texas (PUCT) website or the TDSP."
  - id: e24
    source: rmg-08
    locator: "Section 8.1(4)(e), Retail Market Guide (December 1, 2025)"
    quote: "Allocation of Electric Service Identifiers (ESI IDs) during a Mass Transition may follow different processes based on the Retail Processing Specifications of the MOU/EC as noted in Section 7.11.2, Acquisition and Transfer of Customers from one Retail Electric Provider to Another."
  - id: e25
    source: np-03
    locator: "Section 3.4.3(1)(a), NOIE Load Zones"
    quote: "There are four NOIE Load Zones that were approved prior to the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative, and Lower Colorado River Authority (LCRA);"
  - id: e26
    source: np-03
    locator: "Section 3.4.3(1)(c), NOIE Load Zones"
    quote: "A separate NOIE Load Zone is made up of a group of NOIEs that are parties to the same pre-1999 power supply arrangements and that had an overall 2003 peak Load in excess of 2,300 MW."
  - id: e27
    source: np-03
    locator: "Section 3.4.3(1)(f), NOIE Load Zones"
    quote: "Four years after a NOIE offers its Customers retail choice, the NOIE’s Load must be merged into the appropriate Competitive Load Zone(s)."
  - id: e28
    source: np-03
    locator: "Section 3.4.3(1)(d), NOIE Load Zones"
    quote: "NOIEs may participate in only one NOIE Load Zone, and all Loads served by that NOIE must be contained within that Load Zone;"
  - id: e29
    source: np-03
    locator: "Section 3.4.2(1), Load Zone Modifications"
    quote: "Competitive Load Zones and NOIE Load Zones may be added, deleted, or changed, only when approved by the ERCOT Board, with the exception of paragraph (1)(c) of Section 3.4.3, NOIE Load Zones. Approved additions, deletions, or changes go into effect 48 months after the end of the month in which the addition, deletion, or change was approved, with the exception of paragraph (3) below."
  - id: e30
    source: np-03
    locator: "Section 3.4.3(1)(b), NOIE Load Zones"
    quote: "Any costs allocated based upon a zonal Load Ratio Share (LRS) must be allocated using “Cost-Allocation Load Zones,” which are the four Load Zones in effect during the 2003 ERCOT market unless they are changed pursuant to Section 3.4.2, Load Zone Modifications."
  - id: e31
    source: np-07
    locator: "Section 7.4(1), Pre-Assigned Congestion Revenue Rights"
    quote: "ERCOT shall allocate a portion of available Congestion Revenue Rights (CRRs) as Pre-Assigned Congestion Revenue Rights (PCRRs) to Non-Opt-In Entities (NOIEs) that either have established ownership prior to September 1, 1999 in a specific Generation Resource or have a long-term (greater than five years) contractual commitment for annual capacity and energy that was entered into prior to September 1, 1999 from specific Generation Resources."
  - id: e32
    source: np-07
    locator: "Section 7.4(2), Pre-Assigned Congestion Revenue Rights"
    quote: "NOIEs are the only Entities eligible for an allocation of PCRRs. NOIEs may designate an agent to manage their PCRRs, provided that ERCOT’s relationship is with the NOIE and that an agent shall be subject to all PCRR rules applicable to the NOIE."
  - id: e33
    source: np-07
    locator: "Section 7.4(1), Pre-Assigned Congestion Revenue Rights"
    quote: "An existing Generation Resource that interconnected to the ERCOT Transmission Grid on or after June 1, 2021, pursuant to paragraph (3) of Section 1.6.5, Interconnection of New or Existing Generation, cannot qualify as a pre-September 1, 1999 Generation Resource for PCRR purposes."
  - id: e34
    source: np-07
    locator: "Section 7.4.1.1(1), PCRR Criteria for NOIE Allocation Eligibility"
    quote: "PCRRs shall be limited to pre-September 1, 1999 Generation Resources utilized by a NOIE to serve the Load in its service territory."
  - id: e35
    source: np-07
    locator: "Section 7.4.1.3.1(6), PCRR Disqualifying Events"
    quote: "A NOIE shall no longer be eligible for allocation of PCRRs after it opts into competition, with the exception of South Texas Electric Cooperative Inc. (STEC). STEC may be eligible for allocation of PCRRs for up to three years after the date it enters into competition."
  - id: e36
    source: np-07
    locator: "Section 7.4.2.2(1)(e), PCRR Allocations and Nominations"
    quote: "A NOIE must designate whether to accept the refund option or the capacity option for its eligible non-solid fuel and non-combined-cycle Resources before the allocation of PCRRs. The designated option (refund or capacity) will be the same for every month of the allocation year for that Resource."
  - id: e37
    source: np-07
    locator: "Section 7.4.2.2(1)(e)(ii), PCRR Allocations and Nominations (capacity option)"
    quote: "Capacity option – The eligible NOIE may nominate up to 100% of the lesser of the net unit capacity or contractual amount for those Resource amounts allowed pursuant to Section 7.4.2.1 at a capacity factor no greater than 40% over each calendar year."
  - id: e38
    source: np-07
    locator: "Section 7.4.2.2(1)(g), PCRR Allocations and Nominations (pricing)"
    quote: >-
      After the allocation process, and the subsequent applicable CRR Auction, PCRRs other than those described in item (iii) below must be priced as a percentage of the applicable CRR Auction clearing price for the applicable CRR, as follows:

      (i) PTP Option PCRRs:

      (A) Nuclear, coal, lignite or combined-cycle Resources: 10% of the applicable CRR Auction clearing prices;
  - id: e39
    source: np-07
    locator: "Section 7.4.2.2(1)(g)(ii)(A), PCRR Allocations and Nominations (pricing, PTP Obligation PCRRs)"
    quote: "Nuclear, coal, lignite or combined-cycle Resources: 5% of the applicable CRR Auction clearing price if it is positive; 100% of the applicable CRR Auction clearing price if it is negative;"
  - id: e40
    source: np-07
    locator: "Section 7.4.2.2(1)(g)(iii), PCRR Allocations and Nominations (refund option)"
    quote: "For a NOIE that has chosen the refund option, the allocated number of PCRRs for Resources other than solid-fuel and combined-cycle Resources are provided at no charge."
  - id: e41
    source: np-07
    locator: "Section 7.4.2.2(1)(f), PCRR Allocations and Nominations"
    quote: "The CRR type, either Point-to-Point (PTP) Option, PTP Obligation, or a combination, must be specified by the eligible NOIE before the PCRR allocation and is binding for purchase."
  - id: e42
    source: np-07
    locator: "Section 7.4(3), Pre-Assigned Congestion Revenue Rights"
    quote: "ERCOT shall publish a list of NOIEs who are eligible for allocation of PCRRs on the ERCOT website."
  - id: e43
    source: np-07
    locator: "Section 7.4.2.2(1)(c), PCRR Allocations and Nominations"
    quote: "Prior to the first CRR Long-Term Auction Sequence held in any given calendar year, the NOIE must nominate PCRRs for each month of the PCRR Nomination Year."
  - id: e44
    source: np-07
    locator: "Section 7.4.2.2(1)(e)(i), PCRR Allocations and Nominations (refund option)"
    quote: "The eligible NOIE shall refund to ERCOT any congestion revenues received above those congestion revenues flowing to the NOIE for its Output Schedule of the Resource at the PCRR source."
  - id: e45
    source: rmg-08
    locator: "Section 8.1(4)(a), Retail Market Guide (December 1, 2025)"
    quote: "Billing may be consolidated billing or separate billing (based on Customer Choice) in an MOU/EC TDSP territory versus consolidated billing only by the Competitive Retailer (CR) in an IOU TDSP territory."
  - id: e46
    source: pura-40
    locator: "PURA Sec. 40.053(c)"
    quote: "On its initiation of customer choice, a municipally owned utility may designate itself or one or more other entities as the provider or providers of last resort for customers within the municipally owned utility's certificated service area as that area existed on the date of the utility's initiation of customer choice."
  - id: e48
    source: np-07
    locator: "Section 7.4.1.3.1(1)(b), PCRR Disqualifying Events"
    quote: "The Generation Resource is sold by the NOIE to another Entity, regardless of whether the NOIE later enters into a long-term supply contract with that Entity to serve the NOIE’s Load in its service territory. The selling of a Generation Resource shall include the transfer of ownership of the Generation Resource and/or the sale of the energy and/or capacity of the Generation Resource pursuant to a contractual agreement. However, a transfer of the Generation Resource to an Affiliate of the NOIE or to a generation and transmission Electric Cooperative (EC) for the benefit of the NOIE shall not serve as a disqualifying event as long as all other PCRR eligibility requirements remain in place."
  - id: e47
    source: pura-41
    locator: "PURA Sec. 41.053(c)"
    quote: "On its initiation of customer choice, an electric cooperative shall designate itself or another entity as the provider of last resort for retail customers within the electric cooperative's certificated service area and shall fulfill the role of default provider of last resort in the event no other entity is available to act in that capacity."
---

## Definition

A NOIE is an Electric Cooperative (EC) or Municipally Owned Utility (MOU) that does not offer Customer Choice. [e1] An MOU is a utility owned, operated and controlled by a nonprofit corporation whose directors are appointed by one or more municipalities, or a utility owned, operated or controlled by a municipality. [e2]

## How it works

Customer choice applies to every Texas retail customer except customers of cooperatives and municipally owned utilities that have not opted for it. [e5] PURA also bars a person or retail electric utility from providing retail electric service in the certificated area of a co-op or muni that has not adopted customer choice, but this does not prohibit service in multiply certificated service areas to customers of any other retail electric utility. [e12] An MOU or EC that does offer Customer Choice and sells at retail is a Competitive Retailer. [e3]

What a NOIE may and may not do under PURA. A muni that has not chosen customer choice may not offer energy at unregulated prices directly to retail customers outside its certificated retail service area [e19], but keeps the right to offer a full range of customer service and pricing programs inside its area and to buy and sell at wholesale without geographic restriction. [e20] A co-op that chooses not to participate is under the same retail restriction. [e21]

Opting in. A muni may choose customer choice at any time on or after January 1, 2002 by resolution of its governing body, and the decision is irrevocable. [e17] A co-op may do so by board resolution, and the resolution may be revoked only if no customer has opted for choice within four years of its adoption. [e18] Each MOU and EC must register with ERCOT and sign the agreements for the functions it performs, whether it plans to be a NOIE or a Competitive Retailer. [e6] If it registers an affiliate as a CR, it must tell ERCOT six months before opting in. [e7] On initiating customer choice a muni may designate itself or others as provider of last resort [e46] and a co-op shall designate itself or another entity. [e47]

Registration. Each MOU and EC assigns an ESI ID to each NOIE wholesale point of delivery, and those ESI IDs must be assigned to an LSE. [e11] NOIEs that serve Load are LSEs, so they register with ERCOT as LSEs [e4], and each LSE applicant must designate a QSE. [e15]

Retail market differences once an MOU/EC opts in. The Retail Market Guide (December 1, 2025) says billing in an MOU/EC TDSP territory may be consolidated or separate, versus consolidated billing by the CR in an IOU territory. [e45] In an MOU/EC territory the specific MOU/EC utility service rules apply instead of the PUCT customer protection rules, which in many cases differ, for example on the bill due date. [e22] The same section names Nueces Electric Cooperative (NEC) as an EC and Lubbock Power & Light (LP&L) as an MOU in its tariff references. [e23]

## ERCOT context

NOIE Load Zones. A NOIE or group of NOIEs can establish a NOIE Load Zone through a one-time election. [e8] Four NOIE Load Zones were approved before the Texas Nodal Market Implementation Date: Austin Energy, City Public Service, Rayburn Country Electric Cooperative and LCRA. [e25] A separate NOIE Load Zone is made up of a group of NOIEs that are parties to the same pre-1999 power supply arrangements and had an overall 2003 peak Load above 2,300 MW. [e26] NOIEs may participate in only one NOIE Load Zone, and all Load a NOIE serves must be in it. [e28] Changes to Load Zones need ERCOT Board approval and take effect 48 months after the end of the month of approval, with exceptions. [e29] Costs allocated by zonal Load Ratio Share use the 2003 "Cost-Allocation Load Zones" rather than the NOIE zones. [e30] When a NOIE offers retail choice, four years later its Load must be merged into the appropriate Competitive Load Zone(s). [e27]

PCRRs. ERCOT allocates a portion of available CRRs as Pre-Assigned CRRs to NOIEs that either have established ownership before September 1, 1999 in a specific Generation Resource or have a long-term contractual commitment (greater than five years) from specific Generation Resources entered into before September 1, 1999. [e31] NOIEs are the only Entities eligible, and may designate an agent to manage them. [e32] PCRRs are limited to pre-September 1, 1999 Generation Resources used by the NOIE to serve Load in its service territory. [e34] An existing Generation Resource that interconnected on or after June 1, 2021 under the Section 1.6.5(3) route cannot qualify as a pre-September 1, 1999 resource. [e33] ERCOT publishes the list of eligible NOIEs on its website. [e42] The NOIE nominates PCRRs for each month of the PCRR Nomination Year before the first CRR Long-Term Auction Sequence of the calendar year. [e43] The NOIE specifies the CRR type (PTP Option, PTP Obligation or a combination) before allocation, and it is binding. [e41] For eligible non-solid-fuel and non-combined-cycle Resources the NOIE must choose either the refund option or the capacity option before allocation, the same for every month of the allocation year. [e36] Under the refund option the NOIE refunds to ERCOT congestion revenues above what flows to it for its Output Schedule at the PCRR source [e44]; under the capacity option it may nominate up to 100% of the lesser of net unit capacity or contractual amount at a capacity factor no greater than 40% over each calendar year. [e37]

PCRR pricing: after allocation and the applicable CRR Auction, PCRRs (except refund-option PCRRs for non-solid-fuel, non-combined-cycle Resources, which are allocated at no charge [e40]) are priced as a percentage of the CRR Auction clearing price. For PTP Option PCRRs on nuclear, coal, lignite or combined-cycle Resources the price is 10% of the clearing price. [e38] For PTP Obligation PCRRs on those Resources it is 5% of the clearing price if positive and 100% if negative. [e39] The Protocol text lists other percentages for gas steam and other Resource types. [e38]

A NOIE stops being eligible for PCRRs after it opts into competition, except South Texas Electric Cooperative Inc. (STEC), which may be eligible for up to three years after entering competition. [e35]

Other features. A QSE offering services in a NOIE service territory must get written authorization from the NOIE and submit it to ERCOT. [e13] There is a CRR type, PTP Obligation with Links to an Option, defined around a NOIE's PTP Obligation and PTP Option. [e9] The IMM notes that ERCOT allocates Pre-Assigned CRRs to NOIEs based on generation ownership or arrangements that predate retail competition, at a fraction of the auction value of comparable CRRs. [e10] The Retail Market Guide says allocation of ESI IDs in a Mass Transition may follow different processes depending on the MOU/EC's retail processing specifications. [e24]

## Key facts

- NOIE = EC or MOU that does not offer Customer Choice. [e1]
- Customer choice since January 1, 2002 excludes customers of co-ops and munis that have not opted in. [e5]
- A muni's opt-in resolution is irrevocable; a co-op's may be revoked only if no customer opts for choice within four years. [e17][e18]
- An MOU or EC registering an affiliate as a CR must notify ERCOT six months before opting in. [e7]
- NOIE wholesale delivery points get ESI IDs assigned to an LSE. [e11]
- Four NOIE Load Zones pre-date the nodal market; a NOIE's Load is merged into a Competitive Load Zone four years after it offers retail choice. [e25][e27]
- PCRRs are allocated only to NOIEs, based on pre-September 1, 1999 ownership or contracts. [e31][e32]
- PTP Option PCRR price for nuclear, coal, lignite or combined-cycle: 10% of the CRR Auction clearing price. [e38]

## Say it like this

(Guidance) A NOIE is a municipal utility or co-op that has not opened its territory to retail competition, so it serves its own load rather than competing against REPs. In ERCOT it still registers with ERCOT, registers as an LSE if it serves Load, and each LSE applicant designates a QSE. Its legacy generation gets special treatment in CRRs and it can have its own load zone.

## Common confusion

(Guidance) "NOIE" and "opt-in" are not about whether the entity is in ERCOT; both opt-in and non-opt-in munis and co-ops can be inside the ERCOT Region and register with ERCOT. [e6] The difference is Customer Choice. [e1][e3] Also, the PUCT TDU definition excludes MOUs and ECs, so do not call a muni a TDU in PUCT terms. [e16] And a NOIE Load Zone is a settlement-price zone, not a separate market: the Protocols treat NOIE Load Zones like other Load Zones except as specified. [e8][e29]

## Questions

### What is the difference between a NOIE and a Competitive Retailer?

A NOIE is an EC or MOU that does not offer Customer Choice; a Competitive Retailer is a REP or an MOU or EC that does offer Customer Choice and sells at retail. [e1][e3]

### How does a muni or co-op move from NOIE to competitive?

The governing body or board adopts a resolution to participate in customer choice; a muni's resolution is irrevocable and a co-op's may be revoked only if no customer has opted for choice within four years. [e17][e18] An MOU or EC that decides to register an affiliate as a CR must notify ERCOT six months before opting in. [e7] Four years after it offers choice, its Load is merged into the Competitive Load Zone(s). [e27]

### Do NOIEs get anything different in the CRR market?

Yes: PCRRs. ERCOT allocates them only to NOIEs, based on pre-September 1, 1999 ownership or long-term contracts, at a fraction of CRR Auction clearing prices (for example 10% for PTP Option PCRRs on nuclear, coal, lignite or combined-cycle Resources). [e31][e32][e38] The Protocols also define a CRR type linking a NOIE's PTP Obligation to its PTP Option. [e9]

### Why does a NOIE lose PCRRs when it opts into competition?

The Protocols say a NOIE is no longer eligible after it opts into competition, with an exception for STEC for up to three years. [e35] PCRRs are tied to serving the Load in the NOIE's service territory from pre-1999 resources. [e34] The saved sources do not give the policy rationale beyond that.

### What if a NOIE sells the generating unit behind its PCRRs?

A NOIE that owns a pre-September 1, 1999 Generation Resource is no longer eligible for PCRRs associated with it if the resource is sold to another Entity, even if the NOIE later contracts for supply to serve its Load. A transfer to an Affiliate of the NOIE or to a generation and transmission EC for the benefit of the NOIE is not a disqualifying event if all other PCRR eligibility requirements remain in place. [e48]

## Scenarios

### A co-op decides to open its territory to retail choice. What changes in ERCOT?

- It must keep its ERCOT registration and agreements for the functions it performs. [e6]
- If it registers an affiliate as a CR, it must notify ERCOT six months before opting in. [e7]
- It designates itself or another entity as POLR. [e47]
- Its PCRR eligibility ends (subject to the STEC exception). [e35]
- Four years after it offers choice, its Load merges into a Competitive Load Zone. [e27]

## Open items

- How many NOIEs exist in ERCOT and their share of load was not found in the sources reviewed.
- Whether specific MOUs or ECs other than NEC and LP&L (named in the Retail Market Guide) have opted in was not sourced; the ERCOT hubs and load zones page shows the four NOIE zones as settlement points but no source states which NOIEs have opted in.
- The other PCRR disqualifying events (7.4.1.3.1(1)(a) and (2)-(5)), the allocation amount rules (7.4.2.1) and the gas steam and other percentages in PCRR pricing were seen but not fully quoted.
- Resolved 2026-11-21: NOIE Load Zone rules (np-03 3.4.2-3.4.3), PCRR allocation, pricing and eligibility (np-07 7.4) and PURA opt-in provisions are now cited above.
