# Background (history and rationale – not needed to implement)

Implementing agents do **not** read this file. It keeps why things were decided, what was rejected and where the research came from, so nothing is lost. Every binding rule is in `context.md`, `steps/` or `ux/`.

## Decision history

All decisions taken: D-01 – D-12 on 2026-11-20; UX decisions D-13 – D-17 on 2026-11-21 after the UX review of the first implementation cycle; mockup consistency D-18 – D-21 and PDF layout D-22 on 2026-11-21. ⚠ = known risk, accepted for the MVP (see risk register).

| ID | Decision | Recommended was |
|----|----------|-----------------|
| D-01 | Project time **and** legal working time from the start | Project time, extensible |
| D-02 | Own username/password ⚠ | Company SSO |
| D-03 | Admin period lock, no individual approval | same |
| D-04 / D-04b | One global activity list / no clients, no billing | same / – |
| D-05 | Simple absence marker, no approval | same |
| D-06 | Assigned projects + projects open to everyone | same |
| D-07 | Target hours and overtime balance in MVP | same |
| D-08 | Editable until the period is locked ⚠ | Within X days |
| D-09 | No money values | same |
| D-10 | Visibility: employee + backoffice; leads own projects; management aggregated ⚠ | same |
| D-11 | Keep data forever ⚠ | Decide with DPO |
| D-12 | German + English | – |
| D-13 – D-18, D-20, D-21 | see `context.md` | same (D-13: –) |
| D-19 | Dashboard export also as PDF | Drop PDF |
| D-22 | PDF layout B "Report" | – (two options presented) |

**D-01 legal background.** Since the Federal Labour Court decision of 13 Sep 2022 (BAG 1 ABR 22/21), employers in Germany must record start, end and duration of working time. A government draft amending the Working Hours Act (June 2026, not yet passed as of Oct 2026) plans electronic, same-day recording, a 2-year transition for companies with 50–249 employees, an employee right to a copy, and fines up to €30,000. Exempt groups (e.g. executive staff under § 18 ArbZG) may need a simplified mode – to clarify with HR (step 0.1).

**D-04b.** If billing to external parties becomes relevant later, clients and a billable flag can be added.

**D-22 options** (PDF canvas): **A · Ledger** – a formal document, lines instead of boxes, very little colour, the donut replaced by a list (not chosen). **B · Report** – continues the app's light look: header band in the accent tint, figure tiles, cards, status chips, charts as on the dashboard (chosen). Reason: without a common layout each PDF would get a one-off design, repeating the cycle-1 failure on paper; with B a PDF looks like it comes from the same product as the screen it was exported from.

**MVP size.** Recording legal working time from the start (D-01), together with overtime, absences, budgets and the full set of reports, makes the MVP considerably larger than a pure project-time tool, hence the split into increments 1a and 1b.

## Lessons from the first implementation cycle (reason for D-13)

Cycle 1 built all features, but the UX review was devastating: the app worked but looked like a wireframe. The plan described *features*, not *screens*, and the Definition of Done had no design criterion, so every screen became "a form for each feature, stacked on a page". The design was then made and approved (2026-11-21).

| What cycle 1 built | Why it failed | What is required now |
|---|---|---|
| Top toolbar with a flat row of 7–10 text links | No grouping, no orientation, does not scale per role | Grouped side menu with icons; top bar with title, theme switch, DE/EN, account menu |
| Start page with one sentence | Most-used page did nothing | **Today** page |
| Recording page with six stacked forms | One form per feature, no task flow | Timers on Today; Day page for any date; "Record a working day" in a dialog |
| Week grid of plain inputs | No totals, status, today/weekend cues | Timesheet card with tiles, today/weekend columns, day status, side cards |
| Dashboard with two date fields, tiles, bar tables | No hierarchy, no charts | Filter row, five tiles, two charts, budget table, completeness by team, export menu |
| Administration as ten pill buttons plus a test-mail form on one page | No structure | Four admin groups, each with tabs |
| Default component theme, system font, theme only follows OS | Generic look, no choice | Teal palette, Inter, light/dark/high contrast, user choice |
| Raw ISO dates (`2026-11-21`) | Not readable, not localised | Formatted per language |
| Implausible figures shown as-is (overtime balance "−57606:52") | Wrong data looked real | Plausibility check before figures are styled as key figures |
| No loading, empty or error states | Blank or broken-looking pages | Every page and card has them |

Conclusions (built into the plan): UX design is a first-class input; shell, theme and building blocks come first; each step builds screens for tasks; every step's demo includes a design check in light and dark.

## Mockup history

Screen canvas, first round: three directions – `Main.dc.html` (A · Workspace: sidebar + Today hub), `Rail.dc.html` (B · Focus: navigation rail + timesheet), `Executive.dc.html` (C · Command: grouped top navigation + dashboard). **A won**; the approved screens combine it with parts of B and C. The three files are reference only. PDF canvas: A · Ledger not chosen (see D-22).

## Accepted risks (MVP)

Known and accepted; **no mitigation in the MVP**. Review before the MVP is extended or rolled out.

| ID | Risk | From | Possible mitigation (after MVP) |
|----|------|------|--------------------------------|
| R-01 | **Indefinite retention** conflicts with GDPR storage limitation (Art. 5 (1)(e)) and erasure requests of former employees. The draft law mentions retention of up to 2 years. | D-11 | Confirm with DPO; retention rules (H-04) or manual anonymisation of former employees. |
| R-02 | **Late recording allowed.** The draft law requires same-day recording; entries can change until the lock. | D-08 | When in force: recording deadline (B-17) and/or a late-entry report from the change history (H-01). |
| R-03 | **No second login factor**, also for admins. | D-02 | 2FA (A-06), at least for admins; or company SSO. |
| R-04 | **Co-determination / privacy not cleared.** Working-time recording and visibility rules typically need works council co-determination (§ 87 (1) no. 6 BetrVG) and a privacy notice. | D-01, D-10 | Involve works council and DPO; adjust visibility rules if required. |
| R-05 | **Legal status open.** ArbZG amendment is a draft (Oct 2026); deadlines, exemptions and break/rest checks may differ. | D-01 | Re-check before go-live and when the law is passed. |

## Research sources

Feature research (Nov 2026): [My Hours](https://myhours.com/best-time-tracking-software-small-business) · [HiveDesk](https://www.hivedesk.com/blog/time-tracking/top-features-time-tracking-software) · [actiTIME](https://www.actitime.com/time-tracking/must-have-features-timesheets-app) · [Rework (approvals, locking, audit)](https://resources.rework.com/tools/time-attendance/best-timesheet-software-2026) · [Beebole](https://beebole.com/blog/best-time-tracking-tools-with-automated-timesheet-approval) · [Forbes Advisor](https://www.forbes.com/advisor/business/software/best-time-tracking-software/) · [Celoxis](https://www.celoxis.com/article/best-time-tracking-software)

German working-time recording (to verify with legal/HR): [Digitally Done](https://digitally-done.com/blog/arbeitszeiterfassung-2026-2027-was-gilt) · [Factorial](https://factorialhr.de/blog/arbeitszeitgesetz-reform/) · [Taxmaro](https://www.taxmaro.com/post/arbeitszeiterfassung-pflicht-2026-arbeitgeber-umsetzen)
