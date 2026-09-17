# Find Playpal — Page Map

**Status:** APPROVED STRUCTURE / Current Prototype Baseline  
**Version:** 0.1  
**Source:** Current Find Playpal prototype after Step 5 token migration  
**Prototype model:** Single-page HTML prototype using screen switching  
**Current screen count:** 35

> This Page Map documents the current prototype structure so designers, programmers, and AI assistants can safely split and modify pages later.
>
> It does **not** mean every current screen design or every piece of screen content is final. Product Masters remain higher priority than the prototype.

---

# 1. Purpose

The Page Map answers:

```text
What screens currently exist?
Which product module owns each screen?
How is the screen entered?
Where can it lead?
Which screens are shared/utility screens?
Which screens require product/design review?
```

This should be used before physically splitting `prototype/index.html`.

---

# 2. Source Priority

When the Page Map conflicts with product rules:

```text
Product Master / Feature Master
↓
Responsive Rules
↓
Design Foundation
↓
Component System
↓
Page Map
↓
Current Prototype / Historical Figma
```

The Page Map describes navigation and design structure.

It must not override product logic.

---

# 3. Current Main Navigation

Current product-level primary destinations:

```text
Home
Party
Moments
Chat
User
```

Prototype screen IDs:

```text
screen-home
screen-party
screen-moments
screen-chat
screen-profile
```

The prototype currently generates one shared Bottom Navigation for these five destinations.

Logical product naming should continue to use:

```text
Home / Party / Moments / Chat / User
```

even where prototype labels differ slightly.

---

# 4. Screen Status Terms

Use these statuses:

## BASELINE

Current prototype screen exists and can continue to be used as a design reference.

This does **not** mean final approved production design.

## REVIEW

Screen exists, but at least part of its product logic, content, terminology, or design needs reconciliation with current Masters.

## UTILITY

Reusable supporting screen used by multiple flows.

## PLACEHOLDER

Intentional temporary screen for destinations whose final design does not yet exist.

## LEGACY

Explicitly superseded screen or flow.

No current standalone prototype screen is marked `LEGACY` solely because its design is old. Legacy status requires a confirmed superseding decision.

---

# 5. Authentication & Onboarding

## 5.1 Splash

```text
Screen ID: screen-splash
Module: Authentication
Status: BASELINE
```

Purpose:

- brand entry,
- version display,
- transition to Login.

Primary flow:

```text
Splash
→ Login
```

Future page/component candidates:

```text
BrandLockup
VersionLabel
```

---

## 5.2 Login

```text
Screen ID: screen-login
Module: Authentication
Status: BASELINE / REVIEW
```

Current prototype includes:

- Google login,
- Facebook login,
- Email login,
- Phone login,
- Forgot password,
- Create account,
- Terms / Privacy links.

Primary flows:

```text
Login
→ Personalization
→ Legal
→ Placeholder destinations
```

Review required:

- final authentication methods,
- exact registration/login flows,
- final legal copy.

---

# 6. Personalization / Preference Onboarding

## 6.1 Preference Step 1

```text
Screen ID: screen-pref1
Module: Personalization
Status: REVIEW
```

Current purpose:

```text
Preferred Playpal characteristics
```

Current prototype uses:

```text
Maximum 10 selections
```

Flow:

```text
Login
→ Preference 1
→ Preference 2
```

Product values must ultimately follow:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

## 6.2 Preference Step 2

```text
Screen ID: screen-pref2
Module: Personalization
Status: REVIEW
```

Current purpose:

```text
What the user wants from the platform
```

Current maximum:

```text
3
```

The final option list remains product TBD.

Flow:

```text
Preference 1
↔ Preference 2
→ Preference 3
```

---

## 6.3 Preference Step 3

```text
Screen ID: screen-pref3
Module: Personalization
Status: REVIEW
```

Current purpose:

```text
Favorite games/interests
```

Current maximum:

```text
10
```

Flow:

```text
Preference 2
→ Preference 3
→ Home
```

Final interest taxonomy should follow:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

# 7. Legal

## 7.1 Legal List

```text
Screen ID: screen-legal-list
Module: Legal / Account
Status: BASELINE
```

Purpose:

```text
List available legal/policy documents
```

Flow:

```text
Login
→ Legal List
→ Legal Document
```

