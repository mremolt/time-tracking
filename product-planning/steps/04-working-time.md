# Step 4 – Working time, Today hero, Day page

Phase 1a · Needs: 3 · Features: B-18, B-08, B-07 (working-day timer), B-04, I-08
**Goal:** employees record the legal working day (D-01).

**Read** – A: `context.md` (Rules: Time; D-01, D-08). B: `context.md`, `ux/today.md` (card 1), `ux/screens.md` (Day), approved-screens.pdf pages 1 and 4.

## Features

| ID | Feature |
|----|---------|
| B-18 | Working-time recording: daily start, end and breaks as legal record (D-01) |
| B-08 | Times recorded as times of day, not only durations |
| B-07 | Timer "Start work" / "Pause" / "Stop" for the working day, creating the record automatically |
| B-04 | Edit/delete own records until the period is locked (D-08) |
| I-08 | Today as the employee start page (bundles running day, project timer, this week, timeline, quick booking, things to check – filled in over steps 4–9) |

## Part A – backend
- Start, end and breaks per day, manually or by timer.
- Work past midnight, DST changes and multiple breaks handled as specified in 0.4.
- Edit and delete until the period is locked; locking comes in step 10, but prepare the check now.
- Every change audited.

## Part B – screens
- **Today, running-day panel** (`ux/today.md` card 1): Today becomes the start page. Hero with status chip, large timer, progress (worked time only until step 7 adds the target), Take a break / End work day, Start work day when idle.
- **Day page** (`ux/screens.md`): any date with previous/next; "Record a working day" (manual start/end/breaks) in a **dialog**. No timers on this page.

## Done when
An employee records a full day by timer on Today and manually on the Day page, both match the design in light and dark, and every change appears in the audit log.
