# Audit log: batch F-FS3-4 (deeper-pass material only)

hsl-lsl | quotes: 29 | context-problems: 3 | statements: 31 | wrong: 8 | flags: 0 real, 1 false-alarm | guidance-problems: 0
market-power-mitigation | quotes: 50 | context-problems: 7 | statements: 41 | wrong: 10 | flags: 0 real, 5 false-alarm | guidance-problems: 0
system-lambda | quotes: 24 | context-problems: 3 | statements: 29 | wrong: 2 | flags: 0 real, 9 false-alarm | guidance-problems: 0
black-start | quotes: 38 | context-problems: 4 | statements: 25 | wrong: 7 | flags: 0 real, 3 false-alarm | guidance-problems: 0

Totals: 141 quotes, 15 context problems, 126 statements, 27 wrong, 0 real flags, 18 false-alarm flags. All four files pass `node pipeline/verify.ts` (no ERROR lines for these topics). New evidence ids were added where a sentence needed a quote it did not have.

## hsl-lsl

- B (wrong, Formula #1): said the calculator works "within four seconds" and defined POWERTELEM, NORMRAMPUP/DN, LSLTELEM, citing e9/e31, whose quotes contain neither. Source 6.5.7.2(1) and the variable tables say it. Added e35 (four seconds), e36 (variable definitions), e39 (LSLTELEM); noted that Load Resource and ESR tables word some variables differently (Load Resource ramp rates are not "5-minute blended").
- B/dropped branch (wrong, Formula #2, #3, #5): gen HDL omitted the SHUTDOWN branch (HDL = POWERTELEM - NORMRAMPDN*5) and labelled the other branch "On-Line status codes" (source: status codes in 3.9.1 (5)(b)(i) other than SHUTDOWN); gen LDL omitted STARTUP (LDL = POWERTELEM + NORMRAMPUP*5); ESR LDL omitted ONTEST. Added e37, e38, e40 and the branches; relabelled status codes. ESR HDL and Load LDL formulas are not reproduced; added an Open item saying so.
- B (Formula #6): omitted that IRRs inside an IRR Group with any qualified member also use the five-minute forecast; added, and stated the "all other Resources" rule.
- B (wrong, link hasl-lasl): said HASL/LASL "no longer exist" citing e9 (an HDL formula). Narrowed to what e34 and e9 support (superseded HASL definition points to 6.5.7.2, which now holds HDL/LDL).
- B (wrong, link rtc-b): "ERCOT says the HASL concept no longer exists with RTC+B" cited e9. The saying is in the NPRR1290 PRS report (a proposal: "ERCOT is proposing that the applicable language be struck"). Added e41 from that report and attributed it.
- B (wrong, link base-point): "Base Points are issued within the HDL and LDL" cited e9, which does not say this. Replaced with the e8 statement that HDL/LDL are SCED inputs that help deployments respect physical limits.
- A5 (e16): locator said 6.5.5.2 paragraph (8); the text sits in 6.5.5.1, Changes in Resource Status. Locator fixed.
- A4 (wrong, ERCOT context #6, e20): "Qualifying Facilities: the LSL represents..." is item (d) of the power augmentation methods list for Combined Cycle Generation Resources (6.5.5.2(12)), not a general QF rule. Sentence and locator rewritten.
- A4 (link market-power-mitigation, e10): the SCED CCT HSL rule is for Generation Resources (IRRs in a separate sub-paragraph); other Resource types have separate definitions. Narrowed.
- Flag "6.5, 7.2" on Formula #1: false alarm (section number); the real defect was the unsupported claims above.
- Checked, no problem: e3, e4, e6, e7, e8, e12, e14, e17-e19, e21-e27, e28-e34 (pending NPRR1309 boxes sit after e23 and e33 and do not change the current text quoted). Guidance "Say it like this" restates cited facts.

## market-power-mitigation

- B (wrong, Formula #7): "Exceptions: the MOC for ESRs is set at the RTSWCAP" presented as the only exception. np-04 4.4.9.4.1(1) also lists: ERCOT-contracted Resources under 6.5.1.1(4) (O&M raised so every MOC point exceeds VOLL), QSGRs (VCM Appendix 7) and hydro (VCM Appendix 10). Added e58-e60.
- B (wrong, Formula #4): FIP, WAFP and FPRC definitions were not in the cited quotes (e31, e35). Added e54-e57 with the definitions and both FPRC branches (with and without a submitted Energy Offer Curve, for Resources with approved verifiable costs); noted the saved text gives no FPRC formula for Resources without approved verifiable costs.
- A1 (wrong, How it works #2, e4): "can be resolved when all Available Capacity of a Resource on the import side is eliminated" dropped "except nuclear capacity and minimum-energy amounts of coal and lignite capacity, that is Managed Capacity for a DME"; also "on all active constraints" was cited to e15 which does not say it. Restored the exception and removed the unsupported phrase.
- A1 (wrong, e26 / How it works #2 / Scenario #2): "not re-evaluated for the rest of the hour" omitted the next sentence: the SCED CCT still re-evaluates each DME's percentage of ECI Effective Capacity and pivotal-player status. Extended the quote and added the qualifier in both places.
- A4 (wrong, How it works #1, link hsl-lsl, e19): the "telemetered HSL, else zero" rule is for Generation Resources (IRRs separate); ESRs and CLRs have their own Available Capacity definitions. Narrowed.
- A1 (wrong, ERCOT context #2, Questions #10, e41): presented the FIP + $1/MMBtu + fuel adder test as the qualifying rule. It is one of several conditions (others include fixed-cost exclusion, a 10% actual-purchases requirement, and Adjustment Period submission), and the $1 is a threshold parameter WMS recommends and TAC approves (it can change). Reworded; added e61. Also added e62: the np-04 text carries an NPRR1279 replacement of the Exceptional Fuel Cost paragraph dated April 1, 2027 (the topic describes the current paragraph; the two conditions quoted are repeated in the replacement).
- A2/A1 (wrong, ERCOT context #3, link system-lambda, e40): NPRR826 pending text was summarised as "system lambda plus a value derived from Shadow Prices", dropping its condition (the value from (b) must be greater than zero for every constraint analysed; otherwise the 4.4.9.4.1 calculation applies). Condition added; the topic already labelled it pending.
- A3/A1 (wrong, ERCOT context #5, e49): "IMM describes the quantities as low overall" differed from the source: potential economic withholding "was low overall, but not trivial". Extended the quote and fixed the wording.
- B (wrong, Questions #12): "so only Resources that can meaningfully help resolve the constraint are capped" is a rationale the sources do not state. Removed; kept the SFP4 rule.
- A5 (e6): locator said 6.5.7.3 paragraph (1)(b)(i); it is paragraph (14)(b)(i). Fixed.
- Flags: "4.4, 9.4" (Formula #1 and #8), "3.19" (Formula #9), "25.504, 2023" (ERCOT context #6), "25.502" (link puct): all false alarms (section/rule numbers, years).
- Pending boxes: e40 (NPRR826) and e43 (NPRR1325) are already described as pending; no change to that framing. e10 (4.4.9.4.3) paragraph (7)(a)-(c) is current text; the NPRR1182 box only adds "excluding Controllable Load Resources" when implemented.
- Checked, no problem: e1-e3, e5, e7-e9, e11, e13, e15-e17, e20-e25, e27-e33, e35-e39, e42, e44-e48, e50-e53 (e51 correctly reported as a methodology change). Open item that np-04 now gives only the FPRC branches for approved-verifiable-cost Resources is stated in the Formula text.

## system-lambda

- A1 (wrong, Timeline #1, e19): the pre-RTC under-generation table was given without the same section's cap ("capped at LCAP plus $1 per MWh whenever the SWCAP is set to the LCAP"). Added e25 and the sentence.
- A3/A5 (wrong, Timeline #4, e23): "In 2025 ERCOT noted RTSWCAP at $2,000/MWh under RTC+B" is a statement in the revision description of the NPRR1290 PRS report (2025-08-13), a proposal document. Attributed to that report.
- B/A1 (Questions #8, e16): "when re-dispatching costs more than violating the constraint, SCED stops re-dispatching" was cited to e16, whose quote ended before that sentence (it is in the same paragraph). Extended the e16 quote to cover it. Statement was true; support gap only.
- B (ERCOT context #3, e22): "measured excess cost as system lambda multiplied by load" omitted that it is the difference between actual and simulated results. Clarified.
- Flags: "2025", "4.3, 5 MW", "2024" on Timeline #1-4, Key facts #4, Questions #6 and #12, ERCOT context #3, link rtc-b: all false alarms (years, section number, MW band).
- Checked, no problem: e1-e15, e17, e18, e20-e22, e24. The pending box in the April 2025 Attachment P (e20, e24) is already labelled pending and contrasted with the December 2025 edition. e3 paragraph (d) and e5 are current text. Formula section matches Attachment P 3.1 term by term (sign, SF*SP sum over lines). Guidance texts restate cited facts.

## black-start

- A1 (wrong, How it works #5, Questions #10, e33/e34): failed-test consequences stated without the rest of the same paragraphs: QSE may schedule a second test within ten Business Days (ERCOT approval), passing it resumes the fee from that date, and a second failure also triggers a claw-back of standby fees since the last successful test or start. Added e47-e49 and rewrote both places.
- A4/B (wrong, Formula #1, #2, e35/e37): BSSHREAF was described only from the Standard Form Agreement (Assumed Hours deemed Available). Protocol 6.6.8.1 states: BSSHREAF = 1 if elapsed hours BSSEH < 4380, otherwise sum of hourly availability flags over 4,380 hours divided by 4380; BSSAMT = (-1) * BSSPR * BSSARF; BSSARF = 1 at or above 0.85. Added e52-e56, labelled the Agreement version as such, and stated that the two wordings of the first-4380-hours rule differ and are not reconciled in the saved text.
- A5/B (wrong, Formula #5, e36): the definition of "Available" and its exceptions were cited to the Hourly Standby Fee table quote (e36), which does not contain them. Added e50 (definition) and e51 (failed availability test exception).
- A3/A4 (wrong, Key facts #8, e39): "A decertified Resource gets zero fee..." The Agreement text says fee goes to zero if the Resource does not remain certified or is in default as described in Section 10(A)(2)(e), with refunds as described in the Protocols. Reworded to attribute it to the Standard Form Agreement and the exact conditions.
- C/B (wrong, Questions #8): "This gives the provider an incentive to keep the Resource ready..." is an unsourced rationale. Removed.
- Flags: "3.14" (How it works #3), "8.1, 1.2, 1.5" (How it works #4), "6.6, 8.1" (Formula #1): false alarms (section numbers).
- Checked, no problem: e1, e3, e6-e8, e10, e12, e14, e16-e32, e38, e40, e41, e43-e46; the fee table (35% / 85% linear) matches e36 and e35. Open item "Default section and claw-back calculation not read in detail" left as is (the claw-back rule in 8.1.1.2.1.5(11) is now quoted; the Agreement Section 10 is still unread). Standard Form Agreement is the saved 2023-03-01 edition.
