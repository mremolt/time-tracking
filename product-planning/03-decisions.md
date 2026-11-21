# 3. Decision Log

Status: **all decisions taken** (D-01 – D-12 on 2026-11-20; UX decisions D-13 – D-17 on 2026-11-21 after the UX review of the first implementation cycle; mockup consistency decisions D-18 – D-21 on 2026-11-21). The original options and reasoning are summarised so that the reasons stay traceable. Points marked ⚠ carry a known risk; these risks are **accepted for the MVP** and recorded in the [risk register](#accepted-risks-mvp) at the end of this document. No mitigation is implemented in the MVP.

| ID | Topic | Decision | Recommended was |
|----|-------|----------|-----------------|
| D-01 | Project time vs. legal working time | **Both from the start** – working time (start/end/breaks) and project allocation | Project time, extensible |
| D-02 | Login method | **Own username/password** in the app ⚠ | Company SSO |
| D-03 | Approval workflow | **Admin period lock**, no individual approval | ✔ same |
| D-04 | Activities | **One global activity list** | ✔ same |
| D-04b | Clients / billing | **No** – internal projects only, no billable flag | – |
| D-05 | Absences | **Simple absence marker**, no approval | ✔ same |
| D-06 | Bookable projects | **Assigned projects + projects open to everyone** | ✔ same |
| D-07 | Target hours & overtime balance | **Yes, in MVP** | ✔ same |
| D-08 | Recording deadline | **Editable until the period is locked** ⚠ | Within X days |
| D-09 | Money values | **No** – hours only | ✔ same |
| D-10 | Visibility of per-person data | **Employee + backoffice; project leads for their own projects; management aggregated only** ⚠ | ✔ same |
| D-11 | Data retention | **Keep forever**, no automatic deletion ⚠ | Decide with DPO |
| D-12 | UI language | **German + English** | – |
| D-13 | UX design | **Approved design is binding** for every screen ([06-ux-design.md](06-ux-design.md) + mockups) | – |
| D-14 | Theme | **Light, dark and high contrast; user chooses System / Light / Dark** in personal settings | ✔ same |
| D-15 | Navigation and start page | **Grouped side menu per role; "Today" is the employee start page** | ✔ same |
| D-16 | Global search | **Not built** (mockup shows it, no use case) | ✔ same |
| D-17 | Day / week / month views | **Day and Week pages only**; month lives in Balance & summary | ✔ same |
| D-18 | Project colour | **Auto-assigned, stable per project, optional admin override** (E-01); same colour on every screen | ✔ same |
| D-19 | Dashboard export | **CSV, Excel and PDF** on the dashboard as well (amends F-05) | Drop PDF |
| D-20 | Overtime tile | **Cumulative balance** (incl. carry-over), independent of the period filter, labelled as such | ✔ same |
| D-21 | Dashboard thresholds | **Teams below 90 % completeness get the warning colour (fixed); budgets at 100 % or more get an "over budget" error chip** | ✔ same |

---

## D-01 – Project time and legal working time → **Both from the start**

**Background:** Since the Federal Labour Court decision of 13 Sep 2022 (BAG 1 ABR 22/21), employers in Germany must record start, end and duration of working time. A government draft amending the Working Hours Act (June 2026, not yet passed as of Oct 2026) plans electronic, same-day recording, a 2-year transition for companies with 50–249 employees, an employee right to a copy, and fines up to €30,000.

**Consequences:**
- The working day is recorded with start, end and breaks (B-08, B-18); project time is allocated within it.
- Rule checks for maximum daily hours, breaks and rest periods (H-06).
- Target hours, public holidays, absences and overtime balance become MVP (U-04, I-04, B-15, F-09, D-07).
- Exempt groups (e.g. executive staff under § 18 ArbZG) may need a simplified mode – to clarify with HR.

## D-02 – Login → **Own username/password**

**Consequences:** invitation (A-02), password reset (A-03) and account lockout handling are MVP. Two-factor login (A-06) is Phase 2.
⚠ Risk accepted for MVP → **R-03**.

## D-03 – Approval → **Admin period lock**

Backoffice locks a period (typically a month); afterwards only admins can change entries, and every change is logged. No submit/approve workflow (C-02 – C-04, G-02 dropped).

## D-04 – Activities and clients → **Global activity list, no clients**

- One company-wide list of activity types (e.g. Development, Meeting, Training, Travel) selectable on every project (B-12, E-06).
- No client list, no billable flag, no client reports (B-06, E-03, E-05 dropped). If billing to external parties becomes relevant later, clients and billable flag can be added.

## D-05 – Absences → **Simple absence marker**

Employees (or admins) mark days as vacation, sick, public holiday, other. No leave requests or balances. Required so that target vs. actual hours are correct. Now **MVP** because of D-07.

## D-06 – Bookable projects → **Assigned + open projects**

Employees see projects they are assigned to plus projects flagged as "open to everyone" (Administration, Training, …).

## D-07 – Target hours & overtime → **Yes, MVP**

Contract hours per user with validity dates, working days, public holidays (by federal state where relevant), absences → target vs. actual and running overtime balance.

## D-08 – Recording deadline → **Until period lock**

Employees can create and change entries until backoffice locks the period.
⚠ Risk accepted for MVP → **R-02**.

## D-09 – Money values → **No**

Reports show hours only. No rates, costs or money budgets (U-07, E-08 dropped).

## D-10 – Visibility → **Leads see their own projects**

| Viewer | Own data | Per-person data of others | Aggregated data |
|--------|----------|---------------------------|-----------------|
| Employee | ✔ | – | – |
| Project lead | ✔ | Only project time on their own projects (not working time, overtime or absences) | Own projects |
| Backoffice admin | ✔ | All | All |
| Management (read-only) | ✔ | – | All |

No per-person utilization ranking (F-08 dropped).
⚠ Risk accepted for MVP → **R-04**.

## D-11 – Data retention → **Keep forever**

No automatic deletion; H-04 dropped.
⚠ Risk accepted for MVP → **R-01**.

## D-12 – UI language → **German + English**

Both languages from the start; each user chooses their language in personal settings (A-07).

## D-13 – UX design → **Approved design is binding**

**Background:** the first implementation cycle delivered all features, but the UX review was devastating: a flat link toolbar, a start page with one sentence, six forms stacked on the recording page, plain input grids, raw ISO dates and no visual hierarchy (details in [06-ux-design.md §6.1](06-ux-design.md#61-why-this-document-exists-lessons-from-the-first-implementation-cycle)). A design with mockups was then made and approved by the product owner (2026-11-21).

**Consequences:**
- [06-ux-design.md](06-ux-design.md) and its mockups (light and dark) are the target for every screen; the Definition of Done includes a design check (§5.2).
- The shell, theme and shared building blocks are built in step 1, before any feature screen.
- Mockup elements without a feature are not built (D-16, D-17); decisions D-01 – D-12 and accessibility win over the mockups where they conflict.
- The dashboard's team filter and "Completeness by team" are already MVP scope (U-06, F-04, F-06) and are built.

## D-14 – Theme → **System / Light / Dark, stored with the personal settings**

Light and dark theme from the start, plus a high-contrast variant and support for forced colours (I-07). The default follows the operating system; the user can override it with a switch in the top bar and a three-way choice (System / Light / Dark) in personal settings. The choice is stored with the user's settings like the language (A-07), so it follows the user to every device and survives a new login.

## D-15 – Navigation and start page → **Grouped side menu, "Today" start page**

Navigation is a side menu with the groups My time, Insights, Company, Administration and a bottom group (Help & guide, Settings), filtered per role (D-10). Administration has four entries (People, Projects, Month end, System & audit), each with tabs. Employees land on **Today** (I-08), which bundles the running day, project timer, timeline, quick booking and things to check. On smaller windows the side menu becomes a rail or a drawer.

## D-16 – Global search → **Not built**

The mockups show a search field in the top bar, but no feature needs it. It is left out; the top bar keeps space for it (I-09).

## D-17 – Day / week / month views → **Day and Week only**

The recording area has a Day page (any date) and a Week page, switched with a Day | Week control. The month view is part of Balance & summary (B-13); there is no separate month page.

## D-18 – Project colour → **Auto-assigned, optional override**

Every project has one colour, used for its dot/bar in the timeline, timesheet, project timer and the hours-by-project donut. The system assigns it from the project palette (§6.5) in a stable order when the project is created; backoffice may override it in the project form (E-01). When there are more projects than palette colours, colours repeat; code and name are always shown next to the colour, so colour is never the only cue. The donut's own "Other" slice stays neutral grey.

## D-19 – Dashboard export → **CSV, Excel and PDF**

The Export menu on the dashboard and the management overview offers all three formats, as drawn in the mockup. F-05 is amended accordingly.

## D-20 – Overtime tile → **Cumulative balance**

The "Overtime balance" tile shows the total balance including the opening balance (U-10) across the people in scope, not the change within the selected period. The tile label says "balance to date" so it is not read against the period's worked/target figures.

## D-21 – Dashboard thresholds → **90 % completeness, over-budget chip**

In "Completeness by team" a team below 90 % gets the warning colour (fixed value, not configurable in the MVP). Project budgets show "on track" below 80 %, the warning chip from 80 %, and a distinct "over budget" error chip (text plus icon) from 100 %.

---

## Accepted risks (MVP)

The following risks are known and **accepted for the MVP**. No mitigation is part of the MVP scope. They are to be reviewed before the MVP is extended or rolled out beyond its initial use.

| ID | Risk | From | Possible mitigation (after MVP) |
|----|------|------|--------------------------------|
| R-01 | **Indefinite data retention.** Keeping personal data forever conflicts with the GDPR principle of storage limitation (Art. 5 (1)(e)) and with erasure requests of former employees. The draft working-time law mentions retention of up to 2 years. | D-11 | Confirm with data protection officer; add retention rules (H-04) or manual anonymisation of former employees. |
| R-02 | **Late recording allowed.** The draft working-time law requires recording on the day of work; entries can be created/changed until the period lock. | D-08 | Once the law is in force: recording deadline (B-17) and/or a report of late entries based on the change history (H-01). |
| R-03 | **No second login factor.** Access to personal working-time data relies on app passwords only, including admin accounts. | D-02 | Two-factor login (A-06), at least for admins; alternatively company SSO. |
| R-04 | **Co-determination / privacy not yet cleared.** Introducing working-time recording and the visibility rules typically requires works council co-determination (§ 87 (1) no. 6 BetrVG) and a privacy notice. | D-01, D-10 | Involve works council and data protection officer; adjust visibility rules if required. |
| R-05 | **Legal status open.** The ArbZG amendment is a draft (status Oct 2026); final rules (deadline, exemptions, break/rest checks) may differ from the current assumptions. | D-01 | Re-check legal status before go-live and when the law is passed. |
