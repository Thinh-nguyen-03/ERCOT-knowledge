---
id: non-spin
name: Non-Spinning Reserve
aliases: [Non-Spin, NSRS, Non-Spinning Reserve, Non-Spin Reserve Service]
kind: product
domain: reliability
level: 1
lenses: [analyst, trading, portfolio]
as_of: 2026-11-21
depth: deep
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
  - to: regulation
    type: contrasts-with
    note: Regulation must be deliverable within five minutes, while Non-Spin ramps in 30 minutes and is sustained for four hours. [e16][e1]
  - to: drrs
    type: related
    note: NPRR1309 (PUCT-approved, pending system implementation) addresses DRRS and, given DRRS has at least a four-hour duration, would reduce the Non-Spin duration requirement from four hours to two. [e20]
  - to: prc
    type: related
    note: The AS Methodology sizes ECRS and Non-Spin against a 1-in-10-year chance of reserves falling below the sum of procured Reg-Up and RRS or the 3,000 MW Watch threshold, whichever is higher. [e26]
  - to: rtc-b
    type: related
    note: After NPRR1282 took effect, RTC-SCED explicitly enforces the four-hour duration for NSRS, according to the IMM. [e25]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Non-Spinning Reserve (Non-Spin)"
    quote: "An Ancillary Service that is provided through use of the part of Off-Line Generation Resources that can be synchronized and ramped to a specified output level within 30 minutes (or Load Resources that can be interrupted within 30 minutes) and that can operate (or Load Resources that can be interrupted) at a specified output level for at least four consecutive hours. Non-Spin may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, that is reserved exclusively for use for this service and that can be sustained at a specified level for at least four consecutive hours."
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
  - id: e15
    source: np-08
    locator: "Section 8.1.1.2.1.3, Non-Spinning Reserve Qualification, paragraph (1)"
    quote: >-
      Non-Spin may be provided from Generation Resource capacity that can ramp within 30 minutes or Load Resources capable of unloading within 30 minutes. Non-Spin may only be provided from capacity that is not fulfilling any other energy or capacity commitment.
  - id: e16
    source: np-08
    locator: "Section 8.1.1.2.1.1, Regulation Service Qualification, paragraph (3)"
    quote: >-
      Resources providing Reg-Up or Reg-Down must be capable of delivering the full amount of regulating capacity offered to ERCOT within five minutes.
  - id: e17
    source: np-08
    locator: "Section 8.1.1.2.1.3, paragraphs (2)-(3)"
    quote: >-
      (2) Resources are required to undergo a qualification test to provide Non-Spin when the Resource is On-Line, which shall at least include the ability to provide applicable telemetry and market submissions. The amount of Non-Spin for which the Resource is qualified when On-Line is limited to the amount of capacity that can be ramped or unloaded within 30 minutes. (3) A Controllable Load Resource offering to provide Non-Spin must be qualified to participate in SCED and must provide a telemetered output signal, including breaker status.
  - id: e18
    source: np-08
    locator: "Section 8.1.1.2.1.3, paragraph (8)"
    quote: >-
      (8) The maximum quantity of Non-Spin that an individual Resource is qualified to provide is limited to the amount of Non-Spin that can be sustained by the Resource for at least four hours.
  - id: e19
    source: np-08
    locator: "Section 8.1.1.4.3, Non-Spinning Reserve Service Energy Deployment Criteria, paragraph (3)(a)"
    quote: >-
      (a) Off-Line Generation Resources, within 25 minutes following a deployment instruction, must be On-Line with an Energy Offer Curve and the telemetered net generation must be greater than or equal to the Resource’s telemetered LSL multiplied by P1 where P1 is defined in the “ERCOT and QSE Operations Business Practices During the Operating Hour.”
  - id: e20
    source: ercot-nprr1309-puct-report
    locator: "Revision Description, item 13 (NPRR1309, Board Priority DRRS)"
    quote: >-
      13. Given that DRRS has at least a four-hour duration, the Non-Spin duration requirements are reduced from four hours to two hours.
  - id: e21
    source: ercot-nprr1309-puct-report
    locator: "Decision rows (PUCT Report, 9 July 2026)"
    quote: >-
      On 7/9/26, the PUCT approved NPRR1309 and accompanying ERCOT Market Impact Statement as presented in Project No. 54445, Review of Protocols Adopted by the Independent Organization.
  - id: e22
    source: ercot-nprr1309-puct-report
    locator: "Opposing TAC votes, Cooperative/LCRA"
    quote: >-
      LCRA voted ‘No’ on the TAC motion as the modification of the Non-Spin duration to two-hours is premature without more analysis. This decision should not be made until performing a holistic reliability analysis under the annual Ancillary Services Methodology study prior to the implementation of NPRR1309. Given that the statutory requirement for DRRS states that participating capacity should have a duration of “at least four hours”, it is quite possible that a holistic review would suggest that a duration longer than four hours is necessary to support ERCOT’s reliability needs. In that scenario, it is also possible that Non-Spin may need to retain its current four-hour duration. Furthermore, with Non-Spin moving towards a two-hour duration, it is likely that more batteries will receive a greater share of Non-Spin awards.
  - id: e23
    source: ercot-nprr1282-puct-report
    locator: "Justification of Reason for Revision, Non-Spin bullet (NPRR1282)"
    quote: >-
      Non-Spin duration should remain at least at four hours: Based on historical Non-Spinning Reserve (Non-Spin) risk-relevant deployments and sustained under-forecast error in six hour-ahead net load, the duration requirement for Non-Spin should remain at not less than four hours.
  - id: e24
    source: imm-nprr1309-comments-2026-02
    locator: "IMM comments of 3 February 2026, section 4, Reduce Non-Spin Duration Requirement to One Hour"
    quote: >-
      Given that DRRS is specifically designed to manage uncertainty with a statutory 4-hour duration requirement, it will serve this function moving forward, thus replacing Non-Spin. As a result, we recommend that the implementation of DRRS should at the same time relax the duration requirement for Non-Spin from 4 hours to 1 hour.
  - id: e25
    source: imm-som-2025
    locator: "page 63 (OCR), Chapter III.B, Ancillary Services Market"
    quote: >-
      After NPRR 1282 took effect, RTC-SCED explicitly enforced the four-hour duration requirement for NSRS, reinforcing a structural design flaw that predictably inflated NSRS prices.
  - id: e26
    source: ercot-as-methodology-2026
    locator: "Methodology, ECRS and Non-Spin Requirement Details, Procedure (effective 1 January 2026)"
    quote: >-
      The convergence criteria will ensure that the ECRS and Non-Spin requirements computed (12 x 24 = 8760 values) are setup such that there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg Up and RRS or Watch threshold ( Physical Responsive Capability (PRC) = 3,000 MW), whichever is higher, due to uncertainty in net load (load – wind – solar) forecast and conventional resource availability.
  - id: e27
    source: ercot-as-methodology-2026
    locator: "Methodology, ECRS and Non-Spin Requirement Details, Procedure"
    quote: >-
      Risk credits include historic online capacity that can be ramped to in 30-minutes and sustained for 4 hours, and historic offline capacity that can be brought online in 30 minutes.
  - id: e28
    source: ercot-as-methodology-2027
    locator: "Board presentation (September 2026), Impacts on Quantities for ECRS and NSRS"
    quote: >-
      Non-Spinning Reserve Service = Reserved capacity from Resources that respond within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate — caused by net load forecast error and resource forced outages — until additional resources are committed.
  - id: e29
    source: imm-som-2025
    locator: "page 62 (OCR), Figure 25 inset table, annual average DAM prices ($ per MWh), NSRS row"
    quote: >-
      NSRS $81.56 $23.24 $15.53 $7.13 $3.65
  - id: e30
    source: imm-som-2025
    locator: "page 169 (OCR), Table A4: ERCOT 2025 Year at a Glance (Annual), $ millions"
    quote: >-
      Regulation Down $6 Responsive Reserve $52 NSRS $81
  - id: e31
    source: imm-som-2025
    locator: "page 62-63 (OCR), Chapter III.B, AS Prices"
    quote: >-
      Two structural factors drove this price premium: oversized NSRS procurement volume on a capacity basis and the associated four-hour duration requirement.
  - id: e32
    source: imm-som-2025
    locator: "page 149 (OCR), Recommendations, 2024-2"
    quote: >-
      for NSRS for energy storage resources, which must maintain a state of charge four times their NSRS obligation. For example, a 10 MW NSRS award would require 40 MWh of stored capacity.
  - id: e33
    source: imm-som-2025
    locator: "page 161 (OCR), Appendix I, Figure A5 discussion (5 December 2025 to February 2026)"
    quote: >-
      Figure A5 shows that NSRS clears four times higher than ECRS and eight times higher than RRS on average, consistent with the ratio of their duration requirements shown in Table A1.
  - id: e34
    source: ercot-summer-2026-review
    locator: "Ancillary services, Key Takeaways (summer 2026)"
    quote: >-
      In times of abundance and when it is cost-effective, ERCOT procures more Non-Spin procurement than the AS Plan calls for. Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, offsetting a decline in the Plan from 86 to 66 GWh/day.
  - id: e35
    source: ercot-summer-2026-review
    locator: "Ancillary services, Key Takeaway on day-ahead prices (summer 2026)"
    quote: >-
      Day-ahead ancillary service prices have been trending lower in summer 2026 compared to 2024 and 2025, except for Non-Spin.
  - id: e36
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), fixed parameters table"
    quote: >-
      ECRSMWMIN MW 40 NSMWMIN MW 10
  - id: e37
    source: np-04
    locator: "Section 4.4.12, paragraph (7)(a), Max Demand Price table"
    quote: >-
      Non-Spin Max Demand Price $/MWh VOLL
  - id: e38
    source: np-03
    locator: "Section 3.16, paragraph (3), pending box [NPRR1128, NPRR1171, and NPRR1213 ...]"
    quote: >-
      the maximum amount of Non-Spin that can be provided by Distribution Generation Resources (DGRs) and Distribution Energy Storage Resources (DESRs) that are interconnected to a distribution circuit that is subject to Load shed
  - id: e39
    source: np-03
    locator: "Section 3.16, paragraph (3)"
    quote: >-
      any minimum capacity required from Security-Constrained Economic Dispatch (SCED)-dispatchable Resources to provide Non-Spinning Reserve (Non-Spin)
  - id: e40
    source: np-08
    locator: "Section 8.1.1.4.3, paragraph (5)"
    quote: >-
      Two Load Resource performance failures within any rolling 365-day period shall result in disqualification of that Load Resource.
  - id: e41
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments of 24 April 2026, Summary"
    quote: >-
      The IMM no longer supports Nodal Protocol Revision Request (NPRR) 1309 as recommended by PRS. We recommend that the two-hour duration requirement for Energy Storage Resources (ESRs) participating in Non-Spinning Reserve (Non-Spin) be reinstated at the TAC meeting, as amended by these comments, and approved to be forwarded to the Board of Directors.
  - id: e42
    source: imm-nprr1309-comments-2026-04
    locator: "IMM comments of 24 April 2026, Comments (ERCOT's stated plan)"
    quote: >-
      In related public discussions, ERCOT has noted multiple times that they would reduce the ESR duration requirement for Non-Spin to two hours when the Dispatchable Reliability Reserve Service (DRRS) product was implemented since DRRS would cover out-hours 3 - 6. This, in our view, was a critical part of NPRR1309.
