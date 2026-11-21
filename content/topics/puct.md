---
id: puct
name: PUCT (Public Utility Commission of Texas)
aliases: [PUCT, PUC, Public Utility Commission of Texas, the Commission]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: ercot
    type: regulates
    note: The PUCT certifies ERCOT as the independent organization, approves its budget and must approve its protocols before they take effect. [e1][e4][e5]
  - to: imm
    type: regulates
    note: The market monitor works under the PUCT's supervision and oversight, and the PUCT keeps all enforcement authority. [e9]
  - to: texas-legislature
    type: related
    note: The Legislature amends the Utilities Code that governs the PUCT (HB 1500, 2023), and the PUCT is subject to the Texas Sunset Act. [e17]
  - to: offer-cap
    type: determines
    note: PUCT rule 25.509 states a $5,000 high and a $2,000 low system-wide offer cap, while the Protocol table lists a $5,000 day-ahead and a $2,000 real-time cap after RTC go-live. [e11][e15][e16]
  - to: market-power-mitigation
    type: regulates
    note: PURA directs the PUCT to monitor market power and order mitigation when it finds abuse. [e8]
  - to: resource-adequacy
    type: determines
    note: PUCT rule 25.508 sets the ERCOT reliability standard, whose frequency criterion is 0.1 loss of load expectation. [e12]
  - to: nodal-protocols
    type: regulates
    note: New or revised protocols cannot take effect until the PUCT approves a market impact statement for them. [e5]
  - to: permian-transmission
    type: example-of
    note: The PUCT approved three 765-kV import paths for the Permian Basin Reliability Plan in a 2025 second order. [e33]
  - to: large-load-interconnection
    type: regulates
    note: In August 2026 the PUCT granted ERCOT good cause exceptions to pause Batch Zero classification of Large Loads for a verification and audit. [e35]
  - to: winter-storm-uri
    type: related
    note: On February 16, 2021 the PUCT suspended the low system-wide offer cap and reinstated it on March 3, 2021. [e37][e38]