---

## 7.2 Legal Document

```text
Screen ID: screen-legal-doc
Module: Legal / Account
Status: PLACEHOLDER CONTENT
```

The prototype explicitly treats legal body text as placeholder content.

Structure can be reused as design reference.

Final legal content must be supplied/approved separately.

Flow:

```text
Legal List
↔ Legal Document
```

---

# 8. Main App

## 8.1 Home

```text
Screen ID: screen-home
Module: Main App / Discovery
Status: BASELINE / REVIEW
```

Current areas include:

- recommendations,
- activities,
- banners,
- live/room content,
- floating/activity-style notices,
- Quick Order access.

Known flow:

```text
Home
→ Quick Order
→ Main Navigation
```

**REVIEW — Home → Activity navigation:**

Home currently displays activity-style banners/notices, but no verified click path from Home into Activity Detail exists in the current prototype (`renderHome()` in `shared.js` contains no `openActivityDetail` call, and the banner/notice markup has no `onclick`). The only confirmed prototype entry point into Activity Detail is `Channel → Activity`.

Whether Home should link directly to Activity Detail remains a future product/design decision. Do not assume or implement this edge until it is explicitly approved.

Some recommendation content must later align with:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

## 8.2 Party

```text
Screen ID: screen-party
Module: Party Discovery
Status: BASELINE / REVIEW
```

Current areas include:

- Party discovery,
- followed/on-air users,
- featured rooms,
- room cards,
- Quick Order access.

Known flow:

```text
Party
→ Party Room
→ Quick Order
→ Main Navigation
```

Final content must align with:

```text
08-PARTY-ROOM-SYSTEM.md
```

---

## 8.3 Moments

```text
Screen ID: screen-moments
Module: Social / Moments
Status: BASELINE
```

Current areas include:

- recommendation,
- latest,
- following,
- posts,
- Playpal profile entry,
- post creation.

Known flow:

```text
Moments
→ Post Moment
→ Player / Playpal Profile
→ Main Navigation
```

---

## 8.4 Chat

```text
Screen ID: screen-chat
Module: Messaging
Status: BASELINE / REVIEW
```

Current areas include:

- user chats,
- official announcements,
- activity messages,
- Order-Grab Assistant,
- notifications,
- Who Viewed Me.

Known flow:

```text
Chat
→ Channel
→ Player / Playpal Profile
→ Main Navigation
```

Message categories should align with:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

## 8.5 User / Profile

```text
Screen ID: screen-profile
Module: User Center
Status: BASELINE / REVIEW
```

Current hub for:

- Account Level,
- Platform Rank,
- Noble,
- Wallet,
- Album,
- Virtual Character / Dressing,
- Tasks,
- Party Room creation,
- Squad,
- Guild,
- other personal-center destinations,
- service/safety settings.

Known flow:

```text
User
├── Tasks
├── Party Setup
├── Album
├── Virtual Character
├── Squad
├── Guild
├── Wallet
├── Level / Rank
├── Noble
└── Main Navigation
```

Several unimplemented destinations remain non-interactive or placeholder.

---

# 9. Tasks

## 9.1 Tasks

```text
Screen ID: screen-tasks
Module: Task System
Status: BASELINE / REVIEW
```

Current tabs:

```text
Daily Tasks
Achievement Tasks
```

Flow:

```text
User
→ Tasks
→ User
```

Must follow:

```text
06-TASK-SYSTEM.md
```

Prototype values/content should not override the Task Master.

---

# 10. Official / System Message Channel

## 10.1 Channel

```text
Screen ID: screen-channel
Module: Messaging / Notifications
Status: BASELINE
```

Used for categories such as:

- official announcements,
- activities,
- grab-order assistant,
- notifications,
- profile-view messages.

Flow:

```text
Chat
→ Channel
→ Chat
```

Activity channels may link to:

```text
Activity Detail
```

---

# 11. Moments Creation

## 11.1 Post Moment

```text
Screen ID: screen-post-moment
Module: Moments
Status: BASELINE
```

Current capabilities include:

- text,
- photo selection,
- intimacy/visibility setting,
- promotion-related setting,
- save/discard behavior.

Flow:

```text
Moments
→ Post Moment
├── Photo Picker
└── Moments
```

Some content-moderation wording remains design/reference copy, not a finalized policy.

