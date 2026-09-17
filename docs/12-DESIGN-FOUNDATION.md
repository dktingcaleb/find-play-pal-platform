# Find Playpal — Design Foundation

**Status:** APPROVED FOUNDATION / Current Baseline  
**Version:** 0.1  
**Applies To:** Find Playpal prototype and future UI implementation  
**Primary Files:**  
- `prototype/assets/css/tokens.css`
- `prototype/assets/css/shared.css`
- `prototype/assets/js/shared.js`

---

# 1. Purpose

This document defines the current shared design foundation for Find Playpal.

The goal is to make the design:

- maintainable by programmers,
- safe for AI-assisted design changes,
- consistent across pages,
- compatible with the current prototype,
- and able to evolve without uncontrolled global redesign.

The current token foundation is extracted from the existing prototype.

It is **not** a visual redesign.

---

# 2. Design Change Principle

```text
Extraction / Refactor
≠
Redesign
```

When restructuring code or moving values into tokens:

- colors must remain visually identical,
- typography must remain identical,
- spacing must remain identical,
- radius must remain identical,
- component behavior must remain identical.

Visual changes require a separate approved design decision.

---

# 3. CSS Architecture

Current shared architecture:

```text
tokens.css
    ↓
shared.css
    ↓
page / component styling
```

`tokens.css` must load before `shared.css`.

---

# 4. Token Architecture

Use this hierarchy:

```text
Primitive Tokens
        ↓
Semantic Tokens
        ↓
Component Tokens
        ↓
Page / Component CSS
```

Primitive tokens represent exact values.

Examples:

```css
--fp-coral-500
--fp-purple-500
--space-8
--radius-12
--font-size-14
```

Semantic tokens describe purpose.

Examples:

```css
--color-text-primary
--color-surface-primary
--color-info
--color-interactive-selected
```

Component tokens may be introduced later after the component system is defined.

---

# 5. AI Styling Priority

AI must use styling sources in this order:

```text
Existing semantic token
→ Existing primitive token
→ Existing approved component value
→ Propose a new token only when necessary
```

AI must not create near-duplicate colors, spacing, or radii simply because a new value looks better.

---

# 6. Existing Legacy Variables

The original prototype variables remain supported through compatibility aliases:

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

They must not be removed until all dependent selectors have been migrated and verified.

---

# 7. Color Foundation

Current common color families include:

```text
Neutral / Ink
Warm Surfaces
Coral / Pink Action
Purple Interactive / Selected
Blue Information / Link
Legacy Tan / Cream Palette
```

Important:

The same historical color can currently serve multiple roles.

Therefore AI must not assume that one raw color is permanently equivalent to one semantic meaning.

Example:

```text
#E8544A
```

currently appears in multiple interaction contexts.

Changing its global value to fix one screen is not allowed without impact review.

---

# 8. Typography

Current font family remains the system-oriented stack defined in `tokens.css`.

No new typeface is approved.

Existing font sizes are being tokenized gradually.

Do not normalize or round font sizes during refactoring.

---

# 9. Spacing

The current foundation includes a 2px-oriented primitive spacing scale.

Existing special values remain valid where already used.

Do not replace values such as 3px, 5px, 7px, 9px, or 13px merely to force them into the global scale.

They may later be reviewed at component level.

---

# 10. Radius

Radius tokens preserve exact current values.

Do not replace existing pill values with `999px` merely because the visual result appears similar.

Extraction and refactoring must preserve exact design behavior.

---

# 11. Shadows

Only the existing small shadow set is tokenized.

Do not invent a large elevation system until actual components require one.

---

# 12. Responsive Foundation

Responsive behavior follows:

```text
04-RESPONSIVE-DESIGN-RULES.md
```

Approved ranges:

```text
Mobile   0–767px
Tablet   768–1023px
Desktop  1024px+
```

Primary design reference frames:

```text
Mobile   390 × 844
Tablet   768 × 1024
Desktop  1440 × 900
```

Reference frame sizes are design canvases, not device-specific breakpoints.

---

# 13. Global vs Feature-Specific Tokens

Do not move the following into global tokens automatically:

- Royal / Noble tier colors
- Rank colors
- Skill attribute colors
- Guild colors
- special Party Room effects
- one-off gradients
- one-off illustration colors
- feature-specific z-index rules
- page-specific decorative surfaces

These should remain local until their system/component is reviewed.

---

# 14. Global Change Rule

Before changing an existing global token, state:

```text
Token
Current value
Proposed value
Reason
Known affected components/pages
```

A one-page problem should not normally be fixed by changing a global token.

---

# 15. Source Priority

For design work:

```text
Product Master / Feature Rules
↓
Responsive Rules
↓
Design Foundation
↓
Approved Component Rules
↓
Approved Page Design
↓
Prototype / Historical Figma Reference
```

Existing Figma and prototype visuals are references unless a design has been explicitly approved as current.

---

# 16. Current Rule

The current `tokens.css` is the shared token source of truth.

`shared.css` may still contain hard-coded legacy values during gradual migration.

That does not authorize AI to normalize them automatically.

Migration must be incremental and verified.

---

**Document Status: APPROVED FOUNDATION — v0.1**
