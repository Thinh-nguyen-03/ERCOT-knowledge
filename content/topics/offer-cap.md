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
    note: The VOLL used to build the DAM and RTM ancillary service demand curves is set to the HCAP for DAM. [e15]
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
    quote: "An Energy Offer Curve must be within the range of -$250.00 per MWh and either the DASWCAP or RTSWCAP, depending on the timing of the submission, in dollars per MWh. No Energy Offer Curve received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP."
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
  - id: e15
    source: np-04
    locator: "Section 4.4.11, Day-Ahead and Real-Time System-Wide Offer Caps, paragraph (1)(a)"
    quote: "(1) The DASWCAP and RTSWCAP shall be determined in accordance with the Public Utility Commission of Texas (PUCT) rules. The methodology for determining the DASWCAP and RTSWCAP is as follows: (a) The DASWCAP and RTSWCAP shall be set equal to the respective High System-Wide Offer Cap (HCAP). Additionally, the Value of Lost Load (VOLL) used to determine the ASDCs for DAM and RTM shall be set to the HCAP for DAM."
  - id: e16
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e17
    source: np-04
    locator: "Section 4.4.11, parameter table footnote"
    quote: "The current value for the parameters referenced in this table above will be recommended by TAC and approved by the ERCOT Board. ERCOT shall update parameter values on the first day of the month following ERCOT Board approval unless otherwise directed by the ERCOT Board."
  - id: e18
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e19
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review, slide 21 key takeaway"
    quote: "The proportion of ESR capacity offered at price levels within $100/MWh of System Wide Offer Cap is slightly higher in the summer of 2026 compared to that of previous two summers, largely due to the lower Real-Time System Wide Offer Cap ($2000/MWh) introduced as part of RTC+B."
  - id: e20
    source: np-04
    locator: "Section 4.4.7.2.1, Resource-Specific Ancillary Service Offer Criteria, paragraph (3)"
    quote: "No Resource-Specific Ancillary Service Offer received before 1000 in the Day-Ahead may contain a price exceeding the Day-Ahead System-Wide Offer Cap (DASWCAP) (in $/MW). No Resource-Specific Ancillary Service Offer received after 1430 in the Day-Ahead may contain a price exceeding the RTSWCAP (in $/MW)."
---

## Definition

The system-wide offer cap is the highest price a resource may offer for energy or ancillary services in ERCOT. The PUCT's Scarcity Pricing Mechanism sets a high cap (HCAP) of $5,000 per MWh and a low cap (LCAP) of $2,000 per MWh, with the same dollar values per MW per hour for ancillary service offers. [e1][e2] The Protocols apply the high cap as two values: a Day-Ahead System-Wide Offer Cap (DASWCAP) and a Real-Time System-Wide Offer Cap (RTSWCAP), each set equal to the "respective" HCAP. [e15] The Protocol parameter table lists the day-ahead HCAP (DASWCAP) at $5,000 per MWh and the real-time HCAP (RTSWCAP) at $2,000 per MWh. [e16]

## How it works

The cap starts each calendar year at the HCAP and stays there until the peaker net margin for that year exceeds a threshold of three times the cost of new entry of new generation plants. [e3] If the threshold is crossed, the cap drops to the LCAP for the rest of that calendar year. ERCOT keeps applying the operating reserve demand curve and the reliability deployment price adder, and energy prices (excluding congestion) cannot exceed the LCAP plus $1. [e4]

The peaker net margin is a running sum over the year. In the protocols, the Peaking Operating Cost (POC) is ten times the effective daily fuel index price, and the real-time energy price used in the test is the ERCOT Hub Average 345 kV Hub price. [e5] The protocols set the PNM threshold at three times the cost of new entry of new generation plants. [e6]

A second, separate mechanism is the Emergency Pricing Program: it must be activated if the system-wide energy price has been at the HCAP for 12 hours within a rolling 24-hour period. [e7] While it is active, the cap is set to the ECAP, which equals the LCAP value. [e8]

When the cap is at the LCAP, ERCOT must reimburse resource entities for actual marginal costs above the larger of the LCAP or their real-time energy price. [e11] In the protocols, an energy offer curve must fall between -$250 per MWh and the day-ahead or real-time cap, depending on when it was submitted; an energy offer curve received after 1430 in the Day-Ahead cannot exceed the RTSWCAP. [e10] Resource-specific ancillary service offers follow the same split: those received before 1000 in the Day-Ahead are capped at the DASWCAP and those received after 1430 at the RTSWCAP. [e20]

The Protocols say both caps are determined under PUCT rules, and they set the VOLL used for the DAM and RTM ancillary service demand curves to the HCAP for DAM. [e15] The "current values" in the Section 4.4.11 table (ECAP, DASWCAP, RTSWCAP, LCAP and the PNM threshold of $315,000 per MW-year) are recommended by TAC and approved by the ERCOT Board. [e16][e17]

## ERCOT context

The IMM reports that the peaker net margin has crossed the threshold only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 the peaker net margin reached almost $79 per kW, about 21% lower than in 2024, well short of the $315 per kW-year trigger. [e14][e9] The trigger still uses the legacy cost of new entry of $105 per kW-year, even though the PUCT approved a $140 per kW-year CONE in 2024 for other purposes. [e13]

The PUCT reviews each system-wide offer cap program starting January 1, 2026, and every five years after that. [e12]

