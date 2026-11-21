# Deeper pass and audit: state (written 2026-11-21 ~14:10 UTC, for the next check-in)

## Done
- All 153 topics exist and are `depth: deep`. 6,444 quotes verified word for word.
- Nine industry-reference topics audited (preview/audit-log/I1.md, I2.md).
- Sample audit of the deeper pass: 30 topics, 1,067 statements, 77 wrong before fixes (7.2%):
  single-source topics 5.9%, multi-source topics 9.5%. Logs: preview/audit-log/D-A*.md.

## In progress: audit of the remaining 114 deepened topics
- Plan: preview/deeper/audit-full.json. FO-* = multi-source (Opus), FS1-* = must-know single-source (Sonnet),
  FS3-* = other single-source (Sonnet). Brief: content/AUDIT_BRIEF.md plus the sample-audit additions
  (packets list only new/changed material; check formulas term by term; label writer arithmetic).
- Each batch writes preview/audit-log/F-<batch>.md. A batch is done when that log exists and lists all its topics.
- Launched at ~14:10 UTC: FO-1..FO-12 and FS1-1..FS1-10. NOT yet launched: FS3-1..FS3-11.
- If agents stopped on a usage limit, resume with SendMessage or relaunch the batch (topics with no log entry).
- DO NOT run `node pipeline/audit.ts` while auditors are running (it rebuilds the packets). If packets must be
  rebuilt, use: `node pipeline/audit.ts --since bcd6d4f`.

## After the audit
- Tally preview/audit-log/F-*.md and D-*.md, `node pipeline/render.ts`, update preview/DECISIONS.md, commit, push,
  send the reading view and decisions page to the owner.
