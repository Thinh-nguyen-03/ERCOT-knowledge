---
id: pcm
name: PCM (Performance Credit Mechanism)
aliases: [PCM, Performance Credit Mechanism, performance credits, PCs, Project 55000, PURA 39.1594, reliability program, HB 1500 guardrails]
kind: rule
domain: reliability
level: 2
lenses: [analyst, portfolio, structuring]
as_of: 2026-11-21
depth: deep
links:
  - to: resource-adequacy
    type: related
    note: The PUCT adopted the PCM as its preferred Phase II market design change; it would have had LSEs buy credits earned by availability in the highest-risk hours. [e2][e1]
  - to: texas-legislature
    type: regulates
    note: HB 1500 codified the PCM guardrails, including the $1 billion annual net cost cap, in PURA 39.1594. [e14][e3]
  - to: rtc-b
    type: prerequisite-of
    note: The statute bars the PCM until ERCOT begins implementing real-time co-optimization; ERCOT said PCM would come only after RTC+B. [e5][e13]
  - to: ordc
    type: related
    note: The multi-step ORDC price floor of November 2023 was the bridge solution, and PURA 39.1594(a)(9) requires bridge changes to be removed within a year of a program's start. [e11][e27]
  - to: drrs
    type: contrasts-with
    note: E3 found DRRS as defined in NPRR1235 would incent less than 100 MW of gas CT capacity; the Chairman pointed resources to RTC+B and DRRS rather than the PCM as designed. [e33][e10]
  - to: reliability-standard
    type: related
    note: E3 found an additional 10,388 MW beyond the PCM would be needed to meet the reliability standard's 0.1 LOLE criterion. [e19]
  - to: imm
    type: related
    note: The IMM put long-term PCM net costs at $350 million to $725 million, against ERCOT/E3's approximately $12 million. [e9]
  - to: energy-only-market
    type: contrasts-with
    note: E3 and PUCT Staff measured the PCM against the energy-only design; the IMM called the PCM a novel form of capacity market settled ex post. [e8][e34]
  - to: energy-storage-resource
    type: related
    note: E3 found batteries would see a 29% margin increase under the PCM, and could have an incentive to withhold discharge in PC hours. [e30][e31]
