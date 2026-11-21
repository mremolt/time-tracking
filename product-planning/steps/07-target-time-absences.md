# Step 7 – Target time and absences

Phase 1b · Needs: 3 · Features: U-04, U-10, I-04, B-15
**Goal:** the system knows each user's target time for every day, with absences credited (D-05, D-07).

**Read** – A: `context.md` (D-05, D-07), the 0.1 answers on absences and holidays, the HR scenarios from 0.3. B: `context.md`, `ux/today.md` (card 1, target line), `ux/screens.md` (Absences, Admin pages), `ux/shell.md` (admin tabs).

## Features

| ID | Feature |
|----|---------|
| U-04 | Target working time: weekly hours and working days with validity dates (D-07) |
| U-10 | Opening overtime balance when a user starts (carry-over from the old method) |
| I-04 | Public holidays per federal state, maintained per year; excluded from target time |
| B-15 | Absence marker: vacation, sick, public holiday, other; counts towards target time; no approval, no leave balance (D-05) |

## Part A – backend
- Contracts with validity dates (changes take effect from a date); federal state over time; holidays per state and year; opening balance.
- Absences: employees mark their own, admins for others; full and half days if confirmed in 0.1.
- Target time for any past or future day, crediting absences as agreed in 0.1.

## Part B – screens
- Target working time under Administration › People; holidays under Administration › Month end (tab Holidays).
- Running-day panel on Today shows the daily target ("worked today · target 8:00", "2:13 to go · expected end around 16:45").
- **Absences** page under My time: calendar or list card, "Mark absence" in a dialog.

## Done when
Target time is correct for any day, including users whose contract changed or who moved between federal states, and absences affect it exactly as agreed in 0.1.
