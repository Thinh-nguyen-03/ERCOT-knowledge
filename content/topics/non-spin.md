---
id: non-spin
name: Non-Spinning Reserve
aliases: [Non-Spin, NSRS, Non-Spinning Reserve, Non-Spin Reserve Service]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-18
links:
  - to: ancillary-services
    type: part-of
    note: Non-Spin is an Ancillary Service provided from capacity that can ramp within 30 minutes; see that topic for plan, obligations and cost. [e1]
  - to: ecrs
    type: related
    note: ERCOT uses SCED and Non-Spin to recover ECRS reserves. [e5]
  - to: rrs
    type: related
    note: Non-Spin may be used to recover deployed RRS. [e4]
  - to: energy-storage-resource
    type: related
    note: ESRs can provide Non-Spin and supplied 24% of it in 2025. [e2][e10]
  - to: eea
    type: related
    note: ERCOT may deploy Non-Spin when other Emergency Conditions exist. [e4]
  - to: asdc
    type: related
    note: An individual ASDC is determined for Non-Spin by disaggregating the AORDC; see that topic. [e14]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Non-Spinning Reserve (Non-Spin)"
    quote: "An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours."
  - id: e2
    source: np-03
    locator: "Section 3.17.3, Non-Spinning Reserve Service, paragraph (1)(a)"
    quote: "(1) Non-Spinning Reserve (Non-Spin) is provided by using: (a) Generation Resources, whether On-Line or Off-Line, capable of: (i) Being synchronized and ramped to a specified output level within 30 minutes; and (ii) Running at a specified output level for at least four consecutive hours;"
  - id: e3
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(b)"
    quote: "(b) CLRs qualified for Dispatch by Security-Constrained Economic Dispatch (SCED) and capable of: (i) Ramping to an ERCOT-instructed consumption level within 30 minutes; and (ii) Consuming at the ERCOT-instructed level for at least four consecutive hours;"
  - id: e4
    source: np-06
    locator: "Section 6.5.7.6.2.3, Non-Spinning Reserve Service Deployment, paragraph (1)"
    quote: "(1) ERCOT shall deploy Non-Spin Service by operator Dispatch Instruction for the portion of On-Line Generation Resources that is only available through power augmentation and participating as Off-Line Non-Spin and Off-Line Generation Resources. ERCOT shall develop a procedure approved by TAC to deploy Resources providing Non-Spin Service. ERCOT Operators shall implement the deployment procedure when a specified threshold(s) in MW of capability available to SCED to increase generation is reached. ERCOT Operators may implement the deployment procedure to recover deployed RRS, ECRS, or when other Emergency Conditions exist. The deployment of Non-Spin must always be 100% of that awarded on an individual Resource."
  - id: e5
    source: np-06
    locator: "Section 6.5.7.6.2.4, paragraph (4)"
    quote: "(4) ERCOT shall use SCED and Non-Spin as soon as practicable to recover ECRS reserves."
  - id: e6
    source: np-06
    locator: "Section 6.5.7.6.2.3, paragraphs (2)-(3)"
    quote: "(2) Once Non-Spin capacity from Off-Line Generation Resources awarded Non-Spin is deployed and the Generation Resources are On-Line, ERCOT shall use SCED to determine the amount of energy to be dispatched from those Resources. (3) Off-Line Generation Resources offering to provide Non-Spin must provide an Energy Offer Curve for use by SCED."
  - id: e7
    source: imm-som-2025
    locator: "Chapter III.B, Ancillary Services Market, description of NSRS"
    quote: "NSRS resources can respond within 30 minutes and are needed to compensate for intra-hour net load forecast uncertainty that results in under-commitments of capacity or inefficient dispatch instructions. Online and offline units can provide NSRS."
  - id: e8
    source: imm-som-2025
    locator: "Chapter III.A.2, Ancillary Services Prices"
    quote: "Exercising their discretion, they increased the procurement target by an additional 1,000 MW for HE 19-22 on May 20, 2025, causing the price of NSRS to average $320 per MWh during this period."
  - id: e9
    source: imm-som-2025
    locator: "Chapter III.A, key insights on ancillary services in 2025"
    quote: "CLRs shifted to NSRS in 2025 because NSRS was the highest-priced AS product throughout the year."
  - id: e10
    source: imm-som-2025
    locator: "Chapter III.C.1, ECRS and NSRS Provision by ESRs"
    quote: "ESRs’ provision of ECRS and NSRS increased to 42% and 24%, respectively, in 2025."
  - id: e11
    source: imm-som-2025
    locator: "Chapter III.C.1, ECRS and NSRS Provision by ESRs"
    quote: "As of this report, the NSRS duration requirement remains four hours, despite mounting evidence that this constraint distorts market outcomes. However, NPRR 1309, which has been approved by the ERCOT Technical Advisory Committee, would set the duration for NSRS at two hours upon the implementation of the long-foretold Dispatchable Reliability Reserve Service (DRRS)."
  - id: e12
    source: imm-som-2025
    locator: "Chapter III.C.2, NCLR Participation in Ancillary Services"
    quote: "To qualify to provide NSRS, NCLRs cannot have an active UFR, so they must choose between providing NSRS and RRS."
  - id: e13
    source: np-03
    locator: "Section 3.17.3, paragraph (1)(a), pending box [NPRR1309: Replace paragraph (ii) above upon system implementation]"
    quote: "(ii) Running at a specified output level for at least two consecutive hours;"
  - id: e14
    source: np-04
    locator: "Section 4.4.12, paragraph (5)"
    quote: "(5) To determine the individual ASDCs for Reg-Up, RRS, ECRS, and Non-Spin, an Aggregate Operating Reserve Demand Curve (ORDC) (AORDC) will be created and then disaggregated into individual curves for the different Ancillary Services."
