# Brief for reviewers (read fully)

You are the independent second check on a private, source-backed ERCOT knowledge base (repo /home/user/ERCOT-knowledge).
A program has already confirmed that every evidence quote appears word for word in the saved source. It cannot
tell whether the quote actually supports the sentence that cites it. That is your job.

Read content/TOPIC_FORMAT.md first. Then, for each topic file you are assigned in content/topics/:

1. For every paragraph, bullet and link note that carries `[eN]` markers, read the cited quote(s) in the
   frontmatter and decide:
   - SUPPORTED: the quote(s) say what the sentence says.
   - OVERREACH: the sentence says more than the quote(s) (extra number, date, cause, scope, "always", a name),
     or generalises from one year/case, or presents pending/proposed text as current.
   - UNSUPPORTED: the quote does not back the sentence.
   Judge only from the quote text. Do not use your own ERCOT knowledge to wave a sentence through.
2. Check the guidance sections (Say it like this, Common confusion, Questions, Scenarios, Example): any number,
   date, rule or named fact that is not cited and does not restate a cited fact from the same file is a problem.
3. Check for stale or one-sided statements on these known issues and fix them wherever they appear:
   - Offer caps: since real-time co-optimization went live (5 December 2025) the sources show a $5,000/MWh
     day-ahead cap and a $2,000/MWh real-time cap, while PUCT rule 25.509 still states a $5,000 HCAP. A sentence
     saying simply "the offer cap is $5,000" should be corrected or qualified. content/topics/offer-cap.md has the
     verified quotes you can reuse (copy quote, source and locator exactly).
   - ORDC: it was retired at RTC go-live and replaced by Ancillary Service Demand Curves; sentences describing the
     ORDC adder as current are wrong (see ordc.md / asdc.md for quotes).
   - Pending protocol language (text in boxes introduced by "[NPRRxxxx: Replace/Insert ... upon system
     implementation]") must be described as pending.
4. Fix what you find, in this order of preference: (a) narrow the sentence to what the quote supports;
   (b) add a better verbatim quote from sources/text/ (search with grep; the format rules for quotes apply);
   (c) delete the sentence and add a line under "Open items" saying what could not be supported.
   Never invent support. Keep edits minimal; do not rewrite good text or restyle.
5. After editing each file run:
   cd /home/user/ERCOT-knowledge && node pipeline/verify.ts 2>&1 | grep -E "^(ERROR|warn ) <topic-id>:|quotes found"
   and fix until your topics have no ERROR lines.

Write a change log to preview/review-log/<your batch name>.md: for each topic, counts of supported / overreach /
unsupported statements found, and one line per change made (what the sentence claimed, what you did). List any
conflict between sources you noticed that is not already in the topic's Open items.

Boundaries: edit only your assigned topic files and your own log file. Do not commit. Do not use the web.

Report back in under 150 words: totals (statements checked, overreach, unsupported, fixed), the 3-5 most
important corrections, and anything the owner must decide.
