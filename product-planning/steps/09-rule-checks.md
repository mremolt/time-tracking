# Step 9 – Rule checks and gap hints

Phase 1b · Needs: 8 · Features: H-06, B-14
**Goal:** users see problems while they record (J2).

**Read** – A: `context.md`, the 0.1 answers on rule checks and exempt employees. B: `context.md`, `ux/today.md` (card 5), `ux/week.md` (footer status, Things to check).

## Features

| ID | Feature |
|----|---------|
| H-06 | Working-time rule checks (D-01): warnings for > 10 h per day, missing breaks (30 min above 6 h, 45 min above 9 h), rest period < 11 h. Warnings only, never block saving |
| B-14 | Gap hints: day without entries, day below target, project time ≠ working time |

## Part A – backend
- Rule set as agreed in 0.1; findings for today and the current week, loaded in one request per page.

## Part B – screens
- **Things to check** notice cards on Today and Week, each finding with an action link (Fix, Book).
- Day status in the Week footer (✓ complete, "missing" chip).
- Today and Week are now complete as in the mockups.

## Done when
Each rule and hint can be triggered by a test scenario and is shown in DE and EN.