evidence:
  - id: e1
    source: pura-39
    locator: "PURA §39.151(c)"
    quote: "The commission shall certify an independent organization or organizations to perform the functions prescribed by this section."
  - id: e2
    source: pura-39
    locator: "PURA §39.151(d)"
    quote: "The commission shall adopt and enforce rules relating to the reliability of the regional electrical network and accounting for the production and delivery of electricity among generators and all other market participants, or may delegate those responsibilities to an independent organization. An independent organization certified by the commission is directly responsible and accountable to the commission."
  - id: e3
    source: pura-39
    locator: "PURA §39.151(d)"
    quote: "The commission has complete authority to oversee and investigate the independent organization's finances, budget, and operations as necessary to ensure the organization's accountability and to ensure that the organization adequately performs the organization's functions and duties.  The independent organization shall fully cooperate with the commission in the commission's oversight and investigatory functions.  The commission may take appropriate action against an independent organization that does not adequately perform the organization's functions or duties or does not comply with this section, including decertifying the organization or assessing an administrative penalty against the organization."
  - id: e4
    source: pura-39
    locator: "PURA §39.151(d-1)"
    quote: "The commission shall require an independent organization certified by the commission under this section to submit to the commission the organization's entire proposed annual budget.  The commission shall review the proposed budgets either annually or biennially and may approve, disapprove, or modify any item included in a proposed budget."
  - id: e5
    source: pura-39
    locator: "PURA §39.151(g-6)"
    quote: "The process must require that new or revised protocols may not take effect until the commission approves a market impact statement describing the new or revised protocols.  The commission may approve, reject, or remand with suggested modifications to the independent organization's governing body protocols adopted by the organization."
  - id: e6
    source: pura-39
    locator: "PURA §39.1514(a), Commission Directives to Independent Organization"
    quote: "The commission may not use a verbal directive to direct an independent organization certified under Section 39.151 to take an official action.  The commission may direct the organization to take an official action only through:(1)  a contested case;(2)  rulemaking; or(3)  a memorandum or written order adopted by a majority vote."
  - id: e7
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 17"
    quote: "SECTIONA17.AASubchapter D, Chapter 39, Utilities Code, is amended by adding Section 39.1514 to read as follows:"
  - id: e8
    source: pura-39
    locator: "PURA §39.157(a), Commission Authority to Address Market Power"
    quote: "The commission shall monitor market power associated with the generation, transmission, distribution, and sale of electricity in this state.  On a finding that market power abuses or other violations of this section are occurring, the commission shall require reasonable mitigation of the market power by ordering the construction of additional transmission or distribution facilities, by seeking an injunction or civil penalties as necessary to eliminate or to remedy the market power abuse or violation as authorized by Chapter 15, by imposing an administrative penalty as authorized by Chapter 15, by ordering the disgorgement of excess revenue as authorized by Chapter 15, or by suspending, revoking, or amending a certificate or registration as authorized by Section 39.356."
  - id: e9
    source: pura-39
    locator: "PURA §39.1515(d), Wholesale Electric Market Monitor"
    quote: "The market monitor shall operate under the supervision and oversight of the commission.  The commission shall retain all enforcement authority conferred under this title, and this section may not be construed to confer enforcement authority on the market monitor or to authorize the commission to delegate the commission's enforcement authority to the market monitor."
  - id: e10
    source: np-17
    locator: "Section 17.1(1), Overview"
    quote: "The Public Utility Commission of Texas (PUCT), with the assistance of the Independent Market Monitor (IMM) established in accordance with PUCT rules, has the ultimate responsibility for market oversight in ERCOT."
  - id: e11
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(A)-(B), System-Wide Offer Caps"
    quote: "The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers. (B) The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e12
    source: puct-25-508
    locator: "16 TAC §25.508(b)(1), Frequency"
    quote: "The expected loss of load events for the ERCOT region must be equal to or less than one event per ten years on average, i.e., 0.1 loss of load expectation (LOLE)."
  - id: e13
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 1, amending Utilities Code §12.005"
    quote: "that chapter or by Chapter 39, the commission is abolished [and this 13 title expires] September 1, 2029 [2023]."
  - id: e15
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e16
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e17
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 1, amending Utilities Code §12.005"
    quote: "Sec.A12.005.AAAPPLICATION OF SUNSET ACT. The Public Utility 10 Commission of Texas is subject to Chapter 325, Government Code 11 (Texas Sunset Act). 12 that chapter or by Chapter 39, the commission is abolished [and this 13 title expires] September 1, 2029 [2023]."
  - id: e14
    source: imm-som-2025
    locator: "2025 State of the Market Report, Resource Adequacy, D.1 Updates to CONE"
    quote: "In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold."
  - id: e18
    source: np-04
    locator: "Section 4.4.11, note under the parameter table"
    quote: "PNM threshold $/MW-year 315,000 * The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board."
  - id: e19
    source: pura-12
    locator: "PURA §12.051, Appointment; Term"
    quote: "The commission is composed of five commissioners appointed by the governor with the advice and consent of the senate.(b)  An appointment to the commission shall be made without regard to the race, color, disability, sex, religion, age, or national origin of the appointee.(c)  Commissioners serve staggered, six-year terms."
  - id: e20
    source: pura-12
    locator: "PURA §12.052, Presiding Officer"
    quote: "The governor shall designate a commissioner as the presiding officer.(b)  The presiding officer serves in that capacity at the pleasure of the governor."
  - id: e21
    source: pura-12
    locator: "PURA §12.053(a)-(a-1), Membership Qualifications"
    quote: "To be eligible for appointment, a commissioner must:(1)  be a qualified voter;(2)  be a citizen of the United States;(3)  be a resident of this state;(4)  be a competent and experienced administrator; and(5)  have at least five years of experience:(A)  in the administration of business or government; or(B)  as a practicing attorney, certified public accountant, or professional engineer.(a-1)  At least two commissioners must be well informed and qualified in the field of public utilities and utility regulation."
  - id: e22
    source: pura-12
    locator: "PURA §12.053(b)(1)(A)-(B)"
    quote: "A person is not eligible for appointment as a commissioner if the person:(1)  at any time during the one year preceding appointment:(A)  personally served as an officer, director, owner, employee, partner, or legal representative of a public utility regulated by the commission or of an affiliate or direct competitor of a public utility regulated by the commission;(B)  owned or controlled, directly or indirectly, more than a 10 percent interest in a public utility regulated by the commission or in an affiliate or direct competitor of a public utility regulated by the commission;"
  - id: e23
    source: pura-12
    locator: "PURA §12.005, Application of Sunset Act (current text)"
    quote: "The Public Utility Commission of Texas is subject to Chapter 325, Government Code (Texas Sunset Act).  Unless continued in existence as provided by that chapter or by Chapter 39, the commission is abolished September 1, 2029."
  - id: e24
    source: pura-14
    locator: "PURA §14.001-14.002"
    quote: "The commission has the general power to regulate and supervise the business of each public utility within its jurisdiction and to do anything specifically designated or implied by this title that is necessary and convenient to the exercise of that power and jurisdiction."
  - id: e25
    source: pura-15
    locator: "PURA §15.023(a)-(b), Administrative Penalty"
    quote: "The commission may impose an administrative penalty against a person regulated under this title who violates this title or a rule or order adopted under this title.(b)  The penalty for a violation may be in an amount not to exceed $25,000.  Each day a violation continues or occurs is a separate violation for purposes of imposing a penalty."
  - id: e26
    source: pura-15
    locator: "PURA §15.023(b-1)"
    quote: "Notwithstanding Subsection (b), the penalty for a violation of a voluntary mitigation plan entered into under Subsection (f) or of a provision of Section 35.0021 or 38.075 may be in an amount not to exceed $1,000,000 for a violation."
  - id: e27
    source: pura-15
    locator: "PURA §15.001, Right to Judicial Review"
    quote: "Any party to a proceeding before the commission is entitled to judicial review under the substantial evidence rule."
  - id: e28
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 17, new PURA §39.1514(a-1) (clean .alt.txt copy)"
    quote: "The commission must use a contested case or rulemaking process to direct an independent organization certified under Section 39.151 to take an official action that will create a new cost or fee, increase an existing cost or fee, or impose significant operational obligations on an entity."
  - id: e29
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 17, new PURA §39.1514(c) (clean .alt.txt copy)"
    quote: "Notwithstanding another provision of this section, the commission may use a verbal directive to direct an independent organization to take an official action in an urgent or emergency situation that poses an imminent threat to public health, public safety, or the reliability of the power grid.  If the commission uses a verbal directive, the commission shall provide written documentation of the directive to the independent organization not later than 72 hours after the urgent or emergency situation ends."
  - id: e30
    source: pura-39
    locator: "PURA §39.151(g-1), ERCOT governing body"
    quote: "The governing body must be composed of:(1)  two members of the commission as ex officio nonvoting members:(A)  one of whom must be the presiding officer of the commission; and(B)  one of whom must be designated by the presiding officer of the commission to serve a one-year term on the governing body;"
  - id: e31
    source: hb1500-88r
    locator: "HB 1500 (2023), SECTION 15, amending PURA §39.151(g-1) (clean .alt.txt copy; struck text in [~~ ~~])"
    quote: "(1)  two members [~~the chairman~~] of the commission as [~~an~~] ex officio nonvoting members:"
  - id: e32
    source: puct-permian-order-2
    locator: "PUCT Project No. 55718, Second Order Approving the Reliability Plan for the Permian Basin Region (2025), p. 1"
    quote: "On October 7,2024, the Commission issued the Order Approving the Reliability Plan for the Permian Basin Region, but reserved a decision on which voltage level should be approved for the transmission import paths until no later than May 1, 2025."
  - id: e33
    source: puct-permian-order-2
    locator: "PUCT Project No. 55718, Second Order, p. 1"
    quote: "The Commission approves the three 765-kilovolt (kV) import paths identified in Table 7.5 ofthe Permian Basin Reliability Plan."
  - id: e34
    source: puct-59772-order
    locator: "PUCT Project No. 59772, Order Granting Adjustment Request (2026), p. 2"
    quote: "In accordance with 16 TAC § 25.370(e)(2)(B) the Commission approves ERCOTs request to adjust the LTLF using the Option B methodology."
  - id: e35
    source: puct-59142-good-cause-order
    locator: "PUCT Project No. 59142, Order Granting Good Cause Exceptions (filed 2026-08-20), p. 2"
    quote: "Good cause exists to allow ERCOT to complete the verification and audit and report the results to the Commission before continuing the Batch Zero interconnection process."
  - id: e36
    source: puct-59142-good-cause-order
    locator: "PUCT Project No. 59142, Order Granting Good Cause Exceptions, p. 1"
    quote: "On August 3, 2026, Governor Greg Abbott issued a letter directing the Public Utility Commission of Texas (Commission) and Electric Reliability Council of Texas, Inc. (ERCOT) to conduct \"a comprehensive verification and audit of all data centers advancing through ERCOT's interconnection process.\""
  - id: e37
    source: puct-51812-lcap-order
    locator: "PUCT Project No. 51812, Order Reinstating Low System-Wide Offer Cap (March 3, 2021), p. 1"
    quote: "On February 16, 2021, in response to significant market anomalies, the Commission found good cause to suspend, and issued an order suspending, the use of the low system-wide offer cap (LCAP) until after the Commission's next regularly scheduled open meeting."
  - id: e38
    source: puct-51812-lcap-order
    locator: "PUCT Project No. 51812, Order Reinstating Low System-Wide Offer Cap, p. 2"
    quote: "Accordingly, the Commission terminates the suspension of the use of the LCAP and orders ERCOT to resume application of the LCAP when administering the scarcity pricing mechanism as provided by Commission rule. Signed at Austin, Texas the 3rd day of March 2021."
  - id: e39
    source: puct-minutes-2024-12-19
    locator: "PUCT Open Meeting Minutes, December 19, 2024, Item 17"
    quote: "Project No. 55000 – Performance Credit Mechanism (PCM). (Discussion and possible action) Werner Roth and Chris Brown Action: Adopted Staff’s final recommendation on PCM."
  - id: e40
    source: puct-minutes-2024-12-19
    locator: "PUCT Open Meeting Minutes, December 19, 2024, header"
    quote: "These minutes serve as a summary of the meeting but not as a transcription."
  - id: e41
    source: puct-59550-ercot-comments
    locator: "PUCT Project No. 59550, ERCOT comments (filed 2026-09-17), p. 1"
    quote: "Pursuant to 16 Texas Administrative Code (TAC) § 25.509(d), the Commission is required to \"review each of the system-wide offer cap programs to determine whether to update aspects of each program.\" This proceeding initiates the first such review and subsequent reviews are to be performed quinquennially (i.e., every five years) hereafter."
  - id: e42
    source: puct-25-501
    locator: "16 TAC §25.501(a), General"
    quote: "The protocols and other rules and requirements of the Electric Reliability Council of Texas (ERCOT) that implement this section shall be developed with consideration of microeconomic principles and shall promote economic efficiency in the production and consumption of electricity; support wholesale and retail competition; support the reliability of electric service; and reflect the physical realities of the ERCOT electric system."
  - id: e43
    source: ref-ferc-energy-primer
    locator: "FERC Energy Primer (2024), Electricity Markets chapter, RTO/ISO section"
    quote: "FERC regulates all RTOs/ISOs except ERCOT."
