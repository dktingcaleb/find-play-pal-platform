# Find Playpal — Task System

**Status:** Early Master  
**Version:** 0.1  
**Sources:**  
- `每日任务系统.docx`
- `成就任务系统.docx`

**Module Type:** User Progression / Tasks / Rewards  
**Applies To:** All Find Playpal users unless a task or reward explicitly has a Playpal-only rule  
**Purpose:** Define the current known Daily Task and Achievement Task systems, their progression logic, milestone rewards, and their relationship to Account Level, Platform Rank, Royal/Noble, and other platform systems.

> Important: Find Playpal currently has two distinct task systems:
>
> 1. **Daily Tasks** — short-cycle tasks that contribute daily Activity Points and rewards.
> 2. **Achievement Tasks** — long-term cumulative milestones that track account progress over time.
>
> These systems share task/reward concepts but must not be treated as the same progression loop.

---

# 1. Task System Overview

Current task architecture:

```text
Task System
├── Daily Tasks
│   ├── Complete daily objectives
│   ├── Earn EXP
│   ├── Earn Coins
│   ├── Earn Activity Points
│   └── Unlock Daily Chests
│
└── Achievement Tasks
    ├── Track long-term milestones
    ├── Track cumulative account actions
    ├── Track progression milestones
    └── Grant achievement rewards
```

The two systems differ mainly by:

| Area | Daily Tasks | Achievement Tasks |
|---|---|---|
| Time scope | Daily | Long-term / cumulative |
| Reset | Expected daily cycle | No normal daily reset |
| Main progression | Activity Points + Daily Chests | Milestone completion |
| EXP | Yes | Not fully defined |
| Coins | Yes | Possible reward |
| Rewards | Daily chest rewards | Coins / coupons / equipment / skills / others |
| Examples | Daily task completion | Login days, levels, ranks, orders, gifts |

Exact reset time and timezone are not yet defined.

---

# 2. Relationship to Account Level

The Shared User Progression System defines Account Level as:

```text
Task Completion
→ EXP
→ Account Level
```

The Daily Task source explicitly confirms:

```text
Complete Tasks
→ Earn EXP
```

Therefore Daily Tasks are a confirmed source of Account Level EXP.

The Achievement Task source does not explicitly say whether every achievement grants EXP.

**Achievement EXP reward: TBD**

---

# 3. Daily Task System

Daily Tasks are short-cycle objectives that users complete during a daily cycle.

Completing Daily Tasks can provide:

- EXP
- Coins
- Daily Activity Points
- Progress toward Daily Chests

The exact list of Daily Tasks is referenced as:

```text
Data Sheet
```

The detailed Data Sheet was not included in the current source.

**Daily Task List: TBD / SOURCE REQUIRED**

---

# 4. Daily Activity Point Milestones

The current Daily Task system uses four Activity Point thresholds:

```text
10
40
70
100
```

Each threshold unlocks a corresponding Daily Chest.

Conceptually:

```text
Complete Daily Tasks
→ Earn Activity Points
→ Reach 10 / 40 / 70 / 100
→ Unlock corresponding chest
```

---

# 5. Daily Chest Rewards

Current source rewards:

| Activity Points | Coin Reward | EXP Reward | Additional Reward |
|---:|---:|---:|---|
| 10 | 100 Coins | 300 EXP | — |
| 40 | 400 Coins | 300 EXP | — |
| 70 | 700 Coins | 300 EXP | — |
| 100 | 1,000 Coins | 300 EXP | Item Box |

If all four chests are opened in one daily cycle, the source implies a total of:

```text
2,200 Coins
1,200 EXP
+ 1 Item Box
```

This total is a direct arithmetic summary of the listed chest rewards.

---

# 6. Item Box

The 100 Activity Point chest includes:

```text
Item Box
```

The detailed Item Box contents are referenced as:

```text
Data Sheet
```

The Data Sheet was not included in the current source.

Therefore the following remain undefined:

- Possible items
- Item rarity
- Item probabilities
- Duplicate handling
- Whether rewards are random or fixed
- Whether contents differ by user role
- Whether contents expire
- Whether some items are tradable

**Status: TBD / SOURCE REQUIRED**

---

# 7. Daily Task Rewards

The source confirms Daily Tasks may give:

- EXP
- Coins
- Activity Points

The source does not define whether each task grants all three reward types or whether different tasks grant different combinations.

**Per-task reward structure: TBD**

---

# 8. Daily Task Reset

The source calls this a Daily Task system but does not define:

- Daily reset time
- Timezone
- Whether unfinished tasks disappear
- Whether claimed/unclaimed chest rewards expire
- Whether Activity Points reset to zero
- Whether users can claim rewards after the day ends

**Status: TBD**

---

# 9. Daily Chest Rules for Playpals

The source states that a Playpal receives the same 100-point chest contents.

Current rule:

```text
Playpal 100-point Chest
→ Same core rewards
```

A special rule applies to Playpal discount coupons:

```text
Playpal discount coupon
→ Can be transferred to customer
```

The exact source of the coupon within the chest / Item Box is not fully described.

**Coupon source relationship: REVIEW**

---

# 10. Playpal Discount Coupon Economics

Current Daily Task source example:

```text
Discount = 5%

Customer
→ pays discounted price

Playpal
→ still receives 80% of the original full price

Platform
→ commission is calculated against the original pricing model
```

Conceptual example:

```text
Original Service Price
= 100

Customer uses 5% coupon
→ Customer pays 95

Playpal payout
→ remains based on original 100
→ receives 80

Platform absorbs / accounts for coupon difference according to platform economics
```

The source explicitly confirms the Playpal still receives the original-price 80% payout.

Exact accounting treatment for the remaining amount:

**TBD**

---

# 11. Achievement Task System

Achievement Tasks track long-term cumulative milestones across the user's Find Playpal account.

Unlike Daily Tasks, Achievement Tasks are intended to represent:

- Long-term participation
- Account growth
- Collection progress
- Spending / earning milestones
- Social / service activity
- Progression-system milestones

The source does not define a daily reset.

Achievement progress should therefore be treated as cumulative unless a specific achievement rule says otherwise.

---

# 12. Achievement Categories

The source currently includes achievements across several areas.

Conceptual grouping:

```text
Achievement Tasks
├── Account & Login
├── Combat / Interaction
├── Equipment & Collection
├── Progression
├── Recharge & Spending
├── Squad / Community
├── Party Room
├── Coin Economy
├── Gifts
├── Orders
├── Daily Task Progress
├── Career / Job
└── Chest Progress
```

These categories are documentation groupings only.

**Final UI categories: TBD**

---

# 13. Account & Login Achievements

Current achievements include:

## First Login

```text
Login on first day
```

The source states that the date will be displayed.

Exact display behavior:

**TBD**

## Total Login Days

```text
Total login days = 365
```

Whether this means:

- 365 cumulative login days
- 365 consecutive login days

is not explicitly stated.

**Status: REVIEW**

---

# 14. Interaction / Skill Achievements

Current cumulative achievements include:

## Attack

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

## Defend

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

## Assist

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

The source uses `辅助`.

Whether this maps directly to the previously documented:

- Heal
- Buff
- another Assist mechanic

is not defined.

**Status: REVIEW**

---

# 15. Equipment Achievement

Current achievement:

```text
Fully Equipped
→ From head to toe
```

Exact required equipment slots:

**TBD**

Relationship to Avatar / Virtual Character equipment:

**TBD / REVIEW**

---

# 16. Account Level Achievements

Current Level milestones:

```text
LVL 5
LVL 10
LVL 15
...
LVL 100
```

The source implies 5-level milestone increments.

Exact complete milestone list:

**TBD / may be inferred only after approval**

The Account Level system itself is documented separately in:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

---

# 17. Platform Rank Achievements

Current achievement concept:

