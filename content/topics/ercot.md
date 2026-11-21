---
id: ercot
name: ERCOT
aliases: [ERCOT, Electric Reliability Council of Texas, Electric Reliability Council of Texas Inc., ISO, Independent Organization]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: puct
    type: related
    note: The PUCT certifies ERCOT as the Independent Organization, approves its budget and fee, and must approve its protocols before they take effect. [e1][e9][e10][e11]
  - to: ferc
    type: contrasts-with
    note: FERC staff say FERC regulates all RTOs/ISOs except ERCOT. [e18]
  - to: imm
    type: related
    note: ERCOT contracts with the market monitor the PUCT selects, but the IMM is an office independent of ERCOT and not supervised by it. [e6]
  - to: texas-legislature
    type: related
    note: ERCOT's duties, board make-up and board selection committee are set in PURA, and ERCOT is subject to Sunset review. [e2][e12][e13][e28]
  - to: texas-interconnection
    type: operates
    note: Covers the physical grid ERCOT operates.
  - to: nodal-market
    type: operates
    note: ERCOT administers the daily operational and market functions of the ERCOT system; its nodal market began on December 1, 2010. [e3][e33]
  - to: nodal-protocols
    type: related
    note: The Protocols are ERCOT's rulebook, and new or revised protocols need PUCT approval of a market impact statement before taking effect. [e11][e37]
  - to: stakeholder-process
    type: related
    note: Corporate Members elect TAC Representatives by market segment, and TAC sets the priority of projects approved through the NPRR, SCR and guide revision processes. [e20][e23]
  - to: qse
    type: related
    note: ERCOT converts its system administration fee into a charge on each QSE for every 15-minute settlement interval. [e30][e31]
  - to: energy-only-market
    type: operates
    note: Explains how the market ERCOT runs is meant to pay for new capacity.
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Electric Reliability Council of Texas, Inc. (ERCOT)"
    quote: "A Texas nonprofit corporation that has been certified by the PUCT as the Independent Organization for the ERCOT Region."
  - id: e2
    source: pura-39
    locator: "PURA §39.151(a), Essential Organizations"
    quote: "A power region must establish one or more independent organizations to perform the following functions:(1)  ensure access to the transmission and distribution systems for all buyers and sellers of electricity on nondiscriminatory terms;(2)  ensure the reliability and adequacy of the regional electrical network;(3)  ensure that information relating to a customer's choice of retail electric provider is conveyed in a timely manner to the persons who need that information;  and(4)  ensure that electricity production and delivery are accurately accounted for among the generators and wholesale buyers and sellers in the region."
  - id: e3
    source: puct-25-361
    locator: "16 TAC §25.361(b)(1)-(2), Functions"
    quote: "administer, on a daily basis, the operational and market functions of the ERCOT system, including procuring and deploying ancillary services, scheduling resources and loads, and managing transmission congestion, as set forth in this chapter, commission orders, and ERCOT rules; (2) administer settlement and billing for services provided by ERCOT, including assessing creditworthiness of market participants and establishing and enforcing reasonable security requirements in relation to their responsibilities under ERCOT rules;"
  - id: e4
    source: np-01
    locator: "Section 1.2(4), Functions of ERCOT"
    quote: "ERCOT is the central counterparty for all transactions settled by ERCOT pursuant to these Protocols and is deemed to be the sole buyer to each seller, and the sole seller to each buyer, of all energy, Ancillary Services, Reliability Unit Commitments (RUCs), Emergency Response Service (ERS), and other products or services for which ERCOT may pay or charge a Market Participant, except for those products or services procured through bilateral transactions between Market Participants and those products or services that are self-arranged by Market Participants."
  - id: e5
    source: np-01
    locator: "Section 1.2(8), Functions of ERCOT"
    quote: "ERCOT may not profit financially from its activities as the Independent Organization in the ERCOT Region. ERCOT may not use its discretion in the procurement of Ancillary Service capacity or deployment of energy to influence, set or control prices."
  - id: e6
    source: puct-25-365
    locator: "16 TAC §25.365(f), Selection of the IMM"
    quote: "ERCOT and the commission shall contract with an entity selected by the commission to act as the commission's wholesale market monitor. The IMM shall be established as an office independent from ERCOT, and is not subject to the supervision of ERCOT with respect to its monitoring and investigative activities."
  - id: e7
    source: ercot-fact-sheet
    locator: "ERCOT Fact Sheet (October 2026), narrative paragraph"
    quote: "ERCOT manages the flow of electric power to more than 27 million Texas customers, representing about 90 percent of the state's electric load. As the Independent System Operator for the region, ERCOT schedules power on an electric grid that connects more than 55,000+ miles of transmission lines and 1,460 generation units, including Private Use Networks."
  - id: e8
    source: ercot-fact-sheet
    locator: "ERCOT Fact Sheet (October 2026), narrative paragraph"
    quote: "ERCOT also performs financial settlement for the competitive wholesale bulk-power market and administers retail switching for more than 8 million premises in competitive choice areas. ERCOT is a membership-based 501(c)(4) nonprofit corporation, governed by a board of directors and subject to oversight by the Public Utility Commission of Texas and the Texas Legislature."
  - id: e9
    source: pura-39
    locator: "PURA §39.151(d)"
    quote: "An independent organization certified by the commission is directly responsible and accountable to the commission.  The commission has complete authority to oversee and investigate the independent organization's finances, budget, and operations as necessary to ensure the organization's accountability and to ensure that the organization adequately performs the organization's functions and duties."
  - id: e10
    source: pura-39
    locator: "PURA §39.151(e)"
    quote: "After approving the budget of an independent organization under Subsection (d-1), the commission shall authorize the organization to charge to wholesale buyers and sellers a system administration fee, within a range determined by the commission, that is reasonable and competitively neutral to fund the independent organization's approved budget."
  - id: e11
    source: pura-39
    locator: "PURA §39.151(g-6)"
    quote: "Protocols adopted by an independent organization and enforcement actions taken by the organization under delegated authority from the commission are subject to commission oversight and review and may not take effect before receiving commission approval."
  - id: e12
    source: pura-39
    locator: "PURA §39.151(g-1), governing body composition"
    quote: "The governing body must be composed of:(1)  two members of the commission as ex officio nonvoting members:(A)  one of whom must be the presiding officer of the commission; and(B)  one of whom must be designated by the presiding officer of the commission to serve a one-year term on the governing body;(2)  the counsellor as an ex officio voting member representing residential and small commercial consumer interests;(3)  the chief executive officer of the independent organization as an ex officio nonvoting member; and(4)  eight members selected by the selection committee under Section 39.1513 with executive-level experience in any of the following professions:(A)  finance;(B)  business;(C)  engineering, including electrical engineering;(D)  trading;(E)  risk management;(F)  law; or(G)  electric market design."
  - id: e13
    source: pura-39
    locator: "PURA §39.1513(a), ERCOT Board Selection Committee"
    quote: "The ERCOT board selection committee is composed of:(1)  one member appointed by the governor;(2)  one member appointed by the lieutenant governor; and(3)  one member appointed by the speaker of the house of representatives."
  - id: e14
    source: puct-25-361
    locator: "16 TAC §25.361(d), Planning"
    quote: "ERCOT shall conduct transmission system planning and exercise comprehensive authority over the planning of bulk transmission projects that affect the transfer capability of the ERCOT transmission system. ERCOT shall supervise and coordinate the other planning activities of TSPs."
  - id: e15
    source: ercot-annual-report-2025
    locator: "2025 State of the Grid (annual report), About ERCOT"
    quote: "Founded in 1970, the Electric Reliability Council of Texas (ERCOT) is an independent, not-for-profit organization responsible for overseeing the reliable and safe transmission of electricity over the power grid serving most of Texas. As the Independent System Operator (ISO) since 1996, ERCOT has four primary responsibilities: • Maintain system reliability • Facilitate a competitive wholesale market • Facilitate a competitive retail market • Ensure open access to transmission"
  - id: e16
    source: ercot-annual-report-2025
    locator: "2025 State of the Grid (annual report), About ERCOT"
    quote: "ERCOT is a membership-based 501(c)(4) nonprofit corporation governed by a 12-member Board of Directors and subject to oversight by the Public Utility Commission of Texas (PUCT) and the Texas Legislature. Its members include consumers, cooperatives, generators, battery owners/operators, load resources, power marketers, retail electric providers, investor-owned electric utilities, transmission and distribution providers, and municipally owned electric utilities."
  - id: e17
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), history of power pools"
    quote: "The first of the power pools was PJM, which began in 1927 for utilities to share their generating resources. The Electric Reliability Council of Texas (ERCOT) and the Southwest Power Pool (SPP) formed in 1941 to pool resources for the war effort."
  - id: e18
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Chapter on RTO/ISO markets, introduction"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
  - id: e19
    source: ercot-bylaws
    locator: "ERCOT Bylaws (approved December 20, 2022), Section 3.1 Membership"
    quote: "Members must qualify in one of the following Segments as defined in Article 2: (1) Cooperative; (2) Independent Generator; (3) Independent Power Marketer; (4) Independent REP; (5) Investor-Owned Utility; (6) Municipal; or (7) Consumer in one of three subsegments: (i) Commercial (which is further divided into Large and Small Commercial Consumer); (ii) Industrial; and (iii) Residential. (b) Except for the Consumer Segment, Members must have an actual financial interest in the retail or wholesale electric market in the ERCOT Region and be able to do business in one of these markets."
  - id: e20
    source: ercot-bylaws
    locator: "ERCOT Bylaws (approved December 20, 2022), Section 3.2 Membership Types and Voting Rights"
    quote: "Except for Corporate Members' right to elect TAC Representatives by Segment or subsegment as set forth in Section 5.1, ERCOT Members shall have no voting rights, including voting rights related to fundamental actions (as defined in Section 22.164 of the Texas Business Organizations Code) or voting rights related to any other governance matters of ERCOT."
  - id: e21
    source: ercot-bylaws
    locator: "ERCOT Bylaws (approved December 20, 2022), Section 3.4 Annual Member Dues"
    quote: "Except as provided below, Annual Member Dues for Corporate Members shall be $2,000. Annual Member Dues for Associate Members shall be $500. Annual Member Dues for Adjunct Members shall be $500. The Annual Member Dues for Residential and Commercial Consumer Members shall be $100 for Corporate Membership and $50 for Associate Membership."
  - id: e22
    source: ercot-bylaws
    locator: "ERCOT Bylaws (approved December 20, 2022), Section 4.2 The Board"
    quote: "Section 4.2 The Board. The Board shall be composed of a total of eleven (11) Directors as follows: (a) The Chair of the PUCT as an ex officio non-voting Director; (b) The Public Counsel of OPUC as an ex officio voting Director representing Residential Consumers and Small Commercial Consumers; (c) The CEO as an ex officio non-voting Director; and (d) Eight (8) voting Directors selected as Selected Directors."
  - id: e23
    source: ercot-tac-procedures
    locator: "TAC Procedures (approved October 22, 2025), I. Functions of TAC, A and C"
    quote: "The TAC shall be responsible for setting the priority of projects approved through the NPRR, SCR and guide revision processes. TAC may delegate the responsibility for recommending the priority of market projects to one of its subcommittees."
  - id: e24
    source: pura-39
    locator: "PURA §39.151(g-3)"
    quote: "A person does not qualify for selection as a member of the governing body of an independent organization for the ERCOT power region if the person has a fiduciary duty or assets in the electricity market for that region."
  - id: e25
    source: pura-39
    locator: "PURA §39.151(g-1), bylaws"
    quote: "The bylaws of an independent organization certified for the ERCOT power region must be approved by and reflect the input of the commission.  The bylaws must require that every member of the governing body be a resident of this state and must prohibit a legislator from serving as a member."
  - id: e26
    source: pura-39
    locator: "PURA §39.1513(d)-(e) and history note"
    quote: "(d)  The committee shall select members eligible under Section 39.151 to serve on the governing body of an independent organization certified under that section for the ERCOT power region and shall designate the chair and vice chair of the governing body from those members.(e)  The ERCOT board selection committee shall retain an outside consulting firm to help select members of the governing body under Subsection (d). Added by Acts 2021, 87th Leg., R.S., Ch. 425 (S.B. 2), Sec. 4, eff. June 8, 2021."
  - id: e27
    source: pura-39
    locator: "PURA §39.151, history note"
    quote: "Added by Acts 1999, 76th Leg., ch. 405, Sec. 39, eff. Sept. 1, 1999.Amended by: Acts 2005, 79th Leg., Ch. 797 (S.B. 408), Sec. 9, eff. September 1, 2005."
  - id: e28
    source: pura-39
    locator: "PURA §39.151(n)"
    quote: "An independent organization certified by the commission under this section is subject to review under Chapter 325, Government Code (Texas Sunset Act), but is not abolished under that chapter.  The independent organization shall be reviewed during the periods in which the Public Utility Commission of Texas is reviewed."
  - id: e29
    source: pura-39
    locator: "PURA §39.151(d-1), budget"
    quote: "The commission shall require an independent organization certified by the commission under this section to submit to the commission the organization's entire proposed annual budget.  The commission shall review the proposed budgets either annually or biennially and may approve, disapprove, or modify any item included in a proposed budget."
  - id: e30
    source: np-09
    locator: "Section 9.16.1(1) and (3), ERCOT System Administration Fee"
    quote: "(1) The Public Utility Commission of Texas (PUCT) has authorized ERCOT to charge the ERCOT System Administration fee to fund ERCOT's budget. ERCOT converts the fee into a charge to each Qualified Scheduling Entity (QSE) using the formula set forth in paragraph (3) below."
  - id: e31
    source: np-09
    locator: "Section 9.16.1(3), ERCOT System Administration Fee, variable table"
    quote: "RTAML _(q, p) | MWh   | Real-Time Adjusted Metered Load— The sum of the Adjusted Metered Load (AML) at the Electrical Buses included in Settlement Point p, represented by QSE q, for the 15-minute Settlement Interval. |"
  - id: e32
    source: np-09
    locator: "Section 9.16.1(3), ERCOT System Administration Fee, variable table"
    quote: "LAFF          | $/MWh | Load Administration Fee Factor—The ERCOT System Administration fee."
  - id: e33
    source: imm-som-2010
    locator: "2010 State of the Market Report, Executive Summary, Introduction (p. i)"
    quote: "The market outcomes during the eleven months of zonal market operation in 2010 were generally similar to those in 2009. The highlight of 2010 was the much anticipated implementation of ERCOT's nodal market on December 1, 2010."
  - id: e34
    source: ercot-annual-report-2025
    locator: "2025 State of the Grid (annual report), 2025 Highlights, Real-Time Co-optimization Plus Batteries"
    quote: "This December 2025 market design change represents the most significant enhancement to the nodal market since 2010 and strengthens ERCOT's ability to simultaneously optimize energy and Ancillary Services in real time."
  - id: e35
    source: pura-39
    locator: "PURA §39.151(j)"
    quote: "A retail electric provider, municipally owned utility, electric cooperative, power marketer, transmission and distribution utility, or power generation company shall observe all scheduling, operating, planning, reliability, and settlement policies, rules, guidelines, and procedures established by the independent system operator in ERCOT. Failure to comply with this subsection may result in the revocation, suspension, or amendment of a certificate as provided by Section 39.356 or in the imposition of an administrative penalty as provided by Section 39.357."
  - id: e36
    source: puct-25-361
    locator: "16 TAC §25.361(b)(4)-(6), Functions"
    quote: "maintain the reliability and security of the ERCOT region's electrical network, including the instantaneous balancing of ERCOT generation and load and monitoring the adequacy of resources to meet demand; (5) provide for non-discriminatory access to the transmission system, consistent with this chapter, commission orders, and ERCOT rules; (6) accept and supervise the processing of all requests for interconnection to the ERCOT transmission system from owners of new generating facilities;"
  - id: e37
    source: pura-39
    locator: "PURA §39.151(g-6), protocol adoption process"
    quote: "To maintain certification as an independent organization under this section, the organization's governing body must establish and implement a formal process for adopting new protocols or revisions to existing protocols.  The process must require that new or revised protocols may not take effect until the commission approves a market impact statement describing the new or revised protocols.  The commission may approve, reject, or remand with suggested modifications to the independent organization's governing body protocols adopted by the organization."
  - id: e38
    source: pura-39
    locator: "PURA §39.151(b), definition of independent organization"
    quote: "\"Independent organization\" means an independent system operator or other person that is sufficiently independent of any producer or seller of electricity that its decisions will not be unduly influenced by any producer or seller."
  - id: e39
    source: np-09
    locator: "Section 9.16.1(3), ERCOT System Administration Fee, formula"
    quote: "ESACAMT _(q) = LAFF * max(0,[]RTAML _(q, p))"