---

## Definition

The PUCT is the state commission that certifies ERCOT as the independent organization for the ERCOT power region. It is also the regulator to which ERCOT is directly responsible and accountable. [e1][e2] It has five commissioners appointed by the governor with the advice and consent of the senate. [e19]

## How it works

Who sits on it. The commission has five commissioners appointed by the governor with senate consent, serving staggered six-year terms. [e19] The governor designates one commissioner as presiding officer, who serves in that role at the governor's pleasure. [e20] Each commissioner must be a qualified voter, a U.S. citizen and a Texas resident, a competent and experienced administrator, and have at least five years of experience in business or government administration or as a practicing attorney, CPA or professional engineer; at least two must be well informed in public utilities and utility regulation. [e21] A person is ineligible if, in the year before appointment, they worked for or represented a PUCT-regulated utility, its affiliate or a direct competitor, or owned more than 10% of one. [e22]

General powers. The commission has the general power to regulate and supervise the business of each public utility in its jurisdiction and to do what the statute designates or implies as necessary to that power. [e24] PURA gives it the job of adopting and enforcing rules on the reliability of the regional network and on accounting for electricity production and delivery. It may delegate those responsibilities to an independent organization, and that organization (ERCOT) is accountable to the commission. [e2]

Over ERCOT. The commission has complete authority to oversee and investigate ERCOT's finances, budget and operations. If ERCOT does not perform its duties, the commission can act against it, up to decertification or an administrative penalty. [e3] ERCOT must submit its entire proposed annual budget, and the commission may approve, disapprove or modify any item. [e4] Two commissioners sit on ERCOT's board as ex officio nonvoting members: the presiding officer and one commissioner designated by the presiding officer for a one-year term. [e30]

