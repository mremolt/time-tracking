# Step 15 – Payroll export and own-data export

Phase 1b · Needs: 10, 13, 0.2 · Features: F-13, H-03
**Goal:** the month-end close can be completed (J5) and employees get a copy of their own data.

**Read** – A: `context.md` (J5), the payroll format from 0.2, `ux/pdf.md` (Scope). B: `context.md`, `ux/shell.md` (Month end tabs, account menu), `ux/screens.md` (My data).

## Features

| ID | Feature |
|----|---------|
| F-13 | Payroll export: working time, overtime and absences per month, exactly in the format agreed in 0.2 |
| H-03 | Own data view and export: employees view and download all their own records (right of access; planned right to a copy). A PDF copy uses the PDF layout (D-22) |

## Part A – backend
- Payroll export in the agreed format (if it is a PDF, it uses the PDF template).
- Own-data export of all of the employee's records; PDF copy on the PDF template.

## Part B – screens
- Administration › Month end, tab **Payroll export**.
- **My data** page, reached from the account menu (and the Insights group).

## Done when
Payroll confirms an export from demo data matches the agreed format, and J5 (check → export → lock) takes < 1 hour.
