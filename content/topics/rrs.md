---
id: rrs
name: RRS (Responsive Reserve Service)
aliases: [RRS, Responsive Reserve, Responsive Reserve Service, PFR, FFR, Primary Frequency Response, Fast Frequency Response, UFR]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ancillary-services
    type: part-of
    note: The Protocols define RRS as an Ancillary Service; see that topic for plan, obligations and cost. [e1]
  - to: regulation
    type: contrasts-with
    note: ERCOT deploys RRS when restoring frequency would exceed the Reg-Up ramping capability. [e8]
  - to: ecrs
    type: related
    note: ECRS restores RRS after a significant depletion. [e9]
  - to: eea
    type: related
    note: RRS provides energy or continued load interruption during an EEA. [e1]
  - to: prc
    type: related
    note: See the PRC topic for how reserve levels are measured.
  - to: energy-storage-resource
    type: related
    note: ESRs provide RRS through primary frequency response or fast frequency response. [e3][e10]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Responsive Reserve (RRS)"
    quote: "An Ancillary Service that provides operating reserves that are intended to: (a) Arrest frequency decay within the first few seconds of a significant frequency deviation on the ERCOT Transmission Grid using Primary Frequency Response, Fast Frequency Response (FFR), and interruptible Load; (b) After the first few seconds of a significant frequency deviation, help arrest and stabilize frequency; and (c) Provide energy or continued Load interruption during the implementation of the Energy Emergency Alert (EEA)."
  - id: e2
    source: np-03
    locator: "Section 3.17.2, Responsive Reserve Service, paragraphs (1)-(2)"
    quote: "(1) Responsive Reserve (RRS) is a service used to restore or maintain the frequency of the ERCOT System in response to a significant frequency deviation. (2) RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases."
  - id: e3
    source: np-03
    locator: "Section 3.17.2, paragraph (3)(a)-(c)"
    quote: "(3) RRS may be provided by: (a) On-Line Generation Resource capable of providing Primary Frequency Response with its Frequency Responsive Capacity (FRC); (b) Resources capable of providing Fast Frequency Response (FFR) and sustaining their response for up to 15 minutes; (c) Load Resources controlled by high-set under-frequency relays;"
  - id: e4
    source: np-03
    locator: "Section 3.16, paragraph (4)"
    quote: "(4) Monthly, ERCOT shall determine and post on the ERCOT website a minimum capacity required from Resources providing RRS using Primary Frequency Response. The remaining capacity required for RRS may be supplied by all Resources qualified to provide RRS, provided that RRS from Load Resources on high-set under-frequency relays and Resources providing FFR shall be limited to 60% of the total ERCOT RRS requirement."
  - id: e5
    source: np-03
    locator: "Section 3.16, paragraph (2)(c)"
    quote: "(c) The minimum capacity required from Resources providing RRS using Primary Frequency Response shall not be less than 1,150 MW."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (14)"
    quote: "(14) RRS provided from a Resource capable of FFR shall self-deploy their obligated response within 15 cycles after frequency drops below 59.85 Hz and must continue to provide a response until the frequency increases above that level."
  - id: e7
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (13)"
    quote: "(13) RRS provided from a Generation Resource or ESR shall be responsive to frequency deviations as defined in Section 8.5.1.1, Governor in Service. Generation Resources and ESRs providing RRS must have a Governor droop setting that is not greater than 5.0%."
  - id: e8
    source: np-06
    locator: "Section 6.5.7.6.2.2, paragraph (3)"
    quote: "(3) ERCOT shall deploy RRS to respond to a frequency deviation when the power requirement to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability."
  - id: e9
    source: np-02
    locator: "Section 2.1, definition of ERCOT Contingency Reserve Service (ECRS), item (a)"
    quote: "(a) Restore Responsive Reserve (RRS) within ten minutes of a frequency deviation that results in significant depletion of RRS by restoring frequency to its scheduled value to return the system to normal;"
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of RRS"
    quote: "ERCOT procures three types of responsive reserves: (1) primary frequency response (PFR), which all generators must be able to provide and which responds automatically to deviations in system frequency; (2) Under Frequency Relay (UFR), which deploys by tripping NCLRs after a sufficient drop in frequency; and (3) Fast Frequency Response (FFR), which is overwhelmingly provided by energy storage resources (ESRs) that can respond to deviations in frequency within 30 cycles."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.C.1, RRS Provision from ESRs"
    quote: "The share of responsive reserves composed of resources providing FFR is capped at 450 MW."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "At the end of 2025, 505 NCLRs were registered in ERCOT with a combined capacity of 10,550 MW. On average throughout the year, they provided 1,480 MW of RRS, 190 MW of ECRS, and 18 MW of NSRS."
