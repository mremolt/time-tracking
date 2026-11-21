# Step 6 – Week timesheet and fast entry

Phase 1a · Needs: 5 · Features: B-02, B-09, B-10, B-16
**Goal:** a typical day is recorded in under a minute (success criterion "Speed").

**Read** – A: `context.md`. B: `context.md`, `ux/week.md`, approved-screens.pdf pages 2 and 5.

## Features

| ID | Feature |
|----|---------|
| B-02 | Week grid: rows = project · activity, columns = days; overview and direct entry |
| B-09 | Copy previous day / last week (duplicate recurring rows): "Copy last week" in the toolbar, "Copy previous day" in each day's column menu |
| B-10 | Favourite and recently used projects shown first |
| B-16 | Mobile-friendly: responsive web UI, no native app |

## Part A – backend
- Week view with totals per row and day; set a cell; copy previous day / last week; favourites and recent projects.
- Loads in a fixed number of requests.

## Part B – screens
- **Week page** as `ux/week.md`: toolbar, figure tiles (Worked and Booked now; Target and Still open come in step 8), timesheet with colour bars, today and weekend columns, column menu, Add project row, Booked/Worked footer rows, autosave hint; cards Add from favourites and Where the week went. Phone: timesheet scrolls inside its card.

## Done when
A test user records a typical day in < 1 minute on desktop and in a phone-sized window, and Week matches the mockups (apart from the parts that come in steps 8 and 9).
