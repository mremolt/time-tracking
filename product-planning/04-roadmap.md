# 4. Roadmap, Success Criteria and Hand-off

## 4.1 Phases

The phases follow the decisions in [03-decisions.md](03-decisions.md) and the priorities in [02-feature-catalog.md](02-feature-catalog.md).

> **Note on MVP size:** recording legal working time from the start (D-01), together with overtime, absences, budgets and the full set of reports, makes the MVP considerably larger than a pure project-time tool. The MVP is therefore split into two increments (1a, 1b). Go-live should happen after 1b, but 1a can be piloted with a small group of users.

### Phase 0 – Preparation (before development)
- Make the approved UX design and mockups ([06-ux-design.md](06-ux-design.md)) available to the whole team (the mockup canvas is private until shared).
- Clarify with HR: handling of employees exempt from working-time rules; break and rest-period rules to check (H-06).
- Agree the payroll export format (F-13) with payroll.
- Collect initial data: users with target hours, teams, federal states, opening overtime balances, projects, activity list.

### Phase 1a – Core recording (pilot)
Goal: employees record working time and project time; backoffice administers.
- **Look and feel:** the approved application shell (grouped side menu, top bar), light/dark/high-contrast theme with user choice, shared building blocks, Today start page (I-07, I-08, D-13 – D-15).
- **Account:** login, invitation, password reset, logout/timeout, roles, deactivation, personal settings incl. language and theme (A-01–A-05, A-07, A-08).
- **Recording:** working-time recording with start/end/breaks, timer, manual entry, day and week view, edit/delete, assigned + open projects, activities, copy last week, favourites (B-01–B-05, B-07–B-10, B-12, B-16, B-18).
- **Administration:** users, roles, teams, project assignments, bulk import; projects, status, members, activity list, internal default projects (U-01–U-03, U-05, U-06, U-08, E-01, E-02, E-04, E-06, E-09).
- **Trust:** change history, admin log, visibility rules (H-01, H-02, H-05).
- **Usability:** responsive, German + English, basic accessibility (I-01–I-03).

### Phase 1b – Balances, closing and reports (go-live)
Goal: correct overtime balances, month-end close and reporting.
- **Balances:** target hours, opening balance, public holidays, absence marker, own summaries, gap hints, working-time rule checks (U-04, U-10, I-04, B-13–B-15, H-06).
- **Closing:** period locking, admin corrections (C-01, C-05).
- **Budgets:** hour budgets with warnings (E-07, G-03).
- **Reports:** dashboard and management view in the approved design (charts, figure tiles, budget table, completeness by team), project and user reports, free filtering/grouping, completeness, budget and overtime reports, project lead view, CSV/Excel/PDF export, payroll export (F-01–F-07, F-09, F-12–F-14).
- **Data protection:** own data view and export (H-03).
- **Help:** user guide DE/EN (I-05).

### Phase 2 – After go-live
- Two-factor login (A-06).
- Mandatory description per project (B-11).
- Admin acts on behalf of a user (U-09).
- Saved report views (F-10).
- Email reminders for missing time (G-01).

### Not planned
Approval workflow, clients and billing, money values, utilization ranking, scheduled reports, chat integrations, external integrations, automatic data deletion, global search (see "Out of scope" in the catalog).