Since real-time co-optimization went live, the day-ahead and real-time caps differ. ERCOT's September 2026 summer review says the SWCAP was reduced to $2,000/MWh from $5,000/MWh after RTC go-live on 12/5/2025, and calls this the lower Real-Time System Wide Offer Cap introduced as part of RTC+B. [e18][e19] The PUCT rule text in the saved sources still states a single HCAP of $5,000 per MWh, and the IMM's 2025 report describes the PNM switch as moving the SWCAP from $5,000 to $2,000; neither mentions a separate real-time value. [e2][e9]

## Key facts

- LCAP is $2,000 per MWh for energy and $2,000 per MW per hour for ancillary services. [e1]
- PUCT rule: HCAP is $5,000 per MWh for energy and $5,000 per MW per hour for ancillary services. [e2]
- Protocol table "current values": DASWCAP $5,000/MWh, RTSWCAP $2,000/MWh, ECAP and LCAP $2,000/MWh, PNM threshold $315,000/MW-year. [e16]
- ERCOT: the real-time SWCAP has been $2,000/MWh since RTC go-live on 12/5/2025. [e18][e19]
- The trigger for dropping to the LCAP is a peaker net margin above three times the cost of new entry, which the IMM puts at $315 per kW-year. [e3][e9]
- The Emergency Pricing Program starts after 12 hours at the HCAP in a rolling 24 hours, and sets the cap to the ECAP, equal to the LCAP value. [e7][e8]
- The calendar-year reset: the cap returns to the HCAP at the start of each calendar year. [e3]
- The threshold has been exceeded once, on February 16, 2021. [e9]

## Say it like this

ERCOT's high offer cap is $5,000 per MWh in the PUCT rule and for day-ahead offers, but since real-time co-optimization went live in December 2025 the real-time cap is $2,000. [e2][e16][e18] The cap falls to the $2,000 low cap for the rest of the year only if a notional peaking plant earns more than a set net margin in that year. [e4] That has happened once, in Winter Storm Uri, and the reserve demand curve keeps working either way. [e9][e4]

## Common confusion

The HCAP, the LCAP and the ECAP are all "the system-wide offer cap" at different times, not three separate caps in force at once. A different point: the day-ahead and real-time caps are separate parameters, and the Protocols currently list them at $5,000 and $2,000 at the same time, so "the cap is $5,000" is true day-ahead but not in real time. [e16] The peaker net margin test is on an annual calendar-year basis, whereas the Emergency Pricing Program looks at a rolling 24-hour window. [e3][e7] The Emergency Pricing Program is also not the same trigger as the peaker net margin: the first reacts to 12 hours of prices at the cap, the second to cumulative annual margin. [e3][e7]

## Questions

### What are the HCAP and LCAP, and what makes the cap switch?

The HCAP is $5,000 per MWh and the LCAP is $2,000 per MWh, with the same figures per MW per hour for ancillary services. [e1][e2] The cap starts each year at the HCAP and moves to the LCAP for the rest of the year if peaker net margin exceeds three times the cost of new entry. [e3][e4]

### Is the ERCOT offer cap $5,000 or $2,000 today?

It depends on the market and the source. The Protocol parameter table lists the day-ahead HCAP (DASWCAP) at $5,000/MWh and the real-time HCAP (RTSWCAP) at $2,000/MWh, and ERCOT says the real-time cap dropped to $2,000 at RTC go-live on 12/5/2025. [e16][e18] The PUCT rule text in the saved sources still states an HCAP of $5,000. [e2]

### How is the peaker net margin built?

It sums, across settlement intervals, the amount by which the real-time energy price exceeds the Peaking Operating Cost. The protocol prices POC at ten times the effective daily fuel index price and measures the real-time price with the ERCOT Hub Average 345 kV Hub price. [e5]

### Has the cap ever dropped to the LCAP?

According to the IMM, the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 the peaker net margin reached almost $79 per kW, far below the trigger. [e14][e9]

### What happens to scarcity pricing when the cap drops to the LCAP?

The operating reserve demand curve and the reliability deployment price adder stay in force, and energy prices excluding congestion cannot exceed the LCAP plus $1. [e4] Resources can be reimbursed for marginal costs above the LCAP. [e11]

## Open items

- PUCT rule versus Protocols: 16 TAC 25.509 (as saved) sets one HCAP of $5,000 for energy and ancillary service offers, while the np-04 Section 4.4.11 table lists RTSWCAP at $2,000 and ERCOT's summer 2026 review says the real-time SWCAP fell to $2,000 at RTC go-live (12/5/2025). The IMM 2025 report also describes a single $5,000 SWCAP. No saved source explains the basis for the $2,000 real-time value (a PUCT rule amendment, order, or TAC/Board parameter change), so the difference is unreconciled.
- Whether the $2,000 RTSWCAP also applies to real-time ancillary service offers, and how it interacts with the EPP trigger (which compares real-time prices to the HCAP for DAM), was not traced.
- The IMM says the $315 per kW-year trigger is three times a legacy CONE of $105 per kW-year; the protocol text says "three times the cost of new entry" and the protocol table lists $315,000 per MW-year, which matches. [e16]
- No source in the saved set describes the history of why the HCAP was set at $5,000, or the change from the earlier cap, so none is stated.
- The Day 1 / Day 2 / Day 3 timing of the switch to the LCAP (Section 4.4.11.1(3)) and the 24-hour duration of the Emergency Pricing Program were read but not used as quotes.
- The Emergency Pricing Program has never been confirmed as activated in the saved sources; no activation history is given.
