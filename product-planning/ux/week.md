# Week (timesheet)

Features B-02, B-09, B-10, B-14, B-16. Mockups: `Week.dc.html` / `WeekDark.dc.html`, approved-screens.pdf pages 2 and 5. Built in step 6; Target and Still open tiles in step 8; Things to check and day status in step 9.

- **Toolbar row:** previous / "16 – 22 November 2026" / next, "This week" link, **Day | Week** segmented switch (no Month, D-17), "Copy last week" button.
- **Four figure tiles:** Target, Worked, Booked on projects (accent), Still open this week (warning).
- **Timesheet card:**
  - rows = project · activity, 4 px colour bar, code bold, activity muted
  - columns Mon–Sun + Total; cells 40 px inputs (10 px radius, centred tabular figures)
  - today column on `todayColumn` with `todayBorder` inputs; weekend columns `weekendCol` with dashed inputs
  - each day's column header has a small menu with "Copy previous day" (B-09)
  - "Add project row" button below the rows
  - footer rows: Booked per day; Worked per day with status (✓ complete, "missing" chip, or plain/running)
  - hint "Changes save automatically"
  - on a phone the timesheet scrolls inside its card
- **Three cards below:** Things to check (warning); Add from favourites (chips + hint "Type 1.5 or 1:30 · Tab moves to the next day"); Where the week went (stacked bar + legend, computed from the rows).
