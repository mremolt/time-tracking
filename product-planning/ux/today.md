# Today (employee start page)

Features B-03, B-07, B-10, B-13, B-14, B-18, H-06, I-08. Mockups: `Today.dc.html` / `TodayDark.dc.html`, approved-screens.pdf pages 1 and 4. Built across steps 4 (card 1), 5 (cards 1 timer strip, 3, 4), 8 (card 2), 9 (card 5).

3-column grid. Page title: localised greeting with the first name ("Good afternoon, Anna"); context line above it: the date.

1. **Running day (hero, spans 2 columns).** Dark teal panel (`hero`) in both themes:
   - status chip ("Started 08:02 · 1 break (0:30)")
   - large timer, 64/700, tabular figures; seconds in a lighter tint
   - "worked today · target 8:00", progress bar, "2:13 to go · expected end around 16:45" (expected end = now + (target − worked) + break still required by the rules). Until the target exists (step 7) show worked time only.
   - buttons Take a break (white, filled) and End work day (outlined)
   - project-timer strip: project colour dot, "CRM-REL · CRM Relaunch / Project timer · Consulting", running time, Stop & book
   - when no day is running: a Start work day button
2. **This week:** ring chart worked vs. target; legend (worked, booked, not booked); mini bar per weekday (complete = `accent`, today = `partialBar`, missing = `missingBar`, weekend = empty track); overtime balance; "Open week" link.
3. **Today's timeline (spans 2 columns):** band 07:00–19:00 with work blocks (`workBand`), break (hatched `breakBand`), project blocks in project colours, a "now" marker. "Edit working times" link top right opens the Day page's "Record a working day" dialog for today. Below: table of today's project entries (colour dot, code and name; activity; note; time; edit icon button); footer "Booked 5:00 of 5:47 worked · 0:47 not yet booked".
4. **Quick booking:** favourite chips (★ project · activity), project and activity selects, duration pre-filled with the unbooked time, full-width "Book 0:47" button.
5. **Things to check:** warning notice card with rule findings and gaps for today and the current week, each with an action link (Fix, Book).

Today loads a fixed, small number of data sets (running day, project timer, day view, week summary, findings) – never one request per entry.
