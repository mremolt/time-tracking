# Feature index

The full description of every MVP feature is in the step that builds it (`steps/`). This index is for orientation and the final acceptance check (step 16). **MVP 62 · Phase 2 5 · Out of scope 18.**

Modules: A Authentication & account · B Time recording · C Period closing · U User administration · E Project administration · F Dashboard & reports · G Notifications · H Compliance, audit & data protection · I General usability

## MVP

| ID | Feature | Step |
|----|---------|------|
| A-01 | Login | 2 |
| A-02 | Invitation / first access | 2 |
| A-03 | Password reset | 2 |
| A-04 | Logout & session timeout | 2 |
| A-05 | Role-based access | 2 |
| A-07 | Personal settings | 2 |
| A-08 | Deactivated users cannot log in | 2 |
| B-01 | Manual entry | 5 |
| B-02 | Week view (grid) | 6 |
| B-03 | Day view / list | 5 |
| B-04 | Edit / delete own entries | 4, 5 |
| B-05 | Only assigned + open projects selectable | 5 |
| B-07 | Start/stop timer (working day / project) | 4 / 5 |
| B-08 | Start/end times | 4 |
| B-09 | Copy previous day/week | 6 |
| B-10 | Favourites / recent projects | 6 (chips on Today: 5) |
| B-12 | Activity selection | 5 |
| B-13 | Own summaries & balance | 8 |
| B-14 | Gap hints | 9 |
| B-15 | Absence marker | 7 |
| B-16 | Mobile-friendly use | 6 |
| B-18 | Working-time recording | 4 |
| C-01 | Period locking by admin | 10 |
| C-05 | Admin correction | 10 |
| U-01 | Create / edit users | 3 |
| U-02 | Deactivate / reactivate users | 3 |
| U-03 | Assign roles | 3 |
| U-04 | Target working time | 7 |
| U-05 | Assign projects to user | 3 |
| U-06 | Teams / departments | 3 |
| U-08 | Bulk import | 3 |
| U-10 | Initial overtime balance | 7 |
| E-01 | Create / edit projects | 3 |
| E-02 | Project status | 3 |
| E-04 | Project members | 3 |
| E-06 | Activity list | 3 |
| E-07 | Hour budget | 11 |
| E-09 | Internal default projects | 3 |
| F-01 | Overview dashboard | 14 |
| F-02 | Project report | 13 |
| F-03 | User report | 13 |
| F-04 | Flexible filtering & grouping | 12 |
| F-05 | Export | 12 |
| F-06 | Completeness report | 13 |
| F-07 | Budget report | 13 |
| F-09 | Overtime report | 13 |
| F-12 | Project lead view | 13 |
| F-13 | Payroll export | 15 |
| F-14 | Management view | 14 |
| G-03 | Budget warnings | 11 |
| H-01 | Change history for entries | 2 |
| H-02 | Admin action log | 2 |
| H-03 | Own data view & export | 15 |
| H-05 | Visibility rule set | 2 |
| H-06 | Working-time rule checks | 9 |
| I-01 | Responsive web UI | 1 |
| I-02 | Languages | 1 |
| I-03 | Accessibility | 1 |
| I-04 | Public holidays calendar | 7 |
| I-05 | Help / onboarding | 16 |
| I-07 | Light and dark theme | 1 |
| I-08 | Today start page | 4 |

## Phase 2 (after go-live – do not build)

A-06 Two-factor authentication (accepted risk R-03) · B-11 Mandatory description, configurable per project · U-09 Admin enters time on behalf of a user (locked-period corrections are C-05) · F-10 Saved report views (filter combinations) · G-01 Email reminder for missing time / before month-end lock

## Out of scope (do not build; kept for traceability)

| ID | Feature | Reason |
|----|---------|--------|
| B-06 | Billable flag | D-04b |
| B-17 | Recording deadline | D-08 (until lock instead) |
| C-02 / C-03 / C-04 | Submit timesheet / approve-return / approval overview | D-03 (completeness report F-06 covers the need) |
| C-06 | Multi-level approval | Enterprise feature |
| U-07 | Cost / billing rates | D-09 |
| E-03 / E-05 | Clients / billable default | D-04b |
| E-08 | Money budget | D-09 |
| E-10 | Sub-projects / hierarchy | Activities cover the need |
| F-08 | Utilisation report | D-10 |
| F-11 | Scheduled reports by email | Not wanted |
| G-02 | Approval notifications | D-03 |
| G-04 | Chat integration | Not wanted |
| H-04 | Automatic retention & deletion | D-11, accepted risk R-01 |
| I-06 | Integrations | Exports cover the need |
| I-09 | Global search | D-16 |