The rulebook. New or revised protocols cannot take effect until the commission approves a market impact statement for them, and the commission may approve, reject or remand protocols the ERCOT board adopts. [e5] When the PUCT directs ERCOT to take an official action, it normally cannot use a verbal directive. It must act through a contested case, a rulemaking, or a memorandum or written order adopted by majority vote. [e6] A directive that creates or increases a cost or fee, or imposes significant operational obligations, must go through a contested case or rulemaking. [e28] The exception: in an urgent or emergency situation that poses an imminent threat to public health, public safety or grid reliability, the commission may give a verbal directive, but must document it in writing to ERCOT within 72 hours after the situation ends. [e29]

Market conduct and enforcement. PURA directs the commission to monitor market power. When it finds abuse, it must require mitigation, using tools that include ordering new transmission, seeking penalties, ordering disgorgement of excess revenue, or acting against a certificate or registration. [e8] The commission may impose an administrative penalty of up to $25,000 per violation, each day counting as a separate violation [e25], or up to $1,000,000 per violation of a voluntary mitigation plan or of Sections 35.0021 or 38.075. [e26] The Independent Market Monitor works under the commission's supervision, but the commission keeps all enforcement authority. [e9] The Protocols state that the PUCT, assisted by the IMM, has ultimate responsibility for market oversight in ERCOT. [e10] A party to a PUCT proceeding is entitled to judicial review under the substantial evidence rule. [e27]

