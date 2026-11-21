# Audit log F-FS1-7 (deeper-pass material only)

energy-storage-resource | quotes: 45 | context-problems: 3 | statements: 34 | wrong: 8 | flags: 0 real, 3 false-alarm | guidance-problems: 1
- A1 (e28/e29, Emergency ops, Q8): sentence omitted the exception that follows the quote (an ESR co-located behind a POI with onsite generation that cannot export more may keep charging). Added the exception to all three places.
- A2/B (e42, PRC link and How it works): "ESR capacity capable of primary frequency response counts toward PRC, limited to 45 minutes" - the quote is the PRC8 formula only (min of X% of MDRR, HSL-Net MW, 45-minute SOC capacity); "capable of PFR" came from the variable table, not cited. Added quote e48 and described the full min().
- A4 (e40): "RUC studies use one hour for all AS types" - the quote says only that one hour is appropriate to respect SOC limits and as a deployment duration; the "all types, excluding FFR" text is the PUCT report's proposal bullet. Rewrote to the quote.
- B (e44 link to ordc): "ESR scarcity revenue now comes through AS prices in the optimization" - not in the quote. Replaced with the IMM statement that ASDCs replaced the ORDC adder.
- B (Key facts and Q10, e21/e22): tolerance given as "3% of AASP or three MW"; source is greater-of (over-performance) and lesser-of (under-performance). Fixed. Q10 title implied the single model caused tighter deviation; source says RTC+B's calculation is less tolerant than current Base Point Deviation. Retitled. Added note of the pending NPRR1014/NPRR1029 box on DC-coupled conditions. AASP expanded per the Protocols.
- B (Q12, e43): "raises the opportunity cost" was not in the quote. Added quote e49 (four times the prevailing energy price), kept as IMM view.
- B (e47): "ESREDP test at or below 3.0% in the test intervals" - quote covers "all other test sequence intervals". Narrowed.
- C: Q10 guidance "charge and discharge ranges share one tolerance" is unsupported; removed.
- False alarms: "2025" in How it works #2, #3 and Timeline #3 is the "July 2025" overview date.
- Key facts #4 reworded to the IMM's normalized figure.

load-shed | quotes: 38 | context-problems: 2 | statements: 24 | wrong: 6 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- A1 (e20, How it works #3 and Q8): quote's condition is "if all Load identified for manual Load shed and the Load identified in paragraph (A) has been shed"; text dropped the paragraph (A) load, and Q8 said "lower UFLS stages". Fixed both.
- B (e19): anti-stall stages given as 1.5%, 3.0%, 4.5%; source says 3.0% and 4.5% are totals. Fixed.
- B (e36): "the aggregate ORDC curve" with no context; source says AORDC is used to determine the ASDCs and is regression-fitted with mu*, sigma*. Clarified.
- B (Common confusion): "load shed" as a synonym for controlled outages was not in the cited quotes (e2). Added quote e40 ("Controlled outages are also referred to as load shed.").
- B (Q12): "keeps the table for the whole event" is not in e21/e22. Removed.
- B (Q10, e9): "unavailable if frequency dropped" is in the text after e31, not in e9. Added quote e41 and attributed to the FERC/NERC report.
- False alarms: "3,000" (inside the AORDC formula), "2021" twice (event/report year).

operating-notices | quotes: 32 | context-problems: 1 | statements: 24 | wrong: 3 | flags: 0 real, 1 false-alarm | guidance-problems: 0
- B/wrong place (How it works #6): "ERCOT acts immediately, including instructing TSPs or DSPs to drop load" cited e5, which is the Advisory notification quote. That sentence is in the text before e27. Added quote e35 and cited it; also added the co-located ESR exception that follows e27.
- B (Common confusion #1): claimed an OCN, Advisory or Watch does not place ERCOT in an Emergency Condition; the cited quote covers only OCN. Narrowed to OCN.
- A1 (e21, How it works #2): fuel-information request is conditioned on adverse weather being expected and on ERCOT's assessment; text stated it unconditionally. Added the condition.
- False alarm: "6.5, 9.3" in the nodal-protocols link is the section number.

prc | quotes: 32 | context-problems: 2 | statements: 36 | wrong: 3 | flags: 0 real, 7 false-alarm | guidance-problems: 0
- A3 (e32/e33, ERCOT context #5): said the IMM "itself notes" that PRC includes capacity from out-of-market actions. The slide lists this under "Some arguments ERCOT has made"; it is ERCOT's argument as summarised by the IMM. Rewritten with attribution.
- A4 (e23, ERCOT context #3): "restores SCED's normal post-contingency limits" - the quote concerns only constraints for which the 15-Minute Rating was used in SCED. Narrowed.
- B (Formula #1): variable definitions (RDF, LRDF_1, FRCHL, FRCO) were not backed by any cited quote. Added quotes e35-e38 (table rows). Not separately quoted: RDF_W, LRDF_2 (same table; wording follows the table) - residual.
- Pending boxes checked: NPRR1244 (PRC5/PRC6 wording) and NPRR1029 (PRC9) are in boxes; the topic labels PRC9 as pending and describes current PRC5 text. No change.
- False alarms: "20%" (inside formulas), "6.5, 7.5", "3.16", "2026" (document dates).

Verify: node pipeline/verify.ts shows 0 errors; no ERROR lines for these four topics.
