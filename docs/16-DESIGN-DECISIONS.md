# Find Playpal — Design Decisions

**Status:** ACTIVE DECISION LOG  
**Version:** 0.1  
**Purpose:** Record material design, prototype, component, responsive, and AI-workflow decisions for Find Playpal.

> This file is a decision history, not a replacement for Product Masters.
>
> Detailed current rules live in the relevant Master documents.  
> This log explains **what was decided, why, and what it replaced or affects**.

---

# 1. Decision Status

Use:

```text
PROPOSED
APPROVED
REJECTED
SUPERSEDED
```

Only `APPROVED` decisions are current unless a later decision supersedes them.

---

# 2. Decision Format

Every new material decision should use:

```text
Decision ID:
Date:
Status:
Area:
Decision:
Reason:
Affected Files / Areas:
Supersedes:
Notes:
```

---

# DD-001 — GitHub Is the Design Source of Truth

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Repository / Workflow

## Decision

GitHub is the primary source of truth for:

- Product Masters
- Design Foundation
- Component System
- Page Map
- AI Design Rules
- Current Prototype
- Future Design Decisions

Figma and historical prototype/source documents remain references unless explicitly approved.

## Reason

The project is being continued by:

- the product owner,
- a programmer,
- AI design/coding assistants.

A single repository-based source of truth reduces ambiguity and prevents different people/AI agents from working from different versions.

## Affected

```text
docs/
prototype/
future CLAUDE.md
```

## Supersedes

Informal reliance on Figma or historical prototype as the automatic latest design.

---

# DD-002 — Product Rules Have Higher Priority Than Visual References

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Source Priority

## Decision

Priority order:

```text
Product / Feature Master
↓
Responsive Rules
↓
Design Foundation
↓
Component System
↓
Page Map
↓
Approved Page Design / Decision
↓
Prototype
↓
Figma
↓
Archive / Historical Source
```

## Reason

The visual prototype contains older product behavior in several areas.

Examples include:

- Party Room timing
- Virtual Character / Skill assumptions
- Order rules
- Task/progression behavior

Visual completeness must not override newer product decisions.

---

# DD-003 — Current Prototype Becomes the Executable Baseline

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Prototype

## Decision

The current executable baseline is:

```text
prototype/index.html
prototype/assets/css/tokens.css
prototype/assets/css/shared.css
prototype/assets/js/shared.js
```

The old single-file:

```text
prototype/playpal-prototype.html
```

is no longer the working baseline.

## Reason

The single-file prototype mixed:

```text
HTML
CSS
JavaScript
```

and was difficult for programmers and AI assistants to maintain safely.

## Supersedes

Single-file prototype workflow.

---

# DD-004 — Extraction Must Not Change Design

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Refactoring

## Decision

Structural extraction follows:

```text
Extraction
≠
Redesign
```

Moving CSS, JavaScript, tokens, pages, or components must preserve:

- visual output,
- interaction behavior,
- navigation,
- product logic,

unless the user separately approves a design change.

## Reason

Combining refactoring and redesign makes review difficult and increases the risk of accidental global changes.

---

# DD-005 — CSS and JavaScript Are Separated From HTML

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Prototype Architecture

## Decision

Prototype structure:

```text
prototype/
├── index.html
└── assets/
    ├── css/
    │   ├── tokens.css
    │   └── shared.css
    └── js/
        └── shared.js
```

## Reason

This makes the prototype easier to:

- maintain,
- audit,
- modify safely,
- review in Git,
- hand off to a programmer,
- use with AI assistants.

---

# DD-006 — Use a Token-Based Design Foundation

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Design System

## Decision

Use the hierarchy:

```text
Primitive Tokens
↓
Semantic Tokens
↓
Component Tokens
↓
Page / Component CSS
```

Current shared token source:

```text
prototype/assets/css/tokens.css
```

## Reason

The original prototype had many repeated hard-coded values.

Tokenization improves consistency without forcing immediate visual redesign.

---

# DD-007 — Existing Legacy CSS Variables Remain Compatible

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** CSS Migration

## Decision

Existing variables such as:

```text
--ink
--cream
--tan
--tan-soft
--dark-btn
--link
--muted
--toolbar-bg
```

remain available through compatibility aliases.

They should not be deleted until all dependent selectors are migrated and verified.

## Reason

A gradual migration is safer than a large one-time CSS rewrite.

---

# DD-008 — Do Not Normalize Visual Values Silently

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Design Tokens / Refactoring

## Decision

Do not silently change values such as:

```text
13px → 14px
7px → 8px
20px radius → 999px
one gray → a similar gray
one coral → another coral
```

merely for code cleanliness.

## Reason

Near-equivalent values may still represent intentional historical design differences.

Refactoring must preserve current visuals unless redesign is explicitly approved.

---

# DD-009 — Responsive System Uses Three Ranges

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Responsive Design

## Decision

Use:

```text
Mobile: 0–767px
Tablet: 768–1023px
Desktop: 1024px+
```

