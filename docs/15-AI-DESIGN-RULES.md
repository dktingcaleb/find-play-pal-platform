# Find Playpal — AI Design Rules

**Status:** APPROVED FOUNDATION / Current Baseline  
**Version:** 0.1  
**Applies To:** Claude, ChatGPT, Gemini, and any other AI coding/design assistant working on Find Playpal  
**Repository Role:** Mandatory AI workflow and scope-control rules

---

# 1. Purpose

This document defines how an AI assistant must work inside the Find Playpal design repository.

The goal is to allow AI to help with:

- UI audit,
- design proposals,
- page redesign,
- responsive design,
- component reuse,
- prototype implementation,
- safe code refactoring,

without allowing AI to:

- silently change product logic,
- redesign unrelated pages,
- invent new global styles,
- override approved Masters,
- merge unrelated components,
- or treat historical prototype/Figma as the current source of truth.

---

# 2. Core Rule

```text
AI proposes first.
User approves.
AI implements second.
```

Unless the user explicitly says to implement immediately, design work must follow:

```text
Inspect
→ Audit
→ Propose
→ User Approval
→ Implement
→ Verify
```

Do not skip directly from:

```text
"Please improve this page"
```

to:

```text
massive code rewrite
```

---

# 3. Source of Truth Priority

When sources disagree, use this priority:

```text
1. Product Master / Feature Master
2. Approved Responsive Rules
3. Approved Design Foundation
4. Approved Component System
5. Approved Page Map
6. Approved Page Design / Design Decision
7. Current Prototype
8. Figma Reference
9. Historical Source / Archive
```

Higher-priority rules win.

---

# 4. Product Masters

Current product documentation is stored under:

```text
docs/
```

Examples include:

```text
01-PRODUCT-MASTER.md
02-TALENT-SERVICE-GAME-CATALOG.md
03-SHARED-USER-PROGRESSION-SYSTEM.md
04-RESPONSIVE-DESIGN-RULES.md
05-TRUST-SAFETY-ACCOUNT-SUPPORT-SYSTEM.md
06-TASK-SYSTEM.md
07-SQUAD-SYSTEM.md
08-PARTY-ROOM-SYSTEM.md
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
10-VIRTUAL-CHARACTER-SYSTEM.md
11-ORDER-MATCHING-DISPATCH-SYSTEM.md
12-DESIGN-FOUNDATION.md
13-COMPONENT-SYSTEM.md
14-PAGE-MAP.md
```

AI must read the relevant Master before changing a feature page.

---

# 5. Prototype Role

Current prototype:

```text
prototype/
```

is the current executable design baseline.

It is useful for:

- visual reference,
- interaction reference,
- navigation reference,
- current implementation structure.

However:

```text
Prototype
≠ Product Master
```

If prototype behavior conflicts with a current Master:

```text
Master wins.
```

AI must flag the difference before implementation.

---

# 6. Figma Role

Figma is a design reference.

It may contain:

- older design,
- current design,
- experimental design,
- incomplete design.

Therefore:

```text
Figma
≠ automatic source of truth
```

AI must not copy Figma over the prototype merely because it exists.

Before using Figma as the implementation target, confirm that the relevant design is:

```text
Approved
```

or explicitly approved by the user during the current task.

---

# 7. Historical / Archive Material

Some source documents contain:

```text
Archive
Legacy
Removed
Version Later
Old Rule
```

AI must preserve those labels.

AI must not:

- reactivate removed logic,
- mix archive rules into current rules,
- select an older number because it looks more complete,
- silently reconcile old/current conflicts.

When uncertain:

```text
Flag:
REVIEW
CONFLICT
TBD
LEGACY
```

---

# 8. Task Scope Rule

Before editing, AI must identify:

```text
Requested page / component
Requested change
Files likely affected
Shared components affected
Global tokens affected
Product rules involved
```

Default rule:

```text
Only change what the user asked for.
```

