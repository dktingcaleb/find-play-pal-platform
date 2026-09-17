# Find Playpal — Component System

**Status:** APPROVED FOUNDATION / Current Baseline  
**Version:** 0.1  
**Applies To:** Prototype design, future UI implementation, AI-assisted design work  
**Related Documents:**  
- `04-RESPONSIVE-DESIGN-RULES.md`
- `12-DESIGN-FOUNDATION.md`

---

# 1. Purpose

This document defines the shared UI component architecture for Find Playpal.

Goals:

- reduce duplicated UI,
- make design changes predictable,
- keep AI from creating unnecessary one-off components,
- let programmers reuse stable UI structures,
- separate low-level visual primitives from feature/business logic,
- keep feature-specific components independent where needed.

The component system must support the current prototype without forcing a redesign.

---

# 2. Core Principle

A shared component should exist when the UI has:

```text
Repeated Structure
+
Repeated Behavior
+
Same Design Responsibility
```

Visual similarity alone is not enough.

Example:

```text
PlaypalCard
OrderCard
PartyRoomCard
```

may all look like cards, but they serve different product roles.

Therefore:

```text
Shared visual primitive
≠
Shared business component
```

---

# 3. Component Layers

Use this architecture:

```text
Foundation Tokens
        ↓
UI Primitives
        ↓
Shared Components
        ↓
Feature Components
        ↓
Page Composition
```

## Foundation Tokens

Defined in:

```text
prototype/assets/css/tokens.css
```

## UI Primitives

Low-level visual building blocks such as:

```text
Surface
Button
Avatar
Badge
Chip
Overlay
```

## Shared Components

Reusable structures used across multiple modules, such as:

```text
PageHeader
BottomNavigation
FormField
BottomSheet
```

## Feature Components

Business-specific UI such as:

```text
PlaypalCard
OrderCard
PartyRoomCard
TaskCard
GuildCard
```

## Page Composition

A page assembles shared + feature components.

---

# 4. Approved Shared Component Families

Current approved component families:

```text
Layout
Navigation
Actions
Forms
Identity
Feedback / Overlay
```

---

# 5. Layout Components

## PageShell

Purpose:

```text
Standard internal page container
```

Responsibilities:

- page-level structure,
- header slot,
- scroll/content region,
- optional bottom action region.

Should not contain:

- product-specific business logic,
- feature data,
- hard-coded page titles.

---

## AppShell

Purpose:

```text
Main application layout
```

Responsibilities:

- main top area,
- primary content area,
- global bottom navigation region.

Current use:

```text
Home
Party
Moments
Chat
User
```

AppShell should not contain page-specific content.

---

# 6. Navigation Components

## PageHeader

Purpose:

```text
Standard internal-page header
```

Supported conceptual slots:

```text
Leading
Title
Trailing
```

Example:

```text
BackButton | Page Title | Optional Action
```

Do not force Party Room or other specialized headers to use this component if their product behavior is materially different.

---

## BackButton

Purpose:

```text
Navigate to previous context
```

Responsibilities:

- back affordance,
- consistent hit area,
- consistent visual placement.

Business navigation behavior is supplied by the page/router.

---

## BottomNavigation

Purpose:

```text
Primary mobile navigation
```

Current destinations:

```text
Home
Party
Moments
Chat
User
```

The active item must be configurable state.

Do not maintain separate duplicated navigation markup for each main page.

Responsive behavior may differ on larger layouts according to:

```text
04-RESPONSIVE-DESIGN-RULES.md
```

---

## Tabs

Tabs are an approved shared behavioral component.

Supported visual families may include:

```text
Underline Tabs
Pill Tabs
Segmented Tabs
```

Do not force all Tabs into one appearance.

The shared responsibility is:

- selection behavior,
- active state,
- accessibility,
- layout structure.

Feature styling may remain local.

---

# 7. Action Components

## Button

Approved base variants:

```text
Primary
Secondary
Outline
Ghost
Danger
Icon
```

Important:

These are design variants, not product actions.

Example:

```text
Danger Button
```

does not itself know what "Delete Account" means.

Business behavior belongs to the calling feature.

---

## FloatingActionButton

Purpose:

```text
Floating high-priority action
```

