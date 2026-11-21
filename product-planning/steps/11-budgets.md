# Step 11 – Hour budgets and warnings

Phase 1b · Needs: 5 · Features: E-07, G-03
**Goal:** project leads and backoffice notice before a budget runs out.

**Read** – A: `context.md` (D-21), 0.1 answers on thresholds and recipients. B: `context.md`, `ux/dashboard.md` (Project budgets table), `ux/screens.md` (Budgets), `ux/shell.md` (menu badge).

## Features

| ID | Feature |
|----|---------|
| E-07 | Hour budget: planned hours per project (total or per month), used vs. planned, warnings at e.g. 80 % / 100 % |
| G-03 | Budget warnings by email to project lead / backoffice at the thresholds |

## Part A – backend
- Planned hours, usage; warning in the app and an email when a threshold is reached, **sent only once per threshold**.

## Part B – screens
- Planned hours in the project form (Administration › Projects).
- **Budgets** page under Company: usage bars and status chips (D-21).
- Warning count as a badge on the Budgets menu entry.

## Done when
Crossing 80 % and 100 % produces exactly one warning each, to the right recipients.
