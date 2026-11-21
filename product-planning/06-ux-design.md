# 6. UX Design (binding for implementation)

Status: **approved by the product owner on 2026-11-21**, light and dark theme. This document is the written form of the approved mockups. It is **binding** for every screen built in the implementation plan ([05-implementation-plan.md](05-implementation-plan.md)): a screen is not done until it matches this document and the mockups (see the Definition of Done, §5.2). It names no UI framework; how it is built is up to the technical team.

---

## 6.1 Why this document exists: lessons from the first implementation cycle

A first implementation built all features from docs 1–5, but the UX review was devastating: the app worked, but looked and felt like a wireframe. The plan described *features*, not *screens*, and the Definition of Done had no design criterion, so every screen became "a form for each feature, stacked on a page".

| What cycle 1 built | Why it failed | What is required now |
|---|---|---|
| A top toolbar with a flat row of 7–10 text links | No grouping, no orientation, does not scale per role | Side menu with groups and icons; top bar with page title, theme switch, DE/EN and account menu (§6.3) |
| Start page with one sentence | The most-used page did nothing | **Today** page: running day, project timer, timeline, quick booking, things to check (§6.4.1) |
| Recording page with six forms stacked on one page | Every feature got its own form; no task flow | Timers live on Today; the **Day** page shows any date; "Record a working day" opens in a dialog (§6.4.4) |
| Week grid made of plain inputs | No totals, no status, no today/weekend cues | Timesheet card with figure tiles, today/weekend columns, status per day, side cards (§6.4.2) |
| Dashboard with two date fields, tiles and bar tables | No visual hierarchy, no charts | Filter row, five figure tiles, two charts, budget table, completeness by team, export menu (§6.4.3) |
| Administration as ten pill buttons plus a test-mail form on one page | No structure | Four admin groups in the side menu, each with tabs across its pages (§6.3) |
| Default component theme, system font, theme only follows the OS | Generic look, no user choice | Teal palette, Inter, light + dark + high contrast, user chooses System / Light / Dark (§6.5, D-14) |
| Raw ISO dates (`2026-11-21`) | Not readable, not localised | Dates, times and numbers formatted per language (DE/EN) |
| Implausible figures shown as-is (e.g. an overtime balance of "−57606:52") | Wrong data looked like a real result | Demo data and calculations are checked for plausibility before figures are styled as key figures |
| No loading, empty or error states | Blank or broken-looking pages | Every page has loading, empty and error states (§6.6) |

**Conclusions** (now part of docs 1–5):
1. The UX design is a first-class input, like the feature catalog. Mockups and this document are linked from every step that builds a screen.
2. The application shell, theme and shared building blocks are built **first** (step 1), so every later screen uses them. Restyling afterwards means rework of every finished screen.
3. Each step builds *screens for tasks*, not one form per feature.
4. Every step's demo includes a design check against the mockups, in light and dark theme.

---

## 6.2 Mockups

Canvas: <https://claude.ai/code/artifact/a674afbe-657c-404d-a87b-be37ca23ec86> (private; the owner shares it from its Share menu before others can open it).

| Row | Artboards | Status |
|---|---|---|
| Top | `Main.dc.html` (A · Workspace), `Rail.dc.html` (B · Focus), `Executive.dc.html` (C · Command) | First round of three directions, kept for reference only. **A won.** |
| Middle, "Light theme" | `Today.dc.html`, `Week.dc.html`, `Dashboard.dc.html` | **Approved target** |
| Bottom, "Dark theme" | `TodayDark.dc.html`, `WeekDark.dc.html`, `DashboardDark.dc.html` | **Approved target**; each imports its light page with `theme="dark"` |

**Local copies** in [mockups/](mockups/):

| File | Use |
|---|---|
| [approved-screens.pdf](mockups/approved-screens.pdf) | **Primary visual reference.** The six approved screens rendered (pages 1–3: Today, Week, Dashboard light; pages 4–6: the same in dark). Exported from the canvas on 2026-11-21. Compare every implemented screen against it. |
| `*.dc.html`, `canvas.json` | Source of the artboards (downloaded 2026-11-21, canvas version `1795265364-ea0f`). Use them for exact values – colours, sizes, spacing – that a PDF cannot give reliably. |

