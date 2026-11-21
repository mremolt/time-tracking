# Generated PDFs (binding for every PDF, D-22)

Layout B "Report": the light web design on paper. Mockups: `PdfRecord.dc.html` (monthly working-time record, Oct 2026) and `PdfOverview.dc.html` (company overview, Oct 2026) – both fit on one page; longer PDFs follow the following-page rules. Sample figures are illustrative. One shared PDF template is built in step 12; **no PDF gets its own design**.

## Scope

| PDF | Feature | Notes |
|---|---|---|
| User report incl. **monthly working-time record** | F-03, F-05 | "Personal data – confidential" |
| Project report | F-02, F-05 | Per-person rows only for roles allowed to see them (D-10) |
| Dashboard / Management overview | F-01, F-14, D-19 | Sums only: no person's name anywhere |
| Any other PDF (e.g. own-data copy H-03) | F-05, H-03 | Same layout |
| Payroll export | F-13 | Format agreed in 0.2; if it is a PDF, it uses this layout |

## Page and structure

- **A4 portrait**; landscape only when a table cannot fit (e.g. project report with many columns). Side margins 40 px (≈ 10.5 mm at 96 px/in).
- **Always the light tokens** on white, whatever the user's theme. No dark PDF.
- **Header band (first page)**, full width in `accentSoft`: product mark (34 px rounded square in `accent`, clock icon), product name 15/600, company name below; on the right a white pill with the document type in `accentInk` ("Monthly working-time record"; aggregates: "Sums only, no individual person is shown"); the document title as the only `h1` (24/700, −0.02em) – period and subject, e.g. "October 2026 · Anna Berger" or "Company overview"; below it a context line in `accentInk` with every applied filter and fact: personnel no., team, federal state, weekly target, period (person); period, teams, number of people, "data as of" (aggregates).
- **Following pages:** compact running head (24 px mark, product name, title, period, 1 px `border` line). Table header row repeated on every page a table continues on; a row is never split.
- **Figure tiles** below the header: 4–5 tiles (16 px radius, 1 px `border`, label 12/500 `muted`, value 22/700, one sub-line). Warning tile `warnBg`/`warnBorder`/`warnInk`; highlighted balance tile `accentSoft`/`accentInk`.
- **Cards:** one per section (1 px `border`, 18 px radius, no shadow), 15/600 `h2` title; section order as on the matching screen.
- **Tables** inside a card: header row on `subtle` (600, `ink2`), 1 px `border` row lines; numbers right-aligned, tabular; total row on `subtle`, 700; weekend rows on `subtle` with `muted` text and "Weekend" (or the holiday's name). Absences, rule findings (H-06), budget states as **status chips** with text + icon. Absence days are shown credited with the daily target (B-15; per type as decided in 0.1).
- **Record status line** at the end: locked – "Period locked on {date} by backoffice; later changes are in the audit log."; open, as warning text – "Period not locked – figures can still change."
- **Footer on every page** (12 px, `muted`, 1 px `border` above): left lock icon + "Personal data – confidential" (per-person data) or "Sums only – no person shown" (aggregates); centre "Generated {date}, {time} · Time Tracking"; right "Page {n} of {total}".
- **Type:** Inter 400–700 embedded; nothing below 12 px (9 pt); body 12 px, line height 1.45; times `h:mm`; dates and numbers in the generating user's language.
- **Content:** exactly the data the screen/report shows for that role with the same filters (D-10); plausible values only; balances D-20, thresholds D-21, project colours D-18.

## Charts (readable without colour)

| Chart | In the PDF |
|---|---|
| Grouped bars (hours per week) | worked = `accent`, booked = `booked` **with 1 px outline `#3E63B0`**, target as dashed `ink` line per group; value label on each bar; week number and date range below |
| Hours by project (donut on screen) | **Labelled bar list**, sorted by hours: colour dot + code, bar in project colour on `track`, hours; total row. No donut |
| Share of booked time (stacked bar on screen) | **Small labelled bars**, one cell per project with code, hours, own bar. No stacked bar |
| Completeness by team, budget usage | Bars on `track`; **warning bars hatched** (45°, `warnStrong` 3 px / `missingBar` 3 px stripes), always next to their text ("84 % · below 90 %", "93 % · over 80 %") |
| "Other" | `#7A8494` (not `#CBD2DC`, too faint on paper) |

Every coloured mark sits in the same row/cell as its label and value – no legend matched by colour. Every chart prints its values and has a text alternative.

## Accessibility

- **Tagged PDF/UA-1** (ISO 14289-1): language (`de`/`en`) and title (the `h1`) in metadata, title shown in the viewer's title bar; reading order header → tiles → sections → footer; one `H1`, an `H2` per card; real `Table` with `TH` (`scope` column) and row headers for the first column (date, project, team); each chart a `Figure` with alt text naming all values ("Hours per week, October 2026. Week 40: worked 172, booked 152, target 192 …"); decoration as artifact (header band, lines, colour dots, bars repeating a printed value, running head, footer); real text with embedded fonts and correct Unicode mapping; bookmarks per `H2` when > 1 page.
- **Contrast, in colour and greyscale:** text ≥ 4.5:1; meaningful graphics ≥ 3:1; things to tell apart (worked/booked, warning/normal) differ in lightness or texture, not hue. Checked for the approved layout: text ≥ 5.4:1, worked vs booked 3.9:1; the four project colours become nearly the same grey (1.0–1.3:1) – hence direct labelling.
- Never colour alone: status = text + icon; dots and bars have their code or value next to them.
- **Acceptance per template:** PDF/UA validator without errors; screen-reader spot check (title, headings, one table, one chart); greyscale print fully readable; side-by-side check against the mockups.

## Shared PDF building blocks (step 12)

Page frame (A4, margins, header band, running head, footer with confidentiality label, generation time, page numbers) · figure tile row (normal / warning / highlighted) · table card (repeated header, total row, weekend and absence rows, status chips) · charts (grouped bars with target, labelled bar list, small labelled bars, hatched warning bar – each with alt text) · record status line · tags and metadata (language, title, structure, artifacts, bookmarks).

## Tooling requirements (for the PDF library choice)

Server-side template; must produce tagged PDF/UA-1 (language, title, structure tags, real tables, chart alt text, artifacts, bookmarks); embeds Inter; draws charts as vector graphics. Check this before choosing a PDF library.