Responsibilities:

- shape,
- positioning behavior,
- interaction feedback.

Feature provides:

- icon,
- label if any,
- action.

---

# 8. Form Components

## FormField

Purpose:

```text
Shared field shell
```

Potential slots:

```text
Label
Control
Helper
Error
Trailing action
```

Do not hard-code product-specific validation into the visual component.

---

## SelectField

Purpose:

```text
Selection-based field
```

Business options come from the feature.

---

## TextArea

Purpose:

```text
Multi-line text input
```

Optional support:

```text
Character Counter
Helper Text
Validation
```

Character limits belong to feature configuration.

---

## QuantityStepper

Purpose:

```text
Increase / decrease a numeric value
```

Structure:

```text
Decrease
Value
Increase
```

Configuration:

```text
min
max
step
disabled
```

Do not hard-code Order quantity rules into the component.

---

# 9. Identity Components

## Avatar

Base responsibilities:

```text
Image
Fallback
Size
Shape
```

Optional presentation layers:

```text
Status Indicator
Frame
Badge
```

Do not embed Playpal business data into Avatar.

Correct composition example:

```text
Avatar
+ OnlineStatus
+ NobleBadge
+ RoleBadge
```

---

## Badge

Purpose:

```text
Compact identity or status marker
```

Examples:

- Role
- Verification
- Rank
- Noble tier
- Status

A Badge component may share visual primitives, but actual badge types remain feature-defined.

---

## Chip

Purpose:

```text
Selectable/filter/compact option
```

Examples:

- onboarding interests,
- filters,
- selectable preferences.

A Chip is different from Badge:

```text
Chip → usually interactive/selectable
Badge → usually descriptive/status
```

---

## Tag

Purpose:

```text
Descriptive metadata
```

Examples:

- service trait,
- personality trait,
- category.

Do not merge all pill-shaped UI under one semantic component.

---

# 10. Feedback & Overlay Components

## Overlay

Base backdrop / modal-layer primitive.

Responsibilities:

- page blocking layer,
- stacking context,
- backdrop behavior.

---

## Modal

Use for centered/contained dialogs.

Examples:

- confirmation,
- important information,
- form dialog.

---

## BottomSheet

Use for mobile-oriented bottom interaction panels.

Party Room may use the shared BottomSheet shell while retaining Party-specific content.

---

## ConfirmationDialog

Use for high-impact actions such as:

- destructive action,
- financial confirmation,
- account action,
- room management action.

The component provides structure.

The feature provides:

```text
Title
Description
Primary Action
Secondary Action
Risk meaning
```

---

## Toast

Purpose:

```text
Temporary non-blocking feedback
```

Possible semantic families:

```text
Info
Success
Warning
Error
```

Final colors/text behavior must follow Design Foundation and product rules.

---

# 11. Card Architecture

Do not create one universal business Card.

Use:

```text
CardSurface
        ↓
Feature Card
```

`CardSurface` may define:

- background,
- border,
- radius,
- padding,
- generic hover/press behavior where appropriate.

Feature components remain separate.

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

Each may use the same Surface primitive without becoming the same component.

---

# 12. Feature Components That Must Remain Independent

The following are not approved as one shared universal component:

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

Reason:

They contain materially different:

- data,
- actions,
- states,
- product logic,
- permissions.

AI must not merge them merely because they look visually similar.

---

# 13. List / Row Architecture

A future generic `ListRow` may support:

```text
Leading
Main
Supporting
Trailing
Action
```

However, current settings rows, member rows, wallet rows, order rows, and notification rows have different logic.

Therefore:

```text
ListRow primitive
= allowed later

Universal business row
= not approved
```

---

# 14. Recommended Implementation Order

First-wave shared extraction:

```text
1. PageShell
2. PageHeader
3. BackButton
4. AppShell
5. BottomNavigation
6. QuantityStepper
7. Overlay
8. BottomSheet
```

These have the clearest responsibilities and lowest business coupling.

Second wave:

```text
9. Button
10. Tabs
11. FormField
12. TextArea
13. Avatar
14. Badge
15. Chip
16. Toast
17. FloatingActionButton
```

Feature components should come later.

---

# 15. Component Folder Target

Recommended conceptual structure:

```text
components/
├── layout/
│   ├── PageShell
│   └── AppShell
│
├── navigation/
│   ├── PageHeader
│   ├── BackButton
│   ├── BottomNavigation
│   └── Tabs
│
├── actions/
│   ├── Button
│   └── FloatingActionButton
│
├── forms/
│   ├── FormField
│   ├── SelectField
│   ├── TextArea
│   └── QuantityStepper
│
├── identity/
│   ├── Avatar
│   ├── Badge
│   ├── Chip
│   └── Tag
│
└── feedback/
    ├── Overlay
    ├── Modal
    ├── BottomSheet
    ├── ConfirmationDialog
    └── Toast
```

Do not create empty folders solely to match this diagram.

Create them as components are actually implemented.

---

# 16. Prototype vs Production Components

The current prototype is plain HTML/CSS/JavaScript.

The real production application may use another framework.

Therefore:

```text
Component System
= design / behavior contract

Not:
mandatory file format
```

Production developers may implement the same components using:

- React
- Vue
- Flutter
- native mobile
- Astro
- another approved technology

The component responsibilities should remain consistent even when code implementation differs.

---

# 17. Component Change Rule

Before changing a shared component, identify:

```text
Component
Requested change
Current variants
Affected screens/pages
Visual impact
Behavior impact
```

A page-specific problem should not normally be solved by changing a shared component globally unless the impact is intended.

---

# 18. AI Component Rules

AI assistants must:

1. Check whether an approved shared component already exists before creating a new one.
2. Reuse shared components where responsibilities genuinely match.
3. Keep feature/business logic out of low-level visual primitives.
4. Keep Feature Components separate when product states/actions differ.
5. Avoid mega-components with many unrelated configuration flags.
6. State affected pages before changing a shared component.
7. Preserve existing design during extraction unless redesign is explicitly approved.
8. Use Design Tokens instead of inventing near-duplicate visual values.
9. Follow responsive rules in `04-RESPONSIVE-DESIGN-RULES.md`.
10. Follow product logic Masters before visual assumptions.

AI must not:

- merge components only because they look similar,
- redesign while refactoring,
- create page-local duplicates of an existing approved component,
- put service/order/role permission logic into generic Button/Card/Avatar primitives,
- change global components to solve one isolated page issue without impact review.

---

# 19. Accessibility / Semantic HTML

Where practical in implementation:

```text
Interactive action → button
Navigation → link/navigation semantics
Input → proper form control
```

The existing prototype contains many clickable non-button elements.

These may be improved during implementation.

However:

```text
Semantic refactor
≠ permission to redesign
```

Visual appearance and interaction intent should remain stable unless separately approved.

---

# 20. Component State Model

Shared components should expose states explicitly rather than infer them from page-specific hacks.

Examples:

```text
Button
├── default
├── pressed
├── disabled
├── loading

Tabs
├── active
└── inactive

Avatar
├── online
├── busy
└── offline
```

Feature-specific states belong to Feature Components.

---

# 21. Responsive Rule

Components must be:

```text
Mobile-first
Fluid where appropriate
Reusable across Mobile / Tablet / Desktop
```

Do not create separate device-specific component implementations unless the structure truly changes.

Use approved responsive rules rather than device-name targeting.

---

# 22. Design Token Dependency

Shared Components should use:

```text
tokens.css
```

before introducing raw values.

Priority:

```text
Semantic Token
→ Primitive Token
→ Approved component-specific value
→ Proposed new token
```

---

# 23. Source Priority

For component behavior:

```text
Product Master / Feature Master
↓
Responsive Rules
↓
Design Foundation
↓
Component System
↓
Approved Page Design
↓
Prototype / Figma Reference
```

A visually convenient component structure must never override product rules.

---

# 24. Current Prototype Status

The current prototype still contains duplicated markup.

This is acceptable temporarily.

The next implementation phase may begin physically extracting the first-wave shared components.

Extraction must preserve:

```text
UI
Behavior
Navigation
Product logic
```

---

# 25. Current Approved First-Wave Extraction

Approved targets:

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

Any additional component extraction should be proposed before implementation if it materially changes structure.

---

**Document Status: APPROVED FOUNDATION — v0.1**