---

## 11.2 Photo Picker

```text
Screen ID: screen-photo-picker
Module: Shared Media Utility
Status: UTILITY
```

Current prototype reuses this screen for:

```text
Moment photo
Party cover
Party background
Public Note photo
```

Return destination depends on invocation context.

This is a strong candidate for future shared media-selection architecture.

---

# 12. Party Creation

## 12.1 Party Setup

```text
Screen ID: screen-party-setup
Module: Party Room
Status: REVIEW
```

Current purpose:

```text
Configure and create/open a Party Room
```

Known flow:

```text
User
→ Party Setup
├── Photo Picker
├── Tag Picker
├── Fun Settings
└── Party Room
```

All current fields must be reconciled with:

```text
08-PARTY-ROOM-SYSTEM.md
```

before production implementation.

---

## 12.2 Tag Picker

```text
Screen ID: screen-tag-picker
Module: Party Room
Status: UTILITY / REVIEW
```

Used to choose Party attributes such as:

- theme,
- language.

Flow:

```text
Party Setup
→ Tag Picker
→ Party Setup
```

Final taxonomy remains product-controlled.

---

## 12.3 Fun Settings

```text
Screen ID: screen-fun-settings
Module: Party Room
Status: REVIEW
```

Current prototype contains optional Party interaction settings.

Flow:

```text
Party Setup
→ Fun Settings
→ Party Setup
```

Must follow current Party Room Master rather than older prototype assumptions.

---

# 13. Party Room

## 13.1 Party Room

```text
Screen ID: screen-party-room
Module: Party Room
Status: REVIEW — HIGH PRIORITY
```

This is one of the most complex prototype screens.

Current prototype includes:

- Host information,
- timer,
- Party metadata,
- stage,
- chat,
- members,
- report/block actions,
- dispatch publishing,
- gifts,
- skills,
- notes,
- management sheets.

Known flow:

```text
Party Discovery
or
Party Setup
→ Party Room
├── Public Note
├── Member/Admin Sheet
├── Party Dispatch Sheet
├── Menu Sheet
├── Placeholder destinations
└── Return to origin
```

Important:

Current Party Room product behavior is governed by:

```text
08-PARTY-ROOM-SYSTEM.md
```

The prototype displays historical/current-mixed UI values in some places.

Example:

```text
Prototype timer display includes 24:00
```

while current product rules for normal Playpal/Card Room cycles use a 12-hour model.

Therefore this screen must **not** be treated as product-authoritative until audited against Master 08.

---

# 14. Player / Playpal Profile & Ordering

## 14.1 Player / Playpal Profile

```text
Screen ID: screen-player-profile
Module: User / Playpal Discovery
Status: BASELINE / REVIEW
```

Current capabilities include:

- follow,
- album,
- block,
- report,
- voice/chat destinations,
- Playpal specialties,
- direct Order,
- expanded service area.

Entry may come from:

```text
Moments
Chat
other discovery surfaces
```

Known flow:

```text
Player Profile
├── Specialty List
├── Confirm Order
├── Album
├── Report / other placeholder
└── return to origin
```

---

## 14.2 Specialty List

```text
Screen ID: screen-specialty-list
Module: Playpal Service
Status: BASELINE / REVIEW
```

Purpose:

```text
Show Playpal's available service specialties
```

Flow:

```text
Player Profile
→ Specialty List
→ Confirm Order
```

Service taxonomy must follow:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

---

## 14.3 Confirm Order

```text
Screen ID: screen-confirm-order
Module: Order
Status: REVIEW
```

Purpose:

```text
Confirm a Standard Order against a selected Playpal/service
```

Flow:

```text
Player Profile / Specialty
→ Confirm Order
→ Standard Order flow
```

Product logic must follow:

```text
11-ORDER-MATCHING-DISPATCH-SYSTEM.md
```

Current prototype content is reference UI, not the final transaction specification.

---

## 14.4 Album

```text
Screen ID: screen-album
Module: User / Social
Status: BASELINE / REVIEW
```

Used in two contexts:

```text
Own Album
Other User Album
```

Return behavior is context-aware:

```text
Own Album → User
Other Album → Player Profile
```

Current intimacy display remains a prototype design concept and requires product review if implemented.

---

