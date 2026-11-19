---
id: puct
name: PUCT (Public Utility Commission of Texas)
aliases: [PUCT, PUC, Public Utility Commission of Texas, the Commission]
kind: entity
domain: structure
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
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
---

## Definition

The PUCT is the state commission that certifies ERCOT as the independent organization for the ERCOT power region. It is also the regulator to which ERCOT is directly responsible and accountable. [e1][e2]

## How it works

PURA gives the PUCT the job of adopting and enforcing rules on the reliability of the regional network and on accounting for electricity production and delivery. It may delegate those responsibilities to an independent organization, and that organization (ERCOT) is accountable to the commission. [e2]

The commission has complete authority to oversee and investigate ERCOT's finances, budget and operations. If ERCOT does not perform its duties, the commission can act against it, up to decertification or an administrative penalty. [e3] ERCOT must submit its entire proposed annual budget, and the commission may approve, disapprove or modify any item. [e4]

The PUCT also controls ERCOT's rulebook. New or revised protocols cannot take effect until the commission approves a market impact statement for them, and the commission may approve, reject or remand protocols the ERCOT board adopts. [e5] When the PUCT directs ERCOT to take an official action, it cannot use a verbal directive. It must act through a contested case, a rulemaking, or a memorandum or written order adopted by majority vote. [e6]

On market conduct, PURA directs the commission to monitor market power. When it finds abuse, it must require mitigation, using tools that include ordering new transmission, seeking penalties, ordering disgorgement of excess revenue, or acting against a certificate or registration. [e8] The Independent Market Monitor works under the commission's supervision, but the commission keeps all enforcement authority. [e9] The Protocols state that the PUCT, assisted by the IMM, has ultimate responsibility for market oversight in ERCOT. [e10]

## ERCOT context

Several of the parameters that analysts model come from PUCT rules, not from ERCOT. Rule 25.509 states a high system-wide offer cap (HCAP) of $5,000 per MWh and a low cap (LCAP) of $2,000 per MWh for energy. [e11] The Protocol parameter table, however, lists the day-ahead cap at $5,000 and the real-time cap at $2,000 per MWh, and ERCOT's September 2026 review says the SWCAP fell to $2,000 from $5,000 after RTC go-live on 12/5/2025. [e15][e16] The rule text in the saved sources has not been updated to show a separate real-time value (see the offer-cap topic). Rule 25.508 sets the ERCOT reliability standard, which includes a frequency criterion of 0.1 loss of load expectation. [e12] In July 2024 the PUCT approved a planning CONE of $140 per kW-year, while keeping the legacy $105 per kW-year value for the peaker net margin threshold. [e14]

The 2023 Sunset bill, HB 1500, changed the PUCT's own footing. It changed the date in the Sunset provision to September 1, 2029, replacing 2023. [e13][e17] It also added PURA §39.1514, which limits how the commission can direct ERCOT. [e7][e6]

## Key facts

- The PUCT certifies the independent organization and can decertify it or penalize it. [e1][e3]
- The PUCT reviews ERCOT's budget annually or biennially and can modify any item. [e4]
- Protocol changes need PUCT approval of a market impact statement before they take effect. [e5]
- Since HB 1500 (2023), PUCT directives to ERCOT to take an official action must come through a contested case, a rulemaking, or a written order or memo adopted by majority vote. [e6][e7]
- Offer caps: rule 25.509 states HCAP $5,000/MWh and LCAP $2,000/MWh for energy. [e11] The Protocol table lists $5,000 day-ahead and $2,000 real-time, and the SWCAP was reduced to $2,000 after RTC go-live on 12/5/2025. [e15][e16]
- Reliability standard frequency criterion: no more than one loss of load event per ten years on average (0.1 LOLE). [e12]
- Sunset: HB 1500 sets September 1, 2029 (previously 2023) as the date in the Sunset provision on which the commission is abolished unless it is continued in existence. [e13][e17]

## Say it like this

(Guidance) The PUCT is ERCOT's regulator. It certifies ERCOT, approves its budget and every protocol change, and sets key market parameters such as the offer caps and the reliability standard. When the market design changes in a big way, the final decision usually sits with the commission, with the IMM advising and ERCOT implementing.

## Common confusion

(Guidance) The PUCT is not FERC. In ERCOT, the PUCT, assisted by the IMM, holds ultimate responsibility for market oversight. [e10] The IMM has no enforcement authority; enforcement stays with the commission. [e9] Also, ERCOT protocol changes approved by the ERCOT board are not final until the PUCT approves them. [e5]

## Questions

### Can the PUCT simply tell ERCOT what to do in a meeting?

Not by a verbal directive. Under §39.1514, added by HB 1500, an official-action directive must come through a contested case, a rulemaking, or a memorandum or written order adopted by majority vote. [e6][e7]

### Who sets the offer cap, ERCOT or the PUCT?

Both have a hand. PUCT rule 25.509 states a high cap of $5,000 per MWh and a low cap of $2,000 per MWh for energy offers. [e11] The current values in the Protocol parameter table are recommended by TAC and approved by the ERCOT Board, and Protocol changes need PUCT approval of a market impact statement. [e18][e5] Since RTC go-live the Protocol table lists a $5,000 day-ahead cap and a $2,000 real-time cap, and ERCOT says the SWCAP was reduced to $2,000 from $5,000 after 12/5/2025. [e15][e16]

### What can the PUCT do if it finds market power abuse?

It must require reasonable mitigation. Its tools include ordering new transmission or distribution facilities, injunctions or civil penalties, administrative penalties, disgorgement of excess revenue, and suspending, revoking or amending a certificate or registration. [e8]

### Which CONE does the PUCT use, and for what?

In July 2024 it approved $140 per kW-year for planning, and it kept the legacy $105 per kW-year for the peaker net margin threshold. [e14]

## Scenarios

### The ERCOT board approves an NPRR that changes scarcity pricing. A trader asks when it becomes binding.

- Not on board approval. New or revised protocols cannot take effect until the PUCT approves a market impact statement, and the PUCT can approve, reject or remand the change. [e5]
- So the PUCT's approval is the step to watch, after which the change still has to be implemented.

## Open items

- The saved HB 1500 text is cut off before the words that say whether the commission is continued, so the Sunset date is stated only as the date in the provision. Offer caps: rule 25.509 (single $5,000 HCAP) and the Protocol table (DAM $5,000, RTM $2,000) differ; the rule text in the saved sources has not been updated.
- No saved source gives the number of PUCT commissioners, how they are appointed or their terms. PURA Chapter 12 is not among the sources.
- No saved source describes the PUCT's retail-market rules in this topic's scope (see the rep and retail-choice topics).
- PURA §39.001(d) tells regulators to prefer competitive over regulatory methods. It was not used here; it may belong in a competition-policy topic.