---

## Definition

Non-Spinning Reserve (Non-Spin) is an ancillary service provided by off-line generation that can be synchronized and ramped to a specified output within 30 minutes, or by load that can be interrupted within 30 minutes, and that can sustain that level for at least four consecutive hours. It may also be provided from unloaded On-Line capacity that meets the 30-minute response requirements, is reserved exclusively for this service and can be sustained for at least four consecutive hours. [e1]

## How it works

Generation Resources, on-line or off-line, qualify if they can ramp to a specified output within 30 minutes and run at it for at least four consecutive hours. [e2] Controllable Load Resources qualified for SCED can also provide it if they can reach an ERCOT-instructed consumption level within 30 minutes and hold it for four hours. [e3] Non-Spin may only be provided from capacity that is not fulfilling any other energy or capacity commitment. [e15]

For Off-Line Generation Resources, and the portion of On-Line Generation Resources available only through power augmentation, ERCOT deploys Non-Spin by operator Dispatch Instruction, under a TAC-approved procedure that starts when a threshold of capability available to SCED is reached. Operators may also use it to recover deployed RRS or ECRS or when other Emergency Conditions exist, and a deployment is always 100% of the individual resource's award. [e4] Once off-line capacity is deployed and on line, SCED determines its energy, and off-line resources offering Non-Spin must supply an Energy Offer Curve. [e6]