Primary design reference frames:

```text
Mobile: 390 × 844
Tablet: 768 × 1024
Desktop: 1440 × 900
```

## Reason

The old prototype used simulated fixed frames rather than a real responsive system.

These ranges provide a clear mobile-first foundation.

## Reference

```text
04-RESPONSIVE-DESIGN-RULES.md
```

---

# DD-010 — Mobile-First, Not Device-Model-First

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Responsive Design

## Decision

Design and implementation should be mobile-first and fluid.

Do not target specific device models as the primary responsive strategy.

## Reason

A viewport-based system is more maintainable and scales across devices.

---

# DD-011 — Main Product Navigation Has Five Destinations

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Navigation

## Decision

Current product-level primary destinations:

```text
Home
Party
Moments
Chat
User
```

## Reason

These are the current main structural destinations in the prototype and product architecture.

## Notes

Responsive presentation may change by breakpoint, but product information architecture remains five primary destinations unless separately revised.

---

# DD-012 — Shared Components Must Be Responsibility-Based

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Component System

## Decision

A component should be shared when it has:

```text
Repeated Structure
+
Repeated Behavior
+
Same Design Responsibility
```

Visual similarity alone is not enough.

## Reason

This prevents over-abstraction and mega-components.

---

# DD-013 — Do Not Merge Feature Cards Into One Universal Card

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Component System

## Decision

The following remain independent feature components:

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

They may reuse a low-level:

```text
CardSurface
```

but should not become one business component.

## Reason

They contain different:

- data,
- permissions,
- actions,
- states,
- product logic.

---

# DD-014 — First-Wave Shared Components

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Component Extraction

## Decision

First-wave extraction targets:

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

## Reason

These have:

- strong repetition,
- clear responsibility,
- relatively low business coupling.

## Reference

```text
13-COMPONENT-SYSTEM.md
```

---

# DD-015 — Page Map Is Required Before Splitting the Prototype

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Page Architecture

## Decision

Document all current prototype screens before physically separating them.

Current Page Map contains:

```text
35 screens
```

## Reason

Splitting a large prototype without a navigation map risks:

- lost routes,
- broken return behavior,
- duplicated pages,
- inconsistent ownership.

## Reference

```text
14-PAGE-MAP.md
```

---

# DD-016 — Current Screen IDs Stay Stable During Extraction

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Prototype Refactoring

## Decision

Existing:

```text
screen-*
```

IDs should remain stable while pages/components are being extracted.

## Reason

Current JavaScript directly references screen IDs.

Renaming and extraction should not happen simultaneously.

---

# DD-017 — High-Risk Pages Require Master Reconciliation

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Page Design

## Decision

The following pages must be checked against current Product Masters before production implementation or major redesign:

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

## Reason

These areas have materially changed after the original prototype was created.

---

# DD-018 — AI Must Propose Before Redesigning

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** AI Workflow

## Decision

Default workflow:

```text
Read
→ Inspect
→ Audit
→ Propose
→ User Approval
→ Implement
→ Verify
```

## Reason

The user remains the design/product approver.

AI should accelerate design work, not independently redefine the product.

---

# DD-019 — AI Must Work Within Requested Scope

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** AI Workflow

## Decision

If the user asks to modify one page:

```text
Only that page
+
explicitly approved shared dependencies
```

should change.

AI must not opportunistically modify unrelated pages or global systems.

---

# DD-020 — Global Component Changes Require Impact Disclosure

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** AI / Component Workflow

## Decision

Before changing a shared component, AI must state:

```text
Component
Requested change
Reason
Affected variants
Affected pages
Visual impact
Behavior impact
```

## Reason

A seemingly local component change may have global consequences.

---

# DD-021 — Global Token Changes Require Impact Disclosure

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** AI / Design Tokens

## Decision

Before changing a global token, AI must state:

```text
Token
Current value
Proposed value
Reason
Affected pages/components
```

## Reason

A one-page visual issue should not silently change the entire product.

---

# DD-022 — Prototype Technology Must Remain Simple Unless Approved

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Technical Architecture

## Decision

Do not automatically introduce:

```text
React
Vue
Tailwind
Bootstrap
new router
new build system
```

into the design prototype.

## Reason

The prototype is currently intended as a lightweight design/interaction baseline.

The production application may use a different technology stack chosen by the programmer.

---

# DD-023 — Prototype Components Are Design Contracts, Not Production Framework Requirements

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Handoff

## Decision

Component documentation defines:

```text
responsibility
behavior
visual intent
responsive behavior
```

It does not force the production programmer to use the prototype's exact HTML/file structure.

## Reason

The production application may use a different technical stack.

---

# DD-024 — Product Uncertainty Must Remain Explicit

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Product / AI Workflow

## Decision

Use explicit states:

```text
TBD
REVIEW
CONFLICT
LEGACY
PROPOSED
APPROVED
```

AI must not silently resolve unresolved product rules.

## Reason

Several systems currently contain intentional open decisions.

Examples include:

