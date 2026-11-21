# Step 3 – Master data administration

Phase 1a · Needs: 2, 0.3 · Features: U-01, U-02, U-03, U-05, U-06, U-08, E-01, E-02, E-04, E-06, E-09
**Goal:** backoffice sets up the company without technical help (G2; journeys J3, J4, J6).

**Read** – A: `context.md` (D-06, D-18, J3/J4/J6). B: `context.md`, `ux/shell.md` (admin tabs), `ux/screens.md` (Admin pages).

## Features

| ID | Feature |
|----|---------|
| U-01 | Create/edit users: name, email, role(s), personnel number, entry/exit date, team, federal state (holidays) |
| U-02 | Deactivate/reactivate instead of deleting; history stays |
| U-03 | Assign roles |
| U-05 | Assign projects to a user (complements E-04) |
| U-06 | Teams/departments; used to filter dashboard and reports |
| U-08 | Bulk import of users and projects from a spreadsheet, with validation and an error report |
| E-01 | Create/edit projects: name, code, description, project lead, start/end date, colour (auto-assigned, optional override, D-18) |
| E-02 | Project status active/archived |
| E-04 | Project members, or "open to everyone" (D-06) |
| E-06 | Global activity list (D-04) |
| E-09 | Internal default projects (e.g. Administration, Training, Internal meetings), open to everyone |

## Part A – backend
- Users, teams, roles, projects, members, activities; assignment from both the user and the project side.
- Bulk import (defines the import format used by the demo data, 0.3).
- Default projects created and marked open to everyone. Nothing hard-deleted.
- Every change audited (H-01/H-02).

## Part B – screens
- Administration › **People** (tabs Users, Teams, Import) and › **Projects** (tabs Projects, Activities): each a table card with the main action in the page header; create/edit in a dialog or a sectioned form page. No page with several unrelated forms.
- The project form includes the project colour.

## Done when
J3, J4 and J6 work end to end and the demo data from 0.3 imports without errors.