---

## Definition

ERCOT (Electric Reliability Council of Texas, Inc.) is a Texas nonprofit corporation that the PUCT has certified as the Independent Organization for the ERCOT Region. [e1] PURA defines an independent organization as an independent system operator or other person sufficiently independent of any producer or seller of electricity that its decisions will not be unduly influenced by them. [e38]

## How it works

State law requires a power region to have an independent organization with four jobs: nondiscriminatory access to the transmission and distribution systems, reliability and adequacy of the regional network, timely transfer of information about a customer's choice of retail electric provider, and accurate accounting of electricity production and delivery among generators and wholesale buyers and sellers. ERCOT is that organization for the ERCOT Region. [e2][e1] ERCOT's own summary of these is: maintain system reliability, facilitate competitive wholesale and retail markets, and ensure open access to transmission. [e15]

Day to day, ERCOT runs the operational and market functions of the ERCOT system: it procures and deploys ancillary services, schedules resources and loads, and manages transmission congestion. It also runs settlement and billing, which includes assessing market participants' creditworthiness and setting and enforcing security (collateral) requirements. [e3] PUCT rule 25.361 adds the instantaneous balancing of generation and load, monitoring resource adequacy, nondiscriminatory transmission access and supervising requests to interconnect new generation. [e36]

In settlement, ERCOT is the central counterparty. It is the sole buyer to each seller and the sole seller to each buyer for energy, ancillary services, RUC, ERS and other products it pays or charges for. Bilateral trades between participants and self-arranged products are the exception. [e4]