- Order cancellation/refund timing
- Rank model
- Royal activation costs
- HP behavior
- Guild lifecycle
- recommendation scoring.

---

# DD-025 — Git History Replaces Versioned Duplicate Master Files

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Documentation

## Decision

When a Master changes:

```text
Update the existing Master file
```

instead of creating:

```text
MASTER-v0.2.md
MASTER-final.md
MASTER-new.md
```

inside the repository.

## Reason

Git already provides version history.

Duplicate Masters create ambiguity for humans and AI.

---

# DD-026 — Audit/Proposal Files Are Not Automatically Master Docs

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Documentation

## Decision

Temporary files such as:

```text
Design Token Audit
Proposed Design Tokens
Component Audit
```

do not belong in the main `docs/` Master set unless explicitly promoted.

## Reason

Audit reports describe analysis; they should not be mistaken for approved current rules.

---

# DD-027 — Platform Rank Numeric Model: Interpretation A Approved

**Date:** 2026-09-17  
**Status:** APPROVED  
**Area:** Platform Rank / Shared User Progression System

## Decision

The numeric Platform Rank scale (1–100) referenced by `17-VISUAL-ASSET-MAP.md` and the named-tier Rank ladder are approved as:

```text
Platform Rank (1–100)
and
Named-Tier Rank Ladder
=
two representations of the SAME progression system
```

A user's current named tier **maps into** a corresponding position on the numeric 1–100 Rank scale. They are **not** two separate progression systems, and **not** two independent parallel layers.

The current Platform Rank range is also confirmed: minimum Rank 1, maximum Rank 100, with no Ranks above 100 and no current plan to extend beyond 100. Extending the range in the future would be a separate product decision.

This decision resolves that *relationship* (one system, not two) and the confirmed 1–100 range. It does **not** select a final tier ladder, and it does not define the exact tier-to-number mapping/allocation (whether one named tier corresponds to one Rank number, multiple Rank numbers, or a numeric range). Both remain open.

## Reason

Before approving Platform Rank visual asset integration (`17-VISUAL-ASSET-MAP.md`), the relationship between the existing named-tier Rank ladder (`03-SHARED-USER-PROGRESSION-SYSTEM.md` §12/§13/§14) and the numeric 1–100 Rank scale used by the approved artwork mapping was undefined. An audit identified four possible interpretations:

```text
A — Same system; tier maps into the Rank 1-100 scale (exact mapping TBD)   (APPROVED)
B — Same system, derived spend score
C — Two layers of one system (tier + sub-number shown together)
D — Genuinely different, undocumented system
```

Interpretation A was selected.

## Affected Files / Areas

```text
docs/03-SHARED-USER-PROGRESSION-SYSTEM.md (new §11.1, updated §31.1, new §31.12, §33, version 0.2 → 0.3)
docs/17-VISUAL-ASSET-MAP.md (§5, §6 clarified, version 0.1 → 0.2)
```

## Supersedes

Nothing is superseded. This decision narrows a previously undefined relationship; it does not replace or invalidate the existing named-tier ladder candidates (§12/§13 Detailed Candidate, §14 Alternative Model), which remain open `CONFLICT` items pending a separate decision on which ladder is final.

## Notes

The prototype's current `RANK_DATA` array in `prototype/assets/js/shared.js` is a third, non-canonical tier-ladder variant, distinct from both documented candidates, and must not be treated as the final ladder.

Implementation principle (for future implementation, not applied now): Rank 100 is the current product maximum, not an incidental number. Future code should avoid scattering hard-coded `100` values and should instead reference the maximum from one centralized Rank configuration/constant where practical.

This decision does not authorize Rank artwork integration into the prototype — the final ladder selection and tier-to-number allocation questions remain open prerequisites.

---

# 3. Future Decision Examples

Add a new decision entry when approving changes such as:

```text
Primary CTA color changes
Bottom Navigation structure changes
Desktop navigation pattern changes
Global Card style changes
New shared component introduced
Existing shared component replaced
Page layout direction approved
Figma design promoted to current baseline
New responsive breakpoint approved
New design token family approved
```

Do not log trivial implementation details.

---

# 4. Superseding a Decision

Do not delete historical decisions.

Instead:

```text
Old Decision:
Status → SUPERSEDED

New Decision:
Status → APPROVED
Supersedes → DD-XXX
```

This preserves the reasoning history.

---

# 5. Current Relationship to Other Docs

```text
Product Masters
    define what the product does

12-DESIGN-FOUNDATION.md
    defines shared visual foundation

13-COMPONENT-SYSTEM.md
    defines component responsibilities

14-PAGE-MAP.md
    defines page structure/navigation

15-AI-DESIGN-RULES.md
    defines AI working behavior

16-DESIGN-DECISIONS.md
    records why material design decisions were made
```

---

# 6. Maintenance Rule

Update this file only for a material design/architecture decision.

A normal page implementation or minor bug fix does not automatically require a new decision entry.

---

**Document Status: ACTIVE DECISION LOG — v0.1**