evidence:
  - id: e1
    source: imm-som-2023
    locator: "Appendix, Performance Credit Mechanism"
    quote: "The PCM, as described by E3, establishes a requirement for LSEs to purchase “performance credits” (PCs) – earned by generators based on their availability to the system during the top 30 hours of highest risk – at a centrally determined clearing price."
  - id: e2
    source: imm-som-2023
    locator: "Executive Summary, Other Reforms Underway or Recommended"
    quote: "On January 19, 2023, the PUCT adopted the PCM as its preferred Phase II market design change, but delayed implementation pending consideration by the Texas Legislature."
  - id: e3
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(1)"
    quote: "the commission may not require retail customers or load-serving entities in the ERCOT power region to purchase credits designed to support a required reserve margin or other capacity or reliability requirement unless the commission ensures that:(1)  the net cost to the ERCOT market of the credits does not exceed $1 billion annually, less the cost of any interim or bridge solutions that are lawfully implemented, except that the commission may adjust the limit:(A) proportionally according to the highest net peak demand year-over-year with a base year of 2026; and(B) for inflation with a base year of 2026;"
  - id: e4
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(2)-(5)"
    quote: "(2)  credits are available only for dispatchable generation;(3)  the independent organization certified under Section 39.151 for the ERCOT power region is required to procure the credits centrally in a manner designed to prevent market manipulation by affiliated generation and retail companies;(4)  a generator cannot receive credits that exceed the amount of generation bid into the forward market by that generator;(5)  an electric generating unit can receive a credit only for being available to perform in real time during the tightest intervals of low supply and high demand on the grid, as defined by the commission on a seasonal basis;"
  - id: e5
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(10)"
    quote: "(10)  the independent organization certified under Section 39.151 for the ERCOT power region begins implementing real time co-optimization of energy and ancillary services in the ERCOT wholesale market before the program is implemented;"
  - id: e6
    source: pura-39
    locator: "PURA Sec. 39.1594(d)"
    quote: "Before the commission adopts a program described by Subsection (a), the commission shall require the independent organization certified under Section 39.151 for the ERCOT power region and the wholesale electric market monitor to complete an updated assessment on the cost to and effects on the ERCOT market of the proposed reliability program and submit to the commission and the legislature a report on the costs and benefits of continuing the program."
  - id: e7
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo, Project 55000 Item 47 (2024-12-13), p. 1 and Staff's Final Recommendation, p. 2"
    quote: "After reviewing the ERCOT/E3 and IMM assessments, Staff recommends not moving forward with the PCM as currently designed."
  - id: e8
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2"
    quote: "The PCM, as designed, is anticipated to incentivize 780 MW of additional dispatchable generation relative to the energy-only market design, which would reduce the projected long-term equilibrium Loss of Load Expectation (LOLE) from 2.67 days per year to 2.18 days per year."
  - id: e9
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2, Alternative design choices"
    quote: "The ERCOT/E3 analysis found that the $1 billion of PCM costs would almost be offset by a reduction in energy and ancillary service costs, resulting in the net cost of the PCM coming out to approximately $12 million. This is well below the $1 billion net cost cap imposed by statute. However, the IMM stated that the reduction in energy and ancillary service costs are unlikely to offset the PCM costs to the degree that ERCOT/E3 indicated. In its assessment, the IMM stated that, while higher capacity margins induced by the PCM will reduce the frequency of shortage pricing, the long-term net costs of PCM with the gross cap in place may be in the range of $350 million to $725 million."
  - id: e10
    source: puct-pcm-chair-memo
    locator: "Chairman Gleeson memorandum (2024-12-18) for the 2024-12-19 Open Meeting, Item 17"
    quote: "After considering the ERCOT/E3 and IMM assessments and Commission Staffs summary of their work, I don't believe that the PCM, as currently designed, will provide the reliability benefits needed in the ERCOT market. While reconsideration of the PCM may be appropriate in the future, at this point I believe our collective resources are best directed toward implementing other market design initiatives, including but not limited to RTC+B and DRRS."
  - id: e11
    source: imm-som-2023
    locator: "Executive Summary, shortage pricing bullets"
    quote: "In November 2023, ERCOT implemented a multi-step ORDC price floor, a “bridge solution” to raise the incentive to build new dispatchable resources until the Performance Credit Mechanism (PCM) is implemented."
  - id: e12
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 1"
    quote: "After several months of discussion and engagement, including multiple rounds of public comment and workshops, the Commission selected the final PCM design parameters at its August 29,2024 open meeting."
  - id: e13
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 4, ERCOT Assessment"
    quote: "ERCOT also noted that, consistent with PURA, PCM would not be implemented until after the implementation of RTC+B."
  - id: e14
    source: imm-som-2023
    locator: "Executive Summary, footnote 6"
    quote: "House Bill 1500 codified these legislative guardrails for the potential design of the PCM in PURA § 39.1594."
  - id: e15
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2, lead-in to the 780 MW bullet"
    quote: "The ERCOT/E3 assessment showed that, while the PCM would improve the resource adequacy picture in ERCOT, the additional capacity that would be incentivized is minimal."
  - id: e16
    source: puct-minutes-2024-12-19
    locator: "PUCT Open Meeting Minutes, December 19, 2024, Item 17, p. 3"
    quote: "Project No. 55000 – Performance Credit Mechanism (PCM). (Discussion and possible action) Werner Roth and Chris Brown Action: Adopted Staff’s final recommendation on PCM."
  - id: e17
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 1"
    quote: "On February 29,2024, ERCOT and its consultant, Energy and Environmental Economics, Inc. (E3), filed a draft strawman design with the Commission that identified 37 Performance Credit Mechanism (PCM) design parameter decisions that the Commission would need to make before the PCM design could be finalized."
  - id: e18
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 1"
    quote: "The PUCT received the updated assessments from both ERCOT5 and the IMM6 on December 6,2024. The IMM subsequently filed a revised version of its assessment to reflect the updated CONE value on December 10, 2024."
  - id: e19
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 5, E3 Assessment key quantitative results"
    quote: "An additional 10,388 MW of natural gas CT capacity (beyond that incentivized by the chosen PCM design) would be needed to meet the 0.1 LOLE criteria in the reliability standard."
  - id: e20
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2"
    quote: "Throughout the ERCOT/E3 assessment, the specific design parameter that most significantly limits the effectiveness of the PCM is the $1 billion gross cost cap. The decision to use a gross cap, as opposed to a more flexible net cost cap calculation, was thoroughly debated and discussed before the final design parameters were decided."
  - id: e21
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 3"
    quote: "We only have two assessments ofthe PCM with the gross cost cap in place, yet their estimates on the net cost implications of PCM differ by an order of magnitude. Other parties, conducting their own independent assessment, would likely come to different conclusions about the net cost impacts. Thus, any proceeding to determine if a PCM utilizing a net cost cap is compliant with statute would likely be contentious. As Staff has previously stated, the only way to ensure compliance with the statute's language around a net cost cap is to utilize a gross cost cap on the PCM."
  - id: e22
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2, Staff's Final Recommendation"
    quote: "In its cover memo, ERCOT recommended that the Commission consider additional refinements to the PCM's design that could allow it to have a more sub stantive impact on reliability before eliminating the PCM as a potential option."
  - id: e23
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 4, ERCOT Assessment"
    quote: "Ultimately, the Commission selected a CONE of $140 per kW-year based on ERCOT' s update to Brattle' s sensitivity in the CONF, study for a Frame CT reference technology with a 20-year economic lifetime assumption levelized in real dollars."
  - id: e24
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 7, Performance Incentives and Penalties"
    quote: "A generator that clears in the forward PCM market and then is not available in the PCM market is penalized at two percent of the forward market price, in addition to the requirement to buy back the full quantity at the actual PCM market price."
  - id: e25
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 9, IMM conclusion 4"
    quote: "The trailing one-year net energy and ancillary service revenue rule for determining the PCM demand curve would likely introduce substantial year-to-year volatility in costs absent the cap."
  - id: e26
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 8, IMM conclusions 1 and 3"
    quote: "Long-term net costs would be higher if the $1 billion annual PCM cost cap were removed. The IMM estimated that these costs would range from $930 million to $2 billion per year."
  - id: e27
    source: pura-39
    locator: "PURA Sec. 39.1594(a)(6)-(9)"
    quote: "(6)  a penalty structure is established, resulting in a net benefit to load, for generators that bid into the forward market but do not meet the full obligation;(7)  any program reliability standard reasonably balances the incremental reliability benefits to customers against the incremental costs of the program based on an evaluation by the wholesale electric market monitor;(8)  a single ERCOT-wide clearing price is established for the program and does not differentiate payments or credit values based on locational constraints;(9)  any market changes implemented as a bridge solution for the program are removed not later than the first anniversary of the date the program was implemented;"
  - id: e28
    source: pura-39
    locator: "PURA Sec. 39.1594(b)"
    quote: "(b)  This section does not require the commission to adopt a reliability program that requires an entity to purchase capacity credits."
  - id: e29
    source: pura-39
    locator: "PURA Sec. 39.1594(e)"
    quote: "If the commission adopts a program described by Subsection (a), the commission by rule shall prohibit a generator that receives credits through the program for a dispatchable electric generating unit operated by the generator from decommissioning or removing from service that unit while the generator participates in the program unless the decommissioning or removal from service begins after September 1, 2028, or the commission finds that the decommissioning or removal from service:(1)  is required by or is a result of federal law; or(2)  would alleviate significant financial hardship for the generator."
  - id: e30
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 5, E3 Assessment"
    quote: "The only resource classes that see a change of greater than one percent of expected revenues are battery storage and wind. Battery storage sees a 29% increase in margins under PCM while wind resources see a 1.2% reduction in margins."
  - id: e31
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 6, Market Efficiency"
    quote: "Additionally, duration-limited resources, such as batteries, have an incentive under the chosen PCM design to economically withhold discharge during PC Hours by bidding above the market clearing price to be able to retain charge and be \"available\" across all PC Hours, increasing costs without improving reliability."
  - id: e32
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 6, seasonal risk"
    quote: "90.2% of the loss of load hours occur in the winter, 8.4% in the summer, 1.4% in the fall, and zero percent in the spring."
  - id: e33
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 8, DRRS absent the PCM"
    quote: "E3 stated that, if DRRS is crafted as currently defined in NPRR1235, it would have negligible impacts on the total system capacity. Its analysis shows that DRRS would incent less than 100 MW of additional natural gas CT capacity into the market."
  - id: e34
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 8, Review of IMM Assessment"
    quote: "In its memo, the IMM stated that the PCM is a novel form of a capacity market because it is settled ex-post based on after-the-fact availability rather than ex-ante based on expected availability."
  - id: e35
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 8, IMM conclusion 1"
    quote: "The net costs of PCM in the short term are likely to be $1 billion per year because the IMM suggested the cost cap provision is likely to bind."
  - id: e36
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 2"
    quote: "The IMM stated that the capacity margin impact from the chosen PCM market design would be less than three percent over the long-term."
  - id: e37
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 3"
    quote: "ERCOT indicated that its Long-Term Reliability Assessment shows a forecasted 2026 ERCOT system having an LOLE of 0.51 days per year."
  - id: e38
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 3"
    quote: "Furthermore, the Commission may want a slate of options from which it can choose to achieve its resource adequacy target after the first resource adequacy assessment is conducted in 2026, should the analysis still show that the system is deficient."
  - id: e39
    source: puct-pcm-chair-memo
    locator: "Chairman Gleeson memorandum (2024-12-18)"
    quote: "We should also continue to explore other options for improving the reliability of the grid ahead of and during the upcoming 2026 reliability standard assessment."
  - id: e40
    source: imm-som-2023
    locator: "Appendix, Performance Credit Mechanism"
    quote: "The PC requirement is a fixed quantity that is determined in advance of the compliance period, while the settlement process occurs retroactively based on the quantity of PCs that are actually produced."
  - id: e41
    source: imm-som-2023
    locator: "Appendix, ORDC Price Floors"
    quote: "The bridging solution is a multi-step floor to the online ORDC price adders, with the first step of the floor at $10 per MWh when reserve levels are equal to or less than 7,000 MWs and the second step at $20 per MWh when reserves are equal to or less than 6,500 MW. The stated purpose of this multi-step floor is to provide targeted increases in resource revenues that align with the level of revenue increases expected from the PCM."
  - id: e42
    source: imm-som-2024
    locator: "2024 State of the Market Report, Executive Summary, ORDC discussion"
    quote: "In 2024, this price floor was binding for 247 SCED intervals and resulted in $11 million in additional revenue."
  - id: e43
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 7, cost of retention sensitivity"
    quote: "Under this alternative, the cost of retention was $75/kW-year instead of the $140/kW-year value used for CONE."
  - id: e44
    source: imm-som-2023
    locator: "Appendix, Performance Credit Mechanism"
    quote: "If the PCM is ultimately implemented, the IMM will be required to evaluate the reliability benefits compared to the costs of the design every two years and report such evaluation to the Texas Legislature."
  - id: e45
    source: pura-39
    locator: "PURA Sec. 39.1594, history note"
    quote: "Added by Acts 2023, 88th Leg., R.S., Ch. 410 (H.B. 1500), Sec. 23, eff. September 1, 2023."
  - id: e46
    source: imm-som-2023
    locator: "Executive Summary, Other Reforms Underway or Recommended"
    quote: "On December 6, 2021, the PUCT approved a blueprint for revisions to the design of the wholesale electric market, which included two phases."
  - id: e47
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 4, ERCOT Assessment"
    quote: "ERCOT noted that the current timeline to complete a full, simultaneous implementation ofRTC+B targets a launch date ofDecember 5,2025."
  - id: e48
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 7, cost of retention sensitivity"
    quote: "Using the cost of retention results in the PCM equilibrium LOLE decreasing from 0.67 days per year to 0.52 days per year, as the PCM results in an additional 1.3 GW of natural gas CT capacity being retained."
  - id: e49
    source: puct-pcm-staff-rec
    locator: "PUCT Staff memo (2024-12-13), p. 8, DRRS absent the PCM"
    quote: "As directed by ERCOT, E3 also reviewed the impacts of DRRS absent the PCM, as this new ancillary service would provide an additional revenue stream for ERCOT resources, which could incentivize new capacity into the market."
