# Find Playpal — Responsive Design Rules

**Status:** Approved Foundation  
**Version:** 0.1  
**Applies To:** Find Playpal Web / Responsive Prototype / Future UI Implementation  
**Purpose:** Establish one shared responsive sizing system for Figma, AI-assisted design, prototypes, and frontend implementation.

---

# 1. Core Principle

Find Playpal uses a **mobile-first responsive design system**.

The product must not be designed only for three exact screen sizes.

Instead:

- Mobile, Tablet, and Desktop are **responsive ranges**.
- A single reference viewport is used for each range when designing in Figma or reviewing AI-generated UI.
- The final implementation must continue adapting fluidly between and beyond those reference sizes.

---

# 2. Approved Breakpoints

## Mobile

```text
0px – 767px
```

Use the Mobile layout.

## Tablet

```text
768px – 1023px
```

Use the Tablet layout.

## Desktop

```text
1024px and above
```

Use the Desktop layout.

---

# 3. CSS Breakpoint Model

Use a mobile-first implementation.

Base styles are Mobile.

Tablet begins at:

```css
@media (min-width: 48rem) {
  /* Tablet: 768px+ */
}
```

Desktop begins at:

```css
@media (min-width: 64rem) {
  /* Desktop: 1024px+ */
}
```

Assuming the standard browser root size of 16px:

```text
48rem = 768px
64rem = 1024px
```

---

# 4. Primary Design Reference Sizes

These are **design and review viewports**, not the only supported sizes.

## Mobile Reference

```text
390 × 844
```

Use this as the primary Mobile Figma frame and AI design reference.

## Tablet Reference

```text
768 × 1024
```

Use this as the primary Tablet portrait reference.

## Desktop Reference

```text
1440 × 900
```

Use this as the primary Desktop design and review reference.

---

# 5. Required Test Sizes

The three reference sizes are not enough by themselves.

## Mobile Tests

Primary:

```text
390 × 844
```

Also test:

```text
360px width
430px width
```

A page must not break at 360px width.

## Tablet Tests

Primary:

```text
768 × 1024
```

Also test:

```text
820px width
1023px width
```

## Desktop Tests

Primary:

```text
1440 × 900
```

Also test:

```text
1024px width
1280px width
1920px width
```

Desktop content must not simply stretch indefinitely on wide screens.

---

# 6. Existing Prototype Status

The current `playpal-prototype.html` uses fixed prototype frames:

```text
Mobile  = 360 × 760
Tablet  = 600 × 820
Desktop = 1040 × 720
```

These sizes are useful as an early clickable prototype but are **not the new design standard**.

Status:

```text
360 × 760  → KEEP AS SMALL-MOBILE TEST
600 × 820  → LEGACY PROTOTYPE SIZE
1040 × 720 → KEEP AS COMPACT-DESKTOP TEST
```

New primary references:

```text
Mobile  = 390 × 844
Tablet  = 768 × 1024
Desktop = 1440 × 900
```

---

# 7. Important Difference: Breakpoint vs Frame Size

Do not confuse a breakpoint with a Figma frame.

Example:

```text
Mobile breakpoint range:
0–767px

Primary Mobile design frame:
390px wide
```

This does **not** mean the website only supports 390px.

It means the 390px viewport is the main visual reference while the layout must work across the full 0–767px Mobile range.

The same principle applies to Tablet and Desktop.

---

# 8. Responsive Design Behavior

Responsive design should not mean simply scaling everything larger or smaller.

Layouts may change according to available space.

Possible changes include:

- Navigation structure
- Column count
- Grid count
- Card width
- Content density
- Sidebar visibility
- Modal / bottom-sheet behavior
- Page padding
- Typography scale
- Image treatment
- Action placement

The underlying feature logic must remain consistent unless a separate product decision states otherwise.

---

# 9. Mobile-First Rule

Mobile is the starting point.

Design order:

```text
Mobile
→ Tablet adaptation
→ Desktop adaptation
```

