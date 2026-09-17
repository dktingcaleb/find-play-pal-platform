# Find Playpal — Claude Project Instructions

This repository is the source of truth for Find Playpal product rules, design rules, prototype structure, and AI-assisted design workflow.

Claude must follow this file before making changes.

---

# 1. Project

Find Playpal is a social entertainment and Playpal companion platform.

Core product areas include:

- Playpal services and orders
- Party Rooms
- Moments / social interaction
- Chat and notifications
- Tasks and progression
- Virtual Character
- Squad
- Guild
- Wallet / virtual economy
- recommendations and discovery

The current repository contains both:

```text
Product / Design Masters
+
Executable Design Prototype
```

---

# 2. Start Here

Before working on any task, first identify the relevant page/system.

Then read the relevant documents under:

```text
docs/
```

For design work, always read at minimum:

```text
12-DESIGN-FOUNDATION.md
13-COMPONENT-SYSTEM.md
14-PAGE-MAP.md
15-AI-DESIGN-RULES.md
16-DESIGN-DECISIONS.md
```

Then read the relevant Product / Feature Master.

Examples:

```text
Party Room
→ 08-PARTY-ROOM-SYSTEM.md

Tasks
→ 06-TASK-SYSTEM.md

Virtual Character
→ 10-VIRTUAL-CHARACTER-SYSTEM.md

Order / Quick Order
→ 11-ORDER-MATCHING-DISPATCH-SYSTEM.md

Recommendation / Notification
→ 09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

# 3. Source Priority

When sources disagree, use this order:

```text
1. Product / Feature Master
2. Responsive Rules
3. Design Foundation
4. Component System
5. Page Map
6. Approved Page Design / Design Decision
7. Current Prototype
8. Figma Reference
9. Archive / Historical Source
```

Higher priority wins.

Do not let Figma or prototype behavior override a newer Master.

---

# 4. Current Prototype Baseline

Current executable prototype:

```text
prototype/index.html
prototype/assets/css/tokens.css
prototype/assets/css/shared.css
prototype/assets/js/shared.js
```

The old single-file prototype is no longer the working baseline.

Do not recreate or restore it.

---

# 5. Prototype Role

The prototype is a:

```text
Design + Interaction Baseline
```

It is useful for:

- current UI reference,
- navigation,
- interaction behavior,
- screen structure.

But:

```text
Prototype ≠ Product Master
```

If prototype behavior conflicts with current product rules:

```text
flag the conflict
and follow the Master
```

---

# 6. Figma Role

Figma is reference material.

Do not assume:

```text
Figma = latest approved design
```

A Figma design must be explicitly approved before replacing the current baseline.

---

# 7. Default Design Workflow

For page redesign or UI improvement:

```text
1. Read relevant docs
2. Inspect current page
3. Audit current problems
4. Explain what should stay
5. Propose what should change
6. List shared components affected
7. Explain responsive impact
8. Wait for user approval
9. Implement
10. Verify
```

Default rule:

```text
Propose first.
Implement after approval.
```

---

# 8. Scope Control

Only change what the user requested.

If asked to change one page:

```text
change that page
+
only explicitly approved shared dependencies
```

Do not opportunistically modify:

- unrelated pages,
- global navigation,
- global tokens,
- other components,
- product logic.

---

# 9. Shared Component Changes

Before modifying a shared component, state:

```text
Component:
Requested change:
Reason:
Affected variants:
Affected pages:
Visual impact:
Behavior impact:
```

Do not change a global component to fix one isolated page without approval.

---

# 10. Design Tokens

Use:

```text
prototype/assets/css/tokens.css
```

Priority:

```text
Existing semantic token
→ Existing primitive token
→ Existing approved component value
→ Propose new token
```

Do not introduce near-duplicate visual values without reason.

Do not silently normalize:

```text
13px → 14px
7px → 8px
20px → 22px
one gray → similar gray
```

unless redesign is explicitly approved.

---

# 11. Extraction Rule

Structural work must follow:

```text
Extraction ≠ Redesign
```

When:

- splitting pages,
- extracting CSS,
- extracting JavaScript,
- extracting components,
- moving values into tokens,

preserve:

- visual output,
- behavior,
- navigation,
- product logic.

---

# 12. Responsive Rules

Follow:

```text
04-RESPONSIVE-DESIGN-RULES.md
```

Ranges:

```text
Mobile: 0–767px
Tablet: 768–1023px
Desktop: 1024px+
```

Primary design frames:

```text
Mobile: 390 × 844
Tablet: 768 × 1024
Desktop: 1440 × 900
```

Use mobile-first responsive design.

Do not target specific device models unless explicitly requested.

---

# 13. Current Main Navigation

Current primary destinations:

```text
Home
Party
Moments
Chat
User
```

Do not change this structure without explicit approval.

---

# 14. Page Map

Before changing a screen, check:

```text
14-PAGE-MAP.md
```

Current prototype contains:

```text
35 screens
```

Existing `screen-*` IDs should remain stable during extraction unless a dedicated refactor is approved.

---

# 15. High-Risk Screens

These screens require extra Product Master checking:

```text
Party Room
Party Setup
Virtual Character
Confirm Order
Quick Order
Tasks
Noble
Level / Rank
Personalization
```

Do not treat their current prototype content as authoritative product logic.

---

# 16. Approved First-Wave Shared Components

Current first-wave extraction targets:

```text
PageShell
PageHeader
BackButton
AppShell
BottomNavigation
QuantityStepper
Overlay
BottomSheet
```

See:

```text
13-COMPONENT-SYSTEM.md
```

---

# 17. Do Not Create Mega Components

Keep feature components separate when business logic differs.

Examples:

```text
PlaypalCard
OrderCard
PartyRoomCard
TaskCard
GuildCard
SquadCard
SkillCard
CareerCard
NobleCard
ActivityCard
```

They may share primitives, but do not merge them into one universal business component.

---

# 18. Product Uncertainty

Respect status labels:

```text
APPROVED
PROPOSED
TBD
REVIEW
CONFLICT
LEGACY
SUPERSEDED
```

If a Master says:

```text
TBD
REVIEW
CONFLICT
```

do not silently invent a final answer.

State the issue and ask for a decision when needed.

---

# 19. Archive / Legacy

Do not restore content labeled:

```text
Archive
Legacy
Removed
```

unless explicitly approved.

Do not mix archive rules with current rules.

---

# 20. No Silent Product Invention

Do not invent:

- financial rules,
- order cancellation behavior,
- refund timing,
- Royal costs,
- Rank formulas,
- HP formulas,
- Guild lifecycle,
- Party Room timing,
- recommendation scores,
- skill values,
- payment behavior.

Use the Product Master.

If not defined:

```text
mark TBD / REVIEW
```

---

# 21. Prototype Technology

Keep the prototype simple.

Do not introduce without explicit approval:

```text
React
Vue
Tailwind
Bootstrap
new router
new build system
```

Production implementation may use another stack chosen by the programmer.

The prototype is not required to match the production framework.

---

# 22. Code Changes

Prefer:

```text
small
scoped
reviewable
traceable
```

changes.

Do not rewrite:

```text
entire index.html
entire shared.css
entire shared.js
```

for a localized task.

---

# 23. File Changes

Whenever modifying the repository, report:

```text
Files added:
Files changed:
Files removed:
```

Do not silently delete files.

---

# 24. Accessibility

When implementing approved UI, prefer:

```text
button → actions
link → navigation
input/select/textarea → form controls
```

Accessibility improvements are welcome when they do not alter product/design behavior unexpectedly.

---

# 25. Design Decisions

Material shared design decisions should be recorded in:

```text
16-DESIGN-DECISIONS.md
```

Do not create duplicate versioned Master files.

Update the existing Master and let Git preserve history.

---

# 26. Commit Scope

Prefer focused commit messages such as:

```text
Improve Quick Order mobile layout
Extract shared page header
Add Party Room bottom sheet
Fix tablet spacing
```

Avoid:

```text
Update everything
Various fixes
Big redesign
```

---

# 27. References Directory

```text
references/
```

contains non-authoritative reference material only. It may include historical source files, Figma references, screenshots, or other supporting material.

Content under `references/` must not override Product Masters, approved design docs, or the current approved prototype baseline.

---

# 28. Final Operating Rule

```text
Read first.
Understand the product rule.
Stay within scope.
Reuse approved components.
Use approved tokens.
Propose before redesign.
Implement only what is approved.
Verify before finishing.
```
