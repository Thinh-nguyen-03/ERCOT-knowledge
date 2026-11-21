# Audit log F-FS1-5

ruc | quotes: 54 | context-problems: 2 | statements: 62 | wrong: 3 | flags: 0 real, 7 false-alarm | guidance-problems: 0
- B/A4: Timeline said "December 2025: RTC went live" citing only e51, which has no date. Added the IMM quote giving December 5, 2025 (e63); sentence cites it now.
- B: Questions #10 cited the explanation for the 2025 opt-out drop to e40 (a table) only. The explanation is in the IMM text next to the table; added it as quote e64. Also reworded the opt-out description to attribute it to the IMM (it was stated as fact).
- A4: Summer 2026 timeline line omitted that the ERCOT slide's August data runs only to 8/15 and that ERCOT calls the congestion share "nominally attributed". Added both (new quote e62) and ERCOT's own capacity attribution.
- Flags (5.7, 2026, 8%, 2025, 9%/18%..., 39%..., 2026, 77%/34%): all false alarms (section number, years, table values present in OCR tables, dates). Table 7, 8, 9 values and Oct 2026 figures checked against OCR/text: correct. NPRR1309 pending box is labelled pending in the text: fine.

sced | quotes: 34 | context-problems: 2 | statements: 31 | wrong: 3 | flags: 0 real, 3 false-alarm | guidance-problems: 0
- B (link ruc): said RUC-committed Resources get proxy Energy Offer Curves in SCED; the cited e23 only gives the $250 IMM offer floor. Removed the proxy claim.
- B (timeline NPRR1010): said it "takes effect with RTC implementation"; the quote only says it addresses changes associated with RTC implementation. Narrowed.
- B (link shadow-price): "for binding constraints" not in quote; replaced with "subject to security constraints".
- A4 (timeline SWCAP): reworded to the review's own note (SWCAP reduced to $2000 from $5000 after go-live on 12/5/2025), not a bare current-level claim.
- Flags (2026 x3): false alarms (years in titles/dates).

settlement-point | quotes: 17 | context-problems: 0 | statements: 18 | wrong: 4 | flags: 0 real, 1 false-alarm | guidance-problems: 0
- B (How it works #4, rtm link, Questions #4): said real-time imbalance is charged at each Resource Node, Load Zone and Hub; cited quotes (e9, e8) cover only Resource Node and Load Zone. Narrowed to those two.
- B: "Day-ahead Ancillary Service settlements do not use Settlement Point Prices" - quote only says they use DAM MCPCs. Narrowed.
- B: "energy-weighted ... instead of the simple time-weighted one" - "instead of" not in quote. Removed.
- A1: Hub creation "only by amending 3.5.2" was missing "Hubs settled through ERCOT"; added.
- Flag 6.6: false alarm (section number).

spp | quotes: 33 | context-problems: 1 | statements: 38 | wrong: 3 | flags: 0 real, 4 false-alarm | guidance-problems: 0
- B (Formula #3): the day-ahead Load Zone formula was described with "less ... times" but no cited quote contained the formula or sign. Added verbatim formula quote (e33): DASPP = DASL - sum over c of DALZSF x DASP; also corrected RTRDP label to "Real-Time Reliability Deployment Price for Energy" (it was called "reliability deployment price", a mislabel of the defined variable).
- A1 (ERCOT context #4, Key facts #8, Questions #10): "final at 1600 ... subject to Board review" cited only the finality quote. Added quote for 6.3(7)(a) (e34): ERCOT may still seek Board review of a correction, notifying Market Participants within 30 days. Key fact #8 had omitted the exception.
- B (timeline RTC): ending the ORDC adder design cited e18 only; added e31 (IMM: ORDC adder replaced by ASDCs). SWCAP timeline line reworded as in sced.
- Checked: 2023-2025 annual prices, ORDC under $0.02, RDPA $0.41 / 71%, and the 30 / 600+300 worked example arithmetic (2/3x20 + 1/3x50 = 30): correct. Flags (2026, $20/$50/$30): false alarms (worked-example inputs).
- Noted, not changed: Formula #1 covers the Resource Node formula; paragraph (2) for a logical Combined Cycle Resource Node is a separate rule not described.

three-part-supply-offer | quotes: 31 | context-problems: 1 | statements: 37 | wrong: 3 | flags: 0 real, 0 false-alarm | guidance-problems: 0
- A4/A5 (Formula): combined-cycle "greater than 90 MW" was presented as the Resource's size; the Protocol (4.4.9.2.3(4), 4.4.9.3.3(3)) says the category is determined by the capacity of the largest simple-cycle combustion turbine in the train. Added both quotes (new evidence) and the qualification.
- B (Formula): "most gas Resources" / "other categories use ... same expression" and Energy Offer Curve caps "use the same form": categories include fixed values ($15 nuclear, $18 coal, $10 hydro, Other = SWCAP, etc.). Narrowed to gas-fired categories.
- B (Questions #12): "so an ESR's offer is an Energy Offer Curve" is not in the source (and ESRs use Energy Bid/Offer Curves elsewhere in the KB). Removed; kept the quoted fact that Startup and Minimum-Energy Offers are not applicable to ESRs.
- NPRR1092/$250 floor and $75 NSRS floor: IMM statements, attributed correctly. No pending-box quotes found.