Qualification and performance: a Resource takes a qualification test when On-Line, and the amount it is qualified for On-Line is limited to what it can ramp or unload in 30 minutes. [e17] The maximum quantity any Resource is qualified for is limited to what it can sustain for at least four hours. [e18] When ERCOT manually deploys Non-Spin, an Off-Line Generation Resource must be On-Line with an Energy Offer Curve within 25 minutes of the instruction, with telemetered net generation at or above its telemetered LSL multiplied by a factor defined in the business practices. [e19] A Load Resource that is not a CLR is disqualified after two performance failures in a rolling 365-day period. [e40]

## Formula

Non-Spin quantity in the AS Plan comes from a probabilistic model. ERCOT's AS Methodology effective 1 January 2026 sets the combined ECRS and Non-Spin requirement so there is a 1 in 10-year probability of operational reserves dropping below the sum of procured Reg-Up and RRS or the Watch threshold (PRC = 3,000 MW), whichever is higher. [e26] The model credits historic online capacity that can be ramped to in 30 minutes and sustained for four hours, and historic offline capacity that can be brought online in 30 minutes. [e27] The Protocols also provide for a minimum Non-Spin capacity in the Minimum Contingency Level, with a current value of 10 MW in the ASDC disaggregation, and a Non-Spin maximum demand price equal to VOLL. [e36][e37]

