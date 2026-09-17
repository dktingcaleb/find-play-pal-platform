# Find Playpal — Shared User Progression System

**Status:** Early Draft  
**Version:** 0.1  
**Source:** `Level & Mana & HP & Rank & Royal.xlsx`  
**Module Type:** Shared Account Progression / Status System  
**Applies To:** All Find Playpal users — both regular players and Playpals  
**Purpose:** Define the current known shared user progression systems, including Account Level, EXP, Mana, Rank, Royal/Noble status, and Echelon 20.

> Important: This is a **platform-wide user system**. A Playpal and a regular player both use the same underlying account progression unless a future rule explicitly creates a role-specific exception.

> The source workbook contains multiple calculations, alternative plans, and some conflicting/unfinished data. This document preserves those differences instead of silently deciding which version is correct.

---

# 1. Core Principle

Find Playpal users have a shared progression identity.

The system is not limited to Playpals and is not limited to customers.

Both:

- Regular players / users
- Playpals / companion providers

can participate in the same account-level progression system.

A user's role and a user's progression are separate concepts.

```text
User Account
├── Role
│   ├── Regular Player
│   └── Playpal
│
└── Shared Progression
    ├── Account Level (LVL)
    ├── EXP
    ├── Mana
    ├── HP
    ├── Rank
    ├── Royal / Noble Status
    └── Echelon 20
```

Role-specific privileges may be added later, but they must not automatically create a separate level system.

---

# 2. Progression Systems Must Remain Separate

The workbook contains several progression-related concepts.

They should not be treated as synonyms.

## 2.1 Account Level — LVL

Represents the user's general platform progression.

Primary progression resource:

**EXP**

Current source range:

**LVL 1 → LVL 100**

---

## 2.2 EXP

EXP is earned through platform activity.

EXP determines Account Level progression.

This is primarily an **activity / participation progression system**, not a spending rank.

---

## 2.3 Mana

Mana is a user attribute associated with Account Level.

The current source defines a Mana progression formula.

Its exact gameplay / platform function is not yet documented.

---

## 2.4 HP

HP is referenced in the workbook/file naming.

However, the current source does not contain a complete HP progression table or a clear HP rule.

**Status: TBD**

AI must not invent an HP formula.

---

## 2.5 Rank

Rank is a separate platform status ladder associated with user spending / Blue Diamond consumption in the source workbook.

Rank is **not the same as Account Level**.

---

## 2.6 Royal / Noble

Royal / Noble is a separate premium / prestige status system.

The source associates it with recharge / Noble Points and benefits.

Royal / Noble is **not the same as Rank** and **not the same as Account Level**.

---

## 2.7 Echelon 20

Echelon 20 is a special invitation-only prestige layer associated with the highest Royal ranking.

It should not be treated as a normal account level.

---

# 3. Account Level System

## 3.1 Level Range

Current source:

```text
LVL 1
↓
...
↓
LVL 100
```

Maximum level in the current source:

**LVL 100**

Whether the level cap can increase later:

**TBD**

---

# 4. EXP Progression Formula

The source defines cumulative EXP by level.

For LVL 1:

```text
EXP = 0
```

For LVL 2 and above, the source formula is:

```text
(level - 1) / 2 ×
[
  6000 +
  (6000 + (level - 2) × 200)
]
```

This produces an increasing EXP requirement.

The incremental EXP required between levels begins at:

```text
LVL 1 → 2 = 6,000 EXP
LVL 2 → 3 = 6,200 EXP
LVL 3 → 4 = 6,400 EXP
...
```

The per-level requirement increases by:

**200 EXP per level**

---

# 5. EXP Level Checkpoints

Selected cumulative EXP checkpoints from the current source:

| Level | Cumulative EXP |
|---:|---:|
| 1 | 0 |
| 2 | 6,000 |
| 3 | 12,200 |
| 4 | 18,600 |
| 5 | 25,200 |
| 10 | 61,200 |
| 20 | 148,200 |
| 30 | 255,200 |
| 40 | 382,200 |
| 50 | 529,200 |
| 60 | 696,200 |
| 70 | 883,200 |
| 80 | 1,090,200 |
| 90 | 1,317,200 |
| 100 | 1,564,200 |

