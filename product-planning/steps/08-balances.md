# Step 8 – Balances and own summaries

Phase 1b · Needs: 6, 7 · Features: B-13
**Goal:** employees see target vs. actual and their running overtime balance (D-07).

**Read** – A: `context.md` (Rules: Time, Plausible figures), HR scenarios from 0.3. B: `context.md`, `ux/shell.md` (Charts), `ux/today.md` (card 2), `ux/week.md` (tiles), `ux/screens.md` (Balance & summary).

## Features

| ID | Feature |
|----|---------|
| B-13 | Own summaries and balance: totals per day/week/month and per project; target vs. actual; running overtime balance (D-07) |

## Part A – backend
- Totals per day, week, month, project; running balance from the opening balance.
- **Balances for past periods always recalculate to the same result**, even after master-data changes.
- Check balances for plausibility against the HR scenarios before they are shown as key figures.

## Part B – screens
- Chart building blocks (ring, grouped bars, donut, stacked bar, day timeline – `ux/shell.md`).
- Today card **This week** (ring, legend, mini bar per weekday, overtime balance, Open week).
- Week: Target and Still open tiles.
- **Balance & summary** page: figure tiles, month table, totals per project (the month view, D-17).

## Done when
All HR scenarios from 0.3 produce the expected balances.
