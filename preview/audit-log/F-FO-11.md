# Audit log F-FO-11

sc-data-center-ppa | quotes: 47 | context-problems: 3 | statements: 29 | wrong: 6 | flags: 0 real, 4 false-alarm | guidance-problems: 0
- A1 (e8, How it works #3, Questions #12, plus the Scenarios co-location bullet): the text said a generator must notify ERCOT before any net metering arrangement with a stand-alone resource. The quote stops before PURA §39.169(b), which exempts a resource whose registration already included a co-located large load, or one a parent company of the customer has majority-owned since January 1, 2025. Added e50 (§39.169(b)) and stated the exceptions.
- B (e23, How it works #3): "these SB 6 provisions" pointed back to the backup-generation, curtailment-protocol and net-metering items. The CDR names only the Large Load interconnection requirements and ERCOT's curtailment authority, and it says "since the May 2025 CDR release". Narrowed the sentence to match.
- B (e12, How it works #4, Common confusion #1, the Scenarios analyst bullet): the text called the forecast the "preliminary" 2026 LTLF. The source does not use that word. Removed it.
- A4 (e37, Key facts #5): the line "September 2026: ERCOT paused energization" put the pause itself in September. The Board update only says that as of September ERCOT "has paused". Changed it to "As of September 2026, ERCOT had paused".
- A4 (e35/e36, Questions #8): the text said price spikes came between 7 and 9 p.m. "when solar ran at a 1.7% capacity factor". The 1.7% is solar's capacity factor in the daily peak net load interval, not an average over 7 to 9 p.m. Reworded it with the source's scope.
- A4 (e47, Scenarios #16): the text said Norton Rose Fulbright "describes exactly this": a buyer actually paid $9,000/MWh. In the source this is a hypothetical example ("take a data center... If that plant was shut down"). Reworded it as a hypothetical example.
- B (e44, How it works #6): "cash" contribution in aid of construction was not in the quote. Extended e44 to include 25.252(c)(2)(ii), "direct cash payment". The statement was correct, so it is not counted as wrong.
- B (Common confusion #1, minor): "the VPPA settles at a hub" became "is typically settled", matching e28/e29. Also added [e16] to Scenarios #10 for "load zone". Neither is counted as wrong.
- Flags, all false alarms: 75 MW (e3 says "75 megawatts"); 2026 in How it works #6 and Scenarios #6 (source dates/titles); 2025/75 MW in the sb6 link (statute year, e3).

sc-load-forecast-miss | quotes: 34 | context-problems: 1 | statements: 30 | wrong: 0 | flags: 0 real, 10 false-alarm | guidance-problems: 0
- A4 (e38, Key facts #4): the source's summer comparison counts August only through 8/15 for each year. Added the period and new quote e40 (chart footnote). Not counted as wrong, because the claim is ERCOT's own and still holds.
- B (e2, How it works #2): "a forecast that is too high can lead to extra RUC commitments..." was the writer's inference from e2. Replaced it with the IMM's own statement (new e39, SOM 2025 C. Forecast Error). Its content was consistent, so it is not counted as wrong.
- Flags, all false alarms: 2026/2027/2025 (document titles and dates); 39% (in the e36 table as "39"); 452 MW (e8, and the context confirms it is the 8-hour-ahead figure); 3 GW (from the scenario premise, a Reasoning bullet).
- Formula: none in this topic. The table values (e36 Table 9) were checked against the OCR and match.

sc-nprr-opinion | quotes: 51 | context-problems: 0 | statements: 42 | wrong: 1 | flags: 5 real, 4 false-alarm | guidance-problems: 0
- B (e6, Questions #6): the text said DRRS resources "must be able to reach their award within two hours". The statute says they must be "On-Line and dispatchable not more than two hours after being called on for deployment". Replaced it with the statute's wording.
- Flag real (How it works #4, Timeline #4): the date of the joint comments, April 9, 2026, was in no cited quote (it was in the e34 context only). Added e53, the IMM sentence stating the filing date.
- Flag real (How it works #5, Key facts #7, Questions #10): the period "December 5, 2025 to February 2026" was in no quote (only in the figure title and locator). Extended e41 to include the Figure A5 title. The statements were correct.
- Flags, false alarms: "June 2026" (Board item date in the source title); February 2026/February 3, 2026 and April 2026 (comment ids IMM 020326 and 042426); "2025" in Scenarios #4 (report year).
- Checked: the pending boxes (e33, e44) are presented as pending. The opinions of the IMM, Vistra and LCRA are attributed. e18's "proposed AS Methodology" is the 2026 methodology, and the text does not misstate it.

sc-uplift-surprise | quotes: 45 | context-problems: 1 | statements: 37 | wrong: 1 | flags: 0 real, 8 false-alarm | guidance-problems: 1
- B (e7/e40, Questions #8): the text said make-whole "flows to loads by LRS, so fewer opt-outs means more uplift". That skips the capacity-short charge that comes first (5.7.4). Rewrote it to show capacity-short QSEs pay first and the remainder is uplifted by LRS, and labelled the conclusion as Reasoning.
- A4 (e37, Key facts #8, Questions #12): the summer RUC hour counts include August data only through 8/15 for each year. Added the period and new quote e49. Not counted as wrong.
- C (Say it like this): "every load-serving QSE pays its share based on how much load it served" contradicts the capacity-short first step for RUC make-whole. Qualified it.
- Formulas #1-#4 were checked term by term against np-06 6.6.2.2 (the p summation is over Settlement Points, floored at 0), np-05 5.7.4.1 (the cap prose matches the Max form with negative payment amounts) and np-09 9.19.1 (TSPA is the Total Short Pay Amount; MMARS = MMA/MMATOT; the reference month is the month before the default). No errors.
- Flags, all false alarms: 25.520 (the rule number in the e13 heading); 39% (in the e45 table); 2025/2021 (report years and table titles).