The full source workbook remains the numerical reference for all intermediate levels.

---

# 6. Current EXP Sources

The source defines several ways users may earn EXP.

These apply to platform participation.

## 6.1 Daily Schedule Boxes

Source note:

```text
4 boxes total
300 EXP per box
```

Maximum indicated daily EXP:

```text
4 × 300 = 1,200 EXP
```

---

## 6.2 Chat

Source rule:

```text
10 EXP per 5 chat messages / enters
Maximum 100 EXP per day
```

Exact definition of what counts as a valid chat event:

**TBD**

Anti-spam rules:

**TBD**

---

## 6.3 Attack

Source rule:

```text
50 EXP per attack
Maximum 100 EXP per day
```

The workbook also describes Attack as:

```text
apply status effect or just animation
```

Exact feature behavior:

**TBD**

---

## 6.4 Defend

Source rule:

```text
50 EXP per defend
Maximum 100 EXP per day
```

The workbook describes Defend as:

```text
defend attack animation or status effect
```

Exact feature behavior:

**TBD**

---

## 6.5 Heal

Source table places Heal in the EXP system.

The source note says:

```text
50 EXP per defend
Maximum 100 EXP per day
```

Because the wording says `defend` under the Heal row, this may be a source typo or may reflect intentional shared behavior.

**Status: REVIEW**

Do not silently change it to `50 EXP per heal` until approved.

The workbook later describes Heal as:

```text
remove status effect
```

---

## 6.6 Buff

Source table places Buff in the EXP system.

The source note says:

```text
100 EXP per defend
Maximum 100 EXP per day
```

Because the wording says `defend` under the Buff row, this may be a source typo or intentional behavior.

**Status: REVIEW**

The workbook later describes Buff as:

```text
apply ur mood today
```

Exact Buff mechanics:

**TBD**

---

## 6.7 Join Party Room

Source rule:

```text
5 EXP per minute
Maximum 600 EXP per day
```

Whether AFK users earn EXP:

**TBD**

Whether different Party Room types have different rules:

**TBD**

---

## 6.8 Gift

Source rule:

```text
10 DM = 1 EXP
Maximum 1,000 EXP per day
```

Meaning of `DM` in this rule should be confirmed in the currency documentation.

**Currency mapping: TBD / REVIEW**

---

## 6.9 Order

Source rule:

```text
100 EXP per order
Maximum 1,000 EXP per day
```

The source does not specify whether this means:

- placing an order,
- completing an order,
- receiving an order as a Playpal,
- or both parties.

**Status: TBD**

This is especially important because both players and Playpals share the progression system.

---

# 7. EXP Daily Maximum

The workbook models the following possible daily EXP sources:

| Activity | Source Maximum |
|---|---:|
| Daily Schedule Boxes | 1,200 |
| Chat | 100 |
| Attack | 100 |
| Defend | 100 |
| Heal | 100 |
| Buff | 100 |
| Party Room | 600 |
| Gift | 1,000 |
| Order | 1,000 |

If all modeled maximums are counted independently, the spreadsheet uses them as cumulative progression inputs.

However, the source does not explicitly state that every category can always be earned simultaneously.

**Final daily EXP cap: TBD**

---

# 8. Mana System

The source contains a Mana progression table from LVL 1 to LVL 100.

## 8.1 Starting Mana

```text
LVL 1 = 100 Mana
```

## 8.2 Standard Increase

Source setting:

```text
Increase Per Lv = 2
```

Therefore the normal progression is:

```text
LVL 1 = 100
LVL 2 = 102
LVL 3 = 104
...
```

## 8.3 Level 100 Source Exception

The source formula for LVL 100 adds the Level Increase value twice.

Instead of the normal +2 increment, the final source formula effectively applies +4 from LVL 99 to LVL 100.

This results in:

```text
LVL 100 = 300 Mana
```

A normal uninterrupted +2 progression would produce a different value.

Therefore the LVL 100 extra increment must be treated as an explicit source behavior until reviewed.

**Status: REVIEW**

AI must not normalize or remove this exception without approval.

---

# 9. Mana Purpose

The source does not yet define what Mana is consumed for.

Possible interactions are not specified.

Do not assume Mana is used for:

- Attack
- Defend
- Heal
- Buff
- Party Room actions
- Gifts
- Orders

until an explicit rule is provided.

**Mana consumption / regeneration rules: TBD**

---

# 10. HP System

HP is named in the workbook / feature title, but a complete HP table is not present in the current source.

The following remain undefined:

- Starting HP
- HP per level
- Maximum HP
- HP consumption
- HP recovery
- Relationship to Attack / Defend / Heal
- Relationship to status effects
- Whether HP resets
- Whether HP has gameplay consequences

**Status: TBD**

AI must not infer HP behavior from ordinary RPG conventions.

---

# 11. Platform Rank System

The workbook contains a separate Rank ladder based on spending / Blue Diamond consumption.

This Rank system is distinct from LVL / EXP.

Conceptually:

```text
Activity
→ EXP
→ Account Level

Spending / Blue Diamond Consumption
→ Rank
```

The exact final Rank threshold model is not yet locked because the workbook contains multiple versions.

---

# 12. Detailed Rank Ladder — Source Version

One source ladder contains the following sequence:

## Bronze

- 青铜 I
- 青铜 II
- 青铜 III
- 青铜 IV
- 青铜 V

## Silver

- 白银 I
- 白银 II
- 白银 III
- 白银 IV
- 白银 V

## Gold

- 黄金 I
- 黄金 II
- 黄金 III
- 黄金 IV
- 黄金 V

## Platinum

- 铂金 I
- 铂金 II
- 铂金 III
- 铂金 IV
- 铂金 V

## Diamond

- 钻石 I
- 钻石 II
- 钻石 III
- 钻石 IV
- 钻石 V
- 钻石 VI

## Emerald

- 翡翠 I
- 翡翠 II
- 翡翠 III
- 翡翠 IV
- 翡翠 V
- 翡翠 VI
- 翡翠 VII

## Higher Tiers

- 赤耀 I
- 赤耀 II
- 蓝耀 I
- 蓝耀 II
- 星耀

Total source steps:

**38 status points including starting rank**

---

# 13. Rank Spend Thresholds — Detailed Candidate

One workbook model uses the following total spend / Blue Diamond thresholds:

| Rank | Total Spend |
|---|---:|
| 青铜 I | 0 |
| 青铜 II | 5 |
| 青铜 III | 15 |
| 青铜 IV | 30 |
| 青铜 V | 50 |
| 白银 I | 80 |
| 白银 II | 125 |
| 白银 III | 190 |
| 白银 IV | 280 |
| 白银 V | 400 |
| 黄金 I | 570 |
| 黄金 II | 815 |
| 黄金 III | 1,165 |
| 黄金 IV | 1,655 |
| 黄金 V | 2,325 |
| 铂金 I | 3,665 |
| 铂金 II | 6,345 |
| 铂金 III | 11,705 |
| 铂金 IV | 22,425 |
| 铂金 V | 43,865 |
| 钻石 I | 86,745 |
| 钻石 II | 172,505 |
| 钻石 III | 266,888 |
| 钻石 IV | 366,888 |
| 钻石 V | 466,888 |
| 钻石 VI | 566,888 |
| 翡翠 I | 866,888 |
| 翡翠 II | 1,166,888 |
| 翡翠 III | 1,666,888 |
| 翡翠 IV | 2,166,888 |
| 翡翠 V | 2,966,888 |
| 翡翠 VI | 3,766,888 |
| 翡翠 VII | 4,766,888 |
| 赤耀 I | 6,766,888 |
| 赤耀 II | 9,766,888 |
| 蓝耀 I | 14,766,888 |
| 蓝耀 II | 22,766,888 |
| 星耀 | 58,888,888 |

This appears in the workbook as one detailed candidate progression.

**Final approval status: TBD**

---

# 14. Alternative Rank Threshold Model

The workbook also contains another Rank Profit Chart with a different / compressed threshold progression.

Examples include:

```text
青铜 I = 0
青铜 II = 88
白银 I = 688
白银 II = 1,888
白银 III = 4,888
黄金 I = 9,888
...
星耀 II = 58,888,888
```

This alternative version does not use exactly the same number of sub-ranks or naming as the detailed Rank model.

It also contains names such as:

- 红宝 I / II
- 蓝宝 I / II
- 星耀 I / II

