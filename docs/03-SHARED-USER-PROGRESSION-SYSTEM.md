# Find Playpal — Shared User Progression System

**Status:** Updated Early Master  
**Version:** 0.3  
**Sources:**  
- `Level & Mana & HP & Rank & Royal.xlsx` — detailed calculations, candidate thresholds, formulas, and legacy/alternative plans  
- `等级_贵族_段位系统.docx` — supplementary product explanation and current behavior clarification  

**Module Type:** Shared Account Progression / Status System  
**Applies To:** All Find Playpal users — both regular players and Playpals  
**Purpose:** Define the current shared user progression systems, including Account Level, EXP, Mana, Rank, Royal/Noble status, and Echelon 20.

> Important: This is a **platform-wide user system**. A Playpal and a regular player both use the same underlying account progression unless a future rule explicitly creates a role-specific exception.

> Source priority rule: when the supplementary product explanation explicitly clarifies a behavior that was previously ambiguous or presented as multiple alternatives in the workbook, the clarified product behavior is treated as the current rule. Detailed numerical calculations that are not clarified remain sourced from the workbook and may remain `TBD`, `REVIEW`, or `CONFLICT`.

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

The supplementary product explanation confirms that users increase Account Level **through completing tasks**.

Primary progression resource:

**EXP**

Current source range:

**LVL 1 → LVL 100**

---

## 2.2 EXP

EXP determines Account Level progression.

The current product-level rule is:

```text
Complete Tasks
→ Earn / Accumulate EXP
→ Increase Account Level
```

The workbook contains activity-based EXP entries such as Chat, Attack, Defend, Party Room, Gift, and Order. These remain detailed EXP/task references.

It is not yet fully defined whether every listed activity grants EXP directly or whether some activities grant EXP only through completion of a corresponding task.

**Activity-to-task relationship: REVIEW**

This remains primarily an **activity / participation progression system**, not a spending rank.

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

The supplementary product explanation confirms that Platform Rank is a **cumulative spending progression system**.

Users increase Rank through consumption related to:

- Placing orders
- Sending gifts

The accumulated Rank score:

- Does **not reset**
- Does **not decrease**
- Does **not cause rank demotion**

This Rank system is distinct from LVL / EXP.

Conceptually:

```text
Complete Tasks / Activity
→ EXP
→ Account Level

Order Spending + Gift Spending
→ Cumulative Rank Score
→ Platform Rank
```

Each time a user reaches a specified Rank milestone, the user receives the corresponding **one-time reward**.

The exact Rank ladder, threshold values, score conversion, and reward values remain referenced to the workbook. Because the workbook contains multiple candidate models, those numerical details remain `CONFLICT / REVIEW` until a final model is explicitly selected.

---

## 11.1 Approved Numeric Rank Model — Interpretation A

**Status:** APPROVED  
**Decision Reference:** DD-027 (see `16-DESIGN-DECISIONS.md`)

The numeric Platform Rank value referenced by `17-VISUAL-ASSET-MAP.md` (a scale of 1–100) and the named-tier Rank ladder (e.g. 青銅I, 白銀II) are approved as:

```text
Platform Rank (1–100)
and
Named-Tier Rank Ladder
=
two representations of the SAME progression system
```

A user's current named tier **maps into** a corresponding position on the numeric 1–100 Rank scale. They are **not** two separate progression systems, and **not** two independent parallel layers.

**Current Platform Rank range (APPROVED):**

```text
Minimum: Rank 1
Maximum: Rank 100
```

There are currently no Platform Ranks above 100, and there is no current plan to extend beyond Rank 100. If the product later expands the range, that will be a separate future product decision — not something to assume or implement now.

**Implementation principle (for future implementation, not applied to the prototype now):** the value `100` represents the current product maximum, not an incidental number. Future implementation should avoid scattering hard-coded `100` values throughout the code, and should instead reference the maximum from one centralized Rank configuration/constant where practical, so a future range change (if ever approved) does not require hunting down repeated literals.

This decision resolves only that *relationship* — that the two are one system, not two — and the confirmed 1–100 range. It does **not** resolve:

- **Which tier ladder is final** — the choice between the Detailed Candidate ladder (§12/§13), the Alternative Model (§14), or any other candidate remains `CONFLICT` (see §31.1).
- **The exact tier-to-number mapping/allocation** — whether one named tier corresponds to one Rank number, multiple Rank numbers, or a numeric range is not yet defined and remains `TBD`, and depends on the final ladder length being settled first.

AI and implementers must not select a final ladder or invent a tier-to-number mapping formula to close these gaps. They remain open per §31.1 and §33.