ERCOT also holds comprehensive authority over planning bulk transmission projects that affect the system's transfer capability, and it supervises and coordinates the planning of the TSPs. [e14]

ERCOT's rules bind the industry. REPs, municipal utilities, cooperatives, power marketers, TDUs and power generation companies must follow ERCOT's scheduling, operating, planning, reliability and settlement rules; failure can lead to action on their PUCT certificate or an administrative penalty under PURA. [e35]

ERCOT is not a profit-seeking market participant. The Protocols bar it from profiting financially from its role, and from using its discretion over ancillary service procurement or energy deployment to influence, set or control prices. [e5]

## Formula

The system administration fee: the PUCT authorizes the fee to fund ERCOT's budget, and ERCOT converts it into a charge on each QSE. [e30] For each QSE and 15-minute settlement interval, the charge (ESACAMT) is the Load Administration Fee Factor (LAFF, the fee in $/MWh) times the QSE's Real-Time Adjusted Metered Load summed over the settlement points it represents (RTAML, in MWh), floored at zero: ESACAMT = LAFF × max(0, ΣRTAML). [e39][e32][e31] In other words, the fee is paid on load, through the QSE. [e30][e31]

## ERCOT context

ERCOT is directly responsible and accountable to the PUCT. The commission has complete authority to oversee and investigate ERCOT's finances, budget and operations. [e9] ERCOT must submit its entire proposed budget, which the PUCT reviews annually or biennially and may approve, disapprove or modify. [e29] After approving the budget, the PUCT sets a range for the system administration fee charged to wholesale buyers and sellers. [e10] Protocols that ERCOT adopts cannot take effect until the commission approves them, and the board's protocol process must require PUCT approval of a market impact statement first. [e11][e37] ERCOT is also subject to Sunset review alongside the PUCT, but cannot be abolished under the Sunset Act. [e28] FERC staff say FERC regulates all RTOs/ISOs except ERCOT. [e18]

