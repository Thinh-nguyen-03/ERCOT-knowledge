---
id: winter-storm-uri
name: Winter Storm Uri (Feb 2021)
aliases: [Winter Storm Uri, Uri, February 2021 winter storm, February 2021 Extreme Cold Weather Event]
kind: event
domain: cases
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-21
depth: deep
links:
  - to: load-shed
    type: example-of
    note: Uri is the largest controlled firm load shed event in U.S. history according to the federal staff report. [e8]
  - to: uri-repricing
    type: related
    note: The PUCT orders that held real-time prices at $9,000 per MWh during load shed are covered in detail there. [e11]
  - to: securitization
    type: causes
    note: HB 4492 defines an uplift balance of up to $2.1 billion, the Protocols define a Securitization Default Balance of up to $800 million, and Protocol Section 26 covers collecting default charges. [e20][e19][e26]
  - to: weatherization
    type: causes
    note: SB 3 and 16 TAC §25.55 set mandatory weather emergency preparedness standards after the storm. [e17][e18]
  - to: offer-cap
    type: related
    note: The IMM says the peaker net margin threshold has been exceeded only once in ERCOT's history, on February 16, 2021, during Uri. [e14]
  - to: ffss
    type: causes
    note: The IMM says FFSS was implemented in 2022 in response to fuel supply disruptions during Uri. [e23]
  - to: retailer-defaults-2021
    type: causes
    note: Market participant short payments after the storm, including Brazos Electric's, are described there. [e13]
  - to: natural-gas-price
    type: related
    note: Texas gas hub prices spiked to over $400/MMBtu during the storm, according to the UT report. [e12]
  - to: eea
    type: example-of
    note: ERCOT went from EEA 1 at 12:15 a.m. to EEA 3 at 1:20 a.m. on February 15, 2021. [e5]
  - to: ers
    type: related
    note: At 12:15 a.m. on February 15 ERCOT deployed 847.15 MW of 30-minute ERS. [e35]
