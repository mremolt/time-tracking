# Shell, navigation, building blocks, accessibility

## Layout

- **Side menu** left, 248 px, `surface`, 1 px border on its inline end. Top to bottom: product mark (34 px rounded square in `accent` with a clock icon), product name, company name below in muted text; navigation groups, each with a small upper-case label (11 px, 600, letter spacing 0.08em, muted); Help & guide and Settings pinned to the bottom above a divider.
- **Menu item:** 44 px high, 12 px inline padding, 10 px radius, 20 px stroke icon, 14 px label. Active: `accentSoft` background, `accentInk` text, weight 600, marked as current page for screen readers. May show a count badge in warning style (Budgets: number of budget warnings, E-07).
- **Top bar** across the content area, `surface`, bottom border, 18 × 32 px padding. Left: small context line (date, calendar week, or a page note such as "Sums only, no person shown") above the page title = the page's main heading (24 px, 700, −0.02em). Right: theme switch (moon/sun icon button), DE/EN segmented switch, account button (avatar initials + name → menu with name, Settings, My data, Sign out). The mockup's search field is not built; its slot stays free.
- **Content:** padding 24–28 × 32 px, max width 1240 px. Cards on a 3-column grid, 20 px gaps; wide cards span 2 columns.
- **Card:** `surface`, 1 px `border`, 18 px radius (16 px for figure tiles), 24 px padding, title 15/600. No shadows; in dark mode surfaces separate by lightness.
- **Skip link** to main content; after navigation focus moves to the page heading.

## Window sizes (not drawn)

| Width | Navigation | Content |
|---|---|---|
| ≥ ~840 px | Side menu, always visible | 3-column grid |
| ~600–840 px | Navigation rail (icons with short labels), fully keyboard operable | 2 or 1 columns, cards reflow |
| < ~600 px | Modal drawer from a menu button in the top bar | 1 column; wide tables (timesheet, reports) scroll inside their card, which is a labelled, keyboard-focusable region |

## Navigation per role

Each entry shows only if the role may use it (D-10); several roles see the union. Navigation entries for features not built yet stay hidden.

| Group | Entries | Who |
|---|---|---|
| My time | Today, Week, Absences, Balance & summary | everyone who records time |
| Insights | Reports, My data | employees without a company role |
| Company | Dashboard, Reports, Budgets (warning count) | backoffice; project leads see Reports and Budgets; management sees **Management overview** instead of Dashboard |
| Administration | People, Projects, Month end, System & audit | backoffice |
| Bottom | Help & guide, Settings | everyone |

Users without the employee role get a simple start page with links to their areas. Each admin group is one menu entry; its pages are tabs across the top of the content:

| Admin group | Tabs (content) |
|---|---|
| People | Users · Teams · Import (target working time is part of the user) |
| Projects | Projects · Activities (planned hours are part of the project) |
| Month end | Close months · Corrections · Payroll export · Holidays |
| System & audit | Audit log · Test e-mail |

## Shared building blocks

Built once in step 1 (charts in step 8) and used by every screen:

| Block | Content |
|---|---|
| Page header | Title row with actions |
| Card | As above |
| Figure tile | Label, value in tabular figures, sub-line, optional warning variant |
| Status chip | Warning, success, error, neutral – always text + icon, never colour alone |
| Notice card | "Things to check" list with action links |
| Loading / empty / error states | For every page and card |
| Charts | Ring progress, grouped bars with target line, donut, stacked bar, day timeline. Each has a text alternative (summary label + optional data table) and works in forced colours. Lightweight; no large chart library needed |
| PDF building blocks | See `pdf.md` (step 12) |

## General screen rules

One primary action per page or card. Dates, times, numbers in the user's language format; times `h:mm` with tabular figures. Never several unrelated forms on one page.

## Accessibility

- WCAG 2.2 AA text contrast (4.5:1) in light, dark, high contrast; status colours always paired with text or icon.
- Real buttons, links, labelled inputs; icon-only buttons have an accessible name (e.g. "Switch to dark theme"); charts have a text alternative.
- Keyboard only works everywhere, incl. rail, timesheet, dialogs (focus trapped in the dialog, returned afterwards).
- Automated a11y checks in light, dark, high contrast, forced colours, at phone and desktop sizes.
- Theme follows the system by default; the user's choice overrides it (D-14).