The PDF still shows the search field and the Month tab; both are not built (§6.8). The sample figures in the mockups are illustrative: the "expected end around 16:45" on Today does not follow the documented formula (it would be about 16:32), the running project timer (1:24) exceeds the unbooked time (0:47), and the donut colours differ from the project colours – the rules in this document win, not the sample values.

Each artboard is one HTML file (inline styles, a small `renderVals()` script holding the light and dark token sets). The files need the canvas runtime (`support.js`) and Google Fonts to render, so opened locally they are **reference source, not a working preview**. The dark artboards only import their light page with `theme="dark"`; the dark values are in the light files' `renderVals()`. To view them rendered, open the canvas, or read them with the Artifact tool (`action: "read_file"`, the canvas URL, `path: "project/Today.dc.html"`). The token table in §6.5 has the same values as those scripts.

**Precedence:** this document and the mockups define the target. Where they conflict with the decisions in [03-decisions.md](03-decisions.md) (e.g. visibility D-10) or with an accessibility requirement, the decision or the accessibility requirement wins and the deviation is written down. Mockup elements without a feature behind them are not built (see §6.7).

Only three screens are drawn. All other screens follow the shell, the building blocks and the patterns in §6.4.4.

---

## 6.3 Layout (the "shell")

- **Side menu** on the left, 248 px wide, surface colour, 1 px border on its inline end. From top to bottom:
  - product mark (34 px rounded square in the accent colour with a clock icon), product name, company name below it in muted text
  - navigation groups, each with a small upper-case label (11 px, 600, letter spacing 0.08em, muted)
  - Help & guide and Settings, pinned to the bottom above a divider
- **Menu item:** 44 px high, 12 px inline padding, 10 px radius, 20 px stroke icon, 14 px label. The active item gets the accent-soft background, accent-ink text, weight 600 and is marked as the current page for screen readers. An item may show a count badge in the warning style (e.g. Budgets with "2"; the count comes from the budget warnings, E-07).
- **Top bar** across the content area, surface colour with a bottom border, 18 px × 32 px padding:
  - left: a small context line (date, calendar week, or a note on the page, e.g. "Sums only, no person shown") above the page title as the page's main heading (24 px, 700, letter spacing −0.02em)
  - right: theme switch (moon/sun icon button), DE/EN segmented switch, account button (avatar initials plus name; opens the account menu with name, Settings, My data, Sign out)
  - the mockup's search field is **not built** (D-16); its slot stays free
- **Content:** padding 24–28 px × 32 px, max width 1240 px. Cards sit on a 3-column grid with 20 px gaps; wide cards span 2 columns.
- **Card:** surface colour, 1 px border, 18 px radius (16 px for small figure tiles), 24 px padding, card title 15 px / 600. No shadows: in dark mode, surfaces are separated by lightness.
- **Skip link** to the main content, and focus moves to the page heading after navigation.

### Window sizes (not drawn; follow these rules)

| Window width | Navigation | Content |
|---|---|---|
| ≥ about 840 px (desktop) | Side menu, always visible | 3-column grid |
| about 600–840 px (tablet) | Navigation rail (icons with short labels), fully keyboard operable | 2 columns or 1, cards reflow |
| < about 600 px (phone) | Modal drawer, opened from a menu button in the top bar | 1 column; wide tables (timesheet, reports) scroll inside their card, which is a labelled, keyboard-focusable region |

### Navigation groups per role

A user with several roles sees the union of the groups. Each entry is shown only if the role may use it (D-10).

| Group | Entries | Who |
|---|---|---|
| My time | Today, Week, Absences, Balance & summary | everyone who records time |
| Insights | Reports, My data | employees without a company role |
| Company | Dashboard, Reports, Budgets (warning count) | backoffice; project leads see Reports and Budgets; management sees **Management overview** in place of Dashboard |
| Administration | **People** (users, teams, target working time, import), **Projects** (projects, activities, planned hours), **Month end** (close months, corrections, payroll export, holidays), **System & audit** (audit log, test e-mail) | backoffice |
| Bottom | Help & guide, Settings | everyone |

Each administration group is one menu entry; its pages are tabs across the top of the content:

| Admin group | Tabs |
|---|---|
| People | Users · Teams · Import |
| Projects | Projects · Activities |
| Month end | Close months · Corrections · Payroll export · Holidays |
| System & audit | Audit log · Test e-mail |

---

## 6.4 Screens

### 6.4.1 Today (employee start page)

