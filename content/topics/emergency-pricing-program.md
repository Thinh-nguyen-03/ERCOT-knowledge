---
id: emergency-pricing-program
name: Emergency Pricing Program
aliases: [EPP, Emergency Pricing Program, ECAP, emergency offer cap, ECAP Effective Period]
kind: rule
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: offer-cap
    type: related
    note: Read the offer-cap topic for HCAP, LCAP and the annual peaker-net-margin switch; the EPP is the separate, event-based cap reduction. [e2]
  - to: peaker-net-margin
    type: contrasts-with
    note: PNM is a cumulative annual trigger, while the EPP reacts to 12 hours at the cap in a rolling 24-hour period. [e1][e15]
  - to: eea
    type: related
    note: If ERCOT entered or stayed in emergency operations while the EPP was active, the EPP lasts until 24 hours after ERCOT exits emergency operations without re-entering. [e3]
  - to: texas-legislature
    type: related
    note: SB 3 (2021) directed the commission by rule to establish an emergency pricing program. [e7]
  - to: puct
    type: regulates
    note: The PUCT rule 25.509(c) sets the EPP and receives ERCOT's initial report after the EPP is terminated. [e5]
  - to: load-ratio-share
    type: related
    note: Reimbursement costs under the EPP are allocated on a load ratio share basis. [e13]
  - to: system-lambda
    type: used-in
    note: The activation test sums the RTM System Lambda and the reliability deployment adder and compares it to the HCAP. [e8]
  - to: ordc
    type: related
    note: The EPP also resets VOLL used to build the ASDCs to ECAP, which links the cap change to reserve pricing. [e8]
  - to: rtc-b
    type: related
    note: ERCOT says Phase 1 of the EPP revision requests was implemented December 5, 2025. [e38]