---

## Definition

Responsive Reserve (RRS) is an ancillary service providing operating reserves meant to arrest frequency decay in the first few seconds of a significant frequency deviation, to help stabilize frequency afterwards, and to provide energy or continued load interruption during an Energy Emergency Alert. [e1] It is automatically self-deployed by resources in a way that changes their real power. [e2]

## How it works

RRS can be provided by on-line generation using primary frequency response, by resources with fast frequency response (FFR) that can sustain it for up to 15 minutes, and by load resources on high-set under-frequency relays. [e3] ERCOT posts a monthly minimum capacity that must come from resources using primary frequency response, and the Protocols set that minimum no lower than 1,150 MW. [e4][e5] Load Resources on high-set under-frequency relays and FFR resources together are limited to 60% of the total RRS requirement. [e4]

Deployment rules are physical. FFR resources must self-deploy within 15 cycles after frequency drops below 59.85 Hz and keep responding until it recovers. [e6] Generators and ESRs providing RRS need a governor droop setting no greater than 5.0%. [e7] ERCOT also deploys RRS when the power needed to restore frequency to normal ACE in ten minutes exceeds the Reg-Up ramping capability. [e8]

## ERCOT context

The IMM describes three types of RRS in the market: primary frequency response, which all generators must be able to provide; under-frequency relay (UFR) capacity from load resources that trip on a frequency drop; and FFR, overwhelmingly provided by ESRs. [e10] The share of responsive reserves from FFR is capped at 450 MW. [e11] In 2025 non-controllable load resources (NCLRs) provided an average of 1,480 MW of RRS. [e12]

## Key facts

- RRS is automatically self-deployed by Resources in a manner that results in real power increases or decreases. [e2]
- RRS from high-set under-frequency relay load and FFR resources is limited to 60% of the total RRS requirement. [e4]
- The minimum PFR-based RRS capacity is not less than 1,150 MW. [e5]
- FFR must self-deploy within 15 cycles of frequency falling below 59.85 Hz. [e6]
- IMM: FFR is capped at 450 MW of responsive reserves. [e11]

## Say it like this

RRS is the reserve that responds on its own after a significant frequency deviation, starting within the first few seconds. [e1][e2] It can come from generators with primary frequency response, FFR resources such as batteries, and load resources on under-frequency relays, among others. [e3][e10]

## Common confusion

RRS is not the same as ECRS. RRS is automatically self-deployed in response to a significant frequency deviation, while ECRS is intended to restore RRS within ten minutes after it is significantly depleted. [e2][e9] Also, FFR and PFR are two ways of earning RRS, not two products. [e10]

## Questions

### Who can provide RRS?

On-line generators with primary frequency response, FFR-capable resources that can sustain response for 15 minutes, and load resources on high-set under-frequency relays, among others in the Protocols. [e3]

### What limits RRS from loads and FFR?

Combined RRS from high-set relay load resources and FFR resources is limited to 60% of the total RRS requirement, and the IMM reports an FFR cap of 450 MW. [e4][e11]

### Who restores RRS after it is used?

ECRS, which is intended to restore RRS within ten minutes after a deviation that significantly depletes it. [e9]

## Open items

- The IMM describes RRS as able to respond within 10 minutes; the Protocol definition emphasizes the first few seconds. Not reconciled.
- Deeper pass: the Reserve Discount Factors, the DAM RRS offer and self-schedule behavior, the "aggregation" of the three RRS capabilities into one product (IMM Chapter III.D), and RRS price history.
- Deeper pass: the pending NPRR1128 changes to FFR procurement (text in Section 3.16 boxes) and RRS qualification in Section 8.1.1.2.1.2.