evidence:
  - id: e1
    source: ferc-nerc-uri
    locator: "Executive Summary, Key Findings and Causes (p. 15)"
    quote: "From February 8 through 20, in the Event Area, a total of 1,045 individual generating units-58 percent natural gas-fired, 27 percent wind, six percent coal, two percent solar, seven percent other fuels, and less than one percent nuclear-experienced 4,124 outages, derates or failures to start. Of those outages, derates, and failures to start, 75 percent were caused by either freezing issues (44.2 percent) or fuel issues (31.4 percent), as shown in Figure 3, below."
  - id: e2
    source: ferc-nerc-uri
    locator: "Executive Summary, Synopsis of Event (p. 11)"
    quote: "A confluence of two causes, both triggered by cold weather, led to the Event, part of a recurring pattern for the last ten years. First, generating units unprepared for cold weather failed in large numbers. Second, in the wake of massive natural gas production declines, and to a lesser extent, declines in natural gas processing, the natural gas fuel supply struggled to meet both residential heating load and generating unit demand for natural gas"
  - id: e3
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "Failures within the natural gas system exacerbated electricity problems. Natural gas production, storage, and distribution facilities failed to provide the full amount of fuel demanded by natural gas power plants."
  - id: e4
    source: ercot-uri-board
    locator: "Slide 13, Generation Capacity Out February 14 - 19, 2021"
    quote: "Peak Generation Out: 48.6% (52,277 MW out of 107,514 MW total installed capacity)"
  - id: e5
    source: ut-uri-timeline
    locator: "Section 2 (grid operations), p. 26"
    quote: "On Monday, February 15 at 00:15 CST, ERCOT declared an Energy Emergency Alert Level 1 (EEA 1), at 01:07 CST ERCOT moved to EEA 2,34 and at 01:20 CST, ERCOT declared an EEA 3 event and began \"firm load shed\" or \"blackouts.\"35 ERCOT did not return to normal operations until 10:36 CST Friday, February 19. The ERCOT system frequency reached a low of 59.302 Hz at roughly 1:55am on February 15, 2021."
  - id: e6
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT load shed on February 15 (p. 136-137, Figure 73)"
    quote: "At 1:51 a.m., frequency fell below the 59.4 Hz generator underfrequency relay trip level, starting the nine-minute time delay on those relays (see \"Below 59.4 Hz for 4m 23s\" caption and red shaded area in Figure 73, above). If the underfrequency relays had tripped, approximately 17,000 MW of generation would be outaged, potentially causing a total blackout of the ERCOT BA footprint."
  - id: e7
    source: ferc-nerc-uri
    locator: "Analysis section on manual firm load shed in ERCOT"
    quote: "By 7:00 p.m. on February 15, ERCOT had ordered 20,000 MW of manual firm load shed, which it sustained for nearly three days."
  - id: e8
    source: ferc-nerc-uri
    locator: "Executive Summary (p. 8-9)"
    quote: "The Event was the fourth cold-weather-related event in the last ten years to jeopardize BES reliability, 5 and with a combined 23,418 MW of manual firm load shed, 6 the largest controlled firm load shed event in U.S. history."
  - id: e9
    source: ferc-nerc-uri
    locator: "Executive Summary (p. 9)"
    quote: "More than 4.5 million people in Texas lost power during the Event, and some went without power for as long as four days, while exposed to below-freezing temperatures for over six days. 7 At least 210 people died during the Event, with most of the deaths connected to the power outages, of causes including hypothermia, carbon monoxide poisoning, and medical conditions exacerbated by freezing conditions."
  - id: e10
    source: ferc-nerc-uri
    locator: "Figure 67: Alerts Issued by ERCOT, SPP and MISO, February 14-20, 2021"
    quote: "2/15: EEA 1, 2 and 3. Firm load shed implemented at 1:20 a.m. 2/18, 12:42 a.m. Cancelled last of firm load shed orders 2/19: System recovering. ERCOT moved from EEA 3 to EEA 1."
  - id: e11
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "The price of electricity spiked to $9,000 per MWh and stayed there by orders of the PUCT, which suspended some market price setting rules during the electricity blackouts."
  - id: e12
    source: ut-uri-timeline
    locator: "Executive Summary, Findings"
    quote: "According to PUCT data, natural gas prices, normally much less than $10/MMBTU, spiked to over $400/MMBTU at Texas trading hubs."
  - id: e13
    source: ut-uri-timeline
    locator: "Section 3 (economic impacts), p. 65"
    quote: "On April 14, 2021, ERCOT reported cumulative aggregate \"short payments\" of approximately $2.9 billion, and that it would take 96 years to collect the amount outstanding using its standard Default Uplift Invoice process.119 This estimate was raised to $2.99 billion on May 14, 2021.120 Of that, $1.86 billion relates to the default of Brazos Electric Power Cooperative Inc., which filed for bankruptcy on March 1, 2021."
  - id: e14
    source: imm-som-2025
    locator: "Resource Adequacy chapter, Peaker Net Margin"
    quote: "Notably, this threshold has been exceeded only once in ERCOT's history, on February 16, 2021, during Winter Storm Uri."
  - id: e15
    source: ut-uri-timeline
    locator: "Section 3.3.1, Electricity Market Price Changes/Corrections During the Event, p. 62"
    quote: "If the LCAP had been allowed to come into effect, the LCAP calculation would have driven the market price higher than the HCAP on February 18 to $15,359/MWh."
  - id: e16
    source: ercot-uri-board
    locator: "Slide 17, Generation Weatherization"
    quote: "Generation owners and operators are not required to implement any minimum weatherization standard or perform an exhaustive review of cold weather vulnerability. No entity, including the PUC or ERCOT, has rules to enforce compliance with weatherization plans or enforce minimum weatherization standards."
  - id: e17
    source: sb3-87r
    locator: "SB 3 (87R), Section 13, new PURA §35.0021(c)(1)"
    quote: "inspect generation assets in the ERCOT power region for compliance with the reliability standards;"
  - id: e18
    source: puct-25-55
    locator: "16 TAC §25.55(c)(1), Winter season preparations"
    quote: "By December 1 each year, a generation entity must complete the following winter weather emergency preparation measures for each resource under its control."
  - id: e19
    source: np-02
    locator: "Section 2.1, definition of Securitization Default Balance"
    quote: "The amount financed by ERCOT pursuant to Public Utility Regulatory Act (PURA) Chapter 39, Restructuring of Electric Utility Industry, Subchapter M, Winter Storm Uri Default Balance Financing, as authorized by the Public Utility Commission of Texas (PUCT), but which may not exceed $800 million."
  - id: e20
    source: hb4492-87r
    locator: "HB 4492 (87R), new PURA Subchapter N, §39.652(4), definition of Uplift balance (clean .alt copy)"
    quote: "\"Uplift balance\" means an amount of money of not more than $2.1 billion that was uplifted to load-serving entities on a load ratio share basis due to energy consumption during the period of emergency for reliability deployment price adder charges and ancillary services costs in excess of the commission's system-wide offer cap, excluding amounts securitized under Subchapter D, Chapter 41. The term does not include amounts that were part of the prevailing settlement point price during the period of emergency."
  - id: e21
    source: hb4492-87r
    locator: "HB 4492 (87R), new PURA §39.651(3), definition of Period of emergency (bill line numbers appear in the text)"
    quote: "\"Period of emergency\" means the period beginning 27 12:01 a.m., February 12, 2021, and ending 11:59 p.m., February 20,"
  - id: e22
    source: puct-25-509
    locator: "16 TAC §25.509(b)(6)(B)"
    quote: "The high system-wide offer cap (HCAP) will be $5,000 per MWh for energy offers and $5,000 per MW per hour for ancillary service offers."
  - id: e23
    source: imm-som-2024
    locator: "Recommendations, 2023-4 Align FFSS Pricing and Deployment Practices with Market Operations"
    quote: "The Firm Fuel Supply Service (FFSS) was implemented in 2022 in response to widespread generation shortfalls caused by fuel supply disruptions during Winter Storm Uri."
  - id: e24
    source: imm-som-2025
    locator: "Market Operations chapter, 6. Conservative Operations & RUC"
    quote: "Over the longer term, RUC activity in the last five years has been significantly higher than the norm before Winter Storm Uri. For example, resource-hours committed through RUC per year ranged from 202 to 613 from 2017 through 2020, whereas annual RUC commitments have consistently totaled thousands of resource-hours since 2021. The increase in out-of-market commitments through RUC is a fundamental feature of ERCOT’s practice of conservative operations."
  - id: e25
    source: imm-som-2025
    locator: "Resource Adequacy chapter, F. ERCOT's Reliability Standard, 1. Background"
    quote: "Senate Bill (SB) 3, which the 87th Texas Legislature passed in the aftermath of Winter Storm Uri in 2021, established the foundation for ERCOT's reliability standard."
  - id: e26
    source: np-26
    locator: "Section 26.2, Securitization Default Charges, paragraph (1)"
    quote: "ERCOT shall issue Invoices to Qualified Scheduling Entities (QSEs) and Congestion Revenue Right (CRR) Account Holders to collect the monthly amount determined by ERCOT to be necessary to repay the Securitization Default Balance."
  - id: e27
    source: ferc-nerc-uri
    locator: "Figure 18, comparison of the 2011, 2014, 2018 and 2021 events (maximum firm load shed row)"
    quote: "23,418 (ERCOT 20,000, SPP 2,718, MISO South 700)"
  - id: e28
    source: ercot-uri-board
    locator: "Slides 1-2, cover and disclaimer"
    quote: "Urgent Board of Directors Meeting ERCOT Public February 24, 2021 Disclaimer Information in this presentation is preliminary and represents the best available data at the time it was created."
  - id: e29
    source: ercot-summer-2026-review
    locator: "Summer 2026 Operational and Market Review (Board, 2026-09-14/15), slide 21 note"
    quote: "SWCAP is reduced to $2000/MWh from $5000/MWh after RTC go-live on 12/5/2025."
  - id: e30
    source: np-04
    locator: "Section 4.4.11, parameter table (Parameter / Unit / Current Value)"
    quote: "ECAP $/MWh 2,000 HCAP – DAM (DASWCAP) $/MWh 5,000 HCAP – RTM (RTSWCAP) $/MWh 2,000 LCAP $/MWh 2,000 PNM threshold $/MW-year 315,000"
  - id: e31
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 12 (p. 127)"
    quote: "On February 12 at 3:30 p.m. (and lasting until 5:11 pm), ERCOT BA declared a fuel supply emergency that could impact electric power system adequacy or reliability, although ERCOT did not end up declaring an EEA."
  - id: e32
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, Sunday February 14 (p. 129)"
    quote: "On Sunday night, February 14, at hour-ending 8 p.m., ERCOT’s system load reached an alltime winter peak of 69,871 MW, which remains ERCOT’s highest recorded actual winter peak load to date, since ERCOT operators needed to shed large amounts of firm load on Monday and Tuesday."
  - id: e33
    source: ercot-uri-board
    locator: "Slide 11, timeline Sunday February 14 - Monday February 15"
    quote: "7:06 pm New Winter Peak 69,222 MW"
  - id: e34
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 14 10 p.m. to February 15 (p. 130)"
    quote: "Over a three-hour period, approximately 6,000 MW of additional unplanned generation outages and derates occurred. These outages were primarily caused by freezing issues (52 to 60 percent of the outages during that period, as shown in Figure 70, below)."
  - id: e35
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 134)"
    quote: "At 12:15 a.m., in response to its responsive reserves dropping below 2,300 MW, ERCOT deployed 847.15 MW of 30-minute Emergency Response Service (ERS-30)."
  - id: e36
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 135)"
    quote: "At 1:18 a.m., ERCOT Physical Responsive Capability fell below 1,430 MW (criteria for EEA 3) to 1,377 MW. Frequency was at 59.932 Hz. At 1:20 a.m., ERCOT declared EEA 3 and instructed TOPs to shed 1,000 MW of firm load."
  - id: e37
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 137)"
    quote: "At 1:54 a.m., ERCOT frequency reached its lowest level of the Event at 59.304 Hz."
  - id: e38
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 137)"
    quote: "At 1:55 a.m., frequency rose to 59.401 Hz, above the generator underfrequency relay protection trip level, after remaining below 59.400 Hz for four minutes and 23 seconds."
  - id: e39
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 138)"
    quote: "The impact of this resource loss was offset by an additional 2,000 MW of load shedding ordered by ERCOT at 2:00 a.m., bringing the total load shed to 10,500 MW, as indicated in Figure 73, above."
  - id: e40
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 15 (p. 138)"
    quote: "Ultimately over the course of the Event, responsive reserves were less than 1,430 MW for approximately 4.5 hours on February 15, 1.9 hours on February 16, and 0.7 hours on February 17, and ERCOT shed a maximum of 20,000 MW of firm load by 7:00 p.m. on February 15."
  - id: e41
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 17-19 (p. 157)"
    quote: "As evening approached, additional generation that returned to service was sufficient to reduce load shed directives through the evening of February 17, and by 11:55 p.m., ERCOT issued instructions to restore all remaining load, for the first time since Monday, February 15."
  - id: e42
    source: ferc-nerc-uri
    locator: "Chronology, ERCOT, February 17-19 (p. 157)"
    quote: "On Friday, February 19, at 9:00 a.m., ERCOT downgraded its energy emergency to EEA 2, and by 10:35 a.m., ERCOT returned to normal operations, concluding the Event."
  - id: e43
    source: ercot-uri-board
    locator: "Slide 19, 2011 vs. 2021 Event Comparison table (columns 2011, 2021)"
    quote: "Maximum load shed requested (MW) 4,000 20,000 Duration load shed request (hours) 7.5 70.5 59,000 76,819 Estimated peak load (without load shed)"
  - id: e44
    source: ercot-uri-board
    locator: "Slide 8, Pre-Event Operational Preparation"
    quote: "Noted potential for 11,100 MW of forced outages due to gas restrictions based on gas company communications – more units affected during this event compared to previous cold weather events."
  - id: e45
    source: ercot-uri-board
    locator: "Slide 16, Key Events (Monday February 15 - Friday February 19), Thursday February 18"
    quote: "12:42 a.m. - Canceled last controlled outage orders - some outages remained due to ice storm damage; need for manual restoration and return of large industrial facilities."
  - id: e46
    source: imm-som-2021
    locator: "Section I, Table 1: Average Annual Real-Time Energy Market Prices by Zone, ERCOT row, page 16 (OCR); columns 2014-2020, 2021, 2021 w/o Uri"
    quote: "ERCOT $40.64 $26.77 $24.62 $28.25 $35.63 $47.06 $25.73 $167.88 $40.73"
  - id: e47
    source: imm-som-2021
    locator: "Section I, Real-Time Market Prices"
    quote: "Average real-time prices rose to $167.88 per MWh in 2021, more than 6 times higher than in 2020, due almost entirely to the effects of Winter Storm Uri."
  - id: e48
    source: imm-som-2021
    locator: "Executive Summary, Moving Forward from Winter Storm Uri"
    quote: "ERCOT short payments (money owed by entities that was not paid to ERCOT) during Winter Storm Uri exceeded $3 billion. Several retail electric providers were forced to exit the market and one large electric cooperative is seeking bankruptcy protection."
  - id: e49
    source: sb3-87r
    locator: "SB 3 (87R), Section 7, new PURA §15.023(b-1) (clean .alt copy)"
    quote: "Notwithstanding Subsection (b), the penalty for a violation of a provision of Section 35.0021 or 38.075 may be in an amount not to exceed $1,000,000 for a violation. Each day a violation continues or occurs is a separate violation for purposes of imposing a penalty."
  - id: e50
    source: sb3-87r
    locator: "SB 3 (87R), new PURA §38.074(a), Critical Natural Gas Facilities and Entities (clean .alt copy)"
    quote: "The commission shall collaborate with the Railroad Commission of Texas to adopt rules to establish a process to designate certain natural gas facilities and entities associated with providing natural gas in this state as critical during energy emergencies."
  - id: e51
    source: sb3-87r
    locator: "SB 3 (87R), new PURA §38.074(b)(2) (clean .alt copy)"
    quote: "provide for prioritizing for load-shed purposes during an energy emergency the facilities and entities designated under Subsection (a); and"
  - id: e52
    source: luminant-txsc-opinion
    locator: "PUCT v. Luminant Energy Co., No. 23-0231 (Tex. June 14, 2024), Part I.E (p. 11)"
    quote: "The storm’s fallout was substantial. All three commissioners resigned. The Legislature sprang into action, enacting laws to improve preparation for winter weather emergencies 26 and to stabilize the market by offering a securitization program to market participants who had suffered defaults or losses from the high prices."
  - id: e53
    source: ercot-griddy-notice
    locator: "ERCOT Market Notice M-G022621-01, February 26, 2021"
    quote: "On Friday, February 26, 2021, ERCOT revoked all rights of GRIDDY ENERGY LLC to conduct activity under the ERCOT Protocols due to a Payment Breach."
  - id: e54
    source: puct-51812-lcap-order
    locator: "Project 51812 (item 57), Order Reinstating Low System-Wide Offer Cap, March 3, 2021, p. 1"
    quote: "ERCOT remained in EEA3 through 9AM on February 19, 2021."
  - id: e55
    source: puct-25-53
    locator: "16 TAC §25.53, annexes to be included in the emergency operations plan, load shed annex"
    quote: "A load shed annex that must include: (i) procedures for controlled shedding of load; (ii) priorities for restoring shed load to service; and"
  - id: e56
    source: ercot-roadmap-2021-10
    locator: "Roadmap to Improving Grid Reliability (July 13, 2021; October 15, 2021 update), action 5"
    quote: "Require all market participants who own or operate generation resources and/or transmission/distribution power lines to submit a letter signed by their CEO twice a year attesting that their companies have completed their weatherization preparations to protect the electric grid for the summer and winter respectively."
  - id: e57
    source: luminant-coa-opinion
    locator: "Luminant Energy Co. v. PUCT, No. 03-21-00098-CV (Tex. App.-Austin 2023), Part I Background (p. 11)"
    quote: "The grid frequency that night was below 59.4 for a total of four minutes and three seconds, during which time two more rounds of load shed were ordered, of 3,000 megawatts"
  - id: e58
    source: luminant-txsc-opinion
    locator: "PUCT v. Luminant Energy Co., No. 23-0231 (Tex. June 14, 2024), Part I.C (p. 7)"
    quote: "That morning, the grid operated at or below 59.4 hertz for just over four minutes. Texas was fewer than five minutes away from a total grid collapse that would have plunged the state into darkness for weeks, maybe months."