## ERCOT context

Design rules. Rule 25.501 says ERCOT's protocols must be developed with microeconomic principles in mind, promote economic efficiency, support wholesale and retail competition and reliability, and reflect the physical realities of the ERCOT system. [e42] FERC's 2024 Energy Primer says FERC regulates all RTOs/ISOs except ERCOT. [e43]

Parameters analysts model. Rule 25.509 states a high system-wide offer cap (HCAP) of $5,000 per MWh and a low cap (LCAP) of $2,000 per MWh for energy. [e11] The Protocol parameter table, however, lists the day-ahead cap at $5,000 and the real-time cap at $2,000 per MWh, and ERCOT's September 2026 review says the SWCAP fell to $2,000 from $5,000 after RTC go-live on 12/5/2025. [e15][e16] The rule text in the saved sources has not been updated to show a separate real-time value (see the offer-cap topic). The 2026 offer-cap review (Project 59550) is the first five-year review required by §25.509(d), according to ERCOT's filing. [e41] Rule 25.508 sets the ERCOT reliability standard, which includes a frequency criterion of 0.1 loss of load expectation. [e12] In July 2024 the PUCT approved a planning CONE of $140 per kW-year, while keeping the legacy $105 per kW-year value for the peaker net margin threshold. [e14]

What its decisions look like. Examples from the saved orders:
- February 16, 2021 (Winter Storm Uri): the commission found good cause to suspend the LCAP and ordered ERCOT to use the HCAP; on March 3, 2021 it ended the suspension and ordered ERCOT to resume the LCAP. [e37][e38]
- October 7, 2024: it approved the Permian Basin Reliability Plan but reserved the voltage decision until no later than May 1, 2025 [e32]; its second order approved the three 765-kV import paths in Table 7.5 of the plan. [e33]
- December 19, 2024 open meeting: it adopted Staff's final recommendation on the Performance Credit Mechanism (the minutes are a summary, not a transcript). [e39][e40]
- 2026: it approved ERCOT's request to adjust the 2026 long-term load forecast using the "Option B" methodology under 16 TAC §25.370(e)(2)(B). [e34]
- August 2026: after a gubernatorial letter of August 3, 2026 directing a verification and audit of data centers in ERCOT's interconnection process [e36], it granted ERCOT good cause exceptions, finding good cause to complete the audit before continuing the Batch Zero process. [e35]