The board is set by statute. It has two PUCT commissioners as nonvoting ex officio members (one of them the presiding officer), the Public Counsel as a voting ex officio member for residential and small commercial consumers, the CEO as a nonvoting ex officio member, and eight members chosen by the selection committee for executive-level experience in fields such as finance, trading, risk management or electric market design. [e12] The selection committee has three members, appointed by the governor, the lieutenant governor and the speaker of the house; it picks the members and the chair and vice chair, with help from an outside consulting firm. [e13][e26] Board members must be Texas residents, legislators may not serve, and anyone with a fiduciary duty or assets in the ERCOT electricity market is disqualified. [e25][e24] ERCOT's 2025 annual report describes a 12-member board. [e16] The bylaws approved December 20, 2022 still describe an 11-member board with the PUCT Chair as the only commissioner, so on this point they lag the statute. [e22][e12]

ERCOT is a membership organization. Members must qualify in one of seven segments: Cooperative, Independent Generator, Independent Power Marketer, Independent REP, Investor-Owned Utility, Municipal, or Consumer (commercial, industrial and residential subsegments); except for consumers, a member needs an actual financial interest in the ERCOT retail or wholesale market. [e19] Membership carries little control: apart from Corporate Members' right to elect TAC Representatives by segment, members have no voting rights on ERCOT's governance. [e20] Annual dues under the bylaws are $2,000 for a Corporate Member and $500 for Associate or Adjunct Members, with lower dues for residential and commercial consumers. [e21] TAC, the stakeholder committee those members elect, sets the priority of projects approved through the NPRR, SCR and guide revision processes. [e23]