The current prototype's `RANK_DATA` array (`prototype/assets/js/shared.js`) is a third, non-canonical variant of the tier ladder — distinct from both the Detailed Candidate (§12/§13) and the Alternative Model (§14) — and must not be treated as the final ladder.

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

Royal / Noble is a separate premium prestige system based on **cumulative recharge**.

The supplementary product explanation confirms the current Chinese Royal / Noble hierarchy:

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

Royal / Noble is:

- Not Account Level
- Not Platform Rank
- Based on recharge / Noble progression
- Permanently unlockable by reaching cumulative recharge requirements
- Time-limited in terms of active privileges after the initial activation period

The workbook also contains English labels such as Sergeant, Knight, Viscount, Earl, Marquis, Duke, Royal, Emperor, and Lord.

A final one-to-one Chinese ↔ English naming table is still not explicitly confirmed.

**English translation mapping: REVIEW**

---

# 17. Current Royal / Noble Unlock Thresholds

The supplementary product explanation provides the following current unlock thresholds:

| Royal / Noble Tier | Cumulative Recharge Requirement |
|---|---:|
| 平民 | 0 |
| 军士 | 200 |
| 骑士 | 3,000 |
| 子爵 | 6,000 |
| 伯爵 | 12,000 |
| 侯爵 | 64,000 |
| 公爵 | 128,000 |
| 王族 | 256,000 |
| 皇族 | 512,000 |
| 天子 | 1,080,000 |

These values should be treated as the **current product thresholds** unless a later approved document changes them.

The older workbook table containing values such as `2,000 / 4,000 / 8,000 / 16,000 / 32,000 / 64,000 / 128,000 / 256,000` remains a **legacy / calculation reference** and should not override this clarified product table.

**Status: CURRENT PRODUCT RULE**

---

# 18. Royal / Noble Active Benefits

The supplementary product explanation defines benefits available while the corresponding Royal / Noble tier is active.

## 平民

No specific premium benefit is currently defined.

## 军士 — 200

- 贵族勋章
- 每天 10 点贵族积分

## 骑士 — 3,000

Includes applicable previous benefits, plus:

- 10 代金券
- 开通特效
- 贵族头框
- 贵族聊天气泡

## 子爵 — 6,000

Includes applicable previous non-`代钻` benefits, plus:

- 50 代钻
- 贵族主题风格
- 贵族礼物
- 贵族弹幕
- 贵族贴图 `(ver. ltr)`

## 伯爵 — 12,000

Includes applicable previous non-`代钻` benefits, plus:

- 100 代钻
- 上线通知
- 日程金币奖励翻倍
- 贵族身份开关
- 贵族音波 `(ver. ltr)`

## 侯爵 — 64,000

Includes applicable previous non-`代钻` benefits, plus:

- 500 代钻
- 昵称变化
- 访问隐身
- 贵族装备 `(ver. ltr)`

## 公爵 — 128,000

Includes applicable previous non-`代钻` benefits, plus:

- 1,000 代钻
- 贵族入场特效
- 防踢

## 王族 — 256,000

Includes applicable previous non-`代钻` benefits, plus:

- 1,500 代钻
- 进房隐身
- 贵族喇叭

## 皇族 — 512,000

Includes applicable previous non-`代钻` benefits, plus:

- 2,500 代钻
- 双倍星尘兑换率
- 排行榜隐身
- 贵族攻击 / 防护技能

## 天子 — 1,080,000

Includes applicable previous non-`代钻` benefits, plus:

- 5,000 代钻
- 无敌时刻
- 专属座驾
- 天子点名

## Benefit Terminology Review

The source uses both:

- `代金券`
- `代钻`

These terms should not be silently normalized until their intended relationship is confirmed.

The source also uses `(ver. ltr)` on some future benefits. The exact meaning and release status should be confirmed before implementation.

**Status: REVIEW**

---

# 19. Current Royal / Noble Unlock & Activation Rule

The supplementary product explanation resolves the earlier Plan A / Plan B ambiguity in favor of a **Plan B-style unlock + activation model**.

## 19.1 Unlock

Users accumulate recharge progress.

When cumulative recharge reaches a Royal / Noble threshold:

```text
Threshold reached
→ Royal / Noble tier unlocked
```

Unlocked tiers remain available for later activation.

---

## 19.2 First Activation

The first time the user reaches at least:

```text
200
```

and unlocks `军士` or above:

- No additional Blue Diamond activation payment is required.
- Royal / Noble privileges are automatically activated.
- The first active period lasts **30 days**.

---

## 19.3 Upgrading During the First 30 Days

If the user unlocks a higher Royal / Noble tier while the current 30-day activation is still active:

```text
Higher tier unlocked
→ Active tier upgrades
→ Existing countdown continues
```

The 30-day countdown:

**does not reset**

