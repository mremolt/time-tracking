# Step 5 – Project time and day view

Phase 1a · Needs: 4 · Features: B-01, B-03, B-04, B-05, B-07 (project timer), B-12
**Goal:** employees split their day across projects and activities.

**Read** – A: `context.md` (D-06, D-18). B: `context.md`, `ux/today.md` (cards 1 strip, 3, 4), `ux/screens.md` (Day), approved-screens.pdf pages 1 and 4.

## Features

| ID | Feature |
|----|---------|
| B-01 | Manual entry: date, project, activity, duration or start/end, optional description (quick booking on Today, timesheet, Day page) |
| B-03 | Day view: working time, breaks and project entries with totals, as timeline and table (Today for the current day, Day page for any date; D-17) |
| B-04 | Edit/delete own entries until the period is locked (D-08) |
| B-05 | Only assigned projects and projects open to everyone are selectable; archived projects are not (D-06) |
| B-07 | Project timer that creates entries automatically |
| B-12 | Activity selection from the global list (D-04) |

## Part A – backend
- Project time entries with the selection rules above; project timer; day view with daily totals.
- Today's data comes in a fixed number of requests (running day, project timer, day view), never one per entry.
- Every change audited.

## Part B – screens
- **Today:** project-timer strip with Stop & book in the hero; today's timeline (work blocks, break, project blocks in project colours, now marker) with entries table and "booked of worked" footer; quick booking with favourite chips and duration pre-filled with the unbooked time.
- **Day page:** same timeline and entries table for the chosen date, with edit/delete.

## Done when
J1 works on Today up to "sees daily total" (balances come in 1b), and Today matches the mockups except the "This week" and "Things to check" cards (steps 8, 9).