```text
Reach Platform Rank:
Bronze
Silver
...
Star / 星耀
```

The exact Platform Rank ladder remains defined by the Shared User Progression System.

Achievement logic should reference the approved Rank system rather than duplicate its thresholds.

---

# 18. Royal / Noble Achievements

Current achievement concept:

```text
Unlock a Royal / Noble tier once
```

Milestones include:

- 军士
- 骑士
- ...
- 天子

The source includes the note:

```text
Caleb
```

The meaning of `Caleb` is not defined in the current document.

It may represent an owner, person responsible, source note, or follow-up marker.

**Status: REVIEW**

AI must not treat `Caleb` as a product label or user-facing text.

---

# 19. Recharge Achievements

Current achievements include:

## First Recharge

```text
Complete first recharge
```

## Recharge Count

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

The source tracks number of recharge actions, not recharge amount, for this achievement.

---

# 20. Squad Achievement

Current achievement:

```text
Cumulative days joined in a Squad
```

Milestones:

```text
30 / 60 / 90 / 120 / … / 360 days
```

The source does not define whether this requires:

- consecutive days
- cumulative membership days
- active participation days

**Status: REVIEW**

---

# 21. Party Room Achievement

Current achievement:

```text
Participate in Party Room
```

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

What counts as one valid participation:

**TBD**

Possible abuse-prevention rules:

**TBD**

---

# 22. Coin Economy Achievements

## Spend Coins

Milestones:

```text
1k
10k
100k
1m
```

## Earn Coins

Milestones:

```text
1k
10k
100k
1m
```

Whether these thresholds are:

- lifetime cumulative
- current balance

is not explicitly stated.

The wording strongly suggests cumulative totals, but final product behavior should be confirmed.

**Status: REVIEW**

---

# 23. Collection Achievements

The source includes achievements for obtaining collectible / cosmetic items.

## Medals

Milestones:

```text
1 / 10 / 30
```

## Avatar Frames

Milestones:

```text
1 / 10 / 30
```

## Mounts

Milestones:

```text
1 / 10 / 30
```

## Chat Bubbles

Milestones:

```text
1 / 10 / 30
```

## Theme Styles

Milestones:

```text
1 / 10 / 30
```

## Entry Effects

Milestones:

```text
1 / 10 / 30
```

Each of these rows also includes the note:

```text
Caleb
```

The note is not currently part of the product definition.

**Status: REVIEW**

---

# 24. Gift Achievements

## Receive Gifts

Milestones:

```text
10 / 30 / 50 / 70 / 100
```

## Send Gifts

Milestones:

```text
10 / 30 / 50 / 70 / 100
```

The source tracks gift count.

Whether gift value also has separate achievements:

**TBD**

---

# 25. Order Achievements

## Place Orders

Milestones:

```text
10 / 30 / 50 / 70 / 100
```

## Accept Orders

Milestones:

```text
10 / 30 / 50 / 70 / 100
```

This naturally applies differently by user role:

```text
Regular User / Customer
→ Place Order

Playpal
→ Accept Order
```

Because a single account may potentially interact with both sides depending on platform rules, achievement tracking should use actual actions rather than assigning progress solely by account label.

**Final role behavior: TBD**

---

# 26. Daily Task Achievement

Current achievement:

```text
Complete Daily Tasks
```

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

This creates a direct link between the Daily Task system and Achievement Task system.

Conceptually:

```text
Daily Task completion
→ Daily reward
+
→ Long-term Achievement progress
```

---

# 27. Career / Job Achievement

Current achievement:

```text
Unlock new Job / Career
```

Milestones:

```text
1 / 10 / 20
```

The source includes:

```text
Caleb
```

Exact Job / Career system:

**TBD / SEPARATE MODULE**

Relationship to the Avatar / Job prototype:

**TBD / REVIEW**

---

# 28. Chest Achievement

Current achievement:

```text
Open Chests
```

Milestones:

```text
10 / 30 / 50 / 70 / 100 / 130 / 150 / … / 300 times
```

