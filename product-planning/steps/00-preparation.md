# Step 0 – Preparation

Mostly business work with HR, backoffice, payroll and management. An implementing agent records the answers (in the implementation repo; open items as assumptions with impact) – they are binding for later steps.

## 0.1 Clarify open business questions
Goal: no step is blocked by a missing business decision. Decide and write down:
- Handling of employees exempt from working-time rules (D-01, e.g. § 18 ArbZG executives, possibly a simplified mode) and which rule checks apply (H-06) – with HR.
- Relationship project time ↔ working time: assumption "mismatch is only a hint" (B-14). Confirm.
- Policies: session timeout, account lockout after failed logins, password rules.
- Definition of a period (calendar month?) and who may lock and unlock it.
- Budget warning thresholds (E-07) and recipients (G-03).
- Source of public holidays per federal state and how they are maintained per year (I-04).
- Absence types, full/half days, and how each affects target time (B-15).

Done when: each item has a documented answer agreed by its owner.

## 0.2 Agree the payroll export
Goal: the format of F-13 is fixed before reporting starts. Get a sample file or specification from payroll: fields, granularity, file format. Done when payroll has signed off.

## 0.3 Demo data and scenarios
Goal: realistic, fictitious data that shows every feature and role.
- Users for all roles (incl. users with several roles), several teams and federal states, contract changes, opening balances.
- Projects with/without budgets, open and assigned, archived; the activity list; internal default projects.
- Test scenarios with expected results from HR (e.g. overtime balance after a month with holidays, absences and a contract change).

Done when the data exists in the bulk-import format (defined in step 3) and HR has confirmed the expected results.

## 0.4 Technical specification
Goal: turn the product docs into the technical design (architecture, data model, interfaces, local setup, security concept) – following the quality baseline (document only what is product-specific: ADRs and `docs/architecture/`). Must cover:
- **Scale:** ~100 users, one company, low volume – favour simplicity.
- **Auth:** own accounts with passwords (D-02): invitation, reset, lockout; no 2FA.
- **Two kinds of time:** legal working time per day vs. project time (project + activity); their relationship (B-14).
- **Time handling:** time zones, DST, work past midnight, breaks.
- **Balances:** target hours, holidays per federal state, absences, opening balances change over time; past balances must stay reproducible.
- **Locking and audit:** locked periods, full change history incl. creation time of entries.
- **Visibility:** D-10 enforced consistently in UI, reports, exports. **Retention:** keep forever (D-11). **Soft deletion.** **i18n:** DE/EN incl. PDF and export labels.
- **UX build:** theme and tokens incl. warning/success/error/chart/hero colours defined once next to the theme (`ux/tokens.md`); Inter and icons self-hosted; theme preference stored with user settings; navigation per window size; shared building blocks; five simple chart forms (ring, grouped bars, donut, stacked bar, day timeline) – no large chart library; Today loads a fixed number of data sets; automated a11y checks in light, dark, high contrast, forced colours at phone and desktop sizes.
- **PDF tooling:** see `ux/pdf.md` § Tooling requirements – check before choosing a library.
- The team looks at the mockups (`ux/README.md`) before estimating; the mockup canvases are private until the owner shares them.

Done when the specification is reviewed and the steps are estimated.
