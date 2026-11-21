# Step 1 – Foundation and shell

Phase 1a · Needs: 0.4 · Features: I-01, I-02, I-03, I-07
**Goal:** an empty but runnable application with all cross-cutting foundations and the approved shell.

**Read** – A: `context.md`. B: `context.md`, `ux/README.md`, `ux/shell.md`, `ux/tokens.md`, approved-screens.pdf page 1 (shell only).

## Features

| ID | Feature |
|----|---------|
| I-01 | Responsive web UI: desktop (side menu), tablet (navigation rail), phone (drawer, one column) |
| I-02 | German and English (D-12) |
| I-03 | Accessibility: keyboard operation, WCAG 2.2 AA contrast in every theme, screen-reader friendly forms, text alternatives for charts |
| I-07 | Light and dark theme, plus high contrast and forced colours; follows the system unless the user chooses (D-14) |

## Part A – backend
- Spring Boot backend and Angular frontend set up with automated build and tests.
- **Local installation** started with a short, documented procedure on a standard developer/demo machine.
- Outgoing email with DE/EN templates (invitations, resets, budget warnings). Locally, emails are captured and viewable instead of delivered.

## Part B – screens
- **Shell** exactly as `ux/shell.md`: side menu with product mark and groups, top bar with context line, title, theme switch, DE/EN switch, account menu; skip link; side menu → rail → drawer per window size. Entries for later steps hidden until built.
- **Theme:** palette from `#0F6B67`; light, dark, high contrast, forced colours; Inter and icons self-hosted; all tokens from `ux/tokens.md` defined once. Top-bar theme switch works from the start (stored per user from step 2).
- **Shared building blocks:** page header, card, figure tile, status chip, notice card, loading/empty/error states (charts come in step 8).
- Translations with DE/EN switch from the first screen, incl. locale formats for dates, times, numbers.
- Accessibility baseline: keyboard navigation, focus handling, contrast, labels. Automated a11y checks in all theme variants at phone and desktop sizes.

## Done when
The shell with a sample page starts from the documented local setup, matches the mockup shell in light and dark, switches DE/EN and themes, works as rail and drawer, passes the a11y checks in every theme variant, and a test email can be viewed.
