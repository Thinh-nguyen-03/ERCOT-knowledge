# Audit log F-FO-9 (deeper pass)

puct | quotes: 43 | context-problems: 2 | statements: 45 | wrong: 3 | flags: 1 real, 13 false-alarm | guidance-problems: 0

- D/A1 (Batch Zero): Timeline #6, Questions #10 and the large-load-interconnection link said the PUCT's good cause exceptions "paus[ed] Batch Zero classification". The order (p. 1-2) grants exceptions from the 16 TAC §25.361(b)(16) requirements to classify Large Loads by the August 7, 2026 deadline and to include only classified base load in the August/November 2026 QSAs. It says ERCOT "intends to temporarily pause" Batch Zero. The cited e35 stopped before the exception sentence. Fixed: extended e35 to cover the full exception sentence, added e45 ("ERCOT intends to temporarily pause ..."), and reworded ERCOT context #8, Timeline #6, Q10 and the link (counted wrong: 3).
- A1/B: ERCOT context #4 said the commission "ordered ERCOT to use the HCAP", but e37 stopped one sentence short of that. Fixed: extended e37 to include "The Commission ordered ERCOT to use the high system-wide offer cap (HCAP) until the LCAP is reinstated." Not wrong.
- B/A4: "Winter Storm Uri" labels (ERCOT context #4, Timeline #1) appear nowhere in the LCAP order. Fixed: added e46 (Governor's disaster declaration "in response to an extreme winter weather event") and used that wording. Not wrong.
- B (flag, real): Say it like this #2 "since 2023" had no cited support. Added [e7] (HB 1500 adds §39.1514).
- False alarms: rule numbers 25.501/25.508/25.509; "$140" vs the quote's "140 per kW-year"; years taken from the dated source (minutes, orders, Board item, Project 59550 filing, 2025 second order); "765 kV" is in the quote as "765-kilovolt (kV)".

resource-adequacy | quotes: 45 | context-problems: 1 | statements: 45 | wrong: 2 | flags: 5 real, 12 false-alarm | guidance-problems: 2

- A1: e24 (PURA §39.1594(a)(1)) stopped before ", except that the commission may adjust the limit: (A) proportionally according to the highest net peak demand ... base year of 2026; and (B) for inflation with a base year of 2026". ERCOT context #3 and Scenarios #3 presented a flat $1 billion cap. Fixed: extended the quote and noted the adjustability in both (wrong: 2). In the same context paragraph, "Under that law, PUCT staff recommended ..." implied the PCM recommendation was made under §39.1594. Changed to "In December 2024, PUCT staff recommended ...".
- B: How it works #4 said the CDR uses ELCC for "wind, solar and storage", but e46 names only "e.g., wind". Added e47 (CDR ELCC Background: "wind, solar and battery energy storage").
- B (flag, real): How it works #3 ("Brattle", "run alongside the 2026 assessment"). Those words sat in the context before e22. Extended e22 back to "In parallel with ERCOT's 2026 Reliability Standard Assessment ...".
- B (flag, real): Timeline #6 "September 1, 2023 ... (HB 1500)" was not in e24. Added e48, the §39.1594 history note ("Added by Acts 2023 ... (H.B. 1500), Sec. 23, eff. September 1, 2023").
- B (flag, real): Timeline #7 "well above CONE" was not in e40. Extended e40 back to include "provided net revenues substantially above CONE in 2023".
- B: Timeline #13 "IMM review scheduled for September 2026 (schedule subject to change)" was not in e6. Extended e6 through "This timeline is subject to change."
- B (flag, real): Key facts #7 "versus the 0.1 standard" was not in e28. Added [e3].
- C (flag, real): Say it like this #1 said "must check every three years" with no e4 citation; the rule says "at least once every three years". It also called the 2026 assessment "the formal route to any new design". Fixed the wording and added [e4][e36][e11][e5].
- C: Questions #14 "(Reasoning) ... make any cost-based design option look more expensive" was speculation no source supports. Removed that clause.
- B (minor): ERCOT context #2 referred to the CEO as "he", which no source states. Changed to "the letter says".
- False alarms: 25.508, 39.1594 and 39.159 section numbers; "$140" vs "140 per kW-year"; years from dated sources (2024 memo/minutes, December 2025 CDR, April 2026 Board item); 2024 in Q14 restates e17/e41.

resource-mix | quotes: 35 | context-problems: 0 | statements: 32 | wrong: 1 | flags: 0 real, 8 false-alarm | guidance-problems: 1

- B/A4: Questions #10 said "In 2024-2025 solar's share rose from 7.2% to 13.9%". In e3, 7.2% is the 2023 share. Fixed to "From 2023 to 2025 ... from 7.2% (2023, as the IMM's 2024 report states it)" and added the 44.3% (2024) gas figure from e2 (wrong: 1).
- C: Questions #10 "(Reasoning) ... the second a displacement effect from midday solar" stated a cause the IMM does not give. Reworded to say the quoted passages give no cause and the drop coincided with solar's rise.
- False alarms: years 2016/2020/2025/2030 are the table's column headers in the context just before e26 (2030* is defined in the report notes as forecast planned projects with SGIA); 2021 is the Board deck date; 2023/2025 come from the source edition.

texas-interconnection | quotes: 32 | context-problems: 1 | statements: 36 | wrong: 6 | flags: 1 real, 5 false-alarm | guidance-problems: 1

- B (conflicting sources): ERCOT context #3, Key facts #7, Timeline #2 and Questions #8 stated as settled fact that ERCOT was a net importer every year from 2018. The IMM 2020-2023 reports say the trend "began in 2018". The IMM 2024 report (e11) says 2024 was the first net-export year "since 2018", which implies 2018 was a net-export year. Reworded all four to attribute the claim and note the inconsistency, and added an Open item (wrong: 4).
- B (flag, real): Key facts #2 said "820 MW to SPP and 400 MW to Mexico (2021 onward)". No source dates a change to 2021. Replaced the date with the sources (FERC-NERC 2021, IMM 2025) (wrong: 1).
- Formula (B): The "in words" gloss called RTDCIMP "the imported MW" and said the (-1) is there "because it is a payment to the QSE". The variable table defines RTDCIMP as the QSE's aggregated DC Tie Schedule as an importer (MW), and RTDCIMPAMT as "the payment to QSE q". The sign convention is not explained there. Added e33/e34 (variable definitions) and narrowed the gloss (wrong: 1).
- A1: e30 (NOG 2.6.3(1)) stopped at item (a) and dropped (b), which covers ties modified by +20 MW or more or by a non-in-kind converter change. Extended the quote and added (b) to How it works #4. Timeline #3 is still accurate for what it says. Not wrong.
- B: Timeline #5 attributed the rise in tie activity to summer prices, but that explanation sat after e27. Extended e27 to the next sentence, which also cites the January 1, 2022 ORDC shift.
- C: Say it like this #1 credited the "because power exchanges stay within the state" reasoning to FERC. That reasoning is in the FERC-NERC staff report, not the primer. Reattributed.
- Checked and found correct: the NPRR857 note (the pending box does replace "CFE" with "the appropriate operating authority for the non-ERCOT Control Area"), the NPRR1030 delete box for 4.4.4(17), and the Formula terms (sign, ¼, RTSPP at the DC Tie Settlement Point) against Section 6.6.3.4.
- False alarms: "2021" is the FERC-NERC report's date (How it works #1-2, Timeline #4, Common confusion, Uri link).
