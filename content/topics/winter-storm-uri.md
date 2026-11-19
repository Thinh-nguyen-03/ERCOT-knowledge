---
id: winter-storm-uri
name: Winter Storm Uri (Feb 2021)
aliases: [Winter Storm Uri, Uri, February 2021 winter storm, February 2021 Extreme Cold Weather Event]
kind: event
domain: cases
level: 1
lenses: [analyst, trading, portfolio, retail]
as_of: 2026-11-18
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
    locator: "HB 4492 (87R), new PURA §39.651(4), definition of Uplift balance (bill line numbers appear in the text)"
    quote: "\"Uplift balance\" means an amount of money of not 3 more than $2.1 billion that was uplifted to load-serving entities 4 on a load ratio share basis due to energy consumption during the 5 period of emergency for reliability deployment price adder charges"
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
---

## Definition

Winter Storm Uri was the February 2021 cold weather event in which, from February 8 through 20, 1,045 generating units in the event area had 4,124 outages, derates or failures to start. [e1] In ERCOT it led to firm load shed that began early on February 15, with 20,000 MW ordered by 7:00 p.m. that day. [e5][e7]

## How it works

The federal staff report names two causes, both triggered by cold weather: generating units unprepared for cold weather failed in large numbers, and the natural gas fuel supply struggled to meet both residential heating load and generating unit demand. [e2] Across the whole event area, 75 percent of the 4,124 outages, derates and failures to start were caused by freezing issues (44.2 percent) or fuel issues (31.4 percent). [e1] The UT Austin report adds that natural gas production, storage and distribution facilities did not deliver the full amount of fuel that gas power plants demanded. [e3]

At the worst point ERCOT reported 52,277 MW out of 107,514 MW of installed capacity unavailable, or 48.6%. [e4] ERCOT moved through EEA 1, EEA 2 and EEA 3 in the first hour and twenty minutes of February 15 and began firm load shed at 01:20. [e5] Frequency dropped below the 59.4 Hz generator underfrequency trip level at 1:51 a.m.; the FERC-NERC team says that if those relays had tripped, about 17,000 MW of generation would have been lost, potentially causing a total blackout of the ERCOT footprint. [e6]

By 7:00 p.m. on February 15, ERCOT had ordered 20,000 MW of firm load shed and held it for nearly three days. [e7] The last firm load shed orders were cancelled at 12:42 a.m. on February 18. [e10] ERCOT returned to normal operations on Friday, February 19. [e5]

## ERCOT context

Prices: the UT report says the price of electricity went to $9,000 per MWh and stayed there by PUCT order, with some market price-setting rules suspended during the blackouts. [e11] Gas prices at Texas trading hubs went from normally much less than $10/MMBtu to over $400/MMBtu. [e12] The peaker net margin threshold was exceeded on February 16, 2021, the only time it has happened in ERCOT's history. [e14] The UT report estimates that if the LCAP had taken effect, the cap formula would have pushed the price to $15,359/MWh on February 18, above the HCAP. [e15]

Money: by April 14, 2021, ERCOT reported about $2.9 billion of short payments, later raised to $2.99 billion, of which $1.86 billion related to Brazos Electric Power Cooperative, which filed for bankruptcy on March 1, 2021. [e13] On the financing side, the Protocols define the Securitization Default Balance as the amount financed under PURA Subchapter M, not to exceed $800 million, and HB 4492 defines an uplift balance of up to $2.1 billion that was uplifted to load-serving entities, including for reliability deployment price adder charges (the saved bill text of the rest of the definition is scrambled). [e19][e20] The law defines the "period of emergency" as February 12, 2021, 12:01 a.m., through February 20, 2021, 11:59 p.m. [e21]

Rules: an ERCOT Board deck (slide 17) says generation owners and operators were not required to implement any minimum weatherization standard and that no entity, including the PUC or ERCOT, had rules to enforce one. [e16] SB 3 (PURA §35.0021(c)(1)) provides for inspecting generation assets in the ERCOT power region for compliance with the reliability standards, and 16 TAC §25.55 requires each generation entity to complete winter preparation measures for each resource by December 1 each year. [e17][e18] The IMM credits SB 3 with laying the foundation for ERCOT's reliability standard. [e25] FFSS was implemented in 2022 in response to the fuel supply disruptions. [e23] PUCT rule 25.509 states an HCAP of $5,000 per MWh, compared with the $9,000 per MWh price held during the storm. [e22][e11] ERCOT's later sources show that since real-time co-optimization went live on 5 December 2025 the system-wide offer cap is $5,000 day-ahead and $2,000 real-time, so the rule text alone is not the whole picture. [e29][e30]