## ERCOT context

The IMM describes Non-Spin as covering intra-hour net load forecast uncertainty that would otherwise cause under-commitment or inefficient dispatch. [e7] ERCOT's staff presentation for the 2027 methodology describes it as reserved capacity responding within 30 minutes to cover multi-hour capacity shortfalls the hourly commitment did not anticipate. [e28]

In 2025 NSRS was the highest-priced AS product throughout the year, which pushed controllable loads toward it, and in May the procurement target was increased by 1,000 MW for hours ending 19-22 on May 20, pushing the NSRS price to average $320 per MWh over those hours. [e9][e8] The IMM's inset table of annual average prices reads $81.56, $23.24, $15.53, $7.13 and $3.65 per MWh for 2021 through 2025, and 2025 NSRS charges were $81 million (OCR). [e29][e30] The IMM attributes the premium to oversized NSRS volume and the four-hour duration requirement. [e31] ESRs supplied 24% of NSRS in 2025. [e10]

Duration is the live issue. In its NPRR1282 analysis, ERCOT concluded Non-Spin duration should remain at least four hours, based on risk-relevant deployments and sustained under-forecast error in six-hour-ahead net load. [e23] The IMM says that after NPRR1282 took effect RTC-SCED explicitly enforces the four-hour duration for NSRS, and that this inflated NSRS prices; in Recommendation 2024-2 it proposes one hour, noting an ESR must hold four times its NSRS obligation (a 10 MW award needs 40 MWh). [e25][e32] The IMM also reports that, from 5 December 2025 through February 2026, NSRS cleared four times higher than ECRS and eight times higher than RRS on average, consistent with their duration ratios. [e33]

NPRR1309 (DRRS) addresses it: it reduces the Non-Spin duration requirements from four hours to two on the stated basis that DRRS has at least a four-hour duration. [e20] The IMM, in February 2026 comments, recommended relaxing Non-Spin to one hour when DRRS is implemented, and in April 2026 comments said it no longer supported the PRS version of NPRR1309, asking that the two-hour requirement for ESRs in Non-Spin be reinstated at TAC. [e24][e41] LCRA voted no at TAC, calling the two-hour change premature without more analysis. [e22] The PUCT approved NPRR1309 on 9 July 2026, with the Protocol change applying upon system implementation. [e21][e13] The Protocol text for the two-hour requirement is therefore still pending text and four hours remains the rule in force. [e13]