As of the October 2026 fact sheet, ERCOT describes itself as a membership-based 501(c)(4) nonprofit governed by a board and overseen by the PUCT and the Texas Legislature. It also performs financial settlement for the wholesale market and handles retail switching for more than 8 million premises in competitive choice areas. [e8]

## Timeline

- 1941: FERC staff write that ERCOT and SPP formed as power pools to pool resources for the war effort. [e17]
- 1970: the year ERCOT gives as its founding. [e15]
- 1996: ERCOT became the Independent System Operator, per its 2025 annual report. [e15]
- September 1, 1999: PURA §39.151 (essential organizations) took effect with the restructuring law. [e27]
- December 1, 2010: the nodal market replaced the zonal market. [e33]
- June 8, 2021: S.B. 2 added §39.1513, creating the ERCOT board selection committee. [e26]
- December 2025: RTC+B went live, which ERCOT calls the most significant enhancement to the nodal market since 2010. [e34]

## Key facts

- Serves more than 27 million Texas customers, about 90 percent of the state's electric load (fact sheet, October 2026). [e7]
- Grid scope: more than 55,000 miles of transmission lines and 1,460 generation units, counting Private Use Networks (fact sheet, October 2026). [e7]
- Handles retail switching for more than 8 million premises in competitive choice areas (fact sheet, October 2026). [e8]
- Board under PURA: 8 selected members, plus the Public Counsel (voting), 2 PUCT commissioners (nonvoting) and the CEO (nonvoting). [e12]
- Seven membership segments; Corporate Member dues $2,000 a year under the December 2022 bylaws. [e19][e21]
- Funded by a PUCT-approved system administration fee, charged to each QSE on its adjusted metered load. [e10][e30][e31]
- Central counterparty to every transaction it settles under the Protocols. [e4]
- Not FERC-regulated as an RTO/ISO, per FERC staff. [e18]