Do not build Desktop first and shrink it mechanically into Mobile.

Mobile should contain the essential product experience.

Tablet and Desktop may progressively reveal more space, context, or simultaneous information.

---

# 10. Navigation Rule

Navigation behavior may differ by responsive range.

Exact Find Playpal navigation patterns will be documented separately.

Until that document is approved:

- Do not assume the current prototype navigation is final.
- Do not introduce a completely new navigation architecture solely because the viewport changes.
- Responsive navigation changes must preserve access to the same core product areas.

**Final navigation specification: TBD**

---

# 11. Content Width

Desktop pages should generally use a centered content container or structured application shell rather than stretching primary content across the entire screen.

Exact max-width values depend on page type and will be defined with the Design System.

**Final content max-width tokens: TBD**

---

# 12. Touch and Interaction

Mobile and Tablet interfaces must remain touch-friendly.

Do not rely exclusively on:

- Hover
- Tiny icons
- Mouse precision
- Right-click
- Desktop-only tooltips

Desktop may add hover feedback, but the underlying action must remain understandable without it where the feature is shared across devices.

---

# 13. Orientation

Primary design references:

```text
Mobile  → Portrait
Tablet  → Portrait
Desktop → Landscape
```

Tablet landscape must still work responsively even if it is not a primary Figma frame.

Mobile landscape support should not break, but dedicated landscape-specific page designs are not required unless a future feature needs them.

---

# 14. Prototype Implementation Rule

The current prototype uses manual `data-device` switching for presentation.

This is acceptable for an early prototype.

However, production-quality responsive implementation should ultimately respond to the actual viewport rather than depending on manually selected device modes.

Conceptually:

```text
Current prototype
data-device="mobile/tablet/desktop"

Future implementation
actual viewport width
→ responsive CSS
→ layout adapts automatically
```

---

# 15. Viewport Meta Rule

Production HTML must include an appropriate viewport meta declaration so mobile browsers use the actual device width.

Recommended baseline:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The existing prototype should be updated when it is converted into a true responsive implementation.

---

# 16. AI Design Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on Find Playpal UI:

1. Use the approved responsive ranges:
   - Mobile: `< 768px`
   - Tablet: `768–1023px`
   - Desktop: `>= 1024px`
2. Use the approved primary reference frames:
   - Mobile: `390 × 844`
   - Tablet: `768 × 1024`
   - Desktop: `1440 × 900`
3. Never assume the reference frame is the only supported viewport.
4. Preserve usability at intermediate widths.
5. Do not simply scale the Mobile UI up for Tablet and Desktop.
6. Do not redesign product logic when adapting responsive layout.
7. Do not modify approved design tokens merely to solve one viewport issue.
8. If a component cannot adapt cleanly, report the responsive conflict and propose a component-level solution.
9. Check the smallest supported practical Mobile width at approximately 360px.
10. Check Desktop layout beginning at 1024px.
11. Treat existing `360 × 760`, `600 × 820`, and `1040 × 720` prototype frames as legacy/test references, not the master design sizes.

---

# 17. Figma Frame Naming

Recommended naming convention:

```text
Mobile / 390
Tablet / 768
Desktop / 1440
```

For page-specific frames:

```text
Home / Mobile / 390
Home / Tablet / 768
Home / Desktop / 1440
```

Avoid naming frames by specific phone models unless a device-specific issue is being tested.

---

# 18. Current Decision

## Responsive Ranges

```text
Mobile  : 0–767px
Tablet  : 768–1023px
Desktop : 1024px+
```

## Primary Design Frames

```text
Mobile  : 390 × 844
Tablet  : 768 × 1024
Desktop : 1440 × 900
```

## Development Strategy

```text
Mobile First
+ Fluid Layout
+ Responsive Breakpoints
+ Boundary Testing
```

---

**Document Status: APPROVED FOUNDATION**

This responsive sizing system should be used as the default for future Find Playpal design work unless it is explicitly revised through a documented design decision.
