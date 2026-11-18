# Brief for topic writers (read fully)

You are writing topics for a private, source-backed ERCOT (Texas power market) knowledge base. Repo: /home/user/ERCOT-knowledge. The reader is an analyst with 1-2 years in the ERCOT market who uses this for reference, learning and interview prep.

## The one rule that matters
Write ONLY what the saved source documents say. Do not use your own memory of ERCOT for any fact, number, date, name or mechanism. Every factual sentence must be backed by a quote you copy verbatim from a file in sources/text/. A program checks each quote by exact string match against that file, and a second reviewer checks that each quote really supports the sentence citing it. If you cannot find support for something, leave it out and list it under "Open items". An honest gap is good; an unsupported sentence is a failure.

## Read first
1. content/TOPIC_FORMAT.md  (the exact file format and rules)
2. sources/sources.yaml     (the source ids and titles)
3. content/topic-list.json  (valid topic ids for links)

## Working with sources
- Source text lives in sources/text/<source-id>.txt. Files are large (some over 1 MB) and some lines are extremely long. Never cat a whole file. Use `grep -n -i "term" file | cut -c1-300` to locate, then `sed -n 'A,Bp' file | cut -c1-2000` to read around it. For very long single lines use `grep -o -i ".\{0,400\}term.\{0,800\}" file`.
- Protocol sections: np-02 is Definitions and Acronyms (the best source for definitions; each defined term is on its own line followed by its definition). np-03 system management/ancillary services, np-04 day-ahead, np-05 RUC, np-06 real-time, np-07 CRRs, np-08 performance, np-09 settlement, np-16 registration, np-21 revision requests, etc.
- IMPORTANT, pending language: in protocol files, text inside table rows (lines starting with "|") that follows a note like "[NPRR1234: Replace the above ... upon system implementation ...]" is NOT yet in effect. Do not cite it as the current rule. Cite the current text. You may mention a pending change only if you say it is pending and cite the box.
- Quotes: copy one contiguous passage (1-6 sentences) exactly. Line breaks/spacing may differ, nothing else. No "..." elisions, no fixing typos, no joining passages. Avoid passages that span a page break in PDF-derived text (headers/footers/page numbers get in the way) and avoid table cells split across lines. In YAML, put quotes in double quotes and escape inner double quotes with \" (or use a `>-` block scalar when the quote has many special characters).
- Prefer tier 1 sources (protocols, PUCT rules, statutes) for definitions and mechanics; IMM State of the Market reports (imm-som-2025, imm-som-2024) and ERCOT reports for numbers, outcomes and context. Say the year for any number.

## What a good topic has
- Definition (1-2 sentences, cited). How it works (2-5 short paragraphs, each cited). ERCOT context (why it matters, what is specific to ERCOT, recent changes; cited). Key facts (3-8 bullets with numbers/dates/rules; each cited). Say it like this (guidance: a 2-sentence client-ready version, no new facts). Common confusion (guidance). Questions (3-5 interview-style questions with answers; cite facts). Scenarios (1-2 where natural). Open items (what you looked for and could not source).
- 5-14 evidence quotes. 4-8 links to other topic ids with a one-sentence note each.
- Plain direct prose. No filler. Do not copy the example text in TOPIC_FORMAT.md blindly; find your own quotes.

## Checking your work
After writing each file run:  cd /home/user/ERCOT-knowledge && node pipeline/verify.ts 2>&1 | grep -E "^(ERROR|warn ) <topic-id>:|quotes found"
Fix until there are no ERROR lines for your topics (warnings: fix where sensible). "QUOTE NOT FOUND" means your quote is not verbatim: re-copy it from the file. Do not weaken a claim to dodge the checker; fix the quote or drop the claim.

## Boundaries
Write only your assigned files in content/topics/. Do not edit other files, do not run fetch, do not use the web, do not commit. Set as_of: 2026-11-18.

## Report back (short)
For each topic: number of evidence quotes, and its open items. Plus anything in the sources that surprised you or contradicts common belief.

## General-level pass (applies unless your assignment says "deep")
The owner wants broad coverage first and depth later. For each topic write a solid general-level entry:
- Definition (cited), How it works (1-3 short paragraphs), ERCOT context (1-2 paragraphs), Key facts (3-5 bullets),
  Say it like this, Common confusion, 2-3 Questions, links (4-6), Open items.
- 4-8 evidence quotes per topic is enough. Do not chase every sub-rule; note deeper areas under Open items as
  "Deeper pass: ..." so the next round knows where to dig.
- If the saved sources do not cover a topic well enough to write a cited Definition, do NOT write the file.
  Report the topic as "skipped: no source" with what source would be needed.

## OCR copies of the IMM reports
`sources/text/imm-som-2025.ocr.txt` and `imm-som-2024.ocr.txt` (if present) are image-read copies in which the
tables are legible (the normal .txt files garble table numbers). You may quote from them using the same source id
(`imm-som-2025`); add "(OCR)" to the locator and include the page marker, e.g. "page 29 (OCR), Table 1".
Copy numbers exactly as they appear there.

## Clean copies of the bills
The bill PDFs put line numbers inside sentences. `sources/text/<bill-id>.alt.txt` (sb6-89r, hb1500-88r, sb3-87r,
hb4492-87r, sb2627-88r) is the same enrolled bill from the Legislature's HTML version, without line numbers.
Quote from the .alt.txt file using the same source id.
