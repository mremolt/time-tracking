# UX design (binding) – how to use

Approved by the product owner on 2026-11-21 (screens light + dark, and the PDF layout). A screen or PDF is not done until it matches these files and the mockups (Definition of Done in `../context.md`). No UI framework is prescribed.

**Read only the files your step names:**

| File | Content |
|------|---------|
| [shell.md](shell.md) | Shell (side menu, top bar, content, card), window sizes, navigation per role, admin tabs, shared building blocks, accessibility, general screen rules |
| [tokens.md](tokens.md) | Font, icons, colour tokens (light/dark), type scale, shape and spacing |
| [today.md](today.md) | Today (employee start page) |
| [week.md](week.md) | Week timesheet |
| [dashboard.md](dashboard.md) | Company dashboard / Management overview |
| [screens.md](screens.md) | Patterns for screens that are not drawn (Day, Absences, Balance & summary, reports, budgets, admin, settings, …) |
| [pdf.md](pdf.md) | Layout for every generated PDF |

## Mockups

- **Visual reference:** [../mockups/approved-screens.pdf](../mockups/approved-screens.pdf) – page 1 Today, 2 Week, 3 Dashboard (light); 4–6 the same in dark. Open only the page of the screen you build.
- **Exact values:** all token values are in `tokens.md`. Only for a value not written down (a size, a spacing), **grep** the light source file (`Today.dc.html`, `Week.dc.html`, `Dashboard.dc.html`; their `renderVals()` holds both light and dark token sets) – don't read whole files (~25 KB each). The `*Dark.dc.html` files only import the light page with `theme="dark"`. PDF values: `PdfRecord.dc.html`, `PdfOverview.dc.html`.
- The `.dc.html` files need the canvas runtime and Google Fonts; opened locally they are source, not a preview. Rendered: screen canvas <https://claude.ai/code/artifact/a674afbe-657c-404d-a87b-be37ca23ec86>, PDF canvas <https://claude.ai/code/artifact/e37e8102-86b5-439a-b51d-a660c3353281> (both private until the owner shares them; Artifact tool `action: "read_file"`, e.g. `path: "project/Today.dc.html"`). Local copies: canvas version `1795265364-ea0f`, 2026-11-21.
- `Main.dc.html`, `Rail.dc.html`, `Executive.dc.html` are a rejected first round – **ignore them**.

## Precedence

`ux/` and the mockups define the target. Where they conflict with a decision (e.g. D-10) or an accessibility requirement, the decision or accessibility wins and the deviation is written down. Where mockup files disagree on a shared value, `tokens.md` wins. **Sample figures in the mockups are illustrative; the rules win:** Today's "expected end around 16:45" doesn't follow the formula (≈ 16:32), the running project timer (1:24) exceeds the unbooked time (0:47), the donut is coloured by rank instead of project colour (D-18).

## Not built, although the mockups show it

| Element | Decision |
|---|---|
| Search field in the top bar | Not built (D-16); slot stays free |
| Month tab in the Day \| Week switch | Not built (D-17); month lives in Balance & summary |
| Anything else without a feature ID in `../features.md` | Not built; raise a change request |
