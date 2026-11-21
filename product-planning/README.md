# Time Tracking – Product Planning

Feature analysis, decisions, binding UX design and implementation plan for an internal time tracking application (~100 employees). Technical specifications come from the technical team and the quality baseline; the only fixed choice is Spring Boot + Angular.

| File | Content |
|------|---------|
| [context.md](context.md) | Product, goals, roles, visibility, glossary, journeys, all decisions (D-01 – D-22), global rules, Definition of Done, success criteria |
| [plan.md](plan.md) | Implementation plan: principles, step list with dependencies, parallel work, what comes after |
| [steps/](steps/) | One self-contained file per step: features, backend part, screen part, done criteria |
| [ux/](ux/README.md) | Approved UX design (binding): shell, tokens, Today, Week, Dashboard, other screens, PDF layout; mockups in [mockups/](mockups/) |
| [features.md](features.md) | Index of all features with priority and step (MVP 62 · Phase 2 5 · Out of scope 18) |
| [background.md](background.md) | History and rationale: decision options, lessons from cycle 1, accepted risks R-01 – R-05, research sources |

The docs are structured so that a coding agent reads `context.md` plus one step file and the UX files it names (see [AGENTS.md](AGENTS.md)). Each fact lives in one place: feature descriptions in the step that builds them, decisions in `context.md`, design values in `ux/`. After changing these docs, run `node product-planning/scripts/lint-docs.mjs` (links, Read lines, feature and decision IDs, reading budget per step).

Priorities: **MVP** – first productive release · **Phase 2** – shortly after go-live · **Out of scope** – deliberately not built.
