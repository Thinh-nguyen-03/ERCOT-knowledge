# Audit log F-FS3-3 (stakeholder-process, tx-set, cop, hasl-lasl)

All four files pass `node pipeline/verify.ts` with no ERROR lines after the edits.

stakeholder-process | quotes: 64 | context-problems: 4 | statements: 48 | wrong: 12 | flags: 0 real, 6 false-alarm | guidance-problems: 1
- A1 (e21): the topic said the TAC Procedures "set four standing subcommittees: RMS, ROS, WMS and PRS". The quote lists only RMS, ROS, WMS under item 1; PRS is item 2 further down. Added evidence e66 (item 2, PRS) and reworded.
- A1 (e26): "At TAC each Representative has one vote" was cited to a quote that began after that sentence. Extended the quote to include it.
- A1 (e25): the PRS vote threshold omitted the "unless a two-thirds vote is required ... Appendix A" exception. Added it.
- A1 (e27): "four Members are elected from each Segment" misread "Representatives of four Members elected from each of the six Segments". Reworded to the quote.
- B: PRS Procedures (2011) "add that PRS also recommends a priority and rank". The cited quote (Scope) says nothing about priority and rank, and the procedures text has no such passage. Replaced with what the quote does say.
- B: TAC membership sentence cited e2, which is the PRS equal-voting quote. Removed e2 from that sentence.
- B: Q8 "Directors may not be TAC members" dropped the Public Counsel/OPUC exception in e34. Added it. Also added a pointer to the Open items about the Bylaws/PURA difference on Board composition.
- B: Key fact / Q10 "Board to the PUCT within 35 days": e42 says within the deadline the PUCT sets and in any event no later than 35 days. Reworded.
- B: Link to puct cited e7 for "nothing takes effect without PUCT approval"; e7 does not say that. Re-cited to e6 and e40.
- B: Link to ercot said the Board "sits at the top of the stakeholder path"; the path continues to the PUCT. Reworded to what e8/e13 say.
- B: Link to nerc lacked support for "submit" and the TAC appeal. Added e55 and e48.
- B: Link to tx-set cited e3 (PRS referral), which says nothing about TX SET. Added evidence e65 (Section 19.4(1)) and reworded.
- C: Common confusion said WMS and ROS "are not on the standard NPRR route as decision points" (an inference). Reworded to the Section 21 path plus the cited review roles.
- Flags 2011, 2025, 2023 (x2), 2022 and 25.506 are years or section numbers in titles/locators: false alarms.

tx-set | quotes: 41 | context-problems: 3 | statements: 36 | wrong: 8 | flags: 0 real, 1 false-alarm | guidance-problems: 1
- A1 (e18): "holds the switch in 'in review' status until the 814_04 arrives" stops before the rest of 15.1.1.4(2): if the 814_04 is still missing after three Retail Business Days and by the earlier of the requested date or 20 Retail Business Days, ERCOT changes the switch to "cancel pending". Added evidence e42, fixed How it works, Question 8, and removed the matching Open item.
- A1 (e37): "ERCOT passes these to the TDSP as an 814_03" omitted the quote's condition "where a Continuous Service Agreement (CSA) exists". Stated the condition and contrasted with Section 15.1.1.3 (e17).
- A4 (e31): "The Retail Market Guide counts days from Day 0" is the Appendix D1 timing-matrix assumption, not a general rule. Narrowed.
- B: Q10 said issues with 650 service orders "can still be raised through MarkeTrak Day-to-Day". The quote (e30) says nothing about 650s and "Day-to-Day" is not in it. Replaced with what is sourced; also retitled the question (it claimed "not show up in ERCOT's data").
- B: Scenario 7 said the current CR "may see the pending switch" in the Potential Load Loss Report; the report is described as notifying of potential Customer loss, with extra conditions in the text after the quote. Narrowed to the quoted description.
- B/C: Common confusion and link to nprr said TX SET change "is not an NPRR". The quotes only say the TAC subcommittee makes TX SET changes under Section 19.4. Reworded in both places.
- B: link to stakeholder-process: the dispute goes to TAC only per e26; added e26.
- B: How it works #1 "TX SET covers..." is Section 19's scope (e10); reworded to say so.
- Flag "19.7" is a section number: false alarm.
- Note: np-24 (Section 24) is the 2023-11-01 edition, older than the others; nothing in it contradicts the claims made.