when a higher tier is unlocked during that active period.

---

## 19.4 After the 30-Day Active Period

After the active period expires:

- The user keeps the Royal / Noble tiers they have already unlocked.
- The user may choose to activate an unlocked Royal / Noble tier.
- Activation requires spending the corresponding amount of **Blue Diamonds**.
- Activation amount depends on tier.

The exact Blue Diamond activation amounts remain referenced to the workbook.

**Final activation-cost table: REVIEW / TO BE CONFIRMED FROM WORKBOOK**

---

## 19.5 Unlock vs Active Status

The system should distinguish:

```text
Royal / Noble Tier Unlocked
≠
Royal / Noble Privileges Active
```

A user can retain an unlocked Royal / Noble level while its active privileges are expired.

Conceptually:

```text
Cumulative Recharge
→ Permanently unlock tier

Activation
→ Temporarily enable tier privileges
```

---

# 20. Legacy Royal Plan A

The workbook also contains an older `Plan A` concept based on:

- 60-day point accumulation
- monthly maintenance
- gradual rank downgrade

The supplementary product explanation instead defines the 30-day activation model described above.

Therefore:

**Plan A is now treated as LEGACY / REFERENCE and is not the current product rule.**

AI and designers must not combine Plan A downgrade mechanics with the current activation system unless a future approved decision explicitly reintroduces them.

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

The current clarified Chinese Royal hierarchy identifies `天子` as the highest normal Royal / Noble tier.

The Echelon 20 source uses the English label `Lord` as the prerequisite. It is likely intended to reference the top Royal tier, but the source does not explicitly confirm the final Chinese ↔ English mapping.

**Whether `Lord = 天子`: REVIEW**

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

Note: the *relationship* between the named-tier ladder and the numeric 1–100 Platform Rank scale has been separately resolved — see §11.1 (Interpretation A, APPROVED). This entry remains open only for the choice of final tier ladder, names, and thresholds.

---

## 31.2 Rank Naming Conflict

Examples include:

- 赤耀 vs 红宝
- 蓝耀 vs 蓝宝
- 星耀 vs 星耀 I / II

**Status: CONFLICT / REVIEW**

---

## 31.3 Royal Plan A vs Plan B

The supplementary product explanation resolves the current product direction:

```text
Plan B-style unlock + 30-day activation
= CURRENT

Plan A 60-day accumulation + downgrade model
= LEGACY / REFERENCE
```

**Status: RESOLVED**

---

## 31.4 Royal Threshold Version Conflict

The supplementary product explanation provides the current threshold table:

```text
200 / 3k / 6k / 12k / 64k / 128k / 256k / 512k / 1.08m
```

Older threshold values in the workbook remain legacy/calculation references.

**Status: RESOLVED FOR CURRENT PRODUCT RULE**

---

## 31.5 Royal English Translation

English prestige names do not clearly align row-by-row with the clarified Chinese hierarchy.

**Status: REVIEW**

---

## 31.6 Royal Benefit Terminology

The supplementary source uses both `代金券` and `代钻`, and marks some benefits as `(ver. ltr)`.

Their exact product definitions remain unclear.

**Status: REVIEW**

---

## 31.7 Account Level Task / EXP Relationship

The supplementary product explanation says Account Level increases through completing tasks, while the workbook lists multiple activity-based EXP sources.

The exact implementation relationship between direct activity EXP and task completion remains to be documented.

**Status: REVIEW**

---

## 31.8 HP Missing

HP is part of the system name but its rules are not present.

**Status: TBD**

---

## 31.9 Mana LVL 100 Exception

The source adds the per-level Mana increase twice at LVL 100.

**Status: REVIEW**

---

## 31.10 Heal / Buff EXP Wording

The source uses `defend` wording in the Heal and Buff EXP notes.

**Status: REVIEW**

---

## 31.11 Order EXP Recipient

It is unclear whether order EXP applies to:

- buyer,
- Playpal,
- both,
- or only completed orders.

**Status: TBD**

---

## 31.12 Platform Rank Numbering Model — Interpretation A

The relationship between the named-tier Rank ladder and the numeric 1–100 Platform Rank scale used by `17-VISUAL-ASSET-MAP.md` was previously undefined.

