# Step 13 – Reports

Phase 1b · Needs: 12 · Features: F-02, F-03, F-06, F-07, F-09, F-12
**Goal:** all detailed reports are available.

**Read** – A: `context.md` (Visibility, D-20, D-21). B: `context.md`, `ux/screens.md` (Reports), `ux/pdf.md` (Scope), `mockups/PdfRecord.dc.html` (grep for values).

## Features

| ID | Feature |
|----|---------|
| F-02 | Project report: hours per user, per activity, per week/month; entry list; budget consumption |
| F-03 | User report: working time, project hours, target vs. actual, overtime balance, absences; incl. the monthly working-time record as PDF |
| F-06 | Completeness report: who has missing days or gaps in the period – basis for locking |
| F-07 | Budget report: all projects with budget, consumption, warning state |
| F-09 | Overtime report: balances per user and team (D-07) |
| F-12 | Project lead view: leads see project-time reports for their own projects only (D-10) |

## Part A – backend
- Each report on the reporting foundation, with D-10 per role.
- PDFs on the shared template: the monthly working-time record matches `PdfRecord.dc.html`; the project report and other report PDFs use the same template.

## Part B – screens
- Every report uses the report pattern: page header, filter row, styled table card, export menu.

## Done when
Each report is checked against hand-calculated demo data and can only be opened by the roles allowed to see it.
