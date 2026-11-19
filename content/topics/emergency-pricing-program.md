---
id: emergency-pricing-program
name: Emergency Pricing Program
aliases: [EPP, Emergency Pricing Program, ECAP, emergency offer cap, ECAP Effective Period]
kind: rule
domain: reliability
level: 2
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
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
---

## Definition

The Emergency Pricing Program (EPP) is a PUCT-rule mechanism that ERCOT must activate if the system-wide energy price has been at the high system-wide offer cap (HCAP) for 12 hours within a rolling 24-hour period. [e1] While it is active, the system-wide offer cap is set to the Emergency Offer Cap (ECAP) for both energy and ancillary service offers, and the ECAP equals the LCAP. [e2]

## How it works

In the protocols the test uses the sum of the real-time system lambda and the real-time reliability deployment price adder for energy, compared with the day-ahead HCAP over 12 hours in a rolling 24-hour period. [e8] If met, ERCOT activates the EPP and sets the day-ahead cap and value of lost load to the ECAP from the next Operating Hour it can implement. [e8] The protocols state that the period ends at the next Operating Hour after the later of those two 24-hour conditions, measured against EEA conditions. [e10]

The EPP lasts until the later of 24 hours after activation or, if ERCOT entered or stayed in emergency operations, 24 hours after ERCOT exits emergency operations without re-entering. [e3] While it is active, ERCOT must reimburse resource entities for actual marginal costs above the larger of the ECAP or their real-time energy price. [e4] For costs above the HCAP, the resource entity must submit a reimbursement request in the manner ERCOT prescribes. [e6]

## ERCOT context

The program comes from SB 3 (2021), which told the commission to establish an emergency pricing program by rule and to have it take effect when the HCAP has been in effect for 12 hours in a 24-hour period. [e7][e12] Within 10 working days of termination ERCOT must file an initial report with the commission. [e5] The rule's transition provision says that, until any system and protocol changes are complete, ERCOT may use a manual activation process and consider the real-time energy price, exclusive of any congestion. [e9]

The PUCT will review each system-wide offer cap program starting January 1, 2026, and every five years after. [e11]

## Key facts

- Trigger: system-wide energy price at the HCAP for 12 hours within a rolling 24-hour period. [e1]
- While active, the cap is the ECAP, equal to the LCAP value. [e2]
- Duration: the later of 24 hours after activation or, if ERCOT entered or remained in emergency operations while the EPP was active, 24 hours after ERCOT exits emergency operations without re-entering. [e3]
- Costs above the ECAP are reimbursed and allocated on a load ratio share basis. [e4][e6][e13]
- ERCOT must file an initial report within 10 working days after termination. [e5]

## Say it like this

If prices sit at the high cap for 12 hours in any rolling day, ERCOT must lower the cap to the lower level for at least 24 hours, and generators whose real costs are above that can claim reimbursement. It is a circuit breaker on a prolonged price spike, not a yearly cap.

## Common confusion

The EPP and the peaker net margin test both lower the cap to a lower level, but they are separate triggers: the EPP reacts to 12 hours at the cap in a rolling 24 hours, and the PNM test accumulates over a calendar year. [e1][e2][e14][e15] The EPP's end date can depend on when ERCOT exits emergency operations, if ERCOT entered or remained in them while the EPP was active. [e3]

## Questions

### What triggers the EPP?

The system-wide energy price at the HCAP for 12 hours within a rolling 24-hour period. [e1]

### What is the cap during the EPP?

The ECAP, which is set equal to the LCAP value, for both energy and ancillary service offers. [e2]

### Can a generator recover costs above the cap?

Yes. ERCOT must reimburse actual marginal costs above the larger of the ECAP or the real-time energy price, and a request is needed for costs above the HCAP. [e4][e6]

## Open items

- Deeper pass: the final report content (due within 90 calendar days), market notice requirements and fuel-cost attestations in 25.509(c)(4) to (6).
- The saved sources contain no record of the EPP having been activated.
- The protocol parameter table shows different "current values" for the day-ahead HCAP ($5,000), the real-time cap ($2,000) and ECAP ($2,000); the reason is not explained in the saved text, so no cap values are cited from the table.
- Statute says "in effect for 12 hours in a 24-hour period" while the rule says "at the HCAP for 12 hours within a rolling 24-hour period"; the nuance was not analyzed.
- Outcome of the PUCT's 2026 review of the offer cap programs was not found.
