---
id: peaker-net-margin
name: Peaker Net Margin (PNM)
aliases: [PNM, peaker net margin, peaking operating cost, POC, RTEP, PNM threshold, CONE]
kind: metric
domain: reliability
level: 2
lenses: [analyst, trading, portfolio, structuring]
as_of: 2026-11-18
links:
  - to: offer-cap
    type: determines
    note: When PNM exceeds the threshold, the system-wide offer cap drops from the HCAP to the LCAP for the rest of the calendar year. [e7][e10]
  - to: puct
    type: regulates
    note: The PUCT's rule 25.509 defines the PNM formula and sets the system-wide offer cap to the LCAP if PNM exceeds the threshold. [e1][e10]
  - to: emergency-pricing-program
    type: contrasts-with
    note: The Emergency Pricing Program is triggered by hours at the cap in a rolling 24 hours, while PNM is a cumulative annual measure. [e1][e15]
  - to: resource-adequacy
    type: used-in
    note: The IMM uses PNM compared with the cost of new entry as a benchmark for whether market revenues support new generation. [e8]
  - to: energy-only-market
    type: part-of
    note: The PNM threshold mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. [e9]
  - to: winter-storm-uri
    type: example-of
    note: The threshold has been reached only once, in February 2021 during Winter Storm Uri. [e9]
  - to: state-of-market-report
    type: related
    note: The IMM State of the Market report discusses PNM in its Resource Adequacy chapter. [e8]
evidence:
  - id: e1
    source: puct-25-509
    locator: "16 TAC 25.509(b)(4)"
    quote: "Beginning January 1 of each calendar year, the peaker net margin will be calculated as: ∑((RTEP – POC) * (number of minutes in a settlement interval / 60 minutes per hour)) for each settlement interval when RTEP – POC >0."
  - id: e2
    source: puct-25-509
    locator: "16 TAC 25.509(b)(2)"
    quote: "For each day, the peaking operating cost (POC) will be 10 times the natural gas price index value determined by ERCOT. The POC is calculated in dollars per megawatt-hour (MWh)."
  - id: e3
    source: np-04
    locator: "Section 4.4.11.1, Scarcity Pricing Mechanism, paragraph (1)(b)-(c)"
    quote: "(b) For each day of the year, the Peaking Operating Cost (POC) shall be ten times the effective daily FIP. The POC is calculated in dollars per MWh. (c) For the purpose of this Section, the Real-Time Energy Price (RTEP) shall be measured as the ERCOT Hub Average 345 kV Hub price."
  - id: e4
    source: np-04
    locator: "Section 4.4.11.1, paragraph (1)(d)"
    quote: "For the current year, the PNM shall be calculated in dollars per MW on a cumulative basis for all past intervals in the year as follows:"
  - id: e5
    source: np-04
    locator: "Section 4.4.11.1, paragraph (2)"
    quote: "By the end of the next Business Day following the applicable Operating Day, ERCOT shall post the updated value of the PNM and the current DASWCAP on the ERCOT website."
  - id: e6
    source: np-04
    locator: "Section 4.4.11, paragraph (1)(f)"
    quote: "For the PNM process described above, ERCOT shall set the PNM threshold at three times the cost of new entry of new generation plants."
  - id: e7
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(a)"
    quote: "When the calculated PNM exceeds PNM threshold per MW-year, the DASWCAP and the VOLL used to determine the ASDCs for DAM and RTM shall both be changed to the LCAP for the remainder of the calendar year, in the following manner: (a) On the Operating Day that the PNM exceeds the PNM threshold, the HCAP will remain in effect for the balance of the day and for the Operating Day thereafter (Days 1 and 2)."
  - id: e8
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Net revenue overview"
    quote: "PNM estimates the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. Comparing PNM with CONE helps market participants determine whether revenues are sufficient to support new generation or whether additional incentives may be needed before they decide to invest in new generation."
  - id: e9
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section E, Peaker Net Margin"
    quote: "If PNM exceeds three times the CONE over a calendar year, or $315 per kW-year, the System-Wide Offer Cap (SWCAP) is reduced from $5,000 per MWh to $2,000 per MWh for the rest of that year. This mechanism is designed to limit excessive shortage pricing once investment signals are sufficient. Notably, this threshold has been exceeded only once in ERCOT’s history, on February 16, 2021, during Winter Storm Uri."
  - id: e10
    source: puct-25-509
    locator: "16 TAC 25.509(b)(6)(D)"
    quote: "If the peaker net margin exceeds the threshold established in subparagraph (C) of this paragraph during a calendar year, the system-wide offer cap will be set to the LCAP for the remainder of that calendar year."
  - id: e11
    source: imm-som-2025
    locator: "Resource Adequacy chapter, section E, Peaker Net Margin"
    quote: "ERCOT’s PNM calculation differs from a net revenue calculation because it uses protocolspecified values rather than dynamic values based on market conditions. Specifically, ERCOT calculates PNM using a 10.0 MMBtu per MWh heat rate and excludes both variable O&M costs and outage rates."
  - id: e12
    source: imm-som-2025
    locator: "Resource Adequacy chapter, executive-summary bullets on net revenue"
    quote: "The peaker net margin in ERCOT reached almost $79 per kW in 2025, roughly 21% lower than in 2024. The PNM did not reach the PNM threshold that would reduce the system-wide offer cap in ERCOT."
  - id: e13
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Cost of New Entry"
    quote: "In July 2024, the Public Utility Commission of Texas approved an updated CONE value of 140 per kW-year for planning purposes in ERCOT, reflecting more recent cost estimates for new entry, while retaining the legacy $105 per kW-year value for the peaker net margin threshold."
  - id: e15
    source: puct-25-509
    locator: "16 TAC 25.509(c)(1)"
    quote: "The EPP must be activated if the system-wide energy price, as determined by ERCOT, has been at the HCAP for 12 hours within a rolling 24-hour period."
  - id: e14
    source: np-04
    locator: "Section 4.4.11.1, paragraph (3)(c)"
    quote: "For the Operating Day two days after the PNM threshold is exceeded (Day 3) and through the end of the calendar year, DAM and RTM will use the LCAP and ASDCs reflecting the updated VOLL."
