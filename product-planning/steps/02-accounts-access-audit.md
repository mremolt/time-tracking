# Step 2 – Accounts, access control, audit

Phase 1a · Needs: 1 · Features: A-01–A-05, A-07, A-08, H-05, H-01, H-02 (mechanism)
**Goal:** users log in securely; every later feature checks permissions in one consistent way and logs changes in one reusable audit log – before any business data exists.

**Read** – A: `context.md` (Visibility, D-02, D-14). B: `context.md`, `ux/shell.md` (navigation per role, admin tabs), `ux/screens.md` (Settings, Login, Audit log).

## Features

| ID | Feature |
|----|---------|
| A-01 | Login with email and password in the app (D-02) |
| A-02 | Invitation: new users get an email and set their own password |
| A-03 | Self-service password reset |
| A-04 | Manual logout; automatic logout after inactivity |
| A-05 | Roles Employee, Project Lead, Backoffice Admin, Management (read-only); a user may hold several (D-10) |
| A-07 | Personal settings: language (DE/EN), theme (System/Light/Dark, D-14), default project, preferred view, notification preferences. Also DE/EN and theme switch in the top bar |
| A-08 | Deactivated users cannot log in; access ends immediately, data remains |
| H-05 | Visibility rule set per role as in D-10 |
| H-01 | Change history for entries: who created/changed which entry when, old/new value |
| H-02 | Admin action log: user/project administration and period locks |

## Part A – backend
- Login, logout, session timeout, account lockout (policies from 0.1); invitation and password reset by email; bootstrap of the first admin account.
- **One central permission check** implementing D-10, reused by every later feature, report and export.
- Settings stored per user (language, theme, default project, preferred view, notifications); the top-bar switches write the same settings.
- **Audit:** who changed what and when, with old and new values, for time entries and admin objects; creation time of every entry kept (needed for R-02 later). Settings changes are audited.

## Part B – screens
- Login, invitation and password-reset pages in the app's theme and tokens.
- Navigation groups per role exactly as `ux/shell.md`; account menu with name, Settings, My data, Sign out.
- Settings page as cards (`ux/screens.md`).
- Administration › System & audit: tab **Audit log** (table card with filters: history of an object and the admin action log) and tab **Test e-mail**.

## Done when
Each role can log in and sees only its own navigation groups; theme and language choice survive a new login in another browser; a deactivated user is locked out immediately; a change to a test object appears in the audit log with user, timestamp, old and new values.