## Timeline

- 2021: the PUCT suspends (February 16) and reinstates (March 3) the LCAP during and after Winter Storm Uri. [e37][e38]
- 2023: HB 1500 (the Sunset bill) moves the Sunset date to September 1, 2029, adds §39.1514 on directives to ERCOT, and changes the PUCT's seat on ERCOT's board from "the chairman" to two commissioners. [e13][e7][e31]
- July 2024: the PUCT approves a $140/kW-year planning CONE. [e14]
- October 7, 2024: first Permian Basin Reliability Plan order. [e32]
- December 19, 2024: PUCT adopts Staff's final PCM recommendation. [e39]
- August 2026: good cause exceptions pausing Batch Zero classification. [e35]
- September 2026: first five-year review of the offer-cap programs under way (Project 59550). [e41]
- September 1, 2029: the commission is abolished unless continued under the Sunset Act or Chapter 39. [e23]

## Key facts

- Five commissioners, appointed by the governor with senate consent, staggered six-year terms; the governor names the presiding officer. [e19][e20]
- The PUCT certifies the independent organization and can decertify it or penalize it. [e1][e3]
- The PUCT reviews ERCOT's budget annually or biennially and can modify any item. [e4]
- Protocol changes need PUCT approval of a market impact statement before they take effect. [e5]
- Directives to ERCOT for an official action: contested case, rulemaking, or written order/memo by majority vote; verbal only in an imminent-threat emergency, documented within 72 hours. [e6][e29]
- Administrative penalties: up to $25,000 per violation per day; up to $1,000,000 for some violations, including of a voluntary mitigation plan. [e25][e26]
- Offer caps: rule 25.509 states HCAP $5,000/MWh and LCAP $2,000/MWh for energy. [e11] The Protocol table lists $5,000 day-ahead and $2,000 real-time, and the SWCAP was reduced to $2,000 after RTC go-live on 12/5/2025. [e15][e16]
- Sunset: the commission is abolished September 1, 2029 unless continued in existence. [e23]

## Say it like this

(Guidance) The PUCT is ERCOT's regulator. It certifies ERCOT, approves its budget and every protocol change, and sets key market parameters such as the offer caps and the reliability standard. When the market design changes in a big way, the final decision usually sits with the commission, with the IMM advising and ERCOT implementing.

(Guidance) It is five governor-appointed commissioners, and since 2023 it has to give ERCOT formal written direction rather than steer it from the dais, except in a genuine emergency.

## Common confusion

(Guidance) The PUCT is not FERC: FERC's own primer says it regulates all RTOs/ISOs except ERCOT, and in ERCOT the PUCT, assisted by the IMM, holds ultimate responsibility for market oversight. [e43][e10] The IMM has no enforcement authority; enforcement stays with the commission. [e9] Also, ERCOT protocol changes approved by the ERCOT board are not final until the PUCT approves them. [e5] Commissioners on the ERCOT board do not vote there. [e30]