evidence:
  - id: e1
    source: puct-25-509
    locator: "16 TAC 25.509(c)(1)"
    quote: "The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period."
  - id: e2
    source: puct-25-509
    locator: "16 TAC 25.509(c)(2)"
    quote: "While the EPP is active, the system-wide offer cap will be set to the ECAP for both energy and ancillary service offers. The ECAP will be set equal to the value of the LCAP."
  - id: e3
    source: puct-25-509
    locator: "16 TAC 25.509(c)(3)"
    quote: "The EPP will remain in effect until the later of: (A) 24 hours after the activation of the EPP; or (B) if ERCOT has entered into or remained in emergency operations while the EPP is activated, 24 hours after ERCOT exits emergency operations without re-entering emergency operations."
  - id: e4
    source: puct-25-509
    locator: "16 TAC 25.509(c)(5)(A)"
    quote: "While the EPP is active, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the ECAP or the real-time energy price for the resource."
  - id: e5
    source: puct-25-509
    locator: "16 TAC 25.509(c)(6)(A)"
    quote: "Within 10 working days from the date the EPP is terminated, ERCOT must file an initial report with the commission that contains the following information:"
  - id: e6
    source: puct-25-509
    locator: "16 TAC 25.509(c)(5)(B)"
    quote: "For reimbursement of actual marginal costs in excess of the HCAP, a resource entity must submit a reimbursement request in the manner prescribed by ERCOT."
  - id: e7
    source: sb3-87r
    locator: "PURA Sec. 39.160(a), as added by SB 3"
    quote: "The commission by rule shall establish an emergency pricing program for the wholesale electric market."
  - id: e8
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)"
    quote: "If the sum of the RTM System Lambda and Real-Time Reliability Deployment Price Adder for Energy is greater than or equal to the HCAP for DAM for a total of 12 hours within a rolling 24-hour period, ERCOT will activate the Emergency Pricing Program (EPP) and the DASWCAP and VOLL used to determine the ASDCs for DAM and RTM will be set to ECAP starting at the beginning of the next Operating Hour that ERCOT can implement the change."
  - id: e9
    source: puct-25-509
    locator: "16 TAC 25.509(c)(7)"
    quote: "ERCOT may utilize a manual process to activate the EPP and may consider the real-time energy price, exclusive of any congestion, to determine the system-wide energy price, until any system and protocol changes are complete."
  - id: e10
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)(A)-(B)"
    quote: "The EPP will remain active until the later of the following, at which point the ECAP Effective Period will end at the beginning of the next Operating Hour: (A) 24 hours after the initial setting of these values to ECAP; or (B) 24 hours after ERCOT exits Energy Emergency Alert (EEA) conditions, if ERCOT entered into or remained in EEA while the EPP was active."
  - id: e11
    source: puct-25-509
    locator: "16 TAC 25.509(d)"
    quote: "Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program."
  - id: e12
    source: sb3-87r
    locator: "PURA Sec. 39.160(b), as added by SB 3"
    quote: "The emergency pricing program must take effect if the high system-wide offer cap has been in effect for 12 hours in a 24-hour period after initially reaching the high system-wide offer cap."
  - id: e13
    source: puct-25-509
    locator: "16 TAC 25.509(c)(5)(C)"
    quote: "ERCOT must allocate costs associated with this paragraph on a load ratio share basis."
  - id: e14
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year."
  - id: e15
    source: puct-25-509
    locator: "16 TAC 25.509(b)(4)"
    quote: "Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP – POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP – POC >0."
  - id: e16
    source: puct-25-509
    locator: "16 TAC 25.509(c)(4), Market Notice"
    quote: "ERCOT will issue a notice both when the EPP is activated and when the EPP is terminated."
  - id: e17
    source: puct-25-509
    locator: "16 TAC 25.509(c)(6)(B), final report"
    quote: "Within 90 calendar days from the date the EPP is terminated, ERCOT must file a final report with the commission that contains the following information:"
  - id: e18
    source: puct-25-509
    locator: "16 TAC 25.509(c)(6)(B)(iii)"
    quote: "the number of generators that filed for cost recovery under paragraph (5) of this subsection;"
  - id: e19
    source: puct-25-509
    locator: "16 TAC 25.509(c)(5)(B)(i)"
    quote: "for a resource entity requesting recovery of fuel costs, an attestation that the costs submitted for recovery are solely related to the provision of fuel or services directly related to the provision of the purchased fuel; and"
  - id: e20
    source: puct-25-509
    locator: "16 TAC 25.509(c)(5)(B)"
    quote: "If a resource entity fails to provide information to ERCOT in its reimbursement request, as required by this subparagraph, ERCOT must not approve the reimbursement of the resource entity’s fuel costs."
  - id: e21
    source: puct-25-509
    locator: "16 TAC 25.509(c)(7)"
    quote: "ERCOT must issue a market notice when it transitions from a manual to an automated EPP activation process."
  - id: e22
    source: pura-39
    locator: "PURA Sec. 39.160(c)"
    quote: "The emergency pricing program may not allow an emergency pricing program cap to exceed any nonemergency high system-wide offer cap."
  - id: e23
    source: pura-39
    locator: "PURA Sec. 39.160(g)"
    quote: "The emergency pricing program must allow generators to be reimbursed for reasonable, verifiable operating costs that exceed the emergency cap."
  - id: e24
    source: pura-39
    locator: "PURA Sec. 39.160(f)"
    quote: "The commission shall review each system-wide offer cap program adopted by the commission, including the emergency pricing program, at least once every five years to determine whether to update aspects of the program."
  - id: e25
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)"
    quote: "Security-Constrained Economic Dispatch (SCED)-level data, time-weight averaged to a 15-minute Settlement Interval equivalent, will be used to make this determination."
  - id: e26
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)(i)(B)"
    quote: "If ERCOT reenters EEA conditions within 24 hours, then the ECAP Effective Period will continue for 24 hours after the latest exit from EEA conditions."
  - id: e27
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(b)"
    quote: "ERCOT shall issue operations notices when the ECAP Effective Period begins and ends."
  - id: e28
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(e)"
    quote: "Within 90 days of the end of the ECAP Effective Period, ERCOT shall file a final report with the PUCT providing a summary of the event that triggered the EPP, an analysis of the EPP’s performance, and any recommendations to modify or improve the EPP."
  - id: e29
    source: np-04
    locator: "Section 4.4.11, paragraph (2)"
    quote: "Any offers submitted that exceed the current respective DASWCAP or RTSWCAP shall be rejected by ERCOT."
  - id: e30
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(a)"
    quote: "The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP)."
  - id: e31
    source: np-04
    locator: "Section 4.4.11, parameter table (Current Value column)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e32
    source: np-04
    locator: "Section 4.4.11, parameter table footnote"
    quote: "The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board."
  - id: e33
    source: ercot-nprr1216-puct-report
    locator: "NPRR1216 PUCT Report, Revision Description"
    quote: "An ECAP Effective Period initiates at the beginning of the next Operating Hour after the sum of the Real-Time Market (RTM) System Lambda, Real-Time On-Line Reserve Price Adder, and Real-Time On-Line Reliability Deployment Price Adder is greater than or equal to the High System-Wide Offer Cap (HCAP) for 12 hours (i.e., 48 15-minute Settlement Intervals) within a rolling 24-hour period."
  - id: e34
    source: ercot-nprr1216-puct-report
    locator: "NPRR1216 PUCT Report, Revision Description"
    quote: "For purposes of the EPP, emergency operations is defined as declaration of an Energy Emergency Alert (EEA)."
  - id: e35
    source: ercot-nprr1216-puct-report
    locator: "NPRR1216 PUCT Report, Revision Description"
    quote: "In order for a Resource (through its Qualified Scheduling Entity (QSE)) to recover actual marginal costs for an ECAP Effective Period, the QSE must submit a Settlement and billing dispute in accordance with the procedures in Sections 6.8.1 and 9.14."
  - id: e36
    source: ercot-nprr1216-puct-report
    locator: "NPRR1216 PUCT Report, Revision Description"
    quote: "An attestation must be provided affirming that the information submitted is accurate and that fixed costs were not included in any of the costs submitted."
  - id: e37
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D, Question 2 (a party filing)"
    quote: "It is a circuit breaker mechanism to ensure that wholesale electric prices do not remain at the HCAP for an extended period of time during the circumstances specified by the program."
  - id: e38
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D, Question 2 (a party filing)"
    quote: "The Commission approved these Revision Requests on September 26,2024 and ERCOT implemented Phase 1 of these Revision Requests on December 5,2025."
  - id: e39
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D, Commission Staff Question 2(a) as quoted by ERCOT (a party filing)"
    quote: "Since its adoption in December 2023, ERCOT has never activated the EPP."
  - id: e40
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D (a party filing)"
    quote: "Because that trigger is established by statute in PURA §39.160(b), changing the EPP trigger to activate more or less frequently under different conditions would require new legislation."
  - id: e41
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D (a party filing)"
    quote: "For that reason, ERCOT recommends that those EPP requirements be maintained as is and reconsidered during the next quinquennial review under 16 TAC § 25.509(d)."
  - id: e42
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), Part I.D, Question 2 (a party filing)"
    quote: "In December 2023 in Project No. 54585, the Commission adopted regulations governing the EPP in 16 TAC § 25.509(c), which became effective immediately."
  - id: e43
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), opening paragraph (a party filing)"
    quote: "The deadline to file comments is September 17,2026, therefore these comments are timely filed."
  - id: e44
    source: puct-59550-ercot-comments
    locator: "ERCOT comments (filed 2026-09-17), opening section (a party filing)"
    quote: "This proceeding initiates the first such review and subsequent reviews are to be performed quinquennially (i.e., every five years) hereafter."