# 15. Virtual Character

## 15.1 Virtual Character / Avatar

```text
Screen ID: screen-avatar
Module: Virtual Character
Status: REVIEW — HIGH PRIORITY
```

Current tabs/concepts include:

- Status,
- Career,
- Equipment,
- Skills,
- Status History.

Flow:

```text
User
→ Virtual Character
→ User
```

Product behavior must follow:

```text
10-VIRTUAL-CHARACTER-SYSTEM.md
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

The prototype contains historical skill/equipment concepts and should not override the current Master.

---

# 16. Quick Order

## 16.1 Quick Order

```text
Screen ID: screen-quick-order
Module: Matching / Order
Status: REVIEW
```

Entry can currently originate from:

```text
Home
Party
```

The prototype remembers origin and returns there after submission.

Current UI includes:

- service,
- level/rank,
- gender,
- price,
- quantity,
- coupon,
- total,
- notes,
- active dispatch,
- history.

Flow:

```text
Home / Party
→ Quick Order
→ Return to origin
```

Must follow:

```text
11-ORDER-MATCHING-DISPATCH-SYSTEM.md
```

Quick Order is a matching layer, not direct escrow transaction.

---

# 17. Squad

## 17.1 Squad List

```text
Screen ID: screen-squad-list
Module: Squad
Status: BASELINE / REVIEW
```

Current areas:

- own Squad,
- other Squads,
- search/chat actions.

Flow:

```text
User
→ Squad List
→ Squad Detail
```

Must follow:

```text
07-SQUAD-SYSTEM.md
```

---

## 17.2 Squad Detail

```text
Screen ID: screen-squad-detail
Module: Squad
Status: BASELINE / REVIEW
```

Current prototype includes:

- roster,
- daily contribution,
- Squad task points,
- reward claim,
- supporting actions.

Flow:

```text
Squad List
→ Squad Detail
→ Squad List
```

Product values must follow Master 07.

---

# 18. Wallet

## 18.1 Wallet

```text
Screen ID: screen-wallet
Module: Wallet / Virtual Economy
Status: REVIEW
```

Current prototype includes:

- Blue Diamond balance,
- transaction/detail entry,
- top-up,
- proxy top-up,
- payment method,
- packages,
- invoice/email,
- confirmation/error modal.

Flow:

```text
User
→ Wallet
→ User
```

A dedicated Wallet / Currency / Payment Master has not yet been completed.

Therefore financial behavior in this screen should not be considered final.

---

# 19. Guild

## 19.1 Guild List

```text
Screen ID: screen-guild-list
Module: Guild
Status: REVIEW
```

Current areas:

- Guild information,
- other Guilds,
- search.

Flow:

```text
User
→ Guild List
→ User
```

A dedicated Guild Master has not yet been completed.

The prototype remains reference-only for Guild business logic.

---

# 20. Progression

## 20.1 Level & Rank

```text
Screen ID: screen-level-rank
Module: Shared Progression
Status: BASELINE / REVIEW
```

Current tabs:

```text
Level
Rank
```

Flow:

```text
User
→ Level / Rank
→ User
```

Must follow:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

Game Rank must not be confused with Platform Rank.

---

## 20.2 Noble / Royal

```text
Screen ID: screen-nobility
Module: Shared Progression / Royal
Status: REVIEW
```

Current prototype presents Noble progress and privileges.

Flow:

```text
User
→ Noble
→ User
```

Must follow the current Royal rules in:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

Old downgrade/legacy models must not be reintroduced from UI assumptions.

---

# 21. Party Seat Note

## 21.1 Public Note

```text
Screen ID: screen-public-note
Module: Party Room / Seat Records
Status: REVIEW
```

Current UI supports:

- text,
- photo,
- save.

Flow:

```text
Party Room
→ Public Note
├── Photo Picker
└── Party Room
```

Must follow the current seat-index persistence rules in:

```text
08-PARTY-ROOM-SYSTEM.md
```

Public Note must not be confused with Private Note or Host Note.

---

# 22. Activity

## 22.1 Activity Detail

```text
Screen ID: screen-activity
Module: Event / Activity
Status: BASELINE / REVIEW
```

Current prototype includes:

- activity banner/content,
- explanation,
- rankings,
- countdown,
- fan/creator ranking concepts.

Can currently be opened from event-related surfaces.

Return destination is stored by origin.

A dedicated Event / Activity Master has not yet been created.

Therefore event scoring/reward logic remains reference-only.

---

# 23. Placeholder

## 23.1 Placeholder Page

```text
Screen ID: screen-placeholder
Module: Prototype Utility
Status: PLACEHOLDER
```

Purpose:

```text
Represent destinations whose UI has not yet been designed
```

It is not a production page.

Do not implement it as a real production destination.

When the corresponding real page is designed, replace the placeholder route rather than building business logic into this screen.

---

# 24. Full Screen Inventory

| # | Screen ID | Logical Page | Module | Status |
|---:|---|---|---|---|
| 1 | `screen-splash` | Splash | Authentication | BASELINE |
| 2 | `screen-login` | Login | Authentication | BASELINE / REVIEW |
| 3 | `screen-pref1` | Preference 1 | Personalization | REVIEW |
| 4 | `screen-pref2` | Preference 2 | Personalization | REVIEW |
| 5 | `screen-pref3` | Preference 3 | Personalization | REVIEW |
| 6 | `screen-legal-list` | Legal List | Legal | BASELINE |
| 7 | `screen-legal-doc` | Legal Document | Legal | PLACEHOLDER CONTENT |
| 8 | `screen-home` | Home | Main App | BASELINE / REVIEW |
| 9 | `screen-party` | Party | Party Discovery | BASELINE / REVIEW |
| 10 | `screen-moments` | Moments | Social | BASELINE |
| 11 | `screen-chat` | Chat | Messaging | BASELINE / REVIEW |
| 12 | `screen-profile` | User | User Center | BASELINE / REVIEW |
| 13 | `screen-tasks` | Tasks | Task | BASELINE / REVIEW |
| 14 | `screen-channel` | Official/System Channel | Messaging | BASELINE |
| 15 | `screen-post-moment` | Post Moment | Moments | BASELINE |
| 16 | `screen-photo-picker` | Photo Picker | Shared Utility | UTILITY |
| 17 | `screen-party-setup` | Party Setup | Party Room | REVIEW |
| 18 | `screen-tag-picker` | Tag Picker | Party Room | UTILITY / REVIEW |
| 19 | `screen-fun-settings` | Fun Settings | Party Room | REVIEW |
| 20 | `screen-party-room` | Party Room | Party Room | REVIEW — HIGH |
| 21 | `screen-player-profile` | Player / Playpal Profile | User / Playpal | BASELINE / REVIEW |
| 22 | `screen-specialty-list` | Specialty List | Playpal Service | BASELINE / REVIEW |
| 23 | `screen-confirm-order` | Confirm Order | Order | REVIEW |
| 24 | `screen-album` | Album | User / Social | BASELINE / REVIEW |
| 25 | `screen-avatar` | Virtual Character | Virtual Character | REVIEW — HIGH |
| 26 | `screen-quick-order` | Quick Order | Matching / Order | REVIEW |
| 27 | `screen-squad-list` | Squad List | Squad | BASELINE / REVIEW |
| 28 | `screen-squad-detail` | Squad Detail | Squad | BASELINE / REVIEW |
| 29 | `screen-wallet` | Wallet | Virtual Economy | REVIEW |
| 30 | `screen-guild-list` | Guild List | Guild | REVIEW |
| 31 | `screen-level-rank` | Level & Rank | Progression | BASELINE / REVIEW |
| 32 | `screen-nobility` | Noble / Royal | Progression | REVIEW |
| 33 | `screen-public-note` | Public Note | Party Room | REVIEW |
| 34 | `screen-activity` | Activity Detail | Events | BASELINE / REVIEW |
| 35 | `screen-placeholder` | Placeholder | Prototype Utility | PLACEHOLDER |

---

# 25. Current Navigation Graph

High-level graph:

```text
Splash
→ Login
  ├── Personalization
  │   → Home
  └── Legal