Do not modify unrelated screens.

---

# 9. One-Page Rule

If the user asks to redesign one page:

AI must not automatically modify:

- global navigation,
- other pages,
- global colors,
- typography system,
- shared component behavior,
- product logic outside that page.

If a shared/global change is necessary:

```text
Propose it first
+
state affected pages
+
wait for approval
```

---

# 10. Shared Component Rule

Before creating a new UI structure, check:

```text
13-COMPONENT-SYSTEM.md
```

AI must reuse an approved shared component when responsibilities genuinely match.

AI must not:

- duplicate an existing shared component,
- create near-identical local versions,
- merge feature components only because they look similar.

---

# 11. Shared Component Change Rule

Before changing a shared component, AI must state:

```text
Component:
Requested change:
Reason:
Affected variants:
Known affected pages:
Visual impact:
Behavior impact:
```

Then wait for approval unless the user already explicitly authorized the global change.

---

# 12. Feature Component Rule

Feature-specific components must remain independent when they contain different product logic.

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
```

Do not create one mega-component with dozens of unrelated condition flags.

---

# 13. Design Token Rule

Use:

```text
prototype/assets/css/tokens.css
```

Priority:

```text
Existing Semantic Token
→ Existing Primitive Token
→ Existing approved component value
→ Propose new token
```

AI must not create a new near-duplicate value without reason.

---

# 14. Global Token Change Rule

Before changing a global token:

```text
Token:
Current value:
Proposed value:
Reason:
Known affected pages/components:
```

A problem on one page should not normally be solved by changing a global token.

---

# 15. No Silent Visual Normalization

AI must not silently change:

- 13px → 14px
- 7px → 8px
- 20px radius → 999px
- one gray → a similar gray
- one coral → another coral

merely to make the code “cleaner”.

Refactoring must preserve visual output unless redesign is explicitly approved.

---

# 16. Extraction Rule

During structural extraction:

```text
Extraction
≠ Redesign
```

If the task is:

- move CSS,
- move JavaScript,
- split a page,
- extract a component,
- replace hard-coded value with identical token,

then visual and behavior output must remain unchanged.

---

# 17. Responsive Rule

All new design work must follow:

```text
04-RESPONSIVE-DESIGN-RULES.md
```

Current ranges:

```text
Mobile: 0–767px
Tablet: 768–1023px
Desktop: 1024px+
```

Primary reference frames:

```text
Mobile: 390 × 844
Tablet: 768 × 1024
Desktop: 1440 × 900
```

AI must not target specific phone models unless explicitly requested.

---

# 18. Mobile-First Rule

New components/pages should be designed mobile-first.

Then adapt to:

```text
Tablet
Desktop
```

Avoid building:

```text
three unrelated page designs
```

for mobile/tablet/desktop.

Use one information architecture unless a structural change is genuinely required.

---

# 19. Page Map Rule

Before changing a page, read:

```text
14-PAGE-MAP.md
```

AI must identify:

```text
screen ID
module
status
entry point
exit / next pages
related Master
```

Do not rename current `screen-*` IDs during extraction unless renaming is part of a dedicated approved refactor.

---

# 20. High-Risk Pages

The following pages require extra product-rule checks before implementation:

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

Reason:

Their product rules have evolved significantly after the original prototype.

---

# 21. Product Logic Rule

AI must not invent product behavior.

Examples:

Do not invent:

- order cancellation behavior,
- Rank formulas,
- Royal activation cost,
- HP formulas,
- Guild lifecycle,
- Party Room timing,
- recommendation scoring,
- skill damage values,
- payment behavior.

If the relevant Master says:

```text
TBD
REVIEW
CONFLICT
```

AI must preserve that uncertainty.

---

# 22. Conflict Rule

When two current sources conflict:

```text
Do not choose silently.
```

AI must state:

```text
Conflict found:
Source A says:
Source B says:
Impact:
Decision needed:
```

Then design around the unresolved state if possible.

---

# 23. Missing Information Rule

If required information is missing:

AI should:

```text
Use neutral placeholder behavior
or
Ask for decision
```

depending on whether implementation can safely continue.

Do not create final business rules from assumptions.

---

# 24. Design Proposal Format

Before redesigning a page, AI should produce:

```text
Current page:
Product goal:
Problems found:
What should stay:
What should change:
Shared components affected:
New component needed:
Responsive impact:
Product-rule impact:
Proposed design direction:
```

Keep the proposal scoped to the requested page.

---

# 25. Implementation Approval

AI should only implement after:

```text
User explicitly approves
```

the proposal.

Approval may be simple, such as:

```text
"好"
"可以"
"继续"
"就这样做"
```

when the previous assistant message clearly described the proposed design.

---

# 26. Implementation Rule

After approval:

AI should:

1. modify the smallest reasonable set of files,
2. reuse existing tokens,
3. reuse approved components,
4. preserve unrelated UI,
5. preserve product logic,
6. preserve navigation,
7. preserve responsive behavior unless intentionally changed,
8. avoid opportunistic refactoring.

---

# 27. Verification Rule

After implementation, verify:

```text
Requested change works
Unrelated pages unchanged
Navigation still works
Responsive behavior still works
Shared component impact expected
No accidental product-rule changes
No legacy rule restored
```

If possible, compare before/after at relevant widths.

---

# 28. Code Quality Rule

AI may improve implementation quality when it does not change design/product behavior.

Examples:

Allowed:

```text
extract helper
remove exact duplicate code
use semantic HTML
add aria labels
split a safe component
rename internal variable
```

But:

```text
code cleanup
≠ permission to change UI
```

---

# 29. Semantic HTML Rule

Prefer:

```text
button for actions
a/link for navigation
input/select/textarea for form controls
```

The current prototype contains many clickable `div` elements.

These can be improved gradually.

Do not combine semantic refactor with unrelated redesign.

---

# 30. Accessibility Rule

When implementing approved UI, support where practical:

- keyboard navigation,
- focus visibility,
- readable labels,
- accessible names,
- sufficient hit areas,
- semantic controls.

Accessibility improvements should preserve the intended visual design unless a visible change is required and approved.

---

# 31. Do Not Rewrite Everything

AI must not respond to a localized design task by rewriting:

```text
entire index.html
entire shared.css
entire shared.js
```

unless the task explicitly requires it.

Prefer small, traceable changes.

---

# 32. Do Not Replace Working Architecture Without Approval

The current prototype is intentionally simple.

AI must not introduce:

- React,
- Vue,
- Tailwind,
- Bootstrap,
- a new build system,
- a CSS framework,
- another router,

into the prototype unless explicitly approved.

Production technology choice belongs to the production-development decision, not automatic AI preference.

---

# 33. Prototype vs Production

The prototype is:

```text
design / interaction reference
```

The production application may use another technical stack.

AI should preserve:

- component responsibility,
- product flow,
- visual intent,
- responsive behavior,

without insisting that production copy the prototype's exact file organization.

---

# 34. File Modification Rule

When modifying the repo, clearly state:

```text
Files added:
Files changed:
Files removed:
```

Do not silently delete files.

---

# 35. Removal Rule

Before deleting:

- page,
- component,
- token,
- route,
- feature,
- CSS selector,
- JavaScript function,

confirm that it is no longer referenced or explicitly approved for removal.

---

# 36. Design Decision Rule

Any material decision that changes the shared design direction should be recorded later in:

```text
16-DESIGN-DECISIONS.md
```

Examples:

- changing primary action color,
- changing main navigation structure,
- changing card style globally,
- replacing a component pattern,
- approving a new page layout direction.

---

# 37. Approved vs Proposed

AI must distinguish:

```text
APPROVED
PROPOSED
TBD
REVIEW
CONFLICT
LEGACY
```

Do not write proposed ideas as if they are approved current behavior.

---

# 38. No Hallucinated Approval

AI must not say:

```text
"This was already approved"
```

unless the repo/current conversation actually supports that.

If uncertain:

```text
Treat as not yet approved.
```

---

# 39. Design Review Before Coding

For a page redesign request, default workflow:

```text
Step 1 — Read relevant docs
Step 2 — Inspect current page
Step 3 — Audit problems
Step 4 — Propose design
Step 5 — User approval
Step 6 — Implement
Step 7 — Verify
Step 8 — Commit
```

---

# 40. Example AI Workflow

User:

```text
Improve the Quick Order page.
```

AI should first read:

```text
11-ORDER-MATCHING-DISPATCH-SYSTEM.md
12-DESIGN-FOUNDATION.md
13-COMPONENT-SYSTEM.md
14-PAGE-MAP.md
```

Then inspect:

```text
screen-quick-order
```

Then respond with:

```text
Current issues
What should stay
What should change
Affected components
Responsive impact
Proposed design
```

Only after approval should code change.

---

# 41. Example of Wrong Behavior

Wrong:

```text
User asks to improve Quick Order.

