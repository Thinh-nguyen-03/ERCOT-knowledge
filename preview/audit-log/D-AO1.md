# Audit log D-AO1 (sample audit of deeper-pass material)

Counting rules used: "quotes" = evidence entries listed in the packet; "statements" = entries in the packet's
"Statements to check" list (one entry can hold several sentences; an entry counts as wrong once even if several
sentences in it were wrong); "flags" counted per flagged statement. All three files pass `node pipeline/verify.ts`
with no ERROR or warn lines. Quotes I added are new verbatim passages (listed below), checked in context.

permian-transmission | quotes: 61 | context-problems: 1 | statements: 45 | wrong: 6 | flags: 0 real, 23 false-alarm | guidance-problems: 0

- A4 (e48, ERCOT context #1; also Scenarios #2 and the waha-hub link): text said "the IMM expects the Waha-Katy net revenue gap to narrow again as work on these projects concludes", reading "these projects" as the Permian transmission projects. In context the IMM paragraph names no projects (no antecedent for "these projects" anywhere nearby), and the "two hubs" are Waha and Katy only by the figure description, which was not quoted. Changed to quote the gap as "the gap between the two hubs", say the passage does not name the projects, and added e64 (the Figure 55 sentence naming Katy and Waha). Counted wrong in ERCOT context #1.
- B (e16, ERCOT context #2): "Since 2014, about $23 billion of projects have been approved" was given with no as-of date or source. Now says it comes from ERCOT's December 2025 constraints report. Counted wrong (figure without its date).
- B (ERCOT context #2): "The worst case, per ERCOT" overstated e41, which says "primary time of concern". Reworded. Not counted wrong (meaning close).
- B (ERCOT context #3): "The costs are large and contested" was the writer's framing. No source disputes ERCOT's cost figures (the IMM criticises 4CP cost allocation, not the estimate). Changed to "Cost estimates are large and differ by scope and source." In the same entry, "which makes an all-345 kV rebuild harder" was not in e36; the support is in the next sentences of ERCOT's letter. Added e62 and e63 (verbatim, response 3) and rewrote the sentence to match them. Counted wrong (one entry).
- B (Say it like this): "so the PUCT approved..." made the IMM's 2025 price findings the reason for the 2024-2025 approvals, which no source says. It also said "delaying or denying" would make load shed more likely, but ERCOT ties load shed to a delay and a new study to a denial (e38, e60). Removed the causal "so" and split delay from denial. Counted wrong.
- B (Questions #2): "relied heavily on rebuilds needing outages" was not in the cited e36. Now cites e62, which says exactly that. Not counted wrong (true per the source's own next sentences).
- B (Questions #4): "both driven by the import-constrained Permian" dropped the Panhandle export constraints that e45 gives as the other cause of the West price. Restored. Counted wrong.
- B (Scenarios #2): the claim that the West's price premium and congestion "reflect the Permian import constraint" also dropped the Panhandle export constraint (e45, e46). It also had the e48 "projects" reading. Fixed both. Counted wrong.
- Flags: all 23 are false alarms. In 18 cases kV values are written "345-kV"/"765-kV" in the quotes. The rest are years or section numbers taken from the locator, the document title or the order's date ("Oct. 7, 2024", "January 2025", "Aug. 12, 2026", "§37.057", "§39.166", "July of2024" in OCR).
- Checked and correct: §39.166/39.167 statute and history note, both PUCT orders (conditional voltage decision, CCN preparation, regulatory asset), PURA 37.056(c-1) and 37.057, 16 TAC 25.101, the STEP dates, the cost arithmetic (2.24 - 0.89 = 1.35 is ERCOT's own), Geren letter responses, mileage and TPIT figures.

sc-west-negative-north-spike | quotes: 36 | context-problems: 1 | statements: 36 | wrong: 4 | flags: 0 real, 3 false-alarm | guidance-problems: 1

- A4 (e32, Questions #16): "The IMM expects the West-Houston hub gap to narrow as transmission work in the Permian concludes." The source says only "these projects" and names none. Reworded to say that, and added e42 (Figure 55 sentence identifying the Katy and Waha hubs). Counted wrong.
- A4 (e32, Scenarios #17): "the IMM expects the price gap between the hubs to narrow as projects conclude". In a scenario about HB_WEST and HB_NORTH, "the hubs" reads as the power hubs. The source means the Waha-priced West and Katy-priced Houston net-revenue comparison. Fixed with the same wording and e42. Counted wrong.
- A3 (How it works #3): "That is why the West zone had both the most negative-price intervals and the most price spikes" stated the IMM's explanation ("This duality explains why") as fact. Now attributed to the IMM. Also labelled the $5,251/MW GTC cap as the IMM's 2025 cap; the current Attachment P still lists $5,251/MW for base case, so the cap itself is not wrong. Counted wrong (minor).
- A3 (Key facts #7): "partly because of NPRR1230" was given as fact, but the IMM says NPRR 1230 "can partially explain" the decline. Attributed. Counted wrong (minor).
- C (Scenarios guidance, "(Reasoning) ... the hub averages both"): HB_WEST does not average the Panhandle. Protocols 3.5.2.4 and 3.5.2.5 list separate bus sets for the West and Panhandle hubs, and e26 says the Panhandle hub is separate. It is the West load zone that contains both areas. Changed to "the West load zone, which includes both the Panhandle and the Permian Basin, averages them", citing e5 and e15.
- Formula section checked term by term: the LMP formula and congestion component (e19, e21, e20) match Attachment P 3.1. The RTSPP formula (e27) matches 6.6.1.1: RNWF_y = TLMP_y / sum of TLMP_y, where y is a SCED interval in the 15-minute interval. The DA congestion valuation (e38) matches. The illustrative Suppose arithmetic is correct: 0.10 x 3,000 = 300 and 0.2067 x 3,000 = 620.1. It is labelled illustrative and stays under the cap.
- Flags: 3 false alarms. In each, the year "2025" comes from the quote's context or locator ("The 2025 shadow price caps were"; "Net revenues ... varied significantly by location in 2025"; the West zone price paragraph about 2025).

sc-hot-august-evening | quotes: 33 | context-problems: 3 | statements: 34 | wrong: 5 | flags: 1 real, 6 false-alarm | guidance-problems: 0

- A1 (e28, How it works #2 and Scenarios #5): "on the lowest days of 2026 average SOC was 50% lower" (and "the lowest-SOC days were 50% lower than in 2025"). The next sentence on ERCOT's slide qualifies this: lower SOC% "is not necessarily lower SOC MWh" because ESR MWh capacity is higher. The figure is a percentage, not stored energy. Added e37 with that caveat and reworded both. Counted wrong twice (two entries).
- A4 (e18, Scenarios #8): "more ESR capacity was offered within $100/MWh of that lower cap". The source says a "slightly higher" proportion than in the previous two summers, largely because of the lower cap, based on the 20:00 SCED snapshot. Reworded and added e38 (the snapshot note). Counted wrong.
- B (e35, How it works #1): "12 of the top 20 hourly net load hours on record". The slide does not say what period is ranked. Removed "on record" and noted that the period is not stated. Counted wrong (scope).
- B / formula term check (Formula #1, the derived ceiling): the $11,052.01 total was labelled as arithmetic. But it substituted np-04's "VOLL used to determine the ASDCs" (= DAM HCAP) for Attachment P's "effective VOLL" and "effective RTSWCAP", and no saved source equates the two. Relabelled as knowledge-base arithmetic under that stated assumption, and said no source confirms the two VOLL terms are the same value. Counted wrong. This is the one real flag ($11,052.01).
- A3/A2 (e22, Questions #10): the heading "Why did ERCOT keep the day-ahead cap higher..." presented ERCOT's argument in a September 2026 party filing (PUCT Project 59550) as ERCOT's reason for a cap it did not set alone. Heading neutralised and the answer attributed to the filing. Not counted wrong (the answer already said "ERCOT says").
- Offer caps checked against sweep D: $5,000 DA and $2,000 RT in np-04 (e20), the RT reduction at RTC go-live on 12/5/2025 (e12), and the ORDC replaced by ASDCs (e9, e25). These are correct.
- Flags: 6 false alarms. Five are years from source titles, locators or dates ("summer 2026 review", "August 13, 2026" TAC slide, "summer 2023 review", "December 5, 2025 version"), and one is the 2025 in Formula #1. The 1 real flag is $11,052.01, resolved as labelled knowledge-base arithmetic (see above).

## Totals

quotes 130 | context-problems 5 | statements 115 | wrong 15 (13%) | flags 1 real, 32 false-alarm | guidance-problems 1

New evidence added: permian-transmission e62, e63, e64; sc-west-negative-north-spike e42; sc-hot-august-evening e37, e38.

Note: while this audit was running, my edits to permian-transmission.md and sc-west-negative-north-spike.md were
included in another batch's commit (c5dba8c "Sample audit D-AS2"). I did not commit anything.