## Say it like this

(Guidance) ERCOT is the PUCT-certified nonprofit that runs the Texas grid and its wholesale market: it schedules resources and loads, manages congestion, procures reserves, and settles the transactions it administers as the central counterparty. It answers to the PUCT, which approves its budget, its fee and its protocol changes, so ERCOT is not a self-governing industry club.

(Guidance) On governance: since 2021 the board is picked by a committee appointed by the state's three top elected officials, not by market participants; participants have their say through TAC and the stakeholder process. [e26][e13][e23]

## Common confusion

(Guidance) ERCOT is often mistaken for the regulator. ERCOT operates the system and the market. The PUCT regulates ERCOT and must approve its protocols before they take effect. [e11] Also, ERCOT is not a market participant trying to move prices: the Protocols forbid it from using its discretion to influence prices. [e5]

(Guidance) "Membership-based" does not mean members control ERCOT. Members cannot vote on governance; Corporate Members only elect TAC Representatives, and board members are chosen by the selection committee. [e20][e26]

## Questions

### What are ERCOT's four statutory functions?

Under PURA §39.151, the independent organization must ensure nondiscriminatory transmission and distribution access, ensure the reliability and adequacy of the regional network, get information about a customer's choice of retail provider to the people who need it on time, and accurately account for production and delivery among generators and wholesale buyers and sellers. [e2]

