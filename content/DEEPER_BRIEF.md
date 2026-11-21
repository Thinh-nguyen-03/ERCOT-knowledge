# Brief for the deeper pass (read fully)

The knowledge base (repo /home/user/ERCOT-knowledge) has a general-level entry for every topic. You are now
deepening a set of topics. The reader is an analyst with 1-2 years in the ERCOT market who uses this for daily
reference, to connect ideas, and for interviews.

Read first: content/TOPIC_FORMAT.md (format), content/WRITER_BRIEF.md (how to work with the sources; its
"general-level pass" section does NOT apply to you), sources/sources.yaml (about 200 documents are now saved,
many added since the topic was first written), and preview/deeper/deeper-pass-items.md (the "Deeper pass" notes
the first writers left for your topics).

## The rule that has not changed

Write only what the saved source documents say. Every factual sentence carries an `[eN]` marker to a quote copied
verbatim from sources/text/. A program checks the quotes word for word. If you cannot find support, do not write
the sentence; record the gap under Open items.

## What an audit of the first pass found (do not repeat these)

About 1 statement in 14 was wrong after a first review. The causes, in order of frequency:
1. A quote that stopped just before an exception or condition ("except", "unless", "only if", "provided that",
   "notwithstanding"). Read the sentences before and after every passage you quote, and carry the exception
   into your sentence.
2. An opinion or recommendation (IMM, ERCOT staff, a party's comment in a revision-request report) stated as
   fact. Attribute it: "the IMM says", "ERCOT staff proposed".
3. A proposal, draft, pending box ("[NPRRnnnn: Replace ... upon system implementation]") or pre-go-live
   presentation stated as the rule in force. Say what it is and its date.
4. A figure without its period, basis or scope (a partial-year count given as a year; a national figure given
   as ERCOT's; an eight-hour-ahead measure beside a five-minute one).
5. A rule for one class (residential, a Resource type, day-ahead only) stated for all.
6. A wrong locator. Give the section number and heading the text actually sits under.

## What "deep" means for each topic

Work through the topic's "Deeper pass" items and its other Open items, and add what the sources support:
- Mechanics: the actual steps, formulas and parameters, with each variable explained in words. Add or extend a
  `## Formula` section where the Protocols or a rule give one. Quote formula text and variable definitions from
  prose; if a formula only exists as an equation image or broken table, describe it from its variable list.
- Numbers: current values, thresholds and timelines, each with its date ("as of", "for 2025", "effective").
  The OCR copies of the IMM reports (`imm-som-20NN.ocr.txt`) make table figures quotable; add "(OCR)" and the
  page to the locator.
- Exceptions and edge cases the general entry skipped.
- History: what changed, when, and by which revision request, rule or law, as a `## Timeline` where useful.
- Practice: what an analyst does with it (which data, which report, what to watch), only where a source says so.
- Connections: add links (with cited notes) to related topics; aim for 6-10 good links. Valid ids are in
  content/topic-list.json.
- Questions: bring it to 5-8 interview questions with cited answers, including at least two "why" or "what if"
  questions. Add or improve one scenario where natural.
- Keep and improve "Say it like this" and "Common confusion" (guidance; no new facts).

Keep what is already correct. Do not delete verified material to make room. Do not pad: a deep entry is
typically 12-25 evidence quotes; add only what teaches something. Close Open items you resolve (delete the line
or rewrite it as resolved with the date), and leave precise new ones for what the sources still cannot answer.
Set `depth: deep` and `as_of: 2026-11-21` in the frontmatter.

## Checking your work

After each file:
  cd /home/user/ERCOT-knowledge && node pipeline/verify.ts 2>&1 | grep -E "^(ERROR|warn ) <topic-id>:|quotes found"
Fix until your topics have no ERROR lines. Do not run pipeline/audit.ts, fetch.ts or render.ts.

Boundaries: edit only your assigned topic files. No web. No commits.

Report back in under 200 words: per topic, quotes before and after and the two or three most valuable additions;
then anything a source contradicted in the existing text (and what you did), and the most important things the
sources still cannot answer.
