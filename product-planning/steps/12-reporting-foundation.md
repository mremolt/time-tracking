# Step 12 – Reporting foundation, export, PDF template

Phase 1b · Needs: 8 · Features: F-04, F-05
**Goal:** one shared basis for all reports and PDFs, so steps 13–15 only add configuration and layout.

**Read** – A: `context.md` (Visibility), `ux/pdf.md`. B: `context.md`, `ux/dashboard.md` (filter row, export menu), `ux/pdf.md`, `mockups/PdfRecord.dc.html` (grep for values).

## Features

| ID | Feature |
|----|---------|
| F-04 | Filter and group freely by period, team, project, user, activity |
| F-05 | Export: CSV and Excel for all reports; PDF for user and project reports (e.g. monthly working-time record) and the dashboard / management overview (D-19). Every PDF uses the PDF layout (D-22) |

## Part A – backend
- Filtering and grouping; D-10 applied centrally to every query, report and export.
- CSV and Excel export for every report; DE/EN labels.
- **Shared PDF template and PDF building blocks** (`ux/pdf.md`), built once: page frame with header band, running head, footer; figure tiles; table card; PDF chart forms; tagging and metadata for PDF/UA. Every PDF in steps 13–15 is configured on it, never designed on its own.

## Part B – screens
- One reusable filter row (date range picker as one control, team and other filters) and an Export menu (CSV, Excel, PDF), as on the dashboard mockup.

## Done when
The same filter returns different data per role, matching D-10; all three export formats work; a sample PDF from the template passes the PDF/UA validator and the greyscale print check.