Lasting operating change: the IMM reports RUC commitments ran 202 to 613 resource-hours per year in 2017-2020 but have been in the thousands every year since 2021. [e24]

## Key facts

- 1,045 generating units in the event area had 4,124 outages, derates or failures to start between February 8 and 20, 2021; 58 percent of the units were gas-fired and 27 percent wind. [e1]
- ERCOT's peak generation out was 52,277 MW, 48.6% of installed capacity (ERCOT Board deck of February 24, 2021, which is marked preliminary). [e4][e28]
- ERCOT had ordered 20,000 MW of firm load shed by 7:00 p.m. on February 15. [e7]
- Combined manual firm load shed across ERCOT, SPP and MISO South was 23,418 MW (ERCOT 20,000, SPP 2,718, MISO South 700), the largest controlled firm load shed event in U.S. history. [e8][e27]
- More than 4.5 million people in Texas lost power and at least 210 people died, according to the federal staff report. [e9]
- Short payments to ERCOT were about $2.9 billion as of April 14, 2021, and $2.99 billion as of May 14, 2021. [e13]
- The Securitization Default Balance (PURA Subchapter M) is capped at $800 million and the HB 4492 uplift balance at $2.1 billion. [e19][e20]

## Timeline

- February 12, 2021, 12:01 a.m.: start of the "period of emergency" as defined in HB 4492. [e21]
- February 15, 2021, 00:15: ERCOT declares EEA 1; 01:07 EEA 2; 01:20 EEA 3 with firm load shed. [e5]
- February 15, 2021, 1:51 a.m.: frequency falls below 59.4 Hz, starting the nine-minute delay on generator underfrequency relays. [e6]
- February 15, 2021, about 1:55 a.m.: frequency reaches its low of 59.302 Hz (UT figure). [e5]
- February 15, 2021, 7:00 p.m.: ERCOT has ordered 20,000 MW of firm load shed. [e7]
- February 16, 2021: peaker net margin threshold exceeded. [e14]
- February 18, 2021, 12:42 a.m.: last firm load shed orders cancelled. [e10]
- February 19, 2021, 10:36: ERCOT returns to normal operations (UT figure). [e5]
- February 20, 2021, 11:59 p.m.: end of the HB 4492 "period of emergency". [e21]
- March 1, 2021: Brazos Electric Power Cooperative files for bankruptcy. [e13]
- April 14, 2021: ERCOT reports about $2.9 billion in short payments; raised to $2.99 billion on May 14, 2021. [e13]
- 2022: FFSS implemented in response to Uri fuel supply disruptions. [e23]

## Say it like this

(Guidance) Uri was a fuel and freeze event: almost half of ERCOT's installed capacity was out at the worst point, and ERCOT had ordered 20,000 MW of firm load shed by 7:00 p.m. on February 15 and held it for nearly three days. [e4][e7] The market fallout, $9,000 prices held by regulatory order and billions in short payments, sits behind the weatherization and reliability changes that followed, such as SB 3. [e11][e13][e25]

## Common confusion

(Guidance) "Wind froze, so it was a renewables failure" is too simple: wind was 27 percent of the units with outages, but the federal report's two named causes are cold-weather unpreparedness across unit types and natural gas fuel supply. [e1][e2] Also keep the two dollar figures apart: the $9,000 price was what the PUCT held prices at during the storm, while PUCT rule 25.509 states an HCAP of $5,000 and the real-time cap has been $2,000 since RTC go-live. [e11][e22][e29] The 20,000 MW load shed figure is ERCOT only; 23,418 MW is the combined ERCOT, SPP and MISO South figure. [e7][e27]

## Questions

### What were the main causes of the generation shortfall during Uri?

The FERC-NERC staff report names two: generating units unprepared for cold weather, and natural gas fuel supply problems. [e2] Freezing issues and fuel issues together caused 75 percent of the outages, derates and failures to start in the event area. [e1]

