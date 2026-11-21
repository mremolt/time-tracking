# Agent notes – product planning

These docs define *what* is built and *how it looks*. *How it is built* comes from the quality baseline (`docs/baseline/`, entry `AGENTS.md`); on a technical question the baseline wins, on product scope and UX these docs win. Record a conflict (ADR or feedback log) instead of silently picking one.

**Read only what your task needs – never the whole folder:**

1. `context.md` – always (product, roles, visibility D-10, decisions, rules, Definition of Done).
2. `plan.md` – only to find the next step or check dependencies.
3. `steps/NN-*.md` – the step you work on. Its **Read** line names the files for part A (backend) and part B (screens); open nothing else.
4. `ux/*.md` – only the files the step names. Mockup HTML (`mockups/*.dc.html`, ~25 KB each): grep for a missing value, never read whole; `approved-screens.pdf`: only the page of your screen.

Do not read `background.md` (history and rationale) or `features.md` (index; only for step 16) unless asked.

**Work rule:** finish part B (screens) of a step before starting part A of the next one. The UX design is binding (D-13): a screen is not done until it matches `ux/` and the mockups in light and dark; a PDF is not done until it passes the PDF/UA validator and reads correctly in greyscale.