Interpretation A (the numeric 1–100 scale and the named-tier ladder are the same progression system, with a user's tier mapping into the numeric scale) is now approved. See §11.1.

The current Platform Rank range (minimum 1, maximum 100, no ranks above 100, no current plan to extend) is also confirmed as an approved current rule. See §11.1.

The exact tier-to-number mapping/allocation is not defined by this approval and remains `TBD`.

**Status: RESOLVED (same-system relationship only) — final tier ladder selection remains open (§31.1), and the tier-to-number mapping/allocation remains `TBD`**

---

# 32. AI Design / Coding Rules

When an AI assistant works on this progression system:

1. Treat this as a shared system for **all users**.
2. Do not create separate player and Playpal account levels unless explicitly approved.
3. Do not confuse game-specific competitive ranks with Find Playpal Platform Rank.
4. Do not confuse Account LVL with Platform Rank.
5. Do not confuse Platform Rank with Royal / Noble.
6. Do not treat Echelon 20 as a normal level.
7. Account Level is a 100-level task/EXP progression system; do not replace it with spending progression.
8. Platform Rank is increased through cumulative Order / Gift spending and **does not reset or derank**.
9. Do not select a final Rank threshold model automatically; the workbook still contains conflicting numerical versions.
10. Follow the current Royal / Noble **unlock + 30-day activation** model.
11. Treat Royal Plan A as legacy/reference; do not merge its downgrade mechanics into the current Royal system.
12. Use the clarified Royal unlock thresholds unless a later approved document supersedes them.
13. Do not invent Blue Diamond activation costs when the exact tier activation table has not been confirmed.
14. Do not normalize `代金券` and `代钻` into one benefit without approval.
15. Do not invent HP rules.
16. Do not silently correct the LVL 100 Mana formula.
17. Do not silently correct Heal / Buff wording.
18. Do not infer missing English / Chinese prestige translations.
19. Report conflicts before modifying product logic.
20. Visual redesign must not alter progression formulas, thresholds, or entitlement mechanics without explicit product approval.
21. Existing Figma screens are references unless marked `APPROVED`.

---

# 33. Future Documentation Needed

The following still require product decisions or clarification:

- Exact purpose of Mana
- HP mechanics
- Attack mechanics
- Defend mechanics
- Heal mechanics
- Buff mechanics
- Status effects
- Relationship between direct activity EXP and task completion
- EXP anti-abuse rules
- EXP reset rules
- Final daily EXP cap
- Order EXP recipient
- Final Rank ladder
- Final Rank thresholds / score conversion
- Final ladder-to-100-slot numbering allocation (once the final ladder is chosen — see §11.1)
- Exact one-time Rank rewards
- Rank visibility
- Exact Blue Diamond activation cost for each Royal / Noble tier
- Meaning and lifecycle of `贵族积分`
- Definition of `代金券` vs `代钻`
- Whether Royal benefit allowances are per activation, monthly, daily, or one-time
- Final status of `(ver. ltr)` Royal benefits
- Final English names for Royal / Noble tiers
- Royal privilege expiration UI
- Royal reactivation flow
- Echelon 20 qualification mapping (`Lord` vs `天子`)
- Echelon 20 renewal / removal rules
- Echelon 20 monthly number allocation
- Echelon 20 theme selection
- Profile display hierarchy
- Notifications for level-up / rank-up / Royal unlock / Royal expiration
- Admin tools
- Analytics events

All remain `TBD` or `REVIEW` until explicitly decided.

---

# 34. Current Document Status

**UPDATED EARLY MASTER — v0.3**

This document combines the detailed workbook with the later supplementary product explanation.

Confirmed updates in v0.2 include:

- Account Level remains a shared 100-level system and is described at product level as progressing through tasks / EXP.
- Platform Rank is confirmed as cumulative Order / Gift spending progression.
- Platform Rank does not reset and does not derank.
- Rank milestones provide one-time rewards.
- The clarified Royal / Noble unlock thresholds are now treated as the current product thresholds.
- Royal / Noble follows the 30-day unlock / activation model.
- First Royal unlock activates automatically without additional Blue Diamond payment.
- Upgrading Royal tier during the active 30-day period does not reset the countdown.
- After expiration, users may reactivate an unlocked Royal tier using Blue Diamonds.
- Royal Plan A is retained only as legacy/reference.

Confirmed updates in v0.3 include:

- The numeric Platform Rank scale (1–100) used by `17-VISUAL-ASSET-MAP.md` and the named-tier Rank ladder are approved as two representations of the same progression system, with a user's named tier mapping into the numeric scale (Interpretation A — see §11.1, DD-027).
- Platform Rank's current range is confirmed: minimum Rank 1, maximum Rank 100, with no current plan to extend beyond 100 (§11.1, DD-027).
- This resolves only that same-system *relationship* and the confirmed range; the final tier ladder itself (§12/§13 vs §14) and the exact tier-to-number mapping/allocation remain open (§31.1, §31.12, §33).

The workbook remains the source reference for formulas, detailed numerical calculations, activation-cost modeling, and unresolved Rank threshold alternatives.

Future approved decisions should update this master rather than being scattered across Figma, spreadsheets, chat history, or AI-generated prototypes.