cop | quotes: 30 | context-problems: 2 | statements: 34 | wrong: 6 | flags: 1 real, 1 false-alarm | guidance-problems: 1
- A5 (e10): the monitoring sentence "ERCOT monitors COP accuracy under Section 8 (3.9(3))" was cited to Section 8.1.2, which does not say that; the sentence is 3.9(3). Added evidence e33 for 3.9(3). Q14 called the 8.1.2 RUC-timeliness measure a "COP accuracy" measure; reworded as "one measure in Section 8.1.2".
- A1 (e9): "QSEs must show a RUC-committed Resource as ONRUC" lacked the quote's scope (committed for all RUC-Committed Intervals). Added.
- B (flag "3.9", real): How it works #2 listed Resource Status, HSL, LSL, emergency limits and AS MW with no citation. Added evidence e36 for paragraph (5)(e)-(g) and limited the sentence to what the quote covers.
- B: Link to dam said "for the DAM and DRUC initial state, the COP supplies Resource status" citing e15; e15 supports only the missing-COP-is-OUT part (the initial-state text is only for Combined Cycle units). Narrowed.
- B: Link to rmr named Section 3.14.1 "Reliability Must-Run"; the quote gives only the section number and 6.5.1.1(5). Removed the title.
- C: Common confusion "SHUTDOWN, STARTUP, ONHOLD ... they are not COP entries": the source says only that those codes are for Real-Time telemetry purposes, and lists them within the Section 3.9.1(5)(b) status list. Removed the "not COP entries" inference; added evidence e34 (SHUTDOWN) and e35 (ONHOLD). STARTUP not separately quoted.
- Flag "3.9, 8.1" on ERCOT context #4: 8.1 is a section number (false alarm); 3.9 as above.
- Checked, no problem: NPRR1309 pending boxes (OFFQS handled correctly; OFF and OFFQS current text quoted); NPRR1188 box not stated as the rule; 168-hour wind/solar HSL rule; 60-minute update duty and its exception.

hasl-lasl | quotes: 15 | context-problems: 1 | statements: 24 | wrong: 6 | flags: 1 real, 3 false-alarm | guidance-problems: 1
- A1 (e14): "it was not adjusted for NFRC as in Section 6.5.7.2" misread the definition: HASL is also used in other places "but is not adjusted for NFRC as in 6.5.7.2" (i.e. unlike the 6.5.7.2 calculation). Reworded.
- B: "What replaced them: ... HDL and LDL" asserts a substitution that no saved source states (the topic's own Open items and Question 8 say so). Reworded to "what the current rules compute instead" with that caveat.
- B (flag "3.18", real): the parenthetical about Section 3.18 requiring HSL to cover AS awards had no quote. Removed.
- B: Link to hsl-lsl ("calculated inside a Resource's sustained limits"), Common confusion ("sat inside those", "existed only to protect") were not in e1/e2 (HASL was also used in CSR share and RUC per e5). Reworded.
- B: Link to base-point ("HDL and LDL limit the SCED dispatch range around a Resource's telemetered output") not in e10; re-based on e11 (HDL as maximum capability of SCED dispatch).
- B: Link to energy-storage-resource claimed ONTEST handling; only ONHOLD is in the quote. Narrowed.
- Flags "7.2" (x2, section number in 6.5.7.2) and "2025" (date in timeline): false alarms.
- Checked, no problem: pending NPRR1013 notes are correctly described as notes marking deletion upon RTC implementation; the NPRR1290 item 6 text is attributed to ERCOT as a proposal; e7 states 12/5/2025 as the first Operating Day, and the "planned software migration" on 12/4 is not misused.