### Who controls ERCOT's board?

The board's composition is set in PURA. Eight members are picked by a three-person selection committee appointed by the governor, the lieutenant governor and the speaker. They sit alongside two nonvoting PUCT commissioners, the Public Counsel as a voting member, and the nonvoting CEO. [e12][e13] People with a fiduciary duty or assets in the ERCOT market cannot be selected. [e24]

### Why does it matter that ERCOT is the central counterparty?

For the products ERCOT settles under the Protocols, each participant settles with ERCOT, not with the other side of the trade: ERCOT is the sole buyer to each seller and the sole seller to each buyer. Bilateral transactions between participants and self-arranged products are excluded. [e4] ERCOT also assesses participants' creditworthiness and enforces security requirements as part of settlement and billing. [e3]

### How is ERCOT funded?

Through a system administration fee charged to wholesale buyers and sellers. The PUCT sets the fee range once it has approved ERCOT's budget. [e10] In settlement, each QSE pays the fee per 15-minute interval on its adjusted metered load. [e30][e31][e32]

### Why is ERCOT not regulated by FERC like other ISOs?

The saved sources state the fact but not the reason: FERC staff say FERC regulates all RTOs/ISOs except ERCOT, and ERCOT's oversight comes from the PUCT and the Legislature. [e18][e8]

### What if a market participant ignores ERCOT's operating rules?

PURA requires REPs, generators, utilities and marketers to follow ERCOT's rules, and failure can lead to revocation, suspension or amendment of a certificate or an administrative penalty. [e35] Enforcement of that kind runs through the PUCT under PURA, not through ERCOT's membership. [e9][e35]

## Scenarios

### A client asks whether ERCOT can procure extra reserves to push prices up and help generators recover costs.

- No. The Protocols bar ERCOT from using its discretion over ancillary service procurement or energy deployment to influence, set or control prices. [e5]
- Market design changes go through protocol revisions, and those need PUCT approval before taking effect. [e11]

### A generator wants a rule change. How does it get there?

- Through the stakeholder process: TAC, whose representatives are elected by segment, prioritizes projects approved through the NPRR and other revision processes. [e20][e23]
- The board adopts protocols, but they cannot take effect until the PUCT approves a market impact statement. [e37]

## Open items

- Sources disagree on ERCOT's origin date: FERC staff say ERCOT formed in 1941 as a wartime power pool, while ERCOT's 2025 annual report says it was founded in 1970. The sources do not explain the difference (for example, an earlier pool reorganized in 1970).
- The bylaws approved December 20, 2022 list an 11-member board with only the PUCT Chair as commissioner, while current PURA §39.151(g-1) requires two commissioners and ERCOT's 2025 annual report says the board has 12 members. No saved source shows a later bylaw amendment.
- No saved source gives the current system administration fee rate (LAFF) or ERCOT's budget totals.
- The fact sheet lists board members' names for October 2026, but names change, so they are left out here.
- The saved sources do not explain why ERCOT is outside FERC's RTO/ISO jurisdiction.