while another source uses:

- 赤耀 I / II
- 蓝耀 I / II
- 星耀

Therefore:

**Rank naming and spend thresholds are currently in CONFLICT / REVIEW state.**

AI must not choose one model automatically.

---

# 15. Rank Reward / Profit Modeling

The Rank Profit Chart sheets contain financial modeling related to:

- Total Blue Diamond consumption
- Incremental Blue Diamond consumption
- Estimated revenue
- Estimated minimum net profit
- Estimated average net profit
- Cumulative profit
- Cash coupon rewards

These calculations are business-model references.

They should not automatically become user-facing Rank rules until approved.

**Status: BUSINESS MODEL REFERENCE**

---

# 16. Royal / Noble System

The workbook contains a separate premium prestige system referred to as `Noble` / `Royal`.

The source contains the following Chinese status names:

1. 平民
2. 军士
3. 骑士
4. 子爵
5. 伯爵
6. 侯爵
7. 公爵
8. 王族
9. 皇族
10. 天子

The workbook also contains English prestige labels such as:

- Sergeant
- Knight
- Viscount
- Earl
- Marquis
- Duke
- Royal
- Emperor
- Lord

However, their row alignment does not clearly establish a final approved one-to-one Chinese ↔ English mapping.

**Translation mapping: REVIEW**

Do not infer the final mapping automatically.

---

# 17. Royal / Noble Point Thresholds

One source table contains:

| Status | Noble / Recharge Points |
|---|---:|
| 平民 | 0 |
| 军士 | 200 |
| 骑士 | 2,000 |
| 子爵 | 4,000 |
| 伯爵 | 8,000 |
| 侯爵 | 16,000 |
| 公爵 | 32,000 |
| 王族 | 64,000 |
| 皇族 | 128,000 |
| 天子 | 256,000 |

The workbook later also contains business-model tables using larger values for some ranks.

Therefore these figures should remain source values rather than being silently treated as the final production threshold table.

**Status: REVIEW**

---

# 18. Royal / Noble — Plan A

The workbook contains a rule set labelled `rules plan A`.

Current source rules:

1. Every recharge produces an equivalent amount of Noble Points.
2. Noble Points can accumulate for **60 days**.
3. Reaching a required Noble Point amount grants the corresponding Noble rank.
4. The first time a user reaches a rank, the user receives that rank's voucher.
5. On the first day of each month, the user receives vouchers and exclusive gifts based on Noble rank.
6. Exclusive gifts include a concept where:
   - the recipient has a Noble supporter / backing list;
   - the gift sender has an `avatar partner`.
7. Noble recommendation is listed as a feature.
8. If the user no longer maintains the required recharge points, or recharge points expire:
   - the user drops **one rank**;
   - the rank does not immediately reset to zero;
   - continued inactivity causes continued monthly rank decline.

Items not yet fully defined:

- exact voucher amount
- exact exclusive gifts
- supporter-list behavior
- avatar partner behavior
- recommendation behavior
- exact downgrade date
- exact timezone
- grace period

**Status: PLAN A / NOT YET SELECTED**

---

# 19. Royal / Noble — Plan B

The workbook contains a second rule set labelled `rules plan B`.

Current source rules:

1. Every recharge produces an equivalent amount of Noble Points.
2. Noble Points accumulate to determine Noble rank.
3. After the first recharge, the rank receives a **30-day countdown**.
4. When the countdown ends, the user must spend Diamonds to activate the rank again.
5. Different ranks have different activation requirements.
6. Reaching a rank unlocks its corresponding benefits and privileges.
7. Noble Level itself does not reset.
8. The prestige status can expire.
9. Maximum activation duration is **30 days**.
10. Every activation requires the corresponding amount of Blue Diamonds.

The workbook contains example activation-cost calculations by rank.

**Status: PLAN B / NOT YET SELECTED**

---

# 20. Royal Plan Conflict

Plan A and Plan B represent different retention mechanics.

### Plan A

```text
Recharge Points
→ 60-day accumulation
→ Rank
→ inactivity / expiration causes gradual monthly downgrade
```

### Plan B

```text
Recharge Points
→ permanent achieved Noble Level
→ 30-day active status
→ Blue Diamond activation required to keep privileges active
```

