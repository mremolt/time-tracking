# Product context (read at the start of every task)

**Product.** Internal time tracking for one company (~100 employees, 2–5 backoffice admins; no multi-tenancy, no external users). Employees record their legal working day (start, end, breaks) and allocate it to projects and activities; backoffice manages users and projects and sees reports per project, person, team and overall. Replaces spreadsheets. Volume: a few hundred entries per day, dozens to a few hundred active projects. Recording a day takes < 1 minute; simple to operate, not an enterprise suite.

**Sources of truth.** Backend Spring Boot, frontend Angular (fixed). *How* it is built (architecture, storage, libraries, auth mechanism, tooling) comes from the quality baseline (`docs/baseline/`, entry `AGENTS.md`) and the project's ADRs. *What* is built and *how it looks* comes from this folder. The UX design in `ux/` is **binding** (D-13). Business answers from step 0.1 are binding once recorded.

**End point of the plan:** a locally installed demo of the full MVP (phases 1a + 1b) with fictitious demo data, presented to stakeholders.

## Goals

G1 record time per project quickly, desktop and phone browser · G2 backoffice maintains users, teams, projects, activities without technical help · G3 dashboard plus per-user/team/project reports, exportable (controlling, payroll) · G4 data is complete, traceable and protected from silent changes after checking · G5 covers the legal working-time recording duty (start, end, breaks, overtime balance; D-01) · G6 looks and feels like a finished modern product, in light and dark (D-13).

**Not built:** clients, billing, invoicing, money values (D-04b, D-09) · payroll calculation (exports only) · HR system: contracts, salaries, leave requests/approvals (only an absence marker, D-05) · resource planning, scheduling, Gantt · employee monitoring (screenshots, activity levels, GPS, keystrokes) · approval workflows, multi-company, SSO federation (D-02, D-03) · global search (D-16) · anything without a feature ID in `features.md` (raise a change request).

## Roles (a user may hold several; they see the union)

| Role | Capabilities |
|------|-------------|
| Employee (all staff) | Record working time, project time, absences; own summaries and overtime balance; export own data |
| Project Lead | Employee + reports of project time booked on their own projects |
| Backoffice Admin | Manage users, teams, projects, activities; all data; dashboard and all reports; exports; correct entries; lock periods |
| Management (read-only) | Aggregated dashboard and reports only; no per-person data, no administration |

## Visibility (D-10) – enforced on the server in every use case, report and export

| Viewer | Own data | Per-person data of others | Aggregated |
|--------|----------|---------------------------|-----------|
| Employee | ✔ | – | – |
| Project lead | ✔ | Only project time on their own projects (not working time, overtime, absences) | Own projects |
| Backoffice admin | ✔ | All | All |
| Management | ✔ | – | All |

No per-person utilisation ranking.

## Glossary

| Term | Meaning |
|------|---------|
| User | Account with role(s), team, active/inactive, weekly target time, federal state (holidays) |
| Team | Group of users (department), used to filter reports |
| Project | Bookable unit, e.g. "Website relaunch", "Administration". Status active/archived, optional hour budget, project lead, members or open to everyone, colour |
| Activity | Company-wide category of work, e.g. Development, Meeting, Travel |
| Project time entry | User, date, project, activity, start/end or duration, optional description |
| Working time | Start, end and breaks of the working day (labour law); basis for overtime |
| Period | Typically a calendar month (confirm in 0.1); unit for completeness, export, locking |
| Lock | Closed period – employees can no longer change entries |
| Absence | Day marked vacation, sick, public holiday or other |
| Overtime balance | Running difference actual − target working time, from an opening balance |

## Journeys

- **J1 Employee records a day:** Today → start the day in the running-day panel (or later enter start/end in the "Record a working day" dialog on Day) → breaks → project timer or quick booking (duration pre-filled with unbooked time) → sees worked, target, expected end, overtime balance on the same page; rule warnings under "Things to check".
- **J2 Employee reviews the week:** Week (menu or "Open week" on Today) → day status and "Things to check" show gaps (day without entries, project time ≠ working time) → fill cells, copy last week / previous day → mark absences.
- **J3 Onboard employee:** create user (name, email, role, team, target hours, federal state, start date, opening balance) → assign projects → invitation, user sets password.
- **J4 Set up project:** name, code, lead, optional budget → members or open to everyone → appears in selection lists.
- **J5 Month end:** dashboard (completeness tile, by team) → completeness report → resolve gaps → payroll export → lock month (all under Administration › Month end). Takes < 1 hour.
- **J6 Employee leaves:** deactivate → login disabled, history stays in reports.

## Decisions (binding; history in `background.md`)