---

## Definition

The Emergency Pricing Program (EPP) is a PUCT-rule mechanism that ERCOT must activate if the system-wide energy price has been at the high system-wide offer cap (HCAP) for 12 hours within a rolling 24-hour period. [e1] While it is active, the system-wide offer cap is set to the Emergency Offer Cap (ECAP) for both energy and ancillary service offers, and the ECAP equals the LCAP. [e2]

## How it works

In the protocols the test uses the sum of the real-time system lambda and the real-time reliability deployment price adder for energy, compared with the day-ahead HCAP over 12 hours in a rolling 24-hour period. [e8] SCED-level data, time-weight averaged to a 15-minute Settlement Interval equivalent, are used to make the determination. [e25] If met, ERCOT activates the EPP and sets the day-ahead cap and value of lost load to the ECAP from the next Operating Hour it can implement. [e8] The protocols state that the period ends at the next Operating Hour after the later of those two 24-hour conditions, measured against EEA conditions, [e10] and that if ERCOT reenters EEA within 24 hours the ECAP Effective Period continues for 24 hours after the latest exit. [e26]

The EPP lasts until the later of 24 hours after activation or, if ERCOT entered or stayed in emergency operations, 24 hours after ERCOT exits emergency operations without re-entering. [e3] While it is active, ERCOT must reimburse resource entities for actual marginal costs above the larger of the ECAP or their real-time energy price. [e4] For costs above the HCAP, the resource entity must submit a reimbursement request in the manner ERCOT prescribes. [e6] That request must include, for fuel costs, an attestation that the costs are solely related to the provision of fuel or services directly related to the purchased fuel, [e19] and if the resource entity fails to provide the required information ERCOT must not approve reimbursement of its fuel costs. [e20]

