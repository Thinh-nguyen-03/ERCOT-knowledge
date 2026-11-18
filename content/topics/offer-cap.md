---
id: offer-cap
name: Offer Caps (HCAP / LCAP / SWCAP)
aliases: [HCAP, LCAP, SWCAP, system-wide offer cap, DASWCAP, RTSWCAP, ECAP, scarcity pricing mechanism, SPM, peaker net margin, PNM]
kind: rule
domain: pricing
level: 1
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: puct
    type: regulates
    note: The PUCT sets the offer cap levels and the peaker-net-margin trigger in its Scarcity Pricing Mechanism rule, and reviews them every five years starting 2026. [e12]
  - to: energy-offer-curve
    type: determines
    note: Energy offer curves must sit between -$250 per MWh and the applicable cap. [e10]
  - to: ordc
    type: related
    note: The ORDC and reliability deployment price adder keep operating even when the cap drops to the LCAP. [e4]
  - to: asdc
    type: related
    note: The cap also sets the value of lost load used to build the ancillary service demand curves. [e8]
  - to: eea
    type: related
    note: Read this for the EEA levels; this topic covers the separate price-based Emergency Pricing Program.
  - to: energy-only-market
    type: part-of
    note: The cap and the peaker net margin test are the scarcity-pricing guardrails of ERCOT's energy-only design.
  - to: winter-storm-uri
    type: example-of
    note: The peaker net margin threshold has been crossed once, in February 2021. [e9]
  - to: imm
    type: related
    note: The IMM State of the Market reports track the peaker net margin each year. [e9]
evidence:
  - id: e1
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(A)"
    quote: "The low system-wide offer cap (LCAP) will be set at $2,000 per MWh for energy offers and $2,000 per MW per hour for ancillary service offers."
  - id: e2
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(B)"
    quote: "The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e3
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(C)"
    quote: "The system-wide offer cap will be set equal to the HCAP at the beginning of each calendar year and maintained at this level until the peaker net margin during a calendar year exceeds a threshold of three times the cost of new entry of new generation plants."
  - id: e4
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year. In this event, ERCOT will continue to apply the operating reserve demand curve and the reliability deployment price adder for the remainder of that calendar year. Energy prices, exclusive of congestion prices, will not exceed the LCAP plus $1 for the remainder of that calendar year."
  - id: e5
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c)"
    quote: "(b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price."
  - id: e6
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(f)"
    quote: "(f) For the PNM process described above, ERCOT shall set the PNM threshold at three times the cost of new entry of new generation plants."
  - id: e7
    source: puct-25-509
    locator: "16 TAC 25.509(c)(1) and (c)(3)"
    quote: "The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period."
  - id: e8
    source: puct-25-509
    locator: "16 TAC 25.509(c)(2)"
    quote: "While the EPP is active, the system-wide offer cap will be set to the ECAP for both energy and ancillary service offers. The ECAP will be set equal to the value of the LCAP."
  - id: e9
    source: imm-som-2025
    locator: "Chapter on Resource Adequacy, section E, Peaker Net Margin"
    quote: "If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT’s history, on February 16, 2021, during Winter Storm Uri."
  - id: e10
    source: np-04
    locator: "Section 4.4.9.3.1, Energy Offer Curve Criteria, paragraph (2)"
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh."
  - id: e11
    source: puct-25-509
    locator: "16 TAC 25.509(b)(7)"
    quote: "When the system-wide offer cap is set to the LCAP, ERCOT must reimburse resource entities for any actual marginal costs in excess of the larger of the LCAP or the real-time energy price for the resource."
  - id: e12
    source: puct-25-509
    locator: "16 TAC 25.509(d)"
    quote: "Beginning January 1, 2026, and every five years thereafter, the commission will review each of the system-wide offer cap programs to determine whether to update aspects of each program."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "In 2024, the PUCT approved a CONE of $140 per kW-year while leaving the legacy CONE of $105 per kW-year in place to determine the peaker net margin threshold."
  - id: e14
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024."
---

## Definition

The system-wide offer cap is the highest price a resource may offer for energy or ancillary services in ERCOT. The PUCT's Scarcity Pricing Mechanism sets a high cap (HCAP) of $5,000 per MWh and a low cap (LCAP) of $2,000 per MWh, with the same dollar values per MW per hour for ancillary service offers. [e1][e2]

## How it works

The cap starts each calendar year at the HCAP and stays there until the peaker net margin for that year exceeds a threshold of three times the cost of new entry of new generation plants. [e3] If the threshold is crossed, the cap drops to the LCAP for the rest of that calendar year. ERCOT keeps applying the operating reserve demand curve and the reliability deployment price adder, and energy prices (excluding congestion) cannot exceed the LCAP plus $1. [e4]

