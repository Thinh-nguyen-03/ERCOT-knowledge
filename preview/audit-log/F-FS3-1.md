# Audit log F-FS3-1 (deeper pass: ams-meters, clr, dgr-sodg, ferc, market-information-system)

ams-meters | quotes: 19 | context-problems: 0 | statements: 21 | wrong: 0 | flags: 0 real, 0 false-alarm | guidance-problems: 0
- No problems found after reading every quote in context and the source text around e19. Rechecked: e3/e4 (provisioned Advanced Meters, at least monthly), e9/e10 (PUCT 25.130(g) features), e16/e17 (18.7 transition, BUSLRG/BUSLRGDG exception), e19 (excess generation uses actual 15-minute data "if available"). No pending boxes sit on the cited paragraphs. No edits made.

ferc | quotes: 20 | context-problems: 0 | statements: 23 | wrong: 0 | flags: 0 real, 10 false-alarm | guidance-problems: 2
- Flags: all 10 are the year "2021" (report title, "February 2021", "2021 report"); false alarms.
- C (Say it like this): "...wholly within Texas; the PUCT does." The PUCT's role is not in any cited quote of that sentence (e1 only says not regulated by FERC). Removed "the PUCT does".
- C (Common confusion): "or is outside federal reliability standards" is not supported by any quote and conflicts with the Open item that the saved sources do not say whether FERC enforces NERC standards on ERCOT entities. Removed the phrase.
- Checked and fine: e1 footnote 378 is attached to the ISO/RTO sentence; e18 attributed to the report body and the exception to the footnote; e19 (28 recommendations) correctly credited to the FERC handbook; e7/e8/e10 PURA 39.151 quotes complete.

dgr-sodg | quotes: 28 | context-problems: 2 | statements: 25 | wrong: 4 | flags: 0 real, 6 false-alarm | guidance-problems: 0
- Flags: 6 (section numbers 6.6/3.8, "1 MW", "10 MW" in Formula #1, Formula #3, ERCOT context #1, Say it like this, Common confusion, link resource-types); all false alarms.
- A2 (e20/e21, 3.8.6(1)): Key fact 6, Question 10 and the ancillary-services link presented the disqualification rule without noting that np-03 shows a pending NPRR1171/NPRR1213 box replacing paragraph (1) (it replaces the load-shed disconnection condition with a Form R circuit designation and lets such a DGR/DESR qualify only for certain Ancillary Services). The ERCOT context sentence mentioned only 3.8.6(2). Labelled each as current text, named the pending replacement, and corrected the ERCOT context sentence to cover 3.8.6(1) and (2). 3 statements wrong by omission.
- A2 (e3): the SOG definition carries the same NPRR995 "Delete ... upon system implementation" note as SODG; the topic mentioned it for SODG only. Added a sentence with a new verbatim quote (e31).
- B / Formula #3 (e17, e18): the statement described the SODG price as built from SCED-interval LMPs weighted by SDWF plus RTRDP but omitted the floor in the equation, RTESOGPR = Max [-$251, ...]. Added the floor with a verbatim quote of the equation (e29) and a quote for the RTLMP definition (e30), which the statement had used without citing. 1 wrong (dropped term).
- B / Formula #2 (e16): "the amount is computed from the metered energy at each bus and the Real-Time price at that bus" was not in the cited quote (the equation is in the text after e15). Narrowed to what e16 says (payment is based on RTESOGPR).
- Checked and fine: 6.6.3.8 text is the current text with the NPRR995 replacement in a separate box below; 3.8.6(2) conversion text current; 3.8.6(3) Resource Node paragraph not inside a pending box; opt-out dates (2019, 2020, 2029, 2030) match e10-e13; e9 locator is right (the packet's first-match context is in 6.6.3.2, but the same sentence is in 6.6.3.8(2) per e15's context).

clr | quotes: 37 | context-problems: 3 | statements: 32 | wrong: 6 | flags: 0 real, 2 false-alarm | guidance-problems: 1
- Flags: ERCOT context #3 ("3.6, 2025") and Key facts #5 ("2025"); false alarms (section number, report year).
- A1/B (e32, ERCOT context #2 and Question 4): "The IMM calls the 2025 decline inconsistent with policy changes" cited e32, whose quote is only the patent sentence; the word "inconsistent" appears in the preceding sentence, outside the quote. Also "2025 decline" was broader than the IMM's "decrease in CLR activity". Added a verbatim quote (e38) and reworded. 2 wrong.
- A2 (e24, How it works #1): ALR definition presented as current without noting NPRR1188 pending deletion on system implementation. Added caveat with quote (e39). 1 wrong.
- A2 (e16): proxy-bid paragraph (8) has a pending NPRR1188 replacement; labelled as current text.
- B (e23, Formula #1): "average of the five-minute set points the Resource should have followed" - "should have followed" is not in the source; reworded to the source's AVGSP5M wording. 1 wrong.
- B (e20, e22): "applied to the over-/under-consumption volume" and "fixed reference price" were not in the quotes and hid the condition (PRZ1 applies when RTSPP > -$20, PRZ2 when RTSPP < $20). Reworded to the quoted conditions; same condition added to Key facts #4.
- B (link large-load-interconnection): "registered as a CLR under the Batch Zero process" is not what e25/e26 say. Reworded to the PCLR definition and the Batch Zero Interconnection Study limit in 16.5.5(2). 1 wrong.
- C/B (ERCOT context #4): "a newer category" unsupported - removed. NPRR1325 "approved text" is language in the PUCT report, effective only on PGRR145 implementation; reworded as "not yet in force"; the cap condition now states both no-cap cases from e29. 1 wrong (plus 1 guidance-like unsupported claim).
- Checked and fine: e12 current 3.6.1(5) with NPRR1188 replacement flagged "currently"; e17 labelled current, e18 labelled pending; e8/e37 IMM dates attributed to the IMM; 3.6.1 paragraph (1)(a)(iv) has a pending NPRR1244 box but the topic cites only (i)-(iii), (v)-(vi).

market-information-system | quotes: 36 | context-problems: 1 | statements: 27 | wrong: 3 | flags: 0 real, 7 false-alarm | guidance-problems: 0
- Flags: 7 (12.3, 25.506 x4, 3.2, etc.); all false alarms (section numbers).
- A2 (e8, ERCOT context line on UFE and Link to ufe): np-11 11.5.1.2(1)-(3) posting to the MIS Secure Area is followed by a pending NPRR1239 box that replaces those paragraphs with posting on the ERCOT website. Topic presented the MIS Secure Area posting without that caveat. Labelled as current text and added the pending replacement with verbatim quotes (e37, e38). 2 wrong.
- B (e24): forced outage reporting applies to generation resources and energy storage resources per 25.506(d)(1)-(2), which the quote does not show; the sentence now says so (scope is from the rule text around the quote, not the quote itself).
- B (Question 12, e20): "entity-specific offer information is delayed by 60 days" narrowed the rule; e20 covers all entity-specific information and includes "except where inapplicable or otherwise prescribed". Reworded. 1 wrong.
- Checked and fine: 12.3(1)(a)-(b), (e)-(g) are not inside the NPRR1239 boxes (those replace (c) and (d)); 25.506 exceptions (3 days, 7 days, State Estimator) match; COPMG 8.2 and 11.1 quotes complete; e34 is a tier-2 web page, stated as such.
