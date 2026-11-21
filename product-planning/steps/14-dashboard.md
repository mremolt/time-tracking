# Step 14 – Dashboard and management overview

Phase 1b · Needs: 13 · Features: F-01, F-14
**Goal:** an overview page for backoffice and an aggregated view for management.

**Read** – A: `context.md` (Visibility, D-18 – D-21), `ux/pdf.md` (Charts). B: `context.md`, `ux/dashboard.md`, approved-screens.pdf pages 3 and 6, `mockups/PdfOverview.dc.html` (grep for values).

## Features

| ID | Feature |
|----|---------|
| F-01 | Overview dashboard: total hours, hours per project and team, weekly trend, overtime totals, missing time, projects near budget |
| F-14 | Management view: aggregated dashboard without per-person data (D-10) |

## Part A – backend
- Dashboard figures for the filter (period, team); overtime tile as cumulative balance (D-20); completeness and budget thresholds (D-21). The management view contains **no per-person data**, in the UI or in exports.
- Dashboard / management overview PDF matches `PdfOverview.dc.html`: the donut becomes a labelled bar list, warning bars are hatched.

## Part B – screens
- Dashboard as `ux/dashboard.md`: filter row with team filter, five figure tiles, hours per week (grouped bars with target line), hours by project (donut in project colours), project budgets table, completeness by team, Export menu CSV/Excel/PDF (D-19).
- Management overview: same layout, top bar says "Sums only, no person shown".

## Done when
The management role cannot reach any per-person data through the UI or exports, and the dashboard matches the mockups in light and dark.