---

## Definition

Peaker net margin (PNM) is a running calendar-year sum of how much the real-time energy price exceeds a notional peaking plant's operating cost, calculated for each settlement interval when the price is above that cost. [e1] The IMM describes it as an estimate of the annual net revenue a peaking unit could have earned based on observed energy and ancillary service prices. [e8]

## How it works

The peaking operating cost (POC) for each day is ten times the daily natural gas price index (the protocol calls it the effective daily fuel index price, FIP). [e2][e3] The real-time energy price in the test is the ERCOT Hub Average 345 kV Hub price, and PNM accumulates in dollars per MW across all past intervals in the year. [e3][e4] ERCOT posts the updated PNM and current day-ahead cap on its website by the end of the next business day. [e5]

The threshold is three times the cost of new entry, which the IMM puts at $315 per kW-year. [e6][e9] If PNM exceeds it, the system-wide offer cap drops to the LCAP for the rest of the calendar year: the HCAP stays for the day of the crossing and the next Operating Day, with the LCAP effective from Day 3. [e10][e7][e14]

## ERCOT context

The IMM says the threshold has been exceeded only once, on February 16, 2021, during Winter Storm Uri. [e9] In 2025 PNM reached almost $79 per kW, about 21% below 2024, and did not reach the threshold. [e12] The IMM stresses that PNM is not a true net revenue measure: it uses protocol-specified values, a 10.0 MMBtu per MWh heat rate, and excludes variable O&M costs and outage rates. [e11]

The threshold is still based on the legacy cost of new entry of $105 per kW-year; in July 2024 the PUCT approved $140 per kW-year for planning purposes but kept $105 for the PNM threshold. [e13] Comparing PNM with CONE is the IMM's check on whether market revenues are enough to support new generation. [e8]

## Key facts

- POC is ten times the daily gas price index; RTEP is the Hub Average 345 kV Hub price. [e2][e3]
- PNM threshold is three times CONE, which the IMM states as $315 per kW-year. [e6][e9]
- When exceeded, the cap falls to the LCAP for the rest of the calendar year, effective Day 3. [e10][e7][e14]
- Only once in ERCOT's history (February 16, 2021). [e9]
- 2025 PNM: almost $79 per kW, roughly 21% lower than 2024. [e12]

## Say it like this

Peaker net margin tracks, year to date, how much a hypothetical gas peaker would have earned above its fuel cost. If it passes three times the cost of new entry, ERCOT drops the price cap for the rest of the year; that has happened once, in Winter Storm Uri.

## Common confusion

PNM is not the same as the net revenue the IMM reports for real units, because it uses fixed protocol values and ignores variable O&M and outages. [e11] It also resets each calendar year, so it is different from the Emergency Pricing Program's rolling 24-hour trigger. [e1][e15]

## Questions

### How is PNM calculated?

For each settlement interval where the Hub Average 345 kV price exceeds the POC (ten times the daily gas index), the difference times the interval length is added to a cumulative annual total in dollars per MW. [e1][e3][e4]

### What happens when PNM crosses the threshold?

The cap goes to the LCAP for the rest of the calendar year, after the HCAP stays for the day of the crossing and the next Operating Day. [e10][e7]

### Why is the threshold still $315 per kW-year when CONE was updated to $140?

The PUCT retained the legacy $105 per kW-year CONE for the PNM threshold when it approved $140 for planning in July 2024; three times $105 is $315. [e13][e9]

## Open items

- Deeper pass: the protocol parameter table lists the PNM threshold of 315,000 $/MW-year but also an RTSWCAP "current value" different from the PUCT rule; not reconciled here (see the offer-cap topic).
- The PUCT rule says RTEP is an average system-wide price as determined by ERCOT, while the protocol specifies the Hub Average 345 kV Hub price; the protocol is used here for the operational definition.
- Deeper pass: PNM history by year (Figure 57 in the IMM reports) was not quoted; OCR copies of the IMM reports were not available.
- The 2026 PUCT review of the system-wide offer cap programs (25.509(d)) may change the threshold; no outcome was found in the saved sources.
- Deeper pass: the net revenue analysis of new-entry units by technology in the IMM chapters.