Offers above the applicable cap are rejected: any offer exceeding the current DASWCAP or RTSWCAP is rejected by ERCOT. [e29]

Notices and reports: ERCOT issues a notice when the EPP is activated and when it is terminated, [e16] and operations notices when the ECAP Effective Period begins and ends. [e27] Within 10 working days of termination ERCOT files an initial report with the commission. [e5] Within 90 calendar days it files a final report, [e17] which includes the number of generators that filed for cost recovery. [e18] The protocols mirror this with a final report within 90 days that also covers the number of Resources and the total dollar amount of costs submitted and recovered. [e28]

## ERCOT context

The program comes from SB 3 (2021), which told the commission to establish an emergency pricing program by rule and to have it take effect when the HCAP has been in effect for 12 hours in a 24-hour period. [e7][e12] The statute adds that the emergency pricing program may not allow its cap to exceed any nonemergency high system-wide offer cap, [e22] and that it must allow generators to be reimbursed for reasonable, verifiable operating costs that exceed the emergency cap. [e23] The rule's transition provision says that, until any system and protocol changes are complete, ERCOT may use a manual activation process and consider the real-time energy price, exclusive of any congestion; ERCOT must issue a market notice when it moves from manual to automated activation. [e9][e21]

NPRR1216 (the Nodal Protocol revision that incorporated the EPP) was approved on September 26, 2024, and ERCOT says it implemented Phase 1 of NPRR1216, OBDRR051 and VCMRR039 on December 5, 2025. [e38] NPRR1216 says that for EPP purposes emergency operations means declaration of an EEA, [e34] and that a QSE recovers costs above the ECAP by submitting a Settlement and billing dispute under Sections 6.8.1 and 9.14, [e35] with an attestation affirming the information is accurate and that fixed costs were not included. [e36] NPRR1216's description of the trigger lists the RTM System Lambda plus the Real-Time On-Line Reserve Price Adder plus the Real-Time On-Line Reliability Deployment Price Adder, [e33] whereas the np-04 text now in the saved sources uses System Lambda plus the Reliability Deployment Price Adder for Energy. [e8]

Cap values: the np-04 parameter table lists ECAP $2,000/MWh, HCAP for the day-ahead (DASWCAP) $5,000/MWh, HCAP for real-time (RTSWCAP) $2,000/MWh, LCAP $2,000/MWh and a PNM threshold of $315,000/MW-year as "Current Value", [e31] and a footnote says the current values will be recommended by TAC and approved by the ERCOT Board. [e32] In np-04 the DASWCAP and RTSWCAP are set equal to the respective HCAP until a trigger is met. [e30]

The PUCT will review each system-wide offer cap program starting January 1, 2026, and every five years after; PURA also requires a review at least once every five years. [e11][e24]

Party filing (not a rule or a finding): in comments filed September 17, 2026 [e43] in PUCT Project 59550 (the first quinquennial review of the system-wide offer cap programs [e44]), ERCOT described the EPP as a circuit breaker so that prices do not remain at the HCAP for an extended period, [e37] and said that, because the trigger is set by statute in PURA 39.160(b), changing the trigger would require new legislation. [e40] ERCOT recommended maintaining the other EPP requirements as is and reconsidering them in the next quinquennial review. [e41] The filing quotes the Commission Staff question as saying that since its adoption in December 2023 ERCOT has never activated the EPP. [e39]

## Timeline