The start page for everyone who records time (users without the employee role get a simple start page with links to their areas). Features: B-03, B-07, B-10, B-13, B-14, B-18, H-06. Mockups: `Today.dc.html`, `TodayDark.dc.html`.

Grid of 3 columns. The page title is a localised greeting with the user's first name ("Good afternoon, Anna"); the context line above it holds the date.

1. **Running day (hero, spans 2 columns).** A dark teal panel in both themes, holding:
   - a status chip ("Started 08:02 · 1 break (0:30)")
   - a large timer, 64 px / 700 with tabular figures; the seconds are in a lighter tint
   - "worked today · target 8:00", a progress bar, and "2:13 to go · expected end around 16:45" (expected end = target − worked + break still required by the rules)
   - two buttons: Take a break (white, filled) and End work day (outlined)
   - a project-timer strip: project colour dot, "CRM-REL · CRM Relaunch / Project timer · Consulting", running time, and a Stop & book button

   When no day is running, the same panel shows a Start work day button.
2. **This week:** a ring chart of worked time against target, a legend (worked, booked, not booked), a mini bar per weekday (complete = accent, today = light accent, missing = warning tint, weekend = empty track), the overtime balance, and an "Open week" link.
3. **Today's timeline (spans 2 columns):** a horizontal band from 07:00 to 19:00 showing work blocks, the break (hatched in the warning tint), project blocks in project colours and a "now" marker. An "Edit working times" link at the card's top right opens the "Record a working day" dialog of the Day page for today. Below it, a table of today's project entries (project with colour dot, code and name; activity; note; time; edit icon button), with the footer "Booked 5:00 of 5:47 worked · 0:47 not yet booked".
4. **Quick booking:** favourite chips (★ project · activity), project and activity selects, duration (pre-filled with the unbooked time), and a full-width "Book 0:47" button.
5. **Things to check:** a warning card listing rule findings and gaps for today and the current week, each with an action link (Fix, Book).

Today loads a fixed, small number of data sets (running day, project timer, day view, week summary, findings) – never one request per entry.

### 6.4.2 Week (timesheet)

Features: B-02, B-09, B-10, B-14, B-16. Mockups: `Week.dc.html`, `WeekDark.dc.html`.

- A toolbar row: previous / "16 – 22 November 2026" / next, a "This week" link, a **Day | Week** segmented switch (D-17), and a "Copy last week" button.
- Four figure tiles: Target, Worked, Booked on projects (accent), Still open this week (warning).
- **Timesheet card:**
  - rows are project · activity, with a 4 px colour bar, code in bold and activity in muted text
  - columns are Mon–Sun plus Total; cells are 40 px inputs (10 px radius, centred tabular figures)
  - the today column has an accent-tinted background; weekend columns are shaded with dashed inputs
  - each day's column header has a small menu with "Copy previous day" (B-09)
  - an "Add project row" button sits below the rows
  - the footer has two rows: Booked per day, and Worked per day with a status (✓ complete, "missing" chip, or plain/running)
  - a hint reads "Changes save automatically"
- Three cards below: Things to check (warning), Add from favourites (chips plus an input hint "Type 1.5 or 1:30 · Tab moves to the next day"), Where the week went (stacked bar plus legend, computed from the rows).

### 6.4.3 Company dashboard (backoffice; management uses the same layout)

Features: F-01, F-04, F-05, F-06, F-07, F-14. Mockups: `Dashboard.dc.html`, `DashboardDark.dc.html`.

- A filter row: date range picker (one control, not two date fields), team filter (U-06, F-04), and Export (CSV, Excel, PDF → D-19) as a menu on the primary button on the right.
- Page title "Company overview" (the menu entry is "Dashboard"; management sees "Management overview").
- Five figure tiles:
  - Worked (with target)
  - Booked on projects (with % of worked)
  - Completeness (with days without any time, in warning text)
  - Overtime balance, labelled "balance to date", across N people (D-20: cumulative, not affected by the period filter)
  - Projects near budget (warning tile with a "Review budgets" link)
