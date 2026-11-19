# Brief for auditors (read fully)

You are auditing a private, source-backed ERCOT knowledge base (repo /home/user/ERCOT-knowledge). The owner asked
for the work to be checked independently. Assume the text may be wrong. Your job is to find what is wrong, fix it,
and report honestly how much you found, including "nothing" where that is true.

What has already been done: a program confirmed every evidence quote appears word for word in a saved source, and
a first reviewer compared each sentence with its quote, reading the quote alone. What nobody has checked is the
quote IN CONTEXT. That is the main new thing you do.

## Your materials

- Topic files: content/topics/<id>.md (format: content/TOPIC_FORMAT.md).
- One audit packet per topic: preview/audit/packets/<id>.md. It lists every evidence quote with about 300
  characters of the source text BEFORE and AFTER it, the source's title, tier and edition, and the heading above
  it; then every cited statement; then the uncited guidance text. Mechanical flags are marked "FLAG".
- Full source text: sources/text/<source-id>.txt (plus .ocr.txt / .alt.txt copies). Use grep/sed when the packet
  context is not enough. Never cat a whole file.
- DO NOT run pipeline/audit.ts (it deletes and rebuilds the packets other auditors are reading).

## For each assigned topic

A. Context check, for every evidence quote. Read BEFORE and AFTER. Problems to look for:
   1. Truncation that changes meaning: the quote starts or stops mid-sentence and the missing words negate,
      limit or condition it ("not", "except", "unless", "only if", "prior to", "until", a list the quote cuts short).
   2. Not the rule in force: the quote sits in a pending box ("[NPRRnnnn: Replace ... upon system
      implementation]"), in a proposal, draft, staff recommendation, or a party's comment inside a revision-request
      report, or in a historical document, while the topic presents it as the current rule or as settled fact.
   3. Wrong speaker: the quote is one stakeholder's or the IMM's opinion or recommendation, presented as ERCOT's
      rule or as fact. Opinions are fine if the sentence attributes them ("the IMM says ...").
   4. Wrong scope: a different year, season, region, product or defined term than the sentence claims; a national
      figure used as an ERCOT one; an example or scenario figure presented as an outcome.
   5. Wrong place: the locator names a section or term that the surrounding text shows is a different one.
B. Support check, for every cited statement: does the quote (in its context) say what the sentence says? Every
   "FLAG number-not-in-quote" must be resolved: the number must appear in a cited quote, or be simple arithmetic
   on quoted numbers that the sentence states openly, or be removed/re-sourced. A flag can be a false alarm
   (for example "5,000" vs "$5,000.00", or a year inside a document title); say so in your log.
C. Guidance text: any number, date, rule or named fact in the uncited guidance list that does not restate a cited
   fact from the same file must be cited or removed.
D. Known issues to sweep for: offer caps (since 5 December 2025: $5,000/MWh day-ahead and $2,000/MWh real-time in
   the Protocols; PUCT rule 25.509 still states a $5,000 HCAP; see offer-cap.md for verified quotes); the ORDC adder
   ended at RTC go-live and was replaced by Ancillary Service Demand Curves; Batch Zero: the saved order says ERCOT
   "intends to pause", not that it paused.

## Fixing

Fix in this order of preference: narrow the sentence to what the source supports; attribute it ("the IMM
recommends", "a proposed rule would", "as of <date>"); replace the quote with a better verbatim passage (same
rules: one contiguous passage copied exactly, no ellipsis); otherwise delete the sentence and add an Open item.
Never add a fact from your own knowledge. Keep edits minimal. After editing a file run:
  cd /home/user/ERCOT-knowledge && node pipeline/verify.ts 2>&1 | grep -E "^(ERROR|warn ) <topic-id>:|quotes found"
and fix until your topics have no ERROR lines.

## Log (required)

Write preview/audit-log/<batch>.md. For each topic one line of counts in exactly this form:
  `<topic-id> | quotes: N | context-problems: N | statements: N | wrong: N | flags: N real, N false-alarm | guidance-problems: N`
followed by one bullet per problem: its type (A1-A5, B, C, D), what the text claimed, what the source says, what
you changed. "wrong" means the statement misled a reader before your fix. Do not pad and do not round down.

Boundaries: edit only your assigned topic files and your own log. Do not commit. Do not use the web.

Report back in under 200 words: totals from your log, the 3-6 most serious problems (most serious first), and
anything you could not resolve.