---

## Definition

The Performance Credit Mechanism (PCM) is a reliability program, proposed but never implemented, in which LSEs would have to buy "performance credits" earned by generators for being available during the top 30 hours of highest risk, at a centrally set clearing price. [e1] It did not go ahead as designed: in December 2024 PUCT Staff recommended not moving forward with the PCM as currently designed, and the minutes of the December 19, 2024 open meeting record that the PUCT adopted Staff's final recommendation on the PCM. [e7][e16]

## How it works

As E3 described it (per the IMM's 2023 report), generators earn credits by being available in the top 30 hours of highest risk, and LSEs must buy them at a centrally determined clearing price. [e1] The credit requirement is fixed before the compliance period, but settlement happens afterward, based on the credits actually produced. [e40] The IMM therefore called the PCM a novel form of capacity market, settled ex post on after-the-fact availability rather than ex ante on expected availability. [e34] On February 29, 2024 ERCOT and E3 filed a draft strawman that set out 37 design-parameter decisions, and the PUCT selected the final parameters on August 29, 2024. [e17][e12] The chosen design used a $1 billion gross cost cap, and the assessment used the CONE the Commission selected, $140/kW-year (a Frame CT with a 20-year life, levelized in real dollars). [e20][e23] E3 described the penalty as follows: a generator that clears forward but is unavailable pays two percent of the forward price and must buy back the full quantity at the actual PCM price. [e24] The IMM described the demand curve as set using trailing one-year net energy and ancillary service revenues. [e25]

State law fences in any such program. The commission may not require LSEs or retail customers to buy such credits unless net cost to the market does not exceed $1 billion annually, less the cost of lawful interim or bridge solutions; the commission may adjust that limit for peak demand growth and inflation with a base year of 2026 (among other conditions). [e3] Credits go only to dispatchable generation, ERCOT must buy them centrally, a generator cannot earn more credits than it bid into the forward market, and a unit earns credit only for being available in real time during the tightest intervals, defined seasonally by the PUCT. [e4] The program also needs a penalty structure that gives load a net benefit, a single ERCOT-wide price with no locational differences, and removal of any bridge-solution market changes within one year of the program's start. [e27] ERCOT must begin implementing real-time co-optimization before the program starts. [e5] Before adopting it, the PUCT must require ERCOT and the IMM to complete an updated assessment of the program's cost to and effects on the ERCOT market and to submit a cost-benefit report to the commission and the Legislature. [e6] The statute does not require the PUCT to adopt any credit program at all. [e28] If one were adopted, a credit-receiving generator could not retire a dispatchable unit while participating unless the retirement begins after September 1, 2028, or the PUCT finds it is required by federal law or would relieve significant financial hardship. [e29] Once a program existed, the IMM would have to evaluate its benefits against its costs every two years and report to the Legislature. [e44]

## Formula

Statutory cost limit (PURA 39.1594(a)(1)): net cost of credits to the market must not exceed $1 billion per year minus the cost of any lawful interim or bridge solutions. The PUCT may scale the $1 billion in proportion to the highest year-over-year net peak demand and for inflation, both from a 2026 base year. [e3] PUCT Staff's position was that the only way to ensure compliance with this net-cost language was to cap gross PCM cost at $1 billion. [e21]

Non-performance settlement under the chosen design, as E3 described it: penalty at 2% of the forward market price, plus buy-back of the full quantity at the actual PCM market price. [e24] (The memo does not say which quantity the 2% is applied to.)

## ERCOT context

The PUCT's December 2021 market-design blueprint had two phases. [e46] The PUCT adopted the PCM as its preferred Phase II market design on January 19, 2023, but delayed implementation until the Legislature weighed in. [e2] HB 1500 then codified the guardrails in PURA 39.1594, effective September 1, 2023. [e14][e45] In November 2023 ERCOT added a multi-step ORDC price floor as the "bridge solution" until the PCM could be implemented: $10/MWh when reserves are at or below 7,000 MW and $20/MWh at or below 6,500 MW. [e11][e41] The IMM reports that in 2024 the floor bound in 247 SCED intervals and added $11 million of revenue. [e42]

The assessments arrived on December 6, 2024, with a revised IMM version on December 10 reflecting the updated CONE. [e18] PUCT Staff's December 13 memo summarized them:
- ERCOT/E3: the PCM was anticipated to add 780 MW of dispatchable generation and cut long-term equilibrium LOLE from 2.67 to 2.18 days per year; meeting the 0.1 LOLE criterion would take another 10,388 MW of gas CT capacity. [e15][e8][e19]
- ERCOT/E3: net cost about $12 million per year, because energy and AS savings almost offset the $1 billion of PCM payments. [e9]
- IMM: net cost likely $1 billion per year in the short term because the cap would bind; $350 million to $725 million long term; and $930 million to $2 billion per year if the cap were removed. [e35][e9][e26]
- IMM: capacity margin impact under the chosen design less than three percent over the long term. [e36]
- E3: under a cost-of-retention sensitivity ($75/kW-year instead of $140), the energy-only LOLE fell to 0.67 days per year and the PCM to 0.52. [e43][e48]
- E3: 90.2% of loss-of-load hours fall in winter, 8.4% in summer, 1.4% in fall and none in spring. [e32]
- E3: batteries' margins rise 29% and wind's fall 1.2% under the PCM; batteries could have an incentive to withhold discharge in PC hours to stay "available". [e30][e31]
- E3: DRRS as defined in NPRR1235 would incent less than 100 MW of gas CT capacity. [e33]

ERCOT's own position, in its cover memo, was that the PUCT should consider refinements to give the PCM more impact on reliability before eliminating it. [e22] ERCOT also noted its LTRA modeling of a forecast 2026 system showed an LOLE of 0.51 days per year, and that RTC+B was then targeted for December 5, 2025. [e37][e47] Staff said the $1 billion gross cost cap was the parameter that most limited the PCM's effectiveness, and recommended not moving forward. [e20][e7] Chairman Gleeson wrote that he did not believe the PCM as designed would provide the reliability benefits needed and that resources were better directed to RTC+B and DRRS, while saying reconsideration may be appropriate in the future. [e10] At the December 19, 2024 open meeting the PUCT adopted Staff's final recommendation on the PCM. [e16] Staff suggested the PUCT may want a slate of options after the first resource adequacy assessment in 2026, and the Chairman asked to keep exploring options ahead of and during the 2026 reliability standard assessment. [e38][e39]

## Key facts

- Statutory net cost cap: $1 billion a year, less the cost of interim or bridge solutions; the PUCT may adjust it for peak demand growth and inflation (base year 2026). [e3]
- Decided (December 19, 2024): the PUCT adopted Staff's final recommendation, which was not to move forward with the PCM as currently designed. [e16][e7]
- Design: 37 parameter decisions (February 29, 2024 strawman); final parameters chosen August 29, 2024; gross cost cap $1 billion; CONE $140/kW-year. [e17][e12][e20][e23]
- Credits available only to dispatchable generation, at a single ERCOT-wide price. [e4][e27]
- Must follow the start of real-time co-optimization; ERCOT said PCM would come only after RTC+B. [e5][e13]
- ERCOT/E3 assessment: 780 MW more dispatchable capacity; LOLE 2.67 to 2.18 days per year; 10,388 MW more still needed for 0.1 LOLE. [e8][e19]
- Net cost estimates with the gross cap: approximately $12 million (ERCOT/E3) versus $350 million to $725 million long term (IMM). [e9]
- Bridge solution: multi-step ORDC floor from November 2023; it bound in 247 SCED intervals and added $11 million in 2024. [e11][e42]

## Timeline

- 2021-12-06: PUCT approves a two-phase wholesale market design blueprint. [e46]
- 2023-01-19: PUCT adopts the PCM as its preferred Phase II design but delays implementation pending the Legislature. [e2]
- 2023-09-01: HB 1500's PURA 39.1594 takes effect, including the $1 billion net cost cap. [e45][e3]
- 2023-11: ERCOT implements the multi-step ORDC price floor as the bridge solution. [e11]
- 2024-02-29: ERCOT and E3 file the draft strawman with 37 design-parameter decisions. [e17]
- 2024-08-29: PUCT selects the final PCM design parameters. [e12]
- 2024-12-06: ERCOT/E3 and IMM assessments filed; 2024-12-10: revised IMM assessment with the updated CONE. [e18]
- 2024-12-13: PUCT Staff recommends not moving forward with the PCM as currently designed. [e7]
- 2024-12-18: Chairman Gleeson's memo says he does not believe the PCM as currently designed will provide the reliability benefits needed. [e10]
- 2024-12-19: at its open meeting the PUCT adopts Staff's final recommendation on the PCM. [e16]

## Say it like this

(Guidance) The PCM was Texas's proposed availability-credit program: LSEs would buy credits earned by dispatchable units that show up in the tightest hours, under a $1 billion net cost cap set by HB 1500. With the cap applied as a gross limit, ERCOT/E3 found it added only about 780 MW, so in December 2024 the PUCT adopted Staff's recommendation not to move forward with it as designed, and the Chairman pointed resources to RTC+B and DRRS. [e3][e20][e8][e16][e10]

## Common confusion

(Guidance) PCM credits are earned by availability in the top 30 hours of highest risk and bought by LSEs; settlement is after the fact, which is why the IMM called it a novel capacity market. [e1][e40][e34] It is also not DRRS, which Staff described as a new ancillary service (see the drrs topic); the Chairman pointed resources to DRRS rather than the PCM as designed. [e49][e10] The $1 billion cap in statute is a net cost cap; the chosen design applied it as a gross cap, and whether net costs were near $12 million or hundreds of millions depended on the study. [e3][e20][e9]

(Guidance) "Shelved as designed" is not "repealed": PURA 39.1594 still sets the conditions for any future credit program, and the Chairman wrote that reconsideration may be appropriate in the future. [e3][e10]

## Questions

### Why did PUCT Staff recommend against the PCM?

After reviewing the ERCOT/E3 and IMM assessments, Staff recommended not moving forward with the PCM as currently designed. [e7] Its memo, summarizing the ERCOT/E3 assessment, says the PCM as designed was anticipated to incentivize 780 MW of additional dispatchable generation and reduce LOLE from 2.67 to 2.18 days per year, still far from the 0.1 criterion. [e15][e8][e19]

### Why use a gross cap if the statute says net cost?

Staff said the two assessments' net-cost estimates differed by an order of magnitude, that any proceeding to test a net-cost cap would likely be contentious, and that the only way to ensure compliance was a gross cap. [e21] The cost of that choice, per Staff, was that the gross cap was the parameter that most limited the PCM's effectiveness. [e20]

### What guardrails does PURA 39.1594 put on a credit program?

A $1 billion annual net cost cap, credits only for dispatchable generation, central procurement by ERCOT, no more credits than a generator bid forward, credit only for real-time availability in the tightest seasonal intervals, a penalty structure with a net benefit to load, one ERCOT-wide price, and real-time co-optimization first. [e3][e4][e27][e5]

### Why do the ERCOT/E3 and IMM cost estimates differ so much?

ERCOT/E3 found the $1 billion of PCM payments almost fully offset by lower energy and ancillary service costs, for a net of approximately $12 million. The IMM said the reduction is unlikely to offset PCM costs to that degree and put long-term net costs with the gross cap in place at $350 million to $725 million. [e9] For the first years the IMM expected net costs of about $1 billion because the cap would bind. [e35]

### What if the PCM had been adopted: what happens to the ORDC floor?

PURA requires any bridge-solution market changes to be removed no later than the first anniversary of the program's start. [e27] The multi-step ORDC floor was that bridge solution. [e11]

### Why might batteries have done well, and why is that a concern?

E3 found battery margins rising 29% under the PCM. [e30] It also said duration-limited resources would have an incentive to withhold discharge in PC hours to remain "available" across all of them, raising costs without improving reliability. [e31]

## Open items

- The December 19, 2024 minutes record only "Adopted Staff's final recommendation on PCM"; they are a summary, and no written order or any further instruction (for example on later reconsideration) is in the saved sources.
- The 2024 and 2025 IMM State of the Market reports and the 2026 IMM and ERCOT documents in the saved set do not discuss the PCM; no status after December 2024 was found, including whether the 2026 reliability assessment revived it.
- How the 2026 base-year adjustments to the cap in 39.1594(a)(1)(A)-(B) would be calculated is not covered by any saved source.
- The 37 design parameters themselves, the PC demand curve shape and the definition of "PC hours" are not in the saved sources; only the Staff memo's summaries are. The E3 strawman and the August 22 and 30, 2024 Staff memos are not saved.
- Whether the multi-step ORDC price floor survived the RTC+B go-live (December 2025) is not stated in the saved sources reviewed for this topic.
