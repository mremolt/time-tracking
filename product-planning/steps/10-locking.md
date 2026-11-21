# Step 10 – Period locking and admin corrections

Phase 1b · Needs: 8 · Features: C-01, C-05
**Goal:** backoffice can close a period (D-03).

**Read** – A: `context.md` (D-03, D-08), 0.1 answers on periods and unlocking. B: `context.md`, `ux/shell.md` (admin tabs), `ux/screens.md` (Admin pages).

## Features

| ID | Feature |
|----|---------|
| C-01 | Backoffice locks a period for all or selected users, and unlocks it if needed (as agreed in 0.1) |
| C-05 | Admins correct entries in locked periods; every correction fully logged (H-01) |

## Part A – backend
- Employees cannot change working time, project time or absences in a locked period (the check prepared in steps 4, 5, 7).
- Locks and unlocks recorded in the admin action log.

## Part B – screens
- Administration › Month end: tabs **Close months** and **Corrections**.

## Done when
After a lock, an employee's change attempt is rejected and an admin correction appears in the audit log.