The peaker net margin is a running sum over the year. In the protocols, the Peaking Operating Cost (POC) is ten times the effective daily fuel index price, and the real-time energy price used in the test is the ERCOT Hub Average 345 kV Hub price. [e5] The protocols set the PNM threshold at three times the cost of new entry of new generation plants. [e6]

A second, separate mechanism is the Emergency Pricing Program: it must be activated if the system-wide energy price has been at the HCAP for 12 hours within a rolling 24-hour period. [e7] While it is active, the cap is set to the ECAP, which equals the LCAP value. [e8]

When the cap is at the LCAP, ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e11] In the protocols, an energy offer curve must fall between -$250 per MWh and the day-ahead or real-time cap, depending on when it was submitted. [e10]

## ERCOT context

The IMM reports that the peaker net margin has crossed the threshold only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 the peaker net margin reached almost $79 per kW, about 21% lower than in 2024, well short of the $315 per kW-year trigger. [e14][e9] The trigger still uses the legacy cost of new entry of $105 per kW-year, even though the PUCT approved a $140 per kW-year CONE in 2024 for other purposes. [e13]

The PUCT reviews each system-wide offer cap program starting January 1, 2026, and every five years after that. [e12]

## Key facts

- LCAP is $2,000 per MWh for energy and $2,000 per MW per hour for ancillary services. [e1]
- HCAP is $5,000 per MWh for energy and $5,000 per MW per hour for ancillary services. [e2]
- The trigger for dropping to the LCAP is a peaker net margin above three times the cost of new entry, which the IMM puts at $315 per kW-year. [e3][e9]
- The Emergency Pricing Program starts after 12 hours at the HCAP in a rolling 24 hours, and sets the cap to the ECAP, equal to the LCAP value. [e7][e8]
- The calendar-year reset: the cap returns to the HCAP at the start of each calendar year. [e3]
- The threshold has been exceeded once, on February 16, 2021. [e9]

## Say it like this

ERCOT's offer cap is $5,000 per MWh, and it falls to $2,000 for the rest of the year only if a notional peaking plant earns more than a set net margin in that year. [e2][e4] That has happened once, in Winter Storm Uri, and the reserve demand curve keeps working either way. [e9][e4]

## Common confusion

The HCAP, the LCAP and the ECAP are all "the system-wide offer cap" at different times, not three separate caps in force at once. The peaker net margin test is on an annual calendar-year basis, whereas the Emergency Pricing Program looks at a rolling 24-hour window. [e3][e7] The Emergency Pricing Program is also not the same trigger as the peaker net margin: the first reacts to 12 hours of prices at the cap, the second to cumulative annual margin. [e3][e7]

## Questions

### What are the HCAP and LCAP, and what makes the cap switch?

The HCAP is $5,000 per MWh and the LCAP is $2,000 per MWh, with the same figures per MW per hour for ancillary services. [e1][e2] The cap starts each year at the HCAP and moves to the LCAP for the rest of the year if peaker net margin exceeds three times the cost of new entry. [e3][e4]

### How is the peaker net margin built?

It sums, across settlement intervals, the amount by which the real-time energy price exceeds the Peaking Operating Cost. The protocol prices POC at ten times the effective daily fuel index price and measures the real-time price with the ERCOT Hub Average 345 kV Hub price. [e5]

### Has the cap ever dropped to the LCAP?

According to the IMM, the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 the peaker net margin reached almost $79 per kW, far below the trigger. [e14][e9]

### What happens to scarcity pricing when the cap drops to the LCAP?

The operating reserve demand curve and the reliability deployment price adder stay in force, and energy prices excluding congestion cannot exceed the LCAP plus $1. [e4] Resources can be reimbursed for marginal costs above the LCAP. [e11]

## Open items

- The protocol parameter table in Section 4.4.11 lists a "Current Value" for HCAP-RTM (RTSWCAP) that may differ from the $5,000 in the PUCT rule; the table cells could not be quoted cleanly and the reconciliation was not sourced here, so only the PUCT and IMM $5,000 figures are used.
- The IMM says the $315 per kW-year trigger is three times a legacy CONE of $105 per kW-year; the protocol text only says "three times the cost of new entry", and the protocol table value for the PNM threshold was not quoted.
- No source in the saved set describes the history of why the HCAP was set at $5,000, or the change from the earlier cap, so none is stated.
- The Day 1 / Day 2 / Day 3 timing of the switch to the LCAP (Section 4.4.11.1(3)) and the 24-hour duration of the Emergency Pricing Program were read but not used as quotes.
- The Emergency Pricing Program has never been confirmed as activated in the saved sources; no activation history is given.