### Accepted risks
The risks R-01 – R-05 (retention, late recording, no second login factor, works council/privacy, open legal status) are accepted for the MVP and not mitigated in it. See the risk register in [03-decisions.md](03-decisions.md#accepted-risks-mvp); review them before extending the MVP.

## 4.2 Success criteria

| Criterion | Target |
|-----------|--------|
| Adoption | ≥ 95 % of active employees record working time daily after 2 months. |
| Speed | Recording a typical day (working time + projects) takes < 1 minute. |
| Correct balances | Overtime balances match HR's expectation for all pilot users after the first full month. |
| Month-end close | Backoffice closes a month (completeness check, payroll export, lock) in < 1 hour. |
| Reports | Project, user, team and budget reports available without manual spreadsheet work. |
| Data trust | Every change to an entry is traceable to a person and time. |
| UX | The product owner confirms that Today, Week and Dashboard match the approved mockups in light and dark theme, and every other screen follows [06-ux-design.md](06-ux-design.md). No automated accessibility violations in any theme variant. Every generated PDF uses the approved PDF layout (D-22), is valid PDF/UA and reads correctly in greyscale print. |

## 4.3 Hand-off notes for the technical team

Points that follow from the feature analysis (the *how* is up to the technical team):

- **Fixed stack:** Spring Boot backend, Angular frontend.
- **UX design is binding** (D-13): [06-ux-design.md](06-ux-design.md) and the mockups define layout, screens, tokens and accessibility. Points for the specification:
  - the design needs colour tokens beyond a component library's standard roles (warning, success, chart/project series, the always-dark hero panel); define them once next to the theme, and let screens use tokens only
  - font Inter and the icon set are served by the application itself (no external font service)
  - theme preference (System / Light / Dark) is stored with the user settings, like the language (D-14)
  - five simple chart forms (ring, grouped bars, donut, stacked bar, day timeline) – a large chart library is not needed
  - Today combines several data sets (running day, project timer, day view, week summary, findings); load them as a fixed number of requests, never per entry
  - automated accessibility checks in light, dark, high contrast and forced colours, on phone and desktop window sizes
  - generated PDFs (D-22, [06-ux-design.md §6.9](06-ux-design.md#69-generated-pdfs-binding-for-every-pdf)):
    - one shared server-side PDF template in the approved layout, A4, always the light tokens
    - the PDF tooling must produce **tagged PDF/UA-1**: language, title, structure tags, real tables, alternative text for charts, artifacts, bookmarks
    - Inter embedded in the file
    - charts drawn as vector graphics in the PDF chart forms (§6.9.3)
    - check this tooling requirement before choosing a PDF library
  - dates, times and numbers are always formatted per language; implausible figures (e.g. a balance of −57606:52 seen in cycle 1) are a bug, not a display case
- **Scale:** ~100 users, single company, low data volume – favour simplicity.
- **Authentication:** own user accounts with passwords (D-02): invitation, reset, lockout; no 2FA in the MVP (R-03).
- **Two kinds of time:** legal working time (start/end/breaks per day) and project time (allocated to project + activity). Their relationship (must project time add up to working time? warning only?) must be specified – current assumption: mismatch is shown as a hint (B-14), not blocked.
- **Time handling:** time zones, daylight saving time, work across midnight, breaks.
- **Balances:** target hours, holidays per federal state, absences and opening balances change over time; balances for past periods must stay reproducible.
- **Locking & audit:** locked periods and full change history (incl. creation time of entries) are core features.
- **Visibility:** the role/visibility matrix in D-10 must be enforced consistently in UI, reports and exports.
- **Retention:** data is kept indefinitely (D-11); no deletion or anonymisation in the MVP (R-01).
- **Internationalisation:** German and English from the start, including PDF/export labels.
- **Soft deletion:** users and projects are deactivated/archived, never removed.

## 4.4 Research sources

Feature research (Nov 2026):
- [My Hours – Best time tracking software for small businesses](https://myhours.com/best-time-tracking-software-small-business)
- [HiveDesk – Features that actually matter](https://www.hivedesk.com/blog/time-tracking/top-features-time-tracking-software)
- [actiTIME – Timesheet app checklist](https://www.actitime.com/time-tracking/must-have-features-timesheets-app)
- [Rework – Best timesheet software 2026 (approvals, locking, audit)](https://resources.rework.com/tools/time-attendance/best-timesheet-software-2026)
- [Beebole – Time tracking tools with automated approvals](https://beebole.com/blog/best-time-tracking-tools-with-automated-timesheet-approval)
- [Forbes Advisor – Best time tracking software](https://www.forbes.com/advisor/business/software/best-time-tracking-software/)
- [Celoxis – Time tracking software for teams](https://www.celoxis.com/article/best-time-tracking-software)

German working-time recording (status to be verified with legal/HR):
- [Digitally Done – Arbeitszeiterfassung 2026/2027](https://digitally-done.com/blog/arbeitszeiterfassung-2026-2027-was-gilt)
- [Factorial – Arbeitszeitgesetz-Reform 2026](https://factorialhr.de/blog/arbeitszeitgesetz-reform/)
- [Taxmaro – Arbeitszeiterfassung Pflicht 2026](https://www.taxmaro.com/post/arbeitszeiterfassung-pflicht-2026-arbeitgeber-umsetzen)