Main App
├── Home
│   └── Quick Order
│       (Activity: not currently wired from Home — see §8.1 REVIEW note)
│
├── Party
│   ├── Party Room
│   └── Quick Order
│
├── Moments
│   ├── Post Moment
│   │   └── Photo Picker
│   └── Player Profile
│       ├── Specialty List
│       ├── Confirm Order
│       └── Album
│
├── Chat
│   ├── Channel
│   │   └── Activity
│   └── Player Profile
│
└── User
    ├── Tasks
    ├── Party Setup
    │   ├── Photo Picker
    │   ├── Tag Picker
    │   ├── Fun Settings
    │   └── Party Room
    ├── Album
    ├── Virtual Character
    ├── Squad
    │   └── Squad Detail
    ├── Wallet
    ├── Guild
    ├── Level / Rank
    └── Noble

Party Room
├── Public Note
│   └── Photo Picker
├── Member/Admin Bottom Sheet
├── Party Dispatch Bottom Sheet
└── Menu Bottom Sheet
```

---

# 26. Screens That Should Be Split First

When physically separating the current monolithic HTML, recommended order:

```text
Wave 1 — Low-risk utility / isolated pages
1. Legal List
2. Legal Document
3. Tasks
4. Channel
5. Specialty List
6. Confirm Order
7. Album
8. Wallet
9. Level / Rank
10. Noble
11. Activity