The source does not specify whether this includes:

- Daily Chests only
- Item Boxes
- Event chests
- all chest types

**Status: TBD**

---

# 29. Achievement Rewards

The source states Achievement Tasks can provide:

- Coins
- Discount Coupons
- Equipment
- Skills
- Other rewards

The exact reward mapping by achievement is referenced to a Data Sheet or is not included in the current documents.

**Achievement Reward Table: TBD / SOURCE REQUIRED**

---

# 30. Verified Playpal Coupon Rule

For a **verified Playpal**, achievement discount coupons can be transferred to customers.

Current example:

```text
Playpal service price:
100 Diamonds per game

Playpal transfers discount coupon to customer

Customer:
→ pays discounted price

Playpal:
→ still receives 80 Purple Diamonds

Platform:
→ retains the normal commission model based on the original price
```

This is consistent with the Daily Task coupon rule.

Therefore the current shared coupon principle is:

```text
Eligible Playpal Coupon
→ may be transferred to customer
→ lowers customer payment
→ does not lower Playpal payout calculated from original price
```

Exact coupon eligibility, percentage, expiry, stacking rules, and platform accounting:

**TBD**

---

# 31. Task Rewards and Platform Economy

The source states:

```text
Complete tasks
→ Earn Coins / Points
→ Unlock Skills / Effects / Chat Bubbles / other items
```

This suggests that tasks are connected to more than Account Level.

They may also contribute to:

- Virtual economy
- Collection progression
- Avatar / equipment systems
- Skills
- Social identity items

Exact unlock dependencies remain TBD.

---

# 32. Relationship Between Daily and Achievement Tasks

The two task systems should interact without becoming the same system.

Example:

```text
User completes today's Daily Task
        │
        ├── receives Daily Task reward
        │
        ├── receives Activity Points
        │
        ├── progresses toward Daily Chest
        │
        └── increments "Complete Daily Tasks" Achievement
```

Therefore one action may contribute to both:

```text
short-term daily progression
and
long-term achievement progression
```

---

# 33. Relationship to Shared User Progression

Current high-level relationship:

```text
Daily Tasks
   │
   ├── EXP ───────────────► Account LVL
   ├── Coins ─────────────► Economy
   ├── Activity Points ───► Daily Chests
   └── Completion Count ──► Achievement Tasks


Achievement Tasks
   │
   ├── Track Account LVL
   ├── Track Platform Rank
   ├── Track Royal / Noble
   ├── Track Orders / Gifts
   ├── Track Collections
   └── Grant Achievement Rewards
```

Important:

Achievement Tasks may **observe** progress from other systems.

They should not redefine those other systems.

For example:

```text
Rank thresholds
→ defined by Shared User Progression System

Achievement Task
→ only checks whether the Rank milestone was reached
```

---

# 34. Events Mentioned in Source

The Achievement Task source also mentions platform activities:

## Irregular Events

Examples:

```text
Game competitions
```

## Weekly / Monthly / Seasonal Events

Examples:

```text
Order competitions
Gift-sending competitions
Gift-receiving competitions
```

These appear related to engagement but are not clearly part of the Achievement Task system.

Recommended documentation status:

```text
Task System
≠ Event / Competition System
```

These event concepts should eventually be moved into a separate:

```text
EVENT-ACTIVITY-SYSTEM.md
```

**Status: FUTURE MODULE / TBD**

---

# 35. Task State Model

A general task may conceptually have states such as:

```text
LOCKED
IN_PROGRESS
COMPLETED
CLAIMABLE
CLAIMED
```

However, the source does not explicitly define task-state behavior.

Questions include:

- Are rewards automatically granted?
- Must users manually claim them?
- Can completed achievements remain unclaimed?
- Can Daily Chests be opened manually?
- What happens after reset?

**Final task-state model: TBD**

---

# 36. Progress Display

Potential progress examples based on current source:

```text
Attack
30 / 50

Daily Activity
70 / 100

Login Days
124 / 365

Orders
30 / 50
```

The exact UI design is not yet approved.

**Progress component design: TBD**

---

# 37. Notifications

The source does not define notifications for:

- Daily Task completion
- Daily Chest unlock
- Achievement completion
- Achievement reward claim
- Near-completion progress
- Daily reset

**Status: TBD**

---

# 38. Anti-Abuse Requirements

Because tasks reward EXP, Coins, coupons, equipment, or other valuable items, future rules should define abuse prevention.

Areas requiring future rules include:

- Chat farming
- Party Room AFK farming
- Repeated low-value orders
- Gift loops
- Recharge abuse
- Fake account farming
- Block/report interactions
- Duplicate reward exploitation

No anti-abuse rules are defined in the current source.

**Status: TBD**

---

# 39. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on the Task System:

1. Treat Daily Tasks and Achievement Tasks as two subsystems under one Task System.
2. Do not merge their progress or reset logic.
3. Daily Tasks use Activity Point milestones `10 / 40 / 70 / 100`.
4. Do not change Daily Chest rewards without approval.
5. The 100-point Daily Chest includes an Item Box.
6. Do not invent the Item Box contents; the source refers to a missing Data Sheet.
7. Daily Tasks are a confirmed source of EXP for Account Level.
8. Achievement Tasks track long-term cumulative milestones.
9. Achievement Tasks may reference Account Level, Rank, and Royal/Noble but must not redefine those systems.
10. Platform Rank does not reset or derank; Achievement UI must follow the Shared User Progression System.
11. Royal / Noble achievement milestones must follow the approved Royal hierarchy.
12. Do not invent missing achievement rewards.
13. Preserve listed milestone values exactly where the source is explicit.
14. Do not automatically expand `...` milestone sequences into assumed values.
15. Do not expose `Caleb` as user-facing text.
16. Do not assume what `Caleb` means; treat it as an internal review marker until clarified.
17. Do not equate `辅助` with Heal or Buff without approval.
18. Verified Playpal discount coupons may be transferable to customers when the coupon type allows it.
19. Coupon use must not reduce the Playpal payout from the original-price payout rule currently specified.
20. Do not merge Event / Competition concepts into core Achievement Tasks without approval.
21. Existing Figma / prototype designs are references unless marked `APPROVED`.

---

# 40. Open Questions

## Daily Tasks

- Full Daily Task list
- Daily task Data Sheet
- Per-task reward values
- Activity Points per task
- Reset time
- Reset timezone
- Manual vs automatic reward claim
- Unclaimed chest behavior
- Item Box contents
- Playpal coupon source
- Coupon expiry / stacking
- Anti-abuse rules

## Achievement Tasks

- Complete milestone lists where source uses `...`
- Achievement categories
- Full reward table
- Whether rewards are auto-granted or claimed
- Whether achievements have tiers / rarity
- Whether progress is retroactive
- Whether login days are cumulative or consecutive
- Meaning of `辅助`
- Meaning of `Caleb`
- Valid Party Room participation rule
- Coin milestone accounting method
- Which chest types count
- Job / Career system relationship
- Achievement notification behavior

## Shared

- Task UI
- Task history
- Claim-all behavior
- Reward inventory behavior
- Analytics events
- Admin configuration
- Abuse prevention

All remain `TBD` or `REVIEW` until explicitly approved.

---

# 41. Current Document Status

**EARLY MASTER — v0.1**

This document combines the current Daily Task and Achievement Task rules into one shared Task System.

Current confirmed structure:

```text
Task System
├── Daily Tasks
└── Achievement Tasks
```

Daily Tasks provide short-term daily progression and contribute to Account Level through EXP.

Achievement Tasks track long-term milestones across multiple systems, including Account Level, Rank, Royal/Noble, orders, gifts, collection progress, and Daily Task completion.

Future approved task rules should update this master rather than being scattered across Figma, spreadsheets, chat history, or AI-generated prototypes.
