# Agent Notes

This folder contains the product planning documents (overview, feature catalog, decisions, roadmap, implementation plan, UX design). Start with `README.md`.

Before building or changing any screen, read `06-ux-design.md` and look at `mockups/approved-screens.pdf` (the approved screens, light and dark); take exact values from the `mockups/*.dc.html` sources (the light pages `Today`, `Week`, `Dashboard` hold both token sets). The design is binding (D-13); a screen is not done until it matches it in light and dark theme (Definition of Done, `05-implementation-plan.md` §5.2).

Before building or changing any generated PDF, read `06-ux-design.md` §6.9 and take exact values from `mockups/PdfRecord.dc.html` and `mockups/PdfOverview.dc.html`. Every PDF uses the one shared PDF template (D-22). A PDF is not done until it passes the PDF/UA validator and reads correctly as a greyscale print.