- Charts row: Hours per week as grouped bars (worked = accent, booked = blue), with a dashed target line and value labels (spans 2 columns); Hours by project as a donut with the total in the centre and a 2-column legend.
- Tables row: Project budgets (project, usage bar, used / planned hours, status chip "93 % · over 80 %" in warning style, "47 % · on track" in success style, or an "over budget" error chip from 100 %, D-21) spanning 2 columns, with an "All budgets" link; Completeness by team (one bar per team, warning colour below 90 %, D-21) with an "Open completeness report" link. Both links are plain navigation (Budgets page, completeness report F-06).
- The page shows **sums only, never a person's name** (D-10), and says so in the top bar's context line. The **Management overview** is the same page for the management role.

### 6.4.4 Screens that are not drawn

These follow the shell, the building blocks (§6.6) and these patterns:

| Screen | Pattern |
|---|---|
| **Day** (any date; B-01, B-03, B-04, B-18) | Date picker with previous/next, the day view (timeline + entries as on Today), "Record a working day" (manual start/end/breaks) in a **dialog**, edit/delete of entries. Reached from the Day \| Week switch and from Today. Timers are on Today, not here. |
| Absences | Page header, calendar or list card, "Mark absence" in a dialog. |
| Balance & summary | Figure tiles (target, worked, balance), month table, totals per project. The month view lives here (D-17). |
| Reports (all) | Page header, filter row as on the dashboard, results in a styled table card, export menu. |
| Budgets | Table card with usage bars and status chips as on the dashboard. |
| Admin pages | Group tabs (§6.3), a table card with an action button in the page header; create/edit in a dialog or a dedicated form page with clear sections — never several unrelated forms on one page. |
| Settings | Sections in cards: language, theme (System / Light / Dark), default project, preferred view, notifications. |
| Help & guide, My data, Audit log | Page header plus cards / table card. |

General rules for all screens: one primary action per page or card; dates, times and numbers in the user's language format; times shown as `h:mm` with tabular figures.

---

## 6.5 Design tokens

Font: **Inter** (400, 500, 600, 700), served by the application itself (no external font service), with tabular figures for all times and numbers. Icons: 20 px stroke icons, stroke width 2, round caps (e.g. Material Symbols Outlined, also self-hosted).

Theme: the accent palette is generated from `#0F6B67` (teal). Besides light and dark there is a **high-contrast** variant (system setting "more contrast") and support for the system's forced-colours mode.

| Token | Light | Dark | Use |
|---|---|---|---|
| bg | `#F3F5F8` | `#0E1416` | page background |
| surface | `#FFFFFF` | `#172024` | side menu, top bar, cards |
| subtle | `#F3F5F8` | `#1F2A2F` | table footers, segmented track |
| field | `#FFFFFF` | `#11191C` | input background |
| border | `#E3E7ED` | `#2A363C` | card and divider lines |
| borderStrong | `#C9D1DB` | `#3D4B52` | input and outlined button borders |
| ink | `#17212F` | `#E6EDEF` | main text |
| ink2 | `#3C4757` | `#C2CDD1` | secondary text, inactive menu items |
| muted | `#5A6575` | `#93A1A7` | labels, captions, axis text |
| accent | `#0F6B67` | `#4FB8B0` | primary buttons, active states, worked time |
| onAccent | `#FFFFFF` | `#04211F` | text on accent |
| accentText / link | `#0F5F5C` | `#7FD4CC` | links, accent figures |
| accentSoft | `#DCEBEA` | `#183C3A` | active menu item, avatar |
| accentInk | `#0B4F4C` | `#A8E6DF` | text on accentSoft |
| hero | `#10302F` | `#123A37` (border `#1E5552`) | running-day panel; text white, secondary `#BFE3DF`, highlight `#5EEAD4` |
| track | `#E6ECEF` | `#26333A` | progress and bar tracks |
| todayColumn | `#EAF4F3` | `#15302E` | today column in the timesheet |
| warnBg / warnBorder | `#FFF7F2` / `#F5D3BF` | `#2A1C14` / `#5A3520` | warning cards, chips, tiles |
| warnInk / warnStrong | `#7C2D12` / `#9A3412` | `#FDD5B8` / `#FB923C` | warning text / emphasis and warning bars |
| okBg / okBorder / okInk | `#E3F4EA` / `#BFE3CB` / `#166534` | `#12301F` / `#1F4D33` / `#86EFAC` | success chips and checkmarks |
| errBg / errBorder | `#FEF2F2` / `#F5C2C2` | `#2A1416` / `#5C2A2E` | "over budget" chip (D-21), later error states |
| errInk / errStrong | `#991B1B` / `#B91C1C` | `#FECACA` / `#F87171` | error text / emphasis; contrast on errBg 7.6 / 5.9 (light), 12.0 / 6.3 (dark) |
| booked (chart) | `#93B4F5` | `#3E63B0` | booked bars next to worked bars |
| project palette 1–4 | `#2563EB` `#7C3AED` `#0F766E` `#B45309` | `#60A5FA` `#A78BFA` `#2DD4BF` `#F59E0B` | project colours in the timeline, timesheet, project timer **and the donut** (D-18: one colour per project, auto-assigned from this palette, optional override; repeats when there are more projects) |
| partialBar / missingBar | `#8CCFC8` / `#F5C9B3` | `#2E7D77` / `#7A3B1E` | mini bars on Today: today (partial) / day with missing time |
| workBand / breakBand | `#CDE7E4` / hatch `#F7D7C4`–`#FBE8DC` | `#1F4542` / hatch `#5A3520`–`#46291A` | work block and break (45° hatch, 6 px stripes) in the day timeline |
| todayBorder | `#9CCFC9` | `#2E6B66` | input border in the today column |
| weekendCol / weekendBorder | `#F3F5F8` / `#D5DBE3` | `#131B1E` / `#34424A` | weekend columns (dashed inputs) |
| donut 1–6 | `#1E3A8A` `#3B82F6` `#0D9488` `#EA8A3A` `#A855F7` `#CBD2DC` | `#93C5FD` `#3B82F6` `#2DD4BF` `#F59E0B` `#C084FC` `#4B5563` | **as drawn only** – the mockup colours the donut by rank; per D-18 the donut uses each project's own colour, and only "Other" keeps the neutral grey (donut 6) |