## Questions

### Can the PUCT simply tell ERCOT what to do in a meeting?

Not normally. Under §39.1514, added by HB 1500, an official-action directive must come through a contested case, a rulemaking, or a memorandum or written order adopted by majority vote, and one that adds costs or significant obligations needs a contested case or rulemaking. [e6][e7][e28] Only in an urgent or emergency situation with an imminent threat to health, safety or grid reliability can it use a verbal directive, documented in writing within 72 hours after the situation ends. [e29]

### How is the commission made up?

Five commissioners appointed by the governor with senate consent, on staggered six-year terms, with a presiding officer the governor designates. [e19][e20] At least two must be well informed in utility regulation, and recent ties to a regulated utility or its competitor disqualify a candidate. [e21][e22]

### Who sets the offer cap, ERCOT or the PUCT?

Both have a hand. PUCT rule 25.509 states a high cap of $5,000 per MWh and a low cap of $2,000 per MWh for energy offers. [e11] The current values in the Protocol parameter table are recommended by TAC and approved by the ERCOT Board, and Protocol changes need PUCT approval of a market impact statement. [e18][e5] Since RTC go-live the Protocol table lists a $5,000 day-ahead cap and a $2,000 real-time cap, and ERCOT says the SWCAP was reduced to $2,000 from $5,000 after 12/5/2025. [e15][e16]

### What can the PUCT do if it finds market power abuse?

It must require reasonable mitigation. Its tools include ordering new transmission or distribution facilities, injunctions or civil penalties, administrative penalties, disgorgement of excess revenue, and suspending, revoking or amending a certificate or registration. [e8] Administrative penalties can reach $25,000 per violation per day, or $1,000,000 for a violation of a voluntary mitigation plan. [e25][e26]

### Why does the PUCT sometimes override its own rules in a crisis?

In February 2021 it found good cause to suspend the LCAP because of significant market anomalies, then reinstated it two weeks later. [e37][e38] In August 2026 it granted good cause exceptions so ERCOT could pause Batch Zero classification for a data-center audit. [e35] Both show the commission using good-cause findings to depart from a rule's normal operation.

### What if ERCOT stopped performing its duties?

The commission can take appropriate action, including decertifying ERCOT or assessing an administrative penalty against it. [e3]

### Which CONE does the PUCT use, and for what?

In July 2024 it approved $140 per kW-year for planning, and it kept the legacy $105 per kW-year for the peaker net margin threshold. [e14]

## Scenarios

### The ERCOT board approves an NPRR that changes scarcity pricing. A trader asks when it becomes binding.

- Not on board approval. New or revised protocols cannot take effect until the PUCT approves a market impact statement, and the PUCT can approve, reject or remand the change. [e5]
- So the PUCT's approval is the step to watch, after which the change still has to be implemented. For example, the PUCT approved NPRR1216 (the EPP's Protocol implementation) in September 2024, but ERCOT reports Phase 1 went in only on December 5, 2025 (see offer-cap).

## Open items

- Resolved 2026-11-21: the current PURA §12.005 reads "Unless continued in existence as provided by that chapter or by Chapter 39, the commission is abolished September 1, 2029." [e23] Resolved: number, appointment and terms of commissioners (PURA §12.051). [e19]
- Offer caps: rule 25.509 (single $5,000 HCAP) and the Protocol table (DAM $5,000, RTM $2,000) differ; the rule text in the saved sources has not been updated.
- No saved source lists the current commissioners with their appointment dates; the 2026 load-forecast order is signed by five commissioners but the OCR names are partly garbled.
- No saved source states the PUCT's annual budget or staff size, or gives the full list of PUCT substantive rules that bind ERCOT.
- PURA §39.001(d) tells regulators to prefer competitive over regulatory methods. It was not used here; it may belong in a competition-policy topic.