On supply, ERCOT's summer 2026 review says Non-Spin procurement above the plan grew from 25 GWh/day in June to roughly 48 GWh/day in July and August, and that day-ahead AS prices trended lower than 2024 and 2025 except for Non-Spin. [e34][e35]

## Key facts

- Non-Spin ramps to a specified output within 30 minutes and holds it for at least four consecutive hours (current Protocol text). [e1]
- Non-Spin deployment is always 100% of that awarded on an individual Resource. [e4]
- Operators may use Non-Spin to recover deployed RRS or ECRS. [e4]
- 2025: NSRS was the highest-priced AS product; ESRs provided 24%. [e9][e10]
- Non-controllable load resources cannot hold an active UFR and also provide NSRS, so they choose NSRS or RRS. [e12]
- NPRR1309, approved by the PUCT on 9 July 2026, would cut the duration to two hours on implementation. [e20][e21]
- The Protocols have the ERCOT Board review and recommend approval of ERCOT's methodology for determining any minimum capacity required from SCED-dispatchable Resources to provide Non-Spin; a cap on Non-Spin from DGRs and DESRs on load-shed circuits appears only in pending text (NPRR1128, NPRR1171, NPRR1213). [e39][e38]

## Say it like this

Non-Spin is the slow reserve: capacity that can be brought on or ramped within 30 minutes and held for hours, used to cover forecast error and to refill faster reserves. In 2025 it was the most expensive AS product. [e1][e4][e9]

## Common confusion

Despite the name, Non-Spin is not only off-line capacity: on-line generation and ESRs can also provide it. [e2][e10] The four-hour duration is the current Protocol text, and a two-hour change is pending under NPRR 1309 even though the PUCT has approved it. [e11][e13][e21]

## Questions

### How is Non-Spin deployed?

For Off-Line Generation Resources (and the power-augmentation portion of On-Line Generation Resources), by operator Dispatch Instruction under a TAC-approved procedure, always for 100% of the award, after which SCED sets the energy dispatched from the deployed resource. [e4][e6]

### Why was Non-Spin expensive in 2025?

The IMM says NSRS was the highest-priced AS product throughout 2025 and that the procurement target was increased by an additional 1,000 MW for HE 19-22 on May 20, 2025, which caused the NSRS price to average $320 per MWh during that period; it also points to oversized volume and the four-hour duration. [e9][e8][e31]

### Why does a four-hour duration raise the price?

The IMM argues an ESR must hold four times its NSRS obligation, for example a 10 MW award needs 40 MWh. This is the IMM's view, not a Protocol statement. [e32]

### Why did ERCOT tie the duration cut to DRRS?

ERCOT's NPRR1309 text says that because DRRS has at least a four-hour duration, Non-Spin duration is reduced to two hours. [e20] The IMM says ERCOT has noted multiple times that it would reduce the ESR duration requirement for Non-Spin to two hours when DRRS was implemented, since DRRS would cover out-hours 3 - 6; the IMM itself recommended one hour. [e42][e24]

### What if the duration were cut and ESRs took more Non-Spin?

LCRA's dissent noted the concern that a two-hour duration would let more batteries receive a greater share of awards; the IMM argues the four-hour rule is what constrains ESRs. [e22][e32] (Guidance: weigh both views as party positions, not findings.)

### How is the Non-Spin quantity chosen?

By a probabilistic model sized to a 1-in-10-year risk of reserves falling below the Watch threshold of 3,000 MW PRC or the sum of Reg-Up and RRS, whichever is higher. [e26]

## Open items

- NPRR1309 is approved but takes effect only on system implementation (project estimate 20 to 30 months in the PUCT report); until then four hours applies. [e21][e13]
- The IMM's 2025 Table A1 (duration requirements) and the NSRS clearing price history in real time under RTC are not quoted.
- The AS Methodology's value for Non-Spin minimum capacity from SCED-dispatchable resources and the DGR/DESR cap are not in the saved sources beyond the Protocol references.
- Whether the 2027 AS Methodology was approved by the PUCT is not in the saved sources.