- **D-01** Legal working time (start/end/breaks per day) *and* project time from the start; rule checks (H-06); target, holidays, absences, balance are MVP.
- **D-02** Own username/password: invitation, reset, lockout. No 2FA in MVP.
- **D-03** Admin period lock, no submit/approve. After the lock only admins change entries; every change logged.
- **D-04** One global activity list, selectable on every project. **D-04b** No clients, no billable flag.
- **D-05** Absence marker (vacation, sick, public holiday, other), set by employee or admin, no approval, no leave balance; counts towards target time.
- **D-06** Bookable: assigned projects + projects open to everyone.
- **D-07** Contract hours with validity dates, working days, public holidays per federal state, absences → target vs. actual and running overtime balance.
- **D-08** Entries editable until the period is locked; no recording deadline.
- **D-09** Hours only: no rates, costs, money budgets.
- **D-10** Visibility matrix above.
- **D-11** Data kept forever: no automatic deletion or anonymisation.
- **D-12** German and English everywhere (UI, messages, emails, exports, PDFs); each user chooses in settings.
- **D-13** The UX design (`ux/` + mockups, light and dark) is binding. Shell, theme, building blocks are built first (step 1). Mockup elements without a feature are not built. Decisions and accessibility win over the mockups; record the deviation. Dashboard team filter and completeness by team are MVP.
- **D-14** Light, dark, high contrast, forced colours. Default follows the OS; top-bar switch and System/Light/Dark in settings; stored with the user's settings (follows the user to every device, survives a new login).
- **D-15** Grouped side menu per role (`ux/shell.md`); Today is the employee start page; rail/drawer on smaller windows.
- **D-16** No global search; its top-bar slot stays free.
- **D-17** Day and Week pages only (Day | Week switch); month view lives in Balance & summary.
- **D-18** One colour per project, assigned automatically from the project palette in a stable order at creation; admin may override in the project form. Used for the project's dot/bar in timeline, timesheet, project timer, donut. Colours repeat when projects outnumber the palette; code and name always shown next to the colour. The donut's "Other" slice stays neutral grey.
- **D-19** Dashboard and management overview export CSV, Excel and PDF.
- **D-20** Overtime tile = cumulative balance incl. opening balances across the people in scope, independent of the period filter, labelled "balance to date".
- **D-21** Completeness by team: below 90 % = warning colour (fixed). Budgets: "on track" < 80 %, warning chip from 80 %, "over budget" error chip (text + icon) from 100 %.
- **D-22** Every generated PDF uses the one PDF template, layout B "Report" (`ux/pdf.md`): A4, light tokens, tagged PDF/UA-1, readable in greyscale.
- **Accepted risks R-01 – R-05** (retention, late recording, no 2FA, works council/privacy, open legal status) are **not mitigated** in the MVP. Do not build mitigations.

## Rules for every feature

- **Audit:** every change to time data or admin data is logged (who, when, old and new value); entries keep their creation time.
- **Soft deletion:** users are deactivated, projects archived; nothing is hard-deleted.
- **Time:** company time zone, DST, work past midnight, multiple breaks handled correctly. Balances for past periods recalculate to the same result after master-data changes.
- **Formats:** dates, times, numbers per language; times as `h:mm` with tabular figures; never raw ISO dates.
- **Plausible figures:** an implausible value (cycle 1 showed a balance of −57606:52) is a bug, not a display case.
- **Project time vs. working time:** a mismatch is a hint (B-14), never blocks saving (confirm in 0.1).
- **Data loading:** a page loads a fixed, small number of data sets, never one request per entry.

## Definition of Done (every step, every feature)

- [ ] Works end to end (backend + frontend) in the local installation; demo data covers it.
- [ ] Automated tests cover business rules (calculations, permissions); D-10 enforced server-side and tested per role.
- [ ] Changes appear in the audit trail.
- [ ] All texts in DE and EN, incl. messages, emails, exports.
- [ ] Usable in a phone-sized window and with the keyboard only.
- [ ] **UX:** matches `ux/` and, for Today, Week, Dashboard, the mockups – light and dark; shared building blocks and tokens only (no one-off colours, spacing, fonts).
- [ ] **UX:** loading, empty and error states; localised formats; plausible figures for the demo data.
- [ ] **UX:** automated accessibility checks pass in light, dark, high contrast, forced colours.
- [ ] **PDF:** uses the shared PDF template (`ux/pdf.md`), passes the PDF/UA validator, readable as greyscale print, matches the PDF mockups.
- [ ] Reviewed by the backoffice representative in a demo, incl. a side-by-side check against the design.

## Success criteria

| Criterion | Target |
|-----------|--------|
| Adoption | ≥ 95 % of active employees record daily after 2 months |
| Speed | A typical day (working time + projects) recorded in < 1 minute |
| Correct balances | Match HR's expectation for all pilot users after the first full month |
| Month-end close | Completeness check, payroll export, lock in < 1 hour |
| Reports | Project, user, team, budget reports without manual spreadsheet work |
| Data trust | Every change to an entry traceable to a person and time |
| UX | PO confirms Today, Week, Dashboard match the mockups in light and dark; all other screens follow `ux/`; no automated a11y violations in any theme variant; every PDF uses the PDF layout, is valid PDF/UA, reads correctly in greyscale |
