# Company dashboard / Management overview

Features F-01, F-04, F-05, F-06, F-07, F-14. Mockups: `Dashboard.dc.html` / `DashboardDark.dc.html`, approved-screens.pdf pages 3 and 6. Built in step 14 (filter row and export menu in step 12).

- **Filter row:** date range picker (one control, not two date fields), team filter (U-06, F-04), Export menu (CSV, Excel, PDF – D-19) on the primary button on the right.
- **Title** "Company overview" (menu entry "Dashboard"); for management "Management overview".
- **Five figure tiles:** Worked (with target) · Booked on projects (with % of worked) · Completeness (with days without any time, in warning text) · Overtime balance, labelled "balance to date", across N people (D-20) · Projects near budget (warning tile, "Review budgets" link).
- **Charts row:** Hours per week – grouped bars (worked = `accent`, booked = `booked`), dashed target line, value labels (spans 2 columns). Hours by project – donut in project colours (D-18), total in the centre, 2-column legend; "Other" neutral grey.
- **Tables row:** Project budgets (spans 2): project, usage bar, used / planned hours, status chip – "47 % · on track" success, "93 % · over 80 %" warning, "over budget" error chip from 100 % (D-21); "All budgets" link. Completeness by team: one bar per team, warning colour below 90 % (D-21); "Open completeness report" link. Both links are plain navigation (Budgets page, completeness report F-06).
- **Sums only, never a person's name** (D-10); the top-bar context line says "Sums only, no person shown". Management overview is the same page for the management role.