Where the mockup files disagree on a shared value (`Week` uses subtle `#F6F8FA` / `#1B252A` and okInk `#15803D`), the values in this table win. The error tokens (err*) are new, not drawn in the mockups; they follow the same pattern as the warning tokens and meet 4.5:1.

The warning, success, hero and chart colours are usually not part of a component library's standard colour roles. They are defined once as named tokens next to the theme; screens use tokens only, never literal colour values.

Type scale: page title 24/700; section heading 20/700; card title 15/600; body 14/400; caption 13; overline 11/600 upper case; figures 26–30/700; hero timer 64/700.

Shape and spacing: 4/8 px grid; card radius 18 px, tiles 16 px, inputs and menu items 10 px, pills and buttons fully rounded (22 px on 44 px buttons); touch targets ≥ 44 px (icon buttons 40 px inside a 44 px row).

---

## 6.6 Shared building blocks

Built once in step 1 (charts by step 10 at the latest) and reused by every screen:

| Building block | Content |
|---|---|
| Page header | Title row with actions |
| Card | The card style from §6.3 |
| Figure tile | Label, value in tabular figures, sub-line, optional warning variant |
| Status chip | Warning, success, neutral – always text plus icon, never colour alone |
| Notice card | "Things to check" list with action links |
| Loading / empty / error states | For every page and card |
| Charts | Ring progress, grouped bar chart with target line, donut, stacked bar, day timeline. Each has a text alternative (summary label and an optional data table) and works in forced-colours mode. Lightweight – no large chart library is needed for these five forms. |

---

## 6.7 Accessibility (part of the design)

- Text contrast meets WCAG 2.2 AA (4.5:1) in light, dark and high-contrast theme; warning and status colours are always paired with text or an icon, never colour alone.
- Real buttons, links and labelled inputs throughout. Icon-only buttons have an accessible name (e.g. "Switch to dark theme"). Charts have a text alternative.
- Everything works with the keyboard only, including the navigation rail, the timesheet and dialogs (focus is trapped in the dialog and returns afterwards).
- Automated accessibility checks run in every theme variant (light, dark, high contrast, forced colours) and in phone and desktop window sizes.
- The theme follows the system setting by default; the user's explicit choice overrides it (D-14).

## 6.8 Not built, although the mockups show it

| Mockup element | Decision |
|---|---|
| Search field in the top bar | Not built (D-16) – no search use case exists. The slot stays free. |
| Month tab in the Day \| Week switch | Not built (D-17) – the month view lives in Balance & summary. |
| Anything else without a feature ID in [02-feature-catalog.md](02-feature-catalog.md) | Not built; raise it as a change request instead. |