---

## Definition

Non-Spinning Reserve (Non-Spin) is an ancillary service provided by off-line generation that can be synchronized and ramped to a specified output within 30 minutes, or by load that can be interrupted within 30 minutes, and that can sustain that level for at least four consecutive hours. [e1]

## How it works

Generation Resources, on-line or off-line, qualify if they can ramp to a specified output within 30 minutes and run at it for at least four consecutive hours. [e2] Controllable Load Resources qualified for SCED can also provide it if they can reach an ERCOT-instructed consumption level within 30 minutes and hold it for four hours. [e3]

ERCOT deploys Non-Spin by operator Dispatch Instruction, under a TAC-approved procedure that starts when a threshold of capability available to SCED is reached. Operators may also use it to recover deployed RRS or ECRS or when other Emergency Conditions exist, and a deployment is always 100% of the individual resource's award. [e4] Once off-line capacity is deployed and on line, SCED determines its energy, and off-line resources offering Non-Spin must supply an Energy Offer Curve. [e6]

## ERCOT context

The IMM describes Non-Spin as covering intra-hour net load forecast uncertainty that would otherwise cause under-commitment or inefficient dispatch. [e7] In 2025 NSRS was the highest-priced AS product throughout the year, which pushed controllable loads toward it, and in May the procurement target was increased by 1,000 MW for hours ending 19-22 on May 20, pushing the NSRS price to average $320 per MWh over those hours. [e9][e8] ESRs supplied 24% of NSRS in 2025. [e10]

The IMM notes that the NSRS duration requirement remained four hours at the time of the report and that NPRR 1309, approved by TAC, would set it to two hours when DRRS is implemented. [e11] The Protocols also carry this as pending text, not yet in effect, under NPRR1309. [e13]

## Key facts

- Non-Spin ramps to a specified output within 30 minutes and holds it for at least four consecutive hours (current Protocol text). [e1]
- Deployment is always 100% of an individual resource's award. [e4]
- Operators may use Non-Spin to recover deployed RRS or ECRS. [e4]
- 2025: NSRS was the highest-priced AS product; ESRs provided 24%. [e9][e10]
- Non-controllable load resources cannot hold an active UFR and also provide NSRS, so they choose NSRS or RRS. [e12]

## Say it like this

Non-Spin is the slow reserve: capacity that can be brought on or ramped within 30 minutes and held for hours, used to cover forecast error and to refill faster reserves. In 2025 it was the most expensive AS product. [e1][e4][e9]

## Common confusion

Despite the name, Non-Spin is not only off-line capacity: on-line generation and ESRs can also provide it. [e2][e10] The four-hour duration is the current Protocol text, and a two-hour change is pending under NPRR 1309. [e11][e13]

## Questions

### How is Non-Spin deployed?

By operator Dispatch Instruction under a TAC-approved procedure, always for 100% of the award, after which SCED sets the energy dispatched from the deployed resource. [e4][e6]

### Why was Non-Spin expensive in 2025?

The IMM says NSRS was the highest-priced AS product throughout 2025 and that the procurement target was increased by an additional 1,000 MW for HE 19-22 on May 20, 2025, which caused the NSRS price to average $320 per MWh during that period. [e9][e8]

## Open items

- The Protocols show a pending NPRR1309 box changing the 4-hour duration to 2 hours for Non-Spin; the current rule used here is four hours. The IMM text says duration rises or falls with DRRS implementation; DRRS is not covered.
- Deeper pass: Non-Spin qualification (Section 8.1.1.2.1.3), the minimum capacity from SCED-dispatchable resources, the distribution-connected DGR/DESR limits, and the NSRS clearing price history by year.
- Deeper pass: the IMM's recommendation to move to a one-hour duration for ECRS and NSRS (Recommendation 2024-2).
