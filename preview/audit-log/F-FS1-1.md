# Audit log F-FS1-1 (esi-id, lse, mora-report, qse)

esi-id | quotes: 32 | context-problems: 2 | statements: 34 | wrong: 7 | flags: 0 real, 4 false-alarm | guidance-problems: 1
- A2/A4 (Potential Load Loss Report, ERCOT context #4, Scenario #3): sentence said the report tells the REP of record about pending switches/moves; source limits it to orders whose scheduling transaction arrived outside the two Business Day window. Narrowed both.
- B (link to mass-transition and ERCOT context #8, e24): claimed a Mass Transition moves ESI IDs only CR to POLR/designated CR; source also covers TDSP to TDSP and "not completely supported". Rewrote to the source wording.
- B (link to market-information-system): "or a posted extract" not in the cited quote, and Find ESI ID verifies the Service Address, not the ESI ID. Fixed.
- B (link to settlement-statements): said service history "is used in Settlement" and variances "lead to" resettlement; quotes say a participant "may seek" correction. Reworded.
- B (Question 3, 814_21 precondition): "which ensures the ESI ID is in registration data" was the writer's inference. Replaced with the quoted rule and a statement that no reason is given.
- B (Question 4, aggregation "because ... Load Profiling and settlement use"): invented causal reason. Replaced with the quoted conditions plus note that no reason is stated.
- C (Common confusion): no change needed beyond the above; false-alarm flags: "15.4" x2 (section number), "150 kW" x2 (150 kWh is in the quote).

lse | quotes: 34 | context-problems: 1 | statements: 28 | wrong: 5 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- A1 (e35, Virtual QSE two Bank Business Days): quote stopped after option (a) "or"; the cut-off option (b) and the exception (not available where the LSE is the same Entity as the QSE) were missing. Extended the quote and the sentence.
- B (Scenario 1): presented "designate new QSE or Emergency QSE ... or be designated Virtual QSE" as alternatives; Virtual QSE status is the interim state in which the choice must be made. Rewritten in sequence.
- B (ERCOT context #3 and link to polr): "Mass Transition ... CR to POLR" and "defaulting CR" not supported by e24, which also covers TDSP to TDSP and Applicable Legal Authority. Reworded.
- B (Question 3): "so ERCOT deals with a qualified scheduling counterparty" was inference. Replaced with quoted rule, stated no reason given.
- B (How it works #4 / Key facts #3): omitted that applications without the proper fee are returned and the rest of the Section does not apply; also "of the rejection letter" changed to "after receiving". Added.
- Flags false alarm: "16.3", "16.4", "6.1" (section numbers).

mora-report | quotes: 32 | context-problems: 3 | statements: 35 | wrong: 7 | flags: 0 real, 10 false-alarm | guidance-problems: 1
- B (How it works #1): "ERCOT may post revised versions" was not in the e1 quote (it was in the text after it). Extended e1.
- B (Formula, "The MORA says why it uses proxies"): cited only e14 (PRC definition); the MORA reasoning sat outside the e5 quote. Extended e5 and cited it.
- B (Formula #1): "MORA's own table footnote" on EEA Level 1/3 was cited to e12/e13 only; it is a table row in the deterministic results, text outside any quote. Extended e27, cited it, called it the results table. Also added the omitted Level 1 condition ("without the prescribed actions").
- B (Formula #4): "based on historical data and forecast assumptions" and "wind and solar from synthetic profiles" were not in the cited quotes (e20 covers wind only). Narrowed.
- B (Formula #5): opening sentence "not probabilistic but depend on model draws" unsupported; LFL "dropping to 50%" reworded to the source's "reduction to 50%". Fixed.
- B (Question 5): "separate storm and low-wind/BESS tab with stress charts" not in e30. Removed.
- B (link to cdr-report, Common confusion #1): "looks at least five years ahead"/"multi-year" not in e11 (five years is from the PUCT rule on the annual report). Replaced with e11 wording.
- C/B (Common confusion #2): CDR Planning Reserve Margin comparison uncited. Reworded to the MORA's own stated formula.
- B (Scenario 3): "a probability from 10,000 simulated outcomes" was inference; reworded to what e6/e9 state.
- Checked arithmetic of the deterministic table (74,616+13,275+431=88,322; less 8,105=80,217; +16,179+720=97,116; 3,680+2,599=6,279); consistent. Flags false alarm: years (2027, 2021), "417 MW", "25.505", "2,500, 1,500 MW" (in quotes).

qse | quotes: 40 | context-problems: 0 | statements: 37 | wrong: 2 | flags: 0 real, 0 false-alarm | guidance-problems: 0
- B (How it works #7): the sentence "The following paragraphs cover termination and suspension" cited e7 (Virtual QSE definition), which says nothing of the kind. Replaced with the definition.
- D/A3 (link to ruc-make-whole): IMM description of RUC cost allocation stated as fact; attributed to the IMM.
- B (Scenario 3): omitted the e8 exception for a REP that is the same Entity as the QSE. Added.
- Minor: Question 8 began "Because ..." as a fragment; reworded. Note: the Credit FAQ disclaimer "Protocols control" is in the source text (line 5) but not in the cited quote; left as is.
- Sweep: e15 (Unreasonable Financial Risk indicators) is a "may include" list and sentence says so; e9/e11 IMM statements are attributed to the IMM. Formula sections: none in these topics except mora-report.