These are not the same mechanic.

Until explicitly approved:

**Do not merge Plan A and Plan B.**

**Do not allow AI to select a preferred version.**

---

# 21. Echelon 20

The workbook defines a special prestige concept called:

**Echelon 20**

Slogan:

> Where only the chosen reign

This is a special invitation identity, not an ordinary Account Level.

---

# 22. Echelon 20 Requirements

Current source requirements:

1. Must reach `Lord` rank from the Royal ranking.
2. Maintain `Lord` rank for **6 continuous months or more**.
3. Invitation only by Find Playpal / PlayPal Official.
4. Only **20 people** will be invited every month.

Because the English `Lord` label is not yet cleanly mapped to the Chinese Royal hierarchy in the workbook:

**Exact required Chinese Royal tier: REVIEW**

---

# 23. Echelon 20 — Unique Identity

Current source identity elements:

- Exclusive Theme
- Avatar Frame
- Chat Bubble in private chat and Party Room
- Badge
- Mount
- Entry Effects
- Exclusive Gift

---

# 24. Echelon 20 — Privileges

Current source privileges include:

1. Rename Card × 1
2. Influence Gift × 1
3. Special Echelon 20 themed Party Room
4. Merchandise
5. Free invitations to offline activities / events

The `Influence Gift` source note states that the recipient, limited to a verified Playpal, receives:

**24-hour homepage recommendation exposure**

Exact mechanics and abuse prevention:

**TBD**

---

# 25. Echelon 20 — Theme Options

The workbook proposes two visual concepts.

## Western Theme — Echelon 20

Visual direction:

- Black + gold
- Metal
- Crown
- Scepter
- Flame

Core symbolism:

- Imperial power
- Number identity
- Authority
- Throne

Chat bubble:

- Metallic scepter / decree feeling

Entry effect:

- Throne arrival
- Golden eagle escort

Voice concept:

```text
“Echelon No.5 has arrived”
```

Exclusive gifts:

- Scepter
- Crown
- Eagle seal

Status-keeping concept:

- Imperial number `01–20`
- Hall of Honor

---

## Eastern Theme — 至尊二十

Visual direction:

- Golden dragon
- Imperial seal
- Auspicious clouds
- Palace
- Heavenly light

Core symbolism:

- Mandate of Heaven
- Imperial seal
- Dragon procession
- Imperial decree

Chat bubble:

- Imperial-decree / bamboo-scroll style

Entry effect:

- Dragon rises through the golden palace
- Auspicious-cloud holy light

Voice concept:

```text
“天子五号驾临！”
```

Exclusive gifts:

- Jade ornament
- Imperial seal
- Dragon pearl

Status-keeping concept:

- Imperial title
- Seal inheritance / monthly progression

---

# 26. Theme Selection Concept

The workbook includes this idea:

> Design both theme systems and allow the player to choose the theme for that month.

Whether this remains the final design rule:

**TBD**

---

# 27. Relationship Between the Systems

Current conceptual relationship:

```text
                         ┌─────────────────────┐
Platform Activity ─────►│ EXP                 │
                         └─────────┬───────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │ Account LVL 1–100   │
                         └─────────┬───────────┘
                                   │
                          Attribute progression
                                   │
                             ┌─────┴─────┐
                             ▼           ▼
                           Mana          HP
                                        TBD


Spending / Blue Diamond Use
            │
            ▼
      Platform Rank


Recharge / Noble Points
            │
            ▼
      Royal / Noble
            │
            ▼
     Highest Royal Tier
            │
   + 6 months maintenance
   + official invitation
            │
            ▼
       Echelon 20
```

This diagram is conceptual documentation only.

Exact backend relationships remain TBD.

---

# 28. Role Independence

A user's progression status must not be inferred from whether they are a Playpal.

Examples:

```text
Regular Player
→ can have LVL
→ can have Rank
→ can have Royal status
→ may qualify for Echelon 20

Playpal
→ can have LVL
→ can have Rank
→ can have Royal status
→ may qualify for Echelon 20
```

Being a Playpal is a service-provider role.

Being high-level / high-rank / Royal is a progression or prestige status.

These must remain separate in the data model and UI.

---

# 29. UI Implication