- December 2023: the PUCT adopts the EPP rule (16 TAC 25.509(c), Project 54585), per ERCOT's comments and the Staff question quoted in the 2026 filing. [e42][e39]
- September 26, 2024: approval of NPRR1216 and related revision requests. [e38]
- December 5, 2025: ERCOT implements Phase 1 of NPRR1216, OBDRR051 and VCMRR039 (per ERCOT's 2026 filing). [e38]
- January 1, 2026: the commission's five-year review of system-wide offer cap programs begins. [e11]
- September 17, 2026: ERCOT files comments in Project 59550. [e37][e43]

## Key facts

- Trigger: system-wide energy price at the HCAP for 12 hours within a rolling 24-hour period. [e1]
- While active, the cap is the ECAP, equal to the LCAP value. [e2]
- Duration: the later of 24 hours after activation or, if ERCOT entered or remained in emergency operations while the EPP was active, 24 hours after ERCOT exits emergency operations without re-entering. [e3]
- Marginal costs above the larger of the ECAP or the real-time energy price are reimbursed; costs above the HCAP need a reimbursement request, with a fuel-cost attestation; costs are allocated on a load ratio share basis. [e4][e6][e19][e13]
- ERCOT must file an initial report within 10 working days after termination and a final report within 90 calendar days. [e5][e17]
- ERCOT must issue a notice when the EPP is activated and when it is terminated. [e16]
- Per the Staff question quoted in ERCOT's September 2026 filing, the EPP has never been activated. [e39]

## Say it like this

If prices sit at the high cap for 12 hours in any rolling day, ERCOT must lower the cap to the lower level for at least 24 hours, and generators whose real costs are above that can claim reimbursement. It is a circuit breaker on a prolonged price spike, not a yearly cap.

## Common confusion

The EPP and the peaker net margin test both lower the cap to a lower level, but they are separate triggers: the EPP reacts to 12 hours at the cap in a rolling 24 hours, and the PNM test accumulates over a calendar year. [e1][e2][e14][e15] The EPP's end date can depend on when ERCOT exits emergency operations, if ERCOT entered or remained in them while the EPP was active. [e3] The "cap" in the EPP trigger is the day-ahead HCAP in the protocol test, which is a different number from the real-time cap in the parameter table. [e8][e31]

## Questions

### What triggers the EPP?

The system-wide energy price at the HCAP for 12 hours within a rolling 24-hour period. [e1]

### What is the cap during the EPP?

The ECAP, which is set equal to the LCAP value, for both energy and ancillary service offers. [e2]

### Can a generator recover costs above the cap?

Yes. ERCOT must reimburse actual marginal costs above the larger of the ECAP or the real-time energy price, and a request is needed for costs above the HCAP. [e4][e6] For fuel costs the request needs an attestation, and without the required information ERCOT must not approve the fuel-cost reimbursement. [e19][e20]

### Why is the EPP described as a circuit breaker?

In ERCOT's words, it ensures wholesale prices do not remain at the HCAP for an extended period under the program's circumstances. [e37] The rule drops the offer cap to the ECAP once the price has been at the HCAP for 12 hours in a rolling 24. [e1][e2]

### What if ERCOT goes into EEA while the EPP is active?

The EPP lasts until the later of 24 hours after activation or 24 hours after ERCOT exits emergency operations. [e3] If ERCOT reenters EEA within 24 hours the ECAP Effective Period continues for 24 hours after the latest exit. [e26]

### Why could the EPP trigger change only through legislation?

Per ERCOT's 2026 filing, the 12-hour trigger is set by statute in PURA 39.160(b), so changing it would require new legislation. [e40][e12]

### What is the ECAP's relationship to the other caps?

The ECAP equals the LCAP, [e2] and PURA says the EPP cap may not exceed any nonemergency high system-wide offer cap. [e22]

## Scenarios

### Prices are at the HCAP for 12 of the last 24 hours and ERCOT is in EEA. What happens?

- The EPP is activated and the cap moves to the ECAP for energy and ancillary service offers. [e1][e2]
- Because ERCOT is in emergency operations, the EPP lasts until 24 hours after ERCOT exits, if later than 24 hours after activation. [e3]
- A generator whose actual marginal costs exceed the larger of the ECAP or its real-time energy price can seek reimbursement, with a request and attestation for amounts above the HCAP. [e4][e6][e19]

## Open items

- Resolved 2026-11-21: the final report content (due within 90 calendar days), market notice requirements and fuel-cost attestation in 25.509(c)(4) to (6) are now covered; the parameter table values are explained by the footnote that values are recommended by TAC and approved by the ERCOT Board.
- The Staff question quoted in ERCOT's September 2026 filing says the EPP has never been activated; this is a question in a party filing and not an ERCOT record of activations.
- The statute says "in effect for 12 hours in a 24-hour period" while the rule says "at the HCAP for 12 hours within a rolling 24-hour period"; the nuance was not analyzed.
- The outcome of the PUCT's review in Project 59550 was not found; only ERCOT's initial comments are saved.
- The NPRR1216 description and the current np-04 trigger text list different price components (the On-Line Reserve Price Adder appears only in the NPRR1216 description); the saved sources do not say when or why np-04 changed.
- The saved sources do not explain why the protocol test compares the sum to the day-ahead HCAP ($5,000) while the real-time cap (RTSWCAP) is $2,000.