### How close did ERCOT come to a total blackout?

Frequency stayed below 59.4 Hz for about 4 minutes 23 seconds, inside the nine-minute delay on generator underfrequency relays. [e6] FERC-NERC says that if those relays had tripped, about 17,000 MW of generation would have gone offline, potentially causing a total blackout. [e6]

### Why did prices stay at $9,000 per MWh while load was being shed?

The UT report says the PUCT ordered it and suspended some market price-setting rules during the blackouts. [e11] The uri-repricing topic covers the orders in detail.

### How is Uri still showing up on bills and settlements today?

HB 4492 defines an uplift balance of up to $2.1 billion, and the Protocols define a Securitization Default Balance of up to $800 million. [e20][e19] ERCOT invoices QSEs and CRR Account Holders for Securitization Default Charges to repay the default balance. [e26]

### What changed in operations after Uri?

The IMM points to much more RUC: from 202-613 resource-hours per year in 2017-2020 to thousands per year since 2021, which it ties to conservative operations. [e24] FFSS was implemented in 2022 in response to fuel supply disruptions during Uri. [e23]

## Scenarios

### A client asks whether "another Uri" would produce the same prices today.

- The cap is lower now: 16 TAC §25.509 states an HCAP of $5,000 per MWh, versus the $9,000 per MWh price held during Uri, and since RTC go-live ERCOT's sources show a $2,000 real-time cap. [e22][e11][e29]
- Generators now face winter preparation measures to complete by December 1 each year, and SB 3 provides for inspecting generation assets for compliance with the reliability standards. [e18][e17]
- Fuel supply risk was a core cause in 2021, and the sources do not say it has been eliminated; FFSS is one response. [e2][e23]

## Open items

- Last firm load shed: FERC Figure 67 (cited above) says the last firm load shed orders were cancelled at 12:42 a.m. on February 18, while the IMM letter used in uri-repricing says ERCOT recalled the last instructions at 23:55 on February 17. The two are not reconciled in the saved sources.
- Sources differ on the time EEA 3 / firm load shed began: UT says 01:20 CST in one place and "EEA Level 3 with Firm Load Shed was called on February 15 at 1:25 CST" in another; ERCOT's board deck and FERC Figure 67 say 1:20 a.m.; EIA (eia-tx-gas-2021) says ERCOT began rotating outages "at midnight on February 15". I used 01:20.
- Lowest frequency: UT gives 59.302 Hz at roughly 1:55 a.m.; FERC-NERC gives 59.304 Hz at 1:54 a.m.; ERCOT's board deck shows "Min Frequency 59.302 Hz".
- Peak generation out: ERCOT's board deck says 52,277 MW (48.6%); the UT comparison table shows 52,037 MW citing ERCOT 2021a. FERC-NERC instead reports ERCOT averaged 34,000 MW unavailable from February 15 to 17.
- Return to normal operations: UT says 10:36 CST February 19; ERCOT's board deck says 10:35 a.m.; FERC Figure 67 says ERCOT "moved from EEA 3 to EEA 1" on 2/19 while the board deck lists EEA 2 at 9 a.m. and EEA 1 at 10 a.m.
- People affected: FERC says more than 4.5 million people lost power; UT's table shows about 4.5 million customers (meters). Water: FERC says over 14 million people were ordered to boil water; UT says up to 12 million Texans were without water or under boil advisories.
- Economic losses: FERC cites the Dallas Fed at $80 to $130 billion; UT says the Dallas Fed estimate "could approach $130 billion" and other estimates up to $300 billion.
- ERCOT's board deck shows average Feb 14-19 hub prices of $6,579.59 and $6,612.23 per MWh, but the extracted slide text does not make clear which is real-time and which is day-ahead, so I did not cite them.
- SB 3 penalty amounts (up to $1,000,000 per violation for §35.0021 / §38.075) appear in sb3-87r but the extracted text is scrambled by line numbers and could not be quoted as one passage.
- Not covered here and left for linked topics: details of the PUCT Project 51617 orders (uri-repricing), individual retailer defaults (retailer-defaults-2021), and Securitization charge formulas (securitization).
- This topic uses more than 14 evidence quotes because the brief for an event topic asked for causes, outages, pricing, finance and law changes.