When designing profiles, the interface may eventually need to show multiple independent user statuses.

For example:

```text
User
├── LVL
├── EXP Progress
├── Mana / HP
├── Rank
├── Royal Badge
└── Echelon 20 Identity
```

However, their exact placement and visibility are not yet defined.

**Profile presentation rules: TBD**

AI must not design all of them as one combined badge without approval.

---

# 30. Data Model Principle

The implementation should conceptually avoid one generic field such as:

```text
user.rank
```

for every progression system.

Different systems should remain distinguishable.

Possible conceptual fields:

```text
account_level
account_exp
mana
hp

platform_rank
platform_rank_progress

royal_level
royal_points
royal_status
royal_expiry

echelon20_status
echelon20_number
echelon20_theme
```

These are documentation concepts only.

**Final database schema: TBD**

---

# 31. Current Conflicts / Review Items

## 31.1 Rank Threshold Conflict

Multiple Rank spend models exist.

**Status: CONFLICT**

---

## 31.2 Rank Naming Conflict

Examples include:

- 赤耀 vs 红宝
- 蓝耀 vs 蓝宝
- 星耀 vs 星耀 I / II

**Status: CONFLICT / REVIEW**

---

## 31.3 Royal Plan A vs Plan B

Two different Royal-maintenance mechanics exist.

**Status: CONFLICT / DECISION REQUIRED**

---

## 31.4 Royal English Translation

English prestige names do not clearly align row-by-row with the Chinese rank names.

**Status: REVIEW**

---

## 31.5 HP Missing

HP is part of the system name but its rules are not present.

**Status: TBD**

---

## 31.6 Mana LVL 100 Exception

The source adds the per-level Mana increase twice at LVL 100.

**Status: REVIEW**

---

## 31.7 Heal / Buff EXP Wording

The source uses `defend` wording in the Heal and Buff EXP notes.

**Status: REVIEW**

---

## 31.8 Order EXP Recipient

It is unclear whether order EXP applies to:

- buyer,
- Playpal,
- both,
- or only completed orders.

**Status: TBD**

---

# 32. AI Design / Coding Rules

When an AI assistant works on this progression system:

1. Treat this as a shared system for **all users**.
2. Do not create separate player and Playpal account levels unless explicitly approved.
3. Do not confuse game-specific competitive ranks with Find Playpal Platform Rank.
4. Do not confuse Account LVL with Platform Rank.
5. Do not confuse Platform Rank with Royal / Noble.
6. Do not treat Echelon 20 as a normal level.
7. Do not select Rank threshold model A or B automatically.
8. Do not select Royal Plan A or Plan B automatically.
9. Do not invent HP rules.
10. Do not silently correct the LVL 100 Mana formula.
11. Do not silently correct Heal / Buff wording.
12. Do not infer missing English / Chinese prestige translations.
13. Report conflicts before modifying product logic.
14. Visual redesign must not alter progression formulas without explicit product approval.
15. Existing Figma screens are references unless marked `APPROVED`.

---

# 33. Future Documentation Needed

The following still require product decisions:

- Exact purpose of Mana
- HP mechanics
- Attack mechanics
- Defend mechanics
- Heal mechanics
- Buff mechanics
- Status effects
- EXP anti-abuse rules
- EXP reset rules
- Final daily EXP cap
- Order EXP recipient
- Final Rank ladder
- Final Rank thresholds
- Rank benefits
- Rank visibility
- Final Royal plan
- Royal point expiry
- Royal benefits
- Royal vouchers
- Royal exclusive gifts
- Royal recommendation
- Echelon 20 qualification mapping
- Echelon 20 renewal / removal rules
- Echelon 20 monthly number allocation
- Echelon 20 theme selection
- Profile display hierarchy
- Notifications for level-up / rank-up
- Admin tools
- Analytics events

All remain `TBD` until explicitly decided.

---

# 34. Current Document Status

**EARLY MASTER**

This document records the current progression concepts from the existing workbook plus the confirmed rule that the system applies to **both regular players and Playpals**.

The original workbook remains the source reference for detailed calculations while unresolved alternatives remain under review.

Future approved decisions should update this master rather than being scattered across Figma, spreadsheets, chat history, or AI-generated prototypes.
