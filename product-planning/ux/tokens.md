# Design tokens

**Font:** Inter (400, 500, 600, 700), served by the application (no external font service); tabular figures for all times and numbers. **Icons:** 20 px stroke icons, stroke 2, round caps (e.g. Material Symbols Outlined), self-hosted.

**Theme:** accent palette generated from `#0F6B67` (teal). Light, dark, a **high-contrast** variant (system "more contrast") and support for forced colours.

| Token | Light | Dark | Use |
|---|---|---|---|
| bg | `#F3F5F8` | `#0E1416` | page background |
| surface | `#FFFFFF` | `#172024` | side menu, top bar, cards |
| subtle | `#F3F5F8` | `#1F2A2F` | table footers, segmented track |
| field | `#FFFFFF` | `#11191C` | input background |
| border | `#E3E7ED` | `#2A363C` | card and divider lines |
| borderStrong | `#C9D1DB` | `#3D4B52` | input and outlined button borders |
| ink | `#17212F` | `#E6EDEF` | main text |
| ink2 | `#3C4757` | `#C2CDD1` | secondary text, inactive menu items |
| muted | `#5A6575` | `#93A1A7` | labels, captions, axis text |
| accent | `#0F6B67` | `#4FB8B0` | primary buttons, active states, worked time |
| onAccent | `#FFFFFF` | `#04211F` | text on accent |
| accentText / link | `#0F5F5C` | `#7FD4CC` | links, accent figures |
| accentSoft | `#DCEBEA` | `#183C3A` | active menu item, avatar |
| accentInk | `#0B4F4C` | `#A8E6DF` | text on accentSoft |
| hero | `#10302F` | `#123A37` (border `#1E5552`) | running-day panel; text white, secondary `#BFE3DF`, highlight `#5EEAD4` |
| track | `#E6ECEF` | `#26333A` | progress and bar tracks |
| todayColumn | `#EAF4F3` | `#15302E` | today column in the timesheet |
| warnBg / warnBorder | `#FFF7F2` / `#F5D3BF` | `#2A1C14` / `#5A3520` | warning cards, chips, tiles |
| warnInk / warnStrong | `#7C2D12` / `#9A3412` | `#FDD5B8` / `#FB923C` | warning text / emphasis and warning bars |
| okBg / okBorder / okInk | `#E3F4EA` / `#BFE3CB` / `#166534` | `#12301F` / `#1F4D33` / `#86EFAC` | success chips and checkmarks |
| errBg / errBorder | `#FEF2F2` / `#F5C2C2` | `#2A1416` / `#5C2A2E` | "over budget" chip (D-21), error states |
| errInk / errStrong | `#991B1B` / `#B91C1C` | `#FECACA` / `#F87171` | error text / emphasis; contrast on errBg 7.6 / 5.9 (light), 12.0 / 6.3 (dark) |
| booked (chart) | `#93B4F5` | `#3E63B0` | booked bars next to worked bars |
| project palette 1–4 | `#2563EB` `#7C3AED` `#0F766E` `#B45309` | `#60A5FA` `#A78BFA` `#2DD4BF` `#F59E0B` | project colours in timeline, timesheet, project timer **and donut** (D-18) |
| partialBar / missingBar | `#8CCFC8` / `#F5C9B3` | `#2E7D77` / `#7A3B1E` | Today mini bars: today (partial) / day with missing time |
| workBand / breakBand | `#CDE7E4` / hatch `#F7D7C4`–`#FBE8DC` | `#1F4542` / hatch `#5A3520`–`#46291A` | work block / break (45° hatch, 6 px stripes) in the day timeline |
| todayBorder | `#9CCFC9` | `#2E6B66` | input border in the today column |
| weekendCol / weekendBorder | `#F3F5F8` / `#D5DBE3` | `#131B1E` / `#34424A` | weekend columns (dashed inputs) |
| donut 1–6 | `#1E3A8A` `#3B82F6` `#0D9488` `#EA8A3A` `#A855F7` `#CBD2DC` | `#93C5FD` `#3B82F6` `#2DD4BF` `#F59E0B` `#C084FC` `#4B5563` | **as drawn only** – the donut uses each project's colour (D-18); only "Other" keeps donut 6 (neutral grey) |

Mockup disagreements are resolved by this table (`Week` uses subtle `#F6F8FA` / `#1B252A` and okInk `#15803D` – use the table). The err* tokens are not drawn; they follow the warning pattern and meet 4.5:1.

Warning, success, error, hero and chart colours are usually not standard component-library roles: define them once as named tokens next to the theme; screens use tokens only, never literal colours.

**Type scale:** page title 24/700; section heading 20/700; card title 15/600; body 14/400; caption 13; overline 11/600 upper case; figures 26–30/700; hero timer 64/700.

**Shape and spacing:** 4/8 px grid; radius card 18, tile 16, inputs and menu items 10, pills and buttons fully rounded (22 px on 44 px buttons); touch targets ≥ 44 px (icon buttons 40 px inside a 44 px row).