AI:
- changes Quick Order
- changes Home
- changes Party
- changes global button color
- changes BottomNavigation
- rewrites Order logic
- replaces CSS architecture
```

This is prohibited unless explicitly approved.

---

# 42. Example of Correct Behavior

Correct:

```text
User asks to improve Quick Order.

AI:
1. reads relevant Masters,
2. audits only Quick Order,
3. identifies shared components,
4. proposes changes,
5. waits for approval,
6. edits only Quick Order + approved shared parts,
7. verifies Home/Party are unaffected.
```

---

# 43. Commit Scope Rule

Prefer one commit per meaningful approved change.

Examples:

```text
Refactor shared page header
Improve Quick Order mobile layout
Add Party Room member sheet component
Fix Tablet responsive spacing
```

Avoid commits such as:

```text
Update everything
Big redesign
Various fixes
```

---

# 44. Working With User's Programmer

The repository is intended to support both:

```text
AI design work
+
human production development
```

AI must therefore leave changes:

- understandable,
- traceable,
- scoped,
- documented,
- easy to review.

Avoid clever architecture that makes human maintenance harder.

---

# 45. Rule for New Pages

When adding a new page:

1. confirm its Product Master,
2. add/update Page Map,
3. identify existing shared components,
4. use Design Tokens,
5. follow responsive rules,
6. define only necessary new feature components,
7. avoid introducing new global patterns without approval.

---

# 46. Rule for New Components

Before adding a new shared component:

```text
Does an approved component already cover this responsibility?
```

If yes:

```text
reuse it
```

If no:

AI should explain:

```text
Why existing components are insufficient
Proposed component responsibility
Expected pages using it
Variants needed
```

before making it global.

---

# 47. Rule for New Tokens

Before adding a new global token:

```text
Check tokens.css
```

If no suitable value exists:

AI should identify:

```text
Proposed token
Value
Meaning
Pages/components requiring it
Why an existing token cannot be reused
```

---

# 48. Temporary Page-Specific Values

A one-off page-specific value may remain local if:

- it is genuinely unique,
- not part of a repeated visual pattern,
- not suitable as a global token.

Do not globalize every value.

---

# 49. Current Prototype Baseline

Current baseline files:

```text
prototype/index.html
prototype/assets/css/tokens.css
prototype/assets/css/shared.css
prototype/assets/js/shared.js
```

These files represent the current extracted prototype architecture.

---

# 50. Final AI Operating Principle

```text
Read first.
Understand scope.
Preserve product rules.
Reuse the system.
Propose before redesign.
Implement only what is approved.
Verify before finishing.
```

---

**Document Status: APPROVED FOUNDATION — v0.1**
