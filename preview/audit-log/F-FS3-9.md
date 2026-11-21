# Audit log F-FS3-9

Note: the full `node pipeline/verify.ts` run currently crashes on a YAML escape error in another auditor's file (content/topics/ers.md, line 285). I verified my four topics by running verify.ts on a scratch copy containing only them: 171/171 quotes found, 0 errors, 0 warnings.

settlement-statements | quotes: 54 | context-problems: 1 | statements: 39 | wrong: 5 | flags: 0 real, 1 false-alarm | guidance-problems: 0

- A5 (e28): locator said Section 9.5.6(9) but the text copy line is 9.2.5(7) (DAM). The identical sentence also exists at 9.5.6(9), so the RTM bullet was true. Locator now states both places. (not counted wrong)
- B (e10): "the recipient is responsible for accessing them" was cited to e10, which is about Settlement Invoices. The statement is in 9.2.2(3). Added e55 and narrowed to DAM statements. (wrong)
- B (e23): "Each later statement reflects differences against the previous statement" was cited to the RTM Final Statement paragraph only. Narrowed to the Final Statement. (wrong)
- B (e46/e47): short-pay bullet and Question 12 said ERCOT "draws on Financial Security and offsets" and reduces payments "pro rata for revenue neutrality" with no quote for those steps (they are in 9.19(1)(b), (c) and the second sentence of (d), which sit outside e46). Added e56 (pro rata), e57 (draw), e58 (offset). Also e47 says the short-payer "is not complying with a payment plan", not "not on a payment plan" (changed in both places). (wrong, 1 statement counted for the payment-plan wording, 1 for the unquoted steps)
- B (e39/e37): "Statements bind the recipient once the dispute deadline has passed" was general; the quotes cover only the DAM Statement and the RTM True-Up Statement. Narrowed. (wrong)
- A1 (e11, Key facts): due date 1700 on the second Bank Business Day omitted "unless that day is not a Business Day". Added the exception. (not counted wrong)
- False alarm: "9.14" section number in Questions 6.

shift-factor | quotes: 23 | context-problems: 0 | statements: 29 | wrong: 2 | flags: 1 real, 1 false-alarm | guidance-problems: 0

- B (Formula #3, e13/e20): the sentence described the deration-price formula (Max(0, source minus sink DAWASF) x DASP x DRF) but the cited quotes are only variable definitions. The formula is at np-07 line 1442 with an unreadable summation operator ("[]"). Added e26 with the formula, stated the source-minus-sink direction and noted the operator did not extract. (wrong: it dropped the summation term and direction)
- B (Questions #10, e18): "which is why it sets caps on shadow prices" is not in the quote or nearby text. Removed. (wrong)
- B (ERCOT context #2, Questions #8, link to market-power-mitigation): the SFP4 "absolute value greater than" condition is paragraph (7)(c), which no quote contained (e11 is (a), e21 is (b)). Added e29 for (c). Also noted pending NPRR1182 would exclude Controllable Load Resources from the paragraph. (not counted wrong, true but unquoted)
- B (ERCOT context #3, Common confusion, e10/e19): "shift factors below the cutoff are ignored in the optimization" and "its cutoff is unrelated to its efficiency threshold" were in the source (Section 3.3) but in no cited quote. Added e28 and e27 and reworded to the source's "not related". (not counted wrong)
- Flags: link to market-power-mitigation "2%" was real (2% lives in e12, not e11); fixed by citing e12/e29. Key facts #7 "2025" is a false alarm (the edition date).

ufe | quotes: 28 | context-problems: 2 | statements: 27 | wrong: 3 | flags: 0 real, 2 false-alarm | guidance-problems: 0

- A2 (e27, link to energy-storage-resource): the quote sits inside an NPRR1188 "Replace the description above ... upon system implementation" box, but the link note stated it as current. Rewritten as a pending revision. (wrong)
- A2 (e28, link to clr): same, the MEBCL variable is inside an NPRR1188 "Insert ... upon system implementation" box. Rewritten as pending. (wrong)
- B (Formula #1, e16/e14): "f is the adjustment percentage for the category (the weights above)" equates f with the 11.4.6.2 weighting factors; Section 11.4.6.3 defines f only as "adjustment percentage" and never says it equals the weights. Marked as an inference and made the "weight 0.0 gets no UFE" consequence conditional on it. (wrong)
- False alarms: section numbers "6.3" and "11.4, 6.4".

load-forecasting | quotes: 48 | context-problems: 3 | statements: 42 | wrong: 6 | flags: 0 real, 14 false-alarm | guidance-problems: 0

- A1 (e44, ERCOT context #2): said ERCOT may procure up to 1,000 MW more Non-Spin "for hours it identifies as having high forecast variability". The quote stops after condition (a); the source continues with (b) a risk that actual net load exceeds forecast and (c) expected capacity and reserves not sufficient. Added all three conditions with new quote e52. (wrong)
- A1 (e46, ERCOT context #2, link to ecrs): ECRS minimum was said to be computed using the 85th-95th percentile forecast error; the quote says the sum of the frequency-recovery capacity and that percentile. Added the first term in both places. (wrong, 2 statements)
- A2/A4 (e29, ERCOT context #4, Timeline #5): presented 16 TAC 25.370 as in force from 3/1/2026 with no qualification. The rule's effective-date clause keeps ERCOT on the 2026 RTP load data until it builds new planning cases with the (c) criteria (also noted in the F-FO-2 log for large-load-growth). Added e56 and "phased in" wording. (wrong)
- B (ERCOT context #4, e29/e32): "it does not address the Seven-Day Load Forecast" is a negative claim no quote supports. Reworded to what the rule says and "no saved source says it applies to the Seven-Day Load Forecast". (wrong)
- B (ERCOT context #4, e30): the DSP-agreement half of the adjustment rule is in 25.370(e)(2)(A), not in e30. Added e54. (not counted wrong, true but unquoted)
- B (ERCOT context #5, Key facts #8, Timeline #6, e33): the 278,003 and 367,790 MW figures were given with no mention that the filing says the vast majority is Large Loads from TDSP submissions; added with new quote e55. Also "ERCOT then said" (e34) changed to "The same filing says ERCOT currently expected" because both are in the April 2026 filing. (context omission, A4)
- B (Questions #10, e34/e35): "supply chain constraints bring into question ..." was in neither cited quote; it is in the May 2026 proposal, Section II. Added e51. Questions #14 solar-error adjustment likewise added as e53. (not counted wrong)
- A1 (How it works #5, e20): "differs ... by more than the greater of 2000 MW or 4%" changed to the source's "above or below the average ... by the greater of". (minor wrong)
- Scenarios #3: "a high forecast can lead to commitments the load did not need" is an inference; labelled as such. (not counted wrong)
- All 14 flags are false alarms (years, section numbers, "3 GW" in a scenario title, "452 MW" which is in e6).