---

## Definition

Winter Storm Uri was the February 2021 cold weather event in which, from February 8 through 20, 1,045 generating units in the event area had 4,124 outages, derates or failures to start. [e1] In ERCOT it led to firm load shed that began early on February 15, with 20,000 MW ordered by 7:00 p.m. that day. [e5][e7]

## How it works

The federal staff report names two causes, both triggered by cold weather: generating units unprepared for cold weather failed in large numbers, and the natural gas fuel supply struggled to meet both residential heating load and generating unit demand. [e2] Across the whole event area, 75 percent of the 4,124 outages, derates and failures to start were caused by freezing issues (44.2 percent) or fuel issues (31.4 percent). [e1] The UT Austin report adds that natural gas production, storage and distribution facilities did not deliver the full amount of fuel that gas power plants demanded. [e3] ERCOT had warned before the event: from gas company communications it noted potential for 11,100 MW of forced outages due to gas restrictions. [e44]

The build-up: on February 12 ERCOT declared a fuel supply emergency from 3:30 to 5:11 p.m. without declaring an EEA. [e31] On the night of February 14 load set a winter peak (69,871 MW in HE 20 per FERC-NERC; 69,222 MW at 7:06 pm on ERCOT's Board timeline). [e32][e33] From about 10 p.m. on February 14, roughly 6,000 MW of extra outages and derates hit in three hours, mostly from freezing. [e34]

The collapse: at 12:15 a.m. on February 15 ERCOT deployed 847.15 MW of 30-minute ERS as reserves fell below 2,300 MW, and moved through EEA 1, EEA 2 and EEA 3 by 01:20. [e35][e5] At 1:18 a.m. PRC fell to 1,377 MW, below the 1,430 MW EEA 3 criterion, and at 1:20 a.m. ERCOT declared EEA 3 and ordered the first 1,000 MW of firm load shed. [e36] Frequency dropped below the 59.4 Hz generator underfrequency trip level at 1:51 a.m.; the FERC-NERC team says that if those relays had tripped, about 17,000 MW of generation would have been lost, potentially causing a total blackout of the ERCOT footprint. [e6] Frequency bottomed at 59.304 Hz at 1:54 a.m. (FERC-NERC) and was back above 59.4 Hz at 1:55 a.m. after 4 minutes 23 seconds below it; by 2:00 a.m. ordered load shed totalled 10,500 MW. [e37][e38][e39]

At the worst point ERCOT reported 52,277 MW out of 107,514 MW of installed capacity unavailable, or 48.6%. [e4] By 7:00 p.m. on February 15, ERCOT had ordered 20,000 MW of firm load shed and held it for nearly three days; responsive reserves were below 1,430 MW (the EEA 3 criterion for PRC) for about 4.5 hours on February 15, 1.9 hours on February 16 and 0.7 hours on February 17. [e7][e40] By 11:55 p.m. on February 17 ERCOT issued instructions to restore all remaining load (FERC-NERC), and at 12:42 a.m. on February 18 it cancelled the last controlled outage orders, though some outages remained from ice damage and manual restoration (ERCOT). [e41][e45] On February 19 ERCOT dropped to EEA 2 at 9:00 a.m. and returned to normal operations at 10:35 a.m. (FERC-NERC); the PUCT describes ERCOT as in EEA3 through 9 a.m. that day. [e42][e54]

## ERCOT context

Prices: the UT report says the price of electricity went to $9,000 per MWh and stayed there by PUCT order, with some market price-setting rules suspended during the blackouts. [e11] Gas prices at Texas trading hubs went from normally much less than $10/MMBtu to over $400/MMBtu. [e12] The IMM's 2025 report says the peaker net margin threshold has been exceeded only once in ERCOT's history, on February 16, 2021. [e14] The UT report estimates that if the LCAP had taken effect, the cap formula would have pushed the price to $15,359/MWh on February 18, above the HCAP. [e15] For the year, the IMM puts the ERCOT average real-time price at $167.88 per MWh in 2021, more than six times 2020, almost entirely because of Uri; its table gives $40.73 for 2021 without Uri (February 13-19) against $25.73 in 2020. [e47][e46]

Money: by April 14, 2021, ERCOT reported about $2.9 billion of short payments, later raised to $2.99 billion, of which $1.86 billion related to Brazos Electric Power Cooperative, which filed for bankruptcy on March 1, 2021 (UT figures). [e13] The IMM says short payments exceeded $3 billion and several retail electric providers were forced to exit the market. [e48] ERCOT revoked Griddy Energy's rights under the Protocols for a payment breach on February 26, 2021. [e53] On the financing side, the Protocols define the Securitization Default Balance as the amount financed under PURA Subchapter M, not to exceed $800 million, and HB 4492 defines an uplift balance of up to $2.1 billion uplifted to load-serving entities for reliability deployment price adder charges and ancillary service costs above the system-wide offer cap, excluding amounts that were part of the settlement point price. [e19][e20] The law defines the "period of emergency" as February 12, 2021, 12:01 a.m., through February 20, 2021, 11:59 p.m. [e21]

Rules: an ERCOT Board deck (slide 17) says generation owners and operators were not required to implement any minimum weatherization standard and that no entity, including the PUC or ERCOT, had rules to enforce one. [e16] SB 3 (PURA §35.0021(c)(1)) provides for inspecting generation assets in the ERCOT power region for compliance with the reliability standards, with penalties of up to $1,000,000 per violation per day for violating §35.0021 or §38.075, and 16 TAC §25.55 requires each generation entity to complete winter preparation measures for each resource by December 1 each year. [e17][e49][e18] SB 3 also requires the PUCT and the Railroad Commission to set up a process to designate critical natural gas facilities and to prioritize them for load-shed purposes in an energy emergency. [e50][e51] 16 TAC §25.53 now requires utilities' emergency operations plans to include a load shed annex with procedures for controlled shedding and restoration priorities. [e55] The IMM credits SB 3 with laying the foundation for ERCOT's reliability standard. [e25] The IMM says FFSS was implemented in 2022 in response to the fuel supply disruptions. [e23] The Supreme Court of Texas notes that all three PUCT commissioners resigned. [e52]

Caps then and now: PUCT rule 25.509 states an HCAP of $5,000 per MWh, compared with the $9,000 per MWh price held during the storm. [e22][e11] ERCOT's later sources show that since real-time co-optimization went live on 5 December 2025 the system-wide offer cap is $5,000 day-ahead and $2,000 real-time, so the rule text alone is not the whole picture. [e29][e30]

Lasting operating change: the IMM reports RUC commitments ran 202 to 613 resource-hours per year in 2017-2020 but have been in the thousands every year since 2021. [e24]

## Key facts

- 1,045 generating units in the event area had 4,124 outages, derates or failures to start between February 8 and 20, 2021; 58 percent of the units were gas-fired and 27 percent wind. [e1]
- ERCOT's peak generation out was 52,277 MW, 48.6% of installed capacity (ERCOT Board deck of February 24, 2021, which is marked preliminary). [e4][e28]
- ERCOT had ordered 20,000 MW of firm load shed by 7:00 p.m. on February 15; ERCOT's Board deck gives 70.5 hours of load shed request and an estimated 76,819 MW peak load without load shed (against 4,000 MW, 7.5 hours and 59,000 MW in 2011). [e7][e43]
- Frequency was below 59.4 Hz for 4 minutes 23 seconds (FERC-NERC), with a low of 59.304 Hz at 1:54 a.m. [e38][e37]
- Combined manual firm load shed across ERCOT, SPP and MISO South was 23,418 MW (ERCOT 20,000, SPP 2,718, MISO South 700), the largest controlled firm load shed event in U.S. history. [e8][e27]
- More than 4.5 million people in Texas lost power and at least 210 people died, according to the federal staff report. [e9]
- 2021 average real-time price $167.88 per MWh; $40.73 excluding February 13-19 (IMM). [e46]
- Short payments to ERCOT were about $2.9 billion as of April 14, 2021, and $2.99 billion as of May 14, 2021 (UT). [e13]
- The Securitization Default Balance (PURA Subchapter M) is capped at $800 million and the HB 4492 uplift balance at $2.1 billion. [e19][e20]

## Timeline

- February 12, 2021, 12:01 a.m.: start of the "period of emergency" as defined in HB 4492. [e21]
- February 12, 2021, 3:30-5:11 p.m.: ERCOT fuel supply emergency; no EEA. [e31]
- February 14, 2021, 7:06 pm (ERCOT) / HE 20 (FERC-NERC): new winter peak, 69,222 MW or 69,871 MW. [e33][e32]
- February 14, about 10 p.m., to February 15, 3 a.m.: about 6,000 MW of new outages and derates, mostly freezing. [e34]
- February 15, 2021, 00:15: EEA 1 and 847.15 MW of ERS-30 deployed; 01:07 EEA 2; 01:20 EEA 3 with the first 1,000 MW of firm load shed. [e5][e35][e36]
- February 15, 2021, 1:51 a.m.: frequency falls below 59.4 Hz, starting the nine-minute delay on generator underfrequency relays. [e6]
- February 15, 2021, 1:54 a.m.: frequency low of 59.304 Hz (FERC-NERC; UT gives 59.302 Hz at about 1:55). [e37][e5]
- February 15, 2021, 1:55 a.m.: frequency back above 59.4 Hz after 4 minutes 23 seconds; 2:00 a.m. total ordered load shed 10,500 MW. [e38][e39]
- February 15, 2021, 7:00 p.m.: ERCOT has ordered 20,000 MW of firm load shed. [e7]
- February 16, 2021: peaker net margin threshold exceeded. [e14]
- February 17, 2021, 11:55 p.m.: instructions to restore all remaining load (FERC-NERC). [e41]
- February 18, 2021, 12:42 a.m.: last controlled outage orders cancelled (ERCOT; FERC Figure 67). [e45][e10]
- February 19, 2021, 9:00 a.m.: EEA 2; 10:35 a.m. normal operations (FERC-NERC; UT says 10:36). [e42][e5]
- February 20, 2021, 11:59 p.m.: end of the HB 4492 "period of emergency". [e21]
- February 26, 2021: ERCOT revokes Griddy Energy's rights for a payment breach. [e53]
- March 1, 2021: Brazos Electric Power Cooperative files for bankruptcy. [e13]
- April 14, 2021: ERCOT reports about $2.9 billion in short payments; raised to $2.99 billion on May 14, 2021. [e13]
- July 13, 2021 (updated October 15, 2021): ERCOT's Roadmap to Improving Grid Reliability lists actions such as twice-yearly CEO weatherization attestations. [e56]
- 2022: FFSS implemented in response to Uri fuel supply disruptions. [e23]

## Say it like this

(Guidance) Uri was a fuel and freeze event: almost half of ERCOT's installed capacity was out at the worst point, frequency sat below 59.4 Hz for over four minutes, and ERCOT had ordered 20,000 MW of firm load shed by 7:00 p.m. on February 15 and held it for nearly three days. [e4][e38][e7] The market fallout, $9,000 prices held by regulatory order, a 2021 average price of $167.88, and billions in short payments, sits behind SB 3, HB 4492 securitization and the weatherization rules. [e11][e47][e13][e25]

## Common confusion

(Guidance) "Wind froze, so it was a renewables failure" is too simple: across the whole FERC-NERC event area (ERCOT, SPP and MISO South), wind was 27 percent of the units with outages, but the federal report's two named causes are cold-weather unpreparedness across unit types and natural gas fuel supply. [e1][e2] Also keep the two dollar figures apart: the $9,000 price was what the PUCT held prices at during the storm, while PUCT rule 25.509 states an HCAP of $5,000 and the real-time cap has been $2,000 since RTC go-live. [e11][e22][e29] The 20,000 MW load shed figure is ERCOT only; 23,418 MW is the combined ERCOT, SPP and MISO South figure. [e7][e27] And the HB 4492 uplift balance does not cover the energy price itself: it excludes amounts that were part of the settlement point price. [e20]

## Questions

### What were the main causes of the generation shortfall during Uri?

The FERC-NERC staff report names two: generating units unprepared for cold weather, and natural gas fuel supply problems. [e2] Freezing issues and fuel issues together caused 75 percent of the outages, derates and failures to start in the event area. [e1]

### How close did ERCOT come to a total blackout?

Frequency stayed below 59.4 Hz for about 4 minutes 23 seconds, inside the nine-minute delay on generator underfrequency relays. [e6][e38] FERC-NERC says that if those relays had tripped, about 17,000 MW of generation would have gone offline, potentially causing a total blackout. [e6] ERCOT pulled it back by ordering load shed in steps to 10,500 MW by 2:00 a.m. [e39]

### Why did prices stay at $9,000 per MWh while load was being shed?

The UT report says the PUCT ordered it and suspended some market price-setting rules during the blackouts. [e11] The uri-repricing topic covers the orders, the IMM's objections and the court cases in detail.

### How is Uri still showing up on bills and settlements today?

HB 4492 defines an uplift balance of up to $2.1 billion, and the Protocols define a Securitization Default Balance of up to $800 million. [e20][e19] ERCOT invoices QSEs and CRR Account Holders for Securitization Default Charges to repay the default balance. [e26]

### What changed in law and operations after Uri?

SB 3 requires weather emergency preparedness with ERCOT inspections and penalties of up to $1,000,000 per violation, and a process to designate critical gas facilities for load-shed priority. [e17][e49][e50][e51] The IMM points to much more RUC: from 202-613 resource-hours per year in 2017-2020 to thousands per year since 2021, which it ties to conservative operations. [e24] FFSS was implemented in 2022 in response to fuel supply disruptions during Uri. [e23]

### Why did the gas system matter so much?

ERCOT saw it coming: before the event it noted potential for 11,100 MW of forced outages from gas restrictions. [e44] FERC-NERC says fuel issues caused 31.4 percent of the outages, derates and failures to start across its event area (ERCOT, SPP and MISO South), and natural gas production fell sharply. [e1][e2] (Guidance) SB 3 links the two problems: gas facilities designated as critical are to be prioritized for load-shed purposes in an energy emergency. [e51]

### What if ERCOT had not shed load in the first hours of February 15?

FERC-NERC says roughly 17,000 MW of generation would have tripped on underfrequency relays had frequency stayed below 59.4 Hz for nine minutes, potentially causing a total blackout of the ERCOT footprint. [e6] The Supreme Court of Texas later described Texas as fewer than five minutes from a total grid collapse; that is the court's characterization. [e58] Sources also differ slightly on the time below 59.4 Hz (see Open items). [e38][e57]

## Scenarios

### A client asks whether "another Uri" would produce the same prices today.

- The cap is lower now: 16 TAC §25.509 states an HCAP of $5,000 per MWh, versus the $9,000 per MWh price held during Uri, and since RTC go-live ERCOT's sources show a $2,000 real-time cap. [e22][e11][e29]
- Generators now face winter preparation measures to complete by December 1 each year, and SB 3 provides for inspecting generation assets for compliance with the reliability standards. [e18][e17]
- Fuel supply risk was a core cause in 2021, and the sources do not say it has been eliminated; FFSS is one response. [e2][e23]

## Open items

- Last firm load shed: FERC-NERC's chronology says ERCOT issued instructions to restore all remaining load by 11:55 p.m. on February 17 (the IMM also uses 23:55); ERCOT's Board deck and FERC Figure 67 say the last controlled outage orders were cancelled at 12:42 a.m. on February 18. Possibly two different steps (restore instruction versus cancelling the order); not reconciled in the sources.
- Time EEA 3 / firm load shed began: UT says 01:20 CST in one place and "EEA Level 3 with Firm Load Shed was called on February 15 at 1:25 CST" in another; ERCOT's board deck and FERC-NERC say 1:20 a.m.; EIA (eia-tx-gas-2021) says ERCOT began rotating outages "at midnight on February 15". I used 01:20.
- Lowest frequency: UT gives 59.302 Hz at roughly 1:55 a.m.; FERC-NERC gives 59.304 Hz at 1:54 a.m.; ERCOT's board deck shows "Min Frequency 59.302 Hz".
- Time below 59.4 Hz: FERC-NERC, UT and ERCOT's board deck say 4 minutes 23 seconds; the Third Court of Appeals opinion says "four minutes and three seconds"; the Supreme Court says "just over four minutes".
- Winter peak on February 14: FERC-NERC 69,871 MW (HE 20); ERCOT Board timeline 69,222 MW at 7:06 pm; ERCOT's Elliott report lists Uri at 69,812 MW hourly actual and 76,819 MW hourly back-cast.
- Peak generation out: ERCOT's board deck says 52,277 MW (48.6%); the UT comparison table shows 52,037 MW citing ERCOT 2021a. FERC-NERC instead reports ERCOT averaged 34,000 MW unavailable from February 15 to 17.
- Return to normal operations: FERC-NERC's chronology and ERCOT's board deck say 10:35 a.m. February 19 (Board: EEA 2 at 9 a.m., EEA 1 at 10 a.m.); UT says 10:36 CST; FERC Figure 67 says ERCOT "moved from EEA 3 to EEA 1" on 2/19; the PUCT's March 2021 orders say ERCOT remained in EEA3 through 9 a.m.
- Short payments: UT gives $2.9 billion (April 14, 2021) and $2.99 billion (May 14, 2021); the IMM 2021 report says "exceeded $3 billion". Different dates; not reconciled.
- People affected: FERC says more than 4.5 million people lost power; UT's table shows about 4.5 million customers (meters). Water: FERC says over 14 million people were ordered to boil water; UT says up to 12 million Texans were without water or under boil advisories.
- Economic losses: FERC cites the Dallas Fed at $80 to $130 billion; UT says the Dallas Fed estimate "could approach $130 billion" and other estimates up to $300 billion.
- ERCOT's board deck shows average Feb 14-19 hub prices of $6,579.59 and $6,612.23 per MWh, but the extracted slide text does not make clear which is real-time and which is day-ahead, so I did not cite them.
- The ERCOT Roadmap's completion status per action (icons) is not legible in the text copy, so no item is described as completed.
- Not covered here and left for linked topics: details of the PUCT Project 51617 orders and the Luminant litigation (uri-repricing), individual retailer defaults (retailer-defaults-2021), and Securitization charge formulas (securitization).
