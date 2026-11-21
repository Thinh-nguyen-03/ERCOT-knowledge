# Audit log F-FS1-2 (rep, resource-entity, resource-types, tdsp)

rep | quotes: 36 | context-problems: 2 | statements: 34 | wrong: 4 | flags: 0 real, 1 false-alarm | guidance-problems: 0
- A5: locators for e3, e4, e12 said 25.107(b)(1); source text shows (a) Applicability (1)(A)/(B). Locators corrected.
- A1: e37 (Mass Transition) was stated for any LSE whose rights are revoked; source 16.11.6.1.6(3) applies to a breaching Market Participant that is also an LSE, on notice to it and the PUCT. Context text, scenario and link note narrowed. (wrong)
- A1/B: the scenario bullet "ERCOT may revoke rights and terminate agreements" was not in the e37 quote (it is in paragraph (1)). Removed. (wrong)
- A4: e21 shareholders' equity rule sits under the letter-of-credit option (B), but was stated as a general REP rule. Reworded as part of the letter-of-credit option. e22 deposit coverage scoped to a REP certified to collect deposits. (wrong)
- B: credit-tpe link note said ERCOT credit is "governed through its QSE and Counter-Party exposure" citing e6, which says only that ERCOT approves the QSE designation. Narrowed. retail-hedging note ("shapes what a REP must hedge") was inference; removed. (wrong)
- A1: e9 certification test stated as a flat PURA requirement; 39.352(d) gives an affidavit route for REPs serving only 1 MW+ customers. Sentence now says "general test" and notes the other route (not quoted).
- Flag "2026" (footer "effective 11/4/2026"): false alarm. Pending-box check: e20 text is the adopted 11/4/2026 version, in force as of 2026-11-21.

resource-entity | quotes: 32 | context-problems: 2 | statements: 36 | wrong: 3 | flags: 0 real, 0 false-alarm | guidance-problems: 0
- A1: the NPRR995 boxes around e1, e2, e12-e14 are pending replacements placed after the current text; quotes are the current text. No change needed.
- B/A4: scenario "QSE gives notice it will stop in 45 days" cited e9, which is the rule for ERCOT's notice of termination/suspension (Virtual QSE). The QSE-notice rule is 16.2.6.1(2) (noon on the fourth Business Day, designate new QSE or become Emergency QSE). Added e38 with that text and rewrote the bullet. (wrong)
- B: question "why does a QSE change take much longer than for an LSE" had no cited LSE figure (LSE rule 16.3.3 is six days; not quoted). Question reworded to drop the comparison. (wrong)
- A1: e22 PCLR: load limits apply "upon de-registration", text said "after" the 120-day notice. Reworded.
- B: e27 "the Guide adds exceptions" not in the quote; marked as not quoted. "Resource Entity is the owner/controller role" given a citation (e1).

resource-types | quotes: 33 | context-problems: 2 | statements: 27 | wrong: 2 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- A1: e29 Wholesale Storage Load quote stopped before "WSL is limited to the following technologies: batteries, flywheels, compressed air, pumped hydro, electro chemical capacitors, thermal storage with turbine inlet chilling". Quote extended and sentence now states the limit. (wrong)
- A4: Attachment R was described as applying to "a new Generation Resource or ESR"; the text says it applies to Resource Entities with a Generation Resource or ESR, with no "new". Reworded. (wrong)
- B: e26 QSGR "within ten minutes from a cold-temperature state" omitted "of receiving ERCOT notice". Reworded.
- Flags "2024" (Attachment O title date) and "2026" (Attachment R date): false alarms. Pending boxes (NPRR995, NPRR1188, NPRR1029) are labelled as pending in the topic; ALR is stated as current and is correct per the saved Section 2.1 text.

tdsp | quotes: 49 | context-problems: 1 | statements: 42 | wrong: 6 | flags: 0 real, 5 false-alarm | guidance-problems: 0
- Formula (B): TCRF section omitted the structure of the formula (1/2 factor, BD) and gave ADJ as "for under- or over-recovery", which no quote says. Rewrote from the saved text with new evidence e54 (equation as saved, layout garbled, BD placement not asserted), e55 (ADJ, EXPp, REVp), e56 (BD); NWTR/BWTR/NL/ALLOC unchanged. (wrong)
- B: cost of service "FERC accounts 560-573 and 350-359" was cited to e16, which does not contain them. Added e53 with the passage and recited plus the return/depreciation terms. (wrong)
- A4: e44 stated as a direct TDU duty; the statute directs the PUCT to require it by rule and also covers cooperatives and MOUs. Text and load-shed link note reworded. (wrong)
- A4/B: e42 SB 6 fee was stated as "the customer pays" under SB 6 standards; the quote says the standards must set the fee, for large loads subject to subsection (c). Scenario and link note reworded; open item notes adopted standards not seen. (wrong)
- B: e50 "ERCOT's 2026 report" - the table is sourced to ERCOT's 2025 Demand Response Report inside April 2026 Board material. Reworded. (wrong)
- B: e41 "A TDSP also needs a CCN" generalised an "electric utility" statute; reworded and the gap stated. Also e33 (surcharge caveat), e29 (examples list), Question on TCRF ("retailer sees pass-through in delivery charges" unsupported), question about generator building transmission (e25 covers any transmission service request). Fixed.
- Flags "25.272", "25.130, 25.211", "2026", "2025", "25.130": false alarms (rule numbers, report year).
- Open item added: saved §25.193 carries effective date 10/25/10, later amendments unchecked.

Unresolved: none beyond the open items. verify.ts: 0 errors for all four topics.