Wave 2 — Main app destinations
12. Home
13. Party
14. Moments
15. Chat
16. User

Wave 3 — Feature flows
17. Post Moment
18. Photo Picker
19. Squad
20. Quick Order
21. Player Profile
22. Virtual Character

Wave 4 — Complex Party system
23. Party Setup
24. Tag Picker
25. Fun Settings
26. Party Room
27. Public Note
```

Authentication/onboarding may be separated as its own group.

This order is about extraction risk, not product importance.

---

# 27. Suggested Future Page Folder Architecture

Once actual page separation begins:

```text
prototype/pages/
├── auth/
│   ├── splash
│   ├── login
│   └── preferences
│
├── legal/
│
├── home/
├── party/
├── moments/
├── chat/
├── user/
├── tasks/
├── playpal/
├── order/
├── virtual-character/
├── squad/
├── wallet/
├── guild/
├── progression/
└── activity/
```

Do not create empty directories simply to mirror this plan.

Create page groups as extraction begins.

---

# 28. Shared Utility Screens

Current screens with strong reuse potential:

```text
Photo Picker
Legal Document shell
Channel shell
Placeholder
```

However:

```text
Placeholder
```

is prototype-only and should not become a production shared component.

---

# 29. High-Priority Review Screens

Before production implementation, these deserve direct reconciliation with current Masters:

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

These areas have received substantial product-rule updates after the prototype was originally created.

---

# 30. Prototype Navigation Rule

The current prototype uses:

```text
showScreen(...)
```

to switch screens.

This is prototype navigation only.

Production implementation may use:

- router,
- navigation stack,
- native navigation,
- framework routing.

Do not force `showScreen()` into production architecture.

---

# 31. Screen ID Stability

Until page separation is complete, existing `screen-*` IDs should remain stable.

Reason:

Current JavaScript references them directly.

During extraction:

```text
Do not rename screen IDs
and
move code
at the same time
```

First extract safely.

Rename/refactor later with dedicated verification.

---

# 32. AI Page Modification Rules

When AI is asked to redesign or modify one page:

1. Read this Page Map.
2. Identify the requested screen.
3. Read the relevant Product Master.
4. Read Design Foundation.
5. Read Component System.
6. Inspect the current prototype page.
7. State which shared components are affected.
8. Propose changes before implementation.
9. Do not modify unrelated pages.
10. Do not alter global components without declaring cross-page impact.

---

# 33. Page Approval Workflow

For future design work:

```text
Current Prototype Page
+
Product Master
+
Design Foundation
+
Component System
+
Figma / References
        ↓
AI Audit
        ↓
Proposed Page Design
        ↓
User Approval
        ↓
Implementation
        ↓
Visual / Behavior Verification
        ↓
Commit
```

Only approved design changes should become the new baseline.

---

# 34. Current Page Map Status

```text
35 current prototype screens documented
Main navigation identified
Primary feature flows identified
Shared utility screens identified
High-risk screens flagged
Initial extraction order defined
```

This Page Map should be updated whenever:

- a screen is added,
- a screen is removed,
- a placeholder becomes a real page,
- a flow changes materially,
- a page is split/merged,
- a new product module receives its own page family.

---

**Document Status: APPROVED STRUCTURE — v0.1**
